function $_global_projectsummary(){SP.UI.ProjectSummary=function(){this._controlId=undefined;this._control=undefined;this._initialized=false;this._timeline=undefined;this._outerPanel=undefined;this._rotatingPanel=undefined;this._isRotationPaused=true;this._pagingControl=null;this._visibleHeadlineNumber=0;this._headlinePanels=[];this._rotationsToShow=0;this._webpartChrome=undefined;this._countDown=undefined;this._animationsEnabled=window.location.href.match(/\?.*\banimation=0\b/i)===null;var a=this,g=5e3;this.get_IsRotationPaused=function(){return this._isRotationPaused};this.set_IsRotationPaused=function(c){if(this._isRotationPaused!=c){this._isRotationPaused=c;if(!this._isRotationPaused&&this._headlinePanels.length<=1)this._isRotationPaused=true;if(!this._isRotationPaused){this._rotationsToShow=this._headlinePanels.length;setTimeout(b,g)}}function b(){if(!a.get_IsRotationPaused())if(!a._timeline.IsDragging()){a.ShowNextHeadline();a._rotationsToShow--;if(a._rotationsToShow>0)setTimeout(b,g);else a.set_IsRotationPaused(true)}else a.set_IsRotationPaused(true)}};var f,b,c=false,d;this.Init=function(o,r,q,k,e){this._controlId=o;this._control=$get(o);this._timeline=e;this._webpartChrome=a._control.parentNode.parentNode;this._countDown=$get(a._controlId+"_CountDown");this._outerPanel=$get(r);this._rotatingPanel=$get(q);var p=this._countDown.offsetWidth+"px",n="60px";if(XUI.Html.GetDirection()=="rtl"){this._rotatingPanel.parentNode.style.marginRight=p;this._control.style.marginLeft=n}else{this._rotatingPanel.parentNode.style.marginLeft=p;this._control.style.marginRight=n}if(e!=null){b=$get(e.get_parentId());e.AddEventHandler(SP.UI.Timeline.TimelineControl.RenderEventType.BeforeUpdate,function(){f=b.firstChild.offsetWidth;if(b.parentNode){var a=b.parentNode.parentNode;d=a.style.display;a.style.display="block"}});e.AddEventHandler(SP.UI.Timeline.TimelineControl.RenderEventType.AfterUpdate,function(){if(!c){if(b.firstChild.offsetWidth!==f){c=true;e.ParentResize(function(){c=false})}j(k)}if(b.parentNode)b.parentNode.parentNode.style.display=d})}else j(k);function l(){var d=0,c=false;a._control.style.width="";if(a._timeline!=null){if(a._timeline.IsFixedWidth()){c=true;var g=b.style.display;b.style.display="inline-block";d=b.offsetWidth+22;var e=a._countDown.offsetWidth+d,h=a._webpartChrome.offsetWidth;b.style.display=g;if(h<e){a._webpartChrome.style.width=e+"px";a._webpartChrome.style.display="block"}}}else c=true;var j=i();if(c){var f=Math.max(Math.max(d,j+10),696);a._control.style.width=a._countDown.offsetWidth+f+"px"}}function j(c){l();i();var b=undefined;if(!a._initialized)b=function(b){a._headlinePanels.push(b)};g(a._rotatingPanel,b);g(a._outerPanel);if(!a._initialized){if(a._headlinePanels.length>1){var d=$get(c);SP.SOD.executeFunc("SP.Init.js","SP.UI.PagingControl",function(){var b=new SP.UI.PagingControl(c);b.setButtonState(SP.UI.PagingControl.ButtonIDs.prev,SP.UI.PagingControl.ButtonState.disabled);b.setButtonState(SP.UI.PagingControl.ButtonIDs.next,SP.UI.PagingControl.ButtonState.enabled);b.onPrev=function(){a.set_IsRotationPaused(true);a.ShowPreviousHeadline()};b.onNext=function(){a.set_IsRotationPaused(true);a.ShowNextHeadline()};d.innerHTML=b.render(null);b.postRender();a._pagingControl=b})}a.set_IsRotationPaused(!a._animationsEnabled);SP.Portal.JsApi.ExecuteWithJsApiLoaded(function(){SP.Portal.JsApi.ProjectSummary.WrapImplementationInApiAndMarkInitComplete(a)});a._initialized=true}}function i(){var e=$get(a._controlId+"_LatePanel"),d=$get(a._controlId+"_UpcomingPanel"),g;if(e)g=e.parentNode.parentNode;else if(d)g=d.parentNode.parentNode;else return 0;var n=g.style.display;g.style.display="block";var l=g.offsetWidth;g.style.display=n;var k=262,f=Math.floor(l/k),c=0,b=0;if(e&&d)if((f&1)==0){c=f/2;b=f/2}else{c=(f-1)/2;b=(f-1)/2+1}else{if(e)c=f;if(d)b=f}var j=h("LatePanel"),i=h("UpcomingPanel");if(c>j){if(b<i)b+=Math.min(c-j,i-b);c=j}if(b>i){if(c<j)c+=Math.min(b-i,j-c);b=i}if(d)if(b>0){d.style.display="";d.style.width=k*b+"px";m("UpcomingPanel",b)}else d.style.display="none";if(e)if(c>0){e.style.display="";e.style.width=k*c+"px";m("LatePanel",c)}else e.style.display="none";if(e&&d)if(XUI.Html.GetDirection()=="rtl")d.style.marginRight=e.style.width;else d.style.marginLeft=e.style.width;return(b+c)*k}function h(c){var b=$get(a._controlId+"_"+c+"_ColumnsContainer");return b?b.children.length:0}function m(d,e){var c=$get(a._controlId+"_"+d+"_ColumnsContainer");if(c)for(var b=0;b<c.children.length;b++)if(b<e)c.children[b].style.display="";else c.children[b].style.display="none"}function s(a){return window.HTMLElement?a instanceof HTMLElement:typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string"}function g(h,f){h.style.height="";var e=0,g=null,c=null,i=null;if(a._timeline){g=$get(a._timeline.get_parentId()).parentNode.parentNode;c=a._timeline.GetHeight();if(a.get_TotalUpcomingItemsCount()+a.get_TotalLateItemsCount()==0)c+=27;else c+=47;i=g.style.display;g.style.display="none";e=c}var d=[];XUI.Html.DomUtils.ForEachChild(h,function(a){if(s(a)){var b=a==g;if(!b){var h=a.style.display;d[d.length]=a;a._prevDisplay=a.style.display;a.style.display="block";a._prevOverflow=a.style.overflow;a.style.overflow="scroll"}else{if(c>e)e=c;f!=null&&f(a)}}});var b=null;for(idx=0;idx<d.length;idx++){b=d[idx];if(b.scrollHeight>e)e=b.scrollHeight;f!=null&&f(b)}for(idx=0;idx<d.length;idx++){b=d[idx];b.style.display=b._prevDisplay;b.style.overflow=b._prevOverflow}h.style.height=e+"px"}$addHandler(window,"resize",l)};this.get_LateItems=function(){return e("LatePanel")};this.get_TotalLateItemsCount=function(){return h("LatePanel")};this.get_UpcomingItems=function(){return e("UpcomingPanel")};this.get_TotalUpcomingItemsCount=function(){return h("UpcomingPanel")};this.get_PrimaryTaskListLink=function(){var b=$get(a._controlId+"_TaskListLink");return b!=null?b.href:null};this.get_CountDownTextInfo=function(){var b=$get(a._controlId+"_CountDown");return XUI.Html.GetText(b)};this.get_CountDownDueDate=function(){var b=$get(a._controlId+"_CountDownDueDate");return b?XUI.Html.GetText(b):null};this.OnHeadlineClicked=function(){this.set_IsRotationPaused(true)};this.ShowNextHeadline=function(){if(this._headlinePanels.length>1){var a=this._visibleHeadlineNumber+1;if(a>=this._headlinePanels.length)a=0;i(this._headlinePanels,this._visibleHeadlineNumber,a);this._visibleHeadlineNumber=a}};this.ShowPreviousHeadline=function(){if(this._headlinePanels.length>1){var a=this._visibleHeadlineNumber-1;if(a<0)a=this._headlinePanels.length-1;i(this._headlinePanels,this._visibleHeadlineNumber,a);this._visibleHeadlineNumber=a}};function h(c){var b=$get(a._controlId+"_"+c+"_ItemCount");return b!=null?parseInt(XUI.Html.GetText(b),10):null}function e(h){var g=[],b=0,c=a._controlId+"_"+h,e=$get(c+"_TaskName_"+b);while(e!=null){var d=new SP.Portal.JsApi.ProjectSummaryItem;d.Name=XUI.Html.GetText(e);var i=$get(c+"_TaskFriendlyDate_"+b);d.FriendlyDate=XUI.Html.GetText(i);var f=$get(c+"_TaskAssignedTo_"+b);if(f!=null)d.AssignTo=XUI.Html.GetText(f);g.push(d);b++;e=$get(c+"_TaskName_"+b)}return g}function i(d,f,c){var g=d[f],b=d[c];if(a._pagingControl){a._pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.prev,c!=0?SP.UI.PagingControl.ButtonState.enabled:SP.UI.PagingControl.ButtonState.disabled);a._pagingControl.setButtonState(SP.UI.PagingControl.ButtonIDs.next,c!=d.length-1?SP.UI.PagingControl.ButtonState.enabled:SP.UI.PagingControl.ButtonState.disabled)}g.className="ms-psum-headline-hidden";b.className="ms-psum-headline-visible";if(XUI.Html.GetDirection()=="rtl")b.style.right="0px";else b.style.left="0px";if(a._animationsEnabled){SetOpacity(b,0);var e=new SPAnimation.State;e.SetAttribute(SPAnimation.Attribute.Opacity,1);e.SetAttribute(SPAnimation.Attribute.PositionX,0);if(b.parentNode!=null&&b.parentNode.style!=null){var h=new SPAnimation.Object(SPAnimation.ID.Content_SlideInFadeInLeft,0,b,e,function(){if(b.parentNode)if(XUI.Html.GetDirection()=="rtl")b.style.right="";else b.style.left=""});h.RunAnimation()}}}};SP.UI.ProjectSummaryMobile=function(){this._controlId=null;var a=this;this.get_IsRotationPaused=function(){};this.set_IsRotationPaused=function(){};this.ShowNextHeadline=function(){};this.ShowPreviousHeadline=function(){};function b(h){var f=[],b=0,c=null,d=a._controlId+"_"+h;c=document.getElementById(d+"_TaskName_"+b);while(c){var e=new SP.Portal.JsApi.ProjectSummaryItem;e.Name=XUI.Html.GetText(c);var g=document.getElementById(d+"_TaskFriendlyDate_"+b);e.FriendlyDate=XUI.Html.GetText(g);var i=document.getElementById(d+"_TaskAssignedTo_"+b);e.AssignTo=XUI.Html.GetText(i);f.push(e);b++;c=document.getElementById(d+"_TaskName_"+b)}return f}function c(c){var b=document.getElementById(a._controlId+"_"+c+"_ItemCount");return b?parseInt(b.value,10):null}this.Init=function(b){SP.Portal.JsApi.ExecuteWithJsApiLoaded(function(){SP.Portal.JsApi.ProjectSummary.WrapImplementationInApiAndMarkInitComplete(a)});this._controlId=b};this.get_CountDownTextInfo=function(){var b=document.getElementById(a._controlId+"_Header");return XUI.Html.GetText(b)};this.get_CountDownDueDate=function(){var b=document.getElementById(a._controlId+"_DueMain");return b?XUI.Html.GetText(b):null};this.get_LateItems=function(){return b("LatePanel")};this.get_TotalLateItemsCount=function(){return c("LatePanel")};this.get_UpcomingItems=function(){return b("UpcomingPanel")};this.get_TotalUpcomingItemsCount=function(){return c("UpcomingPanel")};this.get_PrimaryTaskListLink=function(){var b=document.getElementById(a._controlId+"_TaskList");return b?b.href:null}};SP.UI.ProjectSummary.ShowEditAggregatePanelDialog=function(C,p,q,w,y,x,z){var l=$get(w),k=$get(y),i=$get(x),A=l.options.length!=0?l.options[l.selectedIndex].text:null,f={},s=k.value!=null&&k.value!=""?k.value.split(","):[],h=null,a=document.createElement("div");a.style.padding="15px";if(p!=null&&p!=""){var t=document.createElement("div");XUI.Html.SetText(t,p);a.appendChild(t);var u=document.createElement("hr");u.width=1;a.appendChild(u)}for(var d=0;d<q.length;d++){var j=q[d],r=A==j.title,o=document.createElement("div"),b=document.createElement("input");b.type="checkbox";b.style.marginLeft="5px";b.style.marginRight="5px";if(r){b.checked=true;b.disabled=true}else f[j.url]=b;o.appendChild(b);var n=document.createElement("label");XUI.Html.SetText(n,j.title);if(r){var m=document.createElement("span");XUI.Html.SetText(m," - "+j.additionalDescriptiveText);m.style.fontStyle="italic";n.appendChild(m)}o.appendChild(n);a.appendChild(o)}for(d=0;d<s.length;d++){var v=s[d];if(f[v]!=null)f[v].checked=true}if(i!=null){daysToIncludeDiv=document.createElement("div");daysToIncludeLabel=document.createElement("label");XUI.Html.SetText(daysToIncludeLabel,z);h=document.createElement("input");h.value=i.value;daysToIncludeDiv.appendChild(daysToIncludeLabel);daysToIncludeDiv.appendChild(h);a.appendChild(daysToIncludeDiv)}var e=document.createElement("div");e.style.marginTop="10px";if(XUI.Html.GetDirection()=="rtl")e.style.textAlign="left";else e.style.textAlign="right";var c=document.createElement("input");c.type="button";c.className="ms-ButtonHeightWidth";c.value=SP.Res.okButtonText;c.style.marginLeft="5px";c.style.marginRight="5px";$addHandler(c,"click",function(){commonModalDialogClose(SP.UI.DialogResult.OK);return false});e.appendChild(c);var g=document.createElement("input");g.type="button";g.className="ms-ButtonHeightWidth";g.value=SP.Res.cancelButtonText;$addHandler(g,"click",function(){commonModalDialogClose(SP.UI.DialogResult.Cancel);return false});e.appendChild(g);a.appendChild(e);var B={title:C,html:a,dialogReturnValueCallback:function(c){if(c==SP.UI.DialogResult.OK){var a=[];for(var b in f)f[b].checked&&a.push(b);k.value=a.join(",");if(i!=null)i.value=h.value}}};EnsureScriptFunc("sp.ui.dialog.js","SP.UI.ModalDialog",function(){SP.UI.ModalDialog.showModalDialog(B)})};SP.UI.ProjectSummary.MobileLoadTimeline=function(l,f,j,i){var b=new SP.UI.Timeline.TimelineControl;b.SetToMobileMode();b.Init(f,i);b.Render();var g=null,a=document.getElementById(j),k=document.getElementById(f),c=b.HorizontalScrollBarPosition(a,k);c=parseInt(c);a.scrollLeft=0;var h=1.5;function d(){a.scrollLeft=c;clearTimeout(g);a._prevScrollLeft=a.scrollLeft;$addHandler(a,"scroll",function(){if(!a.isAutoScrolling){a.isAutoScrolling=true;var b=a.scrollLeft-a._prevScrollLeft;a._prevScrollLeft=a.scrollLeft;a.scrollLeft=a.scrollLeft-b+h*b}else a.isAutoScrolling=false})}function e(){if(a.scrollLeft<c){var b=a.scrollLeft;a.scrollLeft+=25;if(b!==a.scrollLeft)g=setTimeout(e,50);else d()}else d()}e()};typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs=="function"&&SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("projectsummary.js")}$_global_projectsummary();