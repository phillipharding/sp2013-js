Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof(CUI.Page.PageComponent) == "undefined")
{
  CUI.Page.ICommandHandler=function(){};
  CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
  CUI.Page.PageComponent=function(){};
  CUI.Page.PageComponent.prototype={init:function(){},getGlobalCommands:function(){return null;},getFocusedCommands:function(){return null;},handleCommand:function(commandId,properties,sequence){return false;},canHandleCommand:function(commandId){return false;},isFocusable:function(){return false;},receiveFocus:function(){return false;},yieldFocus:function(){return true;},getId:function(){return'PageComponent';}};
  CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent',null,CUI.Page.ICommandHandler);
}


Type.registerNamespace('SP.UI.Spellcheck');

SP.UI.Spellcheck.SpellChecker = function SP_UI_Spellcheck_SpellChecker() {
}
SP.UI.Spellcheck.SpellChecker._createScreen$p = function SP_UI_Spellcheck_SpellChecker$_createScreen$p() {
    if (!SP.UI.Spellcheck.SpellChecker._dlg$p) {
        SP.UI.Spellcheck.SpellChecker._dlg$p = SP.UI.ModalDialog.showWaitScreenSize(SP.Publishing.Resources.spellcheckerWaitScreenTitle, SP.Publishing.Resources.spellcheckerWaitScreenText, SP.UI.Spellcheck.SpellingEventHandler.OnWaitingScreenCallback, SP.UI.Spellcheck.SpellChecker._autoSizeParam$p, SP.UI.Spellcheck.SpellChecker._autoSizeParam$p);
    }
}
SP.UI.Spellcheck.SpellChecker._displayNoSpellerMessage$i = function SP_UI_Spellcheck_SpellChecker$_displayNoSpellerMessage$i() {
    if (SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i) {
        SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i.innerHTML = SP.Publishing.Resources.spellingNoSpeller;
    }
    else {
        addNotification(SP.Publishing.Resources.spellingNoSpeller, false);
        SP.UI.Spellcheck.SpellChecker._removeScreen$i();
    }
}
SP.UI.Spellcheck.SpellChecker._removeScreen$i = function SP_UI_Spellcheck_SpellChecker$_removeScreen$i() {
    if (SP.UI.Spellcheck.SpellChecker._dlg$p) {
        SP.UI.Spellcheck.SpellChecker._dlg$p.close(SP.UI.DialogResult.OK);
        SP.UI.Spellcheck.SpellChecker._dlg$p = null;
    }
}
SP.UI.Spellcheck.SpellChecker.Load = function SP_UI_Spellcheck_SpellChecker$Load() {
    if (SP.UI.Spellcheck.Externs.spellcheck) {
        document.body.spellcheck = false;
        SP.UI.Spellcheck.SpellChecker.registerSpellingHandler();
        var styleSheet = RTE.RteUtility.getFirstStyleSheet();
        RTE.RteUtility.addStyleSheetRule(styleSheet, '.' + SP.UI.Spellcheck._spellingError._cssClassName$i, 'background: url(\'/_layouts/images/spell_underline.gif\') repeat-x 0 100%;padding-bottom:1px;z-index:20;', 0);
        RTE.SafeHtml.addDisallowedPasteClass(SP.UI.Spellcheck._spellingError._cssClassName$i);
        SP.UI.Spellcheck.SpellChecker._currentLanguage$i = SP.UI.Spellcheck.Externs.spellcheck.defaultLanguage;
        RTE.Imports.ExecuteOrDelayUntilScriptLoaded(SP.UI.Spellcheck._spellcheckComponent._updatePageManager$i, 'sp.ribbon.js');
    }
}
SP.UI.Spellcheck.SpellChecker.clear = function SP_UI_Spellcheck_SpellChecker$clear() {
    if (!SP.UI.Spellcheck.SpellChecker._chunks$i) {
        return;
    }
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        SP.UI.Spellcheck.SpellChecker._chunks$i[i]._clear$i$0();
    }
    RTE.Cursor.update();
    if (SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChangeRegistered$i) {
        SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChangeRegistered$i = false;
        RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionChangedEvent, SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChange$i);
    }
    SP.UI.Spellcheck.SpellChecker._errorsDisplayed$i = false;
}
SP.UI.Spellcheck.SpellChecker.ClearNode = function SP_UI_Spellcheck_SpellChecker$ClearNode(node) {
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[i];
        if (chunk.element === node) {
            chunk._clear$i$0();
        }
    }
    RTE.Cursor.update();
}
SP.UI.Spellcheck.SpellChecker.ClearCurrentElement = function SP_UI_Spellcheck_SpellChecker$ClearCurrentElement() {
    var editableRegion = RTE.Canvas.currentEditableRegion();
    if (!editableRegion) {
        return;
    }
    SP.UI.Spellcheck.SpellChecker.ClearNode(editableRegion);
}
SP.UI.Spellcheck.SpellChecker.SpellCheckCurrentElement = function SP_UI_Spellcheck_SpellChecker$SpellCheckCurrentElement() {
    var editableRegion = RTE.Canvas.currentEditableRegion();
    if (!editableRegion) {
        return;
    }
    SP.UI.Spellcheck.SpellChecker.SpellCheckChunk(editableRegion);
}
SP.UI.Spellcheck.SpellChecker.SpellCheckChunk = function SP_UI_Spellcheck_SpellChecker$SpellCheckChunk(node) {
    SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i = node;
    SP.UI.Spellcheck.SpellChecker._createScreen$p();
    window.setTimeout(SP.UI.Spellcheck.SpellChecker._spellCheckChunkTimeOut$p, 0);
}
SP.UI.Spellcheck.SpellChecker._spellCheckChunkTimeOut$p = function SP_UI_Spellcheck_SpellChecker$_spellCheckChunkTimeOut$p() {
    var node = SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i;
    var offset = -1;
    var chunkToSpell = null;
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[i];
        if (chunk.element === node) {
            offset = i;
            chunkToSpell = chunk;
            break;
        }
    }
    if (offset === -1) {
        offset = SP.UI.Spellcheck.SpellChecker._chunks$i.length;
        chunkToSpell = new SP.UI.Spellcheck._spellingChunk(node);
    }
    if (chunkToSpell.text.length > 0) {
        var chunksToSpell = new Array(1);
        chunksToSpell[0] = chunkToSpell;
        SP.UI.Spellcheck.XMLRequest._callWebService$i(SP.UI.Spellcheck.SpellChecker._currentLanguage$i, 0, chunksToSpell);
    }
    SP.UI.Spellcheck.SpellChecker.ClearNode(node);
}
SP.UI.Spellcheck.SpellChecker.Spellcheck = function SP_UI_Spellcheck_SpellChecker$Spellcheck() {
    SP.UI.Spellcheck.XMLRequest._showConfirmationDialogUponCompletion$i = true;
    SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i = RTE.Canvas.currentEditableRegion();
    SP.UI.Spellcheck.SpellChecker._createScreen$p();
    window.setTimeout(SP.UI.Spellcheck.SpellChecker._spellcheckTimeOut$p, 0);
}
SP.UI.Spellcheck.SpellChecker._spellcheckTimeOut$p = function SP_UI_Spellcheck_SpellChecker$_spellcheckTimeOut$p() {
    SP.UI.Spellcheck.SpellChecker.clear();
    var chunksToSpell = new Array(0);
    SP.UI.Spellcheck._spellingChunk._generateSpellChunksFromTag$i(chunksToSpell, 'div');
    SP.UI.Spellcheck._spellingChunk._generateSpellChunksFromTag$i(chunksToSpell, 'span');
    SP.UI.Spellcheck._spellingChunk._generateSpellChunksFromTag$i(chunksToSpell, 'input');
    SP.UI.Spellcheck._spellingChunk._generateSpellChunksFromTag$i(chunksToSpell, 'textarea');
    SP.UI.Spellcheck.SpellChecker._chunks$i = chunksToSpell;
    SP.UI.Spellcheck.XMLRequest._callWebService$i(SP.UI.Spellcheck.SpellChecker._currentLanguage$i, 0, chunksToSpell);
}
SP.UI.Spellcheck.SpellChecker._spellingInitializer$i = function SP_UI_Spellcheck_SpellChecker$_spellingInitializer$i(commandId, dialogElement) {
    if (!dialogElement) {
        return 0;
    }
    SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i = Pub.Ribbon.PubCommands.generateInProgressSection(dialogElement, SP.Publishing.Resources.spellingHeader, SP.Publishing.Resources.spellingInProgress);
    window.setTimeout(SP.UI.Spellcheck.SpellChecker._spellcheckTimeOut$p, 0);
    return 58;
}
SP.UI.Spellcheck.SpellChecker._spellingAbort$i = function SP_UI_Spellcheck_SpellChecker$_spellingAbort$i() {
    SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i = null;
    SP.UI.Spellcheck.XMLRequest._cancelWebService$i();
}
SP.UI.Spellcheck.SpellChecker._spellingEnabled$p = function SP_UI_Spellcheck_SpellChecker$_spellingEnabled$p(commandId) {
    return ((!!SP.Ribbon.PageState.ImportedNativeData) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState) && ((commandId === SP.Ribbon.PageState.PageStateCommands.pageStateGroupCheckin || commandId === SP.Ribbon.PageState.PageStateCommands.pageStateGroupSubmitForApproval || commandId === SP.Ribbon.PageState.PageStateCommands.pageStateGroupPublish) && !!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsCheckedOutToCurrentUserStateName]) || ((commandId === SP.Ribbon.PageState.PageStateCommands.pageStateGroupApprove || commandId === SP.Ribbon.PageState.PageStateCommands.pageStateGroupReject) && !!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsPendingApprovalStateName]));
}
SP.UI.Spellcheck.SpellChecker.registerSpellingHandler = function SP_UI_Spellcheck_SpellChecker$registerSpellingHandler() {
    var handler = new SP.Ribbon.PageState.StateChangeDialogHandler();
    handler.initialize = SP.UI.Spellcheck.SpellChecker._spellingInitializer$i;
    handler.enabled = SP.UI.Spellcheck.SpellChecker._spellingEnabled$p;
    handler.abort = SP.UI.Spellcheck.SpellChecker._spellingAbort$i;
    SP.Ribbon.PageState.Handlers.addStateChangeDialogHandler(handler);
}


