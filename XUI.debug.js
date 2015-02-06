function ULSMSN(){var o=new Object;o.ULSTeamName="Windows SharePoint Services 4";o.ULSFileName="XUI.debug.js";return o;}
Type.registerNamespace('XUI');

XUI.Capture = function ()
{ULSMSN:;

    var _captureElem, _fnUserOnMouseMove, _fnUserOnMouseUp, _origBodyCursor;

    var captureApi = {

        OnMouseMove: function (eventInfo)
        {ULSMSN:;

            if (_captureElem != null && eventInfo.button == Sys.UI.MouseButton.leftButton)
            {
                if (_fnUserOnMouseMove != null)
                {
                    _fnUserOnMouseMove(_bUsingIE ? eventInfo : captureApi.MakeAtlasEventInfo(eventInfo));
                }
            }
        },

        OnMouseUp: function (eventInfo)
        {ULSMSN:;

            if (_captureElem != null && eventInfo.button == Sys.UI.MouseButton.leftButton)
            {
                if (_fnUserOnMouseUp != null)
                {
                    _fnUserOnMouseUp(_bUsingIE ? eventInfo : captureApi.MakeAtlasEventInfo(eventInfo));
                }
                captureApi.ReleaseCapture();
            }
        },

        MakeAtlasEventInfo: function (eventInfo)
        {ULSMSN:;
            return new Sys.UI.DomEvent(eventInfo);
        },

        OnLoseCapture: function (eventInfo)
        {ULSMSN:;
            captureApi.ReleaseCapture();
        },

        AdjustCoordsForIEZoom: function (point)
        {ULSMSN:;
            if (Sys.Browser.agent == Sys.Browser.InternetExplorer)
            {
                captureApi.CacheIEZoomFactor();
                $addHandler(window, 'resize', captureApi.CacheIEZoomFactor);
            }
            else
            {
                _zoomFactor = 1;
            }
            return { x: Math.round(point.x / _zoomFactor), y: Math.round(point.y / _zoomFactor) };
        },

        CacheIEZoomFactor: function ()
        {ULSMSN:;
            if (Sys.Browser.agent == Sys.Browser.InternetExplorer)
            {
                var div1, div2;
                if ((div1 = $get('__iezoomtest1')) == null || (div2 = $get('__iezoomtest2')) == null)
                {
                    div1 = document.createElement('div');
                    div2 = document.createElement('div');
                    div1.style.cssText = 'position:absolute;top:0px;left:0px';
                    div2.style.cssText = 'position:absolute;top:0px;left:200px';
                    div1.appendChild(div2);
                    div1.id = '__iezoomtest1';
                    div2.id = '__iezoomtest2';
                    document.body.appendChild(div1);
                }

                var loc1 = Sys.UI.DomElement.getLocation(div1);
                var loc2 = Sys.UI.DomElement.getLocation(div2);
                _zoomFactor = (loc2.x - loc1.x) / 200;

                if (_zoomFactor == 0)
                {
                    _zoomFactor = 1;
                }
            }
        },

        SetCapture: function (domNode, fnUserOnMouseMove, fnUserOnMouseUp)
        {ULSMSN:;

            if (Sys.Browser.agent == Sys.Browser.InternetExplorer)
            {
                _bUsingIE = true;

                _captureElem = domNode;
                _fnUserOnMouseMove = fnUserOnMouseMove;
                _fnUserOnMouseUp = fnUserOnMouseUp;

                $addHandler(document, 'mousemove', captureApi.OnMouseMove);
                $addHandler(document, 'mouseup', captureApi.OnMouseUp);
                _captureElem.setCapture(true);

            }
            else
            {
                _bUsingIE = false;

                _captureElem = domNode;
                _fnUserOnMouseMove = fnUserOnMouseMove;
                _fnUserOnMouseUp = fnUserOnMouseUp;
                _origBodyCursor = document.body.style.cursor;
                document.body.style.cursor = 'cursor';
                document.addEventListener('mousemove', captureApi.OnMouseMove, true);
                document.addEventListener('mouseup', captureApi.OnMouseUp, true);
                document.addEventListener('mouseover', captureApi.StopEvent, true);
                document.addEventListener('mouseenter', captureApi.StopEvent, true);
                document.addEventListener('mouseleave', captureApi.StopEvent, true);
            }
        },

        ReleaseCapture: function ()
        {ULSMSN:;
            if (_captureElem != null)
            {

                if (Sys.Browser.agent == Sys.Browser.InternetExplorer)
                {

                    _captureElem.releaseCapture();
                    $removeHandler(document, 'mousemove', captureApi.OnMouseMove);
                    $removeHandler(document, 'mouseup', captureApi.OnMouseUp);
                    _captureElem = null;
                    _fnUserOnMouseMove = null;
                    _fnUserOnMouseUp = null;
                    _origBodyCursor = null;

                }
                else 
                {

                    document.body.style.cursor = _origBodyCursor;
                    document.removeEventListener('mousemove', captureApi.OnMouseMove, true);
                    document.removeEventListener('mouseup', captureApi.OnMouseUp, true);
                    document.removeEventListener('mouseover', captureApi.StopEvent, true);
                    document.removeEventListener('mouseenter', captureApi.StopEvent, true);
                    document.removeEventListener('mouseleave', captureApi.StopEvent, true);
                    _captureElem = null;
                    _fnUserOnMouseMove = null;
                    _fnUserOnMouseUp = null;
                    _origBodyCursor = null;
                }
            }
        },

        GetLocation: function(domElem)
        {ULSMSN:;
            return captureApi.AdjustCoordsForIEZoom(Sys.UI.DomElement.getLocation(domElem));
        },

        GetEventLocation: function (eventInfo)
        {ULSMSN:;
            var offsets = captureApi.GetScreenOffsets();
            var loc = { x: eventInfo.clientX + offsets.left, y: eventInfo.clientY + offsets.top };
            if (isNaN(loc.x))
            {
                loc = { x: eventInfo.rawEvent.pageX, y: eventInfo.rawEvent.pageY };
            }
            return captureApi.AdjustCoordsForIEZoom(loc);
        },

        PointInDomElem: function(x, y, domElem, optLocation)
        {ULSMSN:;
            var location = (optLocation == null) ? captureApi.GetLocation(domElem) : optLocation;

            return location.x <= x && location.x + domElem.offsetWidth >= x &&
                   location.y <= y && location.y + domElem.offsetHeight >= y;
        },

        StopEvent: function (eventInfo)
        {ULSMSN:;
            eventInfo.stopPropagation();
            eventInfo.preventDefault();
        },

        GetScreenOffsets: function ()
        {ULSMSN:;
            return ('pageYOffset' in window) ?
                   { top: window.pageYOffset, left: window.pageXOffset} :
                   { top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft };
        }
    };

    return captureApi;
} ();

