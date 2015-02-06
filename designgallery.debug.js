function $_global_designgallery() {
    ExecuteOrDelayUntilScriptLoaded(function() {
    ULSUrc:
        ;
        var globalOverrideCtx = {};

        globalOverrideCtx.Templates = {};
        globalOverrideCtx.Templates.Header = RenderDesignGalleryHeader;
        globalOverrideCtx.Templates.Body = RenderDesignGalleryBody;
        globalOverrideCtx.Templates.Footer = RenderDesignGalleryFooter;
        globalOverrideCtx.BaseViewID = 2;
        globalOverrideCtx.ListTemplateType = 124;
        if (typeof SPClientTemplates != "undefined")
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx);
    }, 'clienttemplates.js');
    GetDesignDataHashUrl = function() {
    ULSUrc:
        ;
        return "";
    };
    g_desgal_hideCurrentItem = false;
    g_desgal_ie8CssTextBuffer = "";
    g_desgal_ie8StylesheetElement = null;
    g_tableContent = "";
    g_loadingNotificationId = null;
    g_needLoadingNotification = false;
    g_elmPreview = null;
    g_desbld_site_assets_list_id = null;
    g_desbld_imagePickerElementsInited = false;
    g_desbld_tryItOutClicked = false;
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("designgallery.js");
    }
}
function ULSUrc() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "designgallery.commentedjs";
    return o;
}
function RenderDesignGalleryHeader(context) {
    return "";
}
function RenderDesignGalleryFooter(context) {
    var ret = [];

    RenderPaging(ret, context);
    return ret.join('');
}
var g_designData;
var GetDesignDataHashUrl;

function RenderDesignGalleryBody(context) {
    ShowDesignLoadingNotification();
    var rows = context.ListData["Row"];
    var strUrl = GetDesignDataHashUrl();

    if (null !== strUrl) {
        try {
            strUrl = (new URI(strUrl)).getString();
        }
        catch (e) { }
        var req = new XMLHttpRequest();

        req.open("GET", strUrl, true);
        req.onreadystatechange = function() {
        ULSUrc:
            ;
            if (req.readyState == 4) {
                g_designData = JSON.parse(req.responseText);
                RenderDesignGalleryAllItems(rows);
                HideDesignLoadingNotification();
            }
        };
        req.send(null);
    }
    else {
        HideDesignLoadingNotification();
    }
    return "<div id=\"previewContainer\"></div>";
}
function GetItemIgnoreCase(list, key) {
    var upperKey = decodeURI(key.toUpperCase());

    for (var k in list) {
        if (decodeURI(k.toUpperCase()) === upperKey) {
            return list[k];
        }
    }
    return undefined;
}
var g_desgal_hideCurrentItem;
var g_desgal_ie8CssTextBuffer;
var g_desgal_ie8StylesheetElement;

