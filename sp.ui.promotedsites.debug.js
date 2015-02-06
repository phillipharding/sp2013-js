
Type.registerNamespace('SP.UI.PromotedSitesList');

SP.UI.PromotedSitesList.EditLinkDialog = function SP_UI_PromotedSitesList_EditLinkDialog($p0, $p1) {
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_$V_0 = Function.createDelegate(this, this.$V_0);
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
    this.$$d_$X_0 = Function.createDelegate(this, this.$X_0);
    this.$$d_$W_0 = Function.createDelegate(this, this.$W_0);
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$0_0 = $p0;
    this.$6_0 = $p1;
}
SP.UI.PromotedSitesList.EditLinkDialog.$B = function SP_UI_PromotedSitesList_EditLinkDialog$$B($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = document.createElement('tr');
    var $v_1 = document.createElement('h3');
    $v_1.id = SP.UI.PromotedSitesList.EditLinkDialog.$H('label' + $p4);
    $v_1.className = 'ms-standardheader';
    $v_1.innerHTML = STSHtmlEncode($p1);
    var $v_2 = document.createElement('td');
    $v_2.className = 'ms-formlabel ms-contentFollowing-promoSiteFormLabel';
    $v_2.appendChild($v_1);
    if ($p5) {
        var $v_5 = document.createElement('span');
        $v_5.className = 'ms-formvalidation';
        $v_5.title = Strings.STS.L_RequiredField_Tooltip;
        $v_5.innerHTML = ' *';
        $v_1.appendChild($v_5);
    }
    var $v_3 = document.createElement('td');
    $v_3.className = 'ms-formbody ms-contentFollowing-promoSiteFormInput';
    var $v_4 = SP.UI.PromotedSitesList.EditLinkDialog.$P($p1, $p3, $p2, 'text' + $p4);
    $v_3.appendChild($v_4);
    $v_0.appendChild($v_2);
    $v_0.appendChild($v_3);
    $p0.appendChild($v_0);
    return $v_4;
}
SP.UI.PromotedSitesList.EditLinkDialog.$P = function SP_UI_PromotedSitesList_EditLinkDialog$$P($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('input');
    $v_0.id = SP.UI.PromotedSitesList.EditLinkDialog.$H($p3);
    $v_0.title = $p0;
    $v_0.type = 'text';
    $v_0.setAttribute('maxLength', $p1);
    $v_0.value = $p2;
    $v_0.className = 'ms-contentFollowing-promoSiteFormInput';
    return $v_0;
}
SP.UI.PromotedSitesList.EditLinkDialog.$G = function SP_UI_PromotedSitesList_EditLinkDialog$$G($p0, $p1) {
    var $v_0 = document.createElement('input');
    $v_0.className = 'ms-ButtonHeightWidth';
    $v_0.id = SP.UI.PromotedSitesList.EditLinkDialog.$H($p1);
    $v_0.type = 'button';
    $v_0.value = $p0;
    return $v_0;
}
SP.UI.PromotedSitesList.EditLinkDialog.$H = function SP_UI_PromotedSitesList_EditLinkDialog$$H($p0) {
    return 'editDialog_' + $p0;
}
SP.UI.PromotedSitesList.EditLinkDialog.$L = function SP_UI_PromotedSitesList_EditLinkDialog$$L($p0) {
    var $v_0 = true;
    var $v_1 = new URI($p0);
    var $v_2 = $v_1.getScheme();
    if (!SP.ScriptUtility.isNullOrEmptyString($v_2)) {
        $v_2 = $v_2.toLowerCase();
    }
    if (($v_2 !== 'http') && ($v_2 !== 'https')) {
        $v_0 = false;
    }
    else if (SP.ScriptUtility.isNullOrEmptyString($v_1.getHost())) {
        $v_0 = false;
    }
    return $v_0;
}
SP.UI.PromotedSitesList.EditLinkDialog.prototype = {
    $0_0: null,
    $6_0: false,
    $D_0: false,
    $4_0: null,
    $5_0: null,
    $E_0: null,
    $3_0: null,
    $C_0: null,
    $2_0: null,
    $F_0: null,
    
    get_$9_0: function SP_UI_PromotedSitesList_EditLinkDialog$get_$9_0() {
        return this.$D_0;
    },
    set_$9_0: function SP_UI_PromotedSitesList_EditLinkDialog$set_$9_0($p0) {
        if (this.$D_0 !== $p0) {
            this.$D_0 = $p0;
            this.$I_0();
        }
        return $p0;
    },
    
    $K_0: function SP_UI_PromotedSitesList_EditLinkDialog$$K_0() {
        var $v_0 = new SP.UI.DialogOptions();
        $v_0.title = (this.$6_0) ? Strings.STS.L_PromoSites_EditDialogTitle : Strings.STS.L_PromoSites_NewDialogTitle;
        $v_0.autoSize = true;
        $v_0.html = this.$O_0();
        this.$I_0();
        SP.UI.ModalDialog.showModalDialog($v_0);
        this.$4_0.focus();
    },
    
    $O_0: function SP_UI_PromotedSitesList_EditLinkDialog$$O_0() {
        var $v_0 = document.createElement('div');
        $v_0.className = 'ms-core-form';
        var $v_1 = '';
        var $v_2 = 'http://';
        var $v_3 = '';
        var $v_4 = 'http://';
        if (this.$6_0) {
            $v_1 = STSHtmlDecode(this.$0_0['Title']);
            $v_2 = this.$0_0['LinkLocation'];
            $v_3 = STSHtmlDecode(this.$0_0['Description']);
            $v_4 = this.$0_0['BackgroundImageLocation'];
        }
        var $v_5 = document.createElement('table');
        var $v_6 = document.createElement('tbody');
        this.$4_0 = SP.UI.PromotedSitesList.EditLinkDialog.$B($v_6, Strings.STS.L_PromoSites_TitleField, $v_1, 50, 'Title', true);
        this.$5_0 = SP.UI.PromotedSitesList.EditLinkDialog.$B($v_6, Strings.STS.L_PromoSites_URLField, $v_2, 250, 'Url', true);
        this.$E_0 = SP.UI.PromotedSitesList.EditLinkDialog.$B($v_6, Strings.STS.L_PromoSites_DescriptionField, $v_3, 100, 'Description', false);
        this.$3_0 = SP.UI.PromotedSitesList.EditLinkDialog.$B($v_6, Strings.STS.L_PromoSites_ImageURLField, $v_4, 250, 'ImageUrl', false);
        $v_5.appendChild($v_6);
        $addHandler(this.$4_0, 'keyup', this.$$d_$Y_0);
        $addHandler(this.$4_0, 'change', this.$$d_$Y_0);
        $addHandler(this.$5_0, 'keyup', this.$$d_$Y_0);
        $addHandler(this.$5_0, 'change', this.$$d_$Y_0);
        $addHandler(this.$3_0, 'keyup', this.$$d_$Y_0);
        $addHandler(this.$3_0, 'change', this.$$d_$Y_0);
        var $v_7 = this.$N_0();
        $v_0.appendChild($v_6);
        $v_0.appendChild($v_7);
        return $v_0;
    },
    
    $N_0: function SP_UI_PromotedSitesList_EditLinkDialog$$N_0() {
        var $v_0 = document.createElement('div');
        $v_0.className = 'ms-core-form-bottomButtonBox';
        this.$C_0 = SP.UI.PromotedSitesList.EditLinkDialog.$G(Strings.STS.L_PromoSites_DeleteButton, 'buttonDelete');
        this.$2_0 = SP.UI.PromotedSitesList.EditLinkDialog.$G(Strings.STS.L_PromoSites_SaveButton, 'buttonSave');
        this.$F_0 = SP.UI.PromotedSitesList.EditLinkDialog.$G(Strings.STS.L_PromoSites_CancelButton, 'buttonCancel');
        if (this.$6_0) {
            $v_0.appendChild(this.$C_0);
        }
        $v_0.appendChild(this.$2_0);
        $v_0.appendChild(this.$F_0);
        $addHandler(this.$C_0, 'click', this.$$d_$W_0);
        $addHandler(this.$2_0, 'click', this.$$d_$X_0);
        $addHandler(this.$F_0, 'click', this.$$d_$Q_0);
        return $v_0;
    },
    
    $Q_0: function SP_UI_PromotedSitesList_EditLinkDialog$$Q_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        SP.UI.ModalDialog.commonModalDialogClose(0, null);
    },
    
    $W_0: function SP_UI_PromotedSitesList_EditLinkDialog$$W_0($p0) {
        if (confirm(Strings.STS.L_PromoSites_DeleteConfirmation)) {
            if (!this.get_$9_0()) {
                var $v_0 = SP.ClientContext.get_current();
                Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.deleteSiteLink($v_0, this.$0_0['ID']);
                $v_0.executeQueryAsync(this.$$d_$V_0, this.$$d_$U_0);
                this.set_$9_0(true);
            }
        }
    },
    
    $X_0: function SP_UI_PromotedSitesList_EditLinkDialog$$X_0($p0) {
        if (!this.get_$9_0()) {
            var $v_0 = SP.ClientContext.get_current();
            var $v_1 = this.$3_0.value;
            if ($v_1 === 'http://') {
                $v_1 = '';
            }
            if (this.$6_0) {
                Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.updateSiteLink($v_0, this.$0_0['ID'], this.$5_0.value, this.$4_0.value, this.$E_0.value, $v_1);
            }
            else {
                Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.addSiteLink($v_0, this.$5_0.value, this.$4_0.value, this.$E_0.value, $v_1);
            }
            $v_0.executeQueryAsync(this.$$d_$V_0, this.$$d_$U_0);
            this.set_$9_0(true);
        }
    },
    
    $Y_0: function SP_UI_PromotedSitesList_EditLinkDialog$$Y_0($p0) {
        this.$I_0();
    },
    
    $V_0: function SP_UI_PromotedSitesList_EditLinkDialog$$V_0($p0, $p1) {
        SP.UI.ModalDialog.RefreshPage(1);
    },
    
    $U_0: function SP_UI_PromotedSitesList_EditLinkDialog$$U_0($p0, $p1) {
        alert($p1.get_message());
        this.set_$9_0(false);
    },
    
    $I_0: function SP_UI_PromotedSitesList_EditLinkDialog$$I_0() {
        var $v_0 = this.$D_0;
        this.$E_0.disabled = $v_0;
        this.$3_0.disabled = $v_0;
        this.$4_0.disabled = $v_0;
        this.$5_0.disabled = $v_0;
        this.$C_0.disabled = $v_0;
        this.$2_0.disabled = ($v_0 || !SP.UI.PromotedSitesList.EditLinkDialog.$L(this.$5_0.value) || (!this.$4_0.value.trim().length));
        if ((this.$3_0.value.trim().length > 0) && (this.$3_0.value !== 'http://') && !SP.UI.PromotedSitesList.EditLinkDialog.$L(this.$3_0.value)) {
            this.$2_0.disabled = true;
        }
        if (!this.$6_0 && !this.$2_0.disabled) {
            this.$2_0.className = 'ms-button-emphasize';
        }
        else {
            this.$2_0.className = '';
        }
    }
}


