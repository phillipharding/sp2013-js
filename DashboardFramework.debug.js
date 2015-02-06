function ULSh2q(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="DashboardFramework.debug.js";return o;}
// DashboardFramework.js
//


Type.registerNamespace('PPSMA');

PPSMA.CancellableState = function() {}
PPSMA.CancellableState.prototype = {
    initialized: 0, 
    updating: 1, 
    stopped: 2
}
PPSMA.CancellableState.registerEnum('PPSMA.CancellableState', false);


PPSMA.CommonContainerType = function() {}
PPSMA.CommonContainerType.prototype = {
    autosize: 0, 
    autoWidth: 1, 
    autoHeight: 2, 
    explicit: 3, 
    undefined: -1
}
PPSMA.CommonContainerType.registerEnum('PPSMA.CommonContainerType', false);


PPSMA.ChartDomEvent = function PPSMA_ChartDomEvent(button, offsetX, offsetY, srcElement, uiReferenceElement) {ULSh2q:;
    this.type = PPSMA.ChartDomEventTypes.ppsContextMenu;
    this.button = button;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.srcElement = srcElement;
    this.uiReferenceElement = uiReferenceElement;
}


PPSMA.WebRequestDetails = function PPSMA_WebRequestDetails(url, body, httpVerb, contentType, completedCallback) {ULSh2q:;
    this.url = url;
    this.body = body;
    this.httpVerb = httpVerb;
    this.contentType = contentType;
    this.completedCallback = completedCallback;
}


PPSMA._stackedZoneState = function() {}
PPSMA._stackedZoneState.prototype = {
    hidden: 0, 
    notStacked: 1, 
    selected: 2, 
    stacked: 3
}
PPSMA._stackedZoneState.registerEnum('PPSMA._stackedZoneState', false);


PPSMA.TraceElement = function() {}
PPSMA.TraceElement.prototype = {
    basic: 0, 
    attributes: 1, 
    positions: 2, 
    innerText: 4, 
    innerHtml: 8, 
    offsetParent: 16, 
    parentNode: 32, 
    accessability: 64, 
    all: 65535
}
PPSMA.TraceElement.registerEnum('PPSMA.TraceElement', true);


PPSMA.DecompTupleRecord = function PPSMA_DecompTupleRecord() {}


PPSMA.DecompQueryParameters = function PPSMA_DecompQueryParameters() {}


PPSMA.DecompRenderResultNode = function PPSMA_DecompRenderResultNode() {}


PPSMA.DecompRenderResultLevel = function PPSMA_DecompRenderResultLevel() {}


PPSMA.DecompRenderResultRecord = function PPSMA_DecompRenderResultRecord() {}


PPSMA.DecompMemberProperty = function PPSMA_DecompMemberProperty() {}


PPSMA.DecompMemberProperties = function PPSMA_DecompMemberProperties() {}


PPSMA.DecompNavigationAction = function PPSMA_DecompNavigationAction() {}


PPSMA.DecompNavigationGroup = function PPSMA_DecompNavigationGroup() {}


PPSMA.DecompNavigationList = function PPSMA_DecompNavigationList() {}


PPSMA.AjaxRenderResultRecord = function PPSMA_AjaxRenderResultRecord() {}


PPSMA.ClientConditionalVisibilityRecord = function PPSMA_ClientConditionalVisibilityRecord() {}


PPSMA.ClientConnectionManagerRecord = function PPSMA_ClientConnectionManagerRecord() {}


PPSMA.ClientConnectionRecord = function PPSMA_ClientConnectionRecord() {}


PPSMA.ClientConsumerRecord = function PPSMA_ClientConsumerRecord(record, height, width, providerSelections) {ULSh2q:;
    this.Id = record.Id;
    this.ClientId = record.ClientId;
    this.Configuration = record.Configuration;
    this.AssemblyQualifiedName = record.AssemblyQualifiedName;
    this.ConsumerInputs = record.ConsumerInputs;
    this.ViewState = record.ViewState;
    this.Height = height;
    this.Width = width;
    this.InUseProviderParameterNames = record.InUseProviderParameterNames;
    this.ProviderSelections = providerSelections;
}


PPSMA.ClientParameterUpdateAction = function() {}
PPSMA.ClientParameterUpdateAction.prototype = {
    none: 0, 
    postbackRender: 1, 
    ajaxRender: 2
}
PPSMA.ClientParameterUpdateAction.registerEnum('PPSMA.ClientParameterUpdateAction', false);


PPSMA.ClientParameterRecord = function PPSMA_ClientParameterRecord() {}


PPSMA.ClientProviderRecord = function PPSMA_ClientProviderRecord(record) {ULSh2q:;
    this.Id = record.Id;
    this.ClientId = record.ClientId;
    this.Configuration = record.Configuration;
    this.AssemblyQualifiedName = record.AssemblyQualifiedName;
    this.ConsumerInputs = record.ConsumerInputs;
    this.ViewState = record.ViewState;
}


PPSMA.ClientTransformerRecord = function PPSMA_ClientTransformerRecord() {}


PPSMA.ClientUpdateParameterRecord = function PPSMA_ClientUpdateParameterRecord(clientId, name, selections) {ULSh2q:;
    this.ClientId = clientId;
    this.Name = name;
    this.Selections = selections;
}


PPSMA.ClientVisibilityConnectionRecord = function PPSMA_ClientVisibilityConnectionRecord() {}


PPSMA.ClientWebPartRecord = function PPSMA_ClientWebPartRecord() {}


PPSMA.ExportFormat = function() {}
PPSMA.ExportFormat.prototype = {
    excel: 0, 
    powerPoint: 1
}
PPSMA.ExportFormat.registerEnum('PPSMA.ExportFormat', false);


PPSMA.ExportSettings = function PPSMA_ExportSettings() {}


PPSMA._clientParameterState = function() {}
PPSMA._clientParameterState.prototype = {
    pendingChange: 1, 
    changed: 2
}
PPSMA._clientParameterState.registerEnum('PPSMA._clientParameterState', false);


PPSMA.ClientVisibilityState = function() {}
PPSMA.ClientVisibilityState.prototype = {
    unknown: 0, 
    pendingChange: 1, 
    visible: 2, 
    hidden: 3
}
PPSMA.ClientVisibilityState.registerEnum('PPSMA.ClientVisibilityState', false);


PPSMA.WebPartRenderAction = function() {}
PPSMA.WebPartRenderAction.prototype = {
    none: 0, 
    wireframe: 1, 
    render: 2
}
PPSMA.WebPartRenderAction.registerEnum('PPSMA.WebPartRenderAction', false);


PPSMA.FilterUpdateMode = function() {}
PPSMA.FilterUpdateMode.prototype = {
    all: 0, 
    filtersOnly: 1, 
    nonFiltersOnly: 2
}
PPSMA.FilterUpdateMode.registerEnum('PPSMA.FilterUpdateMode', false);


PPSMA.PerformanceMarker = function() {}
PPSMA.PerformanceMarker.prototype = {
    clientWebPartResponseTime: 0, 
    clientWebPartHtmlAssignTime: 1, 
    clientWebPartScriptEvalTime: 2, 
    genericTime: 3
}
PPSMA.PerformanceMarker.registerEnum('PPSMA.PerformanceMarker', false);


PPSMA.CancellableWebRequest = function PPSMA_CancellableWebRequest(containerElement, messageType, loadingImagePath, uniqueId, pos) {ULSh2q:;
    this.$$d_stopLoad_Click = Function.createDelegate(this, this.stopLoad_Click);
    this._state = 0;
    this._events$1 = new Sys.EventHandlerList();
    PPSMA.CancellableWebRequest.initializeBase(this);
    this._loadingImageUrl = loadingImagePath;
    this._messageType = messageType;
    this._waitIndicatorDivId = PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + uniqueId;
    this._messageId = PPSMA.RenderWebRequest.waiT_INDICATOR_MESSAGE_PREFIX + uniqueId;
    this._actionId = PPSMA.RenderWebRequest.waiT_INDICATOR_ACTION_PREFIX + uniqueId;
    this._waitImgId = PPSMA.RenderWebRequest.waiT_INDICATOR_IMAGE_PREFIX + uniqueId;
    PPSMA.RenderWebRequest.createPendingRequestUI(containerElement, this._waitIndicatorDivId, this._loadingImageUrl, this._messageId, this._messageType, this.$$d_stopLoad_Click, window.document, this._actionId, this._waitImgId, pos);
    this._state = PPSMA.CancellableState.updating;
}
PPSMA.CancellableWebRequest.prototype = {
    _messageType: 0,
    _webRequestDetails$1: null,
    
    dispose: function PPSMA_CancellableWebRequest$dispose() {ULSh2q:;
        this.hide();
        this._events$1 = null;
        PPSMA.RenderWebRequest.prototype.dispose.call(this);
    },
    
    add_onCancelled: function PPSMA_CancellableWebRequest$add_onCancelled(value) {ULSh2q:;
        this._events$1.addHandler(PPSMA.CancellableWebRequest._eventKey_OnCancelled$p, value);
    },
    remove_onCancelled: function PPSMA_CancellableWebRequest$remove_onCancelled(value) {ULSh2q:;
        this._events$1.removeHandler(PPSMA.CancellableWebRequest._eventKey_OnCancelled$p, value);
    },
    
    _raiseOnCancelled$p$1: function PPSMA_CancellableWebRequest$_raiseOnCancelled$p$1() {ULSh2q:;
        var handler = this._events$1.getHandler(PPSMA.CancellableWebRequest._eventKey_OnCancelled$p);
        if (handler) {
            handler(this, new Sys.EventArgs());
        }
    },
    
    _updateWaitingText$p$1: function PPSMA_CancellableWebRequest$_updateWaitingText$p$1(waitingText) {ULSh2q:;
        var message = $get(this._messageId);
        if (message) {
            message.innerHTML = waitingText;
        }
    },
    
    _updateActionText$p$1: function PPSMA_CancellableWebRequest$_updateActionText$p$1(actionText) {ULSh2q:;
        var action = $get(this._actionId);
        if (action) {
            action.innerHTML = actionText;
            action.title = actionText;
        }
    },
    
    _setLoadingUI$p$1: function PPSMA_CancellableWebRequest$_setLoadingUI$p$1() {ULSh2q:;
        switch (this._messageType) {
            case PPSMA.RenderWebRequest.msgtypE_LOADING:
            case PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE:
                this._updateWaitingText$p$1(PPSMA.SR.Dashboard_WebRequest_Loading);
                break;
            case PPSMA.RenderWebRequest.msgtypE_SEARCHING:
                this._updateWaitingText$p$1(PPSMA.SR.Dashboard_WebRequest_Searching);
                break;
        }
        this._updateActionText$p$1(PPSMA.SR.Dashboard_WebRequest_Stop);
        this._toggleWaitingGraphicVisiblity$p$1(true);
    },
    
    _setStoppedUI$p$1: function PPSMA_CancellableWebRequest$_setStoppedUI$p$1() {ULSh2q:;
        this._toggleWaitingGraphicVisiblity$p$1(false);
        this._updateWaitingText$p$1(' ');
        this._updateActionText$p$1(PPSMA.SR.Dashboard_WebRequest_Load);
    },
    
    _toggleWaitingGraphicVisiblity$p$1: function PPSMA_CancellableWebRequest$_toggleWaitingGraphicVisiblity$p$1(show) {ULSh2q:;
        var img = $get(this._waitImgId);
        if (img) {
            if (show) {
                img.style.visibility = 'visible';
            }
            else {
                img.style.visibility = 'hidden';
            }
        }
    },
    
    _setAbortedUI$p$1: function PPSMA_CancellableWebRequest$_setAbortedUI$p$1() {ULSh2q:;
        this.hide();
    },
    
    show: function PPSMA_CancellableWebRequest$show() {ULSh2q:;
        this._setLoadingUI$p$1();
    },
    
    stopLoad_Click: function PPSMA_CancellableWebRequest$stopLoad_Click(e) {ULSh2q:;
        e.stopPropagation();
        if (this._state === PPSMA.CancellableState.updating) {
            this.cancel();
        }
        else if (this._webRequestDetails$1) {
            this._Submit$1(this._webRequestDetails$1);
        }
    },
    
    cancel: function PPSMA_CancellableWebRequest$cancel() {ULSh2q:;
        this._setStoppedUI$p$1();
        if (this._state === PPSMA.CancellableState.stopped) {
            return;
        }
        this._state = PPSMA.CancellableState.stopped;
        this.abortWebRequest();
        this._raiseOnCancelled$p$1();
    },
    
    submit: function PPSMA_CancellableWebRequest$submit(details) {ULSh2q:;
        this._webRequestDetails$1 = details;
        if (this._state === PPSMA.CancellableState.stopped) {
            return;
        }
        this.abortWebRequest();
        this._Submit$1(details);
    },
    
    _Submit$1: function PPSMA_CancellableWebRequest$_Submit$1(details) {ULSh2q:;
        this._state = PPSMA.CancellableState.updating;
        this.show();
        this._webRequest = new Sys.Net.WebRequest();
        this._webRequest.set_url(details.url);
        this._webRequest.set_body(details.body);
        this._webRequest.set_httpVerb(details.httpVerb);
        this._webRequest.get_headers()['Content-Type'] = details.contentType;
        this._webRequest.add_completed(details.completedCallback);
        this._webRequest.invoke();
    },
    
    abort: function PPSMA_CancellableWebRequest$abort() {ULSh2q:;
        this._setAbortedUI$p$1();
        this._state = 0;
        this.abortWebRequest();
    }
}


PPSMA.Dashboard = function PPSMA_Dashboard() {
}
PPSMA.Dashboard.precacheImages = function PPSMA_Dashboard$precacheImages(images) {ULSh2q:;
    precacheImages(images);
}
PPSMA.Dashboard.get__rootElementBounds$i = function PPSMA_Dashboard$get__rootElementBounds$i() {ULSh2q:;
    if (!PPSMA.Dashboard._rootElementBounds) {
        PPSMA.Dashboard._updateRootElementBounds$i();
    }
    return PPSMA.Dashboard._rootElementBounds;
}
PPSMA.Dashboard.set__rootElementBounds$i = function PPSMA_Dashboard$set__rootElementBounds$i(value) {ULSh2q:;
    PPSMA.Dashboard._rootElementBounds = value;
    return value;
}
PPSMA.Dashboard._updateRootElementBounds$i = function PPSMA_Dashboard$_updateRootElementBounds$i() {ULSh2q:;
    if (PPSMA.Dashboard.get__rootElement$i()) {
        var isOpenInNewWindow = (PPSMA.Dashboard.get__rootElement$i().nodeName.toLowerCase() === 'div') ? true : false;
        var scrollbarWidth = (isOpenInNewWindow) ? 0 : 20;
        var rootTopLeft = Sys.UI.DomElement.getLocation(PPSMA.Dashboard.get__rootElement$i());
        var xPos = rootTopLeft.x;
        if (xPos < 0) {
            xPos = 0;
        }
        var width = PPSMA.SizeEx.getClientWidth() - xPos - PPSMA.Dashboard._calculatePadding$p('Right') - scrollbarWidth;
        var toolPanel = $get('MSOTlPn_Tbl');
        if (toolPanel) {
            width = width - toolPanel.offsetWidth;
        }
        if (width < 0) {
            width = 0;
        }
        var height = PPSMA.SizeEx.getClientHeight() - rootTopLeft.y - PPSMA.Dashboard._calculatePadding$p('Bottom') - scrollbarWidth;
        if (height < 0) {
            height = 0;
        }
        PPSMA.Dashboard._rootElementBounds = new Sys.UI.Bounds(rootTopLeft.x, rootTopLeft.y, width, height);
        PPSMA.Dashboard.get__rootElement$i().style.width = PPSMA.Common._toPixels$i(width);
        PPSMA.Dashboard.get__rootElement$i().style.height = PPSMA.Common._toPixels$i(height);
        FixRibbonAndWorkspaceDimensions();;
    }
}
PPSMA.Dashboard._calculatePadding$p = function PPSMA_Dashboard$_calculatePadding$p(position) {ULSh2q:;
    var padding = 0;
    var currentElement = PPSMA.Dashboard.get__rootElement$i();
    while (currentElement.parentNode && currentElement.parentNode.nodeType === 1) {
        currentElement = currentElement.parentNode;
        var paddingCheckValue = parseInt(getStyle(currentElement, 'margin' + position));
        if (!isNaN(paddingCheckValue)) {
            padding += paddingCheckValue;
        }
        paddingCheckValue = parseInt(getStyle(currentElement, 'padding' + position));
        if (!isNaN(paddingCheckValue)) {
            padding += paddingCheckValue;
        }
    }
    return padding;
}
PPSMA.Dashboard.get__rootElement$i = function PPSMA_Dashboard$get__rootElement$i() {ULSh2q:;
    if (!PPSMA.Dashboard._rootElement) {
        PPSMA.Dashboard._rootElement = $get('ppsDashboardRootElement');
    }
    return PPSMA.Dashboard._rootElement;
}
PPSMA.Dashboard.get__viewVerticalPadding$i = function PPSMA_Dashboard$get__viewVerticalPadding$i() {ULSh2q:;
    if (PPSMA.Dashboard._viewVerticalPadding === -1) {
        if (!PPSMA.Dashboard.get__rootElement$i()) {
            PPSMA.Dashboard._viewVerticalPadding = 0;
        }
        else {
            var classElement = PPSMA.Dashboard._findElementWithClass$p(PPSMA.Dashboard.get__rootElement$i(), 'ms-PartSpacingVertical');
            if (isNullOrUndefined(classElement)) {
                PPSMA.Dashboard._viewVerticalPadding = 0;
            }
            else {
                PPSMA.Dashboard._viewVerticalPadding = classElement.offsetHeight;
            }
        }
    }
    return PPSMA.Dashboard._viewVerticalPadding;
}
PPSMA.Dashboard.get__viewHorizontalPadding$i = function PPSMA_Dashboard$get__viewHorizontalPadding$i() {ULSh2q:;
    if (PPSMA.Dashboard._viewHorizontalPadding === -1) {
        if (!PPSMA.Dashboard.get__rootElement$i()) {
            PPSMA.Dashboard._viewHorizontalPadding = 0;
        }
        else {
            var classElement = PPSMA.Dashboard._findElementWithClass$p(PPSMA.Dashboard.get__rootElement$i(), 'ms-PartSpacingHorizontal');
            if (isNullOrUndefined(classElement)) {
                PPSMA.Dashboard._viewHorizontalPadding = 0;
            }
            else {
                PPSMA.Dashboard._viewHorizontalPadding = classElement.offsetWidth;
            }
        }
    }
    return PPSMA.Dashboard._viewHorizontalPadding;
}
PPSMA.Dashboard._findElementWithClass$p = function PPSMA_Dashboard$_findElementWithClass$p(parentElement, className) {ULSh2q:;
    var returnElement = null;
    if (!isNullOrUndefined(parentElement)) {
        if (parentElement.className === className) {
            returnElement = parentElement;
        }
        else if (parentElement.childNodes.length > 0) {
            for (var i = 0; i < parentElement.childNodes.length; i++) {
                returnElement = PPSMA.Dashboard._findElementWithClass$p(parentElement.childNodes[i], className);
                if (!isNullOrUndefined(returnElement)) {
                    break;
                }
            }
        }
    }
    return returnElement;
}
PPSMA.Dashboard.get_temporalTransitionState = function PPSMA_Dashboard$get_temporalTransitionState() {ULSh2q:;
    if (!PPSMA.Dashboard._parametersTemporalState) {
        PPSMA.Dashboard._parametersTemporalState = {};
    }
    return PPSMA.Dashboard._parametersTemporalState;
}


PPSMA.Common = function PPSMA_Common() {
}
PPSMA.Common._toPixels$i = function PPSMA_Common$_toPixels$i(n) {ULSh2q:;
    return String.format('{0}px', n);
}
PPSMA.Common._getContainerType$i = function PPSMA_Common$_getContainerType$i(container) {ULSh2q:;
    var containerType;
    var widthStr = getStyle(container, 'width');
    var heightStr = getStyle(container, 'height');
    var width = parseInt(widthStr);
    var height = parseInt(heightStr);
    if ((widthStr === 'auto' && heightStr === 'auto') || (!width && !height)) {
        containerType = 0;
    }
    else if (width > 0 && heightStr === 'auto') {
        containerType = 2;
    }
    else if (widthStr === 'auto' && height > 0) {
        containerType = 1;
    }
    else if (width > 0 && height > 0) {
        containerType = 3;
    }
    else if (width > 0 && !height) {
        containerType = 2;
    }
    else if (!width && height > 0) {
        containerType = 1;
    }
    else {
        throw Error.create('Error getting ContainerType');
    }
    return containerType;
}


PPSMA.DomElementEx = function PPSMA_DomElementEx() {
}
PPSMA.DomElementEx.removeElement = function PPSMA_DomElementEx$removeElement(element) {ULSh2q:;
    var garbageBin = $get('IELeakGarbageBin');
    if (!garbageBin) {
        garbageBin = document.createElement('div');
        garbageBin.id = 'IELeakGarbageBin';
        garbageBin.style.display = 'none';
        document.body.appendChild(garbageBin);
    }
    garbageBin.appendChild(element);
    garbageBin.innerHTML = '';
}
PPSMA.DomElementEx.tagsMatch = function PPSMA_DomElementEx$tagsMatch(htmlTag1, htmlTag2) {ULSh2q:;
    if (!htmlTag1 || !htmlTag2) {
        return false;
    }
    return (htmlTag1.toLowerCase() === htmlTag2.toLowerCase());
}
PPSMA.DomElementEx.getHTTPObject = function PPSMA_DomElementEx$getHTTPObject() {ULSh2q:;
    var xmlhttp = null;
    if (!isNullOrUndefined(window.self.XMLHttpRequest)) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (!isNullOrUndefined(window.self.ActiveXObject)) {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlhttp;
}
PPSMA.DomElementEx.getAncestorByTagName = function PPSMA_DomElementEx$getAncestorByTagName(element, tagName) {ULSh2q:;
    var parent = element.parentNode;
    tagName = tagName.toLowerCase();
    while (!isNullOrUndefined(parent) && parent.nodeType === 1) {
        if (parent.tagName.toLowerCase() === tagName) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return null;
}
PPSMA.DomElementEx.getAncestorById = function PPSMA_DomElementEx$getAncestorById(element, id) {ULSh2q:;
    var parent = element.parentNode;
    id = id.toLowerCase();
    while (!isNullOrUndefined(parent)) {
        if (!isNullOrUndefined(parent.id) && parent.id.toLowerCase() === id) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return null;
}
PPSMA.DomElementEx.getChildElementById = function PPSMA_DomElementEx$getChildElementById(parent, childId) {ULSh2q:;
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].id === childId) {
            return children[i];
        }
    }
    return null;
}
PPSMA.DomElementEx.getFirstChildElementByTagName = function PPSMA_DomElementEx$getFirstChildElementByTagName(parent, tagName) {ULSh2q:;
    var children = parent.getElementsByTagName(tagName);
    if (!isNullOrUndefined(children) && children.length > 0) {
        return children[0];
    }
    return null;
}
PPSMA.DomElementEx.setInnerText = function PPSMA_DomElementEx$setInnerText(n, t) {ULSh2q:;
    var innerFunc = document.createTextNode;
    if (!isNullOrUndefined(innerFunc)) {
        var parsedText = document.createTextNode(t);
        n.innerHTML = '';
        n.appendChild(parsedText);
    }
    else {
        n.innerText = t;
    }
}
PPSMA.DomElementEx.getInnerText = function PPSMA_DomElementEx$getInnerText(element) {ULSh2q:;
    return element.innerHTML;
}


PPSMA.EncodeEx = function PPSMA_EncodeEx() {
}
PPSMA.EncodeEx.xmlEncode = function PPSMA_EncodeEx$xmlEncode(txt) {ULSh2q:;
    txt = txt.replace(new RegExp('&', 'g'), '&amp;');
    txt = txt.replace(new RegExp('\"', 'g'), '&quot;');
    txt = txt.replace(new RegExp('\'', 'g'), '&apos;');
    txt = txt.replace(new RegExp('<', 'g'), '&lt;');
    txt = txt.replace(new RegExp('>', 'g'), '&gt;');
    return txt;
}
PPSMA.EncodeEx.jsQuoteEncode = function PPSMA_EncodeEx$jsQuoteEncode(txt) {ULSh2q:;
    txt = txt.replace(new RegExp('\\\\', 'g'), '\\\\');
    txt = txt.replace(new RegExp('\"', 'g'), '\\\"');
    txt = txt.replace(new RegExp('\'', 'g'), '\\\'');
    return txt;
}
PPSMA.EncodeEx.xmlDecode = function PPSMA_EncodeEx$xmlDecode(txt) {ULSh2q:;
    txt = txt.replace(new RegExp('&lt;', 'g'), '<');
    txt = txt.replace(new RegExp('&gt;', 'g'), '>');
    txt = txt.replace(new RegExp('&apos;', 'g'), '\'');
    txt = txt.replace(new RegExp('&#39;', 'g'), '\'');
    txt = txt.replace(new RegExp('&quot;', 'g'), '\"');
    txt = txt.replace(new RegExp('&amp;', 'g'), '&');
    return txt;
}


