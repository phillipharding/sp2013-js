Type.registerNamespace('SP.UI.PromotedLinks');
SP.UI.PromotedLinks.Constants = function SP_UI_PromotedLinks_Constants() {
};
SP.UI.PromotedLinks.Constants.TileViewListTypes = function() {
};
SP.UI.PromotedLinks.Constants.TileViewListTypes.prototype = {
    pictureLibrary: 109,
    promotedLinks: 170
};
SP.UI.PromotedLinks.Constants.TileViewListTypes.registerEnum('SP.UI.PromotedLinks.Constants.TileViewListTypes', false);
SP.UI.PromotedLinks.Constants.PromotedLinksListViewIDs = function() {
};
SP.UI.PromotedLinks.Constants.PromotedLinksListViewIDs.prototype = {
    tileView: 1,
    gettingStarted: 2,
    gridView: 10
};
SP.UI.PromotedLinks.Constants.PromotedLinksListViewIDs.registerEnum('SP.UI.PromotedLinks.Constants.PromotedLinksListViewIDs', false);
SP.UI.PromotedLinks.Constants.FieldNames = function SP_UI_PromotedLinks_Constants_FieldNames() {
};
SP.UI.PromotedLinks.GlobalTemplateOverrides = function SP_UI_PromotedLinks_GlobalTemplateOverrides() {
};
SP.UI.PromotedLinks.GlobalTemplateOverrides.$$cctor = function SP_UI_PromotedLinks_GlobalTemplateOverrides$$$cctor() {
    var $v_0 = 0;

    for (var $$arr_1 = SP.UI.PromotedLinks.GlobalTemplateOverrides.$R[0], $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_1 = $$arr_1[$$idx_3];

        $v_0++;
        for (var $$arr_5 = SP.UI.PromotedLinks.GlobalTemplateOverrides.$R[$v_0], $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_2 = $$arr_5[$$idx_7];
            var $v_3 = null;

            switch ($v_1) {
            case 170:
                $v_3 = new SP.UI.PromotedLinks.PromotedLinksTileViewRenderer($v_1, $v_2);
                break;
            case 109:
                $v_3 = new SP.UI.PictureLibrary.PictureLibraryTileViewRenderer($v_1, $v_2);
                break;
            }
            if (null !== $v_3) {
                SPClientTemplates.TemplateManager.RegisterTemplateOverrides($v_3.createRenderingContextOverrides());
            }
        }
    }
};
SP.UI.PromotedLinks.PromotedLinksTileViewRenderer = function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer(listTemplateType, baseViewID) {
    this.$$d_$w_1 = Function.createDelegate(this, this.$w_1);
    this.$$d_$Y_1 = Function.createDelegate(this, this.$Y_1);
    this.$$d_$17_1 = Function.createDelegate(this, this.$17_1);
    this.$$d_$f_1 = Function.createDelegate(this, this.$f_1);
    this.$$d_$16_1 = Function.createDelegate(this, this.$16_1);
    this.$$d_$15_1 = Function.createDelegate(this, this.$15_1);
    this.$$d_$18_1 = Function.createDelegate(this, this.$18_1);
    SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.initializeBase(this, [listTemplateType, baseViewID]);
};
SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.$z = function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$z($p0) {
    if (!SP.ScriptHelpers.isNullOrEmptyString($p0) && 0 <= $p0.indexOf('<')) {
        return $p0.replace(new RegExp('</?[aA]( [^>]*)?>', 'g'), '');
    }
    return $p0;
};
SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.$m = function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$m() {
    var $v_0 = $get('siteactiontd');

    if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
        var $v_1 = new SP.HtmlBuilder();

        $v_1.addAttribute('id', 'gettingstarted_calloutplaceholder');
        $v_1.addCssClass('ms-promlink-gettingStartedCallout');
        $v_1.renderBeginTag('div');
        $v_1.writeEncoded(Strings.STS.L_GSCallout);
        $v_1.renderEndTag();
        var $v_2 = new CalloutOptions();

        $v_2.boundingBox = document.body;
        $v_2.content = $v_1.toString();
        $v_2.launchPoint = $v_0;
        $v_2.ID = 'gettingstarted_callout';
        $v_2.beakOrientation = 'topBottom';
        var $v_3 = new CalloutOpenOptions();

        $v_3.event = 'none';
        $v_2.openOptions = $v_3;
        try {
            var $v_4 = CalloutManager.createNew($v_2);

            $v_4.open();
        }
        catch ($$e_5) { }
    }
};
SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.prototype = {
    $0_1: null,
    $E_1: null,
    createTileRenderer: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$createTileRenderer(context, id, title, imageUrl, linkPath) {
        return new SP.UI.PromotedLinks.PromotedLinksTileRenderer(context, id, title, imageUrl, linkPath);
    },
    onCreateRenderingContextOverrides: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$onCreateRenderingContextOverrides(context) {
        context.Templates['Header'] = this.$$d_$18_1;
        context.Templates['View'] = this.$$d_$15_1;
        context.Templates['Body'] = this.$$d_$16_1;
        context.Templates['Item'] = this.$$d_$f_1;
        context.Templates['Footer'] = this.$$d_$17_1;
    },
    onPostRender: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$onPostRender(context) {
        SP.UI.TileView.TileViewRenderer.prototype.onPostRender.call(this, context);
        if (this.baseViewID !== 10) {
            var $v_0 = $get('promotedlinks_hide_' + context.wpq);

            if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
                this.$E_1 = context;
                var $v_1 = this.$$d_$Y_1;

                $addHandler($v_0, 'click', $v_1);
            }
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$0_1)) {
            this.$0_1.postRender();
        }
    },
    renderBodyContent: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$renderBodyContent(context, result) {
        var $v_0 = context.ListData['Row'];
        var $v_1 = $v_0.length;

        if ($v_1 <= 0) {
            if (this.baseViewID !== 2 && !SP.ScriptHelpers.isNullOrEmptyString(context.listUrlDir)) {
                result.write(String.format(STSHtmlEncode(Strings.STS.L_EmptyList), '<a href=\"' + SP.ScriptHelpers.urlCombine(context.listUrlDir, 'allitems.aspx') + '\">' + STSHtmlEncode(Strings.STS.L_All_PromotedLinks) + '</a>'));
            }
        }
        else {
            if (!SP.ScriptHelpers.isNullOrUndefined(this.$0_1)) {
                this.$0_1.beginRenderCarousel(result);
            }
            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                context.CurrentItem = $v_0[$v_2];
                result.write(this.$f_1(context));
                context.CurrentItem = null;
            }
            if (!SP.ScriptHelpers.isNullOrUndefined(this.$0_1)) {
                this.$0_1.endRenderCarousel(result);
            }
        }
    },
    renderHeaderContent: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$renderHeaderContent(context, result) {
        var $v_0 = context.ListData['CustomTitle'];
        var $v_1 = context.ListData['Row'];
        var $v_2 = $v_1.length;

        if (this.baseViewID === 2 && $v_2 > 0 || this.baseViewID === 10 || !SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
            var $v_3 = SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0) ? context.ListTitle : $v_0;

            result.renderBeginTag('span');
            result.addCssClass('ms-promlink-parttitle');
            result.addCssClass('ms-webpart-titleText');
            result.renderBeginTag('h2');
            result.writeEncoded($v_3);
            result.renderEndTag();
            result.renderEndTag();
        }
        result.renderBeginTag('span');
        if (this.baseViewID === 2 && $v_2 > 0) {
            result.addCssClass('ms-commandLink');
            result.addCssClass('ms-blog-command');
            result.addAttribute('id', 'promotedlinks_hide_' + context.wpq);
            result.addAttribute('href', '#');
            result.addAttribute('title', STSHtmlEncode(Strings.STS.L_HideThisTooltip));
            result.renderBeginTag('a');
            result.writeEncoded(Strings.STS.L_HideThis);
            result.renderEndTag();
        }
        result.renderEndTag();
    },
    $18_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$18_1($p0) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = $p0.ListData['Row'];
        var $v_2 = $v_1.length;

        $v_0.addAttribute('id', 'promotedlinksheader_' + $p0.wpq);
        $v_0.addCssClass('ms-promlink-header');
        $v_0.renderBeginTag('div');
        this.renderHeaderContent($p0, $v_0);
        if (this.baseViewID !== 10) {
            if ($v_2 > 0) {
                this.$0_1 = new SP.UI.PromotedLinks.TilePagingControl($p0.wpq, $v_2, 150);
                this.$0_1.add_onStateChanged(this.$$d_$w_1);
                this.$0_1.renderControl($v_0);
            }
        }
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $Y_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$Y_1($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$E_1)) {
            SP.UI.PromotedLinks.WebPartManager.$Y(this.$E_1.ListSchema.PagePath, this.$E_1.wpq);
        }
    },
    $w_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$w_1($p0, $p1) {
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$0_1) && null !== this.tiles) {
            for (var $v_0 = 0, $v_1 = this.tiles.length; $v_0 < $v_1; $v_0++) {
                var $v_2 = this.tiles[$v_0];

                if (null !== $v_2) {
                    $v_2.setTabStop(this.$0_1.isVisible($v_0));
                }
            }
        }
    },
    $15_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$15_1($p0) {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.addAttribute('id', SP.UI.TileView.TileViewRenderer.getRootElementID($p0));
        $v_0.addCssClass('ms-promlink-root');
        $v_0.renderBeginTag('div');
        this.$14_1($v_0, $p0);
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $14_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$14_1($p0, $p1) {
        $p0.write($p1.RenderHeader($p1));
        $p0.write($p1.RenderBody($p1));
        $p0.write($p1.RenderFooter($p1));
    },
    $16_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$16_1($p0) {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.addAttribute('style', 'width:100%; table-layout:fixed;');
        $v_0.renderBeginTag('table');
        $v_0.renderBeginTag('tr');
        $v_0.renderBeginTag('td');
        this.renderBodyContent($p0, $v_0);
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $17_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$17_1($p0) {
        return '';
    },
    $f_1: function SP_UI_PromotedLinks_PromotedLinksTileViewRenderer$$f_1($p0) {
        var $v_0 = $p0.CurrentItem;
        var $v_1 = $v_0['ID'];
        var $v_2 = SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.$z($v_0['Title']);
        var $v_3 = $v_0['BackgroundImageLocation'];
        var $v_4 = $v_0['LinkLocation'];
        var $v_5 = this.createTileRenderer($p0, $v_1, $v_2, $v_3, $v_4);

        return $v_5.render();
    }
};
SP.UI.PromotedLinks.PromotedLinksTileRenderer = function SP_UI_PromotedLinks_PromotedLinksTileRenderer(context, id, title, imageUrl, linkPath) {
    SP.UI.PromotedLinks.PromotedLinksTileRenderer.initializeBase(this, [context, id, 150, title, imageUrl, null, null]);
    this.$A_1 = linkPath;
    var $v_0 = SP.ScriptHelpers.getUrlQueryPairs(linkPath);
    var $$dict_6 = $v_0;

    for (var $$key_7 in $$dict_6) {
        var $v_1 = {
            key: $$key_7,
            value: $$dict_6[$$key_7]
        };
        var $v_2 = $v_1.key;
        var $v_3 = $v_1.value;

        if ($v_3 === '~source') {
            var $v_4 = window.self.ajaxNavigate;

            this.$A_1 = SP.ScriptHelpers.replaceOrAddQueryString(this.$A_1, $v_2, $v_4.get_href());
        }
    }
};
SP.UI.PromotedLinks.PromotedLinksTileRenderer.$12 = function SP_UI_PromotedLinks_PromotedLinksTileRenderer$$12($p0, $p1, $p2, $p3, $p4, $p5) {
    $p5.addAttribute('style', 'height:' + $p2 + 'px; width:' + $p2 + 'px; position:relative; display:inline-block; overflow:hidden;');
    $p5.renderBeginTag('span');
    $p5.addAttribute('src', STSHtmlEncode($p3));
    $p5.addAttribute('style', 'left:-' + $p0 + 'px; top:-' + $p1 + 'px; position:absolute;');
    $p5.addAttribute('onerror', 'return SP.UI.PromotedLinks.BackgroundImage.OnLoadError(this);');
    $p5.addAttribute('alt', STSHtmlEncode($p4));
    $p5.renderBeginTag('img');
    $p5.renderEndTag();
    $p5.renderEndTag();
};
SP.UI.PromotedLinks.PromotedLinksTileRenderer.prototype = {
    $A_1: null,
    get_tileDescription: function SP_UI_PromotedLinks_PromotedLinksTileRenderer$get_tileDescription() {
        return this.item['Description'];
    },
    onBackgroundPreRender: function SP_UI_PromotedLinks_PromotedLinksTileRenderer$onBackgroundPreRender(builder) {
        var $v_0 = STSHtmlEncode(this.$A_1);
        var $v_1 = STSScriptEncode(this.$A_1);
        var $v_2 = this.item['LaunchBehavior'];
        var $v_3;

        if (!SP.ScriptHelpers.isNullOrUndefined($v_2) && $v_2.length === 1) {
            $v_3 = $v_2[0];
        }
        else {
            $v_3 = this.item['LaunchBehavior'];
        }
        if ($v_3 === Strings.STS.L_Dialog || $v_3 === '1') {
            builder.addAttribute('onclick', 'PreventDefaultNavigation(); SP.UI.ModalDialog.ShowPopupDialog(\'' + $v_1 + '\'); return false;');
            $v_0 = '#';
        }
        else if ($v_3 === Strings.STS.L_NewTab || $v_3 === '2') {
            builder.addAttribute('target=', '_blank');
        }
        builder.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 3));
        builder.addAttribute('href', $v_0);
        builder.renderBeginTag('a');
    },
    onBackgroundPostRender: function SP_UI_PromotedLinks_PromotedLinksTileRenderer$onBackgroundPostRender(builder) {
        builder.renderEndTag();
    },
    renderBackgroundImage: function SP_UI_PromotedLinks_PromotedLinksTileRenderer$renderBackgroundImage(builder) {
        var $v_0 = true;

        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.imageUrl) && null !== this.item) {
            var $v_1 = this.item['BackgroundImageClusterX'];
            var $v_2 = this.item['BackgroundImageClusterY'];

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1) && !SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_2)) {
                SP.UI.PromotedLinks.PromotedLinksTileRenderer.$12($v_1, $v_2, this.size, this.imageUrl, this.title, builder);
                $v_0 = false;
            }
        }
        if ($v_0) {
            SP.UI.TileView.TileRenderer.prototype.renderBackgroundImage.call(this, builder);
        }
    }
};
SP.UI.PromotedLinks.WebPartManager = function SP_UI_PromotedLinks_WebPartManager($p0, $p1) {
    this.$$d_$d_0 = Function.createDelegate(this, this.$d_0);
    this.$$d_$u_0 = Function.createDelegate(this, this.$u_0);
    this.$$d_$v_0 = Function.createDelegate(this, this.$v_0);
    this.$e_0 = $p0;
    this.$j_0 = $p1;
    this.$D_0 = $get('WebPart' + $p1);
    if (null !== this.$D_0) {
        this.$S_0 = new SP.Guid(this.$D_0.getAttribute('WebPartID'));
    }
};
SP.UI.PromotedLinks.WebPartManager.$Y = function SP_UI_PromotedLinks_WebPartManager$$Y($p0, $p1) {
    var $v_0 = new SP.UI.PromotedLinks.WebPartManager($p0, $p1);

    $v_0.$10_0();
    return false;
};
SP.UI.PromotedLinks.WebPartManager.prototype = {
    $e_0: null,
    $S_0: null,
    $7_0: null,
    $H_0: null,
    $j_0: null,
    $D_0: null,
    $10_0: function SP_UI_PromotedLinks_WebPartManager$$10_0() {
        if (null !== this.$D_0 && null !== this.$S_0) {
            this.$7_0 = SP.ClientContext.get_current();
            var $v_0 = this.$7_0.get_web();
            var $v_1 = $v_0.getFileByServerRelativeUrl(this.$e_0);

            if (null !== $v_1) {
                this.$H_0 = $v_1.getLimitedWebPartManager(1);
                this.$7_0.load(this.$H_0.get_webParts());
                this.$7_0.executeQueryAsync(this.$$d_$v_0, this.$$d_$u_0);
            }
        }
    },
    $v_0: function SP_UI_PromotedLinks_WebPartManager$$v_0($p0, $p1) {
        var $v_0 = this.$H_0.get_webParts();

        if ($v_0.get_count()) {
            var $v_1 = $v_0.getById(this.$S_0);

            if (null !== $v_1) {
                $v_1.deleteWebPart();
                this.$7_0.executeQueryAsync(this.$$d_$d_0, this.$$d_$u_0);
            }
        }
    },
    $d_0: function SP_UI_PromotedLinks_WebPartManager$$d_0($p0, $p1) {
        this.$7_0 = null;
        this.$H_0 = null;
        var $v_0 = $get('MSOZoneCell_WebPart' + this.$j_0);

        if (null !== $v_0) {
            $v_0.parentNode.removeChild($v_0);
        }
        $v_0 = null;
        this.$D_0 = null;
        EnsureScriptFunc('callout.js', 'CalloutManager', SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.$m);
    },
    $u_0: function SP_UI_PromotedLinks_WebPartManager$$u_0($p0, $p1) {
        this.$d_0($p0, null);
    }
};
SP.UI.PromotedLinks.BackgroundImage = function SP_UI_PromotedLinks_BackgroundImage() {
};
SP.UI.PromotedLinks.BackgroundImage.OnLoadError = function SP_UI_PromotedLinks_BackgroundImage$OnLoadError(srcElement) {
    if (null !== srcElement) {
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(srcElement.getAttribute('handled'))) {
            srcElement.className = 'ms-tileview-defaultImage';
            srcElement.style.width = 150 + 'px';
            srcElement.style.top = (srcElement.style.left = '0px');
            srcElement.setAttribute('handled', '1');
            srcElement.setAttribute('src', '/_layouts/15/images/blank.gif');
        }
    }
    return false;
};
SP.UI.PromotedLinks.TilePagingControl = function SP_UI_PromotedLinks_TilePagingControl($p0, $p1, $p2) {
    SP.UI.PromotedLinks.TilePagingControl.initializeBase(this, [$p0]);
    this.$2_1 = $p2 + 10;
    this.$C_1 = $p1;
    this.$O_1 = 0;
    this.$G_1 = $p1 - 1;
    this.$5_1 = new Sys.EventHandlerList();
};
SP.UI.PromotedLinks.TilePagingControl.prototype = {
    $2_1: 0,
    $C_1: 0,
    $O_1: 0,
    $G_1: 0,
    $5_1: null,
    $0_1: null,
    beginRenderCarousel: function SP_UI_PromotedLinks_TilePagingControl$beginRenderCarousel($p0) {
        $p0.addCssClass('ms-promlink-body');
        $p0.addAttribute('id', 'promotedlinksbody_' + this.id);
        $p0.renderBeginTag('div');
    },
    endRenderCarousel: function SP_UI_PromotedLinks_TilePagingControl$endRenderCarousel($p0) {
        $p0.renderEndTag();
    },
    renderControl: function SP_UI_PromotedLinks_TilePagingControl$renderControl($p0) {
        $p0.addCssClass('ms-promlink-headerNav');
        $p0.addAttribute('id', 'promotedlinkspaging_' + this.id);
        $p0.renderBeginTag('span');
        $p0.write(SP.UI.PagingControl.prototype.render.call(this, null));
        $p0.renderEndTag();
    },
    isVisible: function SP_UI_PromotedLinks_TilePagingControl$isVisible($p0) {
        return $p0 >= this.$O_1 && $p0 <= this.$G_1;
    },
    onNext: function SP_UI_PromotedLinks_TilePagingControl$onNext() {
        this.$c_1(this.id, -1);
    },
    onPrev: function SP_UI_PromotedLinks_TilePagingControl$onPrev() {
        this.$c_1(this.id, 1);
    },
    $c_1: function SP_UI_PromotedLinks_TilePagingControl$$c_1($p0, $p1) {
        var $v_0 = $get('promotedlinksbody_' + $p0);

        if (SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = SP.UI.TileView.Utilities.$W($v_0);

        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
            $v_0.style.top = ($v_1 = '0px');
            SP.UI.TileView.Utilities.$L($v_0, $v_1);
        }
        var $v_2 = parseInt($v_1);
        var $v_3 = parseInt($v_0.style.top);
        var $v_4 = $v_0.parentNode.clientWidth;
        var $v_5 = Math.floor($v_4 / this.$2_1);

        $v_2 += $p1 * $v_5 * this.$2_1;
        var $v_6 = this.$2_1 * this.$C_1 + $v_2 - $v_4;

        if ($v_2 > 0) {
            $v_2 = 0;
        }
        else if ($v_6 < 0) {
            $v_2 -= $v_6;
            if ($v_2 > 0) {
                $v_2 = 0;
            }
            else {
                $v_2 = Math.floor($v_2 / this.$2_1) * this.$2_1;
            }
            $v_6 = this.$2_1 * this.$C_1 + $v_2 - $v_4;
        }
        var $v_7 = window.browseris.ipad;

        if ($v_7) {
            SP.UI.TileView.Utilities.$L($v_0, $v_2 + 'px');
        }
        else {
            var $v_8 = new SPAnimation.State();

            $v_8.SetAttribute(1, $v_2);
            $v_8.SetAttribute(2, $v_3);
            var $v_9 = new SPAnimation.Object(3, 0, $v_0, $v_8, null, null);

            $v_9.RunAnimation();
        }
        this.$g_1($v_2, $v_6);
    },
    onWindowResized: function SP_UI_PromotedLinks_TilePagingControl$onWindowResized() {
        var $v_0 = $get('promotedlinksbody_' + this.id);

        if (SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            return;
        }
        var $v_1 = 0;
        var $v_2 = SP.UI.TileView.Utilities.$W($v_0);

        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_2)) {
            $v_1 = parseInt($v_2);
        }
        var $v_3 = this.$2_1 * this.$C_1 + $v_1 - $v_0.parentNode.clientWidth;

        this.$g_1($v_1, $v_3);
    },
    $g_1: function SP_UI_PromotedLinks_TilePagingControl$$g_1($p0, $p1) {
        this.setButtonState(1, $p0 < 0 ? 2 : 1);
        this.setButtonState(2, $p1 > 0 ? 2 : 1);
        if (SP.ScriptHelpers.isNullOrUndefined(this.$0_1)) {
            this.$0_1 = $get('promotedlinkspaging_' + this.id);
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$0_1)) {
            this.$0_1.style.display = $p0 < 0 || $p1 > 0 ? '' : 'none';
        }
        this.$O_1 = Math.abs(Math.floor($p0 / this.$2_1));
        this.$G_1 = this.$C_1 - 1;
        if ($p1 > 0) {
            this.$G_1 -= Math.floor(($p1 + this.$2_1 - 10) / this.$2_1);
        }
        var $v_0 = this.$5_1.getHandler('OnStateChange');

        if (null !== $v_0) {
            $v_0(this, new Sys.EventArgs());
        }
    },
    add_onStateChanged: function SP_UI_PromotedLinks_TilePagingControl$add_onStateChanged($p0) {
        this.$5_1.addHandler('OnStateChange', $p0);
    },
    remove_onStateChanged: function SP_UI_PromotedLinks_TilePagingControl$remove_onStateChanged($p0) {
        this.$5_1.removeHandler('OnStateChange', $p0);
    }
};
Type.registerNamespace('SP.UI.TileView');
SP.UI.TileView.TileSize = function() {
};
SP.UI.TileView.TileSize.prototype = {
    medium: 150
};
SP.UI.TileView.TileSize.registerEnum('SP.UI.TileView.TileSize', false);
SP.UI.TileView.TileElements = function() {
};
SP.UI.TileView.TileElements.prototype = {
    root: 1,
    content: 2,
    anchor: 3,
    overlay: 4,
    title: 5,
    description: 6,
    image: 7,
    checkbox: 8,
    itemLink: 9
};
SP.UI.TileView.TileElements.registerEnum('SP.UI.TileView.TileElements', false);
SP.UI.TileView.TileViewRenderer = function SP_UI_TileView_TileViewRenderer(templateTypeID, baseViewID) {
    this.$$d_onPostRender = Function.createDelegate(this, this.onPostRender);
    this.$$d_$I_0 = Function.createDelegate(this, this.$I_0);
    this.$$d_$J_0 = Function.createDelegate(this, this.$J_0);
    this.templateTypeID = templateTypeID;
    this.baseViewID = baseViewID;
    this.tiles = [];
};
SP.UI.TileView.TileViewRenderer.getRootElementID = function SP_UI_TileView_TileViewRenderer$getRootElementID(context) {
    return context.wpq + '-' + context.view;
};
SP.UI.TileView.TileViewRenderer.getPreviewImageUrl = function SP_UI_TileView_TileViewRenderer$getPreviewImageUrl(context, item) {
    return getDocumentIconAbsoluteUrl(item, 256, context);
};
SP.UI.TileView.TileViewRenderer.hideSelectAllItemsCbxAndTH = function SP_UI_TileView_TileViewRenderer$hideSelectAllItemsCbxAndTH(context) {
    var $v_0 = $get('cbxSelectAllItems' + context.ctxId);

    if ($v_0) {
        $v_0.parentNode.style.display = 'none';
    }
};
SP.UI.TileView.TileViewRenderer.prototype = {
    templateTypeID: 0,
    baseViewID: 0,
    tiles: null,
    dispose: function SP_UI_TileView_TileViewRenderer$dispose() {
        for (var $v_0 = 0, $v_1 = this.tiles.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.tiles[$v_0];

            $v_2.remove_$J_0(this.$$d_$J_0);
            $v_2.remove_$I_0(this.$$d_$I_0);
            $v_2.dispose();
        }
        Array.clear(this.tiles);
        this.tiles = null;
    },
    createRenderingContextOverrides: function SP_UI_TileView_TileViewRenderer$createRenderingContextOverrides() {
        var $v_0 = new ListContext();

        $v_0.BaseViewID = this.baseViewID;
        $v_0.ListTemplateType = this.templateTypeID;
        this.onCreateRenderingContextOverrides($v_0);
        AddPostRenderCallback($v_0, this.$$d_onPostRender);
        return $v_0;
    },
    onPostRender: function SP_UI_TileView_TileViewRenderer$onPostRender(context) {
        this.$l_0(context);
    },
    createNewTile: function SP_UI_TileView_TileViewRenderer$createNewTile(context, id) {
        return new SP.UI.TileView.TileViewRenderer.Tile(context, id);
    },
    isTileRendered: function SP_UI_TileView_TileViewRenderer$isTileRendered(context, id) {
        return !SP.ScriptHelpers.isNullOrUndefined($get(SP.UI.TileView.TileRenderer.tileElementId(context, id, 1)));
    },
    $l_0: function SP_UI_TileView_TileViewRenderer$$l_0($p0) {
        var $v_0 = $p0.ListData['Row'];

        for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
            var $v_3 = $v_0[$v_1];
            var $v_4 = $v_3['ID'];

            if (!SP.ScriptHelpers.isNullOrUndefined($v_4) && this.isTileRendered($p0, $v_4)) {
                var $v_5 = this.createNewTile($p0, $v_4);

                $v_5.$Z_0();
                $v_5.add_$J_0(this.$$d_$J_0);
                $v_5.add_$I_0(this.$$d_$I_0);
                Array.add(this.tiles, $v_5);
            }
        }
    },
    $I_0: function SP_UI_TileView_TileViewRenderer$$I_0($p0, $p1) {
        var $v_0 = $p0;

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0) && !SP.ScriptHelpers.isNullOrUndefined($v_0.get_$4_0())) {
            try {
                ($v_0.get_$4_0()).children[0].children[0].className = ($v_0.get_$4_0()).children[0].children[0].getAttribute('Collapsed');
                ($v_0.get_$4_0()).children[0].children[0].children[0].className = ($v_0.get_$4_0()).children[0].children[0].children[0].getAttribute('Collapsed');
            }
            catch ($$e_3) { }
        }
    },
    $J_0: function SP_UI_TileView_TileViewRenderer$$J_0($p0, $p1) {
        var $v_0 = $p0;

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0) && !SP.ScriptHelpers.isNullOrUndefined($v_0.get_$4_0())) {
            try {
                ($v_0.get_$4_0()).children[0].children[0].className = ($v_0.get_$4_0()).children[0].children[0].getAttribute('Expanded');
                ($v_0.get_$4_0()).children[0].children[0].children[0].className = ($v_0.get_$4_0()).children[0].children[0].children[0].getAttribute('Expanded');
            }
            catch ($$e_3) { }
        }
    }
};
SP.UI.TileView.TileViewRenderer.Tile = function SP_UI_TileView_TileViewRenderer_Tile($p0, $p1) {
    this.$$d_$o_0 = Function.createDelegate(this, this.$o_0);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0);
    this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut);
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$5_0 = new Sys.EventHandlerList();
    this.context = $p0;
    this.$9_0 = $p1;
};
SP.UI.TileView.TileViewRenderer.Tile.prototype = {
    context: null,
    $9_0: null,
    $8_0: false,
    $N_0: 0,
    $i_0: null,
    baseElement: null,
    anchorElement: null,
    $6_0: null,
    mouseOverHandler: null,
    mouseOutHandler: null,
    focusHandler: null,
    blurHandler: null,
    dispose: function SP_UI_TileView_TileViewRenderer_Tile$dispose() {
        this.detachEvents();
        this.baseElement = null;
    },
    get_$4_0: function SP_UI_TileView_TileViewRenderer_Tile$get_$4_0() {
        return this.$6_0;
    },
    $Z_0: function SP_UI_TileView_TileViewRenderer_Tile$$Z_0() {
        this.$i_0 = $get(SP.UI.TileView.TileRenderer.tileElementId(this.context, this.$9_0, 1));
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$i_0)) {
            this.baseElement = $get(SP.UI.TileView.TileRenderer.tileElementId(this.context, this.$9_0, 2));
            if (!SP.ScriptHelpers.isNullOrUndefined(this.baseElement)) {
                this.anchorElement = $get(SP.UI.TileView.TileRenderer.tileElementId(this.context, this.$9_0, 3));
                if (!SP.ScriptHelpers.isNullOrUndefined(this.anchorElement)) {
                    this.$6_0 = $get(SP.UI.TileView.TileRenderer.tileElementId(this.context, this.$9_0, 4));
                    if (!SP.ScriptHelpers.isNullOrUndefined(this.$6_0)) {
                        this.$N_0 = parseInt(this.$6_0.getAttribute('offy'));
                        this.$6_0.style.top = this.$N_0.toString() + 'px';
                        SP.UI.TileView.Utilities.$L(this.$6_0, '0px');
                    }
                    this.$V_0();
                }
                this.$U_0();
            }
        }
    },
    $U_0: function SP_UI_TileView_TileViewRenderer_Tile$$U_0() {
        this.mouseOverHandler = this.$$d_$t_0;
        this.mouseOutHandler = this.$$d_onMouseOut;
        this.focusHandler = this.$$d_$s_0;
        this.blurHandler = this.$$d_onBlur;
        if (!SP.ScriptHelpers.isNullOrUndefined(this.baseElement)) {
            $addHandler(this.baseElement, 'mouseover', this.mouseOverHandler);
            $addHandler(this.baseElement, 'mouseout', this.mouseOutHandler);
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.anchorElement)) {
            $addHandler(this.anchorElement, 'focus', this.focusHandler);
            $addHandler(this.anchorElement, 'blur', this.blurHandler);
        }
    },
    detachEvents: function SP_UI_TileView_TileViewRenderer_Tile$detachEvents() {
        if (!SP.ScriptHelpers.isNullOrUndefined(this.baseElement)) {
            $removeHandler(this.baseElement, 'mouseover', this.mouseOverHandler);
            $removeHandler(this.baseElement, 'mouseout', this.mouseOutHandler);
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.anchorElement)) {
            $removeHandler(this.anchorElement, 'focus', this.focusHandler);
            $removeHandler(this.anchorElement, 'blur', this.blurHandler);
        }
    },
    add_$J_0: function SP_UI_TileView_TileViewRenderer_Tile$add_$J_0($p0) {
        this.$5_0.addHandler('OnDetailsExpanded', $p0);
    },
    remove_$J_0: function SP_UI_TileView_TileViewRenderer_Tile$remove_$J_0($p0) {
        this.$5_0.removeHandler('OnDetailsExpanded', $p0);
    },
    add_$I_0: function SP_UI_TileView_TileViewRenderer_Tile$add_$I_0($p0) {
        this.$5_0.addHandler('OnDetailsCollapsed', $p0);
    },
    remove_$I_0: function SP_UI_TileView_TileViewRenderer_Tile$remove_$I_0($p0) {
        this.$5_0.removeHandler('OnDetailsCollapsed', $p0);
    },
    $Q_0: false,
    $s_0: function SP_UI_TileView_TileViewRenderer_Tile$$s_0($p0) {
        this.$F_0($p0, true, false);
    },
    onBlur: function SP_UI_TileView_TileViewRenderer_Tile$onBlur($p0) {
        this.$F_0($p0, false, false);
    },
    $t_0: function SP_UI_TileView_TileViewRenderer_Tile$$t_0($p0) {
        this.$Q_0 = true;
        this.$F_0($p0, true, true);
    },
    onMouseOut: function SP_UI_TileView_TileViewRenderer_Tile$onMouseOut($p0) {
        this.$Q_0 = false;
        this.$F_0($p0, false, true);
    },
    $F_0: function SP_UI_TileView_TileViewRenderer_Tile$$F_0($p0, $p1, $p2) {
        $p0.preventDefault();
        if (this.$8_0 === $p1) {
            return;
        }
        var $v_0 = null;

        if ($p2) {
            var $v_1 = $p0.rawEvent;

            if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 8) {
                $v_0 = $p1 ? $v_1.fromElement : $v_1.toElement;
            }
            else {
                $v_0 = $v_1.relatedTarget;
            }
        }
        if (!$p1 && ($p2 && this.containedWithinTileContent($v_0) || this.$Q_0)) {
            return;
        }
        this.$8_0 = $p1;
        var $$t_5 = this;

        window.setTimeout(function() {
            if (null !== $$t_5.anchorElement) {
                EnsureScriptFunc('core.js', 'SPAnimation', $$t_5.$$d_$o_0);
            }
        }, 0);
    },
    $o_0: function SP_UI_TileView_TileViewRenderer_Tile$$o_0() {
        if (this.$8_0) {
            this.$k_0();
        }
        else {
            this.$V_0();
        }
        var $v_0 = this.$6_0;

        if ($v_0) {
            if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0.style.top)) {
                $v_0.style.top = (this.$8_0 ? this.$N_0 : 0) + 'px';
                SP.UI.TileView.Utilities.$L($v_0, '0px');
            }
            var $v_2 = new SPAnimation.State();

            $v_2.SetAttribute(1, 0);
            $v_2.SetAttribute(2, this.$8_0 ? 0 : this.$N_0);
            var $v_3 = new SPAnimation.Object(3, 0, $v_0, $v_2, null, null);

            $v_3.RunAnimation();
        }
        var $v_1 = this.$5_0.getHandler(this.$8_0 ? 'OnDetailsExpanded' : 'OnDetailsCollapsed');

        if ($v_1) {
            $v_1(this, new Sys.EventArgs());
        }
    },
    $k_0: function SP_UI_TileView_TileViewRenderer_Tile$$k_0() {
        var $v_0 = this.anchorElement.getAttribute('hrefAction');

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            this.anchorElement.href = $v_0;
        }
        this.anchorElement.removeAttribute('hrefAction');
        $v_0 = this.anchorElement.getAttribute('clickAction');
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            this.anchorElement.setAttribute('onclick', $v_0);
        }
        else {
            this.anchorElement.removeAttribute('onclick');
        }
        this.anchorElement.removeAttribute('clickAction');
    },
    $V_0: function SP_UI_TileView_TileViewRenderer_Tile$$V_0() {
        if (SP.ScriptHelpers.isNullOrUndefined(this.anchorElement.getAttribute('hrefAction'))) {
            try {
                this.anchorElement.setAttribute('hrefAction', this.anchorElement.href);
                this.anchorElement.href = '#';
            }
            catch ($$e_0) { }
        }
        if (SP.ScriptHelpers.isNullOrUndefined(this.anchorElement.getAttribute('clickAction'))) {
            this.anchorElement.setAttribute('clickAction', this.anchorElement.getAttribute('onclick'));
            this.anchorElement.setAttribute('onclick', 'PreventDefaultNavigation(); return false;');
        }
    },
    containedWithinTileContent: function SP_UI_TileView_TileViewRenderer_Tile$containedWithinTileContent($p0) {
        var $v_0 = SP.UI.TileView.TileViewRenderer.getRootElementID(this.context);

        while (!SP.ScriptHelpers.isNullOrUndefined($p0) && $p0.id !== $v_0) {
            $p0 = $p0.parentNode;
            if ($p0 === this.baseElement.parentNode) {
                return true;
            }
        }
        return false;
    },
    setTabStop: function SP_UI_TileView_TileViewRenderer_Tile$setTabStop($p0) {
        if (null !== this.anchorElement) {
            if ($p0) {
                this.anchorElement.removeAttribute('tabindex');
            }
            else {
                this.anchorElement.setAttribute('tabindex', '-1');
            }
        }
    }
};
SP.UI.TileView.TabularTileViewRenderer = function SP_UI_TileView_TabularTileViewRenderer(templateTypeID, baseViewID) {
    SP.UI.TileView.TabularTileViewRenderer.initializeBase(this, [templateTypeID, baseViewID]);
};
SP.UI.TileView.TabularTileViewRenderer.prototype = {
    $h_1: 0,
    $J_0: function SP_UI_TileView_TabularTileViewRenderer$$J_0($p0, $p1) {
        var $v_0 = $p0;

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0) && !SP.ScriptHelpers.isNullOrUndefined($v_0.get_$M_1())) {
            var $$t_3 = this;

            this.$h_1 = window.setTimeout(function() {
                removeClass($v_0.get_$M_1(), 'ms-hide');
            }, 200);
        }
        SP.UI.TileView.TileViewRenderer.prototype.$J_0.call(this, $p0, $p1);
    },
    $I_0: function SP_UI_TileView_TabularTileViewRenderer$$I_0($p0, $p1) {
        var $v_0 = $p0;

        window.clearTimeout(this.$h_1);
        if (!SP.ScriptHelpers.isNullOrUndefined($p1) && !SP.ScriptHelpers.isNullOrUndefined($v_0.get_$M_1())) {
            addClass($v_0.get_$M_1(), 'ms-hide');
        }
        SP.UI.TileView.TileViewRenderer.prototype.$I_0.call(this, $p0, $p1);
    },
    createNewTile: function SP_UI_TileView_TabularTileViewRenderer$createNewTile(context, id) {
        return new SP.UI.TileView.TabularTileViewRenderer.TabularTile(context, id);
    }
};
SP.UI.TileView.TabularTileViewRenderer.TabularTile = function SP_UI_TileView_TabularTileViewRenderer_TabularTile($p0, $p1) {
    SP.UI.TileView.TabularTileViewRenderer.TabularTile.initializeBase(this, [$p0, $p1]);
};
SP.UI.TileView.TabularTileViewRenderer.TabularTile.prototype = {
    $B_1: null,
    $1_1: null,
    $3_1: null,
    $P_1: null,
    $Z_0: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$$Z_0() {
        SP.UI.TileView.TileViewRenderer.Tile.prototype.$Z_0.call(this);
        this.$B_1 = this.baseElement.nextSibling;
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$B_1)) {
            this.$1_1 = this.$B_1.childNodes[0];
            this.$3_1 = this.$B_1.childNodes[2];
        }
        this.$U_1();
    },
    $U_1: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$$U_1() {
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$1_1)) {
            $addHandler(this.$1_1, 'focus', this.focusHandler);
            $addHandler(this.$1_1, 'blur', this.blurHandler);
            $addHandler(this.$1_1, 'mouseout', this.mouseOutHandler);
            $addHandler(this.$1_1, 'mouseover', this.mouseOverHandler);
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$3_1)) {
            $addHandler(this.$3_1, 'focus', this.focusHandler);
            $addHandler(this.$3_1, 'blur', this.blurHandler);
        }
    },
    detachEvents: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$detachEvents() {
        SP.UI.TileView.TileViewRenderer.Tile.prototype.detachEvents.call(this);
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$1_1)) {
            $removeHandler(this.$1_1, 'focus', this.focusHandler);
            $removeHandler(this.$1_1, 'blur', this.blurHandler);
            $removeHandler(this.$1_1, 'mouseout', this.mouseOutHandler);
            $removeHandler(this.$1_1, 'mouseover', this.mouseOverHandler);
        }
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$3_1)) {
            $removeHandler(this.$3_1, 'focus', this.focusHandler);
            $removeHandler(this.$3_1, 'blur', this.blurHandler);
        }
    },
    onBlur: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$onBlur($p0) {
        var $v_0 = false;

        if (!SP.ScriptHelpers.isNullOrUndefined(document.activeElement) && this.containedWithinTileContent(document.activeElement)) {
            $v_0 = true;
        }
        else if (Sys.Browser.agent === Sys.Browser.Safari && this.containedWithinTileContent($p0.target)) {
            $v_0 = $p0.target.id === this.$3_1.id && (this.$P_1 !== this.$1_1.id || CalloutManager.isAtLeastOneCalloutOpen()) || $p0.target.id === this.$1_1.id && this.$P_1 !== this.$3_1.id;
        }
        if (!SP.ScriptHelpers.isNullOrUndefined($p0.target)) {
            this.$P_1 = $p0.target.id;
        }
        if (!$v_0) {
            SP.UI.TileView.TileViewRenderer.Tile.prototype.onBlur.call(this, $p0);
        }
    },
    onMouseOut: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$onMouseOut($p0) {
        var $v_0 = false;

        if (CalloutManager.isAtLeastOneCalloutOpen()) {
            var $v_1 = CalloutManager.getFromLaunchPointIfExists(this.$3_1);

            if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_0 = $v_1.isOpenOrOpening(null);
            }
        }
        if (!$v_0) {
            SP.UI.TileView.TileViewRenderer.Tile.prototype.onMouseOut.call(this, $p0);
        }
    },
    get_$M_1: function SP_UI_TileView_TabularTileViewRenderer_TabularTile$get_$M_1() {
        return this.$B_1;
    }
};
SP.UI.TileView.TileRenderer = function SP_UI_TileView_TileRenderer(context, id, size, title, imageUrl, imageWidth, imageHeight) {
    this.context = context;
    this.item = context.CurrentItem;
    this.id = id;
    this.size = size;
    this.title = title;
    this.imageUrl = imageUrl;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.isCustomData = this.item['CustomData.'];
    this.inError = context.CurrentItem['InError.'];
};
SP.UI.TileView.TileRenderer.tileElementId = function SP_UI_TileView_TileRenderer$tileElementId(context, id, element) {
    return 'Tile_' + context.wpq + '_' + id + '_' + element;
};
SP.UI.TileView.TileRenderer.prototype = {
    context: null,
    id: null,
    title: null,
    imageUrl: null,
    size: 0,
    imageWidth: null,
    imageHeight: null,
    item: null,
    isCustomData: false,
    inError: false,
    onTilePreRender: function SP_UI_TileView_TileRenderer$onTilePreRender(builder) {
    },
    onTilePostRender: function SP_UI_TileView_TileRenderer$onTilePostRender(builder) {
    },
    onTileContentPreRender: function SP_UI_TileView_TileRenderer$onTileContentPreRender(builder) {
    },
    onTileContentPostRender: function SP_UI_TileView_TileRenderer$onTileContentPostRender(builder) {
    },
    renderBackgroundImage: function SP_UI_TileView_TileRenderer$renderBackgroundImage(builder) {
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.imageUrl)) {
            builder.addAttribute('src', STSHtmlEncode(this.imageUrl));
        }
        else {
            builder.addAttribute('src', '/_layouts/15/images/blank.gif');
        }
        builder.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 7));
        builder.addAttribute('alt', STSHtmlEncode(this.title));
        var $v_0 = !SP.ScriptHelpers.isNullOrUndefined(this.context.CurrentItem) ? this.context.CurrentItem['FSObjType'] : '0';

        builder.addAttribute('onerror', 'displayGenericDocumentIcon(event.srcElement ? event.srcElement : event.target, ' + $v_0 + '); return false;');
        builder.addAttribute('onload', '(event.srcElement ? event.srcElement : event.target).style.visibility = \'visible\'; SP.ScriptHelpers.resizeImageToSquareLength(this, ' + this.size + ')');
        builder.renderBeginTag('img');
        builder.renderEndTag();
    },
    render: function SP_UI_TileView_TileRenderer$render() {
        var $v_0 = new SP.HtmlBuilder();

        this.onTilePreRender($v_0);
        $v_0.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 1));
        $v_0.addCssClass('ms-tileview-tile-root');
        $v_0.addAttribute('style', String.format('width: {0}px; height: {0}px;', this.size + 10));
        $v_0.renderBeginTag('div');
        this.onTileContentPreRender($v_0);
        $v_0.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 2));
        $v_0.addCssClass('ms-tileview-tile-content');
        $v_0.addAttribute('style', String.format('width: {0}px; height: {0}px;', this.size));
        $v_0.addAttribute('aria-haspopup', 'true');
        $v_0.renderBeginTag('div');
        this.onBackgroundPreRender($v_0);
        this.renderBackgroundImage($v_0);
        $v_0.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 4));
        $v_0.addCssClass('ms-tileview-tile-detailsBox');
        $v_0.addAttribute('style', String.format('width: {0}px; height: {0}px;', this.size));
        $v_0.addAttribute('offy', '' + (this.size - this.get_$n_0()));
        $v_0.renderBeginTag('div');
        this.$13_0($v_0);
        $v_0.renderEndTag();
        this.onBackgroundPostRender($v_0);
        $v_0.renderEndTag();
        this.onTileContentPostRender($v_0);
        $v_0.renderEndTag();
        this.onTilePostRender($v_0);
        return $v_0.toString();
    },
    $13_0: function SP_UI_TileView_TileRenderer$$13_0($p0) {
        var $v_0 = 'Medium';

        $p0.addCssClass('ms-noList');
        $p0.addCssClass('ms-tileview-tile-detailsList' + $v_0);
        $p0.renderBeginTag('ul');
        $p0.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 5));
        $p0.addCssClass('ms-tileview-tile-title' + $v_0);
        $p0.addCssClass('ms-tileview-tile-title' + $v_0 + 'Collapsed');
        $p0.addAttribute('Collapsed', 'ms-tileview-tile-title' + $v_0 + ' ' + 'ms-tileview-tile-' + 'title' + $v_0 + 'Collapsed');
        $p0.addAttribute('Expanded', 'ms-tileview-tile-title' + $v_0 + ' ' + 'ms-tileview-tile-' + 'title' + $v_0 + 'Expanded');
        $p0.renderBeginTag('li');
        $p0.addCssClass('ms-tileview-tile-titleText' + $v_0 + 'Collapsed');
        $p0.addAttribute('Collapsed', 'ms-tileview-tile-titleText' + $v_0 + 'Collapsed');
        $p0.addAttribute('Expanded', 'ms-tileview-tile-titleText' + $v_0 + 'Expanded');
        $p0.renderBeginTag('div');
        $p0.addAttribute('title', this.title);
        $p0.write(this.title);
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.addCssClass('ms-tileview-tile-description' + $v_0);
        $p0.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 6));
        $p0.renderBeginTag('li');
        $p0.write(this.get_tileDescription());
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    get_$n_0: function SP_UI_TileView_TileRenderer$get_$n_0() {
        return Math.floor(this.size / 3);
    }
};
SP.UI.TileView.TabularTileRenderer = function SP_UI_TileView_TabularTileRenderer(context, id, size, title, imageUrl, imageWidth, imageHeight) {
    SP.UI.TileView.TabularTileRenderer.initializeBase(this, [context, id, size, title, imageUrl, imageWidth, imageHeight]);
};
SP.UI.TileView.TabularTileRenderer.prototype = {
    onTilePreRender: function SP_UI_TileView_TabularTileRenderer$onTilePreRender(builder) {
        var $v_0 = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group1) ? this.item[this.context.ListSchema.group1 + '.newgroup'] : '';
        var $v_1 = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group2) ? this.item[this.context.ListSchema.group2 + '.newgroup'] : '';

        if (!this.context.CurrentItemIdx || SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group1) && $v_0 === '1' || SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group2) && $v_0 === '2') {
            builder.write('<tr><td colspan=\"30\"><div>');
        }
    },
    onTilePostRender: function SP_UI_TileView_TabularTileRenderer$onTilePostRender(builder) {
        var $v_0 = this.context.ListData['Row'];
        var $v_1 = this.context.ListData['LastRow'];
        var $v_2 = this.context.CurrentItemIdx + 1;
        var $v_3 = $v_2 < $v_1 ? $v_0[$v_2] : null;
        var $v_4 = !SP.ScriptHelpers.isNullOrUndefined($v_3) && !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group1) ? $v_3[this.context.ListSchema.group1 + '.newgroup'] : '';
        var $v_5 = !SP.ScriptHelpers.isNullOrUndefined($v_3) && !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group2) ? $v_3[this.context.ListSchema.group2 + '.newgroup'] : '';

        if (SP.ScriptHelpers.isNullOrUndefined($v_3) || SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group1) && $v_4 === '1' || SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.context.ListSchema.group2) && $v_4 === '2') {
            builder.write('</div></td></tr>');
        }
    },
    onTileContentPreRender: function SP_UI_TileView_TabularTileRenderer$onTileContentPreRender(builder) {
        var $v_0 = this.item['ID'];
        var $v_1 = GenerateIID(this.context);

        builder.addCssClass('ms-tileview-tile-inner');
        builder.addAttribute('id', $v_1);
        builder.addAttribute('iid', $v_1);
        builder.addAttribute('style', String.format('width: {0}px; height: {0}px;', this.size));
        builder.renderBeginTag('div');
    },
    onTileContentPostRender: function SP_UI_TileView_TabularTileRenderer$onTileContentPostRender(builder) {
        var $v_0 = this.$r_1(this.context);
        var $v_1 = this.context.ListSchema.TabularView === '1' && this.$K_1;

        if ($v_0 || $v_1) {
            var $v_2 = GenerateIID(this.context);

            builder.addCssClass('ms-tileview-tile-tabularBox ms-hide');
            builder.renderBeginTag('div');
            if ($v_1 && !(this.isCustomData || this.inError)) {
                var $v_3 = SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 8);

                builder.addAttribute('id', $v_3);
                builder.addAttribute('onclick', 'this.checked = !this.checked; SP.UI.TileView.Utilities.selectListItem(\'' + STSScriptEncode($v_2) + '\', this.checked);');
                builder.addAttribute('href', 'javascript:{}');
                builder.addAttribute('title', STSHtmlEncode(Strings.STS.L_SPSelection_Checkbox));
                builder.addCssClass('ms-floatLeft');
                builder.addCssClass('s4-itm-selected');
                builder.addCssClass('ms-tileview-tile-selectionBox');
                builder.addAttribute('data-sp-continueWPSelect', 'true');
                builder.renderBeginTag('a');
                builder.addCssClass('s4-itm-cbx s4-itm-imgCbx');
                builder.renderBeginTag('span');
                builder.addCssClass('s4-itm-imgCbx-inner');
                builder.renderBeginTag('span');
                builder.addCssClass('ms-selectitem-span');
                builder.renderBeginTag('span');
                builder.addCssClass('ms-selectitem-icon');
                builder.addAttribute('src', GetThemedImageUrl('spcommon.png'));
                builder.addAttribute('alt', STSHtmlEncode(Strings.STS.L_SPSelection_Checkbox));
                builder.renderBeginTag('img');
                builder.renderEndTag();
                builder.renderEndTag();
                builder.renderEndTag();
                builder.renderEndTag();
                builder.renderEndTag();
            }
            if ($v_0 && !(this.isCustomData || this.inError)) {
                builder.write(this.$11_1(this.context, this.context.CurrentItem));
            }
            builder.renderEndTag();
        }
        builder.addCssClass('ms-hide');
        builder.addAttribute('id', this.get_$X_1());
        builder.renderBeginTag('div');
        builder.write(ComputedFieldWorker.NameOrTitle(this.context, null, this.context.CurrentItem, this.context.ListSchema));
        builder.renderEndTag();
        builder.renderEndTag();
    },
    onBackgroundPreRender: function SP_UI_TileView_TabularTileRenderer$onBackgroundPreRender(builder) {
        var $v_0 = this.item['ID'];
        var $v_1 = GenerateIID(this.context);

        builder.addAttribute('id', SP.UI.TileView.TileRenderer.tileElementId(this.context, $v_0, 3));
        builder.addAttribute('href', '#');
        if (!(this.isCustomData || this.inError)) {
            builder.addAttribute('onclick', 'SP.UI.TileView.Utilities.itemLinkNavigate(\'' + STSScriptEncode($v_1) + '\',\'' + STSScriptEncode(this.get_$X_1()) + '\');return false;');
        }
        builder.renderBeginTag('a');
    },
    onBackgroundPostRender: function SP_UI_TileView_TabularTileRenderer$onBackgroundPostRender(builder) {
        builder.renderEndTag();
    },
    $11_1: function SP_UI_TileView_TabularTileRenderer$$11_1($p0, $p1) {
        this.item['RenderCalloutWithoutHover'] = true;
        return RenderCalloutMenu($p0, $p1, $p0.CurrentFieldSchema, '');
    },
    $K_1: false,
    get_renderSelectionControlForTabular: function SP_UI_TileView_TabularTileRenderer$get_renderSelectionControlForTabular() {
        return this.$K_1;
    },
    set_renderSelectionControlForTabular: function SP_UI_TileView_TabularTileRenderer$set_renderSelectionControlForTabular(value) {
        this.$K_1 = value;
        return value;
    },
    $b_1: false,
    $a_1: false,
    $r_1: function SP_UI_TileView_TabularTileRenderer$$r_1($p0) {
        if (!this.$b_1) {
            if (!SP.ScriptHelpers.isNullOrUndefined($p0.ListSchema) && !SP.ScriptHelpers.isNullOrUndefined($p0.ListSchema.Field)) {
                for (var $v_0 = 0; $v_0 < $p0.ListSchema.Field.length; $v_0++) {
                    var $v_1 = $p0.ListSchema.Field[$v_0].CalloutMenu;

                    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
                        this.$a_1 = $v_1.toUpperCase() === 'TRUE';
                        break;
                    }
                }
            }
            this.$b_1 = true;
        }
        return this.$a_1;
    },
    get_$X_1: function SP_UI_TileView_TabularTileRenderer$get_$X_1() {
        return SP.UI.TileView.TileRenderer.tileElementId(this.context, this.id, 9);
    }
};
SP.UI.TileView.Utilities = function SP_UI_TileView_Utilities() {
};
SP.UI.TileView.Utilities.itemLinkNavigate = function SP_UI_TileView_Utilities$itemLinkNavigate(iid, hiddenLinkId) {
    if (SP.UI.TileView.Utilities.$p()) {
        APD_ItemLinkNavigate(iid);
    }
    else {
        SP.UI.TileView.Utilities.$y(hiddenLinkId);
    }
};
SP.UI.TileView.Utilities.$p = function SP_UI_TileView_Utilities$$p() {
    return eval('typeof(APD_InAssetPicker)') !== 'undefined' && APD_InAssetPicker();
};
SP.UI.TileView.Utilities.$y = function SP_UI_TileView_Utilities$$y($p0) {
    var $v_0 = $get($p0);
    var $v_1 = $v_0.getElementsByTagName('A');
    var $v_2 = $v_1[0];

    if (window.document.createEvent) {
        var $v_3 = window.document.createEvent('MouseEvents');

        $v_3.initMouseEvent('mousedown', true, true, window.self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        $v_2.dispatchEvent($v_3);
        var $v_4 = window.document.createEvent('MouseEvents');

        $v_4.initMouseEvent('click', true, true, window.self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        $v_2.dispatchEvent($v_4);
    }
    else {
        $v_2.click();
    }
};
SP.UI.TileView.Utilities.getItemNameOrTitle = function SP_UI_TileView_Utilities$getItemNameOrTitle(item) {
    var $v_0 = null;

    if (!SP.ScriptHelpers.isNullOrUndefined(item)) {
        $v_0 = item['Title'];
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
            EnsureFileLeafRefName(item);
            $v_0 = item['FileLeafRef.Name'];
        }
    }
    return $v_0;
};
SP.UI.TileView.Utilities.$L = function SP_UI_TileView_Utilities$$L($p0, $p1) {
    SP.UI.TileView.Utilities.$19($p0, $p1, true);
};
SP.UI.TileView.Utilities.$19 = function SP_UI_TileView_Utilities$$19($p0, $p1, $p2) {
    var $v_0 = !SP.ScriptHelpers.isNullOrUndefined(document.body.parentNode) && document.body.parentNode.dir === 'rtl';

    if ($v_0 && $p2 || !$v_0 && !$p2) {
        $p0.style.right = $p1;
    }
    else {
        $p0.style.left = $p1;
    }
};
SP.UI.TileView.Utilities.$W = function SP_UI_TileView_Utilities$$W($p0) {
    var $v_0 = !SP.ScriptHelpers.isNullOrUndefined(document.body.parentNode) && document.body.parentNode.dir === 'rtl';

    return $v_0 ? $p0.style.right : $p0.style.left;
};
SP.UI.TileView.Utilities.selectListItem = function SP_UI_TileView_Utilities$selectListItem(iid, selectTile) {
    var $v_0 = $get(iid);
    var $v_1 = $v_0;

    SP.ListOperation.Selection.selectListItem(iid, selectTile);
    if (selectTile) {
        addClass($v_1, 'ms-tileview-tile-selected');
    }
    else {
        removeClass($v_1, 'ms-tileview-tile-selected');
    }
};
Type.registerNamespace('SP.UI.PictureLibrary');
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer = function SP_UI_PictureLibrary_PictureLibraryTileViewRenderer($p0, $p1) {
    this.$$d_$q_2 = Function.createDelegate(this, this.$q_2);
    SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.initializeBase(this, [$p0, $p1]);
};
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.prototype = {
    onCreateRenderingContextOverrides: function SP_UI_PictureLibrary_PictureLibraryTileViewRenderer$onCreateRenderingContextOverrides($p0) {
        $p0.Templates['Item'] = this.$$d_$q_2;
        AddPostRenderCallback($p0, SP.UI.TileView.TileViewRenderer.hideSelectAllItemsCbxAndTH);
    },
    $q_2: function SP_UI_PictureLibrary_PictureLibraryTileViewRenderer$$q_2($p0) {
        var $v_0 = $p0.CurrentItem;

        if (!$v_0) {
            return '';
        }
        var $v_1 = $v_0['ID'];
        var $v_2 = STSHtmlEncode(SP.UI.TileView.Utilities.getItemNameOrTitle($v_0));
        var $v_3 = $v_0['InError.'];
        var $v_4;

        if ($v_3) {
            $v_4 = SP.Utilities.Utility.getImageUrl('error70by70.gif');
        }
        else {
            $v_4 = SP.UI.TileView.TileViewRenderer.getPreviewImageUrl($p0, $v_0);
        }
        var $v_5 = $v_0['ImageWidth'];
        var $v_6 = $v_0['ImageHeight'];
        var $v_7 = new SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer($p0, $v_1, $v_2, $v_4, $v_5, $v_6);

        $v_7.$K_1 = true;
        return $v_7.render();
    }
};
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer = function SP_UI_PictureLibrary_PictureLibraryTileViewRenderer_PictureLibraryTileRenderer($p0, $p1, $p2, $p3, $p4, $p5) {
    SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer.initializeBase(this, [$p0, $p1, 150, $p2, $p3, $p4, $p5]);
};
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer.prototype = {
    get_tileDescription: function SP_UI_PictureLibrary_PictureLibraryTileViewRenderer_PictureLibraryTileRenderer$get_tileDescription() {
        var $v_0 = '';

        if (!this.inError) {
            EnsureFileLeafRefSuffix(this.item);
            $v_0 += '<div id=\"Tile_' + this.context.wpq + '_' + this.id + '_OverlayRow_1' + '\">' + spMgr.RenderFieldByName(this.context, 'FileLeafRef.Suffix', this.item, this.context.ListSchema) + ' ' + spMgr.RenderFieldByName(this.context, 'ImageSize', this.item, this.context.ListSchema) + '</div>';
            $v_0 += '<div id=\"Tile_' + this.context.wpq + '_' + this.id + '_OverlayRow_2' + '\">' + spMgr.RenderFieldByName(this.context, 'FileSizeDisplay', this.item, this.context.ListSchema) + '</div>';
        }
        return $v_0;
    }
};
SP.UI.PromotedLinks.Constants.registerClass('SP.UI.PromotedLinks.Constants');
SP.UI.PromotedLinks.Constants.FieldNames.registerClass('SP.UI.PromotedLinks.Constants.FieldNames');
SP.UI.PromotedLinks.GlobalTemplateOverrides.registerClass('SP.UI.PromotedLinks.GlobalTemplateOverrides');
SP.UI.TileView.TileViewRenderer.registerClass('SP.UI.TileView.TileViewRenderer', null, Sys.IDisposable);
SP.UI.PromotedLinks.PromotedLinksTileViewRenderer.registerClass('SP.UI.PromotedLinks.PromotedLinksTileViewRenderer', SP.UI.TileView.TileViewRenderer);
SP.UI.TileView.TileRenderer.registerClass('SP.UI.TileView.TileRenderer');
SP.UI.PromotedLinks.PromotedLinksTileRenderer.registerClass('SP.UI.PromotedLinks.PromotedLinksTileRenderer', SP.UI.TileView.TileRenderer);
SP.UI.PromotedLinks.WebPartManager.registerClass('SP.UI.PromotedLinks.WebPartManager');
SP.UI.PromotedLinks.BackgroundImage.registerClass('SP.UI.PromotedLinks.BackgroundImage');
SP.UI.PromotedLinks.TilePagingControl.registerClass('SP.UI.PromotedLinks.TilePagingControl', SP.UI.PagingControl);
SP.UI.TileView.TileViewRenderer.Tile.registerClass('SP.UI.TileView.TileViewRenderer.Tile', null, Sys.IDisposable);
SP.UI.TileView.TabularTileViewRenderer.registerClass('SP.UI.TileView.TabularTileViewRenderer', SP.UI.TileView.TileViewRenderer);
SP.UI.TileView.TabularTileViewRenderer.TabularTile.registerClass('SP.UI.TileView.TabularTileViewRenderer.TabularTile', SP.UI.TileView.TileViewRenderer.Tile);
SP.UI.TileView.TabularTileRenderer.registerClass('SP.UI.TileView.TabularTileRenderer', SP.UI.TileView.TileRenderer);
SP.UI.TileView.Utilities.registerClass('SP.UI.TileView.Utilities');
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.registerClass('SP.UI.PictureLibrary.PictureLibraryTileViewRenderer', SP.UI.TileView.TabularTileViewRenderer);
SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer.registerClass('SP.UI.PictureLibrary.PictureLibraryTileViewRenderer.PictureLibraryTileRenderer', SP.UI.TileView.TabularTileRenderer);
function sp_ui_tileview_initialize() {
    SP.UI.PromotedLinks.Constants.FieldNames.backgroundImage = 'BackgroundImageLocation';
    SP.UI.PromotedLinks.Constants.FieldNames.description = 'Description';
    SP.UI.PromotedLinks.Constants.FieldNames.linkLocation = 'LinkLocation';
    SP.UI.PromotedLinks.Constants.FieldNames.launchBehavior = 'LaunchBehavior';
    SP.UI.PromotedLinks.Constants.FieldNames.clusterX = 'BackgroundImageClusterX';
    SP.UI.PromotedLinks.Constants.FieldNames.clusterY = 'BackgroundImageClusterY';
    SP.UI.PromotedLinks.Constants.FieldNames.id = 'ID';
    SP.UI.PromotedLinks.Constants.FieldNames.title = 'Title';
    SP.UI.PromotedLinks.Constants.FieldNames.fileNameNoExtension = 'FileLeafRef.Name';
    SP.UI.PromotedLinks.GlobalTemplateOverrides.$R = [[170, 109], [2, 1, 10], [6]];
    SP.UI.PromotedLinks.GlobalTemplateOverrides.$$cctor();
}
;
sp_ui_tileview_initialize();
RegisterModuleInit("SP.UI.TileView.js", sp_ui_tileview_initialize);
NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.TileView.js");
