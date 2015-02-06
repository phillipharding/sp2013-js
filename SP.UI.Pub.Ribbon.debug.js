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


Type.registerNamespace('Pub.Ribbon');

Pub.Ribbon._listItemInfo = function Pub_Ribbon__listItemInfo() {}


Pub.Ribbon.PubRibbonComponent = function Pub_Ribbon_PubRibbonComponent() {
    Pub.Ribbon.PubRibbonComponent.initializeBase(this);
    this._registerWithPageManager$i$1();
}
Pub.Ribbon.PubRibbonComponent._initPageLayoutMenu$p = function Pub_Ribbon_PubRibbonComponent$_initPageLayoutMenu$p() {
    if (Pub.Ribbon.Externals.pageLayouts) {
        var sb = new Sys.StringBuilder();
        sb.append('<Menu Id=\'Ribbon.WikiPageTab.PubPageLayoutGroup.ChangePageLayout.Menu\'>');
        var currentSection = null;
        var firstSection = true;
        for (var i = 0; i < Pub.Ribbon.Externals.pageLayouts.layouts.length; i++) {
            var pl = Pub.Ribbon.Externals.pageLayouts.layouts[i];
            if (currentSection !== pl.section) {
                if (!firstSection) {
                    sb.append('</Gallery></MenuSection>');
                }
                firstSection = false;
                currentSection = pl.section;
                sb.append('<MenuSection Id=\'Ribbon.WikiPageTab.PubPageLayoutGroup.ChangePageLayout.Menu.Layouts\'');
                sb.append(' Title=\'');
                sb.append(SP.Utilities.HttpUtility.escapeXmlText(currentSection));
                sb.append('\'>');
                sb.append('<Gallery Id=\'Ribbon.WikiPageTab.PubPageLayoutGroup.ChangePageLayout.Menu.Layouts.Gallery\' ElementDimensions=\'Size72by96\' Width=\'4\' Command=\'');
                sb.append(Pub.Ribbon.PubCommandNames.changePageLayout);
                sb.append('\'>');
            }
            sb.append('<GalleryButton');
            sb.append(' id=\'Ribbon.WikiPageTab.PubPageLayoutGroup.ChangePageLayout.Item');
            sb.append(i.toString());
            sb.append('\' InnerHTML=\"&lt;div style=\'width:72px;height:82px;white-space:normal;\'&gt;&lt;img src=\'');
            sb.append(pl.image);
            sb.append('\' style=\'width:72px;\' /&gt;&lt;br/&gt;&lt;span class=\'ms-cui-ctl-mediumlabel\'&gt;');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(pl.title));
            sb.append('&lt;/span&gt;&lt;/div&gt;\" Alt=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(pl.title));
            sb.append('\' CommandType=\'OptionSelection\' MenuItemId=\'');
            sb.append(i.toString());
            sb.append('\' CommandValueId=\'');
            Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p[Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p.length] = pl.url;
            sb.append((Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p.length - 1).toString());
            sb.append('\' Command=\'');
            sb.append(Pub.Ribbon.PubCommandNames.changePageLayout);
            sb.append('\' QueryCommand=\'');
            sb.append(Pub.Ribbon.PubCommandNames.queryChangePageLayout);
            sb.append('\' />');
        }
        sb.append('</Gallery></MenuSection>');
        sb.append('</Menu>');
        return sb.toString();
    }
    return '';
}
Pub.Ribbon.PubRibbonComponent._initPreviewMenu$p = function Pub_Ribbon_PubRibbonComponent$_initPreviewMenu$p() {
    var ret = null;
    var mobileChannels = Pub.Ribbon.Externals.preview.mobileChannels;
    if (mobileChannels.length > 0) {
        var id = 'Ribbon.WikiPageTab.PubPageActions.PreviewMenu';
        ret = new CUI.JsonXmlElement('Menu', { Id: id + '.Menu' });
        var xmlControls = ret.appendChild('MenuSection', { Id: id + '.Menu.Section', Title: SP.Publishing.Resources.cui_stt_ButReviewMenuPreviewDropDownTitle }).appendChild('Controls', { Id: id + '.Menu.Controls' });
        for (var i = 0; i < mobileChannels.length; i++) {
            xmlControls.appendChild('Button', { Id: id + '.Menu.Item' + i.toString(), LabelText: mobileChannels[i].name, CommandType: 'OptionSelection', Command: 'PreviewChannel', CommandValueId: mobileChannels[i].alias });
        }
    }
    return ret;
}
Pub.Ribbon.PubRibbonComponent.load = function Pub_Ribbon_PubRibbonComponent$load() {
    Pub.Ribbon.PubRibbonComponent.instance = new Pub.Ribbon.PubRibbonComponent();
    Pub.Ribbon.PubCommands.load();
}
Pub.Ribbon.PubRibbonComponent._isFromiOS$p = function Pub_Ribbon_PubRibbonComponent$_isFromiOS$p() {
    return (window.browseris.safariMobile);
}
Pub.Ribbon.PubRibbonComponent._getPageLayoutUrl$p = function Pub_Ribbon_PubRibbonComponent$_getPageLayoutUrl$p(properties) {
    var url = null;
    if (properties) {
        var pageLayoutIdAsString = properties.CommandValueId;
        var pageLayoutIdAsInt = parseInt(pageLayoutIdAsString);
        if (!isNaN(pageLayoutIdAsInt) && pageLayoutIdAsInt < Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p.length) {
            url = Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p[pageLayoutIdAsInt];
        }
    }
    return url;
}
Pub.Ribbon.PubRibbonComponent._getMobileChannelAlias$p = function Pub_Ribbon_PubRibbonComponent$_getMobileChannelAlias$p(properties) {
    var alias = null;
    if (properties) {
        alias = properties.CommandValueId;
    }
    return alias;
}
Pub.Ribbon.PubRibbonComponent._launchDialog$i = function Pub_Ribbon_PubRibbonComponent$_launchDialog$i(dialogUrl, title, dialogType, additionalQueryString, showMaximized, callback) {
    var width = ((dialogUrl !== Pub.Ribbon.PubRibbonComponent._uploadExAspx$i) ? Pub.Ribbon.PubRibbonComponent._defaultDialogWidth$p : 0);
    Pub.Ribbon.PubRibbonComponent._launchDialogWidth$i(dialogUrl, title, dialogType, additionalQueryString, showMaximized, width, callback);
}
Pub.Ribbon.PubRibbonComponent._launchDialogWidth$i = function Pub_Ribbon_PubRibbonComponent$_launchDialogWidth$i(dialogUrl, title, dialogType, additionalQueryString, showMaximized, startWidth, callback) {
    var dialogOptions = new SP.UI.DialogOptions();
    dialogOptions.url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + dialogUrl) + '?UseDivDialog=true' + '&LCID=' + SP.Utilities.HttpUtility.urlKeyValueEncode(SP.PageContextInfo.get_currentLanguage().toString()) + '&Source=' + SP.Utilities.HttpUtility.urlKeyValueEncode(document.URL);
    if (dialogType) {
        dialogOptions.url = dialogOptions.url + '&Dialog=' + SP.Utilities.HttpUtility.urlKeyValueEncode(dialogType);
        if (dialogType === 'CreateLink') {
            dialogOptions.url = dialogOptions.url + '&FirstLine=false';
        }
    }
    if (additionalQueryString) {
        dialogOptions.url = dialogOptions.url + '&' + additionalQueryString;
    }
    dialogOptions.title = title;
    dialogOptions.dialogReturnValueCallback = callback;
    dialogOptions.showMaximized = showMaximized;
    dialogOptions.autoSize = !showMaximized;
    if (startWidth > 0) {
        dialogOptions.autoSizeStartWidth = startWidth;
    }
    SP.UI.ModalDialog.showModalDialog(dialogOptions);
}
Pub.Ribbon.PubRibbonComponent._getPlayerStylesMenuXml$p = function Pub_Ribbon_PubRibbonComponent$_getPlayerStylesMenuXml$p() {
    if (Pub.Ribbon.MediaCommands.get_enabled()) {
        var sb = new Sys.StringBuilder();
        sb.append('<Menu Id=\'Ribbon.ContextualTabs.Media.Options.PlayerStyles.Change.Menu\'>\r\n  <MenuSection Id=\'Ribbon.ContextualTabs.Media.Options.PlayerStyles.Change.Menu.Section\' DisplayMode=\'Menu16\'>\r\n    <Controls Id=\'Ribbon.ContextualTabs.Media.Options.PlayerStyles.Change.Menu.Section.Controls\'>');
        var skins = window.self.mediaPlayer.availableSkins;
        for (var i = 0; i < skins.length; ++i) {
            var url = skins[i]['url'];
            var label = skins[i]['title'];
            sb.append('      <Button Id=\'Ribbon.ContextualTabs.Media.Options.PlayerStyles.Change.Menu.Section.FromSharePoint\'\r\n            Command=\'' + Pub.Ribbon.MediaCommandNames.changeStyle + '\'\r\n            CommandValueId=\'' + url + '\'\r\n            QueryCommand=\'' + SP.Utilities.HttpUtility.escapeXmlText(Pub.Ribbon.MediaCommandNames.queryChangeStyle) + '\'\r\n            LabelText=\'' + SP.Utilities.HttpUtility.escapeXmlText(label) + '\'                                            \r\n            Alt=\'\'/>');
        }
        sb.append('    </Controls>\r\n  </MenuSection>\r\n</Menu>');
        return sb.toString();
    }
    return '';
}
Pub.Ribbon.PubRibbonComponent.mediaPlayerClicked = function Pub_Ribbon_PubRibbonComponent$mediaPlayerClicked(player) {
    player = mediaPlayer.resolvePlayer(player);
    Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = player;
    Pub.Ribbon.PubRibbonComponent.switchToMediaTab = true;
    RefreshCommandUI();
}
Pub.Ribbon.PubRibbonComponent.mediaPlayerLoaded = function Pub_Ribbon_PubRibbonComponent$mediaPlayerLoaded(player, updated) {
    if (player && Pub.Ribbon.PubRibbonComponent.isPlayerHtml5(player)) {
        player = $get(player.id);
        if (player && (player.getAttribute('data-loadedOnEdit') || !player.parentNode)) {
            return;
        }
    }
    if (!Pub.Ribbon.PubRibbonComponent._windowClickDetectorInitialized$p) {
        Pub.Ribbon.PubRibbonComponent._windowClickDetectorInitialized$p = true;
        $addHandler(document.body, 'click', Pub.Ribbon.PubRibbonComponent.onBodyClicked);
    }
    if (player) {
        if (updated && Pub.Ribbon.PubRibbonComponent.isPlayerHtml5(player)) {
            Pub.Ribbon.PubRibbonComponent.mediaPlayerClicked(player);
        }
        player[Pub.Ribbon.PubRibbonComponent._initializedFieldName$p] = false;
        if (Pub.Ribbon.PubRibbonComponent.isPlayerHtml5(player)) {
            player.setAttribute('data-loadedOnEdit', '1');
            window.self.mediaPlayer.removeFunctionFromOnLoadStart(player, 'load_' + player.id + '(this)');
        }
    }
}
Pub.Ribbon.PubRibbonComponent.onBodyClicked = function Pub_Ribbon_PubRibbonComponent$onBodyClicked(evt) {
    if (!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer) {
        return;
    }
    if (!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode) {
        Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
        return;
    }
    if (!evt) {
        return;
    }
    var current = evt.target;
    for (var i = 0; i < 3; ++i) {
        if (!current) {
            break;
        }
        if (current === Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode) {
            return;
        }
        current = current.parentNode;
    }
    var focusedPlayerIsActiveWebPart = !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode && Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode.id === SP.Ribbon.WebPartComponent.get_activeWebPartId();
    if (!SP.UI.UIUtility.focusValidOnThisNode(evt.target) || focusedPlayerIsActiveWebPart) {
        return;
    }
    Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
    RefreshCommandUI();
}
Pub.Ribbon.PubRibbonComponent.isPlayerHtml5 = function Pub_Ribbon_PubRibbonComponent$isPlayerHtml5(player) {
    return !!player && player.tagName === 'VIDEO';
}
Pub.Ribbon.PubRibbonComponent.get_canSupportHtml5Video = function Pub_Ribbon_PubRibbonComponent$get_canSupportHtml5Video() {
    if (!Pub.Ribbon.PubRibbonComponent._canSupportHtml5VideoInitialized$p) {
        var testVideoEl = document.createElement('VIDEO');
        Pub.Ribbon.PubRibbonComponent._canSupportHtml5Video$p = !!testVideoEl.canPlayType;
    }
    return Pub.Ribbon.PubRibbonComponent._canSupportHtml5Video$p;
}
Pub.Ribbon.PubRibbonComponent.unloadMediaPlayer = function Pub_Ribbon_PubRibbonComponent$unloadMediaPlayer(player) {
    if (player) {
        if (Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.id === player.id) {
            Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
        }
    }
}
Pub.Ribbon.PubRibbonComponent.prototype = {
    _focusedCommands$p$1: null,
    _globalCommands$p$1: null,
    
    _registerWithPageManager$i$1: function Pub_Ribbon_PubRibbonComponent$_registerWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().addPageComponent(this);
    },
    
    init: function Pub_Ribbon_PubRibbonComponent$init() {
        this._focusedCommands$p$1 = [];
        this._globalCommands$p$1 = [ Pub.Ribbon.PubRibbonCommandNames.pageTab, Pub.Ribbon.PubRibbonCommandNames.publishingGroup, Pub.Ribbon.PubCommandNames.schedule, Pub.Ribbon.PubRibbonCommandNames.schedulingGroup, Pub.Ribbon.PubRibbonCommandNames.renditionsGroup, Pub.Ribbon.PubRibbonCommandNames.variationsGroup, Pub.Ribbon.PubCommandNames.quickDeploy, Pub.Ribbon.PubCommandNames.variationsTab, Pub.Ribbon.PubCommandNames.variationsCreate, Pub.Ribbon.PubCommandNames.variationsPullPage, Pub.Ribbon.PubCommandNames.variationsReconcileChanges, Pub.Ribbon.PubCommandNames.variationsUpdate, Pub.Ribbon.PubCommandNames.variationsViewChanges, Pub.Ribbon.PubRibbonCommandNames.translationGroup, Pub.Ribbon.PubCommandNames.isVendorTranslationEnabled, Pub.Ribbon.PubCommandNames.isMachineTranslationEnabled, Pub.Ribbon.PubCommandNames.translationMachineTranslate, Pub.Ribbon.PubCommandNames.translationMachineTranslateInfer, Pub.Ribbon.PubCommandNames.translationImport, Pub.Ribbon.PubCommandNames.translationExportInfer, Pub.Ribbon.PubCommandNames.translationExportExplicit, Pub.Ribbon.PubCommandNames.translationStatusDisplay, Pub.Ribbon.PubRibbonCommandNames.reviewGroup, Pub.Ribbon.PubCommandNames.preview, Pub.Ribbon.PubCommandNames.previewDefaultChannel, Pub.Ribbon.PubCommandNames.previewChannel, Pub.Ribbon.PubCommandNames.reorderDeviceChannels, Pub.Ribbon.PubCommandNames.checkForDraft, Pub.Ribbon.PubCommandNames.queryCheckForDraft, Pub.Ribbon.PubCommandNames.startWorkflow, Pub.Ribbon.PubCommandNames.workflowStatus, Pub.Ribbon.PubCommandNames.workflowTasks, Pub.Ribbon.PubCommandNames.manageImageRenditions, Pub.Ribbon.PubCommandNames.createNewRollupHierarchy, Pub.Ribbon.PubCommandNames.copySharedPage, Pub.Ribbon.PubCommandNames.editTermProperties, Pub.Ribbon.PubCommandNames.editPageUrls, Pub.Ribbon.PubCommandNames.editSeoProperties, Pub.Ribbon.PubCommandNames.deleteFriendlyUrlPage, Pub.Ribbon.PubRibbonCommandNames.pageActionsGroup, Pub.Ribbon.PubRibbonCommandNames.pubPageLayoutGroup, Pub.Ribbon.PubCommandNames.queryChangePageLayout, Pub.Ribbon.PubCommandNames.changePageLayout, Pub.Ribbon.PubCommandNames.changePageLayoutMenu, Pub.Ribbon.PubRibbonCommandNames.getPageLayoutsXml, Pub.Ribbon.PubRibbonCommandNames.workflowGroup, Pub.Ribbon.PubRibbonCommandNames.pubPageActionsGroup, Pub.Ribbon.PubRibbonCommandNames.getPreviewableChannelsXml, Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroup, Pub.Ribbon.PubRibbonCommandNames.docLibImageTab, Pub.Ribbon.PubRibbonCommandNames.imageRenditionsGroup, Pub.Ribbon.MediaCommandNames.mediaContextualTab, Pub.Ribbon.MediaCommandNames.optionsTab, Pub.Ribbon.MediaCommandNames.mediaGroup, Pub.Ribbon.MediaCommandNames.changeMedia, Pub.Ribbon.MediaCommandNames.changeMediaMenu, Pub.Ribbon.MediaCommandNames.changeMediaUpload, Pub.Ribbon.MediaCommandNames.changeMediaSharePoint, Pub.Ribbon.MediaCommandNames.changeMediaLink, Pub.Ribbon.MediaCommandNames.changeMediaRemove, Pub.Ribbon.MediaCommandNames.previewGroup, Pub.Ribbon.MediaCommandNames.changePreview, Pub.Ribbon.MediaCommandNames.changePreviewMenu, Pub.Ribbon.MediaCommandNames.changePreviewUpload, Pub.Ribbon.MediaCommandNames.changePreviewSharePoint, Pub.Ribbon.MediaCommandNames.changePreviewLink, Pub.Ribbon.MediaCommandNames.changePreviewRemove, Pub.Ribbon.MediaCommandNames.propertiesGroup, Pub.Ribbon.MediaCommandNames.title, Pub.Ribbon.MediaCommandNames.queryTitle, Pub.Ribbon.MediaCommandNames.autoPlay, Pub.Ribbon.MediaCommandNames.queryAutoPlay, Pub.Ribbon.MediaCommandNames.loop, Pub.Ribbon.MediaCommandNames.queryLoop, Pub.Ribbon.MediaCommandNames.stylesGroup, Pub.Ribbon.MediaCommandNames.stylesMenu, Pub.Ribbon.MediaCommandNames.queryStylesMenu, Pub.Ribbon.MediaCommandNames.changeStyle, Pub.Ribbon.MediaCommandNames.queryChangeStyle, Pub.Ribbon.MediaCommandNames.sizeGroup, Pub.Ribbon.MediaCommandNames.width, Pub.Ribbon.MediaCommandNames.queryWidth, Pub.Ribbon.MediaCommandNames.height, Pub.Ribbon.MediaCommandNames.queryHeight, Pub.Ribbon.MediaCommandNames.lockRatio, Pub.Ribbon.MediaCommandNames.queryLockRatio, Pub.Ribbon.MediaCommandNames.insertMediaWebPartZone, Pub.Ribbon.MediaCommandNames.insertMediaRichContent, Pub.Ribbon.MediaCommandNames.insertFromComputer, Pub.Ribbon.MediaCommandNames.insertFromSharePoint, Pub.Ribbon.MediaCommandNames.insertFromAddress, Pub.Ribbon.PubRibbonCommandNames.variationsListGroup, Pub.Ribbon.PubCommandNames.variationsListUpdate, Pub.Ribbon.PubCommandNames.variationsListSettingsView, Pub.Ribbon.PubRibbonCommandNames.variationsContextualGroup ];
    },
    
    getId: function Pub_Ribbon_PubRibbonComponent$getId() {
        return 'PubRibbonComponent';
    },
    
    getFocusedCommands: function Pub_Ribbon_PubRibbonComponent$getFocusedCommands() {
        return this._focusedCommands$p$1;
    },
    
    getGlobalCommands: function Pub_Ribbon_PubRibbonComponent$getGlobalCommands() {
        return this._globalCommands$p$1;
    },
    
    canHandleCommand: function Pub_Ribbon_PubRibbonComponent$canHandleCommand(commandId) {
        if (commandId === Pub.Ribbon.PubCommandNames.schedule) {
            return Pub.Ribbon.PubCommands.scheduleEnabled();
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.getPageLayoutsXml || commandId === Pub.Ribbon.PubRibbonCommandNames.pubPageLayoutGroup || commandId === Pub.Ribbon.PubCommandNames.changePageLayoutMenu || commandId === Pub.Ribbon.PubCommandNames.changePageLayout) {
            return Pub.Ribbon.PubCommands.changePageLayoutEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.quickDeploy) {
            return Pub.Ribbon.PubCommands.quickDeployEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsCreate) {
            return Pub.Ribbon.PubCommands.variationsCreateEnabled();
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.variationsListGroup) {
            return true;
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsListSettingsView) {
            return true;
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsListUpdate) {
            return Pub.Ribbon.PubCommands.variationsListUpdateEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsPullPage) {
            return Pub.Ribbon.PubCommands.variationsPullPageEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsReconcileChanges) {
            return Pub.Ribbon.PubCommands.variationsReconcileChangesEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsUpdate) {
            return Pub.Ribbon.PubCommands.variationsUpdateEnabled();
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.getPreviewableChannelsXml || commandId === Pub.Ribbon.PubCommandNames.preview || commandId === Pub.Ribbon.PubCommandNames.previewDefaultChannel || commandId === Pub.Ribbon.PubCommandNames.previewChannel) {
            return Pub.Ribbon.PubCommands.previewEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.reorderDeviceChannels) {
            return Pub.Ribbon.PubCommands.reorderDeviceChannelsEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.checkForDraft) {
            return Pub.Ribbon.PubCommands.checkForDraftEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsViewChanges) {
            return Pub.Ribbon.PubCommands.variationsViewChangesEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.isVendorTranslationEnabled) {
            return Pub.Ribbon.PubCommands.isVendorTranslationEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.isMachineTranslationEnabled) {
            return Pub.Ribbon.PubCommands.isMachineTranslationEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationMachineTranslate) {
            return Pub.Ribbon.PubCommands.translationMachineTranslateEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationMachineTranslateInfer) {
            return Pub.Ribbon.PubCommands.translationMachineTranslateInferEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationImport) {
            return Pub.Ribbon.PubCommands.translationImportEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationExportInfer) {
            return Pub.Ribbon.PubCommands.translationExportInferEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationExportExplicit) {
            return Pub.Ribbon.PubCommands.translationExportExplicitEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationStatusDisplay) {
            return Pub.Ribbon.PubCommands.translationStatusDisplayEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.startWorkflow) {
            return Pub.Ribbon.PubCommands.startWorkflowEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.workflowStatus) {
            return Pub.Ribbon.PubCommands.workflowStatusEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.workflowTasks) {
            return Pub.Ribbon.PubCommands.workflowTasksEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.createNewRollupHierarchy) {
            return Pub.Ribbon.PubCommands.createNewRollupHierarchyEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.copySharedPage) {
            return Pub.Ribbon.PubCommands.copySharedPageEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editTermProperties) {
            return Pub.Ribbon.PubCommands.editTermPropertiesEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editPageUrls) {
            return Pub.Ribbon.PubCommands.editPageUrlsEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editSeoProperties) {
            return Pub.Ribbon.PubCommands.editSeoPropertiesEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.deleteFriendlyUrlPage) {
            return Pub.Ribbon.PubCommands.deleteFriendlyUrlPageEnabled();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertFromAddress || commandId === Pub.Ribbon.MediaCommandNames.insertFromComputer || commandId === Pub.Ribbon.MediaCommandNames.insertFromSharePoint) {
            if (commandId === Pub.Ribbon.MediaCommandNames.insertFromComputer && Pub.Ribbon.PubRibbonComponent._isFromiOS$p()) {
                return false;
            }
            return Pub.Ribbon.MediaCommands.get__canInsertMediaWebPart$i() || RTE.EmbeddingMethods.canHandleInsertEmbeddingButton();
        }
        else if (Pub.Ribbon.PubRibbonComponent._isFromiOS$p() && (commandId === Pub.Ribbon.MediaCommandNames.changeMediaUpload || commandId === Pub.Ribbon.MediaCommandNames.changePreviewUpload)) {
            return false;
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.mediaContextualTab || commandId === Pub.Ribbon.MediaCommandNames.optionsTab || commandId === Pub.Ribbon.MediaCommandNames.mediaGroup || commandId === Pub.Ribbon.MediaCommandNames.changeMedia || commandId === Pub.Ribbon.MediaCommandNames.changeMediaMenu || commandId === Pub.Ribbon.MediaCommandNames.changeMediaUpload || commandId === Pub.Ribbon.MediaCommandNames.changeMediaSharePoint || commandId === Pub.Ribbon.MediaCommandNames.changeMediaLink || commandId === Pub.Ribbon.MediaCommandNames.changeMediaRemove || commandId === Pub.Ribbon.MediaCommandNames.previewGroup || commandId === Pub.Ribbon.MediaCommandNames.changePreview || commandId === Pub.Ribbon.MediaCommandNames.changePreviewMenu || commandId === Pub.Ribbon.MediaCommandNames.changePreviewUpload || commandId === Pub.Ribbon.MediaCommandNames.changePreviewSharePoint || commandId === Pub.Ribbon.MediaCommandNames.changePreviewLink || commandId === Pub.Ribbon.MediaCommandNames.changePreviewRemove || commandId === Pub.Ribbon.MediaCommandNames.propertiesGroup || commandId === Pub.Ribbon.MediaCommandNames.title || commandId === Pub.Ribbon.MediaCommandNames.autoPlay || commandId === Pub.Ribbon.MediaCommandNames.loop) {
            var enabled = Pub.Ribbon.MediaCommands.get_enabled();
            if (commandId === Pub.Ribbon.MediaCommandNames.mediaContextualTab && enabled) {
                window.self.EnsureScript('mediaplayer.js', (typeof(window.self.mediaPlayer) !== 'undefined') ? typeof(window.self.mediaPlayer.updateInputElement) : 'undefined');
                window.self.EnsureScript('assetpickers.js', typeof(window.self.AssetPickerConfig));
                var player = Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer;
                if (!player[Pub.Ribbon.PubRibbonComponent._initializedFieldName$p]) {
                    var disableAutoPlayInEditMode = false;
                    var isPlayerHtml5 = Pub.Ribbon.PubRibbonComponent.isPlayerHtml5(player);
                    if (isPlayerHtml5) {
                        disableAutoPlayInEditMode = player.autoplay;
                    }
                    else if (typeof(player.Content) !== 'undefined' && player.Content) {
                        disableAutoPlayInEditMode = player.Content.MediaPlayer.AutoPlay;
                    }
                    if (disableAutoPlayInEditMode) {
                        if (isPlayerHtml5) {
                            player.autoplay = false;
                            try {
                                player.pause();
                            }
                            catch ($$e_5) {
                            }
                        }
                        else {
                            player.Content.MediaPlayer.AutoPlay = false;
                            player.Content.MediaPlayer.Stop(null);
                        }
                        player.autoPlay = true;
                    }
                    player[Pub.Ribbon.PubRibbonComponent._initializedFieldName$p] = true;
                }
                if (Pub.Ribbon.PubRibbonComponent.switchToMediaTab) {
                    window.setTimeout('SelectRibbonTab(\'Ribbon.ContextualTabs.Media.Options\', true)', 0);
                    Pub.Ribbon.PubRibbonComponent.switchToMediaTab = false;
                }
            }
            return enabled;
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.stylesGroup || commandId === Pub.Ribbon.MediaCommandNames.stylesMenu || commandId === Pub.Ribbon.MediaCommandNames.changeStyle || commandId === Pub.Ribbon.MediaCommandNames.sizeGroup || commandId === Pub.Ribbon.MediaCommandNames.width || commandId === Pub.Ribbon.MediaCommandNames.height || commandId === Pub.Ribbon.MediaCommandNames.lockRatio) {
            if ((commandId === Pub.Ribbon.MediaCommandNames.stylesGroup || commandId === Pub.Ribbon.MediaCommandNames.stylesMenu) && Pub.Ribbon.PubRibbonComponent.isPlayerHtml5(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer)) {
                return false;
            }
            return !Pub.Ribbon.MediaCommands.get_presentationLocked();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertMediaWebPartZone) {
            var adder = SP.Ribbon.WebPartComponent.getWebPartAdder();
            if (!adder) {
                window.self.LoadWPAdderOnDemand();
                return false;
            }
            return Pub.Ribbon.MediaCommands.get_insertMediaWebPartZoneEnabled();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertMediaRichContent) {
            return Pub.Ribbon.MediaCommands.get_insertMediaRichContentEnabled();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.manageImageRenditions || commandId === Pub.Ribbon.PubRibbonCommandNames.imageRenditionsGroup) {
            return true;
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroup || commandId === Pub.Ribbon.PubRibbonCommandNames.docLibImageTab) {
            return Pub.Ribbon.ManageImageRenditionsCommands.showImageRenditionTab();
        }
        return true;
    },
    
    handleCommand: function Pub_Ribbon_PubRibbonComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === Pub.Ribbon.PubCommandNames.schedule) {
            Pub.Ribbon.PubCommands.schedule();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.changePageLayout) {
            var pageLayoutUrl = Pub.Ribbon.PubRibbonComponent._getPageLayoutUrl$p(properties);
            if (pageLayoutUrl) {
                Pub.Ribbon.PubCommands.changePageLayout(pageLayoutUrl);
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.quickDeploy) {
            Pub.Ribbon.PubCommands.quickDeploy();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.preview || commandId === Pub.Ribbon.PubCommandNames.previewDefaultChannel) {
            Pub.Ribbon.PubCommands.preview();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.previewChannel) {
            var alias = Pub.Ribbon.PubRibbonComponent._getMobileChannelAlias$p(properties);
            var pagePreviewMobileChannel = $get(Pub.Ribbon.Externals.preview.inputPagePreviewClientId);
            pagePreviewMobileChannel.value = alias;
            Pub.Ribbon.PubCommands.preview();
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.getPreviewableChannelsXml) {
            if (properties) {
                var props = properties;
                props.PopulationJSON = Pub.Ribbon.PubRibbonComponent._initPreviewMenu$p();
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.reorderDeviceChannels) {
            Pub.Ribbon.PubCommands.reorderDeviceChannels();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.checkForDraft) {
            if (properties && properties[CUI.Controls.CheckBoxCommandProperties.On]) {
                Pub.Ribbon.PubCommands.checkForDraft();
            }
            else {
                Pub.Ribbon.PubCommands._checkForDraftRemoveOutlines$i();
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.queryCheckForDraft) {
            if (properties) {
                properties[CUI.Controls.ToggleButtonCommandProperties.On] = Pub.Ribbon.PubCommands.isCheckForDraftOn;
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsCreate) {
            Pub.Ribbon.PubCommands.variationsCreate();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsListUpdate) {
            Pub.Ribbon.PubCommands.variationsListUpdate();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsListSettingsView) {
            Pub.Ribbon.PubCommands.variationsListSettingsView();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsPullPage) {
            Pub.Ribbon.PubCommands.variationsPullPage();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsReconcileChanges) {
            Pub.Ribbon.PubCommands.variationsReconcileChanges();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsUpdate) {
            Pub.Ribbon.PubCommands.variationsUpdate();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.variationsViewChanges) {
            Pub.Ribbon.PubCommands.variationsViewChanges();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationMachineTranslate) {
            Pub.Ribbon.PubCommands.translationMachineTranslate();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationMachineTranslateInfer) {
            Pub.Ribbon.PubCommands.translationMachineTranslateInfer();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationImport) {
            Pub.Ribbon.PubCommands.translationImport();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationExportInfer) {
            Pub.Ribbon.PubCommands.translationExportInfer();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationExportExplicit) {
            Pub.Ribbon.PubCommands.translationExportExplicit();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.translationStatusDisplay) {
            Pub.Ribbon.PubCommands.translationStatusDisplay();
        }
        else if (commandId === Pub.Ribbon.PubRibbonCommandNames.getPageLayoutsXml) {
            if (properties) {
                var props = properties;
                props.PopulationXML = Pub.Ribbon.PubRibbonComponent._initPageLayoutMenu$p();
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.queryChangePageLayout) {
            if (properties) {
                var pageLayoutUrl = Pub.Ribbon.PubRibbonComponent._getPageLayoutUrl$p(properties);
                if (pageLayoutUrl && pageLayoutUrl === Pub.Ribbon.Externals.pageLayouts.currentPageLayoutUrl) {
                    properties['On'] = true;
                }
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.startWorkflow) {
            Pub.Ribbon.PubCommands.startWorkflow();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.workflowStatus) {
            Pub.Ribbon.PubCommands.workflowStatus();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.workflowTasks) {
            Pub.Ribbon.PubCommands.workflowTasks();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.createNewRollupHierarchy) {
            Pub.Ribbon.PubCommands.createNewRollupHierarchy();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.copySharedPage) {
            Pub.Ribbon.PubCommands.copySharedPage();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editTermProperties) {
            Pub.Ribbon.PubCommands.editTermProperties();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editPageUrls) {
            Pub.Ribbon.PubCommands.editPageUrls();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.editSeoProperties) {
            Pub.Ribbon.PubCommands.editSeoProperties();
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.deleteFriendlyUrlPage) {
            Pub.Ribbon.PubCommands.deleteFriendlyUrlPage();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertMediaWebPartZone) {
            var mediaWebPartInsertId = window.self.mediaPlayer.mediaWebPartInsertId;
            if (SP.Ribbon.WebPartComponent.get_activeWebPartZoneId()) {
                var adder = SP.Ribbon.WebPartComponent.getWebPartAdder();
                adder.addItemToPageByItemIdAndZoneId(mediaWebPartInsertId, SP.Ribbon.WebPartComponent.get_activeWebPartZoneId());
                Pub.Ribbon.PubRibbonComponent.switchToMediaTab = true;
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertFromComputer) {
            Pub.Ribbon.MediaCommands._insertFromComputer$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertFromSharePoint) {
            Pub.Ribbon.MediaCommands._insertFromSharePoint$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.insertFromAddress) {
            Pub.Ribbon.MediaCommands._insertFromAddress$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changeMediaUpload) {
            Pub.Ribbon.MediaCommands._updateFromComputer$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changeMediaSharePoint || commandId === Pub.Ribbon.MediaCommandNames.changeMedia) {
            Pub.Ribbon.MediaCommands._updateFromSharePoint$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changeMediaLink) {
            Pub.Ribbon.MediaCommands._updateFromAddress$i();
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changeMediaRemove) {
            window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'MediaSource', null);
            window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changePreviewUpload) {
            var $$t_T = this;
            Pub.Ribbon.PubRibbonComponent._launchDialog$i(Pub.Ribbon.PubRibbonComponent._uploadExAspx$i, SP.Publishing.Resources.media_UploadPreview, null, 'DefaultList=Asset', false, function(dlgResult, returnValue) {
                if (returnValue) {
                    var linkUrl = returnValue.newFileUrl;
                    Pub.Ribbon.MediaCommands._updatePreviewImage$i(linkUrl, null);
                }
            });
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changePreviewSharePoint || commandId === Pub.Ribbon.MediaCommandNames.changePreview) {
            var currentValue = mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._previewImageSource$i);
            Pub.Ribbon.Imports.pickUrlFromSharePoint(currentValue, false, Pub.Ribbon.MediaCommands._updatePreviewImage$i);
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changePreviewLink) {
            var currentValue = window.self.mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'PreviewImageSource');
            var $$t_U = this;
            Pub.Ribbon.PubRibbonComponent._launchDialog$i('RteDialog.aspx', SP.Publishing.Resources.media_LinkPreview, 'CreateLink', ((currentValue) ? 'Param2=' + SP.Utilities.HttpUtility.urlKeyValueEncode(currentValue) : ''), false, function(dlgResult, returnValue) {
                if (returnValue) {
                    var linkUrl = (returnValue)[1];
                    Pub.Ribbon.MediaCommands._updatePreviewImage$i(linkUrl, null);
                }
            });
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changePreviewRemove) {
            window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'PreviewImageSource', null);
            window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.title) {
            if (properties) {
                window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'MediaTitle', properties[CUI.Controls.TextBoxCommandProperties.Value]);
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryTitle) {
            if (properties) {
                var mediaTitle = window.self.mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'MediaTitle');
                properties[CUI.Controls.TextBoxCommandProperties.Value] = (mediaTitle) ? mediaTitle : '';
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.autoPlay) {
            if (properties) {
                Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.autoPlay = properties[CUI.Controls.CheckBoxCommandProperties.On];
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryAutoPlay) {
            if (properties) {
                properties[CUI.Controls.CheckBoxCommandProperties.On] = Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.autoPlay;
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.loop) {
            if (properties) {
                window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'Loop', properties[CUI.Controls.CheckBoxCommandProperties.On]);
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryLoop) {
            if (properties) {
                properties[CUI.Controls.CheckBoxCommandProperties.On] = window.self.mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'Loop');
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.changeStyle) {
            if (properties) {
                Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.Content.MediaPlayer.TemplateSource = properties['CommandValueId'];
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryChangeStyle) {
            if (properties) {
                if (properties['CommandValueId'] === Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.Content.MediaPlayer.TemplateSource) {
                    properties['Selected'] = true;
                }
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryStylesMenu) {
            if (properties) {
                var props = properties;
                props.PopulationXML = Pub.Ribbon.PubRibbonComponent._getPlayerStylesMenuXml$p();
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.width) {
            if (properties) {
                var newWidthValue = properties[CUI.Controls.SpinnerCommandProperties.Value];
                var newWidthUnit = properties[CUI.Controls.SpinnerCommandProperties.Unit];
                var newWidthString, newHeightString = null;
                if (newWidthUnit !== 'percent') {
                    if (Pub.Ribbon.MediaCommands.get_aspectRatioLocked()) {
                        newHeightString = Math.round(newWidthValue * (1 / Pub.Ribbon.MediaCommands.get_aspectRatio())).toString() + 'px';
                    }
                    newWidthString = newWidthValue + 'px';
                }
                else {
                    newWidthString = newWidthValue + '%';
                }
                window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'InlineWidth', newWidthString);
                if (newHeightString) {
                    window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'InlineHeight', newHeightString);
                }
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
                if (newHeightString) {
                    RefreshCommandUI();
                }
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryWidth) {
            if (properties) {
                properties[CUI.Controls.SpinnerCommandProperties.Value] = (Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.clientWidth > 0) ? Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.clientWidth : Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.clientWidth;
                properties[CUI.Controls.SpinnerCommandProperties.Unit] = 'px';
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.height) {
            if (properties) {
                var newHeightValue = properties[CUI.Controls.SpinnerCommandProperties.Value];
                var newHeightUnit = properties[CUI.Controls.SpinnerCommandProperties.Unit];
                var newHeightString, newWidthString = null;
                if (newHeightUnit !== 'percent') {
                    if (Pub.Ribbon.MediaCommands.get_aspectRatioLocked()) {
                        newWidthString = Math.round(newHeightValue * Pub.Ribbon.MediaCommands.get_aspectRatio()).toString() + 'px';
                    }
                    newHeightString = newHeightValue + 'px';
                }
                else {
                    newHeightString = newHeightValue + '%';
                }
                window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'InlineHeight', newHeightString);
                if (newWidthString) {
                    window.self.mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, 'InlineWidth', newWidthString);
                }
                window.self.mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer);
                if (newWidthString) {
                    RefreshCommandUI();
                }
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryHeight) {
            if (properties) {
                properties[CUI.Controls.SpinnerCommandProperties.Value] = (Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.clientHeight > 0) ? Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.clientHeight : Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.clientHeight;
                properties[CUI.Controls.SpinnerCommandProperties.Unit] = 'px';
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.lockRatio) {
            if (properties) {
                Pub.Ribbon.MediaCommands.set_aspectRatioLocked(properties[CUI.Controls.CheckBoxCommandProperties.On]);
            }
        }
        else if (commandId === Pub.Ribbon.MediaCommandNames.queryLockRatio) {
            if (properties) {
                properties[CUI.Controls.CheckBoxCommandProperties.On] = Pub.Ribbon.MediaCommands.get_aspectRatioLocked();
            }
        }
        else if (commandId === Pub.Ribbon.PubCommandNames.manageImageRenditions) {
            Pub.Ribbon.ManageImageRenditionsCommands._manageImageRenditions$i();
        }
        return true;
    },
    
    isFocusable: function Pub_Ribbon_PubRibbonComponent$isFocusable() {
        return true;
    },
    
    receiveFocus: function Pub_Ribbon_PubRibbonComponent$receiveFocus() {
        return true;
    },
    
    yieldFocus: function Pub_Ribbon_PubRibbonComponent$yieldFocus() {
        return true;
    }
}


Pub.Ribbon._PSU = function Pub_Ribbon__PSU() {
}
Pub.Ribbon._PSU._isNullOrEmptyString$i = function Pub_Ribbon__PSU$_isNullOrEmptyString$i(str) {
    return Pub.Ribbon._PSU._isNullOrUndefined$i(str) || !str.length;
}
Pub.Ribbon._PSU._isNullOrUndefined$i = function Pub_Ribbon__PSU$_isNullOrUndefined$i(obj) {
    var objNull = null;
    return obj === objNull || typeof(obj) === 'undefined';
}


Pub.Ribbon._playerProperties = function Pub_Ribbon__playerProperties() {
}


Pub.Ribbon.MediaCommandNames = function Pub_Ribbon_MediaCommandNames() {
}


Pub.Ribbon.EmbedPropertyDefaults = function Pub_Ribbon_EmbedPropertyDefaults() {
}


Pub.Ribbon.MediaCommands = function Pub_Ribbon_MediaCommands() {
}
Pub.Ribbon.MediaCommands.get_insertMediaWebPartZoneEnabled = function Pub_Ribbon_MediaCommands$get_insertMediaWebPartZoneEnabled() {
    var mediaPlayerObj = window.self.mediaPlayer;
    if (mediaPlayerObj) {
        var mediaWebPartInsertId = mediaPlayerObj.mediaWebPartInsertId;
        if (mediaWebPartInsertId) {
            if (SP.Ribbon.WebPartComponent.get_activeWebPartZoneId()) {
                return true;
            }
        }
    }
    return false;
}
Pub.Ribbon.MediaCommands.get_insertMediaRichContentEnabled = function Pub_Ribbon_MediaCommands$get_insertMediaRichContentEnabled() {
    return RTE.EmbeddingMethods.canHandleInsertEmbeddingButton();
}
Pub.Ribbon.MediaCommands.get__canInsertMediaWebPart$i = function Pub_Ribbon_MediaCommands$get__canInsertMediaWebPart$i() {
    var mediaPlayerObj = window.self.mediaPlayer;
    if (mediaPlayerObj) {
        var mediaWebPartInsertId = mediaPlayerObj.mediaWebPartInsertId;
        if (mediaWebPartInsertId) {
            return RTE.Canvas.canHandleInsertWebPart();
        }
    }
    return false;
}
Pub.Ribbon.MediaCommands.get_enabled = function Pub_Ribbon_MediaCommands$get_enabled() {
    var activeWebPartId = SP.Ribbon.WebPartComponent.get_activeWebPartId();
    if (activeWebPartId !== Pub.Ribbon.MediaCommands._lastActiveWebPartId$p) {
        var focusedPlayerIsActiveWebPart = !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode && Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode.id === activeWebPartId;
        if (!focusedPlayerIsActiveWebPart) {
            var focusedPlayerIsLastActiveWebPart = !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode && Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.parentNode.parentNode.id === Pub.Ribbon.MediaCommands._lastActiveWebPartId$p;
            if (activeWebPartId) {
                var activeWebPartMediaPlayer = null;
                var possibleMediaPlayerId = SP.Ribbon.WebPartComponent.get_activeWebPartId().substr(7);
                var mediaPlayerObj = window.self.mediaPlayer;
                if (mediaPlayerObj) {
                    var players = mediaPlayerObj.players;
                    if (players) {
                        var $$dict_7 = players;
                        for (var $$key_8 in $$dict_7) {
                            var entry = { key: $$key_8, value: $$dict_7[$$key_8] };
                            if (entry.key === possibleMediaPlayerId) {
                                activeWebPartMediaPlayer = entry.value;
                            }
                        }
                    }
                }
                if (activeWebPartMediaPlayer) {
                    Pub.Ribbon.PubRibbonComponent.mediaPlayerClicked($get(activeWebPartMediaPlayer.id));
                }
                else if (focusedPlayerIsLastActiveWebPart) {
                    Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
                }
            }
            else if (focusedPlayerIsLastActiveWebPart) {
                Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
            }
        }
        Pub.Ribbon.MediaCommands._lastActiveWebPartId$p = activeWebPartId;
    }
    return !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer;
}
Pub.Ribbon.MediaCommands.get_presentationLocked = function Pub_Ribbon_MediaCommands$get_presentationLocked() {
    return !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.presentationLocked;
}
Pub.Ribbon.MediaCommands.get_aspectRatioLocked = function Pub_Ribbon_MediaCommands$get_aspectRatioLocked() {
    var ratioLockedValue = Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.ratioLocked;
    return !!Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer && (SP.ScriptUtility.isNullOrUndefined(ratioLockedValue) || ratioLockedValue);
}
Pub.Ribbon.MediaCommands.set_aspectRatioLocked = function Pub_Ribbon_MediaCommands$set_aspectRatioLocked(value) {
    Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.ratioLocked = value;
    if (!value) {
        Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer.aspectRatio = null;
    }
    return value;
}
Pub.Ribbon.MediaCommands.get_aspectRatio = function Pub_Ribbon_MediaCommands$get_aspectRatio() {
    var player = Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer;
    if (Pub.Ribbon.MediaCommands.get_aspectRatioLocked() && !player.aspectRatio) {
        player.aspectRatio = player.clientWidth / player.clientHeight;
    }
    return player.aspectRatio;
}
Pub.Ribbon.MediaCommands._insertFromComputer$i = function Pub_Ribbon_MediaCommands$_insertFromComputer$i() {
    Pub.Ribbon.MediaCommands._loadRequiredMediaFiles$p();
    Pub.Ribbon.MediaCommands._pickMediaFromComputer$i(Pub.Ribbon.MediaCommands._insertMedia$p);
}
Pub.Ribbon.MediaCommands._insertFromAddress$i = function Pub_Ribbon_MediaCommands$_insertFromAddress$i() {
    Pub.Ribbon.MediaCommands._loadRequiredMediaFiles$p();
    Pub.Ribbon.MediaCommands._pickMediaFromAddress$i(null, Pub.Ribbon.MediaCommands._insertMedia$p);
}
Pub.Ribbon.MediaCommands._insertFromSharePoint$i = function Pub_Ribbon_MediaCommands$_insertFromSharePoint$i() {
    Pub.Ribbon.MediaCommands._loadRequiredMediaFiles$p();
    Pub.Ribbon.Imports.pickUrlFromSharePoint(null, true, Pub.Ribbon.MediaCommands._insertMedia$p);
}
Pub.Ribbon.MediaCommands._insertMedia$p = function Pub_Ribbon_MediaCommands$_insertMedia$p(url, additionalData) {
    if (Pub.Ribbon.MediaCommands.get__canInsertMediaWebPart$i()) {
        var mediaWebPartInsertId = window.self.mediaPlayer.mediaWebPartInsertId;
        var adder = SP.Ribbon.WebPartComponent.getWebPartAdder();
        var wpid = adder._createWebpartPlaceholderInRte(RTE.Cursor.get_range());
        if (!Pub.Ribbon._PSU._isNullOrEmptyString$i(url)) {
            var field = document.createElement(RTE.HtmlTagName.INPUT);
            field.name = wpid + 'mediasource';
            field.value = url;
            var form = RTE.Canvas.currentEditableRegion();
            while (form && form.tagName !== 'FORM') {
                form = form.parentNode;
            }
            if (form) {
                form.appendChild(field);
            }
        }
        adder.addItemToPageByItemIdAndZoneId(mediaWebPartInsertId, 'wpz', 0, wpid);
        Pub.Ribbon.PubRibbonComponent.switchToMediaTab = true;
    }
    else if (RTE.EmbeddingMethods.canHandleInsertEmbeddingButton()) {
        var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.genericLoading);
        EnsureScript('SP.DocumentManagement.js', typeof(SP.Video), function() {
            var ctx = SP.ClientContext.get_current();
            var config = new SP.Video.EmbedCodeConfiguration();
            config.set_pixelWidth(Pub.Ribbon.EmbedPropertyDefaults.pixelWidth);
            config.set_pixelHeight(Pub.Ribbon.EmbedPropertyDefaults.pixelHeight);
            var embedCode = SP.Video.VideoSet.getEmbedCode(ctx, url, config);
            ctx.executeQueryAsync(function(sender, args) {
                RTE.EmbeddingMethods.insertEmbedding(embedCode.get_value(), function(succeeded) {
                    waitDialog.close(SP.UI.DialogResult.OK);
                    if (!succeeded) {
                        Pub.Ribbon.MediaCommands._errorInsertIframe$p('Failed to insert as embedding', null);
                    }
                });
            }, function(sender, args) {
                waitDialog.close(SP.UI.DialogResult.OK);
                Pub.Ribbon.MediaCommands._errorInsertIframe$p(args.get_message(), args.get_stackTrace());
            });
        });
    }
}
Pub.Ribbon.MediaCommands._errorInsertIframe$p = function Pub_Ribbon_MediaCommands$_errorInsertIframe$p(debugMessage, debugStacktrace) {
    var error = SP.Publishing.Resources.insertMediaUnsupportedIframe;
    alert(error);
}
Pub.Ribbon.MediaCommands._updateFromComputer$i = function Pub_Ribbon_MediaCommands$_updateFromComputer$i() {
    Pub.Ribbon.MediaCommands._pickMediaFromComputer$i(Pub.Ribbon.MediaCommands._updateMediaSource$p);
}
Pub.Ribbon.MediaCommands._updateFromAddress$i = function Pub_Ribbon_MediaCommands$_updateFromAddress$i() {
    var currentValue = mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._mediaSource$i);
    Pub.Ribbon.MediaCommands._pickMediaFromAddress$i(currentValue, Pub.Ribbon.MediaCommands._updateMediaSource$p);
}
Pub.Ribbon.MediaCommands._updateFromSharePoint$i = function Pub_Ribbon_MediaCommands$_updateFromSharePoint$i() {
    var currentValue = mediaPlayer.getProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._mediaSource$i);
    Pub.Ribbon.Imports.pickUrlFromSharePoint(currentValue, true, Pub.Ribbon.MediaCommands._updateMediaSource$p);
}
Pub.Ribbon.MediaCommands._updateMediaSource$p = function Pub_Ribbon_MediaCommands$_updateMediaSource$p(url, data) {
    if (data) {
        var fields = data.ListItemFields;
        if (fields) {
            var thumbnailUrl = fields.AlternateThumbnailUrl;
            if (thumbnailUrl) {
                mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._previewImageSource$i, thumbnailUrl.split(',')[0]);
            }
        }
    }
    if (url) {
        mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._mediaSource$i, url);
        mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, true);
    }
    RefreshCommandUI();
}
Pub.Ribbon.MediaCommands._updatePreviewImage$i = function Pub_Ribbon_MediaCommands$_updatePreviewImage$i(url, data) {
    if (url) {
        mediaPlayer.setProperty(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, Pub.Ribbon._playerProperties._previewImageSource$i, url);
        mediaPlayer.updateInputElement(Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer, false);
    }
    RefreshCommandUI();
}
Pub.Ribbon.MediaCommands._pickMediaFromComputer$i = function Pub_Ribbon_MediaCommands$_pickMediaFromComputer$i(callback) {
    Pub.Ribbon.PubRibbonComponent._launchDialog$i(Pub.Ribbon.PubRibbonComponent._uploadExAspx$i, null, null, 'DefaultList=Asset&Title=' + RTE.RteUtility.urlEncode(SP.Publishing.Resources.media_UploadMedia), false, function(dlgResult, returnValue) {
        if (returnValue) {
            var linkUrl = returnValue.newFileUrl;
            if (linkUrl) {
                callback(linkUrl, null);
            }
        }
    });
}
Pub.Ribbon.MediaCommands._pickMediaFromAddress$i = function Pub_Ribbon_MediaCommands$_pickMediaFromAddress$i(currentValue, callback) {
    var additionalQuery = 'Caption2=' + SP.Utilities.HttpUtility.urlKeyValueEncode(SP.Publishing.Resources.insertMediaFromAddressDescription);
    if (!Pub.Ribbon._PSU._isNullOrEmptyString$i(currentValue)) {
        additionalQuery += '&Param2=' + SP.Utilities.HttpUtility.urlKeyValueEncode(currentValue);
    }
    Pub.Ribbon.PubRibbonComponent._launchDialogWidth$i('RteDialog.aspx', SP.Publishing.Resources.media_LinkMedia, 'CreateLink', additionalQuery, false, 500, function(dlgResult, returnValue) {
        if (returnValue) {
            var linkUrl = (returnValue)[1];
            if (linkUrl) {
                callback(linkUrl, null);
            }
        }
    });
}
Pub.Ribbon.MediaCommands._loadRequiredMediaFiles$p = function Pub_Ribbon_MediaCommands$_loadRequiredMediaFiles$p() {
    if (!Pub.Ribbon.MediaCommands.get__canInsertMediaWebPart$i() && RTE.EmbeddingMethods.canHandleInsertEmbeddingButton()) {
        EnsureScript('SP.DocumentManagement.js', typeof(SP.Video), function() {
        });
    }
}


