function ULSBsr(){var o=new Object;o.ULSTeamName="Work Management";o.ULSFileName="Wma.UI.Dialogs.debug.js";return o;}

Type.registerNamespace('SP.UI');

SP.UI.EditTaskDialogImpl = function SP_UI_EditTaskDialogImpl(taskId) {ULSBsr:;
    SP.UI.EditTaskDialogImpl.initializeBase(this);
    this.$2_1 = taskId;
}
SP.UI.EditTaskDialogImpl.prototype = {
    $2_1: 0,
    $K_1: 0,
    
    saveCore: function SP_UI_EditTaskDialogImpl$saveCore(asyncReturnValueHandler) {ULSBsr:;
        if (this.$H_0) {
            this.updateFormAndButtonState(false);
            this.cleanErrors();
            var $v_0 = this.$0_0.updateTaskInfo(this.$2_1, 21, this.get_taskName());
            var $v_1 = this.$0_0.updateTaskInfo(this.$2_1, 5, this.get_dueDate());
            var $v_2 = this.$0_0.updateTaskInfo(this.$2_1, 28, this.get_startDate());
            var $v_3 = this.$0_0.updateTaskInfo(this.$2_1, 13, (this.$7_0.checked) ? '1' : '0');
            var $v_4 = this.$0_0.updateTaskInfo(this.$2_1, 4, this.get_description());
            var $v_5 = false;
            var $v_6 = false;
            var $v_7 = null;
            if (this.$5_0.checked) {
                $v_7 = this.$0_0.promoteToPublic(this.$2_1, this.get_selectedProjectLocationId());
            }
            else if (this.get_selectedProjectLocationId() !== this.$K_1) {
                $v_6 = true;
                $v_5 = this.$0_0.moveTaskToLocation(this.$2_1, this.get_selectedProjectLocationId());
            }
            var $$t_C = this;
            this.$0_0.executeQuery(function($p1_0, $p1_1) {
                if (!$p1_0) {
                    if ($p1_1 && $p1_1.length > 0) {
                        $$t_C.showError($p1_1[0]);
                    }
                    else {
                        $$t_C.showError(WorkManagement.Res.TaskEditDialogCannotSave);
                    }
                    $$t_C.updateFormAndButtonState(true);
                }
                else {
                    if ($v_7 && $v_7.get_error()) {
                        $p1_0 = false;
                        $$t_C.$E_0.style.display = '';
                        $$t_C.$9_0 = true;
                    }
                    else if ($v_6 && !$v_5) {
                        $p1_0 = false;
                        $$t_C.showError(WorkManagement.Res.TaskEditDialogCannotMoveTask);
                    }
                    else if ($v_0.get_error() || $v_1.get_error() || $v_2.get_error() || $v_3.get_error() || $v_4.get_error()) {
                        $p1_0 = false;
                        var $v_8 = false;
                        if ($v_1.get_error()) {
                            $$t_C.$B_0.style.display = '';
                            $$t_C.showError($v_1.get_errorMessage());
                            $v_8 = true;
                        }
                        else if ($v_2.get_error()) {
                            $$t_C.$D_0.style.display = '';
                            $$t_C.showError($v_2.get_errorMessage());
                            $v_8 = true;
                        }
                        if (!$v_8) {
                            $$t_C.showError(WorkManagement.Res.TaskEditDialogCannotSave);
                        }
                    }
                    if (!$p1_0) {
                        $$t_C.updateFormAndButtonState(true);
                    }
                }
                if (asyncReturnValueHandler) {
                    asyncReturnValueHandler($p1_0, $$t_C.$2_1);
                }
            });
        }
    },
    
    beginLoad: function SP_UI_EditTaskDialogImpl$beginLoad(callback) {ULSBsr:;
        var $v_0 = SP.WorkManagement.OM.TaskQuery.newObject(this.$0_0.get_context());
        $v_0.set_lastQueryTime(new Date());
        var $v_1 = [ this.$2_1 ];
        $v_0.set_fieldFilter(SP.WorkManagement.OM.TaskFilter.newObject(this.$0_0.get_context()));
        $v_0.get_fieldFilter().set_idsToFilterBy($v_1);
        $v_0.set_pinnedFilter(0);
        var $v_2 = SP.WorkManagement.OM.SortableTaskQuery.newObject(this.$0_0.get_context());
        $v_2.set_coreQuery($v_0);
        var $v_3 = this.$0_0.readTasksSorted($v_2);
        var $$t_7 = this;
        this.$0_0.executeQuery(function($p1_0, $p1_1) {
            if ($p1_0) {
                if ($v_3.get_count()) {
                    $$t_7.$T_1($v_3);
                    $$t_7.cleanErrors();
                    SP.UI.Utilities.callIfNotNull(callback, true);
                }
                else {
                    $$t_7.$O_1(WorkManagement.Res.TaskList_TaskNotFound);
                    SP.UI.Utilities.callIfNotNull(callback, false);
                }
            }
            else {
                $$t_7.$O_1($p1_1[0]);
                SP.UI.Utilities.callIfNotNull(callback, false);
            }
        });
    },
    
    $T_1: function SP_UI_EditTaskDialogImpl$$T_1($p0) {
        var $v_0 = $p0.get_item(0);
        this.set_completed($v_0.get_isCompleted());
        this.$K_1 = $v_0.get_locationId();
        this.set_selectedProjectLocationId(this.$K_1);
        if (SP.UI.DateTimeUtilities.isDefaultDate($v_0.get_dueDate())) {
            this.set_dueDate('');
        }
        else {
            this.set_dueDate(SP.UI.DateTimeUtilities.createDateString($v_0.get_dueDate()));
        }
        if (SP.UI.DateTimeUtilities.isDefaultDate($v_0.get_startDate())) {
            this.set_startDate('');
        }
        else {
            this.set_startDate(SP.UI.DateTimeUtilities.createDateString($v_0.get_startDate()));
        }
        this.set_taskName($v_0.get_name());
        if ($v_0.get_description()) {
            this.set_description($v_0.get_description());
        }
        this.updateFormAndButtonState(true);
    },
    
    $O_1: function SP_UI_EditTaskDialogImpl$$O_1($p0) {
        this.updateFormAndButtonState(false);
        if ($p0) {
            this.showError($p0);
        }
        else {
            this.showError(WorkManagement.Res.TaskEditDialogCannotLoad);
        }
    }
}


