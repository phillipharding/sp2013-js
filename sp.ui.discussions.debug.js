Type.registerNamespace('SP.UI.Discussions');
SP.UI.Discussions.SortFilterPickerRenderMode = function() {
};
SP.UI.Discussions.SortFilterPickerRenderMode.prototype = {
    horizontalList: 0,
    dropDownList: 1
};
SP.UI.Discussions.SortFilterPickerRenderMode.registerEnum('SP.UI.Discussions.SortFilterPickerRenderMode', false);
SP.UI.Discussions.AsyncRefreshRequest = function SP_UI_Discussions_AsyncRefreshRequest($p0, $p1, $p2) {
    this.$$d_$2m_0 = Function.createDelegate(this, this.$2m_0);
    this.$O_0 = $p0;
    this.$1p_0 = $p1;
    this.$1H_0 = $p2;
};
SP.UI.Discussions.AsyncRefreshRequest.createCurrentViewRefreshRequest = function SP_UI_Discussions_AsyncRefreshRequest$createCurrentViewRefreshRequest($p0, $p1) {
    return SP.UI.Discussions.AsyncRefreshRequest.$19($p0, false, 0, null, $p1);
};
SP.UI.Discussions.AsyncRefreshRequest.createNewViewRefreshRequest = function SP_UI_Discussions_AsyncRefreshRequest$createNewViewRefreshRequest($p0, $p1) {
    return SP.UI.Discussions.AsyncRefreshRequest.$19($p0, false, 0, $p1, 3);
};
SP.UI.Discussions.AsyncRefreshRequest.createSingleItemRefreshRequest = function SP_UI_Discussions_AsyncRefreshRequest$createSingleItemRefreshRequest($p0, $p1) {
    return SP.UI.Discussions.AsyncRefreshRequest.$19($p0, true, $p1, null, 3);
};
SP.UI.Discussions.AsyncRefreshRequest.$19 = function SP_UI_Discussions_AsyncRefreshRequest$$19($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new XMLHttpRequest();
    var $v_1 = '';
    var $v_2 = $p0.clvp;
    var $v_3 = SP.UI.Discussions.Helpers.$2M($p0);

    switch ($p4) {
    case 3:
        SP.UI.Discussions.AsyncRefreshRequest.$b = null;
        break;
    case 1:
        SP.UI.Discussions.AsyncRefreshRequest.$b = $p0.ListData['NextHref'];
        break;
    case 2:
        SP.UI.Discussions.AsyncRefreshRequest.$b = $p0.ListData['PrevHref'];
        break;
    case 0:
        break;
    default:
        break;
    }
    var $v_4 = SP.UI.Discussions.AsyncRefreshRequest.$b;

    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_4)) {
        var $v_7 = $v_4.indexOf('?');

        if ($v_7 >= 0) {
            $v_4 = $v_4.substr($v_7 + 1);
        }
        $v_3 = ReconcileQstringFilters($v_3, $v_4);
    }
    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($p3)) {
        var $v_8 = window.self.ajaxNavigate;
        var $v_9 = new URI($v_8.get_href());

        $v_3 = RemoveQueryParameterFromUrl($v_3, 'View');
        $v_3 = SP.ScriptHelpers.replaceOrAddQueryString($v_3, 'ListViewPageUrl', $v_9.getStringWithoutQueryAndFragment());
    }
    var $v_5 = $p0.overrideSelectCommand;

    if ($p1) {
        $v_5 = SP.UI.Discussions.Helpers.$1g($p0, String.format('<Query><Where><Eq><FieldRef Name=\"ID\"/><Value Type=\"Number\">{0}</Value></Eq></Where></Query>', $p2));
    }
    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_5)) {
        $v_3 = SP.ScriptHelpers.replaceOrAddQueryString($v_3, 'HasOverrideSelectCommand', 'TRUE');
        $v_1 += '&OverrideSelectCommand=' + escapeProperlyCore($v_5, false);
    }
    var $v_6 = GetUrlKeyValue('RootFolder', true, $v_3);

    if ($v_6.length > 0) {
        $v_1 = $v_1 + '&InplRootFolder=' + $v_6;
        $v_3 = RemoveUrlKeyValue('RootFolder', $v_3);
    }
    $v_0.open('POST', $v_3, true);
    $v_0.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    return new SP.UI.Discussions.AsyncRefreshRequest($v_0, $v_1, $p2);
};
SP.UI.Discussions.AsyncRefreshRequest.prototype = {
    $O_0: null,
    $1p_0: null,
    $26_0: false,
    $1H_0: 0,
    $G_0: null,
    $I_0: null,
    $11_0: null,
    get_completedCallback: function SP_UI_Discussions_AsyncRefreshRequest$get_completedCallback() {
        return this.$G_0;
    },
    set_completedCallback: function SP_UI_Discussions_AsyncRefreshRequest$set_completedCallback($p0) {
        this.$G_0 = $p0;
        return $p0;
    },
    get_failedCallback: function SP_UI_Discussions_AsyncRefreshRequest$get_failedCallback() {
        return this.$I_0;
    },
    set_failedCallback: function SP_UI_Discussions_AsyncRefreshRequest$set_failedCallback($p0) {
        this.$I_0 = $p0;
        return $p0;
    },
    get_singleItemID: function SP_UI_Discussions_AsyncRefreshRequest$get_singleItemID() {
        return this.$1H_0;
    },
    get_tag: function SP_UI_Discussions_AsyncRefreshRequest$get_tag() {
        return this.$11_0;
    },
    set_tag: function SP_UI_Discussions_AsyncRefreshRequest$set_tag($p0) {
        this.$11_0 = $p0;
        return $p0;
    },
    start: function SP_UI_Discussions_AsyncRefreshRequest$start() {
        if (!this.$26_0) {
            this.$O_0.onreadystatechange = this.$$d_$2m_0;
            this.$O_0.send(this.$1p_0);
            this.$26_0 = true;
        }
    },
    $2V_0: function SP_UI_Discussions_AsyncRefreshRequest$$2V_0($p0) {
        if (this.$G_0) {
            this.$G_0(this, $p0);
        }
        this.$G_0 = null;
    },
    $1K_0: function SP_UI_Discussions_AsyncRefreshRequest$$1K_0($p0) {
        if (this.$I_0) {
            this.$I_0(this, $p0);
        }
        this.$I_0 = null;
    },
    $2m_0: function SP_UI_Discussions_AsyncRefreshRequest$$2m_0() {
        if (this.$O_0.readyState === 4) {
            this.$O_0.onreadystatechange = null;
            if (this.$O_0.status === 601) {
                this.$1K_0(this.$O_0.responseText);
            }
            else {
                var $v_0 = eval('(' + this.$O_0.responseText + ')');

                this.$2V_0($v_0);
            }
        }
    }
};
SP.UI.Discussions.FeaturedDiscussionRenderer = function SP_UI_Discussions_FeaturedDiscussionRenderer(listTemplateType, baseViewID) {
    SP.UI.Discussions.FeaturedDiscussionRenderer.initializeBase(this, [listTemplateType, baseViewID]);
};
SP.UI.Discussions.FeaturedDiscussionRenderer.renderFeaturedHeader = function SP_UI_Discussions_FeaturedDiscussionRenderer$renderFeaturedHeader(context) {
    var $v_0 = new SP.HtmlBuilder();
    var $v_1 = context.forumViewState;

    if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
        var $v_2 = context.ListData['Row'];

        if ($v_2.length > 0) {
            $v_0.addAttribute('id', SP.UI.Discussions.Helpers.$J($v_1.$E_0, 'FeaturedHeader'));
            $v_0.addCssClass('ms-comm-featuredHeader');
            $v_0.renderBeginTag('h2');
            $v_0.write(Strings.STS.L_SPDiscFeaturedHeader);
            $v_0.renderEndTag();
        }
    }
    return $v_0.toString();
};
SP.UI.Discussions.FeaturedDiscussionRenderer.setFeaturedRenderOptions = function SP_UI_Discussions_FeaturedDiscussionRenderer$setFeaturedRenderOptions(renderOptions) {
    renderOptions.folderTitleStyle = '';
    renderOptions.folderBodyWrapStyle = 'ms-comm-featuredBody';
    renderOptions.renderDate = false;
};
SP.UI.Discussions.FeaturedDiscussionRenderer.get_featuredPostListId = function SP_UI_Discussions_FeaturedDiscussionRenderer$get_featuredPostListId() {
    return 'PostListFeatured';
};
SP.UI.Discussions.FeaturedDiscussionRenderer.prototype = {
    renderForumHeader: function SP_UI_Discussions_FeaturedDiscussionRenderer$renderForumHeader(context) {
        return SP.UI.Discussions.FeaturedDiscussionRenderer.renderFeaturedHeader(context);
    },
    setRenderOptions: function SP_UI_Discussions_FeaturedDiscussionRenderer$setRenderOptions(renderOptions) {
        SP.UI.Discussions.FeaturedDiscussionRenderer.setFeaturedRenderOptions(renderOptions);
    },
    get_postListId: function SP_UI_Discussions_FeaturedDiscussionRenderer$get_postListId() {
        return SP.UI.Discussions.FeaturedDiscussionRenderer.get_featuredPostListId();
    }
};
SP.UI.Discussions.ForumRenderer = function SP_UI_Discussions_ForumRenderer(listTemplateType, baseViewID) {
    this.$$d_$2b_0 = Function.createDelegate(this, this.$2b_0);
    this.$$d_$1l_0 = Function.createDelegate(this, this.$1l_0);
    this.$$d_renderForumPost = Function.createDelegate(this, this.renderForumPost);
    this.$$d_renderForumHeader = Function.createDelegate(this, this.renderForumHeader);
    this.$$d_renderForumFooter = Function.createDelegate(this, this.renderForumFooter);
    this.$$d_renderForumBody = Function.createDelegate(this, this.renderForumBody);
    this.$v_0 = listTemplateType;
    this.$T_0 = baseViewID;
};
SP.UI.Discussions.ForumRenderer.prototype = {
    $T_0: 0,
    $v_0: 0,
    createRenderingContextOverrides: function SP_UI_Discussions_ForumRenderer$createRenderingContextOverrides() {
        var $v_0 = new ListContext();

        $v_0.BaseViewID = this.$T_0;
        $v_0.ListTemplateType = this.$v_0;
        $v_0.Templates['Body'] = this.$$d_renderForumBody;
        $v_0.Templates['Footer'] = this.$$d_renderForumFooter;
        $v_0.Templates['Header'] = this.$$d_renderForumHeader;
        var $v_1 = {};

        $v_1['SPListItem2'] = this.$$d_renderForumPost;
        $v_0.Templates['Item'] = $v_1;
        $v_0.OnPreRender = this.$$d_$1l_0;
        $v_0.OnPostRender = this.$$d_$2b_0;
        return $v_0;
    },
    attachEvents: function SP_UI_Discussions_ForumRenderer$attachEvents(context) {
        if (!SP.UI.Discussions.Helpers.isNullOrUndefined(context.forumViewState)) {
            var $v_0 = context.forumViewState;

            $v_0.initialize();
            for (var $v_1 = 0, $v_2 = $v_0.$6_0.length; $v_1 < $v_2; $v_1++) {
                var $v_3 = $v_0.$6_0[$v_1];

                $v_3.initialize();
            }
        }
    },
    createForumViewState: function SP_UI_Discussions_ForumRenderer$createForumViewState(context) {
        return new SP.UI.Discussions.ForumViewState(context);
    },
    $2b_0: function SP_UI_Discussions_ForumRenderer$$2b_0($p0) {
        this.attachEvents($p0);
        SP.ScriptHelpers.disableWebpartSelection($p0);
        if (SP.UI.Discussions.PostBehavior.$Z > 0) {
            var $$t_3 = this;

            EnsureScriptFunc('strings.js', 'Strings.STS.L_ViewProperties_Text', function() {
                for (var $v_0 = 1; $v_0 <= SP.UI.Discussions.PostBehavior.$Z; $v_0++) {
                    var $v_1 = $get('discAttachmentLink' + $v_0);

                    if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
                        $v_1.innerHTML = window.self.Strings.STS.L_ViewProperties_Text;
                    }
                }
            });
        }
    },
    $1l_0: function SP_UI_Discussions_ForumRenderer$$1l_0($p0) {
        if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($p0.ListData['FilterLink'])) {
            var $v_0 = SP.ScriptHelpers.getDocumentQueryPairs();
            var $v_1 = SP.UI.Discussions.Helpers.getListSortOverride($v_0);
            var $v_2 = '';

            if ($v_1) {
                $v_2 = SP.ScriptHelpers.replaceOrAddQueryString($v_2, 'SortField', $v_1.$e_0);
                $v_2 = SP.ScriptHelpers.replaceOrAddQueryString($v_2, 'SortDir', $v_1.$1A_0);
            }
            var $v_3 = $v_0['CategoryID'];

            if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_3)) {
                $v_2 = SP.ScriptHelpers.replaceOrAddQueryString($v_2, 'CategoryID', $v_3);
            }
            if ($v_2.length > 0) {
                $v_2 = '&' + $v_2.substr(1);
            }
            var $v_4 = $p0.ListData['NextHref'];

            if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_4)) {
                $p0.ListData['NextHref'] = $v_4 + $v_2;
            }
            var $v_5 = $p0.ListData['PrevHref'];

            if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_5)) {
                $p0.ListData['PrevHref'] = $v_5 + $v_2;
            }
        }
        $p0.forumViewState = this.createForumViewState($p0);
        $p0.ListSchema.UserVanilla = true;
    },
    renderForumBody: function SP_UI_Discussions_ForumRenderer$renderForumBody(context) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = context.forumViewState;

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            var $v_2 = context.ListData['Row'];
            var $v_3 = 0;

            if (!SP.UI.Discussions.Helpers.$L(context) && $v_2.length > 0) {
                $v_0.addCommunitiesCssClass('postList');
                $v_0.renderBeginTag('ul');
                context.CurrentItem = $v_2[0];
                $v_0.write(this.renderForumPost(context));
                $v_0.renderEndTag();
                $v_3++;
            }
            if (!$v_2.length) {
                var $v_4 = new Array(0);

                RenderEmptyText($v_4, context);
                $v_0.write($v_4.join(''));
            }
            else {
                $v_0.addCommunitiesCssClass('postList');
                $v_0.addAttribute('id', SP.UI.Discussions.Helpers.$J($v_1.$E_0, this.get_postListId()));
                $v_0.renderBeginTag('ul');
                if ($v_3 < $v_2.length) {
                    for (var $v_5 = $v_3, $v_6 = $v_2.length; $v_5 < $v_6; $v_5++) {
                        context.CurrentItem = $v_2[$v_5];
                        $v_0.write(this.renderForumPost(context));
                        context.CurrentItem = null;
                    }
                }
                $v_0.renderEndTag();
            }
        }
        return $v_0.toString();
    },
    renderForumFooter: function SP_UI_Discussions_ForumRenderer$renderForumFooter(context) {
        var $v_0 = new SP.HtmlBuilder();

        if (!SP.UI.Discussions.Helpers.$L(context)) {
            $v_0.addCommunitiesCssClass('postReplyContainer');
            $v_0.addAttribute('id', SP.UI.Discussions.Helpers.$J(context.forumViewState.$E_0, 'Footer-ReplyContainer'));
            $v_0.renderBeginTag('div');
            $v_0.renderEndTag();
        }
        var $v_1 = new Array(0);

        RenderPaging($v_1, context);
        $v_0.write($v_1.join(''));
        $v_0.write('</div>');
        return $v_0.toString();
    },
    renderForumHeader: function SP_UI_Discussions_ForumRenderer$renderForumHeader(context) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = context.listName + '-' + context.view;

        $v_0.write('<div class=\"ms-core-defaultFont ms-comm-forumContainer\" id=\"' + $v_1 + '\">');
        if (SP.UI.Discussions.Helpers.$L(context)) {
            var $v_2 = context.forumViewState;
            var $v_3 = $v_2.createHeaderBehavior(context);

            $v_2.$g_0 = $v_3;
            $v_3.render($v_0);
        }
        return $v_0.toString();
    },
    renderForumPost: function SP_UI_Discussions_ForumRenderer$renderForumPost(context) {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = context.forumViewState;
        var $v_2 = $v_1.createPostBehavior(context, context.CurrentItem);

        $v_1.addNewPost($v_2);
        var $v_3 = SP.UI.Discussions.PostBehavior.RenderOptions.get_$27();

        this.setRenderOptions($v_3);
        $v_2.render($v_0, $v_3);
        return $v_0.toString();
    },
    setRenderOptions: function SP_UI_Discussions_ForumRenderer$setRenderOptions(renderOptions) {
        renderOptions.folderTitleStyle = 'ms-textLarge ms-noWrap';
        renderOptions.folderBodyWrapStyle = 'ms-noWrap';
        renderOptions.renderDate = true;
    },
    get_postListId: function SP_UI_Discussions_ForumRenderer$get_postListId() {
        return 'PostList';
    }
};
SP.UI.Discussions.ForumViewState = function SP_UI_Discussions_ForumViewState(context) {
    this.$$d_$2f_0 = Function.createDelegate(this, this.$2f_0);
    this.$$d_$2e_0 = Function.createDelegate(this, this.$2e_0);
    this.$$d_$2Z_0 = Function.createDelegate(this, this.$2Z_0);
    this.$$d_$2a_0 = Function.createDelegate(this, this.$2a_0);
    this.$E_0 = SP.UI.Discussions.ForumViewState.$K;
    SP.UI.Discussions.ForumViewState.$K++;
    this.$0_0 = context;
    this.$6_0 = [];
};
SP.UI.Discussions.ForumViewState.prototype = {
    $0_0: null,
    $6_0: null,
    $g_0: null,
    $f_0: null,
    $E_0: 0,
    $i_0: false,
    $X_0: null,
    get_activeElement: function SP_UI_Discussions_ForumViewState$get_activeElement() {
        var $v_0;

        if (this.$X_0) {
            $v_0 = this.$X_0;
        }
        else {
            $v_0 = document.activeElement;
        }
        return $v_0;
    },
    set_activeElement: function SP_UI_Discussions_ForumViewState$set_activeElement(value) {
        this.$X_0 = value;
        return value;
    },
    get_headerBehavior: function SP_UI_Discussions_ForumViewState$get_headerBehavior() {
        return this.$g_0;
    },
    set_headerBehavior: function SP_UI_Discussions_ForumViewState$set_headerBehavior(value) {
        this.$g_0 = value;
        return value;
    },
    get_id: function SP_UI_Discussions_ForumViewState$get_id() {
        return this.$E_0;
    },
    get_postStateList: function SP_UI_Discussions_ForumViewState$get_postStateList() {
        return this.$6_0;
    },
    addNewPost: function SP_UI_Discussions_ForumViewState$addNewPost(post) {
        Array.add(this.$6_0, post);
    },
    createHeaderBehavior: function SP_UI_Discussions_ForumViewState$createHeaderBehavior(context) {
        return new SP.UI.Discussions.HeaderBehavior(context);
    },
    createPostBehavior: function SP_UI_Discussions_ForumViewState$createPostBehavior(context, jsonItem) {
        return new SP.UI.Discussions.PostBehavior(context, jsonItem);
    },
    initialize: function SP_UI_Discussions_ForumViewState$initialize() {
        if (this.$i_0) {
            return;
        }
        if (!SP.UI.Discussions.Helpers.isNullOrUndefined(this.$g_0)) {
            this.$g_0.attachEvents();
        }
        if (!SP.UI.Discussions.Helpers.$L(this.$0_0) && !SP.UI.Discussions.Helpers.isNullOrUndefined(this.$0_0.ListSchema.ListRight_AddListItems)) {
            var $v_2 = SP.UI.Discussions.Helpers.$U(this.$0_0);

            this.$f_0 = new SP.UI.Discussions.ReplyBoxControl($v_2, 'Footer', true, false, false);
            this.$f_0.show(false);
        }
        var $v_0 = 'bottomPaging' + this.$0_0.wpq;
        var $v_1 = $get($v_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            var $v_3 = $v_1.getElementsByTagName('a');

            if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_3)) {
                for (var $v_4 = 0, $v_5 = $v_3.length; $v_4 < $v_5; $v_4++) {
                    var $v_6 = $v_3[$v_4];
                    var $v_7 = $v_6.getAttribute('onclick');

                    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_7) && $v_7.startsWith('RefreshPageTo')) {
                        $v_6.setAttribute('onclick', null);
                        $v_6.removeAttribute('onclick');
                        var $v_8 = $v_6.getElementsByTagName('img');
                        var $v_9 = !SP.UI.Discussions.Helpers.isNullOrUndefined($v_8) && $v_8.length > 0 && $v_8[0].getAttribute('alt') === Strings.STS.L_SPClientPrevious;
                        var $v_A = $v_9 ? this.$$d_$2a_0 : this.$$d_$2Z_0;

                        $addHandler($v_6, 'click', $v_A);
                    }
                }
            }
        }
        this.$i_0 = true;
    },
    $m_0: function SP_UI_Discussions_ForumViewState$$m_0($p0) {
        var $v_0 = new SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler();
        var $$t_5 = this;

        $v_0.set_refreshCompletedCallback(function($p1_0, $p1_1) {
            $$t_5.$22_0($p1_1);
        });
        this.$1b_0($v_0);
        var $v_1 = SP.UI.Discussions.AsyncRefreshRequest.createCurrentViewRefreshRequest(this.$0_0, $p0);

        $v_1.$G_0 = $v_0.$$d_onQueryCompleted;
        $v_1.$I_0 = $v_0.$$d_onQueryFailed;
        $v_1.start();
    },
    refreshSinglePost: function SP_UI_Discussions_ForumViewState$refreshSinglePost(postID) {
        var $v_0 = SP.UI.Discussions.AsyncRefreshRequest.createSingleItemRefreshRequest(this.$0_0, postID);

        $v_0.$G_0 = this.$$d_$2e_0;
        $v_0.$I_0 = this.$$d_$2f_0;
        $v_0.start();
    },
    removePost: function SP_UI_Discussions_ForumViewState$removePost(post) {
        Array.remove(this.$6_0, post);
    },
    switchToNewView: function SP_UI_Discussions_ForumViewState$switchToNewView(baseViewID, viewUrlPage) {
        var $v_0 = new SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler();
        var $$t_6 = this;

        $v_0.set_refreshCompletedCallback(function($p1_0, $p1_1) {
            $$t_6.$0_0.BaseViewID = $p1_0.$11_0;
            $$t_6.$0_0.overrideSelectCommand = null;
            $$t_6.$22_0($p1_1);
        });
        this.$1b_0($v_0);
        var $v_1 = SP.UI.Discussions.AsyncRefreshRequest.createNewViewRefreshRequest(this.$0_0, viewUrlPage);

        $v_1.$G_0 = $v_0.$$d_onQueryCompleted;
        $v_1.$I_0 = $v_0.$$d_onQueryFailed;
        $v_1.$11_0 = baseViewID;
        $v_1.start();
    },
    $2A_0: function SP_UI_Discussions_ForumViewState$$2A_0() {
        var $v_0 = 0;

        for (var $v_1 = 0, $v_2 = this.$6_0.length; $v_1 < $v_2; $v_1++) {
            var $v_3 = this.$6_0[$v_1];

            if (!$v_3.$4_0 || SP.UI.Discussions.Helpers.$L(this.$0_0)) {
                $v_3.animateFadeIn($v_0);
                $v_0 += 75;
            }
        }
    },
    $1b_0: function SP_UI_Discussions_ForumViewState$$1b_0($p0) {
        var $v_0 = SP.UI.Discussions.Helpers.$2H(this.$E_0, 'PostList');

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            SPAnimationUtility.BasicAnimator.FadeOut($v_0, $p0.$$d_onAnimationCompleteHandler, null);
        }
        else {
            $p0.onAnimationCompleteHandler();
        }
    },
    $2Z_0: function SP_UI_Discussions_ForumViewState$$2Z_0($p0) {
        $p0.preventDefault();
        this.$m_0(1);
    },
    $2a_0: function SP_UI_Discussions_ForumViewState$$2a_0($p0) {
        $p0.preventDefault();
        this.$m_0(2);
    },
    $2e_0: function SP_UI_Discussions_ForumViewState$$2e_0($p0, $p1) {
        this.$33_0($p1, $p0.$1H_0);
    },
    $2f_0: function SP_UI_Discussions_ForumViewState$$2f_0($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1);
    },
    $22_0: function SP_UI_Discussions_ForumViewState$$22_0($p0) {
        var $v_0 = $get('script' + this.$0_0.wpq);

        if ($v_0) {
            this.set_activeElement(document.activeElement);
            while ($v_0.nextSibling) {
                $v_0.parentNode.removeChild($v_0.nextSibling);
            }
            this.$0_0.ListData = $p0;
            SPClientRenderer.Render($v_0, this.$0_0);
            SP.UI.Discussions.Helpers.$n();
            var $v_1 = {};

            for (var $v_5 = 0, $v_6 = this.$6_0.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = this.$6_0[$v_5];

                $v_1[($v_7.get_itemID()).toString()] = $v_7;
            }
            var $v_2 = this.$0_0.forumViewState;

            $v_2.$X_0 = this.$X_0;
            var $v_3 = $v_2.$6_0;
            var $v_4 = this.$6_0.length;

            for (var $v_8 = 0, $v_9 = $v_3.length; $v_8 < $v_9; $v_8++) {
                var $v_A = $v_3[$v_8];
                var $v_B = $v_1[($v_A.get_itemID()).toString()];

                if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_B)) {
                    $v_B.transferState($v_A);
                }
            }
            if (this.$f_0) {
                this.$f_0.transferState($v_2.$f_0);
            }
            $v_2.$2A_0();
        }
    },
    $33_0: function SP_UI_Discussions_ForumViewState$$33_0($p0, $p1) {
        var $v_0 = $p0['Row'];
        var $v_1 = null;

        if ($v_0.length === 1) {
            var $v_2 = $v_0[0];

            if ($v_2['ID'] === $p1) {
                $v_1 = $v_2;
            }
        }
        if (!$v_1) {
            this.$m_0(0);
        }
        else {
            var $v_3 = this.$0_0.ListData['Row'];

            for (var $v_4 = 0, $v_5 = $v_3.length; $v_4 < $v_5; $v_4++) {
                var $v_6 = $v_3[$v_4];

                if ($v_6['ID'] === $p1) {
                    $v_3[$v_4] = $v_1;
                    break;
                }
            }
            for (var $v_7 = 0, $v_8 = this.$6_0.length; $v_7 < $v_8; $v_7++) {
                var $v_9 = this.$6_0[$v_7];

                if ($v_9.get_itemID() === $p1) {
                    if ($v_9.get_isRenderedByRootPost()) {
                        var $v_A = SP.UI.Discussions.Helpers.$U(this.$0_0);

                        $v_A.$1Y_0();
                    }
                    else {
                        var $v_B = $v_9.get_rootElementID();
                        var $v_C = $get($v_B);

                        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_C)) {
                            var $v_D = this.createPostBehavior(this.$0_0, $v_1);

                            this.set_activeElement(document.activeElement);
                            var $v_E = new SP.HtmlBuilder();

                            $v_D.render($v_E, SP.UI.Discussions.PostBehavior.RenderOptions.get_$1a());
                            $v_C.innerHTML = $v_E.toString();
                            $v_C.setAttribute('ID', $v_D.get_rootElementID());
                            this.$6_0[$v_7] = $v_D;
                            $v_D.initialize();
                            $v_9.transferState($v_D);
                            SP.UI.Discussions.Helpers.$n();
                        }
                    }
                }
            }
        }
    }
};
SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler = function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler() {
    this.$$d_onAnimationCompleteHandler = Function.createDelegate(this, this.onAnimationCompleteHandler);
    this.$$d_onQueryFailed = Function.createDelegate(this, this.onQueryFailed);
    this.$$d_onQueryCompleted = Function.createDelegate(this, this.onQueryCompleted);
    this.$15_0 = true;
    this.$1Z_0 = true;
};
SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler.prototype = {
    $15_0: false,
    $1Z_0: false,
    $q_0: null,
    $1Q_0: null,
    $w_0: null,
    get_refreshCompletedCallback: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$get_refreshCompletedCallback() {
        return this.$q_0;
    },
    set_refreshCompletedCallback: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$set_refreshCompletedCallback($p0) {
        this.$q_0 = $p0;
        return $p0;
    },
    onAnimationCompleteHandler: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$onAnimationCompleteHandler() {
        this.$1Z_0 = false;
        this.$1F_0();
    },
    onQueryCompleted: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$onQueryCompleted($p0, $p1) {
        this.$1Q_0 = $p0;
        this.$w_0 = $p1;
        this.$15_0 = false;
        this.$1F_0();
    },
    onQueryFailed: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$onQueryFailed($p0, $p1) {
        this.$1Q_0 = $p0;
        this.$w_0 = {};
        this.$w_0['Row'] = [];
        SP.UI.Discussions.Helpers.showScriptError($p1);
        this.$15_0 = false;
        this.$1F_0();
    },
    $1F_0: function SP_UI_Discussions_ForumViewState_DeferredAnimatedRefreshHandler$$1F_0() {
        if (!this.$15_0 && !this.$1Z_0 && this.$q_0) {
            this.$q_0(this.$1Q_0, this.$w_0);
        }
    }
};
SP.UI.Discussions.GlobalTemplateOverrides = function SP_UI_Discussions_GlobalTemplateOverrides() {
};
SP.UI.Discussions.GlobalTemplateOverrides.$$cctor = function SP_UI_Discussions_GlobalTemplateOverrides$$$cctor() {
    if (typeof SPClientTemplates === 'undefined') {
        return;
    }
    for (var $$arr_0 = SP.UI.Discussions.GlobalTemplateOverrides.$24, $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
        var $v_1 = $$arr_0[$$idx_2];
        var $v_2;

        if ($v_1 === 7) {
            $v_2 = new SP.UI.Discussions.FeaturedDiscussionRenderer(108, $v_1);
        }
        else {
            $v_2 = new SP.UI.Discussions.ForumRenderer(108, $v_1);
        }
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides($v_2.createRenderingContextOverrides());
    }
    var $v_0 = new SP.UI.Discussions.ManagementViewRenderer(108, 5);

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides($v_0.createRenderingContextOverrides());
};
SP.UI.Discussions.HeaderBehavior = function SP_UI_Discussions_HeaderBehavior(context) {
    this.$$d_$2U_0 = Function.createDelegate(this, this.$2U_0);
    this.$$d_onClickNewPostLink = Function.createDelegate(this, this.onClickNewPostLink);
    this.context = context;
    this.$1J_0 = SP.UI.Discussions.Helpers.$J(this.context.forumViewState.$E_0, 'NewPostLink');
    this.$1P_0 = SP.UI.Discussions.Helpers.$J(this.context.forumViewState.$E_0, 'RefreshLink');
    this.sortFilterPickerControl = new SP.UI.Discussions.SortFilterPickerControl();
    this.populateSortFilterItemList();
};
SP.UI.Discussions.HeaderBehavior.prototype = {
    context: null,
    sortFilterPickerControl: null,
    $1J_0: null,
    $1P_0: null,
    $35_0: 'None',
    attachEvents: function SP_UI_Discussions_HeaderBehavior$attachEvents() {
        var $v_0 = $get(this.$1J_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            $addHandler($v_0, 'click', this.$$d_onClickNewPostLink);
        }
        var $v_1 = $get(this.$1P_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            $addHandler($v_1, 'click', this.$$d_$2U_0);
        }
        this.sortFilterPickerControl.initialize();
    },
    render: function SP_UI_Discussions_HeaderBehavior$render(builder) {
        var $v_0 = this.context.ListSchema;

        if (!SP.UI.Discussions.Helpers.isAnonymousAccess(this.context) && !SP.UI.Discussions.Helpers.isNullOrUndefined($v_0) && $v_0.Toolbar !== this.$35_0) {
            var $v_1 = this.getNewPostUrl();

            builder.addCommunitiesCssClass('heroLinkContainer');
            builder.renderBeginTag('div');
            builder.addAttribute('id', this.$1J_0);
            builder.addAttribute('href', $v_1);
            builder.addCssClass('ms-textXLarge');
            builder.addCssClass('ms-heroCommandLink');
            builder.addAttribute('title', Strings.STS.L_SPDiscHeroLinkAltText);
            builder.renderBeginTag('a');
            builder.addCssClass('ms-list-addnew-imgSpan20');
            builder.renderBeginTag('span');
            builder.addCssClass('ms-list-addnew-img20');
            builder.addAttribute('src', GetThemedImageUrl('spcommon.png'));
            builder.renderBeginTag('img');
            builder.renderEndTag();
            builder.renderEndTag();
            builder.renderBeginTag('span');
            builder.writeEncoded(Strings.STS.L_SPDiscHeroLinkFormat);
            builder.renderEndTag();
            builder.renderEndTag();
            builder.addCssClass('ms-clear');
            builder.renderBeginTag('div');
            builder.renderEndTag();
            builder.renderEndTag();
        }
        builder.addCommunitiesCssClass('forumHeaderContainer');
        builder.renderBeginTag('div');
        this.sortFilterPickerControl.$1B_0 = true;
        this.sortFilterPickerControl.render(builder);
        builder.addAttribute('id', this.$1P_0);
        builder.addAttribute('href', 'javascript:;');
        builder.addAttribute('title', Strings.STS.L_SPDiscRefresh);
        builder.addCssClass('ms-floatRight');
        builder.addCommunitiesCssClass('refreshIcon-a');
        builder.renderBeginTag('a');
        builder.addAttribute('src', GetThemedImageUrl('spcommon.png'));
        builder.addCommunitiesCssClass('refreshIcon');
        builder.addAttribute('alt', Strings.STS.L_SPDiscRefresh);
        builder.addAttribute('title', Strings.STS.L_SPDiscRefresh);
        builder.renderBeginTag('img');
        builder.renderEndTag();
        builder.renderEndTag();
        builder.addCssClass('ms-clear');
        builder.renderBeginTag('div');
        builder.renderEndTag();
        builder.renderEndTag();
    },
    getNewPostUrl: function SP_UI_Discussions_HeaderBehavior$getNewPostUrl() {
        var $v_0 = this.context.listUrlDir + '/NewForm.aspx';
        var $v_1 = window.self.ajaxNavigate;

        $v_0 = SP.ScriptHelpers.replaceOrAddQueryString($v_0, 'Source', $v_1.get_href());
        return $v_0;
    },
    onClickNewPostLink: function SP_UI_Discussions_HeaderBehavior$onClickNewPostLink(evt) {
    },
    populateSortFilterItemList: function SP_UI_Discussions_HeaderBehavior$populateSortFilterItemList() {
        var $v_0 = [new SP.UI.Discussions.QueryOverrideItem(this.context, Strings.STS.L_SPDiscSortMostRecent, ''), new SP.UI.Discussions.QueryOverrideItem(this.context, Strings.STS.L_SPDiscSortUnanswered, '<Query><OrderBy UseIndexForOrderBy=\"TRUE\" Override=\"TRUE\"/><Where><Eq><FieldRef Name=\"IsAnswered\"/><Value Type=\"Integer\">0</Value></Eq></Where></Query>'), new SP.UI.Discussions.QueryOverrideItem(this.context, Strings.STS.L_SPDiscSortAnswered, '<Query><OrderBy UseIndexForOrderBy=\"TRUE\" Override=\"TRUE\"/><Where><Eq><FieldRef Name=\"IsAnswered\"/><Value Type=\"Integer\">1</Value></Eq></Where></Query>'), new SP.UI.Discussions.QueryOverrideItem(this.context, Strings.STS.L_SPDiscFilterFeatured, '<Query><OrderBy UseIndexForOrderBy=\"TRUE\" Override=\"TRUE\"/><Where><Eq><FieldRef Name=\"IsFeatured\"></FieldRef><Value Type=\"Integer\">1</Value></Eq></Where></Query>')];

        for (var $$arr_1 = $v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];

            this.sortFilterPickerControl.addItem($v_1);
        }
        if (!SP.UI.Discussions.Helpers.isAnonymousAccess(this.context)) {
            this.sortFilterPickerControl.insertItem(1, new SP.UI.Discussions.QueryOverrideItem(this.context, Strings.STS.L_SPDiscSortMyPosts, '<Query><OrderBy UseIndexForOrderBy=\"TRUE\" Override=\"TRUE\"/><Where><Eq><FieldRef Name=\"Author\"/><Value Type=\"Integer\"><UserID Type=\"Integer\"/></Value></Eq></Where></Query>'));
        }
    },
    $2U_0: function SP_UI_Discussions_HeaderBehavior$$2U_0($p0) {
        $p0.preventDefault();
        SP.UI.Discussions.Helpers.refreshCurrentPage(this.context);
    }
};
SP.UI.Discussions.Helpers = function SP_UI_Discussions_Helpers() {
};
SP.UI.Discussions.Helpers.authorFieldRenderCallback = function SP_UI_Discussions_Helpers$authorFieldRenderCallback(context) {
    return context.authorRenderCallbackDetail;
};
SP.UI.Discussions.Helpers.doesSchemaContainField = function SP_UI_Discussions_Helpers$doesSchemaContainField(schema, fieldName) {
    return !!SP.ScriptHelpers.getFieldFromSchema(schema, fieldName);
};
SP.UI.Discussions.Helpers.$1e = function SP_UI_Discussions_Helpers$$1e($p0, $p1) {
    var $v_0 = $p0.forumViewState;

    if ($v_0.get_activeElement()) {
        try {
            ($v_0.get_activeElement()).blur();
        }
        catch ($$e_3) { }
    }
    $p1.focus();
    $v_0.set_activeElement($p1);
};
SP.UI.Discussions.Helpers.setUserFieldProperty = function SP_UI_Discussions_Helpers$setUserFieldProperty(item, fieldName, propertyName, propertyValue) {
    var $v_0 = item[fieldName];
    var $v_1 = $v_0[0];

    $v_1[propertyName] = propertyValue;
};
SP.UI.Discussions.Helpers.getDocumentUrlWithoutFilters = function SP_UI_Discussions_Helpers$getDocumentUrlWithoutFilters(documentQueryStringPairs) {
    var $v_0 = document.URL;
    var $v_1 = $v_0.indexOf('?');

    if ($v_1 !== -1) {
        $v_0 = $v_0.substr(0, $v_1);
    }
    var $$dict_3 = documentQueryStringPairs;

    for (var $$key_4 in $$dict_3) {
        var $v_2 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };
        var $v_3 = $v_2.key;
        var $v_4 = $v_2.value;

        if (!$v_3.startsWith('FilterField') && !$v_3.startsWith('FilterValue') && $v_3 !== 'SortField' && $v_3 !== 'SortDir') {
            $v_0 = SP.ScriptHelpers.replaceOrAddQueryString($v_0, $v_3, $v_4);
        }
    }
    $v_0 = RemoveOnlyPagingArgs($v_0);
    return $v_0;
};
SP.UI.Discussions.Helpers.$2H = function SP_UI_Discussions_Helpers$$2H($p0, $p1) {
    return $get(SP.UI.Discussions.Helpers.$J($p0, $p1));
};
SP.UI.Discussions.Helpers.$J = function SP_UI_Discussions_Helpers$$J($p0, $p1) {
    return 'forum' + $p0 + '-' + $p1;
};
SP.UI.Discussions.Helpers.getFolderUrl = function SP_UI_Discussions_Helpers$getFolderUrl(context) {
    var $v_0 = [];

    FolderUrl(context.CurrentItem, context.ListSchema, $v_0);
    return $v_0.join('');
};
SP.UI.Discussions.Helpers.getListFilterOverrides = function SP_UI_Discussions_Helpers$getListFilterOverrides(queryPairs) {
    var $v_0 = new Array(0);
    var $v_1;

    for ($v_1 = 1; $v_1 < 256; $v_1++) {
        var $v_2 = 'FilterField' + $v_1.toString();
        var $v_3 = 'FilterValue' + $v_1.toString();
        var $v_4 = queryPairs[$v_2];
        var $v_5 = queryPairs[$v_3];

        if (SP.UI.Discussions.Helpers.isNullOrUndefined($v_4) || SP.UI.Discussions.Helpers.isNullOrUndefined($v_5)) {
            break;
        }
        else {
            Array.add($v_0, new SP.UI.Discussions.FilterOverride($v_4, $v_5));
        }
    }
    return $v_0;
};
SP.UI.Discussions.Helpers.getListSortOverride = function SP_UI_Discussions_Helpers$getListSortOverride(queryPairs) {
    var $v_0 = null;
    var $v_1 = queryPairs['SortField'];
    var $v_2 = queryPairs['SortDir'];

    if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1) && !SP.UI.Discussions.Helpers.isNullOrUndefined($v_2)) {
        $v_0 = new SP.UI.Discussions.SortOverride($v_1, $v_2);
    }
    return $v_0;
};
SP.UI.Discussions.Helpers.$1f = function SP_UI_Discussions_Helpers$$1f($p0, $p1) {
    var $v_0 = null;
    var $v_1 = $p0.forumViewState.$6_0;

    for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $v_1[$v_2];

        if ($v_4.jsonItem['ID'] === $p1) {
            $v_0 = $v_4;
            break;
        }
    }
    return $v_0;
};
SP.UI.Discussions.Helpers.$2M = function SP_UI_Discussions_Helpers$$2M($p0) {
    var $v_0 = $p0.clvp;

    return $v_0.RefreshCurrent();
};
SP.UI.Discussions.Helpers.$U = function SP_UI_Discussions_Helpers$$U($p0) {
    var $v_0 = null;
    var $v_1 = $p0.forumViewState.$6_0;

    for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $v_1[$v_2];

        if ($v_4.$4_0) {
            $v_0 = $v_4;
            break;
        }
    }
    return $v_0;
};
SP.UI.Discussions.Helpers.$1g = function SP_UI_Discussions_Helpers$$1g($p0, $p1) {
    var $v_0 = null;

    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($p1)) {
        var $v_1 = '<View><ViewFields>';
        var $v_2 = ['ID', 'PermMask', 'Created', 'Modified', 'Title', 'FSObjType', 'ContentTypeId', 'FileRef'];

        for (var $$arr_5 = $v_2, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];

            $v_1 += '<FieldRef Name=\"' + $v_3 + '\"/>';
        }
        for (var $$arr_9 = $p0.ListSchema.Field, $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
            var $v_4 = $$arr_9[$$idx_B];

            if (!Array.contains($v_2, $v_4.Name)) {
                $v_1 += '<FieldRef Name=\"' + $v_4.Name + '\"/>';
            }
        }
        $v_1 += '</ViewFields>';
        $v_1 += $p1;
        $v_1 += '</View>';
        $v_0 = $v_1;
    }
    return $v_0;
};
SP.UI.Discussions.Helpers.$L = function SP_UI_Discussions_Helpers$$L($p0) {
    return $p0.BaseViewID === 3 || $p0.BaseViewID === 7;
};
SP.UI.Discussions.Helpers.isNullOrUndefined = function SP_UI_Discussions_Helpers$isNullOrUndefined(obj) {
    var $v_0 = null;

    return obj === $v_0 || typeof obj === 'undefined';
};
SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty = function SP_UI_Discussions_Helpers$isNullOrUndefinedOrEmpty(str) {
    var $v_0 = null;
    var $v_1 = str;

    return $v_1 === $v_0 || typeof $v_1 === 'undefined' || !str.length;
};
SP.UI.Discussions.Helpers.refreshCurrentPage = function SP_UI_Discussions_Helpers$refreshCurrentPage(context) {
    var $v_0 = SP.ScriptHelpers.getDocumentQueryPairs();

    if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_0['CategoryID'])) {
        var $v_1 = window.self.ajaxNavigate;

        SubmitFormPost($v_1.get_href());
    }
    else {
        context.forumViewState.$m_0(0);
    }
};
SP.UI.Discussions.Helpers.checkForImageAndRemoveHtml = function SP_UI_Discussions_Helpers$checkForImageAndRemoveHtml(text, hasImage) {
    var $v_0 = new RegExp('<img[^>]+>', 'g');

    hasImage.val = text.search($v_0) !== -1;
    if (hasImage.val) {
        text = text.replace($v_0, '');
    }
    var $v_1 = document.createElement('div');

    $v_1.innerHTML = text;
    SP.ScriptHelpers.removeStyleChildren($v_1);
    return GetInnerText($v_1);
};
SP.UI.Discussions.Helpers.sendRefreshRequest = function SP_UI_Discussions_Helpers$sendRefreshRequest(refreshUrl, requestStateChangeCallback) {
    var $v_0 = new XMLHttpRequest();
    var $v_1 = '';
    var $v_2 = GetUrlKeyValue('RootFolder', true, refreshUrl);

    if ($v_2.length > 0) {
        $v_1 = $v_1 + '&InplRootFolder=' + $v_2;
        refreshUrl = RemoveUrlKeyValue('RootFolder', refreshUrl);
    }
    $v_0.open('POST', refreshUrl, true);
    $v_0.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    $v_0.onreadystatechange = requestStateChangeCallback;
    $v_0.send($v_1);
    return $v_0;
};
SP.UI.Discussions.Helpers.showScriptError = function SP_UI_Discussions_Helpers$showScriptError(message) {
    alert(message);
};
SP.UI.Discussions.Helpers.$n = function SP_UI_Discussions_Helpers$$n() {
    if (typeof ProcessImn === 'function') {
        ProcessImn();
    }
};
SP.UI.Discussions.Helpers.parseDateIso8601 = function SP_UI_Discussions_Helpers$parseDateIso8601(dateTime) {
    return Date.parseInvariant(dateTime.replace('T', ' '));
};
SP.UI.Discussions.Helpers.isAnonymousAccess = function SP_UI_Discussions_Helpers$isAnonymousAccess(context) {
    return SP.UI.Discussions.Helpers.isNullOrUndefined(context.CurrentUserId) || context.CurrentUserId === -1;
};
SP.UI.Discussions.FilterOverride = function SP_UI_Discussions_FilterOverride(fieldName, fieldValue) {
    this.$e_0 = fieldName;
    this.$1d_0 = fieldValue;
};
SP.UI.Discussions.FilterOverride.prototype = {
    $e_0: null,
    $1d_0: null,
    get_fieldName: function SP_UI_Discussions_FilterOverride$get_fieldName() {
        return this.$e_0;
    },
    get_fieldValue: function SP_UI_Discussions_FilterOverride$get_fieldValue() {
        return this.$1d_0;
    }
};
SP.UI.Discussions.SortOverride = function SP_UI_Discussions_SortOverride(fieldName, direction) {
    this.$e_0 = fieldName;
    this.$1A_0 = direction;
};
SP.UI.Discussions.SortOverride.prototype = {
    $e_0: null,
    $1A_0: null,
    get_direction: function SP_UI_Discussions_SortOverride$get_direction() {
        return this.$1A_0;
    },
    get_fieldName: function SP_UI_Discussions_SortOverride$get_fieldName() {
        return this.$e_0;
    }
};
SP.UI.Discussions.ManagementViewRenderer = function SP_UI_Discussions_ManagementViewRenderer(listTemplateType, baseViewID) {
    this.$$d_$1l_0 = Function.createDelegate(this, this.$1l_0);
    this.$v_0 = listTemplateType;
    this.$T_0 = baseViewID;
};
SP.UI.Discussions.ManagementViewRenderer.prototype = {
    $T_0: 0,
    $v_0: 0,
    createRenderingContextOverrides: function SP_UI_Discussions_ManagementViewRenderer$createRenderingContextOverrides() {
        var $v_0 = new ListContext();

        $v_0.BaseViewID = this.$T_0;
        $v_0.ListTemplateType = this.$v_0;
        $v_0.OnPreRender = this.$$d_$1l_0;
        return $v_0;
    },
    $1l_0: function SP_UI_Discussions_ManagementViewRenderer$$1l_0($p0) {
        var $v_0 = SP.UI.Discussions.Helpers.doesSchemaContainField($p0.ListSchema, 'Title') || SP.UI.Discussions.Helpers.doesSchemaContainField($p0.ListSchema, 'LinkTitle');
        var $v_1 = SP.UI.Discussions.Helpers.doesSchemaContainField($p0.ListSchema, 'Body');
        var $v_2 = $p0.ListData['Row'];

        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3];

            if ($v_4['FSObjType'] === '0' && $v_0) {
                $v_4['Title'] = Strings.STS.L_SPDiscReply;
            }
            if ($v_1) {
                var $v_5 = $v_4['Body'];

                $v_4['Body'] = STSHtmlEncode(SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis($v_5, 180));
            }
        }
    }
};
SP.UI.Discussions.PostBehavior = function SP_UI_Discussions_PostBehavior(context, jsonItem) {
    this.$$d_$2P_0 = Function.createDelegate(this, this.$2P_0);
    this.$$d_$2Q_0 = Function.createDelegate(this, this.$2Q_0);
    this.$$d_$2S_0 = Function.createDelegate(this, this.$2S_0);
    this.$$d_$2R_0 = Function.createDelegate(this, this.$2R_0);
    this.$$d_$2Y_0 = Function.createDelegate(this, this.$2Y_0);
    this.$$d_$2q_0 = Function.createDelegate(this, this.$2q_0);
    this.$$d_$2X_0 = Function.createDelegate(this, this.$2X_0);
    this.$$d_$2g_0 = Function.createDelegate(this, this.$2g_0);
    this.$0_0 = context;
    this.jsonItem = jsonItem;
    this.$4_0 = jsonItem['FSObjType'] === '1';
    if (!SP.UI.Discussions.Helpers.$L(this.$0_0)) {
        this.commandBar = new SP.UI.CommandBar();
        this.populateCommandBar();
    }
    this.$1q_0 = SP.UI.Discussions.PostBehavior.$K;
    SP.UI.Discussions.PostBehavior.$K++;
    this.$9_0 = new SP.UI.Discussions.ReplyBoxControl(this, null, true, false, false);
    this.$9_0.$h_0 = true;
    this.$9_0.$W_0 = this.$$d_$2g_0;
    this.$Q_0 = new SP.UI.Discussions.ReplyBoxControl(this, null, false, true, true);
    this.$Q_0.$h_0 = true;
    this.$Q_0.$W_0 = this.$$d_$2X_0;
    if (this.$4_0) {
        var $v_0 = SP.ScriptHelpers.getDocumentQueryPairs();
        var $v_1 = $v_0['PageFirstRow'];

        if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_1)) {
            var $v_2 = Number.parseInvariant($v_1);

            if ($v_2 > 1) {
                this.$t_0 = true;
            }
        }
        if (this.$0_0.ListData['Row'].length > 1) {
            this.repliesSortPicker = new SP.UI.Discussions.SortFilterPickerControl();
            this.repliesSortPicker.$14_0 = true;
            this.populateRepliesSortPicker();
        }
    }
    this.$R_0 = [];
};
SP.UI.Discussions.PostBehavior.prototype = {
    commandBar: null,
    jsonItem: null,
    repliesSortPicker: null,
    $4_0: false,
    $k_0: false,
    $0_0: null,
    $9_0: null,
    $Q_0: null,
    $D_0: null,
    $P_0: null,
    $t_0: false,
    $i_0: false,
    $1I_0: false,
    $y_0: 0,
    $1q_0: 0,
    $R_0: null,
    get_context: function SP_UI_Discussions_PostBehavior$get_context() {
        return this.$0_0;
    },
    get_commandBar: function SP_UI_Discussions_PostBehavior$get_commandBar() {
        return this.commandBar;
    },
    get_bestResponseIsVisible: function SP_UI_Discussions_PostBehavior$get_bestResponseIsVisible() {
        return this.$4_0 && !this.get_$B_0() && !SP.UI.Discussions.Helpers.$L(this.$0_0) && SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'BestAnswerId') && !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['BestAnswerId']);
    },
    get_itemID: function SP_UI_Discussions_PostBehavior$get_itemID() {
        return this.jsonItem['ID'];
    },
    get_$1k_0: function SP_UI_Discussions_PostBehavior$get_$1k_0() {
        return this.$k_0;
    },
    set_$1k_0: function SP_UI_Discussions_PostBehavior$set_$1k_0($p0) {
        if (this.$k_0 !== $p0) {
            this.$k_0 = $p0;
            this.$1Y_0();
        }
        return $p0;
    },
    get_isRenderedByRootPost: function SP_UI_Discussions_PostBehavior$get_isRenderedByRootPost() {
        var $v_0 = false;
        var $v_1 = SP.UI.Discussions.Helpers.$U(this.$0_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            if ($v_1.$D_0 === this) {
                $v_0 = true;
            }
        }
        return $v_0;
    },
    get_isRoot: function SP_UI_Discussions_PostBehavior$get_isRoot() {
        return this.$4_0;
    },
    get_jsonItem: function SP_UI_Discussions_PostBehavior$get_jsonItem() {
        return this.jsonItem;
    },
    get_rootElementID: function SP_UI_Discussions_PostBehavior$get_rootElementID() {
        return this.getPostElementID('Root');
    },
    get_topicListViewUrl: function SP_UI_Discussions_PostBehavior$get_topicListViewUrl() {
        return this.$0_0.listUrlDir;
    },
    get_topicLinkUrl: function SP_UI_Discussions_PostBehavior$get_topicLinkUrl() {
        return SP.UI.Discussions.Helpers.getFolderUrl(this.$0_0);
    },
    get_$B_0: function SP_UI_Discussions_PostBehavior$get_$B_0() {
        return this.$t_0;
    },
    set_$B_0: function SP_UI_Discussions_PostBehavior$set_$B_0($p0) {
        if (this.$t_0 !== $p0) {
            this.$t_0 = $p0;
            if ($p0 && this.$9_0.$7_0) {
                this.$9_0.hide(false);
            }
            this.$1Y_0();
        }
        return $p0;
    },
    animateFadeIn: function SP_UI_Discussions_PostBehavior$animateFadeIn(deferTime) {
        var $v_0 = $get(this.get_rootElementID());

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            SetOpacity($v_0, 0);
            var $$t_3 = this;

            window.setTimeout(function() {
                SPAnimationUtility.BasicAnimator.FadeIn($v_0, null, null);
                if ($$t_3.$1I_0) {
                    var $v_1 = $get($$t_3.getPostElementID('PopularityBar'));

                    if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
                        $v_1.style.width = '0px';
                        SPAnimationUtility.BasicAnimator.Resize($v_1, null, $$t_3.$y_0, null, null);
                    }
                    $$t_3.$1I_0 = false;
                }
            }, deferTime);
        }
    },
    clone: function SP_UI_Discussions_PostBehavior$clone() {
        var $v_0 = this.$0_0.forumViewState;

        return $v_0.createPostBehavior(this.$0_0, this.jsonItem);
    },
    initialize: function SP_UI_Discussions_PostBehavior$initialize() {
        if (this.$i_0) {
            return;
        }
        if (!this.get_$B_0()) {
            if (this.commandBar) {
                this.commandBar.attachEvents();
            }
        }
        if (this.get_bestResponseIsVisible()) {
            var $v_0 = this.jsonItem['BestAnswerId'];
            var $v_1 = SP.UI.Discussions.Helpers.$1f(this.$0_0, $v_0);

            if ($v_1) {
                this.$D_0 = $v_1.clone();
            }
            if (!this.$D_0) {
                ExecuteOrDelayUntilScriptLoaded(this.$$d_$2q_0, 'inplview.js');
            }
            else {
                this.$1R_0();
            }
        }
        if (this.$4_0 && !SP.UI.Discussions.Helpers.$L(this.$0_0)) {
            var $v_2 = $get(this.getPostElementID('Expander'));

            if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_2)) {
                $addHandler($v_2, 'click', this.$$d_$2Y_0);
            }
            if (this.repliesSortPicker) {
                this.repliesSortPicker.initialize();
            }
        }
        this.$2D_0();
        if (this.$k_0) {
            this.$Q_0.show(true);
            var $v_3 = SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['TrimmedBody']) ? 'Body' : 'TrimmedBody';

            this.$Q_0.set_textValue(this.jsonItem[$v_3]);
        }
        this.$i_0 = true;
    },
    detachEvents: function SP_UI_Discussions_PostBehavior$detachEvents() {
    },
    getPostElementID: function SP_UI_Discussions_PostBehavior$getPostElementID(elementID) {
        return SP.UI.Discussions.Helpers.$J(this.$0_0.forumViewState.$E_0, 'Post' + this.$1q_0 + '-' + elementID);
    },
    getBestResponsePostElementID: function SP_UI_Discussions_PostBehavior$getBestResponsePostElementID() {
        return SP.UI.Discussions.Helpers.$J(this.$0_0.forumViewState.$E_0, 'Post-BestResponsePlaceHolder');
    },
    refresh: function SP_UI_Discussions_PostBehavior$refresh() {
        if (this.$4_0) {
            SP.UI.Discussions.Helpers.refreshCurrentPage(this.$0_0);
        }
        else {
            this.$0_0.forumViewState.refreshSinglePost(this.get_itemID());
        }
    },
    render: function SP_UI_Discussions_PostBehavior$render(builder, renderOptions) {
        this.$0_0.CurrentItem = this.jsonItem;
        if (SP.UI.Discussions.PostBehavior.DiscussionHelpers.$1O) {
            SP.UI.Discussions.PostBehavior.DiscussionHelpers.$32();
            SP.UI.Discussions.PostBehavior.DiscussionHelpers.$1O = false;
        }
        if (SP.UI.Discussions.Helpers.$L(this.$0_0)) {
            this.$2w_0(builder, renderOptions);
        }
        else {
            this.$20_0(builder, renderOptions);
        }
    },
    transferState: function SP_UI_Discussions_PostBehavior$transferState(destPost) {
        destPost.set_$B_0(this.get_$B_0());
        if (!this.get_$B_0()) {
            if (!SP.UI.Discussions.Helpers.isNullOrUndefined(this.commandBar)) {
                for (var $v_0 = 0, $v_1 = (this.commandBar.get_commands()).length; $v_0 < $v_1 && $v_0 < this.commandBar.get_dropDownThreshold(); $v_0++) {
                    var $v_2 = (this.commandBar.get_commands())[$v_0];
                    var $v_3 = this.commandBar.findCommandByName($v_2.get_name());

                    if ($v_3) {
                        $v_2.transferState($v_3);
                    }
                }
            }
            this.$9_0.transferState(destPost.$9_0);
        }
    },
    populateCommandBar: function SP_UI_Discussions_PostBehavior$populateCommandBar() {
        if (!SP.UI.Discussions.Helpers.isAnonymousAccess(this.$0_0)) {
            var $v_0 = SP.ScriptHelpers.getListLevelPermissionMask(this.jsonItem);
            var $v_1 = SP.ScriptHelpers.hasPermission($v_0, 2);
            var $v_2 = SP.ScriptHelpers.hasPermission($v_0, 2048);
            var $v_3 = SP.ScriptHelpers.hasPermission($v_0, 256);
            var $v_4 = SP.ScriptHelpers.hasPermission($v_0, 4);
            var $v_5 = SP.ScriptHelpers.hasPermission($v_0, 8);

            if ($v_1) {
                this.commandBar.addCommand(new SP.UI.Discussions.ReplyAction(this));
            }
            if (SP.ScriptHelpers.getUserFieldProperty(this.jsonItem, 'Author', 'id') === this.$0_0.ListSchema.Userid && $v_4 || $v_3) {
                this.commandBar.addCommand(new SP.UI.Discussions.EditAction(this));
            }
            if (!this.$4_0) {
                var $v_6 = SP.UI.Discussions.Helpers.$U(this.$0_0);

                if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_6) && (SP.ScriptHelpers.getUserFieldProperty($v_6.jsonItem, 'Author', 'id') === this.$0_0.ListSchema.Userid && $v_4 || $v_3) && SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'BestAnswerId')) {
                    var $v_7 = $v_6.jsonItem['BestAnswerId'] === this.jsonItem['ID'];

                    this.commandBar.addCommand(new SP.UI.Discussions.SetBestResponseAction(this, $v_7));
                }
            }
            else {
                this.commandBar.addCommand(new SP.UI.Discussions.AlertMeAction(this));
            }
            if ($v_3 && this.$4_0) {
                var $v_8 = this.jsonItem['IsFeatured.value'];

                if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_8)) {
                    this.commandBar.addCommand(new SP.UI.Discussions.MarkAsFeaturedAction(this, $v_8));
                }
            }
            if (SP.ScriptHelpers.getUserFieldProperty(this.jsonItem, 'Author', 'id') === this.$0_0.ListSchema.Userid && $v_5 || $v_3) {
                this.commandBar.addCommand(new SP.UI.Discussions.DeleteAction(this));
            }
        }
    },
    populateRepliesSortPicker: function SP_UI_Discussions_PostBehavior$populateRepliesSortPicker() {
        var $v_0 = [new SP.UI.Discussions.ViewSwitchItem(this.$0_0, Strings.STS.L_SPDiscSortDatePosted, 2, 'Flat.aspx'), new SP.UI.Discussions.QueryOverrideItem(this.$0_0, Strings.STS.L_SPDiscSortNewest, '<Query><OrderBy><FieldRef Name=\"Created\" Ascending=\"FALSE\"></FieldRef></OrderBy></Query>')];

        for (var $$arr_1 = $v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];

            this.repliesSortPicker.addItem($v_1);
        }
    },
    renderAuthorCardMetaData: function SP_UI_Discussions_PostBehavior$renderAuthorCardMetaData(builder) {
    },
    renderRootPostMetaData: function SP_UI_Discussions_PostBehavior$renderRootPostMetaData(builder) {
    },
    populateFolderMetalineItems: function SP_UI_Discussions_PostBehavior$populateFolderMetalineItems(renderOptions) {
        Array.add(this.$R_0, this.$2I_0());
        if (renderOptions.renderDate) {
            var $v_0 = this.$2J_0();

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
                Array.add(this.$R_0, $v_0);
            }
            Array.add(this.$R_0, this.$2K_0());
        }
    },
    insertFolderMetalineItem: function SP_UI_Discussions_PostBehavior$insertFolderMetalineItem(index, item) {
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(item)) {
            Array.insert(this.$R_0, index, item);
        }
    },
    $2v_0: function SP_UI_Discussions_PostBehavior$$2v_0($p0, $p1) {
        this.populateFolderMetalineItems($p1);
        $p0.addCssClass('ms-comm-metalineList ms-noList');
        $p0.renderBeginTag('ul');
        for (var $v_0 = 0, $v_1 = this.$R_0.length; $v_0 < $v_1; $v_0++) {
            if ($v_0 !== $v_1 - 1) {
                $p0.addCssClass('ms-comm-metalineItemSeparator');
            }
            $p0.addCssClass('ms-comm-metalineItem');
            $p0.renderBeginTag('li');
            $p0.write(this.$R_0[$v_0]);
            $p0.renderEndTag();
        }
        $p0.renderEndTag();
    },
    $2K_0: function SP_UI_Discussions_PostBehavior$$2K_0() {
        var $v_0 = new SP.HtmlBuilder();

        $v_0.renderBeginTag('span');
        if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'LastReplyBy') && !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['LastReplyBy'])) {
            $v_0.write(spMgr.RenderFieldByName(this.$0_0, 'DiscussionLastUpdated', this.jsonItem, this.$0_0.ListSchema));
        }
        else {
            $v_0.write(spMgr.RenderFieldByName(this.$0_0, 'Created', this.jsonItem, this.$0_0.ListSchema));
        }
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $2J_0: function SP_UI_Discussions_PostBehavior$$2J_0() {
        var $v_0 = new SP.HtmlBuilder();

        if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'LastReplyBy') && !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['LastReplyBy'])) {
            $v_0.renderBeginTag('span');
            $v_0.write(String.format(STSHtmlEncode(Strings.STS.L_SPDiscLastReply), spMgr.RenderFieldByName(this.$0_0, 'LastReplyBy', this.jsonItem, this.$0_0.ListSchema)));
            $v_0.renderEndTag();
        }
        return $v_0.toString();
    },
    $2I_0: function SP_UI_Discussions_PostBehavior$$2I_0() {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = SP.ScriptHelpers.getFieldFromSchema(this.$0_0.ListSchema, 'Author');

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            $v_1.WithPicture = 0;
            $v_1.WithPictureDetail = 0;
            $v_0.renderBeginTag('span');
            $v_0.write(String.format(STSHtmlEncode(Strings.STS.L_SPDiscInitialPost), spMgr.RenderFieldByName(this.$0_0, 'Author', this.jsonItem, this.$0_0.ListSchema)));
            $v_0.renderEndTag();
        }
        return $v_0.toString();
    },
    $2D_0: function SP_UI_Discussions_PostBehavior$$2D_0() {
        var $v_0 = $get(this.getPostElementID('ReplyToLink'));

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            var $$t_4 = this;

            EnsureScriptFunc('callout.js', 'CalloutManager', function() {
                var $v_1 = new SP.HtmlBuilder();

                $v_1.addAttribute('id', $$t_4.getPostElementID('ReplyToCalloutPlaceholder'));
                $v_1.renderBeginTag('div');
                $v_1.renderEndTag();
                var $v_2 = new CalloutOptions();

                $v_2.content = $v_1.toString();
                $v_2.launchPoint = $v_0;
                $v_2.ID = $$t_4.getPostElementID('ReplyToCallout');
                $v_2.onOpeningCallback = $$t_4.$$d_$2R_0;
                try {
                    CalloutManager.createNew($v_2);
                }
                catch ($$e_3) { }
            });
        }
    },
    $2s_0: function SP_UI_Discussions_PostBehavior$$2s_0($p0) {
        var $v_0 = SP.ScriptHelpers.getFieldFromSchema(this.$0_0.ListSchema, 'Author');

        if ($v_0) {
            $v_0.WithPictureDetail = 0;
            $v_0.PictureOnly = 1;
            $v_0.PictureSize = 'Size_48px';
            $p0.addCssClass('ms-comm-authorPicture');
            $p0.renderBeginTag('div');
            $p0.write(spMgr.RenderFieldByName(this.$0_0, 'Author', this.jsonItem, this.$0_0.ListSchema));
            $p0.renderEndTag();
        }
    },
    $2t_0: function SP_UI_Discussions_PostBehavior$$2t_0($p0) {
        var $v_0 = SP.ScriptHelpers.getFieldFromSchema(this.$0_0.ListSchema, 'Author');

        if ($v_0) {
            $v_0.WithPictureDetail = 0;
            $v_0.PictureOnly = 0;
            $v_0.WithPicture = 0;
            $v_0.NameWithContactCard = 1;
            if (this.$4_0 || this.get_isRenderedByRootPost()) {
                $p0.addCssClass('ms-textXLarge');
            }
            $p0.addCssClass('ms-comm-authorTitle');
            $p0.renderBeginTag('div');
            $p0.write(spMgr.RenderFieldByName(this.$0_0, 'Author', this.jsonItem, this.$0_0.ListSchema));
            $p0.renderEndTag();
        }
    },
    $20_0: function SP_UI_Discussions_PostBehavior$$20_0($p0, $p1) {
        this.$0_0.CurrentItem = this.jsonItem;
        if ($p1.get_$s_0()) {
            $p0.addCommunitiesCssClass('postListItem');
            if (this.$4_0) {
                $p0.addCommunitiesCssClass('postRootContainer');
            }
            else {
                $p0.addCommunitiesCssClass('postReplyListItem');
            }
            $p0.addAttribute('id', this.getPostElementID('Root'));
            $p0.renderBeginTag('li');
        }
        if ($p1.get_$1i_0()) {
            $p0.addCommunitiesCssClass('postMainContainer');
            $p0.renderBeginTag('div');
        }
        if (this.$4_0) {
            this.renderRootPostMetaData($p0);
            $p0.addCommunitiesCssClass(this.get_$B_0() ? 'threadSubjectContainerCollapsed' : 'threadSubjectContainer');
            $p0.renderBeginTag('div');
            this.$21_0($p0, false, $p1);
            if ($p1.get_$34_0()) {
                $p0.addCssClass('ms-floatRight');
                $p0.addCommunitiesCssClass('postExpander');
                $p0.addAttribute('id', this.getPostElementID('Expander'));
                $p0.addAttribute('title', this.get_$B_0() ? Strings.STS.L_SPDiscExpandPostAltText : Strings.STS.L_SPDiscCollapsePostAltText);
                $p0.addAttribute('href', 'javascript:;');
                $p0.renderBeginTag('a');
                $p0.addCssClass(this.get_$B_0() ? 'ms-comm-postExpanderExpandContainer' : 'ms-comm-postExpanderCollapseContainer');
                $p0.renderBeginTag('span');
                $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
                $p0.addCssClass(this.get_$B_0() ? 'ms-comm-postExpanderExpand' : 'ms-comm-postExpanderCollapse');
                $p0.renderBeginTag('img');
                $p0.renderEndTag();
                $p0.renderEndTag();
                $p0.renderEndTag();
            }
            this.$1z_0($p0, 'ms-metadata ms-comm-statsInlineContainer', 'ms-comm-statsInline', 'ms-comm-reputationNumbers');
            $p0.renderEndTag();
        }
        if (!this.get_$B_0()) {
            if (this.$4_0) {
                $p0.addCssClass('ms-comm-rootBestBackground');
                $p0.addCssClass('ms-comm-rootPostContainer');
                $p0.renderBeginTag('div');
            }
            $p0.addCssClass('ms-table');
            $p0.renderBeginTag('div');
            $p0.addCssClass('ms-tableCell');
            $p0.renderBeginTag('div');
            this.$2s_0($p0);
            $p0.renderEndTag();
            $p0.addCssClass('ms-verticalAlignTop');
            $p0.addCssClass('ms-tableCell');
            $p0.addCssClass('ms-fullWidth');
            $p0.renderBeginTag('div');
            this.$2t_0($p0);
            this.renderAuthorCardMetaData($p0);
            if ($p1.get_$31_0()) {
                this.$30_0($p0);
            }
            $p0.addAttribute('class', 'ms-core-defaultFont');
            $p0.renderBeginTag('div');
            this.$1t_0($p0, false, $p1);
            this.$2z_0($p0);
            if ($p1.get_$1w_0()) {
                this.$1w_0($p0);
            }
            $p0.renderEndTag();
            $p0.renderBeginTag('div');
            $p0.addCommunitiesCssClass('postReplyContainer');
            $p0.addAttribute('id', this.getPostElementID('ReplyContainer'));
            $p0.renderBeginTag('div');
            $p0.renderEndTag();
            $p0.renderEndTag();
            $p0.renderEndTag();
            $p0.renderEndTag();
            if ($p1.get_$1R_0() && this.get_bestResponseIsVisible()) {
                $p0.addCssClass('ms-comm-bestResponseDividerHr');
                $p0.renderBeginTag('hr');
                $p0.renderEndTag();
                $p0.addCommunitiesCssClass('bestResponseContainer');
                $p0.addCommunitiesCssClass('postMainContainer');
                $p0.addAttribute('id', this.getBestResponsePostElementID());
                $p0.renderBeginTag('div');
                $p0.addCssClass('ms-textLarge');
                $p0.addCommunitiesCssClass('bestPostHeader');
                $p0.renderBeginTag('div');
                $p0.addCommunitiesCssClass('bestResponseIcon-span');
                $p0.renderBeginTag('span');
                $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
                $p0.addCommunitiesCssClass('bestResponseIcon');
                $p0.renderBeginTag('img');
                $p0.renderEndTag();
                $p0.renderEndTag();
                $p0.writeEncoded(Strings.STS.L_SPDiscBestHeader);
                $p0.renderEndTag();
                $p0.renderEndTag();
            }
            if (this.$4_0) {
                $p0.renderEndTag();
            }
        }
        if ($p1.get_$1i_0()) {
            $p0.renderEndTag();
        }
        if ($p1.get_$s_0()) {
            $p0.renderEndTag();
            if (this.$4_0) {
                $p0.addCssClass('ms-comm-allRepliesHeader');
                $p0.renderBeginTag('li');
                if (this.repliesSortPicker) {
                    var $v_0 = new SP.HtmlBuilder();

                    $v_0.addCssClass('ms-textLarge');
                    $v_0.renderBeginTag('span');
                    $v_0.writeEncoded(Strings.STS.L_SPDiscAllRepliesLabel);
                    $v_0.renderEndTag();
                    $p0.addCommunitiesCssClass('replyHeader');
                    $p0.renderBeginTag('div');
                    $p0.write($v_0.toString());
                    $p0.renderEndTag();
                    this.repliesSortPicker.render($p0);
                }
                $p0.renderEndTag();
            }
        }
    },
    $30_0: function SP_UI_Discussions_PostBehavior$$30_0($p0) {
        var $v_0 = SP.UI.Discussions.Helpers.$U(this.$0_0);

        if (!this.$4_0 && !SP.UI.Discussions.Helpers.isNullOrUndefined(this.jsonItem['ParentItemEditor']) && !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['ParentItemID']) && !SP.UI.Discussions.Helpers.isNullOrUndefined($v_0) && this.jsonItem['ParentItemID'] !== $v_0.get_itemID()) {
            var $v_1 = Strings.STS.L_SPDiscRepliedToLabel;
            var $v_2 = SP.ScriptHelpers.getUserFieldProperty(this.jsonItem, 'ParentItemEditor', 'title');
            var $v_3 = new SP.HtmlBuilder();

            $v_3.addAttribute('href', 'javascript:;');
            $v_3.addAttribute('id', this.getPostElementID('ReplyToLink'));
            $v_3.addCssClass('ms-bold');
            $v_3.addCssClass('ms-subtleLink');
            $v_3.renderBeginTag('a');
            $v_3.writeEncoded(String.format(Strings.STS.L_SPDiscRepliedToLink, $v_2));
            $v_3.renderEndTag();
            $p0.addCssClass('ms-metadata');
            $p0.addCssClass('ms-textSmall');
            $p0.addCssClass('ms-comm-replyToLink');
            $p0.renderBeginTag('div');
            $p0.write(String.format($v_1, $v_3.toString()));
            $p0.renderEndTag();
        }
    },
    $2w_0: function SP_UI_Discussions_PostBehavior$$2w_0($p0, $p1) {
        if ($p1.get_$s_0()) {
            $p0.addCommunitiesCssClass('postListItem');
            $p0.addAttribute('id', this.getPostElementID('Root'));
            $p0.renderBeginTag('li');
        }
        $p0.addAttribute('title', STSHtmlEncode(this.jsonItem['Title']));
        $p0.addCssClass('ms-accessible');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        this.$2y_0($p0);
        $p0.addCommunitiesCssClass('postMainContainer');
        $p0.addCommunitiesCssClass('postSubjectColumn');
        $p0.renderBeginTag('div');
        this.$21_0($p0, true, $p1);
        this.$1t_0($p0, true, $p1);
        $p0.addCssClass('ms-clear');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        $p0.addCssClass('ms-metadata');
        $p0.renderBeginTag('div');
        this.$2v_0($p0, $p1);
        $p0.renderEndTag();
        $p0.renderEndTag();
        if ($p1.get_$s_0()) {
            $p0.renderEndTag();
        }
    },
    $2P_0: function SP_UI_Discussions_PostBehavior$$2P_0($p0, $p1) {
        var $v_0 = this.jsonItem['BestAnswerId'];
        var $v_1 = $p1['Row'];

        for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
            var $v_4 = $v_1[$v_2];

            if ($v_4['ID'] === $v_0) {
                var $v_5 = this.$0_0.forumViewState;

                this.$D_0 = $v_5.createPostBehavior(this.$0_0, $v_4);
                this.$1R_0();
            }
        }
    },
    $2Q_0: function SP_UI_Discussions_PostBehavior$$2Q_0($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1);
    },
    $2R_0: function SP_UI_Discussions_PostBehavior$$2R_0($p0) {
        if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'ParentItemID') && !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['ParentItemID'])) {
            var $v_0 = this.jsonItem['ParentItemID'];

            if (!this.$P_0) {
                this.$P_0 = SP.UI.Discussions.Helpers.$1f(this.$0_0, $v_0);
            }
            if (!this.$P_0) {
                var $v_1 = SP.UI.Discussions.AsyncRefreshRequest.createSingleItemRefreshRequest(this.$0_0, $v_0);

                $v_1.$G_0 = this.$$d_$2S_0;
                $v_1.$I_0 = this.$$d_$2Q_0;
                $v_1.start();
            }
            else {
                this.$1u_0();
            }
        }
    },
    $2S_0: function SP_UI_Discussions_PostBehavior$$2S_0($p0, $p1) {
        var $v_0 = this.jsonItem['ParentItemID'];
        var $v_1 = $p1['Row'];

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
                var $v_4 = $v_1[$v_2];

                if ($v_4['ID'] === $v_0) {
                    var $v_5 = this.$0_0.forumViewState;

                    this.$P_0 = $v_5.createPostBehavior(this.$0_0, $v_4);
                    this.$1u_0();
                    break;
                }
            }
        }
    },
    $2q_0: function SP_UI_Discussions_PostBehavior$$2q_0() {
        var $v_0 = this.jsonItem['BestAnswerId'];
        var $v_1 = SP.UI.Discussions.AsyncRefreshRequest.createSingleItemRefreshRequest(this.$0_0, $v_0);

        $v_1.$G_0 = this.$$d_$2P_0;
        $v_1.$I_0 = this.$$d_$2Q_0;
        $v_1.start();
    },
    $2z_0: function SP_UI_Discussions_PostBehavior$$2z_0($p0) {
        $p0.addCssClass('ms-metadata');
        $p0.addCssClass('ms-comm-cmdSpaceListItem');
        $p0.renderBeginTag('span');
        var $v_0 = spMgr.RenderFieldByName(this.$0_0, 'Created', this.jsonItem, this.$0_0.ListSchema);

        $p0.write($v_0);
        $p0.renderEndTag();
    },
    $1t_0: function SP_UI_Discussions_PostBehavior$$1t_0($p0, $p1, $p2) {
        if ($p1) {
            if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['Body'])) {
                var $v_0;
                var $$t_7, $$t_8;
                var $v_1 = ($$t_8 = SP.UI.Discussions.Helpers.checkForImageAndRemoveHtml(this.jsonItem['Body'], $$t_7 = {
                    'val': $v_0
                }), $v_0 = $$t_7.val, $$t_8);

                $v_1 = $v_1.trim();
                $v_1 = $v_1.replace('\u200b', '');
                $p0.renderBeginTag('div');
                if ($v_0) {
                    $p0.addCommunitiesCssClass('postImageIcon-span');
                    $p0.addCssClass('ms-floatLeft');
                    $p0.renderBeginTag('span');
                    $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
                    $p0.addCommunitiesCssClass('postImageIcon');
                    $p0.addAttribute('alt', Strings.STS.L_SPDiscPostImageIndicatorAltText);
                    $p0.addAttribute('title', Strings.STS.L_SPDiscPostImageIndicatorAltText);
                    $p0.renderBeginTag('img');
                    $p0.renderEndTag();
                    $p0.renderEndTag();
                }
                if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_1)) {
                    $p0.addCssClass($p2.folderBodyWrapStyle);
                    $p0.addCommunitiesCssClass('postBody');
                    $p0.renderBeginTag('div');
                    $p0.writeEncoded($v_1);
                    $p0.renderEndTag();
                }
                $p0.renderEndTag();
            }
        }
        else {
            $p0.addCssClass('ms-forceWrap');
            $p0.addCommunitiesCssClass('postBodyThreaded');
            if ($p2.get_$2p_0()) {
                $p0.addCommunitiesCssClass('postBodyOverflow');
            }
            if (this.$4_0 || this.get_isRenderedByRootPost()) {
                $p0.addCssClass('ms-textLarge');
            }
            else {
                $p0.addCommunitiesCssClass('postReplyBody');
                $p0.addCssClass('ms-textSmall');
            }
            $p0.renderBeginTag('div');
            if (this.$k_0) {
                $p0.addCommunitiesCssClass('postReplyContainer');
                $p0.addAttribute('id', this.getPostElementID('EditContainer'));
                $p0.renderBeginTag('div');
                $p0.renderEndTag();
            }
            else {
                var $v_3 = SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['TrimmedBody']) ? 'Body' : 'TrimmedBody';

                $p0.write(spMgr.RenderFieldByName(this.$0_0, $v_3, this.jsonItem, this.$0_0.ListSchema));
            }
            var $v_2 = this.jsonItem['Attachments'];

            if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_2) && $v_2 !== '0') {
                $p0.renderBeginTag('div');
                $p0.addAttribute('src', GetThemedImageUrl('attach16.png'));
                $p0.renderBeginTag('img');
                $p0.renderEndTag();
                SP.UI.Discussions.PostBehavior.$Z++;
                $p0.addAttribute('id', 'discAttachmentLink' + SP.UI.Discussions.PostBehavior.$Z);
                $p0.addCssClass('ms-secondaryCommandLink');
                $p0.addCssClass('ms-verticalAlignTop');
                $p0.addAttribute('href', this.$0_0.displayFormUrl + '&SearchRedirect=0&ID=' + this.jsonItem['ID']);
                $p0.renderBeginTag('a');
                $p0.renderEndTag();
                $p0.renderEndTag();
            }
            $p0.renderEndTag();
        }
    },
    $21_0: function SP_UI_Discussions_PostBehavior$$21_0($p0, $p1, $p2) {
        if (this.$4_0) {
            if ($p1) {
                $p0.addAttribute('href', this.get_topicLinkUrl());
                $p0.renderBeginTag('a');
                $p0.addCssClass($p2.folderTitleStyle);
            }
            else {
                $p0.addCssClass('ms-accentText');
                $p0.addCssClass('ms-textXLarge');
            }
            $p0.renderBeginTag($p1 ? 'span' : 'div');
            $p0.writeEncoded(this.jsonItem['Title']);
            $p0.renderEndTag();
            if ($p1) {
                $p0.renderEndTag();
            }
        }
    },
    showReplyBox: function SP_UI_Discussions_PostBehavior$showReplyBox() {
        if (!this.$9_0.$7_0) {
            var $v_0 = this.$0_0.forumViewState.$6_0;

            for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
                var $v_3 = $v_0[$v_1];

                if ($v_3.$9_0.$7_0) {
                    $v_3.$9_0.hide(true);
                }
            }
            this.$9_0.show(true);
        }
    },
    $2X_0: function SP_UI_Discussions_PostBehavior$$2X_0($p0) {
        var $v_0 = this.commandBar.findCommandByName('edit');

        if ($v_0) {
            $v_0.set_isEnabled(!$p0.$7_0);
        }
        if (!$p0.$7_0) {
            this.set_$1k_0(false);
        }
    },
    $2Y_0: function SP_UI_Discussions_PostBehavior$$2Y_0($p0) {
        $p0.preventDefault();
        this.set_$B_0(!this.get_$B_0());
    },
    $2g_0: function SP_UI_Discussions_PostBehavior$$2g_0($p0) {
        var $v_0 = this.commandBar.findCommandByName('reply');

        if ($v_0) {
            $v_0.set_isEnabled(!$p0.$7_0);
        }
    },
    $1R_0: function SP_UI_Discussions_PostBehavior$$1R_0() {
        var $v_0 = new SP.HtmlBuilder();

        this.$0_0.CurrentItem = this.$D_0.jsonItem;
        this.$D_0.$20_0($v_0, new SP.UI.Discussions.PostBehavior.RenderOptions(false, false, true, true, true, true, true));
        var $v_1 = $get(this.getBestResponsePostElementID());

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            $v_1.innerHTML += $v_0.toString();
            this.$0_0.forumViewState.addNewPost(this.$D_0);
            this.$D_0.initialize();
            SP.UI.Discussions.Helpers.$n();
        }
    },
    $1u_0: function SP_UI_Discussions_PostBehavior$$1u_0() {
        var $v_0 = new SP.HtmlBuilder();

        if (this.$P_0) {
            this.$0_0.CurrentItem = this.$P_0.jsonItem;
            this.$P_0.render($v_0, new SP.UI.Discussions.PostBehavior.RenderOptions(false, true, false, false, true, true, true));
        }
        var $v_1 = $get(this.getPostElementID('ReplyToCalloutPlaceholder'));

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            $v_1.innerHTML += $v_0.toString();
            SP.UI.Discussions.Helpers.$n();
        }
    },
    $1w_0: function SP_UI_Discussions_PostBehavior$$1w_0($p0) {
        this.commandBar.render($p0);
    },
    $2y_0: function SP_UI_Discussions_PostBehavior$$2y_0($p0) {
        if (!SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'Popularity') || !SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'DescendantLikesCount') || !SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'DescendantRatingsCount')) {
            return;
        }
        if (this.$0_0.BaseViewID === 7) {
            return;
        }
        $p0.addCommunitiesCssClass('popularityBarContainer');
        $p0.renderBeginTag('div');
        var $v_0 = '';
        var $v_1 = this.jsonItem['ItemChildCount'];

        if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_1)) {
            $v_1 = '0';
        }
        $v_0 += String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfReplies, Strings.STS.L_SPDiscNumberOfRepliesIntervals, Number.parseLocale($v_1)), $v_1);
        $v_0 += ' ';
        var $v_2 = '';

        if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'AverageRating')) {
            $v_2 = this.jsonItem['DescendantRatingsCount'];
            if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_2)) {
                $v_2 = '0';
            }
            $v_0 += String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfRatings, Strings.STS.L_SPDiscNumberOfRatingsIntervals, Number.parseLocale($v_2)), $v_2);
            $v_0 += ' ';
        }
        else if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'LikesCount')) {
            $v_2 = this.jsonItem['DescendantLikesCount'];
            if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_2)) {
                $v_2 = '0';
            }
            $v_0 += String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfLikes, Strings.STS.L_SPDiscNumberOfLikesIntervals, Number.parseLocale($v_2)), $v_2);
            $v_0 += ' ';
        }
        var $v_3 = !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['BestAnswerId']);

        if ($v_3) {
            $v_0 += Strings.STS.L_SPDiscPopularityBestResponse;
        }
        $p0.addAttribute('title', $v_0);
        $p0.addCssClass('ms-accessible');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        var $v_4 = this.$2L_0(Number.parseInvariant($v_1), Number.parseInvariant($v_2), $v_3 ? 1 : 0);

        if (isNaN($v_4)) {
            $v_4 = 0;
        }
        var $v_5 = 0;

        if ($v_4 > 50) {
            $v_5 = 50 * 1 + ($v_4 - 50) * 0.5;
        }
        else {
            $v_5 = $v_4 * 1;
        }
        $v_5 = Math.min($v_5, 100);
        var $v_6 = Math.max(2, $v_5);

        this.$y_0 = $v_6 / 100 * 90;
        this.$1I_0 = true;
        $p0.addCommunitiesCssClass('popularityBar');
        $p0.addAttribute('id', this.getPostElementID('PopularityBar'));
        $p0.addAttribute('style', 'width: ' + this.$y_0 + 'px; ');
        $p0.renderBeginTag('span');
        $p0.addCssClass('ms-positionAbsolute');
        $p0.addAttribute('src', SP.UI.Discussions.PostBehavior.ImageUrls.$1M);
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.addCommunitiesCssClass('popularityBarShadow');
        $p0.addAttribute('style', 'width: ' + (90 - this.$y_0) + 'px;');
        $p0.renderBeginTag('span');
        $p0.addCssClass('ms-positionAbsolute');
        $p0.addAttribute('src', SP.UI.Discussions.PostBehavior.ImageUrls.$1N);
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        var $v_7 = this.$0_0.ListSchema.Direction;
        var $v_8 = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_7) && ($v_7.toUpperCase() === 'RTL' || $v_7.toUpperCase() === 'LTR') ? $v_7 : document.documentElement.dir;
        var $v_9 = !SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_8) && $v_8.toUpperCase() === 'RTL';

        $p0.addAttribute('style', $v_9 ? 'clear:right;' : 'clear:left;');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        this.$1z_0($p0, 'ms-metadata', 'ms-comm-stats', 'ms-comm-reputationNumbers');
        $p0.renderEndTag();
    },
    $2L_0: function SP_UI_Discussions_PostBehavior$$2L_0($p0, $p1, $p2) {
        if (SP.UI.Discussions.Helpers.isNullOrUndefined($p0) || isNaN($p0)) {
            $p0 = 0;
        }
        if (SP.UI.Discussions.Helpers.isNullOrUndefined($p1) || isNaN($p1)) {
            $p1 = 0;
        }
        if (SP.UI.Discussions.Helpers.isNullOrUndefined($p2) || isNaN($p2)) {
            $p2 = 0;
        }
        return $p0 * 5 + $p1 + $p2 * 10;
    },
    $1z_0: function SP_UI_Discussions_PostBehavior$$1z_0($p0, $p1, $p2, $p3) {
        $p0.addCssClass($p1);
        $p0.renderBeginTag('div');
        $p0.addCssClass($p2);
        $p0.renderBeginTag('div');
        var $v_0 = this.jsonItem['ItemChildCount'];

        if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_0)) {
            $v_0 = '0';
        }
        $p0.write(String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfReplies, Strings.STS.L_SPDiscNumberOfRepliesIntervals, Number.parseLocale($v_0)), String.format('<span class=\"{0}\">{1}</span>', $p3, $v_0)));
        $p0.renderEndTag();
        $p0.addCssClass($p2);
        $p0.renderBeginTag('div');
        var $v_1 = '';
        var $v_2 = '';

        if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'AverageRating')) {
            $v_1 = this.jsonItem['DescendantRatingsCount'];
            if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_1)) {
                $v_1 = '0';
            }
            $v_2 = SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfRatings, Strings.STS.L_SPDiscNumberOfRatingsIntervals, Number.parseLocale($v_1));
        }
        else if (SP.UI.Discussions.Helpers.doesSchemaContainField(this.$0_0.ListSchema, 'LikesCount')) {
            $v_1 = this.jsonItem['DescendantLikesCount'];
            if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_1)) {
                $v_1 = '0';
            }
            $v_2 = SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPDiscNumberOfLikes, Strings.STS.L_SPDiscNumberOfLikesIntervals, Number.parseLocale($v_1));
        }
        $p0.write(String.format($v_2, String.format('<span class=\"{0}\">{1}</span>', $p3, $v_1)));
        $p0.renderEndTag();
        var $v_3 = !SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.jsonItem['BestAnswerId']);

        if ($v_3) {
            $p0.addCssClass($p2);
            $p0.renderBeginTag('div');
            $p0.addCommunitiesCssClass('bestResponseIcon-span');
            $p0.renderBeginTag('span');
            $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
            $p0.addCommunitiesCssClass('bestResponseIcon');
            $p0.renderBeginTag('img');
            $p0.renderEndTag();
            $p0.renderEndTag();
            $p0.renderBeginTag('span');
            $p0.write(Strings.STS.L_SPDiscPopularityBestResponse);
            $p0.renderEndTag();
            $p0.renderEndTag();
        }
        $p0.renderEndTag();
    },
    $1Y_0: function SP_UI_Discussions_PostBehavior$$1Y_0() {
        var $v_0 = null;

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined(document.activeElement)) {
            $v_0 = document.activeElement.id;
        }
        if (this.$D_0) {
            this.$0_0.forumViewState.removePost(this.$D_0);
            this.$D_0 = null;
        }
        if (this.$Q_0.$7_0) {
            this.$Q_0.hide(false);
        }
        if (this.$9_0.$7_0) {
            this.$9_0.hide(false);
        }
        var $v_1 = new SP.HtmlBuilder();

        this.render($v_1, SP.UI.Discussions.PostBehavior.RenderOptions.get_$1a());
        var $v_2 = $get(this.get_rootElementID());

        if (this.get_isRenderedByRootPost()) {
            $v_2 = $get(this.getBestResponsePostElementID());
        }
        $v_2.innerHTML = $v_1.toString();
        this.$i_0 = false;
        this.initialize();
        SP.UI.Discussions.Helpers.$n();
        if (!SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_0)) {
            var $v_3 = $get($v_0);

            if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_3)) {
                SP.UI.Discussions.Helpers.$1e(this.$0_0, $v_3);
            }
        }
    }
};
SP.UI.Discussions.PostBehavior.RenderOptions = function SP_UI_Discussions_PostBehavior_RenderOptions(includeRootElement, includeMainContainer, renderCommandSpace, renderReplyToLink, overflowStyle, showExpandCollapseButton, renderBestResponse) {
    this.$1j_0 = includeRootElement;
    this.$1h_0 = includeMainContainer;
    this.$1v_0 = renderCommandSpace;
    this.$1y_0 = renderReplyToLink;
    this.$1o_0 = overflowStyle;
    this.$23_0 = showExpandCollapseButton;
    this.$1s_0 = renderBestResponse;
};
SP.UI.Discussions.PostBehavior.RenderOptions.get_$27 = function SP_UI_Discussions_PostBehavior_RenderOptions$get_$27() {
    return new SP.UI.Discussions.PostBehavior.RenderOptions(true, true, true, true, true, true, true);
};
SP.UI.Discussions.PostBehavior.RenderOptions.get_$1a = function SP_UI_Discussions_PostBehavior_RenderOptions$get_$1a() {
    return new SP.UI.Discussions.PostBehavior.RenderOptions(false, true, true, true, true, true, true);
};
SP.UI.Discussions.PostBehavior.RenderOptions.prototype = {
    $1j_0: false,
    $1h_0: false,
    $1v_0: false,
    $1y_0: false,
    $1o_0: false,
    $23_0: false,
    $1s_0: false,
    folderTitleStyle: null,
    folderBodyWrapStyle: null,
    renderDate: false,
    get_$s_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$s_0() {
        return this.$1j_0;
    },
    get_$1i_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$1i_0() {
        return this.$1h_0;
    },
    get_$1w_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$1w_0() {
        return this.$1v_0;
    },
    get_$31_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$31_0() {
        return this.$1y_0;
    },
    get_$2p_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$2p_0() {
        return this.$1o_0;
    },
    get_$34_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$34_0() {
        return this.$23_0;
    },
    get_$1R_0: function SP_UI_Discussions_PostBehavior_RenderOptions$get_$1R_0() {
        return this.$1s_0;
    }
};
SP.UI.Discussions.PostBehavior.ImageUrls = function SP_UI_Discussions_PostBehavior_ImageUrls() {
};
SP.UI.Discussions.PostBehavior.DiscussionHelpers = function SP_UI_Discussions_PostBehavior_DiscussionHelpers() {
};
SP.UI.Discussions.PostBehavior.DiscussionHelpers.$32 = function SP_UI_Discussions_PostBehavior_DiscussionHelpers$$32() {
    SP.UI.Discussions.PostBehavior.ImageUrls.$1M = GetThemedImageUrl('PopularityBar.png');
    SP.UI.Discussions.PostBehavior.ImageUrls.$1N = GetThemedImageUrl('PopularityBarShadow.png');
};
SP.UI.Discussions.PostAction = function SP_UI_Discussions_PostAction(owner, name, displayName) {
    SP.UI.Discussions.PostAction.initializeBase(this, [name, displayName]);
    this.$1_1 = owner;
};
SP.UI.Discussions.PostAction.prototype = {
    $1_1: null,
    get_owner: function SP_UI_Discussions_PostAction$get_owner() {
        return this.$1_1;
    },
    transferState: function SP_UI_Discussions_PostAction$transferState(destAction) {
        if (this.get_linkElement() === this.$1_1.$0_0.forumViewState.get_activeElement()) {
            SP.UI.Discussions.Helpers.$1e(this.$1_1.$0_0, destAction.get_linkElement());
        }
    }
};
SP.UI.Discussions.EditAction = function SP_UI_Discussions_EditAction($p0) {
    SP.UI.Discussions.EditAction.initializeBase(this, [$p0, 'edit', Strings.STS.L_SPDiscEdit]);
};
SP.UI.Discussions.EditAction.prototype = {
    get_href: function SP_UI_Discussions_EditAction$get_href() {
        var $v_0 = SP.ScriptHelpers.replaceOrAddQueryString(this.$1_1.$0_0.editFormUrl, 'ID', this.$1_1.jsonItem['ID']);
        var $v_1 = window.self.ajaxNavigate;

        $v_0 = SP.ScriptHelpers.replaceOrAddQueryString($v_0, 'Source', $v_1.get_href());
        return $v_0;
    },
    onClick: function SP_UI_Discussions_EditAction$onClick() {
        if (this.$1_1.$4_0) {
            STSNavigate(this.get_href());
        }
        else {
            this.$1_1.set_$1k_0(true);
        }
    }
};
SP.UI.Discussions.DeleteAction = function SP_UI_Discussions_DeleteAction($p0) {
    this.$$d_$2c_2 = Function.createDelegate(this, this.$2c_2);
    this.$$d_$2d_2 = Function.createDelegate(this, this.$2d_2);
    SP.UI.Discussions.DeleteAction.initializeBase(this, [$p0, 'delete', Strings.STS.L_SPDiscDelete]);
};
SP.UI.Discussions.DeleteAction.prototype = {
    onClick: function SP_UI_Discussions_DeleteAction$onClick() {
        if (confirm(Strings.STS.L_SPDiscDeleteConfirm)) {
            var $v_0 = SP.ClientContext.get_current();
            var $v_1 = (($v_0.get_web()).get_lists()).getById(new SP.Guid(this.$1_1.$0_0.listName));
            var $v_2 = $v_1.getItemById(this.$1_1.jsonItem['ID']);

            if (this.$1_1.$0_0.RecycleBinEnabled === 1) {
                $v_2.recycle();
            }
            else {
                $v_2.deleteObject();
            }
            $v_0.executeQueryAsync(this.$$d_$2d_2, this.$$d_$2c_2);
        }
    },
    $2d_2: function SP_UI_Discussions_DeleteAction$$2d_2($p0, $p1) {
        if (this.$1_1.$4_0) {
            STSNavigate(this.$1_1.get_topicListViewUrl());
        }
        else {
            SP.UI.Discussions.Helpers.refreshCurrentPage(this.$1_1.$0_0);
        }
    },
    $2c_2: function SP_UI_Discussions_DeleteAction$$2c_2($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1.get_message());
    }
};
SP.UI.Discussions.ReplyAction = function SP_UI_Discussions_ReplyAction($p0) {
    SP.UI.Discussions.ReplyAction.initializeBase(this, [$p0, 'reply', Strings.STS.L_SPDiscReply]);
};
SP.UI.Discussions.ReplyAction.prototype = {
    onClick: function SP_UI_Discussions_ReplyAction$onClick() {
        this.$1_1.showReplyBox();
    }
};
SP.UI.Discussions.AlertMeAction = function SP_UI_Discussions_AlertMeAction($p0) {
    SP.UI.Discussions.AlertMeAction.initializeBase(this, [$p0, 'alertMe', Strings.STS.L_Subscribe_Text]);
};
SP.UI.Discussions.AlertMeAction.prototype = {
    onClick: function SP_UI_Discussions_AlertMeAction$onClick() {
        var $v_0 = window.self.ajaxNavigate;
        var $v_1 = 'ID=' + escapeProperlyCore('' + this.$1_1.get_itemID(), false) + '&List=' + this.$1_1.$0_0.listName;

        NavigateToSubNewAspx(this.$1_1.$0_0.HttpRoot, $v_1);
    }
};
SP.UI.Discussions.SetBestResponseAction = function SP_UI_Discussions_SetBestResponseAction($p0, $p1) {
    this.$$d_$1K_2 = Function.createDelegate(this, this.$1K_2);
    this.$$d_$1m_2 = Function.createDelegate(this, this.$1m_2);
    SP.UI.Discussions.SetBestResponseAction.initializeBase(this, [$p0, 'best', $p1 ? Strings.STS.L_SPDiscBestUndo : Strings.STS.L_SPDiscBest]);
    this.$1X_2 = $p1;
};
SP.UI.Discussions.SetBestResponseAction.prototype = {
    $1X_2: false,
    get_tooltip: function SP_UI_Discussions_SetBestResponseAction$get_tooltip() {
        return this.$1X_2 ? Strings.STS.L_SPDiscBestUndoTooltip : Strings.STS.L_SPDiscBestTooltip;
    },
    onClick: function SP_UI_Discussions_SetBestResponseAction$onClick() {
        var $v_0 = SP.UI.Discussions.Helpers.$U(this.$1_1.$0_0);

        if ($v_0) {
            var $v_1 = $v_0.get_itemID();
            var $v_2 = new SP.ClientContext();
            var $v_3 = (($v_2.get_web()).get_lists()).getById(new SP.Guid(this.$1_1.$0_0.listName));
            var $v_4 = $v_3.getItemById($v_1);

            if (this.$1X_2) {
                $v_4.set_item('BestAnswerId', null);
            }
            else {
                $v_4.set_item('BestAnswerId', this.$1_1.get_itemID());
            }
            $v_4.update();
            $v_2.executeQueryAsync(this.$$d_$1m_2, this.$$d_$1K_2);
            this.set_isEnabled(false);
        }
    },
    $1m_2: function SP_UI_Discussions_SetBestResponseAction$$1m_2($p0, $p1) {
        SP.UI.Discussions.Helpers.refreshCurrentPage(this.$1_1.$0_0);
        this.set_isEnabled(true);
    },
    $1K_2: function SP_UI_Discussions_SetBestResponseAction$$1K_2($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1.get_message());
        this.set_isEnabled(true);
    }
};
SP.UI.Discussions.MarkAsFeaturedAction = function SP_UI_Discussions_MarkAsFeaturedAction($p0, $p1) {
    this.$$d_$1K_2 = Function.createDelegate(this, this.$1K_2);
    this.$$d_$1m_2 = Function.createDelegate(this, this.$1m_2);
    SP.UI.Discussions.MarkAsFeaturedAction.initializeBase(this, [$p0, 'best', $p1 === '1' ? Strings.STS.L_SPDiscUnmarkAsFeatured : Strings.STS.L_SPDiscMarkAsFeatured]);
    this.$1G_2 = $p1;
};
SP.UI.Discussions.MarkAsFeaturedAction.prototype = {
    $1G_2: null,
    get_tooltip: function SP_UI_Discussions_MarkAsFeaturedAction$get_tooltip() {
        return this.$1G_2 === '1' ? Strings.STS.L_SPDiscUnmarkAsFeaturedTooltip : Strings.STS.L_SPDiscMarkAsFeaturedTooltip;
    },
    onClick: function SP_UI_Discussions_MarkAsFeaturedAction$onClick() {
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = this.$1_1.$0_0.listName;
        var $v_2 = (this.$1_1.get_itemID()).toString();

        if (this.$1G_2 === '1') {
            SP.Utilities.Utility.unmarkDiscussionAsFeatured($v_0, $v_1, $v_2);
        }
        else {
            SP.Utilities.Utility.markDiscussionAsFeatured($v_0, $v_1, $v_2);
        }
        $v_0.executeQueryAsync(this.$$d_$1m_2, this.$$d_$1K_2);
        this.set_isEnabled(false);
    },
    $1m_2: function SP_UI_Discussions_MarkAsFeaturedAction$$1m_2($p0, $p1) {
        SP.UI.Discussions.Helpers.refreshCurrentPage(this.$1_1.$0_0);
        this.set_isEnabled(true);
    },
    $1K_2: function SP_UI_Discussions_MarkAsFeaturedAction$$1K_2($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1.get_message());
        this.set_isEnabled(true);
    }
};
SP.UI.Discussions.ReplyBoxControl = function SP_UI_Discussions_ReplyBoxControl($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$2n_0 = Function.createDelegate(this, this.$2n_0);
    this.$$d_$2o_0 = Function.createDelegate(this, this.$2o_0);
    this.$$d_$2h_0 = Function.createDelegate(this, this.$2h_0);
    this.$$d_$2i_0 = Function.createDelegate(this, this.$2i_0);
    this.$$d_$2j_0 = Function.createDelegate(this, this.$2j_0);
    this.$$d_$2l_0 = Function.createDelegate(this, this.$2l_0);
    this.$$d_$2k_0 = Function.createDelegate(this, this.$2k_0);
    this.$1_0 = $p0;
    this.$1L_0 = $p1;
    this.$Y_0 = $p2;
    this.$S_0 = $p3;
    this.$d_0 = $p4;
    this.$1V_0 = this.$$d_$2k_0;
    this.$1W_0 = this.$$d_$2l_0;
    this.$1U_0 = this.$$d_$2j_0;
    this.$1T_0 = this.$$d_$2i_0;
    this.$18_0 = this.$$d_$2h_0;
};
SP.UI.Discussions.ReplyBoxControl.prototype = {
    $1_0: null,
    $1L_0: null,
    $Y_0: false,
    $S_0: false,
    $h_0: false,
    $d_0: false,
    $7_0: false,
    $H_0: false,
    $16_0: false,
    $l_0: null,
    $W_0: null,
    $12_0: null,
    $10_0: null,
    $p_0: null,
    $a_0: null,
    $1V_0: null,
    $1W_0: null,
    $1U_0: null,
    $1T_0: null,
    $18_0: null,
    get_allowCollapse: function SP_UI_Discussions_ReplyBoxControl$get_allowCollapse() {
        return this.$Y_0;
    },
    get_allowCancel: function SP_UI_Discussions_ReplyBoxControl$get_allowCancel() {
        return this.$S_0;
    },
    get_hideOnSubmit: function SP_UI_Discussions_ReplyBoxControl$get_hideOnSubmit() {
        return this.$h_0;
    },
    set_hideOnSubmit: function SP_UI_Discussions_ReplyBoxControl$set_hideOnSubmit($p0) {
        this.$h_0 = $p0;
        return $p0;
    },
    get_isVisible: function SP_UI_Discussions_ReplyBoxControl$get_isVisible() {
        return this.$7_0;
    },
    get_visibilityChanged: function SP_UI_Discussions_ReplyBoxControl$get_visibilityChanged() {
        return this.$W_0;
    },
    set_visibilityChanged: function SP_UI_Discussions_ReplyBoxControl$set_visibilityChanged($p0) {
        this.$W_0 = $p0;
        return $p0;
    },
    get_$17_0: function SP_UI_Discussions_ReplyBoxControl$get_$17_0() {
        if (!this.$p_0) {
            this.$p_0 = $get(this.$8_0('ReplyCancel'));
        }
        return this.$p_0;
    },
    get_$3_0: function SP_UI_Discussions_ReplyBoxControl$get_$3_0() {
        if (!this.$a_0 || !this.$a_0.parentNode) {
            this.$a_0 = $get(this.$8_0(this.$d_0 ? 'EditContainer' : 'ReplyContainer'));
        }
        return this.$a_0;
    },
    get_$j_0: function SP_UI_Discussions_ReplyBoxControl$get_$j_0() {
        return this.$16_0;
    },
    set_$j_0: function SP_UI_Discussions_ReplyBoxControl$set_$j_0($p0) {
        if (this.$16_0 !== $p0) {
            this.$16_0 = $p0;
            this.$36_0();
            this.$13_0();
        }
        return $p0;
    },
    get_$1S_0: function SP_UI_Discussions_ReplyBoxControl$get_$1S_0() {
        if (!this.$10_0) {
            this.$10_0 = $get(this.$8_0('ReplySubmit'));
        }
        return this.$10_0;
    },
    get_$2_0: function SP_UI_Discussions_ReplyBoxControl$get_$2_0() {
        if (!this.$12_0) {
            this.$12_0 = $get(this.$8_0('RichTextArea'));
        }
        return this.$12_0;
    },
    get_textValue: function SP_UI_Discussions_ReplyBoxControl$get_textValue() {
        return this.$2N_0();
    },
    set_textValue: function SP_UI_Discussions_ReplyBoxControl$set_textValue($p0) {
        (this.get_$2_0()).innerHTML = $p0;
        this.$13_0();
        return $p0;
    },
    hide: function SP_UI_Discussions_ReplyBoxControl$hide($p0) {
        if (this.$7_0) {
            (this.get_$2_0()).blur();
            RTE.Canvas.makeRegionUnEditable(this.get_$2_0());
            this.$2E_0();
            this.$1r_0();
            this.$7_0 = false;
            if ($p0) {
                this.$29_0();
            }
            this.$1n_0();
        }
    },
    show: function SP_UI_Discussions_ReplyBoxControl$show($p0) {
        RegisterSod('SP.UI.RTE.js', '_layouts/15/SP.UI.RTE.js');
        var $$t_2 = this;

        EnsureScriptFunc('SP.UI.RTE.js', 'RTE', function() {
            if (!$$t_2.$7_0) {
                var $v_0 = $$t_2.get_$3_0();

                $v_0.style.width = '';
                $v_0.style.height = '';
                $v_0.innerHTML = $$t_2.$2r_0($p0);
                $$t_2.$2O_0();
                $$t_2.$2B_0();
                if ($p0) {
                    RTE.Canvas.setInitialFocus();
                    $$t_2.$H_0 = true;
                }
                else if (!$$t_2.$Y_0) {
                    $$t_2.$H_0 = true;
                }
                $$t_2.$7_0 = true;
                $$t_2.$13_0();
                $$t_2.$o_0(false);
                $$t_2.$28_0();
                $$t_2.$1n_0();
            }
        });
    },
    transferState: function SP_UI_Discussions_ReplyBoxControl$transferState($p0) {
        if (this.$7_0) {
            $p0.show(false);
            $p0.$H_0 = this.$H_0;
            $p0.set_textValue(this.get_textValue());
            $p0.$o_0(false);
        }
    },
    $28_0: function SP_UI_Discussions_ReplyBoxControl$$28_0() {
        if (!SP.UI.Discussions.Helpers.isNullOrUndefined(this.get_$3_0())) {
            var $v_0 = (this.get_$3_0()).offsetHeight;
            var $v_1 = (this.get_$3_0()).offsetWidth;

            (this.get_$3_0()).style.height = '0px';
            (this.get_$3_0()).style.width = $v_1 + 'px';
            (this.get_$3_0()).style.overflow = 'hidden';
            SetOpacity(this.get_$3_0(), 0);
            var $$t_2 = this;

            SPAnimationUtility.BasicAnimator.Resize(this.get_$3_0(), $v_0, $v_1, function() {
                ($$t_2.get_$3_0()).style.height = '';
                ($$t_2.get_$3_0()).style.width = '';
                ($$t_2.get_$3_0()).style.overflow = '';
                SPAnimationUtility.BasicAnimator.FadeIn($$t_2.get_$3_0(), function() {
                    RTE.Canvas.setInitialFocus();
                }, null);
            }, null);
        }
    },
    $29_0: function SP_UI_Discussions_ReplyBoxControl$$29_0() {
        if (!SP.UI.Discussions.Helpers.isNullOrUndefined(this.get_$3_0())) {
            var $v_0 = (this.get_$3_0()).offsetHeight;
            var $v_1 = (this.get_$3_0()).offsetWidth;
            var $$t_2 = this;

            SPAnimationUtility.BasicAnimator.FadeOut(this.get_$3_0(), function() {
                ($$t_2.get_$3_0()).style.height = $v_0 + 'px';
                ($$t_2.get_$3_0()).style.width = $v_1 + 'px';
                ($$t_2.get_$3_0()).innerHTML = null;
                SPAnimationUtility.BasicAnimator.Resize($$t_2.get_$3_0(), 0, $v_1, null, null);
            }, null);
        }
    },
    $2B_0: function SP_UI_Discussions_ReplyBoxControl$$2B_0() {
        RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$1V_0);
        $addHandler(this.get_$2_0(), 'focus', this.$1W_0);
        RTE.CanvasEvents.registerListener(RTE.CanvasEvents.editableRegionBlurEvent, this.$1U_0);
        $addHandler(this.get_$1S_0(), 'click', this.$1T_0);
        if (this.$S_0) {
            $addHandler(this.get_$17_0(), 'click', this.$18_0);
        }
    },
    $2C_0: function SP_UI_Discussions_ReplyBoxControl$$2C_0($p0, $p1) {
        $p0.addAttribute('dir', STSHtmlEncode(this.$1_0.$0_0.ListSchema.Direction));
        $p0.renderBeginTag('span');
        $p0.addCssClass('ms-rtestate-field');
        $p0.renderBeginTag('div');
        var $v_0 = $p1 ? 2 : 0;

        $p0.addCssClass('ms-rtestate-write');
        $p0.addCssClass('ms-rteflags-' + $v_0.toString());
        $p0.addCssClass('ms-fullWidth');
        $p0.addCssClass('ms-inputBox');
        if (!this.$d_0) {
            $p0.addCssClass('ms-textSmall');
        }
        $p0.addCommunitiesCssClass('postReplyTextBox');
        $p0.addAttribute('id', this.$8_0('RichTextArea'));
        $p0.addAttribute('contentEditable', 'true');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        $p0.addCssClass('ms-clear');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
        $p0.addAttribute('dir', 'ltr');
        $p0.addCssClass('ms-hidden');
        $p0.renderBeginTag('span');
        $p0.addAttribute('type', 'hidden');
        $p0.addAttribute('id', this.$8_0('RichHiddenInput'));
        $p0.renderBeginTag('input');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    $2E_0: function SP_UI_Discussions_ReplyBoxControl$$2E_0() {
        RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionChangedEvent, this.$1V_0);
        $removeHandler(this.get_$2_0(), 'focus', this.$1W_0);
        RTE.CanvasEvents.unRegisterListener(RTE.CanvasEvents.editableRegionBlurEvent, this.$1U_0);
        $removeHandler(this.get_$1S_0(), 'click', this.$1T_0);
        if (this.$S_0) {
            $removeHandler(this.get_$17_0(), 'click', this.$18_0);
        }
    },
    $8_0: function SP_UI_Discussions_ReplyBoxControl$$8_0($p0) {
        var $v_0;

        if (!this.$1L_0) {
            $v_0 = this.$1_0.getPostElementID($p0);
        }
        else {
            $v_0 = SP.UI.Discussions.Helpers.$J(this.$1_0.$0_0.forumViewState.$E_0, this.$1L_0 + '-' + $p0);
        }
        return $v_0;
    },
    $2N_0: function SP_UI_Discussions_ReplyBoxControl$$2N_0() {
        var $v_0 = '';
        var $v_1 = this.$8_0('RichTextArea');
        var $v_2 = $get($v_1);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_2)) {
            var $v_4 = this.$8_0('RichHiddenInput');

            $v_2.InputFieldId = $v_4;
        }
        RTE.RichTextEditor.transferContentsToInputField(this.$8_0('RichTextArea'), false);
        var $v_3 = $get(this.$8_0('RichHiddenInput'));

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_3)) {
            $v_0 = $v_3.value;
        }
        return $v_0;
    },
    $2O_0: function SP_UI_Discussions_ReplyBoxControl$$2O_0() {
        var $v_0 = this.$8_0('RichTextArea');
        var $v_1 = $get($v_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_1)) {
            $v_1.AllowEmbedding = 'True';
            RTE.Canvas.fixRegion($v_0);
            var $v_2 = this.$8_0('RichHiddenInput');
            var $v_3 = $get($v_2);

            if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_3)) {
                $v_1.InputFieldId = $v_2;
                $v_3.value = $v_1.innerHTML;
            }
        }
    },
    $2h_0: function SP_UI_Discussions_ReplyBoxControl$$2h_0($p0) {
        $p0.preventDefault();
        this.hide(false);
    },
    $2i_0: function SP_UI_Discussions_ReplyBoxControl$$2i_0($p0) {
        $p0.preventDefault();
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = (($v_0.get_web()).get_lists()).getById(new SP.Guid(this.$1_0.$0_0.listName));
        var $v_2 = $v_1.getItemById(this.$1_0.jsonItem['ID']);

        if (this.$d_0) {
            $v_2.set_item('Body', this.get_textValue());
            $v_2.update();
        }
        else {
            var $v_3 = SP.Utilities.Utility.createNewDiscussionReply($v_0, $v_2);
            var $v_4 = 'Body';

            $v_3.set_item($v_4, this.get_textValue());
            $v_3.update();
        }
        this.$l_0 = SP.UI.Notify.addNotification(Strings.STS.L_Loading_Text, false);
        this.set_$j_0(true);
        $v_0.executeQueryAsync(this.$$d_$2o_0, this.$$d_$2n_0);
    },
    $2k_0: function SP_UI_Discussions_ReplyBoxControl$$2k_0($p0, $p1) {
        if (SP.ScriptHelpers.removeHtml(this.get_textValue()) !== Strings.STS.L_SPDiscReplyPlaceholder) {
            this.$H_0 = true;
            this.$13_0();
        }
    },
    $2l_0: function SP_UI_Discussions_ReplyBoxControl$$2l_0($p0) {
        this.$H_0 = true;
        this.$o_0(true);
    },
    $2j_0: function SP_UI_Discussions_ReplyBoxControl$$2j_0($p0, $p1) {
        if (document.activeElement !== this.get_$2_0() && this.$7_0) {
            if (this.$Y_0 && !(this.get_textValue()).length) {
                this.$H_0 = false;
            }
            this.$o_0(true);
        }
    },
    $2o_0: function SP_UI_Discussions_ReplyBoxControl$$2o_0($p0, $p1) {
        RTE.Canvas.revertWikiRegion(this.$8_0('RichTextArea'));
        if (this.$h_0) {
            this.hide(false);
        }
        if (this.$Y_0 && this.$7_0) {
            this.$H_0 = false;
            this.set_textValue('');
            this.$o_0(true);
        }
        this.set_$j_0(false);
        SP.UI.Discussions.Helpers.refreshCurrentPage(this.$1_0.$0_0);
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$l_0)) {
            SP.UI.Notify.removeNotification(this.$l_0);
        }
    },
    $2n_0: function SP_UI_Discussions_ReplyBoxControl$$2n_0($p0, $p1) {
        SP.UI.Discussions.Helpers.showScriptError($p1.get_message());
        this.set_$j_0(false);
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$l_0)) {
            SP.UI.Notify.removeNotification(this.$l_0);
        }
    },
    $1n_0: function SP_UI_Discussions_ReplyBoxControl$$1n_0() {
        if (this.$W_0) {
            this.$W_0(this);
        }
    },
    $1r_0: function SP_UI_Discussions_ReplyBoxControl$$1r_0() {
        this.$p_0 = null;
        this.$a_0 = null;
        this.$10_0 = null;
        this.$12_0 = null;
    },
    $2r_0: function SP_UI_Discussions_ReplyBoxControl$$2r_0($p0) {
        var $v_0 = new SP.HtmlBuilder();

        this.$1r_0();
        this.$2C_0($v_0, $p0);
        $v_0.renderBeginTag('div');
        $v_0.addCommunitiesCssClass('postReplyButtonContainer');
        $v_0.renderBeginTag('div');
        var $v_1 = this.$d_0 ? Strings.STS.L_SPDiscSubmitEditButton : Strings.STS.L_SPDiscSubmitReplyButton;

        $v_0.addCssClass('ms-floatRight');
        $v_0.addCssClass('ms-button-emphasize');
        $v_0.addCommunitiesCssClass('postReplyButton');
        $v_0.addAttribute('id', this.$8_0('ReplySubmit'));
        $v_0.addAttribute('title', $v_1);
        $v_0.renderBeginTag('button');
        $v_0.writeEncoded($v_1);
        $v_0.renderEndTag();
        if (this.$S_0) {
            $v_0.addCommunitiesCssClass('postReplyButton');
            $v_0.addAttribute('id', this.$8_0('ReplyCancel'));
            $v_0.addAttribute('title', Strings.STS.L_SPDiscCancelReplyButton);
            $v_0.renderBeginTag('button');
            $v_0.writeEncoded(Strings.STS.L_SPDiscCancelReplyButton);
            $v_0.renderEndTag();
        }
        $v_0.renderEndTag();
        $v_0.addCssClass('ms-clear');
        $v_0.renderBeginTag('div');
        $v_0.renderEndTag();
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    $36_0: function SP_UI_Discussions_ReplyBoxControl$$36_0() {
        if (this.$7_0 && this.$S_0) {
            (this.get_$17_0()).disabled = this.get_$j_0();
        }
    },
    $13_0: function SP_UI_Discussions_ReplyBoxControl$$13_0() {
        if (this.$7_0) {
            (this.get_$1S_0()).disabled = !((this.get_textValue()).length > 0) || SP.ScriptHelpers.removeHtml(this.get_textValue()) === Strings.STS.L_SPDiscReplyPlaceholder || !this.$H_0 || this.get_$j_0();
        }
    },
    $o_0: function SP_UI_Discussions_ReplyBoxControl$$o_0($p0) {
        var $v_0 = this.get_textValue();
        var $v_1 = 74;

        if (this.$H_0) {
            if (SP.ScriptHelpers.removeHtml($v_0) === Strings.STS.L_SPDiscReplyPlaceholder) {
                (this.get_$2_0()).innerHTML = '';
                CSSUtil.RemoveClass(this.get_$2_0(), 'ms-metadata');
                if (!SP.UI.Discussions.Helpers.isNullOrUndefined(this.get_$2_0())) {
                    (RTE.Cursor.get_range()).moveToStartOfNode(this.get_$2_0());
                    RTE.Cursor.update();
                }
            }
        }
        else {
            if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty($v_0)) {
                (this.get_$2_0()).innerHTML = Strings.STS.L_SPDiscReplyPlaceholder;
                $v_1 = 27;
                CSSUtil.AddClass(this.get_$2_0(), 'ms-metadata');
            }
        }
        if ($p0) {
            var $v_2 = (this.get_$2_0()).style.minHeight;
            var $v_3 = (this.get_$2_0()).offsetWidth;

            if ($v_2 !== $v_1 + 'px') {
                (this.get_$2_0()).style.height = $v_2;
                (this.get_$2_0()).style.width = $v_3 + 'px';
                (this.get_$2_0()).style.minHeight = '';
                var $$t_5 = this;

                SPAnimationUtility.BasicAnimator.QuickResize(this.get_$2_0(), $v_1, $v_3, function() {
                    ($$t_5.get_$2_0()).style.height = '';
                    ($$t_5.get_$2_0()).style.width = '';
                    ($$t_5.get_$2_0()).style.minHeight = $v_1 + 'px';
                }, null);
            }
        }
        else {
            (this.get_$2_0()).style.minHeight = $v_1 + 'px';
        }
    }
};
SP.UI.Discussions.SortFilterPickerControl = function SP_UI_Discussions_SortFilterPickerControl() {
    this.$$d_$2W_0 = Function.createDelegate(this, this.$2W_0);
    this.$V_0 = 0;
    this.$C_0 = [];
    this.$1B_0 = false;
    this.$5_0 = 'SortList' + SP.UI.Discussions.SortFilterPickerControl.$K;
    SP.UI.Discussions.SortFilterPickerControl.$1D[this.$5_0] = this;
    SP.UI.Discussions.SortFilterPickerControl.$K++;
};
SP.UI.Discussions.SortFilterPickerControl.onMenuItemClick = function SP_UI_Discussions_SortFilterPickerControl$onMenuItemClick(controlElementID, itemIndex) {
    var $v_0 = SP.UI.Discussions.SortFilterPickerControl.$1D[controlElementID];

    if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
        var $v_1 = $v_0.$C_0[itemIndex];

        $v_1.onClick();
    }
};
SP.UI.Discussions.SortFilterPickerControl.prototype = {
    $C_0: null,
    $V_0: 0,
    $14_0: false,
    $1B_0: false,
    $r_0: null,
    $x_0: null,
    $5_0: null,
    get_useSmallHeading: function SP_UI_Discussions_SortFilterPickerControl$get_useSmallHeading() {
        return this.$14_0;
    },
    set_useSmallHeading: function SP_UI_Discussions_SortFilterPickerControl$set_useSmallHeading(value) {
        this.$14_0 = value;
        return value;
    },
    get_renderMode: function SP_UI_Discussions_SortFilterPickerControl$get_renderMode() {
        return this.$V_0;
    },
    set_renderMode: function SP_UI_Discussions_SortFilterPickerControl$set_renderMode(value) {
        this.$V_0 = value;
        return value;
    },
    addItem: function SP_UI_Discussions_SortFilterPickerControl$addItem(newItem) {
        Array.add(this.$C_0, newItem);
        newItem.$1_0 = this;
    },
    clearSelection: function SP_UI_Discussions_SortFilterPickerControl$clearSelection() {
        for (var $v_0 = 0, $v_1 = this.$C_0.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$C_0[$v_0];

            $v_2.$M_0 = false;
        }
    },
    initialize: function SP_UI_Discussions_SortFilterPickerControl$initialize() {
        if (!this.$V_0) {
            this.$x_0 = new ClientPivotControl();
            this.$x_0.PivotParentId = this.$5_0;
            for (var $v_0 = 0, $v_1 = this.$C_0.length; $v_0 < $v_1; $v_0++) {
                var $v_2 = this.$C_0[$v_0];

                this.$x_0.AddMenuOption($v_2.$2G_0());
            }
            this.$x_0.Render();
        }
        else if (this.$V_0 === 1) {
            var $v_3 = $get(this.$5_0);

            if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_3)) {
                $addHandler($v_3, 'click', this.$$d_$2W_0);
            }
        }
    },
    insertItem: function SP_UI_Discussions_SortFilterPickerControl$insertItem(index, newItem) {
        Array.insert(this.$C_0, index, newItem);
        newItem.$1_0 = this;
    },
    render: function SP_UI_Discussions_SortFilterPickerControl$render(builder) {
        this.$1x_0(builder, true);
    },
    update: function SP_UI_Discussions_SortFilterPickerControl$update() {
        var $v_0 = $get(this.$5_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            var $v_1 = new SP.HtmlBuilder();

            this.$1x_0($v_1, false);
            $v_0.innerHTML = $v_1.toString();
            this.initialize();
        }
    },
    $2F_0: function SP_UI_Discussions_SortFilterPickerControl$$2F_0() {
        if (!this.$r_0) {
            this.$r_0 = SP.UI.Menu.create(this.$5_0 + '-menu');
            for (var $v_0 = 0, $v_1 = this.$C_0.length; $v_0 < $v_1; $v_0++) {
                var $v_2 = this.$C_0[$v_0];

                this.$r_0.addMenuItem($v_2.$c_0, 'SP.UI.Discussions.SortFilterPickerControl.onMenuItemClick(\'' + this.$5_0 + '\',' + $v_0 + ');', null, null, $v_0, null, null);
            }
        }
    },
    $2W_0: function SP_UI_Discussions_SortFilterPickerControl$$2W_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        var $v_0 = $get(this.$5_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            this.$2F_0();
            this.$r_0.show($v_0, false, false, -1);
        }
    },
    $2x_0: function SP_UI_Discussions_SortFilterPickerControl$$2x_0($p0) {
        $p0.addAttribute('id', this.$5_0);
        if (this.$1B_0) {
            $p0.addCssClass('ms-floatLeft');
        }
        $p0.addCommunitiesCssClass('filterList');
        $p0.renderBeginTag('div');
        $p0.renderEndTag();
    },
    $1x_0: function SP_UI_Discussions_SortFilterPickerControl$$1x_0($p0, $p1) {
        switch (this.$V_0) {
        case 0:
            this.$2x_0($p0);
            break;
        case 1:
            this.$2u_0($p0);
            break;
        }
    },
    $2u_0: function SP_UI_Discussions_SortFilterPickerControl$$2u_0($p0) {
        var $v_0 = this.$5_0;
        var $v_1 = this.$5_0 + '-topSpan';
        var $v_2 = this.$5_0 + '-menu';
        var $v_3 = this.$5_0 + '-link';
        var $v_4 = '';

        for (var $v_5 = 0, $v_6 = this.$C_0.length; $v_5 < $v_6; $v_5++) {
            var $v_7 = this.$C_0[$v_5];

            if ($v_7.$M_0) {
                $v_4 = $v_7.$c_0;
            }
        }
        $p0.addAttribute('data-sp-cancelWPSelect', 'true');
        $p0.addAttribute('id', STSHtmlEncode(this.$5_0));
        $p0.addCssClass('ms-csrlistview-viewselectormenu');
        $p0.renderBeginTag('span');
        $p0.addAttribute('id', $v_1);
        $p0.addAttribute('title', STSHtmlEncode($v_4));
        $p0.addAttribute('hoveractive', 'ms-menu-althov-active ms-core-form-heading');
        $p0.addAttribute('hoverinactive', 'ms-menu-althov');
        $p0.addAttribute('foa', 'MMU_GetMenuFromClient(\'' + STSHtmlEncode($v_3) + '\')');
        $p0.addAttribute('onmouseover', 'MMU_PopMenuIfShowing(this); MMU_EcbTableMouseOverOut(this, true)');
        $p0.addAttribute('oncontextmenu', 'ClkElmt(this); return false;');
        $p0.addCssClass('ms-menu-althov');
        $p0.renderBeginTag('span');
        $p0.addAttribute('id', $v_3);
        $p0.addAttribute('accesskey', STSHtmlEncode(Strings.STS.L_SelectBackColorKey_TEXT));
        $p0.addAttribute('href', 'javascript:;');
        $p0.addAttribute('oncontextmenu', 'ClkElmt(this); return false;');
        $p0.addAttribute('onfocus', 'MMU_EcbLinkOnFocusBlur(byid(\'' + $v_2 + '\'), this, true);');
        $p0.addAttribute('onkeydown', 'MMU_EcbLinkOnKeyDown(byid(\'' + $v_2 + '\'), MMU_GetMenuFromClientId(\'' + $v_3 + '\'), event);');
        $p0.addAttribute('menutokenvalues', 'MENUCLIENTID=' + $v_3 + ',TEMPLATECLIENTID=' + $v_2);
        $p0.addAttribute('serverclientid', $v_3);
        $p0.addCssClass('ms-menu-a');
        $p0.renderBeginTag('a');
        if (this.$14_0) {
            $p0.addCssClass('ms-displayInline');
            $p0.renderBeginTag('h3');
        }
        else {
            $p0.addCssClass('ms-textXLarge');
            $p0.renderBeginTag('span');
        }
        $p0.writeEncoded($v_4);
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.addAttribute('style', 'height:' + 4 + 'px;width:' + 7 + 'px;position:relative;display:inline-block;overflow:hidden;');
        $p0.addCssClass('s4-clust');
        $p0.addCssClass('ms-viewselector-arrow');
        $p0.addCssClass('ms-menu-stdarw');
        $p0.renderBeginTag('span');
        $p0.addAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
        $p0.addAttribute('alt', STSHtmlEncode(Strings.STS.L_OpenMenu_Text));
        $p0.addAttribute('style', 'border-width:0px;position:absolute;left:-' + 0 + 'px !important; top:-' + 262 + 'px !important;');
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.addAttribute('style', 'height:' + 4 + 'px;width:' + 7 + 'px;position:relative;display:inline-block;overflow:hidden;');
        $p0.addCssClass('s4-clust');
        $p0.addCssClass('ms-viewselector-arrow');
        $p0.addCssClass('ms-menu-hovarw');
        $p0.renderBeginTag('span');
        $p0.addAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
        $p0.addAttribute('alt', STSHtmlEncode(Strings.STS.L_OpenMenu_Text));
        $p0.addAttribute('style', 'border-width:0px;position:absolute;left:-' + 0 + 'px !important; top:-' + 266 + 'px !important;');
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
    }
};
SP.UI.Discussions.SortFilterItem = function SP_UI_Discussions_SortFilterItem(context, displayName) {
    this.$$d_$2T_0 = Function.createDelegate(this, this.$2T_0);
    this.$0_0 = context;
    this.$c_0 = displayName;
    this.$u_0 = 'javascript:;';
    this.$M_0 = false;
    this.$5_0 = 'SortItem' + SP.UI.Discussions.SortFilterItem.$1C;
    SP.UI.Discussions.SortFilterItem.$1E[this.$5_0] = this;
    SP.UI.Discussions.SortFilterItem.$1C++;
};
SP.UI.Discussions.SortFilterItem.onPivotControlMenuOptionClick = function SP_UI_Discussions_SortFilterItem$onPivotControlMenuOptionClick(elementID) {
    var $v_0 = SP.UI.Discussions.SortFilterItem.$1E[elementID];

    if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
        $v_0.onClick();
    }
};
SP.UI.Discussions.SortFilterItem.prototype = {
    $0_0: null,
    $1_0: null,
    $M_0: false,
    $c_0: null,
    $u_0: null,
    $5_0: null,
    get_context: function SP_UI_Discussions_SortFilterItem$get_context() {
        return this.$0_0;
    },
    get_displayName: function SP_UI_Discussions_SortFilterItem$get_displayName() {
        return this.$c_0;
    },
    get_elementID: function SP_UI_Discussions_SortFilterItem$get_elementID() {
        return this.$5_0;
    },
    get_linkUrl: function SP_UI_Discussions_SortFilterItem$get_linkUrl() {
        return this.$u_0;
    },
    set_linkUrl: function SP_UI_Discussions_SortFilterItem$set_linkUrl(value) {
        this.$u_0 = value;
        return value;
    },
    get_isSelected: function SP_UI_Discussions_SortFilterItem$get_isSelected() {
        return this.$M_0;
    },
    set_isSelected: function SP_UI_Discussions_SortFilterItem$set_isSelected(value) {
        this.$M_0 = value;
        return value;
    },
    get_owner: function SP_UI_Discussions_SortFilterItem$get_owner() {
        return this.$1_0;
    },
    set_owner: function SP_UI_Discussions_SortFilterItem$set_owner(value) {
        this.$1_0 = value;
        return value;
    },
    attachEvents: function SP_UI_Discussions_SortFilterItem$attachEvents() {
        var $v_0 = $get(this.$5_0);

        if (!SP.UI.Discussions.Helpers.isNullOrUndefined($v_0)) {
            $addHandler($v_0, 'click', this.$$d_$2T_0);
        }
    },
    onClick: function SP_UI_Discussions_SortFilterItem$onClick() {
        STSNavigate(this.$u_0);
    },
    $2T_0: function SP_UI_Discussions_SortFilterItem$$2T_0($p0) {
        $p0.preventDefault();
        this.onClick();
    },
    $2G_0: function SP_UI_Discussions_SortFilterItem$$2G_0() {
        var $v_0 = new ClientPivotControlMenuOption();

        $v_0.DisplayText = this.$c_0;
        $v_0.SelectedOption = this.$M_0;
        $v_0.OnClickAction = 'SP.UI.Discussions.SortFilterItem.onPivotControlMenuOptionClick(\'' + this.$5_0 + '\');';
        return $v_0;
    }
};
SP.UI.Discussions.ViewSwitchItem = function SP_UI_Discussions_ViewSwitchItem(context, displayName, baseViewID, viewUrlPage) {
    SP.UI.Discussions.ViewSwitchItem.initializeBase(this, [context, displayName]);
    this.$T_1 = baseViewID;
    this.$25_1 = viewUrlPage;
    this.$M_0 = context.BaseViewID === baseViewID && SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(context.overrideSelectCommand);
};
SP.UI.Discussions.ViewSwitchItem.prototype = {
    $T_1: 0,
    $25_1: null,
    onClick: function SP_UI_Discussions_ViewSwitchItem$onClick() {
        this.$0_0.overrideSelectCommand = null;
        this.$0_0.forumViewState.switchToNewView(this.$T_1, this.$25_1);
    }
};
SP.UI.Discussions.QueryOverrideItem = function SP_UI_Discussions_QueryOverrideItem(context, displayName, queryOverride) {
    SP.UI.Discussions.QueryOverrideItem.initializeBase(this, [context, displayName]);
    this.$z_1 = SP.UI.Discussions.Helpers.$1g(context, queryOverride);
    this.$M_0 = context.overrideSelectCommand === this.$z_1;
    if (SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(context.overrideSelectCommand) && SP.UI.Discussions.Helpers.isNullOrUndefinedOrEmpty(this.$z_1)) {
        this.$M_0 = true;
    }
};
SP.UI.Discussions.QueryOverrideItem.prototype = {
    $z_1: null,
    onClick: function SP_UI_Discussions_QueryOverrideItem$onClick() {
        this.$0_0.overrideSelectCommand = this.$z_1;
        this.$0_0.forumViewState.$m_0(3);
    }
};
SP.UI.Discussions.OfficeVersion = function SP_UI_Discussions_OfficeVersion() {
};
SP.UI.Discussions.AsyncRefreshRequest.registerClass('SP.UI.Discussions.AsyncRefreshRequest');
SP.UI.Discussions.ForumRenderer.registerClass('SP.UI.Discussions.ForumRenderer');
SP.UI.Discussions.FeaturedDiscussionRenderer.registerClass('SP.UI.Discussions.FeaturedDiscussionRenderer', SP.UI.Discussions.ForumRenderer);
SP.UI.Discussions.ForumViewState.registerClass('SP.UI.Discussions.ForumViewState');
SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler.registerClass('SP.UI.Discussions.ForumViewState.DeferredAnimatedRefreshHandler');
SP.UI.Discussions.GlobalTemplateOverrides.registerClass('SP.UI.Discussions.GlobalTemplateOverrides');
SP.UI.Discussions.HeaderBehavior.registerClass('SP.UI.Discussions.HeaderBehavior');
SP.UI.Discussions.Helpers.registerClass('SP.UI.Discussions.Helpers');
SP.UI.Discussions.FilterOverride.registerClass('SP.UI.Discussions.FilterOverride');
SP.UI.Discussions.SortOverride.registerClass('SP.UI.Discussions.SortOverride');
SP.UI.Discussions.ManagementViewRenderer.registerClass('SP.UI.Discussions.ManagementViewRenderer');
SP.UI.Discussions.PostBehavior.registerClass('SP.UI.Discussions.PostBehavior');
SP.UI.Discussions.PostBehavior.RenderOptions.registerClass('SP.UI.Discussions.PostBehavior.RenderOptions');
SP.UI.Discussions.PostBehavior.ImageUrls.registerClass('SP.UI.Discussions.PostBehavior.ImageUrls');
SP.UI.Discussions.PostBehavior.DiscussionHelpers.registerClass('SP.UI.Discussions.PostBehavior.DiscussionHelpers');
SP.UI.Discussions.PostAction.registerClass('SP.UI.Discussions.PostAction', SP.UI.Command);
SP.UI.Discussions.EditAction.registerClass('SP.UI.Discussions.EditAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.DeleteAction.registerClass('SP.UI.Discussions.DeleteAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.ReplyAction.registerClass('SP.UI.Discussions.ReplyAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.AlertMeAction.registerClass('SP.UI.Discussions.AlertMeAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.SetBestResponseAction.registerClass('SP.UI.Discussions.SetBestResponseAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.MarkAsFeaturedAction.registerClass('SP.UI.Discussions.MarkAsFeaturedAction', SP.UI.Discussions.PostAction);
SP.UI.Discussions.ReplyBoxControl.registerClass('SP.UI.Discussions.ReplyBoxControl');
SP.UI.Discussions.SortFilterPickerControl.registerClass('SP.UI.Discussions.SortFilterPickerControl');
SP.UI.Discussions.SortFilterItem.registerClass('SP.UI.Discussions.SortFilterItem');
SP.UI.Discussions.ViewSwitchItem.registerClass('SP.UI.Discussions.ViewSwitchItem', SP.UI.Discussions.SortFilterItem);
SP.UI.Discussions.QueryOverrideItem.registerClass('SP.UI.Discussions.QueryOverrideItem', SP.UI.Discussions.SortFilterItem);
SP.UI.Discussions.OfficeVersion.registerClass('SP.UI.Discussions.OfficeVersion');
function sp_ui_discussions_initialize() {
    SP.UI.Discussions.AsyncRefreshRequest.$b = null;
    SP.UI.Discussions.ForumViewState.$K = 0;
    SP.UI.Discussions.GlobalTemplateOverrides.$24 = [2, 3, 7];
    SP.UI.Discussions.GlobalTemplateOverrides.$$cctor();
    SP.UI.Discussions.PostBehavior.$K = 0;
    SP.UI.Discussions.PostBehavior.$Z = 0;
    SP.UI.Discussions.PostBehavior.ImageUrls.$1M = '';
    SP.UI.Discussions.PostBehavior.ImageUrls.$1N = '';
    SP.UI.Discussions.PostBehavior.DiscussionHelpers.$1O = true;
    SP.UI.Discussions.SortFilterPickerControl.$K = 0;
    SP.UI.Discussions.SortFilterPickerControl.$1D = {};
    SP.UI.Discussions.SortFilterItem.$1C = 1;
    SP.UI.Discussions.SortFilterItem.$1E = {};
    SP.UI.Discussions.OfficeVersion.majorBuildVersion = 15;
    SP.UI.Discussions.OfficeVersion.previousMajorBuildVersion = 14;
    SP.UI.Discussions.OfficeVersion.majorVersion = '15';
    SP.UI.Discussions.OfficeVersion.previousVersion = '14';
    SP.UI.Discussions.OfficeVersion.majorVersionDotZero = '15.0';
    SP.UI.Discussions.OfficeVersion.previousVersionDotZero = '14.0';
    SP.UI.Discussions.OfficeVersion.assemblyVersion = '15.0.0.0';
    SP.UI.Discussions.OfficeVersion.wssMajorVersion = '4';
    SP.UI.Discussions.OfficeVersion.webServerExtensionsRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions';
    SP.UI.Discussions.OfficeVersion.webServerExtensionsVersionRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions\\15.0';
    SP.UI.Discussions.OfficeVersion.wssRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions\\15.0\\WSS';
    SP.UI.Discussions.OfficeVersion.officeRegistryRoot = 'SOFTWARE\\Microsoft\\Office\\15.0';
    SP.UI.Discussions.OfficeVersion.mossRegistryRoot = 'SOFTWARE\\Microsoft\\Office Server\\15.0';
    SP.UI.Discussions.OfficeVersion.installedLanguagesPath = 'SOFTWARE\\Microsoft\\Office Server\\15.0\\InstalledLanguages';
    SP.UI.Discussions.OfficeVersion.skuRegistrationPath = 'SOFTWARE\\Microsoft\\Office\\15.0\\Registration';
    SP.UI.Discussions.OfficeVersion.publicKeyToken = '71e9bce111e9429c';
    SP.UI.Discussions.OfficeVersion.assemblyFullyQualifiedName = ', Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c';
}
;
sp_ui_discussions_initialize();
RegisterModuleInit("sp.ui.discussions.js", sp_ui_discussions_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.discussions.js");