Pub.Ribbon.PubCommandNames = function Pub_Ribbon_PubCommandNames() {
}


Pub.Ribbon.PubRibbonCommandNames = function Pub_Ribbon_PubRibbonCommandNames() {
}


Pub.Ribbon.PubCommands = function Pub_Ribbon_PubCommands() {
}
Pub.Ribbon.PubCommands.scheduleEnabled = function Pub_Ribbon_PubCommands$scheduleEnabled() {
    return !!Pub.Ribbon.Externals.scheduling;
}
Pub.Ribbon.PubCommands.scheduleDialogCallback = function Pub_Ribbon_PubCommands$scheduleDialogCallback(dialogResult, returnValue) {
    if (dialogResult === SP.UI.DialogResult.OK) {
        SP.Ribbon.PageState.PageStateHandler.updatePageState();
    }
}
Pub.Ribbon.PubCommands.schedule = function Pub_Ribbon_PubCommands$schedule() {
    if (!Pub.Ribbon.PubCommands.scheduleEnabled()) {
        return;
    }
    var dlgOptions = new SP.UI.DialogOptions();
    dlgOptions.url = Pub.Ribbon.Externals.scheduling.url;
    dlgOptions.y = 200;
    dlgOptions.dialogReturnValueCallback = Pub.Ribbon.PubCommands.scheduleDialogCallback;
    SP.UI.ModalDialog.showModalDialog(dlgOptions);
}
Pub.Ribbon.PubCommands.changePageLayoutEnabled = function Pub_Ribbon_PubCommands$changePageLayoutEnabled() {
    var isDisconnected = false;
    if (!Pub.Ribbon.Externals.pageLayouts) {
        return false;
    }
    if (Pub.Ribbon.Externals.pageLayouts) {
        isDisconnected = Pub.Ribbon.Externals.pageLayouts.isPageDisconnectedFromPageLayout;
    }
    return (!isDisconnected) && (!!SP.Ribbon.PageState.ImportedNativeData) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.viewModeIsEditStateName]);
}
Pub.Ribbon.PubCommands.changePageLayout = function Pub_Ribbon_PubCommands$changePageLayout(newPageLayoutUrl) {
    if (!Pub.Ribbon.PubCommands.changePageLayoutEnabled()) {
        return;
    }
    var newPageLayout = $get(Pub.Ribbon.Externals.pageLayouts.inputPageLayoutClientId);
    newPageLayout.value = newPageLayoutUrl;
    SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Publishing.Resources.changePageLayoutWaitScreenText);
    eval(Pub.Ribbon.Externals.pageLayouts.changePageLayoutFn);
}
Pub.Ribbon.PubCommands.quickDeployEnabled = function Pub_Ribbon_PubCommands$quickDeployEnabled() {
    return !!Pub.Ribbon.Externals.quickDeploy;
}
Pub.Ribbon.PubCommands.quickDeploy = function Pub_Ribbon_PubCommands$quickDeploy() {
    if (!Pub.Ribbon.PubCommands.quickDeployEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.quickDeploy.quickDeployFn);
}
Pub.Ribbon.PubCommands.previewEnabled = function Pub_Ribbon_PubCommands$previewEnabled() {
    return !!Pub.Ribbon.Externals.preview;
}
Pub.Ribbon.PubCommands.preview = function Pub_Ribbon_PubCommands$preview() {
    if (!Pub.Ribbon.PubCommands.previewEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.preview.previewFn);
}
Pub.Ribbon.PubCommands.reorderDeviceChannelsDialogCallback = function Pub_Ribbon_PubCommands$reorderDeviceChannelsDialogCallback(dialogResult, returnValue) {
    if (dialogResult === SP.UI.DialogResult.OK) {
        location.reload(true);
    }
}
Pub.Ribbon.PubCommands.reorderDeviceChannelsEnabled = function Pub_Ribbon_PubCommands$reorderDeviceChannelsEnabled() {
    return !!Pub.Ribbon.Externals.deviceChannelReordering;
}
Pub.Ribbon.PubCommands.reorderDeviceChannels = function Pub_Ribbon_PubCommands$reorderDeviceChannels() {
    if (!Pub.Ribbon.PubCommands.reorderDeviceChannelsEnabled()) {
        return;
    }
    var dlgOptions = new SP.UI.DialogOptions();
    dlgOptions.url = Pub.Ribbon.Externals.deviceChannelReordering.url;
    dlgOptions.dialogReturnValueCallback = Pub.Ribbon.PubCommands.reorderDeviceChannelsDialogCallback;
    SP.UI.ModalDialog.showModalDialog(dlgOptions);
}
Pub.Ribbon.PubCommands.checkForDraftEnabled = function Pub_Ribbon_PubCommands$checkForDraftEnabled() {
    return !!Pub.Ribbon.Externals.checkForDraft;
}
Pub.Ribbon.PubCommands.checkForDraft = function Pub_Ribbon_PubCommands$checkForDraft() {
    if (!Pub.Ribbon.PubCommands.checkForDraftEnabled()) {
        return;
    }
    Pub.Ribbon.PubCommands.isCheckForDraftOn = true;
    Pub.Ribbon.PubCommands.executeCommandAppStateChanged();
    eval(Pub.Ribbon.Externals.checkForDraft.checkForDraftFn);
}
Pub.Ribbon.PubCommands.startWorkflowEnabled = function Pub_Ribbon_PubCommands$startWorkflowEnabled() {
    return !!Pub.Ribbon.Externals.startWorkflow;
}
Pub.Ribbon.PubCommands.startWorkflow = function Pub_Ribbon_PubCommands$startWorkflow() {
    if (!Pub.Ribbon.PubCommands.startWorkflowEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.startWorkflow.startWorkflowFn);
}
Pub.Ribbon.PubCommands.workflowStatusEnabled = function Pub_Ribbon_PubCommands$workflowStatusEnabled() {
    return !!Pub.Ribbon.Externals.workflowStatus;
}
Pub.Ribbon.PubCommands.workflowStatus = function Pub_Ribbon_PubCommands$workflowStatus() {
    if (!Pub.Ribbon.PubCommands.workflowStatusEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.workflowStatus.workflowStatusFn);
}
Pub.Ribbon.PubCommands.workflowTasksEnabled = function Pub_Ribbon_PubCommands$workflowTasksEnabled() {
    return !!Pub.Ribbon.Externals.workflowTasks;
}
Pub.Ribbon.PubCommands.workflowTasks = function Pub_Ribbon_PubCommands$workflowTasks() {
    if (!Pub.Ribbon.PubCommands.workflowTasksEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.workflowTasks.workflowTasksFn);
}
Pub.Ribbon.PubCommands.createNewRollupHierarchyEnabled = function Pub_Ribbon_PubCommands$createNewRollupHierarchyEnabled() {
    return !!Pub.Ribbon.Externals.createNewRollupHierarchy;
}
Pub.Ribbon.PubCommands.createNewRollupHierarchy = function Pub_Ribbon_PubCommands$createNewRollupHierarchy() {
    if (!Pub.Ribbon.PubCommands.createNewRollupHierarchyEnabled()) {
        return;
    }
    SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.createNewRollupHierarchy.url);
}
Pub.Ribbon.PubCommands.copySharedPageEnabled = function Pub_Ribbon_PubCommands$copySharedPageEnabled() {
    return !!Pub.Ribbon.Externals.copySharedPage;
}
Pub.Ribbon.PubCommands.copySharedPage = function Pub_Ribbon_PubCommands$copySharedPage() {
    if (!Pub.Ribbon.PubCommands.copySharedPageEnabled()) {
        return;
    }
    SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.copySharedPage.url);
}
Pub.Ribbon.PubCommands.editTermPropertiesEnabled = function Pub_Ribbon_PubCommands$editTermPropertiesEnabled() {
    return !!Pub.Ribbon.Externals.editTermProperties;
}
Pub.Ribbon.PubCommands.editTermProperties = function Pub_Ribbon_PubCommands$editTermProperties() {
    if (!Pub.Ribbon.PubCommands.editTermPropertiesEnabled()) {
        return;
    }
    SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.editTermProperties.url);
}
Pub.Ribbon.PubCommands.editPageUrlsEnabled = function Pub_Ribbon_PubCommands$editPageUrlsEnabled() {
    return !!Pub.Ribbon.Externals.editPageUrls;
}
Pub.Ribbon.PubCommands.editPageUrls = function Pub_Ribbon_PubCommands$editPageUrls() {
    if (!Pub.Ribbon.PubCommands.editPageUrlsEnabled()) {
        return;
    }
    SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.editPageUrls.url);
}
Pub.Ribbon.PubCommands.editSeoPropertiesEnabled = function Pub_Ribbon_PubCommands$editSeoPropertiesEnabled() {
    return !!Pub.Ribbon.Externals.editSeoProperties;
}
Pub.Ribbon.PubCommands.editSeoProperties = function Pub_Ribbon_PubCommands$editSeoProperties() {
    if (!Pub.Ribbon.PubCommands.editSeoPropertiesEnabled()) {
        return;
    }
    if (Pub.Ribbon.Externals.editSeoProperties.isTermPage) {
        SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.editSeoProperties.url);
    }
    else {
        if (Pub.Ribbon.Externals.editSeoProperties.forceCheckOut) {
            if (Pub.Ribbon.Externals.editSeoProperties.isCheckedOut) {
                if (Pub.Ribbon.Externals.editSeoProperties.isCheckedOutToCurrentUser) {
                    eval(Pub.Ribbon.Externals.editSeoProperties.editSeoPropertiesFn);
                }
                else {
                    alert(SP.Publishing.Resources.seoCannotEditPropertyCheckout);
                }
            }
            else {
                if (confirm(SP.Publishing.Resources.seoConfirmCheckout)) {
                    eval(Pub.Ribbon.Externals.editSeoProperties.editSeoPropertiesFn);
                }
            }
        }
        else {
            eval(Pub.Ribbon.Externals.editSeoProperties.editSeoPropertiesFn);
        }
    }
}
Pub.Ribbon.PubCommands.deleteFriendlyUrlPageEnabled = function Pub_Ribbon_PubCommands$deleteFriendlyUrlPageEnabled() {
    return !!Pub.Ribbon.Externals.deleteFriendlyUrlPage;
}
Pub.Ribbon.PubCommands.deleteFriendlyUrlPage = function Pub_Ribbon_PubCommands$deleteFriendlyUrlPage() {
    if (!Pub.Ribbon.PubCommands.deleteFriendlyUrlPageEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.deleteFriendlyUrlPage.deleteFriendlyUrlPageFn);
}
Pub.Ribbon.PubCommands.load = function Pub_Ribbon_PubCommands$load() {
}
Pub.Ribbon.PubCommands.generateInProgressSection = function Pub_Ribbon_PubCommands$generateInProgressSection(dialogElement, headerMsg, statusMsg) {
    if (!dialogElement) {
        return null;
    }
    var container = document.createElement('DIV');
    dialogElement.appendChild(container);
    container.style.margin = '8px 0px';
    var header = document.createElement('DIV');
    header.style.textDecoration = 'underline';
    header.innerHTML = headerMsg;
    container.appendChild(header);
    var status = document.createElement('DIV');
    status.style.margin = '6px';
    status.style.height = '20px';
    container.appendChild(status);
    var img = document.createElement('IMG');
    img.src = '/_layouts/images/gears_anv4.gif';
    img.style.width = '20px';
    img.style.height = '20px';
    img.style.margin = '0px 3px';
    img.align = 'absmiddle';
    status.appendChild(img);
    var message = document.createElement('SPAN');
    message.innerHTML = statusMsg;
    status.appendChild(message);
    return status;
}
Pub.Ribbon.PubCommands._checkForDraftRemoveOutlines$i = function Pub_Ribbon_PubCommands$_checkForDraftRemoveOutlines$i() {
    Pub.Ribbon.PubCommands.isCheckForDraftOn = false;
    Pub.Ribbon.PubCommands.executeCommandAppStateChanged();
    ShowUnapprovedResourcesPageAbort();
    RemoveDraftOutlines();
    RemovePreviousConsoleMessageNotification();
}
Pub.Ribbon.PubCommands.variationsCreateEnabled = function Pub_Ribbon_PubCommands$variationsCreateEnabled() {
    return !!Pub.Ribbon.Externals.createPageVariation;
}
Pub.Ribbon.PubCommands.variationsCreate = function Pub_Ribbon_PubCommands$variationsCreate() {
    if (!Pub.Ribbon.PubCommands.variationsCreateEnabled()) {
        return;
    }
    SP.Utilities.HttpUtility.navigateTo(Pub.Ribbon.Externals.createPageVariation.url);
}
Pub.Ribbon.PubCommands.variationsUpdateEnabled = function Pub_Ribbon_PubCommands$variationsUpdateEnabled() {
    return !!Pub.Ribbon.Externals.updatePageVariation;
}
Pub.Ribbon.PubCommands.pullPageCallbackComplete = function Pub_Ribbon_PubCommands$pullPageCallbackComplete(callbackResult) {
    Pub.Ribbon.PubCommands._removeVariationsNotification$p();
    Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(callbackResult), false);
}
Pub.Ribbon.PubCommands.variationsPullPage = function Pub_Ribbon_PubCommands$variationsPullPage() {
    if (!Pub.Ribbon.PubCommands.variationsPullPageEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.pullPageVariation.url);
}
Pub.Ribbon.PubCommands.variationsReconcileChangesEnabled = function Pub_Ribbon_PubCommands$variationsReconcileChangesEnabled() {
    return !!Pub.Ribbon.Externals.reconcileChangesVariation;
}
Pub.Ribbon.PubCommands.variationsReconcileChanges = function Pub_Ribbon_PubCommands$variationsReconcileChanges() {
    if (!Pub.Ribbon.PubCommands.variationsReconcileChangesEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.reconcileChangesVariation.url);
}
Pub.Ribbon.PubCommands.variationsPullPageEnabled = function Pub_Ribbon_PubCommands$variationsPullPageEnabled() {
    return !!Pub.Ribbon.Externals.pullPageVariation;
}
Pub.Ribbon.PubCommands.variationsUpdateCallbackComplete = function Pub_Ribbon_PubCommands$variationsUpdateCallbackComplete(callbackResult) {
    Pub.Ribbon.PubCommands._removeVariationsNotification$p();
    if (callbackResult === 'OK') {
        Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Publishing.Resources.variationsListUpdateSuccessfullyEnqueued), false);
    }
    else if (callbackResult === 'VariationsListUpdateNoTargetVariations') {
        Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Publishing.Resources.variationsListUpdateNoTargetVariations), false);
    }
    else {
        Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Publishing.Resources.variationsListUpdateFailed), false);
    }
}
Pub.Ribbon.PubCommands.variationsUpdate = function Pub_Ribbon_PubCommands$variationsUpdate() {
    if (!Pub.Ribbon.PubCommands.variationsUpdateEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.updatePageVariation.url);
}
Pub.Ribbon.PubCommands.variationsListUpdateEnabled = function Pub_Ribbon_PubCommands$variationsListUpdateEnabled() {
    var selectedItems = SP.ListOperation.Selection.getSelectedItems();
    var size = 0;
    var $$dict_2 = selectedItems;
    for (var $$key_3 in $$dict_2) {
        var de = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (!SP.ScriptUtility.isNullOrUndefined(de)) {
            if (de.value.fsObjType.toString() !== '0') {
                return false;
            }
            else {
                size++;
            }
        }
    }
    if (!size) {
        return false;
    }
    return true;
}
Pub.Ribbon.PubCommands._removeVariationsNotification$p = function Pub_Ribbon_PubCommands$_removeVariationsNotification$p() {
    if (Pub.Ribbon.PubCommands._variationsNotificationId$p) {
        removeNotification(Pub.Ribbon.PubCommands._variationsNotificationId$p);
        Pub.Ribbon.PubCommands._variationsNotificationId$p = null;
    }
}
Pub.Ribbon.PubCommands.variationsListUpdate = function Pub_Ribbon_PubCommands$variationsListUpdate() {
    if (!Pub.Ribbon.PubCommands.variationsListUpdateEnabled()) {
        return;
    }
    EnsureScript('SP.Publishing.js', typeof(SP.Publishing.Variations), function() {
        var selectedItems = SP.ListOperation.Selection.getSelectedItems();
        var itemIds = [];
        var $$dict_2 = selectedItems;
        for (var $$key_3 in $$dict_2) {
            var de = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (!SP.ScriptUtility.isNullOrUndefined(de)) {
                if (de.value.fsObjType.toString() === '0') {
                    itemIds.push(de.value.id.toString());
                }
            }
        }
        var itemIdArray = new Array(itemIds.length);
        for (var i = 0; i < itemIdArray.length; i++) {
            itemIdArray[i] = itemIds[i];
        }
        var clientContext = SP.ClientContext.get_current();
        var listId = new SP.Guid(SP.ListOperation.Selection.getSelectedList());
        SP.Publishing.Variations.updateListItems(clientContext, listId, itemIdArray);
        clientContext.executeQueryAsync(function() {
            Pub.Ribbon.PubCommands._removeVariationsNotification$p();
            Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Publishing.Resources.variationsListUpdateSuccessfullyEnqueued), false);
        }, function() {
            Pub.Ribbon.PubCommands._removeVariationsNotification$p();
            Pub.Ribbon.PubCommands._variationsNotificationId$p = addNotification(SP.Utilities.HttpUtility.htmlEncode(SP.Publishing.Resources.variationsListUpdateFailed), false);
        });
    });
}
Pub.Ribbon.PubCommands.variationsListSettingsView = function Pub_Ribbon_PubCommands$variationsListSettingsView() {
    var listId = SP.ListOperation.Selection.getSelectedList();
    var strWeb = SP.PageContextInfo.get_webServerRelativeUrl();
    if (!strWeb.endsWith('/')) {
        strWeb += '/';
    }
    strWeb += SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl();
    var result = strWeb + 'VariationsListSettings.aspx?List=' + SP.Utilities.HttpUtility.urlKeyValueEncode(listId.toString()) + '&Source=' + SP.Utilities.HttpUtility.urlKeyValueEncode(document.URL);
    SP.Utilities.HttpUtility.navigateTo(result);
}
Pub.Ribbon.PubCommands.variationsViewChangesEnabled = function Pub_Ribbon_PubCommands$variationsViewChangesEnabled() {
    return !!Pub.Ribbon.Externals.viewChangesPageVariation;
}
Pub.Ribbon.PubCommands.variationsViewChanges = function Pub_Ribbon_PubCommands$variationsViewChanges() {
    if (!Pub.Ribbon.PubCommands.variationsViewChangesEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.viewChangesPageVariation.url);
}
Pub.Ribbon.PubCommands.isVendorTranslationEnabled = function Pub_Ribbon_PubCommands$isVendorTranslationEnabled() {
    return !!Pub.Ribbon.Externals.isVendorTranslationEnabled && Pub.Ribbon.Externals.isVendorTranslationEnabled.enabled;
}
Pub.Ribbon.PubCommands.isMachineTranslationEnabled = function Pub_Ribbon_PubCommands$isMachineTranslationEnabled() {
    return !!Pub.Ribbon.Externals.isMachineTranslationEnabled && Pub.Ribbon.Externals.isMachineTranslationEnabled.enabled;
}
Pub.Ribbon.PubCommands.translationMachineTranslateEnabled = function Pub_Ribbon_PubCommands$translationMachineTranslateEnabled() {
    return Pub.Ribbon.PubCommands._doesUserHaveOverrideCheckoutPermissions$p() && !!Pub.Ribbon.Externals.machineTranslateTranslation;
}
Pub.Ribbon.PubCommands.translationMachineTranslate = function Pub_Ribbon_PubCommands$translationMachineTranslate() {
    if (!Pub.Ribbon.PubCommands.translationMachineTranslateEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.machineTranslateTranslation.url);
}
Pub.Ribbon.PubCommands.translationMachineTranslateInferEnabled = function Pub_Ribbon_PubCommands$translationMachineTranslateInferEnabled() {
    return !!Pub.Ribbon.Externals.machineTranslateTranslationInfer;
}
Pub.Ribbon.PubCommands.translationMachineTranslateInfer = function Pub_Ribbon_PubCommands$translationMachineTranslateInfer() {
    if (!Pub.Ribbon.PubCommands.translationMachineTranslateInferEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.machineTranslateTranslationInfer.url);
}
Pub.Ribbon.PubCommands.translationImportEnabled = function Pub_Ribbon_PubCommands$translationImportEnabled() {
    return !!Pub.Ribbon.Externals.importTranslation;
}
Pub.Ribbon.PubCommands.translationImport = function Pub_Ribbon_PubCommands$translationImport() {
    if (!Pub.Ribbon.PubCommands.translationImportEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.importTranslation.url);
}
Pub.Ribbon.PubCommands.translationExportInferEnabled = function Pub_Ribbon_PubCommands$translationExportInferEnabled() {
    return !!Pub.Ribbon.Externals.exportInferTranslation;
}
Pub.Ribbon.PubCommands.translationExportInfer = function Pub_Ribbon_PubCommands$translationExportInfer() {
    if (!Pub.Ribbon.PubCommands.translationExportInferEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.exportInferTranslation.url);
}
Pub.Ribbon.PubCommands.translationExportExplicitEnabled = function Pub_Ribbon_PubCommands$translationExportExplicitEnabled() {
    return Pub.Ribbon.PubCommands._doesUserHaveOverrideCheckoutPermissions$p() && (!!Pub.Ribbon.Externals.exportExplicitTranslation);
}
Pub.Ribbon.PubCommands.translationExportExplicit = function Pub_Ribbon_PubCommands$translationExportExplicit() {
    if (!Pub.Ribbon.PubCommands.translationExportExplicitEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.exportExplicitTranslation.url);
}
Pub.Ribbon.PubCommands.translationStatusDisplayEnabled = function Pub_Ribbon_PubCommands$translationStatusDisplayEnabled() {
    return !!Pub.Ribbon.Externals.displayTranslationStatus;
}
Pub.Ribbon.PubCommands.translationStatusDisplay = function Pub_Ribbon_PubCommands$translationStatusDisplay() {
    if (!Pub.Ribbon.PubCommands.translationStatusDisplayEnabled()) {
        return;
    }
    eval(Pub.Ribbon.Externals.displayTranslationStatus.url);
}
Pub.Ribbon.PubCommands._doesUserHaveOverrideCheckoutPermissions$p = function Pub_Ribbon_PubCommands$_doesUserHaveOverrideCheckoutPermissions$p() {
    if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo.pageItemId)) {
        return true;
    }
    else {
        var selectedItems = SP.ListOperation.Selection.getSelectedItems();
        var size = 0;
        var $$dict_2 = selectedItems;
        for (var $$key_3 in $$dict_2) {
            var de = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (!SP.ScriptUtility.isNullOrUndefined(de)) {
                size++;
            }
        }
        if (!size) {
            return false;
        }
        else if (size === 1) {
            return true;
        }
        else {
            return SP.PageContextInfo.get_webPermMasks().has(SP.PermissionKind.cancelCheckout);
        }
    }
}
Pub.Ribbon.PubCommands.translationModalDialog = function Pub_Ribbon_PubCommands$translationModalDialog(translationType, isMT, forceInfer) {
    var selectedItems = SP.ListOperation.Selection.getSelectedItems();
    var selectedItemIds = '';
    var isPage = false;
    if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo.pageItemId)) {
        isPage = true;
        selectedItemIds = '|' + window._spPageContextInfo.pageItemId.toString();
    }
    else {
        var $$dict_6 = selectedItems;
        for (var $$key_7 in $$dict_6) {
            var de = { key: $$key_7, value: $$dict_6[$$key_7] };
            selectedItemIds += '|' + de.value.id.toString();
        }
    }
    var queryString = '?type=' + translationType + '&isPage=' + isPage.toString() + '&ids=' + selectedItemIds + '&sourcelist=' + window._spPageContextInfo.pageListId.toString();
    if (isMT) {
        queryString += '&mt=1';
    }
    if (forceInfer) {
        queryString += '&infer=1';
    }
    else {
        queryString += '&infer=0';
    }
    var dialogOptions = new SP.UI.DialogOptions();
    dialogOptions.url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'TranslationImportExport.aspx') + queryString;
    dialogOptions.autoSizeStartWidth = 600;
    dialogOptions.autoSize = true;
    dialogOptions.showClose = false;
    dialogOptions.includeScrollBarPadding = false;
    dialogOptions.dialogReturnValueCallback = function(dlgResult, returnValue) {
        SP.UI.ModalDialog.RefreshPage(dlgResult);
    };
    SP.UI.ModalDialog.showModalDialog(dialogOptions);
}
Pub.Ribbon.PubCommands.executeCommandAppStateChanged = function Pub_Ribbon_PubCommands$executeCommandAppStateChanged() {
    var pageManager = SP.Ribbon.PageManager.get_instance();
    if (pageManager) {
        pageManager.get_commandDispatcher().executeCommand('appstatechanged', null);
    }
}
Pub.Ribbon.PubCommands.unpublishEnabled = function Pub_Ribbon_PubCommands$unpublishEnabled() {
    var isPublishedAndNotLocked = (!!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsMajorVersionStateName]) && (!SP.Ribbon.PageState.ImportedNativeData.PageState[Pub.Ribbon.PublishingPageStateStrings.itemIsLockedStateName]);
    var isPublishedAndLocked = (!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsMinorVersionStateName]) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState[Pub.Ribbon.PublishingPageStateStrings.itemIsLockedStateName]);
    if (!SP.Ribbon.PageState.Handlers.isInEditMode() && (!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsFormsPageStateName]) && (!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsScheduledStateName]) && (SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsInLibraryStateName]) && (SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.docLibMinorVersionsEnabledStateName]) && (SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.userHasApproverRightsStateName]) && (SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.userHasContributorRightsStateName]) && (SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.itemIsInSharedViewStateName]) && (isPublishedAndNotLocked || isPublishedAndLocked)) {
        return true;
    }
    return false;
}
Pub.Ribbon.PubCommands.notifyProgress = function Pub_Ribbon_PubCommands$notifyProgress(notificationResource) {
    addNotification('<img src=\'/_layouts/images/loadingcirclests16.gif\' style=\'vertical-align: middle\' />' + notificationResource, true);
}


