
Type.registerNamespace('Srch');

Srch.AU = function Srch_AU() {
}
Srch.AU.get_querySuggestionLanguage = function Srch_AU$get_querySuggestionLanguage() {
    var $v_0 = -1;
    var $v_1 = Srch.ScriptApplicationManager.get_current();
    var $$dict_2 = $v_1.queryGroups;
    for (var $$key_3 in $$dict_2) {
        var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (!Srch.U.n($v_2)) {
            var $v_3 = $v_2.value;
            if (!Srch.U.n($v_3) && !Srch.U.n($v_3.dataProvider)) {
                return $v_3.dataProvider.get_effectiveQueryLanguage();
            }
        }
    }
    if ($v_0 < 1) {
        var $v_4 = $v_1.states['languages'];
        if (!Srch.U.n($v_4) && $v_4.length > 0) {
            var $v_5 = $v_4[0];
            if (!Srch.U.n($v_5)) {
                $v_0 = $v_5.id;
            }
        }
    }
    if ($v_0 < 1) {
        var $v_6 = $v_1.states['browserLanguage'];
        if ($v_6 > 0) {
            $v_0 = $v_6;
        }
    }
    return $v_0;
}


Srch.AU.registerClass('Srch.AU');

// Copyright (c) Microsoft Corporation. All rights reserved.
//
// This source is subject to the Microsoft Permissive License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/sharedsourcelicenses.mspx.
// All other rights reserved.

Type.registerNamespace('AjaxControlToolkit');

///////////////////////////////////////////////////////////////////////////////
// start of Common/Common.js

AjaxControlToolkit._CommonToolkitScripts = function() {
    /// <summary>
    /// The _CommonToolkitScripts class contains functionality utilized across a number
    /// of controls (but not universally)
    /// </summary>
    /// <remarks>
    /// You should not create new instances of _CommonToolkitScripts.  Instead you should use the shared instance CommonToolkitScripts (or AjaxControlToolkit.CommonToolkitScripts).
    /// </remarks>
}
AjaxControlToolkit._CommonToolkitScripts.prototype = {
    getCurrentStyle: function(element, attribute, defaultValue) {
        /// <summary>
        /// CommonToolkitScripts.getCurrentStyle is used to compute the value of a style attribute on an
        /// element that is currently being displayed.  This is especially useful for scenarios where
        /// several CSS classes and style attributes are merged, or when you need information about the
        /// size of an element (such as its padding or margins) that is not exposed in any other fashion.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Live DOM element to check style of
        /// </param>
        /// <param name="attribute" type="String">
        /// The style attribute's name is expected to be in a camel-cased form that you would use when
        /// accessing a JavaScript property instead of the hyphenated form you would use in a CSS
        /// stylesheet (i.e. it should be "backgroundColor" and not "background-color").
        /// </param>
        /// <param name="defaultValue" type="Object" mayBeNull="true" optional="true">
        /// In the event of a problem (i.e. a null element or an attribute that cannot be found) we
        /// return this object (or null if none if not specified).
        /// </param>
        /// <returns type="Object">
        /// Current style of the element's attribute
        /// </returns>

        var currentValue = null;
        if (element) {
            if (element.currentStyle) {
                currentValue = element.currentStyle[attribute];
            } else if (document.defaultView && document.defaultView.getComputedStyle) {
                var style = document.defaultView.getComputedStyle(element, null);
                if (style) {
                    currentValue = style[attribute];
                }
            }

            if (!currentValue && element.style.getPropertyValue) {
                currentValue = element.style.getPropertyValue(attribute);
            }
            else if (!currentValue && element.style.getAttribute) {
                currentValue = element.style.getAttribute(attribute);
            }
        }

        if ((!currentValue || currentValue == "" || typeof (currentValue) === 'undefined')) {
            if (typeof (defaultValue) != 'undefined') {
                currentValue = defaultValue;
            }
            else {
                currentValue = null;
            }
        }
        return currentValue;
    },

    getLocation: function(element) {
        /// <summary>Gets the coordinates of a DOM element.</summary>
        /// <param name="element" domElement="true"/>
        /// <returns type="Sys.UI.Point">
        ///   A Point object with two fields, x and y, which contain the pixel coordinates of the element.
        /// </returns>

        // workaround for an issue in getLocation where it will compute the location of the document element.
        // this will return an offset if scrolled.
        //
        if (element === document.documentElement) {
            return new Sys.UI.Point(0, 0);
        }

        return Sys.UI.DomElement.getLocation(element);
    },

    setLocation: function(element, point) {
        /// <summary>
        /// Sets the current location for an element.
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// DOM element
        /// </param>
        /// <param name="point" type="Object">
        /// Point object (of the form {x,y})
        /// </param>
        /// <remarks>
        /// The position is relative from the elements nearest position:relative or
        /// position:absolute element.
        /// </remarks>
        Sys.UI.DomElement.setLocation(element, point.x, point.y);
    },

    getBounds: function(element) {
        /// <summary>Gets the coordinates, width and height of an element.</summary>
        /// <param name="element" domElement="true"/>
        /// <returns type="Sys.UI.Bounds">
        ///   A Bounds object with four fields, x, y, width and height, which contain the pixel coordinates,
        ///   width and height of the element.
        /// </returns>
        /// <remarks>
        ///   Use the CommonToolkitScripts version of getLocation to handle the workaround for IE6.  We can
        ///   remove the below implementation and just call Sys.UI.DomElement.getBounds when the other bug
        ///   is fixed.
        /// </remarks>

        var offset = $common.getLocation(element);
        return new Sys.UI.Bounds(offset.x, offset.y, element.offsetWidth || 0, element.offsetHeight || 0);
    },

    getVisible: function(element) {
        /// <summary>
        /// Check if an element is visible
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <returns type="Boolean" mayBeNull="false">
        /// True if the element is visible, false otherwise
        /// </returns>

        // Note: reference to CommonToolkitScripts must be left intact (i.e. don't
        // replace with 'this') because this function will be aliased

        return (element &&
                ("none" != $common.getCurrentStyle(element, "display")) &&
                ("hidden" != $common.getCurrentStyle(element, "visibility")));
    },

    setVisible: function(element, value) {
        /// <summary>
        /// Check if an element is visible
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" domElement="true">
        /// Element
        /// </param>
        /// <param name="value" type="Boolean" mayBeNull="false">
        /// True to make the element visible, false to hide it
        /// </param>

        // Note: reference to CommonToolkitScripts must be left intact (i.e. don't
        // replace with 'this') because this function will be aliased

        if (element && value != $common.getVisible(element)) {
            if (value) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
            element.style.visibility = value ? 'visible' : 'hidden';
        }
    },

    prepareHiddenElementForATDeviceUpdate: function() {
        /// <summary>
        /// JAWS, an Assistive Technology device responds to updates to form elements 
        /// and refreshes its document buffer to what is showing live
        /// in the browser. To ensure that Toolkit controls that make XmlHttpRequests to
        /// retrieve content are useful to users with visual disabilities, we update a
        /// hidden form element to ensure that JAWS conveys what is in
        /// the browser. See this article for more details: 
        /// http://juicystudio.com/article/improving-ajax-applications-for-jaws-users.php
        /// This method creates a hidden input on the screen for any page that uses a Toolkit
        /// control that will perform an XmlHttpRequest.
        /// </summary>   
        var objHidden = document.getElementById('hiddenInputToUpdateATBuffer_CommonToolkitScripts');
        if (!objHidden) {
            var objHidden = document.createElement('input');
            objHidden.setAttribute('type', 'hidden');
            objHidden.setAttribute('value', '1');
            objHidden.setAttribute('id', 'hiddenInputToUpdateATBuffer_CommonToolkitScripts');
            objHidden.setAttribute('name', 'hiddenInputToUpdateATBuffer_CommonToolkitScripts');
            if (document.forms[0]) {
                document.forms[0].appendChild(objHidden);
            }
        }
    },

    updateFormToRefreshATDeviceBuffer: function() {
        /// <summary>
        /// Updates the hidden buffer to ensure that the latest document stream is picked up
        /// by the screen reader.
        /// </summary>
        var objHidden = document.getElementById('hiddenInputToUpdateATBuffer_CommonToolkitScripts');

        if (objHidden) {
            if (objHidden.getAttribute('value') == '1') {
                objHidden.setAttribute('value', '0');
            } else {
                objHidden.setAttribute('value', '1');
            }
        }
    },

    __DOMEvents: {
        focusin: { eventGroup: "UIEvents", init: function (e, p) { e.initUIEvent("focusin", true, false, window, 1); } },
        focusout: { eventGroup: "UIEvents", init: function (e, p) { e.initUIEvent("focusout", true, false, window, 1); } },
        activate: { eventGroup: "UIEvents", init: function (e, p) { e.initUIEvent("activate", true, true, window, 1); } },
        focus: { eventGroup: "UIEvents", init: function (e, p) { e.initUIEvent("focus", false, false, window, 1); } },
        blur: { eventGroup: "UIEvents", init: function (e, p) { e.initUIEvent("blur", false, false, window, 1); } },
        click: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("click", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        dblclick: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("click", true, true, window, 2, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mousedown: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("mousedown", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseup: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("mouseup", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseover: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("mouseover", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mousemove: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("mousemove", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        mouseout: { eventGroup: "MouseEvents", init: function (e, p) { e.initMouseEvent("mousemove", true, true, window, 1, p.screenX || 0, p.screenY || 0, p.clientX || 0, p.clientY || 0, p.ctrlKey || false, p.altKey || false, p.shiftKey || false, p.metaKey || false, p.button || 0, p.relatedTarget || null); } },
        load: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("load", false, false); } },
        unload: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("unload", false, false); } },
        select: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("select", true, false); } },
        change: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("change", true, false); } },
        submit: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("submit", true, true); } },
        reset: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("reset", true, false); } },
        resize: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("resize", true, false); } },
        scroll: { eventGroup: "HTMLEvents", init: function (e, p) { e.initEvent("scroll", true, false); } }
    },

    applyProperties: function (target, properties) {
        /// <summary>
        /// Quick utility method to copy properties from a template object to a target object
        /// </summary>
        /// <param name="target" type="Object">The object to apply to</param>
        /// <param name="properties" type="Object">The template to copy values from</param>

        for (var p in properties) {
            var pv = properties[p];
            if (pv != null && Object.getType(pv) === Object) {
                var tv = target[p];
                $common.applyProperties(tv, pv);
            } else {
                target[p] = pv;
            }
        }
    },

    tryFireEvent: function (element, eventName, properties) {
        /// <summary>
        /// Attempts to fire a DOM event on an element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement">The element to fire the event</param>
        /// <param name="eventName" type="String">The name of the event to fire (without an 'on' prefix)</param>
        /// <param name="properties" type="Object">Properties to add to the event</param>
        /// <returns type="Boolean">True if the event was successfully fired, otherwise false</returns>

        try {
            if (document.createEventObject) {
                var e = document.createEventObject();
                $common.applyProperties(e, properties || {});
                element.fireEvent("on" + eventName, e);
                return true;
            } else if (document.createEvent) {
                var def = $common.__DOMEvents[eventName];
                if (def) {
                    var e = document.createEvent(def.eventGroup);
                    def.init(e, properties || {});
                    element.dispatchEvent(e);
                    return true;
                }
            }
        } catch (e) {
        }
        return false;
    },

    overlaps: function(r1, r2) {

        return r1.x < (r2.x + r2.width)
                    && r2.x < (r1.x + r1.width)
                    && r1.y < (r2.y + r2.height)
                    && r2.y < (r1.y + r1.height);
    }
}

// Create the singleton instance of the CommonToolkitScripts
var CommonToolkitScripts = AjaxControlToolkit.CommonToolkitScripts = new AjaxControlToolkit._CommonToolkitScripts();
var $common = CommonToolkitScripts;

Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(pageLoadedCallOut);
function pageLoadedCallOut(sender, args) {
    var updatedPanels = args.get_panelsUpdated();
    if (updatedPanels && updatedPanels.length > 0) {
        for (i = 0; i < updatedPanels.length; i++) {
            var panel = updatedPanels[i];
            if (panel && panel.id.endsWith('UpdatePanelPeopleCore')) {
                AdjustPopupPanel(panel);
                var allLinks = panel.getElementsByTagName('a');
                if (allLinks && allLinks.length > 0) {
                    var firstLink = allLinks[0];
                    if (firstLink) {
                        firstLink.focus();
                        break;
                    }
                }
            }
        }
        $common.updateFormToRefreshATDeviceBuffer();
    }
}

function AdjustPopupPanel(panel, source) {
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && (!document.documentMode || document.documentMode == 7)) {
        if (panel && panel.currentStyle.direction == "rtl") {
            panel.dir = "";
            panel.dir = "rtl";
        }

        if (source) {
            source.style.display = 'block';
        }
    }
}













































































///////////////////////////////////////////////////////////////////////////////
// start of Compat/Timer/Timer.js

Sys.Timer = function() {
    Sys.Timer.initializeBase(this);

    this._interval = 1000;
    this._enabled = false;
    this._timer = null;
}

Sys.Timer.prototype = {
    get_interval: function() {
        return this._interval;
    },
    set_interval: function(value) {
        if (this._interval !== value) {
            this._interval = value;
            this.raisePropertyChanged('interval');

            if (!this.get_isUpdating() && (this._timer !== null)) {
                this._stopTimer();
                this._startTimer();
            }
        }
    },

    get_enabled: function() {
        return this._enabled;
    },
    set_enabled: function(value) {
        if (value !== this.get_enabled()) {
            this._enabled = value;
            this.raisePropertyChanged('enabled');
            if (!this.get_isUpdating()) {
                if (value) {
                    this._startTimer();
                }
                else {
                    this._stopTimer();
                }
            }
        }
    },

    add_tick: function(handler) {
        this.get_events().addHandler("tick", handler);
    },
    remove_tick: function(handler) {
        this.get_events().removeHandler("tick", handler);
    },

    dispose: function() {
        this.set_enabled(false);
        this._stopTimer();

        Sys.Timer.callBaseMethod(this, 'dispose');
    },

    _timerCallback: function() {
        var handler = this.get_events().getHandler("tick");
        if (handler) {
            handler(this, Sys.EventArgs.Empty);
        }
    },

    _startTimer: function() {
        this._timer = window.setInterval(Function.createDelegate(this, this._timerCallback), this._interval);
    },

    _stopTimer: function() {
        window.clearInterval(this._timer);
        this._timer = null;
    }
}

Sys.Timer.descriptor = {
    properties: [{ name: 'interval', type: Number },
                    { name: 'enabled', type: Boolean}],
    events: [{ name: 'tick'}]
}

Sys.Timer.registerClass('Sys.Timer', Sys.Component);

















































































///////////////////////////////////////////////////////////////////////////////
// start of PopupExtender/PopupBehavior.js

