function $_global_start() {
    g_MDSWSA = null;
    g_prefetch = 0;
    EventEntry.prototype = {
        target: undefined,
        type: undefined,
        listener: undefined,
        useCapture: undefined,
        active: undefined
    };
    g_addEventEntries = [];
    g_attachEventEntries = [];
    g_disposableObjects = [];
    ;
    DeltaManager_RequestSettings.prototype = {
        async: undefined,
        asyncTarget: undefined,
        panelsToUpdate: undefined,
        sourceElement: undefined
    };
    ;
    DeltaManager_BeginRequestEventArgs.prototype = {
        _request: undefined,
        _postBackElement: undefined,
        _updatePanelsToUpdate: undefined,
        get_postBackElement: DeltaManager$BeginRequestEventArgs$get_postBackElement,
        get_request: DeltaManager$BeginRequestEventArgs$get_request,
        get_updatePanelsToUpdate: DeltaManager$BeginRequestEventArgs$get_updatePanelsToUpdate
    };
    DeltaManager_EndRequestEventArgs.prototype = {
        _errorHandled: undefined,
        _error: undefined,
        _dataItems: undefined,
        _response: undefined,
        get_dataItems: DeltaManager$EndRequestEventArgs$get_dataItems,
        get_error: DeltaManager$EndRequestEventArgs$get_error,
        get_errorHandled: DeltaManager$EndRequestEventArgs$get_errorHandled,
        set_errorHandled: DeltaManager$EndRequestEventArgs$set_errorHandled,
        get_response: DeltaManager$EndRequestEventArgs$get_response
    };
    DeltaManager_InitializeRequestEventArgs.prototype = {
        _cancel: undefined,
        _request: undefined,
        _postBackElement: undefined,
        _updatePanelsToUpdate: undefined,
        get_cancel: DeltaManager$InitializeRequestEventArgs$get_cancel,
        set_cancel: DeltaManager$InitializeRequestEventArgs$set_cancel,
        get_postBackElement: DeltaManager$InitializeRequestEventArgs$get_postBackElement,
        get_request: DeltaManager$InitializeRequestEventArgs$get_request,
        get_updatePanelsToUpdate: DeltaManager$InitializeRequestEventArgs$get_updatePanelsToUpdate,
        set_updatePanelsToUpdate: DeltaManager$InitializeRequestEventArgs$set_updatePanelsToUpdate
    };
    DeltaManager_PageLoadedEventArgs.prototype = {
        _panelsUpdated: undefined,
        _panelsCreated: undefined,
        _dataItems: undefined,
        get_dataItems: DeltaManager$PageLoadedEventArgs$get_dataItems,
        get_panelsCreated: DeltaManager$PageLoadedEventArgs$get_panelsCreated,
        get_panelsUpdated: DeltaManager$PageLoadedEventArgs$get_panelsUpdated
    };
    DeltaManager_PageLoadingEventArgs.prototype = {
        _panelsUpdating: undefined,
        _panelsDeleting: undefined,
        _dataItems: undefined,
        get_dataItems: DeltaManager$PageLoadingEventArgs$get_dataItems,
        get_panelsDeleting: DeltaManager$PageLoadingEventArgs$get_panelsDeleting,
        get_panelsUpdating: DeltaManager$PageLoadingEventArgs$get_panelsUpdating
    };
    DeltaManager_ScriptLoader_Session.prototype = {
        allScriptsLoadedCallback: undefined,
        scriptLoadFailedCallback: undefined,
        scriptLoadTimeoutCallback: undefined,
        scriptsToLoad: undefined,
        scriptTimeout: undefined
    };
    MdsScripts = {
        requested: 0,
        downloaded: 1
    };
    DeltaManager_ScriptLoader.prototype = {
        _scriptsToLoad: undefined,
        _sessions: undefined,
        _scriptLoadedDelegate: undefined,
        _currentTask: undefined,
        _events: undefined,
        _currentSession: undefined,
        _pageInlineScripts: undefined,
        dispose: DeltaManager$_ScriptLoader$dispose,
        clearInlineScripts: DeltaManager$_ScriptLoader$clearInlineScripts,
        loadScripts: DeltaManager$_ScriptLoader$loadScripts,
        queueCustomScriptTag: DeltaManager$_ScriptLoader$queueCustomScriptTag,
        queueScriptBlock: DeltaManager$_ScriptLoader$queueScriptBlock,
        queueScriptReference: DeltaManager$_ScriptLoader$queueScriptReference,
        _createScriptElement: DeltaManager$_ScriptLoader$_createScriptElement,
        _loadScriptsInternal: DeltaManager$_ScriptLoader$_loadScriptsInternal,
        _ensureAllAvailableFiles: DeltaManager$_ScriptLoader$_ensureAllAvailableFiles,
        _nextSession: DeltaManager$_ScriptLoader$_nextSession,
        _raiseError: DeltaManager$_ScriptLoader$_raiseError,
        _scriptLoadedHandler: DeltaManager$_ScriptLoader$_scriptLoadedHandler,
        _stopSession: DeltaManager$_ScriptLoader$_stopSession
    };
    DeltaManager_ScriptLoader._activeInstance = null;
    DeltaManager_ScriptLoader._referencedScripts = null;
    DeltaManager_ScriptLoader._referencedScriptNames = null;
    DeltaManager_ScriptLoader.getInstance = function DeltaManager$_ScriptLoader$getInstance() {
        var sl = DeltaManager_ScriptLoader._activeInstance;

        if (null == sl) {
            sl = (DeltaManager_ScriptLoader._activeInstance = new DeltaManager_ScriptLoader());
        }
        return sl;
    };
    DeltaManager_ScriptLoader.isScriptLoaded = function DeltaManager$_ScriptLoader$isScriptLoaded(scriptSrc) {
        return Array.contains(DeltaManager_ScriptLoader._getLoadedScripts(), GetAbsoluteUrl(scriptSrc));
    };
    DeltaManager_ScriptLoader.isScriptMismatch = function DeltaManager$_ScriptLoader$isScriptMismatch(scriptSrc) {
        return !DeltaManager_ScriptLoader.isScriptLoaded(scriptSrc) && Array.contains(DeltaManager_ScriptLoader._referencedScriptNames, RemoveCachingParamsFromUrl(GetAbsoluteUrl(scriptSrc)));
    };
    DeltaManager_ScriptLoader.readLoadedScripts = function DeltaManager$_ScriptLoader$readLoadedScripts() {
        if (!Boolean(DeltaManager_ScriptLoader._referencedScripts)) {
            var referencedScripts = [];
            var referencedScriptNames = [];

            DeltaManager_ScriptLoader._referencedScripts = referencedScripts;
            DeltaManager_ScriptLoader._referencedScriptNames = referencedScriptNames;
            var existingScripts = document.getElementsByTagName('script');

            for (var i = existingScripts.length - 1; i >= 0; i--) {
                var scriptNode = existingScripts[i];
                var scriptSrc = scriptNode.src;

                if (scriptSrc.length != 0) {
                    if (!Array.contains(referencedScripts, scriptSrc)) {
                        Array.add(referencedScripts, scriptSrc);
                        Array.add(referencedScriptNames, RemoveCachingParamsFromUrl(scriptSrc));
                    }
                }
            }
        }
    };
    DeltaManager_ScriptLoader._errorScriptLoadFailed = function DeltaManager$_ScriptLoader$_errorScriptLoadFailed(scriptUrl) {
        var errorMessage = Strings.STS.L_AsyncDeltaManager_ScriptLoadFailed;
        var displayMessage = "Sys.ScriptLoadFailedException: " + String.format(errorMessage, scriptUrl);
        var e = Error.create(displayMessage, {
            name: 'Sys.ScriptLoadFailedException',
            'scriptUrl': scriptUrl
        });

        e.popStackFrame();
        return e;
    };
    DeltaManager_ScriptLoader._getLoadedScripts = function DeltaManager$_ScriptLoader$_getLoadedScripts() {
        if (!Boolean(DeltaManager_ScriptLoader._referencedScripts)) {
            DeltaManager_ScriptLoader._referencedScripts = [];
            DeltaManager_ScriptLoader._referencedScriptNames = [];
            DeltaManager_ScriptLoader.readLoadedScripts();
            var refScripts = DeltaManager_ScriptLoader._referencedScripts;

            for (var i = refScripts.length - 1; i >= 0; i--) {
                Array.add(DeltaManager_ScriptLoader._referencedScriptNames, RemoveCachingParamsFromUrl(refScripts[i]));
            }
        }
        return DeltaManager_ScriptLoader._referencedScripts;
    };
    MDSTimerNames = ["MDSPerfTelDownloadStart", "MDSPerfTelDownloadEnd", "MDSPerfTelAnimationStart", "MDSPerfTelAnimationEnd", "MDSPerfTelGCStart", "MDSPerfTelGCEnd", "MDSPerfTelGlobalScriptStart", "MDSPerfTelGlobalScriptEnd", "MDSPerfTelCSSStart", "MDSPerfTelCSSEnd", "MDSPerfTelInnerHTMLStart", "MDSPerfTelInnerHTMLEnd", "MDSPerfTelParseDeltaStart", "MDSPerfTelParseDeltaEnd", "MDSPerfTelScriptLoaderStart", "MDSPerfTelScriptLoaderEnd"];
    ;
    FrameHttpRequest.prototype = {
        responseText: undefined,
        status: undefined,
        readyState: undefined,
        onreadystatechange: undefined,
        open: FrameHttpRequest$open,
        send: FrameHttpRequest$send,
        abort: FrameHttpRequest$abort,
        getResponseHeader: FrameHttpRequest$getResponseHeader,
        _action: undefined,
        _headers: undefined,
        _aborted: undefined
    };
    g_MDSPageLoaded = false;
    ;
    DownloadState.prototype = {
        dlm: undefined,
        body: undefined,
        request: undefined,
        started: false,
        notificationId: undefined,
        saveTitle: null
    };
    DeltaData.prototype = {
        version4: undefined,
        executor: undefined,
        updatePanelNodes: undefined,
        cssLinkNodes: undefined,
        hiddenFieldNodes: undefined,
        styleBlockNodes: undefined,
        arrayDeclarationNodes: undefined,
        scriptBlockNodes: undefined,
        scriptStartupNodes: undefined,
        expandoNodes: undefined,
        onSubmitNodes: undefined,
        dataItemNodes: undefined,
        dataItemJsonNodes: undefined,
        scriptDisposeNodes: undefined,
        asyncPostBackControlIDsNode: undefined,
        postBackControlIDsNode: undefined,
        updatePanelIDsNode: undefined,
        asyncPostBackTimeoutNode: undefined,
        childUpdatePanelIDsNode: undefined,
        panelsToRefreshNode: undefined,
        basePathNode: undefined,
        formActionNode: undefined,
        formEnctypeNode: undefined,
        skipProcessing: undefined,
        dataItems: undefined,
        scriptsFailed: undefined,
        updatePanelData: undefined
    };
    DeltaNode.prototype = {
        type: undefined,
        id: undefined,
        content: undefined
    };
    DeltaManager_ScriptsFailed.prototype = {
        src: undefined,
        multipleCallbacks: undefined
    };
    AjaxDeltaEntry.prototype = {
        id: undefined,
        container: undefined
    };
    AsyncDeltaManager.prototype = {
        _form: undefined,
        _prevData: undefined,
        _registeredElements: undefined,
        _linksToRemoveLater: undefined,
        _onSubmitStatements: undefined,
        _requestSettings: undefined,
        _request: undefined,
        _verb: undefined,
        _asyncPostBackTimeout: undefined,
        _processingRequest: undefined,
        _scriptDisposes: undefined,
        _savedFormAction: undefined,
        _events: undefined,
        _startPageUrl: undefined,
        _currentUrl: undefined,
        _pendingRequestUrl: undefined,
        _pendingRequestUrlFull: undefined,
        _currentAnchor: undefined,
        _pendingLocalAnchor: undefined,
        _snapShot: undefined,
        _hooked: undefined,
        _ajaxDeltaList: undefined,
        _get_eventHandlerList: AsyncDeltaManager$_get_eventHandlerList,
        get_isInAsyncRequest: AsyncDeltaManager$get_isInAsyncRequest,
        add_beginRequest: AsyncDeltaManager$add_beginRequest,
        remove_beginRequest: AsyncDeltaManager$remove_beginRequest,
        add_endRequest: AsyncDeltaManager$add_endRequest,
        remove_endRequest: AsyncDeltaManager$remove_endRequest,
        add_initializeRequest: AsyncDeltaManager$add_initializeRequest,
        remove_initializeRequest: AsyncDeltaManager$remove_initializeRequest,
        add_pageLoaded: AsyncDeltaManager$add_pageLoaded,
        remove_pageLoaded: AsyncDeltaManager$remove_pageLoaded,
        add_pageLoading: AsyncDeltaManager$add_pageLoading,
        remove_pageLoading: AsyncDeltaManager$remove_pageLoading,
        abortRequest: AsyncDeltaManager$abortRequest,
        _cancelPendingCallbacks: AsyncDeltaManager$_cancelPendingCallbacks,
        _commitControls: AsyncDeltaManager$_commitControls,
        _createHiddenField: AsyncDeltaManager$_createHiddenField,
        _findHiddenFieldContainerInForm: AsyncDeltaManager$_findHiddenFieldContainerInForm,
        _createServerError: AsyncDeltaManager$_createServerError,
        _createParserError: AsyncDeltaManager$_createParserError,
        dispose: AsyncDeltaManager$dispose,
        _elementContains: AsyncDeltaManager$_elementContains,
        _endRequest: AsyncDeltaManager$_endRequest,
        _findText: AsyncDeltaManager$_findText,
        _getPageLoadedEventArgs: AsyncDeltaManager$_getPageLoadedEventArgs,
        _getPageLoadingEventArgs: AsyncDeltaManager$_getPageLoadingEventArgs,
        _initializeInternal: AsyncDeltaManager$_initializeInternal,
        _cleanFormElements: AsyncDeltaManager$_cleanFormElements,
        _doSubmitStatements: AsyncDeltaManager$_doSubmitStatements,
        _onFormSubmit: AsyncDeltaManager$_onFormSubmit,
        _onFormSubmitCore: AsyncDeltaManager$_onFormSubmitCore,
        _retrieveDelta: AsyncDeltaManager$_retrieveDelta,
        _navigate: AsyncDeltaManager$_navigate,
        _retrieveDeltaCompleted: AsyncDeltaManager$_retrieveDeltaCompleted,
        _failoverToUrl: AsyncDeltaManager$_failoverToUrl,
        _onWindowUnload: AsyncDeltaManager$_onWindowUnload,
        _pageLoaded: AsyncDeltaManager$_pageLoaded,
        _pageLoadedInitialLoad: AsyncDeltaManager$_pageLoadedInitialLoad,
        _parseDelta: AsyncDeltaManager$_parseDelta,
        _queueScripts: AsyncDeltaManager$_queueScripts,
        _registerDisposeScript: AsyncDeltaManager$_registerDisposeScript,
        _reloadStartPage: AsyncDeltaManager$_reloadStartPage,
        _scriptIncludesLoadComplete: AsyncDeltaManager$_scriptIncludesLoadComplete,
        _scriptIncludesLoadFailed: AsyncDeltaManager$_scriptIncludesLoadFailed,
        _scriptsLoadComplete: AsyncDeltaManager$_scriptsLoadComplete,
        _showErrorPage: AsyncDeltaManager$_showErrorPage,
        _uniqueIDToClientID: AsyncDeltaManager$_uniqueIDToClientID,
        _registerCssLinks: AsyncDeltaManager$_registerCssLinks,
        _registerStyleBlock: AsyncDeltaManager$_registerStyleBlock,
        _registerCssLinkCallback: asyncDeltaManager$_registerCssLinkCallback,
        _registerElementForCleanup: AsyncDeltaManager$_registerElementForCleanup,
        _updatePanel: AsyncDeltaManager$_updatePanel,
        _checkNonContainerContent: AsyncDeltaManager$_checkNonContainerContent,
        _validateQueueScripts: AsyncDeltaManager$_validateQueueScripts,
        _validPosition: AsyncDeltaManager$_validPosition,
        _updateAllFormsWithMDSAttribute: AsyncDeltaManager$_updateAllFormsWithMDSAttribute,
        HandleHashChange: AsyncDeltaManager$HandleHashChange,
        _handleLocalAnchor: AsyncDeltaManager$_handleLocalAnchor,
        SetCurrentUrl: AsyncDeltaManager$SetCurrentUrl,
        _cssLoadCompleted: AsyncDeltaManager$_cssLoadCompleted,
        _downloadScriptAndStyleFilesInParallel: AsyncDeltaManager$_downloadScriptAndStyleFilesInParallel,
        _intervalArray: undefined,
        _timeoutArray: undefined,
        _XMLHttpRequests: undefined,
        _admtt: undefined,
        _MDSStartTime: undefined,
        telemetryAdd: AsyncDeltaManager$telemetryAdd,
        telemetrySpew: AsyncDeltaManager$telemetrySpew
    };
    if ('undefined' == typeof asyncDeltaManager) {
        asyncDeltaManager = new AsyncDeltaManager();
        if (g_MinimalDownload) {
            ajaxNavigate.add_navigate(AsyncDeltaManager_BodyOnHashChange);
        }
        asyncDeltaManager._addArrayElement = function AsyncDeltaManager$_addArrayElement(arrayName) {
            if (!window[arrayName]) {
                window[arrayName] = new Array(0);
            }
            for (var i = 1, l = arguments.length; i < l; i++) {
                Array.add(window[arrayName], arguments[i]);
            }
        };
        ExecuteOrDelayUntilBodyLoaded(OnDocumentLoad);
    }
    g_MDSAnimationRefCount = 0;
    DeltaManager_ScriptLoaderTask.prototype = {
        get_scriptElement: DeltaManager_ScriptLoaderTask$get_scriptElement,
        dispose: DeltaManager_ScriptLoaderTask$dispose,
        execute: DeltaManager_ScriptLoaderTask$execute,
        _addScriptElementHandlers: DeltaManager_ScriptLoaderTask$_addScriptElementHandlers,
        _removeScriptElementHandlers: DeltaManager_ScriptLoaderTask$_removeScriptElementHandlers,
        _scriptErrorHandler: DeltaManager_ScriptLoaderTask$_scriptErrorHandler,
        _scriptLoadHandler: DeltaManager_ScriptLoaderTask$_scriptLoadHandler,
        _disposed: undefined,
        _scriptElement: undefined,
        _scriptLoadDelegate: undefined,
        _scriptErrorDelegate: undefined
    };
    if (typeof isStartPlt1 != "undefined" && isStartPlt1)
        _spSpinnerOnload('notificationArea');
    startJsLoaded = true;
    notifyScriptsLoadedAndExecuteWaitingJobs("start.js");
}
var _spFormOnSubmit;
var g_MDSWSA;

function TrySetSessionStorage(propName, value) {
    if (window.sessionStorage != null) {
        try {
            window.sessionStorage[propName] = value;
        }
        catch (e) { }
    }
}
function EventEntry(target, type, listener, useCapture) {
    this.target = target;
    this.type = type;
    this.listener = listener;
    if (null != useCapture)
        this.useCapture = useCapture;
    this.active = false;
}
var g_addEventEntries;
var g_attachEventEntries;
var g_disposableObjects;