Pub.Ribbon.PublishingPageStateStrings = function Pub_Ribbon_PublishingPageStateStrings() {
}


Pub.Ribbon.ManageCommandNames = function Pub_Ribbon_ManageCommandNames() {
}


Pub.Ribbon.ManageCommands = function Pub_Ribbon_ManageCommands() {
}
Pub.Ribbon.ManageCommands.pageStateDefined = function Pub_Ribbon_ManageCommands$pageStateDefined() {
    return (!!SP.Ribbon.PageState.ImportedNativeData) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState);
}
Pub.Ribbon.ManageCommands._buildLayoutPageUrl$p = function Pub_Ribbon_ManageCommands$_buildLayoutPageUrl$p(page, sb) {
    var strWeb = SP.PageContextInfo.get_webServerRelativeUrl();
    sb.append(strWeb);
    if (!strWeb.endsWith('/')) {
        sb.append('/');
    }
    sb.append(SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl());
    sb.append(page);
    sb.append('?');
    return;
}
Pub.Ribbon.ManageCommands._navigateToVersions$i = function Pub_Ribbon_ManageCommands$_navigateToVersions$i() {
    var sb = new Sys.StringBuilder();
    Pub.Ribbon.ManageCommands._buildLayoutPageUrl$p('versions.aspx', sb);
    sb.append('list=');
    sb.append(SP.PageContextInfo.get_pageListId());
    sb.append('&ID=');
    sb.append(SP.PageContextInfo.get_pageItemId().toString());
    SP.Utilities.HttpUtility.navigateTo(sb.toString());
}
Pub.Ribbon.ManageCommands._navigateToVersionDiff$i = function Pub_Ribbon_ManageCommands$_navigateToVersionDiff$i() {
    var sb = new Sys.StringBuilder();
    Pub.Ribbon.ManageCommands._buildLayoutPageUrl$p('VersionDiff.aspx', sb);
    sb.append('List=');
    sb.append(SP.PageContextInfo.get_pageListId());
    sb.append('&ID=');
    sb.append(SP.PageContextInfo.get_pageItemId().toString());
    SP.Utilities.HttpUtility.navigateTo(sb.toString());
}
Pub.Ribbon.ManageCommands.editPropertiesEnabled = function Pub_Ribbon_ManageCommands$editPropertiesEnabled() {
    return !!Pub.Ribbon.Externals.editProperties;
}
Pub.Ribbon.ManageCommands.editProperties = function Pub_Ribbon_ManageCommands$editProperties() {
    if (Pub.Ribbon.ManageCommands.editPropertiesEnabled()) {
        eval(Pub.Ribbon.Externals.editProperties.editPropertiesFn);
    }
}
Pub.Ribbon.ManageCommands.viewPropertiesEnabled = function Pub_Ribbon_ManageCommands$viewPropertiesEnabled() {
    return true;
}
Pub.Ribbon.ManageCommands.viewProperties = function Pub_Ribbon_ManageCommands$viewProperties() {
    if (Pub.Ribbon.ManageCommands.viewPropertiesEnabled()) {
        var formType = Pub.Ribbon.ManageCommands._pageTypeDisplayForm$i;
        var sb = new Sys.StringBuilder();
        Pub.Ribbon.ManageCommands._buildLayoutPageUrl$p('listform.aspx', sb);
        sb.append('PageType=');
        sb.append(formType.toString());
        sb.append('&ListId=');
        sb.append(SP.PageContextInfo.get_pageListId());
        sb.append('&ID=');
        sb.append(SP.PageContextInfo.get_pageItemId().toString());
        window.OpenPopUpPage(sb.toString());
    }
}
Pub.Ribbon.ManageCommands.permissionsEnabled = function Pub_Ribbon_ManageCommands$permissionsEnabled() {
    return Pub.Ribbon.ManageCommands.pageStateDefined() && (!!SP.Ribbon.PageState.ImportedNativeData.PageState[Pub.Ribbon.PublishingPageStateStrings.userHasEnumeratePermissionsRightsStateName]);
}
Pub.Ribbon.ManageCommands.permissions = function Pub_Ribbon_ManageCommands$permissions() {
    if (Pub.Ribbon.ManageCommands.permissionsEnabled()) {
        var sb = new Sys.StringBuilder();
        Pub.Ribbon.ManageCommands._buildLayoutPageUrl$p('user.aspx', sb);
        if (!SP.ScriptUtility.isNullOrUndefined(SP.PageContextInfo.get_pageListId()) && !SP.ScriptUtility.isNullOrUndefined(SP.PageContextInfo.get_pageItemId())) {
            sb.append('obj=');
            sb.append(SP.PageContextInfo.get_pageListId());
            sb.append(',');
            sb.append(SP.PageContextInfo.get_pageItemId().toString());
            sb.append(',');
            sb.append('LISTITEM&List=');
            sb.append(SP.PageContextInfo.get_pageListId());
        }
        SP.Utilities.HttpUtility.navigateTo(sb.toString());
    }
}
Pub.Ribbon.ManageCommands.versionCommandsEnabled = function Pub_Ribbon_ManageCommands$versionCommandsEnabled() {
    return Pub.Ribbon.ManageCommands.pageStateDefined() && (!!SP.Ribbon.PageState.ImportedNativeData.PageState[Pub.Ribbon.PublishingPageStateStrings.userHasViewVersionsRightsStateName]) && (!!SP.Ribbon.PageState.ImportedNativeData.PageState[SP.Ribbon.PageState.PageStateStrings.docLibVersioningEnabledStateName]);
}
Pub.Ribbon.ManageCommands.versionDiff = function Pub_Ribbon_ManageCommands$versionDiff() {
    if (Pub.Ribbon.ManageCommands.versionCommandsEnabled()) {
        Pub.Ribbon.ManageCommands._navigateToVersionDiff$i();
    }
}
Pub.Ribbon.ManageCommands.versionHistory = function Pub_Ribbon_ManageCommands$versionHistory() {
    if (Pub.Ribbon.ManageCommands.versionCommandsEnabled()) {
        Pub.Ribbon.ManageCommands._navigateToVersions$i();
    }
}


