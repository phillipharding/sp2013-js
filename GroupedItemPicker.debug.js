function $_global_groupeditempicker() {
    MasterGroup.prototype = {
        data: undefined,
        addControl: undefined,
        alwaysAllowDelete: undefined,
        candidateControl: undefined,
        descriptionControl: undefined,
        groupControl: undefined,
        initialSelection: undefined,
        removeControl: undefined,
        resultControl: undefined,
        selectionField: undefined
    };
    if (typeof Sys != "undefined" && Sys != null && typeof Sys.Application != "undefined" && Sys.Application != null && typeof Sys.Application.notifyScriptLoaded != 'undefined') {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("groupeditempicker.js");
    }
}
function ULSEeZ() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "groupeditempicker.commentedjs";
    return o;
}
function MasterGroup() {
}
function GipNewOption(text, pos) {
ULSEeZ:
    ;
    var opt = new Option(text, pos);

    opt.title = text;
    return opt;
}
function GipInitializeGroup(master, groupControlId, candidateControlId, resultControlId, descriptionControlId, addControlId, removeControlId, dataId, initialSelectionId, currentSelectionId, minimumWidth, alwaysAllowDelete, first) {
    master.data = GipGetGroupData((document.getElementById(dataId)).value);
    master.initialSelection = GipGetSelectionData((document.getElementById(initialSelectionId)).value);
    if (first) {
        master.currentSelection = master.initialSelection;
    }
    else {
        master.currentSelection = GipGetSelectionData((document.getElementById(currentSelectionId)).value);
    }
    if (groupControlId != null && groupControlId != "")
        master.groupControl = document.getElementById(groupControlId);
    else
        master.groupControl = null;
    master.candidateControl = document.getElementById(candidateControlId);
    master.resultControl = document.getElementById(resultControlId);
    if (descriptionControlId != null && descriptionControlId != "")
        master.descriptionControl = document.getElementById(descriptionControlId);
    else
        master.descriptionControl = null;
    master.addControl = document.getElementById(addControlId);
    master.removeControl = document.getElementById(removeControlId);
    master.selectionField = document.getElementById(currentSelectionId);
    for (var i = 0; i < master.currentSelection.length; i++) {
        master.resultControl.options[i] = GipNewOption(master.currentSelection[i][1], master.currentSelection[i][0]);
    }
    if (master.groupControl != null) {
        for (i = 0; i < master.data.length; i++) {
            master.groupControl.options[i] = GipNewOption(master.data[i][0], i);
        }
        if (master.groupControl.options.length > 0) {
            master.groupControl.options[0].selected = true;
        }
    }
    GipRefreshGroupCore(master);
    master.removeControl.disabled = true;
    if (alwaysAllowDelete) {
        master.alwaysAllowDelete = true;
        GipSetHiddenControlValue(master);
    }
    else {
        master.alwaysAllowDelete = false;
    }
}
function GipRefreshGroup(master) {
    var handler;

    if (master.groupControl != null) {
        handler = master.groupControl.getAttribute("onbeforeselect");
        if (handler != null && handler != "") {
            if (!eval(handler + "(master)"))
                return;
        }
    }
    GipRefreshGroupCore(master);
    if (master.groupControl != null) {
        handler = master.groupControl.getAttribute("onafterselect");
        if (handler != null && handler != "") {
            eval(handler + "(master)");
        }
    }
}
function GipRefreshGroupCore(master) {
    if (master.data.length == 0)
        return;
    var index = 0;

    if (master.groupControl != null)
        index = master.groupControl.selectedIndex;
    var candidateCount = 0;

    for (var i = 1; i < master.data[index].length; i++) {
        var found = false;

        for (var n = 0; n < master.resultControl.length; n++) {
            if (master.data[index][i][0] == master.resultControl[n].value) {
                found = true;
            }
        }
        if (!found) {
            master.candidateControl.options[candidateCount] = GipNewOption(master.data[index][i][1], master.data[index][i][0]);
            candidateCount++;
        }
    }
    master.candidateControl.length = candidateCount;
    if (master.candidateControl.options.length > 0) {
        master.candidateControl.options[0].selected = true;
        master.addControl.disabled = false;
        GipDisplayDescription(master);
    }
    else {
        master.addControl.disabled = true;
        GipSetDescriptionText(master, " ");
    }
}
function GipSetHiddenControlValue(master) {
    var s = "";

    for (var i = 0; i < master.resultControl.options.length; i++) {
        if (s != "")
            s = s + "|t";
        s = s + master.resultControl.options[i].value.replace(/\x7C/g, "||");
        s = s + "|t";
        s = s + master.resultControl.options[i].text.replace(/\x7C/g, "||");
    }
    master.selectionField.value = s;
}
function GipAddSelectedItems(master) {
    var handler = master.addControl.getAttribute("onbeforeadd");

    if (handler != null && handler != "") {
        if (!eval(handler + "(master)"))
            return;
    }
    var needToAdjustResultBox = false;

    if (master.resultControl.offsetWidth < master.candidateControl.offsetWidth) {
        needToAdjustResultBox = true;
    }
    var dirty = false;
    var pos = -1;

    for (var i = 0; i < master.candidateControl.options.length; i++) {
        if (master.candidateControl.options[i].selected) {
            if (!dirty)
                pos = master.resultControl.length;
            master.resultControl.options[master.resultControl.length] = GipNewOption(master.candidateControl.options[i].text, master.candidateControl.options[i].value);
            master.candidateControl.options[i] = null;
            dirty = true;
            i--;
        }
    }
    if (dirty) {
        GipSetHiddenControlValue(master);
        if (pos >= 0) {
            master.resultControl.options[pos].selected = true;
            GipSelectResultItems(master);
        }
    }
    handler = master.addControl.getAttribute("onafteradd");
    if (handler != null && handler != "") {
        eval(handler + "(master)");
    }
}
function GipRemoveSelectedItems(master) {
    var handler = master.removeControl.getAttribute("onbeforeremove");

    if (handler != null && handler != "") {
        if (!eval(handler + "(master)"))
            return;
    }
    var needToAdjustCandidateBox = false;

    if (master.resultControl.offsetWidth > master.candidateControl.offsetWidth) {
        needToAdjustCandidateBox = true;
    }
    var dirty = false;
    var id = null;

    for (var i = 0; i < master.resultControl.options.length; i++) {
        if (master.resultControl.options[i].selected) {
            var found = false;

            for (var n = 0; !master.alwaysAllowDelete && n < master.initialSelection.length; n++) {
                if (master.resultControl.options[i].value == master.initialSelection[n][0]) {
                    found = true;
                }
            }
            if (!found) {
                dirty = true;
                id = master.resultControl.options[i].value;
                master.resultControl.options[i] = null;
                i--;
            }
        }
    }
    if (dirty) {
        GipSetHiddenControlValue(master);
        GipRefreshGroupCore(master);
        master.removeControl.disabled = true;
        for (i = 0; i < master.candidateControl.options.length; i++) {
            if (master.candidateControl.options[i].value == id) {
                master.candidateControl.selectedIndex = i;
                GipSelectCandidateItems(master);
                break;
            }
        }
    }
    handler = master.removeControl.getAttribute("onafterremove");
    if (handler != null && handler != "") {
        eval(handler + "(master)");
    }
}
function GipSelectCandidateItems(master) {
    var handler = master.candidateControl.getAttribute("onbeforeselect");

    if (handler != null && handler != "") {
        if (!eval(handler + "(master)"))
            return;
    }
    master.resultControl.selectedIndex = -1;
    master.removeControl.disabled = true;
    master.addControl.disabled = false;
    GipDisplayDescription(master);
    handler = master.candidateControl.getAttribute("onafterselect");
    if (handler != null && handler != "") {
        eval(handler + "(master)");
    }
}
function GipSelectResultItems(master) {
    var handler = master.resultControl.getAttribute("onbeforeselect");

    if (handler != null && handler != "") {
        if (!eval(handler + "(master)"))
            return;
    }
    var count = 0;
    var found = false;

    for (var i = 0; i < master.resultControl.length; i++) {
        if (master.resultControl.options[i].selected) {
            count++;
            for (var n = 0; !master.alwaysAllowDelete && n < master.initialSelection.length; n++) {
                if (master.resultControl.options[i].value == master.initialSelection[n][0]) {
                    found = true;
                    break;
                }
            }
        }
    }
    if (found || count <= 0) {
        master.removeControl.disabled = true;
    }
    else {
        master.removeControl.disabled = false;
    }
    master.candidateControl.selectedIndex = -1;
    master.addControl.disabled = true;
    GipDisplayDescription(master);
    handler = master.resultControl.getAttribute("onafterselect");
    if (handler != null && handler != "") {
        eval(handler + "(master)");
    }
}
function GipSplit(s) {
    if (s.length == 0)
        return [];
    var result = [];
    var bk = -2;
    var re = /\|\|/g;

    for (var i = 0; i < s.length - 1; i++) {
        var c1 = s.charAt(i);
        var c2 = s.charAt(i + 1);

        if (c1 == '|' && c2 == 't' && GipDelimitingPipe(s, i)) {
            result[result.length] = (s.substring(bk + 2, i)).replace(re, "|");
            bk = i;
        }
    }
    result[result.length] = s.substring(bk + 2);
    return result;
    function GipDelimitingPipe(str, startIdx) {
    ULSEeZ:
        ;
        if (str == null || str == '' || startIdx < 0)
            return false;
        var countPipe = 0;

        while (startIdx > 0 && str[startIdx--] == '|')
            countPipe++;
        return countPipe % 2 == 1;
    }
}
function GipGetGroupData(s) {
ULSEeZ:
    ;
    var rg = GipSplit(s);
    var result = [];

    for (var i = 0; i < rg.length; i += 4) {
        var iPrev = i - 4;

        if (i == 0 || rg[i + 3] != rg[iPrev + 3]) {
            result[result.length] = new Array(rg[i + 3]);
        }
        var group = result[result.length - 1];

        group[group.length] = [rg[i + 0], rg[i + 1], rg[i + 2]];
    }
    return result;
}
function GipGetSelectionData(s) {
ULSEeZ:
    ;
    var rg = GipSplit(s);
    var result = [];

    for (var i = 0; i < rg.length; i += 2) {
        result[result.length] = [rg[i + 0], rg[i + 1]];
    }
    return result;
}
function GipIsIE() {
ULSEeZ:
    ;
    if (navigator.appVersion.indexOf("MSIE") != -1)
        return true;
    else
        return false;
}
function GipSetDescriptionText(master, s) {
    if (master.descriptionControl != null)
        master.descriptionControl.innerHTML = s;
}
function GipDisplayDescription(master) {
    var v;
    var i;

    if (master.candidateControl.selectedIndex >= 0) {
        var index = 0;

        if (master.groupControl != null)
            index = master.groupControl.selectedIndex;
        var group = master.data[index];

        v = master.candidateControl.options[master.candidateControl.selectedIndex].value;
        for (i = 1; i < group.length; i++) {
            if (group[i][0] == v) {
                GipSetDescriptionText(master, group[i][2]);
                break;
            }
        }
    }
    else if (master.resultControl.selectedIndex >= 0) {
        v = master.resultControl.options[master.resultControl.selectedIndex].value;
        for (i = 0; i < master.data.length; i++) {
            var found = false;

            for (var n = 1; n < master.data[i].length; n++) {
                if (master.data[i][n][0] == v) {
                    GipSetDescriptionText(master, master.data[i][n][2]);
                    found = true;
                    break;
                }
            }
            if (found)
                break;
        }
    }
}
function GixInitializeGroup(master, groupControlId, candidateControlId, descriptionControlId, dataId, currentSelectionId) {
    master.data = GipGetGroupData((document.getElementById(dataId)).value);
    master.currentSelection = GipGetSelectionData((document.getElementById(currentSelectionId)).value);
    master.groupControl = document.getElementById(groupControlId);
    master.candidateControl = document.getElementById(candidateControlId);
    if (descriptionControlId != null && descriptionControlId != "")
        master.descriptionControl = document.getElementById(descriptionControlId);
    master.selectionField = document.getElementById(currentSelectionId);
    for (var i = 0; i < master.data.length; i++) {
        master.groupControl.options[i] = GipNewOption(master.data[i][0], i);
    }
    var found;

    found = false;
    for (i = 0; !found && i < master.data.length; i++) {
        for (var n = 1; !found && n < master.data[i].length; n++) {
            if (master.data[i][n][0] == master.selectionField.value) {
                found = true;
                master.groupControl.options[i].selected = true;
                GixRefreshGroup(master);
                master.candidateControl.options[n - 1].selected = true;
                GixSelectItem(master);
                break;
            }
        }
    }
    if (!found) {
        if (master.groupControl.options.length > 0) {
            master.groupControl.options[0].selected = true;
        }
        GixRefreshGroup(master);
    }
}
function GixRefreshGroup(master) {
    if (master.groupControl.options.length == 0) {
        return;
    }
    var index = master.groupControl.selectedIndex;

    master.candidateControl.length = 0;
    for (var i = 1; i < master.data[index].length; i++) {
        master.candidateControl.options[master.candidateControl.options.length] = GipNewOption(master.data[index][i][1], master.data[index][i][0]);
    }
    if (master.candidateControl.options.length > 0) {
        master.candidateControl.options[0].selected = true;
        GixSelectItem(master);
    }
    else {
        master.selectionField.value = "";
        if (master.descriptionControl != null)
            GipSetDescriptionText(master, "");
    }
}
function GixRefreshGroupOnLoadCore(master) {
    var isel = master.candidateControl.selectedIndex;

    GixRefreshGroup(master);
    if (isel >= 0 && isel < master.candidateControl.options.length) {
        master.candidateControl.options[isel].selected = true;
        GixSelectItem(master);
    }
}
function GixSelectItem(master) {
    var group = master.data[master.groupControl.selectedIndex];
    var v = master.candidateControl.options[master.candidateControl.selectedIndex].value;

    if (master.descriptionControl != null) {
        for (var i = 1; i < group.length; i++) {
            if (group[i][0] == v) {
                GipSetDescriptionText(master, group[i][2]);
                break;
            }
        }
    }
    master.selectionField.value = v;
}
function EditDocumentTemplate(strDocument, progID, fXMLForm, runtimeErrorText, documentErrorText, strApp) {
ULSEeZ:
    ;
    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null), function() {
        ULSEeZ:
            ;
            PHSucceed(strApp, true);
        }, function() {
        ULSEeZ:
            ;
            PHSucceed(strApp, false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
    ULSEeZ:
        ;
        if (Boolean(strApp) && phManager != null && phManager.IsProtocolHandlerEnabled(strApp)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null);
            return;
        }
        var editButton = null;

        try {
            editButton = new ActiveXObject(progID);
            if (editButton != null) {
                var bSuccess = false;

                if (fXMLForm) {
                    if (typeof editButton.CustomizeTemplate2 != "undefined") {
                        bSuccess = editButton.CustomizeTemplate2(window, strDocument);
                    }
                }
                else {
                    if (typeof editButton.EditDocument2 != "undefined") {
                        bSuccess = editButton.EditDocument2(window, strDocument);
                    }
                }
            }
        }
        catch (e) {
            alert(documentErrorText);
        }
    }
}
function ConditionChange(e) {
ULSEeZ:
    ;
    if (typeof g_conditionalEnable == "undefined")
        return;
    var oMaster = g_conditionalEnable;

    if (typeof oMaster.length == "undefined")
        return;
    for (var i = 0; i < oMaster.length; i++) {
        var o = document.getElementById(oMaster[i][0]);
        var v = o.checked;

        if (v != null) {
            for (var n = 1; n < oMaster[i].length; n++) {
                (document.getElementById(oMaster[i][n])).disabled = !v;
            }
        }
    }
}
function ProcessConditions() {
ULSEeZ:
    ;
    if (typeof g_conditionalEnable == "undefined")
        return;
    var oMaster = g_conditionalEnable;

    if (typeof oMaster.length == "undefined")
        return;
    if (oMaster.length <= 0)
        return;
    for (var i = 0; i < oMaster.length; i++) {
        var o = document.getElementById(oMaster[i][0]);

        if (browseris.ie)
            o.onclick = new Function("ConditionChange(event); return true;");
        else
            o.onclick = function(e) {
            ULSEeZ:
                ;
                ConditionChange(e);
                return true;
            };
    }
    ConditionChange(null);
}
function IrInitialize(master) {
    if (master.length <= 0)
        return;
    for (var i = 0; i < master.length; i++) {
        master[i][2] = i;
        var obj = document.getElementById(master[i][0]);

        for (var n = 0; n < master.length; n++) {
            obj.options[n] = GipNewOption(n + 1, n + 1);
        }
    }
    IrRefresh(master);
}
function IrRefresh(master) {
    master.sort(function(a, b) {
    ULSEeZ:
        ;
        if (a[1] > b[1])
            return 1;
        else if (a[1] < b[1])
            return -1;
        else
            return a[2] - b[2];
    });
    for (var i = 0; i < master.length; i++) {
        master[i][1] = i + 1.0;
        var obj = document.getElementById(master[i][0]);

        obj.options[i].selected = true;
    }
}
function IrReorder(obj, master) {
    for (var i = 0; i < master.length; i++) {
        if (master[i][0] == obj.id) {
            if (Number(obj.value) < master[i][1]) {
                master[i][1] = Number(obj.value) - 0.1;
            }
            else if (Number(obj.value) > master[i][1]) {
                master[i][1] = Number(obj.value) - 0.0 + 0.1;
            }
            break;
        }
    }
    IrRefresh(master);
}
$_global_groupeditempicker();
