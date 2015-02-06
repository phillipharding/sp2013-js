function $_global_menu() {
    kfnDisableEvent = new Function("return false");
    g_menuHtc_lastMenu = null;
    g_uniqueNumber = 0;
    g_MenuEndOfDOM = false;
    ElementPosition_InitializePrototype();
    MenuTag_InitializePrototype();
    MMU_chDelim = ",";
    MMU_chDelimEnc = "%2c";
    MMU_postbackPrefix = "javascript:__doPostBack(";
    MMU_chDelim2 = "%";
    MMU_chDelim2Enc = "%25";
    MHash_InitializePrototype();
    ParseContext_InitializePrototype();
    MMU_reDelimEnc = new RegExp(MMU_chDelimEnc, "g");
    MMU_reDelim2Enc = new RegExp(MMU_chDelim2Enc, "g");
    MMU_reDelimDec = new RegExp(MMU_chDelim, "g");
    MMU_reDelim2Dec = new RegExp(MMU_chDelim2, "g");
    g_MMU_HighlightedEcbTable = null;
    g_MMU_HighlightedEcbTableOpen = null;
    g_MMU_OpenTimeoutHandle = null;
    g_MMU_theFormActionAtPageLoad = null;
    g_MMU_Form0ActionAtPageLoad = null;
    g_MMU_Form0ActionAtPreMenuOpen = null;
    g_MMU_RequestTimeoutTimeoutHandle = null;
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("menu.js");
    }
}
function ULSv4Y() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "menu.commentedjs";
    return o;
}
function FNEmpWz(wz) {
    return null != wz && "" != wz;
}
function AChld(p, c) {
    if (null != p && null != c)
        p.appendChild(c);
}
function AImg(mi, wzISrc, wzIAlt) {
    if (null == mi)
        return;
    if (FNEmpWz(wzISrc))
        mi.setAttribute("iconSrc", wzISrc);
    if (FNEmpWz(wzIAlt))
        mi.setAttribute("iconAltText", wzIAlt);
    else
        mi.setAttribute("iconAltText", "");
}
function CMenu(wzID) {
    var m = document.getElementById(wzID);

    if (null != m) {
        m._initialized = false;
        m._oContents = null;
        m.innerHTML = "";
        return m;
    }
    m = document.createElement("MENU");
    if (null == m)
        return null;
    if (null != wzID)
        m.id = wzID;
    m.className = "ms-SrvMenuUI";
    var p = document.body;

    if (typeof g_clientIdDeltaPlaceHolderUtilityContent != 'undefined' && Boolean(g_clientIdDeltaPlaceHolderUtilityContent)) {
        var elem = document.getElementById(g_clientIdDeltaPlaceHolderUtilityContent);

        if (Boolean(elem)) {
            p = elem;
        }
    }
    AChld(p, m);
    return m;
}
function CMItm(wzType) {
    var mi = document.createElement("SPAN");

    if (null == mi)
        return null;
    mi.setAttribute("type", wzType);
    return mi;
}
function CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var mo = CMItm("option");

    if (null == mo)
        return null;
    mo.setAttribute("text", wzText);
    mo.setAttribute("onMenuClick", wzAct);
    if (null != wzDesc)
        mo.setAttribute("description", wzDesc);
    AImg(mo, wzISrc, wzIAlt);
    if (FNEmpWz(wzISeq))
        mo.setAttribute("sequence", wzISeq);
    return mo;
}
function CAMOpt(p, wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var mo = CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc);

    if (null == mo)
        return null;
    AChld(p, mo);
    return mo;
}
function CIMOpt(p, wzText, wzAct, wzISrc, wzIAlt, wzISeq) {
    var mo = CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq);

    if (null == mo)
        return null;
    for (var i = 0; i < p.childNodes.length; i++) {
        var iSeq = p.childNodes[i].getAttribute("sequence");

        if (iSeq) {
            if (Number(iSeq) > Number(wzISeq)) {
                p.childNodes[i].parentNode.insertBefore(mo, p.childNodes[i]);
                return mo;
            }
        }
    }
    AChld(p, mo);
    return mo;
}
function CMSep() {
ULSv4Y:
    ;
    var sep = CMItm("separator");

    setInnerText(sep, "");
    return sep;
}
function CAMSep(p) {
    var ms = CMSep();

    if (null == ms)
        return null;
    AChld(p, ms);
    return ms;
}
function CSubM(wzText, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var sm = CMItm("submenu");

    if (null == sm)
        return null;
    sm.setAttribute("text", wzText);
    if (null != wzDesc)
        sm.setAttribute("description", wzDesc);
    AImg(sm, wzISrc, wzIAlt);
    if (FNEmpWz(wzISeq))
        sm.setAttribute("sequence", wzISeq);
    return sm;
}
function CASubM(p, wzText, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var sm = CSubM(wzText, wzISrc, wzIAlt, wzISeq, wzDesc);

    if (null == sm)
        return null;
    AChld(p, sm);
    return sm;
}
function FRdy(o) {
    if (null == o)
        return false;
    if (o.readyState == null)
        return true;
    switch (o.readyState) {
    case "loaded":
    case "interactive":
    case "complete":
        return true;
    default:
        return false;
    }
    return false;
}
function OMenu(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt) {
    var dynm = m;
    var me;

    if (typeof dynm == "string") {
        var id = dynm;

        me = document.getElementById(id);
    }
    else {
        me = dynm;
    }
    if (null != me) {
        OMenuInt(me, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt);
    }
    return false;
}
function OMenuInt(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt) {
    if (null != m && !MenuHtc_isOpen(m) || null != m && null != fr)
        MenuHtc_show(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt);
}
function OMenuEvnt() {
ULSv4Y:
    ;
    var m = event.srcElement;

    if (null != m && FRdy(document)) {
        var r = m["relativeTo"];
        var fr = m["forceRefresh"];
        var ft = m["flipTop"];
        var yoff = m["yOffsetTop"];

        if (r != null)
            m.removeAttribute("relativeTo");
        if (fr != null)
            m.removeAttribute("forceRefresh");
        if (ft != null)
            m.removeAttribute("flipTop");
        if (yoff != null)
            m.removeAttribute("yOffsetTop");
        m.onreadystatechange = null;
        OMenuInt(m, r, fr, ft, yoff);
    }
}
var kfnDisableEvent;
var g_menuHtc_lastMenu;
var g_uniqueNumber;
var g_MenuEndOfDOM;