SP.UI.NewTaskDialogImpl = function SP_UI_NewTaskDialogImpl() {ULSBsr:;
    SP.UI.NewTaskDialogImpl.initializeBase(this);
}
SP.UI.NewTaskDialogImpl.prototype = {
    
    beginLoad: function SP_UI_NewTaskDialogImpl$beginLoad(callback) {ULSBsr:;
        SP.UI.Utilities.callIfNotNull(callback, true);
        this.updateFormAndButtonState(true);
    },
    
    saveCore: function SP_UI_NewTaskDialogImpl$saveCore(asyncReturnCallback) {ULSBsr:;
        var $v_0 = null;
        if (this.$5_0.checked) {
            $v_0 = this.$0_0.createPersonalTaskAndPromoteToProviderTask(this.get_taskName(), this.get_description(), this.get_startDate(), this.get_dueDate(), this.get_completed(), false, this.get_selectedProjectLocationId());
        }
        else {
            $v_0 = this.$0_0.createTask(this.get_taskName(), this.get_description(), this.get_startDate(), this.get_dueDate(), this.get_completed(), false, this.get_selectedProjectLocationId());
        }
        var $$t_4 = this;
        this.$0_0.executeQuery(function($p1_0, $p1_1) {
            if ($p1_0) {
                if (!$v_0.get_error()) {
                    $$t_4.cleanErrors();
                    if (asyncReturnCallback) {
                        asyncReturnCallback(true, ($v_0.get_result()).get_id());
                    }
                }
                else {
                    $$t_4.$P_1($v_0.get_errorMessage());
                    if ($v_0.get_error() === 8) {
                        $$t_4.$B_0.style.display = '';
                    }
                    if (asyncReturnCallback) {
                        asyncReturnCallback(false, -1);
                    }
                }
            }
            else {
                $$t_4.$P_1($p1_1[0]);
                if (asyncReturnCallback) {
                    asyncReturnCallback(false, -1);
                }
            }
        });
        this.updateFormAndButtonState(false);
    },
    
    $P_1: function SP_UI_NewTaskDialogImpl$$P_1($p0) {
        this.updateFormAndButtonState(true);
        this.showError($p0);
    }
}