SP.UI.PromotedSitesList.GlobalTemplateOverrides = function SP_UI_PromotedSitesList_GlobalTemplateOverrides() {
}
SP.UI.PromotedSitesList.GlobalTemplateOverrides.$$cctor = function SP_UI_PromotedSitesList_GlobalTemplateOverrides$$$cctor() {
    var $v_0 = new SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer(170, 0);
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides($v_0.createRenderingContextOverrides());
}


SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer = function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer($p0, $p1) {
    this.$$d_$S_2 = Function.createDelegate(this, this.$S_2);
    this.$$d_$T_2 = Function.createDelegate(this, this.$T_2);
    SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.initializeBase(this, [ $p0, $p1 ]);
}
SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.prototype = {
    $8_2: null,
    $1_2: false,
    $A_2: false,
    
    get_$7_2: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$get_$7_2() {
        return this.$1_2;
    },
    set_$7_2: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$set_$7_2($p0) {
        if (this.$1_2 !== $p0) {
            this.$1_2 = $p0;
            if (this.$8_2) {
                var $v_0 = {};
                $v_0[this.get_$J_2()] = ($p0) ? '1' : '0';
                var $v_1 = window.self.ajaxNavigate;
                $v_1.update(null, $v_0);
            }
        }
        return $p0;
    },
    
    get_$J_2: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$get_$J_2() {
        return 'IsEditing_' + this.$8_2.wpq;
    },
    
    createTileRenderer: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$createTileRenderer($p0, $p1, $p2, $p3, $p4) {
        return new SP.UI.PromotedSitesList.PromotedSitesTileRenderer($p0, $p1, $p2, $p3, $p4, this.get_$7_2());
    },
    
    onPostRender: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$onPostRender($p0) {
        var $v_0 = $get('promotedSitesAdminMode_' + $p0.wpq);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $addHandler($v_0, 'click', this.$$d_$T_2);
        }
        if (this.get_$7_2()) {
            var $v_1 = $get('promotedSitesAddLink_' + $p0.wpq);
            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $addHandler($v_1, 'click', this.$$d_$S_2);
            }
            var $v_2 = $p0.ListData['Row'];
            var $v_3 = $v_2.length;
            for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
                var $v_5 = $v_2[$v_4];
                var $v_6 = SP.UI.TileView.TileRenderer.tileElementId($p0, $v_5['ID'], 3);
                var $v_7 = $get($v_6);
                if (!SP.ScriptHelpers.isNullOrUndefined($v_7)) {
                    var $v_8 = new SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.TileClickHandler($v_5);
                    $v_8.attach($v_7);
                }
            }
        }
        SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.prototype.onPostRender.call(this, $p0);
    },
    
    renderBodyContent: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$renderBodyContent($p0, $p1) {
        $p1.addCssClass('ms-contentFollowing-promoSiteRootContainer');
        $p1.renderBeginTag('div');
        if (this.get_$7_2()) {
            $p1.addAttribute('id', 'promotedSitesAddLink_' + $p0.wpq);
            $p1.addAttribute('href', 'javascript:;');
            $p1.addCssClass('ms-floatLeft');
            $p1.addCssClass('ms-contentFollowing-newPromoSite');
            $p1.renderBeginTag('a');
            $p1.addCssClass('ms-textLarge');
            $p1.renderBeginTag('span');
            $p1.writeEncoded(Strings.STS.L_PromoSites_NewLinkCommand);
            $p1.renderEndTag();
            $p1.renderEndTag();
            if (!this.$A_2) {
                $p1.addCssClass('ms-contentFollowing-promoSiteTilesContainer');
                $p1.renderBeginTag('div');
                SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.prototype.renderBodyContent.call(this, $p0, $p1);
                $p1.renderEndTag();
            }
        }
        else if (!this.$A_2) {
            $p1.addAttribute('style', 'margin-left:-3px;');
            $p1.renderBeginTag('div');
            SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.prototype.renderBodyContent.call(this, $p0, $p1);
            $p1.renderEndTag();
        }
        $p1.addCssClass('ms-clear');
        $p1.renderBeginTag('div');
        $p1.renderEndTag();
        $p1.renderEndTag();
    },
    
    renderHeaderContent: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$renderHeaderContent($p0, $p1) {
        this.$8_2 = $p0;
        var $v_0 = this.$8_2.ListData['Row'];
        this.$A_2 = (!SP.ScriptHelpers.isNullOrUndefined($v_0) && (!$v_0.length));
        var $v_1 = $p0.IsProfileAdmin;
        if (this.$A_2) {
            this.set_$7_2(true);
        }
        else {
            var $v_2 = window.self.ajaxNavigate;
            var $v_3 = $v_2.getParam(this.get_$J_2());
            if ($v_3 === '1') {
                this.$1_2 = true;
            }
        }
        if (!this.$A_2) {
            var $v_4 = (this.$1_2) ? Strings.STS.L_PromoSites_StopAdminModeCommand : Strings.STS.L_PromoSites_StartAdminModeCommand;
            var $v_5 = (this.$1_2) ? Strings.STS.L_PromoSites_StopAdminModeTitle : Strings.STS.L_PromoSites_StartAdminModeTitle;
            var $v_6 = String.format(STSHtmlEncode($v_4), '<a href=\"javascript:;\" id=\"promotedSitesAdminMode_' + $p0.wpq + '\" title=\"' + STSHtmlEncode($v_5) + '\">', '</a>');
            $p1.addAttribute('id', 'promotedSitesAdminModeContainer_' + $p0.wpq);
            $p1.addCssClass('ms-textLarge');
            if (!$v_1) {
                $p1.addAttribute('style', 'display:none;');
                var $$t_C = this;
                SP.SOD.executeOrDelayUntilEventNotified(function($p1_0) {
                    if (SP.ScriptUtility.isNullOrUndefined($p1_0)) {
                        return;
                    }
                    var $v_7 = $get('promotedSitesAdminModeContainer_' + $p0.wpq);
                    if (!SP.ScriptUtility.isNullOrUndefined($v_7)) {
                        var $v_8 = $p1_0.AdminLink;
                        if (!SP.ScriptUtility.isNullOrUndefined($v_8)) {
                            $v_7.style.display = '';
                        }
                    }
                }, 'SPSuiteLinksRendered');
            }
            $p1.renderBeginTag('span');
            $p1.write($v_6);
            $p1.renderEndTag();
        }
    },
    
    $S_2: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$$S_2($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        var $v_0 = new SP.UI.PromotedSitesList.EditLinkDialog(null, false);
        $v_0.$K_0();
    },
    
    $T_2: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer$$T_2($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.set_$7_2(!this.get_$7_2());
        RenderListView(this.$8_2, this.$8_2.wpq);
    }
}


SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.TileClickHandler = function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer_TileClickHandler($p0) {
    this.$$d_$R_0 = Function.createDelegate(this, this.$R_0);
    this.$0_0 = $p0;
}
SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.TileClickHandler.prototype = {
    $0_0: null,
    
    attach: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer_TileClickHandler$attach($p0) {
        $addHandler($p0, 'click', this.$$d_$R_0);
    },
    
    $R_0: function SP_UI_PromotedSitesList_PromotedSitesTileViewRenderer_TileClickHandler$$R_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        var $v_0 = this.$0_0['IsPersonalizedLink'];
        if ($v_0 !== 'true') {
            var $v_1 = new SP.UI.PromotedSitesList.EditLinkDialog(this.$0_0, true);
            $v_1.$K_0();
        }
    }
}


SP.UI.PromotedSitesList.PromotedSitesTileRenderer = function SP_UI_PromotedSitesList_PromotedSitesTileRenderer($p0, $p1, $p2, $p3, $p4, $p5) {
    SP.UI.PromotedSitesList.PromotedSitesTileRenderer.initializeBase(this, [ $p0, $p1, $p2, $p3, $p4 ]);
    this.$1_2 = $p5;
}
SP.UI.PromotedSitesList.PromotedSitesTileRenderer.prototype = {
    $1_2: false,
    
    onBackgroundPostRender: function SP_UI_PromotedSitesList_PromotedSitesTileRenderer$onBackgroundPostRender($p0) {
        SP.UI.PromotedLinks.PromotedLinksTileRenderer.prototype.onBackgroundPostRender.call(this, $p0);
        if (this.$1_2) {
            $p0.renderBeginTag('div');
            $p0.writeEncoded(Strings.STS.L_PromoSites_EditTileCaption);
            $p0.renderEndTag();
        }
    }
}