SP.UI.Spellcheck._spellingChunk = function SP_UI_Spellcheck__spellingChunk(node) {
    this.$$d__clear$i$0 = Function.createDelegate(this, this._clear$i$0);
    this.$$d__showSectionOfError$i$0 = Function.createDelegate(this, this._showSectionOfError$i$0);
    this.element = node;
    this.text = SP.UI.Spellcheck._utilities._getInnerText$i(node);
}
SP.UI.Spellcheck._spellingChunk._generateSpellChunksFromTag$i = function SP_UI_Spellcheck__spellingChunk$_generateSpellChunksFromTag$i(chunksToSpell, tag) {
    var nodes = document.getElementsByTagName(tag);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.className.indexOf(SP.UI.Spellcheck.SpellChecker._enabledCssClassName$i) !== -1) {
            if (node.tagName === RTE.HtmlTagName.INPUT) {
                var input = node;
                if (input.type.toLowerCase() === 'text' && input.value.length > 0) {
                    SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i(chunksToSpell, node);
                }
            }
            else if (node.tagName === RTE.HtmlTagName.TEXTAREA) {
                SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromTextArea$i(chunksToSpell, node);
            }
            else {
                SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i(chunksToSpell, node);
            }
        }
        else if (node.className.indexOf(SP.UI.Spellcheck.SpellChecker._disabledCssClassName$i) === -1 && node.getAttribute('excludeFromSpellCheck') !== 'true') {
            if (node.tagName === RTE.HtmlTagName.TEXTAREA) {
                SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromTextArea$i(chunksToSpell, node);
            }
            else if (node.className.indexOf(RTE.Canvas.editableItemClass) !== -1) {
                SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i(chunksToSpell, node);
            }
        }
        else if (node.className.indexOf('ms-rtestate-write') !== -1) {
            SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i(chunksToSpell, node);
        }
    }
}
SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i = function SP_UI_Spellcheck__spellingChunk$_generateSpellChunkFromNode$i(chunksToSpell, node) {
    var chunk = new SP.UI.Spellcheck._spellingChunk(node);
    if (chunk.text.length > 0) {
        chunksToSpell.push(chunk);
    }
}
SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromTextArea$i = function SP_UI_Spellcheck__spellingChunk$_generateSpellChunkFromTextArea$i(chunksToSpell, node) {
    var docEditor = FindInlineHTMLEditor(node);
    if (docEditor) {
        if (docEditor.body.innerText.length > 0) {
            var chunk = new SP.UI.Spellcheck._spellingChunk(node);
            chunk.text = docEditor.body.innerText;
            chunksToSpell.push(chunk);
        }
    }
    else {
        var input = node;
        if (input.value.length > 0) {
            SP.UI.Spellcheck._spellingChunk._generateSpellChunkFromNode$i(chunksToSpell, node);
        }
    }
}
SP.UI.Spellcheck._spellingChunk.prototype = {
    errors: null,
    text: null,
    element: null,
    warning: null,
    
    _readFromXmlNode$i$0: function SP_UI_Spellcheck__spellingChunk$_readFromXmlNode$i$0(node) {
        this.errors = new Array(0);
        var errorSections = node.firstChild.nextSibling.childNodes;
        if (errorSections.length > 0) {
            SP.UI.Spellcheck.SpellChecker._errorsDisplayed$i = true;
        }
        for (var j = 0; j < errorSections.length; j++) {
            var error = new SP.UI.Spellcheck._spellingError(errorSections[j]);
            this.errors.push(error);
        }
    },
    
    _shown$i$0: false,
    _currentShowOffset$p$0: 0,
    _currentShowPosition$p$0: null,
    _currentError$p$0: 0,
    
    show: function SP_UI_Spellcheck__spellingChunk$show() {
        if (this.errors.length > 0) {
            if (this.element.tagName === RTE.HtmlTagName.INPUT || this.element.tagName === RTE.HtmlTagName.TEXTAREA) {
                this._shown$i$0 = true;
                this.createSpellingWarning();
            }
            else {
                this._shown$i$0 = false;
                this._currentError$p$0 = 0;
                this._currentShowOffset$p$0 = 0;
                this._currentShowPosition$p$0 = new RTE.DOMTreePosition(this.element, this._currentShowOffset$p$0);
                this._currentShowPosition$p$0.normalize();
                window.setTimeout(this.$$d__showSectionOfError$i$0, 0);
            }
        }
    },
    
    _showSectionOfError$i$0: function SP_UI_Spellcheck__spellingChunk$_showSectionOfError$i$0() {
        var maxError = this._currentError$p$0 + SP.UI.Spellcheck._spellingChunk._numberOfErrorToShowPerSection$p;
        if (maxError > this.errors.length) {
            maxError = this.errors.length;
        }
        for (var i = this._currentError$p$0; i < maxError; i++) {
            var error = this.errors[i];
            if (error.offset >= this._currentShowOffset$p$0) {
                error._show$i$0(this._currentShowPosition$p$0, this._currentShowOffset$p$0);
                this._currentShowOffset$p$0 = error.offset + error.word.length;
            }
        }
        this._currentError$p$0 = maxError;
        if (this.errors.length > this._currentError$p$0) {
            window.setTimeout(this.$$d__showSectionOfError$i$0, 0);
        }
        else {
            this._shown$i$0 = true;
            window.setTimeout(SP.UI.Spellcheck.XMLRequest._checkIfDone$i, 0);
        }
    },
    
    _clear$i$0: function SP_UI_Spellcheck__spellingChunk$_clear$i$0() {
        if (this.element.tagName === RTE.HtmlTagName.INPUT || this.element.tagName === RTE.HtmlTagName.TEXTAREA) {
            if (this.warning && this.warning.parentNode) {
                this.warning.parentNode.removeChild(this.warning);
            }
        }
        if (this.errors) {
            for (var i = 0; i < this.errors.length; i++) {
                this.errors[i]._clearWithOptions$i$0(false);
            }
        }
    },
    
    createSpellingWarning: function SP_UI_Spellcheck__spellingChunk$createSpellingWarning() {
        var div = document.createElement('div');
        div.id = SP.UI.UIUtility.generateRandomElementId();
        div.style.fontSize = '11px';
        div.style.display = 'Inline';
        div.className = SP.UI.Spellcheck._spellingChunk._warningCssClass$i;
        div.innerHTML = '<a style=\'color:red;\' href=\'#\'>' + '<img src=\'/_layouts/' + SP.PageContextInfo.get_webLanguage() + '/images/RTE2SPCHK.GIF\'' + 'alt=\'' + SP.Publishing.Resources.spellcheckerCheckSpelling + '\' border=\'0\' />' + '</a>' + ' ' + '<a style=\'color:red;\' href=\'#\'>' + SP.Publishing.Resources.spellcheckerErrorFound + '</a>';
        $addHandler(div, 'click', SP.UI.Spellcheck.SpellingEventHandler.OnSpellingMessageClick);
        this.warning = div;
        var parent = this.element;
        while (parent && parent.className !== 'ms-formfieldvaluecontainer') {
            parent = parent.parentNode;
        }
        while (parent && parent.className !== 'ms-formfieldlabelcontainer') {
            parent = parent.previousSibling;
        }
        if (parent) {
            parent.appendChild(div);
        }
        else {
            parent = this.element.parentNode;
            parent.insertBefore(div, this.element);
        }
    },
    
    _invokeDialog$i$0: function SP_UI_Spellcheck__spellingChunk$_invokeDialog$i$0() {
        SpellCheckOneElement(SP.UI.Spellcheck.Externs.spellcheck.siteUrl + '_vti_bin/SpellCheck.asmx', SP.UI.Spellcheck.Externs.spellcheck.siteUrl + SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'SpellChecker.aspx', true, this.element, SP.UI.Spellcheck.SpellChecker._currentLanguage$i.toString(), this.$$d__clear$i$0);
    }
}


