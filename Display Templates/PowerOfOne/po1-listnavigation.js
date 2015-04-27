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
					a += '"><span>' + ((_webPartCaption && _webPartCaption.length) ? _webPartCaption : folders[i]) + '</span></a>';
				} else {
					a += '"><span>' + folders[i] + '</span></a>';
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
				 wpTable = wpthead ? wpthead.parentNode : null,
				 wpfirstth = wpthead ? wpthead.firstChild : null;
			if (!wpthead) return;
			if (wpthead.getAttribute('pd-viewnavigationtr')) return;
			wpthead.setAttribute('pd-viewnavigationtr', '1');
			if (wpTable) {
				wpTable.style.width = '100%';
			}

			if (wpcaption) {
				wpcaption = wpcaption.previousElementSibling || wpcaption.previousSibling;
				if (wpcaption) _webPartCaption = wpcaption.innerHTML && wpcaption.innerHTML.length ? wpcaption.innerHTML : null;
			}

			var listViewContainerTd = document.getElementById("script" + renderCtx.wpq);
			var listViewContainerTr = listViewContainerTd.parentNode;
			var secPanelTd = document.createElement('TD');
			listViewContainerTd.setAttribute('valign', 'top');
			listViewContainerTd.setAttribute('align', 'left');
			secPanelTd.setAttribute('valign', 'top');
			secPanelTd.setAttribute('align', 'left');
			secPanelTd.className = 'pd-securitypanel';
			if (isInEditMode())
				secPanelTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "'><h2 style='color:red;text-transform:uppercase;'>EDIT MODE</h2><hr/></div>";
			else 
				secPanelTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "'><h2>SECURITY</h2><hr/></div>";
			listViewContainerTr.appendChild(secPanelTd);

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

				getFolderUniqueAncestor(renderCtx, _thisCurrentFolder)
					.then(getFolderSecurity)
					.then(renderFolderSecurityInfo);
			}
		}

		function resolvePrincipalType(m) {
			var t = [], 
				prn = {
					types: '',
					linkText: ''
				};
			if (m.PrincipalType === 15) {
				t.push('All');
				prn.linkText = m.Title;
			} else {
				if (m.PrincipalType & 1) {
					t.push('User');
					prn.linkText = String.format("<a target='_blank' title='{3}' href='{0}/_layouts/15/userdisp.aspx?ID={1}'>{2}</a>", _spPageContextInfo.siteServerRelativeUrl, m.Id, m.Title, m.Description || m.Title);
				}
				if (m.PrincipalType & 2) {
					t.push('DistributionList');
					prn.linkText = m.Title;
				}
				if (m.PrincipalType & 4) {
					t.push('SecurityGroup');
					prn.linkText = m.Title;
				}
				if (m.PrincipalType & 8) {
					t.push('SharePointGroup');
					prn.linkText = String.format("<a target='_blank' title='{3}' href='{0}/_layouts/15/people.aspx?MembershipGroupId={1}'>{2}</a>", _spPageContextInfo.siteServerRelativeUrl, m.Id, m.Title, m.Description || m.Title);
				}
			}
			prn.types = t.length ? t.join(',') : ''
			return prn;
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

		function renderFolderSecurityInfo(renderCtx, ancestorInfo, hasUniqueRoleAssignments, roleAssignmentInfo) {
			var html = [];

			if (hasUniqueRoleAssignments)
				html.push("<p class='notice'>The security role assignments below are unique to this folder location.</p>");
			else {
				html.push(String.format("<p>The security role assignments for this location are inherited from: <a title='{1}' href='{0}'>{1}</a>.</p>",
											ancestorInfo.ServerRelativeUrl, ancestorInfo.Title));
			}

			$.each(roleAssignmentInfo, function(i, o) {
				var m = o.Member,
					 b = o.RoleDefinitionBindings.results,
					 principal = resolvePrincipalType(m);
				html.push(String.format('<h3 title="{1}">{0}&nbsp;<small>{2}</small></h3><ul>', principal.linkText, m.Description || m.Title, principal.types));

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

		function getFolderSecurity(renderCtx, currentFolder, ancestorInfo) {
			var webInherit = '',
				webRoleAssn = '';
			if (currentFolder.indexOf('/') === -1) {
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
				url: String.format(webRoleAssn, currentFolder),
				headers: {
					ACCEPT: 'application/json;odata=verbose'
				}
			};
			var rInherits = {
				type: 'GET',
				url: String.format(webInherit, currentFolder),
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
					var hasUniqueRoleAssignments = respInherits[0].d.HasUniqueRoleAssignments;
					var roleAssignments = respRoleAssns[0].d.results;
					p.resolve(renderCtx, ancestorInfo, hasUniqueRoleAssignments, roleAssignments);
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

		function getFolderUniqueAncestor(renderCtx, currentFolder) {
			var p = new $.Deferred();
			var fuaso = '';

			function ajaxFail(xhrObj, textStatus, err) {
				var e = JSON.parse(xhrObj.responseText),
					err = e.error || e["odata.error"],
					m = '<div style="color:red;font-family:Calibri;font-size:1.2em;">Exception<br/>&raquo; ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText)) + '</div>',
					m1 = 'Error>> ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText));
				var c = document.createElement('DIV');
				c.innerHTML = m;
				domSecurityPanel.appendChild(c);
				p.reject(m1);
			}

			if (currentFolder.indexOf('/') === -1) {
				/* we're in the library root, so we have to change the REST urls to use the lists api instead */
				fuaso = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/FirstUniqueAncestorSecurableObject?$Select=ServerRelativeUrl,Name,Title";
			} else {
				/* we're not in the library root, so we have to use the folders REST api */
				fuaso = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/FirstUniqueAncestorSecurableObject?$Select=ServerRelativeUrl,Name,Title";
			}

			var request = {
				type: 'GET',
				url: String.format(fuaso, currentFolder),
				headers: { ACCEPT: 'application/json;odata=verbose' }
			};
			var domSecurityPanel = document.getElementById('pdsecuritypanel' + renderCtx.wpq);
			$.ajax(request)
				.done(function(response) {
					var rtype = response.d.__metadata.type;
					if (rtype === 'SP.Web')
						p.resolve(renderCtx, currentFolder, { ServerRelativeUrl: response.d.ServerRelativeUrl, Title: response.d.Title });
					else if (rtype === 'SP.List' || rtype.match(/^SP.Data.[\w]+Item/gi)) {
						request.url = (rtype === 'SP.List')
											? request.url.replace('FirstUniqueAncestorSecurableObject', 'FirstUniqueAncestorSecurableObject/RootFolder')
											: request.url.replace('FirstUniqueAncestorSecurableObject', 'FirstUniqueAncestorSecurableObject/Folder');
						$.ajax(request)
							.done(function(response) {
								p.resolve(renderCtx, currentFolder, { ServerRelativeUrl: response.d.ServerRelativeUrl, Title: response.d.Name });
							})
							.fail(ajaxFail);
					}
				})
				.fail(ajaxFail);
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