Pub.Ribbon.ManageImageRenditionsCommands = function Pub_Ribbon_ManageImageRenditionsCommands() {
}
Pub.Ribbon.ManageImageRenditionsCommands.isManageRenditionsLinkVisible = function Pub_Ribbon_ManageImageRenditionsCommands$isManageRenditionsLinkVisible(url) {
    var showLink = false;
    if (Pub.Ribbon.Externals.imageRenditionData && Pub.Ribbon.Externals.imageRenditionData.imageExtensions && url && url.length > 0) {
        var extension = Pub.Ribbon.ManageImageRenditionsCommands._getExtensionFromUrl$p(url);
        showLink = Pub.Ribbon.ManageImageRenditionsCommands._internalIsImageExtension$p(extension);
    }
    return showLink;
}
Pub.Ribbon.ManageImageRenditionsCommands.navigateToManageRenditions = function Pub_Ribbon_ManageImageRenditionsCommands$navigateToManageRenditions(imageUrl) {
    if (imageUrl) {
        Pub.Ribbon.ManageImageRenditionsCommands._internalNavigateToManageRenditions$p(imageUrl);
    }
}
Pub.Ribbon.ManageImageRenditionsCommands.showImageRenditionTab = function Pub_Ribbon_ManageImageRenditionsCommands$showImageRenditionTab() {
    if (Pub.Ribbon.Externals.imageRenditionData && Pub.Ribbon.Externals.imageRenditionData.imageExtensions) {
        var item = Pub.Ribbon.ManageImageRenditionsCommands._getSelectedItem$p();
        if (item && Pub.Ribbon.ManageImageRenditionsCommands._canUserEditElement$p()) {
            if (Pub.Ribbon.ManageImageRenditionsCommands._internalIsImageExtension$p(item.extension)) {
                Pub.Ribbon.ManageImageRenditionsCommands._showRibbonContextualGroup$p(Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroupId);
                return true;
            }
        }
    }
    Pub.Ribbon.ManageImageRenditionsCommands._hideRibbonContextualGroup$p(Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroupId);
    return false;
}
Pub.Ribbon.ManageImageRenditionsCommands._manageImageRenditions$i = function Pub_Ribbon_ManageImageRenditionsCommands$_manageImageRenditions$i() {
    if (Pub.Ribbon.Externals.imageRenditionData) {
        var item = Pub.Ribbon.ManageImageRenditionsCommands._getSelectedItem$p();
        if (item) {
            Pub.Ribbon.ManageImageRenditionsCommands._internalNavigateToManageRenditions$p(item.url);
        }
    }
}
Pub.Ribbon.ManageImageRenditionsCommands._internalIsImageExtension$p = function Pub_Ribbon_ManageImageRenditionsCommands$_internalIsImageExtension$p(extension) {
    if (extension && extension.length > 0) {
        extension = extension.toLowerCase();
        for (var j = 0; j < Pub.Ribbon.Externals.imageRenditionData.imageExtensions.length; j++) {
            if (Pub.Ribbon.Externals.imageRenditionData.imageExtensions[j].toLowerCase() === extension) {
                Pub.Ribbon.ManageImageRenditionsCommands._showRibbonContextualGroup$p(Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroupId);
                return true;
            }
        }
    }
    return false;
}
Pub.Ribbon.ManageImageRenditionsCommands._internalNavigateToManageRenditions$p = function Pub_Ribbon_ManageImageRenditionsCommands$_internalNavigateToManageRenditions$p(imageUrl) {
    var queryString = '?ImageUrl=' + SP.Utilities.HttpUtility.urlKeyValueEncode(imageUrl);
    var url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'ManageImageRenditions.aspx') + queryString;
    SP.Utilities.HttpUtility.appendSourceAndNavigateTo(url);
}
Pub.Ribbon.ManageImageRenditionsCommands._getSelectedItem$p = function Pub_Ribbon_ManageImageRenditionsCommands$_getSelectedItem$p() {
    var id = Pub.Ribbon.ManageImageRenditionsCommands._getSelectedItemId$p();
    if (!id) {
        return null;
    }
    var context = GetCurrentCtx();
    if (context) {
        if (context.ListData) {
            var rowData = context.ListData.Row;
            for (var i = 0; i < rowData.length; i++) {
                if (rowData[i].ID === id) {
                    var url = rowData[i].FileRef;
                    if (url) {
                        var info = new Pub.Ribbon._listItemInfo();
                        info.url = url;
                        info.extension = Pub.Ribbon.ManageImageRenditionsCommands._getExtensionFromUrl$p(url);
                        return info;
                    }
                }
            }
        }
        var ecbTable = $get(Pub.Ribbon.ManageImageRenditionsCommands._listItemMetadataTableId$p + context.ctxId);
        if (ecbTable) {
            var items = ecbTable.getElementsByTagName('DIV');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.id === id) {
                    var url = item.getAttribute('Url');
                    if (url) {
                        var info = new Pub.Ribbon._listItemInfo();
                        info.url = url;
                        info.extension = Pub.Ribbon.ManageImageRenditionsCommands._getExtensionFromUrl$p(url);
                        return info;
                    }
                }
            }
        }
    }
    return null;
}
Pub.Ribbon.ManageImageRenditionsCommands._getExtensionFromUrl$p = function Pub_Ribbon_ManageImageRenditionsCommands$_getExtensionFromUrl$p(url) {
    var dot = url.lastIndexOf('.');
    if (dot > 0) {
        return url.substr(dot + 1).toLowerCase();
    }
    return '';
}
Pub.Ribbon.ManageImageRenditionsCommands._getSelectedItemId$p = function Pub_Ribbon_ManageImageRenditionsCommands$_getSelectedItemId$p() {
    if (!SP.ListOperation || !SP.ListOperation.Selection) {
        return null;
    }
    var selectedItems = SP.ListOperation.Selection.getSelectedItems();
    var result = null;
    var $$dict_2 = selectedItems;
    for (var $$key_3 in $$dict_2) {
        var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (result) {
            result = null;
            break;
        }
        var item = entry.value;
        if (item) {
            result = item.id;
        }
    }
    return result;
}
Pub.Ribbon.ManageImageRenditionsCommands._canUserEditElement$p = function Pub_Ribbon_ManageImageRenditionsCommands$_canUserEditElement$p() {
    var canEdit = false;
    var manager = SP.Ribbon.PageManager.get_instance();
    if (manager) {
        canEdit = manager.get_commandDispatcher().isCommandEnabled(Pub.Ribbon.ManageImageRenditionsCommands._editPropertiesCommand$p);
    }
    return canEdit;
}
Pub.Ribbon.ManageImageRenditionsCommands._hideRibbonContextualGroup$p = function Pub_Ribbon_ManageImageRenditionsCommands$_hideRibbonContextualGroup$p(contextualGroup) {
    var pm = SP.Ribbon.PageManager.get_instance();
    if (pm) {
        var ribbon = pm.get_ribbon();
        if (ribbon) {
            try {
                ribbon.hideContextualGroup(contextualGroup);
            }
            catch ($$e_3) {
            }
        }
    }
}
Pub.Ribbon.ManageImageRenditionsCommands._showRibbonContextualGroup$p = function Pub_Ribbon_ManageImageRenditionsCommands$_showRibbonContextualGroup$p(contextualGroup) {
    var pm = SP.Ribbon.PageManager.get_instance();
    if (pm) {
        var ribbon = pm.get_ribbon();
        if (ribbon) {
            try {
                ribbon.showContextualGroup(contextualGroup);
            }
            catch ($$e_3) {
            }
        }
    }
}


