function $_global_quicklaunch() {
    g_QuickLaunchMenu = null;
    g_CommonIconClusterUrl = GetThemedImageUrl("spcommon.png");
    g_RteDialogUrl = "/_layouts/15/RteDialog.aspx";
    g_EditLinkDlgIconUrl = "/_layouts/15/images/link.gif?rev=23";
    g_NavIconClusterUrl = GetThemedImageUrl("spnav.png");
    g_HideLinkIconClass = "ms-navedit-hideLinkIcon";
    g_ShowLinkIconClass = "ms-navedit-showLinkIcon";
    g_DropNodeMarker = "ms-navedit-dropNode";
    g_LinkNodeMarker = "ms-navedit-linkNode";
    g_ArrowNodeMarker = "ms-navedit-flyoutArrow";
    g_EditAreaNodeMarker = "ms-navedit-editArea";
    g_EditSpanNodeMarker = "ms-navedit-editSpan";
    g_ItemSelectedClassName = "ms-core-listMenu-selected";
    g_NavMenuItemLinkName = "ms-navedit-itemlink";
    g_NavMenuDeleteLinkClassName = "ms-navedit-deletelink";
    g_NavMenuHideLinkClassName = "ms-navedit-hidelink";
    g_NavMenuHideSpanClassName = "ms-navedit-hidespan";
    g_NavMenuDeleteSpanClassName = "ms-navedit-deletespan";
    g_NavMenuDeleteImgClassName = "ms-cancelImg";
    g_NavMenuEditLinkItemClassName = "ms-listMenu-editLink";
    g_SaveFailedIconClass = "ms-navedit-errorIcon";
    g_SaveFailedSpanClass = "ms-navedit-errorSpan";
    g_AppendDropArea = "ms-navedit-appendarea";
    g_PageTitleInContentAreaIdSuffix = "PlaceHolderPageTitleInContentArea";
    g_PageTitleInTitleAreaIdSuffix = "PlaceHolderPageTitleInTitleArea";
    g_BodyContainerId = "s4-bodyContainer";
    g_navItemDataKey = 'SPNavItemDragData';
    g_dndMenuItemQL = 'sp-dragdrop-menuitem-qlmenu';
    g_dndPageTitleDataKey = 'SPPageTitleDragData';
    g_dndPageTitleQL = 'sp-dragdrop-pagetitle-qlmenu';
    g_dndSiteContentQL = "sp-dragdrop-allsitecontent-qlmenu";
    g_dndSiteContentDataKey = "SPSiteContentDragData";
    g_EditCallbackOperationName = "Edit:";
    g_ReadCallbackOperationName = "Read:";
    g_SaveCallbackOperationName = "Save:";
    g_MenuCallbackFunctionTemplate = "{0}_Callback";
    g_QLDropSurfClassName = "ms-navedit-dropsurface";
    g_prevDropSurfaceClass = null;
    g_lastNavErrorMessage = null;
    g_currentQuickLaunchMenuId = null;
    g_PageUrlToRedirect = null;
    g_CallbackTimer = null;
    g_CallbackTimeout = 30000;
    g_EditBoxMinWidth = 185;
    g_EditBoxDivMinWidth = 100;
    g_EditBoxMinHeight = 20;
    g_DefaultDialogWidth = 400;
    g_EditFlyoutOpenDelay = 400;
    g_TargetBehindDropNode = 1;
    g_TargetAfterDropNode = 2;
    g_NavEditMouseDragTolerance = 5;
    g_PrevMouseDragTolerance = null;
    g_lastDropQuadrant = 0;
    s_NewNodeId = 9001;
    g_prevUnloadHandler = null;
    g_CurrentListItem = null;
    g_activeFlyout = null;
    g_ghostLinkNode = null;
    g_lastDropNode = null;
    g_ghostLinkData = null;
    g_fAsyncDialogOpened = false;
    g_QLDebug = false;
    MenuOrientation = {
        Horizontal: 0,
        Vertical: 1,
        Flyout: 2
    };
    QuickLaunchMenu.prototype = {
        Id: undefined,
        StaticLevels: undefined,
        DynamicLevels: undefined,
        Orientation: undefined,
        StartingNodeUrl: undefined,
        MenuData: undefined,
        ArrayHash: undefined,
        NodeHash: undefined,
        NumItems: undefined,
        MenuHtml: undefined
    };
    QuickLaunchMenu.prototype.augmentNodeHtmlWithId = function() {
        var qlDiv = document.getElementById(this.Id);

        if (!fIsNullOrUndefined(qlDiv)) {
            var items = qlDiv.getElementsByTagName("LI");
            var nLength = items.length;

            for (var i = 0; i < nLength; i++) {
                var item = items[i];

                if (!fIsNullOrUndefined(item.id) && item.id.length > 0) {
                    item.id = this.Id + "_" + item.id;
                }
                else if (i == nLength - 1) {
                    augmentEditArea(this.Id, item);
                }
            }
            this.MenuHtml = qlDiv.innerHTML;
        }
    };
    QuickLaunchMenu.prototype.renderMenuFromHtml = function() {
        var qlDiv = document.getElementById(this.Id);

        if (Boolean(qlDiv)) {
            qlDiv.innerHTML = this.MenuHtml;
        }
    };
    QuickLaunchMenu.prototype.indexNodes = function(nodes) {
        for (var i in nodes) {
            var node = nodes[i];

            node.ClientKey = node.Key;
            this.NodeHash[node.Key] = node;
            this.ArrayHash[node.Key] = nodes;
            this.indexNodes(node.Nodes);
        }
    };
    QuickLaunchMenu.prototype.storeMenuData = function(jsonData) {
        this.MenuHtml = jsonData.Html;
        this.MenuData = jsonData.Data;
        this.ArrayHash = [];
        this.NodeHash = [];
        this.indexNodes(this.MenuData.Nodes);
        dumpQLMenuData();
    };
    QuickLaunchMenu.prototype.initCallbackEvent = function(data, errorHandlerName) {
        if (!fIsNullOrUndefined(window["_spPageContextInfo"]) && !fIsNullOrUndefined(window["_spFormDigestRefreshInterval"]) && !fIsNullOrUndefined(UpdateFormDigest)) {
            var ctxObj = window["_spPageContextInfo"];

            UpdateFormDigest(ctxObj.webServerRelativeUrl, window["_spFormDigestRefreshInterval"]);
            var digestElem = document.getElementById("__REQUESTDIGEST");

            if (Boolean(digestElem) && Boolean(window["WebForm_InitCallbackAddField"])) {
                var formPostData = window["__theFormPostData"];

                if (typeof formPostData != "undefined" && Boolean(formPostData)) {
                    var digestIndex = -1;

                    do {
                        digestIndex = formPostData.indexOf("__REQUESTDIGEST");
                        if (digestIndex != -1) {
                            var nextAmpIndex = formPostData.indexOf("&", digestIndex);
                            var newFormPostData = formPostData.substring(0, digestIndex);

                            if (nextAmpIndex != -1) {
                                newFormPostData += formPostData.substring(nextAmpIndex);
                            }
                            formPostData = newFormPostData;
                            window["__theFormPostData"] = newFormPostData;
                        }
                    } while (digestIndex != -1);
                }
                var formPostCollection = window["__theFormPostCollection"];

                if (typeof formPostCollection != "undefined" && Boolean(formPostCollection)) {
                    var nLength = formPostCollection.length;

                    for (var i = 0; i < nLength; i++) {
                        if (formPostCollection[i].name == "__REQUESTDIGEST") {
                            formPostCollection.splice(i, 1);
                            nLength--;
                        }
                    }
                }
                window["WebForm_InitCallbackAddField"]("__REQUESTDIGEST", digestElem.value);
            }
        }
        var callbackFunctionReference = String.format(g_MenuCallbackFunctionTemplate, g_QuickLaunchMenu.Id);

        window[callbackFunctionReference](data, errorHandlerName);
    };
    QuickLaunchMenu.prototype.ensureMenuData = function(fEditMode) {
        var data = (Boolean(fEditMode) ? g_EditCallbackOperationName : g_ReadCallbackOperationName) + this.StartingNodeUrl;

        g_CallbackTimer = window.setTimeout("AspMenuHandleTimeout();", g_CallbackTimeout);
        this.initCallbackEvent(data, "AspMenuHandleDataError");
    };
    QuickLaunchMenu.prototype.stripClientKey = function(dataNodes) {
        for (var i in dataNodes) {
            var node = dataNodes[i];

            delete node.ClientKey;
            this.stripClientKey(node.Nodes);
        }
    };
    QuickLaunchMenu.prototype.saveChanges = function() {
        var tempMenuData = JSON.parse(JSON.stringify(this.MenuData));

        this.stripClientKey(tempMenuData.Nodes);
        var data = g_SaveCallbackOperationName + JSON.stringify(tempMenuData);

        g_CallbackTimer = window.setTimeout("AspMenuHandleTimeout();", g_CallbackTimeout);
        this.initCallbackEvent(data, "AspMenuHandleSaveError");
    };
    QuickLaunchMenu.prototype.initEditMode = function() {
        this.renderMenuFromHtml();
        this.EditMode = true;
        this.augmentNodeHtmlWithId();
        g_dropSurface = null;
        var dropSurf = document.getElementById(g_dropSurfaceId);

        if (!fIsNullOrUndefined(dropSurf)) {
            dropSurf.setAttribute("class", g_QLDropSurfClassName);
        }
        var menuId = this.Id;

        EnsureScriptFunc("SP.Core.js", "SP.UI.AspMenu", function() {
            InitializeAspMenuControl(menuId);
            g_QuickLaunchMenu.addDeleteLinks();
            initMenuDragDrop();
            initPageTitleDrag();
            SetEditModeLinks();
            hookUpLinkEditHandlers(null);
            AttachEvent("beforeunload", onBeforeEditModeUnload, window);
            FocusOnAddLink();
            dumpQLMenuData();
        });
    };
    QuickLaunchMenu.prototype.initReadMode = function() {
        var menu = document.getElementById(this.Id);
        var droppable = SPDragDropManager.GetDroppable(menu);

        if (droppable != null && typeof droppable != 'undefined')
            droppable.Disable();
        DetachEvent("beforeunload", onBeforeEditModeUnload, window);
        this.EditMode = false;
        this.renderMenuFromHtml();
        resetDropSurface();
        SetEditLink(this.Id, this.StaticLevels, this.DynamicLevels, this.Orientation, this.StartingNodeUrl);
        window.setTimeout("InitializeAspMenuControl('" + this.Id + "'); QuickLaunchInitDroppable();", 200);
    };
    QuickLaunchMenu.prototype.switchMode = function() {
        if (this.EditMode == false)
            this.initEditMode();
        else
            this.initReadMode();
    };
    QuickLaunchMenu.prototype.deleteLink = function(listItem) {
        if (!fIsNullOrUndefined(listItem)) {
            var dataNode = getNodeData(listItem);
            var parentList = listItem.parentNode;

            if (!fIsNullOrUndefined(dataNode) && dataNode.DisallowDelete === false) {
                var childrenArray = getNodeChildren(dataNode);

                for (var i = 0; i < childrenArray.length; i++) {
                    var childNode = childrenArray[i];

                    if (childNode.DisallowDelete == false) {
                        childNode.IsDeleted = true;
                    }
                    else {
                        LaunchMessageDialog(Strings.STS.L_NavEditErrorDialogTitle, String.format(Strings.STS.L_DisallowDeleteChildMessage, dataNode.Title, childNode.Title));
                        return;
                    }
                }
                dataNode.IsDeleted = true;
                if (fIsNullOrUndefined(dataNode.Key)) {
                    var index = getNodeIndex(listItem);
                    var containerArray = getNodeArray(listItem);

                    addNodesFromArray(containerArray, childrenArray);
                    if (!fIsNullOrUndefined(containerArray) && index >= 0) {
                        containerArray.splice(index, 1);
                    }
                }
                var nextLink = keybMoveLink(listItem, listItem, true, true);

                if (nextLink == null)
                    nextLink = keybMoveLink(listItem, listItem, false, true);
                parentList.removeChild(listItem);
                cleanEditFlyout(getListItem(parentList));
                EnableSaveButton();
                if (nextLink == null)
                    FocusOnCancelButton();
                else
                    focusOnLinkNode(nextLink);
                dumpQLMenuData();
            }
        }
    };
    QuickLaunchMenu.prototype.toggleHideLink = function(listItem) {
        if (!fIsNullOrUndefined(listItem)) {
            var dataNode = getNodeData(listItem);

            if (dataNode != null) {
                dataNode.IsHidden = !dataNode.IsHidden;
                var menuItem = listItem.querySelector(".ms-core-listMenu-item");

                if (menuItem != null) {
                    if (dataNode.IsHidden === true || dataNode.IsTrimmed === true) {
                        addClassName(menuItem, "ms-navedit-hiddenLink");
                    }
                    else {
                        removeClassName(menuItem, "ms-navedit-hiddenLink");
                    }
                }
                EnableSaveButton();
                return dataNode.IsHidden;
            }
        }
        return undefined;
    };
    QuickLaunchMenu.prototype.currentNodeOrChildNodeFURLMoving = function(dataNode, newListItemUrl, oldListItemUrl, dlgHandler, segmentUrl) {
        if (dataNode != null && !fIsNullOrUndefined(newListItemUrl) && !fIsNullOrUndefined(oldListItemUrl)) {
            var nodeSegment = "/" + dataNode.FriendlyUrlSegment;

            if (!Boolean(segmentUrl))
                segmentUrl = "";
            if (dataNode.NodeType == 1) {
                var oldUrl = this.MenuData.FriendlyUrlPrefix + oldListItemUrl + segmentUrl + nodeSegment;
                var newUrl = this.MenuData.FriendlyUrlPrefix + newListItemUrl + segmentUrl + nodeSegment;

                oldUrl = oldUrl.replace("//", "/");
                newUrl = newUrl.replace("//", "/");
                if (oldUrl != newUrl) {
                    if (!Boolean(g_fAsyncDialogOpened)) {
                        var pageUrl = document.location.href;

                        if (Boolean(ajaxNavigate) && Boolean(ajaxNavigate.get_href))
                            pageUrl = ajaxNavigate.get_href();
                        try {
                            if (Boolean(URI)) {
                                var pageUri = new URI(pageUrl);

                                pageUrl = pageUri.getPath();
                            }
                        }
                        catch (ex) { }
                        if (Boolean(pageUrl) && pageUrl == oldUrl) {
                            g_PageUrlToRedirect = newUrl;
                        }
                        g_fAsyncDialogOpened = true;
                        LaunchConfirmDialog(Strings.STS.L_NavEditConfirmationDialogTitle, String.format(Strings.STS.L_WarningChangingFUrlMessage, dataNode.Title, oldUrl, newUrl), dlgHandler);
                    }
                    return true;
                }
            }
            segmentUrl += nodeSegment;
            var childrenArray = dataNode.Nodes;

            for (var i = 0; i < childrenArray.length; i++) {
                if (this.currentNodeOrChildNodeFURLMoving(childrenArray[i], newListItemUrl, oldListItemUrl, dlgHandler, segmentUrl))
                    return true;
            }
        }
        return false;
    };
    QuickLaunchMenu.prototype.moveLink = function(listItem, parentList, nextSibling, postMoveFunction) {
        var dataNode = getNodeData(listItem);

        if (!fIsNullOrUndefined(listItem) && !fIsNullOrUndefined(dataNode)) {
            var oldIndex = getNodeIndex(listItem);
            var newIndex = -1;
            var oldArray = getNodeArray(listItem);

            if (fIsNullOrUndefined(oldArray)) {
                oldArray = this.MenuData.Nodes;
            }
            var draggedItemParentDataNode = getNodeData(listItem.parentNode.parentNode);
            var parentDataNode = null;
            var newArray = null;
            var parentItem = null;

            if (!fIsNullOrUndefined(nextSibling)) {
                parentItem = nextSibling.parentNode.parentNode;
                newArray = getNodeArray(nextSibling);
            }
            else if (!fIsNullOrUndefined(parentList) && parentList.parentNode.tagName.toUpperCase() == "LI") {
                parentItem = parentList.parentNode;
                newArray = getNodeArray(parentItem);
            }
            var parentNodeTitle;

            parentDataNode = getNodeData(parentItem);
            if (fIsNullOrUndefined(newArray)) {
                if (!fIsNullOrUndefined(parentDataNode))
                    newArray = parentDataNode.Nodes;
            }
            if (fIsNullOrUndefined(newArray)) {
                newArray = this.MenuData.Nodes;
            }
            var performLinkMove = function(fDoMove) {
                if (fDoMove == 1) {
                    oldArray.splice(oldIndex, 1);
                    if (!fIsNullOrUndefined(nextSibling)) {
                        newIndex = g_QuickLaunchMenu.findNodeDestination(nextSibling);
                        nextSibling.parentNode.insertBefore(listItem, nextSibling);
                        adjustListItemClass(listItem, nextSibling);
                    }
                    if (newIndex < 0)
                        newIndex = newArray.length;
                    newArray.splice(newIndex, 0, dataNode);
                    g_QuickLaunchMenu.NodeHash[dataNode.ClientKey] = dataNode;
                    g_QuickLaunchMenu.ArrayHash[dataNode.ClientKey] = newArray;
                    dumpQLMenuData();
                    EnableSaveButton();
                    if (typeof postMoveFunction == 'function')
                        postMoveFunction();
                }
                else {
                    listItem.style.display = "";
                    cleanEditFlyout(listItem.parentNode.parentNode);
                    cleanEditFlyout(listItem);
                    g_PageUrlToRedirect = null;
                }
                if (Boolean(g_fAsyncDialogOpened)) {
                    g_fAsyncDialogOpened = false;
                    resetDropSurface();
                    resetGhostLink();
                }
            };

            if (!fIsNullOrUndefined(parentDataNode)) {
                if (IsDataNodeTreeRestricted(parentItem, listItem)) {
                    parentNodeTitle = Boolean(parentDataNode) ? parentDataNode.Title : this.MenuData.StartingNodeTitle;
                    LaunchMessageDialog(Strings.STS.L_NavEditErrorDialogTitle, String.format(Strings.STS.L_DisallowAddChildrenMessage, parentDataNode.Title));
                    return false;
                }
            }
            if (draggedItemParentDataNode != parentDataNode) {
                if (dataNode.DisallowChangeParent) {
                    parentNodeTitle = Boolean(draggedItemParentDataNode) ? draggedItemParentDataNode.Title : this.MenuData.StartingNodeTitle;
                    LaunchMessageDialog(Strings.STS.L_NavEditErrorDialogTitle, String.format(Strings.STS.L_DisallowChangeParentMessage, dataNode.Title, parentNodeTitle));
                    return false;
                }
                var oldParentItem = listItem.parentNode.parentNode;

                if (this.currentNodeOrChildNodeFURLMoving(dataNode, determineNodeFUrl(parentItem), determineNodeFUrl(oldParentItem), performLinkMove))
                    return true;
            }
            performLinkMove(1);
            return true;
        }
        return false;
    };
    QuickLaunchMenu.prototype.addToMenuDOM = function(listItem, parentList, nextSibling, fFromEditBox) {
        if (fIsNullOrUndefined(nextSibling) || fFromEditBox) {
            var menu = document.getElementById(this.Id);

            if (!fIsNullOrUndefined(menu) && fIsNullOrUndefined(parentList)) {
                parentList = getFirstChildElem(menu);
            }
            if (!fIsNullOrUndefined(parentList)) {
                parentList.appendChild(listItem);
                adjustListItemClass(listItem, parentList);
                cleanEditFlyout(parentList.parentNode);
            }
        }
        else {
            nextSibling.parentNode.insertBefore(listItem, nextSibling);
            adjustListItemClass(listItem, nextSibling);
            cleanEditFlyout(nextSibling.parentNode.parentNode);
        }
    };
    QuickLaunchMenu.prototype.findNodeDestination = function(nextSibling) {
        var index = -1;

        if (!fIsNullOrUndefined(nextSibling)) {
            var prevItem = getPreviousSibling(nextSibling);

            if (!fIsNullOrUndefined(prevItem)) {
                index = getNodeIndex(prevItem) + 1;
            }
            var parentItem = nextSibling.parentNode.parentNode;

            if (!fIsNullOrUndefined(parentItem) && index < 0) {
                index = 0;
            }
        }
        return index;
    };
    QuickLaunchMenu.prototype.addLink = function(title, url, parentList, nextSibling, fSelected, fFromEditBox) {
    ULSLHj:
        ;
        var index = -1;
        var newNode = new Object();
        var menu = document.getElementById(this.Id);
        var targetArray = this.MenuData.Nodes;
        var parentDataNode = null;
        var parentNodeTitle;

        newNode.ClientKey = String(s_NewNodeId);
        newNode.Title = title;
        newNode.SimpleUrl = url;
        newNode.NodeType = "0";
        newNode.Nodes = [];
        newNode.DisallowDelete = false;
        newNode.DisallowChangeParent = false;
        newNode.DisallowAddChildren = false;
        newNode.DisallowEdit = false;
        newNode.IsHidden = false;
        if (!fIsNullOrUndefined(menu) && fIsNullOrUndefined(parentList) && fIsNullOrUndefined(nextSibling)) {
            var hiddenArea = document.getElementById(this.Id + "_HiddenAppendArea");

            if (!fIsNullOrUndefined(hiddenArea)) {
                nextSibling = hiddenArea;
            }
            else {
                nextSibling = getLastChildElem(menu.childNodes[0]);
            }
        }
        if (fIsNullOrUndefined(nextSibling)) {
            if (!fIsNullOrUndefined(parentList)) {
                parentDataNode = getNodeData(parentList.parentNode);
                if (!fIsNullOrUndefined(parentDataNode)) {
                    targetArray = parentDataNode.Nodes;
                    if (parentDataNode.DisallowAddChildren) {
                        parentNodeTitle = Boolean(parentDataNode) ? parentDataNode.Title : this.MenuData.StartingNodeTitle;
                        LaunchMessageDialog(Strings.STS.L_NavEditErrorDialogTitle, String.format(Strings.STS.L_DisallowAddChildrenMessage, parentDataNode.Title));
                        return null;
                    }
                }
            }
            else {
                parentList = getFirstChildElem(menu);
            }
        }
        else {
            if (fIsNullOrUndefined(parentList) && !fIsNullOrUndefined(nextSibling.parentNode)) {
                parentList = nextSibling.parentNode;
            }
            parentDataNode = getNodeData(nextSibling.parentNode.parentNode);
            index = this.findNodeDestination(nextSibling);
            targetArray = getNodeArray(nextSibling);
            if (fIsNullOrUndefined(targetArray) && !fIsNullOrUndefined(parentDataNode)) {
                targetArray = parentDataNode.Nodes;
            }
            if (fIsNullOrUndefined(targetArray)) {
                targetArray = this.MenuData.Nodes;
            }
            if (!fIsNullOrUndefined(parentDataNode) && parentDataNode.DisallowAddChildren) {
                parentNodeTitle = Boolean(parentDataNode) ? parentDataNode.Title : this.MenuData.StartingNodeTitle;
                LaunchMessageDialog(Strings.STS.L_NavEditErrorDialogTitle, String.format(Strings.STS.L_DisallowAddChildrenMessage, parentDataNode.Title));
                return null;
            }
        }
        var orientation = hasClassName(parentList, "dynamic") ? MenuOrientation.Flyout : g_QuickLaunchMenu.Orientation;
        var listItem = createListItem(title, url, orientation, fSelected);

        listItem.id = this.Id + "_" + newNode.ClientKey.toString();
        parentList.insertBefore(listItem, nextSibling);
        adjustListItemClass(listItem, nextSibling);
        if (index < 0) {
            index = targetArray.length;
        }
        this.ensureDragDropFlyout(listItem);
        AddOrEnableDroppable(getFirstChildElem(listItem));
        AddOrEnableDraggable(getFirstChildElem(listItem));
        targetArray.splice(index, 0, newNode);
        this.ArrayHash[newNode.ClientKey] = targetArray;
        this.NodeHash[newNode.ClientKey] = newNode;
        dumpQLMenuData();
        resetDropSurface();
        EnableSaveButton();
        s_NewNodeId++;
        return listItem;
    };
    QuickLaunchMenu.prototype.ensureDragDropFlyout = function(listItem) {
        if (DetermineNodeDepth(listItem) < this.StaticLevels || DetermineNodeDepth(listItem) == this.StaticLevels && this.DynamicLevels == 0) {
            return;
        }
        var list = listItem.querySelector("UL");

        if (fIsNullOrUndefined(list)) {
            list = document.createElement("UL");
            list.setAttribute("class", "dynamic");
            listItem.setAttribute("hoverDebouncer", "0");
            listItem.appendChild(list);
        }
        var flyoutDropArea = list.querySelector("." + g_AppendDropArea);

        if (fIsNullOrUndefined(flyoutDropArea)) {
            flyoutDropArea = document.createElement("LI");
            addClassName(flyoutDropArea, "dynamic");
            addClassName(flyoutDropArea, g_AppendDropArea);
            list.appendChild(flyoutDropArea);
        }
        var defaultTextDiv = null;

        if (!fIsNullOrUndefined(flyoutDropArea) && !fIsNullOrUndefined(flyoutDropArea.childNodes) && flyoutDropArea.childNodes.length == 0) {
            defaultTextDiv = document.createElement("DIV");
            defaultTextDiv.setAttribute("class", "dynamic menu-item ms-navedit-dropLinkDiv");
            defaultTextDiv.innerHTML = STSHtmlEncode(Strings.STS.L_DefaultDropMessage);
            flyoutDropArea.appendChild(defaultTextDiv);
            AddOrEnableDroppable(defaultTextDiv);
        }
        if (!fIsNullOrUndefined(defaultTextDiv) && list.childNodes.length > 1) {
            addClass(defaultTextDiv, "ms-hide");
        }
        list.id = "NodeList_" + listItem.id.substring(g_QuickLaunchMenu.Id.length + 1);
        AddOrEnableDroppable(list);
        listItem.setAttribute("aria-haspopup", "true");
    };
    QuickLaunchMenu.prototype.addDeleteLink = function(nodeList) {
        if (!fIsNullOrUndefined(nodeList) && nodeList.tagName.toUpperCase() == "UL") {
            var liNodes = nodeList.querySelectorAll("li");
            var nLength = liNodes.length;

            for (var i = 0; i < nLength; i++) {
                if (hasClassName(liNodes[i], g_NavMenuEditLinkItemClassName) || hasClassName(liNodes[i], g_AppendDropArea))
                    continue;
                var node = liNodes[i];
                var cListNodes = node.childNodes;
                var cNodesLength = cListNodes.length;
                var linkTable = null;
                var dataNode = getNodeData(node);

                this.ensureDragDropFlyout(node);
                for (var j = 0; j < cNodesLength; j++) {
                    var cNode = cListNodes[j];
                    var orientation = hasClassName(nodeList, "dynamic") ? MenuOrientation.Flyout : g_QuickLaunchMenu.Orientation;

                    if (cNode.tagName.toUpperCase() == "A" || cNode.tagName.toUpperCase() == "SPAN" && !hasClassName(cNode, "ms-hidden")) {
                        if (!fIsNullOrUndefined(dataNode)) {
                            if (dataNode.IsHidden === true || dataNode.IsTrimmed === true) {
                                addClassName(cNode, "ms-navedit-hiddenLink");
                            }
                        }
                        if (linkTable != null) {
                            var linkCells = linkTable.getElementsByTagName("TD");
                            var itemLinkCell = linkCells[0];

                            if (fIsNullOrUndefined(itemLinkCell))
                                continue;
                            if (hasClassName(cNode, "menu-item"))
                                cNode.setAttribute("tabIndex", "0");
                            itemLinkCell.appendChild(cNode);
                            cNodesLength--;
                            j--;
                        }
                        else {
                            var fAddDeleteLink = true;
                            var fHideLink = false;

                            if (!fIsNullOrUndefined(dataNode) && dataNode.DisallowDelete === true) {
                                fAddDeleteLink = false;
                            }
                            if (!fIsNullOrUndefined(dataNode) && dataNode.AllowHide === true) {
                                fHideLink = true;
                            }
                            linkTable = createEditNodeFromLink(cNode, orientation, fAddDeleteLink, fHideLink);
                            node.insertBefore(linkTable, cNode);
                            node.removeChild(cNode);
                        }
                    }
                    else if (cNode.tagName.toUpperCase() == "UL") {
                        this.addDeleteLink(cNode);
                    }
                }
                hookUpLinkEditHandlers(node);
                if (g_QuickLaunchMenu.Orientation == MenuOrientation.Horizontal && hasClassName(node, "static")) {
                    addClass(node, "ms-verticalAlignTop");
                }
                AttachFlyoutHandlers(node);
            }
        }
    };
    QuickLaunchMenu.prototype.addDeleteLinks = function() {
        if (this.EditMode == false)
            return;
        var rootElement = document.getElementById(this.Id);

        if (!fIsNullOrUndefined(rootElement)) {
            var rootList = getFirstChildElem(rootElement);

            this.addDeleteLink(rootList);
            var hiddenArea = document.createElement("LI");

            hiddenArea.setAttribute("class", "static");
            hiddenArea.id = this.Id + "_HiddenAppendArea";
            addClassName(hiddenArea, g_AppendDropArea);
            var hiddenDiv = document.createElement("DIV");

            hiddenDiv.setAttribute("class", "static menu-item ms-navedit-hiddenAppendArea");
            hiddenDiv.innerHTML = STSHtmlEncode(Strings.STS.L_DragDropMenuItemText);
            hiddenArea.appendChild(hiddenDiv);
            if (!fIsNullOrUndefined(getLastChildElem(rootList)))
                rootList.insertBefore(hiddenArea, getLastChildElem(rootList));
            else
                rootList.appendChild(hiddenArea);
            AddOrEnableDroppable(hiddenDiv);
        }
    };
    DropNodeQuadrant = {
        None: 0,
        First: 1,
        Second: 2,
        Third: 3,
        Fourth: 4
    };
    GhostLinkData.prototype = {
        NodeId: undefined,
        LinkUrl: undefined,
        LinkName: undefined,
        Selected: undefined
    };
    DialogReturnCode = {
        Cancel: 0,
        OK: 1
    };
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("quicklaunch.js");
    }
}
var g_QuickLaunchMenu;
var g_CommonIconClusterUrl;
var g_RteDialogUrl;
var g_EditLinkDlgIconUrl;
var g_NavIconClusterUrl;
var g_HideLinkIconClass;
var g_ShowLinkIconClass;
var g_DropNodeMarker;
var g_LinkNodeMarker;
var g_ArrowNodeMarker;
var g_EditAreaNodeMarker;
var g_EditSpanNodeMarker;
var g_ItemSelectedClassName;
var g_NavMenuItemLinkName;
var g_NavMenuDeleteLinkClassName;
var g_NavMenuHideLinkClassName;
var g_NavMenuHideSpanClassName;
var g_NavMenuDeleteSpanClassName;
var g_NavMenuDeleteImgClassName;
var g_NavMenuEditLinkItemClassName;
var g_SaveFailedIconClass;
var g_SaveFailedSpanClass;
var g_AppendDropArea;
var g_PageTitleInContentAreaIdSuffix;
var g_PageTitleInTitleAreaIdSuffix;
var g_BodyContainerId;
var g_navItemDataKey;
var g_dndMenuItemQL;
var g_dndPageTitleDataKey;
var g_dndPageTitleQL;
var g_dndSiteContentQL;
var g_dndSiteContentDataKey;
var g_EditCallbackOperationName;
var g_ReadCallbackOperationName;
var g_SaveCallbackOperationName;
var g_MenuCallbackFunctionTemplate;
var g_QLDropSurfClassName;
var g_prevDropSurfaceClass;
var g_lastNavErrorMessage;
var g_currentQuickLaunchMenuId;
var g_PageUrlToRedirect;
var g_CallbackTimer;
var g_CallbackTimeout;
var g_EditBoxMinWidth;
var g_EditBoxDivMinWidth;
var g_EditBoxMinHeight;
var g_DefaultDialogWidth;
var g_EditFlyoutOpenDelay;
var g_TargetBehindDropNode;
var g_TargetAfterDropNode;
var g_NavEditMouseDragTolerance;
var g_PrevMouseDragTolerance;
var g_lastDropQuadrant;
var s_NewNodeId;
var g_prevUnloadHandler;
var g_CurrentListItem;
var g_activeFlyout;
var g_ghostLinkNode;
var g_lastDropNode;
var g_ghostLinkData;
var g_fAsyncDialogOpened;
var g_QLDebug;
var MenuOrientation;

