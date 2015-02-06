function $_global_entityeditor() {
    g_menuCounter = 0;
    g_oSelRw = null;
    g_oSelSpan = null;
    g_iEntityEditorLineHeight = 16;
    g_EntityEditorHiddenEntityKeyId = "HiddenEntityKey";
    g_EntityEditorHiddenEntityDisplayTextId = "HiddenEntityDisplayText";
    g_EntityEditorShowEntityDisplayTextInTextBox = "ShowEntityDisplayTextInTextBox";
    g_EntityEditorDownLevelId = "downlevelTextBox";
    g_EntityEditorUpLevelId = "upLevelDiv";
    g_EntityEditorHiddenId = "hiddenSpanData";
    g_EntityEditorCheckNamesId = "checkNames";
    g_EntityEditorOuterTableId = "OuterTable";
    g_EntityEditorErrorLabelId = "errorLabel";
    g_EntityEditorResultTableId = "resultTable";
    g_EntityEditorResultTableAttrEditorId = "EditorControlClientId";
    g_OKButtonID = "ctl00_PlaceHolderDialogButtonSection_btnOk";
    g_EntityEditorInnerCellId = "containerCell";
    g_EntityEditorAsterixCellId = "asterixCell";
    g_MAX_LEN = 256;
    g_copyText = "";
    g_maxheight = [];
    matches = [];
    nav4 = Boolean(window.Event) ? true : false;
    selected = new Array(0);
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("entityeditor.js");
    }
}
function ULSMoI() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "entityeditor.commentedjs";
    return o;
}
var EntityEditor_UseContentEditableControl;
var L_PleaseWait_TEXT;
var EntityEditor_ItemTooLong;
var g_menuCounter;
var g_oSelRw;
var g_oSelSpan;
var g_iEntityEditorLineHeight;
var g_EntityEditorHiddenEntityKeyId;
var g_EntityEditorHiddenEntityDisplayTextId;
var g_EntityEditorShowEntityDisplayTextInTextBox;
var g_EntityEditorDownLevelId;
var g_EntityEditorUpLevelId;
var g_EntityEditorHiddenId;
var g_EntityEditorCheckNamesId;
var g_EntityEditorOuterTableId;
var g_EntityEditorErrorLabelId;
var g_EntityEditorResultTableId;
var g_EntityEditorResultTableAttrEditorId;
var g_OKButtonID;
var g_EntityEditorInnerCellId;
var g_EntityEditorAsterixCellId;
var g_MAX_LEN;
var g_copyText;

function onKeyDownRw(parentid, maxHeight, allowTypeIn, e) {
    if (null == e)
        e = window.event;
    var iKC = e.keyCode;
    var pickerControl = GetPickerControl(parentid);

    if (pickerControl == null)
        return;
    if (e.shiftKey && iKC == 13 || e.altKey && iKC == 40) {
        onClickRw(true, false, e, parentid);
        canEvt(e);
        return;
    }
    if (allowTypeIn == false) {
        if (iKC != 8 && iKC != 46 && iKC != 37 && iKC != 39 && iKC != 9) {
            canEvt(e);
        }
        else {
            if (pickerControl != null && autoPostBackEnabled(pickerControl))
                schedulePostBack();
        }
        PickerAdjustHeight(parentid, maxHeight);
    }
    else {
        if (PreferContentEditableDiv(parentid)) {
            if ((iKC == 46 || iKC == 8) && !EntityEditor_UseContentEditableControl) {
                if (g_oSelRw != null) {
                    pickerControl.removeChild(g_oSelRw);
                    g_oSelRw = null;
                    if (browseris.safari) {
                        SetCaretPosition(parentid);
                        canEvt(e);
                    }
                    else {
                        pickerControl.focus();
                    }
                }
            }
        }
        PickerAdjustHeight(parentid, maxHeight);
        if (e.ctrlKey && iKC == 75 || !e.ctrlKey && !e.altKey && !e.shiftKey && iKC == 13) {
            canEvt(e);
            var checkNamesId = getSubControlID(parentid, g_EntityEditorCheckNamesId);
            var buttonLocal = document.getElementById(checkNamesId);

            if (null != buttonLocal) {
                if (null != buttonLocal.click) {
                    buttonLocal.click();
                }
                else {
                    FFClick(buttonLocal);
                }
            }
            if (PreferContentEditableDiv(parentid)) {
                if (!EntityEditor_UseContentEditableControl) {
                    SetCaretPosition(parentid);
                }
            }
        }
    }
}
function onKeyUpRw(editorClientID) {
ULSMoI:
    ;
    copyUplevelToHidden(editorClientID);
    ShowCustomDecoration(editorClientID, false, false);
}
function onMouseDownRw(e) {
    if (null == e)
        e = window.event;
    if (e.button == 2) {
        if (EntityEditor_UseContentEditableControl)
            g_oSelRw = document.selection.createRange();
    }
}
function onContextMenuSpnRw(e, ctxParam) {
    if (EntityEditor_UseContentEditableControl) {
        var oSO = g_oSelRw;
        var oS = document.selection.createRange();
        var ret;

        if (oSO.text == '') {
            ret = onClickRw(false, false, e, ctxParam);
        }
        else {
            if (oSO.inRange(oS))
                oSO.select();
            else
                onClickRw(false, false, e, ctxParam);
        }
    }
    return false;
}
function ShouldCallCustomCallBack(editorClientID, e) {
    if (null == e)
        e = window.event;
    var isDirty = false;

    if (IsBlankRuleSetForPickerControl(editorClientID)) {
        var pickerControl = GetPickerControl(editorClientID);

        if (pickerControl == null)
            return false;
        isDirty = IsDirty(editorClientID);
        var toEle;

        if (PreferContentEditableDiv(editorClientID)) {
            if (EntityEditor_UseContentEditableControl) {
                toEle = e.toElement;
                return ShouldCallbackHelper(pickerControl, toEle, editorClientID);
            }
            else {
                toEle = Boolean(e.explicitOriginalTarget) ? e.explicitOriginalTarget : null;
                return ShouldCallbackHelper(pickerControl, toEle, editorClientID);
            }
        }
        else {
            if (EntityEditor_UseContentEditableControl) {
                toEle = e.toElement;
                return ShouldCallbackHelper(pickerControl, toEle, editorClientID);
            }
            else {
                return isDirty;
            }
        }
    }
    else {
        isDirty = IsDirty(editorClientID);
        return isDirty;
    }
}
function canEvt(e) {
    if (e == null)
        e = window.event;
    stopDefaultAction(e);
    stopBubble(e);
}
function copyUplevelToHidden(editorClientID) {
ULSMoI:
    ;
    if (document.getElementById(editorClientID) == null)
        return;
    updateControlValue(editorClientID);
    var uplevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorUpLevelId));
    var hidden = document.getElementById(getSubControlID(editorClientID, g_EntityEditorHiddenId));

    if (PreferContentEditableDiv(editorClientID)) {
        if (EntityEditor_UseContentEditableControl) {
            RemoveUnwantedNodesForIE(uplevel);
        }
        hidden.value = GetInnerHTMLOrTextOfUpLevelDiv(uplevel, true, false, editorClientID);
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            RemoveUnwantedNodesForIE(uplevel);
            hidden.value = GetInnerHTMLOrTextOfUpLevelDiv(uplevel, true, false, editorClientID);
        }
        else {
            var downlevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorDownLevelId));

            hidden.value = downlevel.value;
        }
    }
}
function getUplevel(editorClientID) {
ULSMoI:
    ;
    var uplevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorUpLevelId));

    if (PreferContentEditableDiv(editorClientID)) {
        if (EntityEditor_UseContentEditableControl) {
            RemoveUnwantedSpansForIE(uplevel);
        }
        return GetInnerHTMLOrTextOfUpLevelDiv(uplevel, true, false, editorClientID);
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            RemoveUnwantedSpansForIE(uplevel);
            return GetInnerHTMLOrTextOfUpLevelDiv(uplevel, true, false, editorClientID);
        }
        else {
            var downlevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorDownLevelId));

            return downlevel.value;
        }
    }
}
function EntityEditorHasData(editorClientID) {
ULSMoI:
    ;
    if (PreferContentEditableDiv(editorClientID) || EntityEditor_UseContentEditableControl) {
        var uplevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorUpLevelId));
        var children = uplevel.childNodes;

        if (children.length > 0)
            return true;
        return false;
    }
    else {
        var downlevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorDownLevelId));

        if (downlevel.value != null && downlevel.value.length > 0)
            return true;
        else
            return false;
    }
}
function onClickRw(showMenu, divClicked, e, ctxParam) {
    if (null == e)
        e = window.event;
    if (PreferContentEditableDiv(ctxParam)) {
        if (EntityEditor_UseContentEditableControl) {
            onClickRwIE(showMenu, divClicked, e, ctxParam);
        }
        else {
            onClickRwW3C(showMenu, divClicked, e, ctxParam);
        }
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            onClickRwIE(showMenu, divClicked, e, ctxParam);
        }
    }
}
function EEShowMore(id, key) {
ULSMoI:
    ;
    if (id == null)
        id = '';
    if (key == null)
        key = '';
    var fnName = '__Dialog__' + id;

    if (typeof window[fnName] == "function")
        window[fnName](key);
}
function EEReplace(clientID, key, id) {
ULSMoI:
    ;
    if (PreferContentEditableDiv(clientID)) {
        if (EntityEditor_UseContentEditableControl) {
            HandleEEReplaceForIE(clientID, key, id);
        }
        else {
            var otherMatch = matches[clientID][key].childNodes[id];
            var spandata = ConvertEntityToSpan(clientID, otherMatch);
            var spannew = document.createElement("span");

            spannew.innerHTML = spandata;
            var div = g_oSelSpan.parentNode;

            div.replaceChild(spannew.firstChild, g_oSelSpan);
            g_oSelSpan = null;
            g_oSelRw = null;
            InValidateControl(clientID, div);
            SetCaretPosition(clientID);
        }
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            HandleEEReplaceForIE(clientID, key, id);
        }
    }
    PickerAdjustHeight(clientID, g_maxheight[clientID]);
}
function EERemove(clientID) {
ULSMoI:
    ;
    var div;

    if (EntityEditor_UseContentEditableControl) {
        if (!browseris.ie8standard) {
            g_oSelRw.select();
            document.selection.clear();
            InValidateControl(clientID, GetPickerControl(clientID));
        }
        else {
            div = g_oSelSpan.parentNode;
            div.removeChild(g_oSelSpan);
            g_oSelSpan = null;
            g_oSelRw = null;
            InValidateControl(clientID, div);
        }
    }
    else {
        div = g_oSelRw.parentNode;
        div.removeChild(g_oSelSpan);
        g_oSelSpan = null;
        g_oSelRw = null;
        InValidateControl(clientID, div);
        SetCaretPosition(clientID);
    }
}
var g_maxheight;

