function $_global_mysiterecommendations() {
    MyRecs = function() {
    };
    MyRecs.ItemTemplateId = 'ProjectItem';
    MyRecs.GroupTemplateId = '~sitecollection/_catalogs/masterpage/Display Templates/Content Web Parts/Group_Content.js';
    MyRecs.RenderTemplateId = 'ProjectCBSResult';
    MyRecs.ListDataJSONGroupsKey = 'ResultTables';
    MyRecs.ListDataJSONItemsKey = 'ResultRows';
    MyRecs.IsNullOrUndefined = SP.ScriptUtility.isNullOrUndefined;
    MyRecs.IsNullOrEmpty = SP.ScriptUtility.isNullOrEmptyString;
    MyRecs.ImagesFolder = "/_layouts/15/" + 'images/';
    MyRecs.FollowIcon = GetThemedImageUrl('socialcommon.png');
    MyRecs.StopFollowIcon = GetThemedImageUrl('socialcommon.png');
    MyRecs.LoadingIcon = "/_layouts/15/" + 'images/' + 'loading.gif';
    MyRecs.TableType = 'TableType';
    MyRecs.HtmlEncode = SP.Utilities.HttpUtility.htmlEncode;
    MyRecs.Result = null;
    MyRecs.Basic_SlowFade = 19;
    MyRecs.SavedPreviousWidth = null;
    MyRecs.SavedQueryInfo = null;
    MyRecs.Trace = function(method, message) {
        message = '[' + method + '][' + message + ']';
        Sys.Debug.trace(message);
    };
    MyRecs.Trace('MyRecs', 'MySiteRecommendations.js loading');
    MyRecs.QueryInfo = function MyRecs_QueryInfo() {
    };
    MyRecs.QueryInfo.prototype = {
        QueryInfoExists: false,
        Category: 0,
        ExpertiseTags: null,
        InterestTags: null,
        SuggestedTags: null,
        FollowedUrls: null
    };
    MyRecs.CacheBlob = function MyRecs_CacheBlob() {
    };
    MyRecs.CacheBlob.prototype = {
        QueryInfo: null,
        Query: null,
        FillInQuery: null,
        SortBy: null,
        FillInSortBy: null,
        Result: null,
        DateCached: null
    };
    MyRecs.GetResultDiv = function() {
        return MyRecs.GetTopLevelElement('_resultDiv');
    };
    MyRecs.GetItemsDiv = function() {
        return MyRecs.GetTopLevelElement('_groupDiv');
    };
    MyRecs.GetNextUniqueId = function() {
        if (typeof MyRecs.GetNextUniqueId.CurrentId == "undefined") {
            MyRecs.GetNextUniqueId.CurrentId = 0;
        }
        else {
            MyRecs.GetNextUniqueId.CurrentId++;
        }
        return MyRecsVariables.UserControlClientID + '_' + String(MyRecs.GetNextUniqueId.CurrentId);
    };
    MyRecs.GetImageUrl = function(imageName) {
        return MyRecs.ImagesFolder + imageName;
    };
    MyRecs.GetItemIconVisibility = function(category) {
        return MyRecsVariables.Category == 0 ? '' : 'ms-hide';
    };
    MyRecs.GetFriendlyNameForFileExtension = function(fileExtension) {
        if (!MyRecs.IsNullOrWhitespace(fileExtension)) {
            fileExtension = fileExtension.toLowerCase();
            if (fileExtension === 'css') {
                return 'file_CSS';
            }
            else if (fileExtension === 'hlp') {
                return 'file_Help';
            }
            else if (fileExtension === 'msi' || fileExtension === 'msp') {
                return 'file_Installer';
            }
            else if (fileExtension === 'js' || fileExtension === 'jse') {
                return 'file_JavaScript';
            }
            else if (fileExtension === 'log') {
                return 'file_Log';
            }
            else if (fileExtension === 'eml' || fileExtension === 'msg') {
                return 'file_Mail';
            }
            else if (fileExtension === 'accdb' || fileExtension === 'accdt' || fileExtension === 'accdc' || fileExtension === 'accde' || fileExtension === 'accdr') {
                return 'file_Access';
            }
            else if (fileExtension === 'odc' || fileExtension === 'xls' || fileExtension === 'xlsb' || fileExtension === 'xlsm' || fileExtension === 'xlsx' || fileExtension === 'xlt' || fileExtension === 'xltb' || fileExtension === 'xltm' || fileExtension === 'xltx') {
                return 'file_Excel';
            }
            else if (fileExtension === 'xsn') {
                return 'file_InfoPath';
            }
            else if (fileExtension === 'one' || fileExtension === 'onepkg' || fileExtension === 'onetoc2') {
                return 'file_OneNote';
            }
            else if (fileExtension === 'pot' || fileExtension === 'potm' || fileExtension === 'potx' || fileExtension === 'pps' || fileExtension === 'ppsm' || fileExtension === 'ppsx' || fileExtension === 'ppt' || fileExtension === 'pptm' || fileExtension === 'pptx') {
                return 'file_PowerPoint';
            }
            else if (fileExtension === 'mpp' || fileExtension === 'mpt') {
                return 'file_Project';
            }
            else if (fileExtension === 'pub') {
                return 'file_Publisher';
            }
            else if (fileExtension === 'ascx' || fileExtension === 'master') {
                return 'file_SPDesigner';
            }
            else if (fileExtension === 'vdw' || fileExtension === 'vdx' || fileExtension === 'vsd' || fileExtension === 'vsl' || fileExtension === 'vss' || fileExtension === 'vst' || fileExtension === 'vsu' || fileExtension === 'vsw' || fileExtension === 'vsx' || fileExtension === 'vtx' || fileExtension == "vsdm" || fileExtension == "vsdx" || fileExtension == "vssm" || fileExtension == "vssx" || fileExtension == "vstm" || fileExtension == "vstx") {
                return 'file_Visio';
            }
            else if (fileExtension === 'doc' || fileExtension === 'docm' || fileExtension === 'docx' || fileExtension === 'dot' || fileExtension === 'dotm' || fileExtension === 'dotx' || fileExtension === 'mht' || fileExtension === 'mhtml') {
                return 'file_Word';
            }
            else if (fileExtension === 'xps') {
                return 'file_XPS';
            }
            else if (fileExtension === 'wm' || fileExtension === 'wma' || fileExtension === 'wmd' || fileExtension === 'wmp' || fileExtension === 'wms' || fileExtension === 'wmv' || fileExtension === 'wmx' || fileExtension === 'wmz') {
                return 'file_Audio';
            }
            else if (fileExtension === 'rtf') {
                return 'file_RTF';
            }
            else if (fileExtension === 'txt') {
                return 'file_Text';
            }
            else if (fileExtension === 'ascx' || fileExtension === 'asp' || fileExtension === 'aspx' || fileExtension === 'htm' || fileExtension === 'html' || fileExtension === 'jhtml' || fileExtension === 'js' || fileExtension === 'mht' || fileExtension === 'mhtml' || fileExtension === 'mspx' || fileExtension === 'php') {
                return 'file_WebPage';
            }
            else if (fileExtension === 'xml') {
                return 'file_XML';
            }
            else if (fileExtension === 'xsl' || fileExtension === 'xslt') {
                return 'file_XSL';
            }
            else if (fileExtension === 'zip') {
                return 'file_Zip';
            }
            else if (fileExtension === 'pdf') {
                return 'file_PDF';
            }
        }
        return 'file_Document';
    };
    MyRecs.GetIconUrlByFileExtension = function(item) {
        if (item && typeof item['FileExtension'] != 'undefined' && item['FileExtension'] != null) {
            var fileExtension = item['FileExtension'];
            var fileType = MyRecs.GetFriendlyNameForFileExtension(fileExtension.toString());

            if (fileType === 'file_Word') {
                return MyRecs.GetImageUrl('icdocx.png');
            }
            else if (fileType === 'file_PowerPoint') {
                return MyRecs.GetImageUrl('icpptx.png');
            }
            else if (fileType === 'file_Excel') {
                return MyRecs.GetImageUrl('icxlsx.png');
            }
            else if (fileType === 'file_OneNote') {
                return MyRecs.GetImageUrl('icone.png');
            }
            else if (fileType === 'file_Visio') {
                return MyRecs.GetImageUrl('icvisiogeneric.png');
            }
            else if (fileType === 'file_InfoPath') {
                return MyRecs.GetImageUrl('icinfopathgeneric.png');
            }
            else if (fileType === 'file_Access') {
                return MyRecs.GetImageUrl('icaccdb.png');
            }
            else if (fileType === 'file_Publisher') {
                return MyRecs.GetImageUrl('icpub.png');
            }
            else if (fileType === 'file_PDF') {
                return MyRecs.GetImageUrl('icpdf.png');
            }
            else if (fileType === 'file_Text') {
                return MyRecs.GetImageUrl('ictxt.gif');
            }
            else if (fileType === 'file_WebPage') {
                return MyRecs.GetImageUrl('html16.png');
            }
        }
        return MyRecs.GetImageUrl('lg_icgen.gif');
    };
    MyRecs.AllowedProtocols = ['http://', 'https://', 'file://', 'file:\\\\', 'ftp://', 'mailto:', 'news:', 'nntp:', 'rtsp://', 'tel:', 'pnm://', 'mms://'];
    MyRecs.EnsureAllowedProtocol = function(value) {
        if (MyRecs.IsProtocolAllowed(value, true, MyRecs.AllowedProtocols)) {
            return value;
        }
        return '';
    };
    MyRecs.IsProtocolAllowed = function(value, allowRelativeUrl, protocols) {
        if (MyRecs.IsNullOrEmpty(value)) {
            if (allowRelativeUrl) {
                return true;
            }
            else {
                return false;
            }
        }
        value = (value.split('?'))[0];
        var colonIndex = value.indexOf(':');

        if (colonIndex === -1) {
            if (allowRelativeUrl) {
                return true;
            }
            else {
                return false;
            }
        }
        value = (value.toLowerCase()).trimStart();
        for (var i = 0; i < protocols.length; i++) {
            if (value.startsWith(protocols[i])) {
                return true;
            }
        }
        return false;
    };
    MyRecs.TruncateEnd = function(original, maxChars) {
        if (original == null) {
            return '';
        }
        if (original.length <= maxChars) {
            return original;
        }
        return original.substring(0, maxChars - 3) + '...';
    };
    MyRecs.TruncateUrl = function(url, maxChars) {
        if (url == null || url.length == 0) {
            return url;
        }
        var slash = '/';
        var ellipsis = '\ufffd';

        if (url.substring(url.length - 1, 1) === slash) {
            url = url.substring(0, url.length - 1);
        }
        var len = url.length;

        if (len <= maxChars) {
            return url;
        }
        var splitUrl = url.split('/');
        var leftIdx = 0;
        var firstTerm = splitUrl[leftIdx];
        var minMidTerm = ellipsis + slash;
        var minEndTerm = ellipsis;

        if (splitUrl.length === 2) {
            minMidTerm = '';
        }
        else if (splitUrl.length === 1) {
            return MyRecs.TruncateEnd(firstTerm, maxChars);
        }
        firstTerm = MyRecs.TruncateEnd(firstTerm, maxChars - (slash.length + minMidTerm.length + minEndTerm.length)) + slash;
        var rightIdx = splitUrl.length - 1;
        var lastTerm = splitUrl[rightIdx];
        var unusedLen = maxChars - firstTerm.length;

        lastTerm = MyRecs.TruncateEnd(lastTerm, unusedLen - minMidTerm.length);
        leftIdx++;
        rightIdx--;
        unusedLen = unusedLen - lastTerm.length;
        while (rightIdx >= leftIdx) {
            var termAdded = false;
            var leftTerm = splitUrl[leftIdx];

            if (leftTerm.length <= unusedLen - minMidTerm.length) {
                firstTerm = firstTerm + leftTerm + slash;
                unusedLen = unusedLen - (leftTerm.length + slash.length);
                leftIdx++;
                termAdded = true;
            }
            if (leftIdx === rightIdx) {
                return firstTerm + lastTerm;
            }
            var rightTerm = splitUrl[rightIdx];

            if (rightTerm.length <= unusedLen - minMidTerm.length) {
                lastTerm = rightTerm + slash + lastTerm;
                unusedLen = unusedLen - (rightTerm.length + slash.length);
                rightIdx--;
                termAdded = true;
            }
            if (!termAdded) {
                break;
            }
        }
        var trunc = firstTerm + minMidTerm + lastTerm;

        return trunc.replace(new RegExp(ellipsis, 'g'), '...');
    };
    MyRecs.IsTableTypeof = function(resultTable, tableTypeName) {
        if (!MyRecs.IsNullOrUndefined(resultTable)) {
            var tableTypeProp = resultTable[MyRecs.TableType];

            if (!MyRecs.IsNullOrEmpty(tableTypeProp) && !MyRecs.IsNullOrEmpty(tableTypeName)) {
                if (tableTypeName === tableTypeProp) {
                    return true;
                }
            }
        }
        return false;
    };
    MyRecs.GetRenderTemplateByName = function(templateName, renderCtx) {
        if (MyRecs.IsNullOrWhitespace(templateName)) {
            return '';
        }
        if (templateName == 'ProjectItem') {
            return '<# if(!MyRecs.IsNullOrUndefined(ctx.CurrentItem)){' + 'var itemId = MyRecs.GetNextUniqueId();' + 'var itemFollowLinkId = itemId + "_followLink";' + 'var controlId = MyRecsVariables.UserControlClientID;' + '#>' + '<div id="<#= itemId #>_itemDiv" name="Item" class="ms-recs-item ms-fullWidth ms-hide" onmouseover="" onmouseout="">' + '<# ' + 'var urlChars = document.getElementById(controlId + "_urlLengthDiv").innerHTML;' + 'var title = MyRecs.HtmlEncode(ctx.CurrentItem.Title);' + '#>' + '<div>' + '<div class="ms-floatLeft ms-recs-iconsDiv">' + '<a id="<#= itemId #>_imageLink" href="<#= MyRecs.UrlHtmlEncode(ctx.CurrentItem.Path) #>" title="<#= title #>" tabIndex="-1">' + '<img class="ms-recs-icon <#= MyRecs.GetItemIconVisibility(MyRecsVariables.Category) #>" src="<#= MyRecs.UrlHtmlEncode(MyRecs.GetIconUrlByFileExtension(ctx.CurrentItem)) #>"/>' + '</a>' + '</div>' + '<div>' + '<a id="<#= itemId #>_titleLink" class="ms-textLarge ms-noWrap ms-displayBlock ms-recs-titleLink" href="<#= MyRecs.UrlHtmlEncode(ctx.CurrentItem.Path) #>" title="<#= title #>">' + '<#= title #>' + '</a>' + '</div>' + '</div>' + '<div id="<#= itemId #>_pathDiv" class="ms-noWrap ms-metadata" title="<#= MyRecs.HtmlEncode(ctx.CurrentItem.Path) #>">' + '<#= MyRecs.TruncateUrl(decodeURI(ctx.CurrentItem.Path), urlChars) #>' + '</div>' + '<div>' + '<a id="<#= itemFollowLinkId #>" class="ms-recs-followLink" ' + 'onclick=\'MyRecs.FollowOrUnFollow("<#= ctx.CurrentItem.Path #>", "<#= itemFollowLinkId #>", MyRecsVariables.Category); return false;\'' + 'href=\'#\' ' + 'title="<#= MyRecsVariables.FollowText #>">' + '<div>' + '<span class="ms-contentFollowing-followingSpan ms-floatLeft">' + '<img class="ms-contentFollowing-notFollowingImg" title="<#= MyRecsVariables.FollowText #>" alt="<#= MyRecsVariables.FollowText #>" src="<#= MyRecs.FollowIcon #>"/>' + '</span>' + '<div class="ms-floatLeft ms-secondaryCommandLink"><#= MyRecsVariables.FollowText #></div>' + '</div>' + '</a>' + '</div>' + '</div>' + '<# } #>';
        }
        else if (templateName == 'ProjectCBSResult') {
            return '<#' + 'var controlId = MyRecsVariables.UserControlClientID;' + '#>' + '<div id="<#= controlId #>_groupsDiv" name="Control">' + '<div id="<#= controlId #>_groupDiv">' + '<#' + 'MyRecs.SetContextVariablesForRenderItems(ctx);' + '#>' + '<#= ctx.RenderItems(ctx) #>' + '</div>' + '<div style="display:none" id="<#= controlId #>_hiddenTimestampDiv" ><#= new Date().getTime() #></div>' + '</div>';
        }
        var templateNotFoundMessage = String.format('Template "{0}" not found or has syntax errors.', SP.Utilities.HttpUtility.htmlEncode(templateName));

        MyRecs.Trace('GetRenderTemplateByName', templateNotFoundMessage);
        MyRecs.LogRenderingErrorMessageToContext(renderCtx, templateNotFoundMessage);
        return templateNotFoundMessage;
    };
    MyRecs.ResolveRenderTemplate = function(renderCtx, component, level) {
        if (MyRecs.IsNullOrUndefined(renderCtx) || MyRecs.IsNullOrEmpty(level)) {
            MyRecs.Trace('MyRecs.ResolveRenderTemplate', String.format('Empty template returned for level "{0}" because render context or level is empty.', level));
            return '';
        }
        if (level === 'Item') {
            return MyRecs.GetRenderTemplateByName(MyRecs.ItemTemplateId, renderCtx);
        }
        else if (level === 'Group') {
            return MyRecs.GetRenderTemplateByName(MyRecs.GroupTemplateId, renderCtx);
        }
        else if (level === 'View') {
            return MyRecs.GetRenderTemplateByName(MyRecs.RenderTemplateId, renderCtx);
        }
        MyRecs.Trace('MyRecs.ResolveRenderTemplate', String.format('Empty template returned for level "{0}"', level));
        return '';
    };
    MyRecs.AppendArray = function(a, item) {
        if (!MyRecs.IsNullOrUndefined(a)) {
            a.push(item);
        }
    };
    MyRecs.LogRenderingErrorMessageToContext = function(renderCtx, messageText) {
        if (MyRecs.IsNullOrUndefined(renderCtx)) {
            return;
        }
        var errorsList = renderCtx['Errors'];

        if (MyRecs.IsNullOrUndefined(errorsList)) {
            errorsList = [];
            renderCtx['Errors'] = errorsList;
        }
        MyRecs.AppendArray(errorsList, messageText);
    };
    MyRecs.SetContextVariablesForRenderItems = function(renderCtx) {
        renderCtx['ListDataJSONGroupsKey'] = MyRecs.ListDataJSONGroupsKey;
        renderCtx['ListDataJSONItemsKey'] = MyRecs.ListDataJSONItemsKey;
        renderCtx['CurrentItems'] = MyRecs.GetRelevantResultsItems(renderCtx['ListData']);
    };
    MyRecs.UrlHtmlEncode = function(str) {
        return MyRecs.HtmlEncode(MyRecs.EnsureAllowedProtocol(str));
    };
    MyRecs.IsNullOrWhitespace = function(str) {
        if (MyRecs.IsNullOrUndefined(str)) {
            return true;
        }
        else {
            return MyRecs.IsNullOrEmpty(str.trim());
        }
    };
    MyRecs.GetQueryInfo = function() {
        return MyRecs.SavedQueryInfo;
    };
    MyRecs.ShowOrHideUnderlineImmediate = function(element, show) {
        if (show) {
            element.className = element.className.replace('ms-recs-noUnderline', 'ms-recs-underline');
        }
        else {
            element.className = element.className.replace('ms-recs-underline', 'ms-recs-noUnderline');
        }
    };
    MyRecs.ShowOrHideElementImmediate = function(element, show) {
        if (show) {
            element.className = element.className.replace('ms-hide', 'ms-displayBlock');
        }
        else {
            element.className = element.className.replace('ms-displayBlock', 'ms-hide');
        }
    };
    MyRecs.GetTopLevelElement = function(idPostfix) {
        return document.getElementById(MyRecsVariables.UserControlClientID + idPostfix);
    };
    MyRecs.GetTopLevelElementsWhoseVisibilityNeedsChanging = function(idPostfixes, show) {
        var elementsToChange = [];

        for (var i = 0; i < idPostfixes.length; i++) {
            var idPostfix = idPostfixes[i];
            var element = MyRecs.GetTopLevelElement(idPostfix);
            var isHidden = MyRecs.IsElementHidden(element);

            if (show == isHidden) {
                elementsToChange.push(element);
            }
        }
        return elementsToChange;
    };
    MyRecs.ShowOrHideTopLevelElements = function(idPostfixes, show, onCompleted) {
        MyRecs.Trace('MyRecs.ShowOrHideTopLevelElements', String(idPostfixes) + ' - show ' + String(show));
        var elementsToChange = MyRecs.GetTopLevelElementsWhoseVisibilityNeedsChanging(idPostfixes, show);

        if (elementsToChange.length > 0) {
            MyRecs.ShowOrHideElements(elementsToChange, show, onCompleted);
        }
        else if (onCompleted != null) {
            onCompleted();
        }
    };
    MyRecs.GetRelevantResultsTable = function(listData) {
        var groupsKey = MyRecs.ListDataJSONGroupsKey;

        if (MyRecs.IsNullOrUndefined(groupsKey)) {
            return null;
        }
        if (MyRecs.IsNullOrUndefined(listData)) {
            return null;
        }
        var resultTables = listData[groupsKey];

        if (MyRecs.IsNullOrUndefined(resultTables)) {
            return null;
        }
        for (var i = 0; i < resultTables.length; i++) {
            var resultTable = resultTables[i];

            if (MyRecs.IsTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults)) {
                return resultTable;
            }
        }
        return null;
    };
    MyRecs.GetRelevantResultsItems = function(listData) {
        var itemsKey = MyRecs.ListDataJSONItemsKey;

        if (MyRecs.IsNullOrUndefined(itemsKey)) {
            return null;
        }
        var resultTable = MyRecs.GetRelevantResultsTable(listData);

        if (MyRecs.IsNullOrUndefined(resultTable)) {
            return null;
        }
        var resultRows = resultTable[itemsKey];

        if (MyRecs.IsNullOrUndefined(resultRows)) {
            return null;
        }
        return resultRows;
    };
    MyRecs.GetResultCount = function(listData) {
        var resultRows = MyRecs.GetRelevantResultsItems(listData);

        if (MyRecs.IsNullOrUndefined(resultRows)) {
            return 0;
        }
        return resultRows.length;
    };
    MyRecs.AddRenderContextCallback = function(callbackName, callbackFunction, renderCtx) {
        var initArray = [];

        if (!MyRecs.IsNullOrUndefined(renderCtx[callbackName])) {
            if (typeof renderCtx[callbackName] == 'function') {
                initArray.push(renderCtx[callbackName]);
            }
            else {
                for (var f in renderCtx[callbackName]) {
                    if (typeof renderCtx[callbackName][f] == 'function') {
                        initArray.push(renderCtx[callbackName][f]);
                    }
                }
            }
        }
        initArray.push(callbackFunction);
        renderCtx[callbackName] = initArray;
    };
    MyRecs.IsElementHidden = function(element) {
        if (MyRecs.IsNullOrUndefined(window.getComputedStyle)) {
            return element.currentStyle.display == 'none';
        }
        return (getComputedStyle(element, null)).display == 'none';
    };
    MyRecs.GetContiguousVerticallyStackedElementsWidth = function(elements, hidden) {
        if (MyRecs.IsNullOrUndefined(elements) || elements.length == 0) {
            return 0;
        }
        var parentElement = elements[0].parentNode;
        var collectiveWidth = 0;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (hidden) {
                MyRecs.ShowOrHideElementImmediate(element, true);
                collectiveWidth = Math.max(collectiveWidth, element.clientWidth);
                MyRecs.ShowOrHideElementImmediate(element, false);
            }
            else {
                collectiveWidth = Math.max(collectiveWidth, element.clientWidth);
            }
        }
        return collectiveWidth;
    };
    MyRecs.GetContiguousVerticallyStackedElementsHeight = function(elements, hidden) {
        if (MyRecs.IsNullOrUndefined(elements) || elements.length == 0) {
            return 0;
        }
        var parentElement = elements[0].parentNode;
        var collectiveHeight = 0;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (hidden) {
                MyRecs.ShowOrHideElementImmediate(element, true);
                collectiveHeight += element.clientHeight;
                MyRecs.ShowOrHideElementImmediate(element, false);
            }
        }
        return collectiveHeight;
    };
    MyRecs.ShowOrHideContiguousVerticallyStackedElements = function(elements, show) {
        MyRecs.Trace('MyRecs.ShowOrHideContiguousVerticallyStackedElements', 'element count ' + String(elements.length) + ' show ' + String(show));
        if (elements.length == 0) {
            return;
        }
        var collectiveWidth = MyRecs.GetContiguousVerticallyStackedElementsWidth(elements, show);
        var collectiveHeight = MyRecs.GetContiguousVerticallyStackedElementsHeight(elements, show);
        var parentElement = elements[0].parentNode;
        var fillerDiv = document.createElement("div");

        if (show) {
            fillerDiv.style.height = "0px";
            fillerDiv.style.width = "0px";
            if (!MyRecs.IsNullOrUndefined(MyRecs.SavedPreviousWidth)) {
                fillerDiv.style.width = String(MyRecs.SavedPreviousWidth) + "px";
                MyRecs.SavedPreviousWidth = null;
            }
        }
        else {
            fillerDiv.style.height = String(collectiveHeight) + "px";
            fillerDiv.style.width = String(collectiveWidth) + "px";
        }
        if (!show) {
            MyRecs.ShowOrHideElements(elements, false, function() {
                parentElement.insertBefore(fillerDiv, elements[0]);
                SPAnimationUtility.BasicAnimator.Resize(fillerDiv, 0, 0, function() {
                    parentElement.removeChild(fillerDiv);
                }, null);
            });
        }
        else {
            parentElement.insertBefore(fillerDiv, elements[0]);
            SPAnimationUtility.BasicAnimator.Resize(fillerDiv, collectiveHeight, collectiveWidth, function() {
                parentElement.removeChild(fillerDiv);
                MyRecs.ShowOrHideElements(elements, true, null);
            }, null);
        }
    };
    MyRecs.ShowOrHideElements = function(elements, show, onCompleted) {
        if (elements.length == 0) {
            return;
        }
        var states = new Array(0);
        var elementsToAnimate = new Array(0);
        var action = SPAnimation.ID.Basic_SlowShow;
        var onCompletedNew = onCompleted;

        if (!show) {
            onCompletedNew = function() {
                for (var j = 0; j < elements.length; j++) {
                    MyRecs.ShowOrHideElementImmediate(elements[j], show);
                }
                if (onCompleted != null) {
                    onCompleted();
                }
            };
        }
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var state = new SPAnimation.State();

            if (show) {
                state.SetAttribute(SPAnimation.Attribute.Opacity, 1);
                SetOpacity(element, 0);
            }
            else {
                action = MyRecs.Basic_SlowFade;
                state.SetAttribute(SPAnimation.Attribute.Opacity, 0);
            }
            if (show) {
                MyRecs.ShowOrHideElementImmediate(element, show);
            }
            elementsToAnimate[i] = element;
            states[i] = state;
        }
        var o = new SPAnimation.Object(action, 0, elementsToAnimate, states, onCompletedNew, null);

        o.RunAnimation();
    };
    MyRecs.GetItemByIndex = function(itemIndex) {
        MyRecs.Trace('MyRecs.GetItemByIndex', 'getting item: ' + String(itemIndex));
        var parentDiv = MyRecs.GetItemsDiv();

        if (parentDiv == null) {
            MyRecs.Trace('MyRecs.GetItemByIndex', 'failed to find group div');
            return null;
        }
        if (parentDiv.children.length <= itemIndex) {
            MyRecs.Trace('MyRecs.GetItemByIndex', 'index out of range');
            return null;
        }
        return parentDiv.children[itemIndex];
    };
    MyRecs.ShowOrHideItem = function(itemIndex, show) {
        var itemDiv = MyRecs.GetItemByIndex(itemIndex);

        MyRecs.ShowOrHideElements([itemDiv], show, null);
    };
    MyRecs.Refresh = function() {
        var refreshDiv = MyRecs.GetTopLevelElement('_refreshDiv');

        if (MyRecs.IsNullOrUndefined(refreshDiv.disabled) || refreshDiv.disabled == false) {
            if (typeof MyRecs.Refresh.SavedOnClickValue == "undefined") {
                MyRecs.Refresh.SavedOnClickValue = refreshDiv.onclick;
            }
            refreshDiv.onclick = null;
            refreshDiv.disabled = true;
            refreshDiv.className = refreshDiv.className + ' ms-recs-disabled';
            MyRecs.Trace('MyRecs.Refresh', 're-fetching cache blob');
            var afterRefresh = function(cacheBlob) {
                MyRecs.AfterCacheBlobFetched(cacheBlob);
                refreshDiv.onclick = MyRecs.Refresh.SavedOnClickValue;
                refreshDiv.disabled = false;
                refreshDiv.className = refreshDiv.className.replace(' ms-recs-disabled', '');
            };
            var itemsDiv = MyRecs.GetItemsDiv();

            if (!MyRecs.IsNullOrUndefined(itemsDiv)) {
                MyRecs.SavedPreviousWidth = MyRecs.GetContiguousVerticallyStackedElementsWidth(itemsDiv.children, false);
            }
            else {
                MyRecs.SavedPreviousWidth = 0;
            }
            var resultsDiv = MyRecs.GetResultDiv();
            var fillerDiv = document.createElement("div");

            fillerDiv.style.height = "0px";
            fillerDiv.style.width = String(resultsDiv.clientWidth) + "px";
            itemsDiv.appendChild(fillerDiv);
            MyRecs.HideEverythingButHeader(function() {
                MyRecs.ShowOrHideTopLevelElements(['_processingDiv'], true, function() {
                    MyRecs.GetSPersonaliteUrlAndCacheBlobAndPopulateDebugDivs(true, afterRefresh);
                });
            });
        }
    };
    MyRecs.ShowLessItems = function() {
        if (MyRecsVariables.DisplayResultCount > MyRecsVariables.MoreResultsIncrement) {
            MyRecsVariables.DisplayResultCount -= MyRecsVariables.MoreResultsIncrement;
            MyRecs.RefreshItemsDisplay();
        }
    };
    MyRecs.ShowMoreItems = function() {
        MyRecsVariables.DisplayResultCount += MyRecsVariables.MoreResultsIncrement;
        MyRecs.RefreshItemsDisplay();
    };
    MyRecs.HideEverythingButHeader = function(onCompleted) {
        var elementsToHide = MyRecs.GetTopLevelElementsWhoseVisibilityNeedsChanging(['_noItemsDiv', '_emptyStateDiv', '_showMoreLink', '_showLessLink', '_betweenShowMoreAndShowLessSpan'], false);
        var resultRows = MyRecs.GetRelevantResultsItems(MyRecs.Result);
        var itemsCount = 0;

        if (!MyRecs.IsNullOrUndefined(resultRows)) {
            itemsCount = resultRows.length;
        }
        for (var i = 0; i < itemsCount; i++) {
            var item = MyRecs.GetItemByIndex(i);

            if (!MyRecs.IsNullOrUndefined(item) && !MyRecs.IsElementHidden(item)) {
                elementsToHide.push(item);
            }
        }
        if (elementsToHide.length > 0) {
            MyRecs.ShowOrHideElements(elementsToHide, false, onCompleted);
        }
        else {
            onCompleted();
        }
    };
    MyRecs.RefreshItemsDisplay = function() {
        var itemShown = false;
        var resultRows = MyRecs.GetRelevantResultsItems(MyRecs.Result);
        var queryInfo = MyRecs.GetQueryInfo();
        var itemsCount = 0;

        if (MyRecs.IsNullOrUndefined(resultRows)) {
            MyRecs.Trace('MyRecs.RefreshItemsDisplay', 'could not find relevant results table');
        }
        else {
            itemsCount = resultRows.length;
        }
        var visibleItemsCount = 0;
        var hiddenItemsToShow = new Array(0);
        var shownItemsToHide = new Array(0);
        var haveMore = false;

        for (var itemIndex = 0; itemIndex < itemsCount; itemIndex++) {
            var url = MyRecs.HtmlEncode(resultRows[itemIndex].Path);

            if (!MyRecs.IsNullOrEmpty(url)) {
                var urls = queryInfo.get_followedUrls();
                var loweredUrl = escapeProperlyCore(url, true);

                loweredUrl = loweredUrl.toLowerCase();
                var needsHide = false;

                if (!loweredUrl.endsWith('/')) {
                    loweredUrl = loweredUrl + '/';
                }
                for (var urlIndex = 0; urlIndex < urls.length; urlIndex++) {
                    var otherLoweredUrl = urls[urlIndex].toLowerCase();

                    if (!otherLoweredUrl.endsWith('/')) {
                        otherLoweredUrl = otherLoweredUrl + '/';
                    }
                    if (loweredUrl == otherLoweredUrl) {
                        MyRecs.Trace('MyRecs.RefreshItemsDisplay', 'item is a followed url: ' + String(itemIndex) + ' ' + url);
                        needsHide = true;
                        break;
                    }
                }
                if (visibleItemsCount >= MyRecsVariables.DisplayResultCount) {
                    MyRecs.Trace('MyRecs.RefreshItemsDisplay', 'visible items count exceeded, hiding item ' + String(itemIndex) + ' ' + url);
                    if (!needsHide) {
                        haveMore = true;
                    }
                    needsHide = true;
                }
                var item = MyRecs.GetItemByIndex(itemIndex);

                if (needsHide) {
                    if (!MyRecs.IsElementHidden(item)) {
                        shownItemsToHide.push(item);
                    }
                }
                else {
                    visibleItemsCount++;
                    if (MyRecs.IsElementHidden(item)) {
                        hiddenItemsToShow.push(item);
                    }
                }
            }
        }
        MyRecs.ShowOrHideElementImmediate(MyRecs.GetTopLevelElement('_processingDiv'), false);
        MyRecs.ShowOrHideContiguousVerticallyStackedElements(hiddenItemsToShow, true);
        MyRecs.ShowOrHideContiguousVerticallyStackedElements(shownItemsToHide, false);
        var showEmptyState = visibleItemsCount == 0 && !MyRecs.IsNullOrUndefined(queryInfo) && !queryInfo.get_queryInfoExists() && queryInfo.get_category() == 1;
        var showNoItems = visibleItemsCount == 0 && !showEmptyState;
        var showShowMore = haveMore && visibleItemsCount < MyRecsVariables.MaxResultsToShow;
        var showShowLess = visibleItemsCount > MyRecsVariables.MoreResultsIncrement;
        var showMoreLessDivider = showShowMore && showShowLess;
        var itemsToShow = [];

        if (showEmptyState) {
            itemsToShow.push('_emptyStateDiv');
            MyRecs.ShowOrHideUnderlineImmediate(MyRecs.GetTopLevelElement('_titleDiv'), false);
        }
        else {
            MyRecs.ShowOrHideUnderlineImmediate(MyRecs.GetTopLevelElement('_titleDiv'), true);
        }
        if (showNoItems) {
            itemsToShow.push('_noItemsDiv');
        }
        if (showShowMore) {
            itemsToShow.push('_showMoreLink');
        }
        if (showShowLess) {
            itemsToShow.push('_showLessLink');
        }
        if (showMoreLessDivider) {
            itemsToShow.push('_betweenShowMoreAndShowLessSpan');
        }
        var onCompleted = function() {
            MyRecs.ShowOrHideTopLevelElements(itemsToShow, true, null);
        };

        MyRecs.ShowOrHideTopLevelElements(['_noItemsDiv', '_emptyStateDiv', '_showMoreLink', '_showLessLink', '_betweenShowMoreAndShowLessSpan'], false, onCompleted);
    };
    MyRecs.GetServicePath = function() {
        var webAbsoluteUrl = window._spPageContextInfo.webAbsoluteUrl;
        var separator = webAbsoluteUrl.endsWith('/') ? '' : '/';
        var webUrl = webAbsoluteUrl + separator;
        var servicePath = '_vti_bin/ProjectDiscoveryInternalService.asmx';

        return webUrl + servicePath;
    };
    MyRecs.GetPersonalSiteUrl = function() {
        if (typeof MyRecs.GetPersonalSiteUrl.Url != "undefined") {
            return MyRecs.GetPersonalSiteUrl.Url;
        }
        var quickLaunch = document.getElementById('sideNavBox');

        if (!MyRecs.IsNullOrUndefined(quickLaunch)) {
            var links = quickLaunch.getElementsByTagName("a");

            for (var i = 0; i < links.length; i++) {
                if (links[i].id.endsWith("idNavLinkViewAll") || links[i].id.endsWith("ChangeYourPhotoLink")) {
                    var url = links[i].href;
                    var index = url.indexOf('/_layouts');

                    if (index != -1) {
                        MyRecs.GetPersonalSiteUrl.Url = url.substring(0, index);
                        MyRecs.Trace('MyRecs.GetPersonalSiteUrl', String.format('url found: {0}', MyRecs.GetPersonalSiteUrl.Url));
                        return MyRecs.GetPersonalSiteUrl.Url;
                    }
                }
            }
        }
        MyRecs.Trace('MyRecs.GetPersonalSiteUrl', 'url not found');
        return null;
    };
    MyRecs.FollowOrUnFollow = function(url, eventTargetId, category) {
        var getText = function(targetElement) {
            return targetElement.children[0].children[1].innerHTML;
        };
        var setTextImageAndClass = function(targetElement, text, imageLocation, className) {
            var imageElement = targetElement.children[0].children[0].children[0];
            var textElement = targetElement.children[0].children[1];

            imageElement.src = imageLocation;
            imageElement.alt = text;
            imageElement.title = text;
            imageElement.className = className;
            textElement.innerHTML = text;
            textElement.title = text;
            targetElement.title = text;
        };
        var eventTargetElement = document.getElementById(eventTargetId);
        var followText = MyRecsVariables.FollowText;
        var stopFollowText = MyRecsVariables.StopFollowText;
        var processingText = MyRecsVariables.ProcessingText;
        var followIcon = MyRecs.FollowIcon;
        var stopFollowIcon = MyRecs.StopFollowIcon;
        var loadingIcon = MyRecs.LoadingIcon;
        var followClass = "ms-contentFollowing-notFollowingImg";
        var stopFollowClass = "ms-contentFollowing-followingImg";
        var loadingClass = "";
        var isFollow = getText(eventTargetElement) == followText;

        setTextImageAndClass(eventTargetElement, processingText, loadingIcon, loadingClass);
        var personalSiteUrl = MyRecs.GetPersonalSiteUrl();
        var followSucceeded = false;
        var onSuccess;
        var onFailure;
        var onCompleted = function(label, icon, className, failureLabel, failureIcon, failureClassName, targetElement, serverCallSucceeded, followSucceededParameter) {
            return function(sender, args) {
                if (serverCallSucceeded && followSucceededParameter.get_value()) {
                    MyRecs.Trace('MyRecs.FollowOrUnfollow', String.format('Successfully followed url {0} in category {1}', url, category));
                    setTextImageAndClass(targetElement, label, icon, className);
                }
                else {
                    if (!serverCallSucceeded) {
                        MyRecs.Trace('MyRecs.FollowOrUnfollow', String.format('Failed to follow url {0} in category {1} - server call success {2}, follow success {3}. error: {4}', url, category, serverCallSucceeded, followSucceededParameter.get_value(), args.get_message()));
                    }
                    else {
                        MyRecs.Trace('MyRecs.FollowOrUnfollow', String.format('Failed to follow url {0} in category {1} - server call success {2}, follow success {3}', url, category, serverCallSucceeded, followSucceededParameter.get_value()));
                    }
                    setTextImageAndClass(targetElement, failureLabel, failureIcon, failureClassName);
                }
            };
        };

        SP.SOD.loadMultiple(["SP.js", "SP.UI.MySiteRecommendations.js"], function() {
            var context = SP.ClientContext.get_current();

            if (isFollow) {
                followSucceeded = Microsoft.SharePoint.Portal.MySiteRecommendations.followItem(context, url, personalSiteUrl, category);
                onSuccess = onCompleted(stopFollowText, stopFollowIcon, stopFollowClass, followText, followIcon, followClass, eventTargetElement, true, followSucceeded);
                onFailure = onCompleted(stopFollowText, stopFollowIcon, stopFollowClass, followText, followIcon, followClass, eventTargetElement, false, followSucceeded);
            }
            else {
                followSucceeded = Microsoft.SharePoint.Portal.MySiteRecommendations.stopFollowingItem(context, url, personalSiteUrl, category);
                onSuccess = onCompleted(followText, followIcon, followClass, stopFollowText, stopFollowIcon, stopFollowClass, eventTargetElement, true, followSucceeded);
                onFailure = onCompleted(followText, followIcon, followClass, stopFollowText, stopFollowIcon, stopFollowClass, eventTargetElement, false, followSucceeded);
            }
            context.executeQueryAsync(onSuccess, onFailure);
        });
    };
    MyRecs.IsNumeric = function(input) {
        return !isNaN(parseFloat(input));
    };
    MyRecs.ConvertQueryInfo = function(queryInfo) {
        if (MyRecs.IsNullOrUndefined(queryInfo)) {
            return null;
        }
        var convertedQueryInfo = new Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo();

        convertedQueryInfo.set_queryInfoExists(queryInfo.QueryInfoExists);
        convertedQueryInfo.set_category(queryInfo.Category);
        convertedQueryInfo.set_expertiseTags(queryInfo.ExpertiseTags);
        convertedQueryInfo.set_suggestedTags(queryInfo.SuggestedTags);
        convertedQueryInfo.set_followedUrls(queryInfo.FollowedUrls);
        return convertedQueryInfo;
    };
    MyRecs.ConvertCacheBlob = function(cacheBlob) {
        if (MyRecs.IsNullOrUndefined(cacheBlob)) {
            return null;
        }
        var convertedQueryInfo = MyRecs.ConvertQueryInfo(cacheBlob.QueryInfo);
        var convertedCacheBlob = new Microsoft.SharePoint.Portal.Project.MyRecsCacheBlob();

        convertedCacheBlob.set_dateCached(cacheBlob.DateCached);
        convertedCacheBlob.set_query(cacheBlob.Query);
        convertedCacheBlob.set_sortBy(cacheBlob.SortBy);
        convertedCacheBlob.set_fillInQuery(cacheBlob.FillInQuery);
        convertedCacheBlob.set_fillInSortBy(cacheBlob.FillInSortBy);
        convertedCacheBlob.set_result(cacheBlob.Result);
        convertedCacheBlob.set_queryInfo(convertedQueryInfo);
        return convertedCacheBlob;
    };
    MyRecs.GetCacheBlob = function(personalSiteUrl, category, forceRefresh, onCompleted) {
        try {
            MyRecs.Trace('MyRecs.GetCacheBlob', String.format('fetching blob for category {0}', category));
            SP.SOD.loadMultiple(["SP.js", "SP.UI.MySiteRecommendations.js"], function() {
                var context = SP.ClientContext.get_current();
                var cacheBlob = Microsoft.SharePoint.Portal.MySiteRecommendations.fetchCacheBlob(context, category, personalSiteUrl, forceRefresh);
                var onSuccess = function(sender, args) {
                    MyRecs.Trace('MyRecs.GetCacheBlob', String.format('Successfully fetched blob for category {0}', category));
                    onCompleted(cacheBlob);
                };
                var onFailure = function(sender, args) {
                    MyRecs.Trace('MyRecs.GetCacheBlob', String.format('Failed to fetch blob for category {0} - error: {1}', category, args.get_message()));
                    onCompleted(null);
                };

                context.executeQueryAsync(onSuccess, onFailure);
            });
        }
        catch (ex) {
            MyRecs.Trace('MyRecs.GetCacheBlob', String.format('Could not fetch cached result. error: {0}', ex.message));
        }
    };
    MyRecs.GetSPersonaliteUrlAndCacheBlobAndPopulateDebugDivs = function(forceRefresh, onCompleted) {
        var personalSiteUrl = MyRecs.GetPersonalSiteUrl();

        MyRecs.GetCacheBlob(personalSiteUrl, MyRecsVariables.Category, forceRefresh, function(cacheBlob) {
            if (!MyRecs.IsNullOrUndefined(cacheBlob)) {
                try {
                    MyRecs.SavedQueryInfo = cacheBlob.get_queryInfo();
                    (MyRecs.GetTopLevelElement('_queryDiv')).innerHTML = '<p>' + MyRecs.HtmlEncode(cacheBlob.get_query()) + '</p><p>' + MyRecs.HtmlEncode(cacheBlob.get_fillInQuery()) + '</p><p>' + MyRecs.HtmlEncode(cacheBlob.get_sortBy()) + '</p><p>' + MyRecs.HtmlEncode(cacheBlob.get_fillInSortBy()) + '</p>';
                }
                catch (ex) {
                    MyRecs.Trace('MyRecs.GetSPersonaliteUrlAndCacheBlobAndPopulateDebugDivs', String.format('Could not fetch cached result. error: {0}', ex.message));
                    MyRecs.SavedQueryInfo = null;
                    (MyRecs.GetTopLevelElement('_queryDiv')).innerHTML = null;
                }
            }
            else {
                MyRecs.SavedQueryInfo = null;
                (MyRecs.GetTopLevelElement('_queryDiv')).innerHTML = null;
            }
            onCompleted(cacheBlob);
        });
    };
    MyRecs.ParseResultString = function(resultString) {
        var result = null;

        try {
            result = (SP.ClientContext.get_current()).parseObjectFromJsonString(resultString, true);
        }
        catch (ex) {
            MyRecs.Trace('MyRecs.ParseResultString', String.format('error: {0}', ex.message));
        }
        return result;
    };
    MyRecs.AfterResultParsed = function(renderCtx, result) {
        MyRecs.Result = result;
        var newRenderCtx = {};

        newRenderCtx['ResolveTemplate'] = MyRecs.ResolveRenderTemplate;
        newRenderCtx['ListData'] = result;
        MyRecs.AddRenderContextCallback('OnPostRender', MyRecs.RefreshItemsDisplay, newRenderCtx);
        SPClientRenderer.Render(MyRecs.GetResultDiv(), newRenderCtx);
    };
    MyRecs.AddRequestDigest = function(sender, e) {
        if (e != null && e.get_webRequest() && (e.get_webRequest()).get_url() && ((e.get_webRequest()).get_url()).startsWith(MyRecs.GetServicePath())) {
            var element = $get('__REQUESTDIGEST');

            if (Boolean(element)) {
                ((e.get_webRequest()).get_headers())['X-RequestDigest'] = element.value;
            }
        }
    };
    MyRecs.AfterCacheBlobFetched = function(cacheBlob) {
        try {
            if (!MyRecs.IsNullOrUndefined(cacheBlob)) {
                MyRecs.Trace('MyRecs.AfterCacheBlobFetched', String.format('cache blob exists. display result count: {0}; query: {1}, fillin query: {2}, dateCached: {3}, result present: {4}, query info exists: {5}', MyRecsVariables.DisplayResultCount, cacheBlob.get_query(), cacheBlob.get_fillInQuery(), cacheBlob.get_dateCached(), !MyRecs.IsNullOrUndefined(cacheBlob.get_result()), (cacheBlob.get_queryInfo()).get_queryInfoExists()));
            }
            else {
                MyRecs.Trace('MyRecs.AfterCacheBlobFetched', 'cache blob does not exist');
            }
            MyRecs.Trace('MyRecs.AfterCacheBlobFetched', 'un-hiding webpart if it is hidden');
            (document.getElementById(MyRecsVariables.WebPartClientID)).style.display = 'block';
            if (MyRecs.IsNullOrUndefined(cacheBlob) || MyRecs.IsNullOrEmpty(cacheBlob.get_query()) || MyRecs.IsNullOrUndefined(cacheBlob.get_result())) {
                MyRecs.Trace('MyRecs.AfterCacheBlobFetched', 'cache blob or query or result empty');
                MyRecs.AfterResultParsed(ctx, null);
            }
            else {
                MyRecs.Trace('MyRecs.AfterCacheBlobFetched', 'query and result nonempty');
                var result = MyRecs.ParseResultString(cacheBlob.get_result());

                MyRecs.AfterResultParsed(ctx, result);
            }
        }
        catch (ex) {
            MyRecs.Trace('MyRecs.OnLoad.afterCacheBlobFetched', String.format('error: {0}', ex.message));
        }
    };
    MyRecs.DoesElementStyleHaveAttribute = function(element, attributeName, attributeValue) {
        if (MyRecs.IsNullOrUndefined(window.getComputedStyle)) {
            return element.currentStyle[attributeName] == attributeValue;
        }
        return (getComputedStyle(element, null))[attributeName] == attributeValue;
    };
    MyRecs.GetAncestorWithStyleAttribute = function(element, attributeName, attributeValue) {
        if (MyRecs.IsNullOrUndefined(element) || element == document) {
            return null;
        }
        var elementParent = element.parentNode;

        if (MyRecs.IsNullOrUndefined(elementParent) || elementParent == document) {
            return null;
        }
        if (MyRecs.DoesElementStyleHaveAttribute(elementParent, attributeName, attributeValue)) {
            return elementParent;
        }
        return MyRecs.GetAncestorWithStyleAttribute(elementParent, attributeName, attributeValue);
    };
    MyRecs.OnLoad = function() {
        var hookupCaching = function() {
            SPAnimation.g_Animations[MyRecs.Basic_SlowFade] = new Animation(MyRecs.Basic_SlowFade, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 700, 1, 0, 1, 0)]);
            MyRecs.ShowOrHideElementImmediate(MyRecs.GetTopLevelElement('_processingDiv'), true);
            MyRecs.GetSPersonaliteUrlAndCacheBlobAndPopulateDebugDivs(false, MyRecs.AfterCacheBlobFetched);
        };

        Sys.Net.WebRequestManager.add_invokingRequest(MyRecs.AddRequestDigest);
        Sys.Application.add_unload(function() {
            Sys.Net.WebRequestManager.remove_invokingRequest(MyRecs.AddRequestDigest);
        });
        var webPartDiv = document.getElementById(MyRecsVariables.WebPartClientID);
        var tableDiv = MyRecs.GetAncestorWithStyleAttribute(webPartDiv, "display", "table");

        if (!MyRecs.IsNullOrUndefined(tableDiv)) {
            tableDiv.style.tableLayout = "fixed";
        }
        hookupCaching();
    };
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("MySiteRecommendations.js");
    }
}
var MyRecs;
var MyRecsVariables;

$_global_mysiterecommendations();
