Type.registerNamespace('SP.UI.Blogs');
SP.UI.Blogs.BlogRenderer = function SP_UI_Blogs_BlogRenderer($p0, $p1) {
    SP.UI.Blogs.BlogRenderer.initializeBase(this, [$p0, $p1]);
    this.$E_1 = [];
};
SP.UI.Blogs.BlogRenderer.prototype = {
    $E_1: null,
    renderViewBody: function SP_UI_Blogs_BlogRenderer$renderViewBody($p0) {
        if (this.baseViewID === 8) {
            var $v_0 = SP.ScriptHelpers.getDocumentQueryPairs();
            var $v_1 = $v_0['CategoryId'];
            var $v_2 = $p0.ListData['PrevHref'];
            var $v_3 = $p0.ListData['NextHref'];

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_2)) {
                $v_2 = SP.ScriptHelpers.replaceOrAddQueryString($v_2, 'CategoryId', $v_1);
                $p0.ListData['PrevHref'] = $v_2;
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_3)) {
                $v_3 = SP.ScriptHelpers.replaceOrAddQueryString($v_3, 'CategoryId', $v_1);
                $p0.ListData['NextHref'] = $v_3;
            }
        }
        else if (this.baseViewID === 9) {
            var $v_4 = SP.ScriptHelpers.getDocumentQueryPairs();
            var $v_5 = $v_4['StartDateTime'];
            var $v_6 = $v_4['EndDateTime'];
            var $v_7 = $v_4['LMY'];

            if (!SP.ScriptHelpers.isNullOrUndefined($v_5)) {
                $v_5 = unescapeProperly($v_5);
            }
            if (!SP.ScriptHelpers.isNullOrUndefined($v_6)) {
                $v_6 = unescapeProperly($v_6);
            }
            if (!SP.ScriptHelpers.isNullOrUndefined($v_7)) {
                $v_7 = unescapeProperly($v_7);
            }
            var $v_8 = $p0.ListData['PrevHref'];
            var $v_9 = $p0.ListData['NextHref'];

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_8)) {
                $v_8 = SP.ScriptHelpers.replaceOrAddQueryString($v_8, 'StartDateTime', $v_5);
                $v_8 = SP.ScriptHelpers.replaceOrAddQueryString($v_8, 'EndDateTime', $v_6);
                $p0.ListData['PrevHref'] = SP.ScriptHelpers.replaceOrAddQueryString($v_8, 'LMY', $v_7);
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_9)) {
                $v_9 = SP.ScriptHelpers.replaceOrAddQueryString($v_9, 'StartDateTime', $v_5);
                $v_9 = SP.ScriptHelpers.replaceOrAddQueryString($v_9, 'EndDateTime', $v_6);
                $p0.ListData['NextHref'] = $v_9;
            }
        }
        return SP.UI.Blogs.ListRenderer.prototype.renderViewBody.call(this, $p0);
    },
    renderItem: function SP_UI_Blogs_BlogRenderer$renderItem($p0) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = new SP.UI.Blogs.PostBehavior($p0, $p0.CurrentItem);

        Array.add(this.$E_1, $v_1);
        $v_1.render($v_0);
        return $v_0.toString();
    },
    get_noItemsMessage: function SP_UI_Blogs_BlogRenderer$get_noItemsMessage() {
        var $v_0 = '';

        switch (this.baseViewID) {
        case 9:
            $v_0 = Strings.STS.L_SPBlogsNoItemsInMonth;
            break;
        case 8:
            $v_0 = Strings.STS.L_SPBlogsNoItemsInCategory;
            break;
        case 0:
            $v_0 = Strings.STS.L_SPBlogsNoItems;
            break;
        }
        return $v_0;
    },
    onPostRender: function SP_UI_Blogs_BlogRenderer$onPostRender($p0) {
        for (var $v_0 = 0, $v_1 = this.$E_1.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$E_1[$v_0];

            $v_2.onPostRender();
        }
    }
};
SP.UI.Blogs.CommentBoxControl = function SP_UI_Blogs_CommentBoxControl($p0, $p1) {
    this.$$d_$v_0 = Function.createDelegate(this, this.$v_0);
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$10_0 = Function.createDelegate(this, this.$10_0);
    this.$$d_$y_0 = Function.createDelegate(this, this.$y_0);
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0);
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$$d_$u_0 = Function.createDelegate(this, this.$u_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$0_0 = $p1;
    this.$a_0 = $p0;
    this.$F_0 = true;
    this.$i_0 = this.$$d_$w_0;
    this.$j_0 = this.$$d_$x_0;
    this.$h_0 = this.$$d_$u_0;
    this.$g_0 = this.$$d_$t_0;
};
SP.UI.Blogs.CommentBoxControl.prototype = {
    $0_0: null,
    $a_0: null,
    $F_0: false,
    $B_0: false,
    $9_0: false,
    $K_0: false,
    $S_0: null,
    $R_0: null,
    $I_0: null,
    $i_0: null,
    $j_0: null,
    $h_0: null,
    $g_0: null,
    get_allowCollapse: function SP_UI_Blogs_CommentBoxControl$get_allowCollapse() {
        return this.$F_0;
    },
    get_isVisible: function SP_UI_Blogs_CommentBoxControl$get_isVisible() {
        return this.$B_0;
    },
    get_$o_0: function SP_UI_Blogs_CommentBoxControl$get_$o_0() {
        if (!this.$I_0) {
            this.$I_0 = $get(this.$7_0('CommentContainer'));
        }
        return this.$I_0;
    },
    get_$f_0: function SP_UI_Blogs_CommentBoxControl$get_$f_0() {
        if (!this.$R_0) {
            this.$R_0 = $get(this.$7_0('CommentSubmit'));
        }
        return this.$R_0;
    },
    get_$2_0: function SP_UI_Blogs_CommentBoxControl$get_$2_0() {
        if (!this.$S_0) {
            this.$S_0 = $get(this.$7_0('CommentTextBox'));
        }
        return this.$S_0;
    },
    show: function SP_UI_Blogs_CommentBoxControl$show($p0) {
        if (!this.$B_0) {
            (this.get_$o_0()).innerHTML = this.$11_0();
            this.$n_0();
            this.$9_0 = false;
            this.$B_0 = true;
            this.$k_0();
            this.$T_0(false);
        }
    },
    $n_0: function SP_UI_Blogs_CommentBoxControl$$n_0() {
        $addHandler(this.get_$2_0(), 'keyup', this.$i_0);
        $addHandler(this.get_$2_0(), 'focus', this.$j_0);
        $addHandler(this.get_$2_0(), 'blur', this.$h_0);
        $addHandler(this.get_$f_0(), 'click', this.$g_0);
    },
    $7_0: function SP_UI_Blogs_CommentBoxControl$$7_0($p0) {
        var $v_0;

        $v_0 = this.$a_0 + '-' + $p0;
        return $v_0;
    },
    $t_0: function SP_UI_Blogs_CommentBoxControl$$t_0($p0) {
        $p0.preventDefault();
        EnsureScriptFunc('SP.js', 'SP.ClientContext', this.$$d_$s_0);
    },
    $s_0: function SP_UI_Blogs_CommentBoxControl$$s_0() {
        EnsureScriptFunc('SP.Core.js', 'SP.Guid', this.$$d_$y_0);
    },
    $y_0: function SP_UI_Blogs_CommentBoxControl$$y_0() {
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = GetUrlKeyValue('ID', false, null);
        var $v_2 = (($v_0.get_web()).get_lists()).getById(new SP.Guid(this.$0_0.listName));
        var $v_3 = new SP.ListItemCreationInformation();
        var $v_4 = $v_2.addItem($v_3);
        var $v_5 = SP.ScriptHelpers.getTextAreaElementValue(this.get_$2_0());

        $v_4.set_item('Title', SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis(STSHtmlEncode($v_5), 30));
        $v_4.set_item('Body', $v_5);
        $v_4.set_item('PostTitle', $v_1);
        $v_4.update();
        $v_0.executeQueryAsync(this.$$d_$10_0, this.$$d_$z_0);
    },
    $w_0: function SP_UI_Blogs_CommentBoxControl$$w_0($p0) {
        this.$k_0();
    },
    $x_0: function SP_UI_Blogs_CommentBoxControl$$x_0($p0) {
        this.$K_0 = true;
        this.$9_0 = true;
        this.$T_0(true);
    },
    $u_0: function SP_UI_Blogs_CommentBoxControl$$u_0($p0) {
        this.$K_0 = false;
        window.setTimeout(this.$$d_$v_0, 100);
    },
    $v_0: function SP_UI_Blogs_CommentBoxControl$$v_0() {
        if (this.$B_0 && !this.$K_0) {
            if (this.$F_0 && !(SP.ScriptHelpers.getTextAreaElementValue(this.get_$2_0())).length) {
                this.$9_0 = false;
            }
            this.$T_0(true);
        }
    },
    $10_0: function SP_UI_Blogs_CommentBoxControl$$10_0($p0, $p1) {
        var $v_0 = window.self.ajaxNavigate;

        SubmitFormPost($v_0.get_href());
    },
    $z_0: function SP_UI_Blogs_CommentBoxControl$$z_0($p0, $p1) {
        alert($p1.get_message());
    },
    renderContainer: function SP_UI_Blogs_CommentBoxControl$renderContainer() {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.addCssClass('ms-blog-postList');
        $v_0.addAttribute('id', this.$7_0('CommentContainer'));
        $v_0.renderBeginTag('div');
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $11_0: function SP_UI_Blogs_CommentBoxControl$$11_0() {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.renderBeginTag('div');
        SP.UI.Blogs.PostBehavior.$8 = this.$7_0('CommentTextBox');
        $v_0.addAttribute('id', SP.UI.Blogs.PostBehavior.$8);
        $v_0.addCommunitiesCssClass('ms-comm-postReplyTextBox');
        $v_0.addCssClass('ms-fullWidth');
        $v_0.renderBeginTag('textarea');
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(SP.UI.Blogs.PostBehavior.$4)) {
            var $v_1 = $get(SP.UI.Blogs.PostBehavior.$4);

            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $v_1.setAttribute('onclick', '$get(\'' + SP.UI.Blogs.PostBehavior.$8 + '\').focus();');
            }
        }
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(SP.UI.Blogs.PostBehavior.$6)) {
            var $v_2 = $get(SP.UI.Blogs.PostBehavior.$6);

            if (!SP.ScriptHelpers.isNullOrUndefined($v_2)) {
                $v_2.style.display = '';
            }
        }
        $v_0.renderBeginTag('div');
        $v_0.addCssClass('ms-floatRight');
        $v_0.renderBeginTag('div');
        $v_0.addCssClass('ms-button-emphasize');
        $v_0.addAttribute('id', this.$7_0('CommentSubmit'));
        $v_0.addCssClass('ms-floatRight');
        $v_0.renderBeginTag('button');
        $v_0.writeEncoded(Strings.STS.L_SPCommentsAddButton);
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $k_0: function SP_UI_Blogs_CommentBoxControl$$k_0() {
        if (this.$B_0) {
            (this.get_$f_0()).disabled = !((SP.ScriptHelpers.getTextAreaElementValue(this.get_$2_0())).length > 0) || !this.$9_0;
        }
    },
    $T_0: function SP_UI_Blogs_CommentBoxControl$$T_0($p0) {
        var $v_0 = 'ms-comm-postReplyTextBox ms-fullWidth';
        var $v_1 = SP.ScriptHelpers.getTextAreaElementValue(this.get_$2_0());
        var $v_2;

        if (this.$9_0) {
            $v_2 = 74;
            if ($v_1 === Strings.STS.L_SPCommentsAdd) {
                SP.ScriptHelpers.setTextAreaElementValue(this.get_$2_0(), '');
            }
        }
        else {
            $v_0 += ' ms-helperText';
            $v_2 = 30;
            if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
                SP.ScriptHelpers.setTextAreaElementValue(this.get_$2_0(), Strings.STS.L_SPCommentsAdd);
            }
        }
        (this.get_$2_0()).setAttribute('class', $v_0);
        if ($p0) {
            var $v_3 = (this.get_$2_0()).style.minHeight;
            var $v_4 = (this.get_$2_0()).offsetWidth;

            if ($v_3 !== $v_2 + 'px') {
                (this.get_$2_0()).style.height = $v_3;
                (this.get_$2_0()).style.width = $v_4 + 'px';
                (this.get_$2_0()).style.minHeight = '';
                var $$t_6 = this;

                SPAnimationUtility.BasicAnimator.QuickResize(this.get_$2_0(), $v_2, $v_4, function() {
                    ($$t_6.get_$2_0()).style.minHeight = $v_2 + 'px';
                }, null);
            }
        }
        else {
            (this.get_$2_0()).style.height = $v_2 + 'px';
            (this.get_$2_0()).style.minHeight = $v_2 + 'px';
        }
    }
};
SP.UI.Blogs.CommentsRenderer = function SP_UI_Blogs_CommentsRenderer($p0, $p1) {
    SP.UI.Blogs.CommentsRenderer.initializeBase(this, [$p0, $p1]);
};
SP.UI.Blogs.CommentsRenderer.$1A = function SP_UI_Blogs_CommentsRenderer$$1A($p0, $p1) {
    $p1.addCssClass('ms-metadata');
    $p1.addCssClass('ms-textSmall');
    $p1.renderBeginTag('div');
    $p1.addCssClass('ms-blog-command-noLeftPadding');
    $p1.renderBeginTag('span');
    $p1.write(spMgr.RenderFieldByName($p0, 'Created.LongDate', $p0.CurrentItem, $p0.ListSchema));
    $p1.renderEndTag();
    var $v_0 = SP.ScriptHelpers.getListLevelPermissionMask($p0.CurrentItem);
    var $v_1 = Number.parseInvariant(SP.ScriptHelpers.getUserFieldProperty($p0.CurrentItem, 'Author', 'id'));

    if ($p0.CurrentUserId === $v_1 && SP.ScriptHelpers.hasPermission($v_0, 4) || SP.ScriptHelpers.hasPermission($v_0, 2048)) {
        $p1.addCssClass('ms-secondaryCommandLink');
        $p1.addCssClass('ms-blog-command');
        var $v_2 = window.self.ajaxNavigate;

        $p1.addAttribute('href', SP.ScriptHelpers.replaceOrAddQueryString(SP.ScriptHelpers.replaceOrAddQueryString($p0.editFormUrl, 'ID', $p0.CurrentItem['ID']), 'Source', $v_2.get_href()));
        $p1.renderBeginTag('a');
        $p1.write(Strings.STS.L_SPBlogsEditCommand);
        $p1.renderEndTag();
    }
    $p1.renderEndTag();
};
SP.UI.Blogs.CommentsRenderer.prototype = {
    $D_1: null,
    onPostRender: function SP_UI_Blogs_CommentsRenderer$onPostRender($p0) {
        SP.UI.Blogs.ListRenderer.prototype.onPostRender.call(this, $p0);
        if (null !== this.$D_1) {
            this.$D_1.show(false);
        }
    },
    renderViewBody: function SP_UI_Blogs_CommentsRenderer$renderViewBody($p0) {
        var $v_0 = (SP.ScriptHelpers.getDocumentQueryPairs())['ID'];

        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
            var $v_1 = $p0.ListData['PrevHref'];
            var $v_2 = $p0.ListData['NextHref'];

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
                $p0.ListData['PrevHref'] = SP.ScriptHelpers.replaceOrAddQueryString($v_1, 'ID', $v_0);
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_2)) {
                $p0.ListData['NextHref'] = SP.ScriptHelpers.replaceOrAddQueryString($v_2, 'ID', $v_0);
            }
        }
        return SP.UI.Blogs.ListRenderer.prototype.renderViewBody.call(this, $p0);
    },
    get_noItemsMessage: function SP_UI_Blogs_CommentsRenderer$get_noItemsMessage() {
        return Strings.STS.L_SPClientNoComments;
    },
    renderItem: function SP_UI_Blogs_CommentsRenderer$renderItem($p0) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = $p0.CurrentItem;

        $v_0.addCssClass('ms-blog-postComment');
        $v_0.renderBeginTag('li');
        $v_0.addCssClass('ms-table');
        $v_0.addCssClass('ms-core-tableNoSpace');
        $v_0.renderBeginTag('div');
        $v_0.addCssClass('ms-tableRow');
        $v_0.renderBeginTag('div');
        $v_0.addCssClass('ms-tableCell');
        $v_0.renderBeginTag('div');
        this.$12_1($p0, $v_0);
        $v_0.renderEndTag();
        $v_0.addCssClass('ms-tableCell');
        $v_0.renderBeginTag('div');
        this.$15_1($v_0, $p0);
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    renderViewFooter: function SP_UI_Blogs_CommentsRenderer$renderViewFooter($p0) {
        var $v_0 = '';

        if ($p0.ListSchema.ListRight_AddListItems === '1') {
            this.$D_1 = new SP.UI.Blogs.CommentBoxControl(this.rootElementID, $p0);
            $v_0 += this.$D_1.renderContainer();
        }
        $v_0 += SP.UI.Blogs.ListRenderer.prototype.renderViewFooter.call(this, $p0);
        return $v_0;
    },
    $12_1: function SP_UI_Blogs_CommentsRenderer$$12_1($p0, $p1) {
        var $v_0 = SP.ScriptHelpers.getFieldFromSchema($p0.ListSchema, 'Author');

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.WithPictureDetail;
            var $v_2 = $v_0.PictureOnly;

            $v_0.DefaultRender = 0;
            $v_0.WithPictureDetail = 0;
            $v_0.PictureOnly = 1;
            $v_0.PictureSize = 'Size_48px';
            $p1.write(spMgr.RenderFieldByName($p0, 'Author', $p0.CurrentItem, $p0.ListSchema));
            $v_0.WithPictureDetail = $v_1;
            $v_0.PictureOnly = $v_2;
        }
    },
    $15_1: function SP_UI_Blogs_CommentsRenderer$$15_1($p0, $p1) {
        var $v_0 = $p1.CurrentItem;

        $p0.addCssClass('ms-blog-postHeader');
        $p0.renderBeginTag('div');
        $p0.addCssClass('ms-textSmall');
        $p0.renderBeginTag('div');
        $p0.renderBeginTag('b');
        var $v_1 = SP.ScriptHelpers.getFieldFromSchema($p1.ListSchema, 'Author');

        if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
            $v_1.DefaultRender = 1;
            $v_1.PictureOnly = 0;
            $v_1.WithPicture = 0;
            $v_1.WithPictureDetail = 0;
            $p0.write(spMgr.RenderFieldByName($p1, 'Author', $p1.CurrentItem, $p1.ListSchema));
        }
        $p0.renderEndTag();
        $p0.write(' ');
        $p0.write($v_0['Body']);
        $p0.renderEndTag();
        SP.UI.Blogs.CommentsRenderer.$1A($p1, $p0);
        $p0.renderEndTag();
    }
};
SP.UI.Blogs.Constants = function SP_UI_Blogs_Constants() {
};
SP.UI.Blogs.Constants.BlogListTypes = function() {
};
SP.UI.Blogs.Constants.BlogListTypes.prototype = {
    posts: 301,
    comments: 302,
    categories: 303,
    links: 103
};
SP.UI.Blogs.Constants.BlogListTypes.registerEnum('SP.UI.Blogs.Constants.BlogListTypes', false);
SP.UI.Blogs.Constants.BlogViewIDs = function() {
};
SP.UI.Blogs.Constants.BlogViewIDs.prototype = {
    postDefaultView: 0,
    postCommentsView: 7,
    postCategoryView: 8,
    postArchiveView: 9,
    categoryDefaultView: 0,
    commentDefaultView: 0,
    linksView: 4
};
SP.UI.Blogs.Constants.BlogViewIDs.registerEnum('SP.UI.Blogs.Constants.BlogViewIDs', false);
SP.UI.Blogs.GlobalTemplateOverrides = function SP_UI_Blogs_GlobalTemplateOverrides() {
};
SP.UI.Blogs.GlobalTemplateOverrides.$$cctor = function SP_UI_Blogs_GlobalTemplateOverrides$$$cctor() {
    var $v_0 = 0;

    for (var $$arr_1 = SP.UI.Blogs.GlobalTemplateOverrides.$G[0], $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_1 = $$arr_1[$$idx_3];

        $v_0++;
        for (var $$arr_5 = SP.UI.Blogs.GlobalTemplateOverrides.$G[$v_0], $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_2 = $$arr_5[$$idx_7];
            var $v_3 = null;

            switch ($v_1) {
            case 301:
                $v_3 = new SP.UI.Blogs.BlogRenderer($v_1, $v_2);
                break;
            case 302:
                $v_3 = new SP.UI.Blogs.CommentsRenderer($v_1, $v_2);
                break;
            case 303:
            case 103:
                $v_3 = new SP.UI.Blogs.MenuListRenderer($v_1, $v_2);
                break;
            }
            SPClientTemplates.TemplateManager.RegisterTemplateOverrides($v_3.createRenderingContextOverrides());
        }
    }
};
SP.UI.Blogs.ListRenderer = function SP_UI_Blogs_ListRenderer($p0, $p1) {
    this.$$d_onPostRender = Function.createDelegate(this, this.onPostRender);
    this.$$d_onPreRender = Function.createDelegate(this, this.onPreRender);
    this.$$d_renderItem = Function.createDelegate(this, this.renderItem);
    this.$$d_$1B_0 = Function.createDelegate(this, this.$1B_0);
    this.$$d_renderViewFooter = Function.createDelegate(this, this.renderViewFooter);
    this.$$d_renderViewBody = Function.createDelegate(this, this.renderViewBody);
    this.$$d_renderViewHeader = Function.createDelegate(this, this.renderViewHeader);
    this.listTemplateType = $p0;
    this.baseViewID = $p1;
};
SP.UI.Blogs.ListRenderer.prototype = {
    baseViewID: 0,
    listTemplateType: 0,
    rootElementID: null,
    createRenderingContextOverrides: function SP_UI_Blogs_ListRenderer$createRenderingContextOverrides() {
        var $v_0 = new ListContext();

        $v_0.BaseViewID = this.baseViewID;
        $v_0.ListTemplateType = this.listTemplateType;
        $v_0.Templates['Header'] = this.$$d_renderViewHeader;
        $v_0.Templates['Body'] = this.$$d_renderViewBody;
        $v_0.Templates['Footer'] = this.$$d_renderViewFooter;
        $v_0.Templates['View'] = this.$$d_$1B_0;
        var $v_1 = {};

        $v_1['SPListItem2'] = this.$$d_renderItem;
        $v_0.Templates['Item'] = $v_1;
        $v_0.OnPreRender = this.$$d_onPreRender;
        $v_0.OnPostRender = this.$$d_onPostRender;
        return $v_0;
    },
    renderViewHeader: function SP_UI_Blogs_ListRenderer$renderViewHeader($p0) {
        return '';
    },
    renderViewBody: function SP_UI_Blogs_ListRenderer$renderViewBody($p0) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = $p0.ListData['Row'];
        var $v_2 = $v_1.length;

        if (0 === $v_2) {
            $v_0.addCssClass('ms-metadata');
            $v_0.renderBeginTag('div');
            $v_0.writeEncoded(this.get_noItemsMessage());
            $v_0.renderEndTag();
        }
        else {
            $v_0.addCssClass('ms-blog-postList');
            $v_0.renderBeginTag('ul');
            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                $p0.CurrentItem = $v_1[$v_3];
                $v_0.write(this.renderItem($p0));
                $p0.CurrentItem = null;
            }
            $v_0.renderEndTag();
        }
        return $v_0.toString();
    },
    renderViewFooter: function SP_UI_Blogs_ListRenderer$renderViewFooter($p0) {
        var $v_0 = new Array(0);
        var $v_1 = window.self.ajaxNavigate;
        var $v_2 = $v_1.get_href();

        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_2)) {
            var $v_3 = $v_2.indexOf('?');

            if ($v_3 !== -1) {
                $v_2 = $v_2.substring(0, $v_3);
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($p0.ListData['NextHref'])) {
                $p0.ListData['NextHref'] = $v_2 + $p0.ListData['NextHref'];
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($p0.ListData['PrevHref'])) {
                $p0.ListData['PrevHref'] = $v_2 + $p0.ListData['PrevHref'];
            }
        }
        RenderPaging($v_0, $p0);
        return $v_0.join('');
    },
    $1B_0: function SP_UI_Blogs_ListRenderer$$1B_0($p0) {
        var $v_0 = new SP.HtmlBuilder();

        this.rootElementID = $p0.listName + '-' + $p0.view;
        $v_0.addAttribute('id', this.rootElementID);
        $v_0.renderBeginTag('div');
        this.renderView($v_0, $p0);
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    renderView: function SP_UI_Blogs_ListRenderer$renderView($p0, $p1) {
        $p0.write($p1.RenderHeader($p1));
        $p0.write($p1.RenderBody($p1));
        $p0.write($p1.RenderFooter($p1));
    },
    onPreRender: function SP_UI_Blogs_ListRenderer$onPreRender($p0) {
    },
    onPostRender: function SP_UI_Blogs_ListRenderer$onPostRender($p0) {
    },
    get_noItemsMessage: function SP_UI_Blogs_ListRenderer$get_noItemsMessage() {
        return '';
    }
};
SP.UI.Blogs.MenuListRenderer = function SP_UI_Blogs_MenuListRenderer($p0, $p1) {
    SP.UI.Blogs.MenuListRenderer.initializeBase(this, [$p0, $p1]);
};
SP.UI.Blogs.MenuListRenderer.prototype = {
    renderViewHeader: function SP_UI_Blogs_MenuListRenderer$renderViewHeader($p0) {
        return '';
    },
    renderViewBody: function SP_UI_Blogs_MenuListRenderer$renderViewBody($p0) {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.renderBeginTag('li');
        $v_0.addCssClass('ms-core-listMenu-item');
        $v_0.addCssClass('ms-blog-quickLinksTitle');
        $v_0.renderBeginTag('span');
        $v_0.writeEncoded($p0.ListTitle);
        $v_0.renderEndTag();
        var $v_1 = $p0.ListData['Row'];
        var $v_2 = $v_1.length;

        if (0 < $v_2) {
            $v_0.addCssClass('static');
            $v_0.renderBeginTag('ul');
            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                $p0.CurrentItem = $v_1[$v_3];
                $v_0.write(this.renderItem($p0));
                $p0.CurrentItem = null;
            }
            $v_0.renderEndTag();
        }
        if ($p0.ListSchema.ListRight_AddListItems === '1') {
            $v_0.addCssClass('static');
            $v_0.renderBeginTag('ul');
            $v_0.addCssClass('static');
            $v_0.renderBeginTag('li');
            var $v_4 = window.self.ajaxNavigate;

            $v_0.addAttribute('href', SP.ScriptHelpers.replaceOrAddQueryString($p0.newFormUrl, 'Source', $v_4.get_href()));
            $v_0.addCssClass('ms-core-listMenu-item');
            $v_0.addCssClass('ms-commandLink');
            $v_0.addCssClass('ms-uppercase');
            $v_0.addCssClass('ms-blog-quickLinksEntry');
            $v_0.renderBeginTag('a');
            switch (this.listTemplateType) {
            case 103:
                $v_0.writeEncoded(Strings.STS.L_AddLink);
                break;
            case 303:
                $v_0.writeEncoded(Strings.STS.L_AddCategory);
                break;
            }
            $v_0.renderEndTag();
            $v_0.renderEndTag();
            $v_0.renderEndTag();
        }
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    renderViewFooter: function SP_UI_Blogs_MenuListRenderer$renderViewFooter($p0) {
        return '';
    },
    $q_1: function SP_UI_Blogs_MenuListRenderer$$q_1($p0) {
        var $v_0 = new Array(3);
        var $v_1 = $p0.CurrentItem;
        var $v_2 = $v_1['ID'];

        switch (this.listTemplateType) {
        case 103:
            $v_0[0] = STSHtmlEncode($v_1['URL']);
            var $v_3 = STSHtmlEncode($v_1['URL.desc']);

            if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_3)) {
                $v_3 = $v_0[0];
            }
            $v_0[1] = $v_3;
            $v_0[2] = 'blglink' + $v_2;
            break;
        case 303:
            var $v_4 = $v_1['Title'];

            $v_0[0] = SP.UI.Blogs.PostBehavior.$H(SP.UI.Blogs.PostBehavior.$X(), $v_1, 303);
            $v_0[1] = STSHtmlEncode($v_4);
            $v_0[2] = 'blgcat' + $v_2;
            break;
        }
        return $v_0;
    },
    renderItem: function SP_UI_Blogs_MenuListRenderer$renderItem($p0) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = this.$q_1($p0);

        $v_0.addCssClass('static');
        $v_0.renderBeginTag('li');
        $v_0.addAttribute('href', $v_1[0]);
        $v_0.addAttribute('id', $v_1[2]);
        $v_0.addCssClass('ms-core-listMenu-item');
        $v_0.addCssClass('ms-blog-quickLinksEntry');
        $v_0.renderBeginTag('a');
        $v_0.write($v_1[1]);
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    renderView: function SP_UI_Blogs_MenuListRenderer$renderView($p0, $p1) {
        $p0.addCssClass('ms-core-listMenu-verticalBox ms-noList');
        $p0.renderBeginTag('div');
        $p0.addCssClass('static');
        $p0.addCssClass('ms-blog-listMenu-root');
        $p0.addCssClass('ms-core-listMenu-root');
        $p0.addCssClass('root');
        $p0.renderBeginTag('ul');
        $p0.write($p1.RenderHeader($p1));
        $p0.write($p1.RenderBody($p1));
        $p0.write($p1.RenderFooter($p1));
        $p0.renderEndTag();
        $p0.renderEndTag();
    }
};
SP.UI.Blogs.PostBehavior = function SP_UI_Blogs_PostBehavior($p0, $p1) {
    this.$0_0 = $p0;
    this.$1_0 = $p1;
    this.$C_0 = '';
    this.$M_0 = 'h2';
    this.$3_0 = new SP.UI.CommandBar();
};
SP.UI.Blogs.PostBehavior.$Y = function SP_UI_Blogs_PostBehavior$$Y() {
    var $v_0 = '';

    if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0) && !SP.ScriptHelpers.isNullOrUndefined(window.self.GlobalState) && !SP.ScriptHelpers.isNullOrUndefined(GlobalState.SPUIBlogs_blogsSkinId)) {
        $v_0 = GlobalState.SPUIBlogs_blogsSkinId;
    }
    return $v_0;
};
SP.UI.Blogs.PostBehavior.$p = function SP_UI_Blogs_PostBehavior$$p() {
    var $v_0 = '';

    if (!SP.ScriptHelpers.isNullOrUndefined(window.self.GlobalState) && !SP.ScriptHelpers.isNullOrUndefined(GlobalState.SPUIBlogs_blogsPostUrl)) {
        $v_0 = GlobalState.SPUIBlogs_blogsPostUrl;
    }
    return $v_0;
};
SP.UI.Blogs.PostBehavior.$X = function SP_UI_Blogs_PostBehavior$$X() {
    var $v_0 = '';

    if (!SP.ScriptHelpers.isNullOrUndefined(window.self.GlobalState) && !SP.ScriptHelpers.isNullOrUndefined(GlobalState.SPUIBlogs_blogsCategoryUrl)) {
        $v_0 = GlobalState.SPUIBlogs_blogsCategoryUrl;
    }
    return $v_0;
};
SP.UI.Blogs.PostBehavior.$H = function SP_UI_Blogs_PostBehavior$$H($p0, $p1, $p2) {
    if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($p0)) {
        return '';
    }
    var $v_0 = new RegExp('\\{[^\\{]*\\}', 'g');
    var $v_1 = $p0.match($v_0);

    switch ($p2) {
    case 301:
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2].substring(1, $v_1[$v_2].length - 1);

            switch ($v_3) {
            case 'CategoryId':
                $v_3 = 'lookupId';
                $p0 = $p0.replace($v_1[$v_2], $p1[$v_3].toString());
                break;
            case 'Name':
                $v_3 = 'lookupValue';
                var $v_4 = $p1[$v_3];

                $v_4 = ($v_4.replace(new RegExp('&nbsp;', 'g'), ' ')).replace(new RegExp('&#160;', 'g'), ' ');
                var $v_5 = new RegExp('[\"#%&*:<>?\\\\/{|}~. ]', 'g');
                var $v_6 = $v_4.replace($v_5, '-');

                $p0 = $p0.replace($v_1[$v_2], $v_6);
                break;
            case 'Title':
                var $v_7 = $p1[$v_3];

                $v_7 = ($v_7.replace(new RegExp('&nbsp;', 'g'), ' ')).replace(new RegExp('&#160;', 'g'), ' ');
                var $v_8 = new RegExp('[\"#%&*:<>?\\\\/{|}~. ]', 'g');
                var $v_9 = $v_7.replace($v_8, '-');

                $p0 = $p0.replace($v_1[$v_2], $v_9);
                break;
            case 'ID':
                $p0 = $p0.replace($v_1[$v_2], escapeProperlyCore($p1[$v_3], true));
                break;
            }
        }
        break;
    case 303:
        for (var $v_A = 0; $v_A < $v_1.length; $v_A++) {
            var $v_B = $v_1[$v_A].substring(1, $v_1[$v_A].length - 1);

            switch ($v_B) {
            case 'CategoryId':
                $v_B = 'ID';
                $p0 = $p0.replace($v_1[$v_A], $p1[$v_B].toString());
                break;
            }
        }
        break;
    }
    return $p0;
};
SP.UI.Blogs.PostBehavior.prototype = {
    $1_0: null,
    $0_0: null,
    $3_0: null,
    $A_0: null,
    $C_0: null,
    $M_0: null,
    $e_0: null,
    get_context: function SP_UI_Blogs_PostBehavior$get_context() {
        return this.$0_0;
    },
    get_itemID: function SP_UI_Blogs_PostBehavior$get_itemID() {
        return this.$1_0['ID'];
    },
    get_jsonItem: function SP_UI_Blogs_PostBehavior$get_jsonItem() {
        return this.$1_0;
    },
    get_$L_0: function SP_UI_Blogs_PostBehavior$get_$L_0() {
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$A_0)) {
            this.$A_0 = SP.UI.Blogs.PostBehavior.$H(SP.UI.Blogs.PostBehavior.$p(), this.$1_0, 301);
        }
        return this.$A_0;
    },
    render: function SP_UI_Blogs_PostBehavior$render($p0) {
        this.$0_0.ListSchema.UserVanilla = true;
        this.$e_0 = SP.UI.Blogs.PostBehavior.$Y();
        switch (this.$e_0) {
        case '1':
            this.$14_0($p0);
            break;
        case '2':
            this.$19_0($p0);
            break;
        default:
            this.$C_0 = 'ms-accentText';
            this.$M_0 = 'h1';
            this.$13_0($p0);
            break;
        }
    },
    onPostRender: function SP_UI_Blogs_PostBehavior$onPostRender() {
        this.$3_0.attachEvents();
    },
    $14_0: function SP_UI_Blogs_PostBehavior$$14_0($p0) {
        this.$0_0.CurrentItem = this.$1_0;
        $p0.renderBeginTag('li');
        $p0.addCssClass('ms-blog-postBox');
        $p0.addCssClass('ms-shadow');
        $p0.renderBeginTag('div');
        $p0.addCssClass('ms-blog-postBoxDate');
        $p0.renderBeginTag('div');
        $p0.write(this.$17_0());
        $p0.renderEndTag();
        $p0.addCssClass('ms-blog-postBoxMargin');
        $p0.renderBeginTag('div');
        this.$Q_0($p0);
        if (this.$0_0.BaseViewID !== 8 && this.$0_0.BaseViewID !== 9) {
            this.$5_0($p0, 11);
            this.$N_0($p0);
            this.$O_0($p0, false);
        }
        else {
            this.$5_0($p0, 27);
        }
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.write(this.$P_0());
        $p0.renderEndTag();
    },
    $13_0: function SP_UI_Blogs_PostBehavior$$13_0($p0) {
        this.$0_0.CurrentItem = this.$1_0;
        $p0.renderBeginTag('li');
        $p0.renderBeginTag('div');
        this.$Q_0($p0);
        this.$16_0($p0);
        if (this.$0_0.BaseViewID !== 8 && this.$0_0.BaseViewID !== 9) {
            this.$N_0($p0);
            this.$5_0($p0, 11);
            this.$O_0($p0, true);
        }
        else {
            this.$5_0($p0, 27);
        }
        $p0.renderEndTag();
        $p0.write(this.$P_0());
        $p0.renderEndTag();
    },
    $19_0: function SP_UI_Blogs_PostBehavior$$19_0($p0) {
        this.$0_0.CurrentItem = this.$1_0;
        $p0.renderBeginTag('li');
        $p0.renderBeginTag('div');
        $p0.addCssClass('ms-blog-postInlineDate');
        $p0.addCssClass(this.$C_0);
        $p0.renderBeginTag('div');
        $p0.write(this.$18_0());
        $p0.renderEndTag();
        $p0.renderBeginTag('div');
        $p0.addCssClass('ms-blog-postInlineMargin');
        $p0.renderBeginTag('div');
        this.$Q_0($p0);
        if (this.$0_0.BaseViewID !== 8 && this.$0_0.BaseViewID !== 9) {
            this.$5_0($p0, 3);
            $p0.renderEndTag();
            this.$N_0($p0);
            this.$5_0($p0, 12);
            this.$O_0($p0, true);
        }
        else {
            this.$5_0($p0, 27);
            $p0.renderEndTag();
        }
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.write(this.$P_0());
        $p0.renderEndTag();
    },
    $P_0: function SP_UI_Blogs_PostBehavior$$P_0() {
        var $v_0 = new SP.HtmlBuilder();

        if (this.$0_0.BaseViewID === 7) {
            if (SP.UI.Blogs.PostBehavior.$Y() !== '1') {
                $v_0.addCssClass('ms-blog-postDividerHr');
                $v_0.renderBeginTag('hr');
                $v_0.renderEndTag();
            }
        }
        $v_0.addCssClass('ms-blog-postDivider');
        $v_0.renderBeginTag('div');
        var $v_1 = this.$0_0.CurrentItem['NumComments'];

        if (this.$0_0.BaseViewID === 7 && !SP.ScriptHelpers.isNullOrUndefined($v_1)) {
            $v_0.addAttribute('name', 'comments');
            $v_0.renderBeginTag('a');
            $v_0.renderEndTag();
            $v_0.addCssClass('ms-blog-postComments');
            $v_0.renderBeginTag('h3');
            if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
                $v_1 = '0';
            }
            var $v_2 = SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPClientNumCommentsTemplate, Strings.STS.L_SPClientNumCommentsTemplateIntervals, Number.parseLocale($v_1));

            $v_0.write(String.format($v_2, $v_1));
            $v_0.renderEndTag();
        }
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $N_0: function SP_UI_Blogs_PostBehavior$$N_0($p0) {
        $p0.renderBeginTag('p');
        $p0.addCssClass('ms-blog-postBody');
        $p0.renderBeginTag('div');
        $p0.write(spMgr.RenderFieldByName(this.$0_0, 'Body', this.$1_0, this.$0_0.ListSchema));
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    $Q_0: function SP_UI_Blogs_PostBehavior$$Q_0($p0) {
        $p0.renderBeginTag(this.$M_0);
        $p0.addCssClass(this.$C_0);
        $p0.addAttribute('href', this.get_$L_0());
        $p0.renderBeginTag('a');
        $p0.write(spMgr.RenderFieldByName(this.$0_0, 'Title', this.$1_0, this.$0_0.ListSchema));
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    $16_0: function SP_UI_Blogs_PostBehavior$$16_0($p0) {
        $p0.addCssClass('ms-metadata');
        $p0.renderBeginTag('div');
        $p0.write(spMgr.RenderFieldByName(this.$0_0, 'PublishedDate.LongDate', this.$1_0, this.$0_0.ListSchema));
        $p0.renderEndTag();
    },
    $5_0: function SP_UI_Blogs_PostBehavior$$5_0($p0, $p1) {
        $p0.addCssClass('ms-metadata ms-textSmall');
        $p0.renderBeginTag('div');
        var $v_0 = false;
        var $v_1 = false;
        var $v_2 = null;
        var $v_3 = '';
        var $v_4 = '';
        var $v_5 = '';

        if ($p1 & 16 && this.$0_0.BaseViewID !== 7) {
            var $v_8 = this.$0_0.CurrentItem['NumComments'];

            $v_1 = !SP.ScriptHelpers.isNullOrUndefined($v_8);
        }
        if ($p1 & 1) {
            $v_3 = spMgr.RenderFieldByName(this.$0_0, 'Author', this.$1_0, this.$0_0.ListSchema);
        }
        if ($p1 & 8) {
            $v_5 = spMgr.RenderFieldByName(this.$0_0, 'PublishedDate.TimeOnly', this.$1_0, this.$0_0.ListSchema);
        }
        if ($p1 & 4) {
            $v_4 = spMgr.RenderFieldByName(this.$0_0, 'PublishedDate.LongDate', this.$1_0, this.$0_0.ListSchema);
        }
        if ($p1 & 2) {
            $v_2 = this.$1_0['PostCategory'];
            $v_0 = !SP.ScriptHelpers.isNullOrUndefined($v_2) && $v_2.length > 0;
        }
        var $v_6 = 11;
        var $v_7 = 12;

        if ($v_1) {
            $p0.addCssClass('ms-blog-command-noLeftPadding');
            $p0.addCssClass('ms-comm-metalineItemSeparator');
        }
        $p0.renderBeginTag('span');
        if (($p1 & $v_6) === $v_6) {
            if ($v_0) {
                $p0.write(String.format(STSHtmlEncode(Strings.STS.L_SPBlogPostAuthorTimeCategories), $v_3, $v_5, this.$c_0($v_2)));
            }
            else {
                $p0.write(String.format(STSHtmlEncode(Strings.STS.L_SPBlogPostAuthorTime), $v_3, $v_5));
            }
        }
        else if ($p1 & 1) {
            if ($v_0) {
                $p0.write(String.format(STSHtmlEncode(Strings.STS.L_SPBlogPostAuthorCategories), $v_3, this.$c_0($v_2)));
            }
            else {
                $p0.write(String.format(STSHtmlEncode(Strings.STS.L_SPBlogPostAuthor), $v_3));
            }
        }
        else if (($p1 & $v_7) === $v_7) {
            $p0.write(String.format(STSHtmlEncode(Strings.STS.L_SPBlogPostOn), $v_4, $v_5));
        }
        $p0.renderEndTag();
        if ($v_1) {
            this.$d_0('span', $p0, false);
        }
        $p0.renderEndTag();
    },
    $c_0: function SP_UI_Blogs_PostBehavior$$c_0($p0) {
        var $v_0 = new SP.HtmlBuilder();

        for (var $v_1 = 0, $v_2 = $p0.length; $v_1 < $v_2; $v_1++) {
            var $v_3 = $p0[$v_1];

            if ($v_1) {
                $v_0.writeEncoded(Strings.STS.L_SPBlogsEnumSeparator);
            }
            var $v_4 = SP.UI.Blogs.PostBehavior.$H(SP.UI.Blogs.PostBehavior.$X(), $v_3, 301);

            $v_0.addAttribute('href', $v_4);
            $v_0.addAttribute('id', 'blgcat');
            $v_0.addAttribute('class', 'ms-link');
            $v_0.renderBeginTag('a');
            $v_0.writeEncoded($v_3['lookupValue']);
            $v_0.renderEndTag();
        }
        return $v_0.toString();
    },
    $d_0: function SP_UI_Blogs_PostBehavior$$d_0($p0, $p1, $p2) {
        $p1.addCssClass($p2 ? 'ms-blog-command-noLeftPadding ms-textSmall' : 'ms-blog-command');
        $p1.renderBeginTag($p0);
        var $v_0 = this.$1_0['NumComments'];
        var $v_1 = SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPClientNumCommentsTemplate, Strings.STS.L_SPClientNumCommentsTemplateIntervals, Number.parseLocale($v_0));

        $p1.write(String.format($v_1, $v_0));
        $p1.renderEndTag();
    },
    $O_0: function SP_UI_Blogs_PostBehavior$$O_0($p0, $p1) {
        if ($p1) {
            $p0.addCssClass('ms-blog-commandSpace');
        }
        $p0.renderBeginTag('div');
        var $v_0 = this.$0_0.CurrentItem['NumComments'];

        if (this.$0_0.BaseViewID !== 7 && !SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $p0.addAttribute('href', this.get_$L_0() + '#comments');
            $p0.addCssClass('ms-comm-metalineItemSeparator');
            this.$d_0('a', $p0, true);
            $p0.addCssClass('ms-blog-command');
            $p0.addAttribute('style', 'display: inline-block;');
        }
        var $v_1 = this.$0_0.wpq + '_' + this.$0_0.CurrentItem['ID'];
        var $v_2 = ['LikesCount', 'AverageRating'];
        var $v_3 = ['likesElement-', 'averageRatingElement-'];

        for (var $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
            if (SP.ScriptHelpers.getFieldFromSchema(this.$0_0.ListSchema, $v_2[$v_6])) {
                this.$3_0.addCommand(new SP.UI.Blogs.FieldRendererCommand($v_2[$v_6], $v_3[$v_6] + this.$0_0.CurrentItem['ID'], this.$0_0));
            }
        }
        if (this.$0_0.BaseViewID === 7) {
            this.$3_0.addCommand(new SP.UI.Blogs.CommentCommand($v_1));
        }
        this.$3_0.addCommand(new SP.UI.Blogs.ShareCommand($v_1, this.get_$L_0(), spMgr.RenderFieldByName(this.$0_0, 'Title', this.$1_0, this.$0_0.ListSchema)));
        var $v_4 = SP.ScriptHelpers.getListLevelPermissionMask(this.$0_0.CurrentItem);
        var $v_5 = Number.parseInvariant(SP.ScriptHelpers.getUserFieldProperty(this.$0_0.CurrentItem, 'Author', 'id'));

        if (this.$0_0.CurrentUserId === $v_5 && SP.ScriptHelpers.hasPermission($v_4, 4) || SP.ScriptHelpers.hasPermission($v_4, 2048)) {
            var $v_7 = SP.ScriptHelpers.replaceOrAddQueryString(this.$0_0.editFormUrl, 'ID', this.$1_0['ID']);
            var $v_8 = window.self.ajaxNavigate;

            $v_7 = SP.ScriptHelpers.replaceOrAddQueryString($v_7, 'Source', $v_8.get_href());
            this.$3_0.addCommand(new SP.UI.Blogs.EditCommand($v_1, $v_7));
        }
        this.$3_0.render($p0);
        $p0.renderEndTag();
    },
    $17_0: function SP_UI_Blogs_PostBehavior$$17_0() {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = spMgr.RenderFieldByName(this.$0_0, 'PublishedDate.DateOnly', this.$1_0, this.$0_0.ListSchema);
        var $v_2 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['DateSeparator'];
        var $v_3 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['ShortDatePattern'];
        var $v_4 = $v_3.split($v_2);
        var $v_5 = $v_4.length;
        var $v_6 = 0;

        for (var $v_8 = 0; $v_8 < $v_5; $v_8++) {
            if (-1 !== $v_4[$v_8].indexOf('y')) {
                $v_6 = $v_8;
                break;
            }
        }
        var $v_7 = $v_1.split($v_2);

        $v_0.addCssClass('ms-textSmall');
        $v_0.renderBeginTag('div');
        $v_0.write($v_7[$v_6]);
        $v_0.renderEndTag();
        $v_0.addCssClass('ms-textXLarge');
        $v_0.addCssClass('ms-blog-dateText');
        $v_0.renderBeginTag('div');
        for (var $v_9 = 0, $v_A = 1;; $v_9++) {
            if ($v_6 === $v_9) {
                continue;
            }
            $v_0.write($v_7[$v_9]);
            $v_A++;
            if ($v_A === $v_5) {
                break;
            }
            $v_0.write($v_2);
        }
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $18_0: function SP_UI_Blogs_PostBehavior$$18_0() {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = spMgr.RenderFieldByName(this.$0_0, 'PublishedDate.MonthDayOnly', this.$1_0, this.$0_0.ListSchema);
        var $v_2 = $v_1.split(' ');

        if ($v_2.length === 2) {
            $v_0.addCssClass('ms-textXLarge');
            $v_0.renderBeginTag('div');
            $v_0.write($v_2[1]);
            $v_0.renderEndTag();
            $v_0.addCssClass('ms-uppercase');
            $v_0.addCssClass('ms-blog-boldMonth');
            $v_0.addCssClass('ms-textSmall');
            $v_0.renderBeginTag('div');
            $v_0.write($v_2[0]);
            $v_0.renderEndTag();
        }
        else {
            $v_0.renderBeginTag('h2');
            $v_0.write($v_1);
            $v_0.renderEndTag();
        }
        return $v_0.toString();
    }
};
SP.UI.Blogs.CommentCommand = function SP_UI_Blogs_CommentCommand($p0) {
    SP.UI.Blogs.CommentCommand.initializeBase(this, ['comment-' + $p0, Strings.STS.L_SPBlogsCommentCommand]);
    this.$l_1 = $p0;
};
SP.UI.Blogs.CommentCommand.prototype = {
    $l_1: null,
    onClick: function SP_UI_Blogs_CommentCommand$onClick() {
        if (!SP.ScriptHelpers.isNullOrEmptyString(SP.UI.Blogs.PostBehavior.$8)) {
            var $v_0 = $get(SP.UI.Blogs.PostBehavior.$4);

            if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
                $v_0.focus();
            }
        }
    },
    get_linkElement: function SP_UI_Blogs_CommentCommand$get_linkElement() {
        return $get(SP.UI.Blogs.PostBehavior.$4);
    },
    render: function SP_UI_Blogs_CommentCommand$render($p0) {
        SP.UI.Blogs.PostBehavior.$6 = 'comment-commandid-' + this.$l_1;
        SP.UI.Blogs.PostBehavior.$4 = SP.UI.Blogs.PostBehavior.$6 + '-1';
        $p0.addAttribute('id', SP.UI.Blogs.PostBehavior.$6);
        if (!SP.UI.Blogs.PostBehavior.$V) {
            $p0.addAttribute('style', 'display:none');
        }
        $p0.renderBeginTag('span');
        $p0.addCssClass('ms-secondaryCommandLink');
        $p0.addCssClass('ms-blog-command-noLeftPadding');
        $p0.addAttribute('id', SP.UI.Blogs.PostBehavior.$4);
        $p0.addAttribute('href', '#');
        $p0.renderBeginTag('a');
        $p0.writeEncoded(Strings.STS.L_SPBlogsCommentCommand);
        $p0.renderEndTag();
        $p0.renderEndTag();
    }
};
SP.UI.Blogs.ShareCommand = function SP_UI_Blogs_ShareCommand($p0, $p1, $p2) {
    SP.UI.Blogs.ShareCommand.initializeBase(this, ['share_' + $p0, Strings.STS.L_SPBlogsShareCommand]);
    this.$A_1 = escapeProperlyCore($p1, true);
    this.$b_1 = $p2;
};
SP.UI.Blogs.ShareCommand.$r = function SP_UI_Blogs_ShareCommand$$r($p0, $p1) {
    window.location.href = 'mailto:?body=' + escapeProperlyCore($p0, false) + '&subject=' + escapeProperlyCore($p1, false);
};
SP.UI.Blogs.ShareCommand.prototype = {
    $A_1: null,
    $b_1: null,
    onClick: function SP_UI_Blogs_ShareCommand$onClick() {
        SP.UI.Blogs.ShareCommand.$r(this.$A_1, this.$b_1);
    }
};
SP.UI.Blogs.EditCommand = function SP_UI_Blogs_EditCommand($p0, $p1) {
    SP.UI.Blogs.EditCommand.initializeBase(this, ['edit_' + $p0, Strings.STS.L_SPBlogsEditCommand]);
    this.$U_1 = $p1;
};
SP.UI.Blogs.EditCommand.prototype = {
    $U_1: null,
    get_href: function SP_UI_Blogs_EditCommand$get_href() {
        return this.$U_1;
    },
    onClick: function SP_UI_Blogs_EditCommand$onClick() {
        STSNavigate(this.get_href());
    }
};
SP.UI.Blogs.FieldRendererCommand = function SP_UI_Blogs_FieldRendererCommand($p0, $p1, $p2) {
    SP.UI.Blogs.FieldRendererCommand.initializeBase(this, ['', '']);
    this.$Z_1 = $p1;
    this.$0_1 = $p2;
    this.$W_1 = $p0;
};
SP.UI.Blogs.FieldRendererCommand.prototype = {
    $J_1: null,
    $Z_1: null,
    $0_1: null,
    $W_1: null,
    get_linkElement: function SP_UI_Blogs_FieldRendererCommand$get_linkElement() {
        if (!this.$J_1) {
            this.$J_1 = $get(this.$Z_1);
        }
        return this.$J_1;
    },
    render: function SP_UI_Blogs_FieldRendererCommand$render($p0) {
        $p0.addCssClass('ms-comm-cmdSpaceListItem');
        $p0.renderBeginTag('span');
        $p0.write(spMgr.RenderFieldByName(this.$0_1, this.$W_1, this.$0_1.CurrentItem, this.$0_1.ListSchema));
        $p0.renderEndTag();
    }
};
SP.UI.Blogs.ListRenderer.registerClass('SP.UI.Blogs.ListRenderer');
SP.UI.Blogs.BlogRenderer.registerClass('SP.UI.Blogs.BlogRenderer', SP.UI.Blogs.ListRenderer);
SP.UI.Blogs.CommentBoxControl.registerClass('SP.UI.Blogs.CommentBoxControl');
SP.UI.Blogs.CommentsRenderer.registerClass('SP.UI.Blogs.CommentsRenderer', SP.UI.Blogs.ListRenderer);
SP.UI.Blogs.Constants.registerClass('SP.UI.Blogs.Constants');
SP.UI.Blogs.GlobalTemplateOverrides.registerClass('SP.UI.Blogs.GlobalTemplateOverrides');
SP.UI.Blogs.MenuListRenderer.registerClass('SP.UI.Blogs.MenuListRenderer', SP.UI.Blogs.ListRenderer);
SP.UI.Blogs.PostBehavior.registerClass('SP.UI.Blogs.PostBehavior');
SP.UI.Blogs.CommentCommand.registerClass('SP.UI.Blogs.CommentCommand', SP.UI.Command);
SP.UI.Blogs.ShareCommand.registerClass('SP.UI.Blogs.ShareCommand', SP.UI.Command);
SP.UI.Blogs.EditCommand.registerClass('SP.UI.Blogs.EditCommand', SP.UI.Command);
SP.UI.Blogs.FieldRendererCommand.registerClass('SP.UI.Blogs.FieldRendererCommand', SP.UI.Command);
function sp_ui_blogs_initialize() {
    SP.UI.Blogs.GlobalTemplateOverrides.$G = [[301, 303, 302, 103], [0, 7, 8, 9], [0], [0], [4]];
    SP.UI.Blogs.GlobalTemplateOverrides.$$cctor();
    SP.UI.Blogs.PostBehavior.$6 = null;
    SP.UI.Blogs.PostBehavior.$4 = null;
    SP.UI.Blogs.PostBehavior.$8 = null;
    SP.UI.Blogs.PostBehavior.$V = false;
}
;
sp_ui_blogs_initialize();
RegisterModuleInit("sp.ui.blogs.js", sp_ui_blogs_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.blogs.js");