SP.UI.Spellcheck._spellingError = function SP_UI_Spellcheck__spellingError(section) {
    var node = section.firstChild;
    this.word = SP.UI.Spellcheck.XMLRequest._getXmlText$i(node);
    node = node.nextSibling;
    this.type = SP.UI.Spellcheck.XMLRequest._getXmlText$i(node);
    node = node.nextSibling;
    this.offset = parseInt(SP.UI.Spellcheck.XMLRequest._getXmlText$i(node));
}
SP.UI.Spellcheck._spellingError.prototype = {
    word: null,
    type: null,
    offset: 0,
    spellingNode: null,
    contextNode: null,
    contextAndSpellingNodesWrapperNode: null,
    
    _invokeContextMenu$i$0: function SP_UI_Spellcheck__spellingError$_invokeContextMenu$i$0() {
        var isEditable = RTE.Canvas.isEditable(this.spellingNode);
        var id = this.spellingNode.id;
        var contextMenu = SP.UI.Menu.create('SpellingContext');
        var menuItemPos = 0;
        if (this.type !== SP.UI.Spellcheck._spellingError._unknownWord$i) {
            var command = null;
            if (isEditable) {
                command = 'SP.UI.Spellcheck.SpellingEventHandler.RemoveRepeat(\'' + id + '\')';
            }
            contextMenu.addMenuItem(SP.Publishing.Resources.spellcheckerDuplicateMenuItem, command, null, null, menuItemPos, null, null);
            menuItemPos++;
        }
        else {
            var wordSugestions = SP.UI.Spellcheck.SpellChecker._suggestions$i[this.word];
            if (wordSugestions) {
                for (var i = 0; i < wordSugestions.possibilities.length; i++) {
                    var command = null;
                    if (isEditable) {
                        command = 'SP.UI.Spellcheck.SpellingEventHandler.Suggestion(\'' + id + '\', \'' + wordSugestions.possibilities[i].replace('\'', '\\\'') + '\')';
                    }
                    contextMenu.addMenuItem(wordSugestions.possibilities[i], command, null, null, menuItemPos, null, 'spellingsuggestion' + i.toString());
                    menuItemPos++;
                }
            }
            else {
                contextMenu.addMenuItem(SP.Publishing.Resources.spellcheckerNoneFoundMenuItem, null, null, null, menuItemPos, null, 'nosuggestions');
                $get('nosuggestions').setAttribute('disabled', true);
                menuItemPos++;
            }
        }
        if (isEditable) {
            contextMenu.addSeparator();
            contextMenu.addMenuItem(SP.Publishing.Resources.spellcheckerIgnoreMenuItem, 'SP.UI.Spellcheck.SpellingEventHandler.Ignore(\'' + id + '\')', null, null, menuItemPos, null, 'ignorespellerror');
            menuItemPos++;
            contextMenu.addMenuItem(SP.Publishing.Resources.spellcheckerIgnoreAllMenuItem, 'SP.UI.Spellcheck.SpellingEventHandler.IgnoreAll(\'' + id + '\')', null, null, menuItemPos, null, 'ignoreall');
            menuItemPos++;
        }
        var textNode = document.createElement(RTE.HtmlTagName.SPAN);
        textNode.innerHTML = 'a';
        this.contextNode.appendChild(textNode);
        contextMenu.show(this.contextNode, true, false, 0);
        SP.UI.UIUtility.removeNode(textNode);
        Sys.UI.DomElement.addCssClass(this.contextNode, RTE.Canvas.notifyOnGenerateClass);
        RTE.Cursor.update();
    },
    
    _hasChanged$i$0: function SP_UI_Spellcheck__spellingError$_hasChanged$i$0() {
        return RTE.RteUtility.getInnerText(this.spellingNode) !== this.word;
    },
    
    ignore: function SP_UI_Spellcheck__spellingError$ignore() {
        if (this.spellingNode) {
            RTE.Cursor.get_range().moveAfterNode(this.spellingNode);
            this.clear();
        }
    },
    
    replace: function SP_UI_Spellcheck__spellingError$replace(text) {
        var editableRegion = RTE.Canvas.getEditableRegion(this.spellingNode);
        RTE.SnapshotManager.takeEditableRegionSnapshot(editableRegion);
        SP.UI.UIUtility.setInnerText(this.spellingNode, unescape(text));
        RTE.Cursor.get_range().moveAfterNode(this.spellingNode.parentNode);
        if (!SP.ScriptUtility.isNullOrUndefined(RTE.SnapshotManager.setRegionDirty)) {
            RTE.SnapshotManager.setRegionDirty(editableRegion);
        }
        this.clear();
        RTE.SnapshotManager.takeEditableRegionSnapshot(editableRegion);
    },
    
    clear: function SP_UI_Spellcheck__spellingError$clear() {
        this._clearWithOptions$i$0(true);
    },
    
    _clearWithOptions$i$0: function SP_UI_Spellcheck__spellingError$_clearWithOptions$i$0(updateCursor) {
        if (this.spellingNode) {
            $clearHandlers(this.spellingNode);
            if (this.spellingNode.parentNode) {
                RTE.RteUtility.removeNodeAndKeepChildNodes(this.spellingNode);
            }
            this.spellingNode = null;
        }
        if (this.contextNode) {
            if (this.contextNode.parentNode) {
                this.contextNode.parentNode.removeChild(this.contextNode);
            }
            this.contextNode = null;
        }
        if (this.contextAndSpellingNodesWrapperNode) {
            if (this.contextAndSpellingNodesWrapperNode.parentNode) {
                RTE.RteUtility.removeNodeAndKeepChildNodes(this.contextAndSpellingNodesWrapperNode);
            }
            this.contextAndSpellingNodesWrapperNode = null;
        }
        if (updateCursor) {
            RTE.Cursor.update();
        }
    },
    
    _show$i$0: function SP_UI_Spellcheck__spellingError$_show$i$0(position, currentOffset) {
        this.spellingNode = document.createElement(RTE.HtmlTagName.SPAN);
        this.spellingNode.id = SP.UI.UIUtility.generateRandomElementId();
        this.spellingNode.className = SP.UI.Spellcheck._spellingError._cssClassName$i;
        RTE.RteUtility.ignoreNodeInOutput(this.spellingNode);
        SP.UI.Spellcheck._utilities._insertMarkerAtOffset$i(position, SP.UI.Spellcheck._spellingError._errorMarkerStart$i, this.offset - currentOffset, true);
        SP.UI.Spellcheck._utilities._insertMarkerAtOffset$i(position, SP.UI.Spellcheck._spellingError._errorMarkerEnd$i, unescape(this.word).length, false);
        if (SP.UI.Spellcheck._spellingError._errorMarkerStart$i.nextSibling && SP.UI.UIUtility.isTextNode(SP.UI.Spellcheck._spellingError._errorMarkerStart$i.nextSibling) && SP.UI.Spellcheck._spellingError._errorMarkerStart$i.nextSibling.nextSibling === SP.UI.Spellcheck._spellingError._errorMarkerEnd$i) {
            this.spellingNode.appendChild(SP.UI.Spellcheck._spellingError._errorMarkerStart$i.nextSibling);
            SP.UI.UIUtility.insertBefore(this.spellingNode, SP.UI.Spellcheck._spellingError._errorMarkerEnd$i);
        }
        else {
            var range = new RTE.CanvasRange('spelling');
            range.moveToMarkers(SP.UI.Spellcheck._spellingError._errorMarkerStart$i, SP.UI.Spellcheck._spellingError._errorMarkerEnd$i);
            range.wrapRange(this.spellingNode);
            range.dispose();
        }
        SP.UI.Spellcheck._spellingError._errorMarkerStart$i.parentNode.removeChild(SP.UI.Spellcheck._spellingError._errorMarkerStart$i);
        SP.UI.Spellcheck._spellingError._errorMarkerEnd$i.parentNode.removeChild(SP.UI.Spellcheck._spellingError._errorMarkerEnd$i);
        if (!SP.UI.Spellcheck._spellingError._contextNodeTemplate$i) {
            SP.UI.Spellcheck._spellingError._contextNodeTemplate$i = document.createElement(RTE.HtmlTagName.SPAN);
            SP.UI.Spellcheck._spellingError._contextNodeTemplate$i.className = RTE.Canvas.atomicItemClass;
            SP.UI.Spellcheck._spellingError._contextNodeTemplate$i.style.fontSize = SP.Publishing.Resources.spellingSuggestionFontSize;
            SP.UI.Spellcheck._spellingError._contextNodeTemplate$i.contentEditable = false;
            RTE.RteUtility.ignoreNodeInOutput(SP.UI.Spellcheck._spellingError._contextNodeTemplate$i);
            var spellingLink = document.createElement(RTE.HtmlTagName.a);
            RTE.RteUtility.ignoreNodeInOutput(spellingLink);
            SP.UI.Spellcheck._spellingError._contextNodeTemplate$i.appendChild(spellingLink);
            var img = document.createElement(RTE.HtmlTagName.IMG);
            img.src = '/_layouts/images/blank.gif';
            img.alt = SP.Publishing.Resources.spellcheckerMisspelled;
            img.style.width = '0px';
            RTE.RteUtility.ignoreNodeInOutput(img);
            spellingLink.appendChild(img);
            $addHandler(spellingLink, 'click', SP.UI.Spellcheck.SpellingEventHandler.OnSpellingErrorClick);
            $addHandler(spellingLink, 'contextmenu', SP.UI.Spellcheck.SpellingEventHandler.OnSpellingErrorClick);
        }
        this.contextNode = SP.UI.Spellcheck._spellingError._contextNodeTemplate$i.cloneNode(true);
        this.contextAndSpellingNodesWrapperNode = document.createElement(RTE.HtmlTagName.SPAN);
        RTE.RteUtility.ignoreNodeInOutput(this.contextAndSpellingNodesWrapperNode);
        this.contextAndSpellingNodesWrapperNode.style.whiteSpace = 'nowrap';
        this.spellingNode.parentNode.insertBefore(this.contextAndSpellingNodesWrapperNode, this.spellingNode);
        this.contextAndSpellingNodesWrapperNode.appendChild(this.contextNode);
        this.contextAndSpellingNodesWrapperNode.appendChild(this.spellingNode);
        SP.UI.Spellcheck.SpellChecker._errors$i[this.spellingNode.id] = this;
        position.setCurrentNode(this.spellingNode);
        position.setLocationAtEnd();
        position.moveToNextElement();
        $addHandler(this.spellingNode, 'contextmenu', SP.UI.Spellcheck.SpellingEventHandler.OnSpellingErrorClick);
        $addHandler(this.spellingNode, 'click', SP.UI.Spellcheck.SpellingEventHandler.OnSpellingErrorClick);
    }
}


