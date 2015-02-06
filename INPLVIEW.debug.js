function $_global_inplview() {
    g_SPGridInitInfo = {};
    SPGridInitInfo.prototype = {
        controllerId: undefined,
        gridSerializer: undefined,
        jsInitObj: undefined,
        showLoading: undefined,
        pagingInfo: undefined,
        initialized: false,
        selectedRows: null,
        fnCallback: null,
        stale: false,
        unfilteredHierarchyInfo: null
    };
    TranslatedCSRtoJsGridFieldData.prototype = {
        value: undefined,
        localizedValue: undefined,
        localizedValueSetExplicitly: undefined
    };
    SelectedItem.prototype = {
        id: undefined,
        fsObjType: undefined
    };
    CLVP_InitializePrototype();
    ajaxNavigate.add_navigate(RestoreAllClvpsNavigation);
    SPListOperationType = {
        Default: 0,
        Sort: 1,
        PagingRight: 2,
        PagingLeft: 3
    };
    FocusInfo_InitializePrototype();
    focusAcc = null;
    InitAllClvps();
    inplview = {
        CheckOutSingleItem: CheckOutSingleItem,
        InitAllClvps: InitAllClvps,
        HandleFilterReal: HandleFilterReal,
        OnClickFilterV4: OnClickFilterV4,
        RefreshInplViewUrl: RefreshInplViewUrl,
        RefreshInplViewUrlByContext: RefreshInplViewUrlByContext,
        CancelRefreshView: CancelRefreshView,
        CancelRefreshViewByContext: CancelRefreshViewByContext,
        HandleRefreshView: HandleRefreshView,
        HandleRefreshViewByContext: HandleRefreshViewByContext,
        STSNavigate2Real: STSNavigate2Real,
        DeleteSelectedItems: DeleteSelectedItems,
        ExpGroup: ExpGroup,
        STSNavigateToViewReal: STSNavigateToViewReal,
        CheckInSingleItemFromECB: CheckInSingleItemFromECB,
        RestoreAllClvpsNavigation: RestoreAllClvpsNavigation,
        RefreshPageTo: RefreshPageToEx
    };
    if (typeof Sys != "undefined" && Sys != null && typeof Sys.Application != "undefined" && Sys.Application != null && typeof Sys.Application.notifyScriptLoaded == "function") {
        Sys.Application.notifyScriptLoaded();
    }
    NotifyScriptLoadedAndExecuteWaitingJobs("inplview.js");
}
var g_SPGridInitInfo;

function SPGridInitInfo(controllerId, gridSerializer, jsInitObj, showLoading, pagingInfo) {
    this.controllerId = controllerId;
    this.gridSerializer = gridSerializer;
    this.jsInitObj = jsInitObj;
    this.showLoading = showLoading;
    this.pagingInfo = pagingInfo;
}
function SPGridToggleAllItems(renderCtx) {
    var gridInitInfo = g_SPGridInitInfo[renderCtx.view];
    var ganttControl = window[gridInitInfo.controllerId];

    ganttControl.ToggleAllItems();
}
function SPGridMakeInplviewRequest(cmd, listID, viewID, pagingInfo, sortState, filterURL, makeOnReadyStateChange) {
    var req = new XMLHttpRequest();
    var rg = [];

    rg.push(SP.Utilities.Utility.getLayoutsPageUrl('inplview.aspx'));
    rg.push("?Cmd=");
    rg.push(cmd);
    rg.push("&List=");
    rg.push(listID);
    rg.push("&View=");
    rg.push(viewID);
    rg.push("&IsXslView=TRUE&Grid=True");
    if (Boolean(pagingInfo)) {
        rg.push("&");
        rg.push(pagingInfo);
    }
    else {
        if (sortState) {
            rg.push("&SortField=");
            rg.push(escapeProperly(sortState.sortField));
            rg.push("&SortDir=");
            rg.push(sortState.isDescending ? "Desc" : "Asc");
        }
        if (Boolean(filterURL))
            rg.push(filterURL);
    }
    req.open("POST", rg.join(""), true);
    req.onreadystatechange = makeOnReadyStateChange(req);
    req.send(null);
}
function SPGridFetchData(listID, viewID, pagingInfo, sortState, filterURL, fnSuccess, fnPostSuccess, useCSR) {
    var makeOnReadyStateChange = function(req) {
        return function() {
            if (req.readyState == 4) {
                try {
                    req.onreadystatechange = null;
                }
                catch (e) { }
                var strInner = req.responseText;

                if (req.status == 601) {
                    throw strInner;
                }
                if (useCSR) {
                    var parts = JSON.parse(strInner);
                    var csrInfo = JSON.parse(parts["CSRData"]);
                    var gridSerializer = SP.JsGrid.Deserializer.DeserializeFromJson(parts["JSGridSchema"], null);
                    var ctxObj;

                    for (var ctxId in g_ctxDict) {
                        ctxObj = g_ctxDict[ctxId];
                        if (ctxObj.listName == listID) {
                            break;
                        }
                    }
                    var listSchema = ctxObj.ListSchema;

                    TranslateCSRtoJsGrid(csrInfo, gridSerializer, listSchema, ctxObj);
                    fnSuccess(gridSerializer);
                }
                else {
                    fnSuccess(SP.JsGrid.Deserializer.DeserializeFromJson(strInner, null));
                }
                if (typeof fnPostSuccess == 'function') {
                    fnPostSuccess();
                }
            }
        };
    };
    var cmd = useCSR ? "GridCSRHybrid" : "Grid";

    SPGridMakeInplviewRequest(cmd, listID, viewID, pagingInfo, sortState, filterURL, makeOnReadyStateChange);
}
function SPGridFetchSchema(listID, viewID, fnSuccess) {
    var initInfo = g_SPGridInitInfo[viewID];

    initInfo.stale = true;
    var makeOnReadyStateChange = function(req) {
        return function() {
            if (req.readyState == 4) {
                try {
                    req.onreadystatechange = null;
                }
                catch (e) { }
                var strInner = req.responseText;

                if (req.status == 601) {
                    throw strInner;
                }
                var schema = JSON.parse(strInner);

                fnSuccess(schema);
            }
        };
    };

    SPGridMakeInplviewRequest("Schema", listID, viewID, null, null, null, makeOnReadyStateChange);
}
function GetCtxFromView(viewGuid) {
    var myCtx = null;

    for (var ctxId in g_ctxDict) {
        var ctxT = g_ctxDict[ctxId];

        if (ctxT.view == viewGuid) {
            myCtx = ctxT;
            break;
        }
    }
    return myCtx;
}
function RenderSPGridBody(renderCtx) {
    AddPostRenderCallback(renderCtx, PostRenderSPGrid);
    var ret = [];

    ret.push('<tbody><tr><td><div id="spgridcontainer_');
    ret.push(renderCtx.wpq);
    ret.push('" style="display:none;" /></td></tr></tbody></table>');
    return ret.join('');
}
function PostRenderAfterJSGridRender(renderCtx) {
    renderCtx.enteringGridMode = false;
    if (typeof ProcessImn == "function") {
        ProcessImn();
    }
    SPClientRenderer._ExecuteRenderCallbacks(renderCtx, 'OnPostRender');
}
function PostRenderSPGrid(renderCtx) {
    var thead = document.getElementById("js-listviewthead-" + renderCtx.wpq);

    thead.style.display = "none";
    var aggBody = document.getElementById("agg" + renderCtx.wpq);

    if (aggBody != null)
        aggBody.style.display = "none";
    var initInfo = g_SPGridInitInfo[renderCtx.view];
    var grid = document.getElementById("spgridcontainer_" + renderCtx.wpq);

    grid.style.width = "100%";
    grid.style.display = "";
    EnsureScriptFunc("spgantt.js", "SP.GanttControl", function() {
        EnsureScriptFunc("mquery.js", "m$", function() {
            var gridSerializer = SP.JsGrid.Deserializer.DeserializeFromJson(initInfo.gridSerializer);
            var callback = function(gridSerializerLocal) {
                var jsGridControl = new SP.JsGrid.JsGridControl(grid, initInfo.showLoading);

                window[initInfo.controllerId] = new SP.GanttControl;
                window[initInfo.controllerId].Init(jsGridControl, gridSerializerLocal, initInfo.jsInitObj, initInfo.pagingInfo);
                window.setTimeout(function() {
                    jsGridControl.Focus();
                }, 0);
                if ((initInfo.selectedRows == null || initInfo.selectedRows.length == 1) && renderCtx.ListTemplateType == 171) {
                    var recordIndex = initInfo.selectedRows == null ? jsGridControl.GetTopRecordIndex() : jsGridControl.GetViewIndexOfRecord(initInfo.selectedRows[0]);
                    var cols = jsGridControl.GetColumns();

                    if (cols.length > 1 && cols[0].columnKey == "Checkmark") {
                        jsGridControl.SelectCellRange(recordIndex, recordIndex, 1, 1, false);
                    }
                    else {
                        jsGridControl.SelectRowRange(recordIndex, recordIndex, false);
                    }
                }
                else if (initInfo.selectedRows != null) {
                    for (var i = 0; i < initInfo.selectedRows.length; i++) {
                        jsGridControl.SelectRowRangeByKey(initInfo.selectedRows[i], initInfo.selectedRows[i], i != 0);
                    }
                }
                g_fAnimateListCSR = false;
                if (initInfo.fnCallback != null) {
                    initInfo.fnCallback(window[initInfo.controllerId]);
                }
                window.setTimeout(function() {
                    PostRenderAfterJSGridRender(renderCtx);
                }, 0);
            };

            if (typeof renderCtx.ListSchema.group2 == "string" || renderCtx.ListSchema.Collapse == "TRUE" || initInfo.stale) {
                SPGridFetchData(renderCtx.listName, renderCtx.view, renderCtx.clvp.PagingString(), null, null, callback, null, renderCtx.IsClientRendering);
            }
            else {
                if (initInfo.unfilteredHierarchyInfo != null) {
                    gridSerializer.UnfilteredHierarchy = initInfo.unfilteredHierarchyInfo;
                }
                if (renderCtx.ListData.ForceNoHierarchy) {
                    gridSerializer.UnfilteredHierarchy = null;
                }
                TranslateCSRtoJsGrid(renderCtx.ListData, gridSerializer, renderCtx.ListSchema, renderCtx);
                callback(gridSerializer);
            }
        });
    });
}
function TryRefreshGrid(viewGuid) {
    ExitGrid(viewGuid, true, function() {
        var initInfo = g_SPGridInitInfo[viewGuid];

        initInfo.stale = true;
        InitGridFromView(viewGuid, false);
    });
}
function ExitGrid(viewGuid, bNoRefresh, callbackFn) {
    var gridInitInfo = g_SPGridInitInfo[viewGuid];
    var myCtx = GetCtxFromView(viewGuid);
    var ganttControl = window[gridInitInfo.controllerId];
    var q = ganttControl.GetCLVPQString();
    var hInfo = ganttControl.GetUnfilteredHierarchyMap();

    ganttControl.TryDispose(function(dlgReturnValue) {
        gridInitInfo.initialized = false;
        myCtx.inGridMode = false;
        myCtx.leavingGridMode = true;
        var unfilteredHierarchy = null;

        if (dlgReturnValue != null && dlgReturnValue.markGridSerializerAsStale) {
            gridInitInfo.stale = true;
        }
        else if (hInfo != null) {
            var flattened = [{
                "Key": 0
            }];
            var indexInFlattenedHierarchy = {
                "0": 0
            };
            var flattenHierarchy = function(keys) {
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    var node = {};

                    node.Key = Number(key);
                    if (hInfo[key].parentKey != null) {
                        var parentIndex = indexInFlattenedHierarchy[hInfo[key].parentKey];

                        Sys.Debug.assert(parentIndex != null);
                        node.Parent = parentIndex;
                    }
                    if (hInfo[key].tag != null) {
                        node.Tag = hInfo[key].tag;
                    }
                    Sys.Debug.assert(indexInFlattenedHierarchy[key] == null);
                    indexInFlattenedHierarchy[key] = flattened.length;
                    flattened.push(node);
                    if (hInfo[key].childKeys != null) {
                        flattenHierarchy(hInfo[key].childKeys);
                    }
                }
            };

            flattenHierarchy(hInfo[0].childKeys);
            unfilteredHierarchy = flattened;
        }
        window[gridInitInfo.controllerId] = null;
        gridInitInfo.unfilteredHierarchyInfo = unfilteredHierarchy;
        var thead = document.getElementById("js-listviewthead-" + myCtx.wpq);

        thead.style.display = "";
        var aggBody = document.getElementById("agg" + myCtx.wpq);

        if (aggBody != null)
            aggBody.style.display = "";
        if (!bNoRefresh) {
            myCtx.clvp.RefreshPaging(q.toString());
        }
        if (callbackFn != null) {
            callbackFn();
        }
    });
}
function InitGridFromView(viewGuid, bNoRefresh) {
    var gridInitInfo = g_SPGridInitInfo[viewGuid];
    var myCtx = GetCtxFromView(viewGuid);

    InitGrid(gridInitInfo, myCtx, bNoRefresh);
}
function InitGrid(initInfo, ctxObj, bNoRefresh) {
    if (initInfo.initialized) {
        return;
    }
    initInfo.initialized = true;
    Sys.Debug.assert(ctxObj != null);
    Sys.Debug.assert(!ctxObj.inGridFullRender);
    Sys.Debug.assert(ctxObj.IsClientRendering);
    if (ctxObj == null || ctxObj.clvp == null)
        return;
    ctxObj.clvp.CancelAnyOutstandingRequest();
    ctxObj.inGridMode = true;
    ctxObj.enteringGridMode = true;
    initInfo.jsInitObj.spCsrRenderCtx = ctxObj;
    initInfo.jsInitObj.viewRootFolder = unescapeProperly(ctxObj.rootFolder);
    if (!bNoRefresh) {
        var pagingString = ctxObj.clvp.PagingString();

        ctxObj.queryString = "?" + (pagingString != null ? pagingString : "");
        if (ctxObj.CurrentSelectedItems > 0) {
            initInfo.selectedRows = [];
            for (var idx in ctxObj.dictSel) {
                var selectedItem = ctxObj.dictSel[idx];

                initInfo.selectedRows.push(selectedItem.id);
            }
        }
        var evt = {
            currentCtx: ctxObj,
            csrAjaxRefresh: true
        };

        AJAXRefreshView(evt, SP.UI.DialogResult.OK);
    }
}
function TranslateCSRtoJsGrid(csrJson, gridJson, csrSchema, renderCtx) {
    var csrFieldName;
    var i;
    var field;
    var csrToJsGridFieldKeyMap = {};
    var fieldType;
    var localizedData;
    var row;
    var translatedData;
    var translatedName;
    var unlocalizedData;
    var csrFieldInfo = {};
    var csrFields = csrSchema.Field;
    var csrFieldsLength = csrFields.length;
    var fieldInfo = {};
    var fields = gridJson.Fields;
    var fieldsLength = fields.length;
    var jsGridField = null;
    var rows = csrJson.Row;
    var rowsLength = rows.length;
    var customDataRowsLength = 0;
    var viewInfo = [];
    var groupLevel = 0;
    var level1GroupUnlocalizedData = null;
    var groupColumn1 = null;
    var groupColumn2 = null;
    var groupColumnName = null;
    var groupPrefix = null;
    var viewDepKey = null;
    var viewDepKeys = null;
    var groupCollapsed = false;
    var recordCount = 0;
    var bNoCSR = renderCtx == null;

    function SetHref(gridProperty, csrProperty) {
        if (typeof csrJson[csrProperty] == "string") {
            if (csrJson[csrProperty].substring(0, 1) == "?") {
                gridJson.AdditionalParams[gridProperty] = csrJson[csrProperty].substring(1);
            }
            else {
                var parts = csrJson[csrProperty].split("?");

                gridJson.AdditionalParams[gridProperty] = parts[1];
            }
        }
        else {
            gridJson.AdditionalParams[gridProperty] = null;
        }
    }
    SetHref("prevHref", "PrevHref");
    SetHref("nextHref", "NextHref");
    function SetRow(gridProperty, csrProperty) {
        if (typeof csrJson[csrProperty] == "string") {
            gridJson.AdditionalParams[gridProperty] = Number(csrJson[csrProperty]);
        }
        else if (typeof csrJson[csrProperty] == "number") {
            gridJson.AdditionalParams[gridProperty] = csrJson[csrProperty];
        }
        else {
            Sys.Debug.assert(csrJson[csrProperty] == null);
            gridJson.AdditionalParams[gridProperty] = null;
        }
    }
    SetRow("first", "FirstRow");
    SetRow("last", "LastRow");
    if (typeof csrSchema.group1 == "string") {
        groupLevel = 1;
        groupColumn1 = csrSchema.group1;
        groupPrefix = gridJson.MetaData.GroupingPrefix;
        viewDepKeys = [];
        if (typeof csrSchema.group2 == "string") {
            groupLevel = 2;
            groupColumn2 = csrSchema.group2;
        }
        gridJson.MetaData.GroupingLevel = groupLevel;
        groupColumnName = (gridJson.MetaData.GridOperationalConstantsFieldKeyMap[0] = gridJson.Columns[0].fieldKey);
        delete gridJson.RecordCount;
        delete gridJson.TopRecord;
    }
    for (i = 0; i < fieldsLength; i++) {
        field = fields[i];
        fieldInfo[field.fieldKey] = field;
    }
    for (i = 0; i < csrFieldsLength; i++) {
        field = csrFields[i];
        csrFieldInfo[field.RealFieldName] = field;
    }
    if (rowsLength > 0) {
        for (i = 0, row = null; i < rowsLength && (row == null || Boolean(row["CustomData."])); i++) {
            row = rows[i];
        }
        for (csrFieldName in row) {
            translatedName = TranslateCSRtoJsGridFieldName(csrFieldName, csrFieldInfo[csrFieldName]);
            csrToJsGridFieldKeyMap[csrFieldName] = translatedName;
            if (csrFieldInfo[csrFieldName] != null) {
                csrToJsGridFieldKeyMap[csrFieldInfo[csrFieldName]["Name"]] = translatedName;
            }
        }
        if (typeof csrJson.FilterLink == "string") {
            Sys.Debug.assert(csrJson.FilterLink.substring(0, 1) == "?");
            var filterLink = csrJson.FilterLink.substring(1);
            var qstring = new QstringStruct(filterLink);
            var autoFilterState = {};

            for (var key in qstring.filterParams) {
                var param = qstring.filterParams[key];
                var filterField = null;
                var filterValue = null;

                if (param["FilterField"] != null) {
                    Sys.Debug.assert(param["FilterValue"] != null);
                    filterField = param["FilterField"];
                    filterValue = param["FilterValue"];
                }
                else {
                    Sys.Debug.assert(param["FilterFields"] != null);
                    Sys.Debug.assert(param["FilterValues"] != null);
                    filterField = param["FilterFields"];
                    filterValue = param["FilterValues"];
                }
                filterField = csrToJsGridFieldKeyMap[unescapeProperly(filterField)];
                filterValue = unescapeProperly(filterValue);
                Sys.Debug.assert(filterField != null);
                autoFilterState[filterField] = filterValue;
            }
            gridJson.AutoFilterState = autoFilterState;
        }
    }
    if (Boolean(csrJson['SortField'])) {
        var jsGridSortField = csrToJsGridFieldKeyMap[csrJson['SortField']];

        if (jsGridSortField == null) {
            jsGridSortField = csrJson['SortField'];
        }
        gridJson['SortState'] = [{
            'fieldKey': jsGridSortField,
            'isDescending': csrJson['SortDir'] != 'ascending'
        }];
    }
    gridJson.LocalizedTable = [];
    gridJson.UnlocalizedTable = [];
    for (i = 0; i < rowsLength; i++) {
        row = rows[i];
        if (Boolean(row["CustomData."])) {
            customDataRowsLength++;
            continue;
        }
        recordCount++;
        if (groupLevel > 0) {
            var GetViewDepKey = function(groupColumn, groupTitle, level) {
                var groupIndexLevel = level == 2 ? "2" : "";

                return groupPrefix + row[groupColumn + ".groupindex" + groupIndexLevel] + "_" + groupTitle;
            };
            var MakeGroupRow = function(groupColumn, level) {
                var groupTitle;

                if (bNoCSR) {
                    groupTitle = groupColumn + ": " + String(row[groupColumn]);
                    if (level == 1) {
                        viewDepKey = groupPrefix + " " + groupColumn + ":" + String(row[groupColumn]);
                    }
                    else {
                        Sys.Debug.assert(level == 2);
                        viewDepKey = groupPrefix + " " + groupColumn1 + ":" + String(row[groupColumn1]) + " " + groupColumn2 + ":" + String(row[groupColumn2]);
                    }
                }
                else {
                    var groupTitleElem = document.createElement("div");

                    if (level == 1) {
                        groupTitleElem.innerHTML = RenderGroupEx(renderCtx, row, true);
                    }
                    else {
                        Sys.Debug.assert(level == 2);
                        var saveNewgroup = row[groupColumn1 + ".newgroup"];

                        row[groupColumn1 + ".newgroup"] = "0";
                        groupTitleElem.innerHTML = RenderGroup(renderCtx, row);
                        row[groupColumn1 + ".newgroup"] = saveNewgroup;
                    }
                    groupTitle = GetInnerText(groupTitleElem);
                    if (level == 1) {
                        viewDepKey = GetViewDepKey(groupColumn, groupTitle, 1);
                    }
                    else {
                        Sys.Debug.assert(level == 2);
                        viewDepKey = GetViewDepKey(groupColumn1, groupTitle, 1) + " " + GetViewDepKey(groupColumn2, groupTitle, 2);
                    }
                }
                Sys.Debug.assert(Array.indexOf(viewDepKeys, viewDepKey) == -1);
                localizedData = {};
                unlocalizedData = {
                    "ID": viewDepKey,
                    "_GRPDESC": Number(row[groupColumn + ".COUNT.group" + (level == 2 ? "2" : "")])
                };
                if (groupLevel == 2) {
                    unlocalizedData["_GRPLVL"] = level;
                }
                if (level == 2) {
                    Sys.Debug.assert(level1GroupUnlocalizedData != null);
                    level1GroupUnlocalizedData["_GRPDESC"]++;
                }
                else {
                    level1GroupUnlocalizedData = unlocalizedData;
                }
                unlocalizedData[groupColumnName] = (localizedData[groupColumnName] = groupTitle);
                gridJson.LocalizedTable.push(localizedData);
                gridJson.UnlocalizedTable.push(unlocalizedData);
                viewDepKeys.push(viewDepKey);
                viewInfo.push(viewDepKey);
            };

            if (row[groupColumn1 + ".newgroup"] == "1") {
                MakeGroupRow(groupColumn1, 1);
            }
            if (row[groupColumn2 + ".newgroup"] == "1") {
                MakeGroupRow(groupColumn2, 2);
            }
        }
        localizedData = {};
        unlocalizedData = {};
        viewInfo.push((TranslateCSRtoJsGridField("ID", csrFieldInfo["ID"], row, fieldInfo["ID"])).value);
        for (csrFieldName in row) {
            var csrField = csrFieldInfo[csrFieldName];
            var jsGridFieldName = csrField == null ? null : csrToJsGridFieldKeyMap[csrField.Name];

            jsGridField = jsGridFieldName == null ? null : fieldInfo[jsGridFieldName];
            translatedData = TranslateCSRtoJsGridField(csrFieldName, csrField, row, jsGridField);
            if (translatedData != null) {
                translatedName = csrToJsGridFieldKeyMap[csrFieldName];
                field = fieldInfo[translatedName];
                if (field != null) {
                    if (field.hasLocalizedValue) {
                        Sys.Debug.assert(translatedData.localizedValue != null);
                        localizedData[translatedName] = translatedData.localizedValue;
                    }
                    if (field.hasDataValue || groupLevel > 0 && translatedName == "Title") {
                        Sys.Debug.assert(translatedData.value != null);
                        unlocalizedData[translatedName] = translatedData.value;
                    }
                }
            }
        }
        if (!bNoCSR) {
            unlocalizedData.csrInfo = row;
        }
        gridJson.LocalizedTable.push(localizedData);
        gridJson.UnlocalizedTable.push(unlocalizedData);
    }
    if (!bNoCSR) {
        for (i = 0; i < gridJson.Fields.length; i++) {
            jsGridField = gridJson.Fields[i];
            jsGridField.csrInfo = csrFieldInfo[jsGridField.fieldKey];
        }
    }
    gridJson.ViewInfo = viewInfo;
    if (groupLevel > 0) {
        gridJson.ViewDepKeys = viewDepKeys;
    }
    else {
        gridJson.RecordCount = recordCount;
    }
    gridJson.AdditionalParams.last -= customDataRowsLength;
}
function TranslateCSRtoJsGridFieldName(csrFieldName, csrFieldInfo) {
    var fieldType = csrFieldInfo != null ? csrFieldInfo.FieldType : csrFieldName;

    switch (fieldType) {
    case "ContentTypeId":
        return "_ContentTypeId";
    case "File_x0020_Type":
        return "DocIcon";
    case "PermMask":
        return "Edit";
    }
    if (csrFieldInfo != null && typeof csrFieldInfo.RealFieldName == "string") {
        return csrFieldInfo.RealFieldName;
    }
    return csrFieldName;
}
function TranslatedCSRtoJsGridFieldData(value, localizedValue) {
    this.value = value;
    if (localizedValue != null) {
        this.localizedValue = localizedValue;
        this.localizedValueSetExplicitly = true;
    }
    else {
        this.localizedValue = value;
        this.localizedValueSetExplicitly = false;
    }
}
function TranslateCSRtoJsGridField(fieldName, csrFieldInfo, csrRow, jsGridFieldInfo) {
    var i;
    var fieldContents = csrRow[fieldName];

    if (jsGridFieldInfo != null && (jsGridFieldInfo.propertyTypeId == "SPMultilineText" || jsGridFieldInfo.propertyTypeId == "String" || jsGridFieldInfo.propertyTypeId == "SPTextMaxLength")) {
        Sys.Debug.assert(typeof fieldContents == "string" || fieldContents.constructor == String);
        fieldContents = STSHtmlDecode(fieldContents);
    }
    var fieldType = csrFieldInfo != null ? csrFieldInfo.FieldType : fieldName;

    if (fieldContents == null)
        throw "CSR JSON did not contain a value for expected field " + fieldName;
    if (fieldType == null)
        return null;
    switch (fieldType) {
    case "Boolean":
        var dataField = fieldName + ".value";

        if (fieldContents == null || fieldContents == "") {
            return null;
        }
        return new TranslatedCSRtoJsGridFieldData(csrRow[dataField], fieldContents);
    case "Computed":
        if (fieldName == "FileLeafRef") {
            EnsureScriptFunc("clienttemplates.js", "EnsureFileLeafRefName", function() {
                EnsureFileLeafRefName(csrRow);
            });
            return new TranslatedCSRtoJsGridFieldData(null, csrRow["FileLeafRef.Name"]);
        }
        else if (csrFieldInfo.Format == "Hyperlink") {
            return TranslateURLField(fieldName, fieldContents, csrRow);
        }
        break;
    case "File_x0020_Type":
        if (fieldContents == "")
            return null;
        return new TranslatedCSRtoJsGridFieldData(null, fieldContents);
    case "ID":
        return new TranslatedCSRtoJsGridFieldData(Number(fieldContents), String(fieldContents));
    case "Lookup":
    case "LookupMulti":
        if (fieldContents == "")
            return null;
        if (typeof fieldContents == "string") {
            return new TranslatedCSRtoJsGridFieldData(fieldContents);
        }
        else {
            var lookups = fieldContents;
            var lookupIds = [];

            fieldContents = null;
            for (i = 0; i < lookups.length; i++) {
                var lookup = lookups[i];
                var lookupId = lookup.lookupId;
                var lookupValue = lookup.lookupValue;

                if (fieldType == "Lookup")
                    return new TranslatedCSRtoJsGridFieldData(lookupId, lookupValue);
                if (fieldContents == null)
                    fieldContents = lookupValue;
                else
                    fieldContents = fieldContents + "; " + lookupValue;
                lookupIds.push(lookupId);
            }
        }
        return new TranslatedCSRtoJsGridFieldData(lookupIds, fieldContents);
    case "MultiChoice":
        if (m$.isArray(fieldContents)) {
            return new TranslatedCSRtoJsGridFieldData(fieldContents.join("; "));
        }
        else {
            return new TranslatedCSRtoJsGridFieldData("");
        }
    case "PermMask":
        var permNumber = parseInt(fieldContents.substring(fieldContents.length - 8), 16) | 0;

        return new TranslatedCSRtoJsGridFieldData(permNumber);
    case "URL":
        return TranslateURLField(fieldName, fieldContents, csrRow);
    case "User":
    case "UserMulti":
        var users = csrRow[fieldName];

        fieldContents = null;
        for (i = 0; i < users.length; i++) {
            var user = users[i];

            if (fieldContents == null)
                fieldContents = user.title;
            else
                fieldContents = fieldContents + "; " + user.title;
        }
        break;
    case "TaxonomyFieldType":
    case "TaxonomyFieldTypeMulti":
        if (typeof SP.UI != "undefined" && typeof SP.UI.Taxonomy != "undefined" && typeof SP.UI.Taxonomy.DataConverters != "undefined" && typeof SP.UI.Taxonomy.DataConverters.DataValueToInputValue == "function") {
            var localizedValue = SP.UI.Taxonomy.DataConverters.DataValueToInputValue(fieldContents, fieldType == "TaxonomyFieldTypeMulti");

            return new TranslatedCSRtoJsGridFieldData(fieldContents, localizedValue);
        }
        break;
    }
    if (fieldContents == null || fieldContents == "")
        return null;
    return new TranslatedCSRtoJsGridFieldData(fieldContents);
    function TranslateURLField(fname, contents, row) {
        if (contents == null || contents == "")
            return null;
        var address = contents;
        var display = row[fname + ".desc"];
        var urlObj = {
            "display": display,
            "address": address
        };

        return new TranslatedCSRtoJsGridFieldData(urlObj);
    }
}
function CreateColumn() {
    EnsureScriptFunc("ribbon", "SP.Ribbon.PageManager", function() {
        (SP.Ribbon.PageManager.get_instance()).executeRootCommand("CreateColumn");
    });
    return false;
}
function GetSPGanttFromCtx(ctxIn) {
    var gridInitInfo = g_SPGridInitInfo[ctxIn.view];

    if (gridInitInfo == null) {
        return null;
    }
    return window[gridInitInfo.controllerId];
}
var AllViews;

