function $_global_mapviewtemplate() {
    (function() {
    ULSS3N:
        ;
        if (typeof MapViewTemplate == "object") {
            return;
        }
        var MapViewTemplate = (function() {
        ULSS3N:
            ;
            if (typeof GeolocationFieldTemplate !== "object") {
                throw "GeolocationFieldTemplate not loaded";
            }
            var statusID = null;
            var loadingIconHTML = '<img src="' + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + '" style="display:block;padding-left:40%;padding-top:20%;" width="16px" height="16px" />';

            return {
                RenderCardViewBodyTemplate: function(renderCtx) {
                    var listSchema = renderCtx.ListSchema;
                    var group1 = listSchema.group1;
                    var group2 = listSchema.group2;
                    var groupRender = listSchema.groupRender;

                    if (group1 != null || group2 != null || groupRender == true) {
                        if (statusID == null) {
                            statusID = addStatus(STSHtmlEncode(Strings.STS.L_GroupingEnabled_MapView), null, false);
                            setStatusPriColor(statusID, 'yellow');
                        }
                        return RenderViewTemplate(renderCtx);
                    }
                    if (renderCtx.Templates.Body == '') {
                        return RenderViewTemplate(renderCtx);
                    }
                    var geolocationColumnExists = false;

                    for (i = 0; i < listSchema.Field.length; i++) {
                        if (listSchema.Field[i].Type == "Geolocation") {
                            geolocationColumnExists = true;
                            break;
                        }
                    }
                    if (!geolocationColumnExists) {
                        if (statusID == null) {
                            statusID = addStatus(STSHtmlEncode(Strings.STS.L_GeolocationField_Deleted_MapView), null, false);
                            setStatusPriColor(statusID, 'yellow');
                        }
                        return RenderViewTemplate(renderCtx);
                    }
                    renderCtx.AllowGridMode = false;
                    var itemTpls = renderCtx.Templates['Item'];

                    if (itemTpls == null || itemTpls == {})
                        return '';
                    var listData = renderCtx.ListData;
                    var mapViewHeight = MapViewTemplate.CalculateHeight();
                    var colspan = parseInt(listSchema.Field.length) + 1;
                    var iStr = '';
                    var bHasHeader = renderCtx.Templates.Header != '';

                    if (bHasHeader) {
                        iStr += RenderHeaderTemplate(renderCtx);
                        iStr += '<script id="scriptBody';
                        iStr += renderCtx.wpq;
                        iStr += '"></script>';
                    }
                    else {
                        iStr = '<table>';
                    }
                    if (listData.Row == 0 || listSchema.Field.length == 0 || listSchema.Field.length == 1 && listSchema.Field[0].FieldType == "Attachments") {
                        mapViewHeight -= 100;
                        iStr += '<tbody><tr ><td colspan="100">';
                        iStr += '<div id="mapContainer_' + renderCtx.wpq + '" class="ms-positionRelative ms-fullWidth"  style="height:' + String(mapViewHeight) + 'px;">';
                        iStr += '<a id="mapAnchor_' + renderCtx.wpq + '" href="javascript:;" style="display:block; width:100%; height:100%;" ';
                        iStr += 'title="' + STSHtmlEncode(Strings.STS.L_BingMapsControl) + '"></a>';
                        iStr += '</div></td></tr></tbody>';
                        iStr += '</table>';
                        return iStr;
                    }
                    if (listSchema.Field.length == 1 && listSchema.Field[0].Type == "Geolocation" || listSchema.Field.length == 2 && listSchema.Field[0].Type == "Geolocation" && listSchema.Field[1].FieldType == "Attachments" || listSchema.Field.length == 2 && listSchema.Field[1].Type == "Geolocation" && listSchema.Field[0].FieldType == "Attachments") {
                        var index = listSchema.Field[0].Type == "Geolocation" ? 0 : 1;
                        var fldName = listSchema.Field[index].RealFieldName;
                        var rowCount = listData.Row.length;

                        for (var i = 0; i < rowCount; i++) {
                            renderCtx.CurrentItem = listData.Row[i];
                            renderCtx.CurrentIdx = i;
                            var value = GeolocationFieldTemplate.ParseGeolocationValue(listData.Row[i][fldName]);

                            if (value != null) {
                                var point = new Object();

                                point.latitude = value.latitude;
                                point.longitude = value.longitude;
                                point.isDraggable = false;
                                point.showHover = false;
                                point.label = String(i + 1);
                                point.pushpinID = GenerateIID(renderCtx);
                                point.icon = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                                renderCtx.GeolocationPoints.push(point);
                            }
                            renderCtx.CurrentItem = null;
                            renderCtx.CurrentIdx = null;
                        }
                        iStr += '<tbody><tr ><td colspan=' + String(colspan) + '>';
                        iStr += '<div id="mapContainer_' + renderCtx.wpq + '" class="ms-positionRelative ms-fullWidth" style="height:' + String(mapViewHeight) + 'px;">';
                        iStr += '<a id="mapAnchor_' + renderCtx.wpq + '" href="javascript:;" style="display:block; width:100%; height:100%;" ';
                        iStr += 'title="' + STSHtmlEncode(Strings.STS.L_BingMapsControl) + '">';
                        iStr += loadingIconHTML;
                        iStr += '</a>';
                        iStr += '</div></td></tr></tbody>';
                        iStr += '</table>';
                        return iStr;
                    }
                    iStr += '<tbody><tr ><td colspan=' + String(colspan) + '>';
                    iStr += '<table width="100%"><tr ><td style="width:30%;">';
                    iStr += '<div  style="overflow:auto; height:' + String(mapViewHeight) + 'px; " id="cardsContainer_' + renderCtx.wpq + '">';
                    iStr += '<table summary="' + STSHtmlEncode(renderCtx.ListTitle);
                    iStr += '"  width="100%" border="0" cellspacing="0" dir="';
                    iStr += listSchema.Direction;
                    iStr += '" FilterLink="';
                    iStr += listData.FilterLink;
                    iStr += '" id="mapviewListTable_' + renderCtx.wpq;
                    iStr += '" class="ms-mapviewtable" >';
                    for (var idx in listData.Row) {
                        var listItem = listData.Row[idx];

                        if (idx == '0') {
                            listItem.firstRow = true;
                        }
                        renderCtx.CurrentItem = listItem;
                        renderCtx.CurrentIdx = idx;
                        iStr += CoreRender(MapViewTemplate.RenderCardViewItemTemplate, renderCtx);
                        renderCtx.CurrentItem = null;
                        renderCtx.CurrentIdx = null;
                    }
                    iStr += '</table></div></td><td style="position:relative;width:70%;height:100%">';
                    iStr += '<div id="mapContainer_' + renderCtx.wpq + '" class="ms-positionRelative ms-fullWidth" style="height:' + String(mapViewHeight) + 'px;">';
                    iStr += '<a id="mapAnchor_' + renderCtx.wpq + '" href="javascript:;" style="display:block; width:100%; height:100%;" ';
                    iStr += 'title="' + STSHtmlEncode(Strings.STS.L_BingMapsControl) + '">';
                    iStr += loadingIconHTML;
                    iStr += '</a>';
                    iStr += '</div></td></tr></table></td></tr></tbody></table>';
                    return iStr;
                },
                CalculateHeight: function() {
                ULSS3N:
                    ;
                    var height = document.documentElement.clientHeight;

                    if (height == null)
                        height = document.body.clientHeight;
                    if (height == null)
                        height = window.innerHeight;
                    height -= 370;
                    return height;
                },
                RenderCardViewItemTemplate: function(renderCtx) {
                    var listItem = renderCtx.CurrentItem;
                    var listSchema = renderCtx.ListSchema;
                    var idx = renderCtx.CurrentIdx;
                    var cssClass = parseInt(idx) % 2 == 1 ? "ms-alternating " : "";

                    if (FHasRowHoverBehavior(renderCtx)) {
                        cssClass += " ms-itmHoverEnabled ";
                    }
                    var ret = [];

                    ret.push('<tr class="');
                    ret.push(cssClass);
                    ret.push('ms-itmhover');
                    ret.push('" onmouseover="MapViewTemplate.HighlightCard(' + idx);
                    ret.push(', \'');
                    var iid = GenerateIID(renderCtx);

                    ret.push(iid);
                    ret.push('\'); ');
                    ret.push('" onmouseout="MapViewTemplate.UnHighlightCard(' + idx);
                    ret.push(', \'');
                    ret.push(iid);
                    ret.push('\'); ');
                    ret.push('" iid="');
                    ret.push(iid);
                    ret.push('" id="');
                    ret.push(iid);
                    ret.push('">');
                    var field;
                    var cardTitle;
                    var isTitleFieldPresent = false;
                    var fields = listSchema ? listSchema.Field : null;
                    var cardBody = [];

                    cardBody.push('<div id="cardTitle_' + String(iid) + '" style="padding-bottom:5px;">');
                    for (var f2 in fields) {
                        field = fields[f2];
                        if (field.GroupField != null)
                            break;
                        if (field.RealFieldName == 'Title') {
                            cardTitle = listItem.Title;
                            isTitleFieldPresent = true;
                            cardBody.push('<span><H2 class="ms-accentText">' + listItem.Title + '</H2></span>');
                            break;
                        }
                    }
                    cardBody.push('</div>');
                    cardBody.push('<div id="cardContent_' + String(iid) + '">');
                    for (var f3 in fields) {
                        field = fields[f3];
                        if (field.GroupField != null)
                            break;
                        if (field.Type == 'Geolocation') {
                            if (renderCtx.CurrentIdx != renderCtx.GeolocationPoints.length)
                                continue;
                            var value = GeolocationFieldTemplate.ParseGeolocationValue(listItem[field.Name]);

                            if (value != null) {
                                var point = new Object();

                                point.latitude = value.latitude;
                                point.longitude = value.longitude;
                                point.isDraggable = false;
                                point.showHover = true;
                                point.label = String(1 + parseInt(idx));
                                point.pushpinID = GenerateIID(renderCtx);
                                point.icon = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                                renderCtx.GeolocationPoints.push(point);
                            }
                            else {
                                renderCtx.GeolocationPoints.push(null);
                            }
                            continue;
                        }
                        if (field.RealFieldName == 'Title' || field.FieldType == 'Attachments') {
                            continue;
                        }
                        MapViewTemplate.DisableMenu(field);
                        cardBody.push('<div style="overflow:hidden;">');
                        cardBody.push('<span class="ms-floatLeft ms-soften">');
                        cardBody.push(field.DisplayName);
                        cardBody.push('&nbsp;:&nbsp;');
                        cardBody.push('</span>');
                        renderCtx.CurrentFieldSchema = field;
                        cardBody.push('<span>');
                        if (field.Type == "Number" || field.Type == "Currency") {
                            cardBody.push(listItem[field.Name]);
                        }
                        else {
                            cardBody.push(spMgr.RenderField(renderCtx, field, listItem, listSchema));
                        }
                        cardBody.push('</span></div>');
                        renderCtx.CurrentFieldSchema = null;
                    }
                    cardBody.push('</div>');
                    var cardBodyStr = cardBody.join('');
                    var _cardsID = 'id_Cards_' + iid;
                    var _cardsPushpinID = 'id_CardsPushpin_' + iid;

                    ret.push('<td id="' + STSHtmlEncode(_cardsID) + '" align="center" valign="top" class="ms-cellStyleNonEditable ms-vb-itmcbx ms-vb-imgFirstCell" tabindex=0 style="width:35px;" role="checkbox">');
                    ret.push('<div style="POSITION: relative; WIDTH: 25px; HEIGHT: 39px; OVERFLOW: hidden; padding-top:5px; padding-bottom:5px;">');
                    ret.push('<a onClick= "MapViewTemplate.SetView(' + idx);
                    ret.push(', \'');
                    ret.push(iid);
                    ret.push('\');" href="javascript:;">');
                    if (renderCtx.GeolocationPoints[idx])
                        ret.push('<img id="' + STSHtmlEncode(_cardsPushpinID) + '" src=' + '"/_layouts/15/images/MapPushpin.25x39x32.png?rev=23"' + '/>');
                    else
                        ret.push('<img id="' + STSHtmlEncode(_cardsPushpinID) + '" src=' + '"/_layouts/15/images/MapPushpinDisabled.25x39x32.png?rev=23"' + '/>');
                    ret.push('<div style="POSITION: absolute; TEXT-ALIGN: center; WIDTH: 100%;');
                    ret.push('FONT: bold 10pt Arial, Helvetica, Sans-Serif; COLOR: #fff; TOP: 10px; LEFT: 0px">');
                    ret.push(String(parseInt(idx) + 1));
                    ret.push('</div></a></div>');
                    for (var f1 in fields) {
                        field = fields[f1];
                        if (field.FieldType == 'Attachments') {
                            MapViewTemplate.DisableMenu(field);
                            ret.push('<div>');
                            ret.push(spMgr.RenderField(renderCtx, field, listItem, listSchema));
                            ret.push('</div>');
                            break;
                        }
                    }
                    ret.push('<div class="s4-itm-cbx s4-itm-imgCbx" tabindex="-1"><span class="s4-itm-imgCbx-inner"><span class="ms-selectitem-span"><img class="ms-selectitem-icon" alt="" src="');
                    ret.push(GetThemedImageUrl("spcommon.png"));
                    ret.push('"/></span></span></div>');
                    ret.push('</td>');
                    ret.push('<td valign="top" style="border-width:0px;">');
                    ret.push('<div style="padding-right:20px; padding-top:5px; padding-bottom:10px;">');
                    ret.push(cardBodyStr);
                    ret.push('</div>');
                    ret.push('</td>');
                    if (isTitleFieldPresent)
                        ret.push('<td class="ms-vb-title ms-hide"><span>' + String(cardTitle) + '</span></td>');
                    ret.push('</tr>');
                    return ret.join('');
                },
                DisableMenu: function(field) {
                    if (typeof field.CalloutMenu != "undefined")
                        field.CalloutMenu = null;
                    if (typeof field.listItemMenu != "undefined")
                        field.listItemMenu = null;
                },
                HighlightCard: function(idx, liid) {
                    EnsureScriptFunc("core.js", "GetCtxRgiidFromIid", function() {
                    ULSS3N:
                        ;
                        var ctxT = (GetCtxRgiidFromIid(liid)).ctx;

                        if (ctxT.GeolocationPoints[idx]) {
                            var cardsPushpin = document.getElementById(STSHtmlEncode('id_CardsPushpin_' + liid));

                            if (cardsPushpin != null)
                                cardsPushpin.src = "/_layouts/15/images/MapPushpinHover.25x39x32.png?rev=23";
                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSS3N:
                                ;
                                if (ctxT.MapControl)
                                    ctxT.MapControl.addHighlightedPushpin(ctxT.GeolocationPoints[idx]);
                            }, 'bingmapjsloaded');
                        }
                    });
                },
                UnHighlightCard: function(idx, liid) {
                    EnsureScriptFunc("core.js", "GetCtxRgiidFromIid", function() {
                    ULSS3N:
                        ;
                        var ctxT = (GetCtxRgiidFromIid(liid)).ctx;

                        if (ctxT.GeolocationPoints[idx]) {
                            var cardsPushpin = document.getElementById(STSHtmlEncode('id_CardsPushpin_' + liid));

                            if (cardsPushpin != null)
                                cardsPushpin.src = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSS3N:
                                ;
                                if (ctxT.MapControl)
                                    ctxT.MapControl.removeHighlightedPushpin();
                            }, 'bingmapjsloaded');
                        }
                    });
                },
                RenderMapCalloutBodyTemplate: function(inCtx, liid) {
                    var listItem = GetListItemByIID(liid);
                    var oldListItem = inCtx['CurrentItem'];

                    inCtx['CurrentItem'] = listItem;
                    var listSchema = inCtx.ListSchema;
                    var ret = [];
                    var isBodyEmpty = true;
                    var fields = listSchema ? listSchema.Field : null;

                    ret.push('<div class= "js-callout-bodySection">');
                    for (var f in fields) {
                        var field = fields[f];

                        MapViewTemplate.DisableMenu(field);
                        if (field.FieldType == 'Attachments' || field.Type == 'Geolocation' || field.RealFieldName == 'Title')
                            continue;
                        if (field.GroupField != null)
                            break;
                        isBodyEmpty = false;
                        ret.push('<div style="overflow:hidden;">');
                        ret.push('<span class="ms-floatLeft ms-soften">');
                        ret.push(field.DisplayName);
                        ret.push('&nbsp;:&nbsp;');
                        ret.push('</span>');
                        inCtx.CurrentFieldSchema = field;
                        ret.push('<span>');
                        if (field.Type == "Number" || field.Type == "Currency") {
                            ret.push(listItem[field.Name]);
                        }
                        else {
                            ret.push(spMgr.RenderField(inCtx, field, listItem, listSchema));
                        }
                        ret.push('</span></div>');
                        inCtx.CurrentFieldSchema = null;
                    }
                    inCtx['CurrentItem'] = oldListItem;
                    ret.push('</div></div>');
                    if (isBodyEmpty != true) {
                        var mapCalloutContent = document.getElementById("MapCalloutContent_" + liid);

                        mapCalloutContent.innerHTML = ret.join('');
                    }
                },
                RenderMapCalloutTitleTemplate: function(inCtx, liid) {
                    var listItem = GetListItemByIID(liid);
                    var listSchema = inCtx.ListSchema;
                    var ret = [];
                    var fields = listSchema ? listSchema.Field : null;

                    for (var f in fields) {
                        var field = fields[f];

                        if (field.RealFieldName == 'Title') {
                            ret.push('<div>');
                            ret.push(listItem.Title);
                            ret.push('</div>');
                            break;
                        }
                    }
                    var mapCalloutTitle = document.getElementById("MapCalloutTitle_" + liid);

                    mapCalloutTitle.innerHTML = ret.join('');
                },
                ShowMapPushpinHover: function(x, y, pushpin) {
                    EnsureScriptFunc("callout.js", "Callout", function() {
                    ULSS3N:
                        ;
                        EnsureScriptFunc("core.js", "GetCtxRgiidFromIid", function() {
                        ULSS3N:
                            ;
                            var liid = pushpin.pushpinID;
                            var ctxT = (GetCtxRgiidFromIid(liid)).ctx;
                            var launchPointId = "mapCalloutContainer-" + liid;
                            var callout = null;
                            var mapCalloutContainer = document.getElementById(launchPointId);

                            if (mapCalloutContainer === null) {
                                var mapdiv = document.getElementById("mapContainer_" + ctxT.wpq);

                                mapCalloutContainer = document.createElement("div");
                                mapCalloutContainer.setAttribute("style", "position:absolute;z-index:-1;");
                                mapCalloutContainer.id = launchPointId;
                                mapdiv.appendChild(mapCalloutContainer);
                                var title = '<span id="MapCalloutTitle_' + liid + '"></span>';
                                var content = '<span id="MapCalloutContent_' + liid + '"></span>';
                                var OnCalloutOpening = function() {
                                ULSS3N:
                                    ;
                                    var cardPushpin = document.getElementById(STSHtmlEncode('id_CardsPushpin_' + liid));

                                    if (cardPushpin != null)
                                        cardPushpin.src = "/_layouts/15/images/MapPushpinHover.25x39x32.png?rev=23";
                                    pushpin.setOptions({
                                        icon: "/_layouts/15/images/MapPushpinHover.25x39x32.png?rev=23"
                                    });
                                    MapViewTemplate.RenderMapCalloutTitleTemplate(ctxT, liid);
                                    MapViewTemplate.RenderMapCalloutBodyTemplate(ctxT, liid);
                                    if (typeof ProcessImn == "function") {
                                        ProcessImn();
                                    }
                                };
                                var OnCalloutClosing = function() {
                                ULSS3N:
                                    ;
                                    pushpin.setOptions({
                                        icon: "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23"
                                    });
                                    var cardPushpin = document.getElementById(STSHtmlEncode('id_CardsPushpin_' + liid));

                                    if (cardPushpin != null)
                                        cardPushpin.src = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                                };

                                callout = CalloutManager.createNew({
                                    launchPoint: mapCalloutContainer,
                                    openOptions: {
                                        event: "hover",
                                        showCloseButton: false
                                    },
                                    ID: liid,
                                    title: title,
                                    content: content,
                                    onClosingCallback: OnCalloutClosing,
                                    onOpeningCallback: OnCalloutOpening
                                });
                                callout.addAction(new CalloutAction({
                                    text: Strings.STS.L_ViewOnMap,
                                    onClickCallback: function() {
                                    ULSS3N:
                                        ;
                                        var pushpinLocation = pushpin.getLocation();
                                        var strUrl = GeolocationFieldTemplate.GetRedirectUrl(ctxT.CurrentUICultureName, pushpinLocation.latitude, pushpinLocation.longitude);

                                        window.open(strUrl);
                                    }
                                }));
                            }
                            else {
                                callout = CalloutManager.getFromLaunchPoint(mapCalloutContainer);
                            }
                            mapCalloutContainer.style.left = String(x) + "px";
                            mapCalloutContainer.style.top = String(y) + "px";
                            callout.open();
                        });
                    });
                },
                HideMapPushpinHover: function(pushpinID) {
                    var launchPointId = "mapCalloutContainer-" + pushpinID;
                    var mapCalloutContainer = document.getElementById(launchPointId);
                    var callout = CalloutManager.getFromLaunchPoint(mapCalloutContainer);

                    EnsureScriptFunc("mquery.js", "m$", function() {
                    ULSS3N:
                        ;
                        (m$(mapCalloutContainer)).trigger("mouseout");
                    });
                },
                SetView: function(idx, liid) {
                    EnsureScriptFunc("core.js", "GetCtxRgiidFromIid", function() {
                    ULSS3N:
                        ;
                        var ctxT = (GetCtxRgiidFromIid(liid)).ctx;

                        if (ctxT.GeolocationPoints[idx]) {
                            var targetLocation = new SP.Maps.Geolocation(ctxT.GeolocationPoints[idx].latitude, ctxT.GeolocationPoints[idx].longitude);

                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSS3N:
                                ;
                                if (ctxT.MapControl)
                                    ctxT.MapControl.moveMapToSelectedLocation(targetLocation);
                            }, 'bingmapjsloaded');
                        }
                    });
                },
                OnMapViewPreRender: function(inCtx) {
                    if (inCtx.BaseViewID == "MapView") {
                        inCtx.GeolocationPoints = [];
                        EnsureScriptFunc("core.js", "SPAnimation", function() {
                        ULSS3N:
                            ;
                            SPAnimation.Settings.DisableAnimation();
                        });
                    }
                },
                OnMapViewPostRender: function(inCtx) {
                    if (inCtx.BaseViewID == "MapView") {
                        var fields = inCtx.ListSchema.Field;

                        for (var f in fields) {
                            if (fields[f].Type == "Geolocation") {
                                var isBingMapBlockedInCurrentRegion = fields[f].IsBingMapBlockedInCurrentRegion == 'TRUE' ? true : false;

                                ExecuteOrDelayUntilEventNotified(function() {
                                ULSS3N:
                                    ;
                                    SP.Maps.BingMaps.blockedStatus(isBingMapBlockedInCurrentRegion);
                                }, 'bingmapjsloaded');
                                var apiKey = fields[f].BingMapsKey;

                                MapViewTemplate.HideSelectAllItemsCbxAndTH(inCtx);
                                MapViewTemplate.MaximizeListTableWidth(inCtx);
                                var pagingCell = document.getElementById("bottomPagingCell" + inCtx.wpq);

                                if (pagingCell != null) {
                                    var mapContainer = document.getElementById("mapContainer_" + inCtx.wpq);
                                    var cardsContainer = document.getElementById("cardsContainer_" + inCtx.wpq);

                                    if (mapContainer != null) {
                                        mapContainer.style.height = String(mapContainer.clientHeight - pagingCell.clientHeight) + "px";
                                    }
                                    if (cardsContainer != null) {
                                        cardsContainer.style.height = String(cardsContainer.clientHeight - pagingCell.clientHeight) + "px";
                                    }
                                }
                                ExecuteOrDelayUntilScriptLoaded(function() {
                                ULSS3N:
                                    ;
                                    MapViewTemplate.DelayCreateMap(inCtx, apiKey);
                                }, 'inplview.js');
                            }
                        }
                    }
                },
                EnsureSelectionHandler: function(inCtx) {
                    if (inCtx.clvp == null)
                        return;
                    var tab = inCtx.clvp.tab;

                    if (tab != null)
                        tab.onmouseover = null;
                    var mapTab = document.getElementById("mapviewListTable_" + inCtx.wpq);

                    if (mapTab != null) {
                        EnsureSelectionHandlerDeferred(null, mapTab, inCtx.ctxId);
                    }
                },
                HideSelectAllItemsCbxAndTH: function(inCtx) {
                    var selectAllCheckbox = document.getElementById("cbxSelectAllItems" + inCtx.ctxId);

                    if (selectAllCheckbox != null) {
                        selectAllCheckbox.parentNode.style.display = "none";
                    }
                },
                MaximizeListTableWidth: function(inCtx) {
                    var tableHead = document.getElementById("js-listviewthead-" + inCtx.wpq);

                    if (tableHead != null) {
                        tableHead.parentNode.style.width = "100%";
                    }
                },
                DelayCreateMap: function(inCtx, apiKey) {
                    ExecuteOrDelayUntilEventNotified(function() {
                    ULSS3N:
                        ;
                        MapViewTemplate.EnsureSelectionHandler(inCtx);
                        MapViewTemplate.CreateMap(inCtx, apiKey);
                    }, 'bingmapjsloaded');
                },
                CreateMap: function(inCtx, apiKey) {
                    var isHiddenContainer = false;

                    if (typeof inCtx.clvp != 'undefined' && inCtx.clvp != null && typeof inCtx.clvp.tab != 'undefined' && inCtx.clvp.tab != null) {
                        isHiddenContainer = HasCssClass(inCtx.clvp.tab, 's4-hide-tr', true);
                    }
                    var mapdiv = document.getElementById("mapContainer_" + inCtx.wpq);
                    var spMapOption = new SP.Maps.SPMapOption();

                    spMapOption.mapDiv = mapdiv;
                    spMapOption.apiKey = apiKey;
                    var points = inCtx.GeolocationPoints;
                    var center = SP.Maps.MapView.getCenter(points);

                    if (center != null) {
                        spMapOption.center = center;
                        spMapOption.zoom = 10;
                    }
                    if (points.length == 1)
                        spMapOption.zoom = 15;
                    var _activeElement = document.activeElement;
                    var mapControl = inCtx.MapControl;

                    mapControl = null;
                    mapControl = new SP.Maps.MapProviderFactory.createMapProvider("Bing", "7.0");
                    mapControl.loadMap(spMapOption);
                    mapControl.addPushpins(points);
                    mapControl.disableKeyboardInputOnMap(true);
                    var _mapAnchor = document.getElementById("mapAnchor_" + inCtx.wpq);

                    if (_mapAnchor != null) {
                        AddEvtHandler(_mapAnchor, "onfocus", function() {
                        ULSS3N:
                            ;
                            mapControl.disableKeyboardInputOnMap(false);
                        });
                        AddEvtHandler(_mapAnchor, "onblur", function() {
                        ULSS3N:
                            ;
                            mapControl.disableKeyboardInputOnMap(true);
                        });
                        AddEvtHandler(mapdiv, "onmouseover", function() {
                        ULSS3N:
                            ;
                            mapControl.disableKeyboardInputOnMap(false);
                        });
                        AddEvtHandler(mapdiv, "onmouseout", function() {
                        ULSS3N:
                            ;
                            mapControl.disableKeyboardInputOnMap(true);
                        });
                    }
                    if (mapdiv != null) {
                        AddEvtHandler(mapdiv, "onclick", function() {
                        ULSS3N:
                            ;
                            var _mapAnchor2 = document.getElementById("mapAnchor_" + inCtx.wpq);

                            if (_mapAnchor2 != null) {
                                _mapAnchor2.focus();
                            }
                        });
                    }
                    inCtx.MapControl = mapControl;
                    if (_activeElement != null)
                        _activeElement.focus();
                    if (isHiddenContainer) {
                        AddCssClassToElement(inCtx.clvp.tab, 's4-hide-tr');
                    }
                }
            };
        })();

        window.MapViewTemplate = MapViewTemplate;
        function _registerMapViewTemplate() {
        ULSS3N:
            ;
            var mapViewContext = {};

            mapViewContext.BaseViewID = 'MapView';
            mapViewContext.Templates = {};
            mapViewContext.Templates.View = MapViewTemplate.RenderCardViewBodyTemplate;
            mapViewContext.OnPreRender = MapViewTemplate.OnMapViewPreRender;
            mapViewContext.OnPostRender = MapViewTemplate.OnMapViewPostRender;
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(mapViewContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerMapViewTemplate, 'clienttemplates.js');
    })();
    if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("mapviewtemplate.js");
    }
}
function ULSS3N() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "mapviewtemplate.commentedjs";
    return o;
}
$_global_mapviewtemplate();
