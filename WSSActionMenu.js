
var xmlhttps = new Array();
var tableIds= new Array();
var handleStatus = new Array();

function HandleStateChange()
{
    for (var i=0;i<xmlhttps.length;i++)
    {
        if (!handleStatus[i])
        {
           var xmlhttp = xmlhttps[i];
           var tableId = tableIds[i];
           if (xmlhttp.readyState == 4)
            {
                var buttonDiv = document.getElementById(tableId);
                buttonDiv = GetParentNode(buttonDiv,'div');
                var menuDiv = buttonDiv.nextSibling;
                var xmldom;
                if (window.ActiveXObject)
                {
                    ProcessXmlHttpResponseIE(buttonDiv,menuDiv,xmlhttp);
                }
                else
                {
                    ProcessXmlHttpResponseNonIE(buttonDiv,menuDiv,xmlhttp);
                }               
                
                handleStatus[i]=true;
            }
        }
    }
    
}

function selectSingleNodeNonIE(doc,tag)
{
    var children = doc.getElementsByTagName(tag);
	return children[0];
}

function OpenMenu(menuId,aId)
{

    MMU_Open(document.getElementById(menuId),document.getElementById(aId),null,false,null);
}

function ProcessXmlHttpResponseIE(buttonDiv,menuDiv,xmlhttp)
{
    var xmldom = new ActiveXObject("Microsoft.XMLDOM");                 
    xmldom.async = false;
    xmldom.load(xmlhttp.responseBody);

    // hide the old menu before changing its parent - otherwise we won't be able to find the old menu's
    // parent and fail to show the new menu.
    MenuHtc_hide();

    buttonDiv.innerHTML = xmldom.selectSingleNode( "//root/menubutton/menubuttonmarkup" ).firstChild.nodeValue;
    menuDiv.innerHTML = xmldom.selectSingleNode( "//root/menu/menumarkup" ).firstChild.nodeValue;

    var menuId= FindTagId(menuDiv,'menu');
    var aId = FindTagId(buttonDiv,'a');   

    OpenMenu(menuId,aId);               
}

function ProcessXmlHttpResponseNonIE(buttonDiv,menuDiv,xmlhttp)
{
    var parser = new DOMParser();
    var xmldom = parser.parseFromString(xmlhttp.responseText, "text/xml");

    // hide the old menu before changing its parent - otherwise we won't be able to find the old menu's
    // parent and fail to show the new menu.
    MenuHtc_hide();

    buttonDiv.innerHTML = selectSingleNodeNonIE(xmldom, "menubuttonmarkup" ).firstChild.nodeValue;
    menuDiv.innerHTML = selectSingleNodeNonIE( xmldom,"menumarkup" ).firstChild.nodeValue;

    var menuId= FindTagId(menuDiv,'menu');
    var aId = FindTagId(buttonDiv,'a');   

    OpenMenu(menuId,aId);
}

function FindTagId(parent,tagName)
{
    var children = parent.getElementsByTagName(tagName);
    for (var i=0;i<children.length;i++)
    {
	var id = children[i].getAttribute('id');
        if ((id != null)&&(id != ''))
        {
	   return id;
        }
    }
    return null;
}

function showActionMenuInExternalList(loadingMsg, menuText, showMenuImage, parentAppName, parentEntityNamespace, parentEntityName, parentSpecificFinderName, parentAssociationName, appName, entityNamespace, entityName, itemID, event)
{
    displayActionMenu(loadingMsg, menuText, showMenuImage, parentAppName, parentEntityNamespace, parentEntityName, parentSpecificFinderName, parentAssociationName, appName, entityNamespace, entityName, itemID, event);
}

function showActionMenu(loadingMsg,menuText,showMenuImage,appName, entityNamespace, entityName, itemID, event)
{
    displayActionMenu(loadingMsg,menuText,showMenuImage, null, null, null, null, null, appName, entityNamespace, entityName, itemID, event);
}