PPSMA.EventsEx = function PPSMA_EventsEx() {
}
PPSMA.EventsEx.getCurrentElement = function PPSMA_EventsEx$getCurrentElement(e) {ULSh2q:;
    var currEvent = PPSMA.EventsEx.getEvent(e);
    if (!isNullOrUndefined(currEvent.originalTarget)) {
        return currEvent.originalTarget;
    }
    else if (!isNullOrUndefined(currEvent.srcElement)) {
        return currEvent.srcElement;
    }
    else {
        return null;
    }
}
PPSMA.EventsEx.getEvent = function PPSMA_EventsEx$getEvent(e) {ULSh2q:;
    if (!isNullOrUndefined(e)) {
        return e;
    }
    else if (window.event) {
        return window.event;
    }
    else {
        return null;
    }
}
PPSMA.EventsEx.getEventOffset = function PPSMA_EventsEx$getEventOffset(e) {ULSh2q:;
    var x, y;
    var target = PPSMA.EventsEx.getCurrentElement(e);
    if ((Sys.Browser.agent === Sys.Browser.Safari) && (target.tagName.toLowerCase() === 'area')) {
        var map = target.parentNode;
        var location = Sys.UI.DomElement.getLocation(map);
        x = e.pageX - location.x;
        y = e.pageY - location.y;
    }
    else if (!isNullOrUndefined(e.pageX)) {
        var location = Sys.UI.DomElement.getLocation(target);
        x = e.pageX - location.x;
        y = e.pageY - location.y;
    }
    else if (!isNullOrUndefined(e.clientX)) {
        var location = Sys.UI.DomElement.getLocation(target);
        var scrollLeft = 0;
        var scrollTop = 0;
        var workspaceDiv = $get('s4-workspace');
        if (workspaceDiv) {
            scrollLeft = workspaceDiv.scrollLeft;
            scrollTop = workspaceDiv.scrollTop;
        }
        x = (e.clientX + scrollLeft) - location.x;
        y = (e.clientY + scrollTop) - location.y;
    }
    else if ((e).keyCode === 93 || ((e).shiftKey && (e).keyCode === 121)) {
        return new Sys.UI.Point(Math.round(e.srcElement.offsetLeft), Math.round(e.srcElement.offsetTop));
    }
    else if (!isNullOrUndefined(e.offsetX)) {
        x = e.offsetX;
        y = e.offsetY;
    }
    else if (PPSMA.NewWindow.isInMoreAccessibleMode()) {
        var location = Sys.UI.DomElement.getLocation(target);
        x = location.x;
        y = location.y;
    }
    else {
        x = PPSMA.SizeEx.getXOffset(e, target);
        y = PPSMA.SizeEx.getYOffset(e, target);
    }
    return new Sys.UI.Point(Math.round(x), Math.round(y));
}
PPSMA.EventsEx.isLeftClick = function PPSMA_EventsEx$isLeftClick(e) {ULSh2q:;
    var eventType = e.type;
    if ((eventType === 'click') && ((e).button !== 2)) {
        return true;
    }
    return false;
}
PPSMA.EventsEx.isRightClick = function PPSMA_EventsEx$isRightClick(e) {ULSh2q:;
    var eventType = e.type;
    return ((eventType === 'contextmenu') || eventType === PPSMA.ChartDomEventTypes.ppsContextMenu || ((eventType === 'mouseup') && ((e).button === 2)));
}


PPSMA.ChartDomEventTypes = function PPSMA_ChartDomEventTypes() {
}


PPSMA.NewWindow = function PPSMA_NewWindow() {
}
PPSMA.NewWindow.get_LCID = function PPSMA_NewWindow$get_LCID() {ULSh2q:;
    return SP.PageContextInfo.get_currentLanguage().toString();
}
PPSMA.NewWindow.createPost = function PPSMA_NewWindow$createPost(formUrl, windowFeatures, $sn_arguments, formName, windowName) {
    var newWindow = PPSMA.NewWindow.openPopUpWindow(PPSMA.NewWindow.defaultWidth, PPSMA.NewWindow.defaultHeight, windowName, ', resizable=yes, scrollbars=yes, location=yes, titlebar=yes, toolbar=yes');
    if (!newWindow) {
        return null;
    }
    var newDocument = newWindow.document;
    var form = newDocument.createElement('form');
    form.action = formUrl;
    form.method = 'post';
    form.name = formName;
    newDocument.documentElement.appendChild(form);
    var $$dict_8 = $sn_arguments;
    for (var $$key_9 in $$dict_8) {
        var argument = { key: $$key_9, value: $$dict_8[$$key_9] };
        var input = newDocument.createElement('input');
        input.type = 'hidden';
        input.value = encodeURIComponent((argument.value));
        input.name = argument.key;
        form.appendChild(input);
    }
    form.submit();
    return newWindow;
}
PPSMA.NewWindow.applyDefaults = function PPSMA_NewWindow$applyDefaults($sn_document, uid) {
    $sn_document.write(PPSMA.NewWindow._docType$p);
    $sn_document.write('<html><head>');
    var metas = window.document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
        var meta = metas[i];
        var clone = meta.cloneNode(true);
        var metaStr = clone.outerHTML;
        if (!isNullOrUndefined(metaStr)) {
            $sn_document.write(metaStr);
        }
    }
    $sn_document.write('</head><body></body></html>');
    PPSMA.NewWindow.createBaseElement($sn_document, document.URL);
    PPSMA.NewWindow._addSheetsToDocument$p($sn_document, PPSMA.NewWindow.getSheets());
    if (!touchEnabled()) {
        var waitId = PPSMA.NewWindow._waitDivIdPrefix$p + uid;
        var waitDiv = $sn_document.createElement('div');
        waitDiv.id = waitId;
        $sn_document.body.appendChild(waitDiv);
        PPSMA.RenderWebRequest.createPendingRequestUI($sn_document.body, waitId, PPSMA.NewWindow.waitImage, PPSMA.NewWindow._waitMessageIdPrefix$p + uid, PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE, null, $sn_document, PPSMA.RenderWebRequest.waiT_INDICATOR_ACTION_PREFIX + uid, null, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.MiddleCenter);
    }
}
PPSMA.NewWindow._addSheetsToDocument$p = function PPSMA_NewWindow$_addSheetsToDocument$p($sn_document, arrayList) {
    var headElements = $sn_document.getElementsByTagName('head');
    var headElement;
    if (headElements.length !== 1) {
        headElement = $sn_document.createElement('head');
        $sn_document.documentElement.appendChild(headElement);
    }
    else {
        headElement = headElements[0];
    }
    var link;
    for (var i = 0; i < arrayList.length; i++) {
        link = $sn_document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', arrayList[i]);
        headElement.appendChild(link);
    }
}
PPSMA.NewWindow.createBinaryPost = function PPSMA_NewWindow$createBinaryPost(url, $sn_arguments, throbberUrl) {
    var currentDocument = window.document;
    var form = currentDocument.createElement('form');
    form.target = '';
    form.action = url;
    form.method = 'post';
    form.name = '';
    currentDocument.documentElement.appendChild(form);
    var $$dict_5 = $sn_arguments;
    for (var $$key_6 in $$dict_5) {
        var argument = { key: $$key_6, value: $$dict_5[$$key_6] };
        var input = currentDocument.createElement('input');
        input.type = 'hidden';
        input.value = encodeURIComponent((argument.value));
        input.name = argument.key;
        form.appendChild(input);
    }
    form.submit();
}
PPSMA.NewWindow.openPopUpWindow = function PPSMA_NewWindow$openPopUpWindow(wW, wH, wName, args) {ULSh2q:;
    var screen = window.self.screen;
    var wX = Math.floor((screen.availWidth - wW) / 2);
    var wY = Math.floor((screen.availHeight - wH) / 2);
    var winRef = window.open('', wName, 'left=' + wX + ',top=' + wY + ',height=' + wH + ',width=' + wW + args);
    if (winRef) {
        winRef.focus();
    }
    else {
        alert(PPSMA.SR.OlapContextMenu_PopupWarning);
    }
    return winRef;
}
PPSMA.NewWindow.getSheets = function PPSMA_NewWindow$getSheets() {ULSh2q:;
    var sheets = window.document.styleSheets;
    var sheetUrls = [];
    var sheetCount = sheets.length;
    for (var i = 0; i < sheetCount; i++) {
        var href = sheets[i].href;
        if (!isNullUndefinedOrEmpty(href)) {
            Array.add(sheetUrls, href);
        }
    }
    return sheetUrls;
}
PPSMA.NewWindow.popupShowDetails = function PPSMA_NewWindow$popupShowDetails(reportId, uniqueId, tupleXml, resultTableIndex, drillThroughPage, resourceUrl, isScorcard) {ULSh2q:;
    var windowName = 'DTDWindow' + (new Date().getTime());
    var detailWindowAttributes = ',resizable=yes,scrollbars=yes';
    var winRef = PPSMA.NewWindow.openPopUpWindow(PPSMA.NewWindow.defaultWidth, PPSMA.NewWindow.defaultWidth, windowName, detailWindowAttributes);
    if (winRef && winRef.document) {
        var doc = winRef.document;
        PPSMA.NewWindow.applyDefaults(doc, uniqueId);
        var fe = PPSMA.NewWindow._createShowDetailsForm$p(doc, reportId, tupleXml, resultTableIndex, drillThroughPage, isScorcard);
        if (!touchEnabled()) {
            window.setTimeout(function() {ULSh2q:;;
            fe.submit();
            }, 3000);;
        }
        else {
            fe.submit();
        }
    }
}
PPSMA.NewWindow.openUrl = function PPSMA_NewWindow$openUrl(url) {ULSh2q:;
    var screen = window.self.screen;
    var wX = parseInt((screen.availWidth - PPSMA.NewWindow.defaultWidth) / 2);
    var wY = parseInt((screen.availHeight - PPSMA.NewWindow.defaultHeight) / 2);
    var winRef = window.open(url, 'URLWindow', 'left=' + wX + ',top=' + wY + ',height=' + PPSMA.NewWindow.defaultHeight + ',width=' + PPSMA.NewWindow.defaultWidth);
    if (winRef) {
        winRef.focus();
    }
    else {
        alert(PPSMA.SR.OlapContextMenu_PopupWarning);
    }
}
PPSMA.NewWindow.createBaseElement = function PPSMA_NewWindow$createBaseElement($sn_document, baseHref) {
    var headElements = $sn_document.getElementsByTagName('head');
    var baseElements = $sn_document.getElementsByTagName('base');
    var headElement;
    var baseElement;
    if (headElements.length !== 1) {
        headElement = $sn_document.createElement('head');
        $sn_document.documentElement.appendChild(headElement);
    }
    else {
        headElement = headElements[0];
    }
    baseElements = headElement.getElementsByTagName('base');
    if (baseElements.length !== 1) {
        baseElement = $sn_document.createElement('base');
        headElement.appendChild(baseElement);
    }
    else {
        baseElement = baseElements[0];
    }
    baseElement.setAttribute('href', baseHref);
}
PPSMA.NewWindow._createShowDetailsForm$p = function PPSMA_NewWindow$_createShowDetailsForm$p($sn_document, reportId, tupleXml, resultTableIndex, drillThroughUrl, isScorecard) {
    var formElem = $sn_document.getElementById(PPSMA.NewWindow._drillThroughFormID$p);
    if (!formElem) {
        formElem = $sn_document.createElement('form');
        formElem.id = PPSMA.NewWindow._drillThroughFormID$p;
        formElem.target = '_self';
        formElem.action = drillThroughUrl;
        formElem.method = 'post';
        formElem.name = PPSMA.NewWindow._drillThroughFormName$p;
        var body = $sn_document.body;
        if (isNullOrEmpty(body)) {
            body = $sn_document.createElement('body');
            $sn_document.documentElement.appendChild(body);
        }
        $sn_document.body.appendChild(formElem);
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('_dd_reportId', 'reportId', reportId, $sn_document));
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('_dd_tupleXmlId', 'tuple', tupleXml, $sn_document));
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('_dd_resultTableIndexId', 'resultTableIndex', resultTableIndex, $sn_document));
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('_dd_pageId', 'page', '1', $sn_document));
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('_dd_typeId', 'isScorecard', isScorecard.toString(), $sn_document));
        formElem.appendChild(PPSMA.NewWindow._createHiddenInput$p('accessMode', 'accessMode', PPSMA.NewWindow.isInMoreAccessibleMode().toString(), $sn_document));
    }
    else {
        PPSMA.NewWindow._setExistingHiddenInput$p('_dd_reportId', reportId, $sn_document);
        PPSMA.NewWindow._setExistingHiddenInput$p('_dd_tupleXmlId', tupleXml, $sn_document);
        PPSMA.NewWindow._setExistingHiddenInput$p('_dd_resultTableIndexId', resultTableIndex, $sn_document);
        PPSMA.NewWindow._setExistingHiddenInput$p('_dd_typeId', isScorecard.toString(), $sn_document);
        PPSMA.NewWindow._setExistingHiddenInput$p('accessMode', PPSMA.NewWindow.isInMoreAccessibleMode().toString(), $sn_document);
    }
    return formElem;
}
PPSMA.NewWindow._setExistingHiddenInput$p = function PPSMA_NewWindow$_setExistingHiddenInput$p(id, value, domDocument) {ULSh2q:;
    var hiddenInput = domDocument.getElementById(id);
    hiddenInput.value = value;
}
PPSMA.NewWindow._createHiddenInput$p = function PPSMA_NewWindow$_createHiddenInput$p(id, name, value, domDocument) {ULSh2q:;
    var hiddenInput = domDocument.createElement('input');
    hiddenInput.id = id;
    hiddenInput.type = 'hidden';
    hiddenInput.name = name;
    hiddenInput.value = value;
    return hiddenInput;
}
PPSMA.NewWindow.createDecompForm = function PPSMA_NewWindow$createDecompForm($sn_document, reportId, tupleXml, queryParametersXml, clientViewStateXml, decompTreePage) {
    var _formId = 'decompFormID';
    var ClientViewStateId = 'clientViewStateId';
    var QueryParametersId = 'queryParametersId';
    var ReportId = 'reportId';
    var TupleXmlId = 'tupleXmlId';
    var formElem = $sn_document.getElementById(_formId);
    if (!formElem) {
        formElem = $sn_document.createElement('form');
        formElem.id = _formId;
        formElem.target = '_self';
        formElem.action = decompTreePage;
        formElem.method = 'post';
        formElem.name = 'decompForm';
        $sn_document.documentElement.appendChild(formElem);
        var inputReportElem = $sn_document.createElement('input');
        inputReportElem.id = ReportId;
        inputReportElem.type = 'hidden';
        inputReportElem.name = ReportId;
        inputReportElem.value = reportId;
        formElem.appendChild(inputReportElem);
        var inputRowTupleElem = $sn_document.createElement('input');
        inputRowTupleElem.id = TupleXmlId;
        inputRowTupleElem.type = 'hidden';
        inputRowTupleElem.name = 'tuple';
        inputRowTupleElem.value = tupleXml;
        formElem.appendChild(inputRowTupleElem);
        var inputQPElem = $sn_document.createElement('input');
        inputQPElem.id = QueryParametersId;
        inputQPElem.type = 'hidden';
        inputQPElem.name = 'queryParameters';
        inputQPElem.value = queryParametersXml;
        formElem.appendChild(inputQPElem);
        var inputViewStateElem = $sn_document.createElement('input');
        inputViewStateElem.id = ClientViewStateId;
        inputViewStateElem.type = 'hidden';
        inputViewStateElem.name = 'clientViewState';
        inputViewStateElem.value = clientViewStateXml;
        formElem.appendChild(inputViewStateElem);
    }
    else {
        var inputReportElem = $sn_document.getElementById(ReportId);
        inputReportElem.value = reportId;
        var inputRowTupleElem = $sn_document.getElementById(TupleXmlId);
        inputRowTupleElem.value = tupleXml;
        var inputQPElem = $sn_document.getElementById(QueryParametersId);
        inputQPElem.value = queryParametersXml;
        var inputViewStateElem = $sn_document.getElementById(ClientViewStateId);
        inputViewStateElem.value = clientViewStateXml;
    }
    formElem.submit();
}
PPSMA.NewWindow.isInMoreAccessibleMode = function PPSMA_NewWindow$isInMoreAccessibleMode() {ULSh2q:;
    var returnVal = false;
    var cookies = window.document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var nvpair = cookies[i].split('=');
        if (nvpair.length === 2) {
            if (nvpair[0].trim() === PPSMA.NewWindow.wsS_ACCESSIBILITYFEATURE_COOKIE_KEY) {
                returnVal = Boolean.parse(nvpair[1].trim().toLowerCase());
            }
        }
    }
    if (window.parent.document) {
        cookies = window.parent.document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var nvpair = cookies[i].split('=');
            if (nvpair.length === 2) {
                if (nvpair[0].trim() === PPSMA.NewWindow.wsS_ACCESSIBILITYFEATURE_COOKIE_KEY) {
                    returnVal = Boolean.parse(nvpair[1].trim().toLowerCase());
                }
            }
        }
    }
    return returnVal;
}


PPSMA.NoCancelWebRequest = function PPSMA_NoCancelWebRequest(containerElement, loadingImagePath, pos) {ULSh2q:;
    PPSMA.NoCancelWebRequest.initializeBase(this);
    this._loadingImageUrl = loadingImagePath;
    this._waitIndicatorDivId = PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + containerElement.id;
    this._messageId = PPSMA.RenderWebRequest.waiT_INDICATOR_MESSAGE_PREFIX + containerElement.id;
    this._actionId = PPSMA.RenderWebRequest.waiT_INDICATOR_ACTION_PREFIX + containerElement.id;
    var mainWaitingIndicatorDiv = document.createElement('div');
    mainWaitingIndicatorDiv.id = this._waitIndicatorDivId;
    mainWaitingIndicatorDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT;
    containerElement.appendChild(mainWaitingIndicatorDiv);
    PPSMA.RenderWebRequest.createPendingRequestUI(containerElement, mainWaitingIndicatorDiv.id, this._loadingImageUrl, this._messageId, PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE, null, window.document, this._actionId, null, pos);
}
PPSMA.NoCancelWebRequest.prototype = {
    
    _setAbortedUI$p$1: function PPSMA_NoCancelWebRequest$_setAbortedUI$p$1() {ULSh2q:;
        var message = $get(this._messageId);
        if (message) {
            message.className = PPSMA.NoCancelWebRequest._mS_BI_LOADING_ABORT$p;
            message.innerHTML = PPSMA.SR.Dashboard_WebRequest_NoCancel_Abort;
        }
    },
    
    show: function PPSMA_NoCancelWebRequest$show() {ULSh2q:;
        var mainWaitingIndicatorDiv = $get(this._waitIndicatorDivId);
        if (mainWaitingIndicatorDiv) {
            mainWaitingIndicatorDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT;
        }
    },
    
    submit: function PPSMA_NoCancelWebRequest$submit(details) {ULSh2q:;
        this.abortWebRequest();
        this._webRequest = new Sys.Net.WebRequest();
        this._webRequest.set_url(details.url);
        this._webRequest.set_body(details.body);
        this._webRequest.set_httpVerb(details.httpVerb);
        this._webRequest.get_headers()['Content-Type'] = details.contentType;
        this._webRequest.add_completed(details.completedCallback);
        this._webRequest.invoke();
    },
    
    abort: function PPSMA_NoCancelWebRequest$abort() {ULSh2q:;
        this._setAbortedUI$p$1();
        this.abortWebRequest();
    }
}


PPSMA.PickerItemSelectedEventArgs = function PPSMA_PickerItemSelectedEventArgs(pickerItemElement) {ULSh2q:;
    PPSMA.PickerItemSelectedEventArgs.initializeBase(this);
    this.itemElement = pickerItemElement;
}
PPSMA.PickerItemSelectedEventArgs.prototype = {
    itemElement: null
}


PPSMA.Picker = function PPSMA_Picker(caption) {ULSh2q:;
    this.$$d__pickerItem_Click$p$0 = Function.createDelegate(this, this._pickerItem_Click$p$0);
    this.$$d__body_onclick$p$0 = Function.createDelegate(this, this._body_onclick$p$0);
    this.$$d__element_onmouseout$p$0 = Function.createDelegate(this, this._element_onmouseout$p$0);
    this.$$d__element_onmouseover$p$0 = Function.createDelegate(this, this._element_onmouseover$p$0);
    this.$$d__button_onclick$p$0 = Function.createDelegate(this, this._button_onclick$p$0);
    this._events$0 = new Sys.EventHandlerList();
    this._pickerItems$0 = [];
    this._currentCaption$0 = caption;
    this._element$i$0 = document.createElement('span');
    this._element$i$0.className = 'ms-csrlistview-viewselectormenu ms-bipicker';
    this._pickerElement$i$0 = this._element$i$0.appendChild(document.createElement('span'));
    this._pickerElement$i$0.className = 'ms-webpart-titleText';
    $addHandler(this._pickerElement$i$0, 'click', this.$$d__button_onclick$p$0);
    this._selectedItem$0 = this._pickerElement$i$0.appendChild(document.createElement('a'));
    this._selectedItem$0.setAttribute('href', 'javascript://');
    this._selectedItem$0.className = 'ms-menu-a';
    this._dropDownContainer$0 = this._selectedItem$0.appendChild(document.createElement('span'));
    this._dropDownContainer$0.className = 'ms-accentText2';
    this._dropDownContainer$0.innerHTML = caption;
    $addHandler(this._dropDownContainer$0, 'mouseover', this.$$d__element_onmouseover$p$0);
    $addHandler(this._dropDownContainer$0, 'mouseout', this.$$d__element_onmouseout$p$0);
    this._dropDownImage$0 = this._pickerElement$i$0.appendChild(document.createElement('span'));
    this._dropDownImage$0.className = 's4-clust ms-viewselector-arrow ms-menu-stdarw';
    var buttonImage = this._dropDownImage$0.appendChild(document.createElement('img'));
    buttonImage.src = '/_layouts/15/images/fgimg.png';
    this._dropDownImageHover$0 = this._pickerElement$i$0.appendChild(document.createElement('span'));
    this._dropDownImageHover$0.className = 'ss4-clust ms-viewselector-arrow ms-menu-hovarw';
    buttonImage = this._dropDownImageHover$0.appendChild(document.createElement('img'));
    buttonImage.src = '/_layouts/15/images/fgimg.png';
    this._listContainer$0 = this._element$i$0.appendChild(document.createElement('div'));
    Sys.UI.DomElement.addCssClass(this._listContainer$0, 'ms-bipicker-container');
    this._listElement$0 = this._listContainer$0.appendChild(document.createElement('ul'));
    Sys.UI.DomElement.addCssClass(this._listElement$0, 'ms-bipicker-list');
    Sys.UI.DomElement.addCssClass(this._listElement$0, 'ms-core-menu-box');
    this._shim$0 = this._element$i$0.appendChild(document.createElement('iframe'));
    this._shim$0.className = 'ms-bipicker-shim';
    this._shim$0.frameBorder = '0';
}
PPSMA.Picker._calculateCaptionWidth$p = function PPSMA_Picker$_calculateCaptionWidth$p(width) {ULSh2q:;
    var captionWidth;
    if (width === 'auto' || width === '') {
        captionWidth = PPSMA.Picker._defaultPickerWidth$p;
    }
    else {
        var targetWidth = parseInt(width) - PPSMA.Picker._defaultCaptionOffset$p;
        if (targetWidth < PPSMA.Picker._defaultPickerWidth$p) {
            captionWidth = PPSMA.Picker._defaultPickerWidth$p;
        }
        else {
            captionWidth = targetWidth;
        }
    }
    return captionWidth;
}
PPSMA.Picker.prototype = {
    _element$i$0: null,
    _pickerElement$i$0: null,
    _listElement$0: null,
    _listContainer$0: null,
    _shim$0: null,
    _dropDownContainer$0: null,
    _dropDownImage$0: null,
    _dropDownImageHover$0: null,
    _currentCaption$0: null,
    _selectedItem$0: null,
    _bodyClickHandler$0: null,
    
    dispose: function PPSMA_Picker$dispose() {ULSh2q:;
        if (this._bodyClickHandler$0) {
            $removeHandler(document.body, 'click', this._bodyClickHandler$0);
            this._bodyClickHandler$0 = null;
        }
        if (this._dropDownContainer$0) {
            $clearHandlers(this._dropDownContainer$0);
            this._dropDownContainer$0 = null;
        }
        if (this._pickerElement$i$0) {
            $clearHandlers(this._pickerElement$i$0);
            PPSMA.DomElementEx.removeElement(this._pickerElement$i$0);
            this._pickerElement$i$0 = null;
        }
        if (this._listElement$0) {
            for (var i = 0; i < this._pickerItems$0.length; ++i) {
                (this._pickerItems$0[i]).dispose();
            }
            this._pickerItems$0 = null;
            PPSMA.DomElementEx.removeElement(this._listElement$0);
            this._listElement$0 = null;
        }
        if (this._shim$0) {
            PPSMA.DomElementEx.removeElement(this._shim$0);
            this._shim$0 = null;
        }
        this._events$0 = null;
    },
    
    add_itemSelected: function PPSMA_Picker$add_itemSelected(value) {ULSh2q:;
        this._events$0.addHandler(PPSMA.Picker._eventKey_ItemSelected$p, value);
    },
    remove_itemSelected: function PPSMA_Picker$remove_itemSelected(value) {ULSh2q:;
        this._events$0.removeHandler(PPSMA.Picker._eventKey_ItemSelected$p, value);
    },
    
    _raiseItemSelectedEvent$p$0: function PPSMA_Picker$_raiseItemSelectedEvent$p$0(pickerItem) {ULSh2q:;
        var handler = this._events$0.getHandler(PPSMA.Picker._eventKey_ItemSelected$p);
        if (handler) {
            handler(this, new PPSMA.PickerItemSelectedEventArgs(pickerItem));
        }
    },
    
    _body_onclick$p$0: function PPSMA_Picker$_body_onclick$p$0(e) {ULSh2q:;
        this._hideList$p$0();
    },
    
    _button_onclick$p$0: function PPSMA_Picker$_button_onclick$p$0(e) {ULSh2q:;
        this._toggleList$p$0();
        e.stopPropagation();
    },
    
    _element_onmouseover$p$0: function PPSMA_Picker$_element_onmouseover$p$0(e) {ULSh2q:;
        Sys.UI.DomElement.addCssClass(e.target, 'ms-accentText');
        this._dropDownImage$0.style.display = 'none';
        this._dropDownImageHover$0.style.display = 'inline-block';
        e.stopPropagation();
    },
    
    _element_onmouseout$p$0: function PPSMA_Picker$_element_onmouseout$p$0(e) {ULSh2q:;
        Sys.UI.DomElement.removeCssClass(e.target, 'ms-accentText');
        this._dropDownImage$0.style.display = 'inline-block';
        this._dropDownImageHover$0.style.display = 'none';
        e.stopPropagation();
    },
    
    _hideList$p$0: function PPSMA_Picker$_hideList$p$0() {ULSh2q:;
        this._listContainer$0.style.display = 'none';
        this._shim$0.style.display = 'none';
    },
    
    _showList$p$0: function PPSMA_Picker$_showList$p$0() {ULSh2q:;
        this._listContainer$0.style.display = 'block';
        this._shim$0.style.display = 'block';
        this._shim$0.style.width = parseInt(this._listElement$0.offsetWidth) + 'px';
        this._shim$0.style.height = parseInt(this._listElement$0.offsetHeight) + 'px';
        if (!this._bodyClickHandler$0) {
            this._bodyClickHandler$0 = this.$$d__body_onclick$p$0;
            $addHandler(document.body, 'click', this._bodyClickHandler$0);
        }
        if (this._listElement$0.firstChild && (this._listElement$0.firstChild).itemCaption) {
            (this._listElement$0.firstChild).itemCaption.focus();
        }
    },
    
    _toggleList$p$0: function PPSMA_Picker$_toggleList$p$0() {ULSh2q:;
        if (this._listContainer$0.style.display === 'block') {
            this._hideList$p$0();
        }
        else {
            this._showList$p$0();
        }
    },
    
    addPickerItems: function PPSMA_Picker$addPickerItems(listItems) {ULSh2q:;
        for (var index = 0; index < listItems.length; index++) {
            var properties = listItems[index];
            var itemCaption = properties['caption'];
            var item = new PPSMA._pickerItem(itemCaption, properties['tag']);
            Array.add(this._pickerItems$0, item);
            item.add_click(this.$$d__pickerItem_Click$p$0);
            var pickerElement = this._listElement$0.appendChild(item.element);
            if (this._currentCaption$0 === itemCaption) {
                Sys.UI.DomElement.addCssClass(pickerElement, 'ms-accentText');
            }
        }
    },
    
    _pickerItem_Click$p$0: function PPSMA_Picker$_pickerItem_Click$p$0(sender, e) {ULSh2q:;
        var pickerItem = sender;
        this._hideList$p$0();
        this._raiseItemSelectedEvent$p$0(pickerItem.element);
    },
    
    setCaptionWidth: function PPSMA_Picker$setCaptionWidth(width) {ULSh2q:;
        var captionWidth = PPSMA.Picker._calculateCaptionWidth$p(width);
        var elementWidth = captionWidth + PPSMA.Picker._defaultListOffset$p;
        this._selectedItem$0.style.width = captionWidth + 6 + 'px';
        this._pickerElement$i$0.style.width = elementWidth + 'px';
    }
}


