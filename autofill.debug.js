function $_global_autofill() {
    SPClientAutoFill.SPClientAutoFillDict = {};
    SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = '';
    SPClientAutoFill.MenuOptionType = {
        Option: 0,
        Footer: 1,
        Separator: 2,
        Loading: 3
    };
    SPClientAutoFill.KeyProperty = 'AutoFillKey';
    SPClientAutoFill.DisplayTextProperty = 'AutoFillDisplayText';
    SPClientAutoFill.SubDisplayTextProperty = 'AutoFillSubDisplayText';
    SPClientAutoFill.TitleTextProperty = 'AutoFillTitleText';
    SPClientAutoFill.MenuOptionTypeProperty = 'AutoFillMenuOptionType';
    SPClientAutoFill.prototype = {
        TextElementId: '',
        AutoFillContainerId: '',
        AutoFillMenuId: '',
        VisibleItemCount: 5,
        CurrentFocusOption: -1,
        AutoFillMinTextLength: 4,
        AutoFillTimeout: 250,
        AutoFillCallbackTimeoutID: '',
        FuncOnAutoFillClose: null,
        FuncPopulateAutoFill: null,
        AllOptionData: {},
        PopulateAutoFill: function(jsonObjSuggestions, fnOnAutoFillCloseFuncName) {
            if (jsonObjSuggestions != null) {
                var allOptions = jsonObjSuggestions.length;
                var elmText = document.getElementById(this.TextElementId);
                var elmAutoFillContainer = document.getElementById(this.AutoFillContainerId);

                this.FuncOnAutoFillClose = fnOnAutoFillCloseFuncName == null ? null : fnOnAutoFillCloseFuncName;
                var arrMenu = [];

                arrMenu.push('<ul class="sp-autoFill-scroll" id="');
                arrMenu.push(STSHtmlEncode(this.AutoFillMenuId));
                arrMenu.push('" onmouseover="SPClientAutoFill_OnAutoFillMouseOver(event)">');
                for (var i = 0; i < allOptions; i++) {
                    var objMenuItem = jsonObjSuggestions[i];

                    arrMenu.push(SPClientAutoFill.BuildMenuItem(objMenuItem, i));
                    var key = objMenuItem[SPClientAutoFill.KeyProperty];

                    if (key != '')
                        this.AllOptionData[key] = objMenuItem;
                }
                arrMenu.push('</ul>');
                elmAutoFillContainer.innerHTML = arrMenu.join('');
                this.CurrentFocusOption = -1;
                this.UpdateAutoFillPosition();
                elmAutoFillContainer.style.display = "block";
                this.SetAutoFillHeight();
                SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = this.TextElementId;
            }
            else {
                this.CloseAutoFill(null);
            }
        },
        IsAutoFillOpen: function() {
        ULSlwk:
            ;
            return SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID == this.TextElementId;
        },
        SetAutoFillHeight: function() {
        ULSlwk:
            ;
            var list = document.getElementById(this.AutoFillMenuId);

            if (list == null)
                return;
            var options = list.childNodes;

            if (options == null || options.length <= this.VisibleItemCount)
                return;
            var height = 0;
            var itmCount = 0;

            for (var idx = 0; idx < options.length; idx++) {
                if (itmCount >= this.VisibleItemCount)
                    break;
                height += options[idx].offsetHeight;
                if (options[idx].className != 'ms-core-menu-separator')
                    itmCount++;
            }
            list.style.height = String(height) + "px";
            if (browseris.chrome && Boolean((ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1")))) {
                if (window.frameElement != null && typeof window.frameElement.autoSize == "function")
                    window.frameElement.autoSize();
            }
        },
        SelectAutoFillOption: function(elmOption) {
            if (elmOption != null) {
                var optValue = elmOption.getAttribute('data-sp-optionValue');

                if (optValue != null && optValue != '')
                    this.CloseAutoFill(this.AllOptionData[optValue]);
            }
        },
        FocusAutoFill: function() {
        ULSlwk:
            ;
            this.UpdateAutoFillMenuFocus(true);
        },
        BlurAutoFill: function() {
        ULSlwk:
            ;
            var autoFillMenu = document.getElementById(this.AutoFillMenuId);

            if (autoFillMenu != null) {
                var allLinks = autoFillMenu.getElementsByTagName('a');

                if (allLinks == null || allLinks.length == 0)
                    return;
                var curPosition = this.CurrentFocusOption;

                if (curPosition >= 0 && curPosition < allLinks.length)
                    RemoveCssClassFromElement(allLinks[curPosition].parentNode, "ms-core-menu-itemSelected");
            }
        },
        CloseAutoFill: function(objData) {
            if (this.FuncOnAutoFillClose != null)
                this.FuncOnAutoFillClose(this.TextElementId, objData);
            var autoFillContainerElement = document.getElementById(this.AutoFillContainerId);

            autoFillContainerElement.style.display = "none";
            autoFillContainerElement.innerHTML = "";
            this.AllOptionData = {};
            this.CurrentFocusOption = -1;
            this.FuncOnAutoFillClose = null;
            SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = '';
        },
        UpdateAutoFillMenuFocus: function(bMoveNextLink) {
            var autoFillMenu = document.getElementById(this.AutoFillMenuId);

            if (autoFillMenu != null) {
                var allLinks = autoFillMenu.getElementsByTagName('a');

                if (allLinks == null || allLinks.length == 0)
                    return;
                var curPosition = this.CurrentFocusOption;

                if (0 <= curPosition && curPosition < allLinks.length)
                    RemoveCssClassFromElement(allLinks[curPosition].parentNode, "ms-core-menu-itemSelected");
                if (curPosition != allLinks.length - 1 || !bMoveNextLink)
                    this.CurrentFocusOption = bMoveNextLink ? curPosition + 1 : curPosition - 1;
                if (this.CurrentFocusOption <= -1) {
                    this.CurrentFocusOption = -1;
                    var textElm = document.getElementById(this.TextElementId);

                    if (textElm != null)
                        textElm.focus();
                }
                else {
                    var newLink = allLinks[this.CurrentFocusOption];
                    var newOption = newLink.parentNode;

                    newLink.focus();
                    AddCssClassToElement(newOption, "ms-core-menu-itemSelected");
                }
            }
        },
        UpdateAutoFillPosition: function() {
        ULSlwk:
            ;
            var elmText = document.getElementById(this.TextElementId);
            var elmContainer = document.getElementById(this.AutoFillContainerId);

            elmContainer.style.top = elmText.parentNode.offsetHeight.toString() + "px";
        }
    };
    SPClientAutoFill.GetAutoFillObjFromInput = function(elmText) {
        if (elmText == null)
            return null;
        var elmTextId = elmText.id;

        if (typeof SPClientAutoFill.SPClientAutoFillDict[elmTextId] != "undefined")
            return SPClientAutoFill.SPClientAutoFillDict[elmTextId];
        return null;
    };
    SPClientAutoFill.GetAutoFillObjFromContainer = function(elmChild) {
        var elmTextId = null;
        var elmContainer = elmChild;

        while (elmContainer != null && elmContainer.nodeName.toLowerCase() != "body") {
            elmTextId = elmContainer.getAttribute('InputElementId');
            if (elmTextId != null && elmTextId != '')
                break;
            elmContainer = elmContainer.parentNode;
        }
        if (typeof SPClientAutoFill.SPClientAutoFillDict[elmTextId] != "undefined")
            return SPClientAutoFill.SPClientAutoFillDict[elmTextId];
        return null;
    };
    SPClientAutoFill.GetAutoFillMenuItemFromOption = function(elmTarget) {
        var elmOption = elmTarget;

        while (elmOption != null && elmOption.nodeName.toLowerCase() != "body") {
            if (elmOption.getAttribute('data-sp-autoFillMenuItem') == 'true')
                return elmOption;
            elmOption = elmOption.parentNode;
        }
        return null;
    };
    SPClientAutoFill.BuildAutoFillSeparatorMenuItem = function() {
    ULSlwk:
        ;
        var result = {};

        result[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Separator;
        return result;
    };
    SPClientAutoFill.BuildAutoFillFooterMenuItem = function(dispText) {
        var result = {};

        result[SPClientAutoFill.DisplayTextProperty] = dispText;
        result[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Footer;
        return result;
    };
    SPClientAutoFill.BuildAutoFillLoadingSuggestionsMenuItem = function() {
    ULSlwk:
        ;
        var result = {};

        result[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Loading;
        return result;
    };
    SPClientAutoFill.BuildMenuItem = function(objMenuItem, idx) {
        var key = objMenuItem[SPClientAutoFill.KeyProperty];
        var dispText = objMenuItem[SPClientAutoFill.DisplayTextProperty];
        var subDispText = objMenuItem[SPClientAutoFill.SubDisplayTextProperty];
        var titleText = objMenuItem[SPClientAutoFill.TitleTextProperty];

        switch (objMenuItem[SPClientAutoFill.MenuOptionTypeProperty]) {
        case SPClientAutoFill.MenuOptionType.Footer:
            return SPClientAutoFill.BuildMenuItemFooter(dispText);
        case SPClientAutoFill.MenuOptionType.Separator:
            return SPClientAutoFill.BuildMenuItemSeparator();
        case SPClientAutoFill.MenuOptionType.Loading:
            return SPClientAutoFill.BuildMenuItemLoading();
        case SPClientAutoFill.MenuOptionType.Option:
        default:
            if (key != '') {
                return SPClientAutoFill.BuildMenuItemOption(key, dispText, subDispText, titleText, String(idx));
            }
        }
        return '';
    };
    SPClientAutoFill.BuildMenuItemSeparator = function() {
    ULSlwk:
        ;
        return '<li class="ms-core-menu-separator" onclick="CancelEvent(event); return false;"><hr class="ms-core-menu-separatorHr"/></li>';
    };
    SPClientAutoFill.BuildMenuItemFooter = function(dispText) {
        var arrMenu = [];

        arrMenu.push('<li class="ms-core-menu-footer" onclick="CancelEvent(event); return false;">');
        arrMenu.push('<div class="ms-textSmall" unselectable="on">');
        arrMenu.push(STSHtmlEncode(dispText));
        arrMenu.push('</div></li>');
        return arrMenu.join('');
    };
    SPClientAutoFill.BuildMenuItemLoading = function() {
    ULSlwk:
        ;
        var arrLoading = [];

        arrLoading.push('<li class="ms-core-menu-loading" onclick="CancelEvent(event); return false;">');
        arrLoading.push('<div unselectable="on"><img class="sp-autoFill-loadingImg" alt="');
        arrLoading.push(STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt));
        arrLoading.push('" src=');
        arrLoading.push('"/_layouts/15/images/gears_anv4.gif?rev=23"');
        arrLoading.push('/></div></li>');
        return arrLoading.join('');
    };
    SPClientAutoFill.BuildMenuItemOption = function(value, dispText, subDispText, titleText, position) {
        if (value == null || value == '')
            return '';
        var arrMenu = [];

        arrMenu.push('<li class="ms-core-menu-item"');
        arrMenu.push(' data-sp-autoFillMenuItem="true" data-sp-optionValue="');
        arrMenu.push(STSHtmlEncode(value));
        arrMenu.push('" title="');
        arrMenu.push(STSHtmlEncode(titleText));
        arrMenu.push('" onclick="SPClientAutoFill_OnAutoFillOptionClick(event);">');
        arrMenu.push('<a class="ms-core-menu-link" onclick="return false;" data-sp-optionPosition="');
        arrMenu.push(STSHtmlEncode(position));
        arrMenu.push('" onkeydown="SPClientAutoFill_OnAutoFillOptionKeyDown(event)" href="#">');
        if (dispText != null && dispText != '') {
            arrMenu.push('<div class="ms-core-menu-label" unselectable="on">');
            arrMenu.push(STSHtmlEncode(dispText));
            arrMenu.push('</div>');
        }
        if (subDispText != null && subDispText != '') {
            arrMenu.push('<div class="ms-core-menu-sublabel ms-metadata" unselectable="on">');
            arrMenu.push(STSHtmlEncode(subDispText));
            arrMenu.push('</div>');
        }
        arrMenu.push('</a></li>');
        return arrMenu.join('');
    };
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("autofill.js");
    }
}
function ULSlwk() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "autofill.commentedjs";
    return o;
}
function SPClientAutoFill(elmTextId, elmContainerId, fnPopulateAutoFill) {
    this.TextElementId = elmTextId;
    this.AutoFillContainerId = elmContainerId;
    this.AutoFillMenuId = elmContainerId + '_MenuList';
    this.FuncPopulateAutoFill = fnPopulateAutoFill;
    var elmText = document.getElementById(this.TextElementId);
    var elmContainer = document.getElementById(this.AutoFillContainerId);

    elmContainer.setAttribute("InputElementId", this.TextElementId);
    elmText.setAttribute("AutoFillContainerId", this.AutoFillContainerId);
    this.UpdateAutoFillPosition();
    if (fRightToLeft)
        elmContainer.style.right = "-1px";
    else
        elmContainer.style.left = "-1px";
    AddEvtHandler(elmText, "onkeyup", SPClientAutoFill_OnAutoFillTextBoxKeyUp);
    AddEvtHandler(elmText, "onkeydown", SPClientAutoFill_OnAutoFillTextBoxKeyDown);
    SPClientAutoFill.SPClientAutoFillDict[this.TextElementId] = this;
}
function SPClientAutoFill_OnAutoFillMouseOver(e) {
    if (e == null)
        e = window.event;
    var elmTarget = GetEventSrcElement(e);
    var autoFillObj = SPClientAutoFill.GetAutoFillObjFromContainer(elmTarget);

    if (autoFillObj == null)
        return;
    autoFillObj.BlurAutoFill();
}
function SPClientAutoFill_OnAutoFillTextBoxKeyDown(e) {
    if (e == null)
        e = window.event;
    var bCancelEvent = false;
    var keynum = GetEventKeyCode(e);
    var elmInput = GetEventSrcElement(e);
    var autoFillObj = SPClientAutoFill.GetAutoFillObjFromInput(elmInput);

    if (autoFillObj == null)
        return !bCancelEvent;
    var elmAutoFillContainer = document.getElementById(autoFillObj.AutoFillContainerId);

    if (elmAutoFillContainer != null && elmAutoFillContainer.style.display != "none") {
        var elmMenu = document.getElementById(autoFillObj.AutoFillMenuId);

        if (elmMenu != null) {
            var elmFirstOption = null;
            var allLinks = elmMenu.getElementsByTagName('a');

            if (allLinks != null && allLinks.length > 0)
                elmFirstOption = allLinks[0].parentNode;
            if (keynum == 40 || keynum == 9) {
                bCancelEvent = true;
                autoFillObj.FocusAutoFill();
            }
            else if (keynum == 13) {
                bCancelEvent = true;
                if (elmFirstOption != null)
                    autoFillObj.SelectAutoFillOption(elmFirstOption);
            }
        }
    }
    if (bCancelEvent)
        CancelEvent(e);
    return !bCancelEvent;
}
function SPClientAutoFill_OnAutoFillTextBoxKeyUp(e) {
    if (e == null)
        e = window.event;
    var elmInput = GetEventSrcElement(e);

    if (elmInput == null)
        return;
    var autoFillObj = SPClientAutoFill.GetAutoFillObjFromInput(elmInput);

    if (autoFillObj != null) {
        if (autoFillObj.AutoFillCallbackTimeoutID != '') {
            clearTimeout(parseInt(autoFillObj.AutoFillCallbackTimeoutID));
            autoFillObj.AutoFillCallbackTimeoutID = '';
        }
        autoFillObj.UpdateAutoFillPosition();
        var idTimeOut = setTimeout(function() {
        ULSlwk:
            ;
            var inputValue = elmInput.value;
            var inputLength = inputValue.length;

            if (inputLength >= autoFillObj.AutoFillMinTextLength)
                autoFillObj.FuncPopulateAutoFill(elmInput);
        }, autoFillObj.AutoFillTimeout);

        autoFillObj.AutoFillCallbackTimeoutID = String(idTimeOut);
    }
}
function SPClientAutoFill_OnAutoFillOptionClick(e) {
    if (e == null)
        e = window.event;
    var elmTarget = GetEventSrcElement(e);
    var elmMenuItem = SPClientAutoFill.GetAutoFillMenuItemFromOption(elmTarget);

    if (elmMenuItem == null)
        return;
    var objAutoFill = SPClientAutoFill.GetAutoFillObjFromContainer(elmMenuItem);

    if (objAutoFill != null)
        objAutoFill.SelectAutoFillOption(elmMenuItem);
}
function SPClientAutoFill_OnAutoFillOptionKeyDown(e) {
    if (e == null)
        e = window.event;
    var elmLink = GetEventSrcElement(e);
    var objAutoFill = SPClientAutoFill.GetAutoFillObjFromContainer(elmLink);

    if (objAutoFill == null)
        return true;
    var keynum = GetEventKeyCode(e);

    if (keynum == 13) {
        if (elmLink != null)
            objAutoFill.SelectAutoFillOption(elmLink.parentNode);
    }
    else if (keynum == 27) {
        objAutoFill.CloseAutoFill(null);
    }
    else if (e.shiftKey && keynum == 9 || keynum == 38) {
        objAutoFill.UpdateAutoFillMenuFocus(false);
    }
    else if (keynum == 9 || keynum == 40) {
        objAutoFill.UpdateAutoFillMenuFocus(true);
    }
    CancelEvent(e);
    return false;
}
$_global_autofill();
