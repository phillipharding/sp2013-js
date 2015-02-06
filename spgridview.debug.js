function $_global_spgridview() {
    SPGridView_CallbackContext = null;
}
function ULS2cQ() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "spgridview.commentedjs";
    return o;
}
var SPGridView_CallbackContext;

function SPGridView_FilterPreMenuOpen(gridViewClientId, templateClientId, menuClientId, dataFieldName, e) {
    var gridView = document.getElementById(gridViewClientId);
    var callbackEventReference = gridView.getAttribute("callbackEventReference");
    var callbackArgumentPrefix = gridView.getAttribute("callbackArgumentPrefix");
    var postbackEventReference = gridView.getAttribute("postbackEventReference");
    var filterFieldName = gridView.getAttribute("filterFieldName");
    var filterFieldValue = gridView.getAttribute("filterFieldValue");
    var filterCurrentlyOn = false;

    if (filterFieldName != null && filterFieldName.length > 0 && filterFieldName == dataFieldName) {
        filterCurrentlyOn = true;
    }
    var menuTemplate = document.getElementById(templateClientId);
    var menuLink = document.getElementById(menuClientId);

    if (menuLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
        event.cancelBubble = true;
        return;
    }
    SPGridView_FixupFilterValuesFromMenuTemplate(menuTemplate, filterCurrentlyOn);
    var menuItem = CAMOpt(menuTemplate, Strings.STS.L_Loading_Text, "null");

    menuItem.setAttribute("isFilterItem", "true");
    menuItem.setAttribute("enabled", "false");
    SPGridView_CallbackContext = new Object();
    SPGridView_CallbackContext.gridViewClientId = gridViewClientId;
    SPGridView_CallbackContext.templateClientId = templateClientId;
    SPGridView_CallbackContext.menuClientId = menuClientId;
    SPGridView_CallbackContext.dataFieldName = dataFieldName;
    callbackEventReference = callbackEventReference.replace(/__CALLBACKARGUMENT__/g, dataFieldName);
    callbackEventReference = callbackEventReference.replace(/__CALLBACKCONTEXT__/g, gridViewClientId + ";" + templateClientId + ";" + menuClientId + ";" + dataFieldName);
    eval(callbackEventReference);
}
function SPGridView_FixupFilterValuesFromMenuTemplate(menuTemplate, filterCurrentlyOn) {
ULS2cQ:
    ;
    for (var menuChildIndex = 0; menuChildIndex < menuTemplate.childNodes.length; menuChildIndex++) {
        var menuChild = menuTemplate.childNodes[menuChildIndex];

        if (menuChild.nodeName != "#text") {
            if (menuChild.getAttribute("isFilterItem") == "true") {
                menuTemplate.removeChild(menuChild);
                --menuChildIndex;
            }
            else if (menuChild.getAttribute("clearFilterItem") == "true") {
                if (filterCurrentlyOn) {
                    menuChild.setAttribute("enabledOverride", "true");
                    menuChild.setAttribute("iconSrc", GetThemedImageUrl("DeleteFilterGlyph.png"));
                }
                else {
                    menuChild.setAttribute("enabledOverride", "false");
                    menuChild.setAttribute("iconSrc", GetThemedImageUrl("DisabledDeleteFilterGlyph.png"));
                }
            }
        }
    }
}
function SPGridView_FilterMenuSort(sortDirection, fieldName) {
ULS2cQ:
    ;
}
function SPGridView_FilterCallbackHandler(result, context) {
    var values = context.split(';');

    if (values.length != 4) {
        alert("ERROR: SPGridView_FilterCallbackHandler() - values.length != 4");
        return;
    }
    var gridViewClientId = values[0];
    var templateClientId = values[1];
    var menuClientId = values[2];
    var dataFieldName = values[3];
    var gridView = document.getElementById(gridViewClientId);

    if (gridView == null) {
        alert("ERROR: SPGridView_FilterCallbackHandler() - gridView == null");
        return;
    }
    var menuTemplate = document.getElementById(templateClientId);

    if (menuTemplate == null) {
        alert("ERROR: SPGridView_FilterCallbackHandler() - menuTemplate == null");
        return;
    }
    var menu = document.getElementById(menuClientId);

    if (menu == null) {
        alert("ERROR: SPGridView_FilterCallbackHandler() - menu == null");
        return;
    }
    var postbackEventReference = gridView.getAttribute("postbackEventReference");

    if (postbackEventReference == null || postbackEventReference.length <= 0) {
        alert("ERROR: SPGridView_FilterCallbackHandler() - postbackEventReference is null or empty");
        return;
    }
    var filterFieldName = gridView.getAttribute("filterFieldName");
    var filterFieldValue = gridView.getAttribute("filterFieldValue");
    var filterCurrentlyOn = false;

    if (filterFieldName != null && filterFieldName.length > 0 && filterFieldName == dataFieldName) {
        filterCurrentlyOn = true;
    }
    SPGridView_FixupFilterValuesFromMenuTemplate(menuTemplate, filterCurrentlyOn);
    values = result.split(';');
    for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
        var value = unescape(values[valueIndex]);
        var script = postbackEventReference.replace(/__POSTBACKARGUMENT__/g, dataFieldName + ";" + (((value.replace(/\\/g, "\\\\")).replace(/\'/g, "\\'")).replace(/%/g, "%25")).replace(/;/g, "%3b"));
        var newMenuItem = CAMOpt(menuTemplate, value, script);

        newMenuItem.setAttribute("isFilterItem", "true");
        if (value == filterFieldValue) {
            newMenuItem.setAttribute("checked", "true");
        }
    }
    HideMenu(menuTemplate);
    MMU_Open(menuTemplate, menu);
}
function SPGridView_FilterCallbackErrorHandler(result, context) {
ULS2cQ:
    ;
    alert("ERROR: SPGridView_FilterCallbackErrorHandler() was called - result = " + result + ", context = " + context);
}
function ToggleSPGridViewGroup(link, fECB) {
    var hdrCell = fECB ? link.parentNode.parentNode.parentNode.parentNode.parentNode : link.parentNode;

    if (hdrCell == null) {
        return;
    }
    var hdrRow = hdrCell.parentNode;

    if (hdrRow == null) {
        return;
    }
    var img = link.childNodes[0];

    if (img == null) {
        return;
    }
    var isExp = false;
    var value = hdrRow.getAttribute("isexp");

    if (value == null || value != null && value.toLowerCase() == "true") {
        isExp = true;
    }
    isExp = !isExp;
    hdrRow.setAttribute("isexp", isExp ? "true" : "false");
    img.src = isExp ? GetThemedImageUrl("commentcollapse12.png") : GetThemedImageUrl("commentexpand12.png");
    var dataRow = hdrRow.nextSibling != null && hdrRow.nextSibling.nodeName == "#text" ? hdrRow.nextSibling.nextSibling : hdrRow.nextSibling;

    while (dataRow != null) {
        value = dataRow.getAttribute("ishdr");
        if (value != null && value.toLowerCase() == "true") {
            break;
        }
        dataRow.style.display = isExp ? "" : "none";
        dataRow = dataRow.nextSibling != null && dataRow.nextSibling.nodeName == "#text" ? dataRow.nextSibling.nextSibling : dataRow.nextSibling;
    }
}
$_global_spgridview();
