function $_global_sp_ui_listsearchboxbootstrap() {
    ;
    ListSearchBoxInfoStruct.prototype = {
        wpq: null,
        searchIconUrl: null,
        searchHoverIconUrl: null,
        cancelIconUrl: null,
        cancelHoverIconUrl: null,
        sodKey: null,
        sodFunc: null,
        loadInProgress: false,
        fullSearchSiteUrl: null,
        searchBoxConstructor: null
    };
    if (typeof g_listSearchBoxInfo == 'undefined') {
        g_listSearchBoxInfo = [];
    }
    (function() {
        var searchBootstrapCtx = new ContextInfo();

        searchBootstrapCtx.OnPostRender = function(renderCtx) {
            var crtInfo;

            for (crtInfo in g_listSearchBoxInfo) {
                if (g_listSearchBoxInfo[crtInfo].wpq == renderCtx.wpq) {
                    InsertSearchBox(renderCtx, g_listSearchBoxInfo[crtInfo]);
                    break;
                }
            }
        };
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(searchBootstrapCtx);
        var InsertSearchBox = function(renderCtx, specificListSearchBoxInfo) {
            var elem = document.getElementById('inplaceSearchDiv_' + renderCtx.wpq);

            if (elem == null) {
                var parentDiv = document.getElementById('CSRListViewControlDiv' + renderCtx.wpq);

                if (parentDiv !== null) {
                    var newDiv = document.createElement('div');

                    newDiv.id = 'inplaceSearchDiv_' + renderCtx.wpq;
                    newDiv.className = 'ms-InlineSearch-DivBaseline';
                    var saveNode = parentDiv.firstChild;

                    if (saveNode != null && saveNode.id == renderCtx.wpq + '_ListTitleViewSelectorMenu_Container') {
                        saveNode = saveNode.nextSibling;
                    }
                    if (saveNode != null) {
                        parentDiv.insertBefore(newDiv, saveNode);
                    }
                    else {
                        parentDiv.appendChild(newDiv);
                    }
                    elem = newDiv;
                }
            }
            specificListSearchBoxInfo.elem = elem;
            if (elem != null && specificListSearchBoxInfo.loadInProgress == false) {
                specificListSearchBoxInfo.elem = elem;
                if (typeof elem.control == 'undefined') {
                    var sodLoadingTimeout = null;

                    specificListSearchBoxInfo.loadInProgress = true;
                    var SodLoaded = function() {
                        if (specificListSearchBoxInfo.sodLoadingTimeout != null) {
                            window.clearTimeout(specificListSearchBoxInfo.sodLoadingTimeout);
                            specificListSearchBoxInfo.sodLoadingTimeout = null;
                        }
                        specificListSearchBoxInfo.elem.innerHTML = "";
                        window.clearTimeout(sodLoadingTimeout);
                        var specificListSearchBox;

                        if (typeof specificListSearchBoxInfo.searchBoxConstructor === 'function') {
                            specificListSearchBox = specificListSearchBoxInfo.searchBoxConstructor(renderCtx, specificListSearchBoxInfo.elem);
                        }
                        else {
                            specificListSearchBox = new Microsoft.SharePoint.Portal.ListSearchBox(renderCtx, specificListSearchBoxInfo.elem);
                        }
                        specificListSearchBox.set_searchIconUrl(specificListSearchBoxInfo.searchIconUrl);
                        specificListSearchBox.set_searchHoverIconUrl(specificListSearchBoxInfo.searchHoverIconUrl);
                        specificListSearchBox.set_cancelIconUrl(specificListSearchBoxInfo.cancelIconUrl);
                        specificListSearchBox.set_cancelHoverIconUrl(specificListSearchBoxInfo.cancelHoverIconUrl);
                        specificListSearchBox.set_fullSearchSiteUrl(specificListSearchBoxInfo.fullSearchSiteUrl);
                        specificListSearchBox.initialize();
                        specificListSearchBox.bootstrapRendering();
                        specificListSearchBoxInfo.loadInProgress = false;
                    };
                    var ShowSodLoadingUI = function() {
                        var loadingImageUrl = renderCtx.imagesPath + "loadingcirclests16.gif";

                        specificListSearchBoxInfo.elem.innerHTML = "<img src='" + loadingImageUrl + "' onclick='this.style.visibility=\"hidden\";' width=\"16\" height=\"16\" />";
                    };

                    specificListSearchBoxInfo.sodLoadingTimeout = window.setTimeout(ShowSodLoadingUI, 500);
                    var sodKey;

                    if (typeof specificListSearchBoxInfo.sodKey === 'string') {
                        sodKey = specificListSearchBoxInfo.sodKey;
                    }
                    else {
                        sodKey = 'sp.ui.listsearchbox.js';
                    }
                    var sodFunc;

                    if (typeof specificListSearchBoxInfo.sodFunc === 'string') {
                        sodFunc = specificListSearchBoxInfo.sodFunc;
                    }
                    else {
                        sodFunc = 'Microsoft.SharePoint.Portal.ListSearchBox';
                    }
                    SP.SOD.executeFunc(sodKey, sodFunc, SodLoaded);
                }
                else {
                    var listSearchBox = elem.control;

                    listSearchBox.onDataRefreshCompleted(null);
                }
            }
        };
    })();
    NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.ListSearchBoxBootstrap.js");
}
function ListSearchBoxInfoStruct() {
}
$_global_sp_ui_listsearchboxbootstrap();
