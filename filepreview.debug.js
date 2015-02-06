function $_global_filepreview() {
    RegisterSod("mediaplayer.js", "/_layouts/15/mediaplayer.js");
    RegisterSod("sp.publishing.resources.resx", "/_layouts/15/ScriptResx.ashx?name=sp.publishing.resources&culture=" + STSHtmlEncode(Strings.STS.L_CurrentUICulture_Name));
    RegisterSodDep("mediaplayer.js", "sp.publishing.resources.resx");
    previewBase = (function() {
    ULS7RK:
        ;
        var filePreviewUniqueId = 0;

        return {
            init: function(ctxT, listItem, extension) {
                this.fpId = ++filePreviewUniqueId;
                this.fpDomId = "FilePreviewID-" + String(this.fpId);
                this.fpCtx = ctxT;
                this.fpExtension = extension;
                this.fpListItem = listItem;
            },
            getHtml: function() {
            ULS7RK:
                ;
                return ['<div class="js-filePreview-containingElement" id=', StAttrQuote(this.fpDomId), '>', this.getInnerHtml(), '</div>'].join("");
            },
            getDomId: function() {
            ULS7RK:
                ;
                return this.fpDomId;
            },
            getContainingElement: function() {
            ULS7RK:
                ;
                var containingElement = document.getElementById(this.fpDomId);

                Sys.Debug.assert(m$.isElement(containingElement), "Containing element has not been rendered yet.");
                return containingElement;
            },
            canRender: function() {
            ULS7RK:
                ;
                return true;
            },
            getLoadingIndicatorHtml: function(customStyle) {
                if (m$.isUndefined(customStyle)) {
                    customStyle = "";
                }
                return ['<div class="js-filePreview-loading-image" style="width:', this.getWidth(), 'px; height:', this.getHeight(), 'px; line-height:', this.getHeight(), 'px; text-align:center; vertical-align:middle; display: inline-block; ' + customStyle + '">', '<img src="', "/_layouts/15/images/loading.gif?rev=23", '" />', '</div>'].join("");
            },
            hideLoadingIndicator: function() {
            ULS7RK:
                ;
                var containingElement = document.getElementById(this.fpDomId);

                ((m$(containingElement)).find("div.js-filePreview-loading-image")).css({
                    display: "none"
                });
            },
            getInnerHtml: function() {
            ULS7RK:
                ;
                return "";
            },
            getWidth: function() {
            ULS7RK:
                ;
                return null;
            },
            getHeight: function() {
            ULS7RK:
                ;
                return null;
            },
            onPostRender: function() {
            },
            onVisible: function() {
            },
            onHidden: function() {
            }
        };
    })();
    blankPreview = Object.create(previewBase);
    blankPreview.type = "blankPreview";
    blankPreview.getHtml = function() {
    ULS7RK:
        ;
        return "";
    };
    embeddedWACPreview = Object.create(previewBase);
    embeddedWACPreview.type = "embeddedWACPreview";
    embeddedWACPreview.dimensions = {
        docx: {
            width: 379,
            height: 252
        },
        docm: {
            width: 379,
            height: 252
        },
        dotx: {
            width: 379,
            height: 252
        },
        dot: {
            width: 379,
            height: 252
        },
        doc: {
            width: 379,
            height: 252
        },
        odt: {
            width: 379,
            height: 252
        },
        pptx: {
            width: 350,
            height: 221
        },
        potx: {
            width: 350,
            height: 221
        },
        ppt: {
            width: 350,
            height: 221
        },
        pot: {
            width: 350,
            height: 221
        },
        potm: {
            width: 350,
            height: 221
        },
        pptm: {
            width: 350,
            height: 221
        },
        ppsx: {
            width: 350,
            height: 221
        },
        pps: {
            width: 350,
            height: 221
        },
        ppsm: {
            width: 350,
            height: 221
        },
        odp: {
            width: 350,
            height: 221
        },
        xlsx: {
            width: 352,
            height: 237
        },
        xlsb: {
            width: 352,
            height: 237
        },
        xlsm: {
            width: 352,
            height: 237
        }
    };
    embeddedWACPreview.getWidth = function() {
    ULS7RK:
        ;
        return this.dimensions[this.fpExtension].width;
    };
    embeddedWACPreview.getHeight = function() {
    ULS7RK:
        ;
        return this.dimensions[this.fpExtension].height;
    };
    embeddedWACPreview.getInnerHtml = function() {
    ULS7RK:
        ;
        return this.getLoadingIndicatorHtml();
    };
    embeddedWACPreview.canRender = function() {
    ULS7RK:
        ;
        var manualOverride = getWACManualOverride();
        var isEmbeddedWACPreviewEnabled = m$.isNotNull(manualOverride) ? manualOverride : !this.fpCtx.DocumentLibraryCalloutOfficeWebAppPreviewersDisabled;

        return isEmbeddedWACPreviewEnabled && m$.isDefined(this.dimensions[this.fpExtension]) && m$.isDefinedAndNotNull(this.fpListItem.ServerRedirectedEmbedUrl) && this.fpListItem.ServerRedirectedEmbedUrl !== "";
    };
    embeddedWACPreview.onVisible = function() {
    ULS7RK:
        ;
        var serverRedirectedEmbedUrl = this.fpListItem.ServerRedirectedEmbedUrl + "&wdSmallView=1";
        var width = String(this.getWidth()) + "px";
        var height = String(this.getHeight()) + "px";
        var embeddedViewerHtml = [];

        embeddedViewerHtml.push('<div class="js-frame-wrapper" style="line-height:0" >');
        embeddedViewerHtml.push('  <iframe style="width:' + width + '; height:' + height + ';"');
        embeddedViewerHtml.push('    src=' + StAttrQuote(serverRedirectedEmbedUrl));
        embeddedViewerHtml.push('    frameborder="0"');
        embeddedViewerHtml.push('  ></iframe>');
        embeddedViewerHtml.push('</div>');
        var containingElement = this.getContainingElement();

        containingElement.innerHTML = embeddedViewerHtml.join('');
    };
    WACImagePreview = Object.create(previewBase);
    WACImagePreview.type = "WACImagePreview";
    WACImagePreview.canRender = function() {
    ULS7RK:
        ;
        return false;
    };
    folderPreview = Object.create(previewBase);
    folderPreview.type = "folderPreview";
    folderPreview.canRender = function() {
    ULS7RK:
        ;
        return m$.isDefinedAndNotNull(this.fpListItem.FileLeafRef) && m$.isDefinedAndNotNull(this.fpListItem.FSObjType) && m$.isDefinedAndNotNull(this.fpListItem.ID) && m$.isDefinedAndNotNull(this.fpCtx.listName);
    };
    folderPreview.getFolderSource = function() {
    ULS7RK:
        ;
        return this.fpCtx.imagesPath + "skydrive_folder.png";
    };
    folderPreview.getWidth = function() {
    ULS7RK:
        ;
        return 213;
    };
    folderPreview.getHeight = function() {
    ULS7RK:
        ;
        return 128;
    };
    folderPreview.getInnerHtml = function() {
    ULS7RK:
        ;
        var folderHtml = [];

        folderHtml.push('<div style="position:relative; display: inline-block" class="js-folder-preview-wrapper" width="', this.getWidth(), '" height="', this.getHeight(), '">');
        folderHtml.push('  <img class="js-documentIcon" width="', this.getWidth(), '" height="', this.getHeight(), '"');
        folderHtml.push('    border="0" ');
        folderHtml.push('    alt="' + this.fpListItem.FileLeafRef + '"');
        folderHtml.push('    title="' + this.fpListItem.FileLeafRef + '"');
        folderHtml.push('    src="' + this.getFolderSource() + '"');
        folderHtml.push('    style="display: inline"');
        folderHtml.push('  />');
        folderHtml.push('  <span class="js-folder-preview-count"></span>');
        folderHtml.push(this.getLoadingIndicatorHtml("position: absolute; left: 0; top: 0;"));
        folderHtml.push('</div>');
        return folderHtml.join('');
    };
    folderPreview.onVisible = function() {
    ULS7RK:
        ;
        var containingElement = this.getContainingElement();
        var cctx = SP.ClientContext.get_current();
        var list = ((cctx.get_web()).get_lists()).getById(this.fpCtx.listName);
        var listItem = list.getItemById(this.fpListItem.ID);
        var folder = listItem.get_folder();
        var onSucceeded = m$.proxy(function(sender, args) {
        ULS7RK:
            ;
            this.hideLoadingIndicator();
            var count = folder.get_itemCount();
            var countElement = (m$(containingElement)).find("span.js-folder-preview-count");

            countElement.append(document.createTextNode(count));
        }, this);
        var onFailed = m$.proxy(function(sender, args) {
        ULS7RK:
            ;
            this.hideLoadingIndicator();
            Sys.Debug.assert(false, "CSOM query to retrieve folder's item count failed.");
        }, this);

        cctx.load(list);
        cctx.load(listItem);
        cctx.load(folder, 'ItemCount');
        cctx.executeQueryAsync(onSucceeded, onFailed);
    };
    mediaPreview = Object.create(previewBase);
    mediaPreview.type = "mediaPreview";
    mediaPreview.getWidth = function() {
    ULS7RK:
        ;
        return 350;
    };
    mediaPreview.getHeight = function() {
    ULS7RK:
        ;
        return 197;
    };
    mediaPreview.canRender = function() {
    ULS7RK:
        ;
        var isFireFoxOrChrome = browseris.firefox || browseris.chrome;
        var isOGGorOGVorWEBM = this.fpExtension === "ogg" || this.fpExtension === "ogv" || this.fpExtension === "webm";
        var isIE9andWAV = browseris.ie9standardUp && this.fpExtension === "wav";

        return (browseris.firefox || this.fpExtension !== "oga") && (isFireFoxOrChrome || !isOGGorOGVorWEBM) && !isIE9andWAV;
    };
    mediaPreview.getPlayerId = function() {
    ULS7RK:
        ;
        return this.getDomId() + "-MediaPlayer";
    };
    mediaPreview.getMediaPlayer = function() {
    ULS7RK:
        ;
        return document.getElementById(this.getPlayerId());
    };
    mediaPreview.getInnerHtml = function() {
    ULS7RK:
        ;
        return this.getLoadingIndicatorHtml();
    };
    mediaPreview.onVisible = function() {
    ULS7RK:
        ;
        var that = this;
        var containingElement = this.getContainingElement();
        var listItem = this.fpCtx.CurrentItem;
        var uri = new URI(this.fpCtx.HttpRoot);
        var hostname = uri.getScheme() + "://" + uri.getAuthority();
        var mediaSource = hostname + listItem.FileRef;

        EnsureScript("mediaplayer.js", typeof mediaPlayer, function() {
        ULS7RK:
            ;
            if (!(m$(":root")).contains(containingElement))
                return;
            mediaPlayer.ensureCssIsIncluded(that.fpCtx.CurrentLanguage);
            containingElement.style.width = that.getWidth() + "px";
            containingElement.style.height = that.getHeight() + "px";
            var previewImage;

            if (mediaPlayer.isVideoFileExtension(that.fpExtension)) {
                previewImage = that.fpCtx.imagesPath + "videopreview.png";
            }
            else {
                previewImage = that.fpCtx.imagesPath + "audiopreview.png";
            }
            var playerParams = {
                mediaSource: mediaSource,
                previewImageSource: previewImage,
                embedModePreview: true,
                mediaFileExtension: that.fpExtension
            };

            that.hideLoadingIndicator();
            mediaPlayer.createMediaPlayer(containingElement, that.getPlayerId(), that.getWidth() + "px", that.getHeight() + "px", playerParams, null);
            var clearDiv = document.createElement("div");

            clearDiv.style.clear = "both";
            containingElement.appendChild(clearDiv);
        });
    };
    mediaPreview.onHidden = function() {
    ULS7RK:
        ;
        var that = this;

        EnsureScript("mediaplayer.js", typeof mediaPlayer, function() {
        ULS7RK:
            ;
            mediaPlayer.performPlayBackAction(that.getMediaPlayer(), mediaPlayer.playBackActionNames.Stop);
        });
    };
    imagePreview = Object.create(previewBase);
    imagePreview.type = "imagePreview";
    imagePreview.getWidth = function() {
    ULS7RK:
        ;
        return 350;
    };
    imagePreview.getHeight = function() {
    ULS7RK:
        ;
        return 250;
    };
    imagePreview.canRender = function() {
    ULS7RK:
        ;
        return m$.isDefinedAndNotNull(this.fpListItem.FileLeafRef) && m$.isDefinedAndNotNull(this.fpListItem.FSObjType) && m$.isDefinedAndNotNull(this.fpListItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapico"]) && this.fpListItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapico"] !== '' && !(browseris.ie8standard && this.fpExtension === "svg");
    };
    imagePreview.getInnerHtml = function() {
    ULS7RK:
        ;
        var imageHtml = [];

        imageHtml.push('<img');
        imageHtml.push(' alt="' + this.fpListItem.FileLeafRef + '"');
        imageHtml.push(' title="' + this.fpListItem.FileLeafRef + '"');
        imageHtml.push(' src="' + this.fpListItem.FileRef + '"');
        imageHtml.push(' style="max-width: ' + String(350) + 'px; max-height: ' + String(250) + 'px; min-height: ' + String(50) + 'px"');
        imageHtml.push(' onload="(event.srcElement ? event.srcElement : event.target).style.minHeight = \'\';"');
        imageHtml.push('/>');
        return imageHtml.join('');
    };
    filePreviewManager = {
        previewers: {
            other: {
                noExtension: [blankPreview],
                extensionNotInMapping: [blankPreview],
                folder: [folderPreview],
                fallback: [blankPreview]
            },
            extensionToPreviewerMap: {
                docx: [embeddedWACPreview, WACImagePreview],
                docm: [embeddedWACPreview, WACImagePreview],
                dotx: [embeddedWACPreview, WACImagePreview],
                dot: [embeddedWACPreview, WACImagePreview],
                doc: [embeddedWACPreview, WACImagePreview],
                odt: [embeddedWACPreview, WACImagePreview],
                pptx: [embeddedWACPreview],
                potx: [embeddedWACPreview],
                ppt: [embeddedWACPreview],
                pot: [embeddedWACPreview],
                potm: [embeddedWACPreview],
                pptm: [embeddedWACPreview],
                ppsx: [embeddedWACPreview],
                pps: [embeddedWACPreview],
                ppsm: [embeddedWACPreview],
                odp: [embeddedWACPreview],
                xlsx: [embeddedWACPreview],
                xlsb: [embeddedWACPreview],
                xlsm: [embeddedWACPreview],
                avi: [mediaPreview],
                mp4: [mediaPreview],
                ogg: [mediaPreview],
                ogv: [mediaPreview],
                webm: [mediaPreview],
                wmv: [mediaPreview],
                mp3: [mediaPreview],
                oga: [mediaPreview],
                wav: [mediaPreview],
                wma: [mediaPreview],
                jpg: [imagePreview],
                jpeg: [imagePreview],
                gif: [imagePreview],
                png: [imagePreview],
                bmp: [imagePreview],
                svg: [imagePreview]
            }
        },
        createPreviewFromListItem: function(ctxT, listItem) {
            var extension = listItem.File_x0020_Type;
            var isFolder = listItem.FSObjType === "1";
            var hasExtension = m$.isDefinedAndNotNull(extension) && extension.trim() !== "";
            var candidatePreviewers;

            if (isFolder) {
                candidatePreviewers = this.previewers.other.fallback;
            }
            else if (hasExtension) {
                var previewerForExtension = this.previewers.extensionToPreviewerMap[extension];

                if (m$.isDefined(previewerForExtension)) {
                    candidatePreviewers = previewerForExtension;
                }
                else {
                    candidatePreviewers = this.previewers.other.extensionNotInMapping;
                }
            }
            else {
                candidatePreviewers = this.previewers.other.noExtension;
            }
            candidatePreviewers.push.apply(candidatePreviewers, this.previewers.other.fallback);
            var previewer;

            for (var i = 0; i < candidatePreviewers.length; ++i) {
                previewer = Object.create(candidatePreviewers[i]);
                previewer.init(ctxT, listItem, extension);
                if (previewer.canRender()) {
                    return previewer;
                }
            }
            Sys.Debug.assert(false);
            return null;
        }
    };
    getWACManualOverride = function() {
    ULS7RK:
        ;
        var manualOverride = null;

        if (m$.isDefinedAndNotNull(localStorage.SPWacPreviewEnabled)) {
            manualOverride = localStorage.SPWacPreviewEnabled == 1;
        }
        else {
            var uri = new URI(window.location.href, {
                queryCaseInsensitive: true
            });
            var WACEnabledQueryParam = uri.getQueryParameter("callout_wac_enabled");

            if (m$.isDefinedAndNotNull(WACEnabledQueryParam))
                manualOverride = WACEnabledQueryParam.toUpperCase() === "TRUE";
        }
        return manualOverride;
    };
    notifyScriptsLoadedAndExecuteWaitingJobs("filePreview.js");
}
function ULS7RK() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "filePreview.commentedjs";
    return o;
}
var previewBase;
var blankPreview;
var embeddedWACPreview;
var WACImagePreview;
var folderPreview;
var mediaPreview;
var imagePreview;
var filePreviewManager;
var getWACManualOverride;

$_global_filepreview();