function displayActionMenu(loadingMsg, menuText, showMenuImage, parentAppName, parentEntityNamespace, parentEntityName, parentSpecificFinderName, parentAssociationName, appName, entityNamespace, entityName, itemID, event)
{
    if (!event) event = window.event;
    var prefix = 'prefix_'+xmlhttps.length;
    var tableId = prefix+'_t';
    tableIds[tableIds.length]=tableId;
    var menuId = 'menu_'+prefix;
    var aId = prefix;
    var imageId = prefix+'_ti';
    var menuItemId='menuitem_'+prefix;
    var placeHolderButtonHtml = '';
    var effectiveMenuText = '';
    if (menuText != null)
    {
		effectiveMenuText = menuText;
    }
    if ((menuText != null)&&(menuText != ''))
    {
	placeHolderButtonHtml = 
'<table '+
	'height="100%" '+ 
	'cellspacing="0" '+
	'class="ms-unselectedtitle" '+ 
	'id="'+tableId+'" '+ 
	'foa="'+aId+'" '+ 
	'onmouseover="MMU_EcbTableMouseOverOut(this, true)" '+
	'hoverActive="ms-selectedtitle" '+
	'hoverInactive="ms-unselectedtitle" '+ 
	'onclick="try { MMU_Open(byid(\''+menuId+'\'), MMU_GetMenuFromClientId(\''+aId+'\'),event,false, null, 0); } catch (ex) { alert(\'An unhandled exception occurred: \' + ex); }" '+
	'oncontextmenu="this.click(); return false;" '+
	'menuformat="ArrowOnHover" '+
	'downArrowTitle="Open Menu">'+
	'<tr>'+
		'<td class="ms-vb">'+
			'<a id="'+aId+'" '+			
			'onclick="event.cancelBubble=true" '+ 
			'onfocus="MMU_EcbLinkOnFocusBlur(byid(\''+menuId+'\'),this,true);" '+
			'onkeydown="return MMU_EcbLinkOnKeyDown(byid(\''+menuId+'\'),this,event);" '+
			'tabindex="0" ' +
			'menuTokenValues="MENUCLIENTID='+aId+',TEMPLATECLIENTID='+menuId+'"> ';
				if (showMenuImage)
				{
					placeHolderButtonHtml = placeHolderButtonHtml +'<img border="0" align="absmiddle" src="/_layouts/images/bizdataactionicon.gif" alt=""> ';
				}
				placeHolderButtonHtml = placeHolderButtonHtml +effectiveMenuText +
				'<img src="/_layouts/images/blank.gif" border="0" alt=""/> '+
			'</a> '+
		'</td> '+
		'<td class="ms-menuimagecell" style="visibility:hidden" id="'+imageId+'"> '+
			'<img src="/_layouts/images/downarrw.gif" width="13" alt=""/> '+
		'</td> '+
	'</tr> '+
'</table> ';
    }
    else
    {
        placeHolderButtonHtml = 
'<span id="'+tableId+'" class="ms-SPLink ms-HoverCellInactive" onmouseover="this.className=\'ms-SPLink ms-HoverCellActive\'" onmouseout="this.className=\'ms-SPLink ms-HoverCellInactive\'" onclick=" MMU_Open(document.getElementById(\''+menuId+'\'), document.getElementById(\''+aId+'\'))"><a id="'+aId+'" accesskey="" style="cursor:hand;white-space:nowrap;" onkeydown="MMU_EcbLinkOnKeyDown(document.getElementById(\''+menuId+'\'), this);" onclick=" MMU_Open(document.getElementById(\''+menuId+'\'), this, event);" tabindex="0" menuTokenValues="TEMPLATECLIENTID='+menuId+',MENUCLIENTID='+tableId+'"> ';
	if (showMenuImage)
	{
		placeHolderButtonHtml = placeHolderButtonHtml+'<img border="0" align="absmiddle" src="/_layouts/images/bizdataactionicon.gif" alt="">';
        }
	 placeHolderButtonHtml =  placeHolderButtonHtml+effectiveMenuText +
	'</a> '+
        '<img src="/_layouts/images/menudark.gif" alt="" />'+
'</span>';
    }
    var placeHolderMenuHtml = '<span style="display: none"><menu class=ms-SrvMenuUI id="'+menuId+'"><ie:menuitem id="'+menuItemId+'" type="option">'+loadingMsg+'</ie:menuitem></menu></span>';
    var targetEl = event.srcElement?event.srcElement:event.target;
    var buttonDiv =GetParentNode(targetEl,'div');
    var menuDiv = buttonDiv.nextSibling;
    buttonDiv.innerHTML =placeHolderButtonHtml;
    menuDiv.innerHTML =  placeHolderMenuHtml;
    OpenMenu(menuId,aId);
    var url = '';
    var proxyPageUrlObj = document.getElementById('BDC_ActionsMenuProxyPageWebUrl');
    if (proxyPageUrlObj != null)
    {
        url += proxyPageUrlObj.value;
    }
    url += "/_layouts/WSSProxy.aspx?Application="+encodeURIComponent(appName);
    
    if ((null != parentAppName) &&
        (null != parentEntityNamespace) &&
        (null != parentEntityName) &&
        (null != parentSpecificFinderName) &&
        (null != parentAssociationName))
    {
        url += "&ParentApplication="+encodeURIComponent(parentAppName);
        url += "&ParentEntityNamespace="+encodeURIComponent(parentEntityNamespace);
        url += "&ParentEntityName="+encodeURIComponent(parentEntityName);
        url += "&ParentSpecificFinderName="+encodeURIComponent(parentSpecificFinderName);
        url += "&ParentAssociationName="+encodeURIComponent(parentAssociationName);
    } 
    
    url += "&EntityNamespace="+encodeURIComponent(entityNamespace);
    url += "&EntityName="+encodeURIComponent(entityName);
    url += "&ItemID="+encodeURIComponent(itemID);
    if (menuText != null)
    {
		url+= "&MenuText="+encodeURIComponent(menuText);
    }
    if (showMenuImage)
    {
		url+= "&ShowMenuImage=true";
    }
    
    if (window.XMLHttpRequest)
    {
        DoXmlHttpNonIE(url); 
    }
    else
    {
        DoXmlHttpIE(url); 
    }   
}

