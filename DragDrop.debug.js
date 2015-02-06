function $_global_dragdrop() {
    DragDropMode = {
        NOTSUPPORTED: -1,
        IE8: 0,
        IE9: 1,
        HTML5: 3
    };
    DragDropType = {
        DRAGGABLE: 0,
        DROPPABLE: 1
    };
    DragDropLoggingLevel = {
        NONE: -1,
        ALL: 0,
        ALLEVENT: 1,
        SPEVENT: 2
    };
    g_spDragImageClass = "ms-dragimage-div";
    g_dropSurfaceId = "sp-dropsurface-div";
    g_dropSurfaceClass = "ms-dropsurface-div";
    g_dropSurfaceClass_IE = "ms-dropsurface-div-ie";
    g_DragIDAttrName = "DragId";
    g_DropIDAttrName = "DropId";
    SPDragDropManager = {
        DragDropMode: GetDragDropMode(),
        LoggingLevel: DragDropLoggingLevel.ALL,
        LastID: 0,
        Draggables: [],
        Droppables: [],
        ObjectDragged: undefined,
        ObjectDropped: undefined,
        ObjectEntered: undefined,
        DragStartPos: undefined,
        GetDragID: function(element) {
            if (!fIsNullOrUndefined(element) && Boolean(element.getAttribute)) {
                return element.getAttribute(g_DragIDAttrName);
            }
            else
                return undefined;
        },
        GetDropID: function(element) {
            if (!fIsNullOrUndefined(element) && Boolean(element.getAttribute)) {
                return element.getAttribute(g_DropIDAttrName);
            }
            else
                return undefined;
        },
        SetDragID: function(element) {
            if (!fIsNullOrUndefined(element) && Boolean(element.setAttribute)) {
                element.setAttribute(g_DragIDAttrName, String(SPDragDropManager.LastID++));
            }
        },
        SetDropID: function(element) {
            if (!fIsNullOrUndefined(element) && Boolean(element.setAttribute)) {
                element.setAttribute(g_DropIDAttrName, String(SPDragDropManager.LastID++));
            }
        },
        InitObject: function(type, element, linkKeys, options, eventListeners) {
            if (SPDragDropManager.DragDropMode == DragDropMode.NOTSUPPORTED)
                return;
            var obj;

            if (type == DragDropType.DRAGGABLE) {
                obj = SPDragDropManager.Draggables[element];
                if (fIsNullOrUndefined(obj))
                    obj = new SPDraggable(element, linkKeys);
                if (!fIsNullOrUndefined(obj))
                    SPDragDropManager.SetDragID(element);
            }
            else if (type == DragDropType.DROPPABLE) {
                obj = SPDragDropManager.Droppables[element];
                if (fIsNullOrUndefined(obj))
                    obj = new SPDroppable(element, linkKeys);
                if (!fIsNullOrUndefined(obj))
                    SPDragDropManager.SetDropID(element);
            }
            else
                return;
            if (!fIsNullOrUndefined(obj)) {
                if (!fIsNullOrUndefined(options)) {
                    obj.SetOptions(options);
                }
                if (!fIsNullOrUndefined(eventListeners)) {
                    for (var evtType in eventListeners) {
                        obj.AddEventListener(evtType, eventListeners[evtType]);
                    }
                }
            }
            return obj;
        },
        GetDraggable: function(element) {
            var ddId = SPDragDropManager.GetDragID(element);

            if (!fIsNullOrUndefined(ddId))
                return SPDragDropManager.Draggables[ddId];
            else
                return undefined;
        },
        GetDroppable: function(element) {
            var ddId = SPDragDropManager.GetDropID(element);

            if (!fIsNullOrUndefined(ddId))
                return SPDragDropManager.Droppables[ddId];
            else
                return undefined;
        },
        InitDraggable: function(element, linkKeys, options, eventListeners) {
            if (fIsNullOrUndefined(element))
                return undefined;
            var draggable = SPDragDropManager.InitObject(DragDropType.DRAGGABLE, element, linkKeys, options, eventListeners);

            if (fIsNullOrUndefined(draggable))
                return undefined;
            var ddId = SPDragDropManager.GetDragID(element);

            if (!fIsNullOrUndefined(ddId))
                SPDragDropManager.Draggables[ddId] = draggable;
            if (draggable.Enabled()) {
                draggable.Activate();
            }
            var fAvoidClass = draggable.GetOption('avoidClass');

            if (!fAvoidClass) {
                addClass(element, 'ms-draggable');
            }
            return draggable;
        },
        InitDroppable: function(element, linkKeys, options, eventListeners) {
            if (fIsNullOrUndefined(element))
                return undefined;
            var droppable = SPDragDropManager.InitObject(DragDropType.DROPPABLE, element, linkKeys, options, eventListeners);

            if (fIsNullOrUndefined(droppable))
                return undefined;
            var ddId = SPDragDropManager.GetDropID(element);

            if (!fIsNullOrUndefined(ddId))
                SPDragDropManager.Droppables[ddId] = droppable;
            var fAvoidClass = droppable.GetOption('avoidClass');

            if (!fAvoidClass) {
                addClass(element, 'ms-droppable');
                element.setAttribute("aria-dropeffect", "move");
            }
            return droppable;
        }
    };
    SPProgressMeter = {
        CreateMeter: function(valueIn) {
            var outerDiv = document.createElement("DIV");

            outerDiv.className = "ms-progress-meter";
            var innerDiv = document.createElement("DIV");

            innerDiv.className = "ms-progress-meter-inner";
            innerDiv.style.width = String(valueIn) + "%";
            outerDiv.appendChild(innerDiv);
            return outerDiv;
        },
        SetProgress: function(meterElement, valueIn) {
            if (fIsNullOrUndefined(meterElement) || !hasClass(meterElement, "ms-progress-meter", true) || fIsNullOrUndefined(meterElement.firstChild))
                return;
            var v = valueIn;

            if (v < 0 || v > 100)
                v = 0;
            meterElement.firstChild.style.width = String(v) + "%";
        }
    };
    g_dragdroplog = [];
    g_fileErrorDetailHTML = "<div class='ms-core-form-section'><div class='ms-core-form-line'><h3>{0}</h3></div><div class='ms-core-form-line'>{1}</div></div>";
    docIconClass = "ms-vb-icon";
    titleClass = "ms-vb-title";
    g_dndDocItemFolderKey = 'sp-dragdrop-item-folder';
    g_dndDocItemQLLib = 'sp-dragdrop-item-qllib';
    g_dndListItemQL = 'sp-dragdrop-listitem-ql';
    g_docItemDragImageID = 'ms-dragdoc-image-div';
    g_docItemDragImageInnerHTML = '<img class="ms-verticalAlignMiddle" src="' + "/_layouts/15/images/icgen.gif?rev=23" + '"/><span class="ms-dragdoc-image-text ms-verticalAlignMiddle">' + Strings.STS.L_DragDropDocItemMoveText + '</span>';
    g_docItemDataKey = 'SPDocItemDragData';
    g_outWindowBefore = false;
    g_dragDownloadStarted = false;
    DragUploadControl.prototype = {
        elmDropTargetElement: undefined,
        activeXObj: undefined,
        elmProgressBar: undefined,
        strSiteUrl: undefined,
        strSiteRelativeUrl: undefined,
        strListName: undefined,
        strRootFolder: undefined,
        strDestinationUrl: undefined,
        fOverwriteAll: undefined,
        fHideProgressBar: undefined,
        status: undefined,
        files: undefined,
        fInlineProgress: undefined,
        fInlineDisplayError: undefined,
        fInlineDisplayStarted: undefined,
        schemaFieldsXml: undefined,
        processedCount: undefined,
        succeededCount: undefined,
        failedCount: undefined,
        warnedCount: undefined,
        progress: undefined,
        cctask: undefined,
        refreshFunc: undefined,
        preUploadFunc: undefined,
        postUploadFunc: undefined,
        checkPermissionFunc: undefined
    };
    FileElement.prototype = {
        fileName: undefined,
        fileSize: undefined,
        type: undefined,
        droppedFile: undefined,
        overwrite: undefined,
        status: undefined,
        statusText: undefined,
        subFolder: undefined,
        relativeFolder: undefined,
        isFolder: undefined
    };
    UploadState.prototype = {
        status: undefined,
        files: undefined,
        filesIndexToSend: undefined,
        totalBytes: undefined,
        totalBytesProcessed: undefined,
        totalBytesInProgress: undefined,
        request: undefined,
        uploadingCount: undefined,
        percentDone: undefined,
        succeededCount: undefined,
        failedCount: undefined,
        warnedCount: undefined,
        conflictFiles: undefined,
        cancelConfirm: undefined,
        lastRefreshTime: undefined,
        checkedOutCount: undefined
    };
    UploadType = {
        NOT_SUPPORTED: 0,
        ACTIVEX: 1,
        ACTIVEXNA: 2,
        HTML5: 3
    };
    ControlStatus = {
        IDLE: 0,
        ENTERED: 1,
        DROPPED: 2,
        UPLOADING: 3,
        UPLOADED: 4
    };
    FileStatus = {
        INVALID: -1,
        PENDING: 0,
        SKIP: 1,
        READING: 2,
        READ: 3,
        UPLOADING: 4,
        UPLOADED: 5,
        FAILED: 6,
        WARNING: 7
    };
    ProgressMessage = {
        EMPTY: 0,
        VALIDATION: 1,
        UPLOADING: 2,
        UPLOADED: 3,
        CANCELLED: 4
    };
    UploadStatus = {
        PENDING: 0,
        VALIDATING: 1,
        VALIDATED: 2,
        IN_READ_UPLOAD: 3,
        FINISHED: 4,
        CANCELLED: 5
    };
    CancelConfirmationStatus = {
        UNCONFIRMED: 0,
        CONFIRMEDYES: 1,
        CONFIRMEDNO: 2
    };
    C_MEGABYTES = 1024 * 1024;
    C_MAX_FILESIZE = 2047 * C_MEGABYTES;
    C_MAX_TOTALFILESIZE = 2047 * C_MEGABYTES;
    C_MAX_REQUESTSIZE = 2047 * C_MEGABYTES;
    C_MAX_FILECOUNT = 100;
    C_MIN_REFRESH_INTERVAL = 300;
    g_uploadType = getUploadType();
    g_inplaceDisplay = false;
    g_uploadCtl = [];
    g_currentControl = null;
    DragUploadControl.prototype.Initialize = DUCInitialize;
    DragUploadControl.prototype.BindDragDrop = DUCBindDragDrop;
    c_dropBoxDivID = 'ms-dnd-dropbox';
    c_dropBoxTextID = "ms-dnd-dropboxText";
    c_activeXObjectID = 'ms-dnd-activeX';
    c_activeXCLSID = 'CLSID:9ED13477-E909-45BC-BADC-2106D04D6BD7';
    c_uploadUrl = "/_layouts/15/upload.aspx?IsAJAX=1&List=";
    c_progInfoID = "_progInfo";
    c_progInfoClass = "ms-dnd-progressInfo";
    c_progInfoClassInline = "ms-dnd-progressInfo-inline ms-textLarge";
    c_progInfoTableID = "ms-dnd-progressInfoTb";
    c_progInfoTableClass = "ms-dnd-progressInfoTb";
    c_progMessageClass = "ms-dnd-progressMessage";
    c_progIconID = "ms-dnd-progressIcon";
    c_progTextID = "ms-dnd-progressText";
    c_progCancelBtnID = "ms-dnd-progressCancelBtn";
    c_progRefreshBtnID = "ms-dnd-progressRefreshBtn";
    C_detailRowId = "ms-dnd-error-detailrow";
    C_progImgClass = "ms-dnd-progressImg";
    c_progMeterTdID = "ms-dnd-progressMeterTd";
    c_progMeterID = "ms-dnd-progressMeter";
    c_progInfoCloseID = "ms-dnd-progressClose";
    c_progTableHTML = "<div id='{0}' class='ms-table " + c_progInfoTableClass + "'><div class='ms-tableRow'><div class='ms-tableCell " + C_progImgClass + "'><img id='{1}' class='ms-verticalAlignMiddle'/></div>" + "<div class='ms-tableCell {5}'><span id='{2}'></span> <a id='{3}' href='#' onclick='cancelTask();'>{4}</a> <a id='{6}' href='#' onclick='FullRefresh(g_currentCtx);'>{7}</a></div></div></div>";
    c_progTableHTMLInline = "<table id='{0}' class='" + c_progInfoTableClass + "' cellpadding='0' cellspacing='0'><tr>" + "<td class='{5}'><span id='{1}'></span></td><td id={2}></td><td><a class='ms-commandLink' id='{3}' href='#' onclick='cancelTask();'>{4}</a></td>" + "<td><a class='ms-commandLink' id='{6}' href='#' onclick='CloseProgressBar();'>{7}</a></td></tr></table>";
    c_failedLinkABegin = "<a href='#' onclick='ShowHideErrorDetails(this, event);'>";
    c_failedLinkAllErrorsABegin = "<a href='#' onclick='ShowAllErrorDetailsInDialog();'>";
    c_doRestDiv = "<div class='ms-dnd-dlg-doRestDiv'><input type='checkbox' id='ms-conflictDlgDoRest'/><label for='ms-conflictDlgDoRest'>{0}</label></div>";
    c_conflictButtons = "<div class='ms-core-form-bottomButtonBox'><button id='ms-conflictDlgReplaceBtn' onclick='DismissConflictDlg(this, event)' href='#'>{0}</button>" + "<button id='ms-conflictDlgNoUploadBtn' onclick='DismissConflictDlg(this, event)' href='#'>{1}</button></div>";
    C_DETAILDIVID = "ms-uploadDetailsDiv";
    C_ERRTABLE = "ms-table ms-dnd-err ms-status-red";
    C_ERRITEM = "ms-dnd-err-itm";
    C_ERRITEMNAME = "ms-dnd-err-itmName";
    C_ERRITEMMSG = "ms-verticalAlignMiddle";
    pluginID = 'spDragDownloadPlugin';
    downloadAXID = "sp-dragdwld-actx";
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("DragDrop.js");
    }
}
function ULSAZP() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "dragdrop.commentedjs";
    return o;
}
var DragDropMode;
var DragDropType;
var DragDropLoggingLevel;
var g_spDragImageClass;
var g_dropSurface;
var g_dropSurfaceBase;
var g_dropSurfaceId;
var g_dropSurfaceClass;
var g_dropSurfaceClass_IE;
var g_DragIDAttrName;
var g_DropIDAttrName;
var SPDragDropManager;

