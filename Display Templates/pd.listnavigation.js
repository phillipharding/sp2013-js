(function($) {
"use strict";

/*
	Full template manager template override object ~ from clienttemplates.js
		SPClientTemplates.TemplateManager = {};
		SPClientTemplates.TemplateManager._TemplateOverrides = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.View = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Header = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Body = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Footer = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Group = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Item = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.Fields = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.OnPreRender = {};
		SPClientTemplates.TemplateManager._TemplateOverrides.OnPostRender = {};

	~sitecollection/_layouts/15/sp.init.js|
	JSLink = ~sitecollection/_layouts/15/clienttemplates.js|~sitecollection/_catalogs/masterpage/display templates/pd.listnavigation.js
*/

window.pd = window.pd || {};
pd.csr = pd.csr || {};

pd.csr.listnavigation = function() {
	var webPartCaption = null;
	return {
		loadResource: loadResource,
		register: register
	}

	function register() {
		var ctxOverride = {};
		ctxOverride.OnPreRender = onPreRender;
		ctxOverride.OnPostRender = onPostRender;

		SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxOverride);
	}

	function loadResource(url) {
		if (!url || !url.length) return;
		url = url
				.replace(/^~sitecollection/gi, _spPageContextInfo.siteServerRelativeUrl)
				.replace(/^~site/gi, _spPageContextInfo.webServerRelativeUrl);
		if (url.match(/.css$/gi)) {
			var link = document.createElement('link');
			link.href = url;
			link.rel = 'stylesheet';
			document.getElementsByTagName('head')[0].appendChild(link);
		} else if (url.match(/.js$/gi)) {
			var script = document.createElement('script');
			script.src = url;
			script.type = 'text/javascript';
			document.getElementsByTagName('head')[0].appendChild(script);
		}
   }

   function onPreRender(renderCtx) {
   	if (window.console) console.log('>>In onPreRender()');
   	ensureSPJS(ctx);
	}

	function buildNavigationItemUrl(folderUrl, renderCtx) {
		var
			pageUrl = location.pathname,
			searchParams = location.search && location.search.length
									? location.search.split('?')[1].split('&')
									: [],
			newParams = [];
		for (var i = 0; i < searchParams.length; i++) {
			var param = searchParams[i].split('=');
			if (param[0].match(/rootfolder/gi)) continue;
			newParams.push(param[0]+'='+(param.length > 1 ? param[1] : ''));
		}

		if (newParams.length) {
			pageUrl += '?';
			if (folderUrl && folderUrl.length) {
				pageUrl += 'RootFolder=' + escapeProperly(folderUrl) + '&';
			}
			pageUrl += newParams.join('&');
		} else if (folderUrl && folderUrl.length) {
			pageUrl += '?';
			pageUrl += 'RootFolder=' + escapeProperly(folderUrl);
		}
		return pageUrl;
	}

	function buildNavigation(navTh, renderCtx) {
		var
			html = "<ul style='list-style:none;margin:0;padding:0;background-color:rgba(205,230,247,0.5);'>",
			ctxListbase = renderCtx.listUrlDir.replace(renderCtx.listUrlDir.match(/\/[^\/]*$/gi),'')+'/',
			ctxRf = !renderCtx.rootFolder || !renderCtx.rootFolder.length 
							? renderCtx.listUrlDir 
							: renderCtx.rootFolder,
			wsrUrl = _spPageContextInfo.webServerRelativeUrl.replace(/\/$/gi,''),
			rootFolder = unescapeProperly(ctxRf).replace(wsrUrl + '/','');

		var first = -1, folders = rootFolder.replace(/^\//gi,'').split('/');
		for(var i = 0; i < folders.length; i++) {
			if (ctxListbase.match(folders[i])) continue;
			first = first < 0 ? first = i : first;

			// build navigation breadcrumb url
			var
				furl = folders.slice(0,i+1).join('/'),
				folderUrl = wsrUrl +'/' + furl;

			// build navigation breadcrumb
			var
				a = '<a style="display:inline-block;padding:5px 5px;" ',
				li = "<li style='display:inline-block;'>"
			a += 'href="' + buildNavigationItemUrl(folderUrl, renderCtx);
			if (i === first) {
				a += '">' + ((webPartCaption && webPartCaption.length) ? webPartCaption : folders[i]) + '</a>';
			} else {
				a += '">' + folders[i] + '</a>';
			}
			li += a;
			li += '</li>';

			// add separator
			if ((i+1) < folders.length) {
				li += "<li class='sep' style='display:inline-block;'><img src='/_layouts/15/images/scrollbar-mouseout-rightarrow.png' style='padding:0 4px;position:relative;top:0px;' /></li>";
			}
			html += li;
		}

		html += '</ul>';
		navTh.innerHTML = html;
	}

	function onPostRender(renderCtx) {
   	if (window.console) console.log('>>In onPostRender()');

   	/* add navigation table header row above table column headers */
   	var
   		wpcaption = document.getElementById("WebPartCaption" + renderCtx.wpq),
   		wpthead = document.getElementById("js-listviewthead-" + renderCtx.wpq),
   		wpfirstth = wpthead ? wpthead.firstChild : null;
   	if (!wpthead) return;
   	if (wpthead.getAttribute('pd-viewnavigationtr')) return;
   	wpthead.setAttribute('pd-viewnavigationtr', '1');

   	if (wpcaption) {
   		wpcaption = wpcaption.previousElementSibling || wpcaption.previousSibling;
   		if (wpcaption) webPartCaption = wpcaption.innerHTML && wpcaption.innerHTML.length ? wpcaption.innerHTML : null;
   	}

   	var
   		navTr = document.createElement('TR'),
   		navTh = document.createElement('TH');
   	navTr.setAttribute('valign','top');
   	navTr.className = 'ms-viewheadertr ms-vhltr pd-viewnavigationtr';
   	navTh.setAttribute('colspan','99');
   	navTh.className = 'ms-vh2';
   	navTr.appendChild(navTh);
   	buildNavigation(navTh, renderCtx);
   	if (wpfirstth)
   		wpthead.insertBefore(navTr, wpfirstth);
   	else
   		wpthead.appendChild(navTr);
	}

	function ensureSPJS(renderCtx) {
	  	if (window.console) console.log('>>In ensureSPJS()');
	  	/* if rendering a document library, ensure SP js libs are loaded */
	  	if (renderCtx.ListSchema.IsDocLib !== '1') return;
		SP.SOD.executeFunc('sp.js', 'SP.Utilities.Utility', function() { if (window.console) console.log('>>sp.js loaded'); });
		SP.SOD.executeFunc('sp.core.js', 'SP.Utilities.CommandBlock', function() { if (window.console) console.log('>>sp.core.js loaded'); });
	}


}();

pd.csr.listnavigation.loadResource('');
ExecuteOrDelayUntilScriptLoaded(pd.csr.listnavigation.register, 'clienttemplates.js');

})(window.jQuery ? jQuery : null);

