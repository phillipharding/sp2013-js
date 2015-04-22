(function(window) {
   "use strict";
   window.SPUtils = window.SPUtils || {};
   SPUtils.ClientHelpers = function() {
      return {
         LoadSodScript: LoadSodScript
      };

      function LoadSodScript(scriptToLoad, callback, typ) {
         SP.SOD.executeOrDelayUntilScriptLoaded(function() {
         	if (window.console) { window.console.log('SPUtils.ClientHelpers.LoadSodScript() CORE.JS loaded'); }
            SP.SOD.executeOrDelayUntilScriptLoaded(function() {
            	if (window.console) { window.console.log('SPUtils.ClientHelpers.LoadSodScript() SP.JS loaded'); }
            	if (!scriptToLoad || !scriptToLoad.length) {
            		if (callback) callback();
            		return;
            	}

               var loaded = false;
               if (typeof(_v_dictSod) !== 'undefined' && _v_dictSod[scriptToLoad] == null) {
               	var sodUrl = '';
               	if (typeof _spPageContextInfo === 'undefined' || _spPageContextInfo != null) {
               		if (window.console) { window.console.log('SPUtils.ClientHelpers.LoadSodScript() _spPageContextInfo is undefined or null'); }
               		sodUrl = String.format("{0}{1}", SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl(), scriptToLoad);
               	} else {
               		sodUrl = SP.Utilities.Utility.getLayoutsPageUrl(scriptToLoad);
               	}
                  SP.SOD.registerSod(scriptToLoad, sodUrl);
                  if (window.console) { window.console.log('SPUtils.ClientHelpers.LoadSodScript() SP.SOD.registerSod('+sodUrl+')'); }
               } else {
                  loaded = (_v_dictSod[scriptToLoad].state === Sods.loaded);
               }
               if (window.console) { window.console.log('SPUtils.ClientHelpers.LoadSodScript() IsLoaded('+scriptToLoad+') = '+loaded); }
               if (loaded) {
                  if (callback) callback();
               } else {
                  EnsureScriptFunc(scriptToLoad, typeof(typ) === 'undefined' ? false : typ, callback);
               }
            }, 'SP.js');
         }, 'core.js');
      }
   }();

})(window);