function QuickLaunchMenu(id, staticLevels, dynamicLevels, orientation, startingNodeUrl) {
    this.Id = id;
    this.StaticLevels = staticLevels;
    this.DynamicLevels = dynamicLevels;
    this.Orientation = orientation;
    this.StartingNodeUrl = startingNodeUrl;
    this.NumItems = 0;
}
function arrayHasValidDataNodes(array) {
    if (!fIsNullOrUndefined(array)) {
        var nLength = array.length;

        for (var i = 0; i < nLength; i++) {
            if (fIsNullOrUndefined(array[i].IsDeleted) || !array[i].IsDeleted)
                return true;
        }
    }
    return false;
}
function determineNodeFUrl(item, url) {
    var dataNode = getNodeData(item);

    if (!fIsNullOrUndefined(item) && !fIsNullOrUndefined(dataNode))
        return determineNodeFUrl(item.parentNode.parentNode, "/" + dataNode.FriendlyUrlSegment + (!fIsNullOrUndefined(url) ? url : ""));
    else if (!fIsNullOrUndefined(url))
        return url.length > 0 ? url.substring(1) : url;
    else
        return "";
}
function getNodeId(elem) {
    if (!fIsNullOrUndefined(elem) && !fIsNullOrUndefined(elem.id)) {
        return elem.id.substring(g_QuickLaunchMenu.Id.length + 1);
    }
    return null;
}
function getNodeUrl(elem) {
    var dataNode = getNodeData(elem);

    if (!fIsNullOrUndefined(dataNode)) {
        if (dataNode.NodeType == 1) {
            return (g_QuickLaunchMenu.MenuData.FriendlyUrlPrefix.length > 0 ? String(g_QuickLaunchMenu.MenuData.FriendlyUrlPrefix) : "") + determineNodeFUrl(document.getElementById(g_QuickLaunchMenu.Id + "_" + dataNode.ClientKey));
        }
        else {
            return dataNode.SimpleUrl;
        }
    }
    return null;
}
function getNodeData(elem) {
    if (!fIsNullOrUndefined(elem) && !fIsNullOrUndefined(elem.id)) {
        var nodeId = elem.id.substring(g_QuickLaunchMenu.Id.length + 1);

        return g_QuickLaunchMenu.NodeHash[nodeId];
    }
    return null;
}
function getNodeArray(elem) {
    if (!fIsNullOrUndefined(elem) && !fIsNullOrUndefined(elem.id)) {
        var nodeId = elem.id.substring(g_QuickLaunchMenu.Id.length + 1);

        return g_QuickLaunchMenu.ArrayHash[nodeId];
    }
    return null;
}
function getNodeChildren(dataNode) {
    if (!fIsNullOrUndefined(dataNode)) {
        var childrenArray = dataNode.Nodes;

        for (var i = 0; i < childrenArray.length; i++) {
            var childNode = childrenArray[i];

            childrenArray = childrenArray.concat(getNodeChildren(childNode));
        }
        return childrenArray;
    }
    return null;
}
function getNodeIndex(elem) {
    if (!fIsNullOrUndefined(elem) && !fIsNullOrUndefined(elem.id)) {
        var nodeId = elem.id.substring(g_QuickLaunchMenu.Id.length + 1);
        var array = g_QuickLaunchMenu.ArrayHash[nodeId];

        if (!fIsNullOrUndefined(array)) {
            var nLength = array.length;

            for (var i = 0; i < nLength; i++) {
                if (array[i].ClientKey == nodeId)
                    return i;
            }
        }
    }
    return -1;
}
function addNodesFromArray(destArray, nodeArray) {
    if (!fIsNullOrUndefined(nodeArray) && !fIsNullOrUndefined(destArray)) {
        var nLength = nodeArray.length;

        for (var i = 0; i < nLength; i++) {
            destArray.push(nodeArray[i]);
        }
    }
}
function IsDataNodeRestricted(listItem, checkedItem) {
    var dataNode = getNodeData(listItem);

    if (dataNode != null) {
        if (dataNode.DisallowAddChildren === true && (checkedItem == null || !isAncestor(listItem, checkedItem))) {
            return true;
        }
    }
    return false;
}
function IsDataNodeTreeRestricted(listItem, checkedItem) {
    var curListItem = listItem;

    while (curListItem != null && curListItem.tagName != null && curListItem.tagName.toUpperCase() == "LI") {
        var fRestrictNode = IsDataNodeRestricted(curListItem, checkedItem);

        if (fRestrictNode)
            return true;
        curListItem = getListItem(curListItem.parentNode);
    }
    return false;
}
function OnAsyncOperationFailure(message) {
    var errorMsgArea = document.getElementById(g_currentQuickLaunchMenuId + "_NavMenu_ErrorMsg");

    if (!fIsNullOrUndefined(errorMsgArea)) {
        errorMsgArea.title = message;
        errorMsgArea.innerHTML = "<span class='ms-verticalAlignMiddle " + g_SaveFailedSpanClass + "'>" + "<img class='" + g_SaveFailedIconClass + "' src='" + g_CommonIconClusterUrl + "'/></span>  " + "<span class='ms-verticalAlignMiddle ms-error'>" + STSHtmlEncode(message) + "</span>";
    }
    ShowUserInputElements();
    HideLoadingIndicator();
}
function AspMenuHandleDataRefresh(result, ctxParam) {
    if (g_CallbackTimer != null) {
        window.clearTimeout(g_CallbackTimer);
        g_CallbackTimer = null;
    }
    var jsonData = eval("(" + result + ")");
    var needsMenuRefresh = jsonData["IEditableSiteMapProvider_RequiresDataRefresh"];

    if (!fIsNullOrUndefined(jsonData["Error"]) || !fIsNullOrUndefined(needsMenuRefresh)) {
        if (!Boolean(g_lastNavErrorMessage)) {
            g_lastNavErrorMessage = jsonData["Error"];
        }
        if (Boolean(g_QuickLaunchMenu) && Boolean(g_QuickLaunchMenu.EditMode)) {
            if (!fIsNullOrUndefined(needsMenuRefresh)) {
                g_QuickLaunchMenu.ensureMenuData(false);
                return;
            }
            QuickLaunchInitReadMode();
            return;
        }
    }
    else {
        g_QuickLaunchMenu.storeMenuData(jsonData);
        g_QuickLaunchMenu.switchMode();
        if (Boolean(g_PageUrlToRedirect)) {
            STSNavigate(g_PageUrlToRedirect);
            g_PageUrlToRedirect = null;
        }
    }
    if (Boolean(g_lastNavErrorMessage)) {
        OnAsyncOperationFailure(g_lastNavErrorMessage);
        g_lastNavErrorMessage = null;
    }
}
function AspMenuHandleDataError(exception, ctxParam) {
    if (g_CallbackTimer != null) {
        window.clearTimeout(g_CallbackTimer);
        g_CallbackTimer = null;
    }
    OnAsyncOperationFailure(exception);
}
function AspMenuHandleSaveError(exception, ctxParam) {
    if (g_CallbackTimer != null) {
        window.clearTimeout(g_CallbackTimer);
        g_CallbackTimer = null;
    }
    OnAsyncOperationFailure(Strings.STS.L_SaveFailedMsg + " " + exception);
    EnableSaveButton();
}
function AspMenuHandleTimeout() {
    g_CallbackTimer = null;
    OnAsyncOperationFailure(Strings.STS.L_NavEditAsyncOperationFailedMsg);
}
function InitializeAspMenuControl(menuId) {
    var menuControlId = "g_" + menuId;
    var menuControl = window[menuControlId];

    if (!fIsNullOrUndefined(menuControl) && fIsNullOrUndefined(menuControl.get_element())) {
        menuControl.dispose();
        menuControl = null;
        window[menuControlId] = null;
    }
    if (fIsNullOrUndefined(menuControl)) {
        window[menuControlId] = Sys.Component.create(SP.UI.AspMenu, null, null, null, $get(menuId));
    }
    else {
        menuControl.initialize();
    }
}
function getTextFromContentEditableDiv(elem) {
    var text = "";
    var textObj = getFirstChildElem(elem);

    if (!fIsNullOrUndefined(textObj) && !fIsNullOrUndefined(textObj.tagName) && textObj.tagName.toUpperCase() == "A")
        text = textObj.innerHTML;
    else {
        text = fIsNullOrUndefined(elem.textContent) ? elem.innerText : elem.textContent;
    }
    return text;
}
function onEditItemBlur(editElem) {
    var fSelected = hasClassName(getFirstChildElem(editElem.parentNode), g_ItemSelectedClassName);
    var title = getTextFromContentEditableDiv(editElem.parentNode.firstChild);
    var listItem = getListItem(editElem);
    var nodeData = getNodeData(listItem);

    if (!fIsNullOrUndefined(nodeData)) {
        var url = getNodeUrl(listItem);

        if (title.length == 0) {
            if (url == null || url.length == 0)
                return;
            title = url;
        }
        if (nodeData.Title != title)
            EnableSaveButton();
        nodeData.Title = title;
        resetEditBox();
        updateListItem(listItem, title, url);
        dumpQLMenuData();
    }
}
function onEditItemKeyDown(evt) {
    if (!Boolean(evt))
        evt = window.event;
    switch (evt.keyCode) {
    case 9:
        var editBox = findEditBox();

        if (editBox != null && document.activeElement != editBox)
            blurEditBox();
        break;
    case 13:
        blurEditBox();
        return false;
    case 27:
        resetEditBox();
        return false;
    default:
        break;
    }
    return undefined;
}
function onBeforeEditModeUnload(evt) {
    if (!Boolean(evt))
        evt = window.event;
    evt.cancelBubble = true;
    evt.returnValue = Strings.STS.L_EditModeLeaveMsg;
    if (Boolean(evt.stopPropagation)) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    return Strings.STS.L_EditModeLeaveMsg;
}
function adjustListItemClass(targetItem, referenceItem) {
    if (fIsNullOrUndefined(targetItem) || fIsNullOrUndefined(targetItem.tagName) || targetItem.tagName.toUpperCase() != "LI" || fIsNullOrUndefined(referenceItem) || fIsNullOrUndefined(referenceItem.tagName) || referenceItem.tagName.toUpperCase() != "LI")
        return;
    if (hasClassName(targetItem, "dynamic") && (hasClassName(referenceItem, "static") || hasClassName(referenceItem.parentNode, "static"))) {
        removeClassName(targetItem, "dynamic");
        addClassName(targetItem, "static");
    }
    else if (hasClassName(targetItem, "static") && (hasClassName(referenceItem, "dynamic") || hasClassName(referenceItem.parentNode, "dynamic"))) {
        removeClassName(targetItem, "static");
        addClassName(targetItem, "dynamic");
    }
    var childList = targetItem.querySelector("UL");

    if (!fIsNullOrUndefined(childList)) {
        var targetItemDepth = DetermineNodeDepth(targetItem);

        if (targetItemDepth < g_QuickLaunchMenu.StaticLevels && hasClassName(childList, "dynamic")) {
            removeClassName(childList, "dynamic");
            addClassName(childList, "static");
        }
        else if (targetItemDepth >= g_QuickLaunchMenu.StaticLevels && hasClassName(childList, "static")) {
            removeClassName(childList, "static");
            addClassName(childList, "dynamic");
        }
    }
}
function ensureGhostLink(listItem, parentList, nextSibling) {
    if (listItem == null || parentList == null && nextSibling == null)
        return;
    var oldGhostParentItem = null;
    var ghostLink = g_ghostLinkNode;

    if (parentList == null) {
        parentList = nextSibling.parentNode;
    }
    if (ghostLink == null) {
        var orientation = hasClassName(parentList, "dynamic") ? MenuOrientation.Flyout : g_QuickLaunchMenu.Orientation;

        ghostLink = makeGhostFromItem(listItem, orientation);
        ghostLink.style.display = "inline-block";
        g_ghostLinkData = new GhostLinkData(listItem.id, null, null, false);
        g_ghostLinkNode = ghostLink;
    }
    else if (g_ghostLinkNode.parentNode != null) {
        oldGhostParentItem = g_ghostLinkNode.parentNode.parentNode;
    }
    var adjustRefItem = nextSibling;

    if (adjustRefItem == null) {
        adjustRefItem = getLastChildElem(parentList);
    }
    g_QuickLaunchMenu.addToMenuDOM(g_ghostLinkNode, parentList, nextSibling, false);
    adjustListItemClass(g_ghostLinkNode, adjustRefItem);
    focusOnLinkNode(g_ghostLinkNode);
    if (listItem != g_ghostLinkNode) {
        listItem.style.display = "none";
    }
    if (oldGhostParentItem != null) {
        cleanEditFlyout(oldGhostParentItem);
        var newParentItem = parentList.parentNode;

        if (newParentItem != oldGhostParentItem && !isAncestor(oldGhostParentItem, newParentItem)) {
            HideFlyout(oldGhostParentItem);
        }
    }
}
function findSiblingItem(refItem, fMoveForward) {
    if (fMoveForward) {
        return getNextSibling(refItem);
    }
    return getPreviousSibling(refItem);
}
function keybMoveLink(listItem, refItem, fMoveForward, fLookupNextLink) {
    var ghostLink = null;
    var nextSibling = null;

    if (listItem == null) {
        listItem = (ghostLink = g_ghostLinkNode);
    }
    else if (listItem != g_ghostLinkNode) {
        g_CurrentListItem = listItem;
    }
    if (refItem == null) {
        refItem = g_ghostLinkNode;
    }
    if (listItem == null || refItem == null)
        return null;
    if (listItem != refItem) {
        nextSibling = refItem;
    }
    if (nextSibling == null || fMoveForward && !fLookupNextLink) {
        nextSibling = findSiblingItem(refItem, fMoveForward);
    }
    if (nextSibling == null && fLookupNextLink) {
        nextSibling = findSiblingItem(refItem, false);
    }
    if (nextSibling != null && nextSibling.style.display == "none") {
        nextSibling = findSiblingItem(nextSibling, fMoveForward);
    }
    var parentList = refItem.parentNode;
    var parentListItem = getListItem(parentList);
    var nodeDepth = DetermineMaxListDepth(listItem, 1, 1);
    var dropNodeDepth = DetermineNodeDepth(nextSibling != null ? nextSibling : refItem);
    var dropNodeMaxDepth = g_QuickLaunchMenu.StaticLevels + g_QuickLaunchMenu.DynamicLevels - dropNodeDepth;
    var fRestrictDropNodeParent = IsDataNodeTreeRestricted(parentListItem, g_CurrentListItem);
    var fRestrictDropNode = IsDataNodeRestricted(nextSibling, g_CurrentListItem);

    if (fRestrictDropNodeParent)
        nextSibling = null;
    if (listItem == refItem) {
        if (nextSibling == null || hasClassName(nextSibling, g_AppendDropArea) || hasClassName(nextSibling, g_EditAreaNodeMarker)) {
            if (parentListItem != parentList.parentNode) {
                return null;
            }
            else {
                return keybMoveLink(listItem, parentListItem, fMoveForward, fLookupNextLink);
            }
        }
        else {
            if (!fLookupNextLink) {
                if (dropNodeMaxDepth >= nodeDepth && !fRestrictDropNode) {
                    g_QuickLaunchMenu.ensureDragDropFlyout(nextSibling);
                    var childList = nextSibling.querySelector("UL");

                    if (!fIsNullOrUndefined(childList)) {
                        ShowFlyout(nextSibling);
                        if (childList.childNodes.length > 0 && fMoveForward) {
                            nextSibling = getFirstChildElem(childList);
                        }
                        else {
                            parentList = childList;
                            nextSibling = null;
                            var lastChild = getLastChildElem(childList);

                            if (lastChild != null && hasClassName(lastChild, g_AppendDropArea))
                                nextSibling = lastChild;
                        }
                    }
                    else if (dropNodeDepth < g_QuickLaunchMenu.StaticLevels) {
                        var newChildList = document.createElement("UL");

                        newChildList.className = "static";
                        nextSibling.appendChild(newChildList);
                        parentList = newChildList;
                        nextSibling = null;
                    }
                }
                else if (fMoveForward) {
                    nextSibling = findSiblingItem(nextSibling, fMoveForward);
                }
            }
        }
    }
    if (!fLookupNextLink) {
        ensureGhostLink(listItem, parentList, nextSibling);
    }
    else if (nextSibling == null && parentList != null) {
        nextSibling = getFirstChildElem(childList);
        if (hasClassName(nextSibling, g_AppendDropArea))
            nextSibling = null;
    }
    return nextSibling;
}
function onLinkClicked(link) {
    if (!Boolean(link))
        return;
    var listItem = getListItem(link);
    var editBox = findEditBox();

    if (Boolean(editBox) && listItem != getListItem(editBox)) {
        onEditItemBlur(editBox);
        editBox = null;
    }
    if (fIsNullOrUndefined(editBox)) {
        if (!isAncestor(g_activeFlyout, listItem) || g_activeFlyout == listItem)
            HideFlyout(g_activeFlyout, true);
        if (!fIsNullOrUndefined(listItem)) {
            var textNode = link.querySelector("span.menu-item-text");
            var fSelected = false;
            var fUrlEditable = false;
            var dataNode = getNodeData(listItem);

            if (!fIsNullOrUndefined(dataNode) && dataNode.DisallowEdit === false) {
                if (dataNode.NodeType == 0) {
                    fUrlEditable = true;
                }
                if (hasClassName(link, g_ItemSelectedClassName)) {
                    fSelected = true;
                }
                if (fIsNullOrUndefined(textNode))
                    textNode = link;
                var linkTitle = fIsNullOrUndefined(textNode.textContent) ? textNode.innerText : textNode.textContent;
                var linkUrl = getNodeUrl(listItem);
                var linkNodeClass = link.getAttribute("class");
                var editTable = listItem.querySelector("table.ms-core-listMenuEdit");

                editBox = createEditBox("SPAN", fUrlEditable);
                if (!fIsNullOrUndefined(linkNodeClass) && linkNodeClass.length > 0) {
                    var itemSpan = editBox.querySelector("span.ms-navedit-itemSpan");

                    if (!Boolean(itemSpan))
                        itemSpan = editBox;
                    addClassName(itemSpan, linkNodeClass);
                    removeClassName(itemSpan, g_ItemSelectedClassName);
                }
                link.parentNode.insertBefore(editBox, link);
                if (!Boolean(editTable))
                    editTable = listItem;
                listItem.insertBefore(editBox, listItem.firstChild);
                var editBoxWidth = editTable.offsetWidth < g_EditBoxMinWidth ? g_EditBoxMinWidth : editTable.offsetWidth;

                editBox.style.width = String(editBoxWidth) + "px";
                editBox.style.height = String(editTable.offsetHeight < g_EditBoxMinHeight ? g_EditBoxMinHeight : editTable.offsetHeight) + "px";
                var editBoxDiv = findEditBox();

                if (Boolean(editBoxDiv)) {
                    if (Boolean(textNode)) {
                        var styleTop = AbsTop(editBoxDiv) - AbsTop(textNode);

                        editBox.style.top = String(editBox.offsetTop - styleTop) + "px";
                        editBoxDiv.style.height = String(textNode.offsetHeight) + "px";
                    }
                    editBoxDiv.style.width = String(editBoxDiv.offsetWidth < g_EditBoxDivMinWidth ? g_EditBoxDivMinWidth : editBoxDiv.offsetWidth) + "px";
                    setInnerText(editBoxDiv, linkTitle);
                }
                if (browseris.safari && document.documentElement.dir === 'rtl') {
                    editBox.style.left = String(AbsLeft(listItem) + listItem.offsetWidth - editBox.offsetWidth) + "px";
                }
                focusEditBox();
            }
        }
    }
}
function hookUpLinkEditHandlers(link) {
    if (!fIsNullOrUndefined(link) && !hasClassName(link, "ms-core-listMenu-item")) {
        link = link.querySelector(".ms-core-listMenu-item");
    }
    var keybTarget = fIsNullOrUndefined(link) ? document.getElementById(g_QuickLaunchMenu.Id) : link;

    if (!fIsNullOrUndefined(keybTarget)) {
        keybTarget.onkeydown = function(evt) {
            var evtObj = Boolean(evt) ? evt : window.event;
            var keyCode = GetEventKeyCode(evtObj);
            var fMoveForward = true;
            var fkeybLinkMove = false;
            var originalItem = null;

            if (g_ghostLinkData != null && !fIsNullOrUndefined(g_ghostLinkData.NodeId))
                originalItem = document.getElementById(String(g_ghostLinkData.NodeId));
            switch (keyCode) {
            case 9:
            case 27:
                if (g_ghostLinkNode != null && originalItem != null) {
                    originalItem.style.display = "";
                    focusOnLinkNode(originalItem);
                    resetGhostLink();
                    CancelEvent(evtObj);
                }
                break;
            case 13:
                if (g_ghostLinkNode != null && originalItem != null) {
                    var newParentListItem = g_ghostLinkNode.parentNode.parentNode;
                    var oldParentItem = originalItem.parentNode.parentNode;
                    var postMoveHandler = function() {
                        originalItem.style.display = "";
                        cleanEditFlyout(originalItem);
                        if (hasFlyout(oldParentItem) && newParentListItem.id != oldParentItem.id) {
                            cleanEditFlyout(oldParentItem);
                            HideFlyout(oldParentItem);
                        }
                    };

                    if (!g_QuickLaunchMenu.moveLink(originalItem, null, g_ghostLinkNode, postMoveHandler)) {
                        cleanEditFlyout(newParentListItem);
                        HideFlyout(newParentListItem);
                    }
                    focusOnLinkNode(originalItem);
                    resetGhostLink();
                    CancelEvent(evtObj);
                    return false;
                }
                else if (hasClassName(this, "ms-core-listMenu-item")) {
                    onLinkClicked(this);
                    CancelEvent(evtObj);
                    return false;
                }
                break;
            case 37:
            case 38:
                if (evtObj.ctrlKey) {
                    fMoveForward = false;
                    fkeybLinkMove = true;
                }
                break;
            case 39:
            case 40:
                if (evtObj.ctrlKey) {
                    fkeybLinkMove = true;
                }
                break;
            default:
                break;
            }
            if (fkeybLinkMove) {
                var listItem = this.tagName.toUpperCase() == "DIV" ? null : getListItem(this);

                keybMoveLink(listItem, listItem, fMoveForward, false);
                CancelEvent(evtObj);
                return false;
            }
        };
    }
    if (fIsNullOrUndefined(link))
        return;
    var arrowNode = link.querySelector("span.additional-background");

    if (!fIsNullOrUndefined(arrowNode)) {
        arrowNode.onclick = function(evt) {
            if (!Boolean(evt))
                evt = window.event;
            var target = GetEventSrcElement(evt);

            if (fIsNullOrUndefined(target) || !hasClassName(target, "menu-item-text")) {
                ToggleFlyout(getListItem(this));
                resetDropSurface();
                CancelEvent(evt);
            }
            return false;
        };
    }
    if (!hasClassName(link, "ms-core-listMenu-item")) {
        link = link.querySelector(".ms-core-listMenu-item");
    }
    link.onclick = function(evt) {
        if (!Boolean(evt))
            evt = window.event;
        onLinkClicked(this);
        cancelDefault(evt);
        return false;
    };
}
function removeLinkIconClassNames(element) {
    if (Boolean(element)) {
        removeClassName(element, g_HideLinkIconClass);
        removeClassName(element, g_ShowLinkIconClass);
    }
}
function createEditNodeFromLink(link, orientation, fAddDeleteLink, fAddHideLink) {
    if (fIsNullOrUndefined(link))
        return null;
    var linkTable = document.createElement("TABLE");

    linkTable.setAttribute("class", "ms-core-listMenuEdit ms-core-tableNoSpace ms-verticalAlignTop");
    var itemLinkCell = document.createElement("TD");
    var linkCopy = link.cloneNode(true);

    if (hasClassName(linkCopy, "menu-item"))
        linkCopy.setAttribute("tabIndex", "0");
    itemLinkCell.appendChild(linkCopy);
    addClassName(itemLinkCell, "ms-navedit-linkCell");
    var delLinkCell = document.createElement("TD");

    addClassName(delLinkCell, "ms-verticalAlignMiddle");
    if (fAddDeleteLink) {
        var delLink = document.createElement("A");

        delLink.title = STSHtmlEncode(Strings.STS.L_DeleteLinkTooltip);
        addClassName(delLink, g_NavMenuDeleteLinkClassName);
        delLink.onclick = function(evt) {
            if (!Boolean(evt))
                evt = window.event;
            var li = getListItem(this);

            if (!fIsNullOrUndefined(li)) {
                var r = true;
                var dataNode = getNodeData(li);

                if (!fIsNullOrUndefined(dataNode) && arrayHasValidDataNodes(dataNode.Nodes)) {
                    LaunchConfirmDialog(Strings.STS.L_NavEditConfirmationDialogTitle, Strings.STS.L_MultipleLinkDeleteMsg, function(dialogResult) {
                        if (dialogResult == 1)
                            g_QuickLaunchMenu.deleteLink(li);
                    });
                }
                else {
                    g_QuickLaunchMenu.deleteLink(li);
                }
            }
            cancelDefault(evt);
            return false;
        };
        delLink.href = "#";
        var delSpan = document.createElement("SPAN");

        addClassName(delSpan, g_NavMenuDeleteSpanClassName);
        var delImage = document.createElement("IMG");

        delImage.setAttribute("src", g_CommonIconClusterUrl);
        addClassName(delImage, "ms-cancelImg");
        delSpan.appendChild(delImage);
        delLink.appendChild(delSpan);
        delLinkCell.appendChild(delLink);
    }
    else if (fAddHideLink) {
        var hideLink = document.createElement("A");

        addClassName(hideLink, g_NavMenuDeleteLinkClassName);
        addClassName(hideLink, g_NavMenuHideLinkClassName);
        hideLink.onclick = function(evt) {
            if (!Boolean(evt))
                evt = window.event;
            var li = getListItem(this);

            if (!fIsNullOrUndefined(li)) {
                var isHidden = g_QuickLaunchMenu.toggleHideLink(li);
                var hideImage = this.querySelector("img");

                if (!fIsNullOrUndefined(hideImage)) {
                    if (isHidden) {
                        hideLink.title = STSHtmlEncode(Strings.STS.L_ShowLinkTooltip);
                        hideImage.className = g_HideLinkIconClass;
                    }
                    else {
                        hideLink.title = STSHtmlEncode(Strings.STS.L_HideLinkTooltip);
                        hideImage.className = g_ShowLinkIconClass;
                    }
                }
            }
            cancelDefault(evt);
            return false;
        };
        hideLink.href = "#";
        var hideSpan = document.createElement("SPAN");

        addClassName(hideSpan, g_NavMenuHideSpanClassName);
        var nodeData = getNodeData(getListItem(link));
        var hideNodeImage = document.createElement("IMG");

        hideNodeImage.setAttribute("src", g_NavIconClusterUrl);
        if (nodeData != null && nodeData.IsHidden) {
            addClassName(hideNodeImage, g_HideLinkIconClass);
            hideLink.title = STSHtmlEncode(Strings.STS.L_ShowLinkTooltip);
        }
        else {
            addClassName(hideNodeImage, g_ShowLinkIconClass);
            hideLink.title = STSHtmlEncode(Strings.STS.L_HideLinkTooltip);
        }
        hideSpan.appendChild(hideNodeImage);
        hideLink.appendChild(hideSpan);
        delLinkCell.appendChild(hideLink);
    }
    var linkRow = document.createElement("TR");

    linkTable.appendChild(linkRow);
    linkRow.appendChild(itemLinkCell);
    linkRow.appendChild(delLinkCell);
    if (Boolean(fAddDeleteLink) || Boolean(fAddHideLink))
        addClassName(delLinkCell, "ms-navedit-deletelinkCell");
    return linkTable;
}
function createLinkNode(title, url, fSelected) {
    var linkNode = null;

    if (!fIsNullOrUndefined(url) && url.length > 0) {
        linkNode = document.createElement("A");
        linkNode.href = url;
    }
    else {
        linkNode = document.createElement("SPAN");
    }
    addClass(linkNode, "static menu-item ms-core-listMenu-item");
    addClass(linkNode, g_LinkNodeMarker);
    if (fSelected)
        addClass(linkNode, g_ItemSelectedClassName);
    var arrowNode = document.createElement("SPAN");

    addClass(arrowNode, "additional-background");
    addClass(arrowNode, g_ArrowNodeMarker);
    var textNode = document.createElement("SPAN");

    addClass(textNode, "menu-item-text");
    textNode.innerHTML = STSHtmlEncode(title);
    arrowNode.appendChild(textNode);
    linkNode.appendChild(arrowNode);
    hookUpLinkEditHandlers(linkNode);
    return linkNode;
}
function createEditNode(title, url, orientation, fSelected) {
    return createEditNodeFromLink(createLinkNode(title, url, fSelected), orientation, true, false);
}
function createListItem(title, url, orientation, fSelected) {
    var item = document.createElement("LI");

    addClass(item, "static");
    addClass(item, "ms-verticalAlignTop");
    var linkTable = createEditNode(title, url, orientation, fSelected);
    var linkCells = linkTable.getElementsByTagName("TD");

    hookUpLinkEditHandlers(linkTable);
    item.appendChild(linkTable);
    AttachFlyoutHandlers(item);
    return item;
}
function resetErrorMessges() {
    var errorMsgArea = document.getElementById("NavMenu_ErrorMsg");

    if (!fIsNullOrUndefined(errorMsgArea)) {
        errorMsgArea.innerHTML = "";
    }
}
function textSelectAll(elem) {
    if (typeof document.createRange !== 'undefined' && document.createRange !== null && typeof window.getSelection !== 'undefined' && window.getSelection !== null) {
        var rangeToSelect = document.createRange();

        rangeToSelect.selectNodeContents(elem);
        var selection = window.getSelection();

        selection.removeAllRanges();
        selection.addRange(rangeToSelect);
    }
    else {
        document.execCommand('selectAll', false, null);
    }
}
function createEditBox(elementType, fUrlEditable) {
    var item = document.createElement(elementType);
    var titleBoxClassName = "ms-navedit-titleBoxContainer ms-core-listMenuEdit";
    var elemOnKeyDown = "onEditItemKeyDown(event);";
    var elemOnBlur = "window.setTimeout('var editBox = findEditBox(); " + "if (!fIsNullOrUndefined(editBox) && fIsNullOrUndefined(nodeHasElement(getTable(editBox), document.activeElement))) { onEditItemBlur(editBox); }', 1);  CancelEvent(event); return false; ";
    var editLinkOnMouseDown = "editLink(getListItem(this)); cancelDefault(event); return false;";
    var titleBoxHtml = "<table cellspacing=\"0\" cellpadding=\"0\" class=\"" + titleBoxClassName + "\"><tr><td class=\"ms-verticalAlignMiddle ms-navedit-linkCell\"><span class=\"ms-fullWidth ms-navedit-itemSpan\">" + "<div class=\"ms-fullWidth ms-verticalAlignMiddle ms-navedit-titleBox\" role=\"textbox\" rows=\"1\" onfocusout=\"" + elemOnBlur + "\" onblur=\"" + elemOnBlur + "\"" + "contentEditable=\"true\" id=\"" + g_QuickLaunchMenu.Id + "_EditBox\" onkeydown=\"" + elemOnKeyDown + "\" onfocus=\"textSelectAll(this);\"></div></span></td>" + "<td class=\"ms-navedit-linkDialogIcon\"><a class=\"ms-navedit-linkDialogIcon\" href=\"#\" title=\"" + STSHtmlEncode(Strings.STS.L_EditLinkTooltip) + "\"" + "id=\"" + g_QuickLaunchMenu.Id + "_EditLinkDlg\" onmousedown=\"if (event.which && event.which != 3 || event.button && event.button != 2) {" + editLinkOnMouseDown + "}\" onclick=\"" + editLinkOnMouseDown + "\"  onfocusout=\"" + elemOnBlur + "\" onblur=\"" + elemOnBlur + "\">" + "<img src=\"" + g_EditLinkDlgIconUrl + "\" /></a></td></tr></table>";

    item.id = g_QuickLaunchMenu.Id + "_EditBoxContainer";
    addClassName(item, "ms-navedit-titleBoxListItem");
    item.innerHTML = titleBoxHtml;
    return item;
}
function findEditBox() {
    return document.getElementById(g_QuickLaunchMenu.Id + "_EditBox");
}
function findEditBoxContainer() {
    return document.getElementById(g_QuickLaunchMenu.Id + "_EditBoxContainer");
}
function focusEditBox() {
    var editBox = findEditBox();

    if (!fIsNullOrUndefined(editBox)) {
        editBox.focus();
    }
}
function blurEditBox() {
    var editBox = findEditBox();

    if (!fIsNullOrUndefined(editBox)) {
        editBox.blur();
    }
}
function resetEditBox() {
    var editBox = findEditBoxContainer();

    if (!fIsNullOrUndefined(editBox)) {
        var listItem = getListItem(editBox);

        editBox.parentNode.removeChild(editBox);
        if (!Boolean(g_fAsyncDialogOpened))
            focusOnLinkNode(listItem);
    }
}
function focusOnLinkNode(listItem) {
    if (fIsNullOrUndefined(listItem))
        return;
    var linkNode = listItem.querySelector("table td ." + g_LinkNodeMarker);

    if (!fIsNullOrUndefined(linkNode)) {
        try {
            linkNode.focus();
        }
        catch (e) { }
    }
}
function updateListItem(listItem, title, url) {
    var linkNode = listItem.querySelector("table td ." + g_LinkNodeMarker);

    if (!fIsNullOrUndefined(linkNode)) {
        var linkCell = linkNode.parentNode;
        var textNode = linkNode.querySelector("span span.menu-item-text");

        if (fIsNullOrUndefined(textNode))
            return;
        textNode.innerHTML = STSHtmlEncode(title);
        if (!fIsNullOrUndefined(linkNode.href)) {
            var newLinkNode = null;

            if (url.length < 1) {
                newLinkNode = createLinkNode(title, null, false);
                linkCell.insertBefore(newLinkNode, linkNode);
                linkCell.removeChild(linkNode);
            }
            else {
                linkNode.href = STSHtmlEncode(url);
            }
        }
        else if (url.length > 0) {
            newLinkNode = createLinkNode(title, url, document.URL == url);
            linkCell.insertBefore(newLinkNode, linkNode);
            linkCell.removeChild(linkNode);
        }
    }
}
function LaunchLinkDialog(operation, title, url, callbackHandler, fEditableUrl) {
    var webServerRelUrl = _spPageContextInfo.webServerRelativeUrl;

    if (!Boolean(webServerRelUrl)) {
        webServerRelUrl = "";
    }
    else if (webServerRelUrl.endsWith('/')) {
        webServerRelUrl = webServerRelUrl.substring(0, webServerRelUrl.length - 1);
    }
    var dialogUrl = webServerRelUrl + g_RteDialogUrl + "?Dialog=CreateLink&UseDivDialog=true" + "&Caption1=" + escapeProperly(Strings.STS.L_DlgFirstLineCaption) + "&Caption2=" + escapeProperly(Strings.STS.L_DlgSecondLineCaption) + (!fIsNullOrUndefined(title) ? "&Param1=" + escapeProperly(title) : "") + (!fIsNullOrUndefined(url) ? "&Param2=" + escapeProperly(url) : "") + "&EditableUrl=" + String(fEditableUrl) + "&OneFieldRequired=true";
    var options = {
        title: operation,
        url: dialogUrl,
        autoSizeStartWidth: g_DefaultDialogWidth,
        autoSize: true,
        dialogReturnValueCallback: callbackHandler
    };

    return EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
}
function AddLinkDialogHandler(dialogResult, rv) {
    FocusOnAddLink();
    if (fIsNullOrUndefined(rv))
        return;
    var title = rv[0];
    var url = rv[1];

    if (title.length < 1 && url.length < 1) {
        return;
    }
    if (title.length < 1) {
        title = url;
    }
    var appendNode = getLastChildElem((document.getElementById(g_QuickLaunchMenu.Id)).childNodes[0]);

    if (fIsNullOrUndefined(appendNode) || hasClassName(appendNode, g_AppendDropArea)) {
        appendNode = null;
    }
    g_QuickLaunchMenu.addLink(title, STSHtmlEncode(url), null, null, url == document.URL, true);
    dumpQLMenuData();
}
function addNewLink() {
    return LaunchLinkDialog(STSHtmlEncode(Strings.STS.L_DlgAddLinkTitle), null, null, AddLinkDialogHandler, true);
}
function EditLinkDialogHandler(dialogResult, rv) {
    g_fAsyncDialogOpened = false;
    resetEditBox();
    focusOnLinkNode(g_CurrentListItem);
    if (fIsNullOrUndefined(rv))
        return;
    var title = rv[0];
    var url = rv[1];
    var dataNode = getNodeData(g_CurrentListItem);

    if (!fIsNullOrUndefined(dataNode)) {
        if (dataNode.Title != title || dataNode.SimpleUrl != url)
            EnableSaveButton();
        if (title == null || title.length == 0) {
            if (url == null || url.length == 0)
                return;
            title = url;
        }
        dataNode.Title = title;
        if (dataNode.NodeType == 0) {
            dataNode.SimpleUrl = url;
        }
        updateListItem(g_CurrentListItem, title, url);
        dumpQLMenuData();
    }
}
function editLink(listItem) {
    var dataNode = getNodeData(listItem);

    g_CurrentListItem = listItem;
    if (!fIsNullOrUndefined(dataNode)) {
        var fEditableUrl = dataNode.NodeType != 1;

        LaunchLinkDialog(STSHtmlEncode(Strings.STS.L_DlgEditLinkTitle), dataNode.Title, getNodeUrl(listItem), EditLinkDialogHandler, fEditableUrl);
        g_fAsyncDialogOpened = true;
    }
}
function hasFlyout(listItem) {
    var childList = listItem.querySelector("UL");

    if (listItem.tagName.toUpperCase() == "LI" && !fIsNullOrUndefined(childList) && hasClassName(childList, "dynamic")) {
        return true;
    }
    return false;
}
function ShowFlyout(listItem) {
    var menuControl = window["g_" + g_QuickLaunchMenu.Id];

    if (!fIsNullOrUndefined(listItem) && hasFlyout(listItem) && !fIsNullOrUndefined(menuControl) && menuControl.showSubMenuCore) {
        var widthOffset = 0;
        var heightOffset = 0;
        var delLink = null;
        var deleteHeight = 0;
        var deleteWidth = 0;
        var linkTable = listItem.querySelector("TABLE");

        if (!fIsNullOrUndefined(linkTable)) {
            if (linkTable.childNodes.length > 1 && !fIsNullOrUndefined(linkTable.childNodes[1].childNodes[0])) {
                delLink = linkTable.childNodes[1].childNodes[0].querySelector("SPAN");
            }
            else if (!fIsNullOrUndefined(linkTable.childNodes[0].childNodes[1])) {
                delLink = linkTable.childNodes[0].childNodes[1].querySelector("SPAN");
            }
            if (!fIsNullOrUndefined(delLink) && hasClassName(delLink, g_NavMenuDeleteLinkClassName)) {
                deleteHeight = delLink.offsetHeight;
                deleteWidth = delLink.offsetWidth;
            }
        }
        if (hasClassName(listItem, "static") && g_QuickLaunchMenu.Orientation == MenuOrientation.Horizontal) {
            heightOffset = -3;
        }
        else {
            widthOffset = -deleteWidth - 6;
        }
        cleanEditFlyout(listItem);
        menuControl.showSubMenuCore(listItem, widthOffset, heightOffset);
        g_activeFlyout = listItem;
    }
}
function ToggleFlyout(listItem) {
    if (hasClassName(listItem, "hover")) {
        HideFlyout(listItem);
    }
    else if (hasVisibleNodes(listItem.querySelector("UL"))) {
        ShowFlyout(listItem);
    }
}
function HandleFlyoutFocusLoss(listItem) {
    if (fIsNullOrUndefined(listItem))
        return;
    var activeElement = document.activeElement;
    var curListItem = listItem;

    while (!fIsNullOrUndefined(curListItem) && !fIsNullOrUndefined(curListItem.tagName) && curListItem.tagName.toUpperCase() == "LI") {
        if ((fIsNullOrUndefined(activeElement) || !isAncestor(curListItem, activeElement)) && g_QuickLaunchMenu.Id != activeElement.id) {
            HideFlyout(curListItem);
        }
        if (!fIsNullOrUndefined(curListItem.parentNode)) {
            curListItem = curListItem.parentNode.parentNode;
        }
        else {
            curListItem = null;
        }
    }
}
function AttachFlyoutHandlers(listItem) {
    var itemBlurFn = Function.createDelegate(listItem, function(evt) {
        if (!Boolean(evt))
            evt = window.event;
        g_CurrentListItem = this;
        window.setTimeout("HandleFlyoutFocusLoss(g_CurrentListItem);", 0);
        CancelEvent(evt);
        return false;
    });
    var itemFocusFn = Function.createDelegate(listItem, function(evt) {
        if (!Boolean(evt))
            evt = window.event;
        if (this.parentNode != null) {
            var parentItem = this.parentNode.parentNode;

            if (parentItem != null && !fIsNullOrUndefined(parentItem.tagName) && parentItem.tagName.toUpperCase() == "LI") {
                ShowFlyout(parentItem);
            }
        }
    });

    AttachEvent('blur', itemBlurFn, listItem);
    AttachEvent('focusout', itemBlurFn, listItem);
    var link = listItem.querySelector("table td .ms-core-listMenu-item");

    AttachEvent('focus', itemFocusFn, link);
    var deleteLink = listItem.querySelector("table td ." + g_NavMenuDeleteLinkClassName);

    if (deleteLink != null)
        AttachEvent('focus', itemFocusFn, deleteLink);
}
function HideFlyout(listItem, fNoDelay) {
    var menuControl = window["g_" + g_QuickLaunchMenu.Id];

    if (!fIsNullOrUndefined(listItem) && !fIsNullOrUndefined(listItem.tagName) && listItem.tagName.toUpperCase() == "LI" && hasFlyout(listItem) && !fIsNullOrUndefined(menuControl) && menuControl.hideSubMenuCore) {
        var editBox = findEditBox();

        if (!fIsNullOrUndefined(editBox) && isAncestor(listItem, editBox)) {
            resetEditBox();
        }
        var delay = menuControl.get_disappearAfter();

        if (fNoDelay) {
            menuControl.hideSubMenuCore(listItem);
        }
        else {
            window.setTimeout(Function.createDelegate(this, function() {
                menuControl.hideSubMenuCore(listItem);
            }), delay);
        }
        if (!fIsNullOrUndefined(listItem.parentNode) && !fIsNullOrUndefined(listItem.parentNode.parentNode) && !fIsNullOrUndefined(listItem.tagName) && listItem.tagName.toUpperCase() == "LI") {
            g_activeFlyout = listItem.parentNode.parentNode;
        }
        else {
            g_activeFlyout = null;
        }
    }
}
function hasVisibleNodes(nodeList) {
    if (fIsNullOrUndefined(nodeList))
        return false;
    var listItems = nodeList.querySelectorAll("li");
    var nLength = listItems.length;

    for (var j = 0; j < nLength; j++) {
        var node = listItems[j];

        if (hasClassName(node, g_AppendDropArea)) {
            if (nLength < 2)
                return false;
        }
        else if (node.style.display != "none")
            return true;
    }
    return false;
}
function cleanEditFlyout(listItem) {
    if (fIsNullOrUndefined(listItem) || listItem.tagName.toUpperCase() != "LI" || hasClassName(listItem, "static") && DetermineNodeDepth(listItem) < g_QuickLaunchMenu.StaticLevels)
        return;
    var cList = listItem.querySelector("UL");

    if (!fIsNullOrUndefined(cList)) {
        var bVisibleNodes = hasVisibleNodes(cList);

        if (hasClassName(cList, "dynamic")) {
            var nLength = cList.childNodes.length;

            for (var j = 0; j < nLength; j++) {
                if (Boolean(cList.childNodes[j].tagName) && cList.childNodes[j].tagName.toUpperCase() == "LI" && hasClassName(cList.childNodes[j], g_AppendDropArea)) {
                    var flyoutDropArea = cList.childNodes[j];

                    if (bVisibleNodes)
                        addClassName(getFirstChildElem(flyoutDropArea), "ms-hide");
                    else
                        removeClassName(getFirstChildElem(flyoutDropArea), "ms-hide");
                }
            }
        }
        if (!bVisibleNodes) {
            HideFlyout(listItem, true);
            removeClassName(listItem, "dynamic-children");
        }
        else if (!hasClassName(listItem, "dynamic-children")) {
            addClassName(listItem, "dynamic-children");
        }
        var arrowSpan = listItem.querySelector("span.additional-background");

        if (!fIsNullOrUndefined(arrowSpan)) {
            if (!bVisibleNodes) {
                removeClassName(arrowSpan, "dynamic-children");
            }
            else if (!hasClassName(arrowSpan, "dynamic-children")) {
                addClassName(arrowSpan, "dynamic-children");
            }
        }
    }
}
function GetSaveCancelLinks() {
    var saveJsCode = "QuickLaunchSaveChanges(this);";
    var cancelJsCode = "QuickLaunchInitReadMode();";
    var saveCancelHtml = "<span id='" + g_QuickLaunchMenu.Id + "_NavMenu_Loading' class='ms-navedit-menuLoading ms-hide'><a href='#' onclick='HideGears(); return false;' title='" + STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt) + "' >" + "<img id='" + g_QuickLaunchMenu.Id + "_GearsImage' alt='" + STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt) + "' src='" + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + "' /></a></span>" + "<input id='" + g_QuickLaunchMenu.Id + "_SaveButton' type='button' class='ms-navedit-editButton' disabled='disabled' value='" + STSHtmlEncode(Strings.STS.L_SaveButtonCaption) + "' title='" + STSHtmlEncode(Strings.STS.L_SaveButtonCaption) + "' onclick='" + saveJsCode + "'/>" + "<input id='" + g_QuickLaunchMenu.Id + "_CancelButton' type='button' class='ms-navedit-editButton' value='" + STSHtmlEncode(Strings.STS.L_CancelButtonCaption) + "' title='" + STSHtmlEncode(Strings.STS.L_CancelButtonCaption) + "' onclick='" + cancelJsCode + "' />";

    return saveCancelHtml;
}
function QuickLaunchSaveChanges(saveButton) {
    if (g_QuickLaunchMenu != null) {
        addClassName(saveButton, "ms-hide");
        ShowLoadingIndicator();
        g_QuickLaunchMenu.saveChanges();
    }
}
function QuickLaunchInitReadMode() {
    if (g_QuickLaunchMenu != null) {
        var buttons = document.querySelectorAll(".ms-navedit-editButton");
        var nLength = buttons.length;

        for (var i = 0; i < nLength; i++) {
            addClassName(buttons[i], "ms-hide");
        }
        ShowLoadingIndicator();
        g_QuickLaunchMenu.ensureMenuData(false);
    }
}
function QuickLaunchInitEditMode(menuId, staticDisplayLevels, dynamicDisplayLevels, orientation, startingNodeUrl) {
    if (g_QuickLaunchMenu == null) {
        g_QuickLaunchMenu = new QuickLaunchMenu(menuId, staticDisplayLevels, dynamicDisplayLevels, orientation, startingNodeUrl);
        g_QuickLaunchMenu.EditMode = false;
        g_currentQuickLaunchMenuId = g_QuickLaunchMenu.Id;
    }
    ToggleEditAreas(false);
    var editLinks = document.getElementById(menuId + "_NavMenu_EditLinks");

    if (!fIsNullOrUndefined(editLinks)) {
        ShowLoadingIndicator();
        addClassName(editLinks, "ms-hide");
    }
    g_QuickLaunchMenu.ensureMenuData(true);
}
function FocusOnAddLink() {
    var addLink = document.getElementById(g_QuickLaunchMenu.Id + "_NavMenu_AddLink");

    if (!fIsNullOrUndefined(addLink))
        addLink.focus();
}
function FocusOnCancelButton() {
    var cancelButton = document.getElementById(g_QuickLaunchMenu.Id + "_CancelButton");

    if (!fIsNullOrUndefined(cancelButton))
        cancelButton.focus();
}
function EnableSaveButton() {
    var saveButton = document.getElementById(g_currentQuickLaunchMenuId + "_SaveButton");

    if (!fIsNullOrUndefined(saveButton)) {
        saveButton.disabled = false;
    }
}
function ShowLoadingIndicator() {
    var loadIndicator = document.getElementById(g_currentQuickLaunchMenuId + "_NavMenu_Loading");

    if (!fIsNullOrUndefined(loadIndicator)) {
        removeClassName(loadIndicator, "ms-hide");
    }
}
function HideLoadingIndicator() {
    var loadIndicator = document.getElementById(g_currentQuickLaunchMenuId + "_NavMenu_Loading");

    if (!fIsNullOrUndefined(loadIndicator)) {
        addClassName(loadIndicator, "ms-hide");
    }
}
function ShowUserInputElements() {
    var navEditArea = document.getElementById(g_currentQuickLaunchMenuId + "_NavMenu_Edit");

    if (!fIsNullOrUndefined(navEditArea)) {
        var elems = navEditArea.querySelectorAll(".ms-hide");
        var nLength = elems.length;

        for (var i = 0; i < nLength; i++) {
            if (elems[i].id == null || elems[i].id.indexOf("_NavMenu_Loading") == -1)
                removeClassName(elems[i], "ms-hide");
        }
    }
}
function augmentEditArea(menuId, editAreaItem) {
    if (!fIsNullOrUndefined(editAreaItem) && Boolean(editAreaItem.querySelector)) {
        var editSpan = editAreaItem.querySelector("span." + g_EditSpanNodeMarker);

        if (!fIsNullOrUndefined(editSpan)) {
            editSpan.id = menuId + "_NavMenu_Edit";
            return editSpan;
        }
    }
    return null;
}
function SetEditLink(menuId, staticDisplayLevels, dynamicDisplayLevels, orientation, startingNodeUrl) {
    if (g_QuickLaunchMenu != null && Boolean(g_QuickLaunchMenu.EditMode))
        return;
    var menu = document.getElementById(menuId);

    if (fIsNullOrUndefined(menu))
        return;
    var rootList = getFirstChildElem(menu);
    var navEditArea = augmentEditArea(menuId, getLastChildElem(rootList));

    if (navEditArea == null) {
        navEditArea = document.getElementById(menuId + "_NavMenu_Edit");
    }
    if (navEditArea != null && typeof navEditArea != "undefined") {
        var qlEditMode = "g_QuickLaunchMenu = null; EnsureScriptParams('DragDrop.js', 'QuickLaunchInitEditMode', " + "'" + menuId + "', " + String(staticDisplayLevels) + ", " + String(dynamicDisplayLevels) + ", " + String(orientation) + ", '" + startingNodeUrl + "'); cancelDefault(event); return false;";
        var navEditHtml = "<a id=\"" + menuId + "_NavMenu_EditLinks\" class=\"ms-navedit-editLinksText\" href=\"#\" ";

        navEditHtml += "onclick=\"" + qlEditMode + "\"><span class=\"ms-displayInlineBlock\"><span class=\"ms-navedit-editLinksIconWrapper ms-verticalAlignMiddle\"><img src=\"" + GetThemedImageUrl("spcommon.png");
        navEditHtml += "\" class=\"ms-navedit-editLinksIcon\" /></span>";
        navEditHtml += "<span class=\"ms-metadata ms-verticalAlignMiddle\">" + STSHtmlEncode(Strings.STS.L_EditLinksText) + "</span></span></a>";
        navEditHtml += "<span id='" + menuId + "_NavMenu_Loading' class='ms-hide ms-navedit-menuLoading'><a href='#' onclick='HideGears(); return false;' title='" + STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt) + "' >";
        navEditHtml += "<img id='" + menuId + "_GearsImage' alt='" + STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt) + "' src='" + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + "' /></a></span>";
        navEditHtml += "<div id='" + menuId + "_NavMenu_ErrorMsg' class='ms-navedit-errorMsg'></div>";
        navEditArea.innerHTML = navEditHtml;
        ToggleEditAreas(true);
        if (g_prevDropSurfaceClass != null)
            g_dropSurfaceClass = g_prevDropSurfaceClass;
        if (window["g_dropSurfaceId"] != null) {
            var dropSurf = document.getElementById(g_dropSurfaceId);

            if (!fIsNullOrUndefined(dropSurf)) {
                dropSurf.setAttribute("class", g_prevDropSurfaceClass);
            }
        }
        if (g_QuickLaunchMenu != null && !Boolean(g_QuickLaunchMenu.EditMode))
            g_QuickLaunchMenu = null;
    }
}
function SetEditModeLinks() {
    var navEditArea = document.getElementById(g_QuickLaunchMenu.Id + "_NavMenu_Edit");

    if (!fIsNullOrUndefined(navEditArea)) {
        var navEditListItem = getListItem(navEditArea);

        if (Boolean(navEditListItem))
            addClassName(navEditListItem, "ms-navedit-panelEditMode");
        var navHtml = "<div>";

        navHtml += "<a id='" + g_QuickLaunchMenu.Id + "_NavMenu_AddLink' href='#' class='ms-heroCommandLink ms-navedit-addNewLink' title='";
        navHtml += STSHtmlEncode(Strings.STS.L_AddLinkTooltip) + "' onclick='addNewLink(); CancelEvent(event); return false;'>";
        navHtml += "<span class='ms-list-addnew-imgSpan16'><img class='ms-list-addnew-img16' src='" + g_CommonIconClusterUrl + "' /></span>";
        navHtml += "<span class='ms-navedit-addLinkText'>" + STSHtmlEncode(Strings.STS.L_AddLinkText) + "</span></a>";
        navHtml += g_QuickLaunchMenu.Orientation == MenuOrientation.Vertical ? "<div>" : "";
        navHtml += GetSaveCancelLinks();
        navHtml += g_QuickLaunchMenu.Orientation == MenuOrientation.Vertical ? "</div>" : "";
        navHtml += "</div><div id='" + g_QuickLaunchMenu.Id + "_NavMenu_ErrorMsg' class='ms-navedit-errorMsg'></div>";
        navEditArea.innerHTML = navHtml;
        g_prevDropSurfaceClass = g_dropSurfaceClass;
        g_dropSurfaceClass = "ms-navedit-dropsurface";
    }
}
function ToggleEditAreas(fShowEdit) {
    if (fIsNullOrUndefined(g_QuickLaunchMenu))
        return;
    var curNavEditArea = document.getElementById(g_QuickLaunchMenu.Id + "_NavMenu_Edit");

    if (!fIsNullOrUndefined(curNavEditArea)) {
        var spanItems = document.querySelectorAll("span." + g_EditSpanNodeMarker);
        var nLength = spanItems.length;

        for (var i = 0; i < nLength; i++) {
            if (spanItems[i].id != curNavEditArea.id) {
                var li = spanItems[i].parentNode;
                var navEditItems = li.childNodes;
                var nChildsLength = navEditItems.length;

                for (var j = 0; j < nChildsLength; j++) {
                    if (fShowEdit && (navEditItems[j].id == null || navEditItems[j].id.indexOf("_NavMenu_Loading") == -1))
                        removeClassName(navEditItems[j], "ms-hide");
                    else
                        addClassName(navEditItems[j], "ms-hide");
                }
            }
        }
    }
}
function HideGears() {
    (document.getElementById(g_QuickLaunchMenu.Id + "_GearsImage")).style.visibility = "hidden";
}
function RefreshDroppable(elem) {
    var droppable = SPDragDropManager.GetDroppable(elem);

    if (!fIsNullOrUndefined(droppable)) {
        droppable.Deactivate();
        droppable.Activate();
    }
}
function RefreshListItem(listItem) {
    if (fIsNullOrUndefined(listItem))
        return;
    var listItemTable = listItem.querySelector("table.ms-core-listMenuEdit");

    if (listItemTable != null) {
        RefreshDroppable(listItemTable);
    }
}
function AddOrEnableDroppable(elem) {
    var linkKeys = {};

    linkKeys[g_dndPageTitleQL] = "";
    linkKeys[g_dndMenuItemQL] = "";
    if (!fIsNullOrUndefined(g_dndSiteContentQL))
        linkKeys[g_dndSiteContentQL] = "";
    if (!fIsNullOrUndefined(g_dndDocItemQLLib))
        linkKeys[g_dndDocItemQLLib] = "";
    if (!fIsNullOrUndefined(g_dndDocItemQLLib))
        linkKeys[g_dndListItemQL] = "";
    if (fIsNullOrUndefined(elem))
        return;
    var droppable = SPDragDropManager.GetDroppable(elem);

    if (!fIsNullOrUndefined(droppable))
        droppable.Activate();
    else {
        droppable = SPDragDropManager.InitDroppable(elem, linkKeys);
        SetQuickLaunchDropOption(droppable);
    }
}
function AddOrEnableDraggable(elem) {
    var linkKeys = {};

    linkKeys[g_dndMenuItemQL] = "";
    var draggable = SPDragDropManager.GetDraggable(elem);

    if (fIsNullOrUndefined(draggable)) {
        draggable = SPDragDropManager.InitDraggable(elem, linkKeys);
        if (!fIsNullOrUndefined(draggable)) {
            SetNavMenuItemDragOption(draggable);
        }
    }
    else
        draggable.Enable();
}
function initMenuDragDrop() {
    if (!fIsNullOrUndefined(SPDragDropManager)) {
        var menu = document.getElementById(g_QuickLaunchMenu.Id);

        if (!fIsNullOrUndefined(menu)) {
            var menuElems = menu.querySelectorAll("li." + g_DropNodeMarker);
            var nLength = menuElems.length;

            for (var i = 0; i < nLength; i++) {
                var firstTable = menuElems[i].querySelector("table");

                $clearHandlers(menuElems[i]);
                AddOrEnableDroppable(firstTable);
                AddOrEnableDraggable(firstTable);
            }
        }
    }
}
function SPPageTitleDragData(title, url) {
    this.title = title;
    this.url = url;
}
function createPageTitleDragImage(element) {
    var pgTitleSpan = element.cloneNode(true);

    pgTitleSpan.id = "";
    document.body.appendChild(pgTitleSpan);
    return pgTitleSpan;
}
function SetPageTitleDragOption(draggable) {
    if (fIsNullOrUndefined(draggable))
        return;
    draggable.SetOption("dragImage", createPageTitleDragImage);
    var offset = new SPPosition(20, 20);

    draggable.SetOption("cursorAt", offset);
    draggable.SetOption("sensitivity", g_NavEditMouseDragTolerance);
    draggable.AddEventListener('spDragStart', pageTitleDragStartHandler);
}
function pageTitleDragStartHandler(spEvt) {
    var dragData = [];
    var elem = GetTarget(spEvt.rawEvent);
    var title = null;
    var url = null;

    if (fIsNullOrUndefined(elem))
        return;
    title = typeof elem.textContent == "undefined" ? elem.innerText : elem.textContent;
    if (!fIsNullOrUndefined(elem) && elem.tagName.toUpperCase() == "A") {
        url = elem.href;
    }
    else {
        url = document.URL;
    }
    var spdd = new SPPageTitleDragData(title, url);

    dragData.push(spdd);
    if (dragData.length > 0) {
        spEvt.SetData(g_dndPageTitleDataKey, dragData);
        if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
            spEvt.rawEvent.dataTransfer.effectAllowed = "all";
        }
    }
}
function initPageTitleDrag() {
    var ptArea;

    if ("undefined" != typeof g_clientIdDeltaPlaceHolderPageTitleInTitleArea) {
        ptArea = document.getElementById(g_clientIdDeltaPlaceHolderPageTitleInTitleArea);
    }
    if (fIsNullOrUndefined(ptArea)) {
        var rootElement = document;
        var mainDiv = document.getElementById(g_BodyContainerId);

        if (!fIsNullOrUndefined(mainDiv)) {
            rootElement = mainDiv;
        }
        var targetElem = null;
        var spans = rootElement.getElementsByTagName("SPAN");

        for (var i = 0; i < spans.length; i++) {
            targetElem = spans[i];
            if (!fIsNullOrUndefined(targetElem.id) && (targetElem.id.indexOf(g_PageTitleInContentAreaIdSuffix) != -1 || targetElem.id.indexOf(g_PageTitleInTitleAreaIdSuffix) != -1)) {
                ptArea = targetElem;
                i = spans.length;
            }
        }
        if (fIsNullOrUndefined(ptArea)) {
            var links = rootElement.getElementsByTagName("A");

            for (i = 0; i < links.length; i++) {
                targetElem = links[i];
                if (!fIsNullOrUndefined(targetElem.id) && (targetElem.id.indexOf(g_PageTitleInContentAreaIdSuffix) != -1 || targetElem.id.indexOf(g_PageTitleInTitleAreaIdSuffix) != -1)) {
                    ptArea = targetElem;
                    i = links.length;
                }
            }
        }
    }
    var linkKeys = {};

    linkKeys[g_dndPageTitleQL] = "";
    var draggable = SPDragDropManager.GetDraggable(ptArea);

    if (fIsNullOrUndefined(draggable)) {
        draggable = SPDragDropManager.InitDraggable(ptArea, linkKeys);
        if (!fIsNullOrUndefined(draggable)) {
            SetPageTitleDragOption(draggable);
        }
    }
    else
        draggable.Enable();
}
function createQLDragImage(element) {
    var listItem = element.parentNode;

    if (g_activeFlyout != null && g_activeFlyout.id == listItem.id) {
        logmsg("Create QL Drag Image: Want to hide flyout");
        HideFlyout(g_activeFlyout, true);
    }
    var di = document.createElement("DIV");

    di.setAttribute("class", g_spDragImageClass + " ms-noList");
    var dList = document.createElement("UL");
    var itemDepth = DetermineNodeDepth(listItem);
    var cloneParent = dList;
    var linkElement = element.querySelector(".menu-item");
    var textElement = element.querySelector(".menu-item-text");

    if (!Boolean(textElement))
        textElement = element;
    var elemClone = createListItem(GetInnerText(textElement), Boolean(linkElement) && Boolean(linkElement.href) ? linkElement.href : null, g_QuickLaunchMenu.Orientation, false);

    for (var i = 1; i < itemDepth; i++) {
        var padLI = document.createElement("LI");
        var padUL = document.createElement("UL");

        padLI.appendChild(padUL);
        if (i == itemDepth - 1)
            cloneParent = padUL;
        if (i == 1)
            dList.appendChild(padLI);
    }
    cloneParent.appendChild(elemClone);
    di.appendChild(dList);
    document.body.appendChild(di);
    var delLinks = di.querySelectorAll("a." + g_NavMenuDeleteLinkClassName);
    var nLength = delLinks.length;

    for (i = 0; i < nLength; i++) {
        delLinks[i].parentNode.removeChild(delLinks[i]);
    }
    var selectedElem = di.querySelector(".ms-core-listMenu-selected");

    if (Boolean(selectedElem)) {
        removeClassName(selectedElem, "ms-core-listMenu-selected");
    }
    HideFlyout(elemClone, true);
    return di;
}
function SetNavMenuItemDragOption(draggable) {
    if (fIsNullOrUndefined(draggable))
        return;
    var offset = new SPPosition(20, 20);

    draggable.SetOption("cursorAt", offset);
    draggable.SetOption("dragImage", createQLDragImage);
    draggable.SetOption("sensitivity", g_NavEditMouseDragTolerance);
    draggable.AddEventListener('spDragStart', navMenuItemDragStartHandler);
    draggable.AddEventListener('spDragEnd', navMenuItemDragEndHandler);
}
function SPNavItemDragData(nodeId) {
    this.nodeId = nodeId;
}
function navMenuItemDragStartHandler(spEvt) {
    var dragData = [];
    var listItem = getListItem(GetTarget(spEvt.rawEvent));

    if (fIsNullOrUndefined(listItem) || fIsNullOrUndefined(listItem.id) || !listItem.id.startsWith(g_QuickLaunchMenu.Id))
        return;
    var spdd = new SPNavItemDragData(listItem.id.substring(g_QuickLaunchMenu.Id.length + 1));

    dragData.push(spdd);
    if (dragData.length > 0) {
        spEvt.SetData(g_navItemDataKey, dragData);
        if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
            spEvt.rawEvent.dataTransfer.effectAllowed = "all";
        }
    }
    logmsg("Drag Start: Try to hide flyout");
    HideFlyout(listItem, true);
    if (!browseris.webKit) {
        listItem.style.display = "none";
    }
    var table = getTable(GetTarget(spEvt.rawEvent));

    if (!fIsNullOrUndefined(table)) {
        table.style.backgroundColor = "transparent";
        table.style.backgroundColor = "";
    }
    cleanEditFlyout(listItem.parentNode.parentNode);
}
function navMenuItemDragEndHandler(spEvt) {
    if (!fIsNullOrUndefined(g_ghostLinkNode)) {
        navMenuDropGhostLink();
    }
    else {
        var dragData = spEvt.GetData(g_navItemDataKey);

        if (!fIsNullOrUndefined(dragData)) {
            var dragNodeId = dragData[0].nodeId;
            var dragQLItem = document.getElementById(g_QuickLaunchMenu.Id + "_" + dragNodeId);

            if (fIsNullOrUndefined(dragQLItem))
                return;
            dragQLItem.style.display = "";
            cleanEditFlyout(dragQLItem.parentNode.parentNode);
            cleanEditFlyout(dragQLItem);
            resetDropSurface();
        }
    }
}
var DropNodeQuadrant;