function SPAddEventListener(type, listener, useCapture) {
    var eventEntry = new EventEntry(this, type, listener, useCapture);

    g_addEventEntries[g_addEventEntries.length] = eventEntry;
    if (typeof this._addEventListener != 'undefined') {
        this._addEventListener(type, listener, useCapture);
    }
    else {
        throw "Unexpected";
    }
    eventEntry.active = true;
}
function SPRemoveEventListener(type, listener, useCapture) {
    var lenEventEntries = g_addEventEntries.length;

    for (var iEntry = 0; iEntry < lenEventEntries; iEntry++) {
        var eventEntry = g_addEventEntries[iEntry];

        if (null != eventEntry && eventEntry.active && this == eventEntry.target && type == eventEntry.type && listener == eventEntry.listener && useCapture == eventEntry.useCapture) {
            g_addEventEntries[iEntry] = null;
            break;
        }
    }
    if (typeof this._removeEventListener != 'undefined') {
        this._removeEventListener(type, listener, useCapture);
    }
    else {
        throw "Unexpected";
    }
}
function SPAttachEvent(type, listener) {
    var eventEntry = new EventEntry(this, type, listener);

    g_attachEventEntries[g_attachEventEntries.length] = eventEntry;
    if (typeof this._attachEvent != 'undefined') {
        this._attachEvent(type, listener);
    }
    else {
        throw "Unexpected";
    }
    eventEntry.active = true;
}
function SPDetachEvent(type, listener) {
    var lenEventEntries = g_attachEventEntries.length;

    for (var iEntry = 0; iEntry < lenEventEntries; iEntry++) {
        var eventEntry = g_attachEventEntries[iEntry];

        if (null != eventEntry && eventEntry.active && this == eventEntry.target && type == eventEntry.type && listener == eventEntry.listener) {
            g_attachEventEntries[iEntry] = null;
            break;
        }
    }
    if (typeof this._detachEvent != 'undefined') {
        this._detachEvent(type, listener);
    }
    else {
        throw "Unexpected";
    }
}
function InterceptDocumentWrite() {
    ULSUploadReport("MDSFailover: document.write", "", ajaxNavigate.get_href());
    if (Boolean(ajaxNavigate) && Boolean(ajaxNavigate.get_href())) {
        window.location.replace(ajaxNavigate.get_href());
    }
}
function InterceptDocumentWriteLn() {
    ULSUploadReport("MDSFailover: document.writeln", "", ajaxNavigate.get_href());
    if (Boolean(ajaxNavigate) && Boolean(ajaxNavigate.get_href())) {
        window.location.replace(ajaxNavigate.get_href());
    }
}
function DeltaManager_HookTime(_that) {
    var setIntervalDefault = window.setInterval;
    var clearIntervalDefault = window.clearInterval;
    var setTimeoutDefault = window.setTimeout;
    var clearTimeoutDefault = window.clearTimeout;

    if (!Boolean(_that._intervalArray))
        _that._intervalArray = [];
    if (!Boolean(_that._timeoutArray))
        _that._timeoutArray = [];
    window.setInterval = function() {
        var retVal;

        if ("function" == typeof setIntervalDefault) {
            retVal = setIntervalDefault.apply(window, arguments);
        }
        else {
            retVal = setIntervalDefault(arguments[0], arguments[1]);
        }
        if ('undefined' != typeof retVal) {
            _that._intervalArray.push(retVal);
        }
        return retVal;
    };
    window.clearInterval = function() {
        if ("function" == typeof clearIntervalDefault) {
            clearIntervalDefault.apply(window, arguments);
        }
        else {
            clearIntervalDefault(arguments[0]);
        }
        if ('undefined' != typeof arguments[0]) {
            var idx = Array.indexOf(_that._intervalArray, arguments[0]);

            if (-1 != idx) {
                _that._intervalArray.splice(idx, 1);
            }
        }
    };
    window.setTimeout = function() {
        var retVal;

        if (arguments.length > 1 && 'function' == typeof arguments[0]) {
            var fn = arguments[0];

            arguments[0] = function() {
                fn();
                if ('undefined' != typeof retVal) {
                    var idx = Array.indexOf(_that._timeoutArray, retVal);

                    if (-1 != idx) {
                        _that._timeoutArray.splice(idx, 1);
                    }
                }
            };
        }
        if ("function" == typeof setTimeoutDefault) {
            retVal = setTimeoutDefault.apply(window, arguments);
        }
        else {
            retVal = setTimeoutDefault(arguments[0], arguments[1]);
        }
        if ('undefined' != typeof retVal) {
            _that._timeoutArray.push(retVal);
        }
        return retVal;
    };
    window.clearTimeout = function() {
        if ("function" == typeof clearTimeoutDefault) {
            clearTimeoutDefault.apply(window, arguments);
        }
        else {
            clearTimeoutDefault(arguments[0]);
        }
        if ('undefined' != typeof arguments[0]) {
            var idx = Array.indexOf(_that._timeoutArray, arguments[0]);

            if (-1 != idx) {
                _that._timeoutArray.splice(idx, 1);
            }
        }
    };
}
function DeltaManager_ClearTime(_that) {
    var idx;
    var intervalArray = Array.clone(_that._intervalArray);
    var timeoutArray = Array.clone(_that._timeoutArray);

    if (Boolean(SP) && Boolean(SP.Utilities) && Boolean(SP.Utilities.tcsaver)) {
        var tcs = SP.Utilities.tcsaver.save();
        var sharedCancelTimer = tcs.get_sharedCancelTimer();
        var sharedTimer = tcs.get_sharedTimer();

        idx = Array.indexOf(intervalArray, sharedTimer);
        if (-1 != idx) {
            intervalArray.splice(idx, 1);
        }
        idx = Array.indexOf(timeoutArray, sharedCancelTimer);
        if (-1 != idx) {
            timeoutArray.splice(idx, 1);
        }
    }
    if ('undefined' != typeof SPAnimation && 'undefined' != typeof SPAnimation.g_AnimationEngine && Boolean(SPAnimation.g_AnimationEngine)) {
        if ('undefined' != typeof SPAnimation.g_AnimationEngine.sharedTimer && Boolean(SPAnimation.g_AnimationEngine.sharedTimer)) {
            idx = Array.indexOf(intervalArray, SPAnimation.g_AnimationEngine.sharedTimer);
            if (-1 != idx) {
                intervalArray.splice(idx, 1);
            }
        }
        if ('undefined' != typeof SPAnimation.g_AnimationEngine.sharedCancelTimer && Boolean(SPAnimation.g_AnimationEngine.sharedCancelTimer)) {
            idx = Array.indexOf(timeoutArray, SPAnimation.g_AnimationEngine.sharedCancelTimer);
            if (-1 != idx) {
                timeoutArray.splice(idx, 1);
            }
        }
    }
    for (var i in intervalArray) {
        try {
            clearInterval(intervalArray[i]);
        }
        catch (e) { }
    }
    for (var t in timeoutArray) {
        try {
            clearTimeout(timeoutArray[t]);
        }
        catch (e) { }
    }
}
function DeltaManager_HookXMLHttpRequest(_that) {
    if (!Boolean(_that._XMLHttpRequests)) {
        _that._XMLHttpRequests = [];
    }
    var originalXMLHttpRequestSend = window.XMLHttpRequest.prototype.send;

    window.XMLHttpRequest.prototype.send = function(data) {
        var xhr = this;

        if ("function" == typeof this.onreadystatechange) {
            var oldOnReadyStateChange = this.onreadystatechange;

            this.onreadystatechange = function() {
                try {
                    if (4 == xhr.readyState) {
                        var idx = Array.indexOf(_that._XMLHttpRequests, xhr);

                        if (-1 != idx) {
                            _that._XMLHttpRequests.splice(idx, 1);
                        }
                    }
                }
                catch (e) { }
                ;
                oldOnReadyStateChange.apply(null, arguments);
            };
        }
        _that._XMLHttpRequests.push(xhr);
        originalXMLHttpRequestSend.apply(this, arguments);
    };
}
function DeltaManager_ClearXMLHttpRequests(_that) {
    var cloneRequests = Array.clone(_that._XMLHttpRequests);

    for (var i = 0; i < cloneRequests.length; i++) {
        var request = cloneRequests[i];

        request.abort();
    }
    _that._XMLHttpRequests = [];
}
function DeltaManager_HookDocumentWrite() {
    if ('undefined' != typeof document.write) {
        document.write = InterceptDocumentWrite;
    }
    if ('undefined' != typeof document.writeln) {
        document.writeln = InterceptDocumentWriteLn;
    }
}
function DeltaManager_HookEvents(anObject) {
    if (!Boolean(anObject))
        return;
    var bind = function bindToObject(t, m) {
        return m;
    };

    if (browseris.ie && browseris.iever < 9) {
        bind = function(t, m) {
            return function() {
                return m.apply(t, arguments);
            };
        };
    }
    else {
        bind = function(t, m) {
            return m;
        };
    }
    if ('undefined' != typeof anObject.addEventListener) {
        if (!anObject._addEventListener) {
            anObject._addEventListener = anObject.addEventListener;
            anObject.addEventListener = bind(anObject, SPAddEventListener);
        }
    }
    if ('undefined' != typeof anObject.removeEventListener) {
        if (!anObject._removeEventListener) {
            anObject._removeEventListener = anObject.removeEventListener;
            anObject.removeEventListener = bind(anObject, SPRemoveEventListener);
        }
    }
    if ('undefined' != typeof anObject.attachEvent) {
        if (!anObject._attachEvent) {
            anObject._attachEvent = anObject.attachEvent;
            anObject.attachEvent = bind(anObject, SPAttachEvent);
        }
    }
    if ('undefined' != typeof anObject.detachEvent) {
        if (!anObject._detachEvent) {
            anObject._detachEvent = anObject.detachEvent;
            anObject.detachEvent = bind(anObject, SPDetachEvent);
        }
    }
}
function DeltaManager_ClearEventsForNewPage() {
    var iEntry;
    var eventEntry;
    var eventEntries = g_addEventEntries;

    g_addEventEntries = [];
    var lenEventEntries = eventEntries.length;

    for (iEntry = 0; iEntry < lenEventEntries; iEntry++) {
        eventEntry = eventEntries[iEntry];
        if (null != eventEntry && eventEntry.active) {
            eventEntry.target._removeEventListener(eventEntry.type, eventEntry.listener, eventEntry.useCapture);
        }
    }
    eventEntries = g_attachEventEntries;
    g_attachEventEntries = [];
    lenEventEntries = eventEntries.length;
    for (iEntry = 0; iEntry < lenEventEntries; iEntry++) {
        eventEntry = eventEntries[iEntry];
        if (null != eventEntry && eventEntry.active) {
            eventEntry.target._detachEvent(eventEntry.type, eventEntry.listener);
        }
    }
}
function DeltaManager_RaiseIterateConfirm(target, eventName, eventEntries, lenEventEntries, aEvent, pageMessage) {
    var iEntry;
    var eventEntry;
    var message;
    var anUndefined = (function(u) {
        return u;
    })();

    for (iEntry = 0; iEntry < lenEventEntries; iEntry++) {
        eventEntry = eventEntries[iEntry];
        if (null != eventEntry && eventEntry.active && eventEntry.target == target && eventName == eventEntry.type) {
            if ('undefined' != typeof aEvent.returnValue) {
                aEvent.returnValue = anUndefined;
            }
            message = eventEntry.listener(aEvent);
            if (typeof message == 'undefined' && 'string' == typeof aEvent.returnValue) {
                message = aEvent.returnValue;
            }
            if (typeof message != 'undefined') {
                if (!window.confirm(message.toString() + pageMessage))
                    return true;
            }
        }
    }
    return false;
}
function RaiseFakeEvent(eventName, target, cancelable) {
    var aEvent;
    var canceled = false;
    var onName;
    var iEntry;
    var eventEntry;
    var eventEntries;
    var lenEventEntries;

    switch (eventName) {
    case 'DOMContentLoaded':
    case 'readystatechange':
        aEvent = null;
        if ('undefined' != typeof document.createEvent) {
            aEvent = document.createEvent('Event');
            aEvent.initEvent(eventName, true, cancelable);
            canceled = !target.dispatchEvent(aEvent);
        }
        else if ('undefined' != typeof document.createEventObject) {
            aEvent = document.createEventObject();
            aEvent.type = eventName;
            canceled = !target.fireEvent("on" + eventName, aEvent) || 'undefined' != typeof aEvent.returnValue && Boolean(aEvent.returnValue);
        }
        else {
            throw "Unexpected";
        }
        break;
    case 'beforeunload':
        var fOnBeforeUnLoadExecuted = false;
        var message;
        var isOnBeforeUnloadFunction = 'function' == typeof window.onbeforeunload;
        var pageMessage = "";

        if ('undefined' != typeof document.createEvent) {
            eventEntries = g_addEventEntries;
            lenEventEntries = eventEntries.length;
            if (lenEventEntries > 0 || isOnBeforeUnloadFunction) {
                aEvent = document.createEvent('Event');
                aEvent.initEvent(eventName, true, cancelable);
                if (isOnBeforeUnloadFunction) {
                    fOnBeforeUnLoadExecuted = true;
                    message = (function(u) {
                        return u;
                    })();
                    try {
                        message = window.onbeforeunload.call(null, aEvent);
                    }
                    catch (e) { }
                    ;
                    if (typeof message != 'undefined') {
                        if (!window.confirm(message.toString() + pageMessage))
                            return true;
                    }
                }
                if (DeltaManager_RaiseIterateConfirm(target, eventName, eventEntries, lenEventEntries, aEvent, pageMessage))
                    return true;
            }
        }
        if ('undefined' != typeof document.createEventObject) {
            eventEntries = g_attachEventEntries;
            lenEventEntries = eventEntries.length;
            if (lenEventEntries > 0 || isOnBeforeUnloadFunction) {
                var retValue2 = false;

                aEvent = document.createEventObject();
                aEvent.type = eventName;
                var targetElem2 = document.createElement('div');

                targetElem2.attachEvent("onclick", function(evt) {
                    cancelDefault(evt);
                    if (!fOnBeforeUnLoadExecuted && isOnBeforeUnloadFunction) {
                        message = (function(u) {
                            return u;
                        })();
                        try {
                            message = window.onbeforeunload.call(null, aEvent);
                        }
                        catch (e) { }
                        ;
                        if (typeof message != 'undefined') {
                            if (!window.confirm(message.toString() + pageMessage)) {
                                retValue2 = true;
                                return;
                            }
                        }
                    }
                    onName = 'on' + eventName;
                    if (DeltaManager_RaiseIterateConfirm(target, onName, eventEntries, lenEventEntries, aEvent, pageMessage)) {
                        retValue2 = true;
                        return;
                    }
                });
                document.body.appendChild(targetElem2);
                targetElem2.fireEvent("onclick", aEvent);
                document.body.removeChild(targetElem2);
                if (retValue2)
                    return retValue2;
            }
        }
        break;
    default:
        if ('undefined' != typeof document.createEvent) {
            eventEntries = g_addEventEntries;
            lenEventEntries = eventEntries.length;
            if (lenEventEntries > 0) {
                aEvent = document.createEvent('Event');
                aEvent.initEvent(eventName, true, cancelable);
                for (iEntry = 0; iEntry < lenEventEntries; iEntry++) {
                    eventEntry = eventEntries[iEntry];
                    if (null != eventEntry && eventEntry.active && eventEntry.target == target && eventName == eventEntry.type) {
                        canceled = Boolean(eventEntry.listener(aEvent));
                        if (cancelable && canceled) {
                            return true;
                        }
                    }
                }
            }
        }
        if ('undefined' != typeof document.createEventObject) {
            var retValue = false;

            aEvent = document.createEventObject();
            aEvent.type = "click";
            var targetElem = document.createElement('div');

            targetElem.attachEvent("onclick", function(evt) {
                cancelDefault(evt);
                eventEntries = g_attachEventEntries;
                lenEventEntries = eventEntries.length;
                if (lenEventEntries > 0) {
                    aEvent = document.createEventObject();
                    aEvent.type = eventName;
                    onName = 'on' + eventName;
                    for (iEntry = 0; iEntry < lenEventEntries; iEntry++) {
                        eventEntry = eventEntries[iEntry];
                        if (null != eventEntry && eventEntry.active && eventEntry.target == target && onName == eventEntry.type) {
                            canceled = Boolean(eventEntry.listener(aEvent));
                            if (cancelable && (canceled || 'undefined' != typeof aEvent.returnValue && Boolean(aEvent.returnValue))) {
                                retValue = true;
                                break;
                            }
                        }
                    }
                }
            });
            document.body.appendChild(targetElem);
            targetElem.fireEvent("onclick", aEvent);
            document.body.removeChild(targetElem);
            if (retValue)
                return retValue;
        }
    }
    return canceled;
}
function GetMDSLocationFromUrl(startPage, url) {
    if (null == startPage)
        return null;
    try {
        startPage = CanonicalUrl(startPage);
    }
    catch (e) { }
    var locationWeb = startPage.indexOf("/_layouts/15/start.aspx");

    if (-1 == locationWeb) {
        return null;
    }
    if (null == url || 0 == url.length)
        return null;
    try {
        url = CanonicalUrl(url);
    }
    catch (e) { }
    var prefix;

    if ('/' == url[0]) {
        var startHostName = startPage.indexOf("://");

        if (-1 == startHostName)
            return null;
        var firstSlash = startPage.indexOf("/", startHostName + 3);

        prefix = startPage.substr(firstSlash, locationWeb - firstSlash);
    }
    else {
        prefix = startPage.substr(0, locationWeb);
    }
    if (url.length < prefix.length)
        return null;
    if (prefix.toUpperCase() != (url.substr(0, prefix.length)).toUpperCase())
        return null;
    if (url.length == prefix.length) {
        return "/";
    }
    else {
        return url.substr(prefix.length);
    }
}
function BodyOnSubmitHook(evt) {
    if (null == evt) {
        evt = window.event;
    }
    var srcElement = GetEventSrcElement(evt);

    if (!(evt.returnValue === false || evt.defaultPrevented)) {
        var adm = asyncDeltaManager;

        if (null != srcElement && srcElement == adm._form) {
            adm._onFormSubmit(evt);
            cancelDefault(evt);
            return false;
        }
    }
    return;
}
function BodyOnclickHook(evt) {
    if (null == evt) {
        evt = window.event;
    }
    if (AjaxNavigate$WantsNewTab(evt)) {
        return;
    }
    var srcElement = GetEventSrcElement(evt);

    if (!(evt.returnValue === false || evt.defaultPrevented)) {
        var anchorClick = false;
        var currentElem = srcElement;

        while (null != currentElem) {
            if (null != currentElem.tagName && "A" == currentElem.tagName.toUpperCase()) {
                if (!Boolean(currentElem.target) || currentElem.target == "" || (currentElem.target.toUpperCase()).indexOf("_SELF") != -1) {
                    anchorClick = true;
                }
                break;
            }
            currentElem = currentElem.parentNode;
        }
        if (anchorClick) {
            var baseColl = document.getElementsByTagName('BASE');
            var baseHref = baseColl != null && baseColl.length > 0 ? baseColl[0].href : null;
            var targetPath = RemoveMDSQueryParametersFromUrl(currentElem.href);
            var bLocalAnchor = targetPath.indexOf(baseHref + "#") == 0;
            var hashPos = targetPath.indexOf("#");

            if (-1 != hashPos && ((targetPath.substr(0, hashPos)).toLowerCase()).endsWith("/_layouts/15/start.aspx"))
                return;
            try {
                targetPath = CanonicalUrl(targetPath);
            }
            catch (e) { }
            var urlPattern = new RegExp("^([A-Za-z0-9_]+)\:\/\/([0-9a-zA-Z](?:[-.\w]*[0-9a-zA-Z])*)(\:[0-9]+)?([a-zA-Z0-9\-\.\,\'\/\\\+&%\$_]*)?(?:(?:[\?])([a-zA-Z0-9\-\.\,\'\/\\\+&%\$_=\{\}]*))?(?:(?:[#])([a-zA-Z0-9\-\.\,\'\/\\\+&%\$_=#~_!\(\)+\:;@]*))?$");
            var urlParts = urlPattern.exec(targetPath);

            if (null != urlParts) {
                var targetScheme = urlParts[1];
                var targetHostname = urlParts[2];
                var targetPort = "";

                if (null != urlParts[3] && urlParts[3].length > 0) {
                    targetPort = urlParts[3].substr(1);
                }
                var targetLocalPath = urlParts[4];
                var targetQuery = urlParts[5];
                var targetFragment = urlParts[6];
                var portPosition = window.location.host.indexOf(":");
                var windowHost = portPosition == -1 ? window.location.host : window.location.host.substr(0, portPosition);

                if (window.location.protocol == targetScheme + ":" && windowHost == targetHostname && window.location.port == targetPort) {
                    var localPathAndQuery;
                    var updateParts = AjaxNavigate$parseHash(targetFragment);

                    if (null != targetQuery && targetQuery.length > 0) {
                        localPathAndQuery = targetLocalPath + "?" + targetQuery;
                    }
                    else {
                        localPathAndQuery = targetLocalPath;
                    }
                    if (bLocalAnchor) {
                        localPathAndQuery = null;
                    }
                    else {
                        if (IsFailoverTarget(targetLocalPath)) {
                            return;
                        }
                    }
                    ajaxNavigate.update(localPathAndQuery, updateParts, false, updateParts["anchorTag"]);
                    cancelDefault(evt);
                    return false;
                }
            }
        }
    }
    return;
}
function EqualAsUrls(url1, url2) {
    if (url1 != null && url2 != null) {
        var uri1 = new URI(url1, {
            pathCaseInsensitive: true
        });
        var uri2 = new URI(url2);

        return uri1.equals(uri2);
    }
    else {
        return url1 == url2;
    }
}
function DeltaManager_RequestSettings(async, asyncTarget, panelsToUpdate, sourceElement) {
    this.async = async;
    this.asyncTarget = asyncTarget;
    this.panelsToUpdate = panelsToUpdate;
    this.sourceElement = sourceElement;
}
function DeltaManager_BeginRequestEventArgs(request, postBackElement, updatePanelsToUpdate) {
    var e = Function._validateParams(arguments, [{
        name: "request",
        type: XMLHttpRequest
    }, {
        name: "postBackElement",
        mayBeNull: true,
        domElement: true
    }, {
        name: "updatePanelsToUpdate",
        type: Array,
        mayBeNull: true,
        optional: true,
        elementType: String
    }]);

    if (Boolean(e))
        throw e;
    this._request = request;
    this._postBackElement = postBackElement;
    this._updatePanelsToUpdate = updatePanelsToUpdate;
}
function DeltaManager$BeginRequestEventArgs$get_postBackElement() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._postBackElement;
}
function DeltaManager$BeginRequestEventArgs$get_request() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._request;
}
function DeltaManager$BeginRequestEventArgs$get_updatePanelsToUpdate() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return Boolean(this._updatePanelsToUpdate) ? Array.clone(this._updatePanelsToUpdate) : [];
}
function DeltaManager_EndRequestEventArgs(error, dataItems, response) {
    var e = Function._validateParams(arguments, [{
        name: "error",
        type: Error,
        mayBeNull: true
    }, {
        name: "dataItems",
        type: Object,
        mayBeNull: true
    }, {
        name: "response",
        type: XMLHttpRequest
    }]);

    if (Boolean(e))
        throw e;
    this._errorHandled = false;
    this._error = error;
    if (Boolean(dataItems)) {
        this._dataItems = dataItems;
    }
    else {
        this._dataItems = [];
    }
    this._response = response;
}
function DeltaManager$EndRequestEventArgs$get_dataItems() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._dataItems;
}
function DeltaManager$EndRequestEventArgs$get_error() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._error;
}
function DeltaManager$EndRequestEventArgs$get_errorHandled() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._errorHandled;
}
function DeltaManager$EndRequestEventArgs$set_errorHandled(value) {
    var e = Function._validateParams(arguments, [{
        name: "value",
        type: Boolean
    }]);

    if (Boolean(e))
        throw e;
    this._errorHandled = value;
}
function DeltaManager$EndRequestEventArgs$get_response() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._response;
}
function DeltaManager_InitializeRequestEventArgs(request, postBackElement, updatePanelsToUpdate) {
    var e = Function._validateParams(arguments, [{
        name: "request",
        type: XMLHttpRequest
    }, {
        name: "postBackElement",
        mayBeNull: true,
        domElement: true
    }, {
        name: "updatePanelsToUpdate",
        type: Array,
        mayBeNull: true,
        optional: true,
        elementType: String
    }]);

    if (Boolean(e))
        throw e;
    this._request = request;
    this._postBackElement = postBackElement;
    this._updatePanelsToUpdate = updatePanelsToUpdate;
    this._cancel = false;
}
function DeltaManager$InitializeRequestEventArgs$get_cancel() {
    return this._cancel;
}
function DeltaManager$InitializeRequestEventArgs$set_cancel(a) {
    this._cancel = a;
}
function DeltaManager$InitializeRequestEventArgs$get_postBackElement() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._postBackElement;
}
function DeltaManager$InitializeRequestEventArgs$get_request() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._request;
}
function DeltaManager$InitializeRequestEventArgs$get_updatePanelsToUpdate() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return Boolean(this._updatePanelsToUpdate) ? Array.clone(this._updatePanelsToUpdate) : [];
}
function DeltaManager$InitializeRequestEventArgs$set_updatePanelsToUpdate(value) {
    var e = Function._validateParams(arguments, [{
        name: "value",
        type: Array,
        elementType: String
    }]);

    if (Boolean(e))
        throw e;
    this._updated = true;
    this._updatePanelsToUpdate = value;
}
function DeltaManager_PageLoadedEventArgs(panelsUpdated, panelsCreated, dataItems) {
    var e = Function._validateParams(arguments, [{
        name: "panelsUpdated",
        type: Array
    }, {
        name: "panelsCreated",
        type: Array
    }, {
        name: "dataItems",
        type: Object,
        mayBeNull: true
    }]);

    if (Boolean(e))
        throw e;
    this._panelsUpdated = panelsUpdated;
    this._panelsCreated = panelsCreated;
    if (null != dataItems) {
        this._dataItems = dataItems;
    }
    else {
        this._dataItems = [];
    }
}
function DeltaManager$PageLoadedEventArgs$get_dataItems() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._dataItems;
}
function DeltaManager$PageLoadedEventArgs$get_panelsCreated() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._panelsCreated;
}
function DeltaManager$PageLoadedEventArgs$get_panelsUpdated() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._panelsUpdated;
}
function DeltaManager_PageLoadingEventArgs(panelsUpdating, panelsDeleting, dataItems) {
    var e = Function._validateParams(arguments, [{
        name: "panelsUpdating",
        type: Array
    }, {
        name: "panelsDeleting",
        type: Array
    }, {
        name: "dataItems",
        type: Object,
        mayBeNull: true
    }]);

    if (Boolean(e))
        throw e;
    this._panelsUpdating = panelsUpdating;
    this._panelsDeleting = panelsDeleting;
    if (null != dataItems) {
        this._dataItems = dataItems;
    }
    else {
        this._dataItems = [];
    }
}
function DeltaManager$PageLoadingEventArgs$get_dataItems() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._dataItems;
}
function DeltaManager$PageLoadingEventArgs$get_panelsDeleting() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._panelsDeleting;
}
function DeltaManager$PageLoadingEventArgs$get_panelsUpdating() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._panelsUpdating;
}
function DeltaManager_ScriptLoader() {
    this._scriptsToLoad = null;
    this._sessions = [];
    this._loading = false;
    this._scriptLoadedDelegate = Function.createDelegate(this, this._scriptLoadedHandler);
}
function DeltaManager$_ScriptLoader$dispose() {
    this._stopSession();
    this._loading = false;
    if (this._events) {
        delete this._events;
    }
    this._sessions = null;
    this._currentSession = null;
    this._scriptLoadedDelegate = null;
}
function DeltaManager$_ScriptLoader$clearInlineScripts() {
    if (null != this._pageInlineScripts) {
        var head = (document.getElementsByTagName('head'))[0];
        var l = this._pageInlineScripts.length;

        for (var i = 0; i < l; i++) {
            if (this._pageInlineScripts[i].parentNode === head) {
                head.removeChild(this._pageInlineScripts[i]);
            }
        }
        this._pageInlineScripts = null;
    }
}
function DeltaManager_ScriptLoader_Session() {
}
function DeltaManager$_ScriptLoader$loadScripts(scriptTimeout, allScriptsLoadedCallback, scriptLoadFailedCallback, scriptLoadTimeoutCallback) {
    var e = Function._validateParams(arguments, [{
        name: "scriptTimeout",
        type: Number,
        integer: true
    }, {
        name: "allScriptsLoadedCallback",
        type: Function,
        mayBeNull: true
    }, {
        name: "scriptLoadFailedCallback",
        type: Function,
        mayBeNull: true
    }, {
        name: "scriptLoadTimeoutCallback",
        type: Function,
        mayBeNull: true
    }]);

    if (Boolean(e))
        throw e;
    var session = {
        allScriptsLoadedCallback: allScriptsLoadedCallback,
        scriptLoadFailedCallback: scriptLoadFailedCallback,
        scriptLoadTimeoutCallback: scriptLoadTimeoutCallback,
        scriptsToLoad: this._scriptsToLoad,
        scriptTimeout: scriptTimeout
    };

    this._scriptsToLoad = null;
    this._sessions[this._sessions.length] = session;
    if (!this._loading) {
        this._nextSession();
    }
}
function DeltaManager$_ScriptLoader$queueCustomScriptTag(scriptAttributes) {
    var e = Function._validateParams(arguments, [{
        name: "scriptAttributes"
    }]);

    if (Boolean(e))
        throw e;
    if (!Boolean(this._scriptsToLoad)) {
        this._scriptsToLoad = [];
    }
    Array.add(this._scriptsToLoad, scriptAttributes);
}
function DeltaManager$_ScriptLoader$queueScriptBlock(scriptContent) {
    var e = Function._validateParams(arguments, [{
        name: "scriptContent",
        type: String
    }]);

    if (Boolean(e))
        throw e;
    if (!Boolean(this._scriptsToLoad)) {
        this._scriptsToLoad = [];
    }
    Array.add(this._scriptsToLoad, {
        text: scriptContent
    });
}
function DeltaManager$IsScriptLoadedInHeadInternal(scriptUrl) {
    var head = (document.getElementsByTagName('head'))[0];
    var scriptElements = head.getElementsByTagName('script');
    var nScriptElements = scriptElements.length;
    var sourceUrl = GetAbsoluteUrl(scriptUrl);

    for (var iElement = 0; iElement < nScriptElements; iElement++) {
        var source = scriptElements[iElement].src;

        if (null != source && source.length > 0) {
            if (sourceUrl == source) {
                return true;
            }
        }
    }
    return false;
}
function DeltaManager$_ScriptLoader$queueScriptReference(scriptUrl) {
    var e = Function._validateParams(arguments, [{
        name: "scriptUrl",
        type: String
    }]);

    if (Boolean(e))
        throw e;
    if (!Boolean(this._scriptsToLoad)) {
        this._scriptsToLoad = [];
    }
    var nScriptElements;
    var iElement;

    if (Boolean(this._scriptsToLoad)) {
        nScriptElements = this._scriptsToLoad.length;
        for (iElement = 0; iElement < nScriptElements; iElement++) {
            var scriptScheduled = this._scriptsToLoad[iElement];

            if (scriptUrl == scriptScheduled.src) {
                return;
            }
        }
    }
    Array.add(this._scriptsToLoad, {
        src: scriptUrl
    });
}
function DeltaManager$_ScriptLoader$_createScriptElement(queuedScript) {
    var scriptElement = document.createElement('script');

    scriptElement.type = 'text/javascript';
    for (var attr in queuedScript) {
        scriptElement[attr] = queuedScript[attr];
    }
    return scriptElement;
}
function DeltaManager$_ScriptLoader$_resetInternal() {
    var supportFiles = g_supportFiles;

    for (var tag in supportFiles) {
        supportFiles[tag].executed = false;
    }
}
function DeltaManager$_ScriptLoader$_loadTargetInternal(currentScript, sod, fAsync) {
    currentScript = RemoveCachingParamsFromUrl(currentScript);
    var idxLayouts = currentScript.indexOf("/_layouts/15/");

    if (-1 != idxLayouts) {
        currentScript = currentScript.substr(idxLayouts + "/_layouts/15/".length);
    }
    currentScript = currentScript.replace(".debug.js", ".js");
    var splitLoc = currentScript.match(new RegExp("^([0-9][0-9][0-9][0-9][0-9]?)/(.*)"));

    if (null != splitLoc) {
        currentScript = splitLoc[2];
    }
    var currentScriptURI = new URI(currentScript, {
        pathCaseInsensitive: true
    });
    var InternalLoad = function() {
        if (null != sod && !sod.reset) {
            return;
        }
        var supportFiles = g_supportFiles;
        var animationEngine = null;
        var telemetryObject = null;
        var telemetryData = null;

        if ("undefined" != typeof SPAnimation) {
            animationEngine = SPAnimation.g_AnimationEngine;
            telemetryObject = SPAnimation.g_TelemetryObject;
            telemetryData = SPAnimation.g_LastAnimationTelemetryData;
        }
        var tcs = null;

        if (Boolean(SP) && Boolean(SP.Utilities) && Boolean(SP.Utilities.tcsaver))
            tcs = SP.Utilities.tcsaver.save();
        for (var tag in supportFiles) {
            if (currentScriptURI.equals(supportFiles[tag].scriptURI)) {
                supportFiles[tag].executed = true;
                var beginFunc = supportFiles[tag].beginFunc;

                if (null != beginFunc) {
                    beginFunc();
                }
                var endFunc = supportFiles[tag].endFunc;

                if (null != endFunc) {
                    endFunc();
                }
                var loadFunc = supportFiles[tag].loadFunc;

                if (null != loadFunc) {
                    loadFunc();
                }
            }
        }
        if (Boolean(tcs))
            SP.Utilities.tcsaver.restore(tcs);
        if ("undefined" != typeof SPAnimation) {
            if (Boolean(animationEngine)) {
                SPAnimation.g_AnimationEngine = animationEngine;
            }
            if (Boolean(telemetryObject)) {
                SPAnimation.g_TelemetryObject = telemetryObject;
            }
            if (Boolean(telemetryData)) {
                SPAnimation.g_LastAnimationTelemetryData = telemetryData;
            }
        }
        if (null != sod) {
            sod.reset = false;
        }
        NotifyScriptLoadedAndExecuteWaitingJobs(currentScript);
        if (null != sod) {
            NotifyOnLoad(sod);
        }
    };

    if (fAsync) {
        window.setTimeout(InternalLoad, 0);
    }
    else {
        InternalLoad();
    }
}
function DeltaManager$_ScriptLoader$_loadScriptsInternal() {
    var nextScript = null;
    var session = this._currentSession;

    while (Boolean(session.scriptsToLoad) && session.scriptsToLoad.length > 0) {
        nextScript = Array.dequeue(session.scriptsToLoad);
        if (typeof nextScript.src === "string" && DeltaManager$IsScriptLoadedInHeadInternal(nextScript.src)) {
            var sod = UrlToSod(nextScript.src);

            DeltaManager$_ScriptLoader$_loadTargetInternal(nextScript.src, sod, false);
            nextScript = null;
        }
        if (Boolean(nextScript))
            break;
    }
    if (Boolean(nextScript)) {
        var scriptElement = this._createScriptElement(nextScript);

        if (Boolean(scriptElement.text) && Sys.Browser.agent === Sys.Browser.Safari) {
            scriptElement.innerHTML = scriptElement.text;
            delete scriptElement.text;
        }
        if (typeof nextScript.src === "string") {
            this._currentTask = new DeltaManager_ScriptLoaderTask(scriptElement, this._scriptLoadedDelegate);
            this._currentTask.execute();
        }
        else {
            var headElements = document.getElementsByTagName('head');

            if (headElements.length === 0) {
                this._finished = true;
                throw new Error.invalidOperation(Strings.STS.L_AsyncDeltaManager_ScriptLoadFailedNoHead);
            }
            else {
                headElements[0].appendChild(scriptElement);
                if (null == this._pageInlineScripts) {
                    this._pageInlineScripts = [];
                }
                this._pageInlineScripts[this._pageInlineScripts.length] = scriptElement;
            }
            this._loadScriptsInternal();
        }
    }
    else {
        this._stopSession();
        var callback = session.allScriptsLoadedCallback;

        if (callback) {
            callback(this);
        }
        this._nextSession();
    }
}
function DeltaManager$_ScriptLoader$_nextSession() {
    if (this._sessions.length === 0) {
        this._loading = false;
        this._currentSession = null;
        return;
    }
    this._loading = true;
    var session = Array.dequeue(this._sessions);

    this._currentSession = session;
    this._loadScriptsInternal();
}
var MdsScripts;
var scriptLoadStatus;