PPSMA._pickerItem = function PPSMA__pickerItem(caption, tag) {ULSh2q:;
    this.$$d__element_onclick$p$0 = Function.createDelegate(this, this._element_onclick$p$0);
    this._events$0 = new Sys.EventHandlerList();
    this.element = document.createElement('li');
    var itemCaption = document.createElement('a');
    this.element.itemCaption = itemCaption;
    this.element.tag = tag;
    itemCaption.href = 'javascript://';
    itemCaption.innerHTML = caption;
    this.element.appendChild(itemCaption);
    $addHandler(this.element, 'click', this.$$d__element_onclick$p$0);
}
PPSMA._pickerItem.prototype = {
    element: null,
    _eventKey_Click$p$0: 'Click',
    
    add_click: function PPSMA__pickerItem$add_click(value) {ULSh2q:;
        this._events$0.addHandler(this._eventKey_Click$p$0, value);
    },
    remove_click: function PPSMA__pickerItem$remove_click(value) {ULSh2q:;
        this._events$0.removeHandler(this._eventKey_Click$p$0, value);
    },
    
    _raiseClickEvent$p$0: function PPSMA__pickerItem$_raiseClickEvent$p$0() {ULSh2q:;
        var handler = this._events$0.getHandler(this._eventKey_Click$p$0);
        if (handler) {
            handler(this, new Sys.EventArgs());
        }
    },
    
    dispose: function PPSMA__pickerItem$dispose() {ULSh2q:;
        if (this.element) {
            $clearHandlers(this.element.itemCaption);
            $clearHandlers(this.element);
            this.element = null;
        }
    },
    
    _element_onclick$p$0: function PPSMA__pickerItem$_element_onclick$p$0(e) {ULSh2q:;
        var pickerItem = e.target;
        if (!pickerItem.itemCaption) {
            pickerItem = pickerItem.parentNode;
        }
        this._raiseClickEvent$p$0();
        e.stopPropagation();
    }
}


PPSMA.RenderWebRequest = function PPSMA_RenderWebRequest() {
}
PPSMA.RenderWebRequest.createPendingRequestUI = function PPSMA_RenderWebRequest$createPendingRequestUI(container, waitIndicatorDivId, loadingImageUrl, messageId, messageType, actionHandler, $sn_document, actionId, waitImageId, positioning) {
    var useBorder = !isNullOrEmpty(loadingImageUrl);
    var waitingOverlayDiv = $sn_document.getElementById(waitIndicatorDivId);
    if (!waitingOverlayDiv) {
        waitingOverlayDiv = $sn_document.getElementById(PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX);
        if (!waitingOverlayDiv) {
            waitingOverlayDiv = $sn_document.createElement('div');
            waitingOverlayDiv.id = waitIndicatorDivId;
            if (container) {
                container.appendChild(waitingOverlayDiv);
            }
        }
    }
    if (waitingOverlayDiv) {
        waitingOverlayDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT;
    }
    var shimID = waitingOverlayDiv.id + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
    var shim = $sn_document.getElementById(shimID);
    if (!shim) {
        shimID = PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
        shim = $sn_document.getElementById(shimID);
        if (!shim) {
            shim = $sn_document.createElement('div');
            shim.id = waitingOverlayDiv.id + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
            if (waitingOverlayDiv.nextSibling) {
                waitingOverlayDiv.parentNode.insertBefore(shim, waitingOverlayDiv.nextSibling);
            }
            else {
                waitingOverlayDiv.parentNode.appendChild(shim);
            }
        }
    }
    if (positioning === PPSMA.RenderWebRequest.ProgressIndicatorPositioning.MiddleCenter) {
        shim.className = PPSMA.RenderWebRequest.mS_BI_WAIT_SHIM;
    }
    else {
        shim.className = (useBorder) ? PPSMA.RenderWebRequest.mS_BI_WAIT_SHIMZZ : PPSMA.RenderWebRequest.mS_BI_WAIT_SHIM_BORDERLESS;
    }
    if (shim.childNodes.length > 0) {
        for (var i = 0; i < shim.childNodes.length; i++) {
            shim.removeChild(shim.childNodes[i]);
        }
    }
    var innerDiv = $sn_document.createElement('div');
    var middleDiv = $sn_document.createElement('div');
    var centerBorderDiv = $sn_document.createElement('div');
    var zzBorderDiv = $sn_document.createElement('div');
    var content = $sn_document.createElement('div');
    switch (positioning) {
        case PPSMA.RenderWebRequest.ProgressIndicatorPositioning.MiddleCenter:
            innerDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT_INNER;
            shim.appendChild(innerDiv);
            middleDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT_MIDDLE;
            innerDiv.appendChild(middleDiv);
            centerBorderDiv.className = PPSMA.RenderWebRequest.mS_BI_WAIT_CENTER_BORDER;
            middleDiv.appendChild(centerBorderDiv);
            centerBorderDiv.appendChild(content);
            break;
        case PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero:
            zzBorderDiv.className = (useBorder) ? PPSMA.RenderWebRequest.mS_BI_WAIT_ZZ_BORDER : PPSMA.RenderWebRequest.mS_BI_WAIT_NO_BORDER;
            shim.appendChild(zzBorderDiv);
            zzBorderDiv.appendChild(content);
            break;
    }
    if (!isNullOrEmpty(loadingImageUrl)) {
        var loadingImg = $sn_document.createElement('img');
        Sys.UI.DomElement.addCssClass(loadingImg, PPSMA.RenderWebRequest.mS_BI_WAIT_IMAGE);
        if (!isNullOrEmpty(waitImageId)) {
            loadingImg.id = waitImageId;
        }
        loadingImg.src = loadingImageUrl;
        content.appendChild(loadingImg);
        PPSMA.Dashboard.precacheImages([ loadingImageUrl ]);
    }
    var textWrapper = $sn_document.createElement('div');
    textWrapper.className = PPSMA.RenderWebRequest.mS_BI_WAIT_TEXT;
    content.appendChild(textWrapper);
    var message = $sn_document.createElement('div');
    message.id = messageId;
    Sys.UI.DomElement.addCssClass(message, PPSMA.RenderWebRequest.mS_BI_WAIT_MESSAGE);
    switch (messageType) {
        case PPSMA.RenderWebRequest.msgtypE_SEARCHING:
            message.innerHTML = PPSMA.SR.Dashboard_WebRequest_Searching;
            break;
        case PPSMA.RenderWebRequest.msgtypE_LOADING:
        case PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE:
            message.innerHTML = PPSMA.SR.Dashboard_WebRequest_Loading;
            break;
        case PPSMA.RenderWebRequest.msgtypE_LOADING_DD:
            message.innerHTML = PPSMA.SR.DashboardDesigner_Redirect_Loading;
            break;
    }
    textWrapper.appendChild(message);
    var action = $sn_document.createElement('a');
    action.id = actionId;
    action.href = '#';
    switch (messageType) {
        case PPSMA.RenderWebRequest.msgtypE_SEARCHING:
        case PPSMA.RenderWebRequest.msgtypE_LOADING:
            action.title = PPSMA.SR.Dashboard_WebRequest_Stop;
            Sys.UI.DomElement.addCssClass(action, PPSMA.RenderWebRequest.mS_BI_WAIT_ACTION);
            action.innerHTML = PPSMA.SR.Dashboard_WebRequest_Stop;
            $addHandler(action, 'click', actionHandler);
            break;
        case PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE:
        case PPSMA.RenderWebRequest.msgtypE_LOADING_DD:
            Sys.UI.DomElement.addCssClass(action, PPSMA.RenderWebRequest.mS_BI_WAIT_NOACTION);
            break;
    }
    textWrapper.appendChild(action);
}
PPSMA.RenderWebRequest.prototype = {
    _webRequest: null,
    _loadingImageUrl: null,
    _waitIndicatorDivId: null,
    _messageId: null,
    _actionId: null,
    _waitImgId: null,
    
    dispose: function PPSMA_RenderWebRequest$dispose() {ULSh2q:;
        this.hide();
        PPSMA.WebRequestEx.abort(this._webRequest);
    },
    
    hide: function PPSMA_RenderWebRequest$hide() {ULSh2q:;
        var waitIndicatorDiv = $get(this._waitIndicatorDivId);
        var waitIndicatorShimDiv = $get(this._waitIndicatorDivId + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX);
        if (!waitIndicatorDiv) {
            waitIndicatorDiv = $get(PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX);
        }
        if (waitIndicatorDiv) {
            waitIndicatorDiv.className = PPSMA.RenderWebRequest.mS_BI_NO_WAIT;
        }
        if (!waitIndicatorShimDiv) {
            waitIndicatorShimDiv = $get(PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX);
        }
        if (waitIndicatorShimDiv) {
            waitIndicatorShimDiv.className = PPSMA.RenderWebRequest.mS_BI_NO_WAIT_SHIM;
        }
    },
    
    abortWebRequest: function PPSMA_RenderWebRequest$abortWebRequest() {ULSh2q:;
        PPSMA.WebRequestEx.abort(this._webRequest);
        this._webRequest = null;
    }
}


PPSMA.RenderWebRequest.ProgressIndicatorPositioning = function() {}
PPSMA.RenderWebRequest.ProgressIndicatorPositioning.prototype = {
    MiddleCenter: 1, 
    ZeroZero: 2
}
PPSMA.RenderWebRequest.ProgressIndicatorPositioning.registerEnum('PPSMA.RenderWebRequest.ProgressIndicatorPositioning', false);


PPSMA.BrowserInfo = function PPSMA_BrowserInfo() {
}
PPSMA.BrowserInfo.prototype = {
    chrome: false,
    chrome7up: false,
    chrome8up: false,
    chrome9up: false,
    firefox: false,
    firefox36up: false,
    firefox3up: false,
    firefox4up: false,
    ie: false,
    ie55up: false,
    ie5up: false,
    ie7down: false,
    ie7up: false,
    ie8standard: false,
    iever: 0,
    mac: false,
    major: 0,
    nav: false,
    nav6: false,
    nav6up: false,
    nav7up: false,
    osver: 0,
    safari: false,
    safari125up: false,
    safari3up: false,
    verIEFull: 0,
    w3c: false,
    win: false,
    win32: false,
    win64bit: false,
    winnt: false
}


PPSMA.SizeEx = function PPSMA_SizeEx() {
}
PPSMA.SizeEx.getClientHeight = function PPSMA_SizeEx$getClientHeight() {ULSh2q:;
    var height = document.documentElement.clientHeight;
    if (!height) {
        height = document.body.clientHeight;
    }
    return height;
}
PPSMA.SizeEx.getClientWidth = function PPSMA_SizeEx$getClientWidth() {ULSh2q:;
    var width = document.documentElement.clientWidth;
    if (!width) {
        width = document.body.clientWidth;
    }
    return width;
}
PPSMA.SizeEx.getScrollLeft = function PPSMA_SizeEx$getScrollLeft() {ULSh2q:;
    var left = document.documentElement.scrollLeft;
    if (!left) {
        left = document.body.scrollLeft;
    }
    return left;
}
PPSMA.SizeEx.getScrollTop = function PPSMA_SizeEx$getScrollTop() {ULSh2q:;
    var top = document.documentElement.scrollTop;
    if (!top) {
        top = document.body.scrollTop;
    }
    return top;
}
PPSMA.SizeEx.setScrollLeft = function PPSMA_SizeEx$setScrollLeft(value) {ULSh2q:;
    var left = document.documentElement.scrollLeft;
    if (left) {
        document.documentElement.scrollLeft = value;
    }
    else {
        document.body.scrollLeft = value;
    }
}
PPSMA.SizeEx.setScrollTop = function PPSMA_SizeEx$setScrollTop(value) {ULSh2q:;
    var top = document.documentElement.scrollTop;
    if (top) {
        document.documentElement.scrollTop = value;
    }
    else {
        document.body.scrollTop = value;
    }
}
PPSMA.SizeEx.getAbsoluteTop = function PPSMA_SizeEx$getAbsoluteTop(o) {ULSh2q:;
    var oTop = o.offsetTop;
    while (o.offsetParent) {
        var oParent = o.offsetParent;
        oTop += oParent.offsetTop;
        o = oParent;
    }
    return oTop;
}
PPSMA.SizeEx.getAbsoluteLeft = function PPSMA_SizeEx$getAbsoluteLeft(o) {ULSh2q:;
    var oLeft = o.offsetLeft;
    while (o.offsetParent) {
        var oParent = o.offsetParent;
        oLeft += oParent.offsetLeft;
        o = oParent;
    }
    return oLeft;
}
PPSMA.SizeEx.getXOffset = function PPSMA_SizeEx$getXOffset(e, elem) {ULSh2q:;
    var xOffset = (e.clientX) + PPSMA.SizeEx.getScrollLeft() - PPSMA.SizeEx.getAbsoluteLeft(elem);
    return xOffset;
}
PPSMA.SizeEx.getYOffset = function PPSMA_SizeEx$getYOffset(e, elem) {ULSh2q:;
    var yOffset = (e.clientY) + PPSMA.SizeEx.getScrollTop() - PPSMA.SizeEx.getAbsoluteTop(elem);
    return yOffset;
}
PPSMA.SizeEx.getCenterXandY = function PPSMA_SizeEx$getCenterXandY(width, height) {ULSh2q:;
    var availHeight = PPSMA.SizeEx.getClientHeight();
    var availWidth = PPSMA.SizeEx.getClientWidth();
    var scrollLeft = PPSMA.SizeEx.getScrollLeft();
    var scrollTop = PPSMA.SizeEx.getScrollTop();
    var x = Math.round((availWidth - width) / 2);
    if (x < 0) {
        x = 0;
    }
    var y = Math.round((availHeight - height) / 2);
    if (y < 0) {
        y = 0;
    }
    var pt = new Sys.UI.Point(x + scrollLeft, y + scrollTop);
    return pt;
}


PPSMA._stackedZoneAction = function PPSMA__stackedZoneAction(webPartRecords) {ULSh2q:;
    this._webPartRecords$0 = webPartRecords;
}
PPSMA._stackedZoneAction.prototype = {
    _webPartRecords$0: null,
    
    execute: function PPSMA__stackedZoneAction$execute() {ULSh2q:;
        var isDesignMode = false;
        var inDesignMode = $get('MSOLayout_InDesignMode');
        if (!isNullOrUndefined(inDesignMode)) {
            if (inDesignMode.value === '1') {
                isDesignMode = true;
            }
        }
        if (!isDesignMode) {
            for (var i = 0; i < this._webPartRecords$0.length; ++i) {
                var record = this._webPartRecords$0[i];
                var webPart = $find(record.ClientId);
                if (!isNullOrUndefined(webPart)) {
                    PPSMA.StackWebPartManager._setStackedZoneState$i(webPart);
                }
            }
            PPSMA.StackWebPartManager._reset$i();
        }
    }
}


PPSMA.StackWebPartManager = function PPSMA_StackWebPartManager() {
}
PPSMA.StackWebPartManager.add_resetZones = function PPSMA_StackWebPartManager$add_resetZones(value) {ULSh2q:;
    PPSMA.StackWebPartManager._events.addHandler(PPSMA.StackWebPartManager._resetZonesKey$p, value);
}
PPSMA.StackWebPartManager.remove_resetZones = function PPSMA_StackWebPartManager$remove_resetZones(value) {ULSh2q:;
    PPSMA.StackWebPartManager._events.removeHandler(PPSMA.StackWebPartManager._resetZonesKey$p, value);
}
PPSMA.StackWebPartManager.get_zones = function PPSMA_StackWebPartManager$get_zones() {ULSh2q:;
    return PPSMA.StackWebPartManager._zones;
}
PPSMA.StackWebPartManager._setStackedZoneState$i = function PPSMA_StackWebPartManager$_setStackedZoneState$i(clientWebPart) {ULSh2q:;
    var state = PPSMA._stackedZoneState.notStacked;
    if (clientWebPart.get__visibilityState$i$2() === PPSMA.ClientVisibilityState.hidden) {
        state = 0;
    }
    else if (PPSMA.StackWebPartManager._isStackedZone$p(clientWebPart.zoneId)) {
        state = (PPSMA.StackWebPartManager._isVisible$i(clientWebPart.zoneId, clientWebPart.get__clientId$i$2())) ? PPSMA._stackedZoneState.selected : PPSMA._stackedZoneState.stacked;
    }
    clientWebPart.set__stackedZoneState$i$2(state);
}
PPSMA.StackWebPartManager._isVisible$i = function PPSMA_StackWebPartManager$_isVisible$i(zoneId, clientId) {ULSh2q:;
    return PPSMA.StackWebPartManager._activeViews[zoneId] === clientId;
}
PPSMA.StackWebPartManager._isStackedZone$p = function PPSMA_StackWebPartManager$_isStackedZone$p(zoneId) {ULSh2q:;
    return PPSMA.ArrayListEx.exists(PPSMA.StackWebPartManager._stackedZones, function(o) {ULSh2q:;
        var stackedZoneId = o;
        if (!compareStrings(stackedZoneId, zoneId)) {
            return true;
        }
        return false;
    });
}
PPSMA.StackWebPartManager.registerStackedZone = function PPSMA_StackWebPartManager$registerStackedZone(zoneId, currentSelection, stackItems) {ULSh2q:;
    PPSMA.StackWebPartManager._stackedZones[PPSMA.StackWebPartManager._stackedZones.length] = zoneId;
    PPSMA.StackWebPartManager._activeViews[zoneId] = currentSelection;
    PPSMA.StackWebPartManager._zones[zoneId] = stackItems;
}
PPSMA.StackWebPartManager._reset$i = function PPSMA_StackWebPartManager$_reset$i() {ULSh2q:;
    var resetZonesHandler = PPSMA.StackWebPartManager._events.getHandler(PPSMA.StackWebPartManager._resetZonesKey$p);
    if (resetZonesHandler) {
        resetZonesHandler(null, null);
    }
}
PPSMA.StackWebPartManager.setActiveView = function PPSMA_StackWebPartManager$setActiveView(zoneId, clientId) {ULSh2q:;
    PPSMA.StackWebPartManager._activeViews[zoneId] = clientId;
}
PPSMA.StackWebPartManager.setZoneDefault = function PPSMA_StackWebPartManager$setZoneDefault(zoneId) {ULSh2q:;
    var zone = PPSMA.StackWebPartManager._zones[zoneId];
    return PPSMA.ArrayListEx.find(zone, function(o) {ULSh2q:;
        var isDefaultEligible = false;
        var item = o;
        var webPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(item['tag']);
        isDefaultEligible = webPart.get__stackedZoneState$i$2() === PPSMA._stackedZoneState.stacked;
        return isDefaultEligible;
    });
}
PPSMA.StackWebPartManager.getActiveView = function PPSMA_StackWebPartManager$getActiveView(zoneId) {ULSh2q:;
    return PPSMA.StackWebPartManager._activeViews[zoneId];
}
PPSMA.StackWebPartManager.reportStackerHeightForZone = function PPSMA_StackWebPartManager$reportStackerHeightForZone(zoneId, height) {ULSh2q:;
    PPSMA.StackWebPartManager._reportedHeights[zoneId] = height;
}
PPSMA.StackWebPartManager.getStackerHeightForZone = function PPSMA_StackWebPartManager$getStackerHeightForZone(zoneId) {ULSh2q:;
    var height = 0;
    if (!isNullOrUndefined(PPSMA.StackWebPartManager._reportedHeights[zoneId])) {
        height = PPSMA.StackWebPartManager._reportedHeights[zoneId];
    }
    return height;
}


