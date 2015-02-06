function $_global_autohostedlicensingtemplates() {
    (function() {
    ULS647:
        ;
        if (typeof window.AutohostedLicensingFieldTemplate == "object") {
            return;
        }
        window.AutohostedLicensingFieldTemplate = {
            LoadingInProgress: false,
            RenderViewAutohostedLicensingField: function(inCtx) {
                if (inCtx != null && inCtx.CurrentItem != null) {
                    var fieldName = "IsAutoHostedApp" + ".value";

                    if (inCtx.CurrentItem[fieldName] === "0") {
                        return STSHtmlEncode(Strings.STS.L_AutoHostedAppLicensesNotApplicable);
                    }
                    else {
                        return inCtx.CurrentItem["AutohostedAppLicensingField"];
                    }
                }
                return '';
            },
            RenderDisplayAutohostedLicensingField: function(inCtx) {
                var ret = [];

                if (!window.AutohostedLicensingFieldTemplate.LoadingInProgress) {
                    window.AutohostedLicensingFieldTemplate.LoadingInProgress = true;
                    var _autoHostedFieldClientFormContext = SPClientTemplates.Utility.GetFormContextForCurrentField(inCtx);

                    if (_autoHostedFieldClientFormContext == null || _autoHostedFieldClientFormContext.fieldSchema == null || _autoHostedFieldClientFormContext.fieldValue == null)
                        return '';
                    var fieldDirection = _autoHostedFieldClientFormContext.fieldSchema.Direction;
                    var displayValue = STSHtmlEncode(_autoHostedFieldClientFormContext.fieldValue);

                    ret.push('<span id="AutohostedLicensingFieldDisplayControl" class="ms-hide" ');
                    if (fieldDirection != null && fieldDirection.toLowerCase() != 'none') {
                        ret.push(' dir="');
                        ret.push(STSHtmlEncode(fieldDirection));
                        ret.push('"');
                    }
                    ret.push('>');
                    ret.push(displayValue);
                    ret.push('</span>');
                    var webUrl = inCtx.FormContext.webAttributes.WebUrl;
                    var listId = inCtx.FormContext.listAttributes.Id;
                    var itemId = inCtx.FormContext.itemAttributes.Id;

                    EnsureScriptFunc('SP.js', 'SP.ClientContext', function() {
                    ULS647:
                        ;
                        var cctx = new SP.ClientContext(webUrl);
                        var targetList = ((cctx.get_web()).get_lists()).getById(new SP.Guid(listId));
                        var targetListItem = targetList.getItemById(itemId);

                        cctx.load(targetList);
                        cctx.load(targetListItem, "AutohostedAppLicensingField", "IsAutoHostedApp");
                        cctx.executeQueryAsync(OnServerCallCompleted, OnServerCallFailed);
                        function OnServerCallCompleted(serverSender, serverEvt) {
                        ULS647:
                            ;
                            var displayElement = document.getElementById('AutohostedLicensingFieldDisplayControl');
                            var dataValues = targetListItem.get_fieldValues();

                            if (!dataValues["IsAutoHostedApp"]) {
                                displayElement.innerHTML = STSHtmlEncode(Strings.STS.L_AutoHostedAppLicensesNotRequired);
                            }
                            displayElement.className = 'ms-displayInline';
                            window.AutohostedLicensingFieldTemplate.LoadingInProgress = false;
                        }
                        function OnServerCallFailed(serverSender, serverEvt) {
                        ULS647:
                            ;
                            var displayElement = document.getElementById('AutohostedLicensingFieldDisplayControl');

                            displayElement.className = 'ms-displayInline';
                            window.AutohostedLicensingFieldTemplate.LoadingInProgress = false;
                        }
                    });
                }
                return ret.join('');
            },
            RenderAutohostedLicensingField: function(inCtx) {
                var ret = [];

                if (!window.AutohostedLicensingFieldTemplate.LoadingInProgress) {
                    window.AutohostedLicensingFieldTemplate.LoadingInProgress = true;
                    var _autoHostedFieldClientFormContext = SPClientTemplates.Utility.GetFormContextForCurrentField(inCtx);

                    if (_autoHostedFieldClientFormContext == null || _autoHostedFieldClientFormContext.fieldSchema == null || _autoHostedFieldClientFormContext.fieldValue == null)
                        return '';
                    var fieldDirection = _autoHostedFieldClientFormContext.fieldSchema.Direction;

                    ret.push('<div id="AutohostedLicensingFieldEditableControl" class="ms-hide">');
                    ret.push(SPFieldNumber_Edit(inCtx));
                    ret.push('</div>');
                    ret.push('<span class="ms-metadata" id="AutohostedLicensingFieldStatusControl" ');
                    if (fieldDirection != null && fieldDirection.toLowerCase() != 'none') {
                        ret.push(' dir="');
                        ret.push(STSHtmlEncode(fieldDirection));
                        ret.push('"');
                    }
                    ret.push('/>');
                    var webUrl = inCtx.FormContext.webAttributes.WebUrl;
                    var listId = inCtx.FormContext.listAttributes.Id;
                    var itemId = inCtx.FormContext.itemAttributes.Id;

                    EnsureScriptFunc('SP.js', 'SP.ClientContext', function() {
                    ULS647:
                        ;
                        var cctx = new SP.ClientContext(webUrl);
                        var targetList = ((cctx.get_web()).get_lists()).getById(new SP.Guid(listId));
                        var targetListItem = targetList.getItemById(itemId);

                        cctx.load(targetList);
                        cctx.load(targetListItem, "AutohostedAppLicensingField", "IsAutoHostedApp");
                        cctx.executeQueryAsync(OnServerCallCompleted, OnServerCallFailed);
                        function OnServerCallCompleted(serverSender, serverEvt) {
                        ULS647:
                            ;
                            var editableElement = document.getElementById('AutohostedLicensingFieldEditableControl');
                            var statusElement = document.getElementById('AutohostedLicensingFieldStatusControl');
                            var dataValues = targetListItem.get_fieldValues();

                            if (dataValues["IsAutoHostedApp"]) {
                                editableElement.className = 'ms-displayInline';
                                statusElement.innerHTML = STSHtmlEncode(Strings.STS.L_AutoHostedAppLicensesRequired);
                            }
                            else {
                                editableElement.className = 'ms-hide';
                                statusElement.innerHTML = STSHtmlEncode(Strings.STS.L_AutoHostedAppLicensesNotRequired);
                            }
                            window.AutohostedLicensingFieldTemplate.LoadingInProgress = false;
                        }
                        function OnServerCallFailed(serverSender, serverEvt) {
                        ULS647:
                            ;
                            var editableElement = document.getElementById('AutohostedLicensingFieldEditableControl');
                            var statusElement = document.getElementById('AutohostedLicensingFieldStatusControl');

                            editableElement.className = 'ms-displayInline';
                            statusElement.innerHTML = STSHtmlEncode('');
                            window.AutohostedLicensingFieldTemplate.LoadingInProgress = false;
                        }
                    });
                }
                return ret.join('');
            }
        };
        function _registerAutoHostedAppLicensedAssignedFieldTemplate() {
        ULS647:
            ;
            var autoHostedAppLicensedAssignedFieldContext = {
                Templates: {
                    Fields: {
                        "AutohostedAppLicensingField": {
                            'NewForm': window.AutohostedLicensingFieldTemplate.RenderAutohostedLicensingField,
                            'EditForm': window.AutohostedLicensingFieldTemplate.RenderAutohostedLicensingField,
                            'View': window.AutohostedLicensingFieldTemplate.RenderViewAutohostedLicensingField,
                            'DisplayForm': window.AutohostedLicensingFieldTemplate.RenderDisplayAutohostedLicensingField
                        }
                    }
                }
            };

            SPClientTemplates.TemplateManager.RegisterTemplateOverrides(autoHostedAppLicensedAssignedFieldContext);
        }
        ExecuteOrDelayUntilScriptLoaded(_registerAutoHostedAppLicensedAssignedFieldTemplate, 'clienttemplates.js');
    })();
    window.AutohostedLicensingListHeaderControl = {
        InsertListHeaderControl: function(inCtx, autoHostedAppLicensingListHeaderInfo) {
            var ShowSodLoadingUI = function() {
            ULS647:
                ;
                var loadingImageUrl = inCtx.imagesPath + 'loadingcirclests16.gif';

                autoHostedAppLicensingListHeaderInfo.elem.innerHTML = '<img src=\'' + loadingImageUrl + '\' onclick=\'this.style.visibility=\"hidden\";\'/>';
            };
            var elem = document.getElementById('autoHostedAppLicensingListHeaderDiv_' + inCtx.wpq);

            if (elem == null) {
                var parentDiv = document.getElementById('CSRListViewControlDiv' + inCtx.wpq);

                if (parentDiv !== null) {
                    var newDiv = document.createElement('div');

                    newDiv.id = 'autoHostedAppLicensingListHeaderDiv_' + inCtx.wpq;
                    newDiv.className = 'ms-floatRight ms-verticalAlignMiddle';
                    parentDiv.appendChild(newDiv);
                }
                else {
                    return;
                }
                autoHostedAppLicensingListHeaderInfo.elem = newDiv;
            }
            else {
                autoHostedAppLicensingListHeaderInfo.elem = elem;
            }
            if (!autoHostedAppLicensingListHeaderInfo.loadInProgress) {
                autoHostedAppLicensingListHeaderInfo.loadInProgress = true;
                EnsureScriptFunc('SP.js', 'SP.ClientContext', function() {
                ULS647:
                    ;
                    autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout = window.setTimeout(ShowSodLoadingUI, 500);
                    var cctx = new SP.ClientContext(autoHostedAppLicensingListHeaderInfo.siteUrl);
                    var targetList = ((cctx.get_web()).get_lists()).getById(new SP.Guid(inCtx.listName));

                    cctx.load(targetList);
                    var camlQuery = new SP.CamlQuery();
                    var queryString = '<View><Query><Where><Gt><FieldRef Name="' + "AutohostedAppLicensingField" + '" /><Value Type="Integer">0</Value></Gt></Where></Query><ViewFields><FieldRef Name="' + "AutohostedAppLicensingField" + '"/></ViewFields><RowLimit Paged="TRUE">2147483647</RowLimit></View>';

                    camlQuery.set_viewXml(queryString);
                    var targetListItems = targetList.getItems(camlQuery);

                    cctx.load(targetListItems);
                    cctx.executeQueryAsync(OnServerCallCompleted, OnServerCallFailed);
                    function OnServerCallCompleted(serverSender, serverEvt) {
                    ULS647:
                        ;
                        if (autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout != null) {
                            window.clearTimeout(autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout);
                            autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout = null;
                        }
                        autoHostedAppLicensingListHeaderInfo.elem.innerHTML = '';
                        var count = targetListItems.get_count();
                        var totalused = 0;

                        for (var i = 0; i < count; i++) {
                            var item = targetListItems.itemAt(i);
                            var dataValues = item.get_fieldValues();

                            totalused += dataValues["AutohostedAppLicensingField"];
                        }
                        var autoHostedAppLicensingHeaderControlHtml = [];
                        var ratio = totalused / autoHostedAppLicensingListHeaderInfo.totalSeats * 100;

                        if (ratio < 0) {
                            ratio = 0;
                        }
                        else if (ratio > 100) {
                            ratio = 100;
                        }
                        var availableLicensesString = String.format(Strings.STS.L_AutohosteAppLicensing_SeatsAvailable, totalused, autoHostedAppLicensingListHeaderInfo.totalSeats);

                        autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseControl-wrapper">');
                        autoHostedAppLicensingHeaderControlHtml.push('<div id="licensesRemainingControl_');
                        autoHostedAppLicensingHeaderControlHtml.push(autoHostedAppLicensingListHeaderInfo.wpq);
                        autoHostedAppLicensingHeaderControlHtml.push('" class="ms-metadata" >');
                        if (totalused > autoHostedAppLicensingListHeaderInfo.totalSeats) {
                            var requiredLicensesString = String.format(Strings.STS.L_AutohosteAppLicensing_SeatsRequired, totalused - autoHostedAppLicensingListHeaderInfo.totalSeats);

                            autoHostedAppLicensingHeaderControlHtml.push(STSHtmlEncode(requiredLicensesString));
                        }
                        else {
                            autoHostedAppLicensingHeaderControlHtml.push(STSHtmlEncode(availableLicensesString));
                        }
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseResourceBarTableWrapper" >');
                        autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseControl-resourceBarTableCellWrapper" >');
                        autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseControl-resourceBarContainer ');
                        if (ratio <= 85) {
                            autoHostedAppLicensingHeaderControlHtml.push(' ms-autohostedLicenseControl-resourceBarContainer-Normal" title="');
                            autoHostedAppLicensingHeaderControlHtml.push(STSHtmlEncode(availableLicensesString));
                            autoHostedAppLicensingHeaderControlHtml.push('" >');
                            autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseControl-resourceBarNormal" alt="');
                        }
                        else {
                            autoHostedAppLicensingHeaderControlHtml.push(' ms-autohostedLicenseControl-resourceBarContainer-Warning" title=">');
                            autoHostedAppLicensingHeaderControlHtml.push(STSHtmlEncode(availableLicensesString));
                            autoHostedAppLicensingHeaderControlHtml.push('" >');
                            autoHostedAppLicensingHeaderControlHtml.push('<div class="ms-autohostedLicenseControl-resourceBarWarning" alt="');
                        }
                        autoHostedAppLicensingHeaderControlHtml.push(ratio);
                        autoHostedAppLicensingHeaderControlHtml.push('" style="width: ');
                        autoHostedAppLicensingHeaderControlHtml.push(ratio);
                        autoHostedAppLicensingHeaderControlHtml.push('%;" >');
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingHeaderControlHtml.push('<a href="#" class="ms-commandLink ms-autohostedLicenseControl-buyMoreStyle" onclick="window.AutohostedLicensingListHeaderControl.ShowBuyMoreDialog();return false;">');
                        autoHostedAppLicensingHeaderControlHtml.push(STSHtmlEncode(Strings.STS.L_AutohosteAppLicensing_BuyMore));
                        autoHostedAppLicensingHeaderControlHtml.push('</a>');
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingHeaderControlHtml.push('</div>');
                        autoHostedAppLicensingListHeaderInfo.elem.innerHTML = autoHostedAppLicensingHeaderControlHtml.join('');
                        autoHostedAppLicensingListHeaderInfo.loadInProgress = false;
                    }
                    function OnServerCallFailed(serverSender, serverEvt) {
                    ULS647:
                        ;
                        if (autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout != null) {
                            window.clearTimeout(autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout);
                            autoHostedAppLicensingListHeaderInfo.sodLoadingTimeout = null;
                        }
                        autoHostedAppLicensingListHeaderInfo.elem.innerHTML = '';
                        autoHostedAppLicensingListHeaderInfo.loadInProgress = false;
                    }
                });
            }
        },
        ShowBuyMoreDialog: function ShowBuyMoreDialog() {
        ULS647:
            ;
            var buyMoreHtmlBuilder = [];

            buyMoreHtmlBuilder.push('<span class=\"ms-csrformvalidation\">');
            buyMoreHtmlBuilder.push(String.format(STSHtmlEncode(Strings.STS.L_AutoHostedLicensing_BuyMoreInBeta), '<br/>', '<a href="http://go.microsoft.com/fwlink/?LinkId=251475" target="_blank">', '</a>'));
            buyMoreHtmlBuilder.push('</span>');
            buyMoreHtmlBuilder.push('<div class=\"ms-core-form-bottomButtonBox\" id=\"dlgDivButton\">');
            buyMoreHtmlBuilder.push('<button id=\"ms-OKBtnDismissDlg\" onclick=\"DismissErrDlg(this)\">');
            buyMoreHtmlBuilder.push(STSHtmlEncode(SP.Res.okButtonCaption));
            buyMoreHtmlBuilder.push('</button></div>');
            var buyMoreHtml = buyMoreHtmlBuilder.join('');
            var divElem = document.createElement('DIV');

            divElem.innerHTML = buyMoreHtml;
            var dopt = {
                html: divElem,
                title: Strings.STS.L_AutoHostedLicensing_BuyMoreInBetaTitle,
                dialogReturnValueCallback: function() {
                ULS647:
                    ;
                    STSNavigate(window.location.href);
                }
            };
            var dlg = new SP.UI.ModalDialog.showModalDialog(dopt);
            var okButton = document.getElementById('ms-OKBtnDismissDlg');

            if (okButton != null)
                okButton.focus();
        }
    };
    if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("autohostedlicensingtemplates.js");
    }
}
function ULS647() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "autohostedlicensingtemplates.commentedjs";
    return o;
}
$_global_autohostedlicensingtemplates();
