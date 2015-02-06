function ErrorCallOutFunction(divId, calloutTitle, appId, entryCode, isAppDetailsPage)
{
	if (typeof (CalloutManager) !=="object" || typeof (Callout) !=="function" || typeof (CalloutAction) !=="function")
				return;
	var launchdiv=document.getElementById(divId);
	var calloutId=divId+"_callout";
	var calloutContent=[];
	calloutContent.push("<div id='"+calloutId+"_outer' style='max-height: 500px; overflow: hidden;'><span id='");
	calloutContent.push(calloutId);
	calloutContent.push("'>");
	calloutContent.push(Strings.STS.L_Loading_Text);
	calloutContent.push("</span></div>");
	var callout=CalloutManager.createNew({
		launchPoint: launchdiv,
		openOptions : { closeCalloutOnBlur: true, event: "click" , showCloseButton: true },
		ID: calloutId,
		title: calloutTitle,
		content: calloutContent.join(''),
		contentWidth: 610,
		onOpenedCallback: function (calloutdel) { GetErrorDetails(calloutId,  appId, entryCode, isAppDetailsPage); }
		});
	callout.addAction(new CalloutAction({
		text: "",
		onClickCallback: function(){},
		isVisibleCallback: function(){return false; }
		}));
}
function CalloutCreateXMLHttpRequest() {
	try {
		return new XMLHttpRequest();
	} catch (e) {}
	return null;
}
var calloutXmlHttp=CalloutCreateXMLHttpRequest();
var currentcalloutdiv;
function CalloutHandleRSC()
{
	if(calloutXmlHttp.readyState==4)
	{
	if(calloutXmlHttp.status==200)
	{
		currentcalloutdiv.innerHTML=calloutXmlHttp.responseText;
	}
	else
	{
		alert(Strings.STS.L_AppMonDetails_AjaxFailed+calloutXmlHttp.statusText);
	}
	}
}
function GetErrorDetails(calloutId, appId, entryCode, isAppDetailsPage)
{
	currentcalloutdiv=document.getElementById(calloutId);
	var currentLCID;
	if(typeof _spPageContextInfo !="undefined" &&
	   typeof _spPageContextInfo.currentLanguage !="undefined")
	{
		currentLCID=_spPageContextInfo.currentLanguage;
	}
	else
	{
		currentLCID=1033;
	}
	try
	{
		var apperrordetailsurl="./appmonitoringerrordetails.ashx" ;
		if(isAppDetailsPage=="1") {
			apperrordetailsurl+="?appProductId=";
		} else {
			apperrordetailsurl+="?appInstanceId=" ;
		}
		apperrordetailsurl+=appId+"&entryCode="+entryCode+"&lcid="+currentLCID.toString();
		calloutXmlHttp.open("GET", apperrordetailsurl , true);
		calloutXmlHttp.onreadystatechange=CalloutHandleRSC;
		calloutXmlHttp.send(null);
	}
	catch(e)
	{
		alert(Strings.STS.L_AppMonDetails_AjaxFailed+e.toString());
	}
}
function OpenCentralAdminDialog(appId, entryCode, isAppDetailsPage, siteId, webId)
{
	if(typeof _spPageContextInfo !="undefined" &&
	   typeof _spPageContextInfo.currentLanguage !="undefined")
	{
		currentLCID=_spPageContextInfo.currentLanguage;
	}
	else
	{
		currentLCID=1033;
	}
	var apperrordetailsurl="./ca_appmonitoringerrordetails.aspx" ;
	if(isAppDetailsPage=="1") {
		apperrordetailsurl+="?appProductId="+appId ;
	} else {
		apperrordetailsurl+="?appInstanceId="+appId+"&SiteId="+siteId+"&WebId="+webId;
	}
	apperrordetailsurl+="&entryCode="+entryCode+"&lcid="+currentLCID.toString();
	OpenDialog(apperrordetailsurl, isAppDetailsPage, true, null);
}
function OpenTenantAdminDialog(appId, entryCode, isAppDetailsPage, siteId, webId)
{
	if(typeof _spPageContextInfo !="undefined" &&
	   typeof _spPageContextInfo.currentLanguage !="undefined")
	{
		currentLCID=_spPageContextInfo.currentLanguage;
	}
	else
	{
		currentLCID=1033;
	}
	var apperrordetailsurl="./ta_appmonitoringerrordetails.aspx" ;
	if(isAppDetailsPage=="1") {
		apperrordetailsurl+="?appProductId="+appId ;
	} else {
		apperrordetailsurl+="?appInstanceId="+appId+"&SiteId="+siteId+"&WebId="+webId ;
	}
	apperrordetailsurl+="&entryCode="+entryCode+"&lcid="+currentLCID.toString();
	OpenDialog(apperrordetailsurl, isAppDetailsPage, false, null);
}
function Change_Graphs(visibleId)
{
	var chart14DayLUdiv=document.getElementById("Chart14DayLU");
	var chart1YearLUdiv=document.getElementById("Chart1YearLU");
	var chart3YearLUdiv=document.getElementById("Chart3YearLU");
	var chart14DayBCSdiv=null;
	var chart1YearBCSdiv=null;
	var chart3YearBCSdiv=null;
	if(showbcs)
	{
		chart14DayBCSdiv=document.getElementById("Chart14DayBCS");
		chart1YearBCSdiv=document.getElementById("Chart1YearBCS");
		chart3YearBCSdiv=document.getElementById("Chart3YearBCS");
	}
	var link14Daydiv=document.getElementById("link14Day");
	var link1Yeardiv=document.getElementById("link1Year");
	var link3Yeardiv=document.getElementById("link3Year");
	if (visibleId=="14Day")
	{
		chart3YearLUdiv.style.display="none";
		chart1YearLUdiv.style.display="none";
		chart14DayLUdiv.style.display="block";
		if(showbcs)
		{
			chart3YearBCSdiv.style.display="none";
			chart1YearBCSdiv.style.display="none";
			chart14DayBCSdiv.style.display="block";
		}
		link3Yeardiv.setAttribute('href','#');
		link1Yeardiv.setAttribute('href','#');
		link14Daydiv.removeAttribute('href');
	}
	else if (visibleId=="1Year")
	{
		chart3YearLUdiv.style.display="none";
		chart1YearLUdiv.style.display="block";
		chart14DayLUdiv.style.display="none";
		if(showbcs)
		{
			chart3YearBCSdiv.style.display="none";
			chart1YearBCSdiv.style.display="block";
			chart14DayBCSdiv.style.display="none";
		}
		link3Yeardiv.setAttribute('href','#');
		link1Yeardiv.removeAttribute('href');
		link14Daydiv.setAttribute('href','#');
	}
	else
	{
		chart3YearLUdiv.style.display="block";
		chart1YearLUdiv.style.display="none";
		chart14DayLUdiv.style.display="none";
		if(showbcs)
		{
			chart3YearBCSdiv.style.display="block";
			chart1YearBCSdiv.style.display="none";
			chart14DayBCSdiv.style.display="none";
		}
		link3Yeardiv.removeAttribute('href');
		link1Yeardiv.setAttribute('href','#');
		link14Daydiv.setAttribute('href','#');
	}
	return false;
}
function OpenDialog(url, isAppDetailsPage, isCentralAdmin, callback)
{
	var width, height=430;
	if (isAppDetailsPage)
	{
		width=536;
	}
	else
	{
		width=570;
	}
	if (!isCentralAdmin)
	{
		height -=40;
		width+=50;
	}
	SP.SOD.executeFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', function () {
		var options=new SP.UI.DialogOptions();
		options.url=url;
		options.showClose=true;
		options.width=width;
		options.height=height;
		options.dialogReturnValueCallback=callback;
		SP.UI.ModalDialog.showModalDialog(options);
	});
}
function ShowAppSelectDialog()
{
	SP.SOD.executeFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', function () {
		var options=new SP.UI.DialogOptions();
		options.url=addUrl;
		options.showClose=true;
		options.autosize=true;
		options.dialogReturnValueCallback=Function.createDelegate(null, AppSelectDialogCallback);
		SP.UI.ModalDialog.showModalDialog(options);
	});
}
function AppSelectDialogCallback(result, retVal)
{
	if(result==SP.UI.DialogResult.OK)
		window.location=selfUrl;
}
function GetItemUrl(attr)
{
	var selectedItem=null;
	var f=document.forms[formId];
	var count=f.elements.length;
	for(var i=0; i < count; i++)
	{
		var e=f.elements[i];
		if(e.type=='checkbox' && e.name !='selectall')
		{
			if(e.checked)
			{
				selectedItem=e;
				break;
			}
		}
	}
	if(selectedItem !=null)
	{
		return e.getAttribute(attr);
	}
	return null;
}
function ShowDetails()
{
	var url=GetItemUrl("detailsUrl");
	if(url !=null) STSNavigate(url);
}
function ViewErrors()
{
	var url=GetItemUrl("errorsUrl");
	if(url !=null) OpenDialog(url, true, isCentralAdmin, null);
}
function DeleteSelectedApps()
{
	if(confirm(L_DeleteAppMessage))
	{
		var f=document.forms[formId];
		var selectedItems=[];
		var count=f.elements.length;
		for(var i=0; i < count; i++)
		{
			var e=f.elements[i];
			if(e.type=='checkbox' && e.name !='selectall')
			{
				if(e.checked)
					selectedItems.push(e.value);
			}
		}
		if(selectedItems.length > 0)
		{
			document.getElementById("selectedItems").value=selectedItems.join(',');
			document.getElementById("cmd").value="del";
		}
		f.submit();
	}
}
function AddEnabled()
{
	if (analyticsEnabled=="True")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function DeleteEnabled()
{
	return selectedItemCount > 0;
}
function DetailsEnabled()
{
	return selectedItemCount==1;
}
function SelectAll(chkd)
{
	var f=document.forms[formId];
	var count=f.elements.length;
	selectedItemCount=0;
	for (var i=0; i < count; i++)
	{
		var e=f.elements[i];
		if (e.type=='checkbox' && e.name !='selectall')
		{
			if(chkd)
			{
				e.checked=true;
				AddCssClassToElement(e.parentNode.parentNode, "s4-itm-selected");
				selectedItemCount++;
			}
			else
			{
				e.checked=false;
				RemoveCssClassFromElement(e.parentNode.parentNode, "s4-itm-selected");
			}
		}
	}
	if(typeof(addButton) !='undefined')
	{
		addButton.disabled=(selectedItemCount <=0);
	}
	RefreshRibbon();
}
function AppRowClick(row)
{
	var cbx=row.getElementsByTagName("input")[0];
	if (cbx !=null)
	{
		var selectRow=true;
		if (cbx.checked && selectedItemCount==1)
		{
			selectRow=false;
		}
		SelectAll(false);
		if (selectRow)
		{
			cbx.checked=true;
			SelectApp(null, cbx);
		}
	}
}
function SelectApp(evt, cbx)
{
	document.getElementById('idSelectAll').checked=false;
	if(cbx.checked)
	{
		selectedItemCount++;
		if(selectedItemCount==itemCount)
			document.getElementById("idSelectAll").checked=true;
		AddCssClassToElement(cbx.parentNode.parentNode, "s4-itm-selected");
	}
	else
	{
		selectedItemCount--;
		RemoveCssClassFromElement(cbx.parentNode.parentNode, "s4-itm-selected");
	}
	RefreshRibbon();
	if(evt !=null)
	{
		evt.cancelBubble=true;
		if(evt.stopPropagation) evt.stopPropagation();
	}
	if(typeof(addButton) !='undefined')
	{
		addButton.disabled=(selectedItemCount <=0);
	}
}
function RefreshRibbon()
{
	if(RefreshCommandUI)
		RefreshCommandUI();
}
function AddSelected()
{
	var f=document.forms[formId];
	var selectedItems=[];
	var selectedItemsSource=[];
	var selectedItemsName=[];
	var selectedItemsAssetId=[];
	var selectedItemsMarket=[];
	var count=f.elements.length;
	for(var i=0; i < count; i++)
	{
		var e=f.elements[i];
		if(e.type=='checkbox' && e.name !='selectall')
		{
			if(e.checked)
			{
				selectedItems.push(e.value);
				selectedItemsName.push(e.attributes["appName"].value);
				selectedItemsSource.push(e.attributes["appSourceType"].value);
				selectedItemsAssetId.push(e.attributes["appAssetId"].value);
				selectedItemsMarket.push(e.attributes["appMarket"].value);
			}
		}
	}
	if(selectedItems.length > 0)
	{
		document.getElementById("selectedItems").value=selectedItems.join(',');
		document.getElementById("selectedItemsSource").value=selectedItemsSource.join(',');
		document.getElementById("selectedItemsName").value=selectedItemsName.join(',');
		document.getElementById("selectedItemsAssetId").value=selectedItemsAssetId.join(',');
		document.getElementById("selectedItemsMarket").value=selectedItemsMarket.join(',');
		return true;
	}
	else
	{
		return false;
	}
}
function TruncateAppsLocation()
{
	var locElements=document.getElementsByName("appLocation");
	var totalErrorCount=locElements.length;
	for (var i=0; i < totalErrorCount; i++)
	{
		var truncatedString=displayTruncatedLocation(locElements[i], 40);
		locElements[i].innerHTML=truncatedString;
	}
}
function AddErrorStatus(msg)
{
	ExecuteOrDelayUntilScriptLoaded (function() {
		var statusId=SP.UI.Status.addStatus('', msg);
		SP.UI.Status.setStatusPriColor(statusId, 'red');
		},
		"SP.js");
}
function AddWarningStatus(msg)
{
	ExecuteOrDelayUntilScriptLoaded (function() {
		var statusId=SP.UI.Status.addStatus('', msg);
		SP.UI.Status.setStatusPriColor(statusId, 'yellow');
		},
		"SP.js");
}

