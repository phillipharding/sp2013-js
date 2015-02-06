
Type.registerNamespace('RTE');

RTE.PublishingCanvas = function RTE_PublishingCanvas() {
    RTE.PublishingCanvas.initializeBase(this);
}
RTE.PublishingCanvas.loadPublishing = function RTE_PublishingCanvas$loadPublishing() {
    RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionBlurEvent, RTE.PublishingRichTextEditor.onRteBlur);
    RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionFocusEvent, RTE.PublishingRichTextEditor.onRteFocus);
    var provider = new RTE._publishingRichTextEditorComponentProvider();
    if (RTE.CleanPasteMode.passThroughClasses) {
        RTE.CleanPasteMode.passThroughClasses[RTE.CleanPasteMode.passThroughClasses.length] = RTE.ReusableContent._itemClass$i;
    }
    RTE.RichTextEditorComponentProvider.register(provider);
}
RTE.PublishingCanvas.registerImageField = function RTE_PublishingCanvas$registerImageField(controlId) {
    var control = $get(controlId);
    if (control) {
        RTE.PublishingRichTextEditor.makeEditableBorder(control);
        $addHandler(control, 'keydown', RTE.PublishingCanvas._updateEmptyPanelOnDeleteImg$p);
        $addHandler(control, 'cut', RTE.PublishingCanvas._cancelEvent$p);
        $addHandler(control, 'paste', RTE.PublishingCanvas._cancelEvent$p);
        RTE.PublishingCanvas._disableDragDrop$i(control);
    }
}
RTE.PublishingCanvas._disableDragDrop$i = function RTE_PublishingCanvas$_disableDragDrop$i(control) {
    if (control) {
        $addHandler(control, 'dragstart', RTE.PublishingCanvas._cancelEvent$p);
        $addHandler(control, 'drag', RTE.PublishingCanvas._cancelEvent$p);
        $addHandler(control, 'dragenter', RTE.PublishingCanvas._cancelEvent$p);
        $addHandler(control, 'dragover', RTE.PublishingCanvas._cancelEvent$p);
        $addHandler(control, 'drop', RTE.PublishingCanvas._cancelEvent$p);
    }
}
RTE.PublishingCanvas._cancelEvent$p = function RTE_PublishingCanvas$_cancelEvent$p(evt) {
    SP.UI.UIUtility.cancelEvent(evt);
    return false;
}
RTE.PublishingCanvas._updateEmptyPanelOnDeleteImg$p = function RTE_PublishingCanvas$_updateEmptyPanelOnDeleteImg$p(evt) {
    RTE.PublishingCanvas._updateEmtpyPanelOnDelete$p(evt, RTE.HtmlTagName.IMG);
}
RTE.PublishingCanvas._updateEmtpyPanelOnDelete$p = function RTE_PublishingCanvas$_updateEmtpyPanelOnDelete$p(evt, tagName) {
    if (evt.keyCode === Sys.UI.Key.backspace || evt.keyCode === Sys.UI.Key.del) {
        var region = RTE.Canvas.getEditableRegion(evt.target);
        if (!region) {
            return;
        }
        window.setTimeout(function() {
            if (!region.getElementsByTagName(tagName).length) {
                RTE.Canvas.showEmptyPanel(region);
            }
        }, 0);
    }
    else if (evt.keyCode === Sys.UI.Key.right || evt.keyCode === Sys.UI.Key.left) {
        RTE.PublishingCanvas._cancelEvent$p(evt);
        return false;
    }
}


RTE._publishingRibbonCommandNames = function RTE__publishingRibbonCommandNames() {
}


RTE.PublishingCommandNames = function RTE_PublishingCommandNames() {
}


RTE.PublishingRibbonIds = function RTE_PublishingRibbonIds() {
}


