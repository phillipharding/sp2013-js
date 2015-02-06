function $_global_owsbrows() {
    Browseris.prototype = {
        firefox: undefined,
        firefox36up: undefined,
        firefox3up: undefined,
        firefox4up: undefined,
        ie: undefined,
        ie55up: undefined,
        ie5up: undefined,
        ie7down: undefined,
        ie8down: undefined,
        ie8standard: undefined,
        ie8standardUp: undefined,
        ie9standardUp: undefined,
        ipad: undefined,
        windowsphone7: undefined,
        chrome: undefined,
        chrome7up: undefined,
        chrome8up: undefined,
        chrome9up: undefined,
        iever: undefined,
        mac: undefined,
        major: undefined,
        msTouch: undefined,
        isTouch: undefined,
        nav: undefined,
        nav6: undefined,
        nav6up: undefined,
        nav7up: undefined,
        osver: undefined,
        safari: undefined,
        safari125up: undefined,
        safari3up: undefined,
        safariMobile: undefined,
        verIEFull: undefined,
        w3c: undefined,
        webKit: undefined,
        win: undefined,
        win8AppHost: undefined,
        win32: undefined,
        win64bit: undefined,
        winnt: undefined,
        armProcessor: undefined
    };
    browseris = new Browseris();
    bis = browseris;
    if (typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded == "function") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
    }
}
function ULSdye() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "owsbrows.commentedjs";
    return o;
}
function Browseris() {
ULSdye:
    ;
    var agt = navigator.userAgent.toLowerCase();
    var navIdx;

    this.osver = 1.0;
    if (Boolean(agt)) {
        var stOSVer = agt.substring(agt.indexOf("windows ") + 11);

        this.osver = parseFloat(stOSVer);
    }
    this.major = parseInt(navigator.appVersion);
    this.nav = agt.indexOf('mozilla') != -1 && (agt.indexOf('spoofer') == -1 && agt.indexOf('compatible') == -1);
    this.nav6 = this.nav && this.major == 5;
    this.nav6up = this.nav && this.major >= 5;
    this.nav7up = false;
    if (this.nav6up) {
        navIdx = agt.indexOf("netscape/");
        if (navIdx >= 0)
            this.nav7up = parseInt(agt.substring(navIdx + 9)) >= 7;
    }
    this.ie = agt.indexOf("msie") != -1;
    this.ipad = agt.indexOf("ipad") != -1;
    this.windowsphone7 = agt.indexOf("windows phone os 7.5") != -1;
    this.aol = this.ie && agt.indexOf(" aol ") != -1;
    if (this.ie) {
        var stIEVer = agt.substring(agt.indexOf("msie ") + 5);

        this.iever = parseInt(stIEVer);
        this.verIEFull = parseFloat(stIEVer);
    }
    else
        this.iever = 0;
    this.ie4up = this.ie && this.major >= 4;
    this.ie5up = this.ie && this.iever >= 5;
    this.ie55up = this.ie && this.verIEFull >= 5.5;
    this.ie6up = this.ie && this.iever >= 6;
    this.ie7down = this.ie && this.iever <= 7;
    this.ie8down = this.ie && this.iever <= 8;
    this.ie7up = this.ie && this.iever >= 7;
    this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
    this.ie8standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 8;
    this.ie9standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 9;
    this.ie10standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 10;
    this.winnt = agt.indexOf("winnt") != -1 || agt.indexOf("windows nt") != -1;
    this.win32 = this.major >= 4 && navigator.platform == "Win32" || agt.indexOf("win32") != -1 || agt.indexOf("32bit") != -1;
    this.win64bit = agt.indexOf("win64") != -1;
    this.win = this.winnt || this.win32 || this.win64bit;
    this.mac = agt.indexOf("mac") != -1;
    this.w3c = this.nav6up;
    this.webKit = agt.indexOf("webkit") != -1;
    this.safari = agt.indexOf("webkit") != -1;
    this.safari125up = false;
    this.safari3up = false;
    this.safariMobile = false;
    if (this.safari && this.major >= 5) {
        navIdx = agt.indexOf("webkit/");
        if (navIdx >= 0)
            this.safari125up = parseInt(agt.substring(navIdx + 7)) >= 125;
        var verIdx = agt.indexOf("version/");

        if (verIdx >= 0)
            this.safari3up = parseInt(agt.substring(verIdx + 8)) >= 3;
        this.safariMobile = agt.indexOf("mobile") > navIdx && (this.ipad || agt.indexOf("iphone") != -1 || agt.indexOf("ipod") != -1);
    }
    this.firefox = this.nav && agt.indexOf("firefox") != -1;
    this.firefox3up = false;
    this.firefox36up = false;
    this.firefox4up = false;
    if (this.firefox && this.major >= 5) {
        var ffVerIdx = agt.indexOf("firefox/");

        if (ffVerIdx >= 0) {
            var firefoxVStr = agt.substring(ffVerIdx + 8);

            this.firefox3up = parseInt(firefoxVStr) >= 3;
            this.firefox36up = parseFloat(firefoxVStr) >= 3.6;
            this.firefox4up = parseInt(firefoxVStr) >= 4;
        }
    }
    this.win8AppHost = agt.indexOf("msapphost") != -1;
    this.chrome = this.nav && agt.indexOf("chrome") != -1;
    this.chrome7up = false;
    this.chrome8up = false;
    this.chrome9up = false;
    if (this.chrome && this.major >= 5) {
        var chmVerIdx = agt.indexOf("chrome/");

        if (chmVerIdx >= 0) {
            var chmVerStr = agt.substring(chmVerIdx + 7);
            var chmVerInt = parseInt(chmVerStr);

            this.chrome7up = chmVerInt >= 7;
            this.chrome8up = chmVerInt >= 8;
            this.chrome9up = chmVerInt >= 9;
        }
    }
    this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
    this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
    this.armProcessor = agt.indexOf("arm") != -1;
}
var browseris;
var bis;