PPSMA.StackWebPart = function PPSMA_StackWebPart(element) {ULSh2q:;
    this.$$d__picker_ItemSelected$p$2 = Function.createDelegate(this, this._picker_ItemSelected$p$2);
    this.$$d__onResetZones$p$2 = Function.createDelegate(this, this._onResetZones$p$2);
    this.$$d__application_Unload$p$2 = Function.createDelegate(this, this._application_Unload$p$2);
    PPSMA.StackWebPart.initializeBase(this, [ element ]);
    var webPartZoneCell = $get('MSOZoneCell_WebPart' + element.id);
    if (!isNullOrUndefined(webPartZoneCell)) {
        this._webPartOuterElement$2 = PPSMA.DomElementEx.getFirstChildElementByTagName(webPartZoneCell, 'div');
    }
    if (!isNullOrUndefined(this._webPartOuterElement$2.nextSibling)) {
        if (Sys.UI.DomElement.containsCssClass(this._webPartOuterElement$2.nextSibling, 'ms-PartSpacingVertical')) {
            this._webPartOuterElement$2.nextSibling.style.display = 'none';
        }
    }
    Sys.Application.add_unload(this.$$d__application_Unload$p$2);
    PPSMA.StackWebPartManager.add_resetZones(this.$$d__onResetZones$p$2);
    var part = this;
    ExecuteOrDelayUntilEventNotified(function() {ULSh2q:;;
    var stackItems = PPSMA.StackWebPartManager.get_zones()[part.zoneId];
    var $$t_7 = this;
    Array.forEach(stackItems, function(o) {ULSh2q:;
        if (!part.isEditMode) {
            var item = o;
            var webPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(item['tag']);
            PPSMA.StackWebPartManager._setStackedZoneState$i(webPart);
        }
    });
    part._initializeStack$p$2();
    }, '_ppsStackWebPartsLoaded');;
}
PPSMA.StackWebPart.prototype = {
    _picker$2: null,
    _title$2: null,
    _webPartOuterElement$2: null,
    isEditMode: false,
    selectionFieldClientId: null,
    selectionCaptionFieldClientId: null,
    zoneId: null,
    
    get__currentCaption$p$2: function PPSMA_StackWebPart$get__currentCaption$p$2() {ULSh2q:;
        return ($get(this.selectionCaptionFieldClientId)).value;
    },
    set__currentCaption$p$2: function PPSMA_StackWebPart$set__currentCaption$p$2(value) {ULSh2q:;
        ($get(this.selectionCaptionFieldClientId)).value = value;
        return value;
    },
    
    get_currentClientId: function PPSMA_StackWebPart$get_currentClientId() {ULSh2q:;
        return ($get(this.selectionFieldClientId)).value;
    },
    set_currentClientId: function PPSMA_StackWebPart$set_currentClientId(value) {ULSh2q:;
        ($get(this.selectionFieldClientId)).value = value;
        PPSMA.StackWebPartManager.setActiveView(this.zoneId, value);
        return value;
    },
    
    _initializeStack$p$2: function PPSMA_StackWebPart$_initializeStack$p$2() {ULSh2q:;
        var parentBounds = Sys.UI.DomElement.getBounds(this.get_element().parentNode);
        if (this.isEditMode) {
            var stackLength = (PPSMA.StackWebPartManager.get_zones()[this.zoneId]).length;
            var stackTitle = String.format(PPSMA.SR.StackWebPart_EditModeTitleFormatString, stackLength);
            this._picker$2 = new PPSMA.Picker(stackTitle);
            this._picker$2._pickerElement$i$0.style.backgroundColor = 'transparent';
            this.set__currentCaption$p$2(stackTitle);
            this._webPartOuterElement$2.style.display = 'block';
        }
        else if (compareStrings(this.get_currentClientId(), '')) {
            this._webPartOuterElement$2.style.display = 'block';
            var clientWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this.get_currentClientId());
            if (!compareStrings(this.get__currentCaption$p$2(), '')) {
                if (!isNullOrUndefined(clientWebPart._titleElement$i$2)) {
                    this.set__currentCaption$p$2(clientWebPart._titleElement$i$2.innerHTML);
                }
            }
            this._picker$2 = new PPSMA.Picker(this.get__currentCaption$p$2());
            this._picker$2.add_itemSelected(this.$$d__picker_ItemSelected$p$2);
        }
        else {
            this._picker$2 = new PPSMA.Picker('');
            this._webPartOuterElement$2.style.display = 'none';
        }
        this._title$2 = $get('WebPartTitle' + this.get_id());
        if (this._picker$2) {
            Sys.Application.registerDisposableObject(this._picker$2);
            if (!this.isEditMode) {
                this._initializePickerItems$p$2();
            }
            if (!isNullOrUndefined(this._title$2)) {
                this._title$2.innerHTML = '';
                this._title$2.appendChild(this._picker$2._element$i$0);
                this._title$2.title = this.get__currentCaption$p$2();
            }
            else {
                this.get_element().innerHTML = '';
                this.get_element().appendChild(this._picker$2._element$i$0);
            }
            var width;
            var pickerBounds = Sys.UI.DomElement.getBounds(this._picker$2._pickerElement$i$0);
            if (pickerBounds.width > parentBounds.width) {
                width = parentBounds.width - 42 + 'px';
            }
            else {
                width = pickerBounds.width + 'px';
            }
            this._picker$2.setCaptionWidth(width);
            PPSMA.StackWebPartManager.reportStackerHeightForZone(this.zoneId, this._webPartOuterElement$2.offsetHeight);
        }
    },
    
    _initializePickerItems$p$2: function PPSMA_StackWebPart$_initializePickerItems$p$2() {ULSh2q:;
        var pickerItems = [];
        var stackItems = PPSMA.StackWebPartManager.get_zones()[this.zoneId];
        for (var i = 0; i < stackItems.length; i++) {
            var item = stackItems[i];
            var itemWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(item['tag']);
            if (itemWebPart.get__stackedZoneState$i$2() === PPSMA._stackedZoneState.selected || itemWebPart.get__stackedZoneState$i$2() === PPSMA._stackedZoneState.stacked) {
                if (!compareStrings(item['caption'], '')) {
                    if (!isNullOrUndefined(itemWebPart._titleElement$i$2)) {
                        item['caption'] = itemWebPart._titleElement$i$2.innerHTML;
                    }
                }
                pickerItems[pickerItems.length] = item;
            }
        }
        this._picker$2.addPickerItems(pickerItems);
    },
    
    _application_Unload$p$2: function PPSMA_StackWebPart$_application_Unload$p$2(sender, e) {ULSh2q:;
        Sys.Application.remove_unload(this.$$d__application_Unload$p$2);
        PPSMA.StackWebPartManager.remove_resetZones(this.$$d__onResetZones$p$2);
        if (this._picker$2) {
            Sys.Application.unregisterDisposableObject(this._picker$2);
        }
    },
    
    _onResetZones$p$2: function PPSMA_StackWebPart$_onResetZones$p$2(sender, e) {ULSh2q:;
        var activeViewClientId = PPSMA.StackWebPartManager.getActiveView(this.zoneId);
        if (!compareStrings(activeViewClientId, '')) {
            var item = PPSMA.StackWebPartManager.setZoneDefault(this.zoneId);
            if (item) {
                this._setCurrent$p$2(item['tag'], item['caption']);
            }
        }
        else if (compareStrings(activeViewClientId, this.get_currentClientId())) {
            this.set_currentClientId(activeViewClientId);
        }
        if (compareStrings(this.get_currentClientId(), '')) {
            var clientWebPart = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(this.get_currentClientId());
            if (!clientWebPart.get__stackedZoneState$i$2()) {
                var item = PPSMA.StackWebPartManager.setZoneDefault(clientWebPart.zoneId);
                if (!item) {
                    this.set_currentClientId('');
                    this.set__currentCaption$p$2('');
                }
                else {
                    this._setCurrent$p$2(item['tag'], item['caption']);
                }
            }
            else {
                this.set__currentCaption$p$2((!isNullOrUndefined(clientWebPart._titleElement$i$2)) ? clientWebPart._titleElement$i$2.innerHTML : clientWebPart.webPartTitle);
            }
        }
        this._initializeStack$p$2();
    },
    
    _picker_ItemSelected$p$2: function PPSMA_StackWebPart$_picker_ItemSelected$p$2(sender, args) {ULSh2q:;
        PPSMA.ClientConnectionManager.get_instance().hideStackedView(this.get_currentClientId());
        var clientId = args.itemElement.tag;
        this._setCurrent$p$2(clientId, args.itemElement.itemCaption.innerHTML);
        PPSMA.StackWebPartManager.setActiveView(this.zoneId, clientId);
        PPSMA.StackWebPartManager._reset$i();
    },
    
    _setCurrent$p$2: function PPSMA_StackWebPart$_setCurrent$p$2(clientId, caption) {ULSh2q:;
        this.set_currentClientId(clientId);
        this.set__currentCaption$p$2(caption);
        if (this._title$2) {
            this._title$2.title = this.get__currentCaption$p$2();
        }
        PPSMA.ClientConnectionManager.get_instance().showStackedView(this.get_currentClientId());
    }
}


PPSMA.Trace = function PPSMA_Trace() {
}
PPSMA.Trace.addFilters = function PPSMA_Trace$addFilters(filters, enable) {ULSh2q:;
    if (isNullOrUndefined(filters)) {
        return;
    }
    for (var i = 0; i < filters.length; ++i) {
        PPSMA.Trace.filters[filters[i]] = enable;
    }
}
PPSMA.Trace.disableFilters = function PPSMA_Trace$disableFilters(filters) {ULSh2q:;
    if (isNullOrUndefined(filters)) {
        return;
    }
    for (var i = 0; i < filters.length; ++i) {
        PPSMA.Trace.filters[filters[i]] = false;
    }
}
PPSMA.Trace.enableFilters = function PPSMA_Trace$enableFilters(filters) {ULSh2q:;
    if (isNullOrUndefined(filters)) {
        return;
    }
    for (var i = 0; i < filters.length; ++i) {
        PPSMA.Trace.filters[filters[i]] = true;
    }
}
PPSMA.Trace._IsEnabled = function PPSMA_Trace$_IsEnabled(groups) {ULSh2q:;
    if (isNullOrUndefined(groups)) {
        return true;
    }
    for (var i = 0; i < groups.length; ++i) {
        var group = groups[i];
        if ((PPSMA.Trace.filters[group])) {
            return true;
        }
    }
    return false;
}
PPSMA.Trace.domElement = function PPSMA_Trace$domElement(e, name) {ULSh2q:;
    PPSMA.Trace.domElementEx(null, e, name, 0);
}
PPSMA.Trace.event = function PPSMA_Trace$event(e, name) {ULSh2q:;
    PPSMA.Trace.eventEx(null, e, name);
}
PPSMA.Trace.domElementEx = function PPSMA_Trace$domElementEx(filters, e, context, trace) {
}
PPSMA.Trace.eventEx = function PPSMA_Trace$eventEx(filters, e, context) {
}


PPSMA._URI = function PPSMA__URI() {
}
PPSMA._URI.createUri = function PPSMA__URI$createUri(url, $sn_arguments) {
    var sb = new Sys.StringBuilder(url);
    if ($sn_arguments) {
        sb.append('?');
        sb.append(PPSMA._URI.createQueryString($sn_arguments));
    }
    return sb.toString();
}
PPSMA._URI.createQueryString = function PPSMA__URI$createQueryString($sn_arguments) {
    var sb = new Sys.StringBuilder();
    var $$dict_2 = $sn_arguments;
    for (var $$key_3 in $$dict_2) {
        var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (!sb.isEmpty()) {
            sb.append('&');
        }
        sb.append(String.format('{0}={1}', entry.key, encodeURIComponent((entry.value))));
    }
    return sb.toString();
}


PPSMA.ArrayListEx = function PPSMA_ArrayListEx() {
}
PPSMA.ArrayListEx.clear = function PPSMA_ArrayListEx$clear(list) {ULSh2q:;
    if (list.length > 0) {
        list.splice(0, list.length);
    }
}
PPSMA.ArrayListEx.forEachUntil = function PPSMA_ArrayListEx$forEachUntil(list, callback) {ULSh2q:;
    for (var i = 0; i < list.length; ++i) {
        if (callback(list[i])) {
            return;
        }
    }
}
PPSMA.ArrayListEx.find = function PPSMA_ArrayListEx$find(list, callback) {ULSh2q:;
    for (var i = 0; i < list.length; ++i) {
        var o = list[i];
        if (callback(o)) {
            return o;
        }
    }
    return null;
}
PPSMA.ArrayListEx.findIndex = function PPSMA_ArrayListEx$findIndex(list, callback) {ULSh2q:;
    for (var i = 0; i < list.length; ++i) {
        var o = list[i];
        if (callback(o)) {
            return i;
        }
    }
    return -1;
}
PPSMA.ArrayListEx.findAll = function PPSMA_ArrayListEx$findAll(list, callback) {ULSh2q:;
    var result = [];
    for (var i = 0; i < list.length; ++i) {
        var o = list[i];
        if (callback(o)) {
            Array.add(result, o);
        }
    }
    return result;
}
PPSMA.ArrayListEx.exists = function PPSMA_ArrayListEx$exists(list, callback) {ULSh2q:;
    return (isNullOrUndefined(PPSMA.ArrayListEx.find(list, callback))) ? false : true;
}
PPSMA.ArrayListEx.merge = function PPSMA_ArrayListEx$merge(list1, list2) {ULSh2q:;
    var result = [];
    Array.addRange(result, list1);
    for (var i = 0; i < list2.length; ++i) {
        var item = list2[i];
        if (!Array.contains(result, item)) {
            Array.add(result, item);
        }
    }
    return result;
}


PPSMA.AjaxRenderRequestRecord = function PPSMA_AjaxRenderRequestRecord(connectionRecords, consumerRecord, parameterRecords, providerRecords, transformerRecords) {ULSh2q:;
    this.ConnectionRecords = connectionRecords;
    this.ConsumerRecord = consumerRecord;
    this.ParameterRecords = parameterRecords;
    this.ProviderRecords = providerRecords;
    this.TransformerRecords = transformerRecords;
}
PPSMA.AjaxRenderRequestRecord.prototype = {
    ConnectionRecords: null,
    ConsumerRecord: null,
    ParameterRecords: null,
    ProviderRecords: null,
    TransformerRecords: null
}


PPSMA.ScriptConstants = function PPSMA_ScriptConstants() {
}


PPSMA.ProviderUserSelectionsUpdateRecord = function PPSMA_ProviderUserSelectionsUpdateRecord(providerRecord, parameterRecord) {ULSh2q:;
    this.ProviderRecord = providerRecord;
    this.ParameterRecord = parameterRecord;
}
PPSMA.ProviderUserSelectionsUpdateRecord.prototype = {
    ProviderRecord: null,
    ParameterRecord: null
}


