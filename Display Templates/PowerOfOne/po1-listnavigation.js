(function() {
	"use strict";
	/*
		JSLink = ~sitecollection/_catalogs/masterpage/Display Templates/PO1/po1-listnavigation.js
	*/

	window.rb = window.rb || {};
	rb.csr = rb.csr || {};

	rb.csr.listnavigation = function() {
		var _webPartCaption = null;
		var _thisCurrentFolder = '';
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

		function isInEditMode() {
			var pageDesignMode = $('#MSOLayout_InDesignMode').val();
			var wikiPageMode = $('#_wikiPageMode').val();
			var wpmMode = $('#MSOSPWebPartManager_DisplayModeName').val();
			/* wpmMode = 'Browse' when not editing */

			return (wpmMode == 'Design' || wpmMode == 'Edit' || pageDesignMode == '1' || wikiPageMode == 'Edit');
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
			loadResource('~sitecollection/_catalogs/masterpage/Display Templates/PO1/po1-listnavigation.css');
		}

		function buildNavigationItemUrl(folderUrl, renderCtx) {
			var pageUrl = location.pathname,
				searchParams = location.search && location.search.length ? location.search.split('?')[1].split('&') : [],
				newParams = [];
			for (var i = 0; i < searchParams.length; i++) {
				var param = searchParams[i].split('=');
				if (param[0].match(/rootfolder/gi)) continue;
				newParams.push(param[0] + '=' + (param.length > 1 ? param[1] : ''));
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
				html = "<ul style='list-style:none;'>",
				ctxListbase = renderCtx.listUrlDir.replace(renderCtx.listUrlDir.match(/\/[^\/]*$/gi), '') + '/',
				ctxRf = !renderCtx.rootFolder || !renderCtx.rootFolder.length ? renderCtx.listUrlDir : renderCtx.rootFolder,
				wsrUrl = _spPageContextInfo.webServerRelativeUrl.replace(/\/$/gi, ''),
				rootFolder = unescapeProperly(ctxRf).replace(wsrUrl + '/', '');

			_thisCurrentFolder = rootFolder.replace(/^\//gi, '');

			var folders = _thisCurrentFolder.split('/'),
				startIndex = folders.length <= 2 ? 0 : 2,
				first = -1;
			for (var i = startIndex; i < folders.length; i++) {
				if (ctxListbase.match(folders[i])) continue;
				first = first < 0 ? first = i : first;

				/* build navigation breadcrumb url */
				var furl = folders.slice(0, i + 1).join('/'),
					folderUrl = wsrUrl + '/' + furl;

				/* build navigation breadcrumb */
				var a = '<a style="display:inline-block;" ',
					li = "<li style='display:inline-block;' class='" + ((i === startIndex) ? 'first' : ((i === (folders.length - 1)) ? 'last' : '')) + "'>"
				a += 'href="' + buildNavigationItemUrl(folderUrl, renderCtx);
				if (i === first) {
					a += '">' + ((_webPartCaption && _webPartCaption.length) ? _webPartCaption : folders[i]) + '</a>';
				} else {
					a += '">' + folders[i] + '</a>';
				}
				li += a;
				li += '</li>';

				/* add separator */
				/*if ((i + 1) < folders.length) {
					li += "<li class='sep' style='display:inline-block;'><img src='/_layouts/15/images/scrollbar-mouseout-rightarrow.png' style='padding:0 4px;position:relative;top:0px;' /></li>";
				}*/
				html += li;
			}

			html += '</ul>';
			navTh.innerHTML = html;
		}

		function onPostRender(renderCtx) {
			if (window.console) console.log('>>In onPostRender()');

			/* add navigation table header row above table column headers */
			var wpcaption = document.getElementById("WebPartCaption" + renderCtx.wpq),
				wpthead = document.getElementById("js-listviewthead-" + renderCtx.wpq),
				wpfirstth = wpthead ? wpthead.firstChild : null;
			if (!wpthead) return;
			if (wpthead.getAttribute('pd-viewnavigationtr')) return;
			wpthead.setAttribute('pd-viewnavigationtr', '1');

			if (wpcaption) {
				wpcaption = wpcaption.previousElementSibling || wpcaption.previousSibling;
				if (wpcaption) _webPartCaption = wpcaption.innerHTML && wpcaption.innerHTML.length ? wpcaption.innerHTML : null;
			}

			var listViewTd = document.getElementById("script" + renderCtx.wpq);
			var wpTable = listViewTd.parentNode;
			var secTd = document.createElement('TD');
			listViewTd.setAttribute('valign', 'top');
			listViewTd.setAttribute('align', 'left');
			secTd.setAttribute('valign', 'top');
			secTd.setAttribute('align', 'left');
			secTd.className = 'pd-securitypanel';
			if (isInEditMode())
				secTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "'><h2 style='color:red;text-transform:uppercase;'>EDIT MODE</h2><hr/></div>";
			else 
				secTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "'><h2>SECURITY</h2><hr/></div>";
			wpTable.appendChild(secTd);

			if (!isInEditMode())
			{
				var navTr = document.createElement('TR');
				var navTh = document.createElement('TH');
				navTr.setAttribute('valign', 'top');
				navTr.className = 'ms-viewheadertr ms-vhltr pd-viewnavigationtr';
				navTh.setAttribute('colspan', '99');
				navTh.className = 'ms-vh2';
				navTr.appendChild(navTh);
				buildNavigation(navTh, renderCtx);
				if (wpfirstth)
					wpthead.insertBefore(navTr, wpfirstth);
				else
					wpthead.appendChild(navTr);

				getCurrentFolderSecurity(renderCtx).then(renderSecurityInfo);
			}
		}

		function resolvePrincipalType(p) {
			var t = [];
			if (p === 15)
				t.push('All');
			else {
				if (p & 1) t.push('User');
				if (p & 2) t.push('DistributionList');
				if (p & 4) t.push('SecurityGroup');
				if (p & 8) t.push('SharePointGroup');
			}
			return t.length ? t.join(',') : '';
		}

		function resolveRoleTypeKind(rtk) {
			var t = [];
			if (rtk === 0)
				t.push('None');
			else {
				if (rtk === 1) t.push('Guest');
				if (rtk === 2) t.push('Reader');
				if (rtk === 3) t.push('Contributor');
				if (rtk === 4) t.push('WebDesigner');
				if (rtk === 5) t.push('Administrator');
				if (rtk === 6) t.push('Editor');
			}
			return t.length ? t.join(',') : '';
		}

		function renderSecurityInfo(renderCtx, isInherited, roleAssignmentInfo) {
			var html = [];
			$.each(roleAssignmentInfo, function(i, o) {
				var m = o.Member,
					b = o.RoleDefinitionBindings.results;
				html.push(String.format('<h3 title="{1}">{0}&nbsp;<small>{2}</small></h3><ul>', m.Title, m.Description || m.Title, resolvePrincipalType(m.PrincipalType)));

				$.each(b, function(i, o) {
					var c = (i == (b.length - 1)) ? 'last' : '';
					html.push(String.format("<li class='{3}' title='{1}'>{0}&nbsp;<small>{2}</small></li>", o.Name, o.Description, resolveRoleTypeKind(o.RoleTypeKind), c));
				});

				html.push('</ul>');
			});

			var domSecurityPanel = document.getElementById('pdsecuritypanel' + renderCtx.wpq),
				c = document.createElement('DIV');
			c.innerHTML = html.join('');
			domSecurityPanel.appendChild(c);
		}

		function getCurrentFolderSecurity(renderCtx) {
			var webInherit = '',
				webRoleAssn = '';
			if (_thisCurrentFolder.indexOf('/') === -1) {
				/* we're in the library root, so we have to change the REST urls to use the lists api instead */
				webInherit = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/HasUniqueRoleAssignments";
				webRoleAssn = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/RoleAssignments?$Expand=Member,RoleDefinitionBindings";
			} else {
				/* we're not in the library root, so we have to use the folders REST api */
				webInherit = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/HasUniqueRoleAssignments";
				webRoleAssn = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/RoleAssignments?$Expand=Member,RoleDefinitionBindings";
			}

			var p = new $.Deferred();
			var rRoleAssignments = {
				type: 'GET',
				url: String.format(webRoleAssn, _thisCurrentFolder),
				headers: {
					ACCEPT: 'application/json;odata=verbose'
				}
			};
			var rInherits = {
				type: 'GET',
				url: String.format(webInherit, _thisCurrentFolder),
				headers: {
					ACCEPT: 'application/json;odata=verbose'
				}
			};
			var fns = [
				$.ajax(rInherits),
				$.ajax(rRoleAssignments)
			];
			var domSecurityPanel = document.getElementById('pdsecuritypanel' + renderCtx.wpq);
			$.when.apply($, fns)
				.done(function(respInherits, respRoleAssns) {
					var dataInherits = respInherits[0].d.HasUniqueRoleAssignments;
					var dataRoleAssns = respRoleAssns[0].d.results;
					p.resolve(renderCtx, dataInherits, dataRoleAssns);
				})
				.fail(function(xhrObj, textStatus, err) {
					var e = JSON.parse(xhrObj.responseText),
						err = e.error || e["odata.error"],
						m = '<div style="color:red;font-family:Calibri;font-size:1.2em;">Exception<br/>&raquo; ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText)) + '</div>',
						m1 = 'Error>> ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText));
					var c = document.createElement('DIV');
					c.innerHTML = m;
					domSecurityPanel.appendChild(c);
					p.reject(m1);
				});
			return p.promise();
		}

		function ensureSPJS(renderCtx) {
			if (window.console) console.log('>>In ensureSPJS()');
			/* if rendering a document library, ensure SP js libs are loaded */
			if (renderCtx.ListSchema.IsDocLib !== '1') return;
			SP.SOD.executeFunc('sp.js', 'SP.Utilities.Utility', function() {
				if (window.console) console.log('>>sp.js loaded');
			});
			SP.SOD.executeFunc('sp.core.js', 'SP.Utilities.CommandBlock', function() {
				if (window.console) console.log('>>sp.core.js loaded');
			});
		}


	}();

	rb.csr.listnavigation.register();

})();