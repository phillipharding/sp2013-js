
Type.registerNamespace('SP.UI.AssetLibrary');

SP.UI.AssetLibrary._assetLibraryTileViewRenderer = function SP_UI_AssetLibrary__assetLibraryTileViewRenderer(templateTypeID, baseViewID) {
    this.$$d__itemTemplateFn$p$2 = Function.createDelegate(this, this._itemTemplateFn$p$2);
    SP.UI.AssetLibrary._assetLibraryTileViewRenderer.initializeBase(this, [ templateTypeID, baseViewID ]);
}
SP.UI.AssetLibrary._assetLibraryTileViewRenderer.prototype = {
    
    onCreateRenderingContextOverrides: function SP_UI_AssetLibrary__assetLibraryTileViewRenderer$onCreateRenderingContextOverrides(context) {
        if (null !== context) {
            context.Templates['Item'] = this.$$d__itemTemplateFn$p$2;
            AddPostRenderCallback(context, SP.UI.TileView.TileViewRenderer.hideSelectAllItemsCbxAndTH);
        }
    },
    
    _itemTemplateFn$p$2: function SP_UI_AssetLibrary__assetLibraryTileViewRenderer$_itemTemplateFn$p$2(context) {
        if (!context) {
            return '';
        }
        var item = context.CurrentItem;
        if (!item) {
            return '';
        }
        var id = item[SP.UI.AssetLibrary._constants._fieldNames.id];
        var title = STSHtmlEncode(SP.UI.TileView.Utilities.getItemNameOrTitle(item));
        var thumbnailUrl = SP.UI.TileView.TileViewRenderer.getPreviewImageUrl(context, item);
        var thumbnailWidth = item[SP.UI.AssetLibrary._constants._fieldNames.imageWidth];
        var thumbnailHeight = item[SP.UI.AssetLibrary._constants._fieldNames.imageHeight];
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(thumbnailWidth)) {
            thumbnailWidth = item[SP.UI.AssetLibrary._constants._fieldNames.videoWidth];
        }
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(thumbnailHeight)) {
            thumbnailHeight = item[SP.UI.AssetLibrary._constants._fieldNames.videoHeight];
        }
        var tile = new SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer(context, id, title, thumbnailUrl, thumbnailWidth, thumbnailHeight);
        tile.set_renderSelectionControlForTabular(true);
        return tile.render();
    }
}


SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer = function SP_UI_AssetLibrary__assetLibraryTileViewRenderer__assetLibraryTileRenderer(context, id, title, imageUrl, imageWidth, imageHeight) {
    this._listSchemaNameToIndexMap$p$2 = {};
    SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer.initializeBase(this, [ context, id, SP.UI.TileView.TileSize.medium, title, imageUrl, imageWidth, imageHeight ]);
}
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p = function SP_UI_AssetLibrary__assetLibraryTileViewRenderer__assetLibraryTileRenderer$_getOverlayDetailLine$p(data) {
    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(data)) {
        return '<div>' + data + '</div>';
    }
    return '';
}
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getFormattedTimeFromSeconds$p = function SP_UI_AssetLibrary__assetLibraryTileViewRenderer__assetLibraryTileRenderer$_getFormattedTimeFromSeconds$p(secondsStr) {
    var totalSeconds = parseInt(secondsStr);
    if (!isNaN(totalSeconds)) {
        var hours = Math.floor(totalSeconds / SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInHour$p);
        var minutes = Math.floor((totalSeconds - hours * SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInHour$p) / SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInMinute$p);
        var seconds = totalSeconds - (hours * SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInHour$p + minutes * SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInMinute$p);
        return String.format('{0}{1}{2}:{3}{4}', (hours < 1) ? '' : String.format('{0}{1}:', (hours < 10) ? '0' : '', hours.toString()), (minutes < 10) ? '0' : '', minutes.toString(), (seconds < 10) ? '0' : '', seconds.toString());
    }
    return secondsStr;
}
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer.prototype = {
    
    get_tileDescription: function SP_UI_AssetLibrary__assetLibraryTileViewRenderer__assetLibraryTileRenderer$get_tileDescription() {
        var detailsContents = '';
        var isItemAnImage = true;
        var contentTypeId = (this.item[SP.UI.AssetLibrary._constants._fieldNames.contentTypeId]);
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(contentTypeId)) {
            contentTypeId = contentTypeId.toLowerCase();
            isItemAnImage = contentTypeId.startsWith(SP.UI.AssetLibrary._constants.contentTypeIdImage.toLowerCase());
        }
        if (isItemAnImage) {
            var isImageDimensionsPresent = this._getFieldIndexInListSchema$p$2(this.context.ListSchema, SP.UI.AssetLibrary._constants._fieldNames.imageDimensions) >= 0;
            var imageDimensions = null;
            if (isImageDimensionsPresent) {
                imageDimensions = spMgr.RenderFieldByName(this.context, SP.UI.AssetLibrary._constants._fieldNames.imageDimensions, this.item, this.context.ListSchema);
            }
            EnsureFileLeafRefSuffix(this.item);
            var fileExtension = (this.item[SP.UI.AssetLibrary._constants._fieldNames.fileExtension]);
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(fileExtension)) {
                var fileInfoToAdd = STSHtmlEncode(fileExtension.toUpperCase());
                if (isImageDimensionsPresent) {
                    fileInfoToAdd += '&nbsp;' + imageDimensions;
                }
                detailsContents += SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p(fileInfoToAdd);
            }
            else if (isImageDimensionsPresent) {
                detailsContents += SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p(imageDimensions);
            }
            var isImageFileSizePresent = this._getFieldIndexInListSchema$p$2(this.context.ListSchema, SP.UI.AssetLibrary._constants._fieldNames.fileSize) >= 0;
            if (isImageFileSizePresent) {
                var fileSize = spMgr.RenderFieldByName(this.context, SP.UI.AssetLibrary._constants._fieldNames.fileSize, this.item, this.context.ListSchema);
                detailsContents += SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p(fileSize);
            }
        }
        else {
            var contentTypeName = this.item[SP.UI.AssetLibrary._constants._fieldNames.contentType];
            var isContentTypeNamePresent = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(contentTypeName);
            if (isContentTypeNamePresent) {
                detailsContents += SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p(contentTypeName);
            }
            var mediaLenghValue = this.item[SP.UI.AssetLibrary._constants._fieldNames.mediaLengthInSeconds];
            var isMediaLengthPresent = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(mediaLenghValue);
            if (isMediaLengthPresent) {
                detailsContents += SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getOverlayDetailLine$p(String.format(Strings.CMS.L_AssetLibraryDetailDuration, SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._getFormattedTimeFromSeconds$p(mediaLenghValue)));
            }
        }
        var loadMediaPlayer = (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(contentTypeId) && contentTypeId.startsWith(SP.UI.AssetLibrary._constants.contentTypeIdVideo.toLowerCase())) || APD_IsFileSupportedByMediaPlayer(this.item[SP.UI.AssetLibrary._constants._fieldNames.filePath]);
        if (loadMediaPlayer) {
            EnsureScriptFunc(SP.UI.AssetLibrary._constants.mediaPlayerJsFileName, 'mediaplayer', null);
        }
        return detailsContents;
    },
    
    _getFieldIndexInListSchema$p$2: function SP_UI_AssetLibrary__assetLibraryTileViewRenderer__assetLibraryTileRenderer$_getFieldIndexInListSchema$p$2(listSchema, fieldName) {
        var lowerCaseFieldName = fieldName.toLowerCase();
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this._listSchemaNameToIndexMap$p$2[lowerCaseFieldName])) {
            return this._listSchemaNameToIndexMap$p$2[lowerCaseFieldName];
        }
        var index = -1;
        for (var i = 0; i < listSchema.Field.length; i++) {
            var field = listSchema.Field[i];
            if (field.Name.toLowerCase() === lowerCaseFieldName) {
                index = i;
                break;
            }
        }
        this._listSchemaNameToIndexMap$p$2[lowerCaseFieldName] = index;
        return index;
    }
}


SP.UI.AssetLibrary._constants = function SP_UI_AssetLibrary__constants() {
}


SP.UI.AssetLibrary._constants._fieldNames = function SP_UI_AssetLibrary__constants__fieldNames() {
}