function SPDragDropBase(element, linkKeys, validOptions, validEvents) {
    var _srcElement = element;
    var _linkKeys = linkKeys;
    var _options = [];
    var _enabled = true;
    var _events = [];
    var _validOptions = validOptions;
    var _validEvents = validEvents;

    this.GetElement = function() {
    ULSAZP:
        ;
        return _srcElement;
    };
    this.AddLinkKey = function(linkKey) {
    ULSAZP:
        ;
        _linkKeys[linkKey] = "";
    };
    this.RemoveLinkKey = function(linkKey) {
    ULSAZP:
        ;
        delete _linkKeys[linkKey];
    };
    this.GetLinkKeys = function() {
    ULSAZP:
        ;
        return _linkKeys;
    };
    this.GetOption = function(optionName) {
        return _options[optionName];
    };
    this.SetOption = function(optionName, value) {
        if (optionName in _validOptions)
            _options[optionName] = value;
    };
    this.SetOptions = function(options) {
        for (var key in options) {
            if (key in _validOptions)
                this.SetOption(key, options[key]);
        }
    };
    this.Enable = function() {
    ULSAZP:
        ;
        _enabled = true;
    };
    this.Disable = function() {
    ULSAZP:
        ;
        _enabled = false;
    };
    this.Enabled = function() {
    ULSAZP:
        ;
        return _enabled;
    };
    this.Remove = function() {
    ULSAZP:
        ;
    };
    this.AddEventListener = function(eventType, listenerFunc) {
        if (eventType in _validEvents && !fIsNullOrUndefined(listenerFunc) && typeof listenerFunc == 'function') {
            var listeners = _events[eventType];

            if (fIsNullOrUndefined(listeners)) {
                listeners = new Array(0);
            }
            listeners.push(listenerFunc);
            _events[eventType] = listeners;
        }
    };
    this.FireEvent = function(eventType, spEvent) {
        if (eventType in _validEvents) {
            var listeners = _events[eventType];

            if (!fIsNullOrUndefined(listeners)) {
                for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];

                    if (!fIsNullOrUndefined(listener) && typeof listener == 'function') {
                        listener(spEvent);
                    }
                }
            }
        }
    };
}
function SPDraggable(element, linkKeys) {
    var thisCopy = this;
    var _draggableOptions = {
        "avoidClass": "",
        "cursor": "",
        "cursorAt": "",
        "delay": "",
        "distance": "",
        "dragImage": "",
        "sensitivity": 0
    };
    var _eventTypes = {
        "spDragStart": "",
        "spDrag": "",
        "spDragEnd": ""
    };
    var DragState = {
        INACTIVE: 0,
        ENALBED: 1,
        MOUSEDOWN: 2,
        DETECTED: 3,
        STARTED: 4,
        DRAG: 5,
        END: 6
    };
    var _baseObj = new SPDragDropBase(element, linkKeys, _draggableOptions, _eventTypes);
    var _droppables = [];
    var _initialMouseX = 0;
    var _initialMouseY = 0;
    var _initialTime;
    var _mousedownObj;
    var _dragImage;
    var _dataObjects = {};

    function enableDrag(elem) {
        if (fIsNullOrUndefined(elem))
            return;
        if (SPDragDropManager.DragDropMode == DragDropMode.IE8 || SPDragDropManager.DragDropMode == DragDropMode.IE9) {
            var tag = elem.tagName;

            if (tag != 'A' && tag != 'IMG') {
                addListener(elem, 'mousedown', onMouseDown);
                addListener(elem, 'mouseup', onMouseUp);
            }
        }
        else if (SPDragDropManager.DragDropMode == DragDropMode.HTML5) {
            elem.setAttribute('draggable', true);
        }
        addListener(elem, 'dragstart', onDragStart);
        addListener(elem, 'drag', onDrag);
        addListener(elem, 'dragend', onDragEnd);
    }
    function disableDrag(elem) {
        if (fIsNullOrUndefined(elem))
            return;
        if (SPDragDropManager.DragDropMode == DragDropMode.IE8 || SPDragDropManager.DragDropMode == DragDropMode.IE9) {
            var tag = elem.tagName;

            if (tag != 'A' && tag != 'IMG') {
                removeListener(elem, 'mousedown', onMouseDown);
                removeListener(elem, 'mouseup', onMouseUp);
            }
        }
        else if (SPDragDropManager.DragDropMode == DragDropMode.HTML5) {
            elem.removeAttribute('draggable');
        }
        removeListener(elem, 'dragstart', onDragStart);
        removeListener(elem, 'drag', onDrag);
        removeListener(elem, 'dragend', onDragEnd);
    }
    function onMouseDown(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, thisCopy, 'mousedown');
        thisCopy.Status = DragState.MOUSEDOWN;
        addListener(document, 'mousemove', onMouseMove);
        thisCopy._initialMouseX = evt.clientX;
        thisCopy._initialMouseY = evt.clientY;
        if (evt.srcElement)
            thisCopy._mousedownObj = evt.srcElement;
        loginfo('mousedown, initX:' + thisCopy._initialMouseX + ',initY:' + thisCopy._initialMouseY + ',initTime:');
        cancelDefault(evt);
    }
    function onMouseUp(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        if (Math.abs(evt.clientX - Number(thisCopy._initialMouseX)) <= parseInt(thisCopy.GetOption("sensitivity")) && Math.abs(evt.clientY - Number(thisCopy._initialMouseY)) <= parseInt(thisCopy.GetOption("sensitivity"))) {
            if (thisCopy.Status == DragState.MOUSEDOWN) {
                if (SPDragDropManager.DragDropMode == DragDropMode.IE8 || SPDragDropManager.DragDropMode == DragDropMode.IE9) {
                    releaseMouseEvent();
                    thisCopy._mousedownObj = null;
                }
                thisCopy.Status = DragState.ENALBED;
                SPDragDropManager.DragStartPos = undefined;
                SPDragDropManager.ObjectDragged = null;
            }
        }
    }
    function onMouseMove(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        if (Math.abs(evt.clientX - Number(thisCopy._initialMouseX)) > parseInt(thisCopy.GetOption("sensitivity")) || Math.abs(evt.clientY - Number(thisCopy._initialMouseY)) > parseInt(thisCopy.GetOption("sensitivity"))) {
            var msObj = thisCopy._mousedownObj;

            if (!fIsNullOrUndefined(msObj)) {
                loginfo("Calling dragDrop() in IE");
                var result = msObj.dragDrop();
            }
            thisCopy.Status = DragState.DETECTED;
        }
    }
    function releaseMouseEvent() {
    ULSAZP:
        ;
        removeListener(document, 'mousemove', onMouseMove);
    }
    function onDragStart(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, this, 'onDragStart');
        loginfo('dragStart x:' + evt.clientX + ' y:' + evt.clientY);
        var pos = new SPPosition(-1, -1);

        pos.X = evt.clientX;
        pos.Y = evt.clientY;
        SPDragDropManager.DragStartPos = pos;
        thisCopy.Status = DragState.STARTED;
        addClass(thisCopy.GetElement(), 'ms-draggable-dragging');
        (thisCopy.GetElement()).setAttribute("aria-grabbed", "true");
        SPDragDropManager.ObjectDragged = thisCopy;
        getDragImage();
        if (!fIsNullOrUndefined(thisCopy._dragImage)) {
            if (evt.dataTransfer && typeof evt.dataTransfer.setDragImage == 'function') {
                var img = thisCopy._dragImage;

                img.style.display = "";
                var offPos = thisCopy.GetOption("cursorAt");
                var offsetX = 0;
                var offsetY = 0;

                if (!fIsNullOrUndefined(offPos)) {
                    if (!fIsNullOrUndefined(offPos.X))
                        offsetX = 0 - offPos.X;
                    if (!fIsNullOrUndefined(offPos.Y))
                        offsetY = 0 - offPos.Y;
                }
                evt.dataTransfer.setDragImage(img, offsetX, offsetY);
            }
            else {
                var srcElement = thisCopy.GetElement();

                addClass(srcElement, "ms-draggable-hidden");
                if (Boolean(srcElement))
                    srcElement.style.display = "none";
            }
        }
        fireEvent('spDragStart', evt);
        _droppables = getDroppables();
        if (!fIsNullOrUndefined(_droppables)) {
            for (var i = 0; i < _droppables.length; i++) {
                var droppable = _droppables[i];

                droppable.Activate();
            }
        }
        if (evt.dataTransfer) {
            if (SPDragDropManager.DragDropMode == DragDropMode.HTML5) {
                evt.dataTransfer.setData('text/plain', 'Drag');
                loginfo('set Data HTML5');
            }
            else {
                evt.dataTransfer.setData('TEXT', 'Drag');
                loginfo('set Data IE');
            }
            evt.dataTransfer.effectAllowed = 'all';
            evt.dataTransfer.dropEffect = 'copy';
        }
    }
    function onDrag(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        if (thisCopy.Status == DragState.STARTED) {
            var srcElement = thisCopy.GetElement();

            if (Boolean(srcElement) && hasClass(srcElement, "ms-draggable-hidden", true)) {
                srcElement.style.display = "";
                removeClass(thisCopy.GetElement(), "ms-draggable-hidden");
            }
            displayDragImage(evt);
            fireEvent('spDrag', evt);
        }
    }
    function onDragEnd(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, this, 'onDragEnd');
        if (SPDragDropManager.DragDropMode == DragDropMode.IE8 || SPDragDropManager.DragDropMode == DragDropMode.IE9) {
            releaseMouseEvent();
            thisCopy._mousedownObj = null;
        }
        fireEvent('spDragEnd', evt);
        if (!fIsNullOrUndefined(_droppables)) {
            for (var i = 0; i < _droppables.length; i++) {
                var droppable = _droppables[i];

                droppable.Deactivate();
            }
        }
        removeClass(thisCopy.GetElement(), 'ms-draggable-dragging');
        (thisCopy.GetElement()).removeAttribute("aria-grabbed");
        thisCopy.Status = DragState.ENALBED;
        SPDragDropManager.DragStartPos = undefined;
        SPDragDropManager.ObjectDragged = null;
        SPDragDropManager.ObjectEntered = null;
        resetDragImage();
    }
    function fireEvent(evtType, rawEvent) {
        if (evtType in _eventTypes) {
            var spEvt = new SPDragEvent(rawEvent, thisCopy, null);

            _baseObj.FireEvent(evtType, spEvt);
        }
    }
    function getDroppables() {
        var allDroppables = SPDragDropManager.Droppables;

        if (fIsNullOrUndefined(allDroppables))
            return undefined;
        var droppables = new Array(0);

        for (var _elem in allDroppables) {
            var droppable = allDroppables[_elem];
            var dpKeys = droppable.GetLinkKeys();
            var thisKeys = thisCopy.GetLinkKeys();
            var match = false;

            if (!fIsNullOrUndefined(dpKeys) && !fIsNullOrUndefined(thisKeys)) {
                for (var key in thisKeys) {
                    if (key in dpKeys) {
                        match = true;
                        break;
                    }
                }
            }
            if (match)
                droppables.push(droppable);
        }
        return droppables;
    }
    var dragImageID = "ms-dragclone-image-div";

    function getDragImage() {
    ULSAZP:
        ;
        var diOption = thisCopy.GetOption("dragImage");

        if (fIsNullOrUndefined(diOption) || diOption == "default") {
            thisCopy._dragImage = null;
            return;
        }
        var diDiv = thisCopy._dragImage;
        var srcElement = thisCopy.GetElement();

        if (diOption == "move") {
            diDiv = null;
        }
        else if (diOption == "clone") {
            if (SPDragDropManager.DragDropMode == DragDropMode.HTML5)
                return;
            else {
                if (fIsNullOrUndefined(diDiv)) {
                    diDiv = document.createElement("DIV");
                    diDiv.id = dragImageID;
                    diDiv.className = g_spDragImageClass;
                    diDiv.style.position = "absolute";
                    diDiv.style.height = String(srcElement.clientHeight) + "px";
                    diDiv.style.width = String(srcElement.clientWidth) + "px";
                    var cln = srcElement.cloneNode(true);

                    diDiv.appendChild(cln);
                    document.body.appendChild(diDiv);
                }
            }
        }
        else if (typeof diOption == 'function') {
            diDiv = diOption(thisCopy.GetElement());
        }
        if (!fIsNullOrUndefined(diDiv)) {
            diDiv.style.display = "none";
            thisCopy._dragImage = diDiv;
        }
    }
    function displayDragImage(evt) {
        var diDiv = thisCopy._dragImage;

        if (fIsNullOrUndefined(diDiv))
            return;
        var offPos = thisCopy.GetOption("cursorAt");
        var offsetX = 0;
        var offsetY = 0;

        if (offPos) {
            if (offPos.X)
                offsetX = offPos.X;
            if (offPos.Y)
                offsetY = offPos.Y;
        }
        if (typeof evt.dataTransfer.setDragImage == 'function') {
            return;
        }
        else {
            diDiv.style.display = "";
            diDiv.style.position = "absolute";
            var evtX = evt.clientX;
            var evtY = evt.clientY;

            diDiv.style.left = String(evtX + offsetX) + "px";
            diDiv.style.top = String(evtY + offsetY) + "px";
        }
    }
    function resetDragImage() {
    ULSAZP:
        ;
        var img = thisCopy._dragImage;

        if (!fIsNullOrUndefined(img)) {
            var diOption = thisCopy.GetOption("dragImage");

            if (diOption != "move") {
                img.style.display = '';
                document.body.removeChild(img);
            }
            thisCopy._dragImage = null;
        }
    }
    this.Status = DragState.INACTIVE;
    this.GetBaseObject = function() {
    ULSAZP:
        ;
        return _baseObj;
    };
    this.GetElement = function() {
    ULSAZP:
        ;
        return _baseObj.GetElement();
    };
    this.AddLinkKey = function(linkKey) {
    ULSAZP:
        ;
        _baseObj.AddLinkKey(linkKey);
    };
    this.RemoveLinkKey = function(linkKey) {
    ULSAZP:
        ;
        _baseObj.RemoveLinkKey(linkKey);
    };
    this.GetLinkKeys = function() {
    ULSAZP:
        ;
        return _baseObj.GetLinkKeys();
    };
    this.GetOption = function(optionName) {
        return _baseObj.GetOption(optionName);
    };
    this.SetOption = function(optionName, value) {
        _baseObj.SetOption(optionName, value);
    };
    this.SetOptions = function(options) {
        _baseObj.SetOptions(options);
    };
    this.Disable = function() {
    ULSAZP:
        ;
        _baseObj.Disable();
    };
    this.Enable = function() {
    ULSAZP:
        ;
        _baseObj.Enable();
    };
    this.Enabled = function() {
    ULSAZP:
        ;
        return _baseObj.Enabled();
    };
    this.Remove = function() {
    ULSAZP:
        ;
        _baseObj.Remove();
    };
    this.AddEventListener = function(eventType, listenerFunc) {
        _baseObj.AddEventListener(eventType, listenerFunc);
    };
    this.Activate = function() {
    ULSAZP:
        ;
        var srcElem = this.GetElement();

        if (fIsNullOrUndefined(srcElem))
            return false;
        enableDrag(srcElem);
        this.Status = DragState.ENALBED;
        return true;
    };
    this.Deactivate = function() {
    ULSAZP:
        ;
        var srcElem = this.GetElement();

        if (fIsNullOrUndefined(srcElem))
            return;
        disableDrag(srcElem);
        this.Status = DragState.INACTIVE;
        loginfo('Draggable deactivated');
    };
    this.SetData = function(dataKey, value) {
        if (fIsNullOrUndefined(_dataObjects))
            _dataObjects = new Array(0);
        _dataObjects[dataKey] = value;
    };
    this.AddData = function(key, value) {
        if (fIsNullOrUndefined(_dataObjects) || fIsNullOrUndefined(_dataObjects[key])) {
            this.SetData(key, value);
        }
        else {
            var data = _dataObjects[key];

            data.push(value);
        }
    };
    this.GetData = function(key) {
        if (!fIsNullOrUndefined(_dataObjects))
            return _dataObjects[key];
        else
            return null;
    };
    this.ClearData = function(key) {
        if (fIsNullOrUndefined(key))
            _dataObjects = null;
        else {
            _dataObjects[key] = null;
        }
    };
    this.GetDragImage = function() {
    ULSAZP:
        ;
        return _dragImage;
    };
}
function SPDroppable(element, linkKeys) {
    var thisCopy = this;
    var _droppableOptions = {
        "activeClass": "",
        "avoidClass": "",
        "bubble": "",
        "hoverClass": ""
    };
    var _eventTypes = {
        "spDragEnter": "",
        "spDragOver": "",
        "spDragLeave": "",
        "spDrop": ""
    };
    var _baseObj = new SPDragDropBase(element, linkKeys, _droppableOptions, _eventTypes);

    function onDragEnter(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, this, 'dragenter');
        SPDragDropManager.ObjectEntered = SPDragDropManager.GetDroppable(thisCopy.GetElement());
        var origDropEle = thisCopy.GetElement();
        var dropSurf = document.getElementById(g_dropSurfaceId);

        if (fIsNullOrUndefined(dropSurf)) {
            dropSurf = document.createElement('DIV');
            dropSurf.id = g_dropSurfaceId;
            document.body.appendChild(dropSurf);
        }
        if (!fIsNullOrUndefined(dropSurf)) {
            dropSurf.className = g_dropSurfaceClass;
            dropSurf.style.display = '';
            var width = origDropEle.clientWidth == 0 ? origDropEle.offsetWidth : origDropEle.clientWidth;
            var height = origDropEle.clientHeight == 0 ? origDropEle.offsetHeight : origDropEle.clientHeight;

            dropSurf.style.width = String(width) + 'px';
            dropSurf.style.height = String(height) + 'px';
            var origLocation = Sys.UI.DomElement.getLocation(origDropEle);

            dropSurf.style.left = String(origLocation.x) + 'px';
            dropSurf.style.top = String(origLocation.y) + 'px';
            if (fIsNullOrUndefined(g_dropSurface)) {
                addListener(dropSurf, "dragenter", onDropSurfDragEnter, false, true);
                addListener(dropSurf, "dragover", onDropSurfDragOver, false, true);
                addListener(dropSurf, "dragleave", onDropSurfDragLeave, false, true);
                addListener(dropSurf, "drop", onDropSurfDrop, false, true);
                g_dropSurface = dropSurf;
            }
        }
        cancelDefault(evt);
        return false;
    }
    function onDropSurfDragEnter(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, this, 'dropSurfDragEnter');
        cancelDefault(evt);
        var droppable = SPDragDropManager.ObjectEntered;

        if (evt.dataTransfer) {
            evt.dataTransfer.effectAllowed = "all";
        }
        if (fIsNullOrUndefined(droppable))
            return false;
        var targetElem = GetTarget(evt);

        if (!fIsNullOrUndefined(targetElem)) {
            var hoverClass = droppable.GetOption("hoverClass");

            if (!fIsNullOrUndefined(hoverClass))
                addClass(targetElem, hoverClass);
        }
        fireEvent('spDragEnter', evt, SPDragDropManager.ObjectEntered);
        g_dropSurfaceBase = droppable.GetElement();
        return false;
    }
    function onDropSurfDragOver(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        if (evt.dataTransfer) {
            evt.dataTransfer.effectAllowed = "all";
        }
        cancelDefault(evt);
        fireEvent('spDragOver', evt, SPDragDropManager.ObjectEntered);
        return false;
    }
    function onDropSurfDragLeave(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        logeventinfo(evt, this, 'dropSurfdragleave');
        var droppable = SPDragDropManager.ObjectEntered;

        if (fIsNullOrUndefined(droppable))
            return false;
        var objEnteredElem = SPDragDropManager.ObjectEntered.GetElement();

        if (!fIsNullOrUndefined(objEnteredElem) && objEnteredElem != g_dropSurfaceBase)
            return false;
        SPDragDropManager.ObjectEntered = null;
        g_dropSurfaceBase = null;
        var targetElem = GetTarget(evt);

        if (!fIsNullOrUndefined(targetElem)) {
            var hoverClass = droppable.GetOption("hoverClass");

            if (!fIsNullOrUndefined(hoverClass))
                removeClass(targetElem, hoverClass);
        }
        if (!fIsNullOrUndefined(g_dropSurface))
            g_dropSurface.style.display = "none";
        cancelDefault(evt);
        fireEvent('spDragLeave', evt, SPDragDropManager.ObjectEntered);
        return false;
    }
    function onDropSurfDrop(evt) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        var droppable = SPDragDropManager.ObjectEntered;

        if (fIsNullOrUndefined(droppable))
            return;
        SPDragDropManager.ObjectDropped = droppable;
        SPDragDropManager.ObjectEntered = null;
        g_dropSurfaceBase = null;
        logeventinfo(evt, this, 'onDropSurfDrop');
        var fBubble = droppable.GetOption('bubble');

        if (fIsNullOrUndefined(fBubble) || !fBubble)
            cancelDefault(evt);
        var targetElem = GetTarget(evt);
        var hoverClass = droppable.GetOption("hoverClass");

        if (!fIsNullOrUndefined(hoverClass))
            removeClass(targetElem, hoverClass);
        if (!fIsNullOrUndefined(g_dropSurface))
            g_dropSurface.style.display = "none";
        thisCopy = SPDragDropManager.ObjectDropped;
        fireEvent('spDrop', evt, SPDragDropManager.ObjectDropped);
    }
    function fireEvent(evtType, evt, droppable) {
        if (evtType in _eventTypes) {
            var spEvt = new SPDragEvent(evt, SPDragDropManager.ObjectDragged, droppable);

            (thisCopy.GetBaseObject()).FireEvent(evtType, spEvt);
        }
    }
    function enableDrop() {
    ULSAZP:
        ;
        var elem = thisCopy.GetElement();

        addListener(elem, 'dragenter', onDragEnter);
        addListener(elem, 'dragover', cancelDefault);
    }
    function disableDrop() {
    ULSAZP:
        ;
        var elem = thisCopy.GetElement();

        removeListener(elem, 'dragenter', onDragEnter);
        removeListener(elem, 'dragover', cancelDefault);
    }
    this.GetBaseObject = function() {
    ULSAZP:
        ;
        return _baseObj;
    };
    this.GetElement = function() {
    ULSAZP:
        ;
        return _baseObj.GetElement();
    };
    this.AddLinkKey = function(linkKey) {
    ULSAZP:
        ;
        _baseObj.AddLinkKey(linkKey);
    };
    this.RemoveLinkKey = function(linkKey) {
    ULSAZP:
        ;
        _baseObj.RemoveLinkKey(linkKey);
    };
    this.GetLinkKeys = function() {
    ULSAZP:
        ;
        return _baseObj.GetLinkKeys();
    };
    this.GetOption = function(optionName) {
        return _baseObj.GetOption(optionName);
    };
    this.SetOption = function(optionName, value) {
        _baseObj.SetOption(optionName, value);
    };
    this.SetOptions = function(options) {
        _baseObj.SetOptions(options);
    };
    this.Disable = function() {
    ULSAZP:
        ;
        _baseObj.Disable();
    };
    this.Enable = function() {
    ULSAZP:
        ;
        _baseObj.Enable();
    };
    this.Enabled = function() {
    ULSAZP:
        ;
        return _baseObj.Enabled();
    };
    this.Remove = function() {
    ULSAZP:
        ;
        _baseObj.Remove();
    };
    this.AddEventListener = function(eventType, listenerFunc) {
        _baseObj.AddEventListener(eventType, listenerFunc);
    };
    this.Activate = function() {
    ULSAZP:
        ;
        enableDrop();
        var activeClass = this.GetOption("activeClass");

        if (!fIsNullOrUndefined(activeClass)) {
            addClass(this.GetElement(), activeClass);
        }
    };
    this.Deactivate = function() {
    ULSAZP:
        ;
        disableDrop();
        var activeClass = this.GetOption("activeClass");

        if (!fIsNullOrUndefined(activeClass)) {
            removeClass(this.GetElement(), activeClass);
        }
    };
}
function SPDragEvent(eventIn, draggable, droppable) {
    this.rawEvent = eventIn;
    this.draggable = draggable;
    this.droppable = droppable;
    this.dragImage = undefined;
    if (!fIsNullOrUndefined(draggable))
        this.dragImage = draggable.GetDragImage();
    this.position = {};
    this.offset = {};
    this.SetData = function(dataKey, spData) {
        if (!fIsNullOrUndefined(this.draggable))
            draggable.SetData(dataKey, spData);
    };
    this.GetData = function(dataKey) {
        if (!fIsNullOrUndefined(this.draggable))
            return draggable.GetData(dataKey);
        else
            return null;
    };
    this.ClearData = function(dataKey) {
        if (!fIsNullOrUndefined(this.draggable))
            draggable.ClearData(dataKey);
    };
    if (fIsNullOrUndefined(this.position))
        calculatePosition(event);
    if (fIsNullOrUndefined(this.offset))
        calculateOffset(event);
    var thisCopy = this;

    function calculatePosition(evt) {
        if (fIsNullOrUndefined(evt))
            return;
    }
    function calculateOffset(evt) {
        if (fIsNullOrUndefined(evt))
            return;
    }
}
function SPPosition(x, y) {
    this.X = x;
    this.Y = y;
}
var SPProgressMeter;

