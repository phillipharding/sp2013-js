function $_global_spgantt() {
    if (!Type.isNamespace('SPG')) {
        Type.registerNamespace('SPG');
    }
    SPG.TextMaxLengthPropertyType = function(maxLengthTable) {
    ULSc2E:
        ;
        this.ID = "SPTextMaxLength";
        this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
        ULSc2E:
            ;
            newValue = newValue != null && newValue.length == 0 ? null : newValue;
            var maxLength = maxLengthTable[fieldKey];

            if (newValue != null && maxLength != null && maxLength != 0) {
                newValue = newValue.substr(0, maxLength);
            }
            fnCallback({
                isValid: true,
                dataValue: newValue,
                normalizedLocValue: newValue
            });
        };
        this.GetMaxLength = function(fieldKey) {
        ULSc2E:
            ;
            return maxLengthTable[fieldKey];
        };
        this.toString = function() {
        ULSc2E:
            ;
            return this.ID;
        };
    };
    SPG.DatePropertyType = function() {
    ULSc2E:
        ;
        this.ID = 'SPDateTime';
        this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
        ULSc2E:
            ;
            Sys.Debug.assert(bIsLocalized);
            Sys.Debug.assert(typeof newValue == "string");
            fnCallback({
                isValid: true,
                dataValue: SP.JsGrid.EmptyValue,
                normalizedLocValue: newValue.toUpperCase()
            });
        };
    };
    SPG.PercentCompletePropertyType = function() {
    ULSc2E:
        ;
        this.ID = 'SPPercentComplete';
        this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
        ULSc2E:
            ;
            Sys.Debug.assert(bIsLocalized);
            fnCallback({
                isValid: true,
                dataValue: null,
                normalizedLocValue: newValue
            });
        };
    };
    SPG.EditPropertyType = function() {
    ULSc2E:
        ;
        this.ID = 'SPEdit';
        this.GetImageSource = function(record, dataValue) {
        ULSc2E:
            ;
            return dataValue & SPG.Permissions.editListItems ? '/_layouts/15/images/edititem.gif' : null;
        };
        this.DataToLocalized = function(dataValue) {
        ULSc2E:
            ;
            return dataValue & SPG.Permissions.editListItems ? SP.Res.editColEditable : SP.Res.editColReadOnly;
        };
    };
    SPG.UserPropertyType = function(spGanttControl) {
    ULSc2E:
        ;
        this.ID = 'SPUser';
        this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
        ULSc2E:
            ;
            Sys.Debug.assert(bIsLocalized);
            fnCallback({
                isValid: true,
                dataValue: SP.JsGrid.EmptyValue,
                normalizedLocValue: newValue
            });
        };
        this.GetPeoplePickerUrl = function(fieldKey) {
        ULSc2E:
            ;
            return spGanttControl.customFieldInfo[fieldKey];
        };
        this.SetPeoplePickerUrl = function(fieldKey, peoplePickerUrl) {
        ULSc2E:
            ;
            spGanttControl.customFieldInfo[fieldKey] = peoplePickerUrl;
        };
    };
    SPG.LookupPropertyType = function(fieldName, lookupFieldInfo) {
    ULSc2E:
        ;
        var _entries;

        this.ID = fieldName + '_Lookup';
        this.GetItems = function(fnCallback) {
        ULSc2E:
            ;
            EnsureEntriesCached(OnCached, OnError);
            function OnCached() {
            ULSc2E:
                ;
                var r = [];

                for (var i = 0; i < _entries.length; i++) {
                    r.push(SP.JsGrid.Property.MakeProperty(_entries[i].id, _entries[i].locValue, true, true, this));
                }
                fnCallback(r);
            }
            function OnError() {
            ULSc2E:
                ;
                fnCallback(null);
            }
        };
        this.InvalidateCache = function() {
        ULSc2E:
            ;
            _entries = null;
        };
        this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
        ULSc2E:
            ;
            EnsureEntriesCached(OnCached, fnError);
            function OnCached() {
            ULSc2E:
                ;
                if (!lookupFieldInfo.required && (bIsLocalized && newValue == '') || !bIsLocalized && newValue == null) {
                    fnCallback({
                        isValid: true,
                        dataValue: [],
                        normalizedLocValue: ''
                    });
                    return;
                }
                var idx = SP.Internal.JS.FindInArray(_entries, bIsLocalized ? function(entry) {
                ULSc2E:
                    ;
                    return newValue == entry.locValue;
                } : function(entry) {
                ULSc2E:
                    ;
                    return newValue == entry.id;
                });

                fnCallback(idx == null ? {
                    isValid: false
                } : {
                    isValid: true,
                    dataValue: _entries[idx].id,
                    normalizedLocValue: _entries[idx].locValue
                });
            }
        };
        function EnsureEntriesCached(fnCacheFilled, fnError) {
        ULSc2E:
            ;
            if (_entries == null) {
                GetFieldValues(lookupFieldInfo.webUrl, lookupFieldInfo.listId, lookupFieldInfo.field, function(entries) {
                ULSc2E:
                    ;
                    if (entries == null) {
                        fnError();
                    }
                    else {
                        _entries = entries;
                        fnCacheFilled();
                    }
                });
            }
            else {
                fnCacheFilled();
            }
        }
        function GetFieldValues(webUrl, listId, fieldName, fnCallback) {
        ULSc2E:
            ;
            var viewXml = ['<View Scope="RecursiveAll">', '<ViewFields>', '<FieldRef Name="ID"/>', '<FieldRef Name="' + escape(fieldName) + '"/>', '</ViewFields>', '<Query><OrderBy><FieldRef Name="ID"/></OrderBy></Query>', '</View>'].join('');
            var context = new SP.ClientContext(webUrl);
            var list = ((context.get_web()).get_lists()).getById(listId);
            var query = new SP.CamlQuery();

            query.set_viewXml(viewXml);
            var listItems = list.getItems(query);
            var listItemProto = listItems.retrieveItems();

            listItemProto.retrieve('ID');
            (listItemProto.retrieveObject('FieldValuesAsText')).retrieve(fieldName);
            context.add_requestSucceeded(OnSuccess);
            context.add_requestFailed(OnFailure);
            context.executeQueryAsync();
            function OnSuccess() {
            ULSc2E:
                ;
                var r = [];
                var count = listItems.get_count();

                for (var i = 0; i < count; i++) {
                    var item = listItems.itemAt(i);
                    var dataValues = item.get_fieldValues();
                    var localizedValues = (item.get_fieldValuesAsText()).get_fieldValues();

                    if (IsStrNullOrEmpty(localizedValues[fieldName]))
                        continue;
                    r.push({
                        id: dataValues['ID'],
                        locValue: localizedValues[fieldName]
                    });
                }
                fnCallback(r);
            }
            function OnFailure() {
            ULSc2E:
                ;
                fnCallback(null);
            }
        }
    };
    (function() {
    ULSc2E:
        ;
        SPG.MultilineTextPropertyType = function() {
        ULSc2E:
            ;
            this.ID = 'SPMultilineText';
            this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
            ULSc2E:
                ;
                newValue = newValue != null && newValue.length == 0 ? null : newValue.replace(/<br>/g, '\n');
                fnCallback({
                    isValid: true,
                    dataValue: newValue,
                    normalizedLocValue: newValue
                });
            };
            this.LocalizedValueToCSRValue = function(value) {
            ULSc2E:
                ;
                return value == null ? null : STSHtmlEncode(value.replace(/\n/g, "<br>"));
            };
        };
        SPG.EnhancedRichTextPropertyType = function() {
        ULSc2E:
            ;
            this.ID = 'SPEnhancedRichText';
            this.BeginValidateNormalizeConvert = function(recordKey, fieldKey, newValue, bIsLocalized, fnCallback, fnError) {
            ULSc2E:
                ;
                newValue = newValue != null && newValue.length == 0 ? null : newValue;
                fnCallback({
                    isValid: true,
                    dataValue: newValue,
                    normalizedLocValue: newValue
                });
            };
            this.LocalizedValueToCSRValue = function(value) {
            ULSc2E:
                ;
                return value;
            };
        };
    })();
    SPG.BarStyle = {
        Summary: 0,
        Standard: 1,
        Milestone: 2,
        PctComplete: 3
    };
    SPG.Permissions = {
        addListItems: 0x02,
        editListItems: 0x04,
        deleteListItems: 0x08
    };
    g_ganttControlInstances = {};
    OnJsGridIframeLoad = function(param) {
    ULSc2E:
        ;
        g_ganttControlInstances[param].OnAutoFilterReturn();
    };
    SPG.MultilinePlainTextEditControl = function(gridContext) {
    ULSc2E:
        ;
        this.SupportedWriteMode = SP.JsGrid.EditActorWriteType.LocalizedOnly;
        this.SupportedReadMode = SP.JsGrid.EditActorReadType.LocalizedOnly;
        var _this = this;
        var id = "jsgrid_multilineeditbox";
        var textArea;
        var parentNode = gridContext.parentNode;
        var cellContext;
        var bInEdit;

        function SizeToCellOrDefault() {
        ULSc2E:
            ;
            var width = cellContext.cellWidth - 12;
            var height = cellContext.cellHeight - 6;

            textArea.style.width = width + 'px';
            textArea.style.height = height + 'px';
        }
        function OnMouseDown(eventInfo) {
        ULSc2E:
            ;
            eventInfo.stopPropagation();
        }
        function OnKeyDown(eventInfo) {
        ULSc2E:
            ;
            if (eventInfo.keyCode == 13) {
                return;
            }
            if (typeof gridContext.OnKeyDown == "function") {
                gridContext.OnKeyDown(eventInfo);
            }
        }
        function SetupHandlers(bAttach) {
        ULSc2E:
            ;
            if (bAttach) {
                $addHandler(textArea, 'focus', gridContext.OnActivateActor);
                $addHandler(textArea, 'blur', gridContext.OnDeactivateActor);
                $addHandler(textArea, 'keydown', OnKeyDown);
                $addHandler(textArea, 'mousedown', OnMouseDown);
            }
            else {
                $removeHandler(textArea, 'focus', gridContext.OnActivateActor);
                $removeHandler(textArea, 'blur', gridContext.OnDeactivateActor);
                $removeHandler(textArea, 'keydown', OnKeyDown);
                $removeHandler(textArea, 'mousedown', OnMouseDown);
            }
        }
        function GetCSRFieldValue() {
        ULSc2E:
            ;
            var field = cellContext.field.key;

            if (cellContext.record.fieldRawDataMap.csrInfo != null) {
                var value = cellContext.record.fieldRawDataMap.csrInfo[field];

                if (value != null) {
                    value = STSHtmlDecode(value);
                    value = value.replace(/<br>/g, "\n");
                }
                return value;
            }
            return null;
        }
        function SetCSRFieldValue(value) {
        ULSc2E:
            ;
            var csrValue = value;

            if (value != null) {
                csrValue = STSHtmlEncode(csrValue);
                csrValue = csrValue.replace(/\n/g, "<br>");
            }
            var field = cellContext.field.key;

            if (cellContext.record.fieldRawDataMap.csrInfo == null) {
                cellContext.record.fieldRawDataMap.csrInfo = {};
            }
            cellContext.record.fieldRawDataMap.csrInfo[field] = csrValue;
            cellContext.SetCurrentValue({
                localized: value
            });
        }
        this.Dispose = function() {
        ULSc2E:
            ;
            $clearHandlers(textArea);
        };
        this.Focus = function(eventInfo) {
        ULSc2E:
            ;
            try {
                textArea.focus();
                if (eventInfo == null) {
                    textArea.value = textArea.value;
                }
                else {
                    if (eventInfo.type == 'mousedown' || eventInfo.type == 'gridapi' || eventInfo.type == 'keydown' && eventInfo.keyCode == SP.Internal.Key.F2) {
                        HandleMouseDownOrF2OrGridAPI();
                    }
                    else if (SP.JsGrid.Utility.IsChar(eventInfo)) {
                        textArea.value = String.fromCharCode(eventInfo.charCode);
                        SetCSRFieldValue(textArea.value);
                    }
                }
            }
            catch (e) {
                Sys.Debug.assert(false, "Incorrectly trying to focus the MultilineEditControl while hidden?");
            }
            function HandleMouseDownOrF2OrGridAPI() {
            ULSc2E:
                ;
                var currentValue = GetCSRFieldValue();

                textArea.value = currentValue == null || currentValue == SP.JsGrid.EmptyValue ? '' : currentValue;
            }
        };
        this.BindToCell = function(contextParam) {
        ULSc2E:
            ;
            cellContext = contextParam;
            SizeToCellOrDefault();
            if (cellContext.field.textDirection != SP.JsGrid.TextDirection.Default) {
                textArea.style.direction = cellContext.field.textDirection == SP.JsGrid.TextDirection.RightToLeft ? 'rtl' : 'ltr';
            }
            var currentValue = GetCSRFieldValue();

            textArea.value = currentValue == null || currentValue == SP.JsGrid.EmptyValue ? '' : currentValue;
        };
        this.OnBeginEdit = function(eventInfo) {
            cellContext.Show(textArea);
            bInEdit = true;
            SetupHandlers(true);
            if (eventInfo.type == 'mousedown') {
                setTimeout(function() {
                ULSc2E:
                    ;
                    _this.Focus(eventInfo);
                }, 0);
            }
            else {
                _this.Focus(eventInfo);
            }
        };
        this.Unbind = function() {
        ULSc2E:
            ;
            textArea.value = "";
        };
        this.OnEndEdit = function() {
        ULSc2E:
            ;
            SetupHandlers(false);
            var originalValue = GetCSRFieldValue();

            originalValue = originalValue == null || originalValue == SP.JsGrid.EmptyValue ? '' : originalValue;
            if (textArea.value != originalValue) {
                SetCSRFieldValue(textArea.value);
            }
            cellContext.Hide(textArea);
            bInEdit = false;
        };
        this.OnCellMove = function() {
        ULSc2E:
            ;
            SizeToCellOrDefault();
            if (bInEdit) {
                cellContext.Show(textArea);
            }
        };
        this.OnValueChanged = function(newValue) {
        ULSc2E:
            ;
            textArea.value = newValue.localized == null || newValue.localized == SP.JsGrid.EmptyValue ? '' : newValue.localized;
        };
        textArea = document.createElement('textarea');
        textArea.id = id;
        textArea.className = "jsgrid-control-multiline";
        textArea.style.cssText = 'visibility:hidden;position:absolute;top:0px;left:0px;';
        textArea.tabIndex = -1;
        textArea.style.direction = gridContext.RTL.ltr;
        parentNode.appendChild(textArea);
    };
    SPG.EnhancedRichTextEditControl = function(gridContext) {
    ULSc2E:
        ;
        this.SupportedWriteMode = SP.JsGrid.EditActorWriteType.LocalizedOnly;
        this.SupportedReadMode = SP.JsGrid.EditActorReadType.LocalizedOnly;
        var _this = this;
        var id = "jsgrid_richtexteditbox";
        var parentNode = gridContext.parentNode;
        var cellContext;
        var bInEdit;
        var rteMinHeight = 84;

        function SizeToCellOrDefault() {
        ULSc2E:
            ;
            var width = cellContext.cellWidth - 6 + 'px';
            var height = cellContext.cellHeight - 6 + 'px';

            outerSpan.style.minWidth = width;
            outerSpan.style.minHeight = height;
            divRteStateWrite.style.minWidth = width;
            divRteStateWrite.style.minHeight = height;
        }
        function OnMouseDown(eventInfo) {
        ULSc2E:
            ;
            eventInfo.stopPropagation();
        }
        function OnKeyDown(eventInfo) {
        ULSc2E:
            ;
            if (eventInfo.keyCode == 13) {
                return;
            }
            if (typeof gridContext.OnKeyDown == "function") {
                gridContext.OnKeyDown(eventInfo);
            }
        }
        function SetupHandlers(bAttach) {
        ULSc2E:
            ;
            if (bAttach) {
                $addHandler(divRteStateWrite, 'focus', gridContext.OnActivateActor);
                $addHandler(divRteStateWrite, 'keydown', OnKeyDown);
                $addHandler(divRteStateWrite, 'mousedown', OnMouseDown);
            }
            else {
                $removeHandler(divRteStateWrite, 'focus', gridContext.OnActivateActor);
                $removeHandler(divRteStateWrite, 'keydown', OnKeyDown);
                $removeHandler(divRteStateWrite, 'mousedown', OnMouseDown);
            }
        }
        function GetCSRFieldValue() {
        ULSc2E:
            ;
            var field = cellContext.field.key;

            if (cellContext.record.fieldRawDataMap.csrInfo != null) {
                return cellContext.record.fieldRawDataMap.csrInfo[field];
            }
            return null;
        }
        function SetCSRFieldValue(value) {
        ULSc2E:
            ;
            var field = cellContext.field.key;

            if (cellContext.record.fieldRawDataMap.csrInfo == null) {
                cellContext.record.fieldRawDataMap.csrInfo = {};
            }
            cellContext.record.fieldRawDataMap.csrInfo[field] = value;
            cellContext.SetCurrentValue({
                localized: value
            });
        }
        this.Dispose = function() {
        ULSc2E:
            ;
            $clearHandlers(divRteStateWrite);
        };
        this.Focus = function(eventInfo) {
        ULSc2E:
            ;
            try {
                divRteStateWrite.focus();
                if (eventInfo == null) {
                    (RTE.Cursor.get_range()).moveToEndOfNode(divRteStateWrite);
                    RTE.Cursor.update();
                }
                else {
                    if (eventInfo.type == 'mousedown' || eventInfo.type == 'gridapi' || eventInfo.type == 'keydown' && eventInfo.keyCode == SP.Internal.Key.F2) {
                        HandleMouseDownOrF2OrGridAPI();
                    }
                    else if (SP.JsGrid.Utility.IsChar(eventInfo)) {
                        divRteStateWrite.innerHTML = "";
                        saveInput.value = String.fromCharCode(eventInfo.charCode);
                        SetCSRFieldValue(saveInput.value);
                        var textNode = document.createTextNode(saveInput.value);

                        (RTE.Cursor.get_range()).moveToEndOfNode(divRteStateWrite);
                        (RTE.Cursor.get_range()).insertNode(textNode);
                        (RTE.Cursor.get_range()).moveToEndOfNode(divRteStateWrite);
                        RTE.Cursor.update();
                    }
                }
            }
            catch (e) {
                Sys.Debug.assert(false, "Incorrectly trying to focus the MultilineEditControl while hidden?");
            }
            function HandleMouseDownOrF2OrGridAPI() {
            ULSc2E:
                ;
                var currentValue = GetCSRFieldValue();

                saveInput.value = currentValue == null || currentValue == SP.JsGrid.EmptyValue ? '' : currentValue;
                divRteStateWrite.innerHTML = saveInput.value;
                (RTE.Cursor.get_range()).moveToEndOfNode(divRteStateWrite);
                RTE.Cursor.update();
            }
        };
        this.BindToCell = function(contextParam) {
        ULSc2E:
            ;
            cellContext = contextParam;
            RecreateDivRteStateWrite();
            SizeToCellOrDefault();
            if (cellContext.field.textDirection != SP.JsGrid.TextDirection.Default) {
                divRteStateWrite.style.direction = cellContext.field.textDirection == SP.JsGrid.TextDirection.RightToLeft ? 'rtl' : 'ltr';
            }
            var currentValue = GetCSRFieldValue();

            saveInput.value = currentValue == null || currentValue == SP.JsGrid.EmptyValue ? '' : currentValue;
            divRteStateWrite.innerHTML = saveInput.value;
        };
        this.OnBeginEdit = function(eventInfo) {
            cellContext.Show(outerSpan);
            bInEdit = true;
            SetupHandlers(true);
            if (eventInfo.type == 'mousedown') {
                setTimeout(function() {
                ULSc2E:
                    ;
                    _this.Focus(eventInfo);
                }, 0);
            }
            else {
                _this.Focus(eventInfo);
            }
        };
        this.Unbind = function() {
        ULSc2E:
            ;
            saveInput.value = "";
            divRteStateWrite.innerHTML = "";
        };
        this.OnEndEdit = function() {
        ULSc2E:
            ;
            SetupHandlers(false);
            var originalValue = GetCSRFieldValue();

            originalValue = originalValue == null || originalValue == SP.JsGrid.EmptyValue ? '' : originalValue;
            RTE.RichTextEditor.transferContentsToInputField(divRteStateWriteId, false);
            if (saveInput.value != originalValue) {
                SetCSRFieldValue(saveInput.value);
            }
            cellContext.Hide(outerSpan);
            outerSpan.style.top = "-10000px";
            outerSpan.style.left = "-10000px";
            bInEdit = false;
        };
        this.OnCellMove = function() {
        ULSc2E:
            ;
            SizeToCellOrDefault();
            if (bInEdit) {
                cellContext.Show(outerSpan);
            }
        };
        this.OnValueChanged = function(newValue) {
        ULSc2E:
            ;
            saveInput.value = newValue.localized == null || newValue.localized == SP.JsGrid.EmptyValue ? '' : newValue.localized;
            divRteStateWrite.innerHTML = saveInput.value;
        };
        function RecreateDivRteStateWrite() {
        ULSc2E:
            ;
            if (divRteStateWrite != null) {
                divRteStateField.removeChild(divRteStateWrite);
                divRteStateWrite = null;
            }
            divRteStateWrite = document.createElement("div");
            divRteStateWrite.className = "ms-rtestate-write ms-rteflags-0";
            divRteStateWrite.id = divRteStateWriteId;
            divRteStateWrite.style.minHeight = rteMinHeight + "px";
            divRteStateWrite.setAttribute("aria-labelledby", id + "_label");
            divRteStateWrite.setAttribute("contentEditable", "true");
            divRteStateWrite.style.direction = gridContext.RTL.ltr;
            divRteStateWrite.style.paddingLeft = "3px";
            divRteStateWrite.style.paddingRight = "3px";
            divRteStateField.appendChild(divRteStateWrite);
            if (divRteStateWrite != null) {
                divRteStateWrite.InputFieldId = saveInputId;
            }
            if (saveInput != null && saveInput.value == '') {
                saveInput.value = divRteStateWrite.innerHTML;
            }
            RTE.Canvas.fixRegion(divRteStateWriteId, false);
        }
        var outerSpan = document.createElement("span");

        outerSpan.id = id;
        outerSpan.className = "jsgrid-control-rte";
        outerSpan.style.cssText = 'visibility:hidden;position:absolute;top:-10000px;left:-10000px;';
        outerSpan.tabIndex = -1;
        var divRteStateField = document.createElement("div");

        divRteStateField.className = "ms-rtestate-field ms-rtefield ms-shadow";
        divRteStateField.style.minWidth = "0px";
        divRteStateField.id = id + "_topDiv";
        var divRteLabel = document.createElement("div");

        divRteLabel.id = id + "_label";
        divRteLabel.style.display = "none";
        var divRteStateWriteId = id = "_rte";
        var divRteStateWrite = null;
        var divRteExtra = document.createElement("div");

        divRteExtra.style.clear = "both";
        divRteStateField.appendChild(divRteLabel);
        divRteStateField.appendChild(divRteExtra);
        outerSpan.appendChild(divRteStateField);
        var spanRteContainer = document.createElement("span");
        var saveInputId = id + "_saveInput";
        var saveInput = document.createElement("input");

        saveInput.id = saveInputId;
        saveInput.type = "hidden";
        var focusInput = document.createElement("input");

        focusInput.id = "ms-rtefocuselementid";
        focusInput.name = "ms-rtefocuselementid";
        focusInput.type = "hidden";
        spanRteContainer.appendChild(saveInput);
        spanRteContainer.appendChild(focusInput);
        outerSpan.appendChild(spanRteContainer);
        parentNode.appendChild(outerSpan);
    };
    SPG.GetEditBoxEditControl = function(gridContext, bHyperlink) {
        var editBoxEditControl = bHyperlink ? SP.JsGrid.EditControl.GetHyperlinkEditControl(gridContext) : new SP.JsGrid.EditControl.EditBoxEditControl(gridContext);
        var bindToCellFn = editBoxEditControl.BindToCell;

        editBoxEditControl.BindToCell = function(cellContext) {
        ULSc2E:
            ;
            bindToCellFn.call(this, cellContext);
            var _tb = this.GetInputElement();

            if (typeof cellContext.propType.GetMaxLength == "function") {
                _tb.setAttribute("MaxLength", cellContext.propType.GetMaxLength(cellContext.fieldKey));
            }
        };
        var unbindFn = editBoxEditControl.Unbind;

        editBoxEditControl.Unbind = function() {
        ULSc2E:
            ;
            unbindFn.call(this);
            var _tb = this.GetInputElement();

            _tb.setAttribute("MaxLength", null);
        };
        return editBoxEditControl;
    };
    SP.WebMethod = function(name, fnGenerateArgs) {
        this.name = name;
        this.fnGenerateArgs = fnGenerateArgs;
    };
    SP.HierarchyTasksWebManager = function(url) {
    ULSc2E:
        ;
        Sys.Debug.assert(url != null && url != '');
        this.RegisterMethod = function(method) {
        ULSc2E:
            ;
            this[method.name] = function(psiArgs, fnOnSuccess, fnOnFailure, optWebServiceName) {
            ULSc2E:
                ;
                ExecuteMethod(method, psiArgs, fnOnSuccess, fnOnFailure, optWebServiceName);
            };
            return method;
        };
        function ExecuteMethod(webMethod, args, fnOnSuccess, fnOnFailure, optWebServiceName) {
        ULSc2E:
            ;
            var request = new SP.PageRequest();

            request.set_url(url);
            request.set_expectedContentType('application/json');
            request.add_succeeded(OnSucceed);
            request.add_failed(OnFail);
            request.post('cmd=' + webMethod.name + "&args=" + Sys.Serialization.JavaScriptSerializer.serialize(args));
            function OnSucceed(sender, args) {
            ULSc2E:
                ;
                var responseData = (args.get_executor()).get_responseData();
                var response = null;

                ULS.AssertJS(ULSCat.msoulscat_WSS_SPGantt, responseData != null && responseData != "", "Null or empty parameter to deserialize");
                try {
                    response = SP_JSONParse(responseData);
                }
                catch (e) {
                    ULS.SendExceptionJS(ULSCat.msoulscat_WSS_SPGantt, e);
                    return;
                }
                if (response.correlationId != null) {
                    addNotification(SP.Res.unknownError + ': ' + response.error + ' ' + response.correlationId, true);
                    if (fnOnFailure != null) {
                        fnOnFailure();
                    }
                }
                else {
                    fnOnSuccess(response);
                }
            }
            function OnFail() {
            ULSc2E:
                ;
                addNotification(SP.Res.serverCommError, false);
                if (fnOnFailure != null) {
                    fnOnFailure();
                }
            }
        }
    };
    SP.GanttControl = function() {
    ULSc2E:
        ;
        var _this = this;
        var _jsGridControl;
        var _tableViewParams;
        var _commandMgr;
        var _serverWriteTimeout = null;
        var _params;
        var _webMethodMgr;
        var _dataSource;
        var _gridFieldMap;
        var _newRowEnabled;
        var _editRowEnabled;
        var _bGrouped;
        var _moveState;
        var _sortState;
        var _filterUrl;
        var _pagingInfo;
        var _gridParams;
        var _infoFetched;
        var _autoFilterContext;
        var _hierarchyEnabled = false;
        var _canModifyHierarchy = false;
        var _rowLevelErrors = {};
        var _GridValueToSPListValueConverters = {}, _SPListValueToGridValueConverters = {};
        var _selfReferencingLookupPropTypes = {};
        var _propChangesPendingValidation = new SP.Utilities.Set();
        var _changeKeysPendingValidation = {};
        var _changesToSend = {};
        var _changesBeingSent;
        var _cascadingChangeKey;
        var _currentlyWritingChangesToList;
        var _queuedWriteChangesRequest;
        var _currentlyCreatingNewListItem;
        var _currentlyDeletingListItems;
        var _currentlyRenamingColumn = false;
        var _currentlyDisposing;
        var _currentlyShowingDisposeDialog;
        var _isDisposed;
        var _fnCallbacksByChangeKey = new SP.JsGrid.ChangeKeyOnCompleteMap();
        var _isFullLoadCompleted = false;
        var _fnCallbackCompleteFullLoad = [];
        var _fnRowChanged = [];
        var _editBoxControlId;
        var _hyperlinkControlId;
        var _additionalParams;

        this.customFieldInfo;
        this.get_Api = function() {
        ULSc2E:
            ;
            return this._api;
        };
        this.AttachFullLoadCallback = function(callback) {
            _fnCallbackCompleteFullLoad.push(callback);
            if (_isFullLoadCompleted) {
                callback(_gridFieldMap);
            }
        };
        this.AttachRowChanged = function(callback) {
            _fnRowChanged.push(callback);
        };
        this.GetListId = function() {
        ULSc2E:
            ;
            return _params.listId;
        };
        this.UpdateProperties = function(updates) {
        ULSc2E:
            ;
            _jsGridControl.UpdateProperties(updates, null, null);
        };
        this.IsParseAndSetFields = function(fieldKey) {
        ULSc2E:
            ;
            return fieldKey in _params.parseAndSetFields;
        };
        function UpdateDisplayAndEditControls() {
        ULSc2E:
            ;
            SP.JsGrid.PropertyType.Utils.UpdateEditControlForPropType("String", _editBoxControlId);
            SP.JsGrid.PropertyType.Utils.UpdateEditControlForPropType("Hyperlink", _hyperlinkControlId);
            if (_params.spGrid) {
                var propTypeNames = SP.JsGrid.PropertyType.Utils.GetPropTypes();

                for (var i = 0; i < propTypeNames.length; i++) {
                    var propTypeName = propTypeNames[i];

                    SP.JsGrid.PropertyType.Utils.UpdateDisplayControlForPropType(propTypeName, SP.JsGrid.DisplayControl.Type.CSR);
                }
            }
        }
        ;
        this.Init = function(jsGridControl, jsRawGridData, params) {
        ULSc2E:
            ;
            _jsGridControl = jsGridControl;
            g_ganttControlInstances[_jsGridControl.parentNode.id] = this;
            _params = params;
            if (_params.viewSelectorId) {
                EnsureScriptFunc("clienttemplates.js", "RenderViewSelectorPivotMenu", function() {
                ULSc2E:
                    ;
                    var html = RenderViewSelectorPivotMenu({
                        'wpq': _params.viewSelectorId,
                        'viewTitle': _params.viewTitle,
                        'ListSchema': {
                            'ViewSelectorPivotMenuOptions': _params.ViewSelectorPivotMenuOptions
                        }
                    });

                    (document.getElementById(_params.viewSelectorId)).innerHTML = '<div class="ms-csrlistview-controldiv">' + html + '</div>';
                });
            }
            if (jsRawGridData != null) {
                _additionalParams = jsRawGridData.AdditionalParams;
                if (jsRawGridData.SortState != null && jsRawGridData.SortState.length == 1) {
                    var sortState = jsRawGridData.SortState;

                    _sortState = {
                        sortField: sortState[0].fieldKey,
                        isDescending: sortState[0].isDescending
                    };
                }
                ResolveAutoFilterState(jsRawGridData.AutoFilterState);
                var renderCtx = params.spCsrRenderCtx;

                if (renderCtx != null) {
                    var pagingQstr = new QstringStruct(renderCtx.clvp.PagingString());

                    for (var filterArg in pagingQstr.filterParams) {
                        delete pagingQstr.filterParams[filterArg];
                    }
                    for (var nonFilterArg in pagingQstr.nonFilterParams) {
                        if (nonFilterArg != "Paged" && nonFilterArg != "PagedPrev" && nonFilterArg != "PageFirstRow" && nonFilterArg != "PageLastRow" && nonFilterArg != "FirstRow" && nonFilterArg.indexOf("p_") != 0) {
                            delete pagingQstr.nonFilterParams[nonFilterArg];
                        }
                    }
                    _pagingInfo = pagingQstr.toString();
                }
            }
            _infoFetched = new Array(_params.totalItemCount);
            InitSPListValueConversion(_params.splookupFieldInfo);
            this.customFieldInfo = _params.customFieldInfo;
            _gridParams = new SP.JsGrid.JsGridControl.Parameters();
            _gridParams.canUserAddColumn = _params.canUserAddColumn;
            _gridParams.showAddColumn = _params.showAddColumn;
            _gridParams.spGrid = _params.spGrid;
            _gridParams.spCsrRenderCtx = _params.spCsrRenderCtx;
            _gridParams.qualifier = _params.qualifier;
            if (_gridParams.tableViewParams != null) {
                if (typeof _params.bHidableColumns == "boolean") {
                    _gridParams.tableViewParams.bHidableColumns = _params.bHidableColumns;
                }
                if (typeof _params.bMovableColumns == "boolean") {
                    _gridParams.tableViewParams.bMovableColumns = _params.bMovableColumns;
                }
            }
            _editBoxControlId = SP.JsGrid.EditControl.Type.EditBox;
            if (_params.spGrid) {
                _editBoxControlId = "EDIT_SPGRIDEDITBOX";
                SP.JsGrid.PropertyType.Utils.RegisterEditControl(_editBoxControlId, function(gridContext) {
                ULSc2E:
                    ;
                    return SPG.GetEditBoxEditControl(gridContext);
                }, []);
            }
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.TextMaxLengthPropertyType(BuildMaxLengthTable(_params.customFieldInfo)), SP.JsGrid.DisplayControl.Type.Text, _editBoxControlId);
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.DatePropertyType(), SP.JsGrid.DisplayControl.Type.Text, _editBoxControlId, [SP.JsGrid.WidgetControl.Type.Date]);
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.EditPropertyType(), SP.JsGrid.DisplayControl.Type.Image, _editBoxControlId);
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.UserPropertyType(this), SP.JsGrid.DisplayControl.Type.Text, _editBoxControlId, [SP.JsGrid.WidgetControl.Type.AddressBook]);
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.PercentCompletePropertyType(), SP.JsGrid.DisplayControl.Type.Text, _editBoxControlId);
            _hyperlinkControlId = SP.JsGrid.EditControl.Type.Hyperlink;
            if (_params.spGrid) {
                _hyperlinkControlId = "EDIT_SPGHYPERLINK";
                SP.JsGrid.PropertyType.Utils.RegisterEditControl(_hyperlinkControlId, function(gridContext) {
                ULSc2E:
                    ;
                    return SPG.GetEditBoxEditControl(gridContext, true);
                }, []);
            }
            var useCsrDependentControls = _params.spGrid && _params.spCsrRenderCtx != null;

            if (useCsrDependentControls) {
                var spgMultilinePlainTextId = 'EDIT_SPGMULTILINEPLAINTEXT';

                SP.JsGrid.PropertyType.Utils.RegisterEditControl(spgMultilinePlainTextId, function(gridContext) {
                ULSc2E:
                    ;
                    return new SPG.MultilinePlainTextEditControl(gridContext);
                }, []);
                var spgEnhancedRichTextId = 'EDIT_SPGENHANCEDRICHTEXT';

                SP.JsGrid.PropertyType.Utils.RegisterEditControl(spgEnhancedRichTextId, function(gridContext) {
                ULSc2E:
                    ;
                    return new SPG.EnhancedRichTextEditControl(gridContext);
                }, []);
            }
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.MultilineTextPropertyType(), SP.JsGrid.DisplayControl.Type.Text, useCsrDependentControls ? spgMultilinePlainTextId : _editBoxControlId);
            SP.JsGrid.PropertyType.RegisterNewCustomPropType(new SPG.EnhancedRichTextPropertyType(), SP.JsGrid.DisplayControl.Type.Text, useCsrDependentControls ? spgEnhancedRichTextId : _editBoxControlId);
            if (typeof SP.UI.Taxonomy != "undefined" && SP.UI.Taxonomy) {
                SP.UI.Taxonomy.ControlRegistration.RegisterGridControls(this, this.customFieldInfo, useCsrDependentControls);
            }
            for (var fieldName in _params.splookupFieldInfo) {
                var info = _params.splookupFieldInfo[fieldName];
                var propType = new SPG.LookupPropertyType(fieldName, info);

                SP.JsGrid.PropertyType.RegisterNewCustomPropType(propType, SP.JsGrid.DisplayControl.Type.Text, SP.JsGrid.EditControl.Type.ComboBox);
                if (info.listId.toUpperCase() == _params.listId.toUpperCase()) {
                    if (_selfReferencingLookupPropTypes[info.field] == null) {
                        _selfReferencingLookupPropTypes[info.field] = [];
                    }
                    _selfReferencingLookupPropTypes[info.field].push(propType);
                }
            }
            if (_params.spGrid) {
                _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.GetFieldEditMode, GetFieldEditMode);
                _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.GetFieldReadOnlyActiveState, GetFieldReadOnlyActiveState);
                var styleMgr = _gridParams.styleManager;
                var headerStyles = styleMgr.columnHeaderStyleCollection;

                styleMgr.UpdateHeaderStyleFromCss(headerStyles, {
                    normal: {
                        base: 'ms-spgrid-col-header-normal'
                    },
                    normalHover: {
                        base: 'ms-spgrid-col-header-normal-hover',
                        elementColor: 'ms-spgrid-col-header-elem-bg-colors-normal-hover',
                        elementHoverColor: 'ms-spgrid-col-header-elem-hover-bg-colors-normal-hover',
                        elementClickColor: 'ms-spgrid-col-elem-colors-click-normal-hover'
                    },
                    partSelected: {
                        base: 'ms-spgrid-col-header-part-selected'
                    },
                    partSelectedHover: {
                        base: 'ms-spgrid-col-header-part-selected-hover',
                        elementColor: 'ms-spgrid-col-header-elem-bg-colors-part-selected-hover',
                        elementHoverColor: 'ms-spgrid-col-header-elem-hover-bg-colors-part-selected-hover',
                        elementClickColor: 'ms-spgrid-col-elem-colors-click-part-selected-hover'
                    },
                    allSelected: {
                        base: 'ms-spgrid-col-header-all-selected'
                    },
                    allSelectedHover: {
                        base: 'ms-spgrid-col-header-all-selected-hover',
                        elementColor: 'ms-spgrid-col-header-elem-bg-colors-all-selected-hover',
                        elementHoverColor: 'ms-spgrid-col-header-elem-hover-bg-colors-all-selected-hover',
                        elementClickColor: 'ms-spgrid-col-elem-colors-click-all-selected-hover'
                    }
                });
                this.GetCLVPQString = function() {
                ULSc2E:
                    ;
                    var myCtx = _jsGridControl.GetSpCsrRenderCtx();

                    Sys.Debug.assert(myCtx != null);
                    var sortStr = null;

                    if (_sortState != null) {
                        sortStr = "SortField=" + _sortState.sortField + "&SortDir=" + (_sortState.isDescending ? "Desc" : "Asc");
                    }
                    var qstr = new QstringStruct(ReconcileQstringFilters(ReconcileQstringFilters(_pagingInfo, _filterUrl), sortStr));

                    if (qstr.nonFilterParams["SortField"] != null) {
                        qstr.nonFilterParams["SortField"] = GetCSRFieldKeyFromJsGridFieldKey(qstr.nonFilterParams["SortField"]);
                    }
                    for (var idx in qstr.filterParams) {
                        var filterFieldKeyText = "FilterField";
                        var filterField = qstr.filterParams[idx][filterFieldKeyText];

                        if (filterField == null) {
                            filterFieldKeyText = "FilterFields";
                            filterField = qstr.filterParams[idx][filterFieldKeyText];
                        }
                        Sys.Debug.assert(filterField != null);
                        qstr.filterParams[idx][filterFieldKeyText] = GetCSRFieldKeyFromJsGridFieldKey(filterField);
                    }
                    if (_params.viewRootFolder) {
                        qstr.nonFilterParams["RootFolder"] = escapeProperly(_params.viewRootFolder);
                    }
                    return qstr;
                };
                this.GetUnfilteredHierarchyMap = function() {
                ULSc2E:
                    ;
                    return _jsGridControl.GetUnfilteredHierarchyMap();
                };
            }
            _hierarchyEnabled = _params.parentColumnName != null && _params.taskOrderColumnName != null;
            if (_params.hierarchyTasksDataServiceUrl != null && _params.hierarchyTasksDataServiceUrl != '') {
                _hierarchyEnabled = true;
                _webMethodMgr = new SP.HierarchyTasksWebManager(_params.hierarchyTasksDataServiceUrl + ajaxNavigate.get_search());
                _dataSource = new SP.JsGrid.WebMethodDataSource(_webMethodMgr.RegisterMethod(new SP.WebMethod('GetGridJsonForList', GenerateWebMethodArgs)), _webMethodMgr.RegisterMethod(new SP.WebMethod('GetGridJsonForList', GenerateWebMethodArgs)), _webMethodMgr, _jsGridControl, null, null, true);
                _dataSource.BeginFullLoad(FinishFullLoad, null, _gridParams);
            }
            else {
                _dataSource = new SP.JsGrid.SharePointDataSource(new SP.WebMethod('Populate', function() {
                ULSc2E:
                    ;
                    return {};
                }), new SP.WebMethod('Init', function() {
                ULSc2E:
                    ;
                    return {};
                }), new SP.WebMethod('ComputeDataRange', function() {
                ULSc2E:
                    ;
                    return {};
                }), {
                    'Populate': function(args, fnSuccess, fnFail) {
                    ULSc2E:
                        ;
                        var q = _this.GetCLVPQString();
                        var rg = q.toArray();

                        rg.push("ShowInGrid=True");
                        var renderCtx = _jsGridControl.GetSpCsrRenderCtx();
                        var url = "?" + rg.join("&");

                        renderCtx.queryString = url;
                        renderCtx.clvp.RefreshPaging(url);
                    },
                    'Init': function(args, fnSuccess, fnFail) {
                    ULSc2E:
                        ;
                        fnSuccess(jsRawGridData);
                        SetItemInfoPresent(_jsGridControl.GetTopRowIndex());
                    },
                    'ComputeDataRange': function(fnCallback) {
                    ULSc2E:
                        ;
                        return ComputeSPDataRange(fnCallback);
                    }
                }, _jsGridControl, function() {
                }, UpdateDisplayAndEditControls);
                _dataSource.BeginFullLoad(FinishFullLoad, function() {
                }, _gridParams);
            }
            SP.GanttControl.Instances.push(_this);
            var creationCallbacks = SP.GanttControl.FnGanttCreationCallback;

            for (var idx = 0; idx < creationCallbacks.length; idx++) {
                creationCallbacks[idx](_this);
            }
        };
        this.TryDispose = function(OnDispose) {
            var _this = this;
            var tryDisposeInternal = function() {
            ULSc2E:
                ;
                _this.TryDisposeInternal(OnDispose);
            };

            _jsGridControl.FinalizeEditing(tryDisposeInternal, tryDisposeInternal);
        };
        this.TryDisposeInternal = function(OnDispose, recursing) {
            var _this = this;
            var savingState = _currentlyWritingChangesToList || _currentlyCreatingNewListItem || _currentlyDeletingListItems || _currentlyRenamingColumn;

            if (recursing && !_currentlyDisposing || _isDisposed) {
                return;
            }
            if (_jsGridControl.AnyUncomittedEntryRecords()) {
                _jsGridControl.JumpToEntryRecord();
                savingState = true;
            }
            if (!SP.Internal.JS.IsAssocArrayEmpty(_changesToSend)) {
                WriteChangesToListCore();
                savingState = true;
            }
            if (_jsGridControl.AnyErrors()) {
                if (_currentlyShowingDisposeDialog) {
                    commonModalDialogClose(0);
                }
                _currentlyShowingDisposeDialog = true;
                ShowDialog(Strings.STS.L_SPGanttDisposeErrorDialogTitle, Strings.STS.L_SPGanttDisposeErrorDialogBody, Strings.STS.L_SPGanttDisposeErrorDialogFixButton, Strings.STS.L_SPGanttDisposeDialogDiscardButton, false, DisposeDialogCallback);
            }
            else if (savingState) {
                if (!_currentlyShowingDisposeDialog) {
                    _currentlyDisposing = true;
                    _currentlyShowingDisposeDialog = true;
                    ShowDialog(Strings.STS.L_SPGanttDisposeSavingDialogTitle, Strings.STS.L_SPGanttDisposeSavingDialogBody, null, Strings.STS.L_SPGanttDisposeDialogLeaveButton, true, DisposeDialogCallback, true);
                }
                if (_currentlyDisposing) {
                    setTimeout(function() {
                    ULSc2E:
                        ;
                        _this.TryDisposeInternal(OnDispose, true);
                    }, 200);
                }
            }
            else {
                EnsureScriptFunc("sp.ui.dialog.js", "SP.UI.ModalDialog.get_childDialog", function() {
                ULSc2E:
                    ;
                    var childDlg = SP.UI.ModalDialog.get_childDialog();

                    if (_currentlyShowingDisposeDialog) {
                        Sys.Debug.assert(childDlg != null);
                        commonModalDialogClose(1);
                    }
                    else {
                        Sys.Debug.assert(childDlg == null);
                        DisposeDialogCallback(1);
                    }
                });
            }
            function DisposeDialogCallback(dialogResult, returnValue) {
            ULSc2E:
                ;
                _currentlyShowingDisposeDialog = false;
                if (dialogResult == 1) {
                    _this.Dispose();
                    OnDispose(returnValue);
                }
                else {
                    _currentlyDisposing = false;
                }
            }
        };
        this.Dispose = function() {
        ULSc2E:
            ;
            DetachEvent("beforeunload", OnBeforeUnload);
            _isDisposed = true;
            _jsGridControl.Dispose();
            this._api = null;
        };
        function ShowDialog(title, bodyString, cancelButtonString, okButtonString, showGears, callback, markAsStaleOnCommit) {
            var body = document.createElement("div");
            var paragraph = document.createElement("p");

            if (showGears) {
                var gearImg = document.createElement("img");

                gearImg.src = "/_layouts/15/" + "images/loadingcirclests16.gif";
                gearImg.style.paddingRight = "10px";
                paragraph.appendChild(gearImg);
            }
            var bodyText = document.createTextNode(bodyString);

            paragraph.appendChild(bodyText);
            body.appendChild(paragraph);
            var buttonArea = document.createElement("div");

            buttonArea.className = "ms-alignRight";
            var okButton = document.createElement("button");

            okButton.setAttribute("type", "button");
            var okButtonText = document.createTextNode(okButtonString);

            okButton.appendChild(okButtonText);
            okButton.onclick = function() {
            ULSc2E:
                ;
                commonModalDialogClose(1, {
                    'markGridSerializerAsStale': markAsStaleOnCommit
                });
            };
            buttonArea.appendChild(okButton);
            if (cancelButtonString != null) {
                var cancelButton = document.createElement("button");

                cancelButton.setAttribute("type", "button");
                var cancelButtonText = document.createTextNode(cancelButtonString);

                cancelButton.appendChild(cancelButtonText);
                cancelButton.onclick = function() {
                ULSc2E:
                    ;
                    commonModalDialogClose(0);
                };
                buttonArea.appendChild(cancelButton);
            }
            body.appendChild(buttonArea);
            var dOpts = {
                "html": body,
                "title": title,
                "dialogReturnValueCallback": callback,
                "autoSizeStartWidth": 375
            };

            EnsureScriptFunc("sp.ui.dialog.js", "SP.UI.ModalDialog.showModalDialog", function() {
            ULSc2E:
                ;
                SP.UI.ModalDialog.showModalDialog(dOpts);
                if (cancelButton != null) {
                    cancelButton.focus();
                }
                else {
                    okButton.focus();
                }
            });
        }
        function FinishFullLoad(jsGridParams, additionalParams) {
        ULSc2E:
            ;
            _tableViewParams = jsGridParams.tableViewParams;
            _bGrouped = jsGridParams.tableViewParams.rowViewParams.hierarchyMode == SP.JsGrid.HierarchyMode.Grouping;
            _gridFieldMap = jsGridParams.tableViewParams.gridFieldMap;
            jsGridParams.name = SP.Res.ganttListName;
            jsGridParams.enabledRowHeaderAutoStates.Add(SP.JsGrid.RowHeaderAutoStyleId.Dirty);
            _newRowEnabled = (jsGridParams.tableViewParams.bNewRowEnabled = !_bGrouped && _params.listPermissions & SPG.Permissions.addListItems && (_params.spCsrRenderCtx == null || _params.spCsrRenderCtx.ListSchema["IsDocLib"] != "1"));
            if (jsGridParams.tableViewParams.ganttParams != null) {
                jsGridParams.tableViewParams.ganttParams.fnGetGanttBarDate = GetGanttBarDate;
                jsGridParams.tableViewParams.ganttParams.fnGetGanttBarStyleIds = GetGanttBarStyles;
                jsGridParams.tableViewParams.ganttParams.fnGetPredecessors = GetPredecessors;
            }
            jsGridParams.styleManager.RegisterCellStyle('CheckmarkStyle', SP.JsGrid.Style.CreateStyle(SP.JsGrid.Style.Type.Cell, {
                textAlign: 'center'
            }));
            var checkmarkCol = jsGridParams.tableViewParams.columns.GetColumnByKey('Checkmark');

            if (checkmarkCol != null) {
                checkmarkCol.fnGetCellStyleId = function() {
                ULSc2E:
                    ;
                    return 'CheckmarkStyle';
                };
            }
            if (jsGridParams.tableViewParams.ganttParams != null || _hierarchyEnabled) {
                jsGridParams.styleManager.RegisterCellStyle('Summary', SP.JsGrid.Style.CreateStyle(SP.JsGrid.Style.Type.Cell, {
                    fontWeight: 'bold'
                }));
            }
            _editRowEnabled = (jsGridParams.tableViewParams.bEditingEnabled = _params.listPermissions & SPG.Permissions.editListItems);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.GetRecordEditMode, GetRecordEditMode);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRightClick, OnRightClick);
            var editCol = jsGridParams.tableViewParams.columns.GetColumnByKey('Edit');

            if (editCol != null) {
                editCol.fnShouldLinkSingleValue = function() {
                ULSc2E:
                    ;
                    return true;
                };
                editCol.fnSingleValueClicked = OnEditCellContentsClicked;
            }
            var titleCol = jsGridParams.tableViewParams.columns.GetColumnByKey('Title');

            if (titleCol != null) {
                titleCol.fnShouldLinkSingleValue = ShouldLinkTitleCell;
                titleCol.fnSingleValueClicked = OnTitleCellContentsClicked;
            }
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.AutoFilter, OnAutoFilter);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.Sort, OnSort);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.NextPage, OnNextPage);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.AddNewColumn, AddNewColumn);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.AddNewColumnMenuItems, PopulateAddNewColumnMenuItems);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.GetAutoFilterEntries, GetAutoFilterEntries);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.LaunchFilterDialog, LaunchFilterDialog);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.CreateEntryRecord, CreateEntryRecord);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.TryInsertEntryRecord, CreateNewListItem);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.TryCreateProvisionalRecord, CreateNewListItem);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.DeleteRecords, DeleteSelectedRecords);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.RemoveColumnFromView, RemoveColumnFromView);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.GetGridRowStyleId, jsGridParams.tableViewParams.ganttParams != null || _hierarchyEnabled ? GetGanttGridRowStyleId : null);
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.CanReorderRecords, function() {
            ULSc2E:
                ;
                return _params.canShowReorderUI;
            });
            _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.OnBeforeRecordReordered, OnBeforeRecordReordered);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRowEscape, OnRowEscape);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRowFocusChanged, OnRowFocusChanged);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnPropertyChanged, OnPropertyChanged);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRecordInserted, OnRecordInsertedOrDeleted);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRecordDeleted, OnRecordInsertedOrDeleted);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnRecordsReordered, OnRecordsReordered);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnBeforePropertyChanged, OnBeforePropertyChanged);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnBeginRenameColumn, OnBeginRenameColumn);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnEndRenameColumn, OnEndRenameColumn);
            _jsGridControl.AttachEvent(SP.JsGrid.EventType.OnSingleCellKeyDown, OnSingleCellKeyDown);
            _canModifyHierarchy = _params.canModifyHierarchy && (!_additionalParams || !_additionalParams.missingParentLinks) && _tableViewParams.rowViewParams.sortState.length == 1 && _tableViewParams.rowViewParams.sortState[0].fieldKey == "Order" && _filterUrl == null;
            if (_params.spCsrRenderCtx != null && _params.spCsrRenderCtx.ListData != null && _params.spCsrRenderCtx.ListData.ForceNoHierarchy) {
                _hierarchyEnabled = (_canModifyHierarchy = false);
                jsGridParams.tableViewParams.rowViewParams.hierarchyMode = SP.JsGrid.HierarchyMode.None;
            }
            if (_hierarchyEnabled) {
                if (_canModifyHierarchy) {
                    _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.InsertRecord, _this.InsertProvisionalItemBeforeFocusedItem);
                }
                _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.IndentRecords, function() {
                ULSc2E:
                    ;
                    _this.IndentItems(_this.get_SelectedItems());
                });
                _jsGridControl.SetDelegate(SP.JsGrid.DelegateType.OutdentRecords, function() {
                ULSc2E:
                    ;
                    _this.OutdentItems(_this.get_SelectedItems());
                });
            }
            if (_params.listDirection == 'rtl') {
                jsGridParams.isRTL = true;
            }
            else if (_params.listDirection == 'ltr') {
                jsGridParams.isRTL = false;
            }
            CustomizeGridStyles(jsGridParams);
            _jsGridControl.Init(jsGridParams);
            _commandMgr = jsGridParams.commandMgr;
            AttachEvent("beforeunload", OnBeforeUnload);
            SP.SPGantt.InstrumentedApi.ExecuteWithJsApiLoaded(function() {
            ULSc2E:
                ;
                SP.SPGantt.InstrumentedApi.SPGantt.WrapImplementationInApiAndMarkInitComplete(_this);
            });
            for (var idx = 0; idx < _fnCallbackCompleteFullLoad.length; idx++) {
                _fnCallbackCompleteFullLoad[idx](_gridFieldMap);
            }
            _isFullLoadCompleted = true;
        }
        function CustomizeGridStyles(jsGridParams) {
        ULSc2E:
            ;
            var styleMgr = jsGridParams.styleManager;

            styleMgr.groupingStyles = null;
            if (jsGridParams.spGrid) {
                styleMgr.gridPaneStyle.backgroundColor = 'transparent';
                styleMgr.defaultCellStyle.textAlign = jsGridParams.isRTL ? 'right' : 'left';
                styleMgr.defaultCellStyle.backgroundColor = 'transparent';
                var colHeaderStyles = styleMgr.columnHeaderStyleCollection;

                colHeaderStyles.normal.innerBorderColor = 'transparent';
                colHeaderStyles.normal.eyeBrowColor = 'transparent';
                colHeaderStyles.partSelected.innerBorderColor = 'transparent';
                colHeaderStyles.partSelected.eyeBrowColor = 'transparent';
                colHeaderStyles.allSelected.innerBorderColor = 'transparent';
                colHeaderStyles.allSelected.eyeBrowColor = 'transparent';
            }
        }
        function GenerateWebMethodArgs(requestType) {
        ULSc2E:
            ;
            return {
                listId: _params.listId,
                viewId: _params.viewId
            };
        }
        this.ZoomInGantt = function() {
        ULSc2E:
            ;
            _jsGridControl.SetGanttZoomLevel(_jsGridControl.GetGanttZoomLevel() - 1);
        };
        this.ZoomOutGantt = function() {
        ULSc2E:
            ;
            _jsGridControl.SetGanttZoomLevel(_jsGridControl.GetGanttZoomLevel() + 1);
        };
        this.ScrollGanttToFocusedItem = function() {
        ULSc2E:
            ;
            var record = GetFocusedRecord();

            if (record != null) {
                var date = record.GetDataValue(_params.startColumnName);

                if (date == null) {
                    date = record.GetDataValue(_params.finishColumnName);
                }
                if (date != null) {
                    _jsGridControl.ScrollGanttToDate(date);
                }
            }
        };
        this.get_SelectedItems = function() {
        ULSc2E:
            ;
            var keys = _jsGridControl.GetSelectedRecordKeys();
            var ret = [];

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];

                if (!_jsGridControl.IsGroupingRecordKey(key) && !_jsGridControl.IsEntryRecordKey(key) && !_jsGridControl.IsProvisionalRecordKey(key)) {
                    ret.push(keys[i]);
                }
            }
            return ret;
        };
        this.get_SelectedItemsIncludingProvisionalItems = function() {
        ULSc2E:
            ;
            var keys = _jsGridControl.GetSelectedRecordKeys();
            var ret = [];

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];

                if (!_jsGridControl.IsGroupingRecordKey(key) && !_jsGridControl.IsEntryRecordKey(key)) {
                    ret.push(keys[i]);
                }
            }
            return ret;
        };
        this.AddItemsToTimeline = function(itemIds) {
        ULSc2E:
            ;
            var selectedItems = _jsGridControl.GetSelectedRecordKeys();

            if (itemIds != null && itemIds.length && itemIds.length > 0) {
                var itemIdsNested = [];

                for (var idx = 0; idx < itemIds.length; idx++) {
                    var nestedObj = {};

                    nestedObj.id = itemIds[idx];
                    itemIdsNested.push(nestedObj);
                }
                AddItemsToTimeline(itemIdsNested, _params.listId, _params.selectedTimelineView);
            }
        };
        this.DeleteSelectedItems = function() {
        ULSc2E:
            ;
            DeleteSelectedRecords();
        };
        this.LaunchEditItemFormForItem = function(itemId) {
        ULSc2E:
            ;
            ViewOrEditItem(true, itemId);
        };
        this.LaunchViewItemFormForItem = function(itemId) {
        ULSc2E:
            ;
            ViewOrEditItem(false, itemId);
        };
        function ViewOrEditItem(bEdit, itemId) {
        ULSc2E:
            ;
            var ctx = GetCurrentCtx();
            var url = bEdit ? ctx.editFormUrl : ctx.displayFormUrl;
            var strSeperator = url.indexOf("?") == -1 ? '?' : '&';
            var contentTypeId = (_dataSource.tableCache.GetCachedRecord(itemId)).GetDataValue('_ContentTypeId');
            var contentTypeParam = contentTypeId != null && contentTypeId != '' ? '&ContentTypeID=' + contentTypeId : '';

            url = url + strSeperator + 'ID=' + itemId + contentTypeParam;
            url = AddSourceToUrl(url) + GetRootFolder(ctx);
            EditItem2(null, url);
        }
        function GetCSRFieldFromJsGridFieldKey(jsGridFieldName) {
            var myCtx = _jsGridControl.GetSpCsrRenderCtx();
            var fields = myCtx.ListSchema.Field;

            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];

                if (field.RealFieldName == unescapeProperly(jsGridFieldName)) {
                    return field;
                }
            }
        }
        function GetCSRFieldKeyFromJsGridFieldKey(jsGridFieldName) {
            var field = GetCSRFieldFromJsGridFieldKey(jsGridFieldName);

            if (field == null) {
                return jsGridFieldName;
            }
            return escapeProperly(field.Name);
        }
        function GetFocusedRecord() {
        ULSc2E:
            ;
            var focusedItem = _jsGridControl.GetFocusedItem();
            var focusedRecord;

            if (focusedItem != null) {
                focusedRecord = _dataSource.tableCache.GetCachedRecord(focusedItem.recordKey);
            }
            return focusedRecord;
        }
        function OnBeforeUnload(eventInfo) {
        ULSc2E:
            ;
            if (_jsGridControl.AnyUncomittedEntryRecords() || _jsGridControl.AnyUncomittedProvisionalRecords() || !SP.Internal.JS.IsAssocArrayEmpty(_changesToSend)) {
                return SP.Res.changesHaveNotBeenSaved;
            }
            else if (_currentlyWritingChangesToList || _currentlyCreatingNewListItem || _currentlyDeletingListItems) {
                return SP.Res.savingToServer;
            }
        }
        function GetRecordKeysToSend() {
        ULSc2E:
            ;
            var badRecordKeys = new SP.Utilities.Set();

            for (var recordKey in _changesToSend) {
                if (_jsGridControl.AnyErrorsInRecord(recordKey) && (!(recordKey in _rowLevelErrors) || !_rowLevelErrors[recordKey].bCommunicationsError)) {
                    badRecordKeys.Add(recordKey);
                    continue;
                }
                var byRecordKey = _changesToSend[recordKey];

                for (var fieldKey in byRecordKey) {
                    if (byRecordKey[fieldKey].changeKey.GetVersionNumber() in _changeKeysPendingValidation) {
                        badRecordKeys.Add(recordKey);
                        break;
                    }
                }
            }
            var allChangedRecordKeys = new SP.Utilities.Set(_changesToSend);

            return (allChangedRecordKeys.Difference(badRecordKeys)).GetCollection();
        }
        function CanDiscardChangesForRow(recordKey) {
        ULSc2E:
            ;
            return recordKey in _changesToSend;
        }
        function DiscardChangesForRow(recordKey) {
        ULSc2E:
            ;
            if (recordKey in _changesToSend) {
                var callback = function(dlgResult) {
                ULSc2E:
                    ;
                    _jsGridControl.Focus();
                    if (dlgResult != SP.UI.DialogResult.OK) {
                        return;
                    }
                    var changes = _changesToSend[recordKey];

                    delete _changesToSend[recordKey];
                    var changeKey = GetMostRecentChangeKey(changes);
                    var updates = [];

                    for (var fieldKey in changes) {
                        var change = changes[fieldKey];

                        updates.push(SP.JsGrid.CreateValidatedPropertyUpdate(recordKey, fieldKey, change.oldProp.data, change.oldProp.localized));
                    }
                    _jsGridControl.UpdateProperties(updates, null, changeKey);
                };

                ShowDialog(Strings.STS.L_SPGanttDiscardChangesDialogTitle, Strings.STS.L_SPGanttDiscardChangesDialogMessage, Strings.STS.L_SPNo, Strings.STS.L_SPYes, false, callback);
            }
        }
        function OnRowEscape(rowEscapeArgs) {
        ULSc2E:
            ;
            var recordKey = rowEscapeArgs.recordKey;

            if (CanDiscardChangesForRow(recordKey)) {
                DiscardChangesForRow(recordKey);
            }
        }
        function OnBeforePropertyChanged(propChangedArgs) {
        ULSc2E:
            ;
            if (!_params.spGrid) {
                return;
            }
            var recordKey = propChangedArgs.recordKey;
            var record = _jsGridControl.GetRecord(recordKey);
            var fieldKey = propChangedArgs.fieldKey;

            if (record.properties[fieldKey] == null) {
                return;
            }
            var propType = record.properties[fieldKey].propType;

            if (propType.ID == "SPMultilineText" || propType.ID == "SPEnhancedRichText" || propType.ID == "TaxonomyField" || propType.ID == "TaxonomyField_MultiValue") {
                return;
            }
            var csrInfo = record.fieldRawDataMap.csrInfo;

            if (csrInfo == null) {
                return;
            }
            if (_changesBeingSent != null && _changesBeingSent[recordKey] != null) {
                return;
            }
            if (!SP.JsGrid.Internal.IsNoOpChange(propChangedArgs, record)) {
                csrInfo.stale = csrInfo.stale || {};
                csrInfo.stale[fieldKey] = true;
            }
        }
        function OnPropertyChanged(propChangedArgs, bEntryRowPlayback) {
        ULSc2E:
            ;
            if (_jsGridControl.IsProvisionalRecordKey(propChangedArgs.recordKey)) {
                return;
            }
            if (propChangedArgs.fieldKey in _params.computedFields) {
                return;
            }
            InvalidateLookupFieldCaches(propChangedArgs);
            if (propChangedArgs.changeKey == _cascadingChangeKey) {
                return;
            }
            if (_rowLevelErrors[propChangedArgs.recordKey] != null && !_rowLevelErrors[propChangedArgs.recordKey].bCommunicationsError) {
                ClearRowLevelError(propChangedArgs.recordKey);
            }
            if (!bEntryRowPlayback) {
                CheckRequiredFields(propChangedArgs);
            }
            MirrorTitleChanges(propChangedArgs);
            TrackPendingChangeKeys(propChangedArgs);
            UpdateToSendList(propChangedArgs);
            var focusedItem = _jsGridControl.GetFocusedItem();

            if (propChangedArgs.validationState == SP.JsGrid.ValidationState.Valid && (focusedItem != null && propChangedArgs.recordKey != focusedItem.recordKey || _dataSource.tableCache.GetRecordCount() + (_tableViewParams.bNewRowEnabled ? 1 : 0) == 1)) {
                WriteChangesToList();
            }
            function InvalidateLookupFieldCaches(change) {
            ULSc2E:
                ;
                var propTypes = _selfReferencingLookupPropTypes[propChangedArgs.fieldKey];

                if (propTypes != null) {
                    for (var i = 0; i < propTypes.length; i++) {
                        propTypes[i].InvalidateCache();
                    }
                }
            }
            function UpdateToSendList(change) {
            ULSc2E:
                ;
                if (change.validationState == SP.JsGrid.ValidationState.Pending || change.validationState == SP.JsGrid.ValidationState.Valid) {
                    var byRec = _changesToSend[change.recordKey];

                    if (byRec == null) {
                        _changesToSend[change.recordKey] = (byRec = {});
                    }
                    if (byRec[change.fieldKey] != null) {
                        byRec[change.fieldKey].changeKey.Release();
                    }
                    byRec[change.fieldKey] = change;
                    change.changeKey.Reserve();
                }
                else {
                    var byRec = _changesToSend[change.recordKey];

                    if (byRec != null && byRec[change.fieldKey] != null) {
                        byRec[change.fieldKey].changeKey.Release();
                        delete byRec[change.fieldKey];
                    }
                }
            }
            function TrackPendingChangeKeys(change) {
            ULSc2E:
                ;
                var changeKeyVersion = change.changeKey.GetVersionNumber();
                var propChangeKey = [change.recordKey, change.fieldKey, changeKeyVersion].join();

                if (change.validationState == SP.JsGrid.ValidationState.Pending) {
                    _propChangesPendingValidation.Add(propChangeKey);
                    if (!(changeKeyVersion in _changeKeysPendingValidation)) {
                        _changeKeysPendingValidation[changeKeyVersion] = 0;
                    }
                    _changeKeysPendingValidation[changeKeyVersion]++;
                }
                else if (_propChangesPendingValidation.Contains(propChangeKey)) {
                    _propChangesPendingValidation.Remove(propChangeKey);
                    _changeKeysPendingValidation[changeKeyVersion]--;
                    if (_changeKeysPendingValidation[changeKeyVersion] == 0) {
                        delete _changeKeysPendingValidation[changeKeyVersion];
                    }
                }
            }
            function MirrorTitleChanges(change) {
            ULSc2E:
                ;
                if (change.validationState == SP.JsGrid.ValidationState.Valid && change.fieldKey == 'Title' && (_dataSource.tableCache.GetCachedRecord(change.recordKey)).GetDataValue('_FolderLink')) {
                    var update = SP.JsGrid.CreateValidatedPropertyUpdate(change.recordKey, 'FileLeafRef', change.newProp.data, change.newProp.localized);

                    _jsGridControl.UpdateProperties([update], null, change.changeKey);
                }
            }
            function CheckRequiredFields(change) {
            ULSc2E:
                ;
                var contentTypeRequiredFields = {};
                var record = _jsGridControl.GetRecord(change.recordKey);
                var contentType = record.fieldRawDataMap["_ContentTypeId"];

                if (contentType != null && contentType in _params.contentTypes) {
                    var contentTypeFieldsArray = _params.contentTypes[contentType].RequiredFields;

                    for (var i = 0; i < contentTypeFieldsArray.length; i++) {
                        var fieldKey = contentTypeFieldsArray[i];

                        contentTypeRequiredFields[fieldKey] = 1;
                    }
                }
                if (change.validationState == SP.JsGrid.ValidationState.Valid && (change.fieldKey in _params.requiredFields || change.fieldKey in contentTypeRequiredFields) && (change.newProp.HasLocalizedValue() && (change.newProp.localized == '' || change.newProp.localized == null) || change.newProp.HasDataValue() && change.newProp.data == null)) {
                    _jsGridControl.SetCellError(change.recordKey, change.fieldKey, SP.Res.requiredField15);
                }
            }
        }
        function OnRecordInsertedOrDeleted() {
        ULSc2E:
            ;
            for (var fieldName in _selfReferencingLookupPropTypes) {
                var propTypes = _selfReferencingLookupPropTypes[fieldName];

                for (var i = 0; i < propTypes.length; i++) {
                    propTypes[i].InvalidateCache();
                }
            }
        }
        function OnRowFocusChanged(rowFocusChangeArgs) {
        ULSc2E:
            ;
            WriteChangesToList();
        }
        function OnSort(sortState) {
        ULSc2E:
            ;
            if (_gridParams.spGrid) {
                _pagingInfo = null;
                _sortState = {
                    sortField: sortState[0].columnName,
                    isDescending: sortState[0].isDescending
                };
                ClearItemInfoPresent();
                _dataSource.RefreshRowView(false, RefreshRowView);
            }
            else
                NavigateToSelf(sortState, _tableViewParams.rowViewParams.autoFilterState);
        }
        function RefreshRowView(rowViewParams, additionalParams) {
        ULSc2E:
            ;
            _jsGridControl.SetRowView(rowViewParams);
            _additionalParams = additionalParams;
            RefreshCommandUI();
        }
        function RemoveColumnFromView(columnKey) {
        ULSc2E:
            ;
            var ctx = InitContext(OnSucceeded, OnFailed);

            (ctx.view.get_viewFields()).remove(columnKey);
            ctx.view.update();
            ctx.context.executeQueryAsync();
            function OnSucceeded() {
            }
            function OnFailed() {
            ULSc2E:
                ;
                throw 'Failed to delete column ' + columnKey;
            }
        }
        function OnBeginRenameColumn() {
        ULSc2E:
            ;
            _currentlyRenamingColumn = true;
        }
        function OnSingleCellKeyDown(keyDownEvtArgs) {
        ULSc2E:
            ;
            if (keyDownEvtArgs.fieldKey == 'Checkmark' && window.CheckMarkFieldTemplate && keyDownEvtArgs && keyDownEvtArgs.eventInfo && keyDownEvtArgs.eventInfo.keyCode == 32) {
                var checkmark = document.getElementById(window.CheckMarkFieldTemplate.GetCheckMarkId(_jsGridControl.GetSpCsrRenderCtx(), keyDownEvtArgs.recordKey));

                if (checkmark) {
                    checkmark.OnClickCheckmark();
                }
            }
        }
        function OnEndRenameColumn(endRenameEvtArgs) {
        ULSc2E:
            ;
            var columnKey = endRenameEvtArgs.columnKey;
            var newColumnName = endRenameEvtArgs.newColumnTitle;
            var originalColumnTitle = endRenameEvtArgs.originalColumnTitle;

            if (newColumnName == originalColumnTitle) {
                _currentlyRenamingColumn = false;
                return;
            }
            var ctx = InitContext(OnSucceeded, OnFailed);
            var viewfield = (ctx.list.get_fields()).getByInternalNameOrTitle(columnKey);

            viewfield.set_title(newColumnName);
            viewfield.update();
            ctx.context.executeQueryAsync();
            function OnSucceeded() {
            ULSc2E:
                ;
                _currentlyRenamingColumn = false;
                var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

                if (renderCtx != null) {
                    SPGridFetchSchema(renderCtx.listName, renderCtx.view, function(schemaInfo) {
                    ULSc2E:
                        ;
                        renderCtx.ListSchema = schemaInfo;
                    });
                }
            }
            function OnFailed() {
            ULSc2E:
                ;
                _currentlyRenamingColumn = false;
                throw 'Failed to rename column ' + columnKey + ' with name ' + newColumnName;
            }
        }
        function AddNewColumn(newColumnType, columnInfo, displayName) {
        ULSc2E:
            ;
            var columnName = displayName != null && displayName.length > 0 ? displayName : newColumnType;
            var randName = ((Math.random()).toString(36)).substring(2, 7);
            var view = null;
            var charCodeA = 97;
            var randomLetter = String.fromCharCode(charCodeA + Math.floor(Math.random() * 26));
            var randName = randomLetter + ((Math.random()).toString(36)).substring(2, 5);

            switch (newColumnType) {
            case 'Text':
            case 'Note':
            case 'Number':
            case 'Currency':
            case 'DateTime':
            case 'Boolean':
            case 'URL':
            case 'User':
                var ctx = InitContext(OnSucceededSimpleField, OnFailedSimpleField);
                var fieldXml = "<Field Name='" + randName + "' DisplayName='" + STSHtmlEncode(columnName) + "' Type='" + newColumnType + "'";

                if (newColumnType == 'User') {
                    fieldXml += " List='UserInfo'";
                }
                fieldXml += " />";
                var field = (ctx.list.get_fields()).addFieldAsXml(fieldXml, false, SP.AddFieldOptions.defaultValue | SP.AddFieldOptions.addFieldInternalNameHint);

                view = ctx.view;
                field.update();
                ctx.context.load(field);
                ctx.context.load(view);
                var peoplePickerUrl = newColumnType == 'User' ? SP.Utilities.Utility.getPeoplePickerURL(ctx.context, ctx.web, field) : null;

                ctx.context.executeQueryAsync();
                return;
            case 'Choice':
            case 'Lookup':
            case 'Calculated':
            case 'BusinessData':
            case 'MoreColumnTypes':
                var options = {};

                options.title = SP.JsGrid.Res.addColumnName;
                options.dialogReturnValueCallback = OnNewColumnDialogCloseCallback;
                var formUrl = newColumnType == 'Choice' || newColumnType == 'Calculated' ? 'FldNew.aspx' : 'FldNewEx.aspx';

                options.url = BuildNewColumnDialogUrl(formUrl, newColumnType);
                var dlg = SP.UI.ModalDialog.showModalDialog(options);

                return;
            }
            function OnSucceededSimpleField() {
            ULSc2E:
                ;
                var internalName = field.get_internalName();
                var basePropType = SP.JsGrid.Internal.Property.GetPropType(columnInfo.propType);

                if (peoplePickerUrl)
                    basePropType.SetPeoplePickerUrl(internalName, peoplePickerUrl.get_value());
                var newColumn;

                if (basePropType["ID"] == "SPDateTime") {
                    newColumn = new SP.JsGrid.GridField(internalName, columnInfo.hasData, columnInfo.hasLocalized, null, null, null, false, null);
                    _params.parseAndSetFields[internalName] = 1;
                }
                else {
                    newColumn = new SP.JsGrid.GridField(internalName, columnInfo.hasData, columnInfo.hasLocalized);
                }
                newColumn.SetSingleValuePropType(basePropType);
                _dataSource.AddColumn(newColumn);
                var outColumn = new SP.JsGrid.ColumnInfo(columnName, null, internalName, 100);

                _jsGridControl.AddColumn(outColumn, newColumn);
                _jsGridControl.ShowColumn(internalName);
                _jsGridControl.EnsurePaneWidth();
                _jsGridControl.NotifyDataAvailable();
                _jsGridControl.RenameColumn(internalName);
                if (view != null) {
                    var addFieldToViewCtx = InitContext(UpdateListSchema, OnFailedSimpleField);
                    var currentView = addFieldToViewCtx.view;
                    var viewFields = currentView.get_viewFields();

                    viewFields.add(internalName);
                    currentView.update();
                    addFieldToViewCtx.context.executeQueryAsync();
                }
                else
                    UpdateListSchema();
                function UpdateListSchema() {
                ULSc2E:
                    ;
                    var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

                    if (renderCtx != null) {
                        SPGridFetchSchema(renderCtx.listName, renderCtx.view, function(schemaInfo) {
                        ULSc2E:
                            ;
                            var length = schemaInfo.Field.length;

                            for (var i = 0; i < length; i++) {
                                var field = schemaInfo.Field[i];

                                if (field.RealFieldName == internalName) {
                                    break;
                                }
                            }
                            newColumn.csrInfo = field;
                            renderCtx.ListSchema = schemaInfo;
                        });
                    }
                }
            }
            function OnFailedSimpleField() {
            ULSc2E:
                ;
                throw 'Failed to add new column ' + columnName + ' to view';
            }
            function OnNewColumnDialogCloseCallback(dialogResult) {
            ULSc2E:
                ;
                if (dialogResult == SP.UI.DialogResult.OK)
                    RefreshOnDialogClose(dialogResult);
            }
            function BuildNewColumnDialogUrl(pageUrl, cType) {
            ULSc2E:
                ;
                var rg = [];

                rg.push(SP.Utilities.Utility.getLayoutsPageUrl(pageUrl));
                rg.push("?List=");
                rg.push(_params.listId);
                rg.push("&AddToView=");
                rg.push(_params.viewId);
                rg.push("&FieldTypeParam=");
                rg.push(cType);
                rg.push("&IsDlg=");
                rg.push(1);
                return rg.join("");
            }
        }
        function PopulateAddNewColumnMenuItems(columnMenu) {
        ULSc2E:
            ;
            var _propTypeInfo = {
                "SPUser": {
                    propType: 'SPUser',
                    hasData: false,
                    hasLocalized: true
                },
                "String": {
                    propType: 'String',
                    hasData: false,
                    hasLocalized: true
                },
                "Hyperlink": {
                    propType: 'Hyperlink',
                    hasData: true,
                    hasLocalized: false
                },
                "SPDateTime": {
                    propType: 'SPDateTime',
                    hasData: false,
                    hasLocalized: true
                },
                "DropdownBoolean": {
                    propType: 'DropdownBoolean',
                    hasData: true,
                    hasLocalized: false
                }
            };
            var _constColumnTypes = {
                "Text": {
                    Desc: Strings.STS.L_AddColumnDefaultName_Text,
                    FnOnClick: function() {
                    ULSc2E:
                        ;
                        AddNewColumn('Text', _propTypeInfo['String'], Strings.STS.L_AddColumnDefaultName_Text);
                    }
                },
                "Number": {
                    Desc: Strings.STS.L_AddColumnDefaultName_Number,
                    FnOnClick: function() {
                    ULSc2E:
                        ;
                        AddNewColumn('Number', _propTypeInfo['String'], Strings.STS.L_AddColumnDefaultName_Number);
                    }
                },
                "DateTime": {
                    Desc: Strings.STS.L_AddColumnDefaultName_DateAndTime,
                    FnOnClick: function() {
                    ULSc2E:
                        ;
                        AddNewColumn('DateTime', _propTypeInfo['SPDateTime'], Strings.STS.L_AddColumnDefaultName_DateAndTime);
                    }
                },
                "User": {
                    Desc: Strings.STS.L_AddColumnDefaultName_PersonOrGroup,
                    FnOnClick: function() {
                    ULSc2E:
                        ;
                        AddNewColumn('User', _propTypeInfo['SPUser'], Strings.STS.L_AddColumnDefaultName_PersonOrGroup);
                    }
                },
                "MoreColumnTypes": {
                    Desc: Strings.STS.L_AddColumnDefaultName_MoreColumnTypes,
                    FnOnClick: function() {
                    ULSc2E:
                        ;
                        AddNewColumn('MoreColumnTypes');
                    }
                }
            };

            for (var colType in _constColumnTypes) {
                var data = _constColumnTypes[colType];

                columnMenu.InsertMenuItem(data.Desc, data.FnOnClick);
            }
        }
        function OnNextPage(origSelState) {
        ULSc2E:
            ;
            var curTop = _jsGridControl.GetTopRowIndex();
            var visibleItems = _jsGridControl.GetVisibleRecordCount();
            var prevLastRow = curTop + visibleItems - 1;

            if (prevLastRow == _params.totalItemCount)
                return;
            var newLastRow = prevLastRow + visibleItems;

            _jsGridControl.ScrollCellIntoView(Math.min(newLastRow, _params.totalItemCount));
        }
        function ResolveAutoFilterState(autoFilterState) {
        ULSc2E:
            ;
            var i = 1;

            for (var key in autoFilterState) {
                var filterFieldKeyText = "FilterField";
                var filterValueKeyText = "FilterValue";

                if (autoFilterState[key].indexOf(";#") != -1) {
                    filterFieldKeyText = "FilterFields";
                    filterValueKeyText = "FilterValues";
                }
                if (_filterUrl == null)
                    _filterUrl = '';
                _filterUrl += '&' + filterFieldKeyText + i + '=' + escapeProperly(key) + '&' + filterValueKeyText + i + '=' + escapeProperly(autoFilterState[key]);
                i++;
            }
        }
        function OnAutoFilter(autoFilterState) {
        ULSc2E:
            ;
            if (_gridParams.spGrid) {
                _filterUrl = null;
                _pagingInfo = null;
                ResolveAutoFilterState(autoFilterState);
                ClearItemInfoPresent();
                _dataSource.RefreshRowView(false, RefreshRowView);
            }
            else
                NavigateToSelf(_tableViewParams.rowViewParams.sortState, autoFilterState);
        }
        function NavigateToSelf(sortState, autoFilterState) {
        ULSc2E:
            ;
            var url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), _params.viewUrl);

            window.location.href = url + CreateQueryString(sortState, autoFilterState);
            function CreateQueryString(sortState, autoFilterState) {
            ULSc2E:
                ;
                var url = '?RootFolder=' + escapeProperly(_params.viewRootFolder) + (_hierarchyEnabled ? '' : '&FolderCTID=' + _params.folderContentTypeId);
                var i = 1;

                for (var key in autoFilterState) {
                    var filterFieldKeyText = "FilterField";
                    var filterValueKeyText = "FilterValue";

                    if (autoFilterState[key].indexOf(";#") != -1) {
                        filterFieldKeyText = "FilterFields";
                        filterValueKeyText = "FilterValues";
                    }
                    url += '&' + filterFieldKeyText + i + '=' + escapeProperly(key) + '&' + filterValueKeyText + i + '=' + escapeProperly(autoFilterState[key]);
                    i++;
                }
                if (sortState != null && sortState.length > 0) {
                    url += '&SortField=' + escapeProperly(sortState[0].columnName) + '&SortDir=' + (sortState[0].isDescending ? "Desc" : "Asc");
                }
                return url;
            }
        }
        function GetAutoFilterEntries(autoFilterState, initiatingColumnKey, columnKeys, fnOnSuccess, fnOnFailure) {
        ULSc2E:
            ;
            var iframe = $get(_params.iframeId);
            var filterQuery = '', i = 0, arrayField, filterLink = _params.filterLink;

            if (!filterLink) {
                if (_params.spGrid && _params.spCsrRenderCtx != null) {
                    filterLink = _params.spCsrRenderCtx.queryString;
                }
                else {
                    filterLink = window.location.href;
                }
            }
            do {
                i++;
                arrayField = filterLink.match("FilterField" + i + "=[^&]*" + "&FilterValue" + i + "=[^&]*");
                if (arrayField != null) {
                    filterQuery = filterQuery + "&" + arrayField;
                }
            } while (arrayField);
            var memGrp = filterLink.match("MembershipGroupId=[^&]*");

            if (memGrp != null) {
                filterQuery += '&' + memGrp;
            }
            var rootFolder = filterLink.match("RootFolder=[^&]*");

            if (rootFolder != null) {
                filterQuery += '&' + rootFolder;
            }
            var instId = filterLink.match("InstanceID=[^&]*");

            if (instId != null) {
                filterQuery += '&' + instId;
            }
            _autoFilterContext = {
                FieldName: initiatingColumnKey,
                OnSuccess: fnOnSuccess,
                OnFailure: fnOnFailure
            };
            iframe.src = SP.Utilities.Utility.getLayoutsPageUrl('filter.aspx') + '?ListId=' + _params.listId + '&FieldInternalName=' + escapeProperly(initiatingColumnKey) + '&ViewId=' + _params.viewId + '&FilterOnly=1' + '&Filter=1' + filterQuery + '&CallbackFn=OnJsGridIframeLoad' + '&CallbackParam=' + _jsGridControl.parentNode.id;
        }
        this.OnAutoFilterReturn = function() {
        ULSc2E:
            ;
            var iframe = null;

            iframe = document.getElementById(_params.iframeId);
            if (iframe != null) {
                var iframeDoc = null;

                if (iframe.contentDocument)
                    iframeDoc = iframe.contentDocument;
                else if (iframe.contentWindow && iframe.contentWindow.document)
                    iframeDoc = iframe.contentWindow.document;
                else if (iframe.document)
                    iframeDoc = iframe.document;
                if (iframeDoc != null) {
                    var select = iframeDoc.getElementById("diidFilter" + _autoFilterContext.FieldName);

                    if (select != null) {
                        var count = select.childNodes.length;

                        if (count <= 500) {
                            var choices = select.childNodes;
                            var menuText;
                            var entries = [];

                            for (var i = 1; i < count; i++) {
                                if (choices[i].innerText)
                                    menuText = choices[i].innerText;
                                else if (choices[i].textContent)
                                    menuText = choices[i].textContent;
                                else
                                    menuText = choices[i].innerHTML;
                                entries.push({
                                    displayString: menuText,
                                    dataValue: choices[i].value
                                });
                            }
                            var map = {};

                            map[_autoFilterContext.FieldName] = entries;
                            _autoFilterContext.OnSuccess(map);
                            _autoFilterContext = null;
                            return;
                        }
                    }
                }
            }
            _autoFilterContext.OnFailure();
            _autoFilterContext = null;
        };
        function LaunchFilterDialog(columnKey) {
        ULSc2E:
            ;
            alert('launch filter dialog here');
        }
        function WriteChangesToList() {
        ULSc2E:
            ;
            if (_serverWriteTimeout != null) {
                clearTimeout(_serverWriteTimeout);
            }
            _serverWriteTimeout = setTimeout(WriteChangesToListCore, 500);
        }
        function RetrieveCSRData(recordKeys, list) {
        ULSc2E:
            ;
            var listData = null;
            var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

            if (renderCtx != null) {
                var viewFields = ['<FieldRef Name="ID"/>'];
                var schemaFields = renderCtx.ListSchema.Field;

                for (var i = 0; i < schemaFields.length; i++) {
                    viewFields.push('<FieldRef Name="' + schemaFields[i].Name + '"/>');
                }
                var where = [];
                var recordKeyCount = 0;
                var orClauseCount = 0;

                for (var recordKey in recordKeys) {
                    recordKeyCount++;
                    where.push(['<Eq>', '<FieldRef Name="ID" />', '<Value Type="Number">', recordKey, '</Value>', '</Eq>'].join(''));
                    if (recordKeyCount > 1) {
                        where.push('</Or>');
                        orClauseCount++;
                    }
                }
                var orClauses = [];

                while (orClauseCount > 0) {
                    orClauses.push('<Or>');
                    orClauseCount--;
                }
                where = (orClauses.concat(where)).join('');
                var viewXml = ((((['<View Scope="RecursiveAll">', '<ViewFields>'].concat(viewFields)).concat(['</ViewFields>', '<Query>', '<OrderBy>', '<FieldRef Name="ID"/>', '</OrderBy>', '<Where>'])).concat(where)).concat(['</Where>', '</Query>', '</View>'])).join('');

                listData = list.renderListData(viewXml);
            }
            return listData;
        }
        function HandleCSRData(listData, recordKey, newItemId) {
        ULSc2E:
            ;
            var listDataStr = listData.get_value();
            var listData = JSON.parse(listDataStr);
            var csrInfo = null;

            for (var i = 0; i < listData["Row"].length; i++) {
                if (listData["Row"][i]["ID"] == newItemId) {
                    csrInfo = listData["Row"][i];
                    break;
                }
            }
            ULS.AssertJS("SPGantt", csrInfo != null, "Should be able to find the row we're querying for");
            (_jsGridControl.GetRecord(recordKey)).fieldRawDataMap.csrInfo = csrInfo;
            EnsureScriptFunc('mQuery.js', 'm$', function() {
            ULSc2E:
                ;
                var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

                renderCtx.ListData = MergeListData(renderCtx.ListData, listData);
            });
        }
        function PostCSRRender() {
        ULSc2E:
            ;
            var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

            if (renderCtx == null) {
                return;
            }
            PostRenderAfterJSGridRender(renderCtx);
        }
        function GetMostRecentChangeKey(changes) {
        ULSc2E:
            ;
            var mostRecentChangeKey = null;

            for (var fieldKey in changes) {
                var changeKey = changes[fieldKey].changeKey;

                mostRecentChangeKey = mostRecentChangeKey == null || changeKey.GetVersionNumber() > mostRecentChangeKey.GetVersionNumber() ? changeKey : mostRecentChangeKey;
            }
            return mostRecentChangeKey;
        }
        function SetErrorFromCSOMException(recordKey, errorCode, errorValue, errorMessage, errorDetails) {
        ULSc2E:
            ;
            var errorId = null;

            switch (errorCode) {
            case SP.ClientErrorCodes.invalidFieldValue:
                _jsGridControl.SetCellError(recordKey, (errorValue.split(','))[1], errorMessage);
                break;
            case SP.ClientErrorCodes.docAlreadyExists:
                _jsGridControl.SetCellError(recordKey, 'Title', SP.Res.docAlreadyExists);
                break;
            case SP.ClientErrorCodes.fieldValueFailedValidation:
                var fieldFailures = errorDetails.get_fieldFailures();

                Sys.Debug.assert(fieldFailures.length > 0);
                for (var i = 0; i < fieldFailures.length; i++) {
                    _jsGridControl.SetCellError(recordKey, fieldFailures[i].get_name(), fieldFailures[i].get_message());
                }
                break;
            case SP.ClientErrorCodes.itemValueFailedValidation:
                var itemFailure = errorDetails.get_itemFailure();
                var itemFailureMessage = itemFailure.get_message();

                errorId = SetRowLevelError(recordKey, itemFailureMessage, false);
                break;
            default:
                errorId = SetRowLevelError(recordKey, errorMessage, false);
                break;
            }
            return errorId;
        }
        function WriteChangesToListCore() {
        ULSc2E:
            ;
            var recordKeysToSend = GetRecordKeysToSend();

            if (SP.Internal.JS.IsAssocArrayEmpty(recordKeysToSend)) {
                return;
            }
            if (!StartWritingChanges(recordKeysToSend)) {
                return;
            }
            var ctx = InitContext(OnSucceeded, OnFailed);
            var itemInfoMap = {};

            for (var recordKey in recordKeysToSend) {
                var scope = new SP.ExceptionHandlingScope(ctx.context);
                var scopeDispose = scope.startScope();
                var item = ctx.list.getItemById(recordKey);
                var changes = _changesBeingSent[recordKey];

                for (var fieldKey in changes) {
                    var change = changes[fieldKey];
                    var listValue = GridValueToSPListValue(change.newProp, change.propType);

                    if (fieldKey in _params.parseAndSetFields) {
                        item.parseAndSetFieldValue(fieldKey, listValue);
                    }
                    else if (change.propType != null && (change.propType.ID == "TaxonomyField" || change.propType.ID == "TaxonomyField_MultiValue")) {
                        var fields = ctx.list.get_fields();
                        var field = fields.getByInternalNameOrTitle(fieldKey);

                        field.validateSetValue(item, listValue);
                    }
                    else {
                        item.set_item(fieldKey, listValue);
                    }
                }
                item.update();
                (item.get_fieldValuesAsText()).retrieve();
                item.retrieve();
                scopeDispose.dispose();
                itemInfoMap[recordKey] = {
                    item: item,
                    scope: scope
                };
            }
            var listData = RetrieveCSRData(recordKeysToSend, ctx.list);

            ctx.context.executeQueryAsync();
            function OnSucceeded() {
            ULSc2E:
                ;
                for (var recordKey in recordKeysToSend) {
                    var scope = itemInfoMap[recordKey].scope;

                    if (scope.get_hasException()) {
                        SetErrorFromCSOMException(recordKey, scope.get_serverErrorCode(), scope.get_serverErrorValue(), scope.get_errorMessage(), scope.get_serverErrorDetails());
                        for (var fieldKey in _changesBeingSent[recordKey]) {
                            _fnCallbacksByChangeKey.CallFunctions(_changesBeingSent[recordKey][fieldKey].changeKey.GetVersionNumber(), false);
                        }
                    }
                    else {
                        var item = itemInfoMap[recordKey].item;
                        var localizedFieldValues = (item.get_fieldValuesAsText()).get_fieldValues();

                        if (_jsGridControl.GetSpCsrRenderCtx() != null) {
                            HandleCSRData(listData, recordKey, item.get_id());
                        }
                        var changes = _changesBeingSent[recordKey];
                        var mostRecentChangeKeyOnRow = GetMostRecentChangeKey(changes);
                        var localizedChanges = {};

                        for (var fieldKey in _gridFieldMap) {
                            if (fieldKey in localizedFieldValues) {
                                var curChangeKey = changes[fieldKey] && changes[fieldKey].changeKey;
                                var bUserChange = curChangeKey != null;

                                if (bUserChange || fieldKey in _params.computedFields) {
                                    var gridValue = SPListValueToGridValue(item.get_item(fieldKey), (item.get_fieldValuesAsText()).get_item(fieldKey), _gridFieldMap[fieldKey].GetPropType(), fieldKey);
                                    var validatedProp = SP.JsGrid.CreateValidatedPropertyUpdate(recordKey, fieldKey, gridValue && gridValue.data, gridValue && gridValue.localized);

                                    _cascadingChangeKey = bUserChange ? curChangeKey : mostRecentChangeKeyOnRow;
                                    _jsGridControl.UpdateProperties([validatedProp], null, _cascadingChangeKey);
                                    if (bUserChange) {
                                        _cascadingChangeKey.Release();
                                        var localizedVal;

                                        if ((_gridFieldMap[fieldKey].GetPropType()).ID == "SPDateTime") {
                                            var gridItem = item.get_item(fieldKey);

                                            if (gridItem == null) {
                                                localizedVal = localizedFieldValues[fieldKey];
                                            }
                                            else {
                                                localizedVal = ((SP.DateTimeUtil.IntlDate.createFromJsUtcDate(gridValue.data, _spRegionalSettings.calendarType)).toJsDate())._toFormattedString("s", Sys.CultureInfo.InvariantCulture);
                                            }
                                        }
                                        else {
                                            localizedVal = localizedFieldValues[fieldKey];
                                        }
                                        localizedChanges[fieldKey] = {
                                            localizedValue: localizedVal
                                        };
                                    }
                                    _cascadingChangeKey = null;
                                }
                            }
                        }
                        for (var fieldKey in changes) {
                            _fnCallbacksByChangeKey.CallFunctions(changes[fieldKey].changeKey.GetVersionNumber(), true, item.get_id());
                        }
                        var result = _jsGridControl.GetRecord(recordKey);

                        for (var idx = 0; idx < _fnRowChanged.length; idx++) {
                            _fnRowChanged[idx](recordKey, localizedChanges, false);
                        }
                        delete _changesBeingSent[recordKey];
                        ClearRowLevelError(recordKey);
                    }
                }
                StopWritingChanges(recordKeysToSend);
                PostCSRRender();
            }
            function OnFailed(source, args) {
                for (var recordKey in recordKeysToSend) {
                    SetRowLevelError(recordKey, SP.Res.serverCommError, true);
                }
                for (var recordKey in _changesBeingSent) {
                    for (var fieldKey in _changesBeingSent[recordKey]) {
                        _fnCallbacksByChangeKey.CallFunctions(changes[fieldKey].changeKey.GetVersionNumber(), false);
                    }
                }
                StopWritingChanges(recordKeysToSend);
            }
            function StartWritingChanges(recordKeysToSend) {
            ULSc2E:
                ;
                if (_currentlyWritingChangesToList) {
                    _queuedWriteChangesRequest = true;
                    return false;
                }
                _currentlyWritingChangesToList = true;
                _queuedWriteChangesRequest = false;
                for (var recordKey in recordKeysToSend) {
                    _jsGridControl.RemoveRowHeaderState(recordKey, SP.JsGrid.RowHeaderAutoStyleId.Dirty);
                    _jsGridControl.AddBuiltInRowHeaderState(recordKey, SP.JsGrid.RowHeaderStyleId.Transfer);
                }
                _changesBeingSent = _changesToSend;
                _changesToSend = {};
                return true;
            }
            function StopWritingChanges(recordKeysToSend) {
            ULSc2E:
                ;
                _currentlyWritingChangesToList = false;
                if (_queuedWriteChangesRequest) {
                    setTimeout(WriteChangesToList, 0);
                }
                for (var recordKey in recordKeysToSend) {
                    _jsGridControl.RemoveRowHeaderState(recordKey, SP.JsGrid.RowHeaderStyleId.Transfer);
                }
                if (SP.Internal.JS.IsAssocArrayEmpty(_changesToSend)) {
                    _changesToSend = _changesBeingSent;
                }
                else {
                    for (var recordKey in _changesBeingSent) {
                        if (_changesToSend[recordKey] == null) {
                            _changesToSend[recordKey] = _changesBeingSent[recordKey];
                        }
                        else {
                            for (var fieldKey in _changesBeingSent[recordKey]) {
                                if (_changesToSend[recordKey][fieldKey] != null) {
                                    _changesToSend[recordKey][fieldKey].changeKey.Release();
                                }
                                _changesToSend[recordKey][fieldKey] = _changesBeingSent[recordKey][fieldKey];
                            }
                        }
                    }
                }
                _changesBeingSent = null;
            }
        }
        function SetRowLevelError(recordKey, message, bCommunicationsError) {
        ULSc2E:
            ;
            ClearRowLevelError(recordKey);
            var errorId = _jsGridControl.SetRowError(recordKey, message);

            _rowLevelErrors[recordKey] = {
                id: errorId,
                bCommunicationsError: bCommunicationsError
            };
            return errorId;
        }
        function ClearRowLevelError(recordKey) {
        ULSc2E:
            ;
            if (recordKey in _rowLevelErrors) {
                _jsGridControl.ClearRowError(recordKey, _rowLevelErrors[recordKey].id);
                delete _rowLevelErrors[recordKey];
            }
        }
        function SetItemInfoPresent(startIdx) {
        ULSc2E:
            ;
            var paneManager = _jsGridControl._GetPaneManager();
            var gridPaneConverter = (paneManager.GetGridPane()).GetGridPaneConverter();
            var lastIdx = Math.min(startIdx + _params.viewRowLimit, _infoFetched.length);

            for (var i = startIdx; i < lastIdx; i++)
                _infoFetched[i] = gridPaneConverter.RowIdxToRecordKey(i);
        }
        function ClearItemInfoPresent() {
        ULSc2E:
            ;
            _infoFetched = new Array(_params.totalItemCount);
        }
        function ComputeSPDataRange(fnCallback) {
        ULSc2E:
            ;
            var positionObj = {
                pos: -1,
                count: 0
            };
            var returnObj = {
                rangesToFillRequest: 1,
                totalRanges: []
            };
            var rowLimit = _params.viewRowLimit;
            var totalItems = _params.totalItemCount;
            var startIdx = _jsGridControl.GetTopRowIndex();
            var itemsVisible = _jsGridControl.GetVisibleRecordCount();
            var lastItemPageIdx = Math.min(startIdx + itemsVisible, totalItems);

            for (var i = startIdx; i < lastItemPageIdx; i++) {
                if (!_infoFetched[i]) {
                    positionObj.pos = i;
                    break;
                }
            }
            if (i == startIdx) {
                for (var j = lastItemPageIdx; j >= startIdx; j--) {
                    if (!_infoFetched[j]) {
                        positionObj.pos = Math.max(0, j - rowLimit + 1);
                        while (positionObj.pos < _infoFetched.length && _infoFetched[positionObj.pos])
                            positionObj.pos++;
                        break;
                    }
                }
            }
            positionObj.callbacks = [fnCallback];
            positionObj.count = Math.min(totalItems - positionObj.pos, rowLimit);
            returnObj.totalRanges.push(positionObj);
            return returnObj;
        }
        function CreateEntryRecord() {
        ULSc2E:
            ;
            return _dataSource.recordFactory.MakeRecord({}, {});
        }
        function CreateNewListItem(record, propUpdates, fnSuccess, fnFail) {
        ULSc2E:
            ;
            function OnSucceeded() {
            ULSc2E:
                ;
                var initialDataValues = item.get_fieldValues();
                var initialLocalizedValues = (item.get_fieldValuesAsText()).get_fieldValues();

                function SuccessCallback(item) {
                ULSc2E:
                    ;
                    var localizedTable = {};
                    var unlocalizedTable = {};

                    for (var idx in _gridFieldMap) {
                        if (idx in initialDataValues) {
                            var gridValue = initialDataValues[idx] == null ? null : SPListValueToGridValue(initialDataValues[idx], initialLocalizedValues[idx], _gridFieldMap[idx].GetPropType(), idx);

                            if (gridValue && 'data' in gridValue) {
                                unlocalizedTable[idx] = gridValue.data;
                            }
                            if (gridValue && 'localized' in gridValue) {
                                localizedTable[idx] = gridValue.localized;
                            }
                        }
                    }
                    var recordKey = item.get_id();

                    unlocalizedTable['ID'] = (localizedTable['ID'] = recordKey);
                    unlocalizedTable['ContentType'] = (localizedTable['ContentType'] = (item.get_contentType()).get_name());
                    unlocalizedTable['Edit'] = SPG.Permissions.editListItems | SPG.Permissions.deleteListItems;
                    _jsGridControl.RemoveRowHeaderState(record.key(), SP.JsGrid.RowHeaderStyleId.Transfer);
                    if (fnSuccess != null) {
                        fnSuccess(recordKey, localizedTable, unlocalizedTable);
                    }
                    if (_hierarchyEnabled) {
                        (_jsGridControl.GetHierarchyQueryObject()).SetTagObject(recordKey, {
                            order: initialDataValues.Order
                        });
                    }
                    _currentlyCreatingNewListItem = false;
                    var result = _jsGridControl.GetRecord(recordKey);

                    for (var idx = 0; idx < _fnRowChanged.length; idx++) {
                        _fnRowChanged[idx](recordKey, localizedTable, false);
                    }
                    if (propUpdates != null) {
                        for (var i = 0; i < propUpdates.length; i++) {
                            _fnCallbacksByChangeKey.CallFunctions(propUpdates[i].changeKey.GetVersionNumber(), true, recordKey);
                        }
                    }
                }
                var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

                if (renderCtx != null) {
                    (function(item, record) {
                    ULSc2E:
                        ;
                        var ctx = InitContext(function() {
                        ULSc2E:
                            ;
                            HandleCSRData(listData, record.recordKey, item.get_id());
                            SuccessCallback(item);
                            var currentItem = record.fieldRawDataMap.csrInfo;

                            renderCtx.ListData.Row.push(currentItem);
                            PostCSRRender();
                        });
                        var items = {};

                        items[item.get_id()] = 1;
                        var listData = RetrieveCSRData(items, ctx.list);

                        ctx.context.executeQueryAsync();
                    })(item, record);
                }
                else {
                    SuccessCallback(item);
                }
            }
            function OnFailed(source, args, optCommitErrorId) {
            ULSc2E:
                ;
                _jsGridControl.RemoveRowHeaderState(record.key(), SP.JsGrid.RowHeaderStyleId.Transfer);
                var commitErrorId = optCommitErrorId;

                if (args != null) {
                    commitErrorId = SetErrorFromCSOMException(record.key(), args.get_errorCode(), args.get_errorValue(), args.get_message(), args.get_errorDetails());
                }
                if (fnFail != null) {
                    fnFail(args && args.get_message(), commitErrorId);
                }
                _currentlyCreatingNewListItem = false;
                if (propUpdates != null) {
                    for (var i = 0; i < propUpdates.length; i++) {
                        _fnCallbacksByChangeKey.CallFunctions(propUpdates[i].changeKey.GetVersionNumber(), false);
                    }
                }
            }
            function CheckAllRequiredFields(propsByFieldKey) {
            ULSc2E:
                ;
                var bMissingField = false;
                var errorId = null;

                function HandleMissingField(fieldKey) {
                ULSc2E:
                    ;
                    if (_jsGridControl.GetColumnByFieldKey(fieldKey) == null) {
                        errorId = SetRowLevelError(record.recordKey, SP.Res.requiredFieldNotInEditView, false);
                    }
                    else {
                        _jsGridControl.SetCellError(record.recordKey, fieldKey, SP.Res.requiredField15);
                    }
                    bMissingField = true;
                }
                for (var fieldKey in _params.requiredFields) {
                    var prop;

                    if ((prop = propsByFieldKey[fieldKey]) == null || (prop.HasLocalizedValue() && (prop.localized == '' || prop.localized == null) || prop.HasDataValue() && prop.data == null)) {
                        HandleMissingField(fieldKey);
                    }
                }
                if (record.fieldRawDataMap != null && record.fieldRawDataMap["_ContentTypeId"] != null) {
                    var contentType = record.fieldRawDataMap["_ContentTypeId"];

                    if (contentType != null && contentType in _params.contentTypes) {
                        var contentTypeRequiredFields = _params.contentTypes[contentType].RequiredFields;

                        for (var i = 0; i < contentTypeRequiredFields.length; i++) {
                            var fieldKey = contentTypeRequiredFields[i];

                            if ((prop = propsByFieldKey[fieldKey]) == null || (prop.HasLocalizedValue() && (prop.localized == '' || prop.localized == null) || prop.HasDataValue() && prop.data == null)) {
                                HandleMissingField(fieldKey);
                            }
                        }
                    }
                }
                return {
                    "fieldsMissing": bMissingField,
                    "errorId": errorId
                };
            }
            _jsGridControl.RemoveRowHeaderState(record.key(), SP.JsGrid.RowHeaderAutoStyleId.Dirty);
            _jsGridControl.AddBuiltInRowHeaderState(record.key(), SP.JsGrid.RowHeaderStyleId.Transfer);
            var propsByFieldKey = {};
            var propUpdatesByFieldKey = {};

            if (propUpdates != null) {
                for (var i = 0; i < propUpdates.length; i++) {
                    propUpdatesByFieldKey[propUpdates[i].fieldKey] = propUpdates[i];
                    propsByFieldKey[propUpdates[i].fieldKey] = propUpdates[i].newProp;
                }
            }
            var requiredFieldResult = CheckAllRequiredFields(propsByFieldKey);

            if (requiredFieldResult.fieldsMissing) {
                OnFailed(null, null, requiredFieldResult.errorId);
                return;
            }
            var ctx = InitContext(OnSucceeded, OnFailed);
            var creationInfo;

            if (_params.viewRootFolder != null) {
                creationInfo = new SP.ListItemCreationInformation();
                creationInfo.set_folderUrl(_params.viewRootFolder);
            }
            var item = ctx.list.addItem(creationInfo);

            for (var fieldKey in propUpdatesByFieldKey) {
                var propUpdate = propUpdatesByFieldKey[fieldKey];
                var fieldKey = propUpdate.fieldKey;
                var listValue = GridValueToSPListValue(propUpdate.newProp, propUpdate.propType);

                if (fieldKey in _params.parseAndSetFields) {
                    item.parseAndSetFieldValue(fieldKey, listValue);
                }
                else if (propUpdate.propType != null && (propUpdate.propType.ID == "TaxonomyField" || propUpdate.propType.ID == "TaxonomyField_MultiValue")) {
                    var fields = ctx.list.get_fields();
                    var field = fields.getByInternalNameOrTitle(fieldKey);

                    field.validateSetValue(item, listValue);
                }
                else {
                    item.set_item(fieldKey, listValue);
                }
            }
            if (_hierarchyEnabled) {
                item.set_item(_params.parentColumnName, GetParentKeyToCommit(record.key()));
                item.set_item(_params.taskOrderColumnName, GetNewOrderValue(record.key(), record.newRowNumber));
            }
            item.update();
            (item.get_fieldValuesAsText()).retrieve();
            item.retrieve();
            (item.get_contentType()).retrieve();
            ctx.context.executeQueryAsync();
            _currentlyCreatingNewListItem = true;
        }
        function InitContext(fnOnSucceded, fnOnFailed) {
        ULSc2E:
            ;
            var context = new SP.ClientContext(_params.webUrl);

            context.add_requestSucceeded(function(source, eventArgs) {
            ULSc2E:
                ;
                setTimeout(function() {
                ULSc2E:
                    ;
                    fnOnSucceded(source, eventArgs);
                }, 0);
            });
            context.add_requestFailed(function(source, eventArgs) {
            ULSc2E:
                ;
                setTimeout(function() {
                ULSc2E:
                    ;
                    fnOnFailed(source, eventArgs);
                }, 0);
            });
            var web = context.get_web();
            var list = (web.get_lists()).getById(_params.listId);
            var view = (list.get_views()).getById(_params.viewId);

            return {
                context: context,
                web: web,
                list: list,
                view: view
            };
        }
        function InitSPListValueConversion(splookupFieldInfo) {
        ULSc2E:
            ;
            _GridValueToSPListValueConverters['Hyperlink'] = function(propUpdate) {
            ULSc2E:
                ;
                if (propUpdate.data == null) {
                    return null;
                }
                var r = new SP.FieldUrlValue();

                r.set_url(propUpdate.data.address);
                r.set_description(propUpdate.data.display);
                return r;
            };
            _SPListValueToGridValueConverters['Hyperlink'] = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                return dataFromServer == null ? null : {
                    data: {
                        address: dataFromServer.get_url(),
                        display: dataFromServer.get_description()
                    },
                    localized: dataFromServer.get_description()
                };
            };
            _SPListValueToGridValueConverters['SPEnhancedRichText'] = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                return dataFromServer == null || dataFromServer == "" ? null : {
                    data: dataFromServer,
                    localized: dataFromServer
                };
            };
            _GridValueToSPListValueConverters['SPUser'] = function(propUpdate) {
            ULSc2E:
                ;
                var loc = propUpdate.localized;

                return loc == null || loc == '' ? null : '-1;#' + loc;
            };
            _SPListValueToGridValueConverters['SPUser'] = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                return {
                    data: dataFromServer,
                    localized: dataFromServer.get_lookupValue()
                };
            };
            _GridValueToSPListValueConverters['SPUser_MultiValue'] = function(propUpdate) {
            ULSc2E:
                ;
                var loc = propUpdate.localized;

                return loc == null || loc == '' ? null : '-1;#' + (SP.Internal.JS.TokenizeString(loc, ';')).join(';#-1;#');
            };
            _SPListValueToGridValueConverters['SPUser_MultiValue'] = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                var loc = [];

                for (var i = 0; i < dataFromServer.length; i++) {
                    loc.push(dataFromServer[i].get_lookupValue());
                }
                return {
                    data: dataFromServer,
                    localized: loc.join('; ')
                };
            };
            _GridValueToSPListValueConverters["DropdownBoolean"] = function(propUpdate) {
            ULSc2E:
                ;
                return !!propUpdate.data ? 1 : 0;
            };
            _SPListValueToGridValueConverters['SPDateTime'] = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                var date = new Date(dataFromServer.valueOf() + _spRegionalSettings.timeZoneInHours * 60 * 60 * 1000);

                return {
                    data: date,
                    localized: localizedFromServer
                };
            };
            var LookupSingleValue_GridValueToSPListValueConverter = function(propUpdate) {
            ULSc2E:
                ;
                return propUpdate.data && propUpdate.data + ';#';
            };
            var LookupSingleValue_SPListValueToGridValueConverter = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                return {
                    data: dataFromServer.get_lookupId(),
                    localized: localizedFromServer
                };
            };
            var LookupMultiValue_GridValueToSPListValueConverter = function(propUpdate) {
            ULSc2E:
                ;
                return propUpdate.data && propUpdate.data.join(';#;#') + ';#';
            };
            var LookupMultiValue_SPListValueToGridValueConverter = function(dataFromServer, localizedFromServer, fieldKey) {
            ULSc2E:
                ;
                var data = [];

                for (var i = 0; i < dataFromServer.length; i++) {
                    data.push(dataFromServer[i].get_lookupId());
                }
                return {
                    data: data,
                    localized: localizedFromServer
                };
            };

            for (var fieldName in splookupFieldInfo) {
                var propTypeId = fieldName + "_Lookup";

                _GridValueToSPListValueConverters[propTypeId] = LookupSingleValue_GridValueToSPListValueConverter;
                _SPListValueToGridValueConverters[propTypeId] = LookupSingleValue_SPListValueToGridValueConverter;
                propTypeId = fieldName + "_Lookup_MultiValue";
                _GridValueToSPListValueConverters[propTypeId] = LookupMultiValue_GridValueToSPListValueConverter;
                _SPListValueToGridValueConverters[propTypeId] = LookupMultiValue_SPListValueToGridValueConverter;
            }
        }
        this.RegisterSPListValueToGridValueConverter = function(propTypeId, converterCallback) {
        ULSc2E:
            ;
            _SPListValueToGridValueConverters[propTypeId] = converterCallback;
        };
        this.RegisterGridValueToSPListValueConverter = function(propTypeId, converterCallback) {
        ULSc2E:
            ;
            _GridValueToSPListValueConverters[propTypeId] = converterCallback;
        };
        function GridValueToSPListValue(propUpdate, propType) {
        ULSc2E:
            ;
            var r;

            if (propType == null) {
                r = propUpdate.HasDataValue() ? propUpdate.data : propUpdate.localized;
            }
            else if (_GridValueToSPListValueConverters[propType.ID] != null) {
                r = _GridValueToSPListValueConverters[propType.ID](propUpdate);
            }
            else {
                r = propType.bMultiValue ? (propType.LocStrToLocStrArray(propUpdate.localized)).join(';#') : propUpdate.localized;
            }
            return r === '' ? null : r;
        }
        function SPListValueToGridValue(dataFromServer, localizedFromServer, propType, fieldKey) {
        ULSc2E:
            ;
            var r;

            if (dataFromServer == null) {
                r = null;
            }
            else if (_SPListValueToGridValueConverters[propType.ID] != null) {
                r = _SPListValueToGridValueConverters[propType.ID](dataFromServer, localizedFromServer, fieldKey);
            }
            else {
                r = {
                    data: dataFromServer,
                    localized: propType.bMultiValue ? propType.LocStrArrayToLocStr(isArray(dataFromServer) ? dataFromServer : SP.Internal.JS.TokenizeString(dataFromServer, ';#')) : localizedFromServer
                };
            }
            return r;
        }
        function isArray(obj) {
        ULSc2E:
            ;
            return obj && obj.constructor == Array;
        }
        function GetGanttBarDate(record, barInfoIdx, barDateType) {
        ULSc2E:
            ;
            var r;
            var s = record.GetDataValue(_params.startColumnName);
            var e = record.GetDataValue(_params.finishColumnName);

            if (s != null && e != null && s > e) {
                var temp = s;

                s = e;
                e = temp;
            }
            if (barDateType == SP.JsGrid.GanttBarDateType.End && barInfoIdx == 1 && s != null && e != null) {
                var pct = _params.pctCompleteColumnName != null ? record.GetDataValue(_params.pctCompleteColumnName) : null;

                pct = Math.min(pct == null ? 0 : pct, 1);
                if (isNaN(pct)) {
                    r = null;
                }
                else {
                    deltaMs = Math.abs(e.getTime() - s.getTime());
                    r = pct != 0 ? new Date(s.getTime() + deltaMs * pct) : null;
                }
            }
            else {
                r = barDateType == SP.JsGrid.GanttBarDateType.Start ? s : e;
            }
            return r;
        }
        function GetGanttBarStyles(record) {
        ULSc2E:
            ;
            var start = record.GetDataValue(_params.startColumnName);
            var finish = record.GetDataValue(_params.finishColumnName);

            if (start && start.constructor == Date && finish && finish.constructor == Date) {
                if (start.getTime() == finish.getTime()) {
                    return [SPG.BarStyle.Milestone];
                }
                else if (record.GetDataValue('_FolderLink') || _hierarchyEnabled && !_bGrouped && (_jsGridControl.GetHierarchyQueryObject()).IsParent(record.recordKey)) {
                    return [SPG.BarStyle.Summary];
                }
            }
            return [SPG.BarStyle.Standard, SPG.BarStyle.PctComplete];
        }
        function GetGanttGridRowStyleId(record) {
        ULSc2E:
            ;
            if (_hierarchyEnabled && !_jsGridControl.IsEntryRecordKey(record.recordKey)) {
                var query = _jsGridControl.GetHierarchyQueryObject();

                if (query != null) {
                    return query.IsParent(record.recordKey) ? 'Summary' : null;
                }
            }
            return null;
        }
        function GetPredecessors(record, predColDataValue) {
        ULSc2E:
            ;
            if (predColDataValue == null) {
                return null;
            }
            var r = [];

            for (var i = 0; i < predColDataValue.length; i++) {
                r.push({
                    key: predColDataValue[i],
                    type: SP.JsGrid.LinkType.FinishStart
                });
            }
            return r;
        }
        function GetFieldReadOnlyActiveState(field) {
        ULSc2E:
            ;
            var csrField = GetCSRFieldFromJsGridFieldKey(field);

            if (csrField == null || csrField.GridActiveAndReadOnly == null) {
                return null;
            }
            if (csrField.GridActiveAndReadOnly == "TRUE") {
                return SP.JsGrid.ReadOnlyActiveState.ReadOnlyActive;
            }
            return SP.JsGrid.ReadOnlyActiveState.ReadOnlyDisabled;
        }
        function GetFieldEditMode(field) {
        ULSc2E:
            ;
            var csrField = GetCSRFieldFromJsGridFieldKey(field);

            if (csrField == null) {
                return SP.JsGrid.EditMode.ReadOnly;
            }
            if (csrField.AllowGridEditing == "TRUE" && csrField.ReadOnly != "TRUE" && csrField.XSLRender != "1") {
                return SP.JsGrid.EditMode.ReadWriteDefer;
            }
            else {
                return SP.JsGrid.EditMode.ReadOnly;
            }
        }
        function GetRecordEditMode(record) {
        ULSc2E:
            ;
            return record.GetDataValue('Edit') & SPG.Permissions.editListItems ? SP.JsGrid.EditMode.ReadWriteDefer : SP.JsGrid.EditMode.ReadOnly;
        }
        function ShouldLinkTitleCell(record, fieldKey, singleDataValue, singleLocalizedValue) {
        ULSc2E:
            ;
            return record.GetDataValue('_FolderLink') != null;
        }
        function OnTitleCellContentsClicked(record, fieldKey, singleDataValue, singleLocalizedValue) {
        ULSc2E:
            ;
            var folderLink = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), record.GetDataValue('_FolderLink'));

            window.location.href = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), _params.viewUrl + '?RootFolder=' + escapeProperly(folderLink) + '&FolderCTID=' + _params.folderContentTypeId);
        }
        function OnEditCellContentsClicked(record, fieldKey, singleDataValue, singleLocalizedValue) {
        ULSc2E:
            ;
            var ctx = GetCurrentCtx();
            var url = ctx.editFormUrl;
            var strSeperator = url.indexOf("?") == -1 ? '?' : '&';

            window.location.href = url + strSeperator + 'ID=' + record.GetDataValue('ID') + '&Source=' + escapeProperly(window.location.href);
        }
        function OnRecordsReordered(args) {
        ULSc2E:
            ;
            FixOrderForKeys(args.reorderedKeys, args.changeKey);
            RefreshCommandUI();
        }
        function FixOrderForKeys(itemIds, changeKey, fnOnComplete) {
        ULSc2E:
            ;
            var hierarchyInfo = _jsGridControl.GetHierarchyQueryObject();

            function BuildParentChildrenMap(recordKeys) {
            ULSc2E:
                ;
                var ret = {};

                for (var i = 0; i < recordKeys.length; i++) {
                    var parentKey = hierarchyInfo.GetParentKey(recordKeys[i]);

                    if (ret[parentKey]) {
                        ret[parentKey].push(recordKeys[i]);
                    }
                    else {
                        ret[parentKey] = [recordKeys[i]];
                    }
                }
                for (var parentKey in ret) {
                    ret[parentKey] = hierarchyInfo.GetKeysInOrder(ret[parentKey]);
                }
                return ret;
            }
            function LocallyReorderRecords(recordKeys) {
            ULSc2E:
                ;
                var prevKey = hierarchyInfo.GetPreviousSibling(recordKeys[0]);
                var nextKey = hierarchyInfo.GetNextSibling(recordKeys[recordKeys.length - 1]);
                var first = 0.0;

                if (prevKey != null) {
                    first = (hierarchyInfo.GetTagObject(prevKey)).order;
                }
                var last;

                if (nextKey != null) {
                    last = (hierarchyInfo.GetTagObject(nextKey)).order;
                }
                else if (prevKey != null) {
                    recordKeys = [prevKey].concat(recordKeys);
                    prevKey = hierarchyInfo.GetPreviousSibling(prevKey);
                    first = 0.0;
                    if (prevKey != null) {
                        first = (hierarchyInfo.GetTagObject(prevKey)).order;
                    }
                    last = 0.0;
                    for (var i = 0; i < recordKeys.length; i++) {
                        last = Math.max(last, (hierarchyInfo.GetTagObject(recordKeys[i])).order);
                    }
                }
                else {
                    last = 100.0;
                }
                var stepSize = (last - first) / (recordKeys.length + 1);
                var updates = [];

                for (var i = 0; i < recordKeys.length; i++) {
                    var order = first + stepSize * (i + 1);

                    updates.push(SP.JsGrid.CreateValidatedPropertyUpdate(recordKeys[i], _params.parentColumnName, GetParentKeyToCommit(recordKeys[0], hierarchyInfo), null));
                    updates.push(SP.JsGrid.CreateValidatedPropertyUpdate(recordKeys[i], _params.taskOrderColumnName, null, order));
                    hierarchyInfo.SetTagObject(recordKeys[i], {
                        order: order
                    });
                }
                _fnCallbacksByChangeKey.AddMapping(changeKey.GetVersionNumber(), fnOnComplete);
                _jsGridControl.UpdateProperties(updates);
                WriteChangesToList();
            }
            var map = BuildParentChildrenMap(itemIds);

            for (var parentKey in map) {
                LocallyReorderRecords(map[parentKey]);
            }
        }
        function DeleteSelectedRecords(optRecordKey) {
        ULSc2E:
            ;
            var selectedKeys = _jsGridControl.GetSelectedRecordKeys();
            var bFoundRightClickedRecordKey = false;

            for (var i = 0; i < selectedKeys.length; i++) {
                if (selectedKeys[i] == optRecordKey) {
                    bFoundRightClickedRecordKey = true;
                    break;
                }
            }
            if ((!bFoundRightClickedRecordKey || selectedKeys.length == 0) && optRecordKey != null) {
                selectedKeys = [optRecordKey];
            }
            _this.DeleteItems(selectedKeys);
        }
        this.IsParent = function(key) {
        ULSc2E:
            ;
            if (!_hierarchyEnabled) {
                return false;
            }
            return (_jsGridControl.GetHierarchyQueryObject()).IsParent(key);
        };
        this.DeleteItems = function(keys, fnOnComplete) {
        ULSc2E:
            ;
            var nonEntryRecordKeys = [];

            for (var i = 0; i < keys.length; i++) {
                if (!_jsGridControl.IsEntryRecordKey(keys[i])) {
                    nonEntryRecordKeys.push(keys[i]);
                }
            }
            if (_hierarchyEnabled) {
                nonEntryRecordKeys = ((_jsGridControl.GetHierarchyQueryObject()).GetKeysInOrder(nonEntryRecordKeys)).reverse();
            }
            var realRecordsKeys = [];

            for (var i = 0; i < nonEntryRecordKeys.length; i++) {
                if (!_jsGridControl.IsProvisionalRecordKey(nonEntryRecordKeys[i])) {
                    realRecordsKeys.push(nonEntryRecordKeys[i]);
                }
                else {
                    _jsGridControl.DeleteRecords([nonEntryRecordKeys[i]]);
                }
            }
            for (var i = 0; i < nonEntryRecordKeys.length; i++) {
                var key = nonEntryRecordKeys[i];

                if (_changesToSend[key] != null) {
                    delete _changesToSend[key];
                }
            }
            var renderCtx = _jsGridControl.GetSpCsrRenderCtx();

            if (renderCtx != null) {
                EnsureScriptParams("inplview.js", "DeleteSelectedItemsCore", renderCtx, realRecordsKeys, GetOnSucceeded(nonEntryRecordKeys), GetOnFailed(false));
                return;
            }
            if (_jsGridControl.DeleteRecords(nonEntryRecordKeys) != null) {
                if (realRecordsKeys.length != 0) {
                    _currentlyDeletingListItems = true;
                    var context = InitContext(GetOnSucceeded(), GetOnFailed(true));
                    var bRecycle = ctx.RecycleBinEnabled == '1' && !ctx.ExternalDataList;

                    for (var i = 0; i < realRecordsKeys.length; i++) {
                        var record = _dataSource.tableCache.GetCachedRecord(realRecordsKeys[i]);

                        if (record.GetDataValue('Edit') & SPG.Permissions.deleteListItems) {
                            var item = context.list.getItemById(realRecordsKeys[i]);

                            if (bRecycle) {
                                item.recycle();
                            }
                            else {
                                item.deleteObject();
                            }
                        }
                    }
                    context.context.executeQueryAsync();
                }
                else if (fnOnComplete != null) {
                    fnOnComplete(true);
                }
            }
            function GetOnSucceeded(recordKeysToDelete) {
            ULSc2E:
                ;
                return function() {
                ULSc2E:
                    ;
                    for (var idx = 0; idx < nonEntryRecordKeys.length; idx++) {
                        var recordKey = nonEntryRecordKeys[idx];
                        var result = _jsGridControl.GetRecord(recordKey);

                        for (var idx2 = 0; idx2 < _fnRowChanged.length; idx2++) {
                            _fnRowChanged[idx2](recordKey, result.properties, true);
                        }
                    }
                    if (nonEntryRecordKeys != null) {
                        _jsGridControl.DeleteRecords(nonEntryRecordKeys);
                    }
                    _currentlyDeletingListItems = false;
                    if (fnOnComplete != null) {
                        fnOnComplete(true);
                    }
                };
            }
            function GetOnFailed(bUseAlert) {
            ULSc2E:
                ;
                return function() {
                ULSc2E:
                    ;
                    if (bUseAlert) {
                        alert(SP.Res.deleteFailed);
                    }
                    _currentlyDeletingListItems = false;
                    if (fnOnComplete != null) {
                        fnOnComplete(false);
                    }
                };
            }
        };
        this.get_ItemCount = function() {
        ULSc2E:
            ;
            return _jsGridControl.GetViewRecordCount();
        };
        this.GetViewIndexOfItem = function(itemId) {
        ULSc2E:
            ;
            return _jsGridControl.GetViewIndexOfRecord(itemId);
        };
        this.TrySelectItem = function(itemId) {
        ULSc2E:
            ;
            _jsGridControl.SelectRowRangeByKey(itemId, itemId, false);
        };
        this.ToggleAllItems = function() {
        ULSc2E:
            ;
            var topRecordIdx = 0;
            var bottomRecordIdx = (_jsGridControl._GetPaneManager()).RecordKeyToViewIdx(_jsGridControl.GetLastRecordKey());
            var selectedKeys = _jsGridControl.GetSelectedRecordKeys();

            if (selectedKeys == null || selectedKeys.length != bottomRecordIdx - topRecordIdx + 1) {
                _jsGridControl.SelectRowRange(topRecordIdx, bottomRecordIdx, false);
            }
            else {
                _jsGridControl.SelectCellRange(0, 0, 0, 0, false);
            }
        };
        this.ReadValue = function(recordKey, fieldKey, fnOnComplete) {
        ULSc2E:
            ;
            _dataSource.tableCache.GetRecordsByKey([recordKey], function(keys, records, succeeded) {
            ULSc2E:
                ;
                if (succeeded) {
                    var rec = records[0];
                    var result = {
                        hasDataValue: rec.HasDataValue(fieldKey),
                        hasLocalizedValue: rec.HasLocalizedValue(fieldKey)
                    };

                    if (result.hasDataValue) {
                        result.dataValue = rec.GetDataValue(fieldKey);
                    }
                    if (result.hasLocalizedValue) {
                        result.localizedValue = rec.GetLocalizedValue(fieldKey);
                    }
                    if (fnOnComplete) {
                        return fnOnComplete(true, result);
                    }
                }
                else if (fnOnComplete != null) {
                    fnOnComplete(false);
                }
            });
        };
        this.GetOutlineLevel = function(id, fnOnComplete) {
        ULSc2E:
            ;
            _dataSource.tableCache.GetRecordsByKey([id], function(keys, records, succeeded) {
            ULSc2E:
                ;
                if (succeeded) {
                    var result = _jsGridControl.GetOutlineLevel(records[0]);

                    if (fnOnComplete) {
                        return fnOnComplete(true, result);
                    }
                }
                else if (fnOnComplete != null) {
                    fnOnComplete(false);
                }
            });
        };
        this.get_Columns = function() {
        ULSc2E:
            ;
            return _jsGridControl.GetColumns();
        };
        this.get_RequiredColumnKeys = function() {
        ULSc2E:
            ;
            var ret = [];

            for (var key in _params.requiredFields) {
                ret.push(key);
            }
            return ret;
        };
        this.InsertItemAtEnd = function(initialValues, fnOnComplete) {
        ULSc2E:
            ;
            InsertItemBefore(null, initialValues, fnOnComplete);
        };
        this.InsertItem = function(beforeRecordKey, initialValues, fnOnComplete) {
        ULSc2E:
            ;
            InsertItemBefore(beforeRecordKey, initialValues, fnOnComplete);
        };
        this.InsertProvisionalItemBeforeFocusedItem = function() {
        ULSc2E:
            ;
            if (!_canModifyHierarchy) {
                return false;
            }
            var focusedItem = _jsGridControl.GetFocusedItem();
            var focusedRecord;

            if (focusedItem != null) {
                if (_jsGridControl.IsEntryRecordKey(focusedItem.recordKey)) {
                    _this.InsertItemAtEnd();
                }
                else {
                    _this.InsertItem(focusedItem.recordKey);
                }
                return true;
            }
            return false;
        };
        this.CreateSubItem = function(itemId) {
        ULSc2E:
            ;
            if (!_hierarchyEnabled || !_canModifyHierarchy) {
                alert(SP.Res.hierarchyDisabled);
                return false;
            }
            var idx = _jsGridControl.GetViewIndexOfRecord(itemId);
            var followingRecordKey;

            if (idx + 1 >= _jsGridControl.GetViewRecordCount()) {
                followingRecordKey = null;
            }
            else {
                followingRecordKey = _jsGridControl.GetRecordKeyByViewIndex(idx + 1);
            }
            InsertItemBefore(followingRecordKey, null, null, true);
        };
        this.get_IsInsertProvisionalItemBeforeFocusEnabled = function() {
        ULSc2E:
            ;
            var focusedItem = _jsGridControl.GetFocusedItem();

            if (_canModifyHierarchy && focusedItem != null && _params.listPermissions & SPG.Permissions.addListItems) {
                return true;
            }
            return false;
        };
        function InsertItemBefore(followingRecordKey, initialValues, fnOnComplete, fIndent) {
        ULSc2E:
            ;
            if (!_hierarchyEnabled || !_canModifyHierarchy) {
                alert(SP.Res.hierarchyDisabled);
                return;
            }
            var dataValues = {
                Edit: SPG.Permissions.editListItems | SPG.Permissions.deleteListItems
            };
            var localizedValues = {};

            if (initialValues != null) {
                for (var i = 0; i < initialValues.length; i++) {
                    if (initialValues[i].propertyValue.hasDataValue) {
                        dataValues[initialValues[i].fieldKey] = initialValues[i].propertyValue.dataValue;
                    }
                    if (initialValues[i].propertyValue.hasLocalizedValue) {
                        localizedValues[initialValues[i].fieldKey] = initialValues[i].propertyValue.localizedValue;
                    }
                }
            }
            var record = _dataSource.recordFactory.MakeRecord(dataValues, localizedValues);
            var changeKey;

            if (followingRecordKey == null) {
                changeKey = _jsGridControl.InsertProvisionalRecordAfter(_jsGridControl.GetLastRecordKey(), record, initialValues);
            }
            else {
                changeKey = _jsGridControl.InsertProvisionalRecordBefore(followingRecordKey, record, initialValues);
            }
            if (fIndent) {
                _jsGridControl.IndentRecords([record.recordKey]);
                if (_jsGridControl.GetSpCsrRenderCtx() != null && !(_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention) {
                    (_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention = true;
                    _jsGridControl.RefreshAllRows();
                }
            }
            _fnCallbacksByChangeKey.AddMapping(changeKey.GetVersionNumber(), fnOnComplete);
            _jsGridControl.ScrollToAndExpandNextErrorOnRecord(null, record.recordKey, null, true);
            _jsGridControl.TryBeginEdit();
        }
        this.InsertProvisionalChildOfFocusedItem = function() {
        ULSc2E:
            ;
            var focusedItem = _jsGridControl.GetFocusedItem();

            if (focusedItem != null) {
                InsertChildItem(focusedItem.recordKey);
                return true;
            }
            return false;
        };
        this.get_IsInsertProvisionalChildOfFocusedItemEnabled = function() {
        ULSc2E:
            ;
            var focusedItem = _jsGridControl.GetFocusedItem();

            if (focusedItem != null && _hierarchyEnabled && _params.listPermissions & SPG.Permissions.addListItems) {
                return true;
            }
            return false;
        };
        function InsertChildItem(previousRecordKey) {
        ULSc2E:
            ;
            Sys.Debug.assert(_hierarchyEnabled);
            var defaultNewRecord = {
                Edit: SPG.Permissions.editListItems | SPG.Permissions.deleteListItems
            };
            var record = _dataSource.recordFactory.MakeRecord(defaultNewRecord, {});

            _jsGridControl.InsertProvisionalRecordAfter(previousRecordKey, record, null, true);
            var changeKey = _jsGridControl.IndentRecords([record.recordKey]);
        }
        function GetCommittedKeys(keys) {
        ULSc2E:
            ;
            var ret = [];

            for (var i = 0; i < keys.length; i++) {
                if (!_jsGridControl.IsEntryRecordKey(keys[i]) && !_jsGridControl.IsProvisionalRecordKey(keys[i])) {
                    ret.push(keys[i]);
                }
            }
            return ret;
        }
        this.IndentItems = function(keys, fnOnComplete) {
        ULSc2E:
            ;
            if (!_hierarchyEnabled || !_canModifyHierarchy) {
                alert(SP.Res.hierarchyDisabled);
                return;
            }
            keys = GetCommittedKeys(keys);
            var changeKey = keys.length > 0 ? _jsGridControl.IndentRecords(keys) : null;

            if (changeKey != null) {
                FixOrderForKeys(keys, changeKey, fnOnComplete);
                if (_jsGridControl.GetSpCsrRenderCtx() != null && !(_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention) {
                    (_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention = true;
                    _jsGridControl.RefreshAllRows(null, true);
                }
            }
            else if (fnOnComplete) {
                fnOnComplete(false);
            }
        };
        this.OutdentItems = function(keys, fnOnComplete) {
        ULSc2E:
            ;
            if (!_hierarchyEnabled || !_canModifyHierarchy) {
                alert(SP.Res.hierarchyDisabled);
                return;
            }
            keys = GetCommittedKeys(keys);
            if (keys.length > 0) {
                var query = _jsGridControl.GetHierarchyQueryObject();
                var updateList = [];

                for (var i = 0; i < keys.length; i++) {
                    updateList = updateList.concat(query.GetAllFollowingSiblings(keys[i]));
                }
                var changeKey = _jsGridControl.OutdentRecords(keys);

                if (changeKey != null) {
                    updateSet = new SP.Utilities.Set();
                    updateSet.AddArray(keys);
                    updateSet.AddArray(updateList);
                    updateList = updateSet.ToArray();
                    FixOrderForKeys(updateList, changeKey, fnOnComplete);
                    if (_jsGridControl.GetSpCsrRenderCtx() != null && !(_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention) {
                        (_jsGridControl.GetSpCsrRenderCtx()).ListData.HierarchyHasIndention = true;
                        _jsGridControl.RefreshAllRows(null, true);
                    }
                }
                else if (fnOnComplete != null) {
                    fnOnComplete(false);
                }
            }
            else if (fnOnComplete != null) {
                fnOnComplete(false);
            }
        };
        this.get_IsReadOnly = function() {
        ULSc2E:
            ;
            return (_params.listPermissions & SPG.Permissions.editListItems) != SPG.Permissions.editListItems;
        };
        function CanReorderItems() {
        ULSc2E:
            ;
            return _params.canReorder && _canModifyHierarchy && (_sortState == null || !_sortState.isDescending && _sortState.sortField == "Order");
        }
        ;
        function OnBeforeRecordReordered() {
        ULSc2E:
            ;
            if (!CanReorderItems()) {
                alert(SP.Res.hierarchyDisabled);
                return false;
            }
            return true;
        }
        this.get_ContiguousSelectedItemsWithoutEntryItems = function() {
        ULSc2E:
            ;
            var range = _jsGridControl.GetContiguousRowSelectionWithoutEntryRecords();

            return range == null ? null : range.keys;
        };
        this.MoveItemsUp = function(keys, fnOnComplete) {
        ULSc2E:
            ;
            if (!CanReorderItems()) {
                alert(SP.Res.hierarchyDisabled);
                if (fnOnComplete != null) {
                    fnOnComplete(false);
                }
                return;
            }
            if (keys != null && keys.length > 0 && _jsGridControl.CanMoveRecordsUpByOne(keys)) {
                var changeKey = _jsGridControl.MoveRecordsUpByOne(keys);

                _fnCallbacksByChangeKey.AddMapping(changeKey.GetVersionNumber(), fnOnComplete);
            }
            else if (fnOnComplete != null) {
                fnOnComplete(false);
            }
        };
        this.MoveItemsDown = function(keys, fnOnComplete) {
        ULSc2E:
            ;
            if (!CanReorderItems()) {
                alert(SP.Res.hierarchyDisabled);
                if (fnOnComplete != null) {
                    fnOnComplete(false);
                }
                return;
            }
            if (keys != null && keys.length > 0 && _jsGridControl.CanMoveRecordsDownByOne(keys)) {
                var changeKey = _jsGridControl.MoveRecordsDownByOne(keys);

                _fnCallbacksByChangeKey.AddMapping(changeKey.GetVersionNumber(), fnOnComplete);
            }
            else if (fnOnComplete != null) {
                fnOnComplete(false);
            }
        };
        this.GetNodeExpandCollapseState = function(recordKey) {
        ULSc2E:
            ;
            return _jsGridControl.GetNodeExpandCollapseState(recordKey);
        };
        this.ToggleExpandCollapse = function(recordKey) {
        ULSc2E:
            ;
            _jsGridControl.ToggleExpandCollapse(recordKey);
        };
        function IsRWTimelineAwareOfList(listId, viewName) {
            if (typeof SP.UI.Timeline == "undefined") {
                return false;
            }
            var retVal = false;

            RunOperationOnTimelineData(function() {
            ULSc2E:
                ;
                retVal = SP.UI.Timeline.ListTimelineDatasource.IsRWTimelineAwareOfList(listId, viewName);
            });
            return retVal;
        }
        function OnRightClick(args) {
        ULSc2E:
            ;
            if (args.context == SP.JsGrid.ClickContext.RowHeader && (_params.listPermissions & SPG.Permissions.deleteListItems || _params.listPermissions & SPG.Permissions.addListItems || _params.listPermissions & SPG.Permissions.editListItems)) {
                var rowContextMenu = new SP.JsGrid.ContextMenu(_jsGridControl.parentNode, _jsGridControl.parentNode.id + '_rowcontextmenu');

                if (_hierarchyEnabled && _params.listPermissions & SPG.Permissions.addListItems) {
                    rowContextMenu.InsertMenuItem(SP.Res.insertText, function() {
                    ULSc2E:
                        ;
                        InsertItemBefore(args.recordKey);
                    }, '/_layouts/15/images/newitem.gif', null, _bGrouped || _jsGridControl.IsEntryRecordKey(args.recordKey));
                }
                if (_params.listPermissions & SPG.Permissions.deleteListItems) {
                    rowContextMenu.InsertMenuItem(SP.Res.deleteText, function() {
                    ULSc2E:
                        ;
                        DeleteSelectedRecords(args.recordKey);
                    }, '/_layouts/15/images/delitem.gif', null, _jsGridControl.IsGroupingRecordKey(args.recordKey) || _jsGridControl.IsEntryRecordKey(args.recordKey));
                }
                if (_params.listPermissions & SPG.Permissions.editListItems) {
                    var ctx = _jsGridControl.GetSpCsrRenderCtx();

                    if (IsRWTimelineAwareOfList(_params.listId, _params.selectedTimelineView)) {
                        rowContextMenu.InsertMenuItem(Strings.STS.L_TimelineAddToTimeline, function() {
                        ULSc2E:
                            ;
                            var fFoundRClickedRow = false;
                            var itemIds = _jsGridControl.GetSelectedRecordKeys();
                            var itemsToAdd = [];

                            if (itemIds != null && itemIds.length && itemIds.length > 0) {
                                for (var idx = 0; idx < itemIds.length; idx++) {
                                    var itemToAdd = {};

                                    itemToAdd.id = itemIds[idx];
                                    itemsToAdd.push(itemToAdd);
                                    if (itemToAdd.id == args.recordKey) {
                                        fFoundRClickedRow = true;
                                    }
                                }
                            }
                            if (fFoundRClickedRow == false) {
                                var itemToAdd = {};

                                itemToAdd.id = args.recordKey.toString();
                                itemsToAdd = [itemToAdd];
                            }
                            AddItemsToTimeline(itemsToAdd, _params.listId, _params.selectedTimelineView);
                        }, '/_layouts/15/images/AddTaskToTimeline.png', null, _bGrouped || _jsGridControl.IsEntryRecordKey(args.recordKey));
                    }
                    if (CanDiscardChangesForRow(args.recordKey)) {
                        rowContextMenu.InsertMenuItem(Strings.STS.L_SPGanttDiscardChangesMenuItem, function() {
                        ULSc2E:
                            ;
                            DiscardChangesForRow(args.recordKey);
                        }, null, null, false);
                    }
                }
                var parentLoc = SP.Internal.DomElement.GetLocation(_jsGridControl.parentNode);
                var eventLoc = SP.Internal.DomElement.GetEventLocation(args.eventInfo);

                rowContextMenu.Show({
                    left: eventLoc.x - parentLoc.x,
                    top: eventLoc.y - parentLoc.y,
                    width: 1,
                    height: 1
                }, null);
            }
        }
        function GetNewOrderValue(recordKey, newRowNumber) {
        ULSc2E:
            ;
            var query = _jsGridControl.GetHierarchyQueryObject();

            if (_jsGridControl.IsEntryRecordKey(recordKey) && newRowNumber != null) {
                var lastRecordKey = _jsGridControl.GetLastRecordKey();

                return lastRecordKey == null ? 100 : (query.GetTagObject(_jsGridControl.GetLastRecordKey())).order + newRowNumber * 100;
            }
            else {
                var prevSibling = query.GetPreviousSibling(recordKey);

                while (prevSibling != null && (_jsGridControl.IsEntryRecordKey(prevSibling) || _jsGridControl.IsProvisionalRecordKey(prevSibling))) {
                    prevSibling = query.GetPreviousSibling(prevSibling);
                }
                var nextSibling = query.GetNextSibling(recordKey);

                while (nextSibling != null && (_jsGridControl.IsEntryRecordKey(nextSibling) || _jsGridControl.IsProvisionalRecordKey(nextSibling))) {
                    nextSibling = query.GetNextSibling(nextSibling);
                }
                var ret;

                if (prevSibling == null && nextSibling == null) {
                    ret = 100;
                }
                else if (prevSibling == null) {
                    ret = (query.GetTagObject(nextSibling)).order / 2;
                }
                else if (nextSibling == null) {
                    ret = (query.GetTagObject(prevSibling)).order + 100;
                }
                else {
                    ret = ((query.GetTagObject(nextSibling)).order + (query.GetTagObject(prevSibling)).order) / 2;
                }
                query.SetTagObject(recordKey, {
                    order: ret
                });
                return ret;
            }
        }
        function GetParentKeyToCommit(recordKey, query) {
        ULSc2E:
            ;
            if (_jsGridControl.IsEntryRecordKey(recordKey)) {
                recordKey = _jsGridControl.GetLastRecordKey();
            }
            if (query == null) {
                query = _jsGridControl.GetHierarchyQueryObject();
            }
            var parentId = recordKey == null ? 0 : query.GetParentKey(recordKey);

            return parentId == 0 ? null : parentId;
        }
        function BuildMaxLengthTable(customFieldInfo) {
        ULSc2E:
            ;
            var ret = {};

            for (var fieldName in customFieldInfo) {
                if (typeof customFieldInfo[fieldName] == "number") {
                    ret[fieldName] = customFieldInfo[fieldName];
                }
            }
            return ret;
        }
    };
    SP.GanttControl.Instances = [];
    SP.GanttControl.FnGanttCreationCallback = [];
    SP.GanttControl.WaitForGanttCreation = function(callback) {
        var instancesAlreadyCreated = SP.GanttControl.Instances;

        for (var idx = 0; idx < instancesAlreadyCreated.length; idx++) {
            callback(instancesAlreadyCreated[idx]);
        }
        SP.GanttControl.FnGanttCreationCallback.push(callback);
    };
    SP.JsGrid.SharePointDataSource = function(populatingWebMethod, initWebMethod, computeDataRangeWebMethod, webMethodMgr, jsGridControl, fnRefreshRowViewCallback, fnUpdateDisplayAndEditControls) {
    ULSc2E:
        ;
        var _this = this;
        var groupingRecords = null;
        var curView;
        var hierarchyMode;
        var keyColumnName;
        var jsGridParams;
        var rememberedRecordKeyHash = null;
        var inVirtualMode = false;

        this.recordFactory;
        this.tableCache;
        this.populatingWebMethod = populatingWebMethod;
        this.initWebMethod = initWebMethod;
        this.computeDataRangeWebMethod = computeDataRangeWebMethod;
        this.RefreshTableView = function(bPreserveTableCache, optfnSucessCallback, fnFailureCallback) {
        ULSc2E:
            ;
            var tableViewParams = new SP.JsGrid.JsGridControl.TableViewParameters();
            var requestType = SP.JsGrid.DeserializationMode.TableView;

            return webMethodMgr[this.initWebMethod.name](GetArguments(this.initWebMethod, requestType), function(results) {
            ULSc2E:
                ;
                var deserializer = new SP.JsGrid.Deserializer(results, requestType, keyColumnName);

                rememberedRecordKeyHash = deserializer.recordKeyHash;
                if (!bPreserveTableCache) {
                    jsGridControl.ClearTableView();
                    _this.tableCache.Clear();
                }
                ProcessNewTableView(deserializer, tableViewParams, true);
                if (optfnSucessCallback != null) {
                    optfnSucessCallback(tableViewParams, deserializer.additionalParams);
                }
            }, fnFailureCallback);
        };
        this.RefreshRowView = function(bPreserveTableCache, optfnSucessCallback, fnFailureCallback) {
        ULSc2E:
            ;
            var requestType = SP.JsGrid.DeserializationMode.RowView;

            return webMethodMgr[this.populatingWebMethod.name](GetArguments(this.populatingWebMethod, requestType), function(results) {
            ULSc2E:
                ;
                var deserializer = new SP.JsGrid.Deserializer(results, requestType, keyColumnName);

                rememberedRecordKeyHash = deserializer.recordKeyHash;
                var rowViewParams = deserializer.InitJsGridRowViewParams();

                if (!bPreserveTableCache) {
                    _this.tableCache.Clear();
                }
                ProcessNewRowView(deserializer, rowViewParams);
                if (optfnSucessCallback != null) {
                    optfnSucessCallback(rowViewParams, deserializer.additionalParams);
                }
            }, fnFailureCallback);
        };
        this.GetAutoFilterEntries = function(columnKeys, fnSucessCallback, fnFailureCallback) {
        ULSc2E:
            ;
            var requestType = SP.JsGrid.DeserializationMode.AutoFilter;

            return webMethodMgr[this.populatingWebMethod.name](GetArguments(this.populatingWebMethod, requestType, columnKeys), function(results) {
            ULSc2E:
                ;
                var deserializer = new SP.JsGrid.Deserializer(results, requestType, keyColumnName);

                fnSucessCallback(deserializer.autoFilterEntries);
            }, fnFailureCallback);
        };
        this.BeginFullLoad = function(fnInitComplete, fnFailureCallback, optGridParams) {
        ULSc2E:
            ;
            var requestType = SP.JsGrid.DeserializationMode.Full;

            return webMethodMgr[this.initWebMethod.name](GetArguments(this.initWebMethod, requestType), function(result) {
            ULSc2E:
                ;
                var deserializer = new SP.JsGrid.Deserializer(result, requestType);

                if (deserializer.minimalInfo != null) {
                    inVirtualMode = true;
                }
                rememberedRecordKeyHash = deserializer.recordKeyHash;
                keyColumnName = deserializer.keyColumnName;
                jsGridParams = deserializer.InitJsGridParams(optGridParams);
                jsGridParams.tableCache = (_this.tableCache = new SP.JsGrid.TableCache(GetData, ConvertDataToRecords, webMethodMgr[_this.computeDataRangeWebMethod.name]));
                _this.tableCache.SetConvertAllBlobsToRecords(true);
                _this.tableCache.SetKeepDataInBlobCache(false);
                _this.tableCache.SetMaxRecordCount(1000);
                ProcessNewTableView(deserializer, jsGridParams.tableViewParams, false);
                fnInitComplete(jsGridParams, deserializer.additionalParams);
            }, fnFailureCallback);
        };
        this.HasColumnName = function(columnName) {
        ULSc2E:
            ;
            return this.recordFactory.gridFieldMap[columnName] != null;
        };
        this.AddColumn = function(gridField) {
        ULSc2E:
            ;
            this.recordFactory.gridFieldMap[gridField.key] = gridField;
            var data = {};
            var values = this.tableCache.GetView();
            var defaultValueFn = function() {
            ULSc2E:
                ;
                return {
                    isProp: true,
                    prop: SP.JsGrid.Property.MakeProperty(undefined, undefined, gridField.hasDataValue, gridField.hasLocalizedValue, gridField.GetPropType())
                };
            };

            for (var idx in values) {
                data[values[idx]] = defaultValueFn();
            }
            this.tableCache.AddColumn(gridField.key, data, defaultValueFn);
        };
        function ProcessNewTableView(deserializer, jsGridTableViewParams, bInit) {
        ULSc2E:
            ;
            if (bInit) {
                deserializer.InitJsGridTableViewParams(jsGridTableViewParams);
            }
            if (keyColumnName != deserializer.keyColumnName) {
                keyColumnName = deserializer.keyColumnName;
            }
            _this.recordFactory = new SP.JsGrid.RecordFactory(deserializer.gridFieldMap, keyColumnName);
            ProcessNewRowView(deserializer, jsGridTableViewParams.rowViewParams);
        }
        function ProcessNewRowView(deserializer, rowViewParams) {
        ULSc2E:
            ;
            if (groupingRecords != null) {
                _this.tableCache.ClearRecords(groupingRecords);
            }
            _this.tableCache.AddRawDataToCache(SP.Internal.JS.ConvertSetKeysToArray(deserializer.data), deserializer.data);
            groupingRecords = deserializer.viewDependentKeys;
            deserializer.InitCellStyles(jsGridParams.styleManager);
            fnUpdateDisplayAndEditControls();
        }
        function GetArguments(webMethod, requestType, optAutoFilterColumnKeys, optRanges) {
        ULSc2E:
            ;
            var r = webMethod.fnGenerateArgs(requestType);
            var args = r.gridSerializerArgs == null ? {} : r.gridSerializerArgs;

            Sys.Debug.assert(args.PagingInfo == null);
            if (!inVirtualMode) {
                if (args.PagingInfo == null)
                    args.PagingInfo = optRanges != null ? GenerateRangeStrings(optRanges) : ['FirstVisible:100'];
            }
            else {
                if (args.PagingInfo == null)
                    args.PagingInfo = optRanges != null ? {
                        pos: optRanges[0].pos,
                        count: optRanges[0].count
                    } : {
                        pos: 0,
                        count: 100
                    };
            }
            args.RequestType = requestType;
            if (rememberedRecordKeyHash != null) {
                args.RememberedRecordKeyHash = rememberedRecordKeyHash;
            }
            if (optAutoFilterColumnKeys != null) {
                args.AutoFilterColumnKeys = optAutoFilterColumnKeys;
            }
            r.gridSerializerArgs = args;
            return r;
        }
        function ConvertDataToRecords(data, keys) {
        ULSc2E:
            ;
            var r = {};

            for (var i in keys) {
                if (keys[i] in data) {
                    var rawRecInfo = data[keys[i]];

                    r[keys[i]] = _this.recordFactory.MakeRecord(rawRecInfo.data, rawRecInfo.localized);
                }
            }
            return r;
        }
        function GetData(ranges, callback) {
        ULSc2E:
            ;
            function ProcessReturnedData(result) {
            ULSc2E:
                ;
                var deserializer = new SP.JsGrid.Deserializer(result, SP.JsGrid.DeserializationMode.Slice, keyColumnName);

                rememberedRecordKeyHash = deserializer.recordKeyHash;
                if (deserializer.recordKeyOrderChanged) {
                    deserializer = new SP.JsGrid.Deserializer(result, SP.JsGrid.DeserializationMode.RowView, keyColumnName);
                    var rowViewParams = deserializer.InitJsGridRowViewParams();

                    ProcessNewRowView(deserializer, rowViewParams);
                    if (fnRefreshRowViewCallback != null) {
                        fnRefreshRowViewCallback(rowViewParams, deserializer.additionalParams);
                    }
                }
                else if (deserializer.minimalInfo == null) {
                    if (deserializer.viewDependentKeys != null) {
                        groupingRecords = groupingRecords == null ? deserializer.viewDependentKeys : groupingRecords.concat(deserializer.viewDependentKeys);
                    }
                }
                var keys = SP.Internal.JS.ConvertSetKeysToArray(deserializer.data);

                Sys.Debug.assert(inVirtualMode == deserializer.minimalInfo != null);
                if (inVirtualMode) {
                    for (var i = 0; i < keys.length; i++) {
                        var key = _this.tableCache.RecordIdxToKey(ranges[0].pos + i);

                        jsGridControl.ChangeKeys(key, keys[i]);
                    }
                }
                callback([{
                    data: deserializer.data,
                    keys: keys
                }]);
            }
            return webMethodMgr[_this.populatingWebMethod.name](GetArguments(_this.populatingWebMethod, SP.JsGrid.DeserializationMode.Slice, null, ranges), ProcessReturnedData, function() {
            ULSc2E:
                ;
                callback(null);
            });
        }
        function GenerateRangeStrings(ranges) {
        ULSc2E:
            ;
            var r = [];

            for (var i = 0; i < ranges.length; i++) {
                r.push(ranges[i].pos + ',' + ranges[i].count);
            }
            return r;
        }
    };
    if (typeof Sys != "undefined" && Sys && Sys.Application) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("spgantt.js");
    }
}
function ULSc2E() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "spgantt.commentedjs";
    return o;
}
var g_ganttControlInstances;
var OnJsGridIframeLoad;

$_global_spgantt();