RTE.PublishingRichTextEditor = function RTE_PublishingRichTextEditor() {
    RTE.PublishingRichTextEditor.initializeBase(this);
}
RTE.PublishingRichTextEditor.setLinkName = function RTE_PublishingRichTextEditor$setLinkName(name) {
    var link = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.linkEvent);
    if (!link) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf(link.getAttribute('name') !== name || link.getAttribute('id') !== name);
    link.setAttribute('name', name);
    link.setAttribute('id', name);
    RTE.SnapshotManager.takeSnapshot();
}
RTE.PublishingRichTextEditor.getLinkName = function RTE_PublishingRichTextEditor$getLinkName() {
    var link = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.linkEvent);
    if (link) {
        return RTE.RteUtility.getAttribute(link, 'name');
    }
    return null;
}
RTE.PublishingRichTextEditor.insertOrEditSharepointLink = function RTE_PublishingRichTextEditor$insertOrEditSharepointLink() {
    RTE.SnapshotManager.takeSnapshot();
    var range = RTE.Cursor.get_range();
    var editableRegion = range.getEditableRegion();
    if (!editableRegion) {
        return;
    }
    var clientId = editableRegion.id;
    var defaultAssetLocation = RTE.Canvas.getProperty(editableRegion, 'DefaultAssetLocation');
    var defaultAssetImageLocation = RTE.Canvas.getProperty(editableRegion, 'DefaultAssetImageLocation');
    var currentWebBaseUrl = RTE.Canvas.getProperty(editableRegion, 'CurrentWebBaseUrl');
    var allowExternalUrls = !RTE.Canvas.getBooleanProperty(editableRegion, 'RestrictUrlsToSiteCollection');
    var elemLink = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.linkEvent);
    var inserting = false;
    if (!elemLink) {
        inserting = true;
        elemLink = document.createElement(RTE.HtmlTagName.a);
    }
    SP.SOD.executeFunc('AssetPickers.js', 'AssetPickerConfig', function() {
        var oldUrl = elemLink.href;
        RTE.Common.insertOrChangeHyperLink(clientId, defaultAssetLocation, defaultAssetImageLocation, currentWebBaseUrl, allowExternalUrls, elemLink, function(url, text, config, newAsset) {
            if (RTE._PSU._isNullOrEmptyString$i(url)) {
                return;
            }
            if (inserting) {
                range.wrapRange(elemLink);
                var images = elemLink.getElementsByTagName(RTE.HtmlTagName.IMG);
                var textContent = (!RTE._PSU._isNullOrUndefined$i(elemLink.innerText)) ? elemLink.innerText : elemLink.textContent;
                if (textContent === '' && (!images || !images.length)) {
                    var textNode = elemLink.ownerDocument.createTextNode(text);
                    elemLink.appendChild(textNode);
                }
            }
            RTE.SnapshotManager.setCurrentRegionDirtyIf(RTE._PSU._isNullOrEmptyString$i(oldUrl) || oldUrl !== url);
            range.moveAfterNode(elemLink);
            RTE.Cursor.update();
            RTE.SnapshotManager.takeSnapshot();
        });
    });
}
RTE.PublishingRichTextEditor.insertOrEditImage = function RTE_PublishingRichTextEditor$insertOrEditImage() {
    RTE.SnapshotManager.takeSnapshot();
    var range = RTE.Cursor.get_range();
    var editableRegion = range.getEditableRegion();
    if (!editableRegion) {
        return;
    }
    var clientId = editableRegion.id;
    var defaultAssetLocation = RTE.Canvas.getProperty(editableRegion, 'DefaultAssetLocation');
    var defaultAssetImageLocation = RTE.Canvas.getProperty(editableRegion, 'DefaultAssetImageLocation');
    var currentWebBaseUrl = RTE.Canvas.getProperty(editableRegion, 'CurrentWebBaseUrl');
    var allowExternalUrls = !RTE.Canvas.getBooleanProperty(editableRegion, 'RestrictUrlsToSiteCollection');
    var elemImage = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    var inserting = false;
    if (!elemImage) {
        inserting = true;
        elemImage = document.createElement(RTE.HtmlTagName.IMG);
        RTE.RteUtility.initImage(elemImage);
    }
    SP.SOD.executeFunc('AssetPickers.js', 'AssetPickerConfig', function() {
        var oldUrl = RTE._imageRenditionCommands.getSourceUrlOnly(elemImage.src);
        RTE.Common.insertOrChangeImage(clientId, defaultAssetLocation, defaultAssetImageLocation, currentWebBaseUrl, allowExternalUrls, elemImage, function(url, text, config, newAsset) {
            elemImage.src = RTE._imageRenditionCommands.addRenditionInfoToImageSrc(elemImage.src);
            if (inserting && !RTE._PSU._isNullOrEmptyString$i(elemImage.src)) {
                RTE.Cursor.get_range().deleteContent();
                RTE.Cursor.get_range().insertNode(elemImage);
            }
            RTE.SnapshotManager.setCurrentRegionDirtyIf(RTE._PSU._isNullOrEmptyString$i(oldUrl) || elemImage.src !== oldUrl);
            RTE.Cursor.update();
            RTE.SnapshotManager.takeSnapshot();
            RTE.RteUtility.showRibbonTab(RTE.RibbonIds.imageContextualGroup, RTE.RibbonCommandNames.imageTab);
        });
    });
}
RTE.PublishingRichTextEditor.setImageHorizontalSpace = function RTE_PublishingRichTextEditor$setImageHorizontalSpace(space) {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (!image) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf(image.style.marginLeft !== space || image.style.marginRight !== space);
    image.style.marginLeft = space;
    image.style.marginRight = space;
    RTE.SnapshotManager.takeSnapshot();
}
RTE.PublishingRichTextEditor.setImageVerticalSpace = function RTE_PublishingRichTextEditor$setImageVerticalSpace(space) {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (!image) {
        return;
    }
    RTE.SnapshotManager.takeSnapshot();
    RTE.SnapshotManager.setCurrentRegionDirtyIf(image.style.marginTop !== space || image.style.marginBottom !== space);
    image.style.marginTop = space;
    image.style.marginBottom = space;
    RTE.SnapshotManager.takeSnapshot();
}
RTE.PublishingRichTextEditor.transferContents = function RTE_PublishingRichTextEditor$transferContents(editableRegionId) {
    var editableRegion = $get(editableRegionId);
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    RTE.PublishingRichTextEditor.transferContentsOfEditableRegion(editableRegion);
}
RTE.PublishingRichTextEditor.transferContentsOfEditableRegion = function RTE_PublishingRichTextEditor$transferContentsOfEditableRegion(editableRegion) {
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    RTE.RichTextEditor.transferContentsToInputFieldNode(editableRegion, true);
    var storageFieldId = RTE.RteUtility.getAttribute(editableRegion, 'StorageFieldId');
    if (!storageFieldId) {
        return;
    }
    var field = $get(storageFieldId);
    if (field) {
        var storagehtml = RTE.ReusableContent.getEditableRegionStorageHtml(editableRegion);
        RTE.RteUtility.setInputValue(field, storagehtml);
    }
}
RTE.PublishingRichTextEditor.replaceContent = function RTE_PublishingRichTextEditor$replaceContent(editableRegionId, newHtml) {
    var editableRegion = $get(editableRegionId);
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    editableRegion.innerHTML = newHtml;
    RTE.PublishingRichTextEditor.transferContentsOfEditableRegion(editableRegion);
}
RTE.PublishingRichTextEditor.hideValidationError = function RTE_PublishingRichTextEditor$hideValidationError(editableRegionId) {
    var editableRegion = $get(editableRegionId);
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    var storageFieldId = RTE.RteUtility.getAttribute(editableRegion, 'StorageFieldId');
    if (!storageFieldId) {
        return;
    }
}
RTE.PublishingRichTextEditor.onLoad = function RTE_PublishingRichTextEditor$onLoad(editableRegionId) {
    RTE.RteUtility.assertNotNull('editableRegionId', editableRegionId);
    var editableRegion = $get(editableRegionId);
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    RTE.Canvas.restoreViewHtml(editableRegion);
    RTE.PublishingRichTextEditor._prepareField$i(editableRegion);
}
RTE.PublishingRichTextEditor._prepareField$i = function RTE_PublishingRichTextEditor$_prepareField$i(editableRegion) {
    RTE.Canvas.makeRegionEditable(editableRegion);
    RTE.PublishingRichTextEditor.makeEditableBorder(editableRegion);
    var emptyPanelId = RTE.Canvas.getProperty(editableRegion, 'EmptyPanelId');
    if (!RTE._PSU._isNullOrEmptyString$i(emptyPanelId)) {
        var emptyPanel = $get(emptyPanelId);
        RTE.Canvas.setRedirectOnNode(emptyPanel, editableRegion.id);
    }
    if (!editableRegion.style.minHeight && RTE.RteUtility.isFirefox()) {
        editableRegion.style.minHeight = '18px';
    }
    if (!RTE.Canvas.getCachedRestriction(editableRegion, 'AllowDragDrop', true)) {
        RTE.PublishingCanvas._disableDragDrop$i(editableRegion);
    }
    RTE.PublishingRichTextEditor._setRedirect$p(editableRegion);
    var updateFocus = true;
    if (RTE.Canvas.initialFocusOnRichText) {
        updateFocus = RTE.Canvas.initialFocusOnRichText();
    }
    if (updateFocus) {
        var markers = RTE.SnapshotManager.getMarkers();
        if (!RTE.PublishingRichTextEditor._setInitialFocus$p && markers.length === 2 && markers[0] && markers[1]) {
            RTE.Cursor.get_range().setMarkersCollection(markers);
            var focusRegion = RTE.Cursor.get_range().getEditableRegion();
            if (focusRegion) {
                RTE.RteUtility.focusNoFail(focusRegion);
            }
            RTE.Cursor.update();
            RTE.PublishingRichTextEditor._setInitialFocus$p = true;
            RTE.PublishingRichTextEditor._foundInitialFocusRegion$p = true;
        }
        else {
            var hasInitialFocus = RTE.Canvas.getProperty(editableRegion, 'HasInitialFocus');
            if (hasInitialFocus && hasInitialFocus && !RTE.PublishingRichTextEditor._foundInitialFocusRegion$p) {
                RTE.PublishingRichTextEditor._setInitialFocusToEditableRegion$p(editableRegion);
                RTE.PublishingRichTextEditor._foundInitialFocusRegion$p = true;
            }
            else if (!RTE.PublishingRichTextEditor._setInitialFocus$p) {
                RTE.PublishingRichTextEditor._setInitialFocusToEditableRegion$p(editableRegion);
            }
        }
    }
}
RTE.PublishingRichTextEditor._setRedirect$p = function RTE_PublishingRichTextEditor$_setRedirect$p(editableRegion) {
    var node = editableRegion;
    while (node) {
        if (node.className) {
            if (node.className.indexOf(RTE.PublishingRichTextEditor._formFieldContainerClass$p) !== -1) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    var child = node.childNodes[i];
                    if (child.className && child.className.indexOf(RTE.PublishingRichTextEditor._formFieldLabelContainerClass$p) !== -1) {
                        RTE.Canvas.setRedirectOnNode(node, editableRegion.id);
                    }
                }
                return;
            }
        }
        node = node.parentNode;
    }
}
RTE.PublishingRichTextEditor._setInitialFocusToEditableRegion$p = function RTE_PublishingRichTextEditor$_setInitialFocusToEditableRegion$p(editableRegion) {
    RTE.RteUtility.focusNoFail(editableRegion);
    RTE.Cursor.get_range().moveToStartOfNode(editableRegion);
    RTE.Cursor.update();
    RTE.PublishingRichTextEditor._setInitialFocus$p = true;
}
RTE.PublishingRichTextEditor._queryImageVerticalSpace$i = function RTE_PublishingRichTextEditor$_queryImageVerticalSpace$i(properties) {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (!image) {
        return;
    }
    var marginTop = image.style.marginTop;
    if (marginTop === '' && image.currentStyle) {
        marginTop = image.currentStyle.marginTop;
    }
    RTE.RteUtility.parseStringForSpinnerControl(marginTop, properties, 0, 'px');
}
RTE.PublishingRichTextEditor._queryImageHorzontalSpace$i = function RTE_PublishingRichTextEditor$_queryImageHorzontalSpace$i(properties) {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (!image) {
        return;
    }
    var marginLeft = image.style.marginLeft;
    if (marginLeft === '' && image.currentStyle) {
        marginLeft = image.currentStyle.marginLeft;
    }
    RTE.RteUtility.parseStringForSpinnerControl(marginLeft, properties, 0, 'px');
}
RTE.PublishingRichTextEditor.removeActive = function RTE_PublishingRichTextEditor$removeActive(node) {
    while (node) {
        if (node.className) {
            if (node.className.indexOf(RTE.PublishingRichTextEditor._formFieldValueContainerClass$p) !== -1) {
                Sys.UI.DomElement.removeCssClass(node, 'ms-rte-border');
                return;
            }
        }
        node = node.parentNode;
    }
}
RTE.PublishingRichTextEditor.addActive = function RTE_PublishingRichTextEditor$addActive(node) {
    while (node) {
        if (node.className) {
            if (node.className.indexOf(RTE.PublishingRichTextEditor._formFieldValueContainerClass$p) !== -1) {
                Sys.UI.DomElement.addCssClass(node, 'ms-rte-border');
                return;
            }
        }
        node = node.parentNode;
    }
}
RTE.PublishingRichTextEditor.makeEditableBorder = function RTE_PublishingRichTextEditor$makeEditableBorder(node) {
    while (node) {
        if (node.className) {
            if (node.className.indexOf(RTE.PublishingRichTextEditor._formFieldValueContainerClass$p) !== -1) {
                Sys.UI.DomElement.addCssClass(node, 'ms-rte-border-field');
                return;
            }
        }
        node = node.parentNode;
    }
}
RTE.PublishingRichTextEditor.onRteBlur = function RTE_PublishingRichTextEditor$onRteBlur(sender, args) {
    var editableRegion = args.oldEditableRegion;
    RTE.PublishingRichTextEditor.removeActive(editableRegion);
}
RTE.PublishingRichTextEditor.onRteFocus = function RTE_PublishingRichTextEditor$onRteFocus(sender, args) {
    var editableRegion = args.newEditableRegion;
    RTE.PublishingRichTextEditor.addActive(editableRegion);
}
RTE.PublishingRichTextEditor._updateRibbon$i = function RTE_PublishingRichTextEditor$_updateRibbon$i() {
    RTE.Imports.ExecuteOrDelayUntilScriptLoaded(function() {
        if (window.SP && window.SP.Ribbon) {
            var pm = SP.Ribbon.PageManager.get_instance();
            if (pm) {
                pm.get_commandDispatcher().executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
            }
        }
    }, 'sp.ribbon.js');
}