function GetDragDropMode() {
ULSAZP:
    ;
    var ddMode = DragDropMode.NOTSUPPORTED;

    if (browseris.ie && !browseris.mac) {
        if (browseris.ie8standard)
            ddMode = DragDropMode.IE8;
        else if (browseris.ie9standardUp)
            ddMode = DragDropMode.IE9;
    }
    else if (browseris.firefox && browseris.firefox36up)
        ddMode = DragDropMode.HTML5;
    else if (browseris.chrome && browseris.chrome7up)
        ddMode = DragDropMode.HTML5;
    return ddMode;
}
function addListener(obj, evtName, handler, useCapture, replace) {
    var capture = false;

    if (!fIsNullOrUndefined(useCapture))
        capture = useCapture;
    if (replace)
        removeListener(obj, evtName, handler);
    if (obj.addEventListener)
        obj.addEventListener(evtName, handler, capture);
    else if (obj.attachEvent)
        obj.attachEvent('on' + evtName, handler);
}
function removeListener(obj, evtName, handler) {
    if (obj.removeEventListener)
        obj.removeEventListener(evtName, handler);
    else if (obj.detachEvent)
        obj.detachEvent('on' + evtName, handler);
}
function GetTarget(evt) {
    if (!evt)
        evt = window.event;
    if (evt.target)
        return evt.target;
    if (evt.srcElement)
        return evt.srcElement;
    return null;
}
function hasClass(element, classIn, ignoreCase) {
    if (fIsNullOrUndefined(element))
        return false;
    var classes = element.className;

    if (!fIsNullOrUndefined(classes)) {
        if (ignoreCase) {
            return (classes.toLowerCase()).indexOf(classIn.toLowerCase()) > -1;
        }
        else {
            return classes.indexOf(classIn) > -1;
        }
    }
    else
        return false;
}
function addClass(elem, className) {
    if (fIsNullOrUndefined(elem))
        return;
    if (!fIsNullOrUndefined(elem.className)) {
        if (elem.className.indexOf(className) == -1)
            elem.className = elem.className + ' ' + className;
    }
    else {
        elem.className = className;
    }
}
function removeClass(elem, className) {
    if (fIsNullOrUndefined(elem))
        return;
    if (elem.className == className)
        elem.className = '';
    var oldClassName = elem.className;
    var searchName = ' ' + className;

    if (oldClassName.indexOf(searchName) != -1)
        elem.className = oldClassName.replace(searchName, '');
    else if (oldClassName.indexOf(className) != -1)
        elem.className = oldClassName.replace(className, '');
}
function sortNumber(a, b) {
ULSAZP:
    ;
    return a - b;
}
function ShowElement(element) {
    if (!fIsNullOrUndefined(element))
        element.style.display = "";
}
function HideElement(element) {
    if (!fIsNullOrUndefined(element))
        element.style.display = "none";
}
var g_dragdroplog;

function logeventinfo(evt, thisIn, eventName) {
    if (!evt)
        evt = window.event;
    if (!evt) {
        loginfo(eventName + 'evt is null');
        return;
    }
    var msg = [];

    msg.push(eventName);
    if (thisIn)
        msg.push('---this ' + thisIn.tagName + ',' + thisIn.id);
    if (evt.target)
        msg.push(' ---target ' + evt.target.tagName + ',' + evt.target.id);
    if (evt.srcElement)
        msg.push(' ---srcElement ' + evt.srcElement.tagName + ',' + evt.srcElement.id);
    if (evt.fromElement)
        msg.push(' ---fromElement ' + evt.fromElement.tagName + ',' + evt.fromElement.id);
    if (evt.relatedTarget)
        msg.push(' ---relatedTarget ' + evt.relatedTarget.tagName + ',' + evt.relatedTarget.id);
    if (evt.toElement)
        msg.push(' ---toElement ' + evt.toElement.tagName + ',' + evt.toElement.id);
    loginfo(msg.join('\r\n'));
}
function loginfo(msg) {
    g_dragdroplog.push("DragDrop(" + displayDateTime(new Date()) + "): " + msg);
}
function displayDateTime(date) {
    return String(date.getMonth()) + "/" + String(date.getDate()) + "/" + String(date.getFullYear()) + " " + String(date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + String(date.getMinutes()) : String(date.getMinutes())) + ":" + String(date.getSeconds());
}
function ShowErrorDialogCore(dialogTitle, errorMsg, callback, fHtmlMsg) {
    var innerHtmlStr;

    if (Boolean(fHtmlMsg)) {
        innerHtmlStr = errorMsg;
    }
    else {
        innerHtmlStr = "<div>" + errorMsg + "</div>";
    }
    innerHtmlStr = innerHtmlStr + "<div class='ms-core-form-bottomButtonBox'><button id='js-dnd-OKBtnDismissDlg' onclick='DismissErrDlg(this)'>" + Strings.STS.L_CloseButtonCaption + "</button></div>";
    var divElem = document.createElement("DIV");

    divElem.innerHTML = innerHtmlStr;
    var dopt = {
        html: divElem,
        title: dialogTitle,
        dialogReturnValueCallback: callback
    };
    var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
    var okButton = document.getElementById('js-dnd-OKBtnDismissDlg');

    if (Boolean(okButton))
        okButton.focus();
}
function FullRefresh(curCtx) {
    if (!fIsNullOrUndefined(curCtx)) {
        var evt = new Object();

        evt.currentCtx = curCtx;
        evt.csrAjaxRefresh = true;
        if (typeof AJAXRefreshView == "function") {
            AJAXRefreshView(evt, SP.UI.DialogResult.OK);
            return true;
        }
    }
    return false;
}
var g_fileErrorDetailHTML;

function RenderFileErrorDlgHtml(errorFiles) {
    if (fIsNullOrUndefined(errorFiles) || errorFiles.length < 1)
        return null;
    var dlgHtml = [];
    var fileErrorList = [];

    for (var i = 0; i < errorFiles.length; i++) {
        var file = errorFiles[i];
        var fullName = Boolean(file.relativeFolder) ? unescapeProperlyWp(file.relativeFolder) + unescapeProperlyWp(file.fileName) : unescapeProperlyWp(file.fileName);
        var errText = file.statusText;

        if (!Boolean(errText) || errText == "") {
            errText = Strings.STS.L_DragDropUploadGenericError;
        }
        var errInfoStr = String.format(g_fileErrorDetailHTML, fullName, unescapeProperlyWp(errText));

        fileErrorList.push(errInfoStr);
    }
    dlgHtml.push(fileErrorList.join(''));
    return dlgHtml.join('');
}
function createProgressElement(srcElement, fShow) {
    var progElem = createCloneElement(srcElement, srcElement.id + '-progress', "ms-dnd-inprogress", fShow);

    if (Boolean(progElem)) {
        var progImg = document.createElement("IMG");

        progImg.src = "/_layouts/15/images/loadingcirclests16.gif?rev=23";
        progImg.className = "ms-dnd-inprogress-img";
        progElem.appendChild(progImg);
        var containerHeight = progElem.clientHeight == 0 ? progElem.offsetHeight : progElem.clientHeight;
        var imgHeight = progImg.clientHeight == 0 ? progImg.offsetHeight : progImg.clientHeight;

        progImg.style.top = String((containerHeight - imgHeight) / 2) + 'px';
    }
    return progElem;
}
function createCloneElement(srcElement, id, cssClass, fShow) {
    if (!Boolean(srcElement))
        return null;
    var newElem = document.getElementById(id);

    if (Boolean(newElem)) {
        return newElem;
    }
    newElem = document.createElement('DIV');
    if (Boolean(newElem)) {
        newElem.id = id;
        newElem.className = cssClass;
        document.body.appendChild(newElem);
        var width = srcElement.clientWidth == 0 ? srcElement.offsetWidth : srcElement.clientWidth;
        var height = srcElement.clientHeight == 0 ? srcElement.offsetHeight : srcElement.clientHeight;

        newElem.style.width = String(width) + 'px';
        newElem.style.height = String(height) + 'px';
        var srcLocation = Sys.UI.DomElement.getLocation(srcElement);

        newElem.style.left = String(srcLocation.x) + 'px';
        newElem.style.top = String(srcLocation.y) + 'px';
        if (fShow) {
            newElem.style.display = "";
        }
        else {
            newElem.style.display = "none";
        }
    }
    return newElem;
}
var docIconClass;
var titleClass;
var g_context;
var g_dndDocItemFolderKey;
var g_dndDocItemQLLib;
var g_dndListItemQL;

function SetDocItemDragDrop(curCtx) {
    if (SPDragDropManager.DragDropMode == DragDropMode.NOTSUPPORTED) {
        return;
    }
    var docTab = GetWPQTable(curCtx);

    if (fIsNullOrUndefined(docTab))
        return;
    var folderRows = new Array(0);
    var linkKeys = {};

    if (Boolean(curCtx.ListSchema) && curCtx.ListSchema.IsDocLib == "1" && curCtx.listTemplate != 119) {
        linkKeys[g_dndDocItemFolderKey] = "";
        linkKeys[g_dndDocItemQLLib] = "";
    }
    else {
        linkKeys[g_dndListItemQL] = "";
    }
    var hasDraggable = false;
    var rowCount = docTab.rows.length;

    for (var i = 0; i < rowCount; i++) {
        var row = docTab.rows[i];
        var iidStr = row.getAttribute("iid");

        if (fIsNullOrUndefined(iidStr))
            continue;
        var iidObj = GetIIDObject(iidStr);

        if (iidObj.fsFolder) {
            var fItem = GetListItemByID(curCtx, iidObj.itemId);

            if (!fIsNullOrUndefined(fItem) && fItem.HTML_x0020_File_x0020_Type != "OneNote.Notebook")
                folderRows.push(row);
        }
        else {
            var colCount = row.cells.length;

            for (var j = 0; j < colCount; j++) {
                var cell = row.cells[j];
                var iconElem = cell.firstChild;

                if (!fIsNullOrUndefined(iconElem) && iconElem.nodeType == 1) {
                    if (hasClass(cell, docIconClass, true) && !fIsNullOrUndefined(iconElem)) {
                        var draggableIcon = SPDragDropManager.GetDraggable(iconElem);

                        if (fIsNullOrUndefined(draggableIcon)) {
                            draggableIcon = SPDragDropManager.InitDraggable(iconElem, linkKeys);
                            if (!fIsNullOrUndefined(draggableIcon)) {
                                SetDocItemDragOption(draggableIcon);
                                hasDraggable = true;
                            }
                        }
                        else
                            hasDraggable = true;
                    }
                }
                if (hasClass(cell, titleClass, true)) {
                    var titleChildren = cell.childNodes;
                    var titleChild;

                    for (var _id = 0; _id < titleChildren.length; _id++) {
                        var elem = titleChildren[_id];

                        if (!fIsNullOrUndefined(elem) && hasClass(elem, 'ms-vb', true) && hasClass(elem, 'itx', true)) {
                            titleChild = elem;
                            break;
                        }
                    }
                    if (!fIsNullOrUndefined(titleChild)) {
                        var titleLink = titleChild.firstChild;

                        if (!fIsNullOrUndefined(titleLink) && titleLink.nodeName == 'A') {
                            var draggableTitle = SPDragDropManager.GetDraggable(titleLink);

                            if (fIsNullOrUndefined(draggableTitle)) {
                                draggableTitle = SPDragDropManager.InitDraggable(titleLink, linkKeys);
                                if (!fIsNullOrUndefined(draggableTitle)) {
                                    SetDocItemDragOption(draggableTitle);
                                    hasDraggable = true;
                                }
                            }
                            else
                                hasDraggable = true;
                        }
                    }
                }
            }
        }
    }
    if (hasDraggable) {
        var dpkeys = {};

        dpkeys[g_dndDocItemFolderKey] = "";
        for (var fi = 0; fi < folderRows.length; fi++) {
            var fd = folderRows[fi];
            var fDroppable = SPDragDropManager.InitDroppable(fd, dpkeys);

            if (!fIsNullOrUndefined(fDroppable)) {
                SetFolderItemDropOption(fDroppable);
            }
        }
    }
}
function SetDocItemDragOption(draggable) {
    if (fIsNullOrUndefined(draggable))
        return;
    draggable.SetOption("dragImage", createDocItemDragImage);
    var offset = new SPPosition(20, 20);

    draggable.SetOption("cursorAt", offset);
    draggable.SetOption("sensitivity", 5);
    draggable.AddEventListener('spDragStart', docItemDragStartHandler);
    draggable.AddEventListener('spDragStart', docItemDragStartForDragOut);
}
function SetFolderItemDropOption(droppable) {
    if (fIsNullOrUndefined(droppable))
        return;
    droppable.SetOption('hoverClass', 'ms-droppable-folder-hover');
    droppable.SetOption('activeClass', 'ms-droppable-folder-active');
    droppable.AddEventListener('spDragEnter', docFolderDragEnterHandler);
    droppable.AddEventListener('spDragOver', docFolderDragOverHandler);
    droppable.AddEventListener('spDrop', docFolderDropHandler);
}
var g_docItemDragImageID;
var g_docItemDragImageInnerHTML;

function createDocItemDragImage(element) {
    var di = null;

    if ("undefined" == typeof g_QuickLaunchMenu || null == g_QuickLaunchMenu) {
        di = document.getElementById(g_docItemDragImageID);
        if (fIsNullOrUndefined(di)) {
            di = document.createElement("DIV");
            di.id = g_docItemDragImageID;
            di.className = g_spDragImageClass;
            di.innerHTML = g_docItemDragImageInnerHTML;
        }
    }
    else {
        di = element.cloneNode(true);
    }
    document.body.appendChild(di);
    return di;
}
function SPDocItemDragData(itemId, iid, title, fileName, fileUrl, overwrite, statusText) {
    this.itemId = itemId;
    this.iid = iid;
    this.title = title;
    this.fileName = fileName;
    this.fileUrl = fileUrl;
    if (fIsNullOrUndefined(overwrite))
        this.overwrite = false;
    else
        this.overwrite = overwrite;
    this.statusText = statusText;
}
var g_docItemDataKey;
var g_outWindowBefore;

function docItemDragStartHandler(spEvt) {
    logeventinfo(spEvt.rawEvent, this, 'spDragStart');
    var curCtx = CtxFromElement(GetEventSrcElement(spEvt.rawEvent));

    if (fIsNullOrUndefined(curCtx))
        return;
    var dragData = [];
    var target = GetTarget(spEvt.rawEvent);

    if (fIsNullOrUndefined(target))
        return;
    var tgIID = GetParentIID(target);

    if (fIsNullOrUndefined(tgIID))
        return;
    var selection = curCtx.dictSel;
    var selectedCount = curCtx.CurrentSelectedItems;
    var singleSelect = false;
    var singleSelection = null;

    if (fIsNullOrUndefined(selection) || selectedCount <= 0 || typeof g_QuickLaunchMenu != 'undefined' && null != g_QuickLaunchMenu) {
        singleSelect = true;
    }
    else {
        if (!fIsNullOrUndefined(tgIID)) {
            singleSelection = selection[tgIID];
            if (fIsNullOrUndefined(singleSelection)) {
                singleSelect = true;
            }
            else {
                singleSelect = false;
            }
        }
    }
    if (singleSelect) {
        var iidObj = GetIIDObject(tgIID);

        if (!fIsNullOrUndefined(iidObj) && !iidObj.fsFolder) {
            var curItem = GetListItemByID(curCtx, iidObj.itemId);

            if (!fIsNullOrUndefined(curItem)) {
                var itemUrl = curItem.FileRef;

                if (curCtx.ListSchema && curCtx.ListSchema.IsDocLib != "1") {
                    itemUrl = target.href;
                }
                var spdd = new SPDocItemDragData(curItem.ID, tgIID, curItem.Title, curItem.FileLeafRef, itemUrl, false, "");

                dragData.push(spdd);
            }
        }
    }
    else {
        for (var iid in selection) {
            var sel = selection[iid];

            if (sel.fsObjType == "0") {
                var _curItem = GetListItemByID(curCtx, sel.id);

                if (!fIsNullOrUndefined(_curItem)) {
                    var _spdd = new SPDocItemDragData(_curItem.ID, iid, _curItem.Title, _curItem.FileLeafRef, _curItem.FileRef, false, "");

                    dragData.push(_spdd);
                }
            }
        }
    }
    if (dragData.length > 0) {
        spEvt.SetData(g_docItemDataKey, dragData);
        if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
            spEvt.rawEvent.dataTransfer.effectAllowed = "all";
        }
        if (browseris.ie && typeof startDragDownload == 'function') {
            g_outWindowBefore = false;
            g_dragDownloadStarted = false;
        }
    }
}
function docItemDragStartForDragOut(spEvt) {
    loginfo('docItemDragStartForDragOut');
    var evt = spEvt.rawEvent;

    if (fIsNullOrUndefined(evt))
        return;
    if (!browseris.ie && !browseris.chrome || browseris.chrome && !evt.altKey)
        return;
    if (isDownloadWithUrlEnabled(evt)) {
        var curCtx = CtxFromElement(GetEventSrcElement(spEvt.rawEvent));

        if (fIsNullOrUndefined(curCtx))
            return;
        var target = GetTarget(spEvt.rawEvent);

        if (fIsNullOrUndefined(target))
            return;
        var tgIID = GetParentIID(target);

        if (fIsNullOrUndefined(tgIID))
            return;
        var iidObj = GetIIDObject(tgIID);

        if (fIsNullOrUndefined(iidObj))
            return;
        var curItem = GetListItemByID(curCtx, iidObj.itemId);

        if (!fIsNullOrUndefined(curItem)) {
            var downloadUrl = 'Sharepoint:' + curItem.FileLeafRef + ':' + getHostUrl(curCtx.HttpRoot) + curItem.FileRef;

            evt.dataTransfer.setData('DownloadURL', downloadUrl);
            loginfo('docItemDragStartForDragOut: set downloadUrl=' + downloadUrl);
        }
    }
    else if (SPDragDropManager.DragDropMode == DragDropMode.IE8 || SPDragDropManager.DragDropMode == DragDropMode.IE9) {
        if (typeof detectWindowLeave == 'function') {
            var draggable = spEvt.draggable;

            draggable.AddEventListener('spDrag', detectWindowLeave);
            loginfo('docItemDragStartForDragOut, download with ActiveX in ie, attached spDrag');
        }
    }
}
function isDownloadWithUrlEnabled(evt) {
    return SPDragDropManager.DragDropMode == DragDropMode.HTML5 && evt.dataTransfer && typeof evt.dataTransfer.constructor == 'function' && evt.dataTransfer.constructor.name == 'Clipboard' && evt.dataTransfer.setData('DownloadURL', 'Test');
}
var g_dragDownloadStarted;

