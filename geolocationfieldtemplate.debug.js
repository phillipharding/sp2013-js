function $_global_geolocationfieldtemplate() {
    (function() {
    ULSpCg:
        ;
        if (typeof GeolocationFieldTemplate == "object") {
            return;
        }
        window.GeolocationFieldTemplate = (function() {
        ULSpCg:
            ;
            var loadingIconHTML = '<img src="' + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + '" style="display:block;padding-left:40%;padding-top:20%;" width="16px" height="16px" />';

            return {
                SPFieldGeolocation_Display: function(rCtx) {
                    if (rCtx == null || rCtx.CurrentFieldValue == null || rCtx.CurrentFieldValue == '')
                        return '';
                    var _mapDiv;
                    var _mapAnchor;
                    var listItem = rCtx['CurrentItem'];
                    var fldvalue = GeolocationFieldTemplate.ParseGeolocationValue(listItem[rCtx.CurrentFieldSchema.Name]);
                    var _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);

                    if (_myData == null || _myData.fieldSchema == null)
                        return '';
                    var _map = null;
                    var _inputId_MapDiv = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$geolocationField';

                    _myData.registerInitCallback(_myData.fieldName, InitControl);
                    var result = '<div id="' + STSHtmlEncode(_inputId_MapDiv) + '" style=" width:450px; height:300px; position:relative;">';

                    result += '<a id="mapAnchor_' + STSHtmlEncode(_inputId_MapDiv) + '" href="javascript:;" style="display:block; width:100%; height:100%;" ';
                    result += 'title="' + STSHtmlEncode(Strings.STS.L_BingMapsControl) + '">';
                    result += loadingIconHTML;
                    result += '</a>';
                    result += '</div>';
                    result += '<a id="viewOnMap_' + STSHtmlEncode(_inputId_MapDiv) + '" href="';
                    result += GeolocationFieldTemplate.GetRedirectUrl(rCtx.CurrentUICultureName, fldvalue.latitude, fldvalue.longitude);
                    result += '" title="' + STSHtmlEncode(Strings.STS.L_ViewOnMap) + '" target=_blank >' + STSHtmlEncode(Strings.STS.L_ViewOnMap) + '</a>';
                    return result;
                    function InitControl() {
                    ULSpCg:
                        ;
                        var isBingMapBlockedInCurrentRegion = _myData.fieldSchema.IsBingMapBlockedInCurrentRegion;

                        _mapDiv = document.getElementById(_inputId_MapDiv);
                        _mapAnchor = document.getElementById("mapAnchor_" + _inputId_MapDiv);
                        if (_mapDiv != null) {
                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSpCg:
                                ;
                                SP.Maps.BingMaps.blockedStatus(isBingMapBlockedInCurrentRegion);
                                LoadMap(fldvalue.latitude, fldvalue.longitude, _mapDiv);
                                ShowPushpinOnMap(fldvalue.latitude, fldvalue.longitude);
                            }, 'bingmapjsloaded');
                            if (_mapAnchor != null) {
                                AddEvtHandler(_mapAnchor, "onfocus", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(false);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(_mapAnchor, "onblur", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(true);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(_mapDiv, "onmouseover", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(false);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(_mapDiv, "onmouseout", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(true);
                                    }, 'bingmapjsloaded');
                                });
                            }
                        }
                    }
                    function LoadMap(latitude, longitude, mapDiv) {
                        var _activeElement = null;

                        if (window.frameElement == null) {
                            _activeElement = document.activeElement;
                        }
                        _map = new SP.Maps.MapProviderFactory.createMapProvider('bing', '7.0');
                        var spMapOption = new SP.Maps.SPMapOption();

                        spMapOption.mapDiv = mapDiv;
                        spMapOption.center = new SP.Maps.Geolocation(latitude, longitude);
                        if (typeof _myData.fieldSchema.BingMapsKey != "undefined" && _myData.fieldSchema.BingMapsKey != null)
                            spMapOption.apiKey = _myData.fieldSchema.BingMapsKey;
                        _map.loadMap(spMapOption);
                        _map.disableKeyboardInputOnMap(true);
                        if (_activeElement != null)
                            _activeElement.focus();
                    }
                    function ShowPushpinOnMap(latitude, longitude) {
                        var points = [];
                        var point = new Object();

                        point.latitude = latitude;
                        point.longitude = longitude;
                        point.isDraggable = false;
                        point.showHover = false;
                        point.icon = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                        points.push(point);
                        _map.addPushpins(points);
                    }
                },
                ParseGeolocationValue: function(fieldValue) {
                    var spatialtype = "POINT";
                    var space = ' ';
                    var openingBracket = '(';
                    var closingBracket = ')';
                    var point = new Object();

                    point.longitude = null;
                    point.latitude = null;
                    point.altitude = null;
                    point.measure = null;
                    if (fieldValue == null || fieldValue == '')
                        return null;
                    var valueIndex = 0;
                    var valueLength = fieldValue.length;
                    var subStr;
                    var argIndex = 0;
                    var index = fieldValue.indexOf(openingBracket, valueIndex);

                    if (index <= valueIndex) {
                        return null;
                    }
                    var headEnd = index;

                    if (fieldValue.charCodeAt(index - 1) == space.charCodeAt(0)) {
                        headEnd--;
                    }
                    subStr = fieldValue.substr(valueIndex, headEnd - valueIndex);
                    if (spatialtype.toLowerCase() != subStr.toLowerCase()) {
                        return null;
                    }
                    valueIndex = index + 1;
                    while (valueIndex < valueLength) {
                        index = fieldValue.indexOf(space, valueIndex);
                        if (index <= valueIndex) {
                            index = fieldValue.indexOf(closingBracket, valueIndex);
                        }
                        if (index <= valueIndex) {
                            return null;
                        }
                        subStr = fieldValue.substr(valueIndex, index - valueIndex);
                        if (argIndex == 0) {
                            point.longitude = parseFloat(subStr);
                        }
                        else if (argIndex == 1) {
                            point.latitude = parseFloat(subStr);
                        }
                        else if (argIndex == 2) {
                            point.altitude = parseFloat(subStr);
                        }
                        else if (argIndex == 3) {
                            point.measure = parseFloat(subStr);
                        }
                        argIndex++;
                        valueIndex = index + 1;
                    }
                    if (argIndex < 2) {
                        return null;
                    }
                    return point;
                },
                SPFieldGeolocation_Edit: function(rCtx) {
                    if (rCtx == null)
                        return '';
                    var _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);

                    if (_myData == null || _myData.fieldSchema == null)
                        return '';
                    var _latitude = null;
                    var _longitude = null;
                    var _mapDiv;
                    var _mapAnchor;
                    var _defineLocation;
                    var _useCurrentLocation;
                    var _clearLocation;
                    var _map = null;
                    var _inputId_DefineLocation = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$geolocationField_DefineLocation';
                    var _inputId_UseCurrentLocation = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$geolocationField_UseCurrentLocation';
                    var _inputId_ClearLocation = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$geolocationField_ClearLocation';
                    var _inputId_MapDiv = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$geolocationField_MapDiv';
                    var _value = _myData.fieldValue != null ? _myData.fieldValue : '';
                    var listItem = rCtx['CurrentItem'];
                    var fldvalue = GeolocationFieldTemplate.ParseGeolocationValue(listItem[rCtx.CurrentFieldSchema.Name]);

                    if (fldvalue != null) {
                        _latitude = fldvalue.latitude;
                        _longitude = fldvalue.longitude;
                    }
                    var validators = new SPClientForms.ClientValidation.ValidatorSet();

                    if (_myData.fieldSchema.Required)
                        validators.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator());
                    _myData.registerClientValidator(_myData.fieldName, validators);
                    _myData.registerInitCallback(_myData.fieldName, InitControl);
                    _myData.registerFocusCallback(_myData.fieldName, function() {
                    ULSpCg:
                        ;
                        if (_defineLocation != null)
                            _defineLocation.focus();
                    });
                    _myData.registerValidationErrorCallback(_myData.fieldName, function(errorResult) {
                    ULSpCg:
                        ;
                        SPFormControl_AppendValidationErrorMessage(_inputId_MapDiv, errorResult);
                    });
                    _myData.registerGetValueCallback(_myData.fieldName, function() {
                    ULSpCg:
                        ;
                        if (_latitude == null && _longitude == null)
                            return '';
                        else {
                            if (fldvalue != null && fldvalue.altitude != null && fldvalue.measure != null)
                                return "Point(" + String(_longitude) + " " + String(_latitude) + " " + String(fldvalue.altitude) + " " + String(fldvalue.measure) + ")";
                            else
                                return "Point(" + String(_longitude) + " " + String(_latitude) + ")";
                        }
                    });
                    _myData.updateControlValue(_myData.fieldName, _value);
                    var setLocation = STSHtmlEncode(Strings.STS.L_Geolocation_setLocation);
                    var defineLocationLink = '<a id="' + STSHtmlEncode(_inputId_DefineLocation) + '" href="javascript:">';
                    var useCurrentLocationLink = '<a id="' + STSHtmlEncode(_inputId_UseCurrentLocation) + '" href="javascript:">';

                    setLocation = (((setLocation.replace(/{(0)}/, defineLocationLink)).replace(/{(1)}/, '</a>')).replace(/{(2)}/, useCurrentLocationLink)).replace(/{(3)}/, '</a>');
                    var bingMapsUserWarning = STSHtmlEncode(Strings.STS.L_Geolocation_BingMapsUserWarning);
                    var currentUICulture = STSHtmlEncode(Strings.STS.L_Language_Text);
                    var learnMoreLink = '<a href="http://officeredir.microsoft.com/r/rlidBingMapToU?Clid=' + currentUICulture + '" target="_blank">';

                    bingMapsUserWarning = (bingMapsUserWarning.replace(/{(0)}/, learnMoreLink)).replace(/{(1)}/, '</a>');
                    var result = '<table width="100%"><tbody><tr><td>';

                    result += setLocation;
                    result += '</td><td style="width:30px;"></td><td>';
                    result += '<a id="' + STSHtmlEncode(_inputId_ClearLocation) + '" class="ms-floatRight" href="javascript:">' + STSHtmlEncode(Strings.STS.L_ClearLocation) + '</a>';
                    result += '</td></tr><tr><td colspan="3"><span>';
                    result += bingMapsUserWarning;
                    result += '</span></td></tr></tbody></table>';
                    result += '<div id="' + STSHtmlEncode(_inputId_MapDiv) + '" ';
                    if (fldvalue != null) {
                        result += 'style="width:450px;height:300px;" ';
                    }
                    result += ' >';
                    result += '<a id="mapAnchor_' + STSHtmlEncode(_inputId_MapDiv) + '" href="javascript:;" style="display:block; width:100%; height:100%;" ';
                    result += 'title="' + STSHtmlEncode(Strings.STS.L_BingMapsControl) + '">';
                    if (fldvalue != null) {
                        result += loadingIconHTML;
                    }
                    result += '</a>';
                    result += '</div>';
                    return result;
                    function ExpandMapDivAndSetLoadingIcon() {
                    ULSpCg:
                        ;
                        var mapDiv = document.getElementById(_inputId_MapDiv);
                        var mapAnchor = document.getElementById("mapAnchor_" + _inputId_MapDiv);

                        if (mapAnchor != null && mapDiv != null) {
                            mapDiv.style.height = '300px';
                            mapDiv.style.width = '450px';
                            mapAnchor.innerHTML = loadingIconHTML;
                            if (window.frameElement != null && typeof window.frameElement.autoSize == "function")
                                window.frameElement.autoSize();
                        }
                    }
                    function UseCurrentLocation() {
                    ULSpCg:
                        ;
                        if (navigator.geolocation == undefined) {
                            alert(STSHtmlEncode(Strings.STS.L_Nav_Geolocation_Undefined));
                        }
                        else {
                            navigator.geolocation.watchPosition(PositionSuccess, PositionError);
                        }
                    }
                    function PositionError(err) {
                        if (err.code == err.PERMISSION_DENIED) {
                            alert(STSHtmlEncode(Strings.STS.L_Err_Permission_Denied));
                        }
                        else {
                            if (err.code == err.POSITION_UNAVAILABLE) {
                                alert(STSHtmlEncode(Strings.STS.L_Err_Position_Unavailable));
                            }
                            else {
                                alert(STSHtmlEncode(Strings.STS.L_Err_Timeout));
                            }
                        }
                    }
                    function PositionSuccess(pos) {
                        _latitude = pos.coords.latitude;
                        _longitude = pos.coords.longitude;
                        if (_latitude != null && _longitude != null && _mapDiv != null) {
                            ExpandMapDivAndSetLoadingIcon();
                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSpCg:
                                ;
                                LoadMap(_latitude, _longitude, _mapDiv);
                                ShowPushpinOnMap(_latitude, _longitude);
                            }, 'bingmapjsloaded');
                        }
                    }
                    function LoadMap(latitude, longitude, mapDiv) {
                        if (_map == null) {
                            var _activeElement = null;

                            if (window.frameElement == null) {
                                _activeElement = document.activeElement;
                            }
                            _map = new SP.Maps.MapProviderFactory.createMapProvider("Bing", "7.0");
                            mapDiv.style.position = 'relative';
                            var spMapOption = new SP.Maps.SPMapOption();

                            spMapOption.mapDiv = mapDiv;
                            spMapOption.center = new SP.Maps.Geolocation(latitude, longitude);
                            spMapOption.height = 300;
                            spMapOption.width = 450;
                            if (typeof _myData.fieldSchema.BingMapsKey != "undefined" && _myData.fieldSchema.BingMapsKey != null)
                                spMapOption.apiKey = _myData.fieldSchema.BingMapsKey;
                            _map.loadMap(spMapOption);
                            _map.disableKeyboardInputOnMap(true);
                            if (_activeElement != null)
                                _activeElement.focus();
                            if (window.frameElement != null && typeof window.frameElement.autoSize == "function")
                                window.frameElement.autoSize();
                            _mapAnchor = document.getElementById("mapAnchor_" + _inputId_MapDiv);
                            if (_mapAnchor != null) {
                                AddEvtHandler(_mapAnchor, "onfocus", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(false);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(_mapAnchor, "onblur", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(true);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(mapDiv, "onmouseover", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(false);
                                    }, 'bingmapjsloaded');
                                });
                                AddEvtHandler(mapDiv, "onmouseout", function() {
                                ULSpCg:
                                    ;
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        _map.disableKeyboardInputOnMap(true);
                                    }, 'bingmapjsloaded');
                                });
                            }
                        }
                    }
                    function ShowPushpinOnMap(latitude, longitude) {
                        if (_map != null) {
                            var points = [];
                            var point = new Object();

                            point.latitude = latitude;
                            point.longitude = longitude;
                            point.isDraggable = false;
                            point.showHover = false;
                            point.icon = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                            points.push(point);
                            _map.clearMap();
                            _map.addPushpins(points);
                        }
                    }
                    function InitControl() {
                    ULSpCg:
                        ;
                        var isBingMapBlockedInCurrentRegion = _myData.fieldSchema.IsBingMapBlockedInCurrentRegion;

                        _defineLocation = document.getElementById(_inputId_DefineLocation);
                        _useCurrentLocation = document.getElementById(_inputId_UseCurrentLocation);
                        _clearLocation = document.getElementById(_inputId_ClearLocation);
                        _mapDiv = document.getElementById(_inputId_MapDiv);
                        ExecuteOrDelayUntilEventNotified(function() {
                        ULSpCg:
                            ;
                            SP.Maps.BingMaps.blockedStatus(isBingMapBlockedInCurrentRegion);
                            if (_latitude != null && _longitude != null && _mapDiv != null) {
                                LoadMap(_latitude, _longitude, _mapDiv);
                                ShowPushpinOnMap(_latitude, _longitude);
                            }
                        }, 'bingmapjsloaded');
                        if (_defineLocation != null)
                            AddEvtHandler(_defineLocation, "onclick", DefineLocation);
                        if (_useCurrentLocation != null)
                            AddEvtHandler(_useCurrentLocation, "onclick", UseCurrentLocation);
                        if (_clearLocation != null)
                            AddEvtHandler(_clearLocation, "onclick", ClearLocation);
                    }
                    function DefineLocation() {
                    ULSpCg:
                        ;
                        var geolocation = [];

                        if (_latitude != null || _longitude != null) {
                            geolocation[0] = _latitude;
                            geolocation[1] = _longitude;
                        }
                        else {
                            geolocation = null;
                        }
                        if (typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && typeof _spPageContextInfo.webServerRelativeUrl != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
                            var siteurl = _spPageContextInfo.webServerRelativeUrl;

                            if (siteurl.charAt(siteurl.length - 1) != '/') {
                                siteurl = siteurl + "/";
                            }
                            var dlgOptions = {
                                url: siteurl + "_layouts/15/definelocation.aspx" + "?latitude=" + String(_latitude) + "&longitude=" + String(_longitude),
                                args: geolocation,
                                width: 350,
                                dialogReturnValueCallback: OnDefineLocationDlgClose
                            };

                            EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dlgOptions);
                        }
                        else {
                            throw "Definelocation dialog can not be launched as URL can not be formed properly.";
                        }
                    }
                    function ClearLocation() {
                    ULSpCg:
                        ;
                        if (_map != null && _latitude != null && _longitude != null && _mapDiv != null) {
                            ExecuteOrDelayUntilEventNotified(function() {
                            ULSpCg:
                                ;
                                _map.clearMap();
                            }, 'bingmapjsloaded');
                        }
                        _latitude = null;
                        _longitude = null;
                    }
                    function OnDefineLocationDlgClose(dlgResult, target) {
                        if (_defineLocation != null)
                            _defineLocation.focus();
                        if (dlgResult == SP.UI.DialogResult.OK) {
                            if (target == null) {
                                ClearLocation();
                            }
                            else if (target.length < 2) {
                                return;
                            }
                            else {
                                _latitude = target[0];
                                _longitude = target[1];
                                if (_latitude != null && _longitude != null && _mapDiv != null) {
                                    ExpandMapDivAndSetLoadingIcon();
                                    ExecuteOrDelayUntilEventNotified(function() {
                                    ULSpCg:
                                        ;
                                        LoadMap(_latitude, _longitude, _mapDiv);
                                        ShowPushpinOnMap(_latitude, _longitude);
                                    }, 'bingmapjsloaded');
                                }
                            }
                        }
                        else if (dlgResult == SP.UI.DialogResult.cancel) {
                            return;
                        }
                    }
                },
                RenderGeolocationField: function(inCtx, field, listItem, listSchema) {
                    if (field.XSLRender == '1') {
                        return listItem[field.Name].toString();
                    }
                    else {
                        var fldvalue = GeolocationFieldTemplate.ParseGeolocationValue(listItem[field.Name]);
                        var ret = [];

                        if (fldvalue != null) {
                            ret.push("<a class=\"js-locationfield-callout\" href=\"javascript:void(0)\" liid=\"");
                            ret.push(GenerateIID(inCtx));
                            ret.push("\" fld=\"");
                            ret.push(field.Name);
                            ret.push("\" fldDisplayName=\"");
                            ret.push(STSHtmlEncode(field.DisplayName));
                            ret.push("\" ><img title=\"");
                            ret.push(STSHtmlEncode(Strings.STS.L_Clippy_Tooltip));
                            ret.push("\"border=0 src=\"" + "/_layouts/15/images/ADDR_GETMAP.16x16x32.png?rev=23");
                            ret.push("\"/></a>");
                        }
                        return ret.join('');
                    }
                },
                SetupMappyHoverHandlers: function(inCtx, apiKey) {
                    EnsureScriptFunc("callout.js", "Callout", function() {
                    ULSpCg:
                        ;
                        EnsureScriptFunc("core.js", "GetListItemByIID", function() {
                        ULSpCg:
                            ;
                            EnsureScriptFunc("mquery.js", "m$", function() {
                            ULSpCg:
                                ;
                                ((m$('.js-locationfield-callout')).not(".js-locationfield-calloutInitialized")).forEach(function(e) {
                                    var listItemID = e.getAttribute("liid");
                                    var fieldName = e.getAttribute("fld");
                                    var calloutTitle = e.getAttribute("fldDisplayName");
                                    var calloutContent = [];
                                    var listItem = GetListItemByIID(listItemID);
                                    var values = GeolocationFieldTemplate.ParseGeolocationValue(listItem[fieldName]);

                                    calloutContent.push("<div class='js-callout-bodySection'><div class='ms-positionRelative' id='loc_mapcontainer_");
                                    calloutContent.push(listItemID);
                                    calloutContent.push("_");
                                    calloutContent.push(fieldName);
                                    calloutContent.push("' style='width:280px;height:280px;' >");
                                    calloutContent.push(loadingIconHTML);
                                    calloutContent.push("</div></div>");
                                    var onOpeningCallbackForMap = function() {
                                    ULSpCg:
                                        ;
                                        ExecuteOrDelayUntilEventNotified(function() {
                                        ULSpCg:
                                            ;
                                            GeolocationFieldTemplate.ShowMappyHover(fieldName, listItemID, values, apiKey);
                                        }, 'bingmapjsloaded');
                                    };
                                    var callout = CalloutManager.createNew({
                                        launchPoint: e,
                                        openOptions: {
                                            closeCalloutOnBlur: true,
                                            event: "click",
                                            showCloseButton: true
                                        },
                                        ID: listItemID + "_" + fieldName,
                                        title: calloutTitle,
                                        content: calloutContent.join(''),
                                        beakOrientation: 'leftRight',
                                        onOpeningCallback: onOpeningCallbackForMap,
                                        contentWidth: 320
                                    });

                                    callout.addAction(new CalloutAction({
                                        text: Strings.STS.L_ViewOnMap,
                                        onClickCallback: function() {
                                        ULSpCg:
                                            ;
                                            var strUrl = GeolocationFieldTemplate.GetRedirectUrl(inCtx.CurrentUICultureName, values.latitude, values.longitude);

                                            window.open(strUrl);
                                        }
                                    }));
                                    (m$(e)).addClass("js-locationfield-calloutInitialized");
                                });
                            });
                        });
                    });
                },
                ShowMappyHover: function(fieldName, listItemID, values, apiKey) {
                    var mapDiv = document.getElementById("loc_mapcontainer_" + listItemID + "_" + fieldName);
                    var map = new SP.Maps.MapProviderFactory.createMapProvider("Bing", "7.0");
                    var points = [];
                    var point = new Object();

                    point.latitude = values.latitude;
                    point.longitude = values.longitude;
                    point.isDraggable = false;
                    point.showHover = false;
                    point.icon = "/_layouts/15/images/MapPushpin.25x39x32.png?rev=23";
                    points.push(point);
                    var spMapOption = new SP.Maps.SPMapOption();

                    spMapOption.mapDiv = mapDiv;
                    spMapOption.apiKey = apiKey;
                    spMapOption.center = new SP.Maps.Geolocation(point.latitude, point.longitude);
                    spMapOption.height = 280;
                    spMapOption.width = 280;
                    map.loadMap(spMapOption);
                    map.addPushpins(points);
                },
                GetRedirectUrl: function(currentUICultureName, latitude, longitude) {
                    return "http://officeredir.microsoft.com/r/rlidSPGeolocationMap?clid=" + currentUICultureName + "&p1=" + String(latitude) + "&p2=" + String(GeolocationFieldTemplate.NormalizeLongitude(longitude));
                },
                NormalizeLongitude: function(longitude) {
                    if (longitude < -180 || longitude > 180) {
                        longitude -= Math.floor((longitude + 180) / 360) * 360;
                    }
                    return longitude;
                },
                OnGeolocationFieldPostRender: function(inCtx) {
                    if (inCtx != null && inCtx.BaseViewID != 'MapView' && inCtx.BaseViewID != 'NewForm' && inCtx.BaseViewID != 'EditForm' && inCtx.BaseViewID != 'DisplayForm') {
                        var fields = inCtx.ListSchema.Field;

                        for (var f in fields) {
                            if (fields[f].Type == "Geolocation") {
                                var isBingMapBlockedInCurrentRegion = fields[f].IsBingMapBlockedInCurrentRegion == 'TRUE' ? true : false;
                                var bingMapsKey = fields[f].BingMapsKey;

                                ExecuteOrDelayUntilEventNotified(function() {
                                ULSpCg:
                                    ;
                                    SP.Maps.BingMaps.blockedStatus(isBingMapBlockedInCurrentRegion);
                                }, 'bingmapjsloaded');
                                GeolocationFieldTemplate.SetupMappyHoverHandlers(inCtx, bingMapsKey);
                                break;
                            }
                        }
                    }
                }
            };
        })();
        function _registerGeolocationFieldTemplate() {
        ULSpCg:
            ;
            var geolocationFieldContext = {};

            geolocationFieldContext.Templates = {};
            geolocationFieldContext.OnPostRender = GeolocationFieldTemplate.OnGeolocationFieldPostRender;
            geolocationFieldContext.Templates.Fields = {
                'Geolocation': {
                    'View': GeolocationFieldTemplate.RenderGeolocationField,
                    'DisplayForm': GeolocationFieldTemplate.SPFieldGeolocation_Display,
                    'EditForm': GeolocationFieldTemplate.SPFieldGeolocation_Edit,
                    'NewForm': GeolocationFieldTemplate.SPFieldGeolocation_Edit
                }
            };
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(geolocationFieldContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerGeolocationFieldTemplate, 'clienttemplates.js');
        _spBodyOnLoadFunctionNames.push('LoadBingMapsApi');
    })();
    if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("geolocationfieldtemplate.js");
    }
}
function ULSpCg() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "geolocationfieldtemplate.commentedjs";
    return o;
}
function mapScriptLoaded() {
ULSpCg:
    ;
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        ExecuteOrDelayUntilScriptLoaded(function() {
        ULSpCg:
            ;
            NotifyEventAndExecuteWaitingJobs("bingmapjsloaded");
        }, 'SP.Map.js');
    }
}
function LoadBingMapsApi() {
ULSpCg:
    ;
    var bingMapControlApi = 'ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&onscriptload=mapScriptLoaded';

    if (typeof Microsoft != "undefined" && typeof Microsoft.Maps != "undefined" && typeof Microsoft.Maps.Location != "undefined") {
        CleanBingMapScripts();
    }
    var currentUICulture = STSHtmlEncode(Strings.STS.L_CurrentUICulture_Name);
    var protocol = document.location.protocol;
    var mapScript = document.createElement('script');

    mapScript.type = "text/javascript";
    mapScript.id = "virtualearthscript";
    if ("https:" == protocol)
        mapScript.src = 'https://' + bingMapControlApi + '&s=1&mkt=' + currentUICulture;
    else
        mapScript.src = 'http://' + bingMapControlApi + '&mkt=' + currentUICulture;
    var head = (document.getElementsByTagName("head"))[0];

    head.appendChild(mapScript);
}
function CleanBingMapScripts() {
ULSpCg:
    ;
    var bingApiDomain = 'ecn.dev.virtualearth.net';
    var bingMapScripts = [];
    var head = (document.getElementsByTagName('head'))[0];
    var scriptElements = head.getElementsByTagName('script');
    var scriptlength = scriptElements.length;
    var script = null;

    for (var i = 0; i < scriptlength; i++) {
        var source = scriptElements[i].src;

        if (null != source && source.length > 0) {
            if ((source.toLowerCase()).indexOf(bingApiDomain) > 0) {
                bingMapScripts.push(scriptElements[i]);
            }
        }
    }
    scriptlength = bingMapScripts.length;
    for (i = 0; i < scriptlength; i++) {
        head.removeChild(bingMapScripts[i]);
    }
}
$_global_geolocationfieldtemplate();