SP.UI.Spellcheck.SpellingEventHandler = function SP_UI_Spellcheck_SpellingEventHandler() {
}
SP.UI.Spellcheck.SpellingEventHandler.onRteChange = function SP_UI_Spellcheck_SpellingEventHandler$onRteChange(sender, data) {
    var spellingNode = SP.UI.Spellcheck._utilities._getParentSpellingNode$i(RTE.Cursor.get_range().get_startMarker());
    if (spellingNode) {
        var error = SP.UI.Spellcheck.SpellChecker._errors$i[spellingNode.id];
        if (error._hasChanged$i$0()) {
            error.clear();
        }
    }
}
SP.UI.Spellcheck.SpellingEventHandler.OnSpellingErrorClick = function SP_UI_Spellcheck_SpellingEventHandler$OnSpellingErrorClick(evt) {
    if (!evt || !evt.target) {
        return;
    }
    SP.UI.Spellcheck.SpellingEventHandler._errorClickedOn$p = SP.UI.Spellcheck.SpellChecker._errors$i[evt.target.id];
    if (SP.UI.Spellcheck.SpellingEventHandler._errorClickedOn$p) {
        if (evt.type === 'contextmenu') {
            evt.preventDefault();
        }
        window.setTimeout(SP.UI.Spellcheck.SpellingEventHandler._onSpellingErrorClickTimeout$p, 0);
    }
}
SP.UI.Spellcheck.SpellingEventHandler._onSpellingErrorClickTimeout$p = function SP_UI_Spellcheck_SpellingEventHandler$_onSpellingErrorClickTimeout$p() {
    SP.UI.Spellcheck.SpellingEventHandler._errorClickedOn$p._invokeContextMenu$i$0();
}
SP.UI.Spellcheck.SpellingEventHandler.OnSpellingMessageClick = function SP_UI_Spellcheck_SpellingEventHandler$OnSpellingMessageClick(evt) {
    if (!evt || !evt.target) {
        return;
    }
    var currentWarning = SP.UI.Spellcheck._utilities._getParentWarningNode$i(evt.target);
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[i];
        if (chunk.warning === currentWarning) {
            chunk._invokeDialog$i$0();
            evt.preventDefault();
        }
    }
}
SP.UI.Spellcheck.SpellingEventHandler.Suggestion = function SP_UI_Spellcheck_SpellingEventHandler$Suggestion(id, suggestion) {
    var error = SP.UI.Spellcheck.SpellChecker._errors$i[id];
    error.replace(suggestion);
}
SP.UI.Spellcheck.SpellingEventHandler.Ignore = function SP_UI_Spellcheck_SpellingEventHandler$Ignore(id) {
    var error = SP.UI.Spellcheck.SpellChecker._errors$i[id];
    error.ignore();
}
SP.UI.Spellcheck.SpellingEventHandler.IgnoreAll = function SP_UI_Spellcheck_SpellingEventHandler$IgnoreAll(id) {
    var ignoreError = SP.UI.Spellcheck.SpellChecker._errors$i[id];
    var ignoreWord = ignoreError.word;
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[i];
        if (chunk.errors) {
            for (var j = 0; j < chunk.errors.length; j++) {
                var error = chunk.errors[j];
                if (error.word === ignoreWord) {
                    error.ignore();
                }
            }
        }
    }
}
SP.UI.Spellcheck.SpellingEventHandler.OnWaitingScreenCallback = function SP_UI_Spellcheck_SpellingEventHandler$OnWaitingScreenCallback(dialogResult, returnValue) {
    if (!dialogResult) {
        SP.UI.Spellcheck.XMLRequest._cancelWebService$i();
    }
}
SP.UI.Spellcheck.SpellingEventHandler.RemoveRepeat = function SP_UI_Spellcheck_SpellingEventHandler$RemoveRepeat(id) {
    var error = SP.UI.Spellcheck.SpellChecker._errors$i[id];
    error.replace('');
}
SP.UI.Spellcheck.SpellingEventHandler.OnUndoRedo = function SP_UI_Spellcheck_SpellingEventHandler$OnUndoRedo() {
    var editableRegion = RTE.Canvas.currentEditableRegion();
    if (!editableRegion) {
        return;
    }
    var found = false;
    for (var i = 0; i < SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p.length; i++) {
        if (SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p[i] === editableRegion) {
            found = true;
            break;
        }
    }
    if (!found) {
        SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p.push(editableRegion);
        SP.UI.Spellcheck.SpellChecker.ClearNode(editableRegion);
    }
    SP.UI.Spellcheck.SpellingEventHandler._events$p++;
    window.setTimeout(SP.UI.Spellcheck.SpellingEventHandler._onUndoRedoTimer$i, 2000);
}
SP.UI.Spellcheck.SpellingEventHandler._onUndoRedoTimer$i = function SP_UI_Spellcheck_SpellingEventHandler$_onUndoRedoTimer$i() {
    SP.UI.Spellcheck.SpellingEventHandler._events$p--;
    if (0 === SP.UI.Spellcheck.SpellingEventHandler._events$p) {
        for (var i = 0; i < SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p.length; i++) {
            SP.UI.Spellcheck.SpellChecker.SpellCheckChunk(SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p[i]);
        }
        SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p = new Array(0);
    }
}
SP.UI.Spellcheck.SpellingEventHandler.queryRemoveSpellChecks = function SP_UI_Spellcheck_SpellingEventHandler$queryRemoveSpellChecks() {
    var ret = new RTE.CommandState();
    ret.set_enabled(SP.UI.Spellcheck.SpellChecker._errorsDisplayed$i);
    return ret;
}


SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider = function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider() {
    SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider.initializeBase(this);
}
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider.prototype = {
    _previousProvider$p$1: null,
    _focusedCommands$p$1: null,
    
    init: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$init(previousProvider) {
        this._previousProvider$p$1 = previousProvider;
        this._focusedCommands$p$1 = [ 'SpellCheckGroup', SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandPublishingTab$i, SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellLang$i, SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellDefault$i, SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandNoSpelling$i, SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandGetSpellCheckMenuXml$i ];
    },
    
    _initSpellCheckMenu$p$1: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$_initSpellCheckMenu$p$1() {
        var languages = SP.UI.Spellcheck.Externs.spellcheck.languages;
        if (languages.length > 0) {
            var $$t_7 = this;
            languages.sort(function(a, b) {
                return (a).name.localeCompare((b).name);
            });
            var sb = new Sys.StringBuilder();
            sb.append('<Menu Id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu\'>');
            sb.append('<MenuSection Id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu.Languages\'>');
            sb.append('<Controls Id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu.Languages.Controls\'>');
            sb.append('<Button');
            sb.append(' id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu.Languages.RemoveSpellCheck\' LabelText=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(SP.Publishing.Resources.spellcheckerRemoveButton));
            sb.append('\' CommandType=\'General\'');
            sb.append(' Command=\'');
            sb.append(SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandNoSpelling$i);
            sb.append('\' />');
            var currentLanguagePosition = -1;
            for (var i = 0; i < languages.length; i++) {
                if (languages[i].lcid === SP.UI.Spellcheck.SpellChecker._currentLanguage$i) {
                    currentLanguagePosition = i;
                }
            }
            if (currentLanguagePosition !== -1) {
                sb.append('<Button');
                sb.append(' id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu.Languages.DefaultLanguage\' LabelText=\'');
                sb.append(SP.Utilities.HttpUtility.escapeXmlText(languages[currentLanguagePosition].name));
                sb.append('\' CommandType=\'General\'');
                sb.append(' Command=\'');
                sb.append(SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellLang$i);
                sb.append('\' CommandValueId= \'');
                sb.append(SP.UI.Spellcheck.SpellChecker._currentLanguage$i.toString());
                sb.append('\' />');
            }
            for (var i = 0; i < languages.length; i++) {
                if (i !== currentLanguagePosition) {
                    sb.append('<Button');
                    sb.append(' id=\'Ribbon.EditingTools.CPEditTab.SpellCheck.SpellCheck.Menu.Languages.Language');
                    sb.append(i.toString());
                    sb.append('\' LabelText=\'');
                    sb.append(SP.Utilities.HttpUtility.escapeXmlText(languages[i].name));
                    sb.append('\' CommandType=\'OptionSelection\' MenuItemId=\'');
                    sb.append(i.toString());
                    sb.append('\' CommandValueId=\'');
                    sb.append(languages[i].lcid.toString());
                    sb.append('\' Command=\'');
                    sb.append(SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellLang$i);
                    sb.append('\' />');
                }
            }
            sb.append('</Controls></MenuSection></Menu>');
            return sb.toString();
        }
        return '';
    },
    
    canHandleCommand: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$canHandleCommand(commandId) {
        if (commandId === SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandNoSpelling$i) {
            return SP.UI.Spellcheck.SpellChecker._errorsDisplayed$i;
        }
        if (Array.indexOf(this._focusedCommands$p$1, commandId) >= 0 && SP.UI.Spellcheck.Externs.spellcheck) {
            return true;
        }
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.canHandleCommand(commandId);
        }
        return false;
    },
    
    getGlobalCommands: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$getGlobalCommands() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.getGlobalCommands();
        }
        return null;
    },
    
    getFocusedCommands: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$getFocusedCommands() {
        if (this._previousProvider$p$1) {
            var ret = [];
            Array.addRange(ret, this._focusedCommands$p$1);
            Array.addRange(ret, this._previousProvider$p$1.getFocusedCommands());
            return ret;
        }
        return this._focusedCommands$p$1;
    },
    
    handleCommand: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$handleCommand(commandId, properties, sequence) {
        if (!commandId) {
            return false;
        }
        if (commandId === SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandGetSpellCheckMenuXml$i) {
            var props = properties;
            props.PopulationXML = this._initSpellCheckMenu$p$1();
        }
        else if (commandId === SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellLang$i) {
            var langNum = properties['CommandValueId'];
            SP.UI.Spellcheck.SpellChecker._currentLanguage$i = parseInt(langNum);
            SP.UI.Spellcheck.SpellChecker.Spellcheck();
        }
        else if (commandId === SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellDefault$i) {
            SP.UI.Spellcheck.SpellChecker.Spellcheck();
        }
        else if (commandId === SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandNoSpelling$i) {
            SP.UI.Spellcheck.SpellChecker.clear();
        }
        else {
            if (this._previousProvider$p$1) {
                return this._previousProvider$p$1.handleCommand(commandId, properties, sequence);
            }
        }
        return true;
    },
    
    isFocusable: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$isFocusable() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.isFocusable();
        }
        return true;
    },
    
    receiveFocus: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$receiveFocus() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.receiveFocus();
        }
        return true;
    },
    
    yieldFocus: function SP_UI_Spellcheck__spellcheckRichTextEditorComponentProvider$yieldFocus() {
        if (this._previousProvider$p$1) {
            this._previousProvider$p$1.yieldFocus();
        }
        return true;
    }
}


SP.UI.Spellcheck._spellingSuggestion = function SP_UI_Spellcheck__spellingSuggestion(node) {
    this.possibilities = new Array(0);
    this.word = SP.UI.Spellcheck.XMLRequest._getXmlText$i(node.firstChild);
    var possibilitiesNodes = node.firstChild.nextSibling.childNodes;
    for (var j = 0; j < possibilitiesNodes.length; j++) {
        this.possibilities.push(SP.UI.Spellcheck.XMLRequest._getXmlText$i(possibilitiesNodes[j]));
    }
}
SP.UI.Spellcheck._spellingSuggestion.prototype = {
    word: null
}