function RenderDesignGalleryAllItems(rows) {
    var designData = g_designData;

    if (!designData)
        return;
    var overrideThemesLocation = designData.overrideThemesLocation.toLowerCase() == 'true';

    g_desgal_ie8CssTextBuffer = "";
    var ret = [];
    var len = rows.length;

    for (var i = 0; i < len; i++) {
        var row = rows[i];
        var masterPageUrl = row.MasterPageUrl;
        var themeUrl = row.ThemeUrl;
        var imageUrl = STSHtmlEncode(row.ImageUrl);
        var fontSchemeUrl = row.FontSchemeUrl;
        var additionalClass = "";
        var preview = null;
        var packageGuid = null;
        var packageVersion = null;

        if (i == 0 && row.DisplayOrder == 0) {
            if (g_desgal_hideCurrentItem) {
                continue;
            }
            additionalClass = "ms-designgallery-item-current";
            masterPageUrl = designData.current;
            preview = GetItemIgnoreCase(designData.preview, masterPageUrl);
            if (themeUrl == "") {
                if (Boolean(preview))
                    themeUrl = preview.defaultColorPalette;
            }
        }
        if (null === preview) {
            preview = GetItemIgnoreCase(designData.preview, masterPageUrl);
        }
        if (fontSchemeUrl == "") {
            if (Boolean(preview))
                fontSchemeUrl = preview.defaultFontScheme;
        }
        if (overrideThemesLocation && row.PackageGuid != null && row.PackageGuid != "" && row.PackageVersion != null && row.PackageVersion != "") {
            packageGuid = row.PackageGuid;
            packageVersion = row.PackageVersion;
        }
        var previewHTML = RenderPreviewItem(masterPageUrl, themeUrl, imageUrl, fontSchemeUrl, "thumbnail_" + String(i), additionalClass, row.Name, packageGuid, packageVersion, true);

        ret.push(previewHTML);
    }
    RenderStylesForIE8();
    var container = document.getElementById("previewContainer");

    container.setAttribute("role", "menu");
    container.innerHTML = ret.join('');
}
function RenderStylesForIE8() {
ULSUrc:
    ;
    if (browseris.ie8standard) {
        var stylesheet;

        if (!Boolean(g_desgal_ie8StylesheetElement))
            stylesheet = (g_desgal_ie8StylesheetElement = document.createStyleSheet());
        else
            stylesheet = g_desgal_ie8StylesheetElement;
        stylesheet.cssText = g_desgal_ie8CssTextBuffer;
        g_desgal_ie8CssTextBuffer = "";
    }
}
function RenderPreviewItem(masterUrl, themeUrl, imageUrl, fontSchemeUrl, thumbnailID, additionalClass, designName, designGuid, designVersion, fSmallPreview) {
    var currentThemePreview = GetThumbnailPreview(masterUrl, themeUrl, imageUrl, fontSchemeUrl, thumbnailID, fSmallPreview);

    if (currentThemePreview.css != null) {
        if (browseris.ie8standard) {
            g_desgal_ie8CssTextBuffer += currentThemePreview.css;
        }
        else {
            var stylesheet = document.getElementById("ms-design-styles-" + thumbnailID);

            if (!Boolean(stylesheet)) {
                stylesheet = document.createElement('style');
                stylesheet.setAttribute("id", "ms-design-styles-" + thumbnailID);
                stylesheet.setAttribute("type", "text/css");
                (document.getElementsByTagName('head'))[0].appendChild(stylesheet);
            }
            stylesheet.innerHTML = currentThemePreview.css;
        }
    }
    var previewHTML;

    if (currentThemePreview.html != null) {
        var itemClass;

        if (fSmallPreview)
            itemClass = "ms-designgallery-item";
        else
            itemClass = "ms-designbuilder-preview";
        if (fRightToLeft)
            itemClass += " dgp-rightToLeft";
        if (additionalClass != "")
            itemClass += " " + additionalClass;
        if (fSmallPreview) {
            var webServerRelativeLayoutsUrl;

            if (Boolean(_spPageContextInfo)) {
                var webServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl;

                if (webServerRelativeUrl == "/")
                    webServerRelativeUrl = "";
                webServerRelativeLayoutsUrl = webServerRelativeUrl + "/_layouts/15/";
            }
            else {
                webServerRelativeLayoutsUrl = "";
            }
            var strEditorPageUrl = webServerRelativeLayoutsUrl + "designbuilder.aspx?masterUrl=" + encodeURIComponent(masterUrl) + "&themeUrl=" + encodeURIComponent(themeUrl);

            if (imageUrl != null)
                strEditorPageUrl += "&imageUrl=" + encodeURIComponent(imageUrl);
            if (fontSchemeUrl != null)
                strEditorPageUrl += "&fontSchemeUrl=" + encodeURIComponent(fontSchemeUrl);
            if (designGuid != null && designVersion != null)
                strEditorPageUrl = strEditorPageUrl + "&designGuid=" + encodeURIComponent(designGuid) + "&designVersion=" + encodeURIComponent(designVersion);
            previewHTML = "<div class=\"" + itemClass + "\" role=\"menuitem\" aria-labelledby=\"" + thumbnailID + "-label\" onclick=\"GoToPage('" + STSScriptEncode(strEditorPageUrl) + "', true);\">";
            previewHTML += "<div id=\"" + thumbnailID + "\" aria-hidden=\"true\" unselectable=\"true\" class=\"ms-designgallery-thumbnail\">";
        }
        else {
            previewHTML = "<div class=\"" + itemClass + "\" role=\"menuitem\">";
            previewHTML += "<div id=\"" + thumbnailID + "\" aria-hidden=\"true\" class=\"ms-designbuilder-thumbnail\">";
        }
        previewHTML += currentThemePreview.html;
        previewHTML += "</div>";
        previewHTML += "<div id=\"" + thumbnailID + "-label\" class=\"ms-designgallery-iteminfo\"><div class=\"ms-floatLeft\">";
        if (designName !== null) {
            previewHTML += "<a href='#' onclick='return false;' class=\"ms-designgallery-name ms-textLarge\">";
            previewHTML += designName;
            previewHTML += "</a>";
        }
        previewHTML += "</div>";
        previewHTML += "</div></div>";
    }
    return previewHTML;
}
function packageNameClick(ev, packDropdownId, desGuid) {
ULSUrc:
    ;
    if (!Boolean(ev))
        ev = window.event;
    if (Boolean(ev.stopPropagation))
        ev.stopPropagation();
    else
        ev.cancelBubble = true;
    if (Boolean(ev.preventDefault))
        ev.preventDefault();
    var packageSelector = document.getElementById(packDropdownId);

    if (Boolean(packageSelector)) {
        packageSelector.value = desGuid;
        __doPostBack(packDropdownId, "");
    }
}
function GetThumbnailPreview(masterUrl, themeUrl, imageUrl, fontSchemeUrl, thumbnailID, fSmallPreview) {
    var retPreviewCSS = null;
    var retPreviewHTML = null;
    var thumbnailHeight = fSmallPreview ? 208 : 442;
    var thumbnailWidth = fSmallPreview ? 278 : 661;
    var designData = g_designData;

    try {
        var preview = GetItemIgnoreCase(designData.preview, masterUrl);

        if (preview) {
            var previewHTML = preview.html;
            var previewCSS = preview.css;
            var themeColors = GetItemIgnoreCase(designData.themes, themeUrl);
            var fontSchemeData = GetItemIgnoreCase(designData.fontSchemes, fontSchemeUrl);
            var image;

            if (imageUrl === "none")
                image = null;
            else
                image = imageUrl;
            if (null != image) {
                image = image.replace(/'/g, "%27");
                image = image.replace(/"/g, "%22");
                image = image.replace(/\(/g, "%28");
                image = image.replace(/\)/g, "%29");
            }
            var cssTokens = GetCSSTokenMappings(themeColors, image, thumbnailID, thumbnailHeight, thumbnailWidth, fontSchemeData);

            retPreviewCSS = ReplaceTokens(previewCSS, cssTokens);
            var sbFontFaceBlocks = [];

            for (var font in fontSchemeData.FontSlots) {
                var currentLanguageFontData = fontSchemeData.FontSlots[font].CurrentLanguageFont;

                if (currentLanguageFontData.IsWebFont) {
                    sbFontFaceBlocks.push(currentLanguageFontData.PreviewFontFaceBlock);
                }
            }
            retPreviewCSS += sbFontFaceBlocks.join("");
            var textTokens = GetTextTokenMappings(cssTokens);

            retPreviewHTML = ReplaceTokens(previewHTML, textTokens);
        }
    }
    catch (e) {
        retPreviewCSS = (retPreviewHTML = null);
    }
    return {
        css: retPreviewCSS,
        html: retPreviewHTML
    };
}
function ReplaceTokens(tokenizedText, tokens) {
    var len = tokens.length;

    for (var i = 0; i < len; i++) {
        tokenizedText = tokenizedText.replace(tokens[i][0], tokens[i][1]);
    }
    return tokenizedText;
}
function GetTextTokenMappings(cssTokens) {
    var previewTextTokens = [[/\[TITLE\]/g, Strings.STS.L_DGpreview_Title], [/\[CA TABLE\]/g, ReplaceTokens(ConstructTableContent(), cssTokens)], [/\[CA TABLE HEADER\]/g, Strings.STS.L_DGpreview_CATableHeader], [/\[CA TABLE DESCRIPTION\]/g, GetTableDescription()], [/\[CA ACCENT COLORS\]/g, GetAccentColors()], [/\[CA LIST TITLE\]/g, Strings.STS.L_DGpreview_CAList_Header], [/\[BRANDSTRING\]/g, Strings.STS.L_DGpreview_BrandString], [/\[SUITELINK1\]/g, Strings.STS.L_DGpreview_SuiteLink1], [/\[SUITELINK2\]/g, Strings.STS.L_DGpreview_SuiteLink2], [/\[SUITELINK3\]/g, Strings.STS.L_DGpreview_SuiteLink3], [/\[WELCOME\]/g, Strings.STS.L_DGpreview_Welcome], [/\[RIBBONTAB1\]/g, Strings.STS.L_DGpreview_Ribbon1], [/\[RIBBONTAB2\]/g, Strings.STS.L_DGpreview_Ribbon2], [/\[RIBBONTAB3\]/g, Strings.STS.L_DGpreview_Ribbon3], [/\[SEARCHBOX\]/g, Strings.STS.L_DGpreview_Searchbox], [/\[QL1\]/g, Strings.STS.L_DGpreview_QL1], [/\[QL2\]/g, Strings.STS.L_DGpreview_QL2], [/\[QL3\]/g, Strings.STS.L_DGpreview_QL3], [/\[QL4\]/g, Strings.STS.L_DGpreview_QL4], [/\[QLADD\]/g, Strings.STS.L_DGpreview_QLADD], [/\[TN1\]/g, Strings.STS.L_DGpreview_TN1], [/\[TN2\]/g, Strings.STS.L_DGpreview_TN2], [/\[TN3\]/g, Strings.STS.L_DGpreview_TN3], [/\[TN4\]/g, Strings.STS.L_DGpreview_TN4], [/\[SITETITLE\]/g, Strings.STS.L_DGpreview_SiteTitle]];

    return previewTextTokens;
}
function GetTableDescription() {
ULSUrc:
    ;
    return String.format(Strings.STS.L_DGpreview_CATableDescription, "<a>", "</a>", "<a class=\"dgp-pageHyperLinkVisited\">", "</a>");
}
function GetAccentColors() {
ULSUrc:
    ;
    return "<table class=\"dgp-accentTable\"><tbody>" + "<tr style=\"margin-bottom:2%;\">" + "<td class=\"dgp-accentTextCommon dgp-accentColor1\">" + Strings.STS.L_DGpreview_Accent1 + "</td>" + "<td class=\"dgp-accentTextCommon dgp-accentColor2\">" + Strings.STS.L_DGpreview_Accent2 + "</td>" + "<td class=\"dgp-accentTextCommon dgp-accentColor3\">" + Strings.STS.L_DGpreview_Accent3 + "</td>" + "<td class=\"dgp-accentTextCommon dgp-accentColor4\">" + Strings.STS.L_DGpreview_Accent4 + "</td>" + "<td class=\"dgp-accentTextCommon dgp-accentColor5\">" + Strings.STS.L_DGpreview_Accent5 + "</td>" + "<td class=\"dgp-accentTextCommon dgp-accentColor6\">" + Strings.STS.L_DGpreview_Accent6 + "</td>" + "</tr>" + "<tr>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock1\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock2\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock3\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock4\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock5\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "<td class=\"dgp-accentColorBlockCommon\"><div class=\"dgp-accentColorBlock6\"><span style=\"visibility:hidden;\";>&nbsp;</span></div></td>" + "</tr>" + "</tbody></table>";
}
var g_tableContent;

function ConstructTableContent() {
ULSUrc:
    ;
    if (g_tableContent == "")
        g_tableContent = "<th>" + "<tr>" + "<td style=\"width:3%\"></td>" + "<td class=\"dgp-tableheadertext\">" + Strings.STS.L_DGpreview_CATable_H1 + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_H2 + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_H3 + "</td>" + "</tr>" + "</th>" + "<tbody>" + "<tr>" + "<td></td>" + "<td>" + "<a class=\"dgp-tableitemlink\">" + Strings.STS.L_DGpreview_CATable_Doc1 + "</a>" + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Date1 + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Author1 + "</td>" + "</tr>" + "<tr class=\"dgp-tablerowselected\">" + "<td class=\"dgp-tablerowselectedtd\"></td>" + "<td><a class=\"dgp-tableitemlink\" style=\"color:[T_HYPERLINK_1];\">" + Strings.STS.L_DGpreview_CATable_Doc2 + "</a></td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Date2 + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Author2 + "</td>" + "</tr>" + "<tr>" + "<td></td>" + "<td><a class=\"dgp-tableitemlink\" style=\"color:[T_HYPERLINK_1];\">" + Strings.STS.L_DGpreview_CATable_Doc3 + "</a></td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Date3 + "</td>" + "<td>" + Strings.STS.L_DGpreview_CATable_Author3 + "</td>" + "</tr>" + "</tbody>";
    return g_tableContent;
}
function GetCSSTokenMappings(palette, image, id, height, width, fonts) {
    var colorTokens = [];
    var upperColor;

    for (var color in palette.Colors) {
        upperColor = color.toUpperCase();
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "\\]", "g"), GetRGBAColorString(palette.Colors[color].DefaultColor, false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_DARKEST\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[1], false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_DARKER\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[2], false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_MEDIUM\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[3], false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_LIGHTER\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[4], false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_LIGHTEST\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[5], false)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].DefaultColor, true)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_DARKEST_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[1], true)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_DARKER_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[2], true)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_MEDIUM_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[3], true)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_LIGHTER_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[4], true)]);
        colorTokens.push([new RegExp("\\[T_THEME_COLOR_" + upperColor + "_LIGHTEST_AA\\]", "g"), GetRGBAColorString(palette.Colors[color].Shades[5], true)]);
    }
    var otherTokens = [[/\[T_IMAGE\]/g, IsNullOrUndefined(image) || image === '' ? "/_layouts/15/images/blank.gif?rev=23" : image], [/\[ID\]/g, "#" + id], [/\[T_HEIGHT\]/g, String(height) + "px"], [/\[T_WIDTH\]/g, String(width) + "px"], [/\[T_IMGHEIGHT\]/g, String(Math.round(height * 0.75)) + "px"], [/\[T_IMGWIDTH\]/g, String(Math.round(width * 0.75)) + "px"], [/\[T_TITLE_FONT\]/g, '"' + fonts.FontSlots["title"].CurrentLanguageFont.Name + '"'], [/\[T_NAVIGATION_FONT\]/g, '"' + fonts.FontSlots["navigation"].CurrentLanguageFont.Name + '"'], [/\[T_SMALL_HEADING_FONT\]/g, '"' + fonts.FontSlots["small-heading"].CurrentLanguageFont.Name + '"'], [/\[T_HEADING_FONT\]/g, '"' + fonts.FontSlots["heading"].CurrentLanguageFont.Name + '"'], [/\[T_LARGE_HEADING_FONT\]/g, '"' + fonts.FontSlots["large-heading"].CurrentLanguageFont.Name + '"'], [/\[T_BODY_FONT\]/g, '"' + fonts.FontSlots["body"].CurrentLanguageFont.Name + '"'], [/\[T_LARGE_BODY_FONT\]/g, '"' + fonts.FontSlots["large-body"].CurrentLanguageFont.Name + '"']];

    return otherTokens.concat(colorTokens);
}
function GetRGBAColorString(color, fARGBFormat) {
    var colorString = color.HtmlColor;

    if (color.A < 255) {
        if (browseris.ie8standard) {
            var r = DecToHex(Number(color.R));
            var g = DecToHex(Number(color.G));
            var b = DecToHex(Number(color.B));
            var a = DecToHex(Number(color.A));

            colorString = fARGBFormat ? "#" + a + r + g + b : "#" + r + g + b;
        }
        else
            colorString = "rgba(" + String(color.R) + ", " + String(color.G) + ", " + String(color.B) + ", " + String(Number(color.A) / 255.0) + ")";
    }
    return colorString;
}
function DecToHex(n) {
    var hex = n.toString(16);

    if (n < 16)
        hex = "0" + hex;
    return hex;
}
var g_loadingNotificationId;
var g_needLoadingNotification;