function EntityEditorSetWaitCursor(ctxParam) {
ULSMoI:
    ;
    if (document.getElementById(ctxParam) == null)
        return;
    var outerTable = document.getElementById(getSubControlID(ctxParam, g_EntityEditorOuterTableId));

    if (outerTable != null) {
        outerTable.style.cursor = "wait";
    }
}
function EntityEditorClearWaitCursor(ctxParam) {
ULSMoI:
    ;
    if (document.getElementById(ctxParam) == null)
        return;
    var outerTable = document.getElementById(getSubControlID(ctxParam, g_EntityEditorOuterTableId));

    if (outerTable != null) {
        outerTable.style.cursor = "";
    }
}
function EntityEditorHandleCheckNameResult(result, ctxParam) {
ULSMoI:
    ;
    EntityEditorClearWaitCursor(ctxParam);
    EntityEditorCallback(result, ctxParam);
}
function EntityEditorHandleCheckNameError(exception, ctxParam) {
ULSMoI:
    ;
    EntityEditorClearWaitCursor(ctxParam);
    var errorControl = document.getElementById(getSubControlID(ctxParam, g_EntityEditorErrorLabelId));

    if (null != errorControl) {
        errorControl.innerHTML = STSHtmlEncode(exception);
    }
}
function GetEntities(result) {
ULSMoI:
    ;
    var xmlDoc;

    if (null != document.implementation && null != document.implementation.createDocument) {
        xmlDoc = (new window.DOMParser()).parseFromString(result, "text/xml");
    }
    else {
        try {
            xmlDoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
            xmlDoc.async = false;
            if (typeof xmlDoc.loadXML != "undefined")
                xmlDoc.loadXML(result);
        }
        catch (e) {
            return null;
        }
    }
    var entities = undefined;

    if (typeof xmlDoc.documentElement != "undefined")
        entities = xmlDoc.documentElement;
    return entities;
}
function EntityEditorCallback(result, ctxParam, preventAutoPostBack) {
    if (document.getElementById(ctxParam) == null)
        return;
    var resolveErr = false;
    var editor = document.getElementById(ctxParam);

    editor.setAttribute("aria-live", "polite");
    editor.setAttribute("aria-relevant", "all");
    var errorControl = document.getElementById(getSubControlID(ctxParam, 'errorLabel'));
    var entities = GetEntities(result);

    if (entities == null)
        return;
    if ((entities.getAttribute("Error")).length > 0) {
        resolveErr = true;
    }
    var separator = entities.getAttribute("Separator");

    if (separator == null) {
        separator = String.fromCharCode(0);
    }
    var encode = entities.getAttribute("DoEncodeErrorMessage");
    var append = entities.getAttribute("Append");
    var maxHeight = Number(entities.getAttribute("MaxHeight"));

    g_maxheight[ctxParam] = maxHeight;
    var spanData = "";
    var downlevelData = "";

    if (append == "False") {
        if (encode == "False")
            errorControl.innerHTML = entities.getAttribute("Error");
        else
            errorControl.innerHTML = STSHtmlEncode(entities.getAttribute("Error"));
    }
    for (var x = 0; x < entities.childNodes.length; x++) {
        var entity = entities.childNodes[x];

        spanData += ConvertEntityToSpan(ctxParam, entity);
        if (x == 0 && editor.getAttribute(g_EntityEditorShowEntityDisplayTextInTextBox) == "1") {
            downlevelData += entity.getAttribute("DisplayText");
            (document.getElementById(getSubControlID(ctxParam, g_EntityEditorHiddenEntityKeyId))).value = entity.getAttribute("Key");
            (document.getElementById(getSubControlID(ctxParam, g_EntityEditorHiddenEntityDisplayTextId))).value = entity.getAttribute("DisplayText");
        }
        else {
            if (!PreferContentEditableDiv(ctxParam))
                downlevelData += entity.getAttribute("Key");
        }
        var separatorCon = null;

        if (browseris.ie8standard)
            separatorCon = spanData != "";
        else
            separatorCon = spanData != "" && x + 1 != entities.childNodes.length;
        if (PreferContentEditableDiv(ctxParam) && !EntityEditor_UseContentEditableControl) {
            separatorCon = spanData != "";
        }
        if (separatorCon) {
            spanData += separator + " ";
            downlevelData += separator + " ";
        }
    }
    var uplevel = document.getElementById(getSubControlID(ctxParam, g_EntityEditorUpLevelId));
    var hiddenSpan = document.getElementById(getSubControlID(ctxParam, g_EntityEditorHiddenId));
    var downlevel = document.getElementById(getSubControlID(ctxParam, g_EntityEditorDownLevelId));
    var pickerControl = GetPickerControl(ctxParam);
    var shouldPostBack = autoPostBackEnabled(pickerControl) && (preventAutoPostBack == null || !preventAutoPostBack);
    var shouldNotifyChange = GetPickerControlValue(ctxParam, false, false) != spanData;

    if (append == "True" && GetPickerControlValue(ctxParam, false, false) != '') {
        if (browseris.ie8standard) {
            var spannew = document.createElement("span");

            spannew.innerHTML = spanData;
            var i;
            var childNodes = spannew.childNodes.length;

            for (i = 0; i < childNodes; i++) {
                uplevel.appendChild(spannew.firstChild);
            }
            hiddenSpan.value += spanData;
            if (!PreferContentEditableDiv(ctxParam)) {
                downlevel.value += downlevelData;
            }
        }
        else {
            if (PreferContentEditableDiv(ctxParam)) {
                if (!EntityEditor_UseContentEditableControl) {
                    uplevel.innerHTML += " " + spanData;
                    hiddenSpan.value += " " + spanData;
                    downlevel.value += " " + spanData;
                }
                else {
                    uplevel.innerHTML += separator + " " + spanData;
                    hiddenSpan.value += separator + " " + spanData;
                }
            }
            else {
                uplevel.innerHTML += separator + " " + spanData;
                hiddenSpan.value += separator + " " + spanData;
                downlevel.value += separator + " " + downlevelData;
            }
        }
    }
    else {
        shouldPostBack = shouldPostBack && GetPickerControlValue(ctxParam, false, false) != spanData && spanData.indexOf('ms-entity-resolved') != -1;
        if (browseris.ie8standard && EntityEditor_UseContentEditableControl) {
            spanData = "&#160;" + spanData;
        }
        if (PreferContentEditableDiv(ctxParam)) {
            if (!EntityEditor_UseContentEditableControl) {
                spanData = "&#160;" + spanData;
            }
            uplevel.innerHTML = spanData;
            hiddenSpan.value = spanData;
            downlevel.value = spanData;
        }
        else {
            uplevel.innerHTML = spanData;
            hiddenSpan.value = spanData;
            downlevel.value = downlevelData;
        }
    }
    updateControlValue(ctxParam);
    PickerAdjustHeight(ctxParam, maxHeight);
    if (shouldPostBack)
        schedulePostBack();
    var cbScript = editor.getAttribute("EEAfterCallbackClientScript");

    if (cbScript != null && cbScript != "") {
        if (preventAutoPostBack == undefined || preventAutoPostBack == false) {
            var timeoutScript = cbScript + "('" + STSScriptEncode(ctxParam) + "', '" + STSScriptEncode(result) + "')";

            setTimeout(timeoutScript, 500);
        }
    }
    ShowCustomDecoration(ctxParam, true, resolveErr);
    if (editor.getAttribute('allowTypeIn') != null && editor.getAttribute('allowTypeIn') == 'true' && PreferContentEditableDiv(ctxParam) && !EntityEditor_UseContentEditableControl) {
        SetCaretPosition(ctxParam);
    }
}
function RunCustomScriptSetForPickerControl(ctxParam) {
ULSMoI:
    ;
    if (IsCustomScriptSetForPickerControl(ctxParam)) {
        var pickerControl = GetPickerControl(ctxParam);

        if (pickerControl == null)
            return;
        eval(pickerControl.getAttribute('onvaluesetfrompicker'));
    }
}
function IsCustomScriptSetForPickerControl(ctxParam) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(ctxParam);

    if (pickerControl == null)
        return false;
    if (pickerControl.getAttribute('onvaluesetfrompicker') != null && pickerControl.getAttribute('onvaluesetfrompicker') != "")
        return true;
    return false;
}
function IsBlankRuleSetForPickerControl(ctxParam) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(ctxParam);

    if (pickerControl == null)
        return false;
    if (pickerControl.getAttribute('isBlankRuleSet') != null && pickerControl.getAttribute('isBlankRuleSet') == "true")
        return true;
    return false;
}
function ShowCustomDecoration(editorClientID, CheckResolveErr, resolveErr) {
ULSMoI:
    ;
    var cell = null;

    if (IsBlankRuleSetForPickerControl(editorClientID)) {
        if (CheckResolveErr) {
            cell = document.getElementById(getSubControlID(editorClientID, g_EntityEditorInnerCellId));
            if (resolveErr) {
                if (cell != null) {
                    cell.style.border = "#FF0000 dashed 2px";
                }
            }
            else {
                if (cell != null) {
                    cell.style.border = "none";
                }
            }
        }
        cell = null;
        cell = document.getElementById(getSubControlID(editorClientID, g_EntityEditorAsterixCellId));
        if (cell != null) {
            if (IsControlEmpty(editorClientID)) {
                cell.style.visibility = "visible";
            }
            else {
                cell.style.visibility = "hidden";
            }
        }
    }
}
function IsControlEmpty(editorClientID) {
ULSMoI:
    ;
    var str = "";
    var pickerControl = GetPickerControl(editorClientID);

    if (pickerControl == null)
        return true;
    if (PreferContentEditableDiv(editorClientID) || EntityEditor_UseContentEditableControl) {
        if (pickerControl.innerText != null) {
            str = pickerControl.innerText;
        }
        else {
            str = pickerControl.textContent;
        }
    }
    else {
        str = pickerControl.value;
    }
    var textLen = 0;

    if (str != null && str != "")
        textLen = (str.replace(/[\s ]/g, '')).length;
    if (null != textLen && 0 != textLen)
        return false;
    else {
        if (IsIE7()) {
            pickerControl.innerHTML = "";
        }
        return true;
    }
}
function updateControlValue(editorClientID) {
ULSMoI:
    ;
    if (document.getElementById(editorClientID) == null)
        return;
    var editor = document.getElementById(editorClientID);

    if (IsControlEmpty(editorClientID)) {
        editor.setAttribute('value', '');
    }
    else {
        editor.setAttribute('value', 'true');
    }
    CheckOk(editorClientID);
}
function CheckOk(editorClientID) {
ULSMoI:
    ;
    var editor = document.getElementById(editorClientID);

    if (editor == null)
        return;
    var allowEmpty = false;

    if (editor.getAttribute('allowEmpty') == '1')
        allowEmpty = true;
    var btnOK = document.getElementById(g_OKButtonID);

    if (btnOK != null) {
        if (!IsControlEmpty(editorClientID)) {
            btnOK.disabled = false;
        }
        else {
            if (!allowEmpty)
                btnOK.disabled = true;
        }
    }
}
var matches;