RTE._publishingRichTextEditorComponentProvider = function RTE__publishingRichTextEditorComponentProvider() {
    this.$$d__commandHandlerQueryImageSrc$p$1 = Function.createDelegate(this, this._commandHandlerQueryImageSrc$p$1);
    this.$$d__commandHandlerImageSrc$p$1 = Function.createDelegate(this, this._commandHandlerImageSrc$p$1);
    RTE._publishingRichTextEditorComponentProvider.initializeBase(this);
}
RTE._publishingRichTextEditorComponentProvider._initImageRenditionsMenu$p = function RTE__publishingRichTextEditorComponentProvider$_initImageRenditionsMenu$p() {
    if (RTE.Externals.imageRenditions && RTE.Externals.imageRenditions.Renditions.length > 0) {
        var sb = new Sys.StringBuilder();
        sb.append('<Menu Id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu\'>');
        sb.append('<MenuSection Id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.Renditions\'>');
        sb.append('<Controls Id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.Renditions.Controls\'>');
        for (var i = 0; i < RTE.Externals.imageRenditions.Renditions.length; i++) {
            sb.append('<Button');
            sb.append(' id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.Rendition.Item');
            sb.append(RTE.Externals.imageRenditions.Renditions[i].Id.toString());
            sb.append('\' LabelText=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(RTE.Externals.imageRenditions.Renditions[i].Name));
            sb.append('\' CommandType=\'General\' MenuItemId=\'Rendition');
            sb.append(RTE.Externals.imageRenditions.Renditions[i].Id.toString());
            sb.append('\' CommandValueId=\'');
            sb.append(RTE.Externals.imageRenditions.Renditions[i].Id.toString());
            sb.append('\' Command=\'');
            sb.append(RTE.PublishingCommandNames.pickImageRenditionClick);
            sb.append('\' />');
        }
        sb.append('</Controls></MenuSection>');
        sb.append('<MenuSection Id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.EditRenditions\'>');
        sb.append('<Controls Id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.EditRenditions.Controls\'>');
        sb.append('<Button');
        sb.append(' id=\'Ribbon.Image.Image.Renditions.PickRendition.Menu.EditRendition.Edit\' LabelText=\'');
        sb.append(SP.Utilities.HttpUtility.escapeXmlText(SP.Publishing.Resources.editImageRenditions));
        sb.append('\' CommandType=\'General\' MenuItemId=\'EditRendition\' Command=\'');
        sb.append(RTE.PublishingCommandNames.editImageRenditionClick);
        sb.append('\' />');
        sb.append('</Controls></MenuSection>');
        sb.append('</Menu>');
        return sb.toString();
    }
    return '';
}
RTE._publishingRichTextEditorComponentProvider._initReusableContentMenu$p = function RTE__publishingRichTextEditorComponentProvider$_initReusableContentMenu$p() {
    if (RTE.ReusableItems.items) {
        var sb = new Sys.StringBuilder();
        sb.append('<Menu Id=\'Ribbon.EditingTools.CPInsert.Content.ReusableContent.Menu\'>');
        sb.append('<MenuSection Id=\'Ribbon.EditingTools.CPInsert.Content.ReusableContent.Menu.ReusableContent\'>');
        sb.append('<Controls Id=\'Ribbon.EditingTools.CPInsert.Content.ReusableContent.Menu.ReusableContent.Controls\'>');
        for (var i = 0; i < RTE.ReusableItems.items.length; i++) {
            sb.append('<Button');
            sb.append(' id=\'Ribbon.EditingTools.CPInsert.Content.ReusableContent.Menu.ReusableContent.Item');
            sb.append(i.toString());
            sb.append('\' LabelText=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(RTE.ReusableItems.items[i].title));
            sb.append('\' CommandType=\'General\' MenuItemId=\'');
            sb.append(RTE.PublishingRibbonIds.reusableItem + i.toString());
            sb.append('\' CommandValueId=\'');
            sb.append(i.toString());
            sb.append('\' Command=\'');
            sb.append(RTE.PublishingCommandNames.reusableItem);
            sb.append('\' CommandPreview=\'');
            sb.append(RTE.PublishingCommandNames.reusableItemPreview);
            sb.append('\' CommandRevert=\'');
            sb.append(RTE.PublishingCommandNames.reusableItemPreviewRevert);
            sb.append('\' />');
        }
        sb.append('<Button');
        sb.append(' id=\'Ribbon.EditingTools.CPInsert.Content.ReusableContent.Menu.ReusableContent.Dialog\' LabelText=\'');
        sb.append(SP.Utilities.HttpUtility.escapeXmlText(SP.Publishing.Resources.labelMoreChoice));
        sb.append('\' CommandType=\'General\'');
        sb.append(' Command=\'');
        sb.append(RTE.PublishingCommandNames.reusableDialog);
        sb.append('\' />');
        sb.append('</Controls></MenuSection></Menu>');
        return sb.toString();
    }
    return '';
}
RTE._publishingRichTextEditorComponentProvider._initSocialPluginsMenu$p = function RTE__publishingRichTextEditorComponentProvider$_initSocialPluginsMenu$p() {
    var adder = window.WPAdder;
    if (!adder) {
        window.LoadWPAdderOnDemand();
        return;
    }
    if (adder) {
        adder.selectCategoryByTitle(SP.Utilities.HttpUtility.escapeXmlText(SP.Publishing.Resources.socialPlugin));
        adder._showCategoryColumn(false);
        adder.show();
    }
}
RTE._publishingRichTextEditorComponentProvider._canHandleImageRenditions$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleImageRenditions$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleImage$p(editableRegion) && !!RTE.Externals.imageRenditions && RTE._imageRenditionCommands.canChangeRendition(editableRegion);
}
RTE._publishingRichTextEditorComponentProvider._canHandleRca$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleRca$p(editableRegion) {
    return !!RTE.Externals.rca && RTE.Externals.rca.enabled;
}
RTE._publishingRichTextEditorComponentProvider._canHandleRcaUpdate$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleRcaUpdate$p(editableRegion) {
    return !!RTE.Externals.rca && RTE.Externals.rca.enabled && RTE.Externals.rca.pageWritable;
}
RTE._publishingRichTextEditorComponentProvider._canHandleReusableContent$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleReusableContent$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowReusableContent', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleEditSource$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleEditSource$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowHtmlSourceEditing', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleInsertTab$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleInsertTab$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowInsert', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleInsertOtherThenLink$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleInsertOtherThenLink$p(editableRegion) {
    return !RTE.Canvas.getCachedRestriction(editableRegion, 'AllowOnlyInsertLink', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleEmbedding$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleEmbedding$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowEmbedding', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleImage$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleImage$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowImages', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleImageFormating$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleImageFormating$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleImage$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowImageFormatting', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleImageStyle$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleImageStyle$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleStyles$p(editableRegion) && RTE._publishingRichTextEditorComponentProvider._canHandleImageFormating$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowImageStyles', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleImagePositioning$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleImagePositioning$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleImageFormating$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowImagePositioning', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleFonts$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleFonts$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFonts', true) && !RTE.Canvas.getCachedRestriction(editableRegion, 'DisableBasicFormattingButtons', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleFontsMenu$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleFontsMenu$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFonts$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontsMenu', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleFontSize$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleFontSize$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontsMenu$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontSizesMenu', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontSize$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleStandardFontSize$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontSize$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontStandardSizes', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleFontFamily$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontsMenu$p(editableRegion);
}
RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontFamily$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleThemeFontFamily$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowThemeFonts', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontFamily$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleStandardFontFamily$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowStandardFonts', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleElementWithStyle$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleStyles$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowHeadings', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleInsertLinks$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleInsertLinks$p(editableRegion) {
    var link = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.linkEvent);
    if (link) {
        return false;
    }
    var atomic = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.atomicEvent);
    if (atomic) {
        return false;
    }
    return RTE._publishingRichTextEditorComponentProvider._canHandleLinks$p(editableRegion);
}
RTE._publishingRichTextEditorComponentProvider._canHandleLinks$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleLinks$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowHyperlinks', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleLists$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleLists$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowLists', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleTables$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleTables$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowTables', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleStyles$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleStyles$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowStyles', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleTableStyles$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleTableStyles$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleTables$p(editableRegion) && RTE._publishingRichTextEditorComponentProvider._canHandleInsertOtherThenLink$p(editableRegion) && RTE._publishingRichTextEditorComponentProvider._canHandleStyles$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowTableStyles', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleTextStyles$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleTextStyles$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleStyles$p(editableRegion) && !RTE.Canvas.getCachedRestriction(editableRegion, 'DisableCustomStyles', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleStylesButton$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleStylesButton$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p(editableRegion) || RTE._publishingRichTextEditorComponentProvider._canHandleTextStyles$p(editableRegion);
}
RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleFontColors$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontColorsMenu', true) && !RTE.Canvas.getCachedRestriction(editableRegion, 'DisableBasicFormattingButtons', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleCustomFontColors$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleCustomFontColors$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontCustomColors', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleStandardFontColors$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontStandardColors', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleThemeFontColors$p(editableRegion) {
    return RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p(editableRegion) && RTE.Canvas.getCachedRestriction(editableRegion, 'AllowFontThemeColors', true);
}
RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleParagraphFormatting$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowParagraphFormatting', true) && !RTE.Canvas.getCachedRestriction(editableRegion, 'DisableBasicFormattingButtons', false);
}
RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p = function RTE__publishingRichTextEditorComponentProvider$_canHandleBasicFormatting$p(editableRegion) {
    return RTE.Canvas.getCachedRestriction(editableRegion, 'AllowTextMarkup', true) && !RTE.Canvas.getCachedRestriction(editableRegion, 'DisableBasicFormattingButtons', false);
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerChangeRendition$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerChangeRendition$p(commandId, properties, sequence) {
    var renditionId = parseInt(properties['CommandValueId']);
    RTE._imageRenditionCommands.changeImageRendition(renditionId);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerEditRendition$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerEditRendition$p(commandId, properties, sequence) {
    RTE._imageRenditionCommands.editImageRenditions();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerImageRenditionsMenu$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerImageRenditionsMenu$p(commandid, properties, sequence) {
    var props = properties;
    props.PopulationXML = RTE._publishingRichTextEditorComponentProvider._initImageRenditionsMenu$p();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentMenu$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerReusableContentMenu$p(commandId, properties, sequence) {
    var props = properties;
    props.PopulationXML = RTE._publishingRichTextEditorComponentProvider._initReusableContentMenu$p();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerSocialPluginsMenu$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerSocialPluginsMenu$p(commandId, properties, sequence) {
    RTE._publishingRichTextEditorComponentProvider._initSocialPluginsMenu$p();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointLinks$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerSharepointLinks$p(commandId, properties, sequence) {
    RTE.PublishingRichTextEditor.insertOrEditSharepointLink();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointImage$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerSharepointImage$p(commandId, properties, sequence) {
    RTE.PublishingRichTextEditor.insertOrEditImage();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerImageHorizontalSpace$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerImageHorizontalSpace$p(commandId, properties, sequence) {
    var strValue = RTE.RteUtility.getStringValueFromSpinnerControlProperties(properties);
    RTE.PublishingRichTextEditor.setImageHorizontalSpace(strValue);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerImageVerticalSpace$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerImageVerticalSpace$p(commandId, properties, sequence) {
    var strValue = RTE.RteUtility.getStringValueFromSpinnerControlProperties(properties);
    RTE.PublishingRichTextEditor.setImageVerticalSpace(strValue);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerLinkBookmark$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerLinkBookmark$p(commandId, properties, sequence) {
    RTE.RteUtility.classMustExist('CUI.Controls.TextBoxCommandProperties');
    RTE.PublishingRichTextEditor.setLinkName(properties[CUI.Controls.TextBoxCommandProperties.Value]);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryLinkBookmark$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerQueryLinkBookmark$p(commandId, properties, sequence) {
    RTE.RteUtility.classMustExist('CUI.Controls.TextBoxCommandProperties');
    var str = RTE.PublishingRichTextEditor.getLinkName();
    if (!RTE._PSU._isNullOrUndefined$i(str)) {
        properties[CUI.Controls.TextBoxCommandProperties.Value] = str;
    }
    else {
        properties[CUI.Controls.TextBoxCommandProperties.Value] = '';
    }
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryImageHorizontalSpace$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerQueryImageHorizontalSpace$p(commandId, properties, sequence) {
    RTE.PublishingRichTextEditor._queryImageHorzontalSpace$i(properties);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryImageVerticalSpace$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerQueryImageVerticalSpace$p(commandId, properties, sequence) {
    RTE.PublishingRichTextEditor._queryImageVerticalSpace$i(properties);
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentOpen$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerReusableContentOpen$p(commandId, properties, sequence) {
    RTE.PreviewManager.get_instance().beginPreview();
    RTE._publishingRichTextEditorComponentProvider._lastReusableIndex$p = -1;
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentClose$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerReusableContentClose$p(commandId, properties, sequence) {
    RTE.PreviewManager.get_instance().endPreview();
    RTE._publishingRichTextEditorComponentProvider._lastReusableIndex$p = -1;
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableItem$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerReusableItem$p(commandId, properties, sequence) {
    var index = parseInt(properties['CommandValueId']);
    if (commandId === RTE.PublishingCommandNames.reusableItemPreview || commandId === RTE.PublishingCommandNames.reusableItem) {
        if (RTE._publishingRichTextEditorComponentProvider._lastReusableIndex$p !== index) {
            RTE.PreviewManager.get_instance().restoreBeginState();
            var item = RTE.ReusableItems.items[index];
            RTE.ReusableContent.insertReusableItem(item);
            RTE.PreviewManager.get_instance().commitCommandOrAfterPreview(commandId);
            RTE._publishingRichTextEditorComponentProvider._lastReusableIndex$p = index;
        }
    }
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableDialog$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerReusableDialog$p(commandId, properties, sequence) {
    RTE.ReusableContent.insertReusableItemFromDialog();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerRcaOpenSource$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerRcaOpenSource$p(commandId, properties, sequence) {
    RTE.Rca.openSourceDocument();
    return true;
}
RTE._publishingRichTextEditorComponentProvider._commandHandlerRcaUpdateDocument$p = function RTE__publishingRichTextEditorComponentProvider$_commandHandlerRcaUpdateDocument$p(commandId, properties, sequence) {
    RTE.Rca.updateFromSourceDocument();
    return true;
}
RTE._publishingRichTextEditorComponentProvider.prototype = {
    _previousProvider$p$1: null,
    _focustedCommands$p$1: null,
    _commandsDictionary$p$1: null,
    _canHandleDictionary$p$1: null,
    
    init: function RTE__publishingRichTextEditorComponentProvider$init(previousProvider) {
        this._previousProvider$p$1 = previousProvider;
        this._focustedCommands$p$1 = [ RTE._publishingRibbonCommandNames.changeLinkMenuOpen, RTE._publishingRibbonCommandNames.changeLinkMenuClose, RTE.PublishingCommandNames.insertLinkSharepoint, RTE.PublishingCommandNames.insertImageSharepoint, RTE.PublishingCommandNames.imageHorizontalSpace, RTE.PublishingCommandNames.imageVerticalSpace, RTE.PublishingCommandNames.linkBookmark, RTE.PublishingCommandNames.queryImageHorizontalSpace, RTE.PublishingCommandNames.queryImageVerticalSpace, RTE.PublishingCommandNames.reusableItem, RTE.PublishingCommandNames.reusableItemPreview, RTE.PublishingCommandNames.reusableItemPreviewRevert, RTE.PublishingCommandNames.reusableDialog, RTE._publishingRibbonCommandNames.insertContentGroup, RTE._publishingRibbonCommandNames.reusableMenu, RTE._publishingRibbonCommandNames.reusableMenuClose, RTE._publishingRibbonCommandNames.getReusableContentMenuXml, RTE._publishingRibbonCommandNames.getSocialPluginMenuXml, RTE._publishingRibbonCommandNames.imageSpacingGroup, RTE.PublishingCommandNames.rcaOpenSource, RTE.PublishingCommandNames.rcaUpdateDocument, RTE._publishingRibbonCommandNames.rcaContextualGroup, RTE._publishingRibbonCommandNames.rcaTab, RTE._publishingRibbonCommandNames.rcaViewUpdateGroup, RTE.PublishingCommandNames.linkEditSharepoint, RTE._publishingRibbonCommandNames.linkBookmarkLabel, RTE._publishingRibbonCommandNames.imageHorizontalSpaceLabel, RTE._publishingRibbonCommandNames.imageVerticalSpaceLabel, RTE.PublishingCommandNames.pickImageRendition, RTE.PublishingCommandNames.pickImageRenditionClick, RTE.PublishingCommandNames.editImageRenditionClick, RTE._publishingRibbonCommandNames.getImageRenditionsMenu ];
    },
    
    canHandleCommand: function RTE__publishingRichTextEditorComponentProvider$canHandleCommand(commandId) {
        var editableRegion = RTE.Canvas.currentEditableRegion();
        if (!editableRegion) {
            return false;
        }
        if (RTE.Canvas.getCachedRestriction(editableRegion, 'DisableRibbonCommands', false)) {
            return false;
        }
        this.initializeCanHandleHandlerDictionary();
        var value = this._canHandleDictionary$p$1[commandId];
        if (!RTE._PSU._isNullOrUndefined$i(value)) {
            var handler = value;
            if (!handler(editableRegion)) {
                return false;
            }
        }
        if (Array.indexOf(this._focustedCommands$p$1, commandId) >= 0) {
            return true;
        }
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.canHandleCommand(commandId);
        }
        return false;
    },
    
    initializeCanHandleHandlerDictionary: function RTE__publishingRichTextEditorComponentProvider$initializeCanHandleHandlerDictionary() {
        if (!RTE._PSU._isNullOrUndefined$i(this._canHandleDictionary$p$1)) {
            return;
        }
        this._canHandleDictionary$p$1 = {};
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.rcaContextualGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleRca$p;
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.rcaTab] = RTE._publishingRichTextEditorComponentProvider._canHandleRca$p;
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.rcaViewUpdateGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleRca$p;
        this._canHandleDictionary$p$1[RTE.PublishingCommandNames.rcaOpenSource] = RTE._publishingRichTextEditorComponentProvider._canHandleRca$p;
        this._canHandleDictionary$p$1[RTE.PublishingCommandNames.rcaUpdateDocument] = RTE._publishingRichTextEditorComponentProvider._canHandleRcaUpdate$p;
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.reusableMenu] = RTE._publishingRichTextEditorComponentProvider._canHandleReusableContent$p;
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.reusableMenuClose] = RTE._publishingRichTextEditorComponentProvider._canHandleReusableContent$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.editSource] = RTE._publishingRichTextEditorComponentProvider._canHandleEditSource$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.insertTab] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertTab$p;
        this._canHandleDictionary$p$1[RTE.PublishingCommandNames.pickImageRendition] = RTE._publishingRichTextEditorComponentProvider._canHandleImageRenditions$p;
        this._canHandleDictionary$p$1[RTE.PublishingCommandNames.pickImageRenditionClick] = RTE._publishingRichTextEditorComponentProvider._canHandleImageRenditions$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.insertDocumentOptions] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertOtherThenLink$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.insertImage] = RTE._publishingRichTextEditorComponentProvider._canHandleImage$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.insertImageMenuOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleImage$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.imageContextualGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleImage$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.imageStyleGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleImageStyle$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.imageArrangeGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleImagePositioning$p;
        this._canHandleDictionary$p$1[RTE._publishingRibbonCommandNames.imageSpacingGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleImageFormating$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.fontGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleFonts$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.selectFontFamily] = RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.fontFamilyStyleOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyStyleValue] = RTE._publishingRichTextEditorComponentProvider._canHandleFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.selectFontSize] = RTE._publishingRichTextEditorComponentProvider._canHandleFontSize$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.fontSizeStyleOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleFontSize$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontSizeStyleValue] = RTE._publishingRichTextEditorComponentProvider._canHandleFontSize$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyCssClass] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyCssClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyCssClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyThemeClass] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyThemeClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontFamilyThemeClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontFamily$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontSizeCssClass] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontSize$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontSizeCssClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontSize$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.fontSizeCssClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontSize$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.elementWithStyle] = RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.elementWithStylePreview] = RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.elementWithStylePreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.elementWithStyleOptions] = RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.elementWithStyleOptionsOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleElementWithStyle$p;
        this._canHandleDictionary$p$1[RTE.PublishingCommandNames.insertLinkSharepoint] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertLinks$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.uploadDocumentRTE] = RTE._publishingRichTextEditorComponentProvider._canHandleLinks$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.insertLink] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertLinks$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.insertLinkMenuOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertLinks$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.insertLinkWeb] = RTE._publishingRichTextEditorComponentProvider._canHandleInsertLinks$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.linkContextualGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleLinks$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.bulletedList] = RTE._publishingRichTextEditorComponentProvider._canHandleLists$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.numberedList] = RTE._publishingRichTextEditorComponentProvider._canHandleLists$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.tableContextualGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleTables$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.tableDesignTab] = RTE._publishingRichTextEditorComponentProvider._canHandleTableStyles$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.insertTableMenu] = RTE._publishingRichTextEditorComponentProvider._canHandleTables$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.textStyle] = RTE._publishingRichTextEditorComponentProvider._canHandleTextStyles$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.textStylePreview] = RTE._publishingRichTextEditorComponentProvider._canHandleTextStyles$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.textStylePreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleTextStyles$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.selectTextStyle] = RTE._publishingRichTextEditorComponentProvider._canHandleStylesButton$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.selectTextStyleOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleStylesButton$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.selectFontColor] = RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.selectFontColorOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.selectBackgroundColor] = RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.selectBackgroundColorOpen] = RTE._publishingRichTextEditorComponentProvider._canHandleFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorCssClass] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorCssClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorCssClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorCssClass] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorCssClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorCssClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleStandardFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorCustom] = RTE._publishingRichTextEditorComponentProvider._canHandleCustomFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorCustom] = RTE._publishingRichTextEditorComponentProvider._canHandleCustomFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorThemeClass] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorThemeClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.colorThemeClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorThemeClass] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorThemeClassPreview] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.backgroundColorThemeClassPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._canHandleThemeFontColors$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.alignLeft] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.alignCenter] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.alignRight] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.alignJustify] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.decreaseIndent] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.increaseIndent] = RTE._publishingRichTextEditorComponentProvider._canHandleParagraphFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.bold] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.italic] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.subscript] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.superscript] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.underline] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.strikeThrough] = RTE._publishingRichTextEditorComponentProvider._canHandleBasicFormatting$p;
        this._canHandleDictionary$p$1[RTE.RibbonCommandNames.embedGroup] = RTE._publishingRichTextEditorComponentProvider._canHandleEmbedding$p;
        this._canHandleDictionary$p$1[RTE.CommandNames.insertEmbedding] = RTE._publishingRichTextEditorComponentProvider._canHandleEmbedding$p;
    },
    
    getFocusedCommands: function RTE__publishingRichTextEditorComponentProvider$getFocusedCommands() {
        if (this._previousProvider$p$1) {
            var commands = this._previousProvider$p$1.getFocusedCommands();
            var ret = [];
            Array.addRange(ret, this._focustedCommands$p$1);
            Array.addRange(ret, commands);
            return ret;
        }
        return this._focustedCommands$p$1;
    },
    
    getGlobalCommands: function RTE__publishingRichTextEditorComponentProvider$getGlobalCommands() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.getGlobalCommands();
        }
        return null;
    },
    
    handleCommand: function RTE__publishingRichTextEditorComponentProvider$handleCommand(commandId, properties, sequence) {
        if (!commandId) {
            return false;
        }
        this.initializeCommandHandlerDictionary();
        var value = this._commandsDictionary$p$1[commandId];
        if (!RTE._PSU._isNullOrUndefined$i(value)) {
            var handler = value;
            return handler(commandId, properties, sequence);
        }
        else {
            if (this._previousProvider$p$1) {
                return this._previousProvider$p$1.handleCommand(commandId, properties, sequence);
            }
        }
        return false;
    },
    
    initializeCommandHandlerDictionary: function RTE__publishingRichTextEditorComponentProvider$initializeCommandHandlerDictionary() {
        if (!RTE._PSU._isNullOrUndefined$i(this._commandsDictionary$p$1)) {
            return;
        }
        this._commandsDictionary$p$1 = {};
        this._commandsDictionary$p$1[RTE._publishingRibbonCommandNames.getReusableContentMenuXml] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentMenu$p;
        this._commandsDictionary$p$1[RTE._publishingRibbonCommandNames.reusableMenu] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentOpen$p;
        this._commandsDictionary$p$1[RTE._publishingRibbonCommandNames.reusableMenuClose] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableContentClose$p;
        this._commandsDictionary$p$1[RTE._publishingRibbonCommandNames.getSocialPluginMenuXml] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSocialPluginsMenu$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.linkEditSharepoint] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointLinks$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.insertLinkSharepoint] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointLinks$p;
        this._commandsDictionary$p$1[RTE.CommandNames.insertLink] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointLinks$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.insertImageSharepoint] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointImage$p;
        this._commandsDictionary$p$1[RTE.CommandNames.insertImage] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointImage$p;
        this._commandsDictionary$p$1[RTE.CommandNames.imageEdit] = RTE._publishingRichTextEditorComponentProvider._commandHandlerSharepointImage$p;
        this._commandsDictionary$p$1[RTE.CommandNames.imageSrc] = this.$$d__commandHandlerImageSrc$p$1;
        this._commandsDictionary$p$1[RTE.CommandNames.queryImageSrc] = this.$$d__commandHandlerQueryImageSrc$p$1;
        this._commandsDictionary$p$1[RTE._publishingRibbonCommandNames.getImageRenditionsMenu] = RTE._publishingRichTextEditorComponentProvider._commandHandlerImageRenditionsMenu$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.pickImageRenditionClick] = RTE._publishingRichTextEditorComponentProvider._commandHandlerChangeRendition$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.editImageRenditionClick] = RTE._publishingRichTextEditorComponentProvider._commandHandlerEditRendition$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.imageHorizontalSpace] = RTE._publishingRichTextEditorComponentProvider._commandHandlerImageHorizontalSpace$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.imageVerticalSpace] = RTE._publishingRichTextEditorComponentProvider._commandHandlerImageVerticalSpace$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.queryImageHorizontalSpace] = RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryImageHorizontalSpace$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.queryImageVerticalSpace] = RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryImageVerticalSpace$p;
        this._commandsDictionary$p$1[RTE.CommandNames.linkBookmark] = RTE._publishingRichTextEditorComponentProvider._commandHandlerLinkBookmark$p;
        this._commandsDictionary$p$1[RTE.CommandNames.queryLinkBookmark] = RTE._publishingRichTextEditorComponentProvider._commandHandlerQueryLinkBookmark$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.reusableItem] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableItem$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.reusableItemPreview] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableItem$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.reusableItemPreviewRevert] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableItem$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.reusableDialog] = RTE._publishingRichTextEditorComponentProvider._commandHandlerReusableDialog$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.rcaOpenSource] = RTE._publishingRichTextEditorComponentProvider._commandHandlerRcaOpenSource$p;
        this._commandsDictionary$p$1[RTE.PublishingCommandNames.rcaUpdateDocument] = RTE._publishingRichTextEditorComponentProvider._commandHandlerRcaUpdateDocument$p;
    },
    
    _commandHandlerQueryImageSrc$p$1: function RTE__publishingRichTextEditorComponentProvider$_commandHandlerQueryImageSrc$p$1(commandId, properties, sequence) {
        var result = this._previousProvider$p$1.handleCommand(commandId, properties, sequence);
        var value = properties[RTE._publishingRichTextEditorComponentProvider._valueProperty$p];
        if (value) {
            properties[RTE._publishingRichTextEditorComponentProvider._valueProperty$p] = RTE._imageRenditionCommands.addRenditionInfoToImageSrc(value);
            if (properties[RTE._publishingRichTextEditorComponentProvider._valueProperty$p] !== value) {
                this._previousProvider$p$1.handleCommand(RTE.CommandNames.imageSrc, properties, sequence);
            }
        }
        return result;
    },
    
    _commandHandlerImageSrc$p$1: function RTE__publishingRichTextEditorComponentProvider$_commandHandlerImageSrc$p$1(commandId, properties, sequence) {
        var value = properties[RTE._publishingRichTextEditorComponentProvider._valueProperty$p];
        properties[RTE._publishingRichTextEditorComponentProvider._valueProperty$p] = RTE._imageRenditionCommands.addRenditionInfoToImageSrc(value);
        return this._previousProvider$p$1.handleCommand(commandId, properties, sequence);
    },
    
    isFocusable: function RTE__publishingRichTextEditorComponentProvider$isFocusable() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.isFocusable();
        }
        return true;
    },
    
    receiveFocus: function RTE__publishingRichTextEditorComponentProvider$receiveFocus() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.receiveFocus();
        }
        return true;
    },
    
    yieldFocus: function RTE__publishingRichTextEditorComponentProvider$yieldFocus() {
        if (this._previousProvider$p$1) {
            return this._previousProvider$p$1.yieldFocus();
        }
        return true;
    }
}