function ShowDesignLoadingNotification() {
ULSUrc:
    ;
    if (null !== g_loadingNotificationId)
        return;
    g_needLoadingNotification = true;
    EnsureScript('core.js', typeof addNotification, function() {
    ULSUrc:
        ;
        if (g_needLoadingNotification) {
            g_loadingNotificationId = SP.UI.Notify.showLoadingNotification(true);
            g_needLoadingNotification = false;
        }
    });
}
function HideDesignLoadingNotification() {
ULSUrc:
    ;
    g_needLoadingNotification = false;
    if (null === g_loadingNotificationId)
        return;
    CoreInvoke('removeNotification', g_loadingNotificationId);
    g_loadingNotificationId = null;
}
var g_designBuilderControlRoot, g_desbld_themeUrl, g_desbld_masterUrl, g_desbld_fontSchemeUrl, g_desbld_designGuid, g_desbld_designVersion;

function DesignBuilderOnLoad(initialImageUrl) {
    ShowDesignLoadingNotification();
    var strUrl = GetDesignDataHashUrl();

    try {
        strUrl = (new URI(strUrl)).getString();
    }
    catch (e) { }
    var req = new XMLHttpRequest();

    req.open("GET", strUrl, true);
    req.onreadystatechange = function() {
    ULSUrc:
        ;
        if (req.readyState == 4) {
            var designData = g_designData = JSON.parse(req.responseText);

            AddControlsToCUI();
            if (typeof g_desbld_masterUrl != "undefined" && null !== g_desbld_masterUrl && typeof g_desbld_themeUrl != "undefined" && null !== g_desbld_themeUrl) {
                if (typeof g_desbld_fontSchemeUrl === "undefined" || null === g_desbld_fontSchemeUrl) {
                    var preview = GetItemIgnoreCase(designData.preview, g_desbld_masterUrl);

                    g_desbld_fontSchemeUrl = preview.defaultFontScheme;
                }
                UpdateDesignBuilderPreview(g_desbld_masterUrl, g_desbld_themeUrl, null, g_desbld_fontSchemeUrl);
                if (Boolean(initialImageUrl)) {
                    UpdateDesignBuilderImagePickerImage(initialImageUrl, true);
                }
            }
            HideDesignLoadingNotification();
        }
    };
    req.send(null);
}
var g_elmPreview;

