function ULSXWv(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="WebTaggingDialog.js";return o;}
Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.WebTaggingDialog = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog() {
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.application_Init = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$application_Init() {ULSXWv:;
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$5 = Microsoft.SharePoint.Taxonomy.ControlObject.get_termPickerDialog();
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$5) {
        return;
    }
    var $v_0 = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$5.get_args();
    if ($v_0) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1 = new Microsoft.SharePoint.Taxonomy.Tree(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$X());
        var $v_1 = new Microsoft.SharePoint.Taxonomy.TaxonomyDataSource();
        $v_1.set_rootNodeType(3);
        $v_1.set_sspId($v_0['sspIds']);
        $v_1.set_rootGuids($v_0['termSetIds']);
        $v_1.set_anchorTermId($v_0['anchorGuid']);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$A = $v_0['allowFillIn'];
        $v_1.set_mode(Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.webTaggingMode);
        if (SP.ScriptUtility.isNullOrUndefined($v_0['lcid'])) {
            Error.create('Please set a Lcid for the picker dialog');
        }
        $v_1.set_displayLcid($v_0['lcid']);
        $v_1.webTaggingAddTerm = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addTermToField;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.set_clientDataSource($v_1);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.set_readOnly(true);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.set_doubleClickDelegate(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$V);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.showTreeError = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$L;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.add_propertyChanged(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$W);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$C = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.onCancel;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$B().onclick = 'return false;';
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$B(), 'click', Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$C);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$I = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.onOKButtonClicked;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8().onclick = 'return false;';
        Microsoft.SharePoint.Taxonomy.TreeUtility.attachHandler(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8(), 'click', Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$I);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().Lcid = $v_0['lcid'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().InputFieldId = 'FieldEditorHiddenInput';
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().SspId = $v_0['sspIds'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().TermSetId = $v_0['termSetIds'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().AnchorId = $v_0['anchorGuid'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsMulti = $v_0['IsMutli'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsAddTerms = $v_0['isAddTerms'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsIgnoreFormatting = $v_0['isIgnoreFormatting'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsIncludeDeprecated = $v_0['isIncludeDeprecated'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsIncludePathData = $v_0['isIncludePathData'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsIncludeTermSetName = $v_0['isIncludeTermSetName'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsIncludeUnavailable = $v_0['isIncludeUnavailable'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsSpanTermSets = $v_0['isSpanTermSets'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsSpanTermStores = $v_0['isSpanTermStores'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsUseCommaAsDelimiter = $v_0['isUseCommaAsDelimiter'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().ExcludeKeyword = false;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsForTMTSearch = false;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().WebServiceUrl = $v_0['webServiceUrl'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().FieldName = $v_0['fieldName'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().FieldId = $v_0['fieldId'];
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().DisplayPickerButton = false;
        Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$Q(), 'display-none');
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$J = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$U;
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().addAllTermValidHandler(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$J);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().setMinimumHeight(60);
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$M($v_0['tags']);
        Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad('FieldEditor');
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$B().focus();
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.initialize();
        Sys.UI.DomElement.addCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0(), 'wt-float-right');
        Sys.UI.DomElement.addCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$N(), 'wt-float-left');
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addChildToFocusNode = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$addChildToFocusNode() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1 || !Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode()) {
        return;
    }
    else if (!Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermSetOpen(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode()) || !Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$A) {
        return;
    }
    if (Microsoft.SharePoint.Taxonomy.TaxonomyDataSource.isTermDeprecated(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode().get_data())) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$L(Microsoft.SharePoint.Taxonomy.ScriptResources.errorNoAddUnderDeprecated);
    }
    else {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode().addChildAndExpand(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_newNodeTemplate());
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$U = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$U($p0, $p1) {
    if (Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().get_allTermsValid()) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8().disabled = false;
    }
    else {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8().disabled = true;
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$M = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$M($p0) {
    if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        return;
    }
    var $v_0 = $p0.split(';');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if (SP.ScriptUtility.isNullOrEmptyString($v_0[$v_1])) {
            continue;
        }
        var $v_2 = $v_0[$v_1].split('|');
        if (!$v_2 || $v_2.length < 2) {
            Microsoft.SharePoint.Taxonomy.TreeUtility.debugShowError('Invalid tag format. The format shall be <name>|<guid>:<name2>|<guid2>.');
        }
        else {
            var $v_3 = $v_2[1];
            var $v_4 = $v_2[0];
            Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().addTerm($v_3, $v_4);
            if (!$v_1 && $v_3 !== Microsoft.SharePoint.Taxonomy.Term.invalidGuid && $v_3 !== Microsoft.SharePoint.Taxonomy.Term.unvalidatedGuid && $v_3 !== Microsoft.SharePoint.Taxonomy.Term.newTermGuid) {
                Microsoft.SharePoint.Taxonomy.Tree.set_defaultNodeID($v_2[1]);
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$L = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$L($p0) {
    Sys.UI.DomElement.removeCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$F(), 'display-none');
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$F().innerHTML = $p0;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$S = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$S() {ULSXWv:;
    if (!Sys.UI.DomElement.containsCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$F(), 'display-none')) {
        Sys.UI.DomElement.addCssClass(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$F(), 'display-none');
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$W = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$W($p0, $p1) {
    if ($p1.get_propertyName() === 'focusNode') {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$S();
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$R();
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$K) {
            Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$K = true;
            if (!SP.ScriptUtility.isNullOrEmptyString(Microsoft.SharePoint.Taxonomy.Tree.get_defaultNodeID())) {
                var $v_2 = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode();
                if ($v_2) {
                    ($v_2.get_dataSource()).expandToChildNodeById($v_2, Microsoft.SharePoint.Taxonomy.Tree.get_defaultNodeID());
                }
            }
            var $v_1 = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_roots().get_firstChild();
            if ($v_1 && $v_1.get_data()) {
                var $v_3 = $v_1.get_data().Mt;
                var $v_4 = '';
                if (!SP.ScriptUtility.isNullOrUndefined($v_3)) {
                    $v_4 = $v_3;
                }
                Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$H = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.getMailToLink($v_4, $v_1.get_text());
                if (Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$H.startsWith('mailto:?')) {
                    var $v_6 = $get('SendFeedbackTr');
                    if ($v_6) {
                        Sys.UI.DomElement.addCssClass($v_6, 'display-none');
                    }
                }
                var $v_5 = $v_1.get_data().Io;
                if (!SP.ScriptUtility.isNullOrUndefined($v_5) && $v_5 && Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$A) {
                    var $v_7 = $get('addNewTermDescription');
                    if ($v_7) {
                        Sys.UI.DomElement.removeCssClass($v_7, 'display-none');
                    }
                    var $v_8 = $get('ctl00_PlaceHolderDialogHeaderSection_PlaceHolderDialogDescription_addNewTerm');
                    if ($v_8) {
                        Sys.UI.DomElement.removeCssClass($v_8, 'display-none');
                    }
                }
            }
        }
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$5.autoSize();
        var $v_0 = $get('mainTable');
        if ($v_0) {
            $v_0.style.height = '';
            $v_0.style.width = '';
        }
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$R = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$R() {ULSXWv:;
    document.body.style.overflow = 'visible';
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.onOKButtonClicked = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$onOKButtonClicked(e) {ULSXWv:;
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().validateAll(false);
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().focus(false);
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().callFunctionAfterValidation(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$P);
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.onCancel = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$onCancel(e) {ULSXWv:;
    Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$B(), 'click', Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$C);
    SP.UI.ModalDialog.get_childDialog().close(0);
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$V = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$V($p0) {
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addToFieldControl();
    $p0.rawEvent.cancelBubble = true;
    $p0.preventDefault();
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addToFieldControl = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$addToFieldControl() {ULSXWv:;
    var $v_0 = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1.get_focusNode();
    Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addTermToField($v_0);
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.addTermToField = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$addTermToField(node) {ULSXWv:;
    if (node && node.get_nodeType() === 4 && !node.get_isDeprecated() && node.get_data() && node.get_data().It && node.get_parentNode()) {
        if (Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().IsMulti) {
            Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().addTerm(node.get_id(), node.get_text());
        }
        else {
            var $v_0 = new Microsoft.SharePoint.Taxonomy.Term(node.get_text(), node.get_id());
            Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().replaceTerm($v_0);
        }
    }
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.sendFeedback = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$sendFeedback() {ULSXWv:;
    window.location.href = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$H;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.getMailToLink = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$getMailToLink(email, name) {ULSXWv:;
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('mailto:');
    $v_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(email));
    $v_0.append('?subject=');
    $v_0.append(String.format(Microsoft.SharePoint.Taxonomy.ScriptResources.mailtoLinkTitle, SP.Utilities.HttpUtility.urlKeyValueEncode(name)));
    return $v_0.toString();
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$X = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$X() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$9) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$9 = $get('MetadataTreeControl');
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$9) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$9;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$Q = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$Q() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$D) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$D = $get('EditorContainer');
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$D;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$F = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$F() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$E) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$E = $get('ErrorSection');
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$E;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2 = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$2() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$G) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$G = new Microsoft.SharePoint.Taxonomy.ControlObject(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0());
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$G;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0 = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$0() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$6) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$6 = $get('FieldEditor');
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$6) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$6;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$B = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$B() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$4) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$4 = $get('CancelButton');
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$4) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$4;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8 = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$8() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$7) {
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$7 = $get('ctl00_OkButton');
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$7) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$7;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$N = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$get_$N() {ULSXWv:;
    if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$3) {
        var $v_0 = Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$0().nextSibling;
        while ($v_0 && $v_0.nodeType !== 1) {
            $v_0 = $v_0.nextSibling;
        }
        Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$3 = $v_0;
        if (!Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$3) {
            throw Error.create(Microsoft.SharePoint.Taxonomy.ScriptResources.errorElementNotInDOM);
        }
    }
    return Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$3;
}
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$P = function Microsoft_SharePoint_Taxonomy_WebTaggingDialog$$P() {ULSXWv:;
    SP.UI.ModalDialog.get_childDialog().set_returnValue(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$2().getRawText());
    Microsoft.SharePoint.Taxonomy.TreeUtility.detachHandler(Microsoft.SharePoint.Taxonomy.WebTaggingDialog.get_$8(), 'click', Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$I);
    SP.UI.ModalDialog.get_childDialog().close(1);
}


Microsoft.SharePoint.Taxonomy.WebTaggingDialog.registerClass('Microsoft.SharePoint.Taxonomy.WebTaggingDialog');
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$5 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$J = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$Z = SP.Utilities.Utility.layoutS_LATESTVERSION_URL + 'WebTaggingDialog.aspx';
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$1 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$K = false;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$H = '';
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$A = false;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$9 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$O = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$Y = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$D = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$E = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$G = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$6 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$4 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$C = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$7 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$I = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$3 = null;
Microsoft.SharePoint.Taxonomy.WebTaggingDialog.$T = null;