function detectWindowLeave(spEvt) {
    var e = spEvt.rawEvent;

    if (Boolean(e) && (!browseris.ie && !browseris.chrome || browseris.chrome && !e.altKey)) {
        return;
    }
    var outWindowNow = false;

    if (!fIsNullOrUndefined(window.innerWidth))
        outWindowNow = Boolean(e.clientX < 0 || e.clientY < 0 || e.clientX > window.innerWidth || e.clientY > window.innerHeight);
    else if (!fIsNullOrUndefined(document.body.clientHeight))
        outWindowNow = Boolean(e.clientX < 5 || e.clientY < 5 || e.clientX > document.body.clientWidth - 5 || e.clientY > document.body.clientHeight - 5);
    if (outWindowNow && !g_outWindowBefore) {
        var dragData = spEvt.GetData(g_docItemDataKey);

        if (!g_dragDownloadStarted) {
            var draggable = SPDragDropManager.ObjectDragged;

            if (!fIsNullOrUndefined(draggable)) {
                var dgElem = draggable.GetElement();

                if (!fIsNullOrUndefined(dgElem)) {
                    var curCtx = CtxFromElement(dgElem);

                    if (!fIsNullOrUndefined(curCtx)) {
                        startDragDownload(curCtx, dragData);
                        g_dragDownloadStarted = true;
                    }
                }
            }
        }
    }
    else if (!outWindowNow && g_outWindowBefore) { }
}
function docFolderDragEnterHandler(spEvt) {
    if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
        spEvt.rawEvent.dataTransfer.dropEffect = "move";
    }
}
function docFolderDragOverHandler(spEvt) {
    if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
        spEvt.rawEvent.dataTransfer.dropEffect = "move";
    }
}
function docFolderDropHandler(spEvt) {
    var droppable = spEvt.droppable;
    var dragData = spEvt.GetData(g_docItemDataKey);

    if (fIsNullOrUndefined(droppable) || fIsNullOrUndefined(dragData)) {
        return;
    }
    var fdRow = droppable.GetElement();

    if (fIsNullOrUndefined(fdRow))
        return;
    var iid = fdRow.getAttribute("iid");

    if (fIsNullOrUndefined(iid))
        return;
    var iidObj = GetIIDObject(iid);

    if (fIsNullOrUndefined(iidObj))
        return;
    var curCtx = CtxFromElement(fdRow);

    if (fIsNullOrUndefined(curCtx))
        return;
    var folderItem = GetListItemByID(curCtx, iidObj.itemId);

    if (fIsNullOrUndefined(folderItem))
        return;
    var destUrl = folderItem.FileRef;
    var progElem = createProgressElement(droppable.GetElement(), true);

    CheckFileExists(dragData, destUrl, false, function(filesOut) {
    ULSAZP:
        ;
        doMoveItems(curCtx, destUrl, filesOut, droppable);
    });
}
function GetDocIcon(row) {
    if (row.tagName != 'TR')
        return null;
    var tds = row.cells;
    var iconTd;

    for (var i = 0; i < tds.length; i++) {
        var td = tds[i];

        if (hasClass(td, "ms-vb-icon", true)) {
            iconTd = td;
            break;
        }
    }
    if (!fIsNullOrUndefined(iconTd) && !fIsNullOrUndefined(iconTd.childNodes)) {
        var cn = iconTd.childNodes;

        for (var j = 0; j < cn.length; j++) {
            var elem = cn[j];

            if (elem.tagName == "A")
                return elem.firstChild;
        }
    }
    return null;
}
function doMoveItems(curCtx, destinationUrl, dragData, droppable) {
    loginfo('in MoveItems, destUrl ' + destinationUrl);
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var scopes = new Array(0);
    var spfiles = new Array(0);
    var newspfiles = new Array(0);
    var listItems = new Array(0);
    var files = dragData;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var scope = new SP.ExceptionHandlingScope(context);

        scopes.push(scope);
        var scopeDispose = scope.startScope();
        var srcFileUrl = file.fileUrl;
        var newUrl = destinationUrl + '/' + file.fileName;
        var spfile = web.getFileByServerRelativeUrl(srcFileUrl);

        spfile.retrieve('Exists');
        context.load(spfile);
        spfiles.push(spfile);
        if (file.overwrite)
            spfile.moveTo(newUrl, 1);
        else
            spfile.moveTo(newUrl, 0);
        var newspfile = web.getFileByServerRelativeUrl(newUrl);

        context.load(newspfile);
        newspfiles.push(newspfile);
        if (typeof newspfile.get_listItemAllFields == "function") {
            var newListItem = newspfile.get_listItemAllFields();

            context.load(newListItem);
            listItems.push(newListItem);
            if (typeof newListItem.resetRoleInheritance == "function") {
                newListItem.resetRoleInheritance();
            }
        }
        scopeDispose.dispose();
    }
    context.executeQueryAsync(function() {
    ULSAZP:
        ;
        var errorFiles = [];

        for (var idx = 0; idx < files.length; idx++) {
            var _file = files[idx];
            var _scope = scopes[idx];

            if (!fIsNullOrUndefined(_scope)) {
                if (typeof _scope.get_hasException == "function" && _scope.get_hasException()) {
                    if (_file.overwrite) {
                        if (typeof _scope.get_errorMessage == "function") {
                            _file.statusText = _scope.get_errorMessage();
                            errorFiles.push(_file);
                        }
                    }
                }
                else {
                    _file.statusText = "";
                }
            }
        }
        if (errorFiles.length > 0) {
            var errDlgHtml = RenderFileErrorDlgHtml(errorFiles);

            ShowErrorDialogCore(Strings.STS.L_MoveItemErrorTitle, errDlgHtml, null, true);
        }
        var progElem = document.getElementById((droppable.GetElement()).id + "-progress");

        HideElement(progElem);
        FullRefresh(curCtx);
        SPDragDropManager.ObjectDropped = null;
    }, function(sender, args) {
        var errMsg = String.format(Strings.STS.L_DragDropClientRequestError, args.get_message(), args.get_stackTrace());
        var callBack = function() {
        ULSAZP:
            ;
            SPDragDropManager.ObjectDropped = null;
        };

        ShowErrorDialogCore(Strings.STS.L_DragDropErrorTitle, errMsg, callBack);
    });
}
function IIDObject(viewCount, itemId, fsFolder) {
    this.viewCount = viewCount;
    this.itemId = itemId;
    this.fsFolder = fsFolder;
}
function GetParentIID(element) {
    var node = element;

    while (!fIsNullOrUndefined(node) && node.tagName != 'TABLE') {
        if (node.tagName == 'TR' && typeof node.attributes['iid'] != 'undefined' && node.attributes['iid'] != null) {
            var iid = node.attributes['iid'];

            return iid.value;
        }
        node = node.parentNode;
    }
    return null;
}
function GetListItemByID(inCtx, id) {
    for (var i = 0; i < inCtx.ListData.Row.length; i++) {
        if (inCtx.ListData.Row[i].ID === id) {
            return inCtx.ListData.Row[i];
        }
    }
    return null;
}
function GetWPQTable(curCtx) {
    var wpqtd = document.getElementById('script' + curCtx.wpq);
    var childNodes = wpqtd.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
        var childNode = childNodes[i];

        if (childNode.tagName == 'TABLE' && hasClass(childNode, 'ms-listviewtable', true))
            return childNode;
    }
    return null;
}
function GetIIDObject(iid) {
    if (fIsNullOrUndefined(iid))
        return null;
    var iidObj;
    var rgiid = iid.split(",");

    if (!fIsNullOrUndefined(rgiid)) {
        iidObj = new IIDObject(rgiid[0], rgiid[1], rgiid[2] == "0" ? false : true);
    }
    return iidObj;
}
function CheckFileExists(files, destinationUrl, includeFolder, onFinishCallback) {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var scopes = new Array(0);
    var spfiles = new Array(0);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (fIsNullOrUndefined(file.fileName) || !includeFolder && file.isFolder) {
            file.overwrite = false;
            continue;
        }
        var scope = new SP.ExceptionHandlingScope(context);

        scopes.push(scope);
        var scopeDispose = scope.startScope();
        var fileUrl = destinationUrl + '/' + file.fileName;

        if (file.isFolder) {
            var spfolder = web.getFolderByServerRelativeUrl(fileUrl);

            spfiles.push(spfolder);
            context.load(spfolder);
        }
        else {
            var spfile = web.getFileByServerRelativeUrl(fileUrl);

            spfile.retrieve('Exists');
            spfiles.push(spfile);
            context.load(spfile);
        }
        scopeDispose.dispose();
    }
    context.executeQueryAsync(function() {
    ULSAZP:
        ;
        var conflictFiles = new Array(0);
        var conflictIndx = 0;

        for (var idx = 0; idx < files.length; idx++) {
            var _file = files[idx];
            var _scope = scopes[idx];

            if (!fIsNullOrUndefined(_scope)) {
                if (typeof _scope.get_hasException == "function" && _scope.get_hasException()) {
                    if (typeof _scope.get_serverErrorCode == "function" && _scope.get_serverErrorCode() == -2147024894) {
                        _file.overwrite = true;
                    }
                    else {
                        _file.overwrite = false;
                        _file.statusText = _scope.get_errorMessage();
                    }
                }
                else {
                    var _spfile = spfiles[idx];

                    if (!fIsNullOrUndefined(_spfile)) {
                        if (typeof _spfile.get_exists == "function" && _spfile.get_exists() || typeof _spfile.get_folders == 'function') {
                            conflictFiles[conflictIndx] = idx;
                            conflictIndx++;
                        }
                    }
                }
            }
        }
        if (conflictFiles.length > 0) {
            ResolveConflictCommon(files, conflictFiles, 0, onFinishCallback);
        }
        else {
            if (typeof onFinishCallback == 'function') {
                onFinishCallback(files);
            }
        }
    }, function(sender, args) {
        var errMsg = "Error when validate file against server: " + args.get_message() + "\r\n" + "StackTrace:" + args.get_stackTrace();

        for (var fi = 0; fi < files.length; fi++) {
            var _file = files[fi];

            _file.overwrite = false;
            _file.statusText = errMsg;
        }
        if (typeof onFinishCallback == 'function') {
            onFinishCallback(files);
        }
    });
}
function ResolveConflictCommon(filesIn, conflictFiles, index, onFinishCallback) {
    var cfltFiles = conflictFiles;
    var files = filesIn;

    if (index >= cfltFiles.length) {
        if (typeof onFinishCallback == 'function') {
            onFinishCallback(files);
        }
        return;
    }
    if (cfltFiles[index] == -1) {
        ResolveConflictCommon(files, cfltFiles, index + 1, onFinishCallback);
        return;
    }
    var cfltFile = files[cfltFiles[index]];
    var remainingCount = cfltFiles.length - index - 1;
    var callbackFunc = function(dialogResult, returnValue) {
    ULSAZP:
        ;
        if (dialogResult == SP.UI.DialogResult.cancel) {
            return;
        }
        else {
            var overwriteOption = returnValue["overwriteOption"];
            var doRest = returnValue["doRest"];
        }
        var endFileIdx = index + 1;

        if (doRest) {
            endFileIdx = cfltFiles.length;
        }
        var isFolder = cfltFile.isFolder;

        for (var i = index; i < endFileIdx; i++) {
            if (cfltFiles[i] == -1)
                continue;
            var curFile = files[cfltFiles[i]];

            if (isFolder != curFile.isFolder)
                continue;
            if (overwriteOption == 1) {
                curFile.overwrite = false;
                curFile.statusText = Strings.STS.L_NoOverwrite;
                cfltFiles[i] = -1;
                if (curFile.isFolder) { }
            }
            else if (overwriteOption == 0) {
                curFile.overwrite = true;
                cfltFiles[i] = -1;
            }
            else
                continue;
        }
        var ni = index + 1;

        for (ni = index + 1; ni < cfltFiles.length; ni++) {
            if (cfltFiles[ni] != -1)
                break;
        }
        ResolveConflictCommon(files, cfltFiles, ni, onFinishCallback);
    };

    ShowConflictDialog(cfltFile.fileName, cfltFile.isFolder, callbackFunc, remainingCount);
}
function InitMenuItemAsDroppable(droppableItems) {
    if (fIsNullOrUndefined(droppableItems))
        return;
    var linkKeys = {};

    linkKeys[g_dndDocItemQLLib] = "";
    for (var i = 0; i < droppableItems.length; i++) {
        var menuElem = droppableItems[i];

        if (!fIsNullOrUndefined(menuElem)) {
            var menudp = SPDragDropManager.InitDroppable(menuElem, linkKeys);

            SetMenuItemDropOption(menudp);
            menuElem.removeAttribute("id");
        }
    }
}
function SetMenuItemDropOption(droppable) {
    if (fIsNullOrUndefined(droppable))
        return;
    droppable.SetOption('hoverClass', 'ms-droppable-menuitem-hover');
    droppable.SetOption('activeClass', 'ms-droppable-menuitem-active');
    droppable.AddEventListener('spDragEnter', docMenuItemDragEnterHandler);
    droppable.AddEventListener('spDragOver', docMenuItemDragOverHandler);
    droppable.AddEventListener('spDrop', docMenuItemDropHandler);
}
function docMenuItemDragEnterHandler(spEvt) {
    if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
        spEvt.rawEvent.dataTransfer.dropEffect = "move";
    }
}
function docMenuItemDragOverHandler(spEvt) {
    if (spEvt.rawEvent && spEvt.rawEvent.dataTransfer) {
        spEvt.rawEvent.dataTransfer.dropEffect = "move";
    }
}
function docMenuItemDropHandler(spEvt) {
    var droppable = spEvt.droppable;
    var dragData = spEvt.GetData(g_docItemDataKey);

    if (fIsNullOrUndefined(droppable) || fIsNullOrUndefined(dragData)) {
        return;
    }
    var draggable = spEvt.draggable;

    if (fIsNullOrUndefined(draggable))
        return;
    var dgElem = draggable.GetElement();

    if (fIsNullOrUndefined(dgElem))
        return;
    var curCtx = CtxFromElement(dgElem);

    if (fIsNullOrUndefined(curCtx))
        return;
    var menuItem = droppable.GetElement();
    var destUrl = null;

    if (!fIsNullOrUndefined(menuItem) && menuItem.tagName == "A") {
        var href = menuItem.getAttribute("href");

        destUrl = href;
        if (!fIsNullOrUndefined(href)) {
            var idx = href.indexOf("/Forms/");

            if (idx != -1) {
                destUrl = href.substring(0, idx);
            }
            else {
                var idx2 = href.lastIndexOf("/");

                if (idx2 > 0) {
                    destUrl = href.substring(0, idx2);
                }
            }
        }
    }
    var progElem = createProgressElement(droppable.GetElement(), true);

    CheckFileExists(dragData, destUrl, false, function(filesOut) {
    ULSAZP:
        ;
        doMoveItems(curCtx, destUrl, filesOut, droppable);
    });
}
function UpdateMenuVisual(type, dragData, hasError) {
    var droppable = SPDragDropManager.ObjectDropped;
    var dropElem = droppable.GetElement();
    var icon = GetMenuStatusIcon(dropElem);

    if (type == "start") {
        if (!fIsNullOrUndefined(icon)) {
            icon.src = "/_layouts/15/images/progress-circle-24.gif?rev=23";
        }
    }
    else if (type == "finish") {
        if (!fIsNullOrUndefined(icon)) {
            if (hasError) {
                icon.src = "/_layouts/15/images/error16by16.gif?rev=23";
            }
            else {
                icon.src = "/_layouts/15/images/check.gif?rev=23";
            }
        }
        FullRefresh(ctx);
    }
}
function GetMenuStatusIcon(menuElement) {
    var ret = null;
    var iconId = 'ms-dropmenu-icon';
    var icon = document.getElementById(iconId);

    if (!fIsNullOrUndefined(icon))
        return icon;
    icon = document.createElement('IMG');
    icon.id = iconId;
    icon.className = iconId;
    if (!fIsNullOrUndefined(menuElement) && menuElement.tagName == "A") {
        var spanItem = menuElement.firstChild.firstChild;

        if (!fIsNullOrUndefined(spanItem)) {
            spanItem.parentNode.appendChild(icon);
            ret = icon;
        }
    }
    return ret;
}
var UploadType;
var ControlStatus;
var FileStatus;
var ProgressMessage;
var UploadStatus;
var CancelConfirmationStatus;
var C_MEGABYTES;
var C_MAX_FILESIZE;
var C_MAX_TOTALFILESIZE;
var C_MAX_REQUESTSIZE;
var C_MAX_FILECOUNT;
var C_MIN_REFRESH_INTERVAL;
var g_uploadType;
var g_inplaceDisplay;
var g_uploadCtl;
var g_currentControl;
var g_currentCtx;

function registerDragUpload(dropTargetElement, serverUrl, siteRelativeUrl, listName, rootFolder, overwriteAll, hideProgressBar, refreshFunction, preUploadFunction, postUploadFunction, checkPermissionFunction) {
    if (g_uploadType == UploadType.NOT_SUPPORTED || g_uploadType == UploadType.ACTIVEXNA) {
        return false;
    }
    if (dropTargetElement == null || typeof dropTargetElement == 'undefined') {
        return false;
    }
    if (listName == null || (listName.trim()).length == 0) {
        return false;
    }
    var upldCtl = new DragUploadControl(dropTargetElement, serverUrl, siteRelativeUrl, listName, rootFolder, overwriteAll, hideProgressBar, refreshFunction, preUploadFunction, postUploadFunction, checkPermissionFunction);

    g_uploadCtl[dropTargetElement.id] = upldCtl;
    upldCtl.BindDragDrop();
    return true;
}
function DragUploadControl(dropTargetElement, serverUrl, siteRelativeUrl, listName, rootFolder, overwriteAll, hideProgressBar, refreshFunc, preUploadFunc, postUploadFunc, checkPermissionFunc) {
ULSAZP:
    ;
    this.elmDropTargetElement = dropTargetElement;
    this.strSiteUrl = serverUrl + siteRelativeUrl;
    this.strSiteRelativeUrl = siteRelativeUrl;
    this.strListName = listName;
    this.strRootFolder = rootFolder;
    this.fOverwriteAll = Boolean(overwriteAll);
    this.fHideProgressBar = hideProgressBar;
    this.fInlineProgress = checkInlineDisplay(dropTargetElement);
    this.fInlineDisplayError = checkInlineDisplayError(dropTargetElement);
    this.fInlineDisplayStarted = false;
    this.schemaFieldsXml = null;
    this.refreshFunc = refreshFunc;
    this.preUploadFunc = preUploadFunc;
    this.postUploadFunc = postUploadFunc;
    this.checkPermissionFunc = checkPermissionFunc;
    this.status = ControlStatus.IDLE;
    this.files = new Array(0);
    this.cctask = null;
}
function DUCInitialize() {
ULSAZP:
    ;
    this.files = new Array(0);
    this.processedCount = 0;
    this.succeededCount = 0;
    this.failedCount = 0;
    this.warnedCount = 0;
    this.cctask = null;
    this.status = ControlStatus.IDLE;
    var axObj = this.activeXObj;

    if (!fIsNullOrUndefined(axObj)) {
        axObj.Initialize();
    }
    this.fInlineDisplayStarted = false;
}
function DUCBindDragDrop() {
ULSAZP:
    ;
    if (typeof this.elmDropTargetElement.addEventListener == 'function') {
        this.elmDropTargetElement.addEventListener("dragenter", dropElementDragEnter, false);
        this.elmDropTargetElement.addEventListener("dragover", cancelDefault, false);
    }
    else {
        $addHandler(this.elmDropTargetElement, 'dragenter', dropElementDragEnter);
        $addHandler(this.elmDropTargetElement, 'dragover', cancelDefault);
    }
}
function FileElement(file) {
    this.fileName = file.name;
    this.fileSize = file.size;
    this.type = file.type;
    this.droppedFile = file;
    this.overwrite = false;
    this.status = FileStatus.PENDING;
    this.statusText = null;
    this.subFolder = null;
    this.relativeFolder = null;
    this.isFolder = false;
}
var c_dropBoxDivID;
var c_dropBoxTextID;
var c_activeXObjectID;
var c_activeXCLSID;