function canOptimizeDownload(nextScript) {
    return typeof nextScript.src === 'string' && nextScript.src != null && nextScript.src != '' && nextScript.src[0] == '/';
}
function DeltaManager$_ScriptLoader$_raiseError() {
    var callback = this._currentSession.scriptLoadFailedCallback;
    var scriptElement = this._currentTask.get_scriptElement();

    this._stopSession();
    if (callback) {
        callback(this, scriptElement);
        this._nextSession();
    }
    else {
        this._loading = false;
        throw DeltaManager_ScriptLoader._errorScriptLoadFailed(scriptElement.src);
    }
}
function DeltaManager$_ScriptLoader$_scriptLoadedHandler(scriptElement, loaded) {
    if (loaded) {
        Array.add(DeltaManager_ScriptLoader._getLoadedScripts(), scriptElement.src);
        this._currentTask.dispose();
        this._currentTask = null;
        this._loadScriptsInternal();
    }
    else {
        this._raiseError();
    }
}
function DeltaManager$_ScriptLoader$_stopSession() {
    if (Boolean(this._currentTask)) {
        this._currentTask.dispose();
        this._currentTask = null;
    }
}
var MDSTimerNames;

function AsyncDeltaManager() {
    this._Initialized = false;
    this._form = null;
    this._activeDefaultButton = null;
    this._activeDefaultButtonClicked = false;
    this._updatePanelIDs = null;
    this._updatePanelClientIDs = null;
    this._updatePanelHasChildrenAsTriggers = null;
    this._asyncPostBackControlIDs = null;
    this._asyncPostBackControlClientIDs = null;
    this._postBackControlIDs = null;
    this._postBackControlClientIDs = null;
    this._scriptManagerID = null;
    this._pageLoadedHandler = null;
    this._onsubmit = null;
    this._onSubmitStatements = [];
    this._originalDoPostBack = null;
    this._originalDoPostBackWithOptions = null;
    this._originalFireDefaultButton = null;
    this._originalDoCallback = null;
    this._requestSettings = null;
    this._verb = null;
    this._request = null;
    this._retrieveDeltaHandler = null;
    this._onFormElementClickHandler = null;
    this._onWindowUnloadHandler = null;
    this._asyncPostBackTimeout = null;
    this._controlIDToFocus = null;
    this._processingRequest = false;
    this._scriptDisposes = {};
    this._transientFields = ["__VIEWSTATEENCRYPTED", "__VIEWSTATEFIELDCOUNT"];
    this._events = null;
    this._currentUrl = null;
    this._pendingRequestUrl = null;
    this._currentAnchor = null;
    this._pendingLocalAnchor = null;
    this._finished = false;
    this._hooked = false;
    this._firstRender = true;
    this._admtt = new Array(15 + 1);
}
function AsyncDeltaManager$_get_eventHandlerList() {
    if (!this._events) {
        this._events = new Sys.EventHandlerList();
    }
    return this._events;
}
function AsyncDeltaManager$get_isInAsyncRequest() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._request !== null;
}
function AsyncDeltaManager$add_beginRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).addHandler("beginRequest", handler);
}
function AsyncDeltaManager$remove_beginRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).removeHandler("beginRequest", handler);
}
function AsyncDeltaManager$add_endRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).addHandler("endRequest", handler);
}
function AsyncDeltaManager$remove_endRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).removeHandler("endRequest", handler);
}
function AsyncDeltaManager$add_initializeRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).addHandler("initializeRequest", handler);
}
function AsyncDeltaManager$remove_initializeRequest(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).removeHandler("initializeRequest", handler);
}
function AsyncDeltaManager$add_pageLoaded(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).addHandler("pageLoaded", handler);
}
function AsyncDeltaManager$remove_pageLoaded(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).removeHandler("pageLoaded", handler);
}
function AsyncDeltaManager$add_pageLoading(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).addHandler("pageLoading", handler);
}
function AsyncDeltaManager$remove_pageLoading(handler) {
    var e = Function._validateParams(arguments, [{
        name: "handler",
        type: Function
    }]);

    if (Boolean(e))
        throw e;
    (this._get_eventHandlerList()).removeHandler("pageLoading", handler);
}
function AsyncDeltaManager$abortRequest() {
    if (!this._processingRequest && Boolean(this._request)) {
        this._request.abort();
        this._request = null;
    }
}
var __pendingCallbacks;

