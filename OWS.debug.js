function $_global_ows() {
    IsMenuShown = false;
    ChevronContainer = null;
    itemTableDeferred = null;
    imageCell = null;
    onKeyPress = false;
    downArrowText = null;
    currentEditMenu = null;
    currentItemID = null;
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemOpenApp = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    bIsCheckout = 0;
    currentItemCanModify = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemEvtType = 0;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null;
    g_MaximumSelectedItemsAllowed = 100;
    g_CustomActionDialogHandlers = new Object();
    g_CustomActionDialogHandlerId = 0;
    g_ExpGroupWPState = new LRUCache();
    DocOpen = {
        CLIENT: 0,
        BROWSER: 1
    };
    hoverTR = null;
    ecbTD = null;
    ProtocolCommand = {
        View: 'ofv',
        Edit: 'ofe',
        New: 'nft'
    };
    phManager = new (function() {
    ULSw7Q:
        ;
        var fProtocolHandlerEnabled = false;
        var fProtocolHandlerInitialized = false;
        var supportedPHs = {};

        this.ShouldTryProtocolHandler = function(strApp) {
            return !IsStrNullOrEmpty(strApp) && typeof navigator.msLaunchUri == "function" && supportedPHs[strApp] == null;
        };
        this.SetProtocolHandlerEnabled = function(strApp, bEnabled) {
            supportedPHs[strApp] = bEnabled;
        };
        this.IsProtocolHandlerEnabled = function(strApp) {
            if (IsStrNullOrEmpty(strApp))
                return false;
            if (supportedPHs[strApp] != null)
                return supportedPHs[strApp];
            if (fProtocolHandlerInitialized)
                return fProtocolHandlerEnabled;
            fProtocolHandlerInitialized = true;
            if (strApp === "ms-project") {
                if (typeof navigator.msLaunchUri == "function") {
                    fProtocolHandlerEnabled = true;
                    return fProtocolHandlerEnabled;
                }
            }
            if (Boolean(window.ActiveXObject)) {
                try {
                    if (strApp === "ms-project") {
                        var projActiveX = new ActiveXObject("WinProj.Activator");
                    }
                    else {
                        var activeX = new ActiveXObject("SharePoint.OpenDocuments.5");
                    }
                    fProtocolHandlerEnabled = true;
                }
                catch (e) { }
            }
            else if (IsSupportedNPApiBrowserOnWin()) {
                var plugin = CreateNPApiOnWindowsPlugin("application/x-sharepoint");

                if (plugin != null) {
                    try {
                        if (plugin.GetOfficeVersion() == "15") {
                            fProtocolHandlerEnabled = true;
                        }
                    }
                    catch (e) { }
                }
            }
            return fProtocolHandlerEnabled;
        };
        this.CreateProtocolHandlerUrl = function(strApp, strUrl, command, defaultSaveUrl) {
            var ret = [];
            var protocolList = strApp.split('|');

            if (protocolList.length == 2) {
                ret.push(protocolList[0]);
                ret.push(':');
                ret.push(strUrl);
                return ret.join('');
            }
            else if (protocolList.length == 3)
                strApp = protocolList[0];
            ret.push(strApp);
            ret.push(':');
            ret.push(command);
            ret.push('|u|');
            ret.push(strUrl);
            if (command == ProtocolCommand.New) {
                ret.push('|s|');
                ret.push(defaultSaveUrl);
            }
            return ret.join('');
        };
    });
    CBSelectedValues_InitializePrototype();
    PageContextInfo_InitializePrototype();
    g_ExtensionNotSupportCheckoutToLocal = ["ascx", "asp", "aspx", "htm", "html", "master", "odc", "exe", "bat", "com", "cmd", "onetoc2"];
    g_ExtensionDefaultForRead = ["jpg", "jpeg", "bmp", "png", "gif", "onetoc2", "one", "odc"];
    bValidSearchTerm = false;
    fListControl = false;
    fListErrorShown = false;
    fNewDoc = false;
    fNewDoc2 = false;
    fNewDoc3 = false;
    SPDesignerDownloadUrl = "http://o15.officeredir.microsoft.com/r/rlidSPD2013Download";
    SPDesignerProgID = "SharePoint.WebPartPage.Document";
    CtxRgiid_InitializePrototype();
    g_varSkipRefreshOnFocus = 0;
    g_useDialogAlwaysList = ["upload.aspx", "uploadex.aspx", "deploydeveloperapp.aspx"];
    LRUCache_InitializePrototype();
    v_stsOpenDoc = null;
    v_strStsOpenDoc = null;
    g_AdditionalNavigateHierarchyQString = "";
    httpFolderTarget = null;
    httpFolderSource = null;
    httpFolderDiv = null;
    previousClickedItemRow = null;
    Point.prototype = {
        x: undefined,
        y: undefined,
        toString: function() {
        ULSw7Q:
            ;
            return "(" + String(this.x) + "," + String(this.y) + ")";
        }
    };
    isdlg = (ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1"));
    if (_spBodyOnLoadFunctionNames != null && typeof _spBodyOnLoadFunctionNames != "undefined") {
        _spBodyOnLoadFunctionNames.push("SearchOnBodyLoad");
    }
    if (isdlg == null) {
        SetEvent("resize", FixRibbonAndWorkspaceDimensionsForResize, window);
    }
    QstringStruct.prototype.toString = QstringStructToString;
    QstringStruct.prototype.toArray = QstringStructToArray;
    Diff.prototype = {
        left: [],
        right: []
    };
    QstringStruct.Diff = function(strLeft, strRight) {
        var rgLeft = (new QstringStruct(strLeft)).toArray();
        var rgRight = (new QstringStruct(strRight)).toArray();
        var temp = {};
        var ret = new Diff;
        var i;

        for (i = 0; i < rgLeft.length; i++) {
            temp[rgLeft[i]] |= 1;
        }
        for (i = 0; i < rgRight.length; i++) {
            temp[rgRight[i]] |= 2;
        }
        for (var key in temp) {
            if (temp[key] == 1) {
                ret.left.push(key);
            }
            else if (temp[key] == 2) {
                ret.right.push(key);
            }
        }
        return ret;
    };
    g_listItemCache = {};
    ;
    g_fSkipAnimation = false;
    g_fSkipNextTabExpandAnimation = false;
    g_InViewPort = 1;
    g_OutOfViewPortCloserToTop = 2;
    g_OutOfViewPortCloserToBottom = 3;
    ;
    UTF8_1ST_OF_2 = 0xc0;
    UTF8_1ST_OF_3 = 0xe0;
    UTF8_1ST_OF_4 = 0xf0;
    UTF8_TRAIL = 0x80;
    HIGH_SURROGATE_BITS = 0xD800;
    LOW_SURROGATE_BITS = 0xDC00;
    SURROGATE_6_BIT = 0xFC00;
    SURROGATE_ID_BITS = 0xF800;
    SURROGATE_OFFSET = 0x10000;
    if (typeof String.prototype.endsWith == "undefined") {
        String.prototype.endsWith = function(suffix) {
            return this.substr(this.length - suffix.length) === suffix;
        };
    }
    if (typeof String.prototype.startsWith == "undefined") {
        String.prototype.startsWith = function(prefix) {
            return this.substr(0, prefix.length) === prefix;
        };
    }
    ;
    XUIHtml = {};
    XUIHtml.SetOpacity = function(domNode, newVal) {
        if (typeof domNode.style == "undefined")
            return;
        if (document.body.style.opacity != null) {
            if (newVal == 1)
                XUIHtml.RemoveCSSProperty(domNode, "opacity");
            else
                domNode.style.opacity = newVal;
        }
        else {
            if (newVal == 1)
                XUIHtml.RemoveCSSProperty(domNode, "filter");
            else
                domNode.style.filter = 'alpha(opacity=' + String(newVal * 100) + ')';
        }
    };
    XUIHtml.RemoveCSSProperty = function(domNode, propName) {
        if (typeof domNode.style.removeProperty != "undefined")
            domNode.style.removeProperty(propName);
        else
            domNode.style.removeAttribute(propName);
    };
    XUIHtml.GetOpacity = function(domNode) {
        if (typeof domNode.style == "undefined")
            return -1;
        if (document.body.style.opacity != null) {
            var o = domNode.style.opacity;

            return o != null && o != '' ? parseFloat(o) : 1;
        }
        else {
            var f = domNode.style.filter;

            return f != null && f != '' ? parseInt((f.replace('alpha(opacity=', '')).replace(')', '')) / 100 : 1;
        }
    };
    Calendar_InitializePrototype();
    CalEvent_InitializePrototype();
    Span_InitializePrototype();
    cGCMinimumWidth = 400;
    cGCMinimumHeight = 200;
    cGCMaxGCResizeCount = 10;
    glGCObjectHeight = 0;
    glGCObjectWidth = 0;
    glGCResizeCounter = 0;
    objGCGlobal = null;
    PositionInfo_InitializePrototype();
    ecbManager = {
        callOutPar: null,
        DismissECB: function() {
        ULSw7Q:
            ;
            var fakeEvt = new Object();

            if (ecbManager.callOutPar != null) {
                var oldItemTable = itemTable;

                fakeEvt.callOut = true;
                OutItem(fakeEvt);
                ecbManager.callOutPar = null;
                itemTable = oldItemTable;
            }
            var e = window.event;
            var srcElement = null;

            if (e != null)
                srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
            while (srcElement != null && srcElement.tagName != "TR")
                srcElement = srcElement.parentNode;
            var itemParent = null;

            if (srcElement != null && itemTable != null) {
                itemParent = itemTable;
                while (itemParent != null) {
                    if (itemParent == srcElement)
                        break;
                    itemParent = itemParent.parentNode;
                }
            }
            if (itemParent == null) {
                fakeEvt.callOut = false;
                OutItem(fakeEvt);
            }
        }
    };
    ecbItems = "ECBItems";
    SYSTEM_ACCOUNT_ID = 1073741823;
    resetItemGlobals();
    IMNControlObj = null;
    bIMNControlInited = false;
    IMNDictionaryObj = null;
    bIMNSorted = false;
    bIMNOnloadAttached = false;
    IMNOrigScrollFunc = null;
    bIMNInScrollFunc = false;
    IMNSortableObj = null;
    IMNHeaderObj = null;
    IMNNameDictionaryObj = null;
    IMNShowOfflineObj = null;
    IMNImageInfo_InitializePrototype();
    imnCount = 0;
    imnElemsCount = 0;
    imnMarkerBatchSize = 4;
    imnMarkerBatchDelay = 40;
    g_dlgWndTop = null;
    g_spDlgLauncher = true;
    g_ModalDialogCount = 0;
    g_overlayPopup = undefined;
    g_childDialog = undefined;
    CommonGlobalDialogReturnValue_InitializePrototype();
    commonModalDialogReturnValue = new CommonGlobalDialogReturnValue();
    filterTable = null;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    filterStr = null;
    strFieldName = "";
    bMenuLoadInProgress = false;
    strFilteredValue = null;
    bIsMultiFilter = false;
    fnOnFilterMouseOut = null;
    _spBodyOnLoadCalled = false;
    if (typeof _spBodyOnLoadFunctions === "undefined" || _spBodyOnLoadFunctions === null) {
        _spBodyOnLoadFunctions = [];
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spBodyOnLoadCalled = false;
    if ("undefined" != typeof _spBodyOnLoad) {
        _spBodyOnLoad = undefined;
    }
    if ("undefined" != typeof _spRestoreScrollForDiv_rscr) {
        _spRestoreScrollForDiv_rscr = undefined;
    }
    if (_spBodyOnLoadFunctionNames == null) {
        _spBodyOnLoadFunctionNames = [];
        _spBodyOnLoadFunctionNames.push("_spBodyOnLoad");
        _spBodyOnLoadFunctionNames.push("_spRestoreScrollForDiv_rscr");
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spPageLoadedRegistered = false;
    _inlineEditString = null;
    _spOriginalFormAction = null;
    g_numberOfYields = 10;
    g_spPreFetchKeys = [];
    _spSuppressFormOnSubmitWrapper = false;
    _inlineEditString = null;
    _spPageLoadedRegistered = false;
    g_fAnimateListCSR = true;
    if (document.body == null || document.body.firstChild == null) {
        if (typeof document.addEventListener != 'undefined' && typeof window.msWriteProfilerMark != 'undefined') {
            document.addEventListener("DOMContentLoaded", function() {
            ULSw7Q:
                ;
                window.msWriteProfilerMark("DOMContentLoaded");
            }, false);
        }
        AttachEvent("DOMContentLoaded", _spBodyOnLoadWrapper, document);
        window.onload = _spBodyOnLoadWrapper;
        AttachEvent("hashchange", _bodyOnHashChangeHandler, window);
    }
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("ows.js");
    }
}
function ULSw7Q() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "ows.commentedjs";
    return o;
}
var IsMenuShown;
var ChevronContainer;
var itemTableDeferred;
var imageCell;
var onKeyPress;
var downArrowText;
var currentEditMenu;
var currentItemID;
var currentItemAppName;
var currentItemProgId;
var currentItemIcon;
var currentItemOpenControl;
var currentItemOpenApp;
var currentItemFileUrl;
var currentItemFSObjType;
var currentItemContentTypeId;
var currentItemCheckedOutUserId;
var currentItemCheckoutExpires;
var currentItemModerationStatus;
var currentItemUIString;
var currentItemCheckedoutToLocal;
var bIsCheckout;
var currentItemCanModify;
var currentItemPermMaskH;
var currentItemPermMaskL;
var currentItemEvtType;
var currentItemIsEventsExcp;
var currentItemIsEventsDeletedExcp;
var g_MaximumSelectedItemsAllowed;
var g_CustomActionDialogHandlers;
var g_CustomActionDialogHandlerId;
var g_ExpGroupWPState;
var DocOpen;
var hoverTR;
var ecbTD;

function RowOnHover(tr, evt) {
    var iid = tr.getAttribute("iid");
    var curCtx = CtxFromRow(tr);

    if (CountSelectedItems(curCtx) > 1 && ItemIsCurrentlySelected(curCtx, iid, tr)) {
        ecbTD = null;
        hoverTR = null;
        for (var i = 0; i < tr.childNodes.length; i++) {
            var child = tr.childNodes[i];

            if (child.getAttribute("IsECB") == 'TRUE') {
                OnChildItem(child);
                ecbTD = child;
                hoverTR = tr;
                break;
            }
        }
        var elem = null;

        if (evt != null) {
            elem = evt.toElement != null ? evt.toElement : evt.target;
        }
        if (elem != null && tr != elem) {
            if (elem.tagName != "DIV") {
                elem = GetAncestor(elem, "DIV");
            }
            if (elem != null && typeof elem.onmouseover == 'function') {
                elem.onmouseover(evt);
            }
        }
    }
}
function RowHoverOff(tr, evt) {
    if (hoverTR == null || evt == null || ecbTD == null || CountSelectedItems(CtxFromRow(tr)) <= 1)
        return;
    var toElement = evt.toElement != null ? evt.toElement : evt.relatedTarget;

    if (toElement != null && toElement.tagName != "TR") {
        var node = toElement.parentNode;

        while (node != null && node.tagName != "TR") {
            node = node.parentNode;
        }
        if (node == hoverTR)
            return;
    }
    else if (toElement == hoverTR)
        return;
    var fakeEvt = new Object();

    OutItem(fakeEvt);
    ecbTD = null;
    hoverTR = null;
}
function IsEventTargetAnchor(evt) {
    var elmTarget = evt.srcElement != null ? evt.srcElement : evt.target;

    if (elmTarget != null && elmTarget.tagName.toUpperCase() == "A") {
        return true;
    }
    return false;
}
function IsEventRightClickOnAnchor(evt) {
    if (evt == null)
        return false;
    if (evt.type == "contextmenu") {
        return IsEventTargetAnchor(evt);
    }
    return false;
}
function ShowMenuForTrOuter(elm, evt, fSelect) {
    if (evt == null)
        return true;
    var srcElement = evt.srcElement;

    if (srcElement == null)
        return true;
    if (srcElement.tagName.toLowerCase() == "div" && srcElement.className.indexOf("ms-list-itemLink") >= 0) {
        return ShowCalloutMenuForTr(elm, evt, fSelect);
    }
    return true;
}
function ShowCalloutMenuForTr(elm, evt, fSelect) {
    var fRet = false;

    EnsureScriptFunc("callout.js", "Callout", function() {
    ULSw7Q:
        ;
        fRet = ShowCalloutMenuForTrInner(elm, evt, fSelect);
    });
    return fRet;
}
function ShowCalloutMenuForTrInner(elm, evt, fSelect) {
    if (IsEventRightClickOnAnchor(evt))
        return true;
    var elmTr = GetAncestor(elm, "TR");
    var elmTdEcb = GetEcbTdFromRow(elmTr);
    var elmDivEcb = GetEcbDivFromEcbTd(elmTdEcb);
    var elmDivEcbAffordance = GetEcbAffordanceDivFromRow(elmTr);

    if (elmDivEcb == null)
        return true;
    if (fSelect) {
        SingleItemSelectByElement(elmTr, false);
    }
    var strItmID = GetAttributeFromItemTable(elmDivEcb, "ItemId", "Id");

    OpenCallout(elmDivEcbAffordance, evt, elmDivEcb, strItmID);
    return false;
}
function FIsMouseCursorInsideElement(evt, elm) {
    if (evt == null || elm == null || evt.clientX == null || evt.clientY == null || evt.clientX == 0 || evt.clientY == 0)
        return false;
    var rect = elm.getBoundingClientRect();

    if (rect.left <= evt.clientX && rect.right >= evt.clientX && rect.top <= evt.clientY && rect.bottom >= evt.clientY) {
        return true;
    }
    return false;
}
function ShowECBMenuForTr(elm, evt) {
    if (IsEventRightClickOnAnchor(evt))
        return true;
    var elmTr = GetAncestor(elm, "TR");
    var elmTdEcb = GetEcbTdFromRow(elmTr);
    var elmDivEcb = GetEcbDivFromEcbTd(elmTdEcb);

    if (elmDivEcb == null)
        return true;
    if (elmTr.className.indexOf("s4-itm-selected") < 0) {
        SingleItemSelectByElement(elmTr, false);
    }
    var isAjax = IsAjaxMenu(elmDivEcb);

    itemTable = elmDivEcb;
    currentItemID = GetAttributeFromItemTable(elmDivEcb, "ItemId", "Id");
    currentCtx = g_ctxDict[elmDivEcb.getAttribute("CTXName")];
    if (isAjax) {
        var fUseMousePosition = FIsMouseCursorInsideElement(evt, elm);

        return CreateAjaxMenu(evt, fUseMousePosition);
    }
    else {
        return CreateMenu(evt);
    }
}
var ProtocolCommand;
var phManager;

function CBSelectedValues(strList, fAllChecked) {
    this.strList = strList;
    this.fAllChecked = fAllChecked;
}
function CBSelectedValues_InitializePrototype() {
ULSw7Q:
    ;
    CBSelectedValues.prototype.strList = "";
    CBSelectedValues.prototype.fAllChecked = false;
}
function PageContextInfo(webServerRelativeUrl, webLanguage, currentLanguage, webUIVersion, pageListId, pageItemId, userId, alertsEnabled, siteServerRelativeUrl, allowSilverlightPrompt, webAbsoluteUrl, siteClientTag, layoutsUrl, tenantAppVersion, siteAbsoluteUrl, themedImageRootPath, themedImageFileNames, clientServerTimeDelta) {
    this.webServerRelativeUrl = webServerRelativeUrl;
    this.webAbsoluteUrl = webAbsoluteUrl;
    this.siteAbsoluteUrl = siteAbsoluteUrl;
    this.layoutsUrl = layoutsUrl;
    this.webLanguage = webLanguage;
    this.siteClientTag = siteClientTag;
    this.currentLanguage = currentLanguage;
    this.webUIVersion = webUIVersion;
    this.pageListId = pageListId;
    this.pageItemId = pageItemId;
    this.userId = userId;
    this.alertsEnabled = alertsEnabled;
    this.siteServerRelativeUrl = siteServerRelativeUrl;
    this.allowSilverlightPrompt = allowSilverlightPrompt;
    this.tenantAppVersion = tenantAppVersion;
    this.themedImageRootPath = themedImageRootPath;
    this.themedImageFileNames = themedImageFileNames;
    this.clientServerTimeDelta = clientServerTimeDelta;
}
function PageContextInfo_InitializePrototype() {
ULSw7Q:
    ;
    PageContextInfo.prototype.webServerRelativeUrl = "";
    PageContextInfo.prototype.webAbsoluteUrl = "";
    PageContextInfo.prototype.siteAbsoluteUrl = "";
    PageContextInfo.prototype.serverRequestPath = "";
    PageContextInfo.prototype.layoutsUrl = "";
    PageContextInfo.prototype.siteClientTag = "";
    PageContextInfo.prototype.webLanguage = 0;
    PageContextInfo.prototype.webTitle = null;
    PageContextInfo.prototype.webLogoUrl = null;
    PageContextInfo.prototype.currentCultureName = null;
    PageContextInfo.prototype.currentUICultureName = null;
    PageContextInfo.prototype.currentLanguage = 0;
    PageContextInfo.prototype.crossDomainPhotosEnabled = false;
    PageContextInfo.prototype.webUIVersion = 0;
    PageContextInfo.prototype.pageListId = "";
    PageContextInfo.prototype.pageItemId = 0;
    PageContextInfo.prototype.userId = "";
    PageContextInfo.prototype.systemUserKey = "";
    PageContextInfo.prototype.alertsEnabled = false;
    PageContextInfo.prototype.siteServerRelativeUrl = "";
    PageContextInfo.prototype.allowSilverlightPrompt = "";
    PageContextInfo.prototype.tenantAppVersion = null;
    PageContextInfo.prototype.themedImageRootPath = null;
    PageContextInfo.prototype.themedImageFileNames = null;
    PageContextInfo.prototype.clientServerTimeDelta = 0;
}
var _groupCollapse;
var _spPageContextInfo;
var bGridViewPresent;
var _fV4Calendar;
var _spCustomNavigateHierarchy;
var g_ExtensionNotSupportCheckoutToLocal;
var g_ExtensionDefaultForRead;
var bValidSearchTerm;
var ListCtrlObj;
var fListControl;
var fListErrorShown;
var fNewDoc;
var fNewDoc2;
var fNewDoc3;
var SPDesignerDownloadUrl;
var SPDesignerProgID;

function CtxRgiid(ctxT, rgiid) {
    this.ctx = ctxT;
    this.rgiid = rgiid;
}
function CtxRgiid_InitializePrototype() {
ULSw7Q:
    ;
    CtxRgiid.prototype = {
        ctx: undefined,
        rgiid: undefined
    };
}
function FilterNoteField(view, fieldName, fieldValue, keyCode) {
    if (keyCode != 13)
        return;
    event.returnValue = false;
    var strDocUrl = window.location.href;
    var pagedPart = /&Paged=TRUE&p_[^&]*&PageFirstRow=[^&]*/gi;

    strDocUrl = strDocUrl.replace(pagedPart, "");
    var viewGuid = GetUrlKeyValue("View", true);

    if (viewGuid == "") {
        strDocUrl = StURLSetVar2(strDocUrl, "View", view);
        viewGuid = view;
    }
    var idxQuery;

    if (view.toUpperCase() != viewGuid.toUpperCase()) {
        var encodedView = escapeProperly(view);

        if (encodedView.toUpperCase() != viewGuid.toUpperCase()) {
            var pattern = /\?[^?]*/i;

            idxQuery = strDocUrl.indexOf("?");
            if (idxQuery != -1)
                strDocUrl = strDocUrl.replace(pattern, "?View=" + view);
            else
                strDocUrl = strDocUrl + "?View=" + view;
        }
    }
    var arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)=" + fieldName));

    if (arrayField == null) {
        idxQuery = strDocUrl.indexOf("?");
        if (idxQuery != -1)
            strDocUrl = strDocUrl + "&";
        else
            strDocUrl = strDocUrl + "?";
        var i = 0;
        var filterArray;

        do {
            i++;
            filterArray = strDocUrl.match(new RegExp("FilterField" + String(i) + "=[^&]*" + "&FilterValue" + String(i) + "=[^&]*"));
        } while (filterArray != null);
        strDocUrl = strDocUrl + "FilterField" + String(i) + "=" + fieldName + "&FilterValue" + String(i) + "=" + escapeProperly(fieldValue);
        strDocUrl = strDocUrl.replace("Filter=1&", "");
    }
    else {
        var filterNo = parseInt(arrayField[1]);
        var arrayValue = strDocUrl.match(new RegExp("&FilterValue" + String(filterNo) + "=[^&]*"));
        var strTemp = "&" + arrayField[0] + arrayValue[0];
        var strNewFilter = "&FilterField" + arrayField[1] + "=" + fieldName + "&FilterValue" + arrayField[1] + "=" + escapeProperly(fieldValue);

        strDocUrl = strDocUrl.replace(strTemp, strNewFilter);
        strDocUrl = strDocUrl.replace("Filter=1&", "");
    }
    window.location.href = STSPageUrlValidation(strDocUrl);
}
function _SelectField(view, selectID) {
    var strDocUrl = ajaxNavigate.get_href();
    var strHash = ajaxNavigate.get_hash();
    var fViewReplaced = false;
    var pattern = /\#.*/i;

    strDocUrl = strDocUrl.replace(pattern, "");
    var viewGuid = GetUrlKeyValue("View", true);
    var pageView = GetUrlKeyValue("PageView", true);
    var idForm = GetUrlKeyValue("ID", true);
    var contentTypeIdForm = GetUrlKeyValue("ContentTypeId", true);

    if (view.toUpperCase() != viewGuid.toUpperCase()) {
        var encodedView = escapeProperly(view);

        if (encodedView.toUpperCase() != viewGuid.toUpperCase()) {
            pattern = /\?[^?]*/i;
            var idxQuery = strDocUrl.indexOf("?");

            if (idxQuery != -1)
                strDocUrl = strDocUrl.replace(pattern, "?View=" + encodedView);
            else
                strDocUrl = strDocUrl + "?View=" + encodedView;
            fViewReplaced = true;
        }
    }
    if (!fViewReplaced && GetUrlKeyValue("SelectedID") != "") {
        var selectIDOld = /&SelectedID=[^&]*/gi;

        strDocUrl = strDocUrl.replace(selectIDOld, "");
        selectIDOld = /\?SelectedID=[^&]*&?/;
        strDocUrl = strDocUrl.replace(selectIDOld, "?");
    }
    strDocUrl = strDocUrl + "&SelectedID=";
    strDocUrl = strDocUrl + selectID;
    if (fViewReplaced && pageView != "") {
        strDocUrl = strDocUrl + "&PageView=" + pageView;
    }
    if (idForm != "") {
        strDocUrl = strDocUrl + "&ID=" + idForm;
    }
    if (contentTypeIdForm != "") {
        strDocUrl = strDocUrl + "&ContentTypeId=" + contentTypeIdForm;
    }
    if (strHash != "") {
        strDocUrl = strDocUrl + strHash;
    }
    _SubmitFormPost(strDocUrl);
    return false;
}
function getSortQueryParam(strDocUrl) {
ULSw7Q:
    ;
    if (strDocUrl == null || strDocUrl == "")
        return "";
    var strFilterQuery = "";
    var arrayField;

    arrayField = strDocUrl.match(new RegExp("SortField" + "=[^&]*" + "&SortDir" + "=[^&]*"));
    if (arrayField != null)
        strFilterQuery = arrayField[0];
    return strFilterQuery;
}
function _FilterField(view, fieldName, fieldValue, selOption) {
    return FilterFieldV3(view, fieldName, fieldValue, selOption, "", false);
}
function CompleteDecode(strIn) {
    if (typeof strIn == 'undefined' || strIn == null)
        return strIn;
    var strOut = strIn;
    var dStr = unescapeProperly(strOut);

    while (strOut != dStr) {
        strOut = dStr;
        dStr = unescapeProperly(strOut);
    }
    return strOut;
}
function FilterFieldV3(view, fieldName, fieldValue, selOption, queryString, bReturnUrl) {
    var idxQuery;
    var strDocUrl = Boolean(queryString) ? queryString : CanonicalizeUrlEncodingCase(ajaxNavigate.get_href());
    var uri = new URI(strDocUrl, {
        disableEncodingDecodingForLegacyCode: true
    });

    strDocUrl = "?" + uri.getQuery();
    var filterNo;
    var filterArray;
    var arrayField = strDocUrl.match(new RegExp("[&\?]Paged=TRUE[^&]*"));

    if (arrayField != null) {
        var pagedPart = /&p_[^&]*/gi;

        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PageFirstRow=[^&]*/gi;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PageLastRow=[^&]*/gi;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PagedPrev=TRUE[^&]*/i;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        arrayField = strDocUrl.match(new RegExp("[\?]Paged=TRUE[^&]*"));
        if (arrayField != null) {
            idxQuery = (strDocUrl.substr(arrayField["index"])).indexOf("&");
            if (idxQuery != -1) {
                strDocUrl = strDocUrl.substr(0, arrayField["index"] + 1) + strDocUrl.substr(idxQuery + arrayField["index"] + 1);
            }
            else {
                strDocUrl = strDocUrl.substr(0, arrayField["index"]);
            }
        }
        else {
            pagedPart = /&Paged=TRUE[^&]*/i;
            strDocUrl = strDocUrl.replace(pagedPart, "");
        }
    }
    var viewGuid = GetUrlKeyValue("View", true);

    if (viewGuid == "") {
        strDocUrl = StURLSetVar2(strDocUrl, "View", view);
        viewGuid = view;
    }
    if (CompleteDecode(view.toUpperCase()) != CompleteDecode(viewGuid.toUpperCase())) {
        var pattern = /\?[^?]*/i;

        idxQuery = strDocUrl.indexOf("?");
        if (idxQuery != -1)
            strDocUrl = strDocUrl.replace(pattern, "?View=" + view);
        else
            strDocUrl = strDocUrl + "?View=" + view;
    }
    var singleField = true;

    arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)=" + fieldName + "&"));
    if (!Boolean(arrayField)) {
        arrayField = strDocUrl.match(new RegExp("FilterFields([0-9]+)=" + fieldName + "&"));
        singleField = false;
    }
    if (!Boolean(arrayField)) {
        if (0 == selOption) {
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("?Filter=1", "");
        }
        else {
            idxQuery = strDocUrl.indexOf("?");
            if (idxQuery != -1)
                strDocUrl = strDocUrl + "&";
            else
                strDocUrl = strDocUrl + "?";
            var i = 0;

            do {
                i++;
                filterArray = strDocUrl.match(new RegExp("FilterField" + String(i) + "=[^&]*"));
                if (!Boolean(filterArray))
                    filterArray = strDocUrl.match(new RegExp("FilterFields" + String(i) + "=[^&]*"));
            } while (filterArray != null);
            strDocUrl = strDocUrl + "FilterField" + String(i) + "=" + fieldName + "&FilterValue" + String(i) + "=" + escapeProperly(fieldValue);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
        }
    }
    else {
        filterNo = parseInt(arrayField[1]);
        var arrayValue = strDocUrl.match(new RegExp("FilterValue" + String(filterNo) + "=[^&]*"));

        if (!Boolean(arrayValue))
            arrayValue = strDocUrl.match(new RegExp("FilterValues" + String(filterNo) + "=[^&]*"));
        var arrayOp = strDocUrl.match(new RegExp("&FilterOp" + String(filterNo) + "=[^&]*"));
        var arrayLookupId = strDocUrl.match(new RegExp("&FilterLookupId" + String(filterNo) + "=[^&]*"));
        var arrayData = strDocUrl.match(new RegExp("&FilterData" + String(filterNo) + "=[^&]*"));
        var strTemp = "&" + arrayField[0] + arrayValue[0];

        if (0 == selOption) {
            if (strDocUrl.indexOf(strTemp) == -1) {
                var arrayField_0 = arrayField[0];

                strTemp = arrayField_0 + arrayValue[0] + "&";
            }
            strDocUrl = strDocUrl.replace(strTemp, "");
            if (arrayOp != null)
                strDocUrl = strDocUrl.replace(String(arrayOp[0]), "");
            if (arrayLookupId != null)
                strDocUrl = strDocUrl.replace(String(arrayLookupId[0]), "");
            if (arrayData != null)
                strDocUrl = strDocUrl.replace(String(arrayData[0]), "");
            strDocUrl = restructureFilterUrl(strDocUrl, filterNo);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("?Filter=1", "");
            strDocUrl = strDocUrl.replace("&Filter=1", "");
        }
        else {
            var strFirstChar;

            if (strDocUrl.indexOf(strTemp) == -1) {
                strTemp = "?" + arrayField[0] + arrayValue[0];
                strFirstChar = "?";
            }
            else {
                strFirstChar = "&";
            }
            var strNewFilter;

            if (ctxFilter == null || !ctxFilter.IsClientRendering) {
                strNewFilter = strFirstChar + "FilterField" + arrayField[1] + "=" + fieldName + "&FilterValue" + arrayField[1] + "=" + escapeProperly(fieldValue);
            }
            else {
                var fieldValueFound = false;
                var exFilterValue = String(arrayValue[0].substr(arrayValue[0].indexOf('=') + 1));
                var newFilterArray = [];
                var filterValueArray = [];

                if (singleField) {
                    exFilterValue = unescapeProperly(exFilterValue);
                    if (fieldValue != exFilterValue) {
                        newFilterArray.push(exFilterValue);
                        newFilterArray.push(fieldValue);
                    }
                }
                else {
                    filterValueArray = ParseMultiColumnValue(unescapeProperly(exFilterValue), ';#', true);
                    for (var valueIndex in filterValueArray) {
                        if (filterValueArray[valueIndex] == fieldValue) {
                            fieldValueFound = true;
                            continue;
                        }
                        newFilterArray.push(filterValueArray[valueIndex]);
                    }
                    if (!fieldValueFound) {
                        newFilterArray.push(fieldValue);
                    }
                }
                exFilterValue = escapeProperly(ConvertMultiColumnValueToString(newFilterArray, null, false));
                var strFilterField = "FilterField";
                var strFilterValue = "&FilterValue";

                if (newFilterArray.length > 1) {
                    strFilterField = "FilterFields";
                    strFilterValue = "&FilterValues";
                }
                strNewFilter = strFirstChar + strFilterField + arrayField[1] + "=" + fieldName + strFilterValue + arrayField[1] + "=" + exFilterValue;
                if (exFilterValue == "" && singleField) {
                    strNewFilter = "";
                    strDocUrl = restructureFilterUrl(strDocUrl, filterNo);
                }
            }
            strDocUrl = strDocUrl.replace(strTemp, strNewFilter);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("&Filter=1", "");
        }
    }
    var originalArrayField = arrayField;

    arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)="));
    if (!Boolean(arrayField))
        arrayField = strDocUrl.match(new RegExp("FilterFields([0-9]+)="));
    if (arrayField == null && selOption == 0 && (ctxFilter != null && (!ctxFilter.IsClientRendering || originalArrayField != null && !Boolean(queryString)))) {
        strDocUrl = strDocUrl + "&FilterClear=1";
    }
    else {
        strDocUrl = strDocUrl.replace("&FilterClear=1", "");
    }
    uri.setQuery(strDocUrl);
    strDocUrl = uri.getString();
    if (bReturnUrl) {
        var ich = strDocUrl.indexOf('?');

        ich = (strDocUrl.substr(ich + 1)).indexOf('?');
        return strDocUrl;
    }
    else
        _SubmitFormPost(strDocUrl);
    return null;
}
function restructureFilterUrl(strDocUrl, filterNo) {
    var j = filterNo + 1;
    var filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
    var isMultipleFilter = false;

    if (!Boolean(filterArray)) {
        filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
        isMultipleFilter = filterArray != null;
    }
    for (var i = filterNo; filterArray != null; i++) {
        var strNew = isMultipleFilter ? "FilterFields" + String(i) : "FilterField" + String(i);
        var strOld = isMultipleFilter ? "FilterFields" + String(j) : "FilterField" + String(j);

        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = isMultipleFilter ? "FilterValues" + String(i) : "FilterValue" + String(i);
        strOld = isMultipleFilter ? "FilterValues" + String(j) : "FilterValue" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterOp" + String(i);
        strOld = "FilterOp" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterLookupId" + String(i);
        strOld = "FilterLookupId" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterData" + String(i);
        strOld = "FilterData" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        j++;
        filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
        if (!Boolean(filterArray))
            filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
    }
    return strDocUrl;
}
function CanonicalizeUrlEncodingCase(str) {
    var strOut = "";
    var ix;

    for (ix = 0; ix < str.length; ix++) {
        var curChar = str.charAt(ix);

        if (curChar == '%' && ix + 2 < str.length) {
            strOut += curChar;
            ix++;
            strOut += ((str.charAt(ix)).toString()).toUpperCase();
            ix++;
            strOut += ((str.charAt(ix)).toString()).toUpperCase();
        }
        else {
            strOut += curChar;
        }
    }
    return strOut;
}
function _SetControlValue(controlId, value) {
    var control = document.getElementById(controlId);

    if (control != null)
        control.value = value;
}
function SetSearchView() {
ULSw7Q:
    ;
    if (typeof bValidSearchTerm != "undefined")
        bValidSearchTerm = true;
}
function GroupCollapse() {
ULSw7Q:
    ;
    return typeof _groupCollapse != "undefined" && _groupCollapse;
}
function HandleFilter(evt, url, operationType) {
    if (FV4UI()) {
        {
            var defd;

            try {
                defd = typeof inplview.HandleFilterReal;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.HandleFilterReal";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                    ULSw7Q:
                        ;
                        inplview.HandleFilterReal(evt, url, operationType);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
        return;
    }
    _SubmitFormPost(url);
}
function _SubmitFormPost(url, bForceSubmit, bDemoteIntoFormBody) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var form = document.forms[MSOWebPartPageFormName];

        if (null != form) {
            if (bForceSubmit != undefined && bForceSubmit == true || typeof form.onsubmit == "undefined" || form.onsubmit == null || form.onsubmit() != false) {
                if (typeof window.WebForm_OnSubmit == 'function') {
                    window.WebForm_OnSubmit();
                }
                if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null)
                    url += url.indexOf('?') == -1 ? "?IsDlg=1" : "&IsDlg=1";
                if (FV4UI()) {
                    try {
                        var currentTabId = ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).get_selectedTabId();

                        if (Boolean(currentTabId)) {
                            url = StURLSetVar2(url, "InitialTabId", escapeProperly(currentTabId));
                            url = StURLSetVar2(url, "VisibilityContext", "WSSTabPersistence");
                        }
                    }
                    catch (e) { }
                }
                if (bDemoteIntoFormBody != undefined && bDemoteIntoFormBody == true) {
                    url = DemoteIntoFormBody(form, url, "owsfileref");
                    url = DemoteIntoFormBody(form, url, "NextUsing");
                }
                form.action = STSPageUrlValidation(url);
                form.method = "POST";
                if (isPortalTemplatePage(url))
                    form.target = "_top";
                if (!bValidSearchTerm)
                    _ClearSearchTerm("");
                form.submit();
            }
        }
    }
}
function DemoteIntoFormBody(form, strUrl, strKey) {
    var strVal = GetUrlKeyValue(strKey, false, strUrl);

    if (strVal.length > 0) {
        var obj = document.createElement("INPUT");

        if (obj != null) {
            obj.setAttribute("type", "hidden");
            obj.setAttribute("id", strKey);
            obj.setAttribute("name", strKey);
            obj.setAttribute("value", strVal);
            form.appendChild(obj);
            return RemoveUrlKeyValue(strKey, strUrl);
        }
    }
    return strUrl;
}
function RemoveUrlKeyValue(keyName, url) {
    var re = new RegExp(keyName + "=[^&]*&");

    url = url.replace(re, "");
    re = new RegExp(keyName + "=[^&]*");
    url = url.replace(re, "");
    return url;
}
function _RefreshPageTo(evt, url, bForceSubmit) {
    Sys.Debug.assert(FV4UI());
    EnsureScript("inplview", typeof inplview, null, true);
    inplview.RefreshPageTo(evt, url, bForceSubmit);
}
var g_varSkipRefreshOnFocus;

function RefreshOnFocus() {
ULSw7Q:
    ;
    if (typeof g_varSkipRefreshOnFocus == "undefined" || !Boolean(g_varSkipRefreshOnFocus)) {
        _RefreshPage(1);
    }
}
function RefreshOnFocusForOneRow() {
ULSw7Q:
    ;
    RefreshOnFocus();
}
function DisableRefreshOnFocus() {
ULSw7Q:
    ;
    g_varSkipRefreshOnFocus = 1;
}
function SetWindowRefreshOnFocus() {
ULSw7Q:
    ;
    window.onbeforeunload = DisableRefreshOnFocus;
    window.onfocus = RefreshOnFocus;
}
function RemoveParametersFromUrl(url) {
    var paramsBeginPos = url.indexOf('?');

    if (paramsBeginPos == -1)
        return url;
    else
        return url.substr(0, paramsBeginPos);
}
function _GoToPageRelative(url) {
    if (url.substr(0, 4) != "http" && url.substr(0, 1) != "/") {
        var currentPage = RemoveParametersFromUrl(window.location.href);
        var pos = currentPage.lastIndexOf("/");

        if (pos > 0)
            url = currentPage.substring(0, pos + 1) + url;
    }
    GoToPage(url);
}
function _EnterFolder(url) {
    var currentPage = RemoveParametersFromUrl(window.location.href);
    var newPage = RemoveParametersFromUrl(url);
    var newPageIsRelativeCurrentPage = newPage != null && newPage.length > 0 && newPage.charAt(0) == '/' && newPage.length < currentPage.length && currentPage.indexOf(newPage) == currentPage.length - newPage.length;

    if (!newPageIsRelativeCurrentPage && newPage.toLowerCase() != currentPage.toLowerCase())
        STSNavigate(url);
    else
        _SubmitFormPost(url);
}
function _HandleFolder(ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    var hasHtmlType = Boolean(strHtmlType) && strHtmlType != "";
    var hasServerFileRedirect = Boolean(strServerFileRedirect) && strServerFileRedirect != "";
    var isEdit = !IsNullOrUndefined(ele.getAttribute("isEdit"));

    if (hasHtmlType && hasServerFileRedirect || strHtmlType == "OneNote.Notebook" && isEdit) {
        if (strHtmlTrProgId == "FALSE" && ele != null && isEdit && !IsNullOrUndefined(strProgId))
            strHtmlTrProgId = strProgId;
        DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
    }
    else {
        if (objEvent != null) {
            CancelEvent(objEvent);
        }
        _EnterFolder(url);
    }
}
function UseDialogsForNewItem(formUrl) {
    var myCtx = GetCtxFromFormUrl(formUrl);
    var uri = new URI(formUrl);
    var type = uri.getQueryParameter('Type');

    return Boolean(myCtx) && type == '1';
}
var g_useDialogAlwaysList;

function UseDialogsForFormsPages(formUrl) {
    if (Boolean(formUrl)) {
        var uri = new URI(formUrl);
        var url = uri.getLastPathSegment();

        if (Boolean(url)) {
            url = url.toLowerCase();
            for (var i = 0; i < g_useDialogAlwaysList.length; i++) {
                if (url == g_useDialogAlwaysList[i]) {
                    return true;
                }
            }
        }
    }
    return UseDialogsForFormsWithCtx(GetCtxFromFormUrl(formUrl));
}
function GetCtxFromFormUrl(formUrl) {
    var myCtx = null;
    var listName = GetUrlKeyValue("LISTID", false, formUrl.toUpperCase());

    if (listName == "")
        listName = GetUrlKeyValue("LIST", false, formUrl.toUpperCase());
    if (listName != "" && g_ctxDict != null) {
        for (var ctxId in g_ctxDict) {
            var ctxT = g_ctxDict[ctxId];

            if (Boolean(ctxT.listName) && ctxT.listName.toUpperCase() == listName.toUpperCase()) {
                myCtx = ctxT;
                break;
            }
        }
    }
    return myCtx;
}
function UseDialogsForFormsWithCtx(myCtx) {
    if (myCtx == null || typeof myCtx.NavigateForFormsPages == "undefined") {
        return false;
    }
    return !Boolean(myCtx.NavigateForFormsPages);
}
function _EditItemWithCheckoutAlert(evt, url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser)) {
        if (bCheckout == '1' && UseDialogsForFormsPages(url))
            NewOrEditV4Core(evt, url, true);
        else
            _EditItem2(evt, url);
    }
}
function _STSNavigateWithCheckoutAlert(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser)) {
        STSNavigate(url);
    }
}
function ShowInPopUI(evt, currentCtxt, strUrl) {
    var fn = function() {
    ULSw7Q:
        ;
        if (currentCtxt == null && typeof evt.fromRibbon == "boolean" && evt.fromRibbon && typeof evt.currentCtx != "undefined" && evt.currentCtx != null)
            currentCtxt = evt.currentCtx;
        if (typeof currentCtxt != 'undefined' && currentCtxt != null && currentCtxt.clvp != null) {
            var clvp = currentCtxt.clvp;

            GetFocusInfo(evt, clvp);
            clvp.ShowPopup(strUrl);
        }
        else {
            STSNavigate(strUrl);
        }
    };

    EnsureScript("inplview", typeof inplview, fn);
}
function CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (typeof strCurrentUser == "undefined" || strCurrentUser == null || strCurrentUser == "")
        strCurrentUser = currentItemCheckedOutUserId;
    if ((typeof strCheckoutUser == "undefined" || strCheckoutUser == null || strCheckoutUser == "") && typeof ctx != "undefined") {
        strCheckoutUser = ctx.CurrentUserId;
    }
    if (bIsCheckedOutToLocal == "1") {
        alert(Strings.STS.L_CannotEditPropertyForLocalCopy_Text);
        return false;
    }
    if (strCurrentUser != null && strCurrentUser != "" && strCheckoutUser != null && strCurrentUser != strCheckoutUser) {
        alert(Strings.STS.L_CannotEditPropertyCheckout_Text);
        return false;
    }
    if (bCheckout == "1") {
        if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
            if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
                strDocument = window.location.protocol + "//" + window.location.host + strDocument;
            return CheckoutviaXmlhttp(strhttpRoot, strDocument);
        }
        else
            return false;
    }
    return true;
}
function CheckoutviaXmlhttp(strhttpRoot, strDocument) {
    var xh;
    var req;

    xh = new XMLHttpRequest();
    if (xh == null)
        return false;
    xh.open("POST", strhttpRoot + "/_vti_bin/lists.asmx", false);
    xh.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    xh.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/CheckOutFile");
    var soapData = '<?xml version="1.0" encoding="utf-8"?>' + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' + 'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + '<soap:Body>' + '<CheckOutFile xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>' + strDocument + '</pageUrl></CheckOutFile></soap:Body></soap:Envelope>';

    xh.send(soapData);
    return xh.status == 200 && xh.responseText.indexOf("true") != 0;
}
function FSupportCheckoutToLocal(strExtension) {
    var fRet = true;

    if (strExtension == null || strExtension == "")
        return false;
    strExtension = strExtension.toLowerCase();
    var ix = 0;

    for (ix = 0; ix < g_ExtensionNotSupportCheckoutToLocal.length; ix++) {
        if (strExtension == g_ExtensionNotSupportCheckoutToLocal[ix])
            return false;
    }
    return true;
}
function FDefaultOpenForReadOnly(strExtension) {
    var fRet = false;

    if (strExtension == null || strExtension == "")
        return true;
    strExtension = strExtension.toLowerCase();
    var ix = 0;

    for (ix = 0; ix < g_ExtensionDefaultForRead.length; ix++) {
        if (strExtension == g_ExtensionDefaultForRead[ix])
            return true;
    }
    return false;
}
function CheckoutDocument(strhttpRoot, strDocument, strOpenControl) {
    var stsOpen = null;
    var fRet = true;
    var fClientCheckout = false;

    if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    var strextension = SzExtension(unescapeProperly(strDocument));

    if (FSupportCheckoutToLocal(strextension) && strOpenControl == "SharePoint.OpenDocuments.3") {
        stsOpen = StsOpenEnsureEx2(strOpenControl);
    }
    if (stsOpen != null && !browseris.chrome) {
        try {
            fRet = typeof stsOpen.CheckoutDocumentPrompt != "undefined" && stsOpen.CheckoutDocumentPrompt(unescapeProperly(strDocument), false, "");
            if (fRet) {
                RefreshOnFocus();
            }
            fClientCheckout = fRet;
            if (fClientCheckout || !(IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()))
                return fRet;
        }
        catch (e) { }
    }
    if (!fClientCheckout) {
        var url = "FileName=" + escapeProperly(unescapeProperly(strDocument)) + "&Checkout=true";

        NavigateToCheckinAspx(strhttpRoot, url);
    }
    return true;
}
function NewOrEditV4Core(evt, url, bForceRefreshOnCancel) {
    var focusCallback = function() {
    ULSw7Q:
        ;
        var clvp = CLVPFromEventReal(evt);

        GetFocusInfo(evt, clvp);
    };

    if (evt != null) {
        EnsureScript("inplview", typeof InitAllClvps, focusCallback);
    }
    if (bForceRefreshOnCancel)
        _OpenPopUpPage(url, RefreshOnDialogClose);
    else
        _OpenPopUpPage(url, RefreshPage);
    return false;
}
function _NewItem2(evt, url) {
    if (UseDialogsForNewItem(url) || UseDialogsForFormsPages(url)) {
        return NewOrEditV4Core(evt, url);
    }
    else {
        _NewItem(url);
        return undefined;
    }
}
function _NewItem(url) {
    GoToPage(url);
}
function _EditItem2(evt, url) {
    if (UseDialogsForFormsPages(url)) {
        return NewOrEditV4Core(evt, url);
    }
    _EditItem(url);
    return false;
}
function _EditItem(url) {
    GoToPage(url);
}
function _CorrectUrlForRefreshPageSubmitForm() {
ULSw7Q:
    ;
    var returnURL = window.location.href;

    if (typeof g_MinimalDownload != 'undefined' && g_MinimalDownload) {
        var url = ajaxNavigate.getSavedFormAction();

        if (url != null && url.length > 0) {
            returnURL = url;
        }
    }
    var existingServerFilterHash = ajaxNavigate.getParam("ServerFilter");

    if (typeof existingServerFilterHash != "undefined" && null != existingServerFilterHash && existingServerFilterHash.length > 0) {
        existingServerFilterHash = (existingServerFilterHash.replace(/-/g, '&')).replace(/&&/g, '-');
        var serverFilterRootFolder = GetUrlKeyValue("RootFolder", true, existingServerFilterHash);
        var currentRootFolderLocal = GetUrlKeyValue("RootFolder", true);

        if ("" == serverFilterRootFolder && "" != currentRootFolderLocal) {
            existingServerFilterHash += "&RootFolder=" + currentRootFolderLocal;
        }
        var uri = new URI(returnURL, {
            disableEncodingDecodingForLegacyCode: true
        });

        uri.setFragment("");
        uri.setQuery(existingServerFilterHash);
        return uri.getString();
    }
    return returnURL;
}
function _RefreshPage(dialogResult) {
    var focusCallback = function() {
    ULSw7Q:
        ;
        SetFocusBack(dialogResult);
    };

    if (dialogResult == 1) {
        _SubmitFormPost(_CorrectUrlForRefreshPageSubmitForm());
    }
    else {
        EnsureScript("inplview", typeof InitAllClvps, focusCallback);
    }
}
function AJAXRefreshView(evt, dialogResult) {
ULSw7Q:
    ;
    if (evt == null || !(typeof evt.fakeEvent == "boolean" && evt.fakeEvent || typeof evt.csrAjaxRefresh == "boolean" && evt.csrAjaxRefresh || typeof evt.fromRibbon == "boolean" && evt.fromRibbon)) {
        _RefreshPage(dialogResult);
    }
    else {
        if (dialogResult == SP.UI.DialogResult.OK) {
            var defd;

            try {
                defd = typeof inplview.HandleRefreshView;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.HandleRefreshView";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                    ULSw7Q:
                        ;
                        inplview.HandleRefreshView(evt);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    }
}
function AJAXRefreshViewOnDialogClose(evt) {
ULSw7Q:
    ;
    AJAXRefreshView(evt, SP.UI.DialogResult.OK);
}
function RefreshOnDialogClose() {
ULSw7Q:
    ;
    _RefreshPage(SP.UI.DialogResult.OK);
}
function OpenPopUpPageWithDialogOptions(dialogOptions) {
    var fn = function() {
    ULSw7Q:
        ;
        var dlg = SP.UI.ModalDialog.showModalDialog(dialogOptions);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.UI.Dialog.js", defd, fn);
    var curEvent = window.event;

    if (curEvent != null) {
        if (curEvent.stopPropagation != null) {
            curEvent.stopPropagation();
        }
        else {
            curEvent.cancelBubble = true;
        }
    }
}
function OpenPopUpPageWithTitle(url, callback, width, height, title) {
    var dOpt = {
        url: url,
        args: null,
        title: title,
        dialogReturnValueCallback: callback,
        width: width,
        height: height
    };

    OpenPopUpPageWithDialogOptions(dOpt);
}
function SetupAndOpenDialogForCustomAction(url, width, height, title) {
    if (typeof url == 'undefined' || url == null || url.length == 0) {
        return;
    }
    var schemePosition = url.indexOf("//", 0);
    var domainPosition = -1;

    if (schemePosition == -1) {
        domainPosition = url.indexOf("/", 0);
    }
    else {
        domainPosition = url.indexOf("/", schemePosition + 2);
    }
    var origin = "";

    if (domainPosition == -1) {
        domainPosition = url.length - 1;
    }
    origin = url.substring(0, domainPosition);
    var options = {
        url: url,
        args: null,
        title: title,
        dialogReturnValueCallback: CustomActionDialogCloseCallback,
        width: width,
        height: height
    };
    var dialog = EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
    var currentHandlerId = g_CustomActionDialogHandlerId;
    var callbackFunc = function(e) {
        if (typeof e.data == 'undefined' || typeof e.data == null || e.data != "CloseCustomActionDialogRefresh" && e.data != "CloseCustomActionDialogNoRefresh") {
            return;
        }
        if (typeof e.origin == 'undefined' || typeof e.origin == null) {
            return;
        }
        var fn = function() {
        ULSw7Q:
            ;
            var dlg = SP.UI.ModalDialog.get_childDialog();

            if (e.data == "CloseCustomActionDialogRefresh") {
                dlg.close(0);
            }
            else {
                dlg.close(1);
            }
        };
        var defd;

        try {
            defd = typeof SP.UI.ModalDialog.get_childDialog;
        }
        catch (e) {
            defd = "undefined";
        }
        EnsureScript("SP.UI.Dialog.js", defd, fn);
        if (e.data == "CloseCustomActionDialogNoRefresh") {
            RemoveCustomActionDialogPostMessageHandler(currentHandlerId);
        }
    };

    g_CustomActionDialogHandlers[g_CustomActionDialogHandlerId] = callbackFunc;
    g_CustomActionDialogHandlerId++;
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener("message", callbackFunc, false);
    }
    else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent("onmessage", callbackFunc);
    }
}
function CustomActionDialogCloseCallback(dialogResult) {
ULSw7Q:
    ;
    if (dialogResult == 0) {
        RefreshOnDialogClose();
    }
}
function RemoveCustomActionDialogPostMessageHandler(handlerId) {
    var cbFunc = g_CustomActionDialogHandlers[handlerId];

    if (typeof cbFunc == 'function') {
        if (typeof window.removeEventListener != 'undefined' && typeof window.removeEventListener != null) {
            window.removeEventListener("message", cbFunc, false);
        }
        else if (typeof window.detachEvent != 'undefined' && typeof window.detachEvent != null) {
            window.detachEvent("onmessage", cbFunc);
        }
        delete g_CustomActionDialogHandlers[handlerId];
    }
}
function _OpenPopUpPage(url, callback, width, height) {
    OpenPopUpPageWithTitle(url, callback, width, height, null);
}
function _RemoveQueryStringsAndHash(url) {
    if (Boolean(url)) {
        var index = url.indexOf("#");

        if (index >= 0) {
            url = url.substr(0, index);
        }
        index = url.indexOf("?");
        if (index >= 0) {
            url = url.substr(0, index);
        }
    }
    return url;
}
function _OpenCreateWebPageDialog(url) {
    if (!Boolean(url) && typeof _spPageContextInfo != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        url = _spPageContextInfo.webServerRelativeUrl;
        if (url.charAt(url.length - 1) != "/") {
            url = url + "/";
        }
        url = url + "_layouts/15/createwebpage.aspx";
    }
    var currentPageUrl = ajaxNavigate.get_href();

    currentPageUrl = _RemoveQueryStringsAndHash(currentPageUrl);
    url = StURLSetVar2(url, "Url", escapeProperly(currentPageUrl));
    if (FV4UI()) {
        var dlgOpt = {};

        commonModalDialogOpen(url, dlgOpt, null, null);
    }
    else {
        GoToPage(url);
    }
}
function _EditLink2(elm, ctxNum) {
    var fn = function() {
    ULSw7Q:
        ;
        var url = GetGotoLinkUrl(elm);

        if (url == null)
            return false;
        var ctxT = window["ctx" + String(ctxNum)];

        if (ctxT != null && ctxT.clvp != null && UseDialogsForFormsWithCtx(ctxT)) {
            var clvp = ctxT.clvp;

            PreventDefaultNavigation();
            clvp.ShowPopup(url);
            return false;
        }
        GoToLinkOrDialogNewWindow(elm);
        return false;
    };

    EnsureScript("inplview", typeof inplview, fn);
}
function EditLink(elm, ctxNum) {
    if (FV4UI()) {
        EditLink2(elm, ctxNum);
    }
    else {
        GoToLink(elm);
    }
}
function _GoBack(defViewUrl) {
    window.location.href = unescapeProperly(GetSource(defViewUrl));
}
function _ReplyItem(url, threading, guid, subject) {
    if (threading.length >= 504) {
        alert(Strings.STS.L_ReplyLimitMsg_Text);
    }
    else {
        url += "?Threading=" + threading;
        url += "&Guid=" + guid;
        url += "&Subject=" + subject;
        GoToPage(url);
    }
}
function GoBacktoCurrentIssue(url, issueid) {
    url += '?ID=' + issueid;
    GoToPage(url);
}
function _ExportToDatabase(strSiteUrl, strListID, strViewID, fUseExistingDB) {
    if (g_expDatabase == null) {
        var databaseBtnText = GetCookie("databaseBtnText");

        if (databaseBtnText != null && databaseBtnText != '0') {
            try {
                g_expDatabase = new ActiveXObject('SharePoint.ExportDatabase');
            }
            catch (e) {
                return;
            }
        }
        else if (databaseBtnText == null)
            GetDataBaseInstalled();
        else
            return;
    }
    if (g_expDatabase != null && typeof g_expDatabase.DoExport != "undefined") {
        if (browseris.ie5up && browseris.win32) {
            try {
                g_expDatabase["SiteUrl"] = makeAbsUrl(strSiteUrl);
                g_expDatabase["ListID"] = strListID;
                g_expDatabase["ViewID"] = strViewID;
                g_expDatabase.DoExport(fUseExistingDB);
            }
            catch (e) {
                alert(Strings.STS.L_ExportDBFail_Text);
                return;
            }
        }
        else {
            alert(Strings.STS.L_NoWSSClient_Text);
        }
    }
}
function _ExportList(using) {
    var excelPHInstalled = typeof navigator.msProtocols == "function" && navigator.msProtocols["excel"];

    if (!excelPHInstalled && g_ssImporterObj == null) {
        EnsureSSImporter();
    }
    if (!excelPHInstalled && g_ssImporterObj == null) {
        if (g_fSSImporter || GetCookie("EnsureSSImporter") == null) {
            EnsureSSImporter(true);
        }
    }
    if (IsSupportedMacBrowser()) {
        if (g_fSSImporter != null && typeof g_ssImporterObj.IqyExportEnabled != "undefined" && g_ssImporterObj.IqyExportEnabled && typeof g_ssImporterObj.IqyExport != "undefined") {
            var exportHandled = g_ssImporterObj.IqyExport(makeAbsUrl(using));

            if (!exportHandled) {
                window.location.href = STSPageUrlValidation(makeAbsUrl(using));
            }
        }
        else {
            if (confirm(Strings.STS.L_ExportListSpreadsheet_Text)) {
                window.location.href = STSPageUrlValidation(makeAbsUrl(using));
            }
        }
    }
    else {
        if (excelPHInstalled || g_fSSImporter != false && typeof g_ssImporterObj.IqyImportEnabled != "undefined" && g_ssImporterObj.IqyImportEnabled() || confirm(Strings.STS.L_ExportListSpreadsheet_Text)) {
            window.location.href = STSPageUrlValidation(makeAbsUrl(using));
        }
    }
}
function ExportDiagram(weburl, listguid, listid, listname, viewname, viewguid) {
    if (g_objDiagramLaunch == null) {
        var digInstalled = GetCookie("digInstalled");

        if (digInstalled != null && digInstalled != '0') {
            try {
                g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher");
            }
            catch (e) {
                return;
            }
        }
        else if (digInstalled == null)
            GetDiagramLaunchInstalled();
        else
            return;
    }
    if (g_objDiagramLaunch != null && typeof g_objDiagramLaunch.CreateDiagram != "undefined") {
        try {
            var bstrTemplate = "";
            var bstrURI = weburl;
            var bstrViewGUID = viewguid;
            var bstrListGUID = listguid;
            var iListID = listid;

            g_objDiagramLaunch.CreateDiagram(bstrTemplate, bstrURI, bstrViewGUID, bstrListGUID, listname, viewname, iListID);
        }
        catch (e) {
            alert(Strings.STS.L_DiagramLaunchFail_Text);
        }
    }
}
function OpenTasks(weburl, listguid, listid, listname, viewname, viewguid) {
    var protocol = "ms-project:ost|u|" + weburl + "|l|" + listguid + "|i|" + listid + "|n|" + listname + "|v|" + viewname + "|g|" + viewguid;

    window.location.href = protocol;
}
function CatchListCreateError(strIgnore1, strIgnore2, strIgnore3) {
    alert(Strings.STS.L_EditInGrid_Text);
    fListErrorShown = true;
    return false;
}
function RegisterTouchOverride(elem, fn) {
    if (elem.getAttribute("hasTouchHandler") != "true") {
        if (window.navigator.msMaxTouchPoints != null && window.navigator.msMaxTouchPoints > 0) {
            AttachEvent("MSPointerDown", function(evt) {
                evt.target.setAttribute("pointerType", evt.pointerType.toString());
            }, elem);
            elem.setAttribute("hasTouchHandler", "true");
        }
        else if (document.documentElement != null && 'ontouchstart' in document.documentElement) {
            AttachEvent("touchstart", function(evt) {
                if (fn(evt)) {
                    if (evt.preventDefault != null)
                        evt.preventDefault();
                    if (evt.stopPropagation != null)
                        evt.stopPropagation();
                }
            }, elem);
            elem.setAttribute("hasTouchHandler", "true");
        }
    }
}
function EnsureListControl() {
ULSw7Q:
    ;
    if (!fListControl) {
        fListErrorShown = false;
        if (browseris.ie5up && browseris.win32) {
            var functionBody = "try" + "{" + "    ListCtrlObj = new ActiveXObject(\"ListNet.ListNet\");" + "    if (ListCtrlObj)" + "        fListControl = true;" + "} catch (e)" + "{" + "    fListControl = false;" + "};";
            var EnsureListControlInner = new Function(functionBody);

            EnsureListControlInner();
        }
        else {
            window.onerror = CatchListCreateError;
            ListCtrlObj = new ActiveXObject("ListNet.ListNet");
            if (ListCtrlObj != null)
                fListControl = true;
        }
    }
    ListCtrlObj = null;
    return fListControl;
}
function IsVoteOK(notAllowed) {
    if (1 == notAllowed)
        alert(Strings.STS.L_NoQuestion_Text);
    else if (2 == notAllowed)
        alert(Strings.STS.L_NoVoteAllowed_Text);
    else
        return true;
    return false;
}
function hasHighChar(str) {
    var ix = 0;

    for (ix = 0; ix < str.length; ix++) {
        if (str.charCodeAt(ix) > 127)
            return true;
    }
    return false;
}
function _ClearSearchTerm(guidView) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var form = document.forms[MSOWebPartPageFormName];

        if (null != form) {
            if (guidView != null) {
                var frmElem = form["SearchString" + guidView];

                if (frmElem != null)
                    frmElem.value = "";
            }
        }
    }
    bValidSearchTerm = true;
}
function _SubmitSearchRedirect(strUrl) {
    var frm = document.forms["frmSiteSearch"];

    if (frm == null) {
        if (typeof MSOWebPartPageFormName != "undefined")
            frm = document.forms[MSOWebPartPageFormName];
    }
    if (frm != null) {
        var searchString;

        if (typeof frm.elements["SearchString"] != 'undefined') {
            searchString = frm.elements["SearchString"];
        }
        var searchText = searchString.value.trim();

        if (searchText === Strings.STS.L_SharepointSearch_Text || searchText === '') {
            return false;
        }
        strUrl = strUrl + "?k=" + escapeProperly(searchText);
        var searchScope = frm.elements["SearchScope"];

        if (searchScope != null) {
            var searchScopeUrl = searchScope.value;

            if (Boolean(searchScopeUrl)) {
                strUrl = strUrl + "&u=" + escapeProperly(searchScopeUrl);
            }
        }
        window.location.href = strUrl;
    }
    return false;
}
function ShowGridUrlInHTML(strUrl) {
    if (strUrl.indexOf("?") > 0)
        strUrl = strUrl + "&";
    else
        strUrl = strUrl + "?";
    strUrl = strUrl + "ShowInGrid=HTML";
    return strUrl;
}
function SearchOnBodyLoad() {
ULSw7Q:
    ;
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && (searchBox.value.trim() === Strings.STS.L_SharepointSearch_Text || searchBox.value.trim() === '')) {
        searchBox.className = "ms-sharepointsearchtext";
    }
}
function SearchOnBlur() {
ULSw7Q:
    ;
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && searchBox.value.trim() === '') {
        searchBox.value = Strings.STS.L_SharepointSearch_Text;
        searchBox.className = "ms-sharepointsearchtext";
    }
}
function SearchOnFocus() {
ULSw7Q:
    ;
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && searchBox.value.trim() === Strings.STS.L_SharepointSearch_Text) {
        searchBox.value = "";
        searchBox.className = "ms-searchtext";
    }
}
function SubmitSearch() {
ULSw7Q:
    ;
    _SubmitSearchForView("");
}
function _SubmitSearchForView(ViewGuid) {
    var frm = document.forms[0];
    var srchCtlName = "SearchString" + ViewGuid;
    var searchText = frm.elements[srchCtlName].value;

    if ("" == searchText) {
        alert(Strings.STS.L_Enter_Text);
        frm.elements[srchCtlName].focus();
    }
    else {
        var strDocUrl;

        strDocUrl = RemovePagingArgs(frm.action);
        if (typeof bGridViewPresent != "undefined" && bGridViewPresent)
            strDocUrl = ShowGridUrlInHTML(strDocUrl);
        frm.action = strDocUrl;
        frm.submit();
    }
}
function IsKeyDownSubmit(evt) {
    if (evt != null) {
        var charCode;
        var bKeyModifiers;

        if (browseris.ie) {
            charCode = evt.keyCode;
            bKeyModifiers = Number(evt.altKey || evt.ctrlKey);
        }
        else {
            charCode = evt.which;
            bKeyModifiers = typeof evt.modifers != "undefined" && typeof evt.ALT_MASK != "undefined" && typeof evt.CONTROL_MASK != "undefined" ? evt.modifers & (evt.ALT_MASK | evt.CONTROL_MASK) : 0;
        }
        if (charCode == 13 && !Boolean(bKeyModifiers))
            return true;
    }
    return false;
}
function SearchViewKeyDown(guidView) {
    if (IsKeyDownSubmit(event))
        _SubmitSearchForView(guidView);
}
function SearchKeyDown(evt, strUrl) {
    if (IsKeyDownSubmit(evt)) {
        _SubmitSearchRedirect(strUrl);
        return false;
    }
    return true;
}
function SearchKeyDownGoSearch(evt) {
    if (IsKeyDownSubmit(evt)) {
        if (typeof GoSearch != "undefined")
            GoSearch();
        return false;
    }
    return true;
}
function _AlertAndSetFocus(msg, fieldName) {
    fieldName.focus();
    fieldName.select();
    window.alert(msg);
}
function _AlertAndSetFocusForDropdown(msg, fieldName) {
    fieldName.focus();
    window.alert(msg);
}
function setElementValue(elemName, elemValue) {
    var elem = (document.getElementsByName(elemName))[0];

    if (elem == null)
        return false;
    elem.value = elemValue;
    return true;
}
function GetMultipleSelectedText(frmElem) {
    var strret = "";

    if (frmElem != null) {
        var cnt = frmElem.options.length;
        var bEmpty = true;

        for (var i = 0; i < cnt; i++) {
            if (frmElem.options[i].selected) {
                if (!bEmpty) {
                    strret += ",";
                }
                else {
                    bEmpty = false;
                }
                strret += frmElem.options[i].text;
            }
        }
    }
    return strret;
}
function GetCBSelectedValues(frm) {
    if (frm == null)
        return null;
    var strList = "";
    var fAllChecked = true;
    var cnt = frm.elements.length;

    for (var i = 0; i < cnt; i++) {
        var e = frm.elements[i];

        if (e.type == "checkbox" && !e.disabled) {
            if (e.checked) {
                if (strList != "")
                    strList += ",";
                strList += e.value;
            }
            else {
                fAllChecked = false;
            }
        }
    }
    return new CBSelectedValues(strList, fAllChecked);
}
function editDocumentWithProgID(strDocument, varProgID) {
    if (fNewDoc) {
        if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
            strDocument = window.location.protocol + "//" + window.location.host + strDocument;
        if (!fNewDoc2 && !fNewDoc3) {
            if (typeof EditDocumentButton.EditDocument == "undefined" || !EditDocumentButton.EditDocument(strDocument, varProgID))
                alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
        else {
            if (typeof EditDocumentButton.EditDocument2 == "undefined" || !EditDocumentButton.EditDocument2(window, strDocument, varProgID))
                alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
    }
    else {
        alert(Strings.STS.L_EditDocumentProgIDError_Text);
    }
}
function GetSPDDownLoadUrl() {
ULSw7Q:
    ;
    var lang = typeof navigator.userLanguage == "string" ? navigator.userLanguage : null;

    if (!Boolean(lang))
        lang = navigator.browserLanguage;
    return SPDesignerDownloadUrl + "?clid=" + lang;
}
function PHSucceed(strApp, bEnabled) {
ULSw7Q:
    ;
    phManager.SetProtocolHandlerEnabled(strApp, bEnabled);
}
function _EditInSPD(strDocument, bRefresh) {
    var strSPDRedirectUrl = GetSPDDownLoadUrl();

    if (strDocument.charAt(0) == "/") {
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    }
    var strRegularUrl = ajaxNavigate.convertMDSURLtoRegularURL(strDocument);

    if (phManager.ShouldTryProtocolHandler("ms-spd")) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl("ms-spd", strRegularUrl, ProtocolCommand.Edit, null), function() {
        ULSw7Q:
            ;
            PHSucceed("ms-spd", true);
        }, function() {
        ULSw7Q:
            ;
            PHSucceed("ms-spd", false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
    ULSw7Q:
        ;
        if (phManager.IsProtocolHandlerEnabled("ms-spd")) {
            window.location.href = phManager.CreateProtocolHandlerUrl("ms-spd", unescapeProperly(strRegularUrl), ProtocolCommand.Edit, null);
            return;
        }
        var EditDocument = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");

        if (EditDocument != null && typeof EditDocument.EditDocument3 != "undefined") {
            if (!EditDocument.EditDocument3(window, strDocument, false, SPDesignerProgID)) {
                window.open(strSPDRedirectUrl);
            }
            else {
                if (bRefresh) {
                    window.onfocus = RefreshOnNextFocus;
                }
            }
        }
        else {
            window.open(strSPDRedirectUrl);
        }
    }
}
function editDocumentWithProgID2(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp) {
    editDocumentWithProgIDNoUI(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp, ErrorFunction1, ErrorFunction2);
    function ErrorFunction1() {
    ULSw7Q:
        ;
        if (varProgID == SPDesignerProgID) {
            var strSPDRedirectUrl = GetSPDDownLoadUrl();

            window.open(strSPDRedirectUrl);
        }
        else {
            alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
        window.onfocus = RefreshOnNextFocus;
    }
    function ErrorFunction2() {
    ULSw7Q:
        ;
        alert(Strings.STS.L_EditDocumentProgIDError_Text);
    }
}
function editDocumentWithProgIDNoUI(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp, fn1, fn2) {
    var objEditor;
    var fUseLocalCopy = false;

    varEditor = varEditor.replace(/(?:\.\d+)$/, '');
    if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    var strextension = SzExtension(unescapeProperly(strDocument));

    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null), function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, true);
        }, function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
    ULSw7Q:
        ;
        var ret = FallThroughInternal();

        if (ret == 1 && fn1 != null)
            fn1();
        else if (ret == 2 && fn2 != null)
            fn2();
    }
    function FallThroughInternal() {
    ULSw7Q:
        ;
        if (!IsNullOrUndefined(strApp) && strApp != '' && phManager.IsProtocolHandlerEnabled(strApp)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null);
            return 0;
        }
        if (FSupportCheckoutToLocal(strextension)) {
            try {
                objEditor = StsOpenEnsureEx2(varEditor + ".3");
                if (objEditor != null) {
                    if (bCheckout == "1") {
                        if (typeof objEditor.CheckoutDocumentPrompt == "undefined")
                            return 1;
                        if (!objEditor.CheckoutDocumentPrompt(strDocument, true, varProgID))
                            return 1;
                    }
                    else {
                        if (strCheckouttolocal == "1")
                            fUseLocalCopy = true;
                        if (!objEditor.EditDocument3(window, strDocument, fUseLocalCopy, varProgID))
                            return 1;
                    }
                    var fRefreshOnNextFocus = false;

                    fRefreshOnNextFocus = objEditor.PromptedOnLastOpen();
                    if (fRefreshOnNextFocus) {
                        window.onfocus = RefreshOnNextFocus;
                    }
                    else {
                        SetWindowRefreshOnFocus();
                    }
                    return 0;
                }
            }
            catch (e) { }
        }
        if (bCheckout == "1") {
            if (confirm(Strings.STS.L_ConfirmCheckout_Text))
                NavigateToCheckinAspx(strhttpRoot, "FileName=" + escapeProperly(unescapeProperly(strDocument)) + "&Checkout=true");
            else
                return 0;
        }
        objEditor = StsOpenEnsureEx2(varEditor);
        if (objEditor != null) {
            try {
                if (!objEditor.EditDocument2(window, strDocument, varProgID))
                    return 1;
                if (varEditor == "SharePoint.OpenXMLDocuments") {
                    SetWindowRefreshOnFocus();
                }
                else {
                    window.onfocus = RefreshOnNextFocus;
                }
                return 0;
            }
            catch (e) { }
            try {
                window.onfocus = null;
                if (SzExtension(strDocument) == "ppt" && varProgID == "")
                    varProgID = "PowerPoint.Slide";
                if (!objEditor.EditDocument(strDocument, varProgID))
                    return 1;
                SetWindowRefreshOnFocus();
                return 0;
            }
            catch (e) {
                return 2;
            }
        }
        return 1;
    }
}
function RefreshOnNextFocus() {
ULSw7Q:
    ;
    SetWindowRefreshOnFocus();
}
function createNewDocumentWithProgID2Ex(evt, strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp) {
    createNewDocumentWithProgID2(strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp);
}
function createNewDocumentWithProgID2(strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp) {
    createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, false, strApp, function() {
    ULSw7Q:
        ;
        createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID2, bXMLForm, true, strApp);
    });
}
function createNewDocumentWithProgIDEx(evt, strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    createNewDocumentWithProgID(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
}
function createNewDocumentWithProgID(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, true, strApp);
}
function createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, bWarning, strApp, func) {
    var objEditor;
    var NewDocumentRuntimeError_Text;
    var NewDocumentError_Text;
    var fRefreshOnNextFocus = false;

    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, strTemplate, ProtocolCommand.New, strSaveLocation), function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, true);
        }, function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
    ULSw7Q:
        ;
        if (!FallThroughInternal() && func != null) {
            func();
        }
    }
    function FallThroughInternal() {
    ULSw7Q:
        ;
        if (Boolean(strApp) && phManager.IsProtocolHandlerEnabled(strApp)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(strApp, strTemplate, ProtocolCommand.New, strSaveLocation);
            return true;
        }
        if (bXMLForm) {
            NewDocumentRuntimeError_Text = Strings.STS.L_NewFormLibTb1_Text;
            NewDocumentError_Text = Strings.STS.L_NewFormLibTb2_Text;
        }
        else {
            NewDocumentRuntimeError_Text = Strings.STS.L_NewDocLibTb1_Text;
            NewDocumentError_Text = Strings.STS.L_NewDocLibTb2_Text;
        }
        try {
            objEditor = StsOpenEnsureEx2(strProgID + ".2");
            if (typeof objEditor.CreateNewDocument2 == "undefined" || !objEditor.CreateNewDocument2(window, strTemplate, strSaveLocation))
                alert(NewDocumentRuntimeError_Text);
            fRefreshOnNextFocus = typeof objEditor.PromptedOnLastOpen != "undefined" && objEditor.PromptedOnLastOpen();
            if (fRefreshOnNextFocus) {
                window.onfocus = RefreshOnNextFocus;
            }
            else {
                SetWindowRefreshOnFocus();
            }
            return true;
        }
        catch (e) { }
        try {
            objEditor = StsOpenEnsureEx2(strProgID + ".1");
            window.onfocus = null;
            if (typeof objEditor.CreateNewDocument == "undefined" || !objEditor.CreateNewDocument(strTemplate, strSaveLocation))
                alert(NewDocumentRuntimeError_Text);
            SetWindowRefreshOnFocus();
            return true;
        }
        catch (e) {
            if (bWarning)
                alert(NewDocumentError_Text);
        }
        return undefined;
    }
}
function createNewDocumentWithRedirect2(evt, strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp) {
    createNewDocumentWithRedirect(strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp);
}
function createNewDocumentWithRedirect(strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp) {
    if (sron) {
        if (IsClientAppInstalled(strProgID, strApp, null)) {
            createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
        }
        else {
            createNewInBrowser(strRedirectUrl, strSaveLocation, strProgID, defaultItemOpen);
        }
    }
    else {
        if (IsClientAppInstalled(strProgID, strApp, null) && defaultItemOpen != 1) {
            createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
        }
        else {
            createNewInBrowser(strRedirectUrl, strSaveLocation, strProgID, defaultItemOpen);
        }
    }
}
function createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    var strIndependentProgId = strProgID.replace(/(?:\.\d+)$/, '');

    createNewDocumentWithProgID(strTemplate, strSaveLocation, strIndependentProgId, bXMLForm, strApp);
}
function createNewInBrowser(strRedirectUrl, strSaveLocation, strProgId, defaultItemOpen) {
    strRedirectUrl = strRedirectUrl + "&SaveLocation=" + makeAbsUrl(escapeProperly(strSaveLocation));
    strRedirectUrl = AddInfoPathParametersToUrl(strRedirectUrl, strProgId, null, defaultItemOpen);
    strRedirectUrl = AddSourceToUrl(strRedirectUrl);
    var url = new URI(strRedirectUrl);
    var isCreateNewDoc = false;

    if (Boolean(url)) {
        var urlPath = url.getPath(true);

        if (Boolean(urlPath) && (urlPath.toLowerCase()).indexOf('createnewdocument.aspx') != -1) {
            isCreateNewDoc = true;
        }
    }
    if (isCreateNewDoc) {
        _OpenPopUpPage(strRedirectUrl, OnCloseDialogNavigate);
    }
    else {
        STSNavigate(strRedirectUrl);
    }
}
function OnCloseDialogNavigate(result, returnValue) {
ULSw7Q:
    ;
    if (result == SP.UI.DialogResult.OK && Boolean(returnValue)) {
        STSNavigate(returnValue);
    }
}
function LRUCache() {
ULSw7Q:
    ;
    this.state = [];
    this.ageStack = [];
    this.count = 0;
}
function LRUCache_InitializePrototype() {
ULSw7Q:
    ;
    LRUCache.prototype.state = [];
    LRUCache.prototype.ageStack = [];
    LRUCache.prototype.count = 0;
}
function LRUCache_Add(cache, itemName) {
    if (cache == null) {
        return;
    }
    var oldAge = cache.state[itemName];

    if (oldAge != null) {
        cache.ageStack[oldAge] = null;
    }
    else {
        cache.count++;
    }
    var age = cache.ageStack.length;

    cache.state[itemName] = age;
    cache.ageStack.push(itemName);
}
function LRUCache_Remove(cache, itemName) {
    if (cache == null)
        return;
    var age = cache.state[itemName];

    if (age != null) {
        cache.ageStack[age] = null;
        cache.state[itemName] = null;
        cache.count--;
    }
}
function _AddGroupToCookie(groupName) {
    var webPartID = ExpGroupFetchWebPartID(groupName);

    if (webPartID == null)
        return;
    LRUCache_Add(g_ExpGroupWPState, webPartID);
    if (g_ExpGroupTable[webPartID] == null) {
        g_ExpGroupTable[webPartID] = new LRUCache();
    }
    var groupString = ExpGroupFetchGroupString(groupName);

    if (groupString == null)
        return;
    LRUCache_Add(g_ExpGroupTable[webPartID], groupString);
    ExpGroupRenderCookie();
}
function _RemoveGroupFromCookie(groupName) {
    var webPartID = ExpGroupFetchWebPartID(groupName);

    if (webPartID == null)
        return;
    if (g_ExpGroupTable[webPartID] == null)
        return;
    LRUCache_Add(g_ExpGroupWPState, webPartID);
    var groupString = ExpGroupFetchGroupString(groupName);

    if (groupString == null)
        return;
    var aGroupString;

    for (aGroupString in g_ExpGroupTable[webPartID].state) {
        if (g_ExpGroupTable[webPartID].state[aGroupString] != null && aGroupString.substring(0, groupString.length) == groupString) {
            LRUCache_Remove(g_ExpGroupTable[webPartID], aGroupString);
        }
    }
    ExpGroupRenderCookie();
}
function ExpGroupRenderCookie() {
ULSw7Q:
    ;
    if (g_ExpGroupWPState == null)
        return;
    var newWPString = ExpGroupWPListName + "=";
    var numWPRendered = 0;
    var ix;

    for (ix = g_ExpGroupWPState.ageStack.length - 1; ix >= 0; ix--) {
        if (g_ExpGroupWPState.ageStack[ix] != null) {
            var webPartID = g_ExpGroupWPState.ageStack[ix];

            if (numWPRendered == ExpGroupMaxWP) {
                DeleteCookie(ExpGroupCookiePrefix + webPartID);
                break;
            }
            else if (g_ExpGroupTable[webPartID] == null) {
                numWPRendered++;
                if (numWPRendered > 1)
                    newWPString += escapeProperly(ExpGroupCookieDelimiter);
                newWPString += escapeProperly(webPartID);
            }
            else if (g_ExpGroupTable[webPartID].count == 0) {
                DeleteCookie(ExpGroupCookiePrefix + webPartID);
            }
            else if (numWPRendered < ExpGroupMaxWP) {
                numWPRendered++;
                ExpGroupRenderCookieForWebPart(webPartID);
                if (numWPRendered > 1)
                    newWPString += escapeProperly(ExpGroupCookieDelimiter);
                newWPString += escapeProperly(webPartID);
            }
        }
    }
    if (numWPRendered == 0) {
        DeleteCookie(ExpGroupWPListName);
    }
    else {
        document.cookie = newWPString;
    }
}
function ExpGroupRenderCookieForWebPart(webPartID) {
    if (!g_ExpGroupTable[webPartID].ageStack)
        return;
    var newCookieString = ExpGroupCookiePrefix + webPartID + "=";
    var bFirst = true;
    var ix;

    for (ix = g_ExpGroupTable[webPartID].ageStack.length - 1; ix >= 0; ix--) {
        if (g_ExpGroupTable[webPartID].ageStack[ix] != null) {
            var groupString = g_ExpGroupTable[webPartID].ageStack[ix];
            var newPortion = "";

            if (!bFirst)
                newPortion += escapeProperly(ExpGroupCookieDelimiter);
            newPortion += escapeProperly(groupString);
            if (newCookieString.length + newPortion.length <= ExpGroupMaxCookieLength) {
                newCookieString += newPortion;
                bFirst = false;
            }
        }
    }
    document.cookie = newCookieString + ";";
}
function ExpDataViewGroupOnPageLoad() {
ULSw7Q:
    ;
    ExpGroupOnPageLoad("PageLoad");
}
function ExpGroupOnPageLoad(isDataView) {
    var flag = document.getElementById("GroupByColFlag");

    if (flag != null) {
        g_ExpGroupNeedsState = true;
        ExpGroupParseCookie(isDataView);
    }
}
function ExpGroupParseCookie(isDataView) {
    var webPartListString = GetCookie(ExpGroupWPListName);

    if (webPartListString == null)
        return;
    g_ExpGroupParseStage = true;
    var webPartList = webPartListString.split(ExpGroupCookieDelimiter);
    var ix;

    for (ix = webPartList.length - 1; ix >= 0; ix--) {
        var webPartID = webPartList[ix];

        LRUCache_Add(g_ExpGroupWPState, webPartID);
        if (g_ExpGroupTable[webPartID] == null) {
            if (document.getElementById("GroupByCol" + webPartID) != null)
                ExpGroupParseCookieForWebPart(webPartID, isDataView);
        }
    }
    g_ExpGroupParseStage = false;
    if (Boolean(isDataView) && g_ExpGroupXSLTQueue.length > 0) {
        ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), isDataView);
    }
    else if (!Boolean(isDataView) && g_ExpGroupCAMLQueue.length > 0) {
        ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), isDataView);
    }
}
function ExpGroupParseCookieForWebPart(webPartID, isDataView) {
    var groupListString = GetCookie(ExpGroupCookiePrefix + webPartID);

    if (groupListString == null)
        return;
    var groupList = groupListString.split(ExpGroupCookieDelimiter);
    var groupString;
    var ix;

    g_ExpGroupTable[webPartID] = new LRUCache();
    for (ix = groupList.length - 1; ix >= 0; ix--) {
        groupString = groupList[ix];
        LRUCache_Add(g_ExpGroupTable[webPartID], groupString);
    }
    var loadedGroups = [];
    var viewTable = (document.getElementById("GroupByCol" + webPartID)).parentNode;
    var tbodyTags = viewTable.getElementsByTagName("TBODY");

    for (ix = 0; ix < tbodyTags.length; ix++) {
        groupString = tbodyTags[ix].getAttribute("groupString");
        if (groupString != null) {
            var tbodyId = tbodyTags[ix].id;

            if (tbodyId == null)
                continue;
            var groupName = tbodyId.substring(4, tbodyId.length);
            var ctxId = groupName.substring(0, groupName.indexOf('-'));
            var myCtx = g_ctxDict["ctx" + ctxId];

            if (myCtx == null || !myCtx.isXslView && Boolean(isDataView) || myCtx.isXslView && !Boolean(isDataView)) {
                g_ExpGroupTable[webPartID] = null;
                break;
            }
            if (g_ExpGroupTable[webPartID].state[groupString] != null && loadedGroups[groupName] == null) {
                ExpCollGroup(groupName, "img_" + groupName, isDataView);
                loadedGroups[groupName] = true;
                var tbody = document.getElementById("tbod" + groupName + "_");

                if (tbody != null) {
                    var isLoaded = tbody.getAttribute("isLoaded");

                    if (isLoaded == "false") {
                        if (Boolean(isDataView))
                            g_ExpGroupXSLTQueue.push(groupName);
                        else
                            g_ExpGroupCAMLQueue.push(groupName);
                    }
                }
            }
        }
    }
    var aGroupName;

    for (aGroupName in loadedGroups) {
        var index = aGroupName.indexOf("_");

        if (index != aGroupName.length - 1 && index != -1) {
            var parentName = aGroupName.substring(0, index + 1);

            if (loadedGroups[parentName] == null) {
                var parentString = ExpGroupFetchGroupString(parentName);

                if (parentString != null) {
                    LRUCache_Add(g_ExpGroupWPState, parentString);
                    ExpCollGroup(parentName, "img_" + parentName, isDataView);
                    loadedGroups[parentString] = true;
                }
            }
        }
    }
}
function _ExpGroupBy(formObj) {
    if (browseris.w3c && !browseris.ie) {
        document.all = document.getElementsByTagName("*");
    }
    var docElts = document.all;
    var numElts = docElts.length;
    var images = formObj.getElementsByTagName("IMG");
    var img = images[0];
    var srcPath = img.getAttribute('src');
    var index = srcPath.lastIndexOf("/");
    var imgName = srcPath.slice(index + 1);
    var expandSrcPath = GetThemedImageUrl("commentexpand12.png");
    var collapseSrcPath = GetThemedImageUrl("commentcollapse12.png");
    var displayStr = "auto";

    if (srcPath == expandSrcPath || imgName == 'plus.gif') {
        displayStr = "";
        if (imgName == 'plus.gif')
            img.src = '/_layouts/15/images/minus.gif';
        else
            img.src = expandSrcPath;
    }
    else {
        displayStr = "none";
        if (imgName == 'minus.gif')
            img.src = '/_layouts/15/images/plus.gif';
        else
            img.src = GetThemedImageUrl("commentcollapse12.png");
    }
    var oldName = img.name;

    img.name = img.alt;
    img.alt = oldName;
    var spanNode = img;

    while (spanNode != null) {
        spanNode = spanNode.parentNode;
        if (spanNode != null && spanNode.id != null && spanNode.id.length > 5 && spanNode.id.substr(0, 5) == "group")
            break;
    }
    var parentNode = spanNode;

    while (parentNode != null) {
        parentNode = parentNode.parentNode;
        if (parentNode != null && parentNode.tagName == "TABLE")
            break;
    }
    var lastNode = null;

    if (parentNode != null) {
        lastNode = parentNode.lastChild;
        if (lastNode != null && lastNode.tagName == "TBODY")
            lastNode = lastNode.lastChild;
        if (lastNode != null && lastNode.tagName == "TR" && lastNode.lastChild != null)
            lastNode = lastNode.lastChild;
    }
    var childObj;

    for (var i = 0; i < numElts; i++) {
        childObj = docElts[i];
        if (childObj == spanNode)
            break;
    }
    var ID = spanNode.id.slice(5);
    var IDInt = parseInt(ID);
    var displayStyle = displayStr;

    for (var j = i + 1; j < numElts; j++) {
        childObj = docElts[j];
        if (childObj.id.length > 5 && childObj.id.substr(0, 5) == "group") {
            var curID = parseInt(childObj.id.slice(5));

            if (curID <= IDInt)
                return;
        }
        parentNode = childObj;
        while (parentNode != null) {
            parentNode = parentNode.parentNode;
            if (parentNode == spanNode)
                break;
        }
        if (parentNode == spanNode)
            continue;
        if (childObj.id != null && childObj.id.substring(0, 5) == "group")
            displayStr = displayStyle;
        if (childObj.id != null && childObj.id.substring(0, 8) == "footer" + ID)
            displayStr = displayStyle;
        if (displayStyle != "none" && childObj != img && childObj.tagName == "IMG" && childObj.src != null) {
            var plusGif = '/_layouts/15/images/plus.gif';
            var minisGif = '/_layouts/15/images/minus.gif';

            if (childObj.getAttribute('src') == expandSrcPath || childObj.src.slice(childObj.src.length - plusGif.length) == plusGif) {
                displayStr = "none";
            }
            else if (childObj.getAttribute('src') == collapseSrcPath || childObj.src.slice(childObj.src.length - minisGif.length) == minisGif) {
                displayStr = "";
            }
        }
        if (childObj.tagName == spanNode.tagName && childObj.id != "footer") {
            childObj.style.display = displayStr;
        }
        if (childObj.tagName == "TABLE" && lastNode == null || childObj == lastNode)
            break;
    }
}
function SzExtension(szHref) {
    var sz = new String(szHref);
    var re = /^.*\.([^\.]*)$/;

    return (sz.replace(re, "$1")).toLowerCase();
}
function SzServer(szHref) {
    var sz = new String(szHref);
    var re = /^([^:]*):\/\/([^\/]*).*$/;

    return sz.replace(re, "$1://$2");
}
var v_stsOpenDoc;
var v_strStsOpenDoc;

function NavigateParentOrSelf(ele, strUrl) {
    if (ele.target == "_top" && typeof window.frameElement.navigateParent != "undefined") {
        window.frameElement.navigateParent(strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function StsOpenEnsureEx(szProgId) {
    if (v_stsOpenDoc == null || v_strStsOpenDoc != szProgId) {
        if (window.ActiveXObject != null) {
            try {
                v_stsOpenDoc = new ActiveXObject(szProgId);
                v_strStsOpenDoc = szProgId;
            }
            catch (e) {
                v_stsOpenDoc = null;
                v_strStsOpenDoc = null;
            }
            ;
        }
    }
    return v_stsOpenDoc;
}
function _DispDocItem(ele, strProgId) {
    return _DispDocItemEx(ele, 'FALSE', 'FALSE', 'FALSE', strProgId);
}
function _DispDocItemExWithServerRedirect(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect) {
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "";
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0) || SzExtension(ele.href) == "pdf";

    if (fIsServerFile) {
        strServerFileRedirect = strServerFileRedirect.substring(1);
        fIsServerFile = strServerFileRedirect != "";
    }
    if (fIsServerFile) {
        if (iDefaultItemOpen == "1" || !fIsClientAppInstalled) {
            var strUrl = strServerFileRedirect;

            strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
            strUrl = AddSourceToUrl(strUrl);
            if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                if (typeof window.frameElement.navigateParent != "undefined")
                    window.frameElement.navigateParent(strUrl);
            }
            else {
                if (objEvent.shiftKey || objEvent.ctrlKey) {
                    return true;
                }
                else {
                    NavigateParentOrSelf(ele, strUrl);
                }
            }
            objEvent.cancelBubble = true;
            objEvent.returnValue = false;
            return false;
        }
    }
    return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function _DispDocItemEx(ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId) {
    return DispDocItemExWithEvent(ele, null, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, callbackFunc, fIsClientAppInstalled) {
    var strUrl;

    itemTable = FindSTSMenuTable(ele, "CTXName");
    if (!browseris.ie && !IsSupportedMacBrowser() && !IsSupportedNPApiBrowserOnWin()) {
        if (browseris.ie)
            event.cancelBubble = false;
        strUrl = ele.href;
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else
            STSNavigate(strUrl);
        return false;
    }
    var stsOpen;
    var szHref;
    var fRet = true;
    var szAppId = "";
    var tblFileDlg = document.getElementById("FileDialogViewTable");

    if (tblFileDlg != null) {
        if (browseris.ie) {
            event.cancelBubble = false;
            event.returnValue = false;
        }
        return true;
    }
    var strApp = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";
    var isEdit = Boolean(ele.getAttribute("isEdit")) || strApp == "ms-infopath";

    szHref = itemTable != null ? GetAttributeFromItemTable(itemTable, "Url", "ServerUrl") : "";
    if (szHref == null || szHref == "") {
        if (isEdit)
            szHref = ele.editHref;
        if (!Boolean(szHref))
            szHref = ele.href;
    }
    else
        szHref = SzServer(ele.href) + szHref;
    var szExt = SzExtension(szHref);
    var shouldEdit = isEdit && HasRights(0x0, 0x4) && !FDefaultOpenForReadOnly(szExt) && (!Boolean(currentItemCheckedOutUserId) || currentItemCheckedOutUserId == ctx.CurrentUserId);

    if (!Boolean(strApp))
        strApp = ele.getAttribute("App");
    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, szHref, shouldEdit ? ProtocolCommand.Edit : ProtocolCommand.View, null), function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, true);
        }, function() {
        ULSw7Q:
            ;
            PHSucceed(strApp, false);
            if (callbackFunc != null && !(isEdit && fIsClientAppInstalled))
                callbackFunc();
            else
                FallThrough();
        });
        return CancelMyEvent(false, stsOpen, objEvent, true);
    }
    return FallThrough();
    function FallThrough() {
    ULSw7Q:
        ;
        if (Boolean(strApp) && phManager.IsProtocolHandlerEnabled(strApp)) {
            if (strApp != null && strApp != '') {
                window.location.href = phManager.CreateProtocolHandlerUrl(strApp, szHref, shouldEdit ? ProtocolCommand.Edit : ProtocolCommand.View, null);
                return CancelMyEvent(false, stsOpen, objEvent, true);
            }
        }
        if (currentItemProgId == null && itemTable != null)
            currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
        if (currentItemProgId != null)
            szAppId = currentItemProgId;
        if (FDefaultOpenForReadOnly(szExt)) {
            if (strProgId.indexOf("SharePoint.OpenDocuments") >= 0)
                strProgId = "SharePoint.OpenDocuments.3";
        }
        else if (!FSupportCheckoutToLocal(szExt)) {
            strProgId = "";
        }
        if (currentItemCheckedOutUserId == null && itemTable != null && typeof itemTable.COUId == "string")
            currentItemCheckedOutUserId = itemTable.COUId;
        if (currentItemCheckedoutToLocal == null && itemTable != null)
            currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
        if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && currentItemCheckedOutUserId == ctx.CurrentUserId && (strProgId == "" || strProgId.indexOf("SharePoint.OpenDocuments") >= 0) && FSupportCheckoutToLocal(szExt) || strProgId == "SharePoint.OpenDocuments") {
            strProgId = "SharePoint.OpenDocuments.3";
        }
        var stsopenVersion = 2;

        if (strProgId != '' && HasRights(0x10, 0x0)) {
            if (strProgId.indexOf(".3") >= 0)
                stsopenVersion = 3;
            stsOpen = StsOpenEnsureEx2(strProgId);
            if (stsOpen == null && stsopenVersion == 3) {
                strProgId = strProgId.replace(".3", ".2");
                stsOpen = StsOpenEnsureEx2(strProgId);
                stsopenVersion = 2;
            }
        }
        if (stsOpen != null) {
            if (stsopenVersion == 2 || itemTable == null && currentItemCheckedOutUserId == null || ctx.isVersions == 1 && (itemTable == null || typeof itemTable.isMostCur != "string" || itemTable.isMostCur == "0")) {
                try {
                    if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && (currentItemCheckedOutUserId == ctx.CurrentUserId || ctx.CurrentUserId == null)) {
                        if (currentItemCheckedoutToLocal == '1') {
                            alert(Strings.STS.L_OpenDocumentLocalError_Text);
                            fRet = false;
                        }
                        else
                            fRet = typeof stsOpen.EditDocument2 != "undefined" && stsOpen.EditDocument2(window, szHref, szAppId);
                    }
                    else {
                        fRet = typeof stsOpen.ViewDocument2 != "undefined" && stsOpen.ViewDocument2(window, szHref, szAppId);
                    }
                }
                catch (e) {
                    fRet = false;
                }
                if (fRet)
                    window.onfocus = RefreshOnNextFocus;
            }
            else {
                var iOpenFlag = 0;

                if (currentItemCheckedOutUserId != "") {
                    if (currentItemCheckedOutUserId != ctx.CurrentUserId && ctx.CurrentUserId != null)
                        iOpenFlag = 1;
                    else if (currentItemCheckedoutToLocal == null || currentItemCheckedoutToLocal != '1')
                        iOpenFlag = 2;
                    else
                        iOpenFlag = 4;
                }
                else if (!HasRights(0x0, 0x4) || FDefaultOpenForReadOnly(szExt))
                    iOpenFlag = 1;
                else if (ctx.isForceCheckout == true)
                    iOpenFlag = 3;
                try {
                    if (isEdit)
                        fRet = typeof stsOpen.EditDocument3 != "undefined" && stsOpen.EditDocument3(window, szHref, false, szAppId);
                    else
                        fRet = typeof stsOpen.ViewDocument3 != "undefined" && stsOpen.ViewDocument3(window, szHref, iOpenFlag, szAppId);
                }
                catch (e) {
                    fRet = false;
                }
                if (fRet) {
                    var fRefreshOnNextFocus = typeof stsOpen.PromptedOnLastOpen != "undefined" && stsOpen.PromptedOnLastOpen();

                    if (fRefreshOnNextFocus)
                        window.onfocus = RefreshOnNextFocus;
                    else
                        SetWindowRefreshOnFocus();
                }
            }
        }
        else if (currentItemCheckedoutToLocal == '1') {
            alert(Strings.STS.L_OpenDocumentLocalError_Text);
        }
        if (stsOpen == null || !fRet) {
            if (fTransformServiceOn == 'TRUE' && fShouldTransformExtension == 'TRUE' && fTransformHandleUrl == 'TRUE') {
                if (itemTable == null)
                    return fRet;
                if (browseris.ie) {
                    event.cancelBubble = true;
                    event.returnValue = false;
                }
                else if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                    if (typeof objEvent.preventDefault != "undefined")
                        objEvent.preventDefault();
                    if (typeof objEvent.stopPropagation != "undefined")
                        objEvent.stopPropagation();
                }
                var getHttpRoot = new Function("return " + itemTable.getAttribute("CTXName") + ".HttpRoot;");

                strUrl = getHttpRoot() + "/_layouts/15/htmltrverify.aspx?doc=" + escapeProperly(szHref);
                if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                    if (typeof window.frameElement.navigateParent != "undefined")
                        window.frameElement.navigateParent(strUrl);
                }
                else
                    GoToPage(strUrl);
            }
            else if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                if (typeof window.frameElement.navigateParent != "undefined")
                    window.frameElement.navigateParent(ele.href);
            }
            else
                STSNavigate(ele.href);
            return false;
        }
        return CancelMyEvent(fRet, stsOpen, objEvent);
    }
}
function CancelMyEvent(fRet, stsOpen, objEvent, forceCancel) {
    if (browseris.ie) {
        if (event != null) {
            event.cancelBubble = true;
            event.returnValue = false;
        }
    }
    else if (IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        if (forceCancel || stsOpen != null && fRet) {
            if (typeof objEvent.preventDefault != "undefined")
                objEvent.preventDefault();
            if (typeof objEvent.stopPropagation != "undefined")
                objEvent.stopPropagation();
        }
        return true;
    }
    return fRet;
}
function DispDocItemEx2(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strServerFileRedirect) {
    var strUrl;
    var fRedirect = false;
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "";
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);
    var isEdit = !IsNullOrUndefined(ele.getAttribute("isEdit"));

    function OpenDocInWAC() {
    ULSw7Q:
        ;
        strUrl = strServerFileRedirect;
        strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
        strUrl = AddSourceToUrl(strUrl);
        if (isEdit) {
            var url = new URI(strUrl);

            url.setQueryParameter("action", "edit");
            strUrl = url.getString();
        }
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else {
            if (objEvent.shiftKey || objEvent.ctrlKey) {
                return true;
            }
            else {
                NavigateParentOrSelf(ele, strUrl);
            }
        }
        objEvent.cancelBubble = true;
        objEvent.returnValue = false;
        return false;
    }
    if ((SzExtension(ele.href)).indexOf("pdf") != -1) {
        var dynEle = ele;
        var navUrl = isEdit && Boolean(dynEle.editHref) ? dynEle.editHref : dynEle.href;

        dynEle.href = navUrl;
        STSNavigate(navUrl);
        return false;
    }
    if (fIsServerFile) {
        itemTable = FindSTSMenuTable(ele, "CTXName");
        var strApp = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";

        if (!Boolean(strApp))
            strApp = ele.getAttribute("App");
        var tryPHFirst = !fIsClientAppInstalled && browseris.ie10standardUp && Boolean(strApp) && (iDefaultItemOpen == "0" || isEdit) && HasRights(0x0, 0x20);

        if (!tryPHFirst && (iDefaultItemOpen == "1" && !(fIsClientAppInstalled && isEdit && HasRights(0x0, 0x20)) || !fIsClientAppInstalled)) {
            return OpenDocInWAC();
        }
        else if (fIsClientAppInstalled) {
            if (strProgId == "" || strProgId.indexOf("SharePoint.OpenDocuments") >= 0) {
                return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId);
            }
            else {
                if (!ViewDoc(ele.href, strProgId)) {
                    editDocumentWithProgIDNoUI(ele.href, currentItemProgId, strProgId, "0", ctx.HttpRoot, "0", strApp, ErrorFunction, ErrorFunction);
                }
                var stsOpen = StsOpenEnsureEx2(strProgId);

                return CancelMyEvent(false, stsOpen, objEvent);
            }
        }
    }
    function ErrorFunction() {
    ULSw7Q:
        ;
        strUrl = strServerFileRedirect;
        strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, -1);
        strUrl = AddSourceToUrl(strUrl);
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else {
            NavigateParentOrSelf(ele, strUrl);
        }
    }
    return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, fIsServerFile ? OpenDocInWAC : null, fIsClientAppInstalled);
}
function DispDocItemExWithOutContext(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
}
function AddSourceToUrl(url) {
    var isWOPIUrl = (url.toLowerCase()).indexOf("/wopiframe.aspx?") > 0;

    if (isWOPIUrl) {
        document.cookie = "WOPISessionContext=" + GetSource() + ";path=/;";
        return url;
    }
    else {
        var source = GetSource();
        var totalUrlLength = url.length + source.length;

        if (totalUrlLength > 1950) {
            return url;
        }
        else {
            var ch = url.indexOf('?') >= 0 ? '&' : '?';

            return url + ch + "Source=" + source;
        }
    }
}
function IsInfoPathProgId(strProgId) {
    if (strProgId != null && (strProgId.startsWith("SharePoint.OpenXMLDocuments") || strProgId.startsWith("SharePoint.OpenXmlDocuments")))
        return true;
    else
        return false;
}
function AddInfoPathParametersToUrl(strUrl, strProgId, ele, iDefaultItemOpen) {
    if (IsInfoPathProgId(strProgId)) {
        var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);
        var ch = strUrl.indexOf('?') >= 0 ? '&' : '?';
        var strNewUrl = strUrl + ch + "ClientInstalled=" + String(fIsClientAppInstalled);

        if (iDefaultItemOpen != -1) {
            strNewUrl = strNewUrl + "&DefaultItemOpen=" + String(iDefaultItemOpen);
        }
        if (strNewUrl.length > 1950) {
            return strUrl;
        }
        else {
            return strNewUrl;
        }
    }
    else {
        return strUrl;
    }
}
function _VerifyFolderHref(ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect) {
    var fGetHrefForLinking = objEvent.button == Sys.UI.MouseButton.rightButton;
    var strUrl = GetRedirectedHref(ele.href, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, false, fGetHrefForLinking, ele);
    var fIsServerFile = strHtmlType != null && strHtmlType != "" && strServerFileRedirect != null && strServerFileRedirect.length > 1;

    if (fIsServerFile) {
        if (Boolean(ele.getAttribute("isEdit")))
            ele.editHref = ele.href;
        if (!(strHtmlType == "OneNote.Notebook" && iDefaultItemOpen == "0"))
            ele.href = strUrl;
        else {
            var ctxCur = GetCurrentCtx();

            if (ctxCur != null && typeof getHostUrl == 'function') {
                var listItem = ListItemDataFromId(ctxCur, ele.parentNode.id);

                if (listItem != null)
                    ele.href = getHostUrl(ctxCur.HttpRoot) + listItem.FileRef;
            }
        }
        objEvent.cancelBubble = true;
        objEvent.returnValue = true;
        DetachEvent('mousedown', VerifyFolderHref, ele);
    }
    return false;
}
function _VerifyHref(ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect) {
    var fGetHrefForLinking = objEvent.button == Sys.UI.MouseButton.rightButton;
    var strUrl = GetRedirectedHref(ele.href, iDefaultItemOpen, strProgId, null, strServerFileRedirect, false, fGetHrefForLinking, ele);
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect.length > 1;
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);

    if (fIsServerFile) {
        if (iDefaultItemOpen == "1" && !(fIsClientAppInstalled && !IsNullOrUndefined(ele.getAttribute("isEdit"))) || !fIsClientAppInstalled) {
            if (Boolean(ele.getAttribute("isEdit")))
                ele.editHref = ele.href;
            if (iDefaultItemOpen == "1")
                ele.href = strUrl;
            objEvent.cancelBubble = true;
            objEvent.returnValue = true;
        }
        DetachEvent('mousedown', VerifyHref, ele);
    }
    return false;
}
function GetRedirectedHref(defaultHref, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, fIsFolder, fGetHrefForLinking, ele) {
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "" && (!fIsFolder || strHtmlType != null && strHtmlType != "");
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);

    if (fIsServerFile) {
        strServerFileRedirect = strServerFileRedirect.substring(1);
        fIsServerFile = strServerFileRedirect != "";
    }
    var strUrl = defaultHref;

    if (fIsServerFile) {
        if (fIsFolder || iDefaultItemOpen == "1" || !fIsClientAppInstalled) {
            strUrl = strServerFileRedirect;
            if (!IsInfoPathProgId(strProgId) && defaultHref.indexOf("?") < 0 && fGetHrefForLinking) {
                strUrl = defaultHref + "?Web=1";
            }
            else {
                if (GetUrlKeyValue("Web", true, defaultHref, true) == "1") {
                    strUrl = defaultHref;
                }
                else {
                    strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
                    strUrl = AddSourceToUrl(strUrl);
                }
            }
            strUrl = STSPageUrlValidation(strUrl);
        }
    }
    return strUrl;
}
function _DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    if (objEvent.shiftKey || objEvent.ctrlKey) {
        return true;
    }
    var tblFileDlg = document.getElementById("FileDialogViewTable");

    if (tblFileDlg != null) {
        objEvent.cancelBubble = false;
        objEvent.returnValue = false;
        return true;
    }
    if (typeof ctx == "undefined" || ctx == null)
        ctx = new ContextInfo();
    CtxSetCurrentUserId(strCurrentUser);
    if (strRequireCheckout == '1')
        CtxSetIsForceCheckout(true);
    else
        CtxSetIsForceCheckout(false);
    currentItemCheckedOutUserId = strCheckoutUser;
    currentItemCheckedoutToLocal = strCheckedoutTolocal;
    currentItemProgId = strHtmlType;
    if (strPermmask != null && strPermmask != '') {
        SetCurrentPermMaskFromString(strPermmask, null);
        if (iDefaultItemOpen == "0" && !HasRights(0x0, 0x20))
            iDefaultItemOpen = "1";
    }
    objEvent.cancelBubble = true;
    if (strServerFileRedirect != null && strServerFileRedirect != '')
        strServerFileRedirect = strServerFileRedirect.substring(1);
    return DispDocItemEx2(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strServerFileRedirect);
}
function IsClientAppInstalled(strProgId, strApp, ele) {
    if (strApp != null && phManager.IsProtocolHandlerEnabled(strApp)) {
        return true;
    }
    if (ele != null) {
        itemTable = FindSTSMenuTable(ele, "CTXName");
        var strAppLocal = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";

        if (!Boolean(strAppLocal))
            strAppLocal = ele.getAttribute("App");
        if (Boolean(strAppLocal) && phManager.IsProtocolHandlerEnabled(strAppLocal))
            return true;
    }
    var stsOpen = null;

    if (strProgId != '') {
        stsOpen = StsOpenEnsureEx2(strProgId);
    }
    return stsOpen != null;
}
function ViewDoc(url, strProgId) {
    var stsOpen = StsOpenEnsureEx2(strProgId);
    var fRet = false;

    if (stsOpen != null) {
        try {
            fRet = typeof stsOpen.ViewDocument2 != "undefined" && stsOpen.ViewDocument2(window, url);
        }
        catch (e) {
            fRet = false;
        }
    }
    return fRet;
}
function _PortalPinToMyPage3(eForm, portalUrl, instanceID) {
    eForm.action = portalUrl + '_vti_bin/portalapi.aspx?Cmd=PinToMyPage';
    if (typeof eForm.ReturnUrl != "undefined")
        eForm.ReturnUrl.value = window.location.href;
    if (typeof eForm.ListViewUrl != "undefined" && typeof eForm.ListViewUrl.value != "undefined")
        eForm.ListViewUrl.value = MakeMtgInstanceUrl(eForm.ListViewUrl.value, instanceID);
    eForm.submit();
}
function _PortalPinToMyPage(eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate) {
    eForm.action = portalUrl + '_vti_bin/portalapi.aspx?Cmd=PinToMyPage';
    SetFieldValue(eForm, "ReturnUrl", window.location.href);
    SetFieldValue(eForm, "ListViewUrl", MakeMtgInstanceUrl(listViewUrl, instanceId));
    SetFieldValue(eForm, "ListTitle", listTitle);
    SetFieldValue(eForm, "ListDescription", listDescription);
    SetFieldValue(eForm, "BaseType", baseType);
    SetFieldValue(eForm, "ServerTemplate", serverTemplate);
    eForm.submit();
}
function SetFieldValue(eForm, fieldName, value) {
    var field = eForm[fieldName];

    if (field == null) {
        field = document.createElement("INPUT");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", fieldName);
        eForm.appendChild(field);
    }
    field.value = value;
}
function _MoveToViewDate(strdate, view_type, ctxid) {
    var fn = function() {
    ULSw7Q:
        ;
        var ctrl;

        if (Boolean(ctxid))
            ctrl = SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance(ctxid);
        else
            ctrl = SP.UI.ApplicationPages.CalendarInstanceRepository.firstInstance();
        if (ctrl != null) {
            if (view_type != null) {
                if (typeof ctrl.moveToViewType != "undefined")
                    ctrl.moveToViewType(view_type);
            }
            else if (typeof ctrl.moveToDate != "undefined")
                ctrl.moveToDate(strdate);
        }
    };

    if (FV4UI() && typeof _fV4Calendar != "undefined" && _fV4Calendar) {
        AjaxCalendarCall(fn);
    }
    else {
        MoveToViewDatePostBack(strdate, view_type);
    }
}
function MoveToViewDatePostBack(strdate, view_type) {
    var wUrl = window.location.href;

    if (strdate != null)
        wUrl = StURLSetVar2(wUrl, "CalendarDate", escapeProperly(strdate));
    if (view_type != null)
        wUrl = StURLSetVar2(wUrl, "CalendarPeriod", view_type);
    _SubmitFormPost(wUrl, true);
}
function AjaxCalendarCall(fn) {
    var defd;

    try {
        defd = typeof SP.UI.ApplicationPages.CalendarInstanceRepository;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function _MoveToDate(strdate, ctxid) {
    _MoveToViewDate(strdate, null, ctxid);
}
function MoveToToday() {
ULSw7Q:
    ;
    _MoveToViewDate("", null);
}
function MoveView(viewtype) {
    _MoveToViewDate(null, viewtype);
}
function _ClickDay(date) {
ULSw7Q:
    ;
    _MoveToDate(date);
}
function GetIframe() {
ULSw7Q:
    ;
    return null;
}
function _GetMonthView(str) {
    var wUrl = window.location.href;
    var ExpWeek = document.getElementById("ExpandedWeeksId");

    if (ExpWeek != null) {
        ExpWeek.value = str;
        _SubmitFormPost(wUrl, true);
    }
}
function NewItemDT(url, day, time) {
    if (url == null)
        return;
    if (time != null)
        url = StURLSetVar2(url, "CalendarTime", time);
    if (day != null)
        url = StURLSetVar2(url, "CalendarDate", day);
    _NewItem(url);
}
function ClickTime(url, time) {
    NewItemDT(url, null, time);
}
function NewItemDay(url, day) {
    NewItemDT(url, day, null);
}
function ScrollToAnchorInInnerScrollPane(formName, hiddenFieldName, textInHref) {
    try {
        var form = document.getElementById(formName);
        var anchor = document.getElementById(form[hiddenFieldName].value);

        if (typeof anchor == "undefined" || anchor == null)
            throw "";
        var iconAnchor = anchor.parentNode.previousSibling;

        if (typeof iconAnchor != "undefined" && iconAnchor != null) {
            var expandIconAnchor = iconAnchor.previousSibling;

            if (typeof expandIconAnchor != "undefined" && expandIconAnchor != null)
                anchor = expandIconAnchor;
            else
                anchor = iconAnchor;
        }
        else
            throw "";
    }
    catch (e) {
        var tempAnchor = null;
        var anchorLength = document.anchors.length;

        for (var i = 0; i < anchorLength; i++) {
            tempAnchor = document.anchors[i];
            var href = tempAnchor.href;

            if (href.search(new RegExp(textInHref)) != -1) {
                anchor = tempAnchor;
                break;
            }
        }
    }
    if (typeof anchor != "undefined" && anchor != null) {
        var tableNode = anchor.parentNode;

        while (tableNode != null && tableNode.tagName != "TABLE")
            tableNode = tableNode.parentNode;
        if (typeof tableNode != "undefined" && tableNode != null) {
            var treeViewDiv = tableNode.parentNode;

            while (treeViewDiv != null && (treeViewDiv.tagName != "DIV" || treeViewDiv.style.overflow != "auto"))
                treeViewDiv = treeViewDiv.parentNode;
            if (typeof treeViewDiv != "undefined" && treeViewDiv != null) {
                var x = anchor.offsetLeft;

                treeViewDiv.scrollLeft = x;
                treeViewDiv.scrollTop = tableNode.offsetTop - treeViewDiv.clientHeight + tableNode.offsetHeight;
            }
        }
    }
}
function FilterChoice(opt, ctrl, strVal, filterVal) {
    var i;
    var cOpt = 0;
    var bSelected = false;
    var strHtml = "";
    var strId = opt.id;
    var strName = opt.name;
    var strMatch = "";
    var strMatchVal = "";
    var strOptsAttr = ctrl.getAttribute("choices");
    var strOpts = strOptsAttr != null ? strOptsAttr : "";
    var rgopt = strOpts.split("|");
    var x = 0;
    var y = ctrl.offsetHeight;
    var strHiddenAttr = ctrl.getAttribute("optHid");
    var strHidden = strHiddenAttr != null ? strHiddenAttr : "";
    var iMac = rgopt.length - 1;
    var iMatch = -1;
    var unlimitedLength = false;
    var strSelectedLower = "";

    if (opt != null && opt.selectedIndex >= 0) {
        bSelected = true;
        strSelectedLower = opt.options[opt.selectedIndex].innerText;
    }
    for (i = 0; i < rgopt.length; i = i + 2) {
        var strOpt = rgopt[i];

        while (i < iMac - 1 && rgopt[i + 1].length == 0) {
            strOpt = strOpt + "|";
            i++;
            if (i < iMac - 1) {
                strOpt = strOpt + rgopt[i + 1];
            }
            i++;
        }
        var strValue = rgopt[i + 1];
        var strLowerOpt = strOpt.toLocaleLowerCase();
        var strLowerVal = strVal.toLocaleLowerCase();

        if (filterVal.length != 0)
            bSelected = true;
        if (strLowerOpt.indexOf(strLowerVal) == 0) {
            var strLowerFilterVal = filterVal.toLocaleLowerCase();

            if (strLowerFilterVal.length != 0 && strLowerOpt.indexOf(strLowerFilterVal) == 0 && strMatch.length == 0)
                bSelected = false;
            if (strLowerOpt.length > 20) {
                unlimitedLength = true;
            }
            if (!bSelected || strLowerOpt == strSelectedLower) {
                strHtml += "<option selected value=\"" + strValue + "\">" + STSHtmlEncode(strOpt) + "</option>";
                bSelected = true;
                strMatch = strOpt;
                strMatchVal = strValue;
                iMatch = i;
            }
            else {
                strHtml += "<option value=\"" + strValue + "\">" + STSHtmlEncode(strOpt) + "</option>";
            }
            cOpt++;
        }
    }
    var strHandler = " ondblclick=\"HandleOptDblClick()\" onkeydown=\"HandleOptKeyDown()\"";
    var strOptHtml = "";

    if (unlimitedLength) {
        strOptHtml = "<select tabIndex=\"-1\" ctrl=\"" + ctrl.id + "\" name=\"" + strName + "\" id = \"" + strId + "\"" + strHandler;
    }
    else {
        strOptHtml = "<select class=\"ms-lookuptypeindropdown\" tabIndex=\"-1\" ctrl=\"" + ctrl.id + "\" name=\"" + strName + "\" id = \"" + strId + "\"" + strHandler;
    }
    if (cOpt == 0) {
        strOptHtml += " style=\"display:none;position:absolute;z-index:2;left:" + String(x) + "px;top:" + String(y) + "px\" onfocusout=\"OptLoseFocus(this)\"></select>";
    }
    else {
        strOptHtml += " style=\"position:absolute;z-index:2;left:" + String(x) + "px;top:" + String(y) + "px\"" + " size=\"" + String(cOpt <= 8 ? cOpt : 8) + "\"" + (cOpt == 1 ? "multiple=\"true\"" : "") + " onfocusout=\"OptLoseFocus(this)\">" + strHtml + "</select>";
    }
    opt.outerHTML = strOptHtml;
    var hid = document.getElementById(strHidden);

    if (iMatch != 0 || rgopt[1] != "0")
        hid.value = strMatchVal;
    else
        hid.value = "0";
    if (iMatch != 0 || rgopt[1] != "0")
        return strMatch;
    else
        return "";
}
function _OptLoseFocus(opt) {
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);

    if (opt.selectedIndex >= 0)
        _SetCtrlFromOpt(ctrl, opt);
    opt.style.display = "none";
}
function SetCtrlMatch(ctrl, opt) {
    var optHidAttr = ctrl.getAttribute("optHid");
    var ctrl_optHid = optHidAttr != null ? optHidAttr : "";
    var hid = document.getElementById(ctrl_optHid);

    hid.value = opt.options[opt.selectedIndex].value;
    if (hid.value != "0")
        ctrl.match = opt.options[opt.selectedIndex].innerText;
    else
        ctrl.match = "";
}
function _SetCtrlFromOpt(ctrl, opt) {
    var optHidAttr = ctrl.getAttribute("optHid");
    var ctrl_optHid = optHidAttr != null ? optHidAttr : "";
    var hid = document.getElementById(ctrl_optHid);

    hid.value = opt.options[opt.selectedIndex].value;
    ctrl.value = opt.options[opt.selectedIndex].innerText;
    if (opt.options[opt.selectedIndex].value == 0)
        ctrl.match = "";
    else
        ctrl.match = ctrl.value;
    if (typeof ctrl.onValueSetFromPicker == "function")
        ctrl.onValueSetFromPicker();
}
function HandleOptDblClick() {
ULSw7Q:
    ;
    var opt = event.srcElement;
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);

    _SetCtrlFromOpt(ctrl, opt);
    SetCtrlMatch(ctrl, opt);
    opt.style.display = "none";
}
function HandleOptKeyDown() {
ULSw7Q:
    ;
    var opt = event.srcElement;
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);
    var key = event.keyCode;

    switch (key) {
    case 13:
    case 9:
        _SetCtrlFromOpt(ctrl, opt);
        event.returnValue = false;
        opt.style.display = "none";
        return;
    default:
        break;
    }
    return;
}
function CommitInlineEditChange(tr, cancel) {
    if (tr.cells.length > 0) {
        var c = tr.cells[0];

        if (c.width == "1%")
            eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href);
        else if (tr.cells.length > 1) {
            c = tr.cells[1];
            if (c.width == "1%")
                eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href);
        }
    }
}
function InlineEditNextTR(tr, nextTr, element, down) {
    var inlineEditString;

    if (nextTr != null) {
        _inlineEditString = tr.getAttribute("automode") + "#";
        var index = null;

        while (element != null && element.nodeType == 1 && element.getAttribute("automode") == null) {
            var siblingCount = 0;
            var sibling = element.previousSibling;

            while (sibling != null) {
                siblingCount++;
                sibling = sibling.previousSibling;
            }
            if (index == null)
                index = String(siblingCount);
            else
                index = String(siblingCount) + "," + index;
            element = element.parentNode;
        }
        _inlineEditString += index;
        var tab = nextTr;

        while (tab != null && tab.tagName != "TABLE")
            tab = tab.parentNode;
        if (tab != null && nextTr != null && nextTr.getAttribute("iid") != null) {
            inlineEditString = tab.getAttribute("inlineedit");
            if (inlineEditString != null) {
                inlineEditString = inlineEditString.replace('{@ID}', '{' + IdFromRow(nextTr) + '}');
                inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                eval(inlineEditString);
            }
        }
        else if (down == true && nextTr != null) {
            if (nextTr.cells.length > 0) {
                inlineEditString = null;
                var c = nextTr.cells[0];

                if (c.width == "1%") {
                    inlineEditString = c.firstChild.href;
                }
                else if (nextTr.cells.length > 1) {
                    c = nextTr.cells[1];
                    if (c.width == "1%")
                        inlineEditString = c.firstChild.href;
                }
                if (inlineEditString != null) {
                    inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                    eval(inlineEditString);
                }
            }
        }
    }
}
function HandleInlineEditKeyDown(ctrl) {
    var element = event.srcElement;

    if (element.tagName != "INPUT")
        return;
    var key = event.keyCode;
    var tr = ctrl.parentNode;
    var nextTr;

    switch (key) {
    case 27:
        CommitInlineEditChange(tr, true);
        break;
    case 38:
        nextTr = tr.previousSibling;
        InlineEditNextTR(tr, nextTr, element);
        break;
    case 13:
    case 40:
        nextTr = tr.nextSibling;
        InlineEditNextTR(tr, nextTr, element, true);
        break;
    default:
        break;
    }
    if (window.event != null)
        window.event.cancelBubble = true;
    else if (ctrl != null && typeof ctrl.stopPropagation != "undefined")
        ctrl.stopPropagation();
}
function EnsureSelectElement(ctrl, strId) {
    var select = document.getElementById(strId);

    if (select == null) {
        select = document.createElement("SELECT");
        ctrl.parentNode.appendChild(select);
        select.outerHTML = "<select id=\"" + strId + "\" ctrl=\"" + ctrl.id + "\" class=\"ms-lookuptypeindropdown\" name=\"" + strId + "\" style=\"display:none\" onfocusout=\"OptLoseFocus(this)\"></select>";
        FilterChoice(select, ctrl, ctrl.value, "");
    }
    else {
        select.parentNode.removeChild(select);
        ctrl.parentNode.appendChild(select);
    }
    return document.getElementById(strId);
}
function HandleKey() {
ULSw7Q:
    ;
    var key = event.keyCode;
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttr = ctrl.getAttribute("opt");
    var ctrl_opt = optAttr != null ? optAttr : "";
    var opt = EnsureSelectElement(ctrl, ctrl_opt);
    var bNeedMatch = false;
    var strLower;
    var strMatchLower;

    switch (key) {
    case 8:
        if (str.length > 0) {
            str = str.substr(0, str.length - 1);
        }
        bNeedMatch = true;
        break;
    case 16:
    case 17:
    case 18:
        return;
    case 9:
    case 16:
    case 17:
    case 18:
        return;
    case 13:
        strLower = ctrl.value.toLocaleLowerCase();
        var ctrl_match = typeof ctrl.match == "string" ? ctrl.match : "";

        strMatchLower = ctrl_match.toLocaleLowerCase();
        if (strMatchLower.indexOf(strLower) != 0)
            ctrl.match = FilterChoice(opt, ctrl, ctrl.value, "");
        if (opt.style.display != "none") {
            ctrl.value = ctrl.match;
            opt.style.display = "none";
            event.returnValue = false;
        }
        return;
    case 27:
        opt.style.display = "none";
        event.returnValue = false;
        return;
    case 38:
        if (opt.style.display != "none") {
            if (opt.selectedIndex > 0)
                opt.selectedIndex = opt.selectedIndex - 1;
            else
                opt.selectedIndex = opt.options.length - 1;
            SetCtrlMatch(ctrl, opt);
            event.returnValue = false;
        }
        return;
    case 40:
        if (opt.style.display != "none" && opt.selectedIndex < opt.options.length - 1) {
            opt.selectedIndex = opt.selectedIndex + 1;
            SetCtrlMatch(ctrl, opt);
            event.returnValue = false;
            return;
        }
        bNeedMatch = true;
        break;
    case 46:
        break;
    default:
        break;
    }
    if (bNeedMatch)
        ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function ShowDropdown(textboxId) {
    var ctrl = document.getElementById(textboxId);
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = EnsureSelectElement(ctrl, ctrl_opt);

    ctrl.match = FilterChoice(opt, ctrl, "", ctrl.value);
    ctrl.focus();
}
function HandleChar() {
ULSw7Q:
    ;
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);
    var key = event.keyCode;

    if (key == 13)
        return;
    str = str + (String.fromCharCode(key)).toLocaleLowerCase();
    ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function HandleLoseFocus() {
ULSw7Q:
    ;
    var ctrl = event.srcElement;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);

    if (opt != null && opt.style.display != "none" && typeof document.activeElement != "undefined" && document.activeElement != opt)
        _OptLoseFocus(opt);
}
function HandleChange() {
ULSw7Q:
    ;
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);

    ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function IsSafeHref(href) {
    return href.match(new RegExp("^http://", "i")) != null || href.match(new RegExp("^https://", "i")) != null || href.match(new RegExp("^ftp://", "i")) != null || href.match(new RegExp("^file://", "i")) != null || href.match(new RegExp("^mailto:", "i")) != null || href.match(new RegExp("^news:", "i")) != null || href.match(new RegExp("^pnm://", "i")) != null || href.match(new RegExp("^mms://", "i")) != null || href.match(new RegExp("^/", "i")) != null || href.match(new RegExp("^#", "i")) != null || href.match(new RegExp("^\\\\\\\\", "i")) != null;
}
function Discuss(strUrl) {
    if (browseris.ie5up && browseris.win32)
        window.parent.location.href = strUrl;
    else
        alert(Strings.STS.L_IE5upRequired_Text);
}
var g_AdditionalNavigateHierarchyQString;

function GetAdditionalNavigateHierarchyQString() {
ULSw7Q:
    ;
    return g_AdditionalNavigateHierarchyQString;
}
function SetAdditionalNavigateHierarchyQString(additionalQString) {
    g_AdditionalNavigateHierarchyQString = additionalQString;
}
function ProcessDefaultNavigateHierarchy(nodeDiv, dataSourceId, dataPath, url, listInContext, type, form, qsCore, submitPath) {
    if (typeof _spCustomNavigateHierarchy != "undefined") {
        _spCustomNavigateHierarchy(nodeDiv, dataSourceId, dataPath, url, listInContext, type);
    }
    else {
        if (listInContext == false) {
            top.location.href = url;
        }
        else {
            var par = document.createElement('INPUT');

            par.type = 'hidden';
            par.name = '_spTreeNodeClicked';
            par.value = dataPath;
            form.appendChild(par);
            var qs = "?RootFolder=" + escapeProperly(url) + qsCore + "&" + g_AdditionalNavigateHierarchyQString;

            _SubmitFormPost(submitPath + qs);
            return false;
        }
    }
    return undefined;
}
function ParseMultiColumnValue(fieldValue, delimiter, bIncludeEmpty) {
    var strSubColumn;
    var subColumnValues = [];

    if (delimiter == null)
        delimiter = ';#';
    var lead = delimiter.charCodeAt(0);
    var trail = delimiter.charCodeAt(1);

    if (fieldValue == null || fieldValue.length == 0)
        return subColumnValues;
    var strLead = delimiter.charAt(0);
    var strLeadLead = strLead + strLead;
    var escaped = new RegExp(strLeadLead, "g");
    var unescaped = delimiter.charAt(0);
    var startLocal = 0;

    if (fieldValue.substr(0, 2) == delimiter) {
        if (Boolean(bIncludeEmpty))
            subColumnValues.push('');
        startLocal = 2;
    }
    var end = startLocal;
    var bContainEscapedCharacters = false;
    var totalLength = fieldValue.length;

    while (end < totalLength) {
        var index = fieldValue.indexOf(strLead, end);

        if (index >= 0) {
            end = index;
            end++;
            if (fieldValue.charCodeAt(end) == trail) {
                if (end - 1 > startLocal) {
                    strSubColumn = fieldValue.substr(startLocal, end - startLocal - 1);
                    if (bContainEscapedCharacters)
                        strSubColumn = strSubColumn.replace(escaped, unescaped);
                    subColumnValues.push(strSubColumn);
                    bContainEscapedCharacters = false;
                }
                else {
                    subColumnValues.push('');
                }
                end++;
                startLocal = end;
                continue;
            }
            else if (fieldValue.charCodeAt(end) == lead) {
                end++;
                bContainEscapedCharacters = true;
                continue;
            }
            else {
                throw "ArgumentException";
            }
        }
        else {
            end = totalLength;
        }
    }
    if (end > startLocal) {
        strSubColumn = fieldValue.substr(startLocal, end - startLocal);
        if (bContainEscapedCharacters)
            strSubColumn = strSubColumn.replace(escaped, unescaped);
        subColumnValues.push(strSubColumn);
    }
    else if (Boolean(bIncludeEmpty))
        subColumnValues.push('');
    return subColumnValues;
}
function ConvertMultiColumnValueToString(subColumnValues, delimiter, bAddLeadingTailingDelimiter) {
    if (delimiter == null)
        delimiter = ";#";
    if (bAddLeadingTailingDelimiter == null)
        bAddLeadingTailingDelimiter = true;
    var strLead = delimiter.charAt(0);
    var strLeadLead = strLead + strLead;
    var escaped = new RegExp(delimiter.charAt(0), "g");
    var bHasValue = false;
    var sb = '';

    for (var i = 0; i < subColumnValues.length; i++) {
        var strSubColumn = subColumnValues[i];

        if (strSubColumn != null && strSubColumn.length > 0)
            strSubColumn = strSubColumn.replace(escaped, strLeadLead);
        if (strSubColumn != null && strSubColumn.length > 0)
            bHasValue = true;
        if (bAddLeadingTailingDelimiter || i != 0)
            sb += delimiter;
        sb += strSubColumn;
    }
    if (bHasValue) {
        if (bAddLeadingTailingDelimiter) {
            sb += delimiter;
        }
        return sb;
    }
    else
        return '';
}
var httpFolderTarget;
var httpFolderSource;
var httpFolderDiv;

function NavigateHttpFolderCore() {
ULSw7Q:
    ;
    var targetFrame;

    if (httpFolderDiv == null) {
        httpFolderDiv = document.createElement('DIV');
        document.body.appendChild(httpFolderDiv);
        httpFolderDiv.onreadystatechange = NavigateHttpFolderCore;
        if (typeof httpFolderDiv.addBehavior != "undefined")
            httpFolderDiv.addBehavior('#default#httpFolder');
    }
    if (typeof httpFolderDiv.readyState == "string" && httpFolderDiv.readyState == "complete") {
        httpFolderDiv.onreadystatechange = null;
        try {
            targetFrame = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
            if (targetFrame != null) {
                var targetDocument = typeof targetFrame.document != "undefined" ? targetFrame.document : null;

                if (targetDocument != null) {
                    var targetBody = typeof targetDocument.body != "undefined" ? targetDocument.body : null;

                    if (targetBody != null && typeof targetBody.innerText == "string") {
                        targetBody.innerText = Strings.STS.L_WebFoldersRequired_Text;
                    }
                }
            }
        }
        catch (e) { }
        var isOk = false;

        try {
            var ret = "";

            if (typeof httpFolderDiv.navigateFrame != "undefined") {
                ret = httpFolderDiv.navigateFrame(httpFolderSource, httpFolderTarget);
            }
            if (ret == "OK")
                isOk = true;
        }
        catch (e) { }
        if (!isOk && 0 == httpFolderSource.search(new RegExp("http://[a-zA-Z0-9\-\.]+(:80)?/"))) {
            var sUrl = (httpFolderSource.replace(/http:\/\/([a-zA-Z0-9\-\.]+)(:80)?[\/]/, "//$1/")).replace(/[\/]/g, "\\");

            try {
                targetFrame = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
                if (targetFrame != null) {
                    targetFrame.onload = null;
                    var targetDocument2 = typeof targetFrame.document != "undefined" ? targetFrame.document : null;

                    if (targetDocument2 != null) {
                        var targetLocation = typeof targetDocument2.location != "undefined" ? targetDocument2.location : null;

                        if (targetLocation != null && typeof targetLocation.href == "string") {
                            targetLocation.href = sUrl;
                            isOk = true;
                        }
                    }
                }
            }
            catch (e) { }
        }
        if (!isOk) {
            if (browseris.ie)
                alert(Strings.STS.L_WebFoldersError_IE_Text);
            else
                alert(Strings.STS.L_WebFoldersError_Text);
        }
    }
}
function NavigateHttpFolder(urlSrc, frameTarget) {
    if ('/' == urlSrc.charAt(0)) {
        urlSrc = window.location.protocol + "//" + window.location.host + urlSrc;
    }
    httpFolderSource = urlSrc;
    httpFolderTarget = frameTarget;
    NavigateHttpFolderCore();
}
function NavigateHttpFolderIfSupported(urlSrc, frameTarget) {
    if (frameTarget == "_blank") {
        if (SupportsNavigateHttpFolder()) {
            NavigateHttpFolder(urlSrc, frameTarget);
        }
        else {
            alert(Strings.STS.L_WebFoldersError_Text);
        }
    }
    else {
        alert(Strings.STS.L_NoExplorerView_Text);
    }
}
function AutoIndexForRelationshipsConfirmation() {
ULSw7Q:
    ;
    var message = Strings.STS.L_Lookup_AutoIndexForRelationships_Confirm_Text;

    return confirm(message);
}
function SetHomePage2(webRoot) {
    if (!window.confirm(SP.Res.confirmWelcomePage))
        return;
    var cctx = new SP.ClientContext(undefined);
    var rootFolder = (cctx.get_web()).get_rootFolder();
    var url = "";

    if (webRoot.length > 0) {
        url = _spPageContextInfo.serverRequestPath;
        url = unescapeProperly(url);
        url = url.substr(webRoot.length);
        if (url.indexOf("/") == 0)
            url = url.substr(1);
    }
    rootFolder.set_welcomePage(url);
    rootFolder.update();
    var noti = STSHtmlEncode(SP.Res.sending);
    var id = addNotification(noti, true);

    cctx.executeQueryAsync(function() {
    ULSw7Q:
        ;
        removeNotification(id);
        addNotification(STSHtmlEncode(SP.Res.pageIsSiteHomePage), false);
    }, null);
}
function SetHomePage(webRoot) {
    var fn = function() {
    ULSw7Q:
        ;
        SetHomePage2(webRoot);
    };

    if (typeof SP != 'undefined')
        EnsureScript("SP.js", typeof SP.ClientContext, fn);
    else
        EnsureScript("SP.js", typeof SP, fn);
}
function SendEmail(strItemUrl) {
    {
        var defd;

        try {
            defd = typeof SP.Ribbon.EMailLink.openMailerWithUrl;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "SP.Ribbon.EMailLink.openMailerWithUrl";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    SP.Ribbon.EMailLink.openMailerWithUrl(strItemUrl);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function TryCopyStringToClipboard(strText) {
    if (typeof window.clipboardData != "undefined" && typeof window.clipboardData.setData != "undefined") {
        window.clipboardData.setData("Text", strText);
    }
    else {
        if (typeof netscape != "undefined" && typeof Components != "undefined") {
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

            if (str == null)
                return false;
            str.data = strText;
            var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);

            if (trans == null || typeof trans.addDataFlavor == "undefined" || typeof trans.setTransferData == "undefined")
                return false;
            trans.addDataFlavor("text/unicode");
            trans.setTransferData("text/unicode", str, strText.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            var clip = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);

            if (clip == null || typeof clip.setData == "undefined")
                return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
    }
    return true;
}
function CopyStringToClipboard(str) {
    var bSuccess = false;

    try {
        bSuccess = TryCopyStringToClipboard(str);
    }
    catch (err) {
        bSuccess = false;
    }
    if (!bSuccess) {
        alert(SP.Res.clipboardNoAccess);
    }
}
function CopyPageAddressToClipboard() {
ULSw7Q:
    ;
    CopyStringToClipboard(window.location.href);
}
function showViewSelector(evt, elm, opt) {
    if (evt == null)
        evt = window.event;
    CancelEvent(evt);
    elm = EnsureValidPositioningElement(evt, elm);
    if (elm != null && elm.className == 'ms-csrlistview-viewselectormenu')
        elm = elm.parentNode;
    var fn = function() {
    ULSw7Q:
        ;
        SP.Application.UI.ViewSelectorMenuBuilder.showMenu(elm, opt);
    };
    var defd;

    try {
        defd = typeof SP.Application.UI.ViewSelectorMenuBuilder.showMenu;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function EnsureValidPositioningElement(evt, elm) {
    if (elm != null)
        return elm;
    var srcElm = GetEventSrcElement(evt);
    var parentElm = srcElm;

    while (parentElm != null && parentElm.tagName != "BODY") {
        if (parentElm.tagName == "TD" && (parentElm.className == "ms-viewselector" || parentElm.className == "ms-viewselectorhover"))
            return parentElm;
        parentElm = parentElm.parentNode;
    }
    return srcElm;
}
function EnsureCheckoutAndChangeLayoutModeToEdit(listId, itemId, bPersonalView) {
    var item;
    var checkoutCallback = function() {
    ULSw7Q:
        ;
        {
            var defd;

            try {
                defd = typeof browserScript.MSOLayout_ChangeLayoutMode;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "browserScript.MSOLayout_ChangeLayoutMode";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                    ULSw7Q:
                        ;
                        browserScript.MSOLayout_ChangeLayoutMode(bPersonalView);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    };
    var getItemCallback = function() {
    ULSw7Q:
        ;
        var user = item != null ? item.get_item("CheckoutUser") : null;

        if (!user) {
            if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
                var context2 = new SP.ClientContext(undefined);
                var list2 = ((context2.get_web()).get_lists()).getById(new SP.Guid(listId));

                item = list2.getItemById(itemId);
                (item.get_file()).checkOut();
                context2.executeQueryAsync(checkoutCallback, null);
            }
        }
        else {
            checkoutCallback();
        }
    };
    var fn = function() {
    ULSw7Q:
        ;
        var context = new SP.ClientContext(undefined);
        var list = ((context.get_web()).get_lists()).getById(new SP.Guid(listId));

        item = list.getItemById(itemId);
        context.load(item, "CheckoutUser");
        context.executeQueryAsync(getItemCallback, null);
    };
    var defd2;

    try {
        defd2 = typeof SP.ClientContext;
    }
    catch (e) {
        defd2 = "undefined";
    }
    EnsureScript("SP.js", defd2, fn);
}
function _ChangeLayoutMode(p1, p2) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOLayout_ChangeLayoutMode;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOLayout_ChangeLayoutMode";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOLayout_ChangeLayoutMode(p1, p2);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function OpenWebPartMenuFromLink(p1, p2, p3, p4) {
    OpenWebPartMenu(p1, p2, p3, p4, false);
}
function OpenWebPartMenu(p1, p2, p3, p4, p5) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOWebPartPage_OpenMenu;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOWebPartPage_OpenMenu";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOWebPartPage_OpenMenu(p1, p2, p3, p4, p5);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
    return true;
}
function UpdateWebPartMenuFocus(elem, elmClass, editClass) {
    if (elem != null)
        elem.className = elmClass;
    var child = null;

    if (elem != null && elem.childNodes != null) {
        child = elem.childNodes[0];
        if (child != null && child.tagName == "SPAN")
            child.className = editClass;
    }
}
function _WebPartMenuKeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, evt) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOMenu_KeyboardClick;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOMenu_KeyboardClick";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOMenu_KeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, evt);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function _ShowToolPane2Wrapper(p1, p2, p3) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOTlPn_ShowToolPane2Wrapper;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOTlPn_ShowToolPane2Wrapper";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOTlPn_ShowToolPane2Wrapper(p1, p2, p3);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function ChangeWebPartPageView(bPersonalView) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOLayout_ToggleView;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOLayout_ToggleView";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOLayout_ToggleView(bPersonalView);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function _SetupFixedWidthWebParts() {
ULSw7Q:
    ;
    {
        var defd;

        try {
            defd = typeof browserScript.MSOWebPartPage_SetupFixedWidthWebParts;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOWebPartPage_SetupFixedWidthWebParts";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    browserScript.MSOWebPartPage_SetupFixedWidthWebParts();
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function EnsureSelectionHandlerOnFocusDeferred(evt, cbx, ctxNum) {
    var tab = cbx;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    EnsureSelectionHandlerDeferred(evt, tab, ctxNum);
}
function EnsureSelectionHandlerDeferred(evt, tab, ctxNum) {
    var ctxCur = window["ctx" + String(ctxNum)];

    if (!FV4UI() || ctxCur == null) {
        tab.onmouseover = null;
        return;
    }
    if (ctxCur.BaseViewID == "MapView" && (IsStrNullOrEmpty(tab.className) || tab.className.indexOf("ms-mapviewtable") == -1))
        return;
    ctxInitItemState(ctxCur);
    var selectAll = tab.querySelector('.ms-selectall-span');

    if (selectAll != null) {
        $addHandler(selectAll, "keydown", function(e) {
            if (e.keyCode == Sys.UI.Key.space || e.keyCode == Sys.UI.Key.enter) {
                ClkElmt(selectAll);
                selectAll.focus();
                e.preventDefault();
            }
        });
        $addHandler(selectAll, "mousedown", function() {
        ULSw7Q:
            ;
            selectAll.style.outline = 'none';
        });
        $addHandler(selectAll, "mouseup", function() {
        ULSw7Q:
            ;
            selectAll.style.outline = '';
            selectAll.firstChild.focus();
        });
    }
    var i;
    var rows = tab.rows;

    for (i = 0; i < rows.length; i++) {
        var r = rows[i];

        if (HasCssClass(r, "ms-viewheadertr")) {
            var c = r.cells[0];

            if (c != null) {
                var cbx = (c.getElementsByTagName("INPUT"))[0];

                if (cbx != null) {
                    cbx.className = "s4-selectAllCbx";
                }
                else {
                    cbx = c.querySelector(".ms-selectall-span");
                }
                if (cbx != null) {
                    ctxCur.SelectAllCbx = cbx;
                    if (typeof cbx.onfocus != "undefined")
                        ctxCur.TableCbxFocusHandler = cbx.onfocus;
                    cbx.onfocus = null;
                }
            }
        }
        var iid = r.getAttribute("iid");

        if (iid != null) {
            var curSelected = false;

            if (ItemIsCurrentlySelected(ctxCur, iid, r)) {
                curSelected = true;
                ctxCur.CurrentSelectedItems++;
            }
            if (ItemIsCurrentlyVisible(r)) {
                ctxCur.TotalListItems++;
                ctxCur.LastSelectableRowIdx = i;
            }
            if (r.cells.length > 0) {
                c = r.cells[0];
                var itmCbx = c.querySelector(".s4-itm-cbx");

                if (itmCbx != null) {
                    if (!curSelected)
                        itmCbx.checked = false;
                    if (typeof itmCbx._setup == "undefined" || !Boolean(itmCbx._setup)) {
                        itmCbx._setup = true;
                        var tt = TooltipOfRow(r);

                        if (tt != null)
                            itmCbx.title = tt;
                        itmCbx.onblur = HideItemCbx;
                        itmCbx.onfocus = DisplayItemCbx;
                        itmCbx.onclick = ToggleItemRowSelection;
                        c.onclick = ToggleItemRowSelection;
                        if (itmCbx.nodeName == "DIV") {
                            $addHandler(c, "keydown", (function(tr, div) {
                                return function(e) {
                                    if (e.keyCode == Sys.UI.Key.space || e.keyCode == Sys.UI.Key.enter) {
                                        ToggleItemRowSelection(e, tr);
                                        div.focus();
                                    }
                                };
                            })(r, c));
                            $addHandler(c, "mousedown", (function(tc) {
                                return function() {
                                ULSw7Q:
                                    ;
                                    tc.style.outline = 'none';
                                };
                            })(c));
                            $addHandler(c, "mouseup", (function(tc) {
                                return function() {
                                ULSw7Q:
                                    ;
                                    tc.style.outline = '';
                                };
                            })(c));
                        }
                    }
                    if (r.getAttribute("automode") == null)
                        r.onclick = SingleItemSelect;
                }
                UpdateAutoMode(r);
                AddSpaceToEmptyTDs(r);
                AddBorderToLastCell(r);
            }
        }
    }
    ctxCur.TableMouseoverHandler = tab.onmouseover;
    tab.onmouseover = null;
    AddKeyDownEventHandler(tab, ctxNum);
}
function AddKeyDownEventHandler(tab, ctxNum) {
    if (tab.nodeName.toUpperCase() != "TABLE")
        return;
    var ctxCur = window["ctx" + String(ctxNum)];

    if (IsStrNullOrEmpty(tab.className) || ctxCur.BaseViewID == "MapView" && tab.className.indexOf("ms-mapviewtable") == -1 || ctxCur.BaseViewID != "MapView" && tab.className.indexOf("ms-listviewtable") == -1)
        return;
    if (tab.getAttribute("handleDeleteInit") == null) {
        tab.setAttribute("handleDeleteInit", "true");
        $addHandler(tab, "keydown", function(ei) {
        ULSw7Q:
            ;
            OnListViewKeyDown(ei, ctxNum);
        });
    }
}
function ItemIsSelectable(row) {
    if (row == null || !ItemHasiid(row) || !ItemIsCurrentlyVisible(row))
        return false;
    return true;
}
function ItemIsCurrentlyVisible(row) {
    if (row == null || row.parentNode == null)
        return false;
    if (GetCurrentEltStyle(row.parentNode, "display") == "none" || GetCurrentEltStyle(row, "display") == "none")
        return false;
    return true;
}
function ItemIsCurrentlySelected(ctxCur, iid, row) {
    if (ctxCur == null || !Boolean(iid))
        return false;
    var dictSel = GetSelectedItemsDict(ctxCur);

    if (dictSel == null || dictSel[iid] == null || row.className.indexOf("s4-itm-selected") < 0)
        return false;
    return true;
}
function ItemHasiid(row) {
    if (row == null || row.getAttribute("iid") == null)
        return false;
    return true;
}
function OnListViewKeyDown(ei, ctxNum) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null || ctxCur.inGridMode) {
        return;
    }
    var keyCode = ei.keyCode;
    var fShiftOrCtrlPressed = ei.shiftKey || ei.ctrlKey;

    if (IsCallOutOn()) {
        return;
    }
    switch (keyCode) {
    case Sys.UI.Key.del:
        HandleItemDelete(ei, ctxNum);
        break;
    case Sys.UI.Key.up:
        SelectNextRow(ctxNum, -1, fShiftOrCtrlPressed, ei);
        break;
    case Sys.UI.Key.down:
        SelectNextRow(ctxNum, +1, fShiftOrCtrlPressed, ei);
        break;
    case Sys.UI.Key.enter:
        if (IsEventTargetAnchor(ei)) {
            return;
        }
        if (ei.target != null && !IsStrNullOrEmpty(ei.target.className) && ei.target.className.indexOf("ms-lstItmLinkAnchor") >= 0) {
            OpenCallOutOrECB(ctxNum, ei);
        }
        else {
            ListItem_Open(ctxNum, ei);
        }
        break;
    default:
        break;
    }
}
function OpenCallOutOrECB(ctxNum, ei) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null)
        return true;
    var elmTarget = ei.target;
    var fIsDocLib = DoesListUseCallout(ctxCur);
    var elmTr = GetAncestor(elmTarget, "TR");
    var strID = IdFromRow(elmTr);

    if (IsStrNullOrEmpty(strID))
        return true;
    if (fIsDocLib) {
        ShowCalloutMenuForTr(elmTarget, ei, true);
    }
    else {
        ShowECBMenuForTr(elmTarget.parentNode, ei);
    }
    return true;
}
function ListItem_Open(ctxNum, ei) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null)
        return false;
    var trCurrentSelected = GetLastSelectedRow(ctxCur);

    if (trCurrentSelected == null)
        return false;
    if (ctxCur.ListSchema.IsDocLib) {
        OpenDocItem(ei, ctxCur, trCurrentSelected);
    }
    else {
        OpenListItem(trCurrentSelected, ctxNum);
    }
    return true;
}
function OpenDocItem(ei, ctxCur, trCurrentSelected) {
    var listItem = GetListItemDataFromTrInternal(ctxCur, trCurrentSelected);
    var elmTarget = trCurrentSelected;
    var elmEcbTd = GetEcbTdFromRow(trCurrentSelected);
    var elmECBDiv = GetEcbDivFromEcbTd(elmEcbTd);

    if (elmECBDiv != null) {
        elmTarget = elmECBDiv.querySelector("a.ms-draggable");
    }
    if (elmTarget == null) {
        elmTarget = trCurrentSelected;
    }
    var lstSchema = ctxCur.ListSchema;

    return DispEx(elmTarget, ei, "TRUE", "FALSE", listItem["File_x0020_Type.url"], listItem["File_x0020_Type.progid"], lstSchema.DefaultItemOpen, listItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapcon"], listItem["HTML_x0020_File_x0020_Type"], listItem["serverurl.progid"], Boolean(listItem["CheckoutUser"]) ? listItem["CheckoutUser"][0].id : "", lstSchema.Userid, lstSchema.ForceCheckout, listItem.IsCheckedoutToLocal, listItem.PermMask);
}
function OpenListItem(trCurrentSelected, ctxNum) {
    var elmOpenAnchor = trCurrentSelected.querySelector("a[class*=\"ms-listlink\"]");

    if (elmOpenAnchor == null)
        return;
    EditLink2(elmOpenAnchor, ctxNum);
}
function GetListItemDataFromTr(trCurrentSelected) {
    if (trCurrentSelected == null) {
        return null;
    }
    var ctxCur = GetListContextFromTr(trCurrentSelected);

    if (ctxCur == null) {
        return null;
    }
    return GetListItemDataFromTrInternal(ctxCur, trCurrentSelected);
}
function GetListItemDataFromTrInternal(ctxCur, trCurrentSelected) {
    if (ctxCur == null || trCurrentSelected == null) {
        return null;
    }
    var idSelected = IdFromRow(trCurrentSelected);

    return ListItemDataFromId(ctxCur, idSelected);
}
function GetListContextFromTr(trCurrentSelected) {
    if (trCurrentSelected == null) {
        return null;
    }
    var strIID = trCurrentSelected.getAttribute("iid");

    if (IsStrNullOrEmpty(strIID)) {
        return null;
    }
    var rgIds = strIID.split(',');

    if (rgIds.length <= 2) {
        return null;
    }
    return GetListContextFromContextNumber(rgIds[0]);
}
function GetListContextFromContextNumber(strCtxNum) {
    return window["ctx" + strCtxNum];
}
function ListItemDataFromId(ctxCur, idSelected) {
    if (ctxCur == null || idSelected == null || ctxCur.ListData == null) {
        return null;
    }
    var listData = ctxCur.ListData.Row;

    if (listData == null)
        return null;
    var cRows = listData.length;

    for (var i = 0; i < cRows; i++) {
        if (listData[i].ID === idSelected) {
            return listData[i];
        }
    }
    return null;
}
function SelectNextRow(ctxNum, iNext, fAddToSelection, evt) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));
    var trCurrentSelected = GetLastSelectedRow(ctxCur);
    var trNext = null;

    if (trCurrentSelected != null) {
        trNext = GetNextRow(trCurrentSelected, iNext);
        if (trNext != null) {
            var fRet;

            fRet = SingleItemSelectByElement(trNext, fAddToSelection);
            if (evt == null) {
                return fRet;
            }
            else {
                return CancelEvent(evt);
            }
        }
    }
    else {
        MakeDefaultSelectionForListView(ctxCur);
    }
    return true;
}
function GetLastSelectedRow(ctxCur) {
    var rgSelectedIIDs = ctxCur.dictSel;
    var strLastSelectedIID = "";
    var trLastSelected = null;

    if (ctxCur != null) {
        strLastSelectedIID = ctxCur.LastSelectedItemIID;
    }
    if (strLastSelectedIID != null && strLastSelectedIID.length > 0) {
        var strQS = "tr[iid=\"" + strLastSelectedIID + "\"]";

        trLastSelected = document.querySelector(strQS);
        if (trLastSelected != null && trLastSelected.getAttribute("automode") != null) {
            trLastSelected = null;
        }
    }
    return trLastSelected;
}
function GetIndexFromIID(ctxCur, strLastSelectedIID) {
    if (strLastSelectedIID == null)
        return -1;
    var strItmIDToFind = (strLastSelectedIID.split(','))[1];
    var cListItemsInCtx = 0;

    if (ctxCur != null && ctxCur.ListData != null && ctxCur.ListData.Row != null) {
        var rgItems = ctxCur.ListData.Row;

        cListItemsInCtx = rgItems.length;
        for (var i = 0; i < cListItemsInCtx; i++) {
            var strID = ctxCur.ListData.Row[i].ID;

            if (strID === strItmIDToFind) {
                return i;
            }
        }
    }
    return -1;
}
function GetLastSelectedRowIndex(ctxCur) {
    var strLastSelectedIID = ctxCur.LastSelectedItemIID;

    return GetIndexFromIID(ctxCur, strLastSelectedIID);
}
function GetTrFromIID(iid) {
    if (iid == null || iid.length == 0)
        return null;
    var strQS = "tr[iid=\"" + iid + "\"]";

    return document.querySelector(strQS);
}
function SelectRowByIID(iid, fAddToSelection) {
    var trToSelect = GetTrFromIID(iid);

    if (trToSelect != null) {
        SingleItemSelectByElement(trToSelect, fAddToSelection);
    }
}
function SelectRowByIndex(ctxCur, rowIndex, fAddToSelection) {
    var iid;

    if (ctxCur != null && ctxCur.ListData != null && ctxCur.ListData.Row != null && ctxCur.ListData.Row[rowIndex] != null) {
        iid = GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[rowIndex]);
        if (iid != null && iid.length > 0) {
            SelectRowByIID(iid, fAddToSelection);
        }
    }
}
function EnsureKeyBoardHandlersRegistered(ctxCur) {
    if (ctxCur == null) {
        return;
    }
    if (ctxCur.ListData == null || ctxCur.ListData.Row == null || ctxCur.ListData.Row[0] == null) {
        return;
    }
    var strFirstListIID = GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[0]);
    var elmTr = GetTrFromIID(strFirstListIID);

    if (elmTr == null) {
        return;
    }
    var elmTable = GetAncestor(elmTr, "TABLE");

    if (elmTable == null) {
        return;
    }
    AddKeyDownEventHandler(elmTable, (strFirstListIID.split(","))[0]);
}
function MakeDefaultSelectionForListView(ctxCur) {
    if (ctxCur == null) {
        return;
    }
    EnsureKeyBoardHandlersRegistered(ctxCur);
    if (ctxCur.ListData != null && ctxCur.ListData.Row != null && ctxCur.ListData.Row[0] != null) {
        var node = GetTrFromIID(GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[0]));

        if (node == null) {
            return;
        }
        while (node != null) {
            if (node.className.indexOf('s4-wpcell') >= 0 || node.className.indexOf('s4-wpActive') >= 0) {
                break;
            }
            node = node.parentNode;
        }
        if (node == null)
            return;
        EnsureScriptParams("ribbon", "SelectWp", node);
    }
    if (ctxCur.LastSelectedItemIID != null && ctxCur.LastSelectedItemIID.length > 0) {
        var trToSelect = GetTrFromIID(ctxCur.LastSelectedItemIID);

        if (trToSelect != null) {
            SingleItemSelectByElement(trToSelect, false);
            return;
        }
    }
    var iLastSelectedRowIndex = ctxCur.LastRowIndexSelected;

    if (iLastSelectedRowIndex == null) {
        iLastSelectedRowIndex = 0;
    }
    else {
        if (ctxCur.ListData != null && ctxCur.ListData.Row != null)
            var cListItems = ctxCur.ListData.Row.length;
        if (iLastSelectedRowIndex >= cListItems) {
            iLastSelectedRowIndex = cListItems == 0 ? -1 : cListItems - 1;
        }
    }
    ctxCur.LastRowIndexSelected = null;
    if (iLastSelectedRowIndex != -1) {
        SelectRowByIndex(ctxCur, iLastSelectedRowIndex, false);
    }
}
function GetNextRow(trCurrent, iNext) {
    var trNextRow = null;

    if (trCurrent != null && trCurrent.nodeName.toLowerCase() != "tr") {
        return null;
    }
    if (iNext == 1) {
        trNextRow = trCurrent.nextSibling;
    }
    else if (iNext == -1) {
        trNextRow = trCurrent.previousSibling;
    }
    if (trNextRow != null) {
        var strIID = trNextRow.getAttribute("iid");

        if (strIID != null && strIID.length > 0) {
            return trNextRow;
        }
        else {
            return GetNextRow(trNextRow, iNext);
        }
    }
    return trNextRow;
}
function HandleItemDelete(ei, ctxNum) {
    var ctxCur = window["ctx" + String(ctxNum)];
    var iLastSelectedRowIndex = GetLastSelectedRowIndex(ctxCur);

    if (iLastSelectedRowIndex == -1)
        iLastSelectedRowIndex = 0;
    ctxCur.LastRowIndexSelected = iLastSelectedRowIndex;
    {
        var defd;

        try {
            defd = typeof inplview.DeleteSelectedItems;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "inplview.DeleteSelectedItems";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    inplview.DeleteSelectedItems(ctxCur);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
    return false;
}
function GetItemRow2(obj) {
    var o = obj;

    while (o != null && o.nodeType == 1 && o.tagName != "BODY" && o.getAttribute("iid") == null) {
        if (typeof o.parentNode == "undefined" || o.parentNode == null || typeof o.parentNode.tagName == "undefined") {
            o = null;
            break;
        }
        o = o.parentNode;
    }
    if (o != null && o.nodeType == 1 && o.tagName == "TR")
        return o;
    return null;
}
function GetItemRow(evt) {
    if (evt == null)
        evt = window.event;
    var o = GetEventSrcElement(evt);

    return GetItemRow2(o);
}
function TooltipOfRow(tr) {
    var cs = tr.cells;
    var i = 0;

    for (i = 0; i < cs.length; i++) {
        var c = cs[i];

        if (HasCssClass(c, "ms-vb-title"))
            return (GetInnerText(c)).trim();
    }
    var iid = tr.getAttribute("iid");

    if (iid != null) {
        var r = iid.split(',');

        if (r.length > 2)
            return "" + r[1];
    }
    return null;
}
function AlertCheckOut() {
ULSw7Q:
    ;
    alert(Strings.STS.L_MustCheckout_Text);
}
function UpdateAutoModeImage(evt) {
    if (evt == null)
        evt = window.event;
    if (evt != null) {
        var aTag = evt.srcElement != null ? evt.srcElement : evt.currentTarget;

        if (aTag != null && aTag.tagName == "A") {
            if (evt.type == "blur")
                RemoveCssClassFromElement(aTag, "ms-inlineEditLink");
            else if (evt.type == "focus")
                AddCssClassToElement(aTag, "ms-inlineEditLink");
        }
    }
}
function AddAutoModeTag(c, tr, image) {
    var aTag = document.createElement("A");

    SetEvent("blur", UpdateAutoModeImage, aTag);
    SetEvent("focus", UpdateAutoModeImage, aTag);
    var tab = tr;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    if (c.getAttribute("requiresCheckout") != null)
        SetEvent("click", AlertCheckOut, aTag);
    else {
        var inlineEditString = tab.getAttribute("inlineedit");

        if (inlineEditString != null) {
            aTag.href = inlineEditString.replace('{@ID}', '{' + IdFromRow(tr) + '}');
        }
    }
    var img = document.createElement("IMG");

    img.className = "s4-itm-inlineedit";
    img.src = image;
    img.border = 0;
    img.alt = Strings.STS.L_Edit_Text;
    aTag.appendChild(img);
    c.appendChild(aTag);
}
function GetItemRowCbx(tr) {
    var cbx = null;

    if (tr != null && tr.cells != null && tr.cells.length > 0) {
        var c = tr.cells[0];

        cbx = c.querySelector(".s4-itm-cbx");
    }
    return cbx;
}
function GetEcbTdFromRow(tr) {
    var elmEcbTd = null;

    if (tr != null) {
        elmEcbTd = tr.querySelector("td[IsECB=\"TRUE\"]");
    }
    return elmEcbTd;
}
function GetEcbDivFromEcbTd(elmEcbTd) {
    return elmEcbTd == null ? null : elmEcbTd.querySelector("div.ms-vb.itx");
}
function GetEcbAffordanceDivFromRow(elmTr) {
    return elmTr == null ? null : elmTr.querySelector("div.ms-list-itemLink");
}
function UpdateAutoMode(tr) {
    if (tr != null) {
        var ctxCur = CtxFromRow(tr);

        if (ctxCur == null || typeof ctxCur.InlineEdit == "undefined" || !Boolean(ctxCur.InlineEdit))
            return;
        if (tr.cells != null && tr.cells.length > 0) {
            var c = tr.cells[0];

            if (c.innerHTML == "" && c.width == "1%") {
                if (c.getAttribute("requiresCheckout") == null)
                    c.onclick = ClickToEdit;
                AddAutoModeTag(c, tr, "/_layouts/15/images/edititem.gif?rev=23");
            }
            else if (tr.cells.length > 1) {
                c = tr.cells[1];
                if (c.innerHTML == "" && c.width == "1%") {
                    if (c.getAttribute("requiresCheckout") == null)
                        c.onclick = ClickToEdit;
                    AddAutoModeTag(c, tr, "/_layouts/15/images/edititem.gif?rev=23");
                }
            }
        }
    }
}
function ClickToEdit(evt) {
    var tr = GetItemRow(evt);

    if (tr != null && tr.cells.length > 1) {
        var c = tr.cells[1];
        var a = c.firstChild;

        if (a != null) {
            var img = a.firstChild;

            if (img != null && img.tagName == "IMG")
                img.src = "/_layouts/15/images/spinnyrefresh.gif?rev=23";
        }
    }
    if (window.event != null)
        window.event.cancelBubble = true;
    else if (evt != null)
        evt.stopPropagation();
}
function HideItemCbx(evt) {
    if (evt == null)
        evt = window.event;
    var tr = GetItemRow(evt);
    var itemCbx = GetItemRowCbx(tr);

    if (itemCbx != null && itemCbx.tagName == "INPUT") {
        itemCbx.style.top = '';
        itemCbx.style.position = '';
        itemCbx.onmouseout = null;
    }
}
function DisplayItemCbx(evt) {
    if (evt == null)
        evt = window.event;
    var tr = GetItemRow(evt);
    var itemCbx = GetItemRowCbx(tr);

    if (itemCbx != null && itemCbx.tagName == "INPUT") {
        itemCbx.style.top = '0px';
        itemCbx.style.position = 'relative';
        itemCbx.onmouseout = HideItemCbx;
    }
}
function Log(str) {
    var div = document.createElement("DIV");

    div.innerHTML = str;
    document.body.appendChild(div);
}
function _ToggleAllItems(evt, cbx, ctxNum) {
    if (evt == null)
        evt = window.event;
    MenuHtc_hide();
    ToggleAllItems2(cbx, ctxNum, cbx.checked);
    if (window.event != null)
        window.event.cancelBubble = true;
    else
        evt.stopPropagation();
    return false;
}
function ToggleAllItems2(cbx, ctxNum, f) {
    var ctxCur = window["ctx" + String(ctxNum)];

    if (ctxCur == null) {
        cbx.checked = false;
        return;
    }
    if (ctxCur.inGridMode) {
        SPGridToggleAllItems(ctxCur);
        return;
    }
    var tb = cbx;

    while (tb.tagName != "TABLE")
        tb = tb.parentNode;
    var rows = tb.rows;
    var totalItems = CountTotalItems(ctxCur);

    if (totalItems == 0) {
        cbx.checked = false;
        return;
    }
    if (f) {
        if (totalItems > g_MaximumSelectedItemsAllowed) {
            cbx.checked = false;
            alert(Strings.STS.L_BulkSelection_TooManyItems);
            return;
        }
        SelectAllItems(ctxCur, rows);
    }
    else
        DeselectAllItems(ctxCur, rows, true);
}
function SelectAllItems(ctxCur, rows) {
    if (ctxCur == null || rows == null)
        return;
    var i;
    var lastIdx = ctxCur.LastSelectableRowIdx;

    for (i = 1; i < lastIdx; i++) {
        var r = rows[i];
        var iid = r.getAttribute("iid");

        if (iid != null) {
            if (ItemIsCurrentlyVisible(r))
                ToggleItemRowSelection2(ctxCur, r, true, false, true);
        }
    }
    ToggleItemRowSelection2(ctxCur, rows[lastIdx], true, true, true);
}
function DeselectAllItems(ctxCur, rows, bNeedsRefresh) {
    if (ctxCur == null)
        return;
    var i;
    var lastIdx = ctxCur.LastSelectableRowIdx;
    var startIdx = 1;

    if (ctxCur.BaseViewID == "MapView") {
        startIdx = 0;
        var tab = document.getElementById("mapviewListTable_" + ctxCur.wpq);

        if (tab == null)
            return;
        rows = tab.rows;
        lastIdx = rows.length - 1;
    }
    if (rows == null)
        return;
    for (i = startIdx; i <= lastIdx; i++) {
        var r = rows[i];
        var iid = r.getAttribute("iid");

        if (iid != null && typeof iid == "string") {
            var rgiid = iid.split(",");

            SelectListItem(ctxCur, iid, rgiid, r, false, true);
        }
    }
    if (bNeedsRefresh)
        RefreshCommandUI();
}
function DeselectCollapsedGroup(ctxCur, tbody) {
    if (tbody == null)
        return;
    var rows = tbody.rows;
    var lastIdx = GetLastSelectableRowIdx(tbody, ItemHasiid);

    if (Boolean(rows) && lastIdx != -1) {
        for (var i = 0; i < lastIdx; i++) {
            var row = rows[i];

            if (ItemHasiid(row))
                ToggleItemRowSelection2(ctxCur, row, false, false, false);
        }
        ToggleItemRowSelection2(ctxCur, rows[lastIdx], false, true, false);
    }
}
function HandleSingleGroupByRow(ctxCur, child, fOpen) {
    if (ctxCur == null || child == null)
        return;
    var iid = child.getAttribute("iid");

    if (iid == null)
        return;
    if (!fOpen) {
        ctxCur.TotalListItems--;
        if (ItemIsCurrentlySelected(ctxCur, iid, child))
            ToggleItemRowSelection2(ctxCur, child, false, true, false);
    }
    else {
        ctxCur.TotalListItems++;
    }
}
function RefreshCommandUI() {
ULSw7Q:
    ;
    if (IsFullNameDefined('SP.Ribbon.PageManager')) {
        var instance = SP.Ribbon.PageManager.get_instance();

        if (instance != null)
            (instance.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
}
function _CommandUIExecuteCommand(commandId) {
    if (IsFullNameDefined('SP.Ribbon.PageManager')) {
        var instance = SP.Ribbon.PageManager.get_instance();

        if (instance != null)
            (instance.get_commandDispatcher()).executeCommand(commandId, null);
    }
}
function OnItemSelectionChanged(ctxArg, strGroupName, bUpdateRibbon) {
    var ctxCur = ctxArg;

    if (FV4UI()) {
        var _clvpsInited = function() {
        ULSw7Q:
            ;
            var args = [];

            if (typeof _ribbon != 'undefined' && _ribbon != null) {
                var clvp = ctxCur.clvp;

                if (clvp != null) {
                    if (bUpdateRibbon) {
                        clvp.EnsureEcbInfo(RefreshCommandUI, args, strGroupName);
                    }
                    else {
                        clvp.EnsureEcbInfo(null, null, strGroupName);
                    }
                }
            }
        };

        EnsureScript("inplview", typeof InitAllClvps, _clvpsInited);
    }
}
function IdFromRow(tr) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");

    return rgiid[1];
}
function CtxFromRow(tr) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");
    var ctxNum = rgiid[0];

    return window["ctx" + ctxNum];
}
function GroupNameFromRow(tr) {
    var parentNode = tr.parentNode;
    var str = parentNode.id;

    if (str == null || str == "") {
        var siblingNode = parentNode.previousSibling;

        if (siblingNode != null && siblingNode.childNodes.length == 0 && siblingNode.tagName == parentNode.tagName)
            str = siblingNode.id;
    }
    if (str == null || str == "")
        return null;
    var strGroupName = str.substr(4, str.length - 6);

    return strGroupName == "" ? null : strGroupName;
}
function GroupStringFromGroupName(strGroupName) {
    if (strGroupName == null || strGroupName == "")
        return null;
    var ele = document.getElementById("titl" + strGroupName + "_");

    if (ele == null)
        return null;
    var strGroupString = ele.getAttribute("groupString");

    return strGroupString == "" ? null : strGroupString;
}
var previousClickedItemRow;

function IsCallOutOn() {
ULSw7Q:
    ;
    return typeof CalloutManager === "object" && typeof CalloutManager.isAtLeastOneCalloutOn === "function" && CalloutManager.isAtLeastOneCalloutOn();
}
function SingleItemSelectByElement(tr, fAddToSelection) {
    return SingleItemSelectInternal(null, false, tr, fAddToSelection);
}
function MultiItemSelect(evt) {
    var tr = GetItemRow(evt);

    if (tr == null)
        return false;
    var ctxCur = CtxFromRow(tr);
    var striid = tr.getAttribute("iid");
    var indexClickedOn = GetIndexFromIID(ctxCur, striid);
    var strLastSelectedIID = ctxCur.LastSelectedItemIID;
    var indexLastSelected = GetLastSelectedRowIndex(ctxCur);
    var trLastSelectedRow = GetLastSelectedRow(ctxCur);
    var iStart = indexClickedOn < indexLastSelected ? indexClickedOn : indexLastSelected;
    var iEnd = indexClickedOn > indexLastSelected ? indexClickedOn : indexLastSelected;

    if (!evt.ctrlKey) {
        if (CountSelectedItems(ctxCur) > 0) {
            var tab = tr;

            while (tab.tagName != "TABLE") {
                tab = tab.parentNode;
            }
            var rows = tab.rows;

            for (var rowIdx = 0; rowIdx < rows.length; rowIdx++) {
                var r = rows[rowIdx];

                if (ItemIsSelectable(r))
                    ToggleItemRowSelection2(ctxCur, r, false, false, false);
            }
        }
    }
    for (var i = iStart; i <= iEnd; i++) {
        SelectRowByIndex(ctxCur, i, true);
    }
    FocusRow(ctxCur, strLastSelectedIID, trLastSelectedRow);
    return false;
}
function OpenCalloutAndSelectItem(launchPoint, curEvent, node, listItemID) {
    var elmTr = GetAncestor(launchPoint, "TR");

    SingleItemSelectInternal(curEvent, false, elmTr, false);
    OpenCallout(launchPoint, curEvent, node, listItemID);
}
function SingleItemSelect(evt) {
    if (evt == null)
        evt = window.event;
    var fShiftPressed = evt.shiftKey;
    var fCtrlPressed = evt.ctrlKey;

    if (fShiftPressed) {
        MultiItemSelect(evt);
        return false;
    }
    else {
        var fRet = SingleItemSelectInternal(evt, true, null, fCtrlPressed);

        return fCtrlPressed ? false : fRet;
    }
}
function SingleItemSelectInternal(evt, fInvokedByMouse, tr, fAddToSelection) {
    var fSelect = true;

    if (fInvokedByMouse) {
        var o = GetEventSrcElement(evt);

        if (o != null && ElementContainsLink(o))
            return undefined;
        if (IsCallOutOn()) {
            return true;
        }
        tr = GetItemRow(evt);
        if (clearECBMenu(o, tr == null ? null : CtxFromRow(tr))) {
            CancelEvent(evt);
            return false;
        }
    }
    if (tr == null) {
        return false;
    }
    var tab = tr;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    var rows = tab.rows;
    var ctxCur = CtxFromRow(tr);

    if (fInvokedByMouse) {
        var iid = tr.getAttribute("iid");
        var rgiid = iid.split(",");

        fSelect = !ItemIsCurrentlySelected(ctxCur, iid, tr);
        if (!fAddToSelection && CountSelectedItems(ctxCur) > 1) {
            fSelect = true;
        }
    }
    if (fSelect && !fAddToSelection) {
        if (CountSelectedItems(ctxCur) > 0) {
            var rowIdx;
            var rowsSelected = tab == null ? null : tab.querySelectorAll("tr[class*='s4-itm-selected']");
            var cSelected = rowsSelected == null ? 0 : rowsSelected.length;

            for (rowIdx = 0; rowIdx < cSelected; rowIdx++) {
                var r = rowsSelected[rowIdx];
                var iidRow = r.getAttribute("iid");

                if (ItemIsSelectable(r) && ItemIsCurrentlySelected(ctxCur, iidRow, r)) {
                    ToggleItemRowSelection2(ctxCur, r, false, false, false);
                }
            }
        }
    }
    ToggleItemRowSelection2(ctxCur, tr, fSelect, true, false);
    UpdateSelectAllCbx(ctxCur, fSelect);
    previousClickedItemRow = tr;
    if (fInvokedByMouse) {
        CancelEvent(evt);
    }
    return true;
}
function Point(xCoord, yCoord) {
    this.x = xCoord;
    this.y = yCoord;
}
function GetCellCoordinates(cell) {
    var cellIdx = 0;
    var cellIdy = 0;

    while (cell.tagName != "TD")
        cell = cell.parentNode;
    var curCell = cell.previousSibling;

    while (curCell != null) {
        cellIdx++;
        curCell = curCell.previousSibling;
    }
    curCell = cell.parentNode.previousSibling;
    while (curCell != null) {
        cellIdy++;
        curCell = curCell.previousSibling;
    }
    return new Point(cellIdx, cellIdy);
}
function ElementContainsLink(obj) {
    while (obj != null && obj.tagName != "TD") {
        if (obj.tagName == "A")
            return true;
        obj = obj.parentNode;
    }
    return false;
}
function clearECBMenu(src, ctxt) {
    if (g_menuHtc_lastMenu == null)
        return false;
    if (src != null) {
        var td = src;

        while (td != null && td.tagName != "TD")
            td = td.parentNode;
        var currentRow = GetItemRow2(td);

        MenuHtc_hide();
        var fIsClientSideRendered = ctxt != null && ctxt.IsClientRendering == true;

        if (!fIsClientSideRendered && tdHasEcbMenu(td))
            OnChildItem(td);
    }
    return true;
}
function tdHasEcbMenu(td) {
    var i;

    for (i = 0; i < td.childNodes.length; i++) {
        var child = td.childNodes[i];

        if (child.nodeType == 1 && child.tagName == "DIV") {
            var ctxVar = child.getAttribute("CTXName");

            if (ctxVar != null && ctxVar != "")
                return true;
        }
    }
    return false;
}
function ToggleItemRowSelection(evt, tr) {
    if (evt == null)
        evt = window.event;
    if (evt.keyCode == Sys.UI.Key.enter) {
        return false;
    }
    MenuHtc_hide();
    if (tr == null)
        tr = GetItemRow(evt);
    var ctxCur = CtxFromRow(tr);
    var iid = tr.getAttribute("iid");
    var fSelect = !ItemIsCurrentlySelected(ctxCur, iid, tr);

    if (fSelect && CountSelectedItems(ctxCur) == g_MaximumSelectedItemsAllowed) {
        var itemCbx = GetItemRowCbx(tr);

        itemCbx.checked = false;
        alert(Strings.STS.L_BulkSelection_TooManyItems);
        CancelEvent(evt);
        return true;
    }
    ToggleItemRowSelection2(ctxCur, tr, fSelect, true, false);
    UpdateSelectAllCbx(ctxCur, fSelect);
    previousClickedItemRow = tr;
    if (window.event != null)
        window.event.cancelBubble = true;
    else
        evt.stopPropagation();
    return true;
}
function ToggleItemRowSelection2(ctxCur, tr, fSelect, fUpdateRibbon, dontSetFocus) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");

    if (rgiid[1] == "")
        return false;
    SelectListItem(ctxCur, iid, rgiid, tr, fSelect, dontSetFocus);
    OnItemSelectionChanged(ctxCur, GroupNameFromRow(tr), fUpdateRibbon);
    return true;
}
function UpdateSelectAllCbx(ctxCur, fSelect) {
    if (ctxCur == null || ctxCur.SelectAllCbx == null)
        return;
    ctxCur.SelectAllCbx.checked = false;
    if (fSelect) {
        var total = CountTotalItems(ctxCur);
        var selectedLocal = CountSelectedItems(ctxCur);

        if (selectedLocal == total && selectedLocal > 0)
            ctxCur.SelectAllCbx.checked = true;
    }
}
function SelectListItem(ctxArg, iid, rgiid, tr, fSelect, dontSetFocus) {
    var cbx = GetItemRowCbx(tr);

    if (cbx == null) {
        return;
    }
    cbx.checked = fSelect;
    if (typeof ctxArg.dictSel == "undefined")
        ctxArg.dictSel = [];
    if (fSelect) {
        AddCssClassToElement(tr, "s4-itm-selected");
        if (ctxArg.dictSel[iid] == null) {
            ctxArg.CurrentSelectedItems++;
            ctxArg.dictSel[iid] = {
                id: rgiid[1],
                fsObjType: rgiid[2]
            };
        }
        if (cbx.nodeName.toUpperCase() != 'INPUT') {
            cbx.setAttribute('aria-checked', "true");
        }
    }
    else {
        RemoveCssClassFromElement(tr, "s4-itm-selected");
        if (ctxArg.dictSel[iid] != null) {
            delete ctxArg.dictSel[iid];
            ctxArg.CurrentSelectedItems--;
        }
        if (cbx.nodeName.toUpperCase() != 'INPUT') {
            cbx.setAttribute('aria-checked', "false");
        }
    }
    if (!dontSetFocus) {
        FocusRow(ctxArg, iid, tr);
    }
}
function FocusRow(ctxArg, iid, tr) {
    if (ctxArg == null)
        return;
    ctxArg.LastSelectedItemIID = iid;
    var cbx = GetItemRowCbx(tr);

    if (cbx != null) {
        if (ctxArg.RowFocusTimerID != null) {
            clearTimeout(ctxArg.RowFocusTimerID);
        }
        ctxArg.RowFocusTimerID = setTimeout(function() {
        ULSw7Q:
            ;
            SetFocusOnRowDelayed(ctxArg, cbx);
        }, 11);
    }
}
function SetFocusOnRowDelayed(ctxArg, cbx) {
    if (cbx == null || ctxArg == null)
        return;
    cbx.focus();
    if (browseris.webKit) {
        var inViewPort = ElementInViewportVertical(cbx, document.getElementById("s4-workspace"));

        if (inViewPort != g_InViewPort) {
            var fScrollTop = inViewPort == g_OutOfViewPortCloserToTop ? true : false;

            cbx.scrollIntoView(fScrollTop);
        }
    }
    ctxArg.RowFocusTimerID = null;
}
function CountTotalItems(ctxCur) {
    if (ctxCur.TotalListItems == null)
        ctxCur.TotalListItems = 0;
    return ctxCur.TotalListItems;
}
function CountSelectedItems(ctxCur) {
    if (ctxCur.CurrentSelectedItems == null)
        ctxCur.CurrentSelectedItems = 0;
    return ctxCur.CurrentSelectedItems;
}
function GetCtxRgiidFromIid(iid) {
    if (iid == null)
        return null;
    var rgiid = iid.split(",");

    if (rgiid.length != 3)
        return null;
    if (rgiid[1] == "")
        return null;
    var ctxNum = rgiid[0];
    var ctxT = window["ctx" + ctxNum];

    if (ctxT == null)
        return null;
    if (typeof ctxT.dictSel == "undefined")
        ctxT.dictSel = [];
    if (ctxT.CurrentSelectedItems == null)
        ctxT.CurrentSelectedItems = 0;
    return new CtxRgiid(ctxT, rgiid);
}
function GetCurrentCtx() {
ULSw7Q:
    ;
    var ele = document.getElementById("_wpSelected");

    if (ele == null)
        return null;
    var strId = ele.getAttribute("value");

    if (strId == null || strId == "")
        return null;
    strId = strId.substr(12);
    ele = document.getElementById(strId);
    if (ele == null)
        return null;
    var strViewId;

    if (typeof _spWebPartComponents != "undefined" && _spWebPartComponents != null && _spWebPartComponents[strId] && _spWebPartComponents[strId].storageId) {
        strViewId = _spWebPartComponents[strId].storageId;
    }
    else {
        strViewId = ele.getAttribute("WebPartID");
    }
    if (strViewId == null)
        return null;
    strViewId = strViewId.toUpperCase();
    var ctxNum = g_ViewIdToViewCounterMap["{" + strViewId + "}"];

    if (ctxNum == null)
        return null;
    var ctxT = window["ctx" + ctxNum];

    return ctxT;
}
function GetLastSelectableRowIdx(elt, fn) {
    if (elt == null || fn == null)
        return -1;
    var lastRowIdx;
    var rows = elt.rows;

    for (lastRowIdx = rows.length - 1; lastRowIdx >= 0; lastRowIdx--) {
        var row = rows[lastRowIdx];

        if (fn(row))
            return lastRowIdx;
    }
    return -1;
}
function UpdateCtxLastSelectableRow(ctxCur, tab) {
    if (ctxCur == null || tab == null)
        return;
    ctxCur.LastSelectableRowIdx = 0;
    var lastIdx = GetLastSelectableRowIdx(tab, ItemIsSelectable);

    if (lastIdx != -1)
        ctxCur.LastSelectableRowIdx = lastIdx;
}
function DeselectAllWPItems() {
ULSw7Q:
    ;
    var ctxCur = GetCurrentCtx();
    var clvp;

    if (ctxCur == null || (clvp = ctxCur.clvp) == null || clvp.tab == null)
        return;
    var tab = clvp.tab;
    var selectAllCbx = getSelectAllCbxFromTable(tab);

    if (selectAllCbx == null)
        return;
    selectAllCbx.checked = false;
    if (CountSelectedItems(ctxCur) > 0)
        DeselectAllItems(ctxCur, tab.rows, false);
}
function callOpenBreadcrumbMenu(evt, anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width) {
    if (evt == null)
        evt = window.event;
    evt.cancelBubble = true;
    if (typeof evt.stopPropagation != "undefined")
        evt.stopPropagation();
    var fn = function() {
    ULSw7Q:
        ;
        SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width);
    };
    var defd;

    try {
        defd = typeof SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function HasCssClass(e, c, fRemove) {
    var cn = e.className;

    if (cn == null)
        return false;
    var rg = cn.split(" ");
    var i;

    for (i = 0; i < rg.length; i++) {
        if (rg[i] == c) {
            if (fRemove) {
                rg.splice(i, 1);
                e.className = rg.join(" ");
            }
            return true;
        }
    }
    return false;
}
function AddSpaceToEmptyTDs(tr) {
    var i;

    if (browseris.ie7down && tr != null) {
        if (tr.getAttribute("addEmptySpace") == null)
            tr.setAttribute("addEmptySpace", "true");
        else
            return;
        for (i = 0; i < tr.childNodes.length; i++) {
            var child = tr.childNodes[i];

            if (child.nodeType == 1 && child.tagName == "TD" && child.width != "1%") {
                if (child.innerHTML == "")
                    child.innerHTML = "&#8203;";
                else if (child.innerText == "") {
                    while (child != null && child.nodeType == 1 && child.innerHTML != "") {
                        child = child.firstChild;
                    }
                    if (child != null && child.nodeType == 1 && child.innerHTML == "" && (child.tagName == "SPAN" || child.tagName == "DIV" || child.tagName == "NOBR"))
                        child.innerHTML = "&#8203;";
                }
            }
        }
    }
}
function AddBorderToLastCell(r) {
    if (r.getAttribute("setEdgeBorder") != null)
        return;
    var cells = r.cells;

    if (cells != null && cells.length > 0) {
        if (browseris.ie7down)
            cells[0].className += "";
        var cell = cells[cells.length - 1];

        if (cell != null) {
            if (cell.className != "")
                cell.className += " ms-vb-lastCell";
            else
                cell.className = "ms-vb-lastCell";
        }
    }
    r.setAttribute("setEdgeBorder", "true");
}
function AddCssClassToElement(e, c) {
    var cn = e.className;

    if (cn != null) {
        if (!HasCssClass(e, c))
            e.className = e.className + " " + c;
    }
    else {
        e.className = c;
    }
}
function RemoveCssClassFromElement(e, c) {
    HasCssClass(e, c, true);
}
function AddGallery_TypeOf(value) {
    if (value != null) {
        var valueType = typeof value;

        if (valueType == 'object') {
            if (valueType.constructor != null) {
                var constructorAsString = value.constructor.toString();
                var firstSpace = constructorAsString.indexOf(' ');
                var firstParen = constructorAsString.indexOf('(');
                var typeName = constructorAsString.substr(firstSpace + 1, firstParen - firstSpace - 1);

                return typeName;
            }
        }
        return valueType;
    }
    return null;
}
function IsLanguageSupportedInSilverlight(language) {
    if (language == 1025 || language == 1037 || language == 1054 || language == 1081) {
        return false;
    }
    return true;
}
function IsSilverlightInstalled(version) {
    if (typeof version == "undefined")
        version = null;
    var isVersionSupported = false;
    var container = null;

    try {
        var control = null;
        var tryNS = false;

        if (window.ActiveXObject != null) {
            try {
                control = new ActiveXObject('AgControl.AgControl');
                if (version === null) {
                    isVersionSupported = true;
                }
                else if (typeof control.IsVersionSupported != "undefined" && control.IsVersionSupported(version)) {
                    isVersionSupported = true;
                }
                control = null;
            }
            catch (e) {
                tryNS = true;
            }
        }
        else {
            tryNS = true;
        }
        if (tryNS) {
            var plugin = typeof navigator.plugins != "undefined" ? navigator.plugins["Silverlight Plug-In"] : null;

            if (plugin != null) {
                if (version === null) {
                    isVersionSupported = true;
                }
                else {
                    var actualVer = typeof plugin.description == "string" ? plugin.description : "";

                    if (actualVer === "1.0.30226.2")
                        actualVer = "2.0.30226.2";
                    var actualVerArray = actualVer.split(".");

                    while (actualVerArray.length > 3) {
                        actualVerArray.pop();
                    }
                    while (actualVerArray.length < 4) {
                        actualVerArray.push(0);
                    }
                    var reqVerArray = version.split(".");

                    while (reqVerArray.length > 4) {
                        reqVerArray.pop();
                    }
                    var requiredVersionPart;
                    var actualVersionPart;
                    var index = 0;

                    do {
                        requiredVersionPart = parseInt(reqVerArray[index]);
                        actualVersionPart = parseInt(actualVerArray[index]);
                        index++;
                    } while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);
                    if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart)) {
                        isVersionSupported = true;
                    }
                }
            }
        }
    }
    catch (e) {
        isVersionSupported = false;
    }
    return isVersionSupported;
}
function IsAddGalleryProviderEnabled(rooturl, providername) {
    var req;
    var ret = true;

    try {
        if (window.XMLHttpRequest != null) {
            req = new XMLHttpRequest();
            req.open("HEAD", rooturl + providername + ".deny.xml", false);
            req.send();
            if (req.status == 200) {
                ret = false;
            }
        }
    }
    catch (e) { }
    return ret;
}
function SilverlightBasedCreateHandler(scope) {
    var curtime = new Date();
    var pageurl;
    var sitecollectionurl;
    var siteurl;
    var serverLanguage;
    var currentLanguage;

    if (typeof _spPageContextInfo != "undefined") {
        if (_spPageContextInfo.siteServerRelativeUrl != null) {
            sitecollectionurl = _spPageContextInfo.siteServerRelativeUrl;
            if (sitecollectionurl.charAt(sitecollectionurl.length - 1) != "/") {
                sitecollectionurl = sitecollectionurl + "/";
            }
        }
        else {
            return true;
        }
        if (_spPageContextInfo.webServerRelativeUrl != null) {
            siteurl = _spPageContextInfo.webServerRelativeUrl;
            if (siteurl.charAt(siteurl.length - 1) != "/") {
                siteurl = siteurl + "/";
            }
            pageurl = siteurl + "_layouts/15/AddGallery.aspx";
        }
        else {
            return true;
        }
        if (Boolean(_spPageContextInfo.webLanguage)) {
            serverLanguage = _spPageContextInfo.webLanguage;
        }
        else {
            return true;
        }
        if (Boolean(_spPageContextInfo.currentLanguage)) {
            currentLanguage = _spPageContextInfo.currentLanguage;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
    if (FV4UI() && IsSilverlightInstalled('3.0.40624.0') && IsLanguageSupportedInSilverlight(serverLanguage) && IsLanguageSupportedInSilverlight(currentLanguage)) {
        if (scope == null) {
            scope = 'All';
        }
        if (AddGallery_TypeOf(scope) != 'string') {
            return true;
        }
        scope = scope.toLowerCase();
        if (scope == 'page' || scope == 'publishingpage') {
            return true;
        }
        var providerDetails = [];

        providerDetails = scope.split(':');
        if (providerDetails.length == 2 && providerDetails[0] == 'provider') {
            if (!IsAddGalleryProviderEnabled(sitecollectionurl + "_layouts/15/AddGalleryProviders/", providerDetails[1])) {
                return true;
            }
        }
        var dialogClosedCallback = function(result, args) {
        ULSw7Q:
            ;
            if (FV4UI()) {
                if (Boolean(result)) {
                    if (Boolean(args)) {
                        window.location = args;
                    }
                    else {
                        window.location.reload();
                    }
                }
            }
            else {
                var stringResult = typeof result == "string" ? result : null;

                if (stringResult != null && stringResult != "") {
                    window.location.href = stringResult;
                }
                else {
                    window.location.reload();
                }
            }
        };
        var showDialogCallback = function() {
        ULSw7Q:
            ;
            var args = {
                scope: scope,
                currentWeb: siteurl,
                currentSiteCollection: sitecollectionurl,
                clickDateTime: curtime
            };
            var windowWidth = scope == 'page' ? 660 : 1012;
            var windowHeight = scope == 'page' ? 360 : 600;

            if (FV4UI()) {
                var options = {
                    width: windowWidth,
                    height: windowHeight,
                    resizable: true,
                    status: false,
                    menubar: false,
                    help: false,
                    url: pageurl,
                    dialogReturnValueCallback: dialogClosedCallback,
                    args: args
                };
                var dialog = SP.UI.ModalDialog.showModalDialog(options);
            }
            else {
                var features;

                if (window.showModalDialog != null) {
                    features = "dialogWidth:" + String(windowWidth) + "px;dialogHeight:" + String(windowHeight) + "px;resizable:yes;status:no;menubar:no;help:no";
                }
                else {
                    features = "width=" + String(windowWidth) + ",height=" + String(windowHeight) + ",resizable=yes,status=no,menubar=no,help=no";
                }
                var result = commonShowModalDialog(pageurl, features, dialogClosedCallback, args);
            }
        };
        var defined;

        try {
            defined = typeof SP.UI.ModalDialog.showModalDialog;
        }
        catch (e) {
            defined = 'undefined';
        }
        EnsureScript('SP.UI.Dialog.js', defined, showDialogCallback);
        return false;
    }
    return true;
}
function LaunchCreateHandler(scope) {
    if (typeof __CreateHandler != "undefined" && __CreateHandler != null) {
        var result = __CreateHandler(scope);

        return result;
    }
    else {
        try {
            return SilverlightBasedCreateHandler(scope);
        }
        catch (e) {
            return true;
        }
    }
}
var isdlg;

function QstringStruct(strQuery) {
    if (strQuery == null) {
        strQuery = "";
    }
    if (strQuery.indexOf("?") == 0) {
        strQuery = strQuery.substring(1);
    }
    this.nonFilterParams = new Object();
    this.filterParams = new Object();
    var params = strQuery.split("&");
    var i;

    for (i = 0; i < params.length; i++) {
        var param = params[i];
        var keyval = param.split("=");

        if (keyval.length == 2) {
            if (keyval[0].search("^Filter") != -1) {
                var fieldNumber = keyval[0].match(new RegExp("[0-9]*$"));
                var filter;

                if (typeof this.filterParams[fieldNumber] != "undefined") {
                    filter = this.filterParams[fieldNumber];
                }
                else {
                    filter = new Object();
                    this.filterParams[fieldNumber] = filter;
                }
                var fieldName = keyval[0].match(new RegExp("^Filter[^0-9]*"));

                filter[fieldName] = keyval[1];
            }
            else {
                this.nonFilterParams[keyval[0]] = keyval[1];
            }
        }
    }
}
function QstringStructToString() {
ULSw7Q:
    ;
    var output = this.toArray();

    return "?" + output.join("&");
}
function QstringStructToArray() {
ULSw7Q:
    ;
    var output = [];
    var key;
    var keyValuePair;
    var filterIdx = 1;
    var filterParams_length = typeof this.filterParams.length == "number" ? this.filterParams.length : 0;

    for (key in this.filterParams) {
        var filter = this.filterParams[key];

        for (key in filter) {
            keyValuePair = [];
            keyValuePair.push(key);
            keyValuePair.push(filterIdx);
            keyValuePair.push("=");
            keyValuePair.push(filter[key]);
            output.push(keyValuePair.join(""));
        }
        filterIdx++;
    }
    for (key in this.nonFilterParams) {
        keyValuePair = [];
        keyValuePair.push(key);
        keyValuePair.push("=");
        keyValuePair.push(this.nonFilterParams[key]);
        output.push(keyValuePair.join(""));
    }
    return output;
}
function Diff() {
}
function ReconcileQstringFilters(strUrl1, strUrl2) {
    var qUrls = [];

    qUrls.push(new QstringStruct(strUrl1));
    qUrls.push(new QstringStruct(strUrl2));
    var output = [];
    var i, j;
    var key;
    var keyValuePair;

    for (i = 0; i < qUrls.length; i++) {
        for (key in qUrls[i].nonFilterParams) {
            if (i == 0 || typeof qUrls[0].nonFilterParams[key] == 'undefined' && i == 1) {
                keyValuePair = [];
                keyValuePair.push(key);
                keyValuePair.push("=");
                keyValuePair.push(qUrls[i].nonFilterParams[key]);
                output.push(keyValuePair.join(""));
            }
        }
    }
    var filterIdx = 1;
    var trackEachFilterFieldName = new Object();

    for (i = 0; i < qUrls.length; i++) {
        for (j in qUrls[i].filterParams) {
            var filter = qUrls[i].filterParams[j];
            var filter_FilterField = typeof filter.FilterField == "string" ? filter.FilterField : null;

            if (filter_FilterField == null)
                filter_FilterField = typeof filter.FilterFields == "string" ? filter.FilterFields : null;
            if (filter_FilterField != null && typeof trackEachFilterFieldName[filter_FilterField] == 'undefined') {
                for (key in filter) {
                    keyValuePair = [];
                    keyValuePair.push(key);
                    keyValuePair.push(filterIdx);
                    keyValuePair.push("=");
                    keyValuePair.push(filter[key]);
                    output.push(keyValuePair.join(""));
                }
                filterIdx++;
                trackEachFilterFieldName[filter.FilterField] = filter;
            }
        }
    }
    return output.join("&");
}
function PageActionClick(elem) {
ULSw7Q:
    ;
    EnsureScript("ribbon", TypeofFullName("SP.Ribbon.PageStateActionButton"), function() {
    ULSw7Q:
        ;
        SP.Ribbon.PageStateActionButton.sendCommand();
    });
}
function ShowWebPartAdder(zoneId) {
    LoadWPAdderOnDemand();
    ExecuteOrDelayUntilEventNotified(function() {
    ULSw7Q:
        ;
        var adder = window.WPAdder;

        if (adder != null) {
            adder._showCategoryColumn(true);
            adder._setZone(zoneId);
            adder.show();
        }
    }, "_spEventWebPartAdderReady");
}
function GenerateXMLArray(jsArray, itemTag) {
    var buffer = [];

    if (jsArray != null) {
        var beginTag = "<" + itemTag + ">";
        var endTag = "</" + itemTag + ">";

        for (var itm in jsArray) {
            buffer.push(beginTag);
            buffer.push(jsArray[itm]);
            buffer.push(endTag);
        }
    }
    return buffer.join("");
}
function GetAncestor(elem, tag) {
    while (elem != null && elem.tagName != tag) {
        elem = elem.parentNode;
    }
    return elem;
}
function GetAncestorByTagNames(elem, tagNames) {
    if (elem == null)
        return null;
    var ancestor = elem.parentNode;

    while (ancestor != null) {
        if (Array.contains(tagNames, ancestor.tagName))
            break;
        ancestor = ancestor.parentNode;
    }
    return ancestor;
}
function StURLNormalize(stURL) {
    if (stURL.substr(0, 2) == "\\\\" || stURL.substr(0, 2) == "\/\/")
        stURL = "file:" + stURL;
    if (stURL.substr(0, 5) == "file:")
        stURL = stURL.replace(/\\/g, "\/");
    return stURL;
}
function QuickLaunchInitDroppable() {
ULSw7Q:
    ;
    if (Boolean(g_QuickLaunchControlIds)) {
        var droppableItems = [];

        for (var i = 0; i < g_QuickLaunchControlIds.length; i++) {
            var qlId = g_QuickLaunchControlIds[i];
            var qlElement = document.getElementById(qlId);

            if (Boolean(qlElement)) {
                var dropNodes = qlElement.querySelectorAll(".ms-quicklaunch-dropNode");

                if (Boolean(dropNodes)) {
                    for (var j = 0; j < dropNodes.length; j++) {
                        var dropNode = dropNodes[j];

                        droppableItems.push(dropNode);
                    }
                }
            }
        }
        if (droppableItems.length > 0) {
            EnsureScriptParams('DragDrop.js', "InitMenuItemAsDroppable", droppableItems);
        }
    }
}
var g_listItemCache;

function GetListItemByIID(iid) {
    if (typeof g_listItemCache[iid] !== "undefined")
        return g_listItemCache[iid];
    var ctxRgiid = GetCtxRgiidFromIid(iid);
    var ctxT = ctxRgiid.ctx;
    var listItemID = ctxRgiid.rgiid[1];

    if (typeof ctxT === 'undefined' || ctxT === null || typeof ctxT.ListData === 'undefined' || ctxT.ListData === null || typeof ctxT.ListData.Row === 'undefined' || ctxT.ListData.Row === null) {
        throw "Error: ctx ListData could not be found";
    }
    for (var i = 0; i < ctxT.ListData.Row.length; i++) {
        if (ctxT.ListData.Row[i].ID === listItemID) {
            return g_listItemCache[iid] = ctxT.ListData.Row[i];
        }
    }
    return g_listItemCache[iid] = null;
}
function FixRibbonAndPageLayout(ribbonMinimized) {
ULSw7Q:
    ;
    var ribbonElement = GetCachedElement("s4-ribbonrow");

    if (Boolean(ribbonElement)) {
        ribbonElement.className = ribbonElement.className.replace(RegExp("s4-ribbonrowhidetitle"), "");
        var titleElement = GetCachedElement("s4-titlerow");
        var bodyElement = document.body;

        if (Boolean(titleElement)) {
            titleElement.className = titleElement.className.replace(RegExp("s4-titlerowhidetitle"), "");
            if (ribbonMinimized) {
                titleElement.style.display = "block";
            }
            else {
                titleElement.style.display = "none";
            }
        }
        var webPartAdderElement = ribbonElement.querySelector(".ms-core-webpartadder");

        if (Boolean(webPartAdderElement)) {
            if (GetCurrentEltStyle(webPartAdderElement, "position") == "absolute") {
                var ribbonHeaderElement = document.getElementById("Ribbon");

                if (Boolean(ribbonHeaderElement)) {
                    var bottomOfInterestingElement;

                    if (ribbonMinimized) {
                        bottomOfInterestingElement = AbsTop(ribbonHeaderElement) + ribbonHeaderElement.offsetHeight;
                    }
                    else {
                        var ribbonTabBodyElement = ribbonHeaderElement.querySelector(".ms-cui-tabContainer");

                        if (Boolean(ribbonTabBodyElement)) {
                            bottomOfInterestingElement = AbsTop(ribbonTabBodyElement) + ribbonTabBodyElement.offsetHeight;
                        }
                        else {
                            bottomOfInterestingElement = AbsTop(ribbonHeaderElement) + ribbonHeaderElement.offsetHeight;
                        }
                    }
                    bottomOfInterestingElement -= AbsTop(ribbonElement);
                    webPartAdderElement.style.top = bottomOfInterestingElement.toString() + "px";
                }
            }
        }
    }
    var wasInited = g_spribbon.isInited;

    g_spribbon.isInited = true;
    var lastState = g_spribbon.isMinimized;

    g_spribbon.isMinimized = ribbonMinimized;
    if (lastState != ribbonMinimized || !wasInited)
        FixRibbonAndWorkspaceDimensions();
}
var g_fRibbonAnimationEnabled;
var g_fSkipAnimation;
var g_fSkipNextTabExpandAnimation;

function PrepareRibbonForAnimation(ribbonMinimized, fPreTabSwitch) {
    g_fRibbonAnimationEnabled = (ajaxNavigate.get_search()).indexOf("IsDlg=1") == -1 && SPAnimation.Settings.IsAnimationEnabled();
    if (!g_fRibbonAnimationEnabled)
        return;
    var ribbonContainer = document.getElementById("Ribbon");
    var ribbonTabArea = ribbonContainer.childNodes[2];
    var tabHeight = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);

    if (ribbonMinimized) {
        if (ribbonTabArea != null) {
            var ribbonTabClone = SPAnimationUtility.BasicAnimator.CloneElement(ribbonTabArea, false, true, false, false);
            var ribbonTabBody = ribbonTabClone.firstChild;

            SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(ribbonTabBody, 0, 0, null, null);
            SPAnimationUtility.BasicAnimator.Move(ribbonTabBody, 0, -tabHeight, function() {
            ULSw7Q:
                ;
                if (ribbonTabClone.parentNode != null)
                    ribbonTabClone.parentNode.removeChild(ribbonTabClone);
                ribbonTabArea.style.visibility = "";
            }, null);
        }
    }
    else {
        if (g_fSkipNextTabExpandAnimation) {
            g_fSkipAnimation = true;
            g_fSkipNextTabExpandAnimation = false;
        }
        else
            g_fSkipAnimation = fPreTabSwitch && Boolean(ribbonTabArea);
        if (!g_fSkipAnimation && ribbonContainer.className.indexOf("ms-cui-animatingRibbon") == -1)
            CSSUtil.AddClass(ribbonContainer, "ms-cui-animatingRibbon");
    }
}
function AnimateRibbonMinimizedChanged(ribbonMinimized) {
    if (!g_fRibbonAnimationEnabled || ribbonMinimized) {
        FixRibbonAndPageLayout(ribbonMinimized);
    }
    else if (!g_fSkipAnimation) {
        var ribbonContainer = document.getElementById("Ribbon");
        var ribbonTabArea = ribbonContainer.childNodes[2];
        var tabHeight = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);

        PrepareRibbonForAnimation(ribbonMinimized, false);
        if (ribbonTabArea != null) {
            var ribbonTabBody = ribbonTabArea.firstChild;

            ribbonTabBody.style.top = String(-tabHeight) + "px";
            fRightToLeft ? (ribbonTabBody.style.right = "0px") : (ribbonTabBody.style.left = "0px");
            SPAnimationUtility.BasicAnimator.Move(ribbonTabBody, 0, 0, function() {
            ULSw7Q:
                ;
                var currentTabContainer = (document.getElementById("Ribbon")).childNodes[2];

                if (currentTabContainer != null) {
                    var currentTabBody = currentTabContainer.firstChild;

                    if (currentTabBody != null && ribbonTabBody.id == "Ribbon.BlankTab" && currentTabBody.id == "Ribbon.BlankTab")
                        g_fSkipNextTabExpandAnimation = true;
                }
                if (ribbonTabBody.parentNode == null || ribbonTabBody.parentNode.parentNode == null || ribbonTabBody.parentNode.parentNode.nodeType != 1)
                    ribbonMinimized = true;
                CSSUtil.RemoveClass(ribbonContainer, "ms-cui-animatingRibbon");
                FixRibbonAndPageLayout(ribbonMinimized);
            }, null);
        }
    }
}
function UpdateAnimationUserControl(bSetFocus) {
    var turnOnAnimation = document.getElementById("TurnOnAnimation");
    var turnOffAnimation = document.getElementById("TurnOffAnimation");
    var linkOn = document.getElementById("linkTurnOnAnimation");
    var linkOff = document.getElementById("linkTurnOffAnimation");

    if (SPAnimation.Settings.IsAnimationEnabled()) {
        if (turnOnAnimation != null)
            turnOnAnimation.style.display = "none";
        if (turnOffAnimation != null)
            turnOffAnimation.style.display = "";
        if (bSetFocus && linkOff != null)
            linkOff.focus();
    }
    else {
        if (turnOnAnimation != null)
            turnOnAnimation.style.display = "";
        if (turnOffAnimation != null)
            turnOffAnimation.style.display = "none";
        if (bSetFocus && linkOn != null)
            linkOn.focus();
    }
}
function ToggleAnimationStatus() {
ULSw7Q:
    ;
    if (SPAnimation.Settings.IsAnimationEnabled()) {
        SPAnimation.Settings.DisableAnimation();
    }
    else {
        SPAnimation.Settings.EnableAnimation();
    }
    UpdateAnimationUserControl(true);
}
function setupPageDescriptionCallout() {
ULSw7Q:
    ;
    var pageDescElem = document.getElementById("ms-pageDescription");

    if (Boolean(pageDescElem)) {
        var pageDescElemText = GetInnerText(pageDescElem);
        var pageDescDiv = document.getElementById("ms-pageDescriptionDiv");

        if (Boolean(pageDescElemText)) {
            setInnerText(pageDescElem, pageDescElemText);
            pageDescElemText = pageDescElemText.replace(/(\n|\r|\t| )/g, "");
            if (Boolean(pageDescElemText)) {
                SPAnimationUtility.BasicAnimator.FadeIn(document.getElementById("ms-pageDescriptionDiv"), null, null);
                EnsureScriptFunc("callout.js", "Callout", function() {
                ULSw7Q:
                    ;
                    CalloutManager.createNew({
                        ID: 'ms-pageDescriptionCallout',
                        launchPoint: pageDescDiv,
                        openOptions: {
                            event: "click",
                            showCloseButton: true
                        },
                        content: pageDescElem.innerHTML
                    });
                });
            }
        }
    }
}
function SendAjaxFormPostWithFormDigest(url, params, callBackAfterRequestFinished) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (params != null)
        xmlhttp.setRequestHeader("Content-length", params.length);
    xmlhttp.setRequestHeader("Connection", "Keep-alive");
    xmlhttp.setRequestHeader("x-requestdigest", document.forms[MSOWebPartPageFormName]["__REQUESTDIGEST"].value);
    xmlhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
    xmlhttp.onreadystatechange = function() {
    ULSw7Q:
        ;
        if (xmlhttp.readyState == 4) {
            if (callBackAfterRequestFinished != null) {
                callBackAfterRequestFinished(xmlhttp);
            }
        }
    };
    xmlhttp.send(params);
}
function numToPx(num) {
    return String(num) + 'px';
}
var g_InViewPort;
var g_OutOfViewPortCloserToTop;
var g_OutOfViewPortCloserToBottom;

function ElementInViewportVertical(elm, elmParent) {
    if (elm == null)
        return g_InViewPort;
    if (elmParent == null) {
        elmParent = document.body;
    }
    var posTop = AbsTop(elm);
    var posParentTop = AbsTop(elmParent);
    var posScrollTop = elmParent.scrollTop;
    var parentYOffset = posParentTop + posScrollTop;
    var elmHeight = elm.offsetHeight;
    var offsetFromTopOfParent = posTop - parentYOffset;
    var offsetFromBottomOfParent = parentYOffset + elmParent.offsetHeight - (posTop + elmHeight);

    if (offsetFromTopOfParent >= 0 && offsetFromBottomOfParent >= 0) {
        return g_InViewPort;
    }
    else {
        return Math.abs(offsetFromTopOfParent) < Math.abs(offsetFromBottomOfParent) ? g_OutOfViewPortCloserToTop : g_OutOfViewPortCloserToBottom;
    }
}
function GetSuiteHelpLink(linksJson) {
    var links = null;

    if (linksJson != null) {
        links = JSON.parse(linksJson);
    }
    var helpLinkUrl = null;

    if (links != null) {
        if (typeof links.HelpLink != 'undefined' && typeof links.HelpLink.Url == 'string') {
            helpLinkUrl = links.HelpLink.Url;
        }
    }
    return helpLinkUrl;
}
function SuiteLinksEmptyOrSuiteHelpLinkIsCached() {
ULSw7Q:
    ;
    var linksJson = OpenSuiteLinksJson();
    var result = false;

    if (linksJson == "{}") {
        result = true;
    }
    else {
        result = !IsStrNullOrEmpty(GetSuiteHelpLink(linksJson));
    }
    return result;
}
function GetCurrentUserKey() {
ULSw7Q:
    ;
    var retVal = null;

    if (_spPageContextInfo != null) {
        retVal = _spPageContextInfo.systemUserKey;
    }
    return retVal;
}
function GetCurrentUICultureOrNone() {
ULSw7Q:
    ;
    var currentLanguage = "none";

    if (_spPageContextInfo != null && Boolean(_spPageContextInfo.currentUICultureName)) {
        currentLanguage = _spPageContextInfo.currentUICultureName;
    }
    return currentLanguage;
}
function GetSuiteLinks(callBackToRetrieveData, callBackToProcessData) {
ULSw7Q:
    ;
    var currentLanguage = GetCurrentUICultureOrNone();
    var linksLanguage = null;
    var linksJson = null;
    var linksJsonIsStale = false;

    if (!IsNullOrUndefined(window.localStorage) && typeof window.localStorage.SPSuiteLinksJson == 'string') {
        if (GetCurrentUserKey() == window.localStorage.SPSuiteLinksUserKey) {
            linksLanguage = window.localStorage.SPSuiteLinksLanguage;
            linksJson = window.localStorage.SPSuiteLinksJson;
            var linksDate = Date.parse(window.localStorage.SPSuiteLinksDate);

            linksJsonIsStale = !(linksDate > 0) || (new Date()).getTime() - linksDate > 24 * 60 * 60 * 1000;
        }
    }
    else {
        if (typeof SPSuiteNavBar != 'undefined' && typeof SPSuiteNavBar.cachedJson == 'string' && !IsStrNullOrEmpty(SPSuiteNavBar.cachedJson)) {
            linksJsonIsStale = false;
            linksLanguage = currentLanguage;
            linksJson = SPSuiteNavBar.cachedJson;
        }
    }
    if (typeof SP._yam !== "undefined") {
        if (!linksJsonIsStale && Boolean(linksJson) && linksJson.indexOf(SP._yam ? "ShellNewsfeed" : "ShellYammer") !== -1) {
            linksJsonIsStale = true;
        }
    }
    if (linksLanguage != currentLanguage || linksJson == null) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                SP.SOD.executeFunc('suitelinks.js', 'CacheSuiteLinks', function() {
                ULSw7Q:
                    ;
                    CacheSuiteLinks(data);
                    if (callBackToProcessData != null)
                        callBackToProcessData(data);
                });
            });
        }
        else {
            if (callBackToProcessData != null)
                callBackToProcessData(null);
        }
        return;
    }
    if (linksJsonIsStale) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                SP.SOD.executeFunc('suitelinks.js', 'CacheSuiteLinks', function() {
                ULSw7Q:
                    ;
                    if (CacheSuiteLinks(data)) {
                        linksJson = data;
                    }
                });
            });
        }
    }
    if (callBackToProcessData != null)
        callBackToProcessData(linksJson);
}
function CtxFromElement(srcElement) {
    if (srcElement == null)
        return null;
    var tabTb = null;
    var tablv = null;

    tabTb = GetAncestor(srcElement, "TABLE");
    var childNodes = tabTb.getElementsByTagName("SCRIPT");

    if (childNodes == null)
        return null;
    var scriptWpq;

    if (childNodes.length > 0) {
        scriptWpq = childNodes[0];
    }
    while (!fIsNullOrUndefined(scriptWpq) && !fIsNullOrUndefined(scriptWpq.id) && scriptWpq.id.indexOf('scriptBodyWPQ') == -1)
        scriptWpq = scriptWpq.previousSibling;
    var scriptId = null;
    var wpqId = null;

    if (!fIsNullOrUndefined(scriptWpq) && !fIsNullOrUndefined(scriptWpq.id)) {
        scriptId = scriptWpq.id;
        var idx = scriptId.indexOf('WPQ');

        if (idx != -1) {
            wpqId = scriptId.substr(idx);
        }
    }
    if (!fIsNullOrUndefined(wpqId) && !fIsNullOrUndefined(g_ctxDict)) {
        for (var ctxId in g_ctxDict) {
            var _ctx = g_ctxDict[ctxId];

            if (_ctx.wpq == wpqId)
                return _ctx;
        }
    }
    return null;
}
function $dg(x) {
ULSw7Q:
    ;
    if (!(x in window))
        window[x] = undefined;
}
var UTF8_1ST_OF_2;
var UTF8_1ST_OF_3;
var UTF8_1ST_OF_4;
var UTF8_TRAIL;
var HIGH_SURROGATE_BITS;
var LOW_SURROGATE_BITS;
var SURROGATE_6_BIT;
var SURROGATE_ID_BITS;
var SURROGATE_OFFSET;

function escapeProperlyCoreCore(str, bAsUrl, bForFilterQuery, bForCallback) {
    var strOut = "";
    var strByte;
    var ix = 0;
    var strEscaped = " \"%<>\'&";

    if (typeof str == "undefined")
        return "";
    for (ix = 0; ix < str.length; ix++) {
        var charCode = str.charCodeAt(ix);
        var curChar = str.charAt(ix);

        if (bAsUrl && (curChar == '#' || curChar == '?')) {
            strOut += str.substr(ix);
            break;
        }
        if (bForFilterQuery && curChar == '&') {
            strOut += curChar;
            continue;
        }
        if (charCode <= 0x7f) {
            if (bForCallback) {
                strOut += curChar;
            }
            else {
                if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57 || bAsUrl && (charCode >= 32 && charCode <= 95) && strEscaped.indexOf(curChar) < 0) {
                    strOut += curChar;
                }
                else if (charCode <= 0x0f) {
                    strOut += "%0" + (charCode.toString(16)).toUpperCase();
                }
                else if (charCode <= 0x7f) {
                    strOut += "%" + (charCode.toString(16)).toUpperCase();
                }
            }
        }
        else if (charCode <= 0x07ff) {
            strByte = UTF8_1ST_OF_2 | charCode >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
        else if ((charCode & SURROGATE_6_BIT) != HIGH_SURROGATE_BITS) {
            strByte = UTF8_1ST_OF_3 | charCode >> 12;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x0fc0) >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
        else if (ix < str.length - 1) {
            charCode = (charCode & 0x03FF) << 10;
            ix++;
            var nextCharCode = str.charCodeAt(ix);

            charCode |= nextCharCode & 0x03FF;
            charCode += SURROGATE_OFFSET;
            strByte = UTF8_1ST_OF_4 | charCode >> 18;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x3f000) >> 12;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x0fc0) >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
    }
    return strOut;
}
function escapeProperly(str) {
ULSw7Q:
    ;
    return escapeProperlyCoreCore(str, false, false, false);
}
function escapeProperlyCore(str, bAsUrl) {
ULSw7Q:
    ;
    return escapeProperlyCoreCore(str, bAsUrl, false, false);
}
function escapeUrlForCallback(str) {
    var iPound = str.indexOf("#");
    var iQues = str.indexOf("?");

    if (iPound > 0 && (iQues == -1 || iPound < iQues)) {
        var strNew = str.substr(0, iPound);

        if (iQues > 0) {
            strNew += str.substr(iQues);
        }
        str = strNew;
    }
    return escapeProperlyCoreCore(str, true, false, true);
}
function IsSTSPageUrlValid(url) {
    return url.substr(0, 4) == "http" || url.substr(0, 1) == "/" || url.indexOf(":") == -1;
}
function PageUrlValidation(url) {
    if (IsSTSPageUrlValid(url)) {
        return url;
    }
    else {
        alert(Strings.STS.L_InvalidPageUrl_Text);
        return "";
    }
}
function SelectRibbonTab(tabId, force) {
ULSw7Q:
    ;
    var rib;

    try {
        rib = (SP.Ribbon.PageManager.get_instance()).get_ribbon();
    }
    catch (e) { }
    if (!Boolean(rib)) {
        if (typeof _ribbonStartInit != "undefined")
            _ribbonStartInit(tabId, false, null);
    }
    else if (force || rib.get_selectedTabId() == "Ribbon.Read") {
        rib.selectTabById(tabId);
    }
}
function FV4UI() {
ULSw7Q:
    ;
    return typeof _fV4UI != "undefined" && _fV4UI;
}
function GoToHistoryLink(elm, strVersion) {
    if (elm.href == null)
        return;
    var targetUrl = elm.href;
    var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = ch + "VersionNo=" + strVersion;
    var srcSourceUrl = GetSource();

    if (srcSourceUrl != null && srcSourceUrl != "")
        srcSourceUrl = "&" + "Source=" + srcSourceUrl;
    targetUrl = elm.href + srcUrl + srcSourceUrl;
    if (isPortalTemplatePage(targetUrl))
        window.top.location.href = STSPageUrlValidation(targetUrl);
    else
        window.location.href = STSPageUrlValidation(targetUrl);
}
function GetGotoLinkUrl(elm) {
    if (elm.href == null)
        return null;
    var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = GetSource();

    if (srcUrl != null && srcUrl != "")
        srcUrl = ch + "Source=" + srcUrl;
    var targetUrl = elm.href + srcUrl;

    return targetUrl;
}
function GoToLink(elm) {
ULSw7Q:
    ;
    var targetUrl = GetGotoLinkUrl(elm);

    if (targetUrl == null)
        return;
    var fNavigate = true;

    if (typeof window.top.SPUpdatePage !== 'undefined') {
        fNavigate = window.top.SPUpdatePage(targetUrl);
    }
    if (fNavigate) {
        if (elm.target === "_blank")
            window.open(targetUrl, "_blank");
        else if (isPortalTemplatePage(targetUrl))
            window.top.location.href = STSPageUrlValidation(targetUrl);
        else
            window.location.href = STSPageUrlValidation(targetUrl);
    }
}
function GoToLinkOrDialogNewWindow(elm) {
    if (elm.href == null)
        return;
    if (Boolean((ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1"))))
        window.open(elm.href);
    else
        GoToLink(elm);
}
function GoToDiscussion(url) {
    var ch = url.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = GetSource();

    if (srcUrl != null && srcUrl != "")
        url += ch + "TopicsView=" + srcUrl;
    STSNavigate(url);
}
function GetCurrentEltStyle(element, cssStyle) {
    if (Boolean(element.currentStyle))
        return element.currentStyle[cssStyle];
    else {
        if (Boolean(window) && Boolean(window.getComputedStyle)) {
            var compStyle = window.getComputedStyle(element, null);

            if (Boolean(compStyle) && Boolean(compStyle.getPropertyValue)) {
                return compStyle.getPropertyValue(cssStyle);
            }
        }
    }
    return null;
}
function InsertNodeAfter(refNode, nodeToInsert) {
    if (refNode == null || refNode.parentNode == null || nodeToInsert == null)
        return;
    var pNode = refNode.parentNode;
    var nextSib = refNode.nextSibling;

    if (nextSib == null)
        pNode.appendChild(nodeToInsert);
    else
        pNode.insertBefore(nodeToInsert, nextSib);
}
function EEDecodeSpecialChars(str) {
    var decodedStr = str.replace(/&quot;/g, "\"");

    decodedStr = decodedStr.replace(/&gt;/g, ">");
    decodedStr = decodedStr.replace(/&lt;/g, "<");
    decodedStr = decodedStr.replace(/&#39;/g, "'");
    decodedStr = decodedStr.replace(/&amp;/g, "&");
    return decodedStr;
}
function ShowAttachmentRows() {
ULSw7Q:
    ;
    var elm = document.getElementById('idAttachmentsTable');
    var elmAttachmentRow = document.getElementById('idAttachmentsRow');

    if (elmAttachmentRow != null) {
        if (elm == null || elm.rows.length == 0)
            elmAttachmentRow.style.display = 'none';
        else
            elmAttachmentRow.style.display = 'table-row';
    }
}
function PreventDefaultNavigation() {
ULSw7Q:
    ;
    var evt = window.event;

    if (evt != null) {
        if (evt.preventDefault == null)
            evt.returnValue = false;
        else
            evt.preventDefault();
    }
}
function cancelDefault(evt) {
    if (typeof evt == "undefined" || evt == null) {
        evt = window.event;
    }
    if (!(typeof evt == "undefined" || evt == null)) {
        if (typeof evt.stopPropagation == "function")
            evt.stopPropagation();
        else
            evt.cancelBubble = true;
        if (typeof evt.preventDefault == "function")
            evt.preventDefault();
        else
            evt.returnValue = false;
    }
    return false;
}
function IsArray(input) {
    return typeof input == 'object' && input instanceof Array;
}
function IsNullOrUndefined(value) {
    return value == null || value == undefined;
}
function SetOpacity(element, value) {
    XUIHtml.SetOpacity(element, value);
}
function GetOpacity(element) {
    return XUIHtml.GetOpacity(element);
}
var XUIHtml;

function Calendar_InitializePrototype() {
ULSw7Q:
    ;
    Calendar.prototype = {
        actualDateEnd: undefined,
        actualDateStart: undefined,
        dateDP: undefined,
        dateEnd: undefined,
        dateStart: undefined,
        day: undefined,
        dow: undefined,
        iperiod: undefined,
        maxQuarterEnd: undefined,
        month: undefined,
        mon: undefined,
        mpEvents: undefined,
        mpIchan: undefined,
        mpSpan: undefined,
        msDay: undefined,
        msHour: undefined,
        msWeek: undefined,
        multiDay: undefined,
        stViewID: undefined,
        yr: undefined
    };
    Calendar.prototype.AddEvent = CalAddEvent;
    Calendar.prototype.AddFullEvent = CalAddFullEvent;
    Calendar.prototype.AssignChannels = CalAssignChannels;
    Calendar.prototype.BuildUI = CalBuildUI;
    Calendar.prototype.DPDayStyle = CalDPDayStyle;
    Calendar.prototype.DayStyle = CalDayStyle;
    Calendar.prototype.IchanNext = CalIchanNext;
    Calendar.prototype.IrwFromDate = CalIrwFromDate;
    Calendar.prototype.MoveDate = CalMoveDate;
    Calendar.prototype.MoveDay = CalMoveDay;
    Calendar.prototype.MoveMonth = CalMoveMonth;
    Calendar.prototype.MoveToDay = CalMoveToDay;
    Calendar.prototype.MoveToToday = CalMoveToToday;
    Calendar.prototype.MoveVDay = CalMoveDay;
    Calendar.prototype.MoveWeek = CalMoveWeek;
    Calendar.prototype.PlaceEventInRow = CalPlaceEventInRow;
    Calendar.prototype.Post = CalDoPost;
    Calendar.prototype.SetDate = CalSetDate;
    Calendar.prototype.SetDateFromGrid = CalSetDateFromGrid;
    Calendar.prototype.SpanCheck = CalSpanCheck;
    Calendar.prototype.StBuild = CalStBuild;
    Calendar.prototype.StBuildDHTML = CalStBuildDHTML;
    Calendar.prototype.StBuildPicker = CalStBuildPicker;
    Calendar.prototype.StDayMonthYear = CalStDayMonthYear;
    Calendar.prototype.StDaySpanMonthYear = CalDaySpanMonthYear;
    Calendar.prototype.StDownlevelBuild = CalStDownlevelBuild;
    Calendar.prototype.StMonthYear = CalStMonthYear;
    Calendar.prototype.rgDOW = CalGetDOW;
    Calendar.prototype.rgDOWLong = CalGetDOWLong;
    Calendar.prototype.rgDOWDP = CalGetDOWDP;
    Calendar.prototype.rgMonths = CalGetMonths;
    Calendar.msMinute = 1000 * 60;
    Calendar.msHour = Calendar.msMinute * 60;
    Calendar.msDay = Calendar.msHour * 24;
    Calendar.msWeek = Calendar.msDay * 7;
}
function CalEvent_InitializePrototype() {
ULSw7Q:
    ;
    CalEvent.prototype.actualDateEnd = undefined;
    CalEvent.prototype.actualDateStart = undefined;
    CalEvent.prototype.dateEnd = undefined;
    CalEvent.prototype.dateStart = undefined;
    CalEvent.prototype.ichan = undefined;
    CalEvent.prototype.ihour = undefined;
    CalEvent.prototype.multiDay = undefined;
    CalEvent.prototype.multiQuarter = undefined;
    CalEvent.prototype.rowspan = undefined;
    CalEvent.prototype.rgIcons = undefined;
    CalEvent.prototype.stDesc = undefined;
    CalEvent.prototype.stLocation = undefined;
    CalEvent.prototype.stTitle = undefined;
    CalEvent.prototype.stURL = undefined;
    CalEvent.prototype.FOverlap = EvtFOverlap;
    CalEvent.prototype.StTip = EvtStTip;
}
function Span_InitializePrototype() {
ULSw7Q:
    ;
    Span.prototype.evt = undefined;
    Span.prototype.cbucket = undefined;
}
function MsFloorTime(date, ms, exclusive) {
    var time = date.getTime();

    if (exclusive)
        time = time - 1;
    time = ms * Math.floor(time / ms);
    return time;
}
function Calendar(yr, mon, dopt, stObject) {
ULSw7Q:
    ;
    if (!Boolean(dopt))
        dopt = new DateOptions;
    this.dopt = dopt;
    var day = 1;

    if (yr == null || mon == null) {
        var stCalDate = StURLGetVar("CalendarDate");

        if (stCalDate != "") {
            yr = Number(stCalDate.substr(0, 4));
            var idxM2D = stCalDate.indexOf("-", 5);

            if (idxM2D == -1) {
                mon = Number(stCalDate.substr(5)) - 1;
            }
            else {
                mon = Number(stCalDate.substr(5, idxM2D - 5)) - 1;
                day = Number(stCalDate.substr(idxM2D + 1));
            }
        }
        if (stCalDate == "" || isNaN(Number(dopt.DateYMD(yr, mon, 1)))) {
            var dateToday = this.dopt.Today();

            yr = dateToday.getUTCFullYear();
            mon = dateToday.getUTCMonth();
            day = dateToday.getUTCDate();
        }
    }
    var stCalPeriod = StURLGetVar("CalendarPeriod");

    if (stCalPeriod == "week") {
        this.period = "week";
        this.iperiod = 1;
    }
    else if (stCalPeriod == "day") {
        this.period = "vday";
        this.iperiod = 2;
    }
    else if (stCalPeriod == "vday") {
        this.period = "vday";
        this.iperiod = 2;
    }
    else if (stCalPeriod == "month") {
        this.period = "month";
        this.iperiod = 0;
    }
    else {
        this.period = dopt.CalendarPeriod;
        if (this.period == "week")
            this.iperiod = 1;
        else if (this.period == "day")
            this.iperiod = 2;
        else if (this.period == "vday")
            this.iperiod = 2;
        else
            this.iperiod = 0;
    }
    this.SetDate(yr, mon, day);
    if (this.iperiod == 0) {
        this.cchanMin = 4;
        this.cchanMax = 4;
    }
    else if (this.iperiod == 1) {
        this.cchanMin = 20;
        this.cchanMax = 20;
    }
    else {
        this.cchanMin = 3;
        this.cchanMax = 100;
    }
    this.ievtMax = 0;
    this.rgEvt = [];
    this.fUseDHTML = browseris.ie && browseris.verIEFull > 4.0 && browseris.win32 || browseris.nav6up;
    this.fDatePicker = false;
    this.dateDP = null;
    if (!Boolean(stObject))
        stObject = "cal";
    this.stObject = stObject;
}
function CalGetDOW(index) {
ULSw7Q:
    ;
    var rgDOW = [Strings.STS.L_rgDOW0_Text, Strings.STS.L_rgDOW1_Text, Strings.STS.L_rgDOW2_Text, Strings.STS.L_rgDOW3_Text, Strings.STS.L_rgDOW4_Text, Strings.STS.L_rgDOW5_Text, Strings.STS.L_rgDOW6_Text];

    return rgDOW[index];
}
function CalGetDOWLong(index) {
ULSw7Q:
    ;
    var rgDOWLong = [Strings.STS.L_rgDOWLong0_Text, Strings.STS.L_rgDOWLong1_Text, Strings.STS.L_rgDOWLong2_Text, Strings.STS.L_rgDOWLong3_Text, Strings.STS.L_rgDOWLong4_Text, Strings.STS.L_rgDOWLong5_Text, Strings.STS.L_rgDOWLong6_Text];

    return rgDOWLong[index];
}
function CalGetDOWDP(index) {
ULSw7Q:
    ;
    var rgDOWDP = [Strings.STS.L_rgDOWDP0_Text, Strings.STS.L_rgDOWDP1_Text, Strings.STS.L_rgDOWDP2_Text, Strings.STS.L_rgDOWDP3_Text, Strings.STS.L_rgDOWDP4_Text, Strings.STS.L_rgDOWDP5_Text, Strings.STS.L_rgDOWDP6_Text];

    return rgDOWDP[index];
}
function CalGetMonths(index) {
ULSw7Q:
    ;
    var rgMonths = [Strings.STS.L_rgMonths0_Text, Strings.STS.L_rgMonths1_Text, Strings.STS.L_rgMonths2_Text, Strings.STS.L_rgMonths3_Text, Strings.STS.L_rgMonths4_Text, Strings.STS.L_rgMonths5_Text, Strings.STS.L_rgMonths6_Text, Strings.STS.L_rgMonths7_Text, Strings.STS.L_rgMonths8_Text, Strings.STS.L_rgMonths9_Text, Strings.STS.L_rgMonths10_Text, Strings.STS.L_rgMonths11_Text];

    return rgMonths[index];
}
function CalStMonthYear() {
ULSw7Q:
    ;
    var st = "";

    if (this.iperiod != 0)
        st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var stFormat = "";
    var param1 = "";
    var param2 = "";

    switch (this.dopt.stDateOrder) {
    case "MDY":
    case "DMY":
        param1 = this.rgMonths(this.mon);
        param2 = String(this.yr);
        stFormat = Strings.STS.L_MYDATE_Text;
        break;
    case "YMD":
        param1 = String(this.yr);
        param2 = this.rgMonths(this.mon);
        stFormat = Strings.STS.L_YMDATE_Text;
        break;
    }
    st += StBuildParam(stFormat, [param1, param2]);
    if (this.iperiod != 0)
        st += "</span>";
    return st;
}
function CalDaySpanMonthYear() {
ULSw7Q:
    ;
    var st = "";
    var stStart = "";
    var stEnd = "";
    var stFormat1 = "";
    var stFormat2 = "";
    var param1 = "";
    var param2 = "";
    var param3 = "";
    var param4 = "";
    var param5 = "";
    var param6 = "";

    if (this.iperiod != 0)
        st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var bDiffYears = this.dateStart.getUTCFullYear() != this.dateEnd.getUTCFullYear();

    switch (this.dopt.stDateOrder) {
    case "MDY":
        param1 = this.rgMonths(this.dateStart.getUTCMonth());
        param2 = String(this.dateStart.getUTCDate());
        param3 = String(this.dateStart.getUTCFullYear());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_MDYDATE_Text;
        else
            stFormat1 = Strings.STS.L_MDYDATESameYear_Text;
        param4 = this.rgMonths(this.dateEnd.getUTCMonth());
        param5 = String(this.dateEnd.getUTCDate());
        param6 = String(this.dateEnd.getUTCFullYear());
        stFormat2 = Strings.STS.L_MDYDATE_Text;
        break;
    case "DMY":
        param1 = String(this.dateStart.getUTCDate());
        param2 = this.rgMonths(this.dateStart.getUTCMonth());
        param3 = String(this.dateStart.getUTCFullYear());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_DMYDATE_Text;
        else
            stFormat1 = Strings.STS.L_DMYDATESameYear_Text;
        param4 = String(this.dateEnd.getUTCDate());
        param5 = this.rgMonths(this.dateEnd.getUTCMonth());
        param6 = String(this.dateEnd.getUTCFullYear());
        stFormat2 = Strings.STS.L_DMYDATE_Text;
        break;
    case "YMD":
        param1 = String(this.dateStart.getUTCFullYear());
        param2 = this.rgMonths(this.dateStart.getUTCMonth());
        param3 = String(this.dateStart.getUTCDate());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_YMDDATE_Text;
        else
            stFormat1 = Strings.STS.L_YMDDATESameYear_Text;
        param4 = String(this.dateEnd.getUTCFullYear());
        param5 = this.rgMonths(this.dateEnd.getUTCMonth());
        param6 = String(this.dateEnd.getUTCDate());
        stFormat2 = Strings.STS.L_YMDDATE_Text;
        break;
    }
    stStart = StBuildParam(stFormat1, [param1, param2, param3]);
    stEnd = StBuildParam(stFormat2, [param4, param5, param6]);
    st += StBuildParam(Strings.STS.L_DATE1DATE2_Text, [stStart, stEnd]);
    if (this.iperiod != 0)
        st += "</span>";
    return st;
}
function CalStDayMonthYear() {
ULSw7Q:
    ;
    var st = "";

    st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var stFormat = "";
    var param1 = "";
    var param2 = "";
    var param3 = "";
    var param4 = this.rgDOWLong(this.dow);

    switch (this.dopt.stDateOrder) {
    case "MDY":
        param1 = this.rgMonths(this.mon);
        param2 = String(this.day);
        param3 = String(this.yr);
        stFormat = Strings.STS.L_MDY_DOW_DATE_Text;
        break;
    case "DMY":
        param1 = String(this.day);
        param2 = this.rgMonths(this.mon);
        param3 = String(this.yr);
        stFormat = Strings.STS.L_DMY_DOW_DATE_Text;
        break;
    case "YMD":
        param1 = String(this.yr);
        param2 = this.rgMonths[this.mon];
        param3 = String(this.day);
        stFormat = Strings.STS.L_YMD_DOW_DATE_Text;
        break;
    }
    st += StBuildParam(stFormat, [param1, param2, param3, param4]);
    st += "</span>";
    return st;
}
function CalSetDate(yr, mon, day) {
ULSw7Q:
    ;
    var date = new Date(Date.UTC(yr, mon, day));

    this.dateStart = new Date(date.getTime());
    this.dateEnd = new Date(date.getTime());
    this.givenDate = new Date(date.getTime());
    if (this.iperiod == 0) {
        this.dateStart.setUTCDate(1);
        this.dateEnd.setTime(Date.UTC(yr, mon + 1, 0));
    }
    var irw = 0;

    if (this.iperiod != 2) {
        this.dateStart.setUTCDate(this.dateStart.getUTCDate() - (this.dateStart.getUTCDay() - this.dopt.dow + 7) % 7);
        irw = this.IrwFromDate(this.dateEnd);
        this.dateEnd.setUTCDate(this.dateEnd.getUTCDate() + irw * 7 - 1);
    }
    this.irwMax = irw + 1;
    if (this.iperiod == 1) {
        this.dateEnd.setTime(this.dateStart.getTime() + 6 * Calendar.msDay);
        date = new Date(this.dateStart.getTime() + 3 * Calendar.msDay);
    }
    else if (this.iperiod == 2) {
        this.dateTodayEnd = new Date(this.dateStart.getTime() + Calendar.msDay - 1);
    }
    this.day = date.getUTCDate();
    this.mon = date.getUTCMonth();
    this.yr = date.getUTCFullYear();
    this.dow = date.getUTCDay();
}
function CalDayStyle(dateCur, fBottom, fTop, fWeekly) {
    var st;
    var dateToday = this.dopt.Today();

    if (dateCur.getTime() == dateToday.getTime()) {
        if (fBottom)
            st = ' style="border-color:\'#FFD275\'; border-bottom-style:solid; border-left-style:solid; border-right-style:solid; border-bottom-width:2pt; border-left-width:2pt; border-right-width:2pt" ';
        else if (fTop)
            st = ' style="border-color:\'#FFD275\'; border-top-style:solid; border-left-style:solid; border-right-style:solid; border-top-width:2pt; border-left-width:2pt; border-right-width:2pt" ';
        else
            st = ' style="border-color:\'#FFD275\'; border-left-style:solid; border-right-style:solid; border-left-width:2pt; border-right-width:2pt" ';
    }
    else if (!fWeekly && dateCur.getUTCMonth() != this.mon) {
        st = ' BGCOLOR="#e6e6e6"';
    }
    else
        st = "";
    return st;
}
function CalAddFullEvent(stDateStart, stDateEnd, stLocation, stDesc, stTitle, stURL, rgIcons) {
    var dateStart;
    var dateEnd;

    if (stDateStart == "")
        return;
    dateStart = DateOptions.ParseISODate(stDateStart, undefined);
    if (stDateEnd == "") {
        dateEnd = new Date(dateStart.getTime());
    }
    else {
        dateEnd = DateOptions.ParseISODate(stDateEnd, undefined);
    }
    if (Number(dateEnd) < Number(dateStart))
        dateEnd = new Date(dateStart.getTime());
    var displayDateStart = new Date(dateStart.getTime());
    var displayDateEnd = new Date(dateEnd.getTime());

    if (this.iperiod == 2) {
        if (Number(dateStart) > Number(this.dateTodayEnd) || Number(dateEnd) < Number(this.dateStart))
            return;
        if (Number(displayDateStart) < Number(this.dateStart))
            displayDateStart = this.dateStart;
        var minDisplay = Calendar.msHour / 3;

        if (dateEnd.getTime() < dateStart.getTime() + minDisplay)
            displayDateEnd = new Date(dateStart.getTime() + minDisplay);
    }
    stURL += "&Source=" + escapeProperly(window.location.href);
    var evt = new CalEvent(displayDateStart, displayDateEnd, dateStart, dateEnd, stLocation, stDesc, stTitle, stURL, rgIcons);

    this.AddEvent(evt);
}
function CalAddEvent(evt) {
ULSw7Q:
    ;
    this.rgEvt[String(this.ievtMax++)] = evt;
}
function CalAssignChannels() {
ULSw7Q:
    ;
    var ievt;

    this.mpSpan = new Object;
    this.mpIchan = new Object;
    this.mpEvents = new Object;
    var fAllDaySeparate = false;
    var dateTodayStart;
    var dateTodayEnd;
    var evt;

    if (this.iperiod == 2) {
        fAllDaySeparate = true;
        dateTodayStart = this.dateStart;
        dateTodayEnd = this.dateTodayEnd;
        this.mpNoTimeEvents = [];
        this.mpAllDayEvents = [];
        var dailyStart = this.dopt.WorkDayStartHour - this.dopt.DailyStartHourDelta;
        var dailyEnd = this.dopt.WorkDayEndHour + this.dopt.DailyEndHourDelta;

        if (dailyStart < 0)
            dailyStart = 0;
        if (dailyEnd > 24)
            dailyEnd = 24;
        this.minQuarterStart = 4 * dailyStart;
        this.maxQuarterEnd = 4 * dailyEnd - 1;
        for (ievt = 0; ievt < this.rgEvt.length; ievt++) {
            evt = this.rgEvt[String(ievt)];
            if (Number(evt.actualDateStart) > Number(dateTodayEnd) || Number(evt.actualDateEnd) - 1 < Number(dateTodayStart) || Number(evt.actualDateStart) <= Number(dateTodayStart) && Number(evt.actualDateEnd) >= Number(dateTodayEnd))
                continue;
            var irwMin = this.IrwFromDate(evt.dateStart);

            if (irwMin < 0)
                irwMin = 0;
            var irwMax = this.IrwFromDate(evt.dateEnd);

            if (irwMax > this.irwMax)
                irwMax = this.irwMax;
            if (irwMin < this.irwMax && irwMax >= 0) {
                for (var irw = irwMin; irw <= irwMax; irw++) {
                    var date = new Date;

                    this.SetDateFromGrid(date, irw, 0);
                    if (Number(date) < Number(dateTodayStart) || Number(date) >= Number(dateTodayEnd))
                        continue;
                    var quarterRow = date.getTime() / (Calendar.msHour / 4);
                    var quarterStart = MsFloorTime(evt.dateStart, Calendar.msHour / 4, Boolean(0)) / (Calendar.msHour / 4) - quarterRow;
                    var quarterEnd = MsFloorTime(evt.dateEnd, Calendar.msHour / 4, Boolean(1)) / (Calendar.msHour / 4) - quarterRow + 1;

                    if (quarterEnd < quarterStart)
                        quarterEnd = quarterStart;
                    if (quarterStart < this.minQuarterStart)
                        this.minQuarterStart = quarterStart;
                    if (quarterEnd > this.maxQuarterEnd)
                        this.maxQuarterEnd = quarterEnd;
                    if (quarterStart > 0 && 95 - quarterStart < 2)
                        this.FVdayOverflow = true;
                }
            }
        }
        this.minQuarterStart = Math.floor(this.minQuarterStart / 4) * 4;
        if (this.minQuarterStart < 0)
            this.minQuarterStart = 0;
        if (this.maxQuarterEnd > 95)
            this.maxQuarterEnd = 95;
        else
            this.maxQuarterEnd = 4 * (Math.floor(this.maxQuarterEnd / 4) + 1) - 1;
    }
    if (this.iperiod <= 1)
        this.rgEvt.sort(CalEvtSort);
    var todayMiliSecDate = this.dateStart;

    todayMiliSecDate.setUTCHours(0, 0, 0, 0);
    var todayMiliSec = todayMiliSecDate.getTime();

    for (ievt = 0; ievt < this.rgEvt.length; ievt++) {
        evt = this.rgEvt[String(ievt)];
        if (fAllDaySeparate) {
            if (evt.actualDateStart.getTime() == todayMiliSec && evt.actualDateEnd.getTime() == todayMiliSec) {
                this.mpNoTimeEvents[this.mpNoTimeEvents.length] = evt;
                continue;
            }
            if (Number(evt.actualDateStart) <= Number(dateTodayStart) && Number(evt.actualDateEnd) >= Number(dateTodayEnd)) {
                this.mpAllDayEvents[this.mpAllDayEvents.length] = evt;
                continue;
            }
        }
        irwMin = this.IrwFromDate(evt.dateStart);
        if (irwMin < 0)
            irwMin = 0;
        irwMax = this.IrwFromDate(evt.dateEnd);
        if (irwMax > this.irwMax)
            irwMax = this.irwMax;
        if (irwMin < this.irwMax && irwMax >= 0) {
            for (irw = irwMin; irw <= irwMax; irw++) {
                this.PlaceEventInRow(evt, irw);
            }
        }
    }
}
function CalEvtSort(e1, e2) {
    if (e1.multiDay != e2.multiDay) {
        if (e1.multiDay)
            return -1;
        else
            return 1;
    }
    else if (e1.multiDay) {
        var d1 = Number(e1.dateEnd) - Number(e1.dateStart);
        var d2 = Number(e2.dateEnd) - Number(e2.dateStart);

        if (d2 < d1)
            return -1;
        else if (d2 > d1)
            return 1;
        else
            return 0;
    }
    else {
        if (Number(e1.dateStart) < Number(e2.dateStart))
            return -1;
        else if (Number(e1.dateStart) > Number(e2.dateStart))
            return 1;
        else
            return 0;
    }
}
function CalPlaceEventInRow(evt, irw) {
    var span;
    var date = new Date;

    this.SetDateFromGrid(date, irw, 0);
    if (this.iperiod == 2) {
        if (irw != 0)
            return;
        var quarterRow = date.getTime() / (Calendar.msHour / 4);
        var quarterStart = MsFloorTime(evt.dateStart, Calendar.msHour / 4, Boolean(0)) / (Calendar.msHour / 4) - quarterRow;
        var quarterEnd = MsFloorTime(evt.dateEnd, Calendar.msHour / 4, Boolean(1)) / (Calendar.msHour / 4) - quarterRow;

        if (quarterEnd < quarterStart)
            quarterEnd = quarterStart;
        var workdayStart;
        var workdayEnd;

        if (this.iperiod == 2) {
            workdayStart = this.minQuarterStart;
            workdayEnd = this.maxQuarterEnd;
        }
        else {
            workdayStart = 4 * this.dopt.WorkDayStartHour;
            workdayEnd = 4 * this.dopt.WorkDayEndHour - 1;
        }
        if (quarterEnd >= workdayStart && quarterStart <= workdayEnd) {
            if (this.FVdayOverflow)
                workdayEnd = 99;
            quarterStart = Math.max(quarterStart, workdayStart);
            quarterEnd = Math.min(quarterEnd, workdayEnd);
            var ichan = this.IchanNext(irw, quarterStart, quarterEnd);

            new Span(this, irw, quarterStart, quarterEnd, ichan, evt);
        }
    }
    else {
        var dayRow;
        var dayStart;
        var dayEnd;

        dayRow = date.getTime() / Calendar.msDay;
        dayStart = MsFloorTime(evt.dateStart, Calendar.msDay, Boolean(0)) / Calendar.msDay - dayRow;
        dayEnd = MsFloorTime(evt.dateEnd, Calendar.msDay, Boolean(1)) / Calendar.msDay - dayRow;
        if (dayEnd < dayStart || evt.actualDateEnd.getTime() - evt.actualDateStart.getTime() < Calendar.msDay) {
            dayEnd = dayStart;
        }
        if (dayEnd >= 0 && dayStart <= 6) {
            dayStart = Math.max(dayStart, 0);
            dayEnd = Math.min(dayEnd, 6);
            ichan = this.IchanNext(irw, dayStart, dayEnd);
            new Span(this, irw, dayStart, dayEnd, ichan, evt);
        }
    }
}
function Span(cal, irw, startParam, end, ichan, evt) {
    this.evt = evt;
    this.cbucket = end - startParam + 1;
    if (cal.iperiod == 2) {
        evt.ichan = ichan;
        evt.ihour = startParam;
        var maxEnd = cal.maxQuarterEnd;

        if (maxEnd == 95)
            maxEnd = 99;
        evt.rowspan = Math.min(this.cbucket, 1 + maxEnd - startParam);
    }
    cal.mpSpan[String(irw) + "." + String(startParam) + "." + String(ichan)] = this;
    for (var bucket = startParam; bucket <= end; bucket++) {
        cal.mpIchan[String(irw) + "." + String(bucket)] = ichan + 1;
        var rgevt = cal.mpEvents[String(irw) + "." + String(bucket)];

        if (rgevt == null) {
            rgevt = [];
            cal.mpEvents[String(irw) + "." + String(bucket)] = rgevt;
        }
        rgevt[rgevt.length] = evt;
    }
}
function CalIchanNext(irw, startParam, end) {
ULSw7Q:
    ;
    var bucket;
    var ichan = 0;

    for (bucket = startParam; bucket <= end; bucket++) {
        if (this.mpIchan[String(irw) + "." + String(bucket)] != null)
            ichan = Math.max(ichan, this.mpIchan[String(irw) + "." + String(bucket)]);
    }
    return ichan;
}
function CalIrwFromDate(date) {
    var irw;

    irw = Math.floor((date.getTime() - this.dateStart.getTime()) / Calendar.msWeek);
    return irw;
}
function CalBuildUI() {
ULSw7Q:
    ;
    var st = this.StBuild();

    document.write(st);
}
function CalStBuild() {
ULSw7Q:
    ;
    this.AssignChannels();
    if (this.fDatePicker)
        return this.StBuildPicker();
    if (!this.fUseDHTML)
        return this.StDownlevelBuild();
    return this.StBuildDHTML();
}
function CalStBuildDHTML() {
ULSw7Q:
    ;
    var st;
    var span;
    var dateCur = new Date;
    var irw;
    var iday;
    var ichan;
    var cchan;
    var ihour;
    var iHourStart;
    var iHourEnd;
    var iGrayStart;
    var iGrayEnd;
    var evt;

    iHourStart = (iGrayStart = 4 * this.dopt.WorkDayStartHour);
    iHourEnd = 4 * this.dopt.WorkDayEndHour;
    iGrayEnd = iHourEnd - 1;
    if (this.iperiod == 2) {
        iHourStart = this.minQuarterStart;
        iHourEnd = this.maxQuarterEnd + 1;
        if (iHourEnd == 96 && this.FVdayOverflow)
            iHourEnd = 100;
    }
    var stTDHigh = '<th style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');" ';

    if (this.iperiod == 2) {
        cchan = this.IchanNext(0, iHourStart, iHourEnd);
        var cNoTime = this.mpNoTimeEvents.length;
        var cAllDay = this.mpAllDayEvents.length;

        cchan = Math.max(cchan, this.cchanMin);
        if (this.cchanMax > 0)
            cchan = Math.min(cchan, this.cchanMax);
        st = "<table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>";
        st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(-1)') + ' class="ms-calhead" style="cursor:pointer;" width="8%">&lt;</th><th width="84%" class="ms-calhead" nowrap>' + this.StDayMonthYear() + '</th>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(1)') + ' class="ms-calhead" style="cursor:pointer;" width="8%">&gt;</th></tr>';
        if (cNoTime > 0) {
            st += "</table><table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>\r";
            st += "<tr height='0'><td width='" + String(Number(this.dopt.AllDayWidth) + 8) + "pt' /><td/></tr>\r";
            st += "<tr><td class='ms-CalAllDay' rowspan='" + String(cNoTime + 1) + "'></td><td width='1%' /></tr>";
            for (i = 0; i < cNoTime; i++) {
                evt = this.mpNoTimeEvents[i];
                st += "<tr><td class='ms-Vapptsingle' style='border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black; border-right:1px solid black;' ";
                st += " title=" + StAttrQuote(evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(evt, this.dopt, 2) + "</nobr></td></tr>\r";
            }
        }
        if (cAllDay > 0) {
            st += "</table><table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>\r";
            st += "<tr height='0'><td width='" + String(Number(this.dopt.AllDayWidth) + 8) + "pt' /><td/></tr>\r";
            st += "<tr><td class='ms-CalAllDay' rowspan='" + String(cAllDay + 1) + "'>" + this.dopt.L_AllDay_Text + "</td><td width='1%'/></tr>";
            for (var i = 0; i < cAllDay; i++) {
                evt = this.mpAllDayEvents[i];
                st += "<tr><td class='ms-Vapptsingle' style='border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black; border-right:1px solid black;' ";
                st += " title=" + StAttrQuote(evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(evt, this.dopt, 2) + "</nobr></td></tr>\r";
            }
        }
        st += "</table><table width='100%' style='table-layout:fixed' class='ms-vcal' cellpadding='0' cellspacing='0'>\r";
        st += "<tr height='0'><td width='" + String(this.dopt.AllDayWidth) + "pt' /><td width='8pt' />\r";
        for (ichan = 1; ichan < cchan; ichan++) {
            st += "<td/>\r";
        }
        st += "</tr>\r";
        var LayoutGrid = new Object;
        var HitDetect = new Array(iHourEnd);

        for (ihour = iHourStart; ihour < iHourEnd; ihour++) {
            HitDetect[ihour] = 0;
            for (ichan = 0; ichan < cchan; ichan++)
                LayoutGrid[String(ihour) + "." + String(ichan)] = 0;
        }
        for (i = 0; i < this.rgEvt.length; i++) {
            evt = this.rgEvt[i];
            ihour = evt.ihour;
            ichan = evt.ichan;
            var rowspan = evt.rowspan;
            var max = ichan + 1;

            for (irow = 0; irow < rowspan; irow++)
                if (HitDetect[ihour + irow] > max)
                    max = HitDetect[ihour + irow];
            for (irow = 0; irow < rowspan; irow++) {
                HitDetect[ihour + irow] = max;
                LayoutGrid[String(ihour + irow) + "." + String(ichan)] = 1;
            }
        }
        for (i = 0; i < this.rgEvt.length; i++) {
            var width = 0;
            var irow = 0;

            evt = this.rgEvt[i];
            ihour = evt.ihour;
            max = HitDetect[ihour];
            rowspan = evt.rowspan;
            var hit = 0;
            var popMax = false;

            for (irow = 1; irow < rowspan; irow++) {
                hit = HitDetect[ihour + irow];
                popMax = popMax || hit != max;
                if (hit > max)
                    max = hit;
            }
            if (!popMax)
                continue;
            for (irow = 0; irow < rowspan; irow++)
                HitDetect[ihour + irow] = max;
        }
        for (i = this.rgEvt.length - 1; i >= 0; i--) {
            var width2 = 0;
            var irow2 = 0;

            evt = this.rgEvt[i];
            ihour = evt.ihour;
            max = HitDetect[ihour];
            rowspan = evt.rowspan;
            var hit2 = 0;
            var popMax2 = false;

            for (irow2 = 1; irow2 < rowspan; irow2++) {
                hit = HitDetect[ihour + irow2];
                popMax2 = popMax2 || hit != max;
                if (hit > max)
                    max = hit;
            }
            if (!popMax2)
                continue;
            for (irow2 = 0; irow2 < rowspan; irow2++)
                HitDetect[ihour + irow2] = max;
        }
        for (ihour = iHourStart; ihour < iHourEnd; ihour++) {
            st += "<tr>\r";
            if (ihour % 4 == 0) {
                var stHour = String(ihour / 4);

                if (stHour == "24")
                    stHour = "&nbsp;";
                else if (this.dopt.f12Hour) {
                    stHour = String((ihour / 4 + 11) % 12 + 1);
                    if (this.dopt.TimeMarkPosn == 0) {
                        stHour += " " + (ihour / 4 < 12 ? this.dopt.stAM : this.dopt.stPM);
                    }
                    else
                        stHour = (ihour / 4 < 12 ? this.dopt.stAM : this.dopt.stPM) + " " + stHour;
                }
                var stGrayBG = "";

                if (ihour < iGrayStart || ihour > iGrayEnd) {
                    stGrayBG = ' BGCOLOR="#e6e6e6" ';
                }
                if (ihour != iHourStart || cAllDay > 0 || cNoTime > 0) {
                    st += "<td class='ms-CalHour' rowspan='2'" + stGrayBG + "><nobr>" + stHour + "</nobr></td>";
                    st += "<td class='ms-calHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
                else {
                    st += "<td class='ms-firstCalHour' rowspan='2'" + stGrayBG + "><nobr>" + stHour + "</nobr></td>";
                    st += "<td class='ms-firstCalHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
            }
            else if (ihour % 2 == 0) {
                st += "<td class='ms-CalHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
                st += "<td class='ms-calHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            else if (ihour % 4 == 1) {
                st += "<td class='ms-CalQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            else if (ihour % 4 == 3) {
                st += "<td class='ms-CalQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
                st += "<td class='ms-calQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            for (ichan = 0; ichan < cchan; ichan++) {
                span = this.mpSpan["0." + String(ihour) + "." + String(ichan)];
                if (span != null) {
                    var stClass = "ms-Vappt";
                    var rowspan2 = span.evt.rowspan;
                    var colspan = Math.floor(cchan / HitDetect[ihour]);

                    if (colspan > cchan / this.cchanMin)
                        colspan = Math.floor(cchan / this.cchanMin);
                    var reduceby = colspan - 1;

                    if (reduceby > 0)
                        for (irow = 0; irow < rowspan2; irow++) {
                            reduceby = colspan - 1;
                            for (var jchan = cchan - 1; jchan > ichan && reduceby > 0; jchan--) {
                                if (LayoutGrid[String(ihour + irow) + "." + String(jchan)] == 0) {
                                    LayoutGrid[String(ihour + irow) + "." + String(jchan)] = 1;
                                    reduceby--;
                                }
                            }
                        }
                    st += "<td class=" + stClass + " style='border-top:1px solid black; border-left:1px solid black; border-bottom:2px solid black; border-right:2px solid black;' rowspan=" + String(span.evt.rowspan);
                    if (colspan > 1)
                        st += " colspan=" + String(colspan);
                    st += " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(span.evt, this.dopt, span.evt.rowspan) + "</nobr></td>\r";
                }
                else if (LayoutGrid[String(ihour) + "." + String(ichan)] == 0) {
                    if (ihour % 4 == 0) {
                        if (ihour != iHourStart || cAllDay > 0 || cNoTime > 0)
                            st += "<td class='ms-calHour'" + stGrayBG + ">&nbsp;</td>\r";
                        else
                            st += "<td class='ms-firstCalHour'" + stGrayBG + ">&nbsp;</td>\r";
                    }
                    else if (ihour % 2 == 0)
                        st += "<td class='ms-calHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
                    else
                        st += "<td class='ms-calQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
            }
            st += "</tr>\r";
        }
        st += "<tr>\r";
        for (ichan = -2; ichan < cchan; ichan++) {
            st += "<td class='ms-CalHour'>&nbsp;</td>\r";
        }
        st += "</tr>\r";
    }
    else {
        var fWeekly = this.iperiod == 1;

        st = "<table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>";
        st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(-1)') + ' class="ms-calhead" style="cursor:pointer;">&lt;</td><td class="ms-calhead" colspan="5">';
        if (this.iperiod == 0)
            st += this.StMonthYear();
        else
            st += this.StDaySpanMonthYear();
        st += '</td>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(1)') + ' class="ms-calhead" style="cursor:pointer;">&gt;</td></tr>';
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            st += "<td class='ms-calDOW'>" + this.rgDOW((iday + this.dopt.dow) % 7) + "</td>\r";
        }
        st += "</tr>";
        for (irw = 0; irw < this.irwMax; irw++) {
            cchan = Math.max(this.IchanNext(irw, 0, 6), this.cchanMin);
            if (this.cchanMax > 0)
                cchan = Math.min(cchan, this.cchanMax);
            st += "<tr>\r";
            for (iday = 0; iday < 7; iday++) {
                this.SetDateFromGrid(dateCur, irw, iday);
                st += '<td class="ms-calTop"' + this.DayStyle(dateCur, false, true, fWeekly) + '>&nbsp;<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + ".MoveToDay(" + String(dateCur.getUTCFullYear()) + "," + String(dateCur.getUTCMonth() + 1) + "," + String(dateCur.getUTCDate()) + ")") + ">" + String(dateCur.getUTCDate()) + "</span>&nbsp;</td>\r";
            }
            st += "</tr>\r";
            for (ichan = 0; ichan < cchan; ichan++) {
                if (this.iperiod == 1) {
                    st += "<tr>\r";
                    for (iday = 0; iday < 7; iday++) {
                        this.SetDateFromGrid(dateCur, irw, iday);
                        if (ichan == cchan - 1 && this.SpanCheck(irw, iday, ichan, cchan)) {
                            st += "<td class='ms-apptsingle' " + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>";
                        }
                        else {
                            span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
                            if (span != null && !span.evt.multiDay && 0 != span.evt.actualDateStart.getTime() % Calendar.msDay && 0 != span.evt.actualDateEnd.getTime() % Calendar.msDay) {
                                var stClass2 = "ms-apptsingle" + this.DayStyle(dateCur, false, false, fWeekly);

                                st += "<td class=" + stClass2 + " colspan=" + String(span.cbucket) + " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>";
                                st += StEvtTime(span.evt, this.dopt, true);
                                st += "&nbsp;</nobr></td>\r";
                                iday += span.cbucket - 1;
                            }
                            else {
                                st += "<td class='ms-calMid'" + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>\r";
                            }
                        }
                    }
                    st += "</tr>\r";
                }
                st += "<tr>\r";
                for (iday = 0; iday < 7; iday++) {
                    this.SetDateFromGrid(dateCur, irw, iday);
                    if (ichan == cchan - 1 && this.SpanCheck(irw, iday, ichan, cchan)) {
                        st += "<td class='ms-apptsingle' " + this.DayStyle(dateCur, false, false, fWeekly) + '><span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + ".MoveToDay(" + String(dateCur.getUTCFullYear()) + "," + String(dateCur.getUTCMonth() + 1) + "," + String(dateCur.getUTCDate()) + ")") + ">" + this.dopt.L_More_Text + "</span></td>\r";
                    }
                    else {
                        span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
                        if (span != null) {
                            var stClass3 = "ms-appt";

                            if (!span.evt.multiDay)
                                stClass3 = "ms-apptsingle" + this.DayStyle(dateCur, false, false, fWeekly);
                            st += "<td class=" + stClass3 + " colspan=" + String(span.cbucket) + " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>" + StURL(span.evt.stURL, span.evt.stTitle) + "</nobr></td>\r";
                            iday += span.cbucket - 1;
                        }
                        else {
                            st += "<td class='ms-calMid'" + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>\r";
                        }
                    }
                }
                st += "</tr>\r";
                st += "<tr>\r";
                var stClass4;

                if (ichan == cchan - 1)
                    stClass4 = "ms-CalBot";
                else
                    stClass4 = "ms-CalSpacer";
                for (iday = 0; iday < 7; iday++) {
                    this.SetDateFromGrid(dateCur, irw, iday);
                    st += "<td class=" + stClass4 + this.DayStyle(dateCur, ichan == cchan - 1, false, fWeekly) + ">&nbsp;</td>\r";
                }
                st += "</tr>\r";
            }
        }
    }
    st += "</table>";
    return st;
}
function CalSpanCheck(irw, iday, ichan, cchan) {
ULSw7Q:
    ;
    var span;
    var i;
    var iMax;

    if (this.IchanNext(irw, iday, iday) > cchan)
        return true;
    span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
    if (span != null) {
        iMax = span.cbucket + iday;
        if (iMax > 7)
            iMax = 7;
        for (i = iday + 1; i < iMax; i++) {
            if (this.IchanNext(irw, i, i) > cchan)
                return true;
        }
    }
    return false;
}
function StRenderVDayEvt(evt, dopt, rowSpan) {
    var st = "";

    st += "<table height='12px' border='0' cellpadding='0' cellspacing='0' style='border-collapse: collapse; padding-right:6px' ><tr>";
    if (Boolean(evt.rgIcons) && Boolean(evt.rgIcons.length)) {
        var i;
        var icon;
        var bAllBlank = true;

        for (i in evt.rgIcons) {
            icon = evt.rgIcons[i];
            if (Boolean(icon) && icon.indexOf("blank.gif") < 0) {
                bAllBlank = false;
                break;
            }
        }
        if (!bAllBlank) {
            st += "<td valign='top' nowrap>";
            for (i in evt.rgIcons) {
                icon = evt.rgIcons[i];
                if (Boolean(icon) && Boolean(icon.length)) {
                    st += evt.rgIcons[i];
                }
            }
            st += "</td>";
        }
    }
    st += "<td nowrap>" + StURL(evt.stURL, evt.stTitle) + "</td></tr></table>";
    if (rowSpan > 2)
        st += "<nobr>" + StEvtTime(evt, dopt, false) + "</nobr>";
    if (rowSpan > 3 && evt.stLocation != null)
        st += "<br><nobr>" + STSHtmlEncode(evt.stLocation) + "</nobr>";
    return st;
}
function StEvtTime(evt, dopt, fAMPM) {
    var st = "";

    if (fAMPM)
        st += dopt.StTime(evt.actualDateStart);
    else
        st += dopt.StBareTime(evt.actualDateStart);
    if (evt.actualDateStart.getTime() != evt.actualDateEnd.getTime() && (MsFloorTime(evt.actualDateStart, Calendar.msDay, Boolean(0)) == MsFloorTime(evt.actualDateEnd, Calendar.msDay, Boolean(0)) || evt.actualDateEnd.getTime() - evt.actualDateStart.getTime() < Calendar.msDay)) {
        st += " - ";
        if (fAMPM)
            st += dopt.StTime(evt.actualDateEnd);
        else
            st += dopt.StBareTime(evt.actualDateEnd);
    }
    return st;
}
function StClickEvent(st) {
ULSw7Q:
    ;
    return 'onclick="' + st + '" ondblclick="' + st + '"';
}
function CalStBuildPicker() {
ULSw7Q:
    ;
    var st;
    var dateCur = new Date;
    var dateToday = this.dopt.Today();
    var irw;
    var iday;
    var stClass;
    var ievt;

    st = '<table ONSELECTSTART="return false;" class="ms-datepicker" cellpadding="2" cellspacing="0" border="1">\r';
    var stTDHigh = '<td style="cursor:pointer;" onmouseover="Highlight(this, \'yellow\', \'black\');" onmouseout="Highlight(this, \'\', \'\');" ';

    st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveMonth(-1)') + ' class="ms-dpnextprev">&lt;</td><td class="ms-dphead" colspan="5">' + this.StMonthYear() + '</td>' + stTDHigh + StClickEvent(this.stObject + '.MoveMonth(1)') + ' class="ms-dpnextprev">&gt;</td></tr>';
    st += "<tr>\r";
    for (iday = 0; iday < 7; iday++) {
        st += '<td class="ms-dpdow" height="20" width="14%">' + '&nbsp;' + this.rgDOWDP((iday + this.dopt.dow) % 7) + '&nbsp;</td>\r';
    }
    st += "</tr>\r";
    for (irw = 0; irw < this.irwMax; irw++) {
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            this.SetDateFromGrid(dateCur, irw, iday);
            var rgevt = this.mpEvents[String(irw) + "." + String(iday)];
            var fHasEvent = rgevt != null;
            var yr = dateCur.getUTCFullYear();
            var mon = dateCur.getUTCMonth();
            var day = dateCur.getUTCDate();

            st += stTDHigh + StClickEvent(this.stObject + '.ClickDay(' + String(yr) + ',' + String(mon) + ',' + String(day) + ')');
            if (fHasEvent) {
                var stTips = "";

                for (ievt = 0; ievt < rgevt.length; ievt++) {
                    var myEvt = rgevt[String(ievt)];

                    stTips += myEvt.StTip(this.dopt);
                    if (ievt < rgevt.length - 1)
                        stTips += "\r";
                }
                st += " title=" + StAttrQuote(stTips);
            }
            st += ' width="14%"' + this.DPDayStyle(dateCur, fHasEvent) + '>&nbsp;' + (fHasEvent ? "<b>" : "") + String(dateCur.getUTCDate()) + (fHasEvent ? "</b>" : "") + (dateCur.getTime() == dateToday.getTime() ? "<font color='red'>" + Strings.STS.L_LittleRedDiamond_TXT + "</font>" : "&nbsp;");
            st += '</td>\r';
        }
        st += "</tr>\r";
    }
    var stTodayLink = "<a href='javascript:" + this.stObject + ".SetDate(" + String(dateToday.getUTCFullYear()) + "," + String(dateToday.getUTCMonth()) + "," + String(dateToday.getUTCDate()) + ");'>" + this.dopt.StDate(dateToday) + "</a>";

    st += "<tr><td class='ms-DPFoot' colspan='7'><font color='red'>" + Strings.STS.L_LittleRedDiamond_TXT + "</font>" + StBuildParam(Strings.STS.L_TodaysDate_Text, [stTodayLink]) + "</td></tr>";
    st += "</table>";
    return st;
}
function CalMoveDate(delta) {
ULSw7Q:
    ;
    if (this.iperiod == 2)
        this.MoveVDay(delta);
    else if (this.iperiod == 1)
        this.MoveWeek(delta);
    else
        this.MoveMonth(delta);
}
function CalMoveMonth(dmon) {
    var stURL;
    var mon = this.givenDate.getUTCFullYear() * 12 + this.givenDate.getUTCMonth() + dmon;
    var yr = Math.floor(mon / 12);

    mon = mon % 12;
    if (dmon != 0)
        stURL = StURLSetVar("CalendarDate", String(yr) + "-" + St2Digits(mon + 1) + "-1");
    else
        stURL = StURLSetVar("CalendarDate", String(yr) + "-" + St2Digits(mon + 1) + "-" + String(this.givenDate.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "month");
    this.Post(stURL);
}
function CalMoveWeek(dweek) {
    var stURL;
    var date = this.givenDate;

    date.setUTCDate(this.givenDate.getUTCDate() + 7 * dweek);
    stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "week");
    this.Post(stURL);
}
function CalMoveDay(dday) {
ULSw7Q:
    ;
    var stURL;
    var date = this.givenDate;

    date.setUTCDate(this.givenDate.getUTCDate() + dday);
    stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "day");
    this.Post(stURL);
}
function CalMoveToDay(yr, mon, day) {
ULSw7Q:
    ;
    var stURL;

    stURL = StURLSetVar("CalendarDate", yr + "-" + St2Digits(mon) + "-" + day);
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "day");
    this.Post(stURL);
}
function CalMoveToToday() {
ULSw7Q:
    ;
    var date = this.dopt.Today();
    var stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));

    this.Post(stURL);
}
function CalDoPost(stURL) {
ULSw7Q:
    ;
    if (Boolean(this.stViewID) && Boolean(this.stViewID.length))
        stURL = StURLSetVar2(stURL, "View", this.stViewID);
    SubmitFormPost(stURL, undefined, undefined);
}
function EditSeries(stEditURL) {
ULSw7Q:
    ;
    var stID = "";

    if (Boolean(stEditURL))
        stID = StSearchVar(stEditURL, "ID");
    else
        stID = StURLGetVar("ID");
    if (Boolean(stID.length)) {
        var iOccurDate = stID.indexOf(".0.");

        if (iOccurDate > 0) {
            var stURL = "";

            if (Boolean(stEditURL)) {
                stURL = window.location.href;
                var ichQ = stURL.indexOf("?");

                if (ichQ > 0)
                    stEditURL += stURL.substring(ichQ, stURL.length);
                stURL = StURLSetVar2(stEditURL, "ID", stID.substr(0, iOccurDate));
            }
            else
                stURL = StURLSetVar("ID", stID.substr(0, iOccurDate));
            window.location.href = stURL;
        }
    }
}
function EditSeriesID(stMasterID, stEditURL) {
    if (Boolean(stMasterID.length)) {
        var stURL = "";

        if (Boolean(stEditURL)) {
            stURL = window.location.href;
            var ichQ = stURL.indexOf("?");

            if (ichQ > 0)
                stEditURL += stURL.substring(ichQ, stURL.length);
            stURL = StURLSetVar2(stEditURL, "ID", stMasterID);
        }
        else
            stURL = StURLSetVar("ID", stMasterID);
        window.location.href = stURL;
    }
}
function StURLSetVar(stVar, stValue) {
ULSw7Q:
    ;
    return StURLSetVar2(window.location.href, stVar, stValue);
}
function StViewURLSetVar(viewPage, stVar, stValue) {
ULSw7Q:
    ;
    var stUrl = window.location.href;
    var p1 = stUrl.lastIndexOf("/");

    if (p1 > 0)
        stUrl = stUrl.substring(0, p1 + 1) + viewPage;
    return StURLSetVar2(stUrl, stVar, stValue);
}
function StURLGetVar(stVar) {
ULSw7Q:
    ;
    var stURL = location.href;

    return StSearchVar(stURL, stVar);
}
function StSearchVar(st, stVar) {
    var re = new RegExp("[?&]" + stVar + "=", "g");
    var ich = st.search(re);

    if (ich == -1)
        return "";
    ich += stVar.length + 2;
    var ichEnd = st.indexOf("&", ich + 1);

    if (ichEnd == -1)
        ichEnd = st.length;
    var stValue = st.substring(ich, ichEnd);

    return stValue;
}
function HighlightText(elt, stText) {
    if (stText != "") {
        elt.colorTextSav = elt.style.color;
        elt.style.color = stText;
    }
    else {
        elt.style.color = elt.colorTextSav;
    }
}
function Highlight(elt, stHighlight, stText) {
    if (stHighlight != "") {
        elt.colorBackSav = elt.style.backgroundColor;
        elt.colorTextSav = elt.style.color;
        elt.style.backgroundColor = stHighlight;
        elt.style.color = stText;
    }
    else {
        elt.style.backgroundColor = elt.colorBackSav;
        elt.style.color = elt.colorTextSav;
    }
}
function CalDPDayStyle(dateCur, fHasEvent) {
    var st = "";

    if (dateCur.getTime() == this.dateDP.getTime())
        st += " class=ms-dpselectedday";
    else if (dateCur.getUTCMonth() != this.mon)
        st += " class=ms-dpnonmonth";
    else
        st += " class=ms-dpday";
    if (fHasEvent) {
        st += ' style:"font-weight: bold;"';
    }
    return st;
}
function CalStDownlevelBuild() {
ULSw7Q:
    ;
    var st;
    var dateCur = new Date;
    var irw;
    var iday;
    var stClass;
    var ievt;

    st = '<table cellpadding="2" cellspacing="0" width="100%" border="1">\r';
    st += '<tr><td class="ms-calhead"><a class="ms-calhead" target="_self" href="javascript:' + this.stObject + '.MoveDate(-1);"><b>&lt;</b></a></td><td class="ms-calhead" colspan="5">' + this.StMonthYear() + '</td><td class="ms-calhead"><a class="ms-calhead" target="_self" href="javascript:' + this.stObject + '.MoveDate(1);"><b>&gt;</b></a></td></tr>';
    st += "<tr>\r";
    for (iday = 0; iday < 7; iday++) {
        st += '<td class="ms-calDOWDown" height="20" width="14%">' + '&nbsp;' + this.rgDOW((iday + this.dopt.dow) % 7) + "&nbsp;</td>\r";
    }
    st += "</tr>\r";
    for (irw = 0; irw < this.irwMax; irw++) {
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            this.SetDateFromGrid(dateCur, irw, iday);
            st += '<td class="ms-calDown" height="80" width="14%"' + this.DayStyle(dateCur) + '>&nbsp;' + String(dateCur.getUTCDate()) + "&nbsp;<br>\r";
            var rgevt = this.mpEvents[String(irw) + "." + String(iday)];

            if (rgevt != null) {
                for (ievt = 0; ievt < rgevt.length; ievt++) {
                    var evt = rgevt[String(ievt)];

                    st += StURL(evt.stURL, evt.stTitle) + '<br>\r';
                }
            }
            st += '</td>';
        }
        st += "</tr>\r";
    }
    st += "</table>";
    return st;
}
function CalSetDateFromGrid(date, irw, iday) {
    date.setTime(this.dateStart.getTime() + irw * Calendar.msWeek + iday * Calendar.msDay);
}
function CalEvent(dateStart, dateEnd, actualDateStart, actualDateEnd, stLocation, stDesc, stTitle, stURL, rgIcons) {
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.actualDateStart = actualDateStart;
    this.actualDateEnd = actualDateEnd;
    this.stLocation = stLocation;
    this.stDesc = stDesc;
    this.stTitle = stTitle;
    if (stTitle.length == 0)
        this.stTitle = Strings.STS.L_NoTitle_Text;
    this.stURL = stURL;
    this.rgIcons = rgIcons;
    var dayStart = MsFloorTime(dateStart, Calendar.msDay, Boolean(0));
    var dayEnd = MsFloorTime(dateEnd, Calendar.msDay, Boolean(1));

    if (Number(dayStart) < Number(dayEnd) && actualDateEnd.getTime() - actualDateStart.getTime() >= Calendar.msDay) {
        this.multiDay = true;
    }
    else
        this.multiDay = false;
    var quarterStart = MsFloorTime(dateStart, Calendar.msHour / 4, Boolean(0));
    var quarterEnd = MsFloorTime(dateEnd, Calendar.msHour / 4, Boolean(1));

    if (quarterStart < quarterEnd)
        this.multiQuarter = true;
}
function EvtFOverlap(evt) {
    return Number(evt.dateStart) <= Number(this.dateEnd) && Number(evt.dateEnd) >= Number(this.dateStart);
}
function EvtStTip(dopt) {
ULSw7Q:
    ;
    var stT;
    var stTime = StEvtTime(this, dopt, true);

    if (DateOptions.FHasTime(this.actualDateStart) || DateOptions.FHasTime(this.actualDateEnd))
        stT = StBuildParam(Strings.STS.L_Tip_Text, [stTime, this.stTitle]);
    else
        stT = this.stTitle;
    if (!FBlankString(this.stLocation))
        stT += "\r" + this.stLocation;
    if (!FBlankString(this.stDesc))
        stT += "\r" + this.stDesc;
    return stT;
}
var cGCMinimumWidth;
var cGCMinimumHeight;
var cGCMaxGCResizeCount;
var glGCObjectHeight;
var glGCObjectWidth;
var glGCResizeCounter;

function GCComputeSizing(GCObject) {
    if (TestGCObject(GCObject)) {
        var fBIDI = document.documentElement.currentStyle.direction == "rtl";
        var fBackCompat = typeof document.compatMode != "undefined" && document.compatMode == "BackCompat";
        var lGCWindowWidth = fBackCompat ? document.documentElement.scrollWidth : document.documentElement.clientWidth;
        var lGCWindowHeight = fBackCompat ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
        var lGCObjectOffsetLeft = 0;
        var lGCObjectOffsetTop = 0;

        if (fBIDI) {
            lGCObjectOffsetLeft = -180;
            lGCObjectOffsetTop = 120;
        }
        else {
            lGCObjectOffsetLeft = 32;
            lGCObjectOffsetTop = -2;
        }
        var lGCObjectWalker = GCObject.parentNode;

        while (lGCObjectWalker != document.body) {
            lGCObjectOffsetLeft += lGCObjectWalker.offsetLeft;
            lGCObjectOffsetTop += lGCObjectWalker.offsetTop;
            lGCObjectWalker = lGCObjectWalker.offsetParent;
            if (lGCObjectWalker == null)
                break;
            if (fBIDI)
                if (lGCObjectWalker.offsetLeft > 0)
                    break;
        }
        lGCObjectOffsetLeft += GCObject.parentNode.offsetLeft;
        lGCObjectOffsetTop += GCObject.parentNode.offsetTop;
        glGCObjectHeight = lGCWindowHeight - lGCObjectOffsetTop;
        if (glGCObjectHeight > lGCWindowHeight)
            glGCObjectHeight = lGCWindowHeight;
        if (glGCObjectHeight < cGCMinimumHeight)
            glGCObjectHeight = cGCMinimumHeight;
        if (fBIDI) {
            glGCObjectWidth = lGCWindowWidth + lGCObjectOffsetLeft;
        }
        else
            glGCObjectWidth = lGCWindowWidth - lGCObjectOffsetLeft;
        if (glGCObjectWidth > lGCWindowWidth)
            glGCObjectWidth = lGCWindowWidth;
        if (glGCObjectWidth < cGCMinimumWidth)
            glGCObjectWidth = cGCMinimumWidth;
    }
}
function GCResizeGridControl(GCObject) {
    if (TestGCObject(GCObject)) {
        var lGCOldObjectHeight = glGCObjectHeight;
        var lGCOldglGCObjectWidth = glGCObjectWidth;

        GCComputeSizing(GCObject);
        if (lGCOldObjectHeight != glGCObjectHeight)
            GCObject.height = String(glGCObjectHeight);
        if (lGCOldglGCObjectWidth != glGCObjectWidth)
            GCObject.width = String(glGCObjectWidth);
    }
}
function GCWindowResize(GCObject) {
ULSw7Q:
    ;
    if (TestGCObject(GCObject)) {
        glGCResizeCounter = 0;
        GCResizeGridControl(GCObject);
    }
}
function GCOnResizeGridControl(GCObject) {
ULSw7Q:
    ;
    if (TestGCObject(GCObject)) {
        if (glGCResizeCounter < cGCMaxGCResizeCount) {
            glGCResizeCounter++;
            GCResizeGridControl(GCObject);
        }
    }
}
function _GCActivateAndFocus(GCObject) {
ULSw7Q:
    ;
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.SetActive != "undefined") {
            GCObject.SetActive();
        }
        if (typeof GCObject.Focus != "undefined") {
            GCObject.Focus();
        }
    }
}
function _GCNavigateToNonGridPage() {
ULSw7Q:
    ;
    var gridSet;
    var strDocUrl = window.location.href;
    var gridPart = strDocUrl.match(new RegExp("ShowInGrid="));

    if (null != gridPart) {
        gridSet = /ShowInGrid=\w*/;
        strDocUrl = strDocUrl.replace(gridSet, "");
    }
    var idxQuery = strDocUrl.indexOf("?");

    if (idxQuery != -1) {
        var idxQry2 = strDocUrl.indexOf("?", idxQuery + 1);

        if (idxQry2 != -1)
            strDocUrl = strDocUrl.slice(0, idxQry2);
        strDocUrl = strDocUrl + "&";
    }
    else
        strDocUrl = strDocUrl + "?";
    strDocUrl = strDocUrl + "ShowInGrid=False";
    window.location.replace(STSPageUrlValidation(strDocUrl));
}
function GCAddNewColumn(GCObject, path) {
    if (TestGCObject(GCObject)) {
        var source = window.location.href;
        var listName = typeof GCObject.Name != "undefined" ? GCObject.Name : "";
        var colName = typeof GCObject.SelectedColumnUniqueName != "undefined" ? GCObject.SelectedColumnUniqueName : "";
        var ltr = typeof GCObject.RightToLeft != "undefined" ? GCObject.RightToLeft : "";
        var viewGUID = typeof GCObject.ViewGUID != "undefined" ? GCObject.ViewGUID : "";
        var listServerTemplate = typeof GCObject.ServerTemplate != "undefined" ? GCObject.ServerTemplate : "";
        var page = "FldNew.aspx";

        if (listServerTemplate == "102") {
            page = "QstNew.aspx";
        }
        path = path + "/_layouts/15/" + page + "?List=" + listName + "&View=" + viewGUID + "&Source=" + source + "&RelativeToField=" + colName + "&LTR=" + ltr;
        window.location.href = path;
    }
}
function GCEditDeleteColumn(GCObject, path) {
    if (TestGCObject(GCObject)) {
        var source = window.location.href;
        var listName = typeof GCObject.Name != "undefined" ? GCObject.Name : "";
        var colName = typeof GCObject.SelectedColumnUniqueName != "undefined" ? GCObject.SelectedColumnUniqueName : "";
        var listServerTemplate = typeof GCObject.ServerTemplate != "undefined" ? GCObject.ServerTemplate : "";
        var page = "FldEdit.aspx";

        if (listServerTemplate == "102") {
            page = "QstEdit.aspx";
        }
        path = path + "/_layouts/15/" + page + "?List=" + listName + "&Field=" + colName + "&Source=" + source;
        window.location.href = path;
    }
}
var objGCGlobal;

function GCShowTaskPane() {
ULSw7Q:
    ;
    if (objGCGlobal != null) {
        objGCGlobal.DisplayTaskPane = true;
        objGCGlobal = null;
    }
}
function GCShowHideTaskPane(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.DisplayTaskPane != undefined) {
            var state = GCObject.DisplayTaskPane;

            GCObject.DisplayTaskPane = !state;
            if (!state) {
                objGCGlobal = GCObject;
                window.setTimeout("GCShowTaskPane()", 5);
            }
        }
    }
}
function GCShowHideTotalsRow(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.DisplaySheetTotals != "undefined") {
            var state = GCObject.DisplaySheetTotals;

            GCObject.DisplaySheetTotals = !state;
        }
    }
}
function GCGridNewRow(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.SelectNewRow != "undefined") {
            GCObject.SelectNewRow();
        }
    }
}
function GCRefresh(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.Refresh != "undefined") {
            GCObject.Refresh();
        }
    }
}
function GCNewFolder(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.NewFolder != "undefined") {
            GCObject.NewFolder();
        }
    }
}
function PositionInfo(positionLeft, positionTop, positionWidth, positionHeight) {
    this.left = positionLeft;
    this.top = positionTop;
    this.width = positionWidth;
    this.height = positionHeight;
}
function PositionInfo_InitializePrototype() {
ULSw7Q:
    ;
    PositionInfo.prototype.left = 0;
    PositionInfo.prototype.top = 0;
    PositionInfo.prototype.width = 0;
    PositionInfo.prototype.height = 0;
}
function CUIInfo(menuItem, command, enabledCommands) {
    menuItem.CUICommand = command;
    menuItem.CUIEnabledCommands = enabledCommands;
}
function resetExecutionState() {
ULSw7Q:
    ;
    IsMenuShown = false;
    itemTable = null;
    imageCell = null;
    onKeyPress = false;
    currentCtx = null;
    currentEditMenu = null;
    currentItemID = null;
    downArrowText = null;
    resetItemGlobals();
}
function resetItemGlobals() {
ULSw7Q:
    ;
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    currentItemOpenApp = null;
    currentItemCanModify = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null;
}
var ecbManager;

function IsMenuEnabled() {
ULSw7Q:
    ;
    return browseris.ie55up || browseris.nav6up || browseris.safari125up;
}
function GetSelectedElement(elem, tagName, tagAlt) {
    while (elem != null && elem.tagName != tagName && (tagAlt == null || elem.tagName != tagAlt))
        elem = elem.parentNode;
    return elem;
}
function setupMenuContext(ctxt) {
    currentCtx = ctxt;
}
function setupMenuContextName(strCtx) {
    var lctx;

    try {
        eval("lctx = " + strCtx + ";");
    }
    catch (e) {
        eval("lctx = g_ctxDict['" + strCtx + "'];");
    }
    setupMenuContext(lctx);
}
function FindSTSMenuTable(elm, strSearch) {
    var str = elm.getAttribute(strSearch);

    while (elm != null && (str == null || str == "")) {
        elm = GetSelectedElement(elm.parentNode, "TABLE", "DIV");
        if (elm != null)
            str = elm.getAttribute(strSearch);
    }
    return elm;
}
function OnLinkDeferCall(elm) {
    if (!IsMenuEnabled())
        return false;
    elm.onfocusout = OutItem;
    elm.onkeydown = PopMenu;
    var elmTmp = FindSTSMenuTable(elm, "CTXName");

    if (elmTmp == null)
        return false;
    OnItem(elmTmp);
    return false;
}
function StartDeferItem(elm) {
    if (elm != itemTable) {
        itemTableDeferred = elm;
        var isTable = elm.tagName == "TABLE";

        if (isTable) {
            elm.onmouseout = EndDeferItem;
            elm.onclick = DeferredOnItem;
            elm.oncontextmenu = DeferredOnItem;
        }
        else {
            var par = elm.parentNode;

            if (par.getAttribute("IsCallout") != "TRUE") {
                par.onmouseout = EndDeferItem;
                par.oncontextmenu = DeferredOnItem;
            }
        }
    }
}
function IsAjaxMenu(e) {
    var eventType = e.getAttribute("eventtype");

    if (eventType != null && (eventType == 5 || eventType == 3 || eventType == 4))
        return false;
    var str = e.className;

    if (str != null && str.length > 0) {
        var rg = str.split(" ");

        if (rg != null && rg.length > 1 && rg[rg.length - 1] == "itx")
            return true;
    }
    return false;
}
function DeferredOnItem(e) {
    var elm = itemTableDeferred;

    if (elm != null) {
        MenuHtc_hide();
        OnItem(elm);
        if (IsAjaxMenu(elm))
            CreateAjaxMenu(e);
        else
            CreateMenu(e);
        return false;
    }
    return undefined;
}
function EndDeferItem() {
ULSw7Q:
    ;
    var elm = itemTableDeferred;

    if (elm != null) {
        itemTableDeferred = null;
        var isTable = elm.tagName == "TABLE";

        if (isTable) {
            elm.onmouseout = null;
            elm.onclick = null;
            elm.oncontextmenu = null;
        }
        else {
            var par = elm.parentNode;

            par.onmouseout = null;
            par.onclick = null;
            par.oncontextmenu = null;
        }
    }
}
function GetLastChildElement(e) {
    for (var i = e.childNodes.length - 1; i >= 0; i--) {
        if (e.childNodes[i].nodeType == 1)
            return e.childNodes[i];
    }
    return null;
}
function CreateHiddenCtxMenu(td, outHandler) {
    return CreateCtxImg_Helper(td, outHandler, false);
}
function CreateCtxImg(td, outHandler) {
    return CreateCtxImg_Helper(td, outHandler, true);
}
function CreateCtxImg_Helper(td, outHandler, showCtxImage) {
    var div = FindCtxImg(td);

    if (div != null && typeof div.shown == "boolean" && div.shown == true)
        return div;
    if (div == null) {
        div = document.createElement("DIV");
        div.className = "s4-ctx";
        var rg = [];

        rg.push("<span>\u00a0</span>");
        rg.push("<a onfocus='");
        if (td.tagName == "TD") {
            rg.push("OnChildItem(this.parentNode.parentNode); return false;'");
        }
        else if (td.tagName == "TH") {
            rg.push("OnChildColumn(this.parentNode.parentNode); return false;'");
        }
        else {
            rg.push("return false;'");
        }
        rg.push("href='javascript:;' onclick='PopMenuFromChevron(event); return false;' title='");
        rg.push(Strings.STS.L_OpenMenu_Text + "'></a>");
        rg.push("<span>\u00a0</span>");
        div.innerHTML = rg.join("");
        delete rg;
        td.appendChild(div);
    }
    if (typeof div.shown == "undefined") {
        var spans = div.getElementsByTagName("SPAN");
        var spansLen = spans.length;

        for (var i = 0; i < spansLen; i++) {
            if (browseris.ie && browseris.iever == 6)
                spans[i].style.lineHeight = "1px";
        }
        var ctxImgLink = (div.getElementsByTagName("A"))[0];

        ctxImgLink.onfocusout = outHandler;
        var menuImgTag = (ctxImgLink.getElementsByTagName("img"))[0];
        var newImgElem = menuImgTag == null;

        if (newImgElem) {
            menuImgTag = document.createElement("img");
        }
        menuImgTag.style.visibility = "hidden";
        if (td.getAttribute("IsECB") == "TRUE" || td.getAttribute("IsCallout") == "TRUE" || td.getAttribute("role") == "gridcell")
            menuImgTag.src = !IsElementRtl(td) ? GetThemedImageUrl("ecbbutton.png") : GetThemedImageUrl("ecbbuttonrtl.png");
        else
            menuImgTag.src = GetThemedImageUrl("ecbarw.png");
        menuImgTag.alt = Strings.STS.L_OpenMenu_Text;
        menuImgTag.setAttribute("ms-jsgrid-click-passthrough", "true");
        if (newImgElem) {
            ctxImgLink.appendChild(menuImgTag);
        }
    }
    if (showCtxImage) {
        ShowCtxImg(div, true, td);
    }
    return div;
}
function FindCtxImg(td) {
    var div = null;
    var i;
    var children = td.childNodes;
    var childrenLen = children.length;

    for (i = 0; i < childrenLen; i++) {
        var child = children[i];

        if (child.nodeType == 1 && child.className.indexOf("s4-ctx") != -1) {
            div = child;
            break;
        }
        else {
            div = FindCtxImg(child);
            if (div != null) {
                break;
            }
        }
    }
    return div;
}
function RemoveCtxImg(td) {
    var div = FindCtxImg(td);

    if (div != null) {
        ShowCtxImg(div, false, td);
    }
}
function ShowCtxImg(div, flag, td) {
    EnsureScriptFunc("mQuery.js", "m$", function() {
    ULSw7Q:
        ;
        var link = null;
        var img = null;

        if (div != null)
            link = (div.getElementsByTagName("A"))[0];
        if (link != null)
            img = (link.getElementsByTagName("IMG"))[0];
        if (img != null) {
            var isHeader = td.tagName == "TH";

            if (flag == true) {
                AddCssClassToElement(div, "s4-ctx-show");
                if (isHeader) {
                    AddCssClassToElement(td, "ms-headerCellStyleHover");
                }
                PositionCtxImg(div, td);
                img.style.visibility = "visible";
                div.shown = true;
                ChevronContainer = td;
                if (div["onmouseover"] == null)
                    div.onmouseover = function(e) {
                        if (!HasCssClass(div, "s4-ctx-show-hover")) {
                            AddCssClassToElement(div, "s4-ctx-show-hover");
                        }
                    };
                div.onmouseout = function(e) {
                    if (!IsMenuOn() && !IsCallOutOn() && !IsFilterMenuOn()) {
                        if (e == null) {
                            e = window.event;
                        }
                        var tag = Boolean(e.relatedTarget) ? e.relatedTarget : e.toElement;

                        while (tag != null && tag.tagName != 'BODY') {
                            if (tag == this) {
                                return;
                            }
                            tag = tag.parentNode;
                        }
                        if (tag != null) {
                            RemoveCssClassFromElement(div, "s4-ctx-show-hover");
                        }
                    }
                };
            }
            else {
                img.style.visibility = "hidden";
                RemoveCssClassFromElement(div, "s4-ctx-show");
                RemoveCssClassFromElement(div, "s4-ctx-show-hover");
                div.shown = false;
                div.onmouseout = null;
                ChevronContainer = null;
                if (isHeader) {
                    RemoveCssClassFromElement(td, "ms-headerCellStyleHover");
                    RemoveCssClassFromElement(td, "ms-headerCellStylePressed");
                    RemoveCssClassFromElement(td, "ms-headerCellStyleMenuOpen");
                }
            }
        }
    });
}
function GetPosition(node) {
    if (node == null) {
        return null;
    }
    var left = 0;
    var t = 0;
    var width = 0;
    var height = 0;
    var parentNode = null;
    var offsetParent = null;

    offsetParent = node.offsetParent;
    var originalObject = node;
    var el = node;

    while (el.parentNode != null) {
        el = el.parentNode;
        if (el.offsetParent != null) {
            var considerScroll = true;

            if (typeof el.scrollTop == "number" && el.scrollTop > 0) {
                t -= el.scrollTop;
            }
            if (typeof el.scrollLeft == "number" && el.scrollLeft > 0) {
                left -= el.scrollLeft;
            }
        }
        if (el == offsetParent) {
            left += node.offsetLeft;
            if (typeof el.clientLeft == "number" && el.nodeName != "TABLE") {
                left += el.clientLeft;
            }
            t += node.offsetTop;
            if (typeof el.clientTop == "number" && el.nodeName != "TABLE") {
                t += el.clientTop;
            }
            node = el;
            if (node.offsetParent == null) {
                if (typeof node.offsetLeft == "number") {
                    left += node.offsetLeft;
                }
                if (typeof node.offsetTop == "number") {
                    t += node.offsetTop;
                }
            }
            offsetParent = node.offsetParent;
        }
    }
    if (typeof originalObject.offsetWidth == "number") {
        width = originalObject.offsetWidth;
    }
    if (typeof originalObject.offsetHeight == "number") {
        height = originalObject.offsetHeight;
    }
    return new PositionInfo(left, t, width, height);
}
function GetElemHeight(elem, bIncludePadding, bIncludeBorder, bIncludeMargin) {
ULSw7Q:
    ;
    var bIE9Plus = browseris.ie9standardUp;

    if (!bIE9Plus && bIncludePadding && !bIncludeBorder && !bIncludeMargin) {
        return elem.clientHeight;
    }
    var elemStyle = window.getComputedStyle(elem, null);
    var elemHeight = getWidthFromPxString(elemStyle.height);

    if (bIE9Plus || bIncludePadding) {
        var padding = getWidthFromPxString(elemStyle.paddingTop) + getWidthFromPxString(elemStyle.paddingBottom);

        if (bIE9Plus) {
            elemHeight = Math.max(elem.clientHeight, elemHeight + padding) - padding;
        }
        if (bIncludePadding) {
            elemHeight += padding;
        }
    }
    if (bIncludeBorder) {
        elemHeight += getWidthFromPxString(GetCurrentEltStyle(elem, "border-top-width")) + getWidthFromPxString(GetCurrentEltStyle(elem, "border-bottom-width"));
    }
    var margins = 0;

    if (bIncludeMargin) {
        elemHeight += getWidthFromPxString(elemStyle.marginTop) + getWidthFromPxString(elemStyle.marginBottom);
    }
    return elemHeight;
}
function PositionCtxImg(div, td) {
    var t = 0;
    var sideOffset = 0;
    var bRelativePositioning = HasCssClass(div.parentNode, "ms-positionRelative");
    var pos = GetPosition(td);
    var posDiv = GetPosition(div.offsetParent);

    if (!window.browseris["chrome"] && getCurrentEltStyleByNames(td, ["border-collapse", "borderCollapse"]) == "collapse") {
        var averageBorderWidth = td.offsetHeight - td.clientHeight;

        pos.height += averageBorderWidth;
        pos.top -= averageBorderWidth;
    }
    var posOffset = (m$(bRelativePositioning ? td : td)).offset();
    var posDivOffset = (m$(bRelativePositioning ? div.parentNode : div.offsetParent)).offset();

    t = posOffset.top - posDivOffset.top;
    if (bRelativePositioning) {
        var sidePaddingString;
        var sideBorderString;

        if (!IsElementRtl(td)) {
            sidePaddingString = getCurrentEltStyleByNames(td, ["padding-right", "paddingRight"]);
            sideBorderString = getCurrentEltStyleByNames(td, ["border-right-width", "borderRightWidth"]);
        }
        else {
            sidePaddingString = getCurrentEltStyleByNames(td, ["padding-left", "paddingLeft"]);
            sideBorderString = getCurrentEltStyleByNames(td, ["border-left-width", "borderLeftWidth"]);
        }
        var sidePadding = getWidthFromPxString(sidePaddingString);
        var sideBorderWidth = getWidthFromPxString(sideBorderString);

        sideOffset = -sidePadding - sideBorderWidth;
    }
    else {
        sideOffset = posOffset.left - posDivOffset.left;
        if (!IsElementRtl(td)) {
            sideOffset = sideOffset + td.offsetWidth - div.offsetWidth;
        }
        t += div.offsetParent.scrollTop;
        sideOffset += div.offsetParent.scrollLeft;
    }
    var sideOffsetString = String(sideOffset) + "px";
    var divStyle = div.style;

    divStyle.top = String(t) + "px";
    if (!IsElementRtl(td) && bRelativePositioning) {
        divStyle.right = sideOffsetString;
    }
    else {
        divStyle.left = sideOffsetString;
    }
    var height = GetElemHeight(td, true, false, false);

    if (browseris.ie9standardUp) {
        var tr = GetAncestorByTagNames(td, ["TR", "TH"]);

        if (tr != null && tr.nextSibling != null) {
            var heightCorrection = tr.nextSibling.offsetTop - tr.offsetTop - tr.offsetHeight;

            height += heightCorrection;
        }
    }
    divStyle.height = String(height) + "px";
    divStyle.lineHeight = String(Math.max(height - 2, 0)) + "px";
    divStyle.margin = "0px";
}
function getCurrentEltStyleByNames(elem, styleNames) {
    var style = null;
    var i = 0;

    while (i < styleNames.length) {
        style = GetCurrentEltStyle(elem, styleNames[i]);
        if (style != null) {
            break;
        }
        i++;
    }
    return style;
}
function getWidthFromPxString(pxString) {
    if (typeof pxString != "string")
        return 0;
    var trimmedPxString = pxString.trim();
    var pxWidth = Number((trimmedPxString.substring(0, trimmedPxString.length - 2)).trim());

    return isNaN(pxWidth) ? 0 : pxWidth;
}
function IsInCtxImg(obj) {
    while (obj != null && obj.tagName != "TD" && obj.tagName != "BODY" && obj.className.indexOf("s4-ctx") == -1)
        obj = obj.parentNode;
    if (obj != null && obj.className.indexOf("s4-ctx") != -1)
        return obj;
    return null;
}
function OnItemDeferCall(elm) {
    if (!IsMenuEnabled()) {
        return false;
    }
    if (IsMenuOn()) {
        StartDeferItem(elm);
        return false;
    }
    if (itemTable == elm)
        return undefined;
    if (itemTable != null)
        OutItem();
    itemTable = elm;
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    var isTable = itemTable.tagName == "TABLE";
    var createCtx = new Function("setupMenuContextName('" + itemTable.getAttribute("CTXName") + "');");

    createCtx();
    var ctxt = currentCtx;
    var isAjax = IsAjaxMenu(itemTable);

    if (isTable) {
        if (browseris.nav6up)
            itemTable.className = "ms-selectedtitlealternative";
        else
            itemTable.className = "ms-selectedtitle";
        if (isAjax)
            itemTable.className = itemTable.className + " itx";
    }
    var par = itemTable.parentNode;

    while (par.tagName != "TD" && par.tagName != "BODY")
        par = par.parentNode;
    var divImg = null;

    if (!isTable) {
        if (ctxt.IsClientRendering != true) {
            divImg = CreateCtxImg(par, OutItem);
        }
    }
    var fnCreate = isAjax ? CreateAjaxMenu : CreateMenu;

    if (isTable) {
        itemTable["onclick"] = fnCreate;
        itemTable["oncontextmenu"] = fnCreate;
    }
    else {
        var bNoContextMenu = false;

        if (divImg != null) {
            if (divImg.onclick == null)
                divImg.onclick = fnCreate;
            else
                bNoContextMenu = true;
        }
        if (!bNoContextMenu)
            par.oncontextmenu = fnCreate;
        else if (divImg != null)
            par.oncontextmenu = divImg.onclick;
    }
    if (isTable)
        itemTable["onmouseout"] = OutItem;
    else if (par.getAttribute("IsECB") != "TRUE" || itemTable["onmouseover"] != null)
        par.onmouseout = OutItem;
    if (isTable) {
        var titleRow;

        titleRow = GetFirstChildElement(GetFirstChildElement(itemTable));
        if (titleRow != null) {
            imageCell = GetLastChildElement(titleRow);
        }
        if (ctxt.listTemplate == 200) {
            if (itemTable.getAttribute("menuType") == "Orphaned")
                downArrowText = Strings.STS.L_Reschedule_Text;
        }
        else
            downArrowText = Strings.STS.L_Edit_Text;
        var imageTag = GetFirstChildElement(imageCell);

        imageTag.src = ctxt.imagesPath + "menudark.gif";
        imageTag.alt = downArrowText;
        imageTag.style.visibility = "visible";
        imageCell.className = "ms-menuimagecell";
    }
    return false;
}
function OutItem(evt) {
    var par = null;

    if (evt != null && typeof evt.callOut != 'undefined' && Boolean(evt.callOut) && ecbManager.callOutPar != null)
        par = ecbManager.callOutPar;
    if (!IsMenuOn() && (itemTable != null || par != null)) {
        var isTable = itemTable != null && itemTable.tagName == "TABLE";

        if (isTable) {
            if (IsAjaxMenu(itemTable))
                itemTable.className = "ms-unselectedtitle itx";
            else
                itemTable.className = "ms-unselectedtitle";
            itemTable["onclick"] = null;
            itemTable["oncontextmenu"] = null;
            itemTable["onmouseout"] = null;
        }
        else {
            if (par == null)
                par = GetAncestorByTagNames(itemTable, ["TD", "TH"]);
            if (par != null && par.getAttribute != null && par.getAttribute("IsCallout") == "TRUE") {
                if (typeof CalloutManager === "object" && calloutManager.containsOneCalloutOpen(par)) {
                    ecbManager.callOutPar = par;
                    return true;
                }
            }
            var toElem = null;

            if (evt == null)
                evt = window.event;
            if (evt != null) {
                toElem = typeof evt.toElement != "undefined" && evt.toElement != null ? evt.toElement : evt.relatedTarget;
                if (par != null && toElem != null && IsContained(toElem, par))
                    return true;
            }
            if (par != null) {
                par.onclick = null;
                par.oncontextmenu = null;
                par.onmouseout = null;
                RemoveCtxImg(par);
            }
        }
        if (isTable && imageCell != null) {
            (GetFirstChildElement(imageCell)).style.visibility = "hidden";
            imageCell.className = "";
        }
        resetExecutionState();
    }
    return undefined;
}
function IsContained(elem, ancestor) {
    if (elem == ancestor)
        return true;
    var elemArray = ancestor.getElementsByTagName(elem.tagName);

    for (var i = 0; i < elemArray.length; i++) {
        if (elem == elemArray[i])
            return true;
    }
    return false;
}
function IsMenuOn() {
ULSw7Q:
    ;
    if (!IsMenuShown)
        return false;
    var fIsOpen = false;

    fIsOpen = MenuHtc_isOpen(currentEditMenu);
    if (!fIsOpen)
        IsMenuShown = false;
    return fIsOpen;
}
function _ListHeaderMenu_OnMouseDown(headerCell) {
    if (headerCell != null && headerCell.tagName == "TH") {
        if (HasCssClass(headerCell, "ms-headerCellStyleHover")) {
            RemoveCssClassFromElement(headerCell, "ms-headerCellStyleHover");
            AddCssClassToElement(headerCell, "ms-headerCellStylePressed");
        }
    }
}
function _PopMenuFromChevron(e) {
ULSw7Q:
    ;
    if (e == null)
        e = window.event;
    var srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
    var itemcell = srcElement.parentNode;

    while (itemcell.tagName != "TD" && itemcell.tagName != "TH" && itemcell.tagName != "BODY")
        itemcell = itemcell.parentNode;
    var elements;
    var i;

    if (itemcell.tagName == "TD") {
        elements = itemcell.getElementsByTagName("DIV");
        var itemDiv = null;

        for (i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('CtxNum') != null) {
                itemDiv = elements[i];
            }
        }
        if (itemDiv != null) {
            OnItemDeferCall(itemDiv);
        }
    }
    else if (itemcell.tagName == "TH") {
        elements = itemcell.getElementsByTagName("DIV");
        var headerdiv = null;

        for (i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('CtxNum') != null) {
                headerdiv = elements[i];
            }
        }
        if (headerdiv != null) {
            OnMouseOverFilterDeferCall(headerdiv);
        }
    }
    return false;
}
function PopMenu(e) {
    if (!IsMenuEnabled())
        return true;
    if (e == null)
        e = window.event;
    var nKeyCode;

    if (e == null)
        return true;
    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (!IsMenuOn() && (e.shiftKey && nKeyCode == 13 || e.altKey && nKeyCode == 40)) {
        onKeyPress = true;
        var itemlink = Boolean(e.srcElement) ? e.srcElement : e.target;
        var itemdiv = FindSTSMenuTable(itemlink, "CTXName");

        if (itemdiv == null)
            return false;
        OnItemDeferCall(itemdiv);
        if (IsAjaxMenu(itemdiv))
            CreateAjaxMenu(e);
        else
            CreateMenu(e);
        onKeyPress = false;
        return false;
    }
    else
        return true;
}
function CreateMenuEx(ctxt, container, e, flipTopLevelMenu) {
    if (container == null)
        return undefined;
    IsMenuShown = true;
    document.body.onclick = null;
    var m;

    m = BuildMenu(ctxt);
    m.setAttribute("hideicons", "true");
    currentEditMenu = m;
    container.onmouseout = null;
    var itemCell = null;
    var div = null;

    if (container.tagName == "SPAN" && HasCssClass(container, "js-callout-ecbMenu")) {
        itemCell = container;
    }
    else {
        div = FindCtxImg(container);
        if (div == null) {
            itemCell = GetAncestorByTagNames(container, ["TD", "TR"]);
            if (itemCell == null) {
                itemCell = container;
            }
            else {
                div = FindCtxImg(container);
            }
        }
    }
    if (div != null && typeof div.shown == "boolean" && div.shown == false)
        ShowCtxImg(div, true, itemCell);
    OMenu(m, itemCell, null, flipTopLevelMenu, -1, false, false, e);
    if (itemTable != null && itemTable.tagName != "DIV") {
        var ctxAttribute = itemTable.getAttribute("CTXName");

        if (ctxAttribute == undefined || ctxAttribute == "")
            itemTable = GetSelectedElement(container, "TABLE", "DIV");
    }
    if (itemCell.tagName == "TD")
        itemCell.onclick = SingleItemSelect;
    m._onDestroy = OutItem;
    if (e != null)
        e.cancelBubble = true;
    return false;
}
function BuildMenuWithInit(ctxt) {
    resetItemGlobals();
    setDocType();
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    currentItemCheckedOutUserId = typeof itemTable.COUId == "string" ? itemTable.COUId : null;
    currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    return BuildMenu(ctxt);
}
function BuildMenu(ctxt) {
    var m = CMenu(currentItemID + "_menu");

    if (m == null)
        return null;
    else if (Boolean(ctxt.isVersions))
        AddVersionMenuItems(m, ctxt);
    else if (ctxt.listTemplate == 121)
        AddSolutionsCatalogMenuItems(m, ctxt);
    else if (ctxt.listBaseType == 1)
        AddDocLibMenuItems(m, ctxt);
    else if (ctxt.listTemplate == 200)
        AddMeetingMenuItems(m, ctxt);
    else
        AddListMenuItems(m, ctxt);
    InsertFeatureMenuItems(m, ctxt);
    SP.SOD.notifyEventAndExecuteWaitingJobs("CleanupContextMenu", [m, ctxt]);
    return m;
}
function GetParentLinkFromEvent(e) {
    if (e == null)
        e = window.event;
    var srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
    var anchorElement = GetSelectedElement(srcElement, "A");

    if (anchorElement !== null && anchorElement.tagName === "A")
        return anchorElement;
    else
        return null;
}
function isInvalidAjaxMenuElement(element) {
ULSw7Q:
    ;
    return element === null || typeof element === "undefined" || onKeyPress == false && IsInCtxImg(element) == null && element.className.indexOf("js-callout-action") === -1 && element.className.indexOf("ms-lstItmLinkAnchor") === -1 && (element.tagName == "A" || element.parentNode.tagName == "A");
}
function CreateAjaxMenu(e, fUseMousePosition) {
    if (!IsContextSet())
        return undefined;
    if (e == null)
        e = window.event;
    if (itemTable == null || itemTable.tagName == "TABLE" && imageCell == null)
        return undefined;
    var srcElement = GetParentLinkFromEvent(e);

    if (isInvalidAjaxMenuElement(srcElement)) {
        srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
        if (isInvalidAjaxMenuElement(srcElement)) {
            return undefined;
        }
    }
    var itab = itemTable;
    var p = itab.parentNode;

    if (p != null && parseInt(p.getAttribute('creatingAjax')) == 1)
        return undefined;
    itab.parentNode.setAttribute('creatingAjax', '1');
    var ctxt = currentCtx;
    var evtCopy = null;

    if (fUseMousePosition && e != null && e.clientX != null && e.clientY != null && e.clientX != 0 && e.clientY != 0) {
        evtCopy = new Object();
        evtCopy.clientX = e.clientX;
        evtCopy.clientY = e.clientY;
    }
    var fn = function(ctxt2, tab) {
    ULSw7Q:
        ;
        if (tab != undefined) {
            if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
                if (tab["FileRef"] != undefined)
                    itab.setAttribute("Url", tab["FileRef"]);
                if (tab["FileDirRef"] != undefined)
                    itab.setAttribute("DRef", tab["FileDirRef"]);
                if (tab["File_x0020_Type"] != undefined)
                    itab.setAttribute("Ext", tab["File_x0020_Type"]);
                if (tab["HTML_x0020_File_x0020_Type"] != undefined)
                    itab.setAttribute("Type", tab["HTML_x0020_File_x0020_Type"]);
                if (tab["FSObjType"] != undefined)
                    itab.setAttribute("OType", tab["FSObjType"]);
                if (tab["CheckedOutUserId"] != undefined)
                    itab.setAttribute("COUId", tab["CheckedOutUserId"]);
                if (tab["_HasCopyDestinations"] != undefined)
                    itab.setAttribute("HCD", tab["_HasCopyDestinations"]);
                if (tab["_CopySource"] != undefined)
                    itab.setAttribute("CSrc", tab["_CopySource"]);
                if (tab["_ModerationStatus"] != undefined)
                    itab.setAttribute("MS", tab["_ModerationStatus."]);
                if (tab["ContentType"] != undefined)
                    itab.setAttribute("CType", tab["ContentType"]);
                if (tab["ContentTypeId"] != undefined)
                    itab.setAttribute("CId", tab["ContentTypeId"]);
                if (tab["_UIVersion"] != undefined)
                    itab.setAttribute("UIS", tab["_UIVersion"]);
                if (tab["_SourceUrl"] != undefined)
                    itab.setAttribute("SUrl", tab["_SourceUrl"]);
                if (tab["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"] != undefined)
                    itab.setAttribute("Icon", tab["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"]);
                if (ctxt.ListSchema.IsDocLib) {
                    if (tab["serverurl.progid"] != undefined)
                        itab.setAttribute("sred", tab["serverurl.progid"]);
                    if (tab["ctxt.ListSchema.DefaultItemOpen"] != undefined)
                        itab.setAttribute("defaultio", ctxt.ListSchema.DefaultItemOpen);
                    if (tab["IsCheckedoutToLocal"] != undefined)
                        itab.setAttribute("cout", tab["IsCheckedoutToLocal"]);
                }
                OnItemDeferCall(itab);
                CreateMenuEx(ctxt2, itab, evtCopy, false);
                itab.parentNode.removeAttribute('creatingAjax');
            }
            else {
                itab.parentNode.replaceChild(tab, itab);
                tab.onclick = typeof itab.onclick != "undefined" ? itab.onclick : undefined;
                tab.onmousehover = OnItem;
                OnItemDeferCall(tab);
                CreateMenuEx(ctxt2, tab, evtCopy);
                tab.parentNode.removeAttribute('creatingAjax');
            }
        }
    };

    FetchEcbInfo(ctxt, itemTable.id, itemTable.tagName, fn);
    e.cancelBubble = true;
    return false;
}
var ecbItems;

function FetchEcbInfo(ctxt, id, tagName, fnCallback) {
    var rg = [];
    var hasCustomAction = false;
    var str = escapeUrlForCallback(ctxt.HttpRoot);

    rg.push(str);
    if (str[str.length - 1] != "/")
        rg.push("/");
    rg.push("_layouts/15/inplview.aspx?Cmd=Ctx&List=");
    rg.push(ctxt.listName);
    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
        rg.push("&CascDelWarnMessage=1");
    }
    if (ctxt.view != null) {
        rg.push("&View=");
        rg.push(ctxt.view);
    }
    rg.push("&ViewCount=");
    rg.push(ctxt.ctxId);
    if (typeof ctxt.isXslView != "undefined" && ctxt.isXslView) {
        rg.push("&IsXslView=TRUE");
        rg.push("&Field=");
        if (itemTable != null)
            rg.push(GetAttributeFromItemTable(itemTable, "Field", "Field"));
        else
            rg.push("LinkFilename");
        if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
            rg.push("&IsCSR=TRUE");
            if (Boolean(ctxt.listName)) {
                var ecbId = ecbItems + "_" + ctxt.listName.toLowerCase();

                ;
                if (document.getElementById(ecbId) == null) {
                    rg.push("&CustomAction=TRUE");
                    hasCustomAction = true;
                }
                else if (Boolean(ctxt.ExternalDataList)) {
                    CallBackWithRowData(ctxt, id, ctxt.ListData, fnCallback);
                    return;
                }
            }
        }
    }
    rg.push("&ID=");
    rg.push(id);
    var strRoot = GetUrlKeyValue("RootFolder", true, ajaxNavigate.get_href());

    if (strRoot.length > 0) {
        rg.push("&RootFolder=");
        rg.push(strRoot);
    }
    rg.push("&ListViewPageUrl=");
    var uri = new URI(ajaxNavigate.get_href(), {
        disableEncodingDecodingForLegacyCode: true
    });

    str = uri.getStringWithoutQueryAndFragment();
    rg.push(str);
    if (typeof ctxt.overrideScope != "undefined") {
        rg.push("&OverrideScope=");
        rg.push(escapeProperly(ctxt.overrideScope));
    }
    if (typeof ctxt.searchTerm != "undefined" && ctxt.searchTerm != null) {
        rg.push("&InplaceSearchQuery=");
        rg.push(escapeProperlyCore(ctxt.searchTerm, true));
    }
    else if (typeof ctxt.completedSearchTerm != "undefined" && ctxt.completedSearchTerm != null) {
        rg.push("&InplaceSearchQuery=");
        rg.push(escapeProperlyCore(ctxt.completedSearchTerm, true));
    }
    if (typeof ctxt.fullListSearch != "undefined" && ctxt.fullListSearch != null && ctxt.fullListSearch == true) {
        rg.push("&InplaceFullListSearch=true");
    }
    var strUrl = rg.join("");
    var req;

    if (window.XMLHttpRequest != null) {
        req = new XMLHttpRequest();
        req.open("POST", strUrl, true);
        req.onreadystatechange = function() {
        ULSw7Q:
            ;
            if (req.readyState != 4)
                return;
            if (req.status == 601) {
                alert(req.responseText);
            }
            else if (req.status == 503) {
                alert(Strings.STS.L_ServerBusyError);
            }
            else {
                if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
                    var strEcb = req.responseText;

                    if (hasCustomAction) {
                        var strCustomAction = '<CustomAction/>';
                        var index = strEcb.indexOf(strCustomAction);

                        if (index >= 0) {
                            var ecbDiv = document.createElement("DIV");

                            ecbDiv.innerHTML = strEcb.substring(0, index);
                            document.body.appendChild(ecbDiv);
                            strEcb = strEcb.substring(index + strCustomAction.length);
                        }
                    }
                    var newListData = null;

                    if (Boolean(ctxt.ExternalDataList)) {
                        newListData = ctxt.ListData;
                    }
                    else {
                        newListData = JSON.parse(strEcb);
                    }
                    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
                        ctxt.CascadeDeleteWarningMessage = newListData.CascadeDeleteWarningMessage;
                    }
                    CallBackWithRowData(ctxt, id, newListData, fnCallback);
                }
                else {
                    var strInner = req.responseText;
                    var div = document.createElement("DIV");

                    div.style.visibility = "hidden";
                    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
                        var cdBeginTag = '<CascadeDeleteWarningMessage>';
                        var cdEndTag = '</CascadeDeleteWarningMessage>';

                        if (strInner.startsWith(cdBeginTag)) {
                            var idx = strInner.indexOf(cdEndTag);

                            if (idx !== -1) {
                                ctxt.CascadeDeleteWarningMessage = strInner.substring(cdBeginTag.length, idx);
                                strInner = strInner.substring(idx + cdEndTag.length);
                            }
                        }
                    }
                    div.innerHTML = strInner;
                    var tabs = div.getElementsByTagName(tagName);
                    var tab;
                    var i;

                    for (i = 0; i < tabs.length; i++) {
                        tab = tabs[i];
                        if (tab.id == id)
                            break;
                    }
                    if (i == tabs.length)
                        tab = null;
                    if (tab != null) {
                        fnCallback(ctxt, tab);
                    }
                    else {
                        alert(Strings.STS.L_ItemGone);
                        RefreshPage(1);
                    }
                }
            }
        };
        req.send(null);
    }
}
function CallBackWithRowData(ctxt, id, listData, fnCallback) {
    var i;
    var rowData = undefined;

    for (i = 0; i < listData.Row.length; i++) {
        if (listData.Row[i].ID == id) {
            rowData = listData.Row[i];
            break;
        }
    }
    if (rowData != undefined)
        fnCallback(ctxt, rowData);
}
function CreateMenu(e) {
    if (!IsContextSet())
        return undefined;
    var ctxt = currentCtx;

    if (e == null)
        e = window.event;
    var srcElement = e.srcElement != null ? e.srcElement : e.target;

    if (itemTable == null || itemTable.tagName == "TABLE" && imageCell == null || onKeyPress == false && IsInCtxImg(srcElement) == null && (srcElement.tagName == "A" || srcElement.parentNode.tagName == "A"))
        return undefined;
    return CreateMenuEx(ctxt, itemTable, e);
}
function AddSendSubMenu(m, ctxt) {
    var SubmitFileConfirmation = [];

    SubmitFileConfirmation["Copy"] = Strings.STS.L_SubmitFileCopyWarning_Text;
    SubmitFileConfirmation["Move"] = Strings.STS.L_SubmitFileMoveWarning_Text;
    SubmitFileConfirmation["Link"] = Strings.STS.L_SubmitFileLinkWarning_Text;
    var strDisplayText = Strings.STS.L_Send_Text;
    var currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;
    var currentItenUnescapedUrl;
    var strExtension;

    if (currentItemFileUrl != null) {
        currentItenUnescapedUrl = unescapeProperly(currentItemFileUrl);
        currentItemEscapedFileUrl = escapeProperly(currentItenUnescapedUrl);
        strExtension = SzExtension(currentItenUnescapedUrl);
        if (strExtension != null && strExtension != "")
            strExtension = strExtension.toLowerCase();
    }
    var serverFileRedirect = itemTable.getAttribute("SRed");
    var iDefaultIO = itemTable.getAttribute("DefaultIO");

    if (iDefaultIO == "0" && !HasRights(0x0, 0x20))
        iDefaultIO = "1";
    var otherLocationMenuItemCondition = currentItemProgId != "SharePoint.WebPartPage.Document" && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20)) && strExtension != "aspx";
    var sendToEmailMenuItemCondition = HasRights(0x10, 0x0);
    var downloadACopyMenuItemCondition = currentItemFSObjType != "1" && ctxt.listBaseType == 1 && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20));

    if (!otherLocationMenuItemCondition && !sendToEmailMenuItemCondition && !downloadACopyMenuItemCondition)
        return;
    var sm = CASubM(m, strDisplayText, "", "", String(400));

    CUIInfo(sm, "SendTo", ["SendTo", "PopulateSendToMenu"]);
    sm.IsSubMenu = true;
    sm.id = "ID_Send";
    sm.style.display = "none";
    var menuOption;

    if (otherLocationMenuItemCondition) {
        if (typeof ctxt.SendToLocationName != "undefined" && ctxt.SendToLocationName != null && ctxt.SendToLocationName != "" && typeof ctxt.SendToLocationUrl != "undefined" && ctxt.SendToLocationUrl != null && ctxt.SendToLocationUrl != "") {
            var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/copy.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl + "&FldUrl=" + escapeProperly(ctxt.SendToLocationUrl);

            strAction = AddSourceToUrl(strAction) + "')";
            menuOption = CAMOpt(sm, ctxt.SendToLocationName, strAction, "");
            CUIInfo(menuOption, "SendToRecommendedLocation", ["SendToRecommendedLocation"]);
        }
        if (typeof itemTable.getAttribute("HCD") != "undefined" && itemTable.getAttribute("HCD") == "1") {
            strDisplayText = Strings.STS.L_ExistingCopies_Text;
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/updatecopies.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl;
            strAction = AddSourceToUrl(strAction) + "')";
            var strImagePath = ctxt.imagesPath + "existingLocations.gif";

            menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
            menuOption.id = "ID_ExistingCopies";
            CUIInfo(menuOption, "SendToExistingCopies", ["SendToExistingCopies"]);
        }
        strDisplayText = Strings.STS.L_OtherLocation_Text;
        strAction = "NavigateToSendToOtherLocationV4(event, '" + ctxt.HttpRoot + "/_layouts/15/copy.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = ctxt.imagesPath + "sendOtherLoc.gif";
        menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_OtherLocation";
        CUIInfo(menuOption, "SendToOtherLocation", ["SendToOtherLocation"]);
        if (typeof ctxt.OfficialFileNames == "string" && ctxt.OfficialFileNames != "") {
            var ar_officialFileNames = ctxt.OfficialFileNames.split("__HOSTSEPARATOR__");

            if (ar_officialFileNames != null) {
                for (var count = 0; count < ar_officialFileNames.length; count++) {
                    var strSerializedText = ar_officialFileNames[count];
                    var ar_OfficialFileHost = strSerializedText.split(",");

                    strDisplayText = ar_OfficialFileHost[0];
                    var index = 0;
                    var action = "Copy";

                    if (ar_OfficialFileHost.length == 3) {
                        strDisplayText = (ar_OfficialFileHost[0].replace(/%2c/g, ",")).replace(/%25/g, "%");
                        index = ar_OfficialFileHost[1];
                        action = ar_OfficialFileHost[2];
                    }
                    strAction = "if(confirm(\"" + StBuildParam(SubmitFileConfirmation[action], STSScriptEncode(strDisplayText)) + "\")!=0) SubmitFormPost('" + ctxt.HttpRoot + "/_layouts/15/SendToOfficialFile.aspx?" + "ID=" + escapeProperly(strDisplayText) + "&Index=" + String(index) + "&SourceUrl=" + currentItemEscapedFileUrl;
                    strAction = AddSourceToUrl(strAction) + "')";
                    strImagePath = "";
                    menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
                    var strRibbonCmd = "SendToOfficialFile" + String(count);

                    CUIInfo(menuOption, strRibbonCmd, [strRibbonCmd]);
                }
            }
        }
        CAMSep(sm);
    }
    if (sendToEmailMenuItemCondition) {
        strDisplayText = Strings.STS.L_SendToEmail_Text;
        currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
        var httpRootWithSlash = ctx.HttpRoot.substr(0);

        if (httpRootWithSlash[httpRootWithSlash.length - 1] != '/')
            httpRootWithSlash += '/';
        var slashLoc = -1;
        var fileUrl = "";

        slashLoc = (httpRootWithSlash.substring(8)).indexOf('/') + 8;
        fileUrl = httpRootWithSlash.substr(0, slashLoc) + escapeProperlyCore(unescapeProperly(currentItemUrl), true);
        strAction = "javascript:SendEmail('" + fileUrl + "')";
        strImagePath = ctx.imagesPath + "gmailnew.gif";
        menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
        CUIInfo(menuOption, "EmailLink", ["EmailLink"]);
        menuOption.id = "ID_SendToEmail";
    }
    if (downloadACopyMenuItemCondition) {
        if (ctx.listTemplate != 119)
            AddWorkspaceMenuItem(sm, ctx);
        if (ctx.listTemplate != 119) {
            strAction = "STSNavigate('" + ctx.HttpRoot + "/_layouts/15/download.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl + "&FldUrl=" + escapeProperly(ctx.SendToLocationUrl);
            strAction = AddSourceToUrl(strAction) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_DownloadACopy_Text, strAction, "");
            CUIInfo(menuOption, "DownloadCopy", ["DownloadCopy"]);
            menuOption.id = "ID_DownloadACopy";
        }
    }
}
function AddDocTransformSubMenu(m, ctxt) {
    if (typeof rgDocTransformers == "undefined" || rgDocTransformers == null) {
        return;
    }
    var rgDocTransformersLocal = rgDocTransformers;
    var sm = null;
    var currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var iDot = currentItemUrl.lastIndexOf(".");

    if (iDot > 0) {
        var strExtension = (currentItemUrl.substring(iDot + 1, currentItemUrl.length)).toLowerCase();
        var iTransformer;
        var fAddedTransformer = false;

        for (iTransformer = 0; iTransformer < rgDocTransformers.length; iTransformer++) {
            if (rgDocTransformers[iTransformer].ConvertFrom == strExtension) {
                var ctid = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
                var re = new RegExp("/\|" + ctid + "\|/");

                if (ctid != null && !re.test(rgDocTransformers[iTransformer].ExcludedContentTypes)) {
                    if (!fAddedTransformer) {
                        sm = CASubM(m, Strings.STS.L_DocTran_Text, ctx.imagesPath + "ConvertDocument.gif", Strings.STS.L_DocTran_Text, String(500));
                        sm.IsSubMenu = true;
                        sm.Id = "ID_ConvertDocument";
                        fAddedTransformer = true;
                    }
                    var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/" + escapeProperlyCore(rgDocTransformers[iTransformer].TransformUIPage, true) + "?" + "FileName=" + currentItemEscapedFileUrl + "&TID=" + rgDocTransformers[iTransformer].Id;

                    strAction = AddSourceToUrl(strAction) + "')";
                    var tm;

                    tm = CAMOpt(sm, rgDocTransformers[iTransformer].Name, strAction, "");
                    tm.Id = "ID_Transform" + rgDocTransformers[iTransformer].Id;
                }
            }
        }
    }
}
function AddMeetingMenuItems(m, ctxt) {
    if (itemTable.getAttribute("menuType") == "Orphaned") {
        var menuOption;
        var currentInstanceId = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
        var strDisplayText = Strings.STS.L_Move_Text;
        var strAction = "GoToMtgMove('" + ctxt.listUrlDir + "'," + currentInstanceId + ",'" + itemTable.getAttribute("DateTime") + "','" + itemTable.getAttribute("DateTimeISO") + "')";
        var strImagePath = "";

        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Move";
        strDisplayText = Strings.STS.L_Keep_Text;
        strAction = "MtgKeep('" + ctxt.HttpPath + "','" + ctxt.listName + "'," + currentInstanceId + ")";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Keep";
        strDisplayText = Strings.STS.L_Delete_Text;
        strAction = "MtgDelete('" + ctxt.HttpPath + "','" + ctxt.listName + "'," + currentInstanceId + ")";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Delete";
    }
}
function AddListMenuItems(m, ctxt) {
    if (typeof Custom_AddListMenuItems != "undefined") {
        if (Custom_AddListMenuItems(m, ctxt))
            return;
    }
    if (currentItemFileUrl == null)
        currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var fixedItemId = currentItemID;

    if (currentItemIsEventsExcp == null) {
        currentItemIsEventsExcp = false;
        currentItemIsEventsDeletedExcp = false;
        currentItemEvtType = parseInt(itemTable.getAttribute("EventType"));
        if (currentItemEvtType != null && (currentItemEvtType == 2 || currentItemEvtType == 3 || currentItemEvtType == 4)) {
            currentItemIsEventsExcp = true;
            if (currentItemEvtType == 3)
                currentItemIsEventsDeletedExcp = true;
            if (currentItemID.indexOf(".") != -1)
                fixedItemId = (currentItemID.split("."))[0];
        }
    }
    var menuOption;
    var strAction;
    var strImagePath;

    if (ctxt.listBaseType == 3 && ctxt.listTemplate == 108) {
        var strDisplayText = Strings.STS.L_Reply_Text;

        if ((itemTable.getAttribute("Ordering")).length >= 504) {
            strAction = "alert('" + Strings.STS.L_ReplyLimitMsg_Text + "')";
        }
        else {
            strAction = "STSNavigate('" + ctxt.newFormUrl + "&Threading=" + escapeProperly(itemTable.getAttribute("Ordering")) + "&Guid=" + escapeProperly(itemTable.getAttribute("ThreadID")) + "&Subject=" + escapeProperly(itemTable.getAttribute("Subject"));
            strAction = AddSourceToUrl(strAction) + "')";
        }
        strImagePath = ctxt.imagesPath + "reply.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(100));
        menuOption.id = "ID_Reply";
    }
    AddSharedNamespaceMenuItems(m, ctxt);
    var contentTypeId = itemTable.getAttribute("CId");

    if (contentTypeId != null && contentTypeId.indexOf("0x0106") == 0 && HasRights(0x10, 0x0)) {
        strDisplayText = Strings.STS.L_ExportContact_Text;
        strAction = "STSNavigate('" + ctxt.HttpPath + "&Cmd=Display&CacheControl=1&List=" + ctxt.listName + "&ID=" + currentItemID + "&Using=" + escapeProperly(ctxt.listUrlDir) + "/vcard.vcf" + "')";
        strImagePath = ctxt.imagesPath + "exptitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(350));
        CUIInfo(menuOption, "ExportContact", ["ExportContact"]);
        menuOption.id = "ID_ExportContact";
    }
    CAMSep(m);
    if (ctxt.verEnabled == 1) {
        AddVersionsMenuItem(m, ctxt, currentItemEscapedFileUrl);
    }
    if (HasRights(0x0, 0x4) && ctxt.isModerated == true && HasRights(0x0, 0x10) && HasRights(0x0, 0x21000) && ctxt.listBaseType != 4 && currentItemID.indexOf(".0.") < 0) {
        strDisplayText = Strings.STS.L_ModerateItem_Text;
        strAction = "NavigateToApproveRejectAspx(event, '" + ctxt.HttpRoot + "/_layouts/15/approve.aspx?List=" + ctxt.listName + "&ID=" + fixedItemId;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = ctxt.imagesPath + "apprj.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(850));
        CUIInfo(menuOption, "Moderate", ["Moderate"]);
        menuOption.id = "ID_ModerateItem";
    }
    CAMSep(m);
    AddWorkflowsMenuItem(m, ctxt);
    var alertsEnabled = typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null && _spPageContextInfo.alertsEnabled;

    if (currentItemID.indexOf(".0.") < 0 && HasRights(0x80, 0x0) && !ctxt.ExternalDataList && alertsEnabled) {
        strDisplayText = Strings.STS.L_Subscribe_Text;
        strAction = "NavigateToSubNewAspxV4(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&ID=" + currentItemID + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1100));
        menuOption.id = "ID_Subscribe";
        CUIInfo(menuOption, "Subscribe", ["Subscribe"]);
    }
    if (alertsEnabled || !ctxt.ExternalDataList && HasRights(0x0, 0x4)) {
        CAMSep(m);
    }
    AddManagePermsMenuItem(m, ctxt, ctxt.listName, currentItemID);
    if (currentItemID.indexOf(".0.") < 0 && HasRights(0x0, 0x8) && !currentItemIsEventsExcp) {
        if (ctxt.listBaseType == 4)
            strDisplayText = Strings.STS.L_DeleteResponse_Text;
        else
            strDisplayText = Strings.STS.L_DeleteItem_Text;
        strAction = "DeleteListItem()";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1180));
        CUIInfo(menuOption, "Delete", ["Delete"]);
        menuOption.id = "ID_DeleteItem";
        CUIInfo(menuOption, "Delete", ["Delete"]);
    }
    var hasProgId = currentItemProgId != null && currentItemProgId != "";

    if (currentItemFSObjType == "1" && !hasProgId && HasRights(0x0, 0x4) && ctxt.ContentTypesEnabled && ctxt.listTemplate != 108) {
        strDisplayText = Strings.STS.L_CustomizeNewButton_Text;
        strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + ctxt.listName + "&RootFolder=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1170));
        CUIInfo(menuOption, "ChangeNewButton", ["ChangeNewButton"]);
        menuOption.id = "ID_CustomizeNewButton";
    }
}
function ReplaceUrlTokens(urlWithTokens, ctxt) {
    var encodedToken;

    if (urlWithTokens == null || urlWithTokens == "") {
        urlWithTokens = "";
        return urlWithTokens;
    }
    if (currentItemID != null) {
        urlWithTokens = urlWithTokens.replace(/{ItemId}/g, currentItemID);
    }
    var query = null;
    var path = null;
    var qmarkIdx = urlWithTokens.indexOf("?");

    if (-1 != qmarkIdx && qmarkIdx + 2 < urlWithTokens.length) {
        query = urlWithTokens.substr(qmarkIdx + 1);
        path = urlWithTokens.substr(0, qmarkIdx + 1);
    }
    else {
        path = urlWithTokens;
    }
    if (currentItemFileUrl != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(currentItemFileUrl));
            query = query.replace(/{ItemUrl}/g, encodedToken);
        }
        path = path.replace(/{ItemUrl}/g, currentItemFileUrl);
    }
    if (ctxt.HttpRoot != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(ctxt.HttpRoot));
            query = query.replace(/{SiteUrl}/g, encodedToken);
        }
        path = path.replace(/{SiteUrl}/g, ctxt.HttpRoot);
    }
    if (ctxt.listName != null) {
        if (null != query) {
            encodedToken = escapeProperly(ctxt.listName);
            query = query.replace(/{ListId}/g, encodedToken);
        }
        path = path.replace(/{ListId}/g, ctxt.listName);
    }
    if (ctxt.listUrlDir != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(ctxt.listUrlDir));
            query = query.replace(/{ListUrlDir}/g, encodedToken);
        }
        path = path.replace(/{ListUrlDir}/g, ctxt.listUrlDir);
    }
    var strSource = GetSource();

    path = path.replace(/{Source}/g, strSource);
    if (query != null) {
        if (path.length + query.length + strSource.length > 1950) {
            query = query.replace(/{Source}/g, "");
        }
        else {
            query = query.replace(/{Source}/g, strSource);
        }
    }
    if (null == query) {
        return path;
    }
    else {
        return path + query;
    }
}
var SYSTEM_ACCOUNT_ID;

function UseCustomAction(regType, regId, rightsHigh, rightsLow, fileType, progId, contentTypeId, listTemplateId, listName) {
ULSw7Q:
    ;
    var applies = false;
    var trimmed = true;

    if (regId != null) {
        regId = regId.toLowerCase();
        if (regType == "FileType") {
            applies = fileType == regId.toLowerCase();
        }
        else if (regType == "ProgId") {
            applies = progId == regId.toLowerCase();
        }
        else if (regType == "ContentType") {
            applies = contentTypeId != null && contentTypeId.indexOf(regId.toLowerCase()) == 0;
        }
        else if (regType == "List") {
            if (null != listTemplateId && listTemplateId == regId) {
                applies = true;
            }
            else if (null != listName && listName == regId) {
                applies = true;
            }
        }
    }
    if (applies) {
        trimmed = !HasRights(rightsHigh, rightsLow) || IsTrimmedBySystem(rightsHigh, rightsLow);
    }
    return applies && !trimmed;
}
function InsertFeatureMenuItems(m, ctxt) {
    CAMSep(m);
    var fileType = GetAttributeFromItemTable(itemTable, "Ext", "FileType");
    var progId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
    var contentTypeId = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
    var listTemplateId = null;
    var listName = null;
    var ecbId = ecbItems;

    if (ctxt != null) {
        listTemplateId = String(ctxt.listTemplate);
        if (null != ctxt.listName && 0 < ctxt.listName.length) {
            listName = ctxt.listName.toLowerCase();
            ecbId = ecbId + "_" + listName;
        }
    }
    if (fileType != null)
        fileType = fileType.toLowerCase();
    if (progId != null)
        progId = progId.toLowerCase();
    if (contentTypeId != null)
        contentTypeId = contentTypeId.toLowerCase();
    var menuOption;
    var elemTBody = document.getElementById(ecbId);
    var cas = new Array(0);
    var ca = null;
    var i = 0;
    var seenProductIds = [];

    if (elemTBody != null) {
        for (var iMenuItem = 0; iMenuItem < elemTBody.childNodes.length; iMenuItem++) {
            var elemTR = elemTBody.childNodes[iMenuItem];
            var regType = GetInnerText(elemTR.childNodes[5]);
            var regId = GetInnerText(elemTR.childNodes[6]);
            var rightsHigh = parseInt(GetInnerText(elemTR.childNodes[3]));
            var rightsLow = parseInt(GetInnerText(elemTR.childNodes[4]));

            if (!UseCustomAction(regType, regId, rightsHigh, rightsLow, fileType, progId, contentTypeId, listTemplateId, listName)) {
                continue;
            }
            ca = new Object();
            ca["Title"] = GetInnerText(elemTR.childNodes[0]);
            ca["ImageUrl"] = GetInnerText(elemTR.childNodes[1]);
            ca["Action"] = GetInnerText(elemTR.childNodes[2]);
            ca["Sequence"] = parseInt(GetInnerText(elemTR.childNodes[7]));
            var productId = GetInnerText(elemTR.childNodes[8]);

            ca["ProductId"] = productId.length > 0 ? productId : null;
            ca["FromTenantApp"] = false;
            if (productId != null && productId.length > 0)
                seenProductIds[productId] = true;
            cas.push(ca);
        }
    }
    var tenantAppData = GetTenantAppData();

    if (tenantAppData != null) {
        var apps = tenantAppData["apps"];

        for (i = 0; i < apps.length; i++) {
            var app = apps[i];

            for (var j = 0; j < app["customActions"].length; j++) {
                try {
                    ca = app["customActions"][j];
                    if (!UseCustomAction(ca["registrationType"], ca["registrationId"], parseInt(ca["rightsHigh"]), parseInt(ca["rightsLow"]), fileType, progId, contentTypeId, listTemplateId, listName)) {
                        continue;
                    }
                    if (typeof seenProductIds[ca["productId"]] != "undefined")
                        continue;
                    var caTemp = new Object();

                    caTemp["Title"] = ca["title"];
                    caTemp["ImageUrl"] = ca["imageUrl"];
                    caTemp["Action"] = ca["action"];
                    caTemp["Sequence"] = parseInt(ca["sequence"]);
                    caTemp["ProductId"] = ca["productId"];
                    caTemp["FromTenantApp"] = true;
                    caTemp["AppTitle"] = app["title"];
                    cas.push(caTemp);
                }
                catch (e) {
                    throw e;
                }
            }
        }
    }
    for (i = 0; i < cas.length; i++) {
        ca = cas[i];
        var tdAction = ReplaceUrlTokens(ca["Action"], ctxt);
        var strAction = null;

        if (ca["FromTenantApp"]) {
            if (tdAction.startsWith("javascript:LaunchApp")) {
                strAction = tdAction;
            }
            else if (tdAction.substr(0, 11) != "javascript:") {
                strAction = "STSNavigate('" + STSScriptEncode(tdAction) + "')";
            }
        }
        else {
            if (tdAction.substr(0, 11) == "javascript:")
                strAction = tdAction;
            else
                strAction = "STSNavigate('" + STSScriptEncode(tdAction) + "')";
        }
        if (strAction != null) {
            var strImagePath = ca["ImageUrl"] == null ? null : ReplaceUrlTokens(ca["ImageUrl"], ctxt);

            menuOption = CIMOpt(m, ca["Title"], strAction, strImagePath, null, String(ca["Sequence"]));
            menuOption.id = "ID_" + ca["Title"];
        }
    }
}
function GetRootFolder2(ctxt) {
    var RootFolder = GetUrlKeyValue("RootFolder", false);
    var clvp = ctxt.clvp;

    if (clvp != null && clvp.rootFolder != null)
        RootFolder = clvp.rootFolder;
    if (RootFolder == "" || bValidSearchTerm) {
        var FileDirRef;

        if (itemTable != null)
            FileDirRef = GetAttributeFromItemTable(itemTable, "DRef", "FileDirRef");
        if (FileDirRef != null && FileDirRef != "") {
            if (FileDirRef.substring(0, 1) == "/")
                RootFolder = FileDirRef;
            else
                RootFolder = "/" + FileDirRef;
        }
        else
            RootFolder = ctxt.listUrlDir;
    }
    return RootFolder;
}
function GetRootFolder(ctxt) {
    var RootFolder = GetRootFolder2(ctxt);

    return "&RootFolder=" + escapeProperly(RootFolder);
}
function HasRights(requiredH, requiredL) {
    if (currentItemPermMaskH == null) {
        if (itemTable == null)
            return true;
        var pmStr = GetAttributeFromItemTable(itemTable, "Perm", "PermMask");

        if (pmStr == null)
            return true;
        var currentItemAuthor = itemTable.getAttribute("Author");

        SetCurrentPermMaskFromString(pmStr, currentItemAuthor);
    }
    if (!currentItemCanModify && (EqualRights(requiredH, requiredL, 0x0, 0x4) || EqualRights(requiredH, requiredL, 0x0, 0x8) || EqualRights(requiredH, requiredL, 0x40000000, 0x0))) {
        return false;
    }
    return (requiredL & currentItemPermMaskL) == requiredL && (requiredH & currentItemPermMaskH) == requiredH;
}
function EqualRights(rightsH1, rightsL1, rightsH2, rightsL2) {
    return rightsH1 == rightsH2 && rightsL1 == rightsL2;
}
function CheckIfHasRights(requiredH, requiredL, actualRightH, actualRightL) {
    return (requiredL & actualRightL) == requiredL && (requiredH & actualRightH) == requiredH;
}
function IsTrimmedBySystem(requiredH, requiredL) {
    var isTrimmed = false;

    if (CheckIfHasRights(0x0, 0x4, requiredH, requiredL) && itemTable != null) {
        if (currentItemCheckedOutUserId == null) {
            currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
        }
        isTrimmed = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctx.CurrentUserId != String(SYSTEM_ACCOUNT_ID);
    }
    return isTrimmed;
}
function GetPermMaskH(pmStr) {
    var pmLen = pmStr.length;

    if (pmLen <= 10) {
        return 0;
    }
    else {
        return parseInt(pmStr.substring(2, pmLen - 8), 16);
    }
}
function GetPermMaskL(pmStr) {
    var pmLen = pmStr.length;

    if (pmLen <= 10) {
        return parseInt(pmStr);
    }
    else {
        return parseInt(pmStr.substring(pmLen - 8, pmLen), 16);
    }
}
function SetCurrentPermMaskFromString(pmStr, currentItemAuthor) {
    currentItemPermMaskH = GetPermMaskH(pmStr);
    currentItemPermMaskL = GetPermMaskL(pmStr);
    currentItemCanModify = currentItemAuthor == null || HasRights(0x0, 0x800) || ctx.CurrentUserId == currentItemAuthor || ctx.CurrentUserId == null || typeof ctx.WriteSecurity == "number" && ctx.WriteSecurity == 1;
}
function AddSharedNamespaceMenuItems(m, ctxt) {
    var RootFolder = GetRootFolder(ctxt);

    setupMenuContext(ctxt);
    if (currentItemFileUrl == null)
        currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFSObjType == null)
        currentItemFSObjType = String(parseInt(GetAttributeFromItemTable(itemTable, "OType", "FSObjType")));
    if (currentItemContentTypeId == null)
        currentItemContentTypeId = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
    if (currentItemModerationStatus == null)
        currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    if (currentItemCheckedOutUserId == null)
        currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedoutToLocal == null)
        currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    if (currentItemCheckedoutToLocal != "1")
        currentItemCheckedoutToLocal = "0";
    var systemCheckout = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID);

    bIsCheckout = 0;
    if (ctxt.isForceCheckout == true && currentItemCheckedOutUserId == "" && currentItemFSObjType != "1") {
        bIsCheckout = 1;
    }
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null) {
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    }
    var menuOption;
    var strDisplayText;
    var strAction;
    var strImagePath;

    if (ctxt.listBaseType == 1)
        strDisplayText = Strings.STS.L_ViewProperties_Text;
    else if (ctxt.listBaseType == 4)
        strDisplayText = Strings.STS.L_ViewResponse_Text;
    else
        strDisplayText = Strings.STS.L_ViewItem_Text;
    var contentTypeParam = "";

    if (currentItemContentTypeId != null && currentItemContentTypeId != "")
        contentTypeParam = "&ContentTypeID=" + currentItemContentTypeId;
    var strSeperator = "&";

    if (ctxt.displayFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    var viewItemUrl = ctxt.displayFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;

    viewItemUrl = AddSourceToUrl(viewItemUrl) + RootFolder;
    if (301 == ctxt.listTemplate) {
        strAction = "EditItem('" + viewItemUrl + "')";
    }
    else {
        strAction = "EditItem2(event, '" + viewItemUrl + "')";
    }
    menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(200));
    CUIInfo(menuOption, "ViewProperties", ["ViewProperties"]);
    if (ctxt.listBaseType == 1) {
        menuOption.id = "ID_ViewProperties";
    }
    else {
        menuOption.id = "ID_ViewItem";
    }
    if (HasRights(0x0, 0x4) && !systemCheckout && !currentItemIsEventsDeletedExcp) {
        if (ctxt.listBaseType == 1)
            strDisplayText = Strings.STS.L_EditProperties_Text;
        else if (ctxt.listBaseType == 4)
            strDisplayText = Strings.STS.L_EditResponse_Text;
        else
            strDisplayText = Strings.STS.L_EditItem_Text;
        strSeperator = "&";
        if (ctxt.editFormUrl.indexOf("?") == -1)
            strSeperator = "?";
        if (ctxt.listBaseType == 1) {
            strAction = "EditItemWithCheckoutAlert(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;
            strAction = AddSourceToUrl(strAction) + RootFolder + "'," + String(bIsCheckout) + ",'" + currentItemCheckedoutToLocal + "','" + STSScriptEncode(currentItemFileUrl) + "','" + ctxt.HttpRoot + "')";
        }
        else {
            if (FV4UI()) {
                strAction = "EditItem2(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam + "')";
            }
            else {
                strAction = "EditItem('" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;
                strAction = AddSourceToUrl(strAction) + "')";
            }
        }
        strImagePath = ctxt.imagesPath + "edititem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(220));
        if (ctxt.listBaseType == 1) {
            menuOption.id = "ID_EditProperties";
            CUIInfo(menuOption, "EditProperties", ["EditProperties"]);
        }
        else {
            menuOption.id = "ID_EditItem";
            CUIInfo(menuOption, "EditProperties", ["EditProperties"]);
        }
        if (ctxt.listTemplate == 106 && currentItemID.indexOf(".0.") > 0) {
            var SeriesIdEnd = currentItemID.indexOf(".0.");
            var itemSeriesID = currentItemID.substr(0, SeriesIdEnd);

            strDisplayText = Strings.STS.L_EditSeriesItem_Text;
            strAction = "EditItem2(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + itemSeriesID + contentTypeParam;
            strAction = AddSourceToUrl(strAction) + "')";
            strImagePath = ctxt.imagesPath + "recurrence.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(230));
            CUIInfo(menuOption, "EditSeriesItem", ["EditSeriesItem"]);
            menuOption.id = "ID_EditSeriesItem";
        }
    }
}
function AddSolutionsCatalogMenuItems(m, ctxt) {
    if (HasRights(0x0, 0x4)) {
        if (currentItemFSObjType != "1") {
            var addDelete = true;
            var url = GetAttributeFromItemTable(itemTable, "Url", null);

            if (url.length > 4) {
                var ext = (url.substr(url.length - 4)).toLowerCase();

                if (ext == ".wsp") {
                    var solutionHash = GetAttributeFromItemTable(itemTable, "SolutionHash", null);
                    var hash = GetAttributeFromItemTable(itemTable, "Hash", null);
                    var solutionItemId = GetAttributeFromItemTable(itemTable, "SolutionItemID", null);
                    var solutionStatus = GetAttributeFromItemTable(itemTable, "Status", null);
                    var id = GetAttributeFromItemTable(itemTable, "id", null);

                    if (solutionHash != "") {
                        if (solutionStatus == "") {
                            AddSolutionMenuActivate(m);
                        }
                        else if (solutionHash == hash) {
                            addDelete = false;
                            AddSolutionMenuDeactivate(m);
                        }
                        else {
                            AddSolutionMenuUpgrade(m);
                        }
                    }
                }
            }
            if (addDelete) {
                AddSolutionMenuDelete(m, ctxt);
            }
        }
    }
}
function AddSolutionMenuHelper(m, displayText, operation, imagePath, sequence, cuiInfo, menuOptionId) {
    var menuOption;
    var action = "if(event){event.currentItemID=" + currentItemID + ";}RunSolutionOperation(event, \"" + operation + "\")";

    menuOption = CAMOpt(m, displayText, action, imagePath, null, String(sequence));
    CUIInfo(menuOption, cuiInfo, [cuiInfo]);
    menuOption.id = menuOptionId;
}
function AddSolutionMenuActivate(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_ActivateSolution_Text, "ACT", "", 1210, "ActivateSolution", "ID_ActivateSolution");
    }
}
function AddSolutionMenuDeactivate(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_DeactivateSolution_Text, "DEA", "", 1220, "DeactivateSolution", "ID_DeactivateSolution");
    }
}
function AddSolutionMenuUpgrade(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_UpgradeSolution_Text, "UPG", "", 1230, "UpgradeSolution", "ID_UpgradeSolution");
    }
}
function AddSolutionMenuDelete(m, ctxt) {
    var menuOption;
    var currentItemEscapedFileUrl;

    currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var strDisplayText = Strings.STS.L_DeleteDocItem_Text;
    var isCopy = "false";

    if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") {
        isCopy = "true";
    }
    var strAction = "DeleteDocLibItem('" + ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + currentItemID + "&owsfileref=" + currentItemEscapedFileUrl + "&NextUsing=" + GetSource() + "'," + isCopy + ")";
    var strImagePath = ctxt.imagesPath + "delitem.gif";

    menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, "310");
    menuOption.id = "ID_DeleteDocItem";
    CUIInfo(menuOption, "Delete", ["Delete"]);
}
function RunSolutionOperation(evt, operation) {
    if (evt == null && !IsContextSet())
        return;
    var ctxt = currentCtx != null ? currentCtx : typeof evt.currentCtx == "object" ? evt.currentCtx : null;
    var currentSolutionItemID = currentItemID != null ? currentItemID : typeof evt.currentItemID == "string" ? evt.currentItemID : "";

    if (ctxt == null)
        return;
    var RootFolder = ctxt.listUrlDir;
    var source = GetSource();
    var editFormUrl = RootFolder + "/Forms/Activate.aspx?" + "Op=" + operation + "&ID=" + currentSolutionItemID + "&Source=" + source;

    if (ctxt.listBaseType == 1)
        editFormUrl = editFormUrl + GetRootFolder(ctxt);
    var callback = function() {
    };
    var popup = function() {
    ULSw7Q:
        ;
        var dopt = {
            url: editFormUrl,
            args: null,
            width: 650,
            height: 450,
            dialogReturnValueCallback: callback
        };
        var dlg = SP.UI.ModalDialog.showModalDialog(dopt);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.UI.Dialog.js", defd, popup);
}
function AddDocLibMenuItems(m, ctxt) {
    if (typeof window.Custom_AddDocLibMenuItems != "undefined") {
        if (window.Custom_AddDocLibMenuItems(m, ctxt))
            return;
    }
    var RootFolder = GetRootFolder(ctxt);
    var menuOption;
    var strDisplayText;
    var strAction;
    var strImagePath;

    AddSharedNamespaceMenuItems(m, ctxt);
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var serverFileRedirect = itemTable.getAttribute("SRed");
    var systemCheckout = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID);

    if (HasRights(0x0, 0x4) && HasRights(0x10, 0x0) && !systemCheckout && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20))) {
        if (ctxt.isWebEditorPreview == 0 && ctxt.listBaseType == 1) {
            if (ctxt.listTemplate != 119) {
                setDocType();
                if (currentItemAppName != "" && currentItemOpenControl != "") {
                    if (!(ctxt.IsAppWeb && currentItemProgId == SPDesignerProgID)) {
                        strDisplayText = "";
                        if (currentItemAppName != " ")
                            strDisplayText = StBuildParam(Strings.STS.L_EditIn_Text, currentItemAppName);
                        else {
                            var objEditor = StsOpenEnsureEx2(currentItemOpenControl + ".3");

                            if (objEditor != null)
                                strDisplayText = Strings.STS.L_EditInApplication_Text;
                        }
                        if (strDisplayText != "") {
                            strAction = "editDocumentWithProgID2('" + currentItemFileUrl + "', '" + currentItemProgId + "', '" + currentItemOpenControl + "', '" + String(bIsCheckout) + "', '" + ctxt.HttpRoot + "', '" + currentItemCheckedoutToLocal + "', '" + currentItemOpenApp + "')";
                            strImagePath = ctxt.imagesPath + currentItemIcon;
                            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(260));
                            menuOption.id = "ID_EditIn_" + currentItemAppName;
                            menuOption.style.cssText = "display:none";
                            CUIInfo(menuOption, "EditDocument", ["EditDocument"]);
                        }
                    }
                }
            }
        }
    }
    CAMSep(m);
    if (HasRights(0x0, 0x4)) {
        if (currentItemFSObjType != "1") {
            if (ctxt.listBaseType == 1) {
                AddCheckinCheckoutMenuItem(m, ctxt, currentItemEscapedFileUrl);
            }
        }
    }
    if ((ctxt.verEnabled == 1 || ctxt.isModerated) && currentItemFSObjType != "1") {
        AddVersionsMenuItem(m, ctxt, currentItemEscapedFileUrl);
    }
    if (HasRights(0x0, 0x4)) {
        if (ctxt.isModerated == true && HasRights(0x0, 0x10) && ((currentItemModerationStatus == String(2) || !ctxt.EnableMinorVersions) && currentItemCheckedOutUserId == "" || currentItemFSObjType == "1")) {
            strDisplayText = Strings.STS.L_ModerateItem_Text;
            strAction = "NavigateToApproveRejectAspx(event, '" + ctxt.HttpRoot + "/_layouts/15/approve.aspx?List=" + ctxt.listName + "&ID=" + currentItemID;
            strAction = AddSourceToUrl(strAction) + GetRootFolder(ctxt) + "')";
            strImagePath = ctxt.imagesPath + "apprj.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(850));
            CUIInfo(menuOption, "Moderate", ["Moderate"]);
            menuOption.id = "ID_ModerateItem";
        }
    }
    CAMSep(m);
    AddWorkflowsMenuItem(m, ctxt);
    if (currentItemFSObjType != "1") {
        if (ctxt.PortalUrl != null) {
            strDisplayText = Strings.STS.L_AddToMyLinks_Text;
            strAction = "Portal_Tasks('PinToMyPage')";
            ;
            strImagePath = "";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1000));
            CUIInfo(menuOption, "AddToMyLinks", ["AddToMyLinks"]);
            menuOption.id = "ID_AddToMyLinks";
            menuOption.style.display = "none";
        }
    }
    else if (ctxt.listBaseType == 1 && HasRights(0x10, 0x0)) {
        AddWorkOfflineMenuItem(m, ctxt, currentItemFileUrl);
    }
    if (HasRights(0x80, 0x0) && typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null && typeof _spPageContextInfo.alertsEnabled == 'boolean' && _spPageContextInfo.alertsEnabled) {
        strDisplayText = Strings.STS.L_Subscribe_Text;
        strAction = "NavigateToSubNewAspxV4(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&ID=" + currentItemID + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1100));
        CUIInfo(menuOption, "Subscribe", ["Subscribe"]);
        menuOption.id = "ID_Subscribe";
        menuOption.style.display = "none";
    }
    if (currentItemFSObjType != "1") {
        AddSendSubMenu(m, ctxt);
        AddGotoSourceItemMenuItem(m, ctxt, itemTable, currentItemFSObjType);
        AddDocTransformSubMenu(m, ctxt);
    }
    CAMSep(m);
    AddManagePermsMenuItem(m, ctxt, ctxt.listName, currentItemID);
    if (HasRights(0x0, 0x8) && !systemCheckout) {
        strDisplayText = Strings.STS.L_DeleteDocItem_Text;
        var isCopy = "false";

        if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") {
            isCopy = "true";
        }
        strAction = "DeleteDocLibItem('" + ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + currentItemID + "&owsfileref=" + currentItemEscapedFileUrl + "&NextUsing=" + GetSource() + "'," + isCopy + ")";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1190));
        menuOption.id = "ID_DeleteDocItem";
        CUIInfo(menuOption, "Delete", ["Delete"]);
    }
    if (HasRights(0x0, 0x4) && currentItemFSObjType == "1" && ctxt.ContentTypesEnabled && ctxt.listTemplate != 108) {
        strDisplayText = Strings.STS.L_CustomizeNewButton_Text;
        strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + ctxt.listName + "&RootFolder=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1170));
        CUIInfo(menuOption, "ChangeNewButton", ["ChangeNewButton"]);
        menuOption.id = "ID_CustomizeNewButton";
    }
}
function AddManagePermsMenuItem(m, ctxt, listId, url) {
    if (!HasRights(0x0, 0x20000) || currentItemIsEventsExcp || ctxt.ExternalDataList || currentItemEvtType == 5)
        return;
    var strDisplayText = Strings.STS.L_SharedWithDialogTitle;
    var strAction = "EnsureScriptFunc('sharing.js', 'DisplaySharedWithDialog', function () {ULSw7Q:; DisplaySharedWithDialog('" + ctxt.HttpRoot + "', '" + listId + "','" + url + "'); })";
    var strImagePath = ctxt.imagesPath + "permissions16.png";
    var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1160));

    menuOption.id = "ID_MngPerms";
    CUIInfo(menuOption, "ManagePermissions", ["ManagePermissions"]);
}
function AddGotoSourceItemMenuItem(m, ctxt, itemsTable, objtype) {
    if (objtype != "1") {
        var attribute = itemsTable.getAttribute("CSrc");

        if (typeof attribute != "undefined" && attribute != null && attribute != "") {
            var strDisplayText = Strings.STS.L_GoToSourceItem_Text;
            var strAction = "NavigateToSourceItem(event, '" + STSScriptEncode(attribute) + "')";
            var strImagePath = ctxt.imagesPath + "goToOriginal.gif";
            var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(440));

            menuOption.id = "ID_GoToSourceItem";
            CUIInfo(menuOption, "GotoSourceItem", ["GotoSourceItem"]);
        }
    }
}
function CheckoutSingleItemFromECB(currentCtxt, itemsTable) {
    {
        var defd;

        try {
            defd = typeof inplview.CheckOutSingleItem;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "inplview.CheckOutSingleItem";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                ULSw7Q:
                    ;
                    inplview.CheckOutSingleItem(currentCtxt, itemsTable);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function AddCheckinCheckoutMenuItem(m, ctxt, url) {
    var menuOption;
    var strDisplayText;
    var strImagePath;
    var strAction;

    if (!HasRights(0x0, 0x4))
        return;
    if (currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID))
        return;
    if (currentItemCheckedOutUserId == null)
        currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedOutUserId != "") {
        if (currentItemCheckedOutUserId == ctxt.CurrentUserId || ctxt.CurrentUserId == null || HasRights(0x0, 0x100)) {
            strDisplayText = Strings.STS.L_Checkin_Text;
            if (!FV4UI())
                strAction = "NavigateToCheckinAspx('" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&FileName=" + url + "')";
            else
                strAction = "CheckInSingleItemFromECB(event, currentCtx, itemTable)";
            strImagePath = ctxt.imagesPath + "checkin.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(300));
            menuOption.id = "ID_Checkin";
            CUIInfo(menuOption, "CheckIn", ["CheckIn"]);
            strDisplayText = Strings.STS.L_DiscardCheckou_Text;
            strAction = "UnDoCheckOutwithNotification('" + ctxt.HttpRoot + "', '" + url + "')";
            strImagePath = ctxt.imagesPath + "unchkout.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(310));
            menuOption.id = "ID_DiscardCheckou";
            CUIInfo(menuOption, "DiscardCheckOut", ["DiscardCheckOut"]);
        }
    }
    else if (typeof g_disableCheckoutInEditMode == "undefined" || !g_disableCheckoutInEditMode) {
        strDisplayText = Strings.STS.L_Checkout_Text;
        if (currentItemOpenControl == "")
            setDocType();
        var opencontrol = "";
        var serverFileRedirect = itemTable.getAttribute("SRed");

        if (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20)) {
            if (!FV4UI())
                strAction = "CheckoutDocument('" + ctxt.HttpRoot + "', '" + url + "', '" + opencontrol + "')";
            else
                strAction = "CheckoutSingleItemFromECB(currentCtx, itemTable)";
            strImagePath = ctxt.imagesPath + "checkout.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(300));
            menuOption.id = "ID_Checkout";
            CUIInfo(menuOption, "CheckOut", ["CheckOut"]);
        }
        if (currentItemModerationStatus == null)
            currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
        if (ctxt.EnableMinorVersions) {
            if (currentItemUIString == null)
                currentItemUIString = GetAttributeFromItemTable(itemTable, "UIS", "UIString");
            var minorversion = parseInt(currentItemUIString) % 512;

            if ((currentItemModerationStatus == String(1) || currentItemModerationStatus == String(3)) && ctxt.isModerated || !ctxt.isModerated && minorversion != 0) {
                strDisplayText = Strings.STS.L_PublishItem_Text;
                strAction = "PublishMajorVersion(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&FileName=" + url + "&Publish=true')";
                strImagePath = ctxt.imagesPath + "pubmajor.gif";
                menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(320));
                CUIInfo(menuOption, "Publish", ["Publish"]);
                menuOption.id = "ID_PublishItem";
            }
            else {
                var strMenuOptionId;
                var bCancelApproval = false;

                if (!ctxt.isModerated || currentItemModerationStatus == String(0)) {
                    strDisplayText = Strings.STS.L_UnPublishItem_Text;
                    strMenuOptionId = "ID_UnPublishItem";
                    strImagePath = ctxt.imagesPath + "unpub.gif";
                }
                else {
                    strDisplayText = Strings.STS.L_CancelPublish_Text;
                    strMenuOptionId = "ID_CancelPublish";
                    strImagePath = ctxt.imagesPath + "unapprv.gif";
                    bCancelApproval = true;
                }
                strAction = "UnPublish('" + ctxt.HttpRoot + "', 'FileName=" + url + "&UnPublish=true'," + String(bCancelApproval) + ")";
                menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(330));
                if (bCancelApproval)
                    CUIInfo(menuOption, "CancelApproval", ["CancelApproval"]);
                else
                    CUIInfo(menuOption, "Unpublish", ["Unpublish"]);
                menuOption.id = strMenuOptionId;
            }
        }
    }
}
function AddWorkflowsMenuItem(m, ctxt) {
    if (HasRights(0x0, 0x4) && !ctxt.ExternalDataList) {
        var strCTID = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");

        if (strCTID == null || strCTID.substr(0, 8) != "0x010801") {
            var strImagePath = ctxt.imagesPath + "workflows.png";
            var itemID;
            var SeriesIdEnd = ("" + currentItemID).indexOf(".0.");

            if (SeriesIdEnd > 0)
                itemID = currentItemID.substr(0, SeriesIdEnd);
            else
                itemID = currentItemID;
            var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/Workflow.aspx?ID=" + itemID + "&List=" + ctxt.listName;

            strAction = AddSourceToUrl(strAction) + "')";
            var menuOption = CAMOpt(m, Strings.STS.L_Workflows_Text, strAction, strImagePath, null, String(900));

            CUIInfo(menuOption, "ViewWorkflows", ["ViewWorkflows"]);
            menuOption.id = "ID_Workflows";
        }
    }
}
function AddWorkspaceMenuItem(m, ctxt) {
    var menuOption;
    var strAction;
    var strSourceUrl = GetAttributeFromItemTable(itemTable, "SUrl", "SourceUrl");

    if (strSourceUrl != null && strSourceUrl != "" && strSourceUrl != "%20") {
        if (HasRights(0x0, 0x21000)) {
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/publishback.aspx?list=" + ctxt.listName + "&item=" + currentItemID + GetRootFolder(ctxt) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_PublishBack_Text, strAction, "", null, String(1140));
            CUIInfo(menuOption, "PublishBack", ["PublishBack"]);
            menuOption.id = "ID_PublishBack";
        }
    }
    else {
        if (HasRights(0x0, 0x800000) && HasRights(0x0, 0x21000) && HasRights(0x0, 0x4000000)) {
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/createws.aspx?list=" + ctxt.listName + "&item=" + currentItemID + GetRootFolder(ctxt) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_CreateDWS_Text, strAction, "", null, String(1140));
            CUIInfo(menuOption, "CreateDocumentWorkspace", ["CreateDocumentWorkspace"]);
            menuOption.id = "ID_CreateDWS";
        }
    }
}
function AddVersionsMenuItem(m, ctxt, url) {
    if (currentItemID != null) {
        var strCurrentItemID = currentItemID.toString();

        if (strCurrentItemID.indexOf(".0.") >= 0)
            return;
    }
    var fixedItemId = currentItemID;

    if (currentItemIsEventsExcp) {
        if (currentItemID.indexOf(".") != -1)
            fixedItemId = (currentItemID.split("."))[0];
    }
    if (!HasRights(0x0, 0x40))
        return;
    var strDisplayText = Strings.STS.L_Versions_Text;
    var strAction = "NavigateToVersionsAspxV4(event, '" + ctxt.HttpRoot + "', 'list=" + ctxt.listName + "&ID=" + fixedItemId + "&FileName=" + url + "')";
    var strImagePath = ctxt.imagesPath + "versions.gif";
    var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(800));

    CUIInfo(menuOption, "ViewVersions", ["ViewVersions"]);
    menuOption.id = "ID_Versions";
}
function AddWorkOfflineMenuItem(m, ctxt, url) {
    var stsData = GetStssyncData("documents", Strings.STS.L_WorkOffline_Text, ctxt.imagesPath + "tbsprsht.gif", ctxt.imagesPath);

    if (stsData != null) {
        var strDisplayText = stsData.BtnText;
        var strImagePath = stsData.BtnImagePath;

        if (strDisplayText != null) {
            var siteTitle = "";

            if (typeof ctxt.SiteTitle == "string" && ctxt.SiteTitle != null)
                siteTitle = STSScriptEncode(ctxt.SiteTitle);
            var encodedListTitle = "";

            if (typeof ctxt.ListTitle == "string" && ctxt.ListTitle != null)
                encodedListTitle = STSScriptEncode(ctxt.ListTitle);
            var strAction = "javascript:ExportHailStorm('documents','" + ctxt.HttpRoot + "','" + STSScriptEncode(ctxt.listName) + "','" + STSScriptEncode(siteTitle) + "','" + encodedListTitle + "','" + STSScriptEncode(ctxt.listUrlDir) + "','','" + STSScriptEncode(unescapeProperly(ctxt.listUrlDir)) + "'";

            strAction += ",'" + STSScriptEncode(unescapeProperly(url)) + "','" + currentItemID + "')";
            var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);

            CUIInfo(menuOption, "ConnectFolderToClient", ["ConnectFolderToClient"]);
            menuOption.id = "ID_WorkOffline";
        }
    }
}
function AddVersionMenuItems(m, ctxt) {
    if (typeof AddVersionMenuItemsCore == "function") {
        AddVersionMenuItemsCore(m, ctxt);
    }
}
function NavigateToApproveRejectAspx(evt, strUrl) {
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function PublishMajorVersion(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/Checkin.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        SubmitFormPost(url);
    }
}
function _NavigateToSubNewAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/SubNew.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    STSNavigate(navigateUrl);
}
function NavigateToSubNewAspxV4(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/SubNew.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function NavigateToVersionsAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/Versions.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    STSNavigate(navigateUrl);
}
function NavigateToVersionsAspxV4(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/Versions.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function NavigateToSendToOtherLocationV4(evt, url) {
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function UnDoCheckOutwithNotification(strHttpRoot, strUrl) {
    var returnVal = UnDoCheckOut(strHttpRoot, strUrl);

    if (returnVal) {
        var noti = Strings.STS.L_Notification_DiscardCheckOut;

        addNotification(noti, true);
    }
}
function UnDoCheckOut(strHttpRoot, strUrl) {
    try {
        var stsOpen = null;
        var strextension = SzExtension(unescapeProperly(strUrl));

        if (FSupportCheckoutToLocal(strextension))
            stsOpen = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
        if (stsOpen != null && typeof stsOpen.DiscardLocalCheckout == "function") {
            var strDocument = unescapeProperly(strUrl);

            if (strDocument.charAt(0) == "/")
                strDocument = window.location.protocol + "//" + window.location.host + strDocument;
            var fRet = stsOpen.DiscardLocalCheckout(strDocument);

            if (fRet) {
                SetWindowRefreshOnFocus();
                return fRet;
            }
            if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) {
                    return false;
                }
            }
            else {
                return fRet;
            }
        }
        else {
            if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) {
                return false;
            }
        }
    }
    catch (e) { }
    NavigateToCheckinAspx(strHttpRoot, "FileName=" + strUrl + "&DiscardCheckout=true");
    return true;
}
function UnPublish(strHttpRoot, strArgs, bCancelApproval) {
    var strAlert = Strings.STS.L_UnPublishWarning_Text;

    if (bCancelApproval)
        strAlert = Strings.STS.L_CancleApproval_TEXT;
    if (!confirm(strAlert))
        return;
    NavigateToCheckinAspx(strHttpRoot, strArgs);
}
function NavigateToCheckinAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/Checkin.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    SubmitFormPost(navigateUrl);
}
function _NavigateToManagePermsPage(strHttpRoot, strListId, strFileRef) {
    NavigateToManagePermsPageEx(strHttpRoot, strListId, strFileRef, false);
}
function NavigateToManagePermsPageEx(strHttpRoot, strListId, strFileRef, isPopUI) {
    var strObjType = ",LISTITEM";
    var strUrl = strHttpRoot + "/_layouts/15/User.aspx?obj=" + strListId + "," + strFileRef + strObjType + "&List=" + strListId;

    strUrl = AddSourceToUrl(strUrl);
    if (isPopUI) {
        if (typeof window.frameElement.navigateParent == "function")
            window.frameElement.navigateParent(strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function NavigateToSourceItem(evt, url) {
    var match = url.match(/[^\/]*\/\/[^\/]*/g);
    var serverUrl = match[0];

    url = escapeProperly(url);
    var destUrl = serverUrl + "/_layouts/15/copyutil.aspx?GoToDispForm=1&Use=url&ItemUrl=" + url;

    destUrl = AddSourceToUrl(destUrl);
    STSNavigate(destUrl);
}
function setDocType() {
ULSw7Q:
    ;
    var iconValue = GetAttributeFromItemTable(itemTable, "Icon", "DocIcon");
    var strArray = Boolean(iconValue) ? iconValue.split("|") : [];

    currentItemIcon = strArray[0];
    currentItemAppName = strArray[1];
    currentItemOpenControl = strArray[2];
    if (strArray[3] == null)
        currentItemOpenApp = '';
    else
        currentItemOpenApp = strArray[3];
    currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
}
function DeleteListItem() {
ULSw7Q:
    ;
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var ciid = currentItemID;
    var strMessage = Strings.STS.L_STSRecycleConfirm_Text;

    if (!ctxt.RecycleBinEnabled || ctxt.ExternalDataList)
        strMessage = Strings.STS.L_STSDelConfirm_Text;
    if (Boolean(ctxt.HasRelatedCascadeLists) && ctxt.CascadeDeleteWarningMessage != null)
        strMessage = ctxt.CascadeDeleteWarningMessage + strMessage;
    if (confirm(strMessage)) {
        var noti = Strings.STS.L_Notification_Delete;
        var nid = addNotification(noti, true);
        var clvp = ctxt.clvp;

        if (ctxt.ExternalDataList && clvp != null) {
            clvp.DeleteItemCore(ciid);
            clvp.pendingItems = [];
            if (typeof clvp.cctx.executeQueryAsync != "undefined")
                clvp.cctx.executeQueryAsync(function() {
                ULSw7Q:
                    ;
                    if (clvp.rgehs != null && typeof clvp.rgehs.length == "number") {
                        if (clvp.rgehs.length == 1 && clvp.rgehs[0].get_serverErrorCode() == SP.ClientErrorCodes.redirect) {
                            GoToPage(clvp.rgehs[0].get_serverErrorValue());
                            return;
                        }
                        removeNotification(nid);
                        clvp.ShowErrorDialog(RefreshOnDialogClose);
                    }
                    else
                        RefreshPage(SP.UI.DialogResult.OK);
                }, function() {
                ULSw7Q:
                    ;
                    removeNotification(nid);
                    if (typeof clvp.rgehs != "undefined")
                        clvp.ShowErrorDialog(function() {
                        });
                });
        }
        else {
            var urlToPost = ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + ciid + "&NextUsing=" + GetSource();

            if (null != currentItemContentTypeId)
                urlToPost += "&ContentTypeId=" + currentItemContentTypeId;
            SubmitFormPost(urlToPost);
        }
    }
}
function DeleteDocLibItem(delUrl, isCopy) {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var ciid = currentItemID;
    var fsobjType = currentItemFSObjType;
    var strConfirm;
    var isDocumentSet = false;

    if (currentItemFSObjType == "1") {
        if (currentItemContentTypeId != null) {
            delUrl += "&ContentTypeId=" + currentItemContentTypeId;
            if ((currentItemContentTypeId.substr(0, 8)).toLowerCase() == "0x0120d5") {
                isDocumentSet = true;
            }
        }
        if (isDocumentSet) {
            strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm2_Text : Strings.STS.L_STSDelConfirm2_Text;
        }
        else {
            strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm1_Text : Strings.STS.L_STSDelConfirm1_Text;
        }
    }
    else {
        strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm_Text : Strings.STS.L_STSDelConfirm_Text;
    }
    if (Boolean(ctxt.HasRelatedCascadeLists) && ctxt.CascadeDeleteWarningMessage != null)
        strConfirm = ctxt.CascadeDeleteWarningMessage + strConfirm;
    if (isCopy && currentItemFSObjType != "1")
        strConfirm = Strings.STS.L_NotifyThisIsCopy_Text + strConfirm;
    if (confirm(strConfirm)) {
        var noti = Strings.STS.L_Notification_Delete;

        addNotification(noti, true);
        SubmitFormPost(delUrl, false, true);
    }
}
function EditMenuDefaultForOnclick() {
ULSw7Q:
    ;
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;

    if (Boolean(ctxt.isVersions)) {
        STSNavigate(itemTable.getAttribute("verUrl"));
    }
    else if (ctxt.listTemplate == 200) {
        var currentInstanceID = currentItemID;

        MtgNavigate(currentInstanceID);
    }
    else {
        EditListItem();
    }
}
function EditListItem() {
ULSw7Q:
    ;
    if (event.srcElement.tagName == "A" || event.srcElement.parentNode.tagName == "A")
        return;
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var strSeperator = "&";

    if (ctxt.editFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    var editFormUrl = ctxt.editFormUrl + strSeperator + "ID=" + currentItemID;

    editFormUrl = AddSourceToUrl(editFormUrl);
    if (ctxt.listBaseType == 1)
        editFormUrl = editFormUrl + GetRootFolder(ctxt);
    STSNavigate2(event, editFormUrl);
}
function _DoNavigateToTemplateGallery(strSaveLocUrl, strTGUrl) {
    document.cookie = "MSOffice_AWS_DefSaveLoc=" + strSaveLocUrl;
    STSNavigate(strTGUrl);
}
function Portal_Tasks(cmd) {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var fileRef = unescapeProperly(currentItemFileUrl);
    var idx1 = 0, idx2 = 0;

    idx1 = fileRef.lastIndexOf("/");
    idx2 = fileRef.lastIndexOf(".");
    if (idx1 < 0 || idx2 < 0 || idx1 > idx2)
        return;
    var fileName = fileRef.substr(idx1 + 1, idx2 - idx1 - 1);
    var serverUrl = "";

    idx1 = ctxt.HttpRoot.indexOf("://");
    if (idx1 > 0) {
        idx2 = ctxt.HttpRoot.indexOf("/", idx1 + 3);
        if (idx2 > 0)
            serverUrl = ctxt.HttpRoot.substring(0, idx2);
        else
            serverUrl = ctxt.HttpRoot;
    }
    var currentItemFileFullUrl = "";

    if (currentItemFileUrl.charAt(0) == "/" || (currentItemFileUrl.substr(0, 3)).toLowerCase() == "%2f") {
        currentItemFileFullUrl = serverUrl + currentItemFileUrl;
    }
    else {
        currentItemFileFullUrl = currentItemFileUrl;
    }
    var strParams = "";

    if (setElementValue("ListViewURL", currentItemFileFullUrl) == false) {
        strParams = strParams + "&ListViewURL=" + escapeProperly(currentItemFileFullUrl);
    }
    if (setElementValue("ListTitle", fileName) == false) {
        strParams = strParams + "&ListTitle=" + escapeProperly(fileName);
    }
    if (setElementValue("ListDescription", "") == false) {
        strParams = strParams + "&ListDescription=";
    }
    if (setElementValue("ReturnUrl", window.location.href) == false) {
        strParams = strParams + "&ReturnUrl=" + escapeProperly(window.location.href);
    }
    if (ctxt.PortalUrl.substr(0, 4) != "http") {
        ctxt.PortalUrl = serverUrl + ctxt.PortalUrl;
    }
    var url = ctxt.PortalUrl + "_vti_bin/portalapi.aspx?cmd=" + cmd;

    url = url + "&IconUrl=" + ctxt.imagesPath + currentItemIcon + strParams;
    SubmitFormPost(url);
}
function IsContextSet() {
ULSw7Q:
    ;
    if (currentCtx == null)
        return false;
    else if (typeof currentCtx.isExplictLogin == "boolean" && currentCtx.isExplictLogin)
        return true;
    else if (currentCtx.HttpPath == null || currentItemID == null)
        return false;
    return true;
}
function ChangeContentType(id) {
    var obj = document.getElementById(id);
    var strUrl = window.location.href;
    var idxQuery = strUrl.indexOf("?");

    if (strUrl.indexOf("?") <= 0) {
        strUrl = strUrl + "?ContentTypeId=" + obj.value;
    }
    else if (strUrl.indexOf("&ContentTypeId=") <= 0) {
        strUrl = strUrl + "&ContentTypeId=" + obj.value;
    }
    else {
        var pattern = /&ContentTypeId=[^&]*/i;

        strUrl = strUrl.replace(pattern, "&ContentTypeId=" + obj.value);
    }
    STSNavigate(strUrl);
}
var IMNControlObj;
var bIMNControlInited;
var IMNDictionaryObj;
var bIMNSorted;
var bIMNOnloadAttached;
var IMNOrigScrollFunc;
var bIMNInScrollFunc;
var IMNSortableObj;
var IMNHeaderObj;
var IMNNameDictionaryObj;
var IMNShowOfflineObj;

function GetCurrentEvent(objEvent) {
ULSw7Q:
    ;
    if (browseris.ie5up)
        return window.event;
    if (Boolean(objEvent))
        return objEvent;
    return window.event;
}
function GetEventTarget(objEvent) {
    if (Boolean(objEvent.srcElement))
        return objEvent.srcElement;
    return objEvent.target;
}
function EnsureIMNControl() {
ULSw7Q:
    ;
    if (!bIMNControlInited || IMNControlObj == null) {
        var serverPresenceEnabled = typeof g_presenceEnabled != "undefined" && g_presenceEnabled;

        try {
            if (IsSupportedMacBrowser()) {
                IMNControlObj = CreateMacPlugin();
            }
            else if (IsSupportedNPApiBrowserOnWin()) {
                IMNControlObj = CreateNPApiOnWindowsPlugin(WIN_FIREFOX_PLUGIN_IM_MIME_TYPE);
                if (IMNControlObj != null && serverPresenceEnabled)
                    IMNControlObj.OnStatusChange = IMNOnStatusChange;
            }
            else if (browseris.ie5up) {
                if (Boolean(window.ActiveXObject)) {
                    IMNControlObj = new ActiveXObject("Name.NameCtrl.1");
                    if (IMNControlObj && serverPresenceEnabled) {
                        var onStatusChange;

                        if (IsSupportedMacBrowser())
                            onStatusChange = "IMNOnStatusChange";
                        else
                            onStatusChange = IMNOnStatusChange;
                        IMNControlObj.OnStatusChange = onStatusChange;
                    }
                }
            }
            bIMNControlInited = true;
        }
        catch (e) {
            IMNControlObj = null;
        }
        AddEvtHandler(window, "onbeforeunload", DiscardIMNControl);
    }
    return IMNControlObj;
}
function DiscardIMNControl() {
ULSw7Q:
    ;
    IMNControlObj = null;
    bIMNControlInited = false;
}
function IMNImageInfo_InitializePrototype() {
ULSw7Q:
    ;
    IMNImageInfo.prototype.img = null;
    IMNImageInfo.prototype.classPrefix = null;
    IMNImageInfo.prototype.alt = '';
}
function IMNImageInfo() {
}
function IMNGetStatusImage(state, showoffline) {
ULSw7Q:
    ;
    var img = "spimn.png";
    var classPrefix = "ms-spimn-presence-disconnected";
    var alt = "";

    switch (state) {
    case 0:
        classPrefix = "ms-spimn-presence-online";
        alt = Strings.STS.L_IMNOnline_Text;
        break;
    case 11:
        classPrefix = "ms-spimn-presence-online-oof";
        alt = Strings.STS.L_IMNOnline_OOF_Text;
        break;
    case 1:
        if (showoffline) {
            classPrefix = "ms-spimn-presence-offline";
            alt = Strings.STS.L_IMNOffline_Text;
        }
        else {
            classPrefix = "";
            alt = "";
        }
        break;
    case 12:
        if (showoffline) {
            classPrefix = "ms-spimn-presence-offline-oof";
            alt = Strings.STS.L_IMNOffline_OOF_Text;
        }
        else {
            classPrefix = "";
            alt = "";
        }
        break;
    case 2:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 13:
        classPrefix = "ms-spimn-presence-away-oof";
        alt = Strings.STS.L_IMNAway_OOF_Text;
        break;
    case 3:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 14:
        classPrefix = "ms-spimn-presence-busy-oof";
        alt = Strings.STS.L_IMNBusy_OOF_Text;
        break;
    case 4:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 5:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 6:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 7:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 8:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 9:
        classPrefix = "ms-spimn-presence-donotdisturb";
        alt = Strings.STS.L_IMNDoNotDisturb_Text;
        break;
    case 15:
        classPrefix = "ms-spimn-presence-donotdisturb-oof";
        alt = Strings.STS.L_IMNDoNotDisturb_OOF_Text;
        break;
    case 21:
        classPrefix = "ms-spimn-presence-donotdisturb";
        alt = Strings.STS.L_IMNInPresentation_Text;
        break;
    case 10:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 16:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNIdle_Text;
        break;
    case 17:
        classPrefix = "ms-spimn-presence-away-oof";
        alt = Strings.STS.L_IMNIdle_OOF_Text;
        break;
    case 18:
        classPrefix = "ms-spimn-presence-blocked";
        alt = Strings.STS.L_IMNBlocked_Text;
        break;
    case 19:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 20:
        classPrefix = "ms-spimn-presence-busy-oof";
        alt = Strings.STS.L_IMNBusy_OOF_Text;
        break;
    }
    var imnInfo = new IMNImageInfo();

    imnInfo.img = img;
    imnInfo.classPrefix = classPrefix;
    imnInfo.alt = alt;
    return imnInfo;
}
function IMNGetHeaderImage() {
ULSw7Q:
    ;
    var imnInfo = new IMNImageInfo();

    imnInfo.img = "imnhdr.gif";
    imnInfo.alt = "";
    return imnInfo;
}
function IMNIsOnlineState(state) {
ULSw7Q:
    ;
    if (state == 1) {
        return false;
    }
    return true;
}
function IMNSortList(j, oldState, state) {
ULSw7Q:
    ;
    var objTable = null;
    var objRow = null;

    if (Boolean(IMNSortableObj) && IMNSortableObj[j]) {
        objRow = document.getElementById(j);
        while (Boolean(objRow) && !(objRow.tagName == "TR" && typeof objRow.Sortable != "undefined")) {
            objRow = objRow.parentNode;
        }
        objTable = objRow;
        while (Boolean(objTable) && objTable.tagName != "TABLE") {
            objTable = objTable.parentNode;
        }
        var objTableRows = objTable.rows;

        if (objTable != null && objRow != null) {
            if (objTableRows[1].style.display == "none") {
                for (var i = 1; i < 4; i++) {
                    objTableRows[i].style.display = "block";
                }
            }
            if (!IMNIsOnlineState(oldState) && IMNIsOnlineState(state)) {
                objTableRows[2].style.display = "none";
                i = 3;
                while (objTableRows[i].id != "Offline" && Number(objTableRows[i].innerText) < Number(objRow.innerText))
                    i++;
                if (typeof objTable.moveRow == 'function')
                    objTable.moveRow(objRow.rowIndex, i);
                if (objTableRows[objTableRows.length - 3].id == "Offline") {
                    objTableRows[objTableRows.length - 2].style.display = "block";
                }
            }
            else if (IMNIsOnlineState(oldState) && !IMNIsOnlineState(state)) {
                if (objRow.rowIndex == 3 && objTableRows[objRow.rowIndex + 1].id == "Offline") {
                    objTableRows[2].style.display = "block";
                }
                if (objTableRows[objTableRows.length - 3].id == "Offline") {
                    objTableRows[objTableRows.length - 2].style.display = "none";
                }
                i = objTableRows.length - 2;
                while (objTableRows[i - 1].id != "Offline" && Number(objTableRows[i].innerText) > Number(objRow.innerText))
                    i--;
                objTable.moveRow(objRow.rowIndex, i);
            }
        }
    }
}
function IMNOnStatusChange(nameParam, state, id) {
ULSw7Q:
    ;
    if (Boolean(IMNDictionaryObj)) {
        var img = IMNGetStatusImage(state, IMNSortableObj[id] || IMNShowOfflineObj[id]);

        if (IMNDictionaryObj[id] != state) {
            if (bIMNSorted)
                IMNSortList(id, IMNDictionaryObj[id], state);
            IMNUpdateImage(id, img);
            IMNDictionaryObj[id] = state;
        }
    }
}
function IMNUpdateImageClassPrefix(obj, classPrefix) {
ULSw7Q:
    ;
    var exp = /ms-spimn-presence-[a-zA-Z]*-([0-9])/i;
    var oldClass = obj.getAttribute("class");

    if (oldClass != null) {
        obj.setAttribute("class", oldClass.replace(exp, classPrefix + "-" + "$1"));
    }
}
function IMNUpdateImage(id, imgInfo) {
    var obj = document.images[id];

    if (Boolean(obj)) {
        var parentNode = obj.parentNode;

        if (parentNode.firstChild != obj)
            parentNode.insertBefore(obj, parentNode.firstChild);
        var img = imgInfo.img;
        var classPrefix = imgInfo.classPrefix;
        var alt = imgInfo.alt;
        var oldImg = obj.src;

        if (typeof obj.src == "undefined")
            oldImg = (obj.item(0)).src;
        var index = oldImg.lastIndexOf("/");
        var newImg = oldImg.slice(0, index + 1);

        newImg += img;
        IMNUpdateImageClassPrefix(obj, classPrefix);
        if (oldImg == newImg && img != 'blank.gif')
            return;
        if (typeof obj.altbase != 'undefined' && Boolean(obj.altbase)) {
            obj.alt = obj.altbase;
        }
        else {
            obj.alt = alt;
        }
        var useFilter = browseris.ie && browseris.ie55up && browseris.verIEFull < 7.0;
        var isPng = (newImg.toLowerCase()).indexOf(".png") > 0;

        if (useFilter) {
            if (isPng) {
                obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + newImg + "),sizingMethod=scale,enabled=true);";
                obj.src = "/_layouts/15/images/blank.gif?rev=23";
            }
            else {
                obj.style.filter = "";
                obj.src = newImg;
            }
        }
        else {
            obj.src = newImg;
        }
    }
}
function IMNHandleAccelerator(objEvent) {
ULSw7Q:
    ;
    if (IMNControlObj) {
        var currEvent = GetCurrentEvent(objEvent);

        if (currEvent.altKey && currEvent.shiftKey && currEvent.keyCode == 121) {
            if (typeof IMNControlObj.DoAccelerator != 'undefined')
                IMNControlObj.DoAccelerator();
        }
    }
}
function IMNImageOnClick(objEvent) {
ULSw7Q:
    ;
    if (IMNControlObj) {
        IMNShowOOUIKyb(objEvent);
        if (typeof IMNControlObj.DoAccelerator != 'undefined')
            IMNControlObj.DoAccelerator();
    }
}
function IMNGetOOUILocation(obj) {
ULSw7Q:
    ;
    var objRet = new Object;
    var objSpan = obj;
    var objOOUI = obj;
    var objImg = obj;
    var oouiX = 0, oouiY = 0, objDX = 0;
    var fRtl = document.dir == "rtl";
    var objSpanClass = objSpan.className;

    while (Boolean(objSpan) && (objSpanClass == null || objSpanClass.indexOf("ms-imnSpan") == -1) && objSpan.tagName != "TABLE") {
        if (objSpan.tagName == "TD" && objSpanClass.indexOf("ms-vb") >= 0)
            break;
        objSpan = objSpan.parentNode;
        if (!Boolean(objSpan))
            return null;
        objSpanClass = objSpan.className;
    }
    if (Boolean(objSpan)) {
        var childNode;

        if (objSpan.tagName == "TABLE") {
            var row = objSpan.rows(0);
            var cell = row.cells(0);

            childNode = cell.firstChild;
        }
        else
            childNode = objSpan.firstChild;
        while (childNode != null) {
            if (childNode.tagName == "A") {
                var linkDescendant = childNode.firstChild;

                while (linkDescendant != null) {
                    if (linkDescendant.tagName == "IMG" && Boolean(linkDescendant.id)) {
                        childNode = linkDescendant;
                        break;
                    }
                    linkDescendant = linkDescendant.firstChild;
                }
            }
            if (childNode.tagName == "IMG" && Boolean(childNode.id)) {
                objOOUI = childNode;
                break;
            }
            childNode = childNode.nextSibling;
        }
        objImg = objOOUI;
        objOOUI = objSpan;
    }
    obj = objOOUI;
    var zoom = 1;

    if (Boolean(browseris.ie9standardUp))
        zoom = window.screen.deviceXDPI / window.screen.logicalXDPI;
    oouiY = (objOOUI.getBoundingClientRect()).top * zoom - 5;
    oouiX = (objOOUI.getBoundingClientRect()).left * zoom - 5;
    var parentObj = objOOUI.parentNode;

    while ((oouiX < 0 || oouiY < 0) && parentObj != null && Boolean(parentObj.getBoundingClientRect)) {
        oouiY = (parentObj.getBoundingClientRect()).top * zoom - 5;
        oouiX = (parentObj.getBoundingClientRect()).left * zoom - 5;
        parentObj = parentObj.parentNode;
    }
    try {
        var currentWindow = window;

        while (Boolean(currentWindow) && currentWindow != currentWindow.parent) {
            var iframe = currentWindow.frameElement;
            var iframebcr = Boolean(iframe) ? iframe.getBoundingClientRect() : null;
            var iframetop = Boolean(iframebcr) ? iframebcr.top : 0;
            var iframeleft = Boolean(iframebcr) ? iframebcr.left : 0;

            oouiY += iframetop;
            oouiX += iframeleft;
            currentWindow = currentWindow.parent;
        }
    }
    catch (e) { }
    ;
    objRet.objSpan = objSpan;
    objRet.objOOUI = objOOUI != objSpan ? objOOUI : objImg;
    objRet.oouiX = oouiX;
    objRet.oouiY = oouiY;
    return objRet;
}
function IMNShowOOUIMouse(objEvent) {
ULSw7Q:
    ;
    IMNShowOOUI(objEvent, 0);
}
function IMNShowOOUIKyb(objEvent) {
ULSw7Q:
    ;
    IMNShowOOUI(objEvent, 1);
}
function IMNShowOOUI(objEvent, inputType) {
ULSw7Q:
    ;
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var currEvent = GetCurrentEvent(objEvent);
        var obj = GetEventTarget(currEvent);
        var objSpan = obj;
        var objOOUI = obj;
        var oouiX = 0, oouiY = 0;

        if (EnsureIMNControl() && Boolean(IMNNameDictionaryObj)) {
            var objRet = IMNGetOOUILocation(obj);

            if (Boolean(objRet)) {
                objSpan = objRet.objSpan;
                objOOUI = objRet.objOOUI;
                oouiX = objRet.oouiX;
                oouiY = objRet.oouiY;
                if (Boolean(currEvent.clientX))
                    oouiX = currEvent.clientX;
                var nameParam = IMNNameDictionaryObj[objOOUI.id];

                if (nameParam == null || nameParam.length < 1)
                    return;
                if (Boolean(objSpan))
                    objSpan.onkeydown = IMNHandleAccelerator;
                if (typeof IMNControlObj.ShowOOUI != 'undefined')
                    IMNControlObj.ShowOOUI(nameParam, inputType, Math.round(oouiX), Math.round(oouiY));
            }
        }
    }
}
function IMNHideOOUI() {
ULSw7Q:
    ;
    if (Boolean(IMNControlObj)) {
        if (typeof IMNControlObj.HideOOUI != 'undefined')
            IMNControlObj.HideOOUI();
        return false;
    }
    return true;
}
function IMNScroll() {
ULSw7Q:
    ;
    if (!bIMNInScrollFunc) {
        bIMNInScrollFunc = true;
        IMNHideOOUI();
    }
    bIMNInScrollFunc = false;
    if (IMNOrigScrollFunc == IMNScroll)
        return true;
    return Boolean(IMNOrigScrollFunc) ? IMNOrigScrollFunc() : true;
}
var imnCount;
var imnElems;
var imnElemsCount;
var imnMarkerBatchSize;
var imnMarkerBatchDelay;

function ProcessImn() {
ULSw7Q:
    ;
    imnCount = 0;
    imnElems = document.getElementsByName("imnmark");
    imnElemsCount = imnElems.length;
    if (EnsureIMNControl()) {
        ProcessImnMarkers();
    }
    else {
        RemoveImnAnchors();
    }
}
function ClientCanHandleImn() {
ULSw7Q:
    ;
    return EnsureIMNControl() && typeof IMNControlObj.PresenceEnabled != 'undefined' && IMNControlObj.PresenceEnabled;
}
function RemoveImnAnchors() {
ULSw7Q:
    ;
    for (var i = 0; i < imnElemsCount; i++) {
        var imnElem = imnElems[i];
        var imnAnchor = imnElem.parentNode;

        while (imnAnchor != null && !IsImnAnchor(imnAnchor)) {
            imnElem = imnAnchor;
            imnAnchor = imnAnchor.parentNode;
        }
        if (IsImnAnchor(imnAnchor) && imnAnchor.childNodes.length == 1) {
            imnAnchor.setAttribute("tabIndex", "-1");
            imnAnchor.onclick = null;
        }
    }
    var imnEmptyElems = document.getElementsByName("imnempty");

    for (i = 0; i < imnEmptyElems.length; i++) {
        imnElem = imnEmptyElems[i];
        imnAnchor = imnElem.parentNode;
        if (imnAnchor != null && imnAnchor.tagName == "SPAN" && !Boolean(imnAnchor.getAttribute("title")))
            imnAnchor.appendChild(imnElem);
    }
}
function ProcessImnMarkers() {
ULSw7Q:
    ;
    for (var i = 0; i < imnMarkerBatchSize; ++i) {
        if (imnCount == imnElemsCount)
            return;
        var imnElem = imnElems[imnCount];

        if (imnElem != null && typeof imnElem != 'undefined') {
            IMNRC(imnElem.getAttribute("sip"), imnElem);
        }
        imnCount++;
    }
    setTimeout("ProcessImnMarkers()", imnMarkerBatchDelay);
}
function IMNRC(nameParam, elem) {
ULSw7Q:
    ;
    if (nameParam == null || nameParam == '')
        return;
    var presenceEnabled = typeof g_presenceEnabled != "undefined" && g_presenceEnabled && EnsureIMNControl() && IMNControlObj.PresenceEnabled;

    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var obj = Boolean(elem) ? elem : window.event.srcElement;
        var objSpan = obj;
        var id = obj.id;

        if (!Boolean(IMNDictionaryObj)) {
            IMNDictionaryObj = new Object();
            IMNNameDictionaryObj = new Object();
            IMNSortableObj = new Object();
            IMNShowOfflineObj = new Object();
            if (!Boolean(IMNOrigScrollFunc)) {
                if (typeof window.onscroll != 'undefined')
                    IMNOrigScrollFunc = window.onscroll;
                window.onscroll = IMNScroll;
            }
        }
        if (Boolean(IMNDictionaryObj)) {
            if (!IMNNameDictionaryObj[id]) {
                IMNNameDictionaryObj[id] = nameParam;
            }
            if (typeof IMNDictionaryObj[id] == "undefined") {
                IMNDictionaryObj[id] = 1;
            }
            if (!IMNSortableObj[id] && typeof obj.Sortable != "undefined") {
                IMNSortableObj[id] = obj.Sortable;
                if (!bIMNOnloadAttached && presenceEnabled) {
                    AttachEvent("load", IMNSortTable, window);
                    bIMNOnloadAttached = true;
                }
            }
            if (!IMNShowOfflineObj[id] && obj.getAttribute("ShowOfflinePawn") != null) {
                IMNShowOfflineObj[id] = obj.getAttribute("ShowOfflinePawn");
            }
            if (presenceEnabled) {
                var state = 1, img;

                if (typeof IMNControlObj.GetStatus != 'undefined')
                    state = IMNControlObj.GetStatus(nameParam, id);
                if (IMNIsOnlineState(state) || IMNSortableObj[id] || IMNShowOfflineObj[id]) {
                    img = IMNGetStatusImage(state, IMNSortableObj[id] || IMNShowOfflineObj[id]);
                    IMNUpdateImage(id, img);
                    IMNDictionaryObj[id] = state;
                }
            }
        }
        var objRet = IMNGetOOUILocation(obj);

        if (Boolean(objRet)) {
            SetImnOnClickHandler(objRet.objOOUI);
            objSpan = objRet.objSpan;
            if (Boolean(objSpan)) {
                objSpan.onmouseover = IMNShowOOUIMouse;
                objSpan.onfocusin = IMNShowOOUIKyb;
                objSpan.onmouseout = IMNHideOOUI;
                objSpan.onfocusout = IMNHideOOUI;
            }
        }
    }
}
function IsImnAnchor(node) {
    if (!Boolean(node))
        return false;
    var nodeClass = node.className;

    return nodeClass != null && nodeClass.indexOf("ms-imnlink") != -1;
}
function SetImnOnClickHandler(imgNode) {
    var parentNode = imgNode.parentNode;
    var currNode = parentNode;
    var nodeClass = currNode.className;

    while (Boolean(currNode) && !IsImnAnchor(currNode)) {
        currNode = currNode.parentNode;
    }
    if (Boolean(currNode))
        parentNode = currNode;
    if (IsImnAnchor(parentNode)) {
        if (typeof parentNode.onclick == "undefined") {
            parentNode.onclick = IMNImageOnClickHandler;
        }
    }
    else {
        var anchor = document.createElement("a");

        anchor.onclick = IMNImageOnClickHandler;
        anchor.className = "ms-imnlink";
        anchor.href = "javascript:;";
        parentNode.insertBefore(anchor, imgNode);
        anchor.appendChild(imgNode);
    }
}
function IMNImageOnClickHandler(objEvent) {
ULSw7Q:
    ;
    IMNImageOnClick(objEvent);
    return false;
}
function IMNSortTable() {
ULSw7Q:
    ;
    var id;

    for (id in IMNDictionaryObj) {
        IMNSortList(id, 1, IMNDictionaryObj[id]);
    }
    bIMNSorted = true;
}
function IMNRegisterHeader(objEvent) {
ULSw7Q:
    ;
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var currEvent = GetCurrentEvent(objEvent);

        if (currEvent == null)
            return;
        var obj = GetEventTarget(currEvent);

        if (!Boolean(IMNHeaderObj)) {
            IMNHeaderObj = new Object();
        }
        if (Boolean(IMNHeaderObj)) {
            var id = obj.id;

            IMNHeaderObj[id] = id;
            var img;

            img = IMNGetHeaderImage();
            IMNUpdateImage(id, img);
        }
    }
}
function _TopHelpButtonClick(strParam) {
    if (typeof navBarHelpOverrideKey != "undefined")
        return HelpWindowKey(navBarHelpOverrideKey);
    if (strParam != null)
        HelpWindowKey(strParam);
    else
        HelpWindowKey("HelpHome");
}
function GetSPHelpUrl(strParam) {
ULSw7Q:
    ;
    var queryString;
    var siteurl;

    if (typeof strParam == "undefined") {
        queryString = "?Lcid=" + Strings.STS.L_Language_Text;
    }
    else {
        queryString = "?Lcid=" + Strings.STS.L_Language_Text + strParam;
    }
    var strHelpUrl;

    if (typeof ctx == "undefined" || ctx == null) {
        if (typeof currentCtx != 'undefined' && currentCtx != null)
            ctx = currentCtx;
        else if (typeof ctxFilter != 'undefined' && ctxFilter != null)
            ctx = ctxFilter;
    }
    if (typeof ctx != "undefined" && ctx != null && typeof ctx.HttpRoot != "undefined" && ctx.HttpRoot != null) {
        siteurl = ctx.HttpRoot;
        if (siteurl.charAt(siteurl.length - 1) != '/') {
            siteurl = siteurl + "/";
        }
        strHelpUrl = siteurl + "_layouts/15/help.aspx";
    }
    if (strHelpUrl == null && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && typeof _spPageContextInfo.webServerRelativeUrl != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        siteurl = _spPageContextInfo.webServerRelativeUrl;
        if (siteurl.charAt(siteurl.length - 1) != '/') {
            siteurl = siteurl + "/";
        }
        strHelpUrl = siteurl + "_layouts/15/help.aspx";
    }
    if (strHelpUrl == null) {
        strHelpUrl = "/_layouts/15/help.aspx";
    }
    return strHelpUrl + queryString;
}
function ShowHelpWindow(strUrl) {
    if (strUrl != null) {
        var wndHelp = window.open(strUrl, 'STSHELP_15', 'height=500,location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no,width=400');

        wndHelp.focus();
    }
}
function HelpWindowHelper(strParam) {
    if (SuiteLinksEmptyOrSuiteHelpLinkIsCached()) {
        GetSuiteLinks(null, function(linksJson) {
        ULSw7Q:
            ;
            SP.SOD.executeFunc("suitelinks.js", "GetSPOHelpUrl", function() {
            ULSw7Q:
                ;
                var onlineHelpUrl = GetSPOHelpUrl(linksJson, strParam);

                ShowHelpWindow(onlineHelpUrl);
            });
        });
    }
    else {
        var onPremHelpUrl = GetSPHelpUrl(strParam);

        ShowHelpWindow(onPremHelpUrl);
    }
}
function _HelpWindowKey(strKey) {
    if (strKey != null)
        HelpWindowHelper("&Key=" + strKey + "&ShowNav=true");
    else
        HelpWindowHelper("&Key=HelpHome&ShowNav=true");
}
function _HelpWindowUrl(strUrl) {
    HelpWindowHelper("&Url=" + strUrl);
}
function _HelpWindow() {
ULSw7Q:
    ;
    HelpWindowKey("HelpHome");
}
function EditSelectedImages() {
ULSw7Q:
    ;
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _EditSelectedImages();
}
function DeleteImages() {
ULSw7Q:
    ;
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _DeleteImages();
}
function SendImages() {
ULSw7Q:
    ;
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _SendImages();
}
function DownloadImages() {
ULSw7Q:
    ;
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _DownloadImages();
}
function MtgToggleTimeZone() {
ULSw7Q:
    ;
    var timezoneElem = document.getElementById("TimeZoneSection");
    var timezoneLinkElem = document.getElementById("TimeZoneLink");

    if (timezoneElem.style.display == "none") {
        timezoneElem.style.display = "";
        timezoneLinkElem.innerHTML = "&lt;&lt;";
        timezoneLinkElem.title = Strings.STS.L_HideTZ_Text;
        SetMtgCookie("MtgTimeZone", "1", "");
    }
    else {
        timezoneElem.style.display = "none";
        timezoneLinkElem.innerHTML = "&gt;&gt;";
        timezoneLinkElem.title = Strings.STS.L_ShowTZ_Text;
        SetMtgCookie("MtgTimeZone", "0", "");
    }
}
function GetPageUrl(fHomePage) {
    var url = undefined;

    if (fHomePage && typeof g_webUrl != "undefined")
        url = g_webUrl;
    else if (typeof g_pageUrl != "undefined")
        url = g_pageUrl;
    return unescapeProperly(url);
}
function MtgNavigate(instanceId) {
    if (typeof g_instanceId != "undefined" && instanceId == g_instanceId)
        return;
    if (typeof g_fPageGlobal != "undefined")
        var fHomePage = !g_fPageGlobal;
    if (typeof g_thispagedata != "undefined")
        var thispagedata = g_thispagedata;
    window.location.href = GetPageUrl(fHomePage) + '?InstanceID=' + instanceId + '&' + thispagedata;
}
function GoToMtgMove(listUrlDir, instanceId, instanceDateTime, instanceDateTimeISO) {
    window.location.href = listUrlDir + '/movetodt.aspx' + '?FromInstanceID=' + instanceId + '&FromInstanceDate=' + escapeProperly(instanceDateTime) + '&FromInstanceDateISO=' + escapeProperly(instanceDateTimeISO) + '&Source=' + escapeProperly(window.location.href);
}
function MtgKeep(httpPath, listId, instanceId) {
    if (confirm(Strings.STS.L_MtgKeepConfirm_Text))
        SubmitFormPost(httpPath + '&Cmd=MtgKeep&List=' + escapeProperly(listId) + '&EditInstanceID=' + instanceId + '&NextUsing=' + escapeProperly(window.location.href));
}
function MtgDelete(httpPath, listId, instanceId) {
    if (confirm(Strings.STS.L_MtgDeleteConfirm_Text)) {
        var fHomePage = instanceId == g_instanceId;

        SubmitFormPost(httpPath + '&Cmd=MtgMove&List=' + escapeProperly(listId) + '&FromInstanceID=' + instanceId + '&ToInstanceID=-3' + '&NextUsing=' + escapeProperly(fHomePage ? GetPageUrl(true) : window.location.href));
    }
}
function SetMtgCookie(cookieName, value, path) {
    document.cookie = cookieName + "=" + value + ";path=" + path;
}
function SetAsLastTabVisited() {
ULSw7Q:
    ;
    if (typeof g_pageUrl != "undefined" && typeof g_webUrl != "undefined")
        SetMtgCookie("MtgLastTabVisited", escapeProperly(unescapeProperly(g_pageUrl)), escapeProperlyCore(unescapeProperly(g_webUrl), true));
}
function MtgRedirect() {
ULSw7Q:
    ;
    var strServerRelative = GetCookie("MtgLastTabVisited");

    if (strServerRelative == null) {
        if (typeof g_webUrl != "undefined")
            strServerRelative = g_webUrl;
        else
            strServerRelative = "../../";
    }
    else
        strServerRelative = escapeProperlyCore(strServerRelative, true);
    window.location.href = strServerRelative;
}
function MakeMtgInstanceUrl(strUrl, instanceID) {
    if (instanceID != "undefined" && instanceID != '') {
        var iQueryString = strUrl.indexOf('?');

        if (iQueryString == -1 || strUrl.indexOf('InstanceID=', iQueryString) == -1)
            strUrl = strUrl + (iQueryString == -1 ? '?' : '&') + 'InstanceID=' + instanceID;
    }
    return strUrl;
}
var g_dlgWndTop;
var g_spDlgLauncher;
var g_ModalDialogCount;
var g_overlayPopup;
var g_childDialog;

function _dlgWndTop() {
ULSw7Q:
    ;
    if (Boolean(g_dlgWndTop)) {
        return g_dlgWndTop;
    }
    try {
        var wnd = window;

        while (wnd != null && wnd != wnd.parent) {
            wnd = wnd.parent;
            if (wnd != null && wnd.g_spDlgLauncher) {
                g_dlgWndTop = wnd;
            }
        }
    }
    catch (e) { }
    finally {
        if (!Boolean(g_dlgWndTop)) {
            g_dlgWndTop = window;
        }
    }
    return g_dlgWndTop;
}
function commonShowModalDialog(url, features, callback, args) {
    function assocArray() {
    ULSw7Q:
        ;
        return [];
    }
    function assocArray_add(array, key, value) {
        array.push(key);
        array[key] = value;
    }
    function assocArray_keys(array) {
        var k = [];

        for (var j = 0; j < array.length; j++)
            k.push(array[j]);
        return k;
    }
    if (document.getElementById("__spPickerHasReturnValue") != null)
        (document.getElementById("__spPickerHasReturnValue")).value = "";
    if (document.getElementById("__spPickerReturnValueHolder") != null)
        (document.getElementById("__spPickerReturnValueHolder")).value = "";
    commonModalDialogReturnValue.clear();
    var rv;

    if (Boolean(window.showModalDialog)) {
        rv = window.showModalDialog(url, args, features);
        if (Boolean(callback)) {
            invokeModalDialogCallback(callback, rv);
        }
    }
    else {
        var defaultWidth = 500, defaultHeight = 550, defaultScrollbars = "yes";

        if (!Boolean(features))
            features = "width=" + String(defaultWidth) + ",height=" + String(defaultHeight);
        else {
            var feats = assocArray(), fre, split;

            if (features.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) != -1) {
                fre = /^\s*(\w+)\s*:\s*(.+?)\s*$/;
                split = features.split(/\s*;\s*/);
            }
            else {
                fre = /^\s*(\w+)\s*=\s*(.+?)\s*$/;
                split = features.split(/\s*,\s*/);
            }
            for (var feat in split) {
                var kv = fre.exec(split[feat]);

                if (Boolean(kv) && kv.length == 3)
                    assocArray_add(feats, kv[1].toLowerCase(), kv[2]);
            }
            if (!Boolean(feats["width"]))
                assocArray_add(feats, "width", feats["dialogwidth"] || Boolean(defaultWidth));
            if (!Boolean(feats["height"]))
                assocArray_add(feats, "height", feats["dialogheight"] || Boolean(defaultHeight));
            if (!Boolean(feats["scrollbars"]))
                assocArray_add(feats, "scrollbars", feats["scroll"] || Boolean(defaultScrollbars));
            features = '';
            var keys = assocArray_keys(feats);

            for (var i in keys) {
                if (Boolean(features))
                    features += ",";
                features += keys[i] + "=" + feats[keys[i]];
            }
        }
        var modalDialog = window.open(url, '_blank', features + ',modal=yes,dialog=yes');

        modalDialog.dialogArguments = args;
        window.onfocus = function() {
        ULSw7Q:
            ;
            var bHasReturnValue = document.getElementById("__spPickerHasReturnValue") != null && (document.getElementById("__spPickerHasReturnValue")).value == "1" || commonModalDialogReturnValue.isSet();

            if (Boolean(modalDialog) && !modalDialog.closed && !bHasReturnValue) {
                modalDialog.focus();
            }
            else {
                window.onfocus = null;
                if (Boolean(callback)) {
                    invokeModalDialogCallback(callback, rv);
                }
            }
        };
        if (!browseris.ie) {
            if (window.frameElement != null) {
                window.fndlgClose = callback;
            }
        }
    }
    return rv;
}
function invokeModalDialogCallback(callback, rv) {
ULSw7Q:
    ;
    if (typeof rv != "undefined" && rv != null) {
        callback(rv);
    }
    else if (commonModalDialogReturnValue.isSet()) {
        rv = commonModalDialogReturnValue.get();
        callback(rv);
        commonModalDialogReturnValue.clear();
    }
    else if (document.getElementById("__spPickerHasReturnValue") != null && (document.getElementById("__spPickerHasReturnValue")).value == "1" && document.getElementById("__spPickerReturnValueHolder") != null) {
        rv = (document.getElementById("__spPickerReturnValueHolder")).value;
        callback(rv);
    }
    return rv;
}
function setModalDialogReturnValue(wnd, returnValue) {
    if (wnd.opener != null && typeof returnValue == 'string' && wnd.opener.document.getElementById('__spPickerHasReturnValue') != null && wnd.opener.document.getElementById('__spPickerReturnValueHolder') != null) {
        (wnd.opener.document.getElementById('__spPickerHasReturnValue')).value = '1';
        (wnd.opener.document.getElementById('__spPickerReturnValueHolder')).value = returnValue;
    }
    else {
        setModalDialogObjectReturnValue(wnd, returnValue);
    }
    if (browseris.safari125up) {
        if (wnd.opener != null && wnd.opener.fndlgClose != null)
            wnd.opener.fndlgClose(returnValue);
    }
}
function setModalDialogObjectReturnValue(wnd, returnValue) {
ULSw7Q:
    ;
    if (Boolean(wnd.showModalDialog)) {
        wnd.returnValue = returnValue;
    }
    if (wnd.opener != null) {
        if (typeof wnd.opener.commonModalDialogReturnValue != 'undefined') {
            var retVal = wnd.opener.commonModalDialogReturnValue;

            retVal.set(returnValue);
        }
    }
}
function CommonGlobalDialogReturnValue_InitializePrototype() {
ULSw7Q:
    ;
    CommonGlobalDialogReturnValue.prototype.hasRetVal = undefined;
    CommonGlobalDialogReturnValue.prototype.retVal = undefined;
    CommonGlobalDialogReturnValue.prototype.set = function(obj) {
    ULSw7Q:
        ;
        if (typeof obj != "undefined") {
            this.retVal = obj;
            this.hasRetval = true;
        }
    };
    CommonGlobalDialogReturnValue.prototype.isSet = function() {
    ULSw7Q:
        ;
        return this.hasRetval;
    };
    CommonGlobalDialogReturnValue.prototype.get = function() {
    ULSw7Q:
        ;
        if (this.hasRetval)
            return this.retVal;
        else
            return undefined;
    };
    CommonGlobalDialogReturnValue.prototype.clear = function() {
    ULSw7Q:
        ;
        this.hasRetval = false;
        this.retVal = null;
    };
}
function CommonGlobalDialogReturnValue() {
}
var commonModalDialogReturnValue;

function commonModalDialogOpen(url, options, callback, args) {
ULSw7Q:
    ;
    options.url = url;
    options.dialogReturnValueCallback = callback;
    options.args = args;
    EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
}
function commonModalDialogClose(dialogResult, returnValue) {
ULSw7Q:
    ;
    var dlg;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg)) {
        dlg.set_returnValue(returnValue);
        dlg.close(dialogResult);
    }
}
function commonModalDialogGetArguments() {
ULSw7Q:
    ;
    var dlg;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg) && typeof dlg.get_args != "undefined")
        return dlg.get_args();
    return null;
}
function ShowPopupDialog(dlgUrl) {
ULSw7Q:
    ;
    ShowPopupDialogWithCallback(dlgUrl, PopupDialogCallback);
}
function ShowPopupDialogWithCallback(dlgUrl, dialogCallback) {
ULSw7Q:
    ;
    if (FV4UI()) {
        var dlgOptions = {
            url: dlgUrl,
            dialogReturnValueCallback: dialogCallback
        };

        EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dlgOptions);
    }
    else
        STSNavigate(dlgUrl);
}
function PopupDialogCallback(dialogResult, returnValue) {
ULSw7Q:
    ;
    if (dialogResult == 1) {
        STSNavigate((_dlgWndTop()).location.href);
    }
}
var filterTable;
var bIsFilterMenuShown;
var bIsFilterDataLoaded;
var filterImageCell;
var currentFilterMenu;
var loadingFilterMenu;
var ctxFilter;
var bIsFilterKeyPress;
var filterStr;
var strFieldName;
var bMenuLoadInProgress;
var strFilteredValue;
var bIsMultiFilter;
var fnOnFilterMouseOut;

function resetFilterMenuState() {
ULSw7Q:
    ;
    if (bMenuLoadInProgress)
        return;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterTable = null;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    if (fnOnFilterMouseOut != null)
        fnOnFilterMouseOut();
    fnOnFilterMouseOut = null;
}
function setupFilterMenuContext(ctxArg) {
    ctxFilter = ctxArg;
}
function IsFilterMenuOn() {
ULSw7Q:
    ;
    var bIsOpen = false;

    if (!bIsFilterMenuShown)
        return false;
    bIsOpen = bMenuLoadInProgress || MenuHtc_isOpen(currentFilterMenu) || MenuHtc_isOpen(loadingFilterMenu);
    if (!bIsOpen)
        bIsFilterMenuShown = false;
    return bIsOpen;
}
function IsFilterMenuEnabled(elm) {
    if (elm == null)
        return true;
    var elmCtx = CtxFromElement(elm);

    if (elmCtx != null && typeof elmCtx.fullListSearch != "undefined" && Boolean(elmCtx.fullListSearch)) {
        return false;
    }
    return true;
}
function OnMouseOverFilterDeferCall(elm) {
    if (!IsFilterMenuEnabled(elm))
        return false;
    if (IsFilterMenuOn() || bMenuLoadInProgress) {
        return false;
    }
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1)
        return false;
    if (typeof elm.FilterDisable != undefined && elm.FilterDisable == "TRUE")
        return false;
    if (IsFieldNotFilterable(elm) && IsFieldNotSortable(elm))
        return false;
    if (filterTable == elm)
        return true;
    if (filterTable != null)
        OnMouseOutFilter();
    filterTable = elm;
    var isTable = filterTable.tagName == "TABLE";
    var curCtx;

    try {
        curCtx = eval("ctx" + filterTable.getAttribute('CtxNum'));
    }
    catch (e) { }
    if (typeof curCtx == 'undefined')
        return false;
    var createCtx = new Function("setupFilterMenuContext(ctx" + filterTable.getAttribute('CtxNum') + ");");

    createCtx();
    if (isTable) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable);
    }
    else {
        var par = filterTable.parentNode;

        SetEvent("click", CreateFilterMenu, par);
        SetEvent("contextmenu", CreateFilterMenu, par);
        SetEvent("mouseout", OnMouseOutFilter, par);
        CreateCtxImg(par, OnMouseOutFilter);
    }
    if (isTable) {
        var titleParent = filterTable.childNodes[0];
        var titleRow = titleParent.childNodes[0];

        filterImageCell = titleRow.childNodes[titleRow.childNodes.length - 1];
        var filterArrow = filterImageCell.childNodes[0];

        filterArrow.src = ctxFilter.imagesPath + "menudark.gif";
        filterArrow.alt = Strings.STS.L_OpenMenu_Text;
        filterArrow.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px";
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px";
        }
        filterImageCell.className = "ms-menuimagecell";
    }
    return true;
}
function OnMouseOutFilter(evt) {
    if (!IsFilterMenuOn() && filterTable != null && !bMenuLoadInProgress) {
        var isTable = filterTable.tagName == "TABLE";
        var par = filterTable.parentNode;

        if (isTable || par == null) {
            filterTable.className = "ms-unselectedtitle";
            filterTable.onclick = null;
            filterTable.oncontextmenu = null;
            filterTable.onmouseout = null;
        }
        else {
            if (evt == null)
                evt = window.event;
            if (evt != null) {
                var toElem = typeof evt.toElement != "undefined" && evt.toElement != null ? evt.toElement : evt.relatedTarget;

                if (par != null && toElem != null && IsContained(toElem, par))
                    return;
            }
            par.onclick = null;
            par.oncontextmenu = null;
            par.onmouseout = null;
            RemoveCtxImg(par);
        }
        if (isTable && filterImageCell != null && filterImageCell.childNodes.length > 0) {
            filterImageCell.childNodes[0].style.visibility = "hidden";
            filterImageCell.className = "";
        }
        resetFilterMenuState();
    }
}
function _OnFocusFilter(elm) {
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1)
        return false;
    if (!IsFilterMenuEnabled(elm))
        return false;
    elm.onfocusout = OnMouseOutFilter;
    elm.onkeydown = PopFilterMenu;
    var filterString = elm.getAttribute('FilterString');

    if (filterString != null)
        filterStr = filterString;
    var elmTmp = FindSTSMenuTable(elm, "CTXNum");

    if (elmTmp == null)
        return false;
    OnMouseOverFilter(elmTmp);
    return false;
}
function PopFilterMenu(e) {
    var nKeyCode;

    if (e == null)
        e = window.event;
    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (!IsFilterMenuOn() && (e.shiftKey && nKeyCode == 13 || e.altKey && nKeyCode == 40)) {
        var headerlink = Boolean(e.srcElement) ? e.srcElement : e.target;

        if (!IsFilterMenuEnabled(headerlink))
            return true;
        var headerdiv = FindSTSMenuTable(headerlink, "CTXNum");

        if (headerdiv == null)
            return false;
        OnMouseOverFilterDeferCall(headerdiv);
        CreateFilterMenu(e);
        return false;
    }
    else {
        return true;
    }
}
function CreateFilterMenu(e) {
    if (filterTable == null || filterTable.tagName == "TABLE" && filterImageCell == null)
        return true;
    var headerCell = filterTable.tagName == "DIV" ? filterTable.parentNode : filterTable;
    var div = FindCtxImg(headerCell);

    if (div != null && div['shown'] == false)
        ShowCtxImg(div, true, headerCell);
    if (e == null)
        e = window.event;
    bIsFilterMenuShown = true;
    window["origBodyOnClickHandler"] = document.body.onclick;
    window.document.body.onclick = null;
    currentFilterMenu = CMenu("filter_menu");
    loadingFilterMenu = CMenu("filter_menu_loading");
    currentFilterMenu.setAttribute("CompactMode", "true");
    addSortMenuItems(currentFilterMenu, loadingFilterMenu);
    if (filterStr == null)
        addFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    else
        addAdHocFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    if (HasCssClass(headerCell, "ms-headerCellStylePressed") || HasCssClass(headerCell, "ms-headerCellStyleHover")) {
        RemoveCssClassFromElement(headerCell, "ms-headerCellStylePressed");
        RemoveCssClassFromElement(headerCell, "ms-headerCellStyleHover");
        AddCssClassToElement(headerCell, "ms-headerCellStyleMenuOpen");
    }
    if (e != null && e.stopPropagation != null) {
        e.stopPropagation();
    }
    return false;
}
function GetUrlWithNoSortParameters(strSortFields) {
    var url = ajaxNavigate.get_href();
    var uri = new URI(url, {
        disableEncodingDecodingForLegacyCode: true
    });

    uri.setFragment("");
    url = uri.getString();
    var strT;
    var ichStart = 0;
    var ichEqual;
    var ichAmp;

    do {
        ichEqual = strSortFields.indexOf("=", ichStart);
        if (ichEqual == -1)
            return url;
        strT = strSortFields.substring(ichStart, ichEqual);
        if (strT != "")
            url = RemoveQueryParameterFromUrl(url, strT);
        if (typeof strT == "string" && strT.length > "FilterField".length && strT.substring(0, "FilterField".length) == "FilterField") {
            var filterFieldNumString = strT.substring("FilterField".length);

            url = RemoveQueryParameterFromUrl(url, "FilterValue" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterLookupId" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterOp" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterData" + filterFieldNumString);
        }
        ichAmp = strSortFields.indexOf("&", ichEqual + 1);
        if (ichAmp == -1)
            return url;
        ichStart = ichAmp + 1;
    } while (strT != "");
    return url;
}
function IsFieldNotSortable(elm) {
    if (elm.getAttribute('Sortable') == "FALSE" || elm.getAttribute('SortDisable') == "TRUE" || elm.getAttribute('FieldType') == "MultiChoice") {
        return true;
    }
    return false;
}
function addSortMenuItems(menu, menuLoading) {
    if (IsFieldNotSortable(filterTable)) {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
        CAMSep(menu);
        CAMSep(menuLoading);
        return;
    }
    var strSortAsc = "";
    var strSortDesc = "";
    var strFieldType = "";
    var strImageAZ = GetThemedLocalizedImageUrl("SortUpGlyph.png");
    var strImageZA = GetThemedLocalizedImageUrl("SortDownGlyph.png");

    if (filterStr == null) {
        var str = ctxFilter.queryString;

        if (null == str || str == "") {
            str = filterTable.getAttribute('SortFields');
        }
        else {
            var sortField = GetUrlKeyValue("SortField", true, str);
            var sortFields = filterTable.getAttribute('SortFields');
            var sortField2 = GetUrlKeyValue("SortField", true, sortFields);

            if (sortField != sortField2) {
                str = SetUrlKeyValue("SortField", sortField2, false, str);
                str = SetUrlKeyValue("SortDir", GetUrlKeyValue("SortDir", true, sortFields), false, str);
            }
        }
        var uri = new URI(str, {
            disableEncodingDecodingForLegacyCode: true
        });

        if ((uri.getQuery()).length > 0)
            str = uri.getQuery();
        var ichSort = str.indexOf("&SortDir");

        if (ichSort == -1) {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
            CAMSep(menu);
            CAMSep(menuLoading);
            return;
        }
        var ichSortMac = str.indexOf("&", ichSort + 1);
        var url = GetUrlWithNoSortParameters(str);

        url = RemovePagingArgs(url);
        uri = new URI(url, {
            disableEncodingDecodingForLegacyCode: true
        });
        var strQ = "?" + uri.getQuery();

        if (strQ.length > 1)
            strQ += '&';
        var strQSav = strQ;

        if (ichSortMac < 0)
            ichSortMac = str.length;
        strQ += str.substr(0, ichSort) + "&SortDir=Asc" + str.substr(ichSortMac);
        uri.setQuery(strQ);
        strSortAsc = "HandleFilter(event, '" + STSScriptEncode(uri.getString()) + "', 1);";
        strQ = strQSav;
        strQ += str.substr(0, ichSort) + "&SortDir=Desc" + str.substr(ichSortMac);
        uri.setQuery(strQ);
        strSortDesc = "HandleFilter(event, '" + STSScriptEncode(uri.getString()) + "', 1);";
        if (strSortAsc.indexOf('?') >= 0)
            if ((strSortAsc.substr(strSortAsc.indexOf('?') + 1)).indexOf('?') >= 0)
                debugger;
        strFieldType = filterTable.getAttribute('FieldType');
        strFieldName = filterTable.getAttribute('Name');
    }
    else {
        var separator = ' ';
        var index = filterStr.lastIndexOf(separator);

        strFieldType = filterStr.substring(index + 1);
        if (strFieldType.substring(0, 2) == "x:")
            strFieldType = strFieldType.substring(2);
        var curStr = filterStr.substring(0, index);

        index = curStr.lastIndexOf(separator);
        strFieldName = curStr.substring(index + 1);
        if (strFieldName.substring(0, 1) == '@')
            strFieldName = strFieldName.substring(1);
        curStr = filterStr.substring(0, index);
        index = curStr.lastIndexOf(separator);
        if (index > 0) {
            strFieldName = curStr.substring(0, index);
        }
        var isTable = filterTable.tagName == "TABLE";
        var filterATag = null;

        if (isTable) {
            var titleParent = filterTable.childNodes[0];
            var titleRow = titleParent.childNodes[0];
            var filerATagParent = titleRow.childNodes[0];

            filterATag = filerATagParent.childNodes[0];
            if (filterATag.tagName == "TABLE") {
                var tmpElem = filterATag.childNodes[0];

                tmpElem = tmpElem.childNodes[0];
                tmpElem = tmpElem.childNodes[1];
                filterATag = tmpElem.childNodes[0];
            }
        }
        else {
            filterATag = filterTable.firstChild;
        }
        if (filterATag.tagName == "DIV")
            filterATag = filterATag.childNodes[0];
        var strSort = filterATag.href;

        strSort = strSort.replace(/%20/g, " ");
        if (strSort.indexOf("'ascending'") > 0) {
            strSortAsc = strSort.replace("'ascending'", "ascending");
            strSortDesc = strSort.replace("'ascending'", "descending");
        }
        else {
            strSortDesc = strSort.replace("'descending'", "descending");
            strSortAsc = strSort.replace("'descending'", "ascending");
        }
    }
    strFieldType = strFieldType.toLowerCase();
    if (strFieldType == "dateTime") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "integer" || strFieldType == "number" || strFieldType == "currency") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_SmallestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_LargestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "text" || strFieldType == "user" || strFieldType == "string") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_AOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_ZOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "calculated") {
        var strResultType = filterTable.getAttribute('ResultType');

        if (strResultType == "Number" || strResultType == "Currency") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_SmallestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_LargestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else if (strResultType == "dateTime") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else if (strResultType == "boolean") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_AOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_ZOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
    }
    else if (strFieldType == "attachments") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_BlanksOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_AttachmentsOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "lookup") {
        var curFieldName = filterTable.getAttribute('Name');

        if (curFieldName == "Last_x0020_Modified" || curFieldName == "Created_x0020_Date") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
    }
    else {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    CAMSep(menu);
    CAMSep(menuLoading);
}
function CAMOptFilter(menu, menuLoading, wzText, wzAct, wzImage, bEnabled, strId) {
    var mi;

    mi = CAMOpt(menu, wzText, wzAct, wzImage);
    mi.id = strId;
    if (!bEnabled) {
        mi.setAttribute("enabled", "false");
        mi.disabled = true;
    }
    mi = CAMOpt(menuLoading, wzText, wzAct, wzImage);
    mi.id = strId + "_p";
    if (!bEnabled) {
        mi.setAttribute("enabled", "false");
        mi.disabled = true;
    }
}
function ShowFilterLoadingMenu() {
ULSw7Q:
    ;
    if (!bIsFilterDataLoaded && filterTable != null)
        FilterOMenu(loadingFilterMenu, filterTable);
}
function IsFieldNotFilterable(elm) {
    if (elm.getAttribute('Filterable') == "FALSE" || elm.getAttribute('FilterDisable') == "TRUE" || elm.getAttribute('FieldType ') == "Note" || elm.getAttribute('FieldType ') == "URL") {
        return true;
    }
    return false;
}
function addFilteringDisabledMenuItem(menu) {
    FilterOMenu(menu, filterTable);
    menu._onDestroy = OnMouseOutFilter;
}
function addFilterMenuItems(menu, menuLoading) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(menu);
        return;
    }
    var iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));

    if (iframe == null)
        return;
    var strDocUrl = ctxFilter.queryString;

    if (null == strDocUrl || strDocUrl == "") {
        strDocUrl = iframe.getAttribute('FilterLink');
    }
    if (strDocUrl == null || strDocUrl == "") {
        window.alert("Unexpected");
    }
    if (strDocUrl == '?') {
        var strHash = ajaxNavigate.getParam("InplviewHash" + ctxFilter.view);

        if (Boolean(strHash))
            strDocUrl += DecodeHashAsQueryString(strHash);
    }
    var strFilterField = escapeProperly(filterTable.getAttribute('Name'));

    strFilteredValue = null;
    var strFilterQuery = "";
    var filterNo = 0;
    var arrayField;
    var arrayValue;

    do {
        filterNo++;
        var multi = false;

        arrayField = strDocUrl.match(new RegExp("FilterField" + String(filterNo) + "=[^&#]*"));
        if (!Boolean(arrayField))
            arrayField = strDocUrl.match(new RegExp("FilterFields" + String(filterNo) + "=[^&#]*"));
        arrayValue = strDocUrl.match(new RegExp("&FilterValue" + String(filterNo) + "=[^&#]*"));
        if (!Boolean(arrayValue)) {
            arrayValue = strDocUrl.match(new RegExp("&FilterValues" + String(filterNo) + "=[^&#]*"));
            multi = true;
        }
        if (arrayField != null && arrayValue != null) {
            if (strFilteredValue == null) {
                strFilteredValue = getFilterValueFromUrl(arrayField.toString() + arrayValue.toString(), strFilterField);
                bIsMultiFilter = multi;
            }
            strFilterQuery = strFilterQuery + "&" + arrayField.toString() + arrayValue.toString();
            var arrayOp = strDocUrl.match(new RegExp("&FilterOp" + String(filterNo) + "=[^&#]*"));

            if (arrayOp != null)
                strFilterQuery = strFilterQuery + arrayOp.toString();
            var arrayLookupId = strDocUrl.match(new RegExp("&FilterLookupId" + String(filterNo) + "=[^&#]*"));

            if (arrayLookupId != null)
                strFilterQuery = strFilterQuery + arrayLookupId.toString();
            var arrayData = strDocUrl.match(new RegExp("&FilterData" + String(filterNo) + "=[^&#]*"));

            if (arrayData != null)
                strFilterQuery = strFilterQuery + arrayData.toString();
            if (arrayLookupId != null && arrayData == null && strFilteredValue != null) {
                addFilteringDisabledMenuItem(menu);
                return;
            }
        }
    } while (null != arrayField);
    var bFiltered = strFilteredValue != null;
    var strDisplayText = StBuildParam(Strings.STS.L_DontFilterBy_Text, filterTable.getAttribute('DisplayName'));
    var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, strFilterField, "", 0, ctxFilter.queryString, true)) + "')";
    var strImageUrl;

    if (bFiltered)
        strImageUrl = GetThemedImageUrl("DeleteFilterGlyph.png");
    else
        strImageUrl = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    CAMOptFilter(menu, menuLoading, strDisplayText, strFilterUrl, strImageUrl, bFiltered, "fmi_clr");
    var mi = CAMOpt(menuLoading, Strings.STS.L_Loading_Text, "");

    mi.setAttribute("enabled", "false");
    setTimeout("ShowFilterLoadingMenu()", 500);
    menuLoading._onDestroy = OnMouseOutFilter;
    arrayField = strDocUrl.match(new RegExp("MembershipGroupId=[^&]*"));
    if (arrayField != null) {
        strFilterQuery = strFilterQuery + "&" + arrayField.toString();
    }
    arrayField = strDocUrl.match(new RegExp("InstanceID=[^&]*"));
    if (arrayField != null) {
        strFilterQuery = strFilterQuery + "&" + arrayField.toString();
    }
    if (strFilterQuery != null && strFilterQuery.length > 0) {
        if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) {
            strFilterQuery = "&" + ReconcileQstringFilters(strFilterQuery.substring(1), ctxFilter.overrideFilterQstring);
        }
    }
    else {
        if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) {
            strFilterQuery = "&" + ctxFilter.overrideFilterQstring;
        }
    }
    var strRootFolder = "";
    var clvp;

    if (ctxFilter != null && (clvp = ctxFilter.clvp) != null && clvp.rootFolder != null && clvp.rootFolder.length > 0) {
        strRootFolder = "&RootFolder=" + escapeProperlyCore(clvp.rootFolder, true);
    }
    else {
        arrayField = strDocUrl.match(new RegExp("RootFolder=[^&]*"));
        if (arrayField != null)
            strRootFolder = "&" + arrayField.toString();
    }
    var strOverrideScope = "";

    arrayField = strFilterQuery.match(new RegExp("OverrideScope=[^&]*"));
    if (ctxFilter != null && typeof ctxFilter.overrideScope != "undefined" && arrayField == null) {
        strOverrideScope = "&OverrideScope=" + escapeProperlyCore(ctxFilter.overrideScope, false);
    }
    if (browseris.safari) {
        iframe.src = "/_layouts/15/blank.htm";
        iframe.style.offsetLeft = "-550px";
        iframe.style.offsetTop = "-550px";
        iframe.style.border = "0px";
        iframe.style.display = "block";
    }
    iframe.src = ctxFilter.HttpRoot + "/_layouts/15/filter.aspx?ListId=" + ctxFilter.listName + strRootFolder + strOverrideScope + "&FieldInternalName=" + strFilterField + "&ViewId=" + ctxFilter.view + "&FilterOnly=1&Filter=1" + strFilterQuery;
    bMenuLoadInProgress = true;
}
function getFilterValueFromUrl(strUrl, strFilterField) {
    var ichStart, ichEnd;
    var strFilterFieldUrl;

    ichStart = strUrl.indexOf("=");
    if (ichStart == -1)
        return null;
    ichEnd = strUrl.indexOf("&");
    if (ichEnd == -1)
        return null;
    if (ichEnd < ichStart)
        return null;
    strUrl = CanonicalizeUrlEncodingCase(strUrl);
    strFilterFieldUrl = strUrl.substring(ichStart + 1, ichEnd);
    if (strFilterFieldUrl == strFilterField) {
        var strUnescaped;

        ichStart = strUrl.indexOf("=", ichEnd + 1);
        if (ichStart == -1)
            return null;
        strUnescaped = strUrl.substr(ichStart + 1);
        strUnescaped = unescapeProperly(strUnescaped);
        return strUnescaped;
    }
    return null;
}
function _OnIframeLoad() {
ULSw7Q:
    ;
    bMenuLoadInProgress = false;
    if (filterTable != null && filterTable.getAttribute('Name') != null) {
        var iframe = null;

        iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));
        if (iframe != null) {
            var iframeDoc = null;
            var fieldName = filterTable.getAttribute('Name');

            if (typeof iframe.contentDocument != "undefined")
                iframeDoc = iframe.contentDocument;
            if (iframeDoc == null && null != iframe.contentWindow)
                iframeDoc = iframe.contentWindow.document;
            if (iframeDoc == null) {
                iframeDoc = iframe.ownerDocument;
            }
            if (iframeDoc != null) {
                var customFilterTable = iframeDoc.getElementById("diidFilterCustomTable");

                if (customFilterTable != null && (typeof iframe.contentWindow != "undefined" && null != iframe.contentWindow && typeof iframe.contentWindow.CustomPopulateFilterMenu != "undefined" && null != iframe.contentWindow.CustomPopulateFilterMenu || typeof iframeDoc.defaultView != "undefined" && null != iframeDoc.defaultView && typeof iframeDoc.defaultView.CustomPopulateFilterMenu != "undefined" && null != iframeDoc.defaultView.CustomPopulateFilterMenu)) {
                    if (null != iframe.contentWindow) {
                        iframe.contentWindow.CustomPopulateFilterMenu(currentFilterMenu, customFilterTable, "FilterIframe" + filterTable.getAttribute('CtxNum'), ctxFilter.view, fieldName);
                    }
                    else {
                        iframeDoc.defaultView.CustomPopulateFilterMenu(currentFilterMenu, customFilterTable, "FilterIframe" + filterTable.getAttribute('CtxNum'), ctxFilter.view, fieldName);
                    }
                }
                else {
                    var select = iframeDoc.getElementById("diidFilter" + fieldName);

                    fieldName = escapeProperly(fieldName);
                    if (select != null) {
                        var c = select.childNodes.length;

                        if (c > 500) {
                            addFilterOptionMenuItem();
                        }
                        else {
                            var rgChoices = select.childNodes;

                            for (var i = 1; i < c; i++) {
                                var strMenuText;

                                if (rgChoices[i].innerText)
                                    strMenuText = rgChoices[i].innerText;
                                else if (rgChoices[i].textContent)
                                    strMenuText = rgChoices[i].textContent;
                                else
                                    strMenuText = rgChoices[i].innerHTML;
                                var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, fieldName, rgChoices[i].value, i, ctxFilter.queryString, true)) + "')";
                                var mi = CAMOpt(currentFilterMenu, strMenuText, strFilterUrl);

                                if (ctxFilter.IsClientRendering)
                                    mi.setAttribute("checked", "false");
                                if (strFilteredValue != null) {
                                    var arrayFilteredValue = [];

                                    if (bIsMultiFilter)
                                        arrayFilteredValue = ParseMultiColumnValue(strFilteredValue, ';#', true);
                                    else
                                        arrayFilteredValue.push(strFilteredValue);
                                    for (var j in arrayFilteredValue) {
                                        if (arrayFilteredValue[j] != null && arrayFilteredValue[j] == rgChoices[i].value)
                                            mi.setAttribute("checked", "true");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        alert(Strings.STS.L_FilterThrottled_Text);
                        return;
                    }
                }
                bIsFilterDataLoaded = true;
                if (loadingFilterMenu != null)
                    loadingFilterMenu._onDestroy = null;
                if (currentFilterMenu != null) {
                    currentFilterMenu._onDestroy = OnMouseOutFilter;
                    FilterOMenu(currentFilterMenu, filterTable);
                }
            }
        }
    }
}
function addFilterOptionMenuItem() {
ULSw7Q:
    ;
    var strUrl = ajaxNavigate.get_href();

    strUrl = StURLSetVar2(strUrl, "Filter", "1");
    strUrl = StURLSetVar2(strUrl, "View", ctxFilter.view);
    strUrl = "javascript:SubmitFormPost('" + strUrl + "')";
    CAMOpt(currentFilterMenu, Strings.STS.L_FilterMode_Text, strUrl);
}
function OnMouseOverAdHocFilterDeferCall(elm, fieldStr) {
    filterStr = fieldStr;
    if (IsFilterMenuOn())
        return false;
    if (filterTable != null)
        OnMouseOutFilter();
    filterTable = elm;
    var isTable = filterTable.tagName == "TABLE";

    if (isTable) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable);
    }
    else {
        var par = filterTable.parentNode;

        SetEvent("click", CreateFilterMenu, par);
        SetEvent("contextmenu", CreateFilterMenu, par);
        SetEvent("mouseout", OnMouseOutFilter, par);
        CreateCtxImg(par, OnMouseOutFilter);
    }
    if (isTable) {
        var titleParent = filterTable.childNodes[0];
        var titleRow = titleParent.childNodes[0];

        filterImageCell = titleRow.childNodes[titleRow.childNodes.length - 1];
        var filterArrow = filterImageCell.childNodes[0];

        filterArrow.src = "/_layouts/15/images/menudark.gif?rev=23";
        filterArrow.alt = Strings.STS.L_OpenMenu_Text;
        filterArrow.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px";
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px";
        }
        filterImageCell.className = "ms-menuimagecell";
    }
    return true;
}
function addAdHocFilterMenuItems(menu, menuLoading) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(menu);
        return;
    }
    var mi = CAMOpt(menuLoading, Strings.STS.L_Loading_Text, "");

    mi.setAttribute("enabled", "false");
    FilterOMenu(menuLoading, filterTable);
    menuLoading._onDestroy = OnMouseOutFilter;
    if (typeof DoCallBack == "function")
        DoCallBack("__filter={" + filterStr + "}");
    filterStr = null;
}
function UpdateFilterCallback(filterHTML) {
    var select = "</OPTION>";
    var i = -1;

    i = filterHTML.indexOf(select, i + 1);
    var j = filterHTML.lastIndexOf('>', i);
    var strDisplayText = StBuildParam(Strings.STS.L_DontFilterBy_Text, strFieldName);
    var strImageUrl;
    var strFilterUrl = "";
    var index, index2;

    if (j < i - 1) {
        index = filterHTML.lastIndexOf('\"', i);
        if (index > 0) {
            index2 = filterHTML.lastIndexOf('\"', index - 1);
            if (index2 > 0) {
                strFilterUrl = filterHTML.substring(index2 + 1, index);
            }
        }
    }
    if (j == i - 1)
        strImageUrl = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    else
        strImageUrl = GetThemedImageUrl("DeleteFilterGlyph.png");
    var mi;

    if (i > 0) {
        mi = CAMOpt(currentFilterMenu, strDisplayText, strFilterUrl, strImageUrl);
        mi.setAttribute("enabled", j == i - 1 ? "false" : "true");
        index = i;
        var optionStart = "<OPTION href=\"";

        i = filterHTML.indexOf(select, i + 8);
        while (i > 0) {
            j = filterHTML.indexOf(optionStart, index + 8);
            j = filterHTML.indexOf('\"', j + 20);
            if (j > 0 && j < i) {
                var tagEndIndex = filterHTML.indexOf('>', j);
                var strMenuText = filterHTML.substring(tagEndIndex + 1, i);

                strFilterUrl = '';
                index = filterHTML.lastIndexOf('\"', j);
                if (index > 0) {
                    index2 = filterHTML.lastIndexOf('\"', index - 1);
                    if (index2 > 0) {
                        strFilterUrl = filterHTML.substring(index2 + 1, index);
                        strFilterUrl = strFilterUrl.replace(/&amp;/g, "&");
                    }
                }
                if (strMenuText.length > 40)
                    strMenuText = strMenuText.substring(0, 40) + "...";
                if (strMenuText.length > 0) {
                    mi = CAMOpt(currentFilterMenu, strMenuText, strFilterUrl);
                    if (tagEndIndex > j + 1)
                        mi.setAttribute("checked", "true");
                }
            }
            index = i;
            i = filterHTML.indexOf(select, i + 8);
        }
    }
    else {
        mi = CAMOpt(currentFilterMenu, Strings.STS.L_OpenMenu_Text, Strings.STS.L_NotFilterable_Text, "");
        mi.setAttribute("enabled", "false");
        FilterOMenu(currentFilterMenu, filterTable);
        return;
    }
    loadingFilterMenu._onDestroy = null;
    FilterOMenu(currentFilterMenu, filterTable);
    currentFilterMenu._onDestroy = OnMouseOutFilter;
}
function FilterOMenu(menu, container) {
    if (container == null)
        return;
    var anchor = container.tagName == "DIV" ? container.parentNode : container;

    OMenu(menu, anchor, null, null, -1);
}
function _OnClickFilter(obj, e) {
    if (!IsFilterMenuEnabled(obj)) {
        alert(Strings.STS.L_SortNotAllowed);
        return false;
    }
    if (FV4UI()) {
        if (browseris.ie) {
            e.cancelBubble = true;
            e.returnValue = false;
        }
        else {
            e.stopPropagation();
        }
        {
            var defd;

            try {
                defd = typeof inplview.OnClickFilterV4;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.OnClickFilterV4";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                    ULSw7Q:
                        ;
                        inplview.OnClickFilterV4(obj);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
        return false;
    }
    var o = FindSTSMenuTable(obj, "CTXNum");

    if (o != null && o.getAttribute("SortFields") != null) {
        var strSortFields = o.getAttribute("SortFields");
        var url = GetUrlWithNoSortParameters(strSortFields);

        url = RemovePagingArgs(url);
        if (url.indexOf("?") < 0)
            url += "?";
        else
            url += "&";
        SubmitFormPost(url + strSortFields);
    }
    if (!bIsFileDialogView)
        e.cancelBubble = true;
    return false;
}
var _spBodyOnLoadFunctionNames;
var _spBodyOnLoadFunctions;
var _spBodyOnLoadCalled;
var _spOriginalFormAction;
var _spEscapedFormAction;
var _spFormOnSubmitCalled;
var _spBodyOnPageShowRegistered;

function _spBodyOnPageShow(evt) {
ULSw7Q:
    ;
    _spFormOnSubmitCalled = false;
}
function _spResetFormOnSubmitCalledFlag(sender, e) {
ULSw7Q:
    ;
    _spFormOnSubmitCalled = false;
}
function _ribbonReadyForInit() {
ULSw7Q:
    ;
    return _spBodyOnLoadCalled;
}
function _spBodyOnLoadWrapperInit() {
ULSw7Q:
    ;
    if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) == null) {
        FixRibbonAndWorkspaceDimensions();
    }
}
function _spBodyOnLoadWrapper() {
ULSw7Q:
    ;
    if (_spBodyOnLoadCalled) {
        return;
    }
    _spBodyOnLoadCalled = true;
    _spBodyOnLoadWrapperInit();
    if (!_spBodyOnPageShowRegistered && typeof browseris != "undefined" && !browseris.ie && typeof window.addEventListener == 'function') {
        window.addEventListener('pageshow', _spBodyOnPageShow, false);
        _spBodyOnPageShowRegistered = true;
    }
    if (typeof Sys != "undefined" && typeof Sys.WebForms != "undefined" && typeof Sys.WebForms.PageRequestManager != "undefined") {
        var pageRequestMgr = Sys.WebForms.PageRequestManager.getInstance();

        if (!_spPageLoadedRegistered && pageRequestMgr != null) {
            pageRequestMgr.add_pageLoaded(_spPageLoaded);
            _spPageLoadedRegistered = true;
        }
    }
    if (!_spPageLoadedRegistered) {
        _spPageLoaded();
    }
    _spFormOnSubmitCalled = false;
    if (typeof Sys != "undefined" && typeof Sys.Net != "undefined" && typeof Sys.Net.WebRequestManager != "undefined") {
        Sys.Net.WebRequestManager.add_invokingRequest(_spResetFormOnSubmitCalledFlag);
    }
    if (typeof NotifyBodyLoadedAndExecuteWaitingJobs != "undefined") {
        NotifyBodyLoadedAndExecuteWaitingJobs();
    }
    ExecuteOrDelayUntilScriptLoaded(ProcessDefaultOnLoad, "core.js");
    if (typeof g_prefetch == "undefined" || g_prefetch == 1) {
        var uri = new URI(window.location.href, {
            queryCaseInsensitive: true
        });
        var prefetch = uri.getQueryParameter("prefetch");

        if (prefetch != String(0))
            _spPreFetch();
    }
}
var g_numberOfYields;

function _spDelayAfterAllScripts(fn) {
    _spYield(fn, g_numberOfYields);
}
function _spYield(fn, count) {
    if (count > 0) {
        window.setTimeout(function() {
        ULSw7Q:
            ;
            _spYield(fn, count - 1);
        }, 0);
    }
    else {
        fn();
    }
}
function _spTrace(message) {
}
var g_spPreFetchKeys;

function _spPreFetch() {
ULSw7Q:
    ;
    _spDelayAfterAllScripts(function() {
    ULSw7Q:
        ;
        var sod;

        if (Boolean(_v_dictSod)) {
            _spTrace("-----Starting prefetch-----");
            g_spPreFetchKeys.push("strings.js");
            g_spPreFetchKeys.push("core.js");
            if (typeof ribbon == "undefined" && typeof _ribbon != "undefined") {
                g_spPreFetchKeys.push("ribbon");
            }
            for (var idx = 0; idx < g_spPreFetchKeys.length; idx++) {
                var key = g_spPreFetchKeys[idx];

                sod = _v_dictSod[key];
                if (Boolean(sod)) {
                    LoadSod(sod);
                }
            }
        }
    });
    if (typeof _ribbon != "undefined" && Boolean(_ribbon) && SP.SOD.get_ribbonImagePrefetchEnabled()) {
        window.setTimeout(function() {
        ULSw7Q:
            ;
            if (Boolean(document.images) && typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.currentLanguage != "undefined") {
                window.imgRibbon32x32 = new Image();
                var imgUrl = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap32x32.png";

                window.imgRibbon32x32.src = GetImageUrlWithRevision(imgUrl);
                window.imgRibbon16x16 = new Image();
                imgUrl = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap16x16.png";
                window.imgRibbon16x16.src = GetImageUrlWithRevision(imgUrl);
            }
        }, 0);
    }
}
var _spSuppressFormOnSubmitWrapper;

function _spFormOnSubmitWrapper() {
ULSw7Q:
    ;
    if (_spSuppressFormOnSubmitWrapper) {
        return true;
    }
    if (_spFormOnSubmitCalled) {
        return false;
    }
    if (typeof _spFormOnSubmit == "function") {
        var retval = _spFormOnSubmit();
        var testval = false;

        if (typeof retval == typeof testval && retval == testval) {
            return false;
        }
    }
    if (typeof _startOnSubmitStatement == "function") {
        return _startOnSubmitStatement();
    }
    _spFormOnSubmitCalled = true;
    return true;
}
var _inlineEditString;
var _spPageLoadedRegistered;

function _spPageLoaded() {
ULSw7Q:
    ;
    _spOriginalFormAction = null;
    EscapeFormAction();
    RefreshInplViewState();
    RefreshHeroButtonState();
    InlineEditSetDefaultFocus();
}
function InlineEditSetDefaultFocus() {
ULSw7Q:
    ;
    if (_inlineEditString != null) {
        var index = _inlineEditString.indexOf("#");

        if (index <= 0)
            return;
        var iidVal = _inlineEditString.substring(0, index);
        var trs = document.getElementsByTagName("TR");

        for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("automode") == iidVal) {
                var nodeWalkStr = _inlineEditString.substring(index + 1);
                var nodeWalks = nodeWalkStr.split(",");
                var node = trs[i];

                for (var j = 0; j < nodeWalks.length; j++) {
                    if (node == null)
                        break;
                    node = node.firstChild;
                    for (var k = 0; k < nodeWalks[j]; k++) {
                        if (node == null)
                            break;
                        node = node.nextSibling;
                    }
                }
                if (node != null)
                    focusControl(node);
                break;
            }
        }
        _inlineEditString = null;
    }
}
function focusControl(targetControl) {
ULSw7Q:
    ;
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var oldContentEditableSetting;
        var focusTarget = targetControl;

        if (Boolean(focusTarget) && typeof focusTarget.contentEditable !== "undefined") {
            oldContentEditableSetting = focusTarget.contentEditable;
            focusTarget.contentEditable = false;
        }
        else {
            focusTarget = null;
        }
        try {
            targetControl.focus();
        }
        catch (e) { }
        if (Boolean(focusTarget)) {
            focusTarget.contentEditable = oldContentEditableSetting;
        }
    }
    else {
        targetControl.focus();
    }
}
function EscapeFormAction() {
ULSw7Q:
    ;
    if (document.forms.length > 0 && !Boolean(_spOriginalFormAction)) {
        _spOriginalFormAction = document.forms[0].action;
        var url = ajaxNavigate.get_href();
        var index = url.indexOf("://");

        if (index >= 0) {
            var temp = url.substring(index + 3);

            index = temp.indexOf("/");
            if (index >= 0)
                url = temp.substring(index);
            if (url.length > 2 && url.charAt(0) == '/' && url.charAt(1) == '/') {
                url = url.substring(1);
            }
        }
        _spEscapedFormAction = escapeUrlForCallback(url);
        document.forms[0].action = _spEscapedFormAction;
        document.forms[0]._initialAction = document.forms[0].action;
    }
}
function RefreshHeroButtonState() {
ULSw7Q:
    ;
    if (typeof _spWebPartComponents != "undefined") {
        for (var wp in _spWebPartComponents) {
            if (wp.length > 7) {
                var strId = wp.substr(7);
                var heroButton = window["heroButtonWebPart" + strId];

                if (typeof heroButton != "undefined" && heroButton != null && heroButton == true) {
                    var ele = document.getElementById("Hero-" + strId);

                    if (ele != null)
                        ele.style.display = "";
                }
            }
        }
    }
}
function RefreshInplViewState() {
ULSw7Q:
    ;
    if (typeof window.ctx == "undefined")
        return;
    var ctxLocal = window.ctx;

    if (ctxLocal.clvp == null) {
        EnsureScript("inplview", typeof InitAllClvps, function() {
        ULSw7Q:
            ;
            if (ctxLocal.clvp == null)
                InitAllClvps();
        });
        return;
    }
    var clvp = ctxLocal.clvp;
    var tab = clvp.tab;

    if (tab == null || tab != null && (tab.parentNode == null || tab.parentNode.innerHTML == null)) {
        FixDroppedOrPastedClvps();
        if (ctxLocal.dictSel != null) {
            ctxLocal.dictSel = [];
            ctxLocal.CurrentSelectedItems = 0;
        }
    }
}
function RestoreToOriginalFormAction() {
ULSw7Q:
    ;
    if (_spOriginalFormAction != null) {
        if (_spEscapedFormAction == document.forms[0].action) {
            document.forms[0].action = _spOriginalFormAction;
            document.forms[0]._initialAction = document.forms[0].action;
        }
        _spOriginalFormAction = null;
        _spEscapedFormAction = null;
    }
}
function DefaultFocus() {
ULSw7Q:
    ;
    if (typeof _spUseDefaultFocus != "undefined") {
        var elements = document.getElementsByName("_spFocusHere");
        var elem = null;

        if (elements == null || elements.length <= 0) {
            elem = document.getElementById("_spFocusHere");
        }
        else if (elements != null && elements.length > 0) {
            elem = elements[0];
        }
        if (elem != null) {
            var aLinks = elem.getElementsByTagName("a");

            if (aLinks != null && aLinks.length > 0) {
                for (var i = 0; i < aLinks.length; i++) {
                    if (aLinks[i].style.visibility != "hidden") {
                        try {
                            aLinks[i].focus();
                        }
                        catch (e) { }
                        break;
                    }
                }
            }
        }
    }
}
var g_fAnimateListCSR;

function ProcessDefaultOnLoad() {
ULSw7Q:
    ;
    ProcessPNGImages();
    UpdateAccessibilityUI();
    UpdateAnimationUserControl(false);
    window.setTimeout('ProcessImn()', 10);
    ProcessOnLoadFunctionNames(_spBodyOnLoadFunctionNames);
    ProcessOnLoadFunctions(_spBodyOnLoadFunctions);
    if (typeof _spUseDefaultFocus != "undefined")
        DefaultFocus();
    if ((ajaxNavigate.get_hash()).indexOf("InplviewHash") != -1) {
        {
            var defd;

            try {
                defd = typeof inplview.RestoreAllClvpsNavigation;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.RestoreAllClvpsNavigation";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                    ULSw7Q:
                        ;
                        inplview.RestoreAllClvpsNavigation();
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    }
}
function ProcessOnLoadFunctionNames(onLoadFunctionNames) {
ULSw7Q:
    ;
    for (var i = 0; i < onLoadFunctionNames.length; i++) {
        var expr = "if(typeof(" + onLoadFunctionNames[i] + ")=='function'){" + onLoadFunctionNames[i] + "();}";

        eval(expr);
    }
    onLoadFunctionNames = [];
}
function ProcessOnLoadFunctions(onLoadFunctions) {
ULSw7Q:
    ;
    for (var i = 0; i < onLoadFunctions.length; i++) {
        onLoadFunctions[i]();
    }
    onLoadFunctions = [];
}
function CoreInvoke(fn) {
ULSw7Q:
    ;
    var args = Array.prototype.slice.call(arguments, 1);
    var _corefn = function() {
    ULSw7Q:
        ;
        var ref = window[fn];

        ref.apply(null, args);
    };

    EnsureScript("core.js", TypeofFullName(fn), _corefn);
    return false;
}
function _bodyOnHashChangeHandler() {
ULSw7Q:
    ;
    if (typeof _spBodyOnHashChange != 'undefined')
        _spBodyOnHashChange();
}
$_global_ows();