RTE.ReusableContent = function RTE_ReusableContent() {
}
RTE.ReusableContent.getEditableRegionStorageHtml = function RTE_ReusableContent$getEditableRegionStorageHtml(editableRegion) {
    RTE.RteUtility.assertNotNull('editableRegion', editableRegion);
    var fragments = [];
    RTE.ReusableContent._getEditableRegionStorageHtml_Inner$p(editableRegion, fragments);
    var header = new Sys.StringBuilder();
    if (fragments.length > 0) {
        header.append('<div id=\"' + RTE.ReusableContent._token$i + 'IdSection\">');
        for (var index = 0; index < fragments.length; index++) {
            var fragmentId = fragments[index];
            header.append('<a href=\"' + fragmentId + '\">a</a>');
        }
        header.append('</div>');
    }
    RTE.CanvasEvents.registerListener(RTE.CanvasEvents.elementGenerateTagEvent, RTE.ReusableContent._generateTokenTagHandler$i);
    var html = header.toString() + RTE.Canvas.getEditableRegionHtml(editableRegion, true);
    RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.elementGenerateTagEvent, RTE.ReusableContent._generateTokenTagHandler$i);
    return html;
}
RTE.ReusableContent._getEditableRegionStorageHtml_Inner$p = function RTE_ReusableContent$_getEditableRegionStorageHtml_Inner$p(topElement, fragments) {
    var childs = topElement.childNodes;
    for (var i = 0; i < childs.length; i++) {
        var child = childs[i];
        if (!child) {
            continue;
        }
        if (child.id === RTE.ReusableContent._token$i) {
            var fragmentId = RTE.RteUtility.getAttribute(child, 'fragmentid');
            if (fragmentId) {
                fragments.push(fragmentId);
            }
            else {
                child.removeAttribute('id');
            }
            child.className = RTE.ReusableContent._itemClass$i + ' ' + RTE.Canvas.notifyOnGenerateClass;
        }
        else {
            RTE.ReusableContent._getEditableRegionStorageHtml_Inner$p(child, fragments);
        }
    }
}
RTE.ReusableContent._generateTokenTag$p = function RTE_ReusableContent$_generateTokenTag$p(sender, args) {
    var node = args.node;
    if (node.id === RTE.ReusableContent._token$i) {
        var html = args.html;
        html.append(RTE.ReusableContent._tokenTag$p);
        node.className = RTE.ReusableContent._itemClass$i;
    }
}
RTE.ReusableContent.insertReusableItem = function RTE_ReusableContent$insertReusableItem(item) {
    if (!item) {
        return;
    }
    var range = RTE.Cursor.get_range();
    range.deleteContent();
    var span = document.createElement(RTE.HtmlTagName.SPAN);
    span.innerHTML = item.html;
    if (item.automaticUpdate === 'True') {
        span.setAttribute('fragmentid', item.id);
        span.id = RTE.ReusableContent._token$i;
        span.className = RTE.ReusableContent._itemClass$i;
        RTE.Canvas.makeRegionUnEditable(span);
    }
    range.insertBefore(span);
    RTE.Cursor.update();
}
RTE.ReusableContent.insertReusableItemFromDialog = function RTE_ReusableContent$insertReusableItemFromDialog() {
    var fragmentId = null;
    var currentAtomic = RTE.Cursor.getSelectedAtomic();
    if ((currentAtomic) && (currentAtomic.id === RTE.ReusableContent._token$i)) {
        fragmentId = RTE.RteUtility.getAttribute(currentAtomic, 'fragmentid');
    }
    var dialogInput = {};
    dialogInput.fragmentId = fragmentId;
    var editableRegion = RTE.Cursor.get_range().getEditableRegion();
    var webUrl = RTE.Canvas.getProperty(editableRegion, 'ServerRelativeUrl');
    if (webUrl.lastIndexOf('/') + 1 !== webUrl.length) {
        webUrl += '/';
    }
    var dialogUrl = webUrl + SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'ReusableTextPicker.aspx';
    RTE.Common.showModalDialog(dialogUrl, 'dialogHeight:600px; dialogWidth:800px; center:yes; resizable:yes; scroll:no; status:no;', RTE.ReusableContent._insertReusableItemFromDialogCallback$p, dialogInput);
}
RTE.ReusableContent._insertReusableItemFromDialogCallback$p = function RTE_ReusableContent$_insertReusableItemFromDialogCallback$p(dialogOutput) {
    if (!dialogOutput) {
        return;
    }
    var fragment = dialogOutput.fragmentView;
    RTE.Cursor.get_range().deleteContent();
    RTE.Cursor.get_range().replaceHtml(fragment);
    RTE.Cursor.get_range().collapse(false);
    RTE.Cursor.update();
}


