function $_global_imglib() {
    fImglibJssLoaded = true;
    fImglibDefautlView = false;
    imglibItems = [];
    firstId = -1;
    fSelectFieldAppeared = false;
    previewedId = 0;
    currentRecursiveViewStyle = "";
    currentRootFolder = "";
    ids = [];
    fAllSelected = false;
    selectedIdsStr = "";
    filterIdsStr = "";
    fSelectedView = false;
    currentViewGuid = "";
    fInitSelection = false;
    detailStyleText = "";
    currentViewStyle = "";
    selectedViewLink = null;
    vCurrentListID = "";
    vCurrentListUrlAsHTML = "";
    vCurrentWebUrl = "";
    urlCmdForDisplay = "";
    fNewItem = false;
    fInit = false;
    tbImg = null;
    tbTitle = null;
    tbPreview = null;
    hilitedRow = null;
    previewTimer = -1;
    timedItem = -1;
    currentPicture = 0;
    currentStrip = 0;
    stripSize = 5;
    listDirection = "ltr";
    lastMenuId = "";
    firstIdWithCheckbox = -1;
    fInitAttempted = false;
    fRecursive = false;
    fRTL = false;
    fEmptyView = false;
    fWebFldrView = false;
    fFilterOn = false;
    fInitViewStyle = false;
    fNextImageLoaded = false;
    fNeedReload = false;
    fEditingInProcess = false;
    listInfo = null;
    fIsInGroupByView = false;
    picturePreviewAlt = null;
    unverifiedSelectionIdsCount = 0;
    verifiedSelectionIdsCount = 0;
    selectionLimit = 200;
    SlideshowObject_InitializePrototype();
    expirationInMilSeconds = 604800000;
    bTranState = 0;
    slideshowInterval = 5000;
    slideshowIncremental = 500;
    timerId = -1;
    fAutoRun = false;
    fRepeat = false;
    fRetry = 0;
    fRetryLimit = 2;
    if (typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded != "undefined") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("imglib.js");
    }
}
function ULSjYp() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "imglib.commentedjs";
    return o;
}
var fImglibJssLoaded;
var fImglibDefautlView;
var imglibItems;
var firstId;
var fSelectFieldAppeared;
var previewedId;
var currentRecursiveViewStyle;
var currentRootFolder;
var ids;
var fAllSelected;
var selectedIdsStr;
var filterIdsStr;
var fSelectedView;
var currentViewGuid;
var fInitSelection;
var detailStyleText;
var currentViewStyle;
var selectedViewLink;
var vCurrentListID;
var vCurrentListUrlAsHTML;
var vCurrentWebUrl;
var urlCmdForDisplay;
var fNewItem;
var fInit;
var tbImg;
var tbTitle;
var tbPreview;
var hilitedRow;
var previewTimer;
var timedItem;
var currentPicture;
var currentStrip;
var stripSize;
var listDirection;
var lastMenuId;
var firstIdWithCheckbox;
var fInitAttempted;
var fRecursive;
var fRTL;
var fEmptyView;
var fWebFldrView;
var fFilterOn;
var fInitViewStyle;
var fNextImageLoaded;
var fNeedReload;
var fEditingInProcess;
var listInfo;
var fIsInGroupByView;
var picturePreviewAlt;
var selectionCacheMgr;
var unverifiedSelectionIdsCount;
var verifiedSelectionIdsCount;
var selectionLimit;

