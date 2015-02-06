function $_global_mquery() {
    (function() {
        if (typeof m$ !== "undefined") {
            return;
        }
        var mQueryArrayMethods = (function() {
            var getArrayStartingIndex = function(startIndex, fallback, arrayLength) {
                var startLocal;

                if (typeof startIndex !== "undefined") {
                    if (typeof startIndex !== "number") {
                        throw TypeError("Starting index must be a number.");
                    }
                    startLocal = startIndex;
                }
                else {
                    startLocal = fallback;
                }
                if (startLocal < 0) {
                    startLocal += arrayLength;
                }
                return startLocal;
            };

            return {
                indexOf: function(element, startIndex) {
                    var len = this.length;
                    var startLocal = getArrayStartingIndex(startIndex, 0, len);

                    for (var i = startLocal; i < len; ++i) {
                        if (element === this[i])
                            return i;
                    }
                    return -1;
                },
                lastIndexOf: function(element, startIndex) {
                    var len = this.length;
                    var startLocal = getArrayStartingIndex(startIndex, len - 1, len);

                    for (var i = startLocal; i >= 0; --i) {
                        if (element === this[i])
                            return i;
                    }
                    return -1;
                },
                filter: function(fn, context) {
                    var resultSet = [];

                    mQueryArrayMethods.forEach.call(this, function(value) {
                        if (fn.apply(context, arguments)) {
                            resultSet.push(value);
                        }
                    });
                    return resultSet;
                },
                forEach: function(fn, context) {
                    var len = this.length;

                    for (var i = 0; i < len; ++i) {
                        fn.call(context, this[i], i, this);
                    }
                },
                every: function(fn, context) {
                    var len = this.length;

                    for (var i = 0; i < len; ++i) {
                        if (!fn.call(context, this[i], i, this))
                            return false;
                    }
                    return true;
                },
                map: function(fn, context) {
                    var resultSet = [];

                    mQueryArrayMethods.forEach.call(this, function() {
                        resultSet.push(fn.apply(context, arguments));
                    });
                    return resultSet;
                },
                some: function(fn, context) {
                    var len = this.length;

                    for (var i = 0; i < len; ++i) {
                        if (fn.call(context, this[i], i, this))
                            return true;
                    }
                    return false;
                }
            };
        })();
        var mQueryObjectMethods = {
            filter: function(fn, context) {
                var newObj = {};

                mQueryObjectMethods.forEach.call(this, function(property, value) {
                    if (fn.apply(context, arguments)) {
                        newObj[property] = value;
                    }
                });
                return newObj;
            },
            forEach: function(fn, callingContext) {
                for (var property in this) {
                    fn.call(callingContext, property, this[property], this);
                }
            },
            every: function(fn, context) {
                for (var property in this) {
                    if (!fn.call(context, property, this[property], this))
                        return false;
                }
                return true;
            },
            map: function(fn, callingContext) {
                var newObj = {};

                for (var property in this) {
                    newObj[property] = fn.call(callingContext, property, this[property], this);
                }
                return newObj;
            },
            some: function(fn, callingContext) {
                for (var property in this) {
                    if (fn.call(callingContext, property, this[property], this)) {
                        return true;
                    }
                }
                return false;
            }
        };

        MQueryResultSet = function() {
            this.push.apply(this, arguments);
        };
        MQueryResultSet.prototype = [];
        MQueryResultSet.prototype.constructor = MQueryResultSet;
        MQueryResultSet.prototype.append = function(content) {
            if (m$.isNode(content)) {
                return this.map(function(element) {
                    element.appendChild(content);
                });
            }
            else if (m$.isMQueryResultSet(content)) {
                content.forEach(function(element) {
                    this.append(element);
                }, this);
                return this;
            }
            else if (m$.isString(content)) {
                return this.map(function(element) {
                    element.insertAdjacentHTML("beforeend", content);
                });
            }
            else {
                throw "Invalid Argument";
            }
        };
        MQueryResultSet.prototype.bind = function(bindEvent, handler) {
            this.forEach(function(domElement) {
                (MQueryEvents.eventBinder(bindEvent, domElement)).bind(domElement, bindEvent, handler);
            });
            return this;
        };
        MQueryResultSet.prototype.unbind = function(unbindEvent, handler) {
            this.forEach(function(domElement) {
                (MQueryEvents.eventBinder(unbindEvent, domElement)).unbind(domElement, unbindEvent, handler);
            });
            return this;
        };
        MQueryResultSet.prototype.trigger = function(triggerEvent) {
            if (this.length === 0)
                return this;
            var triggerFn = (MQueryEvents.eventBinder(triggerEvent, this[0])).trigger;

            Array.prototype.splice.call(arguments, 0, 0, null);
            var args = arguments;

            this.forEach(function(domElement) {
                args[0] = domElement;
                triggerFn.apply(domElement, args);
            });
            return this;
        };
        MQueryResultSet.prototype.contains = (function() {
            var comparisonFunction;
            var isCompareDocumentPositionAvailable = typeof HTMLElement !== "undefined" && typeof HTMLElement.prototype !== "undefined" && typeof HTMLElement.prototype.compareDocumentPosition === "function";

            if (isCompareDocumentPositionAvailable) {
                comparisonFunction = function(element, contained) {
                    return (element.compareDocumentPosition(contained) & element.DOCUMENT_POSITION_CONTAINED_BY) !== 0;
                };
            }
            else {
                comparisonFunction = function(element, contained) {
                    return this.contains(contained.parentNode);
                };
            }
            return function(contained) {
                var element = this[0];

                return typeof contained !== "undefined" && contained !== null && (contained === element || comparisonFunction.call(this, element, contained));
            };
        })();
        MQueryResultSet.prototype.detach = function() {
            return this.map(removeDomNode);
        };
        MQueryResultSet.prototype.find = function(selector) {
            var resultSet = new MQueryResultSet();

            this.forEach(function(domElement) {
                var nodeList;

                if (selector === ":root")
                    nodeList = document.querySelectorAll("html");
                else if (m$.isDefinedAndNotNull(domElement.querySelectorAll))
                    nodeList = domElement.querySelectorAll(selector);
                else
                    throw "Unsupported browser.";
                appendNodeListToResultSet(resultSet, nodeList);
            });
            return resultSet;
        };
        MQueryResultSet.prototype.closest = function(selector, context) {
            var resultSet = new MQueryResultSet();

            this.some(function(domElement) {
                var candidates = m$(selector, context);
                var parentElement = domElement;

                while (parentElement !== null) {
                    var indexOfParent = candidates.indexOf(parentElement);

                    if (indexOfParent !== -1) {
                        resultSet.push(candidates[indexOfParent]);
                        return true;
                    }
                    else {
                        parentElement = parentElement.parentNode;
                    }
                }
                return false;
            });
            return resultSet;
        };
        MQueryResultSet.prototype.offset = function(coordinates) {
            if (m$.isUndefined(coordinates)) {
                if (this.length === 0)
                    return null;
                var domElement = this[0];

                if (!(m$(":root")).contains(domElement)) {
                    return {
                        left: 0,
                        top: 0
                    };
                }
                if (!m$.isDefinedAndNotNull(domElement.getBoundingClientRect))
                    throw "Unsupported browser.";
                var clientRect = domElement.getBoundingClientRect();
                var offsetCoordinates = {
                    left: clientRect.left,
                    top: clientRect.top,
                    bottom: clientRect.bottom,
                    right: clientRect.right
                };

                if (m$.isNumber(window.pageXOffset)) {
                    offsetCoordinates.left += window.pageXOffset;
                }
                else if (m$.isDefinedAndNotNull(document.documentElement) && m$.isNumber(document.documentElement.scrollLeft)) {
                    offsetCoordinates.left += document.documentElement.scrollLeft;
                }
                else {
                    throw "Unsupported browser.";
                }
                if (m$.isNumber(window.pageYOffset)) {
                    offsetCoordinates.top += window.pageYOffset;
                }
                else if (m$.isDefinedAndNotNull(document.documentElement) && m$.isNumber(document.documentElement.scrollTop)) {
                    offsetCoordinates.top += document.documentElement.scrollTop;
                }
                else {
                    throw "Unsupported browser.";
                }
                return offsetCoordinates;
            }
            else {
                this.forEach(function(domEl) {
                    Sys.Debug.assert((m$(domEl)).css("position") === "absolute", "Cannot set coordinates of an element that isn't absolutely positioned.");
                    var elementOffset = (m$(domEl)).offset();
                    var setCoordinate = function(prop) {
                        if (coordinates[prop] !== elementOffset[prop]) {
                            var currentPosition = 0;

                            if (domEl.style[prop] === "" || domEl.style[prop] === "auto") {
                                domEl.style[prop] = "0px";
                                elementOffset = (m$(domEl)).offset();
                            }
                            else {
                                currentPosition = pxToNum(domEl.style[prop]);
                            }
                            var newPosition = coordinates[prop] - elementOffset[prop] + currentPosition;

                            domEl.style[prop] = String(newPosition) + "px";
                            Sys.Debug.assert(Math.abs(((m$(domEl)).offset())[prop] - coordinates[prop]) < 2);
                        }
                    };

                    setCoordinate("left");
                    setCoordinate("top");
                });
                return this;
            }
        };
        MQueryResultSet.prototype.one = function(bindEvent, handler) {
            var that = this;
            var oneTimeCallback = function() {
                that.unbind(bindEvent, oneTimeCallback);
                handler.apply(this, arguments);
            };

            that.bind(bindEvent, oneTimeCallback);
            return that;
        };
        MQueryResultSet.prototype.filter = function(selectorOrFunction, context) {
            if (m$.isFunction(selectorOrFunction)) {
                var arr = mQueryArrayMethods.filter.call(this, selectorOrFunction, context);

                return m$(arr);
            }
            else if (m$.isString(selectorOrFunction)) {
                return filterHelper(this, selectorOrFunction, false);
            }
            else {
                throw "Invalid Argument";
            }
        };
        MQueryResultSet.prototype.not = function(selector, context) {
            return filterHelper(this, selector, true);
        };
        MQueryResultSet.prototype.parent = function(selector) {
            var resultSet = this.map(function(domElement) {
                return domElement.parentNode;
            });
            var ret;

            if (m$.isDefined(selector)) {
                ret = resultSet.filter(selector);
            }
            else {
                ret = resultSet;
            }
            return ret;
        };
        MQueryResultSet.prototype.offsetParent = function(selector) {
            var root = m$(":root");
            var resultSet = this.map(function(domElement) {
                if (!root.contains(domElement))
                    return null;
                else
                    return domElement.offsetParent;
            });

            return resultSet;
        };
        MQueryResultSet.prototype.parents = function(selector) {
            return this.parentsUntil(null, selector);
        };
        MQueryResultSet.prototype.parentsUntil = function(element, filter) {
            var resultSet = new MQueryResultSet();

            this.forEach(function(domElement) {
                var currentParent = domElement.parentNode;

                while (m$.isElement(currentParent) && currentParent !== element) {
                    resultSet.push(currentParent);
                    currentParent = currentParent.parentNode;
                }
                ;
            });
            var ret;

            if (m$.isDefined(filter)) {
                ret = resultSet.filter(filter);
            }
            else {
                ret = resultSet;
            }
            return ret;
        };
        MQueryResultSet.prototype.position = function() {
            if (this.length === 0)
                return null;
            var domElement = this[0];

            return {
                left: domElement.style.left,
                top: domElement.style.top
            };
        };
        MQueryResultSet.prototype.attr = function(attributeName, value) {
            if (this.length === 0)
                return;
            var domElement = this[0];

            if (m$.isDefinedAndNotNull(value)) {
                domElement.setAttribute(attributeName, value);
                return this;
            }
            else {
                var attribute = domElement.getAttribute(attributeName);

                return attribute === null ? undefined : attribute;
            }
        };
        MQueryResultSet.prototype.addClass = function(classNames) {
            if (this.length === 1 && classNames.indexOf(" ") === -1 && this[0].className.indexOf(classNames) === -1) {
                this[0].className = this[0].className + " " + classNames;
                return this;
            }
            var classNamesArray = classNames.split(" ");

            this.forEach(function(domElement) {
                m$.forEach(classNamesArray, function(className) {
                    if (className !== "" && domElement.className.indexOf(className) === -1) {
                        domElement.className = domElement.className + " " + className;
                    }
                });
                domElement.className = domElement.className.trim();
            });
            return this;
        };
        MQueryResultSet.prototype.removeClass = function(classNames) {
            var classNamesToRemove = classNames.split(" ");

            this.forEach(function(domElement) {
                var existingClassNames = domElement.className.split(" ");
                var newClassNames = m$.filter(existingClassNames, function(className) {
                    return m$.indexOf(classNamesToRemove, className) === -1;
                });

                domElement.className = newClassNames.join(" ");
            });
            return this;
        };
        MQueryResultSet.prototype.css = function() {
            if (this.length === 0)
                return this;
            var propertyName;

            if (arguments.length === 1) {
                if (m$.isString(arguments[0])) {
                    propertyName = cssPropertyToCamelCase(arguments[0]);
                    var firstDomElement = this[0];

                    if (m$.isFunction(window.getComputedStyle)) {
                        return (getComputedStyle(firstDomElement, null))[propertyName];
                    }
                    else if (m$.isDefined(firstDomElement.currentStyle)) {
                        return firstDomElement.currentStyle[propertyName];
                    }
                    else {
                        throw "Unsupported browser.";
                    }
                }
                else {
                    var map = arguments[0];

                    this.forEach(function(domElement) {
                        m$.forEach(map, function(key, value) {
                            propertyName = cssPropertyToCamelCase(key);
                            domElement.style[propertyName] = value;
                        });
                    });
                }
            }
            else if (arguments.length === 2) {
                propertyName = cssPropertyToCamelCase(arguments[0]);
                var propertyValue = arguments[1];

                if (m$.isNumber(propertyValue)) {
                    throw "Values as numbers without units isn't supported in m$ yet.";
                }
                this.forEach(function(domElement) {
                    domElement.style[propertyName] = propertyValue;
                });
            }
            else {
                throw "Invalid arguments.";
            }
            return this;
        };
        MQueryResultSet.prototype.remove = function() {
            if (!m$.support.domNodeRemoved) {
                this.map(removeDomNodeTreeData);
            }
            return this.detach();
        };
        MQueryResultSet.prototype.children = function() {
            var resultSet = new MQueryResultSet();

            this.forEach(function(domElement) {
                appendGenericCollectionToResultSet(resultSet, domElement.childNodes);
            });
            return resultSet;
        };
        MQueryResultSet.prototype.empty = function() {
            return (this.children()).remove();
        };
        MQueryResultSet.prototype.first = function() {
            return m$(this[0]);
        };
        MQueryResultSet.prototype.data = function(key, value) {
            if (m$.isUndefined(value) && !m$.isObject(key)) {
                return m$.data(this[0], key);
            }
            var retVal;

            this.some(function(result) {
                if (m$.isObject(key)) {
                    retVal = m$.extend(m$.data(result), key);
                }
                else {
                    retVal = m$.data(result, key, value);
                }
                if (m$.isDefinedAndNotNull(retVal)) {
                    return true;
                }
                return false;
            });
            return retVal;
        };
        MQueryResultSet.prototype.removeData = function(key) {
            this.forEach(function(result) {
                m$.removeData(result, key);
            });
        };
        MQueryResultSet.prototype.EventuallyDetect_DOMNodeRemovedFromDocument = (function() {
            var targets = [];
            var purgeTaskInitialized = false;
            var purgeInterval = 60000;
            var handlersKeyName = "mQuery-EventuallyDetect_DOMNodeRemovedFromDocument_handlers";
            var root = null;
            var purgeTargetsNoLongerInDOM = function() {
                var leftoverTargets = [];

                if (root === null)
                    root = m$(":root");
                m$.forEach(targets, function(target) {
                    if (root.contains(target)) {
                        leftoverTargets.push(target);
                    }
                    else {
                        var handlers = target[handlersKeyName];

                        if (m$.isArray(handlers)) {
                            m$.forEach(handlers, function(handler) {
                                handler();
                            });
                            target[handlersKeyName] = null;
                        }
                    }
                });
                targets = leftoverTargets;
            };

            return function(handler) {
                if (m$.support.domNodeRemovedFromDocument === true) {
                    this.one("DOMNodeRemovedFromDocument", handler);
                }
                else {
                    if (!purgeTaskInitialized) {
                        purgeTaskInitialized = true;
                        m$.ready(function() {
                            setInterval(purgeTargetsNoLongerInDOM, purgeInterval);
                        });
                    }
                    this.forEach(function(target) {
                        if (m$.isUndefinedOrNull(target[handlersKeyName]))
                            target[handlersKeyName] = [];
                        target[handlersKeyName].push(handler);
                        if (m$.indexOf(targets, target) === -1)
                            targets.push(target);
                    });
                }
            };
        })();
        (function() {
            var makeShortcutFunction = function(eventName) {
                return function(handler) {
                    var resultSet = this;

                    if (typeof handler !== "undefined" && handler !== null) {
                        return this.bind(eventName, handler);
                    }
                    else {
                        return this.trigger(eventName);
                    }
                };
            };

            MQueryResultSet.prototype.blur = makeShortcutFunction('blur');
            MQueryResultSet.prototype.change = makeShortcutFunction('change');
            MQueryResultSet.prototype.click = makeShortcutFunction('click');
            MQueryResultSet.prototype.dblclick = makeShortcutFunction('dblclick');
            MQueryResultSet.prototype.error = makeShortcutFunction('error');
            MQueryResultSet.prototype.focus = makeShortcutFunction('focus');
            MQueryResultSet.prototype.focusin = makeShortcutFunction('focusin');
            MQueryResultSet.prototype.focusout = makeShortcutFunction('focusout');
            MQueryResultSet.prototype.keydown = makeShortcutFunction('keydown');
            MQueryResultSet.prototype.keypress = makeShortcutFunction('keypress');
            MQueryResultSet.prototype.keyup = makeShortcutFunction('keyup');
            MQueryResultSet.prototype.load = makeShortcutFunction('load');
            MQueryResultSet.prototype.mousedown = makeShortcutFunction('mousedown');
            MQueryResultSet.prototype.mouseenter = makeShortcutFunction('mouseenter');
            MQueryResultSet.prototype.mouseleave = makeShortcutFunction('mouseleave');
            MQueryResultSet.prototype.mousemove = makeShortcutFunction('mousemove');
            MQueryResultSet.prototype.mouseout = makeShortcutFunction('mouseout');
            MQueryResultSet.prototype.mouseover = makeShortcutFunction('mouseover');
            MQueryResultSet.prototype.mouseup = makeShortcutFunction('mouseup');
            MQueryResultSet.prototype.resize = makeShortcutFunction('resize');
            MQueryResultSet.prototype.scroll = makeShortcutFunction('scroll');
            MQueryResultSet.prototype.select = makeShortcutFunction('select');
            MQueryResultSet.prototype.submit = makeShortcutFunction('submit');
            MQueryResultSet.prototype.unload = makeShortcutFunction('unload');
        })();
        (function() {
            if (!('indexOf' in MQueryResultSet.prototype)) {
                MQueryResultSet.prototype.indexOf = function(object, startIndex) {
                    return mQueryArrayMethods.indexOf.apply(this, arguments);
                };
            }
            if (!('lastIndexOf' in MQueryResultSet.prototype)) {
                MQueryResultSet.prototype.lastIndexOf = function(object, startIndex) {
                    return mQueryArrayMethods.lastIndexOf.apply(this, arguments);
                };
            }
            if (!('forEach' in MQueryResultSet.prototype)) {
                MQueryResultSet.prototype.forEach = function(fn, context) {
                    return mQueryArrayMethods.forEach.apply(this, arguments);
                };
            }
            if (!('every' in MQueryResultSet.prototype)) {
                MQueryResultSet.prototype.every = function(fn, context) {
                    return mQueryArrayMethods.every.apply(this, arguments);
                };
            }
            if ('map' in Array.prototype) {
                MQueryResultSet.prototype.map = function(fn, context) {
                    var arr = Array.prototype.map.apply(this, arguments);

                    return m$(arr);
                };
            }
            else {
                MQueryResultSet.prototype.map = function(fn, context) {
                    var arr = mQueryArrayMethods.map.apply(this, arguments);

                    return m$(arr);
                };
            }
            if (!('some' in MQueryResultSet.prototype)) {
                MQueryResultSet.prototype.some = function(fn, context) {
                    return mQueryArrayMethods.some.apply(this, arguments);
                };
            }
        })();
        var appendNodeListToResultSet = function(resultSet, nodeList) {
            if (typeof nodeList.length === "undefined" || nodeList.length < 0) {
                throw "Invalid Argument";
            }
            var len = nodeList.length;

            for (var i = 0; i < len; ++i) {
                resultSet.push(nodeList.item(i));
            }
            return resultSet;
        };
        var filterHelper = function(resultSet, selector, not) {
            var filteredSet = new MQueryResultSet();
            var selectedSet = (m$(document.body)).find(selector);

            resultSet.forEach(function(resultElement) {
                var isInSelectedSet = selectedSet.indexOf(resultElement) !== -1;

                if (not !== isInSelectedSet) {
                    filteredSet.push(resultElement);
                }
            });
            return filteredSet;
        };
        var appendGenericCollectionToResultSet = function(resultSet, collection) {
            if (typeof collection.length === "undefined" || collection.length < 0) {
                throw "Invalid Argument";
            }
            var len = collection.length;

            for (var i = 0; i < len; ++i) {
                resultSet.push(collection[i]);
            }
            return resultSet;
        };
        var removeDomNode = function(node) {
            if (m$.isDefinedAndNotNull(node.parentNode)) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        var removeDomNodeTreeData = function(rootNode) {
            ((m$(rootNode)).children()).map(removeDomNodeTreeData);
            (m$(rootNode)).removeData();
        };
        var cssPropertyToCamelCase = function(property) {
            return property.replace(/-([a-z])/g, function(match, lowerCaseChar) {
                return lowerCaseChar.toUpperCase();
            });
        };
        var MQueryData = (function() {
            var cache = {};
            var uniqueIdCounter = 0;
            var expandoName = "mQuery-objectRef";
            var objectRef = "__m$objectRef";
            var purgeOne = function(item) {
                var cacheIndex = item[expandoName];

                if (m$.isDefinedAndNotNull(cacheIndex)) {
                    delete cache[cacheIndex];
                    delete item[expandoName];
                }
            };
            var getCache = function(src, bNoCreate) {
                var idx = src[expandoName];

                if (m$.isUndefinedOrNull(src[expandoName])) {
                    if (bNoCreate === true) {
                        return;
                    }
                    idx = "m$" + String(uniqueIdCounter++);
                    src[expandoName] = idx;
                    cache[idx] = {};
                    cache[idx][objectRef] = src;
                    if (m$.isElement(src)) {
                        (m$(src)).EventuallyDetect_DOMNodeRemovedFromDocument(function() {
                            purgeOne(src);
                        });
                    }
                }
                return cache[idx];
            };
            var data = function(src, key, value) {
                if (m$.isUndefinedOrNull(src) || m$.isNumber(src) || m$.isBoolean(src)) {
                    return null;
                }
                var objCache = getCache(src);

                if (m$.isUndefinedOrNull(key)) {
                    return objCache;
                }
                else if (m$.isDefined(value)) {
                    return objCache[key] = value;
                }
                else {
                    return objCache[key];
                }
            };
            var removeData = function(src, key) {
                if (m$.isUndefinedOrNull(key)) {
                    purgeOne(src);
                }
                else {
                    var objCache = getCache(src, true);

                    if (m$.isDefinedAndNotNull(objCache)) {
                        delete objCache[key];
                    }
                }
            };
            var hasData = function(src) {
                var objCache = getCache(src, true);

                return m$.isDefinedAndNotNull(objCache) && !m$.isEmptyObject(objCache);
            };

            return {
                data: data,
                removeData: removeData,
                hasData: hasData
            };
        })();

        MQueryEvent = function(domElement, domEvent) {
            var that = this;
            var makeDelegatorFunction = function(methodName) {
                return function() {
                    domEvent[methodName].apply(domEvent, arguments);
                    initialize();
                };
            };
            var initialize = function() {
                that.originalEvent = domEvent;
                m$.extend(that, domEvent);
                for (var prop in that) {
                    if (that.hasOwnProperty(prop) && m$.isFunction(that[prop])) {
                        that[prop] = makeDelegatorFunction(prop);
                    }
                }
                that.target = m$.isDefined(domEvent.target) ? domEvent.target : domEvent.srcElement;
                that.type = domEvent.type.toLowerCase();
                if (m$.isDefined(domEvent.clientX) && m$.isUndefined(domEvent.pageX)) {
                    var coords = GetEventCoords(domEvent);

                    that.pageX = coords.x;
                    that.pageY = coords.y;
                }
                if (m$.isUndefined(domEvent.relatedTarget)) {
                    switch (that.type) {
                    case "mouseover":
                    case "dragenter":
                        that.relatedTarget = domEvent.fromElement;
                        break;
                    case "mouseout":
                    case "dragexit":
                        that.relatedTarget = domEvent.toElement;
                        break;
                    }
                }
                if (m$.isUndefined(domEvent.currentTarget))
                    that.currentTarget = domElement;
                if (m$.isUndefined(domEvent.preventDefault)) {
                    that.preventDefault = function() {
                        domEvent.returnValue = false;
                        that.defaultPrevented = true;
                    };
                }
                if (m$.isUndefined(domEvent.stopPropagation)) {
                    that.stopPropagation = function() {
                        domEvent.cancelBubble = true;
                    };
                }
                switch (that.type) {
                case "keypress":
                    if (domEvent.keyCode === 0 && domEvent.which !== 0) {
                        that.keyCode = domEvent.which;
                    }
                    break;
                case "keydown":
                case "keyup":
                    that.charCode = 0;
                    break;
                }
                if (m$.isDefinedAndNotNull(domEvent.which))
                    that.which = domEvent.which;
                else if (m$.isDefinedAndNotNull(domEvent.keyCode))
                    that.which = domEvent.keyCode;
                else
                    that.which = domEvent.charCode;
                delete that.cancelBubble;
                delete that.returnValue;
                delete that.srcElement;
                delete that.fromElement;
                delete that.toElement;
                delete that.originalTarget;
                delete that.layerX;
                delete that.layerY;
                delete that.offsetX;
                delete that.offsetY;
                delete that.stopImmediatePropagation;
                delete that.metaKey;
                delete that.data;
                delete that.inputMethod;
                delete that.locale;
            };

            initialize();
        };
        MQueryEvent.prototype = {
            altKey: false,
            attrChange: 0,
            attrName: "",
            bubbles: false,
            button: 0,
            cancelable: false,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 0,
            eventPhase: 0,
            newValue: "",
            prevValue: "",
            relatedNode: undefined,
            screenX: 0,
            screenY: 0,
            shiftKey: false,
            view: undefined
        };
        MQueryEvent.prototype.constructor = MQueryEvent;
        var MQueryEvents = (function() {
            var eventTypes = {
                CompositionEvents: "CompositionEvents",
                HTMLEvents: "HTMLEvents",
                FocusEvents: "FocusEvents",
                KeyboardEvents: "KeyboardEvents",
                MouseEvents: "MouseEvents",
                UIEvents: "UIEvents",
                MutationEvents: "MutationEvents",
                MutationNameEvents: "MutationNameEvents",
                TextEvents: "TextEvents",
                WheelEvents: "WheelEvents"
            };
            var eventTypeDOMTable = {
                compositionend: eventTypes.CompositionEvents,
                compositionstart: eventTypes.CompositionEvents,
                compositionupdate: eventTypes.CompositionEvents,
                abort: eventTypes.HTMLEvents,
                blur: eventTypes.HTMLEvents,
                change: eventTypes.HTMLEvents,
                error: eventTypes.HTMLEvents,
                focus: eventTypes.HTMLEvents,
                load: eventTypes.HTMLEvents,
                resize: eventTypes.HTMLEvents,
                scroll: eventTypes.HTMLEvents,
                reset: eventTypes.HTMLEvents,
                select: eventTypes.HTMLEvents,
                submit: eventTypes.HTMLEvents,
                unload: eventTypes.HTMLEvents,
                click: eventTypes.MouseEvents,
                mousemove: eventTypes.MouseEvents,
                mouseout: eventTypes.MouseEvents,
                mouseover: eventTypes.MouseEvents,
                mouseup: eventTypes.MouseEvents,
                mousedown: eventTypes.MouseEvents,
                dblclick: eventTypes.MouseEvents,
                mouseenter: eventTypes.MouseEvents,
                mouseleave: eventTypes.MouseEvents,
                DOMActivate: eventTypes.UIEvents,
                DOMFocusIn: eventTypes.UIEvents,
                DOMFocusOut: eventTypes.UIEvents,
                focusin: eventTypes.UIEvents,
                focusout: eventTypes.UIEvents,
                keydown: eventTypes.UIEvents,
                keypress: eventTypes.UIEvents,
                keyup: eventTypes.UIEvents,
                DOMAttrModified: eventTypes.MutationEvents,
                DOMCharacterDataModified: eventTypes.MutationEvents,
                DOMNodeInserted: eventTypes.MutationEvents,
                DOMNodeInsertedIntoDocument: eventTypes.MutationEvents,
                DOMNodeRemoved: eventTypes.MutationEvents,
                DOMNodeRemovedFromDocument: eventTypes.MutationEvents,
                DOMSubtreeModified: eventTypes.MutationEvents,
                DOMAttributeNameChanged: eventTypes.MutationNameEvents,
                DOMElementNameChanged: eventTypes.MutationNameEvents,
                textInput: eventTypes.TextEvents,
                wheel: eventTypes.WheelEvents,
                contextmenu: eventTypes.MouseEvents,
                beforeunload: eventTypes.HTMLEvents
            };
            var EventHandlerWrapper = (function() {
                var getDOMEventData = function(obj) {
                    var eventData = getInternalDataWithDefault(obj, "eventTypes", {});

                    if (m$.isUndefined(eventData.vanillaHandlers) || m$.isUndefined(eventData.wrappedHandlers)) {
                        eventData.vanillaHandlers = [];
                        eventData.wrappedHandlers = [];
                    }
                    return eventData;
                };
                var get = function(domElement, vanillaHandler) {
                    var eventData = getDOMEventData(domElement);

                    if (m$.indexOf(eventData.vanillaHandlers, vanillaHandler) === -1) {
                        var wrappedHandler = function(evt) {
                            var args = m$.makeArray(arguments);
                            var vanillaEvent;

                            if (m$.isUndefined(evt)) {
                                vanillaEvent = window.event;
                            }
                            else {
                                vanillaEvent = args.shift();
                            }
                            var wrappedEvent = new MQueryEvent(domElement, vanillaEvent);

                            args.unshift(wrappedEvent);
                            var returnValue = vanillaHandler.apply(domElement, args);

                            if (returnValue === false) {
                                wrappedEvent.preventDefault();
                            }
                            return returnValue;
                        };

                        eventData.vanillaHandlers.push(vanillaHandler);
                        eventData.wrappedHandlers.push(wrappedHandler);
                    }
                    var index = m$.indexOf(eventData.vanillaHandlers, vanillaHandler);

                    return eventData.wrappedHandlers[index];
                };
                var remove = function(domElement, vanillaHandler) {
                    var eventData = getDOMEventData(domElement);
                    var index = m$.indexOf(eventData.vanillaHandlers, vanillaHandler);

                    if (index !== -1) {
                        eventData.vanillaHandlers.splice(index, 1);
                        eventData.wrappedHandlers.splice(index, 1);
                    }
                };

                return {
                    getAndIncrementRef: function(domElement, vanillaHandler) {
                        var wrappedHandler = get(domElement, vanillaHandler);

                        if (m$.isUndefined(wrappedHandler.refCount)) {
                            wrappedHandler.refCount = 0;
                        }
                        wrappedHandler.refCount++;
                        return wrappedHandler;
                    },
                    getAndDecrementRef: function(domElement, vanillaHandler) {
                        var wrappedHandler = get(domElement, vanillaHandler);

                        if (m$.isNumber(wrappedHandler.refCount) && wrappedHandler.refCount > 0) {
                            wrappedHandler.refCount--;
                        }
                        else {
                            wrappedHandler.refCount = 0;
                        }
                        if (wrappedHandler.refCount === 0) {
                            remove(domElement, vanillaHandler);
                        }
                        return wrappedHandler;
                    }
                };
            })();
            var domEventMethods = {
                bind: function(domElement, bindEvent, handler) {
                    var wrappedHandler = EventHandlerWrapper.getAndIncrementRef(domElement, handler);

                    if (typeof domElement.addEventListener !== "undefined") {
                        domElement.addEventListener(bindEvent, wrappedHandler, false);
                    }
                    else if (typeof domElement.attachEvent !== "undefined") {
                        domElement.attachEvent("on" + bindEvent, wrappedHandler);
                    }
                    else {
                        throw "Unsupported browser.";
                    }
                },
                unbind: function(domElement, unbindEvent, handler) {
                    var wrappedHandler = EventHandlerWrapper.getAndDecrementRef(domElement, handler);

                    if (typeof domElement.removeEventListener !== "undefined") {
                        domElement.removeEventListener(unbindEvent, wrappedHandler, false);
                    }
                    else if (typeof domElement.detachEvent !== "undefined") {
                        domElement.detachEvent("on" + unbindEvent, wrappedHandler);
                    }
                    else {
                        throw "Unsupported browser.";
                    }
                },
                trigger: function(domElement, triggerEvent) {
                    if (typeof document.createEvent !== "undefined") {
                        var eventType = eventTypeDOMTable[triggerEvent];

                        if (typeof eventType === "undefined") {
                            throw "Unsupported DOM event specified.";
                        }
                        var eventObj = document.createEvent(eventType);

                        eventObj.initEvent(triggerEvent, true, true);
                        domElement.dispatchEvent(eventObj);
                    }
                    else if (typeof domElement.fireEvent !== "undefined") {
                        domElement.fireEvent("on" + triggerEvent);
                    }
                    else {
                        throw "Unsupported browser.";
                    }
                }
            };
            var getObjEventData = function(obj) {
                return getInternalDataWithDefault(obj, "objEvents", {});
            };
            var objEventMethods = {
                bind: function(obj, bindEvent, handler) {
                    var events = getObjEventData(obj);

                    if (m$.isUndefinedOrNull(events[bindEvent])) {
                        events[bindEvent] = [];
                    }
                    var localData = events[bindEvent];

                    if (m$.indexOf(localData, handler) === -1) {
                        events[bindEvent].push(handler);
                    }
                },
                unbind: function(obj, unbindEvent, handler) {
                    var events = getObjEventData(obj);

                    if (m$.isDefinedAndNotNull(events[unbindEvent])) {
                        var localData = events[unbindEvent];
                        var idx = m$.indexOf(localData, handler);

                        if (idx >= 0) {
                            localData.splice(idx, 1);
                        }
                    }
                },
                trigger: function(obj, triggerEvent) {
                    var events = getObjEventData(obj);

                    if (m$.isUndefinedOrNull(events[triggerEvent]))
                        return;
                    var ar = events[triggerEvent];
                    var eventArgs = Array.prototype.slice.call(arguments, 2);

                    m$.forEach(ar, function(fn) {
                        fn.apply(obj, eventArgs);
                    });
                }
            };
            var eventBinder = function(evtName, target) {
                var targetSupportsDomEventMethods = m$.isElement(target) || target === window || target === document;

                return typeof eventTypeDOMTable[evtName] !== "undefined" && targetSupportsDomEventMethods ? domEventMethods : objEventMethods;
            };

            return {
                eventBinder: eventBinder
            };
        })();

        m$ = function() {
            return m$.initialize.apply(this, arguments);
        };
        var getInternalData = (function() {
            var MQUERY_INTERNALS_KEY = "__m$";

            return function(obj) {
                var data = m$.data(obj, MQUERY_INTERNALS_KEY);

                if (m$.isUndefinedOrNull(data)) {
                    data = {};
                    m$.data(obj, MQUERY_INTERNALS_KEY, data);
                }
                return data;
            };
        })();
        var getInternalDataWithDefault = function(obj, key, defaultValue) {
            var internalData = getInternalData(obj);

            if (m$.isUndefinedOrNull(internalData[key])) {
                internalData[key] = defaultValue;
                m$.data(obj, key, defaultValue);
            }
            return internalData[key];
        };
        var extend = function(shouldOverwrite, isDeep, target, sources) {
            if (typeof shouldOverwrite === "undefined" || typeof target === "undefined" || sources.length < 1) {
                throw "Invalid arguments.";
            }
            for (var sourceIndex = 0; sourceIndex < sources.length; ++sourceIndex) {
                var source = sources[sourceIndex];

                if (typeof source !== "undefined") {
                    for (var property in source) {
                        var value = source[property];

                        if (shouldOverwrite || typeof target[property] === "undefined") {
                            if (typeof value !== "undefined") {
                                if (isDeep && value !== null && m$.isObject(value) && !m$.isArray(value) && !m$.isNode(value)) {
                                    if (!m$.isObject(target[property]))
                                        target[property] = {};
                                    extend(shouldOverwrite, isDeep, target[property], [value]);
                                }
                                else {
                                    target[property] = value;
                                }
                            }
                        }
                    }
                }
            }
            return target;
        };

        m$.initialize = function() {
            if (arguments.length > 0) {
                if (arguments.length <= 2 && m$.isString(arguments[0])) {
                    var selector = arguments[0];
                    var context = arguments[1];

                    if (typeof context !== "undefined") {
                        return (m$(context)).find(selector);
                    }
                    else {
                        return (m$(document)).find(selector);
                    }
                }
                else if (arguments.length === 1) {
                    var argument = arguments[0];

                    if (m$.isUndefinedOrNull(argument)) {
                        return new MQueryResultSet();
                    }
                    else if (m$.isMQueryResultSet(argument)) {
                        return argument;
                    }
                    else if (m$.isNode(argument) || argument === window) {
                        return new MQueryResultSet(argument);
                    }
                    else if (m$.isArray(argument)) {
                        var resultSet = new MQueryResultSet();

                        MQueryResultSet.apply(resultSet, argument);
                        return resultSet;
                    }
                    else {
                        return new MQueryResultSet(argument);
                    }
                }
            }
            return new MQueryResultSet();
        };
        m$.throttle = function(fn, interval, shouldOverrideThrottle) {
            var calledThisInterval = false;
            var calledMultipleTimesThisInterval = false;
            var that = this;
            var throttledFunction = function() {
                if (!calledThisInterval || m$.isFunction(shouldOverrideThrottle) && shouldOverrideThrottle()) {
                    calledThisInterval = true;
                    setTimeout(function() {
                        var callOneTrailingTime = calledMultipleTimesThisInterval;

                        calledThisInterval = (calledMultipleTimesThisInterval = false);
                        if (callOneTrailingTime) {
                            throttledFunction.apply(that, arguments);
                        }
                    }, interval);
                    fn.apply(that, arguments);
                }
                else {
                    calledMultipleTimesThisInterval = true;
                }
            };

            return throttledFunction;
        };
        m$.extend = function() {
            var sources = m$.makeArray(arguments);
            var target = sources.shift();
            var isDeep = false;

            if (m$.isBoolean(target)) {
                isDeep = target;
                target = sources.shift();
            }
            if (sources.length === 0) {
                sources = [target];
                target = m$;
            }
            return extend(true, isDeep, target, sources);
        };
        m$.makeArray = function(arrayLikeObject) {
            return Array.prototype.slice.call(arrayLikeObject, 0);
        };
        m$.isDefined = function(object) {
            return typeof object !== "undefined";
        };
        m$.isNotNull = function(object) {
            return object !== null;
        };
        m$.isUndefined = function(object) {
            return typeof object === "undefined";
        };
        m$.isNull = function(object) {
            return object === null;
        };
        m$.isUndefinedOrNull = function(object) {
            return object == null;
        };
        m$.isDefinedAndNotNull = function(object) {
            return object != null;
        };
        m$.isString = function(object) {
            return typeof object === "string";
        };
        m$.isBoolean = function(object) {
            return typeof object === "boolean";
        };
        m$.isFunction = function(object) {
            return typeof object === "function";
        };
        m$.isArray = m$.isFunction(Array.isArray) ? Array.isArray : function(object) {
            return Object.prototype.toString.call(object) === "[object Array]";
        };
        m$.isNode = (function() {
            if (typeof Node === "object") {
                return function(object) {
                    return object instanceof Node;
                };
            }
            else {
                return function(object) {
                    return m$.isDefinedAndNotNull(object) && m$.isDefined(object.nodeType) && m$.isNumber(object.nodeType) && typeof object.nodeName === "string";
                };
            }
        })();
        m$.isElement = (function() {
            if (typeof HTMLElement === "object") {
                return function(object) {
                    return object instanceof HTMLElement;
                };
            }
            else {
                return function(object) {
                    return m$.isNode(object) && object.nodeType === 1;
                };
            }
        })();
        m$.isMQueryResultSet = function(object) {
            return object instanceof MQueryResultSet;
        };
        m$.isNumber = function(object) {
            return typeof object === "number";
        };
        m$.isObject = function(object) {
            return m$.isNotNull(object) && typeof object === "object";
        };
        m$.isEmptyObject = function(object) {
            for (var anyKey in object) {
                return true;
            }
            return false;
        };
        m$.isReady = false;
        _spBodyOnLoadFunctions.push(function() {
            m$.isReady = true;
        });
        m$.ready = function(callback) {
            if (m$.isReady) {
                callback();
            }
            else {
                _spBodyOnLoadFunctions.push(callback);
            }
        };
        m$.contains = function(container, contained) {
            return container !== contained && m$.isDefinedAndNotNull(container) && m$.isDefinedAndNotNull(contained) && (m$(container)).contains(contained);
        };
        m$.proxy = function(fn, context) {
            if (typeof context === "undefined") {
                throw "Invalid context";
            }
            return function() {
                fn.apply(context, arguments);
            };
        };
        m$.support = {};
        m$.support.domAttrModified = false;
        m$.support.domSubtreeModified = false;
        m$.support.domNodeRemoved = false;
        m$.support.domNodeRemovedFromDocument = false;
        m$.every = function(obj, fn, context) {
            return false;
        };
        m$.filter = function(arrayOrObjectOrSelector, fn, context) {
            return null;
        };
        m$.forEach = function(obj, fn, context) {
        };
        m$.indexOf = function(array, object, startIndex) {
            return 0;
        };
        m$.lastIndexOf = function(array, object, startIndex) {
            return 0;
        };
        m$.map = function(obj, fn, context) {
            return null;
        };
        m$.some = function(obj, fn, context) {
            return false;
        };
        m$.data = MQueryData.data;
        m$.removeData = MQueryData.removeData;
        m$.hasData = MQueryData.hasData;
        (function() {
            var makeDelegatorFunction = function(methodName) {
                return function() {
                    var args = m$.makeArray(arguments);
                    var enumerable = args.shift();

                    if (m$.isUndefinedOrNull(enumerable)) {
                        throw "Invalid argument specified";
                    }
                    if (m$.isArray(enumerable)) {
                        if (methodName in enumerable) {
                            return enumerable[methodName].apply(enumerable, args);
                        }
                        else {
                            return mQueryArrayMethods[methodName].apply(enumerable, args);
                        }
                    }
                    else if (m$.isObject(enumerable)) {
                        return mQueryObjectMethods[methodName].apply(enumerable, args);
                    }
                    throw "Invalid argument";
                };
            };

            (function() {
                for (var methodName in mQueryArrayMethods) {
                    if (mQueryArrayMethods.hasOwnProperty(methodName)) {
                        m$[methodName] = makeDelegatorFunction(methodName);
                    }
                }
            })();
        })();
        (function() {
            var testDiv = document.createElement('div');

            testDiv.style.display = 'none';
            var testParagraph = document.createElement('p');

            (m$(testDiv)).one('DOMAttrModified', function() {
                m$.support.domAttrModified = true;
            });
            testDiv.id = "face";
            (m$(testDiv)).one('DOMSubtreeModified', function() {
                m$.support.domSubtreeModified = true;
            });
            testDiv.appendChild(testParagraph);
            m$.ready(function() {
                document.body.appendChild(testDiv);
                (m$(testDiv)).one('DOMNodeRemovedFromDocument', function() {
                    m$.support.domNodeRemovedFromDocument = true;
                });
                document.body.removeChild(testDiv);
            });
            (m$(testParagraph)).one('DOMNodeRemoved', function() {
                m$.support.domNodeRemoved = true;
            });
            testDiv.removeChild(testParagraph);
        })();
        notifyScriptsLoadedAndExecuteWaitingJobs("mQuery.js");
    })();
}
var m$;
var MQueryResultSet;
var MQueryEvent;

$_global_mquery();