RTE._PSU = function RTE__PSU() {
}
RTE._PSU._isNullOrEmptyString$i = function RTE__PSU$_isNullOrEmptyString$i(str) {
    var strNull = null;
    return str === strNull || typeof(str) === 'undefined' || !str.length;
}
RTE._PSU._isNullOrUndefined$i = function RTE__PSU$_isNullOrUndefined$i(obj) {
    var objNull = null;
    return obj === objNull || typeof(obj) === 'undefined';
}


RTE.Rca = function RTE_Rca() {
}
RTE.Rca.updateFromSourceDocument = function RTE_Rca$updateFromSourceDocument() {
    if (!RTE.Externals.rca.enabled) {
        return;
    }
    if (confirm(RTE.Externals.rca.updateFromSourceMessage)) {
        eval(RTE.Externals.rca.updateFromSourceFn);
    }
}
RTE.Rca._getExtension$p = function RTE_Rca$_getExtension$p(fileUrl) {
    var re = new RegExp('/^.*\\.([^\\.]*)$/');
    return fileUrl.replace(re, '$1').toLowerCase();
}
RTE.Rca.openSourceDocument = function RTE_Rca$openSourceDocument() {
    if (!RTE.Externals.rca.enabled) {
        return;
    }
    if (!RTE.Externals.rca.intranetMode) {
        window.open(RTE.Externals.rca.sourceDocumentUrl);
    }
    else {
        var obj;
        try {
            if (RTE.Rca._getExtension$p(RTE.Externals.rca.sourceDocumentUrl) === 'xml') {
                obj = new ActiveXObject('SharePoint.OpenXMLDocuments');
            }
            else {
                obj = new ActiveXObject('SharePoint.OpenDocuments.2');
            }
        }
        catch ($$e_1) {
            window.open(RTE.Externals.rca.sourceDocumentUrl);
            return;
        }
        if (obj) {
            obj.EditDocument2(window.self, RTE.Externals.rca.sourceDocumentUrl, RTE.Externals.rca.sourceDocumentProgId);
        }
    }
}


