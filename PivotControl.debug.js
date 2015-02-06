function $_global_pivotcontrol() {
    if (typeof window.ClientPivotControl == "undefined") {
        window.ClientPivotControl = function(controlProps) {
            this.AllOptions = [];
            if (controlProps != null) {
                this.PivotParentId = controlProps.PivotParentId;
                this.PivotContainerId = controlProps.PivotContainerId;
                if (typeof controlProps.AllOptions != "undefined")
                    this.AllOptions = controlProps.AllOptions;
                if (typeof controlProps.SurfacedPivotCount == "number")
                    this.SurfacedPivotCount = Number(controlProps.SurfacedPivotCount);
                if (typeof controlProps.ShowMenuIcons != "undefined")
                    this.ShowMenuIcons = Boolean(controlProps.ShowMenuIcons);
                if (typeof controlProps.ShowMenuClose != "undefined")
                    this.ShowMenuClose = controlProps.ShowMenuClose;
                if (typeof controlProps.ShowMenuCheckboxes != "undefined")
                    this.ShowMenuCheckboxes = controlProps.ShowMenuCheckboxes;
                if (typeof controlProps.Width != "undefined")
                    this.Width = controlProps.Width;
            }
            else {
                this.PivotContainerId = 'clientPivotControl' + ClientPivotControl.PivotControlCount.toString();
            }
            this.OverflowDotId = this.PivotContainerId + '_overflow';
            this.OverflowMenuId = this.PivotContainerId + '_menu';
            ClientPivotControl.PivotControlCount++;
            ClientPivotControl.PivotControlDict[this.PivotContainerId] = this;
        };
        ClientPivotControl.PivotControlDict = [];
        ClientPivotControl.PivotControlCount = 0;
        ClientPivotControl.prototype = {
            PivotParentId: '',
            PivotContainerId: '',
            OverflowDotId: '',
            OverflowMenuId: '',
            AllOptions: [],
            SurfacedPivotCount: 3,
            ShowMenuIcons: false,
            ShowMenuClose: false,
            ShowMenuCheckboxes: false,
            OverflowMenuScript: '',
            Width: '',
            SurfacedOptions: [],
            OverflowOptions: [],
            SelectedOptionIdx: -1,
            AddMenuOption: function(option) {
                if (ClientPivotControl.IsMenuOption(option) || ClientPivotControl.IsMenuCheckOption(option))
                    this.AllOptions.push(option);
            },
            AddMenuSeparator: function() {
                if (this.AllOptions.length == 0)
                    return;
                var lastItem = this.AllOptions[this.AllOptions.length - 1];

                if (ClientPivotControl.IsMenuSeparator(lastItem))
                    return;
                this.AllOptions.push(new ClientPivotControlMenuSeparator());
            },
            Render: function() {
                if (this.PivotParentId == null || this.PivotParentId == '')
                    return;
                var parentElt = document.getElementById(this.PivotParentId);

                if (parentElt == null)
                    return;
                parentElt.innerHTML = this.RenderAsString();
                if (this.Width != '')
                    parentElt.style.width = this.Width;
            },
            RenderAsString: function() {
                this.ProcessAllMenuItems();
                this.EnsureSelectedOption();
                var surfacedCount = this.SurfacedOptions.length;

                if (surfacedCount == 0)
                    return '';
                var result = [];

                result.push('<span class="ms-pivotControl-container" id="');
                result.push(STSHtmlEncode(this.PivotContainerId));
                result.push('">');
                for (var idx = 0; idx < surfacedCount; idx++)
                    result.push(this.RenderSurfacedOption(idx));
                if (this.ShouldShowOverflowMenuLink())
                    result.push(this.RenderOverflowMenuLink());
                result.push("</span>");
                return result.join('');
            },
            ShouldShowOverflowMenuLink: function() {
                return this.OverflowOptions.length > 0 || this.OverflowMenuScript != null && this.OverflowMenuScript != '';
            },
            ShowOverflowMenu: function() {
                var numOpts = this.OverflowOptions.length;
                var dotElt = document.getElementById(this.OverflowDotId);

                if (dotElt == null || numOpts == 0)
                    return;
                MenuHtc_hide();
                var menu = CMenu(this.OverflowMenuId);

                for (var idx = 0; idx < numOpts; idx++) {
                    var opt = this.OverflowOptions[idx];
                    var isCheckOption = ClientPivotControl.IsMenuCheckOption(opt);

                    if (ClientPivotControl.IsMenuOption(opt) || isCheckOption) {
                        var addedOption = CAMOpt(menu, opt.DisplayText, opt.OnClickAction, opt.ImageUrl, opt.ImageAltText, String(100 * idx), opt.Description);

                        addedOption.id = 'ID_OverflowOption_' + String(idx);
                        if (isCheckOption) {
                            addedOption.setAttribute('checked', opt.Checked);
                        }
                    }
                    else if (ClientPivotControl.IsMenuSeparator(opt)) {
                        CAMSep(menu);
                    }
                }
                if (!this.ShowMenuIcons)
                    menu.setAttribute("hideicons", "true");
                var oldFlipValue = Boolean(document.body['WZ_ATTRIB_FLIPPED']);

                document.body['WZ_ATTRIB_FLIPPED'] = false;
                OMenu(menu, dotElt, null, false, -2, this.ShowMenuClose, this.ShowMenuCheckboxes);
                document.body['WZ_ATTRIB_FLIPPED'] = oldFlipValue;
            },
            RenderSurfacedOption: function(optIdx) {
                if (optIdx < 0 || optIdx >= this.SurfacedOptions.length)
                    return '';
                var surfaceOpt = this.SurfacedOptions[optIdx];
                var className = 'ms-pivotControl-surfacedOpt';

                if (surfaceOpt.SelectedOption)
                    className += '-selected';
                var optRes = [];

                optRes.push('<a class="');
                optRes.push(className);
                optRes.push('" href="#" id="');
                optRes.push(STSHtmlEncode(this.PivotContainerId + '_surfaceopt' + optIdx.toString()));
                optRes.push('" onclick="');
                optRes.push(STSHtmlEncode(surfaceOpt.OnClickAction));
                optRes.push(' return false;" alt="');
                optRes.push(STSHtmlEncode(surfaceOpt.DisplayText));
                optRes.push('" >');
                optRes.push(STSHtmlEncode(surfaceOpt.DisplayText));
                optRes.push('</a>');
                return optRes.join('');
            },
            RenderOverflowMenuLink: function() {
                var onClickAction = this.OverflowMenuScript;

                if (onClickAction == null || onClickAction == '')
                    onClickAction = 'ClientPivotControlExpandOverflowMenu(event);';
                var menuRes = [];

                menuRes.push('<span class="ms-pivotControl-overflowSpan" data-containerId="');
                menuRes.push(STSHtmlEncode(this.PivotContainerId));
                menuRes.push('" id="');
                menuRes.push(STSHtmlEncode(this.OverflowDotId));
                menuRes.push('" title="');
                menuRes.push(STSHtmlEncode(Strings.STS.L_ClientPivotControlOverflowMenuAlt));
                menuRes.push('" ><a class="ms-pivotControl-overflowDot" href="#" onclick="');
                menuRes.push(STSHtmlEncode(onClickAction));
                menuRes.push('" alt="');
                menuRes.push(STSHtmlEncode(Strings.STS.L_ClientPivotControlOverflowMenuAlt));
                menuRes.push('" >');
                menuRes.push('<img class="ms-ellipsis-icon" src="');
                menuRes.push(GetThemedImageUrl('spcommon.png'));
                menuRes.push('" alt="');
                menuRes.push(STSHtmlEncode(Strings.STS.L_OpenMenu));
                menuRes.push('" /></a></span>');
                return menuRes.join('');
            },
            ProcessAllMenuItems: function() {
                if (this.SurfacedPivotCount < 0)
                    this.SurfacedPivotCount = 1;
                this.SurfacedOptions = [];
                this.OverflowOptions = [];
                var allOptionCount = this.AllOptions.length;

                if (allOptionCount == 0)
                    return;
                var optIdx = 0;
                var trimOpts = [];

                for (; optIdx < allOptionCount; optIdx++) {
                    var sOpt = this.AllOptions[optIdx];

                    if (ClientPivotControl.IsMenuSeparator(sOpt))
                        continue;
                    if (trimOpts.length == this.SurfacedPivotCount)
                        break;
                    trimOpts.push(sOpt);
                }
                this.SurfacedOptions = this.SurfacedOptions.concat(trimOpts);
                if (optIdx != allOptionCount) {
                    for (; optIdx < allOptionCount; optIdx++)
                        this.OverflowOptions.push(this.AllOptions[optIdx]);
                    var lastMenuOpt = this.OverflowOptions[this.OverflowOptions.length - 1];

                    if (ClientPivotControl.IsMenuSeparator(lastMenuOpt))
                        this.OverflowOptions.pop();
                }
            },
            EnsureSelectedOption: function() {
                this.SelectedOptionIdx = -1;
                var surfacedCount = this.SurfacedOptions.length;
                var overflowCount = this.OverflowOptions.length;

                if (surfacedCount == 0 && overflowCount == 0)
                    return;
                for (var surIdx = 0; surIdx < this.SurfacedOptions.length; surIdx++) {
                    var surfacedOpt = this.SurfacedOptions[surIdx];

                    if (Boolean(surfacedOpt.SelectedOption) && this.SelectedOptionIdx == -1)
                        this.SelectedOptionIdx = surIdx;
                    else
                        surfacedOpt.SelectedOption = false;
                }
                for (var overIdx = 0; overIdx < this.OverflowOptions.length; overIdx++) {
                    var overflowOpt = this.OverflowOptions[overIdx];

                    if (Boolean(overflowOpt.SelectedOption) && this.SelectedOptionIdx == -1) {
                        this.SelectedOptionIdx = this.SurfacedOptions.length;
                    }
                    else {
                        if (ClientPivotControl.IsMenuOption(overflowOpt))
                            overflowOpt.SelectedOption = false;
                    }
                }
                if (this.SelectedOptionIdx == -1) {
                    this.SelectedOptionIdx = 0;
                    this.SurfacedOptions[0].SelectedOption = true;
                }
                else if (this.SelectedOptionIdx == this.SurfacedOptions.length) {
                    var shiftOpt = this.SurfacedOptions.pop();
                    var oldOverflowOpts = this.OverflowOptions;

                    this.OverflowOptions = [];
                    this.OverflowOptions.push(shiftOpt);
                    for (var i = 0; i < oldOverflowOpts.length; i++) {
                        var overflow = oldOverflowOpts[i];

                        if (Boolean(overflow.SelectedOption))
                            this.SurfacedOptions.push(overflow);
                        else
                            this.OverflowOptions.push(overflow);
                    }
                    this.SelectedOptionIdx = this.SurfacedOptions.length - 1;
                }
            }
        };
        window.ClientPivotControlExpandOverflowMenu = function(evt) {
            if (evt == null)
                evt = window.event;
            var elm = GetEventSrcElement(evt);

            while (elm != null && elm.getAttribute('data-containerId') == null)
                elm = elm.parentNode;
            if (elm == null)
                return;
            var menuContext;

            try {
                menuContext = typeof CMenu;
            }
            catch (e) {
                menuContext = "undefined";
            }
            EnsureScript("core.js", menuContext, function() {
                var pivotCtrl = ClientPivotControl.PivotControlDict[elm.getAttribute('data-containerId')];

                if (pivotCtrl != null)
                    pivotCtrl.ShowOverflowMenu();
            });
            if (evt != null)
                CancelEvent(evt);
        };
        window.ClientPivotControl_InitStandaloneControlWrapper = function(controlProps) {
            if (controlProps == null)
                return;
            var pivot = new ClientPivotControl(controlProps);

            pivot.Render();
        };
        ClientPivotControl.MenuOptionType = {
            MenuOption: 1,
            MenuSeparator: 2,
            MenuCheckOption: 3
        };
        ClientPivotControl.IsMenuOption = function(menuOpt) {
            return menuOpt != null && menuOpt.MenuOptionType == ClientPivotControl.MenuOptionType.MenuOption;
        };
        ClientPivotControl.IsMenuCheckOption = function(menuOpt) {
            return menuOpt != null && menuOpt.MenuOptionType == ClientPivotControl.MenuOptionType.MenuCheckOption;
        };
        ClientPivotControl.IsMenuSeparator = function(menuOpt) {
            return menuOpt != null && menuOpt.MenuOptionType == ClientPivotControl.MenuOptionType.MenuSeparator;
        };
        window.ClientPivotControlMenuItem = function() {
        };
        ClientPivotControlMenuItem.prototype = {
            MenuOptionType: 0
        };
        window.ClientPivotControlMenuOption = function() {
            this.MenuOptionType = ClientPivotControl.MenuOptionType.MenuOption;
        };
        ClientPivotControlMenuOption.prototype = new ClientPivotControlMenuItem();
        ClientPivotControlMenuOption.prototype.DisplayText = '';
        ClientPivotControlMenuOption.prototype.Description = '';
        ClientPivotControlMenuOption.prototype.OnClickAction = '';
        ClientPivotControlMenuOption.prototype.ImageUrl = '';
        ClientPivotControlMenuOption.prototype.ImageAltText = '';
        ClientPivotControlMenuOption.prototype.SelectedOption = false;
        window.ClientPivotControlMenuSeparator = function() {
            this.MenuOptionType = ClientPivotControl.MenuOptionType.MenuSeparator;
        };
        ClientPivotControlMenuSeparator.prototype = new ClientPivotControlMenuItem();
        window.ClientPivotControlMenuCheckOption = function() {
            this.MenuOptionType = ClientPivotControl.MenuOptionType.MenuCheckOption;
        };
        ClientPivotControlMenuCheckOption.prototype = new ClientPivotControlMenuItem();
        ClientPivotControlMenuCheckOption.prototype.Checked = false;
    }
    if (typeof Sys != 'undefined' && Sys != null && Sys.Application != null)
        Sys.Application.notifyScriptLoaded();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == 'function')
        NotifyScriptLoadedAndExecuteWaitingJobs("pivotcontrol.js");
}
$_global_pivotcontrol();