function ShowSaveAsNewViewDialog(listName, view, wpq, ManageListsPermission, ManagePersonalViewsPermission) {
    var SaveAsNewViewButton = document.getElementById("CSRSaveAsNewViewAnchor" + wpq);

    if (Boolean(SaveAsNewViewButton) && SaveAsNewViewButton.getAttribute("saveViewButtonDisabled") == "true")
        return;
    else if (Boolean(SaveAsNewViewButton))
        SaveAsNewViewButton.setAttribute("saveViewButtonDisabled", "true");
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var list = ((context.get_web()).get_lists()).getById(listName);
    var currentView = (list.get_views()).getById(view);

    AllViews = list.get_views();
    context.load(AllViews);
    context.load(currentView);
    context.executeQueryAsync(function() {
        var divElem = document.createElement("DIV");
        var innerHTMLStr = [];

        innerHTMLStr.push(Strings.STS.L_SaveViewDlgMsg + '<br/>');
        innerHTMLStr.push('<br/><input id="SaveAsNewViewName" style="width: 200px" type="text" value=' + StAttrQuote(currentView.get_title()) + ' onkeyup="ValidateNewOrUpdatedView(\'');
        innerHTMLStr.push(ManageListsPermission + '\', \'' + ManagePersonalViewsPermission + '\')" /><br/>');
        innerHTMLStr.push('<form id="SANVPrivacyForm"><br/>');
        innerHTMLStr.push('<label for="SANVprivacy-public" style="display: block;"><input style="vertical-align: bottom;" type="radio" id="SANVprivacy-public" name="SANVprivacy" value="public" checked="checked" onclick="ValidateNewOrUpdatedView(\'');
        innerHTMLStr.push(ManageListsPermission + '\', \'' + ManagePersonalViewsPermission + '\')" disabled="true"/>');
        innerHTMLStr.push(Strings.STS.L_SaveViewDlgPublicOpt);
        innerHTMLStr.push('</label>');
        innerHTMLStr.push('<label for="SANVprivacy-private" style="display: block;"><input style="vertical-align: bottom;" type="radio" id="SANVprivacy-private" name="SANVprivacy" value="personal" onclick="ValidateNewOrUpdatedView(\'');
        innerHTMLStr.push(ManageListsPermission + '\', \'' + ManagePersonalViewsPermission + '\')" disabled="true"/>');
        innerHTMLStr.push(Strings.STS.L_SaveViewDlgPersonalOpt);
        innerHTMLStr.push('</label></form><br/>');
        innerHTMLStr.push('<div class="ms-core-form-bottomButtonBox">');
        innerHTMLStr.push('<button id="ms-SaveBtnDismissDlg" class="ms-ButtonHeightWidth" ');
        innerHTMLStr.push('value="save" onclick="DismissSaveAsNewViewDialog(this,\'' + listName + '\', \'' + view + '\', \'' + wpq + '\')" disabled="true">');
        innerHTMLStr.push(Strings.STS.L_SaveButtonCaption);
        innerHTMLStr.push('</button>');
        innerHTMLStr.push('<button id="ms-CancelBtnDismissDlg" class="ms-ButtonHeightWidth" ');
        innerHTMLStr.push('value="cancel" onclick="DismissSaveAsNewViewDialog(this,\'' + listName + '\', \'' + view + '\', \'' + wpq + '\')">');
        innerHTMLStr.push(Strings.STS.L_CancelButtonCaption);
        innerHTMLStr.push('</button>');
        innerHTMLStr.push('</div>');
        divElem.innerHTML = innerHTMLStr.join('');
        var dopt = {
            html: divElem,
            title: Strings.STS.L_SaveViewDlgTitle,
            dialogReturnValueCallback: function() {
                if (Boolean(SaveAsNewViewButton))
                    SaveAsNewViewButton.setAttribute("saveViewButtonDisabled", "false");
            }
        };
        var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
        var ViewNameInput = document.getElementById("SaveAsNewViewName");

        if (Boolean(ViewNameInput)) {
            if (!currentView.get_personalView() && ManageListsPermission == "false" && ManagePersonalViewsPermission == "true" || currentView.get_personalView() && ManageListsPermission == "true" && ManagePersonalViewsPermission == "false")
                ViewNameInput.value = "";
        }
        ValidateNewOrUpdatedView(ManageListsPermission, ManagePersonalViewsPermission);
        var cancelButton = document.getElementById('ms-CancelBtnDismissDlg');

        if (Boolean(cancelButton))
            cancelButton.focus();
    }, function() {
        ULS.SendErrorMessageJS("inplview", "ShowSaveAsNewViewDialog failed");
    });
}
function DismissSaveAsNewViewDialog(btn, listName, view, wpq) {
    var dlg = SP.UI.ModalDialog.get_childDialog();

    if (Boolean(dlg)) {
        var result = SP.UI.DialogResult.cancel;

        if (btn.value == "save") {
            var viewName = (document.getElementById("SaveAsNewViewName")).value;

            if (GetExistingView(viewName) != null) {
                if (!confirm(StBuildParam(Strings.STS.L_SaveViewOverwriteDlgMsg, viewName)))
                    return;
            }
            var privacyRadioButtons = document.getElementById("SANVPrivacyForm");
            var privateView = false;

            if (privacyRadioButtons[1].checked)
                privateView = true;
            var retVal = {
                'name': viewName,
                'privacyOption': privateView
            };

            SaveThisView(listName, view, retVal);
            dlg.set_returnValue(retVal);
            result = SP.UI.DialogResult.OK;
        }
        dlg.close(result);
        var SaveAsNewViewButton = document.getElementById("CSRSaveAsNewViewAnchor" + wpq);

        if (Boolean(SaveAsNewViewButton))
            SaveAsNewViewButton.setAttribute("saveViewButtonDisabled", "false");
    }
}
function GetExistingView(inputViewName) {
    for (var i = 0; i < (AllViews.get_data()).length; i++) {
        var viewName = (AllViews.get_data())[i].get_title();

        if (inputViewName == viewName) {
            return (AllViews.get_data())[i];
        }
    }
    return null;
}
function ValidateNewOrUpdatedView(ManageListsPermission, ManagePersonalViewsPermission) {
    var privacyRadioButtons = document.getElementById('SANVPrivacyForm');

    if (ManageListsPermission == "true" && ManagePersonalViewsPermission == "true") {
        privacyRadioButtons[0].disabled = false;
        privacyRadioButtons[1].disabled = false;
    }
    else if (ManageListsPermission == "false" && ManagePersonalViewsPermission == "true") {
        privacyRadioButtons[0].checked = false;
        privacyRadioButtons[1].checked = true;
    }
    if (AllViews == null)
        return;
    var ErrorMsg = document.getElementById('SaveAsNewviewErrorMsg');
    var inputName = (document.getElementById('SaveAsNewViewName')).value;
    var SaveButton = document.getElementById('ms-SaveBtnDismissDlg');
    var existingView = GetExistingView(inputName);

    if (existingView != null) {
        var viewName = existingView.get_title();

        if (viewName == inputName) {
            var privacyOption = "public";
            var oppPrivacyOption = "personal";

            if (existingView.get_personalView()) {
                privacyOption = "personal";
                oppPrivacyOption = "public";
            }
            if (ManageListsPermission == "true" && ManagePersonalViewsPermission == "true") {
                if (existingView.get_personalView()) {
                    privacyRadioButtons[0].checked = false;
                    privacyRadioButtons[1].checked = true;
                }
                else {
                    privacyRadioButtons[0].checked = true;
                    privacyRadioButtons[1].checked = false;
                }
                privacyRadioButtons[0].disabled = true;
                privacyRadioButtons[1].disabled = true;
            }
            var ViewPrivacySelected = false;

            if (privacyRadioButtons[1].checked)
                ViewPrivacySelected = true;
            if (existingView.get_personalView() != ViewPrivacySelected) {
                SaveButton.disabled = true;
                return;
            }
            else {
                SaveButton.disabled = false;
                return;
            }
        }
    }
    SaveButton.disabled = false;
}
function SaveThisView(listName, view, retVal) {
    var context = SP.ClientContext.get_current();
    var list = ((context.get_web()).get_lists()).getById(listName);
    var url = document.location.href;

    url = list.saveAsNewView(view, retVal["name"], retVal["privacyOption"], url);
    context.load(list);
    context.executeQueryAsync(function() {
        url = url.get_value();
        STSNavigate(url);
    }, function() {
        ULS.SendErrorMessageJS("inplview", "SaveThisView failed");
    });
}
function SelectedItem() {
}
function SwapNode(node1, node2) {
    return node1.parentNode.replaceChild(node2, node1);
}
function CountDictionary(dictParam) {
    var i = 0;
    var k;

    for (k in dictParam)
        i++;
    return i;
}
function EncodeQueryStringAsHash(str) {
    return (str.replace(/-/g, '--')).replace(/&/g, '-');
}
function DecodeHashAsQueryString(str) {
    return (str.replace(/-/g, '&')).replace(/&&/g, '-');
}
function CLVP_InitializePrototype() {
    CLVP.prototype = {
        outstandingRequest: undefined,
        bRequestOutstanding: false,
        cctx: undefined,
        ctx: undefined,
        dsrc: null,
        fnEcbCallback: null,
        fRestore: false,
        inplUrl: null,
        isEcbInfo: false,
        isInserting: false,
        pagingTab: null,
        queueEcbInfo: [],
        rgehs: undefined,
        rgpag: null,
        rgpaging: null,
        rootFolder: null,
        rootFolderGuid: null,
        strGroupCache: null,
        strGroupName: null,
        tBody: null,
        tab: null,
        trEmpty: null,
        wpid: null,
        wpq: null,
        strHash: "",
        CancelAnyOutstandingRequest: CLVPCancelAnyOutstandingRequest,
        CacheEcbInfo: CLVPCacheEcbInfo,
        CacheGroupName: CLVPCacheGroupName,
        CheckinItem: CLVPCheckinItem,
        CheckoutItem: CLVPCheckoutItem,
        DeleteGroupNameCache: CLVPDeleteGroupNameCache,
        DeleteItemCore: CLVPDeleteItemCore,
        DiscardCheckoutItem: CLVPDiscardCheckoutItem,
        EnqueueEcbInfoRequest: CLVPEnqueueEcbInfoRequest,
        EnsureChangeContext: CLVPEnsureChangeContext,
        EnsureEcbInfo: CLVPEnsureEcbInfo,
        FilterString: CLVPFilterString,
        FindWebPartDiv: CLVPFindWebPartDiv,
        GetEcbInfo: CLVPGetEcbInfo,
        GetQueryString: CLVPGetQueryString,
        Init: CLVPInit,
        InplViewUrl: CLVPInplViewUrl,
        ModerateItem: CLVPModerateItem,
        RefreshInplViewUrl: CLVPRefreshInplViewUrl,
        InplViewUrlTrim: CLVPInplViewUrlTrim,
        InplViewUrlHash: CLVPInplViewUrlHash,
        InvalidateEcbInfo: CLVPInvalidateEcbInfo,
        IsInGroupCache: CLVPIsInGroupCache,
        ManageCopies: CLVPManageCopies,
        NoOutstandingECBRequests: CLVPNoOutstandingECBRequests,
        PagingString: CLVPPagingString,
        RefreshCore: CLVPRefreshCore,
        RefreshCurrent: CLVPRefreshCurrent,
        RefreshEcbInfo: CLVPRefreshEcbInfo,
        RefreshPaging: CLVPRefreshPaging,
        RefreshPagingEx: CLVPRefreshPagingEx,
        RehookPaging: CLVPRehookPaging,
        ResetSelection: CLVPResetSelection,
        ShowErrorDialog: CLVPShowErrorDialog,
        ShowPopup: CLVPShowPopup,
        SyncPagingTables: CLVPSyncPagingTables,
        WebPartId: CLVPWebPartId,
        RestoreNavigation: CLVPRestoreNavigation,
        GetQueryStringFromHash: CLVPGetQueryStringFromHash,
        FindTab: CLVPFindTab
    };
}
function CLVP(ctxParam) {
    this.ctx = ctxParam;
    ctxParam.clvp = this;
}
function CLVPInit() {
    if (false) {
        this.ctx.clvp = null;
    }
    var div = this.FindTab();

    if (div == null)
        return;
    this.wpq = div.id;
    this.pagingTab = document.getElementById("bottomPagingCell" + this.wpq.substr(7));
    if (this.tab != null && this.tab.className == "ms-emptyView") {
        var tr = GetAncestor(this.tab, "TR");

        this.trEmpty = tr.nextSibling;
    }
    if (this.ctx.rootFolder != null)
        this.rootFolder = unescapeProperly(this.ctx.rootFolder);
    if (!Boolean(this.rootFolder))
        this.rootFolder = GetUrlKeyValue("RootFolder");
    if (this.rootFolder.length == 0)
        this.rootFolder = null;
    var hashStr = this.GetQueryStringFromHash();

    if (!IsNullOrUndefined(hashStr))
        this.ctx.queryString = hashStr;
}
function CLVPFindTab() {
    var isDoclib = this.ctx.listBaseType == 1;
    var tabId = this.ctx.listName + "-" + this.ctx.view;
    var tabs = GetElementsByName(tabId);

    if (tabs.length == 0 && isDoclib) {
        tabId = "onetidDoclibViewTbl0";
        tabs = GetElementsByName(tabId);
    }
    var div = null;

    if (tabs.length == 0 && !isDoclib) {
        tabs = GetElementsByName("onetidDoclibViewTbl0");
    }
    if (tabs.length == 0)
        tabs = GetElementsByName("onetidDoclibViewTbl" + this.ctx.ctxId);
    var i;

    for (i = 0; i < tabs.length; i++) {
        var tab = tabs[i];

        div = tab;
        var wpid = null;

        while (div != null && (div.tagName != "DIV" || (wpid = div.getAttribute("WebPartID")) == null) && div.parentNode != null) {
            div = div.parentNode;
        }
        if (div != null) {
            if (wpid != null && this.ctx.view.indexOf(wpid.toUpperCase()) == 1) {
                this.tab = tab;
                this.wpq = div.id;
                break;
            }
        }
    }
    if (div == null || this.tab == null) {
        return null;
    }
    this.tab.clvp = this;
    return div;
}
function CLVPFindWebPartDiv(tab) {
    var div = tab;

    while (div != null && div.tagName != "DIV") {
        div = div.parentNode;
    }
    return div;
}
function CLVPRestoreNavigation() {
    var strHash = ajaxNavigate.getParam("InplviewHash" + this.WebPartId());

    if (strHash == null)
        strHash = '';
    if (!CompareUrls(this.strHash, strHash)) {
        var strInpl = '?' + DecodeHashAsQueryString(strHash);
        var strShowInGrid = GetUrlKeyValue("ShowInGrid", true, strInpl);

        if (strShowInGrid == "True") {
            InitGridFromView(this.ctx.view, true);
        }
        else if (this.ctx.inGridMode) {
            ExitGrid(this.ctx.view, true);
        }
        this.strHash = strHash;
        this.fRestore = true;
        var curRootFolder = GetRootFolder2(this);

        if (curRootFolder != null)
            strInpl = SetUrlKeyValue("RootFolder", unescapeProperly(curRootFolder), true, strInpl);
        this.RefreshPagingEx(strInpl, true, null);
    }
}
function CLVPGetQueryStringFromHash() {
    var strHash = ajaxNavigate.getParam("InplviewHash" + this.WebPartId());

    if (IsNullOrUndefined(strHash))
        return '';
    return '?' + DecodeHashAsQueryString(strHash);
}
function CLVPSyncPagingTables() {
    if (this.wpq == null)
        return;
    var tab = this.pagingTab;
    var topTab = document.getElementById("topPagingCell" + this.wpq.substr(7));

    if (tab == null) {
        if (topTab != null) {
            topTab.style.display = "none";
        }
        return;
    }
    if (topTab != null) {
        topTab.style.display = "";
        if (GetInnerText(topTab) != GetInnerText(tab))
            topTab.innerHTML = tab.innerHTML;
        var lnksTop = topTab.getElementsByTagName("A");
        var lnks = tab.getElementsByTagName("A");
        var i = 0;

        for (i = 0; i < lnks.length; i++) {
            lnksTop[i].onclick = lnks[i].onclick;
        }
    }
}
function CLVPRehookPaging(tBody) {
    if (typeof this.ctx.noAJAX != "undefined" && this.ctx.noAJAX) {
        return;
    }
    var tab = this.pagingTab;

    if (tab == null) {
        this.SyncPagingTables();
        return;
    }
    var lnks = tab.getElementsByTagName("A");
    var i;

    for (i = 0; i < lnks.length; i++) {
        var lnk = lnks[i];
        var str = typeof lnk.onclick != "undefined" ? String(lnk.onclick) : "";
        var separator = '"';

        str = str.substr(str.indexOf(separator) + 1);
        str = str.substr(0, str.indexOf(separator));
        if (tBody != null)
            str += "&IsGroupRender=TRUE";
        var clvp = this;
        var tBodyId;
        var strHref;

        if (tBody != null)
            tBodyId = tBody.id;
        else
            tBodyId = null;
        strHref = str;
        if (typeof tBodyId != "undefined" && typeof strHref != "undefined")
            UpdateOnClick(lnk, clvp, strHref, tBodyId);
    }
    if (tBody == null)
        this.SyncPagingTables();
    function UpdateOnClick(elem, clvpParam, addr, bodyId) {
        elem.onclick = function() {
            clvpParam.RefreshPaging(addr, bodyId);
            return false;
        };
    }
}
function CLVPFilterString() {
    return this.PagingString(["Filter", "Sort"]);
}
function CLVPPagingString(keyWhitelist) {
    if (this.rgpaging == null)
        return null;
    var key;
    var val;
    var rg = [];
    var isFirst = true;

    for (key in this.rgpaging) {
        var match = false;

        if (keyWhitelist == null) {
            match = true;
        }
        else {
            for (var whitelistedKey in keyWhitelist) {
                if (key.indexOf(whitelistedKey) == 0) {
                    match = true;
                    break;
                }
            }
        }
        if (match) {
            if (isFirst)
                isFirst = false;
            else
                rg.push("&");
            rg.push(key);
            rg.push("=");
            rg.push(this.rgpaging[key]);
        }
    }
    return rg.join("");
}
function CLVPRefreshPaging(strUrl, tBodyIdParam, fetchUrl) {
    if (tBodyIdParam != null) {
        this.tBody = document.getElementById(tBodyIdParam);
    }
    return this.RefreshPagingEx(strUrl, true, null, fetchUrl);
}
function RefreshPageToEx(evt, url, bForceSubmit) {
    var clvp = CLVPFromEvent(evt);

    if (clvp != null && clvp.ctx.IsClientRendering) {
        clvp.RefreshPaging(url);
        clvp.ctx.queryString = url;
        if ((typeof clvp.ctx.operationType == "undefined" || clvp.ctx.operationType == SPListOperationType.Default) && Boolean(clvp.ctx.ListData)) {
            var fromPage = clvp.ctx.ListData.FirstRow - 1;
            var toPage = Number(GetUrlKeyValue("PageFirstRow", false, url));

            if (!isNaN(fromPage) && !isNaN(toPage) && fromPage != toPage)
                fromPage < toPage ? (clvp.ctx.operationType = SPListOperationType.PagingRight) : (clvp.ctx.operationType = SPListOperationType.PagingLeft);
        }
    }
    else {
        SubmitFormPost(url, bForceSubmit);
    }
}
function CLVPRefreshPagingEx(strUrl, fResetPaging, cmd, fetchUrl) {
    var isFirstRow = GetUrlKeyValue("PageFirstRow", false, strUrl) == "1";

    if (isFirstRow)
        strUrl = RemoveOnlyPagingArgs(strUrl);
    var uri = new URI(strUrl, {
        disableEncodingDecodingForLegacyCode: true
    });
    var strQuery = uri.getQuery();
    var rgparams = strQuery.split("&");
    var i;
    var rg = [];

    if (cmd != null)
        rg.push("&Cmd=" + cmd);
    if (this.ctx.HasRelatedCascadeLists == 1 && this.ctx.CascadeDeleteWarningMessage == null) {
        rg.push("&CascDelWarnMessage=1");
    }
    if (fResetPaging || typeof this.rgpaging == "undefined" || this.rgpaging == null) {
        this.rgpaging = [];
        for (i = 0; i < rgparams.length; i++) {
            var rgp = rgparams[i].split("=");

            if (rgp[0] == "List" || rgp[0] == "View" || rgp[0] == "ID") {
                delete rgp;
                continue;
            }
            if (rgp.length > 1)
                this.rgpaging[rgp[0]] = rgp[1];
            delete rgp;
            rg.push("&");
            rg.push(rgparams[i]);
        }
    }
    else {
        var key;

        for (key in this.rgpaging) {
            if (key == "List" || key == "View" || key == "ID")
                continue;
            rg.push("&");
            rg.push(key);
            rg.push("=");
            rg.push(this.rgpaging[key]);
        }
    }
    var hidGrpBy = document.getElementById("GroupByWebPartID" + this.ctx.ctxId);

    if (hidGrpBy != null)
        rg.push("&WebPartID=" + hidGrpBy.getAttribute("webPartID"));
    if (this.strGroupName != null) {
        var strGroupString = GroupStringFromGroupName(this.strGroupName);

        if (strGroupString != null) {
            rg.push("&IsGroupRender=TRUE&DrillDown=1&GroupString=" + strGroupString);
        }
    }
    var inplViewUrl = new URI(this.InplViewUrl(), {
        disableEncodingDecodingForLegacyCode: true
    });
    var inplPath = inplViewUrl.getStringWithoutQueryAndFragment();
    var inplQuery = inplViewUrl.getQuery();
    var strNewParams = rg.join("");

    delete rg;
    var strInpl = inplPath + "?" + ReconcileQstringFilters(inplQuery, strNewParams);

    if ((GetUrlKeyValue("SortField", true, strInpl)).length == 0) {
        var strSortField = GetUrlKeyValue("SortField", true, window.location.href);

        if (strSortField.length > 0)
            strInpl = SetUrlKeyValue("SortField", strSortField, false, strInpl);
        var strSortDir = GetUrlKeyValue("SortDir", true, window.location.href);

        if (strSortDir.length > 0)
            strInpl = SetUrlKeyValue("SortDir", strSortDir, false, strInpl);
    }
    var strRoot = GetUrlKeyValue("RootFolder", true, strUrl);

    if (strRoot.length > 0 && (GetUrlKeyValue("RootFolder", true, strInpl)).length == 0)
        strInpl = SetUrlKeyValue("RootFolder", strRoot, false, strInpl);
    var strShowInGrid = GetUrlKeyValue("ShowInGrid", true, strInpl);

    if (strShowInGrid == "True" && !this.ctx.inGridMode) {
        strInpl = SetUrlKeyValue("ShowInGrid", "False", true, strInpl);
    }
    else if (strShowInGrid != "True" && this.ctx.inGridMode) {
        strInpl = SetUrlKeyValue("ShowInGrid", "True", true, strInpl);
    }
    if (fetchUrl)
        return strInpl;
    this.RefreshCore(strInpl);
    return undefined;
}
function CLVPResetSelection() {
    var ctxCur = this.ctx;
    var bNeedRefresh = true;

    this.CUIItemInfo = null;
    if (CountSelectedItems(ctxCur) > 0) {
        var dictLocal = ctxCur.dictSel;

        ctxCur.dictSel = [];
        ctxCur.CurrentSelectedItems = 0;
        var cUrl = window.location.href;

        if (cUrl.indexOf("Filter") == -1 && cUrl.indexOf("Sort") == -1) {
            var tab = this.tab;

            if (tab != null) {
                var rows = tab.rows;
                var ReselectRow = function(oneRow) {
                    var iidLocal = oneRow.getAttribute("iid");

                    return iidLocal != null && dictLocal[iidLocal] != null;
                };
                var lastIdx = GetLastSelectableRowIdx(tab, ReselectRow);

                if (rows != null && lastIdx > 0) {
                    var i;

                    for (i = 0; i < lastIdx; i++) {
                        var r = rows[i];
                        var iid = r.getAttribute("iid");

                        if (iid != null && dictLocal[iid] != null)
                            ToggleItemRowSelection2(ctxCur, r, true, false, false);
                    }
                    bNeedRefresh = false;
                    ToggleItemRowSelection2(ctxCur, rows[lastIdx], true, true, false);
                }
            }
        }
    }
    UpdateSelectAllCbx(ctxCur, true);
    if (bNeedRefresh)
        RefreshCommandUI();
}
function CLVPWebPartId() {
    if (this.wpid == null) {
        if (this.tab != null) {
            var div = this.tab;

            while (div != null && div.tagName != "DIV") {
                div = div.parentNode;
            }
            if (div != null) {
                if (div.getAttribute("WebPartID2") != null) {
                    this.wpid = div.getAttribute("WebPartID2");
                    return this.wpid;
                }
                if (div.getAttribute("WebPartID") != null) {
                    this.wpid = div.getAttribute("WebPartID");
                    return this.wpid;
                }
            }
        }
        this.wpid = (this.ctx.view.toLowerCase()).substring(1, this.ctx.view.length - 1);
    }
    return this.wpid;
}
function FixAggregate(renderCtx, listData, listSchema) {
    if (listData == null || listSchema == null)
        return;
    var aggregate = listSchema.Aggregate;

    if (aggregate != null && listData.Row.length > 0 && !listSchema.groupRender && !renderCtx.inGridMode) {
        var oldAggregateNode = document.getElementById("aggr" + renderCtx.wpq);
        var newAggregateStr = "<table>" + RenderAggregate(renderCtx, null, listData.Row[0], listSchema, null, true, aggregate) + "</table>";
        var scriptNode = document.getElementById("scriptBody" + renderCtx.wpq);
        var container = document.createElement("div");

        container.innerHTML = newAggregateStr;
        var newAggregateNode = container.firstChild.firstChild;

        oldAggregateNode.replaceChild(newAggregateNode.firstChild, oldAggregateNode.firstChild);
    }
}
function FixSortOrderIcon(renderCtx, listData, listSchema) {
    if (renderCtx == null || listData == null || listSchema == null)
        return;
    if (renderCtx.IsClientRendering) {
        var sortArrowSpan;

        if (listData.SortField != null) {
            sortArrowSpan = document.getElementById("diidSortArrowSpan" + renderCtx.ctxId + listData.SortField);
            if (sortArrowSpan != null) {
                var sortArrowImg = (sortArrowSpan.getElementsByTagName("img"))[0];

                if (sortArrowImg != null) {
                    if (listData.SortDir == "ascending") {
                        sortArrowSpan.className = "ms-sortarrowup-iconouter";
                        sortArrowImg.className = "ms-sortarrowup-icon";
                    }
                    else {
                        sortArrowSpan.className = "ms-sortarrowdown-iconouter";
                        sortArrowImg.className = "ms-sortarrowdown-icon";
                    }
                    sortArrowSpan.style.display = "";
                }
            }
        }
        var bShowFilterIcon;
        var filterSpan;

        for (var idx in listSchema.Field) {
            var field = listSchema.Field[idx];

            if (field.GroupField != null)
                continue;
            if (field.Name != listData.SortField) {
                sortArrowSpan = document.getElementById("diidSortArrowSpan" + renderCtx.ctxId + field.Name);
                if (sortArrowSpan != null) {
                    sortArrowSpan.style.display = "none";
                }
            }
            filterSpan = document.getElementById("diidFilterSpan" + renderCtx.ctxId + field.Name);
            if (filterSpan != null) {
                bShowFilterIcon = listData.FilterFields != null && listData.FilterFields.indexOf(';' + field.Name + ';') >= 0;
                filterSpan.style.display = bShowFilterIcon ? "" : "none";
            }
        }
    }
    else {
        FixSortOrderIcon_NonCSR(renderCtx, listData, listSchema);
    }
}
function FixSortOrderIcon_NonCSR(renderCtx, listData, listSchema) {
    var sortGif = '/_layouts/15/images/sort.gif';
    var rsortGif = '/_layouts/15/images/rsort.gif';

    if (listData == null || listSchema == null)
        return;
    if (listData.SortField != null) {
        var sortNode = document.getElementById("diidSort" + renderCtx.ctxId + listData.SortField);

        if (sortNode != null) {
            var lastNode = sortNode.lastChild;

            if (lastNode != null) {
                var imgNode = lastNode.previousSibling;

                if (imgNode != null && imgNode.tagName == "IMG" && (imgNode.src.substr(imgNode.src.length - sortGif.length) == sortGif || imgNode.src.substr(imgNode.src.length - rsortGif.length) == rsortGif))
                    imgNode.parentNode.removeChild(imgNode);
                var img = document.createElement("IMG");

                img.border = 0;
                if (listData.SortDir == "ascending") {
                    img.alt = Strings.STS.L_viewedit_onetidSortAsc;
                    img.src = "/_layouts/15/images/sort.gif?rev=23";
                }
                else {
                    img.alt = Strings.STS.L_viewedit_onetidSortDesc;
                    img.src = "/_layouts/15/images/rsort.gif?rev=23";
                }
                if (lastNode.tagName != "IMG") {
                    var blankImg = document.createElement("IMG");

                    blankImg.border = 0;
                    blankImg.src = '/_layouts/15/images/blank.gif';
                    lastNode = sortNode.appendChild(blankImg);
                }
                sortNode.insertBefore(img, lastNode);
            }
        }
    }
    for (var idx in listSchema.Field) {
        var field = listSchema.Field[idx];

        if (field.GroupField != null)
            continue;
        sortNode = document.getElementById("diidSort" + renderCtx.ctxId + field.Name);
        if (field.Name != listData.SortField) {
            if (sortNode != null) {
                lastNode = sortNode.lastChild;
                if (lastNode != null) {
                    imgNode = lastNode.previousSibling;
                    if (imgNode != null && imgNode.tagName == "IMG" && (imgNode.src.substr(imgNode.src.length - sortGif.length) == sortGif || imgNode.src.substr(imgNode.src.length - rsortGif.length) == rsortGif))
                        imgNode.parentNode.removeChild(imgNode);
                }
            }
        }
        if (sortNode != null) {
            var filterNode = sortNode.nextSibling;

            if (filterNode == null) {
                filterNode = document.createElement("IMG");
                filterNode.border = 0;
                sortNode.parentNode.appendChild(filterNode);
            }
            var bShowFilterIcon = listData.FilterFields != null && listData.FilterFields.indexOf(';' + field.Name + ';') >= 0;

            if (bShowFilterIcon)
                filterNode.src = '/_layouts/15/images/filter.gif';
            else
                filterNode.src = '/_layouts/15/images/blank.gif';
        }
    }
}
function CLVPCancelAnyOutstandingRequest() {
    var clvp = this;

    if (clvp.bRequestOutstanding && clvp.outstandingRequest != undefined) {
        if (clvp.isEcbInfo) {
            clvp.isEcbInfo = false;
            clvp.strGroupName = null;
        }
        clvp.outstandingRequest.isCancelled = true;
        clvp.outstandingRequest = undefined;
    }
    return false;
}
function EnableListAnimation(rCtx) {
    var fListCSRAnimationEnabled = SPAnimation.Settings.IsAnimationEnabled() && IsNullOrUndefined(rCtx.ListSchema.group1) && IsNullOrUndefined(rCtx.ListSchema.group2) && IsNullOrUndefined(rCtx.ListSchema.Aggregate) && rCtx.Templates.Body === RenderBodyTemplate && (rCtx.BaseViewID == 1 || rCtx.ListTemplateType == 101 && rCtx.ListSchema.IsDocLib == "1" && rCtx.BaseViewID == 50 || rCtx.ListTemplateType == 700 && (rCtx.BaseViewID == 51 || rCtx.BaseViewID == 52)) && !rCtx.clvp.fRestore && !rCtx.skipNextAnimation && !rCtx.inGridMode && !rCtx.leavingGridMode;

    rCtx.skipNextAnimation = false;
    return fListCSRAnimationEnabled;
}
function ReRenderListView(rCtx, strUrl, req) {
    var clvp = rCtx.clvp;
    var fListCSRAnimationEnabled = EnableListAnimation(rCtx);
    var fOldFooter = false;
    var fNewFooter = false;

    if (fListCSRAnimationEnabled)
        fOldFooter = rCtx.ListData.Row.length == 0 || Boolean(rCtx.ListData.NextHref);
    if (req != null) {
        rCtx.ListData = JSON.parse(req.responseText);
    }
    if (fListCSRAnimationEnabled)
        fNewFooter = rCtx.ListData.Row.length == 0 || Boolean(rCtx.ListData.NextHref);
    var fRenderHiddenFooter = fListCSRAnimationEnabled && fNewFooter && !fOldFooter;
    var templateBody = null;

    if (!(clvp.fRestore || rCtx.enteringGridMode || rCtx.leavingGridMode))
        templateBody = document.getElementById('scriptBody' + rCtx.wpq);
    RenderListView(rCtx, rCtx.wpq, templateBody, fListCSRAnimationEnabled, fRenderHiddenFooter);
    FixSortOrderIcon(rCtx, rCtx.ListData, rCtx.ListSchema);
    FixAggregate(rCtx, rCtx.ListData, rCtx.ListSchema);
    if (clvp.tab == null)
        clvp.Init();
    else if (templateBody == null)
        clvp.FindTab();
    if (clvp.fRestore || rCtx.enteringGridMode || rCtx.leavingGridMode) {
        clvp.fRestore = false;
        if (clvp.tab != null)
            RemoveCssClassFromElement(clvp.tab, 's4-hide-tr');
    }
    if (!Boolean(clvp.ctx.loadingAsyncData) && !clvp.fRestore && req != null || clvp.ctx.enteringGridMode || clvp.ctx.leavingGridMode) {
        var parts = {};
        var strHash = clvp.InplViewUrlHash(strUrl);

        parts["InplviewHash" + clvp.WebPartId()] = strHash;
        ajaxNavigate.update(null, parts);
        clvp.strHash = strHash;
    }
    if (Boolean(clvp.ctx.loadingAsyncData))
        clvp.ctx.loadingAsyncData = false;
    ctxInitItemState(rCtx);
    ClearSelectedItemsDict(rCtx);
    if (clvp.tab != null && (typeof clvp.tab.onmouseover == 'undefined' || clvp.tab.onmouseover == null))
        clvp.tab.onmouseover = clvp.ctx.TableMouseoverHandler;
    if (rCtx.SelectAllCbx != null && (typeof rCtx.SelectAllCbx.onfocus == 'undefined' || rCtx.SelectAllCbx.onfocus == null))
        rCtx.SelectAllCbx.onfocus = rCtx.TableCbxFocusHandler;
    clvp.InvalidateEcbInfo();
    clvp.ResetSelection();
    clvp.SyncPagingTables();
    if (fListCSRAnimationEnabled && templateBody != null)
        AnimateListDelta(rCtx, templateBody.parentNode);
    else if (typeof ProcessImn != "undefined") {
        imnCount = 0;
        bIMNOnloadAttached = false;
        ProcessImn();
    }
    if (typeof clvp.ctx.onViewReRenderCompleted == 'function') {
        var callback = clvp.ctx.onViewReRenderCompleted;

        clvp.ctx.onViewReRenderCompleted = null;
        if (callback != null) {
            callback(clvp.ctx);
        }
    }
    rCtx.operationType = SPListOperationType.Default;
    if (rCtx.leavingGridMode) {
        rCtx.leavingGridMode = false;
    }
}
function CLVPRefreshCore(strUrl, responseHandler) {
    if (ctxFilter == null)
        MenuHtc_hide();
    var req = new XMLHttpRequest();
    var additionalPostData = "";

    if (typeof this.ctx.overrideSelectCommand != "undefined") {
        additionalPostData = "&OverrideSelectCommand=" + this.ctx.overrideSelectCommand;
        strUrl = SetUrlKeyValue("IgnoreQString", "TRUE", false, strUrl);
    }
    var strRootFolder = GetUrlKeyValue("RootFolder", true, strUrl);

    if (strRootFolder.length > 0) {
        additionalPostData = additionalPostData + "&InplRootFolder=" + strRootFolder;
        strUrl = RemoveUrlKeyValue("RootFolder", strUrl);
    }
    req.open("POST", strUrl, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var clvp = this;
    var groupBody = clvp.tBody;

    clvp.tBody = null;
    clvp.focusInfo = null;
    clvp.CancelAnyOutstandingRequest();
    if (focusAcc != null && focusAcc.focusInCLVPTab != null)
        clvp.focusInfo = focusAcc;
    if (clvp.ctx.enteringGridMode && !clvp.fRestore) {
        ReRenderListView(clvp.ctx, strUrl, null);
        return;
    }
    clvp.outstandingRequest = req;
    clvp.bRequestOutstanding = true;
    req.onreadystatechange = function() {
        var i;
        var callback = null;

        if (req.readyState == 4 && typeof clvp.ctx.onDataRefreshCompleted == 'function') {
            callback = clvp.ctx.onDataRefreshCompleted;
            clvp.ctx.onDataRefreshCompleted = null;
        }
        if ((typeof req.isCancelled == 'undefined' || req.isCancelled != true) && req.readyState == 4) {
            if (callback != null)
                callback(clvp.ctx);
            try {
                req.onreadystatechange = null;
            }
            catch (e) { }
            clvp.bRequestOutstanding = false;
            var reqStatus = 0;

            try {
                reqStatus = req.status;
            }
            catch (e) { }
            if (reqStatus == 0)
                return;
            var strInner = req.responseText;
            var uri = Boolean(clvp.ctx.queryString) ? new URI(clvp.ctx.queryString, {
                disableEncodingDecodingForLegacyCode: true
            }) : null;

            if (uri !== null && uri.getQuery() !== "") {
                var SaveThisViewButton = document.getElementById("CSRSaveAsNewViewDiv" + clvp.ctx.wpq);

                if (Boolean(SaveThisViewButton))
                    SaveThisViewButton.style.visibility = "visible";
            }
            if (reqStatus == 601) {
                if (typeof clvp.ctx.onRefreshFailed == 'function') {
                    clvp.ctx.onRefreshFailed(clvp.ctx, req);
                    clvp.ctx.onRefreshFailed = null;
                }
                else {
                    alert(strInner);
                }
                return;
            }
            if (typeof responseHandler === 'function') {
                responseHandler(strUrl, req.responseText);
                return;
            }
            if (clvp.isEcbInfo) {
                clvp.CacheEcbInfo(strInner);
                clvp.isEcbInfo = false;
                clvp.strGroupName = null;
                if (clvp.queueEcbInfo.length > 0) {
                    while (clvp.EnsureEcbInfo(null, null, clvp.queueEcbInfo.shift()) != null && clvp.queueEcbInfo.length > 0) { }
                }
                return;
            }
            var oldListData = null;

            if (groupBody == null && clvp.ctx.IsClientRendering) {
                var rCtx = clvp.ctx;

                ReRenderListView(rCtx, strUrl, req);
                g_ExpGroupTable = [];
                ExpDataViewGroupOnPageLoad();
                return;
            }
            else if (groupBody != null && clvp.ctx.IsClientRendering) {
                rCtx = clvp.ctx;
                oldListData = rCtx.ListData;
                rCtx.ListData = JSON.parse(req.responseText);
                var listSchema = rCtx.ListSchema;
                var group1 = listSchema.group1;
                var group2 = listSchema.group2;
                var collapse = listSchema.Collapse;

                listSchema.groupRender = true;
                listSchema.group1 = null;
                listSchema.group2 = null;
                listSchema.Collapse = null;
                var oldHeaderTemplate = rCtx.Templates.Header;

                rCtx.Templates.Header = '';
                SPClientRenderer._ExecuteRenderCallbacks(rCtx, 'OnPreRender');
                strInner = SPClientRenderer.RenderCore(rCtx);
                if (rCtx.Templates.Footer == '')
                    rCtx.Templates.Footer = RenderFooterTemplate;
                strInner += rCtx.RenderFooter(rCtx);
                rCtx.Templates.Header = oldHeaderTemplate;
                listSchema.group1 = group1;
                listSchema.group2 = group2;
                listSchema.Collapse = collapse;
                listSchema.groupRender = null;
                if (typeof m$ != "undefined")
                    rCtx.ListData = MergeListData(oldListData, rCtx.ListData);
            }
            var div = document.createElement("DIV");
            var tid = clvp.tab.id;

            if (clvp.tab.tagName == "DIV" && typeof clvp.tab.tabid != "undefined")
                tid = clvp.tab.tabid;
            var pid = Boolean(clvp.pagingTab) ? clvp.pagingTab.id : null;

            div.style.visibility = "hidden";
            div.innerHTML = strInner;
            var oldFilterIfrm = document.getElementById("FilterIframe" + clvp.ctx.ctxId);
            var newIfrms = div.getElementsByTagName("IFRAME");
            var idx;
            var newFilterIfrm = null;

            for (idx = 0; idx < newIfrms.length; idx++) {
                if (newIfrms[idx].id == "FilterIframe" + clvp.ctx.ctxId) {
                    newFilterIfrm = newIfrms[idx];
                    break;
                }
            }
            if (oldFilterIfrm != null && newFilterIfrm != null) {
                var td = oldFilterIfrm.parentNode;

                td.removeChild(oldFilterIfrm);
                td.appendChild(newFilterIfrm);
            }
            document.body.appendChild(div);
            var evalSafeClvp = clvp;

            eval("ctx" + clvp.ctx.ctxId + ".clvp = evalSafeClvp;");
            var rgscripts = ExpColGroupScripts(strInner);
            var ppid = 'previewpanetable' + clvp.ctx.ctxId;
            var ppold = document.getElementById(ppid);

            if (ppold != null)
                ppold.id = '';
            clvp.tab.id = "";
            var hid = document.getElementById("hidRootFolder");

            if (hid != null) {
                clvp.rootFolder = hid.value;
                if (hid.value.indexOf('?') >= 0)
                    debugger;
            }
            var hidFolderGuid = document.getElementById("hidRootFolderGuid");

            if (hidFolderGuid != null)
                clvp.rootFolderGuid = hidFolderGuid.value;
            var tabs;

            if (groupBody != null && clvp.ctx.IsClientRendering)
                tabs = div.childNodes;
            else
                tabs = GetElementsByName(tid);
            if (tabs.length == 0) {
                if (tid == "onetidDoclibViewTbl0")
                    tabs = GetElementsByName(clvp.ctx.listName + "-" + clvp.ctx.view);
                else
                    tabs = GetElementsByName("onetidDoclibViewTbl0");
            }
            var tabNew = null;
            var pagNew = document.getElementById("bottomPagingCell");
            var trNew = null;

            if (tabs.length == 1)
                tabNew = tabs[0];
            else {
                for (i = 0; i < tabs.length; i++) {
                    tabNew = tabs[i];
                    var divNew = clvp.FindWebPartDiv(tabNew);

                    if (divNew == div)
                        break;
                }
                if (i == tabs.length)
                    tabNew = null;
            }
            if (tabNew == null) {
                SwapNode(clvp.tab, div);
                div.style.visibility = "visible";
                return;
            }
            if (tabNew.className == "ms-emptyView") {
                trNew = GetAncestor(tabNew, "TR");
                trNew = trNew.nextSibling;
            }
            var groupRender = false;

            if (groupBody != null) {
                groupRender = true;
                if (groupBody.getAttribute("isLoaded") != null) {
                    groupBody.setAttribute("isLoaded", "true");
                    clvp.tab.id = tid;
                    if (typeof clvp.tab.onmouseover == 'undefined' || clvp.tab.onmouseover == null)
                        clvp.tab.onmouseover = clvp.ctx.TableMouseoverHandler;
                    if (clvp.ctx.SelectAllCbx != null && (typeof clvp.ctx.SelectAllCbx.onfocus == 'undefined' || clvp.ctx.SelectAllCbx.onfocus == null))
                        clvp.ctx.SelectAllCbx.onfocus = clvp.ctx.TableCbxFocusHandler;
                    if (!clvp.ctx.StateInitDone)
                        ctxInitItemState(clvp.ctx);
                    var objChildren = groupBody.childNodes;

                    for (i = objChildren.length - 1; i >= 0; i--) {
                        var objToRemove = objChildren[i];

                        if (objToRemove.tagName == "TR" && ItemIsSelectable(objToRemove))
                            clvp.ctx.TotalListItems--;
                        groupBody.removeChild(objToRemove);
                    }
                    var selectableNodes = 0;
                    var tBodyArray = tabNew.getElementsByTagName("TBODY");

                    if (tBodyArray.length >= 1) {
                        objChildren = tBodyArray[0].childNodes;
                        var node = null;

                        for (i = objChildren.length - 1; i >= 0; i--) {
                            var objToInsert = objChildren[i];

                            if (i == 0 && objToInsert.className.startsWith("ms-viewheadertr"))
                                continue;
                            if (objToInsert.tagName == "TR" && ItemIsSelectable(objToInsert)) {
                                selectableNodes++;
                                clvp.ctx.TotalListItems++;
                            }
                            node = groupBody.insertBefore(objToInsert, node);
                        }
                        if (pagNew != null) {
                            var pagingTable = GetAncestor(pagNew, "TABLE");
                            var curPagTab = groupBody.nextSibling;

                            if (curPagTab == null || curPagTab.tagName != "TBODY" || curPagTab.id != groupBody.id + "page" || curPagTab.firstChild == null || curPagTab.firstChild.tagName != "TR") {
                                curPagTab = document.createElement("TBODY");
                                curPagTab.id = groupBody.id + "page";
                                curPagTab = groupBody.parentNode.insertBefore(curPagTab, groupBody.nextSibling);
                                var tr = document.createElement("TR");

                                tr = curPagTab.appendChild(tr);
                            }
                            var trNode = curPagTab.firstChild;

                            if (trNode.firstChild != null)
                                trNode.removeChild(trNode.firstChild);
                            pagNew.colSpan = 100;
                            pagNew.id = pagNew.id + clvp.wpq.substr(7) + groupBody.id;
                            pagNew = trNode.appendChild(pagNew);
                        }
                        groupBody.setAttribute("selectableRows", String(selectableNodes));
                        UpdateCtxLastSelectableRow(clvp.ctx, clvp.tab);
                    }
                    clvp.InvalidateEcbInfo();
                    clvp.ResetSelection();
                }
            }
            document.body.removeChild(div);
            if (pagNew != null) {
                var tab = clvp.pagingTab;

                clvp.pagingTab = pagNew;
                clvp.RehookPaging(groupBody);
                clvp.pagingTab = tab;
            }
            if (typeof ProcessImn != "undefined") {
                imnCount = 0;
                bIMNOnloadAttached = false;
                ProcessImn();
            }
            if (groupRender) {
                g_ExpGroupInProgress = false;
                g_ExpInitializing = false;
                if (g_ExpGroupXSLTQueue.length > 0) {
                    ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), "true");
                }
            }
            if (!g_ExpGroupInProgress && clvp.queueEcbInfo.length > 0) {
                clvp.EnsureEcbInfo(null, null, clvp.queueEcbInfo.shift());
            }
            if (clvp != null && clvp.focusInfo != null) {
                if (clvp.focusInfo.focusInCLVPTab != null && clvp.focusInfo.focusInCLVPTab == true) {
                    var focusTabl = clvp.tab;
                    var focusBack = null;

                    if (focusTabl != null && clvp.focusInfo.tagName != null && clvp.focusInfo.id != null) {
                        var focusArray = focusTabl.getElementsByTagName(clvp.focusInfo.tagName);

                        for (i = 0; i < focusArray.length; i++) {
                            if (focusArray[i].id == clvp.focusInfo.id) {
                                focusBack = focusArray[i];
                                break;
                            }
                        }
                    }
                    if (focusBack != null && focusBack.tagName != "A") {
                        var anchorList = focusBack.getElementsByTagName("A");
                        var anchorListLen = anchorList.length;

                        if (anchorListLen > 0)
                            focusBack = anchorList[anchorListLen - 1];
                    }
                    if (focusBack != null) {
                        if (typeof focusBack.setActive != 'undefined' && focusBack.setActive != null)
                            focusBack.setActive();
                        else if (focusBack.focus != null)
                            focusBack.focus();
                    }
                    focusAcc = null;
                }
            }
            if (groupBody != null && clvp.ctx.IsClientRendering)
                SPClientRenderer._ExecuteRenderCallbacks(rCtx, 'OnPostRender');
        }
    };
    var sendRequest = function() {
        req.send(additionalPostData);
    };

    if (clvp.ctx.inGridMode && !clvp.ctx.enteringGridMode && !clvp.isEcbInfo) {
        ExitGrid(clvp.ctx.view, true, function() {
            clvp.ctx.inGridMode = true;
            clvp.ctx.leavingGridMode = false;
            sendRequest();
        });
        return;
    }
    sendRequest();
}
var SPListOperationType;