RTE._imageRenditionCommands = function RTE__imageRenditionCommands() {
}
RTE._imageRenditionCommands.getSourceUrlOnly = function RTE__imageRenditionCommands$getSourceUrlOnly(src) {
    var config = RTE._imageRenditionCommands._getCurrentAssetConfig$p();
    if (!RTE._imageRenditionCommands._hasRenditionValues$p(config)) {
        return src;
    }
    var imgWithRendition = RTE.ImageUrlWithRendition._parseUrl$i(src);
    if (!imgWithRendition) {
        return src;
    }
    return imgWithRendition.get_sourceUrl();
}
RTE._imageRenditionCommands.addRenditionInfoToImageSrc = function RTE__imageRenditionCommands$addRenditionInfoToImageSrc(src) {
    var config = RTE._imageRenditionCommands._getCurrentAssetConfig$p();
    if (!RTE._imageRenditionCommands._hasRenditionValues$p(config)) {
        return src;
    }
    var imgWithRendition = RTE.ImageUrlWithRendition._parseUrl$i(src);
    if (!imgWithRendition) {
        return src;
    }
    try {
        if (config.RenditionId && config.RenditionId.length > 0) {
            var value = Number.parseInvariant(config.RenditionId);
            if (value >= 0) {
                imgWithRendition.set_renditionId(value);
            }
        }
        if (config.DisplayWidth && config.DisplayWidth.length > 0) {
            var value = Number.parseInvariant(config.DisplayWidth);
            if (value >= 0) {
                imgWithRendition.set_width(value);
            }
        }
        if (config.DisplayHeight && config.DisplayHeight.length > 0) {
            var value = Number.parseInvariant(config.DisplayHeight);
            if (value >= 0) {
                imgWithRendition.set_height(value);
            }
        }
    }
    catch ($$e_6) {
        return src;
    }
    return imgWithRendition.get_completeUrl();
}
RTE._imageRenditionCommands.editImageRenditions = function RTE__imageRenditionCommands$editImageRenditions() {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (image) {
        var imgWithRendition = RTE.ImageUrlWithRendition._parseUrl$i(image.src);
        if (imgWithRendition) {
            var dlgOptions = new SP.UI.DialogOptions();
            var queryString = '?ImageUrl=' + SP.Utilities.HttpUtility.urlKeyValueEncode(RTE.RteUtility.getServerRelativeUrl(imgWithRendition.get_sourceUrl()));
            dlgOptions.url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'ManageImageRenditions.aspx') + queryString;
            dlgOptions.autoSize = true;
            dlgOptions.allowMaximize = true;
            dlgOptions.dialogReturnValueCallback = function() {
                var url = image.src;
                if (url.indexOf('?') > 0) {
                    var newImage = image.cloneNode(true);
                    SP.UI.UIUtility.insertAfter(newImage, image);
                    SP.UI.UIUtility.removeNode(image);
                    if (RTE.RteUtility.isClassAvailable('SP.UI.Notify')) {
                        SP.UI.Notify.addNotification(SP.Publishing.Resources.imageRenditionChangeWarning, false);
                    }
                    RTE.Cursor.update();
                }
            };
            SP.UI.ModalDialog.showModalDialog(dlgOptions);
        }
    }
}
RTE._imageRenditionCommands.changeImageRendition = function RTE__imageRenditionCommands$changeImageRendition(renditionId) {
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (image) {
        var imgWithRendition = RTE.ImageUrlWithRendition._parseUrl$i(image.src);
        if (imgWithRendition) {
            imgWithRendition.set_renditionId(renditionId);
            var finalUrl = imgWithRendition.get_completeUrl();
            if (finalUrl !== image.src) {
                RTE.SnapshotManager.takeSnapshot();
                RTE.SnapshotManager.setCurrentRegionDirty();
                image.style.height = '';
                image.style.width = '';
                image.removeAttribute('width');
                image.removeAttribute('height');
                RTE.CanvasEvents.resetImageSizes(image);
                image.src = finalUrl;
                var config = RTE._imageRenditionCommands._getCurrentAssetConfig$p();
                if (!config) {
                    RTE.RteUtility.initImageSizeForce(image);
                }
                RTE.SnapshotManager.takeSnapshot();
                RTE.PublishingRichTextEditor._updateRibbon$i();
            }
        }
    }
}
RTE._imageRenditionCommands.canChangeRendition = function RTE__imageRenditionCommands$canChangeRendition(editableRegion) {
    var config = RTE._imageRenditionCommands._getCurrentAssetConfig$p();
    if (RTE._imageRenditionCommands._hasRenditionValues$p(config) && config.RenditionId && config.RenditionId.length > 0 && Number.parseInvariant(config.RenditionId) >= 0) {
        return false;
    }
    var image = RTE.CanvasEvents.getNodeFromEvent(RTE.CanvasEvents.imageEvent);
    if (!image) {
        return false;
    }
    return RTE._imageRenditionCommands._isImageInCurrentSiteCollection$p(image.src);
}
RTE._imageRenditionCommands._isImageInCurrentSiteCollection$p = function RTE__imageRenditionCommands$_isImageInCurrentSiteCollection$p(url) {
    var queryStart = url.indexOf('?');
    if (queryStart > 0) {
        url = url.substr(0, queryStart);
    }
    var value = RTE._imageRenditionCommands._imageSiteCollection$p[url];
    if (typeof(value) === 'boolean') {
        return value;
    }
    if (!RTE._imageRenditionCommands._isCurrentHost$p(url)) {
        RTE._imageRenditionCommands._imageSiteCollection$p[url] = false;
        return false;
    }
    var request = new XMLHttpRequest();
    var strhttpRoot = SP.PageContextInfo.get_webServerRelativeUrl();
    if (!strhttpRoot.startsWith('/')) {
        strhttpRoot = '/' + strhttpRoot;
    }
    request.open('POST', SP.Utilities.UrlBuilder.urlCombine(encodeURI(strhttpRoot), '_vti_bin/sites.asmx'), true);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200 && request.responseXML) {
                try {
                    var siteUrl = RTE._imageRenditionCommands._getSiteUrlFromServerResponse$p(request.responseXML);
                    value = SP.PageContextInfo.get_siteAbsoluteUrl().toUpperCase() === siteUrl.toUpperCase();
                    RTE._imageRenditionCommands._imageSiteCollection$p[url] = value;
                }
                catch ($$e_7) {
                    value = false;
                }
                if (value) {
                    RTE.PublishingRichTextEditor._updateRibbon$i();
                }
            }
        }
    };
    request.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    request.setRequestHeader('SOAPAction', 'http://schemas.microsoft.com/sharepoint/soap/GetSite');
    var soapData = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n                    <soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\r\n                        xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n                        <soap:Body>\r\n                            <GetSite xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\">\r\n                                <SiteUrl>' + RTE.RteUtility.htmlEncode(url) + '</SiteUrl>\r\n                            </GetSite>\r\n                        </soap:Body>\r\n                    </soap:Envelope>';
    request.send(soapData);
    RTE._imageRenditionCommands._imageSiteCollection$p[url] = false;
    return false;
}
RTE._imageRenditionCommands._getSiteUrlFromServerResponse$p = function RTE__imageRenditionCommands$_getSiteUrlFromServerResponse$p(xml) {
    var node = xml;
    while (node.lastChild) {
        node = node.lastChild;
    }
    var xmlSiteInfo = node.nodeValue;
    var siteInfo = Sys.Net.XMLDOM(xmlSiteInfo);
    return siteInfo.lastChild.attributes.getNamedItem('Url').nodeValue;
}
RTE._imageRenditionCommands._isCurrentHost$p = function RTE__imageRenditionCommands$_isCurrentHost$p(url) {
    var start = url.indexOf('://');
    if (start > 0) {
        var end = url.indexOf('/', start + 3);
        if (end > 0) {
            var fullHost = url.substring(start + 3, end);
            var currentHost = window.location.hostname.toLowerCase();
            fullHost = fullHost.toLowerCase();
            return (fullHost === currentHost || fullHost === currentHost + ':' + window.location.port);
        }
    }
    return false;
}
RTE._imageRenditionCommands._hasRenditionValues$p = function RTE__imageRenditionCommands$_hasRenditionValues$p(config) {
    return !!config && (!!config.RenditionId || !!config.DisplayWidth || !!config.DisplayHeight);
}
RTE._imageRenditionCommands._getCurrentAssetConfig$p = function RTE__imageRenditionCommands$_getCurrentAssetConfig$p() {
    if (typeof(GetAssetSelector) !== 'function') {
        return null;
    }
    var region = RTE.Canvas.currentEditableRegion();
    if (!region) {
        return null;
    }
    var assetId = region.getAttribute(RTE._imageRenditionCommands._assetIdProperty$p);
    if (!assetId || !assetId.length) {
        return null;
    }
    var config = GetAssetSelector(assetId);
    if (!config || !config.Config) {
        return null;
    }
    return config.Config;
}