function UpdateDesignBuilderPreview(masterUrl, themeUrl, imageUrl, fontSchemeUrl) {
    if (null == g_elmPreview) {
        var preview = document.getElementById("ms-designbuilder-preview");

        if (!Boolean(preview))
            return;
        g_elmPreview = preview;
    }
    masterUrl = null == masterUrl ? g_desbld_masterUrl : masterUrl;
    themeUrl = null == themeUrl ? g_desbld_themeUrl : themeUrl;
    fontSchemeUrl = null == fontSchemeUrl ? g_desbld_fontSchemeUrl : fontSchemeUrl;
    if (fontSchemeUrl == "default") {
        var previewData = GetItemIgnoreCase(g_designData.preview, masterUrl);

        fontSchemeUrl = previewData.defaultFontScheme;
    }
    var previewHtml = RenderPreviewItem(masterUrl, themeUrl, imageUrl, fontSchemeUrl, "designbuilder-preview", "", null, null, null, false);

    RenderStylesForIE8();
    g_elmPreview.innerHTML = previewHtml;
}
function UpdateDesignBuilderImagePickerImage(imageUrl, updatePreview) {
    if (!Boolean(imageUrl))
        return;
    ExecuteOrDelayUntilScriptLoaded(function() {
    ULSUrc:
        ;
        var pm = SP.Ribbon.PageManager.get_instance();

        pm.executeRootCommand("ImagePickerFileSelected", {
            "FileUrl": imageUrl,
            "UpdatePreview": updatePreview
        }, null, null);
    }, "sp.ribbon.js");
}
var g_desbld_site_assets_list_id;