PPSMA.ClientConnectionManager = function PPSMA_ClientConnectionManager() {ULSh2q:;
    this.$$d__checkIfWireframeRenderFinished$p$0 = Function.createDelegate(this, this._checkIfWireframeRenderFinished$p$0);
    this.$$d__onUpdateProviderSelectionsCompleted$p$0 = Function.createDelegate(this, this._onUpdateProviderSelectionsCompleted$p$0);
    this.$$d__application_Load$p$0 = Function.createDelegate(this, this._application_Load$p$0);
}
PPSMA.ClientConnectionManager.get_instance = function PPSMA_ClientConnectionManager$get_instance() {ULSh2q:;
    if (!PPSMA.ClientConnectionManager._clientConnectionManager) {
        PPSMA.ClientConnectionManager._clientConnectionManager = new PPSMA.ClientConnectionManager();
        Sys.Application.add_init(PPSMA.ClientConnectionManager._application_Init$p);
    }
    return PPSMA.ClientConnectionManager._clientConnectionManager;
}
PPSMA.ClientConnectionManager._application_Init$p = function PPSMA_ClientConnectionManager$_application_Init$p(sender, e) {ULSh2q:;
    if (!Sys.Application.get_isCreatingComponents()) {
        PPSMA.ClientConnectionManager._forceLoad = true;
    }
}
PPSMA.ClientConnectionManager.prototype = {
    _webPartTable$0: null,
    _connectionManagerRecord$0: null,
    _renderWebPartContentUri$0: null,
    _saveParameterSelectionUri$0: null,
    _renderConnectionTable$0: null,
    _transformerTable$0: null,
    _parameterTable$0: null,
    _visibilityConnections$0: null,
    _windowLoadHandler$0: null,
    _parameterInputElementId$0: null,
    _viewStateInputElementId$0: null,
    _autoApplyFilterUpdates$0: true,
    _pendingFilterUpdates$0: null,
    _saveUserFilterChoices$0: true,
    _activateApplyButtonFunction$0: null,
    _wireframeAborted$0: null,
    
    initialize: function PPSMA_ClientConnectionManager$initialize(record) {ULSh2q:;
        this._connectionManagerRecord$0 = record;
        if (!PPSMA.ClientConnectionManager._forceLoad) {
            this._windowLoadHandler$0 = this.$$d__application_Load$p$0;
            Sys.Application.add_load(this._windowLoadHandler$0);
        }
        else {
            this._application_Load$p$0(null, null);
            PPSMA.ClientConnectionManager._forceLoad = false;
        }
        Sys.Application.registerDisposableObject(this);
    },
    
    _application_Load$p$0: function PPSMA_ClientConnectionManager$_application_Load$p$0(sender, e) {ULSh2q:;
        if (!PPSMA.ClientConnectionManager._forceLoad) {
            Sys.Application.remove_load(this._windowLoadHandler$0);
            this._windowLoadHandler$0 = null;
        }
        this._renderConnectionTable$0 = new PPSMA._renderConnectionTable(this._connectionManagerRecord$0.ConnectionRecords);
        this._transformerTable$0 = new PPSMA._clientTransformerTable(this._connectionManagerRecord$0.TransformerRecords);
        this._parameterTable$0 = new PPSMA._clientParameterTable(this._connectionManagerRecord$0.ParameterRecords);
        this._renderWebPartContentUri$0 = this._connectionManagerRecord$0.RenderWebPartContentUri;
        this._saveParameterSelectionUri$0 = this._connectionManagerRecord$0.SaveParameterSelectionUri;
        this._parameterInputElementId$0 = this._connectionManagerRecord$0.ParameterSelectionsElementId;
        this._viewStateInputElementId$0 = this._connectionManagerRecord$0.ViewStateElementId;
        this._webPartTable$0 = {};
        var webPartRecords = this._connectionManagerRecord$0.WebPartRecords;
        for (var i = 0; i < webPartRecords.length; ++i) {
            var record = webPartRecords[i];
            var webPart = $find(record.ClientId);
            if (!isNullOrUndefined(webPart)) {
                webPart._initializeRecord$i$2(record);
                this._webPartTable$0[webPart.get__webPartId$i$2()] = webPart;
            }
        }
        this.set_autoApplyFilterUpdates(this._connectionManagerRecord$0.AutoApplyFilterUpdates);
        this.set_saveUserFilterChoices(this._connectionManagerRecord$0.SaveUserFilterChoices);
        this.set_activateApplyButtonFunction(this._connectionManagerRecord$0.ActivateApplyButtonFunction);
        this._visibilityConnections$0 = this._connectionManagerRecord$0.ConditionalVisibilityRecord.VisibilityConnectionRecords;
        this._reloadSavedParameterSelections$p$0();
        this._postbackSaveParameterSelections$p$0();
        this._postbackSaveViewState$p$0();
        var stackedZoneAction = new PPSMA._stackedZoneAction(this._connectionManagerRecord$0.WebPartRecords);
        stackedZoneAction.execute();
        this.wireframeRender();
        this._ppsMoreAccessibleMode$p$0();
    },
    
    _ppsMoreAccessibleMode$p$0: function PPSMA_ClientConnectionManager$_ppsMoreAccessibleMode$p$0() {ULSh2q:;
        var el = $get('HiddenAnchor');
        if (el) {
            moreAccessibleMode(el);
        }
    },
    
    dispose: function PPSMA_ClientConnectionManager$dispose() {ULSh2q:;
        if (this._windowLoadHandler$0) {
            Sys.Application.remove_load(this._windowLoadHandler$0);
            this._windowLoadHandler$0 = null;
            Sys.Application.unregisterDisposableObject(this);
        }
    },
    
    findClientWebPartRecord: function PPSMA_ClientConnectionManager$findClientWebPartRecord(clientId) {ULSh2q:;
        var webPartRecords = this._connectionManagerRecord$0.WebPartRecords;
        for (var i = 0; i < webPartRecords.length; ++i) {
            var record = webPartRecords[i];
            if (record.ClientId === clientId) {
                return record;
            }
        }
        throw PPSMA._frameworkException.webPartRecordNotFound(clientId);
    },
    
    findClientWebPart: function PPSMA_ClientConnectionManager$findClientWebPart(clientId) {ULSh2q:;
        var webPart = $find(clientId);
        if (isNullOrUndefined(webPart)) {
            throw PPSMA._frameworkException._webPartNotFound$i(clientId);
        }
        return webPart;
    },
    
    getConsumerInputs: function PPSMA_ClientConnectionManager$getConsumerInputs(clientId) {ULSh2q:;
        return this.findClientWebPartRecord(clientId).ConsumerInputs;
    },
    
    getViewState: function PPSMA_ClientConnectionManager$getViewState(clientId) {ULSh2q:;
        return this.findClientWebPartRecord(clientId).ViewState;
    },
    
    setViewState: function PPSMA_ClientConnectionManager$setViewState(clientId, viewState) {ULSh2q:;
        var record = this.findClientWebPartRecord(clientId);
        record.ViewState = viewState;
        this._postbackSaveViewState$p$0();
    },
    
    _postbackSaveViewState$p$0: function PPSMA_ClientConnectionManager$_postbackSaveViewState$p$0() {ULSh2q:;
        var input = $get(this._viewStateInputElementId$0);
        if (isNullOrUndefined(input)) {
            throw PPSMA._frameworkException.viewStateElementNotFound(this._viewStateInputElementId$0);
        }
        var clientViewState = {};
        var webPartRecords = this._connectionManagerRecord$0.WebPartRecords;
        for (var i = 0; i < webPartRecords.length; ++i) {
            var record = webPartRecords[i];
            clientViewState[record.Id] = record.ViewState;
        }
        input.value = Sys.Serialization.JavaScriptSerializer.serialize(clientViewState);
    },
    
    _postbackSaveParameterSelections$p$0: function PPSMA_ClientConnectionManager$_postbackSaveParameterSelections$p$0() {ULSh2q:;
        var input = $get(this._parameterInputElementId$0);
        if (isNullOrUndefined(input)) {
            throw PPSMA._frameworkException.parameterStateElementNotFound(this._parameterInputElementId$0);
        }
        input.value = this._parameterTable$0._saveSelectionsToJSON$i$0();
    },
    
    _reloadSavedParameterSelections$p$0: function PPSMA_ClientConnectionManager$_reloadSavedParameterSelections$p$0() {ULSh2q:;
        var input = $get(this._parameterInputElementId$0);
        if (!isNullOrUndefined(input)) {
            this._parameterTable$0._loadSelectionsFromJSON$i$0(input.value);
        }
    },
    
    get_autoApplyFilterUpdates: function PPSMA_ClientConnectionManager$get_autoApplyFilterUpdates() {ULSh2q:;
        return this._autoApplyFilterUpdates$0;
    },
    set_autoApplyFilterUpdates: function PPSMA_ClientConnectionManager$set_autoApplyFilterUpdates(value) {ULSh2q:;
        if (this._autoApplyFilterUpdates$0 !== value) {
            if (value) {
                this._pendingFilterUpdates$0 = null;
            }
            else {
                this._pendingFilterUpdates$0 = [];
            }
            this._autoApplyFilterUpdates$0 = value;
        }
        return value;
    },
    
    get_saveUserFilterChoices: function PPSMA_ClientConnectionManager$get_saveUserFilterChoices() {ULSh2q:;
        return this._saveUserFilterChoices$0;
    },
    set_saveUserFilterChoices: function PPSMA_ClientConnectionManager$set_saveUserFilterChoices(value) {ULSh2q:;
        this._saveUserFilterChoices$0 = value;
        return value;
    },
    
    get_activateApplyButtonFunction: function PPSMA_ClientConnectionManager$get_activateApplyButtonFunction() {ULSh2q:;
        return this._activateApplyButtonFunction$0;
    },
    set_activateApplyButtonFunction: function PPSMA_ClientConnectionManager$set_activateApplyButtonFunction(value) {ULSh2q:;
        this._activateApplyButtonFunction$0 = value;
        return value;
    },
    
    userUpdateFilter: function PPSMA_ClientConnectionManager$userUpdateFilter(update) {ULSh2q:;
        var webPart = this.findClientWebPart(update.ClientId);
        if (isNullOrUndefined(webPart)) {
            throw PPSMA._frameworkException._webPartNotFound$i(update.ClientId);
        }
        webPart.set__initialRender$i$2(false);
        this.updateFilter(update);
    },
    
    updateFilter: function PPSMA_ClientConnectionManager$updateFilter(update) {ULSh2q:;
        var webPart = this.findClientWebPart(update.ClientId);
        if (isNullOrUndefined(webPart)) {
            throw PPSMA._frameworkException._webPartNotFound$i(update.ClientId);
        }
        var updates = [];
        updates[0] = update;
        if (this.get_autoApplyFilterUpdates()) {
            this.updateParametersModal(updates, 0);
        }
        else {
            if (webPart.get__initialRender$i$2()) {
                webPart.set__initialRender$i$2(false);
                return;
            }
            if (webPart.get__ignoreParameterUpdates$i$2()) {
                return;
            }
            var hasDirectlyDependentFilters = false;
            try {
                hasDirectlyDependentFilters = this._hasDirectlyDependentFilters$p$0(webPart);
            }
            catch ($$e_4) {
            }
            if (!hasDirectlyDependentFilters) {
                if (!isNullUndefinedOrEmpty(this.get_activateApplyButtonFunction())) {
                    eval(this.get_activateApplyButtonFunction() + '();');
                }
            }
            var parameter = this._parameterTable$0._find$i$0(webPart.get__record$i$2().Id, update.Name);
            if (!isNullOrUndefined(parameter)) {
                parameter._updateSelections$i$0(update.Selections);
                var $$t_8 = this;
                if (!PPSMA.ArrayListEx.exists(this._pendingFilterUpdates$0, function(o) {ULSh2q:;
                    var p = o;
                    return p.get__providerId$i$0() === parameter.get__providerId$i$0() && p.get__name$i$0() === parameter.get__name$i$0();
                })) {
                    Array.add(this._pendingFilterUpdates$0, parameter);
                }
            }
            this._postbackSaveParameterSelections$p$0();
            if (hasDirectlyDependentFilters) {
                this.updateParametersModal(updates, PPSMA.FilterUpdateMode.filtersOnly);
            }
        }
    },
    
    applyRegisteredFilterChanges: function PPSMA_ClientConnectionManager$applyRegisteredFilterChanges() {ULSh2q:;
        this.updateParametersModal([], PPSMA.FilterUpdateMode.nonFiltersOnly);
    },
    
    updateParameters: function PPSMA_ClientConnectionManager$updateParameters(updates) {ULSh2q:;
        this.updateParametersModal(updates, 0);
    },
    
    updateParametersModal: function PPSMA_ClientConnectionManager$updateParametersModal(updates, updateMode) {ULSh2q:;
        var parameterUpdates;
        if (updateMode !== PPSMA.FilterUpdateMode.filtersOnly && this._pendingFilterUpdates$0) {
            parameterUpdates = this._pendingFilterUpdates$0;
            this._pendingFilterUpdates$0 = [];
        }
        else {
            parameterUpdates = [];
        }
        for (var i = 0; i < updates.length; ++i) {
            var update = updates[i];
            var webPart = this.findClientWebPart(update.ClientId);
            if (isNullOrUndefined(webPart)) {
                throw PPSMA._frameworkException._webPartNotFound$i(update.ClientId);
            }
            if (webPart.get__ignoreParameterUpdates$i$2() || webPart.get__initialRender$i$2()) {
                webPart.set__initialRender$i$2(false);
                continue;
            }
            var parameter = this._parameterTable$0._find$i$0(webPart.get__webPartId$i$2(), update.Name);
            if (!isNullOrUndefined(parameter)) {
                parameter._updateSelections$i$0(update.Selections);
                Array.add(parameterUpdates, parameter);
            }
        }
        if (!parameterUpdates.length) {
            return;
        }
        if (this.get_saveUserFilterChoices()) {
            for (var i = 0; i < parameterUpdates.length; i++) {
                var curParameter = parameterUpdates[i];
                this._ajaxUpdateProviderSelections$p$0(curParameter);
            }
        }
        this._postbackSaveParameterSelections$p$0();
        this._render$p$0(parameterUpdates, updateMode);
    },
    
    _ajaxRender$p$0: function PPSMA_ClientConnectionManager$_ajaxRender$p$0(consumerWebParts, renderConnectionTable, updateMode) {ULSh2q:;
        for (var i = 0; i < consumerWebParts.length; ++i) {
            this._ajaxRenderConsumerModal$p$0(consumerWebParts[i], renderConnectionTable, updateMode);
        }
    },
    
    _onUpdateProviderSelectionsCompleted$p$0: function PPSMA_ClientConnectionManager$_onUpdateProviderSelectionsCompleted$p$0(requestExecutor) {
    },
    
    _ajaxUpdateProviderSelections$p$0: function PPSMA_ClientConnectionManager$_ajaxUpdateProviderSelections$p$0(clientParameter) {ULSh2q:;
        var webPartId = clientParameter.get__providerId$i$0();
        var providerWebPart = this._webPartTable$0[webPartId];
        if (isNullOrUndefined(providerWebPart)) {
            throw PPSMA._frameworkException._webPartNotFound$i(webPartId);
        }
        if (!providerWebPart.isFilterWebPart) {
            return;
        }
        var providerRecord = new PPSMA.ClientProviderRecord(providerWebPart.get__record$i$2());
        var providerUpdateRecord = new PPSMA.ProviderUserSelectionsUpdateRecord(providerRecord, clientParameter._record$i$0);
        var body = { providerSelectionsUpdateRecord: providerUpdateRecord };
        var updateRequest = new Sys.Net.WebRequest();
        updateRequest.set_url(this._saveParameterSelectionUri$0);
        updateRequest.set_body(Sys.Serialization.JavaScriptSerializer.serialize(body));
        updateRequest.set_httpVerb('POST');
        updateRequest.get_headers()['Content-Type'] = 'application/json; charset=utf-8';
        updateRequest.add_completed(this.$$d__onUpdateProviderSelectionsCompleted$p$0);
        updateRequest.invoke();
    },
    
    _ajaxRenderConsumer$p$0: function PPSMA_ClientConnectionManager$_ajaxRenderConsumer$p$0(consumer, renderConnectionTable) {ULSh2q:;
        this._ajaxRenderConsumerModal$p$0(consumer, renderConnectionTable, 0);
    },
    
    _ajaxRenderConsumerModal$p$0: function PPSMA_ClientConnectionManager$_ajaxRenderConsumerModal$p$0(consumer, renderConnectionTable, updateMode) {ULSh2q:;
        var consumerConnections = this._findConsumerConnectionRecords$p$0(consumer, renderConnectionTable);
        var providerRecords = this._createProviderRecords$p$0(consumerConnections);
        var parameterRecords = this._findParameters$p$0(consumerConnections);
        var transformerRecords = this._findTransformerRecords$p$0(consumerConnections);
        consumer._render$i$2(this._renderWebPartContentUri$0, this.createConsumerRecord(consumer), providerRecords, consumerConnections, transformerRecords, parameterRecords, updateMode);
    },
    
    createConsumerRecord: function PPSMA_ClientConnectionManager$createConsumerRecord(consumer) {ULSh2q:;
        var providerSelections = {};
        var webPartRecord = consumer.get__record$i$2();
        if (webPartRecord.IsProviderSelectionsViewState) {
            var $$t_5 = this;
            Array.forEach(this._parameterTable$0._findAllByProvider$i$0(webPartRecord.Id), function(o) {ULSh2q:;
                var record = (o)._record$i$0;
                providerSelections[record.Name] = record.Selections;
            });
        }
        return new PPSMA.ClientConsumerRecord(webPartRecord, consumer.get__height$i$2(), consumer.get__width$i$2(), providerSelections);
    },
    
    _hasDirectlyDependentFilters$p$0: function PPSMA_ClientConnectionManager$_hasDirectlyDependentFilters$p$0(webPart) {ULSh2q:;
        var providerId = webPart.get__record$i$2().Id;
        var $$t_5 = this;
        return PPSMA.ArrayListEx.exists(this._renderConnectionTable$0.get__connections$i$0(), function(item) {ULSh2q:;
            var record = item;
            if (record.ProviderId === providerId) {
                var dependentWebPart = $$t_5.findClientWebPart(record.ConsumerId);
                if (dependentWebPart.isFilterWebPart) {
                    return true;
                }
            }
            return false;
        });
    },
    
    _createProviderRecords$p$0: function PPSMA_ClientConnectionManager$_createProviderRecords$p$0(connectionRecords) {ULSh2q:;
        var providers = [];
        var unique = {};
        for (var i = 0; i < connectionRecords.length; ++i) {
            var connectionRecord = connectionRecords[i];
            var webPartId = connectionRecord.ProviderId;
            if (!isNullOrUndefined(unique[webPartId])) {
                continue;
            }
            unique[webPartId] = '';
            var webPartRecord = this.findClientWebPartRecord(webPartId);
            var providerRecord = new PPSMA.ClientProviderRecord(webPartRecord);
            Array.add(providers, providerRecord);
        }
        return providers;
    },
    
    _findConsumerConnectionRecords$p$0: function PPSMA_ClientConnectionManager$_findConsumerConnectionRecords$p$0(webPart, renderConnectionTable) {ULSh2q:;
        var $$t_8 = this;
        var consumerConnections = PPSMA.ArrayListEx.findAll(renderConnectionTable.get__connections$i$0(), function(item) {ULSh2q:;
            var record = item;
            if (record.ConsumerId === webPart.get__webPartId$i$2()) {
                var parameter = $$t_8._parameterTable$0._find$i$0(record.ProviderId, record.ProviderParameterName);
                return !!parameter && parameter.get__updateAction$i$0() === 2;
            }
            else {
                return false;
            }
        });
        var $$t_9 = this;
        Array.forEach(webPart.get__deferredParameterChanges$i$2(), function(o) {ULSh2q:;
            var key = o;
            Array.addRange(consumerConnections, renderConnectionTable._findParameterToConsumerConnectionRecords$i$0(key._providerId$i$0, key._name$i$0, webPart.get__webPartId$i$2()));
        });
        return consumerConnections;
    },
    
    _findParameters$p$0: function PPSMA_ClientConnectionManager$_findParameters$p$0(connectionRecords) {ULSh2q:;
        var parameters = [];
        var unique = {};
        for (var i = 0; i < connectionRecords.length; ++i) {
            var connectionRecord = connectionRecords[i];
            var providerId = connectionRecord.ProviderId;
            var parameterName = connectionRecord.ProviderParameterName;
            var key = providerId + parameterName;
            if (isNullOrUndefined(unique[key])) {
                unique[key] = '';
                var parameter = this._parameterTable$0._find$i$0(providerId, parameterName);
                if (isNullOrUndefined(parameter)) {
                    throw PPSMA._frameworkException.missingParameterRecord(providerId, parameterName);
                }
                Array.add(parameters, parameter);
            }
        }
        return parameters;
    },
    
    _findTransformerRecords$p$0: function PPSMA_ClientConnectionManager$_findTransformerRecords$p$0(connectionRecords) {ULSh2q:;
        var transformerRecords = [];
        var unique = {};
        for (var i = 0; i < connectionRecords.length; ++i) {
            var connectionRecord = connectionRecords[i];
            var transformerId = connectionRecord.TransformerId;
            if (transformerId.length > 0) {
                if (isNullOrUndefined(unique[transformerId])) {
                    unique[transformerId] = '';
                    var transformerRecord = this._transformerTable$0.find(transformerId);
                    if (isNullOrUndefined(transformerRecord)) {
                        throw PPSMA._frameworkException.missingTransformerRecord(transformerId, connectionRecord.ProviderId, connectionRecord.ConsumerId);
                    }
                    Array.add(transformerRecords, transformerRecord);
                }
            }
        }
        return transformerRecords;
    },
    
    _postbackRender$p$0: function PPSMA_ClientConnectionManager$_postbackRender$p$0(parameterUpdates) {ULSh2q:;
        var parameter = parameterUpdates[0];
        __doPostBack(parameter.get__providerId$i$0(), '');
    },
    
    _render$p$0: function PPSMA_ClientConnectionManager$_render$p$0(parameterUpdates, updateMode) {ULSh2q:;
        var renderAction = new PPSMA._renderAction(this._renderConnectionTable$0, this._parameterTable$0, this._webPartTable$0);
        renderAction._execute$i$0(parameterUpdates);
        if (renderAction.get__isPostbackRender$i$0()) {
            this._postbackRender$p$0(parameterUpdates);
            return;
        }
        var visibilityAction;
        visibilityAction = new PPSMA._conditionalVisibilityAction(this._webPartTable$0, this._parameterTable$0, this._visibilityConnections$0);
        visibilityAction._execute$i$0(parameterUpdates);
        if (visibilityAction.get__isPostback$i$0()) {
            this._postbackRender$p$0(parameterUpdates);
            return;
        }
        var renderWebParts = PPSMA.ArrayListEx.merge(renderAction.get__webParts$i$0(), visibilityAction.get__webParts$i$0());
        var stackAction = new PPSMA._stackedZoneAction(this._connectionManagerRecord$0.WebPartRecords);
        stackAction.execute();
        this._ajaxRender$p$0(renderWebParts, this._renderConnectionTable$0, updateMode);
    },
    
    wireframeRender: function PPSMA_ClientConnectionManager$wireframeRender() {ULSh2q:;
        if (!this._wireframeAborted$0) {
            this._wireframeAborted$0 = [];
        }
        if (this._wireframeAborted$0.length > 0) {
            Array.clear(this._wireframeAborted$0);
        }
        PPSMA.Dashboard._updateRootElementBounds$i();
        var $$dict_0 = this._webPartTable$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var webPart = entry.value;
            webPart._updateBounds$i$2();
        }
        var manager = this;
        window.setTimeout(function() {ULSh2q:;;
        var $$dict_5 = manager._webPartTable$0;
        for (var $$key_6 in $$dict_5) {
            var entry = { key: $$key_6, value: $$dict_5[$$key_6] };
            var webPart = entry.value;
            if (!webPart.ignoreRender) {
                manager._wireframeRenderView$p$0(webPart);
            }
        }
        }, 0);;
        PPSMA.ClientConnectionManager._intervalId$p = window.setInterval(this.$$d__checkIfWireframeRenderFinished$p$0, PPSMA.ClientConnectionManager._idleInterval$p);
    },
    
    _isWireframeRenderFinished$p$0: function PPSMA_ClientConnectionManager$_isWireframeRenderFinished$p$0() {ULSh2q:;
        var $$dict_0 = this._webPartTable$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var webPart = entry.value;
            if (!webPart.ignoreRender) {
                if (webPart.get_renderAction() === PPSMA.WebPartRenderAction.wireframe) {
                    return false;
                }
            }
        }
        return true;
    },
    
    _checkIfWireframeRenderFinished$p$0: function PPSMA_ClientConnectionManager$_checkIfWireframeRenderFinished$p$0() {ULSh2q:;
        if (this._isWireframeRenderFinished$p$0()) {
            window.clearInterval(PPSMA.ClientConnectionManager._intervalId$p);
            if (this._wireframeAborted$0.length > 0) {
                var $$t_2 = this;
                Array.forEach(this._wireframeAborted$0, function(o) {ULSh2q:;
                    var webPart = o;
                    $$t_2._abortDownstreamWebRequests$p$0(webPart);
                    if ($$t_2._pendingFilterUpdates$0 && $$t_2._pendingFilterUpdates$0.length > 0) {
                        $$t_2._abortUpstreamPendingFilterChanges$p$0(webPart);
                    }
                });
                Array.clear(this._wireframeAborted$0);
            }
        }
    },
    
    _wireframeRenderView$p$0: function PPSMA_ClientConnectionManager$_wireframeRenderView$p$0(webPart) {ULSh2q:;
        var consumerConnections = this._findConsumerConnectionRecords$p$0(webPart, this._renderConnectionTable$0);
        var providerRecords = this._createProviderRecords$p$0(consumerConnections);
        var parameterRecords = this._findParameters$p$0(consumerConnections);
        var transformerRecords = this._findTransformerRecords$p$0(consumerConnections);
        var consumerRecord = this.createConsumerRecord(webPart);
        webPart._wireframeRender$i$2(this._renderWebPartContentUri$0, consumerRecord, providerRecords, consumerConnections, transformerRecords, parameterRecords);
    },
    
    hideStackedView: function PPSMA_ClientConnectionManager$hideStackedView(clientId) {ULSh2q:;
        this.findClientWebPart(clientId).set__stackedZoneState$i$2(PPSMA._stackedZoneState.stacked);
    },
    
    showStackedView: function PPSMA_ClientConnectionManager$showStackedView(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        webPart.set__stackedZoneState$i$2(PPSMA._stackedZoneState.selected);
        this._ajaxRenderConsumer$p$0(webPart, this._renderConnectionTable$0);
    },
    
    get_connectionManagerRecord: function PPSMA_ClientConnectionManager$get_connectionManagerRecord() {ULSh2q:;
        return this._connectionManagerRecord$0;
    },
    
    openNewWindow: function PPSMA_ClientConnectionManager$openNewWindow(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        webPart.openNewWindow(this._connectionManagerRecord$0);
    },
    
    openInCurrentWindow: function PPSMA_ClientConnectionManager$openInCurrentWindow(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        webPart.openInCurrentWindow(this._connectionManagerRecord$0);
    },
    
    resetView: function PPSMA_ClientConnectionManager$resetView(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        var viewState = {};
        viewState[PPSMA.ScriptConstants.openInNewWindowKey] = (webPart.isOpenInNewWindow) ? 'true' : 'false';
        this.setViewState(clientId, viewState);
        this._wireframeRenderView$p$0(webPart);
    },
    
    exportToExcel: function PPSMA_ClientConnectionManager$exportToExcel(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        var renderRequestRecord = this.createRenderRequestRecord(webPart);
        webPart.exportToExcel(renderRequestRecord);
    },
    
    exportToPowerPoint: function PPSMA_ClientConnectionManager$exportToPowerPoint(clientId) {ULSh2q:;
        var webPart = this.findClientWebPart(clientId);
        var renderRequestRecord = this.createRenderRequestRecord(webPart);
        webPart.exportToPowerPoint(renderRequestRecord);
    },
    
    createRenderRequestRecord: function PPSMA_ClientConnectionManager$createRenderRequestRecord(webPart) {ULSh2q:;
        var consumerConnections = this._findConsumerConnectionRecords$p$0(webPart, this._renderConnectionTable$0);
        var providerRecords = this._createProviderRecords$p$0(consumerConnections);
        var parameters = this._findParameters$p$0(consumerConnections);
        var transformerRecords = this._findTransformerRecords$p$0(consumerConnections);
        var parameterRecords = [];
        for (var i = 0; i < parameters.length; ++i) {
            var parameter = parameters[i];
            Array.add(parameterRecords, parameter._record$i$0);
        }
        return new PPSMA.AjaxRenderRequestRecord(consumerConnections, this.createConsumerRecord(webPart), parameterRecords, providerRecords, transformerRecords);
    },
    
    abortWebRequest: function PPSMA_ClientConnectionManager$abortWebRequest(providerId) {ULSh2q:;
        var providerWebPart = this.findClientWebPart(providerId);
        if (providerWebPart.get_renderAction() === PPSMA.WebPartRenderAction.wireframe) {
            Array.add(this._wireframeAborted$0, providerWebPart);
        }
        else {
            this._abortDownstreamWebRequests$p$0(providerWebPart);
            if (this._pendingFilterUpdates$0 && this._pendingFilterUpdates$0.length > 0) {
                this._abortUpstreamPendingFilterChanges$p$0(providerWebPart);
            }
        }
    },
    
    _abortUpstreamPendingFilterChanges$p$0: function PPSMA_ClientConnectionManager$_abortUpstreamPendingFilterChanges$p$0(providerWebPart) {ULSh2q:;
        var $$t_9 = this;
        var providerProviders = PPSMA.ArrayListEx.findAll(this._renderConnectionTable$0.get__connections$i$0(), function(item) {ULSh2q:;
            var record = item;
            if (record.ConsumerId === providerWebPart.get__webPartId$i$2()) {
                var upstreamProviderWebPart = $$t_9.findClientWebPart(record.ProviderId);
                return !!upstreamProviderWebPart;
            }
            else {
                return false;
            }
        });
        for (var i = 0; providerProviders.length > i; i++) {
            var providerConnectionRecord = providerProviders[i];
            if (providerConnectionRecord) {
                var upstreamProviderWebPart = this.findClientWebPart(providerConnectionRecord.ProviderId);
                if (upstreamProviderWebPart) {
                    var parameter = this._parameterTable$0._find$i$0(providerConnectionRecord.ProviderId, providerConnectionRecord.ProviderParameterName);
                    Array.remove(this._pendingFilterUpdates$0, parameter);
                    this._abortUpstreamPendingFilterChanges$p$0(upstreamProviderWebPart);
                }
            }
        }
    },
    
    _abortDownstreamWebRequests$p$0: function PPSMA_ClientConnectionManager$_abortDownstreamWebRequests$p$0(providerWebPart) {ULSh2q:;
        var $$t_8 = this;
        var providerConsumers = PPSMA.ArrayListEx.findAll(this._renderConnectionTable$0.get__connections$i$0(), function(item) {ULSh2q:;
            var record = item;
            if (record.ProviderId === providerWebPart.get__webPartId$i$2()) {
                var consumerWebPart = $$t_8.findClientWebPart(record.ConsumerId);
                return !!consumerWebPart;
            }
            else {
                return false;
            }
        });
        for (var i = 0; providerConsumers.length > i; i++) {
            var consumerConnectionRecord = providerConsumers[i];
            if (consumerConnectionRecord) {
                var consumerWebPart = this.findClientWebPart(consumerConnectionRecord.ConsumerId);
                if (consumerWebPart) {
                    consumerWebPart.abortRenderRequest();
                    this._abortDownstreamWebRequests$p$0(consumerWebPart);
                }
            }
        }
    }
}


PPSMA.ClientParameter = function PPSMA_ClientParameter(parameterRecord) {ULSh2q:;
    this._state$i$0 = 2;
    this._lastUpdated$i$0 = new Date();
    this._record$i$0 = parameterRecord;
}
PPSMA.ClientParameter.prototype = {
    _selectionsHashTable$0: null,
    _record$i$0: null,
    
    get__providerId$i$0: function PPSMA_ClientParameter$get__providerId$i$0() {ULSh2q:;
        return this._record$i$0.ProviderId;
    },
    
    get__name$i$0: function PPSMA_ClientParameter$get__name$i$0() {ULSh2q:;
        return this._record$i$0.Name;
    },
    
    get__updateAction$i$0: function PPSMA_ClientParameter$get__updateAction$i$0() {ULSh2q:;
        return this._record$i$0.UpdateAction;
    },
    
    _updateSelections$i$0: function PPSMA_ClientParameter$_updateSelections$i$0(selections) {ULSh2q:;
        this._record$i$0.Selections = selections;
        this._state$i$0 = 2;
        this._lastUpdated$i$0 = new Date();
        this._selectionsHashTable$0 = null;
    },
    
    get__selectionsHashTable$p$0: function PPSMA_ClientParameter$get__selectionsHashTable$p$0() {ULSh2q:;
        if (!isNullOrUndefined(this._selectionsHashTable$0)) {
            return this._selectionsHashTable$0;
        }
        this._selectionsHashTable$0 = {};
        var selections = this._record$i$0.Selections;
        for (var i = 0; i < selections.length; ++i) {
            this._selectionsHashTable$0[selections[i]] = '';
        }
        return this._selectionsHashTable$0;
    },
    
    isAnyMatch: function PPSMA_ClientParameter$isAnyMatch(selections) {ULSh2q:;
        var hashtable = this.get__selectionsHashTable$p$0();
        for (var i = 0; i < selections.length; ++i) {
            if (isNullOrUndefined(hashtable[selections[i]])) {
                continue;
            }
            return true;
        }
        return false;
    }
}


PPSMA._clientParameterKey = function PPSMA__clientParameterKey(providerId, name) {ULSh2q:;
    this._providerId$i$0 = providerId;
    this._name$i$0 = name;
}
PPSMA._clientParameterKey.prototype = {
    _providerId$i$0: null,
    _name$i$0: null
}


PPSMA._clientParameterTable = function PPSMA__clientParameterTable(records) {ULSh2q:;
    this._parameters$0 = [];
    for (var i = 0; i < records.length; ++i) {
        Array.add(this._parameters$0, new PPSMA.ClientParameter(records[i]));
    }
}
PPSMA._clientParameterTable.createKey = function PPSMA__clientParameterTable$createKey(providerId, parameterName) {ULSh2q:;
    return Sys.Serialization.JavaScriptSerializer.serialize(new PPSMA._clientParameterKey(providerId, parameterName));
}
PPSMA._clientParameterTable.parseKey = function PPSMA__clientParameterTable$parseKey(json) {ULSh2q:;
    return Sys.Serialization.JavaScriptSerializer.deserialize(json);
}
PPSMA._clientParameterTable.prototype = {
    
    _exists$i$0: function PPSMA__clientParameterTable$_exists$i$0(providerId, parameterName) {ULSh2q:;
        return !isNullOrUndefined(this._find$i$0(providerId, parameterName));
    },
    
    _find$i$0: function PPSMA__clientParameterTable$_find$i$0(providerWebPartId, parameterName) {ULSh2q:;
        var $$t_4 = this;
        return PPSMA.ArrayListEx.find(this._parameters$0, function(o) {ULSh2q:;
            var parameter = o;
            return (parameter.get__providerId$i$0() === providerWebPartId) && (parameter.get__name$i$0() === parameterName);
        });
    },
    
    _saveSelectionsToJSON$i$0: function PPSMA__clientParameterTable$_saveSelectionsToJSON$i$0() {ULSh2q:;
        return Sys.Serialization.JavaScriptSerializer.serialize(this.get__parameterRecords$i$0());
    },
    
    _loadSelectionsFromJSON$i$0: function PPSMA__clientParameterTable$_loadSelectionsFromJSON$i$0(savedParameters) {ULSh2q:;
        if (isNullUndefinedOrEmpty(savedParameters)) {
            return;
        }
        var savedParams = [];
        savedParams = Sys.Serialization.JavaScriptSerializer.deserialize(savedParameters);
        var $$t_5 = this;
        Array.forEach(savedParams, function(o) {ULSh2q:;
            var oldParamRecord = o;
            var currentParam = $$t_5._find$i$0(oldParamRecord.ProviderId, oldParamRecord.Name);
            if (!isNullOrUndefined(currentParam)) {
                currentParam._updateSelections$i$0(oldParamRecord.Selections);
            }
        });
    },
    
    get__parameterRecords$i$0: function PPSMA__clientParameterTable$get__parameterRecords$i$0() {ULSh2q:;
        var parameters = [];
        var $$t_3 = this;
        Array.forEach(this._parameters$0, function(o) {ULSh2q:;
            var parameter = o;
            Array.add(parameters, parameter._record$i$0);
        });
        return parameters;
    },
    
    _findAllByProvider$i$0: function PPSMA__clientParameterTable$_findAllByProvider$i$0(providerId) {ULSh2q:;
        var $$t_3 = this;
        return PPSMA.ArrayListEx.findAll(this._parameters$0, function(o) {ULSh2q:;
            var parameter = o;
            return parameter.get__providerId$i$0() === providerId;
        });
    }
}


PPSMA._clientTransformerTable = function PPSMA__clientTransformerTable(clientTransformerRecords) {ULSh2q:;
    this._records$0 = [];
    Array.addRange(this._records$0, clientTransformerRecords);
}
PPSMA._clientTransformerTable.prototype = {
    
    find: function PPSMA__clientTransformerTable$find(id) {ULSh2q:;
        var $$t_2 = this;
        return PPSMA.ArrayListEx.find(this._records$0, function(o) {ULSh2q:;
            return (o).Id === id;
        });
    }
}


