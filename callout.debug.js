function $_global_callout() {
    (function() {
    ULSIU5:
        ;
        var LAUNCHPOINT_OBJECT_KEY = "launchPointObject-{D4B8D3C2-7958-44B7-8409-40EE80E877E1}";
        var CALLOUT_ELEMENT_CLASS = "js-callout-mainElement";
        var CALLOUT_ELEMENT_SELECTOR = "." + CALLOUT_ELEMENT_CLASS;
        var validateSubsetOfOptions = function(givenOptions, possibleOptions) {
        ULSIU5:
            ;
            for (var property in givenOptions) {
                var isPossibleOption = property in possibleOptions;

                if (!isPossibleOption) {
                    throw "Invalid option '" + property + "' specified";
                }
            }
        };
        var ElementSizeAndOffsetListener = function(element, options, intervalFn, manualFn) {
            var watchOffset = Boolean(options.watchOffset);
            var watchOffsetParent = Boolean(options.watchOffsetParent);
            var watchSize = Boolean(options.watchSize);
            var interval = m$.isNumber(options.interval) ? options.interval : 100;
            var mElement = m$(element);
            var oldLeft = null, oldTop = null;
            var oldWidth = null, oldHeight = null;
            var oldOffsetParent = null;
            var intervalID = null;
            var that = this;
            var refreshState = function() {
            ULSIU5:
                ;
                var isChanged = false;

                if (watchOffsetParent) {
                    isChanged = isChanged || oldOffsetParent !== element.offsetParent;
                    oldOffsetParent = element.offsetParent;
                }
                if (watchOffset) {
                    var newOffset = mElement.offset();

                    isChanged = isChanged || oldLeft !== newOffset.left || oldTop !== newOffset.top;
                    oldLeft = newOffset.left;
                    oldTop = newOffset.top;
                }
                if (watchSize) {
                    isChanged = isChanged || oldWidth !== element.offsetWidth || oldHeight !== element.offsetHeight;
                    oldWidth = element.offsetWidth;
                    oldHeight = element.offsetHeight;
                }
                return isChanged;
            };
            var callIfChanged = function() {
            ULSIU5:
                ;
                if (!(m$(document.body)).contains(element)) {
                    that.stop();
                }
                else if (refreshState()) {
                    intervalFn.apply(arguments);
                }
            };

            this.checkForChangesAndActImmediately = function() {
            ULSIU5:
                ;
                if (refreshState()) {
                    manualFn.apply(arguments);
                }
            };
            this.start = function() {
            ULSIU5:
                ;
                if (intervalID === null) {
                    refreshState();
                    intervalID = setInterval(callIfChanged, interval);
                }
                if (m$.support.domSubtreeModified) {
                    mElement.bind('DOMSubtreeModified', that.checkForChangesAndActImmediately);
                    mElement.bind('DOMNodeInserted', that.checkForChangesAndActImmediately);
                    mElement.bind('DOMNodeRemoved', that.checkForChangesAndActImmediately);
                    mElement.bind('DOMNodeInserted', that.checkForChangesAndActImmediately);
                    mElement.bind('DOMCharacterDataModified', that.checkForChangesAndActImmediately);
                }
            };
            this.stop = function() {
            ULSIU5:
                ;
                clearInterval(intervalID);
                intervalID = null;
                if (m$.support.domSubtreeModified) {
                    mElement.unbind('DOMSubtreeModified', that.checkForChangesAndActImmediately);
                    mElement.unbind('DOMNodeInserted', that.checkForChangesAndActImmediately);
                    mElement.unbind('DOMNodeRemoved', that.checkForChangesAndActImmediately);
                    mElement.unbind('DOMNodeInserted', that.checkForChangesAndActImmediately);
                    mElement.unbind('DOMCharacterDataModified', that.checkForChangesAndActImmediately);
                }
            };
        };

        ElementSizeAndOffsetListener.prototype.start = undefined;
        ElementSizeAndOffsetListener.prototype.stop = undefined;
        ElementSizeAndOffsetListener.prototype.checkForChangesAndActImmediately = undefined;
        (function() {
        ULSIU5:
            ;
            CalloutOpenOptions = function() {
            };
            CalloutOpenOptions.prototype = {
                event: "click",
                closeCalloutOnBlur: true,
                showCloseButton: true
            };
            CalloutOptions = function() {
            };
            CalloutOptions.prototype = {
                launchPoint: null,
                ID: null,
                title: "",
                content: "",
                contentElement: null,
                boundingBox: null,
                contentWidth: 350,
                openOptions: new CalloutOpenOptions(),
                onOpeningCallback: null,
                onOpenedCallback: null,
                onClosingCallback: null,
                onClosedCallback: null,
                beakOrientation: "topBottom",
                positionAlgorithm: defaultPositionAlgorithm
            };
            var isIE8 = browseris.ie && !browseris.ie9standardUp;
            var animationEnabled = !isIE8;
            var BEAK_SIZE = 9;
            var BEAK_SIDE = 6;
            var LAUNCHPOINT_PADDING = 5;
            var BEAK_EDGE_PADDING = 15;
            var CALLOUT_BORDER_WIDTH = 1;
            var FOOTER_PADDING = 50;
            var BEAK_ROTATE_OFFSET = 2.63601;

            CalloutOptions.CALLOUT_MINIMUM_WIDTH = 240;
            CalloutOptions.CALLOUT_MAXIMUM_WIDTH = 610;
            var States = {
                opening: "opening",
                opened: "opened",
                closing: "closing",
                closed: "closed"
            };
            var callbackOptionToEventNameMapping = {
                onOpeningCallback: States.opening,
                onOpenedCallback: States.opened,
                onClosingCallback: States.closing,
                onClosedCallback: States.closed
            };

            Callout = function(members) {
                var that = this;
                var m_options = new CalloutOptions();
                var m_isInitialized = false;
                var m_state = States.closed;
                var m_isAnimationRunning = false;
                var m_actionMenu = null;
                var m_launchPoint;
                var m_calloutElement = null;
                var m_encodedID;
                var m_isRTL = false;
                var m_launchPointSizeAndOffsetListener = null;
                var m_calloutSizeListener = null;
                var m_calloutBodyElement = null;
                var m_beakTop;
                var m_beakBottom;
                var m_beakLeftRight;
                var m_content = m$();
                var m_orientation = {
                    up: false,
                    left: false
                };

                this.getOrientation = function() {
                ULSIU5:
                    ;
                    return m$.extend({}, m_orientation);
                };
                this.set = function(options) {
                    if (m$.isUndefinedOrNull(options)) {
                        throw 'Callout: Input parameter must be defined';
                    }
                    validateSubsetOfOptions(options, CalloutOptions.prototype);
                    var proposedOptions = m$.extend(true, {}, m_options, options);

                    if (m$.isUndefinedOrNull(proposedOptions.ID)) {
                        throw 'Callout: Required property must be defined: ID';
                    }
                    if (m$.isUndefinedOrNull(proposedOptions.launchPoint)) {
                        throw 'Callout: Required property must be defined: launchPoint';
                    }
                    if (!m$.isElement(proposedOptions.launchPoint)) {
                        throw 'Callout: launchPoint must be an HTML Element';
                    }
                    if (!m$.isString(proposedOptions.content)) {
                        throw 'Callout: Content must be a string';
                    }
                    if (m$.isElement(proposedOptions.contentElement) && proposedOptions.content !== "") {
                        throw 'Callout: Content must be specified as either an HTML element (contentElement) or a string (content) but not both.';
                    }
                    if (proposedOptions.boundingBox !== null && !m$.isElement(proposedOptions.boundingBox)) {
                        throw 'Callout: boundingBox must be an HTML Element.';
                    }
                    if (!m$.isNumber(proposedOptions.contentWidth)) {
                        throw "Callout: contentWidth must be a number representing the content element's width in pixels";
                    }
                    else if (proposedOptions.contentWidth < CalloutOptions.CALLOUT_MINIMUM_WIDTH || proposedOptions.contentWidth > CalloutOptions.CALLOUT_MAXIMUM_WIDTH) {
                        throw "Callout: contentWidth must be a number between " + CalloutOptions.CALLOUT_MINIMUM_WIDTH.toString() + " and " + CalloutOptions.CALLOUT_MAXIMUM_WIDTH.toString() + ".";
                    }
                    if (proposedOptions.beakOrientation !== "topBottom" && proposedOptions.beakOrientation !== "leftRight") {
                        throw 'Callout: Beak must be specified as either "topBottom" or "leftRight".';
                    }
                    if (m$.isDefined(proposedOptions.positionAlgorithm) && !m$.isFunction(proposedOptions.positionAlgorithm)) {
                        throw 'Callout: positionAlgorithm must be a function.';
                    }
                    if (m$.isUndefinedOrNull(proposedOptions.openOptions) || m$.isUndefinedOrNull(proposedOptions.openOptions.event)) {
                        throw 'Callout: Property must be defined: openOptions';
                    }
                    if (m$.isDefinedAndNotNull(proposedOptions.openOptions.event) && proposedOptions.openOptions.event !== "click" && proposedOptions.openOptions.event !== "hover" && proposedOptions.openOptions.event !== "none") {
                        throw 'Callout: Only "click", "hover", and "none" are supported events';
                    }
                    if (proposedOptions.openOptions.event === "click" && proposedOptions.openOptions.showCloseButton === false) {
                        throw 'Callout: When activated by click, callout must have close button';
                    }
                    if (proposedOptions.openOptions.event === "hover" && proposedOptions.openOptions.closeCalloutOnBlur === false) {
                        throw 'Callout: When activated by hover, closeCalloutOnBlur cannot be overriden';
                    }
                    if (m_isInitialized) {
                        if (m$.isFunction(options.onOpeningCallback) || m$.isFunction(options.onOpenedCallback) || m$.isFunction(options.onClosingCallback) || m$.isFunction(options.onClosedCallback)) {
                            throw 'Callout:  Event callbacks may not be registered using the .set() method once the Callout has been initialized. Use Callout.addEventCallback(...) instead';
                        }
                    }
                    m_options = proposedOptions;
                    m_encodedID = STSScriptEncode(m_options.ID);
                    setLaunchPoint(m_options.launchPoint);
                    if (!m_isInitialized) {
                        m$.forEach(Object.keys(callbackOptionToEventNameMapping), function(callbackOption) {
                        ULSIU5:
                            ;
                            addEventCallbackFromOptions(callbackOption);
                        });
                    }
                    updateContentWidth();
                };
                this.addEventCallback = function(eventName, eventCallback) {
                    if (!isValidEventName(eventName)) {
                        throw 'Callout: Invalid callback event name specified';
                    }
                    (m$(that)).bind(eventName, eventCallback);
                };
                this.getLaunchPoint = function() {
                ULSIU5:
                    ;
                    return m_launchPoint;
                };
                this.getID = function() {
                ULSIU5:
                    ;
                    return m_options.ID;
                };
                this.getTitle = function() {
                ULSIU5:
                    ;
                    return m_options.title;
                };
                this.getContent = function() {
                ULSIU5:
                    ;
                    return m_options.content;
                };
                this.getContentElement = function() {
                ULSIU5:
                    ;
                    return document.getElementById(generateId("content"));
                };
                this.getBoundingBox = function() {
                ULSIU5:
                    ;
                    return m_options.boundingBox;
                };
                this.getContentWidth = function() {
                ULSIU5:
                    ;
                    return m_options.contentWidth;
                };
                this.getOpenOptions = function() {
                ULSIU5:
                    ;
                    return m_options.openOptions;
                };
                this.getBeakOrientation = function() {
                ULSIU5:
                    ;
                    return m_options.beakOrientation;
                };
                this.getPositionAlgorithm = function() {
                ULSIU5:
                    ;
                    return m_options.positionAlgorithm;
                };
                this.isOpen = function() {
                ULSIU5:
                    ;
                    return m_state === States.opened;
                };
                this.isOpening = function() {
                ULSIU5:
                    ;
                    return m_state === States.opening;
                };
                this.isOpenOrOpening = function() {
                ULSIU5:
                    ;
                    return that.isOpen() || that.isOpening();
                };
                this.isClosing = function() {
                ULSIU5:
                    ;
                    return m_state === States.closing;
                };
                this.isClosed = function() {
                ULSIU5:
                    ;
                    return m_state === States.closed;
                };
                this.getActionMenu = function() {
                ULSIU5:
                    ;
                    if (m$.isUndefinedOrNull(m_actionMenu)) {
                        m_actionMenu = new CalloutActionMenu('co' + m_encodedID + '_callout-actions');
                    }
                    return m_actionMenu;
                };
                this.addAction = function(calloutAction) {
                    return (that.getActionMenu()).addAction(calloutAction);
                };
                this.refreshActions = function() {
                ULSIU5:
                    ;
                    (that.getActionMenu()).refreshActions();
                };
                this.open = function(useAnimation) {
                    useAnimation = m$.isBoolean(useAnimation) ? useAnimation : animationEnabled;
                    if (!canTransitionToOpening())
                        return false;
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutOpenStart);
                    if (m_options.openOptions.event === 'hover') {
                        CalloutManager.closeAll();
                    }
                    if (m_calloutElement === null)
                        createCalloutElement();
                    render();
                    m_calloutElement.style.display = "block";
                    Sys.Debug.assert(((m$(m_calloutElement)).offsetParent()).css("overflow") !== "hidden", "The Callout offsetParent must not have overflow:hidden.  See comment in code above this assert for more info.");
                    setState(States.opening);
                    moveToTarget();
                    if (m_launchPointSizeAndOffsetListener !== null)
                        m_launchPointSizeAndOffsetListener.start();
                    if (m_calloutSizeListener !== null)
                        m_calloutSizeListener.start();
                    (m$(m_calloutElement)).resize(moveToTarget);
                    ((m$(m_calloutElement)).offsetParent()).scroll(moveToTarget);
                    (m$(window)).resize(moveToTarget);
                    if ((that.getOpenOptions()).closeCalloutOnBlur) {
                        (m$(document.body)).click(bodyClicked);
                    }
                    (m$(document)).bind('keydown', escapeKeyDown);
                    showCallout(useAnimation);
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutOpenEnd);
                    return true;
                };
                this.close = function(useAnimation) {
                    useAnimation = m$.isBoolean(useAnimation) ? useAnimation : false;
                    if (!canTransitionToClosing(useAnimation))
                        return false;
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutCloseStart);
                    setState(States.closing);
                    if ((that.getOpenOptions()).closeCalloutOnBlur) {
                        (m$(document.body)).unbind('click', bodyClicked);
                    }
                    (m$(document)).unbind('keydown', escapeKeyDown);
                    (m$(window)).unbind('resize', moveToTarget);
                    ((m$(m_calloutElement)).offsetParent()).unbind('scroll', moveToTarget);
                    (m$(m_calloutElement)).unbind('resize', moveToTarget);
                    if (m_calloutSizeListener !== null)
                        m_calloutSizeListener.stop();
                    if (m_launchPointSizeAndOffsetListener !== null)
                        m_launchPointSizeAndOffsetListener.stop();
                    hideCallout(useAnimation);
                    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
                        CUI.PMetrics.perfMark(CUI.PMarker.perfSPCalloutCloseEnd);
                    return true;
                };
                this.toggle = function() {
                ULSIU5:
                    ;
                    if (that.isOpenOrOpening())
                        that.close();
                    else
                        that.open();
                    return false;
                };
                this.destroy = function() {
                ULSIU5:
                    ;
                    if (that.isOpenOrOpening()) {
                        var oldAnimationEnabled = animationEnabled;

                        try {
                            animationEnabled = false;
                            that.close();
                        }
                        finally {
                            animationEnabled = oldAnimationEnabled;
                        }
                    }
                    if (m_calloutElement !== null) {
                        if (m_calloutElement.parentNode != null) {
                            m_calloutElement.parentNode.removeChild(m_calloutElement);
                        }
                        if (m_options.openOptions.event === 'click') {
                            (m$(m_launchPoint)).unbind("click", that.toggle);
                        }
                        else if (m_options.openOptions.event === 'hover') {
                            m_options.openOptions.event = 'none';
                            resetHoverHandlers(m_launchPoint, m_calloutElement);
                        }
                    }
                    m_calloutSizeListener.stop();
                    m_calloutSizeListener = null;
                };
                var isValidEventName = function(i_eventName) {
                ULSIU5:
                    ;
                    return m$.some(callbackOptionToEventNameMapping, function(option, eventName) {
                    ULSIU5:
                        ;
                        return eventName === i_eventName;
                    });
                };
                var addEventCallbackFromOptions = function(eventOption) {
                ULSIU5:
                    ;
                    if (m$.isFunction(m_options[eventOption])) {
                        var eventName = callbackOptionToEventNameMapping[eventOption];

                        if (m$.isUndefined(eventName)) {
                            throw "Unexpected error";
                        }
                        that.addEventCallback(eventName, m_options[eventOption]);
                        delete m_options[eventOption];
                    }
                };
                var setLaunchPoint = function(launchPoint) {
                    if (m_launchPoint !== launchPoint) {
                        if (m$.isDefinedAndNotNull(m_launchPoint)) {
                            throw 'Callout: launchPoint must be set at construction and can never be changed.';
                        }
                        m_launchPoint = launchPoint;
                        (m$(m_launchPoint)).EventuallyDetect_DOMNodeRemovedFromDocument(function() {
                        ULSIU5:
                            ;
                            if (m_calloutElement !== null) {
                                (m$(m_calloutElement)).remove();
                            }
                        });
                        resetLaunchPointActivationDeactivationHandlers();
                        if (m_launchPointSizeAndOffsetListener !== null)
                            m_launchPointSizeAndOffsetListener.stop();
                        m_launchPointSizeAndOffsetListener = new ElementSizeAndOffsetListener(m_launchPoint, {
                            watchSize: true,
                            watchOffset: true
                        }, moveToTarget, moveToTargetUnthrottled);
                        m_isRTL = IsElementRtl(m_launchPoint);
                    }
                };
                var setState = function(state) {
                ULSIU5:
                    ;
                    m_state = state;
                    (m$(that)).trigger(state, that);
                };
                var updateContentWidth = function() {
                ULSIU5:
                    ;
                    if (m_content.length === 1) {
                        m_content.css("width", numToPx(m_options.contentWidth));
                    }
                };
                var animateCalloutElementIfNecessary = function(tryUseAnimation, animationFunc, finishFunc) {
                ULSIU5:
                    ;
                    var useAnimation = tryUseAnimation && animationEnabled;

                    if (!useAnimation) {
                        finishFunc();
                    }
                    else {
                        Sys.Debug.assert(!m_isAnimationRunning, "Animations cannot be interleaved");
                        m_isAnimationRunning = true;
                        animationFunc(m_calloutElement, function() {
                        ULSIU5:
                            ;
                            m_isAnimationRunning = false;
                            finishFunc();
                        });
                    }
                };
                var showCallout = function(useAnimation) {
                    var finishFunc = function() {
                    ULSIU5:
                        ;
                        if (that.isOpening()) {
                            setState(States.opened);
                            if (m_calloutSizeListener !== null)
                                m_calloutSizeListener.checkForChangesAndActImmediately();
                        }
                    };
                    var tryUseAnimation = useAnimation && !CalloutManager.isAtLeastOneCalloutOpen();

                    animateCalloutElementIfNecessary(tryUseAnimation, SPAnimationUtility.BasicAnimator.FadeIn, finishFunc);
                };
                var hideCallout = function(tryUseAnimation) {
                    var finishFunc = function() {
                    ULSIU5:
                        ;
                        if (that.isClosing()) {
                            m_calloutElement.style.display = "none";
                            setState(States.closed);
                        }
                    };

                    animateCalloutElementIfNecessary(tryUseAnimation, SPAnimationUtility.BasicAnimator.FadeOut, finishFunc);
                };
                var canTransitionToOpening = function() {
                ULSIU5:
                    ;
                    return that.isClosed() && !m_isAnimationRunning;
                };
                var canTransitionToClosing = function(useAnimation) {
                    if (useAnimation && m_isAnimationRunning) {
                        return false;
                    }
                    else if (useAnimation && !that.isOpen()) {
                        return false;
                    }
                    else if (!useAnimation && !that.isOpenOrOpening()) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                var createCalloutElement = function() {
                ULSIU5:
                    ;
                    if (m_calloutElement !== null || m_calloutSizeListener !== null) {
                        throw "Callout: callout element or listener already exists.";
                    }
                    var calloutElement = document.createElement('div');

                    calloutElement.id = "co" + m_encodedID + "_callout";
                    calloutElement.className = CALLOUT_ELEMENT_CLASS + " ms-core-defaultFont  ms-alignLeft ms-shadow";
                    calloutElement.style.display = "none";
                    calloutElement['data-sp-cancelWPSelect'] = true;
                    calloutElement.oncontextmenu = function(evt) {
                        evt.stopPropagation();
                    };
                    (m$(calloutElement)).data(LAUNCHPOINT_OBJECT_KEY, m_launchPoint);
                    m_calloutElement = calloutElement;
                    m_launchPoint.parentNode.appendChild(m_calloutElement);
                    m_calloutSizeListener = new ElementSizeAndOffsetListener(m_calloutElement, {
                        watchSize: true,
                        watchOffsetParent: true
                    }, moveToTarget, moveToTargetUnthrottled);
                    resetLaunchPointActivationDeactivationHandlers();
                };
                var resetLaunchPointActivationDeactivationHandlers = function() {
                ULSIU5:
                    ;
                    if (m_options.openOptions.event === 'click') {
                        (m$(m_launchPoint)).unbind("click", that.toggle);
                        (m$(m_launchPoint)).click(that.toggle);
                    }
                    else if (m_options.openOptions.event === 'hover') {
                        resetHoverHandlers(m_launchPoint, m_calloutElement);
                    }
                };
                var escapeKeyDown = function(evt) {
                    if (evt.keyCode === 27) {
                        that.close();
                    }
                };
                var bodyClicked = function(evt) {
                    var targetElement = evt.target;
                    var launchPoint = that.getLaunchPoint();

                    if (m$.isDefinedAndNotNull(m_calloutElement) && targetElement !== launchPoint && targetElement !== m_calloutElement && !(m$(launchPoint)).contains(targetElement) && !(m$(m_calloutElement)).contains(targetElement) && (m$(":root")).contains(targetElement) && ((m$(targetElement)).parents(".mediaPlayerFullScreen")).length === 0) {
                        that.close();
                    }
                };
                var resetHoverHandlers = (function() {
                ULSIU5:
                    ;
                    var mouseoverDelay = 250;
                    var mouseoutDelay = 400;
                    var isMousedOverElementOne = false;
                    var isMousedOverElementTwo = false;
                    var onMouseoverChecks = [];
                    var onMouseoutChecks = [];
                    var elementOne = null;
                    var elementTwo = null;
                    var int_clearChecks = function(checks) {
                    ULSIU5:
                        ;
                        m$.forEach(checks, function(check) {
                        ULSIU5:
                            ;
                            clearTimeout(check);
                        });
                        checks.length = 0;
                    };
                    var int_OnMouseover = function() {
                    ULSIU5:
                        ;
                        int_clearChecks(onMouseoutChecks);
                        beginOnMouseoverCheck();
                    };
                    var int_OnMouseout = function() {
                    ULSIU5:
                        ;
                        int_clearChecks(onMouseoverChecks);
                        beginOnMouseoutCheck();
                    };
                    var beginOnMouseoverCheck = function() {
                    ULSIU5:
                        ;
                        var timeout = setTimeout(function() {
                        ULSIU5:
                            ;
                            if (isMousedOverElementOne || isMousedOverElementTwo) {
                                that.open();
                            }
                        }, mouseoverDelay);

                        onMouseoverChecks.push(timeout);
                    };
                    var beginOnMouseoutCheck = function() {
                    ULSIU5:
                        ;
                        var timeout = setTimeout(function() {
                        ULSIU5:
                            ;
                            if (!isMousedOverElementOne && !isMousedOverElementTwo) {
                                that.close(true);
                            }
                        }, mouseoutDelay);

                        onMouseoutChecks.push(timeout);
                    };
                    var elementOneMouseover = function() {
                    ULSIU5:
                        ;
                        isMousedOverElementOne = true;
                        int_OnMouseover();
                    };
                    var elementTwoMouseover = function() {
                    ULSIU5:
                        ;
                        isMousedOverElementTwo = true;
                        int_OnMouseover();
                    };
                    var elementOneMouseout = function() {
                    ULSIU5:
                        ;
                        isMousedOverElementOne = false;
                        int_OnMouseout();
                    };
                    var elementTwoMouseout = function() {
                    ULSIU5:
                        ;
                        isMousedOverElementTwo = false;
                        int_OnMouseout();
                    };

                    return function(newElementOne, newElementTwo) {
                    ULSIU5:
                        ;
                        (m$(elementOne)).unbind('mouseover', elementOneMouseover);
                        (m$(elementOne)).unbind('mouseout', elementOneMouseout);
                        (m$(elementTwo)).unbind('mouseover', elementTwoMouseover);
                        (m$(elementTwo)).unbind('mouseout', elementTwoMouseout);
                        if (m_options.openOptions.event === 'hover') {
                            elementOne = newElementOne;
                            elementTwo = newElementTwo;
                            (m$(elementOne)).bind('mouseover', elementOneMouseover);
                            (m$(elementOne)).bind('mouseout', elementOneMouseout);
                            (m$(elementTwo)).bind('mouseover', elementTwoMouseover);
                            (m$(elementTwo)).bind('mouseout', elementTwoMouseout);
                        }
                    };
                })();
                var generateId = function(idSuffix) {
                ULSIU5:
                    ;
                    return "co" + m_encodedID + "_callout-" + idSuffix;
                };
                var render = function() {
                ULSIU5:
                    ;
                    var contentId = generateId("content");
                    var includeActionsArea = ((that.getActionMenu()).getActions()).length > 0;
                    var theContent = Callout.GenerateDefaultContents(m_encodedID, m_options.title, null, m_options.content, (that.getOpenOptions()).showCloseButton, includeActionsArea);

                    if (includeActionsArea) {
                        that.addEventCallback("opening", function(callout) {
                        ULSIU5:
                            ;
                            (that.getActionMenu()).render();
                        });
                    }
                    var outputStr = [isLeftRightBeak() ? '<span class="ms-shadow js-callout-beakLeftRight js-callout-beakLeft js-callout-beak"></span>' : '', isTopBottomBeak() ? '<span class="ms-shadow js-callout-beakTop js-callout-beak"></span>' : '', isTopBottomBeak() ? '<span class="ms-shadow js-callout-beakBottom js-callout-beak" id="' + m_encodedID + '_callout-bottombeak"></span>' : '', '<div id=', StAttrQuote(contentId), ' class="js-callout-content">', theContent, '</div>'].join('');

                    (m$(m_options.contentElement)).detach();
                    (m$(m_calloutElement)).empty();
                    m_calloutElement.innerHTML = outputStr;
                    var bodyId = generateId("body");

                    m_calloutBodyElement = document.getElementById(bodyId);
                    if (m$.isElement(m_options.contentElement)) {
                        m_calloutBodyElement.appendChild(m_options.contentElement);
                    }
                    m_beakTop = (m$(m_calloutElement)).find(".js-callout-beakTop");
                    m_beakBottom = (m$(m_calloutElement)).find(".js-callout-beakBottom");
                    m_beakLeftRight = (m$(m_calloutElement)).find(".js-callout-beakLeftRight");
                    m_content = (m$(m_calloutElement)).find(".js-callout-content");
                    updateContentWidth();
                };
                var isLeftRightBeak = function() {
                ULSIU5:
                    ;
                    return m_options.beakOrientation === "leftRight";
                };
                var isTopBottomBeak = function() {
                ULSIU5:
                    ;
                    return m_options.beakOrientation === "topBottom";
                };
                var moveToTarget = (function() {
                ULSIU5:
                    ;
                    var launchPointLastAbsLeft = null;
                    var launchPointLastAbsTop = null;
                    var isElementOverflowNotVisible = function(element) {
                    ULSIU5:
                        ;
                        var elementOverflow = (m$(element)).css("overflow");

                        return elementOverflow !== "" && elementOverflow !== "visible";
                    };
                    var isElementScrollable = function(element) {
                    ULSIU5:
                        ;
                        var elementOverflow = (m$(element)).css("overflow");

                        return elementOverflow === "auto" || elementOverflow === "scroll";
                    };
                    var performMove = function() {
                    ULSIU5:
                        ;
                        if (that.isClosing()) {
                            return;
                        }
                        else if (!that.isOpenOrOpening()) {
                            return;
                        }
                        else if ((m$(m_calloutElement)).css("display") === "none") {
                            Sys.Debug.assert(false, "Callout re-positioning occurred during invalid state. Attempting to recover state by closing callout.");
                            that.close();
                            return;
                        }
                        var boundingBox = m_options.boundingBox !== null ? m_options.boundingBox : m_calloutElement.offsetParent;
                        var hardBoundingBox;

                        if (isElementOverflowNotVisible(boundingBox)) {
                            hardBoundingBox = boundingBox;
                        }
                        else {
                            ((m$(boundingBox)).parents()).some(function(element) {
                            ULSIU5:
                                ;
                                if (isElementOverflowNotVisible(element)) {
                                    hardBoundingBox = element;
                                    return true;
                                }
                                return false;
                            });
                            if (m$.isUndefined(hardBoundingBox)) {
                                Sys.Debug.assert(isIE8, "Couldn't find hard bounding box. Did someone override the 'overflow' property on the document body?");
                                hardBoundingBox = document.body;
                            }
                        }
                        var isBeakTopBottom = that.getBeakOrientation() === "topBottom";
                        var launchPointAbsOffset = (m$(m_launchPoint)).offset();
                        var launchPointAbsLeft = launchPointAbsOffset.left;
                        var launchPointAbsTop = launchPointAbsOffset.top;
                        var boundingBoxAbsLeftAndTop = (m$(boundingBox)).offset();
                        var boundingBoxAbsLeft = boundingBoxAbsLeftAndTop.left;
                        var boundingBoxAbsTop = boundingBoxAbsLeftAndTop.top;
                        var boundingBoxAbsBottom = boundingBoxAbsLeftAndTop.bottom;
                        var boundingBoxAbsRight = boundingBoxAbsLeftAndTop.right;
                        var hardBoundingBoxOffset = (m$(hardBoundingBox)).offset();
                        var launchPointWidth = m_launchPoint.offsetWidth;
                        var launchPointHeight = m_launchPoint.offsetHeight;
                        var launchPointVerticalCenter = launchPointAbsTop + launchPointHeight / 2;
                        var launchPointHorizontalCenter = launchPointAbsLeft + launchPointWidth / 2;
                        var launchPointBottom = launchPointAbsTop + m_launchPoint.offsetHeight;
                        var calloutLeft = null, calloutTop = null;
                        var calloutIsLeft = true, calloutIsUp = true;
                        var calloutOffsetWidth = m_calloutElement.offsetWidth;
                        var calloutOffsetHeight = m_calloutElement.offsetHeight;
                        var calculateCalloutPosition = function() {
                        ULSIU5:
                            ;
                            if (isBeakTopBottom) {
                                if (calloutIsUp) {
                                    calloutTop = launchPointAbsTop - calloutOffsetHeight - (CALLOUT_BORDER_WIDTH + LAUNCHPOINT_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                                else {
                                    calloutTop = launchPointAbsTop + launchPointHeight + (CALLOUT_BORDER_WIDTH + LAUNCHPOINT_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                            }
                            else {
                                if (calloutIsUp) {
                                    calloutTop = launchPointVerticalCenter - calloutOffsetHeight + (CALLOUT_BORDER_WIDTH + BEAK_EDGE_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET + FOOTER_PADDING);
                                    if (calloutTop <= boundingBoxAbsTop && launchPointVerticalCenter - 30 > boundingBoxAbsTop) {
                                        calloutTop = boundingBoxAbsTop + 5;
                                    }
                                }
                                else {
                                    calloutTop = launchPointVerticalCenter - (CALLOUT_BORDER_WIDTH + BEAK_EDGE_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                            }
                            if (!isBeakTopBottom) {
                                if (calloutIsLeft) {
                                    calloutLeft = launchPointAbsLeft - calloutOffsetWidth - (CALLOUT_BORDER_WIDTH + LAUNCHPOINT_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                                else {
                                    calloutLeft = launchPointAbsLeft + launchPointWidth + (CALLOUT_BORDER_WIDTH + LAUNCHPOINT_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                            }
                            else {
                                if (calloutIsLeft) {
                                    calloutLeft = launchPointHorizontalCenter - calloutOffsetWidth + (CALLOUT_BORDER_WIDTH + BEAK_EDGE_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                    if (calloutLeft <= boundingBoxAbsLeft && launchPointHorizontalCenter - 30 > boundingBoxAbsLeft) {
                                        calloutLeft = boundingBoxAbsLeft + 5;
                                    }
                                }
                                else {
                                    calloutLeft = launchPointHorizontalCenter - (CALLOUT_BORDER_WIDTH + BEAK_EDGE_PADDING + BEAK_SIZE + BEAK_ROTATE_OFFSET);
                                }
                            }
                        };
                        var calloutPositioningProxy = {
                            isOpening: function() {
                            ULSIU5:
                                ;
                                return that.isOpening();
                            },
                            isTopBottomBeak: function() {
                            ULSIU5:
                                ;
                                return isBeakTopBottom;
                            },
                            isRTL: m_isRTL,
                            moveUpAndLeft: function() {
                            ULSIU5:
                                ;
                                calloutIsLeft = true;
                                calloutIsUp = true;
                                calculateCalloutPosition();
                            },
                            moveUpAndRight: function() {
                            ULSIU5:
                                ;
                                calloutIsLeft = false;
                                calloutIsUp = true;
                                calculateCalloutPosition();
                            },
                            moveDownAndLeft: function() {
                            ULSIU5:
                                ;
                                calloutIsLeft = true;
                                calloutIsUp = false;
                                calculateCalloutPosition();
                            },
                            moveDownAndRight: function() {
                            ULSIU5:
                                ;
                                calloutIsLeft = false;
                                calloutIsUp = false;
                                calculateCalloutPosition();
                            },
                            flipHorizontal: function() {
                            ULSIU5:
                                ;
                                calloutIsLeft = !calloutIsLeft;
                                calculateCalloutPosition();
                            },
                            flipVertical: function() {
                            ULSIU5:
                                ;
                                calloutIsUp = !calloutIsUp;
                                calculateCalloutPosition();
                            },
                            getCalloutAbsLeft: function() {
                            ULSIU5:
                                ;
                                return Math.floor(calloutLeft);
                            },
                            getCalloutAbsRight: function() {
                            ULSIU5:
                                ;
                                return Math.floor(calloutLeft + calloutOffsetWidth);
                            },
                            getCalloutAbsTop: function() {
                            ULSIU5:
                                ;
                                return Math.floor(calloutTop);
                            },
                            getCalloutAbsBottom: function() {
                            ULSIU5:
                                ;
                                return Math.floor(calloutTop + calloutOffsetHeight);
                            },
                            isCalloutTooFarLeft: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsLeft() < boundingBoxAbsLeft;
                            },
                            isCalloutTooFarRight: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsRight() > boundingBoxAbsRight;
                            },
                            isCalloutTooFarTop: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsTop() < boundingBoxAbsTop;
                            },
                            isCalloutTooFarBottom: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsBottom() > boundingBoxAbsBottom;
                            },
                            isCalloutLeftOfHardBoundingBox: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsLeft() < hardBoundingBoxOffset.left;
                            },
                            isCalloutRightOfHardBoundingBox: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsRight() > hardBoundingBoxOffset.right;
                            },
                            isCalloutAboveHardBoundingBox: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsTop() < hardBoundingBoxOffset.top;
                            },
                            isCalloutBelowHardBoundingBox: function() {
                            ULSIU5:
                                ;
                                return this.getCalloutAbsBottom() > hardBoundingBoxOffset.bottom;
                            },
                            numberOfEdgesCollidingWithBoundingBox: function() {
                            ULSIU5:
                                ;
                                var edgesColliding = 0;

                                if (this.isCalloutTooFarRight())
                                    edgesColliding++;
                                if (this.isCalloutTooFarTop())
                                    edgesColliding++;
                                if (this.isCalloutTooFarLeft())
                                    edgesColliding++;
                                if (this.isCalloutTooFarBottom())
                                    edgesColliding++;
                                return edgesColliding;
                            },
                            moveTowardsOppositeQuadrant: function() {
                            ULSIU5:
                                ;
                                var launchPointAbsVerticalCenter = launchPointAbsTop + launchPointHeight / 2;
                                var launchPointAbsHorizontalCenter = launchPointAbsLeft + launchPointWidth / 2;
                                var boundingBoxAbsHorizontalCenter = boundingBoxAbsLeft + (boundingBoxAbsRight - boundingBoxAbsLeft) / 2;
                                var boundingBoxAbsVerticalCenter = boundingBoxAbsTop + (boundingBoxAbsBottom - boundingBoxAbsTop) / 2;

                                if (launchPointAbsHorizontalCenter < boundingBoxAbsHorizontalCenter && launchPointAbsVerticalCenter < boundingBoxAbsVerticalCenter)
                                    this.moveDownAndRight();
                                else if (launchPointAbsHorizontalCenter > boundingBoxAbsHorizontalCenter && launchPointAbsVerticalCenter < boundingBoxAbsVerticalCenter)
                                    this.moveDownAndLeft();
                                else if (launchPointAbsHorizontalCenter < boundingBoxAbsHorizontalCenter && launchPointAbsVerticalCenter > boundingBoxAbsVerticalCenter)
                                    this.moveUpAndRight();
                                else if (launchPointAbsHorizontalCenter > boundingBoxAbsHorizontalCenter && launchPointAbsVerticalCenter > boundingBoxAbsVerticalCenter)
                                    this.moveUpAndLeft();
                            },
                            isOrientedUp: function() {
                            ULSIU5:
                                ;
                                return calloutIsUp;
                            },
                            isOrientedDown: function() {
                            ULSIU5:
                                ;
                                return !calloutIsUp;
                            },
                            isOrientedLeft: function() {
                            ULSIU5:
                                ;
                                return calloutIsLeft;
                            },
                            isOrientedRight: function() {
                            ULSIU5:
                                ;
                                return !calloutIsLeft;
                            }
                        };
                        var calloutLastAbsOffset = (m$(m_calloutElement)).offset();
                        var calloutLastAbsLeft = calloutLastAbsOffset.left;
                        var calloutLastAbsTop = calloutLastAbsOffset.top;

                        m_options.positionAlgorithm(calloutPositioningProxy);
                        if (calloutTop !== null && calloutLeft !== null) {
                            var moveTheCallout = Math.abs(calloutLastAbsLeft - calloutLeft) > 3 || Math.abs(calloutLastAbsTop - calloutTop) > 3;

                            if (moveTheCallout) {
                                (m$(m_calloutElement)).offset({
                                    left: calloutLeft,
                                    top: calloutTop
                                });
                                calloutLastAbsLeft = calloutLeft;
                                calloutLastAbsTop = calloutTop;
                                m_orientation = {
                                    up: calloutIsUp,
                                    left: calloutIsLeft
                                };
                            }
                        }
                        var launchPointLastAbsOffset = (m$(m_launchPoint)).offset();

                        launchPointLastAbsLeft = launchPointLastAbsOffset.left;
                        launchPointLastAbsTop = launchPointLastAbsOffset.top;
                        var newLaunchPointAbsVerticalCenter = launchPointLastAbsTop + launchPointHeight / 2;
                        var newLaunchPointAbsHorizontalCenter = launchPointLastAbsLeft + launchPointWidth / 2;

                        if (isBeakTopBottom) {
                            var beakLeftPosition = newLaunchPointAbsHorizontalCenter - Math.floor(calloutLastAbsLeft) - BEAK_SIDE;

                            m_beakTop.css({
                                left: numToPx(beakLeftPosition)
                            });
                            m_beakBottom.css({
                                left: numToPx(beakLeftPosition)
                            });
                            if ((that.getOrientation()).up) {
                                m_beakTop.css({
                                    visibility: "hidden"
                                });
                                m_beakBottom.css({
                                    visibility: "visible"
                                });
                            }
                            else {
                                m_beakTop.css({
                                    visibility: "visible"
                                });
                                m_beakBottom.css({
                                    visibility: "hidden"
                                });
                            }
                        }
                        else {
                            var beakTopPosition = newLaunchPointAbsVerticalCenter - Math.floor(calloutLastAbsTop) - BEAK_SIDE;

                            m_beakLeftRight.css({
                                top: beakTopPosition.toString() + "px"
                            });
                            if ((that.getOrientation()).left) {
                                (m_beakLeftRight.removeClass("js-callout-beakLeft")).addClass("js-callout-beakRight");
                            }
                            else {
                                (m_beakLeftRight.removeClass("js-callout-beakRight")).addClass("js-callout-beakLeft");
                            }
                        }
                    };
                    var isLaunchPointTooFarAwayFromCallout = function() {
                    ULSIU5:
                        ;
                        var launchPointAbsOffset = (m$(m_launchPoint)).offset();

                        return Math.abs(launchPointAbsOffset.left - launchPointLastAbsLeft) > 20 || Math.abs(launchPointAbsOffset.top - launchPointLastAbsTop) > 20;
                    };
                    var throttledMove = m$.throttle(performMove, 100);

                    return function(forceMove) {
                    ULSIU5:
                        ;
                        if (!(m$(document.body)).contains(m_calloutElement) || !(m$(document.body)).contains(m_launchPoint)) {
                            that.close();
                            return;
                        }
                        if (m$.isDefined(forceMove) && forceMove === true || isLaunchPointTooFarAwayFromCallout())
                            performMove.apply(that, arguments);
                        else
                            throttledMove();
                    };
                })();
                var moveToTargetUnthrottled = function() {
                ULSIU5:
                    ;
                    moveToTarget(true);
                };

                this.set(members);
                m_isInitialized = true;
            };
            Callout.GenerateDefaultContents = function(id, titleMarkup, subtitleMarkup, bodyMarkup, includeCloseButton, includeActionsArea) {
                var coiid = 'co' + id + '_callout';
                var ret = [];
                var headerStr = Callout.GenerateDefaultHeader(coiid, titleMarkup, subtitleMarkup, includeCloseButton);

                if (m$.isDefinedAndNotNull(headerStr)) {
                    ret.push(headerStr);
                }
                ret.push(Callout.GenerateDefaultBody(coiid, bodyMarkup));
                if (includeActionsArea) {
                    var footerStr = Callout.GenerateDefaultFooter(coiid, null);

                    if (m$.isDefinedAndNotNull(footerStr)) {
                        ret.push(footerStr);
                    }
                }
                return ret.join('');
            };
            Callout.GenerateDefaultHeader = function(coiid, title, subtitle, includeCloseButton) {
                var ret = [];

                ret.push('<div class="js-callout-headerArea" id=' + StAttrQuote(coiid + '-Header') + ' >');
                if (includeCloseButton) {
                    ret.push('<a class="js-callout-closeButton" href="#" onclick="CalloutManager.getFromCalloutDescendant(this).close(/*useAnimation=*/false); return false;" id=' + StAttrQuote(coiid + '-close') + ' title=' + StAttrQuote(Strings.STS.L_CalloutClose) + '>');
                    ret.push('<img class="js-callout-closeButtonImage" src=' + GetThemedImageUrl("spcommon.png") + ' alt=' + StAttrQuote(Strings.STS.L_CalloutClose) + ' title=' + StAttrQuote(Strings.STS.L_CalloutClose) + ' />');
                    ret.push('</a>');
                }
                ret.push('<div class="ms-metadata js-callout-usage" style="display:none;" id=' + StAttrQuote(coiid + '-Usage') + '>');
                ret.push('</div>');
                ret.push('<div class="js-callout-header-noWrap" id=' + StAttrQuote(coiid + '-HeaderNoWrap') + ' >');
                ret.push('<span class="js-callout-markArea" id=' + StAttrQuote(coiid + '-MarkArea') + '></span>');
                if (m$.isDefinedAndNotNull(title) && title !== "") {
                    ret.push('<h2 class="js-callout-title ms-dlg-heading" id=' + StAttrQuote(coiid + '-Title') + '>');
                    ret.push(title);
                    ret.push('</h2>');
                }
                if (m$.isDefinedAndNotNull(subtitle) && subtitle !== "") {
                    ret.push('<div class="ms-metadata js-callout-subtitle" id=' + StAttrQuote(coiid + '-Subtitle') + '>');
                    ret.push(subtitle);
                    ret.push('</div>');
                }
                ret.push('</div>');
                ret.push('</div>');
                return ret.join('');
            };
            Callout.GenerateDefaultBody = function(coiid, bodyMarkup) {
                var ret = [];

                ret.push('<div class="js-callout-body"  id="' + coiid + '-body' + '">');
                if (m$.isDefinedAndNotNull(bodyMarkup) && bodyMarkup !== "") {
                    ret.push(bodyMarkup);
                }
                ret.push('</div>');
                return ret.join('');
            };
            Callout.GenerateDefaultFooter = function(coiid, additionalMarkup) {
                var ret = [];

                ret.push('<div class="js-callout-footerArea" id=' + StAttrQuote(coiid + '-Footer') + '>');
                ret.push('<span id=' + StAttrQuote(coiid + '-actions') + ' class="js-callout-actions js-callout-actionsMain"><span></span></span>');
                ret.push(additionalMarkup);
                ret.push('</div>');
                return ret.join('');
            };
            Callout.GenerateDefaultSection = function(sectionHeaderText, sectionMarkup) {
                if (sectionMarkup === "")
                    return sectionMarkup;
                var ret = [];

                ret.push('<div class="js-callout-bodySection">');
                if (sectionHeaderText !== null)
                    ret.push('<h3 class="js-callout-bodySectionHeader ms-soften">', STSHtmlEncode(sectionHeaderText), '</h3>');
                ret.push(sectionMarkup);
                ret.push('</div>');
                return ret.join('');
            };
            function defaultPositionAlgorithm(c) {
                if (c.isTopBottomBeak() || c.isOpening()) {
                    if (!c.isRTL) {
                        c.moveUpAndRight();
                        if (c.isCalloutTooFarRight()) {
                            c.moveUpAndLeft();
                            if (c.isCalloutTooFarTop()) {
                                c.moveDownAndLeft();
                            }
                        }
                        if (c.isCalloutTooFarTop()) {
                            c.moveDownAndRight();
                        }
                    }
                    else {
                        c.moveUpAndLeft();
                        if (c.isCalloutTooFarLeft()) {
                            c.moveUpAndRight();
                            if (c.isCalloutTooFarTop()) {
                                c.moveDownAndRight();
                            }
                        }
                        if (c.isCalloutTooFarTop()) {
                            c.moveDownAndLeft();
                        }
                    }
                    if (c.numberOfEdgesCollidingWithBoundingBox() >= 2) {
                        c.moveTowardsOppositeQuadrant();
                    }
                    if (!c.isRTL && c.isCalloutLeftOfHardBoundingBox() && c.isOrientedLeft() || c.isRTL && c.isCalloutRightOfHardBoundingBox() && c.isOrientedRight()) {
                        c.flipHorizontal();
                    }
                    if (c.isCalloutAboveHardBoundingBox() && c.isOrientedUp()) {
                        c.flipVertical();
                    }
                }
            }
            ;
            Callout.prototype.isOpen = undefined;
            Callout.prototype.isOpening = undefined;
            Callout.prototype.close = undefined;
            Callout.prototype.getActionMenu = undefined;
            Callout.prototype.getBeakOrientation = undefined;
        })();
        (function() {
        ULSIU5:
            ;
            CalloutActionOptions = function() {
            };
            CalloutActionOptions.prototype = {
                text: null,
                tooltip: "",
                disabledTooltip: "",
                onClickCallback: null,
                isEnabledCallback: null,
                isVisibleCallback: null,
                menuEntries: null
            };
            onCalloutActionMenuEntryClick = function(calloutActionMenuEntryID) {
            ULSIU5:
                ;
                var menuEntry = document.getElementById(calloutActionMenuEntryID);

                if (m$.isDefinedAndNotNull(menuEntry) && menuEntry['calloutActionMenuEntryCallback']) {
                    menuEntry['calloutActionMenuEntryCallback'](menuEntry["calloutAction"], menuEntry["calloutActionMenuEntryIndex"]);
                }
            };
            CalloutActionMenuEntry = function(text, onClickCallback, wzISrc, wzIAlt, wzISeq, wzDesc) {
                this.text = text;
                this.onClickCallback = onClickCallback;
                this.wzISrc = wzISrc;
                this.wzIAlt = wzIAlt;
                this.wzISeq = wzISeq;
                this.wzDesc = wzDesc;
            };
            CalloutAction = function(members) {
                var that = this;
                var m_options = new CalloutActionOptions();
                var m_menu = null;
                var m_callout = null;

                this.getText = function() {
                ULSIU5:
                    ;
                    return m_options.text;
                };
                this.getToolTip = function() {
                ULSIU5:
                    ;
                    return m_options.tooltip;
                };
                this.getDisabledToolTip = function() {
                ULSIU5:
                    ;
                    return m_options.disabledTooltip;
                };
                this.getOnClickCallback = function() {
                ULSIU5:
                    ;
                    return m_options.onClickCallback;
                };
                this.getIsEnabledCallback = function() {
                ULSIU5:
                    ;
                    return m_options.isEnabledCallback;
                };
                this.getIsVisibleCallback = function() {
                ULSIU5:
                    ;
                    return m_options.isVisibleCallback;
                };
                this.getIsMenu = function() {
                ULSIU5:
                    ;
                    return isMenu(m_options);
                };
                this.getMenuEntries = function() {
                ULSIU5:
                    ;
                    return m_options.menuEntries;
                };
                this.render = function() {
                ULSIU5:
                    ;
                    m_menu = null;
                    var calloutActionElement = document.createElement("span");

                    calloutActionElement.className = "js-callout-action";
                    var linkAction = document.createElement("a");

                    linkAction.setAttribute("href", "#");
                    linkAction.onclick = function() {
                    ULSIU5:
                        ;
                        return false;
                    };
                    linkAction.className = "ms-calloutLink";
                    var isEllipsisImage = m$.isUndefinedOrNull(m_options.text);
                    var isLinkMenu = that.getIsMenu();
                    var isEnabled = this.isEnabled() === true;

                    if (isEllipsisImage) {
                        linkAction.title = Strings.STS.L_OpenMenu_Text;
                        linkAction.innerHTML = '<img class="js-ellipsis25-icon" src="' + GetThemedImageUrl("spcommon.png") + '" alt="' + STSHtmlEncode(Strings.STS.L_OpenMenu) + '" />';
                        linkAction.className += " js-ellipsis25-a";
                    }
                    else {
                        linkAction.appendChild(document.createTextNode(m_options.text));
                        if (isLinkMenu) {
                            var downArrowImg = document.createElement("img");

                            downArrowImg.src = GetThemedImageUrl("ecbarw.png");
                            downArrowImg.alt = Strings.STS.L_OpenMenu_Text;
                            downArrowImg.className = "js-callout-ecbActionDownArrow";
                            linkAction.appendChild(downArrowImg);
                        }
                    }
                    if (isEnabled) {
                        linkAction.className += " ms-calloutLinkEnabled";
                        if (m$.isDefinedAndNotNull(m_options.tooltip) && m_options.tooltip !== "")
                            linkAction.setAttribute("title", m_options.tooltip);
                    }
                    else {
                        linkAction.className += " ms-calloutLinkDisabled";
                        if (m$.isDefinedAndNotNull(m_options.disabledTooltip) && m_options.disabledTooltip !== "")
                            linkAction.setAttribute("title", m_options.disabledTooltip);
                    }
                    if (isEnabled) {
                        if (!isLinkMenu) {
                            (m$(linkAction)).click(function(evt) {
                            ULSIU5:
                                ;
                                m_options.onClickCallback(evt, that);
                            });
                        }
                        else {
                            if (!m$.isNull(m_options.menuEntries)) {
                                (m$(linkAction)).click(function(evtNotUsed) {
                                ULSIU5:
                                    ;
                                    EnsureScriptFunc("core.js", "CMenu", function() {
                                    ULSIU5:
                                        ;
                                        if (m$.isNull(m_menu)) {
                                            var menuId = generateMenuId();
                                            var menuDomId = "calloutActionMenu_" + String(menuId);

                                            m_menu = CMenu(menuDomId);
                                            m_menu.setAttribute("hideicons", "true");
                                            m$.forEach(m_options.menuEntries, function(menuEntry, menuEntryIndex) {
                                                var menuEntryID = "calloutActionMenuEntry_menuId[" + menuId + "]_menuEntryIndex[" + String(menuEntryIndex) + "]";
                                                var menuEntryElement = CAMOpt(m_menu, menuEntry.text, "onCalloutActionMenuEntryClick('" + menuEntryID + "')", menuEntry.wzISrc, menuEntry.wzIAlt, menuEntry.wzISeq, menuEntry.wzDesc);

                                                menuEntryElement.id = menuEntryID;
                                                menuEntryElement["calloutActionMenuEntryIndex"] = menuEntryIndex;
                                                menuEntryElement["calloutActionMenuEntryCallback"] = menuEntry.onClickCallback;
                                                menuEntryElement["calloutAction"] = that;
                                            });
                                        }
                                        OMenu(m_menu, calloutActionElement, undefined, false);
                                    });
                                });
                            }
                            (m$(calloutActionElement)).addClass("js-callout-menuAction");
                        }
                    }
                    calloutActionElement.appendChild(linkAction);
                    return calloutActionElement;
                };
                this.isEnabled = function() {
                ULSIU5:
                    ;
                    if (!m$.isFunction(m_options.isEnabledCallback))
                        return true;
                    return m_options.isEnabledCallback(that) === true;
                };
                this.isVisible = function() {
                ULSIU5:
                    ;
                    if (!m$.isFunction(m_options.isVisibleCallback))
                        return true;
                    return m_options.isVisibleCallback(that) === true;
                };
                this.set = function(options) {
                    if (m$.isUndefinedOrNull(options)) {
                        throw "CalloutAction: Input parameter must be defined";
                    }
                    validateSubsetOfOptions(options, CalloutActionOptions.prototype);
                    var proposedOptions = m$.extend(true, {}, m_options, options);

                    if (!isMenu(proposedOptions)) {
                        if (!m$.isString(proposedOptions.text)) {
                            throw "CalloutAction: Required property must be defined on non-menu callout actions: text";
                        }
                        if (!m$.isFunction(proposedOptions.onClickCallback)) {
                            throw "CalloutAction: Must define onClickCallback on non-menu callout actions";
                        }
                    }
                    else {
                        if (m$.isFunction(proposedOptions.onClickCallback)) {
                            throw "CalloutAction: Must NOT define onClickCallback on menu callout actions";
                        }
                        var isMenuEntriesValid = m$.every(proposedOptions.menuEntries, function(menuEntry) {
                            return m$.isDefinedAndNotNull(menuEntry) && m$.isString(menuEntry.text) && m$.isFunction(menuEntry.onClickCallback);
                        });

                        if (!isMenuEntriesValid) {
                            throw "CalloutAction: Required property appears invalid: menuEntries";
                        }
                    }
                    m_options = proposedOptions;
                };
                var isMenu = function(options) {
                    return m$.isDefinedAndNotNull(options.menuEntries) && m$.isArray(options.menuEntries) && options.menuEntries.length > 0;
                };

                this.set(members);
            };
            CalloutActionMenu = function(actionsId) {
            ULSIU5:
                ;
                var m_actions = [];
                var m_calloutActionsElement = null;
                var m_actionsId = actionsId;

                this.addAction = function(calloutAction) {
                    m_actions.push(calloutAction);
                    return calloutAction;
                };
                this.getActions = function() {
                ULSIU5:
                    ;
                    return m_actions;
                };
                this.render = function() {
                ULSIU5:
                    ;
                    if (m_actions.length > 0) {
                        m_calloutActionsElement = document.getElementById(m_actionsId);
                        var visibleActions = m$.filter(m_actions, function(action) {
                            return action.isVisible();
                        });
                        var swapSpan = document.createElement("span");

                        for (var i = 0; i < visibleActions.length; i++) {
                            swapSpan.appendChild(visibleActions[i].render());
                        }
                        (m$(m_calloutActionsElement)).empty();
                        m_calloutActionsElement.appendChild(swapSpan);
                    }
                };
                this.refreshActions = function() {
                ULSIU5:
                    ;
                    if (m$.isElement(m_calloutActionsElement)) {
                        (m$(m_calloutActionsElement)).empty();
                    }
                    this.render();
                };
                this.calculateActionWidth = function() {
                ULSIU5:
                    ;
                    var totalWidth = 0;
                    var actions = this.getActions();
                    var elements = [];

                    for (var i = 0; i < actions.length; i++) {
                        if (actions[i].isVisible()) {
                            var element = actions[i].render();

                            document.body.appendChild(element);
                            elements.push(element);
                        }
                    }
                    for (i = 0; i < elements.length; i++) {
                        totalWidth += elements[i].offsetWidth + 1;
                        totalWidth += parseInt((m$(elements[i])).css("marginLeft"), 10);
                        totalWidth += parseInt((m$(elements[i])).css("marginRight"), 10);
                    }
                    for (i = 0; i < elements.length; i++) {
                        document.body.removeChild(elements[i]);
                    }
                    var paddingLeft = 20;
                    var paddingRight = 20;
                    var footers = m$(".js-callout-footerArea");

                    if (footers.length > 0) {
                        var firstFooter = (m$(".js-callout-footerArea"))[0];

                        paddingLeft = parseInt((m$(firstFooter)).css("paddingLeft"), 10);
                        paddingRight = parseInt((m$(firstFooter)).css("paddingRight"), 10);
                    }
                    totalWidth += paddingLeft + paddingRight;
                    return Math.min(Math.max(totalWidth, CalloutOptions.CALLOUT_MINIMUM_WIDTH), CalloutOptions.CALLOUT_MAXIMUM_WIDTH);
                };
            };
            var generateMenuId = (function() {
            ULSIU5:
                ;
                var incrementedId = 0;

                return function() {
                ULSIU5:
                    ;
                    return incrementedId++;
                };
            })();
        })();
        (function() {
        ULSIU5:
            ;
            var CALLOUT_OBJECT_KEY = "calloutObject-{7DA0B2C5-5A3A-46CD-9FDD-B7A71576AB29}";
            var CALLOUT_LAUNCHPOINT_CLASS = "js-callout-launchPoint";
            var CALLOUT_LAUNCHPOINT_SELECTOR = "." + CALLOUT_LAUNCHPOINT_CLASS;

            calloutManager = (CalloutManager = {
                createNew: function(members) {
                    var callout;

                    if (m$.isUndefinedOrNull(members.ID)) {
                        throw 'CalloutManager: Required property must be defined: ID';
                    }
                    if (m$.isUndefinedOrNull(members.launchPoint)) {
                        throw 'CalloutManager: Required property must be defined: launchPoint';
                    }
                    var launchPoint = members.launchPoint;

                    callout = (m$(launchPoint)).data(CALLOUT_OBJECT_KEY);
                    if (m$.isDefinedAndNotNull(callout)) {
                        throw 'calloutManager: launchPoint given is already associated with a callout';
                    }
                    callout = new Callout(members);
                    (m$(launchPoint)).data(CALLOUT_OBJECT_KEY, callout);
                    (m$(launchPoint)).addClass(CALLOUT_LAUNCHPOINT_CLASS);
                    return callout;
                },
                createNewIfNecessary: function(members) {
                    var launchPoint = members.launchPoint;
                    var callout = CalloutManager.getFromLaunchPointIfExists(launchPoint);

                    if (callout === null) {
                        callout = CalloutManager.createNew(members);
                    }
                    return callout;
                },
                remove: function(callout) {
                    var launchPoint = callout.getLaunchPoint();

                    (m$(launchPoint)).removeData(CALLOUT_OBJECT_KEY);
                    (m$(launchPoint)).removeClass(CALLOUT_LAUNCHPOINT_CLASS);
                    callout.destroy();
                },
                getFromLaunchPoint: function(launchPoint) {
                    var callout = CalloutManager.getFromLaunchPointIfExists(launchPoint);

                    if (m$.isUndefinedOrNull(callout)) {
                        throw "Error: Argument has no callout associated with it.";
                    }
                    return callout;
                },
                getFromLaunchPointIfExists: function(launchPoint) {
                    var callout = (m$(launchPoint)).data(CALLOUT_OBJECT_KEY);

                    return m$.isUndefinedOrNull(callout) ? null : callout;
                },
                containsOneCalloutOpen: function(ancestor) {
                    var calloutLaunchPoints = (m$(ancestor)).find(CALLOUT_LAUNCHPOINT_SELECTOR);

                    if (calloutLaunchPoints.length !== 1) {
                        return false;
                    }
                    var callout = CalloutManager.getFromLaunchPoint(calloutLaunchPoints[0]);

                    return callout != null && (callout.isOpen() || callout.isOpening());
                },
                getFromCalloutDescendant: function(descendant) {
                    var calloutElement = ((m$(descendant)).closest(CALLOUT_ELEMENT_SELECTOR))[0];

                    if (m$.isUndefinedOrNull(calloutElement)) {
                        throw "Error: Argument is not a descendant of a callout element.";
                    }
                    var launchPoint = (m$(calloutElement)).data(LAUNCHPOINT_OBJECT_KEY);

                    if (m$.isUndefinedOrNull(launchPoint)) {
                        throw "Error: Cannot locate Callout's launchPoint";
                    }
                    return CalloutManager.getFromLaunchPoint(launchPoint);
                },
                forEach: function(fn) {
                    (m$(CALLOUT_LAUNCHPOINT_SELECTOR)).forEach(function(launchPoint) {
                        fn(CalloutManager.getFromLaunchPoint(launchPoint));
                    });
                },
                closeAll: function() {
                ULSIU5:
                    ;
                    var atLeastOneClosed = false;

                    CalloutManager.forEach(function(callout) {
                        if (callout.close()) {
                            atLeastOneClosed = true;
                        }
                    });
                    return atLeastOneClosed;
                },
                isAtLeastOneCalloutOpen: function() {
                ULSIU5:
                    ;
                    var isAtLeastOneOpen = false;

                    CalloutManager.forEach(function(callout) {
                        if (callout.isOpen()) {
                            isAtLeastOneOpen = true;
                        }
                    });
                    return isAtLeastOneOpen;
                },
                isAtLeastOneCalloutOn: function() {
                ULSIU5:
                    ;
                    var isAtLeastOneOn = false;

                    CalloutManager.forEach(function(callout) {
                        if (callout.isOpen() || callout.isOpening()) {
                            isAtLeastOneOn = true;
                        }
                    });
                    return isAtLeastOneOn;
                }
            });
        })();
        notifyScriptsLoadedAndExecuteWaitingJobs("callout.js");
    })();
}
function ULSIU5() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "callout.commentedjs";
    return o;
}
var Callout;
var calloutManager;
var CalloutManager;
var CalloutOpenOptions;
var CalloutOptions;
var CalloutAction;
var CalloutActionOptions;
var CalloutActionMenu;
var CalloutActionMenuEntry;
var onCalloutActionMenuEntryClick;

$_global_callout();