Pub.Ribbon._listItemInfo.registerClass('Pub.Ribbon._listItemInfo');
Pub.Ribbon.PubRibbonComponent.registerClass('Pub.Ribbon.PubRibbonComponent', CUI.Page.PageComponent);
Pub.Ribbon._PSU.registerClass('Pub.Ribbon._PSU');
Pub.Ribbon._playerProperties.registerClass('Pub.Ribbon._playerProperties');
Pub.Ribbon.MediaCommandNames.registerClass('Pub.Ribbon.MediaCommandNames');
Pub.Ribbon.EmbedPropertyDefaults.registerClass('Pub.Ribbon.EmbedPropertyDefaults');
Pub.Ribbon.MediaCommands.registerClass('Pub.Ribbon.MediaCommands');
Pub.Ribbon.PubCommandNames.registerClass('Pub.Ribbon.PubCommandNames');
Pub.Ribbon.PubRibbonCommandNames.registerClass('Pub.Ribbon.PubRibbonCommandNames');
Pub.Ribbon.PubCommands.registerClass('Pub.Ribbon.PubCommands');
Pub.Ribbon.PublishingPageStateStrings.registerClass('Pub.Ribbon.PublishingPageStateStrings');
Pub.Ribbon.ManageCommandNames.registerClass('Pub.Ribbon.ManageCommandNames');
Pub.Ribbon.ManageCommands.registerClass('Pub.Ribbon.ManageCommands');
Pub.Ribbon.ManageImageRenditionsCommands.registerClass('Pub.Ribbon.ManageImageRenditionsCommands');
function sp_ui_pub_ribbon_initialize() {
Pub.Ribbon.PubRibbonComponent._pageLayoutUrls$p = [];
Pub.Ribbon.PubRibbonComponent._defaultDialogWidth$p = 300;
Pub.Ribbon.PubRibbonComponent._uploadExAspx$i = 'UploadEx.aspx';
Pub.Ribbon.PubRibbonComponent.instance = null;
Pub.Ribbon.PubRibbonComponent.focusedMediaPlayer = null;
Pub.Ribbon.PubRibbonComponent.switchToMediaTab = false;
Pub.Ribbon.PubRibbonComponent._windowClickDetectorInitialized$p = false;
Pub.Ribbon.PubRibbonComponent._initializedFieldName$p = 'initialized';
Pub.Ribbon.PubRibbonComponent._canSupportHtml5VideoInitialized$p = false;
Pub.Ribbon.PubRibbonComponent._canSupportHtml5Video$p = false;
Pub.Ribbon._PSU._emptyString$i = '';
Pub.Ribbon._playerProperties._mediaTitle$i = 'MediaTitle';
Pub.Ribbon._playerProperties._mediaSource$i = 'MediaSource';
Pub.Ribbon._playerProperties._inlineWidth$i = 'InlineWidth';
Pub.Ribbon._playerProperties._inlineHeight$i = 'InlineHeight';
Pub.Ribbon._playerProperties._previewImageSource$i = 'PreviewImageSource';
Pub.Ribbon.MediaCommandNames.mediaContextualTab = 'MediaContextualTab';
Pub.Ribbon.MediaCommandNames.optionsTab = 'MediaOptionsTab';
Pub.Ribbon.MediaCommandNames.mediaGroup = 'MediaGroupMedia';
Pub.Ribbon.MediaCommandNames.changeMedia = 'MediaChangeMedia';
Pub.Ribbon.MediaCommandNames.changeMediaMenu = 'MediaChangeMediaMenuOpen';
Pub.Ribbon.MediaCommandNames.changeMediaUpload = 'MediaChangeMediaUpload';
Pub.Ribbon.MediaCommandNames.changeMediaSharePoint = 'MediaChangeMediaSharePoint';
Pub.Ribbon.MediaCommandNames.changeMediaLink = 'MediaChangeMediaWeb';
Pub.Ribbon.MediaCommandNames.changeMediaRemove = 'MediaChangeMediaRemove';
Pub.Ribbon.MediaCommandNames.previewGroup = 'MediaGroupPreview';
Pub.Ribbon.MediaCommandNames.changePreview = 'MediaChangePreview';
Pub.Ribbon.MediaCommandNames.changePreviewMenu = 'MediaChangePreviewMenuOpen';
Pub.Ribbon.MediaCommandNames.changePreviewUpload = 'MediaChangePreviewUpload';
Pub.Ribbon.MediaCommandNames.changePreviewSharePoint = 'MediaChangePreviewSharePoint';
Pub.Ribbon.MediaCommandNames.changePreviewLink = 'MediaChangePreviewWeb';
Pub.Ribbon.MediaCommandNames.changePreviewRemove = 'MediaChangePreviewRemove';
Pub.Ribbon.MediaCommandNames.propertiesGroup = 'MediaGroupProperties';
Pub.Ribbon.MediaCommandNames.title = 'MediaTitle';
Pub.Ribbon.MediaCommandNames.queryTitle = 'QueryMediaTitle';
Pub.Ribbon.MediaCommandNames.autoPlay = 'MediaAutoPlay';
Pub.Ribbon.MediaCommandNames.queryAutoPlay = 'QueryMediaAutoPlay';
Pub.Ribbon.MediaCommandNames.loop = 'MediaLoop';
Pub.Ribbon.MediaCommandNames.queryLoop = 'QueryMediaLoop';
Pub.Ribbon.MediaCommandNames.stylesGroup = 'MediaGroupPlayerStyles';
Pub.Ribbon.MediaCommandNames.stylesMenu = 'MediaStylesMenu';
Pub.Ribbon.MediaCommandNames.queryStylesMenu = 'QueryMediaStylesMenu';
Pub.Ribbon.MediaCommandNames.changeStyle = 'MediaChangeStyle';
Pub.Ribbon.MediaCommandNames.queryChangeStyle = 'QueryMediaChangeStyle';
Pub.Ribbon.MediaCommandNames.sizeGroup = 'MediaGroupSize';
Pub.Ribbon.MediaCommandNames.width = 'MediaWidth';
Pub.Ribbon.MediaCommandNames.queryWidth = 'QueryMediaWidth';
Pub.Ribbon.MediaCommandNames.height = 'MediaHeight';
Pub.Ribbon.MediaCommandNames.queryHeight = 'QueryMediaHeight';
Pub.Ribbon.MediaCommandNames.lockRatio = 'MediaLockRatio';
Pub.Ribbon.MediaCommandNames.queryLockRatio = 'QueryMediaLockRatio';
Pub.Ribbon.MediaCommandNames.insertMediaWebPartZone = 'MediaInsertWebPartZone';
Pub.Ribbon.MediaCommandNames.insertMediaRichContent = 'MediaInsertRichContent';
Pub.Ribbon.MediaCommandNames.insertFromComputer = 'MediaInsertMediaUpload';
Pub.Ribbon.MediaCommandNames.insertFromAddress = 'MediaInsertMediaWeb';
Pub.Ribbon.MediaCommandNames.insertFromSharePoint = 'MediaInsertMediaSharePoint';
Pub.Ribbon.EmbedPropertyDefaults.pixelWidth = 540;
Pub.Ribbon.EmbedPropertyDefaults.pixelHeight = 303;
Pub.Ribbon.MediaCommands._waitDialogWidth$p = 290;
Pub.Ribbon.MediaCommands._waitDialogHeight$p = 76;
Pub.Ribbon.MediaCommands._lastActiveWebPartId$p = null;
Pub.Ribbon.PubCommandNames.schedule = 'Schedule';
Pub.Ribbon.PubCommandNames.changePageLayout = 'ChangePageLayout';
Pub.Ribbon.PubCommandNames.changePageLayoutMenu = 'ChangePageLayoutMenu';
Pub.Ribbon.PubCommandNames.queryChangePageLayout = 'QueryChangePageLayout';
Pub.Ribbon.PubCommandNames.quickDeploy = 'QuickDeploy';
Pub.Ribbon.PubCommandNames.variationsTab = 'VariationsTab';
Pub.Ribbon.PubCommandNames.variationsCreate = 'VariationsCreate';
Pub.Ribbon.PubCommandNames.variationsUpdate = 'VariationsUpdate';
Pub.Ribbon.PubCommandNames.variationsListUpdate = 'VariationsListUpdate';
Pub.Ribbon.PubCommandNames.variationsListSettingsView = 'VariationsListSettingsView';
Pub.Ribbon.PubCommandNames.variationsViewChanges = 'VariationsViewChanges';
Pub.Ribbon.PubCommandNames.variationsPullPage = 'VariationsPullPage';
Pub.Ribbon.PubCommandNames.variationsReconcileChanges = 'VariationsReconcileChanges';
Pub.Ribbon.PubCommandNames.preview = 'Preview';
Pub.Ribbon.PubCommandNames.previewDefaultChannel = 'PreviewDefaultChannel';
Pub.Ribbon.PubCommandNames.previewChannel = 'PreviewChannel';
Pub.Ribbon.PubCommandNames.reorderDeviceChannels = 'ReorderDeviceChannels';
Pub.Ribbon.PubCommandNames.checkForDraft = 'CheckForDraft';
Pub.Ribbon.PubCommandNames.queryCheckForDraft = 'QueryCheckForDraft';
Pub.Ribbon.PubCommandNames.startWorkflow = 'StartWorkflow';
Pub.Ribbon.PubCommandNames.workflowStatus = 'WorkflowStatus';
Pub.Ribbon.PubCommandNames.workflowTasks = 'WorkflowTasks';
Pub.Ribbon.PubCommandNames.isVendorTranslationEnabled = 'IsVendorTranslationEnabled';
Pub.Ribbon.PubCommandNames.isMachineTranslationEnabled = 'IsMachineTranslationEnabled';
Pub.Ribbon.PubCommandNames.translationMachineTranslate = 'TranslationMachineTranslate';
Pub.Ribbon.PubCommandNames.translationMachineTranslateInfer = 'TranslationMachineTranslateInfer';
Pub.Ribbon.PubCommandNames.translationImport = 'TranslationImport';
Pub.Ribbon.PubCommandNames.translationExportInfer = 'TranslationExportInfer';
Pub.Ribbon.PubCommandNames.translationExportExplicit = 'TranslationExportExplicit';
Pub.Ribbon.PubCommandNames.translationStatusDisplay = 'TranslationStatusDisplay';
Pub.Ribbon.PubCommandNames.manageImageRenditions = 'ManageImageRenditions';
Pub.Ribbon.PubCommandNames.createNewRollupHierarchy = 'CreateNewRollupHierarchy';
Pub.Ribbon.PubCommandNames.copySharedPage = 'CopySharedPage';
Pub.Ribbon.PubCommandNames.editTermProperties = 'EditTermProperties';
Pub.Ribbon.PubCommandNames.editPageUrls = 'EditPageUrls';
Pub.Ribbon.PubCommandNames.editSeoProperties = 'SEOPropertiesUsingDefault';
Pub.Ribbon.PubCommandNames.deleteFriendlyUrlPage = 'DeleteFriendlyUrlPage';
Pub.Ribbon.PubRibbonCommandNames.renditionsGroup = 'RenditionsGroup';
Pub.Ribbon.PubRibbonCommandNames.variationsGroup = 'VariationsGroup';
Pub.Ribbon.PubRibbonCommandNames.variationsListGroup = 'VariationsListGroup';
Pub.Ribbon.PubRibbonCommandNames.variationsContextualGroup = 'VariationsContextualGroup';
Pub.Ribbon.PubRibbonCommandNames.schedulingGroup = 'SchedulingGroup';
Pub.Ribbon.PubRibbonCommandNames.reviewGroup = 'ReviewGroup';
Pub.Ribbon.PubRibbonCommandNames.publishingGroup = 'PublishingGroup';
Pub.Ribbon.PubRibbonCommandNames.pageTab = 'WikiPageTab';
Pub.Ribbon.PubRibbonCommandNames.pubPageLayoutGroup = 'PubPageLayoutGroup';
Pub.Ribbon.PubRibbonCommandNames.getPageLayoutsXml = 'GetPageLayoutsXml';
Pub.Ribbon.PubRibbonCommandNames.pageActionsGroup = 'PageActionsGroup';
Pub.Ribbon.PubRibbonCommandNames.workflowGroup = 'WorkflowGroup';
Pub.Ribbon.PubRibbonCommandNames.pubPageActionsGroup = 'PubPageActionsGroup';
Pub.Ribbon.PubRibbonCommandNames.getPreviewableChannelsXml = 'GetPreviewableChannelsXml';
Pub.Ribbon.PubRibbonCommandNames.translationGroup = 'TranslationGroup';
Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroup = 'DocLibImageContextualGroup';
Pub.Ribbon.PubRibbonCommandNames.docLibImageContextualGroupId = 'Ribbon.DocLibImage';
Pub.Ribbon.PubRibbonCommandNames.docLibImageTab = 'DocLibImageTab';
Pub.Ribbon.PubRibbonCommandNames.imageRenditionsGroup = 'ImageRenditionsGroup';
Pub.Ribbon.PubCommands.isCheckForDraftOn = false;
Pub.Ribbon.PubCommands._variationsNotificationId$p = null;
Pub.Ribbon.PublishingPageStateStrings.userHasViewVersionsRightsStateName = 'UserHasViewVersionsRights';
Pub.Ribbon.PublishingPageStateStrings.userHasEnumeratePermissionsRightsStateName = 'UserHasEnumeratePermissionsRights';
Pub.Ribbon.PublishingPageStateStrings.itemIsLockedStateName = 'ItemIsLocked';
Pub.Ribbon.ManageCommandNames.editProperties = 'WikiEditProperties';
Pub.Ribbon.ManageCommandNames.viewProperties = 'WikiViewProperties';
Pub.Ribbon.ManageCommandNames.pagePropertiesMenuOpen = 'PagePropertiesMenuOpen';
Pub.Ribbon.ManageCommandNames.permissions = 'Permissions';
Pub.Ribbon.ManageCommandNames.versionDiff = 'VersionDiff';
Pub.Ribbon.ManageCommandNames.versionHistory = 'VersionHistory';
Pub.Ribbon.ManageCommandNames.versionsMenuOpen = 'VersionsMenuOpen';
Pub.Ribbon.ManageCommandNames.manageGroup = 'ManageGroup';
Pub.Ribbon.ManageCommands._pageTypeDisplayForm$i = 4;
Pub.Ribbon.ManageCommands._pageTypeEditForm$i = 6;
Pub.Ribbon.ManageImageRenditionsCommands._listItemMetadataTableId$p = 'ecbtab_ctx';
Pub.Ribbon.ManageImageRenditionsCommands._editPropertiesCommand$p = 'EditProperties';
};
sp_ui_pub_ribbon_initialize();

