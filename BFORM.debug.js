function $_global_bform() {
    g_strRTEToolbarClassName = "ms-rtetoolbarmenu";
    g_strRTEUnselectedClassName = "ms-rtetoolbarunsel";
    g_strRTESelectedClassName = "ms-rtetoolbarsel";
    g_strRTEDisabledClassName = "ms-rtetoolbardis";
    g_strRTEHoverClassName = "ms-rtetoolbarhov";
    g_strRTETextEditorPullDownMenuID = "RTETextEditorPullDownMenu";
    g_strRTEDialogHelperID = "RTEDialogHelper";
    g_strRTECutMnemonic = "Cut";
    g_strRTECopyMnemonic = "Copy";
    g_strRTEPasteMnemonic = "Paste";
    g_strRTERemoveFormatMnemonic = "RemoveFormat";
    g_strRTEFontNameMnemonic = "FontName";
    g_strRTEFontSizeMnemonic = "FontSize";
    g_strRTEBoldMnemonic = "Bold";
    g_strRTEItalicMnemonic = "Italic";
    g_strRTEUnderlineMnemonic = "Underline";
    g_strRTEJustifyLeftMnemonic = "JustifyLeft";
    g_strRTEJustifyCenterMnemonic = "JustifyCenter";
    g_strRTEJustifyRightMnemonic = "JustifyRight";
    g_strRTEOrderedListMnemonic = "InsertOrderedList";
    g_strRTEUnorderedListMnemonic = "InsertUnorderedList";
    g_strRTEOutdentMnemonic = "Outdent";
    g_strRTEIndentMnemonic = "Indent";
    g_strRTEForeColorMnemonic = "ForeColor";
    g_strRTEBackColorMnemonic = "BackColor";
    g_strRTELTRMnemonic = "LTR";
    g_strRTERTLMnemonic = "RTL";
    g_strRTECreateLinkMnemonic = "CreateLink";
    g_strRTEInsertImageMnemonic = "InsertImage";
    g_strRTEHtmlSourceMnemonic = "HtmlSource";
    g_strRTEInsertTableMnemonic = "insert_table";
    g_strRTEInsertTableElementMnemonic = "InsertTableElement";
    g_strRTEDeleteTableElementMnemonic = "DeleteTableElement";
    g_strRTEInsertRowMnemonic = "insert_row";
    g_strRTEInsertRowAbove = "InsertRowAbove";
    g_strRTEInsertRowBelow = "InsertRowBelow";
    g_strRTEInsertColumnMnemonic = "insert_column";
    g_strRTEInsertColumnLeft = "InsertColumnLeft";
    g_strRTEInsertColumnRight = "InsertColumnRight";
    g_strRTEInsertCellMnemonic = "insert_cell";
    g_strRTEInsertCellLeft = "InsertCellLeft";
    g_strRTEInsertCellRight = "InsertCellRight";
    g_strRTEDeleteRow = "delete_row";
    g_strRTEDeleteColumn = "delete_column";
    g_strRTEMergeCellMnemonic = "merge_cell";
    g_strRTESplitCellMnemonic = "split_cell";
    g_strRTEFormatBlockMnemonic = "FormatBlock";
    g_strRTEStylesMnemonic = "styles";
    g_strRTEUndoMnemonic = "Undo";
    g_strRTERedoMnemonic = "Redo";
    g_strRTERestrictedModeAttributeName = "RestrictedMode";
    g_strRTESimpleTextOnlyAttributeName = "SimpleTextOnly";
    g_strRTEUseDynamicHeightSizing = "UseDynamicHeightSizing";
    g_strRTEUseDynamicWidthSizing = "UseDynamicWidthSizing";
    g_strRTEMaxHeightSizeAttributeName = "MaxHeightSize";
    g_strRTEMinHeightSizeAttributeName = "MinHeightSize";
    g_strRTEMaxWidthSizeAttributeName = "MaxWidthSize";
    g_strRTEMinWidthSizeAttributeName = "MinWidthSize";
    g_strRTEAllowHyperlinkAttributeName = "AllowHyperlink";
    g_strRTEBaseElementIDAttributeName = "BaseElementID";
    g_strRTEWebLocaleAttributeName = "WebLocale";
    g_strRTEButtonMnemonicAttributeName = "ButtonMnemonic";
    g_strRTECommandToExecuteAttributeName = "CommandToExecute";
    g_strRTECommandValueAttributeName = "CommandValue";
    g_strRTEFunctionToExecuteAttributeName = "FunctionToExecute";
    g_strRTEFunctionParameterToExecuteAttributeName = "FunctionParameterToExecute";
    g_strRTEMenuItemBaseName = "MenuItem";
    g_strRTEMenuItemAttributeName = "MenuItem";
    g_strRTEMenuOpeningAttributeName = "MenuOpening";
    g_strRTEMenuTableElementName = "MenuTable";
    g_strRTEBegBoldItalicToken = "%BEGBI%";
    g_strRTEEndBoldItalicToken = "%ENDBI%";
    g_strRTEFontNameToken = "%FONTNAME%";
    g_strRTEFontSizeToken = "%FONTSIZE%";
    g_ntRTEElement = 1;
    g_ntRTEText = 3;
    g_iLineHeight = 14;
    g_iCharWidth = 7;
    g_iDefaultMaxHeightSize = 10;
    g_iDefaultMaxWidthSize = 10;
    g_iDefaultMinWidthSize = 0;
    g_iDefaultMinHeightSize = 0;
    C_RTE_TB_SetEnabledAlways.prototype = new C_RTE_TB_Enabler;
    C_RTE_TB_SetEnabledFromCommandEnabled.prototype = new C_RTE_TB_Enabler;
    C_RTE_TB_SetEnabledIfInElement.prototype = new C_RTE_TB_Enabler;
    C_RTE_TB_SetEnabledWhenRemoveFormatEnabled.prototype = new C_RTE_TB_Enabler;
    C_RTE_TB_SetEnabledFromCommandValue.prototype = new C_RTE_TB_Enabler;
    C_RTE_TB_SetEnabledFromCommandValueIfNotInTable.prototype = new C_RTE_TB_Enabler;
    g_rgstRTETextEditorSelectionType = [];
    g_rgrngRTETextEditorSelection = [];
    g_RTE_Dialog_Width = 400;
    g_RTE_Dialog_Height = 152;
    g_fRestoreSelection = false;
    ExtendedRichTextSupport_InitializePrototype();
    ExtendedRichTextSupportEditors.prototype = {
        aSettings: undefined,
        overrides: undefined,
        renderFontNamesAsText: undefined,
        hoverButton: undefined,
        functions: undefined
    };
    ExtendedRichTextSupportOverrides_InitializePrototype();
    g_elemRTELastTextAreaConverted = null;
    g_strRTETextEditorWithTheFocus = null;
    g_strRTEPrevTextEditor = null;
    g_strRTEEditorFirstFocus = null;
    g_rgstrRTEAllEditorsInThePage = [];
    g_fRTEDialogIsOpen = false;
    g_fRTEFirstTimeGenerateCalled = true;
    ToolBarSettings_InitializePrototype();
    g_strRTEToolBarButtonWithTheFocus = null;
    g_aToolBarButtons = null;
    g_strRTEDDBaseElementID = null;
    g_strRTEDDButtonMnemonic = null;
    g_fRTEFirstCallToGetMenu = true;
    g_elemRTEHighlightedMenuItem = null;
    g_iRTEHighlightedMenuItem = -1;
    g_iRTEMenuItemMax = -1;
    g_fRTEMenuMoved = false;
    g_rgstrRTEMenuHtml = [];
    g_strRTEColorMatrixMenuItemPrefixHtml = "<div unselectable=\"on\" style=\"width: 10px; height: 10px; background-color: ";
    g_strRTEColorMatrixMenuItemSufffixHtml = ";\"><img unselectable=\"on\" width=\"10\" height=\"10\" border=\"0\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("blank.gif") + "\" alt=\"%TOOLTIP%\"></div>";
    g_cRTEColorMatrixColumns = 8;
    g_iRTELeft = 0;
    g_iRTETop = 1;
    g_iRTEWidth = 2;
    g_iRTEHeight = 3;
    g_iRTERight = 4;
    g_iRTEBottom = 5;
    if (g_aTableCellTagNames == null) {
        g_aTableCellTagNames = ["TD", "TH"];
    }
    RTE_SpanGrid_InitializePrototype();
    g_reservedTablePrefix = ".ms-rteTable";
    msTableStylePrefix = "ms-rteTable";
    msTableClass = "-";
    msTableClassHeadingRow = "HeaderRow-";
    msTableClassHeadingFirstCol = "HeaderFirstCol-";
    msTableClassHeadingOddCol = "HeaderOddCol-";
    msTableClassHeadingEvenCol = "HeaderEvenCol-";
    msTableClassHeadingLastCol = "HeaderLastCol-";
    msTableClassOddRow = "OddRow-";
    msTableClassEvenRow = "EvenRow-";
    msTableClassFirstCol = "FirstCol-";
    msTableClassOddCol = "OddCol-";
    msTableClassEvenCol = "EvenCol-";
    msTableClassLastCol = "LastCol-";
    msTableClassFootingRow = "FooterRow-";
    msTableClassFootingFirstCol = "FooterFirstCol-";
    msTableClassFootingOddCol = "FooterOddCol-";
    msTableClassFootingEvenCol = "FooterEvenCol-";
    msTableClassFootingLastCol = "FooterLastCol-";
    C_RTE_TB_Enabler.prototype = {
        button: undefined,
        strElement: undefined,
        SetEnabled: undefined
    };
    C_RTE_TB_ExecCmdButton_InitializePrototype();
    C_RTE_TB_ExecCmdButtonClustered_InitializePrototype();
    C_RTE_TB_JScriptButton_InitializePrototype();
    C_RTE_TB_JScriptButtonClustered_InitializePrototype();
    C_RTE_TB_SpecialButton_InitializePrototype();
    FileuploadString = "fileupload";
    FileUploadIndex = 0;
    FileUploadLocalFileCount = 0;
    Calendar_InitializePrototype();
    CalEvent_InitializePrototype();
    Span_InitializePrototype();
    DiscussionBoard_InitializePrototype();
    Post_InitializePrototype();
    DateDecode_InitializePrototype();
    OWSForm_InitializePrototype();
    DateField_InitializePrototype();
    Field_InitializePrototype();
    DateOptions_InitializePrototype();
    URLField_InitializePrototype();
    NumberField_InitializePrototype();
    BooleanField_InitializePrototype();
    NoteField_InitializePrototype();
    RichTextField_InitializePrototype();
    TextField_InitializePrototype();
    FilenameField_InitializePrototype();
    GridChoiceField_InitializePrototype();
    ;
    GridChoice_InitializePrototype();
    ;
    ChoiceItem_InitializePrototype();
    ChoiceField_InitializePrototype();
    RecurrencePattern_InitializePrototype();
    RecurrencePatternEventHooks_InitializePrototype();
    IntlDate.prototype.valueOf = toIntlValue;
    IntlDate.prototype.setUTCHours = setIntlHours;
    IntlDate.prototype.setSeconds = setIntlSeconds;
    IntlDate.prototype.setTime = setIntlTime;
    IntlDate.prototype.getUTCFullYear = getIntlFullYear;
    IntlDate.prototype.getUTCMonth = getIntlMonth;
    IntlDate.prototype.getUTCDate = getIntlDate;
    IntlDate.prototype.getUTCHours = getIntlHours;
    IntlDate.prototype.getUTCMinutes = getIntlMinutes;
    IntlDate.prototype.getUTCSeconds = getIntlSeconds;
    IntlDate.prototype.getTime = getIntlTime;
    DateOptions.prototype.SetTimeFormat = DOSetTimeFormat;
    DateOptions.prototype.SetDateOrder = DOSetDateOrder;
    DateOptions.prototype.SetDOW = DOSetDOW;
    DateOptions.prototype.ParseLocaleDate = DOParseLocaleDate;
    DateOptions.prototype.DateYMD = DODateYMD;
    DateOptions.prototype.DateIntlYMD = DODateIntlYMD;
    DateOptions.prototype.YrWindow = DOYrWindow;
    DateOptions.prototype.StDate = DOStDate;
    DateOptions.prototype.StDateString = DOStDateString;
    DateOptions.prototype.StTime = DOStTime;
    DateOptions.prototype.StBareTime = DOStBareTime;
    DateOptions.FHasTime = DOFHasTime;
    DateOptions.prototype.StTimeControls = DOStTimeControls;
    DateOptions.prototype.SetTimeControls = DOSetTimeControls;
    DateOptions.prototype.Today = DOToday;
    DateOptions.prototype.Now = DONow;
    DateOptions.ClientToday = DOClientToday;
    DateOptions.ClientNow = DOClientNow;
    DateOptions.ParseISODate = DOParseISODate;
    DateOptions.prototype.RoundDate = DateRoundDate;
    DateOptions.StISODate = DOStISODate;
    DateOptions.msSecond = 1000;
    DateOptions.msMinute = DateOptions.msSecond * 60;
    DateOptions.msHour = DateOptions.msMinute * 60;
    DateOptions.msDay = DateOptions.msHour * 24;
    DateOptions.msWeek = DateOptions.msDay * 7;
    DateOptions.cdyYr = 365;
    DateOptions.cdyQYr = 4 * DateOptions.cdyYr + 1;
    DateOptions.cdyC = 25 * DateOptions.cdyQYr - 1;
    DateOptions.cdyQC = 4 * DateOptions.cdyC + 1;
    DateOptions.mpMonIdy = [31, 61, 92, 122, 153, 184, 214, 245, 275, 306, 337];
    DateOptions.idyJan1 = 306;
    DateOptions.ddayOrigin = 135080;
    DateDecode.prototype.MsEncode = DDMsEncode;
    DateOptions.fOldDate = typeof Date.prototype.getUTCHours == "undefined";
    if (DateOptions.fOldDate) {
        Date.prototype.getUTCDay = DateGetUTCDay;
        Date.prototype.getUTCDate = DateGetUTCDate;
        Date.prototype.getUTCFullYear = DateGetUTCFullYear;
        Date.prototype.getUTCMonth = DateGetUTCMonth;
        Date.prototype.getUTCHours = DateGetUTCHours;
        Date.prototype.getUTCMinutes = DateGetUTCMinutes;
        Date.prototype.getUTCSeconds = DateGetUTCSeconds;
        Date.prototype.setUTCDate = DateSetUTCDate;
        Date.prototype.setUTCHours = DateSetUTCHours;
        Date.prototype.EnsureDecode = DateEnsureDecode;
        Date.prototype.ResetMs = DateResetMs;
    }
    DateDecode.prototype.toString = StDateDecode;
    DatePicker_InitializePrototype();
    DatePicker.prototype.StButton = DPStButton;
    DatePicker.prototype.Popup = DPPopup;
    DatePicker.prototype.AdjustFrameSize = DPAdjustFrameSize;
    DatePicker.prototype.StBuild = DPStBuild;
    DatePicker.prototype.SetHTML = DPSetHTML;
    DatePicker.prototype.ClickDay = DPClickDay;
    DatePicker.prototype.MoveMonth = DPMoveMonth;
    DatePicker.prototype.Cancel = DPCancel;
    DatePicker.prototype.SetDate = DPSetDate;
    OWSForm.prototype.MapCtName = FrmMapCtName;
    OWSForm.prototype.AddField = FrmAddField;
    OWSForm.prototype.DataBind = FrmDataBind;
    OWSForm.prototype.FindField = FrmFindField;
    OWSForm.prototype.ValidateAndSubmit = FrmValidateAndSubmit;
    OWSForm.prototype.FValidate = FValidateForm;
    OWSForm.prototype.FPostProcess = FPostProcessForm;
    OWSForm.prototype.SetFirstFocus = FrmSetFirstFocus;
    OWSForm.prototype.InitFormFields = FrmInitFields;
    OWSForm.prototype.BuildFieldUI = FrmBuildFieldUI;
    OWSForm.prototype.StFieldPost = FrmStFieldPost;
    OWSForm.prototype.FieldPost = FrmFieldPost;
    OWSForm.prototype.FilenameFieldPost = FilenameFrmFieldPost;
    OWSForm.prototype.StFieldSubPart = FrmStFieldSubPart;
    OWSForm.prototype.FieldSubPart = FrmFieldSubPart;
    OWSForm.prototype.StFieldName = FrmStFieldName;
    OWSForm.prototype.StFieldNameFactory = FrmStFieldNameFactory;
    OWSForm.prototype.GetSelValue = FrmGetSelValue;
    OWSForm.prototype.TestURL = FormTestURL;
    OWSForm.prototype.SetRadioValue = FormSetRadioValue;
    OWSForm.prototype.RevertSelect = FormRevertSelect;
    OWSForm.prototype.SetFillInButton = FormSetFillInButton;
    OWSForm.prototype.UnsetFillInButton = FormUnsetFillInButton;
    NumberOptions.prototype.SetGrouping = NoptSetGrouping;
    NumberOptions.prototype.NumParse = NoptNumParse;
    NumberOptions.prototype.StNumber = NoptStNumber;
    DateField.prototype.BuildUI = DateBuildUI;
    DateField.prototype.stBuildUI = stDateBuildUI;
    DateField.prototype.PopDatePicker = DatePopDatePicker;
    DateField.prototype.DataBind = DateDataBind;
    DateField.prototype.FieldFocus = DateFieldFocus;
    DateField.prototype.FValidate = DateFValidate;
    URLField.prototype.BuildUI = URLBuildUI;
    URLField.prototype.DataBind = URLDataBind;
    URLField.prototype.FieldFocus = URLFieldFocus;
    URLField.prototype.FValidate = URLValidate;
    NumberField.prototype.BuildUI = NumberBuildUI;
    NumberField.prototype.stBuildUI = stNumberBuildUI;
    NumberField.prototype.DataBind = NumberDataBind;
    NumberField.prototype.FieldFocus = NumberFieldFocus;
    NumberField.prototype.FValidate = NumberFValidate;
    BooleanField.prototype.BuildUI = BooleanBuildUI;
    BooleanField.prototype.DataBind = BooleanDataBind;
    BooleanField.prototype.FieldFocus = BooleanFieldFocus;
    BooleanField.prototype.FValidate = BooleanFValidate;
    BooleanField.prototype.SetValue = BooleanFieldSetValue;
    Field.prototype.FieldFocus = FieldFieldFocus;
    Field.prototype.DataBind = FieldDataBind;
    Field.prototype.FValidate = FieldFValidate;
    Field.prototype.BuildUI = FieldBuildUI;
    NoteField.prototype.FieldFocus = NoteFieldFieldFocus;
    NoteField.prototype.BuildUI = NoteFieldBuildUI;
    NoteField.prototype.DataBind = FieldDataBind;
    NoteField.prototype.FValidate = NoteFieldFValidate;
    RichTextField.prototype.FieldFocus = RichTextFieldFieldFocus;
    RichTextField.prototype.BuildUI = RichTextFieldBuildUI;
    RichTextField.prototype.DataBind = FieldDataBind;
    RichTextField.prototype.FValidate = RichTextFieldFValidate;
    TextField.prototype.BuildUI = TextFieldBuildUI;
    TextField.prototype.stBuildUI = stTextFieldBuildUI;
    TextField.prototype.FieldFocus = TextFieldFieldFocus;
    TextField.prototype.DataBind = FieldDataBind;
    TextField.prototype.FValidate = TextFieldFValidate;
    FilenameField.prototype.BuildUI = FilenameFieldBuildUI;
    FilenameField.prototype.FieldFocus = FilenameFieldFieldFocus;
    FilenameField.prototype.DataBind = FieldDataBind;
    FilenameField.prototype.FValidate = FilenameFieldFValidate;
    GridChoiceField.prototype.FieldFocus = GridChoiceFieldFocus;
    GridChoiceField.prototype.BuildUI = GridChoiceBuildUI;
    GridChoiceField.prototype.FValidate = GridChoiceFValidate;
    GridChoiceField.prototype.AddChoice = GridChoiceAddChoice;
    ChoiceField.prototype.BuildUI = ChoiceBuildUI;
    ChoiceField.prototype.stBuildUI = stChoiceBuildUI;
    ChoiceField.prototype.Init = ChoiceInit;
    ChoiceField.prototype.AddChoice = ChoiceAddChoice;
    ChoiceField.prototype.AddChoiceWithLayoutProc = ChoiceAddChoiceWithLayoutProc;
    ChoiceField.prototype.DataBind = ChoiceDataBind;
    ChoiceField.prototype.SetValue = ChoiceSetValue;
    ChoiceField.prototype.GetControl = ChoiceGetControl;
    ChoiceField.prototype.GetFillInButtonControl = ChoiceGetFillInButtonControl;
    ChoiceField.prototype.GetFillInControl = ChoiceGetFillInControl;
    ChoiceField.prototype.FieldFocus = ChoiceFieldFocus;
    ChoiceField.prototype.FValidate = ChoiceFValidate;
    ChoiceField.prototype.RevertSelect = ChoiceRevertSelect;
    ChoiceField.prototype.SetFillInButton = ChoiceFieldSetFillInButton;
    ChoiceField.prototype.UnsetFillInButton = ChoiceFieldUnsetFillInButton;
    ChoiceField.prototype.SetFillInValue = ChoiceSetFillInValue;
    _RecurDateRangeDiv = "recurDateRangeDiv";
    _RecurPatternTextDiv = "recurPatternTextDiv";
    _RecurDailyDiv = "recurDailyDiv";
    _RecurWeeklyDiv = "recurWeeklyDiv";
    _RecurMonthlyDiv = "recurMonthlyDiv";
    RecurrencePattern.prototype.BuildUI = RecurrencePatternBuildUI;
    RecurrencePattern.prototype.Init = RecurrencePatternInit;
    RecurrencePatternEventHooks.prototype.Init = RecurrencePatternEventHooksInit;
    RecurrencePatternEventHooks.prototype.InitHooks = DoInitRecurrencePatternEventHooks;
    RecurrencePatternEventHooks.prototype.FValidate = RecurrencePatternValidate;
    RecurrencePatternEventHooks.prototype.SetValue = RecurrencePatternEventHooksSetValue;
    RecurrencePatternEventHooks.prototype.DateRangeToDate = FnDateRangeToDate;
    RecurrencePatternEventHooks.prototype.DateToDateRange = FnDateToDateRange;
    RecurrencePatternEventHooks.prototype.ToggleDisplay = RecurrencePatternEventHooksToggleDisplay;
    RecurrencePatternEventHooks.prototype.PostProcess = DateFieldPostProcess;
    RecurrencePatternEventHooks.prototype.CopyDateFld = FnCopyDateFld;
    Position.prototype = {
        x: undefined,
        y: undefined
    };
    (function() {
    ULSglM:
        ;
        if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
            Sys.Application.notifyScriptLoaded();
        }
        if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
            NotifyScriptLoadedAndExecuteWaitingJobs("bform.js");
        }
    })();
}
function ULSglM() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "bform.commentedjs";
    return o;
}
var g_strRTEToolbarClassName;
var g_strRTEUnselectedClassName;
var g_strRTESelectedClassName;
var g_strRTEDisabledClassName;
var g_strRTEHoverClassName;
var g_strRTETextEditorPullDownMenuID;
var g_strRTEDialogHelperID;
var g_strRTECutMnemonic;
var g_strRTECopyMnemonic;
var g_strRTEPasteMnemonic;
var g_strRTERemoveFormatMnemonic;
var g_strRTEFontNameMnemonic;
var g_strRTEFontSizeMnemonic;
var g_strRTEBoldMnemonic;
var g_strRTEItalicMnemonic;
var g_strRTEUnderlineMnemonic;
var g_strRTEJustifyLeftMnemonic;
var g_strRTEJustifyCenterMnemonic;
var g_strRTEJustifyRightMnemonic;
var g_strRTEOrderedListMnemonic;
var g_strRTEUnorderedListMnemonic;
var g_strRTEOutdentMnemonic;
var g_strRTEIndentMnemonic;
var g_strRTEForeColorMnemonic;
var g_strRTEBackColorMnemonic;
var g_strRTELTRMnemonic;
var g_strRTERTLMnemonic;
var g_strRTECreateLinkMnemonic;
var g_strRTEInsertImageMnemonic;
var g_strRTEHtmlSourceMnemonic;
var g_strRTEInsertTableMnemonic;
var g_strRTEInsertTableElementMnemonic;
var g_strRTEDeleteTableElementMnemonic;
var g_strRTEInsertRowMnemonic;
var g_strRTEInsertRowAbove;
var g_strRTEInsertRowBelow;
var g_strRTEInsertColumnMnemonic;
var g_strRTEInsertColumnLeft;
var g_strRTEInsertColumnRight;
var g_strRTEInsertCellMnemonic;
var g_strRTEInsertCellLeft;
var g_strRTEInsertCellRight;
var g_strRTEDeleteRow;
var g_strRTEDeleteColumn;
var g_strRTEMergeCellMnemonic;
var g_strRTESplitCellMnemonic;
var g_strRTEFormatBlockMnemonic;
var g_strRTEStylesMnemonic;
var g_strRTEUndoMnemonic;
var g_strRTERedoMnemonic;
var g_strRTERestrictedModeAttributeName;
var g_strRTESimpleTextOnlyAttributeName;
var g_strRTEUseDynamicHeightSizing;
var g_strRTEUseDynamicWidthSizing;
var g_strRTEMaxHeightSizeAttributeName;
var g_strRTEMinHeightSizeAttributeName;
var g_strRTEMaxWidthSizeAttributeName;
var g_strRTEMinWidthSizeAttributeName;
var g_strRTEAllowHyperlinkAttributeName;
var g_strRTEBaseElementIDAttributeName;
var g_strRTEWebLocaleAttributeName;
var g_strRTEButtonMnemonicAttributeName;
var g_strRTECommandToExecuteAttributeName;
var g_strRTECommandValueAttributeName;
var g_strRTEFunctionToExecuteAttributeName;
var g_strRTEFunctionParameterToExecuteAttributeName;
var g_strRTEMenuItemBaseName;
var g_strRTEMenuItemAttributeName;
var g_strRTEMenuOpeningAttributeName;
var g_strRTEMenuTableElementName;
var g_strRTEBegBoldItalicToken;
var g_strRTEEndBoldItalicToken;
var g_strRTEFontNameToken;
var g_strRTEFontSizeToken;
var g_ntRTEElement;
var g_ntRTEText;
var g_iLineHeight;
var g_iCharWidth;
var g_iDefaultMaxHeightSize;
var g_iDefaultMaxWidthSize;
var g_iDefaultMinWidthSize;
var g_iDefaultMinHeightSize;

function LessThan(str1, str2) {
    return str1 < str2;
}
function GreaterThan(str1, str2) {
    return str1 > str2;
}
function GetParentWindow2(doc) {
    if (doc == null) {
        doc = document;
    }
    if (typeof doc.parentWindow != 'undefined' && null != doc.parentWindow) {
        return doc.parentWindow;
    }
    else if (typeof doc.defaultView != 'undefined' && null != doc.defaultView) {
        return doc.defaultView;
    }
    return null;
}
var g_rgstRTETextEditorSelectionType;
var g_rgrngRTETextEditorSelection;
var g_RTE_Dialog_Width;
var g_RTE_Dialog_Height;

function RTE_DialogResize() {
ULSglM:
    ;
    var w = window.document.body;

    if (w.scrollWidth > g_RTE_Dialog_Width) {
        window.dialogWidth = String(w.scrollWidth) + "px";
    }
    if (w.scrollHeight > g_RTE_Dialog_Height) {
        window.dialogHeight = String(w.scrollHeight) + "px";
    }
}
function RTE_SaveSelection(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.SaveSelection != "undefined" && overrides.SaveSelection != null) {
            return overrides.SaveSelection(strBaseElementID);
        }
    }
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    g_rgrngRTETextEditorSelection[strBaseElementID] = docEditor.selection.createRange();
    g_rgstRTETextEditorSelectionType[strBaseElementID] = docEditor.selection.type;
    return undefined;
}
var g_fRestoreSelection;

function RTE_RestoreSelection(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.RestoreSelection != "undefined" && overrides.RestoreSelection != null) {
            return overrides.RestoreSelection(strBaseElementID);
        }
    }
    var sel = g_rgrngRTETextEditorSelection[strBaseElementID];

    if (null == sel) {
        try {
            sel = parent.g_rgrngRTETextEditorSelection[strBaseElementID];
        }
        catch (e) { }
    }
    if (null != sel) {
        g_fRestoreSelection = true;
        sel.select();
        g_fRestoreSelection = false;
    }
    return undefined;
}
function RTE_GetSelection(strBaseElementID) {
    return g_rgrngRTETextEditorSelection[strBaseElementID];
}
function ExtendedRichTextSupport_InitializePrototype() {
ULSglM:
    ;
    ExtendedRichTextSupport.prototype.editors = undefined;
}
function ExtendedRichTextSupport(arr) {
ULSglM:
    ;
    this.editors = arr;
}
function ExtendedRichTextSupportEditors(overrides) {
ULSglM:
    ;
    this.overrides = overrides;
    this.overrides.DisableToolBar = null;
    this.overrides.ResetAllToolBarStates = null;
    this.overrides.GetEditorDocument = null;
    this.overrides.OnKeyDown = null;
    this.overrides.RestoreSelection = null;
    this.overrides.GiveEditorFocus = null;
    this.overrides.GetToolBarDefinition = null;
    this.RenderFontNamesAsText = false;
    this.hoverButton = null;
    this.functions = [];
}
function ExtendedRichTextSupportOverrides_InitializePrototype() {
ULSglM:
    ;
    ExtendedRichTextSupportOverrides.prototype.DisableToolBar = undefined;
    ExtendedRichTextSupportOverrides.prototype.GetEditorDocument = undefined;
    ExtendedRichTextSupportOverrides.prototype.GiveEditorFocus = null;
    ExtendedRichTextSupportOverrides.prototype.OnKeyDown = undefined;
    ExtendedRichTextSupportOverrides.prototype.ResetAllToolBarStates = undefined;
    ExtendedRichTextSupportOverrides.prototype.RestoreSelection = undefined;
    ExtendedRichTextSupportOverrides.prototype.SaveSelection = undefined;
}
function ExtendedRichTextSupportOverrides() {
}
var g_oExtendedRichTextSupport;

function RTE_GetEditorInstanceVariables(strBaseElementID) {
    if (parent.g_oExtendedRichTextSupport != null) {
        g_oExtendedRichTextSupport = parent.g_oExtendedRichTextSupport;
    }
    if (g_oExtendedRichTextSupport != null) {
        if (g_oExtendedRichTextSupport.editors[strBaseElementID] != null) {
            return g_oExtendedRichTextSupport.editors[strBaseElementID];
        }
    }
    return null;
}
function RTE_InitializeExtendedRichTextSupport(strBaseElementID) {
    if (g_oExtendedRichTextSupport == null) {
        g_oExtendedRichTextSupport = new ExtendedRichTextSupport([]);
    }
    var overrides = new ExtendedRichTextSupportOverrides();
    var editors = new ExtendedRichTextSupportEditors(overrides);

    g_oExtendedRichTextSupport.editors[strBaseElementID] = editors;
}
var g_elemRTELastTextAreaConverted;
var g_strRTETextEditorWithTheFocus;
var g_strRTEPrevTextEditor;
var g_strRTEEditorFirstFocus;
var g_rgstrRTEAllEditorsInThePage;
var g_fRTEDialogIsOpen;

function RTE_GetEditorIFrameID(strBaseElementID) {
ULSglM:
    ;
    return strBaseElementID + "_iframe";
}
function RTE_GetEditorTextArea(strBaseElementID) {
ULSglM:
    ;
    var elemTextArea = document.getElementById(strBaseElementID);

    return elemTextArea;
}
function RTE_GetEditorIFrame(strBaseElementID) {
    var ifmEditor = null;
    var wnd = window;

    if (wnd.frames.length == 0) {
        wnd = wnd.parent;
    }
    if (wnd.frames.length > 0) {
        var doc = wnd.document;
        var frameId = RTE_GetEditorIFrameID(strBaseElementID);
        var ifmContainer = doc.getElementById(frameId);

        if (ifmContainer != null) {
            ifmEditor = wnd.frames[frameId];
            if (ifmEditor == null) {
                ifmEditor = ifmContainer.contentWindow;
            }
        }
    }
    return ifmEditor;
}
function RTE_GetEditorElement(strBaseElementID) {
    var doc = document;
    var wnd = window;

    try {
        if (wnd.frames.length == 0) {
            wnd = (GetParentWindow2(doc)).parent;
            if (null != wnd) {
                doc = wnd.document;
            }
        }
    }
    catch (e) {
        doc = document;
    }
    var elemEditorIFrame = doc.getElementById(RTE_GetEditorIFrameID(strBaseElementID));

    return elemEditorIFrame;
}
function RTE_GetEditorToolBar(strBaseElementID) {
    var strToolBarElementID = strBaseElementID + "_toolbar";
    var toolbarObject = document.getElementById(strToolBarElementID);

    return toolbarObject;
}
function RTE_GetEditorDocument(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.GetEditorDocument != "undefined" && overrides.GetEditorDocument != null) {
            return overrides.GetEditorDocument(strBaseElementID);
        }
    }
    var ifmEditor = RTE_GetEditorIFrame(strBaseElementID);

    if (null == ifmEditor) {
        return null;
    }
    var docEditor = ifmEditor.document;

    return docEditor;
}
function RTE_GetWebLocale(strBaseElementID) {
    return (RTE_GetEditorDocument(strBaseElementID)).body.getAttribute(g_strRTEWebLocaleAttributeName);
}
function RTE_IsInRestrictedMode(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null != docEditor.body.getAttribute(g_strRTERestrictedModeAttributeName)) {
        return true;
    }
    return false;
}
function RTE_IsSimpleTextOnly(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null != docEditor.body.getAttribute(g_strRTESimpleTextOnlyAttributeName)) {
        return true;
    }
    return false;
}
function RTE_UseDynamicHeightSizing(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null != docEditor.body.getAttribute(g_strRTEUseDynamicHeightSizing)) {
        return true;
    }
    return false;
}
function RTE_MaxHeightSize(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var nMaxHeightSize = docEditor.body.getAttribute(g_strRTEMaxHeightSizeAttributeName);

    if (null != nMaxHeightSize) {
        return Number(nMaxHeightSize);
    }
    return g_iDefaultMaxHeightSize;
}
function RTE_MaxWidthSize(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var nMaxWidthSize = docEditor.body.getAttribute(g_strRTEMaxWidthSizeAttributeName);

    if (null != nMaxWidthSize) {
        return Number(nMaxWidthSize);
    }
    return g_iDefaultMaxWidthSize;
}
function RTE_MinHeightSize(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var nMinHeightSize = docEditor.body.getAttribute(g_strRTEMinHeightSizeAttributeName);

    if (null != nMinHeightSize) {
        return Number(nMinHeightSize);
    }
    return g_iDefaultMinHeightSize;
}
function RTE_MinWidthSize(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var nMinWidthSize = docEditor.body.getAttribute(g_strRTEMinWidthSizeAttributeName);

    if (null != nMinWidthSize) {
        return Number(nMinWidthSize);
    }
    return g_iDefaultMinWidthSize;
}
function RTE_IsHyperlinkAllowed(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null != docEditor.body.getAttribute(g_strRTEAllowHyperlinkAttributeName)) {
        return true;
    }
    return false;
}
function RTE_ShouldShowDirection() {
ULSglM:
    ;
    return true;
}
function RTE_EditorWithTheFocus() {
ULSglM:
    ;
    return g_strRTETextEditorWithTheFocus;
}
function RTE_PrevEditor() {
ULSglM:
    ;
    return g_strRTEPrevTextEditor;
}
function RTE_GetRichEditTextOnly(strBaseElementID) {
    return (RTE_GetEditorDocument(strBaseElementID)).body.innerText;
}
function RTE_DocEditor_AdjustHeight(strBaseElementID) {
    var iMaxHeightSize = RTE_MaxHeightSize(strBaseElementID);
    var iMinHeightSize = RTE_MinHeightSize(strBaseElementID);
    var ifmContainer = RTE_GetEditorElement(strBaseElementID);

    if (ifmContainer != null) {
        var ifmEditor = RTE_GetEditorIFrame(strBaseElementID);
        var contentheight = ifmEditor.document.body.scrollHeight;
        var clientHeight = ifmEditor.document.body.clientHeight;
        var bodyHeight = ifmEditor.document.body.offsetHeight;
        var MaxHeightPixelSize = iMaxHeightSize * g_iLineHeight;
        var MinHeightPixelSize = iMinHeightSize * g_iLineHeight;

        contentheight = contentheight < g_iLineHeight ? g_iLineHeight : contentheight;
        if (clientHeight != contentheight && (contentheight <= MaxHeightPixelSize || clientHeight < MaxHeightPixelSize) && (contentheight >= MinHeightPixelSize || clientHeight > MinHeightPixelSize)) {
            var newHeight = bodyHeight + (contentheight > MaxHeightPixelSize ? MaxHeightPixelSize : contentheight) - clientHeight;

            if (newHeight < MinHeightPixelSize) {
                newHeight = MinHeightPixelSize;
            }
            ifmContainer.style.height = newHeight.toString();
        }
    }
}
function RTE_DocEditor_AdjustWidth(strBaseElementID) {
    var iMaxWidthSize = RTE_MaxWidthSize(strBaseElementID);
    var iMinWidthSize = RTE_MinWidthSize(strBaseElementID);
    var ifmContainer = RTE_GetEditorElement(strBaseElementID);

    if (ifmContainer != null) {
        var ifmEditor = RTE_GetEditorIFrame(strBaseElementID);
        var body = (ifmEditor.document.getElementsByTagName("body"))[0];
        var contentWidth = body.scrollWidth;
        var clientWidth = body.clientWidth;
        var bodyWidth = body.offsetWidth;
        var MaxWidthPixelSize = iMaxWidthSize * g_iCharWidth;
        var MinWidthPixelSize = iMinWidthSize * g_iCharWidth;

        contentWidth = contentWidth < g_iCharWidth ? g_iCharWidth : contentWidth;
        if (clientWidth != contentWidth && (contentWidth <= MaxWidthPixelSize || clientWidth < MaxWidthPixelSize) && (contentWidth >= MinWidthPixelSize || clientWidth > MinWidthPixelSize)) {
            var newWidth = bodyWidth + (contentWidth > MaxWidthPixelSize ? MaxWidthPixelSize : contentWidth) - clientWidth;

            if (newWidth < MinWidthPixelSize) {
                newWidth = MinWidthPixelSize;
            }
            ifmContainer.style.width = newWidth.toString();
        }
    }
}
function RTE_SetVisibiltyStyle(strBaseElementID, strVisiblity) {
    var ifmContainer = RTE_GetEditorElement(strBaseElementID);
    var toolbarObject = RTE_GetEditorToolBar(strBaseElementID);

    if (null != ifmContainer && null != toolbarObject) {
        toolbarObject.style.visibility = strVisiblity;
        ifmContainer.style.visibility = strVisiblity;
    }
}
function RTE_SetWidthHeight(strBaseElementID, width, height) {
    var ifmContainer = RTE_GetEditorElement(strBaseElementID);
    var toolbarObject = RTE_GetEditorToolBar(strBaseElementID);

    if (null != toolbarObject && null != ifmContainer) {
        if (width < 0) {
            width = 0;
        }
        ifmContainer.style.width = width.toString();
        var containterHeight = height - toolbarObject.offsetHeight;

        if (containterHeight < 0) {
            containterHeight = 0;
        }
        ifmContainer.style.height = containterHeight.toString();
    }
}
function RTE_GetMinimumHeight(strBaseElementID) {
    var toolbarHeight = 0;
    var toolbarObject = RTE_GetEditorToolBar(strBaseElementID);

    if (null != toolbarObject) {
        toolbarHeight = toolbarObject.offsetHeight;
    }
    return toolbarHeight;
}
function RTE_GetMinimumWidth(strBaseElementID) {
    var toolbarWidth = 0;
    var toolbarObject = RTE_GetEditorToolBar(strBaseElementID);

    if (null != toolbarObject) {
        toolbarWidth = toolbarObject.offsetWidth;
    }
    return toolbarWidth;
}
function RTE_GetIFrameContents(strBaseElementID) {
    var strHtml, strText;
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null == docEditor)
        return null;
    strHtml = docEditor.body.innerHTML;
    return strHtml;
}
function RTE_GiveEditorFocus(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.GiveEditorFocus != "undefined" && overrides.GiveEditorFocus != null) {
            return overrides.GiveEditorFocus(strBaseElementID);
        }
    }
    (RTE_GetEditorIFrame(strBaseElementID)).focus();
    return undefined;
}
function RTE_GiveEditorFirstFocus(strBaseElementID) {
    RTE_GiveEditorFocus(strBaseElementID);
    g_strRTEEditorFirstFocus = strBaseElementID;
}
function RTE_ConvertTextAreaToRichEdit(strBaseElementID, fRestrictedMode, fAllowHyperlink, strDirection, strWebLocale, fSimpleTextOnly, fEditable, fUseDynamicHeightSizing, iMaxHeightSize, iMinHeightSize, strMode, urlWebRoot, strThemeUrl, strBodyClassName, fAllowRelativeLinks, strBaseUrl, fUseDynamicWidthSizing, iMaxWidthSize, iMinWidthSize, fEnforceAccessibilityMode, fPreserveScript, fHookUpEvents, fGenerateToolbar) {
    ;
    if (!(browseris.ie5up && (browseris.win32 || browseris.winnt || browseris.win64bit))) {
        return;
    }
    fEnforceAccessibilityMode = fEnforceAccessibilityMode == null || fEnforceAccessibilityMode;
    if (IsAccessibilityFeatureEnabled() && fEnforceAccessibilityMode) {
        return;
    }
    fSimpleTextOnly = fSimpleTextOnly != null && fSimpleTextOnly;
    fRestrictedMode = fSimpleTextOnly ? true : fRestrictedMode;
    fEditable = null == fEditable ? true : fEditable;
    fUseDynamicHeightSizing = fUseDynamicHeightSizing != null && fUseDynamicHeightSizing;
    iMaxHeightSize = null == iMaxHeightSize || iMaxHeightSize <= 0 ? g_iDefaultMaxHeightSize : iMaxHeightSize;
    iMinHeightSize = null == iMinHeightSize || iMinHeightSize <= 0 || iMinHeightSize > iMaxHeightSize ? g_iDefaultMinHeightSize : iMinHeightSize;
    fUseDynamicWidthSizing = fUseDynamicWidthSizing != null && fUseDynamicWidthSizing;
    iMaxWidthSize = null == iMaxWidthSize || iMaxWidthSize <= 0 ? g_iDefaultMaxWidthSize : iMaxWidthSize;
    iMinWidthSize = null == iMinWidthSize || iMinWidthSize <= 0 || iMinWidthSize > iMaxWidthSize ? g_iDefaultMinWidthSize : iMinWidthSize;
    fHookUpEvents = null == fHookUpEvents || fHookUpEvents;
    fGenerateToolbar = null == fGenerateToolbar || fGenerateToolbar;
    if (strMode != "FullHtml") {
        strMode = "Compatible";
    }
    if (null == strBodyClassName) {
        strBodyClassName = "ms-formbody";
    }
    var aSettings = new ToolBarSettings();

    RTE_InitializeExtendedRichTextSupport(strBaseElementID);
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);
    var fFullHtml = false;

    if (strMode == "FullHtml") {
        fFullHtml = true;
        fAllowHyperlink = false;
        variables.overrides.GetToolBarDefinition = RTE_FullHtmlToolBarDefinitionFactory(fEnforceAccessibilityMode);
        aSettings.fRestrictedMode = true;
        aSettings.fAllowHyperlink = false;
        aSettings.fIsVisible = true;
    }
    else {
        aSettings.fRestrictedMode = fRestrictedMode;
        aSettings.fAllowHyperlink = fAllowHyperlink;
        aSettings.fIsVisible = !fSimpleTextOnly;
    }
    aSettings.urlWebRoot = urlWebRoot == null || urlWebRoot == "/" ? "" : urlWebRoot;
    aSettings.fAllowRelativeLinks = fAllowRelativeLinks == null ? false : fAllowRelativeLinks;
    aSettings.fPreserveScript = fPreserveScript == null ? false : fPreserveScript;
    variables.aSettings = aSettings;
    var elemTextArea = RTE_GetEditorTextArea(strBaseElementID);
    var strHtmlToEdit = elemTextArea.innerText;

    if (null == strHtmlToEdit || 0 == strHtmlToEdit.length) {
        strHtmlToEdit = "<div></div>";
    }
    g_elemRTELastTextAreaConverted = elemTextArea;
    AttachEvent("load", new Function("RTE_TextAreaWindow_OnLoad('" + strBaseElementID + "');"), window);
    var aHtmlToAppend = [];

    if (fGenerateToolbar) {
        aHtmlToAppend.push(RTE_GenerateToolBarHtmlFromSettings(strBaseElementID, strWebLocale, elemTextArea, aSettings));
    }
    aHtmlToAppend.push(RTE_GenerateIFrameEditorHtml(strBaseElementID, elemTextArea, fRestrictedMode, fAllowHyperlink));
    var strHtmlToAppend = aHtmlToAppend.join("");

    insertAdjacentHTML(elemTextArea, "afterEnd", strHtmlToAppend);
    var fn = function() {
    ULSglM:
        ;
        RTE_TransferIFrameContentsToTextArea(strBaseElementID);
        DetachEvent('submit', fn, event.srcElement);
        RTE_DeleteEditor(strBaseElementID);
    };

    if (fHookUpEvents) {
        elemTextArea.onfocus = new Function("RTE_TextArea_OnFocus('" + strBaseElementID + "')");
        elemTextArea.style.display = "none";
        variables.onBeforeUnloadFunc = new Function("RTE_TransferIFrameContentsToTextArea('" + strBaseElementID + "');");
        AttachEvent("beforeunload", variables.onBeforeUnloadFunc, window);
        var findForm = elemTextArea;

        while (findForm != null && findForm.tagName != "FORM" && findForm.tagName != "WINDOW") {
            findForm = findForm.parentNode;
        }
        if (findForm != null) {
            AttachEvent("submit", fn, findForm);
        }
    }
    var aEditorHtml = [];

    aEditorHtml.push("<html><head>");
    if (null != strBaseUrl && true == fAllowRelativeLinks) {
        aEditorHtml.push("<base href=\"");
        aEditorHtml.push(strBaseUrl);
        aEditorHtml.push("\"/>");
    }
    aEditorHtml.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"");
    aEditorHtml.push(RTE_GetServerRelativeStylesheetUrl("forms.css", strWebLocale));
    aEditorHtml.push("\">");
    if (null != strThemeUrl) {
        aEditorHtml.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"");
        aEditorHtml.push(strThemeUrl);
        aEditorHtml.push("\">");
    }
    aEditorHtml.push("</head><body class=\"");
    aEditorHtml.push(strBodyClassName);
    aEditorHtml.push("\" style=\"background-color: white;border:none; margin:0px\"></body></html>");
    var strEditorHtml = aEditorHtml.join("");
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    docEditor.open("text/html", "replace");
    docEditor.write(strEditorHtml);
    docEditor.close();
    docEditor.body.scroll = "yes";
    docEditor.body.wordWrap = false;
    docEditor.body.contentEditable = fEditable;
    docEditor.body.innerHTML = strEditorHtml;
    if (fHookUpEvents && fEditable) {
        RTE_EventHookUp(strBaseElementID);
    }
    if (fRestrictedMode) {
        docEditor.body.ondragenter = new Function("RTE_OnDragEnter(this);");
        docEditor.body.ondragover = new Function("RTE_OnDragOver(this);");
        docEditor.body.ondragdrop = new Function("RTE_OnDrop(this);");
    }
    if (strDirection != "" && strDirection != "None") {
        docEditor.dir = strDirection;
    }
    else {
        docEditor.dir = document.dir;
    }
    if (fRestrictedMode && !fFullHtml) {
        docEditor.body.setAttribute(g_strRTERestrictedModeAttributeName, "true");
        docEditor.body.onpaste = new Function("RTE_OnPaste_Restricted('" + strBaseElementID + "', this);");
    }
    if (fSimpleTextOnly) {
        docEditor.body.setAttribute(g_strRTESimpleTextOnlyAttributeName, "true");
    }
    if (fUseDynamicHeightSizing || fUseDynamicWidthSizing) {
        var strFuncCall = "";

        if (fUseDynamicHeightSizing) {
            docEditor.body.style.wordWrap = "break-word";
            docEditor.body.setAttribute(g_strRTEUseDynamicHeightSizing, "true");
            docEditor.body.setAttribute(g_strRTEMinHeightSizeAttributeName, String(iMinHeightSize));
            docEditor.body.setAttribute(g_strRTEMaxHeightSizeAttributeName, String(iMaxHeightSize));
            strFuncCall = "RTE_DocEditor_AdjustHeight('" + strBaseElementID + "');";
        }
        if (fUseDynamicWidthSizing) {
            docEditor.body.style.wordWrap = "normal";
            docEditor.body.setAttribute(g_strRTEUseDynamicWidthSizing, "true");
            docEditor.body.setAttribute(g_strRTEMaxWidthSizeAttributeName, String(iMaxHeightSize));
            docEditor.body.setAttribute(g_strRTEMinWidthSizeAttributeName, String(iMinHeightSize));
            strFuncCall += "RTE_DocEditor_AdjustWidth('" + strBaseElementID + "');";
        }
        var ifmEditor = RTE_GetEditorIFrame(strBaseElementID);

        AttachEvent("keydown", new Function(strFuncCall), docEditor);
        AttachEvent("scroll", new Function(strFuncCall), ifmEditor);
        AttachEvent("load", new Function(strFuncCall), window);
        if (fHookUpEvents) {
            if (fUseDynamicHeightSizing) {
                RTE_DocEditor_AdjustHeight(strBaseElementID);
            }
            if (fUseDynamicWidthSizing) {
                RTE_DocEditor_AdjustWidth(strBaseElementID);
            }
        }
    }
    if (fAllowHyperlink) {
        docEditor.body.setAttribute(g_strRTEAllowHyperlinkAttributeName, "true");
    }
    docEditor.body.setAttribute(g_strRTEBaseElementIDAttributeName, strBaseElementID);
    docEditor.body.setAttribute(g_strRTEWebLocaleAttributeName, strWebLocale);
    g_rgstrRTEAllEditorsInThePage[g_rgstrRTEAllEditorsInThePage.length] = strBaseElementID;
    if (fGenerateToolbar) {
        RTE_DisableToolBar(strBaseElementID);
        var ifmEditorObj = RTE_GetEditorElement(strBaseElementID);

        ifmEditorObj.tabIndex = elemTextArea.tabIndex;
        RTE_ToolBarMnemonicInitialization(strBaseElementID);
    }
}
function RTE_ToolBarMnemonicInitialization(strBaseElementID) {
    var buttons = RTE_GetToolBarDefinition(strBaseElementID);

    if (buttons != null) {
        for (var i = 0; i < buttons.length; i++) {
            var btnDef = buttons[i];

            if (btnDef.strMnemonic != null) {
                var btn = RTE_TB_GetToolBarButton(strBaseElementID, btnDef.strMnemonic);

                btn['toolbarButtonIndex'] = i;
                btn['strBaseElementID'] = strBaseElementID;
            }
        }
    }
}
function RTE_DeleteEditor(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null && typeof instanceVariables.onBeforeUnloadFunc != "undefined" && instanceVariables.onBeforeUnloadFunc != null)
        DetachEvent("beforeunload", instanceVariables.onBeforeUnloadFunc, window);
}
function RTE_DisableToolBar(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.DisableToolBar != "undefined" && overrides.DisableToolBar != null) {
            return overrides.DisableToolBar(strBaseElementID);
        }
    }
    var buttons = RTE_GetToolBarDefinition(strBaseElementID);

    if (buttons != null) {
        for (var i = 0; i < buttons.length; i++) {
            var btnDef = buttons[i];

            if (btnDef.strMnemonic != null) {
                RTE_TB_SetButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, btnDef.strMnemonic));
            }
        }
    }
    return undefined;
}
function RTE_ResetAllToolBarStates(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.ResetAllToolBarStates != "undefined" && overrides.ResetAllToolBarStates != null) {
            return overrides.ResetAllToolBarStates(strBaseElementID);
        }
    }
    var ifmMenu = RTE_DD_GetMenuFrame();

    if (ifmMenu != null && ifmMenu.document == document) {
        return;
    }
    if (browseris.ie55up && RTE_EditorWithTheFocus() != strBaseElementID && RTE_ToolBarButtonWithTheFocus() == null && !RTE_DD_MenuIsOpen() && !g_fRTEDialogIsOpen) {
        RTE_DisableToolBar(strBaseElementID);
        return;
    }
    var aElemChain = RTE_GetCurrentSelectionChain(strBaseElementID);
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var hasActiveSelection = RTE_HasActiveSelection(docEditor);
    var buttons = RTE_GetToolBarDefinition(strBaseElementID);

    if (buttons != null) {
        for (var i = 0; i < buttons.length; i++) {
            var btnDef = buttons[i];

            if (btnDef.enabler != null) {
                btnDef.enabler.SetEnabled(strBaseElementID, docEditor, aElemChain);
            }
        }
    }
}
function RTE_EventHookUp(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    docEditor.body.onkeydown = new Function("RTE_OnKeyDown('" + strBaseElementID + "', this)");
    docEditor.body.onkeyup = new Function("RTE_OnKeyUp('" + strBaseElementID + "', this)");
    docEditor.body.onmouseup = new Function("RTE_OnMouseUp('" + strBaseElementID + "')");
    docEditor.body.onselectstart = new Function("RTE_OnSelectStart('" + strBaseElementID + "', this)");
    docEditor.body.oncontextmenu = new Function("return false");
    (RTE_GetEditorElement(strBaseElementID)).onblur = new Function("RTE_OnBlur('" + strBaseElementID + "');");
    (RTE_GetEditorElement(strBaseElementID)).onfocus = new Function("RTE_OnFocus('" + strBaseElementID + "');");
}
function RTE_TransferTextAreaContentsToIFrame(strBaseElementID) {
    var elemTextArea = RTE_GetEditorTextArea(strBaseElementID);
    var strHtmlToEdit = elemTextArea.innerText;
    var elemSave = document.getElementById(strBaseElementID + "_spSave");

    if (elemSave != null && elemSave.value != "")
        strHtmlToEdit = elemSave.value;
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null == docEditor)
        return;
    if (null == strHtmlToEdit || 0 == strHtmlToEdit.length) {
        strHtmlToEdit = "<div></div>";
    }
    var fPreserveScript = false;
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (variables != null && variables.aSettings != null) {
        fPreserveScript = variables.aSettings.fPreserveScript;
    }
    if (fPreserveScript) {
        strHtmlToEdit = "<body>" + strHtmlToEdit;
    }
    docEditor.body.innerHTML = strHtmlToEdit;
    if (strBaseElementID == g_strRTEEditorFirstFocus) {
        var tr = docEditor.body.createTextRange();

        tr.collapse(true);
        tr.select();
        g_strRTEEditorFirstFocus = null;
    }
}
function RTE_TransferIFrameContentsToTextArea(strBaseElementID) {
    var strHtml, strText;
    var elemTextArea = RTE_GetEditorTextArea(strBaseElementID);
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (null == docEditor)
        return;
    strHtml = docEditor.body.innerHTML;
    var elemSave = document.getElementById(strBaseElementID + "_spSave");

    if (elemSave != null) {
        elemSave.value = strHtml;
        elemTextArea.innerText = "<div></div>";
    }
    else {
        elemTextArea.innerText = strHtml;
    }
}
function RTE_TextAreaWindow_OnLoad(strBaseElementID) {
    ;
    RTE_TransferTextAreaContentsToIFrame(strBaseElementID);
    RTE_SaveSelection(strBaseElementID);
}
function RTE_TextArea_OnFocus(strBaseElementID) {
    ;
    RTE_GiveEditorFocus(strBaseElementID);
}
function RTE_OnFocus(strBaseElementID) {
    ;
    g_strRTETextEditorWithTheFocus = strBaseElementID;
    (RTE_GetEditorDocument(strBaseElementID)).body.contentEditable = true;
    if (g_strRTEPrevTextEditor != null && g_strRTEPrevTextEditor.length > 0 && g_strRTEPrevTextEditor != strBaseElementID) {
        RTE_DisableToolBar(g_strRTEPrevTextEditor);
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_OnBlur(strBaseElementID) {
    ;
    if (typeof document.activeElement != "undefined" && document.activeElement == RTE_DD_GetMenuElement())
        return;
    try {
        RTE_SaveSelection(strBaseElementID);
    }
    catch (e) { }
    g_strRTEPrevTextEditor = g_strRTETextEditorWithTheFocus;
    g_strRTETextEditorWithTheFocus = null;
    RTE_StartResetToolBarTimer(strBaseElementID);
    RTE_DD_CloseMenu();
    if (RTE_ToolBarButtonWithTheFocus() == null && !g_fRTEDialogIsOpen) {
        RTE_DisableToolBar(strBaseElementID);
        RTE_DD_CloseMenu();
    }
}
function RTE_OnDragEnter(elemThis) {
    ;
    var evtThis = (GetParentWindow2(elemThis.ownerDocument)).event;

    if (null != evtThis) {
        evtThis.dataTransfer.dropEffect = "none";
        evtThis.returnValue = false;
    }
}
function RTE_OnDragOver(elemThis) {
    ;
    var evtThis = (GetParentWindow2(elemThis.ownerDocument)).event;

    if (null != evtThis) {
        evtThis.dataTransfer.dropEffect = "none";
        evtThis.returnValue = false;
    }
}
function RTE_OnDrop(elemThis) {
    ;
    var evtThis = (GetParentWindow2(elemThis.ownerDocument)).event;

    if (null != evtThis) {
        evtThis.dataTransfer.dropEffect = "none";
        evtThis.returnValue = false;
    }
}
function RTE_FInterpretTextAsBoolean(strBoolVal) {
    if (strBoolVal.toLowerCase() == "true")
        return true;
    else
        return false;
}
function RTE_OnKeyDown(strBaseElementID, elem) {
    if (RTE_DD_MenuIsOpen()) {
        RTE_DD_OnKeyDown(elem);
        return;
    }
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.OnKeyDown != "undefined" && overrides.OnKeyDown != null) {
            return overrides.OnKeyDown(strBaseElementID);
        }
    }
    RTE_SaveSelection(strBaseElementID);
    var fRestrictedMode = RTE_IsInRestrictedMode(strBaseElementID);
    var fSimpleTextOnly = RTE_IsSimpleTextOnly(strBaseElementID);
    var fAllowHyperlink = RTE_IsHyperlinkAllowed(strBaseElementID);
    var elemDocument = elem.ownerDocument;
    var evtSource = (GetParentWindow2(elemDocument)).event;
    var nKeyCode = evtSource.keyCode;
    var fAltKey = evtSource.altKey;
    var fCtrlKey = evtSource.ctrlKey;
    var fShiftKey = evtSource.shiftKey;
    var fToolbarNavigate = false;
    var btn = null;

    if (browseris.ie5up && !browseris.ie55up && (!fCtrlKey && !fAltKey && !fShiftKey)) {
        switch (nKeyCode) {
        case 9:
            var tr2 = (RTE_GetEditorDocument(strBaseElementID)).body.createTextRange();

            tr2.collapse(true);
            tr2.select();
            break;
        }
    }
    if (!fCtrlKey && !fAltKey && fShiftKey) {
        switch (nKeyCode) {
        case 9:
            (RTE_GetEditorDocument(strBaseElementID)).body.contentEditable = false;
            var tr = (RTE_GetEditorDocument(strBaseElementID)).body.createTextRange();

            tr.collapse(true);
            tr.select();
            break;
        }
    }
    else if (!fCtrlKey && !fAltKey && !fShiftKey) {
        switch (nKeyCode) {
        case 13:
            if (instanceVariables.hoverButton != null) {
                evtSource.returnValue = false;
                btn = instanceVariables.hoverButton.childNodes[0];
                btn.click();
            }
            break;
        }
    }
    else if (fCtrlKey) {
        switch (nKeyCode) {
        case 192:
            fToolbarNavigate = true;
            evtSource.returnValue = RTE_MoveFocusBackwards(strBaseElementID, elemDocument.activeElement);
            break;
        case 49:
            fToolbarNavigate = true;
            evtSource.returnValue = RTE_MoveFocusForwards(strBaseElementID, elemDocument.activeElement);
            break;
        }
        if (Strings.STS.L_BoldKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_BoldShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_BoldAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEBoldMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_SelectAllKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_BoldShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_BoldAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            var docEditor = RTE_GetEditorDocument(strBaseElementID);
            var docTextRange = docEditor.body.createTextRange();

            docTextRange.select();
        }
        else if (Strings.STS.L_ItalicKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_ItalicShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_ItalicAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEItalicMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_UnderlineKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_UnderlineShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_UnderlineAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEUnderlineMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_JustifyLeftKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyLeftShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyLeftAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEJustifyLeftMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_JustifyCenterKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyCenterShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyCenterAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEJustifyCenterMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_JustifyRightKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyRightShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_JustifyRightAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEJustifyRightMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_IndentKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_IndentShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_IndentAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEIndentMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_CreateLinkKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_CreateLinkShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_CreateLinkAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly && (!fRestrictedMode || fAllowHyperlink)) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTECreateLinkMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_SelectFontNameKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectFontNameShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectFontNameAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEFontNameMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_SelectFontSizeKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectFontSizeShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectFontSizeAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEFontSizeMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_InsertTableKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertTableShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertTableAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEInsertTableMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_SplitCellKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_SplitCellShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_SplitCellAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTESplitCellMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_MergeCellKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_MergeCellShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_MergeCellAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEMergeCellMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (parseInt(Strings.STS.L_DeleteColumnKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_DeleteColumnShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_DeleteColumnAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_DeleteColumn(strBaseElementID);
            }
        }
        else if (parseInt(Strings.STS.L_DeleteRowKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_DeleteRowShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_DeleteRowAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_DeleteRow(strBaseElementID);
            }
        }
        else if (Strings.STS.L_InsertCellLeftKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertCellLeftShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertCellLeftAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertCellLeft(strBaseElementID);
            }
        }
        else if (Strings.STS.L_InsertCellRightKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertCellRightShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertCellRightAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertCellRight(strBaseElementID);
            }
        }
        else if (parseInt(Strings.STS.L_InsertColumnLeftKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertColumnLeftShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertColumnLeftAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertColumnLeft(strBaseElementID);
            }
        }
        else if (parseInt(Strings.STS.L_InsertColumnRightKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertColumnRightShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertColumnRightAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertColumnRight(strBaseElementID);
            }
        }
        else if (parseInt(Strings.STS.L_InsertRowAboveKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertRowAboveShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertRowAboveAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertRowAbove(strBaseElementID);
            }
        }
        else if (parseInt(Strings.STS.L_InsertRowBelowKeyCode_TEXT) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertRowBelowShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertRowBelowAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                RTE_InsertRowBelow(strBaseElementID);
            }
        }
        else if (Strings.STS.L_SelectForeColorKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectForeColorShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectForeColorAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEForeColorMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_SelectBackColorKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectBackColorShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_SelectBackColorAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEBackColorMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_UnorderedListKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_UnorderedListShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_UnorderedListAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEUnorderedListMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_OrderedListKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_OrderedListShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_OrderedListAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEOrderedListMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_OutdentKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_OutdentShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_OutdentAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fSimpleTextOnly) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEOutdentMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Strings.STS.L_InsertImageKey_TEXT.charCodeAt(0) == nKeyCode && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertImageShiftKey_TEXT) == fShiftKey && RTE_FInterpretTextAsBoolean(Strings.STS.L_InsertImageAltKey_TEXT) == fAltKey) {
            evtSource.returnValue = false;
            if (!fRestrictedMode) {
                btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTEInsertImageMnemonic)).childNodes[0];
                btn.click();
            }
        }
        else if (Number(Strings.STS.L_LTRKey_VALUE) == nKeyCode && fShiftKey) {
            evtSource.returnValue = false;
            btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTELTRMnemonic)).childNodes[0];
            btn.click();
        }
        else if (Number(Strings.STS.L_RTLKey_VALUE) == nKeyCode && fShiftKey) {
            evtSource.returnValue = false;
            btn = (RTE_TB_GetToolBarButton(strBaseElementID, g_strRTERTLMnemonic)).childNodes[0];
            btn.click();
        }
        else {
            if (browseris.ie55up)
                document.fireEvent('onkeydown', document.createEventObject(evtSource));
        }
    }
    if (!fToolbarNavigate) {
        RTE_TB_RemoveLastToolBarHover(strBaseElementID);
    }
}
function RTE_OnKeyUp(strBaseElementID, elem) {
    ;
    RTE_StartResetToolBarTimer(strBaseElementID);
    var evtSource = (GetParentWindow2(elem.ownerDocument)).event;
    var nKeyCode = evtSource.keyCode;

    if (nKeyCode == 16 || nKeyCode == 17 || nKeyCode == 9)
        RTE_SaveSelection(strBaseElementID);
}
function RTE_OnSelectStart(strBaseElementID, elem) {
    var aChain = RTE_GetCurrentSelectionChain(strBaseElementID);
    var evt = (GetParentWindow2(elem.ownerDocument)).event;

    if (evt.ctrlKey && !evt.shiftKey && RTE_IsElementInChain(aChain, "A")) {
        RTE_ClickLink(strBaseElementID);
    }
}
function RTE_OnMouseUp(strBaseElementID) {
    ;
    RTE_SaveSelection(strBaseElementID);
    RTE_DD_CloseMenu();
    RTE_TB_RemoveLastToolBarHover(strBaseElementID);
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_OnPaste_Restricted(strBaseElementID, elem) {
    ;
    RTE_SaveSelection(strBaseElementID);
    (GetParentWindow2(elem.ownerDocument)).event.returnValue = false;
    RTE_RestoreSelection(strBaseElementID);
    var rngSelection = RTE_GetSelection(strBaseElementID);
    var strFromClipboard = window.clipboardData.getData("Text");

    if (null != rngSelection && null != strFromClipboard) {
        rngSelection.text = strFromClipboard;
    }
}
var g_cRTEResetToolBarTimerQueue;

function RTE_StartResetToolBarTimer(strBaseElementID) {
    if (g_cRTEResetToolBarTimerQueue == null) {
        g_cRTEResetToolBarTimerQueue = [];
    }
    if (g_cRTEResetToolBarTimerQueue[strBaseElementID] == null) {
        g_cRTEResetToolBarTimerQueue[strBaseElementID] = 0;
    }
    ++g_cRTEResetToolBarTimerQueue[strBaseElementID];
    window.setTimeout("RTE_OnResetToolBarTimer(\"" + strBaseElementID + "\")", 200);
}
function RTE_OnResetToolBarTimer(strBaseElementID) {
    ;
    --g_cRTEResetToolBarTimerQueue[strBaseElementID];
    if (0 == g_cRTEResetToolBarTimerQueue[strBaseElementID]) {
        RTE_ResetAllToolBarStates(strBaseElementID);
    }
}
var g_fRTEFirstTimeGenerateCalled;

function RTE_GenerateIFrameEditorHtml(strBaseElementID, elemTextArea, fRestrictedMode, fAllowHyperlink) {
    var aHtmlRet = [];

    if (g_fRTEFirstTimeGenerateCalled) {
        g_fRTEFirstTimeGenerateCalled = false;
        aHtmlRet.push("<iframe id=\"");
        aHtmlRet.push(g_strRTETextEditorPullDownMenuID);
        aHtmlRet.push("\"  src=\"");
        aHtmlRet.push(RTE_GetServerRelativeUnlocalizedImageUrl("blank.gif"));
        aHtmlRet.push("\" class=\"");
        aHtmlRet.push(g_strRTEToolbarClassName);
        aHtmlRet.push("\" tabindex=\"-1\" style=\"display:none; position:absolute;\" ");
        aHtmlRet.push(g_strRTEBaseElementIDAttributeName);
        aHtmlRet.push("=\"x\" ");
        aHtmlRet.push(g_strRTEWebLocaleAttributeName);
        aHtmlRet.push("=\"x\" ");
        aHtmlRet.push(g_strRTEButtonMnemonicAttributeName);
        aHtmlRet.push("=\"x\"></iframe>");
        insertAdjacentHTML(document.body, "afterBegin", "<div style=\"position:absolute;width:0px;height:0px;\"><object id=\"RTEDialogHelper\" name=\"RTEDialogHelper\" classid=\"clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b\" style=\"width:0px; height:0px;\" tabindex=\"-1\"></object></div>");
    }
    var strWidthNameAndAttribute = "";
    var strHeightNameAndAttribute = "";
    var strClassNameAndAttribute = "";
    var cRows = Number(elemTextArea.getAttribute("rows"));

    if (fRestrictedMode && Number.NaN != cRows && cRows > 0) {
        strWidthNameAndAttribute = "";
        strHeightNameAndAttribute = " height=\"" + String(cRows * g_iLineHeight) + "\"";
        if (fAllowHyperlink) {
            strClassNameAndAttribute = " class=\"ms-rtelonger\"";
        }
        else {
            strClassNameAndAttribute = " class=\"ms-rtelong\"";
        }
    }
    else {
        var cols = elemTextArea['cols'];
        var rows = elemTextArea['rows'];

        strWidthNameAndAttribute = " width=\"" + String(g_iCharWidth * cols) + "\"";
        strHeightNameAndAttribute = " height=\"" + String(g_iLineHeight * rows) + "\"";
        strClassNameAndAttribute = "";
    }
    aHtmlRet.push("<div><iframe ");
    aHtmlRet.push(strWidthNameAndAttribute);
    aHtmlRet.push(strHeightNameAndAttribute);
    aHtmlRet.push(strClassNameAndAttribute);
    aHtmlRet.push(" id=\"");
    aHtmlRet.push(RTE_GetEditorIFrameID(strBaseElementID));
    aHtmlRet.push("\" title=\"");
    aHtmlRet.push(Strings.STS.L_EditorIFrameTitle_TEXT);
    aHtmlRet.push("\" src=\"");
    aHtmlRet.push(RTE_GetServerRelativeUnlocalizedImageUrl("blank.gif"));
    aHtmlRet.push("\"></iframe></div>");
    return aHtmlRet.join("");
}
function RTE_TB_GenerateToolbarButtonOnclickScript(strBaseElementID, strButtonMnemonic, strOnClickJScriptFunction, strOnClickArg) {
    var strJs = "if (!(RTE_TB_GetToolBarButton('" + strBaseElementID + "', '" + strButtonMnemonic + "').disabled)) { ";

    strJs += strOnClickJScriptFunction + "('" + strBaseElementID + "'";
    if (strOnClickArg != null)
        strJs += ", " + strOnClickArg;
    strJs += "); }";
    return strJs;
}
function RTE_TB_GenerateSimpleToolBarButtonHtmlCluster(strBaseElementID, strButtonMnemonic, strOnClickJScriptFunction, strOnClickArg, strClusterUrl, strImageClass, strToolTip) {
ULSglM:
    ;
    return RTE_TB_GenerateToolBarButtonHtmlCluster(strBaseElementID, strButtonMnemonic, RTE_TB_GenerateToolbarButtonOnclickScript(strBaseElementID, strButtonMnemonic, strOnClickJScriptFunction, strOnClickArg), strClusterUrl, strImageClass, strToolTip);
}
function RTE_TB_GenerateSimpleToolBarButtonHtml(strBaseElementID, strButtonMnemonic, strOnClickJScriptFunction, strOnClickArg, strImageUrl, strText, strToolTip) {
    return RTE_TB_GenerateToolBarButtonHtml(strBaseElementID, strButtonMnemonic, RTE_TB_GenerateToolbarButtonOnclickScript(strBaseElementID, strButtonMnemonic, strOnClickJScriptFunction, strOnClickArg), strImageUrl, strText, strToolTip);
}
function RTE_GenerateFontNameToolBarButtonHtml(strBaseElementID, strWebLanguage, fRestrictedMode, fShowImageWithDropArrow) {
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEFontNameMnemonic, "RTE_SaveSelection('" + strBaseElementID + "'); RTE_DD_OpenFontNameOrSizeSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "', true)");
    if (fRestrictedMode || fShowImageWithDropArrow) {
        strHtmlRet += "<div class='clip16x16'><img class='ms-rtefnt' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_FontNameToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div>";
        if (fShowImageWithDropArrow) {
            strHtmlRet += "<img alt=\"" + Strings.STS.L_FontSizeToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
        }
    }
    else {
        strHtmlRet += "<label style=\"margin-left: 2px; margin-right: 2px;\">" + Strings.STS.L_FontNameLabel_TEXT + "</label>&nbsp;<div class='clip13x13'><img class='ms-rtednar' alt=\"" + Strings.STS.L_FontNameToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" border=\"0\" unselectable=\"on\"></div>";
    }
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_GenerateFontSizeToolBarButtonHtml(strBaseElementID, strWebLanguage, fRestrictedMode, fShowImageWithDropArrow) {
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEFontSizeMnemonic, "RTE_SaveSelection('" + strBaseElementID + "'); RTE_DD_OpenFontNameOrSizeSelector('" + strBaseElementID + "', '" + strWebLanguage + "', false)");
    if (fRestrictedMode || fShowImageWithDropArrow) {
        strHtmlRet += "<div class='clip16x16'><img class='ms-rtefntsz' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_FontSizeToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div>";
        if (fShowImageWithDropArrow) {
            strHtmlRet += "<img alt=\"" + Strings.STS.L_FontSizeToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
        }
    }
    else {
        strHtmlRet += "<label style=\"margin-left: 2px; margin-right: 2px;\">" + Strings.STS.L_FontSizeLabel_TEXT + "</label>&nbsp;<div class='clip13x13'><img class='ms-rtednar' alt=\"" + Strings.STS.L_FontSizeToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" border=\"0\" unselectable=\"on\"></div>";
    }
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_GenerateForeColorToolBarButtonHtml(strBaseElementID, strWebLanguage) {
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEForeColorMnemonic);
    strHtmlRet += "<a tabindex=\"-1\" href=\"#\" onfocus=\"RTE_TB_OnFocus('" + strBaseElementID + "', this);\" onblur=\"RTE_TB_OnBlur('" + strBaseElementID + "', this);\" onclick=\"RTE_DD_OpenForeColorSelector('" + strBaseElementID + "', '" + strWebLanguage + "'); return false;\" unselectable=\"on\">" + "<div class='clip16x16'><img class='ms-rtetxclr' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_ForeColorToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div></a>";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function ToolBarSettings_InitializePrototype() {
ULSglM:
    ;
    ToolBarSettings.prototype.fRestrictedMode = undefined;
    ToolBarSettings.prototype.fAllowHyperlink = undefined;
    ToolBarSettings.prototype.fIsVisible = undefined;
    ToolBarSettings.prototype.urlWebRoot = undefined;
    ToolBarSettings.prototype.fAllowRelativeLinks = undefined;
    ToolBarSettings.prototype.fPreserveScript = undefined;
}
function ToolBarSettings() {
}
function RTE_GenerateToolBarHtml(strBaseElementID, strWebLanguage, elemTextArea, fRestrictedMode, fAllowHyperlink, fIsVisible) {
    var aSettings = new ToolBarSettings();

    aSettings.fRestrictedMode = fRestrictedMode;
    aSettings.fAllowHyperlink = fAllowHyperlink;
    aSettings.fIsVisible = fIsVisible;
    RTE_GenerateToolBarHtmlFromSettings(strBaseElementID, strWebLanguage, elemTextArea, aSettings);
}
function RTE_GenerateToolBarHtmlFromSettings(strBaseElementID, strWebLanguage, elemTextArea, aSettings) {
    var strClassAttribute = " class=\"" + g_strRTEToolbarClassName + "\" ";
    var strWidthAttribute = " width=\"" + elemTextArea.currentStyle.width + "\" ";
    var strDisplayStyle = aSettings.fIsVisible ? " style=\"border:solid 1px #c4c4c4;\"" : " style=\"display:none;\" ";

    if (aSettings.fRestrictedMode) {
        if (aSettings.fAllowHyperlink) {
            strClassAttribute = " class=\"" + g_strRTEToolbarClassName + " ms-longer\" ";
        }
        else {
            strClassAttribute = " class=\"" + g_strRTEToolbarClassName + " ms-long\" ";
        }
        strWidthAttribute = "";
    }
    var aHtmlRet = [];

    aHtmlRet.push("<table cellpadding='0' cellspacing='0' id='");
    aHtmlRet.push(strBaseElementID);
    aHtmlRet.push("_toolbar' ");
    aHtmlRet.push(strClassAttribute);
    aHtmlRet.push(strWidthAttribute);
    aHtmlRet.push(strDisplayStyle);
    aHtmlRet.push("><tr><td><table cellspacing='0' cellpadding='0' border='0'><tr>");
    var buttons = RTE_GetToolBarDefinition(strBaseElementID, strWebLanguage);

    if (buttons != null) {
        for (var i = 0; i < buttons.length; i++) {
            var btnDef = buttons[i];

            aHtmlRet.push(btnDef.Generate(strBaseElementID, strWebLanguage));
        }
    }
    aHtmlRet.push("</tr></table></td></tr></table>");
    return aHtmlRet.join("");
}
function RTE_GenerateBackColorToolBarButtonHtml(strBaseElementID, strWebLanguage) {
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEBackColorMnemonic);
    strHtmlRet += "<a tabindex=\"-1\" href=\"#\" onfocus=\"RTE_TB_OnFocus('" + strBaseElementID + "', this);\" onblur=\"RTE_TB_OnBlur('" + strBaseElementID + "', this);\" onclick=\"RTE_DD_OpenBackColorSelector('" + strBaseElementID + "', '" + strWebLanguage + "'); return false;\" unselectable=\"on\">" + "<div class='clip16x16'><img class='ms-rtebkclr' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_BackColorToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div></a>";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_InsertTable(strBaseElementID) {
    var tableOpts = RTE_ModalDialog(strBaseElementID, 'InsertTable', g_RTE_Dialog_Width, g_RTE_Dialog_Height, null);

    if (tableOpts != null) {
        var cols = tableOpts[0];
        var rows = tableOpts[1];
        var tableHtml = '<table style="display: inline; font-size: 1em; border-collapse: collapse" border="1">';

        for (var i = 0; i < rows; ++i) {
            tableHtml += '<tr>';
            for (var j = 0; j < cols; ++j) {
                tableHtml += '<td style="vertical-align:TOP;" class="ms-rtetablecells"><div></div></td>';
            }
            tableHtml += "</tr>";
        }
        tableHtml += "</table>";
        (RTE_GetSelection(strBaseElementID)).pasteHTML(tableHtml);
        if (RTE_UseDynamicHeightSizing(strBaseElementID)) {
            RTE_DocEditor_AdjustHeight(strBaseElementID);
        }
    }
}
function RTE_CreateLink(strBaseElementID) {
    RTE_SaveSelection(strBaseElementID);
    var fAllowRelativeLinks = false;
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (variables != null && variables.aSettings != null) {
        fAllowRelativeLinks = variables.aSettings.fAllowRelativeLinks;
    }
    var dialogArgs = [];

    dialogArgs.text = (RTE_GetCurrentSelectionRange(strBaseElementID)).text;
    dialogArgs.allowRelativeLinks = fAllowRelativeLinks;
    var opts = RTE_ModalDialog(strBaseElementID, 'CreateLink', g_RTE_Dialog_Width, g_RTE_Dialog_Height, dialogArgs);

    if (opts != null) {
        var href = STSHtmlEncode(opts[1]);
        var text = STSHtmlEncode(opts[0]);

        if (IsSafeHrefAlert(href, fAllowRelativeLinks)) {
            (RTE_GetSelection(strBaseElementID)).pasteHTML('<a href="' + href + '">' + text + '</a>');
        }
    }
}
function RTE_ClickLink(strBaseElementID) {
    if (g_fRestoreSelection) {
        return;
    }
    RTE_SaveSelection(strBaseElementID);
    var aChain = RTE_GetCurrentSelectionChain(strBaseElementID);
    var aElem = null;

    for (var iChain = 0; iChain < aChain.length; iChain++) {
        aElem = aChain[iChain];
        if (aElem.tagName == "A") {
            open(aElem.href);
            break;
        }
    }
}
function RTE_InsertImage(strBaseElementID) {
    RTE_SaveSelection(strBaseElementID);
    var opts = RTE_ModalDialog(strBaseElementID, 'InsertImage', g_RTE_Dialog_Width, g_RTE_Dialog_Height, null);

    if (opts != null) {
        var href = STSHtmlEncode(opts[0]);
        var altText = STSHtmlEncode(opts[1]);
        var fAllowRelativeLinks = false;
        var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

        if (variables != null && variables.aSettings != null) {
            fAllowRelativeLinks = variables.aSettings.fAllowRelativeLinks;
        }
        if (IsSafeHrefAlert(href, fAllowRelativeLinks)) {
            var imgHtml = '<img src="' + href + '" alt="' + altText + '">';

            (RTE_GetSelection(strBaseElementID)).pasteHTML(imgHtml);
        }
        if (RTE_UseDynamicHeightSizing(strBaseElementID)) {
            RTE_DocEditor_AdjustHeight(strBaseElementID);
        }
    }
}
function RTE_HtmlSource(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var currentContent = [];

    currentContent.value = docEditor.body.innerHTML;
    currentContent.dir = docEditor.dir;
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    docEditor.body.innerHTML = window.showModalDialog(variables.aSettings.urlWebRoot + "/_layouts/15/zoombldr.aspx", currentContent, 'dialogHeight: 550px; dialogWidth:500px; help: no; status:no; ' + 'resizable: yes');
    var docTextRange = docEditor.body.createTextRange();

    docTextRange.select();
    docTextRange.scrollIntoView(false);
    if (RTE_UseDynamicHeightSizing(strBaseElementID)) {
        RTE_DocEditor_AdjustHeight(strBaseElementID);
    }
}
function RTE_GenerateInsertTableElementToolBarButtonHtml(strBaseElementID, strWebLanguage) {
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    variables.functions[g_strRTEInsertRowAbove] = RTE_InsertRowAbove;
    variables.functions[g_strRTEInsertRowBelow] = RTE_InsertRowBelow;
    variables.functions[g_strRTEInsertColumnLeft] = RTE_InsertColumnLeft;
    variables.functions[g_strRTEInsertColumnRight] = RTE_InsertColumnRight;
    variables.functions[g_strRTEInsertCellLeft] = RTE_InsertCellLeft;
    variables.functions[g_strRTEInsertCellRight] = RTE_InsertCellRight;
    return RTE_GenerateTableToolBarButtonHtml(strBaseElementID, strWebLanguage, g_strRTEInsertTableElementMnemonic, Strings.STS.L_InsertTableElementToolTip_TEXT, "rteirow");
}
function RTE_GenerateDeleteTableElementToolBarButtonHtml(strBaseElementID, strWebLanguage) {
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    variables.functions[g_strRTEDeleteRow] = RTE_DeleteRow;
    variables.functions[g_strRTEDeleteColumn] = RTE_DeleteColumn;
    return RTE_GenerateTableToolBarButtonHtml(strBaseElementID, strWebLanguage, g_strRTEDeleteTableElementMnemonic, Strings.STS.L_DeleteTableElementToolTip_TEXT, "rtedrow");
}
function RTE_GenerateTableToolBarButtonHtml(strBaseElementID, strWebLanguage, strMnemonic, strToolTip, strClusteredImageName) {
    var strHtmlRet = RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, strMnemonic) + "<a tabindex=\"-1\" href=\"#\" " + "onfocus=\"RTE_TB_OnFocus('" + strBaseElementID + "', this);\" " + "onblur=\"RTE_TB_OnBlur('" + strBaseElementID + "', this);\" " + "onclick=\"RTE_DD_OpenTableOperationSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "', '" + strMnemonic + "'); return false;\" " + "title=\"" + strToolTip + "\" " + "style=\"margin-left: 2px; margin-right: 2px;\" unselectable=\"on\">" + "<div class='clip16x16'><img class='ms-" + strClusteredImageName + "'src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + strToolTip + "\" border=\"0\" unselectable=\"on\"></div>" + "<img alt=\"" + strToolTip + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\"></a>" + RTE_TB_GenerateCloseCellButtonHtml();

    return strHtmlRet;
}
function RTE_DD_OpenTableOperationSelector(strBaseElementID, strWebLanguage, strMnemonic) {
    var rgoMenuInfo = RTE_DD_GetTableOperationSelectorUnformattedHtml(strBaseElementID, strWebLanguage, strMnemonic);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_InsertItemAndGenerateScript(strBaseElementID, iItem, strCommand, strLabel, rgstrItemNames, strWebLanguage) {
    rgstrItemNames[iItem] = strLabel;
    return RTE_DD_GenerateMenuItemScriptHtml(1, iItem, "RTE_DD_StartAction('" + strCommand + "', '" + strBaseElementID + "')", rgstrItemNames[iItem], rgstrItemNames[iItem], null, null, strWebLanguage);
}
function RTE_DD_GetTableOperationSelectorUnformattedHtml(strBaseElementID, strWebLanguage, strMnemonic) {
    var strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var rgstrItemNames = [];

    switch (strMnemonic) {
    case g_strRTEInsertTableElementMnemonic:
        {
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 0, g_strRTEInsertRowAbove, Strings.STS.L_InsertRowAboveLabel_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 1, g_strRTEInsertRowBelow, Strings.STS.L_InsertRowBelowLabel_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 2, g_strRTEInsertColumnLeft, Strings.STS.L_InsertColumnLeftLabel_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 3, g_strRTEInsertColumnRight, Strings.STS.L_InsertColumnRightLabel_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 4, g_strRTEInsertCellLeft, Strings.STS.L_InsertCellLeftLabel_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 5, g_strRTEInsertCellRight, Strings.STS.L_InsertCellRightLabel_TEXT, rgstrItemNames, strWebLanguage);
            break;
        }
    case g_strRTEDeleteTableElementMnemonic:
        {
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 0, g_strRTEDeleteRow, Strings.STS.L_DeleteRowToolTip_TEXT, rgstrItemNames, strWebLanguage);
            strMenuHtml += RTE_DD_InsertItemAndGenerateScript(strBaseElementID, 1, g_strRTEDeleteColumn, Strings.STS.L_DeleteColumnToolTip_TEXT, rgstrItemNames, strWebLanguage);
            break;
        }
    }
    var cMenuItems = rgstrItemNames.length;

    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    return new [strMenuHtml, cMenuItems];
}
function RTE_MoveFocus(strBaseElementID, elemStart, offset) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (RTE_HasActiveSelection(docEditor)) {
        var selection = RTE_GetCurrentSelection(strBaseElementID);

        if (selection.type == "Control") {
            return true;
        }
    }
    var buttons = RTE_GetToolBarDefinition(strBaseElementID);
    var newIndex = 0;

    if (instanceVariables.hoverButton == null) {
        if (offset == -1 && buttons != null) {
            newIndex = buttons.length - 1;
        }
        else {
            newIndex = 0;
        }
    }
    else {
        newIndex = instanceVariables.hoverButton['toolbarButtonIndex'] + offset;
    }
    while (true) {
        if (newIndex < 0 || newIndex == buttons.length) {
            RTE_TB_RemoveLastToolBarHover(strBaseElementID);
            var selection2 = RTE_GetCurrentSelection(strBaseElementID);
            var textRange = selection2.createRange();

            textRange.collapse();
            textRange.select();
            return true;
        }
        var button = buttons[newIndex];

        if (button.strMnemonic != null) {
            var toolBarButton = RTE_TB_GetToolBarButton(strBaseElementID, button.strMnemonic);

            if (toolBarButton != null && !toolBarButton.disabled && RTE_IsVisible(toolBarButton)) {
                RTE_TB_OnMouseOver(toolBarButton);
                return false;
            }
        }
        if (offset < 0) {
            newIndex--;
        }
        else {
            newIndex++;
        }
    }
    return false;
}
function RTE_IsVisible(element) {
    if (element == null)
        return true;
    if (element.currentStyle.visibility == 'inherit') {
        return RTE_IsVisible(element.parentNode);
    }
    else if (element.currentStyle.visibility == 'hidden') {
        return false;
    }
    return true;
}
function RTE_TB_RemoveLastToolBarHover(strBaseElementID) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables.hoverButton != null) {
        RTE_TB_OnMouseOut(instanceVariables.hoverButton);
    }
}
function RTE_TB_SetLastToolBarHover(strBaseElementID, elemButton) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    instanceVariables.hoverButton = elemButton;
}
function RTE_MoveFocusBackwards(strBaseElementID, elemStart) {
    return RTE_MoveFocus(strBaseElementID, elemStart, -1);
}
function RTE_MoveFocusForwards(strBaseElementID, elemStart) {
    return RTE_MoveFocus(strBaseElementID, elemStart, 1);
}
function RTE_ExecuteCommandOnSelection(strBaseElementID, strCommand, fUserInterface, strValue) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    RTE_RestoreSelection(strBaseElementID);
    if (strCommand == g_strRTECreateLinkMnemonic || strCommand == g_strRTEInsertImageMnemonic) {
        g_fRTEDialogIsOpen = true;
    }
    docEditor.execCommand(strCommand, fUserInterface, strValue);
    if (g_fRTEDialogIsOpen) {
        g_fRTEDialogIsOpen = false;
        RTE_OnFocus(strBaseElementID);
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
    var fUseDynamicHeightSizing = RTE_UseDynamicHeightSizing(strBaseElementID);

    if (fUseDynamicHeightSizing) {
        RTE_DocEditor_AdjustHeight(strBaseElementID);
    }
}
function RTE_ExecuteFunctionOnSelection(strBaseElementID, strFunctionName, strParameter) {
ULSglM:
    ;
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    RTE_RestoreSelection(strBaseElementID);
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);
    var functionToExecute = instanceVariables.functions[strFunctionName];

    if (functionToExecute != null) {
        functionToExecute(strParameter);
        if (g_fRTEDialogIsOpen) {
            g_fRTEDialogIsOpen = false;
            RTE_OnFocus(strBaseElementID);
        }
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_SetDirectionOfSelection(strBaseElementID, strDirection) {
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.SetDirectionOfSelection != "undefined" && overrides.SetDirectionOfSelection) {
            overrides.SetDirectionOfSelection(strBaseElementID, strDirection);
            return;
        }
    }
    RTE_SaveSelection(strBaseElementID);
    var rngSelection = RTE_GetSelection(strBaseElementID);

    RTE_RestoreSelection(strBaseElementID);
    var strTagNames;

    strTagNames = "|H1|H2|H3|H4|H5|H6|P|PRE|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|BODY|TR|UL|OL|";
    if (null != rngSelection.parentElement()) {
        var elemSelectionParent = rngSelection.parentElement();

        while (elemSelectionParent != null && strTagNames.indexOf("|" + elemSelectionParent.tagName + "|") == -1) {
            elemSelectionParent = elemSelectionParent.parentNode;
        }
        if (null != elemSelectionParent) {
            RTE_SetDirectionOnElement(elemSelectionParent, strDirection);
        }
    }
    else {
        var rngLength = rngSelection.length;

        for (var i = 0; i < rngLength; ++i) {
            var elemCurrent = rngSelection.item(i);

            if (elemCurrent != null && strTagNames.indexOf("|" + elemCurrent.tagName + "|") != -1) {
                RTE_SetDirectionOnElement(elemCurrent, strDirection);
            }
        }
    }
}
function RTE_SetDirectionOnElement(element, strDirection) {
    if ("ltr" == strDirection) {
        element.dir = "ltr";
        element.align = "left";
    }
    else if ("rtl" == strDirection) {
        element.dir = "rtl";
        element.align = "right";
    }
}
function RTE_GetDirectionOfSelection(strBaseElementID) {
    var rngSelection = RTE_GetSelection(strBaseElementID);

    if (!(null != rngSelection)) {
        return "";
    }
    return RTE_GetDirectionOfSelectionParent(rngSelection.parentElement());
}
function RTE_GetDirectionOfSelectionParent(elemSelectionParent) {
    var direction = "";
    var strTagNames = "|H1|H2|H3|H4|H5|H6|P|PRE|LI|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|TR|UL|OL|BODY|HTML|";

    while (elemSelectionParent != null && (strTagNames.indexOf("|" + elemSelectionParent.tagName + "|") == -1 || elemSelectionParent.dir != "ltr" && elemSelectionParent.dir != "rtl")) {
        elemSelectionParent = elemSelectionParent.parentNode;
    }
    if (null != elemSelectionParent) {
        if (elemSelectionParent.dir == "ltr") {
            direction = "ltr";
        }
        else if (elemSelectionParent.dir == "rtl") {
            direction = "rtl";
        }
    }
    return direction;
}
var g_strRTEToolBarButtonWithTheFocus;

function RTE_ToolBarButtonWithTheFocus() {
ULSglM:
    ;
    return g_strRTEToolBarButtonWithTheFocus;
}
var g_aToolBarButtons;

function RTE_TB_GetToolBarButton(strBaseElementID, strButtonMnemonic) {
    if (g_aToolBarButtons == null) {
        g_aToolBarButtons = [];
    }
    var elemToolBarButton = g_aToolBarButtons[strBaseElementID + "_" + strButtonMnemonic];

    if (elemToolBarButton == null) {
        elemToolBarButton = document.getElementById(strBaseElementID + "_" + strButtonMnemonic);
        g_aToolBarButtons[strBaseElementID + "_" + strButtonMnemonic] = elemToolBarButton;
    }
    return elemToolBarButton;
}
function RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, strButtonMnemonic, strOnClickJScript, strTooltip) {
    var aHtmlRet = [];

    aHtmlRet.push("<td class=\"");
    aHtmlRet.push(g_strRTEToolbarClassName);
    aHtmlRet.push("\" unselectable=\"on\"><table cellpadding=\"1\" cellspacing=\"0\" border=\"0\" unselectable=\"on\"><tr unselectable=\"on\"><td class=\"");
    aHtmlRet.push(g_strRTEToolbarClassName);
    aHtmlRet.push(" ");
    aHtmlRet.push(g_strRTEUnselectedClassName);
    aHtmlRet.push("\" nowrap id=\"");
    aHtmlRet.push(strBaseElementID);
    aHtmlRet.push("_");
    aHtmlRet.push(strButtonMnemonic);
    aHtmlRet.push("\" onmouseover=\"RTE_TB_OnMouseOver(this);\" onmouseout=\"RTE_TB_OnMouseOut(this);\"");
    if (strOnClickJScript != null) {
        aHtmlRet.push(" onclick=\"RTE_DD_CloseMenu();");
        aHtmlRet.push(strOnClickJScript);
        aHtmlRet.push("\"");
    }
    if (strTooltip != null) {
        aHtmlRet.push(" title=\"");
        aHtmlRet.push(strTooltip);
        aHtmlRet.push("\"");
    }
    aHtmlRet.push("unselectable=\"on\">");
    return aHtmlRet.join("");
}
function RTE_TB_GenerateCloseCellButtonHtml() {
ULSglM:
    ;
    return "</td></tr></table></td>";
}
function RTE_TB_GenerateToolBarSeparatorHtml() {
ULSglM:
    ;
    return "<td class=\"ms-separator\" unselectable=\"on\">|</td>";
}
function RTE_TB_GenerateToolBarLineBreakHtml() {
ULSglM:
    ;
    return "</tr></table></td></tr><tr unselectable=\"on\"><td unselectable=\"on\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" unselectable=\"on\"><tr unselectable=\"on\">";
}
function RTE_TB_GenerateToolBarButtonHtmlCluster(strBaseElementID, strButtonMnemonic, strOnClickJScript, strClusterUrl, strImageClass, strToolTip) {
    var aHtmlRet = [];

    aHtmlRet.push(RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, strButtonMnemonic, strOnClickJScript, strToolTip));
    if (0 < strClusterUrl.length) {
        aHtmlRet.push("<div class='clip16x16'><img border='0' class=\"");
        aHtmlRet.push(strImageClass);
        aHtmlRet.push("\" src=\"");
        aHtmlRet.push(strClusterUrl);
        aHtmlRet.push("\" alt=\"");
        aHtmlRet.push(strToolTip);
        aHtmlRet.push("\" unselectable=\"on\"></div>");
    }
    aHtmlRet.push(RTE_TB_GenerateCloseCellButtonHtml());
    return aHtmlRet.join("");
}
function RTE_TB_GenerateToolBarButtonHtml(strBaseElementID, strButtonMnemonic, strOnClickJScript, strImageUrl, strText, strToolTip) {
    var aHtmlRet = [];

    aHtmlRet.push(RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, strButtonMnemonic, strOnClickJScript, strToolTip));
    if (0 < strImageUrl.length) {
        aHtmlRet.push("<img border=\"0\" width=\"16\" height=\"16\" src=\"");
        aHtmlRet.push(strImageUrl);
        aHtmlRet.push("\" alt=\"");
        aHtmlRet.push(strToolTip);
        aHtmlRet.push("\" unselectable=\"on\">");
    }
    if (0 < strText.length) {
        aHtmlRet.push(" ");
        aHtmlRet.push(strText);
    }
    aHtmlRet.push(RTE_TB_GenerateCloseCellButtonHtml());
    return aHtmlRet.join("");
}
function RTE_TB_GenerateExecCommandToolBarButtonScript(strBaseElementID, strCommand, fUserInterface, fOnlyIfSelectionActive, strValueExpression, strBeforeExecJScript, strAfterExecJScript) {
    var aOnClickJScript = [];

    aOnClickJScript.push("RTE_DD_CloseMenu();");
    if (fOnlyIfSelectionActive) {
        aOnClickJScript.push("var sel = RTE_GetEditorDocument('");
        aOnClickJScript.push(strBaseElementID);
        aOnClickJScript.push("').selection; if ((null != sel) && ('None' != sel.type)) { ");
    }
    aOnClickJScript.push("RTE_SaveSelection('" + strBaseElementID + "');");
    aOnClickJScript.push("var argValue = ");
    aOnClickJScript.push(strValueExpression);
    aOnClickJScript.push(";");
    if (strValueExpression != "null") {
        aOnClickJScript.push("if (argValue != null) { ");
    }
    if (null != strBeforeExecJScript) {
        aOnClickJScript.push(strBeforeExecJScript);
    }
    aOnClickJScript.push("RTE_ExecuteCommandOnSelection('");
    aOnClickJScript.push(strBaseElementID);
    aOnClickJScript.push("', '");
    aOnClickJScript.push(strCommand);
    aOnClickJScript.push("', ");
    aOnClickJScript.push(fUserInterface);
    aOnClickJScript.push(", argValue);");
    if (null != strAfterExecJScript)
        aOnClickJScript.push(strAfterExecJScript);
    if (strValueExpression != "null") {
        aOnClickJScript.push("}");
    }
    if (fOnlyIfSelectionActive) {
        aOnClickJScript.push("}");
    }
    return aOnClickJScript.join("");
}
function RTE_TB_GenerateExecCommandToolBarButtonHtml(strBaseElementID, strCommand, fUserInterface, strImageUrl, strText, strToolTip, fOnlyIfSelectionActive, strValueExpression, strBeforeExecJScript, strAfterExecJScript) {
    var strOnClickJScript = RTE_TB_GenerateExecCommandToolBarButtonScript(strBaseElementID, strCommand, fUserInterface, fOnlyIfSelectionActive, strValueExpression, strBeforeExecJScript, strAfterExecJScript);

    return RTE_TB_GenerateToolBarButtonHtml(strBaseElementID, strCommand, strOnClickJScript, strImageUrl, strText, strToolTip);
}
function RTE_TB_GenerateExecCommandToolBarButtonHtmlCluster(strBaseElementID, strCommand, fUserInterface, strClusterUrl, strImageClass, strToolTip, fOnlyIfSelectionActive, strValueExpression) {
    var strOnClickJScript = RTE_TB_GenerateExecCommandToolBarButtonScript(strBaseElementID, strCommand, fUserInterface, fOnlyIfSelectionActive, strValueExpression);

    return RTE_TB_GenerateToolBarButtonHtmlCluster(strBaseElementID, strCommand, strOnClickJScript, strClusterUrl, strImageClass, strToolTip);
}
function RTE_TB_SetButtonCheck(elemButton) {
    elemButton.className = RTE_RemoveClassFromClassList(elemButton.className, g_strRTEUnselectedClassName);
    elemButton.className = RTE_AddClassToClassList(elemButton.className, g_strRTESelectedClassName);
}
function RTE_TB_ClearButtonCheck(elemButton) {
    elemButton.className = RTE_RemoveClassFromClassList(elemButton.className, g_strRTESelectedClassName);
    elemButton.className = RTE_AddClassToClassList(elemButton.className, g_strRTEUnselectedClassName);
}
function RTE_TB_SetButtonDisabled(elemButton) {
    elemButton.className = RTE_AddClassToClassList(elemButton.className, g_strRTEDisabledClassName);
    elemButton.disabled = true;
    var elemChildLink = elemButton.childNodes[0];

    if (elemChildLink != null && elemChildLink.tagName == "A") {
        elemChildLink.disabled = true;
    }
}
function RTE_TB_ClearButtonDisabled(elemButton) {
    elemButton.disabled = false;
    var elemChildLink = elemButton.childNodes[0];

    if (elemChildLink != null && elemChildLink.tagName == "A") {
        elemChildLink.disabled = false;
    }
    elemButton.className = RTE_RemoveClassFromClassList(elemButton.className, g_strRTEDisabledClassName);
}
function RTE_TB_SetButtonHover(elemButton) {
    RTE_TB_RemoveLastToolBarHover(elemButton['strBaseElementID']);
    RTE_TB_SetLastToolBarHover(elemButton['strBaseElementID'], elemButton);
    elemButton.className = RTE_AddClassToClassList(elemButton.className, g_strRTEHoverClassName);
}
function RTE_TB_ClearButtonHover(elemButton) {
    RTE_TB_SetLastToolBarHover(elemButton['strBaseElementID'], null);
    elemButton.className = RTE_RemoveClassFromClassList(elemButton.className, g_strRTEHoverClassName);
}
function RTE_TB_SetCheckFromCommandValue(strBaseElementID, docEditor, strCommand) {
    var btn = RTE_TB_GetToolBarButton(strBaseElementID, strCommand);

    if (typeof docEditor.queryCommandSupported != "undefined" && typeof docEditor.queryCommandValue != "undefined" && docEditor.queryCommandSupported(strCommand) && docEditor.queryCommandValue(strCommand)) {
        RTE_TB_SetButtonCheck(btn);
    }
    else {
        RTE_TB_ClearButtonCheck(btn);
    }
}
function RTE_TB_SetCheckForDirectionButton(strBaseElementID, strCommand) {
    var btn = RTE_TB_GetToolBarButton(strBaseElementID, strCommand);

    if (RTE_GetDirectionOfSelection(strBaseElementID) == "ltr" && strCommand == g_strRTELTRMnemonic || RTE_GetDirectionOfSelection(strBaseElementID) == "rtl" && strCommand == g_strRTERTLMnemonic) {
        RTE_TB_SetButtonCheck(btn);
    }
    else {
        RTE_TB_ClearButtonCheck(btn);
    }
}
function RTE_HasActiveSelection(docEditor) {
    var fSelectionTestResults = true;
    var sel = null;

    sel = docEditor.selection;
    if (null == sel || 'none' == sel.type) {
        fSelectionTestResults = false;
    }
    else {
        var rngSel = sel.createRange();

        if (rngSel != null) {
            var rngSelText = rngSel.text;

            if (rngSelText != null && 0 >= rngSelText.length) {
                fSelectionTestResults = false;
            }
        }
    }
    return fSelectionTestResults;
}
function RTE_TB_SetEnabledFromCommandEnabled(strBaseElementID, docEditor, strCommandToEnable, strCommandToCheck) {
    var btn = RTE_TB_GetToolBarButton(strBaseElementID, strCommandToEnable);

    if (typeof docEditor.queryCommandEnabled != "undefined" && docEditor.queryCommandEnabled(strCommandToCheck)) {
        RTE_TB_ClearButtonDisabled(btn);
    }
    else {
        RTE_TB_SetButtonDisabled(btn);
    }
}
function RTE_TB_SetEnabledIfInElement(strBaseElementID, aElemChain, strMnemonic, strElement) {
    RTE_TB_SetEnabledFromCondition(strBaseElementID, RTE_IsElementInChain(aElemChain, strElement), strMnemonic);
}
function RTE_TB_SetEnabledFromCondition(strBaseElementID, fCondition, strCommand) {
    var btn = RTE_TB_GetToolBarButton(strBaseElementID, strCommand);

    if (fCondition) {
        RTE_TB_ClearButtonDisabled(btn);
    }
    else {
        RTE_TB_SetButtonDisabled(btn);
    }
}
function RTE_TB_OnMouseOver(elemButton) {
    if (0 > elemButton.className.indexOf(g_strRTEDisabledClassName)) {
        elemButton.style.cursor = "pointer";
        RTE_TB_SetButtonHover(elemButton);
    }
}
function RTE_TB_OnMouseOut(elemButton) {
    RTE_TB_ClearButtonHover(elemButton);
}
function RTE_TB_OnFocus(strBaseElementID, elemButton) {
    g_strRTEToolBarButtonWithTheFocus = elemButton.parentNode.id;
}
function RTE_TB_OnBlur(strBaseElementID, elemButton) {
    g_strRTEToolBarButtonWithTheFocus = null;
}
var g_strRTEDDBaseElementID;
var g_strRTEDDButtonMnemonic;
var g_fRTEFirstCallToGetMenu;
var g_elemRTEHighlightedMenuItem;
var g_iRTEHighlightedMenuItem;
var g_iRTEMenuItemMax;
var g_fRTEMenuMoved;

function RTE_DD_GetMenuElement() {
ULSglM:
    ;
    var elemMenu = document.getElementById(g_strRTETextEditorPullDownMenuID);

    if (null == elemMenu) {
        var doc = window.parent.document;

        elemMenu = doc.getElementById(g_strRTETextEditorPullDownMenuID);
    }
    return elemMenu;
}
function RTE_DD_GetMenuFrame() {
ULSglM:
    ;
    var ifmMenu = null;
    var elemMenu = RTE_DD_GetMenuElement();

    if (null != elemMenu) {
        if (window.frames.length > 0) {
            ifmMenu = window.frames[g_strRTETextEditorPullDownMenuID];
        }
        else {
            var wnd = window.parent;

            if (wnd != null && wnd.frames != null) {
                ifmMenu = wnd.frames[g_strRTETextEditorPullDownMenuID];
            }
        }
    }
    if (null == ifmMenu) {
        var ifmContainer = document.getElementById(g_strRTETextEditorPullDownMenuID);

        if (ifmContainer != null) {
            ifmMenu = ifmContainer.contentWindow;
        }
    }
    if (null == ifmMenu) {
        if (g_fRTEFirstCallToGetMenu) {
            g_fRTEFirstCallToGetMenu = false;
            return null;
        }
    }
    return ifmMenu;
}
function RTE_DD_GetMenuBaseElementID() {
ULSglM:
    ;
    return (RTE_DD_GetMenuElement()).getAttribute(g_strRTEBaseElementIDAttributeName);
}
function RTE_DD_GetMenuButtonMnemonic() {
ULSglM:
    ;
    return (RTE_DD_GetMenuElement()).getAttribute(g_strRTEButtonMnemonicAttributeName);
}
function RTE_DD_MenuIsOpen() {
ULSglM:
    ;
    var elemMenu = RTE_DD_GetMenuElement();

    if (elemMenu != null && "" == elemMenu.style.display) {
        return true;
    }
    return false;
}
function RTE_DD_OpenMenu(strBaseElementID, strButtonMnemonic, strMenuHtml, strWebLanguage, cMenuItems) {
    var elemMenu = RTE_DD_GetMenuElement();
    var ifmMenu = RTE_DD_GetMenuFrame();

    if (!g_fRTEMenuMoved) {
        insertAdjacentElement(g_elemRTELastTextAreaConverted, "afterEnd", elemMenu);
        elemMenu = RTE_DD_GetMenuElement();
        ifmMenu = RTE_DD_GetMenuFrame();
    }
    if (g_strRTEDDBaseElementID == strBaseElementID && g_strRTEDDButtonMnemonic == strButtonMnemonic) {
        RTE_DD_CloseMenu();
        RTE_RestoreSelection(strBaseElementID);
        return;
    }
    if (null != g_strRTEDDBaseElementID && null != g_strRTEDDButtonMnemonic) {
        RTE_DD_CloseMenu();
    }
    g_strRTEDDBaseElementID = strBaseElementID;
    g_strRTEDDButtonMnemonic = strButtonMnemonic;
    g_iRTEMenuItemMax = cMenuItems - 1;
    RTE_SaveSelection(strBaseElementID);
    var elemToolBarButton = RTE_TB_GetToolBarButton(strBaseElementID, strButtonMnemonic);

    elemMenu.setAttribute(g_strRTEBaseElementIDAttributeName, strBaseElementID);
    elemMenu.setAttribute(g_strRTEButtonMnemonicAttributeName, strButtonMnemonic);
    elemMenu.setAttribute(g_strRTEMenuOpeningAttributeName, "1");
    elemMenu.style.top = "0px";
    elemMenu.style.left = "0px";
    elemMenu.style.height = "";
    elemMenu.style.width = "";
    var scriptFile = "form.js";
    var stringsFile = "strings.js";

    ;
    var strWebLocale = RTE_GetWebLocale(strBaseElementID);

    ifmMenu.document.open("text/html", "replace");
    ifmMenu.document.write("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"" + RTE_GetServerRelativeStylesheetUrl("forms.css", strWebLocale) + "\"><script language=\"javascript\" src=\"" + RTE_GetServerRelativeScriptUrl(stringsFile, strWebLocale) + "\"></script>" + "<script language=\"javascript\" src=\"" + RTE_GetServerRelativeScriptUrl(scriptFile, null) + "\"></script></head>" + "<body class=\"" + g_strRTEToolbarClassName + "\"" + g_strRTECommandToExecuteAttributeName + "=\"x\" " + g_strRTECommandValueAttributeName + "=\"x\" " + g_strRTEFunctionToExecuteAttributeName + "=\"x\" " + g_strRTEFunctionParameterToExecuteAttributeName + "=\"x\" unselectable='on'><div class=\"" + g_strRTEToolbarClassName + "\" id=\"divAroundMenu\" unselectable='on'>" + strMenuHtml + "</div></body></html>");
    ifmMenu.document.close();
    elemMenu = RTE_DD_GetMenuElement();
    ifmMenu = RTE_DD_GetMenuFrame();
    window.setTimeout(function() {
    ULSglM:
        ;
        ifmMenu.document.body.onkeydown = new Function("RTE_DD_OnKeyDown(this);");
        ;
        elemMenu.style.border = "0px";
        ifmMenu.document.body.style.border = "1px solid black";
        ;
        elemMenu.style.display = "";
        ;
        var elemMenuDivInFrame = ifmMenu.document.getElementById("divAroundMenu");
        var elemMenuTable = ifmMenu.document.getElementById(g_strRTEMenuTableElementName);
        var cyDropDownMax = 300;
        var rgnMenuRelativeCoordinates = RTE_GetElementWindowCoordinates(elemMenu);
        var rgnToolBarButtonCoordinates = RTE_GetElementWindowCoordinates(elemToolBarButton);
        var xToolBarButton = rgnToolBarButtonCoordinates[g_iRTELeft];
        var yToolBarButton = rgnToolBarButtonCoordinates[g_iRTETop];
        var cxToolBarButton = elemToolBarButton.offsetWidth;
        var cyToolBarButton = elemToolBarButton.offsetHeight;
        var cxDropDown = elemMenuTable.scrollWidth + 4;
        var cyDropDown = elemMenuTable.scrollHeight + 4;
        var cxBody = document.body.clientWidth;
        var cyBody = document.body.clientHeight;
        var yDropDown = rgnToolBarButtonCoordinates[g_iRTETop] + elemToolBarButton.offsetHeight - rgnMenuRelativeCoordinates[g_iRTETop];
        var objEditor = RTE_GetEditorDocument(strBaseElementID);
        var xDropDown;

        if (strWebLanguage == "1037" || strWebLanguage == "1025" || objEditor.dir == "rtl") {
            xDropDown = rgnToolBarButtonCoordinates[g_iRTERight] - cxDropDown - rgnMenuRelativeCoordinates[g_iRTELeft];
        }
        else {
            xDropDown = rgnToolBarButtonCoordinates[g_iRTELeft] - rgnMenuRelativeCoordinates[g_iRTELeft];
        }
        var fNeedVerticalScrollBar = false;

        if (cyDropDown > cyDropDownMax) {
            fNeedVerticalScrollBar = true;
            cyDropDown = cyDropDownMax;
        }
        if (cyDropDown > cyBody) {
            fNeedVerticalScrollBar = true;
            cyDropDown = cyBody - 30;
        }
        var scrollTopAdjustment = document.body.scrollTop;

        scrollTopAdjustment += document.body.parentNode.scrollTop;
        if (yDropDown + cyDropDown > cyBody + scrollTopAdjustment) {
            yDropDown = rgnToolBarButtonCoordinates[g_iRTETop] - cyDropDown;
            if (scrollTopAdjustment > yDropDown) {
                yDropDown = scrollTopAdjustment;
            }
        }
        objEditor = RTE_GetEditorDocument(strBaseElementID);
        if (strWebLanguage == "1037" || strWebLanguage == "1025" || objEditor.dir == "rtl") {
            ifmMenu.document.body.dir = "rtl";
        }
        if (fNeedVerticalScrollBar) {
            ifmMenu.document.body.scroll = "yes";
            cxDropDown += 22;
            if (ifmMenu.document.body.dir == "rtl") {
                xDropDown -= 22;
                if (scrollLeftAdjustment > xDropDown) {
                    xDropDown = scrollLeftAdjustment;
                }
            }
        }
        else {
            ifmMenu.document.body.scroll = "";
        }
        var scrollLeftAdjustment = document.body.scrollLeft;

        scrollLeftAdjustment += document.body.parentNode.scrollLeft;
        if (xDropDown + cxDropDown > cxBody + scrollLeftAdjustment) {
            if (ifmMenu.document.body.dir != "rtl") {
                xDropDown = cxBody + scrollLeftAdjustment - cxDropDown;
            }
            if (scrollLeftAdjustment > xDropDown) {
                xDropDown = scrollLeftAdjustment;
            }
        }
        elemMenu.style.zIndex = String(500);
        elemMenu.style.left = String(xDropDown) + "px";
        elemMenu.style.top = String(yDropDown) + "px";
        elemMenu.style.width = String(cxDropDown) + "px";
        elemMenu.style.height = String(cyDropDown) + "px";
        RTE_DD_SetHighlightOnMenuItem(RTE_DD_GetMenuItem(0));
    }, 0);
    event.cancelBubble = true;
}
function RTE_DD_CloseMenu() {
ULSglM:
    ;
    var elemMenu = RTE_DD_GetMenuElement();

    if (null == elemMenu) {
        return;
    }
    elemMenu.style.display = "none";
    if (g_strRTEDDBaseElementID != null && g_strRTEDDButtonMnemonic != null) {
        RTE_TB_ClearButtonHover(RTE_TB_GetToolBarButton(g_strRTEDDBaseElementID, g_strRTEDDButtonMnemonic));
    }
    g_strRTEDDBaseElementID = null;
    g_strRTEDDButtonMnemonic = null;
    g_elemRTEHighlightedMenuItem = null;
    g_iRTEHighlightedMenuItem = -1;
    g_iRTEMenuItemMax = -1;
    var parentDoc = window.parent;

    if (null != parentDoc) {
        try {
            parentDoc.g_strRTEDDBaseElementID = null;
            parentDoc.g_strRTEDDButtonMnemonic = null;
            parentDoc.g_elemRTEHighlightedMenuItem = null;
            parentDoc.g_iRTEHighlightedMenuItem = -1;
            parentDoc.g_iRTEMenuItemMax = -1;
        }
        catch (e) { }
    }
}
function RTE_DD_GenerateMenuOpenHtml() {
ULSglM:
    ;
    return "<table class=\"ms-rtedropdown\" id=\"" + g_strRTEMenuTableElementName + "\" cellspacing=\"0\" border=\"0\" unselectable=\"on\"><tr unselectable=\"on\">";
}
function RTE_DD_GenerateMenuCloseHtml() {
ULSglM:
    ;
    return "</tr></table>";
}
function RTE_DD_GenerateMenuItemHtml(cColumns, iMenuItem, strCommandToPerform, strCommandValue, strMenuItemHtml, strMenuItemToolTip, strJSOnMouseOver, strJSOnMouseOut, strWebLanguage) {
    return RTE_DD_GenerateMenuItemScriptHtml(cColumns, iMenuItem, "return RTE_DD_ExecuteCommand('" + strCommandToPerform + "', '" + STSScriptEncode(strCommandValue) + "')", strMenuItemHtml, strMenuItemToolTip, strJSOnMouseOver, strJSOnMouseOut, strWebLanguage);
}
function RTE_DD_GenerateMenuItemScriptHtml(cColumns, iMenuItem, strScript, strMenuItemHtml, strMenuItemToolTip, strJSOnMouseOver, strJSOnMouseOut, strWebLanguage) {
    var strHtmlRet = "";

    if ((1 >= cColumns || 1 < cColumns && 0 == iMenuItem % cColumns) && 0 != iMenuItem) {
        strHtmlRet = "</tr><tr unselectable=\"on\">";
    }
    var direction;

    if (strWebLanguage == "1037" || strWebLanguage == "1025") {
        direction = "rtl";
    }
    else {
        direction = "ltr";
    }
    strHtmlRet += "<td dir=\"" + direction + "\" class=\"" + g_strRTEToolbarClassName + " " + g_strRTEUnselectedClassName + "\" " + "nowrap id=\"" + g_strRTEMenuItemBaseName + String(iMenuItem) + "\" " + g_strRTEMenuItemAttributeName + "=\"" + String(iMenuItem) + "\" " + "onfocus=\"if (document.readyState == 'complete') {RTE_DD_Item_OnFocus(this)}\" " + "onclick=\"" + strScript + "\" " + "unselectable=\"on\" " + "onmouseover=\"if (document.readyState == 'complete') {RTE_DDItem_OnMouseOver(this);";
    if (null != strJSOnMouseOver)
        strHtmlRet += strJSOnMouseOver;
    strHtmlRet += "}\" " + "onmouseout=\"if (document.readyState == 'complete') {RTE_DDItem_OnMouseOut(this);";
    if (null != strJSOnMouseOut)
        strHtmlRet += strJSOnMouseOut;
    strHtmlRet += "}\">" + "<a tabindex=\"-1\" href=\"#\" " + "class=\"" + g_strRTEUnselectedClassName + "\" " + "style=\"text-decoration: none; color: black; cursor: pointer;\" " + "title=\"" + strMenuItemToolTip + "\" " + "unselectable=\"on\" " + "onblur=\"if (document.readyState == 'complete') {RTE_DD_Item_OnBlur()}\" " + "onfocus=\"if (document.readyState == 'complete') {RTE_DD_Item_OnFocus(this.parentNode)}\">" + strMenuItemHtml + "</a>" + "</td>";
    return strHtmlRet;
}
function RTE_DD_GetMenuItem(iMenuItem) {
ULSglM:
    ;
    var elemMenuItem = (RTE_DD_GetMenuFrame()).document.getElementById(g_strRTEMenuItemBaseName + String(iMenuItem));

    return elemMenuItem;
}
function RTE_DD_GetHighlightedMenuItem() {
ULSglM:
    ;
    return (RTE_DD_GetMenuFrame()).g_elemRTEHighlightedMenuItem;
}
function RTE_DD_SetHighlightedMenuItem(elem) {
ULSglM:
    ;
    var menuFrame = RTE_DD_GetMenuFrame();

    if (menuFrame != null) {
        menuFrame.g_elemRTEHighlightedMenuItem = elem;
    }
    else {
        g_elemRTEHighlightedMenuItem = elem;
    }
}
function RTE_DD_ClearHighlightOnMenuItem(elemMenuItem) {
ULSglM:
    ;
    elemMenuItem.className = RTE_RemoveClassFromClassList(elemMenuItem.className, g_strRTEHoverClassName);
}
function RTE_DD_HighlightOnMenuItem(elemMenuItem) {
ULSglM:
    ;
    elemMenuItem.className = RTE_AddClassToClassList(elemMenuItem.className, g_strRTEHoverClassName);
}
function RTE_DD_ClearHighlightedMenuItem() {
ULSglM:
    ;
    RTE_DD_ClearHighlightOnMenuItem(RTE_DD_GetHighlightedMenuItem());
}
function RTE_DD_SetHighlightOnMenuItem(elemMenuItem) {
ULSglM:
    ;
    if (!RTE_DD_MenuIsOpen()) {
        return;
    }
    var strMenuItemAttributeValue = elemMenuItem.getAttribute(g_strRTEMenuItemAttributeName);
    var highlightedElem = RTE_DD_GetHighlightedMenuItem();

    if (null != highlightedElem) {
        RTE_DD_ClearHighlightOnMenuItem(highlightedElem);
        g_iRTEHighlightedMenuItem = -1;
    }
    RTE_DD_HighlightOnMenuItem(elemMenuItem);
    RTE_DD_SetHighlightedMenuItem(elemMenuItem);
    g_iRTEHighlightedMenuItem = parseInt(strMenuItemAttributeValue);
}
function RTE_DD_SetHighlightOnPrevMenuItem(cItemsToMove) {
ULSglM:
    ;
    var elemHighlighted = RTE_DD_GetHighlightedMenuItem();

    if (elemHighlighted == null)
        elemHighlighted = RTE_DD_GetMenuItem(0);
    var strMenuItemAttributeValue = elemHighlighted.getAttribute(g_strRTEMenuItemAttributeName);
    var iMenuItem = parseInt(strMenuItemAttributeValue);

    if (iMenuItem > 0) {
        var iNewMenuItem = Math.max(iMenuItem - cItemsToMove, 0);
        var elemPrev = RTE_DD_GetMenuItem(iNewMenuItem);

        if (typeof elemHighlighted.onmouseout != 'undefined') {
            elemHighlighted.onmouseout();
        }
        RTE_DD_SetHighlightOnMenuItem(elemPrev);
        if (typeof elemPrev.onmouseover != 'undefined') {
            elemPrev.onmouseover();
        }
    }
}
function RTE_DD_SetHighlightOnNextMenuItem(cItemsToMove) {
ULSglM:
    ;
    var elemHighlighted = RTE_DD_GetHighlightedMenuItem();

    if (elemHighlighted == null)
        elemHighlighted = RTE_DD_GetMenuItem(0);
    var strMenuItemAttributeValue = elemHighlighted.getAttribute(g_strRTEMenuItemAttributeName);
    var iMenuItem = parseInt(strMenuItemAttributeValue);

    if (iMenuItem < g_iRTEMenuItemMax) {
        var iNewMenuItem = Math.min(iMenuItem + cItemsToMove, g_iRTEMenuItemMax);
        var elemNext = RTE_DD_GetMenuItem(iNewMenuItem);

        if (typeof elemHighlighted.onmouseout != 'undefined') {
            elemHighlighted.onmouseout();
        }
        RTE_DD_SetHighlightOnMenuItem(elemNext);
        if (typeof elemNext.onmouseover != 'undefined') {
            elemNext.onmouseover();
        }
    }
}
function RTE_DD_ExecuteCommand(strCommandToPerform, strCommandValue) {
ULSglM:
    ;
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();

    RTE_DD_CloseMenu();
    RTE_GiveEditorFocus(strBaseElementID);
    RTE_RestoreSelection(strBaseElementID);
    RTE_ExecuteCommandOnSelection(RTE_DD_GetMenuBaseElementID(), strCommandToPerform, false, strCommandValue);
}
function RTE_DD_StartAction(strFunctionName, strParameter) {
ULSglM:
    ;
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();

    RTE_DD_CloseMenu();
    RTE_GiveEditorFocus(strBaseElementID);
    RTE_RestoreSelection(strBaseElementID);
    RTE_ExecuteFunctionOnSelection(RTE_DD_GetMenuBaseElementID(), strFunctionName, strParameter);
}
function RTE_DD_Item_OnFocus(elemMenuItemCell) {
ULSglM:
    ;
    var elemMenu = RTE_DD_GetMenuElement();

    elemMenu.setAttribute(g_strRTEMenuOpeningAttributeName, "0");
    RTE_DD_SetHighlightOnMenuItem(elemMenuItemCell);
}
function RTE_DD_Item_OnBlur() {
ULSglM:
    ;
    g_iRTEHighlightedMenuItem = -1;
    window.setTimeout("RTE_OnItemBlurTestCloseMenu()", 30);
}
function RTE_OnItemBlurTestCloseMenu() {
ULSglM:
    ;
    if (null == RTE_DD_GetHighlightedMenuItem()) {
        RTE_DD_CloseMenu();
    }
}
function RTE_DD_OnKeyDown(elem) {
    var evtSource = (GetParentWindow2(elem.ownerDocument)).event;
    var nKeyCode = evtSource.keyCode;
    var fAltKey = evtSource.altKey;
    var fCtrlKey = evtSource.ctrlKey;
    var fShiftKey = evtSource.shiftKey;

    ;
    var pe = false;

    if (!fCtrlKey && !fAltKey && !fShiftKey) {
        switch (nKeyCode) {
        case 27:
            var strBaseElementID = g_strRTEDDBaseElementID;

            RTE_DD_CloseMenu();
            RTE_GiveEditorFocus(strBaseElementID);
            RTE_StartResetToolBarTimer(strBaseElementID);
            break;
        case 38:
            evtSource.returnValue = false;
            RTE_DD_SetHighlightOnPrevMenuItem(1);
            break;
        case 9:
            evtSource.returnValue = false;
            break;
        case 13:
            var menuItem = RTE_DD_GetHighlightedMenuItem();

            if (menuItem != null) {
                if (typeof menuItem.onclick != 'undefined') {
                    menuItem.onclick();
                }
            }
            evtSource.returnValue = false;
            break;
        case 40:
            evtSource.returnValue = false;
            RTE_DD_SetHighlightOnNextMenuItem(1);
            break;
        case 33:
            evtSource.returnValue = false;
            RTE_DD_SetHighlightOnPrevMenuItem(12);
            break;
        case 34:
            evtSource.returnValue = false;
            RTE_DD_SetHighlightOnNextMenuItem(12);
            break;
        case 36:
            evtSource.returnValue = false;
            break;
        case 35:
            evtSource.returnValue = false;
            break;
        default:
            pe = true;
            break;
        }
    }
    else if (!fCtrlKey && !fAltKey && fShiftKey) {
        switch (nKeyCode) {
        case 9:
            evtSource.returnValue = false;
            break;
        default:
            pe = true;
            break;
        }
    }
    else {
        pe = true;
    }
    if (pe) {
        if (browseris.ie55up) {
            document.fireEvent('onkeydown', document.createEventObject(evtSource));
        }
    }
}
function RTE_DDItem_OnMouseOver(elemTD) {
ULSglM:
    ;
    if (null != elemTD) {
        RTE_DD_SetHighlightOnMenuItem(elemTD);
    }
}
function RTE_DDItem_OnMouseOut(elemTD) {
ULSglM:
    ;
    if (null != elemTD) {
        RTE_DD_ClearHighlightOnMenuItem(elemTD);
    }
}
var g_rgstrRTEMenuHtml;
var g_strRTEColorMatrixMenuItemPrefixHtml;
var g_strRTEColorMatrixMenuItemSufffixHtml;

function RTE_DD_OpenFontNameOrSizeSelector(strBaseElementID, strWebLanguage, fGeneratingFontNameSelector) {
ULSglM:
    ;
    RTE_RestoreSelection(strBaseElementID);
    var rngSelection = RTE_GetSelection(strBaseElementID);

    if (rngSelection == null) {
        return;
    }
    var strSelectionFontName = rngSelection.queryCommandValue(g_strRTEFontNameMnemonic);

    if (null == strSelectionFontName) {
        strSelectionFontName = "";
    }
    var strSelectionFontSize = rngSelection.queryCommandValue(g_strRTEFontSizeMnemonic);
    var fSelectionBold = rngSelection.queryCommandValue(g_strRTEBoldMnemonic);
    var fSelectionItalic = rngSelection.queryCommandValue(g_strRTEItalicMnemonic);
    var strMenuHtml = "";
    var cMenuItems = -1;
    var strButtonMnemonic = "";
    var rgoMenuInfo = RTE_DD_GetFontNameOrSizeSelectorUnformattedHtml(strBaseElementID, fGeneratingFontNameSelector, strWebLanguage);

    strMenuHtml = rgoMenuInfo[0];
    cMenuItems = rgoMenuInfo[1];
    if (fGeneratingFontNameSelector) {
        strMenuHtml = strMenuHtml.replace(new RegExp(g_strRTEFontSizeToken, "g"), String(2));
        strButtonMnemonic = g_strRTEFontNameMnemonic;
    }
    else {
        strMenuHtml = strMenuHtml.replace(new RegExp(g_strRTEFontNameToken, "g"), STSHtmlEncode(strSelectionFontName));
        strButtonMnemonic = g_strRTEFontSizeMnemonic;
    }
    var strBegBoldItalicInsert = "";
    var strEndBoldItalicInsert = "";

    if (fSelectionBold) {
        strBegBoldItalicInsert = "<b unselectable='on'>";
        strEndBoldItalicInsert = "</b>";
    }
    if (fSelectionItalic) {
        strBegBoldItalicInsert += "<i unselectable='on'>";
        strEndBoldItalicInsert += "</i>";
    }
    strMenuHtml = strMenuHtml.replace(new RegExp(g_strRTEBegBoldItalicToken, "g"), strBegBoldItalicInsert);
    strMenuHtml = strMenuHtml.replace(new RegExp(g_strRTEEndBoldItalicToken, "g"), strEndBoldItalicInsert);
    RTE_DD_OpenMenu(strBaseElementID, strButtonMnemonic, strMenuHtml, strWebLanguage, cMenuItems);
}
function RTE_DD_GetFontNameOrSizeSelectorUnformattedHtml(strBaseElementID, fGeneratingFontNameSelector, strWebLanguage) {
ULSglM:
    ;
    var strCommandToPerform;

    if (fGeneratingFontNameSelector) {
        strCommandToPerform = g_strRTEFontNameMnemonic;
    }
    else {
        strCommandToPerform = g_strRTEFontSizeMnemonic;
    }
    var strMenuHtml = null;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null && instanceVariables.renderFontNamesAsText != null && instanceVariables.renderFontNamesAsText) {
        strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform + "_text"];
    }
    else {
        strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform];
    }
    if (null != strMenuHtml) {
        return strMenuHtml;
    }
    strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var cMenuItems = -1;

    if (fGeneratingFontNameSelector) {
        var rgstrClientFonts = RTE_GetSortedFontNames();

        cMenuItems = rgstrClientFonts.length;
        var iFont;

        for (iFont = 0; iFont < cMenuItems; iFont++) {
            if (instanceVariables != null && instanceVariables.renderFontNamesAsText != null && instanceVariables.renderFontNamesAsText) {
                strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iFont, "return RTE_ApplyFontFace('" + strCommandToPerform + "', '" + rgstrClientFonts[iFont] + "')", g_strRTEBegBoldItalicToken + "<font face='' style='height:18px' unselectable='on'>" + STSHtmlEncode(rgstrClientFonts[iFont]) + "</font>" + g_strRTEEndBoldItalicToken, rgstrClientFonts[iFont], "RTE_DD_FontNameOnMouseOver(this);", "RTE_DD_FontNameOnMouseOut(this);", strWebLanguage);
            }
            else {
                strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iFont, "return RTE_ApplyFontFace('" + strCommandToPerform + "', '" + rgstrClientFonts[iFont] + "')", g_strRTEBegBoldItalicToken + "<font size=\"" + g_strRTEFontSizeToken + "\" face=\"" + rgstrClientFonts[iFont] + "\" unselectable='on'>" + rgstrClientFonts[iFont] + "</font>" + g_strRTEEndBoldItalicToken, rgstrClientFonts[iFont], null, null, strWebLanguage);
            }
        }
    }
    else {
        cMenuItems = 7;
        var nFontSize;

        for (nFontSize = 1; nFontSize <= cMenuItems; nFontSize++) {
            strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, nFontSize - 1, "return RTE_ApplyFontSize('" + strCommandToPerform + "', '" + String(nFontSize) + "')", g_strRTEBegBoldItalicToken + "<font size=\"" + String(nFontSize) + "\" face=\"" + g_strRTEFontNameToken + "\" unselectable='on'>" + String(nFontSize) + " - " + Strings.STS.L_ExampleText_TEXT + "</font>" + g_strRTEEndBoldItalicToken, String(nFontSize), null, null, strWebLanguage);
        }
    }
    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    if (instanceVariables != null && instanceVariables.renderFontNamesAsText != null && instanceVariables.renderFontNamesAsText) {
        g_rgstrRTEMenuHtml[strCommandToPerform + "_text"] = [strMenuHtml, cMenuItems];
        return g_rgstrRTEMenuHtml[strCommandToPerform + "_text"];
    }
    else {
        g_rgstrRTEMenuHtml[strCommandToPerform] = [strMenuHtml, cMenuItems];
        return g_rgstrRTEMenuHtml[strCommandToPerform];
    }
}
function RTE_ApplyFontFace(strCommandToPerform, strCommandValue) {
ULSglM:
    ;
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.ApplyFontFace != "undefined" && overrides.ApplyFontFace != null) {
            return overrides.ApplyFontFace(strBaseElementID);
        }
    }
    var elements = RTE_GetContainedElements(strBaseElementID);

    for (var i = 0; i < elements.length; i++) {
        RTE_RemoveFontFamilyStyle(elements[i]);
    }
    return RTE_DD_ExecuteCommand(strCommandToPerform, strCommandValue);
}
function RTE_RemoveFontFamilyStyle(element) {
    if (element != null) {
        if (element.style != null && null != element.style.fontFamily && typeof element.style.removeAttribute != 'undefined') {
            element.style.removeAttribute("fontFamily");
        }
        for (var i = 0; i < element.childNodes.length; i++) {
            RTE_RemoveFontFamilyStyle(element.childNodes(i));
        }
    }
}
function RTE_ApplyFontSize(strCommandToPerform, strCommandValue) {
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.ApplyFontSize != "undefined" && overrides.ApplyFontSize != null) {
            return overrides.ApplyFontSize(strBaseElementID);
        }
    }
    var elements = RTE_GetContainedElements(strBaseElementID);

    for (var i = 0; i < elements.length; i++) {
        RTE_RemoveFontSizeStyle(elements[i]);
    }
    return RTE_DD_ExecuteCommand(strCommandToPerform, strCommandValue);
}
function RTE_RemoveFontSizeStyle(element) {
    if (element != null) {
        if (element.style != null && null != element.style.fontSize) {
            element.style.removeAttribute("fontSize");
        }
        for (var i = 0; i < element.childNodes.length; i++) {
            RTE_RemoveFontSizeStyle(element.childNodes[i]);
        }
    }
}
function RTE_DD_FontNameOnMouseOver(elem) {
    for (var i = 0; i < elem.childNodes.length; i++) {
        var child = elem.childNodes[i];

        if (child.tagName.toUpperCase() == "FONT") {
            child.face = child.innerText;
        }
    }
}
function RTE_DD_FontNameOnMouseOut(elem) {
    for (var i = 0; i < elem.childNodes.length; i++) {
        var child = elem.childNodes[i];

        if (child.tagName.toUpperCase() == "FONT") {
            child.face = null;
        }
    }
}
function RTE_DD_OpenForeColorSelector(strBaseElementID, strWebLanguage) {
    var rgrgstrRTEColorMatrix = RTE_GetRTEColorMatrix();

    RTE_DD_OpenMenu(strBaseElementID, g_strRTEForeColorMnemonic, RTE_DD_GetColorSelectorHtml(g_strRTEForeColorMnemonic, strWebLanguage), strWebLanguage, rgrgstrRTEColorMatrix.length);
}
function RTE_DD_OpenBackColorSelector(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var rgrgstrRTEColorMatrix = RTE_GetRTEColorMatrix();

    RTE_DD_OpenMenu(strBaseElementID, g_strRTEBackColorMnemonic, RTE_DD_GetColorSelectorHtml(g_strRTEBackColorMnemonic, strWebLanguage), strWebLanguage, rgrgstrRTEColorMatrix.length);
}
function RTE_DD_GetColorSelectorHtml(strCommandToPerform, strWebLanguage) {
    var strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform];

    if (null == strMenuHtml) {
        strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
        var iColor;
        var rgrgstrRTEColorMatrix = RTE_GetRTEColorMatrix();

        for (iColor = 0; iColor < rgrgstrRTEColorMatrix.length; iColor++) {
            strMenuHtml += RTE_DD_GenerateMenuItemHtml(g_cRTEColorMatrixColumns, iColor, strCommandToPerform, rgrgstrRTEColorMatrix[iColor][1], g_strRTEColorMatrixMenuItemPrefixHtml + rgrgstrRTEColorMatrix[iColor][1] + g_strRTEColorMatrixMenuItemSufffixHtml.replace("%TOOLTIP%", rgrgstrRTEColorMatrix[iColor][0]), "", null, null, strWebLanguage);
        }
        strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
        g_rgstrRTEMenuHtml[strCommandToPerform] = strMenuHtml;
    }
    return strMenuHtml;
}
var g_cRTEColorMatrixColumns;

function RTE_GetRTEColorMatrix() {
ULSglM:
    ;
    var g_rgrgstrRTEColorMatrix = [[Strings.STS.L_Black_TEXT, "#000000"], [Strings.STS.L_Brown_TEXT, "#993300"], [Strings.STS.L_OliveGreen_TEXT, "#333300"], [Strings.STS.L_DarkGreenLong_TEXT, "#003300"], [Strings.STS.L_DarkTeal_TEXT, "#003366"], [Strings.STS.L_DarkBlueLong_TEXT, "#000080"], [Strings.STS.L_Indigo_TEXT, "#333399"], [Strings.STS.L_Gray80_TEXT, "#333333"], [Strings.STS.L_DarkRedLong_TEXT, "#800000"], [Strings.STS.L_Orange_TEXT, "#ff6600"], [Strings.STS.L_DarkYellow_TEXT, "#808000"], [Strings.STS.L_Green_TEXT, "#008000"], [Strings.STS.L_Teal_TEXT, "#008080"], [Strings.STS.L_Blue_TEXT, "#0000FF"], [Strings.STS.L_BlueGray_TEXT, "#666699"], [Strings.STS.L_Gray50_TEXT, "#808080"], [Strings.STS.L_Red_TEXT, "#FF0000"], [Strings.STS.L_LightOrange_TEXT, "#ff9900"], [Strings.STS.L_Lime_TEXT, "#99cc00"], [Strings.STS.L_SeaGreenLong_TEXT, "#339966"], [Strings.STS.L_Aqua_TEXT, "#33cccc"], [Strings.STS.L_LightBlueLong_TEXT, "#3366ff"], [Strings.STS.L_Violet_TEXT, "#800080"], [Strings.STS.L_Gray40_TEXT, "#969696"], [Strings.STS.L_Pink_TEXT, "#FF00FF"], [Strings.STS.L_Gold_TEXT, "#ffcc00"], [Strings.STS.L_Yellow_TEXT, "#FFFF00"], [Strings.STS.L_BrightGreen_TEXT, "#00FF00"], [Strings.STS.L_Turquoise_TEXT, "#00FFFF"], [Strings.STS.L_SkyBlueLong_TEXT, "#00ccff"], [Strings.STS.L_Plum_TEXT, "#993366"], [Strings.STS.L_Gray25_TEXT, "#C0C0C0"], [Strings.STS.L_Rose_TEXT, "#ff99cc"], [Strings.STS.L_Tan_TEXT, "#ffcc99"], [Strings.STS.L_LightYellowLong_TEXT, "#ffff99"], [Strings.STS.L_LightGreenLong_TEXT, "#ccffcc"], [Strings.STS.L_LightTurquoise_TEXT, "#ccffff"], [Strings.STS.L_PaleBlue_TEXT, "#99ccff"], [Strings.STS.L_Lavender_TEXT, "#cc99ff"], [Strings.STS.L_White_TEXT, "#FFFFFF"]];

    return g_rgrgstrRTEColorMatrix;
}
function RTE_CaseInsensitiveCompare(str1, str2) {
    var strU1 = str1.toUpperCase();
    var strU2 = str2.toUpperCase();

    if (GreaterThan(strU1, strU2))
        return 1;
    else if (LessThan(strU1, strU2))
        return -1;
    else
        return 0;
}
function RTE_GetDialogHelper() {
ULSglM:
    ;
    return document.getElementById(g_strRTEDialogHelperID);
}
function RTE_GetSortedFontNames() {
ULSglM:
    ;
    var rgstrFontNamesRet = [];
    var dh = RTE_GetDialogHelper();
    var fDone = false;

    if (null != dh) {
        var fonts = dh.fonts;

        if (null != fonts && typeof fonts.count != 'undefined') {
            var count = fonts.count;

            if (count > 0) {
                var iFont;

                for (iFont = 1; iFont < count; iFont++) {
                    if (!RTE_StringIsNullOrEmpty(fonts(iFont))) {
                        rgstrFontNamesRet.push(fonts(iFont));
                    }
                }
                rgstrFontNamesRet.sort(RTE_CaseInsensitiveCompare);
                fDone = true;
            }
        }
    }
    if (!fDone) {
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font1_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font2_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font3_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font4_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font5_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font6_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font7_TEXT, rgstrFontNamesRet);
        RTE_InsertIntoSortedArrayIfValid(Strings.STS.L_Font8_TEXT, rgstrFontNamesRet);
    }
    return rgstrFontNamesRet;
}
function RTE_IsChildOfElement(elemSearchingFor, elemToSearch) {
    var rgelemChildren = elemToSearch.childNodes;

    if (null == rgelemChildren || 0 >= rgelemChildren.length) {
        return false;
    }
    var iChild = 0;

    for (iChild = 0; iChild < rgelemChildren.length; iChild++) {
        var elemChild = rgelemChildren[iChild];

        if (elemChild == elemSearchingFor) {
            return true;
        }
        if (RTE_IsChildOfElement(elemSearchingFor, elemChild)) {
            return true;
        }
    }
    return false;
}
function RTE_FindParentElementWithTag(elem, strTagName) {
    if (null == elem.parentNode) {
        return null;
    }
    return RTE_FindParentElementOrSelfWithTag(elem.parentNode, strTagName);
}
function RTE_FindParentElementOrSelfWithTag(elem, strTagName) {
    if (elem.tagName == strTagName) {
        return elem;
    }
    else {
        if (null == elem.parentNode) {
            return null;
        }
        return RTE_FindParentElementOrSelfWithTag(elem.parentNode, strTagName);
    }
}
var g_iRTELeft;
var g_iRTETop;
var g_iRTEWidth;
var g_iRTEHeight;
var g_iRTERight;
var g_iRTEBottom;

function RTE_GetElementWindowCoordinates(elem) {
ULSglM:
    ;
    var xLeft = 0;
    var yTop = 0;
    var cxWidth = elem.offsetWidth;
    var cyHeight = elem.offsetHeight;

    do {
        if (elem.currentStyle.position != "relative") {
            xLeft += elem.offsetLeft;
            yTop += elem.offsetTop;
        }
        if (null == elem.offsetParent) {
            var mLeft = parseInt(elem.currentStyle.marginLeft);
            var mTop = parseInt(elem.currentStyle.marginTop);

            if (!isNaN(mLeft)) {
                xLeft += mLeft;
            }
            if (!isNaN(mTop)) {
                yTop += mTop;
            }
        }
        elem = elem.offsetParent;
    } while (elem != null);
    var rgnRet = [];

    rgnRet[g_iRTELeft] = xLeft;
    rgnRet[g_iRTETop] = yTop;
    rgnRet[g_iRTEWidth] = cxWidth;
    rgnRet[g_iRTEHeight] = cyHeight;
    rgnRet[g_iRTERight] = xLeft + cxWidth - 1;
    rgnRet[g_iRTEBottom] = yTop + cyHeight - 1;
    return rgnRet;
}
function RTE_GetServerRelativeUnlocalizedImageUrl(strImageFileName) {
    return "/_layouts/15/" + "images/" + strImageFileName;
}
function RTE_GetServerRelativeImageUrl(strImageFileName) {
    return "/_layouts/" + Strings.STS.L_Language_Text + "/images/" + strImageFileName;
}
function RTE_GetServerRelativeStylesheetUrl(strStylesheetFileName, strWebLocale) {
    return "/_layouts/15/" + strWebLocale + "/styles/" + strStylesheetFileName;
}
function RTE_GetServerRelativeScriptUrl(strScriptFileName, strWebLocale) {
    if (RTE_StringIsNullOrEmpty(strWebLocale)) {
        return "/_layouts/15/" + strScriptFileName;
    }
    return "/_layouts/15/" + strWebLocale + "/" + strScriptFileName;
}
function RTE_StripDoubleSpaces(str) {
    while (str.indexOf("  ") != -1) {
        str = str.replace(/  /g, " ");
    }
    return str;
}
function RTE_AddClassToClassList(strClassList, strNewClass) {
    if (0 <= strClassList.indexOf(strNewClass)) {
        return strClassList;
    }
    return RTE_StripDoubleSpaces(strClassList + " " + strNewClass);
}
function RTE_ReplaceClassInClassList(strClassList, strOldClass, strNewClass) {
    var iSel = strClassList.indexOf(strOldClass);
    var strAheadOfOldClass = "";

    if (0 < iSel) {
        return RTE_StripDoubleSpaces(strClassList.substr(0, iSel) + " " + strNewClass + " " + strClassList.substr(iSel + strOldClass.length));
    }
    return RTE_AddClassToClassList(strClassList, strNewClass);
}
function RTE_RemoveClassFromClassList(strClassList, strClass) {
    return RTE_ReplaceClassInClassList(strClassList, strClass, "");
}
function RTE_AddOrRemoveClassFromClassList(fAdd, strClassList, strClass) {
    if (fAdd) {
        return RTE_AddClassToClassList(strClassList, strClass);
    }
    return RTE_RemoveClassFromClassList(strClassList, strClass);
}
function RTE_StringIsNullOrEmpty(str) {
    return str == null || str.length == 0;
}
function RTE_InsertIntoSortedArrayIfValid(strInsert, rgstrDest) {
    if (RTE_StringIsNullOrEmpty(strInsert)) {
        return;
    }
    var i = 0;

    for (i = rgstrDest.length; i >= 0; i--) {
        var strDest = rgstrDest[i - 1];

        if (0 == i || LessThan(strDest, strInsert)) {
            rgstrDest[i] = strInsert;
            return;
        }
        else {
            rgstrDest[i] = strDest;
        }
    }
}
function RTE_GenerateStylesToolBarButtonHtml(strBaseElementID, strWebLanguage) {
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEStylesMnemonic);
    strHtmlRet += "<a tabindex=\"-1\" href=\"#\" onfocus=\"RTE_TB_OnFocus('" + strBaseElementID + "', this);\" onblur=\"RTE_TB_OnBlur('" + strBaseElementID + "', this);\" onclick=\"RTE_DD_OpenStylesSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "', true); return false;\" title=\"" + Strings.STS.L_StylesToolTip_TEXT + "\"";
    strHtmlRet += " style=\"margin-left: 2px; margin-right: 2px;\" unselectable=\"on\">" + Strings.STS.L_StylesLabel_TEXT + "&nbsp;<img alt=\"" + Strings.STS.L_StylesToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
    strHtmlRet += "</a>";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_DD_OpenStylesSelector(strBaseElementID, strWebLanguage) {
    var strMnemonic = g_strRTEStylesMnemonic;
    var rgoMenuInfo = RTE_DD_GetStylesSelectorUnformattedHtml(strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetStylesSelectorUnformattedHtml(strWebLanguage) {
    var strMenuHtml = g_rgstrRTEMenuHtml[g_strRTEStylesMnemonic];

    if (null != strMenuHtml) {
        return strMenuHtml;
    }
    var strCommandToPerform = g_strRTEFormatBlockMnemonic;

    strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var rgstrItemNames = RTE_GetBlockFormatNames();
    var cMenuItems = rgstrItemNames.length;

    for (var iItem = 0; iItem < cMenuItems; iItem++) {
        strMenuHtml += RTE_DD_GenerateMenuItemHtml(1, iItem, strCommandToPerform, rgstrItemNames[iItem], rgstrItemNames[iItem], "", null, null, strWebLanguage);
    }
    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    g_rgstrRTEMenuHtml[g_strRTEStylesMnemonic] = [strMenuHtml, cMenuItems];
    return g_rgstrRTEMenuHtml[g_strRTEStylesMnemonic];
}
function RTE_GetBlockFormatNames() {
ULSglM:
    ;
    var rgstrItemNamesRet = [];
    var dh = RTE_GetDialogHelper();

    if (null != dh) {
        var blockFormats = dh.blockFormats;

        if (null != blockFormats && typeof blockFormats.count != 'undefined') {
            var count = blockFormats.count;

            if (0 != count) {
                var iItem;

                for (iItem = 1; iItem < count; iItem++) {
                    RTE_InsertIntoSortedArrayIfValid(blockFormats(iItem), rgstrItemNamesRet);
                }
            }
        }
    }
    return rgstrItemNamesRet;
}
function RTE_GenerateInsertRowToolBarButtonHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    instanceVariables.functions[g_strRTEInsertRowAbove] = RTE_InsertRowAbove;
    instanceVariables.functions[g_strRTEInsertRowBelow] = RTE_InsertRowBelow;
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEInsertRowMnemonic, "RTE_DD_OpenInsertRowSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "')");
    strHtmlRet += Strings.STS.L_InsertRowLabel_TEXT;
    strHtmlRet += "<div class='clip16x16'><img class='ms-rteirow' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_InsertRowToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div>";
    strHtmlRet += "<img alt=\"" + Strings.STS.L_InsertRowToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_DD_OpenInsertRowSelector(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strMnemonic = g_strRTEInsertRowMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertRowSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertRowSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strCommandToPerform = g_strRTEInsertRowMnemonic;
    var strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform];

    if (null != strMenuHtml) {
        return strMenuHtml;
    }
    strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var rgstrItemNames = [];

    rgstrItemNames.push(Strings.STS.L_InsertRowAboveLabel_TEXT);
    rgstrItemNames.push(Strings.STS.L_InsertRowBelowLabel_TEXT);
    var cMenuItems = rgstrItemNames.length;
    var iItem = 0;

    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem, "RTE_DD_StartAction('" + g_strRTEInsertRowAbove + "', '" + strBaseElementID + "')", rgstrItemNames[iItem], rgstrItemNames[iItem], null, null, strWebLanguage);
    iItem = 1;
    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem, "RTE_DD_StartAction('" + g_strRTEInsertRowBelow + "', '" + strBaseElementID + "')", rgstrItemNames[iItem], rgstrItemNames[iItem], null, null, strWebLanguage);
    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    g_rgstrRTEMenuHtml[strCommandToPerform] = [strMenuHtml, cMenuItems];
    return g_rgstrRTEMenuHtml[strCommandToPerform];
}
function RTE_GenerateInsertColumnToolBarButtonHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    instanceVariables.functions[g_strRTEInsertColumnLeft] = RTE_InsertColumnLeft;
    instanceVariables.functions[g_strRTEInsertColumnRight] = RTE_InsertColumnRight;
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEInsertColumnMnemonic, "RTE_DD_OpenInsertColumnSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "')");
    strHtmlRet += Strings.STS.L_InsertColumnLabel_TEXT;
    strHtmlRet += "<div class='clip16x16'><img class='ms-rteicol' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_InsertColumnToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div>";
    strHtmlRet += "<img alt=\"" + Strings.STS.L_InsertColumnToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_DD_OpenInsertColumnSelector(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strMnemonic = g_strRTEInsertColumnMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertColumnSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertColumnSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strCommandToPerform = g_strRTEInsertColumnMnemonic;
    var strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform];

    if (null != strMenuHtml) {
        return strMenuHtml;
    }
    strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var rgstrItemNames = [];

    rgstrItemNames.push(Strings.STS.L_InsertColumnLeftLabel_TEXT);
    rgstrItemNames.push(Strings.STS.L_InsertColumnRightLabel_TEXT);
    var cMenuItems = rgstrItemNames.length;
    var iItem2 = 0;

    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem2, "RTE_DD_StartAction('" + g_strRTEInsertColumnLeft + "', '" + strBaseElementID + "')", rgstrItemNames[iItem2], rgstrItemNames[iItem2], null, null, strWebLanguage);
    var iItem = 1;

    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem, "RTE_DD_StartAction('" + g_strRTEInsertColumnRight + "', '" + strBaseElementID + "')", rgstrItemNames[iItem], rgstrItemNames[iItem], null, null, strWebLanguage);
    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    g_rgstrRTEMenuHtml[strCommandToPerform] = [strMenuHtml, cMenuItems];
    return g_rgstrRTEMenuHtml[strCommandToPerform];
}
function RTE_GenerateInsertCellToolBarButtonHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    instanceVariables.functions[g_strRTEInsertCellLeft] = RTE_InsertCellLeft;
    instanceVariables.functions[g_strRTEInsertCellRight] = RTE_InsertCellRight;
    var strHtmlRet = "";

    strHtmlRet += RTE_TB_GenerateOpenCellButtonHtml(strBaseElementID, g_strRTEInsertCellMnemonic, "RTE_DD_OpenInsertCellSelector('" + strBaseElementID + "' ,'" + strWebLanguage + "')");
    strHtmlRet += Strings.STS.L_InsertCellLabel_TEXT;
    strHtmlRet += "<div class='clip16x16'><img class='ms-rteicell' src=\"" + RTE_GetServerRelativeImageUrl("rtecluster.png") + "\" alt=\"" + Strings.STS.L_InsertCellToolTip_TEXT + "\" border=\"0\" unselectable=\"on\"></div>";
    strHtmlRet += "<img alt=\"" + Strings.STS.L_InsertCellToolTip_TEXT + "\" src=\"" + RTE_GetServerRelativeUnlocalizedImageUrl("menudark.gif") + "\" border=\"0\" width=\"13\" height=\"13\" unselectable=\"on\">";
    strHtmlRet += RTE_TB_GenerateCloseCellButtonHtml();
    return strHtmlRet;
}
function RTE_DD_OpenInsertCellSelector(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strMnemonic = g_strRTEInsertCellMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertCellSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertCellSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSglM:
    ;
    var strCommandToPerform = g_strRTEInsertCellMnemonic;
    var strMenuHtml = g_rgstrRTEMenuHtml[strCommandToPerform];

    if (null != strMenuHtml) {
        return strMenuHtml;
    }
    strMenuHtml = RTE_DD_GenerateMenuOpenHtml();
    var rgstrItemNames = [];

    rgstrItemNames.push(Strings.STS.L_InsertCellLeftLabel_TEXT);
    rgstrItemNames.push(Strings.STS.L_InsertCellRightLabel_TEXT);
    var cMenuItems = rgstrItemNames.length;
    var iItem2 = 0;

    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem2, "RTE_DD_StartAction('" + g_strRTEInsertCellLeft + "', '" + strBaseElementID + "')", rgstrItemNames[iItem2], rgstrItemNames[iItem2], null, null, strWebLanguage);
    var iItem = 1;

    strMenuHtml += RTE_DD_GenerateMenuItemScriptHtml(1, iItem, "RTE_DD_StartAction('" + g_strRTEInsertCellRight + "', '" + strBaseElementID + "')", rgstrItemNames[iItem], rgstrItemNames[iItem], null, null, strWebLanguage);
    strMenuHtml += RTE_DD_GenerateMenuCloseHtml();
    g_rgstrRTEMenuHtml[strCommandToPerform] = [strMenuHtml, cMenuItems];
    return g_rgstrRTEMenuHtml[strCommandToPerform];
}
function RTE_GetCurrentSelectionChain(strBaseElementID) {
    var aChain = [];
    var elem = RTE_GetCurrentElement(strBaseElementID);

    while (elem != null) {
        aChain[aChain.length] = elem;
        if (elem.id == strBaseElementID || elem.tagName == "BODY") {
            break;
        }
        elem = elem.parentNode;
    }
    return aChain;
}
function RTE_IsElementInChain(aChain, strTagName) {
    if (aChain == null || aChain.length == 0) {
        return false;
    }
    var aChain_length = aChain.length;

    if (strTagName == null || strTagName.length == 0) {
        return false;
    }
    for (var i = 0; i < aChain_length; i++) {
        if (aChain[i].tagName == strTagName) {
            return true;
        }
    }
    return false;
}
var g_aTableCellTagNames;

function RTE_IsAnyElementInChain(aChain, aTagNames) {
    if (aChain == null || aChain.length == 0) {
        return false;
    }
    var aChain_length = aChain.length;

    if (aTagNames == null || aTagNames.length == 0) {
        return false;
    }
    var aTagNames_length = aTagNames.length;

    for (var i = 0; i < aChain_length; i++) {
        var currentTagName = aChain[i].tagName;

        for (var j = 0; j < aTagNames_length; j++) {
            if (currentTagName == aTagNames[j]) {
                return true;
            }
        }
    }
    return false;
}
function RTE_GetCurrentSelection(strBaseElementID) {
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (docEditor != null) {
        return docEditor.selection;
    }
    return null;
}
function RTE_GetCurrentSelectionType(strBaseElementID) {
    var selection = RTE_GetCurrentSelection(strBaseElementID);

    if (selection != null) {
        return selection.type;
    }
    return null;
}
function RTE_GetCurrentSelectionRange(strBaseElementID) {
    var selection = RTE_GetCurrentSelection(strBaseElementID);

    if (selection != null) {
        return selection.createRange();
    }
    return null;
}
function RTE_GetCurrentElement(strBaseElementID) {
    var selection = RTE_GetCurrentSelection(strBaseElementID);

    if (selection == null) {
        return null;
    }
    var range = selection.createRange();

    if (range == null) {
        return null;
    }
    var selectionType = selection.type;

    if (selectionType.toLowerCase() == "control") {
        if (range.length != 1) {
            return null;
        }
        return range.item(0);
    }
    else {
        var elemParent = range.parentElement();

        if (elemParent != null) {
            var editorDocumentBody = (RTE_GetEditorDocument(strBaseElementID)).body;

            if (editorDocumentBody.contains(elemParent)) {
                return elemParent;
            }
        }
    }
    return null;
}
function RTE_IsElementSelected(strBaseElementID, strTagName) {
ULSglM:
    ;
    var currentElement = RTE_GetCurrentElement(strBaseElementID);

    if (currentElement != null) {
        if (currentElement.tagName == strTagName) {
            return true;
        }
    }
    return false;
}
function RTE_GetNearestContainingParentElementOfType(strBaseElementID, elem, strTagName) {
    return RTE_GetNearestContainingParentElementOfTypes(strBaseElementID, elem, [strTagName]);
}
function RTE_GetNearestContainingParentElementOfTypes(strBaseElementID, elem, aTagNames) {
    var aTagNames_length = aTagNames.length;

    if (elem == null)
        return null;
    for (var i2 = 0; i2 < aTagNames_length; i2++) {
        if (elem.tagName == aTagNames[i2]) {
            return elem;
        }
    }
    var elemParent = elem.parentNode;

    while (elemParent != null) {
        if (elemParent.id == strBaseElementID) {
            return null;
        }
        for (var i = 0; i < aTagNames_length; i++) {
            if (elemParent.tagName == aTagNames[i]) {
                return elemParent;
            }
        }
        elemParent = elemParent.parentNode;
    }
    return null;
}
function RTE_GetNearestContainingElementOfType(strBaseElementID, strTagName) {
ULSglM:
    ;
    var elem = RTE_GetCurrentElement(strBaseElementID);

    return RTE_GetNearestContainingParentElementOfType(strBaseElementID, elem, strTagName);
}
function RTE_GetNearestContainingElementOfTypes(strBaseElementID, aTagNames) {
ULSglM:
    ;
    var elem = RTE_GetCurrentElement(strBaseElementID);

    return RTE_GetNearestContainingParentElementOfTypes(strBaseElementID, elem, aTagNames);
}
function RTE_GetContainedElements(strBaseElementID) {
ULSglM:
    ;
    var containedElements = [];
    var selection = RTE_GetCurrentSelection(strBaseElementID);

    if (selection != null && selection.type.toLowerCase() == "control") {
        var elemParent = RTE_GetCurrentElement(strBaseElementID);
        var elemParentAll = elemParent.all;

        for (var i = 0; i < elemParentAll.length; i++) {
            containedElements[containedElements.length] = elemParentAll(i);
        }
        containedElements[containedElements.length] = elemParent;
    }
    else {
        var rngSelection = RTE_GetCurrentSelectionRange(strBaseElementID);

        if (rngSelection != null) {
            var elemParent2 = RTE_GetOutermostSelectionElement(strBaseElementID);

            if (elemParent2 != null) {
                var elemParentAll2 = elemParent2.all;

                if (rngSelection.text == elemParent2.outerText) {
                    for (var i2 = 0; i2 < elemParentAll2.length; i2++) {
                        containedElements[containedElements.length] = elemParentAll2(i2);
                    }
                    containedElements[containedElements.length] = elemParent2;
                }
                else {
                    var rngContainedElement = rngSelection.duplicate();

                    for (var i3 = 0; i3 < elemParentAll2.length; i3++) {
                        rngContainedElement.moveToElementText(elemParentAll2(i3));
                        if (rngSelection.inRange(rngContainedElement)) {
                            containedElements[containedElements.length] = elemParentAll2(i3);
                        }
                    }
                }
            }
        }
    }
    return containedElements;
}
function RTE_GetOutermostSelectionElement(strBaseElementID) {
ULSglM:
    ;
    var elemParent = null;
    var selection = RTE_GetCurrentSelection(strBaseElementID);

    if (selection != null && selection.type.toLowerCase() == "control") {
        elemParent = RTE_GetCurrentElement(strBaseElementID);
        var containedElements = elemParent.all;

        containedElements[containedElements.length] = elemParent;
    }
    else {
        var rngSelection = RTE_GetCurrentSelectionRange(strBaseElementID);

        if (rngSelection != null) {
            elemParent = RTE_GetInnerMostContainingElement(rngSelection);
            if (elemParent != null) {
                var elemFullyContainedParent = null;

                while (elemParent != null && elemParent.tagName != "BODY" && rngSelection.text == elemParent.outerText) {
                    elemFullyContainedParent = elemParent;
                    elemParent = elemParent.parentNode;
                }
                if (elemFullyContainedParent != null) {
                    elemParent = elemFullyContainedParent;
                }
            }
        }
    }
    return elemParent;
}
function RTE_GetInnerMostContainingElement(range) {
ULSglM:
    ;
    var element = RTE_GetContainingParent(range);

    if (element != null) {
        var rangeElement = range.duplicate();
        var elementFound = false;

        while (!elementFound) {
            var containingChildFound = false;
            var elementChildren = element.childNodes;

            for (var i = 0; i < elementChildren.length; i++) {
                if (elementChildren[i].nodeType != 3) {
                    rangeElement.moveToElementText(elementChildren[i]);
                    if (rangeElement.inRange(range)) {
                        containingChildFound = true;
                        element = elementChildren[i];
                        break;
                    }
                }
            }
            if (!containingChildFound) {
                elementFound = true;
            }
        }
    }
    return element;
}
function RTE_GetContainingParent(range) {
ULSglM:
    ;
    var element = range.parentElement();

    if (element != null) {
        var rangeElement = range.duplicate();

        rangeElement.moveToElementText(element);
        while (element != null && element.tagName != "BODY" && !rangeElement.inRange(range)) {
            element = element.parentNode;
            rangeElement.moveToElementText(element);
        }
    }
    return element;
}
function RTE_GetSelectedCells(strBaseElementID) {
ULSglM:
    ;
    var selectedCells = [];

    if (RTE_IsElementSelected(strBaseElementID, "TR")) {
        var elemRowCurrent = RTE_GetCurrentElement(strBaseElementID);

        if (elemRowCurrent != null) {
            var rngSelection = RTE_GetCurrentSelectionRange(strBaseElementID);
            var rngContainedElement = rngSelection.duplicate();

            for (var i = 0; i < elemRowCurrent.cells.length; i++) {
                rngContainedElement.moveToElementText(elemRowCurrent.cells(i));
                if (rngSelection.inRange(rngContainedElement)) {
                    selectedCells[selectedCells.length] = elemRowCurrent.cells(i);
                }
                else if (rngSelection.compareEndPoints("StartToStart", rngContainedElement) == 1 && rngSelection.compareEndPoints("StartToEnd", rngContainedElement) == -1) {
                    selectedCells[selectedCells.length] = elemRowCurrent.cells(i);
                }
                else if (rngSelection.compareEndPoints("EndToStart", rngContainedElement) == 1 && rngSelection.compareEndPoints("EndToEnd", rngContainedElement) == -1) {
                    selectedCells[selectedCells.length] = elemRowCurrent.cells(i);
                }
            }
        }
    }
    return selectedCells;
}
function RTE_InsertCellLeft(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertCellLeft != "undefined" && overrides.InsertCellLeft != null) {
            overrides.InsertCellLeft(strBaseElementID);
            return;
        }
    }
    if (RTE_GetDirectionOfSelection(strBaseElementID) == "rtl") {
        RTE_InsertCellBase(strBaseElementID, "afterEnd");
    }
    else {
        RTE_InsertCellBase(strBaseElementID, "beforeBegin");
    }
}
function RTE_InsertCellRight(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertCellRight != "undefined" && overrides.InsertCellRight != null) {
            overrides.InsertCellRight(strBaseElementID);
            return;
        }
    }
    if (RTE_GetDirectionOfSelection(strBaseElementID) == "rtl") {
        RTE_InsertCellBase(strBaseElementID, "beforeBegin");
    }
    else {
        RTE_InsertCellBase(strBaseElementID, "afterEnd");
    }
}
function RTE_InsertCellBase(strBaseElementID, strWhere) {
ULSglM:
    ;
    var elemCellCurrent = RTE_GetNearestContainingElementOfTypes(strBaseElementID, g_aTableCellTagNames);

    if (elemCellCurrent == null) {
        return;
    }
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (docEditor == null) {
        return;
    }
    var elemCellNew = docEditor.createElement(elemCellCurrent.tagName);

    if (elemCellNew == null) {
        return;
    }
    elemCellNew.mergeAttributes(elemCellCurrent, true);
    elemCellNew.runtimeStyle.cssText = elemCellCurrent.runtimeStyle.cssText;
    insertAdjacentElement(elemCellCurrent, strWhere, elemCellNew);
    var textRange = docEditor.body.createTextRange();

    textRange.moveToElementText(elemCellNew);
    textRange.select();
    var elemTableCurrent = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellCurrent, "TABLE");

    if (null != elemTableCurrent) {
        RTE_ReapplyTableStyles(elemTableCurrent);
    }
}
function RTE_InsertRowAbove(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertRowAbove != "undefined" && overrides.InsertRowAbove != null) {
            overrides.InsertRowAbove(strBaseElementID);
            return;
        }
    }
    RTE_InsertRowBase(strBaseElementID, "beforeBegin");
}
function RTE_InsertRowBelow(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertRowBelow != "undefined" && overrides.InsertRowBelow != null) {
            overrides.InsertRowBelow(strBaseElementID);
            return;
        }
    }
    RTE_InsertRowBase(strBaseElementID, "afterEnd");
}
function RTE_InsertRowBase(strBaseElementID, strWhere) {
ULSglM:
    ;
    var elemRowSelected = RTE_GetNearestContainingElementOfType(strBaseElementID, "TR");

    if (elemRowSelected == null) {
        return;
    }
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (docEditor == null) {
        return;
    }
    var elemRowNew = docEditor.createElement("TR");

    if (elemRowNew == null) {
        return;
    }
    elemRowNew.mergeAttributes(elemRowSelected, true);
    elemRowNew.runtimeStyle.cssText = elemRowSelected.runtimeStyle.cssText;
    insertAdjacentElement(elemRowSelected, strWhere, elemRowNew);
    var cells = elemRowSelected.cells;

    for (var i = 0; i < cells.length; i++) {
        var elemCellNew = elemRowNew.insertCell(-1);

        elemCellNew.mergeAttributes(cells(i), true);
        elemCellNew.runtimeStyle.cssText = (cells(i)).runtimeStyle.cssText;
    }
    var textRange = docEditor.body.createTextRange();
    var dir = RTE_GetDirectionOfSelection(strBaseElementID);

    if (dir == "ltr") {
        textRange.moveToElementText(elemRowNew.cells(0));
    }
    else {
        textRange.moveToElementText(elemRowNew.cells(elemRowNew.cells.length - 1));
    }
    textRange.select();
    var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemRowSelected, "TABLE");

    if (null != elemTableSelected) {
        RTE_ReapplyTableStyles(elemTableSelected);
    }
}
function RTE_InsertColumnLeft(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertColumnLeft != "undefined" && overrides.InsertColumnLeft != null) {
            return overrides.InsertColumnLeft(strBaseElementID);
        }
    }
    if (RTE_GetDirectionOfSelection(strBaseElementID) == "rtl") {
        return RTE_InsertColumnBase(strBaseElementID, "afterEnd");
    }
    else {
        return RTE_InsertColumnBase(strBaseElementID, "beforeBegin");
    }
}
function RTE_InsertColumnRight(strBaseElementID) {
ULSglM:
    ;
    var instanceVariables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (instanceVariables != null) {
        var overrides = instanceVariables.overrides;

        if (typeof overrides.InsertColumnRight != "undefined" && overrides.InsertColumnRight != null) {
            return overrides.InsertColumnRight(strBaseElementID);
        }
    }
    if (RTE_GetDirectionOfSelection(strBaseElementID) == "rtl") {
        return RTE_InsertColumnBase(strBaseElementID, "beforeBegin");
    }
    else {
        return RTE_InsertColumnBase(strBaseElementID, "afterEnd");
    }
}
function RTE_InsertColumnBase(strBaseElementID, strWhere) {
ULSglM:
    ;
    var elemCellSelected = RTE_GetNearestContainingElementOfTypes(strBaseElementID, g_aTableCellTagNames);

    if (elemCellSelected == null) {
        return;
    }
    var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TABLE");

    if (elemTableSelected == null) {
        return;
    }
    var docEditor = RTE_GetEditorDocument(strBaseElementID);

    if (docEditor == null)
        return;
    var colSpanIndex = 0;
    var colSpanCount = 0;
    var currentCellPosition = -1;
    var elemRowSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TR");

    if (elemRowSelected != null) {
        var elemRowSelectedCells = elemRowSelected.cells;
        var elemRowSelectedCellsLength = elemRowSelectedCells.length;

        for (var i2 = 0; i2 < elemRowSelectedCellsLength; i2++) {
            colSpanCount = elemRowSelectedCells[i2].colSpan;
            if (elemRowSelectedCells[i2] == elemCellSelected) {
                currentCellPosition = i2;
                break;
            }
            colSpanIndex += colSpanCount;
        }
    }
    var elemTableSelectedRows = elemTableSelected.rows;
    var elemTableSelectedRowsLength = elemTableSelectedRows.length;

    for (var i = 0; i < elemTableSelectedRowsLength; i++) {
        var elemRow = elemTableSelectedRows[i];

        if (elemRow != null) {
            var currentColSpanIndex = 0;
            var currentColSpanCount = 0;
            var elemRowCells = elemRow.cells;
            var elemRowCellsLength = elemRowCells.length;

            for (var j = 0; j < elemRowCellsLength; j++) {
                var elemCell = elemRowCells[j];

                currentColSpanCount = elemCell.colSpan;
                if (strWhere == "beforeBegin") {
                    if (currentColSpanIndex == colSpanIndex) {
                        var elemCellNew2 = docEditor.createElement(elemCell.tagName);

                        if (elemCellNew2 != null) {
                            elemCellNew2.mergeAttributes(elemCell, true);
                            elemCellNew2.runtimeStyle.cssText = elemCell.runtimeStyle.cssText;
                            elemCellNew2.colSpan = 1;
                            insertAdjacentElement(elemCell, strWhere, elemCellNew2);
                            if (i == 0) {
                                var textRange2 = docEditor.body.createTextRange();

                                if (textRange2 != null) {
                                    textRange2.moveToElementText(elemCellNew2);
                                    textRange2.select();
                                }
                            }
                        }
                        break;
                    }
                    else if (currentColSpanIndex + currentColSpanCount > colSpanIndex) {
                        elemCell.colSpan++;
                        break;
                    }
                }
                else if (strWhere == "afterEnd") {
                    if (currentColSpanIndex + currentColSpanCount == colSpanIndex + colSpanCount) {
                        var elemCellNew = docEditor.createElement(elemCell.tagName);

                        if (elemCellNew != null) {
                            elemCellNew.mergeAttributes(elemCell, true);
                            elemCellNew.runtimeStyle.cssText = elemCell.runtimeStyle.cssText;
                            elemCellNew.colSpan = 1;
                            insertAdjacentElement(elemCell, strWhere, elemCellNew);
                            if (i == 0) {
                                var textRange = docEditor.body.createTextRange();

                                if (textRange != null) {
                                    textRange.moveToElementText(elemCellNew);
                                    textRange.select();
                                }
                            }
                        }
                        break;
                    }
                    else if (currentColSpanIndex + currentColSpanCount > colSpanIndex + colSpanCount) {
                        elemCell.colSpan++;
                        break;
                    }
                }
                currentColSpanIndex += currentColSpanCount;
            }
        }
    }
    RTE_ReapplyTableStyles(elemTableSelected);
}
function RTE_DeleteColumn(strBaseElementID) {
    var elemCellSelected = RTE_GetNearestContainingElementOfTypes(strBaseElementID, g_aTableCellTagNames);

    if (elemCellSelected == null) {
        return;
    }
    var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TABLE");

    if (elemTableSelected == null) {
        return;
    }
    var elemCellSelectedIndex = elemCellSelected.cellIndex;
    var colSpanIndex = 0;
    var colSpanCount = 0;
    var currentCellPosition = -1;
    var elemRowSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TR");

    if (elemRowSelected != null) {
        var elemRowSelectedCells = elemRowSelected.cells;
        var elemRowSelectedCellsLength = elemRowSelectedCells.length;

        for (var i2 = 0; i2 < elemRowSelectedCellsLength; i2++) {
            colSpanCount = elemRowSelectedCells[i2].colSpan;
            if (elemRowSelectedCells[i2] == elemCellSelected) {
                currentCellPosition = i2;
                break;
            }
            colSpanIndex += colSpanCount;
        }
    }
    var elemTableSelectedRows = elemTableSelected.rows;
    var elemTableSelectedRowsLength = elemTableSelectedRows.length;

    for (var i = 0; i < elemTableSelectedRowsLength; i++) {
        var elemRow = elemTableSelectedRows[i];

        if (elemRow != null) {
            var currentColSpanIndex = 0;
            var currentColSpanCount = 0;
            var cellsToModify = [];
            var elemRowCells = elemRow.cells;
            var elemRowCellsLength = elemRowCells.length;

            for (var j = 0; j <= elemRowCellsLength; j++) {
                if (currentColSpanIndex >= colSpanIndex + colSpanCount) {
                    for (var k = 0; k < cellsToModify.length; k++) {
                        var cell = cellsToModify[k][0];
                        var decrement = cellsToModify[k][1];

                        if (decrement == cell.colSpan) {
                            (cell.parentNode()).removeChild(cell);
                        }
                        else {
                            cell.colSpan -= decrement;
                        }
                    }
                    break;
                }
                var elemCell = elemRowCells[j];

                currentColSpanCount = elemCell.colSpan;
                if (currentColSpanIndex + currentColSpanCount <= colSpanIndex) {
                    currentColSpanIndex += currentColSpanCount;
                    continue;
                }
                else {
                    var colSpanDecrement = 0;

                    if (currentColSpanIndex >= colSpanIndex && currentColSpanIndex + currentColSpanCount <= colSpanIndex + colSpanCount) {
                        colSpanDecrement = currentColSpanCount;
                    }
                    else if (currentColSpanIndex <= colSpanIndex && currentColSpanIndex + currentColSpanCount >= colSpanIndex + colSpanCount) {
                        colSpanDecrement = colSpanCount;
                    }
                    else if (currentColSpanIndex <= colSpanIndex && currentColSpanIndex + currentColSpanCount < colSpanIndex + colSpanCount) {
                        colSpanDecrement = currentColSpanIndex + currentColSpanCount - colSpanIndex;
                    }
                    else if (currentColSpanIndex > colSpanIndex && currentColSpanIndex + currentColSpanCount > colSpanIndex + colSpanCount) {
                        colSpanDecrement = colSpanIndex + colSpanCount - currentColSpanIndex;
                    }
                    cellsToModify[cellsToModify.length] = [elemCell, colSpanDecrement];
                }
                currentColSpanIndex += currentColSpanCount;
            }
        }
    }
    var rows = elemTableSelected.rows;
    var rowsLength = rows.length;

    for (var i3 = rowsLength; i3 > 0; i3--) {
        var row = rows[i3 - 1];

        if (row.cells.length == 0) {
            (row.parentNode()).removeChild(row);
        }
    }
    if (elemTableSelected.rows.length == 0) {
        elemTableSelected.parentNode.removeChild(elemTableSelected);
    }
    else {
        var moveSelectionToCellIndex = 0;
        var moveSelectionToSpanCount = 0;
        var row0 = rows[0];
        var elemTableTopRowCells = row0.cells;

        for (var i4 = 0; i4 < elemTableTopRowCells.length; i4++) {
            moveSelectionToCellIndex = i4;
            var elemTableTopRowCellsI4 = elemTableTopRowCells[i4];
            var currentSpanCount = elemTableTopRowCellsI4.colSpan;

            if (moveSelectionToSpanCount + currentSpanCount > colSpanIndex)
                break;
            moveSelectionToSpanCount += currentSpanCount;
        }
        var editorDocument = RTE_GetEditorDocument(strBaseElementID);
        var textRange = editorDocument.body.createTextRange();
        var cellToSelect = elemTableTopRowCells[moveSelectionToCellIndex];

        textRange.moveToElementText(cellToSelect);
        textRange.select();
        textRange.collapse(true);
        RTE_ReapplyTableStyles(elemTableSelected);
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_DeleteRow(strBaseElementID) {
ULSglM:
    ;
    var elemRowSelected = RTE_GetNearestContainingElementOfType(strBaseElementID, "TR");

    if (elemRowSelected != null) {
        var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemRowSelected, "TABLE");
        var elemTableNewSelectionRowIndex = elemRowSelected.rowIndex;

        elemRowSelected.parentNode.removeChild(elemRowSelected);
        if (null != elemTableSelected) {
            if (elemTableSelected.rows.length > 0) {
                if (elemTableNewSelectionRowIndex >= elemTableSelected.rows.length) {
                    elemTableNewSelectionRowIndex = elemTableSelected.rows.length - 1;
                }
                var row = elemTableSelected.rows[elemTableNewSelectionRowIndex];
                var elemTableNewSelectionRowCells = row.cells;
                var editorDocument = RTE_GetEditorDocument(strBaseElementID);
                var textRange = editorDocument.body.createTextRange();

                if (elemTableNewSelectionRowCells.length > 0) {
                    var cellToSelect = elemTableNewSelectionRowCells[0];

                    textRange.moveToElementText(cellToSelect);
                    textRange.select();
                    textRange.collapse(true);
                }
                RTE_ReapplyTableStyles(elemTableSelected);
            }
            else {
                elemTableSelected.parentNode.removeChild(elemTableSelected);
            }
        }
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_SplitCell(strBaseElementID) {
ULSglM:
    ;
    var elemCellSelected = RTE_GetNearestContainingElementOfTypes(strBaseElementID, g_aTableCellTagNames);

    if (elemCellSelected == null) {
        return;
    }
    var currentCellPosition = -1;
    var colSpanCount = 0;
    var elemRowSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TR");

    if (elemRowSelected != null) {
        for (var i = 0; i < elemRowSelected.cells.length; i++) {
            colSpanCount += elemRowSelected.cells[i].colSpan;
            if (elemRowSelected.cells[i] == elemCellSelected) {
                currentCellPosition = i;
                break;
            }
        }
    }
    var elemCellNew = document.createElement(elemCellSelected.tagName);

    if (elemCellNew != null) {
        elemCellNew.mergeAttributes(elemCellSelected, true);
        elemCellNew.runtimeStyle.cssText = elemCellSelected.runtimeStyle.cssText;
        if (elemCellSelected.colSpan > 1) {
            elemCellNew.colSpan = elemCellSelected.colSpan / 2;
            elemCellSelected.colSpan -= elemCellNew.colSpan;
        }
        else {
            elemCellNew.colSpan = 1;
            var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemRowSelected, "TABLE");

            for (var i2 = 0; i2 < elemTableSelected.rows.length; i2++) {
                var currentColSpanCount = 0;
                var elemRow = elemTableSelected.rows[i2];

                if (elemRow != null && elemRow != elemRowSelected) {
                    for (var j = 0; j < elemRow.cells.length; j++) {
                        var elemCell = elemRow.cells[j];

                        currentColSpanCount += elemCell.colSpan;
                        if (currentColSpanCount >= colSpanCount) {
                            elemCell.colSpan++;
                            break;
                        }
                    }
                }
            }
        }
        insertAdjacentElement(elemCellSelected, "afterEnd", elemCellNew);
        var elemTableSelected2 = RTE_GetNearestContainingElementOfType(strBaseElementID, "TABLE");

        if (null != elemTableSelected2) {
            RTE_ReapplyTableStyles(elemTableSelected2);
        }
        RTE_StartResetToolBarTimer(strBaseElementID);
    }
}
function RTE_MergeCells(strBaseElementID) {
ULSglM:
    ;
    if (RTE_IsElementSelected(strBaseElementID, "TR")) {
        RTE_MergeSelected(strBaseElementID);
    }
    else {
        RTE_MergeWithDirection(strBaseElementID, "none");
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_MergeSelected(strBaseElementID) {
ULSglM:
    ;
    var elemRowSelected = RTE_GetCurrentElement(strBaseElementID);

    if (elemRowSelected.tagName != "TR")
        return;
    if (elemRowSelected != null) {
        var selectedCells = RTE_GetSelectedCells(strBaseElementID);

        if (selectedCells.length > 1) {
            for (var i = 1; i < selectedCells.length; i++) {
                if (selectedCells[i].innerText.length > 0) {
                    selectedCells[0].innerHTML += " ";
                }
                selectedCells[0].innerHTML += selectedCells[i].innerHTML;
                selectedCells[0].colSpan += selectedCells[i].colSpan;
                elemRowSelected.removeChild(selectedCells[i]);
            }
            var elemTableSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemRowSelected, "TABLE");

            if (null != elemTableSelected) {
                RTE_ReapplyTableStyles(elemTableSelected);
            }
            if (RTE_GetCurrentElement(strBaseElementID) != selectedCells[0]) {
                var editorDocument = RTE_GetEditorDocument(strBaseElementID);
                var textRange = editorDocument.body.createTextRange();

                textRange.moveToElementText(selectedCells[0]);
                textRange.select();
            }
        }
    }
}
function RTE_MergeWithRight(strBaseElementID) {
ULSglM:
    ;
    RTE_MergeWithDirection(strBaseElementID, "right");
}
function RTE_MergeWithLeft(strBaseElementID) {
ULSglM:
    ;
    RTE_MergeWithDirection(strBaseElementID, "left");
}
function RTE_MergeWithAbove(strBaseElementID) {
ULSglM:
    ;
    RTE_MergeWithDirection(strBaseElementID, "above");
}
function RTE_MergeWithBelow(strBaseElementID) {
ULSglM:
    ;
    RTE_MergeWithDirection(strBaseElementID, "below");
}
function RTE_MergeWithDirection(strBaseElementID, dir) {
ULSglM:
    ;
    RTE_MergeSelected(strBaseElementID);
    var elemSelected = RTE_GetCurrentElement(strBaseElementID);

    if (elemSelected == null)
        return;
    var elemCellSelected = RTE_GetNearestContainingParentElementOfTypes(strBaseElementID, elemSelected, g_aTableCellTagNames);

    if (elemCellSelected == null)
        return;
    var elemRowSelected = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemCellSelected, "TR");

    if (elemRowSelected == null)
        return;
    var elemTable = RTE_GetNearestContainingParentElementOfType(strBaseElementID, elemRowSelected, "TABLE");

    if (RTE_GetDirectionOfSelection(strBaseElementID) == "rtl") {
        if (dir == "right") {
            dir = "left";
        }
        else if (dir == "left") {
            dir = "right";
        }
    }
    switch (dir) {
    case "right":
        var mergeFromIndex = elemCellSelected.cellIndex;
        var rowCells = elemRowSelected.cells;

        if (mergeFromIndex + 1 >= rowCells.length)
            return;
        if (rowCells[mergeFromIndex + 1].rowSpan == rowCells[mergeFromIndex].rowSpan) {
            RTE_MergeHorizontal(strBaseElementID, elemRowSelected, mergeFromIndex);
        }
        else {
            alert(Strings.STS.L_InvalidMerge_TEXT);
        }
        break;
    case "left":
        var mergeFromIndex2 = elemCellSelected.cellIndex - 1;
        var rowCells2 = elemRowSelected.cells;

        if (mergeFromIndex2 < 0)
            return;
        if (rowCells2[mergeFromIndex2 + 1].rowSpan == rowCells2[mergeFromIndex2].rowSpan) {
            RTE_MergeHorizontal(strBaseElementID, elemRowSelected, mergeFromIndex2);
            RTE_PutSelectionInCell(strBaseElementID, elemRowSelected.cells[mergeFromIndex2]);
        }
        else {
            alert(Strings.STS.L_InvalidMerge_TEXT);
        }
        break;
    case "above":
        if (elemTable == null)
            return;
        if (elemRowSelected.rowIndex == 0)
            return;
        var rowBelow = elemRowSelected;
        var rowBelowCells = rowBelow.cells;
        var rowBelowCell = elemCellSelected;
        var spanGrid = RTE_GenerateSpanGridUpToTarget(elemTable, elemCellSelected);
        var rowBelowCellColSpanIndex = spanGrid.targetCellColSpanIndex;
        var spanGridAboveTarget = spanGrid.columns[rowBelowCellColSpanIndex].cells[elemRowSelected.rowIndex - 1];
        var rowAboveCell = spanGridAboveTarget['cell'];

        if (rowBelowCell.colSpan == rowAboveCell.colSpan && spanGridAboveTarget['colSpanIndex'] == rowBelowCellColSpanIndex) {
            RTE_MergeVertical(strBaseElementID, rowBelow, rowBelowCell, rowAboveCell);
            RTE_PutSelectionInCell(strBaseElementID, rowAboveCell);
        }
        else {
            alert(Strings.STS.L_InvalidMerge_TEXT);
        }
        break;
    case "below":
        if (elemTable == null)
            return;
        var rowAboveCell2 = elemCellSelected;
        var spanGrid2 = RTE_GenerateSpanGridUpToTarget(elemTable, rowAboveCell2);
        var rowAboveCellColSpanIndex = spanGrid2.targetCellColSpanIndex;
        var spanGridBelowTarget = spanGrid2.columns[rowAboveCellColSpanIndex].cells[elemRowSelected.rowIndex + rowAboveCell2.rowSpan];

        if (spanGridBelowTarget == null)
            return;
        var rowBelowCell2 = spanGridBelowTarget['cell'];
        var rowBelow2 = RTE_GetNearestContainingParentElementOfType(strBaseElementID, rowBelowCell2, "TR");

        if (rowBelow2 == null)
            return;
        if (rowBelowCell2.colSpan == rowAboveCell2.colSpan && spanGridBelowTarget['colSpanIndex'] == rowAboveCellColSpanIndex) {
            RTE_MergeVertical(strBaseElementID, rowBelow2, rowBelowCell2, rowAboveCell2);
        }
        else {
            alert(Strings.STS.L_InvalidMerge_TEXT);
        }
        break;
    case "none":
        if (elemRowSelected.cells[elemCellSelected.cellIndex] != null && elemRowSelected.cells[elemCellSelected.cellIndex + 1] != null) {
            var dir2 = RTE_GetDirectionOfSelectionParent(elemCellSelected);

            if (dir2 != "rtl" && elemCellSelected.cellIndex == elemRowSelected.cells.length - 1 || dir2 == "rtl" && elemCellSelected.cellIndex != 0) {
                var mergeFromCellIndex = elemCellSelected.cellIndex - 1;

                if (mergeFromCellIndex < 0)
                    return;
                RTE_MergeHorizontal(strBaseElementID, elemRowSelected, mergeFromCellIndex);
                RTE_PutSelectionInCell(strBaseElementID, elemRowSelected.cells[mergeFromCellIndex]);
            }
            else {
                if (elemCellSelected.cellIndex + 1 >= elemRowSelected.length)
                    return;
                RTE_MergeHorizontal(strBaseElementID, elemRowSelected, elemCellSelected.cellIndex);
            }
        }
        break;
    }
    if (null != elemTable) {
        RTE_ReapplyTableStyles(elemTable);
    }
    RTE_StartResetToolBarTimer(strBaseElementID);
}
function RTE_MergeHorizontal(strBaseElementID, elemRow, mergeFromIndex) {
    var rowCells = elemRow.cells;

    if (rowCells[mergeFromIndex].innerText.length > 0) {
        rowCells[mergeFromIndex].innerHTML += " ";
    }
    rowCells[mergeFromIndex].innerHTML += rowCells[mergeFromIndex + 1].innerHTML;
    rowCells[mergeFromIndex].colSpan += rowCells[mergeFromIndex + 1].colSpan;
    elemRow.removeChild(rowCells[mergeFromIndex + 1]);
}
function RTE_MergeVertical(strBaseElementID, rowBelow, rowBelowCell, rowAboveCell) {
    if (rowAboveCell.innerText.length > 0) {
        rowAboveCell.innerHTML += " ";
    }
    rowAboveCell.innerHTML += rowBelowCell.innerHTML;
    rowAboveCell.rowSpan += rowBelowCell.rowSpan;
    rowBelow.removeChild(rowBelowCell);
}
function RTE_PutSelectionInCell(strBaseElementID, newCell) {
    if (RTE_GetCurrentElement(strBaseElementID) != newCell) {
        var editorDocument = RTE_GetEditorDocument(strBaseElementID);
        var textRange = editorDocument.body.createTextRange();

        textRange.moveToElementText(newCell);
        textRange.select();
    }
}
function RTE_SpanGrid_InitializePrototype() {
ULSglM:
    ;
    RTE_SpanGrid.prototype = {
        targetCellColSpanIndex: undefined,
        columns: undefined
    };
}
function RTE_SpanGrid() {
}
function RTE_GenerateSpanGridUpToTarget(table, targetCell) {
    var spanGrid = new RTE_SpanGrid;

    spanGrid.columns = [];
    spanGrid.targetCellColSpanIndex = -1;
    for (var rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
        var colSpanIndex = 0;

        for (var cellIndex = 0; cellIndex < table.rows[rowIndex].cells.length; cellIndex++) {
            while (spanGrid.columns[colSpanIndex] != null && spanGrid.columns[colSpanIndex].cells[rowIndex] != null) {
                colSpanIndex++;
            }
            if (spanGrid.columns[colSpanIndex] == null) {
                spanGrid.columns[colSpanIndex] = new Object();
                spanGrid.columns[colSpanIndex].cells = [];
            }
            var currentCell = table.rows[rowIndex].cells[cellIndex];

            if (currentCell == targetCell)
                spanGrid.targetCellColSpanIndex = colSpanIndex;
            spanGrid.columns[colSpanIndex].cells[rowIndex] = new Object();
            spanGrid.columns[colSpanIndex].cells[rowIndex].cell = currentCell;
            spanGrid.columns[colSpanIndex].cells[rowIndex].colSpanIndex = colSpanIndex;
            for (var j = 0; j < currentCell.colSpan; j++) {
                if (spanGrid.columns[colSpanIndex + j] == null) {
                    spanGrid.columns[colSpanIndex + j] = [];
                    spanGrid.columns[colSpanIndex + j].cells = [];
                }
                for (var i = 0; i < currentCell.rowSpan; i++) {
                    spanGrid.columns[colSpanIndex + j].cells[rowIndex + i] = new Object();
                    spanGrid.columns[colSpanIndex + j].cells[rowIndex + i].cell = currentCell;
                    spanGrid.columns[colSpanIndex + j].cells[rowIndex + i].colSpanIndex = colSpanIndex;
                }
            }
            colSpanIndex += currentCell.colSpan;
            if (spanGrid.targetCellColSpanIndex != -1 && colSpanIndex > spanGrid.targetCellColSpanIndex + targetCell.colSpan && rowIndex != targetCell.parentNode.rowIndex + targetCell.rowSpan - 1)
                break;
        }
    }
    return spanGrid;
}
function RTE_UrlFileName(href) {
    var filePath = href;

    filePath = (filePath.split("#"))[0];
    filePath = (filePath.split("?"))[0];
    var lastSlashPos = filePath.lastIndexOf('/');

    return filePath.substring(lastSlashPos + 1);
}
var g_reservedTablePrefix;

function RTE_GetReservedTableStyleRules(targetDocument) {
    return RTE_GetReservedStyleRules(targetDocument, g_reservedTablePrefix, "-");
}
function RTE_GetReservedStyleRules(targetDocument, prefix, defaultStyleSheetHref) {
    var reservedUserRules = [];
    var reservedDefaultRules = [];

    for (var i = 0; i < targetDocument.styleSheets.length; i++) {
        var styleSheet = targetDocument.styleSheets[i];

        if (RTE_UrlFileName(styleSheet.href) != defaultStyleSheetHref) {
            RTE_GetReservedStyleRulesFromStyleSheet(styleSheet, prefix, reservedUserRules);
        }
        else {
            RTE_GetReservedStyleRulesFromStyleSheet(styleSheet, prefix, reservedDefaultRules);
        }
    }
    if (reservedUserRules.length > 0) {
        return reservedUserRules;
    }
    else {
        return reservedDefaultRules;
    }
}
function RTE_GetReservedStyleRulesFromStyleSheet(styleSheet, prefix, reservedRules) {
ULSglM:
    ;
    try {
        var rules = styleSheet.rules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].selectorText.indexOf(prefix) >= 0) {
                reservedRules.push(rules[j]);
            }
        }
    }
    catch (e) { }
}
var msTableStylePrefix;
var msTableClass;
var msTableClassHeadingRow;
var msTableClassHeadingFirstCol;
var msTableClassHeadingOddCol;
var msTableClassHeadingEvenCol;
var msTableClassHeadingLastCol;
var msTableClassOddRow;
var msTableClassEvenRow;
var msTableClassFirstCol;
var msTableClassOddCol;
var msTableClassEvenCol;
var msTableClassLastCol;
var msTableClassFootingRow;
var msTableClassFootingFirstCol;
var msTableClassFootingOddCol;
var msTableClassFootingEvenCol;
var msTableClassFootingLastCol;

function RTE_ApplyTableStyle(tableStyleSuffix, table, formatHeadingRow, formatLastRow, formatFirstColumn, formatLastColumn, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    if (table != null) {
        RTE_AppendClassName(table, prefix + msTableClass + tableStyleSuffix);
        var rows = table.rows;
        var rowStartIndex = 0;
        var rowEndIndex = rows.length - 1;
        var doFormatHeadingRow = false;
        var doFormatLastRow = false;

        if (rows.length == 1) {
            if (formatHeadingRow) {
                doFormatHeadingRow = true;
                rowStartIndex++;
            }
            rowEndIndex = 0;
        }
        else {
            if (formatHeadingRow) {
                doFormatHeadingRow = true;
                rowStartIndex++;
            }
            if (formatLastRow) {
                doFormatLastRow = true;
                rowEndIndex--;
            }
        }
        if (doFormatHeadingRow) {
            var headingRow = rows(0);

            RTE_AppendClassName(headingRow, prefix + msTableClassHeadingRow + tableStyleSuffix);
            var oddEvenColumnSpecifier = 0;

            for (var i = 0; i < headingRow.cells.length; i++) {
                if (i == 0 && formatFirstColumn) {
                    RTE_AppendClassName(headingRow.cells(i), prefix + msTableClassHeadingFirstCol + tableStyleSuffix);
                    oddEvenColumnSpecifier = 1;
                }
                else if (i == headingRow.cells.length - 1 && formatLastColumn) {
                    RTE_AppendClassName(headingRow.cells(i), prefix + msTableClassHeadingLastCol + tableStyleSuffix);
                }
                else {
                    if (i % 2 == oddEvenColumnSpecifier) {
                        RTE_AppendClassName(headingRow.cells(i), prefix + msTableClassHeadingOddCol + tableStyleSuffix);
                    }
                    else {
                        RTE_AppendClassName(headingRow.cells(i), prefix + msTableClassHeadingEvenCol + tableStyleSuffix);
                    }
                }
            }
        }
        if (doFormatLastRow) {
            var lastRow = rows(rowEndIndex + 1);

            RTE_AppendClassName(lastRow, prefix + msTableClassFootingRow + tableStyleSuffix);
            var oddEvenColumnSpecifier2 = 0;

            for (var i2 = 0; i2 < lastRow.cells.length; i2++) {
                if (i2 == 0 && formatFirstColumn) {
                    RTE_AppendClassName(lastRow.cells(i2), prefix + msTableClassFootingFirstCol + tableStyleSuffix);
                    oddEvenColumnSpecifier2 = 1;
                }
                else if (i2 == lastRow.cells.length - 1 && formatLastColumn) {
                    RTE_AppendClassName(lastRow.cells(i2), prefix + msTableClassFootingLastCol + tableStyleSuffix);
                }
                else {
                    if (i2 % 2 == oddEvenColumnSpecifier2) {
                        RTE_AppendClassName(lastRow.cells(i2), prefix + msTableClassFootingOddCol + tableStyleSuffix);
                    }
                    else {
                        RTE_AppendClassName(lastRow.cells(i2), prefix + msTableClassFootingEvenCol + tableStyleSuffix);
                    }
                }
            }
        }
        var oddEvenRowSpecifier = 0;

        if (doFormatHeadingRow) {
            oddEvenRowSpecifier = 1;
        }
        for (var i3 = rowStartIndex; i3 <= rowEndIndex; i3++) {
            var currentRow = rows(i3);

            if (i3 % 2 == oddEvenRowSpecifier) {
                RTE_AppendClassName(currentRow, prefix + msTableClassOddRow + tableStyleSuffix);
            }
            else {
                RTE_AppendClassName(currentRow, prefix + msTableClassEvenRow + tableStyleSuffix);
            }
            var oddEvenColumnSpecifier3 = 0;

            for (var j = 0; j < currentRow.cells.length; j++) {
                if (j == 0 && formatFirstColumn) {
                    RTE_AppendClassName(currentRow.cells(j), prefix + msTableClassFirstCol + tableStyleSuffix);
                    oddEvenColumnSpecifier3 = 1;
                }
                else if (j == currentRow.cells.length - 1 && formatLastColumn) {
                    RTE_AppendClassName(currentRow.cells(j), prefix + msTableClassLastCol + tableStyleSuffix);
                }
                else {
                    if (j % 2 == oddEvenColumnSpecifier3) {
                        RTE_AppendClassName(currentRow.cells(j), prefix + msTableClassOddCol + tableStyleSuffix);
                    }
                    else {
                        RTE_AppendClassName(currentRow.cells(j), prefix + msTableClassEvenCol + tableStyleSuffix);
                    }
                }
            }
        }
    }
}
function RTE_ClearReservedTableStyles(table, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    if (table != null && table.tagName == "TABLE") {
        RTE_ClearReservedTableStylesFromElement(table, prefix);
        for (var i = 0; i < table.rows.length; i++) {
            var row = table.rows[i];

            RTE_ClearReservedTableStylesFromElement(row, prefix);
            for (var j = 0; j < row.cells.length; j++) {
                var cell = row.cells[j];

                RTE_ClearReservedTableStylesFromElement(cell, prefix);
            }
        }
    }
}
function RTE_ClearReservedTableStylesFromElement(element, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    if (element.className != null && element.className.length > 0) {
        var classNames = element.className.split(" ");
        var revisedClassNames = [];

        for (var i = 0; i < classNames.length; i++) {
            var className = classNames[i];

            if (className.indexOf(prefix) != 0) {
                revisedClassNames[revisedClassNames.length] = className;
            }
        }
        element.className = "";
        for (var i2 = 0; i2 < revisedClassNames.length; i2++) {
            RTE_AppendClassName(element, revisedClassNames[i2]);
        }
    }
}
function RTE_AppendClassName(element, className) {
ULSglM:
    ;
    if (element != null) {
        var newClassName = element.className;

        if (newClassName != null && newClassName.length > 0) {
            newClassName += " ";
        }
        newClassName += className;
        element.className = newClassName;
    }
}
function RTE_GetReservedTableStyleNumbers(table, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    var styleNumbers = [];

    if (table != null && table.tagName == "TABLE") {
        var tableClasses = table.className.split(" ");

        for (var i = 0; i < tableClasses.length; i++) {
            var tableClassName = tableClasses[i];
            var styleNameIndex = tableClassName.indexOf(prefix + msTableClass);

            if (styleNameIndex >= 0) {
                var tableStyleNumber = tableClassName.substr(styleNameIndex + prefix.length + msTableClass.length);

                styleNumbers[styleNumbers.length] = tableStyleNumber;
            }
        }
    }
    return styleNumbers;
}
function RTE_ReapplyTableStyles(table, prefix) {
    if (prefix == null) {
        var pos = table.className.indexOf("Table");

        if (pos >= 0) {
            prefix = table.className.substring(0, pos + 5);
        }
        else {
            prefix = msTableStylePrefix;
        }
    }
    if (table != null && table.rows.length > 0) {
        var reservedTableStyleNumbers = RTE_GetReservedTableStyleNumbers(table, prefix);

        if (reservedTableStyleNumbers.length > 0) {
            var tableStyleSettings = [];

            for (var i = 0; i < reservedTableStyleNumbers.length; i++) {
                var settings = [];
                var tableStyleNumber = reservedTableStyleNumbers[i];

                settings["tableStyleNumber"] = tableStyleNumber;
                settings["formatHeadingRow"] = RTE_ShouldFormatHeadingRow(tableStyleNumber, table, prefix);
                settings["formatLastRow"] = RTE_ShouldFormatLastRow(tableStyleNumber, table, prefix);
                settings["formatFirstColumn"] = RTE_ShouldFormatFirstColumn(tableStyleNumber, table, prefix);
                settings["formatLastColumn"] = RTE_ShouldFormatLastColumn(tableStyleNumber, table, prefix);
                tableStyleSettings[tableStyleSettings.length] = settings;
            }
            RTE_ClearReservedTableStyles(table, prefix);
            for (var i2 = 0; i2 < tableStyleSettings.length; i2++) {
                var settings2 = tableStyleSettings[i2];

                RTE_ApplyTableStyle(settings2["tableStyleNumber"], table, settings2["formatHeadingRow"], settings2["formatLastRow"], settings2["formatFirstColumn"], settings2["formatLastColumn"], prefix);
            }
        }
    }
}
function RTE_ShouldFormatHeadingRow(tableStyleNumber, table, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    var shouldFormatHeadingRow = false;

    if (tableStyleNumber != null && table != null && table.rows.length > 0) {
        var headingRow = table.rows[0];

        if (headingRow.className != null && headingRow.className.length > 0) {
            var headingRowClasses = headingRow.className.split(" ");

            for (var i = 0; i < headingRowClasses.length; i++) {
                var rowClassName = headingRowClasses[i];
                var reservedRowClassName = prefix + msTableClassHeadingRow + tableStyleNumber;

                if (rowClassName == reservedRowClassName) {
                    shouldFormatHeadingRow = true;
                    break;
                }
            }
        }
    }
    return shouldFormatHeadingRow;
}
function RTE_ShouldFormatLastRow(tableStyleNumber, table, prefix) {
    if (prefix == null)
        prefix = msTableStylePrefix;
    var shouldFormatLastRow = false;

    if (tableStyleNumber != null && table != null && table.rows.length > 0) {
        if (!(table.rows.length == 1 && RTE_ShouldFormatHeadingRow(tableStyleNumber, table, prefix))) {
            var lastRow = table.rows[table.rows.length - 1];

            if (lastRow.className != null && lastRow.className.length > 0) {
                var lastRowClasses = lastRow.className.split(" ");

                for (var i = 0; i < lastRowClasses.length; i++) {
                    var rowClassName = lastRowClasses[i];
                    var reservedRowClassName = prefix + msTableClassFootingRow + tableStyleNumber;

                    if (rowClassName == reservedRowClassName) {
                        shouldFormatLastRow = true;
                        break;
                    }
                }
            }
        }
    }
    return shouldFormatLastRow;
}
function RTE_ShouldFormatFirstColumn(tableStyleNumber, table, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    var shouldFormatFirstColumn = false;

    if (tableStyleNumber != null && table != null && table.rows.length > 0) {
        var reservedColClassName = prefix + msTableClassFirstCol;
        var testRow = table.rows[0];

        if (RTE_ShouldFormatHeadingRow(tableStyleNumber, table, prefix)) {
            reservedColClassName = prefix + msTableClassHeadingFirstCol;
        }
        else if (table.rows.length == 1 && RTE_ShouldFormatLastRow(tableStyleNumber, table, prefix)) {
            reservedColClassName = prefix + msTableClassFootingFirstCol;
        }
        if (testRow.cells.length > 0) {
            reservedColClassName += tableStyleNumber;
            var firstCell = testRow.cells[0];

            if (firstCell.className != null && firstCell.className.length > 0) {
                var firstCellClasses = firstCell.className.split(" ");

                for (var i = 0; i < firstCellClasses.length; i++) {
                    var cellClassName = firstCellClasses[i];

                    if (cellClassName == reservedColClassName) {
                        shouldFormatFirstColumn = true;
                        break;
                    }
                }
            }
        }
    }
    return shouldFormatFirstColumn;
}
function RTE_ShouldFormatLastColumn(tableStyleNumber, table, prefix) {
ULSglM:
    ;
    if (prefix == null)
        prefix = msTableStylePrefix;
    var shouldFormatLastColumn = false;

    if (tableStyleNumber != null && table != null && table.rows.length > 0) {
        var reservedColClassName = prefix + msTableClassLastCol;
        var testRow = table.rows[0];

        if (RTE_ShouldFormatHeadingRow(tableStyleNumber, table, prefix)) {
            reservedColClassName = prefix + msTableClassHeadingLastCol;
        }
        else if (table.rows.length == 1 && RTE_ShouldFormatLastRow(tableStyleNumber, table, prefix)) {
            reservedColClassName = prefix + msTableClassFootingLastCol;
        }
        if (testRow.cells.length > 0) {
            reservedColClassName += tableStyleNumber;
            if (!(testRow.cells.length == 1 && RTE_ShouldFormatFirstColumn(tableStyleNumber, table, prefix))) {
                var lastCell = testRow.cells[testRow.cells.length - 1];

                if (lastCell.className != null && lastCell.className.length > 0) {
                    var lastCellClasses = lastCell.className.split(" ");

                    for (var i = 0; i < lastCellClasses.length; i++) {
                        if (lastCellClasses[i] == reservedColClassName) {
                            shouldFormatLastColumn = true;
                            break;
                        }
                    }
                }
            }
        }
    }
    return shouldFormatLastColumn;
}
function C_RTE_TB_Enabler() {
}
function C_RTE_TB_ExecCmdButton_InitializePrototype() {
ULSglM:
    ;
    C_RTE_TB_ExecCmdButton.prototype.strMnemonic = undefined;
    C_RTE_TB_ExecCmdButton.prototype.strToolTip = undefined;
    C_RTE_TB_ExecCmdButton.prototype.fUi = undefined;
    C_RTE_TB_ExecCmdButton.prototype.strImage = undefined;
    C_RTE_TB_ExecCmdButton.prototype.fImageLoc = undefined;
    C_RTE_TB_ExecCmdButton.prototype.fOnlyIf = undefined;
    C_RTE_TB_ExecCmdButton.prototype.enabler = undefined;
    C_RTE_TB_ExecCmdButton.prototype.strValueExpr = undefined;
    C_RTE_TB_ExecCmdButton.prototype.Generate = function(strBaseElementID, strWebLanguage) {
        var strImagePath;

        if (this.fImageLoc) {
            strImagePath = RTE_GetServerRelativeImageUrl(this.strImage);
        }
        else {
            strImagePath = RTE_GetServerRelativeUnlocalizedImageUrl(this.strImage);
        }
        return RTE_TB_GenerateExecCommandToolBarButtonHtml(strBaseElementID, this.strMnemonic, this.fUi, strImagePath, "", this.strToolTip, this.fOnlyIf, this.strValueExpr);
    };
}
function C_RTE_TB_ExecCmdButton(mnemonic, tooltip, ui, image, imageloc, onlyif, valueexpr, enable) {
    this.strMnemonic = mnemonic;
    this.strToolTip = tooltip;
    this.fUi = ui;
    this.strImage = image;
    this.fImageLoc = imageloc;
    this.fOnlyIf = onlyif;
    this.enabler = enable;
    this.enabler.button = this;
    this.strValueExpr = valueexpr;
}
function C_RTE_TB_ExecCmdButtonClustered_InitializePrototype() {
ULSglM:
    ;
    C_RTE_TB_ExecCmdButtonClustered.prototype.strMnemonic = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.strToolTip = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.fUi = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.strImage = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.fOnlyIf = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.enabler = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.strValueExpr = undefined;
    C_RTE_TB_ExecCmdButtonClustered.prototype.Generate = function(strBaseElementID, strWebLanguage) {
        var strClusterPath = RTE_GetServerRelativeImageUrl("rtecluster.png");

        return RTE_TB_GenerateExecCommandToolBarButtonHtmlCluster(strBaseElementID, this.strMnemonic, this.fUi, strClusterPath, "ms-" + this.strImage, this.strToolTip, this.fOnlyIf, this.strValueExpr);
    };
}
function C_RTE_TB_ExecCmdButtonClustered(mnemonic, tooltip, ui, image, onlyif, valueexpr, enable) {
    this.strMnemonic = mnemonic;
    this.strToolTip = tooltip;
    this.fUi = ui;
    this.strImage = image;
    this.fOnlyIf = onlyif;
    this.enabler = enable;
    this.enabler.button = this;
    this.strValueExpr = valueexpr;
}
function C_RTE_TB_JScriptButton_InitializePrototype() {
ULSglM:
    ;
    C_RTE_TB_JScriptButton.prototype.strMnemonic = undefined;
    C_RTE_TB_JScriptButton.prototype.strToolTip = undefined;
    C_RTE_TB_JScriptButton.prototype.strFunction = undefined;
    C_RTE_TB_JScriptButton.prototype.strArgument = undefined;
    C_RTE_TB_JScriptButton.prototype.strImage = undefined;
    C_RTE_TB_JScriptButton.prototype.enabler = undefined;
    C_RTE_TB_JScriptButton.prototype.Generate = function(strBaseElementID, strWebLanguage) {
        return RTE_TB_GenerateSimpleToolBarButtonHtml(strBaseElementID, this.strMnemonic, this.strFunction, this.strArgument, RTE_GetServerRelativeImageUrl(this.strImage), "", this.strToolTip);
    };
}
function C_RTE_TB_JScriptButton(mnemonic, tooltip, func, arg, image, enable) {
    this.strMnemonic = mnemonic;
    this.strToolTip = tooltip;
    this.strFunction = func;
    this.strArgument = arg;
    this.strImage = image;
    this.enabler = enable;
    this.enabler.button = this;
}
function C_RTE_TB_JScriptButtonClustered_InitializePrototype() {
ULSglM:
    ;
    C_RTE_TB_JScriptButtonClustered.prototype.strMnemonic = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.strToolTip = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.strFunction = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.strArgument = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.strImage = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.enabler = undefined;
    C_RTE_TB_JScriptButtonClustered.prototype.Generate = function(strBaseElementID, strWebLanguage) {
        return RTE_TB_GenerateSimpleToolBarButtonHtmlCluster(strBaseElementID, this.strMnemonic, this.strFunction, this.strArgument, RTE_GetServerRelativeImageUrl("rtecluster.png"), "ms-" + this.strImage, this.strToolTip);
    };
}
function C_RTE_TB_JScriptButtonClustered(mnemonic, tooltip, func, arg, image, enable) {
    this.strMnemonic = mnemonic;
    this.strToolTip = tooltip;
    this.strFunction = func;
    this.strArgument = arg;
    this.strImage = image;
    this.enabler = enable;
    this.enabler.button = this;
}
function C_RTE_TB_SpecialButton_InitializePrototype() {
ULSglM:
    ;
    C_RTE_TB_SpecialButton.prototype.specialFunction = undefined;
    C_RTE_TB_SpecialButton.prototype.strMnemonic = undefined;
    C_RTE_TB_SpecialButton.prototype.fRestricted = undefined;
    C_RTE_TB_SpecialButton.prototype.enabler = undefined;
    C_RTE_TB_SpecialButton.prototype.Generate = function(strBaseElementID, strWebLanguage) {
        return this.specialFunction(strBaseElementID, strWebLanguage, this.fRestricted);
    };
}
function C_RTE_TB_SpecialButton(mnemonic, func, fRestricted, enable) {
    this.specialFunction = func;
    this.strMnemonic = mnemonic;
    this.fRestricted = fRestricted;
    this.enabler = enable;
    this.enabler.button = this;
}
function C_RTE_TB_Separator() {
ULSglM:
    ;
    function methodGenerate(strBaseElementID, strWebLanguage) {
    ULSglM:
        ;
        return RTE_TB_GenerateToolBarSeparatorHtml();
    }
    this.Generate = methodGenerate;
}
function C_RTE_TB_LineBreak() {
ULSglM:
    ;
    function methodGenerate(strBaseElementID, strWebLanguage) {
    ULSglM:
        ;
        return RTE_TB_GenerateToolBarLineBreakHtml();
    }
    this.Generate = methodGenerate;
}
function C_RTE_TB_SetEnabledAlways() {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledWhenRemoveFormatEnabled() {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        var btn = RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']);

        if (typeof docEditor.queryCommandEnabled != "undefined" && docEditor.queryCommandEnabled("Delete") && docEditor.queryCommandEnabled(g_strRTERemoveFormatMnemonic)) {
            RTE_TB_ClearButtonDisabled(btn);
        }
        else {
            RTE_TB_SetButtonDisabled(btn);
        }
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledFromCommandEnabled() {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        RTE_TB_SetEnabledFromCommandEnabled(strBaseElementID, docEditor, this.button['strMnemonic'], this.button['strMnemonic']);
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledFromCommandValue() {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
        RTE_TB_SetCheckFromCommandValue(strBaseElementID, docEditor, this.button['strMnemonic']);
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledFromCommandValueIfNotInTable() {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        if (aElemChain[0] != "TABLE" && aElemChain[0] != "TR") {
            RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
            RTE_TB_SetCheckFromCommandValue(strBaseElementID, docEditor, this.button['strMnemonic']);
        }
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledIfInElement(strElement) {
ULSglM:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSglM:
        ;
        RTE_TB_SetEnabledIfInElement(strBaseElementID, aElemChain, this.button['strMnemonic'], this.strElement);
    }
    this.strElement = strElement;
    this.SetEnabled = methodSetEnabled;
}
function RTE_GetToolBarDefinition(strBaseElementID, strWebLanguage) {
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    if (variables != null && variables.overrides.GetToolBarDefinition != null) {
        return variables.overrides.GetToolBarDefinition(strBaseElementID, strWebLanguage);
    }
    else if (variables != null) {
        return RTE_GetCompatibleToolBarDefinition(strWebLanguage, variables.aSettings.fRestrictedMode, variables.aSettings.fAllowHyperlink, variables.aSettings.fIsVisible);
    }
    else {
        return null;
    }
}
var g_rgCompatibleToolBarDefinition;

function RTE_GetCompatibleToolBarDefinition(strWebLanguage, fRestrictedMode, fAllowHyperlink, fIsVisible) {
ULSglM:
    ;
    if (g_rgCompatibleToolBarDefinition == null) {
        var toolBar = [];

        if (!fRestrictedMode) {
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTECutMnemonic, Strings.STS.L_CutToolTip_TEXT, false, "rtecut", true, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTECopyMnemonic, Strings.STS.L_CopyToolTip_TEXT, false, "rtecopy", true, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEPasteMnemonic, Strings.STS.L_PasteToolTip_TEXT, false, "rtepaste", false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_Separator());
        }
        toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEFontNameMnemonic, RTE_GenerateFontNameToolBarButtonHtml, fRestrictedMode, new C_RTE_TB_SetEnabledAlways()));
        toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEFontSizeMnemonic, RTE_GenerateFontSizeToolBarButtonHtml, fRestrictedMode, new C_RTE_TB_SetEnabledAlways()));
        toolBar.push(new C_RTE_TB_Separator());
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEBoldMnemonic, Strings.STS.L_BoldToolTip_TEXT, false, "rtebold", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEItalicMnemonic, Strings.STS.L_ItalicToolTip_TEXT, false, "rteital", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEUnderlineMnemonic, Strings.STS.L_UnderlineToolTip_TEXT, false, "rteundl", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
        toolBar.push(new C_RTE_TB_Separator());
        if (strWebLanguage == "1025" || strWebLanguage == "1037") {
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyRightMnemonic, Strings.STS.L_JustifyRightToolTip_TEXT, false, "rtertal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyCenterMnemonic, Strings.STS.L_JustifyCenterToolTip_TEXT, false, "rtectral", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyLeftMnemonic, Strings.STS.L_JustifyLeftToolTip_TEXT, false, "rteltal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
        }
        else {
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyLeftMnemonic, Strings.STS.L_JustifyLeftToolTip_TEXT, false, "rteltal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyCenterMnemonic, Strings.STS.L_JustifyCenterToolTip_TEXT, false, "rtectral", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyRightMnemonic, Strings.STS.L_JustifyRightToolTip_TEXT, false, "rtertal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
        }
        toolBar.push(new C_RTE_TB_Separator());
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEOrderedListMnemonic, Strings.STS.L_OrderedListToolTip_TEXT, false, "rtenlst", false, "null", new C_RTE_TB_SetEnabledFromCommandValueIfNotInTable()));
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEUnorderedListMnemonic, Strings.STS.L_UnorderedListToolTip_TEXT, false, "rteblst", false, "null", new C_RTE_TB_SetEnabledFromCommandValueIfNotInTable()));
        if (!fRestrictedMode) {
            toolBar.push(new C_RTE_TB_Separator);
        }
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEOutdentMnemonic, Strings.STS.L_OutdentToolTip_TEXT, false, "rteuidt", false, "null", new C_RTE_TB_SetEnabledAlways()));
        toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEIndentMnemonic, Strings.STS.L_IndentToolTip_TEXT, false, "rteidt", false, "null", new C_RTE_TB_SetEnabledAlways()));
        if (!fRestrictedMode) {
            toolBar.push(new C_RTE_TB_Separator);
        }
        if (!fRestrictedMode || fAllowHyperlink) {
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTECreateLinkMnemonic, Strings.STS.L_CreateLinkToolTip_TEXT, "RTE_CreateLink", null, "rtelnk", new C_RTE_TB_SetEnabledWhenRemoveFormatEnabled()));
        }
        if (!fRestrictedMode) {
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEInsertImageMnemonic, Strings.STS.L_InsertImageToolTip_TEXT, true, "rteimg", false, "null", new C_RTE_TB_SetEnabledWhenRemoveFormatEnabled()));
        }
        toolBar.push(new C_RTE_TB_Separator);
        toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEForeColorMnemonic, RTE_GenerateForeColorToolBarButtonHtml, fRestrictedMode, new C_RTE_TB_SetEnabledAlways()));
        toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEBackColorMnemonic, RTE_GenerateBackColorToolBarButtonHtml, fRestrictedMode, new C_RTE_TB_SetEnabledAlways()));
        if (RTE_ShouldShowDirection()) {
            if (!fRestrictedMode) {
                toolBar.push(new C_RTE_TB_Separator);
            }
            if (strWebLanguage == "1025" || strWebLanguage == "1037") {
                toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTERTLMnemonic, Strings.STS.L_RTLToolTip_TEXT, "RTE_SetDirectionOfSelection", "'rtl'", "rtertl", new C_RTE_TB_SetEnabledAlways()));
                toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTELTRMnemonic, Strings.STS.L_LTRToolTip_TEXT, "RTE_SetDirectionOfSelection", "'ltr'", "rteltr", new C_RTE_TB_SetEnabledAlways()));
            }
            else {
                toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTELTRMnemonic, Strings.STS.L_LTRToolTip_TEXT, "RTE_SetDirectionOfSelection", "'ltr'", "rteltr", new C_RTE_TB_SetEnabledAlways()));
                toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTERTLMnemonic, Strings.STS.L_RTLToolTip_TEXT, "RTE_SetDirectionOfSelection", "'rtl'", "rtertl", new C_RTE_TB_SetEnabledAlways()));
            }
        }
        g_rgCompatibleToolBarDefinition = toolBar;
    }
    return g_rgCompatibleToolBarDefinition;
}
function RTE_ModalDialog(strBaseElementID, strDialogName, width, height, dialogArg) {
ULSglM:
    ;
    var variables = RTE_GetEditorInstanceVariables(strBaseElementID);

    return window.showModalDialog(variables.aSettings.urlWebRoot + "/_layouts/15/RteDialog.aspx?Dialog=" + strDialogName + "&LCID=" + RTE_GetWebLocale(strBaseElementID) + "&IsDlg=1", dialogArg, "resizable: yes; status: no; help: no; " + "center: yes; dialogWidth:" + String(width) + "px; " + "dialogHeight:" + String(height) + "px;");
}
function RTE_FullHtmlToolBarDefinitionFactory(editSource) {
    var rgFullToolBarDefinition;

    return function(strWebLanguage) {
        if (rgFullToolBarDefinition == null) {
            var toolBar = [];

            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTECutMnemonic, Strings.STS.L_CutToolTip_TEXT, false, "rtecut", true, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTECopyMnemonic, Strings.STS.L_CopyToolTip_TEXT, false, "rtecopy", true, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEPasteMnemonic, Strings.STS.L_PasteToolTip_TEXT, false, "rtepaste", false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTERemoveFormatMnemonic, Strings.STS.L_RemoveFormatToolTip_TEXT, false, "rteclear", false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            toolBar.push(new C_RTE_TB_Separator());
            if (strWebLanguage == "1025" || strWebLanguage == "1037") {
                toolBar.push(new C_RTE_TB_ExecCmdButton(g_strRTERedoMnemonic, Strings.STS.L_RedoToolTip_TEXT, false, "redo.gif", false, false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
                toolBar.push(new C_RTE_TB_ExecCmdButton(g_strRTEUndoMnemonic, Strings.STS.L_UndoToolTip_TEXT, false, "undo.gif", false, false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            }
            else {
                toolBar.push(new C_RTE_TB_ExecCmdButton(g_strRTEUndoMnemonic, Strings.STS.L_UndoToolTip_TEXT, false, "undo.gif", false, false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
                toolBar.push(new C_RTE_TB_ExecCmdButton(g_strRTERedoMnemonic, Strings.STS.L_RedoToolTip_TEXT, false, "redo.gif", false, false, "null", new C_RTE_TB_SetEnabledFromCommandEnabled()));
            }
            toolBar.push(new C_RTE_TB_Separator());
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTEInsertTableMnemonic, Strings.STS.L_InsertTableToolTip_TEXT, "RTE_InsertTable", null, "rteitbl", new C_RTE_TB_SetEnabledWhenRemoveFormatEnabled()));
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEInsertTableElementMnemonic, RTE_GenerateInsertTableElementToolBarButtonHtml, true, new C_RTE_TB_SetEnabledIfInElement("TR")));
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEDeleteTableElementMnemonic, RTE_GenerateDeleteTableElementToolBarButtonHtml, true, new C_RTE_TB_SetEnabledIfInElement("TR")));
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTESplitCellMnemonic, Strings.STS.L_SplitCellToolTip_TEXT, "RTE_SplitCell", null, "rtescell", new C_RTE_TB_SetEnabledIfInElement("TR")));
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTEMergeCellMnemonic, Strings.STS.L_MergeCellToolTip_TEXT, "RTE_MergeCells", null, "rtemcell", new C_RTE_TB_SetEnabledIfInElement("TR")));
            toolBar.push(new C_RTE_TB_Separator());
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTECreateLinkMnemonic, Strings.STS.L_CreateLinkToolTip_TEXT, "RTE_CreateLink", null, "rtelnk", new C_RTE_TB_SetEnabledWhenRemoveFormatEnabled()));
            toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTEInsertImageMnemonic, Strings.STS.L_InsertImageToolTip_TEXT, "RTE_InsertImage", null, "rteimg", new C_RTE_TB_SetEnabledWhenRemoveFormatEnabled()));
            if (editSource) {
                toolBar.push(new C_RTE_TB_JScriptButtonClustered(g_strRTEHtmlSourceMnemonic, Strings.STS.L_HtmlSourceToolTip_TEXT, "RTE_HtmlSource", null, "rtesrced", new C_RTE_TB_SetEnabledAlways()));
            }
            toolBar.push(new C_RTE_TB_LineBreak());
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEFontNameMnemonic, RTE_GenerateFontNameToolBarButtonHtml, true, new C_RTE_TB_SetEnabledAlways()));
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEFontSizeMnemonic, RTE_GenerateFontSizeToolBarButtonHtml, true, new C_RTE_TB_SetEnabledAlways()));
            toolBar.push(new C_RTE_TB_Separator());
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEBoldMnemonic, Strings.STS.L_BoldToolTip_TEXT, false, "rtebold", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEItalicMnemonic, Strings.STS.L_ItalicToolTip_TEXT, false, "rteital", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEUnderlineMnemonic, Strings.STS.L_UnderlineToolTip_TEXT, false, "rteundl", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            toolBar.push(new C_RTE_TB_Separator());
            if (strWebLanguage == "1025" || strWebLanguage == "1037") {
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyRightMnemonic, Strings.STS.L_JustifyRightToolTip_TEXT, false, "rtertal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyCenterMnemonic, Strings.STS.L_JustifyCenterToolTip_TEXT, false, "rtectral", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyLeftMnemonic, Strings.STS.L_JustifyLeftToolTip_TEXT, false, "rteltal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            }
            else {
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyLeftMnemonic, Strings.STS.L_JustifyLeftToolTip_TEXT, false, "rteltal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyCenterMnemonic, Strings.STS.L_JustifyCenterToolTip_TEXT, false, "rtectral", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
                toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEJustifyRightMnemonic, Strings.STS.L_JustifyRightToolTip_TEXT, false, "rtertal", false, "null", new C_RTE_TB_SetEnabledFromCommandValue()));
            }
            toolBar.push(new C_RTE_TB_Separator());
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEOrderedListMnemonic, Strings.STS.L_OrderedListToolTip_TEXT, false, "rtenlst", false, "null", new C_RTE_TB_SetEnabledFromCommandValueIfNotInTable()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEUnorderedListMnemonic, Strings.STS.L_UnorderedListToolTip_TEXT, false, "rteblst", false, "null", new C_RTE_TB_SetEnabledFromCommandValueIfNotInTable()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEOutdentMnemonic, Strings.STS.L_OutdentToolTip_TEXT, false, "rteuidt", false, "null", new C_RTE_TB_SetEnabledAlways()));
            toolBar.push(new C_RTE_TB_ExecCmdButtonClustered(g_strRTEIndentMnemonic, Strings.STS.L_IndentToolTip_TEXT, false, "rteidt", false, "null", new C_RTE_TB_SetEnabledAlways()));
            toolBar.push(new C_RTE_TB_Separator());
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEForeColorMnemonic, RTE_GenerateForeColorToolBarButtonHtml, true, new C_RTE_TB_SetEnabledAlways()));
            toolBar.push(new C_RTE_TB_SpecialButton(g_strRTEBackColorMnemonic, RTE_GenerateBackColorToolBarButtonHtml, true, new C_RTE_TB_SetEnabledAlways()));
            if (RTE_ShouldShowDirection()) {
                if (strWebLanguage == "1025" || strWebLanguage == "1037") {
                    toolBar.push(new C_RTE_TB_JScriptButtonClustered("rtl", Strings.STS.L_RTLToolTip_TEXT, "RTE_SetDirectionOfSelection", "'rtl'", "rtertl", new C_RTE_TB_SetEnabledAlways()));
                    toolBar.push(new C_RTE_TB_JScriptButtonClustered("ltr", Strings.STS.L_LTRToolTip_TEXT, "RTE_SetDirectionOfSelection", "'ltr'", "rteltr", new C_RTE_TB_SetEnabledAlways()));
                }
                else {
                    toolBar.push(new C_RTE_TB_JScriptButtonClustered("ltr", Strings.STS.L_LTRToolTip_TEXT, "RTE_SetDirectionOfSelection", "'ltr'", "rteltr", new C_RTE_TB_SetEnabledAlways()));
                    toolBar.push(new C_RTE_TB_JScriptButtonClustered("rtl", Strings.STS.L_RTLToolTip_TEXT, "RTE_SetDirectionOfSelection", "'rtl'", "rtertl", new C_RTE_TB_SetEnabledAlways()));
                }
            }
            rgFullToolBarDefinition = toolBar;
        }
        return rgFullToolBarDefinition;
    };
}
var FileuploadString;
var FileUploadIndex;
var FileUploadLocalFileCount;
var attachmentsOnClientToBeRemoved;
var attachmentsOnClientToBeRemovedIndex;
var attachmentsOnServerToBeRemoved;
var attachmentsOnServerToBeRemovedIndex;

function UploadAttachment() {
ULSglM:
    ;
    ShowPartAttachment();
}
function ShowPart1() {
ULSglM:
    ;
    (document.getElementById("partAttachment")).style.display = "none";
    (document.getElementById("part1")).style.display = "block";
    if (window.frameElement != null && typeof window.frameElement.autoSize == "function")
        window.frameElement.autoSize();
    if (window.frameElement != null && typeof window.frameElement.SetFirstFocus == "function")
        window.frameElement.SetFirstFocus(true);
}
function ShowPartAttachment() {
ULSglM:
    ;
    if (document.getElementById("part1") == null || typeof document.getElementById("part1") == "undefined") {
        alert(Strings.STS.L_FormMissingPart1_Text);
        return;
    }
    (document.getElementById("part1")).style.display = "none";
    (document.getElementById("partAttachment")).style.display = "block";
    if (window.frameElement != null && typeof window.frameElement.autoSize == "function" && TypeofFullName("window.frameElement.autoSize") == "function")
        window.frameElement.autoSize();
    (GetAttachElement(FileuploadString + String(FileUploadIndex))).focus();
}
function CancelAttach() {
ULSglM:
    ;
    var fileID = FileuploadString + String(FileUploadIndex);
    var fileInput = GetAttachElement(fileID);
    var filename = fileInput.value;

    if (Boolean(filename)) {
        fileInput.outerHTML = "<input type=file class='ms-longfileinput' name=" + fileID + ">";
    }
    ShowPart1();
}
function OkAttach() {
ULSglM:
    ;
    var fileID = FileuploadString + String(FileUploadIndex);
    var fileInput = GetAttachElement(fileID);
    var filename = TrimWhiteSpaces(fileInput.value);

    if (!Boolean(filename)) {
        alert(Strings.STS.L_FileNameRequired_TXT);
        fileInput.focus();
    }
    else {
        var oRow = (document.getElementById("idAttachmentsTable")).insertRow(-1);
        var RowID = 'attachRow' + String(FileUploadIndex);

        oRow.id = RowID;
        var oCellFileName = oRow.insertCell(-1);

        oCellFileName.className = "ms-vb";
        oCellFileName.innerHTML = "<span dir=\"ltr\">" + filename + "</span>&nbsp;&nbsp;&nbsp;&nbsp;";
        var oCellControl = oRow.insertCell(-1);

        oCellControl.className = "ms-propertysheet";
        var item = (document.getElementsByName("RectGifUrl"))[0];

        oCellControl.innerHTML = "<span class=\"ms-delAttachments\"><IMG SRC='" + item.value + "'>&nbsp;<a href='javascript:RemoveLocal(\"" + RowID + "\",\"" + fileID + "\")'>" + Strings.STS.L_Delete_Text + "</a></span>";
        fileInput.style.display = "none";
        ++FileUploadIndex;
        ++FileUploadLocalFileCount;
        var oAttachments = document.getElementById("attachmentsOnClient");
        var inputNode = document.createElement("input");

        inputNode.tabIndex = 1;
        inputNode.type = "File";
        inputNode.className = "ms-longfileinput";
        inputNode.title = Strings.STS.L_FileUploadToolTip_text;
        inputNode.name = FileuploadString + String(FileUploadIndex);
        inputNode.id = FileuploadString + String(FileUploadIndex);
        inputNode.size = 56;
        oAttachments.appendChild(inputNode);
        var aForm = fileInput.form;

        aForm.encoding = 'multipart/form-data';
        (document.getElementById("idAttachmentsRow")).style.display = "";
        ShowPart1();
    }
}
function GetAttachElement(elem) {
ULSglM:
    ;
    var ret = document.getElementById(elem);

    if (ret == null)
        ret = (document.getElementsByName(elem))[0];
    return ret;
}
function RemoveLocal(RowID, FileID) {
ULSglM:
    ;
    var idAttachmentsRow = document.getElementById("idAttachmentsRow");
    var idAttachmentsTable = document.getElementById("idAttachmentsTable");

    idAttachmentsTable.deleteRow((document.getElementById(RowID)).rowIndex);
    var nodeForRemoval = GetAttachElement(FileID);

    nodeForRemoval.parentNode.removeChild(nodeForRemoval);
    if (typeof idAttachmentsTable != 'undefined' && typeof idAttachmentsTable.rows.length != "undefined" && idAttachmentsTable.rows.length == 0)
        idAttachmentsRow.style.display = 'none';
    if (FileUploadLocalFileCount > 0)
        --FileUploadLocalFileCount;
}
function RemoveFromServer(guid) {
ULSglM:
    ;
    RemoveAttachmentFromServer(guid, 0);
}
function RemoveAttachmentFromServer(guid, bRecycleBinEnabled) {
ULSglM:
    ;
    var strWarning;

    if (Boolean(bRecycleBinEnabled)) {
        strWarning = Strings.STS.L_ConfirmRecycle_TXT;
    }
    else {
        strWarning = Strings.STS.L_ConfirmDelete_TXT;
    }
    if (confirm(strWarning)) {
        (document.getElementById("idAttachmentsTable")).deleteRow((document.getElementById(guid)).rowIndex);
        var item = (document.getElementsByName("attachmentsToBeRemovedFromServer"))[0];

        item.value += guid + ";";
        if ((document.getElementById("idAttachmentsTable")).rows.length == 0)
            (document.getElementById("idAttachmentsRow")).style.display = 'none';
    }
}
function Calendar_InitializePrototype() {
ULSglM:
    ;
    Calendar.prototype = {
        actualDateEnd: undefined,
        actualDateStart: undefined,
        dateDP: undefined,
        dateEnd: undefined,
        dateStart: undefined,
        day: undefined,
        dow: undefined,
        iperiod: undefined,
        maxQuarterEnd: undefined,
        month: undefined,
        mon: undefined,
        mpEvents: undefined,
        mpIchan: undefined,
        mpSpan: undefined,
        msDay: undefined,
        msHour: undefined,
        msWeek: undefined,
        multiDay: undefined,
        stViewID: undefined,
        yr: undefined
    };
    Calendar.prototype.AddEvent = CalAddEvent;
    Calendar.prototype.AddFullEvent = CalAddFullEvent;
    Calendar.prototype.AssignChannels = CalAssignChannels;
    Calendar.prototype.BuildUI = CalBuildUI;
    Calendar.prototype.DPDayStyle = CalDPDayStyle;
    Calendar.prototype.DayStyle = CalDayStyle;
    Calendar.prototype.IchanNext = CalIchanNext;
    Calendar.prototype.IrwFromDate = CalIrwFromDate;
    Calendar.prototype.MoveDate = CalMoveDate;
    Calendar.prototype.MoveDay = CalMoveDay;
    Calendar.prototype.MoveMonth = CalMoveMonth;
    Calendar.prototype.MoveToDay = CalMoveToDay;
    Calendar.prototype.MoveToToday = CalMoveToToday;
    Calendar.prototype.MoveVDay = CalMoveDay;
    Calendar.prototype.MoveWeek = CalMoveWeek;
    Calendar.prototype.PlaceEventInRow = CalPlaceEventInRow;
    Calendar.prototype.Post = CalDoPost;
    Calendar.prototype.SetDate = CalSetDate;
    Calendar.prototype.SetDateFromGrid = CalSetDateFromGrid;
    Calendar.prototype.SpanCheck = CalSpanCheck;
    Calendar.prototype.StBuild = CalStBuild;
    Calendar.prototype.StBuildDHTML = CalStBuildDHTML;
    Calendar.prototype.StBuildPicker = CalStBuildPicker;
    Calendar.prototype.StDayMonthYear = CalStDayMonthYear;
    Calendar.prototype.StDaySpanMonthYear = CalDaySpanMonthYear;
    Calendar.prototype.StDownlevelBuild = CalStDownlevelBuild;
    Calendar.prototype.StMonthYear = CalStMonthYear;
    Calendar.prototype.rgDOW = CalGetDOW;
    Calendar.prototype.rgDOWLong = CalGetDOWLong;
    Calendar.prototype.rgDOWDP = CalGetDOWDP;
    Calendar.prototype.rgMonths = CalGetMonths;
    Calendar.msMinute = 1000 * 60;
    Calendar.msHour = Calendar.msMinute * 60;
    Calendar.msDay = Calendar.msHour * 24;
    Calendar.msWeek = Calendar.msDay * 7;
}
function CalEvent_InitializePrototype() {
ULSglM:
    ;
    CalEvent.prototype.actualDateEnd = undefined;
    CalEvent.prototype.actualDateStart = undefined;
    CalEvent.prototype.dateEnd = undefined;
    CalEvent.prototype.dateStart = undefined;
    CalEvent.prototype.ichan = undefined;
    CalEvent.prototype.ihour = undefined;
    CalEvent.prototype.multiDay = undefined;
    CalEvent.prototype.multiQuarter = undefined;
    CalEvent.prototype.rowspan = undefined;
    CalEvent.prototype.rgIcons = undefined;
    CalEvent.prototype.stDesc = undefined;
    CalEvent.prototype.stLocation = undefined;
    CalEvent.prototype.stTitle = undefined;
    CalEvent.prototype.stURL = undefined;
    CalEvent.prototype.FOverlap = EvtFOverlap;
    CalEvent.prototype.StTip = EvtStTip;
}
function Span_InitializePrototype() {
ULSglM:
    ;
    Span.prototype.evt = undefined;
    Span.prototype.cbucket = undefined;
}
function MsFloorTime(date, ms, exclusive) {
    var time = date.getTime();

    if (exclusive)
        time = time - 1;
    time = ms * Math.floor(time / ms);
    return time;
}
function Calendar(yr, mon, dopt, stObject) {
ULSglM:
    ;
    if (!Boolean(dopt))
        dopt = new DateOptions;
    this.dopt = dopt;
    var day = 1;

    if (yr == null || mon == null) {
        var stCalDate = StURLGetVar("CalendarDate");

        if (stCalDate != "") {
            yr = Number(stCalDate.substr(0, 4));
            var idxM2D = stCalDate.indexOf("-", 5);

            if (idxM2D == -1) {
                mon = Number(stCalDate.substr(5)) - 1;
            }
            else {
                mon = Number(stCalDate.substr(5, idxM2D - 5)) - 1;
                day = Number(stCalDate.substr(idxM2D + 1));
            }
        }
        if (stCalDate == "" || isNaN(Number(dopt.DateYMD(yr, mon, 1)))) {
            var dateToday = this.dopt.Today();

            yr = dateToday.getUTCFullYear();
            mon = dateToday.getUTCMonth();
            day = dateToday.getUTCDate();
        }
    }
    var stCalPeriod = StURLGetVar("CalendarPeriod");

    if (stCalPeriod == "week") {
        this.period = "week";
        this.iperiod = 1;
    }
    else if (stCalPeriod == "day") {
        this.period = "vday";
        this.iperiod = 2;
    }
    else if (stCalPeriod == "vday") {
        this.period = "vday";
        this.iperiod = 2;
    }
    else if (stCalPeriod == "month") {
        this.period = "month";
        this.iperiod = 0;
    }
    else {
        this.period = dopt.CalendarPeriod;
        if (this.period == "week")
            this.iperiod = 1;
        else if (this.period == "day")
            this.iperiod = 2;
        else if (this.period == "vday")
            this.iperiod = 2;
        else
            this.iperiod = 0;
    }
    this.SetDate(yr, mon, day);
    if (this.iperiod == 0) {
        this.cchanMin = 4;
        this.cchanMax = 4;
    }
    else if (this.iperiod == 1) {
        this.cchanMin = 20;
        this.cchanMax = 20;
    }
    else {
        this.cchanMin = 3;
        this.cchanMax = 100;
    }
    this.ievtMax = 0;
    this.rgEvt = [];
    this.fUseDHTML = browseris.ie && browseris.verIEFull > 4.0 && browseris.win32 || browseris.nav6up;
    this.fDatePicker = false;
    this.dateDP = null;
    if (!Boolean(stObject))
        stObject = "cal";
    this.stObject = stObject;
}
function CalGetDOW(index) {
ULSglM:
    ;
    var rgDOW = [Strings.STS.L_rgDOW0_Text, Strings.STS.L_rgDOW1_Text, Strings.STS.L_rgDOW2_Text, Strings.STS.L_rgDOW3_Text, Strings.STS.L_rgDOW4_Text, Strings.STS.L_rgDOW5_Text, Strings.STS.L_rgDOW6_Text];

    return rgDOW[index];
}
function CalGetDOWLong(index) {
ULSglM:
    ;
    var rgDOWLong = [Strings.STS.L_rgDOWLong0_Text, Strings.STS.L_rgDOWLong1_Text, Strings.STS.L_rgDOWLong2_Text, Strings.STS.L_rgDOWLong3_Text, Strings.STS.L_rgDOWLong4_Text, Strings.STS.L_rgDOWLong5_Text, Strings.STS.L_rgDOWLong6_Text];

    return rgDOWLong[index];
}
function CalGetDOWDP(index) {
ULSglM:
    ;
    var rgDOWDP = [Strings.STS.L_rgDOWDP0_Text, Strings.STS.L_rgDOWDP1_Text, Strings.STS.L_rgDOWDP2_Text, Strings.STS.L_rgDOWDP3_Text, Strings.STS.L_rgDOWDP4_Text, Strings.STS.L_rgDOWDP5_Text, Strings.STS.L_rgDOWDP6_Text];

    return rgDOWDP[index];
}
function CalGetMonths(index) {
ULSglM:
    ;
    var rgMonths = [Strings.STS.L_rgMonths0_Text, Strings.STS.L_rgMonths1_Text, Strings.STS.L_rgMonths2_Text, Strings.STS.L_rgMonths3_Text, Strings.STS.L_rgMonths4_Text, Strings.STS.L_rgMonths5_Text, Strings.STS.L_rgMonths6_Text, Strings.STS.L_rgMonths7_Text, Strings.STS.L_rgMonths8_Text, Strings.STS.L_rgMonths9_Text, Strings.STS.L_rgMonths10_Text, Strings.STS.L_rgMonths11_Text];

    return rgMonths[index];
}
function CalStMonthYear() {
ULSglM:
    ;
    var st = "";

    if (this.iperiod != 0)
        st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var stFormat = "";
    var param1 = "";
    var param2 = "";

    switch (this.dopt.stDateOrder) {
    case "MDY":
    case "DMY":
        param1 = this.rgMonths(this.mon);
        param2 = String(this.yr);
        stFormat = Strings.STS.L_MYDATE_Text;
        break;
    case "YMD":
        param1 = String(this.yr);
        param2 = this.rgMonths(this.mon);
        stFormat = Strings.STS.L_YMDATE_Text;
        break;
    }
    st += StBuildParam(stFormat, [param1, param2]);
    if (this.iperiod != 0)
        st += "</span>";
    return st;
}
function CalDaySpanMonthYear() {
ULSglM:
    ;
    var st = "";
    var stStart = "";
    var stEnd = "";
    var stFormat1 = "";
    var stFormat2 = "";
    var param1 = "";
    var param2 = "";
    var param3 = "";
    var param4 = "";
    var param5 = "";
    var param6 = "";

    if (this.iperiod != 0)
        st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var bDiffYears = this.dateStart.getUTCFullYear() != this.dateEnd.getUTCFullYear();

    switch (this.dopt.stDateOrder) {
    case "MDY":
        param1 = this.rgMonths(this.dateStart.getUTCMonth());
        param2 = String(this.dateStart.getUTCDate());
        param3 = String(this.dateStart.getUTCFullYear());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_MDYDATE_Text;
        else
            stFormat1 = Strings.STS.L_MDYDATESameYear_Text;
        param4 = this.rgMonths(this.dateEnd.getUTCMonth());
        param5 = String(this.dateEnd.getUTCDate());
        param6 = String(this.dateEnd.getUTCFullYear());
        stFormat2 = Strings.STS.L_MDYDATE_Text;
        break;
    case "DMY":
        param1 = String(this.dateStart.getUTCDate());
        param2 = this.rgMonths(this.dateStart.getUTCMonth());
        param3 = String(this.dateStart.getUTCFullYear());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_DMYDATE_Text;
        else
            stFormat1 = Strings.STS.L_DMYDATESameYear_Text;
        param4 = String(this.dateEnd.getUTCDate());
        param5 = this.rgMonths(this.dateEnd.getUTCMonth());
        param6 = String(this.dateEnd.getUTCFullYear());
        stFormat2 = Strings.STS.L_DMYDATE_Text;
        break;
    case "YMD":
        param1 = String(this.dateStart.getUTCFullYear());
        param2 = this.rgMonths(this.dateStart.getUTCMonth());
        param3 = String(this.dateStart.getUTCDate());
        if (bDiffYears)
            stFormat1 = Strings.STS.L_YMDDATE_Text;
        else
            stFormat1 = Strings.STS.L_YMDDATESameYear_Text;
        param4 = String(this.dateEnd.getUTCFullYear());
        param5 = this.rgMonths(this.dateEnd.getUTCMonth());
        param6 = String(this.dateEnd.getUTCDate());
        stFormat2 = Strings.STS.L_YMDDATE_Text;
        break;
    }
    stStart = StBuildParam(stFormat1, [param1, param2, param3]);
    stEnd = StBuildParam(stFormat2, [param4, param5, param6]);
    st += StBuildParam(Strings.STS.L_DATE1DATE2_Text, [stStart, stEnd]);
    if (this.iperiod != 0)
        st += "</span>";
    return st;
}
function CalStDayMonthYear() {
ULSglM:
    ;
    var st = "";

    st += '<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + '.MoveMonth(0)') + '>';
    var stFormat = "";
    var param1 = "";
    var param2 = "";
    var param3 = "";
    var param4 = this.rgDOWLong(this.dow);

    switch (this.dopt.stDateOrder) {
    case "MDY":
        param1 = this.rgMonths(this.mon);
        param2 = String(this.day);
        param3 = String(this.yr);
        stFormat = Strings.STS.L_MDY_DOW_DATE_Text;
        break;
    case "DMY":
        param1 = String(this.day);
        param2 = this.rgMonths(this.mon);
        param3 = String(this.yr);
        stFormat = Strings.STS.L_DMY_DOW_DATE_Text;
        break;
    case "YMD":
        param1 = String(this.yr);
        param2 = this.rgMonths[this.mon];
        param3 = String(this.day);
        stFormat = Strings.STS.L_YMD_DOW_DATE_Text;
        break;
    }
    st += StBuildParam(stFormat, [param1, param2, param3, param4]);
    st += "</span>";
    return st;
}
function CalSetDate(yr, mon, day) {
ULSglM:
    ;
    var date = new Date(Date.UTC(yr, mon, day));

    this.dateStart = new Date(date.getTime());
    this.dateEnd = new Date(date.getTime());
    this.givenDate = new Date(date.getTime());
    if (this.iperiod == 0) {
        this.dateStart.setUTCDate(1);
        this.dateEnd.setTime(Date.UTC(yr, mon + 1, 0));
    }
    var irw = 0;

    if (this.iperiod != 2) {
        this.dateStart.setUTCDate(this.dateStart.getUTCDate() - (this.dateStart.getUTCDay() - this.dopt.dow + 7) % 7);
        irw = this.IrwFromDate(this.dateEnd);
        this.dateEnd.setUTCDate(this.dateEnd.getUTCDate() + irw * 7 - 1);
    }
    this.irwMax = irw + 1;
    if (this.iperiod == 1) {
        this.dateEnd.setTime(this.dateStart.getTime() + 6 * Calendar.msDay);
        date = new Date(this.dateStart.getTime() + 3 * Calendar.msDay);
    }
    else if (this.iperiod == 2) {
        this.dateTodayEnd = new Date(this.dateStart.getTime() + Calendar.msDay - 1);
    }
    this.day = date.getUTCDate();
    this.mon = date.getUTCMonth();
    this.yr = date.getUTCFullYear();
    this.dow = date.getUTCDay();
}
function CalDayStyle(dateCur, fBottom, fTop, fWeekly) {
    var st;
    var dateToday = this.dopt.Today();

    if (dateCur.getTime() == dateToday.getTime()) {
        if (fBottom)
            st = ' style="border-color:\'#FFD275\'; border-bottom-style:solid; border-left-style:solid; border-right-style:solid; border-bottom-width:2pt; border-left-width:2pt; border-right-width:2pt" ';
        else if (fTop)
            st = ' style="border-color:\'#FFD275\'; border-top-style:solid; border-left-style:solid; border-right-style:solid; border-top-width:2pt; border-left-width:2pt; border-right-width:2pt" ';
        else
            st = ' style="border-color:\'#FFD275\'; border-left-style:solid; border-right-style:solid; border-left-width:2pt; border-right-width:2pt" ';
    }
    else if (!fWeekly && dateCur.getUTCMonth() != this.mon) {
        st = ' BGCOLOR="#e6e6e6"';
    }
    else
        st = "";
    return st;
}
function CalAddFullEvent(stDateStart, stDateEnd, stLocation, stDesc, stTitle, stURL, rgIcons) {
    var dateStart;
    var dateEnd;

    if (stDateStart == "")
        return;
    dateStart = DateOptions.ParseISODate(stDateStart, undefined);
    if (stDateEnd == "") {
        dateEnd = new Date(dateStart.getTime());
    }
    else {
        dateEnd = DateOptions.ParseISODate(stDateEnd, undefined);
    }
    if (Number(dateEnd) < Number(dateStart))
        dateEnd = new Date(dateStart.getTime());
    var displayDateStart = new Date(dateStart.getTime());
    var displayDateEnd = new Date(dateEnd.getTime());

    if (this.iperiod == 2) {
        if (Number(dateStart) > Number(this.dateTodayEnd) || Number(dateEnd) < Number(this.dateStart))
            return;
        if (Number(displayDateStart) < Number(this.dateStart))
            displayDateStart = this.dateStart;
        var minDisplay = Calendar.msHour / 3;

        if (dateEnd.getTime() < dateStart.getTime() + minDisplay)
            displayDateEnd = new Date(dateStart.getTime() + minDisplay);
    }
    stURL += "&Source=" + escapeProperly(window.location.href);
    var evt = new CalEvent(displayDateStart, displayDateEnd, dateStart, dateEnd, stLocation, stDesc, stTitle, stURL, rgIcons);

    this.AddEvent(evt);
}
function CalAddEvent(evt) {
ULSglM:
    ;
    this.rgEvt[String(this.ievtMax++)] = evt;
}
function CalAssignChannels() {
ULSglM:
    ;
    var ievt;

    this.mpSpan = new Object;
    this.mpIchan = new Object;
    this.mpEvents = new Object;
    var fAllDaySeparate = false;
    var dateTodayStart;
    var dateTodayEnd;
    var evt;

    if (this.iperiod == 2) {
        fAllDaySeparate = true;
        dateTodayStart = this.dateStart;
        dateTodayEnd = this.dateTodayEnd;
        this.mpNoTimeEvents = [];
        this.mpAllDayEvents = [];
        var dailyStart = this.dopt.WorkDayStartHour - this.dopt.DailyStartHourDelta;
        var dailyEnd = this.dopt.WorkDayEndHour + this.dopt.DailyEndHourDelta;

        if (dailyStart < 0)
            dailyStart = 0;
        if (dailyEnd > 24)
            dailyEnd = 24;
        this.minQuarterStart = 4 * dailyStart;
        this.maxQuarterEnd = 4 * dailyEnd - 1;
        for (ievt = 0; ievt < this.rgEvt.length; ievt++) {
            evt = this.rgEvt[String(ievt)];
            if (Number(evt.actualDateStart) > Number(dateTodayEnd) || Number(evt.actualDateEnd) - 1 < Number(dateTodayStart) || Number(evt.actualDateStart) <= Number(dateTodayStart) && Number(evt.actualDateEnd) >= Number(dateTodayEnd))
                continue;
            var irwMin = this.IrwFromDate(evt.dateStart);

            if (irwMin < 0)
                irwMin = 0;
            var irwMax = this.IrwFromDate(evt.dateEnd);

            if (irwMax > this.irwMax)
                irwMax = this.irwMax;
            if (irwMin < this.irwMax && irwMax >= 0) {
                for (var irw = irwMin; irw <= irwMax; irw++) {
                    var date = new Date;

                    this.SetDateFromGrid(date, irw, 0);
                    if (Number(date) < Number(dateTodayStart) || Number(date) >= Number(dateTodayEnd))
                        continue;
                    var quarterRow = date.getTime() / (Calendar.msHour / 4);
                    var quarterStart = MsFloorTime(evt.dateStart, Calendar.msHour / 4, Boolean(0)) / (Calendar.msHour / 4) - quarterRow;
                    var quarterEnd = MsFloorTime(evt.dateEnd, Calendar.msHour / 4, Boolean(1)) / (Calendar.msHour / 4) - quarterRow + 1;

                    if (quarterEnd < quarterStart)
                        quarterEnd = quarterStart;
                    if (quarterStart < this.minQuarterStart)
                        this.minQuarterStart = quarterStart;
                    if (quarterEnd > this.maxQuarterEnd)
                        this.maxQuarterEnd = quarterEnd;
                    if (quarterStart > 0 && 95 - quarterStart < 2)
                        this.FVdayOverflow = true;
                }
            }
        }
        this.minQuarterStart = Math.floor(this.minQuarterStart / 4) * 4;
        if (this.minQuarterStart < 0)
            this.minQuarterStart = 0;
        if (this.maxQuarterEnd > 95)
            this.maxQuarterEnd = 95;
        else
            this.maxQuarterEnd = 4 * (Math.floor(this.maxQuarterEnd / 4) + 1) - 1;
    }
    if (this.iperiod <= 1)
        this.rgEvt.sort(CalEvtSort);
    var todayMiliSecDate = this.dateStart;

    todayMiliSecDate.setUTCHours(0, 0, 0, 0);
    var todayMiliSec = todayMiliSecDate.getTime();

    for (ievt = 0; ievt < this.rgEvt.length; ievt++) {
        evt = this.rgEvt[String(ievt)];
        if (fAllDaySeparate) {
            if (evt.actualDateStart.getTime() == todayMiliSec && evt.actualDateEnd.getTime() == todayMiliSec) {
                this.mpNoTimeEvents[this.mpNoTimeEvents.length] = evt;
                continue;
            }
            if (Number(evt.actualDateStart) <= Number(dateTodayStart) && Number(evt.actualDateEnd) >= Number(dateTodayEnd)) {
                this.mpAllDayEvents[this.mpAllDayEvents.length] = evt;
                continue;
            }
        }
        irwMin = this.IrwFromDate(evt.dateStart);
        if (irwMin < 0)
            irwMin = 0;
        irwMax = this.IrwFromDate(evt.dateEnd);
        if (irwMax > this.irwMax)
            irwMax = this.irwMax;
        if (irwMin < this.irwMax && irwMax >= 0) {
            for (irw = irwMin; irw <= irwMax; irw++) {
                this.PlaceEventInRow(evt, irw);
            }
        }
    }
}
function CalEvtSort(e1, e2) {
    if (e1.multiDay != e2.multiDay) {
        if (e1.multiDay)
            return -1;
        else
            return 1;
    }
    else if (e1.multiDay) {
        var d1 = Number(e1.dateEnd) - Number(e1.dateStart);
        var d2 = Number(e2.dateEnd) - Number(e2.dateStart);

        if (d2 < d1)
            return -1;
        else if (d2 > d1)
            return 1;
        else
            return 0;
    }
    else {
        if (Number(e1.dateStart) < Number(e2.dateStart))
            return -1;
        else if (Number(e1.dateStart) > Number(e2.dateStart))
            return 1;
        else
            return 0;
    }
}
function CalPlaceEventInRow(evt, irw) {
    var span;
    var date = new Date;

    this.SetDateFromGrid(date, irw, 0);
    if (this.iperiod == 2) {
        if (irw != 0)
            return;
        var quarterRow = date.getTime() / (Calendar.msHour / 4);
        var quarterStart = MsFloorTime(evt.dateStart, Calendar.msHour / 4, Boolean(0)) / (Calendar.msHour / 4) - quarterRow;
        var quarterEnd = MsFloorTime(evt.dateEnd, Calendar.msHour / 4, Boolean(1)) / (Calendar.msHour / 4) - quarterRow;

        if (quarterEnd < quarterStart)
            quarterEnd = quarterStart;
        var workdayStart;
        var workdayEnd;

        if (this.iperiod == 2) {
            workdayStart = this.minQuarterStart;
            workdayEnd = this.maxQuarterEnd;
        }
        else {
            workdayStart = 4 * this.dopt.WorkDayStartHour;
            workdayEnd = 4 * this.dopt.WorkDayEndHour - 1;
        }
        if (quarterEnd >= workdayStart && quarterStart <= workdayEnd) {
            if (this.FVdayOverflow)
                workdayEnd = 99;
            quarterStart = Math.max(quarterStart, workdayStart);
            quarterEnd = Math.min(quarterEnd, workdayEnd);
            var ichan = this.IchanNext(irw, quarterStart, quarterEnd);

            new Span(this, irw, quarterStart, quarterEnd, ichan, evt);
        }
    }
    else {
        var dayRow;
        var dayStart;
        var dayEnd;

        dayRow = date.getTime() / Calendar.msDay;
        dayStart = MsFloorTime(evt.dateStart, Calendar.msDay, Boolean(0)) / Calendar.msDay - dayRow;
        dayEnd = MsFloorTime(evt.dateEnd, Calendar.msDay, Boolean(1)) / Calendar.msDay - dayRow;
        if (dayEnd < dayStart || evt.actualDateEnd.getTime() - evt.actualDateStart.getTime() < Calendar.msDay) {
            dayEnd = dayStart;
        }
        if (dayEnd >= 0 && dayStart <= 6) {
            dayStart = Math.max(dayStart, 0);
            dayEnd = Math.min(dayEnd, 6);
            ichan = this.IchanNext(irw, dayStart, dayEnd);
            new Span(this, irw, dayStart, dayEnd, ichan, evt);
        }
    }
}
function Span(cal, irw, startParam, end, ichan, evt) {
    this.evt = evt;
    this.cbucket = end - startParam + 1;
    if (cal.iperiod == 2) {
        evt.ichan = ichan;
        evt.ihour = startParam;
        var maxEnd = cal.maxQuarterEnd;

        if (maxEnd == 95)
            maxEnd = 99;
        evt.rowspan = Math.min(this.cbucket, 1 + maxEnd - startParam);
    }
    cal.mpSpan[String(irw) + "." + String(startParam) + "." + String(ichan)] = this;
    for (var bucket = startParam; bucket <= end; bucket++) {
        cal.mpIchan[String(irw) + "." + String(bucket)] = ichan + 1;
        var rgevt = cal.mpEvents[String(irw) + "." + String(bucket)];

        if (rgevt == null) {
            rgevt = [];
            cal.mpEvents[String(irw) + "." + String(bucket)] = rgevt;
        }
        rgevt[rgevt.length] = evt;
    }
}
function CalIchanNext(irw, startParam, end) {
ULSglM:
    ;
    var bucket;
    var ichan = 0;

    for (bucket = startParam; bucket <= end; bucket++) {
        if (this.mpIchan[String(irw) + "." + String(bucket)] != null)
            ichan = Math.max(ichan, this.mpIchan[String(irw) + "." + String(bucket)]);
    }
    return ichan;
}
function CalIrwFromDate(date) {
    var irw;

    irw = Math.floor((date.getTime() - this.dateStart.getTime()) / Calendar.msWeek);
    return irw;
}
function CalBuildUI() {
ULSglM:
    ;
    var st = this.StBuild();

    document.write(st);
}
function CalStBuild() {
ULSglM:
    ;
    this.AssignChannels();
    if (this.fDatePicker)
        return this.StBuildPicker();
    if (!this.fUseDHTML)
        return this.StDownlevelBuild();
    return this.StBuildDHTML();
}
function CalStBuildDHTML() {
ULSglM:
    ;
    var st;
    var span;
    var dateCur = new Date;
    var irw;
    var iday;
    var ichan;
    var cchan;
    var ihour;
    var iHourStart;
    var iHourEnd;
    var iGrayStart;
    var iGrayEnd;
    var evt;

    iHourStart = (iGrayStart = 4 * this.dopt.WorkDayStartHour);
    iHourEnd = 4 * this.dopt.WorkDayEndHour;
    iGrayEnd = iHourEnd - 1;
    if (this.iperiod == 2) {
        iHourStart = this.minQuarterStart;
        iHourEnd = this.maxQuarterEnd + 1;
        if (iHourEnd == 96 && this.FVdayOverflow)
            iHourEnd = 100;
    }
    var stTDHigh = '<th style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');" ';

    if (this.iperiod == 2) {
        cchan = this.IchanNext(0, iHourStart, iHourEnd);
        var cNoTime = this.mpNoTimeEvents.length;
        var cAllDay = this.mpAllDayEvents.length;

        cchan = Math.max(cchan, this.cchanMin);
        if (this.cchanMax > 0)
            cchan = Math.min(cchan, this.cchanMax);
        st = "<table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>";
        st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(-1)') + ' class="ms-calhead" style="cursor:pointer;" width="8%">&lt;</th><th width="84%" class="ms-calhead" nowrap>' + this.StDayMonthYear() + '</th>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(1)') + ' class="ms-calhead" style="cursor:pointer;" width="8%">&gt;</th></tr>';
        if (cNoTime > 0) {
            st += "</table><table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>\r";
            st += "<tr height='0'><td width='" + String(Number(this.dopt.AllDayWidth) + 8) + "pt' /><td/></tr>\r";
            st += "<tr><td class='ms-CalAllDay' rowspan='" + String(cNoTime + 1) + "'></td><td width='1%' /></tr>";
            for (i = 0; i < cNoTime; i++) {
                evt = this.mpNoTimeEvents[i];
                st += "<tr><td class='ms-Vapptsingle' style='border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black; border-right:1px solid black;' ";
                st += " title=" + StAttrQuote(evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(evt, this.dopt, 2) + "</nobr></td></tr>\r";
            }
        }
        if (cAllDay > 0) {
            st += "</table><table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>\r";
            st += "<tr height='0'><td width='" + String(Number(this.dopt.AllDayWidth) + 8) + "pt' /><td/></tr>\r";
            st += "<tr><td class='ms-CalAllDay' rowspan='" + String(cAllDay + 1) + "'>" + this.dopt.L_AllDay_Text + "</td><td width='1%'/></tr>";
            for (var i = 0; i < cAllDay; i++) {
                evt = this.mpAllDayEvents[i];
                st += "<tr><td class='ms-Vapptsingle' style='border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black; border-right:1px solid black;' ";
                st += " title=" + StAttrQuote(evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(evt, this.dopt, 2) + "</nobr></td></tr>\r";
            }
        }
        st += "</table><table width='100%' style='table-layout:fixed' class='ms-vcal' cellpadding='0' cellspacing='0'>\r";
        st += "<tr height='0'><td width='" + String(this.dopt.AllDayWidth) + "pt' /><td width='8pt' />\r";
        for (ichan = 1; ichan < cchan; ichan++) {
            st += "<td/>\r";
        }
        st += "</tr>\r";
        var LayoutGrid = new Object;
        var HitDetect = new Array(iHourEnd);

        for (ihour = iHourStart; ihour < iHourEnd; ihour++) {
            HitDetect[ihour] = 0;
            for (ichan = 0; ichan < cchan; ichan++)
                LayoutGrid[String(ihour) + "." + String(ichan)] = 0;
        }
        for (i = 0; i < this.rgEvt.length; i++) {
            evt = this.rgEvt[i];
            ihour = evt.ihour;
            ichan = evt.ichan;
            var rowspan = evt.rowspan;
            var max = ichan + 1;

            for (irow = 0; irow < rowspan; irow++)
                if (HitDetect[ihour + irow] > max)
                    max = HitDetect[ihour + irow];
            for (irow = 0; irow < rowspan; irow++) {
                HitDetect[ihour + irow] = max;
                LayoutGrid[String(ihour + irow) + "." + String(ichan)] = 1;
            }
        }
        for (i = 0; i < this.rgEvt.length; i++) {
            var width = 0;
            var irow = 0;

            evt = this.rgEvt[i];
            ihour = evt.ihour;
            max = HitDetect[ihour];
            rowspan = evt.rowspan;
            var hit = 0;
            var popMax = false;

            for (irow = 1; irow < rowspan; irow++) {
                hit = HitDetect[ihour + irow];
                popMax = popMax || hit != max;
                if (hit > max)
                    max = hit;
            }
            if (!popMax)
                continue;
            for (irow = 0; irow < rowspan; irow++)
                HitDetect[ihour + irow] = max;
        }
        for (i = this.rgEvt.length - 1; i >= 0; i--) {
            var width2 = 0;
            var irow2 = 0;

            evt = this.rgEvt[i];
            ihour = evt.ihour;
            max = HitDetect[ihour];
            rowspan = evt.rowspan;
            var hit2 = 0;
            var popMax2 = false;

            for (irow2 = 1; irow2 < rowspan; irow2++) {
                hit = HitDetect[ihour + irow2];
                popMax2 = popMax2 || hit != max;
                if (hit > max)
                    max = hit;
            }
            if (!popMax2)
                continue;
            for (irow2 = 0; irow2 < rowspan; irow2++)
                HitDetect[ihour + irow2] = max;
        }
        for (ihour = iHourStart; ihour < iHourEnd; ihour++) {
            st += "<tr>\r";
            if (ihour % 4 == 0) {
                var stHour = String(ihour / 4);

                if (stHour == "24")
                    stHour = "&nbsp;";
                else if (this.dopt.f12Hour) {
                    stHour = String((ihour / 4 + 11) % 12 + 1);
                    if (this.dopt.TimeMarkPosn == 0) {
                        stHour += " " + (ihour / 4 < 12 ? this.dopt.stAM : this.dopt.stPM);
                    }
                    else
                        stHour = (ihour / 4 < 12 ? this.dopt.stAM : this.dopt.stPM) + " " + stHour;
                }
                var stGrayBG = "";

                if (ihour < iGrayStart || ihour > iGrayEnd) {
                    stGrayBG = ' BGCOLOR="#e6e6e6" ';
                }
                if (ihour != iHourStart || cAllDay > 0 || cNoTime > 0) {
                    st += "<td class='ms-CalHour' rowspan='2'" + stGrayBG + "><nobr>" + stHour + "</nobr></td>";
                    st += "<td class='ms-calHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
                else {
                    st += "<td class='ms-firstCalHour' rowspan='2'" + stGrayBG + "><nobr>" + stHour + "</nobr></td>";
                    st += "<td class='ms-firstCalHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
            }
            else if (ihour % 2 == 0) {
                st += "<td class='ms-CalHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
                st += "<td class='ms-calHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            else if (ihour % 4 == 1) {
                st += "<td class='ms-CalQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            else if (ihour % 4 == 3) {
                st += "<td class='ms-CalQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
                st += "<td class='ms-calQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
            }
            for (ichan = 0; ichan < cchan; ichan++) {
                span = this.mpSpan["0." + String(ihour) + "." + String(ichan)];
                if (span != null) {
                    var stClass = "ms-Vappt";
                    var rowspan2 = span.evt.rowspan;
                    var colspan = Math.floor(cchan / HitDetect[ihour]);

                    if (colspan > cchan / this.cchanMin)
                        colspan = Math.floor(cchan / this.cchanMin);
                    var reduceby = colspan - 1;

                    if (reduceby > 0)
                        for (irow = 0; irow < rowspan2; irow++) {
                            reduceby = colspan - 1;
                            for (var jchan = cchan - 1; jchan > ichan && reduceby > 0; jchan--) {
                                if (LayoutGrid[String(ihour + irow) + "." + String(jchan)] == 0) {
                                    LayoutGrid[String(ihour + irow) + "." + String(jchan)] = 1;
                                    reduceby--;
                                }
                            }
                        }
                    st += "<td class=" + stClass + " style='border-top:1px solid black; border-left:1px solid black; border-bottom:2px solid black; border-right:2px solid black;' rowspan=" + String(span.evt.rowspan);
                    if (colspan > 1)
                        st += " colspan=" + String(colspan);
                    st += " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>" + StRenderVDayEvt(span.evt, this.dopt, span.evt.rowspan) + "</nobr></td>\r";
                }
                else if (LayoutGrid[String(ihour) + "." + String(ichan)] == 0) {
                    if (ihour % 4 == 0) {
                        if (ihour != iHourStart || cAllDay > 0 || cNoTime > 0)
                            st += "<td class='ms-calHour'" + stGrayBG + ">&nbsp;</td>\r";
                        else
                            st += "<td class='ms-firstCalHour'" + stGrayBG + ">&nbsp;</td>\r";
                    }
                    else if (ihour % 2 == 0)
                        st += "<td class='ms-calHalfHour'" + stGrayBG + ">&nbsp;</td>\r";
                    else
                        st += "<td class='ms-calQuarterHour'" + stGrayBG + ">&nbsp;</td>\r";
                }
            }
            st += "</tr>\r";
        }
        st += "<tr>\r";
        for (ichan = -2; ichan < cchan; ichan++) {
            st += "<td class='ms-CalHour'>&nbsp;</td>\r";
        }
        st += "</tr>\r";
    }
    else {
        var fWeekly = this.iperiod == 1;

        st = "<table width='100%' class='ms-cal' cellpadding='0' cellspacing='0'>";
        st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(-1)') + ' class="ms-calhead" style="cursor:pointer;">&lt;</td><td class="ms-calhead" colspan="5">';
        if (this.iperiod == 0)
            st += this.StMonthYear();
        else
            st += this.StDaySpanMonthYear();
        st += '</td>' + stTDHigh + StClickEvent(this.stObject + '.MoveDate(1)') + ' class="ms-calhead" style="cursor:pointer;">&gt;</td></tr>';
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            st += "<td class='ms-calDOW'>" + this.rgDOW((iday + this.dopt.dow) % 7) + "</td>\r";
        }
        st += "</tr>";
        for (irw = 0; irw < this.irwMax; irw++) {
            cchan = Math.max(this.IchanNext(irw, 0, 6), this.cchanMin);
            if (this.cchanMax > 0)
                cchan = Math.min(cchan, this.cchanMax);
            st += "<tr>\r";
            for (iday = 0; iday < 7; iday++) {
                this.SetDateFromGrid(dateCur, irw, iday);
                st += '<td class="ms-calTop"' + this.DayStyle(dateCur, false, true, fWeekly) + '>&nbsp;<span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + ".MoveToDay(" + String(dateCur.getUTCFullYear()) + "," + String(dateCur.getUTCMonth() + 1) + "," + String(dateCur.getUTCDate()) + ")") + ">" + String(dateCur.getUTCDate()) + "</span>&nbsp;</td>\r";
            }
            st += "</tr>\r";
            for (ichan = 0; ichan < cchan; ichan++) {
                if (this.iperiod == 1) {
                    st += "<tr>\r";
                    for (iday = 0; iday < 7; iday++) {
                        this.SetDateFromGrid(dateCur, irw, iday);
                        if (ichan == cchan - 1 && this.SpanCheck(irw, iday, ichan, cchan)) {
                            st += "<td class='ms-apptsingle' " + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>";
                        }
                        else {
                            span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
                            if (span != null && !span.evt.multiDay && 0 != span.evt.actualDateStart.getTime() % Calendar.msDay && 0 != span.evt.actualDateEnd.getTime() % Calendar.msDay) {
                                var stClass2 = "ms-apptsingle" + this.DayStyle(dateCur, false, false, fWeekly);

                                st += "<td class=" + stClass2 + " colspan=" + String(span.cbucket) + " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>";
                                st += StEvtTime(span.evt, this.dopt, true);
                                st += "&nbsp;</nobr></td>\r";
                                iday += span.cbucket - 1;
                            }
                            else {
                                st += "<td class='ms-calMid'" + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>\r";
                            }
                        }
                    }
                    st += "</tr>\r";
                }
                st += "<tr>\r";
                for (iday = 0; iday < 7; iday++) {
                    this.SetDateFromGrid(dateCur, irw, iday);
                    if (ichan == cchan - 1 && this.SpanCheck(irw, iday, ichan, cchan)) {
                        st += "<td class='ms-apptsingle' " + this.DayStyle(dateCur, false, false, fWeekly) + '><span style="cursor:pointer;" onmouseover="HighlightText(this, \'red\');" onmouseout="HighlightText(this, \'\');"' + StClickEvent(this.stObject + ".MoveToDay(" + String(dateCur.getUTCFullYear()) + "," + String(dateCur.getUTCMonth() + 1) + "," + String(dateCur.getUTCDate()) + ")") + ">" + this.dopt.L_More_Text + "</span></td>\r";
                    }
                    else {
                        span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
                        if (span != null) {
                            var stClass3 = "ms-appt";

                            if (!span.evt.multiDay)
                                stClass3 = "ms-apptsingle" + this.DayStyle(dateCur, false, false, fWeekly);
                            st += "<td class=" + stClass3 + " colspan=" + String(span.cbucket) + " title=" + StAttrQuote(span.evt.StTip(this.dopt)) + "><nobr>" + StURL(span.evt.stURL, span.evt.stTitle) + "</nobr></td>\r";
                            iday += span.cbucket - 1;
                        }
                        else {
                            st += "<td class='ms-calMid'" + this.DayStyle(dateCur, false, false, fWeekly) + ">&nbsp;</td>\r";
                        }
                    }
                }
                st += "</tr>\r";
                st += "<tr>\r";
                var stClass4;

                if (ichan == cchan - 1)
                    stClass4 = "ms-CalBot";
                else
                    stClass4 = "ms-CalSpacer";
                for (iday = 0; iday < 7; iday++) {
                    this.SetDateFromGrid(dateCur, irw, iday);
                    st += "<td class=" + stClass4 + this.DayStyle(dateCur, ichan == cchan - 1, false, fWeekly) + ">&nbsp;</td>\r";
                }
                st += "</tr>\r";
            }
        }
    }
    st += "</table>";
    return st;
}
function CalSpanCheck(irw, iday, ichan, cchan) {
ULSglM:
    ;
    var span;
    var i;
    var iMax;

    if (this.IchanNext(irw, iday, iday) > cchan)
        return true;
    span = this.mpSpan[String(irw) + "." + String(iday) + "." + String(ichan)];
    if (span != null) {
        iMax = span.cbucket + iday;
        if (iMax > 7)
            iMax = 7;
        for (i = iday + 1; i < iMax; i++) {
            if (this.IchanNext(irw, i, i) > cchan)
                return true;
        }
    }
    return false;
}
function StRenderVDayEvt(evt, dopt, rowSpan) {
    var st = "";

    st += "<table height='12px' border='0' cellpadding='0' cellspacing='0' style='border-collapse: collapse; padding-right:6px' ><tr>";
    if (Boolean(evt.rgIcons) && Boolean(evt.rgIcons.length)) {
        var i;
        var icon;
        var bAllBlank = true;

        for (i in evt.rgIcons) {
            icon = evt.rgIcons[i];
            if (Boolean(icon) && icon.indexOf("blank.gif") < 0) {
                bAllBlank = false;
                break;
            }
        }
        if (!bAllBlank) {
            st += "<td valign='top' nowrap>";
            for (i in evt.rgIcons) {
                icon = evt.rgIcons[i];
                if (Boolean(icon) && Boolean(icon.length)) {
                    st += evt.rgIcons[i];
                }
            }
            st += "</td>";
        }
    }
    st += "<td nowrap>" + StURL(evt.stURL, evt.stTitle) + "</td></tr></table>";
    if (rowSpan > 2)
        st += "<nobr>" + StEvtTime(evt, dopt, false) + "</nobr>";
    if (rowSpan > 3 && evt.stLocation != null)
        st += "<br><nobr>" + STSHtmlEncode(evt.stLocation) + "</nobr>";
    return st;
}
function StEvtTime(evt, dopt, fAMPM) {
    var st = "";

    if (fAMPM)
        st += dopt.StTime(evt.actualDateStart);
    else
        st += dopt.StBareTime(evt.actualDateStart);
    if (evt.actualDateStart.getTime() != evt.actualDateEnd.getTime() && (MsFloorTime(evt.actualDateStart, Calendar.msDay, Boolean(0)) == MsFloorTime(evt.actualDateEnd, Calendar.msDay, Boolean(0)) || evt.actualDateEnd.getTime() - evt.actualDateStart.getTime() < Calendar.msDay)) {
        st += " - ";
        if (fAMPM)
            st += dopt.StTime(evt.actualDateEnd);
        else
            st += dopt.StBareTime(evt.actualDateEnd);
    }
    return st;
}
function StClickEvent(st) {
ULSglM:
    ;
    return 'onclick="' + st + '" ondblclick="' + st + '"';
}
function CalStBuildPicker() {
ULSglM:
    ;
    var st;
    var dateCur = new Date;
    var dateToday = this.dopt.Today();
    var irw;
    var iday;
    var stClass;
    var ievt;

    st = '<table ONSELECTSTART="return false;" class="ms-datepicker" cellpadding="2" cellspacing="0" border="1">\r';
    var stTDHigh = '<td style="cursor:pointer;" onmouseover="Highlight(this, \'yellow\', \'black\');" onmouseout="Highlight(this, \'\', \'\');" ';

    st += '<tr>' + stTDHigh + StClickEvent(this.stObject + '.MoveMonth(-1)') + ' class="ms-dpnextprev">&lt;</td><td class="ms-dphead" colspan="5">' + this.StMonthYear() + '</td>' + stTDHigh + StClickEvent(this.stObject + '.MoveMonth(1)') + ' class="ms-dpnextprev">&gt;</td></tr>';
    st += "<tr>\r";
    for (iday = 0; iday < 7; iday++) {
        st += '<td class="ms-dpdow" height="20" width="14%">' + '&nbsp;' + this.rgDOWDP((iday + this.dopt.dow) % 7) + '&nbsp;</td>\r';
    }
    st += "</tr>\r";
    for (irw = 0; irw < this.irwMax; irw++) {
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            this.SetDateFromGrid(dateCur, irw, iday);
            var rgevt = this.mpEvents[String(irw) + "." + String(iday)];
            var fHasEvent = rgevt != null;
            var yr = dateCur.getUTCFullYear();
            var mon = dateCur.getUTCMonth();
            var day = dateCur.getUTCDate();

            st += stTDHigh + StClickEvent(this.stObject + '.ClickDay(' + String(yr) + ',' + String(mon) + ',' + String(day) + ')');
            if (fHasEvent) {
                var stTips = "";

                for (ievt = 0; ievt < rgevt.length; ievt++) {
                    var myEvt = rgevt[String(ievt)];

                    stTips += myEvt.StTip(this.dopt);
                    if (ievt < rgevt.length - 1)
                        stTips += "\r";
                }
                st += " title=" + StAttrQuote(stTips);
            }
            st += ' width="14%"' + this.DPDayStyle(dateCur, fHasEvent) + '>&nbsp;' + (fHasEvent ? "<b>" : "") + String(dateCur.getUTCDate()) + (fHasEvent ? "</b>" : "") + (dateCur.getTime() == dateToday.getTime() ? "<font color='red'>" + Strings.STS.L_LittleRedDiamond_TXT + "</font>" : "&nbsp;");
            st += '</td>\r';
        }
        st += "</tr>\r";
    }
    var stTodayLink = "<a href='javascript:" + this.stObject + ".SetDate(" + String(dateToday.getUTCFullYear()) + "," + String(dateToday.getUTCMonth()) + "," + String(dateToday.getUTCDate()) + ");'>" + this.dopt.StDate(dateToday) + "</a>";

    st += "<tr><td class='ms-DPFoot' colspan='7'><font color='red'>" + Strings.STS.L_LittleRedDiamond_TXT + "</font>" + StBuildParam(Strings.STS.L_TodaysDate_Text, [stTodayLink]) + "</td></tr>";
    st += "</table>";
    return st;
}
function CalMoveDate(delta) {
ULSglM:
    ;
    if (this.iperiod == 2)
        this.MoveVDay(delta);
    else if (this.iperiod == 1)
        this.MoveWeek(delta);
    else
        this.MoveMonth(delta);
}
function CalMoveMonth(dmon) {
    var stURL;
    var mon = this.givenDate.getUTCFullYear() * 12 + this.givenDate.getUTCMonth() + dmon;
    var yr = Math.floor(mon / 12);

    mon = mon % 12;
    if (dmon != 0)
        stURL = StURLSetVar("CalendarDate", String(yr) + "-" + St2Digits(mon + 1) + "-1");
    else
        stURL = StURLSetVar("CalendarDate", String(yr) + "-" + St2Digits(mon + 1) + "-" + String(this.givenDate.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "month");
    this.Post(stURL);
}
function CalMoveWeek(dweek) {
    var stURL;
    var date = this.givenDate;

    date.setUTCDate(this.givenDate.getUTCDate() + 7 * dweek);
    stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "week");
    this.Post(stURL);
}
function CalMoveDay(dday) {
ULSglM:
    ;
    var stURL;
    var date = this.givenDate;

    date.setUTCDate(this.givenDate.getUTCDate() + dday);
    stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "day");
    this.Post(stURL);
}
function CalMoveToDay(yr, mon, day) {
ULSglM:
    ;
    var stURL;

    stURL = StURLSetVar("CalendarDate", yr + "-" + St2Digits(mon) + "-" + day);
    stURL = StURLSetVar2(stURL, "CalendarPeriod", "day");
    this.Post(stURL);
}
function CalMoveToToday() {
ULSglM:
    ;
    var date = this.dopt.Today();
    var stURL = StURLSetVar("CalendarDate", String(date.getUTCFullYear()) + "-" + St2Digits(date.getUTCMonth() + 1) + "-" + String(date.getUTCDate()));

    this.Post(stURL);
}
function CalDoPost(stURL) {
ULSglM:
    ;
    if (Boolean(this.stViewID) && Boolean(this.stViewID.length))
        stURL = StURLSetVar2(stURL, "View", this.stViewID);
    SubmitFormPost(stURL, undefined, undefined);
}
function EditSeries(stEditURL) {
ULSglM:
    ;
    var stID = "";

    if (Boolean(stEditURL))
        stID = StSearchVar(stEditURL, "ID");
    else
        stID = StURLGetVar("ID");
    if (Boolean(stID.length)) {
        var iOccurDate = stID.indexOf(".0.");

        if (iOccurDate > 0) {
            var stURL = "";

            if (Boolean(stEditURL)) {
                stURL = window.location.href;
                var ichQ = stURL.indexOf("?");

                if (ichQ > 0)
                    stEditURL += stURL.substring(ichQ, stURL.length);
                stURL = StURLSetVar2(stEditURL, "ID", stID.substr(0, iOccurDate));
            }
            else
                stURL = StURLSetVar("ID", stID.substr(0, iOccurDate));
            window.location.href = stURL;
        }
    }
}
function EditSeriesID(stMasterID, stEditURL) {
    if (Boolean(stMasterID.length)) {
        var stURL = "";

        if (Boolean(stEditURL)) {
            stURL = window.location.href;
            var ichQ = stURL.indexOf("?");

            if (ichQ > 0)
                stEditURL += stURL.substring(ichQ, stURL.length);
            stURL = StURLSetVar2(stEditURL, "ID", stMasterID);
        }
        else
            stURL = StURLSetVar("ID", stMasterID);
        window.location.href = stURL;
    }
}
function StURLSetVar(stVar, stValue) {
ULSglM:
    ;
    return StURLSetVar2(window.location.href, stVar, stValue);
}
function StViewURLSetVar(viewPage, stVar, stValue) {
ULSglM:
    ;
    var stUrl = window.location.href;
    var p1 = stUrl.lastIndexOf("/");

    if (p1 > 0)
        stUrl = stUrl.substring(0, p1 + 1) + viewPage;
    return StURLSetVar2(stUrl, stVar, stValue);
}
function StURLGetVar(stVar) {
ULSglM:
    ;
    var stURL = location.href;

    return StSearchVar(stURL, stVar);
}
function StSearchVar(st, stVar) {
    var re = new RegExp("[?&]" + stVar + "=", "g");
    var ich = st.search(re);

    if (ich == -1)
        return "";
    ich += stVar.length + 2;
    var ichEnd = st.indexOf("&", ich + 1);

    if (ichEnd == -1)
        ichEnd = st.length;
    var stValue = st.substring(ich, ichEnd);

    return stValue;
}
function HighlightText(elt, stText) {
    if (stText != "") {
        elt.colorTextSav = elt.style.color;
        elt.style.color = stText;
    }
    else {
        elt.style.color = elt.colorTextSav;
    }
}
function Highlight(elt, stHighlight, stText) {
    if (stHighlight != "") {
        elt.colorBackSav = elt.style.backgroundColor;
        elt.colorTextSav = elt.style.color;
        elt.style.backgroundColor = stHighlight;
        elt.style.color = stText;
    }
    else {
        elt.style.backgroundColor = elt.colorBackSav;
        elt.style.color = elt.colorTextSav;
    }
}
function CalDPDayStyle(dateCur, fHasEvent) {
    var st = "";

    if (dateCur.getTime() == this.dateDP.getTime())
        st += " class=ms-dpselectedday";
    else if (dateCur.getUTCMonth() != this.mon)
        st += " class=ms-dpnonmonth";
    else
        st += " class=ms-dpday";
    if (fHasEvent) {
        st += ' style:"font-weight: bold;"';
    }
    return st;
}
function CalStDownlevelBuild() {
ULSglM:
    ;
    var st;
    var dateCur = new Date;
    var irw;
    var iday;
    var stClass;
    var ievt;

    st = '<table cellpadding="2" cellspacing="0" width="100%" border="1">\r';
    st += '<tr><td class="ms-calhead"><a class="ms-calhead" target="_self" href="javascript:' + this.stObject + '.MoveDate(-1);"><b>&lt;</b></a></td><td class="ms-calhead" colspan="5">' + this.StMonthYear() + '</td><td class="ms-calhead"><a class="ms-calhead" target="_self" href="javascript:' + this.stObject + '.MoveDate(1);"><b>&gt;</b></a></td></tr>';
    st += "<tr>\r";
    for (iday = 0; iday < 7; iday++) {
        st += '<td class="ms-calDOWDown" height="20" width="14%">' + '&nbsp;' + this.rgDOW((iday + this.dopt.dow) % 7) + "&nbsp;</td>\r";
    }
    st += "</tr>\r";
    for (irw = 0; irw < this.irwMax; irw++) {
        st += "<tr>\r";
        for (iday = 0; iday < 7; iday++) {
            this.SetDateFromGrid(dateCur, irw, iday);
            st += '<td class="ms-calDown" height="80" width="14%"' + this.DayStyle(dateCur) + '>&nbsp;' + String(dateCur.getUTCDate()) + "&nbsp;<br>\r";
            var rgevt = this.mpEvents[String(irw) + "." + String(iday)];

            if (rgevt != null) {
                for (ievt = 0; ievt < rgevt.length; ievt++) {
                    var evt = rgevt[String(ievt)];

                    st += StURL(evt.stURL, evt.stTitle) + '<br>\r';
                }
            }
            st += '</td>';
        }
        st += "</tr>\r";
    }
    st += "</table>";
    return st;
}
function CalSetDateFromGrid(date, irw, iday) {
    date.setTime(this.dateStart.getTime() + irw * Calendar.msWeek + iday * Calendar.msDay);
}
function CalEvent(dateStart, dateEnd, actualDateStart, actualDateEnd, stLocation, stDesc, stTitle, stURL, rgIcons) {
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.actualDateStart = actualDateStart;
    this.actualDateEnd = actualDateEnd;
    this.stLocation = stLocation;
    this.stDesc = stDesc;
    this.stTitle = stTitle;
    if (stTitle.length == 0)
        this.stTitle = Strings.STS.L_NoTitle_Text;
    this.stURL = stURL;
    this.rgIcons = rgIcons;
    var dayStart = MsFloorTime(dateStart, Calendar.msDay, Boolean(0));
    var dayEnd = MsFloorTime(dateEnd, Calendar.msDay, Boolean(1));

    if (Number(dayStart) < Number(dayEnd) && actualDateEnd.getTime() - actualDateStart.getTime() >= Calendar.msDay) {
        this.multiDay = true;
    }
    else
        this.multiDay = false;
    var quarterStart = MsFloorTime(dateStart, Calendar.msHour / 4, Boolean(0));
    var quarterEnd = MsFloorTime(dateEnd, Calendar.msHour / 4, Boolean(1));

    if (quarterStart < quarterEnd)
        this.multiQuarter = true;
}
function EvtFOverlap(evt) {
    return Number(evt.dateStart) <= Number(this.dateEnd) && Number(evt.dateEnd) >= Number(this.dateStart);
}
function EvtStTip(dopt) {
ULSglM:
    ;
    var stT;
    var stTime = StEvtTime(this, dopt, true);

    if (DateOptions.FHasTime(this.actualDateStart) || DateOptions.FHasTime(this.actualDateEnd))
        stT = StBuildParam(Strings.STS.L_Tip_Text, [stTime, this.stTitle]);
    else
        stT = this.stTitle;
    if (!FBlankString(this.stLocation))
        stT += "\r" + this.stLocation;
    if (!FBlankString(this.stDesc))
        stT += "\r" + this.stDesc;
    return stT;
}
function DiscussionBoard(flag, id) {
ULSglM:
    ;
    this.id = id;
    this.name = "board" + id;
    this.rootPosts = [];
    this.allPosts = [];
    this.lastInsert = 0;
    this.lastNode = null;
    this.expanded = false;
    this.threaded = flag;
    this.initialized = false;
    this.widgetBaseSrc = null;
    this.init = function() {
    ULSglM:
        ;
        this.mainTable = document.getElementById(this.id);
        var childAnchors = this.mainTable.getElementsByTagName("A");

        if (this.threaded) {
            for (var counter = 0; counter < childAnchors.length; counter++) {
                if (childAnchors[counter].name == "post")
                    this.insert(new Post(childAnchors[counter], this));
            }
            this.setReplyCountAndIndent();
        }
        else {
            for (var counter2 = 0; counter2 < childAnchors.length; counter2++) {
                if (childAnchors[counter2].name == "post")
                    this.allPosts.push(new Post(childAnchors[counter2], this));
            }
        }
        this.initialized = true;
    };
    this.setReplyCountAndIndent = function() {
    ULSglM:
        ;
        var nextRoot;

        for (var counter = 0; counter < this.rootPosts.length; counter++) {
            nextRoot = this.rootPosts[counter];
            nextRoot.setReplyCountAndIndent(true);
        }
    };
    this.insert = function(newNode) {
        var nextRoot;

        for (var counter = this.lastInsert; counter < this.rootPosts.length; counter++) {
            nextRoot = this.rootPosts[counter];
            if (newNode.id.indexOf(nextRoot.id) == 0 && newNode.id != nextRoot.id) {
                newNode.hide();
                return nextRoot.insert(newNode);
            }
            else
                this.lastInsert++;
        }
        this.rootPosts.push(newNode);
        return undefined;
    };
    this.retrieve = function(id2, guid) {
        if (this.threaded) {
            var nextRoot;
            var node;

            for (var counter = 0; counter < this.rootPosts.length; counter++) {
                nextRoot = this.rootPosts[counter];
                if (id2.indexOf(nextRoot.id) == 0)
                    if ((node = nextRoot.retrieve(id2, guid)) != -1)
                        return node;
            }
        }
        else {
            var nextPost;

            for (var counter2 = 0; counter2 < this.allPosts.length; counter2++) {
                nextPost = this.allPosts[counter2];
                if (id2 == nextPost.id && guid == nextPost.guid)
                    return nextPost;
            }
        }
        return -1;
    };
    this.expandCollapse = function() {
    ULSglM:
        ;
        if (!this.initialized)
            return false;
        if (this.expanded) {
            var nextRoot;

            for (var counter = 0; counter < this.rootPosts.length; counter++) {
                nextRoot = this.rootPosts[counter];
                nextRoot.hideTextAndChildren();
            }
            this.expanded = false;
        }
        else {
            var nextRoot2;

            for (var counter2 = 0; counter2 < this.rootPosts.length; counter2++) {
                nextRoot2 = this.rootPosts[counter2];
                nextRoot2.showTextAndChildren(true);
            }
            this.expanded = true;
        }
        return;
    };
    this.handleClicks = function(evt) {
        if (!this.initialized)
            return true;
        evt = evt ? evt : window.event ? window.event : Event("");
        if (Boolean(evt)) {
            var elem;

            if (Boolean(evt.target))
                elem = evt.target;
            else
                elem = evt.srcElement;
            if (evt.type == "keydown") {
                if (String.fromCharCode(evt.keyCode) == '\r')
                    elem = elem.firstChild;
                else
                    return true;
            }
            if (Boolean(elem)) {
                if (Boolean(elem.name) && "widget" == elem.name.valueOf()) {
                    var srcPath = elem.getAttribute("src");

                    if (Boolean(srcPath)) {
                        var index = srcPath.lastIndexOf("/");
                        var imgName = srcPath.slice(index + 1);

                        if (imgName.valueOf() == "discbul.gif" || imgName.valueOf() != "plus.gif" && imgName.valueOf() != "minus.gif")
                            return true;
                        var node;
                        var action;

                        if (evt.type == "click" || evt.type == "keydown") {
                            node = this.retrieve(elem.id, elem.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("PostID"));
                            this.lastNode = node;
                            action = imgName.valueOf() == "plus.gif" ? "expand" : "collapse";
                        }
                        else if (evt.type == "dblclick") {
                            node = this.lastNode;
                            action = imgName.valueOf() == "plus.gif" ? "collapse" : "expandRecursively";
                        }
                        switch (action) {
                        case "expand":
                            if (this.threaded)
                                node.showTextAndChildren(false);
                            else
                                node.showText();
                            break;
                        case "expandRecursively":
                            if (this.threaded)
                                node.showTextAndChildren(true);
                            else
                                node.showText();
                            break;
                        case "collapse":
                            if (this.threaded) {
                                node.hideTextAndChildren();
                                this.expanded = false;
                            }
                            else
                                node.hideText();
                            break;
                        }
                    }
                }
            }
        }
        return true;
    };
}
function Post(elem, discussionBoard) {
    this.board = discussionBoard;
    this.depth = 0;
    this.replyCount = 0;
    this.lastInsert = 0;
    this.childNodes = [];
    this.anchor = elem;
    this.widget = elem.firstChild;
    this.widgetPadding = this.widget.parentNode.parentNode;
    if (!Boolean(this.board.widgetBaseSrc)) {
        var currentWidgetSrcPath = this.widget.getAttribute("src");
        var marker = currentWidgetSrcPath.lastIndexOf("/");

        this.board.widgetBaseSrc = currentWidgetSrcPath.slice(0, marker + 1);
    }
    this.id = this.widget.id;
    this.guid = this.widgetPadding.parentNode.parentNode.parentNode.getAttribute("PostID");
    if (this.board.threaded) {
        this.indent = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild;
        var postBody;

        if (browseris.ie && !browseris.mac)
            postBody = this.indent.parentNode.childNodes[1].childNodes[1];
        else
            postBody = this.indent.parentNode.childNodes[1].childNodes[2];
        this.body = postBody;
        this.row = this.indent.parentNode.parentNode.parentNode.parentNode.parentNode;
        this.reply = this.row.childNodes[1];
        this.bodyPadding = this.body.firstChild.firstChild.firstChild;
        this.bodyPadding.setAttribute("width", "8");
    }
    else
        this.body = elem.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1];
    this.insert = function(newNode) {
        this.replyCount++;
        newNode.depth++;
        var nextChild;

        for (var counter = this.lastInsert; counter < this.childNodes.length; counter++) {
            nextChild = this.childNodes[counter];
            if (newNode.id.indexOf(nextChild.id) == 0 && newNode.id != nextChild.id)
                return nextChild.insert(newNode);
            else
                this.lastInsert++;
        }
        this.childNodes.push(newNode);
        return undefined;
    };
    this.retrieve = function(id, guid) {
        var nextChild;
        var node;

        for (var counter = 0; counter < this.childNodes.length; counter++) {
            nextChild = this.childNodes[counter];
            if (id.indexOf(nextChild.id) == 0)
                if (Number(node = nextChild.retrieve(id, guid)) != -1)
                    return node;
        }
        if (this.guid == guid)
            return this;
        else
            return -1;
    };
    this.show = function() {
    ULSglM:
        ;
        this.row.style.display = "";
    };
    this.hide = function() {
    ULSglM:
        ;
        this.row.style.display = "none";
    };
    this.showTextThreaded = function() {
    ULSglM:
        ;
        this.show();
        this.widget.src = this.board.widgetBaseSrc + "minus.gif";
        this.widget.alt = Strings.STS.L_strCollapse_Text;
        this.body.style.display = "";
    };
    this.showText = function() {
    ULSglM:
        ;
        this.widget.src = this.board.widgetBaseSrc + "minus.gif";
        this.widget.alt = Strings.STS.L_strCollapse_Text;
        this.body.style.display = "";
    };
    this.hideText = function() {
    ULSglM:
        ;
        this.widget.src = this.board.widgetBaseSrc + "plus.gif";
        this.widget.alt = Strings.STS.L_strExpand_Text;
        if (browseris.nav6)
            this.body.setAttribute('style', 'display: none');
        else
            this.body.style.display = "none";
    };
    this.showTextAndChildren = function(recurse) {
    ULSglM:
        ;
        this.showTextThreaded();
        if (recurse) {
            var nextChild;

            for (var counter = 0; counter < this.childNodes.length; counter++) {
                nextChild = this.childNodes[counter];
                nextChild.showTextAndChildren(recurse);
            }
        }
        else {
            var nextChild2;

            for (var counter2 = 0; counter2 < this.childNodes.length; counter2++) {
                nextChild2 = this.childNodes[counter2];
                nextChild2.show();
            }
        }
    };
    this.hideTextAndChildren = function() {
        this.hideText();
        var nextChild;

        for (var counter = 0; counter < this.childNodes.length; counter++) {
            nextChild = this.childNodes[counter];
            nextChild.hide();
            nextChild.hideTextAndChildren();
        }
    };
    this.setReplyCountAndIndent = function(recurse) {
    ULSglM:
        ;
        this.reply.innerHTML = this.replyCount;
        this.indent.setAttribute("width", String(this.depth * 16));
        if (recurse) {
            var nextChild;

            for (var counter = 0; counter < this.childNodes.length; counter++) {
                nextChild = this.childNodes[counter];
                nextChild.setReplyCountAndIndent(recurse);
            }
        }
    };
    this.hideText();
    this.widget.parentNode.style.cursor = 'hand';
    this.widgetPadding.style.paddingTop = '2px';
}
function St2Digits(w) {
ULSglM:
    ;
    var st = "";

    if (w < 0)
        return st;
    if (w < 10)
        st += "0";
    st += String(w);
    return st;
}
var g_fld;

function BFormDocumentWrite(st) {
    if (!("function" == typeof SPDocumentWrite && SPDocumentWrite(st))) {
        document.write(st);
    }
}
function DiscussionBoard_InitializePrototype() {
ULSglM:
    ;
    DiscussionBoard.prototype.threaded = undefined;
    DiscussionBoard.prototype.widgetBaseSrc = undefined;
    DiscussionBoard.prototype.insert = function(post) {
    };
    DiscussionBoard.prototype.setReplyCountAndIndent = function() {
    };
}
function Post_InitializePrototype() {
ULSglM:
    ;
    Post.prototype.body = undefined;
    Post.prototype.depth = undefined;
    Post.prototype.guid = undefined;
    Post.prototype.id = undefined;
    Post.prototype.hide = function() {
    };
    Post.prototype.hideText = function() {
    };
    Post.prototype.hideTextAndChildren = function() {
    };
    Post.prototype.insert = function(post) {
    };
    Post.prototype.retrieve = function(id, guid) {
    };
    Post.prototype.setReplyCountAndIndent = function(recurse) {
    };
    Post.prototype.show = function() {
    };
    Post.prototype.showText = function() {
    };
    Post.prototype.showTextAndChildren = function(recurse) {
    };
}
function DateDecode_InitializePrototype() {
ULSglM:
    ;
    DateDecode.prototype.day = undefined;
    DateDecode.prototype.dow = undefined;
    DateDecode.prototype.yr = undefined;
    DateDecode.prototype.mon = undefined;
    DateDecode.prototype.hr = undefined;
    DateDecode.prototype.min = undefined;
    DateDecode.prototype.sec = undefined;
}
function OWSForm_InitializePrototype() {
ULSglM:
    ;
    OWSForm.prototype = {
        stName: undefined,
        stFieldPrefix: undefined,
        dopt: undefined,
        nopt: undefined,
        fUseDHTML: undefined,
        ifldMax: undefined,
        rgfld: undefined,
        stError: undefined,
        stImagesPath: undefined,
        stPagePath: undefined,
        dp: undefined,
        stInputStyle: undefined,
        stLongStyle: undefined,
        fPreviewMode: undefined,
        form: undefined,
        themeCSSurl: undefined,
        rgcts: undefined,
        rgctNames: undefined,
        wBaseType: undefined,
        ctIdToName: undefined,
        ctNameToId: undefined
    };
}
function DateField_InitializePrototype() {
ULSglM:
    ;
    DateField.prototype = {
        fDateOnly: undefined,
        stAttributes: undefined,
        caltype: undefined,
        direction: undefined,
        stPopUpOnClick2: undefined,
        date: undefined,
        origDate: undefined,
        showDatePicker: undefined,
        stDisplay: undefined,
        stName: undefined,
        stValue: undefined,
        stPrefix: undefined,
        frm: undefined,
        fHideDateSpan: undefined,
        fHideDescription: undefined,
        fSkipValidation: undefined,
        fRequired: undefined,
        fFillInChoice: undefined,
        errFld: undefined,
        stError: undefined,
        disabled: undefined
    };
}
function Field_InitializePrototype() {
ULSglM:
    ;
    Field.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined
    };
}
function DateOptions_InitializePrototype() {
ULSglM:
    ;
    DateOptions.prototype.stDateOrder = undefined;
    DateOptions.prototype.f12Hour = undefined;
    DateOptions.prototype.stAM = undefined;
    DateOptions.prototype.stPM = undefined;
    DateOptions.prototype.TimeMarkPosn = undefined;
    DateOptions.prototype.dminControl = undefined;
    DateOptions.prototype.chDateSep = undefined;
    DateOptions.prototype.chTimeSep = undefined;
    DateOptions.prototype.dyrWindow = undefined;
    DateOptions.prototype.dow = undefined;
    DateOptions.prototype.webTZOffsetMin = undefined;
    DateOptions.prototype.WorkDayStartHour = undefined;
    DateOptions.prototype.WorkDayEndHour = undefined;
    DateOptions.prototype.DailyStartHourDelta = undefined;
    DateOptions.prototype.DailyEndHourDelta = undefined;
    DateOptions.prototype.CalendarPeriod = undefined;
    DateOptions.prototype.L_AllDay_Text = undefined;
    DateOptions.prototype.AllDayWidth = undefined;
    DateOptions.prototype.L_More_Text = undefined;
}
function URLField_InitializePrototype() {
ULSglM:
    ;
    URLField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined
    };
}
function NumberField_InitializePrototype() {
ULSglM:
    ;
    NumberField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fCalcCheck: undefined,
        fInteger: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        wMin: undefined,
        wMax: undefined
    };
}
function BooleanField_InitializePrototype() {
ULSglM:
    ;
    BooleanField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined
    };
}
function NoteField_InitializePrototype() {
ULSglM:
    ;
    NoteField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        stNumLines: undefined,
        IMEMode: undefined
    };
}
function RichTextField_InitializePrototype() {
ULSglM:
    ;
    RichTextField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        stNumLines: undefined,
        IMEMode: undefined,
        stDirection: undefined,
        fAllowHyperlink: undefined
    };
}
function TextField_InitializePrototype() {
ULSglM:
    ;
    TextField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        stNumLines: undefined,
        IMEMode: undefined,
        cchMaxLength: undefined,
        cchDisplaySize: undefined
    };
}
function FilenameField_InitializePrototype() {
ULSglM:
    ;
    FilenameField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        cchMaxLength: undefined,
        cchDisplaySize: undefined,
        isFileName: undefined,
        IMEMode: undefined
    };
}
function GridChoiceField_InitializePrototype() {
ULSglM:
    ;
    GridChoiceField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        rgGridChoices: undefined,
        GridStartNum: undefined,
        GridEndNum: undefined,
        GridNATxt: undefined,
        GridTxtRng1: undefined,
        GridTxtRng2: undefined,
        GridTxtRng3: undefined,
        nochange: undefined
    };
}
function GridChoice() {
}
function GridChoice_InitializePrototype() {
ULSglM:
    ;
    GridChoice.prototype = {
        stDisplay: undefined,
        stValue: undefined
    };
}
function ChoiceItem() {
}
function ChoiceItem_InitializePrototype() {
ULSglM:
    ;
    ChoiceItem.prototype = {
        stDisplay: undefined,
        stValue: undefined,
        hasLayoutProc: undefined,
        stLayoutProc: undefined
    };
}
function ChoiceField_InitializePrototype() {
ULSglM:
    ;
    ChoiceField.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        rgChoices: undefined,
        format: undefined,
        fFillInChoice: undefined,
        fIncludeMouseDown: undefined,
        nobr: undefined,
        horizontal: undefined,
        horizontalBreakEvery: undefined,
        IMEMode: undefined,
        radioClass: undefined,
        tableClass: undefined,
        fldCtId: undefined
    };
}
function RecurrencePattern_InitializePrototype() {
ULSglM:
    ;
    RecurrencePattern.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        fSkipValidation: undefined,
        isModifyException: undefined,
        isNewModifyException: undefined,
        stStartDate: undefined,
        stEndDate: undefined,
        caltype: undefined,
        todayiso: undefined,
        stPrefix: undefined,
        iCustom: undefined,
        fDoCustom: undefined,
        rgStRecurType: undefined,
        ccRecurType: undefined,
        rgStRangeType: undefined,
        recurrencePatternChoice: undefined,
        monthlyChoiceValue: undefined,
        dateRangeEndChoice: undefined,
        dayFrequency: undefined,
        weekFrequency: undefined,
        monthFrequency1: undefined,
        monthFrequency2: undefined,
        weeklyDayMultiValue: undefined,
        monthly1DayValue: undefined,
        monthly2DayValue: undefined,
        monthly2WeekValue: undefined,
        dateRangeStart: undefined,
        dateRangeEnd: undefined,
        dateRangeEndOccurrences: undefined,
        stRecurrenceID: undefined,
        stUID: undefined,
        stRecurrenceDescription: undefined,
        dateRangeFldStart: undefined,
        dateRangeFldEnd: undefined,
        endRangeOptionFld: undefined,
        dateRangeFldEndOccurrances: undefined,
        dayFrequencyFld: undefined,
        weeklyFrequencyFld: undefined,
        weeklyMultiDayFld: undefined,
        monthlyChoiceFld: undefined,
        monthlyChoice1DayFld: undefined,
        monthlyChoice1MonthFreqFld: undefined,
        monthlyChoice2MonthFreqFld: undefined
    };
}
function RecurrencePatternEventHooks_InitializePrototype() {
ULSglM:
    ;
    RecurrencePatternEventHooks.prototype = {
        frm: undefined,
        stName: undefined,
        stDisplay: undefined,
        stValue: undefined,
        fRequired: undefined,
        stError: undefined,
        stAttributes: undefined,
        recurFld: undefined,
        typeFld: undefined,
        stStartDate: undefined,
        stEndDate: undefined,
        rgStPatternTypes: undefined,
        value: undefined,
        dateFldStart: undefined,
        dateFldEnd: undefined,
        dateRangeFldStart: undefined,
        dateRangeFldEnd: undefined,
        errFld: undefined
    };
}
function FormTabIndex() {
ULSglM:
    ;
    if (typeof window.formTabIndex != "undefined" && Boolean(window.formTabIndex)) {
        if (window.formTabIndex == -1)
            return "";
        return "tabindex=" + String(window.formTabIndex);
    }
    return "tabindex=1";
}
function GetValueAttribute(elem) {
    if (typeof elem.value == 'undefined' && elem.tagName != null && elem.tagName.toLowerCase() == 'option' && browseris.ie && browseris.iever == 7 && document.documentMode == 5 && elem.attributes != null && elem.attributes['value'] != null) {
        var elemValue = elem.attributes['value'];

        return elemValue.value;
    }
    return elem.value;
}
function IntlDate(yr, mon, day, hr, min, sec, caltype) {
ULSglM:
    ;
    this.yr = yr;
    this.mon = mon;
    this.day = day;
    this.hr = hr;
    this.min = min;
    this.sec = sec;
    this.caltype = caltype;
}
function toIntlValue() {
ULSglM:
    ;
    var _status = 0;
    var maxMonth = 11;

    if ((this.caltype == 6 || this.caltype == 8) && (this.day < 1 || this.day > 30))
        _status = Number.NaN;
    if (this.caltype == 8)
        if ((this.yr * 7 + 1) % 19 < 7)
            maxMonth = 12;
    if (this.mon < 0 || this.mon > maxMonth)
        _status = Number.NaN;
    if (this.caltype == 7) {
        var date = new Date(Date.UTC(this.yr - 543, this.mon, this.day));

        if (this.yr - 543 != date.getUTCFullYear() || this.mon != date.getUTCMonth() || this.day != date.getUTCDate())
            _status = Number.NaN;
    }
    return _status;
}
function setIntlHours(hr, min, sec, msec) {
ULSglM:
    ;
    if (!Boolean(min))
        min = 0;
    if (!Boolean(sec))
        sec = 0;
    this.hr = hr;
    this.min = min;
    this.sec = sec;
}
function setIntlSeconds(sec) {
ULSglM:
    ;
    this.sec = sec;
}
function setIntlTime(msec) {
ULSglM:
    ;
    var date = new Date(msec);

    this.yr = date.getFullYear();
    this.mon = date.getMonth();
    this.day = date.getDate();
    this.hr = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
}
function getIntlFullYear() {
ULSglM:
    ;
    return this.yr;
}
function getIntlMonth() {
ULSglM:
    ;
    return this.mon;
}
function getIntlDate() {
ULSglM:
    ;
    return this.day;
}
function getIntlHours() {
ULSglM:
    ;
    return this.hr;
}
function getIntlMinutes() {
ULSglM:
    ;
    return this.min;
}
function getIntlSeconds() {
ULSglM:
    ;
    return this.sec;
}
function getIntlTime() {
ULSglM:
    ;
    var date = new Date(this.yr, this.mon, this.day, this.hr, this.min, this.sec);

    return date.getTime();
}
function DateOptions() {
ULSglM:
    ;
    var strMore = Strings.STS.L_strMore_Text;
    var strAllDay = Strings.STS.L_strAllDay_Text;

    this.stDateOrder = "MDY";
    this.f12Hour = true;
    this.stAM = Strings.STS.L_StrAM_Text;
    this.stPM = Strings.STS.L_StrPM_Text;
    this.TimeMarkPosn = 0;
    this.dminControl = 5;
    this.chDateSep = "/";
    this.chTimeSep = ":";
    this.dyrWindow = 30;
    this.dow = 0;
    this.webTZOffsetMin = 0;
    this.WorkDayStartHour = 8;
    this.WorkDayEndHour = 17;
    this.DailyStartHourDelta = 1;
    this.DailyEndHourDelta = 4;
    this.CalendarPeriod = "month";
    this.L_AllDay_Text = Strings.STS.L_strAllDay_Text;
    this.AllDayWidth = strAllDay;
    this.L_More_Text = strMore;
}
function DOSetTimeFormat(w) {
ULSglM:
    ;
    this.f12Hour = w == 0;
}
function DOSetDateOrder(w) {
ULSglM:
    ;
    switch (w) {
    case 0:
        this.stDateOrder = "MDY";
        break;
    case 1:
        this.stDateOrder = "DMY";
        break;
    case 2:
        this.stDateOrder = "YMD";
        break;
    }
}
function DOSetDOW(dow) {
ULSglM:
    ;
    this.dow = (dow + 1) % 7;
}
function DOParseLocaleDate(stDate, caltype) {
    var chSep = this.chDateSep;
    var ord = this.stDateOrder;
    var ichSlash1 = stDate.indexOf(chSep);
    var num1;
    var num2;
    var num3;
    var mon;
    var day;
    var yr;

    if (ichSlash1 < 0) {
        chSep = "/";
        ichSlash1 = stDate.indexOf(chSep);
        if (ichSlash1 < 0) {
            chSep = "-";
            ichSlash1 = stDate.indexOf(chSep);
        }
    }
    if (ichSlash1 < 0)
        return Number.NaN;
    var ichSlash2 = stDate.indexOf(chSep, ichSlash1 + 1);

    num1 = Number(stDate.substr(0, ichSlash1)) - 0;
    if (ichSlash2 < 0) {
        if (caltype != 1)
            return Number.NaN;
        ichSlash2 = stDate.length;
        var date = this.Today();

        num3 = date.getUTCFullYear();
        if (ord == "YMD")
            ord = "MDY";
    }
    else {
        num3 = Number(stDate.substr(ichSlash2 + 1)) - 0;
    }
    num2 = Number(stDate.substr(ichSlash1 + 1, ichSlash2 - ichSlash1 - 1)) - 0;
    if (isNaN(num1) || isNaN(num3) || isNaN(num3))
        return Number.NaN;
    var yrLen;

    switch (ord) {
    case "DMY":
        day = num1;
        mon = num2;
        yr = num3;
        yrLen = stDate.length - ichSlash2 - 1;
        break;
    case "YMD":
        yr = num1;
        yrLen = ichSlash1;
        mon = num2;
        day = num3;
        break;
    case "MDY":
        mon = num1;
        day = num2;
        yr = num3;
        yrLen = stDate.length - ichSlash2 - 1;
        break;
    }
    if (yr < 0)
        return Number.NaN;
    if (yrLen < 3)
        yr = this.YrWindow(yr, caltype);
    mon = mon - 1;
    var yrMin = 1900;
    var yrMax = 8900;

    switch (caltype) {
    case 6:
        yrMin = 1319;
        yrMax = 3481;
        break;
    case 7:
        yrMin = 2444;
        yrMax = 5043;
        break;
    case 8:
        yrMin = 5662;
        yrMax = 5998;
        break;
    case 16:
        yrMin = 1823;
        yrMax = 3920;
        break;
    case 23:
        yrMin = 1318;
        yrMax = 1450;
        break;
    }
    var minCalGregorian = caltype == 1 && yr == 1899 && mon == 11 && day == 31;

    if ((yr < yrMin || yr > yrMax) && !minCalGregorian) {
        return Number.NaN;
    }
    switch (caltype) {
    case 6:
    case 7:
    case 8:
    case 23:
        return this.DateIntlYMD(yr, mon, day, caltype);
    default:
        return this.DateYMD(yr, mon, day);
    }
    return Number.NaN;
}
function DODateYMD(yr, mon, day) {
ULSglM:
    ;
    if (isNaN(yr) || isNaN(mon) || isNaN(day))
        return Number.NaN;
    var date = new Date(Date.UTC(yr, mon, day));

    if (yr != date.getUTCFullYear() || mon != date.getUTCMonth() || day != date.getUTCDate())
        return Number.NaN;
    return date;
}
function DODateIntlYMD(yr, mon, day, caltype) {
ULSglM:
    ;
    if (isNaN(yr) || isNaN(mon) || isNaN(day))
        return Number.NaN;
    var date = new IntlDate(yr, mon, day, 0, 0, 0, caltype);

    return date;
}
function DOYrWindow(st, caltype) {
ULSglM:
    ;
    var yr = st - 0;

    if (isNaN(yr))
        return st;
    if (st < 100) {
        switch (caltype) {
        case 1:
            var date = this.Today();
            var yrCur = date.getUTCFullYear();

            yr += WMultiple(yrCur, 100);
            if (yr > yrCur + this.dyrWindow)
                yr -= 100;
            else if (yr < yrCur + this.dyrWindow - 100)
                yr += 100;
            break;
        case 6:
        case 23:
            if (yr < 52)
                yr += 1400;
            else
                yr += 1300;
            break;
        case 7:
            if (yr < 73)
                yr += 2500;
            else
                yr += 2400;
            break;
        case 8:
            if (yr < 91)
                yr += 5700;
            else
                yr += 5600;
            break;
        case 16:
            if (yr < 52)
                yr += 1900;
            else
                yr += 1800;
            break;
        }
        return yr;
    }
    return st;
}
function DOStDate(date) {
    return this.StDateString(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
}
function DOStDateString(yr, mon, day) {
    var st;
    var stMon = String(mon);
    var stDay = String(day);
    var stYr = String(yr);

    switch (this.stDateOrder) {
    case "MDY":
        st = stMon + this.chDateSep + stDay + this.chDateSep + stYr;
        break;
    case "DMY":
        st = stDay + this.chDateSep + stMon + this.chDateSep + stYr;
        break;
    case "YMD":
        st = stYr + this.chDateSep + stMon + this.chDateSep + stDay;
        break;
    }
    return st;
}
function DOStTime(date) {
    var stSuff = "";
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();

    if (this.f12Hour) {
        if (hr >= 12) {
            stSuff = this.stPM;
            if (hr > 12)
                hr -= 12;
        }
        else {
            if (hr == 0)
                hr = 12;
            stSuff = this.stAM;
        }
    }
    if (this.TimeMarkPosn == 0)
        return String(hr) + this.chTimeSep + St2Digits(min) + " " + stSuff;
    else
        return stSuff + " " + String(hr) + this.chTimeSep + St2Digits(min);
}
function DOStBareTime(date) {
    var stSuff = "";
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();

    if (this.f12Hour) {
        if (hr >= 12) {
            if (hr > 12)
                hr -= 12;
        }
        else {
            if (hr == 0)
                hr = 12;
        }
    }
    return String(hr) + this.chTimeSep + St2Digits(min);
}
function DOFHasTime(date) {
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();

    return hr != 0 || min != 0;
}
function DOStTimeControls(fld, date) {
    var st;
    var stSelected;
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();
    var hrT;
    var hrTT;
    var stSuff = "";
    var hrMax;
    var fPM;
    var fldDirection = "ltr";

    if (fld != null && typeof fld.direction != 'undefined' && fld.direction != null && fld.direction == "rtl") {
        fldDirection = "rtl";
    }
    if (typeof fld.frm != "undefined" && typeof fld.frm.StFieldName != "undefined") {
        st = "<span dir='" + fldDirection + "'><select title='" + Strings.STS.L_Hours_Text + "' " + FormTabIndex() + " class='ms-input' name=" + StAttrQuote(fld.frm.StFieldName(fld, "Hours")) + ">\r";
    }
    for (hrT = 0; hrT < 24; hrT++) {
        if (hrT == hr)
            stSelected = " SELECTED";
        else
            stSelected = "";
        st += "<option value=" + String(hrT) + stSelected + ">";
        hrTT = hrT;
        if (this.f12Hour) {
            if (hrT < 12) {
                stSuff = this.stAM;
            }
            else {
                stSuff = this.stPM;
                hrTT -= 12;
            }
            if (hrTT == 0)
                hrTT = 12;
            if (this.TimeMarkPosn == 0)
                st += String(hrTT) + " " + stSuff + "\r";
            else
                st += stSuff + " " + String(hrTT) + "\r";
        }
        else {
            if (hrT < 10)
                st += Strings.STS.L_SmallHour_Text;
            st += String(hrTT) + Strings.STS.L_Time_Text + "\r";
        }
    }
    st += "</select>\r";
    st += "&nbsp;<select title='" + Strings.STS.L_Minutes_Text + "' " + FormTabIndex() + " name=" + StAttrQuote(fld.frm.StFieldName(fld, "Minutes")) + ">\r";
    min = WMultiple(min, this.dminControl);
    for (var minT = 0; minT < 60; minT += this.dminControl) {
        if (minT == min)
            stSelected = " Selected=True";
        else
            stSelected = "";
        st += "<option value=" + String(minT) + stSelected + ">";
        st += St2Digits(minT) + "\r";
    }
    st += "</select></span>\r";
    return st;
}
function DOSetTimeControls(fld, date) {
    var fieldHours;
    var fieldMinutes;

    if (typeof fld.frm != "undefined" && typeof fld.frm.FieldSubPart != "undefined") {
        fieldHours = fld.frm.FieldSubPart(fld, "Hours");
        fieldMinutes = fld.frm.FieldSubPart(fld, "Minutes");
    }
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();
    var fPM;

    min = WMultiple(min, this.dminControl);
    fieldHours.selectedIndex = hr;
    fieldMinutes.selectedIndex = min / this.dminControl;
}
function DOToday() {
ULSglM:
    ;
    var date = this.Now();

    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function DONow() {
ULSglM:
    ;
    var date = new Date();

    date.setTime(date.getTime() - this.webTZOffsetMin * DateOptions.msMinute);
    return date;
}
function DOClientToday() {
ULSglM:
    ;
    var date = DateOptions.ClientNow();

    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function DOClientNow() {
ULSglM:
    ;
    var date = new Date();

    date.setTime(date.getTime() - date.getTimezoneOffset() * DateOptions.msMinute);
    return date;
}
function DOParseISODate(stISO, caltype) {
    var date = "#INVALID";

    if (stISO.length < 19)
        return date;
    var yr = Number(stISO.substr(0, 4));
    var mon = Number(stISO.substr(5, 2));
    var day = Number(stISO.substr(8, 2));
    var hr = Number(stISO.substr(11, 2));
    var min = Number(stISO.substr(14, 2));
    var sec = Number(stISO.substr(17, 2));

    if (isNaN(yr) || isNaN(mon) || isNaN(day) || isNaN(hr) || isNaN(min) || isNaN(sec))
        return date;
    if (typeof caltype == "undefined")
        caltype = 0;
    switch (caltype) {
    case 6:
    case 7:
    case 8:
    case 23:
        date = new IntlDate(yr, mon - 1, day, hr, min, sec, caltype);
        break;
    default:
        date = new Date(Date.UTC(yr, mon - 1, day, hr, min, sec));
        break;
    }
    return date;
}
function DateRoundDate(date) {
    date.setSeconds(0);
    return date;
}
function DOStISODate(date) {
    var yr = date.getUTCFullYear();
    var mon = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var hr = date.getUTCHours();
    var min = date.getUTCMinutes();
    var sec = date.getUTCSeconds();

    return String(yr) + "-" + St2Digits(mon) + "-" + St2Digits(day) + "T" + St2Digits(hr) + ":" + St2Digits(min) + ":" + St2Digits(sec) + "Z";
}
function DateDecode(date) {
    this.ms = date.getTime();
    this.msDay = this.ms % DateOptions.msDay;
    if (typeof this.sec != "undefined" && this.sec < 0)
        this.sec += DateOptions.msDay;
    this.idy = Math.floor(this.ms / DateOptions.msDay) + DateOptions.ddayOrigin;
    var idyQC = this.idy % DateOptions.cdyQC;
    var iQC = Math.floor(this.idy / DateOptions.cdyQC);
    var idyC = idyQC % DateOptions.cdyC;
    var iC = Math.floor(idyQC / DateOptions.cdyC);

    if (iC == 4) {
        iC = 3;
        idyC = DateOptions.cdyC;
    }
    var idyQYr = idyC % DateOptions.cdyQYr;
    var iQYr = Math.floor(idyC / DateOptions.cdyQYr);
    var idyYr = idyQYr % DateOptions.cdyYr;
    var iYr = Math.floor(idyQYr / DateOptions.cdyYr);

    if (iYr == 4) {
        iYr = 3;
        idyYr = DateOptions.cdyYr;
    }
    this.yr = 1600 + iQC * 400 + iC * 100 + iQYr * 4 + iYr;
    if (idyYr >= DateOptions.idyJan1)
        this.yr++;
    var imon;

    for (imon = 0; imon < 11; imon++) {
        if (idyYr < DateOptions.mpMonIdy[imon])
            break;
    }
    this.mon = (imon + 2) % 12;
    this.day = idyYr - (imon > 0 ? DateOptions.mpMonIdy[imon - 1] : 0) + 1;
    this.hr = Math.floor(this.msDay / DateOptions.msHour);
    this.min = Math.floor(this.msDay % DateOptions.msHour / DateOptions.msMinute);
    this.sec = Math.floor(this.msDay % DateOptions.msMinute / DateOptions.msSecond);
    this.dow = (this.idy + 3) % 7;
}
function DDMsEncode() {
ULSglM:
    ;
    this.ms = Date.UTC(this.yr, this.mon, this.day, this.hr, this.min, this.sec);
    return this.ms;
}
function DateEnsureDecode() {
ULSglM:
    ;
    if (typeof this.dd == "undefined" || typeof this.dd.ms != "undefined" && this.dd.ms != this.getTime())
        this.dd = new DateDecode(this);
}
function DateResetMs() {
ULSglM:
    ;
    this.setTime(this.dd.MsEncode());
}
function DateGetUTCDate() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.day;
}
function DateGetUTCDay() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.dow;
}
function DateGetUTCFullYear() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.yr;
}
function DateGetUTCMonth() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.mon;
}
function DateGetUTCHours() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.hr;
}
function DateGetUTCMinutes() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.min;
}
function DateGetUTCSeconds() {
ULSglM:
    ;
    this.EnsureDecode();
    return this.dd.sec;
}
function DateSetUTCDate(day) {
ULSglM:
    ;
    this.EnsureDecode();
    this.dd.day = day;
    this.ResetMs();
}
function DateSetUTCHours(hr, min, sec, ms) {
    this.EnsureDecode();
    if (!Boolean(min))
        min = 0;
    if (!Boolean(sec))
        sec = 0;
    this.dd.hr = hr;
    this.dd.min = min;
    this.dd.sec = sec;
    this.ResetMs();
}
function StDateDecode() {
ULSglM:
    ;
    return "Date Object\rYear: " + String(this.yr) + "\rMon: " + String(this.mon + 1) + "\rDay: " + String(this.day) + "\rhr: " + String(this.hr) + "\rmin: " + String(this.min) + "\rsec: " + String(this.sec);
}
function DatePicker_InitializePrototype() {
ULSglM:
    ;
    DatePicker.prototype = {
        elt: undefined,
        wnd: undefined
    };
}
function DatePicker(frm) {
    this.frm = frm;
    if (frm.fUseDHTML) {
        BFormDocumentWrite('<iframe frameborder="0" src="' + frm.stPagePath + 'iframe.htm" scrolling="no" style="position:absolute;display:none;background:white;" id=DatePickerWind></iframe>');
        this.wnd = typeof DatePickerWind == "undefined" ? undefined : DatePickerWind;
        document.body.onclick = DPCancelHandler;
        this.ifrm = document.getElementById("DatePickerWind");
    }
}
function DPCancelHandler() {
ULSglM:
    ;
    var tempDP = frmCurrent.dp;

    tempDP.Cancel();
}
function DPStButton(fld, stPopUpOnClick2) {
    var st = "";

    if (this.frm.fUseDHTML) {
        st += "<img alt=\"" + Strings.STS.L_DatePickerAlt_Text + "\" class=\"ms-button\" " + "onclick='{var elt = event.srcElement; " + stPopUpOnClick2 + "; if (!elt.disabled) frm.FindField(" + STSScriptEncodeWithQuote(fld.stName) + ").PopDatePicker(elt);}'" + "src=" + StAttrQuote(this.frm.stImagesPath + "calendar.gif") + " />";
    }
    return st;
}
function DPPopup(date, field, elt) {
    if (typeof this.elt != "undefined" && this.elt != null && this.elt == elt) {
        this.Cancel();
        return;
    }
    this.Cancel();
    this.bRTLAlign = false;
    this.date = new Date(date.getTime());
    this.date.setUTCHours(0, 0, 0, 0);
    this.field = field;
    this.elt = elt;
    var pos = WindowPosition(elt);

    this.ifrm.style.pixelLeft = pos.x + 1;
    this.ifrm.style.pixelTop = pos.y + elt.offsetHeight;
    this.SetHTML(this.StBuild());
}
function DPAdjustFrameSize() {
ULSglM:
    ;
    this.ifrm.style.display = "block";
    var divDP = this.wnd.document.getElementById("DatePickerDiv");

    if (typeof this.bDidAlign != "undefined" && !this.bDidAlign) {
        this.bDidAlign = true;
        this.ifrm.style.pixelWidth = divDP.offsetWidth - 100;
    }
    this.ifrm.style.pixelWidth = divDP.offsetWidth;
    this.ifrm.style.pixelHeight = divDP.offsetHeight;
    if (this.ifrm.currentStyle.direction == "rtl" && !this.bRTLAlign) {
        this.bRTLAlign = true;
        this.ifrm.style.pixelLeft -= this.ifrm.style.pixelWidth - event.srcElement.offsetWidth + 1;
    }
}
function DPStBuild() {
ULSglM:
    ;
    var st = "";

    this.cal = new Calendar(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.frm.dopt, "parent.frm.dp");
    this.cal.fDatePicker = true;
    this.cal.dateDP = this.date;
    if (typeof this.cal.StBuild != "undefined") {
        st += this.cal.StBuild();
    }
    return st;
}
function DPSetHTML(stHTML) {
ULSglM:
    ;
    var cssLink = this.wnd.document.getElementById("onetidThemeCSS");

    if (Boolean(cssLink) && Boolean(this.frm.themeCSSurl))
        cssLink.href = this.frm.themeCSSurl;
    this.wnd.document.body.innerHTML = "<div id='DatePickerDiv'>" + stHTML + "</div>";
    if (typeof this.wnd.document.selection != "undefined" && typeof this.wnd.document.selection.empty != "undefined") {
        this.wnd.document.selection.empty();
    }
    this.AdjustFrameSize();
}
function DPClickDay(yr, mon, day) {
ULSglM:
    ;
    var date = new Date(Date.UTC(yr, mon, day));

    if (typeof this.frm.dopt.StDate != "undefined") {
        this.field.value = this.frm.dopt.StDate(date);
    }
    this.Cancel();
}
function DPMoveMonth(dmon) {
ULSglM:
    ;
    this.cal.SetDate(this.cal.yr, this.cal.mon + dmon, 1);
    this.SetHTML(this.cal.StBuild());
}
function DPCancel() {
ULSglM:
    ;
    if (this.elt != null) {
        this.ifrm.style.display = "none";
        this.elt = null;
    }
}
function DPSetDate(yr, mon, day) {
ULSglM:
    ;
    this.cal.SetDate(yr, mon, day);
    this.SetHTML(this.cal.StBuild());
}
function FrmOnSubmitRetFalse() {
ULSglM:
    ;
    return false;
}
var frmCurrent;

function OWSForm(stName, fUseDHTMLOverride, stPagePath) {
ULSglM:
    ;
    this.stName = stName;
    this.stFieldPrefix = "urn:schemas-microsoft-com:office:office#";
    this.dopt = new DateOptions;
    this.nopt = new NumberOptions;
    this.fUseDHTML = browseris.ie5up && browseris.win32;
    if (!fUseDHTMLOverride)
        this.fUseDHTML = false;
    this.ifldMax = 0;
    this.rgfld = [];
    this.stError = "";
    this.stImagesPath = "";
    this.stPagePath = stPagePath + Strings.STS.L_Language_Text + "/";
    this.dp = new DatePicker(this);
    this.stInputStyle = browseris.ie5up && browseris.win32 || browseris.nav6up ? "CLASS=ms-input" : "";
    this.stLongStyle = browseris.ie5up && browseris.win32 || browseris.nav6up ? "CLASS=ms-long" : "";
    this.fPreviewMode = false;
    if (document.forms[this.stName])
        document.forms[this.stName].onsubmit = FrmOnSubmitRetFalse;
    this.form = null;
    this.themeCSSurl = retrieveCurrentThemeLink();
    this.rgcts = [];
    this.rgctNames = [];
    this.ctNameToId = {};
    this.ctIdToName = {};
    frmCurrent = this;
}
function FrmMapCtName(stName, stId) {
ULSglM:
    ;
    this.ctNameToId[stName] = stId;
    this.ctIdToName[stId] = stName;
}
function FrmAddField(fld, stName, stDisplay, stValue) {
    this.rgfld[this.ifldMax++] = fld;
    fld.frm = this;
    fld.stName = stName;
    fld.stDisplay = stDisplay;
    fld.stValue = stValue;
    fld.fRequired = false;
    fld.stError = "";
    fld.stAttributes = "";
    fld.fCalcCheck = false;
}
function FrmDataBind() {
ULSglM:
    ;
    var ifld;
    var fld;

    if (this.form == null)
        this.form = document.forms[this.stName];
    for (ifld = 0; ifld < this.ifldMax; ifld++) {
        fld = this.rgfld[ifld];
        fld.DataBind();
    }
}
function FrmFindField(stField) {
ULSglM:
    ;
    var fld;

    for (var ifld = 0; ifld < this.ifldMax; ifld++) {
        fld = this.rgfld[ifld];
        if (fld.stName == stField)
            return fld;
    }
    return null;
}
function FrmValidateAndSubmit(fUI) {
ULSglM:
    ;
    if (this.fPreviewMode) {
        window.alert(Strings.STS.L_cantSave_Text);
        return;
    }
    if (this.FValidate(fUI) && typeof this.form.submit != "undefined") {
        this.FPostProcess();
        this.form.submit();
    }
}
function FValidateForm(fUI) {
ULSglM:
    ;
    var ifld;
    var fld;
    var bFormValid = true;

    if (this.form == null)
        this.form = document.forms[this.stName];
    for (ifld = 0; ifld < this.ifldMax; ifld++) {
        fld = this.rgfld[ifld];
        var elem = fld.frm.FieldSubPart(fld, "Checkbox");
        var boolFld = elem != null;

        if (!boolFld)
            elem = ControlFromFld(Object(fld));
        if (elem != null && elem.id != "onetidIOFile" && fld.stName != "ContentType") {
            var tr = GetTr(elem);

            if (typeof fld.GetControl != "undefined")
                elem = fld.GetControl();
            if (tr.style.display == "none") {
                if (elem.tagName == "INPUT" && elem.type != "hidden" || elem.tagName == "SELECT") {
                    var oldValue = GetValueAttribute(elem);

                    if (boolFld)
                        oldValue = elem.checked ? "1" : "0";
                    elem.setAttribute("oldValue", oldValue);
                    var fldPost = fld.frm.FieldPost(fld);

                    if (fldPost != null) {
                        if (typeof fld.belongToCurrentContentType == "undefined" || !fld.belongToCurrentContentType) {
                            if (boolFld)
                                elem.checked = false;
                            else
                                elem.value = "";
                            fldPost.value = "";
                        }
                        fldPost.setAttribute("oldValue", oldValue);
                    }
                    else {
                        if (boolFld)
                            elem.checked = false;
                        else
                            elem.value = "";
                    }
                    continue;
                }
            }
        }
        if (!fld.fSkipValidation && !fld.FValidate()) {
            if (Boolean(fld.errFld))
                fld = fld.errFld;
            if (bFormValid) {
                this.stError = fld.stError;
                bFormValid = false;
            }
            if (fUI) {
                ShowControl(fld, fld.fRequired, String(0), Number(undefined));
                fld.FieldFocus();
                alert(this.stError);
                return false;
            }
        }
    }
    return bFormValid;
}
function FPostProcessForm() {
ULSglM:
    ;
    var ifld;
    var fld;

    this.form = document.forms[this.stName];
    for (ifld = 0; ifld < this.ifldMax; ifld++) {
        fld = this.rgfld[ifld];
        if (typeof fld.PostProcess != "undefined" && fld.PostProcess)
            fld.PostProcess();
    }
    return true;
}
function FrmSetFirstFocus(bAlreadyInitialized) {
ULSglM:
    ;
    var i;

    if (bAlreadyInitialized != true)
        this.InitFormFields();
    if (this.rgcts.length > 1)
        return;
    for (i in this.rgfld) {
        var fld = this.rgfld[i];

        if (!((Object(fld)).hasOwnProperty("fHidden") && typeof fld.fHidden != "undefined" && fld.fHidden) && typeof fld.FieldFocus != "undefined" && fld.FieldFocus && fld.FieldFocus()) {
            break;
        }
    }
}
function FrmInitFields() {
ULSglM:
    ;
    var i;

    window.focus();
    this.form = document.forms[this.stName];
    for (i in this.rgfld) {
        if (this.rgfld[i].Init)
            this.rgfld[i].Init();
    }
    if (typeof _g_tp_rgcts != "undefined")
        this.rgcts = _g_tp_rgcts;
    else
        this.rgcts = [];
    DefaultControls();
}
function FrmBuildFieldUI(fld, st) {
    BFormDocumentWrite(st);
}
function FrmStFieldPost(fld) {
    if (!fld.posted) {
        fld.posted = true;
        return "<input TYPE=HIDDEN NAME=" + StAttrQuote(this.stFieldPrefix + String(fld.stName)) + ">\r";
    }
    else
        return "";
}
function FrmFieldPost(fld) {
    if (this.form == null)
        this.form = document.forms[this.stName];
    return this.form[this.stFieldPrefix + fld.stName];
}
function FilenameFrmFieldPost(fld) {
    if (this.form == null)
        this.form = document.forms[this.stName];
    return this.form[fld.stName];
}
function FrmStFieldSubPart(fld, stPart, stValue) {
    var maxLen = "maxlength=\"255\" ";
    var stDir;

    switch (fld.direction) {
    case 1:
        stDir = " dir=\"ltr\"";
        break;
    case 2:
        stDir = " dir=\"rtl\"";
        break;
    default:
        stDir = "";
        break;
    }
    var strIMEMode = fld.IMEMode ? " style=\"ime-mode:" + fld.IMEMode + "\" " : "";

    return "<input " + FormTabIndex() + " " + maxLen + fld.stAttributes + " title=" + StAttrQuote(fld.stDisplay) + " name=" + StAttrQuote(this.StFieldName(fld, stPart)) + " id='" + "id" + fld.stName + "'" + strIMEMode + " value=" + StAttrQuote(stValue) + stDir + ">";
}
function FrmFieldSubPart(fld, stPart) {
    if (this.form == null)
        this.form = document.forms[this.stName];
    return this.form[this.StFieldName(fld, stPart)];
}
function FrmStFieldName(fld, stPart) {
    return this.StFieldNameFactory(fld.stName, stPart);
}
function FrmStFieldNameFactory(_name, stPart) {
ULSglM:
    ;
    return "OWS:" + _name + ":" + stPart;
}
function FrmGetSelValue(st) {
ULSglM:
    ;
    if (this.form == null)
        this.form = document.forms[this.stName];
    var sel = this.form[st];

    return GetValueAttribute(sel[sel.selectedIndex]);
}
function FormTestURL(stName) {
ULSglM:
    ;
    var fld = this.FindField(stName);
    var subPart = this.FieldSubPart(fld, "URL");
    var stURL = StURLNormalize(TrimWhiteSpaces(GetValueAttribute(subPart)));

    if (!IsSafeHref(stURL))
        return;
    if (stURL.substr(0, 7) == "mailto:")
        open(stURL, "_self");
    else
        open(stURL, "_blank");
}
function FormSetRadioValue(stName, stValue) {
ULSglM:
    ;
    var fld = this.FindField(stName);

    if (fld.stAlias)
        fld = this.FindField(fld.stAlias);
    fld.SetValue(stValue);
    return true;
}
function FormRevertSelect(stName, stValue) {
ULSglM:
    ;
    var fld = this.FindField(stName);

    fld.RevertSelect(stValue);
}
function FormSetFillInButton(stName) {
ULSglM:
    ;
    if (event != null) {
        var charCode;

        if (browseris.ie)
            charCode = event.keyCode;
        else
            charCode = event.which;
        if (charCode == 9 || charCode == 16)
            return;
    }
    var fld = this.FindField(stName);

    fld.SetFillInButton();
}
function FormUnsetFillInButton(stName) {
ULSglM:
    ;
    var fld = this.FindField(stName);

    fld.UnsetFillInButton();
}
function NumberOptions() {
ULSglM:
    ;
    this.chDigSep = ",";
    this.chDecimal = ".";
    this.chMinus = "-";
    this.iNegNumber = 1;
    this.rgcchSep = [3, 0];
}
function NoptSetGrouping(stGrouping) {
    this.rgcchSep = stGrouping.split(";");
}
function NoptNumParse(st) {
    var fNeg = false;

    st = st.toUpperCase();
    var re = new RegExp("\\" + this.chDigSep, "g");

    st = st.replace(re, "");
    if (this.chDecimal != "." && st.search(/\./) != -1)
        return Number.NaN;
    re = new RegExp("\\" + this.chDecimal, "g");
    st = st.replace(re, ".");
    if (st.search(/\(/) != -1 && st.search(/\)/) != -1) {
        fNeg = true;
        st = (st.replace(/\(/, "")).replace(/\)/, "");
    }
    var ix = 0;
    var sawE = false;
    var stClean = "";

    for (ix = 0; ix < st.length; ix++) {
        var oneChar = st.charAt(ix);

        if (oneChar == "E") {
            sawE = true;
        }
        if (!sawE && oneChar == this.chMinus) {
            fNeg = true;
        }
        else {
            stClean += oneChar;
        }
    }
    var num = Number(stClean);

    if (num > 1.79E+308)
        return Number.NaN;
    if (num != 0 && num < 2.23E-308)
        num = 0;
    if (fNeg)
        num = -num;
    return num;
}
function NoptStNumber(numOrig) {
    var fNeg;
    var ichDigit;

    if (numOrig == "")
        return "";
    var num = Number(numOrig);

    fNeg = num < 0;
    if (fNeg)
        num = -num;
    var stNum = num.toString();

    stNum = stNum.toUpperCase();
    if (isNaN(num)) {
        return numOrig;
    }
    stNum = stNum.replace(/\./, this.chDecimal);
    var ichDecimal = stNum.indexOf(this.chDecimal);

    if (this.rgcchSep[0] != 0 && stNum.indexOf("E") == -1) {
        if (ichDecimal != -1)
            ichDigit = ichDecimal - 1;
        else
            ichDigit = stNum.length - 1;
        var icch = 0;

        while (icch < this.rgcchSep.length && ichDigit >= this.rgcchSep[icch]) {
            stNum = StInsertAt(stNum, ichDigit - this.rgcchSep[icch] + 1, this.chDigSep);
            ichDigit -= this.rgcchSep[icch];
            icch++;
            if (icch < this.rgcchSep.length && this.rgcchSep[icch] == 0)
                icch--;
        }
    }
    if (fNeg) {
        switch (this.iNegNumber) {
        case 0:
            stNum = "(" + stNum + ")";
            break;
        case 1:
            stNum = this.chMinus + stNum;
            break;
        case 2:
            stNum = this.chMinus + " " + stNum;
            break;
        case 3:
            stNum = stNum + this.chMinus;
            break;
        case 4:
            stNum = stNum + " " + this.chMinus;
            break;
        }
    }
    return stNum;
}
function DateField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.fDateOnly = false;
    this.stAttributes = frm.stInputStyle + " SIZE=12";
    this.caltype = 1;
    this.direction = 0;
    this.stPopUpOnClick2 = "";
    this.origDate = null;
    this.showDatePicker = true;
}
function DateBuildUI() {
ULSglM:
    ;
    var st = this.stBuildUI();

    this.frm.BuildFieldUI(this, st + "\r");
}
function stDateBuildUI() {
ULSglM:
    ;
    var st = "";
    var date;

    st += this.frm.StFieldPost(this);
    if (!this.fHideDateSpan)
        st += "<span ID=" + StAttrQuote(this.frm.StFieldName(g_fld, "DateSpan")) + ">";
    if (FBlankString(this.stValue)) {
        st += this.frm.StFieldSubPart(this, "Date", "");
        date = this.frm.dopt.Today();
    }
    else {
        date = DateOptions.ParseISODate(this.stValue, this.caltype);
        if (String(date) == "#INVALID") {
            date = this.frm.dopt.Today();
            st += this.frm.StFieldSubPart(this, "Date", String(date));
        }
        else {
            date = this.frm.dopt.RoundDate(date);
            st += this.frm.StFieldSubPart(this, "Date", this.frm.dopt.StDate(date));
        }
    }
    this.origDate = date;
    st += "&nbsp;";
    if (this.caltype == 1 && this.showDatePicker)
        st += this.frm.dp.StButton(this, this.stPopUpOnClick2);
    st += "&nbsp;&nbsp;";
    if (!this.fHideDateSpan)
        st += "</span>";
    if (!this.fDateOnly) {
        st += this.frm.dopt.StTimeControls(this, date);
    }
    st += "<img alt='' style='vertical-align: bottom' width=1pt height=16pt src=" + StAttrQuote(this.frm.stImagesPath + "blank.gif") + ">";
    var stCalenarString = "";
    var stDateString = "";

    switch (this.caltype) {
    case 6:
        stCalenarString = Strings.STS.L_CalendarHijri_Text;
        break;
    case 7:
        stCalenarString = Strings.STS.L_CalendarThai_Text;
        break;
    case 8:
        stCalenarString = Strings.STS.L_CalendarHebrew_Text;
        break;
    case 16:
        stCalenarString = Strings.STS.L_CalendarSaka_Text;
        break;
    case 23:
        stCalenarString = Strings.STS.L_CalendarUmAlQura_Text;
        break;
    default:
        stCalenarString = "";
    }
    stDateString = this.frm.dopt.StDateString(Strings.STS.L_DateOrderYear_Text, Strings.STS.L_DateOrderMonth_Text, Strings.STS.L_DateOrderDay_Text);
    if (!this.fHideDescription) {
        st += "&nbsp;<br><SPAN class=ms-formdescription ID=" + StAttrQuote(this.frm.StFieldName(g_fld, "DateSpan")) + ">" + StBuildParam(Strings.STS.L_DateOrderDesc_Text, stCalenarString, stDateString) + "</SPAN>";
    }
    return st;
}
function DatePopDatePicker(elt) {
ULSglM:
    ;
    this.frm.form = document.forms[this.frm.stName];
    var date;
    var field = this.frm.FieldPost(this);
    var fieldDate = this.frm.FieldSubPart(this, "Date");

    event.cancelBubble = true;
    date = this.frm.dopt.Today();
    if (this.FValidate() && this.date != null)
        date = this.date;
    this.frm.dp.Popup(date, fieldDate, elt);
    return true;
}
function DateDataBind() {
ULSglM:
    ;
    var date;
    var fieldData = this.frm.FieldPost(this);
    var fieldDate = this.frm.FieldSubPart(this, "Date");

    if (FBlankString(GetValueAttribute(fieldData))) {
        fieldDate.value = "";
        date = this.frm.dopt.Today();
    }
    else {
        date = DateOptions.ParseISODate(GetValueAttribute(fieldData));
        date = this.frm.dopt.RoundDate(date);
        fieldDate.value = this.frm.dopt.StDate(date);
    }
    if (!this.fDateOnly) {
        this.frm.dopt.SetTimeControls(this, date);
    }
}
function DateFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldSubPart(this, "Date");

    if (!field.disabled) {
        field.focus();
        field.select();
        return true;
    }
    return false;
}
function DateFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);
    var formfld = this.frm.FieldSubPart(this, "Date");

    if (!formfld.disabled) {
        var stDate = TrimWhiteSpaces(GetValueAttribute(formfld));

        if (stDate == "") {
            if (this.fRequired) {
                this.stError = StBuildParam(Strings.STS.L_DateRequired_Text, this.stDisplay);
                return false;
            }
            else {
                field.value = "";
                this.date = null;
                return true;
            }
        }
        var date = this.frm.dopt.ParseLocaleDate(stDate, this.caltype);

        if (isNaN(Number(date))) {
            this.stError = StBuildParam(Strings.STS.L_InvalidDate_Text, this.stDisplay);
            return false;
        }
        var yrMin = 1900;
        var yrMax = 8900;

        switch (this.caltype) {
        case 6:
            yrMin = 1319;
            yrMax = 3481;
            break;
        case 7:
            yrMin = 2444;
            yrMax = 5043;
            break;
        case 8:
            yrMin = 5662;
            yrMax = 5998;
            break;
        case 16:
            yrMin = 1823;
            yrMax = 3920;
            break;
        case 23:
            yrMin = 1318;
            yrMax = 1450;
        }
        if (!this.fDateOnly) {
            var hr = this.frm.GetSelValue(this.frm.StFieldName(this, "Hours")) - 0;
            var min = this.frm.GetSelValue(this.frm.StFieldName(this, "Minutes"));

            date.setUTCHours(hr, min);
        }
        var yr = date.getUTCFullYear();
        var mon = date.getUTCMonth();
        var day = date.getUTCDate();
        var minCalGregorian = (this.origDate == null || date.getTime() >= this.origDate.getTime()) && this.caltype == 1 && yr == 1899 && mon == 11 && day == 31;

        if ((yr < yrMin || yr > yrMax) && !minCalGregorian) {
            this.stError = StBuildParam(Strings.STS.L_InvalidDate_Text, this.stDisplay);
            return false;
        }
        field.value = DateOptions.StISODate(date);
        this.date = date;
    }
    return true;
}
function URLField(frm, stName, stDisplay, stURL, stDesc) {
    if (FBlankString(stURL)) {
        stURL = "http://";
    }
    frm.AddField(this, stName, stDisplay, stURL);
    this.stDesc = stDesc;
    this.stAttributes = frm.stLongStyle;
}
function URLBuildUI() {
ULSglM:
    ;
    var st = "";

    st += this.frm.StFieldPost(this);
    st += "<span class='ms-formdescription'>" + Strings.STS.L_URLHeading_Text + " (";
    st += "<a " + FormTabIndex() + " href='javascript:frm.TestURL(" + STSScriptEncodeWithQuote(this.stName) + ")' target='_self'>" + Strings.STS.L_URLTest_Text + "</a>)&nbsp;<br></span>\r";
    st += "<span dir='ltr'>";
    st += this.frm.StFieldSubPart(this, "URL", this.stValue);
    st += "</span>";
    st += "&nbsp;<br>\r<span class='ms-formdescription'>" + Strings.STS.L_URLHeadingDesc_Text + "<br></span>\r";
    var stOldDisplay = this.stDisplay;

    this.stDisplay = Strings.STS.L_URLDescriptionTooltip_Text;
    st += this.frm.StFieldSubPart(this, "Desc", this.stDesc);
    this.stDisplay = stOldDisplay;
    this.frm.BuildFieldUI(this, st);
}
function URLDataBind() {
ULSglM:
    ;
    var fieldData = this.frm.FieldPost(this);
    var fieldURL = this.frm.FieldSubPart(this, "URL");
    var fieldDesc = this.frm.FieldSubPart(this, "Desc");
    var st = GetValueAttribute(fieldData);
    var stURL, stDesc;
    var ich = st.indexOf(", ");

    if (ich == -1) {
        ich = st.lastIndexOf(",");
        if (ich == st.length - 1) {
            st += " ";
        }
    }
    if (ich == -1) {
        stURL = st;
        stDesc = st;
    }
    else {
        stURL = st.substr(0, ich);
        stDesc = st.substr(ich + 2);
    }
    stURL = stURL.replace(/\,\,/, ",");
    if (FBlankString(stURL)) {
        stURL = "http://";
    }
    fieldURL.value = stURL;
    fieldDesc.value = stDesc;
}
function URLFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldSubPart(this, "URL");

    if (!field.disabled) {
        field.focus();
        field.select();
        return true;
    }
    return false;
}
function URLValidate() {
ULSglM:
    ;
    var stPost;
    var fieldPost = this.frm.FieldPost(this);
    var urlSubPart = this.frm.FieldSubPart(this, "URL");
    var descSubPart = this.frm.FieldSubPart(this, "Desc");
    var stURL = TrimWhiteSpaces(GetValueAttribute(urlSubPart));
    var stDesc = TrimWhiteSpaces(GetValueAttribute(descSubPart));

    if (stURL == "http://") {
        stURL = "";
    }
    if (this.fRequired && FBlankString(stURL)) {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    stURL = StURLNormalize(stURL);
    if (-1 != stURL.indexOf(";#") || -1 != stDesc.indexOf(";#")) {
        this.stError = Strings.STS.L_InvalidUrlValue_Text;
        return false;
    }
    stPost = stURL.replace(/,/g, ",,") + ", " + stDesc;
    fieldPost.value = stPost;
    return true;
}
function StURLNormalize(stURL) {
ULSglM:
    ;
    if (stURL.substr(0, 2) == "\\\\" || stURL.substr(0, 2) == "\/\/")
        stURL = "file:" + stURL;
    if (stURL.substr(0, 5) == "file:")
        stURL = stURL.replace(/\\/g, "\/");
    return stURL;
}
function NumberField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.fPercent = false;
    this.cchDisplaySize = undefined;
}
function NumberBuildUI() {
ULSglM:
    ;
    var st = this.stBuildUI();

    this.frm.BuildFieldUI(this, st);
}
function StDivideByOneHundred(stNum) {
ULSglM:
    ;
    if (stNum == "")
        return stNum;
    var ix;

    ix = stNum.indexOf("E");
    if (ix == -1)
        ix = stNum.indexOf("e");
    var stExponentPart;

    if (ix == -1)
        stExponentPart = "";
    else {
        stExponentPart = stNum.slice(ix);
        stNum = stNum.substr(0, ix);
    }
    var stSignPart;

    if (stNum.charAt(0) == "-") {
        stSignPart = "-";
        stNum = stNum.slice(1);
    }
    else
        stSignPart = "";
    ix = stNum.indexOf(".");
    if (ix == -1) {
        ix = stNum.length;
        stNum += ".";
    }
    stNum = stNum.substr(0, ix) + stNum.slice(ix + 1);
    ix -= 2;
    if (ix == -1) {
        stNum = "0" + stNum;
        ix = 0;
    }
    stNum = StInsertAt(stNum, ix, ".");
    stNum = stSignPart + stNum + stExponentPart;
    return stNum;
}
function StMultiplyByOneHundred(stNum) {
    if (stNum == "")
        return stNum;
    var ix;

    ix = stNum.indexOf("E");
    if (ix == -1)
        ix = stNum.indexOf("e");
    var stExponentPart;

    if (ix == -1)
        stExponentPart = "";
    else {
        stExponentPart = stNum.slice(ix);
        stNum = stNum.substr(0, ix);
    }
    ix = stNum.indexOf(".");
    if (ix == -1) {
        stNum += "00";
    }
    else {
        stNum = stNum.substr(0, ix) + stNum.slice(ix + 1);
        ix += 2;
        while (ix >= stNum.length + 1)
            stNum += "0";
        stNum = StInsertAt(stNum, ix, ".");
    }
    stNum = stNum + stExponentPart;
    return stNum;
}
function stNumberBuildUI() {
ULSglM:
    ;
    var nmb = Number(this.stValue);

    if (this.fPercent && !isNaN(nmb)) {
        if (Number(this.stValue) != 0) {
            this.stValue = StMultiplyByOneHundred(this.stValue);
        }
        if (this.wMin != 0)
            this.wMin = Number(StMultiplyByOneHundred(this.wMin.toString()));
        if (this.wMax != 0)
            this.wMax = Number(StMultiplyByOneHundred(this.wMax.toString()));
    }
    var cchSize;

    if (this.cchDisplaySize != undefined)
        cchSize = Number(this.cchDisplaySize);
    else
        cchSize = 11;
    this.stAttributes = this.frm.stInputStyle + " SIZE=" + String(cchSize);
    var st = "";

    st += this.frm.StFieldPost(this);
    st += this.frm.StFieldSubPart(this, "Local", this.frm.nopt.StNumber(this.stValue));
    if (this.fPercent && !this.fCalcCheck)
        st += "&nbsp;%";
    return st;
}
function NumberDataBind() {
ULSglM:
    ;
    var fieldData = this.frm.FieldPost(this);
    var fieldControl = this.frm.FieldSubPart(this, "Local");

    if (this.fPercent)
        fieldData.value = StMultiplyByOneHundred((GetValueAttribute(fieldData)).toString());
    fieldControl.value = this.frm.nopt.StNumber(GetValueAttribute(fieldData));
}
function NumberFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldSubPart(this, "Local");

    if (!field.disabled) {
        field.focus();
        field.select();
        return true;
    }
    return false;
}
function NumberFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);
    var localSubPart = this.frm.FieldSubPart(this, "Local");
    var stNum = GetValueAttribute(localSubPart);

    if (FBlankString(stNum)) {
        if (this.fRequired) {
            this.stError = StBuildParam(Strings.STS.L_ValueRequired_Text, this.stDisplay);
            return false;
        }
        field.value = "";
        return true;
    }
    if (this.fCalcCheck) {
        field.value = stNum;
        return true;
    }
    var wValue = this.frm.nopt.NumParse(stNum);

    if (isNaN(wValue)) {
        this.stError = StBuildParam(Strings.STS.L_InvalidNumber_Text, this.stDisplay);
        return false;
    }
    if (FNumber(this.wMin) && FNumber(this.wMax) && (wValue < this.wMin || wValue > this.wMax)) {
        this.stError = StBuildParam(Strings.STS.L_InvalidRange_Text, this.stDisplay, this.frm.nopt.StNumber(String(this.wMin)), this.frm.nopt.StNumber(String(this.wMax)));
        return false;
    }
    if (FNumber(this.wMin) && wValue < this.wMin) {
        this.stError = StBuildParam(Strings.STS.L_InvalidMin_Text, this.stDisplay, this.frm.nopt.StNumber(String(this.wMin)));
        return false;
    }
    if (FNumber(this.wMax) && wValue > this.wMax) {
        this.stError = StBuildParam(Strings.STS.L_InvalidMax_Text, this.stDisplay, this.frm.nopt.StNumber(String(this.wMax)));
        return false;
    }
    if (this.fInteger && Boolean(wValue) && Math.floor(wValue) != wValue) {
        this.stError = StBuildParam(Strings.STS.L_InvalidInteger_Text, this.stDisplay);
        return false;
    }
    if (this.fPercent)
        field.value = StDivideByOneHundred(wValue.toString());
    else
        field.value = String(wValue);
    return true;
}
function FNumber(w) {
    return String(w) != "" && w != null && !isNaN(w);
}
function BooleanField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
}
function BooleanBuildUI() {
ULSglM:
    ;
    var st = "";

    st += this.frm.StFieldPost(this);
    st += "<input " + FormTabIndex() + " type='checkbox' " + this.stAttributes + " title=" + StAttrQuote(this.stDisplay) + " name=" + StAttrQuote(this.frm.StFieldName(g_fld, "Checkbox"));
    if (Number(this.stValue) != 0)
        st += " CHECKED";
    st += ">\r";
    this.frm.BuildFieldUI(this, st);
}
function BooleanDataBind() {
ULSglM:
    ;
    var fieldData = this.frm.FieldPost(this);
    var fieldControl = this.frm.FieldSubPart(this, "Checkbox");

    fieldControl.checked = Number(GetValueAttribute(fieldData)) != 0;
}
function BooleanFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldSubPart(this, "Checkbox");

    if (!field.disabled) {
        field.focus();
        return true;
    }
    return false;
}
function BooleanFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);
    var fieldCheckbox = this.frm.FieldSubPart(this, "Checkbox");

    if (fieldCheckbox.checked)
        field.value = "1";
    else
        field.value = "0";
    return true;
}
function BooleanFieldSetValue(val) {
ULSglM:
    ;
    var fieldData = this.frm.FieldPost(this);
    var fieldControl = this.frm.FieldSubPart(this, "Checkbox");

    fieldData.value = val;
    fieldControl.checked = Number(GetValueAttribute(fieldData)) != 0;
}
function Field(frm, stName, stDisplay) {
    frm.AddField(this, stName, stDisplay, "");
}
function FieldFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);

    if (!field.disabled) {
        field.focus();
        return true;
    }
    return false;
}
function FieldDataBind() {
ULSglM:
    ;
}
function FieldFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);

    if (this.fRequired && FBlankString(GetValueAttribute(field))) {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    if (this.frm.wBaseType == 1 && Boolean(GetValueAttribute(field)) && (GetValueAttribute(field)).length > 255) {
        this.stError = StBuildParam(Strings.STS.L_TextFieldMax_Text, this.stDisplay, 255);
        return false;
    }
    return true;
}
function FieldBuildUI() {
ULSglM:
    ;
}
function NoteField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.stDirection = "";
    this.stNumLines = "";
}
function NoteFieldFieldFocus() {
ULSglM:
    ;
    return NoteFieldFieldFocusCore(this);
}
function NoteFieldFieldFocusCore(fld) {
    var field = fld.frm.FieldPost(fld);

    if (!field.disabled) {
        field.focus();
        return true;
    }
    return false;
}
function NoteFieldBuildUI() {
ULSglM:
    ;
    NoteFieldBuildUICore(this);
}
function NoteFieldBuildUICore(fld) {
    var st = "";

    st += "<textarea " + FormTabIndex() + " cols=\"30\"" + " rows=" + StAttrQuote(fld.stNumLines) + " title=" + StAttrQuote(fld.stDisplay) + " name=" + StAttrQuote(fld.frm.stFieldPrefix + fld.stName) + " " + fld.frm.stLongStyle;
    st += fld.IMEMode ? " style=\"ime-mode:" + fld.IMEMode + "\" " : "";
    st += ">";
    st += STSHtmlEncode(fld.stValue);
    st += "</textarea>";
    fld.frm.BuildFieldUI(fld, st);
}
function NoteFieldFValidate() {
ULSglM:
    ;
    return NoteFieldFValidateCore(this);
}
function NoteFieldFValidateCore(fld) {
    var field = fld.frm.FieldPost(fld);

    if (fld.fRequired && FBlankString(GetValueAttribute(field))) {
        fld.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, fld.stDisplay);
        return false;
    }
    if (fld.frm.wBaseType == 1 && Boolean(GetValueAttribute(field)) && (GetValueAttribute(field)).length > 255) {
        fld.stError = StBuildParam(Strings.STS.L_TextFieldMax_Text, fld.stDisplay, 255);
        return false;
    }
    return true;
}
function RichTextField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.stDirection = "";
    this.stNumLines = "";
    this.fAllowHyperlink = false;
}
function RichTextFieldFieldFocus() {
ULSglM:
    ;
    if (browseris.ie5up) {
        RTE_GiveEditorFirstFocus(this.frm.stFieldPrefix + this.stName);
        return true;
    }
    else {
        return NoteFieldFieldFocusCore(this);
    }
}
function RichTextFieldBuildUI() {
ULSglM:
    ;
    var st = "";

    NoteFieldBuildUICore(this);
    if (browseris.ie5up && browseris.win32) {
        RTE_ConvertTextAreaToRichEdit(this.frm.stFieldPrefix + this.stName, true, g_fld.fAllowHyperlink, this.stDirection, Strings.STS.L_Language_Text, null, null, null, null, null, null, null, null, null, null, null, undefined, Number(undefined), Number(undefined), undefined, undefined, undefined, undefined);
    }
    else {
        st += "&nbsp;<br><SPAN class=ms-formdescription>" + Strings.STS.L_strRichTextSupport_Text + "</SPAN>&nbsp;<br>";
        BFormDocumentWrite(st);
    }
}
function RichTextFieldFValidate() {
ULSglM:
    ;
    var fRet = NoteFieldFValidateCore(this);

    if (fRet && !browseris.ie5up) {
        var field = this.frm.FieldPost(this);
        var stVal = GetValueAttribute(field);
        var len = stVal.length;

        if (stVal != "") {
            var finalVal = stVal;
            var stBegin5 = stVal.substr(0, 5);
            var stEnd6 = stVal.substr(len - 6, 6);

            stBegin5.toLowerCase();
            stEnd6.toLowerCase();
            if (stBegin5 != "<div>" || stEnd6 != "</div>") {
                var stBegin4 = stVal.substr(0, 4);
                var stEnd5 = stVal.substr(len - 5, 5);

                stBegin4.toLowerCase();
                stEnd5.toLowerCase();
                if (stBegin4 != "<ol>" && stBegin4 != "<ul>" && stEnd5 != "</ol>" && stEnd5 != "</ul>") {
                    var stBegin12 = stVal.substr(0, 12);
                    var stEnd13 = stVal.substr(len - 13, 13);

                    stBegin12.toLowerCase();
                    stEnd13.toLowerCase();
                    if (stBegin12 != "<blockquote>" && stEnd13 != "</blockquote>") {
                        var stBegin3 = stVal.substr(0, 3);
                        var stEnd4 = stVal.substr(len - 4, 4);

                        stBegin3.toLowerCase();
                        stEnd4.toLowerCase();
                        if (stBegin3 != "<p>" || stEnd4 != "</p>") {
                            finalVal = "<div>" + stVal + "</div>";
                        }
                    }
                }
            }
            var CRLF = /\n([^<])/g;

            finalVal = finalVal.replace(CRLF, "\n<br>$1");
            field.value = finalVal;
        }
    }
    return fRet;
}
function TextField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.cchMaxLength = "";
    this.cchDisplaySize = undefined;
}
function TextFieldBuildUI() {
ULSglM:
    ;
    var st = this.stBuildUI();

    this.frm.BuildFieldUI(this, st);
}
function stTextFieldBuildUI() {
ULSglM:
    ;
    var st = "";
    var cchSize;

    if (this.cchMaxLength == "")
        this.cchMaxLength = "255";
    else
        this.cchMaxLength = String(Number(this.cchMaxLength));
    if (this.cchDisplaySize != undefined)
        cchSize = Number(this.cchDisplaySize);
    else if (Number(this.cchMaxLength) < 32)
        cchSize = Number(this.cchMaxLength);
    st += "<input " + FormTabIndex() + " ";
    if (Boolean(cchSize))
        st += this.frm.stInputStyle + " size=" + String(cchSize);
    else
        st += this.frm.stLongStyle;
    var strIMEMode = this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";

    st += " maxlength=" + this.cchMaxLength + " " + this.stAttributes + " title=" + StAttrQuote(this.stDisplay) + " name=" + StAttrQuote(this.frm.stFieldPrefix + this.stName) + strIMEMode + " value=" + StAttrQuote(this.stValue) + ">\r";
    return st;
}
function TextFieldFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);

    if (!field.disabled) {
        field.focus();
        field.select();
        return true;
    }
    return false;
}
function TextFieldFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);

    field.value = TrimWhiteSpaces(GetValueAttribute(field));
    if ((GetValueAttribute(field)).length > Number(this.cchMaxLength)) {
        this.stError = StBuildParam(Strings.STS.L_TextFieldMax_Text, this.stDisplay, this.cchMaxLength);
        return false;
    }
    if (this.fRequired && GetValueAttribute(field) == "") {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    return true;
}
function FilenameField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.cchMaxLength = "";
    this.cchDisplaySize = undefined;
    this.isFileName = true;
}
function FilenameFieldBuildUI() {
ULSglM:
    ;
    var st = "";
    var cchSize;

    if (this.cchMaxLength == "")
        this.cchMaxLength = "255";
    else
        this.cchMaxLength = String(Number(this.cchMaxLength));
    if (this.cchDisplaySize != undefined)
        cchSize = Number(this.cchDisplaySize);
    else if (Number(this.cchMaxLength) < 32)
        cchSize = Number(this.cchMaxLength);
    st += "<input " + FormTabIndex() + " ";
    if (Boolean(cchSize))
        st += this.frm.stInputStyle + " size=" + String(cchSize);
    else
        st += this.frm.stLongStyle;
    if (this.stValue.length > Number(this.cchMaxLength)) {
        this.stValue = this.stValue.substr(0, Number(this.cchMaxLength));
    }
    var strIMEMode = this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";

    st += " maxlength=" + this.cchMaxLength + " " + this.stAttributes + " name=" + StAttrQuote(this.stName) + " title=" + StAttrQuote(this.stDisplay) + " " + strIMEMode + " value=" + StAttrQuote(this.stValue) + ">\r";
    this.frm.BuildFieldUI(this, st);
}
function FilenameFieldFieldFocus() {
ULSglM:
    ;
    var field = this.frm.FilenameFieldPost(this);

    if (!field.disabled) {
        field.focus();
        field.select();
        return true;
    }
    return false;
}
function FilenameFieldFValidate() {
ULSglM:
    ;
    var field = this.frm.FilenameFieldPost(this);

    field.value = TrimWhiteSpaces(GetValueAttribute(field));
    if ((GetValueAttribute(field)).length > Number(this.cchMaxLength)) {
        this.stError = StBuildParam(Strings.STS.L_FilenameFieldMax_Text, this.stDisplay, this.cchMaxLength);
        return false;
    }
    if (this.fRequired && GetValueAttribute(field) == "") {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    return true;
}
function GridChoiceFieldFocus() {
ULSglM:
    ;
    return true;
}
function GridChoiceField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.rgGridChoices = [];
}
function GridChoiceBuildUI() {
ULSglM:
    ;
    var str = "";
    var i, j;
    var strDisplay = this.frm.rgfld[this.frm.ifldMax - 1].stDisplay;
    var strName = this.frm.rgfld[this.frm.ifldMax - 1].stName;
    var strValue = this.frm.rgfld[this.frm.ifldMax - 1].stValue;
    var iGridHeight = this.rgGridChoices.length;

    this.iGridHeight = iGridHeight;
    this.IsNew = strValue == "";
    var cnt = 99;
    var lastTxtRngCell = STSHtmlEncode(this.GridNATxt) == "" ? "" : "<td align=\"right\" class=\"ms-gridT1\">&nbsp;</td>";

    str += this.frm.StFieldPost(this);
    str += "<table cellpadding=\"0\" cellspacing=\"1\" border=\"0\" height=\"95%\">\r";
    str += "<tr><td>&nbsp;</td><td class=\"ms-verticaldots\">&nbsp;</td>\r";
    str += "<td class=\"ms-gridT1\">" + STSHtmlEncode(this.GridTxtRng1) + "&nbsp;</td><td align=\"center\" class=\"ms-gridT1\" colspan=\"";
    str += String(this.GridEndNum - 2) + "\">" + STSHtmlEncode(this.GridTxtRng2) + "</td><td align=\"right\" class=\"ms-gridT1\">&nbsp;" + STSHtmlEncode(this.GridTxtRng3) + "</td>\r";
    str += lastTxtRngCell + "</tr>\r";
    str += "<tr><td>&nbsp;</td><td class=\"ms-verticaldots\">&nbsp;</td>\r";
    for (i = this.GridStartNum; i <= this.GridEndNum && cnt > 0; i++) {
        str += "<td align=\"center\" class=\"ms-gridT1\">";
        str += String(i);
        str += "</td>\r";
        cnt--;
    }
    if (STSHtmlEncode(this.GridNATxt) != "") {
        str += "<td align=\"center\" class=\"ms-gridT1\">";
        str += STSHtmlEncode(this.GridNATxt);
        str += "</td>\r";
        str += "</tr>";
    }
    str += "<tr><td class=\"ms-sectionline\" colspan=\"100%\" height=\"1\"><img alt='' src=";
    str += StAttrQuote(this.frm.stImagesPath + "blank.gif");
    str += "</td></tr>";
    for (var key in this.rgGridChoices) {
        var choice = this.rgGridChoices[key];
        var num = -999;

        if (!this.IsNew) {
            var len = choice.stDisplay.length;
            var p = strValue.indexOf(choice.stDisplay + ";#", 0);

            if (p != -1) {
                var q = strValue.indexOf("#", p + len + 2);

                if (q > p + len + 2)
                    num = Number(strValue.substr(p + len + 2, q - (p + len + 2)));
            }
        }
        str += "<tr><td align=\"center\" class=\"ms-gridText\">";
        str += STSHtmlEncode(choice.stDisplay);
        str += "</td><td class=\"ms-verticaldots\">&nbsp;</td>";
        cnt = 99;
        var endNum = STSHtmlEncode(this.GridNATxt) == "" ? this.GridEndNum - 1 : this.GridEndNum;

        for (j = this.GridStartNum; j <= endNum && cnt > 0; j++) {
            str += "<td align=\"center\"><input " + FormTabIndex() + " ";
            if (this.nochange == "yes")
                str += "onclick=\"window.location.reload();\"";
            str += " type=\"RADIO\" name=";
            str += StAttrQuote(this.frm.StFieldName(g_fld, "RadioButtons:") + key);
            if (j - 0 == num - 0)
                str += " checked ";
            str += "></td>\r";
            cnt--;
        }
        str += "<td align=\"center\"><input " + FormTabIndex() + " ";
        if (this.nochange == "yes")
            str += "onclick=\"window.location.reload();\"";
        str += " type=\"RADIO\" name=";
        str += StAttrQuote(this.frm.StFieldName(g_fld, "RadioButtons:") + key);
        if (j - 0 == num - 0)
            str += " checked ";
        str += "></td>\r";
        str += "</tr>\r";
    }
    str += "</table>";
    this.frm.BuildFieldUI(this, str);
}
function GridChoiceFValidate() {
ULSglM:
    ;
    var field = this.frm.FieldPost(this);

    field.value = "";
    var str = "";
    var i;

    for (i in this.rgGridChoices) {
        var fieldControl = this.frm.FieldSubPart(this, "RadioButtons:" + i);
        var endNum = this.GridNATxt == "" ? this.GridEndNum : this.GridEndNum - 0 + 1;

        for (var j = this.GridStartNum; j <= endNum; j++) {
            if (fieldControl[j - this.GridStartNum].checked) {
                str += this.rgGridChoices[i].stValue + ";#";
                str += j >= 0 ? "+" + String(j) : String(j);
                str += "#";
                break;
            }
        }
    }
    if (this.fRequired && str == "") {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    field.value = str;
    return true;
}
function GridChoiceAddChoice(stDisplay, stValue) {
ULSglM:
    ;
    if (stValue == null || stValue == "")
        stValue = stDisplay;
    var choice = new Object;

    choice.stDisplay = stDisplay;
    choice.stValue = stValue;
    this.rgGridChoices[this.rgGridChoices.length] = choice;
}
function ChoiceField(frm, stName, stDisplay, stValue) {
    frm.AddField(this, stName, stDisplay, stValue);
    this.rgChoices = [];
    this.format = "Dropdown";
    this.fFillInChoice = false;
    this.radioClass = "class=ms-RadioText ";
    if (stName == "ContentType") {
        var fldCtId = new Object;

        fldCtId.frm = frm;
        fldCtId.stName = "ContentTypeId";
        this.fldCtId = fldCtId;
    }
    this.tableClass = "";
}
function ChoiceBuildUI() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return;
    if (this.format != "Dropdown" && this.format != "RadioButtons" && this.format != "Checkboxes")
        this.format = "Dropdown";
    var st = this.stBuildUI();

    if (this.stName == "ContentType") {
        var delay = document.getElementById("js_fld_delayed");

        delay.outerHTML = st;
        for (var i in this.rgChoices) {
            var choice = this.rgChoices[i];

            this.frm.rgctNames.push(choice.stValue);
        }
    }
    else {
        this.frm.BuildFieldUI(this, st);
    }
}
function stChoiceBuildUI() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return;
    var st = "";
    var i;
    var choice;
    var stClickAttr, stTitle, stKeyDownAttr;
    var stControlName = "NAME=" + StAttrQuote(this.frm.StFieldName(this, this.format));

    if (this.fFillInChoice) {
        var fillin_value = "";
        var stFillInButtonName = this.frm.StFieldName(this, "FillInButton");

        if (this.format == "RadioButtons" || this.format == "Checkboxes")
            this.AddChoice(Strings.STS.L_SpecifyYourOwn_Text);
    }
    if (FBlankString(this.stValue) && this.format == "Dropdown" && this.stName != "ContentType") {
        this.AddChoice("");
    }
    if (typeof this.fldCtId != 'undefined') {
        st += this.frm.StFieldPost(this.fldCtId);
    }
    st += this.frm.StFieldPost(this);
    if (this.format == "RadioButtons") {
        if (this.radioClass.indexOf("valign") == -1 && this.radioClass.indexOf("VALIGN") == -1) {
            this.radioClass += " valign=\"middle\"";
        }
        st += "<table cellpadding=\"0\" cellspacing=\"1\" " + this.tableClass + " >\r";
        var fValueMatched = false;

        for (i in this.rgChoices) {
            choice = this.rgChoices[i];
            var stRawClickAttr = "frm.SetRadioValue(" + STSScriptEncodeWithQuote(this.stName) + ", " + STSScriptEncodeWithQuote(choice.stValue) + ");";

            stTitle = "";
            if (this.stDisplay.length > 0 || choice.stDisplay.length > 0)
                stTitle = this.stDisplay + ": " + choice.stDisplay;
            stClickAttr = "onclick=" + StAttrQuote(stRawClickAttr);
            if (this.fIncludeMouseDown) {
                stClickAttr += " onmousedown=" + StAttrQuote(stRawClickAttr);
                stClickAttr += " onkeypress=" + StAttrQuote(stRawClickAttr);
                stClickAttr += " onmousewheel=" + StAttrQuote(stRawClickAttr);
            }
            st += "<tr " + stClickAttr + ">\r<td valign=\"top\">" + "<input " + FormTabIndex() + " type=\"RADIO\" " + this.stAttributes + " " + stControlName + " title=" + StAttrQuote(stTitle) + " value=" + StAttrQuote(choice.stValue);
            if (this.fFillInChoice && !fValueMatched && Number(i) == this.rgChoices.length - 1 && this.stValue != "") {
                st += " CHECKED";
                fillin_value = this.stValue;
            }
            else if (choice.stValue == this.stValue) {
                st += " CHECKED";
                fValueMatched = true;
            }
            st += "></td>\r<td " + this.radioClass + ">";
            if (this.nobr)
                st += "<nobr>";
            st += STSHtmlEncode(choice.stDisplay);
            if (choice.hasLayoutProc)
                st += eval(choice.stLayoutProc + "(this, stRawClickAttr)");
            if (this.nobr)
                st += "</nobr>";
            st += "</td>\r</tr>\r";
        }
        if (this.fFillInChoice) {
            fillin_value = RemoveReplaceDelimiter(fillin_value);
            stClickAttr = "frm.SetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stKeyDownAttr = "frm.SetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stClickAttr = "onclick=" + StAttrQuote(stClickAttr);
            stKeyDownAttr = "onkeydown=" + StAttrQuote(stKeyDownAttr);
            stControlName = "NAME=" + StAttrQuote(this.frm.StFieldName(g_fld, "FillIn"));
            if (fillin_value.length > 255) {
                fillin_value = fillin_value.substr(0, 255);
            }
            st += "<tr>\r<td valign=\"top\"></td>\r<td class=\"ms-RadioText\" valign=\"top\">" + "<input " + FormTabIndex() + " maxlength=\"255\" " + stClickAttr + " " + stKeyDownAttr + " " + this.frm.stLongStyle + " " + this.stAttributes + " " + stControlName + " title=" + StAttrQuote(this.stDisplay + ": " + Strings.STS.L_FillInValue_Text);
            st += this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";
            st += " value=" + STSHtmlEncode(fillin_value) + "></td>\r</tr>\r";
        }
        st += "</table>\r";
    }
    else if (this.format == "Checkboxes") {
        if (this.radioClass.indexOf("valign") == -1 && this.radioClass.indexOf("VALIGN") == -1) {
            this.radioClass += " valign=\"middle\" ";
        }
        st += "<table cellpadding=\"0\" cellspacing=\"1\" " + this.tableClass + " >\r";
        var stValue = this.stValue;
        var fMultiValue = false;

        if (stValue.charAt(0) == ';' && stValue.charAt(1) == '#') {
            fMultiValue = true;
        }
        var count = 0;

        if (this.horizontal)
            st += "<tr>\r";
        for (i in this.rgChoices) {
            choice = this.rgChoices[i];
            stClickAttr = "frm.RevertSelect(" + STSScriptEncodeWithQuote(this.stName) + ", " + STSScriptEncodeWithQuote(choice.stValue) + ");";
            stTitle = this.stDisplay + ": " + STSHtmlEncode(choice.stDisplay);
            stClickAttr = "onclick=" + StAttrQuote(stClickAttr);
            if (!this.horizontal)
                st += "<tr>\r";
            st += "<td valign=\"top\">";
            st += "<input " + FormTabIndex() + " type=\"CHECKBOX\" " + this.stAttributes + " " + stControlName + " title=" + StAttrQuote(stTitle) + " value=" + StAttrQuote(choice.stValue);
            if (fMultiValue) {
                var searchPattern = ";#" + choice.stValue + ";#";
                var startLocal = stValue.indexOf(searchPattern);

                if (startLocal != -1) {
                    st += " CHECKED";
                    var end = startLocal + searchPattern.length;

                    stValue = stValue.substr(0, startLocal + 2) + stValue.substr(end);
                    if (stValue == ";#;#")
                        stValue = "";
                }
            }
            else {
                if (stValue == choice.stValue) {
                    st += " CHECKED";
                    stValue = "";
                }
            }
            st += "></td>\r<td " + this.radioClass;
            st += stClickAttr + ">" + STSHtmlEncode(choice.stDisplay);
            st += "</td>\r";
            if (!this.horizontal)
                st += "</tr>\r";
            else {
                if (Boolean(this.horizontalBreakEvery) && 0 == ++count % this.horizontalBreakEvery) {
                    st += "</tr>\r<tr>\r";
                }
            }
        }
        if (this.horizontal)
            st += "</tr>\r";
        fillin_value = RemoveReplaceDelimiter(stValue);
        if (this.fFillInChoice) {
            stClickAttr = "frm.SetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stKeyDownAttr = "frm.SetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stClickAttr = "onclick=" + StAttrQuote(stClickAttr);
            stKeyDownAttr = "onkeydown=" + StAttrQuote(stKeyDownAttr);
            stControlName = "name=" + StAttrQuote(this.frm.StFieldName(this, "FillIn"));
            if (Number(fillin_value) > 255) {
                fillin_value = fillin_value.substr(0, 255);
            }
            st += "<tr>\r<td valign=\"top\"></td>\r<td class=\"ms-RadioText\" valign=\"top\"><input " + FormTabIndex() + " maxlength=\"255\" " + stClickAttr + " " + stKeyDownAttr + " " + this.frm.stLongStyle + " " + this.stAttributes + " " + stControlName + " title=" + StAttrQuote(this.stDisplay + ": " + Strings.STS.L_FillInValue_Text) + " value=" + STSHtmlEncode(fillin_value) + "></td>\r</tr>\r";
        }
        st += "</table>\r";
    }
    else {
        if (!this.horizontal)
            st += "<table cellpadding=\"0\" cellspacing=\"1\" " + this.tableClass + " >\r";
        var fDropdownSelected = false;

        stClickAttr = "";
        if (this.fFillInChoice) {
            stClickAttr = "frm.UnsetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stClickAttr = "onclick=" + StAttrQuote(stClickAttr);
        }
        else if (this.stName == "ContentType") {
            stClickAttr = "onchange=\"SwitchControls(this,false,true)\"";
        }
        var stControls = "";

        if (!this.horizontal)
            stControls += "<td";
        else
            stControls += "<span";
        stControls += " class=\"ms-RadioText\" valign=\"top\"><select title=";
        if (this.fFillInChoice)
            stControls += StAttrQuote(this.stDisplay + ": " + Strings.STS.L_FillChoice_TXT);
        else
            stControls += StAttrQuote(this.stDisplay);
        stControls += this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";
        stControls += " " + FormTabIndex() + " " + this.stAttributes + stClickAttr + stControlName + ">\r";
        for (i in this.rgChoices) {
            choice = this.rgChoices[i];
            stControls += "<option " + " value=" + StAttrQuote(choice.stValue);
            if (choice.stValue == this.stValue) {
                stControls += " SELECTED";
                fDropdownSelected = true;
            }
            stControls += ">" + STSHtmlEncode(choice.stDisplay) + "</option>\r";
        }
        stControls += "</select>";
        if (!this.horizontal)
            stControls += "</td>\r";
        else
            stControls += "</span>\r";
        if (this.fFillInChoice) {
            var stDropdownButton = "<tr>\r<td valign=\"top\">" + "<input " + FormTabIndex() + " title=" + StAttrQuote(this.stDisplay + ": " + Strings.STS.L_Choose_Text) + " type=\"RADIO\" NAME=" + StAttrQuote(stFillInButtonName);

            if (fDropdownSelected || this.stValue == "") {
                stDropdownButton += " CHECKED";
            }
            stDropdownButton += "></td>\r" + stControls + "</tr>\r";
            stControls = stDropdownButton;
            stClickAttr = "frm.SetFillInButton(" + STSScriptEncodeWithQuote(this.stName) + ");";
            stClickAttr = "onclick=" + StAttrQuote(stClickAttr);
            stControls += "<tr " + stClickAttr + ">\r<td valign=\"top\"><input title=";
            stControls += StAttrQuote(this.stDisplay + ": " + Strings.STS.L_SpecifyYourOwn_Text);
            stControls += this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";
            stControls += " " + FormTabIndex() + " type=\"RADIO\" name=" + StAttrQuote(stFillInButtonName);
            if (!fDropdownSelected && this.stValue != "") {
                stControls += " CHECKED";
                fillin_value = this.stValue;
            }
            stControls += "></td>\r<td class=\"ms-descriptiontext\" valign=\"middle\">" + Strings.STS.L_SpecifyYourOwn_Text + "</td>\r</tr>\r";
            fillin_value = RemoveReplaceDelimiter(fillin_value);
            stControlName = "name=" + StAttrQuote(this.frm.StFieldName(g_fld, "FillIn"));
            stControls += "<tr>\r<td valign=\"top\"></td>\r<td class=\"ms-RadioText\" valign=\"top\"><input ";
            stControls += this.IMEMode ? " style=\"ime-mode:" + this.IMEMode + "\" " : "";
            stControls += " title=";
            stControls += StAttrQuote(this.stDisplay + ": " + Strings.STS.L_FillInValue_Text);
            if (Number(fillin_value) > 255) {
                fillin_value = fillin_value.substr(0, 255);
            }
            stControls += " " + FormTabIndex() + " maxlength=\"255\" " + stClickAttr + " " + this.frm.stLongStyle + " " + this.stAttributes + " " + stControlName + " value=" + STSHtmlEncode(fillin_value) + "></td>\r</tr>\r";
            st += stControls;
        }
        else {
            if (!this.horizontal)
                st += "<tr>" + stControls + "</tr>\r";
            else
                st += stControls + "\r";
        }
        if (!this.horizontal)
            st += "</table>\r";
    }
    return st;
}
function ChoiceInit() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return;
    this.SetValue(this.stValue);
}
function ChoiceAddChoice(stDisplay, stValue) {
    if (stValue == null || stValue == "")
        stValue = stDisplay;
    var choice = new Object;

    choice.stDisplay = stDisplay;
    choice.stValue = stValue;
    choice.hasLayoutProc = false;
    this.rgChoices[this.rgChoices.length] = choice;
    return choice;
}
function ChoiceAddChoiceWithLayoutProc(stDisplay, stValue, stProc) {
ULSglM:
    ;
    var choice = this.AddChoice(stDisplay, stValue);

    choice.stLayoutProc = stProc;
    choice.hasLayoutProc = true;
}
function ChoiceDataBind() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return;
    var field = this.frm.FieldPost(this);
    var fieldControl = this.GetControl();
    var fieldValue = GetValueAttribute(field);

    if (typeof this.fldCtId != 'undefined') {
        var fieldCtId = this.frm.FieldPost(this.fldCtId);
        var tempFieldValue = this.frm.ctIdToName[GetValueAttribute(fieldCtId)];

        if (typeof tempFieldValue != 'undefined') {
            fieldValue = tempFieldValue;
        }
    }
    this.SetValue(fieldValue, true);
}
function ChoiceSetValue(stValue, bInitializing) {
    if (this.rgChoices.length == 0)
        return;
    var i;
    var choice;
    var fieldControl = this.frm.FieldSubPart(this, this.format);

    if (this.format == "Checkboxes") {
        if (this.rgChoices.length != 1) {
            for (i in this.rgChoices)
                fieldControl[i].checked = false;
        }
        else
            fieldControl.checked = false;
        if (this.fFillInChoice) {
            this.SetFillInValue("");
            this.UnsetFillInButton();
        }
        if (FBlankString(stValue))
            return;
    }
    if (this.format == "Checkboxes" && stValue.charAt(0) == ';' && stValue.charAt(1) == '#') {
        for (i in this.rgChoices) {
            choice = this.rgChoices[i];
            var searchPattern = ";#" + choice.stValue + ";#";
            var startLocal = stValue.indexOf(searchPattern);

            if (startLocal != -1) {
                fieldControl = this.GetControl(i);
                fieldControl.checked = true;
                var end = startLocal + searchPattern.length;

                stValue = stValue.substr(0, startLocal + 2) + stValue.substr(end);
                if (stValue == ";#;#")
                    break;
            }
        }
        if (this.fFillInChoice) {
            if (stValue.length >= 4 && stValue.indexOf(";#;#") == stValue.length - 4)
                stValue = stValue.substr(0, stValue.length - 2);
            stValue = RemoveReplaceDelimiter(stValue);
            if (stValue != "")
                this.SetFillInValue(stValue);
            else {
                this.UnsetFillInButton();
                if (bInitializing)
                    (this.GetFillInControl()).value = "";
            }
        }
        return;
    }
    var fFillInValue = true;

    for (i in this.rgChoices) {
        choice = this.rgChoices[i];
        if (choice.stValue == stValue) {
            if (this.format == "Dropdown") {
                if (this.stName != "ContentType") {
                    fieldControl.selectedIndex = Number(i);
                }
                else {
                    var iopt;

                    for (iopt = 0; iopt < fieldControl.options.length; iopt++) {
                        if (GetValueAttribute(fieldControl.options[iopt]) == stValue) {
                            fieldControl.selectedIndex = iopt;
                            break;
                        }
                    }
                }
            }
            else {
                fieldControl = this.GetControl(i);
                fieldControl.checked = true;
            }
            fFillInValue = false;
            break;
        }
    }
    if (this.fFillInChoice) {
        if (fFillInValue || stValue == Strings.STS.L_SpecifyYourOwn_Text) {
            if (stValue != Strings.STS.L_SpecifyYourOwn_Text)
                this.SetFillInValue(stValue);
        }
        else {
            this.UnsetFillInButton();
            if (bInitializing)
                (this.GetFillInControl()).value = "";
        }
    }
    return;
}
function ChoiceGetControl(i) {
    var fieldControl = this.frm.FieldSubPart(this, this.format);

    if ((this.format == "RadioButtons" || this.format == "Checkboxes") && this.rgChoices.length != 1) {
        if (i != null)
            return fieldControl[i];
        for (i in this.rgChoices) {
            if (fieldControl[i].checked)
                return fieldControl[i];
        }
        return fieldControl[0];
    }
    else
        return fieldControl;
}
function ChoiceGetFillInButtonControl() {
ULSglM:
    ;
    if (this.format == "Dropdown") {
        var fillInButtonControl = this.frm.FieldSubPart(this, "FillInButton");

        return fillInButtonControl[1];
    }
    else {
        var fieldControl = this.frm.FieldSubPart(this, this.format);

        return fieldControl[this.rgChoices.length - 1];
    }
}
function ChoiceGetFillInControl() {
ULSglM:
    ;
    return this.frm.FieldSubPart(this, "FillIn");
}
function ChoiceFieldFocus() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return false;
    var bSelectedFillInChoice = false;

    if (this.fFillInChoice) {
        if (this.format == "RadioButtons" || this.format == "Checkboxes") {
            var fieldControl = this.frm.FieldSubPart(this, this.format);
            var i;

            for (i in this.rgChoices) {
                if (fieldControl[i].checked)
                    break;
            }
            if (Number(i) == this.rgChoices.length - 1)
                bSelectedFillInChoice = true;
        }
        else {
            var fillInButton = this.GetFillInButtonControl();

            if (fillInButton.checked)
                bSelectedFillInChoice = true;
        }
    }
    var field = bSelectedFillInChoice ? this.GetFillInControl() : this.GetControl();

    if (!field.disabled) {
        try {
            field.focus();
        }
        catch (e) { }
        return true;
    }
    return false;
}
function ChoiceFValidate() {
ULSglM:
    ;
    if (this.rgChoices.length == 0)
        return;
    var field = this.frm.FieldPost(this);

    field.value = "";
    if (this.fFillInChoice) {
        var fillInButtonControl = this.GetFillInButtonControl();
        var fillInControl = this.GetFillInControl();
    }
    var fieldControl = this.format == "Checkboxes" && this.rgChoices.length != 1 ? this.frm.FieldSubPart(this, this.format) : this.GetControl();

    if (this.format == "Dropdown") {
        if (this.fFillInChoice && fillInButtonControl.checked) {
            if (-1 != (GetValueAttribute(fillInControl)).indexOf(";#")) {
                this.stError = StBuildParam(Strings.STS.L_InvalidFillIn_Text, this.stDisplay);
                return false;
            }
            field.value = TrimWhiteSpaces(GetValueAttribute(fillInControl));
        }
        else {
            if (fieldControl.selectedIndex != -1)
                field.value = GetValueAttribute(fieldControl[fieldControl.selectedIndex]);
            if (typeof this.fldCtId != 'undefined') {
                var fieldCtId = this.frm.FieldPost(this.fldCtId);
                var ctIdValue = this.frm.ctNameToId[GetValueAttribute(field)];

                fieldCtId.value = typeof ctIdValue != 'undefined' ? ctIdValue : "";
            }
        }
    }
    else if (this.format == "Checkboxes" && this.rgChoices.length != 1) {
        var stValue = "";
        var stSingleValue = "";
        var numOfValues = 0;

        for (var i in this.rgChoices) {
            if (fieldControl[i].checked == true) {
                if (this.fFillInChoice && Number(i) == this.rgChoices.length - 1) {
                    var stFillInValue = TrimWhiteSpaces(GetValueAttribute(fillInControl));

                    if (stFillInValue == "")
                        break;
                    if (-1 != stFillInValue.indexOf(";#")) {
                        this.stError = StBuildParam(Strings.STS.L_InvalidFillIn_Text, this.stDisplay);
                        return false;
                    }
                    stSingleValue = stFillInValue;
                }
                else
                    stSingleValue = this.rgChoices[i].stValue;
                numOfValues++;
                if (numOfValues == 1)
                    stValue = stSingleValue;
                else if (numOfValues == 2)
                    stValue = ";#" + stValue + ";#" + stSingleValue + ";#";
                else
                    stValue += stSingleValue + ";#";
            }
        }
        field.value = stValue;
    }
    else {
        if (this.fFillInChoice && fillInButtonControl.checked) {
            if (-1 != (GetValueAttribute(fillInControl)).indexOf(";#")) {
                this.stError = StBuildParam(Strings.STS.L_InvalidFillIn_Text, this.stDisplay);
                return false;
            }
            field.value = TrimWhiteSpaces(GetValueAttribute(fillInControl));
        }
        else if (fieldControl.checked)
            field.value = GetValueAttribute(fieldControl);
    }
    if (this.fRequired && GetValueAttribute(field) == "") {
        this.stError = StBuildParam(Strings.STS.L_FieldRequired_Text, this.stDisplay);
        return false;
    }
    if (this.frm.wBaseType == 1 && Boolean(GetValueAttribute(field)) && (GetValueAttribute(field)).length > 255) {
        this.stError = StBuildParam(Strings.STS.L_TextFieldMax_Text, this.stDisplay, 255);
        return false;
    }
    return true;
}
function ChoiceRevertSelect(stValue) {
ULSglM:
    ;
    if (stValue == "")
        return;
    for (var i in this.rgChoices) {
        var choice = this.rgChoices[i];

        if (choice.stValue == stValue) {
            var fieldControl = this.GetControl(i);

            if (fieldControl.checked)
                fieldControl.checked = false;
            else {
                fieldControl.checked = true;
                if (this.fFillInChoice && Number(i) == this.rgChoices.length - 1) {
                    var field = this.GetFillInControl();

                    if (!field.disabled)
                        field.focus();
                }
            }
            break;
        }
    }
}
function ChoiceFieldSetFillInButton() {
ULSglM:
    ;
    var fillInButton = this.GetFillInButtonControl();

    fillInButton.checked = true;
    var fillInControl = this.GetFillInControl();

    fillInControl.focus();
}
function ChoiceFieldUnsetFillInButton() {
ULSglM:
    ;
    if (this.format == "Dropdown") {
        var fillInButtonControl = this.frm.FieldSubPart(this, "FillInButton");

        fillInButtonControl[0].checked = true;
    }
    else {
        var fillInButton = this.GetFillInButtonControl();

        fillInButton.checked = false;
    }
}
function ChoiceSetFillInValue(stValue) {
ULSglM:
    ;
    var fillInButton = this.GetFillInButtonControl();

    fillInButton.checked = true;
    var fillInControl = this.GetFillInControl();

    fillInControl.value = stValue;
}
function RemoveReplaceDelimiter(stValue) {
ULSglM:
    ;
    stValue = stValue.replace(/^;#/g, "");
    stValue = stValue.replace(/;#$/g, "");
    stValue = stValue.replace(/;#/g, "; ");
    return stValue;
}
var _RecurDateRangeDiv;
var _RecurPatternTextDiv;
var _RecurDailyDiv;
var _RecurWeeklyDiv;
var _RecurMonthlyDiv;
var _recurFld;

function RecurrencePattern(frm, stName, stDisplayName) {
    frm.AddField(this, stName, stDisplayName, "");
    this.fSkipValidation = true;
    this.isModifyException = false;
    this.isNewModifyException = false;
    this.stStartDate = "";
    this.stEndDate = "";
    this.caltype = 1;
    this.todayiso = "";
    this.stPrefix = "RecurrencePattern#";
    this.iCustom = "1";
    this.fDoCustom = false;
    this.rgStRecurType = [Strings.STS.L_RecurPatternNone_Text, Strings.STS.L_RecurPatternCustom_Text, Strings.STS.L_RecurPatternDaily_Text, Strings.STS.L_RecurPatternWeekly_Text, Strings.STS.L_RecurPatternMonthly_Text, Strings.STS.L_RecurPatternYearly_Text];
    var ccRecurType = 0;

    for (var i in this.rgStRecurType)
        ccRecurType = Math.max(ccRecurType, this.rgStRecurType[i].length);
    this.ccRecurType = ccRecurType + 14;
    this.rgStRangeType = [Strings.STS.L_RangeTypeNone_Text, Strings.STS.L_RangeTypeCount_Text, Strings.STS.L_RangeTypeEndDate_Text];
    this.recurrencePatternChoice = "0";
    this.monthlyChoiceValue = "0";
    this.dateRangeEndChoice = "0";
    this.dayFrequency = Strings.STS.L_DayFrequency_Text;
    this.weekFrequency = Strings.STS.L_WeekFrequency_Text;
    this.monthFrequency1 = Strings.STS.L_MonthFrequency_Text;
    this.monthFrequency2 = Strings.STS.L_MonthFrequency_Text;
    var today = frm.dopt.Today();

    this.weeklyDayMultiValue = ";#" + String(today.getUTCDay()) + ";#";
    this.monthly1DayValue = Strings.STS.L_Monthly1DayValue_Text;
    this.monthly2DayValue = "0";
    this.monthly2WeekValue = "0";
    this.dateRangeStart = DateOptions.StISODate(today);
    this.dateRangeEnd = DateOptions.StISODate(today);
    this.dateRangeEndOccurrences = Strings.STS.L_DateRangeEndOccurrencesValue_Text;
}
function RecurrencePatternBuildUI() {
ULSglM:
    ;
    if (Number(this.recurrencePatternChoice) < 0 || Number(this.recurrencePatternChoice) > this.rgStRecurType.length)
        this.recurrencePatternChoice = "0";
    if (Number(this.dateRangeEndChoice) < 0 || Number(this.dateRangeEndChoice) > this.rgStRangeType.length)
        this.dateRangeEndChoice = "0";
    if (Number(this.monthlyChoiceValue) < 0 || Number(this.monthlyChoiceValue) > 2)
        this.monthlyChoiceValue = "0";
    var st = "";

    if (this.isModifyException || this.isNewModifyException) {
        if (this.isModifyException) {
            st += "<input type='hidden' name=" + StAttrQuote(this.frm.stFieldPrefix + this.stPrefix + "Modify:" + this.stName) + "value='TRUE'>\r";
        }
        else if (this.isNewModifyException) {
            st += "<input type='hidden' name=" + StAttrQuote(this.frm.stFieldPrefix + this.stPrefix + "NewModify:" + this.stName) + "value='TRUE'>\r";
            st += "<input type='hidden' name=" + StAttrQuote(this.frm.stFieldPrefix + g_fld.stRecurrenceIDName) + "value=" + StAttrQuote(this.stRecurrenceID) + ">\r";
            st += "<input type='hidden' name=" + StAttrQuote(this.frm.stFieldPrefix + g_fld.stUIDName) + "value=" + StAttrQuote(this.stUID) + ">\r";
        }
        if (Boolean(this.stRecurrenceDescription))
            st += STSHtmlEncode(this.stRecurrenceDescription);
        BFormDocumentWrite(st);
        this.eventHook = new RecurrencePatternEventHooks(this, this.frm, null, this.stStartDate, this.stEndDate);
        this.eventHook.value = 0;
        this.eventHook.Init();
        return;
    }
    var dateFld = this.frm.FindField(this.stStartDate);

    if (Boolean(dateFld)) {
        st += "<input type='hidden' name=" + StAttrQuote(this.frm.stFieldPrefix + this.stPrefix + "oldStartDate:" + this.stName) + "value='";
        st += dateFld.stValue;
        st += "'>\r";
    }
    _recurFld = this;
    st += "<table border='0' cellpadding='0' cellspacing='0' class='ms-formrecurrence'>\r";
    st += "<tr><td rowspan='5' nowrap>\r";
    st += RecurrencePatternTypes(this);
    st += "</td>";
    st += "<td rowspan='5' nowrap><img width='40pt' height='1pt' src=" + StAttrQuote(this.frm.stImagesPath + "blank.gif") + ">" + "</td></tr>\r";
    st += "<tr><td nowrap valign='top'><div id='" + _RecurPatternTextDiv + "' ";
    if (Number(this.recurrencePatternChoice) > 1)
        st += "style='display:none'";
    st += ">\r";
    st += "<nobr><span class='ms-formdescription'>" + Strings.STS.L_Pattern_Text + "</span></nobr>";
    st += "</div></td></tr>\r";
    st += "<tr><td nowrap valign='top' rowspan='4' height='68pt'><table border='0' cellpadding='0' cellspacing='0' class='ms-formrecurrence'>";
    st += "<tr><td nowrap><img width='12pt' height='1pt' src=" + StAttrQuote(this.frm.stImagesPath + "blank.gif") + "></td></tr>";
    st += "<tr><td nowrap valign='top'><div id='" + _RecurDailyDiv + "' ";
    if (this.recurrencePatternChoice != "2")
        st += "style='display:none'";
    st += ">\r";
    st += RecurrencePatternDaily(this);
    st += "</div></td></tr>\r";
    st += "<tr><td nowrap valign='top'><div id='" + _RecurWeeklyDiv + "' ";
    if (this.recurrencePatternChoice != "3")
        st += "style='display:none'";
    st += ">\r";
    st += RecurrencePatternWeekly(this);
    st += "</div></td></tr>\r";
    st += "<tr><td nowrap valign='top'><div id='" + _RecurMonthlyDiv + "' ";
    if (this.recurrencePatternChoice != "4")
        st += "style='display:none'";
    st += ">\r";
    st += RecurrencePatternMonthly(this);
    st += "</div></td></tr></table></td></tr></table>\r";
    BFormDocumentWrite(st);
    st = "<div ID='" + _RecurDateRangeDiv + "' ";
    if (Number(this.recurrencePatternChoice) > 1)
        st += "style='display:none'";
    st += ">\r";
    st += "<table border='0' cellpadding='0' cellspacing='0' class='ms-formrecurrence'><tr>\r";
    st += "<td nowrap><img width='116pt' height='1pt' src=" + StAttrQuote(this.frm.stImagesPath + "blank.gif") + ">" + "</td>";
    st += "<td valign=\"top\" nowrap><nobr><span class='ms-formdescription'>" + Strings.STS.L_DateRange_Text + "</span><br><br>" + Strings.STS.L_StartDateRange_Text + "</nobr><br>";
    st += RecurrenceDateRangeStart(this);
    st += "</td>";
    st += "<td nowrap><img width=\"10pt\" height='1pt' src=" + StAttrQuote(this.frm.stImagesPath + "blank.gif") + ">" + "</td><td nowrap><br><br>";
    st += RecurrenceDateRangeEnd(this);
    st += "</td></tr></table></div>\r";
    BFormDocumentWrite(st);
    _recurFld = null;
}
function RecurrencePatternInit() {
ULSglM:
    ;
    if (this.isModifyException || this.isNewModifyException) {
        var dateFld = this.frm.FindField(this.stEndDate);

        if (Boolean(dateFld))
            dateFld.fRequired = true;
    }
}
function RecurrencePatternTypes(recurFld) {
ULSglM:
    ;
    var st = "";

    g_fld = new ChoiceField(recurFld.frm, recurFld.stPrefix + "Type:" + recurFld.stName, Strings.STS.L_RecurrenceType_Text, recurFld.recurrencePatternChoice);
    g_fld.format = "RadioButtons";
    g_fld.radioClass = "class=ms-radiotext ";
    for (var i in recurFld.rgStRecurType) {
        var stI = "";

        if (i != recurFld.iCustom || recurFld.fDoCustom) {
            stI = i;
            g_fld.AddChoice(recurFld.rgStRecurType[i], stI);
        }
    }
    st += g_fld.stBuildUI();
    recurFld.eventHook = new RecurrencePatternEventHooks(recurFld, recurFld.frm, g_fld, recurFld.stStartDate, recurFld.stEndDate);
    recurFld.eventHook.Init();
    return st;
}
function RecurrencePatternDaily(recurFld) {
ULSglM:
    ;
    var st = "";
    var fld = new NumberField(recurFld.frm, recurFld.stPrefix + "daily_dayFrequency:" + recurFld.stName, Strings.STS.L_DailyDisplay_Text, recurFld.dayFrequency);

    fld.cchDisplaySize = 3;
    fld.wMin = 1;
    fld.wMax = 255;
    fld.fInteger = true;
    fld.fSkipValidation = true;
    _recurFld.dayFrequencyFld = fld;
    var cntrl1 = fld.stBuildUI();

    st = StBuildParam(Strings.STS.L_Daily_Text, cntrl1);
    st += "<p><p>";
    return st;
}
function RecurrencePatternWeekly(recurFld) {
ULSglM:
    ;
    var numberField = new NumberField(recurFld.frm, recurFld.stPrefix + "weekly_weekFrequency:" + recurFld.stName, Strings.STS.L_WeeklyRecurDisplay_Text, recurFld.weekFrequency);

    numberField.cchDisplaySize = 3;
    numberField.wMin = 1;
    numberField.wMax = 52;
    numberField.fInteger = true;
    numberField.fSkipValidation = true;
    recurFld.weeklyFrequencyFld = numberField;
    var cntrl1 = numberField.stBuildUI();
    var dayChoice = [Strings.STS.L_Sunday_Text, Strings.STS.L_Monday_Text, Strings.STS.L_Tuesday_Text, Strings.STS.L_Wednesday_Text, Strings.STS.L_Thursday_Text, Strings.STS.L_Friday_Text, Strings.STS.L_Saturday_Text];
    var stSourceURL = StURLGetVar("Source");

    if (Boolean(stSourceURL.length)) {
        stSourceURL = unescape(stSourceURL);
        var stCalDate = StSearchVar(stSourceURL, "CalendarDate");
        var stCalPeriod = StSearchVar(stSourceURL, "CalendarPeriod");

        if (stCalPeriod == "day" && Boolean(stCalDate.length)) {
            var isoDate = DateOptions.ParseISODate(stCalDate);

            if (!isNaN(Number(isoDate)))
                recurFld.weeklyDayMultiValue = ";#" + String(isoDate.getUTCDay()) + ";#";
        }
    }
    var choiceField = new ChoiceField(recurFld.frm, recurFld.stPrefix + "weekly_multiDays:" + recurFld.stName, Strings.STS.L_WeeklyDayChoiceDisplay_Text, recurFld.weeklyDayMultiValue);

    choiceField.format = "Checkboxes";
    choiceField.radioClass = " class=ms-input valign=baseline ";
    choiceField.tableClass = " class=ms-formrecurrence ";
    choiceField.horizontal = true;
    choiceField.horizontalBreakEvery = 4;
    recurFld.weeklyMultiDayFld = choiceField;
    var stI = "";

    for (var i in dayChoice) {
        stI = i;
        choiceField.AddChoice(dayChoice[i], stI);
    }
    var cntrl2 = "<DIV>" + choiceField.stBuildUI() + "</DIV>";

    return StBuildParam(Strings.STS.L_Weekly_Text, cntrl1, cntrl2);
}
function RecurrencePatternMonthly(recurFld) {
ULSglM:
    ;
    g_fld = new ChoiceField(recurFld.frm, recurFld.stPrefix + "MonthlyRecurType:" + recurFld.stName, "", recurFld.monthlyChoiceValue);
    g_fld.format = "RadioButtons";
    g_fld.radioClass = "class=ms-input valign=baseline";
    g_fld.tableClass = " class=ms-formrecurrence ";
    g_fld.fIncludeMouseDown = true;
    g_fld.nobr = true;
    recurFld.monthlyChoiceFld = g_fld;
    g_fld.AddChoiceWithLayoutProc("", "0", "RecurrencePatternMonthly1");
    g_fld.AddChoiceWithLayoutProc("", "1", "RecurrencePatternMonthly2");
    var st = g_fld.stBuildUI();

    return st;
}
function RecurrencePatternMonthly1(choiceFld) {
ULSglM:
    ;
    var fld = new NumberField(_recurFld.frm, _recurFld.stPrefix + "monthly_day:" + _recurFld.stName, Strings.STS.L_Monthly1DayDisplay_Text, _recurFld.monthly1DayValue);

    fld.cchDisplaySize = 2;
    fld.wMin = 1;
    fld.wMax = 31;
    fld.fInteger = true;
    fld.fSkipValidation = true;
    _recurFld.monthlyChoice1DayFld = fld;
    var cntrl1 = fld.stBuildUI();
    var fld2 = new NumberField(_recurFld.frm, _recurFld.stPrefix + "monthly_monthFrequency:" + _recurFld.stName, Strings.STS.L_Monthly1MonthDisplay_Text, _recurFld.monthFrequency1);

    fld2.cchDisplaySize = 2;
    fld2.wMin = 1;
    fld2.wMax = 12;
    fld2.fInteger = true;
    fld2.fSkipValidation = true;
    _recurFld.monthlyChoice1MonthFreqFld = fld2;
    var cntrl2 = fld2.stBuildUI();

    return StBuildParam(Strings.STS.L_Monthly1_Text, cntrl1, cntrl2);
}
function RecurrencePatternMonthly2(choiceFld) {
ULSglM:
    ;
    var weekChoice = [Strings.STS.L_FirstWeek_Text, Strings.STS.L_SecondWeek_Text, Strings.STS.L_ThirdWeek_Text, Strings.STS.L_FourthWeek_Text, Strings.STS.L_LastWeek_Text];
    var dayChoice = [Strings.STS.L_Sunday_Text, Strings.STS.L_Monday_Text, Strings.STS.L_Tuesday_Text, Strings.STS.L_Wednesday_Text, Strings.STS.L_Thursday_Text, Strings.STS.L_Friday_Text, Strings.STS.L_Saturday_Text];

    fld = new ChoiceField(_recurFld.frm, _recurFld.stPrefix + "monthlyByDay_weekOfMonth:" + _recurFld.stName, Strings.STS.L_Monthly2WhichWeekDisplay_Text, _recurFld.monthly2WeekValue);
    var stI = "";
    var i;

    fld.horizontal = true;
    for (i in weekChoice) {
        stI = i;
        fld.AddChoice(weekChoice[i], stI);
    }
    var cntrl1 = fld.stBuildUI();

    fld = new ChoiceField(_recurFld.frm, _recurFld.stPrefix + "monthlyByDay_day:" + _recurFld.stName, Strings.STS.L_Monthly2DayDisplay_Text, _recurFld.monthly2DayValue);
    fld.horizontal = true;
    for (i in dayChoice) {
        stI = i;
        fld.AddChoice(dayChoice[i], stI);
    }
    var cntrl2 = fld.stBuildUI();
    var fld = new NumberField(_recurFld.frm, _recurFld.stPrefix + "monthlyByDay_monthFrequency:" + _recurFld.stName, Strings.STS.L_Monthly2MonthDisplay_Text, _recurFld.monthFrequency2);

    fld.cchDisplaySize = 2;
    fld.wMin = 1;
    fld.wMax = 12;
    fld.fInteger = true;
    fld.fSkipValidation = true;
    _recurFld.monthlyChoice2MonthFreqFld = fld;
    var cntrl3 = fld.stBuildUI();

    return StBuildParam(Strings.STS.L_Monthly2_Text, cntrl1, cntrl2, cntrl3);
}
function RecurrenceDateRangeStart(recurFld) {
ULSglM:
    ;
    var st = "<nobr>\r";

    g_fld = new DateField(recurFld.frm, recurFld.stPrefix + "windowStart:" + recurFld.stName, Strings.STS.L_DateRangeStartDisplay_Text, recurFld.todayiso);
    g_fld.fRequired = true;
    g_fld.fSkipValidation = true;
    g_fld.caltype = recurFld.caltype;
    recurFld.dateRangeFldStart = g_fld;
    g_fld.fDateOnly = true;
    g_fld.fHideDateSpan = true;
    st += g_fld.stBuildUI();
    st += "</nobr>\r";
    return st;
}
function RecurrenceDateRangeEnd(recurFld) {
ULSglM:
    ;
    g_fld = new ChoiceField(recurFld.frm, recurFld.stPrefix + "EndDateRangeType:" + recurFld.stName, Strings.STS.L_DateRangeTypeDisplay_Text, recurFld.dateRangeEndChoice);
    recurFld.endRangeOptionFld = g_fld;
    g_fld.format = "RadioButtons";
    g_fld.tableClass = "class='ms-formrecurrence'";
    g_fld.radioClass = "class=ms-input valign=baseline";
    g_fld.fIncludeMouseDown = true;
    g_fld.nobr = true;
    g_fld.AddChoice(recurFld.rgStRangeType[0], "0");
    g_fld.AddChoiceWithLayoutProc(recurFld.rgStRangeType[1], "1", "RecurrenceEndDateRange1");
    g_fld.AddChoiceWithLayoutProc(recurFld.rgStRangeType[2], "2", "RecurrenceEndDateRange2");
    return g_fld.stBuildUI();
}
function RecurrenceEndDateRange1(choiceFld) {
ULSglM:
    ;
    var fld = new NumberField(_recurFld.frm, _recurFld.stPrefix + "repeatInstances:" + _recurFld.stName, Strings.STS.L_DateRangeOccurrencesDisplay_Text, _recurFld.dateRangeEndOccurrences);

    fld.cchDisplaySize = 4;
    fld.wMin = 1;
    fld.wMax = 999;
    fld.fInteger = true;
    fld.fSkipValidation = true;
    _recurFld.dateRangeFldEndOccurrances = fld;
    var cntrl1 = fld.stBuildUI();

    return StBuildParam(Strings.STS.L_EndDateRange_Text, cntrl1);
}
function RecurrenceEndDateRange2(choiceFld, stPopUpOnClick2) {
ULSglM:
    ;
    var fld = new DateField(_recurFld.frm, _recurFld.stPrefix + "windowEnd:" + _recurFld.stName, Strings.STS.L_DateRangeEndDisplay_Text, "");

    fld.fRequired = true;
    fld.fSkipValidation = true;
    fld.caltype = _recurFld.caltype;
    _recurFld.dateRangeFldEnd = fld;
    fld.fDateOnly = true;
    fld.fHideDateSpan = true;
    fld.stPopUpOnClick2 = stPopUpOnClick2;
    return fld.stBuildUI();
}
function RecurrencePatternEventHooks(recurFld, frm, typeFld, stStartDate, stEndDate) {
    this.recurFld = recurFld;
    this.frm = frm;
    this.typeFld = typeFld;
    this.stStartDate = stStartDate;
    this.stEndDate = stEndDate;
    frm.AddField(this, "RecurrencePatternType", "Date range, end pattern", "0");
    if (Boolean(typeFld))
        typeFld.stAlias = "RecurrencePatternType";
    this.rgStPatternTypes = ["", "", _RecurDailyDiv, _RecurWeeklyDiv, _RecurMonthlyDiv, ""];
    this.value = -1;
}
function RecurrencePatternEventHooksInit() {
ULSglM:
    ;
    this.dateFldStart = this.frm.FindField(this.recurFld.stStartDate);
    this.dateFldEnd = this.frm.FindField(this.recurFld.stEndDate);
    this.dateRangeFldStart = this.recurFld.dateRangeFldStart;
    this.dateRangeFldEnd = this.recurFld.dateRangeFldEnd;
    var stID = "";

    stID = StURLGetVar("ID");
    if (0 == stID.length) {
        if (Boolean(this.dateFldStart)) {
            var stSourceURL = StURLGetVar("Source");

            if (Boolean(stSourceURL.length)) {
                stSourceURL = unescape(stSourceURL);
                var stCalDate = StSearchVar(stSourceURL, "CalendarDate");
                var stCalPeriod = StSearchVar(stSourceURL, "CalendarPeriod");

                if (stCalPeriod == "day" && Boolean(stCalDate.length)) {
                    var isoDate = DateOptions.ParseISODate(stCalDate);

                    if (!isNaN(isoDate)) {
                        stCalDate = this.frm.dopt.StDate(isoDate);
                        var dateFld = this.frm.FieldSubPart(this.dateFldStart, "Date");

                        dateFld.value = stCalDate;
                    }
                }
            }
            var disableSave = this.dateFldStart.disabled;

            this.dateFldStart.disabled = false;
            if (this.dateFldStart.FValidate() && Boolean(this.dateFldStart.date)) {
                this.dateFldStart.date.setUTCHours(0, 0, 0, 0);
                this.frm.dopt.SetTimeControls(this.dateFldStart, this.dateFldStart.date);
            }
            this.dateFldStart.disabled = disableSave;
        }
    }
    this.DateToDateRange();
    this.InitHooks();
}
function DoInitRecurrencePatternEventHooks() {
ULSglM:
    ;
    this.divtags = document.getElementsByTagName("div");
    this.stRecurDateRangeDiv = this.divtags[_RecurDateRangeDiv];
    this.stRecurPatternTextDiv = this.divtags[_RecurPatternTextDiv];
    var spantags = document.getElementsByTagName("span");

    this.stStartDateSpan = spantags[this.frm.StFieldNameFactory(this.stStartDate, "DateSpan")];
    this.stEndDateSpan = spantags[this.frm.StFieldNameFactory(this.stEndDate, "DateSpan")];
    if (this.typeFld != null)
        this.ToggleDisplay(this.typeFld.stValue, true);
}
function RecurrencePatternValidate() {
ULSglM:
    ;
    var fValid = false;

    this.errFld = null;
    if (GetValueAttribute(this) == 0) {
        if (!this.dateFldEnd.FValidate() || !(this.dateFldEnd.date != null)) {
            var hr = this.frm.GetSelValue(this.frm.StFieldName(this.dateFldEnd, "Hours")) - 0;
            var min = this.frm.GetSelValue(this.frm.StFieldName(this.dateFldEnd, "Minutes"));

            if (hr != 0 || min != 0)
                this.CopyDateFld(this.dateFldStart, this.dateFldEnd);
        }
        if (this.dateFldStart.FValidate() && this.dateFldEnd.FValidate() && Boolean(this.dateFldStart.date) && Boolean(this.dateFldEnd.date) && this.dateFldEnd.date.getTime() < this.dateFldStart.date.getTime()) {
            this.errFld = this.dateFldStart;
            this.errFld.stError = Strings.STS.L_DateRangeOrdering_Text;
            return false;
        }
    }
    else if (GetValueAttribute(this) >= 2) {
        if (!this.dateRangeFldStart.FValidate()) {
            this.errFld = this.dateRangeFldStart;
            return false;
        }
        if (this.recurFld.endRangeOptionFld != null && this.recurFld.endRangeOptionFld.FValidate()) {
            var endRangeOptionFldPost = this.frm.FieldPost(this.recurFld.endRangeOptionFld);
            var fValidEndDate = this.dateRangeFldEnd.FValidate();

            if (endRangeOptionFldPost == null || GetValueAttribute(endRangeOptionFldPost) == "2") {
                if (!fValidEndDate) {
                    this.errFld = this.dateRangeFldEnd;
                    return false;
                }
                if (this.dateRangeFldEnd.date.getTime() < this.dateRangeFldStart.date.getTime()) {
                    this.errFld = this.dateRangeFldStart;
                    this.errFld.stError = Strings.STS.L_DateRangeOrdering_Text;
                    return false;
                }
            }
            else if (GetValueAttribute(endRangeOptionFldPost) == "1") {
                if (this.recurFld.dateRangeFldEndOccurrances != null) {
                    this.recurFld.dateRangeFldEndOccurrances.fRequired = true;
                    fValid = this.recurFld.dateRangeFldEndOccurrances.FValidate();
                    this.recurFld.dateRangeFldEndOccurrances.fRequired = false;
                    if (!fValid) {
                        var newField = this.recurFld.dateRangeFldEndOccurrances;

                        this.errFld = newField;
                        return false;
                    }
                }
                if (!fValidEndDate) {
                    this.CopyDateFld(this.dateRangeFldStart, this.dateRangeFldEnd);
                }
            }
            else if (!fValidEndDate) {
                this.CopyDateFld(this.dateRangeFldStart, this.dateRangeFldEnd);
            }
        }
        if (GetValueAttribute(this) == 2) {
            if (this.recurFld.dayFrequencyFld != null) {
                this.recurFld.dayFrequencyFld.fRequired = true;
                fValid = this.recurFld.dayFrequencyFld.FValidate();
                this.recurFld.dayFrequencyFld.fRequired = false;
                if (!fValid) {
                    newField = this.recurFld.dayFrequencyFld;
                    this.errFld = newField;
                    return false;
                }
            }
        }
        else if (GetValueAttribute(this) == 3) {
            if (this.recurFld.weeklyFrequencyFld != null) {
                this.recurFld.weeklyFrequencyFld.fRequired = true;
                fValid = this.recurFld.weeklyFrequencyFld.FValidate();
                this.recurFld.weeklyFrequencyFld.fRequired = false;
                if (!fValid) {
                    newField = this.recurFld.weeklyFrequencyFld;
                    this.errFld = newField;
                    return false;
                }
            }
            if (this.recurFld.weeklyMultiDayFld != null) {
                this.recurFld.weeklyMultiDayFld.fRequired = true;
                fValid = this.recurFld.weeklyMultiDayFld.FValidate();
                this.recurFld.weeklyMultiDayFld.fRequired = false;
                if (!fValid) {
                    newField = this.recurFld.weeklyMultiDayFld;
                    this.errFld = newField;
                    return false;
                }
            }
        }
        else if (GetValueAttribute(this) == 4) {
            if (this.recurFld.monthlyChoiceFld != null && this.recurFld.monthlyChoiceFld.FValidate()) {
                var monthlyChoiceFldPost = this.frm.FieldPost(this.recurFld.monthlyChoiceFld);

                if (monthlyChoiceFldPost != null) {
                    if (GetValueAttribute(monthlyChoiceFldPost) == "0") {
                        this.recurFld.monthlyChoice1DayFld.fRequired = true;
                        fValid = this.recurFld.monthlyChoice1DayFld.FValidate();
                        this.recurFld.monthlyChoice1DayFld.fRequired = false;
                        if (!fValid) {
                            newField = this.recurFld.monthlyChoice1DayFld;
                            this.errFld = newField;
                            return false;
                        }
                        this.recurFld.monthlyChoice1MonthFreqFld.fRequired = true;
                        fValid = this.recurFld.monthlyChoice1MonthFreqFld.FValidate();
                        this.recurFld.monthlyChoice1MonthFreqFld.fRequired = false;
                        if (!fValid) {
                            newField = this.recurFld.monthlyChoice1MonthFreqFld;
                            this.errFld = newField;
                            return false;
                        }
                    }
                    else if (GetValueAttribute(monthlyChoiceFldPost) == "1") {
                        this.recurFld.monthlyChoice2MonthFreqFld.fRequired = true;
                        fValid = this.recurFld.monthlyChoice2MonthFreqFld.FValidate();
                        this.recurFld.monthlyChoice2MonthFreqFld.fRequired = false;
                        if (!fValid) {
                            newField = this.recurFld.monthlyChoice2MonthFreqFld;
                            this.errFld = newField;
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}
function RecurrencePatternEventHooksSetValue(value) {
ULSglM:
    ;
    this.typeFld.SetValue(value);
    this.ToggleDisplay(value, false);
}
function DisplayOff(fld) {
    if (fld) {
        if (fld.length == 0) {
            DoDisplayOff(fld);
            if (fld.children)
                DoDisplayOff(fld.children);
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                DoDisplayOff(fld[i]);
                if (fld[i].children)
                    DoDisplayOff(fld[i].children);
            }
        }
    }
}
function DoDisplayOff(fld) {
    if (fld != null) {
        if (fld.length == 0) {
            fld.disabled = true;
            if (fld.style != null)
                fld.style.display = "none";
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                fld[i].disabled = true;
                if (fld[i].style)
                    fld[i].style.display = "none";
            }
        }
    }
}
function DisplayOn(fld) {
    if (fld) {
        if (!fld.length) {
            DoDisplayOn(fld);
            if (fld.children)
                DoDisplayOn(fld.children);
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                DoDisplayOn(fld[i]);
                if (fld[i].children)
                    DoDisplayOn(fld[i].children);
            }
        }
    }
}
function DoDisplayOn(fld) {
    if (fld) {
        if (!fld.length) {
            fld.disabled = false;
            if (fld.style)
                fld.style.display = "";
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                fld[i].disabled = false;
                if (fld[i].style)
                    fld[i].style.display = "";
            }
        }
    }
}
function FieldsDisabled(fld) {
    if (fld) {
        if (!fld.length) {
            fld.disabled = true;
            if (fld.style)
                fld.style.visibility = "hidden";
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                fld[i].disabled = true;
                if (fld[i].style)
                    fld[i].style.visibility = "hidden";
            }
        }
    }
}
function FieldsEnabled(fld) {
    if (fld) {
        if (!fld.length) {
            fld.disabled = false;
            if (fld.style)
                fld.style.visibility = "visible";
        }
        else {
            var i;

            for (i = 0; i < Number(fld.length); i++) {
                fld[i].disabled = false;
                if (fld[i].style)
                    fld[i].style.visibility = "visible";
            }
        }
    }
}
function FnDateRangeToDate() {
ULSglM:
    ;
    this.CopyDateFld(this.dateRangeFldStart, this.dateFldStart);
    this.CopyDateFld(this.dateRangeFldEnd, this.dateFldEnd);
}
function FnDateToDateRange() {
ULSglM:
    ;
    this.CopyDateFld(this.dateFldStart, this.dateRangeFldStart);
    this.CopyDateFld(this.dateFldEnd, this.dateRangeFldEnd);
}
function RecurrencePatternEventHooksToggleDisplay(value, fForce) {
ULSglM:
    ;
    if (!fForce && GetValueAttribute(this) == value)
        return;
    if (GetValueAttribute(this) >= 0 && this.rgStPatternTypes[GetValueAttribute(this)] != "") {
        DisplayOff(this.divtags[this.rgStPatternTypes[GetValueAttribute(this)]]);
    }
    var oldValue = GetValueAttribute(this);

    this.value = value;
    if (GetValueAttribute(this) >= 0 && this.rgStPatternTypes[GetValueAttribute(this)] != "") {
        DisplayOn(this.divtags[this.rgStPatternTypes[GetValueAttribute(this)]]);
    }
    if (GetValueAttribute(this) == 0) {
        this.DateRangeToDate();
        DisplayOn(this.stStartDateSpan);
        DisplayOn(this.stEndDateSpan);
        DisplayOff(this.stRecurDateRangeDiv);
        DisplayOff(this.stRecurPatternTextDiv);
    }
    else {
        if (fForce || oldValue == 0) {
            this.DateToDateRange();
            if (this.recurFld.endRangeOptionFld != null && this.recurFld.endRangeOptionFld.FValidate()) {
                var endRangeOptionFldPost = this.frm.FieldPost(this.recurFld.endRangeOptionFld);

                if (endRangeOptionFldPost == null || GetValueAttribute(endRangeOptionFldPost) != "2") {
                    var destDateFld = this.frm.FieldSubPart(this.dateRangeFldEnd, "Date");

                    destDateFld.value = "";
                    var disableSave = destDateFld.disabled;

                    destDateFld.disabled = false;
                    this.dateRangeFldEnd.FValidate();
                    destDateFld.disabled = disableSave;
                }
            }
        }
        DisplayOff(this.stStartDateSpan);
        DisplayOff(this.stEndDateSpan);
        DisplayOn(this.stRecurDateRangeDiv);
        DisplayOn(this.stRecurPatternTextDiv);
    }
}
function DateFieldPostProcess() {
ULSglM:
    ;
    if (GetValueAttribute(this) >= 2)
        this.DateRangeToDate();
}
function FnCopyDateFld(srcFld, destFld) {
    if (srcFld != null && destFld != null) {
        var srcFldPost = srcFld.frm.FieldPost(srcFld);
        var destFldPost = destFld.frm.FieldPost(destFld);

        if (Boolean(srcFldPost) && Boolean(destFldPost)) {
            var srcDateFld = this.frm.FieldSubPart(srcFld, "Date");
            var date = this.frm.dopt.ParseLocaleDate(GetValueAttribute(srcDateFld), this.recurFld.caltype);

            if (!isNaN(date)) {
                var destDateFld = this.frm.FieldSubPart(destFld, "Date");

                destDateFld.value = GetValueAttribute(srcDateFld);
                var disableSave = destDateFld.disabled;

                destDateFld.disabled = false;
                destFld.FValidate();
                destDateFld.disabled = disableSave;
            }
        }
    }
}
function Position() {
}
function WindowPosition(elt) {
    var pos = new Position;

    pos.x = 0;
    pos.y = 0;
    while (elt.offsetParent != null && elt.id.indexOf('WebPart') != 0) {
        pos.x += elt.offsetLeft;
        pos.y += elt.offsetTop;
        elt = elt.offsetParent;
    }
    return pos;
}
function StInsertAt(st, ich, stInsert) {
ULSglM:
    ;
    return st.substr(0, ich) + stInsert + st.substr(ich);
}
function WMultiple(w, wMult) {
ULSglM:
    ;
    return Math.round(w / wMult) * wMult;
}
function FBlankString(st) {
ULSglM:
    ;
    st = st.toString();
    st = st.replace(/\s/g, "");
    return st == "";
}
function StURL(stURL, stText) {
ULSglM:
    ;
    if (FBlankString(stURL))
        return STSHtmlEncode(stText);
    return "<a HREF=" + StAttrQuote(stURL) + ">" + STSHtmlEncode(stText) + "</a>";
}
function FrmLocalFieldName(stName) {
ULSglM:
    ;
    return FrmStFieldNameFactory(stName, "Local");
}
function fDataLoseConvert(fromType, toType) {
ULSglM:
    ;
    switch (fromType) {
    case "Text":
    case "Choice":
        switch (toType) {
        case "Number":
        case "Currency":
        case "DateTime":
            return true;
        }
        break;
    case "Note":
        switch (toType) {
        case "Text":
        case "Choice":
        case "MultiChoice":
        case "Number":
        case "Currency":
        case "DateTime":
            return true;
        }
        break;
    case "MultiChoice":
        switch (toType) {
        case "Text":
        case "Note":
        case "Choice":
        case "Number":
        case "Currency":
        case "DateTime":
            return true;
        }
        break;
    case "DateTime":
        switch (toType) {
        case "Text":
        case "Note":
        case "Choice":
        case "MultiChoice":
            return true;
        }
        break;
    case "Number":
    case "Currency":
        switch (toType) {
        case "Text":
        case "Note":
        case "Choice":
        case "MultiChoice":
        case "Boolean":
            return true;
        }
        break;
    }
    return false;
}
function Belong(elem, rg) {
    var i;

    if (rg == null)
        return false;
    for (i = 0; i < rg.length; i++) {
        if (elem.stName == rg[i].stName)
            return true;
    }
    return false;
}
function RgSetMinus(rg1, rg2) {
    var i;
    var rgRet = [];
    var cRet = 0;

    for (i = 0; i < rg1.length; i++) {
        if (!Belong(rg1[i], rg2)) {
            rgRet[cRet] = rg1[i];
            cRet++;
        }
    }
    return rgRet;
}
function GetAncestor(elem, tag) {
    while (elem != null && elem.tagName != tag) {
        elem = elem.parentNode;
    }
    return elem;
}
function GetTable(elem) {
ULSglM:
    ;
    return GetAncestor(elem, "TABLE");
}
function GetTr(elem) {
ULSglM:
    ;
    return GetAncestor(elem, "TR");
}
function SetDisplay(fld, disp, stDisplay, fRequired, iTarget) {
    if (fld == null)
        return;
    fld.fRequired = fRequired;
    var elem = ControlFromFld(fld);

    if (elem == null || elem.id == "onetidIOFile" && disp == "none")
        return;
    var tr = GetTr(elem);

    if (tr != null) {
        var rgth = tr.getElementsByTagName("TH");
        var th = null;

        if (rgth.length > 0)
            th = rgth[0];
        if (iTarget > 0) {
            var tbl = GetTable(tr);

            if (tbl != null) {
                var stVal = null;
                var cVal = 0;
                var ctrl = null;

                if ((Object(fld)).hasOwnProperty("rgChoices")) {
                    if (fld.fFillInChoice && typeof fld.GetFillInButtonControl != "undefined") {
                        ctrl = fld.GetFillInButtonControl();
                        if (typeof ctrl.checked != "undefined" && typeof fld.GetFillInControl != "undefined" && typeof GetValueAttribute(fld.GetFillInControl) != "undefined" && ctrl.checked) {
                            stVal = GetValueAttribute(fld.GetFillInControl());
                        }
                        if (stVal != null)
                            cVal++;
                    }
                    if (stVal == null || fld.format == "Checkboxes") {
                        var i;

                        for (i = 0; i < fld.rgChoices.length; i++) {
                            if ((fld.GetControl(i)).checked) {
                                cVal++;
                                if (cVal > 1)
                                    stVal += ";#" + fld.rgChoices[i].stValue;
                                else
                                    stVal = fld.rgChoices[i].stValue;
                                if (fld.format != "Checkboxes")
                                    break;
                            }
                        }
                    }
                    if (fld.stName != 'ContentType' && stVal == null && disp == "none")
                        stVal = fld.stValue;
                }
                else {
                    ctrl = fld.frm.FieldSubPart(fld, "Checkbox");
                    if (ctrl != null)
                        stVal = String(ctrl.checked ? 1 : 0);
                }
                tbl.moveRow(tr.rowIndex, Math.min(iTarget, tbl.rows.length - 1));
                if (fld.format == "Checkboxes" && stVal == null)
                    stVal = "";
                if (stVal != null) {
                    if (cVal > 1)
                        fld.SetValue(";#" + stVal + ";#;#");
                    else
                        fld.SetValue(stVal);
                }
            }
        }
        if (th != null) {
            var nobrs = th.getElementsByTagName("NOBR");

            if (nobrs.length > 0) {
                var nobr = nobrs[0];
                var strSav = nobr.innerHTML;

                if (stDisplay != "")
                    nobr.innerText = stDisplay;
                else
                    nobr.innerText = fld.stDisplay;
                nobr.innerHTML = nobr.innerHTML + strSav.substr(strSav.indexOf("<"));
            }
        }
        tr.style.display = disp;
        if (disp != "none") {
            ToogleRequired(tr, fld.fRequired);
            if (elem != null && elem.id != "onetidIOFile") {
                if (typeof fld.GetControl != "undefined")
                    elem = fld.GetControl();
                var elemBool = fld.frm.FieldSubPart(fld, "Checkbox");
                var boolFld = fld.frm.FieldSubPart(fld, "Checkbox") != null;

                if (boolFld)
                    elem = elemBool;
                if (elem.tagName == "INPUT" && elem.type != "hidden" || elem.tagName == "SELECT") {
                    if (elem.getAttribute("oldValue") != null) {
                        var curVal = GetValueAttribute(elem);

                        if (boolFld)
                            curVal = elem.checked ? "1" : "";
                        if (curVal == "") {
                            if (boolFld)
                                elem.checked = elem.getAttribute("oldValue") == "1";
                            else
                                elem.value = elem.getAttribute("oldValue");
                            var fldPost = fld.frm.FieldPost(fld);

                            if (fldPost != null && GetValueAttribute(fldPost) == "") {
                                if (boolFld)
                                    fldPost.value = elem.checked;
                                else
                                    fldPost.value = GetValueAttribute(elem);
                                fldPost.removeAttribute("oldValue");
                            }
                        }
                        elem.removeAttribute("oldValue");
                    }
                }
            }
        }
    }
}
function HideControl(fld) {
    SetDisplay(fld, "none", fld.stDisplay, false, 0);
}
function ShowControl(fld, fRequired, stDisplay, iRow) {
    SetDisplay(fld, "", stDisplay, fRequired, iRow);
}
function ShowListFields(frm) {
    var rgfld = frm.rgfld;
    var i;

    for (i = 0; i < rgfld.length; i++) {
        if (rgfld[i].stName != "ContentType")
            ShowControl(rgfld[i], rgfld[i].fRequired, "", 0);
    }
}
function SwitchControls(ctSelect, fSetDefault, fSetFocus) {
    var fShowCtSel = ctSelect.options.length > 1;
    var isel = fShowCtSel ? ctSelect.selectedIndex : 0;

    if (isel < 0) {
        ctSelect.selectedIndex = 0;
        isel = 0;
    }
    var ct = GetValueAttribute(ctSelect.options[isel]);
    var i;
    var rg = null;
    var rgHide = null;
    var ict;
    var rgcts = frmCurrent.rgcts;
    var rgctNames = frmCurrent.rgctNames;
    var rgflds = frmCurrent.rgfld;
    var ictRow = 1;
    var aeSave = document.activeElement;

    for (i = 0; i < rgctNames.length; i++) {
        if (rgctNames[i] == ct) {
            ict = i;
            rg = rgcts[i];
            break;
        }
    }
    if (rg != null) {
        var bFocus = false;
        var iRow = 1;

        for (i = 0; i < rg.length; i++) {
            var tp_fNewForm = typeof _g_tp_fNewForm == "undefined" ? undefined : _g_tp_fNewForm;
            var fld = frmCurrent.FindField(rg[i].stName);

            if (fld == null || fld.stName == 'ContentType')
                continue;
            fld.belongToCurrentContentType = true;
            if (!fShowCtSel && rg[i].stName == "ContentType")
                continue;
            if (rg[i].fHidden || rg[i].fReadOnly || !rg[i].fShowInFileDlg || !tp_fNewForm && !rg[i].fShowInEditForm || tp_fNewForm && !rg[i].fShowInNewForm) {
                HideControl(fld);
                continue;
            }
            if (fSetDefault && rg[i].hasOwnProperty("stDefault")) {
                SetFormControlValue(fld, rg[i].stDefault);
            }
            ShowControl(fld, rg[i].fRequired, rg[i].stDisplay, iRow + ictRow);
            iRow++;
            if (!bFocus && fSetFocus) {
                bFocus = fld.FieldFocus && fld.FieldFocus();
            }
        }
    }
    rgHide = RgSetMinus(rgflds, rgcts[ict]);
    if (rgHide != null) {
        for (i = 0; i < rgHide.length; i++) {
            if (rgHide[i].stName != "ContentType") {
                rgHide[i].belongToCurrentContentType = false;
                HideControl(rgHide[i]);
            }
        }
    }
    if (fSetFocus) {
        var ctFld = frmCurrent.FindField("ContentType");

        ctFld.FieldFocus();
    }
    if (typeof checkScroll == "function")
        checkScroll();
}
function ControlFromFld(fld) {
    if ((Object(fld)).hasOwnProperty("fDateOnly"))
        return fld.frm.FieldSubPart(fld, "Date");
    if ((Object(fld)).hasOwnProperty("stDesc"))
        return fld.frm.FieldSubPart(fld, "URL");
    if ((Object(fld)).hasOwnProperty("fPercent"))
        return fld.frm.FieldSubPart(fld, "Local");
    if ((Object(fld)).hasOwnProperty("fAllowHyperlink"))
        return fld.frm.FieldPost(fld);
    if ((Object(fld)).hasOwnProperty("stNumLines"))
        return fld.frm.FieldPost(fld);
    if ((Object(fld)).hasOwnProperty("isFileName")) {
        var ctrl = document.getElementById(fld.stName);

        if (ctrl == null)
            ctrl = document.getElementById("onetidIOFile");
        return ctrl;
    }
    if ((Object(fld)).hasOwnProperty("cchDisplaySize"))
        return fld.frm.FieldPost(fld);
    if ((Object(fld)).hasOwnProperty("rgGridChoices"))
        return fld.frm.FieldSubPart(fld, "RadioButtons:0");
    if ((Object(fld)).hasOwnProperty("rgChoices") && typeof fld.GetControl != "undefined")
        return GetTable(fld.GetControl());
    if ((Object(fld)).hasOwnProperty("recurrencePatternChoice")) {
        var stMonth = fld.stPrefix + "MonthlyRecurType:" + fld.stName;
        var fldMonth = fld.frm.FindField(stMonth);
        var ctl = (ControlFromFld(fldMonth)).parentNode;

        ctl = (GetTable(ctl)).parentNode;
        ctl = GetTable(ctl);
        return ctl;
    }
    var postCtl = fld.frm.FieldPost(fld);

    if (postCtl != null)
        return postCtl;
    return fld.frm.FieldSubPart(fld, "Checkbox");
    ;
}
function DefaultControls() {
ULSglM:
    ;
    var fld = frmCurrent.FindField("ContentType");
    var ict = 0;
    var sel = null;
    var rgcts = frmCurrent.rgcts;
    var rgctNames = frmCurrent.rgctNames;

    if (fld != null) {
        sel = fld.GetControl();
        var iopt;

        if (sel != null) {
            for (iopt = 0; iopt < sel.options.length; iopt++) {
                var ctName = GetValueAttribute(sel.options[iopt]);

                for (ict = 0; ict < rgctNames.length; ict++) {
                    if (rgctNames[ict] == ctName)
                        break;
                }
                var rgfld = rgcts[ict];

                if (rgfld != null && rgfld.length == 0) {
                    if (typeof sel.options.remove != "undefined") {
                        sel.options.remove(iopt);
                    }
                    iopt--;
                }
            }
        }
    }
    if (sel == null) {
        if (fld != null)
            fld.fHidden = true;
        ShowListFields(frmCurrent);
    }
    else {
        var tp_fNewForm = typeof _g_tp_fNewForm != "undefined" ? _g_tp_fNewForm : undefined;

        if (sel.options.length > 1) {
            var fFocus = true;
            var fldFN = frmCurrent.FindField("owsnewfileref");

            ShowControl(fld, false, fld.stDisplay, 1);
            SwitchControls(fld.GetControl(), tp_fNewForm, fFocus);
        }
        else {
            fld.fHidden = true;
            SwitchControls(fld.GetControl(), tp_fNewForm, false);
        }
    }
}
function BoolFromString2(str, def) {
ULSglM:
    ;
    if (str == null || str == "")
        return def;
    if (str == "true" || str == "TRUE")
        return true;
    return false;
}
function BoolFromString(str) {
ULSglM:
    ;
    return BoolFromString2(str, false);
}
function ToogleRequired(tr, fRequired) {
ULSglM:
    ;
    var fonts = tr.getElementsByTagName("FONT");

    if (fonts.length == 0)
        return;
    var font = fonts[0];

    if (fRequired)
        font.innerText = " *";
    else
        font.innerText = "";
}
function SetFormControlValue(fld, stValue) {
ULSglM:
    ;
    fld.stValue = stValue;
    var ctl = ControlFromFld(fld);

    if (ctl == null)
        return;
    ctl.value = stValue;
}
function MoveDisplayRow(tbl, cRow, id) {
    var tr = document.getElementById(id);

    if (tr != null && tbl != null) {
        tbl.moveRow(tr.rowIndex, Math.min(cRow, tbl.rows.length - 1));
        tr.style.display = "";
    }
}
$_global_bform();