PPSMA._conditionalVisibilityAction = function PPSMA__conditionalVisibilityAction(webPartTable, parameterTable, visibilityConnections) {ULSh2q:;
    this._webPartTable$0 = webPartTable;
    this._parameterTable$0 = parameterTable;
    this._visibilityConnections$0 = visibilityConnections;
}
PPSMA._conditionalVisibilityAction.prototype = {
    _webPartTable$0: null,
    _parameterTable$0: null,
    _visibilityConnections$0: null,
    _changedWebParts$0: null,
    _visibilityConsumers$0: null,
    
    initialize: function PPSMA__conditionalVisibilityAction$initialize() {ULSh2q:;
        this._visibilityConsumers$0 = {};
        for (var i = 0; i < this._visibilityConnections$0.length; ++i) {
            var connection = this._visibilityConnections$0[i];
            if (PPSMA.DictionaryEx.containsKey(this._visibilityConsumers$0, connection.ConsumerId)) {
                continue;
            }
            var consumer = new PPSMA._consumerVisibility(connection.ConsumerId);
            consumer._isClientConnectable$i$0 = connection.IsClientConnectable;
            this._visibilityConsumers$0[connection.ConsumerId] = consumer;
            var webPart = this._webPartTable$0[connection.ConsumerId];
            if (isNullOrUndefined(webPart)) {
                continue;
            }
            consumer._visibilityParameterName$i$0 = webPart.get__visibilityParameterName$i$2();
        }
    },
    
    get__isPostback$i$0: function PPSMA__conditionalVisibilityAction$get__isPostback$i$0() {ULSh2q:;
        var $$dict_0 = this._visibilityConsumers$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var consumer = entry.value;
            if (consumer._isClientConnectable$i$0 || (consumer._visibilityState$i$0 !== PPSMA.ClientVisibilityState.visible)) {
                continue;
            }
            return true;
        }
        return false;
    },
    
    get__webParts$i$0: function PPSMA__conditionalVisibilityAction$get__webParts$i$0() {ULSh2q:;
        if (isNullOrUndefined(this._changedWebParts$0)) {
            this._changedWebParts$0 = [];
            var $$dict_0 = this._visibilityConsumers$0;
            for (var $$key_1 in $$dict_0) {
                var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
                var consumer = entry.value;
                if (!consumer._isClientConnectable$i$0) {
                    continue;
                }
                if (!consumer._visibilityState$i$0) {
                    continue;
                }
                var webPart = this._webPartTable$0[consumer._webPartId$i$0];
                if (isNullOrUndefined(webPart) || consumer._visibilityState$i$0 === webPart.get__visibilityState$i$2()) {
                    continue;
                }
                webPart.set__visibilityState$i$2(consumer._visibilityState$i$0);
                Array.add(this._changedWebParts$0, webPart);
            }
        }
        return this._changedWebParts$0;
    },
    
    _applyDefaultVisibility$p$0: function PPSMA__conditionalVisibilityAction$_applyDefaultVisibility$p$0(providerId, parameterName) {ULSh2q:;
        if (this._isProviderHidden$p$0(providerId)) {
            return;
        }
        var parameter = this._parameterTable$0._find$i$0(providerId, parameterName);
        if (!parameter || parameter._state$i$0 === 1) {
            return;
        }
        var providerConnections;
        providerConnections = this._findProviderConnections$p$0(providerId, parameterName);
        var isDefaultVisibility = true;
        for (var i = 0; i < providerConnections.length; ++i) {
            var connection = providerConnections[i];
            var consumer = this._getConsumer$p$0(connection.ConsumerId);
            if (parameter._record$i$0.Selections.length > 0 || consumer._containsVisibleProvider$i$0(connection.ProviderId, connection.ProviderParameterName)) {
                isDefaultVisibility = false;
                break;
            }
        }
        if (isDefaultVisibility) {
            for (var i = 0; i < providerConnections.length; ++i) {
                var connection = providerConnections[i];
                if (connection.IsDefaultVisibility) {
                    var consumer = this._getConsumer$p$0(connection.ConsumerId);
                    consumer._visibilityState$i$0 = PPSMA.ClientVisibilityState.visible;
                }
            }
        }
    },
    
    _discoverVisibility$p$0: function PPSMA__conditionalVisibilityAction$_discoverVisibility$p$0(providerId, parameterName) {ULSh2q:;
        var connections;
        connections = this._findProviderConnections$p$0(providerId, parameterName);
        for (var i = 0; i < connections.length; ++i) {
            var connection = connections[i];
            var consumer = this._getConsumer$p$0(connection.ConsumerId);
            this._setConsumerVisibilityState$p$0(consumer);
            if (consumer.get__isProvider$i$0() && (consumer._visibilityState$i$0 !== PPSMA.ClientVisibilityState.pendingChange)) {
                this._discoverVisibility$p$0(consumer._webPartId$i$0, consumer._visibilityParameterName$i$0);
            }
        }
        this._applyDefaultVisibility$p$0(providerId, parameterName);
    },
    
    _execute$i$0: function PPSMA__conditionalVisibilityAction$_execute$i$0(parameterUpdates) {ULSh2q:;
        this.initialize();
        for (var i = 0; i < parameterUpdates.length; ++i) {
            var parameter = parameterUpdates[i];
            this._discoverVisibility$p$0(parameter.get__providerId$i$0(), parameter.get__name$i$0());
        }
    },
    
    _findConsumerConnections$p$0: function PPSMA__conditionalVisibilityAction$_findConsumerConnections$p$0(webPartId) {ULSh2q:;
        var result = [];
        for (var i = 0; i < this._visibilityConnections$0.length; ++i) {
            var connection = this._visibilityConnections$0[i];
            if (connection.ConsumerId === webPartId) {
                Array.add(result, connection);
            }
        }
        return result;
    },
    
    _findProviderConnections$p$0: function PPSMA__conditionalVisibilityAction$_findProviderConnections$p$0(providerId, parameterName) {ULSh2q:;
        var result = [];
        for (var i = 0; i < this._visibilityConnections$0.length; ++i) {
            var connection = this._visibilityConnections$0[i];
            if ((connection.ProviderId === providerId) && (connection.ProviderParameterName === parameterName)) {
                Array.add(result, connection);
            }
        }
        return result;
    },
    
    _getConsumer$p$0: function PPSMA__conditionalVisibilityAction$_getConsumer$p$0(consumerId) {ULSh2q:;
        return this._visibilityConsumers$0[consumerId];
    },
    
    _getConsumerVisibility$i$0: function PPSMA__conditionalVisibilityAction$_getConsumerVisibility$i$0(consumerId) {ULSh2q:;
        var consumer = this._getConsumer$p$0(consumerId);
        if (isNullOrUndefined(consumer)) {
            return 0;
        }
        return consumer._visibilityState$i$0;
    },
    
    _isProviderHidden$p$0: function PPSMA__conditionalVisibilityAction$_isProviderHidden$p$0(providerId) {ULSh2q:;
        var consumerProvider = this._getConsumer$p$0(providerId);
        if (isNullOrUndefined(consumerProvider)) {
            return false;
        }
        return (consumerProvider._visibilityState$i$0 === PPSMA.ClientVisibilityState.hidden);
    },
    
    _setConsumerVisibilityState$p$0: function PPSMA__conditionalVisibilityAction$_setConsumerVisibilityState$p$0(consumer) {ULSh2q:;
        var consumerConnections;
        consumerConnections = this._findConsumerConnections$p$0(consumer._webPartId$i$0);
        var isProviderPendingChange = false;
        var isVisible = false;
        for (var i = 0; i < consumerConnections.length; ++i) {
            var connection = consumerConnections[i];
            var parameter = this._parameterTable$0._find$i$0(connection.ProviderId, connection.ProviderParameterName);
            if (parameter._state$i$0 === 1) {
                isProviderPendingChange = true;
                continue;
            }
            if (this._isProviderHidden$p$0(connection.ProviderId)) {
                continue;
            }
            if (parameter.isAnyMatch(connection.VisibilitySelections)) {
                consumer._addVisibleProvider$i$0(connection.ProviderId, connection.ProviderParameterName);
                isVisible = true;
            }
        }
        if (isVisible) {
            consumer._visibilityState$i$0 = PPSMA.ClientVisibilityState.visible;
        }
        else if (isProviderPendingChange) {
            consumer._visibilityState$i$0 = PPSMA.ClientVisibilityState.pendingChange;
        }
        else {
            consumer._visibilityState$i$0 = PPSMA.ClientVisibilityState.hidden;
        }
    }
}


PPSMA._consumerVisibility = function PPSMA__consumerVisibility(consumerId) {ULSh2q:;
    this._visibilityState$i$0 = 0;
    this._visibleProviderParameterKeys$0 = [];
    this._webPartId$i$0 = consumerId;
}
PPSMA._consumerVisibility.prototype = {
    _webPartId$i$0: null,
    _isClientConnectable$i$0: false,
    _visibilityParameterName$i$0: null,
    
    _addVisibleProvider$i$0: function PPSMA__consumerVisibility$_addVisibleProvider$i$0(providerId, parameterName) {ULSh2q:;
        if (!this._containsVisibleProvider$i$0(providerId, parameterName)) {
            Array.add(this._visibleProviderParameterKeys$0, new PPSMA._clientParameterKey(providerId, parameterName));
        }
    },
    
    _containsVisibleProvider$i$0: function PPSMA__consumerVisibility$_containsVisibleProvider$i$0(providerId, parameterName) {ULSh2q:;
        var $$t_4 = this;
        return PPSMA.ArrayListEx.exists(this._visibleProviderParameterKeys$0, function(o) {ULSh2q:;
            var item = o;
            return (item._providerId$i$0 === providerId) && (item._name$i$0 === parameterName);
        });
    },
    
    _removeVisibleProvider$i$0: function PPSMA__consumerVisibility$_removeVisibleProvider$i$0(providerId, parameterName) {ULSh2q:;
        var $$t_5 = this;
        var parameterKey = PPSMA.ArrayListEx.find(this._visibleProviderParameterKeys$0, function(o) {ULSh2q:;
            var item = o;
            return (item._providerId$i$0 === providerId) && (item._name$i$0 === parameterName);
        });
        if (isNullOrUndefined(parameterKey)) {
            return false;
        }
        Array.remove(this._visibleProviderParameterKeys$0, parameterKey);
        return true;
    },
    
    get__isProvider$i$0: function PPSMA__consumerVisibility$get__isProvider$i$0() {ULSh2q:;
        return !isNullUndefinedOrEmpty(this._visibilityParameterName$i$0);
    },
    
    get__isVisible$i$0: function PPSMA__consumerVisibility$get__isVisible$i$0() {ULSh2q:;
        return !!this._visibleProviderParameterKeys$0.length;
    }
}


PPSMA.ClientWebPart = function PPSMA_ClientWebPart(element) {ULSh2q:;
    this.$$d__onRenderRequestCompleted$p$2 = Function.createDelegate(this, this._onRenderRequestCompleted$p$2);
    this.$$d__clientWebPart_OnCancelled$p$2 = Function.createDelegate(this, this._clientWebPart_OnCancelled$p$2);
    this.$$d__title_OnClick$p$2 = Function.createDelegate(this, this._title_OnClick$p$2);
    this._renderAction$2 = 0;
    this._renderDeferredParameterChanges$2 = [];
    this._stackedZoneState$2 = PPSMA._stackedZoneState.notStacked;
    PPSMA.ClientWebPart.initializeBase(this, [ element ]);
    var webPartZoneCell = $get('MSOZoneCell_WebPart' + element.id);
    if (!isNullOrUndefined(webPartZoneCell)) {
        this._webPartOuterElement$2 = PPSMA.DomElementEx.getFirstChildElementByTagName(webPartZoneCell, 'div');
    }
    if (isNullOrUndefined(this._webPartOuterElement$2)) {
        throw Error.create(PPSMA.SR.Framework_MissingWebPartOuterTable);
    }
}
PPSMA.ClientWebPart._findTitleSpan$p = function PPSMA_ClientWebPart$_findTitleSpan$p(element) {ULSh2q:;
    var returnElement = null;
    if (!isNullOrUndefined(element)) {
        if (!isNullOrUndefined(element.tagName) && element.tagName.toLowerCase() === 'span' && isNullUndefinedOrEmpty(element.id)) {
            returnElement = element;
        }
        else if (element.childNodes.length > 0) {
            for (var i = 0; i < element.childNodes.length; i++) {
                returnElement = PPSMA.ClientWebPart._findTitleSpan$p(element.childNodes[i]);
                if (!isNullOrUndefined(returnElement)) {
                    break;
                }
            }
        }
    }
    return returnElement;
}
PPSMA.ClientWebPart.trace = function PPSMA_ClientWebPart$trace(msg) {
}
PPSMA.ClientWebPart.prototype = {
    widthMultiplier: 0,
    heightMultiplier: 0,
    isFilterWebPart: false,
    isOpenInNewWindow: false,
    isTitleLink: false,
    ignoreRender: false,
    webPartTitle: '',
    pageTitle: '',
    dashboardLink: '',
    dynamicViewPage: '',
    zoneId: '',
    officeExportPage: '',
    waitImageUri: '',
    _record$2: null,
    _renderRequestStartTime$2: 0,
    _htmlAssignStartTime$2: 0,
    _scriptEvalStartTime$2: 0,
    _isRequestCancelled$2: false,
    _disposableViews$2: null,
    _renderWebRequest$2: null,
    _initialRender$2: true,
    _lastRendered$2: null,
    _visibilityState$2: 0,
    _webPartOuterElement$2: null,
    
    _initializeRecord$i$2: function PPSMA_ClientWebPart$_initializeRecord$i$2(record) {ULSh2q:;
        this._record$2 = record;
        if (!isNullUndefinedOrEmpty(this._record$2.ClientId)) {
            this._findTitleElement$p$2(this._record$2.ClientId);
        }
        if (!isNullOrUndefined(this._titleElement$i$2)) {
            PPSMA.DomElementEx.setInnerText(this._titleElement$i$2, this.webPartTitle);
            this._titleElement$i$2.title = this.webPartTitle;
            if (this.isTitleLink) {
                this._createTitleLink$p$2();
            }
        }
        this.set__visibilityState$i$2((this._record$2.Hidden) ? PPSMA.ClientVisibilityState.hidden : PPSMA.ClientVisibilityState.visible);
    },
    
    dispose: function PPSMA_ClientWebPart$dispose() {ULSh2q:;
        if (this._renderWebRequest$2) {
            this._renderWebRequest$2.dispose();
            this._renderWebRequest$2 = null;
        }
        this._webPartOuterElement$2 = null;
        this._disposeOfViews$p$2();
    },
    
    registerDisposableView: function PPSMA_ClientWebPart$registerDisposableView(view) {ULSh2q:;
        if (!this._disposableViews$2) {
            this._disposableViews$2 = [];
        }
        Array.add(this._disposableViews$2, view);
    },
    
    unregisterDisposableView: function PPSMA_ClientWebPart$unregisterDisposableView(view) {ULSh2q:;
        if (!this._disposableViews$2) {
            return;
        }
        Array.remove(this._disposableViews$2, view);
    },
    
    _disposeOfViews$p$2: function PPSMA_ClientWebPart$_disposeOfViews$p$2() {ULSh2q:;
        if (!this._disposableViews$2) {
            return;
        }
        for (var i = 0; i < this._disposableViews$2.length; ++i) {
            var view = this._disposableViews$2[i];
            view.dispose();
        }
        Array.clear(this._disposableViews$2);
        this._disposableViews$2 = null;
    },
    
    get__clientId$i$2: function PPSMA_ClientWebPart$get__clientId$i$2() {ULSh2q:;
        return this.get_id();
    },
    
    get__record$i$2: function PPSMA_ClientWebPart$get__record$i$2() {ULSh2q:;
        return this._record$2;
    },
    
    get__webPartId$i$2: function PPSMA_ClientWebPart$get__webPartId$i$2() {ULSh2q:;
        return this._record$2.Id;
    },
    
    updateViewStateEntry: function PPSMA_ClientWebPart$updateViewStateEntry(key, value) {ULSh2q:;
        if (!isNullOrUndefined(this._record$2)) {
            this._record$2.ViewState[key] = value;
        }
    },
    
    get__stackedZoneState$i$2: function PPSMA_ClientWebPart$get__stackedZoneState$i$2() {ULSh2q:;
        return this._stackedZoneState$2;
    },
    set__stackedZoneState$i$2: function PPSMA_ClientWebPart$set__stackedZoneState$i$2(value) {ULSh2q:;
        this._stackedZoneState$2 = value;
        if (this._stackedZoneState$2 === PPSMA._stackedZoneState.selected) {
            this._webPartOuterElement$2.parentNode.style.display = 'block';
        }
        else if (this._stackedZoneState$2 === PPSMA._stackedZoneState.stacked) {
            this._webPartOuterElement$2.parentNode.style.display = 'none';
        }
        return value;
    },
    
    get__hidden$i$2: function PPSMA_ClientWebPart$get__hidden$i$2() {ULSh2q:;
        return this._record$2.Hidden;
    },
    set__hidden$i$2: function PPSMA_ClientWebPart$set__hidden$i$2(value) {ULSh2q:;
        var makeHidden = ((value) && (!this._record$2.Hidden)) ? true : false;
        var makeVisible = ((!value) && (this._record$2.Hidden)) ? true : false;
        this._record$2.Hidden = value;
        if (isNullOrUndefined(this._webPartOuterElement$2)) {
            throw Error.create(PPSMA.SR.Framework_MissingWebPartOuterTable);
        }
        if (makeHidden) {
            this._webPartOuterElement$2.style.display = 'none';
            this._hideWebPartSpacer$p$2();
        }
        else if (makeVisible) {
            this._webPartOuterElement$2.style.display = 'block';
            this._showWebPartSpacer$p$2();
            if ((!isNullOrUndefined(this._webPartOuterElement$2.parentNode)) && (this._webPartOuterElement$2.parentNode.style.display === 'none')) {
                this._webPartOuterElement$2.parentNode.style.display = '';
            }
        }
        return value;
    },
    
    _hideWebPartSpacer$p$2: function PPSMA_ClientWebPart$_hideWebPartSpacer$p$2() {ULSh2q:;
        var spacerDiv = this._findPartSpacerDiv$p$2();
        if (!isNullOrUndefined(spacerDiv)) {
            spacerDiv.style.display = 'none';
        }
    },
    
    _showWebPartSpacer$p$2: function PPSMA_ClientWebPart$_showWebPartSpacer$p$2() {ULSh2q:;
        var spacerDiv = this._findPartSpacerDiv$p$2();
        if (!isNullOrUndefined(spacerDiv)) {
            spacerDiv.style.display = 'block';
        }
    },
    
    _findPartSpacerDiv$p$2: function PPSMA_ClientWebPart$_findPartSpacerDiv$p$2() {ULSh2q:;
        var spacingDiv = null;
        if (!isNullOrUndefined(this._webPartOuterElement$2.nextSibling) && this._webPartOuterElement$2.nextSibling.className === 'ms-PartSpacingVertical') {
            spacingDiv = this._webPartOuterElement$2.nextSibling;
        }
        else if (!isNullOrUndefined(this._webPartOuterElement$2.parentNode)) {
            var parent = this._webPartOuterElement$2.parentNode;
            if (!isNullOrUndefined(parent.nextSibling)) {
                var divOuterCell = parent.nextSibling;
                if (!isNullOrUndefined(divOuterCell.firstChild) && divOuterCell.firstChild.className === 'ms-PartSpacingHorizontal') {
                    spacingDiv = divOuterCell.firstChild;
                }
            }
        }
        return spacingDiv;
    },
    
    get__visibilityParameterName$i$2: function PPSMA_ClientWebPart$get__visibilityParameterName$i$2() {ULSh2q:;
        return this._record$2.VisibilityParameterName;
    },
    
    get__visibilityState$i$2: function PPSMA_ClientWebPart$get__visibilityState$i$2() {ULSh2q:;
        return this._visibilityState$2;
    },
    set__visibilityState$i$2: function PPSMA_ClientWebPart$set__visibilityState$i$2(value) {ULSh2q:;
        if (this._visibilityState$2 === value) {
            return value;
        }
        this._visibilityState$2 = value;
        if (value === PPSMA.ClientVisibilityState.hidden) {
            this.set__hidden$i$2(true);
        }
        else if (value === PPSMA.ClientVisibilityState.visible) {
            this.set__hidden$i$2(false);
        }
        return value;
    },
    
    _titleElement$i$2: null,
    _titleHeight$2: 0,
    
    _createTitleLink$p$2: function PPSMA_ClientWebPart$_createTitleLink$p$2() {ULSh2q:;
        if (!isNullOrUndefined(this._titleElement$i$2)) {
            var parentNode = this._titleElement$i$2.parentNode.parentNode;
            var contentElement = parentNode.removeChild(this._titleElement$i$2.parentNode);
            var titleLink = document.createElement('a');
            titleLink.href = 'javascript://';
            $addHandler(titleLink, 'click', this.$$d__title_OnClick$p$2);
            titleLink.appendChild(contentElement);
            parentNode.appendChild(titleLink);
        }
    },
    
    _findTitleElement$p$2: function PPSMA_ClientWebPart$_findTitleElement$p$2(clientId) {ULSh2q:;
        var titleContainer = $get('WebPartTitle' + clientId);
        if (isNullOrUndefined(titleContainer)) {
            this._titleHeight$2 = 0;
            this._titleElement$i$2 = null;
        }
        else {
            this._titleHeight$2 = titleContainer.parentNode.offsetHeight;
            this._titleElement$i$2 = PPSMA.ClientWebPart._findTitleSpan$p(titleContainer);
        }
    },
    
    _title_OnClick$p$2: function PPSMA_ClientWebPart$_title_OnClick$p$2(e) {ULSh2q:;
        this.openInCurrentWindow(PPSMA.ClientConnectionManager.get_instance().get_connectionManagerRecord());
    },
    
    get__height$i$2: function PPSMA_ClientWebPart$get__height$i$2() {ULSh2q:;
        return this._getElementRenderHeight$p$2(this.get_element());
    },
    
    get__width$i$2: function PPSMA_ClientWebPart$get__width$i$2() {ULSh2q:;
        return this._getElementRenderWidth$p$2(this.get_element());
    },
    
    _getViewContainerHeight$p$2: function PPSMA_ClientWebPart$_getViewContainerHeight$p$2(containerElement) {ULSh2q:;
        var targetHeight = getDefinedHeight(containerElement);
        if (this.isOpenInNewWindow) {
            if (!isNullOrUndefined(PPSMA.Dashboard.get__rootElementBounds$i())) {
                targetHeight = PPSMA.Common._toPixels$i(PPSMA.Dashboard.get__rootElementBounds$i().height);
            }
            else {
                targetHeight = PPSMA.Common._toPixels$i(containerElement.parentNode.offsetHeight);
            }
        }
        else if (this.heightMultiplier && targetHeight === 'auto') {
            targetHeight = PPSMA.Common._toPixels$i(containerElement.parentNode.offsetHeight);
        }
        return targetHeight;
    },
    
    _getViewContainerWidth$p$2: function PPSMA_ClientWebPart$_getViewContainerWidth$p$2(containerElement) {ULSh2q:;
        var targetWidth = getDefinedWidth(containerElement);
        if (this.isOpenInNewWindow || (this.widthMultiplier && targetWidth === 'auto')) {
            targetWidth = PPSMA.Common._toPixels$i(containerElement.parentNode.offsetWidth);
        }
        return targetWidth;
    },
    
    _setViewContainerBounds$p$2: function PPSMA_ClientWebPart$_setViewContainerBounds$p$2(containerElement) {ULSh2q:;
        if (PPSMA.Dashboard.get__rootElement$i()) {
            var targetWidth = getDefinedWidth(containerElement);
            if (this.widthMultiplier > 0 && targetWidth === 'auto') {
                var partPadding = 8;
                var width = Math.floor(PPSMA.Dashboard.get__rootElementBounds$i().width * this.widthMultiplier + 0.5) - partPadding;
                if (width < 0) {
                    width = 0;
                }
                this._webPartOuterElement$2.style.width = width + 'px';
                containerElement.style.width = width + 'px';
            }
            var targetHeight = getDefinedHeight(containerElement);
            if (this.heightMultiplier > 0 && targetHeight === 'auto') {
                var titleHeight = 30;
                var bottomPadding = (this.isOpenInNewWindow) ? 8 : 20;
                var height = Math.floor(PPSMA.Dashboard.get__rootElementBounds$i().height * this.heightMultiplier + 0.5) - titleHeight - bottomPadding;
                if (height < 0) {
                    height = 0;
                }
                containerElement.style.height = height + 'px';
            }
        }
        containerElement.style.display = 'block';
    },
    
    get__deferredParameterChanges$i$2: function PPSMA_ClientWebPart$get__deferredParameterChanges$i$2() {ULSh2q:;
        return this._renderDeferredParameterChanges$2;
    },
    
    get__ignoreParameterUpdates$i$2: function PPSMA_ClientWebPart$get__ignoreParameterUpdates$i$2() {ULSh2q:;
        return this.get_renderAction() === PPSMA.WebPartRenderAction.wireframe;
    },
    
    get__isRenderPending$i$2: function PPSMA_ClientWebPart$get__isRenderPending$i$2() {ULSh2q:;
        return !!this._renderDeferredParameterChanges$2.length;
    },
    
    get_renderAction: function PPSMA_ClientWebPart$get_renderAction() {ULSh2q:;
        return this._renderAction$2;
    },
    set_renderAction: function PPSMA_ClientWebPart$set_renderAction(value) {ULSh2q:;
        this._renderAction$2 = value;
        return value;
    },
    
    get__initialRender$i$2: function PPSMA_ClientWebPart$get__initialRender$i$2() {ULSh2q:;
        return this._initialRender$2;
    },
    set__initialRender$i$2: function PPSMA_ClientWebPart$set__initialRender$i$2(value) {ULSh2q:;
        this._initialRender$2 = value;
        return value;
    },
    
    _onRenderRequestCompleted$p$2: function PPSMA_ClientWebPart$_onRenderRequestCompleted$p$2(requestExecutor) {ULSh2q:;
        try {
            if (requestExecutor.get_aborted()) {
                PPSMA.ClientWebPart.trace(String.format('{0}.OnRenderRequestCompleted: aborted ajax request detected', this.get__clientId$i$2()));
                this._renderAction$2 = 0;
                return;
            }
            this._renderWebRequest$2.dispose();
            this._renderWebRequest$2 = null;
            var error = true;
            if (requestExecutor.get_statusCode() === 200) {
                try {
                    var resultRecord;
                    resultRecord = PPSMA.WebRequestExecuterEx.simpleResult(requestExecutor, 'AjaxRenderResultRecord');
                    if (!isNullOrUndefined(resultRecord)) {
                        this._renderResult$p$2(resultRecord);
                        error = false;
                    }
                    PPSMA.ArrayListEx.clear(this._renderDeferredParameterChanges$2);
                    this._lastRendered$2 = new Date();
                }
                catch (e) {
                    error = true;
                }
            }
            if (error) {
                PPSMA.ClientWebPart.trace(String.format('{0}.OnRenderRequestCompleted: statusCode={1}', this.get__clientId$i$2(), requestExecutor.get_statusCode()));
                var target = this.get_element();
                target.style.position = 'static';
                target.innerHTML = String.format('<div class=\"ms-bireport-error ms-error\"><div>{0}</div></div>', PPSMA.SR.Dashboard_Render_UnexpectedError);
            }
            this._renderAction$2 = 0;
        }
        finally {
            var elapsedTime = new Date().getTime() - this._renderRequestStartTime$2;
            PPSMA.PerformanceLogger.log('clientWebPartResponseTime', this.webPartTitle, elapsedTime);
        }
        FixRibbonAndWorkspaceDimensions();;
    },
    
    _wireframeRender$i$2: function PPSMA_ClientWebPart$_wireframeRender$i$2(url, consumerRecord, providerRecords, connectionRecords, transformerRecords, parameters) {ULSh2q:;
        this._renderAction$2 = PPSMA.WebPartRenderAction.wireframe;
        var updatedParameters = parameters;
        this._render$i$2(url, consumerRecord, providerRecords, connectionRecords, transformerRecords, updatedParameters, 0);
    },
    
    _render$i$2: function PPSMA_ClientWebPart$_render$i$2(url, consumerRecord, providerRecords, connectionRecords, transformerRecords, parameters, updateMode) {ULSh2q:;
        var pendingChangeParameters = false;
        var parameterRecords = [];
        for (var i = 0; i < parameters.length; ++i) {
            var parameter = parameters[i];
            if (parameter._state$i$0 === 1) {
                pendingChangeParameters = true;
            }
            Array.add(parameterRecords, parameter._record$i$0);
        }
        this._deferParameterChanges$p$2(parameters);
        if (this._stackedZoneState$2 === PPSMA._stackedZoneState.stacked) {
            return;
        }
        if (this.get__hidden$i$2()) {
            this._hideWebPartSpacer$p$2();
            return;
        }
        if (!this._renderAction$2) {
            return;
        }
        if (!PPSMA.ClientConnectionManager.get_instance().get_autoApplyFilterUpdates()) {
            if ((updateMode === PPSMA.FilterUpdateMode.filtersOnly && !this.isFilterWebPart) || (updateMode === PPSMA.FilterUpdateMode.nonFiltersOnly && this.isFilterWebPart)) {
                return;
            }
        }
        consumerRecord.Width = this._getElementRenderWidth$p$2(this.get_element());
        consumerRecord.Height = this._getElementRenderHeight$p$2(this.get_element());
        PPSMA.ClientWebPart.trace(this.get__clientId$i$2() + ' - Render Width: ' + consumerRecord.Width);
        PPSMA.ClientWebPart.trace(this.get__clientId$i$2() + ' - Render Height: ' + consumerRecord.Height);
        if (!this._renderWebRequest$2 || this._isRequestCancelled$2) {
            if (this.isFilterWebPart) {
                this._renderWebRequest$2 = new PPSMA.NoCancelWebRequest(this.get_element(), null, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
            }
            else {
                PPSMA.ClientWebPart.trace('ClientWebPart.Render');
                PPSMA.ClientWebPart.trace('\t\tWaitImageUri:' + this.waitImageUri);
                PPSMA.ClientWebPart.trace('     WebPartId:' + this.get__webPartId$i$2());
                PPSMA.ClientWebPart.trace('     ZoneId:' + this.zoneId);
                PPSMA.ClientWebPart.trace('     ClientId:' + this.get__clientId$i$2());
                if (this._renderWebRequest$2) {
                    this._renderWebRequest$2.hide();
                    (this._renderWebRequest$2).remove_onCancelled(this.$$d__clientWebPart_OnCancelled$p$2);
                }
                this._renderWebRequest$2 = new PPSMA.CancellableWebRequest(this.get_element(), PPSMA.RenderWebRequest.msgtypE_LOADING, this.waitImageUri, this.get_element().id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
                (this._renderWebRequest$2).add_onCancelled(this.$$d__clientWebPart_OnCancelled$p$2);
                this._isRequestCancelled$2 = false;
            }
        }
        this._renderWebRequest$2.show();
        if (pendingChangeParameters) {
        }
        else {
            var renderRequestRecord = new PPSMA.AjaxRenderRequestRecord(connectionRecords, consumerRecord, parameterRecords, providerRecords, transformerRecords);
            var body = { renderRequestRecord: renderRequestRecord };
            var details = new PPSMA.WebRequestDetails(url, Sys.Serialization.JavaScriptSerializer.serialize(body), 'POST', 'application/json; charset=utf-8', this.$$d__onRenderRequestCompleted$p$2);
            this._renderRequestStartTime$2 = new Date().getTime();
            this._renderWebRequest$2.submit(details);
        }
    },
    
    _getElementRenderWidth$p$2: function PPSMA_ClientWebPart$_getElementRenderWidth$p$2(element) {ULSh2q:;
        var width;
        if (!isNullUndefinedOrEmpty(element.getAttribute('rw')) && element.getAttribute('rw') === 'auto') {
            width = 'auto';
        }
        else {
            width = (getStyle(element, 'width') === 'auto') ? 'auto' : PPSMA.Common._toPixels$i(this.get_element().offsetWidth);
        }
        return width;
    },
    
    _getElementRenderHeight$p$2: function PPSMA_ClientWebPart$_getElementRenderHeight$p$2(element) {ULSh2q:;
        var height;
        if (!isNullUndefinedOrEmpty(element.getAttribute('rh')) && element.getAttribute('rh') === 'auto') {
            height = 'auto';
        }
        else {
            height = (getStyle(element, 'height') === 'auto') ? 'auto' : PPSMA.Common._toPixels$i(this.get_element().offsetHeight);
        }
        return height;
    },
    
    _updateBounds$i$2: function PPSMA_ClientWebPart$_updateBounds$i$2() {ULSh2q:;
        this._setViewContainerBounds$p$2(this.get_element());
    },
    
    _clientWebPart_OnCancelled$p$2: function PPSMA_ClientWebPart$_clientWebPart_OnCancelled$p$2(request) {ULSh2q:;
        this._isRequestCancelled$2 = true;
    },
    
    _renderResult$p$2: function PPSMA_ClientWebPart$_renderResult$p$2(renderResultRecord) {ULSh2q:;
        var resultElement = null;
        if (!isNullUndefinedOrEmpty(renderResultRecord.HtmlDomElementId)) {
            resultElement = $get(renderResultRecord.HtmlDomElementId);
        }
        if (isNullOrUndefined(resultElement)) {
            resultElement = this.get_element();
        }
        if (!isNullUndefinedOrEmpty(renderResultRecord.ErrorHtml)) {
            resultElement.style.position = 'static';
            resultElement.innerHTML = renderResultRecord.ErrorHtml;
            return;
        }
        if (!isNullUndefinedOrEmpty(renderResultRecord.Html)) {
            this._htmlAssignStartTime$2 = new Date().getTime();
            try {
                var waitingOverlayDiv = $get(PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + resultElement.id);
                if (waitingOverlayDiv) {
                    resultElement.innerHTML = renderResultRecord.Html;
                    resultElement.appendChild(waitingOverlayDiv);
                }
                else {
                    waitingOverlayDiv = $get(PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX);
                    if (waitingOverlayDiv) {
                        var shimID = waitingOverlayDiv.id + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
                        var shim = $get(shimID);
                        if (!shim) {
                            shimID = PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
                            shim = $get(shimID);
                            if (!shim) {
                                shim = document.createElement('div');
                                shim.id = waitingOverlayDiv.id + PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX;
                            }
                        }
                        resultElement.innerHTML = renderResultRecord.Html;
                        resultElement.appendChild(waitingOverlayDiv);
                        if (waitingOverlayDiv.nextSibling) {
                            waitingOverlayDiv.parentNode.insertBefore(shim, waitingOverlayDiv.nextSibling);
                        }
                        else {
                            waitingOverlayDiv.parentNode.appendChild(shim);
                        }
                    }
                    else {
                        resultElement.innerHTML = renderResultRecord.Html;
                    }
                }
            }
            finally {
                var elapsedTime = new Date().getTime() - this._htmlAssignStartTime$2;
                PPSMA.PerformanceLogger.log('clientWebPartHtmlAssignTime', this.webPartTitle, elapsedTime);
            }
        }
        if (!isNullUndefinedOrEmpty(renderResultRecord.ViewStateJson)) {
            this._record$2.ViewState = Sys.Serialization.JavaScriptSerializer.deserialize(renderResultRecord.ViewStateJson);
        }
        if (!isNullUndefinedOrEmpty(renderResultRecord.Script)) {
            this._scriptEvalStartTime$2 = new Date().getTime();
            try {
                eval(renderResultRecord.Script);
            }
            catch (ex) {
                alert(ex.message);
            }
            finally {
                var elapsedTime = new Date().getTime() - this._scriptEvalStartTime$2;
                PPSMA.PerformanceLogger.log('clientWebPartScriptEvalTime', this.webPartTitle, elapsedTime);
            }
        }
        if (!isNullUndefinedOrEmpty(renderResultRecord.ConsumerInputs)) {
            this._record$2.ConsumerInputs = renderResultRecord.ConsumerInputs;
        }
        var el = $get('WebPart' + this.get__webPartId$i$2());
        el.style.overflow = '';
        notifyBrowserOfAsyncUpdate(resultElement);
    },
    
    _deferParameterChanges$p$2: function PPSMA_ClientWebPart$_deferParameterChanges$p$2(parameters) {ULSh2q:;
        for (var i = 0; i < parameters.length; ++i) {
            var parameter = parameters[i];
            var key = new PPSMA._clientParameterKey(parameter.get__providerId$i$0(), parameter.get__name$i$0());
            var $$t_6 = this;
            if (!PPSMA.ArrayListEx.exists(this._renderDeferredParameterChanges$2, function(o) {ULSh2q:;
                var item = o;
                return (parameter.get__providerId$i$0() === item._providerId$i$0) && (parameter.get__name$i$0() === item._name$i$0);
            })) {
                Array.add(this._renderDeferredParameterChanges$2, key);
            }
        }
    },
    
    openInCurrentWindow: function PPSMA_ClientWebPart$openInCurrentWindow(clientConnectionManagerRecord) {ULSh2q:;
        if (isNullOrEmpty(this.dynamicViewPage)) {
            alert(PPSMA.SR.Dashboard_NoOpenMaximized);
            return;
        }
        var $sn_arguments = {};
        var record = this._record$2;
        record.ViewState[PPSMA.ScriptConstants.openInNewWindowKey] = true;
        $sn_arguments[PPSMA.ScriptConstants.clientConsumerRecord] = Sys.Serialization.JavaScriptSerializer.serialize(record);
        $sn_arguments[PPSMA.ScriptConstants.clientConnectionManagerRecord] = Sys.Serialization.JavaScriptSerializer.serialize(clientConnectionManagerRecord);
        $sn_arguments[PPSMA.ScriptConstants.webPartTitle] = Sys.Serialization.JavaScriptSerializer.serialize(this.webPartTitle);
        $sn_arguments[PPSMA.ScriptConstants.pageTitle] = Sys.Serialization.JavaScriptSerializer.serialize(this.pageTitle);
        if (isNullOrEmpty(this.dashboardLink)) {
            $sn_arguments[PPSMA.ScriptConstants.dashboardLink] = '';
        }
        else {
            $sn_arguments[PPSMA.ScriptConstants.dashboardLink] = Sys.Serialization.JavaScriptSerializer.serialize(this.dashboardLink);
        }
        var form = window.document.createElement('form');
        form.target = '_self';
        form.action = this.dynamicViewPage;
        form.method = 'post';
        form.name = '';
        window.document.documentElement.appendChild(form);
        var $$dict_4 = $sn_arguments;
        for (var $$key_5 in $$dict_4) {
            var argument = { key: $$key_5, value: $$dict_4[$$key_5] };
            var input = window.document.createElement('input');
            input.type = 'hidden';
            input.value = encodeURIComponent((argument.value));
            input.name = argument.key;
            form.appendChild(input);
        }
        form.submit();
    },
    
    openNewWindow: function PPSMA_ClientWebPart$openNewWindow(clientConnectionManagerRecord) {ULSh2q:;
        if (isNullOrEmpty(this.dynamicViewPage)) {
            alert(PPSMA.SR.Dashboard_NoOpenNewWindow);
            return;
        }
        var $sn_arguments = {};
        var record = this._record$2;
        var isOpenInNewWindowOriginalState = false;
        if (!isNullOrUndefined(record.ViewState[PPSMA.ScriptConstants.openInNewWindowKey])) {
            isOpenInNewWindowOriginalState = record.ViewState[PPSMA.ScriptConstants.openInNewWindowKey];
        }
        record.ViewState[PPSMA.ScriptConstants.openInNewWindowKey] = true;
        $sn_arguments[PPSMA.ScriptConstants.clientConsumerRecord] = Sys.Serialization.JavaScriptSerializer.serialize(record);
        $sn_arguments[PPSMA.ScriptConstants.clientConnectionManagerRecord] = Sys.Serialization.JavaScriptSerializer.serialize(clientConnectionManagerRecord);
        record.ViewState[PPSMA.ScriptConstants.openInNewWindowKey] = isOpenInNewWindowOriginalState;
        $sn_arguments[PPSMA.ScriptConstants.webPartTitle] = Sys.Serialization.JavaScriptSerializer.serialize(this.webPartTitle);
        $sn_arguments[PPSMA.ScriptConstants.pageTitle] = Sys.Serialization.JavaScriptSerializer.serialize(this.pageTitle);
        if (isNullOrEmpty(this.dashboardLink)) {
            $sn_arguments[PPSMA.ScriptConstants.dashboardLink] = '';
        }
        else {
            $sn_arguments[PPSMA.ScriptConstants.dashboardLink] = Sys.Serialization.JavaScriptSerializer.serialize(this.dashboardLink);
        }
        var windowFeatures = {};
        PPSMA.NewWindow.createPost(this.dynamicViewPage, windowFeatures, $sn_arguments, 'NewWindowFormFor_' + this.get__clientId$i$2(), 'NewWindowFor_' + this.get__clientId$i$2() + (new Date()).getTime());
    },
    
    _exportView$p$2: function PPSMA_ClientWebPart$_exportView$p$2(exportFormat, renderRequestRecord) {ULSh2q:;
        if (isNullOrEmpty(this.officeExportPage)) {
            alert(PPSMA.SR.Dashboard_NoExport);
            return;
        }
        var $sn_arguments = {};
        var record = this._record$2;
        record.ViewState[PPSMA.ScriptConstants.exportKey] = true;
        var exportSettings = new PPSMA.ExportSettings();
        if (isNullOrEmpty(this.dashboardLink)) {
            exportSettings.DashboardLink = '';
        }
        else {
            exportSettings.DashboardLink = this.dashboardLink;
        }
        exportSettings.ExportFormat = exportFormat;
        exportSettings.PageTitle = this.pageTitle;
        exportSettings.WebPartTitle = this.webPartTitle;
        exportSettings.ViewHeight = this._getViewContainerHeight$p$2(this.get_element());
        exportSettings.ViewWidth = this._getViewContainerWidth$p$2(this.get_element());
        $sn_arguments[PPSMA.ScriptConstants.exportSettings] = Sys.Serialization.JavaScriptSerializer.serialize(exportSettings);
        $sn_arguments[PPSMA.ScriptConstants.renderRequestRecord] = Sys.Serialization.JavaScriptSerializer.serialize(renderRequestRecord);
        PPSMA.NewWindow.createBinaryPost(this.officeExportPage, $sn_arguments, '');
        record.ViewState[PPSMA.ScriptConstants.exportKey] = false;
    },
    
    exportToExcel: function PPSMA_ClientWebPart$exportToExcel(renderRequestRecord) {ULSh2q:;
        this._exportView$p$2(0, renderRequestRecord);
    },
    
    exportToPowerPoint: function PPSMA_ClientWebPart$exportToPowerPoint(renderRequestRecord) {ULSh2q:;
        this._exportView$p$2(PPSMA.ExportFormat.powerPoint, renderRequestRecord);
    },
    
    abortRenderRequest: function PPSMA_ClientWebPart$abortRenderRequest() {ULSh2q:;
        if (!this._renderWebRequest$2) {
            if (this.isFilterWebPart) {
                this._renderWebRequest$2 = new PPSMA.NoCancelWebRequest(this.get_element(), this.waitImageUri, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
            }
            else {
                this._renderWebRequest$2 = new PPSMA.CancellableWebRequest(this.get_element(), PPSMA.RenderWebRequest.msgtypE_LOADING, this.waitImageUri, this.get_element().id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
                (this._renderWebRequest$2).add_onCancelled(this.$$d__clientWebPart_OnCancelled$p$2);
                this._isRequestCancelled$2 = true;
            }
            this._renderWebRequest$2.show();
        }
        if (this._renderWebRequest$2) {
            this._renderWebRequest$2.abort();
        }
    }
}


PPSMA.DictionaryEx = function PPSMA_DictionaryEx() {
}
PPSMA.DictionaryEx.isEmpty = function PPSMA_DictionaryEx$isEmpty(dictionary) {ULSh2q:;
    var $$dict_1 = dictionary;
    for (var $$key_2 in $$dict_1) {
        var entry = { key: $$key_2, value: $$dict_1[$$key_2] };
        return false;
    }
    return true;
}
PPSMA.DictionaryEx.count = function PPSMA_DictionaryEx$count(dictionary) {ULSh2q:;
    var count = 0;
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
        ++count;
    }
    return count;
}
PPSMA.DictionaryEx.keys = function PPSMA_DictionaryEx$keys(dictionary) {ULSh2q:;
    var keys = [];
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
        Array.add(keys, entry.key);
    }
    return keys;
}
PPSMA.DictionaryEx.values = function PPSMA_DictionaryEx$values(dictionary) {ULSh2q:;
    var values = [];
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var entry = { key: $$key_3, value: $$dict_2[$$key_3] };
        Array.add(values, entry.value);
    }
    return values;
}
PPSMA.DictionaryEx.containsKey = function PPSMA_DictionaryEx$containsKey(dictionary, key) {ULSh2q:;
    return !isNullOrUndefined(dictionary[key]);
}


PPSMA._frameworkException = function PPSMA__frameworkException() {
}
PPSMA._frameworkException._webPartNotFound$i = function PPSMA__frameworkException$_webPartNotFound$i(elementId) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_WebPartNotFound, elementId);
    return Error.create(message);
}
PPSMA._frameworkException.parameterStateElementNotFound = function PPSMA__frameworkException$parameterStateElementNotFound(parameterInputElementId) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_ParameterStateElementNotFound, parameterInputElementId);
    return Error.create(message);
}
PPSMA._frameworkException.viewStateElementNotFound = function PPSMA__frameworkException$viewStateElementNotFound(viewStateInputElementId) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_ViewStateElementNotFound, viewStateInputElementId);
    return Error.create(message);
}
PPSMA._frameworkException.missingConnectionPointRecord = function PPSMA__frameworkException$missingConnectionPointRecord(webPartId, connectionPointId) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_MissingConnectionPointRecord, connectionPointId, webPartId);
    return Error.create(message);
}
PPSMA._frameworkException.webPartRecordNotFound = function PPSMA__frameworkException$webPartRecordNotFound(id) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_WebPartRecordNotFound, id);
    return Error.create(message);
}
PPSMA._frameworkException.missingParameterRecord = function PPSMA__frameworkException$missingParameterRecord(providerId, name) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_MissingParameterRecord, providerId, name);
    return Error.create(message);
}
PPSMA._frameworkException.missingTransformerRecord = function PPSMA__frameworkException$missingTransformerRecord(transformerId, providerId, consumerId) {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_MissingTransformerRecord, transformerId, providerId, consumerId);
    return Error.create(message);
}
PPSMA._frameworkException.circularConnectionPath = function PPSMA__frameworkException$circularConnectionPath() {ULSh2q:;
    var message = String.format(PPSMA.SR.Framework_CircularConnectionPath);
    return Error.create(message);
}