function AsyncDeltaManager$_cancelPendingCallbacks() {
    for (var i = 0, l = window.__pendingCallbacks.length; i < l; i++) {
        var callback = window.__pendingCallbacks[i];

        if (callback) {
            if (!callback.async) {
                window.__synchronousCallBackIndex = -1;
            }
            window.__pendingCallbacks[i] = null;
            var callbackFrameID = "__CALLBACKFRAME" + String(i);
            var xmlRequestFrame = document.getElementById(callbackFrameID);

            if (Boolean(xmlRequestFrame)) {
                xmlRequestFrame.parentNode.removeChild(xmlRequestFrame);
            }
        }
    }
}
function AsyncDeltaManager$_commitControls(updatePanelData, asyncPostBackTimeout) {
    if (updatePanelData) {
        this._updatePanelIDs = updatePanelData.updatePanelIDs;
        this._updatePanelClientIDs = updatePanelData.updatePanelClientIDs;
        this._updatePanelHasChildrenAsTriggers = updatePanelData.updatePanelHasChildrenAsTriggers;
        this._asyncPostBackControlIDs = updatePanelData.asyncPostBackControlIDs;
        this._asyncPostBackControlClientIDs = updatePanelData.asyncPostBackControlClientIDs;
        this._postBackControlIDs = updatePanelData.postBackControlIDs;
        this._postBackControlClientIDs = updatePanelData.postBackControlClientIDs;
    }
    if (typeof asyncPostBackTimeout !== 'undefined' && asyncPostBackTimeout !== null) {
        this._asyncPostBackTimeout = asyncPostBackTimeout * 1000;
    }
}
function AsyncDeltaManager$_registerElementForCleanup(e) {
    if (null == this._registeredElements) {
        this._registeredElements = [];
    }
    this._registeredElements[this._registeredElements.length] = e;
}
function AsyncDeltaManager$_createHiddenField(container, id, value) {
    var field = document.getElementById(id);

    if (Boolean(field)) {
        if (!field._isContained) {
            field.parentNode.removeChild(field);
        }
        else if (!Boolean(container)) {
            container = field.parentNode;
        }
    }
    if (!Boolean(container))
        container = this._form;
    field = document.createElement("input");
    field.setAttribute("type", "hidden");
    field._isContained = true;
    field.id = (field.name = id);
    field.value = value;
    container.appendChild(field);
    this._registerElementForCleanup(field);
}
function AsyncDeltaManager$_createServerError(httpStatusCode, message) {
    var displayMessage = "";

    if (Boolean(message)) {
        displayMessage += message;
    }
    else if (typeof Strings != 'undefined') {
        displayMessage += String.format(Strings.STS.L_AsyncDeltaManager_ServerError, httpStatusCode);
    }
    var e = Error.create(displayMessage, {
        name: 'AsyncDeltaManage.ServerErrorException',
        httpStatusCode: httpStatusCode
    });

    e.popStackFrame();
    return e;
}
function AsyncDeltaManager$_createParserError(parserErrorMessage) {
    var displayMessage = "AsyncDeltaManager.ParserErrorException: " + String.format(Strings.STS.L_AsyncDeltaManager_ParserError, parserErrorMessage);
    var e = Error.create(displayMessage, {
        name: 'AsyncDeltaManager.ParserErrorException'
    });

    e.popStackFrame();
    return e;
}
function AsyncDeltaManager$_doSubmitStatements(evt) {
    var i, l, continueSubmit = true;

    if (continueSubmit) {
        var submitLen = this._onSubmitStatements.length;

        for (i = 0, l = submitLen; i < l; i++) {
            if (!this._onSubmitStatements[i]()) {
                continueSubmit = false;
                break;
            }
        }
    }
    if (!continueSubmit) {
        return false;
    }
    return true;
}
function AsyncDeltaManager$_onFormSubmit(evt) {
    if (!this._doSubmitStatements(evt))
        return false;
    return this._onFormSubmitCore(this._form, evt);
}
function AsyncDeltaManager$_onFormSubmitCore(form, evt) {
    var formBody = "";
    var submitUrl = GetServerRelativeUrlFromURL(form.action);
    var AsyncDeltaManager$_onFormSubmitCallback = null;

    if (submitUrl != this._currentUrl) {
        var _this = this;

        AsyncDeltaManager$_onFormSubmitCallback = function() {
            var strippedUrl = (submitUrl.split("#"))[0];

            _this._currentUrl = strippedUrl;
            window.location.hash = GetMDSLocationFromUrl(_this._startPageUrl, submitUrl);
        };
    }
    if (form.enctype != 'multipart/form-data') {
        var count = form.elements.length;

        for (var i = 0; i < count; i++) {
            var element = form.elements[i];
            var elemName = element.name;

            if (typeof elemName === "undefined" || elemName === null || elemName.length === 0) {
                continue;
            }
            var tagName = element.tagName.toUpperCase();

            if (tagName === 'INPUT') {
                var type = element.type;

                if (type === 'text' || type === 'password' || type === 'hidden' || (type === 'checkbox' || type === 'radio') && element.checked) {
                    formBody += encodeURIComponent(elemName);
                    formBody += '=';
                    formBody += encodeURIComponent(element.value);
                    formBody += '&';
                }
            }
            else if (tagName === 'SELECT') {
                var optionCount = element.options.length;

                for (var j = 0; j < optionCount; j++) {
                    var option = element.options[j];

                    if (option.selected) {
                        formBody += encodeURIComponent(elemName);
                        formBody += '=';
                        formBody += encodeURIComponent(option.value);
                        formBody += '&';
                    }
                }
            }
            else if (tagName === 'TEXTAREA') {
                formBody += encodeURIComponent(elemName);
                formBody += '=';
                formBody += encodeURIComponent(element.value);
                formBody += '&';
            }
        }
        formBody += 'AjaxDelta=1';
        this._retrieveDelta(form.action, "POST", formBody, null, false, AsyncDeltaManager$_onFormSubmitCallback);
    }
    else if ('undefined' != typeof FormData) {
        var formData = new FormData(form);

        formData.append("AjaxDelta", "1");
        this._retrieveDelta(form.action, "POST", null, formData, false, AsyncDeltaManager$_onFormSubmitCallback);
    }
    else {
        var formData2 = {
            form: form,
            fields: [{
                name: "AjaxDelta",
                value: "1"
            }, {
                name: "OrigMaster",
                value: origMP
            }, {
                name: "FrameDownload",
                value: "1"
            }]
        };

        this._retrieveDelta(form.action, "POST", null, formData2, false, AsyncDeltaManager$_onFormSubmitCallback);
    }
    return true;
}
function FrameHttpRequest() {
    this.status = 0;
    this._aborted = false;
}
function FrameHttpRequest$send(data) {
    var extraFields = data.fields;
    var mainForm = data.form;
    var targetFrameId = "DeltaManagerDownload" + ((new Date()).getTime()).toString();
    var aForm = document.createElement("form");

    aForm.setAttribute('encType', "multipart/form-data");
    aForm.setAttribute('method', "POST");
    aForm.setAttribute('target', targetFrameId);
    aForm.setAttribute('action', this._action);
    var fileInputs = [];
    var len = mainForm.length;

    for (var e = 0; e < len; e++) {
        var element = mainForm.elements[e];
        var elemName = element.name;

        if (typeof elemName === "undefined" || elemName === null || elemName.length === 0 || typeof element.type == "undefined" || !(element.type == "hidden" || element.type == "select-one" || element.type == "file" || element.type == "text" || element.type == "password" || (element.type == 'checkbox' || element.type == 'radio') && element.checked)) {
            continue;
        }
        if (element.type != "hidden") {
            fileInputs.push(element);
        }
        else {
            fileInputs.push(element.cloneNode(true));
        }
    }
    len = fileInputs.length;
    for (e = 0; e < len; e++) {
        CloneInputNodeWithData(fileInputs[e]);
        aForm.appendChild(fileInputs[e]);
    }
    var hostdivExtra = document.createElement("div");

    len = extraFields.length;
    for (var i = 0; i < len; i++) {
        hostdivExtra.innerHTML = '<input type=hidden name="' + extraFields[i].name + '" value="' + extraFields[i].value + '" />';
        aForm.appendChild(hostdivExtra.childNodes[0]);
    }
    var hostdiv = document.createElement("div");

    hostdiv.innerHTML = "<iframe id=\"" + targetFrameId + "\" name=\"" + targetFrameId + "\"/>";
    var requestFrame = hostdiv.childNodes[0];

    requestFrame.style.position = 'absolute';
    requestFrame.style.top = '-10000px';
    requestFrame.style.left = '-10000px';
    requestFrame.style.display = 'none';
    var _this = this;
    var FrameHttpRequest$loadCallBack = function() {
        if (typeof requestFrame.addEventListener != 'undefined') {
            requestFrame.removeEventListener('load', FrameHttpRequest$loadCallBack, false);
        }
        else {
            requestFrame.detachEvent('onload', FrameHttpRequest$loadCallBack);
        }
        var doc = requestFrame.contentWindow ? requestFrame.contentWindow.document : requestFrame.contentDocument ? requestFrame.contentDocument : requestFrame.document;
        var text = null;

        if (Boolean(doc.body) && 1 == doc.body.children.length && null != doc.body.children[0].innerText && doc.body.children[0].innerText.length > 0) {
            text = doc.body.children[0].innerText;
        }
        else {
            text = doc.body.innerText;
        }
        var frameParent = requestFrame.parentNode;

        frameParent.removeChild(requestFrame);
        if (!_this._aborted) {
            _this.status = 200;
            _this.readyState = 4;
            _this.responseText = text;
            _this._headers = new Object;
            var dbPattern = new RegExp("(-deltaboundary-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}-)");
            var parts = dbPattern.exec(text);

            if (null != parts) {
                _this._headers["deltaBoundary"] = parts[0];
            }
            else {
                _this._headers["deltaBoundary"] = "deltaBoundary";
            }
            if (Boolean(_this.onreadystatechange)) {
                _this.onreadystatechange();
            }
        }
    };
    var FrameHttpRequest$ready = function() {
        requestFrame.contentDocument.body.appendChild(aForm);
        if (typeof requestFrame.addEventListener != 'undefined') {
            requestFrame.addEventListener('load', FrameHttpRequest$loadCallBack, false);
        }
        else {
            requestFrame.attachEvent('onload', FrameHttpRequest$loadCallBack);
        }
        aForm.submit();
    };

    window[targetFrameId] = FrameHttpRequest$ready;
    var frameScript = "parent.FrameHttpRequest$FrameCallback(\"" + targetFrameId + "\");";

    requestFrame.src = "javascript:false;document.write('<body><script type=\"text/javascript\">" + frameScript + "</script></body>');";
    document.body.appendChild(requestFrame);
}
function FrameHttpRequest$FrameCallback(targetFrameId) {
    var callback = window[targetFrameId];

    window[targetFrameId] = (function(u) {
        return u;
    })();
    if (Boolean(callback) && "function" == typeof callback) {
        callback();
    }
}
function FrameHttpRequest$abort() {
    this._aborted = true;
}
function FrameHttpRequest$getResponseHeader(header) {
    return this._headers[header];
}
function FrameHttpRequest$open(verb, action, async) {
    if (!async)
        throw "Unexpected";
    if ("POST" != verb)
        throw "Unexpected";
    this._action = action;
    this._aborted = false;
}
function CloneInputNodeWithData(element) {
    var cloneElement = element.cloneNode(true);

    cloneElement.id = element.id + "_cln";
    switch (element.type) {
    case "file":
        break;
    case "text":
    case "password":
        cloneElement.value = element.value;
        break;
    case "checkbox":
    case "radio":
        cloneElement.checked = element.checked;
        cloneElement.name = element.name + "_cln";
        break;
    case "select-one":
        cloneElement.selectedIndex = element.selectedIndex;
        break;
    }
    if (Boolean(element.parentNode)) {
        element.parentNode.insertBefore(cloneElement, element);
    }
}
function snapShot$contains(a, obj) {
    var l = a.length;

    for (var i = 0; i < l; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
var g_MDSPageLoaded;

function AsyncDeltaManager$_retrieveDelta(action, verb, formBody, formData, contentCached, finishFunc) {
    var i, l, continueSubmit = true;
    var memberIdx, member;
    var gDownloadTask = null;

    this._startPageUrl = AjaxNavigate$_GetWindowLocationNoHash(window.location.href);
    this._startURI = new URI(this._startPageUrl);
    if (!this._hooked) {
        DeltaManager_HookDocumentWrite();
        DeltaManager_HookTime(this);
        DeltaManager_HookXMLHttpRequest(this);
        DeltaManager_HookEvents(window);
        DeltaManager_HookEvents(document);
        DeltaManager_HookEvents(document.body);
        DeltaManager_HookEvents(this._form);
        var application = Sys.Application;

        if ('undefined' != typeof application.registerDisposableObject) {
            var __registerDisposableObject = application.registerDisposableObject;

            application.registerDisposableObject = function(object) {
                g_disposableObjects.push(object);
                return __registerDisposableObject.apply(application, arguments);
            };
        }
        if ('undefined' != typeof application.unregisterDisposableObject) {
            var __unregisterDisposableObject = application.unregisterDisposableObject;

            application.unregisterDisposableObject = function(object) {
                var cDisposable = g_disposableObjects.length;

                for (var idx = 0; idx < cDisposable; idx++) {
                    if (object == g_disposableObjects[idx]) {
                        g_disposableObjects[idx] = (function(u) {
                            return u;
                        })();
                        break;
                    }
                }
                return __unregisterDisposableObject.apply(application, arguments);
            };
        }
        this._hooked = true;
    }
    if (!(null != this._snapShot)) {
        this._snapShot = new Array(0);
        this._snapShot.push('Strings');
        this._snapShot.push('Page_TextTypes');
        this._snapShot.push('PRF');
        this._snapShot.push('SPAnimation');
        this._snapShot.push('SPAnimationUtility');
        this._snapShot.push('SPNotifications');
        for (memberIdx in window) {
            member = null;
            try {
                member = window[memberIdx];
            }
            catch (e) { }
            ;
            if ('function' != typeof member) {
                this._snapShot.push(memberIdx);
            }
        }
    }
    this._requestSettings = new DeltaManager_RequestSettings(true, null, null, null);
    var fragmentIndex = action.indexOf('#');

    if (fragmentIndex !== -1) {
        action = action.substr(0, fragmentIndex);
    }
    try {
        action = CanonicalUrl(action);
    }
    catch (e) { }
    var request = null;

    g_MDSPageLoaded = false;
    if ("POST" != verb || 'multipart/form-data' != this._form.enctype || 'multipart/form-data' == this._form.enctype && 'undefined' != typeof FormData) {
        request = new XMLHttpRequest();
        request.open(verb, action, true);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request._scriptAborted = false;
        var xhrMethodAbort = request.abort;

        request.abort = function() {
            var readyState = 0;

            try {
                readyState = request.readyState;
            }
            catch (e) { }
            ;
            if (4 != readyState) {
                request._scriptAborted = true;
                xhrMethodAbort.apply(this, arguments);
            }
        };
        request.get_scriptAborted = function() {
            return request._scriptAborted;
        };
        if (typeof origMP != "undefined") {
            request.setRequestHeader("Pragma", "SharePointAjaxDelta=" + origMP);
            request.setRequestHeader("X-SharePoint", "SharePointAjaxDelta=" + origMP);
        }
        if (!contentCached)
            request.setRequestHeader("Cache-Control", "no-cache");
        if ('multipart/form-data' != this._form.enctype) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        }
    }
    else {
        request = new FrameHttpRequest();
        request.open(verb, action, true);
    }
    var _this = this;

    request.onreadystatechange = function() {
        if (_this._request.readyState === 4) {
            try {
                if (typeof _this._request.status === "undefined") {
                    return;
                }
            }
            catch (ex) {
                return;
            }
            if (_this._request != null && _this._request === request) {
                request.onreadystatechange = Function.emptyMethod;
                _this._retrieveDeltaCompleted(request, gDownloadTask, finishFunc);
            }
        }
    };
    var body;

    if (null != formData) {
        body = formData;
    }
    if (null != formBody) {
        body = formBody;
    }
    var eventArgs, handler = (this._get_eventHandlerList()).getHandler("initializeRequest");

    if (handler) {
        eventArgs = new DeltaManager_InitializeRequestEventArgs(request, this._requestSettings.sourceElement);
        handler(this, eventArgs);
        continueSubmit = !eventArgs.get_cancel();
    }
    if (!continueSubmit) {
        return;
    }
    this.abortRequest();
    handler = (this._get_eventHandlerList()).getHandler("beginRequest");
    if (handler) {
        eventArgs = new DeltaManager_BeginRequestEventArgs(request, this._requestSettings.sourceElement);
        handler(this, eventArgs);
    }
    if (this._originalDoCallback) {
        this._cancelPendingCallbacks();
    }
    this._verb = verb.toUpperCase();
    this._request = null;
    this._processingRequest = false;
    this.telemetryAdd(0);
    if (typeof SP != "undefined" && typeof SP.Utilities != "undefined" && typeof SP.Utilities.Task != "undefined") {
        this._finished = false;
        var state = new DownloadState(this, body, request);

        gDownloadTask = new SP.Utilities.Task(null, SP.Utilities.Task.TaskType.autoCancel, 480000, new SP.Utilities.CommandBlock(state, DownloadCommandFunction, DownloadFinishedFunction), null, DownloadCancel, DownloadProgress);
        gDownloadTask.start();
    }
    else {
        this.abortRequest();
        this._request = request;
        request.send(body);
    }
}
function GetMDSWSA() {
    if (typeof g_MDSWSA == "undefined" || !g_MDSWSA) {
        if (SP) {
            if (SP.BWsaClient != null) {
                g_MDSWSA = GetWSA();
                g_MDSWSA.createStream(10193, 1, 8, 200);
            }
        }
    }
    return g_MDSWSA;
}
function MDSLogTime(timerName) {
    var time = (new Date()).getTime();

    if (typeof window.msWriteProfilerMark != 'undefined')
        window.msWriteProfilerMark(timerName);
    return Number(time);
}
function AsyncDeltaManager$telemetryAdd(index) {
    if (index == 0) {
        if (Boolean(g_MDSStartTime)) {
            this._MDSStartTime = Number(g_MDSStartTime.getTime());
            g_MDSStartTime = null;
        }
        else
            this._MDSStartTime = MDSLogTime(MDSTimerNames[index]);
        this._admtt[index] = 0;
        this._admtt[3] = "N/A";
    }
    else
        this._admtt[index] = MDSLogTime(MDSTimerNames[index]) - this._MDSStartTime;
}
function AsyncDeltaManager$telemetrySpew(correlationId) {
    var duration = this._admtt[15];

    if (typeof DeveloperDashboard != "undefined" && typeof DeveloperDashboard.PostMsg != "undefined")
        DeveloperDashboard.PostMsg("MS.MDSTelemetry", "AddMDSData", "<div>MDS(" + this._form.action + "): " + String(duration) + "</div>" + "<div>.....Download: 0 - " + String(this._admtt[1]) + "</div>" + "<div>.....ParseDelta: " + String(this._admtt[12]) + " - " + String(this._admtt[13]) + "</div>" + "<div>.....GC: " + String(this._admtt[4]) + " - " + String(this._admtt[5]) + "</div>" + "<div>.....GlobalScript: " + String(this._admtt[6]) + " - " + String(this._admtt[7]) + "</div>" + "<div>.....CSS: " + String(this._admtt[8]) + " - " + String(this._admtt[9]) + "</div>" + "<div>.....InnerHTML: " + String(this._admtt[10]) + " - " + String(this._admtt[11]) + "</div>" + "<div>.....ScriptLoader: " + String(this._admtt[14]) + " - " + String(this._admtt[15]) + "</div>" + "<div>.....Animation: " + String(this._admtt[2]) + "-" + String(this._admtt[3]) + "</div>" + "<div>&nbsp;</div>");
    var wsa = GetMDSWSA();

    if (!IsNullOrUndefined(wsa) && WSAEnabled()) {
        wsa.setCorrelationId(correlationId);
        wsa.addToStreamDw(10193, duration, this._admtt[1], this._admtt[13] - this._admtt[12], this._admtt[5] - this._admtt[4], this._admtt[7] - this._admtt[6], this._admtt[9] - this._admtt[8], this._admtt[11] - this._admtt[10], this._admtt[15] - this._admtt[14]);
    }
}
function DownloadCancel(element, state, type) {
    state.dlm.abortRequest();
    return true;
}
function DownloadProgress(progress, time, state) {
    if (state.saveTitle == null) {
        if (Boolean(window.document.title))
            state.saveTitle = window.document.title;
        else
            state.saveTitle = "";
        window.document.title = state.saveTitle;
    }
    var nId = state.notificationId;

    if (progress >= 1.0) {
        if (window.document.title == Strings.STS.L_Loading_Text)
            window.document.title = state.saveTitle;
        if (nId != null && typeof removeNotification == "function") {
            removeNotification(nId);
            state.notificationId = null;
        }
    }
    else {
        if (nId == null && typeof addNotification == "function")
            state.notificationId = SP.UI.Notify.showLoadingNotification(true);
        if (window.document.title != Strings.STS.L_Loading_Text) {
            state.saveTitle = window.document.title;
            window.document.title = Strings.STS.L_Loading_Text;
        }
    }
}
function DownloadFinishedFunction(element, state) {
}
function DownloadCommandFunction(state, pauseFunction) {
    pauseFunction();
    if (!state.started) {
        if (!Boolean(state.dlm._request))
            state.dlm._request = state.request;
        state.dlm._request.send(state.body);
        state.started = true;
    }
    else if (state.dlm._finished) {
        return 1.0;
    }
    return -1;
}
function DownloadState(dlm, body, request) {
    this.started = false;
    this.body = body;
    this.dlm = dlm;
    this.request = request;
    this.notificationId = null;
}
function AsyncDeltaManager$dispose() {
    this._form = null;
    this._updatePanelIDs = null;
    this._updatePanelClientIDs = null;
    this._asyncPostBackControlIDs = null;
    this._asyncPostBackControlClientIDs = null;
    this._postBackControlIDs = null;
    this._postBackControlClientIDs = null;
    this._asyncPostBackTimeout = null;
    this._activeElement = null;
}
function AsyncDeltaManager$_reloadStartPage() {
    var targetURL = null;

    if (Boolean(this._pendingRequestUrlFull)) {
        targetURL = this._startPageUrl + "#" + GetMDSLocationFromUrl(this._startPageUrl, GetServerRelativeUrlFromURL(this._pendingRequestUrlFull));
    }
    var request = new Sys.Net.WebRequest();

    request.set_httpVerb("GET");
    request.set_url(this._startPageUrl);
    request.add_completed(function() {
        if (Boolean(targetURL) && !EqualAsUrls(window.location.href, targetURL)) {
            window.location.href = targetURL;
        }
        else {
            window.location.reload(true);
        }
    });
    (request.get_headers())['Cache-Control'] = 'no-cache';
    request.invoke();
}
function AsyncDeltaManager$_elementContains(container, element) {
    while (Boolean(element)) {
        if (element === container) {
            return true;
        }
        element = element.parentNode;
    }
    return false;
}
function AsyncDeltaManager$_endRequest(error, errorPage, executor, data) {
    var fAbort = false;

    if (this._request === executor) {
        this._processingRequest = false;
        this._additionalInput = null;
        this._request = null;
        fAbort = "function" == typeof executor.get_scriptAborted && executor.get_scriptAborted();
    }
    var handler = (this._get_eventHandlerList()).getHandler("endRequest");
    var errorHandled = false;

    if (handler) {
        var eventArgs = new DeltaManager_EndRequestEventArgs(error, Boolean(data) ? data.dataItems : [], executor);

        handler(this, eventArgs);
        errorHandled = eventArgs.get_errorHandled();
    }
    if ("string" == typeof g_Workspace) {
        var workspace = document.getElementById(g_Workspace);

        if (null != workspace) {
            workspace.scrollTop = 0;
        }
    }
    var _this = this;

    _this._finished = true;
    RemoveAnimationClones();
    if (!fAbort) {
        if (null != this._linksToRemoveLater) {
            var l = this._linksToRemoveLater.length;

            for (var i = 0; i < l; i++) {
                var e = this._linksToRemoveLater[i];
                var deleteAttrib = e.getAttribute("toDelete");

                if (Boolean(deleteAttrib)) {
                    if (e.parentNode != null) {
                        e.parentNode.removeChild(e);
                    }
                    else {
                        if (window.console && window.console.log) {
                            window.console.log("unable to remove registered element " + e.toString());
                        }
                    }
                }
            }
            this._linksToRemoveLater = null;
        }
    }
    EndTransitionAnimation(_this, function() {
        if (null != data && data.skipProcessing)
            return;
        if (!fAbort) {
            if (document.body.onclick != null) {
                var onclick = document.body.onclick;

                document.body.onclick = function(evt) {
                    onclick(evt);
                    BodyOnclickHook(evt);
                };
            }
            else {
                document.body.onclick = BodyOnclickHook;
            }
            if (Boolean(_this._pendingLocalAnchor)) {
                _this._handleLocalAnchor(_this._pendingLocalAnchor);
            }
            if (!browseris.ie || browseris.ie && browseris.ie9standardUp) {
                RaiseFakeEvent('DOMContentLoaded', document, false);
            }
            RaiseFakeEvent('readystatechange', document, false);
            if (browseris.ie8standard) {
                if (typeof _spBodyOnLoadWrapper != 'undefined')
                    _spBodyOnLoadWrapper();
                RaiseFakeEvent('load', window, false);
            }
            else {
                RaiseFakeEvent('load', window, false);
                if (typeof _spBodyOnLoadWrapper != 'undefined')
                    _spBodyOnLoadWrapper();
            }
            ExecuteOrDelayUntilScriptLoaded(function() {
                _spBodyOnLoadFunctionNames = [];
                if (typeof _spBodyOnLoad == 'function')
                    _spBodyOnLoad = undefined;
            }, "core.js");
            _spPreFetch();
        }
        _this.telemetryAdd(3);
        g_MDSPageLoaded = true;
        LoadPendingSods();
    });
    if (!fAbort && Boolean(error) && !errorHandled) {
        if ("GET" == this._verb.toUpperCase()) {
            var correlationId = executor.getResponseHeader("SPRequestGuid");

            if (null != this._pendingRequestUrlFull) {
                ULSUploadReport("MDSFailover: Error: " + error.message, correlationId, this._pendingRequestUrlFull);
                window.location.replace(RemoveMDSQueryParametersFromUrl(this._pendingRequestUrlFull));
            }
            else {
                ULSUploadReport("MDSFailover: Error: " + error.message, correlationId, ajaxNavigate.get_href());
                this._processingRequest = true;
                throw error;
            }
        }
        else {
            this._showErrorPage(error, errorPage);
        }
    }
}
function AsyncDeltaManager$_findText(text, aLocation) {
    var startIndex = Math.max(0, aLocation - 20);
    var endIndex = Math.min(text.length, aLocation + 20);

    return text.substring(startIndex, endIndex);
}
function AsyncDeltaManager$_getPageLoadedEventArgs(initialLoad, data) {
    var updated = [];
    var created = [];
    var version4 = Boolean(data) ? data.version4 : false;
    var upData = Boolean(data) ? data.updatePanelData : null;
    var newIDs, newClientIDs, childIDs, refreshedIDs;

    if (!upData) {
        newIDs = this._updatePanelIDs;
        newClientIDs = this._updatePanelClientIDs;
        childIDs = null;
        refreshedIDs = null;
    }
    else {
        newIDs = upData.updatePanelIDs;
        newClientIDs = upData.updatePanelClientIDs;
        childIDs = upData.childUpdatePanelIDs;
        refreshedIDs = upData.panelsToRefreshIDs;
    }
    var i, l, uniqueID, clientID;

    if (null != refreshedIDs) {
        for (i = 0, l = refreshedIDs.length; i < l; i += version4 ? 2 : 1) {
            uniqueID = refreshedIDs[i];
            clientID = version4 ? refreshedIDs[i + 1] : "";
            if (!Boolean(clientID)) {
                clientID = this._uniqueIDToClientID(uniqueID);
            }
            Array.add(updated, document.getElementById(clientID));
        }
    }
    if (null != newIDs) {
        for (i = 0, l = newIDs.length; i < l; i++) {
            if (initialLoad || Array.indexOf(childIDs, newIDs[i]) !== -1) {
                Array.add(created, document.getElementById(newClientIDs[i]));
            }
        }
    }
    return new DeltaManager_PageLoadedEventArgs(updated, created, Boolean(data) ? data.dataItems : []);
}
function AsyncDeltaManager$_getPageLoadingEventArgs(data) {
    var updated = [], deleted = [], upData = data.updatePanelData;

    if (upData != null) {
        var oldIDs = upData.oldUpdatePanelIDs, oldClientIDs = upData.oldUpdatePanelClientIDs, newIDs = upData.updatePanelIDs, childIDs = upData.childUpdatePanelIDs, refreshedIDs = upData.panelsToRefreshIDs, i, l, uniqueID, clientID, version4 = data.version4;

        for (i = 0, l = refreshedIDs.length; i < l; i += version4 ? 2 : 1) {
            uniqueID = refreshedIDs[i];
            clientID = version4 ? refreshedIDs[i + 1] : "";
            if (!Boolean(clientID)) {
                clientID = this._uniqueIDToClientID(uniqueID);
            }
            Array.add(updated, document.getElementById(clientID));
        }
        for (i = 0, l = oldIDs.length; i < l; i++) {
            uniqueID = oldIDs[i];
            if (Array.indexOf(refreshedIDs, uniqueID) === -1 && (Array.indexOf(newIDs, uniqueID) === -1 || Array.indexOf(childIDs, uniqueID) > -1)) {
                Array.add(deleted, document.getElementById(oldClientIDs[i]));
            }
        }
    }
    return new DeltaManager_PageLoadingEventArgs(updated, deleted, data.dataItems);
}
function AsyncDeltaManager$_initializeInternal(formElement) {
    if (this._Initialized) {
        if (formElement != this._form) {
            if (window.console && window.console.log) {
                window.console.log("AsyncDeltaManager reinitialized to new form");
            }
        }
    }
    this._Initialized = true;
    this._form = formElement;
}
function AsyncDeltaManager$_cleanFormElements() {
    var form = this._form;
    var count = form.elements.length;
    var formElements = [];

    for (var i = 0; i < count; i++) {
        formElements.push(form.elements[i]);
    }
    for (i = 0; i < count; i++) {
        var e = formElements[i];

        if (null != e && Boolean(e.tagName) && "INPUT" == e.tagName.toUpperCase() && Boolean(e.type) && "HIDDEN" == e.type.toUpperCase()) {
            var eParent = e.parentNode;

            if (null != eParent) {
                eParent.removeChild(e);
            }
        }
    }
}
function AsyncDeltaManager$onError(msg, url, line) {
    var adm = asyncDeltaManager;

    if (null != adm && adm._processingRequest) {
        if (null != adm._pendingRequestUrlFull) {
            window.location.replace(RemoveMDSQueryParametersFromUrl(adm._pendingRequestUrlFull));
        }
        else {
            window.location.replace(ajaxNavigate.get_href());
        }
    }
}
function AsyncDeltaManager$_checkNonContainerContent(id, content, correlationId) {
    var div = document.createElement('div');
    var tip = "";
    var succeeded = true;
    var tagName = "";

    try {
        div.innerHTML = content;
    }
    catch (e) {
        succeeded = false;
    }
    if (succeeded) {
        for (var c = 0; succeeded && c < div.childNodes.length; c++) {
            var child = div.childNodes[c];

            tagName = child.tagName;
            if (Boolean(tagName)) {
                tagName = tagName.toUpperCase();
                switch (tagName) {
                case "META":
                    if ("undefined" != typeof child.httpEquiv && "REFRESH" == child.httpEquiv.toUpperCase())
                        succeeded = false;
                    break;
                case "LINK":
                    if ("undefined" != typeof child.rel && "STYLESHEET" == child.rel.toUpperCase() && "undefined" != typeof child.type && "TEXT/CSS" == child.type.toUpperCase()) {
                        succeeded = false;
                    }
                    break;
                case "SCRIPT":
                    succeeded = false;
                    break;
                case "STYLE":
                    succeeded = false;
                    break;
                case "TITLE":
                    succeeded = false;
                    break;
                case "BASE":
                    succeeded = false;
                    break;
                default:
                    succeeded = false;
                }
            }
        }
        if (!succeeded) {
            ULSUploadReport("MDSFailover: Unexpected tag in head: " + tagName, correlationId, ajaxNavigate.get_href());
        }
    }
    if (!succeeded) {
        window.location.replace(ajaxNavigate.get_href());
    }
}
function AsyncDeltaManager$_failoverToUrl(url) {
    if (this._firstRender) {
        window.location.replace(url);
    }
    else {
        window.location.href = url;
    }
}
function AsyncDeltaManager$_retrieveDeltaCompleted(sender, downloadTask, finishFunc) {
    var adm = asyncDeltaManager;

    this._processingRequest = true;
    this._savedFormAction = null;
    var notifier = document.getElementById("notificationArea");

    if (Boolean(notifier)) {
        notifier.innerHTML = "";
        notifier.style.top = "";
        notifier.style.left = "";
        notifier.style.color = "";
    }
    if (!Boolean(this._request) || sender !== this._request) {
        return;
    }
    var requestStatus = 0;

    try {
        requestStatus = sender.status;
    }
    catch (ex) { }
    ;
    if (requestStatus !== 200) {
        var errorResponse = null;

        try {
            errorResponse = sender.responseText;
        }
        catch (ex2) { }
        ;
        this._endRequest(this._createServerError(requestStatus), errorResponse, sender, null);
        return;
    }
    this.telemetryAdd(1);
    this.telemetryAdd(12);
    var data = this._parseDelta(sender);

    this.telemetryAdd(13);
    if (this._firstRender) {
        this._firstRender = Boolean(data) ? data.skipProcessing : true;
    }
    if (!Boolean(data)) {
        if (Boolean(downloadTask))
            downloadTask.cancel(SP.Utilities.Task.CancelType.explicit);
        if (null != this._pendingRequestUrlFull) {
            this._failoverToUrl(RemoveMDSQueryParametersFromUrl(this._pendingRequestUrlFull));
        }
        else {
            if ('undefined' != typeof PostFullPageLoad) {
                _spFormOnSubmitCalled = false;
                if ('undefined' != typeof submitHook) {
                    submitHook = function() {
                        return false;
                    };
                }
                PostFullPageLoad();
            }
            else {
                this._endRequest(Error.invalidOperation(Strings.STS.L_AsyncDeltaManager_ParseError), null, sender, null);
            }
        }
        return;
    }
    if (typeof data.scriptBlockNodes != 'undefined' && data.scriptBlockNodes != null) {
        this._validateQueueScripts(data.scriptBlockNodes);
    }
    if (Boolean(data.skipProcessing)) {
        this._endRequest(null, null, data.executor, data);
    }
    else {
        try {
            var pageRibbon = (SP.Ribbon.PageManager.get_instance()).get_ribbon();

            if (null != pageRibbon) {
                pageRibbon.set_minimized(true);
                pageRibbon.refresh();
            }
        }
        catch (e) { }
        if (typeof initContentComplete == 'undefined' || initContentComplete) {
            if (typeof SPAnimation != "undefined" && Boolean(SPAnimation)) {
                BeginTransitionAnimation();
            }
        }
        else {
            initContentComplete = true;
            if (typeof SPAnimation != "undefined" && Boolean(SPAnimation)) {
                var reEnable = SPAnimation.Settings.IsAnimationEnabled();

                SPAnimation.Settings.DisableSessionAnimation();
                BeginTransitionAnimation();
                if (reEnable)
                    SPAnimation.Settings.EnableAnimation();
            }
        }
        if (Boolean(finishFunc))
            finishFunc();
        TrySetSessionStorage("MDSMasterPageMismatch", 0);
        var correlationId = sender.getResponseHeader("SPRequestGuid");
        var i, l, node;
        var dlgWnd = _dlgWndTop();

        while (dlgWnd.g_childDialog != null) {
            commonModalDialogClose(0, null);
        }
        var prm = Sys.WebForms.PageRequestManager.getInstance();
        var originalDoCallback = prm._originalDoCallback;
        var originalFireDefaultButton = prm._originalFireDefaultButton;
        var originalDoPostBackWithOptions = prm._originalDoPostBackWithOptions;
        var originalDoPostBack = prm._originalDoPostBack;

        if (typeof g_NotificationEngine != 'undefined' && null != g_NotificationEngine) {
            g_NotificationEngine.Reset();
        }
        RaiseFakeEvent('unload', window, false);
        window.onfocus = null;
        if ('function' == typeof window.onbeforeunload)
            window.onbeforeunload = null;
        if (typeof _ribbonClear == "function")
            _ribbonClear();
        _spBodyOnLoadFunctionNames = null;
        _spBodyOnLoadFunctions = [];
        _spFormOnSubmit = null;
        _spFormOnSubmitCalled = false;
        _spSuppressFormOnSubmitWrapper = false;
        if (Boolean(this._prevData) && Boolean(this._prevData.updatePanelNodes)) {
            l = this._prevData.updatePanelNodes.length;
            for (i = 0; i < l; i++) {
                node = this._prevData.updatePanelNodes[i];
                var updateElement = document.getElementById(node.id);

                if (Boolean(updateElement)) {
                    try {
                        Sys.Application.disposeElement(updateElement, true);
                    }
                    catch (e) { }
                }
            }
        }
        var components = Sys.Application.getComponents();
        var cComponents = components.length;

        for (i = 0; i < cComponents; i++) {
            Sys.Application.removeComponent(components[i]);
        }
        var disposableObjects = g_disposableObjects;

        g_disposableObjects = [];
        for (var j = 0, k = disposableObjects.length; j < k; j++) {
            var object = disposableObjects[j];

            if (typeof object !== "undefined") {
                object.dispose();
            }
        }
        try {
            var pageManager = SP.Ribbon.PageManager.get_instance();
            var oldRibbon = pageManager.get_ribbon();

            if (null != oldRibbon)
                oldRibbon.dispose();
            oldRibbon = null;
            pageManager.set_ribbon(null);
            pageManager.resetComponents();
            pageManager = null;
        }
        catch (e) { }
        try {
            if (originalDoCallback) {
                window.WebForm_DoCallback = originalDoCallback;
            }
            if (Boolean(originalFireDefaultButton)) {
                window.WebForm_FireDefaultButton = originalFireDefaultButton;
            }
            if (Boolean(originalDoPostBackWithOptions)) {
                window.WebForm_DoPostBackWithOptions = originalDoPostBackWithOptions;
            }
            if (Boolean(originalDoPostBack)) {
                eval("window.__doPostBack = originalDoPostBack");
            }
            prm._onFormSubmitHandler = null;
            prm._onFormElementClickHandler = null;
            prm._onWindowUnloadHandler = null;
            this._form.onsubmit = prm._onsubmit;
            prm._onsubmit = null;
            prm._scriptManagerID = null;
            prm._masterPageUniqueID = null;
            prm._events = null;
            prm._prmInitialized = false;
        }
        catch (e) { }
        DeltaManager$_ScriptLoader$_resetInternal();
        if (null != this._registeredElements) {
            l = this._registeredElements.length;
            for (i = 0; i < l; i++) {
                var e = this._registeredElements[i];

                if (typeof e.rel != "undefined" && e.rel.toLowerCase() == "stylesheet") {
                    if (!Boolean(this._linksToRemoveLater))
                        this._linksToRemoveLater = new Array(0);
                    e.setAttribute("toDelete", "1");
                    this._linksToRemoveLater.push(e);
                }
                else {
                    if (e.parentNode != null) {
                        e.parentNode.removeChild(e);
                    }
                    else {
                        if (window.console && window.console.log) {
                            window.console.log("unable to remove registered element " + e.toString());
                        }
                    }
                }
            }
            this._registeredElements = null;
        }
        this._cleanFormElements();
        var loader = DeltaManager_ScriptLoader.getInstance();

        loader.clearInlineScripts();
        this._onSubmitStatements = [];
        $clearHandlers(this._form);
        $clearHandlers(document.body);
        $clearHandlers(document);
        $clearHandlers(window);
        DeltaManager_ClearTime(this);
        DeltaManager_ClearXMLHttpRequests(this);
        DeltaManager_ClearEventsForNewPage();
        this.telemetryAdd(4);
        var animationEngine = null;
        var telemetryObject = null;
        var animationLogging = null;
        var telemetryData = null;

        if ("undefined" != typeof SPAnimation) {
            if ("undefined" != typeof SPAnimation.g_AnimationEngine)
                animationEngine = SPAnimation.g_AnimationEngine;
            if ("undefined" != typeof SPAnimation.g_TelemetryObject)
                telemetryObject = SPAnimation.g_TelemetryObject;
            if ("undefined" != typeof SPAnimation.Logging)
                animationLogging = SPAnimation.Logging;
            if ("undefined" != typeof SPAnimation.g_LastAnimationTelemetryData)
                telemetryData = SPAnimation.g_LastAnimationTelemetryData;
        }
        var memberIdx, member;

        if (null != this._snapShot) {
            var anUndefined = (function(u) {
                return u;
            })();

            for (memberIdx in window) {
                try {
                    member = window[memberIdx];
                }
                catch (e) { }
                ;
                if (member != null && 'undefined' != typeof member && 'function' != typeof member) {
                    if (!snapShot$contains(this._snapShot, memberIdx)) {
                        try {
                            if (!(window[memberIdx] != null && Type.isNamespace(window[memberIdx]))) {
                                window[memberIdx] = anUndefined;
                                delete window[memberIdx];
                            }
                        }
                        catch (e) { }
                    }
                }
            }
        }
        this.telemetryAdd(5);
        if ("undefined" != typeof window.__theFormPostData && Boolean(window.__theFormPostData)) {
            window.__theFormPostData = "";
        }
        if ("undefined" != typeof window.__theFormPostCollection && Boolean(window.__theFormPostCollection)) {
            window.__theFormPostCollection = [];
        }
        document.body.onclick = null;
        ajaxNavigate._clear();
        ajaxNavigate.add_navigate(AsyncDeltaManager_BodyOnHashChange);
        this._savedFormAction = null;
        if (null != data.formActionNode) {
            this._savedFormAction = RemoveMDSQueryParametersFromUrl(data.formActionNode.content);
        }
        this.telemetryAdd(6);
        ResetSodState();
        LoadSodByKey("init.js", null);
        if (Boolean(animationEngine)) {
            SPAnimation.g_AnimationEngine = animationEngine;
        }
        if (Boolean(telemetryObject)) {
            SPAnimation.g_TelemetryObject = telemetryObject;
        }
        if (Boolean(telemetryData)) {
            SPAnimation.g_LastAnimationTelemetryData = telemetryData;
        }
        if ("undefined" != typeof SPAnimation) {
            SPAnimation.Logging = typeof SPAnimation.Logging != "undefined" && Boolean(SPAnimation.Logging) || animationLogging;
        }
        this.telemetryAdd(7);
        data.dataItems = [];
        for (i = 0, l = data.dataItemNodes.length; i < l; i++) {
            node = data.dataItemNodes[i];
            data.dataItems[node.id] = node.content;
        }
        for (i = 0, l = data.dataItemJsonNodes.length; i < l; i++) {
            node = data.dataItemJsonNodes[i];
            ULS.AssertJS(ULSCat.msoulscat_WSS_DeltaManager, node.content != null && node.content != "", "Null or empty parameter to deserialize");
            try {
                data.dataItems[node.id] = SP_JSONParse(node.content);
            }
            catch (e) {
                ULS.SendExceptionJS(ULSCat.msoulscat_WSS_DeltaManager, e);
            }
        }
        var handler = (this._get_eventHandlerList()).getHandler("pageLoading");

        if (Boolean(handler)) {
            handler(this, this._getPageLoadingEventArgs(data));
        }
        DeltaManager_ScriptLoader.readLoadedScripts();
        Sys.Application.beginCreateComponents();
        var scriptLoader = DeltaManager_ScriptLoader.getInstance();

        this._queueScripts(scriptLoader, data.scriptBlockNodes, true, false);
        this._processingRequest = true;
        if (data.executor !== this._request) {
            return;
        }
        if (null != data.basePathNode) {
            var base;
            var baseElements = document.getElementsByTagName('base');
            var basePageURI = data.basePathNode.content;

            try {
                basePageURI = (new URI(basePageURI)).getString();
            }
            catch (e) { }
            if (0 == baseElements.length) {
                base = document.createElement('base');
                base.href = basePageURI;
                var head = (document.getElementsByTagName('head'))[0];

                head.appendChild(base);
            }
            else {
                base = baseElements[0];
                base.href = basePageURI;
            }
        }
        this._commitControls(data.updatePanelData, Boolean(data.asyncPostBackTimeoutNode) ? Number(data.asyncPostBackTimeoutNode.content) : null);
        if (null != this._savedFormAction) {
            this._form.action = this._savedFormAction;
        }
        this.telemetryAdd(8);
        var param = {
            "data": data,
            "correlationId": correlationId
        };

        this._downloadScriptAndStyleFilesInParallel(data.cssLinkNodes, scriptLoader._scriptsToLoad, bindArguments(function(myCssLinkNodes, myDelegate) {
            adm._registerCssLinks(myCssLinkNodes, myDelegate);
        }, data.cssLinkNodes, Function.createDelegate(adm, Function.createCallback(adm._cssLoadCompleted, param))));
        this._registerStyleBlock(data.styleBlockNodes);
    }
}
function AsyncDeltaManager$_cssLoadCompleted(param) {
    var data = param.data;

    this.telemetryAdd(9);
    var loadingElem = document.getElementById("temploadingnote");

    if (Boolean(loadingElem)) {
        var parentElem = loadingElem.parentNode;

        if (Boolean(parentElem))
            parentElem.removeChild(loadingElem);
    }
    if (!Boolean(this._ajaxDeltaList)) {
        this._ajaxDeltaList = new Object();
        for (var i = 0; i < g_AjaxDeltaList.length; i++) {
            this._ajaxDeltaList[g_AjaxDeltaList[i].id] = g_AjaxDeltaList[i];
        }
    }
    this.telemetryAdd(10);
    var ajaxDeltaList = [];

    for (var ajaxDeltaID in g_AjaxDeltaList) {
        ajaxDeltaList.push(g_AjaxDeltaList[ajaxDeltaID].id);
    }
    var l = data.updatePanelNodes.length;

    for (i = 0; i < l; i++) {
        var node = data.updatePanelNodes[i];
        var ajaxDelta = this._ajaxDeltaList[node.id];
        var errorMsg;
        var errorStr;

        if (!Boolean(ajaxDelta)) {
            errorStr = typeof Strings != 'undefined' ? String.format(Strings.STS.L_AsyncDeltaManager_MissingTarget, node.id) : node.id.toString();
            errorMsg = Error.invalidOperation(errorStr);
            this._endRequest(errorMsg, null, data.executor, data);
            return;
        }
        Array.remove(ajaxDeltaList, node.id);
        if (ajaxDelta.container) {
            var updatePanelElement = document.getElementById(node.id);

            if (!Boolean(updatePanelElement)) {
                errorStr = typeof Strings != 'undefined' ? String.format(Strings.STS.L_AsyncDeltaManager_MissingTarget, node.id) : node.id.toString();
                errorMsg = Error.invalidOperation(errorStr);
                this._endRequest(errorMsg, null, data.executor, data);
                return;
            }
            else {
                this._updatePanel(updatePanelElement, node.content);
            }
        }
        else {
            this._checkNonContainerContent(node.id, node.content, param.correlationId);
        }
    }
    if (ajaxDeltaList.length > 0) {
        for (i = 0, l = ajaxDeltaList.length; i < l; i++) {
            ajaxDelta = this._ajaxDeltaList[ajaxDeltaList[i]];
            if (ajaxDelta.container) {
                updatePanelElement = document.getElementById(ajaxDelta.id);
                if (Boolean(updatePanelElement)) {
                    this._updatePanel(updatePanelElement, "");
                }
            }
        }
    }
    if (browseris.ie8standard) {
        try {
            document.body.focus();
        }
        catch (e) { }
        ;
    }
    this.telemetryAdd(11);
    this._updateAllFormsWithMDSAttribute();
    this.telemetryAdd(14);
    var scriptLoader = DeltaManager_ScriptLoader.getInstance();

    scriptLoader.loadScripts(0, Function.createDelegate(this, Function.createCallback(this._scriptIncludesLoadComplete, data)), Function.createDelegate(this, Function.createCallback(this._scriptIncludesLoadFailed, data)), null);
    if (browseris.firefox) {
        var favlink = document.getElementById("favicon");

        if (favlink != null) {
            var favlinkParent = favlink.parentNode;

            favlink.parentNode.removeChild(favlink);
            favlinkParent.appendChild(favlink);
        }
    }
    this._prevData = data;
}
function loadScript(scriptReference, allScriptsLoadedCallback, scriptLoadFailedCallback) {
    var scriptLoader = DeltaManager_ScriptLoader.getInstance();

    scriptLoader.queueScriptReference(scriptReference);
    scriptLoader.loadScripts(0, allScriptsLoadedCallback, scriptLoadFailedCallback, null);
}
function AsyncDeltaManager$_onWindowUnload(evt) {
    this.dispose();
}
function AsyncDeltaManager$_pageLoaded(initialLoad, data) {
    var handler = (this._get_eventHandlerList()).getHandler("pageLoaded");

    if (Boolean(handler)) {
        handler(this, this._getPageLoadedEventArgs(initialLoad, data));
    }
    if (!initialLoad) {
        Sys.Application.raiseLoad();
    }
}
function AsyncDeltaManager$_pageLoadedInitialLoad(evt) {
    this._pageLoaded(true, null);
}
function DeltaData(version4, executor, updatePanelNodes, cssLinkNodes, hiddenFieldNodes, styleBlockNodes, arrayDeclarationNodes, scriptBlockNodes, scriptStartupNodes, expandoNodes, onSubmitNodes, dataItemNodes, dataItemJsonNodes, scriptDisposeNodes, asyncPostBackControlIDsNode, postBackControlIDsNode, updatePanelIDsNode, asyncPostBackTimeoutNode, childUpdatePanelIDsNode, panelsToRefreshNode, basePathNode, formActionNode, formEnctypeNode, skipProcessing) {
    this.version4 = version4;
    this.executor = executor;
    this.updatePanelNodes = updatePanelNodes;
    this.cssLinkNodes = cssLinkNodes;
    this.hiddenFieldNodes = hiddenFieldNodes;
    this.styleBlockNodes = styleBlockNodes;
    this.arrayDeclarationNodes = arrayDeclarationNodes;
    this.scriptBlockNodes = scriptBlockNodes;
    this.scriptStartupNodes = scriptStartupNodes;
    this.expandoNodes = expandoNodes;
    this.onSubmitNodes = onSubmitNodes;
    this.dataItemNodes = dataItemNodes;
    this.dataItemJsonNodes = dataItemJsonNodes;
    this.scriptDisposeNodes = scriptDisposeNodes;
    this.asyncPostBackControlIDsNode = asyncPostBackControlIDsNode;
    this.postBackControlIDsNode = postBackControlIDsNode;
    this.updatePanelIDsNode = updatePanelIDsNode;
    this.asyncPostBackTimeoutNode = asyncPostBackTimeoutNode;
    this.childUpdatePanelIDsNode = childUpdatePanelIDsNode;
    this.panelsToRefreshNode = panelsToRefreshNode;
    this.basePathNode = basePathNode;
    this.formActionNode = formActionNode;
    this.formEnctypeNode = formEnctypeNode;
    this.skipProcessing = skipProcessing;
}
function DeltaNode() {
}
function AsyncDeltaManager$_parseDelta(executor) {
    try {
        var reply = executor.responseText;
        var delimiterIndex, len, type, id, content;
        var replyIndex = 0;
        var parserErrorDetails = null;
        var deltaBlocks = [];
        var deltaBoundary = executor.getResponseHeader("deltaBoundary");
        var correlationId = executor.getResponseHeader("SPRequestGuid");

        if ("GET" == this._verb) {
            var xFrameOptions = executor.getResponseHeader("X-FRAME-OPTIONS");

            if (xFrameOptions == null || xFrameOptions.toLowerCase() !== "sameorigin")
                return null;
        }
        var deltaBoundaryLength = deltaBoundary.length;

        if (0 == deltaBoundaryLength)
            return null;
        while (replyIndex < reply.length) {
            delimiterIndex = reply.indexOf(deltaBoundary, replyIndex);
            if (delimiterIndex === -1) {
                break;
            }
            deltaBlocks.push(reply.substring(replyIndex, delimiterIndex));
            replyIndex = delimiterIndex + deltaBoundaryLength;
        }
        var delta = [];

        while (replyIndex < reply.length) {
            delimiterIndex = reply.indexOf('|', replyIndex);
            if (delimiterIndex === -1) {
                parserErrorDetails = this._findText(reply, replyIndex);
                break;
            }
            len = parseInt(reply.substring(replyIndex, delimiterIndex), 10);
            if (len % 1 !== 0) {
                parserErrorDetails = this._findText(reply, replyIndex);
                break;
            }
            replyIndex = delimiterIndex + 1;
            delimiterIndex = reply.indexOf('|', replyIndex);
            if (delimiterIndex === -1) {
                parserErrorDetails = this._findText(reply, replyIndex);
                break;
            }
            type = reply.substring(replyIndex, delimiterIndex);
            replyIndex = delimiterIndex + 1;
            delimiterIndex = reply.indexOf('|', replyIndex);
            if (delimiterIndex === -1) {
                parserErrorDetails = this._findText(reply, replyIndex);
                break;
            }
            id = reply.substring(replyIndex, delimiterIndex);
            replyIndex = delimiterIndex + 1;
            if (replyIndex + len >= reply.length) {
                parserErrorDetails = this._findText(reply, reply.length);
                break;
            }
            content = reply.substr(replyIndex, len);
            replyIndex += len;
            if (reply.charAt(replyIndex) !== '|') {
                parserErrorDetails = this._findText(reply, replyIndex);
                break;
            }
            replyIndex++;
            Array.add(delta, {
                type: type,
                id: id,
                content: content
            });
        }
        if (Boolean(parserErrorDetails)) {
            return null;
        }
        var updatePanelNodes = [];
        var cssLinkNodes = [];
        var hiddenFieldNodes = [];
        var styleBlockNodes = [];
        var arrayDeclarationNodes = [];
        var scriptBlockNodes = [];
        var scriptStartupNodes = [];
        var expandoNodes = [];
        var onSubmitNodes = [];
        var dataItemNodes = [];
        var dataItemJsonNodes = [];
        var scriptDisposeNodes = [];
        var asyncPostBackControlIDsNode, postBackControlIDsNode, updatePanelIDsNode, asyncPostBackTimeoutNode, childUpdatePanelIDsNode, panelsToRefreshNode, basePathNode, formActionNode, formEnctypeNode, versionNode;
        var skipProcessing = false;
        var stopLoop = false;
        var l = delta.length;

        for (var i = 0; i < l && !stopLoop; i++) {
            var deltaNode = delta[i];

            switch (deltaNode.type) {
            case "#":
                versionNode = deltaNode;
                break;
            case "controlDelta":
                var controlDeltaId = parseInt(deltaNode.content, 10);
                var rendering = deltaNode.content = deltaBlocks[controlDeltaId];
                var startScript = rendering.search(RegExp("<\s*[Ss][Cc][Rr][Ii][Pp][Tt]"));

                if (-1 != startScript) {
                    var stopScript = rendering.indexOf('>', startScript);
                    var script = rendering.substr(startScript, stopScript - startScript);

                    if (-1 != script.search(RegExp("[Jj][Aa][Vv][Aa][Ss][Cc][Rr][Ii][Pp][Tt]")) || -1 != script.search(RegExp("[Vv][Bb][Ss][Cc][Rr][Ii][Pp][Tt]"))) {
                        ULSUploadReport("MDSFailover: script in markup", correlationId, ajaxNavigate.get_href());
                        this._endRequest(this._createParserError(Strings.STS.L_AsyncDeltaManager_NonScriptManager), null, executor, null);
                        return null;
                    }
                }
                Array.add(updatePanelNodes, deltaNode);
                break;
            case "cssLink":
                Array.add(cssLinkNodes, deltaNode);
                break;
            case "hiddenField":
                Array.add(hiddenFieldNodes, deltaNode);
                break;
            case "styleBlock":
                controlDeltaId = parseInt(deltaNode.content, 10);
                deltaNode.content = deltaBlocks[controlDeltaId];
                Array.add(styleBlockNodes, deltaNode);
                break;
            case "arrayDeclaration":
                controlDeltaId = parseInt(deltaNode.content, 10);
                deltaNode.content = deltaBlocks[controlDeltaId];
                Array.add(arrayDeclarationNodes, deltaNode);
                break;
            case "dynamicScriptBlock":
                deltaNode.type = "scriptBlock";
                deltaNode.id = "ScriptContentNoTags";
            case "scriptBlock":
                if (deltaNode.id != "ScriptPath") {
                    controlDeltaId = parseInt(deltaNode.content, 10);
                    deltaNode.content = deltaBlocks[controlDeltaId];
                }
                Array.add(scriptBlockNodes, deltaNode);
                break;
            case "scriptStartupBlock":
                controlDeltaId = parseInt(deltaNode.content, 10);
                deltaNode.content = deltaBlocks[controlDeltaId];
                Array.add(scriptStartupNodes, deltaNode);
                break;
            case "expando":
                controlDeltaId = parseInt(deltaNode.content, 10);
                deltaNode.content = deltaBlocks[controlDeltaId];
                Array.add(expandoNodes, deltaNode);
                break;
            case "onSubmit":
                controlDeltaId = parseInt(deltaNode.content, 10);
                deltaNode.content = deltaBlocks[controlDeltaId];
                Array.add(onSubmitNodes, deltaNode);
                break;
            case "asyncPostBackControlIDs":
                asyncPostBackControlIDsNode = deltaNode;
                break;
            case "postBackControlIDs":
                postBackControlIDsNode = deltaNode;
                break;
            case "updatePanelIDs":
                updatePanelIDsNode = deltaNode;
                break;
            case "asyncPostBackTimeout":
                asyncPostBackTimeoutNode = deltaNode;
                break;
            case "childUpdatePanelIDs":
                childUpdatePanelIDsNode = deltaNode;
                break;
            case "panelsToRefreshIDs":
                panelsToRefreshNode = deltaNode;
                break;
            case "basePath":
                basePathNode = deltaNode;
                break;
            case "formAction":
                formActionNode = deltaNode;
                break;
            case "formEnctype":
                formEnctypeNode = deltaNode;
                break;
            case "dataItem":
                Array.add(dataItemNodes, deltaNode);
                break;
            case "dataItemJson":
                Array.add(dataItemJsonNodes, deltaNode);
                break;
            case "scriptDispose":
                Array.add(scriptDisposeNodes, deltaNode);
                break;
            case "pageStartRedirect":
                skipProcessing = true;
                if (CanonicalUrl(deltaNode.content) == CanonicalUrl(this._startPageUrl) || this._firstRender) {
                    window.location.replace(RemoveMDSQueryParametersFromUrl(this._pendingRequestUrlFull));
                }
                else {
                    window.location.href = deltaNode.content + "#" + GetMDSLocationFromUrl(deltaNode.content, this._pendingRequestUrlFull);
                }
                stopLoop = true;
                break;
            case "pageRedirect":
                skipProcessing = true;
                var redirectTo = RemoveMDSQueryParametersFromUrl(deltaNode.content);

                redirectTo = GetAbsoluteUrl(redirectTo);
                var targetURI = new URI(redirectTo);

                if (targetURI.getScheme() != this._startURI.getScheme() || targetURI.getAuthority() != this._startURI.getAuthority()) {
                    window.location.href = redirectTo;
                }
                else {
                    redirectTo = GetServerRelativeUrlFromURL(redirectTo);
                    this._currentUrl = null;
                    ajaxNavigate.update(redirectTo);
                }
                stopLoop = true;
                break;
            case "error":
                this._endRequest(this._createServerError(Number.parseInvariant(deltaNode.id), deltaNode.content), null, executor, null);
                return null;
            case "pageTitle":
                document.title = deltaNode.content;
                break;
            case "focus":
                this._controlIDToFocus = deltaNode.content;
                break;
            case "fileMismatch":
            case "versionMismatch":
                if (Boolean(window.sessionStorage) && (!Boolean(window.sessionStorage.MDSMasterPageMismatch) || window.sessionStorage.MDSMasterPageMismatch == 0)) {
                    TrySetSessionStorage("MDSMasterPageMismatch", 1);
                    skipProcessing = true;
                    this._pendingRequestUrl = null;
                    this._reloadStartPage();
                }
                else {
                    TrySetSessionStorage("MDSMasterPageMismatch", 0);
                    return null;
                }
                break;
            case "invalidMaster":
            case "fullPageLoadRequired":
                return null;
            default:
                this._endRequest(this._createParserError(String.format(Strings.STS.L_AsyncDeltaManager_UnknownToken, deltaNode.type)), null, executor, null);
                return null;
            }
        }
    }
    catch (e) {
        return null;
    }
    return new DeltaData(Boolean(versionNode) ? parseFloat(versionNode.content) >= 4 : false, executor, updatePanelNodes, cssLinkNodes, hiddenFieldNodes, styleBlockNodes, arrayDeclarationNodes, scriptBlockNodes, scriptStartupNodes, expandoNodes, onSubmitNodes, dataItemNodes, dataItemJsonNodes, scriptDisposeNodes, asyncPostBackControlIDsNode, postBackControlIDsNode, updatePanelIDsNode, asyncPostBackTimeoutNode, childUpdatePanelIDsNode, panelsToRefreshNode, basePathNode, formActionNode, formEnctypeNode, skipProcessing);
}
function CanonicalUrl(urlIn) {
    var uIndexQ = urlIn.indexOf('?');
    var uIndexH = urlIn.indexOf('#');
    var uIndex = uIndexQ > -1 && uIndexH > -1 ? Math.min(uIndexQ, uIndexH) : Math.max(uIndexQ, uIndexH);
    var urlExtra = "";

    if (uIndex != -1) {
        urlExtra = urlIn.substr(uIndex);
        urlIn = urlIn.substr(0, uIndex);
    }
    var urlOut = (new URI(urlIn)).getString() + urlExtra;

    return urlOut;
}
function AsyncDeltaManager$_queueScripts(scriptLoader, scriptBlockNodes, queueIncludes, queueBlocks) {
    for (var i = 0, l = scriptBlockNodes.length; i < l; i++) {
        var scriptBlockType = scriptBlockNodes[i].id;

        switch (scriptBlockType) {
        case "ScriptContentNoTags":
            if (!queueBlocks) {
                continue;
            }
            scriptLoader.queueScriptBlock(scriptBlockNodes[i].content);
            break;
        case "ScriptContentWithTags":
            var scriptTagAttributes;

            eval("scriptTagAttributes = " + scriptBlockNodes[i].content);
            if (Boolean(scriptTagAttributes.src)) {
                if (!queueIncludes) {
                    continue;
                }
            }
            else if (!queueBlocks) {
                continue;
            }
            scriptLoader.queueCustomScriptTag(scriptTagAttributes);
            break;
        case "ScriptPath":
            if (!queueIncludes) {
                continue;
            }
            scriptLoader.queueScriptReference(scriptBlockNodes[i].content);
            break;
        }
    }
}
function AsyncDeltaManager$_validateQueueScripts(scriptBlockNodes) {
    for (var i = 0, l = scriptBlockNodes.length; i < l; i++) {
        if (scriptBlockNodes[i].id == 'ScriptPath' && DeltaManager_ScriptLoader.isScriptMismatch(scriptBlockNodes[i].content)) {
            this._reloadStartPage();
        }
    }
    for (var scriptKey in _v_dictSod) {
        var currScript = _v_dictSod[scriptKey];

        if (typeof currScript != 'undefined' && currScript != null && DeltaManager_ScriptLoader.isScriptMismatch(currScript.url)) {
            this._reloadStartPage();
        }
    }
}
function AsyncDeltaManager$_registerDisposeScript(panelID, disposeScript) {
    if (!this._scriptDisposes[panelID]) {
        this._scriptDisposes[panelID] = [disposeScript];
    }
    else {
        Array.add(this._scriptDisposes[panelID], disposeScript);
    }
}
function AsyncDeltaManager$_scriptIncludesLoadComplete(scriptLoader, data) {
    this.telemetryAdd(15);
    if (data.executor !== this._request) {
        return;
    }
    if (null != data.formEnctypeNode && null != data.formEnctypeNode.content) {
        this._form.method = "POST";
        this._form.enctype = data.formEnctypeNode.content;
    }
    else {
        this._form.method = "POST";
        this._form.removeAttribute('enctype');
    }
    var i, l, node;
    var scriptDisposeNodesLength = data.scriptDisposeNodes.length;

    for (i = 0, l = scriptDisposeNodesLength; i < l; i++) {
        node = data.scriptDisposeNodes[i];
        this._registerDisposeScript(node.id, node.content);
    }
    var transientFieldsLength = this._transientFields.length;

    for (i = 0, l = transientFieldsLength; i < l; i++) {
        var field = document.getElementById(this._transientFields[i]);

        if (Boolean(field)) {
            var toRemove = field._isContained ? field.parentNode : field;

            toRemove.parentNode.removeChild(toRemove);
        }
    }
    var container = this._findHiddenFieldContainerInForm(this._form);

    for (i = 0, l = data.hiddenFieldNodes.length; i < l; i++) {
        node = data.hiddenFieldNodes[i];
        this._createHiddenField(container, node.id, node.content);
    }
    if (Boolean(data.scriptsFailed)) {
        this._finished = true;
        throw DeltaManager_ScriptLoader._errorScriptLoadFailed(data.scriptsFailed.src);
    }
    this._queueScripts(scriptLoader, data.scriptBlockNodes, false, true);
    var arrayScript = '';

    for (i = 0, l = data.arrayDeclarationNodes.length; i < l; i++) {
        node = data.arrayDeclarationNodes[i];
        if (typeof node.content == "string" && node.content == "")
            arrayScript += "asyncDeltaManager._addArrayElement('" + node.id + "', '');\r\n";
        else
            arrayScript += "asyncDeltaManager._addArrayElement('" + node.id + "', " + node.content + ");\r\n";
    }
    var expandoScript = '';

    for (i = 0, l = data.expandoNodes.length; i < l; i++) {
        node = data.expandoNodes[i];
        expandoScript += node.id + " = " + node.content + "\r\n";
    }
    if (0 != arrayScript.length) {
        scriptLoader.queueScriptBlock(arrayScript);
    }
    if (0 != expandoScript.length) {
        scriptLoader.queueScriptBlock(expandoScript);
    }
    this._queueScripts(scriptLoader, data.scriptStartupNodes, true, true);
    var onSubmitStatementScript = '';

    for (i = 0, l = data.onSubmitNodes.length; i < l; i++) {
        if (i === 0) {
            onSubmitStatementScript = 'Array.add(asyncDeltaManager._onSubmitStatements, function() {\r\n';
        }
        onSubmitStatementScript += data.onSubmitNodes[i].content + "\r\n";
    }
    if (0 != onSubmitStatementScript.length) {
        onSubmitStatementScript += "\r\nreturn true;\r\n});\r\n";
        scriptLoader.queueScriptBlock(onSubmitStatementScript);
    }
    scriptLoader.loadScripts(0, Function.createDelegate(this, Function.createCallback(this._scriptsLoadComplete, data)), null, null);
}
function AsyncDeltaManager$_findHiddenFieldContainerInForm(form) {
    var container = null;
    var children = form.children;
    var numChildren = form.children.length;

    for (var i = 0; i < numChildren; i++) {
        var child = children[i];

        if (child.className == "aspNetHidden") {
            container = child;
            break;
        }
    }
    return container;
}
function DeltaManager_ScriptsFailed(src, multipleCallbacks) {
    this.src = src;
    this.multipleCallbacks = multipleCallbacks;
}
function AsyncDeltaManager$_scriptIncludesLoadFailed(scriptLoader, scriptElement, data, multipleCallbacks) {
    data.scriptsFailed = new DeltaManager_ScriptsFailed(scriptElement.src, multipleCallbacks);
    this._scriptIncludesLoadComplete(scriptLoader, data);
}
function AsyncDeltaManager$_scriptsLoadComplete(scriptLoader, data) {
    var response = data.executor;

    Sys.Application.endCreateComponents();
    try {
        var pageManager = SP.Ribbon.PageManager.get_instance();

        if (pageManager) {
            (pageManager.get_commandDispatcher()).executeCommand('appstatechanged', null);
        }
    }
    catch (e) { }
    this._pageLoaded(false, data);
    this._endRequest(null, null, response, data);
    if (Boolean(this._controlIDToFocus)) {
        DeltaManager_AutoFocus(this._controlIDToFocus);
    }
    ajaxNavigate._raiseNavigate(this);
    this._finished = true;
    this.telemetryAdd(15);
    var correlationId = response.getResponseHeader("SPRequestGuid");

    this.telemetrySpew(correlationId);
}
function AsyncDeltaManager$_uniqueIDToClientID(uniqueID) {
    return uniqueID.replace(/\$/g, '_');
}
function AsyncDeltaManager$_downloadScriptAndStyleFilesInParallel(cssLinkNodes, scriptNodes, callback) {
    var scriptCount = Boolean(scriptNodes) ? scriptNodes.length : 0;
    var styleCount = Boolean(cssLinkNodes) ? cssLinkNodes.length : 0;
    var fileCount = scriptCount + styleCount;
    var doParallel = fileCount > 1;

    for (var i = 0; doParallel && i < scriptCount; i++) {
        if (!canOptimizeDownload(scriptNodes[i])) {
            doParallel = false;
        }
    }
    if (doParallel) {
        try {
            scriptLoadStatus = [];
            for (var j = 0; j < scriptCount; j++) {
                var nextScript = scriptNodes[j];

                if (!(typeof nextScript.src === 'string')) {
                    continue;
                }
                scriptLoadStatus[nextScript.src] = MdsScripts.requested;
                requestResourceFile(scriptNodes, cssLinkNodes, nextScript.src, callback);
            }
            for (var k = 0; k < styleCount; k++) {
                var nextStyle = cssLinkNodes[k];

                scriptLoadStatus[nextStyle.content] = MdsScripts.requested;
                requestResourceFile(scriptNodes, cssLinkNodes, nextStyle.content, callback);
            }
        }
        catch (e) {
            callback();
        }
    }
    else {
        callback();
    }
}
function requestResourceFile(scriptNodes, cssLinkNodes, src, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', src, true);
    xhr.onreadystatechange = bindArguments(function(mySrc, myXhr, myScripts, myStyles, myCallback) {
        if (myXhr.readyState == 4) {
            var instance = DeltaManager_ScriptLoader.getInstance();

            scriptLoadStatus[mySrc] = MdsScripts.downloaded;
            instance._ensureAllAvailableFiles(myScripts, myStyles, myCallback);
        }
    }, src, xhr, scriptNodes, cssLinkNodes, callback);
    xhr.send(null);
}
function DeltaManager$_ScriptLoader$_ensureAllAvailableFiles(scriptNodes, cssLinkNodes, callback) {
    var scriptCount = Boolean(scriptNodes) ? scriptNodes.length : 0;
    var styleCount = Boolean(cssLinkNodes) ? cssLinkNodes.length : 0;

    for (var i = 0; i < scriptCount; i++) {
        var nextScript = scriptNodes[i];

        if (!(typeof nextScript.src === 'string')) {
            continue;
        }
        if (scriptLoadStatus[nextScript.src] == MdsScripts.requested) {
            return;
        }
    }
    for (var j = 0; j < styleCount; j++) {
        var nextStyle = cssLinkNodes[j];

        if (scriptLoadStatus[nextStyle.content] == MdsScripts.requested) {
            return;
        }
    }
    callback();
}
function AsyncDeltaManager$_registerLinkCallback(aLink) {
    var adm = asyncDeltaManager;

    adm._registerCssLinkCallback(aLink);
}
function asyncDeltaManager$_registerCssLinkCallback(aLink) {
    this._registerElementForCleanup(aLink);
}
function AsyncDeltaManager$_registerCssLinks(cssLinkNodes, loadCompletedCallback) {
    var head = (document.getElementsByTagName('head'))[0];
    var cssLinkNodesLength = cssLinkNodes.length;

    if (cssLinkNodesLength > 0) {
        var totalLinksCount = cssLinkNodesLength;
        var registeredLinksCount = 0;
        var loadCompletedCallbackFull = function() {
            registeredLinksCount--;
            if (totalLinksCount == 0 && registeredLinksCount <= 0)
                loadCompletedCallback();
        };
        var l, i;

        for (i = 0, l = cssLinkNodesLength; i < l; i++) {
            var node = cssLinkNodes[i];
            var linkReg = _registerCssLink(node.content, head, AsyncDeltaManager$_registerLinkCallback, loadCompletedCallbackFull);

            if (linkReg == -1) {
                this._reloadStartPage();
            }
            else {
                totalLinksCount--;
                if (linkReg == 1)
                    registeredLinksCount++;
            }
        }
        if (totalLinksCount == 0 && registeredLinksCount <= 0)
            loadCompletedCallback();
    }
    else {
        loadCompletedCallback();
    }
}
function AsyncDeltaManager$_registerStyleBlock(styleBlockNodes) {
    var head = (document.getElementsByTagName('head'))[0];
    var styleBlockNodesLength = styleBlockNodes.length;
    var l, i;

    for (i = 0, l = styleBlockNodesLength; i < l; i++) {
        var node = styleBlockNodes[i];
        var fSuccess = false;
        var aStyle = document.createElement("style");

        aStyle.type = 'text/css';
        aStyle.id = node.id;
        if ('undefined' != typeof aStyle.styleSheet && 'undefined' != typeof aStyle.styleSheet.cssText) {
            try {
                aStyle.styleSheet.cssText = node.content;
                fSuccess = true;
            }
            catch (x) { }
        }
        else {
            try {
                var cssTextNode = document.createTextNode(node.content);

                aStyle.appendChild(cssTextNode);
                fSuccess = true;
            }
            catch (x) { }
        }
        if (!fSuccess) {
            try {
                aStyle.innerHTML = node.content;
                fSuccess = true;
            }
            catch (x) { }
        }
        if (!fSuccess) {
            try {
                aStyle.innerText = node.content;
                fSuccess = true;
            }
            catch (x) { }
        }
        if (fSuccess) {
            head.appendChild(aStyle);
            this._registerElementForCleanup(aStyle);
        }
    }
}
function AsyncDeltaManager$_updateAllFormsWithMDSAttribute() {
    var len = document.forms.length;

    for (var i = 0; i < len; i++) {
        var form = document.forms[i];

        if (typeof form["__MINIMALDOWNLOAD"] == 'undefined' || form["__MINIMALDOWNLOAD"] == null || typeof form["__MINIMALDOWNLOAD"].value != 'undefined' && form["__MINIMALDOWNLOAD"].value != "1") {
            var input = document.createElement("input");

            input.setAttribute("type", "hidden");
            input.setAttribute("name", "__MINIMALDOWNLOAD");
            input.setAttribute("value", "1");
            var container = this._findHiddenFieldContainerInForm(form);

            if (!Boolean(container))
                form.appendChild(input);
            else
                container.appendChild(input);
        }
    }
}
function AsyncDeltaManager$_updatePanel(updatePanelElement, rendering) {
    for (var updatePanelID in this._scriptDisposes) {
        if (this._elementContains(updatePanelElement, document.getElementById(updatePanelID))) {
            var disposeScripts = this._scriptDisposes[updatePanelID];

            for (var i = 0, l = disposeScripts.length; i < l; i++) {
                eval(disposeScripts[i]);
            }
            delete this._scriptDisposes[updatePanelID];
        }
    }
    updatePanelElement.innerHTML = rendering;
}
var g_AjaxDeltaList;

function AjaxDeltaEntry() {
}
function AsyncDeltaManager$_showErrorPage(error, errorPage) {
    if (typeof g_AjaxDeltaList != undefined) {
        for (var ajaxDeltaID in g_AjaxDeltaList) {
            var ajaxDelta = g_AjaxDeltaList[ajaxDeltaID];

            if (Boolean(ajaxDelta.container)) {
                var elemAjaxDelta = document.getElementById(ajaxDelta.id);

                if (null != elemAjaxDelta) {
                    this._updatePanel(elemAjaxDelta, "");
                }
            }
        }
    }
    if (typeof phMain != 'undefined' && phMain != '') {
        if (!Boolean(errorPage)) {
            this._updatePanel(document.getElementById(phMain), error.message);
        }
        else {
            var hostdiv = document.createElement("div");
            var targetFrameId = "ErrorFrame" + ((new Date()).getTime()).toString();

            hostdiv.innerHTML = "<iframe id=\"" + targetFrameId + "\" name=\"" + targetFrameId + "\" width=\"100%\" height=\"1000\" />";
            var errorFrame = hostdiv.childNodes[0];

            window[targetFrameId] = function() {
                var doc = errorFrame.contentWindow ? errorFrame.contentWindow.document : errorFrame.contentDocument ? errorFrame.contentDocument : errorFrame.document;

                doc.open();
                doc.write(errorPage);
                AttachEvent('click', function(evt) {
                    var srcElem;

                    if (evt.target != null)
                        srcElem = evt.target;
                    else
                        srcElem = evt.srcElement;
                    if (Boolean(srcElem) && 'undefined' != typeof srcElem.href && Boolean(srcElem.href)) {
                        if ('undefined' != typeof parent.STSNavigate) {
                            parent.STSNavigate.call(parent, srcElem.href);
                        }
                        else {
                            parent.location.href = srcElem.href;
                        }
                        if ("undefined" != typeof evt.preventDefault) {
                            evt.preventDefault();
                        }
                        return false;
                    }
                    else {
                        return;
                    }
                }, doc.body);
            };
            var frameScript = "parent.FrameHttpRequest$FrameCallback(\"" + targetFrameId + "\");";

            errorFrame.src = "javascript:document.write('<body><script type=\"text/javascript\">" + frameScript + "</script></body>');";
            (document.getElementById(phMain)).appendChild(errorFrame);
        }
    }
    else {
        throw error;
    }
}
function AsyncDeltaManager$_validPosition(position) {
    return typeof position !== "undefined" && position !== null && position !== 0;
}
function AsyncDeltaManager$HandleHashChange(sender, args) {
    if (sender != this) {
        var anchorName = args["anchorTag"];

        this._navigate(AjaxNavigate$_UrlFromHashBag(args), anchorName);
    }
}
function AsyncDeltaManager$_navigate(url, anchorName, bUpdatehash) {
    if (IsFailoverQuery(GetQuery(url)) || IsFailoverTarget(GetTargetHandler(url))) {
        if (this._firstRender) {
            window.location.replace(GetAbsoluteUrl(url));
        }
        else {
            window.location.href = GetAbsoluteUrl(url);
        }
        return;
    }
    var bSkipUrlProcessing = "undefined" == typeof url || url.length > 0 && url[0] != "/";
    var strippedUrl;

    if (!bSkipUrlProcessing) {
        strippedUrl = (url.split("#"))[0];
        bSkipUrlProcessing = bSkipUrlProcessing || EqualAsUrls(strippedUrl, this._currentUrl) || EqualAsUrls(strippedUrl, this._pendingRequestUrl);
    }
    var bSkipAnchorProcessing = "undefined" == typeof anchorName || anchorName == null || anchorName == "" || anchorName == this._currentAnchor && bSkipUrlProcessing || anchorName == this._pendingLocalAnchor;

    if (bSkipUrlProcessing && bSkipAnchorProcessing)
        return;
    if (bSkipUrlProcessing) {
        this._handleLocalAnchor(anchorName);
        ajaxNavigate.update(null, null, false, anchorName);
    }
    else {
        this._currentAnchor = null;
        var pageUrl = window.location.protocol + "//" + window.location.hostname;

        if (window.location.port != null && window.location.port.length > 0) {
            pageUrl += ":" + window.location.port;
        }
        pageUrl += strippedUrl;
        pageUrl = RemoveMDSQueryParametersFromUrl(pageUrl);
        var queryIndex = pageUrl.indexOf('?');

        if (queryIndex !== -1) {
            pageUrl += "&";
        }
        else {
            pageUrl += "?";
        }
        pageUrl += "AjaxDelta=1";
        if (typeof g_mdsReady != 'undefined' && !g_mdsReady) {
            g_mdsReady = true;
        }
        else {
            var contentCached = false;

            if (typeof isStartPlt1 != "undefined" && isStartPlt1 && typeof startDate != "undefined") {
                pageUrl += "&isStartPlt1=" + startDate;
                isStartPlt1 = false;
                contentCached = true;
            }
            if (RaiseFakeEvent("beforeunload", window, true)) {
                return;
            }
            var _this = this;

            this._retrieveDelta(pageUrl, "GET", null, null, contentCached, function() {
                var aLocation;

                if (EqualAsUrls(_this._pendingRequestUrl, strippedUrl)) {
                    _this._pendingRequestUrl = null;
                    _this._pendingRequestUrlFull = null;
                }
                _this._currentUrl = strippedUrl;
                if (bUpdatehash) {
                    aLocation = GetMDSLocationFromUrl(_this._startPageUrl, url);
                    if (null != aLocation) {
                        window.location.hash = aLocation;
                    }
                    else {
                        _this._failoverToUrl(url);
                    }
                }
                else {
                    var hash = window.location.hash;

                    if (hash == "" || hash == "#") {
                        window.location.replace(_this._startPageUrl + "#/");
                    }
                    else if (null != hash && hash.length >= 3 && hash[1] == '/' && hash[2] == '/') {
                        aLocation = GetMDSLocationFromUrl(_this._startPageUrl, url);
                        if (null != aLocation) {
                            window.location.replace(_this._startPageUrl + "#" + aLocation);
                        }
                        else {
                            _this._failoverToUrl(url);
                        }
                    }
                }
                if (!bSkipAnchorProcessing)
                    _this._pendingLocalAnchor = anchorName;
            });
            this._pendingRequestUrl = strippedUrl;
        }
        if (!Boolean(bUpdatehash)) {
            this._pendingRequestUrlFull = AjaxNavigate$_getAjaxLocationWindow();
        }
        else {
            this._pendingRequestUrlFull = url;
        }
    }
}
function AsyncDeltaManager$_handleLocalAnchor(anchorName) {
    var anchorElement = document.getElementById(anchorName);

    if (anchorElement == null) {
        var elements = document.getElementsByName(anchorName);

        if (elements != null && elements.length > 0)
            anchorElement = elements[0];
    }
    if (anchorElement != null) {
        anchorElement.scrollIntoView(true);
        anchorElement.focus();
    }
    this._currentAnchor = anchorName;
    if (this._pendingLocalAnchor == anchorName)
        this._pendingLocalAnchor = null;
}
function AsyncDeltaManager$SetCurrentUrl(value) {
    this._currentUrl = value;
}
function AsyncDeltaManager_BodyOnHashChange(sender, args) {
    var adm = asyncDeltaManager;

    if (g_MinimalDownload && null != adm) {
        adm.HandleHashChange(sender, args);
    }
}
function OnDocumentLoad() {
    var adm = asyncDeltaManager;

    adm._initializeInternal((document.getElementsByTagName('form'))[0]);
    if (browseris.ie8standard) {
        var hashChangeOnLoad = function() {
            Sys.UI.DomEvent.removeHandler(window, "load", hashChangeOnLoad);
            _spBodyOnHashChange();
        };

        Sys.UI.DomEvent.addHandler(window, "load", hashChangeOnLoad);
    }
    else {
        _spBodyOnHashChange();
    }
    ;
}
var g_MinimalDownload;
var g_MDSStartTime;
var g_WaitText;
var g_WebServerRelativeUrl;

function SPDocumentWrite(st) {
    var fRet = false;

    if ('undefined' != typeof _spElementDocumentWrite && Boolean(_spElementDocumentWrite)) {
        var host = document.getElementById(_spElementDocumentWrite);

        if (Boolean(host)) {
            var hostDiv = document.createElement("div");

            hostDiv.innerHTML = st;
            host = host.parentNode;
            while (hostDiv.childNodes.length > 0) {
                var node = hostDiv.childNodes[0];

                host.appendChild(node);
            }
            fRet = true;
        }
    }
    return fRet;
}
var g_clientIdDeltaPlaceHolderMain;
var g_clientIdDeltaPlaceHolderPageTitleInTitleArea;
var g_fMDSAnimationEnabled;
var g_MDSAnimationRefCount;

function BeginTransitionAnimation() {
    g_fMDSAnimationEnabled = SPAnimation.Settings.IsAnimationEnabled();
    if (!g_fMDSAnimationEnabled)
        return;
    var mainContent = document.getElementById(g_clientIdDeltaPlaceHolderMain);

    if (mainContent != null) {
        var cloneContent = SPAnimationUtility.BasicAnimator.CloneElement(mainContent, true, false, false, true);
    }
    var actualTitle = document.getElementById(g_clientIdDeltaPlaceHolderPageTitleInTitleArea);

    SPAnimationUtility.BasicAnimator.CloneElement(actualTitle, true, false, true, true, false, browseris.firefox && fRightToLeft);
}
function RemoveAnimationClones() {
    if (!g_fMDSAnimationEnabled)
        return;
    HideClone(g_clientIdDeltaPlaceHolderPageTitleInTitleArea);
    HideClone(g_clientIdDeltaPlaceHolderMain);
}
function EndTransitionAnimation(task, finishFunc) {
    task.telemetryAdd(2);
    if (!g_fMDSAnimationEnabled) {
        if (finishFunc != null)
            finishFunc();
        return;
    }
    var title = document.getElementById(g_clientIdDeltaPlaceHolderPageTitleInTitleArea);

    if (title.style.visibility == "hidden")
        SPAnimationUtility.BasicAnimator.FadeIn(title, null, null);
    var mainContent = document.getElementById(g_clientIdDeltaPlaceHolderMain);

    if (mainContent.style.visibility == "hidden")
        SPAnimationUtility.BasicAnimator.FadeIn(mainContent, function() {
            if (finishFunc != null)
                finishFunc();
        }, null);
}
function HideClone(origID) {
    var oldElement = document.getElementById(origID + "_clone");

    if (oldElement != null && oldElement.parentNode != null)
        oldElement.parentNode.removeChild(oldElement);
}
function DeltaManager_FindFirstFocusableChild(control) {
    if (!Boolean(control) || !Boolean(control.tagName)) {
        return null;
    }
    var tagName = control.tagName.toLowerCase();

    if (tagName == "undefined") {
        return null;
    }
    var children = control.childNodes;

    if (Boolean(children)) {
        var cLen = children.length;

        for (var i = 0; i < cLen; i++) {
            try {
                if (DeltaManager_CanFocus(children[i])) {
                    return children[i];
                }
                else {
                    var focused = DeltaManager_FindFirstFocusableChild(children[i]);

                    if (DeltaManager_CanFocus(focused)) {
                        return focused;
                    }
                }
            }
            catch (e) { }
        }
    }
    return null;
}
function DeltaManager_AutoFocus(focusId) {
    var targetControl = document.getElementById(focusId);
    var focused = targetControl;

    if (Boolean(targetControl) && !DeltaManager_CanFocus(targetControl)) {
        focused = DeltaManager_FindFirstFocusableChild(targetControl);
    }
    if (Boolean(focused)) {
        try {
            focused.focus();
            focused.scrollIntoView(false);
        }
        catch (e) { }
    }
}
function DeltaManager_CanFocus(element) {
    if (!Boolean(element) || !Boolean(element.tagName))
        return false;
    var tagName = element.tagName.toLowerCase();

    return !element.disabled && (!Boolean(element.type) || element.type.toLowerCase() != "hidden") && DeltaManager_IsFocusableTag(tagName) && DeltaManager_IsInVisibleContainer(element);
}
function DeltaManager_IsFocusableTag(tagName) {
    return tagName == "input" || tagName == "textarea" || tagName == "select" || tagName == "button" || tagName == "a";
}
function DeltaManager_IsInVisibleContainer(ctrl) {
    var current = ctrl;

    while (typeof current != "undefined" && current != null) {
        if (current.disabled || typeof current.style != "undefined" && (typeof current.style.display != "undefined" && current.style.display == "none" || typeof current.style.visibility != "undefined" && current.style.visibility == "hidden")) {
            return false;
        }
        if (typeof current.parentNode != "undefined" && current.parentNode != null && current.parentNode != current && current.parentNode.tagName.toLowerCase() != "body") {
            current = current.parentNode;
        }
        else {
            return true;
        }
    }
    return true;
}
function DeltaManager_ScriptLoaderTask(scriptElement, completedCallback) {
    this._scriptElement = scriptElement;
    this._completedCallback = completedCallback;
}
function DeltaManager_ScriptLoaderTask$get_scriptElement() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    return this._scriptElement;
}
function DeltaManager_ScriptLoaderTask$dispose() {
    if (this._disposed) {
        return;
    }
    this._disposed = true;
    this._removeScriptElementHandlers();
    this._scriptElement = null;
}
function DeltaManager_ScriptLoaderTask$execute() {
    if (arguments.length !== 0)
        throw Error.parameterCount();
    this._addScriptElementHandlers();
    var headElements = document.getElementsByTagName('head');

    if (headElements.length === 0) {
        throw new Error.invalidOperation(Sys.Res.scriptLoadFailedNoHead);
    }
    else {
        headElements[0].appendChild(this._scriptElement);
    }
}
function DeltaManager_ScriptLoaderTask$_addScriptElementHandlers() {
    this._scriptLoadDelegate = Function.createDelegate(this, this._scriptLoadHandler);
    if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
        this._scriptElement.readyState = 'loaded';
        $addHandler(this._scriptElement, 'load', this._scriptLoadDelegate);
    }
    else {
        $addHandler(this._scriptElement, 'readystatechange', this._scriptLoadDelegate);
    }
    if (Boolean(this._scriptElement.addEventListener)) {
        this._scriptErrorDelegate = Function.createDelegate(this, this._scriptErrorHandler);
        this._scriptElement.addEventListener('error', this._scriptErrorDelegate, false);
    }
}
function DeltaManager_ScriptLoaderTask$_removeScriptElementHandlers() {
    if (Boolean(this._scriptLoadDelegate)) {
        var scriptElement = this.get_scriptElement();

        if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
            $removeHandler(scriptElement, 'load', this._scriptLoadDelegate);
        }
        else {
            $removeHandler(scriptElement, 'readystatechange', this._scriptLoadDelegate);
        }
        if (Boolean(this._scriptErrorDelegate)) {
            this._scriptElement.removeEventListener('error', this._scriptErrorDelegate, false);
            this._scriptErrorDelegate = null;
        }
        this._scriptLoadDelegate = null;
    }
}
function DeltaManager_ScriptLoaderTask$_scriptErrorHandler() {
    if (this._disposed) {
        return;
    }
    this._completedCallback(this.get_scriptElement(), false);
}
function DeltaManager_ScriptLoaderTask$_scriptLoadHandler() {
    if (this._disposed) {
        return;
    }
    var scriptElement = this.get_scriptElement();

    if (scriptElement.readyState !== 'loaded' && scriptElement.readyState !== 'complete') {
        return;
    }
    this._completedCallback(scriptElement, true);
}
function GetServerRelativeUrlFromURL(pageUrl) {
    var serverURL;
    var slashSlash = pageUrl.indexOf('//');

    if (-1 != slashSlash) {
        var pathStart = pageUrl.indexOf('/', slashSlash + 2);

        if (-1 != pathStart) {
            serverURL = pageUrl.substr(pathStart);
        }
        else {
            serverURL = "/";
        }
    }
    else {
        serverURL = pageUrl;
    }
    return serverURL;
}
function GetTargetHandler(targetLocalPath) {
    if (null == targetLocalPath)
        return "";
    var targetLen = targetLocalPath.length;

    if (0 == targetLen || '/' != targetLocalPath[0])
        return "";
    var startQuery = targetLocalPath.indexOf('?');
    var startAnchor = targetLocalPath.indexOf('#');

    if (-1 == startQuery)
        startQuery = targetLen;
    if (-1 == startAnchor)
        startAnchor = targetLen;
    return targetLocalPath.substr(0, Math.min(startQuery, startAnchor));
}
var _spFullDownloadList;