RTE.ImageUrlWithRendition = function RTE_ImageUrlWithRendition(bareImageUrl, queryStringParts) {
    this._bareImageUrl$p$0 = bareImageUrl;
    this._queryStringParts$p$0 = queryStringParts;
}
RTE.ImageUrlWithRendition._normalizeCase$p = function RTE_ImageUrlWithRendition$_normalizeCase$p(key) {
    key = key.toUpperCase();
    if (key === RTE._imageRenditionCommands._renditionIdQueryName$i.toUpperCase()) {
        return RTE._imageRenditionCommands._renditionIdQueryName$i;
    }
    if (key === RTE._imageRenditionCommands._renditionWidthQueryName$i.toUpperCase()) {
        return RTE._imageRenditionCommands._renditionWidthQueryName$i;
    }
    if (key === RTE._imageRenditionCommands._renditionHeightQueryName$i.toUpperCase()) {
        return RTE._imageRenditionCommands._renditionHeightQueryName$i;
    }
    return key;
}
RTE.ImageUrlWithRendition._parseUrl$i = function RTE_ImageUrlWithRendition$_parseUrl$i(imageUrl) {
    if (!imageUrl) {
        return null;
    }
    var queryStart = imageUrl.indexOf('?');
    var originalQueryString = (queryStart > 0) ? imageUrl.substr(queryStart) : null;
    var queryStringParts = RTE.ImageUrlWithRendition._parseQueryString$p(originalQueryString);
    if (queryStart > 0) {
        imageUrl = imageUrl.substring(0, queryStart);
    }
    return new RTE.ImageUrlWithRendition(imageUrl, queryStringParts);
}
RTE.ImageUrlWithRendition._parseQueryString$p = function RTE_ImageUrlWithRendition$_parseQueryString$p(originalQueryString) {
    var result = {};
    if (originalQueryString && originalQueryString.length > 1) {
        originalQueryString = originalQueryString.substr(1);
        var keyValuePairs = originalQueryString.split('&');
        for (var i = 0; i < keyValuePairs.length; i++) {
            var keyvalue = keyValuePairs[i].split('=');
            var key = RTE.ImageUrlWithRendition._normalizeCase$p(keyvalue[0]);
            result[key] = (keyvalue.length > 1) ? keyvalue[1] : key;
        }
    }
    return result;
}
RTE.ImageUrlWithRendition.prototype = {
    _bareImageUrl$p$0: null,
    _queryStringParts$p$0: null,
    
    get_sourceUrl: function RTE_ImageUrlWithRendition$get_sourceUrl() {
        return this._buildUrl$p$0(false);
    },
    
    get_completeUrl: function RTE_ImageUrlWithRendition$get_completeUrl() {
        return this._buildUrl$p$0(true);
    },
    
    get_renditionId: function RTE_ImageUrlWithRendition$get_renditionId() {
        return this._parseIntParam$p$0(RTE._imageRenditionCommands._renditionIdQueryName$i, -1);
    },
    set_renditionId: function RTE_ImageUrlWithRendition$set_renditionId(value) {
        this._setIntParam$p$0(RTE._imageRenditionCommands._renditionIdQueryName$i, -1, value);
        return value;
    },
    
    get_width: function RTE_ImageUrlWithRendition$get_width() {
        return this._parseIntParam$p$0(RTE._imageRenditionCommands._renditionWidthQueryName$i, 0);
    },
    set_width: function RTE_ImageUrlWithRendition$set_width(value) {
        this._setIntParam$p$0(RTE._imageRenditionCommands._renditionWidthQueryName$i, 0, value);
        return value;
    },
    
    get_height: function RTE_ImageUrlWithRendition$get_height() {
        return this._parseIntParam$p$0(RTE._imageRenditionCommands._renditionHeightQueryName$i, 0);
    },
    set_height: function RTE_ImageUrlWithRendition$set_height(value) {
        this._setIntParam$p$0(RTE._imageRenditionCommands._renditionHeightQueryName$i, 0, value);
        return value;
    },
    
    _setIntParam$p$0: function RTE_ImageUrlWithRendition$_setIntParam$p$0(name, minValue, value) {
        if (value > minValue) {
            this._queryStringParts$p$0[name] = value.toString();
        }
        else {
            delete this._queryStringParts$p$0[name];
        }
    },
    
    _parseIntParam$p$0: function RTE_ImageUrlWithRendition$_parseIntParam$p$0(name, defaultValue) {
        var value = this._queryStringParts$p$0[name];
        if (value && value.length > 0) {
            try {
                return Number.parseInvariant(value);
            }
            catch ($$e_3) {
            }
        }
        return defaultValue;
    },
    
    _buildUrl$p$0: function RTE_ImageUrlWithRendition$_buildUrl$p$0(includeRenditionInfo) {
        var queryStringBuilder = '';
        var first = true;
        var $$dict_3 = this._queryStringParts$p$0;
        for (var $$key_4 in $$dict_3) {
            var entry = { key: $$key_4, value: $$dict_3[$$key_4] };
            if (!entry.value) {
                continue;
            }
            var name = RTE.ImageUrlWithRendition._normalizeCase$p(entry.key);
            if (includeRenditionInfo || !(name === RTE._imageRenditionCommands._renditionIdQueryName$i || name === RTE._imageRenditionCommands._renditionWidthQueryName$i || name === RTE._imageRenditionCommands._renditionHeightQueryName$i)) {
                queryStringBuilder += (first) ? '?' : '&';
                queryStringBuilder += name;
                queryStringBuilder += '=';
                queryStringBuilder += entry.value;
                first = false;
            }
        }
        return this._bareImageUrl$p$0 + queryStringBuilder;
    }
}