PPSMA.PerformanceLogger = function PPSMA_PerformanceLogger() {
}
PPSMA.PerformanceLogger.log = function PPSMA_PerformanceLogger$log(performanceMarkerType, identifier, elapsedTime) {
}
PPSMA.PerformanceLogger.logGeneric = function PPSMA_PerformanceLogger$logGeneric(identifier, elapsedTime) {ULSh2q:;
    PPSMA.PerformanceLogger.log('genericTime', identifier, elapsedTime);
}


PPSMA._renderAction = function PPSMA__renderAction(renderConnectionTable, parameterTable, webPartTable) {ULSh2q:;
    this._changingParametersHashtable$0 = {};
    this._renderWebPartsHashtable$0 = {};
    this._renderConnectionTable$0 = renderConnectionTable;
    this._parameterTable$0 = parameterTable;
    this._webPartTable$0 = webPartTable;
}
PPSMA._renderAction.prototype = {
    _renderConnectionTable$0: null,
    _parameterTable$0: null,
    _webPartTable$0: null,
    
    _discoverRenderDependencies$p$0: function PPSMA__renderAction$_discoverRenderDependencies$p$0(changingConnections) {ULSh2q:;
        for (var i = 0; i < changingConnections.length; ++i) {
            var connection = changingConnections[i];
            var parameterKey = PPSMA._clientParameterTable.createKey(connection.ProviderId, connection.ProviderParameterName);
            if (isNullOrUndefined(this._changingParametersHashtable$0[parameterKey])) {
                var parameter = this._parameterTable$0._find$i$0(connection.ProviderId, connection.ProviderParameterName);
                parameter._state$i$0 = 1;
                this._changingParametersHashtable$0[parameterKey] = parameter;
            }
            if (isNullOrUndefined(this._renderWebPartsHashtable$0[connection.ConsumerId])) {
                var webPart = this._webPartTable$0[connection.ConsumerId];
                if (!isNullOrUndefined(webPart)) {
                    this._renderWebPartsHashtable$0[connection.ConsumerId] = webPart;
                }
            }
            this._discoverRenderDependencies$p$0(this._renderConnectionTable$0._findProviderConnections$i$0(connection.ConsumerId));
        }
    },
    
    _execute$i$0: function PPSMA__renderAction$_execute$i$0(parameterUpdates) {ULSh2q:;
        var changingConnections = [];
        for (var i = 0; i < parameterUpdates.length; ++i) {
            var parameter = parameterUpdates[i];
            var key = PPSMA._clientParameterTable.createKey(parameter.get__providerId$i$0(), parameter.get__name$i$0());
            this._changingParametersHashtable$0[key] = parameter;
            Array.addRange(changingConnections, this._renderConnectionTable$0._findParameterConnections$i$0(parameter.get__providerId$i$0(), parameter.get__name$i$0()));
        }
        if (!changingConnections.length) {
            return;
        }
        this._discoverRenderDependencies$p$0(changingConnections);
    },
    
    get__webParts$i$0: function PPSMA__renderAction$get__webParts$i$0() {ULSh2q:;
        var webParts = PPSMA.DictionaryEx.values(this._renderWebPartsHashtable$0);
        var $$t_3 = this;
        Array.forEach(webParts, function(o) {ULSh2q:;
            var webPart = o;
            webPart.set_renderAction(PPSMA.WebPartRenderAction.render);
        });
        return webParts;
    },
    
    get__isPostbackRender$i$0: function PPSMA__renderAction$get__isPostbackRender$i$0() {ULSh2q:;
        var $$dict_0 = this._changingParametersHashtable$0;
        for (var $$key_1 in $$dict_0) {
            var entry = { key: $$key_1, value: $$dict_0[$$key_1] };
            var parameter = entry.value;
            if (parameter.get__updateAction$i$0() === 1) {
                return true;
            }
        }
        return false;
    }
}


PPSMA._renderConnectionTable = function PPSMA__renderConnectionTable(renderConnectionRecords) {ULSh2q:;
    this._connectionRecords$0 = [];
    Array.addRange(this._connectionRecords$0, renderConnectionRecords);
}
PPSMA._renderConnectionTable.prototype = {
    
    get__connections$i$0: function PPSMA__renderConnectionTable$get__connections$i$0() {ULSh2q:;
        return this._connectionRecords$0;
    },
    
    _findParameterToConsumerConnectionRecords$i$0: function PPSMA__renderConnectionTable$_findParameterToConsumerConnectionRecords$i$0(providerId, parameterName, consumerId) {ULSh2q:;
        var $$t_5 = this;
        return PPSMA.ArrayListEx.findAll(this._connectionRecords$0, function(item) {ULSh2q:;
            var record = item;
            return (record.ProviderId === providerId) && (record.ProviderParameterName === parameterName) && (record.ConsumerId === consumerId);
        });
    },
    
    _findParameterConnections$i$0: function PPSMA__renderConnectionTable$_findParameterConnections$i$0(providerId, parameterName) {ULSh2q:;
        var $$t_4 = this;
        return PPSMA.ArrayListEx.findAll(this._connectionRecords$0, function(item) {ULSh2q:;
            var record = item;
            return (record.ProviderId === providerId) && (record.ProviderParameterName === parameterName);
        });
    },
    
    _findProviderConnections$i$0: function PPSMA__renderConnectionTable$_findProviderConnections$i$0(providerId) {ULSh2q:;
        var $$t_3 = this;
        return PPSMA.ArrayListEx.findAll(this._connectionRecords$0, function(item) {ULSh2q:;
            var record = item;
            return record.ProviderId === providerId;
        });
    }
}


PPSMA.WebRequestEx = function PPSMA_WebRequestEx() {
}
PPSMA.WebRequestEx.abort = function PPSMA_WebRequestEx$abort(webRequest) {ULSh2q:;
    if (isNullOrUndefined(webRequest) || isNullOrUndefined(webRequest.get_executor()) || webRequest.get_executor().get_aborted()) {
        return;
    }
    webRequest.get_executor().abort();
}


PPSMA.WebRequestExecuterEx = function PPSMA_WebRequestExecuterEx() {
}
PPSMA.WebRequestExecuterEx.simpleResult = function PPSMA_WebRequestExecuterEx$simpleResult(executor, className) {ULSh2q:;
    var xmlDocument = executor.get_xml();
    var root = xmlDocument.documentElement;
    if (isNullOrUndefined(root) || (root.nodeName !== className)) {
        return null;
    }
    var result = {};
    var children = xmlDocument.documentElement.childNodes;
    for (var i = 0; i < children.length; ++i) {
        var node = children[i];
        result[node.nodeName] = PPSMA.XmlNodeEx.getText(node);
    }
    return result;
}


PPSMA.XmlNodeEx = function PPSMA_XmlNodeEx() {
}
PPSMA.XmlNodeEx.getText = function PPSMA_XmlNodeEx$getText(node) {ULSh2q:;
    var value;
    value = node.textContent;
    if (isNullUndefinedOrEmpty(value)) {
        value = node.text;
    }
    if (isNullOrUndefined(value)) {
        value = '';
    }
    return value;
}
PPSMA.XmlNodeEx.getInt = function PPSMA_XmlNodeEx$getInt(node) {ULSh2q:;
    var t = PPSMA.XmlNodeEx.getText(node);
    var n = parseInt(t);
    if (isNaN(n)) {
        throw Error.argumentOutOfRange(node.nodeName, t, PPSMA.SR.Framework_StringNotAnInteger);
    }
    return n;
}
PPSMA.XmlNodeEx.getFloat = function PPSMA_XmlNodeEx$getFloat(node) {ULSh2q:;
    var t = PPSMA.XmlNodeEx.getText(node);
    var n = parseFloat(t);
    if (isNaN(n)) {
        throw Error.argumentOutOfRange(node.nodeName, t, PPSMA.SR.Framework_StringNotAnFloat);
    }
    return n;
}
PPSMA.XmlNodeEx.getBool = function PPSMA_XmlNodeEx$getBool(node) {ULSh2q:;
    return Boolean.parse(PPSMA.XmlNodeEx.getText(node));
}


Type.registerNamespace('Microsoft.PerformancePoint.Scorecards.WebServer');