function ConvertEntityToSpan(ctxParam, entity) {
    if (matches[ctxParam] == null)
        matches[ctxParam] = [];
    var key = entity.getAttribute("Key");
    var displayText = entity.getAttribute("DisplayText");
    var isResolved = entity.getAttribute("IsResolved");
    var description = entity.getAttribute("Description");
    var style = 'ms-entity-unresolved';

    if (isResolved == 'True')
        style = 'ms-entity-resolved';
    var spandata = "<span id='span" + STSHtmlEncode(key) + "' isContentType = 'true' tabindex='-1' class='" + style + "' ";

    if (browseris.ie8standard)
        spandata += "onmouseover='this.contentEditable=false;' onmouseout='this.contentEditable=true;' contentEditable='true' ";
    else
        spandata += "contentEditable='false' ";
    spandata += "title='" + STSHtmlEncode(description) + "'>";
    spandata += "<div style='display:none;' id='divEntityData' ";
    spandata += "key='" + STSHtmlEncode(key) + "' displaytext='" + STSHtmlEncode(displayText) + "' isresolved='" + STSHtmlEncode(isResolved) + "' ";
    spandata += "description='" + STSHtmlEncode(description) + "'>";
    var multipleMatches = EntityEditor_SelectSingleNode(entity, "MultipleMatches");

    matches[ctxParam][key] = multipleMatches;
    var extraData = EntityEditor_SelectSingleNode(entity, "ExtraData");

    if (null != extraData) {
        var data;

        if (Boolean(extraData.firstChild))
            data = extraData.firstChild.xml;
        if (!Boolean(data))
            data = Boolean(extraData.innerXml) ? extraData.innerXml : extraData.innerHTML;
        if (!Boolean(data) && Boolean(document.implementation) && Boolean(document.implementation.createDocument)) {
            var serializer = new XMLSerializer();

            data = serializer.serializeToString(extraData.firstChild);
            data = data.replace('<ArrayOfDictionaryEntry>', '<ArrayOfDictionaryEntry xmlns:xsd="http://www.w3.org/2001/XMLSchema">');
        }
        if (!Boolean(data))
            data = '';
        spandata += "<div data='" + STSHtmlEncode(data) + "'></div>";
    }
    else {
        spandata += "<div data=''></div>";
    }
    spandata += "</div>";
    if (PreferContentEditableDiv(ctxParam)) {
        if (browseris.safari) {
            spandata += "<span id='content' tabindex='-1' contenteditable ='false'  onmousedown='onMouseDownRw(event);' onContextMenu='onContextMenuSpnRw(event, \"" + ctxParam + "\");' >";
        }
        else {
            spandata += "<span id='content' tabindex='-1' contenteditable onmousedown='onMouseDownRw(event);' onContextMenu='onContextMenuSpnRw(event, \"" + ctxParam + "\");' >";
        }
    }
    else {
        spandata += "<span id='content' tabindex='-1' contenteditable onmousedown='onMouseDownRw(event);' onContextMenu='onContextMenuSpnRw(event, \"" + ctxParam + "\");' >";
    }
    if (browseris.ie8standard)
        spandata += "\r";
    if (displayText != '')
        spandata += STSHtmlEncode(displayText);
    else
        spandata += STSHtmlEncode(key);
    if (browseris.ie8standard)
        spandata += "\r</span></span>\r";
    else
        spandata += "</span></span>";
    return spandata;
}
function PickerAdjustHeight(editorClientID, maxHeight) {
ULSMoI:
    ;
    var editor = document.getElementById(editorClientID);

    if (editor == null)
        return;
    var uplevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorUpLevelId));
    var rows = 3;

    if (PreferContentEditableDiv(editorClientID)) {
        rows = uplevel.getAttribute("Rows");
    }
    else {
        var downlevel = document.getElementById(getSubControlID(editorClientID, g_EntityEditorDownLevelId));

        rows = downlevel.rows;
    }
    PickerAdjustHeight2(uplevel, rows, maxHeight);
}
function PickerAdjustHeight2(editorControl, rows, maxHeight) {
ULSMoI:
    ;
    var iMaxHeightSize = maxHeight;

    if (editorControl != null) {
        var contentheight = editorControl.scrollHeight;
        var clientHeight = editorControl.clientHeight;
        var bodyHeight = editorControl.offsetHeight;

        if (contentheight == 0) {
            contentheight = 13;
            clientHeight = 14;
            bodyHeight = 18;
        }
        var MaxHeightPixelSize = iMaxHeightSize * g_iEntityEditorLineHeight;

        contentheight = contentheight < rows * g_iEntityEditorLineHeight ? rows * g_iEntityEditorLineHeight : contentheight;
        if (clientHeight != contentheight && (contentheight <= MaxHeightPixelSize || clientHeight < MaxHeightPixelSize)) {
            var hgt = bodyHeight + (contentheight > MaxHeightPixelSize ? MaxHeightPixelSize : contentheight) - clientHeight;

            editorControl.style.height = String(hgt) + "px";
        }
        else {
            if (clientHeight > MaxHeightPixelSize)
                editorControl.style.height = String(MaxHeightPixelSize) + "px";
        }
    }
}
function docopy(ctxParam, evt) {
ULSMoI:
    ;
    if (PreferContentEditableDiv(ctxParam)) {
        if (EntityEditor_UseContentEditableControl) {
            HandleCopyForIE();
        }
        else {
            if (Boolean(window.getSelection)) {
                var selRange = window.getSelection();

                g_copyText = selRange.toString();
            }
        }
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            HandleCopyForIE();
        }
    }
    return false;
}
function dopaste(ctxParam, evt) {
ULSMoI:
    ;
    if (PreferContentEditableDiv(ctxParam)) {
        if (EntityEditor_UseContentEditableControl) {
            HandlePasteForIE();
            return false;
        }
        else {
            if (g_copyText != "") {
                var pastedContent = document.createTextNode(g_copyText);

                if (Boolean(window.getSelection)) {
                    var selRange = window.getSelection();

                    if (selRange != null && selRange.rangeCount > 0) {
                        var txtRange = selRange.getRangeAt(0);

                        if (txtRange != null) {
                            txtRange.insertNode(pastedContent);
                        }
                    }
                    canEvt(evt);
                }
            }
        }
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            HandlePasteForIE();
            return false;
        }
    }
    return false;
}
function getSubControlID(parentid, subcontrolid) {
ULSMoI:
    ;
    return parentid + "_" + subcontrolid;
}
var nav4;
var selected;
var lastSelected;