function GetParentNode(el,tag)
{
    var parent = (el.parentNode)?el.parentNode:el.parentElement;
    while (parent != null)
    {

	if (parent.tagName.toLowerCase() == tag)
	{
	   return parent;
	}
	parent = (parent.parentNode)?parent.parentNode:parent.parentElement;
    }
    return null;
}

function DoXmlHttpIE(url)
{
    var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange=HandleStateChange;
    xmlhttps[xmlhttps.length]=xmlhttp;
    handleStatus[handleStatus.length]=false;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
}

function DoXmlHttpNonIE(url)
{
    var xmlhttp = new XMLHttpRequest() ;
    xmlhttp.onreadystatechange=HandleStateChange;
    xmlhttps[xmlhttps.length]=xmlhttp;
    handleStatus[handleStatus.length]=false;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null); 
}

function actionMenuOnKeyDownInExternalList(loadingMsg, menuText, showMenuImage, parentAppName, parentEntityNamespace, parentEntityName, parentSpecificFinderName, parentAssociationName, appName, entityNamespace, entityName, itemID, event)
{
    if (!event) event = window.event;
    if ((event.shiftKey && (GetKeyCode(event)==13)) || ((event.altKey) && (GetKeyCode(event)==40)))
    {
        displayActionMenu(loadingMsg, menuText, showMenuImage, parentAppName, parentEntityNamespace, parentEntityName, parentSpecificFinderName, parentAssociationName, appName, entityNamespace, entityName, itemID, event);
    }
}

function actionMenuOnKeyDown(loadingMsg,menuText,showMenuImage,appName, entityNamespace, entityName, itemID, event)
{
    if (!event) event = window.event;
    if ((event.shiftKey && (GetKeyCode(event)==13)) || ((event.altKey) && (GetKeyCode(event)==40)))
    {
        displayActionMenu(loadingMsg,menuText,showMenuImage, null, null, null, null, null, appName, entityNamespace, entityName, itemID, event);
    }   
}

function GetKeyCode(e)
{
    return e.keyCode?e.keyCode:e.which;
}