function ULScUq(){var o=new Object;o.ULSTeamName="Longhorn & Platform Server Components";o.ULSFileName="sldlib.js";return o;}
// _lcid="1033" _version="15.0.4571"
// _localBinding
// Version: "15.0.4571"
// Copyright (c) Microsoft Corporation.  All rights reserved.
fSldlibJssLoaded=true;
var fSldlibDefaultView=false;
var items=new Array;
var firstId=-1;
var fSelectFieldAppeared=false;
var layoutUrl="../.."+"/_layouts/15/";
var currentRootFolder="";
var ids=new Array;
var fAllSelected=false;
var selectedIdsStr="";
var filterIdsStr="";
var fSelectedView=false;
var currentViewGuid="";
var currentViewStyle="";
var currentViewLink=null;
var vCurrentListID="";
var vCurrentListUrlAsHTML="";
var urlCmdForDisplay="";
var fNewItem=false;
var fInit=false;
var tbImg=null;
var tbTitle=null;
var hilitedRow=null;
var previewTimer=-1;
var timedItem=-1;
var listDirection="ltr";
var lastMenuId="";
var firstIdWithCheckbox=-1;
var fInitAttempted=false;
var fRecursive=false;
var fEmptyView=false;
var fWebFldrView=false;
var fFilterOn=false;
var fInitViewStyle=false;
var fNeedReload=false;
var fEditingInProcess=false;
var ThumbnailSize=180;
var unverifiedSelectionIdsCount=0;
var verifiedSelectionIdsCount=0;
 var selectionLimit=200;
