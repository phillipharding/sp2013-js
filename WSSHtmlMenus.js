/*------------------------------------------------------------------------------
	%%Owner: JoelFill
	%%Id: e749553e-a3af-486d-b96d-bcd65dd3a4ac
------------------------------------------------------------------------------*/
// JScript source code

// Global variables used by this script.
var sOpenMenuID   = "";   // Currently open menu...
var sMenuButtonID = "";   // Menu button that opened the menu.
var strEcbSelectedClass   = "ms-selectedtitle";
var strEcbUnselectedClass = "ms-unselectedtitle";
var strMenuItemTableCell  = "ms-MenuUIItemTableCell";
var strMenuItemTableCellH = "ms-MenuUIItemTableCellHover";
var strMenuItemTable      = "ms-MenuUIItemTable";
var strMenuItemTableH     = "ms-MenuUIItemTableHover";
var strMenuUIIcon              = "ms-MenuUIIcon";
var strMenuUISeparator         = "ms-MenuUISeparator";
var strMenuUiLabelWithFont     = "ms-MenuUILabel ms-MenuUILabelFont";
var strMenuUIIconRtl           = "ms-MenuUIIconRtL";
var strMenuUISeparatorRtl      = "ms-MenuUISeparatorRtL";
var strMenuUiLabelWithFontRtl  = "ms-MenuUILabelRtL ms-MenuUILabelFont";

function getTextContent(el)
{
  return browseris.ie ? el.innerText : el.textContent;
}

function setTextContent(el,text)
{
  if(browseris.ie) el.innerText = text;
  else el.textContent = text;
}