(function() {

/*
	/_layouts/15/sp.ui.blogs.js
	~sitecollection/_catalogs/masterpage/Display Templates/news-csr.js
	~sitecollection/_layouts/15/sp.init.js|~sitecollection/_catalogs/masterpage/Display Templates/news-csr.js

	ctx.ListData.PrevHref = '?&&p_PublishedDate=20141010%2017%3a00%3a00&&PageFirstRow=1&&View=c71bee3e-7d29-42eb-88cd-9a2ddf89dd00'
	ctx.ListData.NextHref = '?Paged=TRUE&p_PublishedDate=20141013%2010%3a00%3a00&p_ID=10&PageFirstRow=6&&View=c71bee3e-7d29-42eb-88cd-9a2ddf89dd00'

	BaseViewID
		0: Summary View
		7: Post.aspx view
		9: Date.aspx view
		8: Category.aspx view

*/
window.RBNews = window.RBNews || { ViewIDs: { Summary: 0, Post: 7, Date: 9, Category: 8 } };

RBNews.TemplateOverride = function() {
	var
		_cmdBars = [],
		_config = {
			RootElementId: null,
			BaseViewID: null,
			PrevHref: null,
			NextHref: null,
			CategoryId: null,
			StartDateTime: null,
			EndDateTime: null,
			LMY: null
		},
		debug = false,
		ctxOverride = {}, 
		ctxSingleArticleOverride = {}, 
		module = {
			share: shareArticle,
			setLike: likeUnlikeArticle,
			register: function() {
				SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxSingleArticleOverride);
				SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxOverride);
			}
		};
	ctxOverride = {
		OnPreRender: OnPreRender,
		Templates: {
			Header: HeaderRender,
			Footer: FooterRender,
			Item: debug ? ItemRenderDebug : ItemRender
		},
		OnPostRender: OnPostRender,
		ListTemplateType: 301
		/*BaseViewID: 0*/
	};
	ctxSingleArticleOverride = {
		OnPreRender: OnPreRender,
		Templates: {
			Fields: {
				'Title': {'View': FieldTitleViewRender },
				'Body': {'View': FieldBodyViewRender },
				'PublishedDate': {'View': FieldPublishedDateViewRender }
			}
		},
		ListTemplateType: 301,
		BaseViewID: 7
	};

	function shareArticle($e) {
		var
			url = $e.getAttribute('href'),
			title = $e.getAttribute('data-title');
		window.location.href = 'mailto:?body=' + escapeProperlyCore(url, false) + '&subject=' + escapeProperlyCore(title, false);
		return false;
	}
	function likeUnlikeArticle($e) {
		var
			setLike = false,
			listid = $e.getAttribute('data-listid'),
			itemid = $e.getAttribute('data-itemid'),
			userid = $e.getAttribute('data-userid'),
			$c = $e.parentNode.querySelector('.rating'),
			currentLikeCount = parseInt($c.innerHTML),
			newEText = '';
		if ($e.blur) $e.blur();
		if ($e.innerHTML.match(/unlike/gi)) {
			currentLikeCount = Math.max(0,currentLikeCount-1);
			newEText = 'Like';
			setLike = false;
		} else if ($e.innerHTML.match(/like/gi)) {
			currentLikeCount++;
			newEText = 'Unlike';
			setLike = true;
		} else { 
			/* do nothing */
			return false;
		}
		$e.innerHTML = "<i class='fa fa-refresh fa-spin'></i>";
	
		var clientContext = new SP.ClientContext();
		EnsureScriptFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function() {
			Microsoft.Office.Server.ReputationModel.Reputation.setLike(clientContext,listid,itemid,setLike);
			clientContext.executeQueryAsync(function() {
				$c.innerHTML = String.format("{0}&nbsp;", currentLikeCount);
				$e.innerHTML = newEText;
			}, function(sender, args) {
				$e.innerHTML = "<i class='fa fa-exclamation-triangle'></i>";
			});
		});

		return false;
	}
	function console(msg) {
		if (!window.console) return;
		try { 
			window.console.log(msg); 
		}
		catch (e) {
		}
	}

	function OnPreRender(ctx) {
		console(String.format(">>In OnPreRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
	   var $v0 = SP.ScriptHelpers.getDocumentQueryPairs();
		
		JSRequest.EnsureSetup();	   
		_config.BaseViewID = ctx.BaseViewID;
      _config.PrevHref = ctx.ListData['PrevHref'];
      _config.NextHref = ctx.ListData['NextHref'];
	
		if (_config.BaseViewID == 8) { /* category view */
		   _config.CategoryId = $v0['CategoryId'];
		   _config.CategoryTitle = $v0['CategoryTitle'];
		   if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.CategoryTitle)) {
		   	_config.CategoryTitle = decodeURIComponent(_config.CategoryTitle);
		   } else {
		   	_config.CategoryTitle = "Unknown Category";
		   }

			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.PrevHref)) {
				_config.PrevHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.PrevHref, 'CategoryId', _config.CategoryId);
				_config.PrevHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.PrevHref, 'CategoryTitle', _config.CategoryTitle);
				ctx.ListData['PrevHref'] = _config.PrevHref;
			}
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.NextHref)) {
				_config.NextHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.NextHref, 'CategoryId', _config.CategoryId);
				_config.NextHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.NextHref, 'CategoryTitle', _config.CategoryTitle);
				ctx.ListData['NextHref'] = _config.NextHref;
			}
		} else if (_config.BaseViewID == 9) { /* Date view */
		   _config.StartDateTime = $v0['StartDateTime'];
		   _config.EndDateTime = $v0['EndDateTime'];
		   _config.LMY = $v0['LMY'];

	      if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.StartDateTime)) {
				_config.StartDateTime = unescapeProperly(_config.StartDateTime);
	      }
	      if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.EndDateTime)) {
				_config.EndDateTime = unescapeProperly(_config.EndDateTime);
	      }
	      if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.LMY)) {
				_config.LMY = unescapeProperly(_config.LMY);
	      }

			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.PrevHref)) {
				_config.PrevHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.PrevHref, 'StartDateTime', _config.StartDateTime);
				_config.PrevHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.PrevHref, 'EndDateTime', _config.EndDateTime);
				_config.PrevHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.PrevHref, 'LMY', _config.LMY);
				ctx.ListData['PrevHref'] = _config.PrevHref;
			}
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.NextHref)) {
				_config.NextHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.NextHref, 'StartDateTime', _config.StartDateTime);
				_config.NextHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.NextHref, 'EndDateTime', _config.EndDateTime);
				_config.NextHref = SP.ScriptHelpers.replaceOrAddQueryString(_config.NextHref, 'LMY', _config.LMY);
				ctx.ListData['NextHref'] = _config.NextHref;
			}
		}
	}
	function HeaderRender(ctx) {
		console(String.format(">>In HeaderRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		
		var html = [];
		_config.RootElementId = String.format("{0}_{1}", ctx.wpq, SP.UI.UIUtility.generateRandomElementId());
		html.push(String.format("<div id='{0}' class='news-post-container'>", _config.RootElementId));

		/* render category view / date view title */
		if (_config.BaseViewID == 8) { /* category view */
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(JSRequest.QueryString["CategoryTitle"])) {
				html.push(String.format("<h1 class='ms-core-pageTitle' id='pageTitle'><span>{0}</span></h1>", decodeURIComponent(JSRequest.QueryString["CategoryTitle"])));
			}
		} else if (_config.BaseViewID == 9) { /* Date view */
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(JSRequest.QueryString["LMY"])) {
				html.push(String.format("<h1 class='ms-core-pageTitle' id='pageTitle'><span>{0}</span></h1>", decodeURIComponent(JSRequest.QueryString["LMY"])));
			}
		}

		/* render pagination controls */
		if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.PrevHref) || !SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.NextHref)) {
			html.push("<div class='navigation'><ul>");
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.PrevHref)) {
				html.push(String.format("<li class='previous'><a href='javascript:' onclick='RefreshPageTo(event, \"{0}\");return false;'><i class='fa fa-chevron-left'></i>&nbsp;{1}&nbsp;</a></li>", ctx.ListData['PrevHref'], Strings.STS.L_SPClientPrevious));
			}
			html.push(String.format("<li><a>Articles {0}&nbsp;<i class='fa fa-ellipsis-h'></i>&nbsp;{1}</a></li>", ctx.ListData.FirstRow, ctx.ListData.LastRow));
			if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(_config.NextHref)) {
				html.push(String.format("<li class='next'><a href='javascript:' onclick='RefreshPageTo(event, \"{0}\");return false;'>&nbsp;{1}&nbsp;<i class='fa fa-chevron-right'></i></a></li>", ctx.ListData['NextHref'], Strings.STS.L_SPClientNext));
			}
			html.push("</ul></div>");
		}

		html.push("<div class='pure-g'>");

		return html.join('');
	}
	function FooterRender(ctx) {
		console(String.format(">>In FooterRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		return "</div></div>";
	}
	function ItemRenderDebug(ctx, field, listItem, listSchema) {
		console(String.format(">>In ItemRenderDebug, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var
			html = [],
			$itemElemId = String.format("{0}_post_{1}", ctx.wpq, ctx.CurrentItem['ID']);
		html.push(String.format("<div class='pure-u-1 pure-u-lg-1-2 pure-u-xl-1-3 news-post-item' id='{0}'><div class='box'>", $itemElemId));

		for(var k in ctx.CurrentItem) {
			html.push(String.format("<div>{0} = [[{1}]]</div>", k, ctx.CurrentItem[k]));
		}
		html.push("</div></div>");
		return html.join('');
	}

	function getItemPostUrl(ctx) {
		var url = '';
		url = GlobalState.SPUIBlogs_blogsPostUrl.replace("{ID}", ctx.CurrentItem["ID"]);
		return url;
	}
	function getItemCategoryUrl(ctx, category) {
		var url = String.format("{0}/SitePages/Categories.aspx?CategoryId={{CategoryId}}&CategoryTitle={{CategoryTitle}}", ctx.HttpRoot);
		url = url.replace("{CategoryId}", category['lookupId']);
		url = url.replace("{CategoryTitle}", encodeURIComponent(category['lookupValue']));
		return url;
	}
	function renderItemNumComments(ctx, $nc, $h, $posturl) {
		/*<span class='comments' title='comments'><a href='#'><i class="fa fa-comment"></i>&nbsp;33</a></span>*/
		var $v1 = SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPClientNumCommentsTemplate, Strings.STS.L_SPClientNumCommentsTemplateIntervals, Number.parseLocale($nc));

		$h.addCssClass('comments');
		$h.addAttribute('title', String.format($v1, $nc));
		$h.renderBeginTag('span');
			$h.addAttribute('href', $posturl + '#comments');
			$h.renderBeginTag('a');
			$h.write(String.format("{0}&nbsp;<i class='fa fa-comment'></i>", Number.parseLocale($nc)));
			$h.renderEndTag();			
		$h.renderEndTag();
	}
	function renderItemCategories(ctx, categories) {
		var $v0 = new SP.HtmlBuilder();
		for (var $v1 = 0, $v2 = categories.length; $v1 < $v2; $v1++) {
			var 
				$category = categories[$v1],
				$url = getItemCategoryUrl(ctx, $category);
		
			/* <span class='tags'><a href='#'>#News</a></span> */
			$v0.addCssClass('tags');
			$v0.renderBeginTag('span');
				$v0.addAttribute('href', $url);
				$v0.addAttribute('id', 'blgcat');
				$v0.renderBeginTag('a');
				$v0.writeEncoded($category['lookupValue']);
				$v0.renderEndTag();
			$v0.renderEndTag();
		}
		return $v0.toString();
	}
	function renderRatings(ctx, $h) {
    	if (!SP.ScriptHelpers.getFieldFromSchema(ctx.ListSchema, "LikesCount")) {
    		/* do nothing if Ratings w/Likes are not enabled on the list */
    		return;
    	}
    	var
    		isLikedByMe = false,
    		myUserId = ctx.CurrentUserId.toString(),
    		likescount = ctx.CurrentItem['LikesCount'],
    		likedby = ctx.CurrentItem['LikedBy'];
    	if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(likescount)) {
    		likescount = '0';
    	}
		if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(likedby)) {
			for (var $v0 = 0; $v0 < likedby.length; $v0++) {
				var $v1 = likedby[$v0];
				if ($v1.id === myUserId) {
					isLikedByMe = true;
					break;
				}
			}
		}

    	$h.addCssClass('ratings');
    	$h.renderBeginTag('span');
	    	$h.addCssClass('rating');
	    	$h.addAttribute('title', 'likes');
	    	$h.renderBeginTag('span');
	    	$h.write(String.format("{0}&nbsp;", likescount));
	    	$h.renderEndTag();

	    	$h.write("<i class='fa fa-thumbs-up' title='likes'></i>&nbsp;|&nbsp;");

	   	$h.addAttribute('href', 'javascript:');
	   	$h.addAttribute('data-listid', ctx.listName);
	   	$h.addAttribute('data-itemid', ctx.CurrentItem['ID']);
	   	$h.addAttribute('data-userid', myUserId);
	   	$h.addAttribute('onclick',String.format("RBNews.TemplateOverride.setLike(this);return false;"));
	   	$h.renderBeginTag('a');
	   	$h.write(isLikedByMe ? "Unlike" : "Like");
	   	$h.renderEndTag();
    	$h.renderEndTag();
	}
	function renderShareLink(ctx, $h, postUrl) {
		var
			title = ctx.CurrentItem["Title"];
    	$h.addCssClass('share');
    	$h.renderBeginTag('span');
    		$h.addAttribute('href', postUrl);
    		$h.addAttribute('data-title', title);
	   	$h.addAttribute('onclick',String.format("RBNews.TemplateOverride.share(this);return false;"));
    		$h.renderBeginTag('a');
    		$h.write("<i class='fa fa-envelope'></i>&nbsp;Share");
    		$h.renderEndTag();
    	$h.renderEndTag();
	}
	function renderEditLink(ctx, $h, editUrl) {
    	$h.addCssClass('edit');
    	$h.renderBeginTag('span');
    		$h.addAttribute('href', editUrl);
    		$h.renderBeginTag('a');
    		$h.write("<i class='fa fa-edit'></i>&nbsp;Edit");
    		$h.renderEndTag();
    	$h.renderEndTag();
	}
	function ItemRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In ItemRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var
			html = [],
			$itemElemId = String.format("{0}_post_{1}", ctx.wpq, ctx.CurrentItem['ID']);
		html.push(String.format("<div class='pure-u-1 pure-u-lg-1-2 pure-u-xl-1-3 news-post-item' id='{0}'><div class='box'>", $itemElemId));

		var
			postUrl = getItemPostUrl(ctx),
			author = spMgr.RenderFieldByName(ctx, 'Author', ctx.CurrentItem, ctx.ListSchema),
			postTime = spMgr.RenderFieldByName(ctx, 'PublishedDate.TimeOnly', ctx.CurrentItem, ctx.ListSchema)
			categories = ctx.CurrentItem["PostCategory"],
			body = ctx.CurrentItem["Body"],
			newsPageImage = ctx.CurrentItem["NewsPageImage"];
		var
			d = new Date(ctx.CurrentItem["PublishedDate.ISO8601"]),
			newspostdate = String.format("<div class='news-post-item-date'><span class='date'>{0}</span><span class='month'>{1}</span></div>",
												d.getDate(), d.format('MMM'));

		if (!newsPageImage || !newsPageImage.length || !newsPageImage.match(/<img /gi)) {
			newsPageImage = String.format("<img src='{0}/SiteAssets/news/images/postdefault-image-kites.jpg' class='default' />", ctx.HttpRoot);
		}

		if (body && body.length) {
			body = body.replace(/\u200B/g,'');
		}
		if (_config.BaseViewID !== 7) {
			/* if not in POST view, then strip HTML and truncate the post copy */
			body = SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis(body, 200);
			if (body && body.match(/[.]{3}$/g)) {
				/* copy was truncated, add the Read More link */
				body += String.format("<a class='news-post-readmore' href='{0}'>&nbsp;Read More</a>", postUrl);
			}
		}

		html.push(newspostdate);
		html.push(String.format("<div class='news-post-item-image'>{0}</div>", newsPageImage));
		html.push(String.format("<div class='new-post-item-by'><span class='ms-metadata ms-textSmall'>By</span><span class='author'>&nbsp;{0}&nbsp;</span><span class='ms-metadata ms-textSmall'>at {1}</span></div>", author, postTime));
		html.push(String.format("<h2><a href='{0}'>{1}</a></h2>", postUrl, ctx.CurrentItem.Title));
		html.push(String.format("<div>{0}</div>", body));

		var $h = new SP.HtmlBuilder();

		/* categories social bar */
		var categoriesHtml = renderItemCategories(ctx, categories);
		if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(categoriesHtml)) {
			$h.addCssClass('social');
			$h.renderBeginTag('div');
			$h.write(categoriesHtml);
			$h.renderEndTag();
		}

		/* behaviour social bar */
		$h.addCssClass('ms-blog-commandSpace social2');
		$h.renderBeginTag('div');

		/* Comand: comments */
		var $nc = ctx.CurrentItem['NumComments'];
		if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($nc)) {
		   $nc = '0';
		}
		renderItemNumComments(ctx, $nc, $h, postUrl);

		/* Comand: likes/ratings */
		renderRatings(ctx, $h);

		/* Comand: share link */
		renderShareLink(ctx, $h, postUrl);

		/* Comand: edit */
		var $v4 = SP.ScriptHelpers.getListLevelPermissionMask(ctx.CurrentItem);
		var $v5 = Number.parseInvariant(SP.ScriptHelpers.getUserFieldProperty(ctx.CurrentItem, 'Author', 'id'));
		if (ctx.CurrentUserId === $v5 && SP.ScriptHelpers.hasPermission($v4, 4) || SP.ScriptHelpers.hasPermission($v4, 2048)) {
		   var editUrl = SP.ScriptHelpers.replaceOrAddQueryString(ctx.editFormUrl, 'ID', ctx.CurrentItem['ID']);
		   var $v8 = window.self.ajaxNavigate;

		   editUrl = SP.ScriptHelpers.replaceOrAddQueryString(editUrl, 'Source', $v8.get_href());
			renderEditLink(ctx, $h, editUrl);
		}
		/**/

		$h.renderEndTag();
		html.push($h.toString());

		html.push('</div></div>');
		return html.join('').replace(/\u200B/g,'');;
	}
	function OnPostRender(ctx) {
		console(String.format(">>In OnPostRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));

		if (_cmdBars.length) {
			for(var i=0; i<_cmdBars.length; i++){
				_cmdBars[i].attachEvents();
			}
		}
	}

/* CTXSINGLEARTICLEOVERRIDE */
	function FieldTitleViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In FieldTitleViewRender [{3}], List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType, ctx.CurrentItem.PublishedDate));
		/* close the <A/> and <H2/> tags first */

		var html = ["</a></h2>"];
		var
			postUrl = getItemPostUrl(ctx),
			author = spMgr.RenderFieldByName(ctx, 'Author', ctx.CurrentItem, ctx.ListSchema),
			postTime = spMgr.RenderFieldByName(ctx, 'PublishedDate.TimeOnly', ctx.CurrentItem, ctx.ListSchema)
			categories = ctx.CurrentItem["PostCategory"],
			body = ctx.CurrentItem["Body"],
			newsPageImage = ctx.CurrentItem["NewsPageImage"];
		var
			d = new Date(ctx.CurrentItem["PublishedDate.ISO8601"]),
			newspostdate = String.format("<div class='news-post-item-date'><span class='date'>{0}</span><span class='month'>{1}</span></div>",
												d.getDate(), d.format('MMM'));

		if (!newsPageImage || !newsPageImage.length || !newsPageImage.match(/<img /gi)) {
			newsPageImage = String.format("<img src='{0}/SiteAssets/news/images/postdefault-image-kites.jpg' class='default' />", ctx.HttpRoot);
		}

		if (body && body.length) {
			body = body.replace(/\u200B/g,'');
		}

		html.push(newspostdate);
		html.push(String.format("<div class='news-post-item-image'>{0}</div>", newsPageImage));
		html.push(String.format("<div class='new-post-item-by'><span class='ms-metadata ms-textSmall'>By</span><span class='author'>&nbsp;{0}&nbsp;</span><span class='ms-metadata ms-textSmall'>at {1}</span></div>", author, postTime));
		html.push(String.format("<div class='new-post-title'><h2><a href='{0}'>{1}</a></h2></div>", postUrl, ctx.CurrentItem.Title));
		html.push(String.format("<div>{0}</div>", body));

		/* social start */
		var $h = new SP.HtmlBuilder();

		/* categories social bar */
		var categoriesHtml = renderItemCategories(ctx, categories);
		if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(categoriesHtml)) {
			$h.addCssClass('social');
			$h.renderBeginTag('div');
			$h.write(categoriesHtml);
			$h.renderEndTag();
		}

		/* behaviour social bar */
		$h.addCssClass('ms-blog-commandSpace social2');
		$h.renderBeginTag('div');

		/* Comand: comments */
		var $nc = ctx.CurrentItem['NumComments'];
		if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($nc)) {
		   $nc = '0';
		}
		renderItemNumComments(ctx, $nc, $h, postUrl);

		/* Comand: likes/ratings */
		renderRatings(ctx, $h);

		/* Comand: share link */
		renderShareLink(ctx, $h, postUrl);

		/* Comand: edit */
		var $v4 = SP.ScriptHelpers.getListLevelPermissionMask(ctx.CurrentItem);
		var $v5 = Number.parseInvariant(SP.ScriptHelpers.getUserFieldProperty(ctx.CurrentItem, 'Author', 'id'));
		if (ctx.CurrentUserId === $v5 && SP.ScriptHelpers.hasPermission($v4, 4) || SP.ScriptHelpers.hasPermission($v4, 2048)) {
		   var editUrl = SP.ScriptHelpers.replaceOrAddQueryString(ctx.editFormUrl, 'ID', ctx.CurrentItem['ID']);
		   var $v8 = window.self.ajaxNavigate;

		   editUrl = SP.ScriptHelpers.replaceOrAddQueryString(editUrl, 'Source', $v8.get_href());
			renderEditLink(ctx, $h, editUrl);
		}
		/**/

		$h.renderEndTag();
		html.push($h.toString());
		/* social end */

		return html.join('').replace(/\u200B/g,'');;
	}
	function FieldPublishedDateViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In FieldPublishedDateViewRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var
			html = [''];
		return html.join('');
	}
	function FieldBodyViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In FieldBodyViewRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var
			html = [''];
		return html.join('');
	}
/**/

	return module;
}();

function RegisterContext() {
	EnsureScriptFunc("clienttemplates.js", "SPClientTemplates", function() {
		RBNews.TemplateOverride.register();
	});

	SPUtils.ClientHelpers.LoadSodScript('reputation.js', function() { if (window.console) window.console.log('REPUTATION.JS loaded'); });
}

function RegisterInMDS() {
	/* RegisterContext override for MDS enabled site */
	RegisterModuleInit(_spPageContextInfo.siteServerRelativeUrl + "/_catalogs/masterpage/Display Templates/news-csr.js", RegisterContext);
	RegisterContext();
}

if (typeof (RegisterModuleInit) == "function" && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null) {
	RegisterInMDS();
} else {
	RegisterContext();
}

})();


