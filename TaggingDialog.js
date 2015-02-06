function ULSwXo(){var o=new Object;o.ULSTeamName="Office Server";o.ULSFileName="TaggingDialog.js";return o;}

Type.registerNamespace('Microsoft.SharePoint.Taxonomy');

Microsoft.SharePoint.Taxonomy.TaggingDialog = function Microsoft_SharePoint_Taxonomy_TaggingDialog() {
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.loadDialog = function Microsoft_SharePoint_Taxonomy_TaggingDialog$loadDialog() {ULSwXo:;
    Microsoft.SharePoint.Taxonomy.TaggingDialog.$3 = Microsoft.SharePoint.Taxonomy.TaggingDialog.onCancel;
    Microsoft.SharePoint.Taxonomy.TaggingDialog.get_$4().onclick = 'return false;';
    $addHandler(Microsoft.SharePoint.Taxonomy.TaggingDialog.get_$4(), 'click', Microsoft.SharePoint.Taxonomy.TaggingDialog.$3);
    var $v_0 = SP.UI.ModalDialog.get_childDialog().get_args();
    if ($v_0) {
        SP.UI.ModalDialog.get_childDialog().set_returnValue(SP.UI.ModalDialog.get_childDialog().get_args());
        $addHandler(document.body, 'keydown', Microsoft.SharePoint.Taxonomy.TaggingDialog.$7);
        document.body.focus();
        var $v_1 = $v_0.Matches;
        if ($v_1) {
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2].IsAmbiguous;
                if ($v_3) {
                    Microsoft.SharePoint.Taxonomy.TaggingDialog.$5 = $v_1[$v_2].DefaultLabel + '|00000000-0000-0000-0000-000000000000';
                    $v_1[$v_2].IsAmbiguous = false;
                    Microsoft.SharePoint.Taxonomy.TaggingDialog.$2 = $v_2;
                    var $v_4 = document.createElement('TABLE');
                    Sys.UI.DomElement.addCssClass($v_4, 'ms-taxonomy-ambiguous-table');
                    var $v_5 = document.createElement('TBODY');
                    $v_5.id = 'disambiguationTableId';
                    var $v_6 = document.createElement('TR');
                    var $v_7 = document.createElement('TH');
                    $v_7.innerHTML = Microsoft.SharePoint.Taxonomy.ScriptResources.ambiguationChoice;
                    var $v_8 = document.createElement('TH');
                    $v_8.innerHTML = Microsoft.SharePoint.Taxonomy.ScriptResources.ambiguationUsedIn;
                    var $v_9 = document.createElement('TH');
                    $v_9.innerHTML = Microsoft.SharePoint.Taxonomy.ScriptResources.ambiguationDescription;
                    var $v_A = document.createElement('TH');
                    $v_A.innerHTML = Microsoft.SharePoint.Taxonomy.ScriptResources.ambiguationSynonym;
                    Sys.UI.DomElement.addCssClass($v_7, 'ms-taxonoy-ambiguous-header');
                    Sys.UI.DomElement.addCssClass($v_8, 'ms-taxonoy-ambiguous-header');
                    Sys.UI.DomElement.addCssClass($v_9, 'ms-taxonoy-ambiguous-header');
                    Sys.UI.DomElement.addCssClass($v_A, 'ms-taxonoy-ambiguous-header');
                    $v_6.appendChild($v_7);
                    $v_6.appendChild($v_8);
                    $v_6.appendChild($v_9);
                    $v_6.appendChild($v_A);
                    $v_5.appendChild($v_6);
                    var $v_B = $v_1[$v_2].DisambiguationData;
                    var $v_C = false;
                    if ($v_B) {
                        for (var $v_E = 0; $v_E < $v_B.length; $v_E++) {
                            var $v_F = document.createElement('TR');
                            if ($v_C) {
                                Sys.UI.DomElement.addCssClass($v_F, 'ms-taxonomy-ambiguous-alternate');
                            }
                            $v_C = !$v_C;
                            var $v_G = document.createAttribute('returnValue');
                            var $v_H = $v_B[$v_E].DefaultLabel + '|' + $v_B[$v_E].Id;
                            $v_G.value = $v_H;
                            $v_F.attributes.setNamedItem($v_G);
                            $addHandler($v_F, 'mouseup', Microsoft.SharePoint.Taxonomy.TaggingDialog.$8);
                            if (!$v_E) {
                                Sys.UI.DomElement.addCssClass($v_F, 'ms-taxonomy-ambiguous-highlighted');
                                Microsoft.SharePoint.Taxonomy.TaggingDialog.$1($v_H);
                            }
                            var $v_I = document.createElement('TD');
                            $v_I.innerHTML = SP.Utilities.HttpUtility.htmlEncode($v_B[$v_E].DefaultLabel);
                            Sys.UI.DomElement.addCssClass($v_I, 'ms-taxonomy-ambiguous-column');
                            var $v_J = document.createElement('TD');
                            var $v_K = $v_B[$v_E].TermsetAndPaths;
                            if ($v_K) {
                                $v_J.innerHTML = $v_K[0];
                                if ($v_K.length > 1) {
                                    for (var $v_N = 1; $v_N < $v_K.length; $v_N++) {
                                        $v_J.innerHTML += '<br />' + SP.Utilities.HttpUtility.htmlEncode($v_K[$v_N]);
                                    }
                                }
                            }
                            Sys.UI.DomElement.addCssClass($v_J, 'ms-taxonomy-ambiguous-column');
                            var $v_L = document.createElement('TD');
                            $v_L.innerHTML = SP.Utilities.HttpUtility.htmlEncode($v_B[$v_E].Description);
                            Sys.UI.DomElement.addCssClass($v_L, 'ms-taxonomy-ambiguous-column');
                            var $v_M = document.createElement('TD');
                            $v_M.innerHTML = SP.Utilities.HttpUtility.htmlEncode($v_B[$v_E].Synonyms);
                            Sys.UI.DomElement.addCssClass($v_M, 'ms-taxonomy-ambiguous-column');
                            $v_F.appendChild($v_I);
                            $v_F.appendChild($v_J);
                            $v_F.appendChild($v_L);
                            $v_F.appendChild($v_M);
                            $v_5.appendChild($v_F);
                        }
                    }
                    $v_4.appendChild($v_5);
                    var $v_D = $get('bodyMain');
                    $v_D.style.cursor = 'default';
                    $v_D.appendChild($v_4);
                    break;
                }
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.$7 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$$7($p0) {
    if ($p0.keyCode === 38 || $p0.keyCode === 40) {
        Microsoft.SharePoint.Taxonomy.TaggingDialog.$9($p0.keyCode === 38);
    }
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.onCancel = function Microsoft_SharePoint_Taxonomy_TaggingDialog$onCancel(e) {ULSwXo:;
    $removeHandler(Microsoft.SharePoint.Taxonomy.TaggingDialog.get_$4(), 'click', Microsoft.SharePoint.Taxonomy.TaggingDialog.$3);
    Microsoft.SharePoint.Taxonomy.TaggingDialog.$1(Microsoft.SharePoint.Taxonomy.TaggingDialog.$5);
    SP.UI.ModalDialog.get_childDialog().close(0);
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.get_$4 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$get_$4() {ULSwXo:;
    if (!Microsoft.SharePoint.Taxonomy.TaggingDialog.$0) {
        Microsoft.SharePoint.Taxonomy.TaggingDialog.$0 = $get('CancelButton');
        if (!Microsoft.SharePoint.Taxonomy.TaggingDialog.$0) {
            throw Error.create('Cancel Button not found');
        }
    }
    return Microsoft.SharePoint.Taxonomy.TaggingDialog.$0;
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.$8 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$$8($p0) {
    var $v_0 = $p0.target;
    while ($v_0 && $v_0.tagName !== 'TR') {
        $v_0 = $v_0.parentNode;
    }
    if ($v_0 && !Sys.UI.DomElement.containsCssClass($v_0, 'ms-taxonomy-ambiguous-highlighted')) {
        Microsoft.SharePoint.Taxonomy.TaggingDialog.$6();
        Microsoft.SharePoint.Taxonomy.TaggingDialog.$1($v_0.attributes.getNamedItem('returnValue').value);
        Sys.UI.DomElement.addCssClass($v_0, 'ms-taxonomy-ambiguous-highlighted');
    }
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.$6 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$$6() {ULSwXo:;
    var $v_0 = $get('disambiguationTableId');
    if ($v_0) {
        for (var $v_1 = 0; $v_1 < $v_0.childNodes.length; $v_1++) {
            if (Sys.UI.DomElement.containsCssClass($v_0.childNodes[$v_1], 'ms-taxonomy-ambiguous-highlighted')) {
                Sys.UI.DomElement.removeCssClass($v_0.childNodes[$v_1], 'ms-taxonomy-ambiguous-highlighted');
                break;
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.$9 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$$9($p0) {
    var $v_0 = $get('disambiguationTableId');
    if ($v_0) {
        for (var $v_1 = 1; $v_1 < $v_0.childNodes.length; $v_1++) {
            if (Sys.UI.DomElement.containsCssClass($v_0.childNodes[$v_1], 'ms-taxonomy-ambiguous-highlighted')) {
                Sys.UI.DomElement.removeCssClass($v_0.childNodes[$v_1], 'ms-taxonomy-ambiguous-highlighted');
                if ($p0) {
                    var $v_2 = $v_1 - 1;
                    if ($v_2 < 1) {
                        $v_2 = $v_0.childNodes.length - 1;
                    }
                    Sys.UI.DomElement.addCssClass($v_0.childNodes[$v_2], 'ms-taxonomy-ambiguous-highlighted');
                    Microsoft.SharePoint.Taxonomy.TaggingDialog.$1($v_0.childNodes[$v_2].attributes.getNamedItem('returnValue').value);
                }
                else {
                    var $v_3 = $v_1 + 1;
                    if ($v_3 >= $v_0.childNodes.length) {
                        $v_3 = 1;
                    }
                    Sys.UI.DomElement.addCssClass($v_0.childNodes[$v_3], 'ms-taxonomy-ambiguous-highlighted');
                    Microsoft.SharePoint.Taxonomy.TaggingDialog.$1($v_0.childNodes[$v_3].attributes.getNamedItem('returnValue').value);
                }
                break;
            }
        }
    }
}
Microsoft.SharePoint.Taxonomy.TaggingDialog.$1 = function Microsoft_SharePoint_Taxonomy_TaggingDialog$$1($p0) {
    var $v_0 = SP.UI.ModalDialog.get_childDialog().get_args().Matches;
    if ($v_0) {
        var $v_1 = $p0.split('|');
        $v_0[Microsoft.SharePoint.Taxonomy.TaggingDialog.$2].Id = $p0.substring($v_1[0].length + 1, $p0.length);
        $v_0[Microsoft.SharePoint.Taxonomy.TaggingDialog.$2].DefaultLabel = $v_1[0];
    }
}


Microsoft.SharePoint.Taxonomy.TaggingDialog.registerClass('Microsoft.SharePoint.Taxonomy.TaggingDialog');
function taggingdialog_initialize() {ULSwXo:;
Microsoft.SharePoint.Taxonomy.TaggingDialog.$3 = null;
Microsoft.SharePoint.Taxonomy.TaggingDialog.$5 = null;
Microsoft.SharePoint.Taxonomy.TaggingDialog.$0 = null;
Microsoft.SharePoint.Taxonomy.TaggingDialog.$2 = 0;
};
taggingdialog_initialize();

RegisterModuleInit("TaggingDialog.js", taggingdialog_initialize);

if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
	window.setTimeout(Microsoft.SharePoint.Taxonomy.TaggingDialog.loadDialog, 0);
}
else
{
	_spBodyOnLoadFunctionNames.push("Microsoft.SharePoint.Taxonomy.TaggingDialog.loadDialog");
}

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("TaggingDialog.js");
}