/*------------------------------------------------------------------------------
	%%Id: 9f4946b8-cc4c-443c-bbd0-e847b8d95486
------------------------------------------------------------------------------*/
function fixupParmString(strParm)
{

    var strTmp = strParm.replace(/\\/g, "\\\\");
    return strTmp.replace(/\'/g, "\\\'");
}

/*------------------------------------------------------------------------------
	%%Id: 9588d827-2a8c-49e1-bfa4-c7422f50586f
------------------------------------------------------------------------------*/
function fixupUrlParm(strParm)
{
    // Look for and replace all single quotes with escaped single quotes.
    // I would use string.replace here except that it only appears to
    // replace the first match it sees.
    var tmpParm = strParm;
    var outParm = "";

    var nIndex = tmpParm.indexOf("%252B");
    while (-1 != nIndex)
    {
        outParm = outParm + tmpParm.substring(0,nIndex) + "%2b";
        tmpParm = tmpParm.substr(nIndex+5);
        nIndex = tmpParm.indexOf("%252B");
    }
    if (tmpParm != "")
        outParm = outParm + tmpParm;

    tmpParm = outParm;
    outParm = "";

    nIndex = tmpParm.indexOf("\/");
    while (-1 != nIndex)
    {
        outParm = outParm + tmpParm.substring(0,nIndex) + "%2f";
        tmpParm = tmpParm.substr(nIndex+1);
        nIndex = tmpParm.indexOf("\/");
    }
    if (tmpParm != "")
        outParm = outParm + tmpParm;
    return outParm;
}

/*------------------------------------------------------------------------------
	%%Id: 776b65a7-548e-4376-aa1f-61d35e24da3c
------------------------------------------------------------------------------*/
function mnuCustomizeItem(objMenuItem, targetURL, dicParms, rgDisables)
{
    objMenuItem.href = "";
    var strParms     = "";  // "parms" attribute value.
    var strTargetURL = "";  // "targetURL" attribute value.
    var strScript    = "";  // "scriptFunc" attribute value.
    var strScriptFuncReplaceMode = ""; // "scriptFuncReplaceMode" attribute value.
    var fFuncMode    = false;
    var fFuncModeParamReplace = false;
    var strHref;

    strParms     = objMenuItem.getAttribute("parms");
    strTargetURL = objMenuItem.getAttribute("targetURL");
    strScript    = objMenuItem.getAttribute("scriptFunc");
    strScriptFuncReplaceMode = objMenuItem.getAttribute("scriptFuncReplaceMode");

    if (null != strScript && strScript != "")
    {
        fFuncMode = true;
        if (strScriptFuncReplaceMode != null)
        {
            fFuncModeParamReplace = true;
        }
        if (fFuncModeParamReplace)
        {
            strHref = "javascript:" + strScript;
        }
        else
        {
            strHref="javascript:" + strScript + "(";
        }
    } else if (null == strTargetURL || strTargetURL == "")
        strHref = targetURL;
    else
        strHref = strTargetURL;

    // Split the parameters string into an array
    if (null != strParms)
    {
        var rgParms = strParms.split(",");
        var nParm;
        // Process each parameter for the anchor element...
        for (nParm = 0; nParm < rgParms.length; nParm++)
        {
            var nArg;
            // Look up the corresponding dictionary entry
            for (nArg = 0; nArg < dicParms[0].length; nArg++)
            {
                if (rgParms[nParm] == dicParms[0][nArg])
                {
                    if (fFuncMode)
                    {
                        var strParm = fixupParmString(dicParms[1][nArg]);
                        if (fFuncModeParamReplace)
                        {
                            strHref = strHref.replace(rgParms[nParm], strParm.replace(/%/g, "%25"));
                        }
                        else
                        {
                            // Concatenate the parameters in function call format.
                            if (nParm != 0)
                                strHref += ",";

                            strHref += "'";
                            strHref += strParm;
                            strHref += "'";
                        }
                    }
                    else
                    {
                        // Concatenate the parameters in URL query string format.
                        if (nParm == 0)
                            strHref += "?"; // First parameter
                        else
                            strHref += "&"  // Subsequent parameters.

                        strHref += rgParms[nParm];
                        strHref += "=";

                        var strParm = escape(dicParms[1][nArg]);

                        strHref += fixupUrlParm(strParm);
                    }
                    break;  // Done with this parameter.
                }
            }
        }
    }
    if (fFuncMode && !fFuncModeParamReplace)
    {
        strHref += ")";
    }

    if(browseris.ie55up)
    {
        // Set the anchor's HREF property to make a valid hyperlink.
        objMenuItem.href = strHref;
        if (IsAccessibilityFeatureEnabled())
        {
            objMenuItem.onclick = strHref;  
        }
    }
    else
    {
        if(fFuncMode)
        {
            var func = strHref.substring(11);
            if (IsAccessibilityFeatureEnabled())
                objMenuItem.onclick = func;
            else
                objMenuItem.onclick = eval("function() { eval(" + func + "); }");
        }
        else
        {
            if (IsAccessibilityFeatureEnabled())
                objMenuItem.onclick = strHref;
            else
                objMenuItem.onclick = eval("function() { window.location = " + strHref + "; }");
        }
    }

    mnuEnableRow(objMenuItem, true);

    if (null != rgDisables)
    {
        for (nItem = 0; nItem < rgDisables.length; nItem++)
        {
            if (rgDisables[nItem] == objMenuItem.id)
            {
                mnuEnableRow(objMenuItem, false);
            }
        }
    }
    objMenuItem.onfocus = mnuItemSelect;
    objMenuItem.onblur  = mnuItemDeselect;
    objMenuItem.hideFocus = true;
    objMenuItem.onkeydown = mnuItemKeydown;
}

/*------------------------------------------------------------------------------
	%%Id: 69d91ee0-f39b-4dea-bb87-ddc7827abeae
------------------------------------------------------------------------------*/
function mnuEnableRow(oElement, fEnable)
{
    var oRow = mnuGetMenuRowFromElement(oElement);
    
    if(browseris.ie55up)
    {
        for (var index=0; index < oRow.children.length; index++)
            oRow.children(index).disabled = !fEnable;
    }
    else
    {
        var all = GetAllSubElements(oRow);
        for (var index=0; index < all.length; index++)
            all[index].disabled = !fEnable;
    }
    
    oRow.disabled = !fEnable;
}

/*------------------------------------------------------------------------------
	%%Id: a2b77dcd-e16b-4850-a35f-d33f93bdf09b
------------------------------------------------------------------------------*/
function itmToRtl(oRow)
{
    var colItemCells = oRow.getElementsByTagName("TD");
    for (var nCell = 0; nCell < colItemCells.length; nCell++)
    {
        var oCell = colItemCells[nCell];
        if (oCell.className == strMenuUIIcon)
            oCell.className = strMenuUIIconRtl;
        else if (oCell.className == strMenuUISeparator)
            oCell.className = strMenuUISeparatorRtl;
        else if (oCell.className == strMenuUiLabelWithFont)
            oCell.className = strMenuUiLabelWithFontRtl;
    }
}

/*------------------------------------------------------------------------------
	%%Id: 16de2757-5178-41c4-955b-bbc5a1715856
------------------------------------------------------------------------------*/
function itmToLtr(oRow)
{
    var colItemCells = oRow.getElementsByTagName("TD");
    for (var nCell = 0; nCell < colItemCells.length; nCell++)
    {
        var oCell = colItemCells[nCell];
        if (oCell.className == strMenuUIIconRtl)
            oCell.className = strMenuUIIcon;
        else if (oCell.className == strMenuUISeparatorRtl)
            oCell.className = strMenuUISeparator;
        else if (oCell.className == strMenuUiLabelWithFontRtl)
            oCell.className = strMenuUiLabelWithFont;
    }
}

/*------------------------------------------------------------------------------
	%%Id: f96325f0-be9a-43c3-a0ef-9701ce6ba6ca
------------------------------------------------------------------------------*/
function mnuCustomizeItems(objMenu, targetURL, dicParms, rgDisables)
{
    var theDir = mnuGetDirection();
    if (theDir != document.dir)
    {
        var colMenuRows = objMenu.getElementsByTagName("TABLE");
        var nRow;
        // Need to swap styles in menu items...
        if (theDir == "rtl")
        {
            for (nRow = 0; nRow < colMenuRows.length; nRow++)
                itmToRtl(colMenuRows[nRow]);
        }
        else
        {
            for (nRow = 0; nRow < colMenuRows.length; nRow++)
                itmToRtl(colMenuRows[nRow]);
        }
    }

    var fFocus = false;
    var colMenuItems = objMenu.getElementsByTagName("A");
    var nItem;
    for (nItem = 0; nItem < colMenuItems.length; nItem++)
    {
        mnuCustomizeItem(colMenuItems[nItem], targetURL, dicParms, rgDisables);

        // Set the focus to the first enabled menu item.
        if (!fFocus && !colMenuItems[nItem].isDisabled)
        {
            colMenuItems[nItem].focus();
            fFocus = true;
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 9c381962-5d6d-4dfb-a801-815464b95b7e
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuClose(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    if (document.getElementById(sOpenMenuID) && "object" == typeof(document.getElementById(sOpenMenuID)))
    {
        var objMenu = document.getElementById(sOpenMenuID);
        sOpenMenuID = "";
        objMenu.style.display = "none"; // Hide the menu.
        if (browseris.ie55up) // and hide the iFrame.
            document.all("__hifMenu").style.display = "none";
        if(objMenu.releaseCapture)
        {
            objMenu.releaseCapture();
        }
        document.oncontextmenu = null;
        if (document.getElementById(sMenuButtonID) && "object" == typeof(document.getElementById(sMenuButtonID)))
        {
            document.getElementById(sMenuButtonID).focus();
            sMenuButtonID = "";
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: e8b633b3-fd7f-47a0-8aee-fa718e9b0bc9
------------------------------------------------------------------------------*/
function mnuGetEcbContainer(objEcb)
{
    if (null == objEcb)
        return null;
    var objParent = objEcb.parentNode;
    while (objParent != null && "TD" != objParent.tagName)
    {
        objParent = objParent.parentNode;
    }
    return objParent;
}

//
// This is a hack to work around a bug in IE in high-contrast
// mode. Basically, the menu comes up transparent. Our hack is
// to put an empty IFRAME behind the menu that has the same
// size and shape as the menu. This will make the menu appear
// opaque.
//
/*------------------------------------------------------------------------------
	%%Owner: JoelFill
	%%Id: 81f116f8-fdbc-4c36-af68-97d43147cf83
------------------------------------------------------------------------------*/
function mnuInsureBackingIFrame(objMenu)
{
    var oFrame = null;
    if ((null != document.frames) && (document.frames.length > 0))
    {
        var ifmContainer = document.getElementById("__hifMenu");
        if (ifmContainer != null)
            oFrame = document.frames("__hifMenu");
    }
    if (null == oFrame)
    {
        {
             var oBody = objMenu.parentNode;
             while (oBody != null && "BODY" != oBody.tagName)
             {
                 oBody = oBody.parentNode;
             }

             oBody.insertAdjacentHTML("afterBegin",
                 "<iframe id=\"__hifMenu\" scrolling=no " +
                 "src=\"/_layouts/images/blank.gif\" " +
                 "style=\"display:none;position:absolute;\"></iframe>");
             oFrame = document.frames("__hifMenu");
             var oDoc = oFrame.document;
             oDoc.open("text/html", "replace");
             oDoc.write("");
             oDoc.close();
        }
    }
    return oFrame;
}

/*------------------------------------------------------------------------------
	%%Id: a2317c64-16d5-4593-b7e0-f2056b3b1863
------------------------------------------------------------------------------*/
function mnuDisplay(objMenu, x, y)
{
    if (objMenu != null)
    {       
        objMenu.style.position = "absolute";
        objMenu.style.left = x.toString() + "px";
        objMenu.style.top = y.toString() + "px";
        objMenu.style.display = "block";

        //
        // This is a hack to work around a bug in IE in high-contrast
        // mode. Basically, the menu comes up transparent. Our hack is
        // to put an empty IFRAME behind the menu that has the same
        // size and shape as the menu. This will make the menu appear
        // opaque.
        //
        if (browseris.ie55up)
        {
            mnuInsureBackingIFrame(objMenu);
            objMenu.style.display = "none"; // Hide menu while showing IFrame.
            document.all("__hifMenu").style.left = x.toString();
            document.all("__hifMenu").style.top = y.toString();
            document.all("__hifMenu").style.width = objMenu.offsetWidth;
            document.all("__hifMenu").style.height = objMenu.offsetHeight;
            document.all("__hifMenu").style.display = "block";
            objMenu.style.display = "block"; // Re-show menu in front of IFrame.
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: d52023b4-4ac4-4063-bc3f-bbcbffe3bb34
------------------------------------------------------------------------------*/
function mnuPreDisplay(objMenu, x, y, cx, cy)
{
    if (objMenu != null)
    {
        // We need to put the menu on the screen to get it to flow the way it
        // wants to. Then we need to reposition it so it is as visible as possible.
        var sx = x - objMenu.clientWidth;
        var sy = y;
        if (cx < sx + objMenu.clientWidth)
        {
            sx = cx - objMenu.clientWidth;
            if (sx < 0)
                sx = 0;
        }
        if (cy < sy + objMenu.clientHeight)
        {
            sy = cy - objMenu.clientHeight;
            if (sy < 0)
                sy = 0;
        }

        mnuDisplay(objMenu, sx, sy);
    }
}

/*------------------------------------------------------------------------------
	%%Id: 379cdc57-3975-401d-8240-b1e2b36cce2a
------------------------------------------------------------------------------*/
function mnuGetDirection()
{
    var objToTest = mnuGetInvokingMenuButton();
    while (null != objToTest)
    {
        if(objToTest.style && objToTest.style["direction"])
        {
            var strDir = objToTest.style.direction.toLowerCase();
            if (strDir == "rtl" || strDir == "ltr")
            {
                return strDir;
            }
        }
        objToTest = objToTest.parentNode;
    }
    return document.dir;
}

/*------------------------------------------------------------------------------
	%%Id: cb1dba81-3046-4093-84e1-5d9b07e186cc
------------------------------------------------------------------------------*/
function mnuPosition(idMenu, idMenuButton)
{
    var objMenuContext   = document.getElementById(idMenuButton);
    var objMenuContainer = mnuGetEcbContainer(objMenuContext);
    var theDir           = mnuGetDirection();
    var objBody          = document.getElementsByTagName("BODY")[0];

    if (document.getElementById(idMenu) && "object" == typeof(document.getElementById(idMenu)))
    {
        var objMenu = document.getElementById(idMenu);
        var x = 0;  // If we can't position it, default to upper left corner.
        var y = 0;
        var cx = 0;
        var cy = 0;
        var cyContext = 0;
     
        if (objMenuContext == null)
            objMenuContext = mnuGetInvokingMenuButton();
        if (objMenuContext != null)
        {
            // First determine the initial screen position of the menu.
            if (theDir == "rtl")
            {
                x = objMenuContext.offsetLeft;
            }
            else
            {
                if (objMenuContainer != null &&
                    objMenuContext.clientWidth > objMenuContainer.clientWidth)
                {
                    x = objMenuContext.offsetLeft + objMenuContainer.clientWidth;
                }
                else
                {
                    x = objMenuContext.offsetLeft + objMenuContext.offsetWidth;
                }
            }
           
            y = objMenuContext.offsetTop + objMenuContext.offsetHeight
        
            var objParent = objMenuContext.offsetParent;
            while ("BODY" != objParent.tagName)
            {
                // Ignore the parent's scroll offset if the style is "auto".
                if (objParent.style.overflow.toLowerCase() == "auto")
                {
                    x = x + objParent.offsetLeft;
                    y = y + objParent.offsetTop;
                }
                else
                {
                    x = x + objParent.offsetLeft - objParent.scrollLeft;
                    y = y + objParent.offsetTop - objParent.scrollTop;
                }
                objParent = objParent.offsetParent;
            }
            // When we fall out of this loop, objParent should be the object with the
            // "BODY" tag. We can use that to determine if the menu will fit in the
            // window's client area, and move it if it doesn't.
            cx = objParent.offsetWidth + objParent.scrollLeft;
            cy = objParent.offsetHeight + objParent.scrollTop;

            mnuPreDisplay(objMenu, x, y, cx, cy);
            
            cyContext = objMenuContext.offsetHeight;
        }
        else
        {
            // Try to get the mouse position. It may be over a different control...
            x = window.event.clientX + window.event.offsetX;
            y = window.event.clientY + window.event.offsetY;

            if (objBody != null)
            {
                cx = objBody.offsetWidth + objBody.scrollLeft;
                cy = objBody.offsetHeight + objBody.scrollTop;

                mnuPreDisplay(objMenu, x, y, cx, cy);
                if (window.event.srcElement != null)
                    cyContext = window.event.srcElement.offsetHeight;
                else
                    cyContext = 0;
            }
        }
        
        if (theDir != "rtl")
        {
            if (cx < objMenu.offsetWidth)
            {
                x = 0;
            }
            else
            {
                x = x - objMenu.offsetWidth;
            }
        }
        if (cy < y + objMenu.offsetHeight)
        {
            y = cy - objMenu.offsetHeight - cyContext;
        }

        if (theDir != "rtl")
            if (x < 0) x = 0;
        if (y < 0) y = 0;

        if (objBody != null)
        {
            if (x + objMenu.offsetWidth > objBody.clientWidth + objBody.scrollLeft)
                x = objBody.clientWidth + objBody.scrollLeft - objMenu.offsetWidth;
        }

        mnuDisplay(objMenu, x, y);        
    }
}

/*------------------------------------------------------------------------------
	%%Id: dd42745a-f369-4d3a-b3f7-2d8b43c7b1be
------------------------------------------------------------------------------*/
function mnuIsEcb(objSource)
{
    if (objSource.tagName != "TABLE")
        return false;
    if (objSource.className == null)
        return false;
    if (objSource.className == strEcbSelectedClass)
        return true;
    if (objSource.className == strEcbUnselectedClass)
        return true;
    return false;
}
        
/*------------------------------------------------------------------------------
	%%Id: a6de57bd-d254-45c4-bee8-f62b4ef63ec6
------------------------------------------------------------------------------*/
function mnuGetInvokingMenuButton()
{
    var objSource = window.event.srcElement; // Get the element that fired the event.
    while (objSource != null && !mnuIsEcb(objSource))
    {
        objSource = objSource.parentNode;
    }
    return objSource;
}

var gLastMenuWindow = null;
/*------------------------------------------------------------------------------
	%%Owner: MarkZell
	%%Id: 82f9591c-1ba0-481b-8b5c-c73602e02b0b
------------------------------------------------------------------------------*/
function ExecuteOnAccessibleMenuClick(fnOnClick)
{
    if (gLastMenuWindow == null)
        return;

    gLastMenuWindow.close();
    gLastMenuWindow = null;
    window.focus();
    ExecuteOnClick(fnOnClick);
}

/*------------------------------------------------------------------------------
	%%Owner: MarkZell
	%%Id: 7aab7cfc-0d17-4c76-98d7-f3ae846bcfc5
------------------------------------------------------------------------------*/
function mnuGetAccessibleMenuText(objMenu, targetURL, dicParms, rgDisables)
{
    var colMenuItems = objMenu.getElementsByTagName("A");
    var nItem;
    var strHtml = "";    
    for (nItem = 0; nItem < colMenuItems.length; nItem++)
    {
        var objMenuItem = colMenuItems[nItem];
        mnuCustomizeItem(objMenuItem, targetURL, dicParms, rgDisables);


        var strOnMenuClick = objMenuItem.onclick;
        var strTitle = objMenuItem.getAttribute("title");

        if (objMenuItem.isDisabled)
        {
            strHtml = strHtml + "<li><span id=\"" + objMenuItem.id + "\">"
					+ strTitle + "</span></li>";
        }
        else
        {
	    strHtml = strHtml + "<li><a href=\"#\" id=\""
					+ objMenuItem.id + "\" "
					+ "onmenuclick"
					+ "=\""
					+ strOnMenuClick
					+ "\" onclick=\""
					+ "javascript:opener.ExecuteOnAccessibleMenuClick(this.getAttribute('" + "onmenuclick"+ "')); return false;"
					+ "\">"
					+ strTitle
					+ "</a></li>";        
        }        
    }
    return strHtml;
}


// OnMenu
// Parameters:
//    idMenu   - A string containing the menu ID.
//    dicParms - A two dimensional array containing parameter names and
//               parameter values to be used to customize menu links.
/*------------------------------------------------------------------------------
	%%Owner: JoelFill
	%%Id: 0bc8972b-79c6-4567-bfdc-2b368e3ba00a
------------------------------------------------------------------------------*/
function mnuOpen(event, idMenu, targetURL, dicParms, rgDisables)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    // Allow click-thru on anchors.
    if (window.event.srcElement.tagName == "A" &&
        null != window.event.srcElement.href &&
        "" != window.event.srcElement.href)
    {
        if(browseris.ie55up)
        {
            window.event.srcElement.click();
        }
        return;
    }
    
    window.clickHandled = true;

    mnuClose(window.event);                         // Close the currently open menu (if any).

    var objMenubutton = mnuGetInvokingMenuButton();
    if (null != objMenubutton)
    {
        sMenuButtonID = objMenubutton.id;

        if (document.getElementById(idMenu) && "object" == typeof(document.getElementById(idMenu))) 
        {
            var objMenu = document.getElementById(idMenu);

            if (IsAccessibilityFeatureEnabled())
            {
	        var menu_html = "<html dir='" + mnuGetDirection() + "'><head><title>" + L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
                menu_html = menu_html + mnuGetAccessibleMenuText(objMenu, targetURL, dicParms, rgDisables);
                menu_html = menu_html + "</body></html>";
                var oNewWindow = window.open("/_layouts/blank.htm", "_blank", "status=no,toolbar=no,menubar=no,location=no");
                oNewWindow.document.write(menu_html);
                oNewWindow.document.close();
                oNewWindow.focus();
                gLastMenuWindow = oNewWindow;
            }
	    else
            {
                mnuPosition(idMenu, sMenuButtonID);            // Establish the menu screen position.
                objMenu.style.display = "block";
                if(objMenu.setCapture)
                {
                    objMenu.setCapture();
                    objMenu.onlosecapture = mnuClose;
                }
                objMenu.onclick = mnuClick;
                objMenu.onmouseover = mnuMouseOver;
                document.oncontextmenu = mnuNoContext;

                if (mnuGetDirection() == "rtl")
                {
                    objMenu.style.backgroundImage = "url(" + "/_layouts/images/MGradRTL.gif" + ")";
                    objMenu.style.backgroundPositionX = "right";
                }
                else
                {
                    objMenu.style.backgroundImage = "url(" + "/_layouts/images/MGrad.gif" + ")";
                    objMenu.style.backgroundPositionX = "left";
                }
                objMenu.style.backgroundRepeat = "repeat-y"
            
                mnuCustomizeItems(objMenu, targetURL, dicParms, rgDisables);
                sOpenMenuID = idMenu;
            }
        }
    }
    window.event.cancelBubble = true;   // Don't bubble the event.
    window.event.returnValue = false;   // Cancel the event.
    ecbFocus(window.event, sMenuButtonID);
}

/*------------------------------------------------------------------------------
	%%Id: 9e5b5754-cf5d-46c7-bac3-325defb8ff1c
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuKeyPress(event, idMenu, targetURL, dicParms, rgDisables)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    if ((window.event.shiftKey && window.event.keyCode == 13) ||
        (window.event.altKey && window.event.keyCode == 40) )
            mnuOpen(window.event, idMenu, targetURL, dicParms, rgDisables);
}

/*------------------------------------------------------------------------------
	%%Id: 575998d4-4e49-4fd9-aa0d-8eee7fdd0759
------------------------------------------------------------------------------*/
function mnuGetMenuFromMenuItem(objMenuItem)
{
    var oCurrent = objMenuItem;
    while (oCurrent.className != "ms-MenuUI")
        oCurrent = oCurrent.parentNode;
    return oCurrent;
}

/*------------------------------------------------------------------------------
	%%Id: 6f8b35eb-6e8a-461e-9e92-6b14d79a265e
------------------------------------------------------------------------------*/
function mnuGetMenuRowFromElement(oElement)
{
    if ((browseris.ie55up && oElement.children.length > 0) || (!browseris.ie55up && oElement.childNodes.length > 0))
    {
        if (oElement.firstChild.className == strMenuItemTableCell ||
            oElement.firstChild.className == strMenuItemTableCellH)
                return oElement;
    }

    while (oElement.className != strMenuItemTableCell &&
           oElement.className != strMenuItemTableCellH)
        oElement = oElement.parentNode;
    return oElement.parentNode;
}

/*------------------------------------------------------------------------------
	%%Id: 8cd01ad1-8d10-49f8-9d51-d077a95e44f9
------------------------------------------------------------------------------*/
function mnuGetItemFromElement(oElement)
{
    var oRow = mnuGetMenuRowFromElement(oElement);
    if (oRow)
    return oRow.getElementsByTagName("A")[0];
    return null;
}

/*------------------------------------------------------------------------------
	%%Id: f4b65c2d-44ee-4ad5-bac5-38a9a4cb5e71
------------------------------------------------------------------------------*/
function mnuGetNextMenuItem(objMenuItem)
{
    var objMenu = mnuGetMenuFromMenuItem(objMenuItem);
    objMenuItem = mnuGetItemFromElement(objMenuItem);
    if (objMenuItem)
    {
        var colMenuItems = objMenu.getElementsByTagName("A");
        var oRow;
        var nItem;
        var nCurrent = -1;
        var oItem;
        for (nItem = 0; nItem < colMenuItems.length; nItem++)
        {
            oItem = colMenuItems[nItem];
            if (oItem == objMenuItem)
            {
                nCurrent = nItem;
            }
            else if (nCurrent != -1)
            {
                oRow = mnuGetMenuRowFromElement(oItem);
                if (oRow && !oRow.isDisabled)
                    return oItem;
            }
        }
        for (nItem = 0; nItem < nCurrent; nItem++)
        {
            oItem = colMenuItems[nItem];
            oRow = mnuGetMenuRowFromElement(oItem);
            if (oRow && !oRow.isDisabled)
                return oItem;
        }
    }
    return objMenuItem;
}

/*------------------------------------------------------------------------------
	%%Id: 0eb55634-3ac7-4cac-9138-2e598281bfdb
------------------------------------------------------------------------------*/
function mnuGetPreviousMenuItem(objMenuItem)
{
    var objMenu = mnuGetMenuFromMenuItem(objMenuItem);
    objMenuItem = mnuGetItemFromElement(objMenuItem);
    if (objMenuItem)
    {
        var colMenuItems = objMenu.getElementsByTagName("A");
        var oRow;
        var nItem;
        var nCurrent = -1;
        var oItem;
        for (nItem = colMenuItems.length -1; nItem > -1; nItem--)
        {
            oItem = colMenuItems[nItem];
            if (oItem == objMenuItem)
            {
                nCurrent = nItem;
            }
            else if (nCurrent != -1)
            {
                oRow = mnuGetMenuRowFromElement(oItem);
                if (oRow && !oRow.isDisabled)
                    return oItem;
            }
        }
        for (nItem = colMenuItems.length -1; nItem > nCurrent; nItem--)
        {
            oItem = colMenuItems[nItem];
            oRow = mnuGetMenuRowFromElement(oItem);
            if (oRow && !oRow.isDisabled)
                return oItem;
        }
    }
    return objMenuItem;
}

/*------------------------------------------------------------------------------
	%%Id: a8b5bc35-c577-413c-86da-c9d6a4e99d23
------------------------------------------------------------------------------*/
function mnuSelectPrevious(objMenuItem)
{
    var oPrevious = mnuGetPreviousMenuItem(objMenuItem);
    var oRow = mnuGetMenuRowFromElement(oPrevious);
    if (oRow && !oRow.isDisabled)
    {
        oPrevious.focus();
    }
}

/*------------------------------------------------------------------------------
	%%Id: 91c6ab45-578c-484b-ba16-2d653ba986d9
------------------------------------------------------------------------------*/
function mnuSelectNext(objMenuItem)
{
    var oNext = mnuGetNextMenuItem(objMenuItem);
    var oRow = mnuGetMenuRowFromElement(oNext);
    if (oRow && !oRow.isDisabled)
    {
        oNext.focus();
    }
}

/*------------------------------------------------------------------------------
	%%Id: a8e3a4b7-a55e-4405-a122-b268d5e8d248
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuItemKeydown(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    switch (window.event.keyCode)
    {
        case 13: // Enter
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            mnuItemClick(window.event);
            break;
    case 27: // Escape
            mnuClose(window.event);
            break;
    case 32: // space
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            mnuItemClick(window.event);
            break;
        case 38: // Up arrow
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            mnuSelectPrevious(window.event.srcElement);
            break;
        case  9: // Tab
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            if (window.event.shiftKey)
                mnuSelectPrevious(window.event.srcElement);
            else
                mnuSelectNext(window.event.srcElement);
            break;
        case 40: // Down arrow
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            mnuSelectNext(window.event.srcElement);
            break;
    }
}

/*------------------------------------------------------------------------------
	%%Id: e4e63d88-eae5-41ad-adfc-bd732725d422
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuItemMouseEnter(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oRow = mnuGetMenuRowFromElement(window.event.srcElement);
    if (oRow && !oRow.isDisabled)
    {
        var oItem = mnuGetItemFromElement(window.event.srcElement);
        if (oItem)
        {
            window.event.cancelBubble = true; // Don't bubble the event.
            window.event.returnValue = false; // Cancel the event.
            oItem.focus();
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: e0f62850-7df5-4fbe-b1a4-1833ce528209
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuItemClick(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oRow = mnuGetMenuRowFromElement(window.event.srcElement);
    if (oRow && !oRow.isDisabled)
    {
        var oItem = mnuGetItemFromElement(window.event.srcElement);
        if (oItem)
        {
            if(browseris.ie55up)
            {
                oItem.click();
            }
            else
            {
                oItem.onclick();
            }
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 0a72bce5-c926-4867-bd1b-028d6d889848
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuMouseOver(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    if (document.getElementById(sOpenMenuID) && "object" == typeof(document.getElementById(sOpenMenuID))) 
    {
        var objMenu = document.getElementById(sOpenMenuID);
        var all = GetAllSubElements(objMenu);
        for (var nObject = 0; nObject < all.length; nObject++)
        {
            if (window.event.srcElement == all[nObject])
            {
                window.event.cancelBubble = true; // Don't bubble the event.
                window.event.returnValue = false; // Cancel the event.
                mnuItemMouseEnter(window.event);
                return;
            }
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 04979d3b-cd7e-4a8d-a98f-1e8ddf4654a4
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuClick(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    // This function will be called when the menu is open and the user
    // clicks the mouse anywhere on the page.

    window.clickHandled = true;

    var objSource = window.event.srcElement; // Get the element that fired the event.
    var objParent = objSource.parentNode;
    if (document.getElementById(sOpenMenuID) && "object" == typeof(document.getElementById(sOpenMenuID))) 
    {
        var objMenu = document.getElementById(sOpenMenuID);
        var nObject;
        var all = GetAllSubElements(objMenu);
        for (nObject = 0; nObject < all.length; nObject++)
        {
            if (objSource == all[nObject])
            {
                mnuItemClick(window.event);
                return;
            }
        }
        // Object not found. Not in the menu. See if it's a menu button.
        if (objSource.className != null &&
            objSource.className == strEcbUnselectedClass)
        {
            if(browseris.ie55up)
            {
                objSource.click();
            }
            else
            {
                objSource.onclick();
            }
        }
        else if (objParent != null &&
            objParent.className != null &&
            objParent.className == strEcbSelectedClass)
        {
            if(browseris.ie55up)
            {
                objParent.click();
            }
            else
            {
                objParent.onclick();
            }
        }
        else
        {
            mnuClose(window.event);
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 06090b2f-857d-4c3f-b614-ced2f422b962
------------------------------------------------------------------------------*/
function mnuGetRowFromMenuItem(objMenuItem)
{
    return mnuGetMenuRowFromElement(objMenuItem)
}

/*------------------------------------------------------------------------------
	%%Id: 71d612d8-fa3d-4f06-9a54-7ecb9592ed43
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuItemSelect(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oItem = mnuGetMenuRowFromElement(window.event.srcElement);
    var oItemTableCell = oItem.firstChild;
    if(!browseris.ie55up)
    {
        oItemTableCell = oItem.childNodes[1];
    }
    var oItemTable = oItemTableCell.firstChild;
    oItemTableCell.className = strMenuItemTableCellH;
    oItemTable.className = strMenuItemTableH;
    window.status = getTextContent(oItem);
    window.event.cancelBubble = true; // Don't bubble the event.
    window.event.returnValue = false; // Cancel the event.
    ecbFocus(window.event, sMenuButtonID);
}

/*------------------------------------------------------------------------------
	%%Id: 5152af6c-bdad-45a8-910c-2c6591391749
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function mnuItemDeselect(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oItem = mnuGetMenuRowFromElement(window.event.srcElement);
    var oItemTableCell = oItem.firstChild;
    if(!browseris.ie55up)
    {
        oItemTableCell = oItem.childNodes[1];
    }
    var oItemTable = oItemTableCell.firstChild;
    oItemTableCell.className = strMenuItemTableCell;
    oItemTable.className = strMenuItemTable;
    window.status = window.defaultStatus;
    window.event.cancelBubble = true; // Don't bubble the event.
    window.event.returnValue = false; // Cancel the event.
}

/*------------------------------------------------------------------------------
	%%Id: b022fc14-2df2-4617-b646-36ba56f2a6f9
------------------------------------------------------------------------------*/
function mnuNoContext()
{
    return false;
}

/*------------------------------------------------------------------------------
	%%Id: b3ba88c1-6196-4bb7-9b68-5dc2ed93c5b0
------------------------------------------------------------------------------*/
function ecbGetSelectedElement(elem, tagName)
{
    while(elem != null && elem.tagName != tagName)
        elem = elem.parentNode;
        
    return elem;
}

/*------------------------------------------------------------------------------
	%%Id: 4d8670b7-e0d2-4a6d-a1f2-b62fec5e929c
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function ecbMouseOver(event, itemId)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oEcb = document.getElementById(itemId);
    if (null != oEcb)
    {
        var oActive = document.activeElement;
        if(!oActive)
        {
            oActive = window.event.explicitOriginalTarget;
        }
        if (oActive == oEcb && oEcb.className != strEcbSelectedClass)
        {
            ecbFocus(window.event, itemId);
        }
        else
        {
            i = 0;
            var all = GetAllSubElements(oEcb);
            while (all[i] != null)
            {
                if(all[i].style)
                {
                    all[i].style.cursor = "hand";
                }
                i++;
            }
            oEcb.focus();
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 6d14dc40-ccdb-4a8a-9469-c200a2f456fe
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function ecbMouseOut(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oSrc = window.event.srcElement;
    var oActive = document.activeElement;
    if(!oActive)
    {
        oActive = window.event.explicitOriginalTarget;
    }
    while (oSrc != null && oSrc != oActive)
        oSrc = ecbGetSelectedElement(oSrc.parentNode, "TABLE");
    if (oSrc == null)
        return; 
    var i = 0;
    var all = GetAllSubElements(oSrc);
    while (all[i] != null)
    {
        if (all[i] == window.event.toElement)
            return;
        i++;
    }
    ecbDeSelect(oSrc);
}

/*------------------------------------------------------------------------------
	%%Id: 03ca15fb-fce5-4dfb-a9f2-09c32a5fe894
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function ecbBlur(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var oTable = window.event.srcElement;
    if (mnuIsEcb(oTable))
        ecbDeSelect(oTable);
}

/*------------------------------------------------------------------------------
	%%Id: 40780454-0344-4a08-ad83-7cabc5f8924d
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function ecbFocus(event, itemId)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    var ecbTable = document.getElementById(itemId);
    if (ecbTable != null && mnuIsEcb(ecbTable))
    {
        ecbTable.className     = strEcbSelectedClass;
        ecbTable.style.paddingTop = 0; // deal with the fact that the selected class ends up 1 pixel too large and makes the page "bounce" when toggled.
        ecbTable.onmouseout    = ecbMouseOut;
        ecbTable.onblur        = ecbBlur;
        if (sOpenMenuID == "")
            ecbTable.oncontextmenu = ecbRightClick;
        else
            ecbTable.oncontextmenu = mnuNoContext;

        var titleRow = (browseris.ie55up) ? ecbTable.children[0].children[0] : ecbTable.childNodes[0].childNodes[0];        
        if (titleRow != null)
        {
            var i = 0;
            var imageCell;
            if(browseris.ie55up)
            {
                while (titleRow.children[i] != null)
                    imageCell = titleRow.children[i++];
            }
            else
            {
                while (titleRow.childNodes[i] != null)
                    imageCell = titleRow.childNodes[i++];
            }

            if (imageCell != null)
            {
                imageCell.className = "ms-menuimagecell";
                imageCell.style.visibility="visible";
                imageCell.style.paddingBottom = 0;
                imageCell.style.paddingTop = 0;
            }

            // The ecbTable probably lives in a table cell.
            if (ecbTable.parentNode.tagName == "TD")
            {
                var ecbTitleCell = (browseris.ie55up) ? titleRow.children[0] : titleRow.childNodes[0];
                var ecbTitleElement;

                // Is the parent cell too narrow to display the drop-down?
                if (ecbTable.parentNode.clientWidth < ecbTable.offsetWidth)
                {
                    var cx = ecbTable.parentNode.clientWidth - ecbTable.offsetWidth;
                    var cxTitleCell  = ecbTitleCell.clientWidth + cx;
                    var cxElement    = cxTitleCell - imageCell.clientWidth + (imageCell.clientWidth - imageCell.offsetWidth) * 2;

                    if ((browseris.ie55up && ecbTitleCell.children[0] == null) || 
                        (!browseris.ie55up && ecbTitleCell.childNodes[0] == null))
                    {
                        var strNewHtml = getTextContent(ecbTitleCell);
                        setTextContent(ecbTitleCell, "");
                        var oSpan = document.createElement("SPAN");
                        setTextContent(oSpan, strNewHtml);
                        ecbTitleCell.insertAdjacentElement("AfterBegin", oSpan)
                    }

                    ecbTitleCell.style.overflow = "hidden";
                    ecbTitleElement = (browseris.ie55up) ? ecbTitleCell.children[0] : ecbTitleCell.childNodes[0];
                    ecbTitleElement.style.overflow = "hidden";
                    ecbTitleElement.style.width = cxElement.toString() + "px";

                    ecbTitleCell.style.width = cxTitleCell.toString() + "px";
                }
                if ((browseris.ie55up && ecbTitleCell.children[0] == null) ||
                    (!browseris.ie55up && ecbTitleCell.childNodes[0] == null))
                {
                    ecbTitleElement = ecbTitleCell;
                }
                else
                {
                    ecbTitleElement = (browseris.ie55up) ? ecbTitleCell.children[0] : ecbTitleCell.childNodes[0];
                }
                ecbTitleElement.title = getTextContent(ecbTitleElement);
            }
        }
    }
}

/*------------------------------------------------------------------------------
	%%Id: 4ea799ff-be83-45d2-a53d-e11d50636b18
	%%Owner: MarkZell
------------------------------------------------------------------------------*/
function ecbRightClick(event)
{
    if(!browseris.ie55up)
    {
        window.event = event;
        window.event.srcElement = event.target;
    }

    // Allow regular context menu on anchors.
    if (window.event.srcElement.tagName == "A" &&
        null != window.event.srcElement.href &&
        "" != window.event.srcElement.href)
    {
        // Do nothing.
        return true;
    }

    if(browseris.ie55up)
    {
        // Do the regular click behavior...
        window.event.srcElement.click();
        return false;
    }
}

/*------------------------------------------------------------------------------
	%%Id: 45f86c18-e7c2-4b29-bcfc-a87a176bee1f
------------------------------------------------------------------------------*/
function ecbDeSelect(oTable)
{
    if (oTable.tagName != "TABLE")
        return;
    oTable.className = strEcbUnselectedClass;
    oTable.style.paddingTop = 1; 
    document.oncontextmenu = null;

    var titleRow = (browseris.ie55up) ? oTable.children[0].children[0] : oTable.childNodes[0].childNodes[0];    
    if (null != titleRow)
    {
        var i = 0;
        var imageCell;
        if(browseris.ie55up)
        {
            while (titleRow.children[i] != null)
                imageCell = titleRow.children[i++];
        }
        else
        {
            while (titleRow.childNodes[i] != null)
                imageCell = titleRow.childNodes[i++];
        }

        if (null != imageCell)
        {
            imageCell.style.visibility="hidden";
            imageCell.className = "";
        }

        var ecbTitleCell = (browseris.ie55up) ? titleRow.children[0] : titleRow.childNodes[0];        
        if (null != ecbTitleCell)
        {
            ecbTitleCell.style.overflow = "visible";
            ecbTitleCell.style.width = "100%";
            var ecbTitleElement = (browseris.ie55up) ? ecbTitleCell.children[0] : ecbTitleCell.childNodes[0];
            if (null !=  ecbTitleElement)
            {
                ecbTitleElement.style.overflow = "visible";
                ecbTitleElement.style.width = "auto";
            }
        }
    }
}

/*------------------------------------------------------------------------------
	%%Owner: MarkZell
	%%Id: 86e76944-8050-4f74-b450-105639fcf0c2
------------------------------------------------------------------------------*/
function GetAllSubElements(obj)
{
    if(browseris.ie55up)
    {
        return obj.all;
    }

    var a = new Array();

    if(!obj.childNodes)
    {
        return a;
    }

    for(var i = 0; i < obj.childNodes.length; ++i)
    {
        if(typeof(obj.childNodes[i]) == "object")
        {
            a[a.length] = obj.childNodes[i];
            var ta = GetAllSubElements(obj.childNodes[i]);
            for(var j = 0; j < ta.length; ++j)
            {
                a[a.length] = ta[j];
            }
        }
    }

    return a;
}

window.onclick = function(event) 
    {
        if(browseris.ie55up)
        {
            return true;
        }

        if(!window.clickHandled)
        {
            mnuClose(event);
        }
        window.clickHandled = false;
    }
