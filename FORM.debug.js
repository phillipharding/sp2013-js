function $_global_form() {
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
    OnMtgAttendeeStatusChangeParams_initPrototype();
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("form.js");
    }
    ;
}
function ULSopi() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "form.commentedjs";
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
ULSopi:
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
ULSopi:
    ;
    ExtendedRichTextSupport.prototype.editors = undefined;
}
function ExtendedRichTextSupport(arr) {
ULSopi:
    ;
    this.editors = arr;
}
function ExtendedRichTextSupportEditors(overrides) {
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    return strBaseElementID + "_iframe";
}
function RTE_GetEditorTextArea(strBaseElementID) {
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    return true;
}
function RTE_EditorWithTheFocus() {
ULSopi:
    ;
    return g_strRTETextEditorWithTheFocus;
}
function RTE_PrevEditor() {
ULSopi:
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
    ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    return "</td></tr></table></td>";
}
function RTE_TB_GenerateToolBarSeparatorHtml() {
ULSopi:
    ;
    return "<td class=\"ms-separator\" unselectable=\"on\">|</td>";
}
function RTE_TB_GenerateToolBarLineBreakHtml() {
ULSopi:
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
ULSopi:
    ;
    var elemMenu = document.getElementById(g_strRTETextEditorPullDownMenuID);

    if (null == elemMenu) {
        var doc = window.parent.document;

        elemMenu = doc.getElementById(g_strRTETextEditorPullDownMenuID);
    }
    return elemMenu;
}
function RTE_DD_GetMenuFrame() {
ULSopi:
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
ULSopi:
    ;
    return (RTE_DD_GetMenuElement()).getAttribute(g_strRTEBaseElementIDAttributeName);
}
function RTE_DD_GetMenuButtonMnemonic() {
ULSopi:
    ;
    return (RTE_DD_GetMenuElement()).getAttribute(g_strRTEButtonMnemonicAttributeName);
}
function RTE_DD_MenuIsOpen() {
ULSopi:
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
    ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    return "<table class=\"ms-rtedropdown\" id=\"" + g_strRTEMenuTableElementName + "\" cellspacing=\"0\" border=\"0\" unselectable=\"on\"><tr unselectable=\"on\">";
}
function RTE_DD_GenerateMenuCloseHtml() {
ULSopi:
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
ULSopi:
    ;
    var elemMenuItem = (RTE_DD_GetMenuFrame()).document.getElementById(g_strRTEMenuItemBaseName + String(iMenuItem));

    return elemMenuItem;
}
function RTE_DD_GetHighlightedMenuItem() {
ULSopi:
    ;
    return (RTE_DD_GetMenuFrame()).g_elemRTEHighlightedMenuItem;
}
function RTE_DD_SetHighlightedMenuItem(elem) {
ULSopi:
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
ULSopi:
    ;
    elemMenuItem.className = RTE_RemoveClassFromClassList(elemMenuItem.className, g_strRTEHoverClassName);
}
function RTE_DD_HighlightOnMenuItem(elemMenuItem) {
ULSopi:
    ;
    elemMenuItem.className = RTE_AddClassToClassList(elemMenuItem.className, g_strRTEHoverClassName);
}
function RTE_DD_ClearHighlightedMenuItem() {
ULSopi:
    ;
    RTE_DD_ClearHighlightOnMenuItem(RTE_DD_GetHighlightedMenuItem());
}
function RTE_DD_SetHighlightOnMenuItem(elemMenuItem) {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();

    RTE_DD_CloseMenu();
    RTE_GiveEditorFocus(strBaseElementID);
    RTE_RestoreSelection(strBaseElementID);
    RTE_ExecuteCommandOnSelection(RTE_DD_GetMenuBaseElementID(), strCommandToPerform, false, strCommandValue);
}
function RTE_DD_StartAction(strFunctionName, strParameter) {
ULSopi:
    ;
    var strBaseElementID = RTE_DD_GetMenuBaseElementID();

    RTE_DD_CloseMenu();
    RTE_GiveEditorFocus(strBaseElementID);
    RTE_RestoreSelection(strBaseElementID);
    RTE_ExecuteFunctionOnSelection(RTE_DD_GetMenuBaseElementID(), strFunctionName, strParameter);
}
function RTE_DD_Item_OnFocus(elemMenuItemCell) {
ULSopi:
    ;
    var elemMenu = RTE_DD_GetMenuElement();

    elemMenu.setAttribute(g_strRTEMenuOpeningAttributeName, "0");
    RTE_DD_SetHighlightOnMenuItem(elemMenuItemCell);
}
function RTE_DD_Item_OnBlur() {
ULSopi:
    ;
    g_iRTEHighlightedMenuItem = -1;
    window.setTimeout("RTE_OnItemBlurTestCloseMenu()", 30);
}
function RTE_OnItemBlurTestCloseMenu() {
ULSopi:
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
ULSopi:
    ;
    if (null != elemTD) {
        RTE_DD_SetHighlightOnMenuItem(elemTD);
    }
}
function RTE_DDItem_OnMouseOut(elemTD) {
ULSopi:
    ;
    if (null != elemTD) {
        RTE_DD_ClearHighlightOnMenuItem(elemTD);
    }
}
var g_rgstrRTEMenuHtml;
var g_strRTEColorMatrixMenuItemPrefixHtml;
var g_strRTEColorMatrixMenuItemSufffixHtml;