Type.registerNamespace('XUI');

XUI.ClipboardManager = function ()
{ULSMSN:;
    var _this = this;
    var _mimeType = GetMimeType();
    var _clipboardContext; 

    function GetMimeType()
    {ULSMSN:;
        if (Sys.Browser.agent == Sys.Browser.Safari || Sys.Browser.agent == Sys.Browser.AppleWebKit)
        {
            return "text/plain";
        }
        else if (Sys.Browser.agent == Sys.Browser.Firefox)
        {
            return "text/unicode";
        }
        else
        {
            return "text";
        }
    }

    var clipboardApi = {
        SetData: function (data)
        {ULSMSN:;
            window.clipboardData.setData(_mimeType, data);
            return true;
        },

        GetData: function (data)
        {ULSMSN:;
            return window.clipboardData.getData(_mimeType);
        }
    }

    var componentsApi = {
        SetData: function (data)
        {ULSMSN:;

            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

            var stringComp = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

            var transfComp = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            transfComp.addDataFlavor(_mimeType);

            var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard);

            stringComp.data = data;
            transfComp.setTransferData(_mimeType, stringComp, data.length * 2);
            clipboardService.setData(transfComp, null, Components.interfaces.nsIClipboard.kGlobalClipboard);

            return true;
        },

        GetData: function (data)
        {ULSMSN:;

            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

            var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"].getService(Components.interfaces.nsIClipboard);

            var transfComp = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            transfComp.addDataFlavor(_mimeType);

            var dataComp = {}, length = {};
            clipboardService.getData(transfComp, Components.interfaces.nsIClipboard.kGlobalClipboard);
            transfComp.getTransferData(_mimeType, dataComp, length);
            dataComp = dataComp && dataComp.value.QueryInterface(Components.interfaces.nsISupportsString);

            return dataComp && dataComp.data.substring(0, length.value / 2);
        }
    }

    var internalApi = {
        SetData: function (data)
        {ULSMSN:;

            _clipboardContext = {};
            _clipboardContext[_mimeType] = data;

            return true;
        },

        GetData: function (data)
        {ULSMSN:;
            return _clipboardContext && _clipboardContext[_mimeType];
        }
    }

    function SelectApi(apiName)
    {ULSMSN:;
        if (window.clipboardData && window.clipboardData.setData)
        {
            return clipboardApi[apiName];
        }
        else if (window.Components)
        {
            try
            {

                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

                return componentsApi[apiName];
            }
            catch (e)
            {

                return internalApi[apiName];
            }

        }
        else
        {

            return internalApi[apiName];
        }
    }

    this.SetData = function (data)
    {ULSMSN:;

        this.SetData = SelectApi('SetData');
        return this.SetData(data);
    }

    this.GetData = function ()
    {ULSMSN:;

        this.GetData = SelectApi('GetData');
        return this.GetData();
    }
}

Type.registerNamespace('XUI');