function IsFailoverTarget(targetLocalPath) {
    var leafStart = targetLocalPath.lastIndexOf('/');

    if (-1 != leafStart) {
        var leafName = targetLocalPath.substr(leafStart + 1);

        if (0 != leafName.length) {
            var extStart = leafName.lastIndexOf('.');

            if (-1 == extStart) {
                return false;
            }
            var extension = leafName.substr(extStart + 1);

            if ("aspx" != extension.toLowerCase()) {
                return true;
            }
            var fileName = (leafName.substr(0, extStart)).toLowerCase();

            if (Boolean(_spFullDownloadList) && Array.contains(_spFullDownloadList, fileName)) {
                return true;
            }
        }
    }
    return false;
}
function GetQuery(targetLocalPath) {
    var query = (new URI(targetLocalPath, {
        disableEncodingDecodingForLegacyCode: true
    })).getQuery();

    return query;
}
function IsFailoverQuery(queryIn) {
    queryIn = queryIn.toLowerCase();
    if (queryIn.indexOf("wikipagemode=edit") != -1)
        return true;
    if (queryIn.indexOf("usemds=false") != -1)
        return true;
    return false;
}
function SPUpdatePage(pageUrl) {
    if ("undefined" == typeof g_MinimalDownload || !g_MinimalDownload || IsAccessibilityFeatureEnabled())
        return true;
    pageUrl = GetAbsoluteUrl(pageUrl);
    if (browseris.ie && browseris.iever < 10) {
        var idxQ = pageUrl.indexOf("?");

        if (-1 == idxQ) {
            idxQ = pageUrl.length;
        }
        var idxH = pageUrl.indexOf("#");

        if (-1 == idxH) {
            idxH = pageUrl.length;
        }
        var idx = Math.min(idxQ, idxH);

        pageUrl = encodeURI(decodeURI(pageUrl.substr(0, idx))) + pageUrl.substr(idx);
    }
    var fReturn = true;
    var urlTail = "/_layouts/15/start.aspx";
    var urlTailLength = urlTail.length;
    var pathname = window.location.pathname;
    var pathLength = pathname.length;
    var hash1Start = pageUrl.indexOf('#');

    if (-1 != hash1Start) {
        var startPagePos = ((pageUrl.substr(0, hash1Start)).toLowerCase()).indexOf("/_layouts/15/start.aspx");

        if (-1 != startPagePos) {
            if (pageUrl.length > hash1Start + 2 && '/' == pageUrl[hash1Start + 1]) {
                if (pageUrl.length > hash1Start + 3 && '/' == pageUrl[hash1Start + 2]) {
                    pageUrl = pageUrl.substr(hash1Start + 2);
                }
                else {
                    pageUrl = pageUrl.substr(0, startPagePos) + pageUrl.substr(hash1Start + 1);
                }
            }
        }
    }
    if (pathLength >= urlTailLength && urlTail == pathname.substr(pathLength - urlTailLength)) {
        if (pageUrl.charAt(0) == '/') {
            if (!IsFailoverTarget(GetTargetHandler(pageUrl))) {
                ajaxNavigate.update(pageUrl);
                fReturn = false;
            }
        }
        else {
            if (pageUrl.indexOf('/') == -1) {
                var currentUrl = ajaxNavigate.get_href();
                var idxQuery = currentUrl.indexOf('?');

                if (idxQuery != -1)
                    currentUrl = currentUrl.substr(0, idxQuery);
                var idxLastSlash = currentUrl.lastIndexOf('/');

                if (idxLastSlash != -1)
                    pageUrl = currentUrl.substr(0, idxLastSlash + 1) + pageUrl;
            }
            var slashSlash = pageUrl.indexOf('//');

            if (-1 != slashSlash) {
                var pathStart = pageUrl.indexOf('/', slashSlash + 2);

                if (-1 != pathStart) {
                    var pageUrlHostName = pageUrl.substr(slashSlash + 2, pathStart - (slashSlash + 2));
                    var pageUrlPort = '';
                    var portStart = pageUrlHostName.indexOf(':');

                    if (-1 != portStart) {
                        pageUrlPort = pageUrlHostName.substr(portStart + 1);
                        if (pageUrlPort == '80')
                            pageUrlPort = '';
                        pageUrlHostName = pageUrlHostName.substr(0, portStart);
                    }
                    if (window.location.hostname == pageUrlHostName && window.location.port == pageUrlPort) {
                        if (!IsFailoverTarget(GetTargetHandler(pageUrl.substr(pathStart)))) {
                            ajaxNavigate.update(pageUrl.substr(pathStart));
                            fReturn = false;
                        }
                    }
                }
                else {
                    if (window.location.hostname == pageUrl.substr(slashSlash + 2)) {
                        ajaxNavigate.update("");
                        fReturn = false;
                    }
                }
            }
            else {
                fReturn = true;
            }
        }
    }
    else {
        if ("undefined" !== typeof g_WebServerRelativeUrl) {
            var a = document.createElement('a');

            a.href = pageUrl;
            pageUrl = a.href;
            a.href = g_WebServerRelativeUrl;
            var webServerRelativeUrl = a.href;

            if (pageUrl.length >= webServerRelativeUrl.length && webServerRelativeUrl.toLowerCase() == (pageUrl.substr(0, webServerRelativeUrl.length)).toLowerCase()) {
                var destUrl = webServerRelativeUrl;

                if ('/' == destUrl[destUrl.length - 1]) {
                    destUrl += "/_layouts/15/start.aspx".substr(1);
                }
                else {
                    destUrl += "/_layouts/15/start.aspx";
                }
                if (!IsFailoverTarget(GetTargetHandler(GetServerRelativeUrlFromURL(pageUrl)))) {
                    destUrl += "#/" + GetServerRelativeUrlFromURL(pageUrl);
                    window.location.href = destUrl;
                    fReturn = false;
                }
            }
        }
    }
    if (!fReturn) {
        g_MDNav = false;
        var curEvent = window.event;

        if (curEvent != null) {
            cancelDefault(curEvent);
        }
    }
    return fReturn;
}
var workingOnIt;