function RTE_DD_OpenFontNameOrSizeSelector(strBaseElementID, strWebLanguage, fGeneratingFontNameSelector) {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    return document.getElementById(g_strRTEDialogHelperID);
}
function RTE_GetSortedFontNames() {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var strMnemonic = g_strRTEInsertRowMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertRowSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertRowSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var strMnemonic = g_strRTEInsertColumnMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertColumnSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertColumnSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var strMnemonic = g_strRTEInsertCellMnemonic;
    var rgoMenuInfo = RTE_DD_GetInsertCellSelectorUnformattedHtml(strBaseElementID, strWebLanguage);
    var strMenuHtml = rgoMenuInfo[0];
    var cMenuItems = rgoMenuInfo[1];

    RTE_DD_OpenMenu(strBaseElementID, strMnemonic, strMenuHtml, cMenuItems);
}
function RTE_DD_GetInsertCellSelectorUnformattedHtml(strBaseElementID, strWebLanguage) {
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var elem = RTE_GetCurrentElement(strBaseElementID);

    return RTE_GetNearestContainingParentElementOfType(strBaseElementID, elem, strTagName);
}
function RTE_GetNearestContainingElementOfTypes(strBaseElementID, aTagNames) {
ULSopi:
    ;
    var elem = RTE_GetCurrentElement(strBaseElementID);

    return RTE_GetNearestContainingParentElementOfTypes(strBaseElementID, elem, aTagNames);
}
function RTE_GetContainedElements(strBaseElementID) {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    RTE_MergeWithDirection(strBaseElementID, "right");
}
function RTE_MergeWithLeft(strBaseElementID) {
ULSopi:
    ;
    RTE_MergeWithDirection(strBaseElementID, "left");
}
function RTE_MergeWithAbove(strBaseElementID) {
ULSopi:
    ;
    RTE_MergeWithDirection(strBaseElementID, "above");
}
function RTE_MergeWithBelow(strBaseElementID) {
ULSopi:
    ;
    RTE_MergeWithDirection(strBaseElementID, "below");
}
function RTE_MergeWithDirection(strBaseElementID, dir) {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    function methodGenerate(strBaseElementID, strWebLanguage) {
    ULSopi:
        ;
        return RTE_TB_GenerateToolBarSeparatorHtml();
    }
    this.Generate = methodGenerate;
}
function C_RTE_TB_LineBreak() {
ULSopi:
    ;
    function methodGenerate(strBaseElementID, strWebLanguage) {
    ULSopi:
        ;
        return RTE_TB_GenerateToolBarLineBreakHtml();
    }
    this.Generate = methodGenerate;
}
function C_RTE_TB_SetEnabledAlways() {
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
        ;
        RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledWhenRemoveFormatEnabled() {
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
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
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
        ;
        RTE_TB_SetEnabledFromCommandEnabled(strBaseElementID, docEditor, this.button['strMnemonic'], this.button['strMnemonic']);
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledFromCommandValue() {
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
        ;
        RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
        RTE_TB_SetCheckFromCommandValue(strBaseElementID, docEditor, this.button['strMnemonic']);
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledFromCommandValueIfNotInTable() {
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
        ;
        if (aElemChain[0] != "TABLE" && aElemChain[0] != "TR") {
            RTE_TB_ClearButtonDisabled(RTE_TB_GetToolBarButton(strBaseElementID, this.button['strMnemonic']));
            RTE_TB_SetCheckFromCommandValue(strBaseElementID, docEditor, this.button['strMnemonic']);
        }
    }
    this.SetEnabled = methodSetEnabled;
}
function C_RTE_TB_SetEnabledIfInElement(strElement) {
ULSopi:
    ;
    function methodSetEnabled(strBaseElementID, docEditor, aElemChain) {
    ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    ShowPartAttachment();
}
function ShowPart1() {
ULSopi:
    ;
    (document.getElementById("partAttachment")).style.display = "none";
    (document.getElementById("part1")).style.display = "block";
    if (window.frameElement != null && typeof window.frameElement.autoSize == "function")
        window.frameElement.autoSize();
    if (window.frameElement != null && typeof window.frameElement.SetFirstFocus == "function")
        window.frameElement.SetFirstFocus(true);
}
function ShowPartAttachment() {
ULSopi:
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
ULSopi:
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
ULSopi:
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
ULSopi:
    ;
    var ret = document.getElementById(elem);

    if (ret == null)
        ret = (document.getElementsByName(elem))[0];
    return ret;
}
function RemoveLocal(RowID, FileID) {
ULSopi:
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
ULSopi:
    ;
    RemoveAttachmentFromServer(guid, 0);
}
function RemoveAttachmentFromServer(guid, bRecycleBinEnabled) {
ULSopi:
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
function SetChoiceOption(elementId) {
ULSopi:
    ;
    var elem = document.getElementById(elementId);

    if (elem != null)
        elem.checked = true;
}
function SetFocusOnControl(elementId) {
ULSopi:
    ;
    var elem = document.getElementById(elementId);

    if (elem != null) {
        elem.focus();
        elem.select();
    }
}
function ChangeFillinTextTabindex(fillintextId, checkboxId) {
ULSopi:
    ;
    var elem = document.getElementById(checkboxId);
    var tabindex = -1;

    if (elem != null && typeof elem != "undefined" && (elem.type == "checkbox" || elem.type == "radio"))
        tabindex = elem.checked ? 0 : -1;
    SetControlTabIndex(fillintextId, tabindex);
}
function SetControlTabIndex(elementId, iTabindex) {
ULSopi:
    ;
    var elem = document.getElementById(elementId);

    if (elem != null) {
        elem.tabIndex = iTabindex;
    }
}
function TestURL(elementId) {
ULSopi:
    ;
    var stURL = "";
    var elem = document.getElementById(elementId);

    if (elem != null) {
        stURL = StURLNormalize(TrimWhiteSpaces(elem.value));
    }
    if (stURL == "" || !IsSafeHref(stURL))
        return;
    var idx = stURL.indexOf("://");

    if (idx + 3 == stURL.length)
        return;
    if (stURL.substr(0, 7) == "mailto:")
        open(stURL, "_self");
    else
        open(stURL, "_blank");
}
function UploadDocuments() {
ULSopi:
    ;
    if (typeof fCtl != "undefined" && fCtl) {
        var elem = document.getElementById("idUploadCtl");

        if (typeof elem.MultipleUpload == 'function')
            elem.MultipleUpload();
    }
    else {
        return true;
    }
    return undefined;
}
function PreSaveItem() {
ULSopi:
    ;
    if ("function" == typeof PreSaveAction) {
        return PreSaveAction();
    }
    return true;
}
function SurveyPrompt() {
ULSopi:
    ;
    alert(Strings.STS.L_SavePartialResponse1_text);
    return PreSaveItem();
}
function OnMtgAttendeeStatusChangeParams_initPrototype() {
ULSopi:
    ;
    OnMtgAttendeeStatusChangeParams.prototype.respFieldClientID = null;
    OnMtgAttendeeStatusChangeParams.prototype.statusNoResponse = null;
    OnMtgAttendeeStatusChangeParams.prototype.statusAccepted = null;
    OnMtgAttendeeStatusChangeParams.prototype.statusDeclined = null;
    OnMtgAttendeeStatusChangeParams.prototype.statusTentative = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailSubjectNoResponse = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailSubjectAccepted = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailSubjectDeclined = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailSubjectTentative = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailBodyNoResponse = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailBodyAccepted = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailBodyDeclined = null;
    OnMtgAttendeeStatusChangeParams.prototype.emailBodyTentative = null;
    OnMtgAttendeeStatusChangeParams.prototype.lblSubjectId = null;
    OnMtgAttendeeStatusChangeParams.prototype.lblBodyId = null;
    OnMtgAttendeeStatusChangeParams.prototype.cbSendEmailId = null;
}
function OnMtgAttendeeStatusChangeParams() {
}
function OnMtgAttendeeStatusChangeEvent() {
ULSopi:
    ;
    if (typeof OnMtgAttendeeStatusChangeWrapper == "function")
        OnMtgAttendeeStatusChangeWrapper(false);
}
function OnMtgAttendeeStatusChange(bInit, params) {
    var statusVal = (document.getElementById(params.respFieldClientID)).value;
    var subjectStr;
    var emailBodyStr;

    switch (statusVal) {
    case params.statusNoResponse:
        subjectStr = params.emailSubjectNoResponse;
        emailBodyStr = params.emailBodyNoResponse;
        break;
    case params.statusAccepted:
        subjectStr = params.emailSubjectAccepted;
        emailBodyStr = params.emailBodyAccepted;
        break;
    case params.statusDeclined:
        subjectStr = params.emailSubjectDeclined;
        emailBodyStr = params.emailBodyDeclined;
        break;
    case params.statusTentative:
        subjectStr = params.emailSubjectTentative;
        emailBodyStr = params.emailBodyTentative;
        break;
    }
    (document.getElementById(params.lblSubjectId)).innerHTML = STSHtmlEncode(subjectStr);
    (document.getElementById("MtgAttendeeEmailSubjectPhrase")).value = subjectStr;
    (document.getElementById(params.lblBodyId)).innerHTML = STSHtmlEncode(emailBodyStr);
    (document.getElementById("MtgAttendeeEmailBodyPhrase")).value = emailBodyStr;
    (document.getElementById("OWS:Status:Dropdown")).value = statusVal;
    if (!bInit)
        (document.getElementById(params.cbSendEmailId)).checked = true;
}
$_global_form();