function AnimateListDelta(context, table) {
    var fAnimate = g_fAnimateListCSR && IsVisible(table);
    var contextId = context.ctxId;
    var tbodies = FetchTableBodies(table);
    var oldtbody = tbodies.oldbody;
    var newtbody = tbodies.newbody;
    var footerTable = document.getElementById("scriptPaging" + context.wpq);

    if (oldtbody == null && newtbody == null)
        return;
    if (context.operationType == SPListOperationType.PagingRight || context.operationType == SPListOperationType.PagingLeft) {
        if (fAnimate) {
            var pagingAnimator = new SPAnimationUtility.TableAnimator(table);

            pagingAnimator.AnimatePaging(context.operationType == SPListOperationType.PagingRight, footerTable, function() {
                FixupTable(null, newtbody, footerTable, contextId);
            });
        }
        else
            FixupTable(oldtbody, newtbody, footerTable, contextId);
    }
    else {
        if (Boolean(newtbody) && fAnimate) {
            var sortAnimator = new SPAnimationUtility.TableAnimator(table);

            sortAnimator.AnimateSort(oldtbody, newtbody, function() {
                FixupTable(null, newtbody, footerTable, contextId);
            });
        }
        else
            FixupTable(oldtbody, newtbody, footerTable, contextId);
    }
    g_fAnimateListCSR = true;
    return;
}
function FetchTableBodies(table) {
    var oldtbody = table.firstChild;

    while (oldtbody != null && oldtbody.nodeName != "TBODY")
        oldtbody = oldtbody.nextSibling;
    var newtbody;

    if (oldtbody == null) {
        newtbody = null;
    }
    else if (oldtbody.style.display == "none") {
        newtbody = oldtbody;
        oldtbody = null;
    }
    else {
        newtbody = oldtbody.nextSibling;
    }
    return {
        oldbody: oldtbody,
        newbody: newtbody
    };
}
function IsVisible(element) {
    var fHidden = element.offsetWidth == 0 || element.offsetHeight == 0 || element.style.visibility == "hidden";

    return !fHidden;
}
function FixupTable(oldTbody, newTbody, footer, contextId) {
    var table = Boolean(oldTbody) ? oldTbody.parentNode : newTbody.parentNode;

    if (table != null && table.nodeName == "TABLE") {
        if (Boolean(oldTbody) && oldTbody.nodeName == "TBODY") {
            table.removeChild(oldTbody);
        }
        if (Boolean(newTbody) && newTbody.nodeName == "TBODY") {
            newTbody.style.display = "";
        }
        EnsureSelectionHandler(null, table, contextId);
    }
    if (typeof ProcessImn != "undefined") {
        imnCount = 0;
        bIMNOnloadAttached = false;
        ProcessImn();
    }
    if (footer != null && footer.style.display == "none")
        footer.style.display = "";
}
function CLVPRefreshCurrent() {
    var url = ajaxNavigate.get_href();

    url = FixUrlFromClvp2(this, url, false);
    return this.RefreshPagingEx(url, false, null, true);
}
function CLVPGetQueryString() {
    if (this.tab != null && this.tab.getAttribute("FilterLink") != null)
        return this.tab.getAttribute("FilterLink");
    else
        return ajaxNavigate.get_href();
}
function CLVPRefreshEcbInfo(strGroupName) {
    var url = this.GetQueryString();

    url = FixUrlFromClvp2(this, url, false);
    this.isEcbInfo = true;
    this.strGroupName = strGroupName;
    var clvp = this;

    this.RefreshPagingEx(url, false, "EcbView");
}
function CLVPCacheEcbInfo(strHtml) {
    if (this.ctx.HasRelatedCascadeLists == 1 && this.ctx.CascadeDeleteWarningMessage == null) {
        var cdBeginTag = '<CascadeDeleteWarningMessage>';
        var cdEndTag = '</CascadeDeleteWarningMessage>';

        if (strHtml.startsWith(cdBeginTag)) {
            var idx = strHtml.indexOf(cdEndTag);

            if (idx !== -1) {
                this.ctx.CascadeDeleteWarningMessage = strHtml.substring(cdBeginTag.length, idx);
                strHtml = strHtml.substring(idx + cdEndTag.length);
            }
        }
    }
    var div = document.createElement("DIV");

    div.innerHTML = strHtml;
    div.style.display = 'none';
    var tbs = div.getElementsByTagName("TABLE");
    var tb;
    var i;
    var tbOriginal = null;

    if (this.strGroupName != null) {
        var oid = "ecbtab_ctx" + this.ctx.ctxId;

        tbOriginal = document.getElementById(oid);
    }
    for (i = 0; i < tbs.length; i++) {
        tb = tbs[i];
        if (this.tab != null && tb.id == this.tab.id) {
            if (tbOriginal == null)
                tb.id = "ecbtab_ctx" + this.ctx.ctxId;
            else
                tb.id = "ecbtab_ctx" + this.ctx.ctxId + "_" + this.strGroupName;
            var rows = tb.rows;

            if (rows.length > 0 && !rows[0].className.indexOf('ms-viewheadertr'))
                tb.deleteRow(0);
            tb.style.display = 'none';
            this.tab.appendChild(tb);
            var dictLocal;

            if (tbOriginal == null)
                dictLocal = [];
            else
                dictLocal = typeof tbOriginal.dict == 'undefined' ? undefined : tbOriginal.dict;
            var ds = tb.getElementsByTagName("DIV");
            var j;

            for (j = 0; j < ds.length; j++) {
                var dLocal = ds[j];

                if (dLocal.id != "")
                    dictLocal[dLocal.id] = dLocal;
            }
            if (tbOriginal == null)
                tb.dict = dictLocal;
            if (this.strGroupName != null)
                this.CacheGroupName(this.strGroupName);
            break;
        }
    }
    if (this.fnEcbCallback != null && this.queueEcbInfo.length == 0) {
        this.fnEcbCallback();
        this.fnEcbCallback = null;
    }
}
function CLVPEnsureEcbInfo(fn, args, strGroupName) {
    var oid = "ecbtab_ctx" + this.ctx.ctxId;
    var o = document.getElementById(oid);

    if (o == null && this.tab != null && this.tab.parentNode == null) {
        var i;

        for (i = 0; i < this.tab.childNodes.length; i++) {
            var child = this.tab.childNodes[i];

            if (child.id == oid)
                o = child;
        }
    }
    if (o != null && strGroupName != null) {
        if (!this.IsInGroupCache(strGroupName))
            o = null;
    }
    if (o != null) {
        if (typeof fn == "function" && this.NoOutstandingECBRequests())
            fn(args);
        return o;
    }
    if (fn != null && this.fnEcbCallback == null)
        this.fnEcbCallback = function() {
            fn(args);
        };
    if (this.isEcbInfo || this.bRequestOutstanding) {
        if (!this.isEcbInfo || strGroupName != null && strGroupName != this.strGroupName)
            this.EnqueueEcbInfoRequest(strGroupName);
        return null;
    }
    this.RefreshEcbInfo(strGroupName);
    return null;
}
function CLVPInvalidateEcbInfo() {
    var oid = "ecbtab_ctx" + this.ctx.ctxId;
    var o = document.getElementById(oid);

    if (o != null && o.parentNode != null) {
        o.parentNode.removeChild(o);
        this.DeleteGroupNameCache();
    }
}
function CLVPGetEcbInfo(iid) {
    var tab = this.EnsureEcbInfo();

    if (tab != null) {
        if (typeof tab.dict != "undefined" && tab.dict != null)
            return tab.dict[iid];
    }
    return null;
}
function CLVPEnsureChangeContext() {
    if (this.cctx == null) {
        this.cctx = new SP.ClientContext(null);
    }
}
function CLVPDeleteItemCore(itemId) {
    var isDoclib = this.ctx.listBaseType == 1;

    this.EnsureChangeContext();
    var itm = null;

    if (typeof this.rgehs == "undefined")
        this.rgehs = [];
    var ehs;
    var iehs;

    ehs = new SP.ExceptionHandlingScope(this.cctx);
    this.rgehs.push(ehs);
    iehs = ehs.startScope();
    (this.cctx.get_pendingRequest()).set_navigateWhenServerRedirect(true);
    var list = ((this.cctx.get_web()).get_lists()).getById(this.ctx.listName);

    if (this.ctx.ExternalDataList)
        itm = list.getItemById(String(itemId));
    else
        itm = list.getItemById(parseInt(itemId));
    if (isDoclib) {
        itm.retrieve("FileLeafRef");
        ehs.itmContext = itm;
    }
    var fRecycle = this.ctx.RecycleBinEnabled && !this.ctx.ExternalDataList;

    if (fRecycle)
        itm.recycle();
    else
        itm.deleteObject();
    this.changePending = true;
    iehs.dispose();
}
function CLVPCheckoutItem(itemId, fsobjtype) {
    this.EnsureChangeContext();
    if (typeof this.rgehs == "undefined")
        this.rgehs = [];
    var ehs;
    var iehs;
    var itm = null;

    if (fsobjtype != "0")
        return;
    ehs = new SP.ExceptionHandlingScope(this.cctx);
    this.rgehs.push(ehs);
    iehs = ehs.startScope();
    itm = (((this.cctx.get_web()).get_lists()).getById(this.ctx.listName)).getItemById(Number(itemId));
    itm.retrieve("FileLeafRef");
    ehs.itmContext = itm;
    var fileObj = itm.get_file();

    fileObj.checkOut();
    iehs.dispose();
    this.changePending = true;
}
function CLVPDiscardCheckoutItem(itemId, fsobjtype) {
    this.EnsureChangeContext();
    if (typeof this.rgehs == "undefined")
        this.rgehs = [];
    var itm = null;
    var ehs;
    var iehs;

    if (fsobjtype != "0")
        return;
    ehs = new SP.ExceptionHandlingScope(this.cctx);
    this.rgehs.push(ehs);
    iehs = ehs.startScope();
    itm = (((this.cctx.get_web()).get_lists()).getById(this.ctx.listName)).getItemById(Number(itemId));
    itm.retrieve("FileLeafRef");
    ehs.itmContext = itm;
    var fileObj = itm.get_file();
    var ecb = this.GetEcbInfo(itemId);

    if (ecb != null && ecb.getAttribute("COut") == '1') {
        try {
            var url = this.ctx.HttpRoot + ecb.getAttribute("Url");
            var stsOpen = StsOpenEnsureEx("SharePoint.OpenDocuments.3");

            if (stsOpen != null && typeof stsOpen.DiscardLocalCheckout == 'function') {
                stsOpen.DiscardLocalCheckout(url);
            }
        }
        catch (e) { }
    }
    else {
        fileObj.undoCheckOut();
    }
    this.changePending = true;
    iehs.dispose();
}
function CLVPCheckinItem(itemId, fsobjtype, args) {
    this.EnsureChangeContext();
    if (typeof this.rgehs == "undefined")
        this.rgehs = [];
    var itm = null;
    var ehs;
    var iehs;

    if (fsobjtype != "0")
        return;
    ehs = new SP.ExceptionHandlingScope(this.cctx);
    this.rgehs.push(ehs);
    iehs = ehs.startScope();
    itm = (((this.cctx.get_web()).get_lists()).getById(this.ctx.listName)).getItemById(Number(itemId));
    itm.retrieve("FileLeafRef");
    ehs.itmContext = itm;
    var fileObj = itm.get_file();
    var ecb = this.GetEcbInfo(itemId);

    if (ecb != null && ecb.getAttribute("COut") == '1') {
        try {
            var url = this.ctx.HttpRoot + ecb.getAttribute("Url");
            var stsOpen = StsOpenEnsureEx("SharePoint.OpenDocuments.3");

            if (stsOpen != null && typeof stsOpen.CheckinDocument == 'function') {
                if (args.kco != null)
                    stsOpen.CheckinDocument(url, args.cit, args.cmt, true);
                else
                    stsOpen.CheckinDocument(url, args.cit, args.cmt);
            }
        }
        catch (e) { }
    }
    else {
        fileObj.checkIn(args.cmt, args.cit);
        if (args.kco)
            fileObj.checkOut();
        this.changePending = true;
    }
    iehs.dispose();
}
function CLVPManageCopies(itemId, fsobjtype) {
    if (fsobjtype != "0")
        return;
    var ecb = this.GetEcbInfo(itemId);

    if (ecb != null && ecb.getAttribute("Url") != null) {
        var url = this.ctx.HttpRoot + "/_layouts/15/managecopies.aspx?ItemUrl=" + escapeProperly(ecb.getAttribute("Url")) + "&Source=" + GetSource();
        var ctxT = window["ctx" + this.ctx.ctxId];

        if (ctxT != null && ctxT.clvp != null) {
            var clvp = ctxT.clvp;
            var urlT = FixUrlFromClvp(clvp, url);

            if (FV4UI()) {
                clvp.ShowPopup(urlT);
                return;
            }
        }
        STSNavigate(url);
    }
}
function CLVPShowErrorDialog(callback) {
    var i;
    var rgerr = [];
    var okButton = null;
    var firstExceptionFound = false;

    for (i in this.rgehs) {
        var ehs = this.rgehs[i];

        if (ehs.get_hasException() && !(this.ctx.listTemplate == 171 && ehs.get_serverErrorCode() == -2147024809)) {
            var errorClass = "s4-dlg-err-itm";

            if (!firstExceptionFound) {
                errorClass = "s4-dlg-err-firstitm";
                firstExceptionFound = true;
                rgerr.push(SP.Res.dlgTitleError);
            }
            var emsg = ehs.get_errorMessage();

            rgerr.push("<div class=\"" + errorClass + "\">");
            if (typeof ehs.itmContext != "undefined") {
                try {
                    rgerr.push("<div class=\"s4-dlg-err-itmName\">");
                    rgerr.push(ehs.itmContext.get_item("FileLeafRef"));
                    rgerr.push("</div>");
                }
                catch (e) {
                    rgerr.push("</div>");
                }
            }
            rgerr.push("<div class=\"s4-dlg-err-itmMsg\">");
            rgerr.push(emsg);
            rgerr.push("</div>");
            rgerr.push("</div>");
        }
    }
    if (firstExceptionFound) {
        rgerr.push("<div class='ms-core-form-bottomButtonBox' id='dlgDivButton'><button id='ms-OKBtnDismissDlg' class='ms-ButtonHeightWidth' onclick='DismissErrDlg(this)'>");
        rgerr.push(SP.Res.okButtonCaption);
        rgerr.push("</button></div>");
    }
    var str = rgerr.join("");

    if (str.length > 0) {
        var divElem = document.createElement("DIV");

        divElem.className = "s4-dlg-err";
        divElem.innerHTML = str;
        var dopt = {
            html: divElem,
            title: Strings.STS.L_ErrorDialog_Title,
            dialogReturnValueCallback: callback
        };
        var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);

        okButton = document.getElementById('ms-OKBtnDismissDlg');
        if (Boolean(okButton))
            okButton.focus();
    }
    else {
        if (typeof callback == "function")
            callback();
    }
    this.rgehs = [];
}
function CLVPRefreshInplViewUrl() {
    this.inplUrl = null;
    this.inplUrl = this.InplViewUrl();
    return false;
}
function CLVPInplViewUrl() {
    if (this.inplUrl != null) {
        if (typeof this.ctx.IsClientRendering != "undefined" && this.ctx.IsClientRendering && this.isEcbInfo) {
            return this.inplUrl + "&IsRibbon=TRUE";
        }
        return this.inplUrl;
    }
    var rg = [];
    var str = escapeUrlForCallback(this.ctx.HttpRoot);

    rg.push(str);
    if (str[str.length - 1] != "/")
        rg.push("/");
    rg.push("_layouts/15/inplview.aspx?List=");
    rg.push(this.ctx.listName);
    if (this.ctx.view != null) {
        rg.push("&View=");
        rg.push(this.ctx.view);
    }
    rg.push("&ViewCount=");
    rg.push(this.ctx.ctxId);
    if (typeof this.ctx.isXslView != "undefined" && this.ctx.isXslView) {
        rg.push("&IsXslView=TRUE");
    }
    if (typeof this.ctx.IsClientRendering != "undefined" && this.ctx.IsClientRendering) {
        rg.push("&IsCSR=TRUE");
    }
    if (typeof this.ctx.overrideSelectCommand != "undefined") {
        rg.push("&HasOverrideSelectCommand=TRUE");
    }
    var arrayField = null;

    if (typeof this.ctx.overrideFilterQstring != "undefined") {
        arrayField = this.ctx.overrideFilterQstring.match(RegExp("OverrideScope=[^&]*"));
    }
    if (typeof this.ctx.overrideScope != "undefined" && arrayField == null) {
        rg.push("&OverrideScope=" + this.ctx.overrideScope);
    }
    if (typeof this.ctx.overrideFilterQstring != "undefined") {
        rg.push("&");
        rg.push(this.ctx.overrideFilterQstring);
    }
    if (typeof this.ctx.IsClientRendering != "undefined" && !this.ctx.IsClientRendering) {
        rg.push("&ListViewPageUrl=");
        var uri = new URI(ajaxNavigate.get_href(), {
            disableEncodingDecodingForLegacyCode: true
        });

        rg.push(escapeProperlyCore(uri.getStringWithoutQueryAndFragment(), false));
    }
    if (typeof this.ctx.searchTerm != "undefined" && this.ctx.searchTerm != null) {
        rg.push("&InplaceSearchQuery=");
        rg.push(escapeProperlyCore(this.ctx.searchTerm, true));
    }
    if (typeof this.ctx.fullListSearch != "undefined" && this.ctx.fullListSearch != null && this.ctx.fullListSearch == true) {
        rg.push("&InplaceFullListSearch=true");
    }
    this.inplUrl = rg.join("");
    delete rg;
    if (typeof this.ctx.IsClientRendering != "undefined" && this.ctx.IsClientRendering && this.isEcbInfo) {
        return this.inplUrl + "&IsRibbon=TRUE";
    }
    else {
        return this.inplUrl;
    }
}
function CLVPInplViewUrlTrim(strInputInplViewUrl) {
    var returnValue = "";

    if (Boolean(strInputInplViewUrl)) {
        if (typeof this.ctx.overrideFilterQstring != "undefined") {
            returnValue = strInputInplViewUrl.substr((this.InplViewUrl()).length - this.ctx.overrideFilterQstring.length);
        }
        else {
            returnValue = strInputInplViewUrl.substr((this.InplViewUrl()).length + 1);
        }
    }
    return returnValue;
}
function CLVPInplViewUrlHash(strUrl) {
    var strHash = this.InplViewUrlTrim(strUrl);

    strHash = EncodeQueryStringAsHash(strHash);
    Sys.Debug.assert(strHash.indexOf('?') == -1);
    return strHash;
}
function CLVPShowPopup(url) {
    MenuHtc_hide();
    if (typeof this.fnOnCommitPopup != "undefined" && this.fnOnCommitPopup != null)
        OpenPopUpPage(url, this.fnOnCommitPopup);
    else {
        OpenPopUpPage(url, RefreshPage);
    }
    return false;
}
function CLVPIsInGroupCache(strGroupName) {
    if (this.strGroupCache == null)
        return false;
    return this.strGroupCache.indexOf(strGroupName + "$") != -1;
}
function CLVPCacheGroupName(strGroupName) {
    if (this.strGroupCache == null) {
        this.strGroupCache = strGroupName + "$";
    }
    else {
        this.strGroupCache = this.strGroupCache + strGroupName + "$";
    }
}
function CLVPDeleteGroupNameCache() {
    if (this.strGroupCache == null)
        return;
    var ichStart = 0;
    var ichNext;

    ichNext = this.strGroupCache.indexOf("$", ichStart);
    while (ichNext != -1) {
        var strGroupName = this.strGroupCache.substring(ichStart, ichNext);
        var oid = "ecbtab_ctx" + this.ctx.ctxId + "_" + strGroupName;
        var o = document.getElementById(oid);

        if (Boolean(o)) {
            this.tab.removeChild(o);
        }
        ichStart = ichNext + 1;
        ichNext = this.strGroupCache.indexOf("$", ichStart);
    }
    this.strGroupCache = null;
}
function CLVPEnqueueEcbInfoRequest(strGroupName) {
    var i;

    for (i = 0; i < this.queueEcbInfo.length; i++) {
        if (this.queueEcbInfo[i] == strGroupName)
            return;
    }
    this.queueEcbInfo.push(strGroupName);
}
function CLVPNoOutstandingECBRequests() {
    if (this.isEcbInfo)
        return false;
    if (this.queueEcbInfo.length > 0)
        return false;
    return true;
}
function SetFocusBack(dialogResult) {
    if (dialogResult == 0 || focusAcc != null && focusAcc.focusInCLVPTab != null && focusAcc.focusInCLVPTab != true) {
        var focusBack = null;

        if (focusAcc != null && focusAcc.elem != null)
            focusBack = focusAcc.elem;
        if (focusBack != null && focusBack.tagName != "A") {
            var anchorList = focusBack.getElementsByTagName("A");
            var anchorListLen = anchorList.length;

            if (anchorListLen > 0)
                focusBack = anchorList[anchorListLen - 1];
        }
        if (focusBack != null && typeof focusBack.setActive != "undefined") {
            try {
                if (focusBack.setActive != null)
                    focusBack.setActive();
                else if (focusBack.focus != null)
                    focusBack.focus();
            }
            catch (e) { }
        }
        else if (typeof SP.Ribbon != "undefined" && Boolean(SP.Ribbon) && Boolean(SP.Ribbon.PageManager) && focusAcc != null && focusAcc.fromRibbon) {
            var pageManager = SP.Ribbon.PageManager.get_instance();

            if (pageManager.get_ribbon() != null) {
                pageManager.restoreFocusToRibbon();
            }
        }
        focusAcc = null;
    }
}
function ExpColGroupScripts(strHtml) {
    var rgRet = [];
    var re = /<script type="text\/javascript">ExpCollGroup\('[^']*',\s*'[^']*'\);<\/script>/g;
    var rg = re.exec(strHtml);

    while (rg != null) {
        var str = rg[0];
        var ich = str.indexOf("ExpCollGroup");
        var ichEnd = str.indexOf(";");

        rgRet.push(str.substring(ich, ichEnd + 1));
        rg = re.exec(strHtml);
    }
    return rgRet;
}
function InitCLVPs() {
    if (typeof g_ViewIdToViewCounterMap != "undefined") {
        var vid;

        for (vid in g_ViewIdToViewCounterMap) {
            var ctxT = window["ctx" + g_ViewIdToViewCounterMap[vid]];

            if (Boolean(ctxT)) {
                var clvp = new CLVP(ctxT);

                clvp.Init();
            }
        }
    }
}
function CLVPFromCtx(ctxParam) {
    if (typeof ctxParam.clvp != "undefined")
        return ctxParam.clvp;
    return null;
}
function CLVPFromEventReal(evt) {
    if (evt == null)
        return null;
    if (typeof evt.currentCtx != "undefined" && Boolean(evt.currentCtx))
        return CLVPFromCtx(evt.currentCtx);
    var sender = GetEventSrcElement(evt);
    var tabTb = null;
    var tablv = null;
    var tabs = null;
    var oPopup = GetEventPopup(evt);

    if (oPopup != null) {
        if (typeof evt.currentCtx != 'undefined' && evt.currentCtx != null) {
            var currentCtxLocal = evt.currentCtx;
            var ctxCur = window["ctx" + currentCtxLocal.ctxId];

            return CLVPFromCtx(ctxCur);
        }
        if (typeof currentCtx != "undefined" && currentCtx != null) {
            return CLVPFromCtx(currentCtx);
        }
        if (typeof ctxFilter != "undefined" && ctxFilter != null) {
            return CLVPFromCtx(ctxFilter);
        }
        var m = typeof oPopup.master != "undefined" ? oPopup.master : null;

        if (m == null)
            return null;
        if (m.id != null && m.id.indexOf("onetViewSelector_menu") > 0) {
            var idT = m.id.substr(0, m.id.indexOf("onetViewSelector_menu") + 16);

            tabTb = GetAncestor(document.getElementById(idT), "TABLE");
        }
        else {
            tabTb = GetAncestor(m, "TABLE");
        }
    }
    else {
        tabTb = GetAncestor(sender, "TABLE");
    }
    while (tabTb != null) {
        if (tabTb.className == "ms-menutoolbar")
            break;
        if (tabTb.className == "ms-listviewtable") {
            tablv = tabTb;
            tabTb = null;
            break;
        }
        else if (tabTb.className == "ms-bottompaging") {
            if (tabTb.previousSibling == null)
                tabTb = tabTb.parentNode.previousSibling;
            else
                tabTb = tabTb.previousSibling;
            if (tabTb == null)
                break;
            var tTableArray = tabTb.getElementsByTagName("TABLE");

            for (var i = 0; i < tTableArray.length; i++) {
                if (tTableArray[i].className == "ms-listviewtable") {
                    tabTb = tTableArray[i];
                    break;
                }
            }
            continue;
        }
        tabTb = tabTb.parentNode;
        if (tabTb != null)
            tabTb = GetAncestor(tabTb, "TABLE");
    }
    if (tabTb == null && tablv == null)
        return null;
    if (tablv == null) {
        var tab = tabTb.nextSibling;

        while (tab != null && (tab.nodeType != 1 || tab.tagName != "TABLE"))
            tab = tab.nextSibling;
        if (tab == null)
            return null;
        var tables = tab.getElementsByTagName("TABLE");

        if (tables.length == 0)
            return null;
        tablv = tables[0];
    }
    var clvp = CLVPFromCtx(tablv);

    if (clvp == null && tab != null) {
        tabs = tab.getElementsByTagName("DIV");
        if (tabs.length == 0)
            return null;
        tablv = tabs[0];
        clvp = CLVPFromCtx(tablv);
    }
    return clvp;
}
function SetUrlKeyValue(keyName, keyValue, bEncode, url) {
    if (url == null)
        url = window.location.href + "";
    var val = keyValue;
    var uri = new URI(url, {
        disableEncodingDecodingForLegacyCode: true
    });

    url = uri.getQuery();
    if (bEncode)
        val = escapeProperly(val);
    if (url.indexOf(keyName + "=") < 0) {
        if (url.length > 1)
            url += "&";
        else if (url.length == 0)
            url += "?";
        url += keyName + "=" + val;
    }
    else {
        var re = new RegExp(keyName + "=[^&]*");

        url = url.replace(re, keyName + "=" + val);
    }
    uri.setQuery(url);
    return uri.getString();
}
function FixUrlFromClvp(clvp, url) {
    return FixUrlFromClvp2(clvp, url, true);
}
function FixUrlFromClvp2(clvp, url, fSetSource) {
    var rootFolder = clvp.rootFolder;

    if ((rootFolder == null || rootFolder.length == 0) && clvp.rgpaging == null)
        return url;
    if (rootFolder != null && rootFolder.length > 0)
        if ((url.toUpperCase()).indexOf("LISTEDIT.ASPX") == -1)
            url = SetUrlKeyValue("RootFolder", rootFolder, true, url);
    if (fSetSource) {
        var src = GetSource2(null, clvp);

        url = SetUrlKeyValue("Source", src, true, url);
    }
    return url;
}
function STSNavigateToViewReal(evt, url) {
    STSNavigate(url);
    return true;
}
function STSNavigate2Real(evt, url) {
    STSNavigate(url);
    return true;
}
function GetSource2(defaultSource, clvp, bFetchQueryString) {
    var source = GetUrlKeyValue("Source");

    if (source == "") {
        if (defaultSource != null && defaultSource != "")
            source = defaultSource;
        else
            source = ajaxNavigate.get_href();
    }
    if (clvp == null && typeof currentCtx != "undefined" && currentCtx != null && currentCtx.clvp != null)
        clvp = currentCtx.clvp;
    if (clvp != null && (clvp.rootFolder != null || clvp.rgpaging != null)) {
        if (source != "") {
            if (clvp.rootFolder != null && clvp.rootFolder != "")
                source = SetUrlKeyValue("RootFolder", clvp.rootFolder, true, source);
            if (clvp.rgpaging != null && (!(clvp.ctx != null && clvp.ctx.IsClientRendering) || bFetchQueryString)) {
                var key;

                for (key in clvp.rgpaging) {
                    source = SetUrlKeyValue(key, clvp.rgpaging[key], false, source);
                }
                if (clvp.rgpaging["PagedPrev"] == null) {
                    source = RemoveUrlKeyValue("PagedPrev", source);
                    source = RemoveUrlKeyValue("PageLastRow", source);
                }
                if (clvp.rgpaging["PageFirstRow"] == null) {
                    source = RemoveUrlKeyValue("PageFirstRow", source);
                }
            }
        }
    }
    return STSPageUrlValidation(source);
}
function FindClvp(obj) {
    var tab = obj;

    while (tab != null) {
        if (tab.tagName == "TABLE") {
            if (tab.clvp != null)
                break;
        }
        tab = tab.parentNode;
    }
    return tab != null ? tab.clvp : null;
}
function getFilterQueryParam(strDocUrl) {
    if (strDocUrl == null || strDocUrl == "")
        return "";
    var strFilterQuery = "";
    var i = 0;
    var arrayField;

    do {
        i++;
        arrayField = strDocUrl.match(RegExp("FilterField" + String(i) + "=[^&]*" + "&FilterValue" + String(i) + "=[^&]*"));
        if (arrayField != null)
            strFilterQuery = strFilterQuery + "&" + arrayField[0];
    } while (arrayField != null);
    i = 0;
    do {
        i++;
        arrayField = strDocUrl.match(RegExp("FilterFields" + String(i) + "=[^&]*" + "&FilterValues" + String(i) + "=[^&]*"));
        if (arrayField != null)
            strFilterQuery = strFilterQuery + "&" + arrayField[0];
    } while (arrayField != null);
    i = 0;
    do {
        i++;
        arrayField = strDocUrl.match(RegExp("FilterOp" + String(i) + "=[^&]*" + "&FilterLookupId" + String(i) + "=[^&]*" + "&FilterData" + String(i) + "=[^&]*"));
        if (arrayField != null)
            strFilterQuery = strFilterQuery + "&" + arrayField[0];
    } while (arrayField != null);
    return strFilterQuery;
}
function OnClickFilterV4(obj) {
    var o = FindSTSMenuTable(obj, "CTXNum");
    var clvp = FindClvp(obj);

    if (o != null && o.getAttribute("SortFields") != null) {
        if (clvp != null)
            clvp.ctx.operationType = SPListOperationType.Sort;
        var strSortFields = o.getAttribute("SortFields");

        if (strSortFields.indexOf("?") > 0) {
            strSortFields = strSortFields.substr(strSortFields.indexOf("?") + 1);
        }
        var url = GetUrlWithNoSortParameters(strSortFields);

        url = RemovePagingArgs(url);
        if (url.indexOf("?") < 0)
            url += "?";
        else
            url += "&";
        url = url + strSortFields;
        if (clvp != null)
            url += getFilterQueryParam(clvp.ctx.queryString);
        if (clvp != null && clvp.ctx.IsClientRendering) {
            if (clvp.rootFolder != null)
                url = SetUrlKeyValue("RootFolder", clvp.rootFolder, true, url);
            clvp.ctx.queryString = url;
            clvp.RefreshPaging(url);
            if (strSortFields.substring(strSortFields.length - 3) == "Asc") {
                o.setAttribute("SortFields", strSortFields.substring(0, strSortFields.length - 3) + "Desc");
            }
            else
                o.setAttribute("SortFields", strSortFields.substring(0, strSortFields.length - 4) + "Asc");
        }
        else {
            SubmitFormPost(url);
        }
    }
    return false;
}
function HandleFilterReal(evt, url, operationType) {
    var clvp = CLVPFromEvent(evt);

    if (clvp != null && clvp.ctx != null)
        clvp.ctx.operationType = operationType;
    if (clvp == null || clvp.ctx == null || !clvp.ctx.IsClientRendering) {
        SubmitFormPost(url);
        return false;
    }
    var rCtx = clvp.ctx;

    if (rCtx != null && rCtx.ListSchema != null && rCtx.ListData != null && (rCtx.ListSchema.Filter == '1' || Boolean(rCtx.ListData.FilterLink)) && url.indexOf("&FilterClear=1") > 0) {
        SubmitFormPost(url);
        return false;
    }
    clvp.RefreshPaging(url);
    clvp.ctx.queryString = url;
    return true;
}
function RefreshInplViewUrlByContext(ctxParam) {
    var clvp = CLVPFromCtx(ctxParam);

    return RefreshInplViewUrlInternal(clvp);
}
function RefreshInplViewUrl(evt) {
    var clvp = CLVPFromEvent(evt);

    return RefreshInplViewUrlInternal(clvp);
}
function RefreshInplViewUrlInternal(clvp) {
    if (clvp == null)
        return false;
    return clvp.RefreshInplViewUrl();
}
function CancelRefreshViewByContext(ctxParam) {
    var clvp = CLVPFromCtx(ctxParam);

    return CancelRefreshViewInternal(clvp);
}
function CancelRefreshView(evt) {
    var clvp = CLVPFromEvent(evt);

    return CancelRefreshViewInternal(clvp);
}
function CancelRefreshViewInternal(clvp) {
    if (clvp == null)
        return false;
    return clvp.CancelAnyOutstandingRequest();
}
function HandleRefreshViewByContext(ctxParam) {
    var clvp = CLVPFromCtx(ctxParam);

    if (clvp == null)
        return false;
    HandleRefreshViewInternal(clvp);
    return false;
}
function HandleRefreshView(evt) {
    var clvp = CLVPFromEvent(evt);

    if (clvp == null)
        return false;
    HandleRefreshViewInternal(clvp);
    return false;
}
function HandleRefreshViewInternal(clvp) {
    var url = clvp.ctx.queryString;
    var ctxObj = clvp.ctx;

    url = FixUrlFromClvp2(clvp, url, false);
    if (ctxObj == null || !ctxObj.IsClientRendering) {
        SubmitFormPost(url);
        return;
    }
    clvp.RefreshPaging(url);
}
function InitAllClvps() {
    InitCLVPs();
}
function FixDroppedOrPastedClvps() {
    if (typeof g_ViewIdToViewCounterMap != "undefined") {
        var vid;

        for (vid in g_ViewIdToViewCounterMap) {
            var ctxT = window["ctx" + g_ViewIdToViewCounterMap[vid]];

            if (Boolean(ctxT)) {
                var clvp = ctxT.clvp;

                if (Boolean(clvp) && (!Boolean(clvp.tab) || !Boolean(clvp.tab.parentNode) || 1 != clvp.tab.parentNode.nodeType)) {
                    clvp = new CLVP(ctxT);
                    clvp.Init();
                }
            }
        }
    }
}
function FocusInfo_InitializePrototype() {
    FocusInfo.prototype = {
        elem: null,
        id: null,
        tagName: null,
        focusInCLVPTab: null,
        fromRibbon: undefined,
        setActive: undefined
    };
}
function FocusInfo() {
}
var focusAcc;

