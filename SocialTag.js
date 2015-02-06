Type.registerNamespace("Microsoft.SharePoint.SocialData");Microsoft.SharePoint.SocialData.TaggedUrlList=function(d,a,c,b){this.$$d__onPersonCountClick$p$2=Function.createDelegate(this,this._onPersonCountClick$p$2);this.$$d__OnFailedCallback$2=Function.createDelegate(this,this._OnFailedCallback$2);this.$$d__OnSucceededCallback$2=Function.createDelegate(this,this._OnSucceededCallback$2);this.$$d__showLoading$p$2=Function.createDelegate(this,this._showLoading$p$2);this.$$d__webRequestManager_InvokingRequest$p$2=Function.createDelegate(this,this._webRequestManager_InvokingRequest$p$2);Microsoft.SharePoint.SocialData.TaggedUrlList.initializeBase(this,[d]);this._contentsArea$p$2=a;this._loadingArea$p$2=c;this._errorArea$p$2=b;Sys.Net.WebRequestManager.add_invokingRequest(this.$$d__webRequestManager_InvokingRequest$p$2)};Microsoft.SharePoint.SocialData.TaggedUrlList.prototype={_timer$2:0,_wsSucceeded$2:false,dispose:function(){Sys.Net.WebRequestManager.remove_invokingRequest(this.$$d__webRequestManager_InvokingRequest$p$2);Sys.Component.prototype.dispose.call(this)},_webRequestManager_InvokingRequest$p$2:function(c,b){var a=$get("__REQUESTDIGEST");b.get_webRequest().get_headers()["X-RequestDigest"]=a.value},get_termID:function(){return this.TermID},get_termName:function(){return this.TermName},get_resTaggedBy:function(){return this.ResTaggedBy},get_resPersonCount:function(){return this.ResPersonCount},get_resDialgTitle:function(){return this.ResDialgTitle},get_resAltOfPeople:function(){return this.ResAltOfPeople},get_scopeDay:function(){return this.ScopeDay},get_msgNoDataL1:function(){return this.MsgNoDataL1},get_msgNoDataL2:function(){return this.MsgNoDataL2},_errorArea$p$2:null,_contentsArea$p$2:null,_loadingArea$p$2:null,initialize:function(){Sys.Component.prototype.initialize.call(this);this._contentsArea$p$2.innerHTML="";this._errorArea$p$2.style.display="none";this._getTaggedItemsFromWebService$p$2()},_getTaggedItemsFromWebService$p$2:function(){this._timer$2=window.setTimeout(this.$$d__showLoading$p$2,Microsoft.SharePoint.SocialData.TaggedUrlList._c_DELAY_SHOWING_LOADING$p);var a={};a.term=this.get_termID();a.scopeday=this.get_scopeDay();var b=SP.PageContextInfo.get_webServerRelativeUrl();b=SP.Utilities.UrlBuilder.urlCombine(b,Microsoft.SharePoint.SocialData.TaggedUrlList._c_SCRIPT_SERVICE$p);Sys.Net.WebServiceProxy.invoke(SP.Utilities.HttpUtility.urlPathEncode(b),Microsoft.SharePoint.SocialData.TaggedUrlList._c_GET_URLS_TAGGED_WITH$p,false,a,this.$$d__OnSucceededCallback$2,this.$$d__OnFailedCallback$2,null,Sys.Net.WebRequestManager.get_defaultTimeout(),false,null)},_OnSucceededCallback$2:function(d){this._wsSucceeded$2=true;this._loadingArea$p$2.style.display="none";this._contentsArea$p$2.innerHTML="";var a=d;if(!SP.ScriptUtility.isNullOrUndefined(a)&&!SP.ScriptUtility.isNullOrUndefined(a.SocialUrlInternal)){var e=a.SocialUrlInternal;this._createPopularItemsChildren$p$2(e)}else{var b=document.createElement("div"),c=document.createElement("div");b.innerHTML=this.get_msgNoDataL1();c.innerHTML=this.get_msgNoDataL2();this._contentsArea$p$2.appendChild(b);this._contentsArea$p$2.appendChild(c)}},_showLoading$p$2:function(){if(this._wsSucceeded$2)this._loadingArea$p$2.style.display="none";else this._loadingArea$p$2.style.display="block"},_OnFailedCallback$2:function(){!SP.ScriptUtility.isNullOrUndefined(this._timer$2)&&window.clearTimeout(this._timer$2);this._loadingArea$p$2.style.display="none";this._errorArea$p$2.style.display="block"},_createPopularItemsChildren$p$2:function(b){this._contentsArea$p$2.className="ms-taggedItems";for(var a=0;a<b.length;a++){var c=b[a].Title;if(SP.ScriptUtility.isNullOrUndefined(c))c=b[a].Url;var m=b[a].Url,r=b[a].ImageUrl,s=b[a].Count,j=document.createElement("table");j.className="itemTbl";var k=document.createElement("tbody");j.appendChild(k);var l=document.createElement("tr");k.appendChild(l);var q=document.createElement("tr");k.appendChild(q);var h=document.createElement("td");h.className="iconArea";h.rowSpan=2;l.appendChild(h);var p=document.createElement("td");l.appendChild(p);var f=document.createElement("td");f.className="lineArea";q.appendChild(f);var i=document.createElement("a");i.href=m;var e=document.createElement("img");e.className="itemIcon";e.src="/_layouts/Images/"+r;e.title=c;e.alt=c;i.appendChild(e);var g=document.createElement("a");g.className="itemTitle";g.href=m;g.innerHTML=c;h.appendChild(i);p.appendChild(g);var d=document.createElement("img");d.className="itemIconSub";d.src="/_layouts/images/allusr.gif";d.title=this.get_resAltOfPeople();d.alt=this.get_resAltOfPeople();var o=document.createElement("span");o.innerHTML=this.get_resTaggedBy();f.appendChild(d);f.appendChild(o);f.appendChild(this._createPeopleLink$p$2(s,m,c));this._contentsArea$p$2.appendChild(j);var n=document.createElement("div");n.className="separator";this._contentsArea$p$2.appendChild(n)}},_createPeopleLink$p$2:function(d,c,b){var a=document.createElement("a");a.className="people";a.href="javascript:;";a.innerHTML=String.format(this.get_resPersonCount(),d);a.style.paddingLeft="5px";a.msItemTitle=b;a.msItemUrl=c;$addHandler(a,"click",this.$$d__onPersonCountClick$p$2);return a},_onPersonCountClick$p$2:function(f){var c=f.target,g=c.msItemTitle,h=c.msItemUrl;f.preventDefault();var e=SP.PageContextInfo.get_webServerRelativeUrl();e=SP.Utilities.UrlBuilder.urlCombine(e,Microsoft.SharePoint.SocialData.TaggedUrlList._c_PEOPLE_MOSAIC_PAGE$p);var b=new SP.Utilities.UrlBuilder(e);b.addKeyValueQueryString("mode","0");b.addKeyValueQueryString("url",h);b.addKeyValueQueryString("termid",this.get_termID());var d=Sys.UI.DomElement.getBounds(c),a=new SP.UI.DialogOptions;a.title=String.format(this.get_resDialgTitle(),g,this.get_termName());a.url=b.get_url();a.width=400;a.height=120;a.allowMaximize=false;a.x=d.x;a.y=d.y+d.height;SP.UI.ModalDialog.showModalDialog(a)}};Microsoft.SharePoint.SocialData.TaggedSearchControl=function(d,a,c,b){this.$$d__onFailureCallback$p$2=Function.createDelegate(this,this._onFailureCallback$p$2);this.$$d__onSuccessCallback$p$2=Function.createDelegate(this,this._onSuccessCallback$p$2);this.$$d__showLoading$p$2=Function.createDelegate(this,this._showLoading$p$2);this.$$d__webRequestManager_InvokingRequest$p$2=Function.createDelegate(this,this._webRequestManager_InvokingRequest$p$2);Microsoft.SharePoint.SocialData.TaggedSearchControl.initializeBase(this,[d]);this._elmContents$2=a;this._elmLoad$2=c;this._elmError$2=b;Sys.Net.WebRequestManager.add_invokingRequest(this.$$d__webRequestManager_InvokingRequest$p$2)};Microsoft.SharePoint.SocialData.TaggedSearchControl.prototype={_elmContents$2:null,_elmLoad$2:null,_elmError$2:null,_wsSucceeded$2:false,_timer$2:0,dispose:function(){Sys.Net.WebRequestManager.remove_invokingRequest(this.$$d__webRequestManager_InvokingRequest$p$2);Sys.Component.prototype.dispose.call(this)},_webRequestManager_InvokingRequest$p$2:function(c,b){var a=$get("__REQUESTDIGEST");b.get_webRequest().get_headers()["X-RequestDigest"]=a.value},get_termID:function(){return this.TermID},get_resError:function(){return this.ResError},get_resAltOfTag:function(){return this.ResAltOfTag},get_maxItems:function(){return this.MaxItems},get_msgNoDataL1:function(){return this.MsgNoDataL1},get_msgNoDataL2:function(){return this.MsgNoDataL2},get_msgSeeAll:function(){return this.MsgSeeAll},get_msgUnavailableSearch:function(){return this.MsgUnavailableSearch},get_isAvailableSearch:function(){return this.IsAvailableSearch},initialize:function(){Sys.Component.prototype.initialize.call(this);this._elmContents$2.innerHTML="";this._elmError$2.style.display="none";if(this.get_isAvailableSearch()==="1")this._getTaggedItemsFromWebService$p$2();else{var a=document.createElement("div");a.className="ms-errorinl";a.innerHTML=this.get_msgUnavailableSearch();this._elmContents$2.appendChild(a)}},_getTaggedItemsFromWebService$p$2:function(){this._timer$2=window.setTimeout(this.$$d__showLoading$p$2,Microsoft.SharePoint.SocialData.TaggedSearchControl._c_TIMER$p);var a={};a.termID=this.get_termID();a.max=this.get_maxItems();var b=SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(),Microsoft.SharePoint.SocialData.TaggedSearchControl._c_SCRIPT_SERVICE$p);Sys.Net.WebServiceProxy.invoke(SP.Utilities.HttpUtility.urlPathEncode(b),Microsoft.SharePoint.SocialData.TaggedSearchControl._c_WEB_METHOD$p,false,a,this.$$d__onSuccessCallback$p$2,this.$$d__onFailureCallback$p$2,null,Sys.Net.WebRequestManager.get_defaultTimeout(),false,null)},_showLoading$p$2:function(){if(this._wsSucceeded$2)this._elmLoad$2.style.display="none";else this._elmLoad$2.style.display="block"},_onSuccessCallback$p$2:function(d){this._wsSucceeded$2=true;this._elmLoad$2.style.display="none";this._elmContents$2.innerHTML="";var c=d;if(c.length)this._createTaggedItemsChildren$p$2(c);else{var a=document.createElement("div"),b=document.createElement("div");a.innerHTML=this.get_msgNoDataL1();b.innerHTML=this.get_msgNoDataL2();this._elmContents$2.appendChild(a);this._elmContents$2.appendChild(b)}},_createTaggedItemsChildren$p$2:function(t){this._elmContents$2.className="ms-taggedItems";for(var o=0;o<t.length;o++){var r=t[o],g=r[0],m=g[0],v=g[1],w=g[2],h=r[1],k=document.createElement("table");k.className="itemTbl";var l=document.createElement("tbody");k.appendChild(l);var n=document.createElement("tr");l.appendChild(n);var u=document.createElement("tr");l.appendChild(u);var e=document.createElement("td");e.className="iconArea";e.rowSpan=2;n.appendChild(e);var s=document.createElement("td");n.appendChild(s);var c=document.createElement("td");c.className="lineArea";u.appendChild(c);var j=document.createElement("a");j.href=v;var a=document.createElement("img");a.className="itemIcon";a.src="/_layouts/Images/"+w;a.title=m;a.alt=m;j.appendChild(a);var d=document.createElement("a");d.className="itemTitle";d.href=v;d.innerHTML=m;e.appendChild(j);s.appendChild(d);var b=document.createElement("img");b.className="itemIconSub";b.src="/_layouts/images/socialtag.png";b.title=this.get_resAltOfTag();b.alt=this.get_resAltOfTag();c.appendChild(b);for(var f=0;f<h.length;f++){c.appendChild(this._createTagLink$p$2(h[f]));if(f!==h.length-1){var q=document.createElement("span");q.innerHTML=" , ";c.appendChild(q)}}this._elmContents$2.appendChild(k);var p=document.createElement("div");p.className="separator";this._elmContents$2.appendChild(p)}var i=document.createElement("div");i.className="seeAll";i.innerHTML=this.get_msgSeeAll();this._elmContents$2.appendChild(i)},_createTagLink$p$2:function(d){var a=document.createElement("a");a.className="relTag";var c=new SP.Utilities.UrlBuilder(Microsoft.SharePoint.SocialData.TaggedSearchControl._c_TAGPROFILE_PAGE$p),b=d.split("|");c.addKeyValueQueryString("termid",b[0]);a.href=c.get_url();a.innerHTML=b[1];return a},_onFailureCallback$p$2:function(){!SP.ScriptUtility.isNullOrUndefined(this._timer$2)&&window.clearTimeout(this._timer$2);this._elmLoad$2.style.display="none";var a=document.createElement("div");a.className="ms-errorinl";a.innerHTML=this.get_msgUnavailableSearch();this._elmContents$2.appendChild(a)}};Microsoft.SharePoint.SocialData.TaggedUrlList.registerClass("Microsoft.SharePoint.SocialData.TaggedUrlList",Sys.UI.Control);Microsoft.SharePoint.SocialData.TaggedSearchControl.registerClass("Microsoft.SharePoint.SocialData.TaggedSearchControl",Sys.UI.Control);function socialtag_initialize(){Microsoft.SharePoint.SocialData.TaggedUrlList._c_SCRIPT_SERVICE$p="_vti_bin/socialdatainternalservice.json";Microsoft.SharePoint.SocialData.TaggedUrlList._c_GET_URLS_TAGGED_WITH$p="GetUrlsTaggedWith";Microsoft.SharePoint.SocialData.TaggedUrlList._c_PEOPLE_MOSAIC_PAGE$p="_layouts/peoplemosaic.aspx";Microsoft.SharePoint.SocialData.TaggedUrlList._c_DELAY_SHOWING_LOADING$p=2e3;Microsoft.SharePoint.SocialData.TaggedSearchControl._c_SCRIPT_SERVICE$p="_vti_bin/socialdatainternalservice.json";Microsoft.SharePoint.SocialData.TaggedSearchControl._c_WEB_METHOD$p="GetTaggedItemsBySearch";Microsoft.SharePoint.SocialData.TaggedSearchControl._c_TIMER$p=2e3;Microsoft.SharePoint.SocialData.TaggedSearchControl._c_TAGPROFILE_PAGE$p="tagprofile.aspx"}socialtag_initialize();RegisterModuleInit("socialtag.js",socialtag_initialize);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("SocialTag.js");