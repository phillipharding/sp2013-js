(function() {

window.csr = window.csr || {};
csr.templateoverride = function() {
	var
		ctxOverride = {}, 
		module = {
			register: function() {
				SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxOverride);
			}
		};
	ctxOverride = {
		OnPreRender: OnPreRender,
		Templates: {
			View: ViewRender,
			Body: BodyRender,
			Header: HeaderRender,
			Footer: FooterRender,
			Item: ItemRender,
			Fields: {
				'Title': {'View': FieldTitleViewRender },
				'Body': {'View': FieldBodyViewRender },
				'PostCategory': {'View': FieldPublishedDateViewRender },
				'PublishedDate': {'View': FieldPublishedDateViewRender },
				'PostedByWithDate': {'View': FieldPublishedDateViewRender },
				'NewsRollupImage': {'View': FieldPublishedDateViewRender }
			}
		},
		OnPostRender: OnPostRender,
		ListTemplateType: 301
		/*BaseViewID: 0*/
	};

	function fom(m) {
		var ms = "00"+(m);
		return ms.substring(ms.length-2);
	}

	function console(msg) {
		if (!window.console) return;
		try { 
			window.console.log(msg); 
		}
		catch (e) {
		}
	}

	function ViewRender(ctx) {
		console(String.format(">>In ViewRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		return "";
	}
	function BodyRender(ctx) {
		console(String.format(">>In BodyRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		return "";
	}
	function FieldPublishedDateViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>PublishedDate=", ctx.CurrentItem.PublishedDate));
		var html = "<div class='news-post-postdate v-zigzag'><span class='year'>2014</span><span class='date'>20/11</span></div>";

		return html;
	}
	function FieldTitleViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In FieldTitleViewRender [{3}], List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType, ctx.CurrentItem.PublishedDate));
		/* close the <A/> and <H2/> tags first */

		var html = '', headerimage = '', newspostdate = '';
		if (ctx.CurrentItem.NewsRollupImage && ctx.CurrentItem.NewsRollupImage.match(/<img /gi)) {
			headerimage = String.format("<div class='news-post-title-image'>{0}</div>",ctx.CurrentItem.NewsRollupImage);
		} else {
			headerimage = String.format("<div class='news-post-title-image'><img src='{0}/SiteAssets/news/images/news-icon.png' class='default' /></div>",ctx.HttpRoot);
		}

		var pd = d = new Date(ctx.CurrentItem["PublishedDate.ISO8601"]);
		newspostdate = String.format("<div class='news-post-postdate v-zigzag'><span class='year'>{0}</span><span class='date'>{1}/{2}</span></div>",
												d.getFullYear(), fom(d.getDate()), fom(d.getMonth()+1));

		if (ctx.BaseViewID == 0 || ctx.BaseViewID == 7) {
			/* summary view or post view */
			html = String.format("</a></h2><h2 class='news-post-title'>{3}{4}<a href='{0}/Post.aspx?ID={1}' class=''>{2}</a></h2>",
								ctx.listUrlDir,
								ctx.CurrentItem.ID,
								ctx.CurrentItem.Title,
								headerimage,
								newspostdate);
		} else if (ctx.BaseViewID == 9 || ctx.BaseViewID == 8) {
			/* category view or date (range) view */
			var body = String.format("<div class='news-post-bodysummary'>{2}<div class='ellipsis'><a href='{0}/Post.aspx?ID={1}' title='read the rest of this article'>...</a></div></div>", 
								ctx.listUrlDir,
								ctx.CurrentItem.ID,
								ctx.CurrentItem.Body);
			html = String.format("</a></h2><h2 class='news-post-title'>{3}{5}<a href='{0}/Post.aspx?ID={1}' class=''>{2}</a></h2>{4}",
								ctx.listUrlDir,
								ctx.CurrentItem.ID,
								ctx.CurrentItem.Title,
								headerimage,
								body,
								newspostdate);
			/* remove ZWB (zero width breaks which sharepoint occasionally puts in the markup for rich html field content */
			html = html.replace(/\u200B/g,'');
		} else {
			/* some other view I don't know about */
			html = ctx.CurrentItem.Title;
		}
		return html;
	}
	function FieldBodyViewRender(ctx, field, listItem, listSchema) {
		console(String.format(">>In FieldBodyViewRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var html = "";
		if (ctx.CurrentItem.NewsPageImage && ctx.CurrentItem.NewsPageImage.match(/<img /gi)) {
			if (ctx.BaseViewID == 0) {
				/* summary view (homepage) */
				html = String.format("<div class='news-post-pageimage {1}'>{0}</div>",ctx.CurrentItem.NewsPageImage,ctx.CurrentItem.NewsPageImageOrientation);
			} else {
				/* might do something different here... */
				html = String.format("<div class='news-post-pageimage {1}'>{0}</div>",ctx.CurrentItem.NewsPageImage,ctx.CurrentItem.NewsPageImageOrientation);
			}
		}
		html += ctx.CurrentItem.Body;		

		/* remove ZWB (zero width breaks which sharepoint occasionally puts in the markup for rich html field content */
		html = html.replace(/\u200B/g,'');
		return html;
	}
	function OnPreRender(ctx) {
		console(String.format("<<2>>In OnPreRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
	}
	function HeaderRender(ctx) {
		console(String.format(">>In HeaderRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		return "<div class='new-post-summary'>";
	}
	function FooterRender(ctx) {
		console(String.format(">>In FooterRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		return "</div>";
	}
	function ItemRender(ctx) {
		console(String.format(">>In ItemRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
		var html = '';
		for(var k in ctx.CurrentItem) {
			html += String.format("<div>{0} = {1}</div>", k, ctx.CurrentItem[k]);
		}
		return html;
	}
	function OnPostRender(ctx) {
		console(String.format(">>In OnPostRender, List={1} ListtemplateType={2} BaseViewID={0}", ctx.BaseViewID, ctx.ListTitle, ctx.ListTemplateType));
	}

	return module;
}();

function RegisterContext() {
	SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {
//		SP.SOD.executeFunc("sp.ui.blogs.js", "SP.UI.Blogs.GlobalTemplateOverrides", function() {
			csr.templateoverride.register();	
//		});
	});
}

function RegisterInMDS() {
	/* RegisterContext override for MDS enabled site */
	RegisterModuleInit(_spPageContextInfo.siteServerRelativeUrl + "/_catalogs/masterpage/Display Templates/news-post-summary.js", RegisterContext);
	RegisterContext();
}

if (typeof (RegisterModuleInit) == "function" && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null) {
	RegisterInMDS();
} else {
	RegisterContext();
}

})();


