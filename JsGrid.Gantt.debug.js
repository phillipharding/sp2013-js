function $_global_jsgrid_gantt() {
    SP.JsGrid.Internal.GanttPane = function(parentNode, objBag, fnScrollVerticallyByTouch, ganttDrawImpl, paneSize) {
        var CONST_minLineA = 12;
        var CONST_minLineNA = 4;
        var CONST_maxViewWidth = 10000;
        var CONST_nonHomogZone = 30;
        var CONST_graceUnits = 1;
        var CONST_focusPct = 1 / 4;
        var timelineSurface, barSurface, scrollBarParent, verticalDelimiterDivs = [], unusedSurface, todayLineDiv;
        var intDelegateMgr = objBag.intDelegateMgr;
        var barHeight = 12;
        var rowHeight = barHeight + 3;
        var rows = [];
        var lastClientSize = {
            width: -1,
            height: -1
        };
        var drawnLinks = [];
        var eventSinks;
        var paneConverter;
        var operationalUtil;
        var _this = this;
        var dateRange, zoomLevel;
        var barStyles;
        var bGanttMovingEnabled, bGanttResizingEnabled;
        var fnGetGanttBarStyleIds, fnRenderGanttRow, fnGetGanttBarDate, fnGetPredecessors;
        var fieldKeyRedrawFilter;
        var bViewHasBeenSet;
        var bProgrammaticScroll;
        var timeScale = new SP.JsGrid.TimeScale(objBag.parentNode, objBag.styleMgr.timescaleTierStyle, objBag.RTL, objBag.jsGridParams, 0);

        CreateHtmlElements();
        var roundTime;
        var scrollableDateRange;
        var headerHeight = 0;
        var focusDate;
        var barDrawingObject = new BarDrawingObject();
        var minDrawnDate, maxDrawnDate;
        var rowRenderQueue = new SP.Utilities.Set();
        var fnReleaseHanders = SetUpPaneMouseHandlers();
        var ShapeFlag = {
            CenterPoint: 0x01,
            LLeft: 0x02,
            LCenter: 0x04,
            LRight: 0x08,
            RLeft: 0x10,
            RCenter: 0x20,
            RRight: 0x40
        };
        var _shapePositionInfo = [ShapeFlag.LLeft | ShapeFlag.RRight, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.LRight | ShapeFlag.RLeft, ShapeFlag.LRight | ShapeFlag.RLeft, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.CenterPoint | ShapeFlag.LCenter | ShapeFlag.RCenter, ShapeFlag.LLeft | ShapeFlag.RCenter, ShapeFlag.LCenter | ShapeFlag.RRight];

        ganttDrawImpl.Init(barSurface, paneSize);
        var horizScrollBar = new SP.JsGrid.Internal.ScrollBar(SP.JsGrid.Internal.ScrollBar.BarType.Horizontal, scrollBarParent, false, {
            itemSize: 1,
            itemCount: 1,
            physicalViewportSize: 100,
            scrollbarSize: 100
        }, objBag.styleMgr.scrollBarStyle, objBag.RTL.bEnabled, objBag);

        horizScrollBar.SetOnScroll(OnHorizontalScroll);
        this.Id = SP.JsGrid.PaneId.Gantt;
        this.SetView = function(posConverter, pOperationalUtil, ganttParams) {
        ULSrd5:
            ;
            bViewHasBeenSet = true;
            operationalUtil = pOperationalUtil;
            paneConverter = MakePaneConverter(posConverter);
            dateRange = ganttParams.dateRange;
            barStyles = ganttParams.ganttBarStyles;
            fnGetGanttBarStyleIds = ganttParams.fnGetGanttBarStyleIds;
            fnRenderGanttRow = ganttParams.fnRenderGanttRow;
            fnGetGanttBarDate = ganttParams.fnGetGanttBarDate;
            fnGetPredecessors = ganttParams.fnGetPredecessors;
            focusDate = dateRange[0];
            SetZoomLevelInternal(ganttParams.ganttZoomLevel);
            minDrawnDate = dateRange[0];
            maxDrawnDate = dateRange[1];
            if (ganttParams.fieldKeyRedrawFilter != null && ganttParams.fieldKeyRedrawFilter.length > 0) {
                fieldKeyRedrawFilter = new SP.Utilities.Set();
                fieldKeyRedrawFilter.AddArray(ganttParams.fieldKeyRedrawFilter);
            }
            else {
                fieldKeyRedrawFilter = null;
            }
        };
        this.SetEventSinks = function(evSinks) {
        ULSrd5:
            ;
            eventSinks = evSinks;
        };
        this.GetZoomLevel = function() {
        ULSrd5:
            ;
            return zoomLevel;
        };
        this.SetZoomLevel = function(newLevel) {
        ULSrd5:
            ;
            SetZoomLevelInternal(newLevel);
        };
        this.GetFocusDate = function() {
        ULSrd5:
            ;
            return focusDate;
        };
        this.SetFocusDate = function(newFocusDate) {
        ULSrd5:
            ;
            if (focusDate != null && focusDate.getTime() != newFocusDate.getTime()) {
                focusDate = newFocusDate;
                UpdateScrollbarPosition();
                RedrawTimescale();
                ShiftTasksAndLinksHorizontally();
            }
        };
        this.GetMinHeaderHeight = function() {
        ULSrd5:
            ;
            return timeScale.GetMinHeight();
        };
        this.SetHeaderHeight = function(newHeight) {
        ULSrd5:
            ;
            var toSet = Math.max(this.GetMinHeaderHeight(), newHeight);

            if (headerHeight != toSet) {
                headerHeight = toSet;
            }
        };
        this.GetMinRowHeight = function() {
        ULSrd5:
            ;
            return rowHeight;
        };
        this.SetRowHeight = function(newHeight) {
        ULSrd5:
            ;
            var toSet = Math.max(barHeight + 3, newHeight);

            if (rowHeight != toSet) {
                rowHeight = toSet;
            }
        };
        this.Dispose = function() {
        ULSrd5:
            ;
            fnReleaseHanders();
            verticalDelimiterDivs = (todayLineDiv = null);
            horizScrollBar.Dispose();
        };
        this.SpliceRows = function(delPos, delCount, insPos, insElements, bCausesKeyPosMappingChange) {
        ULSrd5:
            ;
            var i;

            if (delPos != null && delCount != 0) {
                for (i = delPos; i < delPos + delCount; ++i) {
                    DisposeGanttRow(rows[i]);
                }
                TranslateTaskVPAtAndBelow(delPos + delCount, -delCount);
                rows.splice(delPos, delCount);
            }
            var insCount = insElements.length;

            if (insPos != null && insCount != 0) {
                var newRows = new Array(insCount);

                for (i = 0; i < insCount; i++) {
                    newRows[i] = MakeGanttRow(insPos + i, insElements[i]);
                }
                TranslateTaskVPAtAndBelow(insPos, insCount);
                Array.prototype.splice.apply(rows, [insPos, 0].concat(newRows));
            }
            RedrawAllLinks();
            CheckForIncreasedDateRange();
            AdjustUnusedSurface();
        };
        this.RenderRows = function(toRender) {
        ULSrd5:
            ;
            for (var relRowIdx in toRender) {
                relRowIdx = +relRowIdx;
                DisposeGanttRow(rows[relRowIdx]);
                rows[relRowIdx] = MakeGanttRow(relRowIdx, toRender[relRowIdx]);
            }
            RedrawAllLinks();
            CheckForIncreasedDateRange();
        };
        this.NotifyUpdateProperty = function(recordKey, fieldKey, bHighlightChange, optPropUpdate, validationState, changeKey) {
        ULSrd5:
            ;
            if (validationState != SP.JsGrid.ValidationState.Valid) {
                return;
            }
            if (fieldKeyRedrawFilter != null && !fieldKeyRedrawFilter.Contains(fieldKey)) {
                return;
            }
            rowRenderQueue.Add(recordKey);
            SP.Internal.JS.CoalesceFunctionCalls('ganttpropupd', NotifyUpdatePropertyQueued);
            function NotifyUpdatePropertyQueued() {
            ULSrd5:
                ;
                var toRender = {};

                for (var recordKey in rowRenderQueue.GetCollection()) {
                    if (paneConverter.IsRecordOnScreen(recordKey)) {
                        var relRowIdx = paneConverter.RecordKeyToRelRowIdx(recordKey);

                        if (relRowIdx != null) {
                            toRender[relRowIdx] = rows[relRowIdx].record;
                        }
                    }
                }
                _this.RenderRows(toRender);
                rowRenderQueue.Clear();
            }
        };
        this.OnResize = function() {
        ULSrd5:
            ;
            if (bViewHasBeenSet) {
                timelineSurface.style.height = headerHeight + 'px';
                var newClientSize = {
                    width: paneSize.GetWidth(),
                    height: paneSize.GetHeight()
                };

                if (newClientSize.width != lastClientSize.width) {
                    UpdateScrollbar();
                    RedrawTimescale();
                    ShiftTasksAndLinksHorizontally();
                }
                if (newClientSize.height != lastClientSize.height) {
                    AdjustUnusedSurface();
                }
                lastClientSize = newClientSize;
                ganttDrawImpl.OnResize();
            }
        };
        this.ExecuteTouchAction = null;
        this.ShouldUpdateTouchStartPosition = null;
        this.ScrollVerticallyByTouch = fnScrollVerticallyByTouch;
        this.ScrollHorizontallyByTouch = function(bScrollLeft) {
        ULSrd5:
            ;
            if (bScrollLeft) {
                horizScrollBar.ScrollUpByOne();
            }
            else {
                horizScrollBar.ScrollDownByOne();
            }
        };
        function AdjustUnusedSurface() {
        ULSrd5:
            ;
            var workingArea = paneSize.GetHeight() - headerHeight - 1 - SP.Internal.ScrollBar.GetSystemScrollBarThickness();
            var barSurfaceHeight = Math.max(0, Math.min(rows.length * rowHeight - 1, workingArea));
            var unusedSurfaceHeight = Math.max(0, workingArea - barSurfaceHeight - 1);

            barSurface.style.height = barSurfaceHeight + 'px';
            if (unusedSurfaceHeight == 0) {
                unusedSurface.style.display = 'none';
            }
            else {
                unusedSurface.style.height = unusedSurfaceHeight + 'px';
                unusedSurface.style.display = '';
            }
        }
        function CreateHtmlElements() {
        ULSrd5:
            ;
            parentNode.style.verticalAlign = 'top';
            timelineSurface = document.createElement('div');
            timelineSurface.style.cssText = 'overflow:hidden;position:relative;border-bottom:1px solid ' + objBag.styleMgr.timescaleTierStyle.outerBorderColor;
            parentNode.appendChild(timelineSurface);
            barSurface = document.createElement('div');
            barSurface.style.cssText = 'overflow:hidden;position:relative';
            parentNode.appendChild(barSurface);
            unusedSurface = document.createElement('div');
            unusedSurface.style.cssText = 'overflow:hidden;position:relative;background:' + objBag.styleMgr.gridPaneStyle.backgroundColor + ';border-top:1px solid ' + objBag.styleMgr.gridPaneStyle.horizontalBorderColor;
            parentNode.appendChild(unusedSurface);
            scrollBarParent = document.createElement('div');
            scrollBarParent.style.cssText = 'overflow:hidden;position:relative;height:' + SP.Internal.ScrollBar.GetSystemScrollBarThickness() + 'px';
            parentNode.appendChild(scrollBarParent);
        }
        function SetZoomLevelInternal(newLevel) {
        ULSrd5:
            ;
            if (newLevel >= 0 && newLevel <= 9) {
                zoomLevel = newLevel;
                timeScale.SetZoomLevel(zoomLevel);
                roundTime = timeScale.RetrieveRoundTimeObj(zoomLevel);
                scrollableDateRange = RecalcScrollableDateRange();
                UpdateScrollbar();
                RedrawTimescale();
                RescaleTasksAndLinks();
            }
        }
        function CheckForIncreasedDateRange() {
        ULSrd5:
            ;
            if (minDrawnDate < dateRange[0] || maxDrawnDate > dateRange[1]) {
                dateRange = [minDrawnDate, maxDrawnDate];
                scrollableDateRange = RecalcScrollableDateRange();
                UpdateScrollbar();
            }
        }
        function MakeLinkObj(fromKey, toKey, linkType) {
        ULSrd5:
            ;
            var key = fromKey + '&' + toKey + '&' + linkType;

            return {
                key: key,
                fromKey: fromKey,
                toKey: toKey,
                linkType: linkType
            };
        }
        function MakePaneConverter(posConverter) {
        ULSrd5:
            ;
            return {
                RecordKeyToRelRowIdx: function(recordKey) {
                ULSrd5:
                    ;
                    return posConverter.RecordKeyToRelViewIdx(recordKey);
                },
                IsRecordOnScreen: function(recordKey) {
                ULSrd5:
                    ;
                    return posConverter.IsRecordOnScreen(recordKey);
                }
            };
        }
        function IsRowInPane(relRowIdx) {
        ULSrd5:
            ;
            return relRowIdx >= 0 && relRowIdx < rows.length;
        }
        function DateToXCoord(date) {
        ULSrd5:
            ;
            return timeScale.DateToAbsXCoord(roundTime.RoundForGanttDisplay(SP.DateTimeUtil.IntlDate.createFromJsUtcDate(date, _spRegionalSettings.calendarType)));
        }
        function ComputeBarRowAndHeight(row, shape) {
        ULSrd5:
            ;
            var r = {
                barheight: 0,
                bartop: row * rowHeight + Math.floor((rowHeight - barHeight) / 2)
            };

            r.areatop = r.bartop;
            var barShape = SP.JsGrid.Internal.GanttPane.BarShape;

            switch (shape) {
            case barShape.TopHalf:
                r.barheight = Math.ceil(barHeight / 2) - 1;
                break;
            case barShape.MidHalf:
                r.barheight = Math.ceil(barHeight / 2) - 1;
                r.bartop += Math.floor((barHeight - r.barheight) / 2);
                break;
            case barShape.BottomHalf:
                r.barheight = Math.ceil(barHeight / 2) - 1;
                r.bartop += Math.floor(barHeight / 2);
                break;
            case barShape.TopLine:
                r.barheight = 1;
                break;
            case barShape.MidLine:
                r.barheight = 1;
                r.bartop += Math.floor((barHeight - 1) / 2);
                break;
            case barShape.BottomLine:
                r.barheight = 1;
                r.bartop += barHeight - 2;
                break;
            case barShape.Full:
            default:
                r.barheight = barHeight - 1;
                break;
            }
            return r;
        }
        function MakeGanttRow(relRowIdx, record) {
        ULSrd5:
            ;
            if (record == SP.JsGrid.Internal.LoadErrorState) {
                record = null;
            }
            var row = {
                record: record,
                virtPrims: []
            };

            if (record != null && !record.bIsNewRow) {
                row.virtPrims = DrawTaskVP(relRowIdx, row);
            }
            return row;
        }
        function DisposeGanttRow(ganttRow) {
        ULSrd5:
            ;
            var vps = ganttRow.virtPrims;

            for (var i in vps) {
                vps[i].Dispose();
            }
        }
        function BarDrawingObject() {
            var barCount, virtPrims, relRowIdx, row;
            var drawBarFlagsEnum = SP.JsGrid.GanttDrawBarFlags;

            this.Init = function(relRowIdx_, row_) {
            ULSrd5:
                ;
                barCount = 0;
                virtPrims = [];
                relRowIdx = relRowIdx_;
                row = row_;
                row.leftLinkX = Number.MAX_VALUE;
                row.rightLinkX = Number.MIN_VALUE;
                row.linkedBarStyleShape = SP.JsGrid.Internal.GanttPane.BarShape.Full;
            };
            this.GetVirtualPrimitives = function() {
            ULSrd5:
                ;
                return virtPrims;
            };
            this.externalAPI = {
                DrawBar: DrawBar,
                DrawBarByStyle: DrawBarByStyle
            };
            function DrawBarByStyle(beginDate, endDate, barStyle, drawBarFlags) {
            ULSrd5:
                ;
                if (beginDate != null && endDate != null && beginDate > endDate) {
                    return;
                }
                var drawResults = DrawBarVP(relRowIdx, row, beginDate && DateToXCoord(beginDate), endDate && DateToXCoord(endDate), barStyle);

                virtPrims = virtPrims.concat(drawResults.vps);
                if (drawBarFlags & drawBarFlagsEnum.LeftLink) {
                    row.leftLinkX = drawResults.leftLinkX;
                    row.leftLinkBarStyle = barStyle;
                }
                if (drawBarFlags & drawBarFlagsEnum.RightLink) {
                    row.rightLinkX = drawResults.rightLinkX;
                    row.rightLinkBarStyle = barStyle;
                }
                minDrawnDate = beginDate != null && beginDate < minDrawnDate ? beginDate : minDrawnDate;
                maxDrawnDate = endDate != null && endDate > maxDrawnDate ? endDate : maxDrawnDate;
            }
            function DrawBar(beginDate, endDate, barStyleId, drawBarFlags) {
            ULSrd5:
                ;
                DrawBarByStyle(beginDate, endDate, barStyles[barStyleId], drawBarFlags);
            }
        }
        function DrawTaskVP(relRowIdx, row) {
        ULSrd5:
            ;
            var record = row.record;

            barDrawingObject.Init(relRowIdx, row);
            var api = barDrawingObject.externalAPI;
            var barStyleIds = fnGetGanttBarStyleIds != null ? fnGetGanttBarStyleIds(record) : null;

            if (barStyleIds == null) {
                barStyleIds = operationalUtil.GetValue(record, SP.JsGrid.OperationalConstants.GanttBarStyleIds);
            }
            if (barStyleIds != null) {
                var drawBarFlags, highestLinkPri = 0;

                for (var i = 0; i < barStyleIds.length; i++) {
                    var barStyle = barStyles[barStyleIds[i]];
                    var s = barStyle.startField != null ? record.GetDataValue(barStyle.startField) : fnGetGanttBarDate && fnGetGanttBarDate(record, i, SP.JsGrid.GanttBarDateType.Start, barStyle);
                    var e = barStyle.endField != null ? record.GetDataValue(barStyle.endField) : fnGetGanttBarDate && fnGetGanttBarDate(record, i, SP.JsGrid.GanttBarDateType.End, barStyle);

                    if (s != null && s.constructor != Date) {
                        s = null;
                    }
                    if (e != null && e.constructor != Date) {
                        e = null;
                    }
                    if (s || e) {
                        if (barStyle.linkPriority != 0 && barStyle.linkPriority >= highestLinkPri) {
                            highestLinkPri = barStyle.linkPriority;
                            drawBarFlags = SP.JsGrid.GanttDrawBarFlags.LeftLink | SP.JsGrid.GanttDrawBarFlags.RightLink;
                        }
                        else {
                            drawBarFlags = 0;
                        }
                        api.DrawBarByStyle(s, e, barStyle, drawBarFlags);
                    }
                }
            }
            else if (fnRenderGanttRow != null) {
                fnRenderGanttRow(record, api);
            }
            var virtPrims = barDrawingObject.GetVirtualPrimitives();

            for (i in virtPrims) {
                virtPrims[i].primHndl.row = row;
            }
            return virtPrims;
        }
        function DrawBarVP(relRowIdx, row, startDateX, finishDateX, barStyle) {
        ULSrd5:
            ;
            var shapeWidth = barHeight;
            var halfShapeWidth = Math.floor((shapeWidth + 1) / 2);
            var startShapeInfo = _shapePositionInfo[barStyle.start.shape];
            var endShapeInfo = _shapePositionInfo[barStyle.end.shape];
            var startShapeLeft, endShapeLeft;

            if (startDateX != null) {
                startShapeLeft = startDateX - (startShapeInfo & ShapeFlag.CenterPoint ? halfShapeWidth : 0);
            }
            if (finishDateX != null) {
                endShapeLeft = finishDateX - (endShapeInfo & ShapeFlag.CenterPoint ? halfShapeWidth : shapeWidth);
            }
            if (startDateX == null) {
                startShapeLeft = endShapeLeft;
            }
            else if (finishDateX == null) {
                endShapeLeft = startShapeLeft;
            }
            var r = {
                vps: []
            };
            var vertInfo = ComputeBarRowAndHeight(relRowIdx, barStyle.shape);
            var rect, vp;

            if (startDateX != null && finishDateX != null) {
                var barLeft = startShapeLeft;

                if (startShapeInfo & ShapeFlag.LCenter) {
                    barLeft += halfShapeWidth;
                }
                else if (startShapeInfo & ShapeFlag.LRight) {
                    barLeft += shapeWidth;
                }
                var barRight = endShapeLeft;

                if (endShapeInfo & ShapeFlag.RCenter) {
                    barRight += halfShapeWidth;
                }
                else if (endShapeInfo & ShapeFlag.RRight) {
                    barRight += shapeWidth;
                }
                var barWidth = Math.max(barRight - barLeft, 1);

                rect = {
                    left: barLeft,
                    top: vertInfo.bartop,
                    width: barWidth - 1,
                    height: vertInfo.barheight
                };
                vp = new VirtualPrimitive('rect', rect, timeScale);
                vp.primHndl = ganttDrawImpl.DrawBar(rect, barStyle);
                if (vp.primHndl) {
                    r.vps.push(vp);
                }
            }
            if (startDateX != null) {
                rect = {
                    left: startShapeLeft,
                    top: vertInfo.areatop,
                    width: shapeWidth - 1,
                    height: shapeWidth - 1
                };
                vp = new VirtualPrimitive('rect', rect, timeScale);
                vp.primHndl = ganttDrawImpl.DrawShape(rect, barStyle.start);
                if (vp.primHndl) {
                    r.vps.push(vp);
                }
            }
            r.leftLinkX = startShapeLeft;
            if (finishDateX != null) {
                rect = {
                    left: endShapeLeft,
                    top: vertInfo.areatop,
                    width: shapeWidth - 1,
                    height: shapeWidth - 1
                };
                vp = new VirtualPrimitive('rect', rect, timeScale);
                vp.primHndl = ganttDrawImpl.DrawShape(rect, barStyle.end);
                if (vp.primHndl) {
                    r.vps.push(vp);
                }
            }
            r.rightLinkX = endShapeLeft + shapeWidth;
            return r;
        }
        function DrawTaskDragBoxVP(relRowIdx, startX, finishX, ghostBarStyle) {
        ULSrd5:
            ;
            var vertInfo = ComputeBarRowAndHeight(relRowIdx, ghostBarStyle.shape);
            var rect = {
                left: startX,
                top: vertInfo.bartop,
                width: finishX - startX + 1,
                height: vertInfo.barheight
            };
            var vp = new VirtualPrimitive('rect', rect, timeScale);

            vp.primHndl = ganttDrawImpl.DrawBar(rect, ghostBarStyle);
            return vp;
        }
        function DrawLinkVP(link) {
        ULSrd5:
            ;
            var startRowPos = paneConverter.RecordKeyToRelRowIdx(link.fromKey);
            var endRowPos = paneConverter.RecordKeyToRelRowIdx(link.toKey);

            if (startRowPos == null || endRowPos == null || !IsRowInPane(startRowPos) || !IsRowInPane(endRowPos)) {
                return null;
            }
            var startRow = rows[startRowPos];
            var endRow = rows[endRowPos];
            var startX, endX, startBarStyle, endBarStyle, linkType = link.linkType;

            if (linkType == SP.JsGrid.LinkType.StartStart || linkType == SP.JsGrid.LinkType.StartFinish) {
                startX = startRow.leftLinkX - 1;
                startBarStyle = startRow.leftLinkBarStyle;
            }
            else {
                startX = startRow.rightLinkX;
                startBarStyle = startRow.rightLinkBarStyle;
            }
            if (linkType == SP.JsGrid.LinkType.StartStart || linkType == SP.JsGrid.LinkType.FinishStart) {
                endX = endRow.leftLinkX;
                endBarStyle = endRow.leftLinkBarStyle;
            }
            else {
                endX = endRow.rightLinkX;
                endBarStyle = endRow.rightLinkBarStyle;
            }
            if (startBarStyle == null || endBarStyle == null) {
                return null;
            }
            var startVertInfo = ComputeBarRowAndHeight(startRowPos, startBarStyle.shape);
            var endVertInfo = ComputeBarRowAndHeight(endRowPos, endBarStyle.shape);
            var startY = startVertInfo.bartop + Math.ceil(startVertInfo.barheight / 2);
            var endY = endVertInfo.bartop + Math.ceil(endVertInfo.barheight / 2);
            var pts, x, y;

            switch (linkType) {
            case SP.JsGrid.LinkType.FinishFinish:
                x = Math.max(startX + CONST_minLineNA, endX + CONST_minLineA);
                pts = [startX, startY, x, startY, x, endY, endX, endY];
                break;
            case SP.JsGrid.LinkType.StartStart:
                x = Math.min(startX - CONST_minLineNA, endX - CONST_minLineA);
                pts = [startX, startY, x, startY, x, endY, endX, endY];
                break;
            case SP.JsGrid.LinkType.FinishStart:
                if (endX - startX >= -1) {
                    x = Math.max(startX + CONST_minLineNA, endX);
                    pts = [startX, startY, x, startY, x, startY < endY ? endVertInfo.bartop : endVertInfo.bartop + endVertInfo.barheight];
                }
                else {
                    y = (startRowPos + (startY < endY ? 1 : 0)) * rowHeight - 1;
                    pts = [startX, startY, startX + CONST_minLineNA, startY, startX + CONST_minLineNA, y, endX - CONST_minLineA, y, endX - CONST_minLineA, endY, endX, endY];
                }
                break;
            case SP.JsGrid.LinkType.StartFinish:
                if (startX - endX - CONST_minLineA - CONST_minLineNA >= 0) {
                    pts = [startX, startY, endX + CONST_minLineA, startY, endX + CONST_minLineA, endY, endX, endY];
                }
                else {
                    y = (startRowPos + (startY < endY ? 1 : 0)) * rowHeight - 1;
                    pts = [startX, startY, startX - CONST_minLineNA, startY, startX - CONST_minLineNA, y, endX + CONST_minLineA, y, endX + CONST_minLineA, endY, endX, endY];
                }
                break;
            default:
                return null;
            }
            var vp = new VirtualPrimitive('points', pts, timeScale);

            vp.primHndl = ganttDrawImpl.DrawLink(pts, vp.CalcHorizPos());
            return vp;
        }
        function RecalcScrollableDateRange() {
        ULSrd5:
            ;
            var graceMs = timeScale.GetMinTierItemDurationMs() * CONST_graceUnits;
            var msPerDay = 1000 * 60 * 60 * 24;
            var rawMinMs = Math.max(dateRange[0].getTime() - graceMs, SP.JsGrid.Internal.DateManip.startOfTimeJsDateTicks);
            var rawMaxMs = Math.min(dateRange[1].getTime() + graceMs, SP.JsGrid.Internal.DateManip.endOfTimeJsDateTicks);

            return [new Date(rawMinMs), new Date(rawMaxMs)];
        }
        function ConvertFocusDateToStartDate(focusDate) {
        ULSrd5:
            ;
            var viewPortWidthInMs = timeScale.GetMinTierItemDurationMs() * horizScrollBar.GetWholeItemDisplayCapacity();
            var startDateMs = focusDate.getTime() - viewPortWidthInMs * CONST_focusPct;

            startDateMs = Math.min(startDateMs, scrollableDateRange[1].getTime() - viewPortWidthInMs);
            startDateMs = Math.max(startDateMs, scrollableDateRange[0].getTime());
            return new Date(startDateMs);
        }
        function ConvertStartDateToFocusDate(startDate) {
        ULSrd5:
            ;
            var viewPortWidthInMs = timeScale.GetMinTierItemDurationMs() * horizScrollBar.GetWholeItemDisplayCapacity();
            var focusDate = new Date(startDate.getTime() + viewPortWidthInMs * CONST_focusPct);

            return focusDate;
        }
        function ConvertFocusDateToScrollPos(focusDate) {
        ULSrd5:
            ;
            var startDate = ConvertFocusDateToStartDate(focusDate);
            var scrollPos = Math.ceil((startDate.getTime() - scrollableDateRange[0].getTime()) / timeScale.GetMinTierItemDurationMs());

            return scrollPos;
        }
        function ConvertScrollPosToFocusDate(scrollPos) {
        ULSrd5:
            ;
            var startDate = new Date(scrollableDateRange[0].getTime() + scrollPos * timeScale.GetMinTierItemDurationMs());
            var focusDate = ConvertStartDateToFocusDate(startDate);

            return focusDate;
        }
        function OnHorizontalScroll(newLeftAbsInfo, originalLeftPos) {
        ULSrd5:
            ;
            if (!bProgrammaticScroll) {
                _this.SetFocusDate(ConvertScrollPosToFocusDate(newLeftAbsInfo.topIdx));
            }
        }
        function RedrawTimescale() {
        ULSrd5:
            ;
            var drawingReferenceInfo = timeScale.Draw(timelineSurface, paneSize.GetWidth(), headerHeight + 1, ConvertFocusDateToStartDate(focusDate));

            RedrawVerticalDelimiters(drawingReferenceInfo.majorTierPlacements);
            RedrawVerticalTodayLine(drawingReferenceInfo.todayPlacement);
        }
        function RedrawVerticalDelimiters(majorTierPlacements) {
        ULSrd5:
            ;
            if (majorTierPlacements.length % 2 == 0) {
                majorTierPlacements.push(10000);
            }
            for (var i = 0; i < verticalDelimiterDivs.length; i++) {
                barSurface.removeChild(verticalDelimiterDivs[i]);
            }
            verticalDelimiterDivs = [];
            var firstChild = barSurface.firstChild;

            for (var i = 1; i < majorTierPlacements.length; i += 2) {
                var div = document.createElement('div');

                div.className = 'jsgrid-gantt-vert-delim';
                div.style.borderColor = objBag.styleMgr.gridPaneStyle.horizontalBorderColor;
                div.style[objBag.RTL.left] = majorTierPlacements[i] - 1 + 'px';
                div.style.width = majorTierPlacements[i + 1] - majorTierPlacements[i] - 1 + 'px';
                barSurface.insertBefore(div, firstChild);
                verticalDelimiterDivs.push(div);
            }
        }
        function RedrawVerticalTodayLine(todayPlacement) {
        ULSrd5:
            ;
            if (todayLineDiv != null) {
                barSurface.removeChild(todayLineDiv);
                todayLineDiv = null;
            }
            if (todayPlacement >= 0) {
                todayLineDiv = document.createElement('div');
                todayLineDiv.className = 'jsgrid-gantt-vert-today';
                todayLineDiv.style.borderColor = objBag.styleMgr.timescaleTierStyle.todayLineColor;
                todayLineDiv.style[objBag.RTL.left] = todayPlacement - 1 + 'px';
                barSurface.insertBefore(todayLineDiv, barSurface.firstChild);
            }
        }
        function UpdateScrollbar() {
        ULSrd5:
            ;
            var totalVirtualPx = timeScale.DateToAbsXCoord(SP.DateTimeUtil.IntlDate.createFromJsUtcDate(scrollableDateRange[1], _spRegionalSettings.calendarType)) - timeScale.DateToAbsXCoord(SP.DateTimeUtil.IntlDate.createFromJsUtcDate(scrollableDateRange[0], _spRegionalSettings.calendarType));
            var itemSize = timeScale.GetMinTierItemWidth();

            bProgrammaticScroll = true;
            horizScrollBar.Update({
                itemSize: itemSize,
                itemCount: Math.ceil(totalVirtualPx / itemSize),
                physicalViewportSize: paneSize.GetWidth(),
                scrollbarSize: paneSize.GetWidth(),
                topItemIdx: ConvertFocusDateToScrollPos(focusDate)
            });
            bProgrammaticScroll = false;
        }
        function UpdateScrollbarPosition() {
        ULSrd5:
            ;
            bProgrammaticScroll = true;
            horizScrollBar.Update({
                topItemIdx: ConvertFocusDateToScrollPos(focusDate)
            });
            bProgrammaticScroll = false;
        }
        function RescaleTasksAndLinks() {
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];

                for (var j in row.virtPrims) {
                    row.virtPrims[j].Dispose();
                }
                row.virtPrims = DrawTaskVP(i, row);
            }
            RedrawAllLinks();
        }
        function ShiftTasksAndLinksHorizontally() {
            for (var i = 0; i < rows.length; i++) {
                var vps = rows[i].virtPrims;

                for (var j in vps) {
                    vps[j].SetHorizPos();
                }
            }
            for (i in drawnLinks) {
                drawnLinks[i].virtPrim.SetHorizPos();
            }
        }
        function TranslateTaskVPAtAndBelow(pos, amt) {
        ULSrd5:
            ;
            var pixelDelta = amt * rowHeight;

            for (var i = pos; i < rows.length; ++i) {
                var vps = rows[i].virtPrims;

                for (var j in vps) {
                    vps[j].TranslateVertically(pixelDelta);
                }
            }
        }
        function RedrawAllLinks() {
        ULSrd5:
            ;
            SP.Internal.JS.CoalesceFunctionCalls('ganttlinks', RedrawAllLinksQueued);
            function RedrawAllLinksQueued() {
            ULSrd5:
                ;
                for (var key in drawnLinks) {
                    drawnLinks[key].virtPrim.Dispose();
                }
                drawnLinks = {};
                var links = {};

                for (var i in rows) {
                    var record = rows[i].record;

                    if (record != null && !record.bIsNewRow) {
                        var toKey = record.key();
                        var preds = GetTaskPredecessors(record);

                        if (preds != null) {
                            for (var i = 0; i < preds.length; i++) {
                                var link = MakeLinkObj(preds[i].key, toKey, preds[i].type);

                                links[link.key] = link;
                            }
                        }
                    }
                }
                for (var key in links) {
                    var link = links[key];
                    var vp = DrawLinkVP(link);

                    if (vp) {
                        drawnLinks[key] = {
                            link: link,
                            virtPrim: vp
                        };
                    }
                }
            }
        }
        function GetTaskPredecessors(record) {
            var depColDataValue = operationalUtil.GetValue(record, SP.JsGrid.OperationalConstants.GanttDependants);

            return fnGetPredecessors != null ? fnGetPredecessors(record, depColDataValue) : depColDataValue;
        }
        function SetUpPaneMouseHandlers() {
        ULSrd5:
            ;
            function OnDoubleClick(eventInfo) {
            ULSrd5:
                ;
                objBag.eventMgr.FireEvent(SP.JsGrid.EventType.OnDoubleClick, new SP.JsGrid.EventArgs.Click(eventInfo, SP.JsGrid.ClickContext.Gantt, null, null));
            }
            function OnMouseDown(eventInfo) {
            ULSrd5:
                ;
                if (eventInfo.button == Sys.UI.MouseButton.rightButton) {
                    objBag.eventMgr.FireEvent(SP.JsGrid.EventType.OnRightClick, new SP.JsGrid.EventArgs.Click(eventInfo, SP.JsGrid.ClickContext.Gantt, null, null));
                    eventInfo.stopPropagation();
                    eventInfo.preventDefault();
                }
            }
            $addHandlers(parentNode, {
                mousedown: OnMouseDown,
                dblclick: OnDoubleClick
            });
            return function() {
            ULSrd5:
                ;
                $removeHandler(parentNode, 'mousedown', OnMouseDown);
                $removeHandler(parentNode, 'dblclick', OnDoubleClick);
            };
        }
        function MoveTaskStartDate(record, newStart) {
        ULSrd5:
            ;
            var startInfo = operationalUtil.GetProp(record, SP.JsGrid.OperationalConstants.GanttDragStartDate);
            var finishInfo = operationalUtil.GetProp(record, SP.JsGrid.OperationalConstants.GanttDragFinishDate);
            var oldStart = startInfo.prop.GetData();
            var oldFinish = finishInfo.prop.GetData();
            var deltaMs = oldFinish.getTime() - oldStart.getTime();
            var newFinish = new Date(newStart.getTime() + deltaMs);

            eventSinks.OnPropertiesChanged([SP.JsGrid.CreateUnvalidatedPropertyUpdate(record.key(), startInfo.fieldKey, newStart, false), SP.JsGrid.CreateUnvalidatedPropertyUpdate(record.key(), finishInfo.fieldKey, newFinish, false)], 'Move Bar', null, null);
        }
        function MoveTaskFinishDate(record, newFinish) {
        ULSrd5:
            ;
            var finishInfo = operationalUtil.GetProp(record, SP.JsGrid.OperationalConstants.GanttDragFinishDate);

            eventSinks.OnPropertiesChanged([SP.JsGrid.CreateUnvalidatedPropertyUpdate(record.key(), finishInfo.fieldKey, newFinish, false)], 'Move Bar End', null, null);
        }
        function VirtualPrimitive(paramType, param) {
            var maxWidth = CONST_maxViewWidth + CONST_nonHomogZone * 2;

            if (paramType == "rect") {
                var rect = param;

                this.virtLeft = rect.left;
                this.virtWidth = rect.width;
                this.width = Math.min(rect.width, maxWidth);
                rect.left = this.CalcHorizPos();
                rect.width = this.width;
            }
            else {
                var pts = param;
                var minX, maxX;

                minX = (maxX = pts[0]);
                for (var i = 0; i < pts.length; i += 2) {
                    minX = Math.min(minX, pts[i]);
                    maxX = Math.max(maxX, pts[i]);
                }
                this.virtLeft = minX;
                this.virtWidth = maxX - minX;
                this.width = Math.min(this.virtWidth, maxWidth);
                var widthDelta = this.virtWidth - this.width;

                for (i = 0; i < pts.length; i += 2) {
                    var x = pts[i] - minX;

                    if (x > CONST_nonHomogZone) {
                        x -= widthDelta;
                    }
                    pts[i] = x;
                }
            }
            this.primHndl = null;
        }
        VirtualPrimitive.prototype = {
            Dispose: function() {
            ULSrd5:
                ;
                var e = this.primHndl;

                e.row = null;
                e.Dispose();
            },
            TranslateVertically: function(pixelDelta) {
            ULSrd5:
                ;
                var e = this.primHndl;

                e.TranslateVertically(pixelDelta);
            },
            SetHorizPos: function() {
            ULSrd5:
                ;
                var e = this.primHndl;
                var newLeft = this.CalcHorizPos();

                e.TranslateHorizontally(newLeft);
            },
            CalcHorizPos: function() {
            ULSrd5:
                ;
                var viewL = timeScale.GetActualStartDateAbsXCoord();
                var adjViewL = viewL - CONST_nonHomogZone;
                var adjViewR = viewL + CONST_maxViewWidth + CONST_nonHomogZone;
                var objL = this.virtLeft;
                var objR = objL + this.virtWidth;
                var offset;

                if (objL > adjViewL && objL < adjViewR) {
                    offset = objL - viewL;
                }
                else if (objR > adjViewL && objR < adjViewR) {
                    offset = objR - viewL - this.width;
                }
                else if (objL < adjViewL && objR > adjViewR) {
                    offset = -CONST_nonHomogZone;
                }
                else {
                    offset = CONST_maxViewWidth + CONST_nonHomogZone;
                }
                return offset;
            }
        };
    };
    SP.JsGrid.Internal.GanttPane.BarShape = {
        None: 0,
        Full: 1,
        TopHalf: 2,
        MidHalf: 3,
        BottomHalf: 4,
        TopLine: 5,
        MidLine: 6,
        BottomLine: 7
    };
    SP.JsGrid.Internal.GanttPane.BarPattern = {
        Transparent: -1,
        Empty: 0,
        Solid: 1,
        Dots25pct: 2,
        Dots50pct: 3,
        Dots75pct: 4,
        Nw2seDiag: 5,
        Sw2neDiag: 6,
        BothDiag: 7,
        VertLines: 8,
        HorizLines: 9,
        GridLines: 10
    };
    SP.JsGrid.Internal.GanttPane.EndPtShape = {
        None: 0,
        HomePlateUp: 1,
        HomePlateDown: 2,
        Diamond: 3,
        UpTriangle: 4,
        DownTriangle: 5,
        RightTriangle: 6,
        LeftTriangle: 7,
        UpArrow: 8,
        MiniHomePlateDown: 9,
        MiniHomePlateUp: 10,
        VertBar: 11,
        Square: 12,
        CircledDiamond: 13,
        DownArrow: 14,
        CircledUpTriangle: 15,
        CircledDownTriangle: 16,
        CircledUpArrow: 17,
        CircledDownArrow: 18,
        Circle: 19,
        Star: 20,
        OpenBracket: 21,
        CloseBracket: 22
    };
    SP.JsGrid.TimeScale = function(parentNode, timescaleTierStyle, RTL, jsGridParams, firstTierWithText) {
        var upperMeasuringElement, lowerMeasuringElement;
        var scaleFactorCache = [];
        var roundTimeCache = [];
        var actualStartDateAbsXCoord = 0;
        var zoomLevel, scaleFactor;
        var localizer = new SP.JsGrid.Internal.DateTimeLocalizer();
        var _this = this;
        var timescaleTierStyleText, timescaleUpperTierEntryStyleText, timescaleLowestTierEntryStyleText;
        var dtu = SP.JsGrid.Internal.DateTimeUnit;
        var dtf = localizer.GetLabelFormats();
        var CONST_tierCount = 2;
        var _firstTierWithText = 0;
        var cachedTierHeight;
        var ZoomSequence = [[{
            unit: dtu.Minute,
            label: dtf.Minute,
            count: 15
        }, {
            unit: dtu.Hour,
            label: dtf.ShortDateHour,
            count: 1
        }], [{
            unit: dtu.Hour,
            label: dtf.Hour,
            count: 2
        }, {
            unit: dtu.Day,
            label: dtf.LongDate,
            count: 1
        }], [{
            unit: dtu.Hour,
            label: dtf.Hour,
            count: 6
        }, {
            unit: dtu.Day,
            label: dtf.ShortDate,
            count: 1
        }], [{
            unit: dtu.Day,
            label: dtf.ShortestDayName,
            count: 1
        }, {
            unit: dtu.Week,
            label: dtf.ShortDate,
            count: 1
        }], [{
            unit: dtu.Day,
            label: dtf.DayOfMonth,
            count: 3
        }, {
            unit: dtu.Month,
            label: dtf.YearMonth,
            count: 1
        }], [{
            unit: dtu.Day,
            label: dtf.DayOfMonth,
            count: 7
        }, {
            unit: dtu.Month,
            label: dtf.YearMonth,
            count: 1
        }], [{
            unit: dtu.Month,
            label: dtf.MonthAbbr,
            count: 1
        }, {
            unit: dtu.Quarter,
            label: dtf.YearMonth,
            count: 1
        }], [{
            unit: dtu.Month,
            label: dtf.MonthAbbr,
            count: 1
        }, {
            unit: dtu.HalfYear,
            label: dtf.YearMonth,
            count: 1
        }], [{
            unit: dtu.Quarter,
            label: dtf.MonthAbbr,
            count: 1
        }, {
            unit: dtu.Year,
            label: dtf.Year4,
            count: 1
        }], [{
            unit: dtu.HalfYear,
            label: dtf.MonthAbbr,
            count: 1
        }, {
            unit: dtu.Year,
            label: dtf.Year4,
            count: 1
        }]];

        this.RetrieveRoundTimeObj = function(zoomLevel) {
        ULSrd5:
            ;
            var r = roundTimeCache[zoomLevel];

            if (!r) {
                var minorTier = ZoomSequence[zoomLevel][0];

                roundTimeCache[zoomLevel] = (r = new SP.JsGrid.Internal.RoundTime(minorTier.unit, minorTier.count, jsGridParams.tableViewParams.ganttParams.workDayStart, jsGridParams.tableViewParams.ganttParams.workDayEnd));
            }
            return r;
        };
        this.GetActualStartDateAbsXCoord = function() {
        ULSrd5:
            ;
            return actualStartDateAbsXCoord;
        };
        this.AbsXCoordToDate = function(xCoord) {
        ULSrd5:
            ;
            return SP.DateTimeUtil.IntlDate.createFromTicks(xCoord / scaleFactor + SP.JsGrid.Internal.DateManip.startOfTimeIntlDateTicks, _spRegionalSettings.calendarType);
        };
        this.DateToAbsXCoord = function(intlDate) {
        ULSrd5:
            ;
            return Math.floor((intlDate.get_ticks() - SP.JsGrid.Internal.DateManip.startOfTimeIntlDateTicks) * scaleFactor);
        };
        this.GetMinTierItemDurationMs = function() {
        ULSrd5:
            ;
            var tstier = ZoomSequence[zoomLevel][0];

            return SP.JsGrid.Internal.UnitTicks[tstier.unit] * tstier.count;
        };
        this.GetMinTierItemWidth = function() {
        ULSrd5:
            ;
            return this.GetMinTierItemDurationMs() * scaleFactor;
        };
        this.GetMinHeight = function() {
        ULSrd5:
            ;
            return ComputeTierHeight() * CONST_tierCount;
        };
        this.SetZoomLevel = function(newZoomLevel) {
        ULSrd5:
            ;
            zoomLevel = newZoomLevel;
            scaleFactor = CalcOverallScalingFactor(zoomLevel);
        };
        this.Draw = function(canvas, canvasWidth, tsHeight, startDate) {
        ULSrd5:
            ;
            var drawingReferenceInfo = {
                majorTierPlacements: [],
                todayPlacement: -1
            };
            var tierHeight = ComputeTierHeight();
            var unusedTierVertSpace = Math.max(tsHeight - CONST_tierCount * tierHeight, 0);
            var tstier = ZoomSequence[zoomLevel][0];
            var actualStartDate = SP.JsGrid.Internal.DateManip.RoundDown(SP.DateTimeUtil.IntlDate.createFromJsUtcDate(startDate, _spRegionalSettings.calendarType), tstier.unit, tstier.count);

            actualStartDateAbsXCoord = this.DateToAbsXCoord(actualStartDate);
            var now = new Date();

            drawingReferenceInfo.todayPlacement = this.DateToAbsXCoord(SP.DateTimeUtil.IntlDate.createFromDateParts(now.getFullYear(), now.getMonth() + 1, now.getDate(), 0, SP.DateTimeUtil.SPCalendarType.gregorian)) - actualStartDateAbsXCoord;
            if (drawingReferenceInfo.todayPlacement > canvasWidth) {
                drawingReferenceInfo.todayPlacement = -1;
            }
            if (!canvas.firstChild) {
                var e = canvas.appendChild(document.createElement('div'));

                e.style.cssText = 'padding:0px; left:0px; top:0px; background-repeat:repeat-x; overflow:hidden; position:absolute; width:10000px';
                e.style.height = tsHeight - 1 + 'px';
                e.style.backgroundColor = timescaleTierStyle.backgroundColor;
                e.style.backgroundImage = timescaleTierStyle.imageUrl || '';
                for (var i = 0; i < CONST_tierCount; ++i) {
                    e = canvas.appendChild(document.createElement('div'));
                    e.style.cssText = timescaleTierStyleText;
                    e.style.height = tierHeight - 1 + 'px';
                    e.style.top = unusedTierVertSpace + tierHeight * i + 'px';
                    if (!RTL.bEnabled) {
                        e.style.left = '0px';
                    }
                }
            }
            var startDateX = actualStartDateAbsXCoord;

            for (var tierNum = 0; tierNum < CONST_tierCount; tierNum++) {
                tstier = ZoomSequence[zoomLevel][tierNum];
                var labelDiv = canvas.childNodes[CONST_tierCount - tierNum];
                var date = SP.JsGrid.Internal.DateManip.RoundDown(actualStartDate, tstier.unit, tstier.count);
                var left = this.DateToAbsXCoord(date) - startDateX;
                var paddingAmt = tierNum == 0 ? 0 : 4;
                var cssText = tierNum == 0 ? timescaleLowestTierEntryStyleText : timescaleUpperTierEntryStyleText;
                var nextSpan = labelDiv.firstChild;

                labelDiv.style['margin' + RTL.Left] = left + 'px';
                while (left < canvasWidth) {
                    if (tierNum == CONST_tierCount - 1) {
                        drawingReferenceInfo.majorTierPlacements.push(left);
                    }
                    var nextDate = SP.JsGrid.Internal.DateManip.Increment(date, tstier.unit, tstier.count);
                    var nextLeft = this.DateToAbsXCoord(nextDate) - startDateX;

                    if (nextSpan) {
                        e = nextSpan;
                        nextSpan = e.nextSibling;
                    }
                    else {
                        e = document.createElement('span');
                        e.style.cssText = cssText;
                        labelDiv.appendChild(e);
                    }
                    e.style.width = nextLeft - left - (paddingAmt + 1) + 'px';
                    if (_firstTierWithText <= tierNum) {
                        SP.Internal.DomElement.SetText(e, localizer.CreateLabel(date, tstier.label));
                    }
                    left = nextLeft;
                    date = nextDate;
                }
            }
            return drawingReferenceInfo;
        };
        this.ScaledDraw = function(canvas, canvasWidth, tsHeight, startDate, scaledPixelPerMS) {
        ULSrd5:
            ;
            SetScaleFactor(scaledPixelPerMS);
            zoomLevel = CalculateZoomFactorFromScale(scaledPixelPerMS);
            return this.Draw(canvas, canvasWidth, tsHeight, startDate);
        };
        function Init() {
        ULSrd5:
            ;
            if (firstTierWithText) {
                if (firstTierWithText >= 0 && firstTierWithText < CONST_tierCount) {
                    _firstTierWithText = firstTierWithText;
                }
            }
            InitStyleRules();
            CreateMeasuringElements();
        }
        function InitStyleRules() {
        ULSrd5:
            ;
            timescaleTierStyleText = "white-space:nowrap; overflow:hidden; position:absolute; width:10000px;" + ";background-color:" + timescaleTierStyle.backgroundColor + ";color:" + timescaleTierStyle.textColor + ";border-bottom:" + SP.JsGrid.Internal.MakeBorderString(1, timescaleTierStyle.horizontalBorderStyle, timescaleTierStyle.horizontalBorderColor);
            var timescaleTierEntryStyleText = "white-space:nowrap; overflow:hidden; height:100%" + (timescaleTierStyle.font != null ? ";font-family:" + timescaleTierStyle.font : "") + ";font-size:" + timescaleTierStyle.fontSize + ";font-weight:" + timescaleTierStyle.fontWeight + ";float:" + RTL.left + ";border-" + RTL.right + ":" + SP.JsGrid.Internal.MakeBorderString(1, timescaleTierStyle.verticalBorderStyle, timescaleTierStyle.verticalBorderColor);

            timescaleUpperTierEntryStyleText = timescaleTierEntryStyleText + ";text-align:" + RTL.left + ";padding-" + RTL.Left + ":4px";
            timescaleLowestTierEntryStyleText = timescaleTierEntryStyleText + ";text-align:center";
        }
        function CreateMeasuringElements() {
        ULSrd5:
            ;
            upperMeasuringElement = document.createElement('span');
            lowerMeasuringElement = document.createElement('span');
            var sharedCssText = ';position:absolute;top:0px;left:0px;visibility:hidden;overflow:visible';

            upperMeasuringElement.style.cssText = timescaleUpperTierEntryStyleText + sharedCssText;
            lowerMeasuringElement.style.cssText = timescaleLowestTierEntryStyleText + sharedCssText;
            upperMeasuringElement.style.height = (lowerMeasuringElement.style.height = '');
            parentNode.appendChild(upperMeasuringElement);
            parentNode.appendChild(lowerMeasuringElement);
        }
        function ComputeTierHeight() {
        ULSrd5:
            ;
            if (cachedTierHeight == null) {
                cachedTierHeight = GetTextHeightInPx('Apr \u88C6') + 1;
            }
            return cachedTierHeight;
        }
        function CalcOverallScalingFactor(zoomLevel) {
            if (scaleFactorCache[zoomLevel]) {
                return scaleFactorCache[zoomLevel];
            }
            var maxFactor = 0, labelWidth;

            for (var tierIdx in ZoomSequence[zoomLevel]) {
                var tstier = ZoomSequence[zoomLevel][tierIdx];

                if (tierIdx >= _firstTierWithText) {
                    labelWidth = localizer.GetWidestLabelWidth(tstier.label, null, tierIdx == 0 ? GetLowerTierTextWidthInPx : GetUpperTierTextWidthInPx);
                }
                else {
                    labelWidth = 4;
                }
                var timeMs = SP.JsGrid.Internal.UnitTicks[tstier.unit] * tstier.count;
                var factor = (labelWidth + 3 + 2 + 1) / timeMs;

                if (factor > maxFactor || !maxFactor) {
                    maxFactor = factor;
                }
            }
            if (labelWidth != 0) {
                scaleFactorCache[zoomLevel] = maxFactor;
            }
            return maxFactor;
        }
        function GetUpperTierTextWidthInPx(text) {
        ULSrd5:
            ;
            SP.Internal.DomElement.SetText(upperMeasuringElement, text);
            return upperMeasuringElement.offsetWidth;
        }
        function GetLowerTierTextWidthInPx(text) {
        ULSrd5:
            ;
            SP.Internal.DomElement.SetText(lowerMeasuringElement, text);
            return lowerMeasuringElement.offsetWidth;
        }
        function GetTextHeightInPx(text) {
        ULSrd5:
            ;
            SP.Internal.DomElement.SetText(upperMeasuringElement, text);
            return upperMeasuringElement.offsetHeight;
        }
        function SetScaleFactor(newScaleFactor) {
            scaleFactor = newScaleFactor;
        }
        function CalculateZoomFactorFromScale(scaledPixelPerMS) {
        ULSrd5:
            ;
            for (var zoomLevelIdx in ZoomSequence) {
                var tierIdx = 0;

                for (; tierIdx < CONST_tierCount; tierIdx++) {
                    var tstier = ZoomSequence[zoomLevelIdx][tierIdx];
                    var timeMs = SP.JsGrid.Internal.UnitTicks[tstier.unit] * tstier.count;

                    if ((4 + 1 + 2 + 3) / timeMs > scaledPixelPerMS) {
                        break;
                    }
                }
                if (tierIdx == CONST_tierCount && CalcOverallScalingFactor(zoomLevelIdx) <= scaledPixelPerMS) {
                    return zoomLevelIdx;
                }
            }
            return ZoomSequence.length - 1;
        }
        Init();
    };
    SP.JsGrid.Internal.MakeBorderString = function(width, style, color) {
    ULSrd5:
        ;
        return [width, 'px ', style, ' ', color].join('');
    };
    SP.JsGrid.Internal.DateTimeUnit = {
        Minute: 0,
        Hour: 1,
        Day: 2,
        Week: 3,
        ThirdMonth: 4,
        Month: 5,
        Quarter: 6,
        HalfYear: 7,
        Year: 8
    };
    SP.JsGrid.Internal.DateTimeLocalizer = function() {
    ULSrd5:
        ;
        var formatRE = /ddddd|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|q|l|r|rrr|ss|s|am|pm|tt|t|fff|ff|f|w|zzz|zz|z/g;
        var locale = Sys.CultureInfo.CurrentCulture;
        var dtf = locale.dateTimeFormat;
        var labelFormats;
        var testDate = SP.DateTimeUtil.IntlDate.createFromDateParts(2008, 1, 1, 1, SP.DateTimeUtil.SPCalendarType.gregorian);

        testDate.convertToCalendar(_spRegionalSettings.calendarType);
        this.GetLabelFormats = function() {
        ULSrd5:
            ;
            return labelFormats;
        };
        this.CreateLabel = function(intlDate, labelFormat) {
        ULSrd5:
            ;
            return intlDate.format(labelFormat, locale.name);
        };
        this.GetWidestLabelWidth = function(labelFormat, calendarId, fnMeasureWidth) {
        ULSrd5:
            ;
            function maxOfInts(start, end, step) {
            ULSrd5:
                ;
                var max = 0, largestInt = start;

                for (var i = start; i <= end; i += step) {
                    var len = fnMeasureWidth(i);

                    if (len > max) {
                        max = len;
                        largestInt = i;
                    }
                }
                return largestInt;
            }
            function maxOfArray(array) {
            ULSrd5:
                ;
                var max = 0, largestIdx = array.length - 1;

                for (var i = largestIdx; i >= 0; i--) {
                    var len = fnMeasureWidth(array[i]);

                    if (len > max) {
                        max = len;
                        largestIdx = i;
                    }
                }
                return array[largestIdx];
            }
            function tokenSize(format) {
            ULSrd5:
                ;
                var ar = [];

                testDate.setDate(testDate.get_year(), 1, 1, testDate.get_era());
                if (format == 'MMMM' || format == 'MMM') {
                    var maxMonth = testDate.monthsInYear();

                    for (var month = 1; month <= maxMonth; testDate.addMonths(1), month++) {
                        ar.push(testDate.format(format, locale.name));
                    }
                    return maxOfArray(ar);
                }
                else if (format == 'ddddd' || format == 'dddd' || format == 'ddd') {
                    for (var day = 1; day <= 7; testDate.addDays(1), day++) {
                        ar.push(testDate.format(format, locale.name));
                    }
                    return maxOfArray(ar);
                }
                else {
                    return fnMeasureWidth(testDate.format(format, locale.name));
                }
            }
            if (labelFormat[0] == '%') {
                labelFormat = labelFormat.substr(1);
            }
            var wideStrings = [];

            formatRE.lastIndex = 0;
            while (true) {
                var index = formatRE.lastIndex;
                var matchResult = formatRE.exec(labelFormat);

                wideStrings.push(labelFormat.slice(index, matchResult ? matchResult.index : labelFormat.length));
                if (!matchResult) {
                    break;
                }
                var wide, match = matchResult[0];

                switch (match) {
                case "ddddd":
                case "dddd":
                case "ddd":
                case "MMMM":
                case "MMM":
                    wide = tokenSize(match);
                    break;
                case "yyyy":
                    wide = maxOfInts(1111, 9999, 1111);
                    break;
                case "fff":
                    wide = maxOfInts(111, 999, 111);
                    break;
                case "dd":
                case "d":
                case "MM":
                case "M":
                case "h":
                case "hh":
                case "HH":
                case "H":
                case "mm":
                case "m":
                case "ss":
                case "s":
                case "yy":
                case "y":
                case "ff":
                case "w":
                case "rrr":
                    wide = maxOfInts(11, 99, 11);
                    break;
                case "f":
                case "q":
                case "l":
                case "r":
                    wide = maxOfInts(0, 9, 1);
                    break;
                case "t":
                    wide = maxOfArray([dtf.AMDesignator[0], dtf.PMDesignator[0]]);
                case "tt":
                    wide = maxOfArray([dtf.AMDesignator, dtf.PMDesignator]);
                    break;
                case "z":
                case "zz":
                    wide = maxOfArray(['+', '-']) + maxOfInts(10, 13, 1);
                    break;
                case "zzz":
                    wide = maxOfArray(['+', '-']) + maxOfInts(10, 13, 1) + tokenSize(':') + maxOfInts(11, 99, 11);
                    break;
                case "/":
                    wide = tokenSize('/');
                    break;
                case ":":
                    wide = tokenSize(':');
                    break;
                default:
                    break;
                }
                wideStrings.push(wide);
            }
            return fnMeasureWidth(wideStrings.join(''));
        };
        function InitLabelFormats() {
        ULSrd5:
            ;
            labelFormats = {
                Year4: 'yyyy',
                YearMonth: dtf.YearMonthPattern,
                MonthAbbr: 'MMM',
                ShortestDayName: 'ddddd',
                DayOfMonth: '%d',
                ShortDate: dtf.ShortDatePattern,
                ShortDateTime: dtf.ShortDatePattern + ' ' + dtf.ShortTimePattern,
                MonthDay: dtf.MonthDayPattern,
                LongDate: dtf.LongDatePattern,
                Hour: null,
                ShortDateHour: null,
                Minute: '%m'
            };
            var pat = dtf.ShortTimePattern;
            var m1 = /hh|h|HH|H/g.exec(pat);
            var m2 = / tt|.tt|tt |tt/g.exec(pat);

            labelFormats.Hour = (m1 ? !m2 ? m1 : m1.index < m2.index ? m1 + m2 : m2 + m1 : pat) + '';
            labelFormats.ShortDateHour = dtf.ShortDatePattern + ' ' + labelFormats.Hour;
        }
        InitLabelFormats();
    };
    SP.JsGrid.Internal.UnitTicks = [60 * 1000, 3600 * 1000, 86400 * 1000, 604800 * 1000, 864000 * 1000, 2628000 * 1000, 7884000 * 1000, 15768000 * 1000, 31536000 * 1000];
    SP.JsGrid.Internal.RoundTime = function(unit, count, workDayStart, workDayEnd) {
        this.ganttDisplayInfo = SP.JsGrid.Internal.UnitTicks[unit] * count > SP.JsGrid.Internal.UnitTicks[SP.JsGrid.Internal.DateTimeUnit.Day] ? {
            unit: SP.JsGrid.Internal.DateTimeUnit.Day,
            count: 1
        } : {
            unit: unit,
            count: count
        };
        this.ganttDragInfo = {
            unit: unit,
            count: count
        };
        if (unit != SP.JsGrid.Internal.DateTimeUnit.Day) {
            this.ganttDragInfo = SP.JsGrid.Internal.DateManip.ReduceUnit(this.ganttDragInfo);
        }
        this.workDayStartMs = workDayStart * 60000;
        this.workDayEndMs = workDayEnd * 60000;
    };
    SP.JsGrid.Internal.RoundTime.prototype = {
        RoundForGanttDisplay: function(intlDate) {
        ULSrd5:
            ;
            var ms = intlDate.get_ticks() % 86400000;

            if (ms <= this.workDayStartMs) {
                intlDate = SP.JsGrid.Internal.DateManip.RoundDown(intlDate, this.ganttDisplayInfo.unit, this.ganttDisplayInfo.count);
            }
            else if (ms >= this.workDayEndMs) {
                intlDate = SP.JsGrid.Internal.DateManip.RoundUp(intlDate, this.ganttDisplayInfo.unit, this.ganttDisplayInfo.count);
            }
            return intlDate;
        },
        RoundForGanttStartDrag: function(intlDate) {
        ULSrd5:
            ;
            intlDate = SP.JsGrid.Internal.DateManip.RoundDown(intlDate, this.ganttDragInfo.unit, this.ganttDragInfo.count);
            if (this.ganttDragInfo.unit >= SP.JsGrid.Internal.DateTimeUnit.Day) {
                intlDate.setTime(0, 0, 0, this.workDayStartMs);
            }
            return intlDate;
        },
        RoundForGanttFinishDrag: function(intlDate) {
        ULSrd5:
            ;
            intlDate = SP.JsGrid.Internal.DateManip.RoundUp(intlDate, this.ganttDragInfo.unit, this.ganttDragInfo.count);
            if (this.ganttDragInfo.unit >= SP.JsGrid.Internal.DateTimeUnit.Day) {
                intlDate.setTime(-24, 0, 0, this.workDayEndMs);
            }
            return intlDate;
        }
    };
    SP.JsGrid.Internal.DateManip = (function() {
    ULSrd5:
        ;
        var startOfTime = SP.DateTimeUtil.IntlDate.createFromDateParts(1984, 1, 1, 0, SP.DateTimeUtil.SPCalendarType.gregorian);
        var endOfTime = SP.DateTimeUtil.IntlDate.createFromDateParts(2150, 1, 1, 0, SP.DateTimeUtil.SPCalendarType.gregorian);
        var ticksPerMin = 60 * 1000;
        var ticksPerHour = ticksPerMin * 60;
        var ticksPerDay = ticksPerHour * 24;
        var dtu = SP.JsGrid.Internal.DateTimeUnit;
        var incrementDispatch = ['addMinutes', 'addHours', 'addDays', 'addWeeks', 'addMonthThirds', 'addMonths', 'addQuarters', 'addHalfYears', 'addYears'];

        return {
            startOfTimeIntlDateTicks: startOfTime.get_ticks(),
            endOfTimeIntlDateTicks: endOfTime.get_ticks(),
            startOfTimeJsDateTicks: (startOfTime.toJsDate()).getTime(),
            endOfTimeJsDateTicks: (endOfTime.toJsDate()).getTime(),
            RoundUp: function(intlDate, tsunit, count) {
            ULSrd5:
                ;
                var dnDate = this.RoundDown(intlDate, tsunit, count);

                return intlDate.equals(dnDate) ? dnDate : this.RoundDown(this.Increment(intlDate, tsunit, count), tsunit, count);
            },
            RoundDown: function(intlDate, tsunit, count) {
                var ticks = intlDate.get_ticks();
                var year, month, day;
                var calType, newMonth, leapMonthIndex;
                var r;

                switch (tsunit) {
                case dtu.Minute:
                    r = SP.DateTimeUtil.IntlDate.createFromTicks(ticks - ticks % (count * ticksPerMin), intlDate.get_calendarType());
                    break;
                case dtu.Hour:
                    r = SP.DateTimeUtil.IntlDate.createFromTicks(ticks - ticks % (count * ticksPerHour), intlDate.get_calendarType());
                    break;
                case dtu.Day:
                case dtu.Week:
                    if (tsunit == dtu.Week) {
                        count *= 7;
                    }
                    var newTicks;

                    if (ticks > _spRegionalSettings.firstDayOfWeek * ticksPerDay) {
                        var basedTicks = ticks - this.startOfTimeIntlDateTicks;

                        newTicks = ticks - (basedTicks - _spRegionalSettings.firstDayOfWeek * ticksPerDay) % (count * ticksPerDay);
                    }
                    else {
                        newTicks = this.startOfTimeIntlDateTicks + _spRegionalSettings.firstDayOfWeek * ticksPerDay;
                    }
                    r = SP.DateTimeUtil.IntlDate.createFromTicks(newTicks, intlDate.get_calendarType());
                    break;
                case dtu.Month:
                    Sys.Debug.assert(count == 1);
                    r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), intlDate.get_month(), 1, intlDate.get_era(), intlDate.get_calendarType());
                    break;
                case dtu.Quarter:
                    Sys.Debug.assert(count == 1);
                    var qtr = intlDate.get_quarter();

                    calType = intlDate.get_calendarType();
                    year = intlDate.get_year();
                    newMonth = qtr * 3 - 2;
                    leapMonthIndex = SP.DateTimeUtil.SPIntlCal.isLocalYearLeap(calType, year) ? SP.DateTimeUtil.SPIntlCal.getMonthLeap(calType, year) : -1;
                    if (leapMonthIndex != -1 && leapMonthIndex < newMonth - 1) {
                        newMonth++;
                    }
                    r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), newMonth, 1, intlDate.get_era(), intlDate.get_calendarType());
                    break;
                case dtu.HalfYear:
                    Sys.Debug.assert(count == 1);
                    var halfYear = intlDate.get_halfYear();

                    calType = intlDate.get_calendarType();
                    year = intlDate.get_year();
                    newMonth = (halfYear - 1) * 6 + 1;
                    leapMonthIndex = SP.DateTimeUtil.SPIntlCal.isLocalYearLeap(calType, year) ? SP.DateTimeUtil.SPIntlCal.getMonthLeap(calType, year) : -1;
                    if (leapMonthIndex != -1 && leapMonthIndex < newMonth - 1) {
                        newMonth++;
                    }
                    r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), newMonth, 1, intlDate.get_era(), intlDate.get_calendarType());
                    break;
                case dtu.Year:
                    r = intlDate.clone();
                    r.addYears(-(intlDate.get_year() % count));
                    r.setDate(r.get_year(), 1, 1, r.get_era());
                    r.setTime(0, 0, 0, 0);
                    break;
                case dtu.ThirdMonth:
                default:
                    Sys.Debug.assert(false);
                    break;
                }
                return r;
            },
            Increment: function(intlDate, tsunit, count) {
            ULSrd5:
                ;
                var r = intlDate.clone();

                r[incrementDispatch[tsunit]](count);
                return r;
            },
            ReduceUnit: function(tsunitAndCount) {
            ULSrd5:
                ;
                var r = tsunitAndCount;

                if (r.count > 1) {
                    r.count = 1;
                }
                else {
                    switch (r.unit) {
                    case dtu.Minute:
                        break;
                    case dtu.Hour:
                        r.unit = dtu.Minute;
                        break;
                    case dtu.Day:
                        r.unit = dtu.Hour;
                        break;
                    case dtu.Week:
                    case dtu.ThirdMonth:
                        r.unit = dtu.Day;
                        break;
                    case dtu.Month:
                        r.unit = dtu.Week;
                        break;
                    case dtu.Quarter:
                    case dtu.HalfYear:
                    case dtu.Year:
                        r.unit = dtu.Month;
                        break;
                    default:
                        Sys.Debug.assert(false);
                        break;
                    }
                }
                return r;
            }
        };
    })();
    SP.JsGrid.Internal.VmlGanttDrawImpl = function(bRTL) {
        var _canvas;
        var _barShapeEnum = SP.JsGrid.Internal.GanttPane.BarShape;
        var _barPatternEnum = SP.JsGrid.Internal.GanttPane.BarPattern;
        var _endPtShapeEnum = SP.JsGrid.Internal.GanttPane.EndPtShape;
        var _offsetTop = 0;
        var _paneSize;
        var _patterns = [, , 'patt_25pct.PNG', 'patt_50pct.PNG', 'patt_75pct.PNG', 'patt_se_diag.PNG', 'patt_ne_diag.PNG', 'patt_both_diag.PNG', 'patt_vert.PNG', 'patt_horiz.PNG', 'patt_grid.PNG'];
        var _ends = [, 'HomePlateUp', 'HomePlateDown', 'Diamond', 'UpTriangle', 'DownTriangle', 'RightTriangle', 'LeftTriangle', 'UpArrow', 'MiniHomePlateDown', 'MiniHomePlateUp', 'VertBar', 'Square', 'Diamond', 'DownArrow', 'UpTriangle', 'DownTriangle', 'UpArrow', 'DownArrow', 'Circle', 'Star', 'OpenBracket', 'CloseBracket'];

        this.Init = function(topLevelCanvas, paneSize) {
        ULSrd5:
            ;
            _paneSize = paneSize;
            EnableVml();
            InstallVmlTemplates(topLevelCanvas);
        };
        this.OnResize = OnResize;
        this.DrawBar = function(rect, barStyle) {
        ULSrd5:
            ;
            if (barStyle.shape == _barShapeEnum.None) {
                return null;
            }
            var shapeType = ComputeVmlShapeType(barStyle.shape, barStyle.pattern);
            var obj;

            if (shapeType == '#SolidLineBar' || barStyle.pattern == _barPatternEnum.Transparent) {
                obj = CreateVmlElement('rect');
            }
            else {
                obj = CreateVmlElement('shape');
                obj.type = shapeType;
                if (shapeType == '#PatternBar') {
                    var fill = AppendVmlElement('fill', obj);

                    fill.src = '/_layouts/15/images/' + _patterns[barStyle.pattern];
                }
                else if (shapeType == '#PatternLineBar') {
                    var stroke = AppendVmlElement('stroke', obj);

                    stroke.src = '/_layouts/15/images/' + _patterns[barStyle.pattern];
                }
            }
            obj.strokeweight = barStyle.strokeWeight;
            obj.style.left = rect.left;
            obj.style.top = rect.top;
            obj.style.width = rect.width;
            obj.style.height = rect.height;
            _canvas.appendChild(obj);
            if (shapeType == '#PatternLineBar') {
                obj.fillcolor = barStyle.color;
            }
            else {
                obj.strokecolor = barStyle.color;
            }
            if (barStyle.pattern == _barPatternEnum.Transparent) {
                obj.filled = false;
            }
            return new VmlDOMElementHandle(obj);
        };
        this.DrawShape = function(rect, shapeStyle) {
        ULSrd5:
            ;
            var obj;

            switch (shapeStyle.shape) {
            case _endPtShapeEnum.None:
                return null;
            case _endPtShapeEnum.HomePlateUp:
            case _endPtShapeEnum.HomePlateDown:
            case _endPtShapeEnum.Diamond:
            case _endPtShapeEnum.UpTriangle:
            case _endPtShapeEnum.DownTriangle:
            case _endPtShapeEnum.LeftTriangle:
            case _endPtShapeEnum.RightTriangle:
            case _endPtShapeEnum.UpArrow:
            case _endPtShapeEnum.DownArrow:
            case _endPtShapeEnum.MiniHomePlateUp:
            case _endPtShapeEnum.MiniHomePlateDown:
            case _endPtShapeEnum.VertBar:
            case _endPtShapeEnum.Square:
            case _endPtShapeEnum.Circle:
            case _endPtShapeEnum.Star:
            case _endPtShapeEnum.OpenBracket:
            case _endPtShapeEnum.CloseBracket:
                obj = CreateVmlElement('shape');
                obj.type = '#' + _ends[shapeStyle.shape];
                obj.strokecolor = shapeStyle.color;
                break;
            default:
                obj = CreateVmlElement('group');
                var oval = AppendVmlElement('oval', obj);

                oval.style.width = (oval.style.height = 1000);
                oval.strokecolor = shapeStyle.color;
                var shape = AppendVmlElement('shape', obj);

                shape.type = '#' + _ends[shapeStyle.shape];
                shape.strokecolor = shapeStyle.color;
                switch (shapeStyle.shape) {
                case _endPtShapeEnum.CircledDiamond:
                    shape.style.width = (shape.style.height = 800);
                    shape.style.top = (shape.style.left = 100);
                    break;
                case _endPtShapeEnum.CircledUpTriangle:
                    shape.style.width = (shape.style.height = 700);
                    shape.style.top = 70;
                    shape.style.left = 150;
                    break;
                case _endPtShapeEnum.CircledDownTriangle:
                    shape.style.width = (shape.style.height = 700);
                    shape.style.top = 230;
                    shape.style.left = 150;
                    break;
                case _endPtShapeEnum.CircledUpArrow:
                    shape.style.width = (shape.style.height = 800);
                    shape.style.top = 80;
                    shape.style.left = 100;
                    break;
                case _endPtShapeEnum.CircledDownArrow:
                    shape.style.width = (shape.style.height = 800);
                    shape.style.top = 120;
                    shape.style.left = 100;
                    break;
                default:
                    return null;
                }
            }
            obj.style.left = rect.left;
            obj.style.top = rect.top;
            obj.style.width = rect.width;
            _canvas.appendChild(obj);
            obj.style.height = rect.height;
            return new VmlDOMElementHandle(obj);
        };
        this.DrawLink = function(points, left) {
        ULSrd5:
            ;
            var obj = CreateVmlElement('polyline');

            obj.filled = false;
            var stroke = AppendVmlElement('stroke', obj);

            stroke.endarrow = 'classic';
            stroke.color = '#8DB8EB';
            obj.points = points.join(',');
            _canvas.appendChild(obj);
            obj.style.left = left;
            return new VmlDOMElementHandle(obj);
        };
        function VmlDOMElementHandle(obj) {
        ULSrd5:
            ;
            this.VmlDOMElement = obj;
        }
        VmlDOMElementHandle.prototype = {
            Dispose: function() {
            ULSrd5:
                ;
                this.VmlDOMElement.parentNode.removeChild(this.VmlDOMElement);
            },
            TranslateVertically: function(pixelDeltaTop) {
            ULSrd5:
                ;
                this.VmlDOMElement.style.top = parseInt(this.VmlDOMElement.style.top, 10) + pixelDeltaTop + 'px';
            },
            TranslateHorizontally: function(left) {
            ULSrd5:
                ;
                var currentLeft = parseInt(this.VmlDOMElement.style.left, 10);

                if (currentLeft != left) {
                    this.VmlDOMElement.style.left = left + 'px';
                }
            }
        };
        function CreateVmlElement(name) {
        ULSrd5:
            ;
            var elem = document.createElement('v:' + name);

            elem.className = 'jsgrid-vml';
            return elem;
        }
        function AppendVmlElement(name, parentElem) {
        ULSrd5:
            ;
            var elem = document.createElement('v:' + name);

            elem.className = 'jsgrid-vml';
            parentElem.appendChild(elem);
            return elem;
        }
        function ComputeVmlShapeType(shape, pattern) {
        ULSrd5:
            ;
            switch (shape) {
            case _barShapeEnum.Full:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#EmptyBar' : pattern == _barPatternEnum.Solid ? '#SolidBar' : '#PatternBar';
            case _barShapeEnum.TopHalf:
            case _barShapeEnum.MidHalf:
            case _barShapeEnum.BottomHalf:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#EmptyBar' : pattern == _barPatternEnum.Solid ? '#SolidBar' : '#PatternBar';
            case _barShapeEnum.TopLine:
            case _barShapeEnum.MidLine:
            case _barShapeEnum.BottomLine:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#SolidLineBar' : pattern == _barPatternEnum.Solid ? '#SolidLineBar' : '#PatternLineBar';
            default:
                break;
            }
            return null;
        }
        function EnableVml() {
        ULSrd5:
            ;
            document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
        }
        function InstallVmlTemplates(topLevelCanvas) {
        ULSrd5:
            ;
            var ganttVmlTemplates = document.createElement('div');

            ganttVmlTemplates.style.display = 'none';
            var templs = {
                HomePlateUp: 'M50,R50,50,,50,-100,,,-50X',
                HomePlateDown: 'M,R100,,,50,-50,50L,50X',
                Diamond: 'M50,L100,50,50,100,,50X',
                UpTriangle: 'M50,L100,100,,100X',
                DownTriangle: 'M,L100,,50,100X',
                LeftTriangle: 'M,50L100,100,100,X',
                RightTriangle: 'M,L100,50,,100X',
                UpArrow: 'M,50L50,R50,50,-30,,,50,-40,,,-50X',
                DownArrow: 'M,50R30,,,-50,40,,,50,30,,-50,50X',
                MiniHomePlateUp: 'M25,100R,-25,25,-25,25,25,,25X',
                MiniHomePlateDown: 'M25,R,25,25,25,25,-25,,-25X',
                VertBar: 'M35,R30,,,100,-30,X',
                Square: 'M22,22R56,,,56,-56,X',
                Circle: 'AL50,50,50,50,0,23592960',
                Star: 'M50,L38,38,,38R31,24L19,100R31,-23L81,100,69,62,100,38R-38,X',
                OpenBracket: 'M0,0R50,0R0,20R-30,0R0,60R30,0R0,20R-50,0X',
                CloseBracket: 'M100,0R-50,0R0,20R30,0R0,60R-30,0R0,20R50,0X'
            };

            for (var id in templs) {
                var st = AppendVmlElement('shapetype', ganttVmlTemplates);

                st.id = id;
                st.coordsize = '100,100';
                st.path = templs[id];
                var fill = AppendVmlElement('fill', st);

                fill.type = 'solid';
                fill.color = 'line lighten 180';
            }
            var cmn = ' coordsize="100,100" path="M,L100,L100,100L,100X"';
            var beh = ' style="behavior:url(#default#vml)"';

            ganttVmlTemplates.innerHTML += ['<v:shapetype id="SolidBar"', cmn, beh, '>', '<v:fill type="solid" color="line lighten 180"', beh, '/>', '<v:path limo="50,50"', beh, '/></v:shapetype>', '<v:shapetype id="GradientBar"', cmn, beh, '>', '<v:fill type="gradient" color="line" color2="line lighten 80" focus="10%" method="linear"', beh, '/>', '<v:path limo="50,50"', beh, '/></v:shapetype>', '<v:shapetype id="EmptyBar"', cmn, beh, '><v:path limo="50,50"', beh, '/></v:shapetype>', '<v:shapetype id="PatternBar"', cmn, beh, '>', '<v:fill type="pattern" color2="line"', beh, '/>', '<v:path limo="50,50"', beh, '/></v:shapetype>', '<v:shapetype id="PatternLineBar" coordsize="10,1" path="M,R10,,,1,-10,X"', beh, '>', '<v:stroke filltype="pattern" color2="fill" color="white"', beh, '/>', '</v:shapetype>'].join("");
            topLevelCanvas.appendChild(ganttVmlTemplates);
            _canvas = CreateVmlElement('group', topLevelCanvas);
            if (bRTL) {
                _canvas.style.flip = 'x';
            }
            topLevelCanvas.appendChild(_canvas);
        }
        function OnResize() {
        ULSrd5:
            ;
            _canvas.coordsize = _paneSize.GetWidth() + ',' + _paneSize.GetHeight();
            _canvas.style.width = _paneSize.GetWidth();
            _canvas.style.height = _paneSize.GetHeight();
        }
    };
    SP.JsGrid.Internal.SvgGanttDrawImpl = function(bRTL) {
        var _barShapeEnum = SP.JsGrid.Internal.GanttPane.BarShape;
        var _barPatternEnum = SP.JsGrid.Internal.GanttPane.BarPattern;
        var _endPtShapeEnum = SP.JsGrid.Internal.GanttPane.EndPtShape;
        var _patterns = [, , 'patt_25pct.PNG', 'patt_50pct.PNG', 'patt_75pct.PNG', 'patt_se_diag.PNG', 'patt_ne_diag.PNG', 'patt_both_diag.PNG', 'patt_vert.PNG', 'patt_horiz.PNG', 'patt_grid.PNG'];
        var _ends = [, 'HomePlateUp', 'HomePlateDown', 'Diamond', 'UpTriangle', 'DownTriangle', 'RightTriangle', 'LeftTriangle', 'UpArrow', 'MiniHomePlateDown', 'MiniHomePlateUp', 'VertBar', 'Square', 'Diamond', 'DownArrow', 'UpTriangle', 'DownTriangle', 'UpArrow', 'DownArrow', 'Circle', 'Star', 'OpenBracket', 'CloseBracket'];
        var svg_ns = "http://www.w3.org/2000/svg";
        var xlink_ns = "http://www.w3.org/1999/xlink";
        var svgCanvas;
        var _paneSize;
        var patternUrlMap = {};
        var gradientUrlMap = {};
        var lightenPct1 = 0.1;
        var lightenPct2 = 0.2;
        var lightenPct3 = 0.3;
        var lightenColorsMap = {};
        var baseUriForLocalIRIs = GetBaseURIForLocalIRIs();

        this.Init = function(canvas, paneSize) {
        ULSrd5:
            ;
            _paneSize = paneSize;
            EnableSvg(canvas);
        };
        this.OnResize = OnResize;
        this.DrawBar = function(rect, barStyle) {
        ULSrd5:
            ;
            if (barStyle.shape == _barShapeEnum.None) {
                return null;
            }
            var elementHandle = new SvgDOMElementHandle();

            DrawBarImpl(elementHandle, rect, barStyle);
            return elementHandle;
        };
        this.DrawShape = function(rect, shapeStyle) {
        ULSrd5:
            ;
            if (shapeStyle.shape == _endPtShapeEnum.None) {
                return null;
            }
            var elementHandle = new SvgDOMElementHandle();

            DrawShapeImpl(elementHandle, rect, shapeStyle);
            return elementHandle;
        };
        this.DrawLink = function(points, left) {
        ULSrd5:
            ;
            var elementHandle = new SvgDOMElementHandle(true);

            DrawLinkImpl(elementHandle, points, left);
            return elementHandle;
        };
        function SvgDOMElementHandle(isLink) {
        ULSrd5:
            ;
            this.SvgDOMElement = null;
            this._isLink = isLink;
        }
        SvgDOMElementHandle.prototype = {
            Dispose: function() {
            ULSrd5:
                ;
                var _this = this;

                DisposeImpl(_this);
                function DisposeImpl(svgDOMElementHandle) {
                ULSrd5:
                    ;
                    if (svgDOMElementHandle.SvgDOMElement != null) {
                        svgDOMElementHandle.SvgDOMElement.parentNode.removeChild(svgDOMElementHandle.SvgDOMElement);
                    }
                }
            },
            TranslateVertically: function(pixelDeltaTop) {
            ULSrd5:
                ;
                var _this = this;

                TranslateVerticallyImpl(_this, pixelDeltaTop);
                function TranslateVerticallyImpl(svgDOMElementHandle, pixelDeltaTop) {
                ULSrd5:
                    ;
                    if (svgDOMElementHandle.SvgDOMElement != null) {
                        if (!svgDOMElementHandle._isLink) {
                            var currentTop = parseInt(svgDOMElementHandle.SvgDOMElement.getAttributeNS(null, 'y'), 10);

                            svgDOMElementHandle.SvgDOMElement.setAttributeNS(null, 'y', currentTop + pixelDeltaTop);
                        }
                        else {
                            svgDOMElementHandle.SvgDOMElement.setAttributeNS(null, 'transform', String.format('translate(0,{0})', pixelDeltaTop));
                        }
                    }
                }
            },
            TranslateHorizontally: function(left) {
            ULSrd5:
                ;
                var _this = this;

                TranslateHorizontallyImpl(_this, left);
                function TranslateHorizontallyImpl(svgDOMElementHandle, left) {
                ULSrd5:
                    ;
                    if (svgDOMElementHandle.SvgDOMElement != null) {
                        if (!svgDOMElementHandle._isLink) {
                            var currentLeft = parseInt(svgDOMElementHandle.SvgDOMElement.getAttributeNS(null, 'x'), 10);

                            if (currentLeft != left) {
                                svgDOMElementHandle.SvgDOMElement.setAttributeNS(null, 'x', left);
                            }
                        }
                        else {
                            svgDOMElementHandle.SvgDOMElement.setAttributeNS(null, 'transform', String.format('translate({0},0)', left));
                        }
                    }
                }
            }
        };
        function DrawBarImpl(elementHandle, rect, barStyle) {
        ULSrd5:
            ;
            var barType = ChooseBar(barStyle.shape, barStyle.pattern);
            var obj = document.createElementNS(svg_ns, 'rect');

            obj.setAttributeNS(null, 'x', rect.left);
            obj.setAttributeNS(null, 'y', rect.top);
            obj.setAttributeNS(null, 'width', rect.width);
            obj.setAttributeNS(null, 'height', rect.height);
            obj.setAttributeNS(null, 'stroke-width', barStyle.strokeWeight);
            if (barType == '#PatternLineBar') {
                obj.setAttributeNS(null, 'stroke', GetPatternUrl(barStyle));
            }
            else {
                obj.setAttributeNS(null, 'stroke', barStyle.color);
            }
            if (barStyle.pattern == _barPatternEnum.Transparent || barStyle.pattern == _barPatternEnum.Empty || barType == '#SolidLineBar' || barType == '#PatternLineBar') {
                obj.setAttributeNS(null, 'fill', 'none');
            }
            else if (barType == '#SolidBar') {
                obj.setAttributeNS(null, 'fill', GetLightenColor(barStyle.color, lightenPct2));
            }
            else if (barType == '#GradientBar') {
                obj.setAttributeNS(null, 'fill', GetGradientUrl(barStyle.color));
            }
            else if (barType == '#PatternBar') {
                obj.setAttributeNS(null, 'fill', GetPatternUrl(barStyle));
            }
            svgCanvas.appendChild(obj);
            elementHandle.SvgDOMElement = obj;
        }
        function DrawShapeImpl(elementHandle, rect, shapeStyle) {
        ULSrd5:
            ;
            var obj;
            var shapeColor = shapeStyle.color;

            switch (shapeStyle.shape) {
            case _endPtShapeEnum.HomePlateUp:
            case _endPtShapeEnum.HomePlateDown:
            case _endPtShapeEnum.Diamond:
            case _endPtShapeEnum.UpTriangle:
            case _endPtShapeEnum.DownTriangle:
            case _endPtShapeEnum.LeftTriangle:
            case _endPtShapeEnum.RightTriangle:
            case _endPtShapeEnum.UpArrow:
            case _endPtShapeEnum.DownArrow:
            case _endPtShapeEnum.MiniHomePlateUp:
            case _endPtShapeEnum.MiniHomePlateDown:
            case _endPtShapeEnum.VertBar:
            case _endPtShapeEnum.Square:
            case _endPtShapeEnum.Circle:
            case _endPtShapeEnum.Star:
            case _endPtShapeEnum.OpenBracket:
            case _endPtShapeEnum.CloseBracket:
                obj = document.createElementNS(svg_ns, 'use');
                obj.setAttributeNS(xlink_ns, 'xlink:href', GetLocalIRI(_ends[shapeStyle.shape]));
                obj.setAttributeNS(null, 'x', rect.left);
                obj.setAttributeNS(null, 'y', rect.top);
                obj.setAttributeNS(null, 'width', rect.width);
                obj.setAttributeNS(null, 'height', rect.height);
                obj.setAttributeNS(null, 'fill', GetLightenColor(shapeColor, lightenPct3));
                obj.setAttributeNS(null, 'stroke', shapeColor);
                obj.setAttributeNS(null, 'stroke-width', '1pt');
                break;
            default:
                obj = document.createElementNS(svg_ns, 'g');
                var circle = document.createElementNS(svg_ns, 'use');

                circle.setAttributeNS(xlink_ns, 'xlink:href', GetLocalIRI(_ends[_endPtShapeEnum.Circle]));
                circle.setAttributeNS(null, 'x', rect.left);
                circle.setAttributeNS(null, 'y', rect.top);
                circle.setAttributeNS(null, 'width', rect.width);
                circle.setAttributeNS(null, 'height', rect.height);
                circle.setAttributeNS(null, 'fill', 'none');
                circle.setAttributeNS(null, 'stroke', shapeStyle.color);
                circle.setAttributeNS(null, 'stroke-width', '3pt');
                obj.appendChild(circle);
                var symbol = document.createElementNS(svg_ns, 'use');

                symbol.setAttributeNS(null, 'x', rect.left);
                symbol.setAttributeNS(null, 'y', rect.top);
                symbol.setAttributeNS(null, 'width', rect.width);
                symbol.setAttributeNS(null, 'height', rect.height);
                symbol.setAttributeNS(null, 'fill', GetLightenColor(shapeColor, lightenPct3));
                var symbolUrl;

                switch (shapeStyle.shape) {
                case _endPtShapeEnum.CircledUpTriangle:
                    symbolUrl = GetLocalIRI("CircledUpTriangle");
                    break;
                case _endPtShapeEnum.CircledDownTriangle:
                    symbolUrl = GetLocalIRI("CircledDownTriangle");
                    break;
                default:
                    symbolUrl = GetLocalIRI(_ends[shapeStyle.shape]);
                    break;
                }
                symbol.setAttributeNS(xlink_ns, 'xlink:href', symbolUrl);
                obj.appendChild(symbol);
            }
            svgCanvas.appendChild(obj);
            elementHandle.SvgDOMElement = obj;
        }
        function DrawLinkImpl(elementHandle, points, left) {
        ULSrd5:
            ;
            var obj = document.createElementNS(svg_ns, 'polyline');

            obj.setAttributeNS(null, 'fill', 'none');
            obj.setAttributeNS(null, 'stroke', '#8DB8EB');
            var markerIRI = GetLocalIRI("ArrowMarker");

            obj.setAttributeNS(null, 'marker-end', "url(" + markerIRI + ")");
            obj.setAttributeNS(null, 'points', points.join(','));
            obj.setAttributeNS(null, 'transform', String.format('translate({0},0)', left));
            svgCanvas.appendChild(obj);
            elementHandle.SvgDOMElement = obj;
        }
        function GetLocalIRI(resourceName) {
        ULSrd5:
            ;
            return baseUriForLocalIRIs + "#" + resourceName;
        }
        function GetBaseURIForLocalIRIs() {
        ULSrd5:
            ;
            if (SP.Internal.DomElement.BrowserIsIE) {
                return "";
            }
            else {
                var baseElems = document.getElementsByTagName("base");

                if (baseElems == null || baseElems.length == 0) {
                    return "";
                }
                var curLocHref = document.location.href;
                var hashPos = curLocHref.indexOf('#');

                return hashPos > 0 ? curLocHref.substring(0, hashPos) : curLocHref;
            }
        }
        function GetPatternUrl(barStyle) {
        ULSrd5:
            ;
            var barColor = barStyle.color.replace("#", "");
            var patternUrl = patternUrlMap[barStyle.pattern + "_" + barColor];

            if (patternUrl)
                return patternUrl;
            patternId = 'Pattern_' + barStyle.pattern + '_' + barColor;
            var pattern = document.createElementNS(svg_ns, 'pattern');

            pattern.setAttributeNS(null, 'id', patternId);
            pattern.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse');
            pattern.setAttributeNS(null, 'x', '0');
            pattern.setAttributeNS(null, 'y', '0');
            pattern.setAttributeNS(null, 'width', '8');
            pattern.setAttributeNS(null, 'height', '8');
            pattern.setAttributeNS(null, 'viewBox', '0 0 8 8');
            (document.getElementById('definitions')).appendChild(pattern);
            var image = document.createElementNS(svg_ns, 'image');

            image.setAttributeNS(null, 'width', '8px');
            image.setAttributeNS(null, 'height', '8px');
            var originalCanvas = CreateCanvas();
            var originalCtx = originalCanvas.getContext('2d');
            var img = document.createElement("img");

            img.onload = function() {
            ULSrd5:
                ;
                originalCtx.drawImage(img, 0, 0);
                var coloredCanvas = CreateCanvas();
                var ctx = coloredCanvas.getContext('2d');

                ProcessImageData(originalCtx, ctx, barColor);
                image.setAttributeNS(xlink_ns, 'xlink:href', coloredCanvas.toDataURL());
                pattern.appendChild(image);
            };
            img.src = '/_layouts/15/images/' + _patterns[barStyle.pattern];
            patternUrlMap[barStyle.pattern + "_" + barColor] = (patternUrl = 'url(#' + patternId + ')');
            return patternUrl;
        }
        function ProcessImageData(ctx, ctx2, newColor) {
        ULSrd5:
            ;
            var imgData = ctx.getImageData(0, 0, 8, 8);
            var newR = parseInt(newColor.substring(0, 2), 16);
            var newG = parseInt(newColor.substring(2, 4), 16);
            var newB = parseInt(newColor.substring(4, 6), 16);

            for (var i = 0; i < imgData.data.length; i += 4) {
                var r = imgData.data[i];
                var g = imgData.data[i + 1];
                var b = imgData.data[i + 2];
                var a = imgData.data[i + 3];

                if (r == 255 && g == 255 && b == 255) { }
                else {
                    r = newR;
                    g = newG;
                    b = newB;
                    imgData.data[i] = r;
                    imgData.data[i + 1] = g;
                    imgData.data[i + 2] = b;
                }
            }
            ctx2.putImageData(imgData, 0, 0);
        }
        function CreateCanvas() {
        ULSrd5:
            ;
            var canvasElem = document.createElement('canvas');

            canvasElem.width = 8;
            canvasElem.height = 8;
            return canvasElem;
        }
        function GetGradientUrl(color) {
        ULSrd5:
            ;
            var gradientUrl = gradientUrlMap[color];

            if (gradientUrl)
                return gradientUrl;
            gradientId = 'Gradient_' + color.replace('#', '');
            var gradient = document.createElementNS(svg_ns, 'linearGradient');

            gradient.setAttributeNS(null, 'id', gradientId);
            gradient.setAttributeNS(null, 'x1', '0%');
            gradient.setAttributeNS(null, 'y1', '0%');
            gradient.setAttributeNS(null, 'x2', '0%');
            gradient.setAttributeNS(null, 'y2', '50%');
            gradient.setAttributeNS(null, 'spreadMethod', 'reflect');
            (document.getElementById('definitions')).appendChild(gradient);
            var stopColor1 = document.createElementNS(svg_ns, 'stop');

            stopColor1.setAttributeNS(null, 'offset', '0%');
            stopColor1.setAttributeNS(null, 'stop-color', GetLightenColor(color, lightenPct1));
            gradient.appendChild(stopColor1);
            var stopColor2 = document.createElementNS(svg_ns, 'stop');

            stopColor2.setAttributeNS(null, 'offset', '100%');
            stopColor2.setAttributeNS(null, 'stop-color', GetLightenColor(color, lightenPct3));
            gradient.appendChild(stopColor2);
            var localIRI = GetLocalIRI(gradientId);

            gradientUrlMap[color] = (gradientUrl = 'url(' + localIRI + ')');
            return gradientUrl;
        }
        function GetLightenColor(hexColor, pct) {
        ULSrd5:
            ;
            var colorId = hexColor + pct;
            var r = lightenColorsMap[colorId];

            if (r == null) {
                var targetPct = 1 - pct;
                var color = SP.JsGrid.Internal.Color.HexStringToColor(hexColor);
                var lightenColor = SP.JsGrid.Internal.Color.MakeColor(1 - (1 - color.r) * targetPct, 1 - (1 - color.g) * targetPct, 1 - (1 - color.b) * targetPct);

                lightenColorsMap[colorId] = (r = SP.JsGrid.Internal.Color.ColorToHexString(lightenColor));
            }
            return r;
        }
        function ChooseBar(shape, pattern) {
        ULSrd5:
            ;
            switch (shape) {
            case _barShapeEnum.Full:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#EmptyBar' : pattern == _barPatternEnum.Solid ? '#SolidBar' : '#PatternBar';
            case _barShapeEnum.TopHalf:
            case _barShapeEnum.MidHalf:
            case _barShapeEnum.BottomHalf:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#EmptyBar' : pattern == _barPatternEnum.Solid ? '#SolidBar' : '#PatternBar';
            case _barShapeEnum.TopLine:
            case _barShapeEnum.MidLine:
            case _barShapeEnum.BottomLine:
                return pattern == _barPatternEnum.Empty || pattern == _barPatternEnum.Transparent ? '#SolidLineBar' : pattern == _barPatternEnum.Solid ? '#SolidLineBar' : '#PatternLineBar';
            default:
                break;
            }
            return null;
        }
        function EnableSvg(canvas) {
        ULSrd5:
            ;
            var svgContent = GetSVGInitialMarkup();

            canvas.innerHTML = svgContent;
            svgCanvas = document.createElementNS(svg_ns, 'g');
            canvas.firstChild.appendChild(svgCanvas);
        }
        function GetSVGInitialMarkup() {
        ULSrd5:
            ;
            var viewBox100 = ' viewBox="0,0 100,100"';
            var viewBox1000 = ' viewBox="0,0 1000,1000"';
            var preserveAspectRatioNone = ' preserveAspectRatio="none"';
            var svgDefaultContent = ['<svg xmlns="', svg_ns, '" xmlns:xlink="', xlink_ns, '" width=100% height=100%>', '<defs id = "definitions">', '<symbol id="HomePlateUp"', viewBox100, preserveAspectRatioNone, , '><path d="M50,0 l 50,50 0,50 -100,0 0,-50Z" />', '</symbol>', '<symbol id="HomePlateDown"', viewBox100, preserveAspectRatioNone, , '><path d="M0,0 l 100,0 0,50 -50,50 L0,50Z" />', '</symbol>', '<symbol id="Diamond"', viewBox100, preserveAspectRatioNone, , '><path d="M50,0 L100,50 50,100 0,50Z" />', '</symbol>', '<symbol id="UpTriangle"', viewBox100, preserveAspectRatioNone, , '><path d="M50,0 L100,100 0,100Z" />', '</symbol>', '<symbol id="DownTriangle"', viewBox100, preserveAspectRatioNone, , '><path d="M0,0 L100,0 50,100Z" />', '</symbol>', '<symbol id="LeftTriangle"', viewBox100, preserveAspectRatioNone, , '><path d="M0,50 L100,100 100,0Z" />', '</symbol>', '<symbol id="RightTriangle"', viewBox100, preserveAspectRatioNone, , '><path d="M0,0 L100,50 0,100Z" />', '</symbol>', '<symbol id="UpArrow"', viewBox100, preserveAspectRatioNone, , '><path d="M0,50 L50,0 l 50,50 -30,0 0,50 -40,0 0,-50Z" />', '</symbol>', '<symbol id="DownArrow"', viewBox100, preserveAspectRatioNone, , '><path d="M0,50 l 30,0 0,-50 40,0 0,50 30,0 -50,50Z" />', '</symbol>', '<symbol id="MiniHomePlateUp"', viewBox100, preserveAspectRatioNone, , '><path d="M25,100 l 0,-25 25,-25 25,25 0,25Z" />', '</symbol>', '<symbol id="MiniHomePlateDown"', viewBox100, preserveAspectRatioNone, , '><path d="M25,0 l 0,25 25,25 25,-25 0,-25Z" />', '</symbol>', '<symbol id="VertBar"', viewBox100, preserveAspectRatioNone, , '><path d="M35,0 l 30,0 0,100 -30,0Z" />', '</symbol>', '<symbol id="Square"', viewBox100, preserveAspectRatioNone, , '><path d="M22,22 l 56,0 0,56 -56,0Z" />', '</symbol>', '<symbol id="Circle"', viewBox100, preserveAspectRatioNone, , '><circle cx="50" cy="50" r="50" />', '</symbol>', '<symbol id="Star"', viewBox100, preserveAspectRatioNone, , '><path d="M50,0 L38,38 0,38 l 31,24 L19,100 l 31,-23 L81,100 69,62 100,38 l -38,0Z" />', '</symbol>', '<symbol id="OpenBracket"', viewBox100, preserveAspectRatioNone, , '><path d="M0,0 l 50,0 0,20 -30,0 0,60 30,0 0,20 -50,0Z" />', '</symbol>', '<symbol id="CloseBracket"', viewBox100, preserveAspectRatioNone, , '><path d="M100,0 l -50,0 0,20 30,0 0,60 -30,0 0,20 50,0Z" />', '</symbol>', '<symbol id="CircledUpTriangle"', viewBox1000, preserveAspectRatioNone, , '><path d="M500,0 L67,750 933,750Z" />', '</symbol>', '<symbol id="CircledDownTriangle"', viewBox1000, preserveAspectRatioNone, , '><path d="M500,1000 L67,250 933,250Z" />', '</symbol>', '<marker id="ArrowMarker" markerWidth="8" markerHeight="8" viewBox="0,0 100,100" markerUnits="strokeWidth" orient="auto" refX="100" refY="50" color="#8DB8EB">', '<polyline points="0,0 100,50 0,100 50,50 0,0" stroke="currentColor" fill="currentColor" />', '</marker>', '</defs>', '</svg>'].join('');

            return svgDefaultContent;
        }
        function OnResize() {
        ULSrd5:
            ;
            if (bRTL && svgCanvas != null) {
                svgCanvas.setAttributeNS(null, 'transform', 'translate(' + _paneSize.GetWidth() + ', 0) scale(-1, 1)');
            }
        }
    };
    if (typeof Sys != "undefined" && Sys && Sys.Application) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("jsgrid.gantt.js");
    }
}
function ULSrd5() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "JsGrid.Gantt.commentedjs";
    return o;
}
$_global_jsgrid_gantt();