SP.UI.AssetLibrary.GlobalTemplateOverrides = function SP_UI_AssetLibrary_GlobalTemplateOverrides() {
}
SP.UI.AssetLibrary.GlobalTemplateOverrides.$$cctor = function SP_UI_AssetLibrary_GlobalTemplateOverrides$$$cctor() {
    var assetLibRenderer = new SP.UI.AssetLibrary._assetLibraryTileViewRenderer(SP.UI.AssetLibrary._constants.assetLibraryTemplateType, SP.UI.AssetLibrary._constants.assetLibraryBaseViewID);
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(assetLibRenderer.createRenderingContextOverrides());
}


SP.UI.AssetLibrary._assetLibraryTileViewRenderer.registerClass('SP.UI.AssetLibrary._assetLibraryTileViewRenderer', SP.UI.TileView.TabularTileViewRenderer);
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer.registerClass('SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer', SP.UI.TileView.TabularTileRenderer);
SP.UI.AssetLibrary._constants.registerClass('SP.UI.AssetLibrary._constants');
SP.UI.AssetLibrary._constants._fieldNames.registerClass('SP.UI.AssetLibrary._constants._fieldNames');
SP.UI.AssetLibrary.GlobalTemplateOverrides.registerClass('SP.UI.AssetLibrary.GlobalTemplateOverrides');
function sp_ui_assetlibrary_initialize() {
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInHour$p = 60 * 60;
SP.UI.AssetLibrary._assetLibraryTileViewRenderer._assetLibraryTileRenderer._secondsInMinute$p = 60;
SP.UI.AssetLibrary._constants.assetLibraryTemplateType = 851;
SP.UI.AssetLibrary._constants.assetLibraryBaseViewID = 40;
SP.UI.AssetLibrary._constants.contentTypeIdImage = '0x0101009148F5A04DDD49cbA7127AADA5FB792B00AADE34325A8B49cdA8BB4DB53328F214';
SP.UI.AssetLibrary._constants.contentTypeIdAudio = '0x0101009148F5A04DDD49cbA7127AADA5FB792B006973ACD696DC4858A76371B2FB2F439A';
SP.UI.AssetLibrary._constants.contentTypeIdVideo = '0x0120D520A808';
SP.UI.AssetLibrary._constants.mediaPlayerJsFileName = 'mediaplayer.js';
SP.UI.AssetLibrary._constants.mediaPlayerJsFilePath = '/' + '_layouts/15/mediaplayer.js';
SP.UI.AssetLibrary._constants.analyticsJsFileName = 'sp.search.apps.js';
SP.UI.AssetLibrary._constants.analyticsJsFilePath = '/' + '_layouts/15/sp.search.apps.js';
SP.UI.AssetLibrary._constants._fieldNames.id = 'ID';
SP.UI.AssetLibrary._constants._fieldNames.contentType = 'ContentType';
SP.UI.AssetLibrary._constants._fieldNames.contentTypeId = 'ContentTypeId';
SP.UI.AssetLibrary._constants._fieldNames.fileExtension = 'FileLeafRef.Suffix';
SP.UI.AssetLibrary._constants._fieldNames.fileSize = 'FileSizeDisplay';
SP.UI.AssetLibrary._constants._fieldNames.filePath = 'FileRef';
SP.UI.AssetLibrary._constants._fieldNames.fileDirectory = 'FileDirRef';
SP.UI.AssetLibrary._constants._fieldNames.fileObjectType = 'FSObjType';
SP.UI.AssetLibrary._constants._fieldNames.imageDimensions = 'ImageSize';
SP.UI.AssetLibrary._constants._fieldNames.imageWidth = 'ImageWidth';
SP.UI.AssetLibrary._constants._fieldNames.imageHeight = 'ImageHeight';
SP.UI.AssetLibrary._constants._fieldNames.videoWidth = 'VideoWidthInPixels';
SP.UI.AssetLibrary._constants._fieldNames.videoHeight = 'VideoHeightInPixels';
SP.UI.AssetLibrary._constants._fieldNames.mediaLengthInSeconds = 'MediaLengthInSeconds';
SP.UI.AssetLibrary.GlobalTemplateOverrides.$$cctor();
};
sp_ui_assetlibrary_initialize();

RegisterModuleInit("SP.UI.AssetLibrary.js", sp_ui_assetlibrary_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.AssetLibrary.js");