XUI.DomUtilities = function ()
{ULSMSN:;

    var NodeType =
    {
        Element: 1,
        TextNode: 3,
        Document: 9
    }

    function Trim(strValue)
    {ULSMSN:;
        if (strValue != null)
        {
            return strValue.replace(/^\s*/, '').replace(/\s*$/, '');
        }

        return strValue;
    }

    function IsEnumerable(domNode)
    {ULSMSN:;
        var nodeType = domNode.nodeType;

        if (nodeType == NodeType.Element) return true;

        if (nodeType == NodeType.TextNode)
        {
            var textContent = domNode.nodeValue;
            return textContent && (Trim(textContent).length > 0);
        }

        return false;
    }

    function FindEnumerableNode(domNode, sPrevNextSibling)
    {ULSMSN:;
        var r = domNode;
        while (r != null && !IsEnumerable(r))
        {
            r = r[sPrevNextSibling];
        }
        return r;
    }

    var functionsRequiringInit = [
        { name: 'Contains', selector: function ()
        {ULSMSN:;
            return document.body.contains != null ?
                    function (domNode, otherDomNode) {ULSMSN:; return domNode && domNode.contains(otherDomNode); } :
                    function (domNode, otherDomNode) {ULSMSN:; return domNode && (domNode.compareDocumentPosition(otherDomNode) >= 16); };
        }
        }
        ];

    function UpdateStub(fnInfo)
    {ULSMSN:;

        api[fnInfo.name] = function ()
        {ULSMSN:;

            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments);
        };
    }

    var api =
    {

        NodeType: NodeType,

        HasChildElements: function (domNode)
        {ULSMSN:;
            if (domNode.hasChildNodes())
            {
                var childNodes = domNode.childNodes;
                return childNodes.length > 1 || (IsEnumerable(childNodes[0]));
            }
            else
            {
                return false;
            }
        },

        GetFirstChild: function (domNode)
        {ULSMSN:;
            return FindEnumerableNode(domNode.firstChild, 'nextSibling');
        },

        GetLastChild: function (domNode)
        {ULSMSN:;
            return FindEnumerableNode(domNode.lastChild, 'previousSibling');
        },

        GetNextSibling: function (domNode)
        {ULSMSN:;
            return FindEnumerableNode(domNode.nextSibling, 'nextSibling');
        },

        GetPrevSibling: function (domNode)
        {ULSMSN:;
            return FindEnumerableNode(domNode.previousSibling, 'previousSibling');
        },

        ForEachChild: function (domNode, fnProcessElement)
        {ULSMSN:;
            var curNode = this.GetFirstChild(domNode);

            while (curNode != null && !fnProcessElement(curNode))
            {

                curNode = this.GetNextSibling(curNode);
            }

            return curNode;
        },

        GetChildElementAt: function (domNode, index)
        {ULSMSN:;
            var idx = 0;
            function ProcessNode(node)
            {ULSMSN:;

                return (idx++ == index);
            }
            return this.ForEachChild(domNode, ProcessNode);
        },

        GetBaseName: function (domNode)
        {ULSMSN:;

            if ('localName' in domNode)
            {
                return domNode.localName || domNode.nodeName;
            }
            else
            {
                return domNode.baseName;
            }
        },

        Contains: function (domNode, otherDomNode) { }
    }

    for (var i = 0; i < functionsRequiringInit.length; i++)
    {
        UpdateStub(functionsRequiringInit[i]);
    }

    return api;
} ();

Type.registerNamespace('XUI');