function InitializeDesignBuilderImageControl(serverUrl, siteRelativeUrl, listName, rootFolder) {
    g_desbld_site_assets_list_id = listName;
    var imageControlBox = document.getElementById("ms-designbuilder-imagecontrol-box");

    if (!Boolean(imageControlBox))
        return;
    EnsureImagePickerElementsInited();
    g_imagePickerImage.setAttribute("alt", Strings.STS.L_DesignBuilderToolsImagePickerImageAltText);
    if (!registerDragUpload(imageControlBox, serverUrl, siteRelativeUrl, listName, rootFolder, true, true, null, OnDesignBuilderImagePickerPreUpload, OnDesignBuilderImagePickerPostUpload)) {
        g_imagePickerPlaceholderText.innerHTML = STSHtmlEncode(Strings.STS.L_DesignBuilderToolsImagePickerNoDragDropPlaceholderText);
    }
}
function OnDesignBuilderImagePickerPreUpload(fileList) {
    if (fileList.length != 1) {
        for (var i = 0, l = fileList.length; i < l; i++) {
            fileList[i].status = FileStatus.SKIP;
        }
        ShowDesignBuilderImageControlError(Strings.STS.L_DesignBuilderToolsImagePickerTooManyFilesError);
        return false;
    }
    var file = fileList[0];
    var fileName = file.fileName;
    var extension = GetImagePickerFileExtension(fileName);

    if (!ValidateImagePickerFileExtension(extension)) {
        file.status = FileStatus.SKIP;
        ShowDesignBuilderImageControlError(Strings.STS.L_DesignBuilderToolsImagePickerInvalidFileType);
        return false;
    }
    if (!IsImagePickerCompressibleImageFormat(extension)) {
        if (!ValidateImagePickerFileSize(file.fileSize)) {
            file.status = FileStatus.SKIP;
            ShowDesignBuilderImageControlError(Strings.STS.L_DesignBuilderToolsImagePickerFileTooLarge);
            return false;
        }
    }
    EnsureImagePickerElementsInited();
    g_imagePickerImageContainer.style.display = "none";
    g_imagePickerPlaceholderText.style.display = "none";
    g_imagePickerErrorText.style.display = "none";
    g_imagePickerProgressIcon.style.display = "inline-block";
    return true;
}
function GetImagePickerFileExtension(filename) {
    if (filename === null)
        return null;
    var idxLastPeriod = filename.lastIndexOf(".");

    if (idxLastPeriod == filename.length - 1)
        return null;
    return filename.substring(idxLastPeriod + 1);
}
function IsImagePickerCompressibleImageFormat(extension) {
    if (null === extension)
        return false;
    var extensionUpper = extension.toUpperCase();

    switch (extensionUpper) {
    case "BMP":
    case "JPEG":
    case "JPG":
    case "THEMEDBMP":
    case "THEMEDJPG":
        return true;
    }
    return false;
}
function ValidateImagePickerFileExtension(extension) {
    if (null === extension)
        return false;
    var extensionUpper = extension.toUpperCase();

    switch (extensionUpper) {
    case "BMP":
    case "GIF":
    case "JPEG":
    case "JPG":
    case "PNG":
    case "THEMEDBMP":
    case "THEMEDGIF":
    case "THEMEDJPG":
    case "THEMEDPNG":
        return true;
    }
    return false;
}
function ValidateImagePickerFileSize(filesize) {
    return filesize !== null && filesize <= 153600;
}
var g_desbld_imagePickerElementsInited;
var g_imagePickerProgressIcon, g_imagePickerImageContainer, g_imagePickerPlaceholderText, g_imagePickerErrorText, g_imagePickerImage;

function EnsureImagePickerElementsInited() {
ULSUrc:
    ;
    if (g_desbld_imagePickerElementsInited)
        return;
    g_imagePickerProgressIcon = document.getElementById("ms-designbuilder-imagecontrol-progress");
    g_imagePickerImageContainer = document.getElementById("ms-designbuilder-imagecontrol-imagecontainer");
    g_imagePickerImage = document.getElementById("ms-designbuilder-imagecontrol-image");
    g_imagePickerPlaceholderText = document.getElementById("ms-designbuilder-imagecontrol-placeholdertext");
    g_imagePickerErrorText = document.getElementById("ms-designbuilder-imagecontrol-errortext");
    g_desbld_imagePickerElementsInited = true;
}
var g_desbld_imageFolderServerRelativeUrl;

