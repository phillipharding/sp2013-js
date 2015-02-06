function $_global_hierarchytaskslist() {
    (function() {
    ULSEhz:
        ;
        if (typeof window.CheckMarkFieldTemplate == "object") {
            return;
        }
        var fieldToReference = 'PercentComplete';
        var dotNotationFieldToReference = 'PercentComplete.';
        var attributeDefiningHandler = 'hasCheckmarkHandler';
        var completedImgClass = 'ms-chkmark-complete';
        var notCompletedImgClass = 'ms-chkmark-notcomplete';
        var stemNotEditableCssClass = 'ms-chkmark';
        var stemEditableCssClass = 'js-chkmark';

        function OnBeforeCheckmarkUnload() {
        ULSEhz:
            ;
            return SP.Res.changesHaveNotBeenSaved;
        }
        window.CheckMarkFieldTemplate = {
            GetCheckMarkId: function(inCtx, itemId) {
                return inCtx.ctxId + ',' + itemId + ',chk';
            },
            RenderCheckMarkField: function(inCtx, field, listItem, listSchema) {
                function AddImageMarkupToArray(imgOutput, isCompleted) {
                    function hasPermissions() {
                    ULSEhz:
                        ;
                        var permMask = listItem.PermMask;

                        return (parseInt("0x" + permMask.substring(permMask.length - 1)) & 0x4) != 0;
                    }
                    function WriteAttr(attrName, attrValue) {
                    ULSEhz:
                        ;
                        imgOutput.push(' ');
                        imgOutput.push(attrName);
                        imgOutput.push('="');
                        imgOutput.push(attrValue);
                        imgOutput.push('"');
                    }
                    var itemId = listItem.ID;
                    var listId = inCtx.listName;
                    var imgId = window.CheckMarkFieldTemplate.GetCheckMarkId(inCtx, itemId);

                    imgOutput.push('<img');
                    WriteAttr('id', imgId);
                    var imgClass = isCompleted ? completedImgClass : notCompletedImgClass;
                    var altText = null;
                    var canClick = itemId != null && hasPermissions();

                    if (canClick && (typeof APD_InAssetPicker == 'function' && APD_InAssetPicker())) {
                        canClick = false;
                    }
                    if (canClick) {
                        WriteAttr('liid', itemId);
                        WriteAttr('shouldAnimate', listSchema.StrikeThroughOnCompletedEnabled);
                        imgClass = stemEditableCssClass + ' ' + imgClass;
                    }
                    else {
                        imgClass = stemNotEditableCssClass + ' ' + imgClass;
                    }
                    Sys.Debug.assert(listId != null);
                    WriteAttr('lid', listId);
                    WriteAttr('tabindex', '0');
                    WriteAttr('title', altText);
                    WriteAttr('class', imgClass);
                    WriteAttr('src', GetThemedImageUrl('spcommon.png'));
                    WriteAttr('unselectable', 'on');
                    imgOutput.push(' />');
                }
                if (!(dotNotationFieldToReference in listItem)) {
                    return '';
                }
                inCtx.CurrentFieldSchema.GridActiveAndReadOnly = "TRUE";
                var percentCompleteValue = listItem[dotNotationFieldToReference];
                var percentCompleteNum = Number.parseInvariant(percentCompleteValue);
                var output = [];

                output.push('<div class="ms-chkmark-container">');
                output.push('<div class="ms-chkmark-container-centerer">');
                output.push('<span class="ms-cui-img-16by16 ms-cui-img-cont-float" unselectable="on" style="z-index:0">');
                AddImageMarkupToArray(output, percentCompleteNum >= 1);
                output.push('</span>');
                output.push('</div>');
                output.push('</div>');
                return output.join('');
            },
            OnCheckMarkFieldPostRender: function(inCtx) {
                function AddHandlersAndAltTextToCheckmarks() {
                ULSEhz:
                    ;
                    var serverCallsInProgress = 0;

                    (m$('.js-chkmark')).forEach(function(elem) {
                        if (typeof APD_InAssetPicker == 'function' && APD_InAssetPicker()) {
                            Sys.UI.DomElement.removeCssClass(elem, stemEditableCssClass);
                            Sys.UI.DomElement.addCssClass(elem, stemNotEditableCssClass);
                            if (Sys.UI.DomElement.containsCssClass(elem, completedImgClass)) {
                                elem.title = Strings.STS.L_CheckMarkCompleteNoPerms_Tooltip;
                            }
                            else {
                                elem.title = Strings.STS.L_CheckMarkNotCompleteNoPerms_Tooltip;
                            }
                            return;
                        }
                        else {
                            if (Sys.UI.DomElement.containsCssClass(elem, completedImgClass)) {
                                elem.title = Strings.STS.L_CheckMarkComplete_Tooltip;
                            }
                            else {
                                elem.title = Strings.STS.L_CheckMarkNotComplete_Tooltip;
                            }
                        }
                        var hasCheckmarkHandler = elem.getAttribute(attributeDefiningHandler);

                        if (hasCheckmarkHandler) {
                            return;
                        }
                        elem.setAttribute(attributeDefiningHandler, "1");
                        var listItemId = elem.getAttribute("liid");
                        var listId = elem.getAttribute("lid");

                        Sys.Debug.assert(listId != null && listId.length > 0);
                        Sys.Debug.assert(listItemId != null && listItemId.length > 0);
                        if (listItemId == null || listItemId.length == 0 || listId == null || listId.length == 0) {
                            return;
                        }
                        function OnKeyUp(evt) {
                            if (!evt.altKey && !evt.ctrlKey && !evt.shiftKey && evt.keyCode == Sys.UI.Key.space) {
                                OnClickCheckmark(evt);
                            }
                        }
                        var serverUpdateValue = null;
                        var pendingUpdateValue = null;
                        var isWaitingCallback = false;

                        function OnClickCheckmark(evt) {
                            function OnServerCallCompleted(serverSender, serverEvt) {
                            ULSEhz:
                                ;
                                serverCallsInProgress--;
                                Sys.Debug.assert(serverCallsInProgress >= 0, "Shouldn't be able to over-decrement the count of operations in progress");
                                Sys.Debug.assert(isWaitingCallback);
                                isWaitingCallback = false;
                                serverUpdateValue = null;
                                if (pendingUpdateValue !== null) {
                                    UpdateServer(pendingUpdateValue);
                                }
                                else {
                                    if (typeof AJAXRefreshView == "function" && serverCallsInProgress < 1) {
                                        $removeHandler(window, 'beforeunload', OnBeforeCheckmarkUnload);
                                        serverCallsInProgress = 0;
                                        var evtAjax = {
                                            currentCtx: inCtx,
                                            csrAjaxRefresh: true
                                        };

                                        Sys.Debug.assert(inCtx.clvp != null, "Shouldn't be null");
                                        if (inCtx.clvp != null) {
                                            var scrollPos = 'pageYOffset' in window ? window.pageYOffset : document.documentElement.scrollTop;
                                            var elemId = elem.id;

                                            inCtx.clvp.ctx.onViewReRenderCompleted = function() {
                                            ULSEhz:
                                                ;
                                                window.scrollBy(0, scrollPos);
                                                var newElem = $get(elemId);

                                                if (newElem != null) {
                                                    newElem.focus();
                                                }
                                            };
                                        }
                                        inCtx.skipNextAnimation = true;
                                        AJAXRefreshView(evtAjax, SP.UI.DialogResult.OK);
                                    }
                                }
                                pendingUpdateValue = null;
                            }
                            function UpdateServer(newFieldValue) {
                            ULSEhz:
                                ;
                                if (inCtx.inGridMode) {
                                    var gridInitInfo = g_SPGridInitInfo[inCtx.view];
                                    var ganttControl = window[gridInitInfo.controllerId];
                                    var stringValue = (newFieldValue * (ganttControl.IsParseAndSetFields(fieldToReference) ? 100 : 1)).toString();
                                    var change = SP.JsGrid.CreateUnvalidatedPropertyUpdate(listItemId, fieldToReference, stringValue, true);

                                    ganttControl.UpdateProperties([change]);
                                }
                                else {
                                    if (!isWaitingCallback) {
                                        if (serverCallsInProgress <= 0) {
                                            $addHandler(window, 'beforeunload', OnBeforeCheckmarkUnload);
                                        }
                                        var csomCtx = new SP.ClientContext(null);
                                        var currentWeb = csomCtx.get_web();
                                        var targetList = (currentWeb.get_lists()).getById(new SP.Guid(listId));
                                        var item = targetList.getItemById(listItemId);

                                        item.retrieve();
                                        item.set_item(fieldToReference, newFieldValue);
                                        item.update();
                                        serverUpdateValue = newFieldValue;
                                        isWaitingCallback = true;
                                        serverCallsInProgress++;
                                        csomCtx.executeQueryAsync(OnServerCallCompleted, OnServerCallCompleted);
                                    }
                                    else {
                                        if (serverUpdateValue === newFieldValue) {
                                            pendingUpdateValue = null;
                                        }
                                        else {
                                            pendingUpdateValue = newFieldValue;
                                        }
                                    }
                                }
                            }
                            var fieldValue;

                            if (Sys.UI.DomElement.containsCssClass(elem, notCompletedImgClass)) {
                                Sys.UI.DomElement.removeCssClass(elem, notCompletedImgClass);
                                Sys.UI.DomElement.addCssClass(elem, completedImgClass);
                                fieldValue = 1;
                            }
                            else {
                                Sys.Debug.assert(Sys.UI.DomElement.containsCssClass(elem, completedImgClass));
                                Sys.UI.DomElement.removeCssClass(elem, completedImgClass);
                                Sys.UI.DomElement.addCssClass(elem, notCompletedImgClass);
                                fieldValue = 0;
                            }
                            if (Boolean(elem.getAttribute('shouldAnimate'))) {
                                var tr = GetAncestor(elem, 'TR');
                                var title = tr.querySelector("a[class*=\"ms-listlink\"]");

                                if (title != null) {
                                    if (fieldValue == 1) {
                                        if (!inCtx.inGridMode || browseris == null || !browseris.firefox) {
                                            title.parentNode.style.position = 'relative';
                                            SPAnimationUtility.BasicAnimator.StrikeThrough(title, null, function() {
                                            ULSEhz:
                                                ;
                                                UpdateServer(fieldValue);
                                            }, null);
                                        }
                                        else {
                                            title.style.textDecoration = "line-through";
                                            UpdateServer(fieldValue);
                                        }
                                    }
                                    else {
                                        if (inCtx.inGridMode) {
                                            title.style.textDecoration = "none";
                                            if (title.parentNode != null) {
                                                title.parentNode.style.textDecoration = "none";
                                            }
                                        }
                                        UpdateServer(fieldValue);
                                    }
                                }
                                else {
                                    UpdateServer(fieldValue);
                                }
                            }
                            else {
                                UpdateServer(fieldValue);
                            }
                            if (evt != null) {
                                evt.stopPropagation();
                            }
                        }
                        $addHandler(elem.parentNode.parentNode.parentNode, 'click', OnClickCheckmark);
                        $addHandler(elem, 'keyup', OnKeyUp);
                        elem.OnClickCheckmark = OnClickCheckmark;
                    });
                    (m$('.ms-chkmark')).forEach(function(elem) {
                        if (Sys.UI.DomElement.containsCssClass(elem, completedImgClass)) {
                            elem.title = Strings.STS.L_CheckMarkCompleteNoPerms_Tooltip;
                        }
                        else {
                            elem.title = Strings.STS.L_CheckMarkNotCompleteNoPerms_Tooltip;
                        }
                        return;
                    });
                }
                EnsureScriptFunc("mQuery.js", "m$", function() {
                ULSEhz:
                    ;
                    EnsureScriptFunc("strings.js", "Strings.STS.L_CheckMarkCompleteNoPerms_Tooltip", AddHandlersAndAltTextToCheckmarks);
                });
            }
        };
        function _registerCheckMarkFieldTemplate() {
        ULSEhz:
            ;
            var checkMarkFieldContext = {
                Templates: {
                    Fields: {
                        'Checkmark': {
                            'View': window.CheckMarkFieldTemplate.RenderCheckMarkField
                        }
                    }
                },
                OnPostRender: window.CheckMarkFieldTemplate.OnCheckMarkFieldPostRender
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(checkMarkFieldContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerCheckMarkFieldTemplate, 'clienttemplates.js');
    })();
    (function() {
    ULSEhz:
        ;
        if (typeof window.CompletedTitleTemplate == "object") {
            return;
        }
        window.CompletedTitleTemplate = {
            RenderTitleField: function(inCtx, field, listItem, listSchema) {
                var titleHtml = ComputedFieldWorker[field.Name](inCtx, field, listItem, listSchema);

                if (Boolean(listSchema.StrikeThroughOnCompletedEnabled)) {
                    var dotNotationFieldForCompletion = 'PercentComplete.';

                    if (dotNotationFieldForCompletion in listItem) {
                        var completionValue = listItem[dotNotationFieldForCompletion];

                        if (completionValue != null) {
                            var completionNumber = Number.parseInvariant(completionValue);

                            if (completionNumber >= 1) {
                                return '<span style="text-decoration: line-through">' + titleHtml + '</span>';
                            }
                        }
                    }
                }
                return titleHtml;
            }
        };
        function _registerCompletedTitleTemplate() {
        ULSEhz:
            ;
            var TitleFieldContext = {
                Templates: {
                    Fields: {
                        'LinkTitle': {
                            'View': window.CompletedTitleTemplate.RenderTitleField
                        }
                    },
                    ListTemplateType: 171
                }
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(TitleFieldContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerCompletedTitleTemplate, 'clienttemplates.js');
    })();
    (function() {
    ULSEhz:
        ;
        if (typeof window.DuedateFieldTemplate == "object") {
            return;
        }
        window.DuedateFieldTemplate = {
            RenderDuedateField: function(inCtx, field, listItem, listSchema) {
                var dotNotationFieldForCompletion = 'PercentComplete.';

                Sys.Debug.assert(field.Name in listItem);
                var dateRenderer = new DateTimeFieldRenderer(field.Name);
                var dueDateValue = listItem[field.Name];

                if (dotNotationFieldForCompletion in listItem) {
                    if (dueDateValue != null) {
                        var completionValue = listItem[dotNotationFieldForCompletion];

                        if (completionValue != null) {
                            var completionNumber = Number.parseInvariant(completionValue);

                            if (isNaN(completionNumber) || completionNumber < 1) {
                                var dueDate = Date.parseLocale(dueDateValue, null);

                                if (dueDate != null) {
                                    if (GetDaysAfterToday(dueDate) < 0) {
                                        return String.format('<span class="ms-error" title="{1}">{2}</span>', Strings.STS.L_DueDate_Color, Strings.STS.L_DueDate_Overdue_Tooltip, dateRenderer.RenderField(inCtx, field, listItem, listSchema));
                                    }
                                }
                            }
                        }
                    }
                }
                return dateRenderer.RenderField(inCtx, field, listItem, listSchema);
            }
        };
        function _registerDuedateFieldTemplate() {
        ULSEhz:
            ;
            var DuedateFieldContext = {
                Templates: {
                    Fields: {
                        'DueDate': {
                            'View': window.DuedateFieldTemplate.RenderDuedateField
                        }
                    },
                    ListTemplateType: 171
                }
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(DuedateFieldContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerDuedateFieldTemplate, 'clienttemplates.js');
    })();
    (function() {
    ULSEhz:
        ;
        if (typeof window.HierarchyTaskCallout == "object") {
            return;
        }
        function OutermostContentDivText(inCtx) {
            var listItem = inCtx.CurrentItem;
            var output = [];

            output.push('<div id="');
            function AreAllRequiredFieldsPresent() {
            ULSEhz:
                ;
                var requiredFieldNames = {
                    PercentComplete: null,
                    DueDate: null,
                    AssignedTo: null,
                    ContentTypeId: null
                };

                for (var fieldName in requiredFieldNames) {
                    if (!(fieldName in listItem)) {
                        return false;
                    }
                }
                return true;
            }
            function DisplayNameFromInternalName(internalName) {
                var listFields = inCtx.ListSchema.Field;

                for (var idx = 0; idx < listFields.length; idx++) {
                    var field = listFields[idx];

                    if (field.Name == internalName) {
                        return field.DisplayName;
                    }
                }
                return internalName;
            }
            var calloutContent = FormatContentBasedOnData(_spPageContextInfo.webAbsoluteUrl, _spPageContextInfo.webTitle, inCtx.listName, inCtx.listUrlDir, inCtx.ListTitle, listItem, DisplayNameFromInternalName('AssignedTo'), DisplayNameFromInternalName('DueDate'));

            if (AreAllRequiredFieldsPresent()) {
                output.push(FullInfoDivId(inCtx));
            }
            else {
                output.push(NeedsInfoDivId(inCtx));
            }
            output.push('" >');
            output.push(calloutContent);
            output.push('</div>');
            return output.join('');
        }
        function FullInfoDivId(inCtx) {
            var listItem = inCtx.CurrentItem;
            var listSchema = inCtx.ListSchema;

            return listSchema.ViewCount + ',' + listItem.ID + ',' + listItem.FSObjType + ',comp';
        }
        function IsStringNullOrEmpty(value) {
            return value == null || value.length == null || value.length == 0;
        }
        function NeedsInfoDivId(inCtx) {
            var listItem = inCtx.CurrentItem;
            var listSchema = inCtx.ListSchema;

            return listSchema.ViewCount + ',' + listItem.ID + ',' + listItem.FSObjType + ',inc';
        }
        function RetrieveCalloutContentIntoDomElement(context, listId, listItemId, contentElement, fnUpdateCalloutContent) {
            var requiredFieldNames = {
                PercentComplete: null,
                DueDate: null,
                AssignedTo: null,
                ContentTypeId: null
            };
            var currentWeb = context.get_web();

            currentWeb.retrieve("Title");
            currentWeb.retrieve("Url");
            var targetList = (currentWeb.get_lists()).getById(new SP.Guid(listId));

            targetList.retrieve("Title");
            targetList.retrieve("DefaultViewUrl");
            var viewXml = ['<View Scope="RecursiveAll">', '<ViewFields>'];

            for (var fieldName in requiredFieldNames) {
                viewXml.push('<FieldRef Name="');
                viewXml.push(fieldName);
                viewXml.push('"></FieldRef>');
            }
            viewXml.push('</ViewFields>');
            viewXml.push('<Query>');
            viewXml.push('<Where>');
            viewXml.push('<Eq>');
            viewXml.push('<FieldRef Name="ID" />');
            viewXml.push('<Value Type="Number">');
            viewXml.push(listItemId);
            viewXml.push('</Value>');
            viewXml.push('</Eq>');
            viewXml.push('</Where>');
            viewXml.push('</Query>');
            viewXml.push('</View>');
            var listData = targetList.renderListData(viewXml.join(''));
            var listFields = targetList.get_fields();
            var assignedToName = listFields.getByInternalNameOrTitle("AssignedTo");

            assignedToName.retrieve();
            var dueDateName = listFields.getByInternalNameOrTitle("DueDate");

            dueDateName.retrieve();
            context.executeQueryAsync(function(serverSender, serverEvt) {
            ULSEhz:
                ;
                var listDataSet = JSON.parse(listData.get_value());
                var listDataRow = null;

                for (var i = 0; i < listDataSet.Row.length; i++) {
                    if (listDataSet.Row[i].ID == listItemId) {
                        listDataRow = listDataSet.Row[i];
                    }
                }
                ULS.AssertJS("TasksList", listDataRow != null, "Should be able to find the row we're querying for");
                contentElement.innerHTML = FormatContentBasedOnData(currentWeb.get_url(), currentWeb.get_title(), listId, targetList.get_defaultViewUrl(), targetList.get_title(), listDataRow, assignedToName.get_title(), dueDateName.get_title());
                if (fnUpdateCalloutContent != null) {
                    fnUpdateCalloutContent();
                }
            }, function(serverSender, serverEvt) {
            ULSEhz:
                ;
                Sys.Debug.fail("server call failed for some reason...");
                if (fnUpdateCalloutContent != null) {
                    fnUpdateCalloutContent();
                }
            });
        }
        function FormatContentBasedOnData(webUrl, webDisplayName, listId, listRootUrl, listDisplayName, listDataRow, assignedToDisplayName, dueDateDisplayName) {
            var assignedTo = listDataRow.AssignedTo;
            var dueDateAbsolute = listDataRow.DueDate;
            var dueDateFriendly = listDataRow["DueDate.FriendlyDisplay"];
            var percentComplete = listDataRow["PercentComplete."];
            var contentTypeId = listDataRow["ContentTypeId"];

            function AddBreadcrumbToOutput(output) {
                if (IsStringNullOrEmpty(webUrl) || IsStringNullOrEmpty(webDisplayName)) {
                    return;
                }
                output.push('<div class="ms-metadata" style="margin-top: 6px;">');
                var webUrlHtml = [];
                var imgHtml = [];
                var listUrlHtml = [];

                webUrlHtml.push('<a href="');
                webUrlHtml.push(webUrl);
                webUrlHtml.push('">');
                webUrlHtml.push(STSHtmlEncode(webDisplayName));
                webUrlHtml.push('</a>');
                if (!IsStringNullOrEmpty(listRootUrl) && !IsStringNullOrEmpty(listDisplayName)) {
                    var styleDirection = fRightToLeft ? 'left' : 'right';

                    imgHtml.push('<span class="ms-pagearrow-');
                    imgHtml.push(styleDirection);
                    imgHtml.push('" style="vertical-align:middle;" >');
                    imgHtml.push('<img src="');
                    imgHtml.push(GetThemedImageUrl('spcommon.png'));
                    imgHtml.push('" class="ms-pagearrow-');
                    imgHtml.push(styleDirection);
                    imgHtml.push('-icon" />');
                    imgHtml.push('</span>');
                    listUrlHtml.push(' <a href="');
                    listUrlHtml.push(listRootUrl);
                    listUrlHtml.push('">');
                    listUrlHtml.push(STSHtmlEncode(listDisplayName));
                    listUrlHtml.push('</a>');
                }
                output.push(String.format(Strings.STS.L_TaskCallout_Breadcrumb, webUrlHtml.join(''), imgHtml.join(''), listUrlHtml.join('')));
                output.push('</div>');
            }
            function AddAssignedToSectionToOutput(output) {
                if (assignedTo == null || assignedTo.length == null || assignedTo.length == 0) {
                    return;
                }
                output.push('<h3 class="ms-soften" style="margin-top: 12px; margin-bottom: 3px;">');
                output.push(assignedToDisplayName);
                output.push(': </h3>');
                var userDispUrl = null;
                var bFirst = true;

                for (var p = 0; p < assignedTo.length; p++) {
                    if (!bFirst) {
                        output.push(';&#160;');
                    }
                    var uVal = assignedTo[p];

                    if (uVal.id != null && uVal.value != '') {
                        output.push(STSHtmlEncode(uVal.value));
                        bFirst = false;
                    }
                }
            }
            function AddDateSectionToOutput(output) {
                if (IsStringNullOrEmpty(dueDateAbsolute)) {
                    return;
                }
                var dueDate = Date.parseLocale(dueDateAbsolute, null);

                if (dueDate == null) {
                    return;
                }
                var dayCount = GetDaysAfterToday(dueDate);
                var dayUnit;
                var dayActual;
                var isComplete = true;

                if (!IsStringNullOrEmpty(percentComplete)) {
                    var completionNumber = Number.parseInvariant(percentComplete);

                    if (isNaN(completionNumber) || completionNumber < 1) {
                        isComplete = false;
                    }
                }
                if (!IsStringNullOrEmpty(dueDateFriendly)) {
                    dayActual = GetRelativeDateTimeString(dueDateFriendly);
                    Sys.Debug.assert(!IsStringNullOrEmpty(dayActual), "GetRelativeDateTimeString should return a non empty string");
                }
                else {
                    dayActual = dueDateAbsolute;
                }
                var showAsOverdue = dayCount < 0 && !isComplete;

                output.push('<div style="margin-top: 12px;">');
                output.push('<div class="ms-taskdate-daysvalue');
                if (!showAsOverdue) {
                    output.push('"');
                }
                else {
                    output.push(' ms-error"');
                }
                var formatWithPlaceholders;
                var intervalDefinition;

                if (dayCount < 0) {
                    formatWithPlaceholders = Strings.STS.L_DaysAgoLabelForCallout;
                    intervalDefinition = Strings.STS.L_DaysAgoLabelForCalloutIntervals;
                }
                else {
                    formatWithPlaceholders = Strings.STS.L_DaysLabelForCallout;
                    intervalDefinition = Strings.STS.L_DaysLabelForCalloutIntervals;
                }
                var formatNoPlaceholders = String.format(formatWithPlaceholders, "");

                dayUnit = GetLocalizedCountValue(formatNoPlaceholders, intervalDefinition, Math.abs(dayCount));
                output.push('>');
                output.push(Math.abs(dayCount));
                output.push('</div>');
                output.push('<div class="ms-taskdate-dayinfo">');
                output.push('<div class="ms-taskdate-daysunit');
                if (!showAsOverdue) {
                    output.push('"');
                }
                else {
                    output.push(' ms-error"');
                }
                output.push('>');
                output.push(dayUnit);
                output.push("</div>");
                output.push('<div class="ms-metadata">');
                output.push(String.format(Strings.STS.L_TaskDueModifier, dayActual));
                output.push('</div>');
                output.push('</div>');
                output.push('</div>');
            }
            function AddLocationToOutput(output) {
                if (!IsStringNullOrEmpty(contentTypeId)) {
                    var sourceUrlInfoMarkup = [];

                    sourceUrlInfoMarkup.push('<input value="');
                    sourceUrlInfoMarkup.push(webUrl);
                    sourceUrlInfoMarkup.push('/');
                    sourceUrlInfoMarkup.push(_spPageContextInfo.layoutsUrl);
                    sourceUrlInfoMarkup.push('/listform.aspx?PageType=4&ListId=');
                    sourceUrlInfoMarkup.push(listId);
                    sourceUrlInfoMarkup.push('&ID=');
                    sourceUrlInfoMarkup.push(listDataRow["ID"]);
                    sourceUrlInfoMarkup.push('&ContentTypeID=');
                    sourceUrlInfoMarkup.push(contentTypeId);
                    sourceUrlInfoMarkup.push('" class="js-callout-location" />');
                    output.push(Callout.GenerateDefaultSection(null, sourceUrlInfoMarkup.join('')));
                }
            }
            var retArray = [];

            AddBreadcrumbToOutput(retArray);
            AddAssignedToSectionToOutput(retArray);
            AddDateSectionToOutput(retArray);
            AddLocationToOutput(retArray);
            return retArray.join('');
        }
        function IsItemOnTimeline(itemToCheck, listId, viewName) {
            if (!Boolean(itemToCheck)) {
                return false;
            }
            var retVal = false;

            RunOperationOnTimelineData(function() {
            ULSEhz:
                ;
                retVal = SP.UI.Timeline.ListTimelineDatasource.IsItemVisibleOnTimeline(listId, viewName, itemToCheck);
            });
            return retVal;
        }
        window.HierarchyTaskCallout = {
            TheCallout: null,
            TheCalloutLaunchpointTop: 0,
            RenderItem: function(inCtx) {
                return OutermostContentDivText(inCtx);
            },
            RenderFooter: function(inCtx) {
                var listItem = inCtx.CurrentItem;

                function GetIsEnabledTimelineEditingCallback() {
                ULSEhz:
                    ;
                    function hasPermissions() {
                    ULSEhz:
                        ;
                        var permMask = listItem.PermMask;

                        return (parseInt("0x" + permMask.substring(permMask.length - 4)) & 0x804) == 0x804;
                    }
                    return function() {
                    ULSEhz:
                        ;
                        return hasPermissions();
                    };
                }
                function GetIsEnabledCreateSubtaskCallback() {
                ULSEhz:
                    ;
                    function hasPermissions() {
                    ULSEhz:
                        ;
                        if (!(GetCtxFromView(inCtx.view)).AllowGridMode) {
                            return false;
                        }
                        var permMask = listItem.PermMask;

                        return (parseInt("0x" + permMask.substring(permMask.length - 1)) & 0x4) == 0x4;
                    }
                    return function() {
                    ULSEhz:
                        ;
                        return hasPermissions();
                    };
                }
                function GetIsSpecialButtonVisibleCallback() {
                ULSEhz:
                    ;
                    return function() {
                    ULSEhz:
                        ;
                        return !(typeof APD_InAssetPicker == 'function') || !APD_InAssetPicker();
                    };
                }
                function TaskCalloutActionsMenuPopulator(renderCtx, calloutActionMenu) {
                    calloutActionMenu.addAction(new CalloutAction({
                        text: Strings.STS.L_CalloutOpenAction,
                        onClickCallback: function(calloutActionClickEvent, calloutAction) {
                            CalloutAction_Open_OnClick(calloutActionClickEvent, calloutAction, renderCtx);
                        }
                    }));
                    var callout = GetCalloutFromRenderCtx(inCtx);

                    SP.SOD.executeFunc('SP.UI.Timeline.js', 'SP.UI.Timeline', function() {
                    ULSEhz:
                        ;
                        var itemId = renderCtx.CurrentItem.ID;

                        if (inCtx.ListSchema.PropertyBag != null) {
                            var viewName = SP.UI.Timeline.ListTimelineDatasource.GetSelectedViewName(inCtx.ListSchema.PropertyBag);
                            var listId = renderCtx.listName;

                            if (IsItemOnTimeline(itemId, listId, viewName)) {
                                calloutActionMenu.addAction(new CalloutAction({
                                    text: Strings.STS.L_TimelineRemoveFromTimeline,
                                    onClickCallback: function(calloutActionClickEvent, calloutAction) {
                                        RemoveItemsFromTimeline([{
                                            id: itemId
                                        }], listId, viewName);
                                        CalloutManager.closeAll();
                                    },
                                    isVisibleCallback: GetIsSpecialButtonVisibleCallback(),
                                    isEnabledCallback: GetIsEnabledTimelineEditingCallback()
                                }));
                            }
                            else {
                                calloutActionMenu.addAction(new CalloutAction({
                                    text: Strings.STS.L_TimelineAddToTimeline,
                                    onClickCallback: function(calloutActionClickEvent, calloutAction) {
                                        AddItemsToTimeline([{
                                            id: itemId
                                        }], listId, viewName);
                                        CalloutManager.closeAll();
                                    },
                                    isVisibleCallback: GetIsSpecialButtonVisibleCallback(),
                                    isEnabledCallback: GetIsEnabledTimelineEditingCallback()
                                }));
                            }
                        }
                        calloutActionMenu.addAction(new CalloutAction({
                            text: Strings.STS.L_CalloutCreateSubtask,
                            onClickCallback: function(calloutActionClickEvent, calloutAction) {
                                CalloutManager.closeAll();
                                CreateSubItem(GetCtxFromView(inCtx.view), itemId);
                            },
                            isVisibleCallback: GetIsSpecialButtonVisibleCallback(),
                            isEnabledCallback: GetIsEnabledCreateSubtaskCallback()
                        }));
                        callout.set({
                            contentWidth: calloutActionMenu.calculateActionWidth() + 50
                        });
                    });
                }
                ;
                return CalloutRenderFooterTemplate(inCtx, TaskCalloutActionsMenuPopulator, true);
            },
            RetrieveCalloutContent: RetrieveCalloutContentIntoDomElement,
            OnOpeningCallback: function(renderCtx) {
                var callout = GetCalloutFromRenderCtx(renderCtx);

                if (window.HierarchyTaskCallout.TheCallout == null) {
                    SP.UI.Workspace.add_resized(HandleWorkspaceResize);
                }
                window.HierarchyTaskCallout.TheCallout = callout;
                window.HierarchyTaskCallout.TheCalloutLaunchpointTop = (GetCalloutLaunchPoint(callout)).offsetTop;
                var listItem = renderCtx.CurrentItem;
                var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
                var listId = renderCtx.listName;
                var listItemId = listItem.ID;
                var needsInfoDiv = $get(NeedsInfoDivId(renderCtx));

                if (needsInfoDiv != null) {
                    RetrieveCalloutContentIntoDomElement(SP.ClientContext.get_current(), listId, listItemId, needsInfoDiv, function() {
                    ULSEhz:
                        ;
                        needsInfoDiv.id = FullInfoDivId(renderCtx);
                    });
                }
            }
        };
        function GetCalloutLaunchPoint(callout) {
            var launchPoint = callout.getLaunchPoint();

            if (launchPoint.id.indexOf("calloutLaunchPoint") >= 0) {
                return launchPoint;
            }
            return launchPoint.firstChild;
        }
        function HandleWorkspaceResize() {
        ULSEhz:
            ;
            var callout = window.HierarchyTaskCallout.TheCallout;

            if (callout != null && callout.isOpenOrOpening()) {
                var launchPoint = GetCalloutLaunchPoint(callout);
                var sizeDiff = launchPoint.offsetTop - window.HierarchyTaskCallout.TheCalloutLaunchpointTop;

                if (sizeDiff != 0) {
                    window.HierarchyTaskCallout.TheCalloutLaunchpointTop = launchPoint.offsetTop;
                    (callout.getContentElement()).parentNode.style.top = String(parseFloat((callout.getContentElement()).parentNode.style.top) + sizeDiff) + "px";
                }
            }
        }
        function _registerHierarchyTaskCallout() {
        ULSEhz:
            ;
            var hierarchyTaskCalloutCtx = {
                ListTemplateType: 171,
                BaseViewID: 'Callout',
                Templates: {
                    Header: CalloutRenderHeaderTemplate,
                    Footer: window.HierarchyTaskCallout.RenderFooter,
                    Item: window.HierarchyTaskCallout.RenderItem,
                    OnPostRender: window.HierarchyTaskCallout.OnOpeningCallback
                }
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(hierarchyTaskCalloutCtx);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerHierarchyTaskCallout, 'clienttemplates.js');
    })();
    (function() {
    ULSEhz:
        ;
        if (typeof window.TaskFirstDateNotify == "object") {
            return;
        }
        window.TaskFirstDateNotify = {
            AddNotificationOnFirstDate: function(inCtx) {
                var viewHtml = RenderViewTemplate(inCtx);
                var dateFields = {
                    StartDate: null,
                    DueDate: null
                };

                function CheckValueForBeingNotEmpty(valueToCheck) {
                    return valueToCheck != null && valueToCheck.length != null && valueToCheck.length > 0;
                }
                function ShouldListenForFirstDate() {
                ULSEhz:
                    ;
                    var viewName = SP.UI.Timeline.ListTimelineDatasource.GetSelectedViewName(inCtx.ListSchema.PropertyBag);

                    return SP.UI.Timeline.ListTimelineDatasource.DoesTimelineHaveRWData(inCtx.listName, viewName) && !SP.UI.Timeline.ListTimelineDatasource.DoesTimelineHaveInterestingData(inCtx.listName, viewName);
                }
                function GetInPlaceEditControl() {
                ULSEhz:
                    ;
                    var initInfo = g_SPGridInitInfo[inCtx.view];

                    if (initInfo == null) {
                        return null;
                    }
                    return window[initInfo.controllerId];
                }
                function AppendPlaceholderDiv(parentElem, childid) {
                    var childElem = document.createElement('div');

                    childElem.id = childid;
                    childElem.height = '0px';
                    childElem.width = '0px';
                    parentElem.appendChild(childElem);
                    return childElem;
                }
                function ReversePositionAlgorithm(algorithm) {
                    return function(c) {
                        var wasRTL = c.isRTL;

                        c.isRTL = !c.isRTL;
                        algorithm(c);
                        c.isRTL = wasRTL;
                    };
                }
                function AddAndShowNotificationOneTime(itemId) {
                ULSEhz:
                    ;
                    var siteActionRoot = document.getElementById('siteactiontd');

                    if (!fIsNullOrUndefined(siteActionRoot)) {
                        var listId = inCtx.listName;
                        var onceElemId = 'siteactiontd' + inCtx.wpq;
                        var onceElem = $get(onceElemId);

                        if (onceElem != null) {
                            return;
                        }
                        EnsureScriptFunc("callout.js", "Callout", function() {
                        ULSEhz:
                            ;
                            AppendPlaceholderDiv(siteActionRoot, onceElemId);
                            var targetElemToFind = "ctx" + inCtx.ctxId + "_" + itemId + "_calloutLaunchPoint";
                            var targetElem = $get(targetElemToFind);

                            if (targetElem == null) {
                                return;
                            }
                            var elmTr = GetAncestor(targetElem, "TR");
                            var elmTdEcb = GetEcbTdFromRow(elmTr);
                            var elmDivEcb = GetEcbAffordanceDivFromRow(elmTr);

                            if (elmDivEcb == null) {
                                return;
                            }
                            var notificationBody = [];

                            notificationBody.push('<div style="margin-bottom:20px;">');
                            notificationBody.push('<span class="ms-dlg-heading">');
                            notificationBody.push(Strings.STS.L_TaskNotifyFirstDateHeader);
                            notificationBody.push('</span>');
                            notificationBody.push('</div>');
                            notificationBody.push(Strings.STS.L_TaskNotifyFirstDateLineOne);
                            notificationBody.push('<br />');
                            var calloutOptions = new CalloutOptions();

                            calloutOptions.content = notificationBody.join('');
                            calloutOptions.launchPoint = targetElem;
                            calloutOptions.ID = targetElemToFind + "Callout";
                            calloutOptions.beakOrientation = 'leftRight';
                            calloutOptions.positionAlgorithm = ReversePositionAlgorithm(calloutOptions.positionAlgorithm);
                            calloutOptions.onClosedCallback = function(thatCallout) {
                                calloutManager.remove(thatCallout);
                            };
                            var openOptions = new CalloutOpenOptions();

                            openOptions.event = 'none';
                            openOptions.closeCalloutOnBlur = true;
                            calloutOptions.openOptions = openOptions;
                            try {
                                GetTimelineView(inCtx.ListSchema.PropertyBag, function(viewName) {
                                ULSEhz:
                                    ;
                                    AddItemsToTimeline([{
                                        id: itemId
                                    }], listId, viewName);
                                    var callout = CalloutManager.createNew(calloutOptions);

                                    callout.addAction(new CalloutAction({
                                        text: Strings.STS.L_TimelineRemoveFromTimeline,
                                        onClickCallback: function(calloutActionClickEvent, calloutAction) {
                                            SP.SOD.executeFunc('SP.UI.Timeline.js', 'SP.UI.Timeline', function() {
                                            ULSEhz:
                                                ;
                                                RemoveItemsFromTimeline([{
                                                    id: itemId
                                                }], listId, viewName);
                                            });
                                        }
                                    }));
                                    callout.set({
                                        contentWidth: (callout.getActionMenu()).calculateActionWidth()
                                    });
                                    callout.open();
                                });
                            }
                            catch (e) {
                                Sys.Debug.assert(false, "Error invoking callout: " + e.toString);
                            }
                        });
                    }
                }
                ExecuteOrDelayUntilScriptLoaded(function() {
                ULSEhz:
                    ;
                    SP.GanttControl.WaitForGanttCreation(function(grid) {
                    ULSEhz:
                        ;
                        var inplaceEditControl = GetInPlaceEditControl();

                        if (!fIsNullOrUndefined(inplaceEditControl) && grid == inplaceEditControl) {
                            ExecuteOrDelayUntilScriptLoaded(function() {
                            ULSEhz:
                                ;
                                inplaceEditControl.AttachRowChanged(function(id, dictChangedValues, wasDeleted) {
                                    if (!ShouldListenForFirstDate()) {
                                        return;
                                    }
                                    if (wasDeleted) {
                                        return;
                                    }
                                    var bChangedDates = false;

                                    for (var field in dateFields) {
                                        if (dictChangedValues[field] != null) {
                                            bChangedDates = true;
                                            break;
                                        }
                                    }
                                    if (bChangedDates) {
                                        window.setTimeout(function() {
                                        ULSEhz:
                                            ;
                                            AddAndShowNotificationOneTime(id);
                                        }, 500);
                                    }
                                });
                            }, "sp.ui.timeline.js");
                        }
                    });
                }, "spgantt.js");
                return viewHtml;
            }
        };
        function _registerTaskFirstDateNotify() {
        ULSEhz:
            ;
            var taskFirstDateNotifyCtx = {
                ListTemplateType: 171,
                Templates: {
                    View: window.TaskFirstDateNotify.AddNotificationOnFirstDate
                }
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(taskFirstDateNotifyCtx);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerTaskFirstDateNotify, 'clienttemplates.js');
    })();
    (function() {
    ULSEhz:
        ;
        if (typeof window.TaskListShortcutFooterRenderer == "object") {
            return;
        }
        window.TaskListShortcutFooterRenderer = {
            RenderShortcutFooter: function(renderCtx) {
                var ret = [];

                ret.push(RenderFooterTemplate(renderCtx));
                if (renderCtx.inGridMode) {
                    ret.push('<br/><div class="ms-helper">');
                    ret.push(Strings.STS.L_TasksListShortcut_Header);
                    ret.push('&nbsp;<a id="taskShortcutCalloutPoint');
                    ret.push(renderCtx.wpq);
                    ret.push('" class="ms-taskListShortcutCallout"><span class="ms-taskListShortcutCalloutSpan">&nbsp;</span><span class="ms-accessible">');
                    ret.push(Strings.STS.L_TasksListShortcut_Header);
                    ret.push('</span></a></div>');
                }
                return ret.join('');
            },
            OnRenderShortcutFooterPostRender: function(renderCtx) {
                EnsureScriptFunc("mQuery.js", "m$", function() {
                ULSEhz:
                    ;
                    EnsureScriptFunc("callout.js", "Callout", function() {
                    ULSEhz:
                        ;
                        (m$('#taskShortcutCalloutPoint' + renderCtx.wpq)).forEach(function(elem) {
                            if (!elem.hasCallOutInited) {
                                var content = [];

                                content.push('<div class="ms-helper" style="padding-top: 15px;">');
                                var shortcuts = [Strings.STS.L_TasksListShortcut_Insert, Strings.STS.L_TasksListShortcut_Indent, Strings.STS.L_TasksListShortcut_Outdent, Strings.STS.L_TasksListShortcut_MoveUp, Strings.STS.L_TasksListShortcut_MoveDown];

                                for (var i = 0; i < shortcuts.length; i++) {
                                    content.push(shortcuts[i]);
                                    if (i + 1 != shortcuts.length) {
                                        content.push('<br/>');
                                    }
                                }
                                content.push('</div>');
                                CalloutManager.createNew({
                                    ID: 'taskShortcutCallout' + renderCtx.wpq,
                                    launchPoint: elem,
                                    openOptions: {
                                        event: 'click',
                                        showCloseButton: true
                                    },
                                    content: content.join(''),
                                    beakOrientation: 'topBottom',
                                    positionAlgorithm: function(c) {
                                        if (!c.isRTL) {
                                            c.moveDownAndRight();
                                        }
                                        else {
                                            c.moveDownAndLeft();
                                        }
                                        if (c.numberOfEdgesCollidingWithBoundingBox() > 0) {
                                            var defaultCalloutOptions = new CalloutOptions();

                                            defaultCalloutOptions.positionAlgorithm.apply(this, arguments);
                                        }
                                    }
                                });
                                elem.hasCallOutInited = true;
                            }
                        });
                    });
                });
            }
        };
        function _registerTaskListShortcutFooterTemplate() {
        ULSEhz:
            ;
            var TaskListShortcutFooterContext = {
                Templates: {
                    Footer: window.TaskListShortcutFooterRenderer.RenderShortcutFooter,
                    ListTemplateType: 171
                },
                OnPostRender: window.TaskListShortcutFooterRenderer.OnRenderShortcutFooterPostRender
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(TaskListShortcutFooterContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerTaskListShortcutFooterTemplate, 'clienttemplates.js');
    })();
    if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("hierarchytaskslist.js");
    }
}
function ULSEhz() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "hierarchytaskslist.commentedjs";
    return o;
}
$_global_hierarchytaskslist();
