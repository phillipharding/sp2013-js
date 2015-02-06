function $_global_mrudocs() {
    (function() {
        var globalOverrideCtx = {};

        globalOverrideCtx.Templates = {};
        globalOverrideCtx.Templates.Header = RenderMruDocsHeader;
        globalOverrideCtx.Templates.Body = RenderMruDocsBody;
        globalOverrideCtx.Templates.Footer = RenderMruDocsFooter;
        globalOverrideCtx.BaseViewID = 2;
        globalOverrideCtx.ListTemplateType = 200;
        if (typeof SPClientTemplates != "undefined")
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(globalOverrideCtx);
    })();
    g_mruDocsRetryCount = 0;
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("mrudocs.js");
    }
}
function RenderMruDocsHeader(context) {
    return "<div class='ms-mrudocs-separator'></div><div id='mrudocsHeader' class='ms-mrudocs-webpartheader'>" + STSHtmlEncode(Strings.STS.L_MruDocs_WebpartTitle) + "</div>";
}
function RenderMruDocsFooter(context) {
    if (context.CountOfItems <= 5) {
        return "";
    }
    else if (context.NumberOfItemsToDisplayMax < context.RecentDocsMax) {
        return "<div id='mrudocsFooter' class='ms-mrudocs-webpartfooter'><a class='ms-commandLink' onclick='ToggleNumberOfItemsToDisplay(" + context.RecentDocsMax + ")' href='#'>" + STSHtmlEncode(Strings.STS.L_ShowMoreItems) + "</a></div>";
    }
    else if (context.NumberOfItemsToDisplayMax == context.RecentDocsMax) {
        return "<div id='mrudocsFooter' class='ms-mrudocs-webpartfooter'><a class='ms-commandLink' onclick='ToggleNumberOfItemsToDisplay(5)' href='#'>" + STSHtmlEncode(Strings.STS.L_ShowFewerItems) + "</a></div>";
    }
    else {
        return "";
    }
}
var g_mruDocsDataFetched;
var g_mruDocsWPQualifier;
var g_mruDocsRetryCount;