function ShowPic(ssObj) {
    var arrayIndex = ssObj.index;
    var arrayIndexNext = 0;

    if (ssObj.index != ssObj.pictureArray.length - 1)
        arrayIndexNext = ssObj.index + 1;
    var arrayIndexPrev = ssObj.pictureArray.length - 1;

    if (ssObj.index != 0)
        arrayIndexPrev = ssObj.index - 1;
    ssObj.image.src = ssObj.pictureArray[arrayIndex];
    ssObj.image.height = ssObj.heightArray[arrayIndex];
    ssObj.image.width = ssObj.widthArray[arrayIndex];
    ssObj.image.alt = ssObj.descriptionArray[arrayIndex];
    ssObj.link.href = ssObj.linkArray[arrayIndex];
    if (ssObj.title != null) {
        ssObj.title.innerHTML = ssObj.titleArray[arrayIndex];
    }
    if (ssObj.description != null) {
        ssObj.description.innerHTML = ssObj.descriptionArray[arrayIndex];
    }
    ssObj.imageNext.src = ssObj.pictureArray[arrayIndexNext];
    ssObj.imagePrev.src = ssObj.pictureArray[arrayIndexPrev];
}
function ShowOnePic(ssObj) {
    if (ssObj.text != null) {
        ssObj.text.style.filter = "alpha(opacity=100)";
        ssObj.text.style.opacity = 1;
    }
    ssObj.image.src = ssObj.pictureArray[0];
    ssObj.image.height = ssObj.heightArray[0];
    ssObj.image.width = ssObj.widthArray[0];
    ssObj.image.alt = ssObj.descriptionArray[0];
    ssObj.link.href = ssObj.linkArray[0];
    ssObj.image.style.filter = "alpha(opacity=100)";
    ssObj.image.opacity = 1;
    if (ssObj.title != null) {
        ssObj.title.innerHTML = ssObj.titleArray[0];
    }
    if (ssObj.description != null) {
        ssObj.description.innerHTML = ssObj.descriptionArray[0];
    }
}
function ChangePic(ssObj) {
    if (ssObj.index == -1) {
        ssObj.index++;
        ShowPic(ssObj);
        if (ssObj.filters && ssObj.filters.length > 0) {
            ssObj.image.style.filter = "alpha(opacity=100)";
            ssObj.image.opacity = 1;
            if (ssObj.text != null) {
                ssObj.text.style.filter = "alpha(opacity=100)";
                ssObj.text.opacity = 1;
            }
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                ChangePic(ssObj);
            }, ssObj.speed * 1000);
        }
        else {
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                SSFade(ssObj, 1);
            }, 1);
        }
        return;
    }
    if (ssObj.filters && ssObj.filters.length > 0) {
        if (!ssObj.imageNext.complete) {
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                ChangePic(ssObj);
            }, 10);
            return;
        }
        ssObj.cell.style.filter = ssObj.transition;
        if (ssObj.text != null)
            ssObj.text.style.filter = ssObj.transition;
        ssObj.cell.filters[0].Apply();
        if (ssObj.text != null)
            ssObj.text.filters[0].Apply();
        if (++ssObj.index == ssObj.pictureArray.length)
            ssObj.index = 0;
        ShowPic(ssObj);
        ssObj.cell.filters[0].Play();
        if (ssObj.text != null)
            ssObj.text.filters[0].Play();
        ssObj.timeout = setTimeout(function() {
        ULSjYp:
            ;
            ChangePic(ssObj);
        }, (ssObj.speed + ssObj.transitionTime) * 1000);
    }
    else {
        ssObj.image.style.filter = "alpha(opacity=0)";
        ssObj.image.style.opacity = 0;
        if (ssObj.text != null) {
            ssObj.text.style.filter = "alpha(opacity=0)";
            ssObj.text.style.opacity = 0;
        }
        if (++ssObj.index == ssObj.pictureArray.length)
            ssObj.index = 0;
        ShowPic(ssObj);
        ssObj.timeout = setTimeout(function() {
        ULSjYp:
            ;
            SSFade(ssObj, 1);
        }, 1);
    }
}
function SSFade(ssObj, f) {
    if (ssObj.opacity > 0 && f == -1 || ssObj.opacity < 1 && f == 1) {
        ssObj.image.style.filter = "alpha(opacity=" + (100 * ssObj.opacity).toString() + ")";
        ssObj.image.style.opacity = ssObj.opacity;
        if (ssObj.text != null) {
            ssObj.text.style.filter = "alpha(opacity=" + (100 * ssObj.opacity).toString() + ")";
            ssObj.text.style.opacity = ssObj.opacity;
        }
        ssObj.opacity += f * .01;
        ssObj.timeout = setTimeout(function() {
        ULSjYp:
            ;
            SSFade(ssObj, f);
        }, 1);
    }
    else if (f == 1) {
        ssObj.timeout = setTimeout(function() {
        ULSjYp:
            ;
            SSFade(ssObj, -1);
        }, ssObj.speed * 1000);
    }
    else if (f == -1) {
        ssObj.timeout = setTimeout(function() {
        ULSjYp:
            ;
            ChangePic(ssObj);
        }, 1);
    }
}
function NextPrevious(ssObj, np) {
    clearTimeout(ssObj.timeout);
    if (ssObj.index == -1)
        ssObj.index++;
    if (np) {
        if (!Boolean(ssObj.filters) || Boolean(ssObj.cell.filters) && (ssObj.cell.filters.length == 0 || ssObj.cell.filters[0].status == 0)) {
            if (++ssObj.index >= ssObj.pictureArray.length) {
                ssObj.index = 0;
            }
        }
    }
    else {
        if (--ssObj.index <= -1)
            ssObj.index = ssObj.pictureArray.length - 1;
    }
    if (ssObj.filters && ssObj.filters.length > 0) {
        ShowPic(ssObj);
        if (ssObj.cell.filters.length > 0) {
            ssObj.cell.filters[0].enabled = false;
            if (ssObj.text != null)
                ssObj.text.filters[0].enabled = false;
        }
        if (!ssObj.paused)
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                ChangePic(ssObj);
            }, ssObj.speed * 1000);
    }
    else {
        ShowPic(ssObj);
        ssObj.image.style.filter = "alpha(opacity=100)";
        ssObj.image.style.opacity = 1;
        if (ssObj.text != null) {
            ssObj.text.style.filter = "alpha(opacity=100)";
            ssObj.text.style.opacity = 1;
        }
        if (!ssObj.paused)
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                SSFade(ssObj, -1);
            }, ssObj.speed * 1000);
    }
}
function PlayPause(ssObj) {
    var imagesPath = "/_layouts/15/images/";

    if (!ssObj.paused) {
        clearTimeout(ssObj.timeout);
        ssObj.paused = true;
        if (ssObj.filters && ssObj.filters.length > 0) {
            if (Boolean(ssObj.cell.filters) && ssObj.cell.filters.length > 0 && ssObj.cell.filters[0].status != 0) {
                if (--ssObj.index < 0)
                    ssObj.index = ssObj.pictureArray.length - 1;
            }
            ShowPic(ssObj);
            if (ssObj.cell.filters.length > 0) {
                ssObj.cell.filters[0].enabled = false;
                if (ssObj.text != null)
                    ssObj.text.filters[0].enabled = false;
            }
        }
        else {
            ssObj.image.style.filter = "alpha(opacity=100)";
            ssObj.image.style.opacity = 1;
            if (ssObj.text != null) {
                ssObj.text.style.filter = "alpha(opacity=100)";
                ssObj.text.style.opacity = 1;
            }
        }
        if (!fRTL) {
            ssObj.playpause.src = imagesPath + "plplay1.gif";
        }
        else {
            ssObj.playpause.src = imagesPath + "plplayr1.gif";
        }
        ssObj.playpause.alt = Strings.STS.L_SlideShowPlayButton_Text;
        ssObj.playpausePreload.src = imagesPath + "plpause1.bmp";
    }
    else {
        ssObj.paused = false;
        ssObj.playpause.src = imagesPath + "plpause1.gif";
        ssObj.playpause.alt = Strings.STS.L_SlideShowPauseButton_Text;
        if (!fRTL) {
            ssObj.playpausePreload.src = imagesPath + "plplay1.gif";
        }
        else {
            ssObj.playpausePreload.src = imagesPath + "plplayr1.gif";
        }
        if (ssObj.filters && ssObj.filters.length > 0)
            ChangePic(ssObj);
        else
            ssObj.timeout = setTimeout(function() {
            ULSjYp:
                ;
                SSFade(ssObj, -1);
            }, ssObj.speed * 1000);
    }
}
function SlideshowObject_InitializePrototype() {
ULSjYp:
    ;
    SlideshowObject.prototype = {
        text: undefined,
        cell: undefined,
        image: undefined,
        link: undefined,
        imageNext: undefined,
        imagePrev: undefined,
        title: undefined,
        description: undefined,
        pictureArray: undefined,
        linkArray: undefined,
        titleArray: undefined,
        descriptionArray: undefined,
        heightArray: undefined,
        widthArray: undefined,
        index: undefined,
        opacity: undefined,
        speed: undefined,
        mode: undefined,
        timeout: undefined,
        paused: undefined,
        playpause: undefined,
        playpausePreload: undefined,
        transitionTime: undefined,
        transition: undefined,
        filters: undefined
    };
}
function SlideshowObject(tag, pictureArr, linkArr, titleArr, descriptionArr, heightArr, widthArr, speedA, transA, mode) {
ULSjYp:
    ;
    this.text = document.getElementById(tag + "text");
    this.cell = document.getElementById(tag + "cell");
    this.image = document.getElementById(tag + "curr");
    this.link = document.getElementById(tag + "link");
    this.imageNext = document.getElementById(tag + "next");
    this.imagePrev = document.getElementById(tag + "prev");
    this.title = document.getElementById(tag + "title");
    this.description = document.getElementById(tag + "desc");
    this.pictureArray = pictureArr;
    this.linkArray = linkArr;
    this.titleArray = titleArr;
    this.descriptionArray = descriptionArr;
    this.heightArray = heightArr;
    this.widthArray = widthArr;
    this.index = -1;
    this.opacity = 0.0;
    this.speed = speedA;
    this.mode = mode;
    this.timeout = null;
    this.paused = false;
    this.playpause = document.getElementById(tag + "playpause");
    this.playpausePreload = document.getElementById(tag + "pp");
    this.transitionTime = transA;
    this.transition = "progid:DXImageTransform.Microsoft.Fade(duration=" + String(transA) + ");";
    if (Boolean(this.image.filters))
        this.filters = true;
    else
        this.filters = false;
}
function CListInfo(webWidth, webHeight, thumbSize) {
ULSjYp:
    ;
    if (webWidth >= 160 && webWidth < 1280) {
        this.webImageWidth = webWidth;
    }
    else {
        this.webImageWidth = 640;
    }
    if (webHeight >= 160 && webHeight < 1280) {
        this.webImageHeight = webHeight;
    }
    else {
        this.webImageHeight = 640;
    }
    if (thumbSize >= 20 && thumbSize <= this.webImageWidth && thumbSize <= this.webImageHeight) {
        this.thumbnailSize = thumbSize;
    }
    else {
        this.thumbnailSize = 160;
    }
}
function CreateDerivedImageUrl(originalImageUrl, subdirStr) {
    var url = originalImageUrl.replace(/\.([^\.]+)$/, "_$1");

    url = url + ".jpg";
    url = url.replace(/\/([^\/]+)$/, subdirStr + "$1");
    return url;
}
function EncodedThumbnailImage(id) {
ULSjYp:
    ;
    if (id == null || imglibItems[id] == null)
        return;
    if (imglibItems[id].objType == 1) {
        return imglibItems[id].thumbnail;
    }
    else if (imglibItems[id].fUnknownImageType == true) {
        return imglibItems[id].thumbnail;
    }
    else {
        var thumbnailUrl = CreateDerivedImageUrl(imglibItems[id].originalImg, "/_t/");

        return thumbnailUrl;
    }
}
function GetAltText(id) {
ULSjYp:
    ;
    if (id == null || imglibItems[id] == null)
        return;
    return imglibItems[id].alt;
}
function EncodedWebImage(id) {
ULSjYp:
    ;
    if (id == null || imglibItems[id] == null)
        return;
    if (imglibItems[id].objType == 1) {
        return imglibItems[id].webimage;
    }
    else if (imglibItems[id].fUnknownImageType == true) {
        return imglibItems[id].webimage;
    }
    else {
        var webimgUrl = CreateDerivedImageUrl(imglibItems[id].originalImg, "/_w/");

        return webimgUrl;
    }
}
function ViewEmptyScript(webImageWidth, webImageHeight, thumbnailSize) {
ULSjYp:
    ;
    listInfo = new CListInfo(webImageWidth, webImageHeight, thumbnailSize);
    fEmptyView = true;
    InitViewUrls();
    InitItems();
    AddSelectAllCheckbox();
    return;
}
function WebFolderViewInit(listGuid) {
ULSjYp:
    ;
    if (browseris.ie5up && browseris.win) {
        fWebFldrView = true;
        InitViewUrls();
        vCurrentListID = listGuid;
        InitSelection();
    }
}
function GotoInfoPage(reason) {
ULSjYp:
    ;
    if (reason == null || reason == "")
        return;
    var infopageUrl = GetLayoutUrl() + "infopage.aspx?List=" + vCurrentListID;

    infopageUrl += "&reason=" + reason;
    var rootFolder = GetUrlKeyValue("RootFolder", true);

    if (rootFolder != "")
        infopageUrl += "&RootFolder=" + rootFolder;
    if (window.frameElement != null && typeof window.frameElement.commitPopup != "undefined" && window.frameElement.commitPopup != null)
        infopageUrl += "&IsDlg=1";
    window.location.href = infopageUrl;
}
function MakeFullUrl(folderUrl, siteUrl) {
ULSjYp:
    ;
    var unescapedFolderUrl = unescapeProperly(folderUrl);

    if (0 == unescapedFolderUrl.indexOf("http://") || 0 == unescapedFolderUrl.indexOf("https://"))
        return unescapedFolderUrl;
    else
        return siteUrl + unescapedFolderUrl;
}
function StartOIS(cmdLine) {
ULSjYp:
    ;
    var fClientInstalled = false;

    try {
        var OISClientLauncher = new ActiveXObject("OISCTRL.OISClientLauncher");

        if (Boolean(OISClientLauncher)) {
            fClientInstalled = true;
            if (typeof OISClientLauncher.LaunchOIS != "undefined") {
                OISClientLauncher.LaunchOIS(cmdLine);
            }
        }
    }
    catch (e) { }
    return fClientInstalled;
}
function PLMultipleUploadView() {
ULSjYp:
    ;
    if (vCurrentListUrlAsHTML == "")
        return false;
    var strListDir = vCurrentListUrlAsHTML.substring(0, vCurrentListUrlAsHTML.length - 1);
    var subwebPos = strListDir.lastIndexOf("/");

    if (subwebPos == -1)
        return false;
    var subwebStr = strListDir.substring(0, subwebPos);
    var colonSlashSlashIndex = subwebStr.indexOf("://");

    if (colonSlashSlashIndex == -1)
        return false;
    var siteUrl = subwebStr;
    var nextSlashPos = subwebStr.indexOf("/", colonSlashSlashIndex + 3);

    if (nextSlashPos != -1)
        siteUrl = subwebStr.substring(0, nextSlashPos);
    var destinationFolder;
    var rootFolder = "";

    if (document.getElementById("destination") != null)
        destinationFolder = (document.getElementById("destination")).value;
    if (destinationFolder == null || destinationFolder == "")
        rootFolder = GetUrlKeyValue("RootFolder", true);
    var fUploadStarted = false;

    if (destinationFolder != "") {
        fUploadStarted = StartOIS("ois.exe /upload \"" + MakeFullUrl(destinationFolder, siteUrl) + "\"");
    }
    else if (rootFolder != "") {
        fUploadStarted = StartOIS("ois.exe /upload \"" + MakeFullUrl(rootFolder, siteUrl) + "\"");
    }
    else {
        fUploadStarted = StartOIS("ois.exe /upload \"" + vCurrentListUrlAsHTML + "\"");
    }
    if (!fUploadStarted)
        return false;
    GotoInfoPage("uploading");
    return true;
}
function _EditSelectedImages() {
ULSjYp:
    ;
    if (!browseris.ie || !browseris.win) {
        alert(Strings.STS.L_IEOnlyFeature_Text);
        return;
    }
    if (!fImglibDefautlView) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    if (tbPreview == null) {
        alert(Strings.STS.L_NotAvailableOnWebPart_Text);
        return;
    }
    var selectionStr = MakeSelectionStr();

    selectionStr = selectionStr.replace(/\;/g, " ");
    if (selectionStr == "") {
        alert(Strings.STS.L_NoImageSelected_Text);
        return;
    }
    if (vCurrentListUrlAsHTML == "")
        return;
    var cmdLine = "ois.exe /editSP ";

    cmdLine += "\"" + vCurrentListUrlAsHTML + "\" " + selectionStr;
    if (StartOIS(cmdLine)) {
        fEditingInProcess = true;
        SaveSelection();
        GotoInfoPage("editing");
    }
    else
        GotoInfoPage("noclient");
}
function EditSingleImage(id) {
ULSjYp:
    ;
    if (!browseris.ie || !browseris.win) {
        alert(Strings.STS.L_IEOnlyFeature_Text);
        return;
    }
    if (id == "")
        return;
    if (vCurrentListUrlAsHTML == "")
        return;
    var cmdLine = "ois.exe /editSP ";

    cmdLine += "\"" + vCurrentListUrlAsHTML + "\" " + id;
    if (StartOIS(cmdLine)) {
        fEditingInProcess = true;
        SaveSelection();
        GotoInfoPage("editing");
    }
    else
        GotoInfoPage("noclient");
}
function SendImagesCore(selectionIds, strListDir) {
ULSjYp:
    ;
    if (!browseris.ie || !browseris.win) {
        alert(Strings.STS.L_IEOnlyFeature_Text);
        return true;
    }
    if (selectionIds == "") {
        alert(Strings.STS.L_NoImageSelected_Text);
        return true;
    }
    var cmdLine = "ois.exe /sendto \"" + strListDir + "\" " + selectionIds;

    return StartOIS(cmdLine);
}
function _SendImages() {
ULSjYp:
    ;
    if (!browseris.ie || !browseris.win) {
        alert(Strings.STS.L_IEOnlyFeature_Text);
        return;
    }
    if (!fImglibDefautlView) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    if (tbPreview == null) {
        alert(Strings.STS.L_NotAvailableOnWebPart_Text);
        return;
    }
    var selectionIds = MakeSelectionStr();

    if (selectionIds == "") {
        alert(Strings.STS.L_NoImageSelected_Text);
        return;
    }
    if (vCurrentListUrlAsHTML == "")
        return;
    if (!SendImagesCore(selectionIds, vCurrentListUrlAsHTML))
        GotoInfoPage("noclient");
}
function _DownloadImages() {
ULSjYp:
    ;
    if (!browseris.ie || !browseris.win) {
        alert(Strings.STS.L_IEOnlyFeature_Text);
        return;
    }
    if (!fImglibDefautlView) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    if (tbPreview == null) {
        alert(Strings.STS.L_NotAvailableOnWebPart_Text);
        return;
    }
    var selectionIds = MakeSelectionStr();

    if (selectionIds == "") {
        alert(Strings.STS.L_NoImageSelected_Text);
        return;
    }
    var advancedAspxUrl = GetLayoutUrl() + "Dladvopt.aspx?List=" + vCurrentListID + "&SelectedIds=" + selectionIds + "&ViewUI=1";
    var rootFolder = GetUrlKeyValue("RootFolder", true);

    if (rootFolder != "")
        advancedAspxUrl += "&RootFolder=" + rootFolder;
    window.location.href = advancedAspxUrl;
}
function GetLayoutUrl() {
ULSjYp:
    ;
    if (vCurrentWebUrl != "")
        return vCurrentWebUrl + "/_layouts/15/";
    return "../.." + "/_layouts/15/";
}
function DownloadOriginalImage(id) {
ULSjYp:
    ;
    if (tbPreview == null) {
        alert(Strings.STS.L_NotAvailableOnWebPart_Text);
        return;
    }
    if (id == null || imglibItems[id] == null || imglibItems[id].objType != 0)
        return;
    var downloadHref = GetLayoutUrl() + "download.aspx?List=" + vCurrentListID + "&ItemId=" + id + "&Version=0";

    window.location.href = downloadHref;
}
function GetLinks(lnkId) {
ULSjYp:
    ;
    if (browseris.ie)
        return document.getElementById(lnkId);
    else
        return document.links[lnkId];
}
function InitImglibView(listID, languageText) {
ULSjYp:
    ;
    vCurrentListID = listID;
}
function RedirectToCorrectSelectView() {
ULSjYp:
    ;
    fRecursive = true;
    fSelectedView = false;
    InitSelection();
    LoadSelection();
    var currentUrl = window.location.href;
    var qmarkPosition = currentUrl.indexOf("?");
    var suffix = "";
    var viewUrl = "";

    if (qmarkPosition != -1) {
        suffix = currentUrl.substring(qmarkPosition + 1, currentUrl.length);
        viewUrl = currentUrl.substring(0, qmarkPosition);
    }
    else {
        viewUrl = currentUrl;
    }
    var sortField = /SortField=[^&]*/i;
    var sortDir = /SortDir=[^&]*/i;
    var sortFieldStr = suffix.match(sortField);
    var sortDirStr = suffix.match(sortDir);
    var idsStr = MakeSelectionStr();

    if (idsStr == "")
        idsStr = "none";
    viewUrl += "?" + "View=" + currentViewGuid + "&FilterName=ID&FilterMultiValue=" + idsStr;
    if (sortFieldStr != null && sortDirStr != null) {
        viewUrl += "&" + sortFieldStr.toString() + "&" + sortDirStr.toString();
    }
    window.open(viewUrl, "_self", "", true);
}
function InitViewUrls() {
ULSjYp:
    ;
    var currentUrl = window.location.href;
    var qmarkPosition = currentUrl.indexOf("?");
    var suffix = "";
    var viewUrl = "";

    if (qmarkPosition != -1) {
        suffix = currentUrl.substring(qmarkPosition + 1, currentUrl.length);
        viewUrl = currentUrl.substring(0, qmarkPosition);
    }
    else {
        viewUrl = currentUrl;
    }
    if (!browseris.ie5up || !browseris.win) {
        if (fSelectedView) {
            alert(Strings.STS.L_SelectedViewError_Text);
            var newViewUrl = viewUrl.replace(/\/forms\/[^\/]*$/i, "/");

            window.location.href = newViewUrl;
            return;
        }
    }
    currentRootFolder = String(suffix.match(/RootFolder=[^&]*/));
    var queryVariables = suffix.split("&");
    var filterSubstr = suffix.match(/View=([^&]*)&FilterName=ID&FilterMultiValue=([^&]*)/);
    var fIncompleteSelectedView = false;

    if (fSelectedView) {
        if (filterSubstr != null) {
            filterIdsStr = filterSubstr[1];
        }
        else {
            RedirectToCorrectSelectView();
        }
    }
    suffix = "";
    for (var i = 0; i < queryVariables.length; i++) {
        if (queryVariables[i].match(/Filter=1/)) {
            fFilterOn = true;
        }
    }
}
function SwitchViewStyle(style) {
ULSjYp:
    ;
    if (style == currentViewStyle || fEmptyView)
        return;
    if (tbPreview != null) {
        if (style == "filmstrip") {
            (document.getElementById("contentfilmstrip")).style.display = "block";
            (document.getElementById("contentthumbnail")).style.display = "none";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.style.display = "none";
            if (stripSize > 0) {
                var frmImg = document.getElementById("fstb0");

                if (frmImg != null)
                    frmImg.focus();
            }
        }
        else if (style == "thumbnail") {
            (document.getElementById("contentfilmstrip")).style.display = "none";
            (document.getElementById("contentthumbnail")).style.display = "block";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.style.display = "none";
        }
        else {
            (document.getElementById("contentfilmstrip")).style.display = "none";
            (document.getElementById("contentthumbnail")).style.display = "none";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.style.display = "block";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.style.display = "block";
        }
        currentViewStyle = style;
        if (currentViewStyle == "list")
            tbPreview.style.display = "block";
        else
            tbPreview.style.display = "none";
    }
    InitSelection();
}
function NextSelectionOverLimit(newCount) {
ULSjYp:
    ;
    if (unverifiedSelectionIdsCount + verifiedSelectionIdsCount + newCount > selectionLimit)
        return true;
    return false;
}
function ToggleSelection(id) {
ULSjYp:
    ;
    if (tbPreview == null)
        return;
    if (id < 0 || imglibItems[id] == null)
        return;
    if (imglibItems[id].fSelected == false) {
        if (NextSelectionOverLimit(1)) {
            UIChange(id, false);
            alert(Strings.STS.L_ExceedSelectionLimit_Text);
            return false;
        }
        else {
            imglibItems[id].fSelected = true;
            verifiedSelectionIdsCount++;
            UIChange(id, true);
        }
    }
    else {
        imglibItems[id].fSelected = false;
        verifiedSelectionIdsCount--;
        UIChange(id, false);
    }
    SaveSelection();
    ConstructSelectionHref();
}
function ToggleSelectionAll() {
ULSjYp:
    ;
    if (tbPreview == null)
        return;
    var i;
    var fSelect = !fAllSelected;
    var selectionChangeCount = 0;

    for (i = 0; i < ids.length; i++) {
        if (imglibItems[ids[i]].objType != 1 && imglibItems[ids[i]].fSelected != fSelect) {
            selectionChangeCount++;
        }
    }
    if (fSelect) {
        if (NextSelectionOverLimit(selectionChangeCount)) {
            alert(Strings.STS.L_ExceedSelectionLimit_Text);
            return;
        }
        verifiedSelectionIdsCount = verifiedSelectionIdsCount + selectionChangeCount;
    }
    else {
        verifiedSelectionIdsCount = verifiedSelectionIdsCount - selectionChangeCount;
    }
    for (i = 0; i < ids.length; i++) {
        if (imglibItems[ids[i]].objType != 1) {
            imglibItems[ids[i]].fSelected = fSelect;
            UIChange(ids[i], fSelect);
        }
    }
    SaveSelection();
    ConstructSelectionHref();
}
function ConstructSelectionHref() {
ULSjYp:
    ;
    var selectionStr = MakeSelectionStr();

    if (selectionStr == "")
        selectionStr = "none";
    var imgSelectAll = document.getElementById("cbxSelectAll");

    if (imgSelectAll != null) {
        if (fAllSelected)
            imgSelectAll.src = ctx.imagesPath + "checkall.gif";
        else
            imgSelectAll.src = ctx.imagesPath + "unchecka.gif";
    }
}
function LoadSelection() {
ULSjYp:
    ;
    if (!fInitSelection) {
        if (Boolean(window.ActiveXObject)) {
            try {
                selectionCacheMgr.load("OISSelectionStore");
            }
            catch (e) {
                return;
            }
        }
        else {
            return;
        }
    }
    selectedIdsStr = "";
    var fWrongList = false;

    if (Boolean(selectionCacheMgr.getAttribute("listGuid")) && vCurrentListID != "") {
        var savedListGuid = selectionCacheMgr.getAttribute("listGuid");

        if (savedListGuid != vCurrentListID) {
            fWrongList = true;
        }
    }
    if (Boolean(selectionCacheMgr.getAttribute("cachedValue")) && !fWrongList) {
        selectedIdsStr = selectionCacheMgr.getAttribute("cachedValue");
        selectionCacheMgr.innerText = selectedIdsStr;
        var selIds = selectedIdsStr.split(";");
        var selNum = selIds.length;

        selectedIdsStr = "";
        unverifiedSelectionIdsCount = 0;
        verifiedSelectionIdsCount = 0;
        for (var i = 0; i < selNum; i++) {
            var selId = parseInt(selIds[i]);
            var fIdMatched = false;
            var j;

            if (isNaN(selId)) {
                continue;
            }
            for (j = 0; j < ids.length; j++) {
                if (ids[j] == selId) {
                    if (!NextSelectionOverLimit(1)) {
                        imglibItems[ids[j]].fSelected = true;
                        verifiedSelectionIdsCount++;
                        UIChange(selId, true);
                    }
                    fIdMatched = true;
                    break;
                }
            }
            if (!fIdMatched && !fSelectedView) {
                if (!NextSelectionOverLimit(1)) {
                    if (selectedIdsStr == "")
                        selectedIdsStr = selIds[i];
                    else
                        selectedIdsStr += ";" + selIds[i];
                    unverifiedSelectionIdsCount++;
                }
            }
        }
    }
    var needReload = selectionCacheMgr.getAttribute("Reload");

    if (needReload == "1")
        fNeedReload = true;
}
function InitSelection() {
ULSjYp:
    ;
    if (Boolean(window.ActiveXObject)) {
        try {
            if (typeof selectionCacheMgr.load != "undefined") {
                selectionCacheMgr.load("OISSelectionStore");
            }
        }
        catch (e) {
            if (!fInitAttempted) {
                fInitAttempted = true;
                setTimeout("InitSelection()", 500);
            }
            return;
        }
    }
    else {
        return;
    }
    fInitSelection = true;
    if (!fInitViewStyle) {
        fInitViewStyle = true;
        var viewStyle = "thumbnail";

        if (Boolean(selectionCacheMgr.getAttribute("viewStyle"))) {
            viewStyle = selectionCacheMgr.getAttribute("viewStyle");
            if (viewStyle != "list" && viewStyle != "filmstrip") {
                viewStyle = "thumbnail";
            }
            if (fFilterOn || fIsInGroupByView)
                viewStyle = "list";
        }
        if (!fWebFldrView) {
            if (!fRecursive) {
                SwitchViewStyle(viewStyle);
                if (viewStyle == "filmstrip")
                    ClickFrame(currentPicture);
            }
            else {
                currentViewStyle = viewStyle;
            }
        }
        else {
            currentViewStyle = viewStyle;
        }
    }
    LoadSelection();
    var fReloadPending = fNeedReload;

    fNeedReload = false;
    SaveSelection();
    if (fReloadPending)
        window.location.reload(true);
    ConstructSelectionHref();
    return;
}
function ClearSelections() {
ULSjYp:
    ;
    if (!fInitSelection)
        return;
    selectedIdsStr = "";
    var i;

    for (i = 0; i < ids.length; i++) {
        imglibItems[ids[i]].fSelected = false;
        UIChange(ids[i], false);
    }
    SaveSelection();
    ConstructSelectionHref();
}
function GetSelectionCount() {
ULSjYp:
    ;
    var count = 0;
    var i;

    for (i = 0; i < ids.length; i++) {
        if (imglibItems[ids[i]].fSelected == true) {
            count++;
        }
    }
    return count;
}
function MakeSelectionStr() {
ULSjYp:
    ;
    var newSelStr = selectedIdsStr;
    var i;

    fAllSelected = true;
    for (i = 0; i < ids.length; i++) {
        if (imglibItems[ids[i]].fSelected == true) {
            if (newSelStr == "") {
                newSelStr = "" + ids[i];
            }
            else {
                newSelStr += ";" + ids[i];
            }
        }
        else if (imglibItems[ids[i]].objType == 0) {
            fAllSelected = false;
        }
    }
    return newSelStr;
}
var expirationInMilSeconds;

