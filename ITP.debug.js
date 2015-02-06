function $_global_itp() {
    g_MsoImageToolpartColorMatrix = null;
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("itp.js");
    }
}
function ULSBES() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "itp.commentedjs";
    return o;
}
var g_MsoImageToolpartColorMatrix;

function MsoImageToolpartBackgroundColorBuilder(url) {
ULSBES:
    ;
    var sColor;

    if (url == null) {
        if (typeof MSOWebPartPageFormName != "undefined") {
            document.forms[MSOWebPartPageFormName].MsoImageToolpartBackgroundColorValue.caption = Strings.STS.L_WebPartBackgroundColor_TXT;
            document.forms[MSOWebPartPageFormName].MsoImageToolpartBackgroundColorValue.transparentTooltip = Strings.STS.L_TransparentTooltip_TXT;
        }
        if (typeof window.external != "undefined" && typeof window.external.InvokeBuilder != "undefined")
            sColor = window.external.InvokeBuilder("color", "", "MsoImageToolpartBackgroundColorValue");
    }
    else {
        var dialogArgs = new Object();

        dialogArgs.fnMapColorValueToName = MsoImageToolPartMapColorValueToName;
        dialogArgs.colorMatrixColumns = 14;
        dialogArgs.colorMatrix = MsoImageToolPartGetColorTable();
        dialogArgs.selectedColor = document.forms[MSOWebPartPageFormName].MsoImageToolpartBackgroundColorValue.value;
        dialogArgs.caption = Strings.STS.L_WebPartBackgroundColor_TXT;
        dialogArgs.transparentTooltip = Strings.STS.L_TransparentTooltip_TXT;
        dialogArgs.transparentColorName = Strings.STS.L_TransparentLiteral_TXT;
        sColor = window.showModalDialog(url, dialogArgs, "dialogWidth:420px;dialogHeight:380px;help:no;status:no");
    }
    if (typeof sColor != "undefined") {
        try {
            (document.getElementById('MsoImageToolpartbackgroundColorDisplay')).style.backgroundColor = sColor;
            (document.getElementById('MsoImageToolpartBackgroundColorValue')).value = sColor;
            MsoImageToolpartSetColorNameText();
        }
        catch (e) { }
    }
}
function MsoImageToolpartSetColorNameText() {
ULSBES:
    ;
    var selectedColor = null;

    if (null != document.forms[MSOWebPartPageFormName] && null != document.forms[MSOWebPartPageFormName].MsoImageToolpartBackgroundColorValue) {
        selectedColor = document.forms[MSOWebPartPageFormName].MsoImageToolpartBackgroundColorValue.value;
    }
    if (null != selectedColor) {
        var scolorName = MsoImageToolPartMapColorValueToName(selectedColor);

        if (null == scolorName) {
            scolorName = selectedColor;
        }
        var sColorNameHtml = "<label style='display:none'>";

        sColorNameHtml += Strings.STS.L_WebPartBackgroundColor_TXT;
        sColorNameHtml += "&nbsp;";
        if (scolorName == Strings.STS.L_TransparentLiteral_TXT) {
            sColorNameHtml += "</label>";
            sColorNameHtml += Strings.STS.L_TransparentLiteral_TXT;
        }
        else {
            sColorNameHtml += scolorName;
            sColorNameHtml += "</label>";
        }
        (document.getElementById('MsoImageToolpartbackgroundColorDisplay')).innerHTML = sColorNameHtml;
    }
}
function MsoImageToolPartMapColorValueToName(strColorValue) {
    var strColorName = null;
    var iColor;

    if (null == strColorValue || strColorValue.length < 1) {
        return Strings.STS.L_TransparentLiteral_TXT;
    }
    var strColorValueLowerCase = strColorValue.toLowerCase();

    if (strColorValueLowerCase == "transparent") {
        return Strings.STS.L_TransparentLiteral_TXT;
    }
    var colorTable = MsoImageToolPartGetColorTable();

    for (iColor = 0; iColor < colorTable.length; iColor++) {
        if (strColorValueLowerCase == colorTable[iColor][1].toLowerCase()) {
            strColorName = colorTable[iColor][0];
            break;
        }
    }
    return strColorName;
}
function MsoImageToolPartGetColorTable() {
ULSBES:
    ;
    if (null == g_MsoImageToolpartColorMatrix) {
        g_MsoImageToolpartColorMatrix = [[Strings.STS.L_Black_TEXT, "#000000"], [Strings.STS.L_DimGray_TEXT, "#696969"], [Strings.STS.L_Gray_TEXT, "#808080"], [Strings.STS.L_DarkGray_TEXT, "#A9A9A9"], [Strings.STS.L_Silver_TEXT, "#C0C0C0"], [Strings.STS.L_LightGrey_TEXT, "#D3D3D3"], [Strings.STS.L_Gainsboro_TEXT, "#DCDCDC"], [Strings.STS.L_White_TEXT, "#FFFFFF"], [Strings.STS.L_Maroon_TEXT, "#800000"], [Strings.STS.L_DarkRedLong_TEXT, "#8B0000"], [Strings.STS.L_Brown_TEXT, "#A52A2A"], [Strings.STS.L_FireBrick_TEXT, "#B22222"], [Strings.STS.L_LightRed_TEXT, "#CD5C5C"], [Strings.STS.L_Crimson_TEXT, "#DC143C"], [Strings.STS.L_Red_TEXT, "#FF0000"], [Strings.STS.L_OrangeRed_TEXT, "#FF4500"], [Strings.STS.L_Tomato_TEXT, "#FF6347"], [Strings.STS.L_Coral_TEXT, "#FF7F50"], [Strings.STS.L_DarkSalmon_TEXT, "#E9967A"], [Strings.STS.L_LightCoral_TEXT, "#F08080"], [Strings.STS.L_Salmon_TEXT, "#FA8072"], [Strings.STS.L_LightSalmon_TEXT, "#FFA07A"], [Strings.STS.L_SandyBrown_TEXT, "#F4A460"], [Strings.STS.L_SaddleBrown_TEXT, "#8B4513"], [Strings.STS.L_Sienna_TEXT, "#A0522D"], [Strings.STS.L_DarkGoldenRod_TEXT, "#B8860B"], [Strings.STS.L_Peru_TEXT, "#CD853F"], [Strings.STS.L_GoldenRod_TEXT, "#DAA520"], [Strings.STS.L_BurlyWood_TEXT, "#DEB887"], [Strings.STS.L_Tan_TEXT, "#D2B48C"], [Strings.STS.L_Chocolate_TEXT, "#D2691E"], [Strings.STS.L_Darkorange_TEXT, "#FF8C00"], [Strings.STS.L_Orange_TEXT, "#FFA500"], [Strings.STS.L_Gold_TEXT, "#FFD700"], [Strings.STS.L_Yellow_TEXT, "#FFFF00"], [Strings.STS.L_Khaki_TEXT, "#F0E68C"], [Strings.STS.L_PaleGoldenRod_TEXT, "#EEE8AA"], [Strings.STS.L_Moccasin_TEXT, "#FFE4B5"], [Strings.STS.L_NavajoWhite_TEXT, "#FFDEAD"], [Strings.STS.L_Wheat_TEXT, "#F5DEB3"], [Strings.STS.L_PeachPuff_TEXT, "#FFDAB9"], [Strings.STS.L_Bisque_TEXT, "#FFE4C4"], [Strings.STS.L_BlanchedAlmond_TEXT, "#FFEBCD"], [Strings.STS.L_AntiqueWhite_TEXT, "#FAEBD7"], [Strings.STS.L_PapayaWhip_TEXT, "#FFEFD5"], [Strings.STS.L_Beige_TEXT, "#F5F5DC"], [Strings.STS.L_Cornsilk_TEXT, "#FFF8DC"], [Strings.STS.L_SeaShell_TEXT, "#FFF5EE"], [Strings.STS.L_LemonChiffon_TEXT, "#FFFACD"], [Strings.STS.L_LightGoldenRodYellow_TEXT, "#FAFAD2"], [Strings.STS.L_LightYellowLong_TEXT, "#FFFFE0"], [Strings.STS.L_Linen_TEXT, "#FAF0E6"], [Strings.STS.L_OldLace_TEXT, "#FDF5E6"], [Strings.STS.L_FloralWhite_TEXT, "#FFFAF0"], [Strings.STS.L_Ivory_TEXT, "#FFFFF0"], [Strings.STS.L_Snow_TEXT, "#FFFAFA"], [Strings.STS.L_GreenYellow_TEXT, "#ADFF2F"], [Strings.STS.L_Chartreuse_TEXT, "#7FFF00"], [Strings.STS.L_LawnGreen_TEXT, "#7CFC00"], [Strings.STS.L_Lime_TEXT, "#00FF00"], [Strings.STS.L_LimeGreen_TEXT, "#32CD32"], [Strings.STS.L_YellowGreen_TEXT, "#9ACD32"], [Strings.STS.L_DarkSeaGreen_TEXT, "#8FBC8B"], [Strings.STS.L_DarkKhaki_TEXT, "#BDB76B"], [Strings.STS.L_Olive_TEXT, "#808000"], [Strings.STS.L_OliveDrab_TEXT, "#6B8E23"], [Strings.STS.L_DarkOliveGreen_TEXT, "#556B2F"], [Strings.STS.L_DarkGreenLong_TEXT, "#006400"], [Strings.STS.L_Green_TEXT, "#008000"], [Strings.STS.L_ForestGreen_TEXT, "#228B22"], [Strings.STS.L_SeaGreenLong_TEXT, "#2E8B57"], [Strings.STS.L_MediumSeaGreen_TEXT, "#3CB371"], [Strings.STS.L_LightGreenLong_TEXT, "#90EE90"], [Strings.STS.L_PaleGreen_TEXT, "#98FB98"], [Strings.STS.L_SpringGreen_TEXT, "#00FF7F"], [Strings.STS.L_MediumSpringGreen_TEXT, "#00FA9A"], [Strings.STS.L_Aquamarine_TEXT, "#7FFFD4"], [Strings.STS.L_Turquoise_TEXT, "#40E0D0"], [Strings.STS.L_MediumTurquoise_TEXT, "#48D1CC"], [Strings.STS.L_DarkTurquoise_TEXT, "#00CED1"], [Strings.STS.L_MediumAquaMarine_TEXT, "#66CDAA"], [Strings.STS.L_LightSeaGreen_TEXT, "#20B2AA"], [Strings.STS.L_CadetBlue_TEXT, "#5F9EA0"], [Strings.STS.L_DarkCyan_TEXT, "#008B8B"], [Strings.STS.L_Teal_TEXT, "#008080"], [Strings.STS.L_DarkSlateGray_TEXT, "#2F4F4F"], [Strings.STS.L_SlateGray_TEXT, "#708090"], [Strings.STS.L_LightSlateGray_TEXT, "#778899"], [Strings.STS.L_SteelBlue_TEXT, "#4682B4"], [Strings.STS.L_DarkBlueLong_TEXT, "#00008B"], [Strings.STS.L_MidnightBlue_TEXT, "#191970"], [Strings.STS.L_Navy_TEXT, "#000080"], [Strings.STS.L_MediumBlue_TEXT, "#0000CD"], [Strings.STS.L_Blue_TEXT, "#0000FF"], [Strings.STS.L_RoyalBlue_TEXT, "#4169E1"], [Strings.STS.L_SlateBlue_TEXT, "#6A5ACD"], [Strings.STS.L_MediumSlateBlue_TEXT, "#7B68EE"], [Strings.STS.L_CornflowerBlue_TEXT, "#6495ED"], [Strings.STS.L_DodgerBlue_TEXT, "#1E90FF"], [Strings.STS.L_DeepSkyBlue_TEXT, "#00BFFF"], [Strings.STS.L_Aqua_TEXT, "#00FFFF"], [Strings.STS.L_Cyan_TEXT, "#00FFFF"], [Strings.STS.L_LightSteelBlue_TEXT, "#B0C4DE"], [Strings.STS.L_LightSkyBlue_TEXT, "#87CEFA"], [Strings.STS.L_SkyBlueLong_TEXT, "#87CEEB"], [Strings.STS.L_LightBlueLong_TEXT, "#ADD8E6"], [Strings.STS.L_PowderBlue_TEXT, "#B0E0E6"], [Strings.STS.L_PaleTurquoise_TEXT, "#AFEEEE"], [Strings.STS.L_Lavender_TEXT, "#E6E6FA"], [Strings.STS.L_AliceBlue_TEXT, "#F0F8FF"], [Strings.STS.L_GhostWhite_TEXT, "#F8F8FF"], [Strings.STS.L_WhiteSmoke_TEXT, "#F5F5F5"], [Strings.STS.L_Azure_TEXT, "#F0FFFF"], [Strings.STS.L_LightCyan_TEXT, "#E0FFFF"], [Strings.STS.L_MintCream_TEXT, "#F5FFFA"], [Strings.STS.L_HoneyDew_TEXT, "#F0FFF0"], [Strings.STS.L_DarkSlateBlue_TEXT, "#483D8B"], [Strings.STS.L_Indigo_TEXT, "#4B0082"], [Strings.STS.L_DarkMagenta_TEXT, "#8B008B"], [Strings.STS.L_Purple_TEXT, "#800080"], [Strings.STS.L_DarkViolet_TEXT, "#9400D3"], [Strings.STS.L_DarkOrchid_TEXT, "#9932CC"], [Strings.STS.L_BlueViolet_TEXT, "#8A2BE2"], [Strings.STS.L_MediumPurple_TEXT, "#9370DB"], [Strings.STS.L_MediumOrchid_TEXT, "#BA55D3"], [Strings.STS.L_Orchid_TEXT, "#DA70D6"], [Strings.STS.L_Violet_TEXT, "#EE82EE"], [Strings.STS.L_Plum_TEXT, "#DDA0DD"], [Strings.STS.L_Thistle_TEXT, "#D8BFD8"], [Strings.STS.L_RosyBrown_TEXT, "#BC8F8F"], [Strings.STS.L_MediumVioletRed_TEXT, "#C71585"], [Strings.STS.L_PaleVioletRed_TEXT, "#DB7093"], [Strings.STS.L_HotPink_TEXT, "#FF69B4"], [Strings.STS.L_DeepPink_TEXT, "#FF1493"], [Strings.STS.L_Fuchsia_TEXT, "#FF00FF"], [Strings.STS.L_Magenta_TEXT, "#FF00FF"], [Strings.STS.L_LightPink_TEXT, "#FFB6C1"], [Strings.STS.L_Pink_TEXT, "#FFC0CB"], [Strings.STS.L_MistyRose_TEXT, "#FFE4E1"], [Strings.STS.L_LavenderBlush_TEXT, "#FFF0F5"]];
    }
    return g_MsoImageToolpartColorMatrix;
}
function MsoFrameworkToolpartPreview(url, errorMessage, validTypes) {
    url = url.replace(/(^\s*)|(\s*$)/g, "");
    if (Boolean(url.match(/^\s*(https?:\/\/)?\s*$/i)))
        return;
    if ((MsoFrameworkToolpartCheckPath(url, validTypes) & validTypes) != 0) {
        window.open(url);
    }
    else {
        alert(errorMessage);
    }
}
function MsoFrameworkToolpartCheckPath(url, validTypes) {
ULSBES:
    ;
    var i;
    var testMask = 0;

    if (Boolean(validTypes & 1) || Boolean(validTypes & 2)) {
        testMask += 3;
    }
    if (Boolean(validTypes & 4) || Boolean(validTypes & 8)) {
        testMask += 4;
    }
    var patterns = [/^(file:\/\/(\\\\|\/\/)?|\\\\)([^\\\/]+[\\\/]?)*$/i, /^(file:\/\/)?[a-zA-Z]:([\\\/][^\\\/]+)*[\\\/]?$/, /^(https?:\/\/|[\\\/])?(?:[^\\\/]+[\\\/])*[^\\\/]*$/i];
    var lastDelimeter;
    var parsedUrl = null;

    for (i = 0; i < patterns.length; i++) {
        if (Boolean(testMask & 1 << i)) {
            if (i < 2) {
                parsedUrl = url.match(patterns[i]);
            }
            else {
                parsedUrl = MsoFrameworkToolpartCheckURLHelp(url, patterns[i]);
            }
            if (parsedUrl != null) {
                if (i == 0 || i == 1) {
                    lastDelimeter = url.lastIndexOf('\\');
                    if (lastDelimeter == -1)
                        lastDelimeter = url.lastIndexOf('/');
                    if (lastDelimeter == url.length - 1) {
                        return 2;
                    }
                    else {
                        return 3;
                    }
                }
                else {
                    return 12;
                }
            }
        }
    }
    return 0;
}
function MsoFrameworkToolpartHelp(url) {
ULSBES:
    ;
    window.open(url);
}
function MsoFrameworkToolpartCheckURLHelp(url, regex) {
ULSBES:
    ;
    var base = "";
    var i = url.indexOf("?");

    if (i != -1) {
        base = url.substr(0, i);
    }
    else {
        base = url;
    }
    return base.match(regex);
}
$_global_itp();