function getDropNodeQuadrant(dropNode, offsetX, offsetY, orientation) {
    var dropSize = 0;
    var offsetVal = 0;
    var weights = [];
    var fReverseQuadrants = false;

    if (orientation == MenuOrientation.Vertical || hasClassName(dropNode.parentNode.parentNode, "dynamic")) {
        weights = [0.20, 0.30, 0.30, 0.20];
        dropSize = dropNode.clientHeight == 0 ? dropNode.offsetHeight : dropNode.clientHeight;
        offsetVal = offsetY;
    }
    else {
        weights = [0.20, 0.30, 0.30, 0.20];
        dropSize = dropNode.clientWidth == 0 ? dropNode.offsetWidth : dropNode.clientWidth;
        offsetVal = offsetX;
        if (document.documentElement.dir === 'rtl')
            fReverseQuadrants = true;
    }
    var wLength = weights.length;
    var currWeight = 0;

    for (var i = 0; i < wLength; i++) {
        var index = !fReverseQuadrants ? i : wLength - 1 - i;

        currWeight += weights[index];
        if (offsetVal < dropSize * currWeight)
            return index + 1;
    }
    return DropNodeQuadrant.None;
}
function targetDroppedBehindDropNode(dropNode, offsetX, offsetY, orientation) {
    if (orientation == MenuOrientation.Vertical || hasClassName(dropNode.parentNode.parentNode, "dynamic")) {
        var dropHeight = dropNode.clientHeight == 0 ? dropNode.offsetHeight : dropNode.clientHeight;

        return Boolean(offsetY < dropHeight / 2);
    }
    else {
        var dropWidth = dropNode.clientWidth == 0 ? dropNode.offsetWidth : dropNode.clientWidth;

        return Boolean(offsetX < dropWidth / 2);
    }
}
function SetQuickLaunchDropOption(droppable) {
    if (fIsNullOrUndefined(droppable))
        return;
    droppable.AddEventListener('spDragEnter', navMenuDragEnterHandler);
    droppable.AddEventListener('spDragLeave', navMenuDragLeaveHandler);
    droppable.AddEventListener('spDragOver', navMenuDragOverHandler);
    droppable.AddEventListener('spDrop', navMenuDropHandler);
}
function navMenuDragOverHandler(spEvt) {
    var droppable = spEvt.droppable;

    if (!Boolean(g_QuickLaunchMenu) || !Boolean(g_QuickLaunchMenu.EditMode) || fIsNullOrUndefined(droppable))
        return;
    var dropNode = droppable.GetElement();
    var draggedNodeDepth = 1;
    var ghostLink = null;
    var ghostLinkData = null;
    var fSelected = false;
    var listItem = dropNode.parentNode;
    var orientation = hasClassName(listItem.parentNode, "dynamic") ? MenuOrientation.Flyout : g_QuickLaunchMenu.Orientation;
    var dragQLItem = null;
    var menu = document.getElementById(g_QuickLaunchMenu.Id);
    var nodeList = getFirstChildElem(menu);
    var evt = spEvt.rawEvent;
    var targetQuadrant = DropNodeQuadrant.None;
    var offsetX = -1;
    var offsetY = -1;
    var parentList = null;
    var prevSibling = null;
    var nextSibling = null;
    var bSkipGhostLink = false;
    var dropNodeDepth = DetermineNodeDepth(listItem);
    var dropNodeMaxDepth = g_QuickLaunchMenu.StaticLevels + g_QuickLaunchMenu.DynamicLevels - dropNodeDepth + 1;

    if (fIsNullOrUndefined(listItem) || !isAncestor(menu, listItem))
        return;
    var dragData = spEvt.GetData(g_navItemDataKey);

    if (!fIsNullOrUndefined(dragData)) {
        var dragNodeId = dragData[0].nodeId;

        dragQLItem = document.getElementById(g_QuickLaunchMenu.Id + "_" + dragNodeId);
        if (fIsNullOrUndefined(dragQLItem))
            return;
        if (listItem == dragQLItem)
            return;
        var node = listItem;

        while (!fIsNullOrUndefined(node) && node.id != g_QuickLaunchMenu.Id) {
            node = node.parentNode;
            if (node == dragQLItem)
                return;
        }
        draggedNodeDepth = DetermineMaxListDepth(dragQLItem, 1, 1);
        ghostLinkData = new GhostLinkData(dragData[0].nodeId, null, null, false);
        ghostLink = makeGhostFromItem(dragQLItem, orientation);
        ghostLink.style.display = "";
        adjustListItemClass(ghostLink, listItem);
    }
    if (fIsNullOrUndefined(dragData)) {
        dragData = spEvt.GetData(g_docItemDataKey);
        if (!fIsNullOrUndefined(dragData)) {
            var itemLinkUrl = dragData[0].fileUrl;
            var itemLinkName = dragData[0].title;

            if (fIsNullOrUndefined(itemLinkName) || itemLinkName.length < 1) {
                itemLinkName = dragData[0].fileName;
                var dotIndex = itemLinkName.lastIndexOf('.');

                if (dotIndex < 1)
                    dotIndex = itemLinkName.length;
                itemLinkName = itemLinkName.substring(0, dotIndex);
            }
            if (itemLinkName.length < 1) {
                itemLinkName = itemLinkUrl;
            }
            ghostLink = createGhostLink(itemLinkName, itemLinkUrl, orientation);
            ghostLinkData = new GhostLinkData(null, linkUrl, linkName, false);
            adjustListItemClass(ghostLink, listItem);
        }
    }
    if (fIsNullOrUndefined(dragData)) {
        dragData = spEvt.GetData(g_dndPageTitleDataKey);
        if (!fIsNullOrUndefined(dragData)) {
            var linkUrl = dragData[0].url;
            var linkName = dragData[0].title;

            ghostLink = createGhostLink(linkName, linkUrl, orientation);
            ghostLinkData = new GhostLinkData(null, linkUrl, linkName, true);
            adjustListItemClass(ghostLink, listItem);
        }
    }
    if (fIsNullOrUndefined(dragData)) {
        dragData = spEvt.GetData(g_dndSiteContentDataKey);
        if (!fIsNullOrUndefined(dragData)) {
            linkUrl = dragData[0].url;
            linkName = dragData[0].title;
            ghostLink = createGhostLink(linkName, linkUrl, orientation);
            ghostLinkData = new GhostLinkData(null, linkUrl, linkName, false);
            adjustListItemClass(ghostLink, listItem);
        }
    }
    if (fIsNullOrUndefined(dragData) || fIsNullOrUndefined(ghostLink)) {
        return;
    }
    if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
        spEvt.rawEvent.dataTransfer.dropEffect = "move";
    }
    var dropNodeTarget = dropNode;

    if (Boolean(dropNodeTarget.tagName) && dropNodeTarget.tagName.toUpperCase() == "TABLE")
        dropNodeTarget = getFirstChildElem(dropNode);
    var dropHeight = dropNodeTarget.clientHeight == 0 ? dropNodeTarget.offsetHeight : dropNodeTarget.clientHeight;
    var dropWidth = dropNodeTarget.clientHeight == 0 ? dropNodeTarget.offsetWidth : dropNodeTarget.clientWidth;

    if (evt.offsetX && evt.offsetY) {
        offsetX = evt.offsetX;
        offsetY = evt.offsetY;
    }
    else {
        var dropLoc = Sys.UI.DomElement.getLocation(dropNodeTarget);

        offsetX = evt.clientX - dropLoc.x;
        offsetY = evt.clientY - dropLoc.y;
    }
    if (offsetX > dropWidth || offsetY > dropHeight) {
        return;
    }
    parentList = listItem.parentNode;
    prevSibling = getPreviousSibling(listItem);
    nextSibling = getNextSibling(listItem);
    if (Boolean(dropNode.tagName) && dropNode.tagName.toUpperCase() == "UL" && hasClassName(dropNode, "dynamic")) {
        var lastDropNode = g_lastDropNode;
        var lastDropQuadrant = g_lastDropQuadrant;

        nextSibling = getLastChildElem(dropNode);
        if (Boolean(g_ghostLinkNode) && (g_ghostLinkNode == nextSibling || hasClassName(nextSibling, g_AppendDropArea) && g_ghostLinkNode == getPreviousSibling(nextSibling))) {
            dropHeight -= g_ghostLinkNode.offsetHeight;
        }
        if (offsetY <= 10) {
            targetQuadrant = DropNodeQuadrant.First;
        }
        else if (offsetY >= dropHeight - 10) {
            targetQuadrant = DropNodeQuadrant.Fourth;
        }
        else {
            resetDropSurface();
            return;
        }
        if (Boolean(g_lastDropNode) && Boolean(g_lastDropNode.id) && Boolean(dropNode.id) && g_lastDropNode.id == dropNode.id && Boolean(g_lastDropQuadrant) && g_lastDropQuadrant == targetQuadrant) {
            return;
        }
        resetGhostLink();
        if (targetQuadrant == DropNodeQuadrant.First) {
            nextSibling = getFirstChildElem(dropNode);
        }
        if (hasClassName(nextSibling, g_AppendDropArea)) {
            targetQuadrant = DropNodeQuadrant.First;
        }
        if (!Boolean(nextSibling))
            return;
        adjustListItemClass(ghostLink, nextSibling);
        listItem = nextSibling;
        parentList = dropNode;
    }
    else {
        targetQuadrant = getDropNodeQuadrant(getFirstChildElem(dropNode), offsetX, offsetY, g_QuickLaunchMenu.Orientation);
        if (!fIsNullOrUndefined(g_ghostLinkNode)) {
            if (!fIsNullOrUndefined(g_lastDropNode) && !fIsNullOrUndefined(listItem.id) && !fIsNullOrUndefined(g_lastDropNode.parentNode) && listItem.id == g_lastDropNode.parentNode.id && g_lastDropQuadrant == targetQuadrant || g_ghostLinkNode == listItem || targetQuadrant <= 0)
                return;
            resetGhostLink();
        }
        if (hasClassName(listItem, g_AppendDropArea)) {
            if (Boolean(dragQLItem) && dragQLItem == getPreviousSibling(listItem))
                return;
            else {
                nextSibling = listItem;
                targetQuadrant = DropNodeQuadrant.First;
            }
        }
    }
    node = listItem;
    while (dropNodeMaxDepth < draggedNodeDepth && !fIsNullOrUndefined(node) && !fIsNullOrUndefined(node.parentNode) && !fIsNullOrUndefined(node.parentNode.parentNode)) {
        node = node.parentNode.parentNode;
        if (node.tagName.toUpperCase() != "LI") {
            node = null;
            break;
        }
        dropNodeMaxDepth = g_QuickLaunchMenu.StaticLevels + g_QuickLaunchMenu.DynamicLevels - DetermineNodeDepth(node) + 1;
    }
    if (node == null)
        return;
    if (node != listItem) {
        listItem = node;
        parentList = listItem.parentNode;
    }
    if (dropNodeMaxDepth >= draggedNodeDepth) {
        var fRestrictDropNodeParent = IsDataNodeTreeRestricted(getListItem(parentList), dragQLItem);
        var fRestrictDropNode = IsDataNodeRestricted(listItem, dragQLItem);

        if (fRestrictDropNodeParent)
            return;
        var fShouldOpenFlyout = dropNodeDepth >= g_QuickLaunchMenu.StaticLevels && dropNodeMaxDepth > draggedNodeDepth;

        if (fShouldOpenFlyout && (targetQuadrant == DropNodeQuadrant.Second || targetQuadrant == DropNodeQuadrant.Third) && !fRestrictDropNode) {
            g_QuickLaunchMenu.ensureDragDropFlyout(listItem);
            window.setTimeout(Function.createDelegate(this, function() {
                if (g_lastDropNode == dropNode)
                    ShowFlyout(listItem);
            }), g_EditFlyoutOpenDelay);
        }
        else {
            var fTargetBehindDropNode = targetQuadrant == DropNodeQuadrant.First || !fShouldOpenFlyout && targetQuadrant == DropNodeQuadrant.Second;

            if (fTargetBehindDropNode) {
                if (!fIsNullOrUndefined(getPreviousSibling(listItem)) && !fIsNullOrUndefined(dragQLItem) && getPreviousSibling(listItem) == dragQLItem)
                    bSkipGhostLink = true;
                else
                    g_QuickLaunchMenu.addToMenuDOM(ghostLink, parentList, listItem, false);
            }
            else {
                var childList = listItem.querySelector("UL");

                if (dropNodeDepth < g_QuickLaunchMenu.StaticLevels && dropNodeMaxDepth > draggedNodeDepth && !fRestrictDropNode) {
                    if (!fIsNullOrUndefined(childList)) {
                        if (childList.childNodes.length > 0) {
                            nextSibling = getFirstChildElem(childList);
                        }
                        else {
                            parentList = childList;
                            nextSibling = null;
                        }
                    }
                    else {
                        var newChildList = document.createElement("UL");

                        newChildList.className = "static";
                        listItem.appendChild(newChildList);
                        parentList = newChildList;
                        nextSibling = null;
                    }
                }
                else {
                    if (!fIsNullOrUndefined(getNextSibling(listItem)) && !fIsNullOrUndefined(dragQLItem) && getNextSibling(listItem) == dragQLItem)
                        bSkipGhostLink = true;
                    else
                        nextSibling = getNextSibling(listItem);
                }
                if (!bSkipGhostLink) {
                    g_QuickLaunchMenu.addToMenuDOM(ghostLink, parentList, nextSibling, false);
                }
            }
        }
    }
    if (!bSkipGhostLink) {
        g_lastDropNode = dropNode;
        g_lastDropQuadrant = targetQuadrant;
        if (!fIsNullOrUndefined(ghostLink.parentNode) && !fIsNullOrUndefined(ghostLink.parentNode.parentNode)) {
            g_ghostLinkNode = ghostLink;
            g_ghostLinkData = ghostLinkData;
            addEvtListener(g_ghostLinkNode, "drop", GhostLinkDrop);
        }
    }
}
function navMenuDropHandler(spEvt) {
    if (!Boolean(g_QuickLaunchMenu) || !Boolean(g_QuickLaunchMenu.EditMode))
        return;
    var droppable = spEvt.droppable;

    if (!fIsNullOrUndefined(droppable)) {
        var dropNode = droppable.GetElement();
        var listItem = dropNode.parentNode;
        var newParentListItem = listItem.parentNode.parentNode;
        var oldParentListItem = null;
        var dragQLItem = null;
        var dragData = spEvt.GetData(g_navItemDataKey);

        if (!fIsNullOrUndefined(dragData)) {
            var dragNodeId = dragData[0].nodeId;

            dragQLItem = document.getElementById(g_QuickLaunchMenu.Id + "_" + dragNodeId);
            if (fIsNullOrUndefined(dragQLItem))
                return;
            if (listItem == dragQLItem)
                return;
            oldParentListItem = dragQLItem.parentNode.parentNode;
            var postMoveHandler = function() {
                dragQLItem.style.display = "";
                cleanEditFlyout(dragQLItem);
                if (hasFlyout(oldParentListItem) && listItem.id != oldParentListItem.id) {
                    cleanEditFlyout(oldParentListItem);
                    HideFlyout(oldParentListItem);
                }
            };

            if (!fIsNullOrUndefined(g_ghostLinkNode)) {
                if (!g_QuickLaunchMenu.moveLink(dragQLItem, null, g_ghostLinkNode, postMoveHandler)) {
                    HideFlyout(newParentListItem);
                }
            }
            else if (!hasVisibleNodes(listItem.querySelector("ul"))) {
                HideFlyout(listItem);
            }
        }
        if (fIsNullOrUndefined(dragData)) {
            dragData = spEvt.GetData(g_docItemDataKey);
            if (!fIsNullOrUndefined(dragData)) {
                var linkUrl = dragData[0].fileUrl;
                var linkName = dragData[0].title;
                var fSelected = false;

                if (fIsNullOrUndefined(linkName) || linkName.length < 1) {
                    linkName = dragData[0].fileName;
                    var dotIndex = linkName.lastIndexOf('.');

                    if (dotIndex < 1)
                        dotIndex = linkName.length;
                    linkName = linkName.substring(0, dotIndex);
                }
                if (linkName.length < 1) {
                    linkName = linkUrl;
                }
                if (!fIsNullOrUndefined(g_ghostLinkNode)) {
                    dragQLItem = g_QuickLaunchMenu.addLink(linkName, linkUrl, null, g_ghostLinkNode, fSelected, false);
                }
            }
        }
        if (fIsNullOrUndefined(dragData)) {
            dragData = spEvt.GetData(g_dndPageTitleDataKey);
            if (!fIsNullOrUndefined(dragData)) {
                linkUrl = dragData[0].url;
                linkName = dragData[0].title;
                if (!fIsNullOrUndefined(g_ghostLinkNode)) {
                    dragQLItem = g_QuickLaunchMenu.addLink(linkName, linkUrl, null, g_ghostLinkNode, true, false);
                }
            }
        }
        if (fIsNullOrUndefined(dragData)) {
            dragData = spEvt.GetData(g_dndSiteContentDataKey);
            if (!fIsNullOrUndefined(dragData)) {
                linkUrl = dragData[0].url;
                linkName = dragData[0].title;
                if (!fIsNullOrUndefined(g_ghostLinkNode)) {
                    dragQLItem = g_QuickLaunchMenu.addLink(linkName, linkUrl, null, g_ghostLinkNode, false, false);
                }
            }
        }
        cleanEditFlyout(g_activeFlyout);
        if (!fIsNullOrUndefined(newParentListItem)) {
            if (hasFlyout(newParentListItem)) {
                cleanEditFlyout(newParentListItem);
            }
            if (g_activeFlyout != newParentListItem) {
                HideFlyout(g_activeFlyout);
            }
        }
        RefreshListItem(listItem);
        RefreshListItem(oldParentListItem);
        RefreshListItem(newParentListItem);
        focusOnLinkNode(dragQLItem);
    }
    resetGhostLink();
    resetDropSurface();
}
function navMenuDragEnterHandler(spEvt) {
    var droppable = spEvt.droppable;

    if (!Boolean(g_QuickLaunchMenu) || !Boolean(g_QuickLaunchMenu.EditMode) || fIsNullOrUndefined(droppable))
        return;
    var dropNode = droppable.GetElement();

    if (Boolean(g_dropSurface) && Boolean(dropNode)) {
        var targetNode = null;
        var width = 0;
        var height = 0;

        if (Boolean(dropNode.tagName) && dropNode.tagName.toUpperCase() == "UL") {
            targetNode = dropNode;
        }
        else if (g_QuickLaunchMenu.Orientation == MenuOrientation.Horizontal && hasClassName(dropNode, "ms-core-listMenuEdit") && hasClassName(dropNode.parentNode, "static")) {
            height = 10;
            targetNode = dropNode;
        }
        if (Boolean(targetNode)) {
            width += targetNode.offsetWidth != 0 ? targetNode.offsetWidth : targetNode.clientWidth;
            height += targetNode.offsetHeight != 0 ? targetNode.offsetHeight : targetNode.clientHeight;
            g_dropSurface.style.width = String(width) + 'px';
            g_dropSurface.style.height = String(height) + 'px';
        }
    }
}
function navMenuDragLeaveHandler(spEvt) {
    var droppable = spEvt.droppable;

    resetGhostLink();
    resetDropSurface();
    if (Boolean(g_activeFlyout))
        cleanEditFlyout(g_activeFlyout);
    if (!Boolean(g_QuickLaunchMenu) || !Boolean(g_QuickLaunchMenu.EditMode) || fIsNullOrUndefined(droppable))
        return;
    var dropNode = droppable.GetElement();
    var listItem = getListItem(dropNode);

    if (fIsNullOrUndefined(listItem))
        return;
    HideFlyout(listItem);
}
function GhostLinkDrop(evt) {
    if (!Boolean(evt))
        evt = window.event;
    cancelDefault(evt);
    navMenuDropGhostLink();
    return false;
}
function addEvtListener(obj, evt, fn) {
    if (!fIsNullOrUndefined(obj) && !fIsNullOrUndefined(evt) && !fIsNullOrUndefined(fn)) {
        if (typeof obj.addEventListener == 'function') {
            obj.addEventListener(evt, fn, false);
        }
        else {
            $addHandler(obj, evt, fn);
        }
    }
}
function GhostLinkData(nodeId, linkUrl, linkName, fSelected) {
    this.NodeId = nodeId;
    this.LinkUrl = linkUrl;
    this.LinkName = STSHtmlEncode(linkName);
    this.Selected = fSelected;
}
function navMenuDropGhostLink() {
    if (g_QuickLaunchMenu.EditMode == false)
        return;
    if (!fIsNullOrUndefined(g_ghostLinkNode) && !fIsNullOrUndefined(g_ghostLinkData)) {
        var ghostLinkParentItem = g_ghostLinkNode.parentNode.parentNode;

        if (Boolean(g_ghostLinkData.LinkUrl) || Boolean(g_ghostLinkData.LinkName)) {
            g_QuickLaunchMenu.addLink(g_ghostLinkData.LinkName, g_ghostLinkData.LinkUrl, null, g_ghostLinkNode, g_ghostLinkData.Selected, false);
        }
        else if (!fIsNullOrUndefined(g_ghostLinkData.NodeId)) {
            var dragQLItem = document.getElementById(g_QuickLaunchMenu.Id + "_" + String(g_ghostLinkData.NodeId));

            if (!fIsNullOrUndefined(dragQLItem)) {
                var oldParentListItem = dragQLItem.parentNode.parentNode;
                var postMoveHandler = function() {
                    var newParentListItem = g_ghostLinkNode.parentNode.parentNode;

                    dragQLItem.style.display = "";
                    cleanEditFlyout(dragQLItem);
                    focusOnLinkNode(dragQLItem);
                    if (hasFlyout(oldParentListItem) && newParentListItem.id != oldParentListItem.id) {
                        cleanEditFlyout(oldParentListItem);
                        HideFlyout(oldParentListItem);
                    }
                    if (hasFlyout(newParentListItem)) {
                        cleanEditFlyout(newParentListItem);
                    }
                    if (g_activeFlyout != newParentListItem) {
                        HideFlyout(g_activeFlyout);
                    }
                };

                if (!g_QuickLaunchMenu.moveLink(dragQLItem, null, g_ghostLinkNode, postMoveHandler)) {
                    HideFlyout(ghostLinkParentItem);
                }
            }
        }
        resetGhostLink();
        RefreshListItem(ghostLinkParentItem);
    }
}
function makeGhostFromItem(item, orientation) {
    if (fIsNullOrUndefined(item))
        return null;
    var ghost = item.cloneNode(true);

    if (fIsNullOrUndefined(ghost))
        return null;
    var linkCells = ghost.getElementsByTagName("TD");

    if (!fIsNullOrUndefined(linkCells)) {
        for (var i = 0; i < linkCells.length; i++) {
            if (!fIsNullOrUndefined(linkCells[i].childNodes)) {
                for (var j = 0; j < linkCells[i].childNodes.length; j++) {
                    var target = linkCells[i].childNodes[j];

                    addClassName(target, "ms-core-listMenu-ghost");
                    removeClassName(target, "ms-core-listMenu-selected");
                }
            }
        }
    }
    var delLinks = ghost.querySelectorAll("a." + g_NavMenuDeleteLinkClassName);
    var nLength = delLinks.length;

    for (i = 0; i < nLength; i++) {
        addClassName(delLinks[i], "ms-visibilityHidden");
    }
    var arrowNodes = ghost.querySelectorAll(".additional-background");

    nLength = arrowNodes.length;
    for (i = 0; i < nLength; i++) {
        addClassName(arrowNodes[i], "ms-navedit-ghosted");
    }
    ghost.id = "";
    var childList = ghost.querySelector("ul");

    if (Boolean(childList)) {
        ghost.removeChild(childList);
    }
    hookUpLinkEditHandlers(ghost);
    return ghost;
}
function createGhostLink(title, url, orientation) {
    var item = document.createElement("LI");

    item.setAttribute("class", "static");
    var link = document.createElement("A");

    link.href = url;
    link.innerHTML = STSHtmlEncode(title);
    link.setAttribute("class", "static menu-item ms-core-listMenu-item ms-core-listMenu-ghost");
    var ghostTable = createEditNodeFromLink(link, orientation, false, false);

    item.appendChild(ghostTable);
    return item;
}
function resetGhostLink() {
    if (!Boolean(g_fAsyncDialogOpened)) {
        if (!fIsNullOrUndefined(g_ghostLinkNode) && !fIsNullOrUndefined(g_ghostLinkNode.parentNode)) {
            var ghostLinkList = g_ghostLinkNode.parentNode;

            cleanEditFlyout(getListItem(ghostLinkList));
            ghostLinkList.removeChild(g_ghostLinkNode);
        }
        g_ghostLinkNode = null;
        g_ghostLinkData = null;
        g_lastDropNode = null;
        g_lastDropQuadrant = DropNodeQuadrant.None;
    }
}
function resetDropSurface() {
    var dropSurf = document.getElementById(g_dropSurfaceId);

    if (!fIsNullOrUndefined(dropSurf)) {
        dropSurf.style.display = "none";
    }
}
function isTextNode(elem) {
    return elem.nodeType === 3 || elem.nodeType === 4;
}
function getNextSibling(elem) {
    var nextSibling = elem.nextSibling;

    while (Boolean(nextSibling) && isTextNode(nextSibling)) {
        nextSibling = nextSibling.nextSibling;
    }
    return nextSibling;
}
function getPreviousSibling(elem) {
    var prevSibling = elem.previousSibling;

    while (Boolean(prevSibling) && isTextNode(prevSibling)) {
        prevSibling = prevSibling.previousSibling;
    }
    return prevSibling;
}
function getFirstChildElem(elem) {
    if (Boolean(elem.firstElementChild)) {
        return elem.firstElementChild;
    }
    return elem.firstChild;
}
function getLastChildElem(elem) {
    if (Boolean(elem.lastElementChild)) {
        return elem.lastElementChild;
    }
    return elem.lastChild;
}
function hasClassName(elem, className) {
    if (!fIsNullOrUndefined(elem) && Boolean(elem.getAttribute)) {
        var elemClass = elem.getAttribute("class");

        if (!fIsNullOrUndefined(elemClass)) {
            var r = new RegExp("(?:^| )(" + className + ")(?: |$)");

            if (Boolean(elemClass.match(r)))
                return true;
        }
    }
    return false;
}
function removeClassName(elem, className) {
    if (!fIsNullOrUndefined(elem) && Boolean(elem.getAttribute)) {
        var elemClass = elem.getAttribute("class");

        if (!fIsNullOrUndefined(elemClass) && elemClass.length > 0) {
            var r = new RegExp("(?:^| )(" + className + ")(?: |$)");

            elemClass = elemClass.replace(r, " ");
            elem.setAttribute("class", elemClass);
        }
    }
}
function addClassName(elem, className) {
    if (!fIsNullOrUndefined(elem) && Boolean(elem.getAttribute)) {
        var elemClass = elem.getAttribute("class");

        if (!fIsNullOrUndefined(elemClass)) {
            if (!hasClassName(elem, className)) {
                if (elemClass.length > 0)
                    elemClass += " ";
                elemClass += className;
            }
        }
        else {
            elemClass = className;
        }
        elem.setAttribute("class", elemClass);
    }
}
function nodeHasElement(node, elem) {
    if (fIsNullOrUndefined(node) || fIsNullOrUndefined(elem))
        return null;
    if (node == elem)
        return node;
    var elemFound = null;
    var nLength = node.childNodes.length;

    for (var i = 0; i < nLength; i++) {
        if (node.childNodes[i] == elem)
            return node.childNodes[i];
        else
            elemFound = nodeHasElement(node.childNodes[i], elem);
        if (!fIsNullOrUndefined(elemFound))
            return elemFound;
    }
    return null;
}
function isAncestor(ancestor, node) {
    if (!fIsNullOrUndefined(ancestor) && !fIsNullOrUndefined(node)) {
        var tempNode = node;

        while (!fIsNullOrUndefined(tempNode)) {
            if (tempNode == ancestor)
                return true;
            tempNode = tempNode.parentNode;
        }
    }
    return false;
}
function getAncestorByTagName(node, tagName) {
    if (node == null || node.tagName.toUpperCase() == tagName.toUpperCase())
        return node;
    var currNode = node;

    while (!fIsNullOrUndefined(currNode.parentNode) && currNode.tagName.toUpperCase() != tagName.toUpperCase())
        currNode = currNode.parentNode;
    if (currNode.tagName.toUpperCase() == tagName.toUpperCase())
        return currNode;
    else
        return null;
}
function getTable(node) {
    return getAncestorByTagName(node, "TABLE");
}
function getSpan(node) {
    return getAncestorByTagName(node, "SPAN");
}
function getListItem(link) {
    if (link.tagName.toUpperCase() == "LI")
        return link;
    var node = link;

    while (!fIsNullOrUndefined(node.parentNode) && node.tagName.toUpperCase() != "LI")
        node = node.parentNode;
    if (!fIsNullOrUndefined(node.tagName) && node.tagName.toUpperCase() == "LI")
        return node;
    else
        return null;
}
function DetermineNodeDepth(listItem) {
    var depth = 0;
    var item = listItem;
    var nodeList = null;

    if (!fIsNullOrUndefined(listItem))
        nodeList = listItem.parentNode;
    while (!fIsNullOrUndefined(item) && !fIsNullOrUndefined(item.tagName) && item.tagName.toUpperCase() == "LI" && !fIsNullOrUndefined(nodeList) && !fIsNullOrUndefined(nodeList.tagName) && nodeList.tagName.toUpperCase() == "UL") {
        depth++;
        item = nodeList.parentNode;
        nodeList = item.parentNode;
    }
    return depth;
}
function DetermineMaxListDepth(node, depth, maxDepth) {
    if (!fIsNullOrUndefined(node) && node.id == g_QuickLaunchMenu.Id + "_HiddenAppendArea")
        return 1;
    if (fIsNullOrUndefined(node) || !Boolean(node.tagName) || node.tagName.toUpperCase() != "LI" || hasClassName(node, g_AppendDropArea))
        return maxDepth;
    if (depth > maxDepth)
        maxDepth = depth;
    var nLength = node.childNodes.length;

    for (var i = 0; i < nLength; i++) {
        if (node.childNodes[i].tagName.toUpperCase() == "UL") {
            var nodeList = node.childNodes[i];
            var nChildsLength = nodeList.childNodes.length;

            for (var j = 0; j < nChildsLength; j++) {
                var nodeMaxDepth = DetermineMaxListDepth(nodeList.childNodes[j], depth + 1, maxDepth);

                if (nodeMaxDepth > maxDepth)
                    maxDepth = nodeMaxDepth;
            }
        }
    }
    return maxDepth;
}
var DialogReturnCode;