function SaveSelection() {
ULSjYp:
    ;
    if (browseris.ie5up && browseris.win && fInitSelection) {
        selectionCacheMgr.setAttribute("cachedValue", MakeSelectionStr());
        selectionCacheMgr.setAttribute("viewStyle", currentViewStyle);
        selectionCacheMgr.setAttribute("listGuid", vCurrentListID);
        if (fEditingInProcess)
            selectionCacheMgr.setAttribute("Reload", "1");
        else
            selectionCacheMgr.setAttribute("Reload", "0");
        var oTimeNow = new Date();

        oTimeNow.setTime(oTimeNow.getTime() + expirationInMilSeconds);
        var sExpirationDate = oTimeNow.toUTCString();

        selectionCacheMgr.expires = sExpirationDate;
        if (typeof selectionCacheMgr.save != "undefined") {
            selectionCacheMgr.save("OISSelectionStore");
        }
    }
    return;
}
function RemoveQueryParameterFromUrlImgLib(stURL, stParameterName) {
ULSjYp:
    ;
    var re = new RegExp("[&?]" + stParameterName + "=[^&]*", "");

    stURL = stURL.replace(re, "");
    if (stURL.indexOf("?") == -1) {
        var ich = stURL.indexOf("&");

        if (ich != -1)
            stURL = stURL.substring(0, ich) + "?" + stURL.substring(ich + 1);
    }
    return stURL;
}
function CreateRootFolderHref(id) {
ULSjYp:
    ;
    if (id == null || imglibItems[id] == null)
        return "";
    if (imglibItems[id].objType != 1)
        return "";
    var currentHref = window.location.href;

    if (!ctx.recursiveView) {
        var folderHref = "RootFolder=" + escapeProperly(unescapeProperly(imglibItems[id].originalImg));

        if (-1 == currentHref.indexOf("?")) {
            currentHref = currentHref + "?" + folderHref;
        }
        else if (Boolean(currentHref.match(/RootFolder=/))) {
            currentHref = currentHref.replace(/RootFolder=[^&]*/, folderHref);
        }
        else {
            currentHref = currentHref + "&" + folderHref;
        }
    }
    currentHref = currentHref.replace(/&p_\w+=[^&]*/g, "");
    currentHref = currentHref.replace(/&PageFirstRow=[^&]*/, "");
    currentHref = RemoveQueryParameterFromUrlImgLib(currentHref, "View");
    currentHref = currentHref.replace(/\?Paged=TRUE&/, "?");
    currentHref = STSHtmlEncode(currentHref);
    if (-1 == currentHref.indexOf("?"))
        return currentHref + "?View=" + currentViewGuid;
    else
        return currentHref + "&amp;View=" + currentViewGuid;
}
function DisplayItemUrl(id) {
    if (id == null || imglibItems[id] == null)
        return "";
    if (imglibItems[id].objType == 1) {
        return CreateRootFolderHref(id);
    }
    else if (imglibItems[id].fUnknownImageType == true) {
        return imglibItems[id].originalImg;
    }
    else {
        var cmd = "";

        if (urlCmdForDisplay == null)
            return;
        cmd = urlCmdForDisplay + "&ID=" + id.toString();
        cmd += "&Source=" + GetSource();
        var menuTR = document.getElementById("title" + id.toString());

        if (menuTR != null) {
            var fileDir = GetAttributeFromItemTable(menuTR.parentNode.parentNode, "DRef", "FileDirRef");

            if (fileDir != null && fileDir != "") {
                if (fileDir.charAt(0) != "/")
                    fileDir = "/" + fileDir;
                fileDir = escapeProperly(fileDir);
                cmd = cmd.replace(/RootFolder=[^&]*&/, "");
                cmd = cmd + "&RootFolder=" + fileDir;
            }
        }
        return cmd;
    }
}
function CallDisplayItem(id) {
    if (id == null || imglibItems[id] == null)
        return;
    window.location.href = DisplayItemUrl(id);
}
function DisplayItemOnFileRef(id) {
ULSjYp:
    ;
    if (!browseris.ie5up || !browseris.win) {
        CallDisplayItem(id);
        return false;
    }
    event.cancelBubble = true;
    if (browseris.ie55up) {
        CallDisplayItem(id);
        return false;
    }
    else {
        CallDisplayItem(id);
        return true;
    }
}
function CallEditItem(id) {
    var cmd = "";

    if (urlCmdForDisplay == null)
        return;
    cmd = urlCmdForDisplay + "&ID=" + id.toString();
    cmd += "&Source=" + GetSource();
    var menuTR = document.getElementById("title" + id.toString());

    if (menuTR != null) {
        var fileDir = GetAttributeFromItemTable(menuTR.parentNode.parentNode, "DRef", "FileDirRef");

        if (fileDir != null && fileDir != "") {
            if (fileDir.charAt(0) != "/")
                fileDir = "/" + fileDir;
            fileDir = escapeProperly(fileDir);
            cmd = cmd.replace(/RootFolder=[^&]*&/, "");
            cmd = cmd + "&RootFolder=" + fileDir;
        }
    }
    var editUrl = cmd.replace(/dispform\.aspx/i, "EditForm.aspx");

    if (editUrl != "")
        window.location.href = editUrl;
}
function _DeleteImages() {
ULSjYp:
    ;
    if (tbPreview == null) {
        alert(Strings.STS.L_NotAvailableOnWebPart_Text);
        return;
    }
    if (!fImglibDefautlView) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    var selectionStr = MakeSelectionStr();

    if (selectionStr == "") {
        alert(Strings.STS.L_NoImageSelected_Text);
        return;
    }
    if (GetLayoutUrl() == "")
        return;
    var confirmed = false;

    if (GetSelectionCount() > 1) {
        if (confirm(ctx.RecycleBinEnabled ? Strings.STS.L_RecycleMultipleItems_Text : Strings.STS.L_DeleteMultipleItems_Text))
            confirmed = true;
    }
    else {
        if (confirm(ctx.RecycleBinEnabled ? Strings.STS.L_RecycleSingleItem_Text : Strings.STS.L_DeleteSingleItem_Text))
            confirmed = true;
    }
    if (confirmed) {
        var deleteUrl = GetLayoutUrl() + "DeleteMu.aspx";

        deleteUrl += "?List=" + vCurrentListID + "&SelectedIds=" + MakeSelectionStr() + "&Source=" + GetSource();
        if (typeof MSOWebPartPageFormName != "undefined") {
            var form = document.forms[MSOWebPartPageFormName];

            if (null != form) {
                ClearSelections();
                form.action = deleteUrl;
                form.method = "POST";
                form.submit();
            }
        }
    }
}
function GetUint(str) {
    var ui = parseInt(str.replace(/,/g, ""));

    if (ui > 0)
        return ui;
    return 0;
}
function GetScaleRatio(w, h, spaceW, spaceH) {
ULSjYp:
    ;
    var ratio1 = spaceW * 1. / w;
    var ratio2 = spaceH * 1. / h;
    var ratio = ratio1 > ratio2 ? ratio2 : ratio1;

    if (ratio > 1)
        ratio = 1;
    return ratio;
}
function GetHeight(w, h, spaceW, spaceH) {
ULSjYp:
    ;
    if (w == 0 || h == 0)
        return spaceH;
    var result = h * GetScaleRatio(w, h, spaceW, spaceH);

    if (result < 1.0)
        return 1;
    else
        return result;
}
function GetWidth(w, h, spaceW, spaceH) {
ULSjYp:
    ;
    if (w == 0 || h == 0)
        return spaceH;
    var result = w * GetScaleRatio(w, h, spaceW, spaceH);

    if (result < 1.0)
        return 1;
    else
        return result;
}
function UIChangeList(id, fSelected) {
ULSjYp:
    ;
    if (id < 0 || imglibItems[id] == null)
        return;
    if (imglibItems[id].objType != 0)
        return;
    var chkBox = document.getElementById("cbx_" + id.toString());

    if (chkBox != null) {
        chkBox.checked = fSelected;
    }
    if (!browseris.ie5up || !browseris.win)
        return;
    var row = document.getElementById("row" + id.toString());

    if (row != null) {
        if (fSelected == true)
            row.className = "ms-imglibselectedrow s4-itm-selected";
        else
            row.className = "";
    }
}
function MouseOverRow(id) {
ULSjYp:
    ;
    if (tbPreview == null)
        return;
    if (FILIsMenuShown() == 1)
        return;
    if (timedItem != id) {
        if (previewTimer >= 0)
            clearTimeout(previewTimer);
        previewTimer = setTimeout("HiLiteRow(" + id.toString() + ")", 200);
        timedItem = id;
    }
}
function MouseOutRow(id) {
ULSjYp:
    ;
    if (tbPreview == null)
        return;
    if (FILIsMenuShown() == 1)
        return;
    if (previewTimer >= 0 && timedItem == id) {
        clearTimeout(previewTimer);
        previewTimer = -1;
        timedItem = -1;
    }
}
function HiLiteRow(id) {
ULSjYp:
    ;
    if (!fImglibDefautlView)
        return;
    if (fInit == false) {
        InitItems();
        fInit = true;
    }
    if (id < 0 || imglibItems[id] == null)
        return;
    if (tbPreview == null)
        return;
    previewedId = id;
    if (Boolean(tbImg)) {
        tbImg.src = EncodedThumbnailImage(id);
        if (imglibItems[id].alt == null || imglibItems[id].alt == "") {
            tbImg.alt = picturePreviewAlt;
        }
        else {
            tbImg.alt = imglibItems[id].alt;
        }
        tbImg.width = String(GetWidth(imglibItems[id].imgWidth, imglibItems[id].imgHeight, 120, 90));
        tbImg.height = String(GetHeight(imglibItems[id].imgWidth, imglibItems[id].imgHeight, 120, 90));
    }
    if (Boolean(tbTitle)) {
        tbTitle.innerHTML = imglibItems[id].caption;
    }
    if (!browseris.ie5up || !browseris.win)
        return;
    var row = document.getElementById("title" + id.toString());

    if (row != null) {
        if (hilitedRow == row)
            return;
        else if (hilitedRow != null) {
            hilitedRow.children[1].style.visibility = "hidden";
            hilitedRow.parentNode.parentNode.className = "ms-unselectedtitle";
        }
        hilitedRow = row;
        row.children[1].className = "ms-menuimagecell";
        row.children[1].style.visibility = "visible";
        row.parentNode.parentNode.className = "ms-selectedtitle";
    }
}
function ClickRow(id) {
ULSjYp:
    ;
    if (!fImglibDefautlView)
        return;
    if (tbPreview == null)
        return;
    if (id < 0 || imglibItems[id] == null)
        return;
    if (browseris.ie) {
        if (event == null)
            event = window.event;
        if (event != null)
            event.cancelBubble = true;
    }
    HiLiteRow(id);
    ILShowMenu(id);
}
function ContextMenuOnRow(id) {
ULSjYp:
    ;
    if (!browseris.ie55up || !browseris.win)
        return true;
    if (event.srcElement.tagName == "A")
        return true;
    ClickRow(id);
    return false;
}
function FILIsMenuShown() {
ULSjYp:
    ;
    if (!browseris.ie5up || !browseris.win)
        return false;
    if (lastMenuId == "")
        return 0;
    var m = document.getElementById(lastMenuId);

    if (m != null) {
        var fIsOpen = false;

        if (Boolean(window.ActiveXObject)) {
            try {
                if (typeof m.isOpen != "undefined") {
                    fIsOpen = m.isOpen();
                }
            }
            catch (e) { }
        }
        if (!fIsOpen)
            lastMenuId = "";
        return fIsOpen;
    }
    return 0;
}
function ILShowMenu(itemID) {
ULSjYp:
    ;
    if (!browseris.ie5up || !browseris.win)
        return;
    if (!browseris.ie55up) {
        CallEditItem(itemID);
        return;
    }
    var menuId = "plmenu_" + itemID.toString();
    var m = document.getElementById(menuId);

    if (m == null) {
        m = CMenu(menuId);
    }
    else {
        m.innerHTML = "";
    }
    currentItemID = itemID.toString();
    currentItemFileUrl = imglibItems[itemID].originalImg;
    currentItemFSObjType = imglibItems[itemID].objType;
    currentItemPermMaskH = null;
    var menuTR = document.getElementById("title" + itemID.toString());

    if (menuTR != null) {
        if (typeof menuTR.COUId != "undefined") {
            currentItemCheckedOutUserId = menuTR.COUId;
        }
        itemTable = menuTR.parentNode.parentNode;
        if (imglibItems[itemID].fUnknownImageType == false) {
            itemTable.IsImage = "1";
        }
        else if (imglibItems[itemID].objType != 1) {
            itemTable.IsImage = "";
        }
    }
    CtxSetIsWebEditorPreview(0);
    AddDocLibMenuItems(m, ctx);
    lastMenuId = menuId;
    if (menuTR != null) {
        OMenu(m, menuTR.parentNode.parentNode, undefined, undefined, Number(undefined));
    }
    else {
        OMenu(m, window.event.srcElement.parentNode, undefined, undefined, Number(undefined));
    }
}
function InitItems() {
ULSjYp:
    ;
    tbImg = document.getElementById("ImgPreviewThumbnail");
    if (tbImg != null)
        picturePreviewAlt = tbImg.alt;
    if (browseris.ie) {
        tbPreview = document.getElementById("ImgPreviewTable");
        tbTitle = document.getElementById("lnkPreviewTitle");
    }
    else {
        if (browseris.nav6up) {
            tbPreview = document.getElementById("ImgPreviewTable");
            if (tbPreview != null)
                tbPreview.style.display = "block";
        }
        tbTitle = document.anchors["lnkPreviewTitle"];
    }
}
function AddSelectAllCheckbox() {
ULSjYp:
    ;
    var chkBox = document.getElementById("diidHeaderImageSelectedFlag");

    if (chkBox == null)
        return;
    var tdHeadChkBox = null;

    if (browseris.nav6up)
        tdHeadChkBox = chkBox.parentNode;
    else
        tdHeadChkBox = chkBox.parentNode;
    if (tdHeadChkBox == null || tdHeadChkBox.tagName.toLowerCase() != "th")
        return;
    if (firstIdWithCheckbox == -1)
        tdHeadChkBox.innerHTML = "";
    else {
        tdHeadChkBox.innerHTML = "<a href='Javascript:ToggleSelectionAll()' onclick='ToggleSelectionAll();return false;'><img style='border:0' src='" + ctx.imagesPath + "unchecka.gif" + "' id='cbxSelectAll' alt='" + Strings.STS.L_SelectAll_Text + "' /></a>";
        var chkBoxs = document.getElementsByName("selectionCheckBox");

        if (chkBoxs == null)
            return;
        for (var i = 0; i < chkBoxs.length; i++) {
            chkBox = chkBoxs[i];
            if (chkBox != null) {
                chkBox.disabled = false;
                chkBox.style.visibility = "visible";
                if (browseris.ie) {
                    chkBox.parentNode.width = "30";
                    chkBox.style.height = "18";
                }
            }
        }
    }
}
function ClickPreview() {
ULSjYp:
    ;
    CallDisplayItem(previewedId);
}
function ClickThumbnail(id) {
ULSjYp:
    ;
    CallDisplayItem(id);
}
function UIChangeThumbnail(id, fSelected) {
ULSjYp:
    ;
    if (imglibItems[id] == null || imglibItems[id].objType != 0)
        return;
    var _tbImg = document.getElementById("tb_" + String(id));

    if (null == _tbImg)
        return;
    var chkBox = document.getElementById("cbxTB_" + String(id));

    if (chkBox != null) {
        chkBox.checked = fSelected;
    }
    var elm = _tbImg.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    if (fSelected) {
        CoreInvoke('AddCssClassToElement', elm, "ms-imglibthumbnail-selected");
    }
    else {
        CoreInvoke('RemoveCssClassFromElement', elm, "ms-imglibthumbnail-selected");
    }
}
function CreateTile(id) {
ULSjYp:
    ;
    var cellSize = listInfo.thumbnailSize + 10;
    var str = "";

    if (!browseris.ie) {
        return;
    }
    else {
        if (FV4UI()) {
            str += "<div class='thumbnail'>";
        }
        else {
            str += "<span class='thumbnail'>";
        }
        str += "<table style='display:inline;'><tr height='" + (2 + cellSize).toString() + "'><td  width='" + cellSize.toString() + "' class='ms-imglibthumbnail' align='center'>";
        str += "<table border='0' cellspacing='2' cellpadding='0' class='ms-imglibthumbnail'><tr height='" + (listInfo.thumbnailSize + 4).toString() + "'><td width='" + (listInfo.thumbnailSize + 4).toString() + "' align='center' verticalAlign='middle'>";
        str += "<a href='#' onclick='ClickThumbnail(" + id + ");return false;'><img class='thumbnail' height='" + (GetHeight(imglibItems[id].imgWidth, imglibItems[id].imgHeight, listInfo.thumbnailSize, listInfo.thumbnailSize)).toString() + "' id='tb_" + id + "' src='" + imglibItems[id].thumbnail + "' style='border:0' alt='";
        if (imglibItems[id].alt != "") {
            str += STSHtmlEncode(imglibItems[id].alt);
        }
        else if (imglibItems[id].objType != 0) {
            str += Strings.STS.L_FolderAlt_Text;
        }
        else if (imglibItems[id].fUnknownImageType == true) {
            str += Strings.STS.L_DocumentAlt_Text;
        }
        else {
            str += Strings.STS.L_ImgAlt_Text;
        }
        str += "'></img></a>";
        str += "</td></tr></table>";
        str += "</td></tr><tr height='0'><td valign='top' nowrap='nowrap'";
        if (browseris.ie55up)
            str += ">";
        else
            str += " dir=" + listDirection + ">";
        if (imglibItems[id].objType != 1)
            str += "<input type='checkbox' id='cbxTB_" + id + "' onclick='ToggleSelection(" + id + ")'>";
        else
            str += "&nbsp";
        str += "<span style='width:" + (listInfo.thumbnailSize - 20).toString() + "px;display:inline-block;text-wrapping:nowrap;overflow:hidden;text-overflow:ellipsis'><label for='cbxTB_" + id.toString() + "'>" + imglibItems[id].caption + "</label></span>";
        str += "</td></tr></table>";
        if (FV4UI()) {
            str += "</div>";
        }
        else {
            str += "</span>";
        }
        str += "\n";
        document.write(str);
    }
}
function UIChangeFilmstrip(id, fSelected) {
ULSjYp:
    ;
    var item;

    for (item = currentPicture; item < currentPicture + stripSize; item++) {
        if (ids[item] == id)
            break;
    }
    if (item >= currentPicture + stripSize)
        return;
    var cbxObj = document.getElementById("cbxFS_" + (item - currentPicture).toString());

    if (cbxObj != null && cbxObj.tagName.toLowerCase() == "input")
        cbxObj.checked = fSelected;
}
function LoadNextPicture(fAccending) {
ULSjYp:
    ;
    event.cancelBubble = true;
    if (ids.length <= stripSize)
        return;
    var frmImg = null;

    if (currentStrip >= 0 && currentStrip < stripSize) {
        frmImg = document.getElementById("fstb" + currentStrip.toString());
        if (frmImg != null) {
            frmImg.parentNode.className = "ms-imglibthumbnail";
        }
    }
    if (fAccending == 1) {
        if (currentPicture + stripSize >= ids.length)
            return;
        currentPicture = currentPicture + 1;
        currentStrip = currentStrip - 1;
    }
    else {
        if (currentPicture <= 0)
            return;
        currentPicture = currentPicture - 1;
        currentStrip = currentStrip + 1;
    }
    for (var i = 0; i < stripSize; i++) {
        var currentId = ids[currentPicture + i];

        frmImg = document.getElementById("fstb" + i.toString());
        if (frmImg != null) {
            frmImg.src = EncodedThumbnailImage(currentId);
            frmImg.height = String(GetHeight(imglibItems[currentId].imgWidth, imglibItems[currentId].imgHeight, 96, 96));
            frmImg.width = String(GetWidth(imglibItems[currentId].imgWidth, imglibItems[currentId].imgHeight, 96, 96));
            if (imglibItems[currentId].alt != "") {
                frmImg.alt = imglibItems[currentId].alt;
            }
            else if (imglibItems[currentId].objType != 0) {
                frmImg.alt = Strings.STS.L_FolderAlt_Text;
            }
            else if (imglibItems[currentId].fUnknownImageType == true) {
                frmImg.alt = Strings.STS.L_DocumentAlt_Text;
            }
            else {
                frmImg.alt = Strings.STS.L_ImgAlt_Text;
            }
        }
        var cbxObj = document.getElementById("cbxFS_" + i.toString());

        if (cbxObj != null && cbxObj.tagName.toLowerCase() == "input") {
            if (imglibItems[currentId].objType != 0) {
                cbxObj.style.display = "none";
                cbxObj.checked = false;
            }
            else {
                cbxObj.style.display = "inline";
                cbxObj.checked = imglibItems[currentId].fSelected;
            }
        }
        var titleObj = document.getElementById("title_" + i.toString());

        if (titleObj != null)
            titleObj.innerHTML = imglibItems[currentId].caption;
    }
    var backGif;
    var forwardGif;

    if (fRTL) {
        backGif = ctx.imagesPath + "plslforw.gif";
        forwardGif = ctx.imagesPath + "plslback.gif";
    }
    else {
        backGif = ctx.imagesPath + "plslback.gif";
        forwardGif = ctx.imagesPath + "plslforw.gif";
    }
    if (currentPicture == 0) {
        (document.getElementById("backgif")).parentNode.parentNode.style.display = "none";
    }
    else {
        (document.getElementById("backgif")).parentNode.parentNode.style.display = "block";
    }
    if (currentPicture + stripSize >= ids.length) {
        (document.getElementById("forwardgif")).parentNode.parentNode.style.display = "none";
    }
    else {
        (document.getElementById("forwardgif")).parentNode.parentNode.style.display = "block";
    }
    if (currentStrip >= 0 && currentStrip < stripSize) {
        frmImg = document.getElementById("fstb" + currentStrip.toString());
        if (frmImg != null) {
            frmImg.parentNode.className = "ms-imglibthumbnail-selected";
        }
    }
    return false;
}
function ClickFrame(frame) {
ULSjYp:
    ;
    if (frame < 0 || frame >= stripSize)
        return false;
    var currentId = ids[currentPicture + frame];

    previewedId = currentId;
    var frmImg = null;

    if (currentStrip >= 0 && currentStrip < stripSize) {
        frmImg = document.getElementById("fstb" + currentStrip.toString());
        if (frmImg != null) {
            frmImg.parentNode.className = "ms-imglibthumbnail";
        }
    }
    currentStrip = frame;
    frmImg = document.getElementById("fstb" + currentStrip.toString());
    if (frmImg != null) {
        frmImg.parentNode.className = "ms-imglibthumbnail ms-imglibthumbnail-selected";
        frmImg.focus();
    }
    var imgCur = document.getElementById('CurrentPic');

    if (imgCur != null) {
        var fDelay = 0;

        imgCur.style.visibility = "hidden";
        if (browseris.ie55up && browseris.win && imglibItems[currentId].objType != 1 && !imglibItems[currentId].fUnknownImageType) {
            var imgSyncer = document.getElementById("webImageSyncer");

            if (imgSyncer != null && typeof imgSyncer.imagedata != "undefined" && imgSyncer.imagedata != null) {
                imgSyncer.imagedata.src = EncodedWebImage(currentId);
                fDelay = 1;
            }
        }
        if (fDelay == 0) {
            imgCur.src = EncodedWebImage(currentId);
            imgCur.alt = GetAltText(currentId);
        }
        else {
            window.setTimeout("document.getElementById('CurrentPic').src = EncodedWebImage(" + currentId.toString() + "); document.getElementById('CurrentPic').alt = GetAltText(" + currentId.toString() + ");", 500);
        }
        imgCur.height = String(GetHeight(imglibItems[currentId].imgWidth, imglibItems[currentId].imgHeight, 448, 448));
        imgCur.width = String(GetWidth(imglibItems[currentId].imgWidth, imglibItems[currentId].imgHeight, 448, 448));
    }
    var origPicLink = GetLinks("OriginalPicLink");
    var openItemLnk = GetLinks("OpenItemLink");

    if (origPicLink != null) {
        if (imglibItems[currentId].objType == 1) {
            var newHref = CreateRootFolderHref(currentId);

            if (newHref != "")
                origPicLink.href = newHref;
            (document.getElementById("descrRow")).style.visibility = "hidden";
            imgCur.alt = Strings.STS.L_GotoFolder_Text;
        }
        else {
            origPicLink.href = imglibItems[currentId].originalImg;
            (document.getElementById("descrRow")).style.visibility = "visible";
            if (imglibItems[currentId].alt != "")
                imgCur.alt = imglibItems[currentId].alt;
            else
                imgCur.alt = Strings.STS.L_AltViewProperty_Text;
        }
        origPicLink.href = DisplayItemUrl(currentId);
    }
    if (openItemLnk != null) {
        openItemLnk.href = DisplayItemUrl(currentId);
    }
    (document.getElementById("titleSpan")).innerHTML = imglibItems[currentId].caption;
    (document.getElementById("descrSpan")).innerHTML = imglibItems[currentId].description;
    if (imglibItems[currentId].fUnknownImageType && imglibItems[currentId].objType == 0) {
        imgCur.style.display = "none";
        (document.getElementById("noPreviewSpan")).style.display = "block";
    }
    else {
        imgCur.style.display = "block";
        (document.getElementById("noPreviewSpan")).style.display = "none";
    }
    return false;
}
function ToggleSelectedItem(i) {
ULSjYp:
    ;
    if (i < 0 || i >= stripSize)
        return;
    if (currentPicture + i < ids.length)
        ToggleSelection(ids[currentPicture + i]);
}
function FilmstripTbKeyPressed(frame) {
ULSjYp:
    ;
    if (event.keyCode != 13)
        return true;
    event.cancelBubble = true;
    ClickFrame(frame);
    return false;
}
function FilmstripKeyPressed() {
ULSjYp:
    ;
    var step;

    if (event.keyCode == 37) {
        if (fRTL)
            step = 1;
        else
            step = -1;
    }
    else if (event.keyCode == 39) {
        if (fRTL)
            step = -1;
        else
            step = 1;
    }
    else
        return;
    if (currentStrip < 0 || currentStrip >= stripSize) {
        if (step > 0)
            ClickFrame(stripSize - 1);
        else
            ClickFrame(0);
        return;
    }
    var nextStrip = currentStrip + step;

    if (nextStrip < 0 || nextStrip >= stripSize) {
        LoadNextPicture(Number(step == 1));
    }
    nextStrip = currentStrip + step;
    if (nextStrip < 0 || nextStrip >= stripSize) {
        if (step > 0)
            ClickFrame(stripSize - 1);
        else
            ClickFrame(0);
        return;
    }
    ClickFrame(nextStrip);
}
function CreateStrip() {
ULSjYp:
    ;
    var str1;
    var str11 = ")' onkeydown='Javascript:FilmstripTbKeyPressed(";
    var str113 = ");'><table style='cursor:hand' width=\"108\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr height=\"108\"><td";
    var str115 = " width=\"108\" align=\"center\" class=\"ms-imglibthumbnail\"><img onclick='Javascript:ClickFrame(";
    var str2 = "); return false;'";
    var str200 = " galleryimg='false' border=\"0\" alt='";
    var str20 = "' height=";
    var str21 = " tabindex='0' id=fstb";
    var str3 = " src='";
    var str4 = "'></td><tr><td nowrap=\"nowrap\"><input style='width:16' type=\"checkbox\" id=cbxFS_";
    var str5 = "><span style='overflow:hidden;text-overflow:ellipsis; width:90' id=title_";
    var str6 = "><label for=cbxFS_";
    var str6b = ">";
    var str7 = "</label></span></td></tr></table><td>";
    var strOut;
    var hideCheckBox = " style='display:none'";

    if (browseris.ie5up && browseris.win) {
        str1 = "<td valign='top' onclick='ClickFrame(";
    }
    else {
        str1 = "<td width='108' onclick='ClickFrame(";
    }
    if (stripSize > ids.length)
        stripSize = ids.length;
    document.write("<table><tr>");
    for (var i = 0; i < stripSize; i++) {
        strOut = str1 + i.toString() + str11 + i.toString() + str113;
        if (i == currentStrip)
            strOut += " class='ms-imglibthumbnail-selected'";
        strOut += str115 + i.toString() + str2 + i.toString() + str200;
        if (imglibItems[ids[i]].alt != "")
            strOut += STSHtmlEncode(imglibItems[ids[i]].alt);
        else if (imglibItems[ids[i]].objType == 1)
            strOut += Strings.STS.L_FolderAlt_Text;
        else if (imglibItems[ids[i]].fUnknownImageType == true)
            strOut += Strings.STS.L_DocumentAlt_Text;
        else
            strOut += Strings.STS.L_ImgAlt_Text;
        strOut += str20 + (GetHeight(imglibItems[ids[i]].imgWidth, imglibItems[ids[i]].imgHeight, 96, 96)).toString() + str21 + i.toString() + str3 + imglibItems[ids[i]].thumbnail + str4 + i.toString();
        strOut += " onclick=ToggleSelectedItem(" + i.toString() + ")";
        if (imglibItems[ids[i]].objType == 1)
            strOut += hideCheckBox;
        strOut += str5 + i.toString() + str6 + i.toString() + str6b + imglibItems[ids[i]].caption + str7;
        document.write(strOut);
    }
    document.write("</tr></table>");
}
function UIChange(item, fSelected) {
ULSjYp:
    ;
    if (browseris.ie && tbPreview != null) {
        UIChangeThumbnail(item, fSelected);
        UIChangeFilmstrip(item, fSelected);
    }
    UIChangeList(item, fSelected);
}
function GenerateFooterContent(viewStyle, fVisible) {
ULSjYp:
    ;
    if (viewStyle == "thumbnail") {
        if (browseris.ie) {
            var str = "<table id=\"contentthumbnail\"";

            if (!fVisible)
                str += " style='display:none;'";
            str += " border=\"0\" cellspacing=\"0\" cellpadding=\"3\" width='100%'><tr><td";
            if (browseris.ie55up)
                str += " dir=" + listDirection + ">";
            else
                str += " dir=ltr>";
            document.write(str);
            for (var j = 0; j < ids.length; j++)
                CreateTile(ids[j]);
            document.write("</td></tr></table>");
        }
    }
    else if (viewStyle == "filmstrip") {
        if (currentPicture + stripSize > ids.length)
            currentPicture = ids.length - stripSize;
        if (currentPicture < 0)
            currentPicture = 0;
        currentStrip = 0;
        var currentId = ids[currentPicture + currentStrip];

        previewedId = currentId;
        var strScript = "<table id='contentfilmstrip' dir=" + listDirection + " border='0' cellspacing='0' cellpadding='3' width='100%' onkeydown='Javascript:FilmstripKeyPressed()'";

        if (!fVisible)
            strScript += "style='display:none'";
        strScript += "><tr>";
        var backGif;
        var forwardGif;
        var blankGif = "/blank.gif";

        if (fRTL) {
            backGif = "/forward.gif";
            forwardGif = "/back.gif";
        }
        else {
            backGif = "/back.gif";
            forwardGif = "/forward.gif";
        }
        strScript += "<td valign=\"center\" class=\"ms-imglibmenuarea\" style='cursor:hand";
        if (currentPicture == 0)
            strScript += "; display:none";
        strScript += "' onclick='Javascript:LoadNextPicture(0);'><a href='Javascript:LoadNextPicture(0)' onclick='Javascript:LoadNextPicture(0); return false;'><img id=\"backgif\" src='" + ctx.imagesPath + backGif + "' border=\"0\" alt=\"" + Strings.STS.L_PreviousPicture_Text + "\" /></a></td>";
        strScript += "<td nowrap=\"nowrap\" align=\"center\" width=\"100%\">";
        document.write(strScript);
        CreateStrip();
        strScript = "</td><td valign=\"center\" class=\"ms-imglibmenuarea\" style='cursor:hand";
        if (currentPicture + stripSize >= ids.length)
            strScript += "; display:none";
        strScript += "' onclick='Javascript:LoadNextPicture(1);'><a href='Javascript:LoadNextPicture(1)' onclick='Javascript:LoadNextPicture(1); return false;'><img id=\"forwardgif\" src='" + ctx.imagesPath + forwardGif + "' border=\"0\" alt=\"" + Strings.STS.L_NextPicture_Text + "\" /></a></td><tr>";
        strScript += "<tr><td align=\"center\" colspan=\"3\"><hr>";
        document.write(strScript);
        strScript = "<table class=\"ms-descriptiontext\"><tr height=\"336\"><td valign=\"middle\" align=\"center\" width=\"448\"><a id='OriginalPicLink' name='OriginalPicLink' href='" + DisplayItemUrl(currentId) + "'>";
        strScript = strScript + "<img  onload='CurrentPic.style.visibility=\"visible\";' border=\"0\" tabindex='2' galleryimg='false' id='CurrentPic' name='CurrentPic' height=" + (GetHeight(imglibItems[currentId].imgWidth, imglibItems[currentId].imgHeight, 448, 448)).toString();
        strScript = strScript + " src='" + imglibItems[currentId].webimage + "'";
        if (imglibItems[currentId].alt != "")
            strScript = strScript + "alt='" + STSHtmlEncode(imglibItems[currentId].alt) + "'";
        else if (imglibItems[currentId].objType == 1)
            strScript = strScript + "alt='" + Strings.STS.L_GotoFolder_Text + "'";
        else
            strScript = strScript + "alt='" + Strings.STS.L_AltViewProperty_Text + "'";
        strScript = strScript + "align=\"center\" border=\"2\"/></a>";
        strScript = strScript + "<span id=\"noPreviewSpan\" style='display:none;font-size:150%'>" + Strings.STS.L_NoPreview_Text + "<br /><a id='OpenItemLink' name='OpenItemLink' href='" + DisplayItemUrl(currentId) + "'>" + Strings.STS.L_OpenItem_Text + "</a></span>";
        strScript = strScript + "</td></tr><tr><td><table><tr><td valign=\"top\">" + Strings.STS.L_FileName_Text + ": </td><td>&nbsp;</td><td width=\"300\">";
        strScript = strScript + "<span id=\"titleSpan\">" + imglibItems[currentId].caption + "</td></tr><tr id=\"descrRow\"><td valign=\"top\">";
        strScript = strScript + Strings.STS.L_Description_Text + ": </td><td>&nbsp;</td><td width=\"300\"><span id=\"descrSpan\">" + imglibItems[currentId].description + "</span></td></tr></table></td></tr></table></td></tr></table>";
        document.write(strScript);
    }
}
function ViewHeaderScript(viewStyle, webImageWidth, webImageHeight, thumbnailSize) {
ULSjYp:
    ;
    if (viewStyle == "list" || viewStyle == "filmstrip") {
        currentViewStyle = viewStyle;
    }
    else {
        currentViewStyle = "thumbnail";
    }
    listInfo = new CListInfo(webImageWidth, webImageHeight, thumbnailSize);
    InitViewUrls();
}
function ViewFooterScript() {
ULSjYp:
    ;
    InitItems();
    if (!browseris.ie5up || !browseris.win) {
        if (firstId != -1) {
            var scriptStr = "HiLiteRow(" + firstId.toString() + ")";

            window.setTimeout(scriptStr, 200);
        }
        if (fSelectFieldAppeared) {
            if (tbPreview != null)
                AddSelectAllCheckbox();
        }
        return;
    }
    fInit = true;
    if (tbPreview != null) {
        listDirection = (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.currentStyle.direction;
        if (listDirection != "rtl" && listDirection != "RTL")
            listDirection = "ltr";
        else {
            fRTL = true;
            var previewTitleLink = GetLinks("lnkPreviewTitle");

            if (previewTitleLink != null) {
                previewTitleLink.style.direction = "RTL";
            }
        }
        if (currentViewStyle == "thumbnail") {
            GenerateFooterContent("thumbnail", true);
            GenerateFooterContent("filmstrip", false);
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.style.display = "none";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.style.display = "none";
        }
        else if (currentViewStyle == "filmstrip") {
            GenerateFooterContent("thumbnail", false);
            GenerateFooterContent("filmstrip", true);
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.style.display = "none";
            (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.style.display = "none";
        }
        else {
            GenerateFooterContent("thumbnail", false);
            GenerateFooterContent("filmstrip", false);
        }
    }
    if (firstId != -1) {
        HiLiteRow(firstId);
        if (tbPreview != null) {
            if (currentViewStyle == "list")
                tbPreview.style.display = "block";
            else
                tbPreview.style.display = "none";
        }
        if (fSelectFieldAppeared) {
            if (tbPreview != null)
                AddSelectAllCheckbox();
        }
    }
    if (tbPreview != null) {
        if (browseris.verIEFull >= 5.5 && browseris.iever < 6 && browseris.win)
            setTimeout("InitSelection()", 500);
        else if (browseris.ie5up && browseris.win)
            InitSelection();
    }
}
function ViewPreBodyScript(id) {
ULSjYp:
    ;
    document.write("<tr id='row" + id + "'>");
}
function ViewPostBodyScript(id) {
ULSjYp:
    ;
    document.write("</tr>");
}
var bTranState;
var slideshowInterval;
var slideshowIncremental;
var timerId;
var fAutoRun;
var fRepeat;
var fRetry;
var fRetryLimit;

function LoadNextSlide() {
ULSjYp:
    ;
    if (fNextImageLoaded == false && fRetry < fRetryLimit) {
        fRetry++;
        return;
    }
    fRetry = 0;
    if (currentPicture >= ids.length) {
        if (!fRepeat) {
            return;
        }
        else {
            currentPicture = 0;
        }
    }
    var pic1 = document.getElementById("thisPic");

    if (browseris.ie5up && browseris.win)
        pic1.style.visibility = "hidden";
    pic1.src = EncodedWebImage(ids[currentPicture]);
    pic1.alt = GetAltText(ids[currentPicture]);
    pic1.height = String(GetHeight(imglibItems[ids[currentPicture]].imgWidth, imglibItems[ids[currentPicture]].imgHeight, listInfo.webImageWidth, listInfo.webImageHeight));
    pic1.width = String(GetWidth(imglibItems[ids[currentPicture]].imgWidth, imglibItems[ids[currentPicture]].imgHeight, listInfo.webImageWidth, listInfo.webImageHeight));
    (document.getElementById("tdCaption")).innerHTML = imglibItems[ids[currentPicture]].caption + "<br />";
    (document.getElementById("tdDesc")).innerHTML = imglibItems[ids[currentPicture]].description + "<br />";
    (document.getElementById("tdImgDate")).innerHTML = imglibItems[ids[currentPicture]].createdDate + "<br />";
    currentPicture++;
    (document.getElementById("currentCount")).innerHTML = "" + currentPicture.toString();
    if (currentPicture + 1 < ids.length) {
        if (browseris.ie5up && browseris.win)
            fNextImageLoaded = false;
        var pic2 = document.getElementById("nextPic");

        pic2.src = EncodedWebImage(ids[currentPicture + 1]);
    }
}
function AutoRun() {
ULSjYp:
    ;
    if (fAutoRun) {
        LoadNextSlide();
        timerId = setTimeout("AutoRun()", slideshowInterval);
    }
}
function StartSlideShow() {
ULSjYp:
    ;
    if (fAutoRun)
        return;
    fAutoRun = true;
    timerId = setTimeout("AutoRun()", slideshowInterval);
}
function StopSlideShow() {
ULSjYp:
    ;
    PauseSlideShow();
    currentPicture = 0;
    LoadNextSlide();
}
function PauseSlideShow() {
ULSjYp:
    ;
    if (fAutoRun) {
        if (timerId != -1) {
            clearTimeout(timerId);
            timerId = -1;
        }
        fAutoRun = false;
    }
}
function ToggleRepeat() {
ULSjYp:
    ;
    fRepeat = !fRepeat;
}
function NextSlide() {
ULSjYp:
    ;
    if (browseris.ie)
        event.bubble = false;
    PauseSlideShow();
    if (currentPicture < ids.length) {
        if (currentPicture >= 0) {
            fRetry = fRetryLimit;
            LoadNextSlide();
        }
    }
}
function PreviousSlide() {
ULSjYp:
    ;
    if (browseris.ie)
        event.bubble = false;
    PauseSlideShow();
    if (currentPicture > 1) {
        currentPicture--;
        currentPicture--;
        fRetry = fRetryLimit;
        LoadNextSlide();
    }
}
function HiliteButton() {
ULSjYp:
    ;
    if (!browseris.ie)
        return;
    var img = event.srcElement;
    var imgSrc = img.src;

    imgSrc = imgSrc.replace(/1.gif$/g, "2.gif");
    img.src = imgSrc;
}
function DemoteButton() {
ULSjYp:
    ;
    if (!browseris.ie)
        return;
    var img = event.srcElement;
    var imgSrc = img.src;

    imgSrc = imgSrc.replace(/2.gif$/g, "1.gif");
    img.src = imgSrc;
}
function ShowSlidePic() {
ULSjYp:
    ;
    if (browseris.ie5up && browseris.win) {
        var pic1 = document.getElementById("thisPic");

        if (pic1 != null)
            pic1.style.visibility = "visible";
    }
}
function SortIds() {
ULSjYp:
    ;
    var currentUrl = window.location.href;
    var qmarkPosition = currentUrl.indexOf("?");
    var suffix = "";

    if (qmarkPosition != -1)
        suffix = currentUrl.substring(qmarkPosition + 1, currentUrl.length);
    else
        return;
    var queryVariables = suffix.split("&");
    var filterSubstr = suffix.match(/InstanceID=all&FilterName=ID&FilterMultiValue=([^&]*)/);

    if (filterSubstr != null)
        filterIdsStr = filterSubstr[1];
    if (filterIdsStr == "" || filterIdsStr == null)
        return;
    var filterIds = [];
    var idsSubStrs = filterIdsStr.split(";");

    for (var i = 0, j = 0; i < idsSubStrs.length; i++) {
        var id = parseInt(idsSubStrs[i]);

        if (id >= 0 && imglibItems[id] != null)
            filterIds[filterIds.length] = id;
    }
    ids = filterIds;
    filterIds = null;
}
function SlideShowContent() {
ULSjYp:
    ;
    if (ids.length == 0)
        return;
    SortIds();
    if (currentPicture < 0)
        currentPicture = 0;
    if (currentPicture >= ids.length)
        currentPicture = ids.length - 1;
    var str = "<table cellspacing=\"0\" cellpadding=\"0\" valign=\"middle\" align=\"center\" width=\"100%\" dir=" + listDirection + " height=\"100%\">";

    str += "<tr height=" + listInfo.webImageHeight.toString() + ">";
    str += "<td width=\"15\">&nbsp;</td>";
    str += "<td id=\"cellImage\" align=\"center\" valign=\"middle\" width=" + listInfo.webImageWidth.toString() + ">";
    str += "<img onload='ShowSlidePic();' id=\"thisPic\" galleryimg='false' src=\'" + imglibItems[ids[currentPicture]].webimage + "\' alt=\'" + STSHtmlEncode(imglibItems[ids[currentPicture]].alt) + "\' width=" + (GetWidth(imglibItems[ids[currentPicture]].imgWidth, imglibItems[ids[currentPicture]].imgHeight, listInfo.webImageWidth, listInfo.webImageHeight)).toString() + " height=" + (GetHeight(imglibItems[ids[currentPicture]].imgWidth, imglibItems[ids[currentPicture]].imgHeight, listInfo.webImageWidth, listInfo.webImageHeight)).toString() + ">";
    var preloadStr = "<img id=nextPic style='position:absolute;visibility:hidden' width=10 height=10";

    if (currentPicture + 1 < ids.length) {
        preloadStr += " src=\'" + imglibItems[ids[currentPicture + 1]].webimage + "\'";
        preloadStr += " onload='fNextImageLoaded=true;'";
    }
    preloadStr += " >";
    str += preloadStr;
    str += "</td>";
    str += "<td width=\"15\">&nbsp;</td><td valign=\"top\"><table class=\"ms-formdescription\" cellspacing=\"2\">";
    str += "<tr height=\"40\"><td>" + (Strings.STS.L_Picture_Of_Text.replace(/{(0)}/, "<a id=\"currentCount\">1</a>")).replace(/{(1)}/, ids.length.toString()) + "</td></tr>";
    str += "<tr id=\"controlRow\"><td>";
    var prevGif = "";
    var nextGif = "";
    var playGif = "";

    if (fRTL) {
        prevGif = "plnext1.gif";
        nextGif = "plprev1.gif";
        playGif = "plplayr1.gif";
    }
    else {
        prevGif = "plprev1.gif";
        nextGif = "plnext1.gif";
        playGif = "plplay1.gif";
    }
    var buttonStr = "<img border=0 height=23 style='position:relative;cursor:hand' onmouseover='HiliteButton()' onmouseout='DemoteButton()' src=\'" + ctx.imagesPath;
    var strPlay = "<a onclick='StartSlideShow(); return false;' href='javascript:StartSlideShow()'>" + buttonStr + playGif + "\' id=playButton alt='" + Strings.STS.L_SlideShowPlayButton_Text + "'>" + "</a> ";
    var strPause = "<a onclick='PauseSlideShow(); return false;' href='javascript:StartSlideShow()'>" + buttonStr + "plpause1.gif" + "\' alt='" + Strings.STS.L_SlideShowPauseButton_Text + "'>" + "</a> ";
    var strStop = "<a onclick='StopSlideShow(); return false;' href='javascript:StopSlideShow()'>" + buttonStr + "plstop1.gif" + "\' id=stopButton alt='" + Strings.STS.L_SlideShowStopButton_Text + "'>" + "</a> ";
    var strPrev = "<a onclick='PreviousSlide(); return false;' href='javascript:PreviousSlide()'>" + buttonStr + prevGif + "\' alt='" + Strings.STS.L_SlideShowPrevButton_Text + "'></a> ";
    var strNext = "<a onclick='NextSlide(); return false;' href='javascript:NextSlide()'>" + buttonStr + nextGif + "\' alt='" + Strings.STS.L_SlideShowNextButton_Text + "'></a>";

    if (fRTL) {
        str += strPrev + strNext + strStop + strPause + strPlay;
    }
    else {
        str += strPlay + strPause + strStop + strPrev + strNext;
    }
    str += "<hr /></td></tr>";
    str += "<tr><td><b>" + Strings.STS.L_FileName_Text + ":&nbsp;</b></td></tr><tr><td id=\"tdCaption\" width=\"75%\">" + imglibItems[ids[currentPicture]].caption + "<br /></td></tr>";
    str += "<tr><td><b>" + Strings.STS.L_ImageCreateDate_Text + ":&nbsp;</b></td></tr><tr><td id=\"tdImgDate\">" + imglibItems[ids[currentPicture]].createdDate + "<br /></td></tr>";
    str += "<tr><td><b>" + Strings.STS.L_Description_Text + ":&nbsp;</b></td></tr><tr><td id=\"tdDesc\">" + imglibItems[ids[currentPicture]].description + "<br /></td></tr>";
    if (ids.length > 1)
        currentPicture++;
    str += "</table></td>";
    str += "</tr></table>";
    document.write(str);
}
function RecursiveViewHeaderScript(viewStyle, webImageWidth, webImageHeight, thumbnailSize) {
ULSjYp:
    ;
    fRecursive = true;
    listInfo = new CListInfo(webImageWidth, webImageHeight, thumbnailSize);
    if (viewStyle == "details") {
        currentRecursiveViewStyle = viewStyle;
        document.write("<table style='display:none'>");
    }
    else {
        currentRecursiveViewStyle = "slideshow";
        document.write("<table>");
    }
}
function RecursiveViewFooterScript() {
ULSjYp:
    ;
    if (!browseris.ie5up || !browseris.win)
        return;
    listDirection = (document.getElementById("selectionCacheMgr")).parentNode.parentNode.parentNode.currentStyle.direction;
    if (listDirection != "rtl" && listDirection != "RTL")
        listDirection = "ltr";
    else
        fRTL = true;
    if (browseris.verIEFull >= 5.5 && browseris.iever < 6 && browseris.win)
        setTimeout("InitSelection()", 500);
    else if (browseris.ie5up && browseris.win)
        InitSelection();
}
function CItem(originalImageUrl, id, baseName, extension, imgWidthStr, imgHeightStr, titleStr, descriptionStr, objectType, iconUrl, fNewItemArg) {
    this.baseName = baseName;
    this.title = titleStr;
    this.originalImg = originalImageUrl;
    this.imgWidth = GetUint(imgWidthStr);
    this.imgHeight = GetUint(imgHeightStr);
    this.id = id;
    this.fSelected = false;
    this.fNewItem = fNewItemArg;
    this.description = STSHtmlEncode(descriptionStr);
    this.description = this.description.replace(/\r?\n/g, "<br>\n");
    this.alt = descriptionStr;
    this.objType = objectType;
    this.fUnknownImageType = true;
    this.iconUrl = iconUrl;
    this.caption = baseName;
    if (objectType == 1) {
        if ("" != extension)
            this.caption += "." + extension;
        this.thumbnail = (this.webimage = ctx.imagesPath + "/fldrnew.gif");
        this.imgWidth = (this.imgHeight = 37);
        return;
    }
    if (originalImageUrl == "")
        return;
    var lastSlashIndex = originalImageUrl.lastIndexOf("/");

    if (lastSlashIndex <= 0)
        return;
    var originalLocation = originalImageUrl.substring(0, lastSlashIndex + 1);

    originalLocation = escapeProperlyCore(originalLocation, true);
    if (this.imgWidth > 0 && this.imgHeight > 0) {
        baseName = escapeProperly(baseName);
        this.thumbnail = originalLocation + "_t/" + baseName + "_" + extension + ".jpg";
        this.webimage = originalLocation + "_w/" + baseName + "_" + extension + ".jpg";
        this.fUnknownImageType = false;
    }
    else {
        this.thumbnail = (this.webimage = iconUrl.indexOf("/") == 0 ? iconUrl : ctx.imagesPath + "/" + iconUrl);
        this.imgWidth = (this.imgHeight = 32);
    }
}
function InsertItem(originalImageUrl, id, baseName, extension, imgWidthStr, imgHeightStr, titleStr, descriptionStr, objectType, iconUrl, fNewItemArg) {
ULSjYp:
    ;
    if (originalImageUrl == "")
        return;
    imglibItems[id] = new CItem(originalImageUrl, id, baseName, extension, imgWidthStr, imgHeightStr, titleStr, descriptionStr, objectType, iconUrl, fNewItemArg);
    if (firstId == -1)
        firstId = id;
    ids[ids.length] = id;
}
function TryLaunchPictureLibrary(listId, listUrl, webUrl) {
ULSjYp:
    ;
    vCurrentListID = listId;
    vCurrentListUrlAsHTML = listUrl;
    vCurrentWebUrl = webUrl;
    var fUploadStarted = StartOIS("ois.exe /upload \"" + listUrl + "\"");

    if (!fUploadStarted)
        return false;
    GotoInfoPage("uploading");
    return true;
}
function ViewSlideShow(url, webImageWidth, webImageHeight) {
ULSjYp:
    ;
    var slideShowUrl = url + "slidshow.aspx?ViewStyle=slideshow";
    var rootFolder = GetUrlKeyValue("RootFolder", true);

    if (rootFolder != "")
        slideShowUrl += "&RootFolder=" + rootFolder;
    var width = 240 + webImageWidth;
    var height = 160 + webImageHeight;
    var win = window.open(slideShowUrl, "slideshow", "height=" + height.toString() + ",width=" + width.toString() + ",toolbar=no,menubar=no,scrollbars=no");

    if (win != null)
        win.focus();
}
$_global_imglib();