function GetFocusInfo(evt, clvp) {
    var focusInfo = new FocusInfo();

    focusInfo.fromRibbon = typeof evt.fromRibbon != "undefined" ? evt.fromRibbon : undefined;
    var focusBack = null;

    if (Boolean(evt.target)) {
        focusBack = evt.target;
    }
    else if (Boolean(evt.srcElement)) {
        focusBack = evt.srcElement;
    }
    if (typeof evt.fakeEvent != 'undefined' && evt.fakeEvent) {
        if (typeof focusBack.master != "undefined" && focusBack.master != null && typeof focusBack.master._oParent != "undefined")
            focusBack = focusBack.master._oParent;
        if (focusBack != null && focusBack.tagName != "A") {
            focusBack = (focusBack.getElementsByTagName("A"))[0];
        }
    }
    else {
        if (Boolean(evt.fromRibbon) != true) {
            while (focusBack.tagName != "A" && focusBack.tagName != "BODY") {
                focusBack = focusBack.parentNode;
            }
        }
    }
    var focusBackId = null;

    if (focusBack != null) {
        while (focusBack.id.length == 0 && focusBack.tagName != "BODY") {
            focusBack = focusBack.parentNode;
        }
        focusBackId = focusBack.id;
    }
    var focusBackTag = null;

    if (focusBack != null)
        focusBackTag = focusBack.tagName;
    var bFocusInCLVPTab = false;
    var focusTabl = null;

    if (clvp != null)
        focusTabl = clvp.tab;
    if (focusTabl != null && focusBackTag != null && focusBackId != null) {
        var focusArray = focusTabl.getElementsByTagName(focusBackTag);

        for (var i = 0; i < focusArray.length; i++) {
            if (focusArray[i].id == focusBackId) {
                bFocusInCLVPTab = true;
                break;
            }
        }
    }
    focusInfo.elem = focusBack;
    focusInfo.id = focusBackId;
    focusInfo.tagName = focusBackTag;
    focusInfo.focusInCLVPTab = bFocusInCLVPTab;
    focusAcc = focusInfo;
}
function ExpGroup(evt, groupName) {
    var tabBody = document.getElementById("tbod" + groupName + "_");

    if (tabBody != null) {
        var tabTb = GetAncestor(tabBody, "TABLE");
    }
    if (tabBody == null || tabBody.tagName != "TBODY" || tabTb == null || typeof tabTb.clvp == "undefined" || tabTb.clvp == null || tabBody.getAttribute("isLoaded") == null)
        return;
    var viewCounter = groupName.substring(0, groupName.indexOf("-"));
    var lookupEntry = document.getElementById("GroupByCol" + viewCounter);
    var queryString = "?";

    if (lookupEntry != null) {
        queryString = lookupEntry.getAttribute("queryString");
        if (queryString.substring(queryString.length - 1) == "&")
            queryString = queryString.substr(0, queryString.length - 1);
    }
    queryString = RemoveOnlyPagingArgs(queryString);
    queryString += "&GroupString=";
    queryString += ExpGroupFetchGroupString(groupName);
    queryString += "&IsGroupRender=TRUE";
    var tabTbClvp = tabTb.clvp;

    tabTbClvp.tBody = tabBody;
    tabTbClvp.RefreshPaging(queryString, null);
}
function DeleteSelectedItemsCore(ctxParam, items, onSuccess, onFailure) {
    var ci = items.length;
    var clvp = ctxParam.clvp;

    if (ci > 0) {
        if (ContainsRecurrenceItem(items))
            return;
        var strConfirmMessage = Strings.STS.L_STSRecycleConfirm_Text;

        if (!ctxParam.RecycleBinEnabled || ctxParam.ExternalDataList)
            strConfirmMessage = Strings.STS.L_STSDelConfirm_Text;
        if (ctxParam.overrideDeleteConfirmation != null)
            strConfirmMessage = ctxParam.overrideDeleteConfirmation;
        if (Boolean(ctxParam.HasRelatedCascadeLists) && ctxParam.CascadeDeleteWarningMessage != null)
            strConfirmMessage = ctxParam.CascadeDeleteWarningMessage + strConfirmMessage;
        if (Boolean(ctxParam.HasRelatedCascadeLists) && ctxParam.listTemplate == 171) {
            var bFoundParent = false;
            var i = 0;

            if (ctxParam.inGridMode) {
                var spgantt = window[g_SPGridInitInfo[ctxParam.view].controllerId];

                Sys.Debug.assert(spgantt != null);
                for (i = 0; i < ci; i++) {
                    if (spgantt.IsParent(items[i])) {
                        bFoundParent = true;
                        break;
                    }
                }
            }
            else {
                var hierarchyMgr = GetClientHierarchyManagerForWebpart != null ? GetClientHierarchyManagerForWebpart(ctxParam.wpq) : null;

                if (hierarchyMgr != null) {
                    for (i = 0; i < ci; i++) {
                        if (hierarchyMgr.IsParent(items[i])) {
                            bFoundParent = true;
                            break;
                        }
                    }
                }
            }
            strConfirmMessage = bFoundParent ? Strings.STS.L_STSDelConfirmParentTask : Strings.STS.L_STSDelConfirm_Text;
        }
        if (!confirm(strConfirmMessage))
            return;
    }
    for (var k = 0; k < ci; k++) {
        var itm = items[k];

        clvp.DeleteItemCore(String(itm));
    }
    clvp.pendingItems = [];
    if (ci > 0) {
        var noti = Strings.STS.L_Notification_Delete;
        var nid = addNotification(noti, true);

        clvp.cctx.executeQueryAsync(function() {
            if (typeof clvp.rgehs != "undefined") {
                if (clvp.rgehs.length == 1 && clvp.rgehs[0].get_serverErrorCode() == SP.ClientErrorCodes.redirect) {
                    GoToPage(clvp.rgehs[0].get_serverErrorValue());
                    return;
                }
                removeNotification(nid);
                clvp.ShowErrorDialog(onSuccess);
            }
            else {
                if (onSuccess != null) {
                    onSuccess();
                }
            }
        }, function() {
            removeNotification(nid);
            if (typeof clvp.rgehs != "undefined") {
                clvp.ShowErrorDialog(onFailure);
            }
        });
    }
}
function DeleteSelectedItems(ctxParam) {
    ctxParam = FixupCtx(ctxParam);
    var items = GetSelectedItemsDict(ctxParam);
    var itemArray = [];

    for (var k in items) {
        var itm = items[k];

        itemArray.push(itm.id);
    }
    if (itemArray.length > 0)
        DeleteSelectedItemsCore(ctxParam, itemArray, RefreshOnDialogClose);
}
function ContainsRecurrenceItem(items) {
    for (var key in items) {
        var item = items[key];

        if (Boolean(item) && typeof item.id != "undefined" && Boolean(item.id)) {
            var idLocal = item.id;

            if (idLocal.indexOf(".0.") != -1 || idLocal.indexOf(".1.") != -1 || idLocal.indexOf(".2.") != -1)
                return true;
        }
    }
    return false;
}
function CheckOutSingleItem(ctxParam, tab) {
    ctxParam = FixupCtx(ctxParam);
    var strUrl = GetAttributeFromItemTable(tab, "Url", "ServerUrl");
    var rg = (GetAttributeFromItemTable(tab, "Icon", "DocIcon")).split("|");
    var strOpenCtrl = null;

    if (rg.length >= 3)
        strOpenCtrl = rg[2];
    if (strOpenCtrl == "SharePoint.OpenDocuments")
        strOpenCtrl = "SharePoint.OpenDocuments.3";
    var nid = addNotification(Strings.STS.L_Notification_CheckOut, true, null, null, true);
    var promptResult = CheckoutDocument(ctxParam.HttpRoot, strUrl, strOpenCtrl);

    if (!promptResult)
        removeNotification(nid, true);
}
function FixupCtx(ctxParam) {
    if (Boolean(ctxParam) && typeof ctxParam.clvp == "undefined" && typeof ctxParam.ctxId != "undefined") {
        var ctxT = window["ctx" + ctxParam.ctxId];

        if (ctxT) {
            return ctxT;
        }
    }
    return ctxParam;
}
function CheckInSingleItemFromECB(evt, ctxParam, tab) {
    ctxParam = FixupCtx(ctxParam);
    var clvp = ctxParam.clvp;

    GetFocusInfo(evt, clvp);
    CheckInSingleItem(ctxParam, tab);
}
function CheckInSingleItem(ctxParam, tab) {
    var strUrl = GetAttributeFromItemTable(tab, "Url", "ServerUrl");

    if (strUrl != null)
        strUrl = escapeProperly(unescapeProperly(strUrl));
    var str = ctxParam.HttpRoot + "/_layouts/15/checkin.aspx?" + "List=" + ctxParam.listName + "&FileName=" + strUrl;

    OpenPopUpPage(str, CheckInNotifyAndRefreshPage);
}
function CheckInNotifyAndRefreshPage(dialogResult) {
    if (dialogResult == SP.UI.DialogResult.OK) {
        var noti = Strings.STS.L_Notification_CheckIn;

        addNotification(noti, true);
    }
    RefreshPage(dialogResult);
}
function AttachFile(ctxParam) {
    var clvp = ctxParam.clvp;
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;

    if (ci == 1) {
        for (k in items) {
            itm = items[k];
            if (itm.fsObjType == "0") {
                var url = ctxParam.HttpRoot + "/_layouts/15/AttachFile.aspx?" + "ListId=" + ctxParam.listName + "&ItemId=" + itm.id + "&Source=" + GetSource();

                if (FV4UI())
                    OpenPopUpPage(url, RefreshPage);
                else
                    GoToPage(url);
            }
        }
    }
}
function ManageCopies(ctxParam) {
    var clvp = ctxParam.clvp;
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;

    if (ci == 1) {
        for (k in items) {
            itm = items[k];
            clvp.ManageCopies(itm.id, itm.fsObjType);
        }
    }
}
function CheckoutSelectedItems(ctxParam) {
    var clvp = ctxParam.clvp;
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;

    if (ci == 1) {
        for (k in items) {
            itm = items[k];
            var ecbItemTable = clvp.GetEcbInfo(itm.id);

            if (ecbItemTable == null)
                FetchEcbInfo(ctxParam, itm.id, "DIV", CheckOutSingleItem);
            else
                CheckOutSingleItem(ctxParam, ecbItemTable);
            return;
        }
    }
    if (!confirm(Strings.STS.L_CheckoutConfirm))
        return;
    for (k in items) {
        itm = items[k];
        clvp.CheckoutItem(itm.id, itm.fsObjType);
    }
    if (ci > 0) {
        var noti = Strings.STS.L_Notification_CheckOut;
        var nid = addNotification(noti, true);

        clvp.cctx.executeQueryAsync(function() {
            if (typeof clvp.rgehs != "undefined") {
                removeNotification(nid);
                clvp.ShowErrorDialog(RefreshOnDialogClose);
            }
            else
                RefreshPage(SP.UI.DialogResult.OK);
        }, function() {
            removeNotification(nid);
            if (typeof clvp.rgehs != "undefined")
                clvp.ShowErrorDialog();
        });
    }
}
function DiscardCheckoutSelectedItems(ctxParam) {
    ctxParam = FixupCtx(ctxParam);
    var clvp = ctxParam.clvp;
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;

    if (!confirm(Strings.STS.L_DiscardCheckoutConfirm))
        return;
    for (k in items) {
        itm = items[k];
        clvp.DiscardCheckoutItem(itm.id, itm.fsObjType);
    }
    if (ci > 0) {
        var noti = Strings.STS.L_Notification_DiscardCheckOut;
        var nid = addNotification(noti, true);

        clvp.cctx.executeQueryAsync(function() {
            if (typeof clvp.rgehs != "undefined") {
                removeNotification(nid);
                clvp.ShowErrorDialog(RefreshOnDialogClose);
            }
            else
                RefreshPage(SP.UI.DialogResult.OK);
        }, function() {
            removeNotification(nid);
            if (typeof clvp.rgehs != "undefined")
                clvp.ShowErrorDialog();
        });
    }
}
function CheckinSelectedItems(ctxParam) {
    var clvp = ctxParam.clvp;
    var rg = [];
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;

    if (ci == 1) {
        for (k in items) {
            itm = items[k];
            var ecbItemTable = clvp.GetEcbInfo(itm.id);

            if (ecbItemTable == null)
                FetchEcbInfo(ctxParam, itm.id, "DIV", CheckInSingleItem);
            else
                CheckInSingleItem(ctxParam, ecbItemTable);
            return;
        }
    }
    var str = clvp.ctx.HttpRoot;

    rg.push(str);
    if (str[str.length - 1] != "/")
        rg.push("/");
    rg.push("_layouts/15/checkin.aspx?List=");
    rg.push(clvp.ctx.listName);
    rg.push("&IsBulk=1");
    var fnCheckinWithEcb = function(args) {
        var ik;
        var ck = 0;

        for (ik in items) {
            var itmLocal = items[ik];

            clvp.CheckinItem(itmLocal.id, itmLocal.fsObjType, args);
            ck++;
        }
        if (ck > 0) {
            var noti = Strings.STS.L_Notification_CheckIn;
            var nid = addNotification(noti, true);

            clvp.cctx.executeQueryAsync(function() {
                if (typeof clvp.rgehs != "undefined") {
                    removeNotification(nid);
                    clvp.ShowErrorDialog(RefreshOnDialogClose);
                }
                else
                    RefreshPage(SP.UI.DialogResult.OK);
            }, function() {
                removeNotification(nid);
                if (typeof clvp.rgehs != "undefined")
                    clvp.ShowErrorDialog();
            });
        }
    };
    var fnOnCommit = function(dialogResult, args) {
        if (dialogResult == SP.UI.DialogResult.OK)
            clvp.EnsureEcbInfo(fnCheckinWithEcb, args, null);
        else
            RefreshPage(dialogResult);
    };

    OpenPopUpPage(rg.join(""), fnOnCommit);
}
function CLVPModerateItem(itemId, approveDialogResult) {
    this.EnsureChangeContext();
    if (typeof this.rgehs == "undefined")
        this.rgehs = [];
    var ehs;
    var iehs;
    var itm = null;

    ehs = new SP.ExceptionHandlingScope(this.cctx);
    this.rgehs.push(ehs);
    iehs = ehs.startScope();
    itm = (((this.cctx.get_web()).get_lists()).getById(this.ctx.listName)).getItemById(Number(itemId));
    ehs.itmContext = itm;
    itm.set_item('_ModerationStatus', approveDialogResult.ModerationStatus);
    itm.set_item('_ModerationComments', approveDialogResult.Comment);
    itm.update();
    this.cctx.load(itm);
    iehs.dispose();
    this.changePending = true;
}
function ModerateSelectedItems(ctxParam) {
    var clvp = ctxParam.clvp;
    var rg = [];
    var items = GetSelectedItemsDict(ctxParam);
    var ci = CountDictionary(items);
    var itm;
    var k;
    var str = clvp.ctx.HttpRoot;

    rg.push(str);
    if (str[str.length - 1] != "/")
        rg.push("/");
    rg.push("_layouts/15/approve.aspx?List=");
    rg.push(clvp.ctx.listName);
    var isBulk = false;

    if (ci == 1) {
        for (k in items) {
            itm = items[k];
            rg.push("&ID=" + itm.id);
            break;
        }
    }
    else {
        rg.push("&IsBulk=1");
        isBulk = true;
    }
    var fnModerateWithEcb = function(approveDialogResultStr) {
        var ik;
        var ck = 0;

        for (ik in items) {
            var itmLocal = items[ik];

            ULS.AssertJS(ULSCat.msoulscat_WSS_Inplview, approveDialogResultStr != null && approveDialogResultStr != "", "Null or empty parameter to deserialize");
            try {
                clvp.ModerateItem(itmLocal.id, SP_JSONParse(approveDialogResultStr));
                ck++;
            }
            catch (e) {
                ULS.SendExceptionJS(ULSCat.msoulscat_WSS_Inplview, e);
            }
        }
        if (ck > 0) {
            var noti = Strings.STS.L_Notification_Moderate;
            var nid = addNotification(noti, true);

            clvp.cctx.executeQueryAsync(function() {
                if (typeof clvp.rgehs != "undefined") {
                    removeNotification(nid);
                    clvp.ShowErrorDialog(RefreshOnDialogClose);
                }
                else
                    RefreshPage(SP.UI.DialogResult.OK);
            }, function() {
                removeNotification(nid);
                if (typeof clvp.rgehs != "undefined")
                    clvp.ShowErrorDialog();
            });
        }
    };
    var fnOnCommit = function(dialogResult, retVal) {
        if (dialogResult == SP.UI.DialogResult.OK && isBulk) {
            clvp.EnsureEcbInfo(fnModerateWithEcb, retVal, null);
        }
        else {
            RefreshPage(dialogResult);
        }
    };
    var itemIDsObj = {};

    for (k in items) {
        itm = items[k];
        itemIDsObj[itm.id] = itm.id;
    }
    var dialogOptions = {
        url: rg.join(""),
        dialogReturnValueCallback: fnOnCommit,
        args: itemIDsObj,
        delayAppearance: isBulk,
        autoSize: true
    };

    OpenPopUpPageWithDialogOptions(dialogOptions);
}
function DismissErrDlg(b) {
    var dlg = typeof window.top.g_childDialog != "undefined" ? window.top.g_childDialog : undefined;

    if (Boolean(dlg)) {
        dlg.close(0);
    }
}
function CanNavigateUp(ctxParam) {
    if (ctxParam == null || ctxParam.clvp == null) {
        return false;
    }
    var curRootFolder = unescapeProperly(GetRootFolder2(ctxParam));

    if (curRootFolder == null || curRootFolder == unescapeProperly(ctxParam.listUrlDir)) {
        return false;
    }
    return true;
}
function NavigateUp(ctxParam) {
    if (!CanNavigateUp(ctxParam)) {
        return;
    }
    var curRootFolder = unescapeProperly(GetRootFolder2(ctxParam));

    if (curRootFolder == null)
        return;
    var ich = curRootFolder.lastIndexOf("/");
    var parentFolder = "";

    if (ich > 0) {
        parentFolder = curRootFolder.substr(0, ich);
    }
    else {
        return;
    }
    var url = ajaxNavigate.get_href();
    var view = ctxParam.view;

    url = RemoveParametersFromUrl(url);
    url = SetUrlKeyValue("RootFolder", parentFolder, true, url);
    url = SetUrlKeyValue("View", view, false, url);
    _SubmitFormPost(url);
}
function EnumCLVPs(callback) {
    var fRet = false;

    if (typeof g_ViewIdToViewCounterMap != "undefined") {
        var vid;

        for (vid in g_ViewIdToViewCounterMap) {
            var ctxT;

            eval("ctxT = ctx" + g_ViewIdToViewCounterMap[vid] + ";");
            var clvp = ctxT.clvp;

            if (clvp != null) {
                callback(clvp);
                fRet = true;
            }
        }
    }
    return fRet;
}
function RestoreClvpNavigation(clvp) {
    clvp.RestoreNavigation();
}
function RestoreAllClvpsNavigation() {
    EnumCLVPs(RestoreClvpNavigation);
}
var inplview;

function CompareUrls(str1, str2) {
    if (typeof str1 == 'undefined' || str1 == null || typeof str2 == 'undefined' || str2 == null)
        return false;
    if (browseris.firefox)
        return CompleteDecode(str1) == CompleteDecode(str2);
    else
        return str1 == str2;
}
function MergeListData(existingData, dataToMerge) {
    for (var newRow in dataToMerge.Row) {
        var bFound = false;

        for (var existingRow in existingData.Row) {
            if (dataToMerge.Row[newRow].ID == existingData.Row[existingRow].ID) {
                bFound = true;
                m$.extend(existingData.Row[existingRow], dataToMerge.Row[newRow]);
                continue;
            }
        }
        if (!bFound) {
            existingData.Row.push(dataToMerge.Row[newRow]);
        }
    }
    return existingData;
}
function CanSupportRoamingApps() {
    return browseris.win && !browseris.armProcessor && (browseris.ie || browseris.firefox3up || browseris.chrome);
}
$_global_inplview();
