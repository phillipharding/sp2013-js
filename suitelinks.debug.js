function $_global_suitelinks() {
    spoLite = new HelpNamespace('SPOLITE', 0);
    spoMidsized = new HelpNamespace('SPOMIDSIZED', 1);
    spoStandardE1E2 = new HelpNamespace('SPOSTANDARDE1E2', 2);
    spoStandard = new HelpNamespace('SPOSTANDARD', 3);
    SPOHelpNamespaceMap = (function() {
    ULSDDa:
        ;
        var map = {};

        map['SHAREPOINTENTERPRISE'] = spoStandard;
        map['SHAREPOINTENTERPRISELRG'] = spoStandard;
        map['SHAREPOINTEXTRANET'] = spoStandard;
        map['SHAREPOINTPARTNER'] = spoStandard;
        map['SHAREPOINTPROJADDON'] = spoStandard;
        map['SHAREPOINTSTORAGE'] = spoStandard;
        map['SHAREPOINTWAC'] = spoStandard;
        map['SHAREPOINTWACLRG'] = spoStandard;
        map['SHAREPOINTENTERPRISE_EDU'] = spoStandard;
        map['SHAREPOINTWAC_EDU'] = spoStandard;
        map['SHAREPOINT_S_ENTERPRISE_PILOT'] = spoStandard;
        map['SHAREPOINT_PROJECT_PILOT'] = spoStandard;
        map['SHAREPOINT_DUET_PILOT'] = spoStandard;
        map['SHAREPOINT_S_DEVELOPER_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_DEVELOPER_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_EDU_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_PILOT'] = spoStandard;
        map['SHAREPOINT_S_ENTERPRISE_B_PILOT'] = spoStandard;
        map['SHAREPOINT_PROJECT_B_PILOT'] = spoStandard;
        map['SHAREPOINT_DUET_B_PILOT'] = spoStandard;
        map['SHAREPOINT_S_DEVELOPER_B_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_EDU_B_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_DEVELOPER_B_PILOT'] = spoStandard;
        map['SHAREPOINTWAC_B_PILOT'] = spoStandard;
        map['SHAREPOINTENTERPRISE_EDULRG'] = spoStandard;
        map['SHAREPOINTWAC_EDULRG'] = spoStandard;
        map['SHAREPOINTENTERPRISE_GOV'] = spoStandard;
        map['SHAREPOINTENTERPRISELRG_GOV'] = spoStandard;
        map['SHAREPOINTEXTRANET_GOV'] = spoStandard;
        map['SHAREPOINTSTORAGE_GOV'] = spoStandard;
        map['SHAREPOINTWAC_GOV'] = spoStandard;
        map['SHAREPOINTWACLRG_GOV'] = spoStandard;
        map['SHAREPOINT_APP_HOSTING'] = spoStandard;
        map['SHAREPOINT_PROJECT'] = spoStandard;
        map['SHAREPOINT_DUET'] = spoStandard;
        map['SHAREPOINT_S_DEVELOPER'] = spoStandard;
        map['SHAREPOINTWAC_DEVELOPER'] = spoStandard;
        map['SHAREPOINTWAC_DEVELOPER_B_PILOT'] = spoStandard;
        map['SHAREPOINT_PROJECT_GOV'] = spoStandard;
        map['SHAREPOINT_DUET_GOV'] = spoStandard;
        map['SHAREPOINT_APP_HOSTING_GOV'] = spoStandard;
        map['SHAREPOINT_PROJECT_EDU'] = spoStandard;
        map['SHAREPOINT_DUET_EDU'] = spoStandard;
        map['SHAREPOINT_APP_HOSTING_EDU'] = spoStandard;
        map['SHAREPOINTDESKLESS'] = spoStandardE1E2;
        map['SHAREPOINTSTANDARD'] = spoStandardE1E2;
        map['SHAREPOINTSTANDARD_EDU'] = spoStandardE1E2;
        map['SHAREPOINTSTANDARD_EDU_PILOT'] = spoStandardE1E2;
        map['SHAREPOINTSTANDARD_EDU_B_PILOT'] = spoStandardE1E2;
        map['SHAREPOINTDESKLESS_GOV'] = spoStandardE1E2;
        map['SHAREPOINTSTANDARD_GOV'] = spoStandardE1E2;
        map['SHAREPOINTENTERPRISE_MIDMARKET'] = spoMidsized;
        map['SHAREPOINTLITE'] = spoLite;
        map['SHAREPOINT_L_PROFESSIONAL_PILOT'] = spoLite;
        map['SHAREPOINT_L_PROFESSIONAL_B_PILOT'] = spoLite;
        return {
            GetNamespace: function(service) {
            ULSDDa:
                ;
                if (service == null) {
                    return null;
                }
                return map[service];
            }
        };
    })();
}
function ULSDDa() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "suitelinks.commentedjs";
    return o;
}
function RenderSuiteLinks(containerDivId, callBackToRetrieveData, callBackToUpdateNavDataForPage) {
    function RenderSuiteLinksFromJson(suiteLinksJson) {
        if (containerDivId == null || suiteLinksJson == null) {
            return;
        }
        try {
            var navData = JSON.parse(suiteLinksJson);

            if (callBackToUpdateNavDataForPage != null) {
                callBackToUpdateNavDataForPage(navData);
            }
            UpdateCompanyDisplayName(navData);
            EnsureSPSuiteNavBar();
            SPSuiteNavBar.Render(containerDivId, navData, function(elm) {
                if (!IsStrNullOrEmpty(elm.href)) {
                    GoToLink(elm);
                }
                return false;
            });
            SP.SOD.notifyEventAndExecuteWaitingJobs("SPSuiteLinksRendered", [navData]);
        }
        catch (ex) { }
    }
    GetSuiteLinks(callBackToRetrieveData, RenderSuiteLinksFromJson);
}
function CacheSuiteLinks(linksJson) {
    try {
        JSON.parse(linksJson);
    }
    catch (ex) {
        return false;
    }
    var currentLanguage = GetCurrentUICultureOrNone();
    var linksCachedInLocalStorage = false;

    if (!IsNullOrUndefined(window.localStorage)) {
        linksCachedInLocalStorage = TrySetProperty(window.localStorage, "SPSuiteLinksJson", linksJson);
        if (linksCachedInLocalStorage) {
            TrySetProperty(window.localStorage, "SPSuiteLinksLanguage", currentLanguage);
            TrySetProperty(window.localStorage, "SPSuiteLinksDate", new Date());
            TrySetProperty(window.localStorage, "SPSuiteLinksUserKey", GetCurrentUserKey());
        }
    }
    if (!linksCachedInLocalStorage) {
        EnsureSPSuiteNavBar();
        SPSuiteNavBar.cachedJson = linksJson;
    }
    return true;
}
function ClearSuiteLinksCache() {
ULSDDa:
    ;
    if (!IsNullOrUndefined(window.localStorage)) {
        try {
            window.localStorage.removeItem("SPSuiteLinksJson");
            window.localStorage.removeItem("SPSuiteLinksLanguage");
            window.localStorage.removeItem("SPSuiteLinksDate");
            window.localStorage.removeItem("SPSuiteLinksUserKey");
        }
        catch (ex) { }
    }
}
function GetQueryParamValue(param, queryString) {
    if (typeof param != 'undefined' && typeof queryString != 'undefined') {
        var paramIgnoreCase = new RegExp('[?&]' + param + '=', 'i');
        var paramStart = queryString.search(paramIgnoreCase);

        if (paramStart == -1) {
            return null;
        }
        paramStart += param.length + 2;
        var paramEnd = queryString.indexOf('&', paramStart);

        if (paramEnd == -1) {
            paramEnd = queryString.length;
        }
        return queryString.substring(paramStart, paramEnd);
    }
    return null;
}
function GetHelpIdFromKey(key) {
    if (key != null) {
        var helpIdStart = key.indexOf('_') + 1;

        if (helpIdStart > 0) {
            return key.substr(helpIdStart);
        }
    }
    return null;
}
function GetSPOHelpNamespaceFromKey(key, helpLinkUrl) {
    var namespace = 'WSSENDUSER';

    if (key != null) {
        key = key.toUpperCase();
        var namespaceEnd = key.indexOf('_');

        if (namespaceEnd > 0) {
            namespace = key.substr(0, namespaceEnd);
        }
        else {
            namespace = key;
        }
    }
    if (namespace == 'WSSENDUSER' || namespace == 'HELPHOME') {
        var services = GetQueryParamValue('services', helpLinkUrl);
        var mappedNamespace = GetNamespaceForServices(services);

        if (mappedNamespace != null) {
            namespace = mappedNamespace;
        }
    }
    if (namespace == 'PSENDUSER') {
        namespace = 'PSOENDUSER';
    }
    return namespace;
}
function HelpNamespace(namespace, priority) {
ULSDDa:
    ;
    this.namespace = namespace;
    this.priority = priority;
}
var spoLite;
var spoMidsized;
var spoStandardE1E2;
var spoStandard;
var SPOHelpNamespaceMap;