RTE.PublishingCanvas.registerClass('RTE.PublishingCanvas', RTE.Canvas);
RTE._publishingRibbonCommandNames.registerClass('RTE._publishingRibbonCommandNames');
RTE.PublishingCommandNames.registerClass('RTE.PublishingCommandNames');
RTE.PublishingRibbonIds.registerClass('RTE.PublishingRibbonIds');
RTE.PublishingRichTextEditor.registerClass('RTE.PublishingRichTextEditor', RTE.RichTextEditor);
RTE._publishingRichTextEditorComponentProvider.registerClass('RTE._publishingRichTextEditorComponentProvider', RTE.RichTextEditorComponentProvider);
RTE.ReusableContent.registerClass('RTE.ReusableContent');
RTE._PSU.registerClass('RTE._PSU');
RTE.Rca.registerClass('RTE.Rca');
RTE._imageRenditionCommands.registerClass('RTE._imageRenditionCommands');
RTE.ImageUrlWithRendition.registerClass('RTE.ImageUrlWithRendition');
function sp_ui_rte_publishing_initialize() {
RTE._publishingRibbonCommandNames.insertContentGroup = 'ContentGroup';
RTE._publishingRibbonCommandNames.reusableMenu = 'ReusableMenu';
RTE._publishingRibbonCommandNames.reusableMenuClose = 'ReusableMenuClose';
RTE._publishingRibbonCommandNames.getReusableContentMenuXml = 'GetReusableContentMenuXml';
RTE._publishingRibbonCommandNames.getSocialPluginMenuXml = 'GetSocialPluginMenuXml';
RTE._publishingRibbonCommandNames.imageSpacingGroup = 'ImageSpacing';
RTE._publishingRibbonCommandNames.rcaContextualGroup = 'RcaContextualGroup';
RTE._publishingRibbonCommandNames.rcaTab = 'RcaTab';
RTE._publishingRibbonCommandNames.rcaViewUpdateGroup = 'RcaViewUpdateGroup';
RTE._publishingRibbonCommandNames.changeLinkMenuOpen = 'ChangeLinkMenuOpen';
RTE._publishingRibbonCommandNames.changeLinkMenuClose = 'ChangeLinkMenuClose';
RTE._publishingRibbonCommandNames.linkBookmarkLabel = 'LinkBookmarkLabel';
RTE._publishingRibbonCommandNames.imageHorizontalSpaceLabel = 'ImageHorizontalSpaceLabel';
RTE._publishingRibbonCommandNames.imageVerticalSpaceLabel = 'ImageVerticalSpaceLabel';
RTE._publishingRibbonCommandNames.getImageRenditionsMenu = 'GetImageRenditionsMenuXml';
RTE.PublishingCommandNames.insertLinkSharepoint = 'InsertLinkSharepoint';
RTE.PublishingCommandNames.insertImageSharepoint = 'InsertImageSharepoint';
RTE.PublishingCommandNames.imageHorizontalSpace = 'ImageHorizontalSpace';
RTE.PublishingCommandNames.imageVerticalSpace = 'ImageVerticalSpace';
RTE.PublishingCommandNames.linkBookmark = 'LinkBookmark';
RTE.PublishingCommandNames.linkDisplayIcon = 'LinkDisplayIcon';
RTE.PublishingCommandNames.reusableDialog = 'ReusablePopup';
RTE.PublishingCommandNames.reusableItemAction = 'ReusableItem';
RTE.PublishingCommandNames.reusableItem = 'ReusableItemClick';
RTE.PublishingCommandNames.reusableItemPreview = 'ReusableItemPreview';
RTE.PublishingCommandNames.reusableItemPreviewRevert = 'ReusableItemRevert';
RTE.PublishingCommandNames.spellchecking = 'Spellcheck';
RTE.PublishingCommandNames.spellcheckingReview = 'ReviewSpellcheck';
RTE.PublishingCommandNames.spellcheckingItemPreviewRevert = 'ItemPreviewRevertSpellchecking';
RTE.PublishingCommandNames.noSpellchecking = 'NoSpellchecking';
RTE.PublishingCommandNames.noSpellcheckingReview = 'ReviewNoSpellchecking';
RTE.PublishingCommandNames.noSpellcheckingItemPreviewRevert = 'ItemPreviewRevertNoSpellchecking';
RTE.PublishingCommandNames.queryImageHorizontalSpace = 'QueryImageHorizontalSpace';
RTE.PublishingCommandNames.queryImageVerticalSpace = 'QueryImageVerticalSpace';
RTE.PublishingCommandNames.rcaOpenSource = 'RcaOpenSource';
RTE.PublishingCommandNames.rcaUpdateDocument = 'RcaUpdateDocument';
RTE.PublishingCommandNames.linkEditSharepoint = 'LinkEditSharepoint';
RTE.PublishingCommandNames.pickImageRendition = 'PickImageRendition';
RTE.PublishingCommandNames.pickImageRenditionClick = 'PickImageRenditionClick';
RTE.PublishingCommandNames.editImageRenditionClick = 'EditImageRenditionClick';
RTE.PublishingRibbonIds.reusableItem = 'fseaReusableItem';
RTE.PublishingRichTextEditor._formFieldValueContainerClass$p = 'ms-formfieldvaluecontainer';
RTE.PublishingRichTextEditor._formFieldContainerClass$p = 'ms-formfieldcontainer';
RTE.PublishingRichTextEditor._formFieldLabelContainerClass$p = 'ms-formfieldlabelcontainer';
RTE.PublishingRichTextEditor._foundInitialFocusRegion$p = false;
RTE.PublishingRichTextEditor._setInitialFocus$p = false;
RTE._publishingRichTextEditorComponentProvider._valueProperty$p = 'Value';
RTE._publishingRichTextEditorComponentProvider._lastReusableIndex$p = -1;
RTE.ReusableContent._token$i = '__publishingReusableFragment';
RTE.ReusableContent._itemClass$i = 'ms-reusableTextView';
RTE.ReusableContent._tokenTag$p = '<SPAN ID=\"' + RTE.ReusableContent._token$i + '\"></SPAN>';
RTE.ReusableContent._generateTokenTagHandler$i = RTE.ReusableContent._generateTokenTag$p;
RTE._PSU._emptyString$i = '';
RTE._imageRenditionCommands._renditionIdQueryName$i = 'RenditionID';
RTE._imageRenditionCommands._renditionWidthQueryName$i = 'Width';
RTE._imageRenditionCommands._renditionHeightQueryName$i = 'Height';
RTE._imageRenditionCommands._assetIdProperty$p = 'AssetID';
RTE._imageRenditionCommands._imageSiteCollection$p = {};
};
sp_ui_rte_publishing_initialize();
RTE.ReusableItems = function RTE_ReusableItems()
{
}
if (typeof reusableContent != "undefined")
{
  RTE.ReusableItems.items = reusableContent;
}

RTE.Common = function SP_UI_Rte_Publishing_Common()
{
}

RTE.Common.showModalDialog = commonShowModalDialog;
    
function InsertOrChangeImage(clientId
                                , defaultAssetLocation
                                , defaultAssetImageLocation
                                , currentWebBaseUrl
                                , allowExternalUrls
                                , elemImage
                                , callback)
{
    var assetPickerValue = document.getElementById("ms-rteinput-image");
    if (assetPickerValue) {
        assetPickerValue.parentNode.removeChild(assetPickerValue);
    }

    assetPickerValue = document.createElement("INPUT");
    assetPickerValue.id = "ms-rteinput-image";
    assetPickerValue.value = elemImage.src;
    assetPickerValue.type = "hidden";
    document.body.appendChild(assetPickerValue);

    var configObj =  new AssetPickerConfig("");
    configObj.ClientID = clientId;
    configObj.DefaultAssetLocation = defaultAssetLocation;
    configObj.DefaultAssetImageLocation = defaultAssetImageLocation;
    configObj.CurrentWebBaseUrl = currentWebBaseUrl;
    configObj.AllowExternalUrls = allowExternalUrls;
    configObj.ManageHyperlink = false;
    configObj.AssetUrlClientID = assetPickerValue.id;
    configObj.ReturnCallback = function(url, text, config, newAsset) {
        elemImage.src = assetPickerValue.value;
        document.body.removeChild(assetPickerValue);
        callback(url, text, config, newAsset);
    };

    var imageAssetObj = new ImageAsset(elemImage.src);
    imageAssetObj.LaunchModalAssetPicker(configObj);
}
RTE.Common.insertOrChangeImage = InsertOrChangeImage;

function InsertOrChangeHyperLink(clientId
                                , defaultAssetLocation
                                , defaultAssetImageLocation
                                , currentWebBaseUrl
                                , allowExternalUrls
                                , elemLink
                                , callback)
{
    var assetPickerValue = document.getElementById("ms-rteinput-link");
    if (assetPickerValue) {
        assetPickerValue.parentNode.removeChild(assetPickerValue);
    }
    
    assetPickerValue = document.createElement("INPUT");
    assetPickerValue.id = "ms-rteinput-link";
    assetPickerValue.value = elemLink.href;
    assetPickerValue.type = "hidden";
    document.body.appendChild(assetPickerValue);
    
    var configObj =  new AssetPickerConfig("");
    configObj.ClientID = clientId;
    configObj.DefaultAssetLocation = defaultAssetLocation;
    configObj.DefaultAssetImageLocation = defaultAssetImageLocation;
    configObj.CurrentWebBaseUrl = currentWebBaseUrl;
    configObj.AllowExternalUrls = allowExternalUrls;
    configObj.AssetUrlClientID = assetPickerValue.id;
    configObj.ReturnCallback = function(url, text, config, newAsset) {
        elemLink.href = assetPickerValue.value;
        document.body.removeChild(assetPickerValue);
        callback(url, text, config, newAsset);
    };

    var linkAsset = new LinkAsset(elemLink.href);
    linkAsset.ManageLinkDisplayText = false;
    linkAsset.LaunchModalAssetPicker(configObj);

}
RTE.Common.insertOrChangeHyperLink = InsertOrChangeHyperLink;

ExecuteAndRegisterBeginEndFunctions('sp.ui.rte.publishing.js',
    sp_ui_rte_publishing_initialize, 
    null,
    function(){

        RTE.Externals = function RTE_Externals() {}
        if (typeof(rca) != "undefined") RTE.Externals.rca = rca;
		if (typeof(imageRenditions) != "undefined") RTE.Externals.imageRenditions = imageRenditions;

        ExecuteOrDelayUntilScriptLoaded(RTE.PublishingCanvas.loadPublishing, 'sp.ui.rte.js');
    });

NotifyScriptLoadedAndExecuteWaitingJobs('sp.ui.rte.publishing.js');