SP.UI.Spellcheck._spellcheckComponent = function SP_UI_Spellcheck__spellcheckComponent() {
    SP.UI.Spellcheck._spellcheckComponent.initializeBase(this);
    this._provider$p$1 = new SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider();
}
SP.UI.Spellcheck._spellcheckComponent.get_instance = function SP_UI_Spellcheck__spellcheckComponent$get_instance() {
    if (!SP.UI.Spellcheck._spellcheckComponent._instance$p) {
        SP.UI.Spellcheck._spellcheckComponent._instance$p = new SP.UI.Spellcheck._spellcheckComponent();
    }
    return SP.UI.Spellcheck._spellcheckComponent._instance$p;
}
SP.UI.Spellcheck._spellcheckComponent._updatePageManager$i = function SP_UI_Spellcheck__spellcheckComponent$_updatePageManager$i() {
    var pm = SP.UI.Spellcheck._spellcheckComponent._getPageManager$i();
    if (pm) {
        pm.addPageComponent(SP.UI.Spellcheck._spellcheckComponent.get_instance());
    }
}
SP.UI.Spellcheck._spellcheckComponent._getPageManager$i = function SP_UI_Spellcheck__spellcheckComponent$_getPageManager$i() {
    var pm = null;
    if (window.SP && window.SP.Ribbon) {
        pm = window.SP.Ribbon.PageManager.get_instance();
    }
    return pm;
}
SP.UI.Spellcheck._spellcheckComponent.prototype = {
    _provider$p$1: null,
    
    init: function SP_UI_Spellcheck__spellcheckComponent$init() {
        this._provider$p$1.init(null);
    },
    
    getFocusedCommands: function SP_UI_Spellcheck__spellcheckComponent$getFocusedCommands() {
        return [];
    },
    
    getGlobalCommands: function SP_UI_Spellcheck__spellcheckComponent$getGlobalCommands() {
        return this._provider$p$1.getFocusedCommands();
    },
    
    canHandleCommand: function SP_UI_Spellcheck__spellcheckComponent$canHandleCommand(commandId) {
        return this._provider$p$1.canHandleCommand(commandId);
    },
    
    handleCommand: function SP_UI_Spellcheck__spellcheckComponent$handleCommand(commandId, properties, sequence) {
        RTE.RteUtility.assertNotNull('commandId', commandId);
        var ret = this._provider$p$1.handleCommand(commandId, properties, sequence);
        return ret;
    },
    
    isFocusable: function SP_UI_Spellcheck__spellcheckComponent$isFocusable() {
        return this._provider$p$1.isFocusable();
    },
    
    receiveFocus: function SP_UI_Spellcheck__spellcheckComponent$receiveFocus() {
        return this._provider$p$1.receiveFocus();
    },
    
    yieldFocus: function SP_UI_Spellcheck__spellcheckComponent$yieldFocus() {
        return this._provider$p$1.yieldFocus();
    },
    
    getId: function SP_UI_Spellcheck__spellcheckComponent$getId() {
        return 'SpellCheckComponent';
    }
}