AjaxControlToolkit.PopupBehavior = function(element) {
    /// <summary>
    /// The PopupBehavior is used to show/hide an element at a position
    /// relative to another element
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" mayBeNull="false" domElement="true">
    /// The DOM element the behavior is associated with
    /// </param>
    AjaxControlToolkit.PopupBehavior.initializeBase(this, [element]);

    this._parentElement = null;
    this._parentElementID = null;
    this._firstPopup = true;
    this._originalParent = null;
    this._visible = false;
}
AjaxControlToolkit.PopupBehavior.prototype = {
    initialize: function() {
        /// <summary>
        /// Initialize the PopupBehavior
        /// </summary>
        AjaxControlToolkit.PopupBehavior.callBaseMethod(this, 'initialize');

        this._hidePopup();
        this.get_element().style.position = "absolute";
    },

    dispose: function() {
        /// <summary>
        /// Dispose the PopupBehavior
        /// </summary>

        var element = this.get_element();
        if (element) {
            if (this._visible) {
                this.hide();
            }
            if (this._originalParent) {
                element.parentNode.removeChild(element);
                this._originalParent.appendChild(element);
                this._originalParent = null;
            }
        }
        this._parentElement = null;

        AjaxControlToolkit.PopupBehavior.callBaseMethod(this, 'dispose');
    },

    show: function() {
        /// <summary>
        /// Show the popup
        /// </summary>

        // Ignore requests to hide multiple times
        if (this._visible) {
            return;
        }

        this._visible = true;
        var element = this.get_element();
        $common.setVisible(element, true);
    },

    hide: function() {
        /// <summary>
        /// Hide the popup
        /// </summary>

        // Ignore requests to hide multiple times
        if (!this._visible) {
            return;
        }

        this._visible = false;
        this._hidePopup();
        this._hideCleanup();
    },

    _hidePopup: function() {
        /// <summary>
        /// Internal hide implementation
        /// </summary>

        var element = this.get_element();
        $common.setVisible(element, false);
        if (element.originalWidth) {
            element.style.width = element.originalWidth + "px";
            element.originalWidth = null;
        }
    },

    _hideCleanup: function() {
        /// <summary>
        /// Perform cleanup after hiding the element
        /// </summary>

        var element = this.get_element();

        this.raiseHidden(Sys.EventArgs.Empty);
    },

    get_parentElement: function() {
        /// <value type="Sys.UI.DomElement" domElement="true">
        /// Parent dom element.
        /// </value>

        if (!this._parentElement && this._parentElementID) {
            this.set_parentElement($get(this._parentElementID));
            Sys.Debug.assert(this._parentElement != null, String.format(AjaxControlToolkit.Resources.PopupExtender_NoParentElement, this._parentElementID));
        }
        return this._parentElement;
    },
    set_parentElement: function(element) {
        this._parentElement = element;
        this.raisePropertyChanged('parentElement');
    },

    get_parentElementID: function() {
        /// <value type="String">
        /// Parent dom element.
        /// </value>

        if (this._parentElement) {
            return this._parentElement.id
        }
        return this._parentElementID;
    },
    set_parentElementID: function(elementID) {
        this._parentElementID = elementID;
        if (this.get_isInitialized()) {
            this.set_parentElement($get(elementID));
        }
    },

    get_visible: function() {
        /// <value type="Boolean" mayBeNull="false">
        /// Whether or not the popup is currently visible
        /// </value>
        return this._visible;
    },

    add_hidden: function(handler) {
        /// <summary>
        /// Add an event handler for the hidden event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().addHandler('hidden', handler);
    },
    remove_hidden: function(handler) {
        /// <summary>
        /// Remove an event handler from the hidden event
        /// </summary>
        /// <param name="handler" type="Function" mayBeNull="false">
        /// Event handler
        /// </param>
        /// <returns />
        this.get_events().removeHandler('hidden', handler);
    },
    raiseHidden: function(eventArgs) {
        /// <summary>
        /// Raise the hidden event
        /// </summary>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="false">
        /// Event arguments for the hidden event
        /// </param>
        /// <returns />

        var handler = this.get_events().getHandler('hidden');
        if (handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit.PopupBehavior.registerClass('AjaxControlToolkit.PopupBehavior', Sys.UI.Behavior);
//AjaxControlToolkit.PopupBehavior.descriptor = {
//    properties: [   {name: 'parentElement', attributes: [ Sys.Attributes.Element, true ] },
//                    {name: 'x', type: Number},
//                    {name: 'y', type: Number} ],
//    events: [   {name: 'show'},
//                {name: 'hide'} ]
//}

















































































///////////////////////////////////////////////////////////////////////////////
// start of PopupControl/PopupControlBehavior.js

AjaxControlToolkit.PopupControlBehavior = function(element) {
    /// <summary>
    /// The PopupControlBehavior opens a popup window next to the target element
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" domElement="true">
    /// DOM element associated with the behavior
    /// </param>
    AjaxControlToolkit.PopupControlBehavior.initializeBase(this, [element]);

    // Properties
    this._popupControlID = null;
    this._popupShowingScript = null;
    this._popupHiddenScript = null;
    this._hoverDelay = 0;
    this._unhoverDelay = 0;
    this._position = null;

    // Variables
    this._popupElement = null;
    this._popupBehavior = null;
    this._popupVisible = false;
    this._clickHandler = null;
    this._keyDownHandler = null;
    this._mouseOverHandler = null;
    this._mouseOutHandler = null;
    this._popupKeyDownHandler = null;
    this._popupClickHandler = null;
    this._popupMouseOverHandler = null;
    this._popupMouseOutHandler = null;
    this._bodyClickHandler = null;
    this._hoverTimeoutID = undefined;
    this._unhoverTimeoutID = undefined;
}
AjaxControlToolkit.PopupControlBehavior.prototype = {
    initialize: function() {
        /// <summary>
        /// Initialize the behavior
        /// </summary>
        AjaxControlToolkit.PopupControlBehavior.callBaseMethod(this, 'initialize');
        $common.prepareHiddenElementForATDeviceUpdate();

        // Identify popup element from control id
        var e = this.get_element();
        this._popupElement = $get(this._popupControlID);

        // Hook up a PopupBehavior
        this._popupBehavior = $create(AjaxControlToolkit.PopupBehavior, { 'id': this.get_id() + 'PopupBehavior', 'parentElement': e }, null, null, this._popupElement);

        // Create delegates
        this._clickHandler = Function.createDelegate(this, this._onClick);
        this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);
        this._mouseOverHandler = Function.createDelegate(this, this._onMouseOver);
        this._mouseOutHandler = Function.createDelegate(this, this._onMouseOut);
        this._popupClickHandler = Function.createDelegate(this, this._onPopupClick);
        this._popupMouseOverHandler = Function.createDelegate(this, this._onPopupMouseOver);
        this._popupMouseOutHandler = Function.createDelegate(this, this._onPopupMouseOut);
        this._bodyClickHandler = Function.createDelegate(this, this._onBodyClick);
        this._popupKeyDownHandler = Function.createDelegate(this, this._onPopupKeyDown);

        // Attach events
        $addHandler(e, 'click', this._clickHandler); // So that a dismissed popup can be more easily re-popped
        $addHandler(e, 'keydown', this._keyDownHandler);
        $addHandler(e, 'mouseover', this._mouseOverHandler);
        $addHandler(e, 'mouseout', this._mouseOutHandler);
        $addHandler(document.body, 'click', this._bodyClickHandler);
        $addHandler(this._popupElement, 'click', this._popupClickHandler);
        $addHandler(this._popupElement, 'keydown', this._popupKeyDownHandler);
        $addHandler(this._popupElement, 'mouseover', this._popupMouseOverHandler);
        $addHandler(this._popupElement, 'mouseout', this._popupMouseOutHandler);

        AdjustPopupPanel(this._popupElement, e);
    },

    dispose: function() {
        /// <summary>
        /// Dispose the behavior
        /// </summary>

        var e = this.get_element();

        if (this._popupBehavior) {
            this._popupBehavior.dispose();
            this._popupBehavior = null;
        }
        if (this._clickHandler) {
            $removeHandler(e, 'click', this._clickHandler);
            this._clickHandler = null;
        }
        if (this._keyDownHandler) {
            $removeHandler(e, 'keydown', this._keyDownHandler);
            this._keyDownHandler = null;
        }
        if (this._mouseOverHandler) {
            $removeHandler(e, 'mouseover', this._mouseOverHandler);
            this._mouseOverHandler = null;
        }
        if (this._mouseOutHandler) {
            $removeHandler(e, 'mouseout', this._mouseOutHandler);
            this._mouseOutHandler = null;
        }
        if (this._bodyClickHandler) {
            $removeHandler(document.body, 'click', this._bodyClickHandler);
            this._bodyClickHandler = null;
        }
        if (this._popupClickHandler) {
            $removeHandler(this._popupElement, 'click', this._popupClickHandler);
            this._popupClickHandler = null;
        }
        if (this._popupKeyDownHandler) {
            $removeHandler(this._popupElement, 'keydown', this._popupKeyDownHandler);
            this._popupKeyDownHandler = null;
        }
        if (this._popupMouseOverHandler) {
            $removeHandler(this._popupElement, 'mouseover', this._popupMouseOverHandler);
            this._popupMouseOverHandler = null;
        }
        if (this._popupMouseOutHandler) {
            $removeHandler(this._popupElement, 'mouseout', this._popupMouseOutHandler);
            this._popupMouseOutHandler = null;
        }
        AjaxControlToolkit.PopupControlBehavior.callBaseMethod(this, 'dispose');
    },

    clearHoverTimer: function() {
        if (this._hoverDelay && this._hoverDelay > 0 && this._hoverTimeoutID) {
            window.clearTimeout(this._hoverTimeoutID);
            this._hoverTimeoutID = undefined;
        }
    },

    setHoverTimer: function() {
        if (this._hoverDelay && this._hoverDelay > 0) {
            this._hoverTimeoutID =
                window.setTimeout(Function.createDelegate(this, this.showPopup), this._hoverDelay);
            return true;
        }
        else {
            return false;
        }
    },

    clearUnhoverTimer: function() {
        if (this._unhoverDelay && this._unhoverDelay > 0 && this._unhoverTimeoutID) {
            window.clearTimeout(this._unhoverTimeoutID);
            this._unhoverTimeoutID = undefined;
        }
    },

    setUnhoverTimer: function() {
        if (this._unhoverDelay && this._unhoverDelay > 0) {
            this._unhoverTimeoutID =
                window.setTimeout(Function.createDelegate(this, this.hidePopup), this._unhoverDelay);
            return true;
        }
        else {
            return false;
        }
    },

    showPopup: function() {
        /// <summary>
        /// Display the popup
        /// </summary>

        var old = AjaxControlToolkit.PopupControlBehavior.__VisiblePopup;
        if (old && old._popupBehavior) {
            old.hidePopup();
        }

        var element = this.get_element();

        if (element && Sys.Browser.agent != Sys.Browser.InternetExplorer || (document.documentMode && document.documentMode != 7)) {
            element.parentNode.insertBefore(this._popupElement, element.nextSibling);
        }

        this.clearHoverTimer();
        if (this._popupShowingScript) {
            eval(this._popupShowingScript);
        }
        this._popupBehavior.show();

        if (this._popupElement && Sys.Browser.agent == Sys.Browser.InternetExplorer && (!document.documentMode || document.documentMode == 7)) {
            var elementBounds = $common.getBounds(element);
            if (elementBounds) {
                var x;
                if (this._popupElement.currentStyle.direction == "rtl") {
                    var xOffset = 0;
                    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
                        xOffset = 16;
                    }
                    x = elementBounds.x + elementBounds.width - this._popupElement.offsetWidth - xOffset;
                }
                else {
                    x = elementBounds.x;
                }
                var y = elementBounds.y + element.offsetHeight

                var bounds = new Sys.UI.Bounds(x, y, this._popupElement.offsetWidth, this._popupElement.offsetHeight);
                $common.setLocation(this._popupElement, bounds);
            }
        }

        this._popupVisible = true;
        AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = this;
    },

    hidePopup: function() {
        /// <summary>
        /// Hide the popup
        /// </summary>               

        this.clearUnhoverTimer();
        this._popupBehavior.hide();
        if (this._popupHiddenScript) {
            eval(this._popupHiddenScript);
        }
        this._popupVisible = false;
        AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = null;
    },

    hidePopupReturnFocus: function() {
        if (this._popupVisible) {
            this.hidePopup();
            // Return focus to the control
            this.get_element().focus();
        }
    },

    _onClick: function(e) {
        // Set the popup position and display it
        if (!this._popupVisible) {
            this.showPopup();
        }
        //else {
        //    this.hidePopup();
        //}
        if (e) {
            e.stopPropagation();
        }
    },

    _onKeyDown: function(e) {
        if (e.keyCode == 27 /* Escape */) {
            this.hidePopupReturnFocus();
        }
    },

    _onMouseOver: function(e) {
        /// <summary>
        /// Set timeout or show pop if no timeout
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent" mayBeNull="true">
        /// Event info
        /// </param>

        this.clearUnhoverTimer();

        if (!this._popupVisible) {
            this.setHoverTimer();
        }
    },

    _onMouseOut: function(e) {
        /// <summary>
        /// clear timeout or show pop if no timeout
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent" mayBeNull="true">
        /// Event info
        /// </param>

        this.clearHoverTimer();

        if (this._popupVisible) {
            this.setUnhoverTimer();
        }
    },

    _onPopupKeyDown: function(e) {
        /// <summary>
        /// Handle key presses in the popup element
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>

        // Handle key presses in the popup element
        if (e.keyCode == 27 /* Escape */) {
            this.hidePopupReturnFocus();
        }
    },

    _onPopupMouseOver: function(e) {
        if (this._popupVisible) {
            this.clearUnhoverTimer();
        }
    },

    _onPopupMouseOut: function(e) {
        if (this._popupVisible) {
            this.setUnhoverTimer();
        }
    },

    _onPopupClick: function(e) {
        /// <summary>
        /// Click handler for the popup
        /// </summary>
        /// <param name="e" type="Sys.UI.DomEvent">
        /// Event info
        /// </param>
        if (this._popupVisible) {
            e.stopPropagation();
        }
    },

    _onBodyClick: function() {
        /// <summary>
        /// Handler for the HTML body tag's click event
        /// </summary>

        // Hide the popup if something other than our target or popup
        // was clicked (since each of these stop the event from bubbling
        // up to the body)
        if (this._popupVisible) {
            this.hidePopup();
        }
    },

    get_PopupControlID: function() {
        /// <value type="String">
        /// The ID of the control to display
        /// </value>
        return this._popupControlID;
    },
    set_PopupControlID: function(value) {
        if (this._popupControlID != value) {
            this._popupControlID = value;
            this.raisePropertyChanged('PopupControlID');
        }
    },

    get_PopupShowingScript: function() {
        return this._popupShowingScript;
    },
    set_PopupShowingScript: function(value) {
        if (this._popupShowingScript != value) {
            this._popupShowingScript = value;
            this.raisePropertyChanged('PopupShowingScript');
        }
    },

    get_PopupHiddenScript: function() {
        return this._popupHiddenScript;
    },
    set_PopupHiddenScript: function(value) {
        if (this._popupHiddenScript != value) {
            this._popupHiddenScript = value;
            this.raisePropertyChanged('PopupHiddenScript');
        }
    },

    get_HoverDelay: function() {
        return this._hoverDelay;
    },
    set_HoverDelay: function(value) {
        if (this._hoverDelay != value) {
            this._hoverDelay = value;
            this.raisePropertyChanged('HoverDelay');
        }
    },

    get_UnhoverDelay: function() {
        return this._unhoverDelay;
    },
    set_UnhoverDelay: function(value) {
        if (this._unhoverDelay != value) {
            this._unhoverDelay = value;
            this.raisePropertyChanged('UnhoverDelay');
        }
    },

    get_PopupVisible: function() {
        /// <value type="Boolean">
        /// Whether the popup control is currently visible
        /// </value>
        return this._popupVisible;
    }
}
AjaxControlToolkit.PopupControlBehavior.registerClass('AjaxControlToolkit.PopupControlBehavior', Sys.UI.Behavior);

// This global variable tracks the currently visible popup.  Automatically
// hiding the popup when focus is lost does not work with our mechanism to
// hide the popup when something else is clicked... So we will instead go for
// the weaker strategy of letting at most one popup be visible at a time.
AjaxControlToolkit.PopupControlBehavior.__VisiblePopup = null;











































































///////////////////////////////////////////////////////////////////////////////
// start of AutoComplete/AutoCompleteBehavior.js

AjaxControlToolkit.AutoCompleteBehavior = function(element) {
    /// <summary>
    /// This behavior can be attached to a textbox to enable auto-complete/auto-suggest scenarios.
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false">
    /// DOM Element the behavior is associated with
    /// </param>
    /// <returns />
    AjaxControlToolkit.AutoCompleteBehavior.initializeBase(this, [element]);

    this._enterKeyDownScript = null;
    this._minimumPrefixLength = 3;
    this._completionInterval = 1000;
    this._offsetTop = 0;
    this._offsetWidth = 0;
    this._offsetLeft = 0;
    this._queryCount = 5;
    this._personalResultCount = 3; 
    this._showPeopleNameSuggestions = false;
    this._completionListElementID = null;
    this._completionListElement = null;
    this._popupBehavior = null;
    this._popupBehaviorHiddenHandler = null;
    this._timer = null;
    this._cache = null;
    this._currentPrefix = null;
    this._selectIndex = -1;
    //keep track of the highlighted list item
    this._highlightedItem = null;
    this._focusHandler = null;
    this._blurHandler = null;
    this._bodyClickHandler = null;
    this._completionListBlurHandler = null;
    this._keyDownHandler = null;
    this._mouseDownHandler = null;
    this._mouseOverHandler = null;
    this._tickHandler = null;
    this._enableCaching = true;
    this._textBoxHasFocus = false;
    this._completionListCssClass = null;
    this._completionListItemCssClass = null;
    this._personalResultTitleCssClass = null;
    this._hrCSSClass = null;
    this._personalResultTitleSingular = null;
    this._personalResultTitlePlural = null;
    this._highlightedItemCssClass = null;
    this._firstRowSelected = false;
    this._overlappingElementID = null;
    this._sourceId = null;
    // WebRequest object returned from WebServiceProxy.invoke
    this._webRequest = null;
    this._parentElementID = null;
}
AjaxControlToolkit.AutoCompleteBehavior.prototype = {
    initialize: function() {
        /// <summary>
        /// Initializes the autocomplete behavior.
        /// </summary>
        /// <returns />
        AjaxControlToolkit.AutoCompleteBehavior.callBaseMethod(this, 'initialize');
        $common.prepareHiddenElementForATDeviceUpdate();

        this._popupBehaviorHiddenHandler = Function.createDelegate(this, this._popupHidden);
        this._tickHandler = Function.createDelegate(this, this._onTimerTick);
        this._focusHandler = Function.createDelegate(this, this._onGotFocus);
        this._blurHandler = Function.createDelegate(this, this._onLostFocus);
        this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);
        this._mouseDownHandler = Function.createDelegate(this, this._onListMouseDown);
        this._mouseOverHandler = Function.createDelegate(this, this._onListMouseOver);
        this._completionListBlurHandler = Function.createDelegate(this, this._onCompletionListBlur);
        this._bodyClickHandler = Function.createDelegate(this, this._onCompletionListBlur);


        this._timer = new Sys.Timer();
        this.initializeTimer(this._timer);

        var element = this.get_element();
        this.initializeTextBox(element);

        if (this._completionListElementID !== null)
            this._completionListElement = $get(this._completionListElementID);
        if (this._completionListElement == null) {
            this._completionListElement = document.createElement('ul');
            this._completionListElement.id = this.get_id() + '_AutoCompContainer';

            // Safari styles the element incorrectly if it's added to the desired location
            if (Sys.Browser.agent === Sys.Browser.Safari) {
                document.body.appendChild(this._completionListElement);
            } else {
                element.parentNode.insertBefore(this._completionListElement, element.nextSibling);
            }
        }
        this.initializeCompletionList(this._completionListElement);

        var popupContainer = this._getPopupContainer(this._completionListElement);
        if (popupContainer && Sys.Browser.agent == Sys.Browser.InternetExplorer && (!document.documentMode || document.documentMode == 7)) {
            popupContainer.style.marginTop = "-1px";
        }

        this._popupBehavior = $create(AjaxControlToolkit.PopupBehavior, { 'id': this.get_id() + 'PopupBehavior', 'parentElement': this._getPopupPositionParent() }, null, null, popupContainer);
        this._popupBehavior.add_hidden(this._popupBehaviorHiddenHandler);
    },

    dispose: function() {
        /// <summary>
        /// Disposes the autocomplete behavior
        /// </summary>
        /// <returns />

        if (this._popupBehavior) {
            if (this._popupBehaviorHiddenHandler) {
                this._popupBehavior.remove_hidden(this._popupBehaviorHiddenHandler);
            }
            this._popupBehavior.dispose();
            this._popupBehavior = null;
        }
        if (this._timer) {
            this._timer.dispose();
            this._timer = null;
        }

        var element = this.get_element();
        if (element) {
            $removeHandler(element, "focus", this._focusHandler);
            $removeHandler(element, "blur", this._blurHandler);
            $removeHandler(element, "keydown", this._keyDownHandler);
            $removeHandler(this._completionListElement, 'blur', this._completionListBlurHandler);
            $removeHandler(this._completionListElement, 'mouseover', this._mouseOverHandler);
        }
        if (this._bodyClickHandler) {
            $removeHandler(document.body, 'click', this._bodyClickHandler);
            this._bodyClickHandler = null;
        }

        this._popupBehaviorHiddenHandler = null;
        this._tickHandler = null;
        this._focusHandler = null;
        this._blurHandler = null;
        this._keyDownHandler = null;
        this._completionListBlurHandler = null;
        this._mouseDownHandler = null;
        this._mouseOverHandler = null;

        AjaxControlToolkit.AutoCompleteBehavior.callBaseMethod(this, 'dispose');
    },

    initializeTimer: function(timer) {
        /// <summary>
        /// Initializes the timer
        /// </summary>
        /// <param name="timer" type="Sys.UI.Timer" DomElement="false" mayBeNull="false" />
        /// <returns />
        timer.set_interval(this._completionInterval);
        timer.add_tick(this._tickHandler);
    },

    initializeTextBox: function(element) {
        /// <summary>
        /// Initializes the textbox
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />    
        element.autocomplete = "off";
        $addHandler(element, "focus", this._focusHandler);
        $addHandler(element, "blur", this._blurHandler);
        $addHandler(element, "keydown", this._keyDownHandler);
    },

    initializeCompletionList: function(element) {
        /// <summary>
        /// Initializes the autocomplete list element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />        


        if (this._completionListCssClass) {
            Sys.UI.DomElement.addCssClass(element, this._completionListCssClass);
        }
        // Mousedown event is triggered on the individual suggestions so that proper feedback is given on mobile browsers
        $addHandler(element, "mouseover", this._mouseOverHandler);
        $addHandler(element, "blur", this._completionListBlurHandler);
        $addHandler(document.body, 'click', this._bodyClickHandler);
    },

    _getPopupPositionParent: function() {
        if (this._parentElementID) return $get(this._parentElementID);
        return this.get_element();
    },

    //keep walking up the dom tree till we find a node with a 'AutoCompContainer' suffix
    _getPopupContainer: function(element) {
        var idSuf = 'AutoCompContainer';
        var container = element;

        while (container) {
            if (container.id.endsWith(idSuf)) {
                return container;
            }
            container = container.parentNode;
        }

        //Couldn't find anything, just use the original element
        return element;
    },

    _currentCompletionWord: function() {
        var element = this.get_element();
        return element.value;
    },

    _getText: function(item) {
        if (item) {
            return (item.innerText || item.textContent || item);
        }
        else {
            return '';
        }
    },

    showPopup: function() {
        /// <summary>
        /// Show the completion list popup
        /// </summary>
        /// <remarks>
        /// If you cancel the showing event, you should still call
        /// showPopup to ensure consistency of the internal state
        /// </remarks>

        if (this._overlappingElementID != null) {
            var ob = $find(this._overlappingElementID);
            if (ob) { ob.hidePopup(); }
        }        

        this._popupBehavior.show();
    },

    hidePopup: function() {
        /// <summary>
        /// Hide the completion list popup
        /// </summary>
        /// <remarks>
        /// If you cancel the hiding event, you should still
        /// call hidePopup to ensure consistency of the internal
        /// state
        /// </remarks>

        if (this._popupBehavior)
            this._popupBehavior.hide();
        this._popupHidden();
    },

    _popupHidden: function() {
        /// <summary>
        /// Clean up the completion list popup after it has been hidden
        /// </summary>

        if (this._completionListElement) {
            // remove all the mousedown handlers from the child elements
            var children = this._completionListElement.childNodes;
            for (var i = 0; i < children.length; i++) {
                $clearHandlers(children[i]);
            }
            this._completionListElement.innerHTML = '';
        }
        this._selectIndex = -1;
        this._highlightedItem = null;
    },

    _highlightItem: function(item) {
        /// <summary>
        /// Highlights the specified item
        /// </summary>
        /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />

        // Unselect any previously highlighted item        
        if (this._highlightedItem) {
            if (this._completionListItemCssClass) {
                Sys.UI.DomElement.removeCssClass(this._highlightedItem, this._highlightedItemCssClass);
                Sys.UI.DomElement.addCssClass(this._highlightedItem, this._completionListItemCssClass);
            }
            this._highlightedItem = null;
        }

        if (item) {
            // Highlight the new item
            if (this._highlightedItemCssClass) {
                Sys.UI.DomElement.removeCssClass(item, this._completionListItemCssClass);
                Sys.UI.DomElement.addCssClass(item, this._highlightedItemCssClass);
            }
            this._highlightedItem = item;
        }
    },

    /// <summary>
    /// Walks up the DOM element hiearchy to find an element with a '_index' attribute
    /// </summary>
    /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
    /// Starting element of the walk
    /// </param>
    /// <returns name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
    /// A completion list item, null if not found
    /// </returns>

    _getCompletionListItem: function(element) {
        if (element) {
            if (element._index != null && element._index != undefined) {
                //found it
                return element;
            }
            else if (element === this._completionListElement) {
                //We got up to the _completionListElement.
                //Walking up any further is pointless since list items
                //only exist within the completion list element.
                return null;
            }
            else {
                //recurse
                return this._getCompletionListItem(element.parentNode);
            }
        }
        else {
            return null;
        }
    },

    /// <summary>
    /// Handler for the blur event on the autocomplete flyout.
    /// </summary>
    /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
    /// <returns />    
    _onCompletionListBlur: function(ev) {
        this.hidePopup();
    },

    _onListMouseDown: function(ev) {
        /// <summary>
        /// Handler for the mousedown event on the autocomplete flyout.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />     
        var item = this._getCompletionListItem(ev.target);
        if (item != null) {
            suggestedQuery = true;

            //trying to figure out if this is a results or a plain query, if it is a result, then redirect to the result url. otherwise start a search with the selected plain query string.
            if (item.isQuery !== null && item.isQuery !== undefined && item.isQuery === false && item.url !== null && item.url !== undefined) {
            	this.hidePopup();
                window.location = item.url;
            }
            else if (this._enterKeyDownScript) {
		        this._setText(item);
            	this.hidePopup();
                eval(this._enterKeyDownScript);
            }
        }
    },

    _onListMouseOver: function(ev) {
        /// <summary>
        /// Handler for the mouseover event on the autocomplete flyout.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />      
        var item = this._getCompletionListItem(ev.target);
        if (item != null) {
            this._highlightItem(item);
            // make sure the selected index is updated
            this._selectIndex = item._index;
            if (item.isQuery === true) {
				suggestedQuery = true;
            }
        }
    },

    _onGotFocus: function(ev) {
        /// <summary>
        /// Handler for textbox focus event.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />      
        this._textBoxHasFocus = true;
    },

    _onKeyDown: function(ev) {
        /// <summary>
        /// Handler for the textbox keydown event.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />      
        this._timer.set_enabled(false);
        // the last key press occured so we need to "reset" the timer.        
        var k = ev.keyCode ? ev.keyCode : ev.rawEvent.keyCode;
        if (k === Sys.UI.Key.esc) {
            //Restore what the user typed if we were over a query suggestion or a personal result (otherwise, it shouldn't have changed the text at all)
            if (this._selectIndex > -1)
				this._setText(this._currentPrefix);
            this.hidePopup();
            suggestedQuery = false;
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.up) {
            if (this._selectIndex > -1) {
                //skip title, horizonal bar etc., go to the item directly
                do {
                    this._selectIndex -= 1;
                } while (this._selectIndex > -1
                    && (this._completionListElement.childNodes[this._selectIndex].className === this._hrCSSClass || this._completionListElement.childNodes[this._selectIndex].className === this._personalResultTitleCssClass));
            }
            else {
                //warp around
                this._selectIndex = this._completionListElement.childNodes.length - 1;
            }

            if (this._selectIndex == -1) {
                this._highlightItem(null);
                //Restore what the user typed
                this._setText(this._currentPrefix);
                suggestedQuery = false;
            }
            else {
                var item = this._completionListElement.childNodes[this._selectIndex];
                if (item.className === this._completionListItemCssClass) {
                    this._handleScroll(item, this._selectIndex);
                    this._highlightItem(item);
                    //update the text with the current selection          
                    if (!Srch.U.n(item.isQuery)) {
                        if (item.isQuery) {
                            this._setText(this._completionListElement.childNodes[this._selectIndex]);
                        }
                        else {
                            this._setText(this._currentPrefix);
                        }
                    }
                    suggestedQuery = true;
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.down) {
            if (this._selectIndex < (this._completionListElement.childNodes.length - 1)) {
                //skip title, horizonal bar etc., go to the item directly
                do {
                    this._selectIndex += 1;
                } while (this._selectIndex < this._completionListElement.childNodes.length - 1
                    && (this._completionListElement.childNodes[this._selectIndex].className === this._hrCSSClass || this._completionListElement.childNodes[this._selectIndex].className === this._personalResultTitleCssClass));
            }
            else {
                //wrap around
                this._selectIndex = -1;
            }

            if (this._selectIndex == -1) {
                this._highlightItem(null);
                //Restore what the user typed
                this._setText(this._currentPrefix);
                suggestedQuery = false;
            }
            else {
                var item = this._completionListElement.childNodes[this._selectIndex];
                if (item.className === this._completionListItemCssClass) {
                    this._handleScroll(item, this._selectIndex);
                    this._highlightItem(item);
                    //update the text with the current selection          
                    if (!Srch.U.n(item.isQuery)) {
                        if (item.isQuery) {
                            this._setText(this._completionListElement.childNodes[this._selectIndex]);
                        }
                        else {
                            this._setText(this._currentPrefix);
                        }
                    }
                    suggestedQuery = true;
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.enter) {
            if (this._selectIndex !== -1) {
                //trying to figure out if this is a results or a plain query, if it is a result, then redirect to the result url. otherwise start a search with the selected plain query string.
                var item = this._completionListElement.childNodes[this._selectIndex];
                if (item !== null && item !== undefined && item.isQuery !== null && item.isQuery !== undefined && item.isQuery === false
                    && item.url !== null && item.url !== undefined) {
                    window.location = item.url;
                }
                else if (this._enterKeyDownScript) {
                    eval(this._enterKeyDownScript);
                }

                //close the flyout                
                this.hidePopup();
                ev.preventDefault();
            }
            else {
                // close the popup
                this.hidePopup();
            }
        }
        else if (k === Sys.UI.Key.tab) {
            this.hidePopup();
            suggestedQuery = false;
        }
        else if (k === Sys.UI.Key.right ||
            k === Sys.UI.Key.left ||
            k === Sys.UI.Key.pageUp ||
            k === Sys.UI.Key.pageDown ||
            k === Sys.UI.Key.home ||
            k === Sys.UI.Key.end) {
            //Ignored
        }
        else {
            if (!this._textBoxHasFocus) {
                //We are typing in the text box, but _textBoxHasFocus is false
                //This could happen if the textbox got focus before we attached
                //the onfocus event handler to the text box, so call the handler now.
                this._onGotFocus();
            }
            // start the timer to retrieve results since now it is an actual key            
            this._timer.set_enabled(true);
            suggestedQuery = false;
        }
    },

    _handleScroll: function(element, index) {
        /// <summary>
        /// Method to determine if an item is in view or not
        /// </summary>
        /// <returns />
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <param name="index" type="Number" DomElement="false" mayBeNull="true" />        
        var flyout = this._completionListElement;
        var elemBounds = $common.getBounds(element);
        var numItems = this._completionListElement.childNodes.length;
        if (((elemBounds.height * index) - (flyout.clientHeight + flyout.scrollTop)) >= 0) {
            // you need to scroll down
            flyout.scrollTop += (((elemBounds.height * index) - (flyout.clientHeight + flyout.scrollTop)) + elemBounds.height);
        }
        if (((elemBounds.height * (numItems - (index + 1))) - (flyout.scrollHeight - flyout.scrollTop)) >= 0) {
            // you need to scroll up
            flyout.scrollTop -= (((elemBounds.height * (numItems - (index + 1))) - (flyout.scrollHeight - flyout.scrollTop)) + elemBounds.height);
        }

        if (flyout.scrollTop % elemBounds.height !== 0) {
            if (((elemBounds.height * (index + 1)) - (flyout.clientHeight + flyout.scrollTop)) >= 0) {
                // an element is partially displayed at the bottom
                flyout.scrollTop -= (flyout.scrollTop % elemBounds.height);
            } else { // an element is partially displayed on the top 
                flyout.scrollTop += (elemBounds.height - (flyout.scrollTop % elemBounds.height));
            }
        }

    },

    _onLostFocus: function() {
        /// <summary>
        /// Handler textbox blur event.
        /// </summary>
        /// <returns />      
        this._textBoxHasFocus = false;
        this._timer.set_enabled(false);

        //Close the flyout since the textbox lost focus
        this.hidePopup();

        if (this._webRequest) {
            // abort the web service call if we are losing focus. no sense having it delay future web requests.
            this._webRequest.get_executor().abort();
            this._webRequest = null;
        }
    },

    _onMethodComplete: function(result, context) {
        /// <summary>
        /// Handler invoked when the webservice call is completed.
        /// </summary>
        /// <param name="result" type="Object" DomElement="false" mayBeNull="true" />
        /// <param name="context" type="String" DomElement="false" mayBeNull="true" />        
        /// <returns />     
        this._webRequest = null; // clear out our saved WebRequest object            
        this._update(context, result, /* cacheResults */true);
    },

    _onMethodFailed: function(err, response, context) {
        /// <summary>
        /// Handler invoked when the webservice call fails, currently a noop
        /// </summary>
        /// <param name="err" type="Object" DomElement="false" mayBeNull="true" />        
        /// <param name="result" type="Object" DomElement="false" mayBeNull="true" />
        /// <param name="context" type="String" DomElement="false" mayBeNull="true" />
        /// <returns />     
        // clear out our saved WebRequest object
        this._webRequest = null;
    },

    _onTimerTick: function(sender, eventArgs) {
        /// <summary>
        /// Handler invoked when a timer tick occurs
        /// </summary>
        /// <param name="sender" type="Object" mayBeNull="true"/>
        /// <param name="eventArgs" type="Sys.EventArgs" mayBeNull="true" />        
        /// <returns />  

        // turn off the timer until another key is pressed.        
        this._timer.set_enabled(false);
        var text = this._currentCompletionWord();

        if (text.trim().length < this._minimumPrefixLength) {
            this._currentPrefix = null;
            this.hidePopup();
            return;
        }

        this._currentPrefix = text;
        if ((text != "") && this._cache && this._cache[text]) {
            this._update(text, this._cache[text], /* cacheResults */false);
            return;
        }
        
        EnsureScript('sp.search.js', TypeofFullName('Microsoft.SharePoint.Client.Search.Query.KeywordQuery'), Function.createDelegate(this, this._getSuggestion));
    },

    _getSuggestion: function() {
        var cctx = Srch.ScriptApplicationManager.get_clientRuntimeContext();
        try {
            var query = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery.newObject(cctx);

            if (query) {
                var text = this._currentPrefix;
                query.set_queryText(text);
                var lang = Srch.AU.get_querySuggestionLanguage();
                if (lang > 0)
                    query.set_culture(lang);
                query.set_showPeopleNameSuggestions(this._showPeopleNameSuggestions);

                // Set the source id to the guid assigned to this webpart
                var guid = Srch.U.e(this._sourceId) ? null : new SP.Guid(this._sourceId);
                if (guid != null)
                    query.set_sourceId(guid);

                var result = query.getQuerySuggestionsWithResults(this._queryCount, this._personalResultCount, true, true, this._showPeopleNameSuggestions, false);
            
                cctx.executeQueryAsync(Function.createDelegate(this, function(sender, e) {
                    try {
                        this._update(text, result, /* cacheResults */true);
                    }
                    catch (ex) {
                        Srch.U.trace(null, "AutoCompleteBehavior._update", ex.toString());
                    }
                }), function(sender, failureArgs){});
            }
        }
        catch (e)
        {
            Srch.U.trace(null, "AutoCompleteBehavior._getSuggestion", e.toString());
        }

        $common.updateFormToRefreshATDeviceBuffer();
    },

    _setText: function(item) {
        /// <summary>
        /// Method to set the selected autocomplete option on the textbox
        /// </summary>
        /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
        /// Item to select
        /// </param>
        /// <returns />

        this._timer.set_enabled(false);

        var text = this._getText(item);
        var element = this.get_element();
        var control = element.control;
        if (control && control.set_text) {
            control.set_text(text);
        }
        else {
            element.value = text;
        }
    },

    _display: function(completionItems, isQuery, lengthOfPrevSection) {
        /// <summary>
        /// Method to display personal results and quries
        /// </summary>
        /// <param name="length" type="Number">
        /// Number of items to display
        /// </param>
        /// <param name="isQuery" type="Boolean">
        /// true = query; false = personal results
        /// </param>
        /// <returns />
        var _firstChild = null;

        for (var i = 0; i < completionItems.length; i++) {
            // Create the item                
            var itemElement = null;
            if (this._completionListElementID) {
                // the completion element has been created by the user and li won't necessarily work
                itemElement = document.createElement('div');
            } else {
                itemElement = document.createElement('li');
            }

            // set the first child if it is null
            if (_firstChild == null) {
                _firstChild = itemElement;
            }

            //if it is personal results
            if (!isQuery) {
                var resultAnchor = document.createElement("a");
                resultAnchor.id = "PR_Item" + i;
                resultAnchor.innerHTML = completionItems[i].get_title();
                itemElement.appendChild(resultAnchor);
                itemElement.url = Srch.U.ensureAllowedProtocol(completionItems[i].get_url());
                itemElement.isQuery = false; //Y=this item is query item; N=this item is personal result item.
            }
            //if it is query
            else {
                //Render the result as html if it is from the search query web serive
                //Search query web service only emits safe html

                if (typeof completionItems[0]=="string") 
                    itemElement.innerHTML = completionItems[i];
                else 
                    itemElement.innerHTML = completionItems[i].get_query();

                itemElement.id = "QS_Item" + i;
                itemElement.url = '';
                itemElement.isQuery = true; //Y=this item is query item; N=this item is personal result item.
            }

            //query section is after personal results section
            itemElement._index = i + lengthOfPrevSection;

            if (this._completionListItemCssClass) {
                Sys.UI.DomElement.addCssClass(itemElement, this._completionListItemCssClass);
            }
            $addHandler(itemElement, "mousedown", this._mouseDownHandler);
            this._completionListElement.appendChild(itemElement);
        }
        return _firstChild;
    },

    _update: function(prefixText, completionItems, cacheResults) {
        /// <summary>
        /// Method to update the status of the autocomplete behavior
        /// </summary>
        /// <param name="prefixText" type="String" DomElement="false" mayBeNull="true" />
        /// <param name="completionItems" type="Object" DomElement="false" mayBeNull="true" />
        /// <param name="cacheResults" type="Object" DomElement="false" mayBeNull="true" />
        /// <returns />       

        if (cacheResults && this.get_enableCaching()) {
            if (!this._cache) {
                this._cache = {};
            }
            this._cache[prefixText] = completionItems;
        }

        // If the target control loses focus or 
        // if the value in textbox has changed before the webservice returned
        // completion items we don't need to show/update popup
        if ((!this._textBoxHasFocus) || (prefixText != this._currentCompletionWord())) {
            return;
        }
 
        if (completionItems) {

            var queries = completionItems.get_queries();
            var personalResults = completionItems.get_personalResults();
            var nameSuggestions = completionItems.get_peopleNames();
            
            //no results to show
            if ((queries === null || queries === undefined || queries.length === 0)
                && (personalResults === null || personalResults === undefined || personalResults.length === 0)
                && (nameSuggestions === null || nameSuggestions === undefined || nameSuggestions.length === 0)) {
                this.hidePopup();
                return;
            }

            var children = this._completionListElement.childNodes;
            for (var i = 0; i < children.length; i++) {
                $clearHandlers(children[i]);
            }
            this._completionListElement.innerHTML = '';
            this._selectIndex = -1;
            this._highlightedItem = null;

			var lengthOfPrevSection = 0;
			

			// Display the query suggestions themselves
            var firstChild1 = this._display(queries, true, lengthOfPrevSection);
			lengthOfPrevSection += queries.length;

            //only when both queries and personalResults exists, show the horizontal dotted line
            if (queries.length > 0 && personalResults.length > 0) {
                var hr = document.createElement("div");
                Sys.UI.DomElement.addCssClass(hr, this._hrCSSClass);
                this._completionListElement.appendChild(hr);
				lengthOfPrevSection ++;
            }

            // Display personal results title
			if (personalResults.length > 0) {
				var prTitle = document.createElement("div");
				Sys.UI.DomElement.addCssClass(prTitle, this._personalResultTitleCssClass);
				prTitle.id = this.get_id() + "_PersonalResultsTitle";
				prTitle.innerHTML = STSHtmlEncode(personalResults.length > 1 ? this._personalResultTitlePlural : this._personalResultTitleSingular);
				this._completionListElement.appendChild(prTitle);
				lengthOfPrevSection ++;
			}

            // Display personal Result items
            var firstChild2 = this._display(personalResults, false, lengthOfPrevSection);
            lengthOfPrevSection += personalResults.length;
            
            //only when both nameSuggestions and one of the other two categories exists, show the horizontal dotted line
            if (nameSuggestions.length > 0) {
              if (queries.length > 0 || personalResults.length > 0) {
                //Show horizontal line
                var hr = document.createElement("div");
                Sys.UI.DomElement.addCssClass(hr, this._hrCSSClass);
                this._completionListElement.appendChild(hr);
                lengthOfPrevSection ++;
              }
              //Display name suggestions title
              var fzNameTit = document.createElement("div");
              Sys.UI.DomElement.addCssClass(fzNameTit, this._personalResultTitleCssClass);
              fzNameTit.id = this.get_id() + "_NameResultsTitle";
              fzNameTit.innerHTML = STSHtmlEncode(Srch.Res.qs_NameSuggestionsTitle);
              this._completionListElement.appendChild(fzNameTit);
              lengthOfPrevSection ++;
            }

            var firstChild3 = this._display(nameSuggestions, true, lengthOfPrevSection);

            var elementBounds = $common.getBounds(this._getPopupPositionParent());
            var elmWith = elementBounds.width + this._offsetWidth;

            if (elmWith > 0) this._completionListElement.style.width = elmWith + 'px';
            this._completionListElement.scrollTop = 0;

            this.showPopup();

            // Check if the first Row is to be selected by default and if yes highlight it and updated selectIndex.
            var _firstChild = firstChild1 ? firstChild1 : firstChild2 ? firstChild2 : firstChild3;
            if (this._firstRowSelected && _firstChild != null) {
                this._highlightItem(_firstChild);
                this._selectIndex = 0;
            }
        } else {
            this.hidePopup();
        }
    },

    get_completionInterval: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// Auto completion timer interval in milliseconds.
        /// </value>
        return this._completionInterval;
    },
    set_completionInterval: function(value) {
        if (this._completionInterval != value) {
            this._completionInterval = value;
            this.raisePropertyChanged('completionInterval');
        }
    },
    
    get_overlappingElementID: function() {
        /// <value type="String" maybeNull="true">
        /// Overlapping dropdown.
        /// </value>
        return this._overlappingElementID;
    },
    set_overlappingElementID: function(value) {
        if (this._overlappingElementID != value) {
            this._overlappingElementID = value;
            this.raisePropertyChanged('overlappingElementID');
        }
    },

    get_queryCount: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// Number of query terms that get returned from backend.
        /// </value>
        return this._queryCount;
    },
    set_queryCount: function(value) {
        if (this._queryCount != value) {
            this._queryCount = value;
            this.raisePropertyChanged('queryCount');
        }
    },

    get_personalResultCount: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// Number of personal results that get returned from backend.
        /// </value>
        return this._personalResultCount;
    },
    set_personalResultCount: function(value) {
        if (this._personalResultCount != value) {
            this._personalResultCount = value;
            this.raisePropertyChanged('personalResultCount');
        }
    },

    get_showPeopleNameSuggestions: function() {
        /// <value type="Boolean" maybeNull="true">
        /// showPeopleNameSuggestions.
        /// </value>
        return this._showPeopleNameSuggestions;
    },
    set_showPeopleNameSuggestions: function(value) {
        if (this._showPeopleNameSuggestions != value) {
            this._showPeopleNameSuggestions = value;
            this.raisePropertyChanged('showPeopleNameSuggestions');
        }
    },

    get_completionList: function() {
        /// <value type="Sys.UI.DomElement" domElement="true" maybeNull="true">
        /// List dom element.
        /// </value>
        return this._completionListElement;
    },
    set_completionList: function(value) {
        if (this._completionListElement != value) {
            this._completionListElement = value;
            this.raisePropertyChanged('completionList');
        }
    },

    get_offsetTop: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// offsetTop from where the query drop down starts.
        /// </value>
        return this._offsetTop;
    },
    set_offsetTop: function(value) {
        if (this._offsetTop != value) {
            this._offsetTop = value;
            this.raisePropertyChanged('offsetTop');
        }
    },

    get_offsetWidth: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// _offsetWidth from where the query drop down extends to.
        /// </value>
        return this._offsetWidth;
    },
    set_offsetWidth: function(value) {
        if (this._offsetWidth != value) {
            this._offsetWidth = value;
            this.raisePropertyChanged('_offsetWidth');
        }
    },

    get_offsetLeft: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// OffsetLeft from where the query drop down starts.
        /// </value>
        return this._offsetLeft;
    },
    set_offsetLeft: function(value) {
        if (this._offsetLeft != value) {
            this._offsetLeft = value;
            this.raisePropertyChanged('offsetLeft');
        }
    },

    get_minimumPrefixLength: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// Minimum text prefix length required to call the webservice.
        /// </value>
        return this._minimumPrefixLength;
    },
    set_minimumPrefixLength: function(value) {
        if (this._minimumPrefixLength != value) {
            if (value < 1) {
                //Minimum prefix lengh has to be at least 1
                value = 1;
            }
            this._minimumPrefixLength = value;
            this.raisePropertyChanged('minimumPrefixLength');
        }
    },

    get_enterKeyDownScript: function() {
        /// <value type="String">
        /// Optional script to run when enter is pressed.
        /// </value>
        return this._enterKeyDownScript;
    },
    set_enterKeyDownScript: function(value) {
        if (this._enterKeyDownScript != value) {
            this._enterKeyDownScript = value;
            this.raisePropertyChanged('enterKeyDownScript');
        }
    },

    get_enableCaching: function() {
        /// <value type="Boolean" maybeNull="true">
        /// Get or sets whether suggestions retrieved from the webservice
        /// should be cached.
        /// </value>
        return this._enableCaching;
    },
    set_enableCaching: function(value) {
        if (this._enableCaching != value) {
            this._enableCaching = value;
            this.raisePropertyChanged('enableCaching');
        }
    },

    get_completionListElementID: function() {
        /// <value type="String" maybeNull="true">
        /// ID of the completion div element.
        /// </value>
        return this._completionListElementID;
    },
    set_completionListElementID: function(value) {
        if (this._completionListElementID != value) {
            this._completionListElementID = value;
            this.raisePropertyChanged('completionListElementID');
        }
    },

    get_parentElementID: function() {
        /// <value type="String" maybeNull="true">
        /// ID of the parent div element.
        /// </value>
        return this._parentElementID;
    },
    set_parentElementID: function(value) {
        if (this._parentElementID != value) {
            this._parentElementID = value;
            this.raisePropertyChanged('parentElementID');
        }
    },

    get_completionListCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style the completion list element.
        /// </value>
        return this._completionListCssClass;
    },
    set_completionListCssClass: function(value) {
        if (this._completionListCssClass != value) {
            this._completionListCssClass = value;
            this.raisePropertyChanged('completionListCssClass');
        }
    },

    get_completionListItemCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style an item in the completion list.
        /// </value>
        return this._completionListItemCssClass;
    },
    set_completionListItemCssClass: function(value) {
        if (this._completionListItemCssClass != value) {
            this._completionListItemCssClass = value;
            this.raisePropertyChanged('completionListItemCssClass');
        }
    },

    get_personalResultTitleCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style an item in the Personal Results title "Recommended Results".
        /// </value>
        return this._personalResultTitleCssClass;
    },
    set_personalResultTitleCssClass: function(value) {
        if (this._personalResultTitleCssClass != value) {
            this._personalResultTitleCssClass = value;
            this.raisePropertyChanged('personalResultTitleCssClass');
        }
    },

    get_hrCSSClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style an item in the horizontal bar that seperate personal result and queries.
        /// </value>
        return this._hrCSSClass;
    },
    set_hrCSSClass: function(value) {
        if (this._hrCSSClass != value) {
            this._hrCSSClass = value;
            this.raisePropertyChanged('hrCSSClass');
        }
    },

    get_personalResultTitleSingular: function() {
        /// <value type="String" maybeNull="true">
        /// Personal Results title for singleton result set
        /// </value>
        return this._personalResultTitleSingular;
    },
    set_personalResultTitleSingular: function(value) {
        if (this._personalResultTitleSingular != value) {
            this._personalResultTitleSingular = value;
            this.raisePropertyChanged('personalResultTitleSingular');
        }
    },

    get_personalResultTitlePlural: function() {
        /// <value type="String" maybeNull="true">
        /// Personal Results title for singleton result set
        /// </value>
        return this._personalResultTitlePlural;
    },
    set_personalResultTitlePlural: function(value) {
        if (this._personalResultTitlePlural != value) {
            this._personalResultTitlePlural = value;
            this.raisePropertyChanged('personalResultTitlePlural');
        }
    },

    get_highlightedItemCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style a highlighted item in the list.
        /// </value>
        return this._highlightedItemCssClass;
    },
    set_highlightedItemCssClass: function(value) {
        if (this._highlightedItemCssClass != value) {
            this._highlightedItemCssClass = value;
            this.raisePropertyChanged('highlightedItemCssClass');
        }
    },

    get_firstRowSelected: function() {
        /// <value type="Boolean" maybeNull="true">
        /// Flag to determine if the first option in the flyout is selected or not. 
        /// </value>
        return this._firstRowSelected;
    },
    set_firstRowSelected: function(value) {
        if (this._firstRowSelected != value) {
            this._firstRowSelected = value;
            this.raisePropertyChanged('firstRowSelected');
        }
    },

    get_sourceId: function() {
        /// <value type="String" maybeNull="true">
        /// SourceId for the query suggestions OM 
        /// </value>
        return this._sourceId;
    },
    set_sourceId: function(value) {
        if (this._sourceId != value) {
            this._sourceId = value;
            this.raisePropertyChanged('sourceId');
        }
    }
}
AjaxControlToolkit.AutoCompleteBehavior.registerClass('AjaxControlToolkit.AutoCompleteBehavior', Sys.UI.Behavior);
AjaxControlToolkit.AutoCompleteBehavior.descriptor = {
    properties: [{ name: 'completionInterval', type: Number },
                    { name: 'completionList', isDomElement: true },
                    { name: 'completionListElementID', type: String },
                    { name: 'parentElementID', type: String },                    
                    { name: 'minimumPrefixLength', type: Number },
                    { name: 'personalResultTitleCssClass', type: String },
                    { name: 'hrCSSClass', type: String },
                    { name: 'highlightedItemCssClass', type: String },
                    { name: 'personalResultTitle', type: String },
                    { name: 'offsetTop', type: Number },
                    { name: 'offsetWidth', type: Number },
                    { name: 'offsetLeft', type: Number },
                    { name: 'queryCount', type: Number },
                    { name: 'personalResultCount', type: Number },
                    { name: 'showPeopleNameSuggestions', type: Boolean },
                    { name: 'enableCaching', type: Boolean},
                    { name: 'overlappingElementID', type: String }]
}