function GetNamespaceForServices(services) {
ULSDDa:
    ;
    if (services == null) {
        return spoStandard.namespace;
    }
    services = services.toUpperCase();
    var serviceArray = services.split('%2C');
    var namespaceToUse = null;

    for (var i = 0; i < services.length; i++) {
        var serviceNamespace = SPOHelpNamespaceMap.GetNamespace(serviceArray[i]);

        if (serviceNamespace != null) {
            if (namespaceToUse == null || serviceNamespace.priority > namespaceToUse.priority) {
                namespaceToUse = serviceNamespace;
            }
        }
    }
    if (namespaceToUse == null) {
        namespaceToUse = spoStandard;
    }
    return namespaceToUse.namespace;
}
function GetSPOHelpUrl(linksJson, strParam) {
    if (strParam == null) {
        return null;
    }
    var helpLinkUrl = GetSuiteHelpLink(linksJson);

    if (helpLinkUrl == null) {
        return null;
    }
    var targetUrl = 'http://' + "o15.officeredir.microsoft.com" + '/r/rlidOfficeWebHelp?';
    var helpKey = GetQueryParamValue('Key', strParam);
    var namespace = GetSPOHelpNamespaceFromKey(helpKey, helpLinkUrl);

    if (namespace != null) {
        targetUrl += 'p1=';
        targetUrl += namespace;
    }
    else {
        return null;
    }
    targetUrl += '&clid=';
    targetUrl += Strings.STS.L_Language_Text;
    var helpId = GetHelpIdFromKey(helpKey);

    if (helpId != null) {
        targetUrl += '&helpID=';
        targetUrl += helpId;
    }
    targetUrl += '&ver=' + "15";
    var helpLinkQueryStart = helpLinkUrl.indexOf('?');

    if (helpLinkQueryStart == -1) {
        helpLinkQueryStart = helpLinkUrl.indexOf('&');
    }
    else {
        helpLinkQueryStart += 1;
        targetUrl += '&';
    }
    if (helpLinkQueryStart > -1) {
        targetUrl += helpLinkUrl.substring(helpLinkQueryStart);
    }
    return targetUrl;
}
function UpdateCompanyDisplayName(navData) {
    if (Boolean(navData.CompanyDisplayName)) {
        var brandingName = Strings.STS.L_Mybrary_Branding_TextWithName2;

        if (Boolean(brandingName))
            brandingName = String.format(brandingName, "OneDrive", navData.CompanyDisplayName);
        else {
            brandingName = Strings.STS.L_Mybrary_Branding_TextWithName;
            brandingName = String.format(brandingName, navData.CompanyDisplayName);
        }
        SP.SOD.notifyEventAndExecuteWaitingJobs("AddMybraryBranding", [brandingName]);
        var skyDriveTextNode = document.getElementById("skyDriveText");

        if (skyDriveTextNode != null)
            setInnerText(skyDriveTextNode, brandingName);
        var skyDriveFolderNode = document.getElementById("skyDriveFolder");

        if (skyDriveFolderNode != null)
            setInnerText(skyDriveFolderNode, STSHtmlEncode(navData.CompanyDisplayName));
    }
}
function EnsureSPSuiteNavBar() {
ULSDDa:
    ;
    if (typeof SPSuiteNavBar != 'undefined') {
        return;
    }
    SPSuiteNavBar = new (function() {
    ULSDDa:
        ;
        function ImageClipInfo(spanCssClass, imageCssClass, imageUrl) {
            this.containerClass = spanCssClass;
            this.imgClass = imageCssClass;
            this.imgSrc = imageUrl;
        }
        ImageClipInfo.prototype.containerClass = "";
        ImageClipInfo.prototype.imgClass = "";
        ImageClipInfo.prototype.imgSrc = "";
        var NavBarID = "Suite_NavBar";
        var ClipID = "_Clip";
        var IsRtl = window.document.documentElement.getAttribute("dir") == "rtl";
        var navBar = null;
        var navData = null;
        var clickHandler = null;
        var htmlParts = null;
        var currentMenuDiv = null;
        var currentMenuDivBoundingRect = null;
        var currentMenuOwner = null;
        var currentMenuOwnerBoundingRect = null;
        var thisObject = this;
        var commonThemedImageUrl = GetThemedImageUrl("spcommon.png");

        this.cachedJson = "";
        var IsMouseInRectangle = function(evt, rectangle) {
            var x = evt.clientX;
            var y = evt.clientY;

            return x > rectangle.left && x < rectangle.right && y > rectangle.top && y < rectangle.bottom;
        };
        var IsMouseInMenu = function(evt) {
            return currentMenuDiv != null && (IsMouseInRectangle(evt, currentMenuOwnerBoundingRect) || IsMouseInRectangle(evt, currentMenuDivBoundingRect));
        };
        var HtmlEncode = function(str) {
        ULSDDa:
            ;
            var a = document.createElement("div");

            a.appendChild(document.createTextNode(str));
            return a.innerHTML.replace(/\"/g, "&quot;");
        };
        var GetRect = function(elem) {
            var rWin = elem.getBoundingClientRect();
            var xOff = Boolean(window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft;
            var yOff = Boolean(window.pageYOffset) ? window.pageYOffset : document.documentElement.scrollTop;
            var rDoc = {};

            rDoc.left = rWin.left + xOff;
            rDoc.right = rWin.right + xOff;
            rDoc.top = rWin.top + yOff;
            rDoc.bottom = rWin.bottom + yOff;
            return rDoc;
        };
        var AddDocumentEventListener = function(evtType, handler) {
        ULSDDa:
            ;
            var root = window.document.documentElement;

            if (Boolean(root.addEventListener)) {
                root.addEventListener(evtType, handler, true);
            }
            else if (Boolean(root.attachEvent)) {
                root.attachEvent("on" + evtType, handler);
            }
        };
        var RenderPopupMenuItem = function(linkData) {
            if (linkData == null) {
                htmlParts.push("<li class=\"ms-core-menu-separatorHr\"/>");
            }
            else {
                htmlParts.push("<li class=\"ms-core-menu-item\">");
                htmlParts.push("<a id=");
                htmlParts.push(StAttrQuote("Suite_SubLink_" + linkData.Id));
                htmlParts.push(" class=\"ms-core-menu-link\" onblur=\"SPSuiteNavBar.MenuItemBlur(this);\"");
                htmlParts.push(" onfocus=\"SPSuiteNavBar.MenuItemFocus(this);\"");
                if (linkData.TargetWindow) {
                    htmlParts.push(" target=");
                    htmlParts.push(StAttrQuote(linkData.TargetWindow));
                }
                htmlParts.push(" onkeydown=\"SPSuiteNavBar.MenuItemKeyDown(this,event);\"");
                htmlParts.push(" href=");
                htmlParts.push(StAttrQuote(linkData.Url));
                htmlParts.push(">");
                htmlParts.push("<div class=\"ms-core-menu-label\"><span class=\"ms-core-menu-title\">");
                htmlParts.push(HtmlEncode(linkData.Text));
                htmlParts.push("</span></div></a></li>");
            }
        };
        var RenderPopupMenuItems = function(links) {
            if (links != null) {
                var i, c;

                c = links.length;
                if (c > 0) {
                    htmlParts.push("<ul class=\"ms-core-menu-list\">");
                    for (i = 0; i < c; i++) {
                        RenderPopupMenuItem(links[i]);
                    }
                    htmlParts.push("</ul>");
                }
            }
        };
        var RenderPopupMenu = function(links, menuId) {
            htmlParts.push("<div id=");
            htmlParts.push(StAttrQuote(menuId));
            htmlParts.push(" class=\"ms-core-menu-box ms-core-suitemenu\">");
            RenderPopupMenuItems(links);
            htmlParts.push("</div>");
        };
        var RenderMainLink = function(linkData) {
            var isActive = linkData.Id != null && linkData.Id == navData.CurrentMainLinkElementID;

            RenderLink(linkData.Id, linkData.Url, linkData.TargetWindow, linkData.Text, null, linkData.SubLinks, false, isActive);
        };
        var RenderLink = function(linkId, linkUrl, linkTarget, linkText, normalImageClipInfo, subLinks, alignMenuRight, isActive, linkTitle) {
            var elemId = "Suite_MainLink_" + linkId;

            alignMenuRight = true;
            htmlParts.push("<li class=\"ms-core-suiteLink\">");
            htmlParts.push("<a id=");
            htmlParts.push(StAttrQuote(elemId));
            var menuId;
            var setImageTooltip = true;
            var hasMenu = subLinks != null && subLinks.length > 0;

            if (hasMenu) {
                linkUrl = null;
                setImageTooltip = false;
                menuId = "Suite_PopupMenu_" + linkId;
                RenderEventHandlersToShowMenu(menuId, alignMenuRight);
            }
            else {
                htmlParts.push(" onfocus=\"SPSuiteNavBar.HideMenu();\"");
            }
            if (linkTarget != null) {
                htmlParts.push(" target=");
                htmlParts.push(StAttrQuote(linkTarget));
            }
            if (linkTitle == null && normalImageClipInfo != null) {
                linkTitle = linkText;
            }
            if (linkTitle != null) {
                htmlParts.push(" title=\"");
                htmlParts.push(HtmlEncode(linkTitle));
                htmlParts.push("\"");
            }
            if (linkUrl != null) {
                htmlParts.push(" href=");
                htmlParts.push(StAttrQuote(linkUrl));
            }
            else if (hasMenu) {
                htmlParts.push(" href=\"#\"");
            }
            else {
                htmlParts.push(" class=\"ms-core-suiteLink-disabled\"");
            }
            htmlParts.push(" class=\"ms-core-suiteLink-a\">");
            htmlParts.push("<span onblur=\"SPSuiteNavBar.HideMenuOnBlur()\">");
            if (normalImageClipInfo == null) {
                htmlParts.push(HtmlEncode(linkText));
                if (hasMenu) {
                    var downArrowClipInfo = new ImageClipInfo("ms-suitenav-downarrowBox", "ms-suitenav-downarrowIcon", commonThemedImageUrl);

                    RenderImage(downArrowClipInfo, null, null, false);
                }
            }
            else {
                RenderImage(normalImageClipInfo, null, linkText, setImageTooltip);
            }
            if (isActive) {
                var caratClipInfo = new ImageClipInfo("ms-suitenav-caratBox", "ms-suitenav-caratIcon", commonThemedImageUrl);

                RenderImage(caratClipInfo, "Suite_ActiveLinkIndicator", null, false);
            }
            htmlParts.push("</span>");
            htmlParts.push("</a>");
            if (hasMenu) {
                RenderPopupMenu(subLinks, menuId);
            }
            htmlParts.push("</li>");
        };
        var RenderEventHandlersToShowMenu = function(menuId, alignMenuRight) {
        ULSDDa:
            ;
            var i, c;
            var eventTypes = ["onfocus", "onclick"];

            c = eventTypes.length;
            for (i = 0; i < c; i++) {
                htmlParts.push(" ");
                htmlParts.push(eventTypes[i]);
                htmlParts.push("=\"SPSuiteNavBar.ShowMenu(this, '");
                htmlParts.push(STSScriptEncode(menuId));
                htmlParts.push("', ");
                htmlParts.push(STSScriptEncode(String(alignMenuRight)));
                htmlParts.push(");");
                if (eventTypes[i] == "onclick") {
                    htmlParts.push("SPSuiteNavBar.KillEvent(event);");
                }
                htmlParts.push("\"");
            }
            htmlParts.push(" onblur=\"SPSuiteNavBar.HideMenuOnBlur()\"");
        };
        var RenderImage = function(clipInfo, idImg, alt, setTooltip) {
            if (clipInfo == null || clipInfo.imgSrc == null) {
                return;
            }
            htmlParts.push("<span");
            if (idImg != null) {
                htmlParts.push(" id=");
                htmlParts.push(StAttrQuote(idImg + ClipID));
            }
            htmlParts.push(" class=");
            htmlParts.push(StAttrQuote(clipInfo.containerClass));
            htmlParts.push(" onblur=\"SPSuiteNavBar.HideMenuOnBlur()\"><img");
            if (idImg != null) {
                htmlParts.push(" id=");
                htmlParts.push(StAttrQuote(idImg));
            }
            htmlParts.push(" class=");
            htmlParts.push(StAttrQuote(clipInfo.imgClass));
            htmlParts.push(" src=");
            htmlParts.push(StAttrQuote(clipInfo.imgSrc));
            if (alt != null) {
                alt = HtmlEncode(alt);
                htmlParts.push(" alt=\"");
                htmlParts.push(alt);
                htmlParts.push("\"");
                if (setTooltip) {
                    htmlParts.push(" title=\"");
                    htmlParts.push(alt);
                    htmlParts.push("\"");
                }
            }
            htmlParts.push("/></span>");
        };
        var RenderNavBar = function() {
        ULSDDa:
            ;
            if (navData.IsAuthenticated || Boolean(navData.UserDisplayName)) {
                htmlParts.push("<div id=");
                htmlParts.push(StAttrQuote(NavBarID));
                if (Boolean(clickHandler)) {
                    htmlParts.push(" onclick=\"SPSuiteNavBar.OnLinkClicked(event);\"");
                }
                htmlParts.push("><ul id=\"Suite_TopMenu\" class=\"ms-core-suiteLinkList\">");
                if (navData.WorkloadLinks) {
                    var i, c;

                    c = navData.WorkloadLinks.length;
                    for (i = 0; i < c; i++) {
                        RenderMainLink(navData.WorkloadLinks[i]);
                    }
                }
                if (navData.AppsLinks) {
                    var openMenuText = Strings.STS.L_OpenMenu_Text;

                    if (navData.AppsImage != null && navData.AppsImage.AltText != null) {
                        openMenuText = navData.AppsImage.AltText;
                    }
                    var appsNormalClipInfo = new ImageClipInfo("ms-suitenav-ellipsisBox ms-verticalAlignMiddle", "ms-suitenav-ellipsisIcon", commonThemedImageUrl);

                    RenderLink("Apps", null, null, openMenuText, appsNormalClipInfo, navData.AppsLinks, false, false);
                }
                if (navData.AdminLink) {
                    RenderMainLink(navData.AdminLink);
                }
                if (navData.PartnerLink) {
                    RenderMainLink(navData.PartnerLink);
                }
                htmlParts.push("</ul></div>");
            }
        };
        var UpdateLinksUsingNavData = function() {
        ULSDDa:
            ;
            if (navData.O365SettingsLink != null) {
                AddSettingsLinkToSiteActionsMenu(navData.O365SettingsLink);
            }
            UpdateLogoLink();
        };
        var UpdateLogoLink = function() {
        ULSDDa:
            ;
            var altText = null;

            if (navData.LogoImage != null) {
                altText = navData.LogoImage.AltText;
            }
            var brandingLink = document.getElementById("suiteBrandingLink");

            if (brandingLink != null) {
                if (navData.LogoNavigationUrl != null) {
                    brandingLink.setAttribute("href", STSHtmlEncode(navData.LogoNavigationUrl));
                }
                if (altText != null) {
                    brandingLink.setAttribute("title", altText);
                }
            }
            if (altText != null) {
                var brandingImage = document.getElementById("suiteBrandingIcon");

                if (brandingImage != null) {
                    brandingImage.setAttribute("alt", altText);
                    brandingImage.setAttribute("title", altText);
                }
            }
        };
        var AddSettingsLinkToSiteActionsMenu = function(settingsLink) {
            var siteActionsMenu = null;
            var menus = document.getElementsByTagName("menu");

            for (var i = 0; i < menus.length; i++) {
                var menu = menus[i];

                if (menu != null && menu.id != null && (menu.id.toLowerCase()).endsWith("siteactionsmenumain")) {
                    siteActionsMenu = menu;
                    break;
                }
            }
            if (siteActionsMenu != null && settingsLink != null && settingsLink.Id != null && settingsLink.Url != null && settingsLink.Text != null && document.getElementById(settingsLink.Id) == null) {
                var settingsMenuItem = String.format("<ie:menuitem id={0} type=\"option\" onMenuClick=\"STSNavigate2(event,'{1}');\" text={2} description={2}></ie:menuitem>", StAttrQuote(settingsLink.Id), STSScriptEncode(settingsLink.Url), StAttrQuote(settingsLink.Text));

                siteActionsMenu.innerHTML += settingsMenuItem;
            }
        };

        this.KillEvent = function(evt) {
            if (Boolean(evt.preventDefault)) {
                evt.preventDefault();
            }
            else {
                evt.returnValue = false;
            }
            if (Boolean(evt.stopPropagation)) {
                evt.stopPropagation();
            }
            else {
                evt.cancelBubble = true;
            }
        };
        this.HideMenuOnBlur = function() {
        ULSDDa:
            ;
            if (currentMenuDiv != null) {
                var previousMenuDiv = currentMenuDiv;
                var previousMenuDivParent = currentMenuDiv.parentNode;
                var contextObject = this;

                setTimeout(function() {
                ULSDDa:
                    ;
                    var hide = true;
                    var activeElem = document.activeElement;

                    if (activeElem != null) {
                        var activeElemParent = activeElem;

                        while (activeElemParent != null) {
                            if (activeElemParent == previousMenuDivParent) {
                                hide = false;
                                break;
                            }
                            activeElemParent = activeElemParent.parentNode;
                        }
                    }
                    if (hide && previousMenuDiv.style.display != "none") {
                        contextObject.HideMenu();
                    }
                }, 0);
            }
        };
        this.HideMenu = function() {
        ULSDDa:
            ;
            if (currentMenuDiv != null) {
                currentMenuDiv.style.display = "none";
                currentMenuDiv.style.top = "-10000px";
                currentMenuDiv = null;
            }
            if (currentMenuOwner != null) {
                RemoveCssClassFromElement(currentMenuOwner, "ms-core-suiteLink-active");
                currentMenuOwner = null;
            }
        };
        this.ShowMenu = function(popupOwner, menuDivID, alignRight) {
            var menuDiv = document.getElementById(menuDivID);

            if (menuDiv === currentMenuDiv) {
                return;
            }
            this.HideMenu();
            MenuHtc_hide();
            AddCssClassToElement(popupOwner, "ms-core-suiteLink-active");
            currentMenuDiv = menuDiv;
            currentMenuOwner = popupOwner;
            currentMenuOwnerBoundingRect = GetRect(popupOwner);
            var navBarBoundingRect = GetRect(navBar);

            menuDiv.style.display = "inline-block";
            var menuLeft;
            var menuWidth = menuDiv.offsetWidth;

            if (typeof alignRight == 'undefined') {
                alignRight = false;
            }
            if (IsRtl) {
                alignRight = !alignRight;
            }
            if (alignRight) {
                menuLeft = currentMenuOwnerBoundingRect.right - menuWidth;
            }
            else {
                menuLeft = currentMenuOwnerBoundingRect.left;
            }
            var winWidth = document.documentElement.clientWidth;
            var winLeft = Boolean(window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft;
            var winRight = winLeft + winWidth;

            if (menuLeft < winLeft) {
                menuLeft = winLeft;
            }
            else if (menuLeft + menuWidth > winRight) {
                menuLeft = winRight - menuWidth;
            }
            menuDiv.style.left = String(Math.max(winLeft, menuLeft)) + "px";
            menuDiv.style.top = String(navBarBoundingRect.bottom) + "px";
            var menuRect = GetRect(menuDiv);

            currentMenuDivBoundingRect = menuRect;
            currentMenuDivBoundingRect.top = Math.min(currentMenuDivBoundingRect.top, currentMenuOwnerBoundingRect.bottom - 1);
        };
        this.MenuItemBlur = function(menuItem) {
            var PopupMenuClassName = "ms-core-menu-box";
            var selectedItemClassName = "ms-core-menu-itemSelected";
            var menuListItem = menuItem.parentNode;

            if (menuListItem != null) {
                RemoveCssClassFromElement(menuListItem, selectedItemClassName);
            }
            var menuDiv = menuItem.parentNode;

            while (menuDiv != null && !HasCssClass(menuDiv, PopupMenuClassName)) {
                menuDiv = menuDiv.parentNode;
            }
            if (menuDiv != currentMenuDiv) {
                return;
            }
            this.HideMenuOnBlur();
        };
        this.MenuItemFocus = function(menuLink) {
            var selectedItemClassName = "ms-core-menu-itemSelected";
            var menuItem = menuLink.parentNode;

            if (menuItem != null && !HasCssClass(menuItem, selectedItemClassName)) {
                AddCssClassToElement(menuItem, selectedItemClassName);
            }
        };
        this.MenuItemKeyDown = function(menuItem, evt) {
            if (evt == null) {
                evt = window.event;
            }
            if (evt != null && GetEventKeyCode(evt) == 32) {
                ClkElmt(menuItem);
            }
            return false;
        };
        this.OnLinkClicked = function(evt) {
            var target = Boolean(evt.target) ? evt.target : evt.srcElement;
            var linkElement = null;

            while (target != null && target != navBar) {
                if (target.tagName != null && target.tagName.toUpperCase() == "A") {
                    linkElement = target;
                    break;
                }
                target = target.parentNode;
            }
            if (linkElement != null) {
                var doDefault = clickHandler(linkElement);

                if (!doDefault) {
                    this.KillEvent(evt);
                }
            }
        };
        this.Render = function(navBarContainerDivId, navBarData, linkClickHandler) {
        ULSDDa:
            ;
            if (navBarData == null) {
                return;
            }
            navData = navBarData;
            clickHandler = linkClickHandler;
            if (navBarContainerDivId != null) {
                var navBarContainerDiv = document.getElementById(navBarContainerDivId);

                if (navBarContainerDiv != null) {
                    htmlParts = [];
                    RenderNavBar();
                    navBarContainerDiv.innerHTML = htmlParts.join("");
                    navBar = document.getElementById(NavBarID);
                }
            }
            UpdateLinksUsingNavData();
            htmlParts = null;
            navData = null;
        };
        AddDocumentEventListener('keydown', function(evt) {
            var escKey = 27;

            if (evt.which == escKey || evt.keyCode == escKey) {
                thisObject.HideMenu();
            }
        });
        AddDocumentEventListener('click', function(evt) {
            thisObject.HideMenu();
        });
        AddDocumentEventListener('contextmenu', function(evt) {
            thisObject.HideMenu();
        });
    });
}
$_global_suitelinks();