XUI.Html = function ()
{ULSMSN:;

    var functionsRequiringInit = [
        { name: 'SetText', selector: function ()
        {ULSMSN:;

            return document.body.textContent != null ?
                    function (domNode, newVal) {ULSMSN:; domNode.textContent = newVal; } :
                    function (domNode, newVal) {ULSMSN:; domNode.innerText = newVal; };
        }
        },
        { name: 'GetText', selector: function ()
        {ULSMSN:;
            return document.body.textContent != null ?
                    function (domNode) {ULSMSN:; return domNode.textContent; } :
                    function (domNode) {ULSMSN:; return domNode.innerText; };
        }
        },
        { name: 'GetOuterHTML', selector: function ()
        {ULSMSN:;
            return document.body.outerHTML != null ?
                    function (domNode) {ULSMSN:; return domNode.outerHTML; } :
                    function (domNode)
                    {ULSMSN:;

                        var oDoc = domNode.ownerDocument;
                        var oClone = domNode.cloneNode(true);
                        var oTemp = oDoc.createElement("div");
                        oDoc.documentElement.appendChild(oTemp);
                        oTemp.appendChild(oClone);

                        var sHTML = oTemp.innerHTML;

                        oDoc.documentElement.removeChild(oTemp);

                        return sHTML;
                    };
        }
        },
        { name: 'SetOuterHTML', selector: function ()
        {ULSMSN:;
            return document.body.outerHTML != null ?
                    function (domNode, newVal) {ULSMSN:; domNode.outerHTML = newVal; } :
                    function (domNode, newVal)
                    {ULSMSN:;

                        var oTemp = document.createElement('div');
                        document.body.appendChild(oTemp);
                        oTemp.innerHTML = newVal;

                        var parentNode = domNode.parentNode;
                        parentNode.replaceChild(oTemp.firstChild.cloneNode(true), domNode);

                        document.body.removeChild(oTemp);
                    };
        }
        },
        { name: 'GetComputedStyle', selector: function ()
        {ULSMSN:;
            return document.body.currentStyle != null ?
                    function (domNode, camelStyleName)
                    {ULSMSN:;
                        var r = domNode.currentStyle[camelStyleName];

                        if (r != null && (r.indexOf('%') > 0 || r.indexOf('em') > 0))
                        {

                            throw 'RelativeMeasurementInComputedStyle';
                        }

                        return r;
                    }
                    :
                    function (domNode, camelStyleName) {ULSMSN:; return document.defaultView.getComputedStyle(domNode, null)[camelStyleName]; };
        }
        },
        { name: 'SetFloat', selector: function ()
        {ULSMSN:;
            return document.body.style.styleFloat != null ?
                    function (domNode, newVal) {ULSMSN:; domNode.style.styleFloat = newVal; } :
                    function (domNode, newVal) {ULSMSN:; domNode.style.cssFloat = newVal; };
        }
        },

        { name: 'SetOpacity', selector: function ()
        {ULSMSN:;
            return document.body.style.opacity != null ?
                    function (domNode, newVal) {ULSMSN:;
                        if (newVal == 1)
                            XUI.Html.RemoveCSSProperty(domNode, "opacity");
                        else
                            domNode.style.opacity = newVal;
                    } :
                    function (domNode, newVal) {ULSMSN:;
                        if (newVal == 1) 
                            XUI.Html.RemoveCSSProperty(domNode, "filter");
                        else
                            domNode.style.filter = 'alpha(opacity=' + String(newVal * 100) + ')';
                    };
        }
        },

        { name: 'GetOpacity', selector: function () {ULSMSN:;
            return document.body.style.opacity != null ?
                    function (domNode) {ULSMSN:;
                        var o = domNode.style.opacity;
                        return (o != null && o != '') ? parseFloat(o) : 1;
                    } :
                    function (domNode) {ULSMSN:;
                        var f = domNode.style.filter;
                        return (f != null && f != '') ? parseInt(f.replace('alpha(opacity=', '').replace(')', '')) / 100 : 1;
                    };
        }
        },
        { name: 'RemoveOpacity', selector: function ()
        {ULSMSN:;
            return document.body.style.opacity != null ?
                    function (domNode) {ULSMSN:; XUI.Html.RemoveCSSProperty(domNode, "opacity"); } :
                    function (domNode) {ULSMSN:; XUI.Html.RemoveCSSProperty(domNode, "filter"); };
        }
        },
        { name: 'RemoveCSSProperty', selector: function () {ULSMSN:;
            return document.body.style.removeProperty != null ?
                    function (domNode, propName) {ULSMSN:; domNode.style.removeProperty(propName); } :
                    function (domNode, propName) {ULSMSN:; domNode.style.removeAttribute(propName); };

        }
        },
        { name: 'IsContentEditable', selector: function ()
        {ULSMSN:;
            return document.body.isContentEditable != null ?
                    function (domNode) {ULSMSN:; return domNode.isContentEditable; } :
                    function (domNode) {ULSMSN:; return domNode.contentEditable; };
        }
        },
        { name: 'RotateElement', selector: function ()
        {ULSMSN:;

            if (document.body.style.msTransform != null)
            {
                return function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) {ULSMSN:; domNode.style.msTransform='rotate(' + degrees + 'deg)';}
            }

            if (document.body.style.MozTransform != null)
            {
                return function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) {ULSMSN:; domNode.style.MozTransform = 'rotate(' + degrees + 'deg)';}
            }

            if (document.body.style.OTransform != null)
            {
                return function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) {ULSMSN:; domNode.style.OTransform='rotate(' + degrees + 'deg)';}
            }

            if (document.body.style.WebkitTransform != null)
            {
                return function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) {ULSMSN:; domNode.style.WebkitTransform='rotate(' + degrees + 'deg)';}
            }

            return function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) 
            {ULSMSN:;

                var deg2radians = Math.PI * 2 / 360;
                var radians = degrees * deg2radians;
                var costheta = Math.cos(radians);
                var sintheta = Math.sin(radians);
                var newHeight = origHeight * Math.abs(costheta) + origWidth * Math.abs(sintheta);
                var newWidth = origWidth * Math.abs(costheta) + origHeight * Math.abs(sintheta);

                var newXNear = origXMid - (newWidth / 2);
                var newYTop = origYMid - (newHeight / 2);
                domNode.style.left = newXNear+'px';
                domNode.style.top = newYTop+'px';
                domNode.filters.item(0).M11 = costheta;
                domNode.filters.item(0).M12 = -sintheta;
                domNode.filters.item(0).M21 = sintheta;
                domNode.filters.item(0).M22 = costheta;
           }
        }
        }
    ];

    function UpdateStub(fnInfo)
    {ULSMSN:;

        api[fnInfo.name] = function ()
        {ULSMSN:;

            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments);
        };
    }

    var api =
    {

        DomUtils: XUI.DomUtilities,

        GetDirection: function ()
        {ULSMSN:;
            return document.documentElement.getAttribute('dir');
        },

        SetText: function (domNode, newVal) { },

        GetText: function (domNode) { },

        GetOuterHTML: function (domNode) { },

        SetOuterHTML: function (domNode, newVal) { },

        GetComputedStyle: function (domNode, camelStyleName) { },

        SetFloat: function (domNode, newVal) { },

        SetOpacity: function (domNode, newVal) { },

        GetOpacity: function (domNode) { },

        RemoveOpacity: function (domNode) { },

        RemoveCSSProperty: function (domNode, propName) { },      

        IsContentEditable: function (domNode) { },

        RotateElement: function (domNode, degrees, origXMid, origYMid, origWidth, origHeight) { }
    };

    for (var i = 0; i < functionsRequiringInit.length; i++)
    {
        UpdateStub(functionsRequiringInit[i]);
    }

    return api;
} ();