///////////////////////////////////////////////////////////////////////////////
// start of DropdownListBehavior.js

AjaxControlToolkit.DropdownListBehavior = function(element) {
    /// <summary>
    /// This behavior can be attached to a textbox to enable selection from a list scenarios.
    /// </summary>
    /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false">
    /// DOM Element the behavior is associated with
    /// </param>
    /// <returns />
    AjaxControlToolkit.DropdownListBehavior.initializeBase(this, [element]);
    
    this._offsetTop = 0;
    this._offsetWidth = 0;
    this._offsetLeft = 0;
    this._listElementID = null;
    this._listElement = null;
    this._parentElementID = null;
    this._popupBehavior = null;    
    this._selectIndex = -1;    
    this._highlightedItem = null;
    this._bodyClickHandler = null;
    this._listBlurHandler = null;
    this._keyDownHandler = null;
    this._buttonClickHandler = null;
    this._listKeyDownHandler = null;
    this._mouseDownHandler = null;
    this._mouseOverHandler = null;
    this._hrCSSClass = null;
    this._highlightedItemCssClass = null;
	this._buttonOpenCssClass = null
	this._containerOpenCssClass = null;
    this._dropdownInitVisible = false;
    this._firstRowSelected = false;
    this._overlappingElementID = null;
    this._listItems = null;
    this._textBoxControl = null; 
    this._textBoxElementId = null;   
    this._prompt = null;
    this._resultsPageUrl = null;
    this._useResultsPage = false;
}
AjaxControlToolkit.DropdownListBehavior.prototype = {
    initialize: function() {
        /// <summary>
        /// Initializes the dropdownlist behavior.
        /// </summary>
        /// <returns />
        AjaxControlToolkit.DropdownListBehavior.callBaseMethod(this, 'initialize');
        $common.prepareHiddenElementForATDeviceUpdate();

        // list button handlers
        this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);
        this._buttonClickHandler = Function.createDelegate(this, this._togglePopup);        

        // dropdown list handlers
        this._mouseDownHandler = Function.createDelegate(this, this._onListMouseDown);
        this._mouseOverHandler = Function.createDelegate(this, this._onListMouseOver);
        this._listBlurHandler = Function.createDelegate(this, this._onListBlur);
        this._listKeyDownHandler = Function.createDelegate(this, this._onKeyDown);

        // document handlers
        this._bodyClickHandler = Function.createDelegate(this, this._onBodyClick);        

        this.initializeTextBox();

        var element = this.get_element();
        this.initializeButton(element);     
                   
        if (this._listElementID !== null) this._listElement = $get(this._listElementID);
        this.initializeList(this._listElement);

        // initialize the popup behaviour
        var popupContainer = this._getPopupContainer(this._listElement);
        if (popupContainer && Sys.Browser.agent == Sys.Browser.InternetExplorer && (!document.documentMode || document.documentMode == 7)) {
            popupContainer.style.marginTop = "-1px";
        }

        this._popupBehavior = $create(AjaxControlToolkit.PopupBehavior, { 'id': this.get_id() + 'PopupBehavior', 'parentElement': this._getPopupPositionParent() }, null, null, popupContainer);
        this._popupBehavior.hide();

        if(this._dropdownInitVisible)
        {
            this.showPopup();
        }
    },

    dispose: function() {
        /// <summary>
        /// Disposes the dropdownlist behavior
        /// </summary>
        /// <returns />

        if (this._popupBehavior) {
            this._popupBehavior.dispose();
            this._popupBehavior = null;
        }

        var element = this.get_element();
        if (element) {
            $removeHandler(element, "keydown", this._keyDownHandler);
            $removeHandler(element, "click", this._buttonClickHandler);            
        }

        if (this._listElement) {
            $removeHandler(this._listElement, 'blur', this._listBlurHandler);
            $removeHandler(this._listElement, 'mouseover', this._mouseOverHandler);
            $removeHandler(this._listElement, "keydown", this._listKeyDownHandler);
            // remove all the mousedown handlers from the child elements
            var children = this._listElement.childNodes;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                $removeHandler(child, "mousedown", this._mouseDownHandler);
            }

        }

        if (this._bodyClickHandler) {
            $removeHandler(document.body, 'click', this._bodyClickHandler);
            this._bodyClickHandler = null;
        }

        this._keyDownHandler = null;
        this._listBlurHandler = null;
        this._mouseDownHandler = null;
        this._mouseOverHandler = null;
        this._listKeyDownHandle = null;

        AjaxControlToolkit.DropdownListBehavior.callBaseMethod(this, 'dispose');
    },

    initializeButton: function(element) {
        /// <summary>
        /// Initializes the dropdownlist button
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />    

        $addHandler(element, "keydown", this._keyDownHandler);
        $addHandler(element, "click", this._buttonClickHandler);        
    },

    initializeList: function(element) {
        /// <summary>
        /// Initializes the dropdown list element
        /// </summary>
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />               

        if (this._listCssClass) {
            Sys.UI.DomElement.addCssClass(element, this._listCssClass);
        }
        // Mousedown event is triggered on the individual nav links so that proper feedback is given on mobile browsers
        $addHandler(element, "mouseover", this._mouseOverHandler);
        $addHandler(element, "blur", this._listBlurHandler);
        $addHandler(element, "keydown", this._listKeyDownHandler);
        $addHandler(document.body, 'click', this._bodyClickHandler);

        this._populateList();
    },

     initializeTextBox: function() {
        /// <summary>
        /// Initializes the text box related fields
        /// </summary>

        if (this._textBoxControl) {
            this._prompt = this._textBoxControl.get_currentPrompt();
            this._resultsPageUrl = this._textBoxControl.get_resultsPageAddress();
            this._useResultsPage = !this._textBoxControl.get_tryInplaceQuery();
            this._textBoxElementId = this._textBoxControl.get_searchBoxInputId();
        }
    },

    _populateList: function() {
        /// <summary>
        /// Populates the nav entries
        /// </summary>
        
        var listItems = this._listItems;
 
        //no results to show
        if ((listItems === null || listItems === undefined || listItems.length === 0)) {
            return;
        }

        this._listElement.innerHTML = '';
        this._selectIndex = -1;
        this._highlightedItem = null;                

        for (var i = 0; i < listItems.length; i++) {
            // Create the item                
            var itemElement = document.createElement('div');

            itemElement.innerHTML = listItems[i].name;
            itemElement._promptString = listItems[i].promptString;
            itemElement._url = listItems[i].url;
            itemElement._index = i;

            if (this._listItemCssClass) {
                Sys.UI.DomElement.addCssClass(itemElement, this._listItemCssClass);
            }
            $addHandler(itemElement, "mousedown", this._mouseDownHandler);
            this._listElement.appendChild(itemElement);
        }

        var elementBounds = $common.getBounds(this._getPopupPositionParent());
        var elmWidth = elementBounds.width + this._offsetWidth;

        if (elmWidth > 0) this._listElement.style.width = elmWidth + 'px';
        this._listElement.scrollTop = 0;            
    },

    _getPopupPositionParent: function() {
        if (this._parentElementID) return $get(this._parentElementID);
        return null;
    },

    //keep walking up the dom tree till we find a node with a 'AutoCompContainer' suffix
    _getPopupContainer: function(element) {        
        var idSuf = 'DropdownListContainer';
        var container = element;

        while (container) {
            if ((container.id) && (container.id.endsWith(idSuf))) {
                return container;
            }
            container = container.parentNode;
        }

        //Couldn't find anything, just use the original element
        return element;
    },

    showPopup: function() {
        /// <summary>
        /// Show the flyout list popup
        /// </summary>
        /// <remarks>
        /// If you cancel the showing event, you should still call
        /// showPopup to ensure consistency of the internal state
        /// </remarks>

        if (this._overlappingElementID != null) {
            var ob = $find(this._overlappingElementID);
            if (ob) { ob.hidePopup(); }
        }        

        this._popupBehavior.show();
		
		// Switch the class of the nav button to reflect that the dropdown is open
		var button = this.get_element();
		if (button) {
			Srch.U.ensureCSSClassNameExist(button, this._buttonOpenCssClass);
		}

		// Switch the border of the container
		this._textBoxControl.setBorder(true);

        $common.updateFormToRefreshATDeviceBuffer();
    },

    hidePopup: function() {
        /// <summary>
        /// Hide the flyout list popup
        /// </summary>
        /// <remarks>
        /// If you cancel the hiding event, you should still
        /// call hidePopup to ensure consistency of the internal
        /// state
        /// </remarks>

        if (this._popupBehavior) {
            this._popupBehavior.hide();
        }

		// Switch the class of the nav button to reflect that the dropdown is closed
		var button = this.get_element();
		if (button) {
			Srch.U.ensureCSSClassNameNotExist(button, this._buttonOpenCssClass);
		}

		// Switch the border of the container (only if the text box is empty, since that is also a necessary condition)
		this._textBoxControl.setBorder(false);
    },

    _togglePopup: function(ev) {
        /// <summary>
        /// Toggle the flyout list popup
        /// </summary>

        if (this._popupBehavior.get_visible()) {
            this.hidePopup();
        }
        else {
            this.showPopup();
        }

        ev.stopPropagation();        
    },

    _highlightItem: function(item) {
        /// <summary>
        /// Highlights the specified item
        /// </summary>
        /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <returns />

        // Unselect any previously highlighted item        
        if (this._highlightedItem) {
            if (this._listItemCssClass) {
                Sys.UI.DomElement.removeCssClass(this._highlightedItem, this._highlightedItemCssClass);
                Sys.UI.DomElement.addCssClass(this._highlightedItem, this._listItemCssClass);
            }
            this._highlightedItem = null;
        }

        if (item) {
            // Highlight the new item
            if (this._highlightedItemCssClass) {
                Sys.UI.DomElement.removeCssClass(item, this._listItemCssClass);
                Sys.UI.DomElement.addCssClass(item, this._highlightedItemCssClass);
            }
            this._highlightedItem = item;
        }
    },

    /// <summary>
    /// Walks up the DOM element hiearchy to find an element with a '_index' attribute
    /// </summary>
    /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
    /// Starting element of the walk
    /// </param>
    /// <returns name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
    /// A completion list item, null if not found
    /// </returns>

    _getListItem: function(element) {
        if (element) {
            if (element._index != null && element._index != undefined) {
                //found it
                return element;
            }
            else if (element === this._listElement) {
                //We got up to the _listElement.
                //Walking up any further is pointless since list items
                //only exist within the list outer element.
                return null;
            }
            else {
                //recurse
                return this._getListItem(element.parentNode);
            }
        }
        else {
            return null;
        }
    },

    /// <summary>
    /// Handler for the blur event on the flyout.
    /// </summary>
    /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
    /// <returns />    
    _onListBlur: function(ev) {
        this.hidePopup();
    },

    /// <summary>
    /// Handler for a click in the document body.
    /// </summary>
    /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
    /// <returns />    
    _onBodyClick: function(ev) {
        // Hide popup if the click was outside the element that launches the dropdown (click event is not propagated for the element)
        this.hidePopup();
    },

    _onListMouseDown: function(ev) {
        /// <summary>
        /// Handler for the mousedown event on the flyout.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />     
        var item = this._getListItem(ev.target);
        if (item != null) {
            this._selectAction(item);            
            this.hidePopup();
            this._enterAction(); 
        }
    },

    _onListMouseOver: function(ev) {
        /// <summary>
        /// Handler for the mouseover event on the autocomplete flyout.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />      
        var item = this._getListItem(ev.target);
        if (item != null) {
            this._highlightItem(item);
            // make sure the selected index is updated
            this._selectIndex = parseInt(item._index);
            this._selectAction(item);
        }
    },

    _onKeyDown: function(ev) {
        /// <summary>
        /// Handler for the textbox keydown event.
        /// </summary>
        /// <param name="ev" type="Sys.UI.DomEvent" DomElement="false" mayBeNull="false" />
        /// <returns />      
                
        var k = ev.keyCode ? ev.keyCode : ev.rawEvent.keyCode;
        if (k === Sys.UI.Key.esc) {
            this.hidePopup();
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.up) {
            if (this._selectIndex > -1) {
                do {
                    this._selectIndex -= 1;
                } while (this._selectIndex > -1
                    && (this._listElement.childNodes[this._selectIndex].className === this._hrCSSClass));
            }
            else {
                //warp around
                this._selectIndex = this._listElement.childNodes.length - 1;
            }

            if (this._selectIndex == -1) {
                this._highlightItem(null);
                //Restore the user prompt
                this._selectAction(null);                
            }
            else {
                if (this._listElement.childNodes[this._selectIndex].className === this._listItemCssClass) {
                    this._handleScroll(this._listElement.childNodes[this._selectIndex], this._selectIndex);
                    this._highlightItem(this._listElement.childNodes[this._selectIndex]);
                    //update the text with the current selection
                    this._selectAction(this._listElement.childNodes[this._selectIndex]);                    
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.down) {
            if (this._selectIndex < (this._listElement.childNodes.length - 1)) {
                //skip title, horizonal bar etc., go to the item directly
                do {
                    this._selectIndex += 1;
                } while (this._selectIndex < this._listElement.childNodes.length - 1
                    && (this._listElement.childNodes[this._selectIndex].className === this._hrCSSClass));
            }
            else {
                //wrap around
                this._selectIndex = -1;
            }

            if (this._selectIndex == -1) {
                this._highlightItem(null);
                //Restore what the user typed
                this._selectAction(null);                
            }
            else {
                if (this._listElement.childNodes[this._selectIndex].className === this._listItemCssClass) {
                    this._handleScroll(this._listElement.childNodes[this._selectIndex], this._selectIndex);
                    this._highlightItem(this._listElement.childNodes[this._selectIndex]);
                    //update the text with the current selection          
                    this._selectAction(this._listElement.childNodes[this._selectIndex]);                    
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.enter) {
            if (this._selectIndex !== -1) {
                //start a search with the selected scope.
                var item = this._listElement.childNodes[this._selectIndex];
                
                this._enterAction();
            }
            // toggle the visibility of the popup
            this._togglePopup(ev);
            ev.preventDefault();
        }
        else if (k === Sys.UI.Key.tab) {
            if (this._selectIndex !== -1) {
                this._selectAction(this._listElement.childNodes[this._selectIndex]);
                this.hidePopup();                
            }
        }
        else if (k === Sys.UI.Key.right ||
            k === Sys.UI.Key.left ||
            k === Sys.UI.Key.pageUp ||
            k === Sys.UI.Key.pageDown ||
            k === Sys.UI.Key.home ||
            k === Sys.UI.Key.end) {
            //Ignored
        }
    },

    _handleScroll: function(element, index) {
        /// <summary>
        /// Method to determine if an item is in view or not
        /// </summary>
        /// <returns />
        /// <param name="element" type="Sys.UI.DomElement" DomElement="true" mayBeNull="false" />
        /// <param name="index" type="Number" DomElement="false" mayBeNull="true" />        
        var flyout = this._listElement;
        var elemBounds = $common.getBounds(element);
        var numItems = this._listElement.childNodes.length;
        if (((elemBounds.height * index) - (flyout.clientHeight + flyout.scrollTop)) >= 0) {
            // you need to scroll down
            flyout.scrollTop += (((elemBounds.height * index) - (flyout.clientHeight + flyout.scrollTop)) + elemBounds.height);
        }
        if (((elemBounds.height * (numItems - (index + 1))) - (flyout.scrollHeight - flyout.scrollTop)) >= 0) {
            // you need to scroll up
            flyout.scrollTop -= (((elemBounds.height * (numItems - (index + 1))) - (flyout.scrollHeight - flyout.scrollTop)) + elemBounds.height);
        }

        if (flyout.scrollTop % elemBounds.height !== 0) {
            if (((elemBounds.height * (index + 1)) - (flyout.clientHeight + flyout.scrollTop)) >= 0) {
                // an element is partially displayed at the bottom
                flyout.scrollTop -= (flyout.scrollTop % elemBounds.height);
            } else { // an element is partially displayed on the top 
                flyout.scrollTop += (elemBounds.height - (flyout.scrollTop % elemBounds.height));
            }
        }

    },
    
    _selectAction: function(item) {
        /// <summary>
        /// Method to set the selected flyout option on the textbox
        /// </summary>
        /// <param name="item" type="Sys.UI.DomElement" DomElement="true" mayBeNull="true">
        /// Item to select
        /// </param>
        /// <returns />

        var prompt = null;
        var url = null;
        var useResultsPage = true;

        if (item && !Srch.U.e(item._promptString) && !Srch.U.e(item._url)) {
            prompt = item._promptString;
            url = item._url;
        }
        else {
            // restore original searchbox values
            prompt = this._prompt;
            url = this._resultsPageUrl;
            useResultsPage = this._useResultsPage;
        }        

        if (this._textBoxControl) {
            this._textBoxControl.set_currentPrompt(prompt);
            this._textBoxControl.set_resultsPageAddress(url);
            this._textBoxControl.set_tryInplaceQuery(!useResultsPage);
        }
    },    
    
    _enterAction: function() {
        /// <summary>
        /// Method to issue query on searchbox
        /// </summary>
        
        if (this._textBoxControl) {
            var text = this._textBoxControl.get_searchBoxInputElement().value;
            if ((text) && (text != "") && (text != this._textBoxControl.get_currentPrompt())) {
                this._textBoxControl.search(text);
            }
        }
    },    

    get_overlappingElementID: function() {
        /// <value type="String" maybeNull="true">
        /// Overlapping dropdown.
        /// </value>
        return this._overlappingElementID;
    },
    set_overlappingElementID: function(value) {
        if (this._overlappingElementID != value) {
            this._overlappingElementID = value;
            this.raisePropertyChanged('overlappingElementID');
        }
    },    

    get_listItems: function() {
        /// Collection of list nodes.
        return this._listItems;
    },
    set_listItems: function(value) {
        this._listItems = value;
        this.raisePropertyChanged('listItems');
    },

    get_textBoxControl: function() {
        /// Collection of list nodes.
        return this._textBoxControl;
    },
    set_textBoxControl: function(value) {
        this._textBoxControl = value;
        this.raisePropertyChanged('textBoxControl');
    },
    
    get_list: function() {
        /// <value type="Sys.UI.DomElement" domElement="true" maybeNull="true">
        /// List dom element.
        /// </value>
        return this._listElement;
    },
    set_list: function(value) {
        if (this._listElement != value) {
            this._listElement = value;
            this.raisePropertyChanged('list');
        }
    },

    get_offsetTop: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// offsetTop from where the drop down starts.
        /// </value>
        return this._offsetTop;
    },
    set_offsetTop: function(value) {
        if (this._offsetTop != value) {
            this._offsetTop = value;
            this.raisePropertyChanged('offsetTop');
        }
    },

    get_offsetWidth: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// _offsetWidth from where the  drop down extends to.
        /// </value>
        return this._offsetWidth;
    },
    set_offsetWidth: function(value) {
        if (this._offsetWidth != value) {
            this._offsetWidth = value;
            this.raisePropertyChanged('offsetWidth');
        }
    },

    get_offsetLeft: function() {
        /// <value type="Number" integer="true" maybeNull="true">
        /// OffsetLeft from where the  drop down starts.
        /// </value>
        return this._offsetLeft;
    },
    set_offsetLeft: function(value) {
        if (this._offsetLeft != value) {
            this._offsetLeft = value;
            this.raisePropertyChanged('offsetLeft');
        }
    },

    get_listElementID: function() {
        /// <value type="String" maybeNull="true">
        /// ID of the div element.
        /// </value>
        return this._listElementID;
    },
    set_listElementID: function(value) {
        if (this._listElementID != value) {
            this._listElementID = value;
            this.raisePropertyChanged('listElementID');
        }
    },

    get_parentElementID: function() {
        /// <value type="String" maybeNull="true">
        /// ID of the parent div element.
        /// </value>
        return this._parentElementID;
    },
    set_parentElementID: function(value) {
        if (this._parentElementID != value) {
            this._parentElementID = value;
            this.raisePropertyChanged('parentElementID');
        }
    },

    get_listCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style the list element.
        /// </value>
        return this._listCssClass;
    },
    set_listCssClass: function(value) {
        if (this._listCssClass != value) {
            this._listCssClass = value;
            this.raisePropertyChanged('listCssClass');
        }
    },

    get_listItemCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style an item in the completion list.
        /// </value>
        return this._listItemCssClass;
    },
    set_listItemCssClass: function(value) {
        if (this._listItemCssClass != value) {
            this._listItemCssClass = value;
            this.raisePropertyChanged('listItemCssClass');
        }
    },

    get_hrCSSClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style an item in the horizontal bar that seperates item groups.
        /// </value>
        return this._hrCSSClass;
    },
    set_hrCSSClass: function(value) {
        if (this._hrCSSClass != value) {
            this._hrCSSClass = value;
            this.raisePropertyChanged('hrCSSClass');
        }
    },

    get_highlightedItemCssClass: function() {
        /// <value type="String" maybeNull="true">
        /// Css class name that will be used to style a highlighted item in the list.
        /// </value>
        return this._highlightedItemCssClass;
    },
    set_highlightedItemCssClass: function(value) {
        if (this._highlightedItemCssClass != value) {
            this._highlightedItemCssClass = value;
            this.raisePropertyChanged('highlightedItemCssClass');
        }
    },

    get_dropdownInitVisible: function() {
        //If the dropdown is visible intially
        return this._dropdownInitVisible;
    },
    set_dropdownInitVisible: function(value) {
        if (this._dropdownInitVisible != value) {
            this._dropdownInitVisible = value;
            this.raisePropertyChanged('dropdownInitVisible');
        }
    },

    get_firstRowSelected: function() {
        /// <value type="Boolean" maybeNull="true">
        /// Flag to determine if the first option in the flyout is selected or not. 
        /// </value>
        return this._firstRowSelected;
    },
    set_firstRowSelected: function(value) {
        if (this._firstRowSelected != value) {
            this._firstRowSelected = value;
            this.raisePropertyChanged('firstRowSelected');
        }
    },

	get_buttonOpenCssClass: function() {
		/// <value type="String" maybeNull="true">
        /// Css class name that will be used to style the dropdown button when the list is open
        /// </value>
        return this._buttonOpenCssClass;
	},
	set_buttonOpenCssClass: function(value) {
		if (this._buttonOpenCssClass != value) {
			this._buttonOpenCssClass = value;
            this.raisePropertyChanged('buttonOpenCssClass');
		}
	},

	get_containerOpenCssClass: function() {
		/// <value type="String" maybeNull="true">
        /// Css class name that will be used to style the dropdown container when the list is open
        /// </value>
        return this._containerOpenCssClass;
	},
	set_containerOpenCssClass: function(value) {
		if (this._containerOpenCssClass != value) {
			this._containerOpenCssClass = value;
            this.raisePropertyChanged('containerOpenCssClass');
		}
	}
}
AjaxControlToolkit.DropdownListBehavior.registerClass('AjaxControlToolkit.DropdownListBehavior', Sys.UI.Behavior);
AjaxControlToolkit.DropdownListBehavior.descriptor = {
    properties: [{ name: 'list', isDomElement: true },
                 { name: 'listElementID', type: String },
                 { name: 'parentElementID', type: String },
                 { name: 'listCssClass', type: String },
                 { name: 'listItemCssClass', type: String },
                 { name: 'highlightedItemCssClass', type: String },
                 { name: 'hrCSSClass', type: String }, 
                 { name: 'offsetTop', type: Number },
                 { name: 'offsetWidth', type: Number },
                 { name: 'offsetLeft', type: Number },
                 { name: 'overlappingElementID', type: String }]
}





// Drag drop and MuliHandleSlider code
Type.registerNamespace('AjaxControlToolkit');

AjaxControlToolkit.IDragSource = function() {
}
AjaxControlToolkit.IDragSource.prototype = {

    get_dragDataType: function() { throw Error.notImplemented(); },

    getDragData: function() { throw Error.notImplemented(); },

    get_dragMode: function() { throw Error.notImplemented(); },

    onDragStart: function() { throw Error.notImplemented(); },

    onDrag: function() { throw Error.notImplemented(); },

    onDragEnd: function() { throw Error.notImplemented(); }
}
AjaxControlToolkit.IDragSource.registerInterface('AjaxControlToolkit.IDragSource');

AjaxControlToolkit.IDropTarget = function() {
}
AjaxControlToolkit.IDropTarget.prototype = {
    get_dropTargetElement: function() { throw Error.notImplemented(); },

    canDrop: function() { throw Error.notImplemented(); },

    drop: function() { throw Error.notImplemented(); },

    onDragEnterTarget: function() { throw Error.notImplemented(); },

    onDragLeaveTarget: function() { throw Error.notImplemented(); },

    onDragInTarget: function() { throw Error.notImplemented(); }
}
AjaxControlToolkit.IDropTarget.registerInterface('AjaxControlToolkit.IDropTarget');

AjaxControlToolkit.DragMode = function() {
    throw Error.invalidOperation();
}
AjaxControlToolkit.DragMode.prototype = {
    Copy: 0,
    Move: 1
}
AjaxControlToolkit.DragMode.registerEnum('AjaxControlToolkit.DragMode');

AjaxControlToolkit.DragDropEventArgs = function(dragMode, dragDataType, dragData) {
    this._dragMode = dragMode;
    this._dataType = dragDataType;
    this._data = dragData;
}
AjaxControlToolkit.DragDropEventArgs.prototype = {
    get_dragMode: function() {
        return this._dragMode || null;
    },
    get_dragDataType: function() {
        return this._dataType || null;
    },
    get_dragData: function() {
        return this._data || null;
    }
}
AjaxControlToolkit.DragDropEventArgs.registerClass('AjaxControlToolkit.DragDropEventArgs');

