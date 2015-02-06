function $_global_projectsummary() {
    SP.UI.ProjectSummary = function SP_UI_ProjectSummary() {
        this._controlId = undefined;
        this._control = undefined;
        this._initialized = false;
        this._timeline = undefined;
        this._outerPanel = undefined;
        this._rotatingPanel = undefined;
        this._isRotationPaused = true;
        this._pagingControl = null;
        this._visibleHeadlineNumber = 0;
        this._headlinePanels = [];
        this._rotationsToShow = 0;
        this._webpartChrome = undefined;
        this._countDown = undefined;
        this._animationsEnabled = window.location.href.match(/\?.*\banimation=0\b/i) === null;
        var _this = this;
        var _rotationDelay = 5000;

        this.get_IsRotationPaused = function() {
            return this._isRotationPaused;
        };
        this.set_IsRotationPaused = function(value) {
            if (this._isRotationPaused != value) {
                this._isRotationPaused = value;
                if (!this._isRotationPaused && this._headlinePanels.length <= 1) {
                    this._isRotationPaused = true;
                }
                if (!this._isRotationPaused) {
                    this._rotationsToShow = this._headlinePanels.length;
                    setTimeout(OnRotationTimerEvent, _rotationDelay);
                }
            }
            function OnRotationTimerEvent(projectSummary) {
                if (!_this.get_IsRotationPaused()) {
                    if (!_this._timeline.IsDragging()) {
                        _this.ShowNextHeadline();
                        _this._rotationsToShow--;
                        if (_this._rotationsToShow > 0) {
                            setTimeout(OnRotationTimerEvent, _rotationDelay);
                        }
                        else {
                            _this.set_IsRotationPaused(true);
                        }
                    }
                    else {
                        _this.set_IsRotationPaused(true);
                    }
                }
            }
        };
        var _lastCanvasSize;
        var _timelineParent;
        var _duringResize = false;
        var _timelinePanelDisplay;

        this.Init = function(controlId, outerPanelId, rotatingPanelId, buttonsPanelId, timeline) {
            this._controlId = controlId;
            this._control = $get(controlId);
            this._timeline = timeline;
            this._webpartChrome = _this._control.parentNode.parentNode;
            this._countDown = $get(_this._controlId + "_CountDown");
            Sys.Debug.assert(outerPanelId != null && outerPanelId != '', "The outer panel ID passed to SP.UI.ProjectSummary.Init was null or empty.");
            this._outerPanel = $get(outerPanelId);
            Sys.Debug.assert(this._outerPanel != null, "The outer panel ID passed to SP.UI.ProjectSummary.Init was not found: " + outerPanelId);
            Sys.Debug.assert(rotatingPanelId != null && rotatingPanelId != '', "The rotating panel ID passed to SP.UI.ProjectSummary.Init was null or empty.");
            this._rotatingPanel = $get(rotatingPanelId);
            Sys.Debug.assert(this._rotatingPanel != null, "The rotating panel ID passed to SP.UI.ProjectSummary.Init was not found: " + rotatingPanelId);
            var margin = this._countDown.offsetWidth + "px";
            var edgeMargin = '60px';

            if (XUI.Html.GetDirection() == 'rtl') {
                this._rotatingPanel.parentNode.style.marginRight = margin;
                this._control.style.marginLeft = edgeMargin;
            }
            else {
                this._rotatingPanel.parentNode.style.marginLeft = margin;
                this._control.style.marginRight = edgeMargin;
            }
            if (timeline != null) {
                _timelineParent = $get(timeline.get_parentId());
                timeline.AddEventHandler(SP.UI.Timeline.TimelineControl.RenderEventType.BeforeUpdate, function() {
                    _lastCanvasSize = _timelineParent.firstChild.offsetWidth;
                    if (_timelineParent.parentNode) {
                        var timelinePanel = _timelineParent.parentNode.parentNode;

                        _timelinePanelDisplay = timelinePanel.style.display;
                        timelinePanel.style.display = "block";
                    }
                });
                timeline.AddEventHandler(SP.UI.Timeline.TimelineControl.RenderEventType.AfterUpdate, function() {
                    if (!_duringResize) {
                        if (_timelineParent.firstChild.offsetWidth !== _lastCanvasSize) {
                            _duringResize = true;
                            timeline.ParentResize(function() {
                                _duringResize = false;
                            });
                        }
                        ResizeBasedOnContent(buttonsPanelId);
                    }
                    if (_timelineParent.parentNode) {
                        _timelineParent.parentNode.parentNode.style.display = _timelinePanelDisplay;
                    }
                });
            }
            else {
                ResizeBasedOnContent(buttonsPanelId);
            }
            function ResizeWidth() {
                var timelineWidth = 0;
                var shouldResizeOuterPanel = false;

                _this._control.style.width = "";
                if (_this._timeline != null) {
                    if (_this._timeline.IsFixedWidth()) {
                        shouldResizeOuterPanel = true;
                        var originalDisplay = _timelineParent.style.display;

                        _timelineParent.style.display = "inline-block";
                        {
                            timelineWidth = _timelineParent.offsetWidth + 22;
                            var realWidth = _this._countDown.offsetWidth + timelineWidth;
                            var chromeWidth = _this._webpartChrome.offsetWidth;
                        }
                        _timelineParent.style.display = originalDisplay;
                        if (chromeWidth < realWidth) {
                            _this._webpartChrome.style.width = realWidth + "px";
                            _this._webpartChrome.style.display = "block";
                        }
                    }
                }
                else {
                    shouldResizeOuterPanel = true;
                }
                var panelsWidth = CalculatePanelsWidth();

                if (shouldResizeOuterPanel) {
                    var rotatingPanelsWidth = Math.max(Math.max(timelineWidth, panelsWidth + 10), 696);

                    _this._control.style.width = _this._countDown.offsetWidth + rotatingPanelsWidth + "px";
                }
            }
            function ResizeBasedOnContent(buttonsPanelId) {
                ResizeWidth();
                CalculatePanelsWidth();
                var headlineCaptureFunction = undefined;

                if (!_this._initialized) {
                    headlineCaptureFunction = function(child) {
                        _this._headlinePanels.push(child);
                    };
                }
                SetExplicitHeightBasedOnChildren(_this._rotatingPanel, headlineCaptureFunction);
                SetExplicitHeightBasedOnChildren(_this._outerPanel);
                if (!_this._initialized) {
                    if (_this._headlinePanels.length > 1) {
                        Sys.Debug.assert(buttonsPanelId != null && buttonsPanelId != '', "The buttons panel ID passed to SP.UI.ProjectSummary.Init was null or empty.");
                        var buttonsPanel = $get(buttonsPanelId);

                        Sys.Debug.assert(buttonsPanel != null, "The buttons panel ID passed to SP.UI.ProjectSummary.Init was not found: " + buttonsPanelId);
                        SP.SOD.executeFunc("SP.Init.js", "SP.UI.PagingControl", function() {
                            var pagingControl = new SP.UI.PagingControl(buttonsPanelId);

                            pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.prev, SP.UI.PagingControl.ButtonState.disabled);
                            pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.next, SP.UI.PagingControl.ButtonState.enabled);
                            pagingControl.onPrev = function() {
                                _this.set_IsRotationPaused(true);
                                _this.ShowPreviousHeadline();
                            };
                            pagingControl.onNext = function() {
                                _this.set_IsRotationPaused(true);
                                _this.ShowNextHeadline();
                            };
                            buttonsPanel.innerHTML = pagingControl.render(null);
                            pagingControl.postRender();
                            _this._pagingControl = pagingControl;
                        });
                    }
                    _this.set_IsRotationPaused(!_this._animationsEnabled);
                    SP.Portal.JsApi.ExecuteWithJsApiLoaded(function() {
                        SP.Portal.JsApi.ProjectSummary.WrapImplementationInApiAndMarkInitComplete(_this);
                    });
                    _this._initialized = true;
                }
            }
            function CalculatePanelsWidth() {
                var latePanel = $get(_this._controlId + "_LatePanel");
                var upcomingPanel = $get(_this._controlId + "_UpcomingPanel");
                var parent;

                if (latePanel) {
                    parent = latePanel.parentNode.parentNode;
                }
                else if (upcomingPanel) {
                    parent = upcomingPanel.parentNode.parentNode;
                }
                else {
                    return 0;
                }
                var parentDisplay = parent.style.display;

                parent.style.display = "block";
                var avaliableWidth = parent.offsetWidth;

                parent.style.display = parentDisplay;
                var columnSize = 262;
                var avaliableColumns = Math.floor(avaliableWidth / columnSize);
                var lateColumns = 0;
                var upcomingColumns = 0;

                if (latePanel && upcomingPanel) {
                    if ((avaliableColumns & 1) == 0) {
                        lateColumns = avaliableColumns / 2;
                        upcomingColumns = avaliableColumns / 2;
                    }
                    else {
                        lateColumns = (avaliableColumns - 1) / 2;
                        upcomingColumns = (avaliableColumns - 1) / 2 + 1;
                    }
                }
                else {
                    if (latePanel) {
                        lateColumns = avaliableColumns;
                    }
                    if (upcomingPanel) {
                        upcomingColumns = avaliableColumns;
                    }
                }
                var lateExistingColumns = GetExistingColumnsCount("LatePanel");
                var upcomingExistingColumns = GetExistingColumnsCount("UpcomingPanel");

                if (lateColumns > lateExistingColumns) {
                    if (upcomingColumns < upcomingExistingColumns) {
                        upcomingColumns += Math.min(lateColumns - lateExistingColumns, upcomingExistingColumns - upcomingColumns);
                    }
                    lateColumns = lateExistingColumns;
                }
                if (upcomingColumns > upcomingExistingColumns) {
                    if (lateColumns < lateExistingColumns) {
                        lateColumns += Math.min(upcomingColumns - upcomingExistingColumns, lateExistingColumns - lateColumns);
                    }
                    upcomingColumns = upcomingExistingColumns;
                }
                if (upcomingPanel) {
                    if (upcomingColumns > 0) {
                        upcomingPanel.style.display = '';
                        upcomingPanel.style.width = columnSize * upcomingColumns + "px";
                        ShowColumns("UpcomingPanel", upcomingColumns);
                    }
                    else {
                        upcomingPanel.style.display = 'none';
                    }
                }
                if (latePanel) {
                    if (lateColumns > 0) {
                        latePanel.style.display = '';
                        latePanel.style.width = columnSize * lateColumns + "px";
                        ShowColumns("LatePanel", lateColumns);
                    }
                    else {
                        latePanel.style.display = 'none';
                    }
                }
                if (latePanel && upcomingPanel) {
                    if (XUI.Html.GetDirection() == 'rtl') {
                        upcomingPanel.style.marginRight = latePanel.style.width;
                    }
                    else {
                        upcomingPanel.style.marginLeft = latePanel.style.width;
                    }
                }
                return (upcomingColumns + lateColumns) * columnSize;
            }
            function GetExistingColumnsCount(panelInternalName) {
                var columnContainer = $get(_this._controlId + "_" + panelInternalName + "_ColumnsContainer");

                if (columnContainer) {
                    return columnContainer.children.length;
                }
                else {
                    return 0;
                }
            }
            function ShowColumns(panelInternalName, columnsCount) {
                var columnContainer = $get(_this._controlId + "_" + panelInternalName + "_ColumnsContainer");

                if (columnContainer) {
                    for (var idx = 0; idx < columnContainer.children.length; idx++) {
                        if (idx < columnsCount) {
                            columnContainer.children[idx].style.display = "";
                        }
                        else {
                            columnContainer.children[idx].style.display = "none";
                        }
                    }
                }
            }
            function isElement(obj) {
                return window.HTMLElement ? obj instanceof HTMLElement : typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string";
            }
            function SetExplicitHeightBasedOnChildren(element, additionalAction) {
                element.style.height = '';
                var maxHeight = 0;
                var timelinePanel = null;
                var timelineHeight = null;
                var timelinePanelDisplay = null;

                if (_this._timeline) {
                    timelinePanel = ($get(_this._timeline.get_parentId())).parentNode.parentNode;
                    timelineHeight = _this._timeline.GetHeight();
                    if (_this.get_TotalUpcomingItemsCount() + _this.get_TotalLateItemsCount() == 0) {
                        timelineHeight += 27;
                    }
                    else {
                        timelineHeight += 47;
                    }
                    timelinePanelDisplay = timelinePanel.style.display;
                    timelinePanel.style.display = "none";
                    maxHeight = timelineHeight;
                }
                var allChilds = [];

                XUI.Html.DomUtils.ForEachChild(element, function(child) {
                    if (isElement(child)) {
                        var isTimelineContainer = child == timelinePanel;

                        if (!isTimelineContainer) {
                            var display = child.style.display;

                            allChilds[allChilds.length] = child;
                            child._prevDisplay = child.style.display;
                            child.style.display = "block";
                            child._prevOverflow = child.style.overflow;
                            child.style.overflow = "scroll";
                        }
                        else {
                            if (timelineHeight > maxHeight) {
                                maxHeight = timelineHeight;
                            }
                            ;
                            if (additionalAction != null) {
                                additionalAction(child);
                            }
                            ;
                        }
                        ;
                    }
                    ;
                });
                var child = null;

                for (idx = 0; idx < allChilds.length; idx++) {
                    child = allChilds[idx];
                    if (child.scrollHeight > maxHeight) {
                        maxHeight = child.scrollHeight;
                    }
                    ;
                    if (additionalAction != null) {
                        additionalAction(child);
                    }
                    ;
                }
                ;
                for (idx = 0; idx < allChilds.length; idx++) {
                    child = allChilds[idx];
                    child.style.display = child._prevDisplay;
                    child.style.overflow = child._prevOverflow;
                }
                ;
                element.style.height = maxHeight + "px";
            }
            $addHandler(window, 'resize', ResizeWidth);
        };
        this.get_LateItems = function() {
            return GetItemsFromPanel("LatePanel");
        };
        this.get_TotalLateItemsCount = function() {
            return GetItemCount("LatePanel");
        };
        this.get_UpcomingItems = function() {
            return GetItemsFromPanel("UpcomingPanel");
        };
        this.get_TotalUpcomingItemsCount = function() {
            return GetItemCount("UpcomingPanel");
        };
        this.get_PrimaryTaskListLink = function() {
            var taskListLink = $get(_this._controlId + "_TaskListLink");

            if (taskListLink != null) {
                return taskListLink.href;
            }
            else {
                return null;
            }
        };
        this.get_CountDownTextInfo = function() {
            var countDown = $get(_this._controlId + "_CountDown");

            return XUI.Html.GetText(countDown);
        };
        this.get_CountDownDueDate = function() {
            var dueDate = $get(_this._controlId + "_CountDownDueDate");

            if (dueDate) {
                return XUI.Html.GetText(dueDate);
            }
            else {
                return null;
            }
        };
        this.OnHeadlineClicked = function(event) {
            this.set_IsRotationPaused(true);
        };
        this.ShowNextHeadline = function() {
            if (this._headlinePanels.length > 1) {
                var newHeadlineNumber = this._visibleHeadlineNumber + 1;

                if (newHeadlineNumber >= this._headlinePanels.length) {
                    newHeadlineNumber = 0;
                }
                ShowHeadline(this._headlinePanels, this._visibleHeadlineNumber, newHeadlineNumber);
                this._visibleHeadlineNumber = newHeadlineNumber;
            }
        };
        this.ShowPreviousHeadline = function() {
            if (this._headlinePanels.length > 1) {
                var newHeadlineNumber = this._visibleHeadlineNumber - 1;

                if (newHeadlineNumber < 0) {
                    newHeadlineNumber = this._headlinePanels.length - 1;
                }
                ShowHeadline(this._headlinePanels, this._visibleHeadlineNumber, newHeadlineNumber);
                this._visibleHeadlineNumber = newHeadlineNumber;
            }
        };
        function GetItemCount(panelInternalName) {
            var itemCount = $get(_this._controlId + "_" + panelInternalName + "_ItemCount");

            if (itemCount != null) {
                return parseInt(XUI.Html.GetText(itemCount), 10);
            }
            else {
                return null;
            }
        }
        ;
        function GetItemsFromPanel(panelInternalName) {
            var result = [];
            var index = 0;
            var prefix = _this._controlId + "_" + panelInternalName;
            var taskName = $get(prefix + "_TaskName_" + index);

            while (taskName != null) {
                var item = new SP.Portal.JsApi.ProjectSummaryItem();

                item.Name = XUI.Html.GetText(taskName);
                var taskFriendlyDate = $get(prefix + "_TaskFriendlyDate_" + index);

                item.FriendlyDate = XUI.Html.GetText(taskFriendlyDate);
                var taskAssignedTo = $get(prefix + "_TaskAssignedTo_" + index);

                if (taskAssignedTo != null) {
                    item.AssignTo = XUI.Html.GetText(taskAssignedTo);
                }
                result.push(item);
                index++;
                taskName = $get(prefix + "_TaskName_" + index);
            }
            ;
            return result;
        }
        ;
        function ShowHeadline(headlinePanels, oldHeadlineNumber, newHeadlineNumber) {
            Sys.Debug.assert(oldHeadlineNumber != newHeadlineNumber, "The new headline number was the same as the old one in SP.UI.ProjectSummary.ShowHeadline.");
            var elementToHide = headlinePanels[oldHeadlineNumber];
            var elementToShow = headlinePanels[newHeadlineNumber];

            Sys.Debug.assert(elementToShow != null, "The headline to show was not found in SP.UI.ProjectSummary.ShowHeadline.");
            Sys.Debug.assert(elementToHide != null, "The headline to hide was not found in SP.UI.ProjectSummary.ShowHeadline.");
            if (_this._pagingControl) {
                _this._pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.prev, newHeadlineNumber != 0 ? SP.UI.PagingControl.ButtonState.enabled : SP.UI.PagingControl.ButtonState.disabled);
                _this._pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.next, newHeadlineNumber != headlinePanels.length - 1 ? SP.UI.PagingControl.ButtonState.enabled : SP.UI.PagingControl.ButtonState.disabled);
            }
            elementToHide.className = 'ms-psum-headline-hidden';
            elementToShow.className = 'ms-psum-headline-visible';
            if (XUI.Html.GetDirection() == 'rtl') {
                elementToShow.style.right = "0px";
            }
            else {
                elementToShow.style.left = "0px";
            }
            if (_this._animationsEnabled) {
                SetOpacity(elementToShow, 0);
                var finalState = new SPAnimation.State();

                finalState.SetAttribute(SPAnimation.Attribute.Opacity, 1);
                finalState.SetAttribute(SPAnimation.Attribute.PositionX, 0);
                if (elementToShow.parentNode != null && elementToShow.parentNode.style != null) {
                    var o = new SPAnimation.Object(SPAnimation.ID.Content_SlideInFadeInLeft, 0, elementToShow, finalState, function() {
                        if (elementToShow.parentNode) {
                            if (XUI.Html.GetDirection() == 'rtl') {
                                elementToShow.style.right = '';
                            }
                            else {
                                elementToShow.style.left = '';
                            }
                        }
                    });

                    o.RunAnimation();
                }
            }
        }
        ;
    };
    SP.UI.ProjectSummaryMobile = function SP_UI_ProjectSummaryMobile() {
        this._controlId = null;
        var _this = this;

        this.get_IsRotationPaused = function() {
            Sys.Debug.assert(false);
        };
        this.set_IsRotationPaused = function(value) {
            Sys.Debug.assert(false);
        };
        this.ShowNextHeadline = function() {
            Sys.Debug.assert(false);
        };
        this.ShowPreviousHeadline = function() {
            Sys.Debug.assert(false);
        };
        function GetItemsFromPanel(panelInternalName) {
            var result = [];
            var idx = 0;
            var taskNameDiv = null;
            var prefix = _this._controlId + "_" + panelInternalName;

            taskNameDiv = document.getElementById(prefix + "_TaskName_" + idx);
            while (taskNameDiv) {
                var item = new SP.Portal.JsApi.ProjectSummaryItem();

                item.Name = XUI.Html.GetText(taskNameDiv);
                var taskFriendlyDateDiv = document.getElementById(prefix + "_TaskFriendlyDate_" + idx);

                item.FriendlyDate = XUI.Html.GetText(taskFriendlyDateDiv);
                var taskAssignTo = document.getElementById(prefix + "_TaskAssignedTo_" + idx);

                item.AssignTo = XUI.Html.GetText(taskAssignTo);
                result.push(item);
                idx++;
                taskNameDiv = document.getElementById(prefix + "_TaskName_" + idx);
            }
            ;
            return result;
        }
        ;
        function GetItemCount(panelInternalName) {
            var hiddenItemCount = document.getElementById(_this._controlId + "_" + panelInternalName + "_ItemCount");

            if (hiddenItemCount) {
                return parseInt(hiddenItemCount.value, 10);
            }
            else {
                return null;
            }
        }
        ;
        this.Init = function(controlId) {
            SP.Portal.JsApi.ExecuteWithJsApiLoaded(function() {
                SP.Portal.JsApi.ProjectSummary.WrapImplementationInApiAndMarkInitComplete(_this);
            });
            this._controlId = controlId;
        };
        this.get_CountDownTextInfo = function() {
            var textInfo = document.getElementById(_this._controlId + "_Header");

            return XUI.Html.GetText(textInfo);
        };
        this.get_CountDownDueDate = function() {
            var textInfo = document.getElementById(_this._controlId + "_DueMain");

            if (textInfo) {
                return XUI.Html.GetText(textInfo);
            }
            else {
                return null;
            }
        };
        this.get_LateItems = function() {
            return GetItemsFromPanel("LatePanel");
        };
        this.get_TotalLateItemsCount = function() {
            return GetItemCount("LatePanel");
        };
        this.get_UpcomingItems = function() {
            return GetItemsFromPanel("UpcomingPanel");
        };
        this.get_TotalUpcomingItemsCount = function() {
            return GetItemCount("UpcomingPanel");
        };
        this.get_PrimaryTaskListLink = function() {
            var linkTaskList = document.getElementById(_this._controlId + "_TaskList");

            if (linkTaskList) {
                return linkTaskList.href;
            }
            else {
                return null;
            }
        };
    };
    SP.UI.ProjectSummary.ShowEditAggregatePanelDialog = function SP_UI_PrrojectSummary_ShowEditAggregatePanelDialog(title, message, availableListsJson, primaryTaskListDropDownFieldId, selectedListsHiddenFieldId, daysToIncludeHiddenFieldId, daysToIncludeLabelText) {
        Sys.Debug.assert(title != null && title != '');
        Sys.Debug.assert(availableListsJson != null);
        Sys.Debug.assert(selectedListsHiddenFieldId != null);
        Sys.Debug.assert(primaryTaskListDropDownFieldId != null);
        var primaryTaskListDropDown = $get(primaryTaskListDropDownFieldId);

        Sys.Debug.assert(primaryTaskListDropDown != null && primaryTaskListDropDown.options != null);
        var hiddenField = $get(selectedListsHiddenFieldId);

        Sys.Debug.assert(hiddenField != null);
        var daysHiddenField = $get(daysToIncludeHiddenFieldId);
        var primaryTaskListTitle = primaryTaskListDropDown.options.length != 0 ? primaryTaskListDropDown.options[primaryTaskListDropDown.selectedIndex].text : null;
        var listCheckboxes = {};
        var selectedLists = hiddenField.value != null && hiddenField.value != '' ? hiddenField.value.split(',') : [];
        var daysToIncludeInput = null;
        var dialogContents = document.createElement('div');

        dialogContents.style.padding = '15px';
        if (message != null && message != '') {
            var messageDiv = document.createElement('div');

            XUI.Html.SetText(messageDiv, message);
            dialogContents.appendChild(messageDiv);
            var separator = document.createElement('hr');

            separator.width = 1;
            dialogContents.appendChild(separator);
        }
        for (var i = 0; i < availableListsJson.length; i++) {
            var currentList = availableListsJson[i];
            var isPrimaryList = primaryTaskListTitle == currentList.title;
            var listDiv = document.createElement('div');
            var checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
            checkbox.style.marginLeft = '5px';
            checkbox.style.marginRight = '5px';
            if (isPrimaryList) {
                checkbox.checked = true;
                checkbox.disabled = true;
            }
            else {
                listCheckboxes[currentList.url] = checkbox;
            }
            listDiv.appendChild(checkbox);
            var listLabel = document.createElement('label');

            XUI.Html.SetText(listLabel, currentList.title);
            if (isPrimaryList) {
                var additionalText = document.createElement('span');

                XUI.Html.SetText(additionalText, ' - ' + currentList.additionalDescriptiveText);
                additionalText.style.fontStyle = "italic";
                listLabel.appendChild(additionalText);
            }
            listDiv.appendChild(listLabel);
            dialogContents.appendChild(listDiv);
        }
        for (i = 0; i < selectedLists.length; i++) {
            var url = selectedLists[i];

            if (listCheckboxes[url] != null) {
                listCheckboxes[url].checked = true;
            }
        }
        if (daysHiddenField != null) {
            daysToIncludeDiv = document.createElement('div');
            daysToIncludeLabel = document.createElement('label');
            XUI.Html.SetText(daysToIncludeLabel, daysToIncludeLabelText);
            daysToIncludeInput = document.createElement('input');
            daysToIncludeInput.value = daysHiddenField.value;
            daysToIncludeDiv.appendChild(daysToIncludeLabel);
            daysToIncludeDiv.appendChild(daysToIncludeInput);
            dialogContents.appendChild(daysToIncludeDiv);
        }
        var buttonsDiv = document.createElement('div');

        buttonsDiv.style.marginTop = "10px";
        if (XUI.Html.GetDirection() == 'rtl') {
            buttonsDiv.style.textAlign = 'left';
        }
        else {
            buttonsDiv.style.textAlign = 'right';
        }
        var okButton = document.createElement('input');

        okButton.type = 'button';
        okButton.className = 'ms-ButtonHeightWidth';
        okButton.value = SP.Res.okButtonText;
        okButton.style.marginLeft = '5px';
        okButton.style.marginRight = '5px';
        $addHandler(okButton, 'click', function() {
            commonModalDialogClose(SP.UI.DialogResult.OK);
            return false;
        });
        buttonsDiv.appendChild(okButton);
        var cancelButton = document.createElement('input');

        cancelButton.type = 'button';
        cancelButton.className = 'ms-ButtonHeightWidth';
        cancelButton.value = SP.Res.cancelButtonText;
        $addHandler(cancelButton, 'click', function() {
            commonModalDialogClose(SP.UI.DialogResult.Cancel);
            return false;
        });
        buttonsDiv.appendChild(cancelButton);
        dialogContents.appendChild(buttonsDiv);
        var dialogOptions = {
            title: title,
            html: dialogContents,
            dialogReturnValueCallback: function(dialogResult, dialogArgs) {
                if (dialogResult == SP.UI.DialogResult.OK) {
                    var selectedLists = [];

                    for (var url in listCheckboxes) {
                        if (listCheckboxes[url].checked) {
                            selectedLists.push(url);
                        }
                    }
                    hiddenField.value = selectedLists.join(',');
                    if (daysHiddenField != null) {
                        daysHiddenField.value = daysToIncludeInput.value;
                    }
                }
            }
        };

        EnsureScriptFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog', function() {
            SP.UI.ModalDialog.showModalDialog(dialogOptions);
        });
    };
    SP.UI.ProjectSummary.MobileLoadTimeline = function SP_UI_ProjectSummary_MobileLoadTimeline(primaryTaskListId, containerId, viewportId, timelineDatasource) {
        var timeline = new SP.UI.Timeline.TimelineControl();

        timeline.SetToMobileMode();
        timeline.Init(containerId, timelineDatasource);
        timeline.Render();
        var timerId = null;
        var viewport = document.getElementById(viewportId);
        var container = document.getElementById(containerId);
        var moveBar = timeline.HorizontalScrollBarPosition(viewport, container);

        moveBar = parseInt(moveBar);
        viewport.scrollLeft = 0;
        var ScrollSpeedCoefficient = 1.5;

        function FinishAutoScroll() {
            viewport.scrollLeft = moveBar;
            clearTimeout(timerId);
            viewport._prevScrollLeft = viewport.scrollLeft;
            $addHandler(viewport, "scroll", function() {
                if (!viewport.isAutoScrolling) {
                    viewport.isAutoScrolling = true;
                    var delta = viewport.scrollLeft - viewport._prevScrollLeft;

                    viewport._prevScrollLeft = viewport.scrollLeft;
                    viewport.scrollLeft = viewport.scrollLeft - delta + ScrollSpeedCoefficient * delta;
                }
                else {
                    viewport.isAutoScrolling = false;
                }
            });
        }
        function UpdateScroll() {
            if (viewport.scrollLeft < moveBar) {
                var previousValue = viewport.scrollLeft;

                viewport.scrollLeft += 25;
                if (previousValue !== viewport.scrollLeft) {
                    timerId = setTimeout(UpdateScroll, 50);
                }
                else {
                    FinishAutoScroll();
                }
            }
            else {
                FinishAutoScroll();
            }
        }
        UpdateScroll();
    };
    if (typeof Sys != "undefined" && Sys && Sys.Application) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs == "function") {
        SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("projectsummary.js");
    }
}
$_global_projectsummary();
