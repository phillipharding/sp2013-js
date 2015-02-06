function $_global_portal() {
    Colleague_InitializePrototype();
    ColleagueList_InitializePrototype();
    ;
    ;
    SiteDocumentTab_InitializePrototype();
    SiteDocumentTabList_InitializePrototype();
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    MySite_Person_InitializePrototype();
    mybraryBrandingNode = null;
    if (typeof Sys != "undefined" && Sys != null && Sys.Application != null) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("portal.js");
    }
    SP.SOD.executeOrDelayUntilEventNotified(AddMybraryBranding, "AddMybraryBranding");
}
var sectionSelector;

function AddEditProfilePivot(pSIDs, pNames, psectionQueryName, pdivPlaceHolderID, ptblMainID) {
    sectionSelector = new Object();
    sectionSelector.SectionNames = pNames.split(",");
    sectionSelector.SectionIDs = pSIDs.split(",");
    sectionSelector.TblMainID = ptblMainID;
    displayEditProfileSection(0);
    SP.SOD.executeFunc('clienttemplates.js', 'ClientPivotControl', function() {
        var pivotControlOptions = {
            PivotParentId: pdivPlaceHolderID,
            PivotContainerId: pdivPlaceHolderID
        };

        sectionSelector.PivotControl = new ClientPivotControl(pivotControlOptions);
        for (var i = 0; i < sectionSelector.SectionNames.length; i++) {
            var pivotControlMenuOption = new ClientPivotControlMenuOption();

            pivotControlMenuOption.DisplayText = sectionSelector.SectionNames[i];
            pivotControlMenuOption.OnClickAction = "renderSectionView(" + i.toString() + ");";
            sectionSelector.PivotControl.AddMenuOption(pivotControlMenuOption);
        }
        var index = -1;

        if (psectionQueryName != "") {
            for (var j = 0; j < sectionSelector.SectionNames.length; j++) {
                if (sectionSelector.SectionIDs[j] == psectionQueryName) {
                    index = j;
                    break;
                }
            }
        }
        renderSectionView(index < 0 ? 0 : index);
        var changePhoto = (window.location.href.toLowerCase()).indexOf("changephoto=1") >= 0 || (window.location.href.toLowerCase()).indexOf("changephoto.aspx") >= 0;

        if (changePhoto && typeof SelectUserImage === "function") {
            window.setTimeout(SelectUserImage, 500);
        }
        else if ((window.location.href.toLowerCase()).indexOf("hashtags=1") >= 0) {
            window.setTimeout(function() {
                var hashTagsElement = document.querySelector('#Tbl_Sec_SPS-Section-Preferences .ms-inputBox');

                if (Boolean(hashTagsElement)) {
                    hashTagsElement.focus();
                }
            }, 500);
        }
    });
}
function renderSectionView(index) {
    SP.SOD.executeFunc('clienttemplates.js', 'ClientPivotControl', function() {
        var displaySection = document.getElementById("current-section");

        if (sectionSelector.PivotControl != null) {
            for (var cOption = 0; cOption < sectionSelector.PivotControl.AllOptions.length; ++cOption) {
                if (cOption == index)
                    sectionSelector.PivotControl.AllOptions[cOption].SelectedOption = true;
                else
                    sectionSelector.PivotControl.AllOptions[cOption].SelectedOption = false;
            }
            sectionSelector.PivotControl.Render();
        }
        if (displaySection != null)
            displaySection.value = sectionSelector.SectionIDs[index];
        displayEditProfileSection(index);
    });
}
function displayEditProfileSection(index) {
    var tblMain = document.getElementById(sectionSelector.TblMainID);
    var children = tblMain.rows;
    var len = children.length;

    for (var i = 3; i < len; i++) {
        if (children[i].id != sectionSelector.SectionIDs[index])
            children[i].style.display = "none";
        else
            children[i].style.display = "";
    }
}
function displayExitDialog(saveButtonId) {
    var innerHtmlStr = ['<div style="padding-bottom: 24px;">', STSHtmlEncode(Strings.STS.L_ProfileSettingSave_Text), '</div>', '<div style="text-align: right;">', '<button id="ms-OkBtnDismissProfileSettingExitDlg" class="ms-ButtonHeightWidth" style="width: 7.5em; margin-right: 5px;" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, \'', saveButtonId, '\');">', Strings.STS.L_OkButtonCaption, '</button>', '</div>'].join('');
    var divElem = document.createElement('div');

    divElem.className = 's4-dlg-err';
    divElem.innerHTML = innerHtmlStr;
    var dlgOptions = {
        html: divElem,
        title: Strings.STS.L_ProfileSettingSave_Title,
        allowMaximize: false,
        dialogReturnValueCallback: function() {
            __doPostBack(saveButtonId, "");
        }
    };
    var dlg = new SP.UI.ModalDialog.showModalDialog(dlgOptions);
    var okButton = document.getElementById('ms-OkBtnDismissProfileSettingExitDlg');

    if (okButton != null)
        okButton.focus();
}
function PopulateCallbackMenuItems(results, context) {
    if (context == null || results == null || results == '') {
        return;
    }
    var arrContext = context.split(',');

    if (arrContext.length < 4) {
        return;
    }
    var recsep = arrContext[0];
    var fldsep = arrContext[1];
    var menuClientId = arrContext[2];
    var templateClientId = arrContext[3];
    var menu = document.getElementById(menuClientId);
    var template = document.getElementById(templateClientId);
    var records = results.split(recsep);
    var groups = new Object();

    groups['0'] = template;
    var parentGroup;

    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var fields = record.split(fldsep);

        if (fields.length == 1) {
            parentGroup = groups[fields[0]];
            CAMSep(parentGroup);
            continue;
        }
        var imgUrl = fields[0];
        var title = fields[1];
        var action = fields[2];
        var groupId = fields[3];
        var newGroupId = fields[4];
        var desc = fields[5].length > 0 ? fields[5] : null;

        parentGroup = groups[groupId];
        if (newGroupId != '') {
            var subMenu = CASubM(parentGroup, title, imgUrl, '', null, desc);

            groups[newGroupId] = subMenu;
        }
        else {
            var menuitem = CAMOpt(parentGroup, title, action, imgUrl, '', null, desc);
        }
    }
    MMU_Open(template, menu);
}
function AddToQuickLinksDialog(templateId, baseUrl) {
    var args = [];

    args[0] = document.title;
    args[1] = window.location.href;
    args[2] = Boolean(document.getElementById('ServerTemplate')) ? (document.getElementById('ServerTemplate')).value : '';
    var features = 'resizable=no,status=no,scrollbars=yes,menubar=no,directories=no,location=no,width=750,height=475';

    if (browseris.ie55up)
        features = 'resizable: no; status: no; scroll: yes; help: no; center: yes; dialogWidth: 750px; dialogHeight: 475px;';
    commonShowModalDialog(baseUrl + '_layouts/QuickLinksDialog.aspx', features, null, args);
    var menutemplate = document.getElementById(templateId);

    if (null != menutemplate)
        menutemplate.innerHTML = '';
}
function TATWP_jumpMenu(dropDownId) {
    var el = document.getElementById(dropDownId != undefined ? dropDownId : "TasksAndToolsDDID");

    if (el != null) {
        var href = el.options[el.selectedIndex].value;

        if (href != "0") {
            STSNavigate(href);
        }
    }
}
function Colleague_InitializePrototype() {
    Colleague.prototype.recordId = undefined;
    Colleague.prototype.accountName = undefined;
    Colleague.prototype.name = undefined;
    Colleague.prototype.email = undefined;
    Colleague.prototype.profilePageUrl = undefined;
    Colleague.prototype.profileImage = undefined;
}
function Colleague(recordId, accountName, colleagueName, email, profilePageUrl, profileImage) {
    this.recordId = recordId;
    this.accountName = accountName;
    this.name = colleagueName;
    this.email = email;
    this.profilePageUrl = profilePageUrl;
    this.profileImage = profileImage;
}
function ColleagueList_InitializePrototype() {
    ColleagueList.prototype.colleagues = undefined;
    ColleagueList.prototype.add = ColleagueList_add;
    ColleagueList.prototype.findMatch = ColleagueList_findMatch;
}
function ColleagueList() {
    this.colleagues = [];
}
function ColleagueList_add(recordId, accountName, colleagueName, email, profilePageUrl, profileImage) {
    this.colleagues.push(new Colleague(recordId, accountName, colleagueName, email, profilePageUrl, profileImage));
}
function ColleagueList_findMatch(fieldName, value) {
    for (var i = 0; i < this.colleagues.length; i++) {
        var coll = this.colleagues[i];

        if (coll[fieldName].toLowerCase() == value.toLowerCase())
            return coll;
    }
    return null;
}
function QueuePopulateIMNRC(sipAddress, element) {
    var elementID = element.id.replace("\\", "\\\\");

    setTimeout("IMNRC('" + sipAddress + "', document.getElementById('" + elementID + "'));", 100);
}
function ShowHidePrivacyRow(id, group, linkId, expandedText, hiddenText) {
    var tbl = document.getElementById(id);
    var childElements = tbl.rows;
    var expand = false;

    for (var x = 0; x < childElements.length; x++) {
        if (childElements[x].id == group + id) {
            if (childElements[x].className.indexOf('groupHide') != -1) {
                childElements[x].className = childElements[x].className.replace(/groupHide/g, 'groupShow');
                expand = true;
            }
            else
                childElements[x].className = childElements[x].className.replace(/groupShow/g, 'groupHide');
        }
    }
    var link = document.getElementById(linkId);
    var linkText;

    if (expand)
        linkText = expandedText;
    else
        linkText = hiddenText;
    link.innerHTML = "";
    var img = document.createElement('img');

    img.setAttribute('align', 'absmiddle');
    img.src = expand ? '/_layouts/images/uparrow.png' : '/_layouts/images/downarrow.png';
    link.appendChild(img);
    link.innerHTML += linkText;
}
function AutoExpand(linkId) {
    var link = document.getElementById(linkId);

    link.click();
}
function imgResizeMaxHW(objid, maxwidth, maxheight) {
    var obj = document.getElementById(objid);

    if (typeof obj.onresize != "undefined")
        var oldResize = obj.onresize;
    obj.onresize = null;
    var objHeight = parseInt(obj.style.height);
    var objWidth = parseInt(obj.style.width);

    if (obj != null && objHeight > 0 && objWidth > 0) {
        try {
            var ratiomax = maxheight / maxwidth;
            var ratioobj = objHeight / objWidth;

            if (ratiomax > ratioobj) {
                if (objWidth > maxwidth)
                    obj.style.width = String(maxwidth);
            }
            else {
                if (objHeight > maxheight)
                    obj.style.height = String(maxheight);
            }
            imgUndoTrSize(objid);
        }
        catch (e) { }
    }
    obj.onresize = oldResize;
}
function imgResizeMax(objid, max) {
    imgResizeMaxHW(objid, max, max);
}
function imgUndoTrSize(objid) {
    if (objid == null)
        return;
    var obj = document.getElementById(objid + '_TR');

    if (obj != null) {
        obj.style.height = null;
    }
}
function imgUndoSize(objid) {
    imgUndoTrSize(objid);
    imgResizeTbl(objid);
}
function imgResizeTbl(imgid) {
    if (imgid == null)
        return;
    var img = document.getElementById(imgid);
    var tbl = document.getElementById('table' + imgid);

    if (tbl != null && img != null) {
        try {
            tbl.style.width = img.style.width;
        }
        catch (e) { }
    }
}
function SiteDocsUnSelectSplitMenu(ctrl) {
    ctrl.className = 'ms-vb ms-splitbutton';
    ctrl.hoverInactive = 'ms-vb ms-splitbutton';
    ctrl.hoverActive = 'ms-vb ms-splitbuttonhover ms-unselectedhover';
}
function SiteDocsSelectSplitMenu(ctrl) {
    ctrl.className = 'ms-vb ms-splitbuttonhover ms-selectednohover';
    ctrl.hoverInactive = 'ms-vb ms-splitbuttonhover ms-selectednohover';
    ctrl.hoverActive = 'ms-vb ms-splitbuttonhover ms-selectedhover';
}
function SiteDocsUnSelectNormalMenu(ctrl) {
    ctrl.className = 'ms-menubuttoninactivehover';
    ctrl.hoverInactive = 'ms-menubuttoninactivehover';
    ctrl.hoverActive = 'ms-menubuttonactivehover ms-unselectedhover';
}
function SiteDocsSelectNormalMenu(ctrl) {
    ctrl.className = 'ms-menubuttonactivehover ms-selectednohover';
    ctrl.hoverInactive = 'ms-menubuttonactivehover ms-selectednohover';
    ctrl.hoverActive = 'ms-menubuttonactivehover ms-selectedhover';
}
function SiteDocsChangeMenuText(ctrl, text) {
    if (ctrl.tagName != "A")
        return;
    if (ctrl.childNodes[0].tagName != "IMG") {
        ctrl.childNodes[0].nodeValue = text;
    }
    else {
        ctrl.childNodes[1].nodeValue = text;
    }
}
function DocAdjustHeight(obj, minHeight, fallbackHeight) {
    var height = 0;

    try {
        height = obj.contentWindow.document.body.scrollHeight;
    }
    catch (ex) {
        height = fallbackHeight;
    }
    if (height > minHeight)
        obj.height = String(height);
    else
        obj.height = String(minHeight);
    obj.width = String(obj.parentNode.clientWidth);
}
function showProperties(tag, elip) {
    (document.getElementById(tag)).style.display = '';
    elip.style.display = 'none';
}
function ShowHideKeywords(clientId, fShow) {
    var hiddenDiv = document.getElementById("HiddenKeywordDiv_" + clientId);
    var showLink = document.getElementById("ShowLink_" + clientId);
    var hideLink = document.getElementById("HideLink_" + clientId);
    var showImg = document.getElementById("ShowLink_" + clientId + "_img");
    var hideImg = document.getElementById("HideLink_" + clientId + "_img");

    if (null != hiddenDiv) {
        if (fShow == true) {
            hiddenDiv.style.display = 'inline';
            showLink.style.display = 'none';
            showImg.style.display = 'none';
            hideLink.style.display = 'inline';
            hideImg.style.display = 'inline';
        }
        else {
            hiddenDiv.style.display = 'none';
            showLink.style.display = 'inline';
            showImg.style.display = 'inline';
            hideLink.style.display = 'none';
            hideImg.style.display = 'none';
        }
    }
}
function NavigateToNoteboard(strNoteboardText, strEncodedEmailText, strEmail) {
    if (typeof noteboardElementToUse == "undefined" || noteboardElementToUse == null) {
        if (strEmail != null) {
            var mailtoLink = "mailto:" + strEmail + "?subject=" + strEncodedEmailText;
            var win = window.open(mailtoLink, 'tempWindow');

            if (null != win && null != win.open && !win.closed)
                win.close();
        }
    }
    else {
        if (typeof noteboardElementToUse.GetPlaceHolder != "undefined") {
            var el = noteboardElementToUse.GetPlaceHolder();

            el.scrollIntoView(false);
        }
        if (typeof noteboardElementToUse.SetText != "undefined")
            noteboardElementToUse.SetText(strNoteboardText);
    }
}
function AddNewRow(clientIdPrefix, numUserAddedRowsId, numHiddenRows) {
    var numExposedHiddenRows = '0';
    var numUserAddedRowsElement = document.getElementById(numUserAddedRowsId);

    if (null != numUserAddedRowsElement) {
        numExposedHiddenRows = numUserAddedRowsElement.value;
    }
    var tableRow = document.getElementById(clientIdPrefix + "HiddenRow_" + numExposedHiddenRows);

    if (null != tableRow) {
        tableRow.style.display = "";
    }
    numUserAddedRowsElement.value = String(parseInt(numUserAddedRowsElement.value, 10) + 1);
    if (parseInt(numUserAddedRowsElement.value, 10) == numHiddenRows) {
        var addLink = document.getElementById(clientIdPrefix + "_AddNewRow");

        if (null != addLink) {
            addLink.style.display = "none";
        }
    }
}
function SwitchMode(mode) {
    var currentUrl = window.location.href;

    if (null != window.location.search) {
        currentUrl = (window.location.href.split("?"))[0];
    }
    if (mode == 'add') {
        window.location.href = currentUrl + "?mode=add";
    }
    else {
        window.location.href = currentUrl + "?mode=manage";
    }
}
function HideTableRow(clientIdPrefix, rowId, removeId) {
    var row = document.getElementById(clientIdPrefix + rowId);

    if (null != row) {
        row.style.display = "none";
    }
    var hiddenRemove = document.getElementById(clientIdPrefix + removeId);

    if (null != hiddenRemove) {
        hiddenRemove.value = "1";
    }
    return false;
}
function SiteDocumentTab_InitializePrototype() {
    SiteDocumentTab.prototype.tabType = undefined;
    SiteDocumentTab.prototype.tabText = undefined;
    SiteDocumentTab.prototype.tabUri = undefined;
    SiteDocumentTab.prototype.delCmd = undefined;
}
function SiteDocumentTab(tabType, tabText, tabUri, delCmd) {
    this.tabType = tabType;
    this.tabText = tabText;
    this.tabUri = tabUri;
    this.delCmd = delCmd;
}
function SiteDocumentTabList_InitializePrototype() {
    SiteDocumentTabList.prototype.tabs = undefined;
    SiteDocumentTabList.prototype.toolbarTableRow = undefined;
    SiteDocumentTabList.prototype.prevArrow = undefined;
    SiteDocumentTabList.prototype.nextArrow = undefined;
    SiteDocumentTabList.prototype.startTab = undefined;
    SiteDocumentTabList.prototype.endTab = undefined;
    SiteDocumentTabList.prototype.toolbarID = undefined;
    SiteDocumentTabList.prototype.displayMethod = undefined;
    SiteDocumentTabList.prototype.firstTabButton = undefined;
    SiteDocumentTabList.prototype.tabListVarName = undefined;
    SiteDocumentTabList.prototype.selectedTab = undefined;
    SiteDocumentTabList.prototype.add = SiteDocumentTabList_add;
    SiteDocumentTabList.prototype.setTabListVarName = SiteDocumentTabList_setTabListVarName;
    SiteDocumentTabList.prototype.display = SiteDocumentTabList_display;
    SiteDocumentTabList.prototype.createAddButton = SiteDocumentTabList_createAddButton;
    SiteDocumentTabList.prototype.createTableCell = SiteDocumentTabList_createTableCell;
    SiteDocumentTabList.prototype.fixTabSelection = SiteDocumentTabList_fixTabSelection;
    SiteDocumentTabList.prototype.createPrevArrow = SiteDocumentTabList_createPrevArrow;
    SiteDocumentTabList.prototype.createNextArrow = SiteDocumentTabList_createNextArrow;
    SiteDocumentTabList.prototype.ShowNextFromRight = SiteDocumentTabList_ShowNextFromRight;
    SiteDocumentTabList.prototype.ShowNextFromLeft = SiteDocumentTabList_ShowNextFromLeft;
    SiteDocumentTabList.prototype.getPrevTab = SiteDocumentTabList_getPrevTab;
    SiteDocumentTabList.prototype.getNextTab = SiteDocumentTabList_getNextTab;
    SiteDocumentTabList.prototype.displayTab = SiteDocumentTabList_displayTab;
}
function SiteDocumentTabList() {
    this.tabs = [];
    this.toolbarTableRow = null;
    this.prevArrow = null;
    this.nextArrow = null;
    this.startTab = -1;
    this.endTab = -1;
    this.toolbarID = null;
    this.displayMethod = null;
    this.firstTabButton = null;
    this.tabListVarName = null;
    this.selectedTab = null;
}
function SiteDocumentTabList_add(tabType, tabText, tabUri, delCmd) {
    this.tabs.push(new SiteDocumentTab(tabType, tabText, tabUri, delCmd));
}
function SiteDocumentTabList_setTabListVarName(tabListName) {
    this.tabListVarName = tabListName;
}
function SiteDocumentTabList_display(fnName, toolbarID, fShowAddButton, addButtonTooltip) {
    this.toolbarID = toolbarID;
    this.displayMethod = fnName;
    var toolbar = document.getElementById(toolbarID);

    if (toolbar == null)
        return;
    var endCell = null;

    if (toolbar.firstChild != null && toolbar.firstChild.firstChild != null) {
        this.toolbarTableRow = toolbar.firstChild.firstChild;
        endCell = this.toolbarTableRow.firstChild;
    }
    else {
        this.toolbarTableRow = toolbar.firstChild.nextSibling.firstChild;
        endCell = this.toolbarTableRow.firstChild.nextSibling;
    }
    var totalRowWidth = endCell.offsetWidth;
    var cellWidth = 0;

    this.startTab = 0;
    for (var i = 0; i < this.tabs.length; i++) {
        var separator = document.createElement('td');

        separator.className = "ms-separator";
        separator.innerHTML = "|";
        var tableCell = this.createTableCell(i);

        if (this.prevArrow == null && this.nextArrow == null) {
            if (i > 0)
                this.toolbarTableRow.insertBefore(separator, endCell);
            this.toolbarTableRow.insertBefore(tableCell, endCell);
            this.endTab = i;
            cellWidth = cellWidth + tableCell.offsetWidth + separator.offsetWidth;
            var spaceForScrollControls = 30;
            var fExceeded = false;

            if (this.endTab == this.tabs.length - 1 && cellWidth > totalRowWidth || this.endTab < this.tabs.length - 1 && cellWidth + spaceForScrollControls > totalRowWidth)
                fExceeded = true;
            if (fExceeded) {
                this.prevArrow = this.toolbarTableRow.insertCell(0);
                this.createPrevArrow();
                var sepDummy = this.toolbarTableRow.insertCell(1);
                var sep = document.createElement('td');

                sep.className = "ms-separator";
                sep.innerHTML = "|";
                this.toolbarTableRow.replaceChild(sep, sepDummy);
                this.nextArrow = this.createNextArrow();
                this.toolbarTableRow.replaceChild(this.nextArrow, tableCell);
                this.endTab = this.endTab - 1;
                var sep1 = document.createElement('td');

                sep1.className = "ms-separator";
                sep1.innerHTML = "|";
                this.toolbarTableRow.replaceChild(sep1, endCell);
            }
        }
    }
    if (fShowAddButton) {
        var addCell = this.createAddButton(addButtonTooltip);
        var lastChild = this.toolbarTableRow.lastChild;

        if (this.tabs.length > 0) {
            while (lastChild.nodeType != 1)
                lastChild = lastChild.previousSibling;
            this.toolbarTableRow.insertBefore(addCell, lastChild);
        }
        else {
            this.toolbarTableRow.insertBefore(addCell, lastChild.nextSibling);
        }
    }
    if (this.tabs.length <= 1 && fShowAddButton == false) {
        toolbar.style.display = 'none';
    }
    if (this.firstTabButton != null) {
        var elem = this.firstTabButton;

        elem.click();
    }
}
function SiteDocumentTabList_createAddButton(addButtonTooltip) {
    var addButton = document.createElement('td');

    addButton.className = "ms-toolbar";
    addButton.nowrap = "nowrap";
    addButton.id = this.toolbarID + "_add";
    var tabDiv = document.createElement('div');

    tabDiv.id = this.toolbarID + "_addDiv";
    tabDiv.className = "ms-menubuttoninactivehover";
    tabDiv.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
    tabDiv.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
    tabDiv.height = "100%";
    tabDiv.cellspacing = "0";
    tabDiv.style.padding = "2";
    tabDiv.title = addButtonTooltip;
    var button = document.createElement('input');

    button.id = this.toolbarID + "_addButton";
    button.type = "image";
    button.src = "/_layouts/images/newitem.gif";
    button.style.background = "none";
    button.style.border = "0";
    button.style.padding = "0";
    button.style.margin = "0";
    button.onclick = new Function("return " + this.displayMethod + "(null, null, null, 0);");
    tabDiv.appendChild(button);
    addButton.appendChild(tabDiv);
    return addButton;
}
function SiteDocumentTabList_createTableCell(index) {
    var tab = this.tabs[index];
    var cellID = this.toolbarID + "_RptControls_ctl" + String(index);
    var tableCell = document.createElement('td');

    tableCell.ID = cellID;
    tableCell.className = "ms-toolbar";
    tableCell.setAttribute("nowrap", "nowrap");
    var tabDiv = document.createElement('div');

    tabDiv.id = cellID + "_Div";
    tabDiv.className = "ms-menubuttoninactivehover";
    tabDiv.height = "100%";
    tabDiv.cellspacing = "0";
    tabDiv.className = "ms-menubuttoninactivehover";
    tabDiv.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
    tabDiv.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
    tabDiv.style.paddingTop = (tabDiv.style.paddingBottom = "2");
    var button = document.createElement('input');

    button.className = "ms-toolbar";
    button.id = cellID + "_Button";
    button.type = "button";
    var tabTitle = new String(tab.tabText);

    tabDiv.title = tabTitle;
    var cellMaxChars = 8;

    if (tabTitle.length > cellMaxChars) {
        tabTitle = tabTitle.substring(0, cellMaxChars - 2) + "...";
    }
    else {
        while (tabTitle.length < cellMaxChars)
            tabTitle += " ";
    }
    button.value = tabTitle;
    button.style.background = "transparent";
    button.style.border = "0";
    button.style.padding = "0";
    if (index == 0) {
        this.firstTabButton = button;
    }
    button.onclick = new Function(this.tabListVarName + ".fixTabSelection('" + tabDiv.id + "'); return " + this.displayMethod + "(document.getElementById('" + tabDiv.id + "'), '" + tab.tabUri + "', null, 2);");
    tabDiv.appendChild(button);
    if (tab.tabType != "NonEditable" && tab.delCmd != null && tab.delCmd != '') {
        var delButton = document.createElement('input');

        delButton.className = "ms-toolbar";
        delButton.id = cellID + "_delButton";
        delButton.type = "image";
        delButton.src = "/_layouts/images/closeI.gif";
        delButton.onmouseover = new Function("this.src = '/_layouts/images/closeA.gif'");
        delButton.onmouseout = new Function("this.src = '/_layouts/images/closeI.gif'");
        delButton.style.background = "none";
        delButton.style.border = "0";
        delButton.style.paddingRight = "1";
        delButton.onclick = new Function(tab.delCmd);
        tabDiv.appendChild(delButton);
    }
    tableCell.appendChild(tabDiv);
    return tableCell;
}
function SiteDocumentTabList_fixTabSelection(tabDivId) {
    if (this.selectedTab != null) {
        this.selectedTab.className = "ms-menubuttoninactivehover";
        this.selectedTab.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
        this.selectedTab.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
    }
    this.selectedTab = document.getElementById(tabDivId);
}
function SiteDocumentTabList_createPrevArrow() {
    this.prevArrow.className = "ms-toolbar";
    this.prevArrow.nowrap = "nowrap";
    var tabSpan = document.createElement('span');
    var tabDiv = document.createElement('div');

    tabDiv.id = this.toolbarID + "_prevArrowDiv";
    tabDiv.className = "ms-menubuttoninactivehover";
    tabDiv.height = "100%";
    tabDiv.cellspacing = "0";
    tabDiv.style.padding = "0";
    var button = document.createElement('input');

    button.id = this.toolbarID + "_prevArrowButton";
    button.type = "button";
    button.value = "<<";
    button.style.background = "none";
    button.style.border = "0";
    button.style.padding = "0";
    button.style.margin = "0";
    button.onclick = null;
    button.disabled = true;
    tabDiv.appendChild(button);
    tabSpan.appendChild(tabDiv);
    this.prevArrow.appendChild(tabSpan);
}
function SiteDocumentTabList_createNextArrow() {
    var nextArrow = document.createElement('td');

    nextArrow.className = "ms-toolbar";
    nextArrow.nowrap = "nowrap";
    nextArrow.id = this.toolbarID + "_next";
    var tabSpan = document.createElement('span');
    var tabDiv = document.createElement('div');

    tabDiv.id = this.toolbarID + "_nextArrowDiv";
    tabDiv.className = "ms-menubuttoninactivehover";
    tabDiv.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
    tabDiv.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
    tabDiv.height = "100%";
    tabDiv.cellspacing = "0";
    tabDiv.style.padding = "0";
    var button = document.createElement('input');

    button.id = this.toolbarID + "_nextArrowButton";
    button.type = "button";
    button.value = ">>";
    button.style.background = "none";
    button.style.border = "0";
    button.style.padding = "0";
    button.style.margin = "0";
    button.onclick = new Function(this.tabListVarName + ".ShowNextFromRight()");
    tabDiv.appendChild(button);
    tabSpan.appendChild(tabDiv);
    nextArrow.appendChild(tabSpan);
    return nextArrow;
}
function SiteDocumentTabList_ShowNextFromRight() {
    var newTab = this.createTableCell(this.endTab + 1);

    this.endTab = this.endTab + 1;
    this.startTab = this.startTab + 1;
    var thisTab = this.getPrevTab(this.nextArrow);
    var prevTab = this.getPrevTab(thisTab);

    while (thisTab != this.prevArrow) {
        newTab = this.toolbarTableRow.replaceChild(newTab, thisTab);
        thisTab = prevTab;
        prevTab = this.getPrevTab(thisTab);
    }
    if (this.endTab == this.tabs.length - 1) {
        var nextButton = document.getElementById(this.toolbarID + "_nextArrowButton");

        nextButton.disabled = true;
        nextButton.parentNode.className = 'ms-menubuttoninactivehover';
        nextButton.parentNode.onmouseover = new Function("");
        nextButton.parentNode.onmouseout = new Function("");
    }
    var prevButton = document.getElementById(this.toolbarID + "_prevArrowButton");

    prevButton.disabled = false;
    prevButton.parentNode.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
    prevButton.parentNode.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
}
function SiteDocumentTabList_getPrevTab(tab) {
    var prevTab = tab.previousSibling;

    while (prevTab != null && prevTab.className != "ms-toolbar") {
        prevTab = prevTab.previousSibling;
    }
    return prevTab;
}
function SiteDocumentTabList_ShowNextFromLeft() {
    var newTab = this.createTableCell(this.startTab - 1);

    this.startTab = this.startTab - 1;
    this.endTab = this.endTab - 1;
    var thisTab = this.getNextTab(this.prevArrow);
    var nextTab = this.getNextTab(thisTab);

    while (thisTab != this.nextArrow) {
        newTab = this.toolbarTableRow.replaceChild(newTab, thisTab);
        thisTab = nextTab;
        nextTab = this.getNextTab(thisTab);
    }
    if (this.startTab == 0) {
        var prevButton = document.getElementById(this.toolbarID + "_prevArrowButton");

        prevButton.disabled = true;
        prevButton.parentNode.className = 'ms-menubuttoninactivehover';
        prevButton.parentNode.onmouseover = new Function("");
        prevButton.parentNode.onmouseout = new Function("");
    }
    var nextButton = document.getElementById(this.toolbarID + "_nextArrowButton");

    nextButton.disabled = false;
    nextButton.parentNode.onmouseover = new Function("this.className = 'ms-menubuttonactivehover'");
    nextButton.parentNode.onmouseout = new Function("this.className = 'ms-menubuttoninactivehover'");
}
function SiteDocumentTabList_getNextTab(tab) {
    var nextTab = tab.nextSibling;

    while (nextTab != null && nextTab.className != "ms-toolbar") {
        nextTab = nextTab.nextSibling;
    }
    return nextTab;
}
function SiteDocumentTabList_displayTab(index) {
    if (index < this.startTab) {
        var numLeftNeeded = this.startTab - index;

        while (numLeftNeeded > 0) {
            this.ShowNextFromLeft();
            numLeftNeeded--;
        }
    }
    else if (index > this.endTab) {
        var numRightNeeded = index - this.endTab;

        while (numRightNeeded > 0) {
            this.ShowNextFromRight();
            numRightNeeded--;
        }
    }
    var button = document.getElementById(this.toolbarID + "_RptControls_ctl" + String(index) + "_Button");

    if (button != null)
        button.click();
}
function SiteDocsSelectTab(ctrl) {
    ctrl.className = 'ms-menubuttonactivehover';
    ctrl.onmouseout = 'ms-menubuttonactivehover';
    ctrl.onmouseover = 'ms-menubuttonactivehover';
}
function EditNote(clientID) {
    var noteLabel = document.getElementById("IdentityStatus_" + clientID);
    var noteEdit = document.getElementById("IdentityStatusEdit_" + clientID);

    noteLabel.style.display = 'none';
    noteEdit.style.display = '';
    noteEdit.firstChild.firstChild.focus();
}
function HoverNote(clientID, fhover) {
    var note = document.getElementById("IdentityStatus_" + clientID);

    if (fhover) {
        note.className = "ms-identitypiecenotelink ms-identitypiecenotehover";
    }
    else {
        note.className = "ms-identitypiecenotelink";
    }
}
function OnKeyPress(e, clientID, profileID) {
    if (null == e)
        e = window.event;
    if (null != e && e.keyCode == 13) {
        var noteEdit = document.getElementById("IdentityStatusEdit_" + clientID);

        e.returnValue = false;
        e.cancel = true;
        noteEdit.firstChild.firstChild.blur();
    }
    return false;
}
function AddToColleaguesDialog(url, accountName, dialogCallback) {
    var args = [];

    if (accountName != null) {
        args[0] = accountName;
    }
    else {
        args = null;
    }
    var dialogOptions = {
        width: 750,
        height: 500
    };

    commonModalDialogOpen(url, dialogOptions, dialogCallback, args);
}
function ShowNewQuicklinkPopup(url, dialogCallback) {
    AddToColleaguesDialog(url, null, dialogCallback);
}
function ShowColleagueSuggestionPopup(fRefresh, queryString) {
    var dialogOptions = {
        width: 800,
        height: 500
    };
    var callback = fRefresh == true ? PageRefreshOnDialogClose : null;

    if (typeof GetQuickLinkDialogFormUrl != "undefined")
        var url = GetQuickLinkDialogFormUrl() + "?Mode=Suggestion";
    if (null != queryString)
        url += "&" + queryString;
    commonModalDialogOpen(url, dialogOptions, callback, null);
}
function PageRefreshOnDialogClose(dialogResult, retValue) {
    if (dialogResult == 1) {
        document.forms[0].submit();
    }
}
function ShowSuggestionOnDialogClose(dialogResult, retValue) {
    if (dialogResult == 1) {
        ShowColleagueSuggestionPopup(true, 'addedcolleagues=' + retValue);
    }
}
function SelectKeywordSuggestion(taxonomyControlID, keyword, link) {
    var webTaggingControl = document.getElementById(taxonomyControlID);
    var control = new Microsoft.SharePoint.Taxonomy.ControlObject(webTaggingControl.lastChild);

    control.addTerm('22222222-2222-2222-2222-222222222222', keyword);
    var hiddenSuggestions = document.getElementById(taxonomyControlID + "_hiddenSuggestions");
    var newSuggestion = null;

    if (null != hiddenSuggestions && hiddenSuggestions.hasChildNodes()) {
        var links = hiddenSuggestions.getElementsByTagName("a");

        if (links[0] != null) {
            newSuggestion = links[0];
        }
    }
    if (null != newSuggestion) {
        var newSuggestionLink = hiddenSuggestions.removeChild(newSuggestion);

        link.parentNode.replaceChild(newSuggestionLink, link);
        newSuggestionLink.focus();
    }
    else {
        link.onclick = null;
        link.parentNode.className = "ms-disabledlink";
    }
    NotifyBrowserOfAsyncUpdate(taxonomyControlID);
}
function ShowHideDetails(AboutMeId, ProfileDetailsId, EllipsisId, clientID, showText, hideText) {
    var bShow;
    var details = document.getElementById(ProfileDetailsId);

    if (null != details) {
        bShow = details.style.display == 'none';
        details.style.display = bShow ? '' : 'none';
    }
    var aboutMe = document.getElementById(AboutMeId);
    var ellipsis = document.getElementById(EllipsisId);

    if (null != aboutMe) {
        bShow = !(aboutMe.style.height == '');
        if (bShow) {
            aboutMe.setAttribute('oldHeight', aboutMe.style.height);
            aboutMe.style.height = '';
            ellipsis.style.display = 'none';
        }
        else {
            aboutMe.style.height = aboutMe.getAttribute('oldHeight');
            ellipsis.style.display = '';
        }
    }
    var link = document.getElementById(clientID + '_showHideLink');

    link.innerHTML = '';
    var img = document.createElement('img');

    img.setAttribute('align', 'absmiddle');
    img.src = bShow ? '/_layouts/images/uparrow.png' : '/_layouts/images/downarrow.png';
    link.appendChild(img);
    link.innerHTML += bShow ? hideText : showText;
}
function ShowMoreDetailsLink(AboutMeId, ProfileDetailsId, EllipsisId, clientID) {
    var aboutMe = document.getElementById(AboutMeId);
    var details = document.getElementById(ProfileDetailsId);
    var fAboutMeOverflow = null != aboutMe && aboutMe.scrollHeight > aboutMe.offsetHeight;
    var fProfileDetails = null;
    var child1 = details.firstChild;

    while (child1 != null && (child1.tagName == undefined || child1.tagName.toUpperCase() != 'DIV'))
        child1 = child1.nextSibling;
    if (child1 != null) {
        var child2 = child1.firstChild;

        while (child2 != null && (child2.tagName == undefined || child2.tagName.toUpperCase() != 'DIV'))
            child2 = child2.nextSibling;
        fProfileDetails = child2 != null;
    }
    if (fAboutMeOverflow || fProfileDetails) {
        var link = document.getElementById(clientID + '_showHideLink');

        link.style.display = '';
        if (fAboutMeOverflow) {
            var ellipsis = document.getElementById(EllipsisId);

            ellipsis.innerHTML = '...';
            ellipsis.style.display = '';
        }
    }
}
function _MySite_RenderPeople(div, people, startIndex, nPeople, nPerRow, maxWidth, showNames, showIMPawn) {
    var i;
    var person;

    if (nPerRow == 0)
        return;
    maxWidth = showIMPawn ? maxWidth - 24 : maxWidth - 8;
    var testDiv = document.createElement('DIV'), textNode = document.createTextNode('');

    if (showNames) {
        testDiv.className = 'ms-item';
        testDiv.style.width = '1px';
        testDiv.style.overflow = 'auto';
        testDiv.innerHTML = '<img src="/_layouts/images/O14_person_placeHolder_32.png" width="32" height="32" /><br/>';
        testDiv.appendChild(textNode);
        div.appendChild(testDiv);
        for (i = startIndex; i < startIndex + nPeople; i++) {
            person = people[i];
            textNode.nodeValue = person.Name;
            if (testDiv.scrollWidth > maxWidth) {
                var personName = person.Name, lastWrapPoint = 0, wrappedName = '';

                for (var wrapPoint = 1; wrapPoint <= personName.length; wrapPoint++) {
                    textNode.nodeValue = personName.substring(lastWrapPoint, wrapPoint);
                    if (testDiv.scrollWidth > maxWidth) {
                        wrapPoint--;
                        wrappedName += personName.substring(lastWrapPoint, wrapPoint) + ' ';
                        lastWrapPoint = wrapPoint;
                    }
                }
                wrappedName += personName.substr(lastWrapPoint);
                person._wrappedName = wrappedName;
            }
        }
        div.removeChild(testDiv);
    }
    var table = document.createElement('TABLE');

    table.cellSpacing = 0;
    table.style.tableLayout = 'fixed';
    table.style.width = '100%';
    var row = table.insertRow(-1);

    for (i = 0; i < nPeople;) {
        var cell = document.createElement('TD');

        cell.style.width = String(100 / nPerRow) + '%';
        person = people[i + startIndex];
        person._addContent(cell, showNames, maxWidth, showIMPawn, i + startIndex);
        row.appendChild(cell);
        if (++i < nPeople && i % nPerRow == 0)
            row = table.insertRow(-1);
    }
    while (row.cells.length < nPerRow) {
        var emptyTd = document.createElement('TD');

        emptyTd.innerHTML = '&nbsp;';
        row.appendChild(emptyTd);
    }
    div.insertBefore(table, div.firstChild);
}
function MySite_Person_InitializePrototype() {
    MySite_Person.prototype.Name = undefined;
    MySite_Person.prototype.ProfileUrl = undefined;
    MySite_Person.prototype.ImageUrl = undefined;
    MySite_Person.prototype.Group = undefined;
    MySite_Person.prototype.Email = undefined;
    MySite_Person.prototype.SipAddress = undefined;
    MySite_Person.prototype._noImage = undefined;
    MySite_Person.prototype._wrappedName = undefined;
    MySite_Person.prototype._addContent = MySite_Person_addContent;
    MySite_Person.prototype._addIMPawn = MySite_Person_addIMPawn;
    MySite_Person.prototype._addPersonName = MySite_Person_addPersonName;
}
function MySite_Person(personName, profileUrl, imageUrl, group, email, sip, clientID) {
    this.Name = personName;
    this.ProfileUrl = profileUrl;
    this.ImageUrl = imageUrl;
    this.Group = group;
    this.Email = email;
    this.SipAddress = sip;
    this.ClientID = clientID;
    if (null == imageUrl) {
        this.ImageUrl = '/_layouts/images/O14_person_placeHolder_32.png';
        this._noImage = true;
    }
}
function MySite_Person_addContent(container, showNames, maxWidth, showIMPawn, index) {
    container.className = 'ms-item';
    var personImg = document.createElement('img');

    personImg.src = this.ImageUrl;
    personImg.alt = this.Name;
    var personLink = document.createElement('a');

    personLink.href = this.ProfileUrl;
    personLink.id = 'mySitePersonLink_' + this.ClientID + '_' + index.toString();
    personLink.appendChild(personImg);
    var personImgContainer = document.createElement('div');

    personImgContainer.appendChild(personLink);
    personImgContainer.appendChild(document.createTextNode(' '));
    personImgContainer.className = "ms-profilepicture ms-smallthumbnailimage";
    container.appendChild(personImgContainer);
    if (showNames) {
        var nameDiv = document.createElement('div');

        nameDiv.style.width = String(maxWidth) + 'px';
        this._addPersonName(nameDiv, showIMPawn);
        container.appendChild(nameDiv);
    }
}
function MySite_Person_addIMPawn(container) {
    var address = "";
    var id = "";

    if (this.SipAddress != null && this.SipAddress != "") {
        address = this.SipAddress;
        id = "user_im,type=sip,name=";
    }
    else if (this.Email != null && this.Email != "") {
        address = escape(this.Email);
        id = "user_im,type=smtp,name=";
    }
    else {
        id = "user_im,type=smtp,name=";
    }
    var jellySpan = document.createElement('span');
    var jellyimg = document.createElement('img');

    jellyimg.setAttribute("id", id + address);
    jellyimg.style.border = '0';
    jellyimg.setAttribute("showofflinepawn", "1");
    jellyimg.setAttribute("name", "imnmark");
    jellyimg.setAttribute("onload", "QueuePopulateIMNRC('" + address + "', this);");
    jellyimg.src = "/_layouts/images/imnhdr.gif";
    jellyimg.alt = "";
    jellySpan.appendChild(jellyimg);
    var jellyDiv = document.createElement('div');

    jellyDiv.appendChild(jellySpan);
    container.className = 'ms-item';
    container.innerHTML = jellyDiv.innerHTML + '&nbsp;';
}
function MySite_Person_addPersonName(container, fShowIMPawn) {
    if (fShowIMPawn) {
        this._addIMPawn(container);
    }
    var link = document.createElement('a');

    link.href = this.ProfileUrl;
    ;
    link.appendChild(document.createTextNode(this._wrappedName != null ? this._wrappedName : this.Name));
    container.appendChild(link);
}
function MySite_RenderPeople(divId, people, maxRows, showNames, delayUntilPageLoad) {
    if (delayUntilPageLoad) {
        var renderFunc = function() {
            MySite_RenderPeople(divId, people, maxRows, showNames, false);
        };

        AttachEvent('domLoad', function() {
            setTimeout(renderFunc, 50);
        });
        return false;
    }
    if (maxRows < 1)
        maxRows = 1;
    var div = document.getElementById(divId), availableSpace = div.clientWidth;
    var maxWidth = showNames ? 80 : 55, peoplePerRow = Math.floor(availableSpace / maxWidth);

    if (peoplePerRow > people.length) {
        peoplePerRow = people.length;
        maxWidth = Math.floor(availableSpace / peoplePerRow);
    }
    var count = Math.min(people.length, maxRows * peoplePerRow);

    _MySite_RenderPeople(div, people, 0, count, peoplePerRow, maxWidth, showNames, true);
    return count == people.length;
}
function MySite_ColleaguesWpRender(divId, people, maxRows, showNames, delayUntilPageLoad) {
    if (delayUntilPageLoad) {
        var renderFunc = function() {
            MySite_ColleaguesWpRender(divId, people, maxRows, showNames, false);
        };

        AttachEvent('domLoad', function() {
            setTimeout(renderFunc, 50);
        });
        return;
    }
    if (!MySite_RenderPeople(divId, people, maxRows, showNames, false)) {
        var link = document.getElementById(divId + "_managelink");

        link.style.display = '';
    }
}
function MySite_RenderInCommonManager(divId, manager, title, division, delayUntilPageLoad) {
    if (delayUntilPageLoad) {
        var renderFunc = function() {
            MySite_RenderInCommonManager(divId, manager, title, division, false);
        };

        AttachEvent('domLoad', function() {
            setTimeout(renderFunc, 50);
        });
        return;
    }
    var div = document.getElementById(divId);
    var imgCell = document.createElement('td');

    manager._addContent(imgCell, false, undefined, undefined, -1);
    var textCell = document.createElement('td');

    textCell.className = 'ms-persondata';
    var nameDiv = document.createElement('div');

    manager._addPersonName(nameDiv, false);
    textCell.appendChild(nameDiv);
    var titleDiv = document.createElement('div');

    titleDiv.appendChild(document.createTextNode(title));
    textCell.appendChild(titleDiv);
    var divisionDiv = document.createElement('div');

    divisionDiv.appendChild(document.createTextNode(division));
    textCell.appendChild(divisionDiv);
    var table = document.createElement('table');
    var tableRow = table.insertRow(-1);

    tableRow.appendChild(imgCell);
    tableRow.appendChild(textCell);
    div.appendChild(table);
}
function MySite_RenderInCommonColleagues(divId, colleagues, delayUntilPageLoad) {
    if (delayUntilPageLoad) {
        var renderFunc = function() {
            MySite_RenderInCommonColleagues(divId, colleagues, false);
        };

        AttachEvent('domLoad', function() {
            setTimeout(renderFunc, 50);
        });
        return;
    }
    var div = document.getElementById(divId), availableSpace = div.clientWidth;
    var maxWidth = 80, colleaguesPerRow = Math.floor(availableSpace / maxWidth);

    if (colleaguesPerRow > colleagues.length) {
        colleaguesPerRow = colleagues.length;
        maxWidth = Math.floor(availableSpace / colleaguesPerRow);
    }
    var count = Math.min(colleagues.length, colleaguesPerRow * 2);

    _MySite_RenderPeople(div, colleagues, 0, count, colleaguesPerRow, maxWidth, true, false);
    if (count > 0 && count < colleagues.length) {
        var showExtraFunc = function() {
            var div2 = (document.getElementById(divId)).nextSibling;

            div2.style.display = '';
            if (0 == div2.childNodes.length) {
                _MySite_RenderPeople(div2, colleagues, count, colleagues.length - count, colleaguesPerRow, maxWidth, true, false);
            }
            div2.nextSibling.style.display = 'none';
            div2.nextSibling.nextSibling.style.display = '';
        };
        var hideFunc = function() {
            var div2 = (document.getElementById(divId)).nextSibling;

            div2.style.display = 'none';
            div2.nextSibling.style.display = '';
            div2.nextSibling.nextSibling.style.display = 'none';
        };
        var showLinkDiv = div.nextSibling.nextSibling;

        AttachEvent('click', showExtraFunc, showLinkDiv.firstChild);
        AttachEvent('click', hideFunc, showLinkDiv.nextSibling.firstChild);
        showLinkDiv.style.display = '';
    }
}
function MySite_FixupPNGs(elOrId) {
    if (!browseris.ie || browseris.ie7up)
        return;
    var el = typeof elOrId == 'string' ? document.getElementById(elOrId) : elOrId;

    if (el.nodeType == 1 && el.tagName.toUpperCase() == 'IMG') {
        if ((el.src.toLowerCase()).lastIndexOf('.png') == el.src.length - 4) {
            el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' + el.src + '),sizingMethod=scale);';
            el.src = '/_layouts/images/blank.gif';
        }
    }
    else {
        var child = el.firstChild;

        while (null != child) {
            MySite_FixupPNGs(child);
            child = child.nextSibling;
        }
    }
}
function MySiteProfile_RenderCommonManager(renderCtx, fieldName, fieldSchema, fieldData, divId) {
    var objDiv = document.getElementById(divId);

    if (objDiv != null && typeof objDiv != 'undefined') {
        SP.SOD.executeFunc('clienttemplates.js', 'spMgr.RenderFieldByName', function() {
            var fieldHtml = spMgr.RenderFieldByName(renderCtx, fieldName, fieldData, fieldSchema);

            objDiv.innerHTML = fieldHtml;
            window.setTimeout('ProcessImn();', 500);
        });
    }
}
function MySiteProfile_RenderCommonColleagues(renderCtx, fieldName, fieldSchema, fieldDataArray, divId) {
    var objDiv = document.getElementById(divId);

    if (objDiv != null && typeof objDiv != 'undefined') {
        SP.SOD.executeFunc('clienttemplates.js', 'spMgr.RenderFieldByName', function() {
            var fieldHtml = '';

            for (var i = 0; i < fieldDataArray.length; i++) {
                fieldHtml += '<div class="ms-profile-inCommonColleague">';
                fieldHtml += spMgr.RenderFieldByName(renderCtx, fieldName, fieldDataArray[i], fieldSchema);
                fieldHtml += '</div>';
            }
            objDiv.innerHTML = fieldHtml;
            window.setTimeout('ProcessImn();', 500);
        });
    }
}
function ShowHideAskMeAboutKeywords(clientId, fShow) {
    var hiddenDiv = document.getElementById("HiddenKeywordDiv_" + clientId);
    var showLink = document.getElementById("ShowLink_" + clientId);
    var hideLink = document.getElementById("HideLink_" + clientId);

    if (null != hiddenDiv) {
        if (fShow == true) {
            hiddenDiv.style.overflow = 'scroll';
            var showHeight = hiddenDiv.scrollHeight;

            hiddenDiv.style.overflow = 'hidden';
            SPAnimationUtility.BasicAnimator.Resize(hiddenDiv, showHeight, null, function() {
                hiddenDiv.style.width = '';
            }, null);
            showLink.style.display = 'none';
            hideLink.style.display = '';
        }
        else {
            hiddenDiv.style.overflow = 'hidden';
            SPAnimationUtility.BasicAnimator.Resize(hiddenDiv, 0, null, null, null);
            showLink.style.display = '';
            hideLink.style.display = 'none';
        }
    }
}
function ShowHideProfileInfoDetails(clientId, linkId, hideString, showString, hiddenName) {
    var objDetails = document.getElementById(clientId);

    if (objDetails == null)
        return;
    var bShow = !(objDetails.getAttribute('detailsVisible') == 'true');

    if (bShow) {
        objDetails.style.overflow = 'scroll';
        var showHeight = objDetails.scrollHeight;

        objDetails.style.overflow = 'hidden';
        objDetails.setAttribute('detailsVisible', 'true');
        SPAnimationUtility.BasicAnimator.Resize(objDetails, showHeight, null, function() {
            objDetails.style.width = '';
        }, null);
    }
    else {
        objDetails.style.overflow = 'hidden';
        objDetails.setAttribute('detailsVisible', 'false');
        SPAnimationUtility.BasicAnimator.Resize(objDetails, 0, null, null, null);
    }
    var objLink = document.getElementById(linkId);

    if (objLink != null) {
        objLink.innerHTML = '';
        var objText = document.createTextNode(bShow ? hideString : showString);

        objLink.appendChild(objText);
    }
    var objHidden = document.getElementById(hiddenName);

    if (objHidden != null)
        objHidden.value = bShow ? '0' : '1';
}
function editProfilePrivacyCheckUncheckAll(checkOn, optionsClientID) {
    var chkBoxes = (document.getElementById(optionsClientID)).getElementsByTagName("input");

    for (var i = 0; i < chkBoxes.length; ++i) {
        chkBoxes[i].checked = checkOn;
    }
}
function editProfileSetCheckAllBox(checkAllBoxClientID, optionsClientID) {
    var chkAllBox = document.getElementById(checkAllBoxClientID);
    var chkBoxes = (document.getElementById(optionsClientID)).getElementsByTagName("input");

    for (var i = 0; i < chkBoxes.length; ++i) {
        if (!chkBoxes[i].checked) {
            chkAllBox.checked = false;
            return;
        }
    }
    chkAllBox.checked = true;
}
function ResizeMySiteQuickLaunch() {
    if (window.location.href.match(new RegExp("[?&]IsDlg=1")) != null)
        return;
    var eWorkspace = document.getElementById("s4-workspace");
    var eBodyContainer = document.getElementById("s4-bodyContainer");
    var eSideNavBox = document.getElementById("sideNavBox");

    if (Boolean(eWorkspace) && Boolean(eBodyContainer) && Boolean(eSideNavBox)) {
        var BodyContainerHeight = 0;
        var WorkspaceHeight = 0;
        var ResizeQuickLaunch = function() {
            if (BodyContainerHeight != eBodyContainer.scrollHeight || BodyContainerHeight < eWorkspace.clientHeight || WorkspaceHeight != eWorkspace.clientHeight) {
                eSideNavBox.style.height = "";
                eBodyContainer.style.height = "";
                if (eBodyContainer.scrollHeight < eWorkspace.clientHeight)
                    eBodyContainer.style.height = String(eWorkspace.clientHeight) + "px";
                eSideNavBox.style.height = String(eBodyContainer.scrollHeight) + "px";
                BodyContainerHeight = eBodyContainer.scrollHeight;
                WorkspaceHeight = eWorkspace.clientHeight;
            }
        };

        ResizeQuickLaunch();
        window.setInterval(ResizeQuickLaunch, 500);
    }
}
function DismissStatusText() {
    SP.SOD.loadMultiple(["SP.js", "SP.UI.MySiteCommon.js"], function() {
        var spctx = SP.ClientContext.get_current();

        if (spctx != null) {
            var SharePointNS = Microsoft.SharePoint;

            SharePointNS.Portal.UserProfiles.MySiteDismissStatusText.dismissStatusText(spctx);
            spctx.executeQueryAsync(null, null);
            var statusID = eval("myBraryStatusBarID");

            if (Boolean(statusID))
                removeStatus(statusID);
        }
    });
}
var mybraryBrandingNode;

function AddMybraryBranding(brandingText) {
    if (mybraryBrandingNode == null && Boolean(brandingText))
        return;
    var pageTitleNode = document.getElementById('pageTitle');

    if (pageTitleNode != null) {
        var childNode = pageTitleNode.previousSibling;
        var mybraryBranding = 'mysitedocumentbranding';

        if (childNode == null || childNode.id != 'mysitedocumentbranding') {
            mybraryBrandingNode = document.createElement("div");
            mybraryBrandingNode.id = mybraryBranding;
            mybraryBrandingNode.className = 'ms-topbar';
            mybraryBrandingNode.style.paddingLeft = '3px';
        }
        else {
            mybraryBrandingNode = childNode;
        }
        if (brandingText == null) {
            if (Boolean(Strings.STS.L_Mybrary_Branding_Text2))
                brandingText = String.format(Strings.STS.L_Mybrary_Branding_Text2, "OneDrive");
            else
                brandingText = Strings.STS.L_Mybrary_Branding_Text;
        }
        setInnerText(mybraryBrandingNode, brandingText);
        if (childNode != mybraryBrandingNode)
            pageTitleNode.parentNode.insertBefore(mybraryBrandingNode, pageTitleNode);
    }
}
$_global_portal();