SP.UI.TaskDialogImpl = function SP_UI_TaskDialogImpl() {ULSBsr:;
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_$R_0 = Function.createDelegate(this, this.$R_0);
    this.$C_0 = -1;
    this.get_HasLoaded = this.get_hasLoaded;
    this.get_TaskName = this.get_taskName;
    this.set_TaskName = this.set_taskName;
    this.get_StartDate = this.get_startDate;
    this.set_StartDate = this.set_startDate;
    this.get_DueDate = this.get_dueDate;
    this.set_DueDate = this.set_dueDate;
    this.get_Completed = this.get_completed;
    this.set_Completed = this.set_completed;
    this.get_Description = this.get_description;
    this.set_Description = this.set_description;
    this.SaveAndClose = this.saveAndClose;
    this.Save = this.save;
    this.Close = this.close;
    this.Cancel = this.cancel;
    this.$0_0 = new SP.UI.TaskDataProvider();
    this.$3_0 = $get('taskName');
    this.$G_0 = $get('taskNameRequired');
    this.$B_0 = $get('invalidDueDate');
    this.$D_0 = $get('invalidStartDate');
    this.$M_0 = $get('datePickerPlaceholder');
    this.$N_0 = $get('startDatePickerPlaceholder');
    this.$7_0 = $get('taskCompleted');
    this.$8_0 = $get('taskDescription');
    this.$1_0 = $get('taskProjects');
    this.$5_0 = $get('taskIsPublic');
    this.$E_0 = $get('promoteToPublicError');
    this.$S_0();
    this.$3_0.focus();
    this.$6_0 = new SP.UI.DatePickerControl('EditTaskDatePicker');
    this.$M_0.appendChild(this.$6_0.get_element());
    this.$A_0 = new SP.UI.DatePickerControl('EditTaskStartDatePicker');
    this.$N_0.appendChild(this.$A_0.get_element());
    this.$I_0 = $get('cancelButton');
    this.$F_0 = $get('saveButton');
    var $$t_3 = this;
    $addHandler(this.$3_0, 'change', function($p1_0) {
        if ($$t_3.$3_0.value) {
            $$t_3.$G_0.style.display = 'none';
        }
    });
    var $$t_4 = this;
    $addHandler(this.$I_0, 'click', function($p1_0) {
        $$t_4.cancel();
    });
    var $$t_5 = this;
    $addHandler(this.$F_0, 'click', function($p1_0) {
        $$t_5.saveAndClose(null);
    });
    $addHandler(document.body, 'keydown', this.$$d_$R_0);
    this.$Q_0(false);
}
SP.UI.TaskDialogImpl.get_isDialog = function SP_UI_TaskDialogImpl$get_isDialog() {ULSBsr:;
    return window.location.search.indexOf('IsDlg=1') >= 0;
}
SP.UI.TaskDialogImpl.prototype = {
    $0_0: null,
    $H_0: false,
    $3_0: null,
    $G_0: null,
    $B_0: null,
    $D_0: null,
    $M_0: null,
    $N_0: null,
    $8_0: null,
    $7_0: null,
    $6_0: null,
    $A_0: null,
    $1_0: null,
    $5_0: null,
    $E_0: null,
    $F_0: null,
    $I_0: null,
    $9_0: false,
    
    get_hasLoaded: function SP_UI_TaskDialogImpl$get_hasLoaded() {ULSBsr:;
        return this.$H_0;
    },
    
    get_taskName: function SP_UI_TaskDialogImpl$get_taskName() {ULSBsr:;
        return this.$3_0.value;
    },
    set_taskName: function SP_UI_TaskDialogImpl$set_taskName(value) {ULSBsr:;
        this.$3_0.value = value;
        return value;
    },
    
    get_dueDate: function SP_UI_TaskDialogImpl$get_dueDate() {ULSBsr:;
        return this.$6_0.get_value();
    },
    set_dueDate: function SP_UI_TaskDialogImpl$set_dueDate(value) {ULSBsr:;
        this.$6_0.set_value(value);
        return value;
    },
    
    get_startDate: function SP_UI_TaskDialogImpl$get_startDate() {ULSBsr:;
        return this.$A_0.get_value();
    },
    set_startDate: function SP_UI_TaskDialogImpl$set_startDate(value) {ULSBsr:;
        this.$A_0.set_value(value);
        return value;
    },
    
    get_completed: function SP_UI_TaskDialogImpl$get_completed() {ULSBsr:;
        return this.$7_0.checked;
    },
    set_completed: function SP_UI_TaskDialogImpl$set_completed(value) {ULSBsr:;
        this.$7_0.checked = value;
        return value;
    },
    
    get_description: function SP_UI_TaskDialogImpl$get_description() {ULSBsr:;
        return this.$8_0.value;
    },
    set_description: function SP_UI_TaskDialogImpl$set_description(value) {ULSBsr:;
        this.$8_0.value = value;
        return value;
    },
    
    get_hasErrors: function SP_UI_TaskDialogImpl$get_hasErrors() {ULSBsr:;
        return this.$9_0;
    },
    set_hasErrors: function SP_UI_TaskDialogImpl$set_hasErrors(value) {ULSBsr:;
        this.$9_0 = value;
        return value;
    },
    
    get_invalidDueDateElement: function SP_UI_TaskDialogImpl$get_invalidDueDateElement() {ULSBsr:;
        return this.$B_0;
    },
    
    get_invalidStartDateElement: function SP_UI_TaskDialogImpl$get_invalidStartDateElement() {ULSBsr:;
        return this.$D_0;
    },
    
    saveAndClose: function SP_UI_TaskDialogImpl$saveAndClose(callback) {ULSBsr:;
        if (!this.get_taskName()) {
            this.$G_0.style.display = '';
            return;
        }
        else {
            this.$G_0.style.display = 'none';
        }
        this.$D_0.style.display = 'none';
        this.$B_0.style.display = 'none';
        var $$t_3 = this;
        this.saveCore(function($p1_0, $p1_1) {
            SP.UI.Utilities.callIfNotNull(callback, true);
            if (!$$t_3.$9_0) {
                $$t_3.close();
            }
        });
    },
    
    save: function SP_UI_TaskDialogImpl$save(asyncReturnCallback) {ULSBsr:;
        this.saveCore(asyncReturnCallback);
    },
    
    close: function SP_UI_TaskDialogImpl$close() {ULSBsr:;
        var $$t_0 = this;
        window.setTimeout(function() {ULSBsr:;
            $$t_0.closeDialog(1);
        }, 0);
    },
    
    Load: function SP_UI_TaskDialogImpl$Load(callback) {ULSBsr:;
        var $$t_3 = this;
        var $v_0 = function($p1_0) {
            SP.UI.Utilities.callIfNotNull(callback, $p1_0);
            SP.WorkManagement.OM.EditTask.WrapImplementationInApiAndMarkInitComplete($$t_3);
        };
        this.beginLoad($v_0);
    },
    
    cancel: function SP_UI_TaskDialogImpl$cancel() {ULSBsr:;
        this.closeDialog(0);
    },
    
    get_dataProvider: function SP_UI_TaskDialogImpl$get_dataProvider() {ULSBsr:;
        return this.$0_0;
    },
    
    get_datePickerControl: function SP_UI_TaskDialogImpl$get_datePickerControl() {ULSBsr:;
        return this.$6_0;
    },
    
    get_taskNameElement: function SP_UI_TaskDialogImpl$get_taskNameElement() {ULSBsr:;
        return this.$3_0;
    },
    
    get_taskDescriptionElement: function SP_UI_TaskDialogImpl$get_taskDescriptionElement() {ULSBsr:;
        return this.$8_0;
    },
    
    get_taskCompletedElement: function SP_UI_TaskDialogImpl$get_taskCompletedElement() {ULSBsr:;
        return this.$7_0;
    },
    
    get_selectProjectElement: function SP_UI_TaskDialogImpl$get_selectProjectElement() {ULSBsr:;
        return this.$1_0;
    },
    
    get_promoteToPublicElement: function SP_UI_TaskDialogImpl$get_promoteToPublicElement() {ULSBsr:;
        return this.$5_0;
    },
    
    get_promoteToPublicErrorElement: function SP_UI_TaskDialogImpl$get_promoteToPublicErrorElement() {ULSBsr:;
        return this.$E_0;
    },
    
    get_selectedProjectLocationId: function SP_UI_TaskDialogImpl$get_selectedProjectLocationId() {ULSBsr:;
        var $v_0 = SP.UI.TaskListConstants.noValue;
        var $v_1 = this.$1_0.selectedIndex;
        if ($v_1 >= 0 && $v_1 < this.$1_0.options.length) {
            var $v_2 = this.$1_0.options[$v_1];
            if ($v_2) {
                $v_0 = parseInt($v_2.value);
            }
        }
        return $v_0;
    },
    set_selectedProjectLocationId: function SP_UI_TaskDialogImpl$set_selectedProjectLocationId(value) {ULSBsr:;
        for (var $v_0 = 0; $v_0 < this.$1_0.options.length; $v_0++) {
            var $v_1 = this.$1_0.options[$v_0];
            if ($v_1.value === value.toString()) {
                $v_1.selected = true;
                break;
            }
        }
        this.$L_0();
        return value;
    },
    
    $S_0: function SP_UI_TaskDialogImpl$$S_0() {ULSBsr:;
        if (SP.UI.SharedComponentManager.get_instance().get_locationManager().get_visibleLocations().get_length() > 1) {
            $get('promoteToPublicSection').style.display = '';
            for (var $v_0 = 0; $v_0 < SP.UI.SharedComponentManager.get_instance().get_locationManager().get_visibleLocations().get_length(); $v_0++) {
                var $v_1 = SP.UI.SharedComponentManager.get_instance().get_locationManager().get_visibleLocations().get_item($v_0);
                var $v_2 = document.createElement('option');
                XUI.Html.SetText($v_2, $v_1.get_name());
                $v_2.value = $v_1.get_id().toString();
                this.$1_0.appendChild($v_2);
                if ($v_2.value === SP.UI.TaskListConstants.noValue.toString()) {
                    $v_2.selected = true;
                }
            }
            this.$L_0();
            $addHandler(this.$1_0, 'change', this.$$d_$U_0);
        }
    },
    
    closeDialog: function SP_UI_TaskDialogImpl$closeDialog(result) {ULSBsr:;
        $clearHandlers(this.$I_0);
        $clearHandlers(this.$F_0);
        $clearHandlers(document.body);
        if (SP.UI.TaskDialogImpl.get_isDialog()) {
            SP.UI.ModalDialog.commonModalDialogClose(result, null);
        }
        else {
            var $v_0 = GetSource('Highlights.aspx');
            window.location.href = unescapeProperly($v_0);
        }
    },
    
    showError: function SP_UI_TaskDialogImpl$showError(error) {ULSBsr:;
        this.cleanErrors();
        this.$C_0 = addStatus(WorkManagement.Res.TaskEditDialogError, error, true);
        setStatusPriColor(this.$C_0, SP.UI.StatusColors.red);
        this.$9_0 = true;
    },
    
    cleanErrors: function SP_UI_TaskDialogImpl$cleanErrors() {ULSBsr:;
        if (this.$C_0 !== -1) {
            removeStatus(this.$C_0);
        }
        this.$E_0.style.display = 'none';
        this.$9_0 = false;
    },
    
    updateFormAndButtonState: function SP_UI_TaskDialogImpl$updateFormAndButtonState(formAndSaveEnabled) {ULSBsr:;
        this.$H_0 = formAndSaveEnabled;
        this.$F_0.disabled = !formAndSaveEnabled;
        this.$Q_0(formAndSaveEnabled);
        SP.WorkManagement.OM.JsApiUtils.notifyStateUpdated(this);
    },
    
    $Q_0: function SP_UI_TaskDialogImpl$$Q_0($p0) {
        this.$3_0.disabled = !$p0;
        this.$7_0.disabled = !$p0;
        this.$8_0.disabled = !$p0;
        if ($p0) {
            this.$3_0.focus();
            this.$6_0.enable();
            this.$A_0.enable();
        }
        else {
            this.$6_0.disable();
            this.$A_0.disable();
        }
        this.$1_0.disabled = !$p0;
        this.$3_0.disabled = !$p0;
        this.$7_0.disabled = !$p0;
        this.$8_0.disabled = !$p0;
        this.$5_0.disabled = !$p0 || this.get_selectedProjectLocationId() === SP.UI.TaskListConstants.noValue;
    },
    
    $R_0: function SP_UI_TaskDialogImpl$$R_0($p0) {
        if ($p0.keyCode === 27 && !$p0.ctrlKey && !$p0.altKey && !$p0.shiftKey) {
            this.cancel();
        }
    },
    
    $U_0: function SP_UI_TaskDialogImpl$$U_0($p0) {
        this.$L_0();
    },
    
    $L_0: function SP_UI_TaskDialogImpl$$L_0() {ULSBsr:;
        if (this.get_selectedProjectLocationId() === SP.UI.TaskListConstants.noValue) {
            this.$5_0.disabled = true;
            this.$5_0.checked = false;
        }
        else {
            this.$5_0.disabled = false;
        }
    }
}


