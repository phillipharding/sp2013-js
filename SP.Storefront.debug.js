Type.registerNamespace('SP.Storefront');
SP.Storefront.SPAppMetadataCatalogType = function() {
};
SP.Storefront.SPAppMetadataCatalogType.prototype = {
    officeOnline: 0,
    corporate: 1,
    sharePoint: 2
};
SP.Storefront.SPAppMetadataCatalogType.registerEnum('SP.Storefront.SPAppMetadataCatalogType', false);
SP.Storefront.SPAppRequestStatus = function() {
};
SP.Storefront.SPAppRequestStatus.prototype = {
    newRequest: 1,
    pending: 2,
    approved: 4,
    declined: 8,
    canceled: 16,
    approveClosed: 32,
    declineClosed: 64
};
SP.Storefront.SPAppRequestStatus.registerEnum('SP.Storefront.SPAppRequestStatus', true);
SP.Storefront.SPOutOfBoxAppType = function() {
};
SP.Storefront.SPOutOfBoxAppType.prototype = {
    listTemplate: 0,
    feature: 1,
    invalidType: 2
};
SP.Storefront.SPOutOfBoxAppType.registerEnum('SP.Storefront.SPOutOfBoxAppType', false);
SP.Storefront.AppIconBase = function SP_Storefront_AppIconBase($p0) {
    this.$$d_$3G_4 = Function.createDelegate(this, this.$3G_4);
    SP.Storefront.AppIconBase.initializeBase(this, [$p0.get_catalog() ? $p0.get_id() : $p0.get_assetId()]);
    this.appMetadata = $p0;
    this.set_selectedCssClass(SP.ScriptUtility.emptyString);
    this.set_highlightCssClass(SP.ScriptUtility.emptyString);
};
SP.Storefront.AppIconBase.getIconImageDiv = function SP_Storefront_AppIconBase$getIconImageDiv($p0, $p1, $p2) {
    return SP.Storefront.AppIconBase.getIconImageParent($p0, $p1, false, $p2);
};
SP.Storefront.AppIconBase.getIconImageSpan = function SP_Storefront_AppIconBase$getIconImageSpan($p0, $p1) {
    return SP.Storefront.AppIconBase.getIconImageMain($p0, false, $p1);
};
SP.Storefront.AppIconBase.getIconImageParent = function SP_Storefront_AppIconBase$getIconImageParent($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('div');

    if (!SP.ScriptUtility.isNullOrEmptyString($p0)) {
        Sys.UI.DomElement.addCssClass($v_0, $p0);
    }
    var $v_1 = SP.Storefront.AppIconBase.getIconImageMain($p1, $p2, $p3);

    $v_0.appendChild($v_1);
    return $v_0;
};
SP.Storefront.AppIconBase.getIconImageMain = function SP_Storefront_AppIconBase$getIconImageMain($p0, $p1, $p2) {
    var $v_0;

    if ($p1) {
        $v_0 = SP.Storefront.HtmlElement.createAccessibleAnchor();
    }
    else {
        $v_0 = document.createElement('span');
    }
    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-appiconspan');
    $v_0.id = $p0 + 'Image';
    $p2.val = document.createElement('img');
    $p2.val.alt = SP.ScriptUtility.emptyString;
    Sys.UI.DomElement.addCssClass($p2.val, 'ms-storefront-appiconimg');
    Sys.UI.DomElement.addCssClass($p2.val, 'ms-storefront-defaultappiconimg');
    $p2.val.setAttribute('src', '/_layouts/15/images/spstorefront.png?rev=23');
    $v_0.appendChild($p2.val);
    return $v_0;
};
SP.Storefront.AppIconBase.prototype = {
    appMetadata: null,
    iconImage: null,
    getIconImageDivWithDefaults: function SP_Storefront_AppIconBase$getIconImageDivWithDefaults($p0, $p1) {
        var $$t_4, $$t_5;
        var $v_0 = ($$t_5 = SP.Storefront.AppIconBase.getIconImageParent($p0, this.elementObject.id, $p1, $$t_4 = {
            'val': this.iconImage
        }), this.iconImage = $$t_4.val, $$t_5);
        var $v_1 = SP.Utilities.HttpUtility.urlPathEncode(this.appMetadata.get_thumbnailUrl());

        SP.Storefront.ImageUrlVerifier.verifyImageWithAction(this.iconImage, $v_1, this.$$d_$3G_4);
        return $v_0;
    },
    makeImageSpanBackgroundSemiTransparent: function SP_Storefront_AppIconBase$makeImageSpanBackgroundSemiTransparent() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.iconImage) && !SP.ScriptUtility.isNullOrUndefined(this.iconImage.parentNode)) {
            Sys.UI.DomElement.addCssClass(this.iconImage.parentNode, 'ms-storefront-semitransparent');
        }
    },
    canInstallApp: function SP_Storefront_AppIconBase$canInstallApp($p0) {
        var $v_0 = !SP.ScriptUtility.isNullOrUndefined(this.appMetadata.get_instance()) && (this.appMetadata.get_instance()).hasData();
        var $v_1 = SP.Storefront.AppDetailsView.canInstallAppBasicGlobalOption(this.appMetadata, $p0);

        if ($p0) {
            $v_1 = !!($v_1 & !SP.Storefront.StorefrontContext.get_licensePurchase());
        }
        return !$v_0 && $v_1;
    },
    $3G_4: function SP_Storefront_AppIconBase$$3G_4($p0) {
        Sys.UI.DomElement.removeCssClass(this.iconImage, 'ms-storefront-defaultappiconimg');
    }
};
SP.Storefront.OfficeAppIcon = function SP_Storefront_OfficeAppIcon($p0) {
    this.$$d_$5k_5 = Function.createDelegate(this, this.$5k_5);
    this.$$d_$4i_5 = Function.createDelegate(this, this.$4i_5);
    this.$$d_$5g_5 = Function.createDelegate(this, this.$5g_5);
    SP.Storefront.OfficeAppIcon.initializeBase(this, [$p0]);
    this.elementObject.id = 'idStorefrontAppIcon';
    this.addCssClass('ms-storefront-appicon');
    this.$5_1.tabIndex = -1;
    var $v_0 = this.getIconImageDivWithDefaults(SP.ScriptUtility.emptyString, false);

    Sys.UI.DomElement.addCssClass($v_0.firstChild, 'ms-storefront-galleryappiconspan');
    this.appendChild($v_0);
    this.$S_5 = document.createElement('div');
    this.appendChild(this.$S_5);
    this.$11_5 = SP.Storefront.HtmlElement.createAccessibleAnchor();
    Sys.UI.DomElement.addCssClass(this.$11_5, 'ms-storefront-appicontext');
    Sys.UI.DomElement.addCssClass(this.$11_5, 'ms-storefront-wordwrap');
    SP.UI.UIUtility.setInnerText(this.$11_5, this.appMetadata.get_title());
    this.$11_5.id = this.elementObject.id + 'Text';
    $addHandler(this.$11_5, 'click', this.$$d_$5g_5);
    this.$S_5.appendChild(this.$11_5);
    this.$1x_5 = new SP.Storefront.FiveStarRating('idStorefrontAppIconRatings');
    this.$S_5.appendChild(this.$1x_5.elementObject);
    this.$1x_5.set_rating(this.appMetadata.get_rating());
    var $v_1 = document.createElement('div');

    this.$S_5.appendChild($v_1);
    var $v_2 = document.createElement('span');

    SP.UI.UIUtility.setInnerText($v_2, this.appMetadata.get_price());
    $v_2.id = this.elementObject.id + 'Price';
    Sys.UI.DomElement.addCssClass($v_2, 'ms-textSmall');
    $v_1.appendChild($v_2);
    if (SP.ScriptUtility.isNullOrEmptyString(this.appMetadata.get_pricePromotion())) {
        Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-appiconprice');
    }
    else {
        Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-appiconpriceorig');
        var $v_3 = document.createElement('span');

        Sys.UI.DomElement.addCssClass($v_3, 'ms-storefront-appiconpricepromo');
        Sys.UI.DomElement.addCssClass($v_3, 'ms-textSmall');
        SP.UI.UIUtility.setInnerText($v_3, this.appMetadata.get_pricePromotion());
        $v_3.id = this.elementObject.id + 'PromoPrice';
        $v_1.appendChild($v_3);
    }
    this.appIconPreview = new SP.Storefront.HtmlElement();
    this.appIconPreview.initElementObject('div', 'idStorefrontIconPreview' + (SP.Guid.newGuid()).toString(), null, SP.ScriptUtility.emptyString, 'ms-storefront-appiconpreview');
    this.appIconPreview.addCssClass('ms-storefront-wordwrap');
    this.appIconPreview.addCssClass('ms-textXSmall');
    if ($p0.get_prerequisitesMet()) {
        SP.UI.UIUtility.setInnerText(this.appIconPreview.elementObject, $p0.get_shortDescription());
    }
    else {
        SP.UI.UIUtility.setInnerText(this.appIconPreview.elementObject, SP.Res.storefront_AppIconPreview_PrerequisiteNotMetMessage);
    }
    SP.Storefront.HtmlElement.setOpacity(this.appIconPreview.elementObject, 0);
    this.appendHtmlElement(this.appIconPreview);
    this.$2I_5 = new SP.Storefront.ForwardBackwardsAction(this.$$d_$4i_5, this.$$d_$5k_5);
    this.$2I_5.setWait(100);
    if (!this.canInstallApp(false)) {
        this.addCssClass('ms-storefront-semitransparent');
    }
};
SP.Storefront.OfficeAppIcon.prototype = {
    appIconPreview: null,
    $2I_5: null,
    $S_5: null,
    $1x_5: null,
    $11_5: null,
    updateLayout: function SP_Storefront_OfficeAppIcon$updateLayout() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$1x_5)) {
            this.$1x_5.updateLayout();
        }
    },
    highlightAction: function SP_Storefront_OfficeAppIcon$highlightAction() {
        SP.Storefront.ListItemElement.prototype.highlightAction.call(this);
        if (SP.Storefront.StorefrontApp.get_isIE8orLess()) {
            return;
        }
        this.$2I_5.triggerForwardsAction();
    },
    unHighlightAction: function SP_Storefront_OfficeAppIcon$unHighlightAction() {
        SP.Storefront.ListItemElement.prototype.unHighlightAction.call(this);
        if (SP.Storefront.StorefrontApp.get_isIE8orLess()) {
            return;
        }
        this.$2I_5.triggerBackwardsAction();
    },
    onFocus: function SP_Storefront_OfficeAppIcon$onFocus($p0) {
        SP.Storefront.HtmlElement.focusDOMElement(this.$11_5);
    },
    $4i_5: function SP_Storefront_OfficeAppIcon$$4i_5() {
        SP.Storefront.HtmlElement.setOpacity(this.$S_5, 1);
        this.appIconPreview.set_top(this.$S_5.offsetTop);
        var $v_0 = new SPAnimation.State();

        $v_0.SetAttribute(5, 0);
        var $v_1 = new SPAnimation.Object(16, 0, this.$S_5, $v_0, null, null);

        $v_1.RunAnimation();
        SP.Storefront.HtmlElement.setOpacity(this.appIconPreview.elementObject, 0);
        var $v_2 = new SPAnimation.State();

        $v_2.SetAttribute(5, 1);
        var $v_3 = new SPAnimation.Object(19, 0, this.appIconPreview.elementObject, $v_2, null, null);

        $v_3.RunAnimation();
    },
    $5k_5: function SP_Storefront_OfficeAppIcon$$5k_5() {
        SP.Storefront.HtmlElement.setOpacity(this.appIconPreview.elementObject, 1);
        var $v_0 = new SPAnimation.State();

        $v_0.SetAttribute(5, 0);
        var $v_1 = new SPAnimation.Object(20, 0, this.appIconPreview.elementObject, $v_0, null, null);

        $v_1.RunAnimation();
        SP.Storefront.HtmlElement.setOpacity(this.$S_5, 0);
        this.appIconPreview.set_top(this.$S_5.offsetTop);
        var $v_2 = new SPAnimation.State();

        $v_2.SetAttribute(5, 1);
        var $v_3 = new SPAnimation.Object(15, 0, this.$S_5, $v_2, null, null);

        $v_3.RunAnimation();
    },
    $5g_5: function SP_Storefront_OfficeAppIcon$$5g_5($p0) {
        SP.Storefront.MouseDrivenListItem.prototype.onMouseClick.call(this, $p0);
    }
};
SP.Storefront.MyAppIcon = function SP_Storefront_MyAppIcon($p0, $p1) {
    this.$$d_$33_5 = Function.createDelegate(this, this.$33_5);
    this.$$d_$55_5 = Function.createDelegate(this, this.$55_5);
    this.$$d_$4M_5 = Function.createDelegate(this, this.$4M_5);
    this.$$d_$4j_5 = Function.createDelegate(this, this.$4j_5);
    this.$$d_$2b_5 = Function.createDelegate(this, this.$2b_5);
    this.$$d_$2T_5 = Function.createDelegate(this, this.$2T_5);
    this.$d_5 = 1;
    SP.Storefront.MyAppIcon.initializeBase(this, [$p0]);
    this.$d_5 = $p1;
    this.removeAccessibleAnchor();
    this.$1C_5 = (this.$d_5 === 1 || this.$d_5 === 2) && ($p0.get_catalog() !== 2 && !this.canInstallApp(true));
    this.elementObject.id = 'idStorefrontMyAppIcon';
    this.addCssClass('ms-storefront-myappicon');
    this.spProxy = new SP.Storefront.StorefrontProxy();
    this.spProxy.add_getAppDetailsCompleted(this.$$d_$2T_5);
    this.$2_5 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$2_5, 'ms-storefront-myappicontext');
    Sys.UI.DomElement.addCssClass(this.$2_5, 'ms-storefront-wordwrap');
    SP.UI.UIUtility.setInnerText(this.$2_5, this.appMetadata.get_title());
    this.$2_5.title = this.appMetadata.get_title();
    this.$2_5.id = this.elementObject.id + 'Text';
    var $v_0 = SP.Storefront.HtmlElement.createAccessibleAnchor();

    $addHandler($v_0, 'click', this.$$d_$2b_5);
    $v_0.appendChild(this.$2_5);
    $addHandler($v_0, 'focus', this.$$d_$4j_5);
    this.$1_5 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-storefront-myappiconprov');
    Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-storefront-wordwrap');
    Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-metadata');
    this.$1_5.id = this.elementObject.id + 'Provider' + (SP.Guid.newGuid()).toString();
    this.$3v_5();
    this.$x_5 = document.createElement('a');
    this.$x_5.href = 'javascript:;';
    this.$x_5.id = 'idStorefrontMyAppIconButton';
    Sys.UI.DomElement.addCssClass(this.$x_5, 'ms-textSmall');
    SP.UI.UIUtility.setInnerText(this.$x_5, this.$4Z_5());
    $addHandler(this.$x_5, 'click', this.$$d_$4M_5);
    $addHandler(this.$x_5, 'focus', this.$$d_$4j_5);
    var $v_1 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-myappicontop');
    $v_1.appendChild($v_0);
    $v_1.appendChild(this.$1_5);
    $v_1.appendChild(this.$x_5);
    var $v_2 = this.getIconImageDivWithDefaults('ms-storefront-myappicondiv', true);

    $v_2.firstChild.tabIndex = -1;
    $addHandler($v_2.firstChild, 'click', this.$$d_$2b_5);
    this.appendChild($v_2);
    this.appendChild($v_1);
    if (this.$1C_5 || this.$d_5 === 3 && $p0.get_requestStatus() === 8) {
        this.$3a_5();
    }
};
SP.Storefront.MyAppIcon.prototype = {
    spProxy: null,
    $2_5: null,
    $1_5: null,
    $x_5: null,
    $3k_5: false,
    $2u_5: false,
    $1C_5: false,
    onMouseClick: function SP_Storefront_MyAppIcon$onMouseClick($p0) {
    },
    $4Z_5: function SP_Storefront_MyAppIcon$$4Z_5() {
        var $v_0 = SP.Res.storefront_MyAppsIcon_AppDetailsButton;

        if (!this.$d_5) {
            this.$3k_5 = ((this.appMetadata.get_license()).get_licenseType() === 3 || (this.appMetadata.get_license()).get_licenseType() === 2) && (this.appMetadata.get_license()).get_isExpired();
            this.$2u_5 = (this.appMetadata.get_license()).get_isTokenExpired();
            if (this.$3k_5) {
                $v_0 = SP.Res.storefront_MyAppsIcon_BuyButton;
            }
            else if (this.$2u_5) {
                $v_0 = SP.Res.storefront_MyAppsIcon_RenewButton;
            }
        }
        if (this.$1C_5) {
            $v_0 = SP.Res.storefront_General_FindOutWhyNoPeriod;
        }
        return $v_0;
    },
    $3v_5: function SP_Storefront_MyAppIcon$$3v_5() {
        var $v_0 = SP.Storefront.StorefrontApp.formatFromPublisherString(this.appMetadata.get_publisher());
        var $v_1 = false;

        switch (this.$d_5) {
        case 2:
            if (this.$1C_5) {
                $v_1 = true;
                $v_0 = SP.Res.storefront_AppIconPreview_PrerequisiteNotMetMessage;
                break;
            }
            if (this.appMetadata.get_catalog() === 2) {
                $v_0 = SP.Res.storefront_MyNewAppsIcon_BuiltInSubtitle;
            }
            break;
        case 1:
        default:
            if (this.$1C_5) {
                $v_1 = true;
                $v_0 = SP.Res.storefront_AppIconPreview_PrerequisiteNotMetMessage;
            }
            break;
        case 0:
            break;
        case 3:
            switch (this.appMetadata.get_requestStatus()) {
            case 32:
            case 4:
                $v_0 = SP.Res.storefront_MyNewAppsIcon_ApprovedRequest;
                break;
            case 8:
            case 64:
                $v_0 = SP.Res.storefront_MyNewAppsIcon_DeclinedRequest;
                break;
            case 1:
            case 2:
            default:
                $v_0 = SP.Res.storefront_MyNewAppsIcon_PendingRequest;
                break;
            }
            break;
        }
        if ($v_1) {
            Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-storefront-myappiconmsg');
            Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-status-blue');
            Sys.UI.DomElement.addCssClass(this.$1_5, 'ms-storefront-notificationtext');
        }
        SP.UI.UIUtility.setInnerText(this.$1_5, $v_0);
    },
    $29_5: function SP_Storefront_MyAppIcon$$29_5($p0) {
        var $v_0 = SP.Storefront.StorefrontApp.getAppId(this.appMetadata, true);

        if (this.appMetadata.get_isListTemplateApp()) {
            SP.Storefront.StorefrontApp.showAddListPrompt(this.appMetadata);
        }
        else {
            SP.Storefront.StorefrontApp.appDownload($v_0, $p0, this.appMetadata.get_catalog(), false);
        }
    },
    $4N_5: function SP_Storefront_MyAppIcon$$4N_5() {
        if (this.appMetadata.get_catalog() === 2) {
            this.$29_5(SP.ScriptUtility.emptyString);
        }
        else {
            this.spProxy.beginGetAppDetails((this.appMetadata.get_license()).get_billingMarket(), (this.appMetadata.get_license()).get_contentMarket(), SP.Storefront.StorefrontApp.getAppId(this.appMetadata, false), this.appMetadata.get_catalog(), null);
        }
    },
    $4x_5: function SP_Storefront_MyAppIcon$$4x_5() {
        SP.Storefront.StorefrontApp.redirectToAppManage((this.appMetadata.get_productId()).toString());
    },
    $5E_5: function SP_Storefront_MyAppIcon$$5E_5() {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('AppRequest.aspx');
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);

        $v_1.addKeyValueQueryString('requestid', this.appMetadata.get_requestId());
        SP.Storefront.StorefrontApp.showPrompt($v_1.get_url(), this.$$d_$55_5);
    },
    $4O_5: function SP_Storefront_MyAppIcon$$4O_5($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0.errorData) || $p0.appDetails.get_state() === 3 || $p0.appDetails.get_state() === 2 || !SP.Storefront.AppDetailsView.canInstallAppFull($p0.appDetails)) {
            this.$3a_5();
            this.$1C_5 = true;
            this.$3v_5();
            return;
        }
        SP.Storefront.StorefrontApp.showPermissionsPrompt(this.appMetadata.get_catalog(), SP.Storefront.StorefrontApp.getAppId(this.appMetadata, false), (this.appMetadata.get_license()).get_billingMarket(), (this.appMetadata.get_license()).get_contentMarket(), SP.Guid.get_empty(), false, this.$$d_$33_5);
    },
    $4y_5: function SP_Storefront_MyAppIcon$$4y_5($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0.errorData)) {
            SP.Storefront.StorefrontApp.updateUIWithError($p0.errorData);
            return;
        }
        SP.Storefront.StorefrontApp.startAppPurchaseFromLicense($p0.appDetails);
    },
    $3a_5: function SP_Storefront_MyAppIcon$$3a_5() {
        Sys.UI.DomElement.addCssClass(this.$2_5, 'ms-soften');
        this.makeImageSpanBackgroundSemiTransparent();
    },
    $2b_5: function SP_Storefront_MyAppIcon$$2b_5($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (this.$1C_5) {
            return;
        }
        switch (this.$d_5) {
        case 2:
        case 1:
        default:
            this.$4N_5();
            break;
        case 0:
            this.$4x_5();
            break;
        case 3:
            this.$5E_5();
            break;
        }
    },
    $4M_5: function SP_Storefront_MyAppIcon$$4M_5($p0) {
        if (!this.$d_5 && this.$2u_5) {
            this.spProxy.beginGetAppDetails((this.appMetadata.get_license()).get_billingMarket(), (this.appMetadata.get_license()).get_contentMarket(), SP.Storefront.StorefrontApp.getAppId(this.appMetadata, false), this.appMetadata.get_catalog(), null);
            return;
        }
        SP.Storefront.MouseDrivenListItem.prototype.onMouseClick.call(this, $p0);
    },
    $33_5: function SP_Storefront_MyAppIcon$$33_5($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = $p1;

            this.$29_5($v_0);
        }
    },
    $2T_5: function SP_Storefront_MyAppIcon$$2T_5($p0, $p1) {
        if (!this.$d_5) {
            this.$4y_5($p1);
        }
        else {
            this.$4O_5($p1);
        }
    },
    $55_5: function SP_Storefront_MyAppIcon$$55_5($p0, $p1) {
        SP.Storefront.StorefrontApp.updateUIForceOption(true);
    },
    $4j_5: function SP_Storefront_MyAppIcon$$4j_5($p0) {
        this.onFocus($p0);
    }
};
SP.Storefront.AppDetailsView = function SP_Storefront_AppDetailsView() {
    this.$$d_$33_3 = Function.createDelegate(this, this.$33_3);
    this.$$d_$51_3 = Function.createDelegate(this, this.$51_3);
    this.$$d_$4w_3 = Function.createDelegate(this, this.$4w_3);
    this.$$d_$4B_3 = Function.createDelegate(this, this.$4B_3);
    this.$$d_$5i_3 = Function.createDelegate(this, this.$5i_3);
    this.$$d_$2b_3 = Function.createDelegate(this, this.$2b_3);
    this.$$d_$5K_3 = Function.createDelegate(this, this.$5K_3);
    this.$$d_$5L_3 = Function.createDelegate(this, this.$5L_3);
    this.$$d_$5M_3 = Function.createDelegate(this, this.$5M_3);
    this.$$d_details_ListItemSelectionChanged = Function.createDelegate(this, this.details_ListItemSelectionChanged);
    this.$$d_$42_3 = Function.createDelegate(this, this.$42_3);
    this.$$d_$5c_3 = Function.createDelegate(this, this.$5c_3);
    this.$$d_$2T_3 = Function.createDelegate(this, this.$2T_3);
    this.$1h_3 = SP.ScriptUtility.emptyString;
    this.$1i_3 = SP.ScriptUtility.emptyString;
    this.$1g_3 = SP.ScriptUtility.emptyString;
    this.$1c_3 = 0;
    SP.Storefront.AppDetailsView.initializeBase(this);
    this.elementObject.id += 'AppDetailsView';
    this.header.showSearchBox = true;
    this.header.showOfficeMarketDropdowns = false;
    this.spProxy.add_getAppDetailsCompleted(this.$$d_$2T_3);
    this.spProxy.add_getStringDataCompleted(this.$$d_$5c_3);
    this.spProxy.add_getMarketsCompleted(this.$$d_$42_3);
    var $v_0 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-appdetailsmain');
    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-float');
    this.appendChild($v_0);
    this.$1t_3 = new SP.Storefront.FilmStrip();
    this.$1t_3.addCssClass('ms-storefront-appdetailsfilmstrip');
    this.$1t_3.addCssClass('ms-storefront-float');
    $v_0.appendChild(this.$1t_3.elementObject);
    this.$D_3 = new SP.Storefront.ListElement();
    this.$D_3.addCssClass('ms-storefront-appdetailsadditionallist');
    this.$D_3.addCssClass('ms-storefront-clear');
    this.$D_3.disableHightlightOnSelect = true;
    this.$D_3.set_listTypeId('AppDetailsAdditional');
    this.$D_3.stateParamKey = 'dtl';
    this.$D_3.defaultValueId = 'desc';
    this.$D_3.addLabel(SP.Res.storefront_AppDetails_AdditionalDetails, 'desc', 'ms-textXLarge');
    this.$D_3.addLabel(SP.Res.storefront_AppDetails_Reviews, 'revw', 'ms-textXLarge');
    this.$D_3.add_listItemSelectionChanged(this.$$d_details_ListItemSelectionChanged);
    this.$D_3.tryUpdateSelectedWithStateValue();
    $v_0.appendChild(this.$D_3.elementObject);
    this.$k_3 = document.createElement('div');
    this.$k_3.id = 'idStorefrontAppDetailsPane';
    Sys.UI.DomElement.addCssClass(this.$k_3, 'ms-storefront-wordwrap');
    $v_0.appendChild(this.$k_3);
    var $v_1 = document.createElement('div');

    $v_1.id = 'idStorefrontAppDetailsActions';
    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-float');
    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-appdetailsrightpane');
    this.appendChild($v_1);
    this.$h_3 = document.createElement('h1');
    this.$h_3.id = 'idStorefrontPriceLabel';
    Sys.UI.DomElement.addCssClass(this.$h_3, 'ms-storefront-appdetailsprice');
    Sys.UI.DomElement.addCssClass(this.$h_3, 'ms-storefront-float');
    Sys.UI.DomElement.addCssClass(this.$h_3, 'ms-storefront-wordwrap');
    $v_1.appendChild(this.$h_3);
    this.$g_3 = document.createElement('h1');
    Sys.UI.DomElement.addCssClass(this.$g_3, 'ms-storefront-appdetailsprice');
    Sys.UI.DomElement.addCssClass(this.$g_3, 'ms-storefront-appdetailspriceorig');
    Sys.UI.DomElement.addCssClass(this.$g_3, 'ms-storefront-float');
    Sys.UI.DomElement.addCssClass(this.$g_3, 'ms-storefront-wordwrap');
    $v_1.appendChild(this.$g_3);
    this.$r_3 = document.createElement('h1');
    Sys.UI.DomElement.addCssClass(this.$r_3, 'ms-storefront-appdetailsprice');
    Sys.UI.DomElement.addCssClass(this.$r_3, 'ms-storefront-float');
    Sys.UI.DomElement.addCssClass(this.$r_3, 'ms-storefront-wordwrap');
    $v_1.appendChild(this.$r_3);
    this.$q_3 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$q_3, 'ms-storefront-clear');
    Sys.UI.DomElement.addCssClass(this.$q_3, 'ms-storefront-appdetailspromo');
    $v_1.appendChild(this.$q_3);
    (this.get_$F_3()).addOption(SP.Res.storefront_AppDetails_LicenseTypeDropDown_single, '0', true);
    (this.get_$F_3()).addOption(SP.Res.storefront_AppDetails_LicenseTypeDropDown_multi, '1', false);
    (this.get_$F_3()).addOption(SP.Res.storefront_AppDetails_LicenseTypeDropDown_all, '2', false);
    $v_1.appendChild((this.get_$F_3()).elementObject);
    this.$u_3 = new SP.Storefront.HtmlElement();
    var $v_2 = {};

    $v_2['for'] = 'idStorefrontSeatsBox';
    this.$u_3.initElementNoInnerHtml('label', SP.ScriptUtility.emptyString, $v_2, 'ms-storefront-appdetailsseatsboxlabel');
    SP.UI.UIUtility.setInnerText(this.$u_3.elementObject, SP.Res.storefront_AppDetails_SeatsLabel);
    $v_1.appendChild(this.$u_3.elementObject);
    var $$t_7, $$t_8;
    var $v_3 = ($$t_8 = SP.Storefront.SeatsBox.createSeatsControl($$t_7 = {
        'val': this.$8_3
    }), this.$8_3 = $$t_7.val, $$t_8);

    this.$8_3.add_seatsChanged(this.$$d_$5M_3);
    this.$8_3.addHandler('focus', this.$$d_$5L_3);
    this.$8_3.addHandler('blur', this.$$d_$5K_3);
    $v_1.appendChild($v_3);
    this.$z_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$z_3, 'ms-storefront-error');
    Sys.UI.DomElement.addCssClass(this.$z_3, 'ms-storefront-appdetailsseatserror');
    $v_1.appendChild(this.$z_3);
    var $v_4 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-clear');
    this.$0_3 = new SP.Storefront.HtmlElement();
    $v_2 = {};
    $v_2['name'] = 'actionbutton';
    $v_2['type'] = 'button';
    this.$0_3.initElementNoInnerHtml('button', 'idStorefrontActionButton', $v_2, 'ms-button-emphasize');
    this.$0_3.addHandler('click', this.$$d_$2b_3);
    this.$0_3.addCssClass('ms-storefront-mainbutton');
    this.$0_3.addCssClass('ms-uppercase');
    this.$0_3.addCssClass('ms-textXLarge');
    SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$0_3.elementObject, SP.Res.storefront_AppDetails_BuyButton);
    $v_4.appendChild(this.$0_3.elementObject);
    $v_1.appendChild($v_4);
    this.$22_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$22_3, 'ms-storefront-appdetailsmsgpane');
    $v_1.appendChild(this.$22_3);
    this.$P_3 = document.createElement('div');
    this.$P_3.id = 'idStorefrontDetailsNotificationPane';
    Sys.UI.DomElement.addCssClass(this.$P_3, 'ms-storefront-notificationdiv');
    Sys.UI.DomElement.addCssClass(this.$P_3, 'ms-storefront-detailsnotification');
    Sys.UI.DomElement.addCssClass(this.$P_3, 'ms-storefront-notificationtext');
    Sys.UI.DomElement.addCssClass(this.$P_3, 'ms-status-yellow');
    Sys.UI.DomElement.addCssClass(this.$P_3, 'ms-storefront-wordwrap');
    $v_1.appendChild(this.$P_3);
    var $v_5 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-appdetailstrialdiv');
    $v_1.appendChild($v_5);
    this.$j_3 = new SP.Storefront.HtmlElement();
    $v_2 = {};
    $v_2['name'] = 'trialbutton';
    $v_2['type'] = 'button';
    this.$j_3.initElementNoInnerHtml('button', 'idStorefrontTrialButton', $v_2, 'ms-button-emphasize');
    this.$j_3.addHandler('click', this.$$d_$5i_3);
    this.$j_3.addCssClass('ms-uppercase');
    SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$j_3.elementObject, SP.Res.storefront_AppDetails_TrialButton);
    $v_5.appendChild(this.$j_3.elementObject);
    this.$1Z_3 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$1Z_3, 'ms-storefront-appdetailstrialmsg');
    Sys.UI.DomElement.addCssClass(this.$1Z_3, 'ms-metadata');
    $v_5.appendChild(this.$1Z_3);
    this.$13_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$13_3, 'ms-storefront-appdetailpermissionsstring');
    SP.Storefront.HtmlElement.setInnerHTML(String.format(SP.Res.storefront_AppDetails_AcceptLink, '<a id=\'idStorefrontAcceptLink\'>', '</a>'), this.$13_3);
    var $v_6 = $get('idStorefrontAcceptLink', this.$13_3);

    $v_6.href = 'javascript:;';
    Sys.UI.DomElement.addCssClass($v_6, 'ms-link');
    $addHandler($v_6, 'click', this.$$d_$4B_3);
    $v_5.appendChild(this.$13_3);
    this.$l_3 = document.createElement('table');
    this.$l_3.id = 'idStorefrontAppDetailsTable';
    Sys.UI.DomElement.addCssClass(this.$l_3, 'ms-storefront-appdetailstable');
    $v_1.appendChild(this.$l_3);
    (this.get_$f_3()).addOption(SP.Res.storefront_AppDetails_MoreActionsDropdown_Refesh, '0', false);
    (this.get_$f_3()).addOption(SP.Res.storefront_AppDetails_MoreActionsDropdown_Manage, '1', false);
    (this.get_$f_3()).addOption(SP.Res.storefront_AppDetails_MoreActionsDropdown_Request, '2', false);
    (this.get_$f_3()).addOption(SP.Res.storefront_AppDetails_MoreActionsDropdown_ReportAbuse, '3', false);
    $v_1.appendChild((this.get_$f_3()).elementObject);
    this.postConstruction();
};
SP.Storefront.AppDetailsView.canInstallAppBasic = function SP_Storefront_AppDetailsView$canInstallAppBasic($p0) {
    var $v_0 = null;
    var $$t_2, $$t_3;

    return $$t_3 = SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasic($p0, $$t_2 = {
        'val': $v_0
    }), $v_0 = $$t_2.val, $$t_3;
};
SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasic = function SP_Storefront_AppDetailsView$canInstallAppGetFailMessageBasic($p0, $p1) {
    return SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasicGlobalOption($p0, true, $p1);
};
SP.Storefront.AppDetailsView.canInstallAppBasicGlobalOption = function SP_Storefront_AppDetailsView$canInstallAppBasicGlobalOption($p0, $p1) {
    var $v_0 = null;
    var $$t_3, $$t_4;

    return $$t_4 = SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasicGlobalOption($p0, $p1, $$t_3 = {
        'val': $v_0
    }), $v_0 = $$t_3.val, $$t_4;
};
SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasicGlobalOption = function SP_Storefront_AppDetailsView$canInstallAppGetFailMessageBasicGlobalOption($p0, $p1, $p2) {
    $p2.val = SP.ScriptUtility.emptyString;
    if ($p0.get_catalog() === 2) {
        return true;
    }
    if ($p1) {
        var $v_0 = SP.Storefront.StorefrontApp.cantInstallAppsGetFailMessage();

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $p2.val = String.format('<div class=\'ms-textXSmall\'>{0}</div>', $v_0);
            return false;
        }
    }
    $p2.val = $p0.get_prerequisitesCheckingMessage();
    if (SP.ScriptUtility.isNullOrEmptyString($p2.val) && !$p0.get_prerequisitesMet()) {
        $p2.val = String.format('<div class=\'ms-textXSmall\'>{0}</div>', SP.Res.storefront_AppDetails_PreReqsFailed);
    }
    return $p0.get_prerequisitesMet();
};
SP.Storefront.AppDetailsView.canInstallAppFull = function SP_Storefront_AppDetailsView$canInstallAppFull($p0) {
    var $v_0 = null;
    var $$t_2, $$t_3;

    return $$t_3 = SP.Storefront.AppDetailsView.canInstallAppGetFailMessageFull($p0, $$t_2 = {
        'val': $v_0
    }), $v_0 = $$t_2.val, $$t_3;
};
SP.Storefront.AppDetailsView.canInstallAppGetFailMessageFull = function SP_Storefront_AppDetailsView$canInstallAppGetFailMessageFull($p0, $p1) {
    $p1.val = SP.ScriptUtility.emptyString;
    if (($p0.get_basicDetails()).get_catalog() === 2) {
        return true;
    }
    var $v_0 = $p0.get_subType() === 2 || $p0.get_subType() === 1 || $p0.get_subType() === 4;

    if (!($p0.get_basicDetails()).get_catalog() && !$p0.get_isSupportedMarket()) {
        $p1.val = String.format('<div class=\'ms-textXSmall\'>{0}</div>', SP.Res.storefront_AppDetails_WrongMarket);
        return false;
    }
    else if ($v_0 && !SP.Storefront.StorefrontContext.get_showMOEs()) {
        $p1.val = String.format('<div class=\'ms-textXSmall\'>{0}</div>', SP.Res.storefront_AppDetails_CantIstallMoe);
        return false;
    }
    else if (!SP.Storefront.AppDetailsView.canInstallAppGetFailMessageBasic($p0.get_basicDetails(), $p1)) {
        return false;
    }
    return true;
};
SP.Storefront.AppDetailsView.$5j = function SP_Storefront_AppDetailsView$$5j($p0, $p1) {
    var $v_0 = SP.ScriptUtility.emptyString;

    if (0 === $p1) {
        $v_0 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_AppDetails_UnlimitedTrialData, SP.Res.storefront_AppDetails_UnlimitedTrialDataIntervals, $p0);
        $v_0 = String.format($v_0, $p0);
    }
    else {
        $v_0 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_AppDetails_TrialData, SP.Res.storefront_AppDetails_TrialDataIntervals, $p0);
        $v_0 = String.format($v_0, $p1, $p0);
    }
    return $v_0;
};
SP.Storefront.AppDetailsView.prototype = {
    $0_3: null,
    $j_3: null,
    $8_3: null,
    $u_3: null,
    $1t_3: null,
    $h_3: null,
    $g_3: null,
    $r_3: null,
    $q_3: null,
    $D_3: null,
    $l_3: null,
    $k_3: null,
    $z_3: null,
    $P_3: null,
    $22_3: null,
    $1Z_3: null,
    $13_3: null,
    get_$2S_3: function SP_Storefront_AppDetailsView$get_$2S_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$35_3)) {
            this.$35_3 = new SP.Storefront.Reviews();
        }
        return this.$35_3;
    },
    $35_3: null,
    get_$F_3: function SP_Storefront_AppDetailsView$get_$F_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1E_3)) {
            this.$1E_3 = SP.Storefront.SelectionDropDown.create('storefrontLicenseTypeSelection', 'lt', false);
            this.$1E_3.addCssClass('ms-storefront-licensedropdown');
            this.$1E_3.set_useStandardTitleCSS(false);
            this.$1E_3.setScreenReaderText(SP.Res.storefront_ScreenReaderText_LicenseType);
            this.$1E_3.add_selectionDropDownExternalChanged(this.$$d_$4w_3);
        }
        return this.$1E_3;
    },
    $1E_3: null,
    get_$f_3: function SP_Storefront_AppDetailsView$get_$f_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$o_3)) {
            this.$o_3 = SP.Storefront.SelectionDropDown.create('storefrontAppDetailsMoreActions', 'mat', false);
            this.$o_3.addCssClass('ms-storefront-moreactionsdropdown');
            this.$o_3.set_customMenuTitle(SP.Res.storefront_AppDetails_MoreActionsDropdownTitle);
            Sys.UI.DomElement.addCssClass(this.$o_3.$5_1, 'ms-calloutLink');
            this.$o_3.$5_1.style.display = 'inline-block';
            this.$o_3.setScreenReaderText(SP.Res.storefront_ScreenReaderText_MoreActions);
            this.$o_3.add_selectionDropDownExternalChanged(this.$$d_$51_3);
        }
        return this.$o_3;
    },
    $o_3: null,
    $14_3: 0,
    $9_3: false,
    $1k_3: false,
    $T_3: false,
    $2w_3: false,
    $e_3: false,
    $1p_3: false,
    $1D_3: false,
    $45_3: false,
    $1f_3: false,
    $1n_3: false,
    $38_3: false,
    $2d_3: false,
    updateUI: function SP_Storefront_AppDetailsView$updateUI($p0) {
        CUI.PMetrics.perfMark(10467);
        var $v_0 = SP.Storefront.StorefrontState.getStateParam('app');
        var $v_1 = SP.Storefront.StorefrontApp.parseCatalogType(SP.Storefront.StorefrontState.getStateParam('clg'));

        SP.Storefront.HtmlElement.setChildrenHiddenAttr(this.elementObject, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$z_3, true);
        this.header.showOfficeMarketDropdowns = !$v_1;
        SP.Storefront.BaseView.prototype.updateUI.call(this, $p0);
        if (!$v_1 && !this.header.officeMarketsValid) {
            this.spProxy.beginGetMarkets(null);
            return;
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.get_appMetadataDetail()) && !$p0) {
            var $v_2 = SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), false);

            if (SP.Storefront.StorefrontState.valueEqualsState('app', $v_2) && SP.Storefront.StorefrontState.valueEqualsState('clg', (((this.get_appMetadataDetail()).get_basicDetails()).get_catalog()).toString()) && !(!$v_1 && this.header.get_marketSelectionChanged())) {
                this.$47_3();
                return;
            }
        }
        this.spProxy.beginGetAppDetails(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), $v_0, $v_1, null);
    },
    cleanUpState: function SP_Storefront_AppDetailsView$cleanUpState() {
        SP.Storefront.BaseView.prototype.cleanUpState.call(this);
        this.$D_3.tryUpdateSelectedWithValueId('desc');
        (this.get_$2S_3()).spProxy.abortGetReviews();
        SP.Storefront.StorefrontState.setStateParam('app', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('clg', SP.ScriptUtility.emptyString);
    },
    focus: function SP_Storefront_AppDetailsView$focus() {
        this.header.focus();
        if (SP.Storefront.StorefrontContext.get_fullPage()) {
            (SP.Storefront.StorefrontApp.get_layoutRootParent()).scrollTop = 0;
        }
    },
    $47_3: function SP_Storefront_AppDetailsView$$47_3() {
        this.$5O_3();
        this.header.updateUI();
        this.$1t_3.updateMedia((this.get_appMetadataDetail()).get_imageUrls(), null);
        this.$5n_3();
        this.$48_3();
        this.$5m_3();
        this.$5q_3();
        SP.Storefront.HtmlElement.setChildrenHiddenAttr(this.elementObject, false);
        this.focus();
        CUI.PMetrics.perfMark(10468);
    },
    $5O_3: function SP_Storefront_AppDetailsView$$5O_3() {
        this.$14_3 = ((this.get_appMetadataDetail()).get_basicDetails()).get_catalog();
        this.$9_3 = !this.$14_3 && (this.get_appMetadataDetail()).get_priceModel() === 2;
        this.$1k_3 = this.$9_3 && (this.get_appMetadataDetail()).get_trial() !== 0;
        this.$e_3 = !this.$14_3;
        this.$1p_3 = this.$14_3 === 2;
        this.$T_3 = !SP.ScriptUtility.isNullOrUndefined((this.get_appMetadataDetail()).get_license()) && ((this.get_appMetadataDetail()).get_license()).hasData() && ((this.get_appMetadataDetail()).get_license()).get_licenseType() !== SP.Storefront.OfficeLicense.noLicense;
        this.$2w_3 = !SP.ScriptUtility.isNullOrUndefined((this.get_appMetadataDetail()).get_manageableLicense()) && ((this.get_appMetadataDetail()).get_manageableLicense()).hasData() && ((this.get_appMetadataDetail()).get_manageableLicense()).get_licenseType() !== SP.Storefront.OfficeLicense.noLicense;
        this.$1f_3 = this.$2w_3 && ((this.get_appMetadataDetail()).get_manageableLicense()).get_isTokenExpired();
        this.$1D_3 = !SP.ScriptUtility.isNullOrUndefined((this.get_appMetadataDetail()).get_instance()) && ((this.get_appMetadataDetail()).get_instance()).hasData();
        if (this.$1D_3) {
            this.$1D_3 = !((this.get_appMetadataDetail()).get_instance()).get_isDownloadInvalidated();
        }
        this.$45_3 = this.$T_3 && (((this.get_appMetadataDetail()).get_license()).get_licenseType() === 3 || ((this.get_appMetadataDetail()).get_license()).get_licenseType() === 2);
        this.$1n_3 = this.$e_3 && !this.$9_3 && !this.$T_3;
        this.$38_3 = this.$9_3 && this.$T_3 && ((this.get_appMetadataDetail()).get_license()).get_licenseType() === 1;
        this.$2d_3 = this.$1n_3 || this.$9_3 && !this.$38_3;
    },
    $5n_3: function SP_Storefront_AppDetailsView$$5n_3() {
        var $v_0 = this.$l_3.rows.length;

        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            this.$l_3.deleteRow(0);
        }
        if (this.$1p_3) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$l_3, true);
            return;
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$l_3, false);
        var $v_1 = this.$1l_3(SP.Res.storefront_AppDetails_Version);

        SP.UI.UIUtility.setInnerText($v_1, ((this.get_appMetadataDetail()).get_basicDetails()).get_version());
        if (this.$e_3) {
            $v_1 = this.$1l_3(SP.Res.storefront_AppDetails_Rating);
            Sys.UI.DomElement.removeCssClass($v_1, 'ms-storefront-appdetailscell');
            Sys.UI.DomElement.removeCssClass($v_1, 'ms-textXSmall');
            Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-appdetailsstarscell');
            Sys.UI.DomElement.addCssClass($v_1, 'ms-metadata');
            var $v_3 = new SP.Storefront.FiveStarRating('idStorefrontAppDetailsRating');

            $v_3.addCssClass('ms-storefront-float');
            $v_1.appendChild($v_3.elementObject);
            $v_3.set_rating(((this.get_appMetadataDetail()).get_basicDetails()).get_rating());
            var $v_4 = document.createElement('div');

            Sys.UI.DomElement.addCssClass($v_4, 'ms-displayInlineBlock');
            SP.UI.UIUtility.setInnerText($v_4, String.format(SP.Res.storefront_Ratings_NumVotes, SP.Storefront.StorefrontApp.htmlEncodeWithDefaultFallback(((this.get_appMetadataDetail()).get_basicDetails()).get_votes(), Number)));
            $v_1.appendChild($v_4);
        }
        $v_1 = this.$1l_3(SP.Res.storefront_AppDetails_ReleaseDate);
        SP.UI.UIUtility.setInnerText($v_1, (this.get_appMetadataDetail()).get_releasedDate());
        if (!SP.ScriptUtility.isNullOrEmptyString(((this.get_appMetadataDetail()).get_basicDetails()).get_categoryID())) {
            $v_1 = this.$1l_3(SP.Res.storefront_AppDetails_Category);
            SP.UI.UIUtility.setInnerText($v_1, ((this.get_appMetadataDetail()).get_basicDetails()).get_categoryID());
        }
        if (!this.$1p_3 && !SP.ScriptUtility.isNullOrEmptyString((this.get_appMetadataDetail()).get_supportUrl())) {
            var $v_5;

            $v_5 = document.createElement('a');
            Sys.UI.DomElement.addCssClass($v_5, 'ms-link');
            $v_5.target = '_blank';
            $v_5.title = SP.Res.storefront_AppDetails_SupportLink;
            SP.UI.UIUtility.setInnerText($v_5, SP.Res.storefront_AppDetails_SupportLink);
            $v_5.href = SP.Storefront.StorefrontApp.urlPathEncodeAndValidate((this.get_appMetadataDetail()).get_supportUrl());
            $v_1 = this.$1l_3(SP.Res.storefront_AppDetails_SupportLabel);
            $v_1.appendChild($v_5);
        }
    },
    $5q_3: function SP_Storefront_AppDetailsView$$5q_3() {
        (this.get_$f_3()).set_notDisplayed(!this.$e_3);
        var $v_0 = this.$2w_3;

        (this.get_$f_3()).setEnabledOptionAttribute('1', $v_0);
        $v_0 = SP.Storefront.StorefrontContext.get_importRights();
        (this.get_$f_3()).setEnabledOptionAttribute('0', $v_0);
        $v_0 = SP.Storefront.StorefrontContext.get_isCorporateCatalogOn() && SP.Storefront.StorefrontContext.get_installRights() && this.$1N_3();
        (this.get_$f_3()).setEnabledOptionAttribute('2', $v_0);
    },
    $48_3: function SP_Storefront_AppDetailsView$$48_3() {
        this.$D_3.set_notDisplayed(this.$1p_3);
        this.$D_3.setDisplayAttributeForListItemWithValueId('revw', !this.$e_3);
        SP.Storefront.HtmlElement.clearChildren(this.$k_3);
        switch (this.$D_3.selected.get_valueId()) {
        case 'desc':
            (this.get_$2S_3()).spProxy.abortGetReviews();
            var $v_0 = (this.get_appMetadataDetail()).get_description();

            $v_0 = SP.Utilities.HttpUtility.htmlEncode($v_0);
            $v_0 = $v_0.replace(new RegExp('\\[#OD\\]'), '<div><h3 class=\'ms-uppercase\'>' + SP.Res.storefront_AppDetails_StoreDescription + '</h3></div>');
            $v_0 = $v_0.replace(new RegExp('\\s*\\[#ED\\]'), '<br/><br/><div><h3 class=\'ms-uppercase\'>' + SP.Res.storefront_AppDetails_ProviderDescription + '</h3></div>');
            $v_0 = $v_0.replace(new RegExp('\\[#LI\\]', 'g'), ' - ');
            $v_0 = $v_0.replace(new RegExp('\\[/#LI\\]', 'g'), '');
            $v_0 = $v_0.replace(new RegExp('\\n', 'g'), '<br/>');
            $v_0 = $v_0.replace(new RegExp('\\r', 'g'), '');
            if (!SP.ScriptUtility.isNullOrEmptyString((this.get_appMetadataDetail()).get_videoUrl())) {
                var $v_2 = new SP.Storefront.HtmlElement();

                $v_2.initElementObject('div', SP.ScriptUtility.emptyString, null, String.format(SP.Res.storefront_AppDetails_VideoLink, '<a id=\'idStorefrontVideoLink\'>', '</a>'), 'ms-metadata');
                var $v_3 = $get('idStorefrontVideoLink', $v_2.elementObject);

                $v_3.href = SP.Storefront.StorefrontApp.urlPathEncodeAndValidate((this.get_appMetadataDetail()).get_videoUrl());
                Sys.UI.DomElement.addCssClass($v_3, 'ms-link');
                $v_3.target = '_blank';
                this.$k_3.appendChild($v_2.elementObject);
                var $v_4 = document.createElement('br');

                this.$k_3.appendChild($v_4);
            }
            var $v_1 = document.createElement('span');

            $v_1.style.marginBottom = '40px';
            SP.Storefront.HtmlElement.setInnerHTML($v_0, $v_1);
            this.$k_3.appendChild($v_1);
            break;
        case 'revw':
            this.$k_3.appendChild((this.get_$2S_3()).elementObject);
            (this.get_$2S_3()).updateReviewsWithAppMetadata(this.get_appMetadataDetail());
            break;
        }
    },
    $5m_3: function SP_Storefront_AppDetailsView$$5m_3() {
        this.$5l_3();
        this.$5T_3();
        this.$5V_3();
        this.$5S_3();
        this.$5X_3();
    },
    $5T_3: function SP_Storefront_AppDetailsView$$5T_3() {
        this.$3s_3();
        if (this.$e_3 && this.$9_3) {
            var $v_0 = !SP.ScriptUtility.isNullOrEmptyString((this.get_appMetadataDetail()).get_siteLicensePrice());

            (this.get_$F_3()).set_notDisplayed(!$v_0 || this.$0_3.elementObject.disabled);
            var $v_1 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_AppDetails_LicenseTypeDropDown_all, SP.Res.storefront_AppDetails_LicenseTypeDropDown_allIntervals, (this.get_appMetadataDetail()).get_siteLicenseSeats());

            $v_1 = String.format($v_1, (this.get_appMetadataDetail()).get_siteLicenseSeats());
            (this.get_$F_3()).setOptionTextAttribute('2', $v_1);
            var $v_2 = $v_0 ? '0' : '1';

            (this.get_$F_3()).selectOption($v_2, true);
        }
        else if (this.$e_3) {
            this.$21_3(((this.get_appMetadataDetail()).get_basicDetails()).get_price(), ((this.get_appMetadataDetail()).get_basicDetails()).get_pricePromotion(), (this.get_appMetadataDetail()).get_pricePercentOff());
            this.$8_3.set_notDisplayed(this.$u_3.set_notDisplayed((this.get_$F_3()).set_notDisplayed(true)));
        }
        else {
            this.$8_3.set_notDisplayed(this.$u_3.set_notDisplayed((this.get_$F_3()).set_notDisplayed(true)));
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$q_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$g_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$r_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$h_3, false);
        }
    },
    $5l_3: function SP_Storefront_AppDetailsView$$5l_3() {
        var $v_0;

        if (!SP.Storefront.StorefrontContext.get_isPurchaseOn() && (this.$9_3 || this.$1n_3)) {
            $v_0 = SP.Res.storefront_AppDetails_RequestButton;
        }
        else if (this.$1f_3) {
            $v_0 = SP.Res.storefront_MyAppsIcon_RenewButton;
        }
        else if (this.$9_3) {
            $v_0 = SP.Res.storefront_AppDetails_BuyButton;
        }
        else {
            $v_0 = SP.Res.storefront_AppDetails_DownloadButton;
        }
        SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$0_3.elementObject, $v_0);
        var $v_1 = !(this.$1p_3 || this.$9_3 || this.$1n_3) && (this.$1D_3 || SP.Storefront.StorefrontContext.get_licensePurchase());

        $v_1 = $v_1 || this.$38_3;
        $v_1 = $v_1 || !this.$2c_3();
        $v_1 = $v_1 && !this.$1f_3;
        var $v_2 = (this.get_appMetadataDetail()).get_state() === 3 || (this.get_appMetadataDetail()).get_state() === 2;

        $v_1 = $v_1 || (this.$9_3 || this.$1n_3) && $v_2;
        this.$0_3.elementObject.disabled = $v_1;
    },
    $5V_3: function SP_Storefront_AppDetailsView$$5V_3() {
        var $v_0 = SP.ScriptUtility.emptyString;

        if ((this.get_appMetadataDetail()).get_upgradeAvailable()) {
            $v_0 = SP.Res.storefront_AppDetails_Upgrade_Message;
        }
        else if (this.$45_3) {
            if (((this.get_appMetadataDetail()).get_license()).get_isExpired()) {
                $v_0 = SP.Res.storefront_AppDetails_Licensed_Trial_Expired;
            }
            else {
                if (((this.get_appMetadataDetail()).get_license()).get_remainingDays() < 0) {
                    $v_0 = SP.Res.storefront_AppDetails_LicensedMessage_UnlimitedTrial;
                }
                else {
                    $v_0 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_AppDetails_LicensedMessage_Trial, SP.Res.storefront_AppDetails_LicensedMessage_TrialIntervals, ((this.get_appMetadataDetail()).get_license()).get_remainingDays());
                    $v_0 = String.format($v_0, ((this.get_appMetadataDetail()).get_license()).get_remainingDays());
                }
            }
        }
        else if (this.$1D_3) {
            $v_0 = SP.Res.storefront_AppDetails_Installed_Message;
        }
        else if (this.$T_3 && ((this.get_appMetadataDetail()).get_license()).get_licenseType() === 1) {
            $v_0 = SP.Res.storefront_AppDetails_UnlimitedLicensed_Message;
        }
        var $v_1 = !SP.ScriptUtility.isNullOrEmptyString($v_0);

        if ($v_1) {
            SP.UI.UIUtility.setInnerText(this.$22_3, $v_0);
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$22_3, !$v_1);
        this.$P_3.style.marginTop = $v_1 ? '0px' : 10 + 'px';
    },
    $5S_3: function SP_Storefront_AppDetailsView$$5S_3() {
        SP.Storefront.HtmlElement.clearChildren(this.$P_3);
        var $v_0 = null;
        var $v_1 = true;

        if ((this.get_appMetadataDetail()).get_state() === 3) {
            $v_0 = String.format('<div class=\'ms-textXSmall\'><div>{0}</div><a title=\'{1}\' id=\'{3}\' class=\'ms-link\' target=\'_blank\' href=\'{2}\'>{1}</a></div>', SP.Res.storefront_AppDetails_FlaggedApp, SP.Res.storefront_General_FindOutWhy, SP.Storefront.SPAppMetadataDetail.getTakedownUrl(((this.get_appMetadataDetail()).get_basicDetails()).get_assetId()), 'idStorefrontDetailsWhyLink');
            $v_1 = false;
        }
        else if ((this.get_appMetadataDetail()).get_state() === 2) {
            $v_0 = String.format('<div class=\'ms-textXSmall\'><div>{0}</div><a title=\'{1}\' id=\'{3}\' class=\'ms-link\' target=\'_blank\' href=\'{2}\'>{1}</a></div>', SP.Res.storefront_AppDetails_WithdrawnApp, SP.Res.storefront_General_FindOutWhy, SP.Storefront.SPAppMetadataDetail.getTakedownUrl(((this.get_appMetadataDetail()).get_basicDetails()).get_assetId()), 'idStorefrontDetailsWhyLink');
            $v_1 = false;
        }
        else if (this.$1f_3) {
            $v_0 = String.format('<div class=\'ms-textXSmall\'>{0}</div>', SP.Res.storefront_AppDetails_ResyncMessage);
            $v_1 = false;
        }
        else {
            var $$t_3, $$t_4;

            if ($$t_4 = this.$3O_3($$t_3 = {
                'val': $v_0
            }), $v_0 = $$t_3.val, $$t_4) {
                $v_1 = false;
            }
            else {
                var $$t_5, $$t_6;

                if (!($$t_6 = this.$4F_3($$t_5 = {
                    'val': $v_0
                }), $v_0 = $$t_5.val, $$t_6)) {
                    $v_1 = false;
                }
                else if (!SP.ScriptUtility.isNullOrEmptyString((this.get_appMetadataDetail()).get_unsafeVersion()) && (this.get_appMetadataDetail()).get_upgradeAvailable()) {
                    $v_0 = String.format('<div class=\'ms-textXSmall\'><div>{0}</div><a title=\'{1}\' id=\'{3}\' class=\'ms-link\' target=\'_blank\' href=\'{2}\'>{1}</a></div>', SP.Res.storefront_AppDetails_UnsafeVersionApp, SP.Res.storefront_General_FindOutWhy, SP.Storefront.SPAppMetadataDetail.getTakedownUrl(((this.get_appMetadataDetail()).get_basicDetails()).get_assetId()), 'idStorefrontDetailsWhyLink');
                    $v_1 = false;
                }
                else if (!SP.ScriptUtility.isNullOrEmptyString(((this.get_appMetadataDetail()).get_basicDetails()).get_betaMessage())) {
                    $v_0 = String.format('<div class=\'ms-textXSmall\'>{0}</div>', ((this.get_appMetadataDetail()).get_basicDetails()).get_betaMessage());
                    $v_1 = false;
                }
            }
        }
        if (!$v_1) {
            var $v_2 = new SP.Storefront.HtmlElement();

            $v_2.initElementObject('div', SP.ScriptUtility.emptyString, null, $v_0, SP.ScriptUtility.emptyString);
            this.$P_3.appendChild($v_2.elementObject);
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$P_3, $v_1);
    },
    $5X_3: function SP_Storefront_AppDetailsView$$5X_3() {
        var $v_0 = true;
        var $v_1 = true;
        var $v_2 = true;
        var $v_3 = true;
        var $v_4 = SP.Res.storefront_AppDetails_TrialButton;

        if (this.$1N_3()) {
            if ((this.get_appMetadataDetail()).get_upgradeAvailable()) {
                $v_4 = SP.Res.storefront_AppDetails_UpgradeButton;
                $v_1 = ($v_0 = false);
            }
            else if (this.$1k_3 && !this.$T_3 && SP.Storefront.StorefrontContext.get_isPurchaseOn()) {
                $v_1 = ($v_0 = ($v_2 = false));
            }
            else if (this.$e_3 && this.$T_3 && !this.$1D_3 && !SP.Storefront.StorefrontContext.get_licensePurchase() && this.$9_3) {
                $v_4 = SP.Res.storefront_AppDetails_DownloadButton;
                $v_1 = ($v_0 = false);
            }
            else if (this.$1D_3 && this.$9_3) {
                $v_1 = false;
                $v_4 = SP.Res.storefront_AppDetails_DownloadButton;
            }
        }
        else if (this.$3N_3() && this.$1k_3 && !this.$T_3 && SP.Storefront.StorefrontContext.get_isPurchaseOn()) {
            $v_1 = ($v_0 = ($v_2 = false));
        }
        if (this.$e_3 && (!$v_1 || !this.$0_3.elementObject.disabled)) {
            $v_3 = false;
        }
        SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$j_3.elementObject, $v_4);
        SP.UI.UIUtility.setInnerText(this.$1Z_3, SP.Storefront.AppDetailsView.$5j((this.get_appMetadataDetail()).get_trialUsers(), (this.get_appMetadataDetail()).get_trialLength()));
        this.$j_3.set_notDisplayed($v_1);
        this.$j_3.elementObject.disabled = $v_0;
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1Z_3, $v_2);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$13_3, $v_3);
        this.$13_3.style.marginTop = $v_1 ? '0px' : '14px';
    },
    $21_3: function SP_Storefront_AppDetailsView$$21_3($p0, $p1, $p2) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0) && !SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $p0 = $p1;
            $p1 = SP.ScriptUtility.emptyString;
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$h_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$q_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$g_3, false);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$r_3, false);
            SP.UI.UIUtility.setInnerText(this.$g_3, $p0);
            SP.UI.UIUtility.setInnerText(this.$r_3, $p1);
            if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
                SP.Storefront.HtmlElement.setDisplayAttribute(this.$q_3, false);
                SP.UI.UIUtility.setInnerText(this.$q_3, String.format(SP.Res.storefront_AppDetails_PercentOff, $p2));
            }
        }
        else {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$q_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$g_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$r_3, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$h_3, false);
            SP.UI.UIUtility.setInnerText(this.$h_3, $p0);
        }
    },
    $1N_3: function SP_Storefront_AppDetailsView$$1N_3() {
        return SP.Storefront.AppDetailsView.canInstallAppFull(this.get_appMetadataDetail());
    },
    $4F_3: function SP_Storefront_AppDetailsView$$4F_3($p0) {
        return SP.Storefront.AppDetailsView.canInstallAppGetFailMessageFull(this.get_appMetadataDetail(), $p0);
    },
    $3N_3: function SP_Storefront_AppDetailsView$$3N_3() {
        var $v_0 = null;
        var $$t_1, $$t_2;

        return $$t_2 = this.$3O_3($$t_1 = {
            'val': $v_0
        }), $v_0 = $$t_1.val, $$t_2;
    },
    $3O_3: function SP_Storefront_AppDetailsView$$3O_3($p0) {
        $p0.val = SP.Storefront.StorefrontApp.canOnlyImportLicenseMessage();
        if (this.$2d_3 && !SP.ScriptUtility.isNullOrEmptyString($p0.val)) {
            $p0.val = String.format('<div class=\'ms-textXSmall\'>{0}</div>', $p0.val);
        }
        return !SP.ScriptUtility.isNullOrEmptyString($p0.val);
    },
    $2c_3: function SP_Storefront_AppDetailsView$$2c_3() {
        if (this.$1N_3()) {
            return true;
        }
        else if (this.$2d_3 && SP.Storefront.StorefrontContext.get_isCorporateCatalogSite()) {
            var $v_0 = ((this.get_appMetadataDetail()).get_basicDetails()).get_prerequisitesMet();

            ((this.get_appMetadataDetail()).get_basicDetails()).set_prerequisitesMet(true);
            var $v_1 = this.$1N_3();

            ((this.get_appMetadataDetail()).get_basicDetails()).set_prerequisitesMet($v_0);
            return $v_1;
        }
        else if (this.$3N_3()) {
            return true;
        }
        return false;
    },
    $1l_3: function SP_Storefront_AppDetailsView$$1l_3($p0) {
        var $v_0 = this.$l_3.insertRow(SP.Storefront.StorefrontApp.insertAtEndIndex);
        var $v_1 = $v_0.insertCell(SP.Storefront.StorefrontApp.insertAtEndIndex);

        Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-appdetailscell');
        Sys.UI.DomElement.addCssClass($v_1, 'ms-textXSmall');
        Sys.UI.DomElement.addCssClass($v_1, 'ms-soften');
        Sys.UI.DomElement.addCssClass($v_1, 'ms-uppercase');
        SP.UI.UIUtility.setInnerText($v_1, $p0);
        var $v_2 = $v_0.insertCell(SP.Storefront.StorefrontApp.insertAtEndIndex);

        Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-appdetailscell');
        Sys.UI.DomElement.addCssClass($v_2, 'ms-textXSmall');
        return $v_2;
    },
    $29_3: function SP_Storefront_AppDetailsView$$29_3() {
        var $v_0 = false;
        var $v_1 = false;
        var $v_2 = false;

        switch (this.$1c_3) {
        case 0:
        default:
            if (this.$9_3 || this.$e_3 && !this.$T_3) {
                $v_0 = this.$2c_3();
            }
            else {
                $v_1 = this.$1N_3();
            }
            break;
        case 1:
            $v_1 = this.$1N_3();
            if (this.$9_3) {
                $v_1 = !!($v_1 & this.$T_3);
            }
            break;
        case 2:
            $v_0 = this.$1k_3 && this.$2c_3();
            $v_2 = true;
            break;
        case 3:
            this.$2D_3();
            SP.Storefront.StorefrontApp.startAppPurchase(this.get_appMetadataDetail(), this.$8_3.$i_2, 'sharepointreacquire', SP.ScriptUtility.emptyString);
            return;
        }
        if ($v_0) {
            var $v_3 = (this.get_$F_3()).get_selectedOptionId() === '2';
            var $v_4 = (this.get_$F_3()).get_selectedOptionId() === '0' ? '1' : this.$8_3.$i_2;

            this.$2D_3();
            if (SP.Storefront.StorefrontContext.get_isPurchaseOn()) {
                var $v_5 = SP.ScriptUtility.emptyString;

                if ($v_2) {
                    $v_5 = 'SharePointTrial';
                }
                else if (this.$9_3) {
                    $v_5 = 'SharePointPurchase';
                }
                else {
                    $v_5 = 'Sharepointappfreedownload';
                }
                SP.Storefront.StorefrontApp.startAppPurchaseSiteLicenseOption(this.get_appMetadataDetail(), $v_4, $v_3, $v_5);
            }
            else {
                SP.Storefront.StorefrontApp.startAppRequest(this.get_appMetadataDetail(), $v_4, $v_3);
            }
        }
        else if ($v_1) {
            if (((this.get_appMetadataDetail()).get_basicDetails()).get_isListTemplateApp()) {
                SP.Storefront.StorefrontApp.showAddListPrompt((this.get_appMetadataDetail()).get_basicDetails());
            }
            else if (this.$14_3 === 2) {
                var $v_6 = SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), true);

                this.$2D_3();
                SP.Storefront.StorefrontApp.appDownload($v_6, SP.ScriptUtility.emptyString, ((this.get_appMetadataDetail()).get_basicDetails()).get_catalog(), (this.get_appMetadataDetail()).get_upgradeAvailable());
            }
            else {
                SP.Storefront.StorefrontApp.showPermissionsPrompt(this.$14_3, SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), false), (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue(), (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue(), (this.get_appMetadataDetail()).get_upgradeAvailable() ? ((this.get_appMetadataDetail()).get_instance()).get_id() : SP.Guid.get_empty(), false, this.$$d_$33_3);
            }
        }
    },
    $3s_3: function SP_Storefront_AppDetailsView$$3s_3() {
        this.$8_3.reset();
        this.$1h_3 = ((this.get_appMetadataDetail()).get_basicDetails()).get_price();
        this.$1i_3 = ((this.get_appMetadataDetail()).get_basicDetails()).get_pricePromotion();
        this.$1g_3 = (this.get_appMetadataDetail()).get_pricePercentOff();
    },
    addHeader: function SP_Storefront_AppDetailsView$addHeader() {
        this.header = new SP.Storefront.AppDetailsHeader();
        this.appendHtmlElement(this.header);
    },
    $2D_3: function SP_Storefront_AppDetailsView$$2D_3() {
        this.$0_3.set_disabled(true);
        this.$j_3.set_disabled(true);
    },
    $2T_3: function SP_Storefront_AppDetailsView$$2T_3($p0, $p1) {
        if (this.checkAndShowError($p1.errorData)) {
            return;
        }
        this.set_appMetadataDetail($p1.appDetails);
        this.$47_3();
    },
    $2b_3: function SP_Storefront_AppDetailsView$$2b_3($p0) {
        this.$1c_3 = this.$1f_3 ? 3 : 0;
        this.$29_3();
    },
    $5i_3: function SP_Storefront_AppDetailsView$$5i_3($p0) {
        this.$1c_3 = this.$1k_3 && !this.$T_3 ? 2 : 1;
        this.$29_3();
    },
    $4B_3: function SP_Storefront_AppDetailsView$$4B_3($p0) {
        SP.Storefront.StorefrontApp.showPermissionsPrompt(this.$14_3, SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), false), (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue(), (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue(), SP.Guid.get_empty(), true, null);
        $p0.preventDefault();
    },
    $33_3: function SP_Storefront_AppDetailsView$$33_3($p0, $p1) {
        if ($p0 === 1) {
            var $v_0 = $p1;
            var $v_1 = SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), true);

            this.$2D_3();
            SP.Storefront.StorefrontApp.appDownload($v_1, $v_0, ((this.get_appMetadataDetail()).get_basicDetails()).get_catalog(), (this.get_appMetadataDetail()).get_upgradeAvailable());
        }
    },
    $5M_3: function SP_Storefront_AppDetailsView$$5M_3($p0, $p1) {
        if (this.$9_3) {
            this.spProxy.beginGetAppPrice(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), ((this.get_appMetadataDetail()).get_basicDetails()).get_assetId(), $p1.numberSeats, '0', null);
        }
    },
    $5L_3: function SP_Storefront_AppDetailsView$$5L_3($p0) {
        if (this.$9_3) {
            this.$0_3.elementObject.disabled = true;
        }
    },
    $5K_3: function SP_Storefront_AppDetailsView$$5K_3($p0) {
        if (this.$9_3) {
            this.$0_3.elementObject.disabled = !this.$8_3.get_validInput();
        }
    },
    $5c_3: function SP_Storefront_AppDetailsView$$5c_3($p0, $p1) {
        var $v_0 = null;
        var $v_1 = SP.ScriptUtility.emptyString;

        if (!SP.ScriptUtility.isNullOrUndefined($p1.errorData)) {
            $v_1 = $p1.errorData['Message'];
        }
        else if (!SP.ScriptUtility.isNullOrEmptyString($p1.stringData)) {
            try {
                $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p1.stringData);
                if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0.length !== 4) {
                    $v_1 = SP.ScriptUtility.isNullOrEmptyString($v_1) ? SP.Res.unknownResponseData : $v_1;
                }
            }
            catch ($$e_4) {
                $v_1 = SP.ScriptUtility.isNullOrEmptyString($v_1) ? SP.Res.unknownResponseData : $v_1;
            }
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            this.$8_3.set_validInput(false);
            SP.UI.UIUtility.setInnerText(this.$z_3, $v_1);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$z_3, false);
        }
        else {
            this.$8_3.set_validInput(true);
            this.$0_3.elementObject.disabled = false;
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$z_3, true);
            if (this.$8_3.$2R_2) {
                this.$0_3.focus();
            }
            if (SP.Storefront.SPStorefrontData.toBool($v_0[3])) {
                (this.get_$F_3()).selectOption('2', true);
                this.$3s_3();
            }
            else {
                this.$1h_3 = $v_0[1];
                this.$1i_3 = $v_0[0];
                this.$1g_3 = $v_0[2];
                this.$21_3(this.$1h_3, this.$1i_3, this.$1g_3);
            }
        }
    },
    details_ListItemSelectionChanged: function SP_Storefront_AppDetailsView$details_ListItemSelectionChanged($p0, $p1) {
        this.$48_3();
    },
    $42_3: function SP_Storefront_AppDetailsView$$42_3($p0, $p1) {
        if (!this.header.checkAndProcessGetMarketsResponse($p1)) {
            return;
        }
        this.updateUI(false);
    },
    $4w_3: function SP_Storefront_AppDetailsView$$4w_3($p0) {
        switch ((this.get_$F_3()).get_selectedOptionId()) {
        case '2':
            this.$8_3.set_notDisplayed(this.$u_3.set_notDisplayed(true));
            this.$21_3((this.get_appMetadataDetail()).get_siteLicensePrice(), SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString);
            break;
        case '0':
        default:
            this.$8_3.set_notDisplayed(this.$u_3.set_notDisplayed(true));
            this.$21_3(((this.get_appMetadataDetail()).get_basicDetails()).get_price(), ((this.get_appMetadataDetail()).get_basicDetails()).get_pricePromotion(), (this.get_appMetadataDetail()).get_pricePercentOff());
            break;
        case '1':
            this.$8_3.set_notDisplayed(this.$u_3.set_notDisplayed(false));
            this.$21_3(this.$1h_3, this.$1i_3, this.$1g_3);
            break;
        }
    },
    $51_3: function SP_Storefront_AppDetailsView$$51_3($p0) {
        switch ((this.get_$f_3()).get_selectedOptionId()) {
        case '1':
            SP.Storefront.StorefrontApp.redirectToAppManage(((this.get_appMetadataDetail()).get_productId()).toString());
            break;
        case '0':
        default:
            SP.Storefront.StorefrontApp.startAppPurchase(this.get_appMetadataDetail(), this.$8_3.$i_2, 'sharepointreacquire', SP.ScriptUtility.emptyString);
            break;
        case '2':
            var $v_0 = (this.get_$F_3()).get_selectedOptionId() === '2';
            var $v_1 = (this.get_$F_3()).get_selectedOptionId() === '0' ? '1' : this.$8_3.$i_2;

            SP.Storefront.StorefrontApp.startAppRequest(this.get_appMetadataDetail(), $v_1, $v_0);
            break;
        case '3':
            window.open((this.get_appMetadataDetail()).getReportAbuseUrl(), '_blank');
            break;
        }
    }
};
SP.Storefront.AppDetailsHeader = function SP_Storefront_AppDetailsHeader() {
    this.$$d_$5h_3 = Function.createDelegate(this, this.$5h_3);
    SP.Storefront.AppDetailsHeader.initializeBase(this);
    var $v_0 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-appdetailstitlediv');
    this.appendChild($v_0);
    var $v_1 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-middle');
    $v_0.appendChild($v_1);
    var $$t_4, $$t_5;
    var $v_2 = ($$t_5 = SP.Storefront.AppIconBase.getIconImageSpan(this.elementObject.id, $$t_4 = {
        'val': this.$K_3
    }), this.$K_3 = $$t_4.val, $$t_5);

    $v_1.appendChild($v_2);
    var $v_3 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_3, 'ms-storefront-middle');
    $v_0.appendChild($v_3);
    this.$2_3 = document.createElement('div');
    this.$2_3.tabIndex = -1;
    this.$2_3.id = 'idStorefrontTitleLabel';
    Sys.UI.DomElement.addCssClass(this.$2_3, 'ms-storefront-appdetailstitle');
    Sys.UI.DomElement.addCssClass(this.$2_3, 'ms-core-pageTitle');
    $v_3.appendChild(this.$2_3);
    this.$1X_3 = document.createElement('div');
    this.$1X_3.id = 'idStorefrontProviderLabel';
    Sys.UI.DomElement.addCssClass(this.$1X_3, 'ms-storefront-appdetailstitle');
    Sys.UI.DomElement.addCssClass(this.$1X_3, 'ms-textLarge');
    $v_3.appendChild(this.$1X_3);
};
SP.Storefront.AppDetailsHeader.prototype = {
    $2_3: null,
    $K_3: null,
    $1X_3: null,
    updateUI: function SP_Storefront_AppDetailsHeader$updateUI() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.appMetadataDetail)) {
            this.$5r_3();
            this.showSearchBox = !(this.appMetadataDetail.get_basicDetails()).get_catalog();
        }
        SP.Storefront.BaseHeader.prototype.updateUI.call(this);
    },
    focus: function SP_Storefront_AppDetailsHeader$focus() {
        SP.Storefront.HtmlElement.focusDOMElement(this.$2_3);
    },
    $5r_3: function SP_Storefront_AppDetailsHeader$$5r_3() {
        SP.UI.UIUtility.setInnerText(this.$2_3, (this.appMetadataDetail.get_basicDetails()).get_title());
        var $v_0 = SP.Utilities.HttpUtility.urlPathEncode((this.appMetadataDetail.get_basicDetails()).get_thumbnailUrl());

        this.$K_3.src = '/_layouts/15/images/spstorefront.png?rev=23';
        this.$2_3.title = (this.appMetadataDetail.get_basicDetails()).get_title();
        Sys.UI.DomElement.addCssClass(this.$K_3, 'ms-storefront-defaultappiconimg');
        SP.Storefront.ImageUrlVerifier.verifyImageWithAction(this.$K_3, $v_0, this.$$d_$5h_3);
        var $v_1 = SP.Storefront.StorefrontApp.formatFromPublisherStringWithUrl((this.appMetadataDetail.get_basicDetails()).get_publisher(), this.appMetadataDetail.get_publisherUrl());

        SP.Storefront.HtmlElement.setInnerHTML($v_1, this.$1X_3);
    },
    $5h_3: function SP_Storefront_AppDetailsHeader$$5h_3($p0) {
        Sys.UI.DomElement.removeCssClass(this.$K_3, 'ms-storefront-defaultappiconimg');
    }
};
SP.Storefront.BaseView = function SP_Storefront_BaseView() {
    SP.Storefront.BaseView.initializeBase(this);
    var $v_0 = SP.Storefront.StorefrontContext.get_fullPage() ? 'ms-storefront-view' : 'ms-storefront-viewsmall';

    this.initElementObject('div', 'idStorefrontView', null, SP.ScriptUtility.emptyString, $v_0);
    this.spProxy = new SP.Storefront.StorefrontProxy();
    SP.Storefront.StorefrontApp.addProxyDelegates(this.spProxy);
    this.addHeader();
};
SP.Storefront.BaseView.prototype = {
    spProxy: null,
    header: null,
    get_appMetadataDetail: function SP_Storefront_BaseView$get_appMetadataDetail() {
        return this.$3I_2;
    },
    set_appMetadataDetail: function SP_Storefront_BaseView$set_appMetadataDetail($p0) {
        this.$3I_2 = $p0;
        this.header.appMetadataDetail = $p0;
        return $p0;
    },
    $3I_2: null,
    updateUI: function SP_Storefront_BaseView$updateUI($p0) {
        this.header.updateUI();
    },
    copyCommonViewObjects: function SP_Storefront_BaseView$copyCommonViewObjects($p0) {
        this.set_appMetadataDetail($p0.get_appMetadataDetail());
        this.header.copyCommonHeaderObject($p0.header);
    },
    cleanUpState: function SP_Storefront_BaseView$cleanUpState() {
    },
    checkAndShowError: function SP_Storefront_BaseView$checkAndShowError($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
            SP.Storefront.StorefrontApp.updateUIWithError($p0);
            return true;
        }
        return false;
    },
    postConstruction: function SP_Storefront_BaseView$postConstruction() {
        this.appendChild(SP.Storefront.HtmlElement.createClearDiv());
    },
    addHeader: function SP_Storefront_BaseView$addHeader() {
        this.header = new SP.Storefront.BaseHeader();
        this.appendHtmlElement(this.header);
    }
};
SP.Storefront.BaseHeader = function SP_Storefront_BaseHeader() {
    SP.Storefront.BaseHeader.initializeBase(this);
    this.initElementNoInnerHtml('div', 'idStorefrontHeader', null, SP.ScriptUtility.emptyString);
    var $v_0 = document.createElement('div');

    $v_0.id = 'SPStorefrontBaseHeaderTopLinksPlaceHolder';
    this.appendChild($v_0);
    $v_0 = document.createElement('div');
    $v_0.id = 'SPStorefrontBaseHeaderTopPlaceHolder';
    this.appendChild($v_0);
    this.appendChild(SP.Storefront.HtmlElement.createRightClearDiv());
    $v_0 = document.createElement('div');
    $v_0.id = 'SPStorefrontBaseHeaderSearchPlaceHolder';
    this.appendChild($v_0);
};
SP.Storefront.BaseHeader.$3Q = function SP_Storefront_BaseHeader$$3Q() {
    var $v_0 = document.createElement('img');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-pagingarrow');
    $v_0.src = SP.Storefront.StorefrontApp.getLocImageUrl('next.gif');
    $v_0.alt = SP.ScriptUtility.emptyString;
    return $v_0;
};
SP.Storefront.BaseHeader.prototype = {
    topLinks: null,
    topControls: null,
    billingMarket: null,
    contentMarket: null,
    searchBoxControl: null,
    appMetadataDetail: null,
    showSearchBox: false,
    showOfficeMarketDropdowns: false,
    showTopLinks: true,
    get_contentMarketValue: function SP_Storefront_BaseHeader$get_contentMarketValue() {
        if (this.officeMarketsValid) {
            return this.contentMarket.get_selectedOptionId();
        }
        else {
            return SP.ScriptUtility.emptyString;
        }
    },
    get_billingMarketValue: function SP_Storefront_BaseHeader$get_billingMarketValue() {
        if (this.officeMarketsValid) {
            return this.billingMarket.get_selectedOptionId();
        }
        else {
            return SP.ScriptUtility.emptyString;
        }
    },
    get_marketSelectionChanged: function SP_Storefront_BaseHeader$get_marketSelectionChanged() {
        return this.officeMarketsValid && (!this.billingMarket.valueEqualsState(this.currentBillingMarket) || !this.contentMarket.valueEqualsState(this.currentContentMarket));
    },
    officeMarketsValid: false,
    currentBillingMarket: null,
    currentContentMarket: null,
    initBaseElements: function SP_Storefront_BaseHeader$initBaseElements($p0, $p1) {
        this.topLinks = new SP.Storefront.ControlsListElement();
        this.appendHtmlElement(this.topLinks);
        var $v_0 = $get('SPStorefrontBaseHeaderTopLinksPlaceHolder', this.elementObject);

        this.elementObject.replaceChild(this.topLinks.elementObject, $v_0);
        var $v_1 = document.createElement('a');

        Sys.UI.DomElement.addCssClass($v_1, 'ms-secondaryCommandLink');
        $v_1.style.fontWeight = 'bold';
        $v_1.href = SP.Storefront.StorefrontContext.get_sourceUrl();
        SP.UI.UIUtility.setInnerText($v_1, SP.Storefront.StorefrontContext.get_sourceName());
        this.topLinks.addChild($v_1);
        this.topLinks.addChild(SP.Storefront.BaseHeader.$3Q());
        if (SP.Storefront.StorefrontContext.get_hasManageList() || SP.Storefront.StorefrontContext.get_hasManageWeb() || SP.Storefront.StorefrontContext.get_installRights() && !SP.Storefront.StorefrontContext.get_isAppWeb()) {
            $v_1 = document.createElement('a');
            Sys.UI.DomElement.addCssClass($v_1, 'ms-secondaryCommandLink');
            $v_1.href = SP.Utilities.Utility.getLayoutsPageUrl('addanapp.aspx');
            $v_1.href += '?' + SP.Storefront.StorefrontUrl.constructBaseQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName());
            SP.UI.UIUtility.setInnerText($v_1, SP.Res.storefront_Header_AddAnAppLink);
            this.topLinks.addChild($v_1);
            this.topLinks.addChild(SP.Storefront.BaseHeader.$3Q());
        }
        this.topControls = new SP.Storefront.ControlsListElement();
        this.topControls.addCssClass('ms-storefront-floatopposite');
        this.appendHtmlElement(this.topControls);
        $v_0 = $get('SPStorefrontBaseHeaderTopPlaceHolder', this.elementObject);
        this.elementObject.replaceChild(this.topControls.elementObject, $v_0);
        this.billingMarket = SP.Storefront.SelectionDropDown.create('storefrontBillingMarketSelection', 'bm', false);
        this.billingMarket.addCssClass('ms-storefront-marketdropdown');
        this.billingMarket.add_selectionDropDownExternalChanged($p1);
        this.billingMarket.setScreenReaderText(SP.Res.storefront_ScreenReaderText_BillingMarket);
        this.topControls.addChild(this.billingMarket.elementObject);
        this.contentMarket = SP.Storefront.SelectionDropDown.create('storefrontContentMarketSelection', 'cm', false);
        this.contentMarket.addCssClass('ms-storefront-marketdropdown');
        this.contentMarket.add_selectionDropDownExternalChanged($p1);
        this.contentMarket.setScreenReaderText(SP.Res.storefront_ScreenReaderText_ContentMarket);
        this.topControls.addChild(this.contentMarket.elementObject);
        var $v_2 = $get('TopHelpLink', SP.Storefront.StorefrontApp.get_layoutRoot());

        if (!SP.ScriptUtility.isNullOrUndefined($v_2)) {
            var $v_5 = $v_2.parentNode;

            $v_5.parentNode.removeChild($v_5);
            this.topControls.appendChild($v_5);
        }
        var $v_3 = $get('DeveloperDashboardLauncher', SP.Storefront.StorefrontApp.get_layoutRoot());

        if (!SP.ScriptUtility.isNullOrUndefined($v_3)) {
            var $v_6 = $v_3.parentNode;

            $v_6.parentNode.removeChild($v_6);
            this.topControls.appendChild($v_6);
        }
        var $$t_9, $$t_A;
        var $v_4 = ($$t_A = SP.Storefront.SearchBox.createSearchControl($$t_9 = {
            'val': this.searchBoxControl
        }), this.searchBoxControl = $$t_9.val, $$t_A);

        Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-floatopposite');
        this.searchBoxControl.add_searchChanged($p0);
        $v_0 = $get('SPStorefrontBaseHeaderSearchPlaceHolder', this.elementObject);
        this.elementObject.replaceChild($v_4, $v_0);
        this.transferredToThis();
    },
    copyCommonHeaderObject: function SP_Storefront_BaseHeader$copyCommonHeaderObject($p0) {
        $p0.transferingFromThis();
        SP.Storefront.HtmlElement.transferElement($p0.elementObject, this.elementObject, $p0.topLinks.elementObject, 'SPStorefrontBaseHeaderTopLinksPlaceHolder');
        this.topLinks = $p0.topLinks;
        SP.Storefront.HtmlElement.transferElement($p0.elementObject, this.elementObject, $p0.topControls.elementObject, 'SPStorefrontBaseHeaderTopPlaceHolder');
        this.topControls = $p0.topControls;
        this.billingMarket = $p0.billingMarket;
        this.contentMarket = $p0.contentMarket;
        this.officeMarketsValid = $p0.officeMarketsValid;
        this.currentBillingMarket = $p0.currentBillingMarket;
        this.currentContentMarket = $p0.currentContentMarket;
        SP.Storefront.HtmlElement.transferElement($p0.elementObject, this.elementObject, $p0.searchBoxControl.getParentDiv(), 'SPStorefrontBaseHeaderSearchPlaceHolder');
        this.searchBoxControl = $p0.searchBoxControl;
        this.transferredToThis();
    },
    addBasicHeaderImage: function SP_Storefront_BaseHeader$addBasicHeaderImage() {
        var $v_0 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-appdetailstitlediv');
        this.appendChild($v_0);
        var $v_1 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-middle');
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement('span');

        Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-titleimagespan');
        var $v_3 = document.createElement('img');

        Sys.UI.DomElement.addCssClass($v_3, 'ms-storefront-titleimage');
        $v_3.src = '/_layouts/15/images/spstorefront.png?rev=23';
        $v_2.appendChild($v_3);
        $v_1.appendChild($v_2);
        var $v_4 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-middle');
        $v_0.appendChild($v_4);
        var $v_5 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-appdetailstitle');
        Sys.UI.DomElement.addCssClass($v_5, 'ms-core-pageTitle');
        SP.UI.UIUtility.setInnerText($v_5, SP.Res.storefront_MyAppsFilter_Marketplace);
        $v_4.appendChild($v_5);
    },
    checkAndProcessGetMarketsResponse: function SP_Storefront_BaseHeader$checkAndProcessGetMarketsResponse($p0) {
        var $v_0;

        if (SP.ScriptUtility.isNullOrUndefined($p0.errorData)) {
            $v_0 = $p0.markets;
        }
        else if (SP.Storefront.ErrorView.getErrorType($p0.errorData) === '4') {
            var $v_1 = $p0.errorData['Markets'];

            $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($v_1);
            var $v_2 = $v_0.length;

            for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
                $v_0[$v_4] = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeMarket, $v_0[$v_4]);
            }
            var $v_3 = SP.Storefront.StorefrontState.getStateParam('cm');

            if (SP.ScriptUtility.isNullOrEmptyString($v_3)) {
                var $v_5 = new SP.Storefront.OfficeMarket();

                $v_5.set_isBillingMarket(false);
                $v_5.set_displayName(SP.Res.storefront_Header_NoLanguageSelected);
                $v_5.set_culture('none');
                Array.insert($v_0, 0, $v_5);
                var $v_6 = new SP.Storefront.OfficeMarket();

                $v_6.set_isBillingMarket(true);
                $v_6.set_displayName(SP.Res.storefront_Header_NoCurrencySelected);
                $v_6.set_countryRegion('none');
                Array.insert($v_0, 0, $v_6);
                this.$3D_2($v_0);
                SP.Storefront.StorefrontApp.updateUIWithError($p0.errorData);
                return false;
            }
        }
        else {
            SP.Storefront.StorefrontApp.updateUIWithError($p0.errorData);
            return false;
        }
        this.$3D_2($v_0);
        return true;
    },
    updateUI: function SP_Storefront_BaseHeader$updateUI() {
        SP.Storefront.HtmlElement.setDisplayAttribute(this.searchBoxControl.elementObject.parentNode, !this.showSearchBox);
        this.billingMarket.set_notDisplayed(!this.showOfficeMarketDropdowns);
        this.contentMarket.set_notDisplayed(!this.showOfficeMarketDropdowns);
        this.topLinks.set_notDisplayed(!this.showTopLinks);
    },
    $3D_2: function SP_Storefront_BaseHeader$$3D_2($p0) {
        this.billingMarket.clearOptions();
        this.contentMarket.clearOptions();
        var $v_0 = $p0.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = $p0[$v_1];

            if ($v_2.get_isBillingMarket()) {
                this.billingMarket.addOption($v_2.get_displayName(), $v_2.get_countryRegion(), $v_2.get_isDefault());
            }
            else {
                this.contentMarket.addOption($v_2.get_displayName(), $v_2.get_culture(), $v_2.get_isDefault());
            }
        }
        this.billingMarket.changeToMatchState();
        this.contentMarket.changeToMatchState();
        this.officeMarketsValid = true;
    },
    transferredToThis: function SP_Storefront_BaseHeader$transferredToThis() {
    },
    transferingFromThis: function SP_Storefront_BaseHeader$transferingFromThis() {
    }
};
SP.Storefront.CategoryItem = function SP_Storefront_CategoryItem($p0) {
    SP.Storefront.CategoryItem.initializeBase(this, [$p0.get_id()]);
    this.categoryMetadata = $p0;
    this.elementObject.id = 'idStorefrontCategoryItem';
    var $v_0 = document.createElement('span');

    $v_0.id = 'idStorefrontCategoryItemText';
    this.removeCssClass('ms-storefront-listitem');
    Sys.UI.DomElement.addCssClass(this.$5_1, 'ms-storefront-leftpaneitem');
    Sys.UI.DomElement.addCssClass(this.$5_1, 'ms-core-listMenu-item');
    var $v_1 = this.categoryMetadata.get_title();

    SP.UI.UIUtility.setInnerText($v_0, $v_1);
    this.appendChild($v_0);
};
SP.Storefront.CategoryItem.get_allCategory = function SP_Storefront_CategoryItem$get_allCategory() {
    var $v_0 = {};

    $v_0['ID'] = SP.Storefront.StringIds.StateParamValues.categoryAll;
    $v_0['Title'] = SP.Res.storefront_PriceFilter_All;
    var $v_1 = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeCategory, $v_0);
    var $v_2 = new SP.Storefront.CategoryItem($v_1);

    return $v_2;
};
SP.Storefront.CategoryItem.prototype = {
    categoryMetadata: null
};
SP.Storefront.ErrorView = function SP_Storefront_ErrorView() {
    SP.Storefront.ErrorView.initializeBase(this);
    if (SP.Storefront.StorefrontContext.get_fullPage()) {
        this.header.addBasicHeaderImage();
    }
    this.elementObject.id += 'ErrorView';
    this.header.showSearchBox = false;
    this.header.showOfficeMarketDropdowns = false;
    this.header.showTopLinks = SP.Storefront.StorefrontContext.get_fullPage();
    var $v_0 = document.createElement('div');

    this.appendChild($v_0);
    this.$1r_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$1r_3, 'ms-storefront-errormain');
    $v_0.appendChild(this.$1r_3);
    var $v_1 = document.createElement('h1');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-attractMode');
    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-wordwrap');
    this.$1r_3.appendChild($v_1);
    this.mainElement = document.createElement('span');
    this.mainElement.tabIndex = 0;
    this.mainElement.id = 'idStorefrontErrorViewMessage';
    $v_1.appendChild(this.mainElement);
    this.$28_3 = document.createElement('div');
    this.$1r_3.appendChild(this.$28_3);
    this.postConstruction();
};
SP.Storefront.ErrorView.getErrorType = function SP_Storefront_ErrorView$getErrorType($p0) {
    var $v_0 = $p0['StorefrontErrorHeader'];

    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        return '0';
    }
    return $v_0;
};
SP.Storefront.ErrorView.prototype = {
    errorData: null,
    mainElement: null,
    $28_3: null,
    $1r_3: null,
    get_$4Q_3: function SP_Storefront_ErrorView$get_$4Q_3() {
        return SP.Storefront.ErrorView.getErrorType(this.errorData);
    },
    get_$4P_3: function SP_Storefront_ErrorView$get_$4P_3() {
        var $v_0 = this.errorData['Message'];

        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return SP.Res.errorDialogTitleText;
        }
        return $v_0;
    },
    updateUI: function SP_Storefront_ErrorView$updateUI($p0) {
        SP.UI.UIUtility.setInnerText(this.mainElement, this.get_$4P_3());
        SP.Storefront.HtmlElement.clearChildren(this.$28_3);
        this.header.showOfficeMarketDropdowns = false;
        switch (this.get_$4Q_3()) {
        case '3':
            var $v_0 = this.errorData['AssetId'];
            var $v_1 = document.createElement('a');

            $v_1.target = '_blank';
            $v_1.title = SP.Res.storefront_General_FindOutWhy;
            $v_1.id = 'idStorefrontErrorViewWhyLink';
            SP.UI.UIUtility.setInnerText($v_1, SP.Res.storefront_General_FindOutWhy);
            $v_1.href = SP.Storefront.SPAppMetadataDetail.getTakedownUrl($v_0);
            Sys.UI.DomElement.addCssClass($v_1, 'ms-link');
            this.$28_3.appendChild($v_1);
            break;
        case '4':
            this.header.showOfficeMarketDropdowns = true;
            break;
        case '0':
        default:
            break;
        }
        SP.Storefront.BaseView.prototype.updateUI.call(this, $p0);
    }
};
SP.Storefront.BaseElement = function SP_Storefront_BaseElement() {
};
SP.Storefront.BaseElement.prototype = {
    $1A_0: null,
    get_events: function SP_Storefront_BaseElement$get_events() {
        if (!this.$1A_0) {
            this.$1A_0 = new Sys.EventHandlerList();
        }
        return this.$1A_0;
    }
};
SP.Storefront.HtmlElement = function SP_Storefront_HtmlElement() {
    this.$$d_$4E_1 = Function.createDelegate(this, this.$4E_1);
    this.$$d_$4t_1 = Function.createDelegate(this, this.$4t_1);
    this.$$d_$4v_1 = Function.createDelegate(this, this.$4v_1);
    this.$$d_$4u_1 = Function.createDelegate(this, this.$4u_1);
    this.$$d_$52_1 = Function.createDelegate(this, this.$52_1);
    this.$$d_$53_1 = Function.createDelegate(this, this.$53_1);
    this.$$d_$54_1 = Function.createDelegate(this, this.$54_1);
    this.$$d_$4S_1 = Function.createDelegate(this, this.$4S_1);
    SP.Storefront.HtmlElement.initializeBase(this);
};
SP.Storefront.HtmlElement.setInnerHTML = function SP_Storefront_HtmlElement$setInnerHTML($p0, $p1) {
    try {
        $p1.innerHTML = $p0;
    }
    catch ($$e_2) {
        SP.UI.UIUtility.setInnerText($p1, $p0);
    }
};
SP.Storefront.HtmlElement.setDisplayAttribute = function SP_Storefront_HtmlElement$setDisplayAttribute($p0, $p1) {
    $p0.style.display = $p1 ? 'none' : SP.ScriptUtility.emptyString;
    SP.Storefront.HtmlElement.setHiddenAttribute($p0, $p1);
};
SP.Storefront.HtmlElement.setHiddenAttribute = function SP_Storefront_HtmlElement$setHiddenAttribute($p0, $p1) {
    if ($p1) {
        $p0.style.visibility = 'hidden';
        $p0.setAttribute('aria-hidden', 'true');
    }
    else {
        $p0.style.visibility = SP.ScriptUtility.emptyString;
        $p0.removeAttribute('aria-hidden');
    }
};
SP.Storefront.HtmlElement.setChildrenHiddenAttr = function SP_Storefront_HtmlElement$setChildrenHiddenAttr($p0, $p1) {
    SP.Storefront.HtmlElement.performOnChildren($p0, function($p1_0) {
        SP.Storefront.HtmlElement.setHiddenAttribute($p1_0, $p1);
    });
};
SP.Storefront.HtmlElement.clearChildren = function SP_Storefront_HtmlElement$clearChildren($p0) {
    var $v_0 = $p0.children.length;

    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        $p0.removeChild($p0.children[0]);
    }
};
SP.Storefront.HtmlElement.createAccessibleAnchor = function SP_Storefront_HtmlElement$createAccessibleAnchor() {
    var $v_0 = document.createElement('a');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-selectanchor');
    $v_0.href = 'javascript:;';
    return $v_0;
};
SP.Storefront.HtmlElement.createClearDiv = function SP_Storefront_HtmlElement$createClearDiv() {
    var $v_0 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-clear');
    return $v_0;
};
SP.Storefront.HtmlElement.createRightClearDiv = function SP_Storefront_HtmlElement$createRightClearDiv() {
    var $v_0 = document.createElement('div');

    $v_0.style.clear = SP.Storefront.StorefrontApp.get_isRTL() ? 'left' : 'right';
    return $v_0;
};
SP.Storefront.HtmlElement.createLeftClearDiv = function SP_Storefront_HtmlElement$createLeftClearDiv() {
    var $v_0 = document.createElement('div');

    $v_0.style.clear = SP.Storefront.StorefrontApp.get_isRTL() ? 'right' : 'left';
    return $v_0;
};
SP.Storefront.HtmlElement.focusDOMElement = function SP_Storefront_HtmlElement$focusDOMElement($p0) {
    try {
        $p0.focus();
    }
    catch ($$e_1) { }
};
SP.Storefront.HtmlElement.setButtonElementOrFirstChildText = function SP_Storefront_HtmlElement$setButtonElementOrFirstChildText($p0, $p1) {
    $p0.setAttribute('value', $p1);
    var $v_0 = $p0.children[0];

    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        SP.UI.UIUtility.setInnerText($v_0, $p1);
    }
    else {
        SP.UI.UIUtility.setInnerText($p0, $p1);
    }
};
SP.Storefront.HtmlElement.transferElement = function SP_Storefront_HtmlElement$transferElement($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('div');

    $v_0.id = $p3;
    $p0.replaceChild($v_0, $p2);
    $v_0 = $get($p3, $p1);
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        throw Error.invalidOperation();
    }
    $p1.replaceChild($p2, $v_0);
};
SP.Storefront.HtmlElement.setOpacity = function SP_Storefront_HtmlElement$setOpacity($p0, $p1) {
    window.SetOpacity($p0, $p1);
};
SP.Storefront.HtmlElement.performOnChildren = function SP_Storefront_HtmlElement$performOnChildren($p0, $p1) {
    var $v_0 = $p0.children.length;

    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        $p1($p0.children[$v_1]);
    }
};
SP.Storefront.HtmlElement.prototype = {
    elementObject: null,
    get_accessibleAnchor: function SP_Storefront_HtmlElement$get_accessibleAnchor() {
        return this.$5_1;
    },
    $5_1: null,
    get_width: function SP_Storefront_HtmlElement$get_width() {
        return this.elementObject.offsetWidth;
    },
    set_width: function SP_Storefront_HtmlElement$set_width($p0) {
        this.elementObject.style.width = $p0 + 'px';
        return $p0;
    },
    get_height: function SP_Storefront_HtmlElement$get_height() {
        return this.elementObject.offsetHeight;
    },
    set_height: function SP_Storefront_HtmlElement$set_height($p0) {
        this.elementObject.style.height = $p0 + 'px';
        return $p0;
    },
    get_top: function SP_Storefront_HtmlElement$get_top() {
        var $v_0 = 'Calls to the \'HtmlElement.Top\' property getter are not supported.';

        throw Error.invalidOperation($v_0);
    },
    set_top: function SP_Storefront_HtmlElement$set_top($p0) {
        this.elementObject.style.top = $p0 + 'px';
        return $p0;
    },
    get_bottom: function SP_Storefront_HtmlElement$get_bottom() {
        var $v_0 = 'Calls to the \'HtmlElement.Bottom\' property getter are not supported.';

        throw Error.invalidOperation($v_0);
    },
    set_bottom: function SP_Storefront_HtmlElement$set_bottom($p0) {
        this.elementObject.style.bottom = $p0 + 'px';
        return $p0;
    },
    get_left: function SP_Storefront_HtmlElement$get_left() {
        var $v_0 = 'Calls to the \'HtmlElement.Left\' property getter are not supported.';

        throw Error.invalidOperation($v_0);
    },
    set_left: function SP_Storefront_HtmlElement$set_left($p0) {
        this.elementObject.style.left = $p0 + 'px';
        return $p0;
    },
    get_right: function SP_Storefront_HtmlElement$get_right() {
        var $v_0 = 'Calls to the \'HtmlElement.Right\' property getter are not supported.';

        throw Error.invalidOperation($v_0);
    },
    set_right: function SP_Storefront_HtmlElement$set_right($p0) {
        this.elementObject.style.right = $p0 + 'px';
        return $p0;
    },
    get_notDisplayed: function SP_Storefront_HtmlElement$get_notDisplayed() {
        return this.elementObject.style.display === 'none';
    },
    set_notDisplayed: function SP_Storefront_HtmlElement$set_notDisplayed($p0) {
        SP.Storefront.HtmlElement.setDisplayAttribute(this.elementObject, $p0);
        return $p0;
    },
    get_hidden: function SP_Storefront_HtmlElement$get_hidden() {
        return this.elementObject.style.visibility === 'hidden';
    },
    set_hidden: function SP_Storefront_HtmlElement$set_hidden($p0) {
        SP.Storefront.HtmlElement.setHiddenAttribute(this.elementObject, $p0);
        return $p0;
    },
    get_disabled: function SP_Storefront_HtmlElement$get_disabled() {
        if (this.$W_1) {
            return this.$5_1.disabled;
        }
        return this.elementObject.disabled;
    },
    set_disabled: function SP_Storefront_HtmlElement$set_disabled($p0) {
        if (this.$W_1) {
            if ($p0) {
                Sys.UI.DomElement.addCssClass(this.$5_1, 'ms-storefront-disabledlink');
            }
            else {
                Sys.UI.DomElement.removeCssClass(this.$5_1, 'ms-storefront-disabledlink');
            }
            this.$5_1.disabled = $p0;
        }
        else {
            this.elementObject.disabled = $p0;
        }
        return $p0;
    },
    $W_1: false,
    initElementObject: function SP_Storefront_HtmlElement$initElementObject($p0, $p1, $p2, $p3, $p4) {
        this.$3M_1($p0, $p1, $p2, $p4);
        SP.Storefront.HtmlElement.setInnerHTML($p3, this.elementObject);
    },
    initElementNoInnerHtml: function SP_Storefront_HtmlElement$initElementNoInnerHtml($p0, $p1, $p2, $p3) {
        this.$3M_1($p0, $p1, $p2, $p3);
    },
    getElementById: function SP_Storefront_HtmlElement$getElementById($p0) {
        var $v_0 = new SP.Storefront.HtmlElement();

        $v_0.elementObject = $get($p0, this.elementObject);
        return $v_0;
    },
    removeCssClass: function SP_Storefront_HtmlElement$removeCssClass($p0) {
        var $v_0 = false;

        if (!SP.ScriptUtility.isNullOrEmptyString($p0) && Sys.UI.DomElement.containsCssClass(this.elementObject, $p0)) {
            $v_0 = true;
            Sys.UI.DomElement.removeCssClass(this.elementObject, $p0);
        }
        return $v_0;
    },
    addCssClass: function SP_Storefront_HtmlElement$addCssClass($p0) {
        if (!SP.ScriptUtility.isNullOrEmptyString($p0)) {
            Sys.UI.DomElement.addCssClass(this.elementObject, $p0);
        }
    },
    addHandler: function SP_Storefront_HtmlElement$addHandler($p0, $p1) {
        $addHandler(this.elementObject, $p0, $p1);
    },
    changeCssClass: function SP_Storefront_HtmlElement$changeCssClass($p0, $p1, $p2) {
        if (this.removeCssClass($p0) || $p2) {
            this.addCssClass($p1);
        }
    },
    appendHtmlElement: function SP_Storefront_HtmlElement$appendHtmlElement($p0) {
        this.appendChild($p0.elementObject);
    },
    appendChild: function SP_Storefront_HtmlElement$appendChild($p0) {
        if (this.$W_1) {
            this.$5_1.appendChild($p0);
        }
        else {
            this.elementObject.appendChild($p0);
        }
    },
    insertHtmlElementAt: function SP_Storefront_HtmlElement$insertHtmlElementAt($p0, $p1) {
        this.insertElementAt($p0, $p1.elementObject);
    },
    insertElementAt: function SP_Storefront_HtmlElement$insertElementAt($p0, $p1) {
        $p0 = $p0 < 0 ? 0 : $p0;
        if ($p0 >= this.elementObject.children.length) {
            this.appendChild($p1);
            return;
        }
        var $v_0 = this.elementObject.children[$p0];

        if (this.$W_1) {
            this.$5_1.insertBefore($p1, $v_0);
        }
        else {
            this.elementObject.insertBefore($p1, $v_0);
        }
    },
    removeAllChildren: function SP_Storefront_HtmlElement$removeAllChildren() {
        SP.Storefront.HtmlElement.clearChildren(this.elementObject);
    },
    updateLayout: function SP_Storefront_HtmlElement$updateLayout() {
    },
    setupAccessibleAnchor: function SP_Storefront_HtmlElement$setupAccessibleAnchor() {
        this.$5_1 = SP.Storefront.HtmlElement.createAccessibleAnchor();
        this.$5_1.id = this.elementObject.id + 'AnchorSelect';
        $addHandler(this.$5_1, 'focus', this.$$d_$4S_1);
        this.elementObject.appendChild(this.$5_1);
        this.$W_1 = true;
    },
    removeAccessibleAnchor: function SP_Storefront_HtmlElement$removeAccessibleAnchor() {
        $removeHandler(this.$5_1, 'focus', this.$$d_$4S_1);
        this.elementObject.removeChild(this.$5_1);
        this.$5_1 = null;
        this.$W_1 = false;
    },
    focus: function SP_Storefront_HtmlElement$focus() {
        if (this.$W_1) {
            SP.Storefront.HtmlElement.focusDOMElement(this.$5_1);
        }
        else {
            SP.Storefront.HtmlElement.focusDOMElement(this.elementObject);
        }
    },
    $3M_1: function SP_Storefront_HtmlElement$$3M_1($p0, $p1, $p2, $p3) {
        this.elementObject = document.createElement($p0);
        if (!SP.ScriptUtility.isNullOrEmptyString($p3)) {
            this.addCssClass($p3);
        }
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            this.elementObject.id = $p1;
        }
        var $$dict_4 = $p2;

        for (var $$key_5 in $$dict_4) {
            var $v_0 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };

            this.elementObject.setAttribute($v_0.key, $v_0.value);
        }
        this.addBasicHandlers();
    },
    addBasicHandlers: function SP_Storefront_HtmlElement$addBasicHandlers() {
        $addHandler(this.elementObject, 'mouseover', this.$$d_$54_1);
        $addHandler(this.elementObject, 'mouseout', this.$$d_$53_1);
        this.addHandler('click', this.$$d_$52_1);
        this.addHandler('keypress', this.$$d_$4u_1);
        this.addHandler('keyup', this.$$d_$4v_1);
        this.addHandler('keydown', this.$$d_$4t_1);
        $addHandler(this.elementObject, 'focus', this.$$d_$4S_1);
        $addHandler(this.elementObject, 'blur', this.$$d_$4E_1);
    },
    onMouseOver: function SP_Storefront_HtmlElement$onMouseOver($p0) {
    },
    onMouseOut: function SP_Storefront_HtmlElement$onMouseOut($p0) {
    },
    onMouseClick: function SP_Storefront_HtmlElement$onMouseClick($p0) {
    },
    onKeyPress: function SP_Storefront_HtmlElement$onKeyPress($p0) {
    },
    onKeyUp: function SP_Storefront_HtmlElement$onKeyUp($p0) {
    },
    onKeyDown: function SP_Storefront_HtmlElement$onKeyDown($p0) {
    },
    onFocus: function SP_Storefront_HtmlElement$onFocus($p0) {
    },
    onBlur: function SP_Storefront_HtmlElement$onBlur($p0) {
    },
    $54_1: function SP_Storefront_HtmlElement$$54_1($p0) {
        this.onMouseOver($p0);
    },
    $53_1: function SP_Storefront_HtmlElement$$53_1($p0) {
        this.onMouseOut($p0);
    },
    $52_1: function SP_Storefront_HtmlElement$$52_1($p0) {
        if (this.$W_1 && this.get_disabled()) {
            return;
        }
        this.onMouseClick($p0);
    },
    $4u_1: function SP_Storefront_HtmlElement$$4u_1($p0) {
        if (this.$W_1 && this.get_disabled()) {
            return;
        }
        this.onKeyPress($p0);
    },
    $4t_1: function SP_Storefront_HtmlElement$$4t_1($p0) {
        if (this.$W_1 && this.get_disabled()) {
            return;
        }
        this.onKeyDown($p0);
    },
    $4v_1: function SP_Storefront_HtmlElement$$4v_1($p0) {
        if (this.$W_1 && this.get_disabled()) {
            return;
        }
        this.onKeyUp($p0);
    },
    $4S_1: function SP_Storefront_HtmlElement$$4S_1($p0) {
        this.onFocus($p0);
    },
    $4E_1: function SP_Storefront_HtmlElement$$4E_1($p0) {
        this.onBlur($p0);
    }
};
SP.Storefront.HugView = function SP_Storefront_HugView() {
    this.$$d_$33_3 = Function.createDelegate(this, this.$33_3);
    this.$$d_$3G_3 = Function.createDelegate(this, this.$3G_3);
    this.$$d_$5G_3 = Function.createDelegate(this, this.$5G_3);
    this.$$d_$2b_3 = Function.createDelegate(this, this.$2b_3);
    this.$$d_$2T_3 = Function.createDelegate(this, this.$2T_3);
    SP.Storefront.HugView.initializeBase(this);
    this.elementObject.id += 'HugView';
    this.header.showSearchBox = false;
    this.header.showOfficeMarketDropdowns = false;
    this.header.showTopLinks = true;
    this.spProxy.add_getAppDetailsCompleted(this.$$d_$2T_3);
    this.spProxy.showLoadingDelegate = null;
    this.spProxy.hideLoadingDelegate = null;
    this.addCssClass('ms-storefront-hugview');
    var $v_0 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-table');
    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-hugtitlearea');
    this.appendChild($v_0);
    var $v_1 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-tableRow');
    $v_0.appendChild($v_1);
    var $v_2 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_2, 'ms-tableCell');
    $v_1.appendChild($v_2);
    var $$t_A, $$t_B;
    var $v_3 = ($$t_B = SP.Storefront.AppIconBase.getIconImageSpan(this.elementObject.id, $$t_A = {
        'val': this.$K_3
    }), this.$K_3 = $$t_A.val, $$t_B);

    $v_2.appendChild($v_3);
    var $v_4 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_4, 'ms-tableCell');
    Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-hugmainmsg');
    $v_1.appendChild($v_4);
    var $v_5 = document.createElement('h1');

    $v_4.appendChild($v_5);
    this.$1_3 = document.createElement('span');
    this.$1_3.id = 'idStorefrontViewStateHugWait';
    SP.UI.UIUtility.setInnerText(this.$1_3, SP.Res.storefront_HugView_WaitMessage);
    $v_5.appendChild(this.$1_3);
    this.$1F_3 = document.createElement('img');
    Sys.UI.DomElement.addCssClass(this.$1F_3, 'ms-storefront-hugloadingimg');
    this.$1F_3.alt = '/';
    this.$1F_3.src = '/_layouts/15/images/loadingcirclests16.gif?rev=23';
    $v_5.appendChild(this.$1F_3);
    this.$2_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$2_3, 'ms-textLarge');
    Sys.UI.DomElement.addCssClass(this.$2_3, 'ms-storefront-hugdiv');
    SP.UI.UIUtility.setInnerText(this.$2_3, SP.Storefront.StorefrontContext.get_appName());
    $v_4.appendChild(this.$2_3);
    var $v_6 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_6, 'ms-storefront-huglabels');
    this.appendChild($v_6);
    var $v_7 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_7, 'ms-storefront-huglabels');
    Sys.UI.DomElement.addCssClass($v_7, 'ms-storefront-clear');
    $v_6.appendChild($v_7);
    this.$a_3 = document.createElement('input');
    this.$a_3.type = 'checkbox';
    this.$a_3.checked = false;
    this.$a_3.name = 'download';
    this.$a_3.value = '1';
    $v_7.appendChild(this.$a_3);
    this.$1M_3 = document.createElement('span');
    SP.UI.UIUtility.setInnerText(this.$1M_3, String.format(SP.Res.storefront_HugView_ActionLabel_Add, SP.Storefront.StorefrontContext.get_sourceName()));
    $v_7.appendChild(this.$1M_3);
    this.$m_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$m_3, 'ms-storefront-huglabels');
    Sys.UI.DomElement.addCssClass(this.$m_3, 'ms-storefront-notificationdiv');
    Sys.UI.DomElement.addCssClass(this.$m_3, 'ms-storefront-notificationtext');
    Sys.UI.DomElement.addCssClass(this.$m_3, 'ms-status-yellow');
    SP.UI.UIUtility.setInnerText(this.$m_3, SP.Res.storefront_HugView_DontWorry);
    $v_6.appendChild(this.$m_3);
    this.$p_3 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$p_3, 'ms-storefront-huglabels');
    SP.Storefront.HtmlElement.setInnerHTML(SP.Storefront.HugView.$2o(0), this.$p_3);
    $v_6.appendChild(this.$p_3);
    var $v_8 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_8, 'ms-storefront-floatopposite');
    $v_8.style.textAlign = SP.Storefront.StorefrontApp.get_isRTL() ? 'left' : 'right';
    this.appendChild($v_8);
    this.$0_3 = new SP.Storefront.HtmlElement();
    var $v_9 = {};

    $v_9['name'] = 'actionbutton';
    $v_9['type'] = 'button';
    this.$0_3.initElementNoInnerHtml('button', 'idStorefrontHugActionButton', $v_9, SP.ScriptUtility.emptyString);
    this.$0_3.addHandler('click', this.$$d_$2b_3);
    this.$0_3.elementObject.style.margin = '0px 10px';
    SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$0_3.elementObject, SP.Res.storefront_HugView_RetryButton);
    $v_8.appendChild(this.$0_3.elementObject);
    this.$t_3 = new SP.Storefront.HtmlElement();
    $v_9 = {};
    $v_9['name'] = 'returnbutton';
    $v_9['type'] = 'button';
    this.$t_3.initElementNoInnerHtml('button', 'idStorefrontHugReturnButton', $v_9, 'ms-button-emphasize');
    this.$t_3.addHandler('click', this.$$d_$5G_3);
    SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$t_3.elementObject, SP.Res.storefront_HugView_SuccessButton);
    $v_8.appendChild(this.$t_3.elementObject);
    this.postConstruction();
};
SP.Storefront.HugView.$2o = function SP_Storefront_HugView$$2o($p0) {
    switch ($p0) {
    case 2:
        return String.format(SP.Res.storefront_HugView_MoreActions_Retry, SP.Storefront.StorefrontApp.getAnchorStartTag(SP.Storefront.StorefrontContext.get_sourceUrl()), '</a>');
    case 3:
        return String.format(SP.Res.storefront_HugView_MoreActions_RetryLater, SP.Storefront.StorefrontApp.getAnchorStartTag(SP.Storefront.StorefrontContext.get_sourceUrl()), '</a>');
    default:
        return String.format(SP.Res.storefront_HugView_MoreActions_AddLater, SP.Storefront.StorefrontApp.getAnchorStartTag(SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl()), '</a>');
    }
};
SP.Storefront.HugView.$3h = function SP_Storefront_HugView$$3h($p0, $p1) {
    var $v_0;

    if ($p0 >= 0) {
        $v_0 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_HugView_SuccessMessageTrial, SP.Res.storefront_HugView_SuccessMessageTrialIntervals, $p0);
        $v_0 = String.format($v_0, $p0);
    }
    else {
        $v_0 = SP.Res.storefront_HugView_SuccessMessageUnlimitedTrial;
    }
    if ($p1 >= 0) {
        var $v_1 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_AppDetails_LicensedMessage_Trial, SP.Res.storefront_AppDetails_LicensedMessage_TrialIntervals, $p1);

        $v_1 = String.format($v_1, $p1);
        $v_0 = String.format('{0} {1}', $v_0, $v_1);
    }
    return $v_0;
};
SP.Storefront.HugView.prototype = {
    $K_3: null,
    $2_3: null,
    $1_3: null,
    $1F_3: null,
    $a_3: null,
    $1M_3: null,
    $0_3: null,
    $t_3: null,
    $m_3: null,
    $p_3: null,
    updateUI: function SP_Storefront_HugView$updateUI($p0) {
        SP.Storefront.BaseView.prototype.updateUI.call(this, $p0);
        this.$3C_3(SP.Storefront.StorefrontContext.get_hug());
    },
    $3C_3: function SP_Storefront_HugView$$3C_3($p0) {
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$K_3, true);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$2_3, true);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$1_3, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1F_3, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$a_3, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1M_3, true);
        this.$0_3.set_hidden(true);
        this.$t_3.set_hidden(true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$m_3, true);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$p_3, true);
        switch ($p0) {
        case 1:
            this.$40_3();
            window.setTimeout(SP.Storefront.StorefrontApp.submitForm, 100);
            break;
        case 3:
            this.$5R_3();
            break;
        case 2:
            this.$5U_3();
            break;
        case 0:
            if (SP.ScriptUtility.isNullOrUndefined(this.get_appMetadataDetail()) || !(this.get_appMetadataDetail()).hasData()) {
                this.$40_3();
                this.spProxy.beginGetAppDetails(SP.Storefront.StorefrontContext.get_billingMarket(), SP.Storefront.StorefrontContext.get_contentMarket(), SP.Storefront.StorefrontContext.get_appId(), 0, null);
            }
            else {
                this.$5W_3();
            }
            break;
        }
    },
    $40_3: function SP_Storefront_HugView$$40_3() {
        this.$1_3.id = 'idStorefrontViewStateHugWait';
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$K_3, false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$2_3, false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$1_3, false);
        SP.UI.UIUtility.setInnerText(this.$1_3, SP.Res.storefront_HugView_WaitMessage);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1F_3, false);
    },
    $5W_3: function SP_Storefront_HugView$$5W_3() {
        this.$1_3.id = 'idStorefrontViewStateHugSuccess';
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$K_3, false);
        var $v_0 = SP.Utilities.HttpUtility.urlPathEncode(((this.get_appMetadataDetail()).get_basicDetails()).get_thumbnailUrl());

        SP.Storefront.ImageUrlVerifier.verifyImageWithAction(this.$K_3, $v_0, this.$$d_$3G_3);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$2_3, false);
        SP.UI.UIUtility.setInnerText(this.$2_3, ((this.get_appMetadataDetail()).get_basicDetails()).get_title());
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$1_3, false);
        var $v_1 = ((this.get_appMetadataDetail()).get_manageableLicense()).get_remainingDays();

        switch (((this.get_appMetadataDetail()).get_manageableLicense()).get_licenseType()) {
        case 3:
            SP.Storefront.HtmlElement.setInnerHTML(SP.Storefront.HugView.$3h(-1, ((this.get_appMetadataDetail()).get_manageableLicense()).get_remainingDays()), this.$1_3);
            break;
        case 2:
            SP.Storefront.HtmlElement.setInnerHTML(SP.Storefront.HugView.$3h(((this.get_appMetadataDetail()).get_manageableLicense()).get_maxUserCount(), ((this.get_appMetadataDetail()).get_manageableLicense()).get_remainingDays()), this.$1_3);
            break;
        case 1:
            SP.UI.UIUtility.setInnerText(this.$1_3, SP.Res.storefront_HugView_SuccessMessageSiteLicense);
            break;
        case 0:
        default:
            var $v_2 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_HugView_SuccessMessagePaid, SP.Res.storefront_HugView_SuccessMessagePaidIntervals, ((this.get_appMetadataDetail()).get_manageableLicense()).get_maxUserCount());

            $v_2 = String.format($v_2, ((this.get_appMetadataDetail()).get_manageableLicense()).get_maxUserCount());
            SP.UI.UIUtility.setInnerText(this.$1_3, $v_2);
            break;
        }
        if (!SP.Storefront.StorefrontContext.get_licensePurchase()) {
            var $v_3 = !SP.ScriptUtility.isNullOrUndefined((this.get_appMetadataDetail()).get_instance()) && ((this.get_appMetadataDetail()).get_instance()).hasData();
            var $v_4 = SP.Storefront.AppDetailsView.canInstallAppFull(this.get_appMetadataDetail());

            if (!$v_3 && $v_4) {
                SP.Storefront.HtmlElement.setDisplayAttribute(this.$a_3, false);
                this.$a_3.checked = true;
            }
            if ($v_4) {
                SP.Storefront.HtmlElement.setDisplayAttribute(this.$1M_3, false);
                var $v_5 = $v_3 ? String.format(SP.Res.storefront_HugView_ActionLabel_Added, SP.Storefront.StorefrontContext.get_sourceName()) : String.format(SP.Res.storefront_HugView_ActionLabel_Add, SP.Storefront.StorefrontContext.get_sourceName());

                SP.UI.UIUtility.setInnerText(this.$1M_3, $v_5);
            }
        }
        if (((this.get_appMetadataDetail()).get_manageableLicense()).get_licenseType() !== 1 && ((this.get_appMetadataDetail()).get_manageableLicense()).get_licenseType() !== 3) {
            this.$0_3.set_hidden(false);
            SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$0_3.elementObject, SP.Res.storefront_AppDetails_MoreActionsDropdown_Manage);
        }
        this.$t_3.set_hidden(false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$p_3, false);
        SP.Storefront.HtmlElement.setInnerHTML(SP.Storefront.HugView.$2o(0), this.$p_3);
        SP.Storefront.StorefrontApp.addHiddenFormField('catalog', (((this.get_appMetadataDetail()).get_basicDetails()).get_catalog()).toString());
    },
    $5R_3: function SP_Storefront_HugView$$5R_3() {
        this.$1_3.id = 'idStorefrontViewStateHugFailed';
        this.$3x_3(false);
    },
    $5U_3: function SP_Storefront_HugView$$5U_3() {
        this.$1_3.id = 'idStorefrontViewStateHugRetry';
        this.$3x_3(true);
    },
    $3x_3: function SP_Storefront_HugView$$3x_3($p0) {
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$K_3, false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$2_3, false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$1_3, false);
        var $v_0 = $p0 ? SP.Res.storefront_HugView_RetryMessage : SP.Res.storefront_HugView_RetryLaterMessage;

        SP.UI.UIUtility.setInnerText(this.$1_3, $v_0);
        if ($p0) {
            this.$0_3.set_hidden(false);
            SP.Storefront.HtmlElement.setButtonElementOrFirstChildText(this.$0_3.elementObject, SP.Res.storefront_HugView_RetryButton);
        }
        this.$t_3.set_hidden(false);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$m_3, false);
        SP.Storefront.HtmlElement.setHiddenAttribute(this.$p_3, false);
        var $v_1 = $p0 ? 2 : 3;

        SP.Storefront.HtmlElement.setInnerHTML(SP.Storefront.HugView.$2o($v_1), this.$p_3);
    },
    $3G_3: function SP_Storefront_HugView$$3G_3($p0) {
        Sys.UI.DomElement.removeCssClass(this.$K_3, 'ms-storefront-defaultappiconimg');
    },
    $44_3: function SP_Storefront_HugView$$44_3($p0, $p1) {
        if (!$p0) {
            SP.Storefront.StorefrontApp.addHiddenFormField('PostHug', '1');
            if ($p1) {
                SP.Storefront.StorefrontApp.addHiddenFormField('manage', '1');
            }
        }
        if (this.$a_3.checked) {
            SP.Storefront.StorefrontApp.showPermissionsPrompt(((this.get_appMetadataDetail()).get_basicDetails()).get_catalog(), SP.Storefront.StorefrontApp.getAppId((this.get_appMetadataDetail()).get_basicDetails(), false), SP.Storefront.StorefrontContext.get_billingMarket(), SP.Storefront.StorefrontContext.get_contentMarket(), (this.get_appMetadataDetail()).get_upgradeAvailable() ? ((this.get_appMetadataDetail()).get_instance()).get_id() : SP.Guid.get_empty(), false, this.$$d_$33_3);
        }
        else {
            this.$3Z_3();
            SP.Storefront.StorefrontApp.submitForm();
        }
    },
    $3Z_3: function SP_Storefront_HugView$$3Z_3() {
        this.$t_3.set_disabled(true);
        this.$0_3.set_disabled(true);
    },
    $2T_3: function SP_Storefront_HugView$$2T_3($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined($p1.errorData)) {
            this.$3C_3(3);
            return;
        }
        this.set_appMetadataDetail($p1.appDetails);
        if (SP.ScriptUtility.isNullOrUndefined((this.get_appMetadataDetail()).get_manageableLicense()) || !((this.get_appMetadataDetail()).get_manageableLicense()).hasData()) {
            this.$3C_3(3);
            return;
        }
        this.updateUI(false);
    },
    $5G_3: function SP_Storefront_HugView$$5G_3($p0) {
        this.$44_3(false, false);
    },
    $2b_3: function SP_Storefront_HugView$$2b_3($p0) {
        var $v_0 = SP.Storefront.StorefrontContext.get_hug() === 2 || SP.Storefront.StorefrontContext.get_hug() === 1;
        var $v_1 = !SP.Storefront.StorefrontContext.get_hug();

        this.$44_3($v_0, $v_1);
    },
    $33_3: function SP_Storefront_HugView$$33_3($p0, $p1) {
        if ($p0 === 1) {
            SP.Storefront.StorefrontApp.addHiddenFormField('oID', $p1);
            this.$3Z_3();
            SP.Storefront.StorefrontApp.submitForm();
        }
    }
};
SP.Storefront.ListItemSelectionChangedEventArgs = function SP_Storefront_ListItemSelectionChangedEventArgs() {
    SP.Storefront.ListItemSelectionChangedEventArgs.initializeBase(this);
};
SP.Storefront.ListItemSelectionChangedEventArgs.prototype = {
    prevListItem: null,
    newListItem: null
};
SP.Storefront.ListItemFocusedEventArgs = function SP_Storefront_ListItemFocusedEventArgs() {
    SP.Storefront.ListItemFocusedEventArgs.initializeBase(this);
};
SP.Storefront.ListItemFocusedEventArgs.prototype = {
    focusedItem: null
};
SP.Storefront.ListElement = function SP_Storefront_ListElement() {
    this.$$d_$5o_2 = Function.createDelegate(this, this.$5o_2);
    this.$$d_updateHighlighted = Function.createDelegate(this, this.updateHighlighted);
    this.$$d_updateSelected = Function.createDelegate(this, this.updateSelected);
    this.$O_2 = SP.ScriptUtility.emptyString;
    this.stateParamKey = SP.ScriptUtility.emptyString;
    this.defaultValueId = SP.ScriptUtility.emptyString;
    this.$A_2 = [];
    SP.Storefront.ListElement.initializeBase(this);
    this.initElementObject('ul', 'idStorefrontList', null, SP.ScriptUtility.emptyString, 'ms-storefront-list');
    this.elementObject.setAttribute('role', 'listbox');
};
SP.Storefront.ListElement.prototype = {
    selected: null,
    highlighted: null,
    get_listTypeId: function SP_Storefront_ListElement$get_listTypeId() {
        return this.$O_2;
    },
    set_listTypeId: function SP_Storefront_ListElement$set_listTypeId($p0) {
        this.$O_2 = SP.ScriptUtility.isNullOrEmptyString($p0) ? SP.ScriptUtility.emptyString : $p0;
        this.elementObject.id = 'idStorefrontList' + this.$O_2;
        return $p0;
    },
    get_selectedCssClass: function SP_Storefront_ListElement$get_selectedCssClass() {
        return this.$R_2;
    },
    set_selectedCssClass: function SP_Storefront_ListElement$set_selectedCssClass($p0) {
        this.$R_2 = $p0;
        return $p0;
    },
    $R_2: null,
    get_highlightCssClass: function SP_Storefront_ListElement$get_highlightCssClass() {
        return this.$N_2;
    },
    set_highlightCssClass: function SP_Storefront_ListElement$set_highlightCssClass($p0) {
        this.$N_2 = $p0;
        return $p0;
    },
    $N_2: null,
    disableHightlightOnSelect: false,
    get_isStatic: function SP_Storefront_ListElement$get_isStatic() {
        return this.$2x_2;
    },
    set_isStatic: function SP_Storefront_ListElement$set_isStatic($p0) {
        if (this.$2x_2 === $p0) {
            return $p0;
        }
        if ($p0) {
            this.addCssClass('static');
        }
        else {
            this.removeCssClass('static');
        }
        var $v_0 = this.$A_2.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$A_2[$v_1];

            if (SP.Storefront.SubListListItem.isInstanceOfType($v_2)) {
                $v_2.subList.set_isStatic($p0);
            }
            else {
                if ($p0) {
                    $v_2.addCssClass('static');
                }
                else {
                    $v_2.removeCssClass('static');
                }
            }
        }
        this.$2x_2 = $p0;
        return $p0;
    },
    $2x_2: false,
    get_count: function SP_Storefront_ListElement$get_count() {
        return this.$A_2.length;
    },
    add_listItemSelectionChanged: function SP_Storefront_ListElement$add_listItemSelectionChanged($p0) {
        (this.get_events()).addHandler('__ListItemSelectionChanged', $p0);
    },
    remove_listItemSelectionChanged: function SP_Storefront_ListElement$remove_listItemSelectionChanged($p0) {
        (this.get_events()).removeHandler('__ListItemSelectionChanged', $p0);
    },
    add_listItemFocused: function SP_Storefront_ListElement$add_listItemFocused($p0) {
        (this.get_events()).addHandler('__ListItemFocusedChanged', $p0);
    },
    remove_listItemFocused: function SP_Storefront_ListElement$remove_listItemFocused($p0) {
        (this.get_events()).removeHandler('__ListItemFocusedChanged', $p0);
    },
    addHiddenListItem: function SP_Storefront_ListElement$addHiddenListItem($p0) {
        var $v_0 = new SP.Storefront.MouseDrivenListItem($p0);

        $v_0.elementObject.id += this.$O_2;
        $v_0.set_notDisplayed(true);
        this.addListItem($v_0);
        return $v_0;
    },
    addDivider: function SP_Storefront_ListElement$addDivider() {
        var $v_0 = document.createElement('li');

        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-divider');
        var $v_1 = document.createElement('hr');

        Sys.UI.DomElement.addCssClass($v_1, 'ms-core-listMenu-separatorLine');
        $v_0.appendChild($v_1);
        this.appendChild($v_0);
        return $v_1;
    },
    addLabel: function SP_Storefront_ListElement$addLabel($p0, $p1) {
        var $p2 = [];

        for (var $$pai_3 = 2; $$pai_3 < arguments.length; ++$$pai_3) {
            $p2[$$pai_3 - 2] = arguments[$$pai_3];
        }
        return this.addLabelStyleOption.apply(this, [$p0, $p1, false, true].concat($p2));
    },
    addLabelStyleOption: function SP_Storefront_ListElement$addLabelStyleOption($p0, $p1, $p2, $p3) {
        var $p4 = [];

        for (var $$pai_A = 4; $$pai_A < arguments.length; ++$$pai_A) {
            $p4[$$pai_A - 4] = arguments[$$pai_A];
        }
        var $v_0 = new SP.Storefront.MouseDrivenListItem($p1);

        $v_0.elementObject.id += this.$O_2;
        SP.UI.UIUtility.setInnerText($v_0.$5_1, $p0);
        if ($p3) {
            $v_0.addCssClass('ms-storefront-textlistitem');
        }
        else {
            $v_0.removeCssClass('ms-storefront-listitem');
        }
        if (!SP.ScriptUtility.isNullOrUndefined($p4)) {
            for (var $$arr_6 = $p4, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                var $v_1 = $$arr_6[$$idx_8];

                if ($p2) {
                    Sys.UI.DomElement.addCssClass($v_0.$5_1, $v_1);
                }
                else {
                    $v_0.addCssClass($v_1);
                }
            }
        }
        this.addListItem($v_0);
        return $v_0;
    },
    addChild: function SP_Storefront_ListElement$addChild($p0) {
        var $v_0 = new SP.Storefront.ListItemElement();

        $v_0.elementObject.id += this.$O_2;
        $v_0.appendChild($p0);
        this.addListItem($v_0);
        return $v_0;
    },
    addListItem: function SP_Storefront_ListElement$addListItem($p0) {
        this.insertListItemAt(SP.Storefront.StorefrontApp.insertAtEndIndex, $p0);
    },
    insertChildAt: function SP_Storefront_ListElement$insertChildAt($p0, $p1) {
        var $v_0 = new SP.Storefront.ListItemElement();

        $v_0.elementObject.id += this.$O_2;
        $v_0.appendChild($p1);
        this.insertListItemAt($p0, $v_0);
        return $v_0;
    },
    insertListItemAt: function SP_Storefront_ListElement$insertListItemAt($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$R_2)) {
            $p1.set_selectedCssClass(this.$R_2);
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$N_2)) {
            $p1.set_highlightCssClass(this.$N_2);
        }
        if (SP.Storefront.SubListListItem.isInstanceOfType($p1)) {
            $p1.subList.$R_2 = this.$R_2;
            $p1.subList.$N_2 = this.$N_2;
        }
        if (this.get_isStatic()) {
            if (SP.Storefront.SubListListItem.isInstanceOfType($p1)) {
                $p1.subList.set_isStatic(true);
            }
            $p1.addCssClass('static');
        }
        $p1.disableHightlightOnSelect = this.disableHightlightOnSelect;
        $p1.$1a_2 = this.$$d_updateSelected;
        $p1.$25_2 = this.$$d_updateHighlighted;
        $p1.$2X_2 = this.$$d_$5o_2;
        $p1.$1v_2 = this;
        if ($p0 < 0) {
            this.appendHtmlElement($p1);
        }
        else {
            this.insertHtmlElementAt($p0, $p1);
        }
        Array.add(this.$A_2, $p1);
    },
    valueEqualsState: function SP_Storefront_ListElement$valueEqualsState($p0) {
        return SP.Storefront.StorefrontState.valueEqualsStateWithDefault(this.stateParamKey, $p0, this.defaultValueId);
    },
    changeSelectedToMatchState: function SP_Storefront_ListElement$changeSelectedToMatchState() {
        var $v_0 = SP.ScriptUtility.emptyString;
        var $v_1 = SP.Storefront.StorefrontState.getStateParam(this.stateParamKey);

        if (!SP.ScriptUtility.isNullOrUndefined(this.selected)) {
            $v_0 = this.selected.get_valueId();
        }
        if ($v_1 !== $v_0) {
            $v_1 = this.tryUpdateSelectedWithStateValue();
        }
        return $v_1;
    },
    tryUpdateSelectedWithStateValue: function SP_Storefront_ListElement$tryUpdateSelectedWithStateValue() {
        var $v_0 = SP.Storefront.StorefrontState.getStateParam(this.stateParamKey);

        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = this.defaultValueId;
        }
        return this.tryUpdateSelectedWithValueId($v_0);
    },
    tryUpdateSelectedWithValueId: function SP_Storefront_ListElement$tryUpdateSelectedWithValueId($p0) {
        var $v_0;
        var $$t_2, $$t_3;

        if ($$t_3 = this.updateSelectedWithValueId($p0, $$t_2 = {
            'val': $v_0
        }), $v_0 = $$t_2.val, $$t_3) {
            return $v_0;
        }
        return this.selectFirst(false);
    },
    updateSelectedWithValueId: function SP_Storefront_ListElement$updateSelectedWithValueId($p0, $p1) {
        var $v_0;
        var $$t_3, $$t_4;

        if ($$t_4 = this.$46_2($p0, $$t_3 = {
            'val': $v_0
        }, $p1), $v_0 = $$t_3.val, $$t_4) {
            this.updateSelected($v_0, false);
            return true;
        }
        $p1.val = SP.ScriptUtility.emptyString;
        return false;
    },
    setDisplayAttributeForListItemWithValueId: function SP_Storefront_ListElement$setDisplayAttributeForListItemWithValueId($p0, $p1) {
        var $v_0;
        var $v_1;
        var $$t_4, $$t_5, $$t_6;

        if ($$t_6 = this.$46_2($p0, $$t_4 = {
            'val': $v_0
        }, $$t_5 = {
            'val': $v_1
        }), $v_0 = $$t_4.val, $v_1 = $$t_5.val, $$t_6) {
            $v_0.set_notDisplayed($p1);
        }
    },
    selectFirst: function SP_Storefront_ListElement$selectFirst($p0) {
        if (this.$A_2.length > 0) {
            var $v_0 = this.$A_2[0];

            this.updateSelected($v_0, $p0);
            return $v_0.get_valueId();
        }
        return SP.ScriptUtility.emptyString;
    },
    updateSelected: function SP_Storefront_ListElement$updateSelected($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.selected)) {
            if (!SP.ScriptUtility.isNullOrUndefined($p0) && $p0.elementObject === this.selected.elementObject) {
                return;
            }
            else {
                this.selected.deselectAction();
            }
        }
        var $v_0 = this.selected;

        this.selected = $p0;
        if (!SP.ScriptUtility.isNullOrUndefined(this.selected)) {
            this.selected.selectAction();
        }
        if (!$p1) {
            return;
        }
        var $v_1 = new SP.Storefront.ListItemSelectionChangedEventArgs();

        $v_1.prevListItem = $v_0;
        $v_1.newListItem = this.selected;
        var $v_2 = (this.get_events()).getHandler('__ListItemSelectionChanged');

        if (!SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2(this, $v_1);
        }
    },
    updateHighlighted: function SP_Storefront_ListElement$updateHighlighted($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.highlighted)) {
            if (!SP.ScriptUtility.isNullOrUndefined($p0) && $p0.elementObject === this.selected.elementObject) {
                return;
            }
            else {
                this.highlighted.unHighlightAction();
            }
        }
        this.highlighted = $p0;
        if (this.highlighted) {
            this.highlighted.highlightAction();
        }
    },
    clearList: function SP_Storefront_ListElement$clearList() {
        var $v_0 = this.elementObject.children.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            this.elementObject.removeChild(this.elementObject.children[0]);
        }
        Array.clear(this.$A_2);
        this.selected = null;
        this.highlighted = null;
    },
    getItemIndex: function SP_Storefront_ListElement$getItemIndex($p0) {
        var $v_0 = this.$A_2.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$A_2[$v_1];

            if ($v_2 === $p0) {
                return $v_1;
            }
        }
        return -1;
    },
    focus: function SP_Storefront_ListElement$focus() {
        if (this.$A_2.length > 0) {
            var $v_0 = this.$A_2[0];

            $v_0.focus();
        }
        else {
            SP.Storefront.HtmlElement.prototype.focus.call(this);
        }
    },
    $5o_2: function SP_Storefront_ListElement$$5o_2($p0) {
        var $v_0 = new SP.Storefront.ListItemFocusedEventArgs();

        $v_0.focusedItem = $p0;
        var $v_1 = (this.get_events()).getHandler('__ListItemFocusedChanged');

        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1(this, $v_0);
        }
    },
    $46_2: function SP_Storefront_ListElement$$46_2($p0, $p1, $p2) {
        var $v_0 = this.$A_2.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            $p1.val = this.$A_2[$v_1];
            var $v_2 = $p1.val.get_valueId() === $p0;

            if (!$v_2 && SP.Storefront.SubListListItem.isInstanceOfType($p1.val)) {
                var $v_3 = $p1.val;

                if ($v_3.updateSelectedWithValueId($p0, $p2)) {
                    $v_2 = true;
                }
            }
            if ($v_2) {
                $p2.val = $p1.val.get_valueId();
                return true;
            }
        }
        $p1.val = null;
        $p2.val = SP.ScriptUtility.emptyString;
        return false;
    }
};
SP.Storefront.ControlsListElement = function SP_Storefront_ControlsListElement() {
    this.$O_2 = SP.ScriptUtility.emptyString;
    SP.Storefront.ControlsListElement.initializeBase(this);
    this.initElementObject('div', 'idStorefrontList', null, SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString);
};
SP.Storefront.ControlsListElement.prototype = {
    get_listTypeId: function SP_Storefront_ControlsListElement$get_listTypeId() {
        return this.$O_2;
    },
    set_listTypeId: function SP_Storefront_ControlsListElement$set_listTypeId($p0) {
        this.$O_2 = SP.ScriptUtility.isNullOrEmptyString($p0) ? SP.ScriptUtility.emptyString : $p0;
        this.elementObject.id = 'idStorefrontList' + this.$O_2;
        return $p0;
    },
    addChild: function SP_Storefront_ControlsListElement$addChild($p0) {
        return this.insertChildAt(SP.Storefront.StorefrontApp.insertAtEndIndex, $p0);
    },
    insertChildAt: function SP_Storefront_ControlsListElement$insertChildAt($p0, $p1) {
        var $v_0 = new SP.Storefront.HtmlElement();

        $v_0.initElementObject('div', 'idStorefrontListItem', null, SP.ScriptUtility.emptyString, 'ms-storefront-float');
        $v_0.appendChild($p1);
        if ($p0 < 0) {
            this.appendHtmlElement($v_0);
        }
        else {
            this.insertHtmlElementAt($p0, $v_0);
        }
        return $v_0;
    }
};
SP.Storefront.StateControlledList = function SP_Storefront_StateControlledList() {
    this.stateParamKey = SP.ScriptUtility.emptyString;
    this.defaultValueId = SP.ScriptUtility.emptyString;
    this.$A_0 = {};
};
SP.Storefront.StateControlledList.$$ = function SP_Storefront_StateControlledList$$$($p0) {
    var $$cn = 'StateControlledList' + '$1' + '$' + ($p0.getName()).replace(/\./g, '_');

    if (!SP.Storefront[$$cn]) {
        var $$ccr = SP.Storefront[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['SP.Storefront.StateControlledList'] = {
                'T': $p0
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.Storefront.StateControlledList.apply(this, $v_0);
        };

        $$ccr.registerClass('SP.Storefront.' + $$cn);
        var $$dict_5 = SP.Storefront.StateControlledList.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.Storefront[$$cn];
};
SP.Storefront.StateControlledList.prototype = {
    get_selected: function SP_Storefront_StateControlledList$get_selected() {
        return this.$A_0[this.$20_0];
    },
    get_selectedId: function SP_Storefront_StateControlledList$get_selectedId() {
        return this.$20_0;
    },
    $20_0: null,
    addOrUpdateListItem: function SP_Storefront_StateControlledList$addOrUpdateListItem($p0, $p1) {
        this.$A_0[$p0] = $p1;
    },
    selectedEqualsState: function SP_Storefront_StateControlledList$selectedEqualsState() {
        return SP.Storefront.StorefrontState.valueEqualsStateWithDefault(this.stateParamKey, this.$20_0, this.defaultValueId);
    },
    valueEqualsState: function SP_Storefront_StateControlledList$valueEqualsState($p0) {
        return SP.Storefront.StorefrontState.valueEqualsStateWithDefault(this.stateParamKey, $p0, this.defaultValueId);
    },
    tryUpdateSelectedWithStateValue: function SP_Storefront_StateControlledList$tryUpdateSelectedWithStateValue() {
        var $v_0 = SP.Storefront.StorefrontState.getStateParam(this.stateParamKey);

        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = this.defaultValueId;
        }
        return this.tryUpdateSelectedWithValueId($v_0);
    },
    tryUpdateSelectedWithValueId: function SP_Storefront_StateControlledList$tryUpdateSelectedWithValueId($p0) {
        var $v_0;
        var $$t_2, $$t_3;

        if ($$t_3 = this.updateSelectedWithValueId($p0, $$t_2 = {
            'val': $v_0
        }), $v_0 = $$t_2.val, $$t_3) {
            return $v_0;
        }
        this.$20_0 = this.defaultValueId;
        return this.defaultValueId;
    },
    updateSelectedWithValueId: function SP_Storefront_StateControlledList$updateSelectedWithValueId($p0, $p1) {
        if (!($p0 in this.$A_0)) {
            $p1.val = SP.ScriptUtility.emptyString;
            return false;
        }
        this.$20_0 = ($p1.val = $p0);
        return true;
    }
};
SP.Storefront.ListItemElement = function SP_Storefront_ListItemElement() {
    this.$X_2 = SP.ScriptUtility.emptyString;
    SP.Storefront.ListItemElement.initializeBase(this);
    this.initElementObject('li', 'idStorefrontListItem', null, SP.ScriptUtility.emptyString, 'ms-storefront-listitem');
    this.elementObject.setAttribute('role', 'option');
};
SP.Storefront.ListItemElement.prototype = {
    get_isSelected: function SP_Storefront_ListItemElement$get_isSelected() {
        return this.selected;
    },
    set_isSelected: function SP_Storefront_ListItemElement$set_isSelected($p0) {
        if (this.selected !== $p0) {
            if ($p0) {
                this.$1a_2(this, true);
            }
            else {
                this.$1a_2(null, true);
            }
        }
        return $p0;
    },
    selected: false,
    get_isHighlighted: function SP_Storefront_ListItemElement$get_isHighlighted() {
        return this.$2H_2;
    },
    set_isHighlighted: function SP_Storefront_ListItemElement$set_isHighlighted($p0) {
        if (this.$2H_2 !== $p0) {
            if ($p0) {
                this.$25_2(this);
            }
            else {
                this.$25_2(null);
            }
        }
        return $p0;
    },
    $2H_2: false,
    get_valueId: function SP_Storefront_ListItemElement$get_valueId() {
        return this.$X_2;
    },
    set_valueId: function SP_Storefront_ListItemElement$set_valueId($p0) {
        this.$X_2 = $p0;
        return $p0;
    },
    get_updateHighlightedDelegate: function SP_Storefront_ListItemElement$get_updateHighlightedDelegate() {
        return this.$25_2;
    },
    set_updateHighlightedDelegate: function SP_Storefront_ListItemElement$set_updateHighlightedDelegate($p0) {
        this.$25_2 = $p0;
        return $p0;
    },
    $25_2: null,
    get_updateSelectedDelegate: function SP_Storefront_ListItemElement$get_updateSelectedDelegate() {
        return this.$1a_2;
    },
    set_updateSelectedDelegate: function SP_Storefront_ListItemElement$set_updateSelectedDelegate($p0) {
        this.$1a_2 = $p0;
        return $p0;
    },
    $1a_2: null,
    get_updateFocusedDelegate: function SP_Storefront_ListItemElement$get_updateFocusedDelegate() {
        return this.$2X_2;
    },
    set_updateFocusedDelegate: function SP_Storefront_ListItemElement$set_updateFocusedDelegate($p0) {
        this.$2X_2 = $p0;
        return $p0;
    },
    $2X_2: null,
    get_selectedCssClass: function SP_Storefront_ListItemElement$get_selectedCssClass() {
        return this.$R_2;
    },
    set_selectedCssClass: function SP_Storefront_ListItemElement$set_selectedCssClass($p0) {
        this.changeCssClass(this.$R_2, $p0, false);
        this.$R_2 = $p0;
        return $p0;
    },
    $R_2: null,
    get_highlightCssClass: function SP_Storefront_ListItemElement$get_highlightCssClass() {
        return this.$N_2;
    },
    set_highlightCssClass: function SP_Storefront_ListItemElement$set_highlightCssClass($p0) {
        this.changeCssClass(this.$N_2, $p0, true);
        this.$N_2 = $p0;
        return $p0;
    },
    $N_2: null,
    disableHightlightOnSelect: false,
    get_parentList: function SP_Storefront_ListItemElement$get_parentList() {
        return this.$1v_2;
    },
    set_parentList: function SP_Storefront_ListItemElement$set_parentList($p0) {
        this.$1v_2 = $p0;
        return $p0;
    },
    $1v_2: null,
    deselectAction: function SP_Storefront_ListItemElement$deselectAction() {
        if (this.get_isSelected()) {
            this.selected = false;
            this.removeCssClass(this.get_selectedCssClass());
            this.elementObject.removeAttribute('aria-selected');
            if (this.disableHightlightOnSelect) {
                this.addCssClass(this.get_highlightCssClass());
            }
        }
    },
    selectAction: function SP_Storefront_ListItemElement$selectAction() {
        if (!this.get_isSelected()) {
            this.selected = true;
            this.addCssClass(this.get_selectedCssClass());
            this.elementObject.setAttribute('aria-selected', 'true');
            if (this.disableHightlightOnSelect) {
                this.removeCssClass(this.get_highlightCssClass());
            }
        }
    },
    unHighlightAction: function SP_Storefront_ListItemElement$unHighlightAction() {
        this.$2H_2 = false;
    },
    highlightAction: function SP_Storefront_ListItemElement$highlightAction() {
        this.$2H_2 = true;
    },
    containedWithinListItem: function SP_Storefront_ListItemElement$containedWithinListItem($p0) {
        while (!SP.ScriptUtility.isNullOrUndefined($p0)) {
            if (!SP.ScriptUtility.isNullOrUndefined(this.$1v_2) && $p0.id === this.$1v_2.elementObject.id) {
                break;
            }
            if ($p0 === this.elementObject) {
                return true;
            }
            $p0 = $p0.parentNode;
        }
        return false;
    }
};
SP.Storefront.MouseDrivenListItem = function SP_Storefront_MouseDrivenListItem($p0) {
    SP.Storefront.MouseDrivenListItem.initializeBase(this);
    this.set_valueId($p0);
    this.set_selectedCssClass('ms-storefront-selected');
    this.set_highlightCssClass('ms-storefront-highlight');
    this.elementObject.id = 'idStorefrontLabelItem';
    this.setupAccessibleAnchor();
};
SP.Storefront.MouseDrivenListItem.prototype = {
    onMouseClick: function SP_Storefront_MouseDrivenListItem$onMouseClick($p0) {
        if (!this.get_disabled()) {
            this.set_isSelected(true);
            $p0.preventDefault();
        }
    },
    onMouseOver: function SP_Storefront_MouseDrivenListItem$onMouseOver($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.rawEvent.fromElement;

        if (this.containedWithinListItem($v_0)) {
            return;
        }
        this.set_isHighlighted(true);
    },
    onMouseOut: function SP_Storefront_MouseDrivenListItem$onMouseOut($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.rawEvent.toElement;

        if (this.containedWithinListItem($v_0)) {
            return;
        }
        this.set_isHighlighted(false);
    },
    onFocus: function SP_Storefront_MouseDrivenListItem$onFocus($p0) {
        this.$2X_2(this);
    }
};
SP.Storefront.SubListListItem = function SP_Storefront_SubListListItem() {
    this.$$d_$5e_3 = Function.createDelegate(this, this.$5e_3);
    SP.Storefront.SubListListItem.initializeBase(this);
    this.set_valueId('none');
    this.elementObject.id = 'idStorefrontSubListListItem';
    this.removeCssClass('ms-storefront-listitem');
    this.elementObject.removeAttribute('role');
    this.subList = new SP.Storefront.ListElement();
    this.subList.add_listItemSelectionChanged(this.$$d_$5e_3);
    this.subList.addHiddenListItem('none');
    this.subList.elementObject.setAttribute('role', 'group');
    this.appendHtmlElement(this.subList);
};
SP.Storefront.SubListListItem.prototype = {
    subList: null,
    updateSelectedWithValueId: function SP_Storefront_SubListListItem$updateSelectedWithValueId($p0, $p1) {
        if (this.subList.updateSelectedWithValueId($p0, $p1)) {
            this.set_valueId($p1.val);
            return true;
        }
        return false;
    },
    deselectAction: function SP_Storefront_SubListListItem$deselectAction() {
        this.subList.tryUpdateSelectedWithValueId('none');
    },
    selectAction: function SP_Storefront_SubListListItem$selectAction() {
        this.subList.tryUpdateSelectedWithValueId(this.get_valueId());
    },
    $5e_3: function SP_Storefront_SubListListItem$$5e_3($p0, $p1) {
        if (this.get_valueId() !== $p1.newListItem.get_valueId() || !this.get_isSelected()) {
            this.set_valueId(this.subList.selected.get_valueId());
            this.$1a_2(null, false);
            this.set_isSelected(true);
        }
    }
};
SP.Storefront.ManagementView = function SP_Storefront_ManagementView() {
    this.$$d_$4A_3 = Function.createDelegate(this, this.$4A_3);
    this.$$d_$5Y_3 = Function.createDelegate(this, this.$5Y_3);
    this.$$d_$3H_3 = Function.createDelegate(this, this.$3H_3);
    this.$$d_$4R_3 = Function.createDelegate(this, this.$4R_3);
    this.$$d_$41_3 = Function.createDelegate(this, this.$41_3);
    SP.Storefront.ManagementView.initializeBase(this);
    this.elementObject.id += 'ManagementView';
    this.header.showSearchBox = true;
    this.header.showOfficeMarketDropdowns = false;
    this.header.showTopLinks = false;
    this.$4q_3();
    this.$1J_3 = document.createElement('a');
    Sys.UI.DomElement.addCssClass(this.$1J_3, 'ms-accessible');
    this.$1J_3.tabIndex = -1;
    SP.UI.UIUtility.setInnerText(this.$1J_3, SP.Res.storefront_MyAppsFilter_Entitled);
    this.insertElementAt(0, this.$1J_3);
    this.$4n_3();
    this.$4p_3();
    this.spProxy.add_getAppsCompleted(this.$$d_$41_3);
    this.postConstruction();
};
SP.Storefront.ManagementView.$4a = function SP_Storefront_ManagementView$$4a($p0, $p1, $p2, $p3) {
    var $v_0 = SP.Utilities.LocUtility.getLocalizedCountValue($p0, $p1, $p2);

    if (2 <= $p2 && $p2 < 100) {
        $v_0 = String.format($v_0, SP.Storefront.StorefrontApp.getAnchorStartTag($p3), '</a>', $p2);
    }
    else if ($p2) {
        $v_0 = String.format($v_0, SP.Storefront.StorefrontApp.getAnchorStartTag($p3), '</a>');
    }
    return $v_0;
};
SP.Storefront.ManagementView.prototype = {
    $H_3: null,
    $6_3: null,
    $1L_3: null,
    $G_3: null,
    $y_3: null,
    $1J_3: null,
    $2A_3: null,
    $3_3: null,
    get_$30_3: function SP_Storefront_ManagementView$get_$30_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$2M_3)) {
            this.$2M_3 = $get('idStorefrontManagementLeftNavBar');
            Sys.UI.DomElement.addCssClass(this.$2M_3, 'ms-core-sideNavBox-removeLeftMargin');
        }
        return this.$2M_3;
    },
    $2M_3: null,
    get_$57_3: function SP_Storefront_ManagementView$get_$57_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$32_3)) {
            this.$32_3 = $get('ms-pageTitleCurrentNode');
        }
        return this.$32_3;
    },
    $32_3: null,
    $C_3: null,
    $c_3: null,
    $E_3: 0,
    $4L_3: '0',
    $3X_3: null,
    $18_3: null,
    $2i_3: null,
    $2j_3: null,
    $L_3: null,
    $1o_3: false,
    $2G_3: true,
    $1y_3: 0,
    $23_3: null,
    updateUI: function SP_Storefront_ManagementView$updateUI($p0) {
        SP.Storefront.BaseView.prototype.updateUI.call(this, $p0);
        this.$3_3.updateLayout();
        this.$C_3.set_notDisplayed(true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1L_3, true);
        this.$G_3.set_notDisplayed(true);
        this.$H_3.set_notDisplayed(true);
        this.$3_3.hide(2);
        this.$3_3.hide(1);
        this.$3_3.setMiddleText(SP.ScriptUtility.emptyString);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.get_$30_3(), false);
        if (!SP.ScriptUtility.isNullOrUndefined(this.$y_3)) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$y_3, true);
            SP.Storefront.HtmlElement.clearChildren(this.$y_3);
        }
        if ($p0 || !this.$6_3.valueEqualsState(this.$E_3.toString()) || SP.ScriptUtility.isNullOrUndefined(this.$L_3) || !this.$G_3.valueEqualsState(this.$3X_3) || !SP.Storefront.StorefrontState.valueEqualsState('qry', this.$18_3)) {
            this.$2Y_3();
        }
        else {
            this.$6_3.tryUpdateSelectedWithValueId(this.$E_3.toString());
            this.$3w_3();
            this.$H_3.updateHighlighted(null);
            this.$H_3.updateSelected(null, false);
            this.$C_3.itemList.updateHighlighted(null);
            this.$C_3.itemList.updateSelected(null, false);
        }
    },
    cleanUpState: function SP_Storefront_ManagementView$cleanUpState() {
        SP.Storefront.BaseView.prototype.cleanUpState.call(this);
        this.$6_3.tryUpdateSelectedWithValueId('none');
        SP.Storefront.StorefrontState.setStateParam('mcg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('srt', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('qry', SP.ScriptUtility.emptyString);
    },
    checkAndShowError: function SP_Storefront_ManagementView$checkAndShowError($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.get_$30_3(), true);
        }
        return SP.Storefront.BaseView.prototype.checkAndShowError.call(this, $p0);
    },
    focus: function SP_Storefront_ManagementView$focus() {
        this.$1J_3.focus();
    },
    $2Y_3: function SP_Storefront_ManagementView$$2Y_3() {
        var $v_0 = this.$6_3.changeSelectedToMatchState();
        var $v_1 = SP.Storefront.StorefrontApp.parseMyAppsCatalogType($v_0);
        var $v_2 = this.$G_3.changeSelectedToMatchState();

        this.header.searchBoxControl.changeToMatchState();
        var $v_3 = SP.Storefront.StorefrontState.getStateParam('qry');

        this.$H_3.clearList();
        var $v_4 = [];

        Array.addRange($v_4, [$v_1, $v_2, $v_3]);
        this.spProxy.beginGetMyApps($v_1, $v_3, $v_2, $v_4);
        if (SP.ScriptUtility.isNullOrEmptyString($v_3) && (!$v_1 && SP.ScriptUtility.isNullOrUndefined(this.$2i_3) || $v_1 === 2 && SP.ScriptUtility.isNullOrUndefined(this.$2j_3))) {
            var $v_5 = !$v_1;

            this.spProxy.beginGetMyNewApps($v_1, $v_5);
        }
    },
    $3w_3: function SP_Storefront_ManagementView$$3w_3() {
        this.$1o_3 = !SP.ScriptUtility.isNullOrEmptyString(this.$18_3);
        this.$2G_3 = !SP.ScriptUtility.isNullOrUndefined(this.$L_3) && this.$L_3.length > 0;
        this.$5P_3();
        this.$3B_3();
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$23_3)) {
            SP.UI.Status.removeStatus(this.$23_3);
            this.$23_3 = null;
        }
        SP.Storefront.HtmlElement.setOpacity(this.$c_3, 0);
        var $v_0 = new SPAnimation.State();

        $v_0.SetAttribute(5, 1);
        var $v_1 = new SPAnimation.Object(15, 0, this.$c_3, $v_0, null, null);

        $v_1.RunAnimation();
        if (this.$2G_3) {
            this.$G_3.set_notDisplayed(false);
            this.$H_3.set_notDisplayed(false);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$2A_3, false);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$3_3.elementObject, false);
            this.$4L_3 = this.$2e_3();
            this.focus();
            return;
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$y_3, false);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$2A_3, true);
        var $v_2 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-middle');
        this.$y_3.appendChild($v_2);
        var $v_3 = document.createElement('h3');

        Sys.UI.DomElement.addCssClass($v_3, 'ms-storefront-mngnoresultstitle');
        $v_2.appendChild($v_3);
        var $v_4 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-hugmainmsg');
        $v_2.appendChild($v_4);
        this.$5Q_3($v_3, $v_4);
    },
    $3B_3: function SP_Storefront_ManagementView$$3B_3() {
        if (!this.$C_3.get_notDisplayed()) {
            return;
        }
        var $v_0 = null;

        switch (this.$E_3) {
        case 0:
            $v_0 = this.$2i_3;
            break;
        case 2:
            $v_0 = this.$2j_3;
            break;
        }
        if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0.length <= 0 || this.$1o_3) {
            return;
        }
        this.$C_3.set_notDisplayed(false);
        var $v_1 = Math.min(8, $v_0.length);

        this.$C_3.itemList.clearList();
        for (var $v_4 = 0; $v_4 < $v_1; $v_4++) {
            if (SP.Storefront.SPAppMetadata.isInstanceOfType($v_0[$v_4])) {
                var $v_5 = new SP.Storefront.MyAppIcon($v_0[$v_4], 2);

                $v_5.elementObject.id += this.$H_3.get_listTypeId();
                this.$C_3.itemList.addListItem($v_5);
                $v_5.updateLayout();
            }
        }
        this.$C_3.updateLayout();
        SP.Storefront.HtmlElement.setOpacity(this.$C_3.elementObject, 0);
        var $v_2 = new SPAnimation.State();

        $v_2.SetAttribute(5, 1);
        var $v_3 = new SPAnimation.Object(15, 0, this.$C_3.elementObject, $v_2, null, null);

        $v_3.RunAnimation();
    },
    $2e_3: function SP_Storefront_ManagementView$$2e_3() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$L_3)) {
            return SP.ScriptUtility.emptyString;
        }
        var $v_0;
        var $v_1 = this.$L_3.length;

        if ($v_1 >= 241) {
            this.$23_3 = SP.UI.Status.addStatus(SP.ScriptUtility.emptyString, SP.Res.storefront_MyAppsNoResults_TooManyToShow, true);
            SP.UI.Status.setStatusPriColor(this.$23_3, 'yellow');
            $v_1 = 240;
        }
        var $$t_9, $$t_A;
        var $v_2 = ($$t_A = SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage($v_1, 16, $$t_9 = {
            'val': $v_0
        }), $v_0 = $$t_9.val, $$t_A);

        this.$H_3.clearList();
        if (!$v_1) {
            var $v_6 = document.createElement('span');

            SP.UI.UIUtility.setInnerText($v_6, SP.Res.storefront_Gallery_NoResults);
            this.$H_3.addChild($v_6);
        }
        var $v_3 = $v_2 * 16;
        var $v_4 = Math.min($v_3 + 16, $v_1);

        for (var $v_7 = $v_3; $v_7 < $v_4; $v_7++) {
            if (SP.Storefront.SPAppMetadata.isInstanceOfType(this.$L_3[$v_7])) {
                var $v_8 = new SP.Storefront.MyAppIcon(this.$L_3[$v_7], this.getAppIconType());

                $v_8.elementObject.id += this.$H_3.get_listTypeId();
                this.$H_3.addListItem($v_8);
                $v_8.updateLayout();
            }
        }
        var $v_5 = false;

        if ($v_2 > 0) {
            this.$3_3.enable(1);
            $v_5 = true;
        }
        if (!$v_0) {
            this.$3_3.enable(2);
            $v_5 = true;
        }
        if ($v_5) {
            this.$3_3.setMiddleText(String.format(SP.Storefront.StorefrontApp.get_isRTL() ? '{1} - {0}' : '{0} - {1}', $v_3 + 1, $v_4));
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$3_3.elementObject, false);
        }
        return $v_2.toString();
    },
    $4q_3: function SP_Storefront_ManagementView$$4q_3() {
        var $v_0 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_0, 'ms-core-listMenu-verticalBox');
        this.$6_3 = new SP.Storefront.ListElement();
        this.$6_3.addCssClass('ms-core-listMenu-root');
        this.$6_3.disableHightlightOnSelect = true;
        this.$6_3.set_isStatic(true);
        this.$6_3.set_listTypeId('ManageFilter');
        this.$6_3.stateParamKey = 'mcg';
        this.$6_3.defaultValueId = (0).toString();
        this.$6_3.add_listItemSelectionChanged(this.$$d_$4R_3);
        this.$6_3.$N_2 = SP.ScriptUtility.emptyString;
        this.$6_3.$R_2 = 'ms-core-listMenu-selected';
        $v_0.appendChild(this.$6_3.elementObject);
        this.$6_3.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_Entitled, (1).toString(), true, false, 'ms-core-listMenu-item');
        var $v_1 = new SP.Storefront.SubListListItem();

        $v_1.subList.disableHightlightOnSelect = true;
        $v_1.subList.set_listTypeId('ManageFilter');
        this.$6_3.addListItem($v_1);
        $v_1.subList.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_EntitledFiltered, (0).toString(), true, false, 'ms-core-listMenu-item');
        if (SP.Storefront.StorefrontContext.get_isCorporateCatalogOn()) {
            $v_1.subList.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_CorporateFull, (2).toString(), true, false, 'ms-core-listMenu-item');
        }
        this.$6_3.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_Manageable, (3).toString(), true, false, 'ms-core-listMenu-item');
        this.$6_3.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_Requests, (4).toString(), true, false, 'ms-core-listMenu-item');
        this.$6_3.addDivider();
        this.$6_3.addLabelStyleOption(SP.Res.storefront_MyAppsFilter_Marketplace, 'none', true, false, 'ms-core-listMenu-item');
        this.$6_3.addHiddenListItem('none');
        this.$6_3.tryUpdateSelectedWithStateValue();
        (this.get_$30_3()).appendChild($v_0);
    },
    $4n_3: function SP_Storefront_ManagementView$$4n_3() {
        this.$C_3 = new SP.Storefront.Carousel(184, 4);
        this.$C_3.elementObject.id += (SP.Guid.newGuid()).toString();
        this.$C_3.itemList.add_listItemSelectionChanged(this.$$d_$3H_3);
        this.$C_3.set_title(SP.Res.storefront_MyAppsNewApps_Title);
        this.$C_3.addTitleStyle('ms-storefront-mngsubtitle');
        this.$C_3.addTitleStyle('ms-webpart-titleText');
        this.appendHtmlElement(this.$C_3);
    },
    $4p_3: function SP_Storefront_ManagementView$$4p_3() {
        this.$c_3 = document.createElement('div');
        this.$c_3.id = (SP.Guid.newGuid()).toString();
        this.appendChild(this.$c_3);
        var $v_0 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-mngsubtitle');
        this.$c_3.appendChild($v_0);
        var $v_1 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_1, 'ms-tableRow');
        $v_0.appendChild($v_1);
        this.$1L_3 = document.createElement('span');
        Sys.UI.DomElement.addCssClass(this.$1L_3, 'ms-webpart-titleText');
        Sys.UI.DomElement.addCssClass(this.$1L_3, 'ms-tableCell');
        $v_1.appendChild(this.$1L_3);
        this.$G_3 = new SP.Storefront.ListElement();
        this.$G_3.addCssClass('ms-storefront-mngsortlist');
        this.$G_3.disableHightlightOnSelect = true;
        this.$G_3.set_listTypeId('ManageSorts');
        this.$G_3.stateParamKey = 'srt';
        this.$G_3.defaultValueId = '1';
        this.$G_3.addLabel(SP.Res.storefront_MyAppsSorts_Date, '1');
        this.$G_3.addLabel(SP.Res.storefront_MyAppsSorts_Name, '0');
        $v_1.appendChild(this.$G_3.elementObject);
        this.$G_3.add_listItemSelectionChanged(this.$$d_$5Y_3);
        this.$G_3.tryUpdateSelectedWithStateValue();
        this.$H_3 = new SP.Storefront.ListElement();
        this.$H_3.set_listTypeId('MyAppIcons');
        this.$c_3.appendChild(this.$H_3.elementObject);
        this.$H_3.add_listItemSelectionChanged(this.$$d_$3H_3);
        this.$2A_3 = SP.Storefront.HtmlElement.createClearDiv();
        this.$c_3.appendChild(this.$2A_3);
        this.$3_3 = new SP.Storefront.PagingControlsWrapper('idPagingControl');
        this.$c_3.appendChild(this.$3_3.elementObject);
        this.$3_3.add_pageButtonClicked(this.$$d_$4A_3);
        this.$3_3.addCssClass('ms-storefront-paging');
        this.$y_3 = document.createElement('div');
        Sys.UI.DomElement.addCssClass(this.$y_3, 'ms-storefront-mngnoresults');
        this.$c_3.appendChild(this.$y_3);
    },
    $5P_3: function SP_Storefront_ManagementView$$5P_3() {
        var $v_0 = SP.ScriptUtility.emptyString;
        var $v_1 = SP.ScriptUtility.emptyString;
        var $v_2 = SP.ScriptUtility.isNullOrUndefined(this.$L_3) ? 0 : this.$L_3.length;
        var $v_3 = SP.Utilities.LocUtility.getLocalizedCountValue(SP.Res.storefront_MyApps_SearchResults, SP.Res.storefront_MyApps_SearchResultsIntervals, $v_2);

        if (2 <= $v_2 && $v_2 < 100) {
            $v_3 = String.format($v_3, $v_2);
        }
        if (this.$E_3 === 3) {
            $v_0 = SP.Res.storefront_MyAppsFilter_Manageable;
        }
        else if (this.$E_3 === 2 || this.$E_3 === 1 || !this.$E_3) {
            $v_0 = SP.Res.storefront_MyAppsFilter_Entitled;
        }
        else {
            $v_0 = SP.Res.storefront_MyAppsFilter_Requests;
        }
        if (this.$1o_3 && this.$2G_3) {
            $v_1 = $v_3;
        }
        else if (this.$2G_3) {
            switch (this.$E_3) {
            case 0:
            default:
                $v_1 = SP.Res.storefront_MyAppsSubTitle_Entitled;
                break;
            case 2:
                $v_1 = SP.Res.storefront_MyAppsSubTitle_CorporateFull;
                break;
            case 1:
                $v_1 = SP.Res.storefront_MyAppsSubTitle_EntitledAll;
                break;
            case 3:
                $v_1 = SP.Res.storefront_MyAppsSubTitle_Manageable;
                break;
            case 4:
                $v_1 = SP.Res.storefront_MyAppsSubTitle_Requests;
                break;
            }
        }
        SP.UI.UIUtility.setInnerText(this.get_$57_3(), $v_0);
        SP.UI.UIUtility.setInnerText(this.$1J_3, $v_0);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1L_3, SP.ScriptUtility.isNullOrEmptyString($v_1));
        SP.UI.UIUtility.setInnerText(this.$1L_3, $v_1);
    },
    $5Q_3: function SP_Storefront_ManagementView$$5Q_3($p0, $p1) {
        var $v_0 = SP.ScriptUtility.emptyString;
        var $v_1 = SP.ScriptUtility.emptyString;

        Sys.UI.DomElement.addCssClass($p0, 'ms-storefront-link');
        Sys.UI.DomElement.addCssClass($p1, 'ms-storefront-link');
        if (this.$1o_3 && this.$1y_3 > 0) {
            $v_0 = SP.Storefront.ManagementView.$4a(SP.Res.storefront_MyApps_MarketplaceSearchResults, SP.Res.storefront_MyApps_MarketplaceSearchResultsIntervals, this.$1y_3, this.$1B_3(this.$18_3));
            if (this.$E_3 !== 1) {
                $v_1 = String.format(SP.Res.storefront_MyAppsCorporate_Message, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$2p_3(1, this.$18_3)), '</a>');
            }
        }
        else if (this.$1y_3 < 0) {
            switch (this.$E_3) {
            case 1:
            case 0:
            default:
                $v_0 = SP.Res.storefront_MyAppsNoResults_TooManyToSearch;
                var $v_2 = SP.Storefront.StorefrontApp.getAnchorStartTag(this.$2p_3(2, null));

                $v_1 = String.format(SP.Res.storefront_MyAppsCorporate_ShowAllTrySearching, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$1B_3(null)), '</a>', $v_2);
                break;
            case 3:
                $v_0 = SP.Res.storefront_MyAppsManageable_TooManyToSearch;
                $v_1 = String.format(SP.Res.storefront_MyAppsCorporate_ManageTrySearching, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$1B_3(null)), '</a>');
                break;
            case 2:
                $v_0 = SP.Res.storefront_MyAppsCorporate_TooManyToSearch;
                $v_1 = SP.Res.storefront_MyAppsCorporate_RemoveUnusedApps;
                break;
            case 4:
                $v_0 = SP.Res.storefront_AppRequests_TooManyToSearch;
                $v_1 = SP.Res.storefront_AppRequests_HideRequests;
                break;
            }
        }
        else if (this.$1o_3) {
            $v_0 = String.format(SP.Res.storefront_MyAppsNoResults_TryMarketplace, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$1B_3(this.$18_3)), '</a>');
            if (this.$E_3 !== 1) {
                $v_1 = String.format(SP.Res.storefront_MyAppsCorporate_Message, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$2p_3(1, this.$18_3)), '</a>');
            }
        }
        else if (this.$E_3 === 2) {
            $v_0 = String.format(SP.Res.storefront_MyAppsNoResults_Message, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$1B_3(null)), '</a>');
        }
        else {
            $v_0 = String.format(SP.Res.storefront_MyAppsNoResults_NoAppsTitle, SP.Storefront.StorefrontApp.getAnchorStartTag(this.$1B_3(null)), '</a>');
        }
        SP.Storefront.HtmlElement.setInnerHTML($v_0, $p0);
        SP.Storefront.HtmlElement.setInnerHTML($v_1, $p1);
    },
    $2f_3: function SP_Storefront_ManagementView$$2f_3($p0) {
        return SP.ScriptUtility.isNullOrUndefined($p0) || $p0.length <= 0 ? [] : Array.clone($p0);
    },
    $1B_3: function SP_Storefront_ManagementView$$1B_3($p0) {
        var $v_0 = SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();
        var $v_1 = SP.ScriptUtility.isNullOrEmptyString($p0) ? SP.Storefront.StorefrontUrl.constructBaseQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName()) : SP.Storefront.StorefrontUrl.constructSearchQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName(), $p0);

        return $v_0 + '?' + $v_1;
    },
    $2p_3: function SP_Storefront_ManagementView$$2p_3($p0, $p1) {
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrlString();
        var $v_1 = SP.Storefront.StorefrontUrl.constructBaseQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName());

        $v_1 += String.format('#{0}={1}', 'mcg', $p0);
        if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_1 += String.format(',{0}={1}', 'qry', SP.Utilities.HttpUtility.urlKeyValueEncode($p1));
        }
        return $v_0 + '?' + $v_1;
    },
    addHeader: function SP_Storefront_ManagementView$addHeader() {
        this.header = new SP.Storefront.ManagementHeader();
        this.appendHtmlElement(this.header);
    },
    getAppIconType: function SP_Storefront_ManagementView$getAppIconType() {
        switch (this.$E_3) {
        case 0:
        case 2:
        case 1:
        default:
            return 1;
        case 3:
            return 0;
        case 4:
            return 3;
        }
    },
    $4A_3: function SP_Storefront_ManagementView$$4A_3($p0, $p1) {
        if ($p1.buttonId === 2) {
            var $v_0;
            var $$t_5, $$t_6;
            var $v_1 = ($$t_6 = SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage(this.$L_3.length, 16, $$t_5 = {
                'val': $v_0
            }), $v_0 = $$t_5.val, $$t_6);

            $v_1 = $v_0 ? $v_1 : $v_1 + 1;
            SP.Storefront.StorefrontState.setStateParam('pg', $v_1.toString());
            SP.Storefront.StorefrontApp.updateUI();
        }
        else if ($p1.buttonId === 1) {
            var $v_2 = SP.Storefront.StorefrontApp.getPageNumberFromState(this.$L_3.length, 16);

            $v_2--;
            $v_2 = Math.max($v_2, 0);
            SP.Storefront.StorefrontState.setStateParam('pg', $v_2.toString());
            SP.Storefront.StorefrontApp.updateUI();
        }
    },
    $4R_3: function SP_Storefront_ManagementView$$4R_3($p0, $p1) {
        if ($p1.newListItem.get_valueId() === 'none') {
            SP.Utilities.HttpUtility.navigateTo(this.$1B_3(null));
            return;
        }
        if (!(SP.Storefront.StorefrontApp.get_views()).valueEqualsState('ManagementView')) {
            SP.Storefront.StorefrontState.setStateParam('vw', 'ManagementView');
        }
        SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontApp.list_ListItemSelectionChanged($p0, $p1);
    },
    $3H_3: function SP_Storefront_ManagementView$$3H_3($p0, $p1) {
        var $v_0 = $p1.newListItem;

        SP.Storefront.StorefrontApp.redirectToAppDetails(SP.Storefront.StorefrontApp.getAppId($v_0.appMetadata, false), $v_0.appMetadata.get_catalog(), ($v_0.appMetadata.get_license()).get_billingMarket(), ($v_0.appMetadata.get_license()).get_contentMarket());
    },
    $41_3: function SP_Storefront_ManagementView$$41_3($p0, $p1) {
        if ($p1.promoted) {
            var $v_0 = $p1.asyncState;

            if ($v_0) {
                this.$2i_3 = this.$2f_3($p1.apps);
                this.$E_3 = 0;
            }
            else {
                this.$2j_3 = this.$2f_3($p1.apps);
                this.$E_3 = 2;
            }
        }
        else {
            if ($p1.errorType === '1') {
                this.$1y_3 = SP.Storefront.SPStorefrontData.toInt($p1.errorData['MarketplaceResults']);
            }
            else if ($p1.errorType === '2') {
                this.$1y_3 = -1;
            }
            else if (this.checkAndShowError($p1.errorData)) {
                return;
            }
            this.$L_3 = this.$2f_3($p1.apps);
        }
        if (!$p1.promoted) {
            var $v_1 = $p1.asyncState;

            this.$E_3 = $v_1[0];
            this.$3X_3 = $v_1[1];
            this.$18_3 = $v_1[2];
        }
        if ($p1.promoted) {
            this.$3B_3();
        }
        else {
            this.$3w_3();
        }
        eval('FixRibbonAndWorkspaceDimensions()');
    },
    $5Y_3: function SP_Storefront_ManagementView$$5Y_3($p0, $p1) {
        SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('srt', $p1.newListItem.get_valueId());
        SP.Storefront.StorefrontApp.updateUI();
    }
};
SP.Storefront.ManagementHeader = function SP_Storefront_ManagementHeader() {
    SP.Storefront.ManagementHeader.initializeBase(this);
};
SP.Storefront.ManagementHeader.prototype = {
    transferredToThis: function SP_Storefront_ManagementHeader$transferredToThis() {
        var $v_0 = this.searchBoxControl.getParentDiv();

        Sys.UI.DomElement.removeCssClass($v_0, 'ms-storefront-floatopposite');
        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-rightbottom24');
    },
    transferingFromThis: function SP_Storefront_ManagementHeader$transferingFromThis() {
        var $v_0 = this.searchBoxControl.getParentDiv();

        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-floatopposite');
        Sys.UI.DomElement.removeCssClass($v_0, 'ms-storefront-rightbottom24');
    }
};
SP.Storefront.OfficeAppsView = function SP_Storefront_OfficeAppsView() {
    this.$$d_$42_3 = Function.createDelegate(this, this.$42_3);
    this.$$d_$2T_3 = Function.createDelegate(this, this.$2T_3);
    this.$$d_$5a_3 = Function.createDelegate(this, this.$5a_3);
    this.$$d_$41_3 = Function.createDelegate(this, this.$41_3);
    this.$$d_$56_3 = Function.createDelegate(this, this.$56_3);
    this.$$d_$3H_3 = Function.createDelegate(this, this.$3H_3);
    this.$$d_list_ListItemSelectionChanged = Function.createDelegate(this, this.list_ListItemSelectionChanged);
    SP.Storefront.OfficeAppsView.initializeBase(this);
    this.header.addBasicHeaderImage();
    this.elementObject.id += 'OfficeAppsView';
    this.elementObject.style.paddingBottom = '35px';
    this.header.showSearchBox = true;
    this.header.showOfficeMarketDropdowns = true;
    this.priceList = this.addListToLeftPane('PriceFilters', SP.Res.storefront_Gallery_Price);
    this.priceList.set_listTypeId('PriceFilters');
    this.priceList.stateParamKey = 'prc';
    this.priceList.defaultValueId = '0';
    this.priceList.$R_2 = 'ms-storefront-selected';
    this.priceList.$N_2 = 'ms-storefront-listitemnohover';
    this.priceList.addLabelStyleOption(SP.Res.storefront_PriceFilter_All, '0', true, false, 'ms-storefront-leftpaneitem', 'ms-core-listMenu-item');
    this.priceList.addLabelStyleOption(SP.Res.storefront_PriceFilter_Free, '1', true, false, 'ms-storefront-leftpaneitem', 'ms-core-listMenu-item');
    this.priceList.add_listItemSelectionChanged(this.$$d_list_ListItemSelectionChanged);
    this.priceList.tryUpdateSelectedWithStateValue();
    this.categories = this.addListToLeftPane('OfficeAppsCategories', SP.Res.storefront_Gallery_Categories);
    this.categories.set_listTypeId('OfficeAppsCategories');
    this.categories.stateParamKey = 'ctg';
    this.categories.defaultValueId = SP.Storefront.StringIds.StateParamValues.categoryAll;
    this.categories.$R_2 = 'ms-storefront-selected';
    this.categories.$N_2 = 'ms-storefront-listitemnohover';
    this.categories.addListItem(SP.Storefront.CategoryItem.get_allCategory());
    this.categories.add_listItemSelectionChanged(this.$$d_list_ListItemSelectionChanged);
    this.categories.tryUpdateSelectedWithStateValue();
    var $v_0 = document.createElement('div');

    $v_0.style.display = 'table';
    this.appendChild($v_0);
    var $v_1 = SP.Storefront.StorefrontApp.canOnlyImportLicenseMessage();

    if (SP.ScriptUtility.isNullOrEmptyString($v_1)) {
        $v_1 = SP.Storefront.StorefrontApp.cantInstallAppsGetFailMessage();
    }
    if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
        this.notification = document.createElement('div');
        Sys.UI.DomElement.addCssClass(this.notification, 'ms-storefront-notificationdiv');
        Sys.UI.DomElement.addCssClass(this.notification, 'ms-storefront-gallerynotification');
        Sys.UI.DomElement.addCssClass(this.notification, 'ms-storefront-notificationtext');
        Sys.UI.DomElement.addCssClass(this.notification, 'ms-status-yellow');
        SP.UI.UIUtility.setInnerText(this.notification, $v_1);
        var $v_5 = 694;

        this.notification.style.width = $v_5 + 'px';
        $v_0.appendChild(this.notification);
    }
    $v_0.appendChild((this.get_promotedSection()).elementObject);
    this.mainPane = document.createElement('div');
    this.mainPane.id = (SP.Guid.newGuid()).toString();
    $v_0.appendChild(this.mainPane);
    this.sortList = new SP.Storefront.ListElement();
    this.sortList.addCssClass('ms-storefront-sortlist');
    this.sortList.disableHightlightOnSelect = true;
    this.sortList.set_listTypeId('OfficeAppsSorts');
    this.sortList.stateParamKey = 'srt';
    this.sortList.defaultValueId = '7';
    this.sortList.addLabel(SP.Res.storefront_Sort_Relevance, '7');
    this.sortList.addLabel(SP.Res.storefront_Sort_Rating, '5');
    this.sortList.addLabel(SP.Res.storefront_Sort_Downloads, '2');
    this.sortList.addLabel(SP.Res.storefront_Sort_Price, '4');
    this.sortList.addLabel(SP.Res.storefront_Sort_Title, '6');
    this.sortList.addLabel(SP.Res.storefront_Sort_Date, '1');
    (this.get_rootControls()).addChild(this.sortList.elementObject);
    this.sortList.add_listItemSelectionChanged(this.$$d_list_ListItemSelectionChanged);
    this.sortList.tryUpdateSelectedWithStateValue();
    this.appList = new SP.Storefront.ListElement();
    this.appList.addCssClass('ms-storefront-applist');
    this.appList.set_listTypeId('OfficeAppsIcons');
    (this.get_rootControls()).addChild(this.appList.elementObject);
    this.appList.add_listItemSelectionChanged(this.$$d_$3H_3);
    var $v_2 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-centertextouter');
    Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-gallerynoresults');
    $v_2.style.width = 712 + 'px';
    $v_2.tabIndex = -1;
    this.mainPane.appendChild($v_2);
    this.$B_3 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$B_3, 'ms-storefront-centertextinner');
    Sys.UI.DomElement.addCssClass(this.$B_3, 'ms-attractMode');
    SP.UI.UIUtility.setInnerText(this.$B_3, SP.Res.storefront_Gallery_NoResults);
    $v_2.appendChild(this.$B_3);
    var $v_3 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_3, 'ms-storefront-pageitemseparator');
    this.pageList = new SP.Storefront.ListElement();
    this.pageList.addCssClass('ms-storefront-pagelist');
    this.pageList.addCssClass('ms-storefront-floatopposite');
    this.pageList.set_listTypeId('PageList');
    this.mainPane.appendChild(this.pageList.elementObject);
    this.pageList.add_listItemSelectionChanged(this.$$d_$56_3);
    this.prevPage = this.pageList.addLabel(SP.Res.storefront_Gallery_Previous, 'pgprev', 'ms-storefront-pageitem', 'ms-textLarge');
    var $v_4 = this.pageList.addChild($v_3);

    $v_4.addCssClass('ms-storefront-pageitem');
    this.nextPage = this.pageList.addLabel(SP.Res.storefront_Gallery_Next, 'pgnxt', 'ms-storefront-pageitem', 'ms-textLarge');
    this.pageList.addHiddenListItem('pgnone');
    this.spProxy.add_getAppsCompleted(this.$$d_$41_3);
    this.spProxy.add_getCategoriesCompleted(this.$$d_$5a_3);
    this.spProxy.add_getAppDetailsCompleted(this.$$d_$2T_3);
    this.spProxy.add_getMarketsCompleted(this.$$d_$42_3);
    this.postConstruction();
};
SP.Storefront.OfficeAppsView.prototype = {
    get_rootControls: function SP_Storefront_OfficeAppsView$get_rootControls() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1I_3)) {
            this.$1I_3 = new SP.Storefront.ControlsListElement();
            this.$1I_3.removeCssClass('ms-storefront-list');
            this.$1I_3.addCssClass('ms-storefront-rootcontrols');
            this.$1I_3.set_listTypeId('OfficeAppsRoot');
            this.mainPane.appendChild(this.$1I_3.elementObject);
        }
        return this.$1I_3;
    },
    $1I_3: null,
    leftPane: null,
    appList: null,
    categories: null,
    sortList: null,
    priceList: null,
    pageList: null,
    nextPage: null,
    prevPage: null,
    notification: null,
    mainPane: null,
    currentCategory: null,
    currentSort: null,
    currentQuery: null,
    currentPriceFilter: null,
    currentPage: '0',
    currentApps: null,
    get_promotedSection: function SP_Storefront_OfficeAppsView$get_promotedSection() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1w_3)) {
            this.$1w_3 = new SP.Storefront.ListViewRenderer(1, 170, 'idStorefrontPromotedSection');
            this.$1w_3.elementObject.id += (SP.Guid.newGuid()).toString();
            this.$1w_3.addCssClass('ms-storefront-promoted');
        }
        return this.$1w_3;
    },
    $1w_3: null,
    $B_3: null,
    $1d_3: false,
    setApps: function SP_Storefront_OfficeAppsView$setApps($p0) {
        this.currentApps = SP.ScriptUtility.isNullOrUndefined($p0) || $p0.length <= 0 ? [] : Array.clone($p0);
        this.currentPage = this.$2e_3();
        SP.Storefront.HtmlElement.setOpacity(this.mainPane, 0);
        var $v_0 = new SPAnimation.State();

        $v_0.SetAttribute(5, 1);
        var $v_1 = new SPAnimation.Object(15, 0, this.mainPane, $v_0, null, null);

        $v_1.RunAnimation();
        this.focus();
        CUI.PMetrics.perfMark(10469);
    },
    addPromotedApps: function SP_Storefront_OfficeAppsView$addPromotedApps($p0) {
        if (SP.ScriptUtility.isNullOrUndefined($p0) || $p0.length <= 0) {
            return;
        }
        (this.get_promotedSection()).set_notDisplayed(false);
        var $v_0 = {};
        var $v_1 = [];

        $v_0['Row'] = $v_1;
        $v_0['CustomTitle'] = SP.Res.storefront_Gallery_Featured;
        var $v_2;
        var $v_3 = Math.min($p0.length, 6);

        for ($v_2 = 0; $v_2 < $v_3; $v_2++) {
            var $v_6 = [];

            Array.add($v_6, 'In page navigation');
            var $v_7 = $p0[$v_2];
            var $v_8 = SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();

            $v_8 += '?' + SP.Storefront.StorefrontUrl.constructDetailsQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName(), SP.Storefront.StorefrontApp.getAppId($v_7, false), $v_7.get_catalog(), this.header.get_billingMarketValue(), this.header.get_contentMarketValue());
            var $v_9 = {};

            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.title] = $v_7.get_title();
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.backgroundImage] = $v_7.get_firstScreenshot();
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.description] = $v_7.get_shortDescription();
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.linkLocation] = $v_8;
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.launchBehavior] = $v_6;
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.clusterX] = 0;
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.clusterY] = 0;
            $v_9[SP.UI.PromotedLinks.Constants.FieldNames.id] = $v_2 + 1;
            Array.add($v_1, $v_9);
        }
        (this.get_promotedSection()).render($v_0);
        SP.Storefront.HtmlElement.setOpacity((this.get_promotedSection()).elementObject, 0);
        var $v_4 = new SPAnimation.State();

        $v_4.SetAttribute(5, 1);
        var $v_5 = new SPAnimation.Object(15, 0, (this.get_promotedSection()).elementObject, $v_4, null, null);

        $v_5.RunAnimation();
    },
    addCategories: function SP_Storefront_OfficeAppsView$addCategories($p0) {
        var $v_0 = $p0.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = new SP.Storefront.CategoryItem($p0[$v_1]);

            $v_2.elementObject.id += this.categories.get_listTypeId();
            if (SP.ScriptUtility.isNullOrEmptyString($v_2.get_valueId())) {
                $v_2.set_valueId('Cat' + $v_1);
            }
            this.categories.addListItem($v_2);
        }
        this.$1d_3 = true;
    },
    updateUI: function SP_Storefront_OfficeAppsView$updateUI($p0) {
        SP.Storefront.BaseView.prototype.updateUI.call(this, $p0);
        this.sortList.set_notDisplayed(true);
        if (!this.currentApps) {
            this.pageList.set_notDisplayed(true);
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$B_3, true);
        var $v_0 = !SP.ScriptUtility.isNullOrUndefined(this.sortList) ? !this.sortList.valueEqualsState(this.currentSort) : false;
        var $v_1 = !SP.ScriptUtility.isNullOrUndefined(this.priceList) ? !this.priceList.valueEqualsState(this.currentPriceFilter) : false;

        if ($p0 || !this.categories.valueEqualsState(this.currentCategory) || $v_1 || $v_0 || !SP.Storefront.StorefrontState.valueEqualsState('qry', this.currentQuery) || !this.$1d_3 || this.header.get_marketSelectionChanged()) {
            this.$2Y_3($p0);
        }
        else {
            if (!SP.Storefront.StorefrontState.valueEqualsState('pg', this.currentPage)) {
                this.currentPage = this.$2e_3();
            }
            this.appList.updateHighlighted(null);
            this.appList.updateSelected(null, false);
        }
    },
    cleanUpState: function SP_Storefront_OfficeAppsView$cleanUpState() {
        SP.Storefront.BaseView.prototype.cleanUpState.call(this);
        SP.Storefront.StorefrontState.setStateParam('ctg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('prc', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('srt', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
    },
    focus: function SP_Storefront_OfficeAppsView$focus() {
        this.appList.focus();
        if (SP.Storefront.StorefrontContext.get_fullPage()) {
            (SP.Storefront.StorefrontApp.get_layoutRootParent()).scrollTop = 0;
        }
        if (this.$B_3.style.display !== 'none') {
            this.$B_3.parentNode.focus();
        }
    },
    $2Y_3: function SP_Storefront_OfficeAppsView$$2Y_3($p0) {
        CUI.PMetrics.perfMark(10470);
        if (!this.header.officeMarketsValid) {
            this.spProxy.beginGetMarkets(null);
            return;
        }
        var $v_0 = this.categories.changeSelectedToMatchState();
        var $v_1 = !SP.ScriptUtility.isNullOrUndefined(this.priceList) ? this.priceList.changeSelectedToMatchState() : SP.ScriptUtility.emptyString;
        var $v_2 = !SP.ScriptUtility.isNullOrUndefined(this.sortList) ? this.sortList.changeSelectedToMatchState() : SP.ScriptUtility.emptyString;
        var $v_3 = SP.Storefront.StorefrontState.getStateParam('qry');

        this.pageList.set_notDisplayed(true);
        this.appList.clearList();
        var $v_4 = [];

        Array.addRange($v_4, [$v_0, $v_1, $v_2, $v_3]);
        this.spProxy.beginGetApps(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), $v_0, $v_1, $v_2, $v_3, 0, $v_4);
        if ($p0 || !this.categories.valueEqualsState(this.currentCategory) || !SP.Storefront.StorefrontState.valueEqualsState('qry', this.currentQuery) || this.header.get_marketSelectionChanged()) {
            this.$3B_3($v_0, $v_3);
        }
        if (!this.$1d_3 || this.header.get_marketSelectionChanged()) {
            this.$5F_3();
            this.spProxy.beginGetCategories(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), 0, null);
        }
    },
    $2e_3: function SP_Storefront_OfficeAppsView$$2e_3() {
        var $v_0;
        var $$t_7, $$t_8;
        var $v_1 = ($$t_8 = SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage(this.currentApps.length, 16, $$t_7 = {
            'val': $v_0
        }), $v_0 = $$t_7.val, $$t_8);
        var $v_2 = this.currentApps.length;

        this.appList.clearList();
        if (!$v_2) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$B_3, false);
        }
        else {
            this.sortList.set_notDisplayed(false);
            this.pageList.set_notDisplayed(false);
        }
        var $v_3 = $v_1 * 16;
        var $v_4 = Math.min($v_3 + 16, $v_2);

        for (var $v_5 = $v_3; $v_5 < $v_4; $v_5++) {
            if (SP.Storefront.SPAppMetadata.isInstanceOfType(this.currentApps[$v_5])) {
                var $v_6 = new SP.Storefront.OfficeAppIcon(this.currentApps[$v_5]);

                $v_6.elementObject.id += this.appList.get_listTypeId();
                $v_6.addCssClass('ms-storefront-applink');
                this.appList.addListItem($v_6);
                $v_6.updateLayout();
            }
        }
        this.prevPage.set_disabled($v_1 <= 0);
        this.nextPage.set_disabled($v_0);
        return $v_1.toString();
    },
    addListToLeftPane: function SP_Storefront_OfficeAppsView$addListToLeftPane($p0, $p1) {
        var $v_0 = new SP.Storefront.ListElement();

        $v_0.set_isStatic(true);
        if (SP.ScriptUtility.isNullOrUndefined(this.leftPane)) {
            var $v_4 = document.createElement('div');

            Sys.UI.DomElement.addCssClass($v_4, 'ms-core-listMenu-verticalBox');
            this.appendChild($v_4);
            this.leftPane = document.createElement('ul');
            Sys.UI.DomElement.addCssClass(this.leftPane, 'ms-core-listMenu-root');
            Sys.UI.DomElement.addCssClass(this.leftPane, 'static');
            Sys.UI.DomElement.addCssClass(this.leftPane, 'ms-noList');
            Sys.UI.DomElement.addCssClass(this.leftPane, 'ms-storefront-float');
            Sys.UI.DomElement.addCssClass(this.leftPane, 'ms-storefront-leftpanelist');
            $v_4.appendChild(this.leftPane);
        }
        var $v_1 = document.createElement('li');

        Sys.UI.DomElement.addCssClass($v_1, 'static');
        var $v_2 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_2, 'ms-core-listMenu-item');
        SP.UI.UIUtility.setInnerText($v_2, $p1);
        $v_1.appendChild($v_2);
        this.leftPane.appendChild($v_1);
        var $v_3 = document.createElement('li');

        Sys.UI.DomElement.addCssClass($v_3, 'static');
        $v_3.appendChild($v_0.elementObject);
        this.leftPane.appendChild($v_3);
        return $v_0;
    },
    $3B_3: function SP_Storefront_OfficeAppsView$$3B_3($p0, $p1) {
        (this.get_promotedSection()).set_notDisplayed(true);
        (this.get_promotedSection()).reset();
        if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
            this.spProxy.beginGetPromotedApps(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), $p0, 0, null);
        }
    },
    $5F_3: function SP_Storefront_OfficeAppsView$$5F_3() {
        if (this.$1d_3) {
            this.categories.clearList();
            this.categories.addListItem(SP.Storefront.CategoryItem.get_allCategory());
            SP.Storefront.StorefrontState.setStateParam('ctg', SP.Storefront.StringIds.StateParamValues.categoryAll);
            this.categories.tryUpdateSelectedWithStateValue();
            this.$1d_3 = false;
        }
    },
    $3H_3: function SP_Storefront_OfficeAppsView$$3H_3($p0, $p1) {
        CUI.PMetrics.perfMark(10471);
        this.spProxy.beginGetAppDetails(this.header.get_billingMarketValue(), this.header.get_contentMarketValue(), $p1.newListItem.get_valueId(), 0, $p1.newListItem.get_valueId());
    },
    $41_3: function SP_Storefront_OfficeAppsView$$41_3($p0, $p1) {
        if ($p1.promoted) {
            this.addPromotedApps($p1.apps);
        }
        else {
            if (this.checkAndShowError($p1.errorData)) {
                return;
            }
            this.setApps($p1.apps);
        }
        var $v_0 = $p1.asyncState;

        if (!SP.ScriptUtility.isNullOrUndefined($v_0) && $v_0.length > 3) {
            this.currentCategory = $v_0[0];
            this.currentPriceFilter = $v_0[1];
            this.currentSort = $v_0[2];
            this.currentQuery = $v_0[3];
        }
    },
    $5a_3: function SP_Storefront_OfficeAppsView$$5a_3($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined($p1.categories)) {
            this.addCategories($p1.categories);
        }
        if (!SP.Storefront.StorefrontState.valueEqualsState('ctg', SP.Storefront.StringIds.StateParamValues.categoryAll)) {
            var $v_0 = this.categories.changeSelectedToMatchState();

            if ($v_0 === SP.Storefront.StringIds.StateParamValues.categoryAll) {
                SP.Storefront.StorefrontState.setStateParam('app', $v_0);
            }
            else {
                this.$2Y_3(false);
            }
        }
    },
    $2T_3: function SP_Storefront_OfficeAppsView$$2T_3($p0, $p1) {
        CUI.PMetrics.perfMark(10472);
        SP.Storefront.StorefrontState.setStateParam('vw', 'AppDetailsView');
        SP.Storefront.StorefrontState.setStateParam('app', $p1.asyncState);
        SP.Storefront.StorefrontState.setStateParam('clg', (0).toString());
        this.set_appMetadataDetail($p1.appDetails);
        SP.Storefront.StorefrontApp.updateUI();
    },
    list_ListItemSelectionChanged: function SP_Storefront_OfficeAppsView$list_ListItemSelectionChanged($p0, $p1) {
        SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
        SP.Storefront.StorefrontApp.list_ListItemSelectionChanged($p0, $p1);
    },
    $42_3: function SP_Storefront_OfficeAppsView$$42_3($p0, $p1) {
        if (!this.header.checkAndProcessGetMarketsResponse($p1)) {
            return;
        }
        this.$2Y_3(false);
    },
    $56_3: function SP_Storefront_OfficeAppsView$$56_3($p0, $p1) {
        var $v_0;
        var $$t_4, $$t_5;
        var $v_1 = ($$t_5 = SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage(this.currentApps.length, 16, $$t_4 = {
            'val': $v_0
        }), $v_0 = $$t_4.val, $$t_5);

        switch ($p1.newListItem.get_valueId()) {
        case 'pgprev':
            $v_1--;
            $v_1 = Math.max($v_1, 0);
            break;
        case 'pgnxt':
        default:
            $v_1 = $v_0 ? $v_1 : $v_1 + 1;
            break;
        }
        this.pageList.tryUpdateSelectedWithValueId('pgnone');
        SP.Storefront.StorefrontState.setStateParam('pg', $v_1.toString());
        SP.Storefront.StorefrontApp.updateUI();
    }
};
SP.Storefront.SeatsChangedEventArgs = function SP_Storefront_SeatsChangedEventArgs() {
    SP.Storefront.SeatsChangedEventArgs.initializeBase(this);
};
SP.Storefront.SeatsChangedEventArgs.prototype = {
    validInput: false,
    numberSeats: null
};
SP.Storefront.SearchChangedEventArgs = function SP_Storefront_SearchChangedEventArgs() {
    SP.Storefront.SearchChangedEventArgs.initializeBase(this);
};
SP.Storefront.SearchChangedEventArgs.prototype = {
    searchQuery: null
};
SP.Storefront.SearchBox = function SP_Storefront_SearchBox() {
    this.$$d_$5f_2 = Function.createDelegate(this, this.$5f_2);
    this.$$d_$4H_2 = Function.createDelegate(this, this.$4H_2);
    this.$$d_$4k_2 = Function.createDelegate(this, this.$4k_2);
    this.$$d_$4l_2 = Function.createDelegate(this, this.$4l_2);
    this.$$d_$58_2 = Function.createDelegate(this, this.$58_2);
    this.$$d_$59_2 = Function.createDelegate(this, this.$59_2);
    SP.Storefront.SearchBox.initializeBase(this);
    var $v_0 = {};

    $v_0['maxLength'] = '200';
    $v_0['type'] = 'text';
    $v_0['title'] = SP.Res.storefront_SearchBox_Search;
    $v_0['value'] = SP.Res.storefront_SearchBox_Search;
    this.initElementNoInnerHtml('input', 'idStorefrontSearchBox', $v_0, 'ms-InlineSearch-SearchBox-Baseline');
    this.addCssClass('ms-core-form-helper');
    this.addCssClass('ms-InlineSearch-SearchBox-EmptyUnfocused');
};
SP.Storefront.SearchBox.createSearchControl = function SP_Storefront_SearchBox$createSearchControl($p0) {
    $p0.val = new SP.Storefront.SearchBox();
    $p0.val.$7_2 = document.createElement('div');
    Sys.UI.DomElement.addCssClass($p0.val.$7_2, 'ms-InlineSearch-Outline-Baseline');
    Sys.UI.DomElement.addCssClass($p0.val.$7_2, 'ms-InlineSearch-Outline-Empty');
    Sys.UI.DomElement.addCssClass($p0.val.$7_2, 'ms-storefront-searchbox');
    $addHandler($p0.val.$7_2, 'mouseover', $p0.val.$$d_$59_2);
    $addHandler($p0.val.$7_2, 'mouseout', $p0.val.$$d_$58_2);
    var $v_0 = '<span id=\'{0}\'></span><span id=\'{5}\' class=\'{6}\'><img id=\'{1}\' alt=\'{2}\' class=\'{3}\' src=\'{4}\'/></span>';

    $v_0 = String.format($v_0, 'idStorefrontSearchBox', 'idStorefrontSearchBoxSubmit', SP.Res.storefront_SearchBox_ButtonAlt, 'ms-inlineSearch-searchImg', '/_layouts/15/images/spcommon.png?rev=23', 'idStorefrontSearchBoxImageSpan', 'ms-inlineSearch-searchImgSpanBase ms-inlineSearch-searchImgSpanStandard');
    SP.Storefront.HtmlElement.setInnerHTML($v_0, $p0.val.$7_2);
    var $v_1 = $get('idStorefrontSearchBox', $p0.val.$7_2);

    $p0.val.$7_2.replaceChild($p0.val.elementObject, $v_1);
    $p0.val.$I_2 = $get('idStorefrontSearchBoxSubmit', $p0.val.$7_2);
    $p0.val.$n_2 = $get('idStorefrontSearchBoxImageSpan', $p0.val.$7_2);
    $p0.val.$Q_2 = false;
    return $p0.val.$7_2;
};
SP.Storefront.SearchBox.prototype = {
    get_searchQuery: function SP_Storefront_SearchBox$get_searchQuery() {
        return this.$Q_2 ? (this.get_$1K_2()).value : SP.ScriptUtility.emptyString;
    },
    $Q_2: false,
    get_$1K_2: function SP_Storefront_SearchBox$get_$1K_2() {
        return this.elementObject;
    },
    $I_2: null,
    $n_2: null,
    $7_2: null,
    get_$1m_2: function SP_Storefront_SearchBox$get_$1m_2() {
        return this.$3l_2;
    },
    set_$1m_2: function SP_Storefront_SearchBox$set_$1m_2($p0) {
        this.$3l_2 = $p0;
        this.updateLayout();
        return $p0;
    },
    $3l_2: false,
    get_$2v_2: function SP_Storefront_SearchBox$get_$2v_2() {
        return this.$3m_2;
    },
    set_$2v_2: function SP_Storefront_SearchBox$set_$2v_2($p0) {
        this.$3m_2 = $p0;
        this.updateLayout();
        return $p0;
    },
    $3m_2: false,
    $1Y_2: false,
    $2q_2: false,
    add_searchChanged: function SP_Storefront_SearchBox$add_searchChanged($p0) {
        (this.get_events()).addHandler('__SearchonChanged', $p0);
    },
    remove_searchChanged: function SP_Storefront_SearchBox$remove_searchChanged($p0) {
        (this.get_events()).removeHandler('__SearchonChanged', $p0);
    },
    updateLayout: function SP_Storefront_SearchBox$updateLayout() {
        SP.Storefront.HtmlElement.prototype.updateLayout.call(this);
        this.$5p_2();
        Sys.UI.DomElement.removeCssClass(this.elementObject, 'ms-textSmall');
        Sys.UI.DomElement.removeCssClass(this.elementObject, 'ms-InlineSearch-SearchBox-EmptyFocused');
        Sys.UI.DomElement.removeCssClass(this.elementObject, 'ms-InlineSearch-SearchBox-EmptyUnfocused');
        Sys.UI.DomElement.removeCssClass(this.elementObject, 'ms-InlineSearch-SearchBox-Filled');
        Sys.UI.DomElement.removeCssClass(this.elementObject, 'ms-core-form-helper');
        Sys.UI.DomElement.removeCssClass(this.$7_2, 'ms-InlineSearch-Outline-Focused');
        Sys.UI.DomElement.removeCssClass(this.$7_2, 'ms-InlineSearch-Outline-Empty');
        Sys.UI.DomElement.removeCssClass(this.$7_2, 'ms-InlineSearch-Outline-Filled');
        if (this.get_$1m_2() || this.get_$2v_2()) {
            Sys.UI.DomElement.addCssClass(this.$7_2, 'ms-InlineSearch-Outline-Focused');
        }
        else {
            if (this.$Q_2) {
                Sys.UI.DomElement.addCssClass(this.$7_2, 'ms-InlineSearch-Outline-Filled');
            }
            else {
                Sys.UI.DomElement.addCssClass(this.$7_2, 'ms-InlineSearch-Outline-Empty');
            }
        }
        if (this.get_$1m_2()) {
            this.addCssClass('ms-textSmall');
            if (SP.ScriptUtility.isNullOrEmptyString((this.get_$1K_2()).value)) {
                this.addCssClass('ms-InlineSearch-SearchBox-EmptyFocused');
            }
            else {
                this.addCssClass('ms-InlineSearch-SearchBox-Filled');
            }
        }
        else {
            if (this.$Q_2) {
                this.addCssClass('ms-textSmall');
                this.addCssClass('ms-InlineSearch-SearchBox-Filled');
            }
            else {
                this.addCssClass('ms-core-form-helper');
                this.addCssClass('ms-InlineSearch-SearchBox-EmptyUnfocused');
            }
        }
    },
    reset: function SP_Storefront_SearchBox$reset() {
        (this.get_$1K_2()).value = SP.Res.storefront_SearchBox_Search;
        this.$Q_2 = false;
        this.$1Y_2 = false;
    },
    changeToMatchState: function SP_Storefront_SearchBox$changeToMatchState() {
        var $v_0 = SP.Storefront.StorefrontState.getStateParam('qry');

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            (this.get_$1K_2()).value = $v_0;
            this.$Q_2 = true;
            this.$1Y_2 = true;
            this.updateLayout();
        }
        else if (this.$Q_2) {
            (this.get_$1K_2()).value = $v_0;
            if (this.get_$1m_2()) {
                this.elementObject.blur();
            }
            else {
                this.$3i_2();
                this.updateLayout();
            }
        }
    },
    getParentDiv: function SP_Storefront_SearchBox$getParentDiv() {
        return this.$7_2;
    },
    onKeyPress: function SP_Storefront_SearchBox$onKeyPress($p0) {
        switch ($p0.charCode) {
        case 13:
            this.$34_2();
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        default:
            break;
        }
    },
    onKeyUp: function SP_Storefront_SearchBox$onKeyUp($p0) {
        this.updateLayout();
    },
    onFocus: function SP_Storefront_SearchBox$onFocus($p0) {
        if (!this.$Q_2) {
            (this.get_$1K_2()).value = SP.ScriptUtility.emptyString;
            this.$Q_2 = true;
        }
        this.set_$1m_2(true);
    },
    onBlur: function SP_Storefront_SearchBox$onBlur($p0) {
        this.$3i_2();
        this.set_$1m_2(false);
    },
    $59_2: function SP_Storefront_SearchBox$$59_2($p0) {
        this.set_$2v_2(true);
    },
    $58_2: function SP_Storefront_SearchBox$$58_2($p0) {
        this.set_$2v_2(false);
    },
    $34_2: function SP_Storefront_SearchBox$$34_2() {
        this.$1Y_2 = this.$Q_2;
        this.updateLayout();
        var $v_0 = new SP.Storefront.SearchChangedEventArgs();

        $v_0.searchQuery = this.get_searchQuery();
        var $v_1 = (this.get_events()).getHandler('__SearchonChanged');

        if ($v_1) {
            $v_1(this, $v_0);
        }
    },
    $3i_2: function SP_Storefront_SearchBox$$3i_2() {
        if (this.$Q_2 && (this.get_$1K_2()).value === SP.ScriptUtility.emptyString) {
            this.reset();
            SP.Storefront.StorefrontState.setStateParam('qry', SP.ScriptUtility.emptyString);
        }
        else {
            this.$Q_2 = true;
        }
    },
    $5p_2: function SP_Storefront_SearchBox$$5p_2() {
        $clearHandlers(this.$I_2);
        $addHandler(this.$I_2, 'mouseover', this.$$d_$4l_2);
        $addHandler(this.$I_2, 'mouseout', this.$$d_$4k_2);
        if (this.$1Y_2) {
            $addHandler(this.$I_2, 'click', this.$$d_$4H_2);
        }
        else {
            $addHandler(this.$I_2, 'click', this.$$d_$5f_2);
        }
        this.$37_2();
    },
    $37_2: function SP_Storefront_SearchBox$$37_2() {
        Sys.UI.DomElement.removeCssClass(this.$I_2, 'ms-inlineSearch-cancelImgHover');
        Sys.UI.DomElement.removeCssClass(this.$I_2, 'ms-inlineSearch-imgHoverHighlight');
        Sys.UI.DomElement.removeCssClass(this.$I_2, 'ms-inlineSearch-cancelImg');
        Sys.UI.DomElement.removeCssClass(this.$I_2, 'ms-inlineSearch-searchImgHover');
        Sys.UI.DomElement.removeCssClass(this.$I_2, 'ms-inlineSearch-searchImg');
        Sys.UI.DomElement.removeCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanBase');
        Sys.UI.DomElement.removeCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanHoverHighlight');
        Sys.UI.DomElement.removeCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanBase');
        Sys.UI.DomElement.removeCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanStandard');
        if (this.$2q_2) {
            Sys.UI.DomElement.addCssClass(this.$I_2, this.$1Y_2 ? 'ms-inlineSearch-cancelImgHover' : 'ms-inlineSearch-searchImgHover');
            Sys.UI.DomElement.addCssClass(this.$I_2, 'ms-inlineSearch-imgHoverHighlight');
            Sys.UI.DomElement.addCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanBase');
            Sys.UI.DomElement.addCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanHoverHighlight');
        }
        else {
            Sys.UI.DomElement.addCssClass(this.$I_2, this.$1Y_2 ? 'ms-inlineSearch-cancelImg' : 'ms-inlineSearch-searchImg');
            Sys.UI.DomElement.addCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanBase');
            Sys.UI.DomElement.addCssClass(this.$n_2, 'ms-inlineSearch-searchImgSpanStandard');
        }
    },
    $5f_2: function SP_Storefront_SearchBox$$5f_2($p0) {
        this.$34_2();
    },
    $4H_2: function SP_Storefront_SearchBox$$4H_2($p0) {
        this.reset();
        this.$34_2();
    },
    $4l_2: function SP_Storefront_SearchBox$$4l_2($p0) {
        this.$2q_2 = true;
        this.$37_2();
    },
    $4k_2: function SP_Storefront_SearchBox$$4k_2($p0) {
        this.$2q_2 = false;
        this.$37_2();
    }
};
SP.Storefront.SeatsBox = function SP_Storefront_SeatsBox() {
    this.$$d_$5C_2 = Function.createDelegate(this, this.$5C_2);
    this.$$d_$5D_2 = Function.createDelegate(this, this.$5D_2);
    this.$i_2 = '1';
    SP.Storefront.SeatsBox.initializeBase(this);
    var $v_0 = {};

    $v_0['maxLength'] = '4';
    $v_0['type'] = 'text';
    $v_0['alt'] = SP.Res.storefront_AppDetails_SeatsLabel;
    $v_0['value'] = '1';
    $v_0['style'] = 'ime-mode:inactive';
    this.initElementNoInnerHtml('input', 'idStorefrontSeatsBox', $v_0, 'ms-storefront-appdetailsseatsbox');
};
SP.Storefront.SeatsBox.createSeatsControl = function SP_Storefront_SeatsBox$createSeatsControl($p0) {
    $p0.val = new SP.Storefront.SeatsBox();
    var $v_0 = '<span id=\'{0}\'></span><span id=\'{1}\'></span>';

    $v_0 = String.format($v_0, 'seatsBoxPlaceHolder', 'seatsBoxRefreshIcon');
    $p0.val.$U_2 = new SP.Storefront.HtmlElement();
    $p0.val.$U_2.initElementObject('div', SP.ScriptUtility.emptyString, null, $v_0, 'ms-displayInlineBlock');
    var $v_1 = $get('seatsBoxPlaceHolder', $p0.val.$U_2.elementObject);

    $p0.val.$U_2.elementObject.replaceChild($p0.val.elementObject, $v_1);
    $p0.val.$s_2 = new SP.Storefront.HtmlElement();
    $p0.val.$s_2.initElementNoInnerHtml('div', SP.ScriptUtility.emptyString, null, 'ms-displayInlineBlock');
    $p0.val.$s_2.addCssClass('ms-storefront-appdetailsseatsboxrefresh');
    $p0.val.$s_2.setupAccessibleAnchor();
    $addHandler($p0.val.$s_2.$5_1, 'focus', $p0.val.$$d_$5D_2);
    $addHandler($p0.val.$s_2.$5_1, 'blur', $p0.val.$$d_$5C_2);
    var $v_2 = document.createElement('img');

    Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-appdetailsseatsboxrefreshimg');
    $v_2.alt = SP.Res.storefront_AppDetails_SeatsLabel;
    $v_2.src = SP.Storefront.StorefrontApp.getImageUrl('CoAuth_PlaceholderNeedRefresh.16x16x32.png');
    $p0.val.$s_2.appendChild($v_2);
    var $v_3 = $get('seatsBoxRefreshIcon', $p0.val.$U_2.elementObject);

    $p0.val.$U_2.elementObject.replaceChild($p0.val.$s_2.elementObject, $v_3);
    return $p0.val.$U_2.elementObject;
};
SP.Storefront.SeatsBox.prototype = {
    get_seats: function SP_Storefront_SeatsBox$get_seats() {
        return this.$i_2;
    },
    get_validInput: function SP_Storefront_SeatsBox$get_validInput() {
        return this.$2Z_2;
    },
    set_validInput: function SP_Storefront_SeatsBox$set_validInput($p0) {
        if ($p0) {
            this.removeCssClass('ms-storefront-seatserrorborder');
        }
        else {
            this.addCssClass('ms-storefront-seatserrorborder');
        }
        return $p0;
    },
    $2Z_2: true,
    get_notDisplayed: function SP_Storefront_SeatsBox$get_notDisplayed() {
        return this.$U_2.get_notDisplayed();
    },
    set_notDisplayed: function SP_Storefront_SeatsBox$set_notDisplayed($p0) {
        this.$U_2.set_notDisplayed($p0);
        return $p0;
    },
    get_height: function SP_Storefront_SeatsBox$get_height() {
        return this.$U_2.get_height();
    },
    set_height: function SP_Storefront_SeatsBox$set_height($p0) {
        this.$U_2.set_height($p0);
        return $p0;
    },
    get_refreshIconFocused: function SP_Storefront_SeatsBox$get_refreshIconFocused() {
        return this.$2R_2;
    },
    $2R_2: false,
    $s_2: null,
    $U_2: null,
    add_seatsChanged: function SP_Storefront_SeatsBox$add_seatsChanged($p0) {
        (this.get_events()).addHandler('__SeatsonChanged', $p0);
    },
    remove_seatsChanged: function SP_Storefront_SeatsBox$remove_seatsChanged($p0) {
        (this.get_events()).removeHandler('__SeatsonChanged', $p0);
    },
    get_$36_2: function SP_Storefront_SeatsBox$get_$36_2() {
        return this.elementObject;
    },
    reset: function SP_Storefront_SeatsBox$reset() {
        (this.get_$36_2()).value = '1';
        this.$i_2 = '1';
        this.$2Z_2 = true;
    },
    seatsSubmit: function SP_Storefront_SeatsBox$seatsSubmit() {
        if (this.$i_2 === (this.get_$36_2()).value && this.get_validInput()) {
            return;
        }
        this.$2Z_2 = false;
        this.$i_2 = (this.get_$36_2()).value;
        this.$s_2.focus();
        var $v_0 = new SP.Storefront.SeatsChangedEventArgs();

        $v_0.numberSeats = this.$i_2;
        $v_0.validInput = this.$2Z_2;
        var $v_1 = (this.get_events()).getHandler('__SeatsonChanged');

        if ($v_1) {
            $v_1(this, $v_0);
        }
    },
    onKeyPress: function SP_Storefront_SeatsBox$onKeyPress($p0) {
        switch ($p0.charCode) {
        case 13:
            this.elementObject.blur();
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        default:
            break;
        }
    },
    onBlur: function SP_Storefront_SeatsBox$onBlur($p0) {
        this.seatsSubmit();
    },
    $5D_2: function SP_Storefront_SeatsBox$$5D_2($p0) {
        this.$2R_2 = true;
    },
    $5C_2: function SP_Storefront_SeatsBox$$5C_2($p0) {
        this.$2R_2 = false;
    }
};
SP.Storefront.BaseEventArgs = function SP_Storefront_BaseEventArgs() {
    this.errorData = {};
    SP.Storefront.BaseEventArgs.initializeBase(this);
};
SP.Storefront.BaseEventArgs.prototype = {
    asyncState: null,
    errorType: null
};
SP.Storefront.StorefrontContext = function SP_Storefront_StorefrontContext() {
};
SP.Storefront.StorefrontContext.$$cctor = function SP_Storefront_StorefrontContext$$$cctor() {
};
SP.Storefront.StorefrontContext.get_webLanguage = function SP_Storefront_StorefrontContext$get_webLanguage() {
    return SP.Storefront.StorefrontContext.$4('WebLanguage');
};
SP.Storefront.StorefrontContext.get_sourceUrl = function SP_Storefront_StorefrontContext$get_sourceUrl() {
    return SP.Storefront.StorefrontContext.$4('Source');
};
SP.Storefront.StorefrontContext.get_sourceName = function SP_Storefront_StorefrontContext$get_sourceName() {
    return SP.Storefront.StorefrontContext.$4('SourceName');
};
SP.Storefront.StorefrontContext.get_hug = function SP_Storefront_StorefrontContext$get_hug() {
    return SP.Storefront.StorefrontApp.parseHugStatus(SP.Storefront.StorefrontContext.$4('Hug'));
};
SP.Storefront.StorefrontContext.get_licensePurchase = function SP_Storefront_StorefrontContext$get_licensePurchase() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('LicensePurchase'));
};
SP.Storefront.StorefrontContext.get_validDeployment = function SP_Storefront_StorefrontContext$get_validDeployment() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('ValidDeployment'));
};
SP.Storefront.StorefrontContext.get_canInstallApps = function SP_Storefront_StorefrontContext$get_canInstallApps() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('CanInstallApps'));
};
SP.Storefront.StorefrontContext.get_isAppWeb = function SP_Storefront_StorefrontContext$get_isAppWeb() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsAppWeb'));
};
SP.Storefront.StorefrontContext.get_appName = function SP_Storefront_StorefrontContext$get_appName() {
    return SP.Storefront.StorefrontContext.$4('AppName');
};
SP.Storefront.StorefrontContext.get_appId = function SP_Storefront_StorefrontContext$get_appId() {
    return SP.Storefront.StorefrontContext.$4('AppId');
};
SP.Storefront.StorefrontContext.get_contentMarket = function SP_Storefront_StorefrontContext$get_contentMarket() {
    return SP.Storefront.StorefrontContext.$4('CM');
};
SP.Storefront.StorefrontContext.get_billingMarket = function SP_Storefront_StorefrontContext$get_billingMarket() {
    return SP.Storefront.StorefrontContext.$4('PM');
};
SP.Storefront.StorefrontContext.get_installRights = function SP_Storefront_StorefrontContext$get_installRights() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('InstallRights'));
};
SP.Storefront.StorefrontContext.get_importRights = function SP_Storefront_StorefrontContext$get_importRights() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('ImportRights'));
};
SP.Storefront.StorefrontContext.get_fullPage = function SP_Storefront_StorefrontContext$get_fullPage() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('FullPage'));
};
SP.Storefront.StorefrontContext.get_pageName = function SP_Storefront_StorefrontContext$get_pageName() {
    return SP.Storefront.StorefrontContext.$4('PageName');
};
SP.Storefront.StorefrontContext.get_isCorporateCatalogOn = function SP_Storefront_StorefrontContext$get_isCorporateCatalogOn() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsCorporateCatalogOn'));
};
SP.Storefront.StorefrontContext.get_isCorporateCatalogSite = function SP_Storefront_StorefrontContext$get_isCorporateCatalogSite() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsCorporateCatalogSite'));
};
SP.Storefront.StorefrontContext.get_isCentralAdmin = function SP_Storefront_StorefrontContext$get_isCentralAdmin() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsCentralAdmin'));
};
SP.Storefront.StorefrontContext.get_isTenantAdmin = function SP_Storefront_StorefrontContext$get_isTenantAdmin() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsTenantAdmin'));
};
SP.Storefront.StorefrontContext.get_showMOEs = function SP_Storefront_StorefrontContext$get_showMOEs() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('ShowMOEs'));
};
SP.Storefront.StorefrontContext.get_isReadOnlyWeb = function SP_Storefront_StorefrontContext$get_isReadOnlyWeb() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsReadOnlyWeb'));
};
SP.Storefront.StorefrontContext.get_isPurchaseOn = function SP_Storefront_StorefrontContext$get_isPurchaseOn() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('IsPurchaseOn'));
};
SP.Storefront.StorefrontContext.get_hasManageWeb = function SP_Storefront_StorefrontContext$get_hasManageWeb() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('HasManageWeb'));
};
SP.Storefront.StorefrontContext.get_hasManageList = function SP_Storefront_StorefrontContext$get_hasManageList() {
    return SP.Storefront.SPStorefrontData.toBool(SP.Storefront.StorefrontContext.$4('HasManageList'));
};
SP.Storefront.StorefrontContext.$4 = function SP_Storefront_StorefrontContext$$4($p0) {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontContext.$2a)) {
        SP.Storefront.StorefrontContext.$4o();
    }
    var $v_0;

    try {
        $v_0 = SP.Storefront.StorefrontContext.$2a[$p0];
    }
    catch ($$e_2) {
        $v_0 = null;
    }
    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return $v_0;
    }
    return SP.ScriptUtility.emptyString;
};
SP.Storefront.StorefrontContext.$4o = function SP_Storefront_StorefrontContext$$4o() {
    try {
        SP.Storefront.StorefrontContext.$2a = eval('getStorefrontContext()');
    }
    catch ($$e_0) { }
};
SP.Storefront.ImageUrlVerifier = function SP_Storefront_ImageUrlVerifier($p0) {
    this.$$d_$4m_0 = Function.createDelegate(this, this.$4m_0);
    this.$2r_0 = $p0;
    this.$2J_0 = document.createElement('img');
    $addHandler(this.$2J_0, 'load', this.$$d_$4m_0);
};
SP.Storefront.ImageUrlVerifier.verifyImage = function SP_Storefront_ImageUrlVerifier$verifyImage($p0, $p1) {
    SP.Storefront.ImageUrlVerifier.verifyImageWithAction($p0, $p1, null);
};
SP.Storefront.ImageUrlVerifier.verifyImageWithAction = function SP_Storefront_ImageUrlVerifier$verifyImageWithAction($p0, $p1, $p2) {
    var $v_0 = new SP.Storefront.ImageUrlVerifier($p0);

    $v_0.$2s_0 = $p2;
    try {
        $v_0.$2J_0.src = $p1;
    }
    catch ($$e_4) { }
};
SP.Storefront.ImageUrlVerifier.prototype = {
    $2r_0: null,
    $2J_0: null,
    $2s_0: null,
    $4m_0: function SP_Storefront_ImageUrlVerifier$$4m_0($p0) {
        this.$2r_0.src = this.$2J_0.src;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$2s_0)) {
            this.$2s_0(this.$2r_0);
        }
    }
};
SP.Storefront.ForwardBackwardsAction = function SP_Storefront_ForwardBackwardsAction($p0, $p1) {
    this.$$d_$5H_0 = Function.createDelegate(this, this.$5H_0);
    this.$$d_$5I_0 = Function.createDelegate(this, this.$5I_0);
    this.$3f_0 = $p0;
    this.$3J_0 = $p1;
};
SP.Storefront.ForwardBackwardsAction.prototype = {
    get_inForwardState: function SP_Storefront_ForwardBackwardsAction$get_inForwardState() {
        return this.$1j_0;
    },
    $10_0: false,
    $3A_0: 0,
    $3g_0: 100,
    $3K_0: 100,
    $3f_0: null,
    $3J_0: null,
    $1j_0: false,
    $2E_0: false,
    $27_0: false,
    triggerForwardsAction: function SP_Storefront_ForwardBackwardsAction$triggerForwardsAction() {
        if (this.$2E_0) {
            return;
        }
        this.$2E_0 = true;
        if (!this.$1j_0 && !this.$10_0) {
            this.$3A_0 = window.setTimeout(this.$$d_$5I_0, this.$3g_0);
            this.$10_0 = true;
            return;
        }
        this.$43_0();
    },
    triggerBackwardsAction: function SP_Storefront_ForwardBackwardsAction$triggerBackwardsAction() {
        if (this.$27_0) {
            return;
        }
        this.$27_0 = true;
        if (this.$1j_0 && !this.$10_0) {
            this.$3A_0 = window.setTimeout(this.$$d_$5H_0, this.$3K_0);
            this.$10_0 = true;
            return;
        }
        this.$43_0();
    },
    setWait: function SP_Storefront_ForwardBackwardsAction$setWait($p0) {
        this.setBackwardsWait($p0);
        this.setForwardsWait($p0);
    },
    setForwardsWait: function SP_Storefront_ForwardBackwardsAction$setForwardsWait($p0) {
        var $v_0 = Math.max(0, $p0);

        this.$3g_0 = $v_0;
    },
    setBackwardsWait: function SP_Storefront_ForwardBackwardsAction$setBackwardsWait($p0) {
        var $v_0 = Math.max(0, $p0);

        this.$3K_0 = $v_0;
    },
    $43_0: function SP_Storefront_ForwardBackwardsAction$$43_0() {
        if (this.$10_0) {
            window.clearTimeout(this.$3A_0);
            this.$10_0 = false;
            this.$2E_0 = false;
            this.$27_0 = false;
        }
    },
    $5H_0: function SP_Storefront_ForwardBackwardsAction$$5H_0() {
        this.$10_0 = false;
        this.$27_0 = false;
        this.$1j_0 = false;
        this.$3J_0();
    },
    $5I_0: function SP_Storefront_ForwardBackwardsAction$$5I_0() {
        this.$10_0 = false;
        this.$2E_0 = false;
        this.$1j_0 = true;
        this.$3f_0();
    }
};
SP.Storefront.StorefrontApp = function SP_Storefront_StorefrontApp() {
};
SP.Storefront.StorefrontApp.get_layoutRootParent = function SP_Storefront_StorefrontApp$get_layoutRootParent() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$1q)) {
        SP.Storefront.StorefrontApp.$1q = $get('idStorefrontLayoutRootParent');
    }
    return SP.Storefront.StorefrontApp.$1q;
};
SP.Storefront.StorefrontApp.get_topBorder = function SP_Storefront_StorefrontApp$get_topBorder() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$2V)) {
        SP.Storefront.StorefrontApp.$2V = $get('idStorefrontTopBorder');
    }
    return SP.Storefront.StorefrontApp.$2V;
};
SP.Storefront.StorefrontApp.get_layoutRoot = function SP_Storefront_StorefrontApp$get_layoutRoot() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$2L)) {
        SP.Storefront.StorefrontApp.$2L = $get('idStorefrontLayoutRoot');
    }
    return SP.Storefront.StorefrontApp.$2L;
};
SP.Storefront.StorefrontApp.get_mainForm = function SP_Storefront_StorefrontApp$get_mainForm() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$1T)) {
        SP.Storefront.StorefrontApp.$1T = $get('idStorefrontForm');
    }
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$1T)) {
        var $v_0 = eval('MSOWebPartPageFormName');

        SP.Storefront.StorefrontApp.$1T = $get($v_0);
    }
    return SP.Storefront.StorefrontApp.$1T;
};
SP.Storefront.StorefrontApp.get_views = function SP_Storefront_StorefrontApp$get_views() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontApp.$Y)) {
        SP.Storefront.StorefrontApp.$Y = new (SP.Storefront.StateControlledList.$$(SP.Storefront.BaseView))();
        SP.Storefront.StorefrontApp.$Y.stateParamKey = 'vw';
        SP.Storefront.StorefrontApp.$Y.defaultValueId = 'OfficeAppsView';
        SP.Storefront.StorefrontApp.$Y.addOrUpdateListItem('OfficeAppsView', null);
        SP.Storefront.StorefrontApp.$Y.addOrUpdateListItem('AppDetailsView', null);
        SP.Storefront.StorefrontApp.$Y.addOrUpdateListItem('ErrorView', null);
        SP.Storefront.StorefrontApp.$Y.addOrUpdateListItem('HugView', null);
        SP.Storefront.StorefrontApp.$Y.addOrUpdateListItem('ManagementView', null);
    }
    return SP.Storefront.StorefrontApp.$Y;
};
SP.Storefront.StorefrontApp.get_currentView = function SP_Storefront_StorefrontApp$get_currentView() {
    return (SP.Storefront.StorefrontApp.get_views()).get_selected();
};
SP.Storefront.StorefrontApp.get_isRTL = function SP_Storefront_StorefrontApp$get_isRTL() {
    return document.documentElement.dir === 'rtl';
};
SP.Storefront.StorefrontApp.get_isIE8orLess = function SP_Storefront_StorefrontApp$get_isIE8orLess() {
    var $v_0 = document.documentMode;

    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 9 && (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 < 9);
};
SP.Storefront.StorefrontApp.start = function SP_Storefront_StorefrontApp$start() {
    SP.Storefront.StorefrontApp.startWithDefault(SP.ScriptUtility.emptyString);
};
SP.Storefront.StorefrontApp.startWithDefault = function SP_Storefront_StorefrontApp$startWithDefault($p0) {
    CUI.PMetrics.perfMark(10473);
    if (SP.Storefront.StorefrontApp.get_isIE8orLess()) {
        Sys.UI.DomElement.addCssClass(document.body, 'ms-core-needIEFilter');
    }
    SP.Storefront.StorefrontState.add_storefrontStateExternalChanged(SP.Storefront.StorefrontApp.$5d);
    SP.Storefront.StorefrontApp.$4I();
    if (SP.Storefront.StorefrontContext.get_hug() !== -1) {
        (SP.Storefront.StorefrontApp.get_views()).defaultValueId = 'HugView';
    }
    else if (!SP.ScriptUtility.isNullOrEmptyString($p0)) {
        (SP.Storefront.StorefrontApp.get_views()).defaultValueId = $p0;
    }
    SP.Storefront.StorefrontApp.updateUIAndState(false, false, null);
    if (SP.Storefront.StorefrontContext.get_fullPage()) {
        (SP.Storefront.StorefrontApp.get_layoutRootParent()).style.overflowY = 'scroll';
        $addHandler(window, 'resize', SP.Storefront.StorefrontApp.$4D);
        SP.Storefront.StorefrontApp.$3t();
    }
    SP.Storefront.StorefrontApp.hideLoadingMessage();
};
SP.Storefront.StorefrontApp.updateUI = function SP_Storefront_StorefrontApp$updateUI() {
    SP.Storefront.StorefrontApp.updateUIAndState(false, true, null);
};
SP.Storefront.StorefrontApp.updateUIForceOption = function SP_Storefront_StorefrontApp$updateUIForceOption($p0) {
    SP.Storefront.StorefrontApp.updateUIAndState($p0, true, null);
};
SP.Storefront.StorefrontApp.updateUIWithError = function SP_Storefront_StorefrontApp$updateUIWithError($p0) {
    SP.Storefront.StorefrontState.setStateParam('vw', 'ErrorView');
    SP.Storefront.StorefrontApp.updateUIAndState(false, false, $p0);
};
SP.Storefront.StorefrontApp.updateUIAndState = function SP_Storefront_StorefrontApp$updateUIAndState($p0, $p1, $p2) {
    CUI.PMetrics.perfMark(10474);
    var $v_0 = !SP.ScriptUtility.isNullOrUndefined($p2);

    if (!$v_0) {
        SP.Storefront.StorefrontApp.$3e();
    }
    if (!(SP.Storefront.StorefrontApp.get_views()).selectedEqualsState()) {
        SP.Storefront.StorefrontApp.$4G();
    }
    (SP.Storefront.StorefrontApp.get_currentView()).header.searchBoxControl.changeToMatchState();
    if ($v_0) {
        (SP.Storefront.StorefrontApp.get_currentView()).errorData = $p2;
    }
    (SP.Storefront.StorefrontApp.get_currentView()).updateUI($p0);
    (SP.Storefront.StorefrontApp.get_currentView()).focus();
    if ($p1) {
        SP.Storefront.StorefrontState.updateStateHash();
    }
    CUI.PMetrics.perfMark(10475);
};
SP.Storefront.StorefrontApp.startAppPurchase = function SP_Storefront_StorefrontApp$startAppPurchase($p0, $p1, $p2, $p3) {
    SP.Storefront.StorefrontApp.startAppPurchaseSiteLicenseOption($p0, $p1, false, $p2);
};
SP.Storefront.StorefrontApp.startAppPurchaseSiteLicenseOption = function SP_Storefront_StorefrontApp$startAppPurchaseSiteLicenseOption($p0, $p1, $p2, $p3) {
    SP.Storefront.StorefrontApp.startAppPurchaseAllOptions($p0, $p1, $p2, $p3, (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue(), (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue());
};
SP.Storefront.StorefrontApp.startAppPurchaseFromLicense = function SP_Storefront_StorefrontApp$startAppPurchaseFromLicense($p0) {
    var $v_0 = ($p0.get_manageableLicense()).get_isTokenExpired() ? 'SharePointPurchase' : 'sharepointreacquire';

    SP.Storefront.StorefrontApp.startAppPurchaseAllOptions($p0, SP.ScriptUtility.emptyString, false, $v_0, ($p0.get_license()).get_billingMarket(), ($p0.get_license()).get_contentMarket());
};
SP.Storefront.StorefrontApp.startAppPurchaseAllOptions = function SP_Storefront_StorefrontApp$startAppPurchaseAllOptions($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = ($p0.get_basicDetails()).get_assetId();
    var $v_1 = SP.Storefront.StorefrontApp.getHostUrl() + SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();
    var $v_2 = new SP.Utilities.UrlBuilder($v_1);

    $v_2.addKeyValueQueryString('task', 'OfficeRedirect');
    $v_1 = $v_2.get_url();
    SP.Storefront.StorefrontApp.addHiddenFormField('task', 'GoToOfficeUrl');
    SP.Storefront.StorefrontApp.addHiddenFormField('osut', (3).toString());
    SP.Storefront.StorefrontApp.addHiddenFormField('clid', $p5);
    SP.Storefront.StorefrontApp.addHiddenFormField('SPDeployID', '1');
    SP.Storefront.StorefrontApp.addForwardFormField('ai', $v_0);
    SP.Storefront.StorefrontApp.addForwardFormField('PT', $p3);
    if ($p2) {
        SP.Storefront.StorefrontApp.addForwardFormField('sl', '1');
    }
    else {
        SP.Storefront.StorefrontApp.addForwardFormField('Seats', $p1);
    }
    SP.Storefront.StorefrontApp.addForwardFormField('PV', $p0.get_priceValue());
    SP.Storefront.StorefrontApp.addForwardFormField('PM', $p4);
    SP.Storefront.StorefrontApp.addForwardFormField('callbackurl', $v_1);
    SP.Storefront.StorefrontApp.submitForm();
};
SP.Storefront.StorefrontApp.startAppRequest = function SP_Storefront_StorefrontApp$startAppRequest($p0, $p1, $p2) {
    var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('RequestAnApp.aspx');
    var $v_1 = new SP.Utilities.UrlBuilder($v_0);

    $v_1.addKeyValueQueryString('AssetID', ($p0.get_basicDetails()).get_assetId());
    $v_1.addKeyValueQueryString('bm', (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue());
    $v_1.addKeyValueQueryString('cm', (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue());
    if ($p2) {
        $v_1.addKeyValueQueryString('sl', '1');
    }
    else {
        $v_1.addKeyValueQueryString('Seats', $p1);
    }
    SP.Storefront.StorefrontApp.showPrompt($v_1.get_url(), SP.Storefront.StorefrontApp.newRequestPromptCallback);
};
SP.Storefront.StorefrontApp.appDownload = function SP_Storefront_StorefrontApp$appDownload($p0, $p1, $p2, $p3) {
    var $v_0 = $p3 ? 'AppUpgrade' : 'AppDownload';

    SP.Storefront.StorefrontApp.addHiddenFormField('task', $v_0);
    SP.Storefront.StorefrontApp.addHiddenFormField('appid', $p0);
    SP.Storefront.StorefrontApp.addHiddenFormField('oID', $p1);
    SP.Storefront.StorefrontApp.addHiddenFormField('catalog', $p2.toString());
    SP.Storefront.StorefrontApp.submitForm();
};
SP.Storefront.StorefrontApp.submitForm = function SP_Storefront_StorefrontApp$submitForm() {
    (SP.Storefront.StorefrontApp.get_mainForm()).submit();
};
SP.Storefront.StorefrontApp.parseCatalogType = function SP_Storefront_StorefrontApp$parseCatalogType($p0) {
    var $v_0 = Number.parseInvariant($p0);

    switch ($v_0) {
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
    default:
        return 2;
    }
};
SP.Storefront.StorefrontApp.parseHugStatus = function SP_Storefront_StorefrontApp$parseHugStatus($p0) {
    var $v_0 = Number.parseInvariant($p0);

    switch ($v_0) {
    case -1:
    default:
        return -1;
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    case 3:
        return 3;
    }
};
SP.Storefront.StorefrontApp.parseMyAppsCatalogType = function SP_Storefront_StorefrontApp$parseMyAppsCatalogType($p0) {
    var $v_0 = Number.parseInvariant($p0);

    switch ($v_0) {
    case 0:
    default:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    case 3:
        return 3;
    case 4:
        return 4;
    }
};
SP.Storefront.StorefrontApp.htmlEncodeWithDefaultFallback = function SP_Storefront_StorefrontApp$htmlEncodeWithDefaultFallback($p0, $p1) {
    var $v_0 = SP.ScriptUtility.emptyString;

    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        if ($p1 === Number) {
            var $v_1 = 0;

            $v_0 = $v_1.toString();
        }
    }
    else {
        $v_0 = $p0.toString();
    }
    return SP.Utilities.HttpUtility.htmlEncode($v_0);
};
SP.Storefront.StorefrontApp.addTextInLine = function SP_Storefront_StorefrontApp$addTextInLine($p0, $p1) {
    var $p2 = [];

    for (var $$pai_8 = 2; $$pai_8 < arguments.length; ++$$pai_8) {
        $p2[$$pai_8 - 2] = arguments[$$pai_8];
    }
    var $v_0 = document.createElement('span');

    if (!SP.ScriptUtility.isNullOrUndefined($p2)) {
        for (var $$arr_4 = $p2, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_1 = $$arr_4[$$idx_6];

            Sys.UI.DomElement.addCssClass($v_0, $v_1);
        }
    }
    SP.UI.UIUtility.setInnerText($v_0, $p1);
    $p0.appendChild($v_0);
    return $v_0;
};
SP.Storefront.StorefrontApp.addTextNewLine = function SP_Storefront_StorefrontApp$addTextNewLine($p0, $p1) {
    var $p2 = [];

    for (var $$pai_5 = 2; $$pai_5 < arguments.length; ++$$pai_5) {
        $p2[$$pai_5 - 2] = arguments[$$pai_5];
    }
    var $v_0 = SP.Storefront.StorefrontApp.addTextInLine.apply(null, [$p0, $p1].concat($p2));
    var $v_1 = document.createElement('br');

    $p0.appendChild($v_1);
    return $v_0;
};
SP.Storefront.StorefrontApp.addHiddenFormField = function SP_Storefront_StorefrontApp$addHiddenFormField($p0, $p1) {
    SP.Storefront.StorefrontApp.addHiddenFormFieldWithFowardOption($p0, $p1, false);
};
SP.Storefront.StorefrontApp.addForwardFormField = function SP_Storefront_StorefrontApp$addForwardFormField($p0, $p1) {
    SP.Storefront.StorefrontApp.addHiddenFormFieldWithFowardOption($p0, $p1, true);
};
SP.Storefront.StorefrontApp.addHiddenFormFieldWithFowardOption = function SP_Storefront_StorefrontApp$addHiddenFormFieldWithFowardOption($p0, $p1, $p2) {
    if ($p2) {
        $p0 = 'SPStorefrontQueryStringForward' + $p0;
    }
    var $v_0 = document.createElement('input');

    $v_0.setAttribute('type', 'hidden');
    $v_0.setAttribute('name', $p0);
    $v_0.setAttribute('value', $p1);
    (SP.Storefront.StorefrontApp.get_mainForm()).appendChild($v_0);
};
SP.Storefront.StorefrontApp.getHostUrl = function SP_Storefront_StorefrontApp$getHostUrl() {
    var $v_0 = window.location.protocol;
    var $v_1 = new Sys.StringBuilder($v_0);

    $v_1.append('//');
    $v_1.append(window.location.host);
    return $v_1.toString();
};
SP.Storefront.StorefrontApp.showLoadingMessage = function SP_Storefront_StorefrontApp$showLoadingMessage() {
    SP.Storefront.StorefrontApp.loadingActions++;
    SP.Storefront.StorefrontApp.loadingAnimation.triggerForwardsAction();
};
SP.Storefront.StorefrontApp.showLoadingMessageAnimation = function SP_Storefront_StorefrontApp$showLoadingMessageAnimation() {
    SP.Storefront.StorefrontApp.loadingDiv.set_hidden(false);
};
SP.Storefront.StorefrontApp.hideLoadingMessage = function SP_Storefront_StorefrontApp$hideLoadingMessage() {
    SP.Storefront.StorefrontApp.loadingActions--;
    if (SP.Storefront.StorefrontApp.loadingActions <= 0) {
        SP.Storefront.StorefrontApp.loadingActions = 0;
        SP.Storefront.StorefrontApp.loadingAnimation.triggerBackwardsAction();
    }
};
SP.Storefront.StorefrontApp.hideLoadingMessageAnimation = function SP_Storefront_StorefrontApp$hideLoadingMessageAnimation() {
    SP.Storefront.StorefrontApp.loadingDiv.set_hidden(true);
};
SP.Storefront.StorefrontApp.preRequest = function SP_Storefront_StorefrontApp$preRequest($p0, $p1) {
    var $v_0 = (SP.Storefront.StorefrontApp.get_currentView()).header.billingMarket.changeToMatchState();
    var $v_1 = (SP.Storefront.StorefrontApp.get_currentView()).header.contentMarket.changeToMatchState();

    ($p0.get_request()).set_userContext(SP.Storefront.StorefrontApp.$4J($v_0, $v_1, $p1));
};
SP.Storefront.StorefrontApp.postSucceededRequest = function SP_Storefront_StorefrontApp$postSucceededRequest($p0) {
    var $v_0;
    var $v_1;
    var $v_2;
    var $$t_4, $$t_5, $$t_6;

    SP.Storefront.StorefrontApp.$3c($p0.get_executor(), $$t_4 = {
        'val': $v_0
    }, $$t_5 = {
        'val': $v_2
    }, $$t_6 = {
        'val': $v_1
    }), $v_0 = $$t_4.val, $v_2 = $$t_5.val, $v_1 = $$t_6.val;
    (SP.Storefront.StorefrontApp.get_currentView()).header.currentBillingMarket = $v_0;
    (SP.Storefront.StorefrontApp.get_currentView()).header.currentContentMarket = $v_2;
    return $v_1;
};
SP.Storefront.StorefrontApp.postFailedRequest = function SP_Storefront_StorefrontApp$postFailedRequest($p0) {
    var $v_0;
    var $v_1;
    var $v_2;
    var $$t_4, $$t_5, $$t_6;

    SP.Storefront.StorefrontApp.$3c($p0.get_executor(), $$t_4 = {
        'val': $v_0
    }, $$t_5 = {
        'val': $v_2
    }, $$t_6 = {
        'val': $v_1
    }), $v_0 = $$t_4.val, $v_2 = $$t_5.val, $v_1 = $$t_6.val;
    return $v_1;
};
SP.Storefront.StorefrontApp.verifyArgumentNotNull = function SP_Storefront_StorefrontApp$verifyArgumentNotNull($p0, $p1) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        var $v_0 = Error.argumentNull($p1);

        throw $v_0;
    }
};
SP.Storefront.StorefrontApp.addProxyDelegates = function SP_Storefront_StorefrontApp$addProxyDelegates($p0) {
    $p0.showLoadingDelegate = SP.Storefront.StorefrontApp.showLoadingMessage;
    $p0.hideLoadingDelegate = SP.Storefront.StorefrontApp.hideLoadingMessage;
    $p0.preRequestDelegate = SP.Storefront.StorefrontApp.preRequest;
    $p0.postSucceededRequestDelegate = SP.Storefront.StorefrontApp.postSucceededRequest;
    $p0.postFailedRequestDelegate = SP.Storefront.StorefrontApp.postFailedRequest;
};
SP.Storefront.StorefrontApp.showPermissionsPrompt = function SP_Storefront_StorefrontApp$showPermissionsPrompt($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('appinv.aspx');
    var $v_1 = new SP.Utilities.UrlBuilder($v_0);

    $v_1.addKeyValueQueryString('catalog', $p0.toString());
    $v_1.addKeyValueQueryString('appcatalogid', $p1);
    $v_1.addKeyValueQueryString('bm', $p2);
    $v_1.addKeyValueQueryString('cm', $p3);
    if (!(SP.Guid.get_empty()).equals($p4)) {
        $v_1.addKeyValueQueryString('AppInstanceId', $p4.toString());
    }
    if ($p5) {
        $v_1.addKeyValueQueryString('InfoOnly', '1');
    }
    var $v_2 = new SP.UI.DialogOptions();

    $v_2.autoSizeStartWidth = 499;
    $v_2.url = $v_1.get_url();
    $v_2.dialogReturnValueCallback = $p6;
    SP.Storefront.StorefrontApp.showModalDialog($v_2);
};
SP.Storefront.StorefrontApp.showAddListPrompt = function SP_Storefront_StorefrontApp$showAddListPrompt($p0) {
    if (SP.Storefront.SPOutOfBoxAppId.isSpreadsheetImport($p0.get_id())) {
        SP.Utilities.HttpUtility.navigateTo($p0.get_linkUrl());
    }
    else {
        SP.Storefront.StorefrontApp.showPrompt($p0.get_linkUrl(), SP.Storefront.StorefrontApp.newListPromptCallback);
    }
};
SP.Storefront.StorefrontApp.showPrompt = function SP_Storefront_StorefrontApp$showPrompt($p0, $p1) {
    var $v_0 = new SP.UI.DialogOptions();

    $v_0.url = $p0;
    $v_0.dialogReturnValueCallback = $p1;
    SP.Storefront.StorefrontApp.showModalDialog($v_0);
};
SP.Storefront.StorefrontApp.showModalDialog = function SP_Storefront_StorefrontApp$showModalDialog($p0) {
    if (SP.Storefront.StorefrontContext.get_fullPage()) {
        var $v_0 = $p0.url.indexOf('?') === -1 ? '?{0}={1}' : '&{0}={1}';

        $p0.url = String.format($p0.url + $v_0, 'NotThemed', '1');
    }
    SP.UI.ModalDialog.showModalDialog($p0);
};
SP.Storefront.StorefrontApp.integerDivision = function SP_Storefront_StorefrontApp$integerDivision($p0, $p1) {
    if (0 === $p1) {
        return 0;
    }
    return ($p0 - $p0 % $p1) / $p1;
};
SP.Storefront.StorefrontApp.formatFromPublisherString = function SP_Storefront_StorefrontApp$formatFromPublisherString($p0) {
    return SP.Storefront.StorefrontApp.formatFromPublisherStringWithUrl($p0, SP.ScriptUtility.emptyString);
};
SP.Storefront.StorefrontApp.formatFromPublisherStringWithUrl = function SP_Storefront_StorefrontApp$formatFromPublisherStringWithUrl($p0, $p1) {
    if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        return SP.ScriptUtility.emptyString;
    }
    var $v_0 = SP.Utilities.HttpUtility.htmlEncode($p0);

    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        $v_0 = String.format('<a href=\'{0}\' title=\'{1}\'>{1}</a>', SP.Storefront.StorefrontApp.urlPathEncodeAndValidate($p1), $v_0);
    }
    return String.format(SP.Res.storefront_AppDetails_Publisher, $v_0);
};
SP.Storefront.StorefrontApp.getAnchorStartTag = function SP_Storefront_StorefrontApp$getAnchorStartTag($p0) {
    return String.format('<a href=\'{0}\'>', SP.Utilities.HttpUtility.urlPathEncode($p0));
};
SP.Storefront.StorefrontApp.getPageNumberFromState = function SP_Storefront_StorefrontApp$getPageNumberFromState($p0, $p1) {
    var $v_0;
    var $$t_3, $$t_4;

    return $$t_4 = SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage($p0, $p1, $$t_3 = {
        'val': $v_0
    }), $v_0 = $$t_3.val, $$t_4;
};
SP.Storefront.StorefrontApp.getPageNumberFromStateCheckLastPage = function SP_Storefront_StorefrontApp$getPageNumberFromStateCheckLastPage($p0, $p1, $p2) {
    var $v_0 = 0;
    var $v_1 = SP.Storefront.StorefrontState.getStateParam('pg');

    if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
        $v_0 = Number.parseInvariant($v_1);
    }
    $v_0 = Math.max($v_0, 0);
    var $v_2 = SP.Storefront.StorefrontApp.integerDivision($p0, $p1);

    $v_2 = !($p0 % $p1) ? $v_2 - 1 : $v_2;
    $v_2 = Math.max(0, $v_2);
    $v_0 = Math.min($v_0, $v_2);
    $p2.val = $v_0 === $v_2;
    return $v_0;
};
SP.Storefront.StorefrontApp.getLocImageUrl = function SP_Storefront_StorefrontApp$getLocImageUrl($p0) {
    return SP.Utilities.Utility.get_layoutsLatestVersionUrl() + SP.Res.lcid + '/images/' + $p0;
};
SP.Storefront.StorefrontApp.getImageUrl = function SP_Storefront_StorefrontApp$getImageUrl($p0) {
    return SP.Utilities.Utility.get_layoutsLatestVersionUrl() + '/images/' + $p0;
};
SP.Storefront.StorefrontApp.getAppId = function SP_Storefront_StorefrontApp$getAppId($p0, $p1) {
    if ($p0.get_catalog()) {
        return $p0.get_id();
    }
    return $p1 ? ($p0.get_productId()).toString() : $p0.get_assetId();
};
SP.Storefront.StorefrontApp.redirectToAppDetails = function SP_Storefront_StorefrontApp$redirectToAppDetails($p0, $p1, $p2, $p3) {
    var $v_0 = SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();
    var $v_1 = SP.Storefront.StorefrontUrl.constructDetailsQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName(), $p0, $p1, $p2, $p3);

    SP.Utilities.HttpUtility.navigateTo($v_0 + '?' + $v_1);
};
SP.Storefront.StorefrontApp.redirectToAppManage = function SP_Storefront_StorefrontApp$redirectToAppManage($p0) {
    var $v_0 = 'SpecificAppLicenseManagement.aspx';

    if (SP.Storefront.StorefrontContext.get_isTenantAdmin()) {
        $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('TA_' + $v_0);
    }
    else if (SP.Storefront.StorefrontContext.get_isCentralAdmin()) {
        $v_0 = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), '_admin/CA_' + $v_0);
    }
    else {
        $v_0 = SP.Utilities.Utility.getLayoutsPageUrl($v_0);
    }
    var $v_1 = new SP.Utilities.UrlBuilder($v_0);

    $v_1.addKeyValueQueryString('ProductId', $p0);
    var $v_2 = $v_1.get_url();

    SP.Utilities.HttpUtility.navigateTo($v_2);
};
SP.Storefront.StorefrontApp.cantInstallAppsGetFailMessage = function SP_Storefront_StorefrontApp$cantInstallAppsGetFailMessage() {
    if (SP.Storefront.StorefrontContext.get_isAppWeb()) {
        return SP.Res.storefront_AppDetails_AppWeb;
    }
    else if (SP.Storefront.StorefrontContext.get_isReadOnlyWeb()) {
        return SP.Res.storefront_AppDetails_ReadOnlyWeb;
    }
    else if (!SP.Storefront.StorefrontContext.get_validDeployment() || !SP.Storefront.StorefrontContext.get_canInstallApps()) {
        return SP.Res.storefront_AppDetails_NoAppEnvironment;
    }
    else if (!SP.Storefront.StorefrontContext.get_installRights()) {
        return SP.Res.storefront_AppDetails_NoInstallRights;
    }
    return SP.ScriptUtility.emptyString;
};
SP.Storefront.StorefrontApp.canOnlyImportLicenseMessage = function SP_Storefront_StorefrontApp$canOnlyImportLicenseMessage() {
    if ((!SP.Storefront.StorefrontContext.get_installRights() || SP.Storefront.StorefrontContext.get_licensePurchase()) && SP.Storefront.StorefrontContext.get_importRights() && SP.Storefront.StorefrontContext.get_validDeployment()) {
        return SP.Res.storefront_AppDetails_OnlyImportRights;
    }
    return SP.ScriptUtility.emptyString;
};
SP.Storefront.StorefrontApp.urlPathEncodeAndValidate = function SP_Storefront_StorefrontApp$urlPathEncodeAndValidate($p0) {
    return PageUrlValidation(SP.Utilities.HttpUtility.urlPathEncode($p0));
};
SP.Storefront.StorefrontApp.$4G = function SP_Storefront_StorefrontApp$$4G() {
    var $v_0 = (SP.Storefront.StorefrontApp.get_views()).get_selected();
    var $v_1 = (SP.Storefront.StorefrontApp.get_views()).tryUpdateSelectedWithStateValue();
    var $v_2 = (SP.Storefront.StorefrontApp.get_views()).get_selected();

    if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
        $v_2 = SP.Storefront.StorefrontApp.$4K($v_1);
        (SP.Storefront.StorefrontApp.get_views()).addOrUpdateListItem($v_1, $v_2);
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        (SP.Storefront.StorefrontApp.get_layoutRoot()).appendChild($v_2.elementObject);
        $v_2.header.initBaseElements(SP.Storefront.StorefrontApp.$5J, SP.Storefront.StorefrontApp.$4z);
    }
    else {
        $v_0.cleanUpState();
        (SP.Storefront.StorefrontApp.get_layoutRoot()).replaceChild($v_2.elementObject, $v_0.elementObject);
        $v_2.copyCommonViewObjects($v_0);
    }
};
SP.Storefront.StorefrontApp.$4K = function SP_Storefront_StorefrontApp$$4K($p0) {
    switch ($p0) {
    case 'OfficeAppsView':
        return new SP.Storefront.OfficeAppsView();
    case 'AppDetailsView':
        return new SP.Storefront.AppDetailsView();
    case 'ErrorView':
        return new SP.Storefront.ErrorView();
    case 'HugView':
        return new SP.Storefront.HugView();
    case 'ManagementView':
        return new SP.Storefront.ManagementView();
    default:
        return new SP.Storefront.BaseView();
    }
};
SP.Storefront.StorefrontApp.$4I = function SP_Storefront_StorefrontApp$$4I() {
    var $v_0 = document.createElement('img');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-hugloadingimg');
    $v_0.alt = '/';
    $v_0.src = '/_layouts/15/images/loadingcirclests16.gif?rev=23';
    var $v_1 = document.createElement('span');

    Sys.UI.DomElement.addCssClass($v_1, 'ms-textXLarge');
    SP.UI.UIUtility.setInnerText($v_1, SP.Res.storefront_Loading);
    SP.Storefront.StorefrontApp.loadingDiv = new SP.Storefront.HtmlElement();
    SP.Storefront.StorefrontApp.loadingDiv.initElementNoInnerHtml('div', 'idStorefrontLoadingDiv', null, 'ms-storefront-loadingmain');
    SP.Storefront.StorefrontApp.loadingDiv.addCssClass('ms-popupBorder');
    SP.Storefront.StorefrontApp.loadingDiv.set_hidden(true);
    (SP.Storefront.StorefrontApp.get_layoutRoot()).appendChild(SP.Storefront.StorefrontApp.loadingDiv.elementObject);
    SP.Storefront.StorefrontApp.loadingDiv.appendChild($v_0);
    SP.Storefront.StorefrontApp.loadingDiv.appendChild($v_1);
    var $v_2 = SP.Storefront.StorefrontContext.get_fullPage() ? SP.Storefront.StorefrontApp.integerDivision(980, 2) : SP.Storefront.StorefrontApp.integerDivision(736, 2);

    $v_2 -= SP.Storefront.StorefrontApp.integerDivision(SP.Storefront.StorefrontApp.loadingDiv.get_width(), 2);
    if (SP.Storefront.StorefrontApp.get_isRTL()) {
        SP.Storefront.StorefrontApp.loadingDiv.elementObject.style.marginRight = $v_2 + 'px';
    }
    else {
        SP.Storefront.StorefrontApp.loadingDiv.elementObject.style.marginLeft = $v_2 + 'px';
    }
    SP.Storefront.StorefrontApp.loadingAnimation = new SP.Storefront.ForwardBackwardsAction(SP.Storefront.StorefrontApp.showLoadingMessageAnimation, SP.Storefront.StorefrontApp.hideLoadingMessageAnimation);
    SP.Storefront.StorefrontApp.loadingAnimation.setForwardsWait(SP.Storefront.StorefrontApp.loadingAnimationWait);
    SP.Storefront.StorefrontApp.loadingAnimation.setBackwardsWait(0);
    SP.Storefront.StorefrontApp.showLoadingMessage();
};
SP.Storefront.StorefrontApp.$3t = function SP_Storefront_StorefrontApp$$3t() {
    var $v_0 = eval('GetViewportWidth()');
    var $v_1 = eval('GetViewportHeight()');
    var $v_2 = new Sys.UI.Point($v_0, $v_1);
    var $v_3 = $v_2.y;

    SP.Storefront.StorefrontApp.$1q.style.height = $v_3 + 'px';
};
SP.Storefront.StorefrontApp.$4J = function SP_Storefront_StorefrontApp$$4J($p0, $p1, $p2) {
    var $v_0 = [];

    Array.addRange($v_0, [$p0, $p1, $p2]);
    return $v_0;
};
SP.Storefront.StorefrontApp.$3c = function SP_Storefront_StorefrontApp$$3c($p0, $p1, $p2, $p3) {
    $p3.val = null;
    $p1.val = SP.ScriptUtility.emptyString;
    $p2.val = SP.ScriptUtility.emptyString;
    var $v_0 = ($p0.get_webRequest()).get_userContext();

    if (!SP.ScriptUtility.isNullOrUndefined($v_0) && $v_0.length === 3) {
        $p1.val = $v_0[0];
        $p2.val = $v_0[1];
        $p3.val = $v_0[2];
    }
};
SP.Storefront.StorefrontApp.$3e = function SP_Storefront_StorefrontApp$$3e() {
    if ((SP.Storefront.StorefrontApp.get_views()).get_selectedId() === 'ErrorView') {
        var $v_0 = SP.Storefront.StorefrontState.getStateParam('vw');

        SP.Storefront.StorefrontState.makeStateParamsDirty();
        if ($v_0 !== 'ErrorView') {
            SP.Storefront.StorefrontState.setStateParam('vw', $v_0);
        }
    }
};
SP.Storefront.StorefrontApp.$4D = function SP_Storefront_StorefrontApp$$4D($p0) {
    SP.Storefront.StorefrontApp.$3t();
};
SP.Storefront.StorefrontApp.list_ListItemSelectionChanged = function SP_Storefront_StorefrontApp$list_ListItemSelectionChanged($p0, $p1) {
    var $v_0 = $p0;

    SP.Storefront.StorefrontState.setStateParam($v_0.stateParamKey, $p1.newListItem.get_valueId());
    SP.Storefront.StorefrontApp.updateUI();
};
SP.Storefront.StorefrontApp.$5d = function SP_Storefront_StorefrontApp$$5d($p0) {
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.ModalDialog.get_childDialog())) {
        SP.UI.ModalDialog.commonModalDialogClose(0, null);
    }
    SP.Storefront.StorefrontApp.updateUI();
};
SP.Storefront.StorefrontApp.$5J = function SP_Storefront_StorefrontApp$$5J($p0, $p1) {
    var $v_0 = SP.Storefront.StorefrontState.getStateParam('vw');

    if ($v_0 !== 'ManagementView' && $v_0 !== 'OfficeAppsView') {
        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            SP.Storefront.StorefrontState.setStateParam('vw', 'OfficeAppsView');
        }
    }
    SP.Storefront.StorefrontState.setStateParam('pg', SP.ScriptUtility.emptyString);
    SP.Storefront.StorefrontState.setStateParam('qry', (SP.Storefront.StorefrontApp.get_currentView()).header.searchBoxControl.get_searchQuery());
    SP.Storefront.StorefrontApp.updateUI();
};
SP.Storefront.StorefrontApp.$4z = function SP_Storefront_StorefrontApp$$4z($p0) {
    if ((SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue() === 'none' || (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue() === 'none') {
        return;
    }
    SP.Storefront.StorefrontApp.addHiddenFormField('task', 'SetCookie');
    SP.Storefront.StorefrontApp.addHiddenFormField('cm', (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue());
    SP.Storefront.StorefrontApp.addHiddenFormField('bm', (SP.Storefront.StorefrontApp.get_currentView()).header.get_billingMarketValue());
    SP.Storefront.StorefrontApp.$3e();
    SP.Storefront.StorefrontState.setStateParam('bm', SP.ScriptUtility.emptyString);
    SP.Storefront.StorefrontState.setStateParam('cm', SP.ScriptUtility.emptyString);
    SP.Storefront.StorefrontState.updateStateHash();
    (SP.Storefront.StorefrontApp.get_mainForm()).action = window.location.pathname + window.location.search + window.location.hash;
    SP.Storefront.StorefrontApp.submitForm();
};
SP.Storefront.StorefrontApp.newListPromptCallback = function SP_Storefront_StorefrontApp$newListPromptCallback($p0, $p1) {
    if ($p0 === 1) {
        SP.Utilities.HttpUtility.navigateTo(SP.Utilities.Utility.getLayoutsPageUrl('viewlsts.aspx'));
    }
};
SP.Storefront.StorefrontApp.newRequestPromptCallback = function SP_Storefront_StorefrontApp$newRequestPromptCallback($p0, $p1) {
    if ($p0 === 1) {
        var $v_0 = SP.Utilities.Utility.getLayoutsPageUrl('addanapp.aspx');
        var $v_1 = SP.Storefront.StorefrontUrl.constructBaseQueryString(SP.Storefront.StorefrontContext.get_sourceUrl(), SP.Storefront.StorefrontContext.get_sourceName());

        $v_1 += String.format('#{0}={1}', 'mcg', 4);
        SP.Utilities.HttpUtility.navigateTo($v_0 + '?' + $v_1);
    }
};
SP.Storefront.StorefrontPublic = function SP_Storefront_StorefrontPublic() {
};
SP.Storefront.StorefrontPublic.start = function SP_Storefront_StorefrontPublic$start() {
    SP.Storefront.StorefrontApp.startWithDefault(SP.ScriptUtility.emptyString);
};
SP.Storefront.StorefrontPublic.startWithDefault = function SP_Storefront_StorefrontPublic$startWithDefault(defaultView) {
    SP.Storefront.StorefrontApp.startWithDefault(defaultView);
};
SP.Storefront.PageButtonClickedEventArgs = function SP_Storefront_PageButtonClickedEventArgs() {
    SP.Storefront.PageButtonClickedEventArgs.initializeBase(this);
};
SP.Storefront.PageButtonClickedEventArgs.prototype = {
    buttonId: 0
};
SP.Storefront.FiveStarRating = function SP_Storefront_FiveStarRating($p0) {
    SP.Storefront.FiveStarRating.initializeBase(this);
    var $v_0 = '<span class=\'{1}\' id=\'{5}\'>    <img class=\'{2}\' src=\'{0}\' alt=\'{7}\'/></span><span class=\'{3}\' id=\'{6}\'>    <img class=\'{4}\' src=\'{0}\' alt=\'{7}\'/></span>';

    $v_0 = String.format($v_0, '/_layouts/15/images/spstorefront.png?rev=23', 'ms-storefront-fivestaremptyspan', 'ms-storefront-fivestaremptyimg', 'ms-storefront-fivestarfilledspan', 'ms-storefront-fivestarfilledimg', 'idStorefrontRatingsFiveStarEmpty', 'idStorefrontFiveStarFilled', SP.ScriptUtility.emptyString);
    this.initElementObject('div', $p0, null, $v_0, 'ms-storefront-fivestarspan');
    this.$3d_2 = this.getElementById('idStorefrontRatingsFiveStarEmpty');
    this.$2m_2 = this.getElementById('idStorefrontFiveStarFilled');
};
SP.Storefront.FiveStarRating.prototype = {
    get_rating: function SP_Storefront_FiveStarRating$get_rating() {
        return this.$2P_2 * 100;
    },
    set_rating: function SP_Storefront_FiveStarRating$set_rating($p0) {
        var $v_0 = Math.max(0, $p0);

        $v_0 = Math.min($v_0, 100);
        this.$2P_2 = $v_0 / 100;
        this.updateLayout();
        return $p0;
    },
    $2P_2: 0,
    $2m_2: null,
    $3d_2: null,
    updateLayout: function SP_Storefront_FiveStarRating$updateLayout() {
        this.$2m_2.set_width(this.$3d_2.get_width() * this.$2P_2);
        var $v_0 = 5 * this.$2P_2;
        var $v_1 = $v_0.toFixed(1);
        var $v_2 = this.$2m_2.elementObject.children[0];

        $v_2.alt = String.format(SP.Res.storefront_Ratings_Value, $v_1);
    }
};
SP.Storefront.Reviews = function SP_Storefront_Reviews() {
    this.$$d_$5Z_2 = Function.createDelegate(this, this.$5Z_2);
    this.$$d_$5b_2 = Function.createDelegate(this, this.$5b_2);
    SP.Storefront.Reviews.initializeBase(this);
    this.spProxy = new SP.Storefront.StorefrontProxy();
    SP.Storefront.StorefrontApp.addProxyDelegates(this.spProxy);
    this.spProxy.add_getReviewsCompleted(this.$$d_$5b_2);
    this.initElementNoInnerHtml('div', 'idStorefrontReviewsPane', null, SP.ScriptUtility.emptyString);
    this.$1U_2 = document.createElement('div');
    this.appendChild(this.$1U_2);
    this.$1b_2 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$1b_2, 'ms-storefront-floatopposite');
    this.$1U_2.appendChild(this.$1b_2);
    var $v_0 = document.createElement('span');

    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-ratespan');
    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-float');
    this.$1b_2.appendChild($v_0);
    var $v_1 = document.createElement('img');

    $v_1.alt = SP.ScriptUtility.emptyString;
    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-rateimg');
    $v_1.setAttribute('src', '/_layouts/15/images/spstorefront.png?rev=23');
    $v_0.appendChild($v_1);
    this.$12_2 = document.createElement('a');
    Sys.UI.DomElement.addCssClass(this.$12_2, 'ms-calloutLink');
    this.$12_2.href = (SP.Storefront.StorefrontUrl.getGoToOfficeUrl(8)).get_url();
    this.$12_2.target = '_blank';
    this.$12_2.id = 'idStorefrontWriteReviewsLink';
    SP.UI.UIUtility.setInnerText(this.$12_2, SP.Res.storefront_ReviewsPane_RateLink);
    this.$1b_2.appendChild(this.$12_2);
    this.$J_2 = new SP.Storefront.ListElement();
    this.$J_2.addCssClass('ms-storefront-reviewsortlist');
    this.$J_2.disableHightlightOnSelect = true;
    this.$J_2.set_listTypeId('ReviewsSorts');
    this.$J_2.stateParamKey = 'rst';
    this.$J_2.defaultValueId = '2';
    this.$J_2.addLabel(SP.Res.storefront_ReviewSort_Date, '2', 'ms-storefront-reviewsort');
    this.$J_2.addLabel(SP.Res.storefront_ReviewSort_Helpful, '1;1', 'ms-storefront-reviewsort');
    this.$J_2.addLabel(SP.Res.storefront_ReviewSort_HelpfulNegative, '1;2', 'ms-storefront-reviewsort');
    this.$1U_2.appendChild(this.$J_2.elementObject);
    this.$J_2.add_listItemSelectionChanged(this.$$d_$5Z_2);
    this.$J_2.tryUpdateSelectedWithStateValue();
    this.$1H_2 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$1H_2, 'ms-storefront-clear');
    this.$1U_2.appendChild(this.$1H_2);
    var $v_2 = String.format('<a href=\'{0}\' target=\'{1}\' id=\'{2}\' title=\'{3}\'>', SP.Utilities.HttpUtility.urlPathEncode((SP.Storefront.StorefrontUrl.getGoToOfficeUrl(2)).get_url()), '_blank', 'idStorefrontShowReviewsLink', String.format(SP.Res.storefront_ReviewsPane_ReadLink, SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString));
    var $v_3 = '</a>';
    var $v_4 = String.format(SP.Res.storefront_ReviewsPane_ReadLink, $v_2, $v_3);

    this.$1G_2 = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.$1G_2, 'ms-textSmall');
    SP.Storefront.HtmlElement.setInnerHTML($v_4, this.$1G_2);
    this.$1U_2.appendChild(this.$1G_2);
    this.$3r_2 = this.$1G_2.children[0];
    var $v_5 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-centertextouter');
    Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-reviewnoresults');
    this.appendChild($v_5);
    this.$B_2 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$B_2, 'ms-storefront-centertextinner');
    Sys.UI.DomElement.addCssClass(this.$B_2, 'ms-textLarge');
    $v_5.appendChild(this.$B_2);
    var $v_6 = document.createElement('div');

    Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-centertextouter');
    Sys.UI.DomElement.addCssClass($v_6, 'ms-storefront-reviewnoresults');
    this.appendChild($v_6);
    this.$1e_2 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$B_2, 'ms-storefront-centertextinner');
    Sys.UI.DomElement.addCssClass(this.$1e_2, 'ms-storefront-error');
    $v_6.appendChild(this.$1e_2);
};
SP.Storefront.Reviews.prototype = {
    spProxy: null,
    $1U_2: null,
    $J_2: null,
    $1H_2: null,
    $1e_2: null,
    $1b_2: null,
    $12_2: null,
    $3r_2: null,
    $B_2: null,
    $1G_2: null,
    $2g_2: null,
    updateReviewsWithAppMetadata: function SP_Storefront_Reviews$updateReviewsWithAppMetadata($p0) {
        if (this.$2g_2 !== ($p0.get_basicDetails()).get_assetId()) {
            this.$J_2.tryUpdateSelectedWithValueId('2');
            this.updateReviews(($p0.get_basicDetails()).get_assetId());
            var $v_0 = !SP.ScriptUtility.isNullOrUndefined($p0.get_license()) && ($p0.get_license()).hasData();

            SP.Storefront.HtmlElement.setDisplayAttribute(this.$1b_2, !$v_0);
            var $v_1 = SP.Storefront.StorefrontUrl.getGoToOfficeUrl(8);

            this.$3E_2($v_1, $p0, $v_0);
            SP.Storefront.HtmlElement.clearChildren(this.$B_2);
            if ($v_0) {
                var $v_3 = String.format('<a href=\'{0}\' target=\'{1}\' title=\'{2}\'>', SP.Utilities.HttpUtility.urlPathEncode($v_1.get_url()), '_blank', String.format(SP.Res.storefront_ReviewsPane_NoReviewsRate, SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString));
                var $v_4 = '</a>';
                var $v_5 = String.format(SP.Res.storefront_ReviewsPane_NoReviewsRate, $v_3, $v_4);

                SP.Storefront.HtmlElement.setInnerHTML($v_5, this.$B_2);
            }
            else {
                SP.UI.UIUtility.setInnerText(this.$B_2, SP.Res.storefront_ReviewsPane_NoReviews);
            }
            var $v_2 = SP.Storefront.StorefrontUrl.getGoToOfficeUrl(2);

            this.$3E_2($v_2, $p0, $v_0);
            this.$12_2.href = $v_1.get_url();
            this.$3r_2.href = $v_2.get_url();
        }
    },
    updateReviews: function SP_Storefront_Reviews$updateReviews($p0) {
        this.set_hidden(true);
        var $v_0 = this.$J_2.selected.get_valueId();

        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = '2';
        }
        var $v_1 = $v_0.split(';');

        if ($v_1.length >= 2) {
            this.spProxy.beginGetReviews((SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue(), $p0, $v_1[0], $v_1[1], $p0);
        }
        else {
            this.spProxy.beginGetReviews((SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue(), $p0, $v_0, SP.ScriptUtility.emptyString, $p0);
        }
    },
    $3E_2: function SP_Storefront_Reviews$$3E_2($p0, $p1, $p2) {
        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($p0, 'ai', ($p1.get_basicDetails()).get_assetId());
        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($p0, 'version', ($p1.get_basicDetails()).get_version());
        if ($p2) {
            SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($p0, 'cid', ($p1.get_license()).get_purchaserId());
            $p0.addKeyValueQueryString('SPDeployID', '1');
        }
    },
    $3j_2: function SP_Storefront_Reviews$$3j_2($p0, $p1) {
        if ($p0) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$1H_2, true);
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$1G_2, true);
            SP.Storefront.HtmlElement.setDisplayAttribute($p1, false);
            return true;
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1H_2, false);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$1G_2, false);
        SP.Storefront.HtmlElement.setDisplayAttribute($p1, true);
        return false;
    },
    $5b_2: function SP_Storefront_Reviews$$5b_2($p0, $p1) {
        SP.Storefront.HtmlElement.clearChildren(this.$1H_2);
        this.set_hidden(false);
        this.$2g_2 = $p1.asyncState;
        if (this.$3j_2(!SP.ScriptUtility.isNullOrUndefined($p1.errorData), this.$1e_2)) {
            var $v_1 = $p1.errorData['Message'];

            if (SP.ScriptUtility.isNullOrEmptyString($v_1)) {
                $v_1 = SP.Res.errorDialogTitleText;
            }
            SP.UI.UIUtility.setInnerText(this.$1e_2, $v_1);
            return;
        }
        var $v_0 = $p1.reviews.length;

        if (this.$3j_2(!$v_0, this.$B_2)) {
            return;
        }
        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = $p1.reviews[$v_2];
            var $v_4 = document.createElement('div');

            $v_4.id = 'idStorefrontSingleReview';
            Sys.UI.DomElement.addCssClass($v_4, 'ms-storefront-reviewmain');
            this.$1H_2.appendChild($v_4);
            var $v_5 = document.createElement('div');

            Sys.UI.DomElement.addCssClass($v_5, 'ms-storefront-reviewtitlediv');
            $v_4.appendChild($v_5);
            var $v_6 = document.createElement('div');

            Sys.UI.DomElement.addCssClass($v_6, 'ms-storefront-reviewstars');
            $v_5.appendChild($v_6);
            var $v_7 = new SP.Storefront.FiveStarRating('idStorefrontReviewsPaneRatings');

            $v_7.set_top(3);
            $v_6.appendChild($v_7.elementObject);
            $v_7.set_rating($v_3.get_rating());
            var $v_8 = document.createElement('div');

            $v_8.id = this.elementObject.id + 'Text';
            Sys.UI.DomElement.addCssClass($v_8, 'ms-storefront-reviewtitle');
            Sys.UI.DomElement.addCssClass($v_8, 'ms-textLarge');
            SP.UI.UIUtility.setInnerText($v_8, $v_3.get_title());
            $v_5.appendChild($v_8);
            var $v_9 = document.createElement('div');

            $v_9.id = this.elementObject.id + 'PostedBy';
            Sys.UI.DomElement.addCssClass($v_9, 'ms-metadata');
            Sys.UI.DomElement.addCssClass($v_9, 'ms-storefront-reviewpublisher');
            SP.UI.UIUtility.setInnerText($v_9, String.format(SP.Res.storefront_ReviewsPane_Reviewer, $v_3.get_date(), $v_3.get_reviewer()));
            $v_4.appendChild($v_9);
            var $v_A = document.createElement('div');

            $v_A.id = this.elementObject.id + 'Body';
            SP.UI.UIUtility.setInnerText($v_A, $v_3.get_body());
            $v_4.appendChild($v_A);
        }
    },
    $5Z_2: function SP_Storefront_Reviews$$5Z_2($p0, $p1) {
        this.updateReviews(this.$2g_2);
    }
};
SP.Storefront.FilmStrip = function SP_Storefront_FilmStrip() {
    this.$$d_$3p_2 = Function.createDelegate(this, this.$3p_2);
    this.$$d_$50_2 = Function.createDelegate(this, this.$50_2);
    SP.Storefront.FilmStrip.initializeBase(this);
    this.initElementNoInnerHtml('div', 'idStorefrontFilmStrip', null, SP.ScriptUtility.emptyString);
    this.mainElement = new SP.Storefront.HtmlElement();
    this.mainElement.initElementNoInnerHtml('div', SP.ScriptUtility.emptyString, null, 'ms-storefront-filmstripmain');
    this.mainElement.addCssClass('ms-storefront-filmstripbase');
    this.appendHtmlElement(this.mainElement);
    this.mediaElements = new SP.Storefront.ListElement();
    this.mediaElements.addCssClass('ms-storefront-filmstriplist');
    this.mediaElements.set_listTypeId('FilmStrip');
    this.mediaElements.add_listItemSelectionChanged(this.$$d_$50_2);
    this.mediaElements.set_notDisplayed(true);
    this.appendHtmlElement(this.mediaElements);
};
SP.Storefront.FilmStrip.prototype = {
    mediaElements: null,
    mainElement: null,
    $1s_2: null,
    updateMedia: function SP_Storefront_FilmStrip$updateMedia($p0, $p1) {
        var $v_0 = true;
        var $v_1 = true;
        var $v_2 = [];
        var $v_3 = 0;

        if (SP.ScriptUtility.isNullOrUndefined($p0) || $p0.length <= 0) {
            $v_0 = false;
        }
        else {
            var $$t_B = this;

            Array.forEach($p0, function($p1_0) {
                var $v_5 = $p1_0;

                if (!SP.ScriptUtility.isNullOrEmptyString($v_5) && $v_3 < SP.Storefront.FilmStrip.$3q) {
                    Array.add($v_2, $v_5);
                }
                $v_3 = $v_2.length;
            });
            $v_0 = $v_3 > 0;
        }
        if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
            $v_1 = false;
        }
        if (!$v_0 && !$v_1) {
            this.set_notDisplayed(true);
            return;
        }
        this.set_notDisplayed(false);
        var $v_4 = $v_1 ? $v_3 + 1 : $v_3;

        if ($v_4 > 1) {
            this.mediaElements.set_notDisplayed(false);
            this.mediaElements.clearList();
            var $$t_C = this;

            Array.forEach($v_2, function($p1_0) {
                var $v_6 = $p1_0;

                $$t_C.$3F_2($v_6, false);
            });
            if ($v_1) {
                this.$3F_2($p1, true);
            }
            this.mediaElements.selectFirst(true);
        }
        else {
            this.mediaElements.set_notDisplayed(true);
            if ($v_0) {
                this.$3y_2($v_2[0]);
            }
            else if ($v_1) {
                this.$3z_2($p1);
            }
        }
    },
    $3F_2: function SP_Storefront_FilmStrip$$3F_2($p0, $p1) {
        var $v_0 = new SP.Storefront.FilmStripItem($p0, $p1);

        this.mediaElements.addListItem($v_0);
    },
    $3y_2: function SP_Storefront_FilmStrip$$3y_2($p0) {
        this.mainElement.removeAllChildren();
        this.$1s_2 = document.createElement('img');
        this.$1s_2.alt = SP.Res.storefront_AppDetails_Screenshot;
        Sys.UI.DomElement.addCssClass(this.$1s_2, 'ms-storefront-fullsize');
        var $v_0 = SP.Utilities.HttpUtility.urlPathEncode($p0);

        SP.Storefront.ImageUrlVerifier.verifyImageWithAction(this.$1s_2, $v_0, this.$$d_$3p_2);
    },
    $3z_2: function SP_Storefront_FilmStrip$$3z_2($p0) {
        var $v_0 = '<video class=\'{2}\' src=\'{1}\' controls=\'controls\' autoplay=\'autoplay\'>\r\n<object class=\'{2}\' data=\'data:application/x-silverlight-2,\' type=\'application/x-silverlight-2\'>\r\n<param name=\'source\' value=\'{4}\' />\r\n<param name=\'enableHtmlAccess\' value=\'true\' />\r\n<param name=\'windowless\' value=\'true\' />\r\n<param name=\'background\' value=\'#80808080\' />\r\n<param name=\'initParams\' value=\'mediaTitle={0},mediaSource={1},autoPlay=true\' />\r\n<a href=\'{1}\' class=\'media-link\' title=\'{3}\'>\r\n    <span class=\'media-title\'>{3}</span>\r\n</a>\r\n</object>\r\n</video>';

        $v_0 = String.format($v_0, SP.Res.storefront_AppDetails_VideoTitle, SP.Utilities.HttpUtility.urlPathEncode($p0), 'ms-storefront-fullsize', SP.Res.storefront_AppDetails_VideoMessage, SP.Utilities.HttpUtility.urlPathEncode(SP.Utilities.Utility.getLayoutsPageUrl('clientbin/mediaplayer.xap')));
        SP.Storefront.HtmlElement.setInnerHTML($v_0, this.mainElement.elementObject);
    },
    $3p_2: function SP_Storefront_FilmStrip$$3p_2($p0) {
        this.mainElement.appendChild(this.$1s_2);
    },
    $50_2: function SP_Storefront_FilmStrip$$50_2($p0, $p1) {
        var $v_0 = $p1.newListItem;

        if ($v_0.isVideo) {
            this.$3z_2($v_0.mediaUrl);
        }
        else {
            this.$3y_2($v_0.mediaUrl);
        }
    }
};
SP.Storefront.FilmStripItem = function SP_Storefront_FilmStripItem($p0, $p1) {
    this.$$d_$3p_4 = Function.createDelegate(this, this.$3p_4);
    SP.Storefront.FilmStripItem.initializeBase(this, [$p0]);
    this.mediaUrl = $p0;
    this.isVideo = $p1;
    this.elementObject.id = 'idStorefrontFilmStripItem';
    this.addCssClass('ms-storefront-filmstripitem');
    this.mainDiv = document.createElement('div');
    Sys.UI.DomElement.addCssClass(this.mainDiv, 'ms-storefront-filmstripthumb');
    Sys.UI.DomElement.addCssClass(this.mainDiv, 'ms-storefront-filmstripbase');
    Sys.UI.DomElement.addCssClass(this.mainDiv, 'ms-storefront-filmstriphighlight');
    this.mainImage = document.createElement('img');
    this.mainImage.alt = SP.Res.storefront_AppDetails_Thumbnail;
    if ($p1) {
        var $v_0 = document.createElement('div');

        Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-filmstripvideoimgdiv');
        Sys.UI.DomElement.addCssClass(this.mainImage, 'ms-storefront-filmstripvideoimg');
        this.mainImage.src = SP.Utilities.HttpUtility.urlPathEncode('/_layouts/15/images/spstorefront.png?rev=23');
        $v_0.appendChild(this.mainImage);
        this.mainDiv.appendChild($v_0);
    }
    else {
        Sys.UI.DomElement.addCssClass(this.mainImage, 'ms-storefront-fullsize');
        SP.Storefront.ImageUrlVerifier.verifyImageWithAction(this.mainImage, SP.Utilities.HttpUtility.urlPathEncode($p0), this.$$d_$3p_4);
    }
    this.appendChild(this.mainDiv);
};
SP.Storefront.FilmStripItem.prototype = {
    mediaUrl: null,
    isVideo: false,
    mainDiv: null,
    mainImage: null,
    selectAction: function SP_Storefront_FilmStripItem$selectAction() {
        SP.Storefront.ListItemElement.prototype.selectAction.call(this);
        Sys.UI.DomElement.addCssClass(this.mainDiv, 'ms-storefront-filmstripselect');
    },
    deselectAction: function SP_Storefront_FilmStripItem$deselectAction() {
        SP.Storefront.ListItemElement.prototype.deselectAction.call(this);
        Sys.UI.DomElement.removeCssClass(this.mainDiv, 'ms-storefront-filmstripselect');
    },
    $3p_4: function SP_Storefront_FilmStripItem$$3p_4($p0) {
        this.mainDiv.appendChild(this.mainImage);
    }
};
SP.Storefront.SelectionDropDown = function SP_Storefront_SelectionDropDown($p0) {
    this.$2O_2 = {};
    SP.Storefront.SelectionDropDown.initializeBase(this);
    this.$2N_2 = $p0;
    this.initElementNoInnerHtml('div', 'idStorefrontDropDown', null, null);
    this.setupAccessibleAnchor();
    this.menuTitleElement = document.createElement('span');
    this.appendChild(this.menuTitleElement);
    Sys.UI.DomElement.addCssClass(this.menuTitleElement, 'ms-textSmall');
    this.$1z_2 = document.createElement('span');
    SP.UI.UIUtility.setInnerText(this.$1z_2, Strings.STS.L_OpenMenuKeyAccessible);
    Sys.UI.DomElement.addCssClass(this.$1z_2, 'ms-accessible');
    this.appendChild(this.$1z_2);
    this.$15_2 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$15_2, 'ms-storefront-arrowspan');
    this.appendChild(this.$15_2);
    var $v_0 = document.createElement('img');

    $v_0.alt = SP.ScriptUtility.emptyString;
    Sys.UI.DomElement.addCssClass($v_0, 'ms-storefront-arrowimg');
    $v_0.setAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
    this.$15_2.appendChild($v_0);
    this.$16_2 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$16_2, 'ms-storefront-arrowgrayspan');
    this.appendChild(this.$16_2);
    var $v_1 = document.createElement('img');

    $v_1.alt = SP.ScriptUtility.emptyString;
    Sys.UI.DomElement.addCssClass($v_1, 'ms-storefront-arrowgrayimg');
    $v_1.setAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
    this.$16_2.appendChild($v_1);
    this.$w_2 = document.createElement('span');
    Sys.UI.DomElement.addCssClass(this.$w_2, 'ms-storefront-arrowdarkspan');
    this.appendChild(this.$w_2);
    var $v_2 = document.createElement('img');

    $v_2.alt = SP.ScriptUtility.emptyString;
    Sys.UI.DomElement.addCssClass($v_2, 'ms-storefront-arrowdarkimg');
    $v_2.setAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
    this.$w_2.appendChild($v_2);
    if (this.$2N_2) {
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$w_2, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$16_2, true);
        Sys.UI.DomElement.addCssClass(this.menuTitleElement, 'ms-storefront-dropdowntitle');
    }
    else {
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$15_2, true);
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$w_2, true);
    }
    this.$31_2 = SP.UI.UIUtility.generateRandomElementId() + '_menu';
    this.$1R_2 = SP.UI.Menu.create(this.$31_2);
    this.$1R_2.hideIcons();
    Sys.Application.registerDisposableObject(this);
};
SP.Storefront.SelectionDropDown.create = function SP_Storefront_SelectionDropDown$create($p0, $p1, $p2) {
    var $v_0;
    var $$t_4, $$t_5;

    if ($$t_5 = SP.Storefront.SelectionDropDown.tryGetSelectionDropDown($p0, $$t_4 = {
        'val': $v_0
    }), $v_0 = $$t_4.val, $$t_5) {
        throw Error.argument('id', 'Selection dropdown with the specified id already exists.');
    }
    $v_0 = new SP.Storefront.SelectionDropDown($p2);
    $v_0.$1Q_2 = $p0;
    $v_0.elementObject.id += $p0;
    $v_0.$39_2 = $p1;
    SP.Storefront.SelectionDropDown.dropDowns[$p0] = $v_0;
    return $v_0;
};
SP.Storefront.SelectionDropDown.optionOnClick = function SP_Storefront_SelectionDropDown$optionOnClick($p0, $p1) {
    SP.Storefront.SelectionDropDown.optionOnClickForceOption($p0, $p1, false);
};
SP.Storefront.SelectionDropDown.optionOnClickForceOption = function SP_Storefront_SelectionDropDown$optionOnClickForceOption($p0, $p1, $p2) {
    var $v_0;
    var $v_1;
    var $$t_7, $$t_8;

    if (!($$t_8 = SP.Storefront.SelectionDropDown.tryGetSelectionDropDown($p0, $$t_7 = {
        'val': $v_0
    }), $v_0 = $$t_7.val, $$t_8)) { }
    var $$t_9, $$t_A;

    if (!($$t_A = $v_0.$24_2($p1, $$t_9 = {
        'val': $v_1
    }), $v_1 = $$t_9.val, $$t_A)) { }
    if ($v_0.$2W_2($v_1) || $p2) {
        var $v_2 = ($v_0.get_events()).getHandler('__SelectionDropDownChanged');

        if ($v_2) {
            var $v_3 = new SP.Storefront.BaseEventArgs();

            $v_2($v_3);
        }
    }
};
SP.Storefront.SelectionDropDown.tryGetSelectionDropDown = function SP_Storefront_SelectionDropDown$tryGetSelectionDropDown($p0, $p1) {
    $p1.val = SP.Storefront.SelectionDropDown.dropDowns[$p0];
    return !SP.ScriptUtility.isNullOrUndefined($p1.val);
};
SP.Storefront.SelectionDropDown.prototype = {
    get_dropDownId: function SP_Storefront_SelectionDropDown$get_dropDownId() {
        return this.$1Q_2;
    },
    $1Q_2: null,
    get_selectedOptionId: function SP_Storefront_SelectionDropDown$get_selectedOptionId() {
        return this.$V_2.$X_2;
    },
    get_selectedOption: function SP_Storefront_SelectionDropDown$get_selectedOption() {
        return this.$V_2;
    },
    $V_2: null,
    menuTitleElement: null,
    get_customMenuTitle: function SP_Storefront_SelectionDropDown$get_customMenuTitle() {
        return this.$3Y_2;
    },
    set_customMenuTitle: function SP_Storefront_SelectionDropDown$set_customMenuTitle($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            this.set_useStandardTitleCSS(true);
            SP.UI.UIUtility.setInnerText(this.menuTitleElement, this.$V_2.$19_2);
        }
        else {
            this.set_useStandardTitleCSS(false);
            SP.UI.UIUtility.setInnerText(this.menuTitleElement, $p0);
        }
        this.$3Y_2 = $p0;
        return $p0;
    },
    $3Y_2: null,
    get_useStandardTitleCSS: function SP_Storefront_SelectionDropDown$get_useStandardTitleCSS() {
        return this.$49_2;
    },
    set_useStandardTitleCSS: function SP_Storefront_SelectionDropDown$set_useStandardTitleCSS($p0) {
        if ($p0) {
            Sys.UI.DomElement.addCssClass(this.menuTitleElement, 'ms-textSmall');
        }
        else {
            Sys.UI.DomElement.removeCssClass(this.menuTitleElement, 'ms-textSmall');
        }
        this.$49_2 = $p0;
        return $p0;
    },
    $49_2: false,
    add_selectionDropDownExternalChanged: function SP_Storefront_SelectionDropDown$add_selectionDropDownExternalChanged($p0) {
        (this.get_events()).addHandler('__SelectionDropDownChanged', $p0);
    },
    remove_selectionDropDownExternalChanged: function SP_Storefront_SelectionDropDown$remove_selectionDropDownExternalChanged($p0) {
        (this.get_events()).removeHandler('__SelectionDropDownChanged', $p0);
    },
    $1R_2: null,
    $31_2: null,
    $15_2: null,
    $w_2: null,
    $16_2: null,
    $1z_2: null,
    $2N_2: false,
    $1P_2: null,
    $39_2: null,
    $2n_2: false,
    setScreenReaderText: function SP_Storefront_SelectionDropDown$setScreenReaderText($p0) {
        this.$1z_2.innerText = $p0;
    },
    selectOption: function SP_Storefront_SelectionDropDown$selectOption($p0, $p1) {
        SP.Storefront.SelectionDropDown.optionOnClickForceOption(this.$1Q_2, $p0, $p1);
    },
    setOptionAttribute: function SP_Storefront_SelectionDropDown$setOptionAttribute($p0, $p1, $p2) {
        var $v_0;
        var $$t_4, $$t_5;

        if (!($$t_5 = this.$24_2($p0, $$t_4 = {
            'val': $v_0
        }), $v_0 = $$t_4.val, $$t_5)) {
            return;
        }
        this.$3u_2($v_0, $p1, $p2);
    },
    setOptionTextAttribute: function SP_Storefront_SelectionDropDown$setOptionTextAttribute($p0, $p1) {
        var $v_0;
        var $$t_3, $$t_4;

        if (!($$t_4 = this.$24_2($p0, $$t_3 = {
            'val': $v_0
        }), $v_0 = $$t_3.val, $$t_4)) {
            return;
        }
        this.$3u_2($v_0, 'text', $p1);
        $v_0.$19_2 = $p1;
    },
    setEnabledOptionAttribute: function SP_Storefront_SelectionDropDown$setEnabledOptionAttribute($p0, $p1) {
        var $v_0 = $p1 ? SP.ScriptUtility.emptyString : 'false';

        this.setOptionAttribute($p0, 'enabled', $v_0);
    },
    addOption: function SP_Storefront_SelectionDropDown$addOption($p0, $p1, $p2) {
        var $v_0;
        var $$t_4, $$t_5;

        if ($$t_5 = this.$24_2($p1, $$t_4 = {
            'val': $v_0
        }), $v_0 = $$t_4.val, $$t_5) { }
        $v_0 = SP.Storefront.SelectionDropDownOption.create(this.$1R_2, this.$1Q_2, $p0, $p1, $p2);
        this.$2O_2[$p1] = $v_0;
        if ($p2 || SP.ScriptUtility.isNullOrUndefined(this.$V_2)) {
            this.$2W_2($v_0);
            this.$1P_2 = $v_0;
        }
    },
    clearOptions: function SP_Storefront_SelectionDropDown$clearOptions() {
        this.$1R_2 = SP.UI.Menu.create(this.$31_2);
        this.$2O_2 = {};
    },
    valueEqualsState: function SP_Storefront_SelectionDropDown$valueEqualsState($p0) {
        var $v_0 = !SP.ScriptUtility.isNullOrUndefined(this.$1P_2) ? this.$1P_2.$X_2 : SP.ScriptUtility.emptyString;

        return SP.Storefront.StorefrontState.valueEqualsStateWithDefault(this.$39_2, $p0, $v_0);
    },
    changeToMatchState: function SP_Storefront_SelectionDropDown$changeToMatchState() {
        var $v_0 = SP.ScriptUtility.emptyString;
        var $v_1 = SP.Storefront.StorefrontState.getStateParam(this.$39_2);

        if (!SP.ScriptUtility.isNullOrUndefined(this.$V_2)) {
            $v_0 = this.$V_2.$X_2;
        }
        if ($v_1 !== $v_0) {
            var $v_2;
            var $$t_3, $$t_4;

            if ($$t_4 = this.$24_2($v_1, $$t_3 = {
                'val': $v_2
            }), $v_2 = $$t_3.val, $$t_4) {
                this.$2W_2($v_2);
                $v_0 = $v_2.$X_2;
            }
            else if (!SP.ScriptUtility.isNullOrUndefined(this.$1P_2)) {
                this.$2W_2(this.$1P_2);
                $v_0 = this.$1P_2.$X_2;
            }
        }
        return $v_0;
    },
    $2W_2: function SP_Storefront_SelectionDropDown$$2W_2($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$V_2) && !SP.ScriptUtility.isNullOrUndefined($p0) && $p0.elementObject === this.$V_2.elementObject && SP.ScriptUtility.isNullOrEmptyString(this.get_customMenuTitle())) {
            return false;
        }
        this.$V_2 = $p0;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$V_2)) {
            this.elementObject.id = 'idStorefrontDropDown' + this.$1Q_2 + this.get_selectedOptionId();
            if (SP.ScriptUtility.isNullOrEmptyString(this.get_customMenuTitle())) {
                SP.UI.UIUtility.setInnerText(this.menuTitleElement, this.$V_2.$19_2);
            }
        }
        return true;
    },
    $24_2: function SP_Storefront_SelectionDropDown$$24_2($p0, $p1) {
        $p1.val = this.$2O_2[$p0];
        return !SP.ScriptUtility.isNullOrUndefined($p1.val);
    },
    $3u_2: function SP_Storefront_SelectionDropDown$$3u_2($p0, $p1, $p2) {
        if (SP.ScriptUtility.isNullOrEmptyString($p2)) {
            $p0.elementObject.removeAttribute($p1);
        }
        else {
            $p0.elementObject.setAttribute($p1, $p2);
        }
        this.$2n_2 = true;
    },
    onMouseClick: function SP_Storefront_SelectionDropDown$onMouseClick($p0) {
        SP.UI.UIUtility.cancelEvent($p0);
        this.$1R_2.show(this.elementObject, this.$2n_2, false, -1);
        this.$2n_2 = false;
        $p0.preventDefault();
    },
    onMouseOver: function SP_Storefront_SelectionDropDown$onMouseOver($p0) {
        if (this.$2N_2) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$15_2, true);
            Sys.UI.DomElement.addCssClass(this.menuTitleElement, 'ms-storefront-revertcolor');
        }
        else {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$16_2, true);
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$w_2, false);
    },
    onMouseOut: function SP_Storefront_SelectionDropDown$onMouseOut($p0) {
        if (this.$2N_2) {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$15_2, false);
            Sys.UI.DomElement.removeCssClass(this.menuTitleElement, 'ms-storefront-revertcolor');
        }
        else {
            SP.Storefront.HtmlElement.setDisplayAttribute(this.$16_2, false);
        }
        SP.Storefront.HtmlElement.setDisplayAttribute(this.$w_2, true);
    },
    onKeyDown: function SP_Storefront_SelectionDropDown$onKeyDown($p0) {
        if ($p0.altKey && $p0.keyCode === 40) {
            this.$1R_2.show(this.elementObject, false, false, -1);
        }
    },
    dispose: function SP_Storefront_SelectionDropDown$dispose() {
        delete SP.Storefront.SelectionDropDown.dropDowns[this.$1Q_2];
    }
};
SP.Storefront.SelectionDropDownPublic = function SP_Storefront_SelectionDropDownPublic() {
};
SP.Storefront.SelectionDropDownPublic.optionOnClick = function SP_Storefront_SelectionDropDownPublic$optionOnClick(dropdownId, optionId) {
    SP.Storefront.SelectionDropDown.optionOnClick(dropdownId, optionId);
};
SP.Storefront.SelectionDropDownOption = function SP_Storefront_SelectionDropDownOption() {
    SP.Storefront.SelectionDropDownOption.initializeBase(this);
};
SP.Storefront.SelectionDropDownOption.create = function SP_Storefront_SelectionDropDownOption$create($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new SP.Storefront.SelectionDropDownOption();

    $v_0.$X_2 = $p3;
    var $v_1 = SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode($p1);
    var $v_2 = SP.Utilities.HttpUtility.htmlEncode($p3);

    $v_0.$19_2 = $p2;
    var $v_3 = String.format('SP.Storefront.SelectionDropDownPublic.optionOnClick(\'{0}\', \'{1}\')', $v_1, $v_2);

    $v_0.elementObject = $p0.addMenuItem($v_0.$19_2, $v_3, SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString, 0, SP.ScriptUtility.emptyString, $v_0.$X_2);
    $v_0.addBasicHandlers();
    return $v_0;
};
SP.Storefront.SelectionDropDownOption.prototype = {
    get_valueId: function SP_Storefront_SelectionDropDownOption$get_valueId() {
        return this.$X_2;
    },
    $X_2: null,
    get_displayName: function SP_Storefront_SelectionDropDownOption$get_displayName() {
        return this.$19_2;
    },
    set_displayName: function SP_Storefront_SelectionDropDownOption$set_displayName($p0) {
        this.$19_2 = $p0;
        return $p0;
    },
    $19_2: null
};
SP.Storefront.PagingControlsWrapper = function SP_Storefront_PagingControlsWrapper($p0) {
    this.$$d_$1c_2 = Function.createDelegate(this, this.$1c_2);
    SP.Storefront.PagingControlsWrapper.initializeBase(this);
    this.$17_2 = new SP.Storefront.StorefrontPagingControl($p0);
    var $v_0 = new SP.HtmlBuilder();

    $v_0.addAttribute('id', $p0 + 'pagingcontrolspan');
    $v_0.addAttribute('class', 'ms-storefront-innerpagingtext');
    $v_0.renderBeginTag('span');
    $v_0.renderEndTag();
    var $v_1 = this.$17_2.render($v_0.toString());

    this.$2k_2 = $p0;
    this.initElementObject('div', this.$2k_2, null, $v_1, SP.ScriptUtility.emptyString);
    this.$17_2.$1u_1 = this.$$d_$1c_2;
};
SP.Storefront.PagingControlsWrapper.prototype = {
    $17_2: null,
    $3n_2: false,
    $2k_2: null,
    get_$4r_2: function SP_Storefront_PagingControlsWrapper$get_$4r_2() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$2t_2)) {
            this.$2t_2 = $get(this.$2k_2 + 'pagingcontrolspan');
        }
        return this.$2t_2;
    },
    $2t_2: null,
    add_pageButtonClicked: function SP_Storefront_PagingControlsWrapper$add_pageButtonClicked($p0) {
        (this.get_events()).addHandler('__PageButtonClicked', $p0);
    },
    remove_pageButtonClicked: function SP_Storefront_PagingControlsWrapper$remove_pageButtonClicked($p0) {
        (this.get_events()).removeHandler('__PageButtonClicked', $p0);
    },
    updateLayout: function SP_Storefront_PagingControlsWrapper$updateLayout() {
        if (!this.$3n_2) {
            this.$17_2.postRender();
            this.$3n_2 = true;
        }
    },
    hide: function SP_Storefront_PagingControlsWrapper$hide($p0) {
        this.$17_2.setButtonStateAux($p0, 0);
    },
    disable: function SP_Storefront_PagingControlsWrapper$disable($p0) {
        this.$17_2.setButtonStateAux($p0, 1);
    },
    enable: function SP_Storefront_PagingControlsWrapper$enable($p0) {
        this.$17_2.setButtonStateAux($p0, 2);
    },
    $1c_2: function SP_Storefront_PagingControlsWrapper$$1c_2($p0) {
        var $v_0 = new SP.Storefront.PageButtonClickedEventArgs();

        $v_0.buttonId = $p0;
        var $v_1 = (this.get_events()).getHandler('__PageButtonClicked');

        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1(this, $v_0);
        }
    },
    setMiddleText: function SP_Storefront_PagingControlsWrapper$setMiddleText($p0) {
        SP.Storefront.HtmlElement.setInnerHTML($p0, this.get_$4r_2());
    }
};
SP.Storefront.StorefrontPagingControl = function SP_Storefront_StorefrontPagingControl($p0) {
    SP.Storefront.StorefrontPagingControl.initializeBase(this, [$p0]);
};
SP.Storefront.StorefrontPagingControl.prototype = {
    get_pageButtonClickedDelegate: function SP_Storefront_StorefrontPagingControl$get_pageButtonClickedDelegate() {
        return this.$1u_1;
    },
    set_pageButtonClickedDelegate: function SP_Storefront_StorefrontPagingControl$set_pageButtonClickedDelegate($p0) {
        this.$1u_1 = $p0;
        return $p0;
    },
    $1u_1: null,
    setButtonStateAux: function SP_Storefront_StorefrontPagingControl$setButtonStateAux($p0, $p1) {
        this.setButtonState($p0, $p1);
    },
    onNext: function SP_Storefront_StorefrontPagingControl$onNext() {
        this.$1u_1(2);
    },
    onPrev: function SP_Storefront_StorefrontPagingControl$onPrev() {
        this.$1u_1(1);
    }
};
SP.Storefront.Carousel = function SP_Storefront_Carousel($p0, $p1) {
    this.$$d_$4s_2 = Function.createDelegate(this, this.$4s_2);
    this.$$d_$4A_2 = Function.createDelegate(this, this.$4A_2);
    SP.Storefront.Carousel.initializeBase(this);
    this.$2z_2 = $p0;
    this.$2y_2 = $p1;
    this.initElementNoInnerHtml('div', 'idStorefrontCarousel', null, SP.ScriptUtility.emptyString);
    this.set_width($p0 * $p1);
    this.elementObject.style.overflow = 'hidden';
    this.$3_2 = new SP.Storefront.PagingControlsWrapper('idPagingControlsWrapper');
    this.appendChild(this.$3_2.elementObject);
    this.$3_2.add_pageButtonClicked(this.$$d_$4A_2);
    this.$3_2.addCssClass('ms-storefront-carouselarrow');
    this.$3_2.addCssClass('ms-storefront-floatopposite');
    this.$3_2.addCssClass('ms-storefront-mngsortlist');
    this.titleLabel = document.createElement('div');
    this.appendChild(this.titleLabel);
    this.scrollDiv = new SP.Storefront.HtmlElement();
    this.scrollDiv.initElementNoInnerHtml('div', 'scrollDiv', null, SP.ScriptUtility.emptyString);
    this.scrollDiv.elementObject.style.position = 'relative';
    this.appendChild(SP.Storefront.HtmlElement.createClearDiv());
    this.appendHtmlElement(this.scrollDiv);
    this.itemList = new SP.Storefront.ListElement();
    this.itemList.set_listTypeId('MyNewAppIcons');
    this.itemList.add_listItemFocused(this.$$d_$4s_2);
    this.scrollDiv.appendHtmlElement(this.itemList);
};
SP.Storefront.Carousel.prototype = {
    get_title: function SP_Storefront_Carousel$get_title() {
        return SP.UI.UIUtility.getInnerText(this.titleLabel);
    },
    set_title: function SP_Storefront_Carousel$set_title($p0) {
        SP.UI.UIUtility.setInnerText(this.titleLabel, $p0);
        return $p0;
    },
    itemList: null,
    titleLabel: null,
    scrollDiv: null,
    $3_2: null,
    $2z_2: 0,
    $2y_2: 0,
    $b_2: 0,
    updateLayout: function SP_Storefront_Carousel$updateLayout() {
        this.$3_2.updateLayout();
        this.$5N_2();
        this.scrollDiv.set_width(this.itemList.get_count() * this.$2z_2);
        var $v_0 = this.$b_2 * this.$2z_2;

        if (!SP.Storefront.StorefrontApp.get_isRTL()) {
            $v_0 = -$v_0;
        }
        var $v_1 = new SPAnimation.State();

        $v_1.SetAttribute(1, $v_0);
        var $v_2 = new SPAnimation.Object(3, 0, this.scrollDiv.elementObject, $v_1, null, null);

        $v_2.RunAnimation();
    },
    addTitleStyle: function SP_Storefront_Carousel$addTitleStyle($p0) {
        Sys.UI.DomElement.addCssClass(this.titleLabel, $p0);
    },
    $5N_2: function SP_Storefront_Carousel$$5N_2() {
        var $v_0 = 0;

        $v_0 = this.itemList.get_count() - this.$2y_2;
        $v_0 = Math.max($v_0, 0);
        this.$b_2 = Math.max(this.$b_2, 0);
        this.$b_2 = Math.min(this.$b_2, $v_0);
        if ($v_0 <= 0) {
            this.$3_2.hide(1);
            this.$3_2.hide(2);
        }
        else {
            if (this.$b_2 <= 0) {
                this.$3_2.disable(1);
            }
            else {
                this.$3_2.enable(1);
            }
            if (this.$b_2 === $v_0) {
                this.$3_2.disable(2);
            }
            else {
                this.$3_2.enable(2);
            }
        }
    },
    $4s_2: function SP_Storefront_Carousel$$4s_2($p0, $p1) {
        var $v_0 = this.itemList.getItemIndex($p1.focusedItem);

        this.$b_2 = $v_0 + 1 - this.$2y_2;
        this.updateLayout();
        this.elementObject.scrollLeft = 0;
    },
    $4A_2: function SP_Storefront_Carousel$$4A_2($p0, $p1) {
        if ($p1.buttonId === 2) {
            this.$b_2++;
            this.updateLayout();
        }
        else if ($p1.buttonId === 1) {
            this.$b_2--;
            this.updateLayout();
        }
    }
};
SP.Storefront.ListViewRenderer = function SP_Storefront_ListViewRenderer($p0, $p1, $p2) {
    SP.Storefront.ListViewRenderer.initializeBase(this);
    this.$3L_2 = $p0;
    this.$3o_2 = $p1;
    this.$1O_2 = $p2;
    this.$3P_2(true);
};
SP.Storefront.ListViewRenderer.prototype = {
    $3L_2: 0,
    $3o_2: 0,
    $1O_2: null,
    render: function SP_Storefront_ListViewRenderer$render($p0) {
        var $v_0 = new ListContext();

        $v_0.wpq = this.$1O_2;
        $v_0.Templates = {};
        $v_0.ListData = $p0;
        $v_0.BaseViewID = this.$3L_2;
        $v_0.ListTemplateType = this.$3o_2;
        $v_0.view = SP.ScriptUtility.emptyString;
        $v_0.listUrlDir = SP.ScriptUtility.emptyString;
        $v_0.HttpRoot = SP.Storefront.StorefrontApp.getHostUrl();
        $v_0.RecycleBinEnabled = 1;
        $v_0.SiteTitle = SP.ScriptUtility.emptyString;
        $v_0.ListTitle = SP.ScriptUtility.emptyString;
        $v_0.newFormUrl = SP.ScriptUtility.emptyString;
        $v_0.displayFormUrl = SP.ScriptUtility.emptyString;
        $v_0.editFormUrl = SP.ScriptUtility.emptyString;
        $v_0.ctxId = 1;
        $v_0.CurrentUserId = 1;
        $v_0.imagesPath = SP.Utilities.Utility.get_layoutsLatestVersionUrl() + '/images/';
        $v_0.listName = 'Featured';
        $v_0.view = 'view';
        $v_0.ListSchema = eval('({});');
        window.InvokeRenderListView($v_0, this.$1O_2);
    },
    reset: function SP_Storefront_ListViewRenderer$reset() {
        this.$3P_2(false);
    },
    $3P_2: function SP_Storefront_ListViewRenderer$$3P_2($p0) {
        if (SP.ScriptUtility.isNullOrUndefined(this.elementObject)) {
            if ($p0) {
                this.initElementObject('div', this.$1O_2, null, SP.ScriptUtility.emptyString, SP.ScriptUtility.emptyString);
            }
            else {
                throw Error.argumentNull('placeHolderElement');
            }
        }
        SP.Storefront.HtmlElement.clearChildren(this.elementObject);
        var $v_0 = document.createElement('div');

        $v_0.id = 'script' + this.$1O_2;
        this.appendChild($v_0);
        var $v_1 = document.createElement('div');

        $v_1.id = 'scriptPaging' + this.$1O_2;
        this.appendChild($v_1);
    }
};
SP.Storefront.GetAppsCompletedEventArgs = function SP_Storefront_GetAppsCompletedEventArgs() {
    SP.Storefront.GetAppsCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetAppsCompletedEventArgs.prototype = {
    apps: null,
    promoted: false
};
SP.Storefront.GetAppDetailsCompletedEventArgs = function SP_Storefront_GetAppDetailsCompletedEventArgs() {
    SP.Storefront.GetAppDetailsCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetAppDetailsCompletedEventArgs.prototype = {
    appDetails: null
};
SP.Storefront.GetCategoriesCompletedEventArgs = function SP_Storefront_GetCategoriesCompletedEventArgs() {
    SP.Storefront.GetCategoriesCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetCategoriesCompletedEventArgs.prototype = {
    categories: null
};
SP.Storefront.GetReviewsCompletedEventArgs = function SP_Storefront_GetReviewsCompletedEventArgs() {
    SP.Storefront.GetReviewsCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetReviewsCompletedEventArgs.prototype = {
    reviews: null
};
SP.Storefront.GetMarketsCompletedEventArgs = function SP_Storefront_GetMarketsCompletedEventArgs() {
    SP.Storefront.GetMarketsCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetMarketsCompletedEventArgs.prototype = {
    markets: null
};
SP.Storefront.GetStringDataCompletedEventArgs = function SP_Storefront_GetStringDataCompletedEventArgs() {
    SP.Storefront.GetStringDataCompletedEventArgs.initializeBase(this);
};
SP.Storefront.GetStringDataCompletedEventArgs.prototype = {
    stringData: null
};
SP.Storefront.StorefrontProxy = function SP_Storefront_StorefrontProxy() {
    this.$$d_$4f_1 = Function.createDelegate(this, this.$4f_1);
    this.$$d_$4g_1 = Function.createDelegate(this, this.$4g_1);
    this.$$d_$4T_1 = Function.createDelegate(this, this.$4T_1);
    this.$$d_$4U_1 = Function.createDelegate(this, this.$4U_1);
    this.$$d_$4b_1 = Function.createDelegate(this, this.$4b_1);
    this.$$d_$4c_1 = Function.createDelegate(this, this.$4c_1);
    this.$$d_$4d_1 = Function.createDelegate(this, this.$4d_1);
    this.$$d_$4e_1 = Function.createDelegate(this, this.$4e_1);
    this.$$d_$4X_1 = Function.createDelegate(this, this.$4X_1);
    this.$$d_$4Y_1 = Function.createDelegate(this, this.$4Y_1);
    this.$$d_$4V_1 = Function.createDelegate(this, this.$4V_1);
    this.$$d_$4W_1 = Function.createDelegate(this, this.$4W_1);
    SP.Storefront.StorefrontProxy.initializeBase(this);
};
SP.Storefront.StorefrontProxy.getPageServerRelativeUrl = function SP_Storefront_StorefrontProxy$getPageServerRelativeUrl() {
    return new SP.Utilities.UrlBuilder(SP.Storefront.StorefrontProxy.getPageServerRelativeUrlString());
};
SP.Storefront.StorefrontProxy.getPageServerRelativeUrlString = function SP_Storefront_StorefrontProxy$getPageServerRelativeUrlString() {
    var $v_0 = SP.Storefront.StorefrontContext.get_pageName();

    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        return SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();
    }
    else {
        return SP.Utilities.Utility.getLayoutsPageUrl($v_0);
    }
};
SP.Storefront.StorefrontProxy.setupAndStartRequest = function SP_Storefront_StorefrontProxy$setupAndStartRequest($p0, $p1, $p2, $p3, $p4, $p5) {
    if ($p4) {
        $p0.add_succeeded($p4);
    }
    if ($p5) {
        $p0.add_failed($p5);
    }
    $p0.set_url($p1);
    $p0.set_expectedContentType('application/json');
    if (SP.ScriptUtility.isNullOrEmptyString($p2)) {
        $p0.get();
    }
    else {
        $p0.post($p2);
    }
    return $p0;
};
SP.Storefront.StorefrontProxy.$Z = function SP_Storefront_StorefrontProxy$$Z($p0) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        if ((($p0.get_request()).get_executor()).get_started() && (!(($p0.get_request()).get_executor()).get_aborted() || !(($p0.get_request()).get_executor()).get_timedOut() || !(($p0.get_request()).get_executor()).get_responseAvailable())) {
            (($p0.get_request()).get_executor()).abort();
        }
    }
};
SP.Storefront.StorefrontProxy.$2B = function SP_Storefront_StorefrontProxy$$2B($p0, $p1) {
    var $v_0 = [];

    $v_0[0] = $p0;
    $v_0[1] = $p1;
    return $v_0;
};
SP.Storefront.StorefrontProxy.$3b = function SP_Storefront_StorefrontProxy$$3b($p0) {
    var $v_0 = new SP.Storefront.GetAppsCompletedEventArgs();
    var $v_1 = $p0;

    $v_0.asyncState = $v_1[0];
    $v_0.promoted = $v_1[1];
    return $v_0;
};
SP.Storefront.StorefrontProxy.$1S = function SP_Storefront_StorefrontProxy$$1S($p0, $p1, $p2) {
    $p1.val = ($p0.get_executor()).getResponseHeader('StorefrontErrorHeader');
    if (!SP.ScriptUtility.isNullOrEmptyString($p1.val)) {
        $p2.val = Sys.Serialization.JavaScriptSerializer.deserialize(($p0.get_executor()).get_responseData());
        return true;
    }
    $p2.val = null;
    return false;
};
SP.Storefront.StorefrontProxy.prototype = {
    showLoadingDelegate: null,
    hideLoadingDelegate: null,
    preRequestDelegate: null,
    postSucceededRequestDelegate: null,
    postFailedRequestDelegate: null,
    add_getAppsCompleted: function SP_Storefront_StorefrontProxy$add_getAppsCompleted($p0) {
        (this.get_events()).addHandler('__GetAppsCompleted', $p0);
    },
    remove_getAppsCompleted: function SP_Storefront_StorefrontProxy$remove_getAppsCompleted($p0) {
        (this.get_events()).removeHandler('__GetAppsCompleted', $p0);
    },
    add_getCategoriesCompleted: function SP_Storefront_StorefrontProxy$add_getCategoriesCompleted($p0) {
        (this.get_events()).addHandler('__GetCategoriesCompleted', $p0);
    },
    remove_getCategoriesCompleted: function SP_Storefront_StorefrontProxy$remove_getCategoriesCompleted($p0) {
        (this.get_events()).removeHandler('__GetCategoriesCompleted', $p0);
    },
    add_getReviewsCompleted: function SP_Storefront_StorefrontProxy$add_getReviewsCompleted($p0) {
        (this.get_events()).addHandler('__GetReviewsCompleted', $p0);
    },
    remove_getReviewsCompleted: function SP_Storefront_StorefrontProxy$remove_getReviewsCompleted($p0) {
        (this.get_events()).removeHandler('__GetReviewsCompleted', $p0);
    },
    add_getMarketsCompleted: function SP_Storefront_StorefrontProxy$add_getMarketsCompleted($p0) {
        (this.get_events()).addHandler('__GetMarketsCompleted', $p0);
    },
    remove_getMarketsCompleted: function SP_Storefront_StorefrontProxy$remove_getMarketsCompleted($p0) {
        (this.get_events()).removeHandler('__GetMarketsCompleted', $p0);
    },
    add_getAppDetailsCompleted: function SP_Storefront_StorefrontProxy$add_getAppDetailsCompleted($p0) {
        (this.get_events()).addHandler('__GetAppDetailsCompleted', $p0);
    },
    remove_getAppDetailsCompleted: function SP_Storefront_StorefrontProxy$remove_getAppDetailsCompleted($p0) {
        (this.get_events()).removeHandler('__GetAppDetailsCompleted', $p0);
    },
    add_getStringDataCompleted: function SP_Storefront_StorefrontProxy$add_getStringDataCompleted($p0) {
        (this.get_events()).addHandler('__GetStringDataCompleted', $p0);
    },
    remove_getStringDataCompleted: function SP_Storefront_StorefrontProxy$remove_getStringDataCompleted($p0) {
        (this.get_events()).removeHandler('__GetStringDataCompleted', $p0);
    },
    $2C_1: null,
    $3R_1: null,
    $3V_1: null,
    $3W_1: null,
    $2h_1: null,
    $3S_1: null,
    $3T_1: null,
    $3U_1: null,
    beginGetApps: function SP_Storefront_StorefrontProxy$beginGetApps($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$2C_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetApps');
        $v_0.addKeyValueQueryString('bm', $p0);
        $v_0.addKeyValueQueryString('cm', $p1);
        $v_0.addKeyValueQueryString('category', $p2);
        $v_0.addKeyValueQueryString('free', $p3);
        $v_0.addKeyValueQueryString('sort', $p4);
        $v_0.addKeyValueQueryString('query', $p5);
        $v_0.addKeyValueQueryString('catalog', $p6.toString());
        var $v_1 = SP.Storefront.StorefrontProxy.$2B($p7, false);
        var $v_2 = $v_0.get_url();

        this.$2C_1 = this.startRequest($v_2, null, $v_1, this.$$d_$4W_1, this.$$d_$4V_1);
    },
    beginGetCategories: function SP_Storefront_StorefrontProxy$beginGetCategories($p0, $p1, $p2, $p3) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3R_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetCategories');
        $v_0.addKeyValueQueryString('bm', $p0);
        $v_0.addKeyValueQueryString('cm', $p1);
        $v_0.addKeyValueQueryString('catalog', $p2.toString());
        var $v_1 = $v_0.get_url();

        this.$3R_1 = this.startRequest($v_1, null, $p3, this.$$d_$4Y_1, this.$$d_$4X_1);
    },
    beginGetReviews: function SP_Storefront_StorefrontProxy$beginGetReviews($p0, $p1, $p2, $p3, $p4) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$2h_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetAppReviews');
        $v_0.addKeyValueQueryString('cm', $p0);
        $v_0.addKeyValueQueryString('appid', $p1);
        $v_0.addKeyValueQueryString('sort', $p2);
        $v_0.addKeyValueQueryString('filter', $p3);
        var $v_1 = $v_0.get_url();

        this.$2h_1 = this.startRequest($v_1, null, $p4, this.$$d_$4e_1, this.$$d_$4d_1);
    },
    abortGetReviews: function SP_Storefront_StorefrontProxy$abortGetReviews() {
        SP.Storefront.StorefrontProxy.$Z(this.$2h_1);
    },
    beginGetMarkets: function SP_Storefront_StorefrontProxy$beginGetMarkets($p0) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3S_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetOfficeMarkets');
        var $v_1 = $v_0.get_url();

        this.$3S_1 = this.startRequest($v_1, null, $p0, this.$$d_$4c_1, this.$$d_$4b_1);
    },
    beginGetAppDetails: function SP_Storefront_StorefrontProxy$beginGetAppDetails($p0, $p1, $p2, $p3, $p4) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$2C_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetAppDetails');
        $v_0.addKeyValueQueryString('bm', $p0);
        $v_0.addKeyValueQueryString('cm', $p1);
        $v_0.addKeyValueQueryString('appid', $p2);
        $v_0.addKeyValueQueryString('catalog', $p3.toString());
        var $v_1 = $v_0.get_url();

        this.$2C_1 = this.startRequest($v_1, null, $p4, this.$$d_$4U_1, this.$$d_$4T_1);
    },
    beginGetAppPrice: function SP_Storefront_StorefrontProxy$beginGetAppPrice($p0, $p1, $p2, $p3, $p4, $p5) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3V_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetAppPrice');
        $v_0.addKeyValueQueryString('bm', $p0);
        $v_0.addKeyValueQueryString('cm', $p1);
        $v_0.addKeyValueQueryString('appid', $p2);
        $v_0.addKeyValueQueryString('seats', $p3);
        $v_0.addKeyValueQueryString('forsitelicense', $p4);
        var $v_1 = $v_0.get_url();

        this.$3V_1 = this.startRequest($v_1, null, $p5, this.$$d_$4g_1, this.$$d_$4f_1);
    },
    beginGetPromotedApps: function SP_Storefront_StorefrontProxy$beginGetPromotedApps($p0, $p1, $p2, $p3, $p4) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3W_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetPromotedApps');
        $v_0.addKeyValueQueryString('bm', $p0);
        $v_0.addKeyValueQueryString('cm', $p1);
        $v_0.addKeyValueQueryString('category', $p2);
        $v_0.addKeyValueQueryString('catalog', $p3.toString());
        var $v_1 = SP.Storefront.StorefrontProxy.$2B($p4, true);
        var $v_2 = $v_0.get_url();

        this.$3W_1 = this.startRequest($v_2, null, $v_1, this.$$d_$4W_1, this.$$d_$4V_1);
    },
    beginGetMyApps: function SP_Storefront_StorefrontProxy$beginGetMyApps($p0, $p1, $p2, $p3) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3T_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetMyApps');
        $v_0.addKeyValueQueryString('sort', $p2);
        $v_0.addKeyValueQueryString('query', $p1);
        $v_0.addKeyValueQueryString('myappscatalog', $p0.toString());
        $v_0.addKeyValueQueryString('ci', SP.Storefront.StorefrontContext.get_canInstallApps() ? '1' : '0');
        $v_0.addKeyValueQueryString('vd', SP.Storefront.StorefrontContext.get_validDeployment() ? '1' : '0');
        var $v_1 = SP.Storefront.StorefrontProxy.$2B($p3, false);
        var $v_2 = $v_0.get_url();

        this.$3T_1 = this.startRequest($v_2, null, $v_1, this.$$d_$4W_1, this.$$d_$4V_1);
    },
    beginGetMyNewApps: function SP_Storefront_StorefrontProxy$beginGetMyNewApps($p0, $p1) {
        this.$v_1();
        SP.Storefront.StorefrontProxy.$Z(this.$3U_1);
        var $v_0 = SP.Storefront.StorefrontProxy.getPageServerRelativeUrl();

        $v_0.addKeyValueQueryString('task', 'GetMyNewApps');
        $v_0.addKeyValueQueryString('myappscatalog', $p0.toString());
        var $v_1 = SP.Storefront.StorefrontProxy.$2B($p1, true);
        var $v_2 = $v_0.get_url();

        this.$3U_1 = this.startRequest($v_2, null, $v_1, this.$$d_$4W_1, this.$$d_$4V_1);
    },
    startRequest: function SP_Storefront_StorefrontProxy$startRequest($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = new SP.PageRequest();

        this.$5B_1($v_0, $p2);
        return SP.Storefront.StorefrontProxy.setupAndStartRequest($v_0, $p0, $p1, $p2, $p3, $p4);
    },
    $v_1: function SP_Storefront_StorefrontProxy$$v_1() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.showLoadingDelegate)) {
            this.showLoadingDelegate();
        }
    },
    $M_1: function SP_Storefront_StorefrontProxy$$M_1() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.hideLoadingDelegate)) {
            this.hideLoadingDelegate();
        }
    },
    $5B_1: function SP_Storefront_StorefrontProxy$$5B_1($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.preRequestDelegate)) {
            this.preRequestDelegate($p0, $p1);
        }
        else {
            ($p0.get_request()).set_userContext($p1);
        }
    },
    $1W_1: function SP_Storefront_StorefrontProxy$$1W_1($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.postSucceededRequestDelegate)) {
            return this.postSucceededRequestDelegate($p0);
        }
        return (($p0.get_executor()).get_webRequest()).get_userContext();
    },
    $1V_1: function SP_Storefront_StorefrontProxy$$1V_1($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.postFailedRequestDelegate)) {
            return this.postFailedRequestDelegate($p0);
        }
        return (($p0.get_executor()).get_webRequest()).get_userContext();
    },
    $4W_1: function SP_Storefront_StorefrontProxy$$4W_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_A, $$t_B, $$t_C;

        if (!($$t_C = SP.Storefront.StorefrontProxy.$1S($p1, $$t_A = {
            'val': $v_2
        }, $$t_B = {
            'val': $v_1
        }), $v_2 = $$t_A.val, $v_1 = $$t_B.val, $$t_C)) {
            $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p1.get_executor()).get_responseData());
            var $v_6 = $v_0.length;

            for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                $v_0[$v_7] = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.SPAppMetadata, $v_0[$v_7]);
            }
        }
        var $v_4 = SP.Storefront.StorefrontProxy.$3b($v_3);

        $v_4.apps = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        $v_4.stringData = ($p1.get_executor()).get_responseData();
        var $v_5 = (this.get_events()).getHandler('__GetAppsCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4V_1: function SP_Storefront_StorefrontProxy$$4V_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = SP.Storefront.StorefrontProxy.$3b($v_0);

        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetAppsCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    },
    $4Y_1: function SP_Storefront_StorefrontProxy$$4Y_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_A, $$t_B, $$t_C;

        if (!($$t_C = SP.Storefront.StorefrontProxy.$1S($p1, $$t_A = {
            'val': $v_2
        }, $$t_B = {
            'val': $v_1
        }), $v_2 = $$t_A.val, $v_1 = $$t_B.val, $$t_C)) {
            $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p1.get_executor()).get_responseData());
            var $v_6 = $v_0.length;

            for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                $v_0[$v_7] = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeCategory, $v_0[$v_7]);
            }
        }
        var $v_4 = new SP.Storefront.GetCategoriesCompletedEventArgs();

        $v_4.asyncState = $v_3;
        $v_4.categories = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        var $v_5 = (this.get_events()).getHandler('__GetCategoriesCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4X_1: function SP_Storefront_StorefrontProxy$$4X_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = new SP.Storefront.GetCategoriesCompletedEventArgs();

        $v_1.asyncState = $v_0;
        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetCategoriesCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    },
    $4e_1: function SP_Storefront_StorefrontProxy$$4e_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_A, $$t_B, $$t_C;

        if (!($$t_C = SP.Storefront.StorefrontProxy.$1S($p1, $$t_A = {
            'val': $v_2
        }, $$t_B = {
            'val': $v_1
        }), $v_2 = $$t_A.val, $v_1 = $$t_B.val, $$t_C)) {
            $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p1.get_executor()).get_responseData());
            var $v_6 = $v_0.length;

            for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                $v_0[$v_7] = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeReview, $v_0[$v_7]);
            }
        }
        var $v_4 = new SP.Storefront.GetReviewsCompletedEventArgs();

        $v_4.asyncState = $v_3;
        $v_4.reviews = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        var $v_5 = (this.get_events()).getHandler('__GetReviewsCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4d_1: function SP_Storefront_StorefrontProxy$$4d_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = new SP.Storefront.GetReviewsCompletedEventArgs();

        $v_1.asyncState = $v_0;
        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetReviewsCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    },
    $4c_1: function SP_Storefront_StorefrontProxy$$4c_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_A, $$t_B, $$t_C;

        if (!($$t_C = SP.Storefront.StorefrontProxy.$1S($p1, $$t_A = {
            'val': $v_2
        }, $$t_B = {
            'val': $v_1
        }), $v_2 = $$t_A.val, $v_1 = $$t_B.val, $$t_C)) {
            $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p1.get_executor()).get_responseData());
            var $v_6 = $v_0.length;

            for (var $v_7 = 0; $v_7 < $v_6; $v_7++) {
                $v_0[$v_7] = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeMarket, $v_0[$v_7]);
            }
        }
        var $v_4 = new SP.Storefront.GetMarketsCompletedEventArgs();

        $v_4.asyncState = $v_3;
        $v_4.markets = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        var $v_5 = (this.get_events()).getHandler('__GetMarketsCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4b_1: function SP_Storefront_StorefrontProxy$$4b_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = new SP.Storefront.GetMarketsCompletedEventArgs();

        $v_1.asyncState = $v_0;
        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetMarketsCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    },
    $4U_1: function SP_Storefront_StorefrontProxy$$4U_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_9, $$t_A, $$t_B;

        if (!($$t_B = SP.Storefront.StorefrontProxy.$1S($p1, $$t_9 = {
            'val': $v_2
        }, $$t_A = {
            'val': $v_1
        }), $v_2 = $$t_9.val, $v_1 = $$t_A.val, $$t_B)) {
            var $v_6 = Sys.Serialization.JavaScriptSerializer.deserialize(($p1.get_executor()).get_responseData());

            $v_0 = SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.SPAppMetadataDetail, $v_6);
        }
        var $v_4 = new SP.Storefront.GetAppDetailsCompletedEventArgs();

        $v_4.asyncState = $v_3;
        $v_4.appDetails = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        var $v_5 = (this.get_events()).getHandler('__GetAppDetailsCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4T_1: function SP_Storefront_StorefrontProxy$$4T_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = new SP.Storefront.GetAppDetailsCompletedEventArgs();

        $v_1.asyncState = $v_0;
        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetAppDetailsCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    },
    $4g_1: function SP_Storefront_StorefrontProxy$$4g_1($p0, $p1) {
        this.$M_1();
        var $v_0 = null;
        var $v_1;
        var $v_2;
        var $v_3 = this.$1W_1($p1);
        var $$t_8, $$t_9, $$t_A;

        if (!($$t_A = SP.Storefront.StorefrontProxy.$1S($p1, $$t_8 = {
            'val': $v_2
        }, $$t_9 = {
            'val': $v_1
        }), $v_2 = $$t_8.val, $v_1 = $$t_9.val, $$t_A)) {
            $v_0 = ($p1.get_executor()).get_responseData();
        }
        var $v_4 = new SP.Storefront.GetStringDataCompletedEventArgs();

        $v_4.asyncState = $v_3;
        $v_4.stringData = $v_0;
        $v_4.errorData = $v_1;
        $v_4.errorType = $v_2;
        var $v_5 = (this.get_events()).getHandler('__GetStringDataCompleted');

        if ($v_5) {
            $v_5(this, $v_4);
        }
    },
    $4f_1: function SP_Storefront_StorefrontProxy$$4f_1($p0, $p1) {
        this.$M_1();
        var $v_0 = this.$1V_1($p1);

        if (($p1.get_executor()).get_aborted()) {
            return;
        }
        var $v_1 = new SP.Storefront.GetStringDataCompletedEventArgs();

        $v_1.asyncState = $v_0;
        $v_1.errorData['Message'] = $p1.get_errorMessage();
        var $v_2 = (this.get_events()).getHandler('__GetStringDataCompleted');

        if ($v_2) {
            $v_2(this, $v_1);
        }
    }
};
SP.Storefront.StorefrontState = function SP_Storefront_StorefrontState() {
};
SP.Storefront.StorefrontState.$$cctor = function SP_Storefront_StorefrontState$$$cctor() {
    $addHandler(window, 'hashchange', SP.Storefront.StorefrontState.$4C);
};
SP.Storefront.StorefrontState.get_stateParams = function SP_Storefront_StorefrontState$get_stateParams() {
    if (SP.ScriptUtility.isNullOrUndefined(SP.Storefront.StorefrontState.$2U) || SP.Storefront.StorefrontState.$2K) {
        SP.Storefront.StorefrontState.$2U = SP.Storefront.StorefrontState.$5A();
    }
    return SP.Storefront.StorefrontState.$2U;
};
SP.Storefront.StorefrontState.add_storefrontStateExternalChanged = function SP_Storefront_StorefrontState$add_storefrontStateExternalChanged($p0) {
    (SP.Storefront.StorefrontState.get_$2l()).addHandler('__StorefrontStateExternalChanged', $p0);
};
SP.Storefront.StorefrontState.remove_storefrontStateExternalChanged = function SP_Storefront_StorefrontState$remove_storefrontStateExternalChanged($p0) {
    (SP.Storefront.StorefrontState.get_$2l()).removeHandler('__StorefrontStateExternalChanged', $p0);
};
SP.Storefront.StorefrontState.get_$2l = function SP_Storefront_StorefrontState$get_$2l() {
    if (!SP.Storefront.StorefrontState.$1A) {
        SP.Storefront.StorefrontState.$1A = new Sys.EventHandlerList();
    }
    return SP.Storefront.StorefrontState.$1A;
};
SP.Storefront.StorefrontState.get_$4h = function SP_Storefront_StorefrontState$get_$4h() {
    var $v_0 = SP.Storefront.StorefrontState.$2F;

    SP.Storefront.StorefrontState.$2F = false;
    return $v_0;
};
SP.Storefront.StorefrontState.setStateParam = function SP_Storefront_StorefrontState$setStateParam($p0, $p1) {
    if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
        return;
    }
    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        (SP.Storefront.StorefrontState.get_stateParams())[$p0] = $p1;
    }
    else {
        if (!SP.ScriptUtility.isNullOrEmptyString((SP.Storefront.StorefrontState.get_stateParams())[$p0])) {
            delete (SP.Storefront.StorefrontState.get_stateParams())[$p0];
        }
    }
};
SP.Storefront.StorefrontState.valueEqualsState = function SP_Storefront_StorefrontState$valueEqualsState($p0, $p1) {
    return SP.Storefront.StorefrontState.valueEqualsStateWithDefault($p0, $p1, SP.ScriptUtility.emptyString);
};
SP.Storefront.StorefrontState.valueEqualsStateWithDefault = function SP_Storefront_StorefrontState$valueEqualsStateWithDefault($p0, $p1, $p2) {
    var $v_0 = SP.Storefront.StorefrontState.getStateParam($p0);

    $v_0 = SP.ScriptUtility.isNullOrEmptyString($v_0) ? $p2 : $v_0;
    return $v_0 === $p1;
};
SP.Storefront.StorefrontState.getStateParam = function SP_Storefront_StorefrontState$getStateParam($p0) {
    var $v_0 = (SP.Storefront.StorefrontState.get_stateParams())[$p0];

    $v_0 = SP.ScriptUtility.isNullOrEmptyString($v_0) ? SP.ScriptUtility.emptyString : $v_0;
    return $v_0;
};
SP.Storefront.StorefrontState.updateStateHash = function SP_Storefront_StorefrontState$updateStateHash() {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = true;
    var $$dict_2 = SP.Storefront.StorefrontState.get_stateParams();

    for (var $$key_3 in $$dict_2) {
        var $v_4 = {
            key: $$key_3,
            value: $$dict_2[$$key_3]
        };

        if (!$v_1) {
            $v_0.append(',');
        }
        var $v_5 = String.format('{0}', $v_4.value);

        $v_5 = SP.Utilities.HttpUtility.urlKeyValueEncode($v_5);
        var $v_6 = String.format('{0}={1}', $v_4.key, $v_5);

        $v_0.append($v_6);
        $v_1 = false;
    }
    var $v_2 = $v_0.toString();
    var $v_3 = window.location.hash;

    if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
        $v_3 = $v_3.substr(1);
    }
    if ($v_2 === $v_3 || SP.ScriptUtility.isNullOrEmptyString($v_2) && SP.ScriptUtility.isNullOrEmptyString($v_3)) {
        return;
    }
    window.location.hash = $v_2;
    SP.Storefront.StorefrontState.$2F = true;
};
SP.Storefront.StorefrontState.makeStateParamsDirty = function SP_Storefront_StorefrontState$makeStateParamsDirty() {
    SP.Storefront.StorefrontState.$2K = true;
};
SP.Storefront.StorefrontState.$5A = function SP_Storefront_StorefrontState$$5A() {
    var $v_0 = {};

    SP.Storefront.StorefrontState.$2K = false;
    var $v_1 = window.location.hash;

    if (SP.ScriptUtility.isNullOrEmptyString($v_1) || $v_1 === '#' || !$v_1.startsWith('#')) {
        return $v_0;
    }
    $v_1 = $v_1.substr(1);
    var $v_2 = $v_1.split(',');
    var $v_3 = $v_2.length;

    for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
        var $v_5 = $v_2[$v_4];

        if (SP.ScriptUtility.isNullOrEmptyString($v_5)) {
            continue;
        }
        var $v_6 = $v_5.split('=');

        if (!($v_6.length >= 2)) {
            continue;
        }
        var $v_7 = window.unescapeProperly($v_6[1]);

        $v_0[$v_6[0]] = $v_7;
    }
    return $v_0;
};
SP.Storefront.StorefrontState.$4C = function SP_Storefront_StorefrontState$$4C($p0) {
    if (!SP.Storefront.StorefrontState.get_$4h()) {
        SP.Storefront.StorefrontState.makeStateParamsDirty();
        var $v_0 = new SP.Storefront.ListItemSelectionChangedEventArgs();
        var $v_1 = (SP.Storefront.StorefrontState.get_$2l()).getHandler('__StorefrontStateExternalChanged');

        if ($v_1) {
            $v_1($v_0);
        }
    }
};
SP.Storefront.OfficeCategory = function SP_Storefront_OfficeCategory() {
    SP.Storefront.OfficeCategory.initializeBase(this);
};
SP.Storefront.OfficeCategory.prototype = {
    get_id: function SP_Storefront_OfficeCategory$get_id() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ID'));
    },
    set_id: function SP_Storefront_OfficeCategory$set_id($p0) {
        this.setPropertyValue('ID', $p0);
        return $p0;
    },
    get_title: function SP_Storefront_OfficeCategory$get_title() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Title'));
    },
    set_title: function SP_Storefront_OfficeCategory$set_title($p0) {
        this.setPropertyValue('Title', $p0);
        return $p0;
    }
};
SP.Storefront.OfficeReview = function SP_Storefront_OfficeReview() {
    SP.Storefront.OfficeReview.initializeBase(this);
};
SP.Storefront.OfficeReview.prototype = {
    get_title: function SP_Storefront_OfficeReview$get_title() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Title'));
    },
    set_title: function SP_Storefront_OfficeReview$set_title($p0) {
        this.setPropertyValue('Title', $p0);
        return $p0;
    },
    get_rating: function SP_Storefront_OfficeReview$get_rating() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('Rating'));
    },
    set_rating: function SP_Storefront_OfficeReview$set_rating($p0) {
        this.setPropertyValue('Rating', $p0);
        return $p0;
    },
    get_body: function SP_Storefront_OfficeReview$get_body() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Body'));
    },
    set_body: function SP_Storefront_OfficeReview$set_body($p0) {
        this.setPropertyValue('Body', $p0);
        return $p0;
    },
    get_date: function SP_Storefront_OfficeReview$get_date() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Date'));
    },
    set_date: function SP_Storefront_OfficeReview$set_date($p0) {
        this.setPropertyValue('Date', $p0);
        return $p0;
    },
    get_reviewer: function SP_Storefront_OfficeReview$get_reviewer() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Reviewer'));
    },
    set_reviewer: function SP_Storefront_OfficeReview$set_reviewer($p0) {
        this.setPropertyValue('Reviewer', $p0);
        return $p0;
    }
};
SP.Storefront.OfficeMarket = function SP_Storefront_OfficeMarket() {
    SP.Storefront.OfficeMarket.initializeBase(this);
};
SP.Storefront.OfficeMarket.prototype = {
    get_displayName: function SP_Storefront_OfficeMarket$get_displayName() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('DisplayName'));
    },
    set_displayName: function SP_Storefront_OfficeMarket$set_displayName($p0) {
        this.setPropertyValue('DisplayName', $p0);
        return $p0;
    },
    get_culture: function SP_Storefront_OfficeMarket$get_culture() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Culture'));
    },
    set_culture: function SP_Storefront_OfficeMarket$set_culture($p0) {
        this.setPropertyValue('Culture', $p0);
        return $p0;
    },
    get_countryRegion: function SP_Storefront_OfficeMarket$get_countryRegion() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('CountryRegion'));
    },
    set_countryRegion: function SP_Storefront_OfficeMarket$set_countryRegion($p0) {
        this.setPropertyValue('CountryRegion', $p0);
        return $p0;
    },
    get_currency: function SP_Storefront_OfficeMarket$get_currency() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Currency'));
    },
    set_currency: function SP_Storefront_OfficeMarket$set_currency($p0) {
        this.setPropertyValue('Currency', $p0);
        return $p0;
    },
    get_isBillingMarket: function SP_Storefront_OfficeMarket$get_isBillingMarket() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsBillingMarket'));
    },
    set_isBillingMarket: function SP_Storefront_OfficeMarket$set_isBillingMarket($p0) {
        this.setBoolPropertyValue('IsBillingMarket', $p0);
        return $p0;
    },
    get_isDefault: function SP_Storefront_OfficeMarket$get_isDefault() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsDefault'));
    },
    set_isDefault: function SP_Storefront_OfficeMarket$set_isDefault($p0) {
        this.setBoolPropertyValue('IsDefault', $p0);
        return $p0;
    }
};
SP.Storefront.OfficeLicense = function SP_Storefront_OfficeLicense() {
    SP.Storefront.OfficeLicense.initializeBase(this);
};
SP.Storefront.OfficeLicense.prototype = {
    get_id: function SP_Storefront_OfficeLicense$get_id() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ID'));
    },
    set_id: function SP_Storefront_OfficeLicense$set_id($p0) {
        this.setPropertyValue('ID', $p0);
        return $p0;
    },
    get_purchaserId: function SP_Storefront_OfficeLicense$get_purchaserId() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PurchaserId'));
    },
    set_purchaserId: function SP_Storefront_OfficeLicense$set_purchaserId($p0) {
        this.setPropertyValue('PurchaserId', $p0);
        return $p0;
    },
    get_licenseType: function SP_Storefront_OfficeLicense$get_licenseType() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNullWithDefault(this.getPropertyValue('LicenseType'), SP.Storefront.OfficeLicense.noLicense);
    },
    set_licenseType: function SP_Storefront_OfficeLicense$set_licenseType($p0) {
        this.setPropertyValue('LicenseType', $p0);
        return $p0;
    },
    get_maxUserCount: function SP_Storefront_OfficeLicense$get_maxUserCount() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('MaxUserCount'));
    },
    set_maxUserCount: function SP_Storefront_OfficeLicense$set_maxUserCount($p0) {
        this.setPropertyValue('MaxUserCount', $p0);
        return $p0;
    },
    get_remainingDays: function SP_Storefront_OfficeLicense$get_remainingDays() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('RemainingDays'));
    },
    set_remainingDays: function SP_Storefront_OfficeLicense$set_remainingDays($p0) {
        this.setPropertyValue('RemainingDays', $p0);
        return $p0;
    },
    get_isExpired: function SP_Storefront_OfficeLicense$get_isExpired() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsExpired'));
    },
    set_isExpired: function SP_Storefront_OfficeLicense$set_isExpired($p0) {
        this.setBoolPropertyValue('IsExpired', $p0);
        return $p0;
    },
    get_isTokenExpired: function SP_Storefront_OfficeLicense$get_isTokenExpired() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsTokenExpired'));
    },
    set_isTokenExpired: function SP_Storefront_OfficeLicense$set_isTokenExpired($p0) {
        this.setBoolPropertyValue('IsTokenExpired', $p0);
        return $p0;
    },
    get_billingMarket: function SP_Storefront_OfficeLicense$get_billingMarket() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('CountryRegion'));
    },
    set_billingMarket: function SP_Storefront_OfficeLicense$set_billingMarket($p0) {
        this.setPropertyValue('CountryRegion', $p0);
        return $p0;
    },
    get_contentMarket: function SP_Storefront_OfficeLicense$get_contentMarket() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Culture'));
    },
    set_contentMarket: function SP_Storefront_OfficeLicense$set_contentMarket($p0) {
        this.setPropertyValue('Culture', $p0);
        return $p0;
    }
};
SP.Storefront.SPAppMetadataPropertyNames = function SP_Storefront_SPAppMetadataPropertyNames() {
};
SP.Storefront.StringIds = function SP_Storefront_StringIds() {
};
SP.Storefront.StringIds.StorefrontQueryParams = function SP_Storefront_StringIds_StorefrontQueryParams() {
};
SP.Storefront.StringIds.StateParamKey = function SP_Storefront_StringIds_StateParamKey() {
};
SP.Storefront.StringIds.StateParamValues = function SP_Storefront_StringIds_StateParamValues() {
};
SP.Storefront.StringIds.UIElement = function SP_Storefront_StringIds_UIElement() {
};
SP.Storefront.StringIds.List = function SP_Storefront_StringIds_List() {
};
SP.Storefront.StringIds.CSSClass = function SP_Storefront_StringIds_CSSClass() {
};
SP.Storefront.StringIds.CSSClassCore = function SP_Storefront_StringIds_CSSClassCore() {
};
SP.Storefront.StringIds.CSSClassPartialStrings = function SP_Storefront_StringIds_CSSClassPartialStrings() {
};
SP.Storefront.SPOutOfBoxAppId = function SP_Storefront_SPOutOfBoxAppId() {
};
SP.Storefront.SPOutOfBoxAppId.isListTemplateApp = function SP_Storefront_SPOutOfBoxAppId$isListTemplateApp($p0) {
    var $v_0 = false;

    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        var $v_1 = $p0.indexOf(';');

        if ($v_1 >= 0) {
            var $v_2 = $p0.substring(0, $v_1);
            var $v_3 = SP.Storefront.SPStorefrontData.toEnum(SP.Storefront.SPOutOfBoxAppType, $v_2);

            $v_0 = !$v_3;
        }
    }
    return $v_0;
};
SP.Storefront.SPOutOfBoxAppId.isSpreadsheetImport = function SP_Storefront_SPOutOfBoxAppId$isSpreadsheetImport($p0) {
    var $v_0 = false;

    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        var $v_1 = $p0.split(';');

        if ($v_1.length === 4) {
            var $v_2 = $v_1[3];

            $v_0 = $v_2 === 'SpreadsheetImport';
        }
    }
    return $v_0;
};
SP.Storefront.StorefrontUrl = function SP_Storefront_StorefrontUrl() {
};
SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl = function SP_Storefront_StorefrontUrl$constructWebRelativeBaseUrl() {
    return SP.Utilities.Utility.getLayoutsPageUrl('storefront.aspx');
};
SP.Storefront.StorefrontUrl.constructBaseQueryString = function SP_Storefront_StorefrontUrl$constructBaseQueryString($p0, $p1) {
    var $v_0 = String.format('{0}={1}&{2}={3}', 'source', SP.Utilities.HttpUtility.urlKeyValueEncode($p0), 'sname', SP.Utilities.HttpUtility.urlKeyValueEncode($p1));

    return $v_0;
};
SP.Storefront.StorefrontUrl.constructDetailsQueryString = function SP_Storefront_StorefrontUrl$constructDetailsQueryString($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = SP.Storefront.StorefrontUrl.constructBaseQueryString($p0, $p1);

    $v_0 += String.format('#{0}={1},{2}={3},{4}={5},{6}={7},{8}={9}', 'vw', 'AppDetailsView', 'app', SP.Utilities.HttpUtility.urlKeyValueEncode($p2), 'clg', $p3, 'bm', SP.Utilities.HttpUtility.urlKeyValueEncode($p4), 'cm', SP.Utilities.HttpUtility.urlKeyValueEncode($p5));
    return $v_0;
};
SP.Storefront.StorefrontUrl.constructSearchQueryString = function SP_Storefront_StorefrontUrl$constructSearchQueryString($p0, $p1, $p2) {
    var $v_0 = SP.Storefront.StorefrontUrl.constructBaseQueryString($p0, $p1);

    $v_0 += String.format('#{0}={1}', 'qry', SP.Utilities.HttpUtility.urlKeyValueEncode($p2));
    return $v_0;
};
SP.Storefront.StorefrontUrl.getGoToOfficeUrl = function SP_Storefront_StorefrontUrl$getGoToOfficeUrl($p0) {
    var $v_0 = SP.Storefront.StorefrontUrl.constructWebRelativeBaseUrl();
    var $v_1 = new SP.Utilities.UrlBuilder($v_0);

    $v_1.addKeyValueQueryString('task', 'GoToOfficeUrl');
    $v_1.addKeyValueQueryString('osut', $p0.toString());
    $v_1.addKeyValueQueryString('clid', (SP.Storefront.StorefrontApp.get_currentView()).header.get_contentMarketValue());
    return $v_1;
};
SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString = function SP_Storefront_StorefrontUrl$addForwardKeyValueQueryString($p0, $p1, $p2) {
    $p1 = 'SPStorefrontQueryStringForward' + $p1;
    $p0.addKeyValueQueryString($p1, $p2);
};
SP.Storefront.SPAppMetadata = function SP_Storefront_SPAppMetadata() {
    SP.Storefront.SPAppMetadata.initializeBase(this);
};
SP.Storefront.SPAppMetadata.prototype = {
    get_assetId: function SP_Storefront_SPAppMetadata$get_assetId() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('AssetId'));
    },
    set_assetId: function SP_Storefront_SPAppMetadata$set_assetId($p0) {
        this.setPropertyValue('AssetId', $p0);
        return $p0;
    },
    get_id: function SP_Storefront_SPAppMetadata$get_id() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ID'));
    },
    set_id: function SP_Storefront_SPAppMetadata$set_id($p0) {
        this.setPropertyValue('ID', $p0);
        return $p0;
    },
    get_title: function SP_Storefront_SPAppMetadata$get_title() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Title'));
    },
    set_title: function SP_Storefront_SPAppMetadata$set_title($p0) {
        this.setPropertyValue('Title', $p0);
        return $p0;
    },
    get_shortDescription: function SP_Storefront_SPAppMetadata$get_shortDescription() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ShortDescription'));
    },
    set_shortDescription: function SP_Storefront_SPAppMetadata$set_shortDescription($p0) {
        this.setPropertyValue('ShortDescription', $p0);
        return $p0;
    },
    get_publisher: function SP_Storefront_SPAppMetadata$get_publisher() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Publisher'));
    },
    set_publisher: function SP_Storefront_SPAppMetadata$set_publisher($p0) {
        this.setPropertyValue('Publisher', $p0);
        return $p0;
    },
    get_language: function SP_Storefront_SPAppMetadata$get_language() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Language'));
    },
    set_language: function SP_Storefront_SPAppMetadata$set_language($p0) {
        this.setPropertyValue('Language', $p0);
        return $p0;
    },
    get_thumbnailUrl: function SP_Storefront_SPAppMetadata$get_thumbnailUrl() {
        var $v_0 = SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ThumbnailUrl'));

        if (!this.get_catalog()) {
            $v_0 = SP.Storefront.SPStorefrontData.convertUrlToCurrentProtocol($v_0);
        }
        return $v_0;
    },
    set_thumbnailUrl: function SP_Storefront_SPAppMetadata$set_thumbnailUrl($p0) {
        this.setPropertyValue('ThumbnailUrl', $p0);
        return $p0;
    },
    get_firstScreenshot: function SP_Storefront_SPAppMetadata$get_firstScreenshot() {
        var $v_0 = SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('FirstScreenshot'));

        if (!this.get_catalog()) {
            $v_0 = SP.Storefront.SPStorefrontData.convertUrlToCurrentProtocol($v_0);
        }
        return $v_0;
    },
    set_firstScreenshot: function SP_Storefront_SPAppMetadata$set_firstScreenshot($p0) {
        this.setPropertyValue('FirstScreenshot', $p0);
        return $p0;
    },
    get_price: function SP_Storefront_SPAppMetadata$get_price() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Price'));
    },
    set_price: function SP_Storefront_SPAppMetadata$set_price($p0) {
        this.setPropertyValue('Price', $p0);
        return $p0;
    },
    get_pricePromotion: function SP_Storefront_SPAppMetadata$get_pricePromotion() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PricePromotion'));
    },
    set_pricePromotion: function SP_Storefront_SPAppMetadata$set_pricePromotion($p0) {
        this.setPropertyValue('PricePromotion', $p0);
        return $p0;
    },
    get_rating: function SP_Storefront_SPAppMetadata$get_rating() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('Rating'));
    },
    set_rating: function SP_Storefront_SPAppMetadata$set_rating($p0) {
        this.setPropertyValue('Rating', $p0);
        return $p0;
    },
    get_votes: function SP_Storefront_SPAppMetadata$get_votes() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('Votes'));
    },
    set_votes: function SP_Storefront_SPAppMetadata$set_votes($p0) {
        this.setPropertyValue('Votes', $p0);
        return $p0;
    },
    get_categoryID: function SP_Storefront_SPAppMetadata$get_categoryID() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('CategoryID'));
    },
    set_categoryID: function SP_Storefront_SPAppMetadata$set_categoryID($p0) {
        this.setPropertyValue('CategoryID', $p0);
        return $p0;
    },
    get_preRequisites: function SP_Storefront_SPAppMetadata$get_preRequisites() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PreRequisites'));
    },
    set_preRequisites: function SP_Storefront_SPAppMetadata$set_preRequisites($p0) {
        this.setPropertyValue('PreRequisites', $p0);
        return $p0;
    },
    get_linkUrl: function SP_Storefront_SPAppMetadata$get_linkUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('LinkUrl'));
    },
    set_linkUrl: function SP_Storefront_SPAppMetadata$set_linkUrl($p0) {
        this.setPropertyValue('LinkUrl', $p0);
        return $p0;
    },
    get_productId: function SP_Storefront_SPAppMetadata$get_productId() {
        return SP.Storefront.SPStorefrontData.toGuid(this.getPropertyValue('ProductId'));
    },
    set_productId: function SP_Storefront_SPAppMetadata$set_productId($p0) {
        this.setGuidPropertyValue('ProductId', $p0);
        return $p0;
    },
    get_license: function SP_Storefront_SPAppMetadata$get_license() {
        return SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeLicense, this.getPropertyValue('License'));
    },
    set_license: function SP_Storefront_SPAppMetadata$set_license($p0) {
        this.setPropertyValue('License', $p0);
        return $p0;
    },
    get_instance: function SP_Storefront_SPAppMetadata$get_instance() {
        return SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.SPAppInstanceMetadata, this.getPropertyValue('Instance'));
    },
    set_instance: function SP_Storefront_SPAppMetadata$set_instance($p0) {
        this.setPropertyValue('Instance', $p0);
        return $p0;
    },
    get_prerequisitesMet: function SP_Storefront_SPAppMetadata$get_prerequisitesMet() {
        return SP.Storefront.SPStorefrontData.toBoolWithDefault(this.getPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.prerequisitesMet), true);
    },
    set_prerequisitesMet: function SP_Storefront_SPAppMetadata$set_prerequisitesMet($p0) {
        this.setBoolPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.prerequisitesMet, $p0);
        return $p0;
    },
    get_prerequisitesCheckingMessage: function SP_Storefront_SPAppMetadata$get_prerequisitesCheckingMessage() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.prerequistesCheckingError));
    },
    set_prerequisitesCheckingMessage: function SP_Storefront_SPAppMetadata$set_prerequisitesCheckingMessage($p0) {
        this.setPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.prerequistesCheckingError, $p0);
        return $p0;
    },
    get_betaMessage: function SP_Storefront_SPAppMetadata$get_betaMessage() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('BetaMessage'));
    },
    set_betaMessage: function SP_Storefront_SPAppMetadata$set_betaMessage($p0) {
        this.setPropertyValue('BetaMessage', $p0);
        return $p0;
    },
    get_version: function SP_Storefront_SPAppMetadata$get_version() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Version'));
    },
    set_version: function SP_Storefront_SPAppMetadata$set_version($p0) {
        this.setPropertyValue('Version', $p0);
        return $p0;
    },
    get_catalog: function SP_Storefront_SPAppMetadata$get_catalog() {
        return SP.Storefront.SPStorefrontData.toEnum(SP.Storefront.SPAppMetadataCatalogType, this.getPropertyValue('Catalog'));
    },
    set_catalog: function SP_Storefront_SPAppMetadata$set_catalog($p0) {
        var $v_0 = $p0;

        this.setPropertyValue('Catalog', $v_0.toString());
        return $p0;
    },
    get_requestStatus: function SP_Storefront_SPAppMetadata$get_requestStatus() {
        return SP.Storefront.SPStorefrontData.toEnum(SP.Storefront.SPAppRequestStatus, this.getPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.requestStatus));
    },
    set_requestStatus: function SP_Storefront_SPAppMetadata$set_requestStatus($p0) {
        var $v_0 = $p0;

        this.setPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.requestStatus, $v_0.toString());
        return $p0;
    },
    get_requestId: function SP_Storefront_SPAppMetadata$get_requestId() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.requestId));
    },
    set_requestId: function SP_Storefront_SPAppMetadata$set_requestId($p0) {
        this.setPropertyValue(SP.Storefront.SPAppMetadataPropertyNames.requestId, $p0);
        return $p0;
    },
    get_isListTemplateApp: function SP_Storefront_SPAppMetadata$get_isListTemplateApp() {
        return this.get_catalog() === 2 && SP.Storefront.SPOutOfBoxAppId.isListTemplateApp(this.get_id());
    }
};
SP.Storefront.SPAppMetadataDetail = function SP_Storefront_SPAppMetadataDetail() {
    SP.Storefront.SPAppMetadataDetail.initializeBase(this);
};
SP.Storefront.SPAppMetadataDetail.getTakedownUrl = function SP_Storefront_SPAppMetadataDetail$getTakedownUrl($p0) {
    var $v_0 = SP.Storefront.StorefrontUrl.getGoToOfficeUrl(11);

    SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($v_0, 'ai', $p0);
    return $v_0.get_url();
};
SP.Storefront.SPAppMetadataDetail.prototype = {
    get_basicDetails: function SP_Storefront_SPAppMetadataDetail$get_basicDetails() {
        return SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.SPAppMetadata, this.getPropertyValue('BasicDetails'));
    },
    set_basicDetails: function SP_Storefront_SPAppMetadataDetail$set_basicDetails($p0) {
        this.setPropertyValue('BasicDetails', $p0);
        return $p0;
    },
    get_description: function SP_Storefront_SPAppMetadataDetail$get_description() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('Description'));
    },
    set_description: function SP_Storefront_SPAppMetadataDetail$set_description($p0) {
        this.setPropertyValue('Description', $p0);
        return $p0;
    },
    get_imageUrls: function SP_Storefront_SPAppMetadataDetail$get_imageUrls() {
        var $v_0 = this.getPropertyValue('ImageUrls');

        if (!(this.get_basicDetails()).get_catalog()) {
            var $v_1 = $v_0.length;

            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                $v_0[$v_2] = SP.Storefront.SPStorefrontData.convertUrlToCurrentProtocol($v_0[$v_2].toString());
            }
        }
        return $v_0;
    },
    set_imageUrls: function SP_Storefront_SPAppMetadataDetail$set_imageUrls($p0) {
        this.setPropertyValue('ImageUrls', $p0);
        return $p0;
    },
    get_videoUrl: function SP_Storefront_SPAppMetadataDetail$get_videoUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('VideoUrl'));
    },
    set_videoUrl: function SP_Storefront_SPAppMetadataDetail$set_videoUrl($p0) {
        this.setPropertyValue('VideoUrl', $p0);
        return $p0;
    },
    get_downloads: function SP_Storefront_SPAppMetadataDetail$get_downloads() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('Downloads'));
    },
    set_downloads: function SP_Storefront_SPAppMetadataDetail$set_downloads($p0) {
        this.setPropertyValue('Downloads', $p0);
        return $p0;
    },
    get_priceValue: function SP_Storefront_SPAppMetadataDetail$get_priceValue() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PriceValue'));
    },
    set_priceValue: function SP_Storefront_SPAppMetadataDetail$set_priceValue($p0) {
        this.setPropertyValue('PriceValue', $p0);
        return $p0;
    },
    get_pricePercentOff: function SP_Storefront_SPAppMetadataDetail$get_pricePercentOff() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PricePercentOff'));
    },
    set_pricePercentOff: function SP_Storefront_SPAppMetadataDetail$set_pricePercentOff($p0) {
        this.setPropertyValue('PricePercentOff', $p0);
        return $p0;
    },
    get_priceModel: function SP_Storefront_SPAppMetadataDetail$get_priceModel() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('PriceModel'));
    },
    set_priceModel: function SP_Storefront_SPAppMetadataDetail$set_priceModel($p0) {
        this.setPropertyValue('PriceModel', $p0);
        return $p0;
    },
    get_productId: function SP_Storefront_SPAppMetadataDetail$get_productId() {
        return (this.get_basicDetails()).get_productId();
    },
    set_productId: function SP_Storefront_SPAppMetadataDetail$set_productId($p0) {
        (this.get_basicDetails()).set_productId($p0);
        return $p0;
    },
    get_trial: function SP_Storefront_SPAppMetadataDetail$get_trial() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('Trial'));
    },
    set_trial: function SP_Storefront_SPAppMetadataDetail$set_trial($p0) {
        this.setPropertyValue('Trial', $p0);
        return $p0;
    },
    get_trialUsers: function SP_Storefront_SPAppMetadataDetail$get_trialUsers() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('TrialUsers'));
    },
    set_trialUsers: function SP_Storefront_SPAppMetadataDetail$set_trialUsers($p0) {
        this.setPropertyValue('TrialUsers', $p0);
        return $p0;
    },
    get_trialLength: function SP_Storefront_SPAppMetadataDetail$get_trialLength() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('TrialLength'));
    },
    set_trialLength: function SP_Storefront_SPAppMetadataDetail$set_trialLength($p0) {
        this.setPropertyValue('TrialLength', $p0);
        return $p0;
    },
    get_state: function SP_Storefront_SPAppMetadataDetail$get_state() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('State'));
    },
    set_state: function SP_Storefront_SPAppMetadataDetail$set_state($p0) {
        this.setPropertyValue('State', $p0);
        return $p0;
    },
    get_tax: function SP_Storefront_SPAppMetadataDetail$get_tax() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('Tax'));
    },
    set_tax: function SP_Storefront_SPAppMetadataDetail$set_tax($p0) {
        this.setBoolPropertyValue('Tax', $p0);
        return $p0;
    },
    get_isSupportedMarket: function SP_Storefront_SPAppMetadataDetail$get_isSupportedMarket() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsSupportedMarket'));
    },
    set_isSupportedMarket: function SP_Storefront_SPAppMetadataDetail$set_isSupportedMarket($p0) {
        this.setBoolPropertyValue('IsSupportedMarket', $p0);
        return $p0;
    },
    get_license: function SP_Storefront_SPAppMetadataDetail$get_license() {
        return (this.get_basicDetails()).get_license();
    },
    set_license: function SP_Storefront_SPAppMetadataDetail$set_license($p0) {
        (this.get_basicDetails()).set_license($p0);
        return $p0;
    },
    get_manageableLicense: function SP_Storefront_SPAppMetadataDetail$get_manageableLicense() {
        return SP.Storefront.SPStorefrontData.toSPStorefrontData(SP.Storefront.OfficeLicense, this.getPropertyValue('ManageableLicense'));
    },
    set_manageableLicense: function SP_Storefront_SPAppMetadataDetail$set_manageableLicense($p0) {
        this.setPropertyValue('ManageableLicense', $p0);
        return $p0;
    },
    get_instance: function SP_Storefront_SPAppMetadataDetail$get_instance() {
        return (this.get_basicDetails()).get_instance();
    },
    set_instance: function SP_Storefront_SPAppMetadataDetail$set_instance($p0) {
        (this.get_basicDetails()).set_instance($p0);
        return $p0;
    },
    get_publisherUrl: function SP_Storefront_SPAppMetadataDetail$get_publisherUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PublisherUrl'));
    },
    set_publisherUrl: function SP_Storefront_SPAppMetadataDetail$set_publisherUrl($p0) {
        this.setPropertyValue('PublisherUrl', $p0);
        return $p0;
    },
    get_releasedDate: function SP_Storefront_SPAppMetadataDetail$get_releasedDate() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('ReleasedDate'));
    },
    set_releasedDate: function SP_Storefront_SPAppMetadataDetail$set_releasedDate($p0) {
        this.setPropertyValue('ReleasedDate', $p0);
        return $p0;
    },
    get_supportUrl: function SP_Storefront_SPAppMetadataDetail$get_supportUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('SupportUrl'));
    },
    set_supportUrl: function SP_Storefront_SPAppMetadataDetail$set_supportUrl($p0) {
        this.setPropertyValue('SupportUrl', $p0);
        return $p0;
    },
    get_eulaUrl: function SP_Storefront_SPAppMetadataDetail$get_eulaUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('EulaUrl'));
    },
    set_eulaUrl: function SP_Storefront_SPAppMetadataDetail$set_eulaUrl($p0) {
        this.setPropertyValue('EulaUrl', $p0);
        return $p0;
    },
    get_privacyUrl: function SP_Storefront_SPAppMetadataDetail$get_privacyUrl() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('PrivacyUrl'));
    },
    set_privacyUrl: function SP_Storefront_SPAppMetadataDetail$set_privacyUrl($p0) {
        this.setPropertyValue('PrivacyUrl', $p0);
        return $p0;
    },
    get_upgradeAvailable: function SP_Storefront_SPAppMetadataDetail$get_upgradeAvailable() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('UpgradeAvailable'));
    },
    set_upgradeAvailable: function SP_Storefront_SPAppMetadataDetail$set_upgradeAvailable($p0) {
        this.setBoolPropertyValue('UpgradeAvailable', $p0);
        return $p0;
    },
    get_subType: function SP_Storefront_SPAppMetadataDetail$get_subType() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('SubType'));
    },
    set_subType: function SP_Storefront_SPAppMetadataDetail$set_subType($p0) {
        this.setPropertyValue('SubType', $p0);
        return $p0;
    },
    get_siteLicensePrice: function SP_Storefront_SPAppMetadataDetail$get_siteLicensePrice() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('SiteLicensePrice'));
    },
    set_siteLicensePrice: function SP_Storefront_SPAppMetadataDetail$set_siteLicensePrice($p0) {
        this.setPropertyValue('SiteLicensePrice', $p0);
        return $p0;
    },
    get_unsafeVersion: function SP_Storefront_SPAppMetadataDetail$get_unsafeVersion() {
        return SP.Storefront.SPStorefrontData.toStringIfNotNull(this.getPropertyValue('UnsafeVersion'));
    },
    set_unsafeVersion: function SP_Storefront_SPAppMetadataDetail$set_unsafeVersion($p0) {
        this.setPropertyValue('UnsafeVersion', $p0);
        return $p0;
    },
    get_siteLicenseSeats: function SP_Storefront_SPAppMetadataDetail$get_siteLicenseSeats() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNull(this.getPropertyValue('SiteLicenseSeats'));
    },
    set_siteLicenseSeats: function SP_Storefront_SPAppMetadataDetail$set_siteLicenseSeats($p0) {
        this.setPropertyValue('SiteLicenseSeats', $p0);
        return $p0;
    },
    getReportAbuseUrl: function SP_Storefront_SPAppMetadataDetail$getReportAbuseUrl() {
        var $v_0 = SP.Storefront.StorefrontUrl.getGoToOfficeUrl(12);

        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($v_0, 'p1', (this.get_basicDetails()).get_assetId());
        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($v_0, 'p2', (this.get_basicDetails()).get_title());
        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($v_0, 'p3', (this.get_basicDetails()).get_publisher());
        SP.Storefront.StorefrontUrl.addForwardKeyValueQueryString($v_0, 'p4', this.get_supportUrl());
        return $v_0.get_url();
    }
};
SP.Storefront.SPAppInstanceMetadata = function SP_Storefront_SPAppInstanceMetadata() {
    SP.Storefront.SPAppInstanceMetadata.initializeBase(this);
};
SP.Storefront.SPAppInstanceMetadata.prototype = {
    get_instanceStatus: function SP_Storefront_SPAppInstanceMetadata$get_instanceStatus() {
        return SP.Storefront.SPStorefrontData.toIntIfNotNullWithDefault(this.getPropertyValue('InstanceStatus'), -1);
    },
    set_instanceStatus: function SP_Storefront_SPAppInstanceMetadata$set_instanceStatus($p0) {
        this.setPropertyValue('InstanceStatus', $p0);
        return $p0;
    },
    get_id: function SP_Storefront_SPAppInstanceMetadata$get_id() {
        return SP.Storefront.SPStorefrontData.toGuid(this.getPropertyValue('ID'));
    },
    set_id: function SP_Storefront_SPAppInstanceMetadata$set_id($p0) {
        this.setGuidPropertyValue('ID', $p0);
        return $p0;
    },
    get_isDownloadInvalidated: function SP_Storefront_SPAppInstanceMetadata$get_isDownloadInvalidated() {
        return SP.Storefront.SPStorefrontData.toBool(this.getPropertyValue('IsDownloadInvalidated'));
    },
    set_isDownloadInvalidated: function SP_Storefront_SPAppInstanceMetadata$set_isDownloadInvalidated($p0) {
        this.setBoolPropertyValue('IsDownloadInvalidated', $p0);
        return $p0;
    }
};
SP.Storefront.SPStorefrontData = function SP_Storefront_SPStorefrontData() {
};
SP.Storefront.SPStorefrontData.toIntIfNotNull = function SP_Storefront_SPStorefrontData$toIntIfNotNull($p0) {
    return SP.Storefront.SPStorefrontData.toIntIfNotNullWithDefault($p0, 0);
};
SP.Storefront.SPStorefrontData.toIntIfNotNullWithDefault = function SP_Storefront_SPStorefrontData$toIntIfNotNullWithDefault($p0, $p1) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0) && Number.isInstanceOfType($p0)) {
        return $p0;
    }
    else {
        return $p1;
    }
};
SP.Storefront.SPStorefrontData.toStringIfNotNull = function SP_Storefront_SPStorefrontData$toStringIfNotNull($p0) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        return SP.ScriptUtility.emptyString;
    }
    else {
        return $p0.toString();
    }
};
SP.Storefront.SPStorefrontData.toBool = function SP_Storefront_SPStorefrontData$toBool($p0) {
    return SP.Storefront.SPStorefrontData.toBoolWithDefault($p0, false);
};
SP.Storefront.SPStorefrontData.toBoolWithDefault = function SP_Storefront_SPStorefrontData$toBoolWithDefault($p0, $p1) {
    var $v_0 = $p1;
    var $v_1 = SP.Storefront.SPStorefrontData.toStringIfNotNull($p0);

    try {
        $v_0 = Boolean.parse($v_1);
    }
    catch ($$e_4) { }
    return $v_0;
};
SP.Storefront.SPStorefrontData.toEnum = function SP_Storefront_SPStorefrontData$toEnum($p0, $p1) {
    var $v_0 = SP.Storefront.SPStorefrontData.toInt($p1);

    return $v_0;
};
SP.Storefront.SPStorefrontData.toInt = function SP_Storefront_SPStorefrontData$toInt($p0) {
    var $v_0 = SP.Storefront.SPStorefrontData.toStringIfNotNull($p0);
    var $v_1 = 0;

    if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        $v_1 = Number.parseInvariant($v_0);
    }
    return $v_1;
};
SP.Storefront.SPStorefrontData.toGuid = function SP_Storefront_SPStorefrontData$toGuid($p0) {
    var $v_0 = SP.Guid.get_empty();
    var $v_1 = SP.Storefront.SPStorefrontData.toStringIfNotNull($p0);

    try {
        $v_0 = new SP.Guid($v_1);
    }
    catch ($$e_3) { }
    return $v_0;
};
SP.Storefront.SPStorefrontData.toSPStorefrontData = function SP_Storefront_SPStorefrontData$toSPStorefrontData($p0, $p1) {
    var $v_0 = $p1;
    var $v_1 = new $p0();

    $v_1.set_properties($v_0);
    return $v_1;
};
SP.Storefront.SPStorefrontData.convertUrlToCurrentProtocol = function SP_Storefront_SPStorefrontData$convertUrlToCurrentProtocol($p0) {
    var $v_0 = window.location.protocol;
    var $v_1 = 'https:';
    var $v_2 = $v_1.length;
    var $v_3 = 'http:';
    var $v_4 = $v_3.length;

    if ($p0.startsWith($v_0)) {
        return $p0;
    }
    else if (($p0.substr(0, $v_2)).toLowerCase() === $v_1) {
        return $v_0 + $p0.substr($v_2, $p0.length);
    }
    else if (($p0.substr(0, $v_4)).toLowerCase() === $v_3) {
        return $v_0 + $p0.substr($v_4, $p0.length);
    }
    return $p0;
};
SP.Storefront.SPStorefrontData.prototype = {
    $2Q_0: null,
    get_properties: function SP_Storefront_SPStorefrontData$get_properties() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$2Q_0)) {
            this.$2Q_0 = {};
        }
        return this.$2Q_0;
    },
    set_properties: function SP_Storefront_SPStorefrontData$set_properties($p0) {
        this.$2Q_0 = $p0;
        return $p0;
    },
    getPropertyDictionary: function SP_Storefront_SPStorefrontData$getPropertyDictionary() {
        return this.get_properties();
    },
    hasData: function SP_Storefront_SPStorefrontData$hasData() {
        var $v_0 = false;

        if (!SP.ScriptUtility.isNullOrUndefined(this.get_properties())) {
            var $$dict_1 = this.get_properties();

            for (var $$key_2 in $$dict_1) {
                var $v_1 = {
                    key: $$key_2,
                    value: $$dict_1[$$key_2]
                };

                $v_0 = true;
                break;
            }
        }
        return $v_0;
    },
    getPropertyValue: function SP_Storefront_SPStorefrontData$getPropertyValue($p0) {
        return (this.get_properties())[$p0];
    },
    setBoolPropertyValue: function SP_Storefront_SPStorefrontData$setBoolPropertyValue($p0, $p1) {
        this.setPropertyValue($p0, $p1.toString());
    },
    setGuidPropertyValue: function SP_Storefront_SPStorefrontData$setGuidPropertyValue($p0, $p1) {
        this.setPropertyValue($p0, $p1.toString('B'));
    },
    setPropertyValue: function SP_Storefront_SPStorefrontData$setPropertyValue($p0, $p1) {
        (this.get_properties())[$p0] = $p1;
    }
};
SP.Storefront.TaggingUtilities = function SP_Storefront_TaggingUtilities() {
};
SP.Storefront.TaggingUtilities.getTagFromiTag = function SP_Storefront_TaggingUtilities$getTagFromiTag(tag) {
    if (tag <= 65535) {
        return tag.toString();
    }
    if (tag >>> 24 >= 36) {
        return String.fromCharCode.call(null, tag >>> 24 & 255, tag >>> 16 & 255, tag >>> 8 & 255, tag & 255);
    }
    return '' + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 24 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 18 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 12 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag >>> 6 & 63) + 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(tag & 63);
};
SP.Storefront.TaggingUtilities.getiTagFromTag = function SP_Storefront_TaggingUtilities$getiTagFromTag(sTag) {
    var $v_0 = 0;

    $v_0 = parseInt(sTag);
    if ($v_0.toString(10) === sTag && $v_0 <= 65535) {
        return $v_0;
    }
    if (sTag.length === 4) {
        $v_0 = sTag.charAt(0) << 24 | sTag.charAt(1) << 16 | sTag.charAt(2) << 8 | sTag.charAt(3);
    }
    else {
        $v_0 = 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(0)) << 24 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(1)) << 18 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(2)) << 12 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(3)) << 6 | 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(sTag.charAt(4));
    }
    return $v_0;
};
SP.Storefront.BaseElement.registerClass('SP.Storefront.BaseElement');
SP.Storefront.HtmlElement.registerClass('SP.Storefront.HtmlElement', SP.Storefront.BaseElement);
SP.Storefront.ListItemElement.registerClass('SP.Storefront.ListItemElement', SP.Storefront.HtmlElement);
SP.Storefront.MouseDrivenListItem.registerClass('SP.Storefront.MouseDrivenListItem', SP.Storefront.ListItemElement);
SP.Storefront.AppIconBase.registerClass('SP.Storefront.AppIconBase', SP.Storefront.MouseDrivenListItem);
SP.Storefront.OfficeAppIcon.registerClass('SP.Storefront.OfficeAppIcon', SP.Storefront.AppIconBase);
SP.Storefront.MyAppIcon.registerClass('SP.Storefront.MyAppIcon', SP.Storefront.AppIconBase);
SP.Storefront.BaseView.registerClass('SP.Storefront.BaseView', SP.Storefront.HtmlElement);
SP.Storefront.AppDetailsView.registerClass('SP.Storefront.AppDetailsView', SP.Storefront.BaseView);
SP.Storefront.BaseHeader.registerClass('SP.Storefront.BaseHeader', SP.Storefront.HtmlElement);
SP.Storefront.AppDetailsHeader.registerClass('SP.Storefront.AppDetailsHeader', SP.Storefront.BaseHeader);
SP.Storefront.CategoryItem.registerClass('SP.Storefront.CategoryItem', SP.Storefront.MouseDrivenListItem);
SP.Storefront.ErrorView.registerClass('SP.Storefront.ErrorView', SP.Storefront.BaseView);
SP.Storefront.HugView.registerClass('SP.Storefront.HugView', SP.Storefront.BaseView);
SP.Storefront.BaseEventArgs.registerClass('SP.Storefront.BaseEventArgs', Sys.EventArgs);
SP.Storefront.ListItemSelectionChangedEventArgs.registerClass('SP.Storefront.ListItemSelectionChangedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.ListItemFocusedEventArgs.registerClass('SP.Storefront.ListItemFocusedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.ListElement.registerClass('SP.Storefront.ListElement', SP.Storefront.HtmlElement);
SP.Storefront.ControlsListElement.registerClass('SP.Storefront.ControlsListElement', SP.Storefront.HtmlElement);
SP.Storefront.SubListListItem.registerClass('SP.Storefront.SubListListItem', SP.Storefront.ListItemElement);
SP.Storefront.ManagementView.registerClass('SP.Storefront.ManagementView', SP.Storefront.BaseView);
SP.Storefront.ManagementHeader.registerClass('SP.Storefront.ManagementHeader', SP.Storefront.BaseHeader);
SP.Storefront.OfficeAppsView.registerClass('SP.Storefront.OfficeAppsView', SP.Storefront.BaseView);
SP.Storefront.SeatsChangedEventArgs.registerClass('SP.Storefront.SeatsChangedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.SearchChangedEventArgs.registerClass('SP.Storefront.SearchChangedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.SearchBox.registerClass('SP.Storefront.SearchBox', SP.Storefront.HtmlElement);
SP.Storefront.SeatsBox.registerClass('SP.Storefront.SeatsBox', SP.Storefront.HtmlElement);
SP.Storefront.StorefrontContext.registerClass('SP.Storefront.StorefrontContext');
SP.Storefront.ImageUrlVerifier.registerClass('SP.Storefront.ImageUrlVerifier');
SP.Storefront.ForwardBackwardsAction.registerClass('SP.Storefront.ForwardBackwardsAction');
SP.Storefront.StorefrontApp.registerClass('SP.Storefront.StorefrontApp');
SP.Storefront.StorefrontPublic.registerClass('SP.Storefront.StorefrontPublic');
SP.Storefront.PageButtonClickedEventArgs.registerClass('SP.Storefront.PageButtonClickedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.FiveStarRating.registerClass('SP.Storefront.FiveStarRating', SP.Storefront.HtmlElement);
SP.Storefront.Reviews.registerClass('SP.Storefront.Reviews', SP.Storefront.HtmlElement);
SP.Storefront.FilmStrip.registerClass('SP.Storefront.FilmStrip', SP.Storefront.HtmlElement);
SP.Storefront.FilmStripItem.registerClass('SP.Storefront.FilmStripItem', SP.Storefront.MouseDrivenListItem);
SP.Storefront.SelectionDropDown.registerClass('SP.Storefront.SelectionDropDown', SP.Storefront.HtmlElement, Sys.IDisposable);
SP.Storefront.SelectionDropDownPublic.registerClass('SP.Storefront.SelectionDropDownPublic');
SP.Storefront.SelectionDropDownOption.registerClass('SP.Storefront.SelectionDropDownOption', SP.Storefront.HtmlElement);
SP.Storefront.PagingControlsWrapper.registerClass('SP.Storefront.PagingControlsWrapper', SP.Storefront.HtmlElement);
SP.Storefront.StorefrontPagingControl.registerClass('SP.Storefront.StorefrontPagingControl', SP.UI.PagingControl);
SP.Storefront.Carousel.registerClass('SP.Storefront.Carousel', SP.Storefront.HtmlElement);
SP.Storefront.ListViewRenderer.registerClass('SP.Storefront.ListViewRenderer', SP.Storefront.HtmlElement);
SP.Storefront.GetStringDataCompletedEventArgs.registerClass('SP.Storefront.GetStringDataCompletedEventArgs', SP.Storefront.BaseEventArgs);
SP.Storefront.GetAppsCompletedEventArgs.registerClass('SP.Storefront.GetAppsCompletedEventArgs', SP.Storefront.GetStringDataCompletedEventArgs);
SP.Storefront.GetAppDetailsCompletedEventArgs.registerClass('SP.Storefront.GetAppDetailsCompletedEventArgs', SP.Storefront.GetStringDataCompletedEventArgs);
SP.Storefront.GetCategoriesCompletedEventArgs.registerClass('SP.Storefront.GetCategoriesCompletedEventArgs', SP.Storefront.GetStringDataCompletedEventArgs);
SP.Storefront.GetReviewsCompletedEventArgs.registerClass('SP.Storefront.GetReviewsCompletedEventArgs', SP.Storefront.GetStringDataCompletedEventArgs);
SP.Storefront.GetMarketsCompletedEventArgs.registerClass('SP.Storefront.GetMarketsCompletedEventArgs', SP.Storefront.GetStringDataCompletedEventArgs);
SP.Storefront.StorefrontProxy.registerClass('SP.Storefront.StorefrontProxy', SP.Storefront.BaseElement);
SP.Storefront.StorefrontState.registerClass('SP.Storefront.StorefrontState');
SP.Storefront.SPStorefrontData.registerClass('SP.Storefront.SPStorefrontData');
SP.Storefront.OfficeCategory.registerClass('SP.Storefront.OfficeCategory', SP.Storefront.SPStorefrontData);
SP.Storefront.OfficeReview.registerClass('SP.Storefront.OfficeReview', SP.Storefront.SPStorefrontData);
SP.Storefront.OfficeMarket.registerClass('SP.Storefront.OfficeMarket', SP.Storefront.SPStorefrontData);
SP.Storefront.OfficeLicense.registerClass('SP.Storefront.OfficeLicense', SP.Storefront.SPStorefrontData);
SP.Storefront.SPAppMetadataPropertyNames.registerClass('SP.Storefront.SPAppMetadataPropertyNames');
SP.Storefront.StringIds.registerClass('SP.Storefront.StringIds');
SP.Storefront.StringIds.StorefrontQueryParams.registerClass('SP.Storefront.StringIds.StorefrontQueryParams');
SP.Storefront.StringIds.StateParamKey.registerClass('SP.Storefront.StringIds.StateParamKey');
SP.Storefront.StringIds.StateParamValues.registerClass('SP.Storefront.StringIds.StateParamValues');
SP.Storefront.StringIds.UIElement.registerClass('SP.Storefront.StringIds.UIElement');
SP.Storefront.StringIds.List.registerClass('SP.Storefront.StringIds.List');
SP.Storefront.StringIds.CSSClass.registerClass('SP.Storefront.StringIds.CSSClass');
SP.Storefront.StringIds.CSSClassCore.registerClass('SP.Storefront.StringIds.CSSClassCore');
SP.Storefront.StringIds.CSSClassPartialStrings.registerClass('SP.Storefront.StringIds.CSSClassPartialStrings');
SP.Storefront.SPOutOfBoxAppId.registerClass('SP.Storefront.SPOutOfBoxAppId');
SP.Storefront.StorefrontUrl.registerClass('SP.Storefront.StorefrontUrl');
SP.Storefront.SPAppMetadata.registerClass('SP.Storefront.SPAppMetadata', SP.Storefront.SPStorefrontData);
SP.Storefront.SPAppMetadataDetail.registerClass('SP.Storefront.SPAppMetadataDetail', SP.Storefront.SPStorefrontData);
SP.Storefront.SPAppInstanceMetadata.registerClass('SP.Storefront.SPAppInstanceMetadata', SP.Storefront.SPStorefrontData);
SP.Storefront.TaggingUtilities.registerClass('SP.Storefront.TaggingUtilities');
function sp_storefront_initialize() {
    SP.Storefront.BaseHeader.topLinksPlaceHolderId = 'SPStorefrontBaseHeaderTopLinksPlaceHolder';
    SP.Storefront.BaseHeader.topPlaceHolderId = 'SPStorefrontBaseHeaderTopPlaceHolder';
    SP.Storefront.BaseHeader.searchPlaceHolderId = 'SPStorefrontBaseHeaderSearchPlaceHolder';
    SP.Storefront.OfficeAppsView.positionAfterPromotedSection = 1;
    SP.Storefront.OfficeAppsView.appsPerPage = 16;
    SP.Storefront.SeatsBox.defaultNumSeats = '1';
    SP.Storefront.SeatsBox.seatsMaxLength = 4;
    SP.Storefront.StorefrontContext.$2a = null;
    SP.Storefront.StorefrontContext.$$cctor();
    SP.Storefront.StorefrontApp.$1q = null;
    SP.Storefront.StorefrontApp.$2V = null;
    SP.Storefront.StorefrontApp.$2L = null;
    SP.Storefront.StorefrontApp.$1T = null;
    SP.Storefront.StorefrontApp.loadingDiv = null;
    SP.Storefront.StorefrontApp.$Y = null;
    SP.Storefront.StorefrontApp.loadingActions = 0;
    SP.Storefront.StorefrontApp.loadingAnimation = null;
    SP.Storefront.StorefrontApp.loadingAnimationWait = 3000;
    SP.Storefront.StorefrontApp.insertAtEndIndex = -1;
    SP.Storefront.FilmStrip.$3q = 5;
    SP.Storefront.SelectionDropDown.dropDowns = {};
    SP.Storefront.StorefrontProxy.numberOfParametersInPriceData = 4;
    SP.Storefront.StorefrontState.$2U = null;
    SP.Storefront.StorefrontState.$1A = null;
    SP.Storefront.StorefrontState.$2F = false;
    SP.Storefront.StorefrontState.$2K = true;
    SP.Storefront.StorefrontState.$$cctor();
    SP.Storefront.OfficeLicense.noLicense = -1;
    SP.Storefront.SPAppMetadataPropertyNames.assetId = 'AssetId';
    SP.Storefront.SPAppMetadataPropertyNames.basicDetails = 'BasicDetails';
    SP.Storefront.SPAppMetadataPropertyNames.body = 'Body';
    SP.Storefront.SPAppMetadataPropertyNames.betaMessage = 'BetaMessage';
    SP.Storefront.SPAppMetadataPropertyNames.catalog = 'Catalog';
    SP.Storefront.SPAppMetadataPropertyNames.categoryID = 'CategoryID';
    SP.Storefront.SPAppMetadataPropertyNames.correlationId = 'CorrelationId';
    SP.Storefront.SPAppMetadataPropertyNames.countryRegion = 'CountryRegion';
    SP.Storefront.SPAppMetadataPropertyNames.culture = 'Culture';
    SP.Storefront.SPAppMetadataPropertyNames.currency = 'Currency';
    SP.Storefront.SPAppMetadataPropertyNames.date = 'Date';
    SP.Storefront.SPAppMetadataPropertyNames.description = 'Description';
    SP.Storefront.SPAppMetadataPropertyNames.displayName = 'DisplayName';
    SP.Storefront.SPAppMetadataPropertyNames.downloads = 'Downloads';
    SP.Storefront.SPAppMetadataPropertyNames.eulaUrl = 'EulaUrl';
    SP.Storefront.SPAppMetadataPropertyNames.firstScreenshot = 'FirstScreenshot';
    SP.Storefront.SPAppMetadataPropertyNames.id = 'ID';
    SP.Storefront.SPAppMetadataPropertyNames.instance = 'Instance';
    SP.Storefront.SPAppMetadataPropertyNames.instanceStatus = 'InstanceStatus';
    SP.Storefront.SPAppMetadataPropertyNames.isBillingMarket = 'IsBillingMarket';
    SP.Storefront.SPAppMetadataPropertyNames.isExpired = 'IsExpired';
    SP.Storefront.SPAppMetadataPropertyNames.isDefault = 'IsDefault';
    SP.Storefront.SPAppMetadataPropertyNames.isDownloadInvalidated = 'IsDownloadInvalidated';
    SP.Storefront.SPAppMetadataPropertyNames.isSupportedMarket = 'IsSupportedMarket';
    SP.Storefront.SPAppMetadataPropertyNames.isTokenExpired = 'IsTokenExpired';
    SP.Storefront.SPAppMetadataPropertyNames.imageUrls = 'ImageUrls';
    SP.Storefront.SPAppMetadataPropertyNames.language = 'Language';
    SP.Storefront.SPAppMetadataPropertyNames.license = 'License';
    SP.Storefront.SPAppMetadataPropertyNames.licenseType = 'LicenseType';
    SP.Storefront.SPAppMetadataPropertyNames.linkUrl = 'LinkUrl';
    SP.Storefront.SPAppMetadataPropertyNames.manageableLicense = 'ManageableLicense';
    SP.Storefront.SPAppMetadataPropertyNames.marketplaceResults = 'MarketplaceResults';
    SP.Storefront.SPAppMetadataPropertyNames.markets = 'Markets';
    SP.Storefront.SPAppMetadataPropertyNames.maxUserCount = 'MaxUserCount';
    SP.Storefront.SPAppMetadataPropertyNames.message = 'Message';
    SP.Storefront.SPAppMetadataPropertyNames.permissions = 'Permissions';
    SP.Storefront.SPAppMetadataPropertyNames.preRequisites = 'PreRequisites';
    SP.Storefront.SPAppMetadataPropertyNames.price = 'Price';
    SP.Storefront.SPAppMetadataPropertyNames.pricePercentOff = 'PricePercentOff';
    SP.Storefront.SPAppMetadataPropertyNames.priceValue = 'PriceValue';
    SP.Storefront.SPAppMetadataPropertyNames.priceModel = 'PriceModel';
    SP.Storefront.SPAppMetadataPropertyNames.pricePromotion = 'PricePromotion';
    SP.Storefront.SPAppMetadataPropertyNames.productId = 'ProductId';
    SP.Storefront.SPAppMetadataPropertyNames.publisher = 'Publisher';
    SP.Storefront.SPAppMetadataPropertyNames.publisherUrl = 'PublisherUrl';
    SP.Storefront.SPAppMetadataPropertyNames.purchaserId = 'PurchaserId';
    SP.Storefront.SPAppMetadataPropertyNames.privacyUrl = 'PrivacyUrl';
    SP.Storefront.SPAppMetadataPropertyNames.rating = 'Rating';
    SP.Storefront.SPAppMetadataPropertyNames.releasedDate = 'ReleasedDate';
    SP.Storefront.SPAppMetadataPropertyNames.remainingDays = 'RemainingDays';
    SP.Storefront.SPAppMetadataPropertyNames.reviewer = 'Reviewer';
    SP.Storefront.SPAppMetadataPropertyNames.shortDescription = 'ShortDescription';
    SP.Storefront.SPAppMetadataPropertyNames.siteLicensePrice = 'SiteLicensePrice';
    SP.Storefront.SPAppMetadataPropertyNames.siteLicenseSeats = 'SiteLicenseSeats';
    SP.Storefront.SPAppMetadataPropertyNames.state = 'State';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontCookie = 'StorefrontCookie';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontErrorHeader = 'StorefrontErrorHeader';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontGeneralError = '0';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontNoMyAppsError = '1';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontTooManyMyAppsError = '2';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontKilledAppError = '3';
    SP.Storefront.SPAppMetadataPropertyNames.storefrontNoDefaultMarketsError = '4';
    SP.Storefront.SPAppMetadataPropertyNames.subType = 'SubType';
    SP.Storefront.SPAppMetadataPropertyNames.supportUrl = 'SupportUrl';
    SP.Storefront.SPAppMetadataPropertyNames.tax = 'Tax';
    SP.Storefront.SPAppMetadataPropertyNames.thumbnailUrl = 'ThumbnailUrl';
    SP.Storefront.SPAppMetadataPropertyNames.title = 'Title';
    SP.Storefront.SPAppMetadataPropertyNames.trial = 'Trial';
    SP.Storefront.SPAppMetadataPropertyNames.trialLength = 'TrialLength';
    SP.Storefront.SPAppMetadataPropertyNames.trialUsers = 'TrialUsers';
    SP.Storefront.SPAppMetadataPropertyNames.unsafeVersion = 'UnsafeVersion';
    SP.Storefront.SPAppMetadataPropertyNames.upgradeAvailable = 'UpgradeAvailable';
    SP.Storefront.SPAppMetadataPropertyNames.version = 'Version';
    SP.Storefront.SPAppMetadataPropertyNames.videoUrl = 'VideoUrl';
    SP.Storefront.SPAppMetadataPropertyNames.votes = 'Votes';
    SP.Storefront.SPAppMetadataPropertyNames.prerequisitesMet = 'PrerequisitesMet';
    SP.Storefront.SPAppMetadataPropertyNames.prerequistesCheckingError = 'PrerequisitesCheckingError';
    SP.Storefront.SPAppMetadataPropertyNames.requestStatus = 'RequestStatus';
    SP.Storefront.SPAppMetadataPropertyNames.requestId = 'RequestId';
    SP.Storefront.StringIds.StorefrontQueryParams.appCatalogId = 'appcatalogid';
    SP.Storefront.StringIds.StorefrontQueryParams.appId = 'appid';
    SP.Storefront.StringIds.StorefrontQueryParams.appInstanceId = 'AppInstanceId';
    SP.Storefront.StringIds.StorefrontQueryParams.appInstanceName = 'instancename';
    SP.Storefront.StringIds.StorefrontQueryParams.appName = 'AppName';
    SP.Storefront.StringIds.StorefrontQueryParams.billingMarket = 'bm';
    SP.Storefront.StringIds.StorefrontQueryParams.callbackUrl = 'callbackurl';
    SP.Storefront.StringIds.StorefrontQueryParams.canInstall = 'ci';
    SP.Storefront.StringIds.StorefrontQueryParams.catalog = 'catalog';
    SP.Storefront.StringIds.StorefrontQueryParams.category = 'category';
    SP.Storefront.StringIds.StorefrontQueryParams.contentMarket = 'cm';
    SP.Storefront.StringIds.StorefrontQueryParams.download = 'download';
    SP.Storefront.StringIds.StorefrontQueryParams.falseNum = '0';
    SP.Storefront.StringIds.StorefrontQueryParams.filter = 'filter';
    SP.Storefront.StringIds.StorefrontQueryParams.forSiteLicense = 'forsitelicense';
    SP.Storefront.StringIds.StorefrontQueryParams.forwardParam = 'SPStorefrontQueryStringForward';
    SP.Storefront.StringIds.StorefrontQueryParams.free = 'free';
    SP.Storefront.StringIds.StorefrontQueryParams.infoOnly = 'InfoOnly';
    SP.Storefront.StringIds.StorefrontQueryParams.manage = 'manage';
    SP.Storefront.StringIds.StorefrontQueryParams.myAppsCatalog = 'myappscatalog';
    SP.Storefront.StringIds.StorefrontQueryParams.notThemed = 'NotThemed';
    SP.Storefront.StringIds.StorefrontQueryParams.oauthAppId = 'oID';
    SP.Storefront.StringIds.StorefrontQueryParams.officeServiceUrlType = 'osut';
    SP.Storefront.StringIds.StorefrontQueryParams.postHug = 'PostHug';
    SP.Storefront.StringIds.StorefrontQueryParams.price = 'price';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseStatus = 'status';
    SP.Storefront.StringIds.StorefrontQueryParams.query = 'query';
    SP.Storefront.StringIds.StorefrontQueryParams.requestId = 'requestid';
    SP.Storefront.StringIds.StorefrontQueryParams.seats = 'seats';
    SP.Storefront.StringIds.StorefrontQueryParams.sort = 'sort';
    SP.Storefront.StringIds.StorefrontQueryParams.source = 'source';
    SP.Storefront.StringIds.StorefrontQueryParams.sourceName = 'sname';
    SP.Storefront.StringIds.StorefrontQueryParams.task = 'task';
    SP.Storefront.StringIds.StorefrontQueryParams.taskAppDownload = 'AppDownload';
    SP.Storefront.StringIds.StorefrontQueryParams.taskAppUpgrade = 'AppUpgrade';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetApps = 'GetApps';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetAppDetails = 'GetAppDetails';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetAppPrice = 'GetAppPrice';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetAppReviews = 'GetAppReviews';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetCategories = 'GetCategories';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetMyApps = 'GetMyApps';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetMyNewApps = 'GetMyNewApps';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetPromotedApps = 'GetPromotedApps';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGetOfficeMarkets = 'GetOfficeMarkets';
    SP.Storefront.StringIds.StorefrontQueryParams.taskGoToOfficeUrl = 'GoToOfficeUrl';
    SP.Storefront.StringIds.StorefrontQueryParams.taskOfficeRedirect = 'OfficeRedirect';
    SP.Storefront.StringIds.StorefrontQueryParams.taskSetCookie = 'SetCookie';
    SP.Storefront.StringIds.StorefrontQueryParams.taskPostHug = 'PostHug';
    SP.Storefront.StringIds.StorefrontQueryParams.trueNum = '1';
    SP.Storefront.StringIds.StorefrontQueryParams.validDeployment = 'vd';
    SP.Storefront.StringIds.StorefrontQueryParams.assetId = 'AssetID';
    SP.Storefront.StringIds.StorefrontQueryParams.assetIdSmall = 'ai';
    SP.Storefront.StringIds.StorefrontQueryParams.clid = 'clid';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseDeploymentId = 'SPDeployID';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseLC = 'LC';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseMarket = 'PM';
    SP.Storefront.StringIds.StorefrontQueryParams.purchasePrice = 'PV';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseReturnExp = 'ExpiryDate';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseReturnLicense = 'LicenseType';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseReturnPID = 'ProductID';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseReturnUser = 'User';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseReturnToken = 'Token';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseSeats = 'Seats';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseSiteLicense = 'sl';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseSPOS = 'SPOS';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseSQID = 'SQID';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseType = 'PT';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseTypeFree = 'Sharepointappfreedownload';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseTypeFull = 'SharePointPurchase';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseTypeReacquire = 'sharepointreacquire';
    SP.Storefront.StringIds.StorefrontQueryParams.purchaseTypeTrial = 'SharePointTrial';
    SP.Storefront.StringIds.StorefrontQueryParams.reviewVersion = 'version';
    SP.Storefront.StringIds.StorefrontQueryParams.reviewCid = 'cid';
    SP.Storefront.StringIds.StateParamKey.app = 'app';
    SP.Storefront.StringIds.StateParamKey.billingMarket = 'bm';
    SP.Storefront.StringIds.StateParamKey.catalog = 'clg';
    SP.Storefront.StringIds.StateParamKey.category = 'ctg';
    SP.Storefront.StringIds.StateParamKey.contentMarket = 'cm';
    SP.Storefront.StringIds.StateParamKey.details = 'dtl';
    SP.Storefront.StringIds.StateParamKey.licenseType = 'lt';
    SP.Storefront.StringIds.StateParamKey.moreActions = 'mat';
    SP.Storefront.StringIds.StateParamKey.myAppsCatalog = 'mcg';
    SP.Storefront.StringIds.StateParamKey.page = 'pg';
    SP.Storefront.StringIds.StateParamKey.price = 'prc';
    SP.Storefront.StringIds.StateParamKey.query = 'qry';
    SP.Storefront.StringIds.StateParamKey.reviewSort = 'rst';
    SP.Storefront.StringIds.StateParamKey.sort = 'srt';
    SP.Storefront.StringIds.StateParamKey.supportedLanguage = 'sln';
    SP.Storefront.StringIds.StateParamKey.view = 'vw';
    SP.Storefront.StringIds.StateParamValues.officeAppsView = 'OfficeAppsView';
    SP.Storefront.StringIds.StateParamValues.appDetailsView = 'AppDetailsView';
    SP.Storefront.StringIds.StateParamValues.errorView = 'ErrorView';
    SP.Storefront.StringIds.StateParamValues.hugView = 'HugView';
    SP.Storefront.StringIds.StateParamValues.managementView = 'ManagementView';
    SP.Storefront.StringIds.StateParamValues.priceAll = '0';
    SP.Storefront.StringIds.StateParamValues.priceFree = '1';
    SP.Storefront.StringIds.StateParamValues.categoryAll = SP.ScriptUtility.emptyString;
    SP.Storefront.StringIds.StateParamValues.sortCDate = '1';
    SP.Storefront.StringIds.StateParamValues.sortNumDls = '2';
    SP.Storefront.StringIds.StateParamValues.sortPriceH = '3';
    SP.Storefront.StringIds.StateParamValues.sortPriceL = '4';
    SP.Storefront.StringIds.StateParamValues.sortRating = '5';
    SP.Storefront.StringIds.StateParamValues.sortTitle = '6';
    SP.Storefront.StringIds.StateParamValues.sortRelevance = '7';
    SP.Storefront.StringIds.StateParamValues.reviewFilterPositive = '1';
    SP.Storefront.StringIds.StateParamValues.reviewFilterCritical = '2';
    SP.Storefront.StringIds.StateParamValues.reviewSortHelpful = '1';
    SP.Storefront.StringIds.StateParamValues.reviewSortDate = '2';
    SP.Storefront.StringIds.StateParamValues.detailsDesc = 'desc';
    SP.Storefront.StringIds.StateParamValues.detailsPermissions = 'perm';
    SP.Storefront.StringIds.StateParamValues.detailsReviews = 'revw';
    SP.Storefront.StringIds.StateParamValues.pageNext = 'pgnxt';
    SP.Storefront.StringIds.StateParamValues.pagePrev = 'pgprev';
    SP.Storefront.StringIds.StateParamValues.pageNone = 'pgnone';
    SP.Storefront.StringIds.StateParamValues.myAppsSortName = '0';
    SP.Storefront.StringIds.StateParamValues.myAppsSortNew = '1';
    SP.Storefront.StringIds.StateParamValues.selectNone = 'none';
    SP.Storefront.StringIds.StateParamValues.licenseTypeForMe = '0';
    SP.Storefront.StringIds.StateParamValues.licenseTypeForMore = '1';
    SP.Storefront.StringIds.StateParamValues.licenseTypeForAll = '2';
    SP.Storefront.StringIds.StateParamValues.moreActionsRefresh = '0';
    SP.Storefront.StringIds.StateParamValues.moreActionsManage = '1';
    SP.Storefront.StringIds.StateParamValues.moreActionsRequest = '2';
    SP.Storefront.StringIds.StateParamValues.moreActionsReportAbuse = '3';
    SP.Storefront.StringIds.UIElement.acceptLink = 'idStorefrontAcceptLink';
    SP.Storefront.StringIds.UIElement.actionButton = 'idStorefrontActionButton';
    SP.Storefront.StringIds.UIElement.anchorSelect = 'AnchorSelect';
    SP.Storefront.StringIds.UIElement.appDetailsActions = 'idStorefrontAppDetailsActions';
    SP.Storefront.StringIds.UIElement.appDetailsPane = 'idStorefrontAppDetailsPane';
    SP.Storefront.StringIds.UIElement.appDetailsRating = 'idStorefrontAppDetailsRating';
    SP.Storefront.StringIds.UIElement.appDetailsTable = 'idStorefrontAppDetailsTable';
    SP.Storefront.StringIds.UIElement.appIcon = 'idStorefrontAppIcon';
    SP.Storefront.StringIds.UIElement.appIconMain = 'idStorefrontIconMain';
    SP.Storefront.StringIds.UIElement.appIconPreview = 'idStorefrontIconPreview';
    SP.Storefront.StringIds.UIElement.body = 'Body';
    SP.Storefront.StringIds.UIElement.category = 'idStorefrontCategoryItem';
    SP.Storefront.StringIds.UIElement.carousel = 'idStorefrontCarousel';
    SP.Storefront.StringIds.UIElement.description = 'Description';
    SP.Storefront.StringIds.UIElement.detailsNotificationPane = 'idStorefrontDetailsNotificationPane';
    SP.Storefront.StringIds.UIElement.detailsWhyLink = 'idStorefrontDetailsWhyLink';
    SP.Storefront.StringIds.UIElement.downloadButton = 'idStorefrontDownloadButton';
    SP.Storefront.StringIds.UIElement.dropDown = 'idStorefrontDropDown';
    SP.Storefront.StringIds.UIElement.errorViewMessage = 'idStorefrontErrorViewMessage';
    SP.Storefront.StringIds.UIElement.errorViewWhyLink = 'idStorefrontErrorViewWhyLink';
    SP.Storefront.StringIds.UIElement.filmStrip = 'idStorefrontFilmStrip';
    SP.Storefront.StringIds.UIElement.filmStripItem = 'idStorefrontFilmStripItem';
    SP.Storefront.StringIds.UIElement.fiveStarEmpty = 'idStorefrontRatingsFiveStarEmpty';
    SP.Storefront.StringIds.UIElement.fiveStarFilled = 'idStorefrontFiveStarFilled';
    SP.Storefront.StringIds.UIElement.header = 'idStorefrontHeader';
    SP.Storefront.StringIds.UIElement.hugActionButton = 'idStorefrontHugActionButton';
    SP.Storefront.StringIds.UIElement.hugFailed = 'HugFailed';
    SP.Storefront.StringIds.UIElement.hugRetry = 'HugRetry';
    SP.Storefront.StringIds.UIElement.hugReturnButton = 'idStorefrontHugReturnButton';
    SP.Storefront.StringIds.UIElement.hugSuccess = 'HugSuccess';
    SP.Storefront.StringIds.UIElement.hugWait = 'HugWait';
    SP.Storefront.StringIds.UIElement.image = 'Image';
    SP.Storefront.StringIds.UIElement.mainForm = 'idStorefrontForm';
    SP.Storefront.StringIds.UIElement.managementLeftNavBar = 'idStorefrontManagementLeftNavBar';
    SP.Storefront.StringIds.UIElement.myAppIcon = 'idStorefrontMyAppIcon';
    SP.Storefront.StringIds.UIElement.myAppIconButton = 'idStorefrontMyAppIconButton';
    SP.Storefront.StringIds.UIElement.labelItem = 'idStorefrontLabelItem';
    SP.Storefront.StringIds.UIElement.layoutRoot = 'idStorefrontLayoutRoot';
    SP.Storefront.StringIds.UIElement.layoutRootParent = 'idStorefrontLayoutRootParent';
    SP.Storefront.StringIds.UIElement.loadingDiv = 'idStorefrontLoadingDiv';
    SP.Storefront.StringIds.UIElement.list = 'idStorefrontList';
    SP.Storefront.StringIds.UIElement.listItem = 'idStorefrontListItem';
    SP.Storefront.StringIds.UIElement.pageTitleCurrentNode = 'ms-pageTitleCurrentNode';
    SP.Storefront.StringIds.UIElement.pagingControl = 'idPagingControl';
    SP.Storefront.StringIds.UIElement.pagingControlSpan = 'pagingcontrolspan';
    SP.Storefront.StringIds.UIElement.pagingControlsWrapper = 'idPagingControlsWrapper';
    SP.Storefront.StringIds.UIElement.postedBy = 'PostedBy';
    SP.Storefront.StringIds.UIElement.price = 'Price';
    SP.Storefront.StringIds.UIElement.priceLabel = 'idStorefrontPriceLabel';
    SP.Storefront.StringIds.UIElement.promoPrice = 'PromoPrice';
    SP.Storefront.StringIds.UIElement.promotedSection = 'idStorefrontPromotedSection';
    SP.Storefront.StringIds.UIElement.provider = 'Provider';
    SP.Storefront.StringIds.UIElement.providerLabel = 'idStorefrontProviderLabel';
    SP.Storefront.StringIds.UIElement.privacyLink = 'idStorefrontPrivacyLink';
    SP.Storefront.StringIds.UIElement.ratingCount = 'RatingCount';
    SP.Storefront.StringIds.UIElement.ratings = 'Ratings';
    SP.Storefront.StringIds.UIElement.reviewsPane = 'idStorefrontReviewsPane';
    SP.Storefront.StringIds.UIElement.reviewsWriteLink = 'idStorefrontWriteReviewsLink';
    SP.Storefront.StringIds.UIElement.reviewsShowLink = 'idStorefrontShowReviewsLink';
    SP.Storefront.StringIds.UIElement.searchBox = 'idStorefrontSearchBox';
    SP.Storefront.StringIds.UIElement.searchBoxImageSpan = 'idStorefrontSearchBoxImageSpan';
    SP.Storefront.StringIds.UIElement.searchBoxSubmit = 'idStorefrontSearchBoxSubmit';
    SP.Storefront.StringIds.UIElement.seatsBox = 'idStorefrontSeatsBox';
    SP.Storefront.StringIds.UIElement.singleReview = 'idStorefrontSingleReview';
    SP.Storefront.StringIds.UIElement.subListListItem = 'idStorefrontSubListListItem';
    SP.Storefront.StringIds.UIElement.termsLink = 'idStorefrontTermsLink';
    SP.Storefront.StringIds.UIElement.text = 'Text';
    SP.Storefront.StringIds.UIElement.titleLabel = 'idStorefrontTitleLabel';
    SP.Storefront.StringIds.UIElement.topBorder = 'idStorefrontTopBorder';
    SP.Storefront.StringIds.UIElement.trialButton = 'idStorefrontTrialButton';
    SP.Storefront.StringIds.UIElement.videoLink = 'idStorefrontVideoLink';
    SP.Storefront.StringIds.UIElement.view = 'idStorefrontView';
    SP.Storefront.StringIds.UIElement.viewState = 'idStorefrontViewState';
    SP.Storefront.StringIds.List.appDetailsAdditional = 'AppDetailsAdditional';
    SP.Storefront.StringIds.List.filmStrip = 'FilmStrip';
    SP.Storefront.StringIds.List.manageFilter = 'ManageFilter';
    SP.Storefront.StringIds.List.manageSorts = 'ManageSorts';
    SP.Storefront.StringIds.List.officeAppsCategories = 'OfficeAppsCategories';
    SP.Storefront.StringIds.List.officeAppsIcons = 'OfficeAppsIcons';
    SP.Storefront.StringIds.List.officeAppsLanguages = 'OfficeAppsLanguages';
    SP.Storefront.StringIds.List.officeAppsRoot = 'OfficeAppsRoot';
    SP.Storefront.StringIds.List.officeAppsSorts = 'OfficeAppsSorts';
    SP.Storefront.StringIds.List.officePromotedIcons = 'OfficePromotedIcons';
    SP.Storefront.StringIds.List.myAppIcons = 'MyAppIcons';
    SP.Storefront.StringIds.List.myNewAppIcons = 'MyNewAppIcons';
    SP.Storefront.StringIds.List.pageList = 'PageList';
    SP.Storefront.StringIds.List.priceFilters = 'PriceFilters';
    SP.Storefront.StringIds.List.reviewsSorts = 'ReviewsSorts';
    SP.Storefront.StringIds.List.viewSelector = 'ViewSelector';
    SP.Storefront.StringIds.CSSClass.anchorSelect = 'ms-storefront-selectanchor';
    SP.Storefront.StringIds.CSSClass.appDetailsAdditionalList = 'ms-storefront-appdetailsadditionallist';
    SP.Storefront.StringIds.CSSClass.appDetailsFilmStrip = 'ms-storefront-appdetailsfilmstrip';
    SP.Storefront.StringIds.CSSClass.appDetailsCell = 'ms-storefront-appdetailscell';
    SP.Storefront.StringIds.CSSClass.appDetailsMain = 'ms-storefront-appdetailsmain';
    SP.Storefront.StringIds.CSSClass.appDetailsMessagePane = 'ms-storefront-appdetailsmsgpane';
    SP.Storefront.StringIds.CSSClass.appDetailsPermissionsString = 'ms-storefront-appdetailpermissionsstring';
    SP.Storefront.StringIds.CSSClass.appDetailsPrice = 'ms-storefront-appdetailsprice';
    SP.Storefront.StringIds.CSSClass.appDetailsPriceOrig = 'ms-storefront-appdetailspriceorig';
    SP.Storefront.StringIds.CSSClass.appDetailsPromo = 'ms-storefront-appdetailspromo';
    SP.Storefront.StringIds.CSSClass.appDetailsRightPane = 'ms-storefront-appdetailsrightpane';
    SP.Storefront.StringIds.CSSClass.appDetailsSeatsBox = 'ms-storefront-appdetailsseatsbox';
    SP.Storefront.StringIds.CSSClass.appDetailsSeatsBoxLabel = 'ms-storefront-appdetailsseatsboxlabel';
    SP.Storefront.StringIds.CSSClass.appDetailsSeatsBoxRefresh = 'ms-storefront-appdetailsseatsboxrefresh';
    SP.Storefront.StringIds.CSSClass.appDetailsSeatsBoxRefreshImage = 'ms-storefront-appdetailsseatsboxrefreshimg';
    SP.Storefront.StringIds.CSSClass.appDetailsSeatsError = 'ms-storefront-appdetailsseatserror';
    SP.Storefront.StringIds.CSSClass.appDetailsSection = 'ms-storefront-appdetailssection';
    SP.Storefront.StringIds.CSSClass.appDetailsStarsCell = 'ms-storefront-appdetailsstarscell';
    SP.Storefront.StringIds.CSSClass.appDetailsTable = 'ms-storefront-appdetailstable';
    SP.Storefront.StringIds.CSSClass.appDetailsTitle = 'ms-storefront-appdetailstitle';
    SP.Storefront.StringIds.CSSClass.appDetailsTitleDiv = 'ms-storefront-appdetailstitlediv';
    SP.Storefront.StringIds.CSSClass.appDetailsTrialDiv = 'ms-storefront-appdetailstrialdiv';
    SP.Storefront.StringIds.CSSClass.appDetailsTrialMessage = 'ms-storefront-appdetailstrialmsg';
    SP.Storefront.StringIds.CSSClass.appIcon = 'ms-storefront-appicon';
    SP.Storefront.StringIds.CSSClass.appIconPreview = 'ms-storefront-appiconpreview';
    SP.Storefront.StringIds.CSSClass.appIconPrice = 'ms-storefront-appiconprice';
    SP.Storefront.StringIds.CSSClass.appIconPriceOrig = 'ms-storefront-appiconpriceorig';
    SP.Storefront.StringIds.CSSClass.appIconPricePromo = 'ms-storefront-appiconpricepromo';
    SP.Storefront.StringIds.CSSClass.appIconText = 'ms-storefront-appicontext';
    SP.Storefront.StringIds.CSSClass.appIconVotes = 'ms-storefront-appiconvotes';
    SP.Storefront.StringIds.CSSClass.appList = 'ms-storefront-applist';
    SP.Storefront.StringIds.CSSClass.appLink = 'ms-storefront-applink';
    SP.Storefront.StringIds.CSSClass.arrowImage = 'ms-storefront-arrowimg';
    SP.Storefront.StringIds.CSSClass.arrowSpan = 'ms-storefront-arrowspan';
    SP.Storefront.StringIds.CSSClass.arrowDarkImage = 'ms-storefront-arrowdarkimg';
    SP.Storefront.StringIds.CSSClass.arrowDarkSpan = 'ms-storefront-arrowdarkspan';
    SP.Storefront.StringIds.CSSClass.arrowGrayImage = 'ms-storefront-arrowgrayimg';
    SP.Storefront.StringIds.CSSClass.arrowGraySpan = 'ms-storefront-arrowgrayspan';
    SP.Storefront.StringIds.CSSClass.clear = 'ms-storefront-clear';
    SP.Storefront.StringIds.CSSClass.carouselTitle = 'ms-storefront-carouseltitle';
    SP.Storefront.StringIds.CSSClass.carouselArrow = 'ms-storefront-carouselarrow';
    SP.Storefront.StringIds.CSSClass.centerTextOuter = 'ms-storefront-centertextouter';
    SP.Storefront.StringIds.CSSClass.centerTextInner = 'ms-storefront-centertextinner';
    SP.Storefront.StringIds.CSSClass.disabledLink = 'ms-storefront-disabledlink';
    SP.Storefront.StringIds.CSSClass.divider = 'ms-storefront-divider';
    SP.Storefront.StringIds.CSSClass.dropDownLicense = 'ms-storefront-licensedropdown';
    SP.Storefront.StringIds.CSSClass.dropDownMarket = 'ms-storefront-marketdropdown';
    SP.Storefront.StringIds.CSSClass.dropDownMoreActions = 'ms-storefront-moreactionsdropdown';
    SP.Storefront.StringIds.CSSClass.dropDownSort = 'ms-storefront-sortdropdown';
    SP.Storefront.StringIds.CSSClass.dropDownTitle = 'ms-storefront-dropdowntitle';
    SP.Storefront.StringIds.CSSClass.error = 'ms-storefront-error';
    SP.Storefront.StringIds.CSSClass.errorMain = 'ms-storefront-errormain';
    SP.Storefront.StringIds.CSSClass.filmStripBase = 'ms-storefront-filmstripbase';
    SP.Storefront.StringIds.CSSClass.filmStripHighlight = 'ms-storefront-filmstriphighlight';
    SP.Storefront.StringIds.CSSClass.filmStripItem = 'ms-storefront-filmstripitem';
    SP.Storefront.StringIds.CSSClass.filmStripList = 'ms-storefront-filmstriplist';
    SP.Storefront.StringIds.CSSClass.filmStripMain = 'ms-storefront-filmstripmain';
    SP.Storefront.StringIds.CSSClass.filmStripSelect = 'ms-storefront-filmstripselect';
    SP.Storefront.StringIds.CSSClass.filmStripThumb = 'ms-storefront-filmstripthumb';
    SP.Storefront.StringIds.CSSClass.filmStripVideoImage = 'ms-storefront-filmstripvideoimg';
    SP.Storefront.StringIds.CSSClass.filmStripVideoImageDiv = 'ms-storefront-filmstripvideoimgdiv';
    SP.Storefront.StringIds.CSSClass.fiveStarEmptyImg = 'ms-storefront-fivestaremptyimg';
    SP.Storefront.StringIds.CSSClass.fiveStarEmptySpan = 'ms-storefront-fivestaremptyspan';
    SP.Storefront.StringIds.CSSClass.fiveStarFilledImg = 'ms-storefront-fivestarfilledimg';
    SP.Storefront.StringIds.CSSClass.fiveStarFilledSpan = 'ms-storefront-fivestarfilledspan';
    SP.Storefront.StringIds.CSSClass.fiveStarSpan = 'ms-storefront-fivestarspan';
    SP.Storefront.StringIds.CSSClass.floatNormal = 'ms-storefront-float';
    SP.Storefront.StringIds.CSSClass.floatOpposite = 'ms-storefront-floatopposite';
    SP.Storefront.StringIds.CSSClass.fullSize = 'ms-storefront-fullsize';
    SP.Storefront.StringIds.CSSClass.galleryAppIconSpan = 'ms-storefront-galleryappiconspan';
    SP.Storefront.StringIds.CSSClass.galleryNoResults = 'ms-storefront-gallerynoresults';
    SP.Storefront.StringIds.CSSClass.highlight = 'ms-storefront-highlight';
    SP.Storefront.StringIds.CSSClass.hugDiv = 'ms-storefront-hugdiv';
    SP.Storefront.StringIds.CSSClass.hugLabels = 'ms-storefront-huglabels';
    SP.Storefront.StringIds.CSSClass.hugLoadingImage = 'ms-storefront-hugloadingimg';
    SP.Storefront.StringIds.CSSClass.hugMainMessage = 'ms-storefront-hugmainmsg';
    SP.Storefront.StringIds.CSSClass.hugTitleArea = 'ms-storefront-hugtitlearea';
    SP.Storefront.StringIds.CSSClass.hugView = 'ms-storefront-hugview';
    SP.Storefront.StringIds.CSSClass.innerPagingText = 'ms-storefront-innerpagingtext';
    SP.Storefront.StringIds.CSSClass.leftPaneItem = 'ms-storefront-leftpaneitem';
    SP.Storefront.StringIds.CSSClass.leftPaneList = 'ms-storefront-leftpanelist';
    SP.Storefront.StringIds.CSSClass.link = 'ms-storefront-link';
    SP.Storefront.StringIds.CSSClass.list = 'ms-storefront-list';
    SP.Storefront.StringIds.CSSClass.listItem = 'ms-storefront-listitem';
    SP.Storefront.StringIds.CSSClass.loadingMain = 'ms-storefront-loadingmain';
    SP.Storefront.StringIds.CSSClass.manageSubtitle = 'ms-storefront-mngsubtitle';
    SP.Storefront.StringIds.CSSClass.manageDescription = 'ms-storefront-mngsubdesc';
    SP.Storefront.StringIds.CSSClass.manageNoResults = 'ms-storefront-mngnoresults';
    SP.Storefront.StringIds.CSSClass.manageNoResultsTitle = 'ms-storefront-mngnoresultstitle';
    SP.Storefront.StringIds.CSSClass.manageSortList = 'ms-storefront-mngsortlist';
    SP.Storefront.StringIds.CSSClass.mainButton = 'ms-storefront-mainbutton';
    SP.Storefront.StringIds.CSSClass.myAppIcon = 'ms-storefront-myappicon';
    SP.Storefront.StringIds.CSSClass.myAppIconProvider = 'ms-storefront-myappiconprov';
    SP.Storefront.StringIds.CSSClass.myAppIconDiv = 'ms-storefront-myappicondiv';
    SP.Storefront.StringIds.CSSClass.myAppIconMessage = 'ms-storefront-myappiconmsg';
    SP.Storefront.StringIds.CSSClass.myAppIconText = 'ms-storefront-myappicontext';
    SP.Storefront.StringIds.CSSClass.myAppIconTopDiv = 'ms-storefront-myappicontop';
    SP.Storefront.StringIds.CSSClass.middle = 'ms-storefront-middle';
    SP.Storefront.StringIds.CSSClass.listItemNoHover = 'ms-storefront-listitemnohover';
    SP.Storefront.StringIds.CSSClass.notificationDiv = 'ms-storefront-notificationdiv';
    SP.Storefront.StringIds.CSSClass.notificationGallery = 'ms-storefront-gallerynotification';
    SP.Storefront.StringIds.CSSClass.notificationDetails = 'ms-storefront-detailsnotification';
    SP.Storefront.StringIds.CSSClass.notificationList = 'ms-storefront-notificationlist';
    SP.Storefront.StringIds.CSSClass.notificationListItem = 'ms-storefront-notificationlistitem';
    SP.Storefront.StringIds.CSSClass.notificationText = 'ms-storefront-notificationtext';
    SP.Storefront.StringIds.CSSClass.overflowAuto = 'ms-storefront-overflowauto';
    SP.Storefront.StringIds.CSSClass.pageList = 'ms-storefront-pagelist';
    SP.Storefront.StringIds.CSSClass.pageItem = 'ms-storefront-pageitem';
    SP.Storefront.StringIds.CSSClass.pageItemSeparator = 'ms-storefront-pageitemseparator';
    SP.Storefront.StringIds.CSSClass.paging = 'ms-paging';
    SP.Storefront.StringIds.CSSClass.pagingArrow = 'ms-storefront-pagingarrow';
    SP.Storefront.StringIds.CSSClass.pagingStorefront = 'ms-storefront-paging';
    SP.Storefront.StringIds.CSSClass.promoted = 'ms-storefront-promoted';
    SP.Storefront.StringIds.CSSClass.rateImage = 'ms-storefront-rateimg';
    SP.Storefront.StringIds.CSSClass.rateSpan = 'ms-storefront-ratespan';
    SP.Storefront.StringIds.CSSClass.revertColor = 'ms-storefront-revertcolor';
    SP.Storefront.StringIds.CSSClass.reviewMain = 'ms-storefront-reviewmain';
    SP.Storefront.StringIds.CSSClass.reviewNoResults = 'ms-storefront-reviewnoresults';
    SP.Storefront.StringIds.CSSClass.reviewPublisher = 'ms-storefront-reviewpublisher';
    SP.Storefront.StringIds.CSSClass.reviewSort = 'ms-storefront-reviewsort';
    SP.Storefront.StringIds.CSSClass.reviewSortList = 'ms-storefront-reviewsortlist';
    SP.Storefront.StringIds.CSSClass.reviewStars = 'ms-storefront-reviewstars';
    SP.Storefront.StringIds.CSSClass.reviewTitleDiv = 'ms-storefront-reviewtitlediv';
    SP.Storefront.StringIds.CSSClass.reviewTitle = 'ms-storefront-reviewtitle';
    SP.Storefront.StringIds.CSSClass.rightBottom24 = 'ms-storefront-rightbottom24';
    SP.Storefront.StringIds.CSSClass.rootControls = 'ms-storefront-rootcontrols';
    SP.Storefront.StringIds.CSSClass.searchBox = 'ms-storefront-searchbox';
    SP.Storefront.StringIds.CSSClass.seatsErrorBorder = 'ms-storefront-seatserrorborder';
    SP.Storefront.StringIds.CSSClass.selected = 'ms-storefront-selected';
    SP.Storefront.StringIds.CSSClass.semiTransparent = 'ms-storefront-semitransparent';
    SP.Storefront.StringIds.CSSClass.sortList = 'ms-storefront-sortlist';
    SP.Storefront.StringIds.CSSClass.textListItem = 'ms-storefront-textlistitem';
    SP.Storefront.StringIds.CSSClass.titleImage = 'ms-storefront-titleimage';
    SP.Storefront.StringIds.CSSClass.titleImageSpan = 'ms-storefront-titleimagespan';
    SP.Storefront.StringIds.CSSClass.view = 'ms-storefront-view';
    SP.Storefront.StringIds.CSSClass.viewSmall = 'ms-storefront-viewsmall';
    SP.Storefront.StringIds.CSSClass.wordwrap = 'ms-storefront-wordwrap';
    SP.Storefront.StringIds.CSSClassCore.accessible = 'ms-accessible';
    SP.Storefront.StringIds.CSSClassCore.accentText = 'ms-accentText';
    SP.Storefront.StringIds.CSSClassCore.anchorNoVisited = 'ms-link';
    SP.Storefront.StringIds.CSSClassCore.appIconImage = 'ms-storefront-appiconimg';
    SP.Storefront.StringIds.CSSClassCore.appIconSpan = 'ms-storefront-appiconspan';
    SP.Storefront.StringIds.CSSClassCore.attractMode = 'ms-attractMode';
    SP.Storefront.StringIds.CSSClassCore.blogCommand = 'ms-blog-command';
    SP.Storefront.StringIds.CSSClassCore.buttonEmphasize = 'ms-button-emphasize';
    SP.Storefront.StringIds.CSSClassCore.calloutLink = 'ms-calloutLink';
    SP.Storefront.StringIds.CSSClassCore.commandLink = 'ms-commandLink';
    SP.Storefront.StringIds.CSSClassCore.defaultAppIconImg = 'ms-storefront-defaultappiconimg';
    SP.Storefront.StringIds.CSSClassCore.defaultFont = 'ms-core-defaultFont';
    SP.Storefront.StringIds.CSSClassCore.formHelper = 'ms-core-form-helper';
    SP.Storefront.StringIds.CSSClassCore.inlineDiv = 'ms-displayInlineBlock';
    SP.Storefront.StringIds.CSSClassCore.item = 'ms-core-listMenu-item';
    SP.Storefront.StringIds.CSSClassCore.metadata = 'ms-metadata';
    SP.Storefront.StringIds.CSSClassCore.needIEFilter = 'ms-core-needIEFilter';
    SP.Storefront.StringIds.CSSClassCore.noList = 'ms-noList';
    SP.Storefront.StringIds.CSSClassCore.pageTitle = 'ms-core-pageTitle';
    SP.Storefront.StringIds.CSSClassCore.popupBorder = 'ms-popupBorder';
    SP.Storefront.StringIds.CSSClassCore.qatButton = 'ms-qatbutton';
    SP.Storefront.StringIds.CSSClassCore.removeLeftMargin = 'ms-core-sideNavBox-removeLeftMargin';
    SP.Storefront.StringIds.CSSClassCore.root = 'ms-core-listMenu-root';
    SP.Storefront.StringIds.CSSClassCore.searchBoxBaseline = 'ms-InlineSearch-SearchBox-Baseline';
    SP.Storefront.StringIds.CSSClassCore.searchBoxBlurredEmpty = 'ms-InlineSearch-SearchBox-EmptyUnfocused';
    SP.Storefront.StringIds.CSSClassCore.searchBoxFilled = 'ms-InlineSearch-SearchBox-Filled';
    SP.Storefront.StringIds.CSSClassCore.searchBoxFocusedEmpty = 'ms-InlineSearch-SearchBox-EmptyFocused';
    SP.Storefront.StringIds.CSSClassCore.searchCancelImage = 'ms-inlineSearch-cancelImg';
    SP.Storefront.StringIds.CSSClassCore.searchCancelImageHover = 'ms-inlineSearch-cancelImgHover';
    SP.Storefront.StringIds.CSSClassCore.searchImage = 'ms-inlineSearch-searchImg';
    SP.Storefront.StringIds.CSSClassCore.searchImageHover = 'ms-inlineSearch-searchImgHover';
    SP.Storefront.StringIds.CSSClassCore.searchImageHoverHighlight = 'ms-inlineSearch-imgHoverHighlight';
    SP.Storefront.StringIds.CSSClassCore.searchImageSpanBase = 'ms-inlineSearch-searchImgSpanBase';
    SP.Storefront.StringIds.CSSClassCore.searchImageSpanHoverHighlight = 'ms-inlineSearch-searchImgSpanHoverHighlight';
    SP.Storefront.StringIds.CSSClassCore.searchImageSpanStandard = 'ms-inlineSearch-searchImgSpanStandard';
    SP.Storefront.StringIds.CSSClassCore.searchOutlineBaseline = 'ms-InlineSearch-Outline-Baseline';
    SP.Storefront.StringIds.CSSClassCore.searchOutlineBlurredEmpty = 'ms-InlineSearch-Outline-Empty';
    SP.Storefront.StringIds.CSSClassCore.searchOutlineBlurredFilled = 'ms-InlineSearch-Outline-Filled';
    SP.Storefront.StringIds.CSSClassCore.searchOutlineFocused = 'ms-InlineSearch-Outline-Focused';
    SP.Storefront.StringIds.CSSClassCore.secondaryCommandLink = 'ms-secondaryCommandLink';
    SP.Storefront.StringIds.CSSClassCore.selectedItem = 'ms-core-listMenu-selected';
    SP.Storefront.StringIds.CSSClassCore.separatorLine = 'ms-core-listMenu-separatorLine';
    SP.Storefront.StringIds.CSSClassCore.soften = 'ms-soften';
    SP.Storefront.StringIds.CSSClassCore.staticClass = 'static';
    SP.Storefront.StringIds.CSSClassCore.statusBlue = 'ms-status-blue';
    SP.Storefront.StringIds.CSSClassCore.statusYellow = 'ms-status-yellow';
    SP.Storefront.StringIds.CSSClassCore.table = 'ms-table';
    SP.Storefront.StringIds.CSSClassCore.tableCell = 'ms-tableCell';
    SP.Storefront.StringIds.CSSClassCore.tableRow = 'ms-tableRow';
    SP.Storefront.StringIds.CSSClassCore.textLarge = 'ms-textLarge';
    SP.Storefront.StringIds.CSSClassCore.textSmall = 'ms-textSmall';
    SP.Storefront.StringIds.CSSClassCore.textXLarge = 'ms-textXLarge';
    SP.Storefront.StringIds.CSSClassCore.textXSmall = 'ms-textXSmall';
    SP.Storefront.StringIds.CSSClassCore.uppercase = 'ms-uppercase';
    SP.Storefront.StringIds.CSSClassCore.verticalBox = 'ms-core-listMenu-verticalBox';
    SP.Storefront.StringIds.CSSClassCore.webpartTitleText = 'ms-webpart-titleText';
    SP.Storefront.StringIds.CSSClassPartialStrings.disabled = 'disabled';
    SP.Storefront.StringIds.CSSClassPartialStrings.enabled = 'enabled';
    SP.Storefront.StringIds.CSSClassPartialStrings.left = 'left';
    SP.Storefront.StringIds.CSSClassPartialStrings.promotedLinkButton = 'ms-promlink-button';
    SP.Storefront.StringIds.CSSClassPartialStrings.right = 'right';
    SP.Storefront.StringIds.CSSClassPartialStrings.seperator = '-';
    SP.Storefront.SPOutOfBoxAppId.idStringDelimiter = ';';
    SP.Storefront.StorefrontUrl.pageName = 'storefront.aspx';
}
;
sp_storefront_initialize();
function InvokeRenderListView(context, id) {
    ctx = context;
    ctx.bInitialRender = true;
    RenderListView(ctx, id);
    ctx.bInitialRender = false;
}
RegisterModuleInit("sp.storefront.js", sp_storefront_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.storefront.js");
}