Pub.Ribbon.Imports = function SP_UI_Pub_Ribbon_Imports() {
}

Pub.Ribbon.Imports.pickUrlFromSharePoint = function Pub_Ribbon_Imports_pickUrlFromSharePoint(currentValue, mediaPick, callback) {
    EnsureScript('AssetPickers.js', typeof (AssetPickerConfig),
        function () {
            var assetPickerValue = document.createElement('input');
            assetPickerValue.type = 'hidden';
            assetPickerValue.id = 'mediaPlayerUrl';
            assetPickerValue.value = currentValue;
            document.body.appendChild(assetPickerValue);
            var configObj = new AssetPickerConfig('');
            configObj.ClientID = 'asset_picker'; 
            configObj.CurrentWebBaseUrl = SP.PageContextInfo.get_webServerRelativeUrl();
            configObj.AllowExternalUrls = true;
            configObj.ManageHyperlink = false;
            configObj.AssetUrlClientID = assetPickerValue.id;
            configObj.ReturnCallback = Pub.Ribbon.Imports.pickUrlFromSharePointCallback;
            if (mediaPick) {
                configObj.ReturnItemFields = 'Title,VideoWidthInPixels,VideoHeightInPixels,AlternateThumbnailUrl';
                configObj.APDExts = mediaPlayer.mediaExtensions;
                configObj.AssetType = "Media";
            }
            configObj.PickUrlCallback = callback;

            var assetObj = new ImageAsset(currentValue);
            assetObj.LaunchModalAssetPicker(configObj);
        });
}