function byid(id) {
ULSdye:
    ;
    return document.getElementById(id);
}
function newE(tag) {
ULSdye:
    ;
    return document.createElement(tag);
}
function wpf() {
ULSdye:
    ;
    if (typeof window.MSOWebPartPageFormName != "undefined")
        return document.forms[window.MSOWebPartPageFormName];
    return null;
}
function startReplacement() {
}
function SetEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    el['on' + eventName] = eventFunc;
}
function AttachEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (eventName == 'domLoad') {
        eventName = typeof el.addEventListener != 'undefined' && el.addEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
    }
    else if (eventName != 'undefined' && eventName != null && eventName.indexOf("touch") == 0 && bis.msTouch) {
        switch (eventName) {
        case "touchstart":
            eventName = "MSPointerDown";
            break;
        case "touchmove":
            eventName = "MSPointerMove";
            break;
        case "touchend":
            eventName = "MSPointerUp";
            break;
        }
    }
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    if (typeof el.addEventListener != 'undefined' && el.addEventListener)
        el.addEventListener(eventName, eventFunc, false);
    else if (typeof el.attachEvent != 'undefined')
        el.attachEvent('on' + eventName, eventFunc);
}
function DetachEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (eventName == 'domLoad') {
        eventName = typeof el.removeEventListener != 'undefined' && el.removeEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
    }
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    if (typeof el.removeEventListener != 'undefined' && el.removeEventListener)
        el.removeEventListener(eventName, eventFunc, false);
    else if (typeof el.detachEvent != 'undefined')
        el.detachEvent('on' + eventName, eventFunc);
}
function CancelEvent(e) {
    e.cancelBubble = true;
    if (Boolean(e.preventDefault))
        e.preventDefault();
    e.returnValue = false;
    return false;
}
function GetEventSrcElement(e) {
    if (e.target != null)
        return e.target;
    else
        return e.srcElement;
}
function GetEventKeyCode(e) {
    if (browseris.nav)
        return e.which;
    else
        return e.keyCode;
}
function GetInnerText(e) {
    if (browseris.safari && browseris.major < 5)
        return e.innerHTML;
    else if (browseris.nav || browseris.safari)
        return e.textContent;
    else
        return e.innerText;
}
$_global_owsbrows();