function OnDesignBuilderImagePickerPostUpload(fileList) {
    EnsureImagePickerElementsInited();
    g_imagePickerImageContainer.style.display = "inline-block";
    g_imagePickerProgressIcon.style.display = "none";
    if (!Boolean(g_desbld_imageFolderServerRelativeUrl)) {
        return;
    }
    var file = fileList[0];
    var fileUrl = g_desbld_imageFolderServerRelativeUrl + file.fileName;

    UpdateDesignBuilderImagePickerImage(fileUrl, true);
}
function OnDesignBuilderChangeImageDialogReturn(dialogResult, returnValue) {
ULSUrc:
    ;
    if (dialogResult == SP.UI.DialogResult.OK) {
        var url = returnValue["newFileUrl"];
        var extension = GetImagePickerFileExtension(url);

        if (!ValidateImagePickerFileExtension(extension)) {
            ShowDesignBuilderImageControlError(Strings.STS.L_DesignBuilderToolsImagePickerInvalidFileType);
            return;
        }
        if (!IsImagePickerCompressibleImageFormat(extension)) {
            var size = returnValue["newFileSize"];

            if (!ValidateImagePickerFileSize(size)) {
                ShowDesignBuilderImageControlError(Strings.STS.L_DesignBuilderToolsImagePickerFileTooLarge);
                return;
            }
        }
        EnsureImagePickerElementsInited();
        g_imagePickerImageContainer.style.display = "inline-block";
        UpdateDesignBuilderImagePickerImage(url, true);
    }
}
function DesignBuilderOpenChangeImageDialog() {
ULSUrc:
    ;
    if (g_desbld_site_assets_list_id === null) {
        return;
    }
    var options = {
        url: "upload.aspx?RootFolder=&AllowMultipleUploads=0&List=" + encodeURIComponent(g_desbld_site_assets_list_id),
        dialogReturnValueCallback: OnDesignBuilderChangeImageDialogReturn
    };

    SP.SOD.execute("sp.ui.dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
}
function DismissDesignBuilderImage() {
ULSUrc:
    ;
    if (confirm(Strings.STS.L_DesignBuilderToolsImagePickerRemoveConfirm)) {
        ExecuteOrDelayUntilScriptLoaded(function() {
        ULSUrc:
            ;
            var pm = SP.Ribbon.PageManager.get_instance();

            pm.executeRootCommand("ImagePickerFileDismissed", {}, null, null);
        }, "sp.ribbon.js");
    }
}
function ShowDesignBuilderImageControlError(message) {
    EnsureImagePickerElementsInited();
    var elmError = g_imagePickerErrorText;

    elmError.innerHTML = STSHtmlEncode(message);
    g_imagePickerImageContainer.style.display = "none";
    g_imagePickerPlaceholderText.style.display = "none";
    g_imagePickerProgressIcon.style.display = "none";
    elmError.style.display = "inline-block";
}
function InitializeDesignBuilderCUI(lcid, culture, decimalSeparator, textDirection) {
    try {
        var tempBo = new CUI.BuildOptions();
    }
    catch (e) {
        return;
    }
    var options = new CUI.BuildOptions();

    options.lazyMenuInit = true;
    options.trimmedIds = {};
    options.attachToDOM = false;
    options.validateServerRendering = false;
    options.fixedPositioningEnabled = false;
    options.dataExtensions = null;
    options.clientID = "ms-designbuilder-cuicontainer";
    try {
        var tempPm = SP.Ribbon.PageManager.get_instance();
    }
    catch (e) {
        return;
    }
    var elmCuiContainer = document.getElementById("ms-designbuilder-cuicontainer");

    if (!Boolean(elmCuiContainer))
        return;
    var properties = new CUI.RootProperties();

    properties.Culture = culture;
    properties.DecimalSeparator = decimalSeparator;
    properties.RootEventCommand = "designBuilderRootEventCommand";
    properties.ImageDownArrow = GetThemedImageUrl("spcommon.png");
    properties.ImageDownArrowTop = "-256";
    properties.ImageDownArrowLeft = "-104";
    properties.TextDirection = textDirection;
    var pageManager = SP.Ribbon.PageManager.get_instance();
    var builder = new CUI.Builder(options, elmCuiContainer, pageManager);

    g_designBuilderControlRoot = new CUI.StandaloneRoot("DesignBuilderTools", properties);
    g_designBuilderControlRoot.setBuilder(builder);
    pageManager.addRoot(g_designBuilderControlRoot);
}
function AddControlsToCUI() {
ULSUrc:
    ;
    var designData = g_designData;
    var root = g_designBuilderControlRoot;
    var upperSelectedDesignPackageFolder = null;
    var newThemesLocationFolderName = encodeURIComponent(designData.newThemesLocation.toUpperCase());
    var isSharepointOOBPackage = true;
    var overrideThemesLocation = designData.overrideThemesLocation.toLowerCase() == 'true';

    if (overrideThemesLocation) {
        var selectedDesignGuid = g_desbld_designGuid;
        var selectedDesignVersion = g_desbld_designVersion;

        isSharepointOOBPackage = g_desbld_designGuid == null || g_desbld_designGuid == 'undefined' || g_desbld_designVersion == null || g_desbld_designVersion == 'undefined';
        upperSelectedDesignPackageFolder = GetSelectedDesignPackageFolder(isSharepointOOBPackage, selectedDesignGuid, selectedDesignVersion);
        if (upperSelectedDesignPackageFolder != null && upperSelectedDesignPackageFolder != "")
            upperSelectedDesignPackageFolder = upperSelectedDesignPackageFolder.toUpperCase();
    }
    var elmCuiContainer = document.getElementById("ms-designbuilder-cuicontainer");
    var elmPaletteLabel = CreateLabelElement(Strings.STS.L_DesignBuilderToolsPaletteLabel, "ms-designbuilder-palette-Medium");

    elmCuiContainer.appendChild(elmPaletteLabel);
    var i = 0;
    var sbMenu = [];
    var fFoundSelected = false;
    var selectedItemId, key, upperKey;
    var selectedThemeUrl = g_desbld_themeUrl;

    for (key in designData.themes) {
        upperKey = key.toUpperCase();
        if (!overrideThemesLocation || isSharepointOOBPackage && upperKey.indexOf(newThemesLocationFolderName) == -1 || !isSharepointOOBPackage && (upperKey.indexOf(newThemesLocationFolderName) == -1 || upperKey.indexOf(upperSelectedDesignPackageFolder) != -1)) {
            var theme = designData.themes[key];

            if (!fFoundSelected && decodeURI(theme.ServerRelativeUrl.toUpperCase()) == decodeURI(selectedThemeUrl.toUpperCase())) {
                selectedItemId = key;
                fFoundSelected = true;
            }
            sbMenu.push(CreatePaletteGalleryButtonXml(key, theme, i++));
        }
    }
    var menu = sbMenu.join("");
    var sbXmlPaletteDropdown = ['<DropDown Id="ms-designbuilder-palette" Alt="', Strings.STS.L_DesignBuilderToolsPaletteAlt, '" Command="PalettePickerSelected" QueryCommand="PalettePickerQuery" CommandPreview="PalettePickerPreview" CommandRevert="PalettePickerPreviewRevert" Width="111px" SelectedItemDisplayMode="Menu" InitialItem="', selectedItemId, '"><Menu Id="DesignBuilderTools.Palette.Menu"><MenuSection Id="ms-designbuilder-palette-menusection" MaxHeight="269px" Scrollable="true"><Controls Id="DesignBuilderTools.Palette.Menu.MenuSection.Controls">', menu, '</Controls></MenuSection></Menu></DropDown>'];

    root.addControl("DesignBuilderTools.Palette", sbXmlPaletteDropdown.join(""));
    var elmPalette = root.getDOMElementForControlDisplayMode("DesignBuilderTools.Palette", "Medium");

    elmCuiContainer.appendChild(elmPalette);
    var elmLayoutLabel = CreateLabelElement(Strings.STS.L_DesignBuilderToolsLayoutLabel, "ms-designbuilder-layout-Medium");

    elmCuiContainer.appendChild(elmLayoutLabel);
    i = 0;
    sbMenu = [];
    fFoundSelected = false;
    selectedItemId = null;
    var selectedLayoutUrl = g_desbld_masterUrl;

    for (key in designData.preview) {
        upperKey = key.toUpperCase();
        if (!overrideThemesLocation || isSharepointOOBPackage && upperKey.indexOf(newThemesLocationFolderName) == -1 || !isSharepointOOBPackage && (upperKey.indexOf(newThemesLocationFolderName) == -1 || upperKey.indexOf(upperSelectedDesignPackageFolder) != -1)) {
            var layout = designData.preview[key];

            if (!fFoundSelected && decodeURI(key.toUpperCase()) == decodeURI(selectedLayoutUrl.toUpperCase())) {
                selectedItemId = key;
                fFoundSelected = true;
            }
            sbMenu.push(CreateLayoutButtonXml(key, layout, i++));
        }
    }
    menu = sbMenu.join("");
    var sbXmlLayoutDropdown = ['<DropDown Id="ms-designbuilder-layout" Alt="', Strings.STS.L_DesignBuilderToolsLayoutAlt, '" Command="LayoutPickerSelected" QueryCommand="LayoutPickerQuery" CommandPreview="LayoutPickerPreview" CommandRevert="LayoutPickerPreviewRevert" Width="103px" InitialItem="', selectedItemId, '"><Menu Id="DesignBuilderTools.Layout.Menu"><MenuSection Id="ms-designbuilder-layout-menusection"><Controls Id="DesignBuilderTools.Layout.Menu.MenuSection.Controls">', menu, '</Controls></MenuSection></Menu></DropDown>'];

    root.addControl("DesignBuilderTools.Layout", sbXmlLayoutDropdown.join(""));
    var elmLayout = root.getDOMElementForControlDisplayMode("DesignBuilderTools.Layout", "Medium");

    elmCuiContainer.appendChild(elmLayout);
    var elmFontLabel = CreateLabelElement(Strings.STS.L_DesignBuilderToolsFontLabel, "ms-designbuilder-fontscheme-Medium");

    elmCuiContainer.appendChild(elmFontLabel);
    i = 0;
    sbMenu = [];
    fFoundSelected = false;
    selectedItemId = null;
    var selectedFontSchemeUrl = null === g_desbld_fontSchemeUrl ? null : g_desbld_fontSchemeUrl;

    if (null === selectedFontSchemeUrl || "DEFAULT" === selectedFontSchemeUrl.toUpperCase()) {
        var preview = GetItemIgnoreCase(designData.preview, selectedLayoutUrl);

        if (Boolean(preview) && Boolean(preview.defaultFontScheme))
            selectedFontSchemeUrl = preview.defaultFontScheme;
    }
    var upperSelectedFontSchemeUrl = selectedFontSchemeUrl.toUpperCase();
    var duplicateKeyCount = designData.fontSchemeDuplicateKeyCount;
    var distinctFontSchemes = new Array(duplicateKeyCount);
    var duplicateKey;

    for (key in designData.fontSchemes) {
        duplicateKey = designData.fontSchemeDuplicateKeys[key];
        if (!Boolean(distinctFontSchemes[duplicateKey])) {
            distinctFontSchemes[duplicateKey] = key;
        }
        else {
            if (!fFoundSelected && decodeURI(key.toUpperCase()) == decodeURI(upperSelectedFontSchemeUrl)) {
                distinctFontSchemes[duplicateKey] = key;
            }
        }
    }
    fFoundSelected = false;
    for (var j = 0; j < distinctFontSchemes.length; j++) {
        key = distinctFontSchemes[j];
        upperKey = key.toUpperCase();
        if (!overrideThemesLocation || isSharepointOOBPackage && upperKey.indexOf(newThemesLocationFolderName) == -1 || !isSharepointOOBPackage && (upperKey.indexOf(newThemesLocationFolderName) == -1 || upperKey.indexOf(upperSelectedDesignPackageFolder) != -1)) {
            var fontScheme = designData.fontSchemes[key];

            if (!fFoundSelected && decodeURI(upperKey) == decodeURI(upperSelectedFontSchemeUrl)) {
                selectedItemId = key;
                fFoundSelected = true;
            }
            sbMenu.push(CreateFontSchemeButtonXml(key, fontScheme, i++));
        }
    }
    menu = sbMenu.join("");
    var sbXmlFontSchemeDropdown = ['<DropDown Id="ms-designbuilder-fontscheme" Alt="', Strings.STS.L_DesignBuilderToolsFontSchemeAlt, '" Command="FontSchemePickerSelected" QueryCommand="FontSchemePickerQuery" Width="132px" SelectedItemDisplayMode="Menu" InitialItem="', selectedItemId, '"><Menu Id="DesignBuilderTools.FontScheme.Menu"><MenuSection Id="ms-designbuilder-fontscheme-menusection"><Controls Id="DesignBuilderTools.FontScheme.Menu.MenuSection.Controls">', menu, '</Controls></MenuSection></Menu></DropDown>'];

    root.addControl("DesignBuilderTools.FontScheme", sbXmlFontSchemeDropdown.join(""));
    var elmFontScheme = root.getDOMElementForControlDisplayMode("DesignBuilderTools.FontScheme", "Medium");

    elmCuiContainer.appendChild(elmFontScheme);
    root.pollForStateAndUpdate();
}
function CreateLabelElement(text, forId) {
    var elm = document.createElement("label");

    elm.className = "ms-designbuilder-label ms-h3";
    elm.setAttribute("for", forId);
    elm.innerHTML = text;
    return elm;
}
function GetSelectedDesignPackageFolder(isSharepointOOBPackage, designGuid, designVersion) {
    if (!isSharepointOOBPackage)
        return encodeURIComponent(designGuid) + "/" + encodeURIComponent(designVersion);
    else
        return "";
}
function CreatePaletteGalleryButtonXml(key, theme, index) {
    var strIndex = index.toString();
    var previewColor1 = theme.Colors[theme.PreviewSlot1].DefaultColor;
    var previewColor2 = theme.Colors[theme.PreviewSlot2].DefaultColor;
    var previewColor3 = theme.Colors[theme.PreviewSlot3].DefaultColor;
    var htmlPalette = CreatePaletteHtml(key, previewColor1.HtmlColor, previewColor2.HtmlColor, previewColor3.HtmlColor, true);
    var alt = STSHtmlEncode(theme.AccessibleDescription);
    var sbXmlPalette = ['<GalleryButton Id="DesignBuilderTools.Palette.Palette', strIndex, '" Alt="', alt, '" InnerHTML="', htmlPalette, '" CommandType="OptionSelection" ElementDimensions="SizeCustom" MenuItemId="', key, '" CommandValueId="', key, '" Command="PalettePickerSelected" QueryCommand="QueryAlwaysTrue" CommandPreview="PalettePickerPreview" CommandRevert="PalettePickerPreviewRevert" />'];

    return sbXmlPalette.join("");
}
function CreatePaletteHtml(key, color1, color2, color3, encode) {
    var LT = encode ? "&lt;" : "<";
    var GT = encode ? "&gt;" : ">";
    var Q = encode ? "&quot;" : "\"";
    var sbHtmlPalette = [LT, 'span class=', Q, 'ms-designbuilder-palette', Q, ' rel=', Q, key, Q, GT, LT, 'span class=', Q, 'ms-designbuilder-palette-color ms-designbuilder-palette-color1', Q, ' style=', Q, 'background-color:', color1, Q, GT, ' ', LT, '/span', GT, LT, 'span class=', Q, 'ms-designbuilder-palette-color ms-designbuilder-palette-color2', Q, ' style=', Q, 'background-color:', color2, Q, GT, ' ', LT, '/span', GT, LT, 'span class=', Q, 'ms-designbuilder-palette-color ms-designbuilder-palette-color3', Q, ' style=', Q, 'background-color:', color3, Q, GT, ' ', LT, '/span', GT, LT, '/span', GT];

    return sbHtmlPalette.join("");
}
function CreateLayoutButtonXml(key, layout, index) {
    var strIndex = index.toString();
    var sbXmlLayout = ['<Button Id="DesignBuilderTools.Layout.Layout', strIndex, '" LabelText="', layout.title, '" CommandType="OptionSelection" MenuItemId="', key, '" CommandValueId="', key, '" Command="LayoutPickerSelected" QueryCommand="QueryAlwaysTrue" CommandPreview="LayoutPickerPreview" CommandRevert="LayoutPickerPreviewRevert" />'];

    return sbXmlLayout.join("");
}
function CreateFontSchemeButtonXml(key, fontScheme, index) {
    var strIndex = index.toString();
    var previewFont1 = fontScheme.FontSlots[fontScheme.PreviewSlot1].CurrentLanguageFont, previewFont2 = fontScheme.FontSlots[fontScheme.PreviewSlot2].CurrentLanguageFont;
    var previewFont1Html;
    var previewFont2Html;

    if (previewFont1.IsWebFont) {
        previewFont1Html = "&lt;img src=&quot;" + encodeURI(previewFont1.LargeImageUrl) + "&quot; alt=&quot;" + STSHtmlEncode(previewFont1.Name) + "&quot;/&gt;";
    }
    else {
        previewFont1Html = "&lt;span class=&quot;ms-designbuilder-fontScheme-font&quot; style=&quot;font-family:'" + STSHtmlEncode(previewFont1.Name) + "';&quot;&gt;" + STSHtmlEncode(previewFont1.Name) + "&lt;/span&gt;";
    }
    if (previewFont2.IsWebFont) {
        previewFont2Html = "&lt;img src=&quot;" + encodeURI(previewFont2.SmallImageUrl) + "&quot; alt=&quot;" + STSHtmlEncode(previewFont2.Name) + "&quot;/&gt;";
    }
    else {
        previewFont2Html = "&lt;span class=&quot;ms-designbuilder-fontScheme-font&quot; style=&quot;font-family:'" + STSHtmlEncode(previewFont2.Name) + "';&quot;&gt;" + STSHtmlEncode(previewFont2.Name) + "&lt;/span&gt;";
    }
    var sbHtmlFontScheme = ['&lt;ul class=&quot;ms-designbuilder-fontScheme ms-noList&quot; rel=&quot;', key, '&quot;&gt;&lt;li class=&quot;ms-designbuilder-fontScheme-fontLarge&quot;&gt;', previewFont1Html, '&lt;/li&gt;&lt;li class=&quot;ms-designbuilder-fontScheme-fontSmall&quot;&gt;', previewFont2Html, '&lt;/li&gt;&lt;/ul&gt;'];
    var htmlFontScheme = sbHtmlFontScheme.join("");
    var alt = STSHtmlEncode(previewFont1.Name + ", " + previewFont2.Name);
    var sbXmlFontScheme = ['<GalleryButton Id="DesignBuilderTools.FontScheme.FontScheme', strIndex, '" Alt="', alt, '" InnerHTML="', htmlFontScheme, '" CommandType="OptionSelection" ElementDimensions="SizeCustom" MenuItemId="', key, '" CommandValueId="', key, '" Command="FontSchemePickerSelected" QueryCommand="QueryAlwaysTrue" />'];

    return sbXmlFontScheme.join("");
}
var g_desbld_tryItOutClicked;

function DesignBuilderTryItOutOnClick() {
ULSUrc:
    ;
    if (g_desbld_tryItOutClicked)
        return false;
    g_desbld_tryItOutClicked = true;
    var tryItOutButton = document.querySelector(".ms-designbuilder-livePreviewButton");

    if (Boolean(tryItOutButton))
        tryItOutButton.style.cursor = "wait";
    return true;
}
function DesignPreviewOnLoad(iframeSrc) {
    DesignPreviewFixIframeDimensions();
    var ifm = document.getElementById("ifmPreviewFrame");

    if (!Boolean(ifm)) {
        return;
    }
    if (null != iframeSrc)
        ifm.src = iframeSrc;
    AddEvtHandler(window, "onresize", DesignPreviewFixIframeDimensions);
}
function DesignPreviewFixIframeDimensions() {
ULSUrc:
    ;
    var ifm = document.getElementById("ms-designpreview-iframe-container");

    if (!Boolean(ifm)) {
        return;
    }
    var vpHeight = GetViewportHeight();
    var ifmTop = AbsTop(ifm);
    var ifmHeight = vpHeight - ifmTop - 1 - 1 - 33;

    ifm.style.height = ifmHeight.toString() + "px";
}
$_global_designgallery();