Type.registerNamespace('SP.UI.PageComponents');

SP.UI.PageComponents.EditTaskRibbonTabCommandNames = function SP_UI_PageComponents_EditTaskRibbonTabCommandNames() {
}


SP.UI.PageComponents.EditTaskPageComponent = function SP_UI_PageComponents_EditTaskPageComponent() {ULSBsr:;
    SP.UI.PageComponents.EditTaskPageComponent.initializeBase(this, [ 1 ]);
}
SP.UI.PageComponents.EditTaskPageComponent.initialize = function SP_UI_PageComponents_EditTaskPageComponent$initialize() {ULSBsr:;
    var $v_0 = new SP.UI.PageComponents.EditTaskPageComponent();
    SP.UI.PageComponents.AwiopBasePageComponent.addPageComponent($v_0, null);
}
SP.UI.PageComponents.EditTaskPageComponent.prototype = {
    $J_2: null,
    
    get_editTask: function SP_UI_PageComponents_EditTaskPageComponent$get_editTask() {ULSBsr:;
        return this.get_rawApi();
    },
    
    getId: function SP_UI_PageComponents_EditTaskPageComponent$getId() {ULSBsr:;
        return 'EditTaskPageComponent';
    },
    
    init: function SP_UI_PageComponents_EditTaskPageComponent$init() {ULSBsr:;
        this.$J_2 = [ 'cxtEditTask', 'EditGroup', 'EditTab', 'Save', 'Cancel' ];
    },
    
    getFocusedCommands: function SP_UI_PageComponents_EditTaskPageComponent$getFocusedCommands() {ULSBsr:;
        return this.$J_2;
    },
    
    getGlobalCommands: function SP_UI_PageComponents_EditTaskPageComponent$getGlobalCommands() {ULSBsr:;
        return this.$J_2;
    },
    
    canHandleCommand: function SP_UI_PageComponents_EditTaskPageComponent$canHandleCommand(commandId) {ULSBsr:;
        if (commandId === 'Save' || commandId === 'Cancel') {
            return !!this.get_editTask() && this.get_editTask().get_HasLoaded();
        }
        else {
            return true;
        }
    },
    
    handleCommand: function SP_UI_PageComponents_EditTaskPageComponent$handleCommand(commandId, properties, sequence) {ULSBsr:;
        if (commandId === 'Save') {
            this.get_editTask().SaveAndClose(null);
            return true;
        }
        else if (commandId === 'Cancel') {
            this.get_editTask().Cancel();
            return true;
        }
        return false;
    }
}