AjaxControlToolkit._DragDropManager = function() {
    this._instance = null;
    this._events = null;
}
AjaxControlToolkit._DragDropManager.prototype = {

    add_dragStart: function(handler) {
        this.get_events().addHandler('dragStart', handler);
    },
    remove_dragStart: function(handler) {
        this.get_events().removeHandler('dragStart', handler);
    },

    get_events: function() {

        if (!this._events) {
            this._events = new Sys.EventHandlerList();
        }
        return this._events;
    },

    add_dragStop: function(handler) {
        this.get_events().addHandler('dragStop', handler);
    },
    remove_dragStop: function(handler) {
        this.get_events().removeHandler('dragStop', handler);
    },

    _getInstance: function() {
        if (!this._instance) {
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                this._instance = new AjaxControlToolkit.IEDragDropManager();
            }
            else {
                this._instance = new AjaxControlToolkit.GenericDragDropManager();
            }
            this._instance.initialize();
            this._instance.add_dragStart(Function.createDelegate(this, this._raiseDragStart));
            this._instance.add_dragStop(Function.createDelegate(this, this._raiseDragStop));
        }
        return this._instance;
    },

    startDragDrop: function(dragSource, dragVisual, context, useBuiltInDragAndDropFunctions) {
        this._getInstance().startDragDrop(dragSource, dragVisual, context, useBuiltInDragAndDropFunctions);
    },

    registerDropTarget: function(target) {
        this._getInstance().registerDropTarget(target);
    },

    unregisterDropTarget: function(target) {
        this._getInstance().unregisterDropTarget(target);
    },

    dispose: function() {
        delete this._events;
        Sys.Application.unregisterDisposableObject(this);
        Sys.Application.removeComponent(this);
    },

    _raiseDragStart: function(sender, eventArgs) {
        var handler = this.get_events().getHandler('dragStart');
        if (handler) {
            handler(this, eventArgs);
        }
    },

    _raiseDragStop: function(sender, eventArgs) {
        var handler = this.get_events().getHandler('dragStop');
        if (handler) {
            handler(this, eventArgs);
        }
    }
}
AjaxControlToolkit._DragDropManager.registerClass('AjaxControlToolkit._DragDropManager');
AjaxControlToolkit.DragDropManager = new AjaxControlToolkit._DragDropManager();

AjaxControlToolkit.IEDragDropManager = function() {
    AjaxControlToolkit.IEDragDropManager.initializeBase(this);

    this._dropTargets = null;

    this._radius = 10;
    this._useBuiltInDragAndDropFunctions = true;
    this._activeDragVisual = null;
    this._activeContext = null;
    this._activeDragSource = null;
    this._underlyingTarget = null;
    this._oldOffset = null;
    this._potentialTarget = null;
    this._isDragging = false;
    this._mouseUpHandler = null;
    this._documentMouseMoveHandler = null;
    this._documentDragOverHandler = null;
    this._dragStartHandler = null;
    this._mouseMoveHandler = null;
    this._dragEnterHandler = null;
    this._dragLeaveHandler = null;
    this._dragOverHandler = null;
    this._dropHandler = null;
}
AjaxControlToolkit.IEDragDropManager.prototype = {

    add_dragStart: function(handler) {
        this.get_events().addHandler("dragStart", handler);
    },

    remove_dragStart: function(handler) {
        this.get_events().removeHandler("dragStart", handler);
    },

    add_dragStop: function(handler) {
        this.get_events().addHandler("dragStop", handler);
    },

    remove_dragStop: function(handler) {
        this.get_events().removeHandler("dragStop", handler);
    },

    initialize: function() {
        AjaxControlToolkit.IEDragDropManager.callBaseMethod(this, 'initialize');
        this._mouseUpHandler = Function.createDelegate(this, this._onMouseUp);
        this._documentMouseMoveHandler = Function.createDelegate(this, this._onDocumentMouseMove);
        this._documentDragOverHandler = Function.createDelegate(this, this._onDocumentDragOver);
        this._dragStartHandler = Function.createDelegate(this, this._onDragStart);
        this._mouseMoveHandler = Function.createDelegate(this, this._onMouseMove);
        this._dragEnterHandler = Function.createDelegate(this, this._onDragEnter);
        this._dragLeaveHandler = Function.createDelegate(this, this._onDragLeave);
        this._dragOverHandler = Function.createDelegate(this, this._onDragOver);
        this._dropHandler = Function.createDelegate(this, this._onDrop);
    },

    dispose: function() {
        if (this._dropTargets) {
            for (var i = 0; i < this._dropTargets; i++) {
                this.unregisterDropTarget(this._dropTargets[i]);
            }
            this._dropTargets = null;
        }

        AjaxControlToolkit.IEDragDropManager.callBaseMethod(this, 'dispose');
    },

    startDragDrop: function(dragSource, dragVisual, context, useBuiltInDragAndDropFunctions) {
        var ev = window._event;

        if (this._isDragging) {
            return;
        }

        this._underlyingTarget = null;
        this._activeDragSource = dragSource;
        this._activeDragVisual = dragVisual;
        this._activeContext = context;
        this._useBuiltInDragAndDropFunctions = typeof (useBuiltInDragAndDropFunctions) != 'undefined' ? useBuiltInDragAndDropFunctions : true;

        var mousePosition = { x: ev.clientX, y: ev.clientY };

        dragVisual.originalPosition = dragVisual.style.position;
        dragVisual.style.position = "absolute";

        document._lastPosition = mousePosition;
        dragVisual.startingPoint = mousePosition;
        var scrollOffset = this.getScrollOffset(dragVisual, true);

        dragVisual.startingPoint = this.addPoints(dragVisual.startingPoint, scrollOffset);

        var left = parseInt(dragVisual.style.left);
        var top = parseInt(dragVisual.style.top);
        if (isNaN(left)) left = "0";
        if (isNaN(top)) top = "0";

        dragVisual.startingPoint = this.subtractPoints(dragVisual.startingPoint, { x: left, y: top });

        this._prepareForDomChanges();
        dragSource.onDragStart();
        var eventArgs = new AjaxControlToolkit.DragDropEventArgs(
            dragSource.get_dragMode(),
            dragSource.get_dragDataType(),
            dragSource.getDragData(context));
        var handler = this.get_events().getHandler('dragStart');
        if (handler) handler(this, eventArgs);
        this._recoverFromDomChanges();

        this._wireEvents();

        this._drag(true);
    },

    _stopDragDrop: function(cancelled) {
        var ev = window._event;
        if (this._activeDragSource != null) {
            this._unwireEvents();

            if (!cancelled) {

                cancelled = (this._underlyingTarget == null);
            }

            if (!cancelled && this._underlyingTarget != null) {
                this._underlyingTarget.drop(this._activeDragSource.get_dragMode(), this._activeDragSource.get_dragDataType(),
                    this._activeDragSource.getDragData(this._activeContext));
            }

            this._activeDragSource.onDragEnd(cancelled);
            var handler = this.get_events().getHandler('dragStop');
            if (handler) handler(this, Sys.EventArgs.Empty);

            this._activeDragVisual.style.position = this._activeDragVisual.originalPosition;

            this._activeDragSource = null;
            this._activeContext = null;
            this._activeDragVisual = null;
            this._isDragging = false;
            this._potentialTarget = null;
            ev.preventDefault();
        }
    },

    _drag: function(isInitialDrag) {
        var ev = window._event;
        var mousePosition = { x: ev.clientX, y: ev.clientY };

        document._lastPosition = mousePosition;

        var scrollOffset = this.getScrollOffset(this._activeDragVisual, true);
        var position = this.addPoints(this.subtractPoints(mousePosition, this._activeDragVisual.startingPoint), scrollOffset);

        if (!isInitialDrag && parseInt(this._activeDragVisual.style.left) == position.x && parseInt(this._activeDragVisual.style.top) == position.y) {
            return;
        }

        $common.setLocation(this._activeDragVisual, position);

        this._prepareForDomChanges();
        this._activeDragSource.onDrag();
        this._recoverFromDomChanges();

        this._potentialTarget = this._findPotentialTarget(this._activeDragSource, this._activeDragVisual);

        var movedToOtherTarget = (this._potentialTarget != this._underlyingTarget || this._potentialTarget == null);

        if (movedToOtherTarget && this._underlyingTarget != null) {
            this._leaveTarget(this._activeDragSource, this._underlyingTarget);
        }

        if (this._potentialTarget != null) {

            if (movedToOtherTarget) {
                this._underlyingTarget = this._potentialTarget;

                this._enterTarget(this._activeDragSource, this._underlyingTarget);
            }
            else {
                this._moveInTarget(this._activeDragSource, this._underlyingTarget);
            }
        }
        else {
            this._underlyingTarget = null;
        }
    },

    _wireEvents: function() {
        if (this._useBuiltInDragAndDropFunctions) {
            $addHandler(document, "mouseup", this._mouseUpHandler);
            $addHandler(document, "mousemove", this._documentMouseMoveHandler);
            $addHandler(document.body, "dragover", this._documentDragOverHandler);

            $addHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);
            $addHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
            $addHandler(this._activeDragVisual, "drag", this._mouseMoveHandler);
        } else {
            $addHandler(document, "mouseup", this._mouseUpHandler);
            $addHandler(document, "mousemove", this._mouseMoveHandler);
        }
    },

    _unwireEvents: function() {
        if (this._useBuiltInDragAndDropFunctions) {
            if (null != this._mouseMoveHandler) $removeHandler(this._activeDragVisual, "drag", this._mouseMoveHandler);
            if (null != this._mouseUpHandler) $removeHandler(this._activeDragVisual, "dragend", this._mouseUpHandler);
            if (null != this._dragStartHandler) $removeHandler(this._activeDragVisual, "dragstart", this._dragStartHandler);

            if (null != this._documentDragOverHandler) $removeHandler(document.body, "dragover", this._documentDragOverHandler);
            if (null != this._documentMouseMoveHandler) $removeHandler(document, "mousemove", this._documentMouseMoveHandler);
            if (null != this._mouseUpHandler) $removeHandler(document, "mouseup", this._mouseUpHandler);
        } else {
            if (null != this._mouseMoveHandler) $removeHandler(document, "mousemove", this._mouseMoveHandler);
            if (null != this._mouseUpHandler) $removeHandler(document, "mouseup", this._mouseUpHandler);
        }
    },

    registerDropTarget: function(dropTarget) {
        if (this._dropTargets == null) {
            this._dropTargets = [];
        }
        Array.add(this._dropTargets, dropTarget);

        this._wireDropTargetEvents(dropTarget);
    },

    unregisterDropTarget: function(dropTarget) {
        this._unwireDropTargetEvents(dropTarget);
        if (this._dropTargets) {
            Array.remove(this._dropTargets, dropTarget);
        }
    },

    _wireDropTargetEvents: function(dropTarget) {
        var associatedElement = dropTarget.get_dropTargetElement();
        associatedElement._dropTarget = dropTarget;
        $addHandler(associatedElement, "dragenter", this._dragEnterHandler);
        $addHandler(associatedElement, "dragleave", this._dragLeaveHandler);
        $addHandler(associatedElement, "dragover", this._dragOverHandler);
        $addHandler(associatedElement, "drop", this._dropHandler);
    },

    _unwireDropTargetEvents: function(dropTarget) {
        var associatedElement = dropTarget.get_dropTargetElement();

        if (associatedElement._dropTarget) {
            associatedElement._dropTarget = null;
            if (null != this._dragEnterHandler) $removeHandler(associatedElement, "dragenter", this._dragEnterHandler);
            if (null != this._dragLeaveHandler) $removeHandler(associatedElement, "dragleave", this._dragLeaveHandler);
            if (null != this._dragOverHandler) $removeHandler(associatedElement, "dragover", this._dragOverHandler);
            if (null != this._dropHandler) $removeHandler(associatedElement, "drop", this._dropHandler);
        }
    },

    _onDragStart: function(ev) {
        window._event = ev;
        document.selection.empty();

        var dt = ev.dataTransfer;
        if (!dt && ev.rawEvent) dt = ev.rawEvent.dataTransfer;

        var dataType = this._activeDragSource.get_dragDataType().toLowerCase();
        var data = this._activeDragSource.getDragData(this._activeContext);

        if (data) {

            if (dataType != "text" && dataType != "url") {
                dataType = "text";

                if (data.innerHTML != null) {
                    data = data.innerHTML;
                }
            }

            dt.effectAllowed = "move";
            dt.setData(dataType, data.toString());
        }
    },

    _onMouseUp: function(ev) {
        window._event = ev;
        this._stopDragDrop(false);
    },

    _onDocumentMouseMove: function(ev) {
        window._event = ev;
        this._dragDrop();
    },

    _onDocumentDragOver: function(ev) {
        window._event = ev;
        if (this._potentialTarget) ev.preventDefault();

    },

    _onMouseMove: function(ev) {
        window._event = ev;
        this._drag();
    },

    _onDragEnter: function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();

        }
        else {

            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragEnterTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },

    _onDragLeave: function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();

        }
        else {

            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragLeaveTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },

    _onDragOver: function(ev) {
        window._event = ev;
        if (this._isDragging) {
            ev.preventDefault();

        }
        else {

            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.onDragInTarget(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
    },

    _onDrop: function(ev) {
        window._event = ev;
        if (!this._isDragging) {

            var dataObjects = AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget(this._getDropTarget(ev.target));
            for (var i = 0; i < dataObjects.length; i++) {
                this._dropTarget.drop(AjaxControlToolkit.DragMode.Copy, dataObjects[i].type, dataObjects[i].value);
            }
        }
        ev.preventDefault();

    },

    _getDropTarget: function(element) {
        while (element) {
            if (element._dropTarget != null) {
                return element._dropTarget;
            }
            element = element.parentNode;
        }
        return null;
    },

    _dragDrop: function() {
        if (this._isDragging) {
            return;
        }

        this._isDragging = true;
        this._activeDragVisual.dragDrop();
        document.selection.empty();
    },

    _moveInTarget: function(dragSource, dropTarget) {

        this._prepareForDomChanges();
        dropTarget.onDragInTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },

    _enterTarget: function(dragSource, dropTarget) {

        this._prepareForDomChanges();
        dropTarget.onDragEnterTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },

    _leaveTarget: function(dragSource, dropTarget) {

        this._prepareForDomChanges();
        dropTarget.onDragLeaveTarget(dragSource.get_dragMode(), dragSource.get_dragDataType(), dragSource.getDragData(this._activeContext));
        this._recoverFromDomChanges();
    },

    _findPotentialTarget: function(dragSource, dragVisual) {
        var ev = window._event;

        if (this._dropTargets == null) {
            return null;
        }

        var type = dragSource.get_dragDataType();
        var mode = dragSource.get_dragMode();
        var data = dragSource.getDragData(this._activeContext);

        var scrollOffset = this.getScrollOffset(document.body, true);
        var x = ev.clientX + scrollOffset.x;
        var y = ev.clientY + scrollOffset.y;
        var cursorRect = { x: x - this._radius, y: y - this._radius, width: this._radius * 2, height: this._radius * 2 };

        var targetRect;
        for (var i = 0; i < this._dropTargets.length; i++) {
            targetRect = $common.getBounds(this._dropTargets[i].get_dropTargetElement());
            if ($common.overlaps(cursorRect, targetRect) && this._dropTargets[i].canDrop(mode, type, data)) {
                return this._dropTargets[i];
            }
        }

        return null;
    },

    _prepareForDomChanges: function() {
        this._oldOffset = $common.getLocation(this._activeDragVisual);
    },

    _recoverFromDomChanges: function() {
        var newOffset = $common.getLocation(this._activeDragVisual);
        if (this._oldOffset.x != newOffset.x || this._oldOffset.y != newOffset.y) {
            this._activeDragVisual.startingPoint = this.subtractPoints(this._activeDragVisual.startingPoint, this.subtractPoints(this._oldOffset, newOffset));
            scrollOffset = this.getScrollOffset(this._activeDragVisual, true);
            var position = this.addPoints(this.subtractPoints(document._lastPosition, this._activeDragVisual.startingPoint), scrollOffset);
            $common.setLocation(this._activeDragVisual, position);
        }
    },

    addPoints: function(p1, p2) {
        return { x: p1.x + p2.x, y: p1.y + p2.y };
    },

    subtractPoints: function(p1, p2) {
        return { x: p1.x - p2.x, y: p1.y - p2.y };
    },

    getScrollOffset: function(element, recursive) {
        var left = element.scrollLeft;
        var top = element.scrollTop;
        if (recursive) {
            var parent = element.parentNode;
            while (parent != null && parent.scrollLeft != null) {
                left += parent.scrollLeft;
                top += parent.scrollTop;

                if (parent == document.body && (left != 0 && top != 0))
                    break;
                parent = parent.parentNode;
            }
        }
        return { x: left, y: top };
    },

    getBrowserRectangle: function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (width == null) {
            width = document.documentElement.clientWidth;
        }
        if (height == null) {
            height = document.documentElement.clientHeight;
        }

        return { x: 0, y: 0, width: width, height: height };
    },

    getNextSibling: function(item) {
        for (item = item.nextSibling; item != null; item = item.nextSibling) {
            if (item.innerHTML != null) {
                return item;
            }
        }
        return null;
    },

    hasParent: function(element) {
        return (element.parentNode != null && element.parentNode.tagName != null);
    }
}
AjaxControlToolkit.IEDragDropManager.registerClass('AjaxControlToolkit.IEDragDropManager', Sys.Component);

AjaxControlToolkit.IEDragDropManager._getDataObjectsForDropTarget = function(dropTarget) {
    if (dropTarget == null) {
        return [];
    }
    var ev = window._event;
    var dataObjects = [];
    var dataTypes = ["URL", "Text"];
    var data;
    for (var i = 0; i < dataTypes.length; i++) {
        var dt = ev.dataTransfer;
        if (!dt && ev.rawEvent) dt = ev.rawEvent.dataTransfer;
        data = dt.getData(dataTypes[i]);
        if (dropTarget.canDrop(AjaxControlToolkit.DragMode.Copy, dataTypes[i], data)) {
            if (data) {
                Array.add(dataObjects, { type: dataTypes[i], value: data });
            }
        }
    }

    return dataObjects;
}

AjaxControlToolkit.GenericDragDropManager = function() {
    AjaxControlToolkit.GenericDragDropManager.initializeBase(this);

    this._dropTargets = null;

    this._scrollEdgeConst = 40;
    this._scrollByConst = 10;
    this._scroller = null;
    this._scrollDeltaX = 0;
    this._scrollDeltaY = 0;
    this._activeDragVisual = null;
    this._activeContext = null;
    this._activeDragSource = null;
    this._oldOffset = null;
    this._potentialTarget = null;
    this._mouseUpHandler = null;
    this._mouseMoveHandler = null;
    this._keyPressHandler = null;
    this._scrollerTickHandler = null;
}
AjaxControlToolkit.GenericDragDropManager.prototype = {

    initialize: function() {
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "initialize");
        this._mouseUpHandler = Function.createDelegate(this, this._onMouseUp);
        this._mouseMoveHandler = Function.createDelegate(this, this._onMouseMove);
        this._keyPressHandler = Function.createDelegate(this, this._onKeyPress);
        this._scrollerTickHandler = Function.createDelegate(this, this._onScrollerTick);
        this._scroller = new Sys.Timer();
        this._scroller.set_interval(10);
        this._scroller.add_tick(this._scrollerTickHandler);
    },

    startDragDrop: function(dragSource, dragVisual, context) {
        this._activeDragSource = dragSource;
        this._activeDragVisual = dragVisual;
        this._activeContext = context;

        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "startDragDrop", [dragSource, dragVisual, context]);
    },

    _stopDragDrop: function(cancelled) {
        this._scroller.set_enabled(false);

        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_stopDragDrop", [cancelled]);
    },

    _drag: function(isInitialDrag) {
        AjaxControlToolkit.GenericDragDropManager.callBaseMethod(this, "_drag", [isInitialDrag]);

        this._autoScroll();
    },

    _wireEvents: function() {
        $addHandler(document, "mouseup", this._mouseUpHandler);
        $addHandler(document, "mousemove", this._mouseMoveHandler);
        $addHandler(document, "keypress", this._keyPressHandler);
    },

    _unwireEvents: function() {
        if (null != this._keyPressHandler) $removeHandler(document, "keypress", this._keyPressHandler);
        if (null != this._mouseMoveHandler) $removeHandler(document, "mousemove", this._mouseMoveHandler);
        if (null != this._mouseUpHandler) $removeHandler(document, "mouseup", this._mouseUpHandler);
    },

    _wireDropTargetEvents: function(dropTarget) {

    },

    _unwireDropTargetEvents: function(dropTarget) {

    },

    _onMouseUp: function(e) {
        window._event = e;
        this._stopDragDrop(false);
    },

    _onMouseMove: function(e) {
        window._event = e;
        this._drag();
    },

    _onKeyPress: function(e) {
        window._event = e;

        var k = e.keyCode ? e.keyCode : e.rawEvent.keyCode;
        if (k == 27) {
            this._stopDragDrop(true);
        }
    },

    _autoScroll: function() {
        var ev = window._event;
        var browserRect = this.getBrowserRectangle();
        if (browserRect.width > 0) {
            this._scrollDeltaX = this._scrollDeltaY = 0;
            if (ev.clientX < browserRect.x + this._scrollEdgeConst) this._scrollDeltaX = -this._scrollByConst;
            else if (ev.clientX > browserRect.width - this._scrollEdgeConst) this._scrollDeltaX = this._scrollByConst;
            if (ev.clientY < browserRect.y + this._scrollEdgeConst) this._scrollDeltaY = -this._scrollByConst;
            else if (ev.clientY > browserRect.height - this._scrollEdgeConst) this._scrollDeltaY = this._scrollByConst;
            if (this._scrollDeltaX != 0 || this._scrollDeltaY != 0) {
                this._scroller.set_enabled(true);
            }
            else {
                this._scroller.set_enabled(false);
            }
        }
    },

    _onScrollerTick: function() {
        var oldLeft = document.body.scrollLeft;
        var oldTop = document.body.scrollTop;
        window.scrollBy(this._scrollDeltaX, this._scrollDeltaY);
        var newLeft = document.body.scrollLeft;
        var newTop = document.body.scrollTop;

        var dragVisual = this._activeDragVisual;
        var position = { x: parseInt(dragVisual.style.left) + (newLeft - oldLeft), y: parseInt(dragVisual.style.top) + (newTop - oldTop) };
        $common.setLocation(dragVisual, position);
    }
}
AjaxControlToolkit.GenericDragDropManager.registerClass('AjaxControlToolkit.GenericDragDropManager', AjaxControlToolkit.IEDragDropManager);

AjaxControlToolkit._MultiHandleSliderDragDropInternal = function() {
    AjaxControlToolkit._MultiHandleSliderDragDropInternal.initializeBase(this);
    this._instance = null;
}
AjaxControlToolkit._MultiHandleSliderDragDropInternal.prototype = {
    _getInstance: function() {

        this._instance = new AjaxControlToolkit.GenericDragDropManager();
        this._instance.initialize();
        this._instance.add_dragStart(Function.createDelegate(this, this._raiseDragStart));
        this._instance.add_dragStop(Function.createDelegate(this, this._raiseDragStop));

        return this._instance;
    }
}
AjaxControlToolkit._MultiHandleSliderDragDropInternal.registerClass('AjaxControlToolkit._MultiHandleSliderDragDropInternal', AjaxControlToolkit._DragDropManager);
AjaxControlToolkit.DragDrop = new AjaxControlToolkit._MultiHandleSliderDragDropInternal();

AjaxControlToolkit.MultiHandleInnerRailStyle = function() {

}

AjaxControlToolkit.MultiHandleInnerRailStyle.prototype = {
    AsIs: 0,
    SlidingDoors: 1
}
AjaxControlToolkit.MultiHandleInnerRailStyle.registerEnum('AjaxControlToolkit.MultiHandleInnerRailStyle', false);

AjaxControlToolkit.SliderOrientation = function() {

}

AjaxControlToolkit.SliderOrientation.prototype = {
    Horizontal: 0,
    Vertical: 1
}
AjaxControlToolkit.SliderOrientation.registerEnum('AjaxControlToolkit.SliderOrientation', false);

AjaxControlToolkit.MultiHandleSliderBehavior = function(element) {

    AjaxControlToolkit.MultiHandleSliderBehavior.initializeBase(this, [element]);

    this._isServerControl = false;
    this._minimum = null;
    this._maximum = null;
    this._orientation = AjaxControlToolkit.SliderOrientation.Horizontal;
    this._cssClass = null;
    this._multiHandleSliderTargets = null;
    this._length = 150;
    this._steps = 0;
    this._showInnerRail = false;
    this._showHoverStyle = false;
    this._showDragStyle = false;
    this._raiseChangeOnlyOnMouseUp = true;
    this._innerRailStyle = AjaxControlToolkit.MultiHandleInnerRailStyle.AsIs;
    this._enableInnerRangeDrag = false;
    this._enableRailClick = true;
    this._isReadOnly = false;
    this._increment = 1;
    this._enableKeyboard = true;
    this._enableMouseWheel = true;
    this._tooltipText = '';

    this._boundControlID = null;
    this._handleCssClass = null;
    this._handleImageUrl = null;
    this._handleImage = null;
    this._railCssClass = null;
    this._decimals = 0;

    this._textBox = null;
    this._wrapper = null;
    this._outer = null;
    this._inner = null;
    this._handleData = null;
    this._handles = 0;
    this._innerDragFlag = false;
    this._isVertical = false;

    this._selectStartHandler = null;
    this._mouseUpHandler = null;
    this._mouseOutHandler = null;
    this._keyDownHandler = null;
    this._mouseWheelHandler = null;
    this._mouseOverHandler = null;

    this._selectStartPending = false;
    this._initialized = false;
    this._handleUnderDrag = null;
    this._innerDrag = false;
    this._blockInnerClick = false;
}