function dropElementDragEnter(evt) {
    var dropTargetElem = this;

    if (!fValidDrag(evt, dropTargetElem)) {
        if (fIsNullOrUndefined(evt))
            evt = window.event;
        if (!fIsNullOrUndefined(evt)) {
            if (!fIsNullOrUndefined(evt.dataTransfer)) {
                evt.dataTransfer.dropEffect = "none";
            }
            else if (!fIsNullOrUndefined(evt.rawEvent) && !fIsNullOrUndefined(evt.rawEvent.dataTransfer)) {
                evt.rawEvent.dataTransfer.dropEffect = "none";
            }
        }
        return false;
    }
    var uploadCtl = g_uploadCtl[dropTargetElem.id];

    if (fIsNullOrUndefined(uploadCtl)) {
        return false;
    }
    if (uploadCtl.status >= ControlStatus.DROPPED || !fIsNullOrUndefined(g_currentControl) && g_currentControl.status >= ControlStatus.DROPPED) {
        ShowErrorDialogCore(Strings.STS.L_UploadInProgressTitle, Strings.STS.L_UploadInProgress, null);
        return false;
    }
    if (fIsNullOrUndefined(g_currentControl) || uploadCtl.elmDropTargetElement.id != g_currentControl.elmDropTargetElement.id) {
        g_currentControl = uploadCtl;
        g_currentCtx = getCtx(uploadCtl.elmDropTargetElement.id);
    }
    if (!fIsNullOrUndefined(g_currentCtx) && Boolean(g_currentCtx.inGridMode)) {
        return false;
    }
    g_currentControl.Initialize();
    g_currentControl.status = ControlStatus.ENTERED;
    var dropBoxDiv = document.getElementById(c_dropBoxDivID);

    if (fIsNullOrUndefined(dropBoxDiv)) {
        dropBoxDiv = document.createElement('DIV');
        dropBoxDiv.id = c_dropBoxDivID;
        dropTargetElem.parentNode.appendChild(dropBoxDiv);
    }
    else {
        dropBoxDiv.style.display = '';
    }
    if (!fIsNullOrUndefined(dropBoxDiv)) {
        dropBoxDiv.style.width = String(dropTargetElem.clientWidth) + 'px';
        dropBoxDiv.style.height = String(dropTargetElem.clientHeight) + 'px';
        var offsetLeft = AbsLeft(dropTargetElem);
        var offsetTop = AbsTop(dropTargetElem);
        var ws = document.getElementById('s4-workspace');

        if (!fIsNullOrUndefined(ws)) {
            offsetLeft -= AbsLeft(ws);
            offsetTop -= AbsTop(ws);
        }
        dropBoxDiv.style.left = String(offsetLeft) + 'px';
        dropBoxDiv.style.top = String(offsetTop) + 'px';
        var txtElem = document.getElementById(c_dropBoxTextID);

        if (fIsNullOrUndefined(txtElem)) {
            txtElem = document.createElement("SPAN");
            txtElem.id = c_dropBoxTextID;
            txtElem.className = "ms-attractMode ms-noWrap";
            txtElem.innerHTML = Strings.STS.L_DropText;
            dropBoxDiv.appendChild(txtElem);
        }
        if (typeof txtElem.addEventListener == 'function') {
            txtElem.addEventListener("dragenter", cancelDefault, false);
            txtElem.addEventListener("dragover", cancelDefault, false);
        }
        else {
            $addHandler(txtElem, 'dragenter', cancelDefault);
            $addHandler(txtElem, 'dragover', cancelDefault);
        }
        txtElem.style.lineHeight = String(dropBoxDiv.clientHeight) + 'px';
        txtElem.style.display = '';
    }
    if (g_uploadType === UploadType.ACTIVEX) {
        var activeXElem = document.getElementById(c_activeXObjectID);

        if (fIsNullOrUndefined(activeXElem)) {
            activeXElem = document.createElement('OBJECT');
            activeXElem.id = c_activeXObjectID;
            activeXElem.classid = c_activeXCLSID;
            if (!fIsNullOrUndefined(dropBoxDiv)) {
                dropBoxDiv.appendChild(activeXElem);
            }
        }
        else {
            activeXElem.style.display = '';
        }
        if (!fIsNullOrUndefined(activeXElem)) {
            activeXElem.destinationUrl = uploadCtl.strSiteUrl + uploadCtl.strRootFolder;
            activeXElem.overwriteAll = uploadCtl.fOverwriteAll;
            g_currentControl.activeXObj = activeXElem;
        }
    }
    else if (g_uploadType === UploadType.HTML5) {
        dropBoxDiv.addEventListener("dragenter", DropBoxDragEnter, false);
        dropBoxDiv.addEventListener("dragover", DropBoxDragOver, false);
        dropBoxDiv.addEventListener("dragleave", DropBoxDragLeave, false);
        dropBoxDiv.addEventListener("drop", DropBoxDrop, false);
    }
    cancelDefault(evt);
    return false;
}
function DropBoxDragEnter(evt) {
    cancelDefault(evt);
    if (typeof evt.dataTransfer.effectAllowed == "string") {
        evt.dataTransfer.effectAllowed = 'copy';
    }
    evt.dataTransfer.dropEffect = 'copy';
}
function DropBoxDragOver(evt) {
    cancelDefault(evt);
    if (typeof evt.dataTransfer.effectAllowed == "string") {
        evt.dataTransfer.effectAllowed = 'copy';
    }
    evt.dataTransfer.dropEffect = 'copy';
}
function SkipDragLeave(evt, srcElement) {
    if (!browseris.firefox && !browseris.safari3up)
        return false;
    if (fIsNullOrUndefined(evt))
        evt = window.event;
    if (fIsNullOrUndefined(evt))
        return true;
    var relTgt = evt.relatedTarget;

    if (fIsNullOrUndefined(relTgt))
        return true;
    if (fIsNullOrUndefined(srcElement))
        return true;
    if (relTgt.id != srcElement.id || relTgt.className != srcElement.className)
        return false;
    else
        return true;
}
function DropBoxDragLeave(evt) {
    if (SkipDragLeave(evt, this))
        return;
    cancelDefault(evt);
    if (!fIsNullOrUndefined(evt) && !fIsNullOrUndefined(evt.target) && evt.target.id == "ms-dnd-dropbox")
        HideDropBox();
    g_currentControl.status = ControlStatus.IDLE;
}
function HideDropBox() {
ULSAZP:
    ;
    var dropBox = document.getElementById(c_dropBoxDivID);

    if (!fIsNullOrUndefined(dropBox)) {
        dropBox.style.display = "none";
    }
}
function DropBoxDrop(evt) {
    cancelDefault(evt);
    HideDropBox();
    if (!UserHasPermission()) {
        return false;
    }
    var dt = evt.dataTransfer;
    var droppedFiles = dt.files;

    if (!fIsNullOrUndefined(droppedFiles) && droppedFiles.length > 0) {
        g_currentControl.status = ControlStatus.DROPPED;
        PrepareFileList(droppedFiles);
        var files = g_currentControl.files;

        if (!fIsNullOrUndefined(files)) {
            StartTask(files);
        }
    }
    else {
        ShowErrorDialogCore(Strings.STS.L_DragDropNotWorkingErrorTitle, Strings.STS.L_DragDropInvalidFile, null);
    }
    return false;
}
function UserHasPermission() {
    var hasPermission = false;

    if (typeof g_currentControl.checkPermissionFunc == 'function') {
        hasPermission = g_currentControl.checkPermissionFunc();
    }
    else {
        var dctx = fIsNullOrUndefined(g_currentCtx) ? ctx : g_currentCtx;

        if (!fIsNullOrUndefined(dctx)) {
            if (fIsNullOrUndefined(dctx.ListSchema)) {
                if (!fIsNullOrUndefined(dctx.FolderRight_AddListItems) && dctx.FolderRight_AddListItems == "1" || fIsNullOrUndefined(dctx.FolderRight_AddListItems) && dctx.ListRight_AddListItems != null) {
                    hasPermission = true;
                }
            }
            else {
                if (!fIsNullOrUndefined(dctx.ListSchema.FolderRight_AddListItems) && dctx.ListSchema.FolderRight_AddListItems == "1" || fIsNullOrUndefined(dctx.ListSchema.FolderRight_AddListItems) && dctx.ListSchema.ListRight_AddListItems != null) {
                    hasPermission = true;
                }
            }
        }
    }
    if (!hasPermission)
        ShowErrorDialog(Strings.STS.L_NoUploadPermission, null);
    return hasPermission;
}
function PrepareFileList(droppedFiles) {
    var fileTotal = droppedFiles.length;

    if (fileTotal > C_MAX_FILECOUNT) {
        var errMsg = String.format(Strings.STS.L_UploadMaxFileCount, C_MAX_FILECOUNT);

        ShowErrorDialogCore(Strings.STS.L_UploadMaxFileCountTitle, errMsg, null);
        g_currentControl.status = ControlStatus.IDLE;
        return;
    }
    for (var j = 0; j < fileTotal; j++) {
        var file = new FileElement(droppedFiles[j]);

        g_currentControl.files[j] = file;
    }
}
function StartTask(files) {
    var state = new UploadState(files);
    var cb = new SP.Utilities.CommandBlock(state, UploadCommandFunc, UploadFinishFunc);
    var task = new SP.Utilities.Task(g_currentControl.elmDropTargetElement, SP.Utilities.Task.TaskType.autoCancel, 0, cb, null, UploadCancelFunc, g_currentControl.fHideProgressBar ? null : UploadProgressFunc);

    task.setPageExitText(Strings.STS.L_PageExitCancelUpload);
    if (!fIsNullOrUndefined(task)) {
        g_currentControl.cctask = task;
        g_currentControl.status = ControlStatus.UPLOADING;
        task.start();
    }
}
function UploadState(fileList) {
    this.status = UploadStatus.PENDING;
    this.files = fileList;
    this.filesIndexToSend = new Array(0);
    this.totalBytes = 0;
    this.totalBytesProcessed = 0;
    this.totalBytesInProgress = 0;
    this.request = null;
    this.uploadingCount = 0;
    this.percentDone = 0;
    this.succeededCount = 0;
    this.failedCount = 0;
    this.warnedCount = 0;
    this.conflictFiles = null;
    this.cancelConfirm = CancelConfirmationStatus.UNCONFIRMED;
    this.checkedOutCount = 0;
}
function UploadCommandFunc(state, pauseFunction) {
    if (state.status == 0) {
        DoValidate(state);
    }
    else if (state.status == 2) {
        StartUpload(state);
    }
    else if (state.status == 3) {
        if (state.request == null) {
            var filesToSend = state.filesIndexToSend.shift();

            if (!fIsNullOrUndefined(filesToSend) && filesToSend.length > 0) {
                SendHttpRequest(filesToSend, state);
            }
        }
    }
    if (state.status == UploadStatus.CANCELLED) {
        var cctask = g_currentControl.cctask;

        if (!fIsNullOrUndefined(cctask)) {
            cctask.cancel(SP.Utilities.Task.CancelType.explicit);
        }
        return 1;
    }
    pauseFunction();
    if (state.status >= UploadStatus.VALIDATED && state.totalBytesProcessed == state.totalBytes) {
        state.status = UploadStatus.FINISHED;
        return 1;
    }
    else if (state.totalBytes > 0) {
        return state.totalBytesProcessed / state.totalBytes;
    }
    else {
        return -1;
    }
}
function UploadFinishFunc(element, state) {
    if (typeof g_currentControl.postUploadFunc == 'function' && state.status != UploadStatus.CANCELLED)
        g_currentControl.postUploadFunc(state.files);
    g_currentControl.status = ControlStatus.UPLOADED;
    UpdateProgressBar(ProgressMessage.UPLOADED, state);
    RefreshResult(state);
    g_currentControl.status = ControlStatus.IDLE;
}
function RefreshResult(state) {
    if (typeof g_currentControl.refreshFunc == 'function') {
        g_currentControl.refreshFunc(state.files);
        return;
    }
    if (fIsNullOrUndefined(g_currentCtx) || !Boolean(g_currentCtx.IsClientRendering))
        return;
    var lastRefresh = state.lastRefreshTime;
    var currentTime = new Date();

    if ((fIsNullOrUndefined(lastRefresh) || Number(currentTime) - Number(lastRefresh) > C_MIN_REFRESH_INTERVAL) && !fIsNullOrUndefined(g_currentCtx) && !fIsNullOrUndefined(g_currentCtx.clvp)) {
        if (g_currentControl.fInlineProgress) {
            if (!g_currentControl.fInlineDisplayStarted)
                StartInlineDisplay(state);
            else
                RefreshInline(state);
        }
        else {
            if (FullRefresh(g_currentCtx))
                state.lastRefreshTime = new Date();
        }
    }
}
function StartInlineDisplay(state) {
    if (g_currentControl.fInlineDisplayStarted || fIsNullOrUndefined(g_currentCtx) || !Boolean(g_currentCtx.IsClientRendering) || Boolean(g_currentCtx.inGridMode))
        return;
    var files = state.files;

    if (fIsNullOrUndefined(files))
        return;
    var newRows = new Array(0);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var rf = unescapeProperlyWp(file.relativeFolder);
        var hasRf = !fIsNullOrUndefined(rf) && TrimSpaces(rf) != "" && TrimSpaces(rf) != "null";

        if (file.status != FileStatus.SKIP && (!file.isFolder && (!hasRf || rf == "\\") || file.isFolder && rf == "\\")) {
            var newRow = {};

            newRow["ID"] = "CustomData_" + String(i);
            var filename = file.fileName;

            newRow["FileLeafRef"] = STSHtmlEncode(filename);
            var index = filename.lastIndexOf(".");

            newRow["FileLeafRef.Name"] = index > 0 ? TrimSpaces(filename.substring(0, index)) : STSHtmlEncode(filename);
            newRow["FileLeafRef.Suffix"] = index > 0 ? TrimSpaces(filename.substr(index + 1)) : "";
            newRow["FileRef"] = "/_layouts/15/" + "loadingcirclests16.gif";
            newRow["HTML_x0020_File_x0020_Type.File_x0020_Type.mapico"] = "loadingcirclests16.gif";
            newRow["HTML_x0020_File_x0020_Type.File_x0020_Type.isIconDynamic"] = "true";
            newRow["Modified"] = "";
            newRow["PermMask"] = "";
            newRow["CustomData."] = true;
            newRows.push(newRow);
        }
    }
    var listData = g_currentCtx.ListData;
    var existingRows = g_currentCtx.ListData.Row;

    for (var j = existingRows.length - 1; j >= 0; j--) {
        var _row = existingRows[j];

        if (fIsNullOrUndefined(_row["ID"]) || _row["ID"] == "" || _row["ID"].indexOf("CustomData_") == 0)
            existingRows.splice(j, 1);
    }
    if (fIsNullOrUndefined(existingRows) || existingRows.length == 0) {
        listData.Row = newRows;
        listData.FirstRow = "1";
        listData.LastRow = String(newRows.length);
    }
    else {
        listData.Row = newRows.concat(existingRows);
        listData.LastRow = String(Number(listData.LastRow) + newRows.length);
    }
    g_currentControl.fInlineDisplayStarted = true;
    var templateBody = document.getElementById('scriptBody' + g_currentCtx.wpq);

    RenderListView(g_currentCtx, g_currentCtx.wpq, templateBody, false);
    var clvp = g_currentCtx.clvp;
}
function RefreshInline(state) {
    if (fIsNullOrUndefined(g_currentCtx) || !Boolean(g_currentCtx.IsClientRendering) || Boolean(g_currentCtx.inGridMode))
        return;
    var context = SP.ClientContext.get_current();

    if (fIsNullOrUndefined(context))
        return;
    var files = state.files;

    if (fIsNullOrUndefined(files))
        return;
    var schemaFldStr = GetSchemaFieldsXml();
    var errorRows = {};
    var fileValueXml = [];

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var fileStatus = file.status;
        var rf = unescapeProperlyWp(file.relativeFolder);
        var hasRf = !fIsNullOrUndefined(rf) && TrimSpaces(rf) != "" && TrimSpaces(rf) != "null";
        var isFirstLevelFolder = file.isFolder && rf == "\\";
        var isFirstLevelFile = !file.isFolder && (!hasRf || rf == "\\");
        var isFirstLevel = isFirstLevelFolder || isFirstLevelFile;

        if (fileStatus == FileStatus.UPLOADED) {
            if (isFirstLevelFile) {
                fileValueXml.push("<Value Type='Text'>" + file.fileName + "</Value>");
            }
            else if (isFirstLevelFolder) {
                var detailErrorIdx = [];

                for (var j = i + 1; j < files.length; j++) {
                    var cfile = files[j];
                    var cstatus = cfile.status;
                    var relFd = unescapeProperlyWp(cfile.relativeFolder);

                    if (relFd != rf && relFd.indexOf(rf) == 0) {
                        if (cstatus == FileStatus.FAILED || cstatus == FileStatus.WARNING)
                            detailErrorIdx.push(j);
                    }
                    else
                        break;
                }
                if (detailErrorIdx.length > 0) {
                    if (g_currentControl.fInlineDisplayError) {
                        var detailErrHTML = RenderDetailError(state.files, detailErrorIdx, true);

                        errorRows[i] = detailErrHTML;
                    }
                    else {
                        errorRows[i] = "";
                    }
                }
                else {
                    fileValueXml.push("<Value Type='Text'>" + file.fileName + "</Value>");
                }
                i = j - 1;
            }
        }
        else if (fileStatus == FileStatus.FAILED || fileStatus == FileStatus.WARNING) {
            if (isFirstLevelFile || isFirstLevelFolder) {
                if (!g_currentControl.fInlineDisplayError) {
                    var erroIdx = [];

                    erroIdx[0] = i;
                    var detailErrHTML2 = RenderDetailError(state.files, erroIdx, true);

                    errorRows[i] = detailErrHTML2;
                }
                else {
                    errorRows[i] = "";
                }
            }
        }
    }
    if (fileValueXml.length > 0) {
        var viewXml = [];

        viewXml.push("<View>");
        if (!fIsNullOrUndefined(schemaFldStr) && schemaFldStr != "") {
            viewXml.push(schemaFldStr);
        }
        viewXml.push("<Query><Where><In><FieldRef Name='FileLeafRef'/><Values>");
        viewXml.push(fileValueXml.join(""));
        viewXml.push("</Values></In></Where></Query>");
        if (!fIsNullOrUndefined(g_currentCtx.rootFolder) && g_currentCtx.rootFolder != "") {
            viewXml.push("<RootFolder>");
            viewXml.push(g_currentCtx.rootFolder);
            viewXml.push("</RootFolder>");
        }
        viewXml.push("</View>");
        var list = ((context.get_web()).get_lists()).getById(g_currentCtx.listName);
        var newlistData = list.renderListData(viewXml.join(""));

        context.load(list);
        context.executeQueryAsync(function() {
        ULSAZP:
            ;
            var updatedRows = (eval('(' + newlistData.get_value() + ')')).Row;

            if (fIsNullOrUndefined(updatedRows) || updatedRows.length == 0) {
                FullRefresh(g_currentCtx);
            }
            else {
                CheckFilesCheckedOut(updatedRows, state);
                RefreshListRows(updatedRows);
                if (!fIsNullOrUndefined(errorRows)) {
                    for (var idx in errorRows) {
                        var _file = files[idx];
                        var errDetail = errorRows[idx];

                        if (!fIsNullOrUndefined(_file)) {
                            RefreshRowInError(_file, errDetail);
                        }
                    }
                }
            }
        }, function(sender, args) {
        ULSAZP:
            ;
            return;
        });
    }
    else if (!fIsNullOrUndefined(errorRows)) {
        for (var _idx in errorRows) {
            var _file1 = files[_idx];
            var _errDetail = errorRows[_idx];

            if (!fIsNullOrUndefined(_file1)) {
                RefreshRowInError(_file1, _errDetail);
            }
        }
    }
}
function CheckFilesCheckedOut(updatedRows, state) {
    if (fIsNullOrUndefined(updatedRows) || fIsNullOrUndefined(updatedRows.length) || updatedRows.length < 1)
        return;
    var checkedOutCount = 0;

    for (var i = 0; i < updatedRows.length; i++) {
        var newrow = updatedRows[i];

        if (!fIsNullOrUndefined(newrow.CheckoutUser) && newrow.CheckoutUser != "") {
            checkedOutCount++;
        }
    }
    if (checkedOutCount > 0) {
        state.checkedOutCount = checkedOutCount;
        if (state.status == UploadStatus.FINISHED) {
            UpdateProgressBar(ProgressMessage.UPLOADED, state);
        }
    }
}
function trimRootFolder(pathIn, trimFolder) {
    if (!Boolean(pathIn))
        return pathIn;
    var pathOut = unescapeProperly(pathIn);

    if (Boolean(pathOut) && TrimSpaces(pathOut) != "") {
        var idx = pathOut.indexOf('\\');

        if (idx >= 0) {
            var idx2 = trimFolder ? pathOut.indexOf('\\', idx + 1) : idx;

            if (idx2 >= idx) {
                pathOut = pathOut.substr(idx2 + 1);
            }
        }
    }
    return escapeProperly(pathOut);
}
function RenderDetailError(files, detailErrorIdx, fTrimRootFolder) {
    if (fIsNullOrUndefined(detailErrorIdx) || detailErrorIdx.length < 1)
        return null;
    if (fIsNullOrUndefined(files) || files.length <= 0)
        return null;
    var fileErrorList = [];

    for (var i = 0; i < detailErrorIdx.length; i++) {
        var idx = detailErrorIdx[i];
        var file = files[idx];

        file.relativeFolder = trimRootFolder(file.relativeFolder, fTrimRootFolder);
        fileErrorList.push(file);
    }
    return RenderFileErrorDlgHtml(fileErrorList);
}
function GetSchemaFieldsXml() {
ULSAZP:
    ;
    if (!fIsNullOrUndefined(g_currentControl.schemaFieldsXml))
        return g_currentControl.schemaFieldsXml;
    var schemaFields = [];
    var listSchemaFields = g_currentCtx.ListSchema.Field;

    if (fIsNullOrUndefined(listSchemaFields)) {
        g_currentControl.schemaFieldsXml = "";
        return "";
    }
    var schemaFieldsStr = "";

    if (listSchemaFields.length > 0) {
        schemaFields.push('<ViewFields>');
        for (var fi = 0; fi < listSchemaFields.length; fi++) {
            var lsf = listSchemaFields[fi];

            schemaFields.push("<FieldRef Name='" + lsf.Name + "'/>");
        }
        schemaFields.push('</ViewFields>');
        schemaFieldsStr = schemaFields.join('');
    }
    g_currentControl.schemaFieldsXml = schemaFieldsStr;
    return schemaFieldsStr;
}
function RefreshListRows(updatedRows) {
    if (fIsNullOrUndefined(updatedRows) || fIsNullOrUndefined(updatedRows.length) || updatedRows.length < 1)
        return;
    var existingRows = g_currentCtx.ListData.Row;
    var extRowsLength = existingRows.length;
    var listBody = GetListTBody();

    if (fIsNullOrUndefined(listBody))
        return;
    var replaceRows = {};
    var removeRows = [];
    var totalReplace = 0;

    for (var i = 0; i < updatedRows.length; i++) {
        var newrow = updatedRows[i];
        var rowIdx = FindListRowByName(newrow.FileLeafRef, 0);

        if (rowIdx >= 0) {
            existingRows[rowIdx] = newrow;
            var rmvIdx = FindListRowByName(newrow.FileLeafRef, rowIdx + 1);

            if (rmvIdx > rowIdx)
                removeRows.push(rmvIdx);
        }
    }
    var listTrlength = listBody.rows.length;

    removeRows.sort(sortNumber);
    for (var ri = removeRows.length - 1; ri >= 0; ri--) {
        var rIdx = removeRows[ri];

        existingRows.splice(rIdx, 1);
        if (rIdx < listTrlength)
            listBody.deleteRow(rIdx);
    }
    g_currentCtx.ListData.Row = existingRows;
    var templateBody = document.getElementById('scriptBody' + g_currentCtx.wpq);

    RenderListView(g_currentCtx, g_currentCtx.wpq, templateBody, false);
    PostRefreshFixUp();
}
function RefreshRowInError(file, detailErrorHTML) {
    var fileStatus = file.status;

    if (!file.isFolder && (fileStatus != FileStatus.FAILED && fileStatus != FileStatus.WARNING))
        return;
    var rowIdx = FindListRowByName(file.fileName, 0);

    if (rowIdx < 0)
        return;
    if (!g_currentControl.fInlineDisplayError) {
        var existingRows = g_currentCtx.ListData.Row;
        var curRow = existingRows[rowIdx];

        curRow["InError."] = true;
        g_currentCtx.ListData.Row = existingRows;
        var templateBody = document.getElementById('scriptBody' + g_currentCtx.wpq);

        RenderListView(g_currentCtx, g_currentCtx.wpq, templateBody, false);
        return;
    }
    else {
        var listBody = GetListTBody();

        if (fIsNullOrUndefined(listBody))
            return;
        var curTr = listBody.rows[rowIdx];

        curTr.id = "js-dragupload-error-" + file.fileName;
        var afterFadeOut = function() {
        ULSAZP:
            ;
            var thisTr = curTr;
            var cells = thisTr.cells;

            for (var i = cells.length - 1; i >= 0; i--) {
                var cell = cells[i];

                if (!(hasClass(cell, "ms-vb-icon", true) || hasClass(cell, "ms-vb-title", true) || hasClass(cell, "ms-vb-itmcbx", true)))
                    thisTr.deleteCell(i);
                if (hasClass(cell, "ms-vb-title", true)) {
                    cell.style.verticalAlign = "middle";
                }
                if (hasClass(cell, "ms-vb-icon", true)) {
                    cell.firstChild.src = "/_layouts/15/images/error16by16.gif?rev=23";
                }
            }
            var errTxtCell = thisTr.insertCell(thisTr.cells.length);
            var statusText = unescapeProperlyWp(file.statusText);

            if (file.isFolder && (!fIsNullOrUndefined(detailErrorHTML) && detailErrorHTML != "")) {
                errTxtCell.innerHTML = String.format(Strings.STS.L_DragDropUploadFolderError, "<a onclick='ShowFolderErrorDetails(this, event)'>", "</a>") + "<span style='display:none;'>" + detailErrorHTML + "</span>";
            }
            else if (!fIsNullOrUndefined(statusText) && statusText != "")
                errTxtCell.innerHTML = statusText;
            else
                errTxtCell.innerHTML = Strings.STS.L_DragDropUploadGenericError;
            errTxtCell.colSpan = 100;
            addClass(thisTr, "ms-dragupload-error ms-status-red");
            SPAnimationUtility.BasicAnimator.FadeIn(thisTr, null, null);
            PostRefreshFixUp();
        };

        SPAnimationUtility.BasicAnimator.FadeOut(curTr, afterFadeOut, null);
    }
}
function ShowFolderErrorDetails(showDetailAnchor, evt) {
    if (fIsNullOrUndefined(showDetailAnchor))
        return;
    var hiddenSpan = showDetailAnchor.nextSibling;

    while (!fIsNullOrUndefined(hiddenSpan) && (fIsNullOrUndefined(hiddenSpan.tagName) || hiddenSpan.tagName != 'SPAN' || (fIsNullOrUndefined(hiddenSpan.style.display) || hiddenSpan.style.display != 'none'))) {
        hiddenSpan = hiddenSpan.nextSibling;
    }
    if (!fIsNullOrUndefined(hiddenSpan) && (!fIsNullOrUndefined(hiddenSpan.tagName) && hiddenSpan.tagName == 'SPAN') && (!fIsNullOrUndefined(hiddenSpan.tagName) && hiddenSpan.style.display == 'none')) {
        ShowErrorDialogCore(Strings.STS.L_ErrorDetailsTitle, hiddenSpan.innerHTML, null, true);
    }
    cancelDefault(evt);
}
function ShowAllErrorDetailsInDialog() {
ULSAZP:
    ;
    var files = g_currentControl.files;

    if (files.length <= 0)
        return;
    var errIdx = [];

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var fStatus = file.status;

        if (fStatus == FileStatus.FAILED || fStatus == FileStatus.WARNING) {
            errIdx.push(i);
        }
    }
    if (errIdx.length > 0) {
        var errHtml = RenderDetailError(files, errIdx, false);

        if (!fIsNullOrUndefined(errHtml) && errHtml != "") {
            ShowErrorDialogCore(Strings.STS.L_ErrorDetailsTitle, errHtml, null, true);
        }
    }
}
function FindListRowByName(fileName, startIndex) {
    if (fIsNullOrUndefined(fileName) || fIsNullOrUndefined(g_currentCtx) || fIsNullOrUndefined(g_currentCtx.ListData) || fIsNullOrUndefined(g_currentCtx.ListData.Row))
        return -1;
    var rows = g_currentCtx.ListData.Row;
    var rowcount = rows.length;
    var _start = startIndex;

    if (_start < 0)
        _start = 0;
    for (var i = _start; i < rowcount; i++) {
        var curRow = rows[i];

        if (STSHtmlDecode(curRow.FileLeafRef) == fileName)
            return i;
    }
    return -1;
}
function GetListTBody() {
    if (fIsNullOrUndefined(g_currentCtx))
        return null;
    var scriptElem = document.getElementById("scriptBody" + g_currentCtx.wpq);

    if (fIsNullOrUndefined(scriptElem))
        return null;
    return scriptElem.nextSibling;
}
function UploadCancelFunc(element, state, type) {
    if (type == SP.Utilities.Task.CancelType.explicit || state.cancelConfirm == CancelConfirmationStatus.CONFIRMEDYES) {
        if (g_uploadType == UploadType.HTML5) {
            var req = state.request;

            if (!fIsNullOrUndefined(req))
                req.abort();
        }
        else if (g_uploadType == UploadType.ACTIVEX) {
            var axObj = g_currentControl.activeXObj;

            if (!fIsNullOrUndefined(axObj)) {
                axObj.CancelUpload();
            }
        }
        state.cancelConfirm = CancelConfirmationStatus.UNCONFIRMED;
        state.status = UploadStatus.CANCELLED;
        g_currentControl.status = ControlStatus.UPLOADED;
        UpdateProgressBar(ProgressMessage.CANCELLED, state);
        g_currentControl.Initialize();
        RefreshResult(state);
        return true;
    }
    return false;
}
function UploadProgressFunc(percentDone, timeElapsed, state) {
    state.percentDone = percentDone;
    var messageType = ProgressMessage.EMPTY;

    switch (state.status) {
    case 1:
        messageType = ProgressMessage.VALIDATION;
        break;
    case 3:
        messageType = ProgressMessage.UPLOADING;
        break;
    case 4:
        messageType = ProgressMessage.UPLOADED;
        break;
    case 5:
        messageType = ProgressMessage.CANCELLED;
        break;
    }
    UpdateProgressBar(messageType, state);
}
function StartTaskAX() {
ULSAZP:
    ;
    var state = new UploadState(null);
    var cb = new SP.Utilities.CommandBlock(state, UploadAXCommandFunc, UploadFinishFunc);
    var task = new SP.Utilities.Task(g_currentControl.elmDropTargetElement, SP.Utilities.Task.TaskType.autoCancel, 0, cb, null, UploadCancelFunc, g_currentControl.fHideProgressBar ? null : UploadProgressFunc);

    task.setPageExitText(Strings.STS.L_PageExitCancelUpload);
    if (!fIsNullOrUndefined(task)) {
        g_currentControl.status = ControlStatus.UPLOADING;
        g_currentControl.cctask = task;
        task.start();
    }
}
function UploadAXCommandFunc(state, pauseFunction) {
    var axObj = g_currentControl.activeXObj;
    var ctlStatus = -1;
    var upldStatus = -1;

    if (typeof axObj.controlStatus == "number")
        ctlStatus = axObj.controlStatus;
    if (typeof axObj.uploadStatus == "number")
        upldStatus = axObj.uploadStatus;
    if (ctlStatus == 2 && upldStatus == 0) {
        GetFilesFromJSON(state);
        if (fIsNullOrUndefined(state.files)) {
            return 1;
        }
        else {
            DoValidate(state);
            if (state.status == UploadStatus.VALIDATING) {
                axObj.uploadStatus = UploadStatus.VALIDATING;
                axObj.controlStatus = ControlStatus.UPLOADING;
            }
        }
    }
    else if (ctlStatus == 3) {
        if (upldStatus == 2) {
            StartUpload(state);
        }
        else if (upldStatus == 3) {
            if (typeof axObj.currentFileIndex == "number")
                state.uploadingCount = axObj.currentFileIndex + 1;
            if (typeof axObj.totalBytesUploaded == "number")
                state.totalBytesProcessed = axObj.totalBytesUploaded;
            if (typeof axObj.succeededCount == "number")
                state.succeededCount = axObj.succeededCount;
            if (typeof axObj.failedCount == "number")
                state.failedCount = axObj.failedCount;
            if (typeof axObj.warnedCount == "number")
                state.warnedCount = axObj.warnedCount;
        }
    }
    else if (ctlStatus == 4) {
        if (typeof axObj.totalBytesUploaded == "number")
            state.totalBytesProcessed = axObj.totalBytesUploaded;
        if (typeof axObj.succeededCount == "number")
            state.succeededCount = axObj.succeededCount;
        if (typeof axObj.failedCount == "number")
            state.failedCount = axObj.failedCount;
        if (typeof axObj.warnedCount == "number")
            state.warnedCount = axObj.warnedCount;
        GetFilesFromJSON(state);
        state.status = UploadStatus.FINISHED;
        return 1;
    }
    if (state.status == UploadStatus.CANCELLED) {
        var cctask = g_currentControl.cctask;

        if (!fIsNullOrUndefined(cctask)) {
            cctask.cancel(SP.Utilities.Task.CancelType.explicit);
        }
        return 1;
    }
    pauseFunction();
    if (state.status >= UploadStatus.VALIDATED && (state.totalBytes > 0 && state.totalBytesProcessed == state.totalBytes)) {
        state.status = UploadStatus.FINISHED;
        return 1;
    }
    else if (state.totalBytes > 0) {
        return state.totalBytesProcessed / state.totalBytes;
    }
    else {
        return -1;
    }
}
function GetFilesFromJSON(state) {
    var axObj = g_currentControl.activeXObj;

    if (typeof axObj.fileListJSON == "string") {
        var fileListJSON = axObj.fileListJSON;
        var fileList = eval('(' + fileListJSON + ')');

        state.files = fileList.files;
    }
}
function DoValidate(state) {
    if (state.status != UploadStatus.PENDING) {
        return;
    }
    var files = state.files;

    if (fIsNullOrUndefined(files)) {
        return;
    }
    state.status = UploadStatus.VALIDATING;
    UpdateProgressBar(ProgressMessage.VALIDATION, state);
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var scopes = new Array(0);
    var spfiles = new Array(0);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file.status == FileStatus.FAILED && Boolean(file.statusText) && file.statusText != "") {
            state.failedCount++;
            continue;
        }
        file.status = FileStatus.PENDING;
        if (IndexOfIllegalCharInUrlLeafName(file.fileName) != -1) {
            file.status = FileStatus.FAILED;
            file.statusText = escapeProperly(Strings.STS.L_IllegalFileNameError);
            state.failedCount++;
            continue;
        }
        if (file.isFolder == false && (typeof file.type == 'undefined' || file.type == null || file.type == "")) {
            var unknownFile = false;
            var fileName = file.fileName;
            var index = fileName.lastIndexOf(".");

            if (index > 0) {
                var fileExt = TrimSpaces(fileName.substr(index));

                if (typeof fileExt == 'undefined' || fileExt == null || fileExt == "")
                    unknownFile = true;
            }
            else {
                unknownFile = true;
            }
            if (unknownFile) {
                file.status = FileStatus.FAILED;
                file.statusText = Strings.STS.L_UnknownFileTypeError;
                state.failedCount++;
                continue;
            }
        }
        if (file.fileSize == 0 && !file.isFolder) {
            file.status = FileStatus.FAILED;
            file.statusText = Strings.STS.L_EmptyFileError;
            state.failedCount++;
            continue;
        }
        if (file.fileSize > C_MAX_FILESIZE) {
            var errMsg = String.format(Strings.STS.L_UploadMaxFileSize, Math.floor(C_MAX_FILESIZE / 1048576));

            file.status = FileStatus.FAILED;
            file.statusText = errMsg;
            state.failedCount++;
            continue;
        }
        if (g_currentControl.fOverwriteAll == true) {
            file.overwrite = true;
            if (file.status == FileStatus.PENDING) {
                state.totalBytes += file.fileSize;
            }
        }
        else {
            var scope = new SP.ExceptionHandlingScope(context);

            scopes.push(scope);
            var scopeDispose = scope.startScope();
            var fileUrl = g_currentControl.strSiteRelativeUrl + g_currentControl.strRootFolder;
            var sf = file.subFolder;

            if (!fIsNullOrUndefined(sf) && TrimSpaces(sf) != "")
                fileUrl = fileUrl + TrimSpaces(sf);
            if (fIsNullOrUndefined(file.relativeFolder) || TrimSpaces(file.relativeFolder) == "") {
                fileUrl = fileUrl + "/" + file.fileName;
            }
            else {
                var rf = unescapeProperlyWp(file.relativeFolder);

                if (!fIsNullOrUndefined(rf) && TrimSpaces(rf) != "") {
                    fileUrl = fileUrl + TrimSpaces(rf);
                    fileUrl = fileUrl + file.fileName;
                }
            }
            if (file.isFolder) {
                var spfolder = web.getFolderByServerRelativeUrl(fileUrl);

                spfiles.push(spfolder);
                context.load(spfolder);
            }
            else {
                var spfile = web.getFileByServerRelativeUrl(fileUrl);

                spfile.retrieve('Exists');
                spfiles.push(spfile);
                context.load(spfile);
            }
            scopeDispose.dispose();
        }
    }
    if (g_currentControl.fOverwriteAll == false && scopes.length > 0) {
        context.executeQueryAsync(function() {
        ULSAZP:
            ;
            var conflictFiles = new Array(0);
            var conflictIndx = 0;
            var scopeIdx = 0;

            for (var idx = 0; idx < files.length; idx++) {
                var _file = files[idx];

                if (_file.status != FileStatus.PENDING)
                    continue;
                var _scope = scopes[scopeIdx];

                if (!fIsNullOrUndefined(_scope)) {
                    if (typeof _scope.get_hasException == "function" && _scope.get_hasException()) {
                        if (typeof _scope.get_serverErrorCode == "function" && _scope.get_serverErrorCode() == -2147024894) {
                            _file.overwrite = true;
                            state.totalBytes += _file.fileSize;
                        }
                        else {
                            _file.overwrite = false;
                            _file.status = FileStatus.FAILED;
                            _file.statusText = _scope.get_errorMessage();
                        }
                    }
                    else {
                        var _spfile = spfiles[scopeIdx];

                        if (!fIsNullOrUndefined(_spfile)) {
                            if (typeof _spfile.get_exists == "function" && _spfile.get_exists() || typeof _spfile.get_folders == 'function') {
                                conflictFiles[conflictIndx] = idx;
                                conflictIndx++;
                            }
                        }
                    }
                    scopeIdx++;
                }
            }
            if (conflictFiles.length > 0) {
                state.conflictFiles = conflictFiles;
                ResolveConflict(state, 0);
            }
            else {
                state.status = UploadStatus.VALIDATED;
                UpdateProgressBar(ProgressMessage.VALIDATION, state);
                StartUpload(state);
            }
        }, function(sender, args) {
            file.status = FileStatus.FAILED;
            file.statusText = String.format(Strings.STS.L_DragDropClientRequestError, args.get_message(), args.get_stackTrace());
            state.status = UploadStatus.VALIDATED;
            UpdateProgressBar(ProgressMessage.VALIDATION, state);
            StartUpload(state);
        });
    }
    else {
        state.status = UploadStatus.VALIDATED;
        UpdateProgressBar(ProgressMessage.VALIDATION, state);
        StartUpload(state);
    }
}
function UpdateValidationResultAX(state) {
    if (g_uploadType != UploadType.ACTIVEX) {
        return;
    }
    var files = state.files;
    var axObj = g_currentControl.activeXObj;

    if (fIsNullOrUndefined(axObj))
        return;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (!fIsNullOrUndefined(axObj)) {
            axObj.SetFileStatus(i, file.status, file.overwrite);
            if (!fIsNullOrUndefined(file.subFolder)) {
                axObj.SetFileSubFolder(i, file.subFolder);
            }
            if (!fIsNullOrUndefined(file.fileName)) {
                axObj.SetFileName(i, file.fileName);
            }
            if (!fIsNullOrUndefined(file.statusText)) {
                axObj.SetFileStatusText(i, file.statusText);
            }
        }
    }
    axObj.totalBytes = state.totalBytes;
}
function StartUpload(state) {
    if (state.status != UploadStatus.VALIDATED) {
        return;
    }
    if (state.totalBytes > C_MAX_TOTALFILESIZE) {
        var errorMsg = String.format(Strings.STS.L_UploadMaxFileSize, Math.floor(C_MAX_TOTALFILESIZE / C_MEGABYTES));

        ShowErrorDialogCore(Strings.STS.L_TotalFileSizeLimitTitle, errorMsg, null);
        cancelTask(null);
        state.status = UploadStatus.CANCELLED;
        return;
    }
    if (typeof g_currentControl.preUploadFunc == 'function') {
        var ret = g_currentControl.preUploadFunc(state.files);

        if (!fIsNullOrUndefined(ret) && Boolean(ret) == false) {
            cancelTask(null);
            state.status = UploadStatus.CANCELLED;
            return;
        }
    }
    if (state.status == UploadStatus.VALIDATED && g_uploadType == UploadType.ACTIVEX) {
        UpdateValidationResultAX(state);
    }
    if (state.status == UploadStatus.IN_READ_UPLOAD) {
        return;
    }
    RefreshResult(state);
    if (g_uploadType === UploadType.ACTIVEX) {
        var axObj = g_currentControl.activeXObj;

        if (!fIsNullOrUndefined(axObj)) {
            state.status = UploadStatus.IN_READ_UPLOAD;
            if (!fIsNullOrUndefined(axObj)) {
                axObj.StartUpload();
            }
        }
    }
    else if (g_uploadType === UploadType.HTML5) {
        StartUploadWithXHR(state);
    }
}
function StartUploadWithXHR(state) {
    state.status = UploadStatus.IN_READ_UPLOAD;
    var files = state.files;
    var filesIndexToSend = [];
    var filesIndexForRequest = [];
    var totalSizeForRequest = 0;
    var addTofileList = function() {
    ULSAZP:
        ;
        if (filesIndexForRequest.length > 0) {
            filesIndexToSend.push(filesIndexForRequest.join(','));
            filesIndexForRequest = [];
        }
    };

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file.status == FileStatus.SKIP || file.status == FileStatus.FAILED || file.status == FileStatus.WARNING) {
            state.uploadingCount++;
            UpdateProgressBar(ProgressMessage.UPLOADING, state);
            if (i == files.length - 1 && filesIndexForRequest.length > 0) {
                addTofileList();
            }
            else {
                continue;
            }
        }
        if (!fIsNullOrUndefined(filesIndexForRequest) && filesIndexForRequest.length > 0) {
            var prevSubFolder = files[filesIndexForRequest[0]].subFolder;
            var currentSubFolder = file.subFolder;

            if (fIsNullOrUndefined(prevSubFolder) && !fIsNullOrUndefined(currentSubFolder) || !fIsNullOrUndefined(prevSubFolder) && fIsNullOrUndefined(currentSubFolder) || !fIsNullOrUndefined(prevSubFolder) && !fIsNullOrUndefined(currentSubFolder) && TrimSpaces(prevSubFolder) != TrimSpaces(currentSubFolder)) {
                addTofileList();
            }
        }
        if (totalSizeForRequest > 0 && totalSizeForRequest + file.fileSize >= C_MAX_REQUESTSIZE) {
            addTofileList();
        }
        if (filesIndexForRequest.length == 0)
            totalSizeForRequest = 0;
        filesIndexForRequest.push(i);
        totalSizeForRequest += file.fileSize;
    }
    if (filesIndexForRequest.length > 0 && totalSizeForRequest > 0) {
        filesIndexToSend.push(filesIndexForRequest.join(','));
    }
    state.filesIndexToSend = filesIndexToSend;
    if (filesIndexToSend.length > 0) {
        SendHttpRequest(filesIndexToSend.shift(), state);
    }
}
var c_uploadUrl;