SP.UI.Spellcheck._utilities = function SP_UI_Spellcheck__utilities() {
}
SP.UI.Spellcheck._utilities._getParentSpellingNode$i = function SP_UI_Spellcheck__utilities$_getParentSpellingNode$i(node) {
    while (node) {
        if (node.className === SP.UI.Spellcheck._spellingError._cssClassName$i) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
SP.UI.Spellcheck._utilities._getParentWarningNode$i = function SP_UI_Spellcheck__utilities$_getParentWarningNode$i(node) {
    while (node) {
        if (node.className === SP.UI.Spellcheck._spellingChunk._warningCssClass$i) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
SP.UI.Spellcheck._utilities._getInnerText$i = function SP_UI_Spellcheck__utilities$_getInnerText$i(elem) {
    if (elem.tagName === RTE.HtmlTagName.INPUT) {
        var inputelem = elem;
        return inputelem.value;
    }
    else if (elem.tagName === RTE.HtmlTagName.TEXTAREA) {
        var areaelem = elem;
        return areaelem.value;
    }
    if (!elem.childNodes.length) {
        return '';
    }
    var output = new Sys.StringBuilder();
    var position = new RTE.DOMTreePosition(elem, 0);
    position.normalize();
    do {
        var currentNode = position.getCurrentNode();
        if (currentNode === elem) {
            break;
        }
        if (SP.UI.UIUtility.isTextNode(currentNode)) {
            var nodeText = currentNode.nodeValue;
            output.append(nodeText);
        }
        else if (currentNode.className.search(SP.UI.Spellcheck._utilities._atomicMatch$i) !== -1) {
            output.append(' ');
            position.setLocationAtEnd();
        }
        else if (currentNode.tagName === RTE.HtmlTagName.BR) {
            output.append(' ');
        }
        else if (SP.UI.UIUtility.isNodeOfType(currentNode, RTE.HtmlTagName.blockElements) || currentNode.tagName === RTE.HtmlTagName.a) {
            output.append(' ');
        }
    } while (position.moveToNextElement());
    return output.toString();
}
SP.UI.Spellcheck._utilities._insertMarkerAtOffset$i = function SP_UI_Spellcheck__utilities$_insertMarkerAtOffset$i(position, marker, offset, firstmarker) {
    do {
        var currentNode = position.getCurrentNode();
        if (SP.UI.UIUtility.isTextNode(currentNode)) {
            var currentOffset = position.getOffset();
            var nodeText = currentNode.nodeValue;
            if ((nodeText.length > offset + currentOffset && firstmarker) || (nodeText.length >= offset + currentOffset && !firstmarker)) {
                position.setOffset(offset + currentOffset);
                position.insertMarker(marker);
                return;
            }
            else {
                offset -= nodeText.length - currentOffset;
            }
        }
        else if (currentNode.className.search(SP.UI.Spellcheck._utilities._atomicMatch$i) !== -1) {
            offset--;
            position.setLocationAtEnd();
        }
        else if (currentNode.tagName === RTE.HtmlTagName.BR) {
            offset--;
        }
        else if (SP.UI.UIUtility.isNodeOfType(currentNode, RTE.HtmlTagName.blockElements) || currentNode.tagName === RTE.HtmlTagName.a) {
            offset--;
        }
    } while (position.moveToNextElement());
    return;
}


SP.UI.Spellcheck.XMLRequest = function SP_UI_Spellcheck_XMLRequest() {
}
SP.UI.Spellcheck.XMLRequest._generateSOAP$p = function SP_UI_Spellcheck_XMLRequest$_generateSOAP$p(language, chunks) {
    var soap = new String();
    soap += '<?xml version=\"1.0\" encoding=\"utf-8\"?>\n';
    soap += '<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"';
    soap += ' xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"';
    soap += ' xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n';
    soap += '<soap:Body>\n';
    soap += '<SpellCheck xmlns=\"http://schemas.microsoft.com/sharepoint/publishing/spelling/\">';
    soap += '<chunksToSpell>\n';
    for (var chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
        soap += '<string>';
        soap += SP.Utilities.HttpUtility.escapeXmlText(chunks[chunkIndex].text);
        soap += '</string>\n';
    }
    soap += '</chunksToSpell>';
    soap += '<declaredLanguage>' + language + '</declaredLanguage>\n';
    soap += '<useLad> false </useLad>\n';
    soap += '</SpellCheck>\n';
    soap += '</soap:Body>\n';
    soap += '</soap:Envelope>';
    return soap;
}
SP.UI.Spellcheck.XMLRequest._cancelWebService$i = function SP_UI_Spellcheck_XMLRequest$_cancelWebService$i() {
    SP.UI.Spellcheck.XMLRequest._request$i.abort();
    SP.UI.Spellcheck.XMLRequest._requestInUse$i = false;
}
SP.UI.Spellcheck.XMLRequest._callWebService$i = function SP_UI_Spellcheck_XMLRequest$_callWebService$i(language, resultOffset, chunks) {
    if (!chunks.length) {
        if (SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i) {
            SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i.innerHTML = SP.Publishing.Resources.spellingNoIssues;
        }
        SP.UI.Spellcheck.XMLRequest._errorCount$i = 0;
        SP.UI.Spellcheck.XMLRequest._checkIfDone$i();
        return;
    }
    if (SP.UI.Spellcheck.SpellChecker._currentLanguage$i === -1) {
        SP.UI.Spellcheck.SpellChecker._displayNoSpellerMessage$i();
        return;
    }
    if (SP.UI.Spellcheck.XMLRequest._requestInUse$i) {
        SP.UI.Spellcheck.XMLRequest._cancelWebService$i();
    }
    var url = window.escapeUrlForCallback(SP.UI.Spellcheck.Externs.spellcheck.siteUrl + '_vti_bin/SpellCheck.asmx');
    SP.UI.Spellcheck.XMLRequest._request$i.open('POST', url, true);
    SP.UI.Spellcheck.XMLRequest._request$i.setRequestHeader('Content-type', 'text/xml; charset=utf-8');
    SP.UI.Spellcheck.XMLRequest._request$i.setRequestHeader('SOAPAction', '\"http://schemas.microsoft.com/sharepoint/publishing/spelling/SpellCheck\"');
    SP.UI.Spellcheck.XMLRequest._request$i.onreadystatechange = SP.UI.Spellcheck.XMLRequest._onResponse$i;
    SP.UI.Spellcheck.XMLRequest._requestInUse$i = true;
    SP.UI.Spellcheck.XMLRequest._offset$i = resultOffset;
    SP.UI.Spellcheck.XMLRequest._request$i.send(SP.UI.Spellcheck.XMLRequest._generateSOAP$p(language, chunks));
}
SP.UI.Spellcheck.XMLRequest._getXmlText$i = function SP_UI_Spellcheck_XMLRequest$_getXmlText$i(node) {
    if (node.text) {
        return node.text;
    }
    else {
        return node.textContent;
    }
}
SP.UI.Spellcheck.XMLRequest._messageBoxOnOk$p = function SP_UI_Spellcheck_XMLRequest$_messageBoxOnOk$p(e) {
    SP.UI.Spellcheck.XMLRequest._messageBoxDialog$p.close(SP.UI.DialogResult.OK);
    SP.UI.Spellcheck.XMLRequest._messageBoxDialog$p = null;
    if (SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i) {
        SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i.focus();
    }
}
SP.UI.Spellcheck.XMLRequest._showMessageBoxModalDialog$i = function SP_UI_Spellcheck_XMLRequest$_showMessageBoxModalDialog$i(message) {
    var html = document.createElement('div');
    var messageSection = document.createElement('DIV');
    messageSection.style.margin = '8px 0px';
    messageSection.innerHTML = message;
    html.appendChild(messageSection);
    var buttonSection = document.createElement('DIV');
    buttonSection.style.textAlign = SP.Publishing.Resources.alignRight;
    var button = document.createElement('INPUT');
    button.value = SP.Publishing.Resources.okButtonText;
    button.type = 'button';
    $addHandler(button, 'click', SP.UI.Spellcheck.XMLRequest._messageBoxOnOk$p);
    button.style.margin = '4px';
    button.id = 'messageboxdialog_okbutton';
    buttonSection.appendChild(button);
    html.appendChild(buttonSection);
    var dlgOptions = new SP.UI.DialogOptions();
    dlgOptions.html = html;
    dlgOptions.title = SP.Publishing.Resources.spellCheckMessageBoxTitle;
    dlgOptions.autoSize = true;
    dlgOptions.showClose = true;
    dlgOptions.showMaximized = false;
    dlgOptions.width = Number.parseInvariant(SP.Publishing.Resources.messageBoxModalDialogWidth);
    dlgOptions.height = Number.parseInvariant(SP.Publishing.Resources.messageBoxModalDialogHeight);
    SP.UI.Spellcheck.XMLRequest._messageBoxDialog$p = SP.UI.ModalDialog.showModalDialog(dlgOptions);
    messageSection.tabIndex = 0;
    window.setTimeout(function() {
        messageSection.focus();
    }, 0);
}
SP.UI.Spellcheck.XMLRequest._onResponse$i = function SP_UI_Spellcheck_XMLRequest$_onResponse$i() {
    if (SP.UI.Spellcheck.XMLRequest._request$i.readyState === 4) {
        var errorCodeNodes = SP.UI.Spellcheck.XMLRequest._request$i.responseXML.getElementsByTagName('errorCode');
        if (errorCodeNodes.length > 0 && errorCodeNodes[0].firstChild.nodeValue === 'SpellCheckerNotInstalled') {
            SP.UI.Spellcheck.SpellChecker._displayNoSpellerMessage$i();
            return;
        }
        var suggestionSections = SP.UI.Spellcheck.XMLRequest._request$i.responseXML.getElementsByTagName('SpellingSuggestions');
        for (var i = 0; i < suggestionSections.length; i++) {
            var suggestion = new SP.UI.Spellcheck._spellingSuggestion(suggestionSections[i]);
            SP.UI.Spellcheck.SpellChecker._suggestions$i[suggestion.word] = suggestion;
        }
        if (!SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChangeRegistered$i) {
            SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChangeRegistered$i = true;
            RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionChangedEvent, SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChange$i);
        }
        var flaggedWords = SP.UI.Spellcheck.XMLRequest._request$i.responseXML.getElementsByTagName('FlaggedWord');
        if (SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i) {
            SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i.tabIndex = 0;
            if (flaggedWords.length > 0) {
                SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i.innerHTML = SP.Publishing.Resources.spellingWithIssues.replace('|0', flaggedWords.length.toString());
            }
            else {
                SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i.innerHTML = SP.Publishing.Resources.spellingNoIssues;
            }
        }
        var chunkSections = SP.UI.Spellcheck.XMLRequest._request$i.responseXML.getElementsByTagName('SpellingErrors');
        for (var i = 0; i < chunkSections.length; i++) {
            var chunkNum = parseInt(SP.UI.Spellcheck.XMLRequest._getXmlText$i(chunkSections[i].firstChild));
            var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[chunkNum + SP.UI.Spellcheck.XMLRequest._offset$i];
            chunk._readFromXmlNode$i$0(chunkSections[i]);
            chunk.show();
        }
        SP.UI.Spellcheck.XMLRequest._errorCount$i = flaggedWords.length;
        SP.UI.Spellcheck.XMLRequest._checkIfDone$i();
    }
}
SP.UI.Spellcheck.XMLRequest._checkIfDone$i = function SP_UI_Spellcheck_XMLRequest$_checkIfDone$i() {
    for (var i = 0; i < SP.UI.Spellcheck.SpellChecker._chunks$i.length; i++) {
        var chunk = SP.UI.Spellcheck.SpellChecker._chunks$i[i];
        if (chunk.errors && !chunk._shown$i$0) {
            return;
        }
    }
    SP.UI.Spellcheck.SpellChecker._removeScreen$i();
    if (SP.UI.Spellcheck.XMLRequest._showConfirmationDialogUponCompletion$i) {
        var message;
        if (SP.UI.Spellcheck.XMLRequest._errorCount$i > 0) {
            message = SP.Publishing.Resources.spellingWithIssues.replace('|0', SP.UI.Spellcheck.XMLRequest._errorCount$i.toString());
        }
        else {
            message = SP.Publishing.Resources.spellingNoIssues;
        }
        SP.UI.Spellcheck.XMLRequest._showMessageBoxModalDialog$i(message);
        SP.UI.Spellcheck.XMLRequest._showConfirmationDialogUponCompletion$i = false;
    }
}


SP.UI.Spellcheck.SpellChecker.registerClass('SP.UI.Spellcheck.SpellChecker');
SP.UI.Spellcheck._spellingChunk.registerClass('SP.UI.Spellcheck._spellingChunk');
SP.UI.Spellcheck._spellingError.registerClass('SP.UI.Spellcheck._spellingError');
SP.UI.Spellcheck.SpellingEventHandler.registerClass('SP.UI.Spellcheck.SpellingEventHandler');
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider.registerClass('SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider', RTE.RichTextEditorComponentProvider);
SP.UI.Spellcheck._spellingSuggestion.registerClass('SP.UI.Spellcheck._spellingSuggestion');
SP.UI.Spellcheck._spellcheckComponent.registerClass('SP.UI.Spellcheck._spellcheckComponent', CUI.Page.PageComponent);
SP.UI.Spellcheck._utilities.registerClass('SP.UI.Spellcheck._utilities');
SP.UI.Spellcheck.XMLRequest.registerClass('SP.UI.Spellcheck.XMLRequest');
function sp_ui_spellcheck_initialize() {
SP.UI.Spellcheck.SpellChecker._disabledCssClassName$i = 'ms-spellcheck-false';
SP.UI.Spellcheck.SpellChecker._enabledCssClassName$i = 'ms-spellcheck-true';
SP.UI.Spellcheck.SpellChecker._autoSizeParam$p = null;
SP.UI.Spellcheck.SpellChecker._suggestions$i = {};
SP.UI.Spellcheck.SpellChecker._chunks$i = new Array(0);
SP.UI.Spellcheck.SpellChecker._errors$i = {};
SP.UI.Spellcheck.SpellChecker._currentLanguage$i = 0;
SP.UI.Spellcheck.SpellChecker._errorsDisplayed$i = false;
SP.UI.Spellcheck.SpellChecker._dlg$p = null;
SP.UI.Spellcheck.SpellChecker._nodeToSpellcheck$i = null;
SP.UI.Spellcheck.SpellChecker._spellingStatusSection$i = null;
SP.UI.Spellcheck._spellingChunk._warningCssClass$i = 'ms-spellcheck-warning';
SP.UI.Spellcheck._spellingChunk._numberOfErrorToShowPerSection$p = 100;
SP.UI.Spellcheck._spellingError._cssClassName$i = 'ms-spellcheck-error';
SP.UI.Spellcheck._spellingError._unknownWord$i = 'UnknownWord';
SP.UI.Spellcheck._spellingError._errorMarkerStart$i = document.createElement(RTE.HtmlTagName.SPAN);
SP.UI.Spellcheck._spellingError._errorMarkerEnd$i = document.createElement(RTE.HtmlTagName.SPAN);
SP.UI.Spellcheck._spellingError._contextNodeTemplate$i = null;
SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChangeRegistered$i = false;
SP.UI.Spellcheck.SpellingEventHandler._spellingErrorOnChange$i = SP.UI.Spellcheck.SpellingEventHandler.onRteChange;
SP.UI.Spellcheck.SpellingEventHandler._errorClickedOn$p = null;
SP.UI.Spellcheck.SpellingEventHandler._events$p = 0;
SP.UI.Spellcheck.SpellingEventHandler._editableRegions$p = new Array(0);
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idNoSpelling$i = 'NoSpelling';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idSpellingGroup$i = 'SpellingGrp';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idDefaultLang$i = 'DefaultLangToSpell';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idSpellLang$i = 'SpellingLanguage';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idSpellMenu$i = 'SpellingMenu';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._idPublishingTab$i = 'PublishingTab';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandNoSpelling$i = 'NoSpelling';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellLang$i = 'SpellcheckUsing';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandSpellDefault$i = 'SpellcheckUsingDefault';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandPublishingTab$i = 'PublishingTab';
SP.UI.Spellcheck._spellcheckRichTextEditorComponentProvider._commandGetSpellCheckMenuXml$i = 'GetSpellCheckMenuXml';
SP.UI.Spellcheck._spellcheckComponent._instance$p = null;
SP.UI.Spellcheck._utilities._atomicMatch$i = new RegExp(RTE.Canvas.atomicItemClass);
SP.UI.Spellcheck.XMLRequest._request$i = new XMLHttpRequest();
SP.UI.Spellcheck.XMLRequest._requestInUse$i = false;
SP.UI.Spellcheck.XMLRequest._offset$i = 0;
SP.UI.Spellcheck.XMLRequest._showConfirmationDialogUponCompletion$i = false;
SP.UI.Spellcheck.XMLRequest._errorCount$i = 0;
SP.UI.Spellcheck.XMLRequest._messageBoxDialog$p = null;
};
sp_ui_spellcheck_initialize();

function Spellcheck()
{
    SP.UI.Spellcheck.SpellChecker.Spellcheck();
}

function Spellclear()
{
    SP.UI.Spellcheck.SpellChecker.Clear();
}

function SpellCleanCurrentElement()
{
    SP.UI.Spellcheck.SpellChecker.ClearCurrentElement();
}

function SpellOnUndoRedo()
{
    SP.UI.Spellcheck.SpellingEventHandler.OnUndoRedo();
}

function SpelcheckElement()
{
    SP.UI.Spellcheck.SpellChecker.SpellCheckCurrentElement();
}

function FindInlineHTMLEditor(element)
{
    if (null != element.id && typeof(RTE_GetEditorDocument) != 'undefined')
    {

        return RTE_GetEditorDocument(element.id);
    }

    return null;
}

function SpellCheckOneElement(webServiceUrl, dialogUrl, alertNoWebParts, element, lcid, onComplete)
{
    if (null == document.getElementById("__spPickerHasReturnValue"))
    {
        var hasReturnValueElement = document.createElement("INPUT");
        hasReturnValueElement.type = "hidden";
        hasReturnValueElement.id = "__spPickerHasReturnValue";
        document.body.appendChild(hasReturnValueElement);
    }
    if (null == document.getElementById("__spPickerReturnValueHolder"))
    {
        var returnValueHolderElement = document.createElement("INPUT");
        returnValueHolderElement.type = "hidden";
        returnValueHolderElement.id = "__spPickerReturnValueHolder";
        document.body.appendChild(returnValueHolderElement);
    }

    var index;
    var spellableFields = new Array();
    var chunksToSpell = new Array();

    spellableFields[0] = element;

    var docEditor = null;
    if (element.tagName == 'TEXTAREA')
    {
        docEditor = FindInlineHTMLEditor(element);
    }

    if (docEditor == null)
    {
        chunksToSpell[0] = new ChunkToSpell(element.value, "text", element.title, 0);
    }
    else if (docEditor.body.innerHTML.length > 0)
    {
        chunksToSpell[0] = new ChunkToSpell(docEditor.body.innerHTML, "html", element.title, 0);
    }

    var features = SpellCheckerDialogFeaturesString();
    var args = new Object();
    args.chunks = chunksToSpell;
    args.lang = lcid;
    args.webServiceUrl = webServiceUrl;
    args.alertNoWebParts = alertNoWebParts;

    var callback = function(spelledChunks)
    {
        if (null == spelledChunks)
        {
            var hasReturnValueElement = document.getElementById("__spPickerHasReturnValue");
            var returnValueHolderElement = document.getElementById("__spPickerReturnValueHolder");
            if (null != hasReturnValueElement && hasReturnValueElement.value == "1" && null != returnValueHolderElement)
            {
                try
                {
                    spelledChunks = jsonDeserialize(returnValueHolderElement.value);
                }
                catch (e) {}
            }
        }
        else if ("string" == typeof(spelledChunks))
        {
                try
                {
                    spelledChunks = jsonDeserialize(spelledChunks);
                }
                catch (e) {}
        }
        if (null != spelledChunks && "string" != typeof(spelledChunks) && "boolean" != typeof(spelledChunks))
        {
            for (index = 0; index < spelledChunks.length; ++index)
            {
                if ("INPUT" == spellableFields[spelledChunks[index].Index].tagName)
                {
                    if ("text" == spellableFields[spelledChunks[index].Index].type)
                    {

                        spellableFields[spelledChunks[index].Index].value = spelledChunks[index].Text;
                    }
                }
                else if ("TEXTAREA" == spellableFields[spelledChunks[index].Index].tagName)
                {
                    var elem = spellableFields[spelledChunks[index].Index];

                    var docEditor = FindInlineHTMLEditor(elem);

                    if (docEditor != null)
                    {
                        if (null != spelledChunks[index].Html)
                        {
                            docEditor.body.innerHTML = spelledChunks[index].Html;
                        }
                    }
                    else
                    {
                        if (null != spelledChunks[index].Text)
                        {
                            spellableFields[spelledChunks[index].Index].value = spelledChunks[index].Text;
                        }
                    }
                }
            }
            onComplete();
        }
    };

    commonShowModalDialog(dialogUrl, features, callback, args);
}

ExecuteAndRegisterBeginEndFunctions('SP.UI.Spellcheck.js',
    sp_ui_spellcheck_initialize, 
    null,
    function(){

        SP.UI.Spellcheck.Externs = function SP_UI_Spellcheck_Externs() {}
        if (typeof(spellcheck) != "undefined") SP.UI.Spellcheck.Externs.spellcheck = spellcheck;

        ExecuteOrDelayUntilScriptLoaded(SP.UI.Spellcheck.SpellChecker.Load, "sp.ribbon.js");

    });

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
    Sys.Application.notifyScriptLoaded();
}

if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.Spellcheck.js");
}
