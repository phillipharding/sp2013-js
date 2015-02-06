function $_global_clientrenderer() {
    SPClientRenderer = {
        GlobalDebugMode: false,
        AddCallStackInfoToErrors: false,
        RenderErrors: true
    };
    SPClientRenderer.IsDebugMode = function(renderCtx) {
        if (typeof renderCtx != "undefined" && null != renderCtx && typeof renderCtx.DebugMode != "undefined") {
            return Boolean(renderCtx.DebugMode);
        }
        else {
            return Boolean(SPClientRenderer.GlobalDebugMode);
        }
    };
    SPClientRenderer.Render = function(node, renderCtx) {
        if (node == null || renderCtx == null)
            return;
        SPClientRenderer._ExecuteRenderCallbacks(renderCtx, 'OnPreRender');
        var result = SPClientRenderer.RenderCore(renderCtx);

        if (renderCtx.Errors != null && renderCtx.Errors.length > 0) {
            var retString = [];

            if (Boolean(SPClientRenderer.RenderErrors)) {
                for (var i = 0; i < renderCtx.Errors.length; i++) {
                    retString.push(renderCtx.Errors[i]);
                }
            }
            result = retString.join("") + " ";
        }
        if (result != null && result != '') {
            if (node.tagName == "DIV" || node.tagName == "TD") {
                if (renderCtx.fHidden)
                    node.style.display = "none";
                node.innerHTML = result;
            }
            else {
                var container = document.createElement("div");

                container.innerHTML = result;
                var fChild = container.firstChild;

                if (container.childNodes.length == 1 && fChild != null && fChild.nodeType == 3) {
                    var text = document.createTextNode(result);

                    InsertNodeAfter(node, text);
                }
                else {
                    var children = fChild.childNodes;
                    var pNode;

                    pNode = node.parentNode;
                    for (var idx = 0; idx < children.length; idx++) {
                        var childNode = children[idx];

                        if (childNode.nodeType == 1) {
                            if (pNode.nodeName == childNode.nodeName) {
                                var addNodes = childNode.childNodes;
                                var nc = addNodes.length;

                                for (var ix = 0; ix < nc; ix++)
                                    pNode.appendChild(addNodes[0]);
                            }
                            else {
                                if (renderCtx.fHidden)
                                    childNode.style.display = "none";
                                pNode.appendChild(children[idx]);
                                idx--;
                            }
                        }
                    }
                }
            }
        }
        SPClientRenderer._ExecuteRenderCallbacks(renderCtx, 'OnPostRender');
    };
    SPClientRenderer.RenderReplace = function(node, renderCtx) {
        if (node == null || renderCtx == null)
            return;
        SPClientRenderer._ExecuteRenderCallbacks(renderCtx, 'OnPreRender');
        var result = SPClientRenderer.RenderCore(renderCtx);
        var pNode = node.parentNode;

        if (pNode != null) {
            if (result != null && result != '') {
                var container = document.createElement("div");

                container.innerHTML = result;
                var cNodes = container.childNodes;

                while (cNodes.length > 0)
                    pNode.insertBefore(cNodes[0], node);
            }
            pNode.removeChild(node);
        }
        SPClientRenderer._ExecuteRenderCallbacks(renderCtx, 'OnPostRender');
    };
    SPClientRenderer._ExecuteRenderCallbacks = function(renderCtx, callbackType) {
        var templateExecContext = {
            Operation: callbackType
        };
        var fn = function() {
        ULSSwq:
            ;
            return SPClientRenderer._ExecuteRenderCallbacksWorker(renderCtx, callbackType, templateExecContext);
        };

        return CallFunctionWithErrorHandling(fn, renderCtx, null, templateExecContext);
    };
    SPClientRenderer._ExecuteRenderCallbacksWorker = function(renderCtx, callbackType, templateExecContext) {
        if (!renderCtx || callbackType == null || callbackType == '')
            return;
        var renderCallbacks = renderCtx[callbackType];

        if (renderCallbacks == null)
            return;
        if (typeof renderCallbacks == "function") {
            templateExecContext.TemplateFunction = renderCallbacks;
            renderCallbacks(renderCtx);
        }
        else if (typeof renderCallbacks == "object") {
            var numCallbacks = renderCallbacks.length;

            if (numCallbacks && typeof numCallbacks == "number") {
                for (var n = 0; n < Number(numCallbacks); n++) {
                    if (typeof renderCallbacks[n] == "function") {
                        templateExecContext.TemplateFunction = renderCallbacks[n];
                        renderCallbacks[n](renderCtx);
                    }
                }
            }
        }
    };
    SPClientRenderer.RenderCore = function(renderCtx) {
        if (renderCtx == null)
            return '';
        renderCtx.RenderView = RenderView;
        renderCtx.RenderHeader = RenderHeader;
        renderCtx.RenderBody = RenderBody;
        renderCtx.RenderFooter = RenderFooter;
        renderCtx.RenderGroups = RenderGroups;
        renderCtx.RenderItems = RenderItems;
        renderCtx.RenderFields = RenderFields;
        renderCtx.RenderFieldByName = RenderFieldByName;
        return RenderView(renderCtx);
        function RenderView(rCtx) {
            return DoSingleTemplateRender(rCtx, 'View');
        }
        function RenderHeader(rCtx) {
            return DoSingleTemplateRender(rCtx, 'Header');
        }
        function RenderBody(rCtx) {
            return DoSingleTemplateRender(rCtx, 'Body');
        }
        function RenderFooter(rCtx) {
            return DoSingleTemplateRender(rCtx, 'Footer');
        }
        function ResolveTemplate(rCtx, component, level) {
            if (rCtx == null)
                return '';
            if (rCtx.ResolveTemplate != null && typeof rCtx.ResolveTemplate == "function")
                return rCtx.ResolveTemplate(rCtx, component, level);
            else
                return '';
        }
        function DoSingleTemplateRender(inCtx, tplTag) {
            if (inCtx == null)
                return '';
            var tpl = ResolveTemplate(inCtx, inCtx.ListData, tplTag);

            if (tpl == null || tpl == '') {
                var templates = inCtx.Templates;

                if (templates == null)
                    return '';
                tpl = templates[tplTag];
            }
            if (tpl == null || tpl == '')
                return '';
            return CoreRender(tpl, inCtx);
        }
        function RenderGroups(inCtx) {
            if (inCtx == null || inCtx.ListData == null)
                return '';
            var groupTpls = null;

            if (inCtx.Templates != null)
                groupTpls = inCtx.Templates['Group'];
            var listData = inCtx.ListData;
            var groupData = listData[GetGroupsKey(inCtx)];
            var gStr = '';

            if (groupData == null) {
                if (typeof groupTpls == "string" || typeof groupTpls == "function") {
                    inCtx['CurrentGroupIdx'] = 0;
                    inCtx['CurrentGroup'] = listData;
                    inCtx['CurrentItems'] = listData[GetItemsKey(inCtx)];
                    gStr += CoreRender(groupTpls, inCtx);
                    inCtx['CurrentItems'] = null;
                    inCtx['CurrentGroup'] = null;
                }
                return gStr;
            }
            for (var rg_g = 0; rg_g < groupData.length; rg_g++) {
                var groupInfo = groupData[rg_g];
                var tpl = ResolveTemplate(inCtx, groupInfo, 'Group');

                if (tpl == null || tpl == '') {
                    if (groupTpls == null || groupTpls == {})
                        return '';
                    if (typeof groupTpls == "string" || typeof groupTpls == "function")
                        tpl = groupTpls;
                    if (tpl == null || tpl == '') {
                        var groupType = groupInfo['GroupType'];

                        tpl = groupTpls[groupType];
                    }
                }
                if (tpl == null || tpl == '')
                    continue;
                inCtx['CurrentGroupIdx'] = rg_g;
                inCtx['CurrentGroup'] = groupInfo;
                inCtx['CurrentItems'] = groupInfo[GetItemsKey(inCtx)];
                gStr += CoreRender(tpl, inCtx);
                inCtx['CurrentGroup'] = null;
                inCtx['CurrentItems'] = null;
            }
            return gStr;
        }
        function RenderItems(inCtx) {
            if (inCtx == null || inCtx.ListData == null)
                return '';
            var itemTpls = null;

            if (inCtx.Templates != null)
                itemTpls = inCtx.Templates['Item'];
            var listData = inCtx.ListData;
            var itemData = inCtx['CurrentItems'];

            if (itemData == null)
                itemData = typeof inCtx['CurrentGroup'] != "undefined" ? inCtx['CurrentGroup'][GetItemsKey(inCtx)] : null;
            if (itemData == null) {
                var groups = listData[GetGroupsKey(inCtx)];

                itemData = typeof groups != "undefined" ? groups[GetItemsKey(inCtx)] : null;
            }
            if (itemData == null)
                return '';
            var iStr = '';

            for (var i = 0; i < itemData.length; i++) {
                var itemInfo = itemData[i];
                var tpl = ResolveTemplate(inCtx, itemInfo, 'Item');

                if (tpl == null || tpl == '') {
                    if (itemTpls == null || itemTpls == {})
                        return '';
                    if (typeof itemTpls == "string" || typeof itemTpls == "function")
                        tpl = itemTpls;
                    if (tpl == null || tpl == '') {
                        var itemType = itemInfo['ContentType'];

                        tpl = itemTpls[itemType];
                    }
                }
                if (tpl == null || tpl == '')
                    continue;
                inCtx['CurrentItemIdx'] = i;
                inCtx['CurrentItem'] = itemInfo;
                if (typeof inCtx['ItemRenderWrapper'] == "string") {
                    inCtx['ItemRenderWrapper'] == SPClientRenderer.ParseTemplateString(inCtx['ItemRenderWrapper'], inCtx);
                }
                if (typeof inCtx['ItemRenderWrapper'] == "function") {
                    var renderWrapper = inCtx['ItemRenderWrapper'];
                    var templateExecContext = {
                        TemplateFunction: renderWrapper,
                        Operation: "ItemRenderWrapper"
                    };
                    var renderWrapperFn = function() {
                    ULSSwq:
                        ;
                        return renderWrapper(CoreRender(tpl, inCtx), inCtx, tpl);
                    };

                    iStr += CallFunctionWithErrorHandling(renderWrapperFn, inCtx, '', templateExecContext);
                }
                else {
                    iStr += CoreRender(tpl, inCtx);
                }
                inCtx['CurrentItem'] = null;
            }
            return iStr;
        }
        function RenderFields(inCtx) {
            if (inCtx == null || inCtx.Templates == null || inCtx.ListSchema == null || inCtx.ListData == null)
                return '';
            var item = inCtx['CurrentItem'];
            var fields = inCtx.ListSchema['Field'];
            var fieldTpls = inCtx.Templates['Fields'];

            if (item == null || fields == null || fieldTpls == null)
                return '';
            var fStr = '';

            for (var f in fields)
                fStr += ExecuteFieldRender(inCtx, fields[f]);
            return fStr;
        }
        function RenderFieldByName(inCtx, fName) {
            if (inCtx == null || inCtx.Templates == null || inCtx.ListSchema == null || inCtx.ListData == null || fName == null || fName == '')
                return '';
            var item = inCtx['CurrentItem'];
            var fields = inCtx.ListSchema['Field'];
            var fieldTpls = inCtx.Templates['Fields'];

            if (item == null || fields == null || fieldTpls == null)
                return '';
            if (typeof SPClientTemplates != 'undefined' && spMgr != null && inCtx.ControlMode == SPClientTemplates.ClientControlMode.View)
                return spMgr.RenderFieldByName(inCtx, fName, item, inCtx.ListSchema);
            for (var f in fields) {
                if (fields[f].Name == fName)
                    return ExecuteFieldRender(inCtx, fields[f]);
            }
            return '';
        }
        function ExecuteFieldRender(inCtx, fld) {
            var item = inCtx['CurrentItem'];
            var fieldTpls = inCtx.Templates['Fields'];
            var fldName = fld.Name;

            if (typeof item[fldName] == "undefined")
                return '';
            var tpl = '';

            if (fieldTpls[fldName] != null)
                tpl = fieldTpls[fldName];
            if (tpl == null || tpl == '')
                return '';
            inCtx['CurrentFieldValue'] = item[fldName];
            inCtx['CurrentFieldSchema'] = fld;
            var fStr = CoreRender(tpl, inCtx);

            inCtx['CurrentFieldValue'] = null;
            inCtx['CurrentFieldSchema'] = null;
            return fStr;
        }
        function GetGroupsKey(c) {
            var groupsKey = c.ListDataJSONGroupsKey;

            return typeof groupsKey != "string" || groupsKey == '' ? 'Groups' : groupsKey;
        }
        function GetItemsKey(c) {
            var itemsKey = c.ListDataJSONItemsKey;

            return typeof itemsKey != "string" || itemsKey == '' ? 'Items' : itemsKey;
        }
    };
    SPClientRenderer.ParseTemplateString = function(templateStr, c) {
        var templateExecContext = {
            TemplateFunction: templateStr,
            Operation: "ParseTemplateString"
        };
        var fn = function() {
        ULSSwq:
            ;
            return SPClientRenderer.ParseTemplateStringWorker(templateStr, c);
        };

        return CallFunctionWithErrorHandling(fn, c, null, templateExecContext);
    };
    SPClientRenderer.ParseTemplateStringWorker = function(templateStr, c) {
        if (templateStr == null || templateStr.length == 0)
            return null;
        var strFunc = "var p=[]; p.push('" + ((((((((((templateStr.replace(/[\r\t\n]/g, " ")).replace(/'(?=[^#]*#>)/g, "\t")).split("'")).join("\\'")).split("\t")).join("'")).replace(/<#=(.+?)#>/g, "',$1,'")).split("<#")).join("');")).split("#>")).join("p.push('") + "'); return p.join('');";
        var func;

        func = new Function("ctx", strFunc);
        return func;
    };
    SPClientRenderer.ReplaceUrlTokens = function(tokenUrl) {
        var pageContextInfo = window['_spPageContextInfo'];

        if (tokenUrl == null || tokenUrl == '' || pageContextInfo == null)
            return '';
        var siteToken = '~site/';
        var siteCollectionToken = '~sitecollection/';
        var siteCollectionMPGalleryToken = '~sitecollectionmasterpagegallery/';
        var lowerCaseTokenUrl = tokenUrl.toLowerCase();

        if (lowerCaseTokenUrl.indexOf(siteToken) == 0) {
            var sPrefix = DeterminePrefix(pageContextInfo.webServerRelativeUrl);

            tokenUrl = sPrefix + tokenUrl.substr(siteToken.length);
            lowerCaseTokenUrl = sPrefix + lowerCaseTokenUrl.substr(siteToken.length);
        }
        else if (lowerCaseTokenUrl.indexOf(siteCollectionToken) == 0) {
            var scPrefix = DeterminePrefix(pageContextInfo.siteServerRelativeUrl);

            tokenUrl = scPrefix + tokenUrl.substr(siteCollectionToken.length);
            lowerCaseTokenUrl = scPrefix + lowerCaseTokenUrl.substr(siteCollectionToken.length);
        }
        else if (lowerCaseTokenUrl.indexOf(siteCollectionMPGalleryToken) == 0) {
            var smpPrefix = DeterminePrefix(pageContextInfo.siteServerRelativeUrl);

            tokenUrl = smpPrefix + '_catalogs/masterpage/' + tokenUrl.substr(siteCollectionMPGalleryToken.length);
            lowerCaseTokenUrl = smpPrefix + '_catalogs/masterpage/' + lowerCaseTokenUrl.substr(siteCollectionMPGalleryToken.length);
        }
        var lcidToken = '{lcid}';
        var localeToken = '{locale}';
        var siteClientTagToken = '{siteclienttag}';
        var tokenIdx = -1;

        while ((tokenIdx = lowerCaseTokenUrl.indexOf(lcidToken)) != -1) {
            tokenUrl = tokenUrl.substring(0, tokenIdx) + String(pageContextInfo.currentLanguage) + tokenUrl.substr(tokenIdx + lcidToken.length);
            lowerCaseTokenUrl = lowerCaseTokenUrl.replace(lcidToken, String(pageContextInfo.currentLanguage));
        }
        while ((tokenIdx = lowerCaseTokenUrl.indexOf(localeToken)) != -1) {
            tokenUrl = tokenUrl.substring(0, tokenIdx) + pageContextInfo.currentUICultureName + tokenUrl.substr(tokenIdx + localeToken.length);
            lowerCaseTokenUrl = lowerCaseTokenUrl.replace(localeToken, pageContextInfo.currentUICultureName);
        }
        while ((tokenIdx = lowerCaseTokenUrl.indexOf(siteClientTagToken)) != -1) {
            tokenUrl = tokenUrl.substring(0, tokenIdx) + pageContextInfo.siteClientTag + tokenUrl.substr(tokenIdx + siteClientTagToken.length);
            lowerCaseTokenUrl = lowerCaseTokenUrl.replace(siteClientTagToken, pageContextInfo.siteClientTag);
        }
        return tokenUrl;
        function DeterminePrefix(contextInfoValue) {
            if (contextInfoValue == null || contextInfoValue == '')
                return '';
            var valueLen = contextInfoValue.length;

            return contextInfoValue[valueLen - 1] == '/' ? contextInfoValue : contextInfoValue + '/';
        }
    };
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("clientrenderer.js");
}
function ULSSwq() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "clientrenderer.commentedjs";
    return o;
}
var SPClientRenderer;

function CallFunctionWithErrorHandling(fn, c, erv, execCtx) {
    if (SPClientRenderer.IsDebugMode(c)) {
        return fn();
    }
    try {
        return fn();
    }
    catch (e) {
        if (c.Errors == null)
            c.Errors = [];
        try {
            e.ExecutionContext = execCtx;
            if (Boolean(SPClientRenderer.AddCallStackInfoToErrors) && typeof execCtx == "object" && null != execCtx) {
                execCtx.CallStack = ULSGetCallstack(CallFunctionWithErrorHandling.caller);
            }
        }
        catch (ignoreErr) { }
        c.Errors.push(e);
        return erv;
    }
}
function CoreRender(t, c) {
    var templateExecContext = {
        TemplateFunction: t,
        Operation: "CoreRender"
    };
    var fn = function() {
    ULSSwq:
        ;
        return CoreRenderWorker(t, c);
    };

    return CallFunctionWithErrorHandling(fn, c, '', templateExecContext);
}
function CoreRenderWorker(t, c) {
    var tplFunc;

    if (typeof t == "string")
        tplFunc = SPClientRenderer.ParseTemplateString(t, c);
    else if (typeof t == "function")
        tplFunc = t;
    if (tplFunc == null)
        return '';
    return tplFunc(c);
}
function GetViewHash(renderCtx) {
    return ajaxNavigate.getParam("InplviewHash" + (renderCtx.view.toLowerCase()).substring(1, renderCtx.view.length - 1));
}
function RenderAsyncDataLoad(renderCtx) {
    return '<div style="padding-top:5px;"><center><img src="' + '/_layouts/15/images/gears_an.gif' + '" style="border-width:0px;" /></center></div>';
}
function RenderCallbackFailures(renderCtx, req) {
    if (!Boolean(renderCtx) || req == null || req.status != 601)
        return;
    if (renderCtx.Errors == null)
        renderCtx.Errors = [];
    renderCtx.Errors.push(req.responseText);
    SPClientRenderer.Render(document.getElementById('script' + renderCtx.wpq), renderCtx);
}
function AsyncDataLoadPostRender(renderCtx) {
    window.asyncCallback = function() {
    ULSSwq:
        ;
        ExecuteOrDelayUntilScriptLoaded(function() {
        ULSSwq:
            ;
            var pagingString = renderCtx.clvp.PagingString();

            renderCtx.queryString = '?' + (pagingString != null ? pagingString : '');
            renderCtx.onRefreshFailed = RenderCallbackFailures;
            renderCtx.loadingAsyncData = true;
            var evtAjax = {
                currentCtx: renderCtx,
                csrAjaxRefresh: true
            };

            AJAXRefreshView(evtAjax, 1);
        }, 'inplview.js');
    };
    if (typeof g_mdsReady != "undefined" && Boolean(g_mdsReady) && typeof g_MDSPageLoaded != "undefined" && !Boolean(g_MDSPageLoaded)) {
        _spBodyOnLoadFunctionNames.push('asyncCallback');
    }
    else {
        asyncCallback();
    }
}
function AddPostRenderCallback(renderCtx, newCallback) {
    AddRenderCallback(renderCtx, 'OnPostRender', newCallback, false);
}
function AddPostRenderCallbackUnique(renderCtx, newCallback) {
    AddRenderCallback(renderCtx, 'OnPostRender', newCallback, true);
}
function AddRenderCallback(renderCtx, callbackType, newCallback, enforceUnique) {
    if (Boolean(renderCtx) && typeof newCallback == 'function' && callbackType != '') {
        var renderCallbacks = renderCtx[callbackType];

        if (renderCallbacks == null)
            renderCtx[callbackType] = newCallback;
        else if (typeof renderCallbacks == "function") {
            if (!Boolean(enforceUnique) || String(renderCallbacks) != String(newCallback)) {
                var array = [];

                array.push(renderCallbacks);
                array.push(newCallback);
                renderCtx[callbackType] = array;
            }
        }
        else if (typeof renderCallbacks == "object") {
            var exists = false;

            if (Boolean(enforceUnique)) {
                for (var i = 0; i < renderCallbacks.length; i++) {
                    if (renderCallbacks[i] == newCallback) {
                        exists = true;
                        break;
                    }
                }
            }
            if (!exists)
                renderCtx[callbackType].push(newCallback);
        }
    }
}
$_global_clientrenderer();