function SendHttpRequest(filesIndex, state) {
    if (fIsNullOrUndefined(filesIndex)) {
        return;
    }
    var files = state.files;
    var indexes = filesIndex.split(',');

    if (fIsNullOrUndefined(indexes) || indexes.length <= 0)
        return;
    var totalSizeForRequest = 0;
    var fd = new FormData();

    for (var fi = 0; fi < indexes.length; fi++) {
        var f = files[indexes[fi]];

        fd.append(f.fileName, f.droppedFile);
        f.status = FileStatus.UPLOADING;
        totalSizeForRequest += f.fileSize;
    }
    var xhr = new XMLHttpRequest();
    var rootFolder = g_currentControl.strSiteRelativeUrl + g_currentControl.strRootFolder;
    var uploadUrl = g_currentControl.strSiteUrl + c_uploadUrl + g_currentControl.strListName + "&RootFolder=";
    var subFolder = files[indexes[0]].subFolder;

    if (!fIsNullOrUndefined(subFolder)) {
        rootFolder = rootFolder + subFolder;
    }
    if (!fIsNullOrUndefined(rootFolder)) {
        uploadUrl = uploadUrl + escapeProperly(rootFolder);
    }
    xhr.open('POST', escapeProperlyCore(uploadUrl, true), true);
    xhr.setRequestHeader("Content-length", totalSizeForRequest);
    xhr.setRequestHeader("x-requestdigest", document.forms[MSOWebPartPageFormName]["__REQUESTDIGEST"].value);
    xhr.filesIndex = filesIndex;
    var onprogressFunc = function(evt) {
        if (Boolean(evt.lengthComputable)) {
            state.totalBytesInProgress = state.totalBytesProcessed + evt.loaded;
            UpdateProgressBar(ProgressMessage.UPLOADING, state);
        }
    };
    var xhrUpload = xhr.upload;

    if (typeof xhrUpload != 'undefined') {
        xhrUpload.addEventListener("progress", onprogressFunc, false);
    }
    xhr.onreadystatechange = function(aEvt) {
        var xmlreq = aEvt.target;

        if (xmlreq.readyState == 4) {
            var resp = xmlreq.responseText;
            var respList = null;

            if (!fIsNullOrUndefined(resp)) {
                try {
                    respList = eval('(' + xmlreq.responseText + ')');
                }
                catch (e) {
                    respList = null;
                }
            }
            var filesInRequest = xmlreq.filesIndex.split(',');

            state.uploadingCount += filesInRequest.length;
            for (var idx = 0; idx < filesInRequest.length; idx++) {
                var _file = files[filesInRequest[idx]];
                var respT;

                if (!fIsNullOrUndefined(respList))
                    respT = respList[idx];
                if (xmlreq.status == 200 && respT == "1") {
                    _file.status = FileStatus.UPLOADED;
                    state.succeededCount++;
                }
                else {
                    _file.status = FileStatus.FAILED;
                    _file.statusText = respT;
                    state.failedCount++;
                }
                state.totalBytesProcessed += _file.fileSize;
            }
            state.totalBytesInProgress = 0;
            if (state.totalBytes > 0)
                state.percentDone = state.totalBytesProcessed / state.totalBytes;
            else
                state.percentDone = 1;
            if (state.percentDone < 1)
                UpdateProgressBar(ProgressMessage.UPLOADING, state);
            if (state.percentDone == 1) {
                state.status = UploadStatus.FINISHED;
            }
            RefreshResult(state);
            state.request = null;
        }
    };
    state.request = xhr;
    xhr.send(fd);
}
var c_progInfoID;
var c_progInfoClass;
var c_progInfoClassInline;
var c_progInfoTableID;
var c_progInfoTableClass;
var c_progMessageClass;
var c_progIconID;
var c_progTextID;
var c_progCancelBtnID;
var c_progRefreshBtnID;
var C_detailRowId;
var C_progImgClass;
var c_progMeterTdID;
var c_progMeterID;
var c_progInfoCloseID;
var c_progTableHTML;
var c_progTableHTMLInline;
var c_failedLinkABegin;
var c_failedLinkAllErrorsABegin;

