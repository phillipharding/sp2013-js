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

		function hasPermission(permissionMask, permissionKind) {
			if (permissionKind === 65) {
				return (((permissionMask.Low || permissionMask.low) & 32767) === 32767) 
							&& ((permissionMask.High || permissionMask.high) === 65535);
			}
			var sequence = permissionMask.Low || permissionMask.low;
			permissionKind -= 1;
			if (permissionKind > 31) {
				sequence = permissionMask.High || permissionMask.high;
				permissionKind -= 32;
			}
			var hasP = ((1 << permissionKind) & sequence) !== 0;
			return hasP;
		}

		function ajaxFail(containerId, promise, xhrObj, textStatus, err) {
			var divPanel = document.getElementById(containerId);
			var e = JSON.parse(xhrObj.responseText),
				err = e.error || e["odata.error"],
				m = '<div style="color:red;font-family:Calibri;font-size:1.2em;">Exception<br/>&raquo; ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText)) + '</div>',
				m1 = 'Error>> ' + ((err && err.message && err.message.value) ? err.message.value : (xhrObj.status + ' ' + xhrObj.statusText));
			var c = document.createElement('DIV');
			c.innerHTML = m;
			divPanel.appendChild(c);
			promise.reject(m1);
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
			/* load the CSS file */
			loadResource('~sitecollection/_catalogs/masterpage/Display Templates/PO1/po1-listnavigation.css');
		}

		function buildBreadcrumbNavLink(folderUrl, renderCtx) {
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

		function buildBreadcrumb(navTh, renderCtx) {
			var
				html = ["<ul style='list-style:none;'>"],
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
				a += 'href="' + buildBreadcrumbNavLink(folderUrl, renderCtx);
				if (i === first) {
					a += '"><span>' + ((_webPartCaption && _webPartCaption.length) ? _webPartCaption : folders[i]) + '</span></a>';
				} else {
					a += '"><span>' + folders[i] + '</span></a>';
				}
				li += a;
				li += '</li>';
				html.push(li);
			}

			html.push('</ul>');
			navTh.innerHTML = html.join('');
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
				secPanelTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "' class='pd-securitypanel-inner open'><h2 style='color:red;text-transform:uppercase;'>EDIT MODE</h2><hr/></div>";
			else
				secPanelTd.innerHTML = "<div id='pdsecuritypanel" + renderCtx.wpq + "' class='pd-securitypanel-inner'><a title='show or hide security information' class='appTile'><span class='wf-family-o365 wf-o365-peoplelogo'></span></a><h2>SECURITY</h2><hr/></div>";
			listViewContainerTr.appendChild(secPanelTd);

			if (!isInEditMode()) {
				var navTr = document.createElement('TR');
				var navTh = document.createElement('TH');
				navTr.setAttribute('valign', 'top');
				navTr.className = 'ms-viewheadertr ms-vhltr pd-viewnavigationtr';
				navTh.setAttribute('colspan', '99');
				navTh.className = 'ms-vh2';
				navTr.appendChild(navTh);
				buildBreadcrumb(navTh, renderCtx);
				if (wpfirstth)
					wpthead.insertBefore(navTr, wpfirstth);
				else
					wpthead.appendChild(navTr);

				getFolderUniqueAncestor(renderCtx, _thisCurrentFolder)
					.then(getFolderSecurity)
					.then(renderFolderSecurityInfo);
			}
		}

		function resolvePermissionMask(effectivePermissions, labelPattern) {
			var html = [''], 
				Permissions = {
					ViewListItems: 1,
					AddListItems: 2,
					EditListItems: 3,
					DeleteListItems: 4,
					ApproveItems: 5,
					OpenItems: 6,
					ViewVersions: 7,
					DeleteVersions: 8,
					CancelCheckout: 9,
					ManagePersonalViews: 10,
					ManageLists: 12,
					ViewFormPages: 13,
					AnonymousSearchAccessList: 14,
					Open: 17,
					ViewPages: 18,
					AddAndCustomizePages: 19,
					ApplyThemeAndBorder: 20,
					ApplyStyleSheets: 21,
					ViewUsageData: 22,
					CreateSSCSite: 23,
					ManageSubwebs: 24,
					CreateGroups: 25,
					ManagePermissions: 26,
					BrowseDirectories: 27,
					BrowseUserInfo: 28,
					AddDelPrivateWebParts: 29,
					UpdatePersonalWebParts: 30,
					ManageWeb: 31,
					AnonymousSearchAccessWebLists: 32,
					UseClientIntegration: 37,
					UseRemoteAPIs: 38,
					ManageAlerts: 39,
					CreateAlerts: 40,
					EditMyUserInfo: 41,
					EnumeratePermissions: 63
				};
			for(var k in Permissions) { 
				var bit = Permissions[k];
				if (hasPermission(effectivePermissions, bit)) {
					html.push(String.format(labelPattern, k));
				}
			}
			return html.join('');
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
			var t = 'None';
			if (rtk === 1) t = 'Guest';
			else if (rtk === 2) t = 'Reader';
			else if (rtk === 3) t = 'Contributor';
			else if (rtk === 4) t = 'WebDesigner';
			else if (rtk === 5) t = 'Administrator';
			else if (rtk === 6) t = 'Editor';
			return t;
		}

		function renderFolderSecurityInfo(renderCtx, ancestorInfo, hasUniqueRoleAssignments, roleAssignmentInfo) {
			var html = [], label = ancestorInfo.canEnumeratePermissions ? 'role assignments' : 'permissions';

			if (hasUniqueRoleAssignments)
				html.push(String.format("<p>The security {0} below are unique to this folder location.</p>", label));
			else {
				html.push(String.format("<p>The security {2} for this location are inherited from: <a title='{1}' href='{0}'>{1}</a>.</p>",
					ancestorInfo.ServerRelativeUrl, ancestorInfo.Title, label));
			}

			if (roleAssignmentInfo) {
				$.each(roleAssignmentInfo, function(i, o) {
					var m = o.Member,
						b = o.RoleDefinitionBindings.results,
						principal = resolvePrincipalType(m);
					html.push(String.format("<h3 title='{1}'>{0}&nbsp;<small>{2}</small></h3><ul class='ra'>", principal.linkText, m.Description || m.Title, principal.types));
					$.each(b, function(i, o) {
						var c = (i == (b.length - 1)) ? 'last' : '';
						html.push(String.format("<li class='{3}' title='{1}'>{0}&nbsp;<small>{2}</small></li>", o.Name, o.Description, resolveRoleTypeKind(o.RoleTypeKind), c));
					});

					html.push('</ul>');
				});
			} else {
				html.push("<h2>Permissions</h2><hr/><ul class='pe'>");
				html.push(resolvePermissionMask(ancestorInfo.Permissions, "<li>{0}</li>"));
				html.push('</ul>');
			}

			var domSecurityPanel = document.getElementById('pdsecuritypanel' + renderCtx.wpq),
				c = document.createElement('DIV');
			c.innerHTML = html.join('');
			domSecurityPanel.appendChild(c);

			$('.pd-securitypanel a.appTile').on('click', function(e) {
				e.preventDefault();
				$(this).parent().toggleClass('open');
			});
		}

		function getFolderSecurity(renderCtx, currentFolder, ancestorInfo) {
			var urlHasUnique = '',
				urlRoleAssn = '';
			if (currentFolder.indexOf('/') === -1) {
				/* we're in the library/list root folder, so we have to change the REST urls to use the lists api */
				urlHasUnique = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/HasUniqueRoleAssignments";
				urlRoleAssn = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/RoleAssignments?$Expand=Member,RoleDefinitionBindings";
			} else {
				/* we're not in the library/list root folder, so we have to use the folders REST api */
				urlHasUnique = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/HasUniqueRoleAssignments";
				urlRoleAssn = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/RoleAssignments?$Expand=Member,RoleDefinitionBindings";
			}

			var p = new $.Deferred(),
				 requests = [];
			/* SP.PermissionKind.enumeratePermissions = 63 */
			ancestorInfo.canEnumeratePermissions = hasPermission(ancestorInfo.Permissions, 63);
			var reqHasUnique = {
				type: 'GET',
				url: String.format(urlHasUnique, currentFolder),
				headers: { ACCEPT: 'application/json;odata=verbose' }
			};
			requests = [$.ajax(reqHasUnique)];
			if (ancestorInfo.canEnumeratePermissions) {
				var reqRoleAssignments = {
					type: 'GET',
					url: String.format(urlRoleAssn, currentFolder),
					headers: { ACCEPT: 'application/json;odata=verbose' }
				};
				requests.push($.ajax(reqRoleAssignments));
			}

			$.when.apply($, requests)
				.done(function(respHasUnique, respRoleAssignments) {
					var hasUniqueRoleAssignments = typeof(respHasUnique[0]) !== 'undefined' ? respHasUnique[0].d.HasUniqueRoleAssignments : respHasUnique.d.HasUniqueRoleAssignments;
					var roleAssignments = ancestorInfo.canEnumeratePermissions ? respRoleAssignments[0].d.results : null;
					p.resolve(renderCtx, ancestorInfo, hasUniqueRoleAssignments, roleAssignments);
				})
				.fail(ajaxFail.bind('pdsecuritypanel' + renderCtx.wpq, p));
			return p.promise();
		}

		function getFolderUniqueAncestor(renderCtx, currentFolder) {
			var fuaso = '';
			if (currentFolder.indexOf('/') === -1) {
				/* we're in the library/list root folder, so we have to change the REST url to use the lists api */
				fuaso = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/GetByTitle('{0}')/FirstUniqueAncestorSecurableObject?$Select=ServerRelativeUrl,Name,Title,EffectiveBasePermissions";
			} else {
				/* we're not in the library/list root folder, so we have to use the folders REST api */
				fuaso = _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetFolderByServerRelativeUrl('{0}')/ListItemAllFields/FirstUniqueAncestorSecurableObject?$Select=ServerRelativeUrl,Name,Title,EffectiveBasePermissions";
			}

			var p = new $.Deferred();
			var request = {
				type: 'GET',
				url: String.format(fuaso, currentFolder),
				headers: { ACCEPT: 'application/json;odata=verbose' }
			};
			$.ajax(request)
				.done(function(response) {
					var rtype = response.d.__metadata.type;
					var effPermissions = {
						High: response.d.EffectiveBasePermissions.High,
						Low: response.d.EffectiveBasePermissions.Low
					};
					if (rtype === 'SP.Web') {
						/* unique ancestor is a Web */
						p.resolve(renderCtx, currentFolder, {
							ServerRelativeUrl: response.d.ServerRelativeUrl,
							Title: response.d.Title,
							Permissions: effPermissions
						});
					} else if (rtype === 'SP.List' || rtype.match(/^SP.Data.[\w]+Item/gi)) {
						/* unique ancestor is a List or Folder (ListItem) */
						request.url = (rtype === 'SP.List') 
												? request.url.replace('FirstUniqueAncestorSecurableObject', 'FirstUniqueAncestorSecurableObject/RootFolder') 
												: request.url.replace('FirstUniqueAncestorSecurableObject', 'FirstUniqueAncestorSecurableObject/Folder');
						$.ajax(request)
							.done(function(response) {
								p.resolve(renderCtx, currentFolder, {
									ServerRelativeUrl: response.d.ServerRelativeUrl,
									Title: response.d.Name,
									Permissions: effPermissions
								});
							})
							.fail(ajaxFail.bind('pdsecuritypanel' + renderCtx.wpq, p));
					}
				})
				.fail(ajaxFail.bind('pdsecuritypanel' + renderCtx.wpq, p));
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