Pub.Ribbon.Imports.pickUrlFromSharePointCallback = function Pub_Ribbon_Imports_pickUrlFromSharePointCallback(assetUrl, assetText, config, assetData) {
    config.PickUrlCallback(assetUrl, assetData);
}

ExecuteAndRegisterBeginEndFunctions("sp.ui.pub.ribbon.js",
    sp_ui_pub_ribbon_initialize, 
    null,
    function(){

        Pub.Ribbon.Externals = function Pub_Ribbon_Externals() {}

        if (typeof(scheduling) != "undefined") Pub.Ribbon.Externals.scheduling = scheduling;
        if (typeof(deviceChannelReordering) != "undefined") Pub.Ribbon.Externals.deviceChannelReordering = deviceChannelReordering;
        if (typeof(imageRenditionData) != "undefined") Pub.Ribbon.Externals.imageRenditionData = imageRenditionData;
        if (typeof(pageLayouts) != "undefined") Pub.Ribbon.Externals.pageLayouts = pageLayouts;
        if (typeof(createPageVariation) != "undefined") Pub.Ribbon.Externals.createPageVariation = createPageVariation;
        if (typeof(pullPageVariation) != "undefined") Pub.Ribbon.Externals.pullPageVariation = pullPageVariation;
        if (typeof(reconcileChangesVariation) != "undefined") Pub.Ribbon.Externals.reconcileChangesVariation = reconcileChangesVariation;
        if (typeof(updatePageVariation) != "undefined") Pub.Ribbon.Externals.updatePageVariation = updatePageVariation;
        if (typeof(viewChangesPageVariation) != "undefined") Pub.Ribbon.Externals.viewChangesPageVariation = viewChangesPageVariation;
        if (typeof(quickDeploy) != "undefined") Pub.Ribbon.Externals.quickDeploy = quickDeploy;
        if (typeof(preview) != "undefined") Pub.Ribbon.Externals.preview = preview;
        if (typeof(checkForDraft) != "undefined") Pub.Ribbon.Externals.checkForDraft = checkForDraft;
        if (typeof(startWorkflow) != "undefined") Pub.Ribbon.Externals.startWorkflow = startWorkflow;
        if (typeof(workflowStatus) != "undefined") Pub.Ribbon.Externals.workflowStatus = workflowStatus;
        if (typeof(workflowTasks) != "undefined") Pub.Ribbon.Externals.workflowTasks = workflowTasks;
        if (typeof(editProperties) != "undefined") Pub.Ribbon.Externals.editProperties = editProperties;
        if (typeof(isVendorTranslationEnabled) != "undefined") Pub.Ribbon.Externals.isVendorTranslationEnabled = isVendorTranslationEnabled;
        if (typeof(isMachineTranslationEnabled) != "undefined") Pub.Ribbon.Externals.isMachineTranslationEnabled = isMachineTranslationEnabled;
        if (typeof(machineTranslateTranslation) != "undefined") Pub.Ribbon.Externals.machineTranslateTranslation = machineTranslateTranslation;
        if (typeof(machineTranslateInferTranslation) != "undefined") Pub.Ribbon.Externals.machineTranslateTranslationInfer = machineTranslateInferTranslation;
        if (typeof(importTranslation) != "undefined") Pub.Ribbon.Externals.importTranslation = importTranslation;
        if (typeof(exportExplicitTranslation) != "undefined") Pub.Ribbon.Externals.exportExplicitTranslation = exportExplicitTranslation;
        if (typeof(exportInferTranslation) != "undefined") Pub.Ribbon.Externals.exportInferTranslation = exportInferTranslation;
        if (typeof(displayTranslationStatus) != "undefined") Pub.Ribbon.Externals.displayTranslationStatus = displayTranslationStatus;
        if (typeof(createNewRollupHierarchy) != "undefined") Pub.Ribbon.Externals.createNewRollupHierarchy = createNewRollupHierarchy;
        if (typeof(copySharedPage) != "undefined") Pub.Ribbon.Externals.copySharedPage = copySharedPage;
        if (typeof(editTermProperties) != "undefined") Pub.Ribbon.Externals.editTermProperties = editTermProperties;
        if (typeof(editPageUrls) != "undefined") Pub.Ribbon.Externals.editPageUrls = editPageUrls;
        if (typeof(editSeoProperties) != "undefined") Pub.Ribbon.Externals.editSeoProperties = editSeoProperties;
        if (typeof(deleteFriendlyUrlPage) != "undefined") Pub.Ribbon.Externals.deleteFriendlyUrlPage = deleteFriendlyUrlPage;

        ExecuteOrDelayUntilScriptLoaded(Pub.Ribbon.PubRibbonComponent.load, "sp.ribbon.js");

    });

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
    Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.pub.ribbon.js");

var g_bWarnBeforeLeave = true;
var g_bResourcesAlreadyChecked = false;

function EncodeForXmlText(value)
{
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;");
}

var g_UrlElements = ['a', 'area', 'base', 'bgsound', 'body', 'div', 'img', 'input', 'param', 'table', 'td', 'th', 'span'];

var l_ur_rfct, l_ur_wsurl, l_ur_formname, l_ur_fullreport, l_ur_recsready, l_ur_plsWait;