function UpdateProgressBar(messageType, state) {
    if (g_currentControl.fHideProgressBar)
        return;
    var progBar = g_currentControl.elmProgressBar;
    var dropTarget = g_currentControl.elmDropTargetElement;
    var siteUrl = g_currentControl.strSiteUrl;

    if (messageType > 4) {
        if (!fIsNullOrUndefined(progBar))
            progBar.style.display = "none";
        return;
    }
    if (fIsNullOrUndefined(progBar) || fIsNullOrUndefined(document.getElementById(dropTarget.id + c_progTextID))) {
        if (g_currentControl.fInlineProgress) {
            if (fIsNullOrUndefined(progBar)) {
                progBar = document.createElement("DIV");
            }
            progBar.id = dropTarget.id + c_progInfoID;
            progBar.className = c_progInfoClassInline;
            if (!fIsNullOrUndefined(progBar)) {
                var tableHTML = String.format(c_progTableHTMLInline, dropTarget.id + c_progInfoTableID, dropTarget.id + c_progTextID, dropTarget.id + c_progMeterTdID, dropTarget.id + c_progCancelBtnID, Strings.STS.L_CancelButtonCaption, c_progMessageClass, dropTarget.id + c_progInfoCloseID, Strings.STS.L_DismissButtonCaption);

                progBar.innerHTML = tableHTML;
                var wpqId = g_currentCtx.wpq;
                var heroTbl = document.getElementById("Hero-" + wpqId);
                var pnode;

                if (!fIsNullOrUndefined(heroTbl)) {
                    pnode = heroTbl.parentNode;
                    if (!fIsNullOrUndefined(pnode))
                        pnode.insertBefore(progBar, heroTbl);
                }
                else {
                    pnode = document.getElementById('script' + wpqId);
                    if (!fIsNullOrUndefined(pnode) && !fIsNullOrUndefined(pnode.firstChild))
                        pnode.insertBefore(progBar, pnode.firstChild);
                }
                if (fIsNullOrUndefined(pnode))
                    return;
                g_currentControl.elmProgressBar = progBar;
                var progMeter = SPProgressMeter.CreateMeter(0);

                progMeter.id = dropTarget.id + c_progMeterID;
                if (!fIsNullOrUndefined(progMeter)) {
                    var progTd = document.getElementById(dropTarget.id + c_progMeterTdID);

                    if (!fIsNullOrUndefined(progTd))
                        progTd.appendChild(progMeter);
                }
            }
        }
        else {
            if (fIsNullOrUndefined(progBar)) {
                progBar = document.createElement("DIV");
            }
            progBar.id = dropTarget.id + c_progInfoID;
            progBar.className = c_progInfoClass;
            if (!fIsNullOrUndefined(progBar)) {
                var tableHTMLInline = String.format(c_progTableHTML, dropTarget.id + c_progInfoTableID, dropTarget.id + c_progIconID, dropTarget.id + c_progTextID, dropTarget.id + c_progCancelBtnID, Strings.STS.L_CancelButtonCaption, c_progMessageClass, dropTarget.id + c_progRefreshBtnID, Strings.STS.L_RefreshButtonCaption);

                progBar.innerHTML = tableHTMLInline;
                g_currentControl.elmProgressBar = progBar;
                var parentNode = dropTarget.parentNode;

                parentNode.insertBefore(progBar, dropTarget);
            }
        }
    }
    if (g_currentControl.fInlineProgress) {
        var heroElm = document.getElementById("Hero-" + g_currentCtx.wpq);

        if (!fIsNullOrUndefined(heroElm))
            heroElm.style.display = "none";
    }
    else {
        removeClass(progBar, 'ms-status-blue');
        removeClass(progBar, 'ms-status-green');
        removeClass(progBar, 'ms-status-red');
    }
    progBar.style.display = "";
    var progIcon = document.getElementById(dropTarget.id + c_progIconID);
    var progText = document.getElementById(dropTarget.id + c_progTextID);
    var progCancelBtn = document.getElementById(dropTarget.id + c_progCancelBtnID);

    progMeter = document.getElementById(dropTarget.id + c_progMeterID);
    var progCloseBtn = document.getElementById(dropTarget.id + c_progInfoCloseID);
    var progRefreshBtn = document.getElementById(dropTarget.id + c_progRefreshBtnID);
    var percentDone = 0;

    if (state.totalBytes > 0) {
        percentDone = (state.totalBytesInProgress > state.totalBytesProcessed ? state.totalBytesInProgress : state.totalBytesProcessed) / state.totalBytes;
    }
    var percent = String(Math.round(percentDone > 0 ? percentDone * 100 : 0));
    var iconCircleSrc = siteUrl + "/_layouts/15/images/loadingcirclests16.gif?rev=23";

    switch (messageType) {
    case 1:
        if (!g_currentControl.fInlineProgress) {
            addClass(progBar, 'ms-status-blue');
        }
        if (state.status == UploadStatus.VALIDATING) {
            if (!fIsNullOrUndefined(progIcon)) {
                if (progIcon.src != iconCircleSrc)
                    progIcon.src = iconCircleSrc;
                ShowElement(progIcon);
                if (!g_currentControl.fInlineProgress) {
                    ShowElement(progIcon.parentNode);
                }
            }
            progText.innerHTML = Strings.STS.L_PrepareUpload;
        }
        else {
            HideElement(progIcon);
            if (!g_currentControl.fInlineProgress) {
                HideElement(progIcon.parentNode);
            }
            progText.innerHTML = Strings.STS.L_FinishValidation;
        }
        progCancelBtn.style.display = "none";
        if (!fIsNullOrUndefined(progCloseBtn))
            progCloseBtn.style.display = "none";
        if (!fIsNullOrUndefined(progRefreshBtn))
            progRefreshBtn.style.display = "none";
        break;
    case 2:
        if (!g_currentControl.fInlineProgress) {
            addClass(progBar, 'ms-status-blue');
            ShowElement(progIcon.parentNode);
        }
        if (!fIsNullOrUndefined(progIcon)) {
            if (progIcon.src != iconCircleSrc)
                progIcon.src = iconCircleSrc;
            if (progIcon.style.display != "")
                progIcon.style.display = "";
        }
        progText.innerHTML = String.format(Strings.STS.L_UploadingProgress, state.succeededCount + state.failedCount + state.warnedCount, state.files.length);
        if (!fIsNullOrUndefined(progMeter)) {
            progMeter.style.display = "";
            SPProgressMeter.SetProgress(progMeter, Number(percent));
        }
        progCancelBtn.style.display = "";
        if (!fIsNullOrUndefined(progCloseBtn))
            progCloseBtn.style.display = "none";
        if (!fIsNullOrUndefined(progRefreshBtn))
            progRefreshBtn.style.display = "none";
        break;
    case 3:
        g_currentControl.succeededCount = state.succeededCount;
        g_currentControl.failedCount = state.failedCount;
        g_currentControl.warnedCount = state.warnedCount;
        g_currentControl.files = state.files;
        if (!g_currentControl.fInlineProgress)
            PopulateErrorDetails(true);
        if (state.failedCount + state.warnedCount == 0) {
            if (!g_currentControl.fInlineProgress) {
                addClass(progBar, 'ms-status-green');
                HideElement(progIcon.parentNode);
            }
            else {
                if (!fIsNullOrUndefined(progIcon)) {
                    progIcon.src = siteUrl + "/_layouts/15/images/check.gif?rev=23";
                    progIcon.style.display = "";
                }
            }
            progText.innerHTML = String.format(state.checkedOutCount > 0 ? Strings.STS.L_SucceedMessageWithCheckout : Strings.STS.L_SucceedMessage, String(state.succeededCount), String(state.checkedOutCount));
        }
        else {
            if (!g_currentControl.fInlineProgress) {
                addClass(progBar, 'ms-status-red');
                HideElement(progIcon.parentNode);
            }
            else {
                if (!fIsNullOrUndefined(progIcon)) {
                    progIcon.src = "/_layouts/15/images/error16by16.gif?rev=23";
                    progIcon.style.display = "";
                }
            }
            if (g_currentControl.fInlineProgress) {
                progText.innerHTML = String.format(state.checkedOutCount > 0 ? Strings.STS.L_FailedMessageWithCheckout : Strings.STS.L_FailedMessage, String(state.succeededCount), String(state.failedCount), String(state.checkedOutCount));
                if (g_currentControl.fInlineDisplayError)
                    progText.innerHTML = String.format(state.checkedOutCount > 0 ? Strings.STS.L_FailedMessageWithCheckout : Strings.STS.L_FailedMessage, String(state.succeededCount), String(state.failedCount), String(state.checkedOutCount));
                else
                    progText.innerHTML = String.format(state.checkedOutCount > 0 ? Strings.STS.L_FailedMessageLinkWithCheckout : Strings.STS.L_FailedMessageLink, String(state.succeededCount), String(state.failedCount), c_failedLinkAllErrorsABegin, "</a>", String(state.checkedOutCount));
            }
            else {
                progText.innerHTML = String.format(state.checkedOutCount > 0 ? Strings.STS.L_FailedMessageLinkWithCheckout : Strings.STS.L_FailedMessageLink, String(state.succeededCount), String(state.failedCount), c_failedLinkABegin, "</a>", String(state.checkedOutCount));
            }
        }
        if (!fIsNullOrUndefined(progMeter))
            progMeter.style.display = "none";
        progCancelBtn.style.display = "none";
        if (!fIsNullOrUndefined(progCloseBtn))
            progCloseBtn.style.display = "";
        if (!fIsNullOrUndefined(progRefreshBtn))
            progRefreshBtn.style.display = "";
        break;
    case 4:
        if (!g_currentControl.fInlineProgress) {
            addClass(progBar, 'ms-status-blue');
            HideElement(progIcon.parentNode);
        }
        else {
            if (!fIsNullOrUndefined(progIcon)) {
                progIcon.src = siteUrl + "/_layouts/15/images/check.gif?rev=23";
                ShowElement(progIcon);
            }
        }
        if (state.files.length > 1)
            progText.innerHTML = Strings.STS.L_CancelledMessageMultiple;
        else
            progText.innerHTML = Strings.STS.L_CancelledMessageSingle;
        progCancelBtn.style.display = "none";
        if (!fIsNullOrUndefined(progMeter))
            progMeter.style.display = "none";
        if (!fIsNullOrUndefined(progCloseBtn))
            progCloseBtn.style.display = "";
        if (!fIsNullOrUndefined(progRefreshBtn))
            progRefreshBtn.style.display = "";
        break;
    default:
        progBar.style.display = "none";
    }
}
function CloseProgressBar(evt) {
    var progBar = g_currentControl.elmProgressBar;

    if (!fIsNullOrUndefined(progBar)) {
        progBar.style.display = "none";
    }
    var progBarDetail = document.getElementById(C_DETAILDIVID);

    if (!fIsNullOrUndefined(progBarDetail)) {
        progBarDetail.style.display = "none";
    }
    if (g_currentControl.fInlineProgress) {
        var heroTbl = document.getElementById("Hero-" + g_currentCtx.wpq);

        if (!fIsNullOrUndefined(heroTbl))
            heroTbl.style.display = "";
    }
    cancelDefault(evt);
}
function cancelTask(evt) {
    var cctask = g_currentControl.cctask;

    if (!fIsNullOrUndefined(cctask)) {
        cctask.cancel(SP.Utilities.Task.CancelType.explicit);
        if (!fIsNullOrUndefined(evt) && !fIsNullOrUndefined(evt.target))
            evt.target.disabled = true;
        FullRefresh(g_currentCtx);
    }
    cancelDefault(evt);
}
function getUploadType() {
ULSAZP:
    ;
    var uploadType = UploadType.NOT_SUPPORTED;

    if (browseris.safariMobile || browseris.windowsphone7)
        return uploadType;
    if (typeof FormData != 'undefined') {
        return UploadType.HTML5;
    }
    else if (browseris.ie && browseris.ie6up && !browseris.mac) {
        try {
            var ax = new ActiveXObject("SharePoint.DragUploadCtl");

            uploadType = UploadType.ACTIVEX;
        }
        catch (e) {
            uploadType = UploadType.ACTIVEXNA;
        }
    }
    if (uploadType == UploadType.NOT_SUPPORTED || uploadType == UploadType.ACTIVEXNA) {
        if (!fIsNullOrUndefined(g_ctxDict)) {
            for (var ctxId in g_ctxDict) {
                var curCtx = g_ctxDict[ctxId];

                if (!fIsNullOrUndefined(curCtx) && !fIsNullOrUndefined(curCtx.ListSchema) && curCtx.ListSchema.IsDocLib) {
                    var heroId = curCtx.heroId;

                    if (Boolean(heroId)) {
                        var queryString = '#Hero-' + curCtx.wpq + ' a#' + heroId;
                        var heroRow = document.querySelector(queryString);

                        if (!fIsNullOrUndefined(heroRow)) {
                            heroRow.parentNode.innerHTML = RenderHeroLink(curCtx, true);
                            if (curCtx.ListTemplateType == 115) {
                                var WPQ = curCtx.wpq;

                                if (eval("typeof DefaultNewButtonWebPart" + WPQ + " != 'undefined'")) {
                                    if (Boolean(curCtx.heroId)) {
                                        var eleLink = document.getElementById(curCtx.heroId);

                                        if (eleLink != null)
                                            eval("DefaultNewButtonWebPart" + WPQ + "(eleLink);");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return uploadType;
}
function checkInlineDisplay(dropTargetElement) {
    var curCtx = getCtx(dropTargetElement.id);

    if (!fIsNullOrUndefined(curCtx) && Boolean(curCtx.IsClientRendering) && !Boolean(curCtx.inGridMode) && !Boolean(curCtx.ListSchema.group1))
        return true;
    else
        return false;
}
function checkInlineDisplayError(dropTargetElement) {
    var curCtx = getCtx(dropTargetElement.id);

    if (!fIsNullOrUndefined(curCtx) && curCtx.listTemplate == 109 && (curCtx.BaseViewID == "2" || curCtx.BaseViewID == "6"))
        return false;
    else
        return true;
}
function ShowErrorDialog(errorMsg, callback) {
    ShowErrorDialogCore(Strings.STS.L_UploadDialogTitle, errorMsg, callback);
}
function DismissDlg(btn) {
    var result = SP.UI.DialogResult.cancel;

    if (!fIsNullOrUndefined(btn)) {
        if (btn.id == "js-dnd-OKBtnDismissDlg")
            result = SP.UI.DialogResult.OK;
    }
    var dlg = typeof window.top.g_childDialog != "undefined" ? window.top.g_childDialog : undefined;

    if (Boolean(dlg)) {
        dlg.close(result);
    }
}
function ResolveConflict(state, index) {
    var cfltFiles = state.conflictFiles;
    var files = state.files;

    if (index >= cfltFiles.length) {
        state.status = UploadStatus.VALIDATED;
        UpdateProgressBar(ProgressMessage.VALIDATION, state);
        StartUpload(state);
        return;
    }
    if (cfltFiles[index] == -1) {
        ResolveConflict(state, index + 1);
        return;
    }
    var cfltFile = files[cfltFiles[index]];
    var remainingCount = cfltFiles.length - index - 1;
    var callbackFunc = function(dialogResult, returnValue) {
    ULSAZP:
        ;
        if (dialogResult == SP.UI.DialogResult.cancel) {
            state.cancelConfirm = CancelConfirmationStatus.CONFIRMEDYES;
            cancelTask(null);
            return;
        }
        else {
            var overwriteOption = returnValue["overwriteOption"];
            var doRest = returnValue["doRest"];
        }
        var endFileIdx = index + 1;

        if (doRest) {
            endFileIdx = cfltFiles.length;
        }
        var isFolder = cfltFile.isFolder;

        for (var i = index; i < endFileIdx; i++) {
            if (cfltFiles[i] == -1)
                continue;
            var curFile = files[cfltFiles[i]];

            if (isFolder != curFile.isFolder)
                continue;
            if (overwriteOption == 1) {
                curFile.overwrite = false;
                curFile.status = FileStatus.SKIP;
                curFile.statusText = Strings.STS.L_NoOverwrite;
                cfltFiles[i] = -1;
                if (curFile.isFolder) {
                    var curFolder = unescapeProperlyWp(curFile.relativeFolder + curFile.fileName);

                    for (var j = i + 1; j < cfltFiles.length; j++) {
                        if (cfltFiles[j] == -1)
                            continue;
                        var _file = files[cfltFiles[j]];
                        var relFolder = unescapeProperlyWp(_file.relativeFolder);

                        if (relFolder.indexOf(curFolder) == 0) {
                            _file.overwrite = false;
                            _file.status = FileStatus.SKIP;
                            _file.statusText = Strings.STS.L_NoOverwrite;
                            cfltFiles[j] = -1;
                        }
                    }
                    for (var k = cfltFiles[i] + 1; k < files.length; k++) {
                        var curfile = files[k];

                        if (curfile.status == FileStatus.SKIP)
                            continue;
                        var relFld = unescapeProperlyWp(curfile.relativeFolder);

                        if (relFld.indexOf(curFolder) == 0) {
                            curfile.overwrite = false;
                            curfile.status = FileStatus.SKIP;
                            curfile.statusText = Strings.STS.L_NoOverwrite;
                        }
                    }
                }
            }
            else if (overwriteOption == 0) {
                curFile.overwrite = true;
                cfltFiles[i] = -1;
            }
            else
                continue;
            if (curFile.status != FileStatus.SKIP) {
                state.totalBytes += curFile.fileSize;
            }
        }
        var ni = index + 1;

        for (ni = index + 1; ni < cfltFiles.length; ni++) {
            if (cfltFiles[ni] != -1)
                break;
        }
        state.conflictFiles = cfltFiles;
        ResolveConflict(state, ni);
    };

    ShowConflictDialog(cfltFile.fileName, cfltFile.isFolder, callbackFunc, remainingCount);
}
var c_doRestDiv;
var c_conflictButtons;

function ShowConflictDialog(fileName, isFolder, callback, remainingCount) {
    var dialogTitle;
    var replaceBtnText;
    var noReplaceBtnText;

    if (isFolder) {
        dialogTitle = Strings.STS.L_ConflictMergeTitle;
        replaceBtnText = Strings.STS.L_ConflictMergeFolderButton;
        noReplaceBtnText = Strings.STS.L_ConflictNoUploadButton;
    }
    else {
        dialogTitle = Strings.STS.L_ConflictReplaceTitle;
        replaceBtnText = Strings.STS.L_ConflictReplaceButton;
        noReplaceBtnText = Strings.STS.L_ConflictNoUploadButton;
    }
    var innerHtmlStr = [];

    innerHtmlStr.push("<div class='ms-core-form-section'>");
    if (isFolder)
        innerHtmlStr.push(String.format(Strings.STS.L_ConflictFolderMessage, fileName));
    else
        innerHtmlStr.push(String.format(Strings.STS.L_ConflictMessage, fileName));
    innerHtmlStr.push("</div>");
    innerHtmlStr.push("<div class='ms-core-form-section'>");
    if (!fIsNullOrUndefined(remainingCount)) {
        if (Number(remainingCount) == 1) {
            innerHtmlStr.push(String.format(c_doRestDiv, Strings.STS.L_ConflictApplyRestForOneCheckBox));
        }
        else if (Number(remainingCount) > 1) {
            innerHtmlStr.push(String.format(c_doRestDiv, String.format(Strings.STS.L_ConflictApplyRestWithCountCheckBox, remainingCount)));
        }
    }
    else {
        innerHtmlStr.push(String.format(c_doRestDiv, Strings.STS.L_ConflictApplyRestCheckBox));
    }
    innerHtmlStr.push(String.format(c_conflictButtons, replaceBtnText, noReplaceBtnText));
    innerHtmlStr.push("</div>");
    var divElem = document.createElement("DIV");

    divElem.innerHTML = innerHtmlStr.join('');
    var dopt = {
        html: divElem,
        showClose: true,
        title: dialogTitle,
        dialogReturnValueCallback: callback
    };
    var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
    var btn = document.getElementById("ms-conflictDlgNoUploadBtn");

    if (Boolean(btn))
        btn.focus();
}
function DismissConflictDlg(btn, evt) {
    var result = SP.UI.DialogResult.cancel;
    var overwriteOption;
    var doRest = false;

    if (!fIsNullOrUndefined(btn)) {
        result = SP.UI.DialogResult.OK;
        if (btn.id == "ms-conflictDlgReplaceBtn")
            overwriteOption = 0;
        else if (btn.id == "ms-conflictDlgNoUploadBtn")
            overwriteOption = 1;
        else if (btn.id == "ms-conflictDlgRenameBtn")
            overwriteOption = 2;
        result = SP.UI.DialogResult.OK;
        var doRestElem = document.getElementById("ms-conflictDlgDoRest");

        if (Boolean(doRestElem)) {
            doRest = doRestElem.checked;
        }
    }
    var dlg = SP.UI.ModalDialog.get_childDialog();

    if (Boolean(dlg)) {
        if (result == SP.UI.DialogResult.OK) {
            var returnVal = {
                'overwriteOption': overwriteOption,
                'doRest': doRest
            };

            dlg.set_returnValue(returnVal);
        }
        dlg.close(result);
    }
    cancelDefault(evt);
}
var C_DETAILDIVID;
var C_ERRTABLE;
var C_ERRITEM;
var C_ERRITEMNAME;
var C_ERRITEMMSG;

function PopulateErrorDetails(hide) {
    var files = g_currentControl.files;
    var messageElem = g_currentControl.elmProgressBar;

    if (fIsNullOrUndefined(files) || fIsNullOrUndefined(messageElem))
        return;
    var siteUrl = g_currentControl.strSiteUrl;
    var firstItem = false;
    var errTable = document.getElementById(C_DETAILDIVID);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file.status == FileStatus.FAILED || file.status == FileStatus.WARNING) {
            if (!firstItem) {
                firstItem = true;
                if (fIsNullOrUndefined(errTable)) {
                    errTable = document.createElement("DIV");
                    errTable.className = C_ERRTABLE;
                    errTable.id = C_DETAILDIVID;
                    var dropTarget = g_currentControl.elmDropTargetElement;

                    if (!fIsNullOrUndefined(dropTarget)) {
                        dropTarget.parentNode.insertBefore(errTable, dropTarget);
                    }
                }
                else {
                    errTable.innerHTML = "";
                }
            }
            if (fIsNullOrUndefined(errTable))
                return;
            var errRow = document.createElement("DIV");

            errRow.className = "ms-tableRow " + C_ERRITEM;
            errTable.appendChild(errRow);
            var errImgTd = document.createElement("DIV");

            errImgTd.className = "ms-tableCell " + C_progImgClass;
            errRow.appendChild(errImgTd);
            var errImg = document.createElement("IMG");

            errImg.className = 'ms-verticalAlignMiddle';
            if (file.status == FileStatus.FAILED) {
                errImg.src = siteUrl + "/_layouts/15/images/cell-error.png?rev=23";
            }
            else {
                errImg.src = siteUrl + "/_layouts/15/images/warn16.gif?rev=23";
            }
            errImgTd.appendChild(errImg);
            if (!fIsNullOrUndefined(file.fileName)) {
                var errFileNameTd = document.createElement("DIV");

                errFileNameTd.className = "ms-tableCell " + C_ERRITEMNAME;
                errRow.appendChild(errFileNameTd);
                if (!fIsNullOrUndefined(file.fileName))
                    errFileNameTd.innerHTML = file.fileName;
            }
            if (!fIsNullOrUndefined(file.statusText)) {
                var errFileMsgTd = document.createElement("DIV");

                errFileMsgTd.className = "ms-tableCell " + C_ERRITEMMSG;
                errRow.appendChild(errFileMsgTd);
                if (!fIsNullOrUndefined(file.statusText))
                    errFileMsgTd.innerHTML = unescapeProperlyWp(file.statusText);
            }
        }
    }
    if (!fIsNullOrUndefined(errTable)) {
        if (hide)
            errTable.style.display = "none";
        else
            errTable.style.display = "";
    }
}
function ShowHideErrorDetails(evt) {
    var detailElem = document.getElementById(C_DETAILDIVID);

    if (!fIsNullOrUndefined(detailElem)) {
        if (detailElem.style.display == "") {
            detailElem.style.display = "none";
        }
        else {
            detailElem.style.display = "";
        }
    }
    cancelDefault(evt);
}
function fValidDrag(evt, dropElem) {
    var fValid = false;
    var pos = SPDragDropManager.DragStartPos;

    if (fIsNullOrUndefined(dropElem))
        return false;
    var absLeft = AbsLeft(dropElem);
    var absTop = AbsTop(dropElem);

    if (!fIsNullOrUndefined(pos) && pos.X > 0 && pos.Y > 0) {
        fValid = pos.X < absLeft && pos.X > absLeft + dropElem.clientWidth && pos.Y < absTop && pos.Y > absTop + dropElem.clientHeight;
        if (!fValid) {
            if (evt.dataTransfer)
                evt.dataTransfer.dropEffect = "none";
            else if (evt.rawEvent)
                evt.rawEvent.dataTransfer.dropEffect = "none";
            return fValid;
        }
    }
    if (g_uploadType == UploadType.ACTIVEX) {
        if (!fIsNullOrUndefined(evt) && (!fIsNullOrUndefined(evt.rawEvent) && !fIsNullOrUndefined(evt.rawEvent.dataTransfer) && (fIsNullOrUndefined(evt.rawEvent.dataTransfer.dropEffect) || evt.rawEvent.dataTransfer.dropEffect == "" || evt.rawEvent.dataTransfer.dropEffect == "none")) || !fIsNullOrUndefined(evt.dataTransfer) && (fIsNullOrUndefined(evt.dataTransfer.dropEffect) || evt.dataTransfer.dropEffect == "" || evt.dataTransfer.dropEffect == "none")) {
            fValid = true;
        }
    }
    else if (g_uploadType == UploadType.HTML5) {
        if (!fIsNullOrUndefined(evt) && !fIsNullOrUndefined(evt.dataTransfer) && !fIsNullOrUndefined(evt.dataTransfer.types)) {
            var dtTypes = evt.dataTransfer.types;

            if (!fIsNullOrUndefined(dtTypes)) {
                var count = dtTypes.length;

                if (fIsNullOrUndefined(count))
                    count = 0;
                for (var ii = 0; ii < count; ii++) {
                    var type = dtTypes[ii];

                    if (type == 'Files') {
                        fValid = true;
                        break;
                    }
                }
            }
        }
        else if (browseris.safari && !fIsNullOrUndefined(evt) && !fIsNullOrUndefined(evt.dataTransfer) && fIsNullOrUndefined(evt.dataTransfer.types)) {
            fValid = true;
        }
    }
    return fValid;
}
function getCtx(webPartID) {
    if (fIsNullOrUndefined(g_ctxDict))
        return undefined;
    for (var contextId in g_ctxDict) {
        var contx = g_ctxDict[contextId];

        if (webPartID == "WebPart" + contx.wpq)
            return contx;
    }
    return undefined;
}
function unescapeProperlyWp(str) {
    if (str == undefined)
        return str;
    else
        return unescapeProperly(str);
}
function PostRefreshFixUp() {
ULSAZP:
    ;
    var clvp = g_currentCtx.clvp;

    ctxInitItemState(g_currentCtx.clvp.ctx);
    ClearSelectedItemsDict(g_currentCtx);
    if (typeof clvp.tab.onmouseover == 'undefined' || clvp.tab.onmouseover == null)
        clvp.tab.onmouseover = g_currentCtx.TableMouseoverHandler;
    if (g_currentCtx.SelectAllCbx != null && (typeof clvp.ctx.SelectAllCbx.onfocus == 'undefined' || g_currentCtx.SelectAllCbx.onfocus == null))
        g_currentCtx.SelectAllCbx.onfocus = g_currentCtx.TableCbxFocusHandler;
    clvp.InvalidateEcbInfo();
    clvp.ResetSelection();
    clvp.SyncPagingTables();
    if (typeof ProcessImn != "undefined") {
        imnCount = 0;
        bIMNOnloadAttached = false;
        ProcessImn();
    }
}
var pluginID;

function startDragDownload(curCtx, dragData) {
    if (!curCtx.BasePermissions.OpenItems) {
        return;
    }
    if (fIsNullOrUndefined(dragData) || fIsNullOrUndefined(curCtx))
        return;
    var plugin = document.getElementById(pluginID);

    if (!Boolean(plugin)) {
        plugin = CreateDragDownloadPlugin();
    }
    if (Boolean(plugin)) {
        if (!fIsNullOrUndefined(dragData)) {
            plugin.SiteUrl = curCtx.HttpRoot;
            plugin.InitDownload();
            for (var i = 0; i < dragData.length; i++) {
                var dd = dragData[i];

                plugin.AddFile(dd.fileName, getHostUrl(curCtx.HttpRoot) + dd.fileUrl);
            }
            plugin.StartDownload();
        }
    }
}
var downloadAXID;

function CreateDragDownloadPlugin() {
ULSAZP:
    ;
    if (Boolean(window.ActiveXObject)) {
        try {
            var ax = new ActiveXObject("SharePoint.DragDownloadCtl");

            if (Boolean(ax)) {
                var axObj = document.getElementById(downloadAXID);

                if (!Boolean(axObj)) {
                    var axNode = document.createElement("object");

                    axNode.id = downloadAXID;
                    axNode.classid = 'CLSID:3B0BD075-929C-4E52-AAD1-458C81A10B24';
                    axNode.style.display = 'none';
                    document.body.appendChild(axNode);
                    axObj = document.getElementById(downloadAXID);
                    return axObj;
                }
                else
                    return axObj;
            }
            else
                return null;
        }
        catch (e) {
            return null;
        }
    }
    else {
        return CreateNPApiOnWindowsPlugin('application/x-sharepoint-dragdownload');
    }
}
function resetDragDownload() {
ULSAZP:
    ;
}
function ShowErrorInvalidFile() {
ULSAZP:
    ;
    ShowErrorDialogCore(Strings.STS.L_DragDropNotWorkingErrorTitle, Strings.STS.L_DragDropInvalidFile, null);
}
$_global_dragdrop();