Type.registerNamespace('Microsoft.SharePoint.Portal.UserProfiles');

Microsoft.SharePoint.Portal.UserProfiles.PromotedSites = function Microsoft_SharePoint_Portal_UserProfiles_PromotedSites() {
}
Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.addSiteLink = function Microsoft_SharePoint_Portal_UserProfiles_PromotedSites$addSiteLink(context, url, title, description, imageUrl) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{3704ccfc-2b1b-4b46-b681-12c72e4a635c}', 'AddSiteLink', [ url, title, description, imageUrl ]);
    context.addQuery($v_0);
}
Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.deleteSiteLink = function Microsoft_SharePoint_Portal_UserProfiles_PromotedSites$deleteSiteLink(context, itemID) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{3704ccfc-2b1b-4b46-b681-12c72e4a635c}', 'DeleteSiteLink', [ itemID ]);
    context.addQuery($v_0);
}
Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.getPromotedLinksAsTiles = function Microsoft_SharePoint_Portal_UserProfiles_PromotedSites$getPromotedLinksAsTiles(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{3704ccfc-2b1b-4b46-b681-12c72e4a635c}', 'GetPromotedLinksAsTiles', null);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.updateSiteLink = function Microsoft_SharePoint_Portal_UserProfiles_PromotedSites$updateSiteLink(context, itemID, url, title, description, imageUrl) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{3704ccfc-2b1b-4b46-b681-12c72e4a635c}', 'UpdateSiteLink', [ itemID, url, title, description, imageUrl ]);
    context.addQuery($v_0);
}


SP.UI.PromotedSitesList.EditLinkDialog.registerClass('SP.UI.PromotedSitesList.EditLinkDialog');
SP.UI.PromotedSitesList.GlobalTemplateOverrides.registerClass('SP.UI.PromotedSitesList.GlobalTemplateOverrides');
SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.registerClass('SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer', SP.UI.PromotedLinks.PromotedLinksTileViewRenderer);
SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.TileClickHandler.registerClass('SP.UI.PromotedSitesList.PromotedSitesTileViewRenderer.TileClickHandler');
SP.UI.PromotedSitesList.PromotedSitesTileRenderer.registerClass('SP.UI.PromotedSitesList.PromotedSitesTileRenderer', SP.UI.PromotedLinks.PromotedLinksTileRenderer);
Microsoft.SharePoint.Portal.UserProfiles.PromotedSites.registerClass('Microsoft.SharePoint.Portal.UserProfiles.PromotedSites');
function sp_ui_promotedsites_initialize() {
SP.UI.PromotedSitesList.GlobalTemplateOverrides.$$cctor();
};
sp_ui_promotedsites_initialize();

RegisterModuleInit("sp.ui.promotedsites.js", sp_ui_promotedsites_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.promotedsites.js");