Type.registerNamespace('XUI');

XUI.Touch = (function ()
{ULSMSN:;
    var _isIE = Sys.Browser.agent == Sys.Browser.InternetExplorer;
    var _type =
    {

        touchstart: (_isIE ? "MSPointerDown" : "touchstart"),
        touchmove: (_isIE ? "MSPointerMove" : "touchmove"),
        touchend: (_isIE ? "MSPointerUp" : "touchend"),
        touchcancel: "touchcancel"
    };
    var _normalizedType =
    {
        touchstart: (_isIE ? "mspointerdown" : "touchstart"),
        touchmove: (_isIE ? "mspointermove" : "touchmove"),
        touchend: (_isIE ? "mspointerup" : "touchend"),
        touchcancel: "touchcancel"
    };

    function IsTouchSupportedInternal()
    {ULSMSN:;
        return (window.navigator.msMaxTouchPoints != null && window.navigator.msMaxTouchPoints > 0) ||
            (document.documentElement != null && 'ontouchstart' in document.documentElement);
    }

    function GetTouchPos(eventInfo)
    {ULSMSN:;
        var pos = { x: eventInfo.screenX, y: eventInfo.screenY };
        if (isNaN(pos.x))
        {
            pos = { x: eventInfo.rawEvent.pageX, y: eventInfo.rawEvent.pageY };
        }
        return SP.Internal.DomElement.AdjustCoordsForIEZoom(pos);
    }

    function ComputeMoveDelta(oldPos, newPos)
    {ULSMSN:;
        return { x: newPos.x - oldPos.x, y: newPos.y - oldPos.y };
    }

    function TouchManager(parentNode, fnOnTouchStart, fnOnTouchMove, fnOnTouchEnd, fnOnTouchCancel, fnShouldUpdateStartPos)
    {ULSMSN:;
        var startPos;
        var bGlobalHandlersAttached = false;

        if (IsTouchSupportedInternal())
        {

            parentNode.style.msTouchAction = "none";
            parentNode.style.msContentZooming = "none";
            fnOnTouchStart && $addHandler(parentNode, _type.touchstart, OnTouchStartInternal);
        }

        function OnTouchStartInternal(eventInfo)
        {ULSMSN:;
            fnOnTouchMove && $addHandler(document.body, _type.touchmove, OnTouchMoveInternal);
            fnOnTouchEnd && $addHandler(document.body, _type.touchend, OnTouchEndInternal);
            fnOnTouchCancel && $addHandler(document.body, _type.touchcancel, OnTouchCancelInternal);
            bGlobalHandlersAttached = true;

            startPos = GetTouchPos(eventInfo);
            fnOnTouchStart(eventInfo, startPos);
        }

        function OnTouchMoveInternal(eventInfo)
        {ULSMSN:;
            var pos = GetTouchPos(eventInfo);
            var moveDelta = startPos && ComputeMoveDelta(startPos, pos);
            fnOnTouchMove(eventInfo, pos, moveDelta);
            if (fnShouldUpdateStartPos && fnShouldUpdateStartPos(moveDelta))
            {
                startPos = pos;
            }
        }

        function OnTouchEndInternal(eventInfo)
        {ULSMSN:;

            DisposeGlobalTouchHandlers();

            startPos = GetTouchPos(eventInfo);
            fnOnTouchEnd(eventInfo);
        }

        function OnTouchCancelInternal(eventInfo)
        {ULSMSN:;

            DisposeGlobalTouchHandlers();

            startPos = GetTouchPos(eventInfo);
            fnOnTouchCancel(eventInfo);
        }

        function DisposeGlobalTouchHandlers()
        {ULSMSN:;
            if (bGlobalHandlersAttached)
            {
                fnOnTouchMove && $removeHandler(document.body, _type.touchmove, OnTouchMoveInternal);
                fnOnTouchEnd && $removeHandler(document.body, _type.touchend, OnTouchEndInternal);
                fnOnTouchCancel && $removeHandler(document.body, _type.touchcancel, OnTouchCancelInternal);
                bGlobalHandlersAttached = false;
            }
        }

        this.Dispose = function ()
        {ULSMSN:;
            if (IsTouchSupportedInternal())
            {
                fnOnTouchStart && $removeHandler(parentNode, _type.touchstart, OnTouchStartInternal);
            }
        };
    }

    var api =
    {

        Type: _type,

        NormalizedType: _normalizedType,

        IsSupported: IsTouchSupportedInternal,

        CreateTouchManager: function (parentNode, fnOnTouchStart, fnOnTouchMove, fnOnTouchEnd, fnOnTouchCancel, fnShouldUpdateStartPos)
        {ULSMSN:;
            return new TouchManager(parentNode, fnOnTouchStart, fnOnTouchMove, fnOnTouchEnd, fnOnTouchCancel, fnShouldUpdateStartPos);
        }
    };

    return api;
})();