function ToggleNumberOfItemsToDisplay(numberOfItemsToDisplay) {
    var renderDocListContext = g_ctxDict['ctx' + g_mruDocsWPQualifier];

    renderDocListContext.NumberOfItemsToDisplayMax = numberOfItemsToDisplay;
    RenderListView(renderDocListContext, renderDocListContext.wpq, null, false);
}
function MruDocsReceiveData(listData) {
    if (isDefinedAndNotNullOrEmpty(listData)) {
        g_mruDocsDataFetched = true;
        CacheMruDocsItems(listData);
        ReRenderMruDocsWebpart(listData);
    }
    else {
        g_mruDocsRetryCount++;
        if (g_mruDocsRetryCount < 3) {
            setTimeout('FetchMruDocsDataFromServer( null, null)', 1000 * g_mruDocsRetryCount);
        }
        else {
            g_mruDocsDataFetched = true;
            ReRenderMruDocsWebpart(null);
        }
    }
}
function ReRenderMruDocsWebpart(listData) {
    var renderDocListContext = g_ctxDict['ctx' + g_mruDocsWPQualifier];

    if (!IsNullOrUndefined(listData)) {
        renderDocListContext.ListData = eval('(' + listData + ')');
    }
    RenderListView(renderDocListContext, renderDocListContext.wpq, null, false);
}
function MruDocsFetchDataError() {
    RenderEmptyOrErrorBody();
}
function RenderMruDocsBody(context) {
    var numberOfRowsToDisplay = context.NumberOfItemsToDisplayMax;

    if (g_mruDocsDataFetched) {
        if (!IsNullOrUndefined(context.ListData)) {
            var rows = context.ListData["Row"];

            context.CountOfItems = rows.length;
            return RenderMruDocsAllItems(rows, numberOfRowsToDisplay);
        }
        else {
            context.CountOfItems = 0;
            return RenderEmptyOrErrorBody();
        }
    }
    else {
        g_mruDocsWPQualifier = context.wpq;
        var listDataFromCache = GetMruDocsItemsFromCache(context.LocalStorageCacheTTL);

        if (IsNullOrUndefined(listDataFromCache)) {
            _spBodyOnLoadFunctionNames.push('FetchMruDocsDataFromServer');
            context.CountOfItems = 0;
            return RenderLoadingBody();
        }
        else {
            var rowsFromCache = listDataFromCache["Row"];

            context.CountOfItems = rowsFromCache.length;
            return RenderMruDocsAllItems(rowsFromCache, numberOfRowsToDisplay);
        }
    }
}
function RenderMruDocsAllItems(rows, numberOfRowsToDisplay) {
    var ret = [];
    var len = rows.length;

    if (len == 0) {
        return RenderEmptyOrErrorBody();
    }
    else if (len < numberOfRowsToDisplay) {
        numberOfRowsToDisplay = len;
    }
    for (var i = 0; i < numberOfRowsToDisplay; i++) {
        var documentItemHTML = RenderDocumentListItem(rows[i]);

        ret.push(documentItemHTML);
    }
    var container = "<div id='docListContainer' class='ms-mrudocs-webpartbody'>";

    container += ret.join('');
    container += "</div>";
    return container;
}
function RenderDocumentListItem(row) {
    var fileName = STSHtmlEncode(row.FileName);
    var documentUrl = STSHtmlEncode(row.LinkLocation);
    var isPinned = row.IsPinned == "True";
    var iconUrl = row.IconUrl;
    var documentItemHTML;

    documentItemHTML = "<div class='ms-mrudocs-itemscontainer'>";
    documentItemHTML += "<div>";
    documentItemHTML += "<div class='ms-displayInlineBlock ms-mrudocs-documenticon' ><img src='" + iconUrl + "'></div>";
    documentItemHTML += "<div  class='ms-displayInlineBlock ms-textSmall ms-noWrap ms-mrudocs-documentname' title='" + fileName + '&#10;' + documentUrl + "'><a class='ms-listlink' href='" + documentUrl + "'>" + fileName + "</a></div>";
    if (isPinned) {
        documentItemHTML += "<div class='ms-displayInlineBlock ms-mrudocs-pinnedicon-container'>";
        documentItemHTML += "<img class='ms-mrudocs-pinnedicon' src='" + "/_layouts/15/" + "images/spcommon.png'>";
        documentItemHTML += "</div>";
    }
    documentItemHTML += "</div>";
    documentItemHTML += "</div>";
    return documentItemHTML;
}
function GetCurrentUserId() {
    var retVal = null;

    if (_spPageContextInfo != null) {
        retVal = _spPageContextInfo.systemUserKey;
    }
    return retVal;
}
function GetMruDocsItemsFromCache(localStorageCacheTTL) {
    var docItemsJson = null;
    var docItemsJsonIsStale = true;

    if (!IsNullOrUndefined(window.localStorage)) {
        if (GetCurrentUserId() == window.localStorage.SPMruDocsItemsUserId) {
            docItemsJson = window.localStorage.SPMruDocsItemsJson;
            var docItemsDate = Date.parse(window.localStorage.SPMruDocsItemsDate);

            docItemsJsonIsStale = !(docItemsDate > 0) || (new Date()).getTime() - docItemsDate > localStorageCacheTTL * 1000;
        }
    }
    if (docItemsJsonIsStale) {
        ClearMruDocsItemsCache();
        return null;
    }
    else {
        return eval('(' + docItemsJson + ')');
    }
}
function RenderLoadingBody() {
    var loadingBodyHTML;

    loadingBodyHTML = "<div class='ms-mrudocs-webpartbody ms-mrudocs-itemscontainer'>";
    loadingBodyHTML += "<div class='ms-displayInlineBlock ms-mrudocs-documenticon'><img src='" + "/_layouts/15/" + "images/loadingcirclests16.gif'></div>";
    loadingBodyHTML += "<div class='ms-displayInlineBlock ms-metadata ms-mrudocs-loadingmessage'>";
    loadingBodyHTML += STSHtmlEncode(Strings.STS.L_Loading_Text);
    loadingBodyHTML += "</div></div>";
    return loadingBodyHTML;
}
function RenderEmptyOrErrorBody() {
    var emptyListHTML;

    emptyListHTML = "<div class='ms-mrudocs-webpartbody ms-mrudocs-itemscontainer'>";
    emptyListHTML += "<div class='ms-displayInlineBlock ms-metadata'>";
    emptyListHTML += STSHtmlEncode(Strings.STS.L_MruDocs_ErrorMessage);
    emptyListHTML += "</div></div>";
    return emptyListHTML;
}
function CacheMruDocsItems(docItemsJson) {
    try {
        JSON.parse(docItemsJson);
    }
    catch (ex) {
        return false;
    }
    if (!IsNullOrUndefined(window.localStorage)) {
        TrySetProperty(window.localStorage, "SPMruDocsItemsJson", docItemsJson);
        TrySetProperty(window.localStorage, "SPMruDocsItemsDate", new Date());
        TrySetProperty(window.localStorage, "SPMruDocsItemsUserId", GetCurrentUserId());
        return true;
    }
    return false;
}
function ClearMruDocsItemsCache() {
    if (!IsNullOrUndefined(window.localStorage)) {
        window.localStorage.removeItem("SPMruDocsItemsJson");
        window.localStorage.removeItem("SPMruDocsItemsDate");
        window.localStorage.removeItem("SPMruDocsItemsUserId");
    }
}
$_global_mrudocs();