PPSMA.ChartDomEvent.registerClass('PPSMA.ChartDomEvent');
PPSMA.WebRequestDetails.registerClass('PPSMA.WebRequestDetails');
PPSMA.DecompTupleRecord.registerClass('PPSMA.DecompTupleRecord');
PPSMA.DecompQueryParameters.registerClass('PPSMA.DecompQueryParameters');
PPSMA.DecompRenderResultNode.registerClass('PPSMA.DecompRenderResultNode');
PPSMA.DecompRenderResultLevel.registerClass('PPSMA.DecompRenderResultLevel');
PPSMA.DecompRenderResultRecord.registerClass('PPSMA.DecompRenderResultRecord');
PPSMA.DecompMemberProperty.registerClass('PPSMA.DecompMemberProperty');
PPSMA.DecompMemberProperties.registerClass('PPSMA.DecompMemberProperties');
PPSMA.DecompNavigationAction.registerClass('PPSMA.DecompNavigationAction');
PPSMA.DecompNavigationGroup.registerClass('PPSMA.DecompNavigationGroup');
PPSMA.DecompNavigationList.registerClass('PPSMA.DecompNavigationList');
PPSMA.AjaxRenderResultRecord.registerClass('PPSMA.AjaxRenderResultRecord');
PPSMA.ClientConditionalVisibilityRecord.registerClass('PPSMA.ClientConditionalVisibilityRecord');
PPSMA.ClientConnectionManagerRecord.registerClass('PPSMA.ClientConnectionManagerRecord');
PPSMA.ClientConnectionRecord.registerClass('PPSMA.ClientConnectionRecord');
PPSMA.ClientConsumerRecord.registerClass('PPSMA.ClientConsumerRecord');
PPSMA.ClientParameterRecord.registerClass('PPSMA.ClientParameterRecord');
PPSMA.ClientProviderRecord.registerClass('PPSMA.ClientProviderRecord');
PPSMA.ClientTransformerRecord.registerClass('PPSMA.ClientTransformerRecord');
PPSMA.ClientUpdateParameterRecord.registerClass('PPSMA.ClientUpdateParameterRecord');
PPSMA.ClientVisibilityConnectionRecord.registerClass('PPSMA.ClientVisibilityConnectionRecord');
PPSMA.ClientWebPartRecord.registerClass('PPSMA.ClientWebPartRecord');
PPSMA.ExportSettings.registerClass('PPSMA.ExportSettings');
PPSMA.RenderWebRequest.registerClass('PPSMA.RenderWebRequest', null, Sys.IDisposable);
PPSMA.CancellableWebRequest.registerClass('PPSMA.CancellableWebRequest', PPSMA.RenderWebRequest);
PPSMA.Dashboard.registerClass('PPSMA.Dashboard');
PPSMA.Common.registerClass('PPSMA.Common');
PPSMA.DomElementEx.registerClass('PPSMA.DomElementEx');
PPSMA.EncodeEx.registerClass('PPSMA.EncodeEx');
PPSMA.EventsEx.registerClass('PPSMA.EventsEx');
PPSMA.ChartDomEventTypes.registerClass('PPSMA.ChartDomEventTypes');
PPSMA.NewWindow.registerClass('PPSMA.NewWindow');
PPSMA.NoCancelWebRequest.registerClass('PPSMA.NoCancelWebRequest', PPSMA.RenderWebRequest);
PPSMA.PickerItemSelectedEventArgs.registerClass('PPSMA.PickerItemSelectedEventArgs', Sys.EventArgs);
PPSMA.Picker.registerClass('PPSMA.Picker', null, Sys.IDisposable);
PPSMA._pickerItem.registerClass('PPSMA._pickerItem', null, Sys.IDisposable);
PPSMA.BrowserInfo.registerClass('PPSMA.BrowserInfo');
PPSMA.SizeEx.registerClass('PPSMA.SizeEx');
PPSMA._stackedZoneAction.registerClass('PPSMA._stackedZoneAction');
PPSMA.StackWebPartManager.registerClass('PPSMA.StackWebPartManager');
PPSMA.StackWebPart.registerClass('PPSMA.StackWebPart', Sys.UI.Control);
PPSMA.Trace.registerClass('PPSMA.Trace');
PPSMA._URI.registerClass('PPSMA._URI');
PPSMA.ArrayListEx.registerClass('PPSMA.ArrayListEx');
PPSMA.AjaxRenderRequestRecord.registerClass('PPSMA.AjaxRenderRequestRecord');
PPSMA.ScriptConstants.registerClass('PPSMA.ScriptConstants');
PPSMA.ProviderUserSelectionsUpdateRecord.registerClass('PPSMA.ProviderUserSelectionsUpdateRecord');
PPSMA.ClientConnectionManager.registerClass('PPSMA.ClientConnectionManager', null, Sys.IDisposable);
PPSMA.ClientParameter.registerClass('PPSMA.ClientParameter');
PPSMA._clientParameterKey.registerClass('PPSMA._clientParameterKey');
PPSMA._clientParameterTable.registerClass('PPSMA._clientParameterTable');
PPSMA._clientTransformerTable.registerClass('PPSMA._clientTransformerTable');
PPSMA._conditionalVisibilityAction.registerClass('PPSMA._conditionalVisibilityAction');
PPSMA._consumerVisibility.registerClass('PPSMA._consumerVisibility');
PPSMA.ClientWebPart.registerClass('PPSMA.ClientWebPart', Sys.UI.Control);
PPSMA.DictionaryEx.registerClass('PPSMA.DictionaryEx');
PPSMA._frameworkException.registerClass('PPSMA._frameworkException');
PPSMA.PerformanceLogger.registerClass('PPSMA.PerformanceLogger');
PPSMA._renderAction.registerClass('PPSMA._renderAction');
PPSMA._renderConnectionTable.registerClass('PPSMA._renderConnectionTable');
PPSMA.WebRequestEx.registerClass('PPSMA.WebRequestEx');
PPSMA.WebRequestExecuterEx.registerClass('PPSMA.WebRequestExecuterEx');
PPSMA.XmlNodeEx.registerClass('PPSMA.XmlNodeEx');
PPSMA.CancellableWebRequest._eventKey_OnCancelled$p = 'OnCancelled';
PPSMA.Dashboard.dashboardRibbonRow = 's4-ribbonrow';
PPSMA.Dashboard.dashboardWorkspace = 's4-workspace';
PPSMA.Dashboard.dashboardTitleRow = 's4-titlerow';
PPSMA.Dashboard.dashboardPageStatusBar = 'ctl00_DeltaPageStatusBar';
PPSMA.Dashboard.dashboardPageOverview = 'ppsmaPageOverview';
PPSMA.Dashboard.contentBox = 'contentBox';
PPSMA.Dashboard._rootElementBounds = null;
PPSMA.Dashboard._rootElement = null;
PPSMA.Dashboard._viewVerticalPadding = -1;
PPSMA.Dashboard._viewHorizontalPadding = -1;
PPSMA.Dashboard._parametersTemporalState = null;
PPSMA.Common._loadingDivDefaultSize$i = new Sys.UI.Bounds(0, 0, 32, 32);
PPSMA.Common._viewMinimumSize$i = new Sys.UI.Bounds(0, 0, 45, 45);
PPSMA.ChartDomEventTypes.ppsContextMenu = 'pps-contextmenu';
PPSMA.NewWindow._drillThroughFormID$p = 'drillThroughFormID';
PPSMA.NewWindow._drillThroughFormName$p = 'drillThroughForm';
PPSMA.NewWindow.waitImage = '/_layouts/15/images/progress-circle-24.gif';
PPSMA.NewWindow._waitDivIdPrefix$p = 'NewWindowWaitId_';
PPSMA.NewWindow._docType$p = '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">';
PPSMA.NewWindow._waitMessageIdPrefix$p = 'NewWindowWaitMessageId_';
PPSMA.NewWindow.defaultHeight = 600;
PPSMA.NewWindow.defaultWidth = 800;
PPSMA.NewWindow.wsS_ACCESSIBILITYFEATURE_COOKIE_KEY = 'WSS_AccessibilityFeature';
PPSMA.NoCancelWebRequest._mS_BI_LOADING_ABORT$p = 'ms-biloading-abort';
PPSMA.Picker._eventKey_ItemSelected$p = 'ItemSelected';
PPSMA.Picker._defaultCaptionOffset$p = 12;
PPSMA.Picker._defaultListOffset$p = 26;
PPSMA.Picker._defaultPickerWidth$p = 100;
PPSMA.RenderWebRequest.msgtypE_SEARCHING = 1;
PPSMA.RenderWebRequest.msgtypE_LOADING = 2;
PPSMA.RenderWebRequest.msgtypE_LOADING_UNSTOPPABLE = 3;
PPSMA.RenderWebRequest.msgtypE_LOADING_DD = 4;
PPSMA.RenderWebRequest.waiT_INDICATOR_PREFIX = 'ProgressIndicatorDivFor_';
PPSMA.RenderWebRequest.waiT_INDICATOR_SHIM_SUFFIX = '_shim';
PPSMA.RenderWebRequest.waiT_INDICATOR_MESSAGE_PREFIX = 'ProgressIndicatorMessage_';
PPSMA.RenderWebRequest.waiT_INDICATOR_ACTION_PREFIX = 'ProgressIndicatorAction_';
PPSMA.RenderWebRequest.waiT_INDICATOR_IMAGE_PREFIX = 'ProgressIndicatorImage_';
PPSMA.RenderWebRequest.mS_BI_WAIT_IMAGE = 'ms-biwaitindicator-image';
PPSMA.RenderWebRequest.mS_BI_WAIT_TEXT = 'ms-biwaitindicator-alltext';
PPSMA.RenderWebRequest.mS_BI_WAIT_MESSAGE = 'ms-biwaitindicator-message';
PPSMA.RenderWebRequest.mS_BI_WAIT_ACTION = 'ms-biwaitindicator-action';
PPSMA.RenderWebRequest.mS_BI_WAIT_NOACTION = 'ms-biwaitindicator-action';
PPSMA.RenderWebRequest.mS_BI_WAIT_INNER = 'ms-biwait-inner';
PPSMA.RenderWebRequest.mS_BI_WAIT_MIDDLE = 'ms-biwait-middle';
PPSMA.RenderWebRequest.mS_BI_WAIT_CENTER_BORDER = 'ms-biwait-centerborder';
PPSMA.RenderWebRequest.mS_BI_WAIT_ZZ_BORDER = 'ms-biwait-zzborder';
PPSMA.RenderWebRequest.mS_BI_WAIT_NO_BORDER = 'ms-biwait-noborder';
PPSMA.RenderWebRequest.mS_BI_WAIT = 'ms-biwaitindicator-main';
PPSMA.RenderWebRequest.mS_BI_WAIT_SHIM = 'ms-biwaitindicator-mainshim';
PPSMA.RenderWebRequest.mS_BI_WAIT_SHIMZZ = 'ms-biwaitindicator-mainshimzz';
PPSMA.RenderWebRequest.mS_BI_WAIT_SHIM_BORDERLESS = 'ms-biwaitindicator-mainshimborderless';
PPSMA.RenderWebRequest.mS_BI_NO_WAIT = 'ms-biwaitindicator-mainoff';
PPSMA.RenderWebRequest.mS_BI_NO_WAIT_SHIM = 'ms-biwaitindicator-mainshimoff';
PPSMA.StackWebPartManager._resetZonesKey$p = 'ResetZones';
PPSMA.StackWebPartManager._activeViews = {};
PPSMA.StackWebPartManager._events = new Sys.EventHandlerList();
PPSMA.StackWebPartManager._stackedZones = [];
PPSMA.StackWebPartManager._zones = {};
PPSMA.StackWebPartManager._reportedHeights = {};
PPSMA.Trace.filters = {};
PPSMA.ArrayListEx.empty = [];
PPSMA.ScriptConstants.openInNewWindowKey = 'F3D151D336A84BD280425C50760A61C8';
PPSMA.ScriptConstants.exportKey = 'DCE924129BCB45449F23159BBC9574FB';
PPSMA.ScriptConstants.overrideRenderControlKey = 'D90A8712A3FA4649A25B7AB942FBCF20';
PPSMA.ScriptConstants.clientConsumerRecord = 'clientConsumerRecord';
PPSMA.ScriptConstants.clientConnectionManagerRecord = 'clientConnectionManagerRecord';
PPSMA.ScriptConstants.useConnectionManager = 'useConnectionManager';
PPSMA.ScriptConstants.webPartTitle = 'webPartTitle';
PPSMA.ScriptConstants.pageTitle = 'pageTitle';
PPSMA.ScriptConstants.exportFormat = 'exportFormat';
PPSMA.ScriptConstants.webPartType = 'webPartType';
PPSMA.ScriptConstants.dashboardLink = 'dashboardLink';
PPSMA.ScriptConstants.exportSettings = 'exportSettings';
PPSMA.ScriptConstants.renderRequestRecord = 'renderRequestRecord';
PPSMA.ScriptConstants.defaultDialogWidth = 500;
PPSMA.ScriptConstants.defaultDialogHeight = 300;
PPSMA.ScriptConstants.analyticReportsValueFilterDialogHeight = 155;
PPSMA.ScriptConstants.analyticReportsValueFilterDialogWidth = 465;
PPSMA.ScriptConstants.analyticReportsTopFilterDialogHeight = 155;
PPSMA.ScriptConstants.analyticReportsTopFilterDialogWidth = 580;
PPSMA.ClientConnectionManager._clientConnectionManager = null;
PPSMA.ClientConnectionManager._forceLoad = false;
PPSMA.ClientConnectionManager._intervalId$p = 0;
PPSMA.ClientConnectionManager._idleInterval$p = 2;
PPSMA.ClientWebPart.progressIndicatorDivIdPrefix = 'ProgressIndicatorDivFor_';

// Include the Script# browser compatability layer, debug or ship.

// Script# Browser Compat Layer
// Copyright (c) 2007, Nikhil Kothari. All Rights Reserved.
// http://projects.nikhilk.net
//
function __loadCompatLayer(w){ULSh2q:;w.Debug=function(){};w.Debug._fail=function(message){ULSh2q:;throw new Error(message);};w.Debug.writeln=function(text){ULSh2q:;if(window.console){if(window.console.debug){window.console.debug(text);return;} else if(window.console.log){window.console.log(text);return;}} else if(window.opera&&window.opera.postError){window.opera.postError(text);return;}};w.__getNonTextNode=function(node){ULSh2q:;try{while(node&&(node.nodeType!=1)){node=node.parentNode;}} catch(ex){node=null;} return node;};w.__getLocation=function(e){ULSh2q:;var loc={x:0,y:0};while(e){loc.x+=e.offsetLeft;loc.y+=e.offsetTop;e=e.offsetParent;} return loc;};RegExp._cacheable=true;String._quoteSkipTest=true;w.navigate=function(url){ULSh2q:;window.setTimeout('window.location = "'+url+'";',0);};var attachEventProxy=function(eventName,eventHandler){ULSh2q:;eventHandler._mozillaEventHandler=function(e){ULSh2q:;window.event=e;eventHandler();if(!e.avoidReturn){return e.returnValue;}};this.addEventListener(eventName.slice(2),eventHandler._mozillaEventHandler,false);};var detachEventProxy=function(eventName,eventHandler){ULSh2q:;if(eventHandler._mozillaEventHandler){var mozillaEventHandler=eventHandler._mozillaEventHandler;delete eventHandler._mozillaEventHandler;this.removeEventListener(eventName.slice(2),mozillaEventHandler,false);}};w.attachEvent=attachEventProxy;w.detachEvent=detachEventProxy;w.HTMLDocument.prototype.attachEvent=attachEventProxy;w.HTMLDocument.prototype.detachEvent=detachEventProxy;w.HTMLElement.prototype.attachEvent=attachEventProxy;w.HTMLElement.prototype.detachEvent=detachEventProxy;w.Event.prototype.__defineGetter__('srcElement',function(){ULSh2q:;return __getNonTextNode(this.target)||this.currentTarget;});w.Event.prototype.__defineGetter__('cancelBubble',function(){ULSh2q:;return this._bubblingCanceled||false;});w.Event.prototype.__defineSetter__('cancelBubble',function(v){ULSh2q:;if(v){this._bubblingCanceled=true;this.stopPropagation();}});w.Event.prototype.__defineGetter__('returnValue',function(){ULSh2q:;return!this._cancelDefault;});w.Event.prototype.__defineSetter__('returnValue',function(v){ULSh2q:;if(!v){this._cancelDefault=true;this.preventDefault();}});w.Event.prototype.__defineGetter__('fromElement',function(){ULSh2q:;var n;if(this.type=='mouseover'){n=this.relatedTarget;} else if(this.type=='mouseout'){n=this.target;} return __getNonTextNode(n);});w.Event.prototype.__defineGetter__('toElement',function(){ULSh2q:;var n;if(this.type=='mouseout'){n=this.relatedTarget;} else if(this.type=='mouseover'){n=this.target;} return __getNonTextNode(n);});w.Event.prototype.__defineGetter__('button',function(){ULSh2q:;return(this.which==1)?1:(this.which==3)?2:0});w.Event.prototype.__defineGetter__('offsetX',function(){ULSh2q:;return window.pageXOffset+this.clientX-__getLocation(this.srcElement).x;});w.Event.prototype.__defineGetter__('offsetY',function(){ULSh2q:;return window.pageYOffset+this.clientY-__getLocation(this.srcElement).y;});w.HTMLElement.prototype.__defineGetter__('parentElement',function(){ULSh2q:;return this.parentNode;});w.HTMLElement.prototype.__defineGetter__('children',function(){ULSh2q:;var children=[];var childCount=this.childNodes.length;for(var i=0;i<childCount;i++){var childNode=this.childNodes[i];if(childNode.nodeType==1){children.push(childNode);}} return children;});w.HTMLElement.prototype.__defineGetter__('innerText',function(){ULSh2q:;try{return this.textContent} catch(ex){var text='';for(var i=0;i<this.childNodes.length;i++){if(this.childNodes[i].nodeType==3){text+=this.childNodes[i].textContent;}} return str;}});w.HTMLElement.prototype.__defineSetter__('innerText',function(v){ULSh2q:;var textNode=document.createTextNode(v);this.innerHTML='';this.appendChild(textNode);});w.HTMLElement.prototype.__defineGetter__('currentStyle',function(){ULSh2q:;return window.getComputedStyle(this,null);});w.HTMLElement.prototype.__defineGetter__('runtimeStyle',function(){ULSh2q:;return window.getOverrideStyle(this,null);});w.HTMLElement.prototype.removeNode=function(b){ULSh2q:;return this.parentNode.removeChild(this)};w.HTMLElement.prototype.contains=function(el){ULSh2q:;while(el!=null&&el!=this){el=el.parentNode;} return(el!=null)};w.HTMLStyleElement.prototype.__defineGetter__('styleSheet',function(){ULSh2q:;return this.sheet;});w.CSSStyleSheet.prototype.__defineGetter__('rules',function(){ULSh2q:;return this.cssRules;});w.CSSStyleSheet.prototype.addRule=function(selector,style,index){ULSh2q:;this.insertRule(selector+'{'+style+'}',index);};w.CSSStyleSheet.prototype.removeRule=function(index){ULSh2q:;this.deleteRule(index);};w.CSSStyleDeclaration.prototype.__defineGetter__('styleFloat',function(){ULSh2q:;return this.cssFloat;});w.CSSStyleDeclaration.prototype.__defineSetter__('styleFloat',function(v){ULSh2q:;this.cssFloat=v;});DocumentFragment.prototype.getElementById=function(id){ULSh2q:;var nodeQueue=[];var childNodes=this.childNodes;var node;var c;for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1){nodeQueue.push(node);}} while(nodeQueue.length){node=nodeQueue.dequeue();if(node.id==id){return node;} childNodes=node.childNodes;if(childNodes.length!=0){for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1){nodeQueue.push(node);}}}} return null;};DocumentFragment.prototype.getElementsByTagName=function(tagName){ULSh2q:;var elements=[];var nodeQueue=[];var childNodes=this.childNodes;var node;var c;for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1){nodeQueue.push(node);}} while(nodeQueue.length){node=nodeQueue.dequeue();if(node.tagName==tagName){elements.add(node);} childNodes=node.childNodes;if(childNodes.length!=0){for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1){nodeQueue.push(node);}}}} return elements;};DocumentFragment.prototype.createElement=function(tagName){ULSh2q:;return document.createElement(tagName);};var selectNodes=function(doc,path,contextNode){ULSh2q:;contextNode=contextNode?contextNode:doc;var xpath=new XPathEvaluator();var result=xpath.evaluate(path,contextNode,doc.createNSResolver(doc.documentElement),XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var nodeList=new Array(result.snapshotLength);for(var i=0;i<result.snapshotLength;i++){nodeList[i]=result.snapshotItem(i);} return nodeList;};var selectSingleNode=function(doc,path,contextNode){ULSh2q:;path+='[1]';var nodes=selectNodes(doc,path,contextNode);if(nodes.length!=0){for(var i=0;i<nodes.length;i++){if(nodes[i]){return nodes[i];}}} return null;};w.XMLDocument.prototype.selectNodes=function(path,contextNode){ULSh2q:;return selectNodes(this,path,contextNode);};w.XMLDocument.prototype.selectSingleNode=function(path,contextNode){ULSh2q:;return selectSingleNode(this,path,contextNode);};w.XMLDocument.prototype.transformNode=function(xsl){ULSh2q:;var xslProcessor=new XSLTProcessor();xslProcessor.importStylesheet(xsl);var ownerDocument=document.implementation.createDocument("","",null);var transformedDoc=xslProcessor.transformToDocument(this);return transformedDoc.xml;};Node.prototype.selectNodes=function(path){ULSh2q:;var doc=this.ownerDocument;return doc.selectNodes(path,this);};Node.prototype.selectSingleNode=function(path){ULSh2q:;var doc=this.ownerDocument;return doc.selectSingleNode(path,this);};Node.prototype.__defineGetter__('baseName',function(){ULSh2q:;return this.localName;});Node.prototype.__defineGetter__('text',function(){ULSh2q:;return this.textContent;});Node.prototype.__defineSetter__('text',function(value){ULSh2q:;this.textContent=value;});Node.prototype.__defineGetter__('xml',function(){ULSh2q:;return(new XMLSerializer()).serializeToString(this);});}
function __supportsCompatLayer(ua){ULSh2q:;return(ua.indexOf('Gecko')>=0)||(ua.indexOf('AppleWebKit')>=0)||(ua.indexOf('Opera')>=0);}
if(__supportsCompatLayer(window.navigator.userAgent)){try{__loadCompatLayer(window);} catch(e){}}


function isNullOrUndefined(o) 
{ULSh2q:;
    return (o === null) || (o === undefined);
}

function isNullOrEmpty(o) 
{ULSh2q:;
    return !o || !o.length;
}

function isNullUndefinedOrEmpty(o) 
{ULSh2q:;
    return (o === null) || (o === undefined) || (!o.length);
}

function compareStrings(s1, s2)
{ULSh2q:;
	if (s1 < s2) return -1;
	else if (s1 == s2) return 0;
	else return 1;
}

function precacheImages(images)
{ULSh2q:;
	var precache = new Array();
	for(var i=0; i < images.length; ++i)
	{
		image = new Image(1,1);
		image.src = images[i];
		precache[i] = image;
	}
	return precache;
}

function getStyle(elem, propName)
{ULSh2q:;
	var value = null;
	// IE supports both currentStyle and getComputedStyle but returns an absolute pixel size
	// for getComputedStyle when the CSS value is actually auto.  FireFox returns auto for
    // getComputedStyle.  Chrome occasionally returns 0px instead of auto for both.
	if (elem.currentStyle)
	{
		value = elem.currentStyle[propName];
	}
	else if (window.getComputedStyle)
	{
		value = document.defaultView.getComputedStyle(elem, null).getPropertyValue(propName);
	}

	if (parseInt(value) === 0)
	{
		value = elem.style[propName];
	}

	if(value === "")
	{
		value = "auto";
	}

	return value;
}

function getDefinedHeight(elem)
{ULSh2q:;
	var value = elem.style["height"];
	if (value == "")
	{
		value = "auto";
	}
	return value;
}

function getDefinedWidth(elem)
{ULSh2q:;
	var value = elem.style["width"];
	if (value == "")
	{
		value = "auto";
	}
	return value;
}

function moreAccessibleMode(elem)
{ULSh2q:;
	if (elem != null)
	{
		elem.onclick = Function.createDelegate(this, this.accessibleModeEvent);
	}
	return true;
}

function accessibleModeEvent(e)
{ULSh2q:;
	if (document.getElementById('TurnOnAccessibility').style.display != 'none') 
	{
		window.location.reload(true);
	}
}

function notifyBrowserOfAsyncUpdate(elem)
{ULSh2q:;
	if (typeof(NotifyBrowserOfAsyncUpdate) != 'undefined')
	{
		NotifyBrowserOfAsyncUpdate(elem);
	}
}

function getBrowserIs()
{ULSh2q:;
	return browseris;
}

//
// ResizeEx Functions
//
function addResizeToWindow(obj)
{ULSh2q:;
    Sys.UI.DomEvent.addHandler(window, 'resize', Function.createDelegate(obj, obj.resize));
}

function removeResizeFromWindow(obj)
{ULSh2q:;
    Sys.UI.DomEvent.removeHandler(window, 'resize', Function.createDelegate(obj, obj.resize));
}
//
// End ResizeEx Functions
//

if (window.screenLeft === undefined || window.screenLeft === null)
{
	window.screenLeft = window.screenX;
	window.screenTop = window.screenY;
}

// The below is necessary in order to support direct calls to a .Click() in FireFox.
if((navigator.appName == "Netscape") && (typeof HTMLElement!='undefined') && !HTMLElement.prototype.click)
{
	HTMLElement.prototype.click = function() {ULSh2q:;
	var evt = this.ownerDocument.createEvent('MouseEvents');
	evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
	this.dispatchEvent(evt);
	}
}

PPSMA.XmlEx = function PPSMA_XmlEx() {}
PPSMA.XmlEx.loadXml = function PPSMA_XmlEx$loadXml(markup)
{ULSh2q:;
	if(typeof(DOMParser) !== "undefined")
	{
	    var parser=new DOMParser();
		return parser.parseFromString(markup, "text/xml");
	}
	else
	{
		if (window.ActiveXObject)
		{
			var doc=new ActiveXObject("Microsoft.XMLDOM");
			doc.setProperty("ProhibitDTD", true);  
			doc.async=false;
			doc.loadXML(markup);
			return doc;
		}
	}
}
PPSMA.XmlEx.getXml = function PPSMA_XmlEx$getXml(elem)
{ULSh2q:;
	if (typeof(XMLSerializer) == "undefined")
	{
		return elem.xml;
	}
	else
	{
		return new XMLSerializer().serializeToString(elem);
	}
}

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("dashboardframework.js");
