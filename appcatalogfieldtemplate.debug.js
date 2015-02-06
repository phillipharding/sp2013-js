function $_global_appcatalogfieldtemplate() {
    (function() {
    ULSKtZ:
        ;
        var appMetadataLocaleFieldControls = [];
        var listId;
        var itemId;
        var appTitleFieldControlId;
        var appTitleDictionary = [];

        function populateLocaleOptions(select, fldValue, installedLanguages) {
            var optionCount = 0;

            for (var l in installedLanguages) {
                var language = installedLanguages[l];
                var lcid = language.get_lcid();

                if (!SP.ScriptUtility.isNullOrUndefined(appTitleDictionary[lcid]) || lcid == fldValue) {
                    select.options[optionCount] = new Option(language.get_displayName(), lcid);
                    if (lcid == fldValue) {
                        select.options[optionCount].selected = true;
                    }
                    optionCount++;
                }
            }
        }
        function onAppMetadataLocaleFieldPostRender(inCtx) {
            for (var f in inCtx.ListSchema.Field) {
                var field = inCtx.ListSchema.Field[f];

                if (field.Name == "AppMetadataLocale") {
                    ExecuteOrDelayUntilScriptLoaded(readInstalledLanguages, 'sp.js');
                }
            }
        }
        function updateTitle() {
        ULSKtZ:
            ;
            var titleFieldControl = document.getElementById(appTitleFieldControlId);

            if (!SP.ScriptUtility.isNullOrUndefined(titleFieldControl) && !SP.ScriptUtility.isNullOrUndefined(appTitleDictionary)) {
                for (var c in appMetadataLocaleFieldControls) {
                    var localeFieldControlId = appMetadataLocaleFieldControls[c][0];
                    var localeFieldControl = document.getElementById(localeFieldControlId);

                    if (localeFieldControl.tagName == 'SELECT') {
                        var language = localeFieldControl.options[localeFieldControl.selectedIndex].value;
                        var title = appTitleDictionary[language];

                        if (SP.ScriptUtility.isNullOrUndefined(title)) {
                            title = appTitleDictionary["Default"];
                        }
                        setInnerText(titleFieldControl, title);
                        break;
                    }
                }
            }
        }
        function readInstalledLanguages() {
        ULSKtZ:
            ;
            var clientContext = SP.ClientContext.get_current();
            var installedLanguages = SP.ServerSettings.getGlobalInstalledLanguages(clientContext, SP.OfficeVersion.majorVersion);
            var item = null;

            if (!SP.ScriptUtility.isNullOrUndefined(listId) && !SP.ScriptUtility.isNullOrUndefined(itemId)) {
                var web = clientContext.get_web();
                var list = (web.get_lists()).getById(listId);

                item = list.getItemById(itemId);
                clientContext.load(item, "AppTitleInfo");
            }
            clientContext.executeQueryAsync(function() {
            ULSKtZ:
                ;
                if (!SP.ScriptUtility.isNullOrUndefined(item)) {
                    var fieldValues = item.get_fieldValues();

                    appTitleDictionary = eval("(" + fieldValues["AppTitleInfo"] + ")");
                    if (SP.ScriptUtility.isNullOrUndefined(appTitleDictionary)) {
                        appTitleDictionary = [];
                    }
                }
                if (!SP.ScriptUtility.isNullOrUndefined(installedLanguages)) {
                    for (var c in appMetadataLocaleFieldControls) {
                        var controlId = appMetadataLocaleFieldControls[c][0];
                        var control = document.getElementById(controlId);
                        var fldValue = appMetadataLocaleFieldControls[c][1];

                        if (!SP.ScriptUtility.isNullOrUndefined(control)) {
                            switch (control.tagName) {
                            case 'SELECT':
                                populateLocaleOptions(control, fldValue, installedLanguages);
                                control.onchange = updateTitle;
                                break;
                            case 'DIV':
                                var displayName = GetDisplayNameFromLCID(fldValue, installedLanguages);

                                if (displayName == fldValue) {
                                    setInnerText(control, fldValue);
                                }
                                else {
                                    setInnerText(control, displayName + ' - ' + fldValue);
                                }
                                break;
                            default:
                            }
                        }
                    }
                }
            }, function() {
            });
        }
        function GetDisplayNameFromLCID(lcid, installedLanguages) {
            if (SP.ScriptUtility.isNullOrEmptyString(lcid) || SP.ScriptUtility.isNullOrUndefined(lcid)) {
                return '';
            }
            else {
                for (var l in installedLanguages) {
                    if (installedLanguages[l].get_lcid() == lcid) {
                        return STSHtmlEncode(installedLanguages[l].get_displayName());
                    }
                }
                return STSHtmlEncode(lcid);
            }
        }
        function renderAppMetadataLocaleFieldValueCore(fieldControlId, fieldValue) {
            if (fieldValue == null || fieldValue == '' || typeof fieldValue == 'undefined') {
                return '';
            }
            else {
                appMetadataLocaleFieldControls[appMetadataLocaleFieldControls.length] = [fieldControlId, fieldValue];
                return '<div id="' + fieldControlId + '"></div>';
            }
        }
        function renderAppMetadataLocaleFieldValue(inCtx, field, listItem, listSchema) {
            var fieldValue = listItem[field.Name];
            var fieldControlId = field.Name + '_' + field.ID + '_' + listItem.ID;

            return renderAppMetadataLocaleFieldValueCore(fieldControlId, fieldValue);
        }
        function appMetadataLocaleField_Display(inCtx) {
            var fieldControlId = "AppMetadataLocaleField_" + inCtx.CurrentFieldSchema.Id;

            return renderAppMetadataLocaleFieldValueCore(fieldControlId, inCtx.CurrentFieldValue);
        }
        function appMetadataLocaleField_Edit(inCtx) {
            var fieldControlId = inCtx.CurrentFieldSchema.Name + '_' + inCtx.CurrentFieldSchema.Id + '_$DropDownChoice';

            appMetadataLocaleFieldControls[appMetadataLocaleFieldControls.length] = [fieldControlId, inCtx.CurrentFieldValue];
            return SPFieldChoice_Edit(inCtx);
        }
        function appTitleField_Edit(inCtx) {
            appTitleFieldControlId = inCtx.CurrentFieldSchema.Name + '_' + inCtx.CurrentFieldSchema.Id + '_$Text';
            listId = inCtx.FormContext.listAttributes.Id;
            itemId = inCtx.FormContext.itemAttributes.Id;
            return '<div id="' + appTitleFieldControlId + '">' + STSHtmlEncode(inCtx.CurrentFieldValue) + '</div>';
        }
        function _registerAppCatalogFieldTemplate() {
        ULSKtZ:
            ;
            var appCatalogFieldsContext = {};

            appCatalogFieldsContext.OnPostRender = onAppMetadataLocaleFieldPostRender;
            appCatalogFieldsContext.Templates = {
                'Fields': {
                    "AppMetadataLocale": {
                        'View': renderAppMetadataLocaleFieldValue,
                        'DisplayForm': appMetadataLocaleField_Display,
                        'EditForm': appMetadataLocaleField_Edit,
                        'NewForm': appMetadataLocaleField_Edit
                    },
                    "Title": {
                        'EditForm': appTitleField_Edit
                    }
                }
            };
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(appCatalogFieldsContext);
        }
        if (typeof Sys != 'undefined' && typeof Sys.Application != 'undefined' && typeof Sys.Application.notifyScriptLoaded != 'undefined') {
            Sys.Application.notifyScriptLoaded();
        }
        if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
            NotifyScriptLoadedAndExecuteWaitingJobs("appcatalogfieldtemplate.js");
        }
        ExecuteOrDelayUntilScriptLoaded(_registerAppCatalogFieldTemplate, 'clienttemplates.js');
    })();
}
function ULSKtZ() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "appcatalogfieldtemplate.commentedjs";
    return o;
}
$_global_appcatalogfieldtemplate();