function PickerDialogSetClearState() {
ULSMoI:
    ;
    selected = new Array(0);
    lastSelected = null;
    if (typeof PickerDialogUpdateAddSelectionButton == "function")
        PickerDialogUpdateAddSelectionButton();
}
function singleselectevent(e) {
    if (!Boolean(e))
        e = window.event;
    var el = null;

    if (e.srcElement == null)
        el = Boolean(e.target.parentNode) ? e.target.parentNode : e.currentTarget.parentNode;
    else {
        el = e.srcElement;
        if (el.tagName == "TD")
            el = el.parentNode;
    }
    while (el.tagName != "TR")
        el = el.parentNode;
    addSelection(el, true, true);
    lastSelected = el;
    PickerDialogUpdateAddSelectionButton();
    PickerResultsSingleSelectOnClick(el);
    return false;
}
function singleselecteventPP(e) {
    if (!Boolean(e))
        e = window.event;
    var el = null;

    if (e.srcElement == null)
        el = Boolean(e.target.parentNode) ? e.target.parentNode : e.currentTarget.parentNode;
    else {
        el = e.srcElement;
        if (el.tagName == "TD")
            el = el.parentNode;
    }
    while (el.tagName != "TR")
        el = el.parentNode;
    addSelection(el, true, true);
    lastSelected = el;
    if (typeof addSelected_Click != "undefined")
        addSelected_Click();
    return false;
}
function multiselectevent(e) {
    if (!Boolean(e))
        e = window.event;
    var shift = false;
    var ctrl = false;

    ctrl = e['ctrlKey'];
    shift = e['shiftKey'];
    var el = null;
    var i;

    if (e.srcElement == null)
        el = Boolean(e.target.parentNode) ? e.target.parentNode : e.currentTarget.parentNode;
    else {
        el = e.srcElement;
        if (el.tagName == "TD")
            el = el.parentNode;
    }
    while (el.tagName != "TR")
        el = el.parentNode;
    if (shift == false) {
        if (ctrl == false) {
            setSelectedColor(false);
            selected = new Array(0);
        }
        lastSelected = el;
        var found = -1;

        for (i = 0; i < selected.length; i++) {
            if (selected[i] == el) {
                found = i;
                i = selected.length;
            }
        }
        if (found == -1)
            selected = selected.concat([el]);
        else {
            setSelectedRowColor(selected[found], false);
            selected.splice(found, 1);
        }
    }
    else {
        setSelectedColor(false);
        selected = new Array(0);
        var table;

        if (nav4)
            table = el.parentNode;
        else
            table = el.parentNode;
        var elIndex;
        var lastIndex;
        var childElements = table.rows;

        if (lastSelected == null)
            lastSelected = childElements[1];
        for (i = 1; i < childElements.length; i++) {
            if (childElements[i] == el)
                elIndex = i;
            if (childElements[i] == lastSelected)
                lastIndex = i;
            if (elIndex != null || lastIndex != null)
                selected = selected.concat(new Array(childElements[i]));
            if (elIndex != null && lastIndex != null)
                i = childElements.length;
        }
    }
    setSelectedColor(true);
    PickerDialogUpdateAddSelectionButton();
    return false;
}
function setSelectedRowColor(row, isSelected) {
    for (var chd = 0; chd < row.childNodes.length; chd++) {
        var className = row.childNodes[chd].className;

        if (isSelected) {
            className = "ms-pb-selected";
        }
        else {
            className = "ms-pb";
        }
        row.childNodes[chd].className = className;
    }
}
function setSelectedColor(isSelected) {
ULSMoI:
    ;
    for (var i = 0; i < selected.length; i++) {
        setSelectedRowColor(selected[i], isSelected);
    }
}
function IsSearchResultRow(row) {
    if (row == null || row.className == "ms-pickersearchsummarytr" || row.className == "ms-pickeremptyresulttexttr" || row.className == "ms-pickerresultheadertr") {
        return false;
    }
    return true;
}
function tableKeyDown(table, multiselect, e) {
    if (table.rows.length <= 1)
        return false;
    if (!Boolean(e))
        e = window.event;
    if (e.ctrlKey && e.keyCode == 65 && multiselect == true) {
        for (var x = 1; x < table.rows.length; x++) {
            if (IsSearchResultRow(table.rows[x]))
                addSelection(table.rows[x], false, false);
        }
        return false;
    }
    if (e.keyCode == 13) {
        addSelected_Click();
        if (multiselect == false && selected.length > 0 && typeof self.doClickOK != "undefined" && self.doClickOK != null) {
            window.setTimeout('doClickOK();', 100);
        }
    }
    if (e.keyCode == 40 || e.keyCode == 38) {
        var row = table.rows[1];

        if (e.keyCode == 40) {
            if (lastSelected != null && IsSearchResultRow(lastSelected.nextSibling)) {
                row = lastSelected.nextSibling;
            }
        }
        if (e.keyCode == 38) {
            if (lastSelected != null && IsSearchResultRow(lastSelected.previousSibling)) {
                row = lastSelected.previousSibling;
            }
            if (row == table.rows[0])
                row = table.rows[1];
        }
        if (IsSearchResultRow(row)) {
            if (multiselect == true && e.shiftKey)
                addSelection(row, false, true);
            else
                addSelection(row, true, true);
            if (row != null)
                lastSelected = row;
            if (multiselect == false)
                addSelected_Click();
            return false;
        }
    }
    PickerDialogUpdateAddSelectionButton();
    return false;
}
function autoPostBackEnabled(elt) {
    var autoPostBack = elt == null ? null : elt.attributes.getNamedItem("AutoPostBack");

    return autoPostBack != null && autoPostBack.value == '1';
}
function schedulePostBack() {
ULSMoI:
    ;
    window.setTimeout("__doPostBack('','')", 0);
}
function saveOldEntities(editorClientID) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(editorClientID);

    if (pickerControl == null)
        return;
    if (pickerControl != null && autoPostBackEnabled(pickerControl))
        pickerControl.oldEntities = getEntityKeysFromElement(pickerControl);
}
function StoreOldValue(editorClientID) {
ULSMoI:
    ;
    var editor = document.getElementById(editorClientID);

    if (editor != null) {
        editor.setAttribute('editorOldValue', GetPickerControlValue(editorClientID, true, true));
    }
}
function postbackIfEntitiesChanged(editorClientID) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(editorClientID);

    if (pickerControl == null)
        return false;
    var oldKeys = undefined;

    if (typeof pickerControl.oldEntities != "undefined")
        oldKeys = pickerControl.oldEntities;
    pickerControl.oldEntities = null;
    var newKeys = getEntityKeysFromElement(pickerControl);
    var shouldPostBack = false;

    if (autoPostBackEnabled(pickerControl)) {
        if (oldKeys == null && newKeys != null || oldKeys != null && newKeys == null || oldKeys.length != newKeys.length) {
            shouldPostBack = true;
        }
        else {
            for (var i = 0; !shouldPostBack && i < oldKeys.length; i++) {
                if (oldKeys[i] != newKeys[i]) {
                    shouldPostBack = true;
                }
            }
        }
    }
    if (shouldPostBack)
        schedulePostBack();
    return false;
}
function getEntityKeysFromElement(pickerControl) {
ULSMoI:
    ;
    if (pickerControl == null)
        return [];
    var keys = [];
    var i = 0;

    for (var x = 0; pickerControl != null && x < pickerControl.childNodes.length; x++) {
        var child = pickerControl.childNodes[x];

        if (child.attributes != null) {
            var c = child.attributes.getNamedItem('class');

            if (c != null && c.value == 'ms-entity-resolved') {
                var oDivEntityData = child.children('divEntityData');

                if (oDivEntityData != null && oDivEntityData.getAttribute('key') != null) {
                    keys[i] = oDivEntityData.getAttribute('key');
                    i++;
                }
            }
        }
    }
    return keys.sort();
}
function EntityEditor_SelectSingleNode(xmlNode, tagName) {
    if (Boolean(document.implementation) && Boolean(document.implementation.createDocument)) {
        var elems = xmlNode.getElementsByTagName(tagName);

        if (elems.length > 0)
            return elems[0];
        return null;
    }
    else {
        return xmlNode.selectSingleNode(tagName);
    }
}
function PickerDialogCallbackContext() {
ULSMoI:
    ;
    this.queryTextBoxElementId = null;
    this.resultTableId = null;
    this.errorElementId = null;
    this.htmlMessageElementId = null;
    this.queryButtonElementId = null;
}
function PickerDialogSetFocusDelay(elemId, delayTime) {
ULSMoI:
    ;
    setTimeout("if (document.getElementById('" + elemId + "') != null) { try {document.getElementById('" + elemId + "').focus(); } catch(e) {} }", delayTime);
}
function PeoplePickerDialogHandleQueryResult(results, ctxParam) {
    var result = ParseMultiColumnValue(results);
    var itemCount = parseInt(result[0]);
    var error = document.getElementById(ctxParam.errorElementId);

    error.innerHTML = STSHtmlEncode(result[1]);
    Microsoft.SharePoint.ApplicationPages.GenericPicker.renderSearchTree(result[3]);
    var queryButton = document.getElementById(ctxParam.queryButtonElementId);

    if (queryButton != null)
        SetControlDisabledStatus(queryButton, false);
    var queryTextBox = document.getElementById(ctxParam.queryTextBoxElementId);

    if (queryTextBox != null)
        SetControlDisabledStatus(queryTextBox, false);
    if (itemCount > 0) {
        PickerDialogSetFocusDelay(ctxParam.resultTableId + "_row0_Link", 200);
    }
    else {
        PickerDialogSetFocusDelay(ctxParam.queryTextBoxElementId, 200);
    }
}
function PickerDialogHandleQueryResult(results, ctxParam) {
    var result = ParseMultiColumnValue(results);
    var itemCount = parseInt(result[0]);
    var error = document.getElementById(ctxParam.errorElementId);

    error.innerHTML = STSHtmlEncode(result[1]);
    var htmlMessage = document.getElementById(ctxParam.htmlMessageElementId);

    htmlMessage.innerHTML = result[2];
    var queryButton = document.getElementById(ctxParam.queryButtonElementId);

    if (queryButton != null)
        SetControlDisabledStatus(queryButton, false);
    var queryTextBox = document.getElementById(ctxParam.queryTextBoxElementId);

    if (queryTextBox != null)
        SetControlDisabledStatus(queryTextBox, false);
    var resultControl = document.getElementById(ctxParam.resultTableId);
    var parentElement;

    if (nav4)
        parentElement = resultControl.parentNode;
    else
        parentElement = resultControl.parentNode;
    parentElement.innerHTML = result[3];
    if (itemCount > 0) {
        PickerDialogSetFocusDelay(ctxParam.resultTableId + "_row0_Link", 200);
    }
    else {
        PickerDialogSetFocusDelay(ctxParam.queryTextBoxElementId, 200);
    }
}
function PickerDialogHandleQueryError(exception, ctxParam) {
    var error = document.getElementById(ctxParam.errorElementId);

    error.innerHTML = STSHtmlEncode(exception);
    var htmlMessage = document.getElementById(ctxParam.htmlMessageElementId);

    htmlMessage.innerHTML = "";
    var queryButton = document.getElementById(ctxParam.queryButtonElementId);

    if (queryButton != null)
        SetControlDisabledStatus(queryButton, false);
    var queryTextBox = document.getElementById(ctxParam.queryTextBoxElementId);

    if (queryTextBox != null)
        SetControlDisabledStatus(queryTextBox, false);
    var resultControl = document.getElementById(ctxParam.resultTableId);
    var parentElement;

    if (nav4)
        parentElement = resultControl.parentNode;
    else
        parentElement = resultControl.parentNode;
    parentElement.innerHTML = "<table id='" + ctxParam.resultTableId + "' width='100%' height='100%'>  " + " <tr>                                                              " + "    <td>                                                           " + "    </td>                                                          " + " </tr>                                                             " + "</table>";
    queryTextBox = document.getElementById(ctxParam.queryTextBoxElementId);
    try {
        queryTextBox.focus();
    }
    catch (e) { }
}
function PickerDialogShowWait(ctxParam) {
    var obj = document.getElementById(ctxParam.errorElementId);

    if (obj != null)
        obj.innerHTML = "";
    obj = document.getElementById(ctxParam.htmlMessageElementId);
    if (obj != null)
        obj.innerHTML = "";
    obj = document.getElementById(ctxParam.queryButtonElementId);
    if (obj != null)
        SetControlDisabledStatus(obj, true);
    var queryTextBox = document.getElementById(ctxParam.queryTextBoxElementId);

    if (queryTextBox != null)
        SetControlDisabledStatus(queryTextBox, true);
    var resultControl = document.getElementById(ctxParam.resultTableId);

    if (resultControl != null) {
        var parentElement;

        if (nav4)
            parentElement = resultControl.parentNode;
        else
            parentElement = resultControl.parentNode;
        parentElement.innerHTML = "<table id='resultTable' class='ms-pickerwait'>" + " <tr>                                                              " + "    <td width='100%' height='100%' align='center' valign='middle'> " + "         <table width='100%'>                                      " + "            <tr>                                                   " + "                <td align='center' valign='middle' class='ms-descriptiontext'>                " + "                    <img alt='" + L_PleaseWait_TEXT + "'src='" + "/_layouts/15/images/hig_progcircle_loading24.gif?rev=23" + "' >" + L_PleaseWait_TEXT + "                </td>                                              " + "            </tr>                                                  " + "        </table>                                                   " + "    </td>                                                          " + " </tr>                                                             " + "</table>";
    }
}
function PickerResultsMultiSelectOnDblClick(row) {
    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    var resultTable = document.getElementById(g_EntityEditorResultTableId);
    var xml = row.getAttribute('entityXml');
    var ctxLocal = resultTable.getAttribute(g_EntityEditorResultTableAttrEditorId);

    EntityEditorCallback(xml, ctxLocal);
}
function PickerResultsSingleSelectOnClick(row) {
ULSMoI:
    ;
    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    var resultTable = document.getElementById(g_EntityEditorResultTableId);
    var xml = row.getAttribute('entityXml');
    var ctxLocal = resultTable.getAttribute(g_EntityEditorResultTableAttrEditorId);

    EntityEditorCallback(xml, ctxLocal);
}
function PickerResultsSingleSelectOnDblClick(row) {
    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    var resultTable = document.getElementById(g_EntityEditorResultTableId);
    var xml = row.getAttribute('entityXml');
    var ctxLocal = resultTable.getAttribute(g_EntityEditorResultTableAttrEditorId);

    EntityEditorCallback(xml, ctxLocal);
    if (self.doClickOK != null && typeof self.doClickOK != "undefined")
        self.doClickOK();
}
function PickerResultsMultiSelectOnNameClick(link, evt) {
ULSMoI:
    ;
    var row = link;

    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    PickerResultsMultiSelectOnDblClick(row);
    return true;
}
function PickerResultsSingleSelectOnNameClick(link, evt) {
ULSMoI:
    ;
    var row = link;

    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    PickerResultsSingleSelectOnDblClick(row);
    return true;
}
function PickerResultsNameOnFocus(link, evt, isMultiSelectMode) {
    var bEnabled = false;
    var row = link;

    if (!Boolean(evt))
        evt = window.event;
    while (row.tagName != "TR") {
        row = row.parentNode;
    }
    if (isMultiSelectMode == true) {
        if (evt.shiftKey) {
            addSelection(row, false, false);
        }
        else {
            addSelection(row, true, false);
        }
    }
    else {
        addSelection(row, true, false);
    }
    lastSelected = row;
    var ctxLocal = GetCallingContext();

    UpdateOkBtnState(ctxLocal, isMultiSelectMode);
    if (isMultiSelectMode == false) {
        PickerResultsSingleSelectOnClick(row);
    }
}
function PickerResultsNameOnKeyDown(link, evt, isMultiSelectMode) {
    var resultTable = document.getElementById(g_EntityEditorResultTableId);
    var currSelection;

    if (resultTable == null)
        return;
    if (!Boolean(evt))
        evt = window.event;
    if (evt.ctrlKey && evt.keyCode == 65 && isMultiSelectMode == true) {
        selected = new Array(0);
        lastSelected = null;
        for (var x = 1; x < resultTable.rows.length; x++) {
            if (IsSearchResultRow(resultTable.rows[x]))
                addSelection(resultTable.rows[x], false, false);
        }
    }
    if (evt.keyCode == 40) {
        currSelection = GetCurrentResultTableRow(link);
        var nextSelection = GetNextResultTableRow(link);

        if (evt.shiftKey && isMultiSelectMode == true) {
            if (IsSearchResultRow(nextSelection)) {
                addSelection(nextSelection, false, true);
            }
        }
        else {
            if (IsSearchResultRow(nextSelection)) {
                addSelection(nextSelection, true, true);
            }
        }
    }
    if (evt.keyCode == 38) {
        currSelection = GetCurrentResultTableRow(link);
        var prevSelection = GetPrevResultTableRow(link);

        if (evt.shiftKey && isMultiSelectMode == true) {
            if (IsSearchResultRow(prevSelection)) {
                addSelection(prevSelection, false, true);
            }
        }
        else {
            if (IsSearchResultRow(prevSelection)) {
                addSelection(prevSelection, true, true);
            }
        }
    }
    if (evt.keyCode == 13) {
        currSelection = GetCurrentResultTableRow(link);
        if (isMultiSelectMode == true) {
            addSelected_Click();
        }
        else {
            if (currSelection != null) {
                PickerResultsSingleSelectOnDblClick(currSelection);
            }
        }
    }
}
function addSelection(row, clear, reposition) {
ULSMoI:
    ;
    if (row == null)
        return;
    if (clear == true) {
        setSelectedColor(false);
        selected = new Array(0);
    }
    if (LookupRowInSelection(row) == null)
        selected = selected.concat([row]);
    setSelectedColor(true);
    if (Boolean(reposition) ? Boolean(row.focus) : Boolean(reposition))
        row.focus();
    PickerDialogUpdateAddSelectionButton();
}
function PickerResultsNameOnKeyPress(link, evt, isMultiSelectMode) {
}
function GetCallingContext() {
ULSMoI:
    ;
    var ctxLocal = null;
    var resultTable = document.getElementById(g_EntityEditorResultTableId);

    if (resultTable != null)
        ctxLocal = resultTable.getAttribute(g_EntityEditorResultTableAttrEditorId);
    return ctxLocal;
}
function UpdateOkBtnState(ctxParam, isMultiSelectMode) {
ULSMoI:
    ;
    var btnOK = document.getElementById(g_OKButtonID);

    if (btnOK != null)
        btnOK.disabled = !ShouldEnableOK(ctxParam, isMultiSelectMode);
}
function ShouldEnableOK(ctxParam, isMultiSelect) {
ULSMoI:
    ;
    if (isMultiSelect == false)
        return true;
    if (IsControlEmpty(ctxParam))
        return false;
    else
        return true;
}
function GetCurrentResultTableRow(ele) {
    if (ele == null)
        return null;
    if (ele.tagName == "TR" || ele.tagName == "tr") {
        if (ele.getAttribute("resultRow") != null)
            return ele;
    }
    while (ele != null) {
        if (ele.tagName == "TR" || ele.tagName == "tr") {
            if (ele.getAttribute("resultRow") != null)
                return ele;
        }
        ele = ele.parentNode;
    }
    return null;
}
function GetNextResultTableRow(ele) {
    if (ele == null)
        return null;
    var curr = GetCurrentResultTableRow(ele);
    var resultTable = document.getElementById(g_EntityEditorResultTableId);

    if (resultTable == null)
        return null;
    for (var x = 1; x < resultTable.rows.length; x++) {
        if (IsSearchResultRow(resultTable.rows[x]) && resultTable.rows[x] == curr) {
            break;
        }
    }
    if (x < resultTable.rows.length - 1)
        return resultTable.rows[x + 1];
    else
        return null;
}
function GetPrevResultTableRow(ele) {
ULSMoI:
    ;
    if (ele == null)
        return null;
    var curr = GetCurrentResultTableRow(ele);
    var resultTable = document.getElementById(g_EntityEditorResultTableId);

    if (resultTable == null)
        return null;
    for (var x = 1; x < resultTable.rows.length; x++) {
        if (IsSearchResultRow(resultTable.rows[x]) && resultTable.rows[x] == curr) {
            break;
        }
    }
    if (x > 0)
        return resultTable.rows[x - 1];
    else
        return null;
}
function GetPickerControl(editorClientID) {
ULSMoI:
    ;
    var divOrTxtbx = null;

    if (PreferContentEditableDiv(editorClientID) || EntityEditor_UseContentEditableControl) {
        divOrTxtbx = document.getElementById(getSubControlID(editorClientID, g_EntityEditorUpLevelId));
    }
    else {
        divOrTxtbx = document.getElementById(getSubControlID(editorClientID, g_EntityEditorDownLevelId));
    }
    return divOrTxtbx;
}
function IsPickerControlChild(root, eleToCheck) {
ULSMoI:
    ;
    var isChild = false;

    if (root == null || eleToCheck == null)
        return isChild;
    if (root == eleToCheck)
        return false;
    if (root.childNodes.length == 0)
        return isChild;
    for (var i = 0; i < root.childNodes.length && isChild == false; i++) {
        if (root.childNodes[i] == eleToCheck) {
            isChild = true;
            break;
        }
        else {
            isChild = IsPickerControlChild(root.childNodes[i], eleToCheck);
        }
    }
    return isChild;
}
function TrimPickerControl(uplevel, ctxParam) {
ULSMoI:
    ;
    if (uplevel == null)
        return;
    if (PreferContentEditableDiv(ctxParam)) {
        if (EntityEditor_UseContentEditableControl) {
            TrimPickerControlForIE(uplevel);
        }
        else {
            TrimPickerControlForW3C(uplevel);
        }
    }
    else {
        if (EntityEditor_UseContentEditableControl) {
            TrimPickerControlForIE(uplevel);
        }
    }
}
function RemoveContextMenuNodes(ele) {
    if (ele == null)
        return;
    var children = ele.childNodes;
    var eleChildCount = 0;
    var i = 0;
    var len = children.length;

    for (i = 0; i < len; i++) {
        if (children[i].nodeType != 3)
            eleChildCount++;
    }
    if (eleChildCount == 2)
        return;
    for (var j = len; j > 2; j--) {
        ele.removeChild(children[j - 1]);
    }
}
function LookupRowInSelection(row) {
ULSMoI:
    ;
    if (row == null)
        return null;
    for (var i = 0; i < selected.length; i++) {
        if (selected[i] == row) {
            return selected[i];
        }
    }
    return null;
}
function GetInnerHTMLOrTextOfUpLevelDiv(uplevel, bTrim, bText, ctxParam) {
ULSMoI:
    ;
    if (uplevel == null)
        return "";
    if (bTrim == true) {
        var newNode = uplevel.cloneNode(true);

        if (newNode == null) {
            TrimPickerControl(uplevel, ctxParam);
            if (bText == true) {
                if (EntityEditor_UseContentEditableControl)
                    return uplevel.innerText;
                else
                    return typeof uplevel.textContent == "undefined" ? uplevel.innerText : uplevel.textContent;
            }
            else {
                return uplevel.innerHTML;
            }
        }
        else {
            TrimPickerControl(newNode, ctxParam);
            if (bText == true) {
                if (EntityEditor_UseContentEditableControl)
                    return newNode.innerText;
                else
                    return typeof newNode.textContent == "undefined" ? newNode.innerText : newNode.textContent;
            }
            else
                return newNode.innerHTML;
        }
    }
    else {
        if (bText == true) {
            if (EntityEditor_UseContentEditableControl)
                return uplevel.innerText;
            else
                return typeof uplevel.textContent == "undefined" ? uplevel.innerText : uplevel.textContent;
        }
        else
            return uplevel.innerHTML;
    }
}
function GetDownLevelValue(downlevel) {
ULSMoI:
    ;
    if (downlevel == null)
        return "";
    return downlevel.value;
}
function GetPickerControlValue(ctxParam, bTrim, bText) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(ctxParam);

    if (pickerControl == null)
        return "";
    if (PreferContentEditableDiv(ctxParam) || EntityEditor_UseContentEditableControl) {
        return GetInnerHTMLOrTextOfUpLevelDiv(pickerControl, bTrim, bText, ctxParam);
    }
    else {
        return GetDownLevelValue(pickerControl);
    }
}
function IsValidLen(ele) {
    var isValid = true;

    if (ele == null)
        return isValid;
    if (ele.nodeType == 3) {
        if (ele.data.length > g_MAX_LEN)
            isValid = false;
        return isValid;
    }
    return isValid;
}
function ValidatePickerControl(editorClientID) {
ULSMoI:
    ;
    var isValid = true;
    var pickerControl = GetPickerControl(editorClientID);

    if (pickerControl == null)
        return isValid;
    if (PreferContentEditableDiv(editorClientID) || EntityEditor_UseContentEditableControl) {
        var children = pickerControl.childNodes;

        for (var i = 0; i < children.length; i++) {
            if (!IsValidLen(children[i])) {
                isValid = false;
                break;
            }
        }
    }
    else {
        if (pickerControl.value.length > g_MAX_LEN) {
            isValid = false;
        }
    }
    return isValid;
}
function setFocus(ctxParam) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(ctxParam);

    if (pickerControl != null) {
        pickerControl.focus();
    }
}
function ShowValidationError() {
ULSMoI:
    ;
    alert(EntityEditor_ItemTooLong);
    return false;
}
function PreferContentEditableDiv(ctxParam) {
ULSMoI:
    ;
    var editor = document.getElementById(ctxParam);

    if (editor != null && editor.getAttribute('preferContentEditableDiv') != null && editor.getAttribute('preferContentEditableDiv') == 'true')
        return true;
    else
        return false;
}
function stopBubble(e) {
    if (!Boolean(e))
        e = window.event;
    if (Boolean(e) && Boolean(e.stopPropagation)) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
}
function stopDefaultAction(e) {
    if (!Boolean(e))
        e = window.event;
    if (Boolean(e) && Boolean(e.preventDefault)) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
}
function SetCaretPosition(ctxParam) {
ULSMoI:
    ;
    if (Boolean(window.getSelection)) {
        if (Boolean(document.activeElement)) {
            if (document.activeElement.tagName == "DIV" || document.activeElement.tagName == "div") {
                if (document.activeElement == GetPickerControl(ctxParam)) {
                    var selObj = window.getSelection();

                    selObj.selectAllChildren(GetPickerControl(ctxParam));
                    selObj.collapseToEnd();
                }
            }
        }
    }
}
function InValidateControl(clientID, div) {
ULSMoI:
    ;
    var editor = document.getElementById(clientID);

    if (editor != null) {
        editor.setAttribute("inValidate", "true");
        div.focus();
    }
}
function IsDirty(editorClientID) {
ULSMoI:
    ;
    var editor = document.getElementById(editorClientID);

    return editor.getAttribute('editorOldValue') != GetPickerControlValue(editorClientID, true, true) || editor.getAttribute('inValidate') == "true";
}
function IsIE7() {
ULSMoI:
    ;
    return !(browseris.safari || browseris.firefox || browseris.ie8standardUp);
}
function RenderGroupOnStartup() {
ULSMoI:
    ;
    if (typeof Microsoft == 'object' && typeof Microsoft.SharePoint == 'object' && typeof Microsoft.SharePoint.ApplicationPages == 'object' && typeof Microsoft.SharePoint.ApplicationPages.GenericPicker == 'function' && typeof Microsoft.SharePoint.ApplicationPages.GenericPicker.renderSearchTree == 'function' && typeof g_strJsonSPGroup != null) {
        Microsoft.SharePoint.ApplicationPages.GenericPicker.renderSearchTree(g_strJsonSPGroup);
    }
}
function HandleEEReplaceForIE(clientID, key, id) {
ULSMoI:
    ;
    var otherMatch = matches[clientID][key].childNodes[id];
    var spandata = ConvertEntityToSpan(clientID, otherMatch);

    if (!browseris.ie8standard) {
        g_oSelRw.pasteHTML(spandata);
        g_oSelRw.select();
        document.selection.clear();
        InValidateControl(clientID, GetPickerControl(clientID));
    }
    else {
        var spannew = document.createElement("span");

        spannew.innerHTML = spandata;
        var div = g_oSelSpan.parentNode;

        div.replaceChild(spannew.firstChild, g_oSelSpan);
        InValidateControl(clientID, div);
        g_oSelSpan = null;
        g_oSelRw = null;
    }
}
function RemoveUnwantedNodesForIE(uplevel) {
ULSMoI:
    ;
    var children = uplevel.childNodes;

    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName != 'SPAN' && children[i].nodeType != 3) {
            if (children[i].tagName == 'A') {
                var oR = document.body.createTextRange();

                oR.moveToElementText(children[i]);
                oR.execCommand('Unlink');
            }
            else {
                var oTN = document.createTextNode(children[i].innerText);

                children[i].replaceNode(oTN);
            }
        }
    }
}
function HandlePasteForIE() {
ULSMoI:
    ;
    var rng = document.selection.createRange();

    window.event.returnValue = false;
    rng.text = window.clipboardData.getData('Text');
}
function HandleCopyForIE() {
ULSMoI:
    ;
    var rng = document.selection.createRange();

    window.clipboardData.setData('Text', rng.text);
    window.event.returnValue = false;
}
function TrimPickerControlForIE(uplevel) {
ULSMoI:
    ;
    var children = uplevel.childNodes;
    var i = 0;

    while (i < children.length) {
        if (children[i].nodeType != 3 && children[i].getAttribute('isContentType') != null) {
            if (!ValidateEntityMeta(children[i])) {
                uplevel.removeChild(children[i]);
                continue;
            }
            else {
                RemoveContextMenuNodes(children[i]);
            }
        }
        i++;
    }
}
function TrimPickerControlForW3C(uplevel) {
ULSMoI:
    ;
    var children = uplevel.childNodes;
    var i = 0;

    while (i < children.length) {
        if (children[i].nodeType != 3 && children[i].getAttribute('isContentType') != null) {
            if (!ValidateEntityMeta(children[i])) {
                uplevel.removeChild(children[i]);
                continue;
            }
            else {
                RemoveContextMenuNodes(children[i]);
            }
        }
        if (children[i].nodeName == 'BR') {
            uplevel.removeChild(children[i]);
            continue;
        }
        if (browseris.safari) {
            if (children[i].nodeName == 'SPAN' && children[i].className == "Apple-tab-span") {
                uplevel.removeChild(children[i]);
                continue;
            }
        }
        i++;
    }
}
function onClickRwIE(showMenu, divClicked, e, ctxParam) {
ULSMoI:
    ;
    var oR = document.selection.createRange();
    var oPE = null;
    var oPPE = null;

    if (typeof oR.parentElement == 'function' || typeof oR.parentElement == 'object')
        oPE = oR.parentElement();
    else {
        var eleItem = oR.item(0);

        oPE = eleItem;
    }
    if (oPE.tagName == "SPAN" && oPE.id == "content") {
        oPPE = oPE.parentNode;
    }
    else if (oPE.tagName == "SPAN" && oPE.id.substring(0, 4) == "span" && !divClicked) {
        oPPE = oPE;
    }
    if (oPPE != null) {
        var oDivEntityData = oPPE.children('divEntityData');
        var isResolved = oDivEntityData.getAttribute('isresolved');

        oR.moveToElementText(oPPE);
        var c = "character";

        oR.moveStart(c, -1);
        if (isResolved == "False" && typeof _fV4UI != "undefined" && _fV4UI) {
            oR.select();
            oR.moveEnd(c, 1);
        }
        else {
            oR.moveEnd(c, 1);
            oR.select();
        }
        g_oSelRw = oR;
        if (browseris.ie8standard) {
            oPPE.contentEditable = false;
            g_oSelSpan = oPPE;
        }
        if (isResolved == "False") {
            var menuOwner = oPPE;

            if ((menuOwner.getBoundingClientRect()).right > (menuOwner.parentNode.getBoundingClientRect()).right)
                menuOwner = menuOwner.parentNode;
            var clientID = oPPE.parentNode.id.replace('_upLevelDiv', '');
            var keyRawValue = oDivEntityData.getAttribute('key');
            var menu = DeferCall('CMenu', 'Entity_Menu' + String(g_menuCounter));

            g_menuCounter++;
            var morematches = null;

            if (matches[clientID] != null && matches[clientID][keyRawValue] != null)
                morematches = matches[clientID][keyRawValue];
            var EE = document.getElementById(clientID);
            var moreItemsText = EE.getAttribute('MoreItemsText');
            var removeText = EE.getAttribute('RemoveText');
            var noMatchesText = EE.getAttribute('NoMatchesText');

            if (morematches == null || morematches.childNodes.length == 0)
                CAMOpt(menu, noMatchesText, "EENoMatchFound('" + STSScriptEncode(clientID) + "');");
            else {
                for (var x = 0; x < morematches.childNodes.length; x++) {
                    var otherMatch = morematches.childNodes[x];

                    CAMOpt(menu, otherMatch.getAttribute('DisplayText'), "EEReplace('" + STSScriptEncode(clientID) + "', '" + STSScriptEncode(keyRawValue) + "', " + String(x) + ");");
                }
            }
            CAMSep(menu);
            CAMOpt(menu, removeText, "EERemove('" + STSScriptEncode(clientID) + "');");
            CAMOpt(menu, moreItemsText, "EEShowMore('" + STSScriptEncode(clientID) + "', '" + STSScriptEncode(keyRawValue) + "');");
            OMenu(menu, menuOwner, null, null, -1);
        }
        else {
            if (browseris.ie8standard)
                oPPE.contentEditable = false;
        }
    }
    else {
        if (browseris.ie8standard) {
            var upLevelDiv = oPE;

            while (upLevelDiv != null && (upLevelDiv.id == null || upLevelDiv.id.indexOf(g_EntityEditorUpLevelId) == -1))
                upLevelDiv = upLevelDiv.parentNode;
            if (upLevelDiv != null) {
                var spans = upLevelDiv.childNodes;

                for (var i = 0; i < spans.length; i++) {
                    if (spans[i].tagName != null && spans[i].tagName == "SPAN")
                        spans[i].contentEditable = true;
                }
            }
        }
    }
}
function onClickRwW3C(showMenu, divClicked, e, ctxParam) {
ULSMoI:
    ;
    var oEntityToSelect = null;
    var oClickedEntity = null;
    var oDivEntityData = null;
    var oParentContainer = null;
    var x;

    if (Boolean(window.getSelection)) {
        var selection = window.getSelection();

        if (selection != null) {
            oClickedEntity = selection.focusNode.parentNode;
            if (oClickedEntity != null) {
                if (oClickedEntity.id == 'content') {
                    oEntityToSelect = oClickedEntity;
                }
                else if (oClickedEntity.id.substring(0, 4) == 'span') {
                    oParentContainer = oClickedEntity;
                    for (x = 0; x < oClickedEntity.childNodes.length; x++) {
                        if (oClickedEntity.childNodes[x].id == 'content') {
                            oEntityToSelect = oClickedEntity.childNodes[x];
                            break;
                        }
                    }
                }
                if (oEntityToSelect == null)
                    return;
                selection.selectAllChildren(oEntityToSelect);
                oParentContainer = oEntityToSelect.parentNode;
                g_oSelRw = oParentContainer;
                g_oSelSpan = oParentContainer;
                for (x = 0; x < oParentContainer.childNodes.length; x++) {
                    if (oParentContainer.childNodes[x].id == 'divEntityData') {
                        oDivEntityData = oParentContainer.childNodes[x];
                        break;
                    }
                }
                if (oDivEntityData != null) {
                    var isResolved = oDivEntityData.getAttribute('isresolved');

                    if (isResolved == "False") {
                        var menuOwner = oParentContainer;

                        if ((menuOwner.getBoundingClientRect()).right > (menuOwner.parentNode.getBoundingClientRect()).right)
                            menuOwner = menuOwner.parentNode;
                        var clientID = oParentContainer.parentNode.id.replace('_upLevelDiv', '');
                        var keyRawValue = oDivEntityData.getAttribute('key');
                        var menu = DeferCall('CMenu', 'Entity_Menu' + String(g_menuCounter));

                        g_menuCounter++;
                        var morematches = null;

                        if (matches[clientID] != null && matches[clientID][keyRawValue] != null)
                            morematches = matches[clientID][keyRawValue];
                        var EE = document.getElementById(clientID);
                        var moreItemsText = EE.getAttribute('MoreItemsText');
                        var removeText = EE.getAttribute('RemoveText');
                        var noMatchesText = EE.getAttribute('NoMatchesText');

                        if (morematches == null || morematches.childNodes.length == 0)
                            CAMOpt(menu, noMatchesText, "EENoMatchFound('" + STSScriptEncode(clientID) + "');");
                        else {
                            for (x = 0; x < morematches.childNodes.length; x++) {
                                var otherMatch = morematches.childNodes[x];

                                CAMOpt(menu, otherMatch.getAttribute('DisplayText'), "EEReplace('" + STSScriptEncode(clientID) + "', '" + STSScriptEncode(keyRawValue) + "', " + String(x) + ");");
                            }
                        }
                        CAMSep(menu);
                        CAMOpt(menu, removeText, "EERemove('" + STSScriptEncode(clientID) + "');");
                        CAMOpt(menu, moreItemsText, "EEShowMore('" + STSScriptEncode(clientID) + "', '" + STSScriptEncode(keyRawValue) + "');");
                        OMenu(menu, menuOwner, null, null, -1);
                        stopBubble(e);
                    }
                }
            }
        }
    }
}
function EENoMatchFound(clientID) {
ULSMoI:
    ;
    var pickerControl = GetPickerControl(clientID);

    if (pickerControl == null) {
        return;
    }
    if (PreferContentEditableDiv(clientID)) {
        pickerControl.focus();
        if (!EntityEditor_UseContentEditableControl) {
            SetCaretPosition(clientID);
        }
    }
    else {
        pickerControl.focus();
    }
}
function RemoveUnwantedSpansForIE(uplevel) {
ULSMoI:
    ;
    var children = uplevel.childNodes;

    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName != 'SPAN' && children[i].nodeType != 3) {
            var oTN = document.createTextNode(children[i].innerText);

            children[i].replaceNode(oTN);
        }
    }
}
function ValidateEntityMeta(spanEleContentType) {
    var divCheck = false;
    var spanCheck = false;

    if (spanEleContentType == null) {
        return false;
    }
    var children = spanEleContentType.childNodes;
    var len = children.length;

    if (len < 2) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if ((children[i].tagName == 'DIV' || children[i].tagName == 'div') && children[i].id == 'divEntityData') {
            var divEntityDataEle = children[i];
            var divEntityDataEleChildren = divEntityDataEle.childNodes;

            if (divEntityDataEleChildren.length != 1) {
                divCheck = false;
            }
            for (var j = 0; j < divEntityDataEleChildren.length; j++) {
                if (divEntityDataEleChildren[j].tagName == 'DIV' || divEntityDataEleChildren[j].tagName == 'div') {
                    divCheck = true;
                }
            }
        }
        if ((children[i].tagName == 'SPAN' || children[i].tagName == 'span') && children[i].id == 'content') {
            spanCheck = true;
        }
    }
    return divCheck && spanCheck;
}
function ShouldCallbackHelper(pickerControl, toEle, editorClientID) {
ULSMoI:
    ;
    if (IsPickerControlChild(pickerControl, toEle)) {
        return false;
    }
    else {
        return IsDirty(editorClientID);
    }
}
$_global_entityeditor();