function DismissDlgWithCode(retCode) {
    var dlg = typeof window.top.g_childDialog != "undefined" ? window.top.g_childDialog : undefined;

    if (Boolean(dlg)) {
        dlg.close(retCode);
    }
}
function LaunchMessageDialogCore(dlgTitle, msg, isConfirmationDlg, dlgHandler) {
    var innerHtmlStr = "<div>{0}</div><div class='ms-dnd-dlg-buttonDiv'><button id='js-navedit-OKBtnDismissDlg' onclick='DismissDlgWithCode(DialogReturnCode.OK)'>{1}</button>";

    if (isConfirmationDlg == true) {
        innerHtmlStr += "<button id='js-navedit-CancelBtnDismissDlg' onclick='DismissDlgWithCode(DialogReturnCode.Cancel)'>{2}</button>";
    }
    innerHtmlStr += "</div>";
    var divElem = document.createElement("DIV");

    divElem.innerHTML = String.format(innerHtmlStr, msg, Strings.STS.L_OkButtonCaption, Strings.STS.L_CancelButtonCaption);
    var dopt = {
        html: divElem,
        title: dlgTitle,
        dialogReturnValueCallback: dlgHandler
    };
    var dlg = EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dopt);

    if (!isConfirmationDlg == false) {
        var okButton = document.getElementById('js-navedit-OKBtnDismissDlg');

        if (Boolean(okButton))
            okButton.focus();
    }
}
function LaunchMessageDialog(dlgTitle, msg, dlgHandler) {
    LaunchMessageDialogCore(dlgTitle, msg, false, dlgHandler);
}
function LaunchConfirmDialog(dlgTitle, msg, dlgHandler) {
    LaunchMessageDialogCore(dlgTitle, msg, true, dlgHandler);
}
function logmsg(msg) {
    if (window.console && window.console.log) {
        window.console.log(getTheTime() + "  >>  " + msg);
    }
}
function getTheTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var strMin = String(minutes);
    var strSec = String(seconds);

    if (minutes < 10) {
        strMin = "0" + String(minutes);
    }
    if (seconds < 10) {
        strSec = "0" + String(seconds);
    }
    return String(hours) + ":" + strMin + ":" + strSec;
}
function dumpQLMenuData() {
}
$_global_quicklaunch();