function GetSingleNamedNode(nodeCollection, name)
{
    if (!nodeCollection)
    {
        return null;
    }
    for (var i=0;i<nodeCollection.length;i++) 
    {
        var node = nodeCollection.item(i);
        if (node && node.nodeName == name)
        {
            return node;
        }
    }
    return null;
}

function GetNodeTextValue(node)
{
    if (node)
    {
        return node.firstChild.nodeValue;
    }
    return '';
}

function HideServerGeneratedMessage()
{
    var messageRow = document.getElementById('consoleErrorMessageRow');
    var messageSeparator=document.getElementById('consoleErrorMessageSeparator');
    if (messageRow && messageSeparator) 
    {
        messageRow.style.display='none';
        messageSeparator.style.display='none';
    }
}

var showUnapprovedXmlHttp;
var urlObjects, absoluteUrls, urlObjectTypes;

function ShowUnapprovedResourcesPage()
{
    window.status = l_chkResStatus;
    showConsoleMessage(l_ur_plsWait, false);
    var documentAll = document.getElementsByTagName('*');
    urlObjects = new Array(documentAll.length);
    absoluteUrls = new Array(documentAll.length);
    urlObjectTypes = new Array(documentAll.length);
    var urlObjectCount = 0;
    var soapParameters = "";
    var i;
    for (i = 0; i < documentAll.length; i++)
    {
        var currentElement = documentAll[i];
        var j;
        for (j = 0; j < g_UrlElements.length; j++)
        {
            if (currentElement.tagName.toLowerCase() == g_UrlElements[j].toLowerCase())
            {
                if (currentElement.src != undefined && currentElement.src != "") {
                    soapParameters += "<string>" + EncodeForXmlText(currentElement.src) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = currentElement.src;
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
                else if (currentElement.lowersrc != undefined && currentElement.lowersrc != "") {
                    soapParameters += "<string>" + EncodeForXmlText(currentElement.lowersrc) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = currentElement.lowersrc;
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
                else if (currentElement.href != undefined && currentElement.href != "") {
                    if (currentElement.href.split('#')[0].split('?')[0].toLowerCase() != document.URL.split('#')[0].split('?')[0].toLowerCase()) {
                        soapParameters += "<string>" + EncodeForXmlText(currentElement.href) + "</string>";
                        urlObjects[urlObjectCount] = currentElement;
                        absoluteUrls[urlObjectCount] = currentElement.href;
                        urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                        urlObjectCount++;
                    }
                }
                else if (currentElement.style.backgroundImage != undefined && currentElement.style.backgroundImage != "" && currentElement.style.backgroundImage.split(')').length > 1) {
                    var imageUrl = currentElement.style.backgroundImage.split('(')[1].split(')')[0];
                    soapParameters += "<string>" + EncodeForXmlText(imageUrl) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = imageUrl;
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
                else if (currentElement.datasrc != undefined && currentElement.datasrc != "") {
                    soapParameters += "<string>" + EncodeForXmlText(currentElement.datasrc) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = currentElement.datasrc;
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
                else if (currentElement.dynsrc != undefined && currentElement.dynsrc != "") {
                    soapParameters += "<string>" + EncodeForXmlText(currentElement.dynsrc) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = currentElement.dynsrc;
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
                else if (currentElement.tagName == "SPAN" && currentElement.id == l_ur_rfct && currentElement.getAttribute("fragmentid") != null && currentElement.getAttribute("fragmentid").length > 0) {
                    soapParameters += "<string>" + EncodeForXmlText(currentElement.getAttribute("fragmentid")) + "</string>";
                    urlObjects[urlObjectCount] = currentElement;
                    absoluteUrls[urlObjectCount] = currentElement.getAttribute("fragmentid");
                    urlObjectTypes[urlObjectCount] = g_UrlElements[j].toLowerCase();
                    urlObjectCount++;
                }
            }
        }
    }

    var e;
    try {
        showUnapprovedXmlHttp = new XMLHttpRequest();
    }
    catch(e) {
        try {
            showUnapprovedXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e) {
        }
    }
    showUnapprovedResourcesAborted = false;
    showUnapprovedXmlHttp.open("POST", escapeUrlForCallback(l_ur_wsurl), true);
    showUnapprovedXmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    showUnapprovedXmlHttp.setRequestHeader("SOAPAction", '"http://schemas.microsoft.com/sharepoint/soap/GetObjectStatusCollectionWithExclusions"');
    showUnapprovedXmlHttp.onreadystatechange = ShowUnapprovedResourcesPageResponse;
    showUnapprovedXmlHttp.send(
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '  <soap:Body>' +
        '    <GetObjectStatusCollectionWithExclusions xmlns="http://schemas.microsoft.com/sharepoint/soap/">' +
        '      <objectUrls>' +
        soapParameters +
        '      </objectUrls>' +
        '      <thisPageUrl>' + 
        document.URL.split('#')[0].split('?')[0].toLowerCase() + 
        '      </thisPageUrl>' + 
        '    </GetObjectStatusCollectionWithExclusions>' +
        '  </soap:Body>' +
        '</soap:Envelope>'
    );
}

var showUnapprovedResourcesAborted;
function ShowUnapprovedResourcesPageAbort()
{
    showUnapprovedResourcesAborted = true;
    showUnapprovedXmlHttp.abort();
    window.status = '';
}

function UniqueElementCounter ()
{
    this.set = {};
    this.count = 0;
}

UniqueElementCounter.prototype = {
    Add: function (element) {
        if (typeof(this.set[element]) == 'undefined')
        {
            this.set[element] = null;
            this.count++;
        }
    },
    Count: function () {
        return this.count;
    }
};

var draftItems = null;

function SetBorderToUrlObj (urlObj, styleObj, color)
{
    var originalValues = {
        element: urlObj,
        border: styleObj.border,
        margin: styleObj.margin
    };

    if (browseris.safari)
    {
        originalValues.cssText = styleObj.cssText;
    }

    var styleString = '; border: dashed ' + color + ' 2px !important; margin: 5px;';

    if (urlObj.nodeName != "IMG" && (urlObj.innerHTML == null || urlObj.innerHTML == ""))
    {
         styleString = styleString + " width: 18px; height: 18px;";

         originalValues.width = styleObj.width;
         originalValues.height = styleObj.height;
    }

    styleObj.cssText = styleObj.cssText + styleString;

    return originalValues;
}

function ShowUnapprovedResourcesPageResponse()
{
    if (showUnapprovedXmlHttp.readyState != 4
        || showUnapprovedResourcesAborted)
        return;

    xml = showUnapprovedXmlHttp.responseXML;

    if (   typeof('xml')                                                                != 'undefined'
        && typeof('xml.documentElement')                                                != 'undefined'
        && typeof('xml.documentElement.firstChild')                                     != 'undefined'
        && typeof('xml.documentElement.firstChild.firstChild')                          != 'undefined'
        && typeof('xml.documentElement.firstChild.firstChild.firstChild')               != 'undefined'
        && typeof('xml.documentElement.firstChild.firstChild.firstChild.childNodes')    != 'undefined') {
        nodes=xml.documentElement.firstChild.firstChild.firstChild.childNodes;
    }
    else {
        nodes = { length: 0 };
    }

    var allResourcesApproved = true;

    var unrecoverableFailure = false;
    var unrecoverableFailureMessage = '';
    if (nodes.length > 0) {
        var firstNodeChildren = nodes.item(0).childNodes;
        var firstNodeObjType = GetSingleNamedNode(firstNodeChildren, "ObjectType");
        if (GetNodeTextValue(firstNodeObjType).toLowerCase() == "unrecoverablefailure")
        {
            unrecoverableFailure = true;
            unrecoverableFailureMessage = GetNodeTextValue(GetSingleNamedNode(firstNodeChildren, "Description"));
        }
    }
    var draftItemCounter = new UniqueElementCounter();
    if (!unrecoverableFailure) {
        draftItems = new Array();
        for (i = 0; i < nodes.length; i++)
        {
            var currentNodeChildren = nodes.item(i).childNodes;

            var objectUrlNode = GetSingleNamedNode(currentNodeChildren, "PublishingUrl");
            if (objectUrlNode != undefined) 
            {
                var objectUrl = GetNodeTextValue(objectUrlNode);
                if (objectUrl != undefined && objectUrl != "") 
                {
                    lastMajor=GetSingleNamedNode(currentNodeChildren, "LastMajorVersion");
                    lastMinor=GetSingleNamedNode(currentNodeChildren, "LastMinorVersion");
                    objType=GetSingleNamedNode(currentNodeChildren, "ObjectType");
                    var url=GetSingleNamedNode(currentNodeChildren, "Url");
                    var majorValue=GetNodeTextValue(lastMajor);
                    var minorValue=GetNodeTextValue(lastMinor);
                    var objTypeValue=GetNodeTextValue(objType);
                    var urlValue=GetNodeTextValue(url);
                    var newNode = xml.createElement("MarkupType");
                    newNode.appendChild(xml.createTextNode(urlObjectTypes[i]));
                    nodes.item(i).appendChild(newNode);
                    var absoluteUrlNode = xml.createElement("AbsoluteUrl");
                    absoluteUrlNode.appendChild(xml.createTextNode(objectUrl));
                    nodes.item(i).appendChild(absoluteUrlNode);
                    if (objTypeValue.toLowerCase() != "undefined" && objTypeValue.toLowerCase() != "accessdenied")
                    {
                        var urlObj = urlObjects[i];
                        var styleObj;
                        if (urlObj.runtimeStyle) 
                        { 
                            styleObj = urlObj.runtimeStyle; 
                        }
                        else 
                        { 
                            styleObj = urlObj.style; 
                        }

						var originalStyleValues;
                        if (majorValue == "0")
                        {
                            originalStyleValues = SetBorderToUrlObj(urlObj, styleObj, 'red');

                            draftItems.push(originalStyleValues);

                            draftItemCounter.Add(urlValue);
                        }
                        else if (minorValue != "0" && (minorValue/majorValue) > 1)
                        {
                            originalStyleValues = SetBorderToUrlObj(urlObj, styleObj, 'orange');

                            draftItems.push(originalStyleValues);

                            draftItemCounter.Add(urlValue);
                        }
                        else if (urlObj.runtimeStyle)
                        {
                            urlObj.runtimeStyle.borderStyle = urlObj.style.borderStyle;
                            urlObj.runtimeStyle.borderWidth = urlObj.style.borderWidth;
                            urlObj.runtimeStyle.borderColor = urlObj.style.borderColor;
                            urlObj.runtimeStyle.margin = urlObj.style.margin;
                            if (urlObjectTypes[i]=="a")
                            {
                                urlObj.runtimeStyle.top=urlObj.style.top;
                                urlObj.runtimeStyle.left=urlObj.style.left;
                                urlObj.runtimeStyle.height=urlObj.style.height;
                            };
                        }
                    }
                }
            }
        }

        if (draftItemCounter.Count() > 0) {
            if (   typeof(RTE)              != 'undefined'
                && typeof(RTE.CanvasEvents) != 'undefined')
            {
                RTE.CanvasEvents.registerListener(RTE.CanvasEvents.transferEvent, preTransferContentsEventHandler);
            }

            document.forms[l_ur_formname]['MSOShowUnapproved_Xml'].value = xml.xml;
            g_ProcessedXml = xml;
            if (browseris.ie6up) {
                showConsoleMessage(l_ur_fullreport, true);
            } else {
                showConsoleMessage(l_ur_fullreportnors, true);
            }
        } else { 
            showConsoleMessage(l_ur_recsready, false);
        }

    } 
    else
    {
        showConsoleMessage(unrecoverableFailureMessage, true);
    }

    document.body.style.cursor = 'default';
    g_bResourcesAlreadyChecked = true;
    window.status = '';
}

function DraftOutlinesExist()
{
    return (draftItems != null) && (draftItems.length > 0);
}

var preTransferContentsEventHandler = function(sender, data){ RemoveDraftOutlines(); };

function RemoveDraftOutlines()
{
    if (   typeof(RTE)              != 'undefined'
        && typeof(RTE.CanvasEvents) != 'undefined')
    {
        RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.transferEvent, preTransferContentsEventHandler);
    }

    if (draftItems == null)
        return;

    for (i=0; i<draftItems.length; i++)
    {
        var originalValues = draftItems[i];
        var urlObj = originalValues.element;

        var styleObj;
        if (urlObj.runtimeStyle) 
        { 
            styleObj = urlObj.runtimeStyle; 
        }
        else 
        { 
            styleObj = urlObj.style; 
        }

        if (browseris.safari)
        {
            styleObj.cssText = originalValues.cssText;
        }
        else
        {
            styleObj.border = originalValues.border;
            styleObj.margin = originalValues.margin;
        }

        if (originalValues.width != undefined)
        {
            styleObj.width = originalValues.width;
        }

        if (originalValues.height != undefined)
        {
            styleObj.height = originalValues.height;
        }
    }

    draftItems = null;
}

var previousNotification = null;

function RemovePreviousConsoleMessageNotification ()
{
  if (previousNotification != null)
  {
    removeNotification(previousNotification);
    previousNotification = null;
  }
}

function showConsoleMessage(message, isWarningOrError)
{
  if (document.getElementById('consoleNegativeMessage') != null &&
      document.getElementById('consolePositiveMessage') != null) 
  {
    if (isWarningOrError)
    {
        document.getElementById('consoleNegativeMessage').innerHTML=message;
        document.getElementById('consoleNegativeMessageBar1').style.display='';
        document.getElementById('consoleNegativeMessageBar2').style.display='';
        document.getElementById('consolePositiveMessageBar1').style.display='none';
        document.getElementById('consolePositiveMessageBar2').style.display='none';
    }
    else
    {
        document.getElementById('consolePositiveMessage').innerHTML=message;
        document.getElementById('consolePositiveMessageBar1').style.display='';
        document.getElementById('consolePositiveMessageBar2').style.display='';
        document.getElementById('consoleNegativeMessageBar1').style.display='none';
        document.getElementById('consoleNegativeMessageBar2').style.display='none';
    }
  }
  else
  {
        RemovePreviousConsoleMessageNotification();

        var strHtml = '';

        if (isWarningOrError)
        {

            strHtml = "<img alt='";

            if (typeof(SP) != "undefined"
                && typeof(SP.Publishing) != "undefined"
                && typeof(SP.Publishing.Resources) != "undefined"
                && typeof(SP.Publishing.Resources.warningMessage) != "undefined")
            {
                strHtml += SP.Publishing.Resources.warningMessage;
            }
            strHtml += "' src='/_layouts/images/wppinval.gif'></img>" ;
        }
        else
        {
            strHtml = "<img alt='";

            if (typeof(SP) != "undefined"
                && typeof(SP.Publishing) != "undefined"
                && typeof(SP.Publishing.Resources) != "undefined"
                && typeof(SP.Publishing.Resources.informationalMessage) != "undefined")
            {
                strHtml += SP.Publishing.Resources.informationalMessage;
            }
            strHtml += "' src='/_layouts/images/check.gif'></img>";
        }
        strHtml += "&nbsp;" + message;

        previousNotification = addNotification(strHtml, true);
  }
}

function ShowConsoleBlockPadding(leftBackgroundTdId, rightBackgroundTdId)
{
    var leftBackgroundTd = document.getElementById(leftBackgroundTdId);
    var rightBackgroundTd = document.getElementById(rightBackgroundTdId);
    ShowHtmlElement(leftBackgroundTd, true);
    ShowHtmlElement(rightBackgroundTd, true);    
}

function ShowHtmlElement(element, makeVisible)
{
    if (element != null && element.style != null)
    {
        if (makeVisible) { element.style.display = ''; } else { element.style.display = 'none'; }
    }
}

function AddMPOverhang(leftOverhangId, rightOverhangId) {
    var leftOverhang = document.getElementById(leftOverhangId);
    var rightOverhang = document.getElementById(rightOverhangId);
    if (leftOverhang != null && leftOverhang.style != null) {
        leftOverhang.style.position = 'relative';
        leftOverhang.style.bottom = '-7px';
    }
    if (rightOverhang != null && rightOverhang.style != null) {
        rightOverhang.style.position = 'relative';
        rightOverhang.style.bottom = '-7px';
    }
}

function ShowConsoleBlockPaddingWithOverhang(leftBackgroundTdId, rightBackgroundTdId, leftOverhangId, rightOverhangId) 
{
    ShowConsoleBlockPadding(leftBackgroundTdId, rightBackgroundTdId);
    AddMPOverhang(leftOverhangId, rightOverhangId);
}