SP.UI.TaskDialogImpl.registerClass('SP.UI.TaskDialogImpl', null, SP.WorkManagement.OM.IEditTaskImpl, SP.WorkManagement.OM.IEditTask, SP.WorkManagement.OM.IJsApiImpl);
SP.UI.EditTaskDialogImpl.registerClass('SP.UI.EditTaskDialogImpl', SP.UI.TaskDialogImpl);
SP.UI.NewTaskDialogImpl.registerClass('SP.UI.NewTaskDialogImpl', SP.UI.TaskDialogImpl);
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.registerClass('SP.UI.PageComponents.EditTaskRibbonTabCommandNames');
SP.UI.PageComponents.EditTaskPageComponent.registerClass('SP.UI.PageComponents.EditTaskPageComponent', SP.UI.PageComponents.AwiopBasePageComponent);
function wma_ui_dialogs_initialize() {ULSBsr:;
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.cxtEditTask = 'cxtEditTask';
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.editTab = 'EditTab';
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.editGroup = 'EditGroup';
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.save = 'Save';
SP.UI.PageComponents.EditTaskRibbonTabCommandNames.cancel = 'Cancel';
};
wma_ui_dialogs_initialize();

RegisterModuleInit("wma.ui.dialogs.js", wma_ui_dialogs_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("wma.ui.dialogs.js");