AjaxControlToolkit.MultiHandleSliderBehavior.prototype = {

    initialize: function() {

        AjaxControlToolkit.MultiHandleSliderBehavior.callBaseMethod(this, 'initialize');

        if (this._boundControlID && !this._multiHandleSliderTargets) {

            this._multiHandleSliderTargets = [{
                "ControlID": this._boundControlID,
                "HandleCssClass": this._handleCssClass,
                "HandleImageUrl": this._handleImageUrl,
                "Decimals": this._decimals
}];
            }
            this._handles = this._multiHandleSliderTargets ? this._multiHandleSliderTargets.length : 0;
            if (this._handles === 0) {

                var boundless = document.createElement("INPUT");
                boundless.id = "boundless";
                boundless.style.display = "none";
                boundless.value = this.get_minimum();
                document.forms[0].appendChild(boundless);

                this._multiHandleSliderTargets = [{
                    "ControlID": boundless.id,
                    "HandleCssClass": this._handleCssClass,
                    "HandleImageUrl": this._handleImageUrl,
                    "Decimals": this._decimals
}];
                    this._boundControlID = boundless.id;
                    this._handles = 1;
                }

                this._isVertical = this._orientation === AjaxControlToolkit.SliderOrientation.Vertical;

                this._resolveNamingContainer();
                this._createWrapper();
                this._createOuterRail();
                this._createHandles();
                this._createInnerRail();
                this._setRailStyles();

                if (this._length) {
                    if (!this._cssClass && this._innerRailStyle !== AjaxControlToolkit.MultiHandleInnerRailStyle.SlidingDoors) {
                        if (this._isVertical) {
                            this._outer.style.height = this._length + "px";
                        } else {
                            this._outer.style.width = this._length + "px";
                        }
                    }
                }

                this._build();
                this._enforceElementPositioning();
                this._initializeSlider();
            },

            dispose: function() {

                this._disposeHandlers();
                this._disposeMultiHandleSliderTargets();

                AjaxControlToolkit.MultiHandleSliderBehavior.callBaseMethod(this, 'dispose');
            },

            get_SliderInitialized: function() {

                return this._initialized;
            },

            getValue: function(index) {

                var multiHandleSliderTarget = $get(this._multiHandleSliderTargets[index].ControlID);
                return multiHandleSliderTarget.value;
            },
            setValue: function(index, value) {

                var multiHandleSliderTarget = $get(this._multiHandleSliderTargets[index].ControlID);
                if (multiHandleSliderTarget) {
                    this.beginUpdate();
                    this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, this._getNearestStepValue(value));
                    this.endUpdate();
                }
            },

            get_values: function() {

                var values = [this._handles];
                for (var i = 0; i < this._handles; i++) {
                    var control = this._multiHandleSliderTargets[i];
                    values[i] = control.value;
                }
                return values.join(',');
            },

            _build: function() {

                this._textBox = this.get_element();
                this._textBox.parentNode.insertBefore(this._wrapper, this._textBox);
                this._wrapper.appendChild(this._outer);

                if (this._inner && this._showInnerRail) {
                    this._outer.appendChild(this._inner);
                }
                this._textBox.style.display = 'none';
            },

            _calculateInnerRailOffset: function(e) {

                var edge = this._isVertical ? this._inner.style.top : this._inner.style.left;
                var offset = this._isVertical ? e.offsetY : e.offsetX;
                offset += parseInt(edge, 10);

                return offset;
            },

            _calculateClick: function(offset) {

                var railBounds = this._getOuterBounds(),
            closestHandle = this._handleData[0];

                var handleBounds = this._getBoundsInternal(closestHandle);
                closestHandle = this._calculateClosestHandle(offset);

                var minOffset = handleBounds.width / 2;
                var maxOffset = railBounds.width - minOffset;

                offset = (offset < minOffset) ? minOffset : (offset > maxOffset) ? maxOffset : offset;

                var multiHandleSliderTarget = $get(closestHandle.multiHandleSliderTargetID);
                this._calculateMultiHandleSliderTargetValue(multiHandleSliderTarget, offset, true);
                $common.tryFireEvent(this.get_element(), "change");
            },

            _calculateClosestHandle: function(offset) {

                var closestHandle = this._handleData[0],
            distances = [this._handles],
            outer = this._getOuterBounds();

                for (var i = 0; i < this._handles; i++) {
                    var handle = this._handleData[i],
                bounds = this._getBoundsInternal(handle);

                    var pos = this._isVertical ? handle.offsetTop : bounds.x - outer.x;
                    distances[i] = Math.abs(pos - offset);
                }

                var delta = distances[0];
                for (i = 0; i < this._handles; i++) {
                    var d = distances[i];
                    if (d < delta) {
                        handle = this._handleData[i];
                        delta = d;
                        closestHandle = handle;
                    }
                }

                if (this._innerDrag) {
                    var index = Array.indexOf(this._handleData, closestHandle);
                    var location = Sys.UI.DomElement.getLocation(closestHandle);
                    var locationOffset = this._isVertical ? location.y : location.x - outer.x;

                    if (locationOffset >= (offset + distances[index])) {

                        var newHandle = this._handleData[index - 1];
                        if (newHandle) {
                            closestHandle = newHandle;
                        }
                    }
                }

                return closestHandle;
            },

            _calculateMultiHandleSliderTargetValue: function(multiHandleSliderTarget, mouseOffset, computed) {

                var secondaryHandle,
            secondaryMultiHandleSliderTarget,
            min = this._minimum,
            max = this._maximum;

                if (this._handleUnderDrag && !multiHandleSliderTarget) {
                    handle = this._handleUnderDrag;
                    multiHandleSliderTarget = $get(this._handleUnderDrag.multiHandleSliderTargetID);
                    if (this._innerDrag) {
                        var primary = Array.indexOf(this._handleData, handle);
                        secondaryHandle = this._handleData[primary + 1];
                        if (!secondaryHandle) {

                            secondaryHandle = this._handleData[primary - 1];
                        }
                        secondaryMultiHandleSliderTarget = $get(secondaryHandle.multiHandleSliderTargetID);
                    }
                }

                var handle = multiHandleSliderTarget.Handle, value = multiHandleSliderTarget.value;

                if (value && !computed) {
                    if (typeof (value) !== 'number') {
                        try {
                            value = parseFloat(value);
                        } catch (ex) {
                            value = Number.NaN;
                        }
                    }

                    if (isNaN(value)) {
                        value = this._minimum;
                    }

                    val = Math.max(Math.min(value, max), min);
                } else {
                    var handleBounds = this._getBoundsInternal(handle),
                railBounds = this._getOuterBounds(),
                mark = (mouseOffset) ? mouseOffset - handleBounds.width / 2 : handleBounds.x - railBounds.x,
                extent = railBounds.width - handleBounds.width, percent = mark / extent;

                    val = Math.max(Math.min(value, max), min);
                    val = (mark === 0) ? min : (mark === (railBounds.width - handleBounds.width)) ? max : min + percent * (max - min);
                }

                if (this._steps > 0) {
                    val = this._getNearestStepValue(val);
                }

                val = Math.max(Math.min(val, max), min);

                var previousControls = [],
            nextControls = [],
            cp = 0,
            cn = 0,
            block,
            prev = true;

                for (var i = 0; i < this._handles; i++) {
                    var vc = this._multiHandleSliderTargets[i];
                    if (!vc.ControlID.match(multiHandleSliderTarget.id)) {
                        if (prev) {
                            previousControls[cp] = this._multiHandleSliderTargets[i];
                            cp++;
                        } else {
                            nextControls[cn] = this._multiHandleSliderTargets[i];
                            cn++;
                        }
                    } else {
                        prev = false;
                    }
                }

                if (cp > 0) {
                    var p = parseFloat($get(previousControls[cp - 1].ControlID).value);
                    val = Math.max(val, p);
                    block = val === p;
                }

                if (cn > 0) {
                    var n = parseFloat($get(nextControls[0].ControlID).value);
                    val = Math.min(val, n);
                    block = val === n;
                }

                if (secondaryHandle) {
                    var delta = val - parseFloat(value),
                secondaryValue = parseFloat(secondaryMultiHandleSliderTarget.value),
                secondaryVal = secondaryValue + delta;

                    var nextIndex = Array.indexOf(this._handleData, secondaryHandle) + 1;
                    if (nextIndex < this._multiHandleSliderTargets.length) {
                        var nextMultiHandleSliderTargetID = this._multiHandleSliderTargets[nextIndex].ControlID;
                    }
                    if (nextMultiHandleSliderTargetID) {
                        var nextMultiHandleSliderTarget = $get(nextMultiHandleSliderTargetID);
                    }
                    if (nextMultiHandleSliderTarget) {
                        var nextValue = nextMultiHandleSliderTarget.value;
                    }

                    if (secondaryVal > (nextValue || max)) {
                        secondaryVal = secondaryValue;
                        val = value;
                        block = true;
                    }
                }

                if (!block && (Math.max(val, max) === max && Math.min(val, min) === min)) {
                    this.beginUpdate();

                    val = Math.max(Math.min(val, max), min);
                    this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, val);

                    if (secondaryHandle) {
                        this._setMultiHandleSliderTargetValue(secondaryMultiHandleSliderTarget, secondaryVal);
                    }
                    this.endUpdate();
                } else {
                    this.beginUpdate();

                    if (this._handles === 1) {
                        this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, val);
                    } else {
                        multiHandleSliderTarget.value = val;
                        handle.Value = val;
                        this._setHandlePosition(handle, true);
                    }

                    if (secondaryHandle) {
                        secondaryMultiHandleSliderTarget.value = secondaryVal;
                        secondaryHandle.Value = secondaryVal;
                        this._setHandlePosition(secondaryHandle, true);
                    }

                    this.endUpdate();
                }
                return val;
            },

            _cancelDrag: function() {

                if (AjaxControlToolkit.MultiHandleSliderBehavior.DropPending === this) {
                    AjaxControlToolkit.MultiHandleSliderBehavior.DropPending = null;
                    if (this._selectStartPending) {
                        if (null != this._selectStartHandler) $removeHandler(document, 'selectstart', this._selectStartHandler);
                    }
                }
            },

            _createHandles: function() {

                for (var i = 0; i < this._handles; i++) {

                    var handleName = this.get_id() + "_handle_" + i,
                v = this._isVertical,
                hideStyle = '',
                hoverStyle = '',
                dragStyle = '';

                    if (this._handles === 1 && this._handleImageUrl) {
                        var img = "<img id='" + this.get_id() + "_handleImage' src='" + this._handleImageUrl + "' alt='' />";
                    }

                    var anchorStart = "<a id='" + handleName + "' ";
                    var innerImg = img ? img : "";
                    var anchorEnd = "><div>" + innerImg + "</div></a>";
                    this._outer.innerHTML += anchorStart + anchorEnd;
                }

                this._handleData = [this._handles];

                for (i = 0; i < this._handles; i++) {

                    var styleInfo = this._cssClass ? this._cssClass : "ajax__multi_slider_default";
                    var handleCss = this._multiHandleSliderTargets[i].HandleCssClass;

                    if (handleCss || this._cssClass) {

                        hideStyle = handleCss ? handleCss + " " : this._cssClass + " ";
                        hoverStyle = hideStyle;
                        dragStyle = hideStyle;

                        var dragCss = handleCss,
                    hoverCss = handleCss;

                        hideStyle = !handleCss ? hideStyle + this._isVertical ? 'handle_vertical' : 'handle_horizontal' : hideStyle + handleCss;
                        hoverStyle = !hoverCss ? hoverStyle + this._isVertical ? 'handle_vertical_hover' : 'handle_horizontal_hover' : hoverStyle + hoverCss;
                        dragStyle = !dragCss ? dragStyle + this._isVertical ? 'handle_vertical_down' : 'handle_horizontal_down' : dragStyle + dragCss;
                    }

                    this._handleCallbacks = {
                        mouseover: Function.createCallback(this._onShowHover, { vertical: v, custom: hoverStyle }),
                        mouseout: Function.createCallback(this._onHideHover, { vertical: v, custom: hideStyle }),
                        mousedown: Function.createCallback(this._onShowDrag, { vertical: v, custom: dragStyle }),
                        mouseup: Function.createCallback(this._onHideDrag, { vertical: v, custom: hideStyle })
                    };

                    this._handleData[i] = this._outer.childNodes[i];
                    this._handleData[i].style.overflow = 'hidden';

                    var supressCssEventHandlers = this._multiHandleSliderTargets[i].SupressCssClassEventHandlers;
                    if(typeof(supressCssEventHandlers) == "undefined" ||
                       false == supressCssEventHandlers)
                    {
                        $addHandlers(this._handleData[i], this._handleCallbacks);
                    }

                    handleCss = this._multiHandleSliderTargets[i].HandleCssClass;
                    if (handleCss) {
                        Sys.UI.DomElement.addCssClass(this._handleData[i], styleInfo);
                        Sys.UI.DomElement.addCssClass(this._handleData[i], handleCss);
                    } else {

                        this._handleData[i].className = this._isVertical ? 'handle_vertical' : 'handle_horizontal';
                    }

                    if (this._multiHandleSliderTargets) {
                        var multiHandleSliderTargetID = this._multiHandleSliderTargets[i].ControlID;
                        this._handleData[i].multiHandleSliderTargetID = multiHandleSliderTargetID;
                    }

                    this._handleData[i].style.left = '0px';
                    this._handleData[i].style.top = '0px';
                }
            },

            _createInnerRail: function() {

                if (this._handles > 1 && this._showInnerRail) {
                    this._inner = document.createElement('DIV');
                    this._inner.id = this.get_id() + '_inner';
                    this._inner.style.outline = "none";
                    this._inner.tabIndex = -1;
                }
            },

            _createOuterRail: function() {

                this._outer = document.createElement('DIV');
                this._outer.id = this.get_id() + '_outer';
                this._outer.style.outline = "none";
                this._outer.tabIndex = -1;
            },

            _createWrapper: function() {

                this._wrapper = document.createElement("DIV");
                this._wrapper.style.position = "relative";
                this._wrapper.style.outline = "none";
            },

            _disposeHandlers: function() {

                if (!this._isReadOnly) {

                    if (null != this._mouseUpHandler) $removeHandler(document, 'mouseup', this._mouseUpHandler);
                    if (null != this._mouseOutHandler) $removeHandler(document, 'mouseout', this._mouseOutHandler);

                    if (this._outer) {

                        if (this._outer.addEventListener) {
                            this._outer.removeEventListener('DOMMouseScroll', this._mouseWheelHandler, false);
                        } else {
                            this._outer.detachEvent('onmousewheel', this._mouseWheelHandler);
                        }

                    }

                    for (var i = 0; i < this._handles; i++) {
                        if (this._handleDelegates) {

                        }
                        if (this._handleCallbacks) {

                            $clearHandlers(this._handleData[i]);
                        }
                    }

                    this._handleDelegates = null;
                    this._handleCallbacks = null;

                    if (this._inner && this._showInnerRail && this._innerDelegates) {

                    }

                    this._selectStartHandler = null;
                    this._mouseUpHandler = null;
                    this._mouseOutHandler = null;
                    this._mouseWheelHandler = null;
                    this._mouseOverHandler = null;
                    this._keyDownHandler = null;
                }
            },

            _disposeMultiHandleSliderTargets: function() {

                if (this._multiHandleSliderTargets) {
                    for (var i = 0; i < this._handles; i++) {
                        var multiHandleSliderTarget = this._multiHandleSliderTargets[i];
                        var isInput = multiHandleSliderTarget && multiHandleSliderTarget.nodeName === 'INPUT';

                        if (isInput) {
                            if (null != multiHandleSliderTarget.ChangeHandler) $removeHandler(multiHandleSliderTarget, 'change', multiHandleSliderTarget.ChangeHandler);
                            if (null != multiHandleSliderTarget.KeyPressHandler) $removeHandler(multiHandleSliderTarget, 'keypress', multiHandleSliderTarget.KeyPressHandler);

                            multiHandleSliderTarget.ChangeHandler = null;
                            multiHandleSliderTarget.KeyPressHandler = null;
                        }
                    }
                }
            },

            _ensureBinding: function(multiHandleSliderTarget) {

                if (multiHandleSliderTarget) {
                    var value = multiHandleSliderTarget.value;

                    if (value >= this._minimum || value <= this._maximum) {
                        var isInputElement = multiHandleSliderTarget && multiHandleSliderTarget.nodeName === 'INPUT';

                        if (isInputElement) {
                            multiHandleSliderTarget.value = value;
                        } else if (multiHandleSliderTarget) {
                            multiHandleSliderTarget.innerHTML = value;
                        }
                    }
                }
            },

            _enforceElementPositioning: function() {

                var tbPosition = {
                    position: this.get_element().style.position,
                    top: this.get_element().style.top,
                    right: this.get_element().style.right,
                    bottom: this.get_element().style.bottom,
                    left: this.get_element().style.left
                };

                if (tbPosition.position !== '') {
                    this._wrapper.style.position = tbPosition.position;
                }
                if (tbPosition.top !== '') {
                    this._wrapper.style.top = tbPosition.top;
                }
                if (tbPosition.right !== '') {
                    this._wrapper.style.right = tbPosition.right;
                }
                if (tbPosition.bottom !== '') {
                    this._wrapper.style.bottom = tbPosition.bottom;
                }
                if (tbPosition.left !== '') {
                    this._wrapper.style.left = tbPosition.left;
                }
            },

            _getNearestStepValue: function(value) {

                if (this._steps === 0) return value;

                var extent = this._maximum - this._minimum;
                if (extent === 0) return value;

                if ((this._steps - 1) !== 0) {
                    var delta = extent / (this._steps - 1);
                } else {
                    return value;
                }

                return Math.round(value / delta) * delta;
            },

            _getStepValues: function() {

                var steps = [this._steps],
            extent = this._maximum - this._minimum;

                var increment = extent / (this._steps - 1);
                steps[0] = this._minimum;

                for (var i = 1; i < this._steps; i++) {
                    steps[i] = this._minimum + (increment * i);
                }
                return steps;
            },

            _handleSlide: function(decrement) {

                var index = decrement ? 0 : this._handles - 1,
            start = decrement ? 1 : 0,
            end = decrement ? this._handles : this._handles - 1,
            multiHandleSliderTargetID = this._handleData[index].multiHandleSliderTargetID;

                if (this._slideMultiHandleSliderTarget(multiHandleSliderTargetID, decrement)) {

                    for (var i = start; i < end; i++) {
                        multiHandleSliderTargetID = this._handleData[i].multiHandleSliderTargetID;
                        this._slideMultiHandleSliderTarget(multiHandleSliderTargetID, decrement);
                    }
                }
                this._initializeInnerRail();
            },

            _initializeDragHandle: function(handle) {

                var dragHandle = handle.DragHandle = document.createElement('DIV');

                dragHandle.style.position = 'absolute';
                dragHandle.style.width = '1px';
                dragHandle.style.height = '1px';
                dragHandle.style.overflow = 'hidden';
                dragHandle.style.background = 'none';

                document.forms[0].appendChild(handle.DragHandle);
            },

            _initializeHandlers: function() {

                if (!this._isReadOnly) {

                    this._selectStartHandler = Function.createDelegate(this, this._onSelectStart);
                    this._mouseUpHandler = Function.createDelegate(this, this._onMouseUp);
                    this._mouseOutHandler = Function.createDelegate(this, this._onMouseOut);
                    this._mouseWheelHandler = Function.createDelegate(this, this._onMouseWheel);
                    this._mouseOverHandler = Function.createDelegate(this, this._onMouseOver);
                    this._keyDownHandler = Function.createDelegate(this, this._onKeyDown);

                    $addHandler(document, 'mouseup', this._mouseUpHandler);
                    $addHandler(document, 'mouseout', this._mouseOutHandler);

                    this._handleDelegates = {
                        mousedown: Function.createDelegate(this, this._onMouseDown),
                        dragstart: Function.createDelegate(this, this._IEDragDropHandler),
                        drag: Function.createDelegate(this, this._IEDragDropHandler),
                        dragEnd: Function.createDelegate(this, this._IEDragDropHandler)
                    };

                    for (var i = 0; i < this._handles; i++) {
                        $addHandlers(this._handleData[i], this._handleDelegates);
                    }

                    if (this._outer) {

                        if (this._enableMouseWheel) {
                            if (this._outer.addEventListener) {
                                this._outer.addEventListener('DOMMouseScroll', this._mouseWheelHandler, false);
                            } else {
                                this._outer.attachEvent('onmousewheel', this._mouseWheelHandler);
                            }
                        }

                        this._outerDelegates = {
                            click: Function.createDelegate(this, this._onOuterRailClick),
                            mouseover: Function.createDelegate(this, this._mouseOverHandler),
                            keydown: Function.createDelegate(this, this._keyDownHandler)
                        };
                        $addHandlers(this._outer, this._outerDelegates);
                    }

                    if (this._inner && this._showInnerRail) {
                        this._innerDelegates = {
                            click: Function.createDelegate(this, this._onInnerRailClick),
                            mousedown: Function.createDelegate(this, this._onMouseDownInner),
                            mouseup: Function.createDelegate(this, this._onMouseUpInner),
                            mouseout: Function.createDelegate(this, this._onMouseOutInner),
                            mousemove: Function.createDelegate(this, this._onMouseMoveInner),
                            dragStart: Function.createDelegate(this, this._IEDragDropHandler),
                            drag: Function.createDelegate(this, this._IEDragDropHandler),
                            dragEnd: Function.createDelegate(this, this._IEDragDropHandler)
                        };
                        $addHandlers(this._inner, this._innerDelegates);
                    }
                }
            },

            _initializeHandles: function() {

                var state = null;
                if (state) {
                    var handleStates = state.split(',', this._handles);
                }

                for (var i = 0; i < this._handles; i++) {
                    var handle = this._handleData[i],
                decimalPlaces = this._multiHandleSliderTargets[i].Decimals;

                    if (handleStates) {
                        handle.Value = parseFloat(handleStates[i]);
                    }

                    this._initializeMultiHandleSliderTarget(handle.multiHandleSliderTargetID, decimalPlaces, handle);
                    this._initializeHandleValue(handle);
                    this._setHandlePosition(handle, true);
                    this._initializeDragHandle(handle);
                }
            },

            _initializeHandleValue: function(handle) {

                if (!handle.Value) {
                    try {
                        var multiHandleSliderTarget = $get(handle.multiHandleSliderTargetID),
                    isInput = multiHandleSliderTarget && multiHandleSliderTarget.nodeName === 'INPUT',
                    handleValue = parseFloat(isInput ? multiHandleSliderTarget.value : multiHandleSliderTarget.innerHTML);
                    } catch (ex) {
                        handleValue = Number.NaN;
                    }

                    if (isNaN(handleValue)) {
                        handle.Value = this._minimum;
                        if (isInput) {
                            multiHandleSliderTarget.value = handle.Value;
                        } else {
                            multiHandleSliderTarget.innerHTML = handle.Value;
                        }
                    } else {
                        handle.Value = handleValue;
                    }
                }
            },

            _initializeInnerRail: function() {

                if (this._inner && this._showInnerRail) {
                    var firstIndex = 0, lastIndex = this._handles - 1,
                handle = this._handleData[firstIndex],
                lastHandle = this._handles > 1 ? this._handleData[lastIndex] : null;

                    if (lastHandle) {

                        var handleWidth = parseInt(this._getBoundsInternal(handle).width, 10),
                    handleLeft = parseInt(this._isVertical ? handle.style.top : handle.style.left, 10),
                    handleRight = parseInt(this._isVertical ? lastHandle.style.top : lastHandle.style.left, 10),
                    firstOffset = parseInt(this._multiHandleSliderTargets[firstIndex].Offset, 10),
                    lastOffset = parseInt(this._multiHandleSliderTargets[lastIndex].Offset, 10);

                        handleLeft += firstOffset;
                        handleRight += lastOffset;

                        if (this._isVertical) {
                            this._inner.style.top = handleLeft + "px";
                            this._inner.style.height = handleRight + handleWidth - handleLeft + "px";
                        } else {
                            this._inner.style.left = handleLeft + "px";
                            this._inner.style.width = (handleRight + handleWidth - handleLeft) + "px";
                        }

                        if (this._innerRailStyle === AjaxControlToolkit.MultiHandleInnerRailStyle.SlidingDoors) {
                            this._inner.style.backgroundPosition = this._isVertical ? "0 -" + handleLeft + "px" : "-" + handleLeft + "px 0";
                        }
                    }
                }
            },

            _initializeMultiHandleSliderTarget: function(multiHandleSliderTargetID, decimalPlaces, handle) {

                if (multiHandleSliderTargetID) {
                    var multiHandleSliderTarget = $get(multiHandleSliderTargetID);

                    if (handle.Value) {

                        multiHandleSliderTarget.value = handle.Value;
                    }

                    multiHandleSliderTarget.Handle = handle;
                    multiHandleSliderTarget.Decimals = decimalPlaces;
                    multiHandleSliderTarget.OldValue = multiHandleSliderTarget.value;
                    multiHandleSliderTarget.onchange = "setValue(this, " + multiHandleSliderTarget.value + ")";

                    if (!multiHandleSliderTarget.Decimals) {
                        multiHandleSliderTarget.Decimals = 0;
                    }

                    var isInput = multiHandleSliderTarget && multiHandleSliderTarget.nodeName === 'INPUT';
                    if (isInput) {
                        multiHandleSliderTarget.KeyPressHandler = Function.createDelegate(this, this._onMultiHandleSliderTargetKeyPressed);
                        multiHandleSliderTarget.ChangeHandler = Function.createDelegate(this, this._onMultiHandleSliderTargetChange);

                        AjaxControlToolkit.addHandlerWorkaround(multiHandleSliderTarget, 'keypress', multiHandleSliderTarget.KeyPressHandler);
                        AjaxControlToolkit.addHandlerWorkaround(multiHandleSliderTarget, 'change', multiHandleSliderTarget.ChangeHandler);
                    }
                }
            },

            _initializeSlider: function() {

                AjaxControlToolkit.DragDrop.registerDropTarget(this);

                this._initializeHandles();
                this._initializeHandlers();
                this._initializeInnerRail();
                this._initialized = true;

                this._raiseEvent('load');
            },

            _resetDragHandle: function(handle) {

                var handleBounds = $common.getBounds(handle);
                $common.setLocation(handle.DragHandle, {
                    x: handleBounds.x,
                    y: handleBounds.y
                });
            },

            _resolveNamingContainer: function() {

                if (this._isServerControl && this._multiHandleSliderTargets && !this._boundControlID) {

                    var token = "";

                    for (var i = 0; i < this._handles; i++) {
                        this._multiHandleSliderTargets[i].ControlID = token + this._multiHandleSliderTargets[i].ControlID;
                    }
                }
            },

            _saveState: function() {

                var state = [this._handles];
                for (var i = 0; i < this._handles; i++) {
                    state[i] = $get(this._multiHandleSliderTargets[i].ControlID).value;
                }

            },

            _setHandlePosition: function(handle, allowAnimation) {

                var min = this._minimum, max = this._maximum, value = handle.Value,
            handleBounds = this._getBoundsInternal(handle),
            railBounds = this._getOuterBounds();

                if (handleBounds.width <= 0 && railBounds.width <= 0) {
                    handleBounds.width = parseInt($common.getCurrentStyle(handle, 'width'), 10);
                    railBounds.width = parseInt($common.getCurrentStyle(this._outer, 'width'), 10);

                    if (handleBounds.width <= 0 || railBounds.width <= 0) {
                        throw Error.argument('width', AjaxControlToolkit.Resources.MultiHandleSlider_CssHeightWidthRequired);
                    }
                }

                var extent = max - min, fraction = (value - min) / extent;
                var o = Math.round(fraction * (railBounds.width - handleBounds.width));
                var offset = (value === min) ? 0 : (value === max) ? (railBounds.width - handleBounds.width) : o;

                o = offset + 'px';
                if (this._isVertical) {
                    handle.style.top = o;
                } else {
                    handle.style.left = o;
                }
            },

            _setRailStyles: function() {

                if (!this._inner && this._railCssClass) {
                    this._outer.className = this._railCssClass;
                    return;
                }
                var styleInfo = this._cssClass ? this._cssClass : "ajax__multi_slider_default";

                Sys.UI.DomElement.addCssClass(this.get_element(), styleInfo);
                Sys.UI.DomElement.addCssClass(this._outer, styleInfo);
                Sys.UI.DomElement.addCssClass(this._wrapper, styleInfo);

                if (this._inner) {
                    Sys.UI.DomElement.addCssClass(this._inner, styleInfo);

                    var outer = this._isVertical ? 'outer_rail_vertical' : 'outer_rail_horizontal',
                inner = this._isVertical ? 'inner_rail_vertical' : 'inner_rail_horizontal';

                    Sys.UI.DomElement.addCssClass(this._outer, outer);
                    Sys.UI.DomElement.addCssClass(this._inner, inner);
                } else {
                    outer = this._isVertical ? 'inner_rail_vertical' : 'inner_rail_horizontal';

                    Sys.UI.DomElement.addCssClass(this._outer, outer);
                }
            },

            _setMultiHandleSliderTargetValue: function(multiHandleSliderTarget, value) {

                var oldValue = multiHandleSliderTarget.OldValue, newValue = value;

                if (oldValue === newValue && this._isReadOnly) {
                    multiHandleSliderTarget.value = oldValue;
                } else {
                    if (!this.get_isUpdating()) {
                        newValue = this._calculateMultiHandleSliderTargetValue(multiHandleSliderTarget);
                    }

                    multiHandleSliderTarget.value = newValue.toFixed(multiHandleSliderTarget.Decimals);
                    this._ensureBinding(multiHandleSliderTarget);

                    if (!Number.isInstanceOfType(multiHandleSliderTarget.value)) {
                        try {
                            multiHandleSliderTarget.value = parseFloat(multiHandleSliderTarget.value);
                        } catch (ex) {
                            multiHandleSliderTarget.value = Number.NaN;
                        }
                    }

                    if (this._tooltipText) {
                        var handle = multiHandleSliderTarget.Handle;
                        handle.alt = handle.title = String.format(this._tooltipText, multiHandleSliderTarget.value);
                    }

                    if (this._initialized) {
                        multiHandleSliderTarget.Handle.Value = newValue;
                        this._setHandlePosition(multiHandleSliderTarget.Handle, true);

                        if (this._handles === 1) {
                            this.get_element().value = newValue;
                        }

                        if (multiHandleSliderTarget.value !== oldValue) {
                            multiHandleSliderTarget.OldValue = multiHandleSliderTarget.value;
                            this._initializeInnerRail();

                            if (this._innerDrag) {
                                this._blockInnerClick = true;
                            }
                            this._raiseEvent('valueChanged');

                            if (this.get_isUpdating()) {
                                if (!this._raiseChangeOnlyOnMouseUp) {
                                    $common.tryFireEvent(this.get_element(), "change");
                                }
                            }
                        }
                    }
                }

                this._saveState();
            },

            _setValueFromMultiHandleSliderTarget: function(multiHandleSliderTarget) {

                this.beginUpdate();
                if (multiHandleSliderTarget) {
                    if (!this._isReadOnly) {
                        if (this._handles === 1 && this._steps > 0) {

                            this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, multiHandleSliderTarget.value);
                        }
                        this._calculateMultiHandleSliderTargetValue(multiHandleSliderTarget);
                    } else {
                        this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, multiHandleSliderTarget.OldValue);
                    }
                }
                this.endUpdate();
            },

            _slideMultiHandleSliderTarget: function(multiHandleSliderTargetID, decrement) {

                var multiHandleSliderTarget = $get(multiHandleSliderTargetID),
            oldValue = multiHandleSliderTarget.value,
            newValue, i;

                if (this._steps > 0) {
                    var stepValues = this._getStepValues(),
                oldStep = this._getNearestStepValue(oldValue);

                    newValue = oldStep;

                    if (decrement) {

                        for (i = this._steps - 1; i > -1; i--) {
                            if (stepValues[i] < oldStep) {
                                newValue = stepValues[i];
                                break;
                            }
                        }
                    } else {

                        for (i = 0; i < this._steps; i++) {
                            if (stepValues[i] > oldStep) {
                                newValue = stepValues[i];
                                break;
                            }
                        }
                    }
                } else {
                    var prevValue = parseFloat(multiHandleSliderTarget.value);
                    newValue = decrement ? prevValue - parseFloat(this._increment) : prevValue + parseFloat(this._increment);
                }

                multiHandleSliderTarget.value = newValue;
                this._setValueFromMultiHandleSliderTarget(multiHandleSliderTarget);
                return multiHandleSliderTarget.value == newValue;
            },

            _startDragDrop: function(handle) {

                this._resetDragHandle(handle);
                this._handleUnderDrag = handle;

                AjaxControlToolkit.DragDrop.startDragDrop(this, handle.DragHandle, null);
            },

            _onHideDrag: function(e, p) {

                this.className = p.custom && p.custom.length > 0 ? p.custom : p.vertical ? 'handle_vertical' : 'handle_horizontal';
            },

            _onHideHover: function(e, p) {

                this.className = p.custom && p.custom.length > 0 ? p.custom : p.vertical ? 'ajax__multi_slider_default handle_vertical' : 'ajax__multi_slider_default handle_horizontal';
            },

            _onInnerRailClick: function(e) {

                if (this._enableRailClick) {
                    var target = e.target;

                    if (target === this._inner && !this._blockInnerClick) {
                        this._onInnerRailClicked(e);
                    } else {
                        this._blockInnerClick = false;
                    }
                }
            },

            _onInnerRailClicked: function(e) {

                var offset = this._calculateInnerRailOffset(e);
                this._calculateClick(offset);
            },

            _onKeyDown: function(e) {

                if (this._enableKeyboard) {
                    var evt = new Sys.UI.DomEvent(e),
                handled = false;

                    switch (evt.keyCode || evt.rawEvent.keyCode) {
                        case Sys.UI.Key.up:
                        case Sys.UI.Key.left:
                            if (!handled) {
                                this._handleSlide(true);
                                evt.preventDefault();
                                handled = true;
                            }
                            return false;
                        case Sys.UI.Key.down:
                        case Sys.UI.Key.right:
                            if (!handled) {
                                this._handleSlide(false);
                                evt.preventDefault();
                                handled = true;
                            }
                            return false;
                        default:
                            return false;
                    }
                }
            },

            _onMouseOver: function(e) {

                this._outer.focus();
            },

            _onMouseWheel: function(e) {

                var delta = 0;
                if (e.wheelDelta) {
                    delta = e.wheelDelta / 120;
                    if (Sys.Browser.agent === Sys.Browser.Opera) {
                        delta = -delta;
                    }
                } else if (e.detail) {
                    delta = -e.detail / 3;
                }

                if (delta) {
                    this._handleSlide(delta <= 0);
                }

                if (e.preventDefault) {
                    e.preventDefault();
                }
                return false;
            },

            _onMouseUp: function(e) {

                window._event = e;
                e.preventDefault();

                this._cancelDrag();
            },

            _onMouseOut: function(e) {

                window._event = e;
                e.preventDefault();

                //TODO:(tonyja) eaxmine how to avoid calling blur() on destroyed elements after the slider DOM is overwritten
                try { this._outer.blur(); } catch (e) { }
                if (this._handleUnderDrag) {
                    this._cancelDrag();
                }
            },

            _onMouseOutInner: function(e) {

                window._event = e;
                e.preventDefault();

                //TODO:(tonyja) eaxmine how to avoid calling blur() on destroyed elements after the slider DOM is overwritten
                try { this._inner.blur(); } catch (e) { }
                if (this._innerDrag) {
                    this._cancelDrag();
                }
            },

            _onMouseDown: function(e) {

                window._event = e;
                e.preventDefault();

                if (!AjaxControlToolkit.MultiHandleSliderBehavior.DropPending) {
                    AjaxControlToolkit.MultiHandleSliderBehavior.DropPending = this;

                    $addHandler(document, 'selectstart', this._selectStartHandler);
                    this._selectStartPending = true;

                    var handle = e.target;
                    this._startDragDrop(handle);
                }
            },

            _onMouseDownInner: function(e) {

                window._event = e;
                e.preventDefault();

                if (this._enableInnerRangeDrag) {
                    if (!this._innerDragFlag) {
                        this._innerDragFlag = true;
                    }
                }
            },

            _onMouseUpInner: function(e) {

                if (this._enableInnerRangeDrag) {
                    this._innerDragFlag = false;
                }
            },

            _onMouseMoveInner: function(e) {

                window._event = e;
                e.preventDefault();

                if (this._enableInnerRangeDrag) {
                    if (!this._innerDrag && this._innerDragFlag) {
                        this._innerDragFlag = false;

                        if (!AjaxControlToolkit.MultiHandleSliderBehavior.DropPending) {
                            AjaxControlToolkit.MultiHandleSliderBehavior.DropPending = this;

                            $addHandler(document, 'selectstart', this._selectStartHandler);
                            this._selectStartPending = true;

                            this._innerDrag = true;

                            var offset = this._calculateInnerRailOffset(e);
                            var handle = this._calculateClosestHandle(offset);

                            this._startDragDrop(handle);
                        }
                    }
                }
            },

            _onMultiHandleSliderTargetChange: function(e) {

                var multiHandleSliderTarget = e.target;
                this._setValueFromMultiHandleSliderTarget(multiHandleSliderTarget);
                this._initializeInnerRail();

                e.preventDefault();
            },

            _onMultiHandleSliderTargetKeyPressed: function(e) {

                var evt = new Sys.UI.DomEvent(e);
                if (evt.charCode === 13) {
                    var multiHandleSliderTarget = evt.target;
                    this._setValueFromMultiHandleSliderTarget(multiHandleSliderTarget);
                    this._initializeInnerRail();
                    evt.preventDefault();
                }
            },

            _onOuterRailClick: function(e) {

                if (this._enableRailClick) {
                    var target = e.target;

                    if (target === this._outer) {
                        this._onOuterRailClicked(e);
                    }
                }
            },

            _onOuterRailClicked: function(e) {

                var offset = this._isVertical ? e.offsetY : e.offsetX;
                this._calculateClick(offset);
            },

            _onShowDrag: function(e, p) {

                this.className = p.custom && p.custom.length > 0 ? p.custom : p.vertical ? 'ajax__multi_slider_default handle_vertical_down' : 'ajax__multi_slider_default handle_horizontal_down';
            },

            _onShowHover: function(e, p) {

                this.className = p.custom && p.custom.length > 0 ? p.custom : p.vertical ? 'ajax__multi_slider_default handle_vertical_hover' : 'ajax__multi_slider_default handle_horizontal_hover';
            },

            get_dragDataType: function() {

                return 'HTML';
            },

            getDragData: function() {

                return this._handleUnderDrag;
            },

            get_dragMode: function() {

                return AjaxControlToolkit.DragMode.Move;
            },

            onDragStart: function() {

                this._resetDragHandle(this._handleUnderDrag);
                this._raiseEvent('dragStart');
            },

            onDrag: function() {

                var dragHandleBounds = this._getBoundsInternal(this._handleUnderDrag.DragHandle),
            handleBounds = this._getBoundsInternal(this._handleUnderDrag),
            railBounds = this._getOuterBounds(),
            handlePosition;

                if (this._isVertical) {
                    handlePosition = {
                        y: dragHandleBounds.x - railBounds.x,
                        x: 0
                    };
                } else {
                    handlePosition = {
                        x: dragHandleBounds.x - railBounds.x,
                        y: 0
                    };
                }

                $common.setLocation(this._handleUnderDrag, handlePosition);

                this._calculateMultiHandleSliderTargetValue(null, null, true);

                if (this._steps > 1) {
                    this._setHandlePosition(this._handleUnderDrag, false);
                }
                this._raiseEvent('drag');
            },

            onDragEnd: function() {

                this._initializeInnerRail();
                if (this._raiseChangeOnlyOnMouseUp) {
                    $common.tryFireEvent(this.get_element(), "change");
                }
                this._innerDrag = false;
                this._handleUnderDrag = null;
                this._raiseEvent('dragEnd');
            },

            get_dropTargetElement: function() {

                return document.forms[0];
            },

            canDrop: function(dragMode, dataType) {

                return dataType == 'HTML';
            },

            drop: Function.emptyMethod,
            onDragEnterTarget: Function.emptyMethod,
            onDragLeaveTarget: Function.emptyMethod,
            onDragInTarget: Function.emptyMethod,

            _IEDragDropHandler: function(e) {

                e.preventDefault();
            },

            _onSelectStart: function(e) {

                e.preventDefault();
                return false;
            },

            _getOuterBounds: function() {

                return this._getBoundsInternal(this._outer);
            },

            _getInnerBounds: function() {

                return this._getBoundsInternal(this._inner);
            },

            _getBoundsInternal: function(element) {

                var bounds = $common.getBounds(element);
                if (this._isVertical) {
                    bounds = {
                        x: bounds.y,
                        y: bounds.x,
                        height: bounds.width,
                        width: bounds.height,
                        right: bounds.right,
                        left: bounds.left,
                        bottom: bounds.bottom,
                        location: {
                            x: bounds.y,
                            y: bounds.x
                        },
                        size: {
                            width: bounds.height,
                            height: bounds.width
                        }
                    };
                } else {
                    bounds = {
                        x: bounds.x,
                        y: bounds.y,
                        height: bounds.height,
                        width: bounds.width,
                        right: bounds.right,
                        left: bounds.left,
                        bottom: bounds.bottom,
                        location: {
                            x: bounds.x,
                            y: bounds.y
                        },
                        size: {
                            width: bounds.width,
                            height: bounds.height
                        }
                    };
                }
                return bounds;
            },

            _raiseEvent: function(eventName, eventArgs) {

                var handler = this.get_events().getHandler(eventName);
                if (handler) {
                    if (!eventArgs) {
                        eventArgs = Sys.EventArgs.Empty;
                    }
                    handler(this, eventArgs);
                }
            },

            get_Value: function() {

                var bound = $get(this._boundControlID);
                return bound.value ? bound.value : 0;
            },
            set_Value: function(value) {

                var multiHandleSliderTarget = $get(this._multiHandleSliderTargets[0].ControlID);

                this.beginUpdate();
                this._setMultiHandleSliderTargetValue(multiHandleSliderTarget, this._getNearestStepValue(value));
                this.endUpdate();

                $common.tryFireEvent(multiHandleSliderTarget, "change");
            },

            get_minimum: function() {

                return this._minimum;
            },
            set_minimum: function(value) {

                if (value !== this._minimum) {
                    this._minimum = value;
                    this.raisePropertyChanged('minimum');
                }
            },

            get_maximum: function() {

                return this._maximum;
            },
            set_maximum: function(value) {

                if (value !== this._maximum) {
                    this._maximum = value;
                    this.raisePropertyChanged('maximum');
                }
            },

            get_length: function() {

                return this._length;
            },
            set_length: function(value) {

                if (value !== this._length) {
                    this._length = value;
                    this.raisePropertyChanged('length');
                }
            },

            get_steps: function() {

                return this._steps;
            },
            set_steps: function(value) {

                var oldValue = this._steps;
                this._steps = Math.abs(value);
                this._steps = (this._steps === 1) ? 2 : this._steps;
                if (oldValue !== this._steps) {
                    this.raisePropertyChanged('steps');
                }
            },

            get_orientation: function() {

                return this._isVertical;
            },
            set_orientation: function(value) {

                if (value !== this._isVertical) {
                    this._orientation = value;
                    this.raisePropertyChanged('orientation');
                }
            },

            get_raiseChangeOnlyOnMouseUp: function() {

                return this._raiseChangeOnlyOnMouseUp;
            },
            set_raiseChangeOnlyOnMouseUp: function(value) {

                if (value !== this._raiseChangeOnlyOnMouseUp) {
                    this._raiseChangeOnlyOnMouseUp = value;
                    this.raisePropertyChanged('raiseChangeOnlyOnMouseUp');
                }
            },

            get_showInnerRail: function() {

                return this._showInnerRail;
            },
            set_showInnerRail: function(value) {

                if (value !== this._showInnerRail) {
                    this._showInnerRail = value;
                    this.raisePropertyChanged('showInnerRail');
                }
            },

            get_showHandleHoverStyle: function() {

                return this._showHoverStyle;
            },
            set_showHandleHoverStyle: function(value) {

                if (value !== this._showHoverStyle) {
                    this._showHoverStyle = value;
                    this.raisePropertyChanged('showHoverStyle');
                }
            },

            get_showHandleDragStyle: function() {

                return this._showDragStyle;
            },
            set_showHandleDragStyle: function(value) {

                if (value !== this._showDragStyle) {
                    this._showDragStyle = value;
                    this.raisePropertyChanged('showDragStyle');
                }
            },

            get_innerRailStyle: function() {

                return this._innerRailStyle;
            },
            set_innerRailStyle: function(value) {

                if (value !== this._innerRailStyle) {
                    this._innerRailStyle = value;
                    this.raisePropertyChanged('innerRailStyle');
                }
            },

            get_enableInnerRangeDrag: function() {

                return this._enableInnerRangeDrag;
            },
            set_enableInnerRangeDrag: function(value) {

                if (value !== this._enableInnerRangeDrag) {
                    this._enableInnerRangeDrag = value;
                    this.raisePropertyChanged('allowInnerRangeDrag');
                }
            },

            get_enableRailClick: function() {

                return this._enableRailClick;
            },
            set_enableRailClick: function(value) {

                if (value !== this._enableRailClick) {
                    this._enableRailClick = value;
                    this.raisePropertyChanged('allowRailClick');
                }
            },

            get_isReadOnly: function() {

                return this._isReadOnly;
            },
            set_isReadOnly: function(value) {

                if (value !== this._isReadOnly) {
                    this._isReadOnly = value;
                    this.raisePropertyChanged('isReadOnly');
                }
            },

            get_enableKeyboard: function() {

                return this._enableKeyboard;
            },
            set_enableKeyboard: function(value) {

                if (value !== this._enableKeyboard) {
                    this._enableKeyboard = value;
                    this.raisePropertyChanged('enableKeyboard');
                }
            },

            get_enableMouseWheel: function() {

                return this._enableMouseWheel;
            },
            set_enableMouseWheel: function(value) {

                if (value !== this._enableMouseWheel) {
                    this._enableMouseWheel = value;
                    this.raisePropertyChanged('enableMouseWheel');
                }
            },

            get_increment: function() {

                return this._increment;
            },
            set_increment: function(value) {

                if (value !== this._increment) {
                    this._increment = value;
                    this.raisePropertyChanged('increment');
                }
            },

            get_tooltipText: function() {

                return this._tooltipText;
            },
            set_tooltipText: function(value) {

                if (value !== this._tooltipText) {
                    this._tooltipText = value;
                    this.raisePropertyChanged('tooltipText');
                }
            },

            get_multiHandleSliderTargets: function() {

                return this._multiHandleSliderTargets;
            },
            set_multiHandleSliderTargets: function(value) {

                if (value !== this._multiHandleSliderTargets) {
                    this._multiHandleSliderTargets = value;
                    this.raisePropertyChanged('multiHandleSliderTargets');
                }
            },

            get_cssClass: function() {

                return this._cssClass;
            },
            set_cssClass: function(value) {

                if (value !== this._cssClass) {
                    this._cssClass = value;
                    this.raisePropertyChanged('cssClass');
                }
            },

            get_boundControlID: function() {

                return this._boundControlID;
            },
            set_boundControlID: function(value) {

                this._boundControlID = value;
                if (this._boundControlID) {
                    this._boundControl = $get(this._boundControlID);
                } else {
                    this._boundControl = null;
                }
            },

            get_handleCssClass: function() {

                return this._handleCssClass;
            },
            set_handleCssClass: function(value) {

                this._handleCssClass = value;
            },

            get_handleImageUrl: function() {

                return this._handleImageUrl;
            },
            set_handleImageUrl: function(value) {

                this._handleImageUrl = value;
            },

            get_railCssClass: function() {

                return this._railCssClass;
            },
            set_railCssClass: function(value) {

                this._railCssClass = value;
            },

            get_decimals: function() {

                return this._decimals;
            },
            set_decimals: function(value) {

                this._decimals = value;
            },

            add_load: function(handler) {

                this.get_events().addHandler('load', handler);
            },
            remove_load: function(handler) {

                this.get_events().removeHandler('load', handler);
            },

            add_dragStart: function(handler) {

                this.get_events().addHandler('dragStart', handler);
            },
            remove_dragStart: function(handler) {

                this.get_events().removeHandler('dragStart', handler);
            },

            add_drag: function(handler) {

                this.get_events().addHandler('drag', handler);
            },
            remove_drag: function(handler) {

                this.get_events().removeHandler('drag', handler);
            },

            add_dragEnd: function(handler) {

                this.get_events().addHandler('dragEnd', handler);
            },
            remove_dragEnd: function(handler) {

                this.get_events().removeHandler('dragEnd', handler);
            },

            add_valueChanged: function(handler) {

                this.get_events().addHandler('valueChanged', handler);
            },
            remove_valueChanged: function(handler) {

                this.get_events().removeHandler('valueChanged', handler);
            },

            // BEGIN: Additional Office15 Specific MultiHandleSliderBehvaior Code (not included in the AjaxToolkit codebase at all)

            // For RTL languages the handle data needs to be swapped left/right and 
            //  the values subtracted from this._maximum so the handle index and value is
            //  correctly reversed in its meaning
            //  i.e. upper bound for range is determined by disatance of left handle ticks)
            //  This means we deal with the logical range boundaries (always in ascending order) in
            //  all other areas of the code and then for RTL do the swap and (max -value) transform
            //  to get the handle position.  This code is essentially an No-op in LTR languages.
            //  Also this transform is correct for both the set handles and get handles operations since 
            //  it is symmetrically reverisble and the Range[X,Y] Handles[M,N] values mirror each other.
            _correctHandlesDataForRTL: function(handleValuesArray)
            {
                var returnValue = [0, this._maximum];
                if(!Srch.U.n(handleValuesArray) && handleValuesArray.length == 2)
                {
                    // in RTL the underlying _handleData index 0 vs 1 is switched here so the 
                    //  rest of the slider logic treats the handles simply as logical range boundary value indexes.
                    //  The returned array [0] will always be logical lower bound and [1] will always be
                    //  logical upper bound, even though the opposite handles are used in RTL UI.
                    //  Also the handle values in RTL are calculated as a difference from the max.
                    //  For Exmaple:
                    // this._handleData[0].Value == 4 (i.e. 5th boundary) 
                    // this._handleData[1].Value == 5 (1.e. 6th boundary)
                    // this._maximum == 6 (7 boundary locations from 0-6)
                    //
                    // 0--1--2--3--LH=4--RH=5--6
                    //
                    // Normally in Left-to-Right this means:
                    //  Lower bound is 5th boundary (e.g. "Later than one week ago" for dates)
                    //  Upper bound is 6th boundary (e.g. "Earlier than Today" for dates)
                    //
                    // For RTL this UI state is interpreted in the reverse since the right handle is the lower bound:
                    //  Upper bound is (6-4) = 2 = 3rd boundary (e.g. "Earlier than six months ago" for dates)
                    //  Lower bound is (6-5) = 1 = 2nd boundary (e.g. "Later than one year ago" for dates)
                    //
                    // The UI will arrange the other  visual boundary related elements correctly in 
                    //  LTR or RTL order based on the document.documentElement.dir="ltr" or "rtl" which affects
                    //  the CSS class left/right logic (i.e. bar, touch target, etc already line through dir and CSS)
                    //  Some other conditions below are using Srch.U.isRTL to control other logic (label format ordering, etc)

                    // Swaps left/right handle index for RTL only
                    var lowerBoundHandleIndex = Srch.U.isRTL() ? 1 : 0;
                    returnValue[0] = handleValuesArray[lowerBoundHandleIndex];

                    var upperBoundHandleIndex = Srch.U.isRTL() ? 0 : 1;
                    returnValue[1] = handleValuesArray[upperBoundHandleIndex];

                    if(Srch.U.isRTL())
                    {
                        // Adjusts the logical range postion value min/max sense for RTL handles
                        returnValue[0] = this._maximum - returnValue[0];
                        returnValue[1] = this._maximum - returnValue[1];
                    }
                    
                }
                return returnValue;
                
            },

            _setHandlesAndValuesToRange: function(rangeLowerValue, rangeUpperValue, fireEvent, cacheSliderPositions) {

                // Invert the handle data for RTL languages before setting it to the UI (note this is the same
                //  mirrored tranform used to get the logical range values from a given handle position)
                var handleValuesCorrected = this._correctHandlesDataForRTL([rangeLowerValue, rangeUpperValue])
                var leftHandlePosition = handleValuesCorrected[0];
                var rightHandlePosition = handleValuesCorrected[1];

                if (this._handles === 2) {
                    this.beginUpdate();

                    if (!Srch.U.n(leftHandlePosition) && leftHandlePosition !== "") {
                        leftHandlePosition = Math.max(Math.min(leftHandlePosition, this._maximum), this._minimum);
                        this._manuallySetHandleAndValue(this._multiHandleSliderTargets[0].ControlID, leftHandlePosition, false);
                    }

                    if (!Srch.U.n(rightHandlePosition) && rightHandlePosition !== "") {
                        rightHandlePosition = Math.max(Math.min(rightHandlePosition, this._maximum), leftHandlePosition);
                        this._manuallySetHandleAndValue(this._multiHandleSliderTargets[1].ControlID, rightHandlePosition, false);
                    }

                    // Try moving the lower handle again (in case it was limited by the upper value's old position last time).
                    if (!Srch.U.n(leftHandlePosition) && leftHandlePosition !== "") {
                        leftHandlePosition = Math.max(Math.min(leftHandlePosition, this._maximum), this._minimum);
                        this._manuallySetHandleAndValue(this._multiHandleSliderTargets[0].ControlID, leftHandlePosition, fireEvent);
                    }
                    this._initializeInnerRail();

                    this.endUpdate();
                }
            },

            _manuallySetHandleAndValue: function(ControlID, newValue, fireEvent) {

                var handleTarget = $get(ControlID);
                if (handleTarget &&
                    handleTarget.Handle) {

                    handleTarget.value = newValue;
                    handleTarget.Handle.Value = newValue;
                    this._setHandlePosition(handleTarget.Handle, true);

                    if (fireEvent) {
                        $common.tryFireEvent(handleTarget, "change");
                    }
                }

            },

            _getHandlePostionsAsLogicalRangeArray: function() {

                var resultValuesArray = new Array();

                if (!Srch.U.n(this._handleData) &&
                    this._handleData.length >= 2) {

                    var handleUIValues = [this._handleData[0].Value, this._handleData[1].Value];
                    resultValuesArray = this._correctHandlesDataForRTL(handleUIValues)
                    var logicalLowerBound = resultValuesArray[0];
                    var logicalUpperBound = resultValuesArray[1];
                }

                return resultValuesArray;
            }
        }

        AjaxControlToolkit.MultiHandleSliderBehavior.DropPending = null;
        AjaxControlToolkit.MultiHandleSliderBehavior.registerClass('AjaxControlToolkit.MultiHandleSliderBehavior', Sys.UI.Behavior);

        AjaxControlToolkit.SliderRefinementControl = function(multiHandleSliderComponent,
        refinementPropertyName,
        controlBaseId) {

            this._multiHandleSliderComponent = multiHandleSliderComponent;
            this._refinementPropertyName = refinementPropertyName;
            this._controlBaseId = controlBaseId;

            this._tickDefinitions = {
                "dateRangeExponential": [
            { "Label": "Earlier than One Year Ago", "FilterDaysOffset": "" },
            { "Label": "One Year Ago", "FilterDaysOffset": -365 },
            { "Label": "Six Months Ago", "FilterDaysOffset": -180 },
            { "Label": "One Month Ago", "FilterDaysOffset": -30 },
            { "Label": "One Week Ago", "FilterDaysOffset": -7 },
            { "Label": "Today", "FilterDaysOffset": 0 },
            { "Label": "Later than Today", "FilterDaysOffset": "" }
        ]
            };

            this._dateFilterDefinitionsInitialized = false;
            this._maxResultCount = 0;



        }

        AjaxControlToolkit.SliderRefinementControl.OnPostRenderInitSliderForElement = function (ctx) {

            var rc = ctx.RefinementControl;
            var minValue = rc.MinValue;
            var maxValue = rc.MaxValue;
            var sliderOptions = null;
            if (!$isNull(rc.SliderOptions) &&
                !$isNull(rc.SliderOptions.Component) &&
                !$isNull(rc.SliderOptions.Component.minimum) &&
                !$isNull(rc.SliderOptions.Component.maximum)) {

                sliderOptions = rc.SliderOptions;
                minValue = rc.SliderOptions.Component.minimum;
                maxValue = rc.SliderOptions.Component.maximum;
            }
            var refinementPropertyName = rc.propertyName;
            var typedControlBaseID = rc.containerId;

            var newSliderControl = AjaxControlToolkit.SliderRefinementControl.CreateSliderWithBaseId(typedControlBaseID, minValue, maxValue, refinementPropertyName, sliderOptions);

            if ($isNull(newSliderControl) || $isNull(newSliderControl._sliderRefinementControl))
            {
                // IF there is a duplicate slider created (already initialized) then we stop here.  This
                //  can happen especially for the second slider on the page when the ajaxtoolkit.js has
                //  already loaded and the EnsureScriptFunc SOD call happen during the CSR render 
                //  as well as in the instead on in an OnPostRender
                return;
            }
            newSliderControl._sliderRefinementControl.RefinementControlConfig = rc;
            newSliderControl._sliderRefinementControl.rangleLabelElem = $get(rc.containerId + "RangeLabel");
            newSliderControl._sliderRefinementControl.labelSection = $get(rc.containerId + "LabelSection");

            rc.alternateRenderer = newSliderControl._sliderRefinementControl.PopulateHistogramFromCurrentData;
            // Initialize the labels and histogram on first render
            newSliderControl._sliderRefinementControl.PopulateHistogramFromCurrentData($get(ctx.RefinementControl.containerId), ctx);

        }

        AjaxControlToolkit.SliderRefinementControl.CreateSliderWithBaseId = function (controlBaseId, minValue, maxValue, refinementPropertyName, sliderOptions) {

            var componentId = controlBaseId + "SliderBehaviour";
            var oldComponent = Sys.Application._components[componentId];
            var oldValuesArray;
            var oldTickDefinitions;

            if (oldComponent)
            {
                Srch.U.trace(null, 'CreateSliderWithBaseId', "A Slider Component already exists with the given ID so skipping create: " + componentId);
                // return null to avoid any further reinitialization of a duplicate slider
                return null;
            }

            var testMultiHandleSliderControl = $get(controlBaseId + "Data");
            if (!testMultiHandleSliderControl) return;

            var testSliderHandlecollection = [{
                "ControlID": controlBaseId + "LeftHandleData",
                "HandleCssClass": "handle_horizontal_left handle_noforcepressed",
                "SupressCssClassEventHandlers": true,
                "Decimals": 0,
                "Offset": 0
            },
        {
            "ControlID": controlBaseId + "RightHandleData",
            "HandleCssClass": "handle_horizontal_right handle_noforcepressed",
            "SupressCssClassEventHandlers": true,
            "Decimals": 0,
            "Offset": 0
        }
    ];

        // Enforce snapping to step values
        var steps = maxValue - minValue + 1;
        var multiHandleSliderComponent = $create(
            AjaxControlToolkit.MultiHandleSliderBehavior, {
                "enableKeyboard": true,
                "enableMouseWheel": false,
                "id": componentId,
                "length": 160,
                "maximum": maxValue,
                "minimum": minValue,
                "steps": steps,
                "showHandleDragStyle": true,
                "showHandleHoverStyle": true,
                "showInnerRail": true,
                "multiHandleSliderTargets": testSliderHandlecollection
            },
            null,
            null,
            $get(controlBaseId + "Data"));

            var newSliderRefinerControl = new AjaxControlToolkit.SliderRefinementControl(
        multiHandleSliderComponent,
        refinementPropertyName,
        controlBaseId);

            multiHandleSliderComponent._sliderRefinementControl = newSliderRefinerControl;

            //newSliderRefinerControl.EnsureDateFilterDefintions(controlBaseId);

            AjaxControlToolkit.addHandlerWorkaround(testMultiHandleSliderControl, 'change', newSliderRefinerControl.OnSliderChange);

            multiHandleSliderComponent.add_drag(AjaxControlToolkit.SliderRefinementControl.handleDragEvent);

            return multiHandleSliderComponent;
        }


        AjaxControlToolkit.addHandlerWorkaround = function (element, eventName, handler) {
            // Office15:2376371 Workaround for MicrosoftAjax $addHandler bug in IE9 where addEventListener does not work: http://forums.asp.net/t/1366951.aspx/1
            if (element.attachEvent) {
                browserHandler = function() {
                    var e = {};
                    try {e = Sys.UI.DomElement._getWindow(element).event} catch(ex) {}
                    return handler.call(element, new Sys.UI.DomEvent(e));
                }
                element.attachEvent('on' + eventName, browserHandler);
            }
            else
            {
                $addHandler(element, eventName, handler);
            }
        }


        AjaxControlToolkit.SliderRefinementControl.adjustRangeValueArray = function (sendingSliderComponent, sliderRangeValues) {
            if (!Srch.U.n(sendingSliderComponent) &&
                !Srch.U.n(sliderRangeValues) &&
                sliderRangeValues.length >= 2 &&
                !Srch.U.n(sendingSliderComponent._sliderRefinementControl)) {

                var lastRangeValues = sendingSliderComponent._sliderRefinementControl.LastRangeValues;
                if(sliderRangeValues[0] == sliderRangeValues[1])
                {
                    // Handles have been merged at the same point so snap back to valid values
                    if(!Srch.U.n(lastRangeValues) && lastRangeValues[0] != lastRangeValues[1])
                    {
                        // use the last position we cached to keep the handles where they were before
                        sliderRangeValues[0] = lastRangeValues[0];
                        sliderRangeValues[1] = lastRangeValues[1];
                    }
                    else if(sendingSliderComponent.get_maximum() > sliderRangeValues[1])
                    {
                        // shift the upper handle to avoid merging
                        sliderRangeValues[0] = sliderRangeValues[0];
                        sliderRangeValues[1] = sliderRangeValues[1] + 1;
                    }
                    else if(sendingSliderComponent.get_minimum() < sliderRangeValues[0])
                    {
                        // shift the lower handle to avoid merging
                        sliderRangeValues[0] = sliderRangeValues[0] - 1;
                        sliderRangeValues[1] = sliderRangeValues[1];
                    }
                    else
                    {
                        // reset to min and max
                        sliderRangeValues[0] = sendingSliderComponent.get_minimum();
                        sliderRangeValues[1] = sendingSliderComponent.get_maximum();
                    }
                    // updated range values array to prevent merging at one point
                    return true;
                }
            }
            // did not updated range values array
            return false;
        }


        AjaxControlToolkit.SliderRefinementControl.sliderPositionChangeHandler = function (sendingSliderComponent) {
            if (!Srch.U.n(sendingSliderComponent) &&
                !Srch.U.n(sendingSliderComponent._handleData) &&
                sendingSliderComponent._handleData.length >= 2 &&
                !Srch.U.n(sendingSliderComponent._sliderRefinementControl)) {

                var oldLastRangeValues = sendingSliderComponent._sliderRefinementControl.LastRangeValues;

                var sliderRangeValues = sendingSliderComponent._getHandlePostionsAsLogicalRangeArray();

                // Prevent handles from merging by adjusting the sliderRangeValues array
                var mergedRangeValuesWereAdjusted = AjaxControlToolkit.SliderRefinementControl.adjustRangeValueArray(sendingSliderComponent, sliderRangeValues);

                // Store these valid range positions
                sendingSliderComponent._sliderRefinementControl.LastRangeValues = sliderRangeValues;
                
                if(mergedRangeValuesWereAdjusted) {

                    Srch.U.trace(null, "sliderPositionChangeHandler",
                        String.format("Prevent HandleMerge: Set values to [{0}-{1}]",
                            sliderRangeValues[0],
                            sliderRangeValues[1]));

                    sendingSliderComponent._setHandlesAndValuesToRange(sliderRangeValues[0], sliderRangeValues[1], false, true);
                }

                // Return true to hint for UI update if the handles are not in the same position as oldLastRangeValues
                var shouldUpateUIForRange = (Srch.U.n(oldLastRangeValues) ||
                    oldLastRangeValues[0] != sliderRangeValues[0] ||
                    oldLastRangeValues[1] != sliderRangeValues[1]);

                return shouldUpateUIForRange;
            }
        }

        AjaxControlToolkit.SliderRefinementControl.touchTargetPressEvent = function (eventArgs) {
            if(Srch.U.n(eventArgs) || Srch.U.n(eventArgs.target)) return;

            window._event = eventArgs;
            var touchTargetElem = eventArgs.target;
            var controlBaseId = touchTargetElem.getAttribute("controlBaseId");
            var touchTargetIndex = touchTargetElem.getAttribute("boundaryIndex");

            var controlTarget = null;
            if(!Srch.U.w(controlBaseId)) controlTarget = $get(controlBaseId + "Data");

            if(!Srch.U.n(touchTargetIndex) &&
                !Srch.U.n(controlTarget) &&
                !Srch.U.n(controlTarget.MultiHandleSliderBehavior) &&
                !Srch.U.n(controlTarget.MultiHandleSliderBehavior._handleData) &&
                controlTarget.MultiHandleSliderBehavior._handleData.length >= 2)
            {
                var updatedHandlePostition = false
                var indexToFindClosestHandle = touchTargetIndex;
                var currentSliderValuesRange = controlTarget.MultiHandleSliderBehavior._getHandlePostionsAsLogicalRangeArray();
                var handleMatchingTouchTarget = null;

                // Default to left handle
                var selectedHandleId = 0;
                var leftHandleIndex = currentSliderValuesRange[0];
                var leftHandleDelta = indexToFindClosestHandle - leftHandleIndex;
                
                var rightHandleIndex = currentSliderValuesRange[1];
                var rightHandleDelta =  rightHandleIndex - indexToFindClosestHandle;

                if(touchTargetIndex == leftHandleIndex)
                {
                    // The left handle is already there so just start drag without changing handle position
                    selectedHandleId = 0;
                }
                else if(touchTargetIndex == rightHandleIndex)
                {
                    // The right handle is already there so just start drag without changing handle position
                    selectedHandleId = 1;
                }
                else if(rightHandleIndex < indexToFindClosestHandle ||
                     rightHandleDelta < leftHandleDelta)
                {
                    // The right handle is either to the left of the index we want or closer than the 
                    //  left handle so move the right handle and start drag on it
                    selectedHandleId = 1;
                    updatedHandlePostition = true;
                }
                else
                {
                    // Defaults to moving the left handle and starting drag on it
                    selectedHandleId = 0;
                    updatedHandlePostition = true;
                }

                handleMatchingTouchTarget = controlTarget.MultiHandleSliderBehavior._handleData[selectedHandleId];
                if(Srch.U.isRTL())
                {
                    // start drap on the opposite handle in RTL mode
                    var rtlSelectedHandleId = (selectedHandleId - 1) * -1;  // Swaps 0 for 1 and 1 for 0
                    handleMatchingTouchTarget = controlTarget.MultiHandleSliderBehavior._handleData[rtlSelectedHandleId];
                }

                if(updatedHandlePostition)
                {
                    Srch.U.trace(null, "pressTargetEvent", String.format("Move Handle[{0}] from {1}->{2} then start drag handling.",
                        selectedHandleId,
                        currentSliderValuesRange[selectedHandleId],
                        indexToFindClosestHandle));

                    // Reset the postion of the closest handle the the target index
                    currentSliderValuesRange[selectedHandleId] = indexToFindClosestHandle;

                    // Update slider handle position but do not fire an update event
                    AjaxControlToolkit.SliderRefinementControl.SnapSliderHandlesAndValuesToRange(
                        controlTarget.MultiHandleSliderBehavior.get_element(),
                        controlBaseId,
                        currentSliderValuesRange[0],
                        currentSliderValuesRange[1],
                        false,
                        true);
                }

                
                if(!AjaxControlToolkit.MultiHandleSliderBehavior.DropPending &&
                   !Srch.U.n(handleMatchingTouchTarget) &&
                   !Srch.U.n(eventArgs) &&
                   !Srch.U.n(eventArgs.preventDefault))
                {
                    Srch.U.trace(null, "pressTargetEvent", String.format("Start drag on Handle[{0}] at {1}",
                        selectedHandleId,
                        indexToFindClosestHandle));

                    // the touch target matched one of the handles so prevent the default event behavior
                    eventArgs.preventDefault();
                    eventArgs.target = handleMatchingTouchTarget;
                    // Set the handle style to use handle_forcepressed
                    Sys.UI.DomElement.removeCssClass(handleMatchingTouchTarget, "handle_noforcepressed");
                    Sys.UI.DomElement.addCssClass(handleMatchingTouchTarget, "handle_forcepressed");

                    // start handle drag
                    controlTarget.MultiHandleSliderBehavior._onMouseDown(eventArgs);
                }
            }
        }

        AjaxControlToolkit.SliderRefinementControl.handleDragEvent = function (sendingSliderComponent, eventArgs) {
            if (!Srch.U.n(sendingSliderComponent) &&
                !Srch.U.n(sendingSliderComponent._handleData) &&
                sendingSliderComponent._handleData.length >= 2 &&
                !Srch.U.n(sendingSliderComponent._sliderRefinementControl)) {

                var sliderRangeValues = sendingSliderComponent._getHandlePostionsAsLogicalRangeArray();

                var requiresUIUpdate = AjaxControlToolkit.SliderRefinementControl.sliderPositionChangeHandler(sendingSliderComponent);

                if(requiresUIUpdate)
                {
                    Srch.U.trace(null, "handleDragEvent",
                        String.format("Slider[{0}] handle drag postion change to: [{1} - {2}]",
                            sendingSliderComponent._sliderRefinementControl._controlBaseId,
                            sliderRangeValues[0],
                            sliderRangeValues[1]));

                    sendingSliderComponent._sliderRefinementControl.SetFilterLabelsForPosition(
                        sliderRangeValues[0],
                        sliderRangeValues[1]);

                    // Update the active state for ticks and histogram bars based on the new handle position
                    // Note: null args for element and data will not adjust visibility or bar heights but
                    //  will still adjust the histogram bar and slider tick styles for active/inactive states
                    sendingSliderComponent._sliderRefinementControl.UpdateSliderAndHistogramElementsForData(null, sendingSliderComponent, null);
                }
            }
        }

        AjaxControlToolkit.SliderRefinementControl.getDateFilterValue = function(offsetDays, correctionForToday) {
            if ("" == String(offsetDays)) return "";

            var dateNow = new Date();
            var dateFilterValue = new Date(
        dateNow.getFullYear(),
        dateNow.getMonth(),
        dateNow.getDate());

            dateFilterValue.setDate(dateNow.getDate() + offsetDays + correctionForToday);

            return dateFilterValue;
        }

        AjaxControlToolkit.SliderRefinementControl.FindAndSetSliderHandlesAndValuesToRange = function (controlBaseId, rangeLowerIndex, rangeUpperIndex)
        {
            Srch.U.trace(null, "FindAndSetSliderHandlesAndValuesToRange", 
                String.format("Manually set range to [{0}-{1}] Slider[{2}]",
                    rangeLowerIndex,
                    rangeUpperIndex,
                    controlBaseId));

            var controlTarget = $get(controlBaseId + "Data");
            var sliderComponent = AjaxControlToolkit.SliderRefinementControl.SnapSliderHandlesAndValuesToRange(
                controlTarget,
                controlBaseId,
                rangeLowerIndex,
                rangeUpperIndex,
                true,
                true);
            if (sliderComponent &&
                sliderComponent._sliderRefinementControl) 
            {
                sliderComponent._sliderRefinementControl.UpdateEachSliderOnChange(null, sliderComponent._sliderRefinementControl._controlBaseId);
            }

            return false;
        }

        AjaxControlToolkit.SliderRefinementControl.SnapSliderHandlesAndValuesToRange = function(controlTarget, controlBaseId, rangeLowerIndex, rangeUpperIndex, fireEvent, cacheSliderPositions) {
            if (controlTarget &&
        controlTarget.MultiHandleSliderBehavior) {

                var sliderRangeValues = [ rangeLowerIndex, rangeUpperIndex ];
                AjaxControlToolkit.SliderRefinementControl.adjustRangeValueArray(controlTarget.MultiHandleSliderBehavior, sliderRangeValues);

                // sliderRangeValues may have been changed to prevent handle merging
                controlTarget.MultiHandleSliderBehavior._setHandlesAndValuesToRange(sliderRangeValues[0], sliderRangeValues[1], fireEvent, cacheSliderPositions);

                if(!Srch.U.n(controlTarget.MultiHandleSliderBehavior._sliderRefinementControl))
                {
                    // Immediately update the active state for ticks and histogram bars based on the new handle position
                    // Note: null args for element and data will not adjust visibility or bar heights but
                    //  will still adjust the histogram bar and slider tick styles for active/inactive states
                    controlTarget.MultiHandleSliderBehavior._sliderRefinementControl.UpdateSliderAndHistogramElementsForData(null, controlTarget.MultiHandleSliderBehavior, null);
                }

                return controlTarget.MultiHandleSliderBehavior;
            }
            return null;
        }


        AjaxControlToolkit.SliderRefinementControl.prototype = {


            GetCurrentFilterLogicalRange: function () {

                var sliderComponent = this._multiHandleSliderComponent;
                var rc = this.RefinementControlConfig;
                var cc = this._refinementClientcontrol;
                var logicalFilterRange = [sliderComponent.get_minimum(), sliderComponent.get_maximum()];

                // Office15:80660 Update slider to reflect current filter conditions
                if(!Srch.U.n(rc) &&
                    !Srch.U.n(cc))
                {
                    // Default to max and min (no filtering) if there is no current active filter

                    var currentRefinementCategory = cc.getCurrentRefinementCategory(rc.propertyName);
                    if(!Srch.U.n(currentRefinementCategory) &&
                        currentRefinementCategory.get_tokenCount() == 1)
                    {
                        // Parse the current filter token to find the current range condition
                        var matchResults = Srch.U.parseTypedRangeToken(currentRefinementCategory.t[0], null);

                        // check for a range token match with corresponding min and max
                        if (matchResults != null &&
                            matchResults.length > 2)
                        {
                            var indexMin = this.GetFilterIndexForValue(rc,matchResults[1]);
                            if(indexMin >= 0)
                            {
                                logicalFilterRange[0] = indexMin;
                            }

                            var indexMax = this.GetFilterIndexForValue(rc,matchResults[2]);
                            if(indexMax >= 0)
                            {
                                logicalFilterRange[1] = indexMax;
                            }

                            var sliderHandlesFromFilter = String.format("Current slider filter range: [{0} - {1}] found from current filter token: {2}",
                                    logicalFilterRange[0],
                                    logicalFilterRange[1],
                                    currentRefinementCategory)
                            Srch.U.trace(cc, 'Slider GetCurrentFilterLogicalRange', sliderHandlesFromFilter);
                        }
                    }
                }

                return logicalFilterRange;
            },

            PopulateHistogramFromCurrentData: function (container, renderCtx) {
                var message = "Slider updating UI from returned search data (using AlternateRenderer).";

                var cc = renderCtx['ClientControl'];
                if (!Srch.U.n(cc)) {
                    message += ' controld id: ' + cc.get_id();
                }
                var rc = renderCtx['RefinementControl'];
                if (!Srch.U.n(rc) && !Srch.U.n(container)) {
                    message += ' refiner name:' + rc.propertyName + ' container:' + container.tagName + ':' + container.id;

                    Srch.U.trace(cc, 'PopulateHistogramFromCurrentData', message);

                    var componentId = container.id + "SliderBehaviour";
                    var sliderComponent = Sys.Application._components[componentId];
                    var sliderRefinementControl = sliderComponent._sliderRefinementControl;
                    // Store the refinement clinet control
                    sliderRefinementControl._refinementClientcontrol = cc;
                    if (!Srch.U.n(sliderComponent) && !Srch.U.n(sliderComponent._sliderRefinementControl)) {

                        var logicalFilterRange = sliderRefinementControl.GetCurrentFilterLogicalRange();

                        // Update slider handle position but do not fire an update event
                        AjaxControlToolkit.SliderRefinementControl.SnapSliderHandlesAndValuesToRange(
                            sliderComponent.get_element(),
                            container.id,
                            logicalFilterRange[0],
                            logicalFilterRange[1],
                            false,
                            true);
                        sliderRefinementControl.SetFilterLabelsForPosition(logicalFilterRange[0], logicalFilterRange[1]);

                        sliderRefinementControl.UpdateSliderAndHistogramElementsForData(container, sliderComponent, renderCtx['ListData']);
                    }
                }

            },

            UpdateSliderAndHistogramElementsForData: function (element, multiHandleSliderComponent, resultData) {
                // check for null "dateRangeExponential"
                var controlBaseId = "";
                var minSelectedIndex = -1;
                var maxSelectedIndex = -1;
                var currentMaximumNumberValue = -1;
                this._maxResultCount = 0;
                if (multiHandleSliderComponent &&
            multiHandleSliderComponent._sliderRefinementControl &&
            multiHandleSliderComponent._sliderRefinementControl._controlBaseId) {

                    controlBaseId = multiHandleSliderComponent._sliderRefinementControl._controlBaseId;
                    currentMaximumNumberValue = multiHandleSliderComponent.get_maximum();
                    var currentSliderValuesRange = multiHandleSliderComponent._getHandlePostionsAsLogicalRangeArray();
                    if (currentSliderValuesRange && currentSliderValuesRange.length >= 2) {
                        if (!$isNull(currentSliderValuesRange[0])) minSelectedIndex = currentSliderValuesRange[0];
                        if (!$isNull(currentSliderValuesRange[1])) maxSelectedIndex = currentSliderValuesRange[1];
                    }
                }

                if ("" == controlBaseId) return; // No component or controlBaseId so nothing to do for slider/histogram updates

                //var tickDefinitionCollection = multiHandleSliderComponent._sliderRefinementControl.RefinementControlConfig.BucketConfig.BoundaryValues;  //
                var tickDefinitionCollection = this._tickDefinitions["dateRangeExponential"];  // Replace this with bucket defs from options
                var histogramOptions = null;
                if (!$isNull(multiHandleSliderComponent._sliderRefinementControl.RefinementControlConfig) &&
                    !$isNull(multiHandleSliderComponent._sliderRefinementControl.RefinementControlConfig.BucketConfig)) {

                    tickDefinitionCollection = multiHandleSliderComponent._sliderRefinementControl.RefinementControlConfig.BucketConfig.BoundaryValues;
                    this._tickDefinitions["dateRangeExponential"] = tickDefinitionCollection;
                    histogramOptions = multiHandleSliderComponent._sliderRefinementControl.RefinementControlConfig.HistogramOptions;
                }

                // Sets active states and initializes any empty result counts (does not reset them) for each histogram bar
                this.initializeCountsForHistogram(tickDefinitionCollection, this._refinementPropertyName, minSelectedIndex, maxSelectedIndex);

                var sourceArray = new Array();
                var hasRefinementData  = (!Srch.U.n(resultData) && resultData.length > 0);
                if (hasRefinementData) {

                    sourceArray = resultData;
                    // Loops over the configured buckets and adds the counts from the result data into the buckets
                    for (var i = 0; i < sourceArray.length && i < tickDefinitionCollection.length - 1; i++) {
                        var refinementRow = sourceArray[i];
                        if (typeof (refinementRow) == "object" &&
                            refinementRow["RefinerName"] == this._refinementPropertyName) {

                            var countForValue = refinementRow["RefinementCount"];
                            var eachTickObj = tickDefinitionCollection[i]
                            eachTickObj.BucketRawData = refinementRow;
                            eachTickObj.FilterToken = refinementRow["RefinementToken"];
                            eachTickObj.TokenCondition = refinementRow["RefinerName"] + ":" + refinementRow["RefinementToken"];
                            this.addToCountForHistogram(tickDefinitionCollection[i], this._refinementPropertyName, countForValue);
                        }
                    }
                }

                var hasFilterCondition = (multiHandleSliderComponent.get_maximum() != maxSelectedIndex ||
                    multiHandleSliderComponent.get_minimum() != minSelectedIndex);
                var hasBucketWithResultCount = (this._maxResultCount > 0);

                if(!Srch.U.n(element))
                {
                    // I we have any bucket with results count > 0 or any active filter condtion then show the container element, otherwise hide it.
                    element.style["display"] = (hasBucketWithResultCount || hasFilterCondition) ? "" : "none";
                }

                var histogramElem = $get(controlBaseId + "HistogramContainer");

                var histogramLinksCol = new Array();
                if(!Srch.U.n(histogramElem))
                {
                    if (!Srch.U.n(histogramElem.querySelectorAll)) {
                        histogramLinksCol = histogramElem.querySelectorAll(".histogram_bar_link");
                    }
                    // bug 2476332: querySelectorAll is not supported in IE8 for query builder dialog
                    else {
                        histogramLinksCol = histogramElem.childNodes;
                    }
                }

                var previousTickObj = null;

                for (var j = 0; j < tickDefinitionCollection.length; j++) {
                    var eachAnchorElem = null;
                    var activeHistogramBarId = null;
                    if(j < histogramLinksCol.length)
                    {
                        eachAnchorElem = histogramLinksCol[j];
                        activeHistogramBarId = eachAnchorElem.getAttribute('activeBarId')
                    }

                    var hasHistogramAnchor = true;
                    if (Srch.U.n(eachAnchorElem) || eachAnchorElem.tagName != "A")
                    {
                        hasHistogramAnchor = false; // no histogram anchor found
                    }

                    var eachTickObj = tickDefinitionCollection[j];
                    if ("undefined" == typeof (eachTickObj.ResultCounts)) eachTickObj.ResultCounts = new Object();
                    if ("undefined" == typeof (eachTickObj.ResultCounts[this._refinementPropertyName])) eachTickObj.ResultCounts[this._refinementPropertyName] = 0;
                    if ("undefined" == typeof (eachTickObj.ActiveStates)) eachTickObj.ActiveStates = new Object();
                    if ("undefined" == typeof (eachTickObj.ActiveStates[this._refinementPropertyName])) eachTickObj.ActiveStates[this._refinementPropertyName] = true;


                    var currentTickResultCount = eachTickObj.ResultCounts[this._refinementPropertyName];
                    var currentTickIsActive = eachTickObj.ActiveStates[this._refinementPropertyName];

                    var histogramBarClass = "histogram_bar_active";
                    var sliderTickClass = "slider_tick_active";
                    if (!currentTickIsActive)
                    {
                        histogramBarClass = "histogram_bar_inactive";
                        sliderTickClass = "slider_tick_inactive";
                    }

                    var eachSliderTickElemId = AjaxControlToolkit.SliderRefinementControl.GetTickOrTouchTargetElementId(
                        controlBaseId,
                        j,
                        /* forTickTouchTarget */ false);
                    var eachSliderTickElem = $get(eachSliderTickElemId);
                    if(!Srch.U.n(eachSliderTickElem))
                    {
                        eachSliderTickElem.className = sliderTickClass;
                    }

                    if (Srch.U.n(eachTickObj.TickTargets)) eachTickObj.TickTargets = new Object();

                    var eachSliderTickTargetId = AjaxControlToolkit.SliderRefinementControl.GetTickOrTouchTargetElementId(
                        controlBaseId,
                        j,
                        /* forTickTouchTarget */ true);

                    // Check to see if we've added mousedown handlers before.  Only add them once
                    if(Srch.U.n(eachTickObj.TickTargets[eachSliderTickTargetId]))
                    {
                        var eachSliderTickTargetElem = $get(eachSliderTickTargetId);
                        if(!Srch.U.n(eachSliderTickTargetElem))
                        {
                            $addHandler(eachSliderTickTargetElem, "mousedown", AjaxControlToolkit.SliderRefinementControl.touchTargetPressEvent);
                        }
                    }

                    if(hasHistogramAnchor && hasRefinementData)
                    {
                        // Use the constructed data above to make the historgram div and link and title tooltip
                        var columnTitle = String.format(
                                "{0} ({1})",
                                eachTickObj.NextIntervalLabel,
                                Srch.U.toFormattedNumber(currentTickResultCount, 0));

                        var maxIntervalIndex = tickDefinitionCollection.length - 2;
                        // Using the slider handle position setting code
                        var rangeLowerIndex = Math.max(j, 0);
                        var rangeUpperIndex = Math.min(j + 1, maxIntervalIndex);

                        var maxHistogramPixelHeight = 50;

                        // Determine how many pixels are needed to render the 
                        //  proportional resultcount column
                        var itemCountPerPixelRatio = (maxHistogramPixelHeight / this._maxResultCount);
                        var nonIntegerExactPixelCount = (itemCountPerPixelRatio * currentTickResultCount);

                        // Upper margin and lower activ height will add up to maxHistogramPixelHeight so
                        //    that things will stack up next to each other nicely.
                        //  Use the {max pixel height} minus some desired {fractional pixel count}",
                        //    possibly less than one entire pixel high.  We want to ensure at least one pixel when 
                        //    there is even 1 out of 1000.  This will be 50 only when the ResultCount is 0 and
                        //    otherwise the Math.floor will always make it at most 49.
                        var columnPixelUpperMargin = Math.floor(maxHistogramPixelHeight - nonIntegerExactPixelCount);
                        var columnPixelActiveHeight = maxHistogramPixelHeight - columnPixelUpperMargin;

                        var eachBgBarId = controlBaseId + "_HistogramBgBar" + j;
                        var eachActiveBarId = controlBaseId + "_HistogramActiveBar" + j;
                        if(!Srch.U.n(histogramOptions) &&
                           !Srch.U.n(histogramOptions.ElementIds) &&
                           !Srch.U.e(histogramOptions.ElementIds.HistogramActiveBarPrefix) &&
                           !Srch.U.e(histogramOptions.ElementIds.HistogramBgBarPrefix))
                        {
                            eachBgBarId = histogramOptions.ElementIds.HistogramBgBarPrefix + j;
                            eachActiveBarId = histogramOptions.ElementIds.HistogramActiveBarPrefix + j;
                        }

                        eachAnchorElem.innerHTML = String.format(
                                "<div id=\"{0}\" class=\"histogram_bar_background\">" +
                                "   <div id=\"{4}\" class=\"{3}\"" +
                                "     style=\"height: {1}px; margin-top: {2}px;\" ></div></div>",
                                eachBgBarId,
                                columnPixelActiveHeight,
                                columnPixelUpperMargin,
                                histogramBarClass,
                                eachActiveBarId);
                        eachAnchorElem.title = columnTitle;
                        eachAnchorElem.setAttribute('activeBarId', eachActiveBarId);
                        var bottomValue = (eachAnchorElem.clientHeight <= 70) ? 0 : 70 - eachAnchorElem.clientHeight - 1; // Temp crossbrowser styling workaround
                        eachAnchorElem.style["bottom"] = bottomValue + "px";

                        if(0 == currentTickResultCount) {
                            eachAnchorElem.setAttribute('disabled','disabled');
                            eachAnchorElem.style['cursor'] = 'default';
                        }
                        else
                        {
                            eachAnchorElem.removeAttribute('disabled');
                            eachAnchorElem.style['cursor'] = 'auto';
                        }
                    }
                    else if (hasHistogramAnchor &&
                        !Srch.U.e(activeHistogramBarId) &&
                        !Srch.U.n($get(activeHistogramBarId)))
                    {
                        // histogram element active bar with no new data so just adjust the style class, not the bar height
                        $get(activeHistogramBarId).className = histogramBarClass;
                    }


                    previousTickObj = eachTickObj;
                }
            },

            OnSliderChange: function (e) {
                if (e && e.target) {
                }
                else if (window.event && window.event.srcElement) {
                    e = new Object();
                    e.target = window.event.srcElement;
                }
                if ("function" == typeof (this.UpdateEachSliderOnChange)) {

                    this.UpdateEachSliderOnChange(e, this._controlBaseId);
                }
                else if (this.MultiHandleSliderBehavior &&
          this.MultiHandleSliderBehavior._sliderRefinementControl &&
          "function" == typeof (this.MultiHandleSliderBehavior._sliderRefinementControl.UpdateEachSliderOnChange)) {

                    this.MultiHandleSliderBehavior._sliderRefinementControl.UpdateEachSliderOnChange(e);
                }
            },


            GetFilterIndexForValue: function (refinementConfig, filterValue) {

                if (!$isNull(refinementConfig) &&
                    !$isNull(refinementConfig.BucketConfig) &&
                    !$isNull(refinementConfig.BucketConfig.BoundaryType) &&
                    !$isNull(refinementConfig.BucketConfig.BoundaryValues)) {

                    for(var i = 0; i < refinementConfig.BucketConfig.BoundaryValues.length; i++)
                    {
                        var eachBoundary = refinementConfig.BucketConfig.BoundaryValues[i];
                        if(filterValue == eachBoundary.Value)
                        {
                            return i;
                        }
                    }
                }

                // does not match any of the configured boundaries so return -1
                return -1;

            },

            GetFilterForIndex: function (refinementConfig, filterIndex) {

                var filterLookupType = "ExplicitIntervalBoundaries";
                if (!$isNull(refinementConfig) &&
                    !$isNull(refinementConfig.BucketConfig) &&
                    !$isNull(refinementConfig.BucketConfig.BoundaryType) &&
                    !$isNull(refinementConfig.BucketConfig.BoundaryValues)) {

                    filterLookupType = refinementConfig.BucketConfig.BoundaryType;
                    this._tickDefinitions["dateRangeExponential"] = refinementConfig.BucketConfig.BoundaryValues;
                }

                var tickDefinitionCollection = this._tickDefinitions["dateRangeExponential"];

                if (filterLookupType.startsWith("ExplicitIntervalBoundaries") &&
                typeof (tickDefinitionCollection) != "undefined" &&
                tickDefinitionCollection.length > filterIndex &&
                typeof (tickDefinitionCollection[filterIndex]) != "undefined") {

                    return tickDefinitionCollection[filterIndex];
                }
                else {
                    // Treat as a normal filter on a number
                    var filterDef = new Object();
                    //filterDef.Label = filterIndex.toString();
                    filterDef.Value = filterIndex;

                    return filterDef;
                }
            },

            SetFilterLabelsForPosition: function (leftValue, rightValue) {


                var rangleLabelElem = this.rangleLabelElem;
                var rightSliderLabel = this.rightSliderLabel;
                var sliderTypeString = "";
                var rc = this.RefinementControlConfig
                var activeLabels = null;
                if (!Srch.U.n(rc) && !Srch.U.n(rc.SliderType)) {
                    sliderTypeString = rc.SliderType;
                    if(!Srch.U.n(rc.BucketConfig)) activeLabels = rc.BucketConfig.Labels;
                }

                var leftIndex = Number(leftValue);
                var rightIndex = Number(rightValue);
                if ("" === leftValue) leftIndex = 0;
                if ("" === rightValue) rightIndex = (tickDefCol.length - 1);

                var leftTick = this.GetFilterForIndex(rc, leftIndex);
                var rightTick = this.GetFilterForIndex(rc, rightIndex);

                var sliderRangeLabelText = Srch.U.loadResource("rf_All");

                var tickDefCol = this._tickDefinitions["dateRangeExponential"];
                var filterTokensToApply = new Array();
                var isAtLeftExtent = (0 === leftIndex);
                var isAtRightExtent = (rightIndex >= (tickDefCol.length - 1));

                if(!$isNull(activeLabels))
                {
                    if(isAtLeftExtent)
                    {
                        sliderRangeLabelText = String.format(activeLabels.min, rightTick.Label);
                    }
                    else if(isAtRightExtent)
                    {
                        sliderRangeLabelText = String.format(activeLabels.max, leftTick.Label);
                    }
                    else
                    {
                        sliderRangeLabelText = String.format(
                            activeLabels.range,
                            Srch.U.isRTL() ? rightTick.Label : leftTick.Label,
                            Srch.U.isRTL() ? leftTick.Label : rightTick.Label);
                    }
                }

                var hasNoSelectedRange = (isAtLeftExtent && isAtRightExtent);
                if (hasNoSelectedRange) {
                    // filters are at each extent end so do not show any label
                    sliderRangeLabelText = Srch.U.loadResource("rf_All");
                }
                else if ((1 == (rightIndex - leftIndex)) &&
                   !$isNull(leftTick) &&
                   !$isNull(leftTick.NextIntervalLabel)) {

                    // Use the interval label since we are surrounding one interval
                    sliderRangeLabelText = leftTick.NextIntervalLabel;
                }

                // if handle indexes are the same leave the label as it was since the handles are prevented from merging
                if (!Srch.U.n(this.rangleLabelElem) &&
                   !(leftIndex === rightIndex))
                {
                    if (!Srch.U.n(rangleLabelElem.textContent)) {
                        this.rangleLabelElem.textContent = sliderRangeLabelText;
                    }
                    else {
                        this.rangleLabelElem.innerText = sliderRangeLabelText;
                    }

                    // Only show the label section as selected if there is an active filter range and this handle setting matches it
                    // The effect of this logic is that the "ms-ref-filterSel" selected styling will be active and show a
                    //  blue highlighted label during drag operations when the handles are in the positions for matching the current
                    //  active filtering but unselected (i.e. grey) when they move to a new position that does not yet match the ctive filters.
                    //  After adding the filters and requesting new results this code will be called again when the results come 
                    //  back and the label will become selected at that point since the handle positions will then match the
                    //  active filter that was just applied.
                    var logicalFilterRange = this.GetCurrentFilterLogicalRange();
                    var showLabelSectionSelected = (!hasNoSelectedRange &&
                        leftIndex == logicalFilterRange[0] && 
                        rightIndex == logicalFilterRange[1]);

                    Sys.UI.DomElement.removeCssClass(this.rangleLabelElem, "ms-ref-filterSel");
                    if(showLabelSectionSelected)
                    {
                        Sys.UI.DomElement.addCssClass(this.rangleLabelElem, "ms-ref-filterSel");

                        // Show the active filter label in case the section started collapsed and hidden
                        this.rangleLabelElem.style["display"] = "";
                    }
                }

                // Remove all selection styles
                Sys.UI.DomElement.removeCssClass(this.labelSection,"ms-ref-allSec");
                Sys.UI.DomElement.removeCssClass(this.labelSection,"ms-ref-selSec");
                Sys.UI.DomElement.removeCssClass(this.labelSection,"ms-ref-unselSec");

                if (!showLabelSectionSelected &&
                   !$isNull(this.labelSection)) {
                    // No active conditions so mark ms-ref-allSec on the label section so it hides when collapsed
                    Sys.UI.DomElement.addCssClass(this.labelSection, "ms-ref-allSec");
                }
                else if (!$isNull(this.labelSection)) {
                    // No active conditions so remove ms-ref-unselSec on the label seciton so it shows when collapsed
                    // At least one active condition so show the label section
                    Sys.UI.DomElement.addCssClass(this.labelSection, "ms-ref-selSec");

                    // Show the active filter label in case the section started collapsed and hidden
                    this.labelSection.style["display"] = "";
                }

            },

            UpdateEachSliderOnChange: function (e, controlBaseId) {
                var mainSlider = $get(this._controlBaseId + "Data");
                var leftSlider = $get(this._controlBaseId + "LeftHandleData");
                var rightSlider = $get(this._controlBaseId + "RightHandleData");
                var componentId = this._controlBaseId + "SliderBehaviour";
                var sliderComponent = Sys.Application._components[componentId];
                if (Srch.U.n(sliderComponent.CurrentFilterTokens)) sliderComponent.CurrentFilterTokens = [];

                var sliderValuesRange = sliderComponent._getHandlePostionsAsLogicalRangeArray();

                var leftValue = sliderValuesRange[0];
                var rightValue = sliderValuesRange[1];
                var leftIndex = Number(leftValue);
                var rightIndex = Number(rightValue);

                sliderComponent._sliderRefinementControl.SetFilterLabelsForPosition(leftIndex, rightIndex);

                var sliderTypeString = "";
                var rc = this.RefinementControlConfig
                if (!Srch.U.n(rc) && !Srch.U.n(rc.SliderType)) {
                    sliderTypeString = rc.SliderType;
                }

                var leftTick = this.GetFilterForIndex(rc, leftValue);
                var rightTick = this.GetFilterForIndex(rc, rightValue);
                var filterCondition = "";

                var tickDefCol = this._tickDefinitions["dateRangeExponential"];
                var filterTokensToApply = new Array();
                var isAtLeftExtent = (0 == leftIndex);
                var isAtRightExtent = (rightIndex >= (tickDefCol.length - 1));
                if (isAtLeftExtent && isAtRightExtent) {
                    // filters are at each extent end so do not add any filter tokens
                }
                else if ((1 == (rightIndex - leftIndex)) &&
                   !$isNull(leftTick) &&
                   !$isNull(leftTick.NextIntervalToken)) {
                    filterTokensToApply.push(leftTick.NextIntervalToken);
                }
                else {
                    leftValue = leftTick.Value;

                    // NOTE: the to="lt" is the default behaviour and not needed. Since it would
                    //  unnecessarily complicate the GetTypeReadyRangeToken call we no longer generate that
                    rightValue = rightTick.Value

                    // The below logic is now handled internally by GetTypeReadyRangeToken
                    //if (isAtRightExtent) rightValue = "max, to=\"le\"";

                    var rangeFilterToken = AjaxControlToolkit.SliderRefinementControl.GetTypeReadyRangeToken(
                        leftValue,
                        rightValue,
                        rc);

                    filterTokensToApply.push(rangeFilterToken);
                }

                var refinerComponent = Srch.U.getClientComponent(mainSlider);
                var oldFilterTokens = sliderComponent.CurrentFilterTokens;
                if(Srch.U.n(oldFilterTokens)) oldFilterTokens = [];

                sliderComponent.CurrentFilterTokens = filterTokensToApply;

                var hasChangedCondition = (oldFilterTokens.join("") != filterTokensToApply.join(""));

                Srch.U.trace(null, "UpdateEachSliderOnChange", 
                    String.format("FilterChanged?[{0}] FilterToken[{1}] Slider[{0}]",
                        hasChangedCondition,
                        filterTokensToApply.join(""),
                        this._controlBaseId));

                if(!Srch.U.n(sliderComponent._handleData) &&
                    sliderComponent._handleData.length >= 2)
                {
                    // Remove any handle_forcepressed styles added for tick touch target drag drop
                    if(!Srch.U.n(sliderComponent._handleData[0]) &&
                       !Srch.U.n(sliderComponent._handleData[1]))
                    {
                        Sys.UI.DomElement.removeCssClass(sliderComponent._handleData[0], "handle_forcepressed");
                        Sys.UI.DomElement.addCssClass(sliderComponent._handleData[0], "handle_noforcepressed");

                        Sys.UI.DomElement.removeCssClass(sliderComponent._handleData[1], "handle_forcepressed");
                        Sys.UI.DomElement.addCssClass(sliderComponent._handleData[1], "handle_noforcepressed");
                    }
                }

                if(hasChangedCondition)
                {
                    refinerComponent.updateRefinementFilters(this._refinementPropertyName, filterTokensToApply);
                }
            },

            initializeCountsForHistogram: function (tickDefinitionCollection, refinementPropName, minSelectedIndex, maxSelectedIndex) {
                var eachTickObj = null;
                var previousTickObj = null;
                for (var j = 0; j < tickDefinitionCollection.length; j++) {
                    eachTickObj = tickDefinitionCollection[j];
                    if ("undefined" == typeof (eachTickObj.ResultCounts)) eachTickObj.ResultCounts = new Object();
                    if ("undefined" == typeof (eachTickObj.ResultCounts[refinementPropName])) eachTickObj.ResultCounts[refinementPropName] = 0;
                    if ("undefined" == typeof (eachTickObj.ActiveStates)) eachTickObj.ActiveStates = new Object();
                    if ("undefined" == typeof (eachTickObj.ActiveStates[refinementPropName])) eachTickObj.ActiveStates[refinementPropName] = true;

                    if (j >= minSelectedIndex &&
                        (j < maxSelectedIndex || maxSelectedIndex < 0)) {
                        // ResultCount is being recounted in the active range so clear the previous ResultCount
                        eachTickObj.ActiveStates[refinementPropName] = true;
                    }
                    else {
                        // ResultCount should not be counted since there was a max and min specified (>=0) and the
                        //  j value for this tick in not in the active range.  Use a different style and a cached previous ResultCount
                        eachTickObj.ActiveStates[refinementPropName] = false;

                        // Be sure to store the highest inactive counts as the max if they are higher than the active ones.
                        if (this._maxResultCount < eachTickObj.ResultCounts[refinementPropName]) this._maxResultCount = eachTickObj.ResultCounts[refinementPropName];
                    }
                }
            },

            addToCountForHistogram: function (tickObject, refinementPropName, countForValue) {
                if (SP.ScriptUtility.isNullOrUndefined(tickObject)) {
                    return;
                }

                if (SP.ScriptUtility.isNullOrUndefined(countForValue) ||
        NaN == Number(countForValue)) {
                    countForValue = 1;
                }
                else {
                    countForValue = Number(countForValue);
                }

                var eachTickObj = tickObject;
                var previousTickObj = tickObject;

                var currentTickResultCount = eachTickObj.ResultCounts[refinementPropName];
                var currentTickIsActive = eachTickObj.ActiveStates[refinementPropName];

                if (currentTickIsActive) {
                    // This covers the intervals between ticks
                    currentTickResultCount = countForValue;
                    if (this._maxResultCount < currentTickResultCount) this._maxResultCount = currentTickResultCount;
                    eachTickObj.ResultCounts[refinementPropName] = currentTickResultCount;

                    return;  // break out of loop and return so we only add the count to the first matching tick
                }
            }
        }

        // These functions below should be moved into the classes above.

        function formatDateForSearch(dateToFormat) {
            if (!dateToFormat || !dateToFormat.format) {
                return dateToFormat;
            }
            else {
                // Uses an added function put in by Ajax code
                return dateToFormat.format("M/d/yyyy");
            }
        }

        function encodeForHtmlDomId(stringToEncode) {
            if (typeof (stringToEncode) == "string") {
                // Replace spaces with "_" and remove all non alphanumeric characters (stricter than the HTML and XHTML spec)
                return stringToEncode.replace(/ /g, "_").replace(/[^A-Za-z0-9]*/g, "")
            }
        }

        var EmptyBucketConfig = {
                BoundaryValues: [ ],
                Intervals: [ ],
                BucketSpecString: ""
            };

        var DateRangeExponentialBucketConfig = {
                BoundaryValues: [
                    { Value: "min", Label: "Earlier than 1 Year Ago", NextIntervalLabel: "Earlier than 1 Year Ago" },
                    { FilterDaysOffset: -365, Label: "1 Year Ago", NextIntervalLabel: "1 Year Ago - 1 Months Ago" },
                    { FilterDaysOffset: -30, Label: "1 Month Ago", NextIntervalLabel: "1 Month Ago - 1 Week Ago" },
                    { FilterDaysOffset: -7, Label: "1 Week Ago", NextIntervalLabel: "1 Week Ago - Today" },
                    { FilterDaysOffset: 0, Label: "Today", NextIntervalLabel: "Later than Today" },
                    { Value: "max", Label: "" }
                ],
                Intervals: [
                    { Label: "Earlier than 1 Year Ago" },
                    { Label: "1 Year Ago - 1 Month Ago" },
                    { Label: "1 Month Ago - 1 Week Ago" },
                    { Label: "1 Week Ago - Today" },
                    { Label: "Later than Today" }
                ],
                BucketSpecString: "" // TODO: Generate date range offset spec string
            };

            AjaxControlToolkit.SliderRefinementControl.GetDefaultNumberLabels = function(ctx)
            {
                return {
                        "min": Srch.U.loadResource("rf_DefaultNumberLabels_min"),
                        "max": Srch.U.loadResource("rf_DefaultNumberLabels_max"),
                        "range": Srch.U.loadResource("rf_DefaultNumberLabels_range"),
                        "value": Srch.U.loadResource("rf_DefaultNumberLabels_value")
                    };
            }

            AjaxControlToolkit.SliderRefinementControl.GetDefaultDateRangeLabels = function(ctx)
            {
                return {
                        0: Srch.U.loadResource("rf_DefaultDateBoundaryLabels_0"),
                        1: Srch.U.loadResource("rf_DefaultDateBoundaryLabels_1"),
                        2: Srch.U.loadResource("rf_DefaultDateBoundaryLabels_2"),
                        3: Srch.U.loadResource("rf_DefaultDateBoundaryLabels_3"),
                        4: Srch.U.loadResource("rf_DefaultDateBoundaryLabels_4"),
                        "min": Srch.U.loadResource("rf_DefaultDateRangeLabels_min"),
                        "max": Srch.U.loadResource("rf_DefaultDateRangeLabels_max"),
                        "range": Srch.U.loadResource("rf_DefaultDateRangeLabels_range"),
                        "value": Srch.U.loadResource("rf_DefaultDateRangeLabels_value")
                    };
            }

            AjaxControlToolkit.SliderRefinementControl.GetDefaultBuckets = function (ctx)
            {
                // Initial defaults for date range exponential buckets
                var buckets = EmptyBucketConfig;

                if (!$isNull(ctx.RefinementControl)) {
                    var specString = ctx.RefinementControl.spec;
                    if (Srch.U.n(specString) || Srch.U.w(specString)) specString = "";

                    var activeLabels = Srch.ValueInfo.getIntervalLabelsDictionary(ctx.RefinementControl.propertyName)
                    if(Srch.U.n(activeLabels))
                    {
                        activeLabels = AjaxControlToolkit.SliderRefinementControl.GetDefaultNumberLabels(ctx);
                    }
                    else if(Srch.U.n(activeLabels) && ctx.RefinementControl.useDefaultDateIntervals)
                    {
                        activeLabels = AjaxControlToolkit.SliderRefinementControl.GetDefaultDateRangeLabels(ctx);
                    }

                    var specBoundaries = specString.replace("(", "").replace(")", "").split("/");
                    // This is the count of actual spec boundaries, ignoring the first "discretize=manual" value
                    var specBoundaryCount = specBoundaries.length - 1;
                    // This is the target boundary count after including the implict min and max boundaries
                    var targetBoundaryCount = specBoundaries.length + 1;
                    if (specBoundaries.length > 1 && specBoundaries[0].startsWith("discretize=manual")) {
                        // The first entry is "discretize=manual" so entries 1 through n are boundary values
                        //  create the empty bucket config with the implicit "min" entry to start
                        buckets = {
                            BoundaryValues: [{ Value: "min", Label: activeLabels.min}],
                            Intervals: [],
                            BucketSpecString: specString,
                            Labels: activeLabels
                        };

                        var previousBoundary = buckets.BoundaryValues[0];
                        var currentBoundary = null;
                        // Loop over the specBoundaries values adding each to the bucket colleciton as a boundary and
                        //  updating the previous one with the upper bound and interval information from the current value
                        // Note: that there are two more final target boundary values than there are spec boundary values since
                        //  the min and max boundaries are implicit.  Also there is one less interval than there are target
                        //  boundary values since intervals occur between values, thus the last boundary has no next interval info.
                        for (var i = 1; i <= specBoundaries.length; i++) {
                            if (i < specBoundaries.length) {

                                // Use correct locale formatting for spec boundary and interval boundary labels
                                // 2 decimal places if the number has a non-integer part (none if the number is an integer)
                                var specBoundaryString = Srch.U.toFormattedNumber(specBoundaries[i], 2);
                                var valueLabel = String.format(activeLabels.value,specBoundaryString);
                                var explictBoundaryLableForIndex = activeLabels[(i -1).toString()];
                                if(!$isNull(explictBoundaryLableForIndex))
                                {
                                    // Using an explict override label for this indexed boundary for dates
                                    valueLabel = explictBoundaryLableForIndex;
                                }
                                else if("Size" == ctx.RefinementControl.propertyName)
                                {
                                    // For file size we use a special boundary display function for the labels
                                    valueLabel = String.format(activeLabels.value, Srch.U.toFileSizeDisplay(specBoundaries[i], false))
                                }

                                // default boundary case with a specBoundaries[i] value
                                currentBoundary = {
                                    Value: specBoundaries[i],
                                    Label: valueLabel
                                };
                            }
                            else {
                                // At the end so use the implict "max" boundary
                                currentBoundary = { Value: "max", Label: activeLabels.max };
                            }
                            buckets.BoundaryValues.push(currentBoundary);

                            var intervalLabel =  String.format(
                            activeLabels.range,
                            Srch.U.isRTL() ? currentBoundary.Label : previousBoundary.Label,
                            Srch.U.isRTL() ? previousBoundary.Label : currentBoundary.Label);

                            if($isNull(ctx.RefinementControl.filterTokenType) &&
                                !$isNull(ctx.ListData) &&
                                ctx.ListData.length > 0 &&
                                !$isNull(ctx.ListData[0].filterTokenType))
                            {
                                //  filterTokenType=T was cached by the DataProvider.cs on the resultRow if found.
                                //  The filterTokenType is read from the resultRow and cached on the RefinementControl 
                                //  object so that correct typed decimal(boundary) tokens are created.
                                //  FYI: This mechanism is used because the RefinementControl object does not expose the
                                //   type in UI JS code.
                                ctx.RefinementControl.filterTokenType = ctx.ListData[0].filterTokenType;
                            }

                            var intervalToken = AjaxControlToolkit.SliderRefinementControl.GetTypeReadyRangeToken(
                                previousBoundary.Value,
                                currentBoundary.Value,
                                ctx.RefinementControl);

                            if (i == 1) {
                                // Add the "min" boundary label as a prefix
                                intervalLabel = String.format(activeLabels.min, currentBoundary.Label)
                            }
                            else if (i == specBoundaries.length) {
                                // This is not a spec boundary, this is the implicit max boundary label and interval token
                                // Add the "max" boundary label as a suffix
                                intervalLabel = String.format(activeLabels.max, previousBoundary.Label)
                                // The below logic is now handled internally by GetTypeReadyRangeToken above
                                //intervalToken = "range(" + previousBoundary.Value + ", " + currentBoundary.Value + ", to=\"le\")";
                            }

                            var intervalObj = {
                                Label: intervalLabel,
                                IntervalToken: intervalToken
                            };
                            buckets.Intervals.push(intervalObj);
                            previousBoundary.NextIntervalLabel = intervalLabel;
                            previousBoundary.NextIntervalToken = intervalToken;

                            previousBoundary = currentBoundary;
                        }
                    }
                }

                // TODO: Assert(buckets.BoundaryValues.length == targetBoundaryCount)
                return buckets;
            }


      AjaxControlToolkit.SliderRefinementControl.GetDefaultFilterLabelOptions = function (ctx, idPrefix, bucketConfig) {
            return {
              ElementIds: {
                  LabelSection: idPrefix + "LabelSection",
                  RangeLabel: idPrefix + "RangeLabel"
              },
              BucketData: bucketConfig
          };
      }  // Use this as the baseline for filter crumbs in other places

      AjaxControlToolkit.SliderRefinementControl.GetDefaultFilterLabelMarkupAndOptions = function (ctx, idPrefix, bucketConfig) {
          ctx.FilterLabelOptions = AjaxControlToolkit.SliderRefinementControl.GetDefaultFilterLabelOptions(
            ctx,
            idPrefix,
            bucketConfig);

          if (!$isNull(ctx.RefinementControl)) {
              ctx.RefinementControl.BucketConfig = bucketConfig;
              ctx.RefinementControl.FilterLabelOptions = ctx.FilterLabelOptions;

              if (!$isNull(ctx.RefinementControl.BucketConfig) &&
                ctx.RefinementControl.BucketConfig.BoundaryValues.length < 4) {

                  // We need to have 2 real boundaries and 2 min-max extent boundaries to render
                  // There are no buckets defined so return an empty string
                  return "";
              }
          }

          var shouldStartVisible = Srch.Refinement.getExpanded(ctx.RefinementControl.propertyName);
          var startHiddenMarkup = (shouldStartVisible == "true" ? '' : ' style="display: none;" ');
          // outer div with &NBSP; stays visible and holds space for the label
          return "" + 
          "<div id=\"" + ctx.FilterLabelOptions.ElementIds.LabelSection + "\" class=\"handle_label_section ms-ref-allSec\" " + startHiddenMarkup + ">" +
"              <span id=\"" + ctx.FilterLabelOptions.ElementIds.RangeLabel + "\" class=\"handle_label\">" +
"                  " +
"              </span>" +
"                  " +
"              </span>" +
"          </div>"; //</div>";
      }

      var BoundaryIdSuffix = "Boundary";
      var TickIdSuffix = "_Tick_";
      var TickTouchTargetIdSuffix = "_TickTouchTarget_";
      AjaxControlToolkit.SliderRefinementControl.GetTickOrTouchTargetElementId = function (controlIdBase, tickIndex, fortouchTarget) {
          var boundaryElemId = controlIdBase + BoundaryIdSuffix;
          boundaryElemId += fortouchTarget ? TickTouchTargetIdSuffix : TickIdSuffix;
          boundaryElemId += tickIndex;
          return boundaryElemId;
      }

      AjaxControlToolkit.SliderRefinementControl.GetDefaultSliderOptions = function (ctx, idPrefix, minValue, maxValue, pixelLength, bucketConfig) {
          var steps = maxValue - minValue + 1;

          if (!$isNull(bucketConfig) &&
            bucketConfig.BoundaryValues.length >= 3) {

              // Use the configured interval length for explicit intervals with steps by boundary value index
              minValue = 0;  // min value is first boundary index
              maxValue = bucketConfig.BoundaryValues.length - 1; // max value is last boundary value index
              steps = bucketConfig.BoundaryValues.length;
              bucketConfig.BoundaryType = "ExplicitIntervalBoundaries";
          }
          else if (!$isNull(bucketConfig) &&
                    bucketConfig.BoundaryValues.length == 2) {
              // this is a continous slider with min/max boundary values only.
              //  no explicit interval buckets so steps are by value
              minValue = bucketConfig.BoundaryValues[0].Value;
              maxValue = bucketConfig.BoundaryValues[1].Value;
              steps = maxValue - minValue + 1;
              bucketConfig.BoundaryType = "MinMaxOnly";
          }

          var defaultSliderOptions = {
              ElementIds: {
                  DataInputElement: idPrefix + "Data",
                  SliderContainer: idPrefix + "SliderContainer"
              },
              LeftHandle: {
                  ControlID: idPrefix + "LeftHandleData",
                  handleCssClass: "handle_horizontal_left",
                  decimals: 0,
                  offset: 0
              },
              RightHandle: {
                  ControlID: idPrefix + "RightHandleData",
                  handleCssClass: "handle_horizontal_right",
                  decimals: 0,
                  offset: 0
              },
              Component: {
                  id: idPrefix + "SliderBehaviour",
                  minimum: minValue,
                  maximum: maxValue,
                  enableKeyboard: true,
                  enableMouseWheel: false,
                  length: pixelLength,
                  steps: steps,
                  showHandleDragStyle: true,
                  showHandleHoverStyle: true,
                  showInnerRail: true
              },
              LayoutConfig: {
                MaxWidth: pixelLength,
                TickWidth: 3,
                LeftPadding: 5,
                RightPadding: 5
              },
              BucketData: bucketConfig
          };

          defaultSliderOptions.Component.multiHandleSliderTargets = [
                defaultSliderOptions.LeftHandle,
                defaultSliderOptions.RightHandle
            ];

          return defaultSliderOptions;
      }
      
      AjaxControlToolkit.SliderRefinementControl.GetDefaultSliderMarkupAndOptions = function (ctx, idPrefix, minValue, maxValue, pixelLength, bucketConfig)
      {
        ctx.SliderOptions = AjaxControlToolkit.SliderRefinementControl.GetDefaultSliderOptions(
            ctx,
            idPrefix,
            minValue,
            maxValue,
            pixelLength,
            bucketConfig);

        if (!$isNull(ctx.RefinementControl)) {
            ctx.RefinementControl.BucketConfig = bucketConfig;
            ctx.RefinementControl.SliderOptions = ctx.SliderOptions;

            if (!$isNull(ctx.RefinementControl.BucketConfig) &&
            ctx.RefinementControl.BucketConfig.BoundaryValues.length < 4) {

                // We need to have 2 real boundaries and 2 min-max extent boundaries to render
                // There are no buckets defined so return an empty string
                return "";
            }
        }

        // This is no longer needed since this is not called until an EnsureScriptFunc in OnPostRender:
        // This is now in the Filter_Slider* templates: $addRenderContextCallback(ctx, "OnPostRender", AjaxControlToolkit.SliderRefinementControl.OnPostRenderInitSliderForElement);

        // ExtentLabel section: We have already tested that bucketConfig.BoundaryValues.length >= 4
        //(2 real boundaries and 2 min-max extent boundaries)
        var p = [];
        p.push("<div id=\"" +
            ctx.SliderOptions.ElementIds.SliderContainer + "_ExtentLabelSection" +
            "\" class=\"ms-textSmall slider_extent_label_section\">");
        // Max label goes first and floats to the right
        p.push("<div id=\"" +
            ctx.SliderOptions.ElementIds.SliderContainer + "_ExtentLabelMax" +
            "\" class=\"slider_extent_label_right\">");
        p.push(bucketConfig.BoundaryValues[bucketConfig.BoundaryValues.length - 2].Label);
        p.push("</div>");

        // Min label goes second
        p.push("<div id=\"" +
            ctx.SliderOptions.ElementIds.SliderContainer + "_ExtentLabelMin" +
            "\" class=\"slider_extent_label_left\">");
        p.push(bucketConfig.BoundaryValues[1].Label);
        p.push("</div>");

        p.push("</div>");

        p.push("<div id=\"" +  ctx.SliderOptions.ElementIds.SliderContainer + "\" class=\"slideronly_container\">" + 
"              <input style=\"display: none\" id=\"" +  ctx.SliderOptions.LeftHandle.ControlID + "\" name=\"" +  ctx.SliderOptions.LeftHandle.ControlID + "\" value=\"" +  ctx.SliderOptions.Component.minimum + "\" />" + 
"              <input style=\"display: none\" id=\"" +  ctx.SliderOptions.RightHandle.ControlID + "\" name=\"" +  ctx.SliderOptions.RightHandle.ControlID + "\" value=\"" +  ctx.SliderOptions.Component.maximum + "\" />" + 
"              <div id=\"" +  ctx.SliderOptions.Component.id + "RailSection\" style=\"display: block; position: relative; \" >" + 
"                  <input style=\"display: block\" id=\"" +  ctx.SliderOptions.ElementIds.DataInputElement + "\" name=\"" +  ctx.SliderOptions.ElementIds.DataInputElement + "\" />");

        // Add the Tick divs
        var hasBucketData =
              (!$isNull(bucketConfig) &&
               !$isNull(bucketConfig.BoundaryValues) &&
               bucketConfig.BoundaryValues.length >= 4);
        for (var i = 0; hasBucketData && i < bucketConfig.BoundaryValues.length; i++) {
            // TODO: calculate these values ahead of time and add them to the bucket and histogram options structure
            var availableWidth = ctx.SliderOptions.LayoutConfig.MaxWidth - ctx.SliderOptions.LayoutConfig.LeftPadding - ctx.SliderOptions.LayoutConfig.RightPadding;

            var distanceBetweenTicks = (availableWidth / (bucketConfig.BoundaryValues.length - 1));

            var eachBoundaryValue = bucketConfig.BoundaryValues[i]
            var nextTickCenter = (i * distanceBetweenTicks);
            var tickWidthOffset = (ctx.SliderOptions.LayoutConfig.TickWidth / 2);
            var leftTickPosition = ctx.SliderOptions.LayoutConfig.LeftPadding + Math.floor(nextTickCenter - tickWidthOffset);
            var leftTickTargetPosition = Math.floor(leftTickPosition - (distanceBetweenTicks/2));
            var tickTargetWidth = Math.floor(distanceBetweenTicks - ctx.SliderOptions.LayoutConfig.TickWidth);
            eachBoundaryValue.CaculatedTickLeftPosition = leftTickPosition;
            eachBoundaryValue.CaculatedTickTargetLeftPosition = leftTickTargetPosition;
            // First and last labels are blank
            var eachLabel = (i ==0 || i == bucketConfig.BoundaryValues.length -1) ? "" : eachBoundaryValue.Label;

            var clickTargetIndex = i;

            var eachSliderTickId = AjaxControlToolkit.SliderRefinementControl.GetTickOrTouchTargetElementId(
                idPrefix,
                clickTargetIndex,
                /* forTickTouchTarget */ false);
            var eachSliderTickTargetId = AjaxControlToolkit.SliderRefinementControl.GetTickOrTouchTargetElementId(
                idPrefix,
                clickTargetIndex,
                /* forTickTouchTarget */ true);

            var styleRTLOffsetProp = Srch.U.isRTL() ? "right" : "left";
            p.push("<div " +
"                id=\"" + eachSliderTickId + "\"" +
"                style=\"" + styleRTLOffsetProp + ": " + leftTickPosition + "px;\"" +
"                class=\"slider_tick_active\"" +
"                title=\"" + $htmlEncode(eachLabel) + "\" >" +
"                </div>");

            // onmousedown handler for touch target press event added after render
            p.push("<div " +
"                id=\"" + eachSliderTickTargetId + "\"" +
"                style=\"" + styleRTLOffsetProp + ": " + leftTickTargetPosition + "px; width: " + tickTargetWidth + "px;\"" +
"                class=\"slider_tick_targetbox\"" +
"                title=\"" + $htmlEncode(eachLabel) + "\" " +
"                controlBaseId=\"" + $htmlEncode(idPrefix) + "\" " +
"                boundaryIndex=\"" + $htmlEncode(clickTargetIndex) + "\" " +
"                >" +
"                </div>");

        }


        // close the rail and container divs
p.push("              </div>" + 
"          </div>");
        return p.join("");
      }

      AjaxControlToolkit.SliderRefinementControl.GetDefaultHistogramOptions = function (ctx, idPrefix, maxHeight, maxWidth, bucketConfig) {
        return {
            ElementIds: {
              HistogramContainer: idPrefix + "HistogramContainer",
              HistogramBgBarPrefix: idPrefix + "_HistogramBgBar",
              HistogramActiveBarPrefix: idPrefix + "_HistogramActiveBar",
              HistogramContainer: idPrefix + "HistogramContainer"
            },
            CssStyles: {
              HistogramActiveBar: "histogram_bar_active",
              HistogramInactiveBar: "histogram_bar_inactive"
            },
            LayoutConfig: {
              MaxHeight: maxHeight,
              MaxWidth: maxWidth,
              PaddingBetweenColumns: 5,
              LeftPadding: (Srch.U.isRTL() ? 8 : 7),
              RightPadding: (Srch.U.isRTL() ? 7 : 8),
              TopPadding: 2
            },
            BucketData: bucketConfig
          };
      }

      AjaxControlToolkit.SliderRefinementControl.GetDefaultHistogramMarkupAndOptions = function (ctx, idPrefix, maxHeight, maxWidth, bucketConfig) {
          ctx.HistogramOptions = AjaxControlToolkit.SliderRefinementControl.GetDefaultHistogramOptions(
            ctx,
            idPrefix,
            maxHeight,
            maxWidth,
            bucketConfig);

          if (!$isNull(ctx.RefinementControl)) {
              ctx.RefinementControl.BucketConfig = bucketConfig;
              ctx.RefinementControl.HistogramOptions = ctx.HistogramOptions;

              if (!$isNull(ctx.RefinementControl.BucketConfig) &&
                ctx.RefinementControl.BucketConfig.BoundaryValues.length < 4) {

                   // We need to have 2 real boundaries and 2 min-max extent boundaries to render
                  // There are no buckets defined so return an empty string
                  return "";
              }
          }

          var p = [];
          p.push("<div id=\"" +
            ctx.HistogramOptions.ElementIds.HistogramContainer +
            "\" class=\"histogram_container\">");

          // Render initial empty bucket columns this time around and then attach to a data event to update the columns.
          var hasBucketData =
                (!$isNull(bucketConfig) &&
                 !$isNull(bucketConfig.Intervals) &&
                 bucketConfig.Intervals.length >= 1);
          for (var i = 0; hasBucketData && i < bucketConfig.Intervals.length; i++) {
              // TODO: calculate these values ahead of time and add them to the bucket and histogram options structure
              var availableWidth = ctx.HistogramOptions.LayoutConfig.MaxWidth - ctx.HistogramOptions.LayoutConfig.LeftPadding - ctx.HistogramOptions.LayoutConfig.RightPadding;

              // Before dividing by the bucketConfig.Intervals.length to find the column widths we add
              //  one extra PaddingBetweenColumns since there is no padding right of the final interval
              availableWidth = availableWidth + ctx.HistogramOptions.LayoutConfig.PaddingBetweenColumns;

              var columnWidth = Math.floor(availableWidth / bucketConfig.Intervals.length) - ctx.HistogramOptions.LayoutConfig.PaddingBetweenColumns;

              var eachInterval = bucketConfig.Intervals[i]
              var leftPosition = ctx.HistogramOptions.LayoutConfig.LeftPadding + (i * (ctx.HistogramOptions.LayoutConfig.PaddingBetweenColumns + columnWidth));
              eachInterval.CaculatedColumnLeftPosition = leftPosition;

              // TODO: Add fallback handling for missing labels using boundary value info.
              var rangeLowerIndex = i;
              var rangeUpperIndex = Math.min(i + 1, bucketConfig.BoundaryValues.length);

              var styleRTLOffsetProp = Srch.U.isRTL() ? "right" : "left";

              p.push(" <a " +
"                style=\"bottom: 0px; "+ styleRTLOffsetProp + ": " + leftPosition + "px; " +
"width: " + columnWidth + "px; \"" +
"                class=\"histogram_bar_link\"" +
"                title=\"" + $htmlEncode(eachInterval.Label) + "\"" +
"                href=\"#\" ");
              // TODO: adjust the refinement function to store and register bucket definitions in a global location
              // TODO: replace idPrefix with a histogram options varible so that is can be called from a ctx render
              // TODO: replace the FindAndSetSliderHandlesAndValuesToRange to a simple condition adding function
              p.push("    onclick=\"AjaxControlToolkit.SliderRefinementControl.FindAndSetSliderHandlesAndValuesToRange(\&quot;" + $htmlEncode(idPrefix) + "\&quot;, " + rangeLowerIndex + ", " + rangeUpperIndex + ", this); return false;\" >");
              p.push("        <div" +
"                     id=\"" + ctx.HistogramOptions.ElementIds.HistogramBgBarPrefix + i.toString() + "\" " +
"                     class=\"histogram_bar_background\" >");
              p.push("          <div " +
"                     style=\"margin-top: ");
              p.push(ctx.HistogramOptions.LayoutConfig.MaxHeight - (2 * ctx.HistogramOptions.LayoutConfig.TopPadding) + "px; ");
              p.push("           height: " + (ctx.HistogramOptions.LayoutConfig.TopPadding + "px\""));
              p.push("          id=\"" + (ctx.HistogramOptions.ElementIds.HistogramActiveBarPrefix + i.toString()) + "\"" +
"                     class=\"" + ctx.HistogramOptions.CssStyles.HistogramActiveBar + "\" >" +
"                    </div>" +
"                   </div>" +
"                </a>");
          }

          p.push("</div>");

          return p.join("");
      }

      AjaxControlToolkit.SliderRefinementControl.GetTypeReadyRangeToken = function(lowerBound, upperBound, refinementConfigObj) {
          var rangeTokenFormat = "range({0}, {1}{2})";
          if(!Srch.U.n(refinementConfigObj) &&
             !Srch.U.e(refinementConfigObj.filterTokenType) &&
             ("decimal" == refinementConfigObj.filterTokenType
               || ("min" == lowerBound && "max" == upperBound) ) )
          {
              // FYI: This code will never be called for "min" and "max" typed tokens because it is used for sliders where
              //    the discretize=manual will never result in range(datetime(min), datetime(max), to="le") "Any Value" tokens.
              //    This should only trigger for range(decimal(lowerBound), decimal(upperBound)) cases.
              //    The typed min/max token support is added to be safe, in case this is every called in that situation.
              rangeTokenFormat = 
                "range(" + 
                refinementConfigObj.filterTokenType + "({0}), "+
                refinementConfigObj.filterTokenType + "({1}){2})";
          }

          // NOTE: This line will ensure the behaviour of any range token that has only a lower bound will correctly add
          //    the "le" modifier to the upper bound (which was previously done in the two calling locations). For example:
          // Correct - range({lowerBoundary}, max, to="le")
          // Incorrect - range({lowerBoundary}, max)
          var rangeTokenMaxUpperBoundModifier = ("max" == upperBound) ? ", to=\"le\"" : "";

          return String.format(rangeTokenFormat, lowerBound, upperBound, rangeTokenMaxUpperBoundModifier);
      }

function ajaxtoolkit_initialize() {
    CommonToolkitScripts = AjaxControlToolkit.CommonToolkitScripts = new AjaxControlToolkit._CommonToolkitScripts();
    $common = CommonToolkitScripts;
}
RegisterModuleInit("ajaxtoolkit.js", ajaxtoolkit_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("ajaxtoolkit.js");