Type.registerNamespace('XUI');

XUI.Xml = function ()
{ULSMSN:;

    function GetActiveXObject(progIDs)
    {ULSMSN:;
        for (var i = 0; i < progIDs.length; i++)
        {
            try
            {
                var xmlDoc = new ActiveXObject(progIDs[i]);
                return xmlDoc;
            }
            catch (ex)
            {

            }
        }
        return null;
    }

    MSXML_DOMParser = function () { };

    MSXML_DOMParser.prototype.parseFromString = function (sValue, contentType)
    {ULSMSN:;
        var xmlDoc = GetActiveXObject(['Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument']);
        if (xmlDoc != null)
        {
            try
            {
                xmlDoc.async = false;
                xmlDoc.loadXML(sValue);
                xmlDoc.setProperty('SelectionLanguage', 'XPath');
                return xmlDoc;
            }
            catch (e)
            {

            }
        }
        return null;
    }

    MSXML_XMLSerializer = function () { };

    MSXML_XMLSerializer.prototype.serializeToString = function (node)
    {ULSMSN:;
        return node.xml || '';
    }

    MSXML_XPathResult = function ()
    {ULSMSN:;

        this.singleNodeValue = null;

        this._resultNodes = null;
        var curItemIdx = 0;

        this.iterateNext = function ()
        {ULSMSN:;
            return (curItemIdx < this._resultNodes.length) ? this._resultNodes[curItemIdx++] : null;
        }
    }

    var ORDERED_NODE_ITERATOR_TYPE = (window.XPathResult != null) ? XPathResult.ORDERED_NODE_ITERATOR_TYPE : 5;

    var FIRST_ORDERED_NODE_TYPE = (window.XPathResult != null) ? XPathResult.FIRST_ORDERED_NODE_TYPE : 9;

    MSXML_XPathEvaluator = function () { }

    MSXML_XPathEvaluator.prototype.evaluate = function (sXPath, contextNode, namespaceResolver, resultType, xPathResultObj)
    {ULSMSN:;

        namespaceResolver();

        var result;
        if (resultType == ORDERED_NODE_ITERATOR_TYPE)
        {
            result = new MSXML_XPathResult();
            result._resultNodes = contextNode.selectNodes(sXPath);
        }
        else if (resultType == FIRST_ORDERED_NODE_TYPE)
        {
            result = new MSXML_XPathResult();
            result.singleNodeValue = contextNode.selectSingleNode(sXPath);
        }

        return result;
    }

    function GetDOMParser()
    {ULSMSN:;
        return (window.ActiveXObject != null) ? new MSXML_DOMParser() : new DOMParser();
    }

    function GetXMLSerializer()
    {ULSMSN:;
        return (window.ActiveXObject != null) ? new MSXML_XMLSerializer() : new XMLSerializer();
    }

    function GetXPathEvaluator()
    {ULSMSN:;
        return (window.ActiveXObject != null) ? new MSXML_XPathEvaluator() : new XPathEvaluator();
    }

    var reusableOjbects = {
        DOMParser: { instance: null, constructor: GetDOMParser },
        XMLSerializer: { instance: null, constructor: GetXMLSerializer },
        XPathEvaluator: { instance: null, constructor: GetXPathEvaluator }
    };

    function GetReusableObject(name)
    {ULSMSN:;
        if (reusableOjbects[name].instance == null)
        {
            reusableOjbects[name].instance = reusableOjbects[name].constructor();
        }

        return reusableOjbects[name].instance;
    }

    var functionsRequiringInit = [
        {
            name: 'GetParserError',
            selector: function (xmlDoc)
            {ULSMSN:;
                var fnGetParserError;

                if (xmlDoc != null && xmlDoc.parseError != null)
                {
                    fnGetParserError = function (xmlDoc)
                    {ULSMSN:;
                        var parserError;
                        if (xmlDoc.parseError != 0)
                        {

                            var props = ['errorCode', 'reason', 'line', 'linepos', 'srcText', 'url', 'filepos'];

                            parserError = '';
                            for (var i = 0; i < props.length; i++)
                            {
                                parserError += props[i] + ': ' + xmlDoc.parseError[props[i]] + '\n';
                            }
                        }

                        return parserError;
                    }
                }

                else
                {
                    fnGetParserError = function (xmlDoc)
                    {ULSMSN:;
                        var parserError;
                        if (xmlDoc.documentElement.namespaceURI == "http://www.mozilla.org/newlayout/xml/parsererror.xml" && xmlDoc.documentElement.tagName == "parsererror")
                        {
                            parserError = xmlDoc.documentElement.textContent;
                        }
                        else if (xmlDoc.documentElement.firstChild && xmlDoc.documentElement.firstChild.tagName == "parsererror")
                        {
                            parserError = xmlDoc.documentElement.firstChild.textContent;
                        }

                        return parserError;
                    }
                }

                return fnGetParserError;
            }
        },
        {
            name: 'GetText',
            selector: function (contextNode)
            {ULSMSN:;

                return ('text' in contextNode) ?
                    function (contextNode) {ULSMSN:; return contextNode.text; } :
                    function (contextNode) {ULSMSN:; return contextNode.textContent; };
            }
        },
        {
            name: 'SetText',
            selector: function (contextNode)
            {ULSMSN:;

                return ('text' in contextNode) ?
                    function (contextNode, newValue) {ULSMSN:; contextNode.text = newValue; } :
                    function (contextNode, newValue) {ULSMSN:; contextNode.textContent = newValue; };
            }
        },
        {
            name: 'GetNamespaceResolver',
            selector: function (contextNode)
            {ULSMSN:;
                var xmlDoc = (contextNode.nodeType == XUI.DomUtilities.NodeType.Document) ? contextNode : contextNode.ownerDocument;
                return ('setProperty' in xmlDoc) ?
                    function (contextNode, oNamespaces)
                    {ULSMSN:;

                        return function (sPrefix)
                        {ULSMSN:;
                            var xmlDoc = (contextNode.nodeType == XUI.DomUtilities.NodeType.Document) ? contextNode : contextNode.ownerDocument;

                            xmlDoc.setProperty("SelectionLanguage", "XPath");

                            if (oNamespaces != null)
                            {
                                var nsDeclarations = [];
                                var nsString = "xmlns:{0}='{1}'";
                                for (var prefix in oNamespaces)
                                {
                                    nsDeclarations.push(String.format(nsString, prefix, oNamespaces[prefix]));
                                }

                                xmlDoc.setProperty('SelectionNamespaces', nsDeclarations.join(' '));
                            }
                        }
                    }
                    :
                    function (contextNode, oNamespaces)
                    {ULSMSN:;
                        if (oNamespaces != null)
                        {

                            return function (sPrefix)
                            {ULSMSN:;
                                return oNamespaces[sPrefix];
                            }
                        }
                    };
            }
        },
        {
            name: 'TransformNodeToString',
            selector: function (xmlDoc) 
            {ULSMSN:;
                if (window.XSLTProcessor != null)
                {
                    return function (xmlDoc, xsltDoc, oXsltNamespaces, bAllowXsltScript)
                    {ULSMSN:;
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsltDoc);

                        return api.XMLSerializer.serializeToString(xsltProcessor.transformToFragment(xmlDoc, document));
                    }
                }

                else if ('transformNode' in xmlDoc)
                {
                    return function (xmlDoc, xsltDoc, oXsltNamespaces, bAllowXsltScript)
                    {ULSMSN:;

                        api.GetNamespaceResolver(xmlDoc, oXsltNamespaces)();
                        xmlDoc.setProperty('AllowXsltScript', bAllowXsltScript);
                        api.GetNamespaceResolver(xsltDoc, oXsltNamespaces)();
                        xsltDoc.setProperty('AllowXsltScript', bAllowXsltScript);

                        return xmlDoc.transformNode(xsltDoc);
                    }
                }
                else
                {

                    return function (xmlDoc, xsltDoc, oXsltNamespaces, bAllowXsltScript)
                    {ULSMSN:;
                        return null;
                    }
                }
            }
        },
        {
            name: 'CreateElementNS',
            selector: function (xmlDoc)
            {ULSMSN:;
                return 'createElementNS' in xmlDoc ?
                function (xmlDoc, namespaceURI, qualifiedName) {ULSMSN:; return xmlDoc.createElementNS(namespaceURI, qualifiedName); } :
                function (xmlDoc, namespaceURI, qualifiedName) {ULSMSN:; return xmlDoc.createNode(1, qualifiedName, namespaceURI); };
            }
        },
        {
            name: 'CreateDocument',
            selector: function ()
            {ULSMSN:;
                return 'implementation' in document && 'createDocument' in document.implementation ?
                function () {ULSMSN:; return document.implementation.createDocument(null, null, null); } :
                function () {ULSMSN:; return GetActiveXObject(['Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument']); };
            }
        }
        ];

    function UpdateStub(fnInfo)
    {ULSMSN:;

        api[fnInfo.name] = function ()
        {ULSMSN:;

            api[fnInfo.name] = fnInfo.selector(arguments[0]);
            return api[fnInfo.name].apply(api, arguments);
        };
    }

    var api =
    {

        DomUtils: XUI.DomUtilities,

        DOMParser: GetReusableObject('DOMParser'),

        XMLSerializer: GetReusableObject('XMLSerializer'),

        XPathEvaluator: GetReusableObject('XPathEvaluator'),

        Load: function (sUrl, bAsync, fnOnSuccess, fnOnFailure)
        {ULSMSN:;

            var xmlhttp = new XMLHttpRequest();

            if (bAsync)
            {
                xmlhttp.onreadystatechange = WaitForReadyState;
            }

            try
            {
                xmlhttp.open("GET", sUrl, bAsync);
                xmlhttp.send();
            }
            catch (ex)
            {
                fnOnFailure(400, null);
                return null;
            }

            if (!bAsync)
            {
                CheckXmlHttpResult();
            }

            function WaitForReadyState()
            {ULSMSN:;
                if (xmlhttp.readyState == 4)
                {
                    xmlhttp.onreadystatechange = function () { };
                    CheckXmlHttpResult();
                }
            }

            function CheckXmlHttpResult()
            {ULSMSN:;
                if (xmlhttp.status == 200)
                {
                    fnOnSuccess(xmlhttp.responseXML);
                }
                else
                {
                    fnOnFailure(xmlhttp.status, xmlhttp.responseXML);
                }
            }
        },

        LoadXml: function (sXml)
        {ULSMSN:;
            return this.DOMParser.parseFromString(sXml, 'text/xml');
        },

        SelectNodes: function (contextNode, sXPath, oNamespaces)
        {ULSMSN:;
            var result = [];

            var xPathNodes = this.XPathEvaluator.evaluate(
                sXPath,
                contextNode,
                this.GetNamespaceResolver(contextNode, oNamespaces),
                ORDERED_NODE_ITERATOR_TYPE,
                null
            );
            if (xPathNodes != null)
            {
                var node = xPathNodes.iterateNext();
                while (node != null)
                {
                    result.push(node);
                    node = xPathNodes.iterateNext();
                }
            }

            return result;
        },

        SelectSingleNode: function (contextNode, sXPath, oNamespaces)
        {ULSMSN:;
            var xPathNode = this.XPathEvaluator.evaluate(
                sXPath,
                contextNode,
                this.GetNamespaceResolver(contextNode, oNamespaces),
                FIRST_ORDERED_NODE_TYPE,
                null
            );
            return (xPathNode != null) ? xPathNode.singleNodeValue : null;
        },

        CreateNSDictionary: function (contextNode)
        {ULSMSN:;
            var resolver = {};

            if (contextNode)
            {
                var attribList = contextNode.attributes;
                var attribLength = attribList.length;

                for (var i = 0; i < attribLength; i++)
                {
                    var attrib = attribList.item(i);

                    if (attrib.prefix == "xmlns")
                    {
                        resolver[this.DomUtils.GetBaseName(attrib)] = attrib.nodeValue;
                    }
                    else if (attrib.nodeName == "xmlns")
                    {
                        resolver["default"] = attrib.nodeValue;
                    }
                }
            }

            return resolver;
        },

        GetParserError: function (xmlDoc) { },

        GetText: function (contextNode) { },

        SetText: function (contextNode, newValue) { },

        GetNamespaceResolver: function (contextNode, oNamespaces) { },

        TransformNodeToString: function (xmlDoc, xsltDoc, oXsltNamespaces, bAllowXsltScript) { },

        CreateElementNS: function (xmlDoc, namespaceURI, qualifiedName) { },

        CreateDocument: function () { }
    };

    for (var i = 0; i < functionsRequiringInit.length; i++)
    {
        UpdateStub(functionsRequiringInit[i]);
    }

    return api;
} ();


Type.registerNamespace('XUI');


if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs ) != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("XUI.js");