function _spSpinnerOnload(id) {
    window.setTimeout(ShowSpinner, 1000);
    function ShowSpinner() {
        if (typeof isStartPlt1 != "undefined" && isStartPlt1) {
            var notifier = document.getElementById(id);

            if (Boolean(notifier)) {
                var fontFams = '"Segoe UI Light", "Segoe UI", Tahoma, Helvetica, Arial, sans-serif';

                notifier.innerHTML = "<a onclick='this.style.display=\"none\";'>" + "<img src='data:image/gif;base64,R0lGODlhGAAYAJECAP///5mZmf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAGAAYAAACQJQvAGgRDI1SyLnI5jr2YUQx10eW5hmeB6Wpkja5SZy6tYzn+g5uMhuzwW6lFtF05CkhxGQm+HKuoDPplOlDFAAAIfkEBQoAAgAsFAAGAAQABAAAAgVUYqeXUgAh+QQFCgACACwUAA4ABAAEAAACBVRip5dSACH5BAUKAAIALA4AFAAEAAQAAAIFVGKnl1IAIfkEBQoAAgAsBgAUAAQABAAAAgVUYqeXUgAh+QQFCgACACwAAA4ABAAEAAACBVRip5dSACH5BAUKAAIALAAABgAEAAQAAAIFVGKnl1IAIfkECQoAAgAsBgAAAAQABAAAAgVUYqeXUgAh+QQJCgACACwAAAAAGAAYAAACJZQvEWgADI1SyLnI5jr2YUQx10eW5omm6sq27gvH8kzX9o3ndAEAIfkECQoAAgAsAAAAABgAGAAAAkCULxFoAAyNUsi5yOY69mFEMddHluYZntyjqY3Vul2yucJo5/rOQ6lLiak0QtSEpvv1lh8l0lQsYqJHaO3gFBQAACH5BAkKAAIALAAAAAAYABgAAAJAlC8RaAAMjVLIucjmOvZhRDHXR5bmGZ7co6mN1bpdsrnCaOf6zkOpzJrYOjHV7Gf09JYlJA0lPBQ/0ym1JsUeCgAh+QQJCgACACwAAAAAGAAYAAACQJQvEWgADI1SyLnI5jr2YUQx10eW5hme3KOpjdW6XbK5wmjn+s5Dqcya2Dox1exn9PSWJeRNSSo+cR/pzOSkHgoAIfkECQoAAgAsAAAAABgAGAAAAkCULxFoAAyNUsi5yOY69mFEMddHluYZntyjqY3Vul2yucJo5/rOQ6nMmtg6MdXsZ/T0liXc6jRbOTHR15SqfEIKACH5BAkKAAIALAAAAAAYABgAAAJAlC8RaAAMjVLIucjmOvZhRDHXR5bmGZ7co6mN1bpdsrnCaOf6zkO4/JgBOz/TrHhC9pYRpNJnqURLwtdT5JFGCgAh+QQJCgACACwAAAAAGAAYAAACPpQvEWgADI1SyLnI5jr2YUQx10eW5jme3NOpTWe5Qpu6tYzn+l558tWywW4lmk/IS6KOr2UtSILOYiYiUVAAADs='>" + "</a>" + "<span class='ms-accentText' style='font-size: 36px; font-family: " + fontFams + "'>&nbsp;" + (typeof workingOnIt != "undefined" ? workingOnIt : "") + "</span>";
                var s4work = document.getElementById("s4-workspace");
                var style = s4work.style;
                var width = Number(style.width.replace(/px/i, ""));

                notifier.style.top = "206px";
                notifier.style.left = String(Math.max(10, (width - notifier.offsetWidth) / 2)) + "px";
            }
        }
    }
}
var startJsLoaded;

$_global_start();
