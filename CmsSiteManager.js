function $_global_cmssitemanager(){IsSiteManager="";EventArgSeparator="$";IdSeparator=",";TypeToIDSeparator=":";_UI_VERSION=15;SiteManagerSelectItemName="SMItem";SiteManagerRadioSelection="SMRadioItem";ImageSelectItemName="ImageItem";SiteUrl="";SmtContext="";IsSiteAdmin="False";SiteManagerVRModeParamId="SiteManagerVRMode";SiteManagerTreeWidthParamId="SiteManagerTreeWidth";SiteManagerBottomHeightParamId="SiteManagerBottomHeight";SmtSettingsDlgUrl="CmsSmSettingsDialog.aspx";SmtSettingsDlgDimension="dialogWidth:400px; dialogHeight:300px; center:yes; resizable:yes";SmtOLResizerId="OLResizer";SmtTreeResizerId="TreeResizer";OLDivId="OLDiv";VRDivId="VRDiv";OLHeaderId="MasterHeader";VRHeaderId="RelatedViewHeader";MIN_NAV_WIDTH=144;MIN_WINDOW_WIDTH=600;ToolBarHeight=62;smtBrowserVersion=parseInt(navigator.appVersion);smtIsNetscape=navigator.appName.indexOf("Netscape")!=-1;smtIsFireFox=navigator.appName.indexOf("Netscape")!=-1;smtIsIE=navigator.appName.indexOf("Microsoft")!=-1;smtAgent=navigator.userAgent.toLowerCase();smtIsWindows=smtAgent.indexOf("win")!=-1;smtIsMac=smtAgent.indexOf("mac")!=-1;smtIsUnix=smtAgent.indexOf("x11")!=-1;SmtMouseDownObj="";SmtDrag=0;SmtDragSrc="";g_SmtActionOps={};g_SmtActionOps=[{name:"Move",code:1},{name:"Copy",code:2},{name:"Delete",code:4},{name:"Publish",code:8},{name:"UnPublish",code:16},{name:"CheckOut",code:32},{name:"Discard",code:64},{name:"CheckIn",code:128},{name:"Approve",code:256},{name:"Deny",code:512},{name:"Submit",code:1024}];g_SmtActionOps.length=11;SmtTypes=[];SmtTypes.http=0;SmtTypes.SPUnknown=0;SmtTypes[""]=0;SmtTypes.SPListItem=1;SmtTypes.SPFile=1;SmtTypes.SPList=2;SmtTypes.SPFolder=2;SmtTypes.SPWeb=3;SmtTypes.Area=3;allItemsState=false;typeof APD_CallbackWssView!="undefined"&&APD_CallbackWssView("sitemanager");typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("CMSSiteManager.js")}function ULSjlC(){var a={};a.ULSTeamName="CMS";a.ULSFileName="CmsSiteManager.commentedjs";return a}var IsSiteManager,EventArgSeparator,IdSeparator,TypeToIDSeparator,_UI_VERSION,SiteManagerSelectItemName,SiteManagerRadioSelection,ImageSelectItemName,SiteUrl,SmtContext,IsSiteAdmin,SiteManagerVRModeParamId,SiteManagerTreeWidthParamId,SiteManagerBottomHeightParamId,SmtSettingsDlgUrl,SmtSettingsDlgDimension,SmtOLResizerId,SmtTreeResizerId,OLDivId,VRDivId,OLHeaderId,VRHeaderId,MIN_NAV_WIDTH,MIN_WINDOW_WIDTH,ToolBarHeight,smtBrowserVersion,smtIsNetscape,smtIsFireFox,smtIsIE,smtAgent,smtIsWindows,smtIsMac,smtIsUnix;function ToggleViewRelatedMode(){a:;if(document.getElementById(SiteManagerVRModeParamId).value=="false")document.getElementById(SiteManagerVRModeParamId).value="true";else document.getElementById(SiteManagerVRModeParamId).value="false";if("true"==document.getElementById(SiteManagerVRModeParamId).value){var b=SmtGridGetSelectedItemCount(SiteManagerSelectItemName);if(b==1){var a=SmtGridGetSelectedItems(SiteManagerSelectItemName);document.getElementById(SiteManagerVRModeParamId).value+=IdSeparator+a}}return true}var SmtMouseDownObj,SmtDrag,SmtDragSrc;function SmtGetParent(b){a:;var a;if(SmtStr(b))a=$(b);else a=b;return SmtDef(a)?smtIsIE?a.parentElement:a.parentNode:null}function RedrawMainBody(){a:;var j=document.documentElement.clientWidth<MIN_WINDOW_WIDTH?document.documentElement.scrollHeight:document.documentElement.clientHeight,e=document.getElementById("LeftNavBarDiv"),d=j-e.offsetTop;if(d<0)d=0;var a="px";e.style.height=d+a;var h=document.getElementById("TreeResizer");h.style.height=d+a;var g=$("RefreshLinkDiv").clientHeight+3,i=document.getElementById("TreeViewDiv");i.style.height=(d<=g?0:d-g)+a;var b=d-2;if(b<0)b=0;if(document.getElementById(SiteManagerVRModeParamId).value!="true")document.getElementById("OLDiv").style.height=(b>ToolBarHeight?b-ToolBarHeight:0)+a;else{var c=Math.floor(document.getElementById(SiteManagerBottomHeightParamId).value);if(c==""||b-c<ToolBarHeight){document.getElementById(SiteManagerBottomHeightParamId).value=c==""?b*.5:b-ToolBarHeight;c=Math.floor(document.getElementById(SiteManagerBottomHeightParamId).value)}if(b>ToolBarHeight){var f=b-(c+20);document.getElementById("RelatedViewHeader").style.height=ToolBarHeight+a;document.getElementById("VRDiv").style.height=(c-ToolBarHeight<0?0:c-ToolBarHeight)+a;document.getElementById("OLDiv").style.height=(f-ToolBarHeight<0?0:f-ToolBarHeight)+a}else{RelatedViewHeader.style.height=0+a;VRDiv.style.height=0+a;OLDiv.style.height=0+a}}}function SetNavBarDimensions(){a:;var a=document.getElementById(SiteManagerTreeWidthParamId).value;if(a==""||a>document.documentElement.clientWidth*.8)document.getElementById(SiteManagerTreeWidthParamId).value=document.documentElement.clientWidth*.25;ResetAllWidths()}function ResetAllWidths(){a:;var c=SmtTotalClientWidth();if(document.getElementById(SiteManagerTreeWidthParamId).value<MIN_NAV_WIDTH)document.getElementById(SiteManagerTreeWidthParamId).value=MIN_NAV_WIDTH;var b="px";$("RefreshLinkDiv").style.width=$("TreeViewDiv").style.width=$("LeftNavBarDiv").style.width=Math.floor(document.getElementById(SiteManagerTreeWidthParamId).value)+b;var a=Math.floor(c)-$("LeftNavTable").clientWidth+document.documentElement.scrollLeft;if(a<0)a=0;$(OLDivId).style.width=a+b;$(VRDivId).style.width=a+b;$(SmtOLResizerId).style.width=a+b}function SmtTotalClientWidth(){a:;return document.documentElement.clientWidth<MIN_WINDOW_WIDTH?document.documentElement.scrollWidth:document.documentElement.clientWidth}function SmtSetResizeCursor(a){a:;a=a?a:window.event?event:null;if(a){var b=a.srcElement?a.srcElement:a.target,c=a.srcElement?"col-resize":"e-resize",d=a.srcElement?"row-resize":"n-resize";if(b.id==SmtTreeResizerId)b.style.cursor=c;else if(b.id==SmtOLResizerId)b.style.cursor=d}}function SmtMouseDownHandler(a){a:;a=a?a:window.event?event:null;if(a){window.lastX=a.clientX;window.lastY=a.clientY;window.startX=a.clientX;window.startY=a.clientY;SmtMouseDownObj=a.srcElement?a.srcElement.id:a.target.id;if($(SmtMouseDownObj).tagName.toLowerCase()=="img")SmtMouseDownObj=SmtGetParent(SmtMouseDownObj).id;SmtAddEventListener(document,"mousemove",b,false);SmtAddEventListener(document,"mouseup",c,false)}function b(a){a:;a=a?a:window.event?event:null;if(a){var b="px";SmtDrag=1;var d=a.clientX-window.lastX,e=a.clientY-window.lastY;window.lastX=a.clientX;window.lastY=a.clientY;if(a.srcElement&&a.button==1){if(SmtMouseDownObj!=""){a.returnValue=false;a.cancelBubble=true;var c=$(SmtMouseDownObj).offsetLeft+d,f=$(SmtMouseDownObj).offsetTop+e;$(SmtMouseDownObj).style.position="absolute";if(SmtMouseDownObj==SmtTreeResizerId){document.body.style.cursor="col-resize";$(SmtMouseDownObj).style.left=c+b}else if(SmtMouseDownObj==SmtOLResizerId)if(a.clientY>$(OLDiv).offsetTop){document.body.style.cursor="row-resize";$(SmtMouseDownObj).style.top=a.clientY+b}}}else if(a.target)if(SmtMouseDownObj!=""){a.preventDefault();a.stopPropagation();var c=$(SmtMouseDownObj).offsetLeft+d,f=$(SmtMouseDownObj).offsetTop+e;$(SmtMouseDownObj).style.position="absolute";if(SmtMouseDownObj==SmtTreeResizerId){document.body.style.cursor="e-resize";$(SmtMouseDownObj).style.left=c+b}else if(SmtMouseDownObj==SmtOLResizerId)if(a.clientY>$(OLDiv).offsetTop){document.body.style.cursor="n-resize";$(SmtMouseDownObj).style.top=a.clientY+b}}}}function c(a){a:;a=a?a:window.event?event:null;if(a){var g="px",i=window.lastX-window.startX,h=window.lastY-window.startY;if(a.srcElement){if(SmtMouseDownObj==SmtTreeResizerId){var d;if(document.dir.toLowerCase()=="rtl")d=SmtTotalClientWidth()-$(SmtMouseDownObj).offsetLeft;else d=$(SmtMouseDownObj).offsetLeft;document.getElementById(SiteManagerTreeWidthParamId).value=d;$(SmtMouseDownObj).style.position="relative";$(SmtMouseDownObj).style.posLeft="";SetNavBarDimensions()}else if(SmtMouseDownObj==SmtOLResizerId){var e=Math.min($(VRDivId).clientHeight-h,document.documentElement.clientHeight-$(OLDiv).offsetTop),f=Math.max($(OLDivId).clientHeight+($(VRDivId).clientHeight-e),10);$(OLDivId).style.height=f;$(VRDivId).style.height=e;document.getElementById(SiteManagerBottomHeightParamId).value=$(VRDivId).offsetHeight;$(SmtMouseDownObj).style.top="";$(SmtMouseDownObj).style.position="relative"}event.returnValue=false}else if(a.target){if(SmtMouseDownObj==SmtTreeResizerId){var d;if(document.body.dir=="rtl")d=SmtTotalClientWidth()-$(SmtMouseDownObj).offsetLeft;else d=$(SmtMouseDownObj).offsetLeft;document.getElementById(SiteManagerTreeWidthParamId).value=d;$(SmtMouseDownObj).style.position="relative";$(SmtMouseDownObj).style.left="0px";SetNavBarDimensions()}else if(SmtMouseDownObj==SmtOLResizerId){var e=Math.max($(VRDivId).clientHeight-h,10),f=Math.max($(OLDivId).clientHeight+($(VRDivId).clientHeight-e),10);$(OLDivId).style.height=f+g;$(VRDivId).style.height=e+g;document.getElementById(SiteManagerBottomHeightParamId).value=$(VRDivId).offsetHeight;$(SmtMouseDownObj).style.top="0px";$(SmtMouseDownObj).style.position="relative"}a.stopPropagation();a.preventDefault()}SmtDrag=0;SmtMouseDownObj="";document.body.style.cursor="default";SmtRemoveEventListener(document,"mouseup",c,false);SmtRemoveEventListener(document,"mousemove",b,false)}}}function SmtGetHeights(b){a:;var a=$(b).offsetParent.firstChild,c=0,d=0,e=true;while(a){if(a.nodeType!=1){a=a.nextSibling;continue}if(a.id!=b&&e)c+=a.offsetHeight;else if(a.id==b)e=false;else d+=a.offsetHeight;a=a.nextSibling}return[c,d]}function SmtContextmenuHandler(){a:;return true}function SmtDef(){a:;for(var a=0;a<arguments.length;++a)if(null==arguments[a]||typeof arguments[a]=="undefined")return false;return true}function SmtGetChildren(a){a:;return SmtDef(a)?a.childNodes?a.childNodes:a.children:null}function SmtGridView_RemoveOldFilterValuesFromMenuTemplate(c){a:;for(var d=SmtGetChildren(c),a=0;a<d.length;a++){var b=d[a];if(b.attributes!=null&&b.getAttribute("isFilterItem")=="true"){c.removeChild(b);--a}}}function SmtGridView_FilterCallbackHandler(q,u){a:;var a=u.split(";");if(a.length!=4){alert("ERROR: SPGridView_FilterCallbackHandler() - values.length != 4");return}var s=a[0],l=a[1],o=a[2],n=a[3];if(q=="__SMTThrottled__")SmtGridView_Throttled_ClearOldFilterValuesFromMenuTemplate(l,o);else{var k=document.getElementById(s);if(k==null){alert("ERROR: SPGridView_FilterCallbackHandler() - gridView == null");return}var d=document.getElementById(l);if(d==null){alert("ERROR: SPGridView_FilterCallbackHandler() - menuTemplate == null");return}var r=document.getElementById(o);if(r==null){alert("ERROR: SPGridView_FilterCallbackHandler() - menu == null");return}var i=k.getAttribute("postbackEventReference");if(i==null||i.length<=0){alert("ERROR: SPGridView_FilterCallbackHandler() - postbackEventReference is null or empty");return}var h=k.getAttribute("postbackClearFilterEventReference");if(h==null||h.length<=0){alert("ERROR: SPGridView_FilterCallbackHandler() - postbackClearFilterEventReference is null or empty");return}SmtGridView_RemoveOldFilterValuesFromMenuTemplate(d);a=q.split(";");if(a.length>1){var f=CAMOpt(d,StBuildParam(Strings.CMS.L_DontFilterBy_Text,a[0]),h.replace(/__POSTBACKARGUMENT__/g,n),"/_layouts/15/images/filteroffdisabled.gif?rev=23");f.setAttribute("isFilterItem","true");f.setAttribute("enabled","false");for(var j=1;j<a.length;j++){var b=unescape(a[j]),c=b,g="__Clear",m="__TypeImage",p="",e=b.indexOf(m);if(e>=0){b=b.substring(0,e);e+=m.length;c=c.substring(e,c.length)}if(b.indexOf(g)==0){f.setAttribute("enabled","true");f.setAttribute("iconSrc","/_layouts/15/images/filteroff.gif?rev=23");b=b.substring(g.length,b.length);p="/_layouts/15/images/CNSAPP16.GIF?rev=23"}if(c.indexOf(g)==0)c=c.substring(g.length,c.length);var v=i.replace(/__POSTBACKARGUMENT__/g,n+";"+c.replace(/\\/g,"\\\\").replace(/\'/g,"\\'").replace(/%/g,"%25").replace(/;/g,"%3b").replace(/\$/g,"%24")),t=CAMOpt(d,b,v,p);t.setAttribute("isFilterItem","true")}}HideMenu(d);MMU_Open(d,r)}}function SmtGridView_ClearOldFilterValuesFromMenuTemplate(a,b){a:;SmtGridViewSetTextMenuItem(a,b,Strings.CMS.L_FilterDisabled_TEXT)}function SmtGridView_Throttled_ClearOldFilterValuesFromMenuTemplate(a,b){a:;SmtGridViewSetTextMenuItem(a,b,Strings.CMS.L_FilterThrottled_TEXT)}function SmtGridViewSetTextMenuItem(g,h,i){a:;var a=document.getElementById(g);if(a==null){alert("ERROR: SPGridView_FilterCallbackHandler() - menuTemplate == null");return}var f=document.getElementById(h);if(f==null){alert("ERROR: SPGridView_FilterCallbackHandler() - menu == null");return}for(var e=SmtGetChildren(a),b=0;b<e.length;b++){var c=e[b];if(c.attributes!=null&&c.getAttribute("isFilterItem")=="true"){a.removeChild(c);--b}}var d=CAMOpt(a,i,"","");d.setAttribute("isFilterItem","true");d.setAttribute("enabled","false");HideMenu(a);MMU_Open(a,f)}function SmtGridView_FilterCallbackErrorHandler(b,a){a:;alert("ERROR: SmtGridView_FilterCallbackErrorHandler() was called - result = "+b+", context = "+a)}function SetPopUpInnerContents(b,c){a:;b.innerHTML="";var a=document.createElement("div");a.innerHTML=c;b.appendChild(a)}function $(){a:;for(var c=[],b=0;b<arguments.length;b++){var a=arguments[b];if(typeof a=="string")a=document.getElementById(a);if(arguments.length==1)return a;c.push(a)}return c}function APD_Smt_TurnOnCamlFilter(){a:;if(null!=theForm){var a="Filter=1";if(theForm.action.indexOf(a)==-1)if(theForm.action.indexOf("?")>0)theForm.action+="&"+a;else theForm.action+="?"+a;var b="FilterOnly=1";if(theForm.action.indexOf(b)==-1)theForm.action+="&"+b}}var listviewtoolbar;function documentReady(){a:;document.readyState=="complete"&&APD_Smt_TurnOnCamlFilter()}function SmtToolbarButton(a){a:;var b="ObjectList1";if(null!=document.getElementById(SiteManagerVRModeParamId)&&null!=document.getElementById(SiteManagerVRModeParamId).value)if("true"==document.getElementById(SiteManagerVRModeParamId).value)b="ObjectList2";this.name=a;if(a.indexOf("delete")>-1){this.el=document.getElementById("SiteMgr_"+b+"Delete_ButtonTable");this.im=document.getElementById("tbbutton_"+b+"Delete_img")}else if(a.indexOf("move")>-1){this.el=document.getElementById("SiteMgr_"+b+"Move_ButtonTable");this.im=document.getElementById("tbbutton_"+b+"Move_img")}else if(a.indexOf("copy")>-1){this.el=document.getElementById("SiteMgr_"+b+"Copy_ButtonTable");this.im=document.getElementById("tbbutton_"+b+"Copy_img")}else if(a.indexOf("viewItem")>-1){this.el=document.getElementById("SiteMgr_ViewItem_ButtonTable");this.im=null}else if(a.indexOf("viewProps")>-1){this.el=document.getElementById("SiteMgr_ViewProps_ButtonTable");this.im=null}else if(a.indexOf("browseList")>-1){this.el=document.getElementById("SiteMgr_BrowseList_ButtonTable");this.im=null}else{this.el=null;this.im=null}if(this.el){var c=this.el.getElementsByTagName("A");if(c.length>0)this.anchor=c[0]}this.disable=function(){a:;if(this.el!=null){setElementEnabledStatus(this.el,false);setElementEnabledStatus(this.anchor,false)}if(null!=this.im)if(a.indexOf("delete")>-1)this.im.src=imagesNotSelected["delete"].src;else if(a.indexOf("move")>-1)this.im.src=imagesNotSelected.move.src;else if(a.indexOf("copy")>-1)this.im.src=imagesNotSelected.copy.src};this.enable=function(){a:;if(this.el!=null){setElementEnabledStatus(this.el,true);setElementEnabledStatus(this.anchor,true)}if(null!=this.im)if(a.indexOf("delete")>-1)this.im.src=imagesSelected["delete"].src;else if(a.indexOf("move")>-1)this.im.src=imagesSelected.move.src;else if(a.indexOf("copy")>-1)this.im.src=imagesSelected.copy.src}}function SmtToolbarHrefDoNothing(){a:;}function SmtToolbarCopy(b,d){a:;var a=SmtGridGetSelectedItems(d);if(1>a.length)return;var c=function(c){a:;if(c==null||c==undefined)return;var a=c[0];if(a!=null&&a.length>1)b!=null&&__doPostBack(b,"Copy"+EventArgSeparator+a)};LaunchPickerTreeDialog("SmtCopyTitle","SmtCopyText","","",SiteUrl,SmtContext,"","","/_layouts/15/images/Copy.gif?rev=23",a,c,"","")}function IsMoveSupported(a){a:;return a.indexOf("SPWeb")!=0&&a.indexOf("Area")!=0?0:1}function SmtToolbarMove(c,b){a:;var e=document.getElementsByName(b),a=SmtGridGetSelectedItems(b);if(1>a.length)return;if(DetectNonMovableItemsInSelection(a)){if(confirm(Strings.CMS.L_NonSitesMoveDetected_TEXT)==0)return}else if(SmtGetCheckedoutItemCount(e)>0)if(confirm(Strings.CMS.L_CheckedOutItemsDetected_TEXT)==0)return;var d=function(b){a:;if(b==null||b==undefined)return;var a=b[0];if(a!=null&&a.length>1)c!=null&&__doPostBack(c,"Move"+EventArgSeparator+a)};LaunchPickerTreeDialog("SmtMoveTitle","SmtMoveText","","",SiteUrl,SmtContext,"","","/_layouts/15/images/Copy.gif?rev=23",a,d,"","")}function SmtToolbarMoveItem(b,d){a:;var a=SmtGridGetSelectedItems(d);if(1>a.length)return;var c=function(c){a:;if(c==null||c==undefined)return;var a=c[0];if(a!=null&&a.length>1)b!=null&&__doPostBack(b,"MoveItem"+EventArgSeparator+a)};LaunchPickerTreeDialog("SmtMoveTitle","SmtMoveText","","",SiteUrl,SmtContext,"","","/_layouts/15/images/Copy.gif?rev=23",a,c,"","")}function SmtDisplayPopup(b,d){a:;b=b?b:window.event?event:null;if(b){var f=b.clientY,e=b.clientX,a=$("smtpopup");if(!SmtDef(a)){a=document.createElement("DIV");a.id="smtpopup";document.body.appendChild(a)}var c;if(SmtNum(d.length)){c="<table cellpadding=0 cellspacing=0 border='0px' style='font: 8pt Arial;'>";for(numlines=0;numlines<d.length;numlines++)c+="<tr><td style='padding-left: 2px; padding-right: 2px'>"+d[numlines]+"</td></tr>";c+="</table>"}else{c="<p>"+d+"</p>";numlines=1}SetPopUpInnerContents(a,c);a.style.position="absolute";a.style.left=e+"px";a.style.top=f+"px";a.style.display="";a.style.backgroundColor="#FAFAD2";a.style.border="1px solid black"}}function SmtClearPopUp(){a:;var a=$("smtpopup");if(!SmtDef(a))return;$("smtpopup").style.display="none"}var g_SmtActionOps;function SmtTrimActionMenu(m,j,l,n,k){a:;var e=SmtGetElementById(j),i=SmtGetElementById(m),a=i;if(!SmtDef(a))return;var o=100,h=0;do{if(h>o||!SmtDef(a.tagName)){var q=a.id||a.tagName,p=new SmtException("Could not find ObjectList. Last object found:"+q);throw p;}if(a.tagName.toLowerCase()=="div")if(a.id=="RelatedViewHeader"||a.id=="MasterHeader"){a=SmtNextSibling(a);break}a=a.parentNode;h++}while(SmtDef(a));if(!SmtDef(a))return;var c=new SmtOperations(g_SmtActionOps,l,n,k,a);if(SmtDef(e)){var f=SmtGetChildren(e);if(null==f)return;for(var d=c.GetMenuItemMask(),g=0;g<f.length;g++){var b=f[g];if(b.id){b.setAttribute("enabledOverride","false");(b.id.indexOf("_Move")>0&&d&c.GetCode("Move")||b.id.indexOf("_Copy")>0&&d&c.GetCode("Copy")||b.id.indexOf("_Delete")>0&&d&c.GetCode("Delete")||b.id.indexOf("_CheckOut")>0&&d&c.GetCode("CheckOut")||b.id.indexOf("_UndoCheckOut")>0&&d&c.GetCode("Discard")||b.id.indexOf("_CheckIn")>0&&d&c.GetCode("CheckIn")||b.id.indexOf("_Approve")>0&&d&c.GetCode("Approve")||b.id.indexOf("_Publish")>0&&d&c.GetCode("Publish")||b.id.indexOf("_UnPublish")>0&&d&c.GetCode("UnPublish")||b.id.indexOf("_Deny")>0&&d&c.GetCode("Deny")||b.id.indexOf("_SubmitApprove")>0&&d&c.GetCode("Submit"))&&b.removeAttribute("enabledOverride")}}HideMenu(e,i)}}function SmtException(a){a:;this.message=a;this.name="Site Manager"}function SmtOperations(b,e,f,d,g){a:;this.AllowDocOps=SmtStr(e)&&e=="True";this.IsModerated=SmtStr(f)&&f=="True";this.AllowVersions=SmtStr(d)&&d=="True";this.control=g;this.OpCodes=[];for(var a=0;a<b.length;a++){var c={name:"",code:0};c.name=b[a].name;c.code=b[a].code;this.OpCodes[a]=c}this.OpCodes.length=b.length;this.GetCode=SmtGetCode;this.SetCode=SmtSetCode;this.AllowAll=SmtAllowAll;this.GetMenuItemMask=SmtGetActionMenuItemMask;this.AdjustOps=SmtAdjustActionOps;this.GetSelectedItems=SmtGetSelectedItems;this.SelectedCount=SmtSelectedInputCount;this.SelectedListCount=SmtListOrFolderCount;this.CheckedOutCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Coin","True")};this.DeleteAllowedCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"AllowDel","True")};this.DraftCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Mod","1")};this.PendingCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Mod","2")};this.ApprovedCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Mod","3")};this.DeniedCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Mod","4")};this.ScheduledCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Mod","5")};this.VersionCount=function(){a:;return SmtAttributeCount(this.control.getElementsByTagName("input"),"Ver","True")}}var SmtTypes;function SmtListOrFolderCount(){a:;var a=this.GetSelectedItems();if(!SmtDef(a))return 0;for(var c=0,b=0;b<a.length;b++){if(!a[b].checked)continue;var e=a[b].getAttribute("Value"),d=e.split(TypeToIDSeparator)[0];if(SmtTypes[d]==2)c++}return c}function SmtGetActionMenuItemMask(){a:;var b=0,g="SPList",l="SPListItem",k="SPFile",f="SPFolder",j="SPWeb",i="Area",e=true,c=this.GetSelectedItems();if(!SmtDef(c))return 0;this.AdjustOps();for(var d=0;d<c.length;d++){if(!c[d].checked)continue;var h=c[d].getAttribute("Value"),a=h.split(TypeToIDSeparator)[0];if(!SmtDef(a)||!SmtStr(a))continue;if(SmtTypes[a]==1)b=this.AllowAll();else if(a==g)b|=this.GetCode("Copy")|this.GetCode("Delete");else if(a==f)b|=this.GetCode("Delete")|this.GetCode("Approve")|this.GetCode("Deny");else if(SmtTypes[a]==3){b|=this.GetCode("Move")|this.GetCode("Copy")|this.GetCode("Delete");e=IsSiteAdmin=="True"}}if(!e)b&=~this.GetCode("Copy");return b}function SmtAdjustActionOps(){a:;if(!this.AllowDocOps){this.SetCode("CheckIn",0);this.SetCode("Discard",0);this.SetCode("CheckOut",0)}else{if(this.CheckedOutCount()==0){this.SetCode("CheckIn",0);this.SetCode("Discard",0)}this.CheckedOutCount()==this.SelectedCount()&&this.SetCode("CheckOut",0)}if(!this.AllowVersions){this.SetCode("Publish",0);this.SetCode("UnPublish",0)}if(!this.IsModerated){this.SetCode("Approve",0);this.SetCode("Deny",0);this.SetCode("Submit",0)}else{if(this.PendingCount()==0){this.SetCode("Approve",0);this.SetCode("Deny",0)}this.DraftCount()==0&&this.SetCode("Submit",0)}this.SelectedCount>1&&this.SetCode("Submit",0);if(this.DeleteAllowedCount()!=this.SelectedCount()){this.SetCode("Delete",0);this.SetCode("Move",0);this.SelectedCount()==this.SelectedListCount()&&this.SetCode("Copy",0)}0<this.SelectedListCount()&&this.SetCode("Copy",0);if(this.CheckedOutCount()>0){this.SetCode("Copy",0);this.SetCode("Move",0)}if(this.VersionCount()==0){this.SetCode("Move",0);this.SetCode("Copy",0)}}function SmtGetSelectedItems(){a:;for(var b=this.control.getElementsByTagName("input"),d=[],c=0,a=0;a<b.length;a++)if(b[a].checked){d[c]=b[a];c++}d.length=c;return d}function SmtAllowAll(){a:;for(var b=0,a=0;a<this.OpCodes.length;a++)b|=this.OpCodes[a].code;return b}function SmtGetCode(b){a:;if(SmtStr(b))for(var a=0;a<this.OpCodes.length;a++)if(b==this.OpCodes[a].name)return this.OpCodes[a].code;return 0}function SmtSetCode(b,c){a:;if(SmtStr(b)&&SmtNum(c))for(var a=0;a<this.OpCodes.length;a++)if(b==this.OpCodes[a].name)this.OpCodes[a].code=c}function SmtAttributeCount(a,d,c){a:;var e=0;if(SmtDef(a)&&!SmtStr(a)&&SmtStr(d)&&SmtStr(c))for(var b=0;b<a.length;b++){if(!a[b].checked)continue;if(c==a[b].getAttribute(d))e++}return e}function SmtSelectedInputCount(){a:;for(var c=0,b=this.control.getElementsByTagName("input"),a=0;a<b.length;a++)if(b[a].checked)c++;return c}function SmtRemoveMenuItems(b,e,d){a:;for(var a=0;a<b.children.length;a++){var c=b.children[a];if(c.attributes!=null&&c.getAttribute(e)==d){b.removeChild(c);--a}}}function SmtGetCheckedoutItemCount(a){a:;return SmtAttributeCount(a,"Coin","True")}function SmtPickerGetHighestTypeObjectId(f){a:;for(var a=f.split(IdSeparator),c=a[0],d,e,b=1;b<a.length;b++){d=a[b].split(TypeToIDSeparator)[0];e=c.split(TypeToIDSeparator)[0];if(SmtTypes[d]>SmtTypes[e])c=a[b]}return c}function DetectNonMovableItemsInSelection(d){a:;for(var a=d.split(IdSeparator),f=a[0],b,e,c=1;c<a.length;c++){b=a[c].split(TypeToIDSeparator)[0];if(SmtTypes[b]!=3&&SmtTypes[b]!=1)return true}return false}function DetectNonWebsInSelection(d){a:;for(var a=d.split(IdSeparator),f=a[0],c,e,b=1;b<a.length;b++){c=a[b].split(TypeToIDSeparator)[0];if(SmtTypes[c]!=3)return true}return false}function SmtGridGetSelectedItems(d){a:;var b=document.getElementsByName(d),e=SmtGridGetSelectedItemCount(d),c="";if(1>e||d==SiteManagerRadioSelection&&e>1)return c;for(var f=0,a=0;a<b.length;a++)if(b[a].checked){if(f==e-1)c+=b[a].getAttribute("Value");else c+=b[a].getAttribute("Value")+IdSeparator;f++}return c}var allItemsState;function SmtGridToggleSelectAll(){a:;var b=document.getElementsByName(SiteManagerSelectItemName);allItemsState=allItemsState?false:true;if(allItemsState){for(var a=0;a<b.length;a++)if(b[a].disabled==false&&b[a].checked==false){b[a].checked=true;SmtGridSelectItem(b[a])}}else for(var a=0;a<b.length;a++)if(b[a].disabled==false&&b[a].checked==true){b[a].checked=false;SmtGridSelectItem(b[a])}}function SmtGridGetSelectedItemCount(d){a:;for(var b=document.getElementsByName(d),c=0,a=0;a<b.length;a++)if(b[a].checked)c+=1;return c}function SmtGridSelectItem(b){a:;var a=SmtGetParent(b);while(null!=a&&a.nodeName!="TR")a=a.parentNode;if(null!=a)if(b.checked){a.setAttribute("previousBackgroundColor",a.style.backgroundColor);a.style.backgroundColor=theForm.SmtSelectedItemBgColor.value}else if(null!=a.getAttribute("previousBackgroundColor"))a.style.backgroundColor=a.getAttribute("previousBackgroundColor");else a.style.backgroundColor="white"}function SmtGridSelectPivotRow(a){a:;if(null!=a){var b=a.getAttribute("Value");SmtEcbViewRelated(b)}}function SmtGridSelectPivotObject(){a:;for(var b=document.getElementsByName(SiteManagerRadioSelection),c="",a=0;a<b.length;a++)if(b[a].checked){c=b[a].getAttribute("Value");break}return c}function SmtSingleObjectCopy(a){a:;if(a==null||a.length<=0)return;var b=function(c){a:;if(c==null||c==undefined)return;var b=c[0];if(b!=null&&b.length>1){theForm.LroSource.value=a;theForm.LroDestination.value=b;SmtLroCopyPostBack()}};LaunchPickerTreeDialog("SmtCopyTitle","SmtCopyText","","",SiteUrl,SmtContext,"","","/_layouts/15/images/Copy.gif?rev=23",a,b,"","")}function SmtSingleObjectMove(a,c){a:;if(a==null||a.length<=0)return;if(c=="true")if(confirm(Strings.CMS.L_CheckedOutItemsDetected_TEXT)==0)return;var b=function(c){a:;if(c==null||c==undefined)return;var b=c[0];if(b!=null&&b.length>1){theForm.LroSource.value=a;theForm.LroDestination.value=b;SmtLroMovePostBack()}};LaunchPickerTreeDialog("SmtMoveTitle","SmtMoveText","","",SiteUrl,SmtContext,"","","/_layouts/15/images/Copy.gif?rev=23",a,b,"","")}function SmtEcbViewRelated(a){a:;if(null!=a){document.getElementById(SiteManagerVRModeParamId).value="true"+IdSeparator+a;__doPostBack("","")}}function SmtEcbNavigateUrl(a){a:;window.open(a)}function SmtVariationExportWarning(a){a:;if(confirm(Strings.CMS.L_VarExportWarning_TEXT)==0)return;window.location.href=a}function disableAllElements(b){a:;for(var a=0;a<b.length;a++)setElementEnabledStatus(b[a],false)}function setElementEnabledStatus(a,b){a:;if(!a)return;a.disabled=!b;if(a.tagName=="A"&&a.style.display!="none"){if(b&&a.disabledHref)a.href=a.disabledHref;if(!b&&a.href){a.disabledHref=a.href;a.removeAttribute("href",0)}}}function SmtGetElementById(a){a:;if(null==a||typeof a!="string")return a;if(document.getElementById)a=document.getElementById(a);else if(document.all)a=document.all[a];else a=null;return a}function SmtIsAllWs(a){a:;return!/[^\t\n\r ]/.test(a.data)}function SmtIsIgnorable(a){a:;return a.nodeType==8||a.nodeType==3&&SmtIsAllWs(a)}function SmtNextSibling(a){a:;while(a=a.nextSibling)if(!SmtIsIgnorable(a))return a;return null}function SmtPreviousSibling(a){a:;while(a=a.previousSibling)if(!SmtIsIgnorable(a))return a;return null}function SmtStr(){a:;for(var a=0;a<arguments.length;++a)if(typeof arguments[a]!="string")return false;return true}function SmtNum(){a:;for(var a=0;a<arguments.length;++a)if(isNaN(arguments[a])||typeof arguments[a]!="number")return false;return true}function SmtAddEventListener(a,b,c,d){a:;if(!(a=SmtGetElementById(a)))return;b=b.toLowerCase();if(a.addEventListener){if(b=="resize")a=window;a.addEventListener(b,c,d)}else a.attachEvent&&a.attachEvent("on"+b,c)}function SmtRemoveEventListener(a,b,c,d){a:;if(!(a=$(a)))return;b=b.toLowerCase();if(a.removeEventListener){if(b=="resize")a=window;a.removeEventListener(b,c,d)}else a.detachEvent&&a.detachEvent("on"+b,c)}function GetCurrentStyle(a){a:;if(typeof a.currentStyle!="undefined"&&a.currentStyle)return a.currentStyle;var b=(a.ownerDocument?a.ownerDocument:a.documentElement).defaultView;return b&&a!==b&&b.getComputedStyle?b.getComputedStyle(a,null):a.style}$_global_cmssitemanager();