var fPPSLAXLoaded=true;
var fLimitedDisplay=false;
var vSldlibUrl="";
function CreateDerivedImageUrl(originalImageUrl, subdirStr)
{ULScUq:;
	var url=originalImageUrl.replace(/\.([^\.]+)$/, "_$1");
	url=url+".jpg";
	url=url.replace(/\/([^\/]+)$/, subdirStr+"$1");
	return url;
}
function EncodedThumbnailImage(id)
{ULScUq:;
	if (id==null || items[id]==null)
		return;
	if (items[id].objType==1)
	{
		return items[id].thumbnail;
	}
	else if (items[id].fUnknownImageType==true)
	{
		return items[id].thumbnail;
	}
	else
	{
		var thumbnailUrl=CreateDerivedImageUrl(items[id].originalUrl,  "/_t/");
		return thumbnailUrl;
	}
}
function FBrowserIsWinBrowser5Up()
{ULScUq:;
	if( browseris.ie5up && ( browseris.win32 || browseris.win64bit ) )
		return true;
	else
		return false;
}
function ViewEmptyScript()
{ULScUq:;
	fEmptyView=true;
	InitViewUrls();
	InitItems();
	AddSelectAllCheckbox();
	return;
}
function WebFolderViewInit(listGuid)
{ULScUq:;
	if ( FBrowserIsWinBrowser5Up() )
	{
		fWebFldrView=true;
		InitViewUrls();
		vCurrentListID=listGuid;
	}
}
function MakeFullUrl(folderUrl, siteUrl)
{ULScUq:;
	var unescapedFolderUrl=unescapeProperly(folderUrl);
	if (0==unescapedFolderUrl.indexOf("http://") || 0==unescapedFolderUrl.indexOf("https://"))
		return unescapedFolderUrl;
	else
		return siteUrl+unescapedFolderUrl;
}
function SetActiveXStatus(fLoaded)
{ULScUq:;
	fPPSLAXLoaded=fLoaded;
}
function HandleError(errnum)
{ULScUq:;
	alert(Strings.LHPServer.L_NeedPPT_Text);
}
function GetSLUrl()
{ULScUq:;
	var FinalUrl;
	var rootfolder=GetUrlKeyValue("RootFolder");
	if (rootfolder==null || rootfolder=="")
		FinalUrl=vCurrentListUrlAsHTML;
	else
		{
		var strListDir=vCurrentListUrlAsHTML.substring(0, vCurrentListUrlAsHTML.length - 1);
		var subwebPos=strListDir.lastIndexOf("/");
		if (subwebPos==-1)
			return null;
		var subwebStr=strListDir.substring(0, subwebPos);
		var colonSlashSlashIndex=subwebStr.indexOf("://");
		if (colonSlashSlashIndex==-1)
			return null;
		var siteUrl=subwebStr;
		var nextSlashPos=subwebStr.indexOf("/", colonSlashSlashIndex+3);
		if (nextSlashPos !=-1)
			siteUrl=subwebStr.substring(0, nextSlashPos);
		FinalUrl=MakeFullUrl(rootfolder, siteUrl );
		}
	return FinalUrl;
}
function PublishSlides()
{ULScUq:;
	 if ( !FBrowserIsWinBrowser5Up() )
	{
		alert(Strings.LHPServer.L_IEOnlyFeature_Text);
		return;
	}
	if (fLimitedDisplay)
	{
		alert(Strings.LHPServer.L_NotAvailableOnWebPart_Text);
		return ;
	}
	if (!fSldlibDefaultView)
	{
		alert(L_NotOurView_Text);
		return;
	}
   if (!fPPSLAXLoaded)
   {
		alert(Strings.LHPServer.L_NeedPPT_Text);
		return ;
   }
	try
	{
		objx=document.getElementById("ppactivex");
		objx.PublishSlidesToSlideLibrary(vSldlibUrl);
	}
	catch( e )
	{
		HandleError( e.number );
		return;
	}
}
function GetEscapedUrl( strUrl )
{ULScUq:;
	return strUrl.replace(/,/g, "%2c");
}
var v_pptPlugin=null;
function EnsurePPPlugin()
{ULScUq:;
	if (v_pptPlugin==null)
	{
		var plugin=CreateMacPlugin();
		if (plugin !=null)
			v_pptPlugin=plugin;
	}
	return v_pptPlugin;
}
function CallInsertSlides2(arrSelected)
{ULScUq:;
	var plugin=EnsurePPPlugin();
	return plugin.InsertSlidesFromSlideLibrary(arrSelected);
}
function SendSlides()
{ULScUq:;
	var selItems=new Array;
	if ((!browseris.ie || !(browseris.win32 || browseris.win64bit)) && !IsSupportedMacBrowser())
	{
		if (browseris.mac)
			alert(Strings.LHPServer.L_NeedSupportedMacBrowserAndOffice_Text);
		else
			alert(Strings.LHPServer.L_IEOnlyFeature_Text);
		return;
	}
	if (fLimitedDisplay)
	{
		alert(Strings.LHPServer.L_NotAvailableOnWebPart_Text);
		return ;
	}
	if (!fSldlibDefaultView)
	{
		alert(L_NotOurView_Text);
		return;
	}
	if (IsSupportedMacBrowser())
	{
		var macPlugin=EnsurePPPlugin();
		if (macPlugin==null)
		{
			alert(Strings.LHPServer.L_NeedSupportedMacBrowserAndOffice_Text);
			return ;
		}
	}
	else
	{
		if (!fPPSLAXLoaded)
		{
			if (browseris.mac)
				alert(Strings.LHPServer.L_NeedSupportedMacBrowserAndOffice_Text);
			else
				alert(Strings.LHPServer.L_NeedPPT_Text);
			return ;
		}
	}
	var i;
	var cSelectedSlides=0;
	for(i=0; i <ids.length; i++)
	{
	if (items[ids[i]].fSelected==true)
		{
		selItems[cSelectedSlides++]=GetEscapedUrl(items[ids[i]].originalUrl);
		}
	}
	if (cSelectedSlides==0)
	{
		alert(Strings.LHPServer.L_NoSlideSelected_Text);
		return;
	}
	if (IsSupportedMacBrowser())
	{
		var success=CallInsertSlides2(selItems);
		if (!success)
		{
			alert(Strings.LHPServer.L_NeedSupportedMacBrowserAndOffice_Text);
			return;
		}
	}
	else
	{
		var objx=document.getElementById("ppactivex");
		CallInsertSlides(selItems, objx);
	}
	ClearSelections();
}
function GetLinks(lnkId)
{ULScUq:;
	if (browseris.ie)
		return document.all(lnkId);
	else
		return document.links[lnkId];
}
function InitSldlibView(listID, languageText)
{ULScUq:;
	vCurrentListID=listID;
	layoutUrl="../../_layouts/";
}
function RedirectToCorrectSelectView()
{ULScUq:;
	fRecursive=true;
	fSelectedView=false;
	var currentUrl=window.location.href;
	var qmarkPosition=currentUrl.indexOf("?");
	var suffix="";
	var viewUrl="";
	if (qmarkPosition !=-1)
	{
		suffix=currentUrl.substring(qmarkPosition+1, currentUrl.length);
		viewUrl=currentUrl.substring(0, qmarkPosition);
	}
	else
	{
		viewUrl=currentUrl;
	}
	sortField=/SortField=[^&]*/i;
	sortDir=/SortDir=[^&]*/i;
	var sortFieldStr=suffix.match(sortField);
	var sortDirStr=suffix.match(sortDir);
	var idsStr=MakeSelectionStr();
	if (idsStr=="")
		idsStr="none";
	viewUrl+="?"+"View="+currentViewGuid+"&FilterName=ID&FilterMultiValue="+idsStr;
	if (sortFieldStr !=null && sortDirStr !=null)
	{
		viewUrl+="&"+sortFieldStr+"&"+sortDirStr;
	}
	window.open(viewUrl, "_self", "", true);
}
function InitItems()
{ULScUq:;
	fLimitedDisplay=false;
	if (fLimitedDisplay)
	{
		var expDiv=null;
		expDiv=document.getElementById("expDiv");
		fLimitedDisplay=(expDiv==null);
	}
}
function InitViewUrls()
{ULScUq:;
	var currentUrl=window.location.href;
	var qmarkPosition=currentUrl.indexOf("?");
	var suffix="";
	var viewUrl="";
	if (qmarkPosition !=-1)
	{
		suffix=currentUrl.substring(qmarkPosition+1, currentUrl.length);
		viewUrl=currentUrl.substring(0, qmarkPosition);
	}
	else
	{
		viewUrl=currentUrl;
	}
	if ( !FBrowserIsWinBrowser5Up() )
	{
		if (fSelectedView)
		{
			alert(Strings.LHPServer.L_SelectedViewError_Text);
			var newViewUrl=viewUrl.replace(/\/forms\/[^\/]*$/i, "/");
			window.location.href=newViewUrl;
			return;
		}
	}
	currentRootFolder=suffix.match(/RootFolder=[^&]*/);
	var queryVariables=suffix.split("&");
	var filterSubstr=suffix.match(/View=([^&]*)&FilterName=ID&FilterMultiValue=([^&]*)/);
	var fIncompleteSelectedView=false;
	if (fSelectedView)
	{
		if (filterSubstr !=null)
		{
			filterIdsStr=filterSubstr[1];
		}
		else
		{
			RedirectToCorrectSelectView();
		}
	}
	suffix="";
	for (var i=0; i < queryVariables.length; i++)
	{
		if (queryVariables[i].match(/Filter=1/))
		{
			fFilterOn=true;
		}
	}
	links=GetLinks("onetidViewSelector");
	if (links !=null && links.length > 1)
	{
		for (i=0; i < links.length; i++)
		{
			var viewClassName=links[i].parentElement.parentElement.parentElement.parentElement.parentElement.className;
			if (viewClassName.match(/ms-selectednav/))
			{
				currentViewLink=links[i];
			}
		}
		if (currentViewLink !=null && !fEmptyView && !fWebFldrView && FBrowserIsWinBrowser5Up() )
		{
			var viewSelectionStr="<TABLE border=0 cellspacing=0 cellpadding=0>";
			var curviewGifString=ctx.imagesPath+"curview.gif"+"\">";
			var spaceGifString=ctx.imagesPath+"blank.gif"+"\">";
			viewSelectionStr+="<TR><TD align=center valign=middle><img id=imgViewlist src=\"";
			viewSelectionStr+=(currentViewStyle=="list")?curviewGifString:spaceGifString;
			viewSelectionStr+="</TD><TD><TABLE><TR><TD align=center valign=middle style='padding-top:3'><A href=javascript:SwitchViewStyle('list')><img border=0 src=\""+ctx.imagesPath+"detail.gif\" alt="+Strings.LHPServer.L_ListStyle_Text+"></A></TD><TD nowrap><A href=javascript:SwitchViewStyle('list')>";
			viewSelectionStr+=Strings.LHPServer.L_ListStyle_Text;
			viewSelectionStr+="</A></TD></TR></TABLE></TD></TR>";
			viewSelectionStr+="<TR><TD align=center valign=center><img id=imgViewthumbnail src=\"";
			viewSelectionStr+=(currentViewStyle=="thumbnail")?curviewGifString:spaceGifString;
			viewSelectionStr+="</TD><TD><TABLE><TR><TD align=center valign=middle><A href=javascript:SwitchViewStyle('thumbnail')><img border=0 src=\""+ctx.imagesPath+"tbnail.gif\" alt="+Strings.LHPServer.L_ThumbnailStyle_Text+"></A></TD><TD nowrap><A href=javascript:SwitchViewStyle('thumbnail')>";
			viewSelectionStr+=Strings.LHPServer.L_ThumbnailStyle_Text;
			viewSelectionStr+="</A></TD></TR></TABLE></TD></TR></TABLE>";
			currentViewLink.parentElement.insertAdjacentHTML("beforeEnd", viewSelectionStr);
			var titleWebImg=document.getElementById("onetidtpweb1");
			if (titleWebImg !=null)
				titleWebImg.parentElement.width=130;
		}
	}
}
function SwitchViewStyle(style)
{ULScUq:;
	if (!fLimitedDisplay)
	{
		if (style==currentViewStyle || fEmptyView)
			return;
		document.images["imgView"+currentViewStyle].src=ctx.imagesPath+"blank.gif";
		if (style=="thumbnail")
		{
			document.getElementById("contentthumbnail").style.display="block";
		}
		else
		{
			document.getElementById("contentthumbnail").style.display="none";
		}
		currentViewStyle=style;
		document.images["imgView"+currentViewStyle].src=ctx.imagesPath+"curview.gif";
	}
}
function NextSelectionOverLimit( newCount )
{ULScUq:;
	if (( unverifiedSelectionIdsCount+verifiedSelectionIdsCount+newCount ) > selectionLimit)
		return true;
	return false;
}
function ToggleSelection(id)
{ULScUq:;
	if (fLimitedDisplay)
		return ;
	if (id < 0 || items[id]==null)
		return;
	if (items[id].fSelected==false)
	{
		if (NextSelectionOverLimit(1))
		{
			UIChange(id, false);
			alert(Strings.LHPServer.L_ExceedSelectionLimit_Text);
			return false;
		}
		else
		{
			items[id].fSelected=true;
			verifiedSelectionIdsCount++;
			UIChange(id, true);
		}
	}
	else
	{
		items[id].fSelected=false;
		verifiedSelectionIdsCount --;
		UIChange(id, false);
	}
	ConstructSelectionHref();
}
function ToggleSelectionAll()
{ULScUq:;
	 if (fLimitedDisplay)
		return ;
	var i;
	var fSelect=!fAllSelected;
	var selectionChangeCount=0;
	for (i=0; i < ids.length; i++)
	{
		if (items[ids[i]].objType==1)
			continue;
		if (items[ids[i]].fSelected !=fSelect)
			selectionChangeCount++;
	}
	if (fSelect)
	{
		if (NextSelectionOverLimit(selectionChangeCount))
		{
			alert(Strings.LHPServer.L_ExceedSelectionLimit_Text);
			return;
		}
		verifiedSelectionIdsCount=verifiedSelectionIdsCount+selectionChangeCount;
	}
	else
	{
		verifiedSelectionIdsCount=verifiedSelectionIdsCount - selectionChangeCount;
	}
	for (i=0; i < ids.length; i++)
	{
		if (items[ids[i]].objType==1)
			continue ;
		items[ids[i]].fSelected=fSelect;
		UIChange(ids[i], fSelect);
	}
	ConstructSelectionHref();
}
function ConstructSelectionHref()
{ULScUq:;
	var selectionStr=MakeSelectionStr();
	if (selectionStr=="")
		selectionStr="none";
	var imgSelectAll=document.images["cbxSelectAll"];
	if (imgSelectAll !=null)
	{
		if (fAllSelected)
			imgSelectAll.src=ctx.imagesPath+"checkall.gif";
		else
			imgSelectAll.src=ctx.imagesPath+"unchecka.gif";
	}
	if (currentViewLink==null || !fSelectedView)
		return;
	var currentUrl=window.location.href;
	var qmarkPosition=currentUrl.indexOf("?");
	var queryString="";
	var viewUrl=currentUrl;
	if (qmarkPosition !=-1)
	{
		viewUrl=currentUrl.substring(0, qmarkPosition);
		queryString=currentUrl.substring(qmarkPosition+1, currentUrl.length);
	}
	currentViewLink.href=viewUrl+"?"+"View="+currentViewGuid+"&FilterName=ID&FilterMultiValue="+selectionStr;
}
function ClearSelections()
{ULScUq:;
	selectedIdsStr="";
	var i;
	for (i=0; i < ids.length; i++)
	{
		items[ids[i]].fSelected=false;
		UIChange(ids[i], false);
	}
	ConstructSelectionHref();
}
function GetSelectionCount()
{ULScUq:;
	var count=0;
	var i;
	for (i=0; i < ids.length; i++)
	{
		if (items[ids[i]].fSelected==true)
		{
			count++;
		}
	}
	return count;
}
function MakeSelectionStr()
{ULScUq:;
	var newSelStr=selectedIdsStr;
	var i;
	fAllSelected=true;
	for (i=0; i < ids.length; i++)
	{
		if (items[ids[i]].fSelected==true)
		{
			if (newSelStr=="")
			{
				newSelStr=""+ids[i];
			}
			else
			{
				newSelStr+=";"+ids[i];
			}
		}
		else if (items[ids[i]].objType==0)
		{
			fAllSelected=false;
		}
	}
	return newSelStr;
}
function CreateRootFolderHref(id)
{ULScUq:;
	if (id==null || items[id]==null)
		return "";
	if (items[id].objType !=1)
		return "";
	var currentHref=window.location.href;
	if (!ctx.recursiveView)
	{
		var folderHref="RootFolder="+escapeProperly(items[id].originalUrl);
		if (-1==currentHref.indexOf("?"))
		{
			currentHref=currentHref+"?"+folderHref;
		}
		else if (currentHref.match(/RootFolder=/))
		{
			currentHref=currentHref.replace(/RootFolder=[^&]*/, folderHref);
		}
		else
		{
			currentHref=currentHref+"&"+folderHref;
		}
	}
	currentHref=currentHref.replace(/&p_\w+=[^&]*/g, "");
	currentHref=currentHref.replace(/&PageFirstRow=[^&]*/, "");
	currentHref=currentHref.replace(/&View=[^&]*/, "");
	currentHref=currentHref.replace(/\?Paged=TRUE&/, "?");
	if (-1==currentHref.indexOf("?"))
		return currentHref+"?View="+currentViewGuid;
	else
		return currentHref+"&View="+currentViewGuid;
}
function DisplayItemUrl(id)
{ULScUq:;
	if (id==null || items[id]==null)
		return "";
	if (items[id].objType==1)
	{
		return CreateRootFolderHref(id);
	}
	else if (items[id].fUnknownImageType==true)
	{
		return items[id].originalUrl;
	}
	else
	{
		var cmd="";
		if (urlCmdForDisplay==null)
			return;
		cmd=urlCmdForDisplay+"&ID="+id;
		cmd+="&Source="+GetSource();
		var menuTR=document.all("title"+id);
		if (menuTR !=null)
		{
			var fileDir=menuTR.parentElement.parentElement.FileDirRef;
			if (fileDir !=null && fileDir !="")
			{
				fileDir=escapeProperly("/"+fileDir);
				cmd=cmd.replace(/RootFolder=[^&]*&/, "");
				cmd=cmd+"&RootFolder="+fileDir;
			}
		}
		return cmd;
	}
}
function CallDisplayItem(id)
{ULScUq:;
	if (id==null || items[id]==null)
		return;
	window.location.href=DisplayItemUrl(id);
}
function DisplayItemOnFileRef(id)
{ULScUq:;
	if ( !FBrowserIsWinBrowser5Up() )
	{
		CallDisplayItem(id);
		return false;
	}
	if (browseris.ie55up)
	{
		CallDisplayItem(id);
		return false;
	}
	else
	{
		event.cancelBubble=true;
		CallDisplayItem(id);
		return true;
	}
}
function CallEditItem(id)
{ULScUq:;
	var cmd="";
	if (urlCmdForDisplay==null)
		return;
	cmd=urlCmdForDisplay+"&ID="+id;
	cmd+="&Source="+GetSource();
	var menuTR=document.all("title"+id);
	if (menuTR !=null)
	{
		var fileDir=menuTR.parentElement.parentElement.FileDirRef;
		if (fileDir !=null && fileDir !="")
		{
			fileDir=escapeProperly("/"+fileDir);
			cmd=cmd.replace(/RootFolder=[^&]*&/, "");
			cmd=cmd+"&RootFolder="+fileDir;
		}
	}
	var editUrl=cmd.replace(/dispform\.aspx/i, "EditForm.aspx");
	alert(editUrl);
	if (editUrl !="")
		window.location.href=editUrl;
}
function DeleteSlides()
{ULScUq:;
	 if (fLimitedDisplay)
	{
		alert(Strings.LHPServer.L_NotAvailableOnWebPart_Text);
		return ;
	}
	if (!fSldlibDefaultView)
	{
		alert(L_NotOurView_Text);
		return;
	}
	var selectionStr=MakeSelectionStr();
	if (selectionStr=="")
	{
		alert(Strings.LHPServer.L_NoSlideSelected_Text);
		return;
	}
	if (layoutUrl=="")
		return;
	var confirmed=false;
	if (GetSelectionCount() > 1)
	{
		if (confirm(ctx.RecycleBinEnabled ? Strings.LHPServer.L_RecycleMultipleItems_Text : Strings.LHPServer.L_DeleteMultipleItems_Text))
			confirmed=true;
	}
	else
	{
		if (confirm(ctx.RecycleBinEnabled ? Strings.LHPServer.L_RecycleSingleItem_Text : Strings.LHPServer.L_DeleteSingleItem_Text))
			confirmed=true;
	}
	if (confirmed)
	{
		var deleteUrl=layoutUrl+"DeleteMu.aspx";
		deleteUrl+="?ListId="+vCurrentListID+"&SelectedIds="+MakeSelectionStr();
		if (currentRootFolder !="" && currentRootFolder !=null)
			deleteUrl+="&"+currentRootFolder;
		var form=document.forms[MSOWebPartPageFormName];
		if (null !=form)
		{
			ClearSelections();
			form.action=deleteUrl;
			form.method="POST";
			form.submit();
		}
	}
}
function GetScaleRatio(w, h, spaceW, spaceH)
{ULScUq:;
	var ratio1=(spaceW * 1.) / w;
	var ratio2=(spaceH * 1.) / h;
	var ratio=(ratio1 > ratio2) ? ratio2 : ratio1;
	if (ratio > 1)
		ratio=1;
	return ratio;
}
function GetHeight(w, h, spaceW, spaceH)
{ULScUq:;
	if (w==0 || h==0)
		return spaceH;
	var result=h * GetScaleRatio(w, h, spaceW, spaceH);
	if (result < 1.0)
		return 1;
	else
		return result;
}
function GetWidth(w, h, spaceW, spaceH)
{ULScUq:;
	if (w==0 || h==0)
		return spaceH;
	var result=w * GetScaleRatio(w, h, spaceW, spaceH);
	if (result < 1.0)
		return 1;
	else
		return result;
}
function UIChangeList(id, fSelected)
{ULScUq:;
	if (id < 0 || items[id]==null)
		return;
	if (items[id].objType !=0)
		return;
	var chkBox=document.getElementById("cbx_"+id);
	if (chkBox !=null)
	{
		chkBox.checked=fSelected;
	}
	if ( !FBrowserIsWinBrowser5Up() )
		return;
	var row=document.getElementById("row"+id);
	if (row !=null)
	{
		if (fSelected==true)
			row.className="ms-imglibselectedrow";
		else
			row.className="";
	}
}
function MouseOverRow(id)
{ULScUq:;
	 if (fLimitedDisplay)
		return ;
	if (FILIsMenuShown()==1)
		return;
	if (timedItem !=id)
	{
		if (previewTimer >=0)   clearTimeout(previewTimer);
		previewTimer=setTimeout("HiLiteRow("+id+")", 200);
		timedItem=id;
	}
}
function MouseOutRow(id)
{ULScUq:;
	 if (fLimitedDisplay)
		return ;
	if (FILIsMenuShown()==1)
		return;
	if (previewTimer >=0 && timedItem==id)
	{
		clearTimeout(previewTimer);
		previewTimer=-1;
		timedItem=-1;
	}
}
function HiLiteRow(id)
{ULScUq:;
	if (!fSldlibDefaultView) return;
	if (fInit==false)
	{
		InitItems();
		fInit=true;
	}
	if (id < 0 || items[id]==null)
		return;
	 if (fLimitedDisplay)
		return ;
	if (tbImg)
	{
		tbImg.src=EncodedThumbnailImage(id);
		tbImg.width=GetWidth(items[id].imgWidth, items[id].imgHeight, 120, 90);
		tbImg.height=GetHeight(items[id].imgWidth, items[id].imgHeight, 120, 90);
	}
	if (tbTitle)
	{
		tbTitle.innerHTML=items[id].caption;
	}
	if ( !FBrowserIsWinBrowser5Up() )
		return;
	var row=document.getElementById("title"+id);
	if (row !=null)
	{
		if (hilitedRow==row)
			return;
		else if (hilitedRow !=null)
		{
			hilitedRow.children[1].style.visibility="hidden";
			hilitedRow.parentElement.parentElement.className="ms-unselectedtitle";
		}
		hilitedRow=row;
		row.children[1].className="ms-menuimagecell";
		row.children[1].style.visibility="visible";
		row.parentElement.parentElement.className="ms-selectedtitle";
	}
}
function ClickRow(id)
{ULScUq:;
	if (!fSldlibDefaultView) return;
	 if (fLimitedDisplay)
		return ;
	if (id < 0 || items[id]==null)
		return;
	if (browseris.ie)
		event.cancelBubble=true;
	HiLiteRow(id);
	ILShowMenu(id);
}
function ContextMenuOnRow(id)
{ULScUq:;
	if (!browseris.ie55up || !(browseris.win32 || browseris.win64bit))
		return true;
	if (event.srcElement.tagName=="A" )
		return true;
	ClickRow(id);
	return false;
}
function FILIsMenuShown()
{ULScUq:;
	if ( !FBrowserIsWinBrowser5Up() )
		return false;
	if (lastMenuId=="")
		return 0;
	var m=document.all(lastMenuId);
	if (m !=null)
	{
		var fIsOpen=false;
		try
		{
			fIsOpen=m.isOpen();
		}
		catch (e) {};
		if (!fIsOpen)
			lastMenuId="";
		return fIsOpen;
	}
	return 0;
}
function ILShowMenu(itemID)
{ULScUq:;
	if ( !FBrowserIsWinBrowser5Up() )
		return;
	if (!browseris.ie55up)
	{
		CallEditItem(itemID);
		return;
	}
	var menuId="plmenu_"+itemID;
	var m=document.getElementById(menuId);
	if (m==null)
	{
		m=CMenu(menuId);
	}
	else
	{
		m.innerHTML="";
	}
	currentItemID=itemID;
	currentItemFileUrl=items[itemID].originalUrl;
	currentItemFSObjType=items[itemID].objType;
	itemId=itemID;
	var menuTR=document.getElementById("title"+itemID);
	if (menuTR !=null)
	{
		currentItemCheckedOutUserId=menuTR.COUId;
		itemTable=menuTR.parentElement.parentElement;
		if (items[itemID].fUnknownImageType==false)
		{
			itemTable.IsImage="1";
		}
		else if (items[itemID].objType !=1)
		{
			itemTable.IsImage="";
		}
	}
	ctx.isWebEditorPreview=0;
	AddDocLibMenuItems(m, ctx);
	lastMenuId=menuId;
	if (menuTR !=null)
	{
		OMenu(m, menuTR.parentElement.parentElement);
	}
	else
	{
		OMenu(m, window.event.srcElement.parentElement);
	}
}
function AddSelectAllCheckbox()
{ULScUq:;
	var chkBox=document.images["diidHeaderImageSelectedFlag"];
	if (chkBox==null)
		return;
	var tdHeadChkBox=null;
	if (browseris.nav6up)
		tdHeadChkBox=chkBox.parentNode;
	else
		tdHeadChkBox=chkBox.parentElement;
	if (tdHeadChkBox==null || (tdHeadChkBox.tagName.toLowerCase() !="th") && (tdHeadChkBox.tagName.toLowerCase() !="td"))
		return;
	if (firstIdWithCheckbox==-1)
		tdHeadChkBox.innerHTML="";
	else
	{
		tdHeadChkBox.innerHTML="<a href='Javascript:ToggleSelectionAll()' onclick='ToggleSelectionAll();return false;'><img style='border:0' src='"+ctx.imagesPath+"unchecka.gif"+"' id=cbxSelectAll alt='"+Strings.LHPServer.L_SelectAll_Text+"'></a>";
		var chkBoxs=document.getElementsByName("selectionCheckBox");
		if (chkBoxs==null)
			return;
		for (i=0; i < chkBoxs.length; i++)
		{
			var chkBox=chkBoxs[i];
			if (chkBox !=null)
			{
				chkBox.disabled=false;
				chkBox.style.visibility="visible";
				if (browseris.ie)
				{
					chkBox.parentElement.width=30;
					chkBox.style.height=18;
				}
			}
		}
	}
}
function ClickThumbnail(id)
{ULScUq:;
	CallDisplayItem(id);
}
function UIChangeThumbnail(id, fSelected)
{ULScUq:;
	if (items[id]==null || items[id].objType !=0)
		return;
	var tbImg=document.images["tb_"+id];
	if (null==tbImg)
		return;
	var chkBox=document.getElementById("cbxTB_"+id);
	if (chkBox !=null)
	{
		chkBox.checked=fSelected;
	}
	if (fSelected)
	{
		tbImg.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.background="#99BBFF";
	}
	else
	{
		tbImg.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.background="";
	}
}
function CreateTile(id)
{ULScUq:;
	var cellSize=ThumbnailSize+10;
	var str="";
	if (!browseris.ie)
	{
		return;
	}
	else
	{
		str="<span class=thumbnail><TABLE><TR height="+(2+cellSize)+"><TD  width="+cellSize+" class=ms-imglibthumbnail align=center>";
		str+="<table border=0 cellspacing=2 cellpadding=0 class=ms-imglibthumbnail><tr height="+(ThumbnailSize+4)+"><td width="+(ThumbnailSize+4)+" align=center verticalAlign=middle>"
		str+="<a href='Javascript:ClickThumbnail("+id+")'><img class=thumbnail height="+GetHeight(items[id].imgWidth, items[id].imgHeight, ThumbnailSize, ThumbnailSize)+" id=tb_"+id+" src='"+items[id].thumbnail+"' style='border:0' alt='";
		if (items[id].objType !=0)
		{
			str+=Strings.LHPServer.L_FolderAlt_Text;
		}
		else
		{
			str+=Strings.LHPServer.L_SldAlt_Text;
		}
		str+="'></img></a>";
		str+="</TD></TR></TABLE>";
		str+="</TD></TR><TR height=0><TD valign=top nowrap";
		if (browseris.ie55up)
			str+=">";
		else
			str+=" dir="+listDirection+">";
		if (items[id].objType !=1)
			str+="<input type=checkbox title='"+Strings.LHPServer.L_SelectionCheckboxMSAATitle_Text+"' id=cbxTB_"+id+" onclick=ToggleSelection("+id+")>";
		else
			str+="&nbsp";
		str+="<span style='width:"+(ThumbnailSize - 20)+";font-size:80%;text-wrapping:nowrap;overflow:hidden;text-overflow:ellipsis'>"+items[id].caption+"</span>";
		str+="</TD></TR></TABLE></span>\n";
		document.write(str);
	}
}
function UIChange(item, fSelected)
{ULScUq:;
	if (browseris.ie && !fLimitedDisplay)
	{
		UIChangeThumbnail(item, fSelected);
	}
	UIChangeList(item, fSelected);
}
function GenerateFooterContent(viewStyle, fVisible)
{ULScUq:;
	if (viewStyle=="thumbnail")
	{
		if (browseris.ie)
		{
			var str="<TABLE id=contentthumbnail";
			if (!fVisible)
				str+=" style='display:none'";
			str+=" border=0 cellspacing=0 cellpadding=3 width='100%'><TR><TD"
			if (browseris.ie55up)
				str+=" dir="+listDirection+">";
			else
				str+=" dir=ltr>";
			document.write(str);
			for (j=0; j < ids.length; j++)
				CreateTile(ids[j]);
			document.write("</TD></TR></TABLE>");
		}
	}
}
function ViewHeaderScript(viewStyle)
{ULScUq:;
	currentViewStyle="list";
	InitViewUrls();
}
function ViewFooterScript()
{ULScUq:;
	InitItems();
	if ( !FBrowserIsWinBrowser5Up() )
	{
		if (firstId !=-1)
		{
			var scriptStr="HiLiteRow("+firstId+")";
			window.setTimeout(scriptStr, 200);
		}
		if (fSelectFieldAppeared)
		{
			if (!fLimitedDisplay)
				AddSelectAllCheckbox();
		}
		return;
	}
	fInit=true;
	if (!fLimitedDisplay)
	{
		listDirection=document.getElementById("selectionCacheMgr").parentElement.parentElement.parentElement.currentStyle.direction;
		if (listDirection !="rtl" && listDirection !="RTL")
			listDirection="ltr";
		if (currentViewStyle=="thumbnail")
		{
			GenerateFooterContent("thumbnail", true);
		}
		else
		{
			GenerateFooterContent("thumbnail", false);
		}
	}
	if (firstId !=-1)
	{
		HiLiteRow(firstId);
		if (fSelectFieldAppeared && !fLimitedDisplay)
				AddSelectAllCheckbox();
	}
}
function CItem(originalImageUrl, id, baseName, extension, titleStr, descriptionStr, objectType, fNewItem)
{ULScUq:;
	this.baseName=baseName;
	this.title=titleStr;
	this.originalUrl=originalImageUrl;
	this.id=id;
	this.fSelected=false;
	this.fNewItem=fNewItem;
	this.fHasThumbnail=true;
	this.description=descriptionStr;
	this.description=this.description.replace(/\r?\n/g, "<br>\n");
	this.objType=objectType;
	this.fUnknownImageType=true;
	this.caption=baseName;
	this.imgWidth=162;
	this.imgHeight=123;
	if (objectType==1)
	{
		if ("" !=extension)
			this.caption+="."+extension;
		this.thumbnail=ctx.imagesPath+"/fldrnew.gif";
		this.imgWidth=this.imgHeight=37;
		return;
	}
	if (originalImageUrl=="")
		return;
	var lastSlashIndex=originalImageUrl.lastIndexOf("/");
	if (lastSlashIndex <=0)
		return;
	var originalLocation=originalImageUrl.substring(0, lastSlashIndex+1);
	if (this.fHasThumbnail)
	{
		this.thumbnail=originalLocation+"_t/"+baseName+"_"+extension+".jpg";
		this.fUnknownImageType=false;
	}
	else
	{
		this.thumbnail=ctx.imagesPath+"/"+"ppt32.gif";
	}
}
function InsertItem(originalImageUrl, id, baseName, extension, titleStr, descriptionStr, objectType, fNewItem)
{ULScUq:;
	if (originalImageUrl=="")
		return;
	items[id]=new CItem(originalImageUrl, id, baseName, extension, titleStr, descriptionStr, objectType, fNewItem);
	if (firstId==-1)  firstId=id;
	ids[ids.length]=id;
}
function setSLCookie()
{ULScUq:;
	var SLUrlCookie;
	var now=new Date();
	var tomorrow=new Date(now.getTime()+1000 * 60 * 60 * 24 * 5);
	SLUrlCookie=vSldlibUrl+"SLBrowse";
	setCookie ('SlUrl', vSldlibUrl+"=", tomorrow, SLUrlCookie);
}
function setCookie(cookieName, cookieValue, expires, path, domain, secure)
   {ULScUq:;
	  var curCookie=escapeProperlyCore(cookieName)+'='+escapeProperlyCore(cookieValue,true)
+(expires ? '; EXPIRES='+expires.toGMTString() : '')
+(path ? '; PATH='+path : '')
+(domain ? '; DOMAIN='+domain : '')
+(secure ? '; SECURE' : '');
	  document.cookie=curCookie;
   }