function RenderECBBackwardCompatibilityMode(fEndOfDOM) {
    g_MenuEndOfDOM = fEndOfDOM;
}
function IsAccessibilityFeatureEnabledProxy() {
ULSv4Y:
    ;
    var ret = false;

    if (typeof IsAccessibilityFeatureEnabled != "undefined") {
        ret = IsAccessibilityFeatureEnabled();
    }
    return ret;
}
function MenuHtc_show(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt) {
    MenuHtc_hide();
    MenuHtc_init(oMaster);
    oMaster['_oParent'] = oParent;
    oMaster['_fIsRtL'] = IsElementRtl(oMaster['_oParent']);
    if ((browseris.ie || browseris.nav) && IsAccessibilityFeatureEnabledProxy()) {
        var menu = null;

        if (oParent['foa'] != null) {
            var foa = oParent['foa'];

            menu = byid(foa);
            if (menu == null) {
                menu = eval(foa);
            }
        }
        if (menu != null) {
            if (typeof menu.onblur != "undefined" && menu.onblur != null) {
                menu.onblur();
            }
        }
        RenderAccessibleMenu(oMaster, fForceRefresh);
        g_menuHtc_lastMenu = oMaster;
    }
    else {
        SetBodyEventHandlers(null);
        AssureId(oParent);
        var result = ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt);

        g_menuHtc_lastMenu = oMaster;
        SetBodyEventHandlers(HandleDocumentBodyClick);
    }
    if (browseris.ie) {
        if (window.event != null)
            window.event.cancelBubble = true;
    }
    return false;
}
function MenuHtc_hide() {
ULSv4Y:
    ;
    ClearTimeOutToHideMenu();
    var oMaster = g_menuHtc_lastMenu;

    if (oMaster != null) {
        if (oMaster['_accessibleMenu'] != null) {
            CloseAccessibleMenu(oMaster);
        }
        else {
            HideMenu(oMaster);
        }
    }
    g_menuHtc_lastMenu = null;
}
function MenuHtc_isOpen(oMaster) {
    if (null == oMaster || null == oMaster['_initialized'])
        return false;
    var result = IsOpen(oMaster);

    return result;
}
function MenuHtc_item(oMaster, nLevel, nIndex) {
    MenuHtc_init(oMaster);
    var result = GetItem(oMaster, nLevel, nIndex);

    return result;
}
function TrapMenuClick(e) {
    if (e != null)
        e.cancelBubble = true;
    return false;
}
function SetBodyEventHandlers(h) {
    SetEvent("click", h, document.body);
}
function HandleDocumentBodyClick(e) {
    if (g_menuHtc_lastMenu != null) {
        var oMaster = g_menuHtc_lastMenu;

        if (oMaster != null) {
            HideMenu(oMaster);
        }
    }
    return false;
}
function GetEventPopup(e) {
    var obj = GetEventSrcElement(e);

    while (obj != null) {
        if (obj['master'] != null)
            return obj;
        obj = obj.parentNode;
    }
    return null;
}
function GetUniqueNumber() {
ULSv4Y:
    ;
    g_uniqueNumber++;
    return g_uniqueNumber;
}
function MenuHtc_init(oMaster) {
    if (oMaster['_initialized'])
        return;
    oMaster['_initialized'] = true;
    oMaster['_wzPrefixID'] = "mp" + String(GetUniqueNumber());
    if (oMaster.id == null)
        oMaster.id = oMaster['_wzPrefixID'] + "_id";
    oMaster['_nLevel'] = 0;
    oMaster['_arrPopup'] = [];
    oMaster['_arrSelected'] = [];
    if (typeof oMaster['_onDestroy'] == "undefined")
        oMaster['_onDestroy'] = null;
    oMaster['_fLargeIconMode'] = false;
    oMaster['_fCompactItemsWithoutIcons'] = false;
}
function PrepContents(oMaster) {
    var oContents;

    oMaster['_fLargeIconMode'] = oMaster.getAttribute("largeIconMode") == "true";
    oMaster['_fHideIcons'] = oMaster.getAttribute("hideicons") == "true";
    oMaster['_fCompactItemsWithoutIcons'] = oMaster.getAttribute("CompactMode") == "true";
    if (!browseris.safari) {
        oContents = document.createElement("span");
        oMaster['_oContents'] = oContents;
        oContents.style.display = "none";
        var str = oMaster.innerHTML;

        if (str.indexOf("<IE:MENUITEM ") < 0 && str.indexOf("<MENUITEM ") >= 0) {
            str = "<?XML:NAMESPACE PREFIX = IE />" + str;
            str = str.replace(/<MENUITEM/g, "<IE:MENUITEM");
            str = str.replace(/<\/MENUITEM/g, "</IE:MENUITEM");
        }
        oContents.innerHTML = str;
    }
    else {
        oContents = oMaster.cloneNode(true);
        oMaster['_oContents'] = oContents;
        oContents.style.display = "none";
    }
    oMaster['_wzMArrPath'] = "/LAYOUTS_RMJ/images/MArr.gif";
    oMaster['_wzMArrPathRtL'] = "/LAYOUTS_RMJ/images/MArrRtL.gif";
}
function FixUpMenuStructure(oMaster) {
    var oRoot = oMaster['_oRoot'];
    var menuNodes = oRoot.childNodes;
    var lastGroupId = null;
    var lastMenuSeparatorRow = null;
    var separatorExplicit = false;

    for (var nIndex = 0; nIndex < menuNodes.length; nIndex++) {
        var menuRow = menuNodes[nIndex];

        if (menuRow.nodeType != 1)
            continue;
        var deleteRow = false;
        var displayNone = menuRow.style != null && menuRow.style.display == 'none';
        var jsHidden = FIsIHidden(menuRow);

        if (displayNone || jsHidden) {
            deleteRow = true;
        }
        else if (FIsIType(menuRow, "separator")) {
            if (lastMenuSeparatorRow != null || nIndex == 0)
                deleteRow = true;
            else {
                lastMenuSeparatorRow = menuRow;
                separatorExplicit = true;
            }
        }
        else {
            var cGroupId = menuRow.getAttribute("menuGroupId");

            if (cGroupId != lastGroupId && lastMenuSeparatorRow == null && nIndex != 0) {
                lastMenuSeparatorRow = document.createElement("ie:menuitem");
                lastMenuSeparatorRow.setAttribute("type", "separator");
                oRoot = oMaster['_oRoot'];
                oRoot.insertBefore(lastMenuSeparatorRow, menuRow);
            }
            else if (FIsIType(menuRow, "submenu") && lastMenuSeparatorRow != null && !separatorExplicit) {
                menuRow.parentNode.removeChild(lastMenuSeparatorRow);
                lastMenuSeparatorRow = null;
            }
            else {
                lastMenuSeparatorRow = null;
            }
            lastGroupId = cGroupId;
            separatorExplicit = false;
        }
        if (deleteRow) {
            menuRow.parentNode.removeChild(menuRow);
            nIndex--;
        }
    }
    if (lastMenuSeparatorRow != null) {
        lastMenuSeparatorRow.parentNode.removeChild(lastMenuSeparatorRow);
    }
}
function IsElementRtl(oCurrent) {
    while (oCurrent != null && oCurrent.tagName != null) {
        var dir = oCurrent.getAttribute("dir");

        if ((dir == null || dir == "") && oCurrent.style != null) {
            dir = oCurrent.style.direction;
        }
        if (dir == "rtl")
            return true;
        else if (dir == "ltr")
            return false;
        oCurrent = oCurrent.parentNode;
    }
    return false;
}
function getElementOverFlowStyle(element) {
    try {
        if (typeof element.currentStyle != undefined && element.currentStyle != null) {
            return element.currentStyle.overflow.toLowerCase();
        }
        else {
            return ((document.defaultView.getComputedStyle(element, null)).getPropertyValue("overflow")).toLowerCase();
        }
    }
    catch (e) {
        return "";
    }
}
function AdjustScrollPosition(element, relativeToElement, result) {
    var oCurrent = element;

    while (oCurrent != null && oCurrent != relativeToElement && oCurrent != element.offsetParent && oCurrent.tagName != null && oCurrent.tagName.toLowerCase() != "body" && oCurrent.tagName.toLowerCase() != "html" && !(getElementOverFlowStyle(oCurrent) == "hidden")) {
        if (oCurrent.scrollWidth > oCurrent.clientWidth && oCurrent.offsetWidth >= oCurrent.clientWidth && oCurrent.clientWidth != 0) {
            if (!IsElementRtl(oCurrent)) {
                if (oCurrent.scrollLeft > 0)
                    result.x -= oCurrent.scrollLeft;
            }
            else {
                if (browseris.ie8standardUp) {
                    result.x += oCurrent.scrollLeft;
                }
                else {
                    if (browseris.firefox) {
                        result.x -= oCurrent.scrollLeft;
                    }
                    else {
                        var oCurrentOverFlowStyle = getElementOverFlowStyle(oCurrent);

                        if (browseris.ie || browseris.safari && (oCurrentOverFlowStyle == "auto" || oCurrentOverFlowStyle == "scroll"))
                            result.x += oCurrent.scrollWidth - oCurrent.clientWidth - oCurrent.scrollLeft;
                    }
                }
            }
        }
        if (oCurrent.scrollTop > 0)
            result.y -= oCurrent.scrollTop;
        oCurrent = oCurrent.parentNode;
    }
}
function ElementPosition_InitializePrototype() {
ULSv4Y:
    ;
    ElementPosition.prototype.x = undefined;
    ElementPosition.prototype.y = undefined;
    ElementPosition.prototype.width = undefined;
    ElementPosition.prototype.height = undefined;
}
function ElementPosition(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
function MenuHtc_GetElementPosition(element, relativeToElement) {
    var result = new ElementPosition(0, 0, 0, 0);

    if (null != element.offsetParent) {
        var parentElement = element;

        while (parentElement != null && parentElement != relativeToElement) {
            result.x += parentElement.offsetLeft;
            result.y += parentElement.offsetTop;
            AdjustScrollPosition(parentElement, relativeToElement, result);
            var parentTagName = parentElement.tagName.toLowerCase();

            if (parentTagName != "body" && parentTagName != "html" && parentElement.clientTop != null && parentElement.clientLeft != null && parentElement != element) {
                result.x += parentElement.clientLeft;
                result.y += parentElement.clientTop;
            }
            parentElement = parentElement.offsetParent;
        }
    }
    else if (0 != element.offsetLeft || 0 != element.offsetTop) {
        result.x = element.offsetLeft;
        result.y = element.offsetTop;
    }
    else {
        if (Boolean(element['x'])) {
            result.x = element['x'];
        }
        if (Boolean(element['y'])) {
            result.y = element['y'];
        }
    }
    if (0 != element.offsetWidth && 0 != element.offsetHeight) {
        result.width = element.offsetWidth;
        result.height = element.offsetHeight;
    }
    else if (null != element.style && typeof element.style.pixelWidth != "undefined" && 0 != element.style.pixelWidth && typeof element.style.pixelHeight != "undefined" && 0 != element.style.pixelHeight) {
        result.width = element.style.pixelWidth;
        result.height = element.style.pixelHeight;
    }
    return result;
}
function MenuTag(tagName, className) {
    this.tagName = tagName;
    this.className = className;
}
function MenuTag_InitializePrototype() {
ULSv4Y:
    ;
    MenuTag.prototype.tagName = undefined;
    MenuTag.prototype.className = undefined;
}
function CreateMenuTag(menuTag) {
    var tag = null;

    if (menuTag.tagName != null) {
        tag = document.createElement(menuTag.tagName);
        if (menuTag.className != null)
            tag.className = menuTag.className;
    }
    return tag;
}
function TransferEventToMenu(oPopup, e) {
    var evt;

    if (browseris.ie) {
        evt = {
            "srcElement": oPopup,
            "keyCode": e.keyCode
        };
    }
    else {
        evt = {
            "target": oPopup,
            "which": e.which
        };
    }
    PopupKeyDown(evt);
}
function MenuHtcInternal_Show(oMaster, oParent, yCoord, fFlipTop, fShowClose, fShowCheckBoxes, evt) {
    var menuTagPopup;
    var menuTagInner;
    var menuTagSection;
    var menuTagMenuBody;

    if (!Boolean(oMaster['_oContents']))
        PrepContents(oMaster);
    var classes = "ms-core-menu-box";

    if (oMaster['_fLargeIconMode'])
        classes += "Big";
    if (!Boolean(oMaster['_fHideIcons']))
        classes += " ms-core-menu-hasIcons";
    classes += " ms-core-defaultFont ms-shadow";
    menuTagPopup = new MenuTag("div", classes);
    menuTagMenuBody = new MenuTag("ul", "ms-core-menu-list");
    var arrPopup = oMaster['_arrPopup'];
    var arrSelected = oMaster['_arrSelected'];
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    if (!Boolean(oMaster['_oContents']) || IsOpen(oMaster))
        return;
    if (null == oPopup && !Boolean(oMaster['_oRoot'])) {
        oMaster['_nLevel'] = 0;
        nLevel = 0;
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    var fTopLevel = nLevel == 0;

    fFlipTop = fFlipTop && fTopLevel;
    if (null == oPopup) {
        oPopup = CreateMenuTag(menuTagPopup);
        oPopup.title = "";
        arrPopup[nLevel] = oPopup;
        oPopup['isMenu'] = true;
        oPopup['master'] = oMaster;
        oPopup['level'] = nLevel;
        var oMenubody = CreateMenuTag(menuTagMenuBody);

        oPopup.style.top = "0px";
        oPopup.style.position = "fixed";
        oPopup.style.visibility = "hidden";
        if (oMaster['_fIsRtL']) {
            oPopup.style.right = "0px";
            oPopup.setAttribute("dir", "rtl");
        }
        else {
            oPopup.style.left = "0px";
            oPopup.setAttribute("dir", "ltr");
        }
        oPopup.contentEditable = false;
        oPopup.appendChild(oMenubody);
        if (g_MenuEndOfDOM == true) {
            document.body.appendChild(oPopup);
        }
        else {
            if (oParent.tagName == "TABLE")
                oParent.parentNode.appendChild(oPopup);
            else
                oParent.appendChild(oPopup);
        }
        FixUpMenuStructure(oMaster);
        var id = 0;
        var oRoot = oMaster['_oRoot'];

        nLevel = oMaster['_nLevel'];
        var childNodeLength = oRoot.childNodes.length;

        for (var nIndex = 0; nIndex < childNodeLength; nIndex++) {
            var oNode = oRoot.childNodes[nIndex];

            if (oNode.nodeType != 1)
                continue;
            if (!FIsIType(oNode, "label")) {
                var oItem = CreateMenuItem(oMaster, oNode, MakeID3(oMaster, nLevel, id), null, fShowCheckBoxes);

                if (null != oItem) {
                    oMenubody.appendChild(oItem);
                }
                id++;
            }
        }
        if (oMaster.id == "filter_menu" || fShowClose) {
            oItem = document.createElement("div");
            oItem.id = MakeID3(oMaster, nLevel, id);
            oItem.className = "ms-core-menu-closebutton";
            oNode = document.createElement("button");
            oItem.appendChild(oNode);
            oNode.id = "fmi_cls";
            oNode.innerHTML = Strings.STS.L_CloseButtonCaption;
            oNode.onclick = MenuHtc_hide;
            oMenubody.appendChild(oItem);
        }
        oPopup.oncontextmenu = kfnDisableEvent;
        oPopup.ondragstart = kfnDisableEvent;
        oPopup.onselectstart = kfnDisableEvent;
        if (oParent['_onmouseover'] == null && typeof oParent.onmouseover != "undefined")
            oParent['_onmouseover'] = oParent.onmouseover;
        if (oParent['_onmouseout'] == null && typeof oParent.onmouseout != "undefined")
            oParent['_onmouseout'] = oParent.onmouseout;
        if (oParent['_onmousedown'] == null && typeof oParent.onmousedown != "undefined")
            oParent['_onmousedown'] = oParent.onmousedown;
        if (oParent['_onclick'] == null && typeof oParent.onclick != "undefined")
            oParent['_onclick'] = oParent.onclick;
        if (oParent['_oncontextmenu'] == null && typeof oParent.oncontextmenu != "undefined")
            oParent['_oncontextmenu'] = oParent.oncontextmenu;
        if (fTopLevel) {
            if (oParent['_onkeydown'] == null && typeof oParent.onkeydown != "undefined")
                oParent['_onkeydown'] = oParent.onkeydown;
        }
        if (browseris.nav) {
            SetEvent("keypress", function(e) {
            ULSv4Y:
                ;
                return false;
            }, oPopup);
            SetEvent("keyup", function(e) {
            ULSv4Y:
                ;
                return false;
            }, oPopup);
            SetEvent("keydown", function(e) {
            ULSv4Y:
                ;
                PopupKeyDown(e);
                e.cancelBubble = true;
                return false;
            }, oPopup);
            SetEvent("mousedown", function(e) {
            ULSv4Y:
                ;
                TrapMenuClick(e);
                return false;
            }, oPopup);
            SetEvent("mouseover", function(e) {
            ULSv4Y:
                ;
                PopupMouseOver(e);
                return false;
            }, oPopup);
            SetEvent("mouseout", function(e) {
            ULSv4Y:
                ;
                PopupMouseLeave(e);
                return false;
            }, oPopup);
            SetEvent("click", function(e) {
            ULSv4Y:
                ;
                PopupMouseClick(e);
                TrapMenuClick(e);
                return false;
            }, oPopup);
            SetEvent("mouseover", function(e) {
            ULSv4Y:
                ;
                PopupMouseOverParent(e);
                return false;
            }, oParent);
            SetEvent("mouseout", function(e) {
            ULSv4Y:
                ;
                PopupMouseLeaveParent(e);
                return false;
            }, oParent);
            SetEvent("mousedown", function(e) {
            ULSv4Y:
                ;
                TrapMenuClick(e);
                return false;
            }, oParent);
            SetEvent("click", function(e) {
            ULSv4Y:
                ;
                TrapMenuClick(e);
                return false;
            }, oParent);
            SetEvent("contextmenu", function(e) {
            ULSv4Y:
                ;
                TrapMenuClick(e);
                return false;
            }, oParent);
            if (fTopLevel) {
                oParent.onkeydown = function(e) {
                ULSv4Y:
                    ;
                    TransferEventToMenu(oPopup, e);
                    return false;
                };
            }
        }
        else {
            SetEvent("keydown", new Function("PopupKeyDown(event); event.cancelBubble = true; return false;"), oPopup);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), oPopup);
            SetEvent("mouseover", new Function("PopupMouseOver(event); return false;"), oPopup);
            SetEvent("mouseout", new Function("PopupMouseLeave(event); return false;"), oPopup);
            SetEvent("click", new Function("PopupMouseClick(event); TrapMenuClick(event); return false;"), oPopup);
            SetEvent("mouseover", new Function("PopupMouseOverParent(event); return false;"), oParent);
            SetEvent("mouseout", new Function("PopupMouseLeaveParent(event); return false;"), oParent);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), oParent);
            SetEvent("click", new Function("TrapMenuClick(event); return false;"), oParent);
            SetEvent("contextmenu", new Function("TrapMenuClick(event); return false;"), oParent);
            if (fTopLevel) {
                oParent.onkeydown = function() {
                ULSv4Y:
                    ;
                    TransferEventToMenu(oPopup, event);
                    return false;
                };
            }
        }
        if (fTopLevel) {
            var wzOnUnload = oMaster.getAttribute("onunloadtext");

            if (null != wzOnUnload) {
                SetEvent("unload", new Function(wzOnUnload), oPopup);
            }
        }
    }
    else {
        var oOld = arrSelected[nLevel];

        if (null != oOld)
            UnselectItem(oOld);
    }
    arrSelected[nLevel] = null;
    var oBackFrame;

    if (browseris.ie && evt == null) {
        var originalScrollLeft = document.body.scrollLeft;

        oBackFrame = document.createElement("iframe");
        AssureId(oBackFrame);
        oBackFrame.src = "/_layouts/blank.htm";
        oBackFrame.style.position = "absolute";
        oBackFrame.style.display = "none";
        oBackFrame.scrolling = "no";
        oBackFrame.frameBorder = 0;
        if (g_MenuEndOfDOM == true)
            document.body.appendChild(oBackFrame);
        else {
            if (oParent.tagName == "TABLE")
                oParent.parentNode.appendChild(oBackFrame);
            else
                oParent.appendChild(oBackFrame);
        }
        oPopup.style.zIndex = "103";
        oPopup['_backgroundFrameId'] = oBackFrame.id;
        if (originalScrollLeft != document.body.scrollLeft) {
            document.body.scrollLeft = originalScrollLeft;
        }
    }
    oPopup.style.width = String(oPopup.offsetWidth) + "px";
    if (oMaster['_fIsRtL'])
        oPopup.style.right = "";
    oPopup.style.position = "absolute";
    SetMenuPosition(oMaster, oParent, oPopup, fFlipTop, fTopLevel, evt);
    oPopup.style.visibility = "visible";
    NavigateToMenu(oMaster);
    if (browseris.ie && evt == null) {
        SetBackFrameSize(null, oPopup);
        oPopup.onresize = new Function("SetBackFrameSize(event, null);");
        oBackFrame.style.display = "block";
        oBackFrame.style.zIndex = String(101);
    }
}
function GetWindowPosition() {
    var windowInfo = new ElementPosition(0, 0, 0, 0);

    windowInfo.width = window.screen.width;
    windowInfo.height = window.screen.height;
    if (Boolean(self.innerHeight)) {
        windowInfo.width = self.innerWidth;
        windowInfo.height = self.innerHeight;
    }
    else if (null != document.documentElement && Boolean(document.documentElement.clientHeight)) {
        windowInfo.width = document.documentElement.clientWidth;
        windowInfo.height = document.documentElement.clientHeight;
    }
    else if (null != document.body) {
        windowInfo.width = document.body.clientWidth;
        windowInfo.height = document.body.clientHeight;
    }
    return windowInfo;
}
function SetMenuPosition(oMaster, oParent, oPopup, fFlipTop, fTopLevel, evt) {
    var windowPos = GetWindowPosition();
    var maxWidth = windowPos.width;
    var maxHeight = windowPos.height;
    var nRealWidth = oPopup.offsetWidth;
    var nRealHeight = oPopup.offsetHeight;
    var widthTooBig = false;
    var heightTooBig = false;

    if (nRealWidth > maxWidth - 50) {
        widthTooBig = true;
        nRealWidth = maxWidth - 50 < 0 ? 0 : maxWidth - 50;
    }
    if (nRealHeight >= maxHeight - 50) {
        heightTooBig = true;
        nRealHeight = maxHeight - 50 < 0 ? 0 : maxHeight - 50;
    }
    if (widthTooBig) {
        oPopup.style.width = String(nRealWidth) + "px";
        oPopup.style.overflowX = "scroll";
    }
    if (heightTooBig) {
        oPopup.style.height = String(nRealHeight) + "px";
        oPopup.style.overflowY = "scroll";
    }
    nRealWidth = oPopup.offsetWidth;
    nRealHeight = oPopup.offsetHeight;
    var EdgeLeft = windowPos.x;
    var EdgeTop = windowPos.y;
    var EdgeRight = maxWidth;
    var ParentLeft = 0;
    var ParentTop = 0;
    var oCurrent = oParent;
    var p;

    if (evt != null) {
        p = new ElementPosition(evt.clientX, evt.clientY, 0, 0);
    }
    else {
        p = MenuHtc_GetElementPosition(oCurrent, null);
    }
    ParentLeft = p.x;
    ParentTop = p.y;
    var nParentWidth;

    if (fTopLevel) {
        nParentWidth = p.width;
        ParentTop += p.height;
    }
    else {
        nParentWidth = p.width + 1;
    }
    var fTryGoDefault = !fFlipTop && !document.body['WZ_ATTRIB_FLIPPED'];
    var fFlippedDefault, fFlippedNonDefault;
    var xDefault, xFlipped;

    if (!oMaster['_fIsRtL']) {
        var MenuRightDefault;
        var MenuLeftFlipped;

        if (fTopLevel) {
            xDefault = ParentLeft;
            MenuRightDefault = ParentLeft + nRealWidth;
            MenuLeftFlipped = ParentLeft + nParentWidth - nRealWidth;
        }
        else {
            xDefault = ParentLeft + nParentWidth;
            MenuRightDefault = ParentLeft + nParentWidth + nRealWidth;
            MenuLeftFlipped = ParentLeft - nRealWidth;
        }
        xFlipped = MenuLeftFlipped;
        fFlippedDefault = MenuRightDefault > EdgeRight && MenuLeftFlipped > EdgeLeft;
        fFlippedNonDefault = !(MenuLeftFlipped < EdgeLeft && MenuRightDefault < EdgeRight);
    }
    else {
        var MenuLeftDefault;
        var MenuRightFlipped;

        if (fTopLevel) {
            MenuLeftDefault = ParentLeft + nParentWidth - nRealWidth;
            MenuRightFlipped = ParentLeft + nRealWidth;
            xFlipped = ParentLeft;
        }
        else {
            MenuLeftDefault = ParentLeft - nRealWidth;
            MenuRightFlipped = ParentLeft + nParentWidth + nRealWidth;
            xFlipped = ParentLeft + nParentWidth;
        }
        xDefault = MenuLeftDefault;
        fFlippedDefault = MenuLeftDefault < EdgeLeft && MenuRightFlipped < EdgeRight;
        fFlippedNonDefault = !(MenuRightFlipped > EdgeRight && MenuLeftDefault > EdgeLeft);
    }
    var fFlipped = fTryGoDefault ? fFlippedDefault : fFlippedNonDefault;
    var x = fFlipped ? xFlipped : xDefault;
    var xOffset;
    var yOffset;

    if (typeof window.pageXOffset != 'undefined') {
        xOffset = window.pageXOffset;
        yOffset = window.pageYOffset;
    }
    else {
        var htmlElement = document.body.parentNode;

        if (!IsElementRtl(document.body)) {
            xOffset = document.body.scrollLeft;
            xOffset += htmlElement.scrollLeft;
        }
        else {
            if (browseris.ie8standard) {
                xOffset = -document.body.scrollLeft;
                xOffset += -htmlElement.scrollLeft;
            }
            else {
                var bodyOverFlowStyle = getElementOverFlowStyle(document.body);

                if (browseris.ie || browseris.safari && (bodyOverFlowStyle == "auto" || bodyOverFlowStyle == "scroll"))
                    xOffset = -document.body.scrollWidth + document.body.clientWidth + document.body.scrollLeft;
                xOffset += -htmlElement.scrollWidth + htmlElement.offsetWidth + htmlElement.scrollLeft;
            }
        }
        yOffset = document.body.scrollTop;
        yOffset += htmlElement.scrollTop;
    }
    if (nRealWidth >= maxWidth) {
        x = xOffset;
    }
    else if (x - xOffset + nRealWidth >= maxWidth) {
        x = xOffset + maxWidth - nRealWidth;
    }
    var y;

    if (nRealHeight >= maxHeight) {
        y = yOffset;
    }
    else if (ParentTop + nRealHeight - yOffset >= maxHeight) {
        y = yOffset + maxHeight - nRealHeight;
    }
    else {
        y = ParentTop;
    }
    if (browseris.safari)
        y += window.pageYOffset;
    else
        y += document.documentElement.scrollTop;
    oPopup.setAttribute("flipped", String(fFlipTop ? fFlipped && fFlippedDefault : fFlipped));
    var posLeft = x;
    var posTop = y;

    if (browseris.safari)
        posTop -= window.pageYOffset;
    else
        posTop -= document.documentElement.scrollTop;
    if (g_MenuEndOfDOM == false) {
        if (!fTopLevel) {
            if (oMaster['_fIsRtL']) {
                if (browseris.ie) {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft;
                    else
                        posLeft = posLeft - ParentLeft + 1;
                }
                else {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft;
                    else
                        posLeft = posLeft - ParentLeft + 3;
                }
            }
            else {
                if (browseris.ie) {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft + 1;
                    else
                        posLeft = posLeft - ParentLeft;
                }
                else {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft + 3;
                    else
                        posLeft = posLeft - ParentLeft;
                }
            }
            if (posTop == 0)
                posTop = oParent.offsetTop - oPopup.offsetParent.firstChild.scrollTop;
            else
                posTop = posTop - ParentTop + oParent.offsetTop - oPopup.offsetParent.firstChild.scrollTop;
            if (browseris.ie8standard)
                posTop = posTop - 1;
        }
        else {
            if (oPopup.offsetParent != null && oPopup.offsetParent.tagName.toLowerCase() != "body") {
                var offsetParentLeft;
                var offsetParentTop;
                var offsetParentP = MenuHtc_GetElementPosition(oPopup.offsetParent);

                offsetParentLeft = offsetParentP.x;
                offsetParentTop = offsetParentP.y;
                posTop = posTop - offsetParentTop;
                posLeft = posLeft - offsetParentLeft;
            }
            else {
                posLeft = posLeft + document.documentElement.scrollLeft;
                posTop = posTop + document.documentElement.scrollTop;
            }
        }
    }
    oPopup.style.left = String(posLeft) + "px";
    oPopup.style.top = String(posTop) + "px";
    oPopup['LeftForBackIframe'] = posLeft;
    oPopup['TopForBackIframe'] = posTop;
}
function SetBackFrameSize(e, oPopup) {
ULSv4Y:
    ;
    if (oPopup == null)
        oPopup = GetEventSrcElement(e);
    var nRealWidth = oPopup.offsetWidth;
    var nRealHeight = oPopup.offsetHeight;
    var n;
    var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

    if (oBackFrame != null) {
        n = oPopup['LeftForBackIframe'];
        oBackFrame.style.left = String(n) + "px";
        n = oPopup['TopForBackIframe'];
        oBackFrame.style.top = String(n) + "px";
        oBackFrame.style.width = String(nRealWidth) + "px";
        oBackFrame.style.height = String(nRealHeight) + "px";
    }
}
function HideMenu(oMaster, nPhase) {
    ClearTimeOutToHideMenu();
    if (nPhase == null)
        nPhase = 0;
    if (nPhase == 2) {
        if (typeof oMaster._onDestroy == 'function') {
            oMaster._onDestroy();
            oMaster._onDestroy = null;
        }
        return;
    }
    if (IsOpen(oMaster) && !IsAccessibilityFeatureEnabledProxy()) {
        var oParent = oMaster['_oParent'];

        if (oParent != null) {
            oParent.onclick = oParent['_onclick'];
            oParent.onmouseover = oParent['_onmouseover'];
            oParent.onmouseout = oParent['_onmouseout'];
            oParent.onmousedown = oParent['_onmousedown'];
            oParent.oncontextmenu = oParent['_oncontextmenu'];
            oParent.onkeydown = oParent['_onkeydown'];
        }
        SetBodyEventHandlers(typeof window["origBodyOnClickHandler"] == "undefined" ? null : window["origBodyOnClickHandler"]);
        UpdateLevel(oMaster, 0);
        var arrPopup = oMaster['_arrPopup'];
        var oPopup = arrPopup[0];

        if (oPopup != null) {
            var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

            if (oBackFrame != null)
                oBackFrame.parentNode.removeChild(oBackFrame);
            if (oPopup.parentNode != null)
                oPopup.parentNode.removeChild(oPopup);
            arrPopup[0] = null;
            if (nPhase == 0) {
                if (typeof oMaster._onDestroy == "function") {
                    oMaster._onDestroy();
                    oMaster._onDestroy = null;
                }
            }
        }
        g_menuHtc_lastMenu = null;
        RenderECBBackwardCompatibilityMode(false);
    }
}
function IsOpen(oMaster) {
    var accessibleMenu = oMaster['_accessibleMenu'];

    if (oMaster['_accessibleMenuInProgress'] || null != accessibleMenu && !accessibleMenu.closed) {
        return true;
    }
    var arrPopup = oMaster['_arrPopup'];

    if (null == arrPopup) {
        return false;
    }
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    return oPopup ? true : false;
}
function FindLabel(oParent) {
    var arrNodes = Boolean(oParent) ? oParent.childNodes : null;

    if (null != arrNodes) {
        for (var nIndex = 0; nIndex < arrNodes.length; nIndex++) {
            var oNode = arrNodes[nIndex];

            if (oNode.nodeType != 1)
                continue;
            if (FIsIType(oNode, "label"))
                return oNode;
        }
    }
    return null;
}
function ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt) {
    UpdateLevel(oMaster, 0);
    if (fForceRefresh) {
        oMaster['_oContents'] = null;
        oMaster['_oRoot'] = null;
        oMaster['_nLevel'] = 0;
        oMaster['_arrPopup'] = [];
        oMaster['_arrSelected'] = [];
    }
    else {
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    fFlipTop = fFlipTop != false;
    MenuHtcInternal_Show(oMaster, oParent, 0, fFlipTop, fShowClose, fShowCheckBoxes, evt);
}
function ShowSubMenu(oMaster, nLevelArg, oParent) {
    if (null == oParent)
        return;
    if (oParent['submenuRoot'] == null)
        return;
    if (oParent['submenuRoot'] == oMaster['_oRoot'])
        return;
    UpdateLevel(oMaster, nLevelArg);
    oMaster['_oRoot'] = oParent['submenuRoot'];
    var nLevel = oMaster['_nLevel'];

    oMaster['_nLevel'] = nLevel + 1;
    MenuHtcInternal_Show(oMaster, oParent, -1);
}
function ShowSubMenuEvnt(oMaster) {
    if (oMaster != null) {
        var arrPopup = oMaster['_arrPopup'];
        var nLevel = oMaster['_nLevel'];
        var oPopup = arrPopup[nLevel];

        if (null != oPopup) {
            oPopup.removeAttribute("timeoutID");
            var arrSelected = oMaster['_arrSelected'];
            var oSelected = arrSelected[nLevel];

            ShowSubMenu(oMaster, nLevel, oSelected);
        }
    }
}
function SetShowSubMenuEvnt(oMaster) {
    var arrPopup = oMaster['_arrPopup'];
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    if (null != oPopup) {
        ClearTimeOut("timeoutID");
        document.body.setAttribute("timeoutID", String(window.setTimeout(function() {
        ULSv4Y:
            ;
            ShowSubMenuEvnt(oMaster);
        }, 100)));
    }
}
function ClearTimeOut(oAttribute) {
    var id = document.body.getAttribute(oAttribute);

    if (id != null) {
        window.clearTimeout(Number(id));
    }
    document.body.removeAttribute(oAttribute);
}
function ClearShowSubMenuEvnt(oPopup) {
ULSv4Y:
    ;
    ClearTimeOut("timeoutID");
}
function GetEventSrcItem(oMaster, srcElement) {
    var tag;
    var oSrc;
    var wzPrefixID;

    tag = "li";
    if (srcElement != null && FIStringEquals(srcElement.tagName, "div") && srcElement.className.indexOf("ms-core-menu-box") != -1) {
        return null;
    }
    wzPrefixID = oMaster['_wzPrefixID'];
    for (oSrc = srcElement; oSrc != null && !FIStringEquals(oSrc.tagName, "body"); oSrc = oSrc.parentNode) {
        if (FIStringEquals(oSrc.tagName, tag) && oSrc.id.substring(0, wzPrefixID.length) == wzPrefixID) {
            return oSrc;
        }
    }
    return null;
}
function UpdateLevel(oMaster, nLevelArg) {
    var arrSelected;
    var arrPopup;
    var oPopup;
    var oRoot;
    var nLevel = oMaster['_nLevel'];

    while (nLevel > nLevelArg) {
        arrSelected = oMaster['_arrSelected'];
        arrPopup = oMaster['_arrPopup'];
        if (arrPopup != null) {
            oPopup = arrPopup[nLevel];
        }
        if (null != oPopup) {
            ClearShowSubMenuEvnt(oPopup);
            var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

            if (oBackFrame != null)
                oBackFrame.parentNode.removeChild(oBackFrame);
            oPopup.parentNode.removeChild(oPopup);
        }
        arrPopup[nLevel] = null;
        arrSelected[nLevel] = null;
        oRoot = oMaster['_oRoot'];
        oMaster['_oRoot'] = oRoot.parentNode;
        nLevel--;
        oMaster['_nLevel'] = nLevel;
    }
    arrPopup = oMaster['_arrPopup'];
    if (arrPopup != null)
        oPopup = arrPopup[nLevel];
    if (null != oPopup)
        ClearShowSubMenuEvnt(oPopup);
}
function PopupMouseOver(e) {
    var oPopup = GetEventPopup(e);

    if (oPopup != null) {
        var oMaster = oPopup['master'];
        var nLevel = oPopup['level'];

        if (nLevel < 0)
            return;
        var arrSelected = oMaster['_arrSelected'];
        var oSrcElem = GetEventSrcItem(oMaster, GetEventSrcElement(e));

        if (null != oSrcElem) {
            var oSelected = arrSelected[nLevel];
            var nLevelMaster = oMaster['_nLevel'];

            if (oSrcElem != oSelected) {
                if (FIsIType(oSrcElem, "separator"))
                    return;
                ToggleMenuItem(oMaster, nLevel, oSrcElem);
                if (FIsIType(oSrcElem, "submenu"))
                    EngageSelection(oMaster, true, true, false);
            }
            else if (nLevel < nLevelMaster) {
                UnselectCurrentOption(oMaster);
            }
        }
        ClearTimeOutToHideMenu();
    }
}
function PopupMouseLeave(e) {
    var oPopup;

    oPopup = GetEventPopup(e);
    if (oPopup != null) {
        UnselectCurrentOption(oPopup['master']);
        SetTimeOutToHideMenu();
    }
    return false;
}
function PopupMouseOverParent(e) {
    if (g_menuHtc_lastMenu != null) {
        ClearTimeOutToHideMenu();
        var oParent = g_menuHtc_lastMenu['_oParent'];

        if (oParent != null) {
            if (typeof oParent._onmouseover == 'function') {
                oParent._onmouseover();
            }
        }
    }
}
function PopupMouseLeaveParent(e) {
    if (g_menuHtc_lastMenu != null) {
        var oParent = g_menuHtc_lastMenu['_oParent'];

        if (oParent != null) {
            if (typeof oParent._onmouseout == 'function') {
                oParent._onmouseout();
            }
        }
        SetTimeOutToHideMenu();
    }
}
function ClearTimeOutToHideMenu() {
ULSv4Y:
    ;
    if (document.body.getAttribute("HideMenuTimeOut") != null) {
        ClearTimeOut("HideMenuTimeOut");
    }
}
function SetTimeOutToHideMenu() {
ULSv4Y:
    ;
    ClearTimeOut("HideMenuTimeOut");
    document.body.setAttribute("HideMenuTimeOut", String(window.setTimeout(MenuHtc_hide, 5000)));
}
function PopupMouseClick(e) {
    var oPopup = GetEventPopup(e);
    var oMaster = oPopup['master'];
    var nLevel = oPopup['level'];

    if (nLevel < 0)
        return;
    var arrSelected = oMaster['_arrSelected'];
    var oItem = arrSelected[nLevel];
    var oSrcItem = GetEventSrcItem(oMaster, GetEventSrcElement(e));

    if (oItem != oSrcItem) {
        if (null != oSrcItem) {
            arrSelected[nLevel] = oSrcItem;
        }
    }
    UpdateLevel(oMaster, nLevel);
    var onExpand = null;
    var fExpand = false;

    if (browseris.nav) {
        if (null != e && null != e.target) {
            fExpand = e.target.className == "hierarchy";
            onExpand = e.target.getAttribute("onExpand");
        }
    }
    else {
        if (null != e && null != e.srcElement) {
            fExpand = e.srcElement.className == "hierarchy";
            onExpand = e.srcElement.getAttribute("onExpand");
        }
    }
    EngageSelection(oMaster, true, false, false, fExpand, onExpand);
}
function PopupKeyDown(e) {
    var oPopup = GetEventPopup(e);
    var oMaster = oPopup['master'];
    var nLevel = oPopup['level'];

    if (nLevel < 0)
        return;
    var nKeyCode = GetEventKeyCode(e);
    var shiftKey = e.shiftKey;

    if (oMaster['_fIsRtL']) {
        if (nKeyCode == 37)
            nKeyCode = 39;
        else if (nKeyCode == 39)
            nKeyCode = 37;
    }
    if (nKeyCode == 9)
        nKeyCode = !shiftKey ? 40 : 38;
    ClearShowSubMenuEvnt(oPopup);
    switch (nKeyCode) {
    case 38:
        MoveMenuSelection(oMaster, -1);
        break;
    case 40:
        MoveMenuSelection(oMaster, 1);
        break;
    case 37:
    case 27:
        CloseCurrentLevel(oMaster, nKeyCode == 27);
        break;
    case 39:
    case 32:
    case 13:
        EngageSelection(oMaster, nKeyCode == 13 || nKeyCode == 32, false, true);
        break;
    }
    e.returnValue = false;
}
function SetNewId(obj) {
ULSv4Y:
    ;
    obj.id = "msomenuid" + String(GetUniqueNumber());
    return obj.id;
}
function AssureId(obj) {
ULSv4Y:
    ;
    if (obj.id == null || obj.id == "")
        obj.id = "msomenuid" + String(GetUniqueNumber());
    return obj.id;
}
function NavigateToMenu(oMaster) {
    if (IsAccessibilityFeatureEnabledProxy())
        return;
    var oMenu = null;
    var nLevel = oMaster['_nLevel'];
    var arrPopup = oMaster['_arrPopup'];

    oMenu = arrPopup[nLevel];
    try {
        var oFirstItem = oMenu.firstChild.firstChild;

        oFirstItem = (oFirstItem.getElementsByTagName("A"))[0];
        if (oFirstItem != null) {
            if (typeof oFirstItem.setActive != "undefined" && oFirstItem.setActive != null) {
                oFirstItem.setActive();
            }
            else if (typeof oFirstItem.focus != "undefined" && oFirstItem.focus != null) {
                oFirstItem.focus();
            }
        }
    }
    catch (e) { }
}
function ExecuteOnClick(fnOnClick, oMaster) {
    try {
        if (browseris.safari) {
            if (FIStringEquals(typeof fnOnClick, "string")) {
                eval("var document=window.document; {" + fnOnClick + "}");
            }
            else {
                fnOnClick();
            }
        }
        else {
            if (FIStringEquals(typeof fnOnClick, "string")) {
                fnOnClick = new Function("event", "var document=window.document; {" + fnOnClick + "}");
            }
            var oTemp = window.document.body.appendChild(window.document.createElement("span"));

            oTemp['master'] = oMaster;
            oTemp.onclick = fnOnClick;
            var evt;
            var ctxVar = null;

            if (typeof currentCtx != 'undefined' && currentCtx != null)
                ctxVar = currentCtx;
            else if (typeof ctxFilter != 'undefined' && ctxFilter != null)
                ctxVar = ctxFilter;
            if (browseris.ie)
                evt = {
                    "srcElement": oTemp,
                    "fakeEvent": 1,
                    "currentCtx": ctxVar
                };
            else
                evt = {
                    "target": oTemp,
                    "fakeEvent": 1,
                    "currentCtx": ctxVar
                };
            oTemp.onclick(evt);
            oTemp.parentNode.removeChild(oTemp);
        }
    }
    catch (e) { }
}
function EngageSelection(oMaster, fDoSelection, fDelayExpandSM, fEnterSM, fExpand, fCommand) {
    var nLevel = oMaster['_nLevel'];
    var arrSelected = oMaster['_arrSelected'];
    var oItem = arrSelected[nLevel];

    if (null == oItem || oItem['optionDisabled'])
        return;
    if (FIsIType(oItem, "submenu")) {
        if (fDelayExpandSM) {
            SetShowSubMenuEvnt(oMaster);
        }
        else {
            ShowSubMenu(oMaster, nLevel, oItem);
            if (fEnterSM)
                MoveMenuSelection(oMaster, 1);
        }
    }
    else if (fDoSelection) {
        var fEnabled = oItem.getAttribute("enabled");

        if (fEnabled != "false") {
            if (!fExpand) {
                var fnOnClick = oItem.getAttribute("onMenuClick");

                if (null != fnOnClick) {
                    var noHideMenu = false;
                    var executed = false;

                    if (oMaster['id'] == "filter_menu") {
                        ExecuteOnClick(fnOnClick, oMaster);
                        executed = true;
                        RefreshOpenedSortMenu(oMaster, nLevel);
                        RefreshClearAndFilterMenu(oMaster, oItem, nLevel);
                        var idValue = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_";

                        if (oItem.id != idValue + String(1) && oItem.id != idValue + String(0) && !oMaster['hideMenu'])
                            noHideMenu = true;
                    }
                    if (!noHideMenu) {
                        HideMenu(oMaster, 1);
                        if (!executed)
                            ExecuteOnClick(fnOnClick, oMaster);
                        HideMenu(oMaster, 2);
                    }
                }
                else {
                    var oItemAnchor = oItem.firstChild;
                    var fnClick = oItemAnchor.onclick;

                    if (null != fnClick)
                        fnClick();
                }
            }
            else {
                eval(fCommand);
            }
        }
    }
}
function RefreshClearAndFilterMenu(oMaster, oItem, nLevel) {
    if (ctxFilter == null)
        return;
    var nIndex = parseInt(oItem.id.substr(oItem.id.lastIndexOf('_') + 1));
    var oRoot = oMaster['_oRoot'];
    var oRootChildren = oRoot.childNodes;
    var fieldName = filterTable.getAttribute('Name');
    var iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));
    var iframeDoc = null;

    if (typeof iframe.contentDocument != "undefined")
        iframeDoc = iframe.contentDocument;
    if (iframeDoc == null && null != iframe.contentWindow)
        iframeDoc = iframe.contentWindow.document;
    if (iframeDoc == null)
        iframeDoc = iframe.ownerDocument;
    var select = iframeDoc.getElementById("diidFilter" + fieldName);

    if (select == null)
        return;
    var rgChoices = select == null ? null : select.childNodes;
    var filterOffDisabled = true;
    var checkImg = null;

    if (oRootChildren[nIndex].id != "fmi_asc" && oRootChildren[nIndex].id != "fmi_desc" && oRootChildren[nIndex].id != "fmi_clr") {
        checkImg = document.getElementById(oItem.id + "_ICON");
        if (oItem.getAttribute("checked") == "true") {
            oItem.setAttribute("checked", "false");
            if (checkImg != null) {
                checkImg.checked = false;
                window.setTimeout(function() {
                ULSv4Y:
                    ;
                    checkImg.checked = false;
                }, 0);
            }
        }
        else {
            oItem.setAttribute("checked", "true");
            if (checkImg != null) {
                checkImg.checked = true;
                window.setTimeout(function() {
                ULSv4Y:
                    ;
                    checkImg.checked = true;
                }, 0);
            }
        }
    }
    else if (oRootChildren[nIndex].id == "fmi_asc" || oRootChildren[nIndex].id == "fmi_desc")
        filterOffDisabled = false;
    var elementId = "";
    var choicesLength = rgChoices == null ? 0 : rgChoices.length;
    var clearFilterIndex = -1;

    for (var i = 0, rgIndex = 1; i < oRootChildren.length && rgIndex < choicesLength; i++, rgIndex++) {
        elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(i);
        var filterNode = document.getElementById(elementId);

        if (clearFilterIndex < 0) {
            var childNode = filterNode.firstChild;

            if (childNode != null)
                childNode = childNode.firstChild;
            if (childNode != null)
                childNode = childNode.nextSibling;
            if (childNode != null && childNode.id == "fmi_clr")
                clearFilterIndex = i;
            rgIndex = 0;
            continue;
        }
        var newQueryString = FilterFieldV3(ctxFilter.view, escapeProperly(fieldName), rgChoices[rgIndex].value, rgIndex, ctxFilter.queryString, true);
        var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(newQueryString) + "')";

        filterNode.setAttribute("onMenuClick", strFilterUrl);
        if (nIndex == clearFilterIndex) {
            filterNode.setAttribute("checked", "false");
            var checkNode = document.getElementById(elementId + "_ICON");

            if (checkNode != null)
                checkNode.checked = false;
        }
        if (filterNode.getAttribute("checked") == "true")
            filterOffDisabled = false;
    }
    if (clearFilterIndex < 0)
        return;
    elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(clearFilterIndex);
    filterNode = document.getElementById(elementId);
    if (filterNode == null)
        return;
    var clearFilterImg = document.getElementById(elementId + "_ICON");
    var oMenuitem = document.getElementById(MakeID3(oMaster, nLevel, clearFilterIndex));

    if (!filterOffDisabled) {
        filterNode.setAttribute("enabled", "true");
        filterNode.disabled = false;
        filterNode.optionDisabled = false;
        filterNode.setAttribute("iconSrc", GetThemedImageUrl("DeleteFilterGlyph.png"));
        if (clearFilterImg != null)
            clearFilterImg.src = GetThemedImageUrl("DeleteFilterGlyph.png");
        if (oMenuitem != null)
            RemoveCssClassFromElement(oMenuitem, "ms-core-menu-itemDisabled");
    }
    else {
        filterNode.setAttribute("enabled", "false");
        filterNode.disabled = true;
        filterNode.optionDisabled = true;
        filterNode.setAttribute("iconSrc", GetThemedImageUrl("DisabledDeleteFilterGlyph.png"));
        if (clearFilterImg != null)
            clearFilterImg.src = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
        if (oMenuitem != null)
            Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
    }
}
function RefreshOpenedSortMenu(oMaster, nLevel) {
    if (ctxFilter == null)
        return;
    var strSortAsc = "";
    var strSortDesc = "";
    var str = ctxFilter.queryString;

    if (str == null)
        str = "";
    var uri = new URI(str, {
        disableEncodingDecodingForLegacyCode: true
    });

    str = "?" + uri.getQuery();
    str = RemovePagingArgs(str);
    var sortFields = filterTable.getAttribute('SortFields');
    var ichSort = str.indexOf("&SortDir=");
    var ichSortMac = str.indexOf("&", ichSort + 1);

    if (ichSort == -1) {
        ichSort = sortFields.indexOf("&SortDir=");
        ichSortMac = sortFields.indexOf("&SortField=");
        strSortAsc = str + sortFields.substr(ichSortMac, ichSort - ichSortMac) + "&SortDir=Asc";
        strSortDesc = str + sortFields.substr(ichSortMac, ichSort - ichSortMac) + "&SortDir=Desc";
    }
    else if (ichSort != -1) {
        strSortAsc = str.substr(0, ichSort) + "&SortDir=Asc";
        strSortDesc = str.substr(0, ichSort) + "&SortDir=Desc";
        if (ichSortMac != -1) {
            strSortAsc += str.substr(ichSortMac);
            strSortDesc += str.substr(ichSortMac);
        }
    }
    strSortAsc = "HandleFilter(event, '" + STSScriptEncode(strSortAsc) + "', 1);";
    strSortDesc = "HandleFilter(event, '" + STSScriptEncode(strSortDesc) + "', 1);";
    var elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(0);
    var sortNode = document.getElementById(elementId);

    sortNode.setAttribute("onMenuClick", strSortAsc);
    elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(1);
    sortNode = document.getElementById(elementId);
    sortNode.setAttribute("onMenuClick", strSortDesc);
}
function CloseCurrentLevel(oMaster, fAllowHideRoot) {
    var nLevel = oMaster['_nLevel'];
    var arrSelected;
    var obj;

    if (nLevel > 0) {
        UpdateLevel(oMaster, nLevel - 1);
        nLevel = oMaster['_nLevel'];
        arrSelected = oMaster['_arrSelected'];
        obj = arrSelected[nLevel];
        if (obj != null) {
            if (typeof obj.onclick != "undefined" && obj.onclick != null) {
                SetEvent("click", obj['_onclick'], obj);
            }
            obj = (obj.getElementsByTagName("a"))[0];
            if (obj != null) {
                if (typeof obj.setActive != "undefined" && obj.setActive != null) {
                    obj.setActive();
                }
                else if (typeof obj.focus != "undefined" && obj.focus != null) {
                    obj.focus();
                }
            }
        }
    }
    else if (fAllowHideRoot) {
        HideMenu(oMaster);
        var oParent = oMaster['_oParent'];

        while (oParent != null && oParent.tagName == "SPAN" && oParent.getAttribute("contentEditable") == "true") {
            oParent = oParent.parentNode;
        }
        if (oParent != null) {
            var focusElement = oParent;
            var foastr = oParent.getAttribute("foa");

            if (foastr != null) {
                var foa = eval(foastr);

                if (foa == null) {
                    foa = byid(foastr);
                }
                if (foa != null) {
                    focusElement = foa;
                }
            }
            else {
                if (focusElement.tagName != "A") {
                    var anchorList = focusElement.getElementsByTagName("a");
                    var anchorListLen = anchorList.length;

                    if (anchorListLen > 0) {
                        focusElement = anchorList[anchorListLen - 1];
                    }
                }
            }
            if (focusElement != null) {
                try {
                    if (typeof focusElement.setActive != "undefined" && focusElement.setActive != null) {
                        focusElement.setActive();
                    }
                    else if (typeof focusElement.focus != "undefined" && focusElement.focus != null) {
                        focusElement.focus();
                    }
                }
                catch (e) { }
            }
        }
    }
}
function UnselectCurrentOption(oMaster) {
    var nLevel = oMaster['_nLevel'];

    if (nLevel >= 0) {
        var arrSelected = oMaster['_arrSelected'];
        var oItem = arrSelected[nLevel];

        if (FIsIType(oItem, "option")) {
            UnselectItem(oItem);
            arrSelected[nLevel] = null;
        }
    }
}
function MakeID3(oMaster, nLevel, nIndex) {
    return oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(nIndex);
}
function GetItem(oMaster, nLevel, nIndex) {
    var arrPopup = oMaster['_arrPopup'];
    var oPopup = arrPopup[nLevel];

    return Boolean(oPopup) ? document.getElementById(MakeID3(oMaster, nLevel, nIndex)) : null;
}
function MoveMenuSelection(oMaster, iDir) {
    var nIndex = -1;
    var oRoot = oMaster['_oRoot'];
    var nNumItems = oRoot.childNodes.length;
    var nLevel = oMaster['_nLevel'];
    var arrSelected = oMaster['_arrSelected'];
    var oSelected = arrSelected[nLevel];
    var oItem = null;

    if (null != oSelected) {
        var wzSelectedID = Boolean(oSelected) ? oSelected.id : null;

        if (null != wzSelectedID) {
            var nCurIndex = parseInt(wzSelectedID.substring(wzSelectedID.lastIndexOf("_") + 1, wzSelectedID.length));

            if (nCurIndex == nNumItems)
                nCurIndex = -1;
            if (nCurIndex + iDir == nNumItems) {
                nIndex = nNumItems;
                oItem = GetItem(oMaster, nLevel, nNumItems);
            }
            if (oItem == null)
                nIndex = (nCurIndex + iDir) % nNumItems;
        }
    }
    if (nIndex < 0) {
        nIndex = iDir > 0 ? 0 : nNumItems - 1;
    }
    if (oItem == null) {
        var nIndexStart = nIndex;

        do {
            oItem = GetItem(oMaster, nLevel, nIndex);
            nIndex = (nIndex + iDir) % nNumItems;
        } while (nIndex != nIndexStart && (null == oItem || oItem.style.display == "none" || !(FIsIType(oItem, "option") || FIsIType(oItem, "submenu"))));
    }
    ToggleMenuItem(oMaster, nLevel, oItem);
}
function ToggleMenuItem(oMaster, nLevel, oItem) {
    var arrSelected = oMaster['_arrSelected'];
    var oOld = arrSelected[nLevel];

    if (null == oItem || null != oOld && oItem.id == oOld.id)
        return;
    if (null != oOld) {
        UnselectItem(oOld);
        oOld.onkeydown = null;
        oOld.onmousedown = null;
        oOld.onmouseover = null;
        oOld.onmouseout = null;
        oOld.oncontextmenu = null;
    }
    UpdateLevel(oMaster, nLevel);
    SelectItem(oItem);
    arrSelected[nLevel] = oItem;
    try {
        var oItemAnchor = oItem.firstChild;

        if (oItemAnchor != null) {
            if (typeof oItemAnchor.setActive != "undefined" && oItemAnchor.setActive != null)
                oItemAnchor.setActive();
            else if (typeof oItemAnchor.focus != "undefined" && oItemAnchor.focus != null)
                oItemAnchor.focus();
        }
    }
    catch (e) { }
}
function SelectItemStatic(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.setAttribute("selectedStatic", "true");
        oItem.className += " ms-core-menu-staticItemSelected";
    }
}
function SelectItem(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.className += " ms-core-menu-itemSelected";
    }
}
function UnselectItem(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.className = oItem.className.replace("ms-core-menu-itemSelected", "");
    }
}
function SetImageSize(oMaster, oImg, oSize) {
    if (oSize == null) {
        if (oMaster['_fLargeIconMode'])
            oSize = 32;
        else
            oSize = 16;
    }
    oImg.width = String(oSize);
    oImg.height = String(oSize);
}
function CreateMenuOption(oMaster, oMenuitem, oNode, iD, wzHtml, fShowCheckBoxes) {
    var oAnchor = null;
    var oIcon;
    var oLabel;
    var oAccKey;
    var oArrow;
    var sText;
    var innerNode;
    var sDescription;
    var oMenuItemBody = null;
    var oTextSpan;
    var oTextNode;
    var oBr;
    var oDescSpan;
    var oDescNode;
    var hierarchy;
    var myTextSpan;
    var command;
    var htmlSpan;
    var oImg;
    var wzAccKey;
    var mtSpan = new MenuTag("span", null);
    var mtDiv = new MenuTag("div", null);

    oIcon = CreateMenuTag(mtDiv);
    oLabel = CreateMenuTag(mtDiv);
    oAccKey = CreateMenuTag(mtSpan);
    oArrow = CreateMenuTag(mtDiv);
    oAnchor = document.createElement("a");
    oAnchor.className = "ms-core-menu-link";
    if (oMenuitem.getAttribute("isindented") == "true")
        Menu_AddCssClassToElement(oAnchor, "ms-core-menu-indent");
    oAnchor.id = iD + "_Anchor";
    oAnchor.appendChild(oIcon);
    oAnchor.appendChild(oLabel);
    oAnchor.appendChild(oAccKey);
    oAnchor.appendChild(oArrow);
    oAnchor.href = "javascript:;";
    oAnchor.setAttribute("onclick", "return false;");
    if (oMaster['_fCompactItemsWithoutIcons'] && null == oNode.getAttribute("iconSrc"))
        oLabel.className = "ms-core-menu-labelCompact";
    else
        oLabel.className = "ms-core-menu-label";
    oLabel.id = oNode.id;
    if (oNode.getAttribute("enabled") == "false") {
        oMenuitem.disabled = true;
        Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
        var oDisabledSpan = document.createElement("span");

        oDisabledSpan.appendChild(document.createTextNode(Strings.STS.L_DisabledMenuItem));
        oDisabledSpan.className = "ms-accessible ms-core-menu-disabledText";
        oLabel.appendChild(oDisabledSpan);
        oAnchor.setAttribute("aria-disabled", "true");
    }
    sText = EvalAttributeValue(oNode, "text", "textScript");
    if (sText == null || sText == "") {
        innerNode = oNode.firstChild;
        if (innerNode != null && innerNode.nodeType == 3)
            sText = innerNode.nodeValue;
    }
    sDescription = EvalAttributeValue(oNode, "description", "descriptionScript");
    if (sDescription != null && sText != null && oMaster['_fLargeIconMode']) {
        oTextSpan = document.createElement("span");
        oTextSpan.className = 'ms-core-menu-title';
        oTextNode = document.createTextNode(sText);
        oBr = document.createElement("br");
        oDescSpan = document.createElement("span");
        oDescNode = document.createTextNode(sDescription);
        oDescSpan.className = "ms-core-menu-itemDescription";
        oLabel.appendChild(oTextSpan);
        oTextSpan.appendChild(oTextNode);
        oLabel.appendChild(oBr);
        oLabel.appendChild(oDescSpan);
        oDescSpan.appendChild(oDescNode);
    }
    else if (sText != null) {
        oTextSpan = document.createElement("span");
        oTextSpan.className = 'ms-core-menu-title';
        hierarchy = oNode.getAttribute("hierarchy");
        if (hierarchy != null) {
            myTextSpan = document.createElement("span");
            command = oNode.getAttribute("onExpand");
            if (command != null) {
                myTextSpan.setAttribute("onExpand", command);
            }
            myTextSpan.className = "hierarchy";
            oLabel.appendChild(myTextSpan);
            myTextSpan.innerHTML = hierarchy;
            oLabel.appendChild(oTextSpan);
            oTextSpan.innerHTML = sText;
        }
        else {
            oTextNode = document.createTextNode(sText);
            oLabel.appendChild(oTextSpan);
            oTextSpan.appendChild(oTextNode);
        }
    }
    if (sText != null)
        oAnchor.title = sText;
    htmlSpan = document.createElement("span");
    htmlSpan.innerHTML = Boolean(wzHtml) ? wzHtml : "";
    oLabel.appendChild(htmlSpan);
    if (Boolean(oMaster['_fHideIcons'])) {
        oIcon.className = "ms-hide";
    }
    else {
        if (oMaster['_fLargeIconMode'])
            oIcon.className = "ms-core-menu-iconLarge";
        else
            oIcon.className = "ms-core-menu-icon";
    }
    var iconSrc = null;
    var iconAlt = null;
    var isCheckBox = false;
    var isChecked = false;

    if (oNode.getAttribute("checked") == "true") {
        isChecked = true;
        isCheckBox = true;
    }
    else if (oNode.getAttribute("checked") == "false" && (currentFilterMenu != null && currentFilterMenu.id == "filter_menu" || fShowCheckBoxes)) {
        isCheckBox = true;
    }
    else {
        iconSrc = EvalAttributeValue(oNode, "iconSrc", "iconScript");
        iconAlt = oNode.getAttribute("iconAltText");
    }
    if (isCheckBox) {
        oImg = document.createElement("INPUT");
        oImg.setAttribute("type", "checkbox");
        if (isChecked)
            oImg.setAttribute("checked", "yes");
        oImg.title = Boolean(iconAlt) ? iconAlt : "";
        oIcon.appendChild(oImg);
        oImg.id = iD + "_ICON";
        oImg.setAttribute("style", "padding-left:0px");
    }
    else if (Boolean(iconSrc)) {
        oImg = document.createElement("img");
        oImg.src = iconSrc;
        oImg.alt = Boolean(iconAlt) ? iconAlt : "";
        oImg.title = Boolean(iconAlt) ? iconAlt : "";
        oIcon.appendChild(oImg);
        oImg.id = iD + "_ICON";
    }
    wzAccKey = oNode.getAttribute("accessKeyText");
    if (null != wzAccKey)
        oAccKey.innerHTML = wzAccKey;
    else
        oAccKey.className = "ms-accessible";
    SetIType(oMenuitem, "option");
    oMenuitem.appendChild(oAnchor);
}
function CreateMenuSeparator(oMaster, oMenuitem) {
    oMenuitem.innerHTML = '<hr class="ms-core-menu-separatorHr" />';
    SetIType(oMenuitem, "separator");
}
function CreateSubmenu(oMaster, oMenuitem, oNode, iD) {
    var oLabelNode = FindLabel(oNode);

    CreateMenuOption(oMaster, oMenuitem, oNode, iD, Boolean(oLabelNode) ? oLabelNode.innerHTML : null);
    var oArrow = null;
    var oArrowImg = document.createElement("img");

    if (oMenuitem.className.indexOf("ms-core-menu-hasArrow") == -1)
        oMenuitem.className += " ms-core-menu-hasArrow";
    oArrow = oMenuitem.childNodes[0].childNodes[3];
    oArrow.className = "ms-core-menu-arrowBox";
    oArrowImg.className = "ms-core-menu-arrow";
    oArrow.appendChild(oArrowImg);
    oArrowImg.src = !oMaster['_fIsRtL'] ? oMaster['_wzMArrPath'] : oMaster['_wzMArrPathRtL'];
    oArrowImg.alt = Strings.STS.L_SubMenu_Text;
    oArrowImg.title = "";
    SetIType(oMenuitem, "submenu");
    oMenuitem.submenuRoot = oNode;
}
function MergeAttributes(oTarget, oSource) {
    if (!browseris.nav && (typeof oTarget.mergeAttributes != "undefined" && oTarget.mergeAttributes != null)) {
        oTarget.mergeAttributes(oSource);
    }
    else {
        var oAttributes = oSource.attributes;
        var len = 0;

        if (typeof oAttributes.length != "undefined" && oAttributes.length != null) {
            len = oAttributes.length;
        }
        for (var i = 0; i < len; i++) {
            var oAttrib = oAttributes[i];

            if (oAttrib != null && oAttrib['specified'] && oAttrib.nodeName != "id" && oAttrib.nodeName != "ID" && oAttrib.nodeName != "name") {
                oTarget.setAttribute(oAttrib.nodeName, oAttrib.nodeValue);
            }
        }
        if (oSource.getAttribute("type") != null) {
            oTarget.setAttribute("type", oSource.getAttribute("type"));
        }
        if (oSource['submenuRoot'] != null) {
            oTarget['submenuRoot'] = oSource['submenuRoot'];
        }
    }
}
function CreateMenuItem(oMaster, oNode, iD, wzHtml, fShowCheckBox) {
    var oMenuitem;
    var childLen;
    var nIndex;
    var childNode;

    if (FIsIType(oNode, "label"))
        return null;
    oMenuitem = document.createElement("li");
    MergeAttributes(oMenuitem, oNode);
    oMenuitem.id = iD;
    if (FIsIType(oNode, "separator")) {
        CreateMenuSeparator(oMaster, oMenuitem);
        oMenuitem.className = "ms-core-menu-separator";
        return oMenuitem;
    }
    oMenuitem.className = "ms-core-menu-item";
    if (null == GetIType(oNode))
        SetIType(oNode, "option");
    if (FIsIType(oNode, "submenu"))
        CreateSubmenu(oMaster, oMenuitem, oNode, iD);
    else if (FIsIType(oNode, "option"))
        CreateMenuOption(oMaster, oMenuitem, oNode, iD, wzHtml, fShowCheckBox);
    if (oMenuitem.disabled == true || oMenuitem.getAttribute("enabled") == "false") {
        Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
        oMenuitem.disabled = false;
        childLen = oMenuitem.childNodes.length;
        for (nIndex = 0; nIndex < childLen; nIndex++) {
            childNode = oMenuitem.childNodes[nIndex];
            if (childNode.nodeType != 1 || childNode.tagName == "A")
                continue;
            childNode.disabled = true;
        }
        oMenuitem.optionDisabled = true;
    }
    return oMenuitem;
}
function GetItems(oMaster) {
    var oContents = oMaster['_oContents'];

    if (null == oContents) {
        PrepContents(oMaster);
    }
    oContents = oMaster['_oContents'];
    return oContents.childNodes;
}
function GetIType(oItem) {
    return Boolean(oItem) ? oItem.getAttribute("type") : null;
}
function FIsIType(oItem, wzType) {
    return FIStringEquals(GetIType(oItem), wzType);
}
function SetIType(oItem, wzType) {
    if (null != oItem)
        oItem.setAttribute("type", wzType);
}
function FIStringEquals(wzX, wzY) {
    return wzX != null && wzY != null && wzX.toLowerCase() == wzY.toLowerCase();
}
function RenderAccessibleMenu(oMaster, fForceRefresh) {
ULSv4Y:
    ;
    if (fForceRefresh) {
        oMaster['_oContents'] = null;
        oMaster['_oRoot'] = null;
        oMaster['_nLevel'] = 0;
        oMaster['_arrPopup'] = [];
        oMaster['_arrSelected'] = [];
    }
    else {
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    if (!Boolean(oMaster['_oContents']))
        PrepContents(oMaster);
    if (!Boolean(oMaster['_oContents']))
        return;
    if (!Boolean(oMaster['_oRoot'])) {
        oMaster['_nLevel'] = 0;
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    FixUpMenuStructure(oMaster);
    var menuDir = oMaster['_fIsRtL'] ? "rtl" : "ltr";

    g_menuHtc_html = "<html dir='" + menuDir + "'><head><title>" + Strings.STS.L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
    RenderMenuLevel(oMaster, oMaster['_oRoot'], true);
    g_menuHtc_html = g_menuHtc_html + "</ul></body></html>";
    oMaster['_accessibleMenuInProgress'] = true;
    var oNewWindow = window.open("/_layouts/blank.htm", "_blank", "status=no,toolbar=no,menubar=no,location=no");

    oMaster['_accessibleMenu'] = oNewWindow;
    oNewWindow.document.write(g_menuHtc_html);
    oNewWindow.document.close();
    oNewWindow.onunload = MenuHtc_hide;
    oNewWindow.focus();
}
function CloseAccessibleMenu(oMaster, n) {
    if (n == null)
        n = 0;
    if (oMaster != null) {
        oMaster['_accessibleMenuInProgress'] = false;
        if (n == 0 || n == 1) {
            var accessibleMenu = oMaster['_accessibleMenu'];

            if (accessibleMenu != null) {
                accessibleMenu.close();
                try {
                    if (accessibleMenu.opener != null)
                        accessibleMenu.opener.focus();
                }
                catch (e) { }
                oMaster['_accessibleMenu'] = null;
            }
        }
        if (n == 0 || n == 2) {
            if (typeof oMaster._onDestroy == 'function') {
                oMaster._onDestroy();
                oMaster._onDestroy = null;
            }
        }
    }
}
function GetMenuItemText(oMaster, oNode, s) {
    if (s == "") {
        s = EvalAttributeValue(oNode, "text", "textScript");
        var description = EvalAttributeValue(oNode, "description", "descriptionScript");

        if (description != null && description != "" && oMaster['_fLargeIconMode']) {
            if (s != "")
                s = s + ": ";
            s = s + description;
        }
    }
    if (oNode.getAttribute("checked") == "true")
        s = "* " + s;
    if (oNode.title != null && oNode.title != "")
        s = s + ": " + oNode.title;
    return s;
}
function GetMenuItemEnabled(oNode, fEnabled) {
    if (!fEnabled)
        return false;
    if (oNode.getAttribute("enabled") == "false")
        return false;
    if (oNode.getAttribute("disabled") != null && oNode.getAttribute("disabled") != "")
        return false;
    return true;
}
var g_menuHtc_html;

function RenderMenuLevel(oMaster, oRoot, fEnabled) {
    var nodes = oRoot.childNodes;
    var nnodes = nodes.length;

    for (var nIndex = 0; nIndex < nnodes; nIndex++) {
        var oNode = nodes[nIndex];

        if (oNode.nodeType != 1)
            continue;
        if (oNode.style.display == "none")
            continue;
        var s;

        if (FIsIType(oNode, "option")) {
            s = GetMenuItemText(oMaster, oNode, oNode.innerHTML.trim());
            if (!GetMenuItemEnabled(oNode, fEnabled)) {
                g_menuHtc_html = g_menuHtc_html + "<li><span id=\"" + oNode.id + "\">" + s + "</span></li>";
            }
            else {
                g_menuHtc_html = g_menuHtc_html + "<li><a href=\"#\" id=\"" + oNode.id + "\" " + "onMenuClick" + "=\"" + oNode.getAttribute("onMenuClick") + "\" onclick=\"" + "javascript:opener.ExecuteOnAccessibleClick(this.getAttribute('" + "onMenuClick" + "')); return false;" + "\">" + s + "</a></li>";
            }
        }
        else if (FIsIType(oNode, "submenu")) {
            s = GetMenuItemText(oMaster, oNode, "");
            g_menuHtc_html = g_menuHtc_html + "<li><span id=\"" + oNode.id + "\">" + s;
            for (var n = 0; n < oNode.childNodes.length; n++) {
                var oLabelNode = oNode.childNodes[n];

                if (oLabelNode.nodeType != 1)
                    continue;
                if (oLabelNode.style.display == "none")
                    continue;
                if (FIsIType(oLabelNode, "label")) {
                    g_menuHtc_html = g_menuHtc_html + " " + oLabelNode.innerHTML;
                    break;
                }
            }
            g_menuHtc_html = g_menuHtc_html + "</span><ul>";
            RenderMenuLevel(oMaster, oNode, GetMenuItemEnabled(oNode, fEnabled));
            g_menuHtc_html = g_menuHtc_html + "</ul></li>";
        }
    }
}
function ExecuteOnAccessibleClick(fnOnClick) {
    var oMaster = g_menuHtc_lastMenu;

    if (oMaster != null) {
        CloseAccessibleMenu(oMaster, 1);
        ExecuteOnClick(fnOnClick, oMaster);
        CloseAccessibleMenu(oMaster, 2);
    }
}
function FIsIHidden(oItem) {
    if (null != oItem) {
        var hiddenFunc = oItem.getAttribute("hidden");

        if (null == hiddenFunc)
            return false;
        return eval(hiddenFunc);
    }
    else
        return false;
}
function EvalAttributeValue(oNode, sAttribute1, sAttribute2) {
    var result = oNode.getAttribute(sAttribute2);

    if (result != null && (result.toLowerCase()).indexOf("javascript:") == 0) {
        result = String(eval(result.substring(11)));
    }
    else {
        result = null;
    }
    if (result == null || result == "") {
        result = oNode.getAttribute(sAttribute1);
    }
    if (result == null)
        result = "";
    return result;
}
function Menu_AddCssClassToElement(e, c) {
    var cn = e.className;

    if (cn != null) {
        if (!Menu_HasCssClass(e, c))
            e.className = e.className + " " + c;
    }
    else {
        e.className = c;
    }
    function Menu_HasCssClass(elem, className, fRemove) {
        var cn2 = elem.className;

        if (cn2 == null)
            return false;
        var rg = cn2.split(" ");
        var i;

        for (i = 0; i < rg.length; i++) {
            if (rg[i] == className) {
                if (fRemove) {
                    rg.splice(i, 1);
                    elem.className = rg.join(" ");
                }
                return true;
            }
        }
        return false;
    }
}
function setInnerText(elem, text) {
    var doc = elem.ownerDocument;

    if (Boolean(doc.createTextNode)) {
        var textNode = doc.createTextNode(text);

        elem.innerHTML = '';
        elem.appendChild(textNode);
    }
    else {
        elem.innerText = text;
    }
}
var MMU_chDelim;
var MMU_chDelimEnc;
var MMU_postbackPrefix;
var MMU_chDelim2;
var MMU_chDelim2Enc;

function MHash_InitializePrototype() {
ULSv4Y:
    ;
    MHash.prototype._keys = undefined;
    MHash.prototype._values = undefined;
    MHash.prototype.Add = MHash_Add;
    MHash.prototype.Count = MHash_Count;
    MHash.prototype.Keys = MHash_Keys;
    MHash.prototype.Values = MHash_Values;
    MHash.prototype.Exists = MHash_Exists;
    MHash.prototype.Item = MHash_Item;
}
function MHash() {
ULSv4Y:
    ;
    this._keys = [];
    this._values = [];
}
function MHash_Add(oKey, oValue) {
ULSv4Y:
    ;
    this._keys.push(oKey);
    this._values.push(oValue);
}
function MHash_Count() {
ULSv4Y:
    ;
    return this._keys.length;
}
function MHash_Keys() {
ULSv4Y:
    ;
    return this._keys;
}
function MHash_Values() {
ULSv4Y:
    ;
    return this._values;
}
function MHash_Exists(oKey) {
ULSv4Y:
    ;
    var len = this.Count();
    var keys = this.Keys();

    for (var i = 0; i < len; i++) {
        if (keys[i] == oKey)
            return true;
    }
    return false;
}
function MHash_Item(oKey) {
ULSv4Y:
    ;
    var len = this.Count();
    var keys = this.Keys();

    for (var i = 0; i < len; i++) {
        if (keys[i] == oKey)
            return (this.Values())[i];
    }
    return null;
}
function ParseContext_InitializePrototype() {
ULSv4Y:
    ;
    ParseContext.prototype.TemplateClientId = undefined;
    ParseContext.prototype.MenuClientId = undefined;
    ParseContext.prototype.TimeoutMessage = undefined;
}
function ParseContext(contextString) {
    try {
        var values = contextString.split(';');
        var str = values[0];

        this.TemplateClientId = str;
        str = values[1];
        this.MenuClientId = str;
        str = values[2];
        this.TimeoutMessage = (str.replace(/%semi%/g, ";")).replace(/%quot%/g, "\'");
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
var MMU_reDelimEnc;
var MMU_reDelim2Enc;
var MMU_reDelimDec;
var MMU_reDelim2Dec;

function MMU_EncVal(strDec) {
    return (strDec.replace(MMU_reDelimDec, MMU_chDelimEnc)).replace(MMU_reDelim2Dec, MMU_chDelim2Enc);
}
function MMU_DecVal(strEnc) {
    return (strEnc.replace(MMU_reDelim2Enc, MMU_chDelim2)).replace(MMU_reDelimEnc, MMU_chDelim);
}
function MMU_ParseNV(rgnv) {
    var dictNV = new MHash();
    var rgstrNV = rgnv.split(MMU_chDelim);

    if (rgstrNV != null) {
        var i;

        for (i = 0; i < rgstrNV.length; i++) {
            var strNV = rgstrNV[i];
            var iEq = strNV.indexOf("=");

            if (iEq == 0) {
                continue;
            }
            var key = null;
            var value = null;

            if (iEq < 0) {
                key = strNV;
            }
            else {
                key = strNV.substr(0, iEq);
                if (iEq < strNV.length - 1) {
                    value = MMU_DecVal(strNV.substr(iEq + 1));
                }
                else {
                    value = "";
                }
            }
            dictNV.Add(key, value);
        }
    }
    return dictNV;
}
function MMU_ParseNVAttr(elem, attr) {
    var val = elem.getAttribute(attr);

    if (val == null && elem.childNodes.length > 0) {
        var firstChild = elem.childNodes[0];

        if (firstChild.nodeType == 1) {
            val = firstChild.getAttribute(attr);
        }
    }
    if (val == null) {
        return new MHash();
    }
    return MMU_ParseNV(val);
}
function MMU_ResetMenuState(menu, dis, hid, chk, tokval) {
    var i;
    var childNodes = menu.childNodes;

    for (i = 0; i < childNodes.length; i++) {
        var mnu = childNodes[i];

        if (mnu.nodeType != 1)
            continue;
        var mnuId = mnu.getAttribute("id");

        if (mnu != null && mnuId != null && mnuId.length > 0) {
            if (mnu.childNodes.length > 0) {
                MMU_ResetMenuState(mnu, dis, hid, chk, tokval);
                continue;
            }
            if (hid.Exists(mnuId)) {
                mnu.style.display = "none";
            }
            else {
                mnu.style.display = "";
                var enabledOverride = mnu.getAttribute("enabledOverride");

                if (enabledOverride != null && enabledOverride.length > 0) {
                    mnu.setAttribute("enabled", enabledOverride);
                }
                else {
                    if (dis.Exists(mnuId)) {
                        mnu.setAttribute("enabled", "false");
                    }
                    else {
                        mnu.setAttribute("enabled", "true");
                        if (chk.Exists(mnuId)) {
                            mnu.setAttribute("checked", "true");
                        }
                        else {
                            mnu.setAttribute("checked", "false");
                        }
                    }
                }
            }
            MMU_ReplTokValAttr(mnu, "onMenuClick", tokval);
            MMU_ReplTokValAttr(mnu, "text", tokval);
            MMU_ReplTokValAttr(mnu, "description", tokval);
            MMU_ReplTokValVal(mnu, tokval);
        }
    }
}
function MMU_ReplTokValAttr(elem, attr, tokval) {
ULSv4Y:
    ;
    var val = elem.getAttribute(attr);
    var orig = elem.getAttribute(attr + "_Original");

    if (val != null && orig == null && tokval.Count() > 0) {
        elem.setAttribute(attr + "_Original", val);
    }
    else if (val != null && orig != null && val != orig) {
        val = orig;
    }
    if (val == null || val.length <= 0) {
        return;
    }
    var newVal = MMU_ReplTokVal(val, tokval);

    if (newVal != val) {
        elem.setAttribute(attr, newVal);
    }
}
function MMU_ReplTokValVal(item, tokval) {
ULSv4Y:
    ;
    if (item.nextSibling == null) {
        return;
    }
    var val = item.nextSibling.nodeValue;
    var orig = item.getAttribute("valOrig");

    if (val != null && orig == null && tokval.Count() > 0) {
        orig = val;
        item.setAttribute("valOrig", orig);
    }
    else if (val != null && orig != null && val != orig) {
        val = orig;
    }
    var newVal = MMU_ReplTokVal(val, tokval);

    if (val != null && newVal != null && newVal != val) {
        item.nextSibling.nodeValue = newVal;
    }
}
function MMU_ReplTokVal(toFix, tokval) {
    if (toFix != null && toFix.indexOf("%") >= 0 && tokval != null && tokval.Count() > 0) {
        var toks = tokval.Keys();
        var vals = tokval.Values();
        var i;
        var len = toks.length;

        for (i = 0; i < len; i++) {
            var tok = toks[i];
            var val = vals[i];

            toFix = toFix.replace("%" + tok + "%", val);
        }
    }
    return toFix;
}
var g_MMU_HighlightedEcbTable;
var g_MMU_HighlightedEcbTableOpen;
var g_MMU_OpenTimeoutHandle;

function MMU_Open(menu, ecbLink, e, fAlignRight, alignId, delay) {
    try {
        if (menu == null || ecbLink == null) {
            return;
        }
        if (ecbLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return;
        }
        ClearHighlightedEcbTableOpen();
        if (fAlignRight == null) {
            fAlignRight = true;
        }
        MMU_ResetMenuState(menu, MMU_ParseNVAttr(ecbLink, "menuItemsDisabled"), MMU_ParseNVAttr(ecbLink, "menuItemsHidden"), MMU_ParseNVAttr(ecbLink, "menuItemsChecked"), MMU_ParseNVAttr(ecbLink, "menuTokenValues"));
        var elemAlign = null;

        if (alignId != null && alignId.length > 0) {
            elemAlign = document.getElementById(alignId);
        }
        if (elemAlign == null) {
            elemAlign = document.getElementById(ecbLink.id + "_t");
        }
        if (elemAlign == null) {
            elemAlign = ecbLink;
        }
        MMU_EcbHighlight(MMU_GetHighlightElement(ecbLink), true);
        var openMenuScript = "MenuHtc_show(document.getElementById('" + menu.id + "'), document.getElementById('" + elemAlign.id + "'), true, " + String(fAlignRight) + ", null);";

        openMenuScript += "SetEcbMouseOutAndDestroy('" + menu.id + "');";
        if (delay != null && delay > 0) {
            openMenuScript += " g_MMU_OpenTimeoutHandle = null;";
            g_MMU_OpenTimeoutHandle = window.setTimeout(openMenuScript, delay, "javascript");
        }
        else {
            eval(openMenuScript);
        }
        if (e != null) {
            try {
                e.cancelBubble = true;
            }
            catch (exIgnored) { }
        }
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
function SetEcbMouseOutAndDestroy(menuId) {
    if (g_MMU_HighlightedEcbTable != null) {
        g_MMU_HighlightedEcbTable.onmouseout = null;
        g_MMU_HighlightedEcbTableOpen = g_MMU_HighlightedEcbTable;
        (document.getElementById(menuId))._onDestroy = ClearHighlightedEcbTableOpen;
    }
}
function ClearHighlightedEcbTableOpen() {
ULSv4Y:
    ;
    if (g_MMU_HighlightedEcbTableOpen != null) {
        MMU_EcbHighlight(g_MMU_HighlightedEcbTableOpen, false);
        g_MMU_HighlightedEcbTableOpen = null;
    }
}
function MMU_EcbLinkOnFocusBlurDeferCall(menu, ecbLink, fOnFocus) {
    if (fOnFocus) {
        ecbLink.onblur = fOnFocus ? new Function("MMU_EcbLinkOnFocusBlurDeferCall(null, this, false)") : null;
    }
    if (g_MMU_HighlightedEcbTableOpen != null)
        return;
    var ecbTable = document.getElementById(ecbLink.id + "_t");

    if (ecbTable != null) {
        MMU_EcbHighlight(ecbTable, fOnFocus);
    }
}
function MMU_EcbTableMouseOverOutDeferCall(ecbTable, fMouseOver) {
    if (fMouseOver) {
        if (ecbTable == g_MMU_HighlightedEcbTableOpen) {
            return;
        }
        ecbTable.onmouseout = fMouseOver ? new Function("MMU_EcbTableMouseOverOut(this, false)") : null;
    }
    MMU_EcbHighlight(ecbTable, fMouseOver);
}
function MMU_EcbHighlight(ecbTable, fHighlight) {
    if (ecbTable == null && !fHighlight) {
        ecbTable = g_MMU_HighlightedEcbTableOpen;
    }
    if (ecbTable == null) {
        return;
    }
    if (fHighlight == null) {
        fHighlight = false;
    }
    var hoverActive = ecbTable.getAttribute("hoverActive");
    var hoverInactive = ecbTable.getAttribute("hoverInactive");

    if (hoverActive == null) {
        hoverActive = "ms-selectedtitle";
    }
    if (hoverInactive == null) {
        hoverInactive = "ms-unselectedtitle";
    }
    if (fHighlight) {
        ecbTable.className = hoverActive;
        g_MMU_HighlightedEcbTable = ecbTable;
    }
    else {
        ecbTable.className = hoverInactive;
    }
    var menuFormat = ecbTable.getAttribute("menuformat");
    var imageCell2 = document.getElementById(ecbTable.id + "i");

    if (imageCell2 != null && menuFormat != null && menuFormat == "ArrowOnHover") {
        imageCell2.style.visibility = fHighlight ? "visible" : "hidden";
    }
    if (!fHighlight) {
        g_MMU_HighlightedEcbTable = null;
    }
}
function MMU_PopMenuIfShowingDeferCall(menuElement) {
}
function MMU_HandleArrowSplitButtonKeyDown(e, id, a, t) {
    if (!e.shiftKey && !e.altKey && !e.ctrlKey && GetEventKeyCode(e) == 13) {
        return undefined;
    }
    if (Boolean(a))
        return MMU_EcbLinkOnKeyDown(byid(id), a, e);
    return undefined;
}
function MMU_HandleArrowOnHoverKeyDown(menu, ecbLink, e) {
    if (!e.shiftKey && !e.altKey && !e.ctrlKey && GetEventKeyCode(e) == 13) {
        return undefined;
    }
    if (null != ecbLink)
        return MMU_EcbLinkOnKeyDown(menu, ecbLink, e);
    return undefined;
}
function MMU_GetHighlightElement(elem) {
    var highlightElement = null;

    highlightElement = document.getElementById(elem.id + "_t");
    if (highlightElement != null)
        return highlightElement;
    else
        return elem;
}
var g_MMU_theFormActionAtPageLoad;
var g_MMU_Form0ActionAtPageLoad;
var g_MMU_Form0ActionAtPreMenuOpen;

function MMU_CallbackPreMenuOpen(templateClientId, menuClientId, callbackEventReference, timeoutLength, timeoutMessage, e) {
    try {
        var menuTemplate = document.getElementById(templateClientId);
        var menuLink = document.getElementById(menuClientId);

        if (menuLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return;
        }
        MMU_StopPendingTimerEventsFromCallback();
        MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
        var menu = document.getElementById(menuClientId);

        menu.setAttribute("callbackInProgress", "true");
        loadingMessageMenuItem = CAMOpt(menuTemplate, Strings.STS.L_Loading_Text, "null");
        if (loadingMessageMenuItem != null) {
            loadingMessageMenuItem.setAttribute("callbackitem", "true");
            loadingMessageMenuItem.setAttribute("enabled", "false");
        }
        var callbackContext = templateClientId + ";" + menuClientId + ";" + (timeoutMessage.replace(/;/g, "%semi%")).replace(/\'/g, "%quot%");

        callbackEventReference = callbackEventReference.replace(/__CALLBACKCONTEXT__/g, callbackContext);
        eval(callbackEventReference);
        g_MMU_RequestTimeoutTimeoutHandle = window.setTimeout("MMU_CallbackErrHandler('timeout', '" + callbackContext + "')", timeoutLength, "javascript");
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
var g_MMU_RequestTimeoutTimeoutHandle;

function MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate) {
    try {
        for (var menuChildIndex = 0; menuChildIndex < menuTemplate.childNodes.length; menuChildIndex++) {
            var menuChild = menuTemplate.childNodes[menuChildIndex];

            if (menuChild.nodeType == 1 && menuChild.getAttribute("callbackitem") == "true") {
                menuTemplate.removeChild(menuChild);
                --menuChildIndex;
            }
        }
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
function MMU_StopPendingTimerEventsFromCallback() {
ULSv4Y:
    ;
    if (g_MMU_OpenTimeoutHandle != null) {
        window.clearTimeout(g_MMU_OpenTimeoutHandle);
        g_MMU_OpenTimeoutHandle = null;
    }
    if (g_MMU_RequestTimeoutTimeoutHandle != null) {
        window.clearTimeout(g_MMU_RequestTimeoutTimeoutHandle);
        g_MMU_RequestTimeoutTimeoutHandle = null;
    }
}
var loadingMessageMenuItem;

function MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString) {
    MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
    var errorMenuItem = CAMOpt(menuTemplate, errorString, "null");

    if (loadingMessageMenuItem != null) {
        loadingMessageMenuItem.setAttribute("callbackitem", "true");
        loadingMessageMenuItem.setAttribute("enabled", "false");
    }
}
function MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorString) {
    MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString);
    HideMenu(menuTemplate);
    MMU_Open(menuTemplate, menu);
}
function MMU_CallbackHandler(result, contextString) {
    {
        MMU_StopPendingTimerEventsFromCallback();
        var context = new ParseContext(contextString);
        var menuTemplate = document.getElementById(context.TemplateClientId);

        if (menuTemplate == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var menu = document.getElementById(context.MenuClientId);

        if (menu == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var disabledIds = "";
        var hiddenIds = "";
        var checkedIds = "";
        var tokensAndValues = "";
        var menuItemsHtml = "";
        var parts = result.split(MMU_chDelim);

        if (parts == null || parts.length != 5) {
            if (typeof MMU_GenerateErrorMenuItem != "undefined")
                menuItemsHtml = MMU_GenerateErrorMenuItem(Strings.STS.L_Loading_Error_Text);
        }
        else {
            var re = new RegExp(MMU_chDelimEnc, "g");

            disabledIds = parts[0].replace(re, MMU_chDelim);
            hiddenIds = parts[1].replace(re, MMU_chDelim);
            checkedIds = parts[2].replace(re, MMU_chDelim);
            tokensAndValues = parts[3].replace(re, MMU_chDelim);
            menuItemsHtml = parts[4].replace(re, MMU_chDelim);
        }
        menu.setAttribute("menuItemsDisabled", disabledIds);
        menu.setAttribute("menuItemsHidden", hiddenIds);
        menu.setAttribute("menuItemsChecked", checkedIds);
        menu.setAttribute("menuTokenValues", tokensAndValues);
        MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
        menuTemplate.innerHTML = menuTemplate.innerHTML + menuItemsHtml;
        HideMenu(menuTemplate);
        MMU_Open(menuTemplate, menu);
        menu.setAttribute("callbackInProgress", "");
    }
}
function MMU_CallbackErrHandler(result, contextString) {
    try {
        alert(Strings.STS.L_Loading_Error_Text);
        var context = new ParseContext(contextString);
        var menuTemplate = document.getElementById(context.TemplateClientId);

        if (menuTemplate == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var menu = document.getElementById(context.MenuClientId);

        if (menu == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        menu.setAttribute("callbackInProgress", "");
        var errorMessage = Strings.STS.L_Loading_Error_Text;

        if (result == "timeout" && context.TimeoutMessage != null && context.TimeoutMessage.length > 0) {
            errorMessage = context.TimeoutMessage;
        }
        MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorMessage);
        ;
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
$_global_menu();
