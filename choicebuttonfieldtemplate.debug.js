function $_global_choicebuttonfieldtemplate() {
    (function() {
    ULSFzQ:
        ;
        var taskStatusId;
        var taskStatusFound = false;
        var taskPercentCompleteId;
        var taskPercentCompleteFound = false;
        var isEdit = false;
        var completedStatusString;

        function generateButtons(dropdownId) {
            var inputElements = m$("input[id*=diidIOSaveItem]");
            var okButton = inputElements[inputElements.length - 1];

            if (m$.isUndefined(okButton) || document.getElementById(taskStatusId) == null) {
                return;
            }
            if ((document.getElementById(taskStatusId)).value == Strings.STS.L_Completed_Text || (document.getElementById(taskPercentCompleteId)).value == "100") {
                return;
            }
            var select = document.getElementById(dropdownId);

            for (var i = 0; i <= select.options.length - 1; i++) {
                if (select.options[i].value.length > 0) {
                    var resultSet = (m$(okButton)).closest(".ms-toolbar");

                    if (resultSet.length != 1) {
                        return;
                    }
                    var okButtonContainer = resultSet[0];
                    var buttonTable = okButtonContainer.cloneNode(true);

                    resultSet = (m$(buttonTable)).find("input");
                    if (resultSet.length != 1) {
                        return;
                    }
                    var button = resultSet[0];

                    button.setAttribute('optionId', i.toString());
                    button.value = select.options[i].value;
                    button.id = taskStatusId + "_" + select.options[i].value;
                    button.name = button.id;
                    button.onclick = function() {
                    ULSFzQ:
                        ;
                        if (typeof completedStatusString != "undefined") {
                            (document.getElementById(taskStatusId)).value = completedStatusString;
                        }
                        (document.getElementById(taskPercentCompleteId)).value = "100";
                        (document.getElementById(dropdownId)).selectedIndex = parseInt(this.getAttribute("optionId"));
                        okButton.click();
                    };
                    okButtonContainer.parentNode.insertBefore(buttonTable, okButtonContainer);
                }
            }
            var trParent = GetAncestor(select, "TR");

            if (trParent != null) {
                trParent.style.display = "none";
            }
        }
        function OnChoiceButtonFieldPreRender(inCtx) {
            if (inCtx.ListSchema == null || inCtx.ListData == null || inCtx.ListData.Items == null) {
                return;
            }
            var field = inCtx.ListSchema.Field;

            for (var f in field) {
                if (field[f].FieldType == "OutcomeChoice") {
                    completedStatusString = inCtx.ListData.Items[0][field[f].Name].CompletedValue;
                    inCtx.ListData.Items[0][field[f].Name] = inCtx.ListData.Items[0][field[f].Name].FieldValue;
                }
            }
        }
        function OnChoiceButtonFieldPostRender(inCtx) {
            var field = inCtx.ListSchema.Field;

            for (var f in field) {
                if (field[f].FieldType == "OutcomeChoice" && isEdit) {
                    generateButtons(field[f].Name + '_' + field[f].Id + '_$DropDownChoice');
                }
                if (!taskStatusFound && field[f].Name == "Status") {
                    taskStatusId = field[f].Name + '_' + field[f].Id + '_$DropDownChoice';
                    taskStatusFound = true;
                }
                if (!taskPercentCompleteFound && field[f].Name == "PercentComplete") {
                    taskPercentCompleteId = field[f].Name + '_' + field[f].Id + '_$NumberField';
                    taskPercentCompleteFound = true;
                }
            }
        }
        function ChoiceButtonField_Edit(inCtx) {
            isEdit = true;
            return SPFieldChoice_Edit(inCtx);
        }
        function _registerChoiceButtonFieldTemplate() {
        ULSFzQ:
            ;
            var choiceButtonFieldContext = {};

            choiceButtonFieldContext.OnPreRender = OnChoiceButtonFieldPreRender;
            choiceButtonFieldContext.OnPostRender = OnChoiceButtonFieldPostRender;
            choiceButtonFieldContext.Templates = {
                'Fields': {
                    'OutcomeChoice': {
                        'DisplayForm': SPField_FormDisplay_Default,
                        'EditForm': ChoiceButtonField_Edit,
                        'NewForm': SPFieldChoice_Edit
                    }
                }
            };
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(choiceButtonFieldContext);
        }
        if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
            Sys.Application.notifyScriptLoaded();
        }
        if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
            NotifyScriptLoadedAndExecuteWaitingJobs("choicebuttonfieldtemplate.js");
        }
        ExecuteOrDelayUntilScriptLoaded(_registerChoiceButtonFieldTemplate, 'clienttemplates.js');
    })();
}
function ULSFzQ() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "choicebuttonfieldtemplate.commentedjs";
    return o;
}
$_global_choicebuttonfieldtemplate();
