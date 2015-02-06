Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof(CUI.Page.PageComponent) == "undefined")
{
  CUI.Page.ICommandHandler=function(){};
  CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
  CUI.Page.PageComponent=function(){};
  CUI.Page.PageComponent.prototype={init:function(){},getGlobalCommands:function(){return null;},getFocusedCommands:function(){return null;},handleCommand:function(commandId,properties,sequence){return false;},canHandleCommand:function(commandId){return false;},isFocusable:function(){return false;},receiveFocus:function(){return false;},yieldFocus:function(){return true;},getId:function(){return'PageComponent';}};
  CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent',null,CUI.Page.ICommandHandler);
}


Type.registerNamespace('Pub.HtmlDesign');

Pub.HtmlDesign._htmlDesignCommandNames = function Pub_HtmlDesign__htmlDesignCommandNames() {
}


Pub.HtmlDesign._htmlDesignComponentNames = function Pub_HtmlDesign__htmlDesignComponentNames() {
}


Pub.HtmlDesign.StatusAndPreviewClickHandler = function Pub_HtmlDesign_StatusAndPreviewClickHandler() {
}
Pub.HtmlDesign.StatusAndPreviewClickHandler.load = function Pub_HtmlDesign_StatusAndPreviewClickHandler$load() {
    $addHandler(document.body, 'mousedown', Pub.HtmlDesign.StatusAndPreviewClickHandler._onBodyClicked$i);
}
Pub.HtmlDesign.StatusAndPreviewClickHandler._onBodyClicked$i = function Pub_HtmlDesign_StatusAndPreviewClickHandler$_onBodyClicked$i(evt) {
    if (!evt) {
        return;
    }
    var current = evt.target;
    var href = current.getAttribute('href');
    var onClick = current.getAttribute('onclick');
    if (href && (href.indexOf('previewwithstatus.aspx') !== -1 || onClick && onClick.indexOf('OpenDocuments') !== -1 && (href.indexOf('.htm') !== -1 || href.indexOf('.html') !== -1))) {
        current.setAttribute('target', 'ServerPreview');
        current.setAttribute('onclick', 'openAndFocus(this.href, \'ServerPreview\')');
    }
}


Pub.HtmlDesign._htmlDesignPageNames = function Pub_HtmlDesign__htmlDesignPageNames() {
}


Pub.HtmlDesign._htmlDesignQueryStringConstants = function Pub_HtmlDesign__htmlDesignQueryStringConstants() {
}


Pub.HtmlDesign.SnippetPageComponent = function Pub_HtmlDesign_SnippetPageComponent() {
    Pub.HtmlDesign.SnippetPageComponent.initializeBase(this);
    this._registerWithPageManager$i$1();
}
Pub.HtmlDesign.SnippetPageComponent.load = function Pub_HtmlDesign_SnippetPageComponent$load() {
    Pub.HtmlDesign.SnippetPageComponent._instance$p = new Pub.HtmlDesign.SnippetPageComponent();
}
Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i = function Pub_HtmlDesign_SnippetPageComponent$_redirectToComponentPage$i(targetComponentName, targetFieldName, targetWebPartUrl, redirectPagePath) {
    window.location = Pub.HtmlDesign.SnippetPageComponent._getPageUrl$p(targetComponentName, targetFieldName, targetWebPartUrl, redirectPagePath);
}
Pub.HtmlDesign.SnippetPageComponent._getPageUrl$p = function Pub_HtmlDesign_SnippetPageComponent$_getPageUrl$p(targetComponentName, targetFieldName, targetWebPartUrl, redirectPagePath) {
    if (!redirectPagePath) {
        if (targetComponentName === Pub.HtmlDesign._htmlDesignComponentNames._home$i) {
            redirectPagePath = Pub.HtmlDesign._htmlDesignPageNames._componentHome$i;
        }
        else {
            redirectPagePath = Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i;
        }
    }
    redirectPagePath = SP.Utilities.HttpUtility.urlPathEncode(redirectPagePath);
    var isFirstParam = true;
    if (targetComponentName) {
        isFirstParam = false;
        redirectPagePath += '?' + Pub.HtmlDesign._htmlDesignQueryStringConstants._componentName$i + '=' + SP.Utilities.HttpUtility.urlKeyValueEncode(targetComponentName);
    }
    if (targetFieldName) {
        if (isFirstParam) {
            redirectPagePath += '?';
        }
        else {
            redirectPagePath += '&';
        }
        isFirstParam = false;
        redirectPagePath += Pub.HtmlDesign._htmlDesignQueryStringConstants._fieldName$i + '=' + SP.Utilities.HttpUtility.urlKeyValueEncode(targetFieldName);
    }
    if (targetWebPartUrl) {
        if (isFirstParam) {
            redirectPagePath += '?';
        }
        else {
            redirectPagePath += '&';
        }
        isFirstParam = false;
        redirectPagePath += Pub.HtmlDesign._htmlDesignQueryStringConstants._webPartUrl$i + '=' + SP.Utilities.HttpUtility.urlKeyValueEncode(targetWebPartUrl);
    }
    var valueOfUrlKey = GetUrlKeyValue(Pub.HtmlDesign._htmlDesignQueryStringConstants._url$i, false, null, true);
    if (valueOfUrlKey) {
        if (isFirstParam) {
            redirectPagePath += '?';
        }
        else {
            redirectPagePath += '&';
        }
        isFirstParam = false;
        redirectPagePath += Pub.HtmlDesign._htmlDesignQueryStringConstants._url$i + '=' + SP.Utilities.HttpUtility.urlKeyValueEncode(valueOfUrlKey);
    }
    return redirectPagePath;
}
Pub.HtmlDesign.SnippetPageComponent._generateMenuSection$p = function Pub_HtmlDesign_SnippetPageComponent$_generateMenuSection$p(sb, pageFieldsInfo, category) {
    if (pageFieldsInfo && pageFieldsInfo.length > 0) {
        sb.append('<MenuSection Id=\'Ribbon.HtmlDesignTab.PageFields.PageFields.Menu.');
        sb.append(category);
        sb.append('\' Title=\'');
        sb.append('Content Fields');
        sb.append('\' >');
        sb.append('<Gallery Id=\'Ribbon.HtmlDesignTab.PageFields.PageFields.Menu.');
        sb.append(category);
        sb.append('.Gallery\' ElementDimensions=\'Size48by48\' Width=\'4\' >');
        for (var i = 0; i < pageFieldsInfo.length; i++) {
            sb.append('<GalleryButton');
            sb.append(' id=\'Ribbon.HtmlDesignTab.PageFields.PageFields.Menu.');
            sb.append(category);
            sb.append('.Item');
            sb.append(i.toString());
            sb.append('\' InnerHTML=\"&lt;div style=\'width:48px;height:46px;overflow:hidden;white-space:normal;\'&gt;&lt;img src=\'');
            sb.append(Pub.HtmlDesign.SnippetPageComponent._defaultPageFieldIcon$p);
            sb.append('\' style=\'width:16px;\' /&gt;&lt;br/&gt;&lt;span class=\'ms-cui-ctl-mediumlabel\'&gt;');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(pageFieldsInfo[i].buttonLabelText));
            sb.append('&lt;/span&gt;&lt;/div&gt;\" Alt=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(pageFieldsInfo[i].buttonLabelText));
            sb.append('\' CommandValueId=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(pageFieldsInfo[i].buttonLabelText));
            sb.append('\' Command=\'');
            sb.append(Pub.HtmlDesign._htmlDesignCommandNames.pageFields);
            sb.append('\' />');
        }
        sb.append('</Gallery></MenuSection>');
    }
}
Pub.HtmlDesign.SnippetPageComponent._generateMenuSectionWebPart$p = function Pub_HtmlDesign_SnippetPageComponent$_generateMenuSectionWebPart$p(sb, webPartInfo, category, buttonName) {
    if (webPartInfo && webPartInfo.length > 0) {
        var menuId = 'Ribbon.HtmlDesignTab.' + buttonName + '.' + buttonName + '.Menu';
        sb.append('<MenuSection Id=\'');
        sb.append(menuId);
        sb.append('.');
        sb.append(category);
        sb.append('\' >');
        sb.append('<Gallery Id=\'');
        sb.append(menuId);
        sb.append('.');
        sb.append(category);
        sb.append('.Gallery\' ElementDimensions=\'Size48by48\' Width=\'4\' >');
        for (var i = 0; i < webPartInfo.length; i++) {
            sb.append('<GalleryButton');
            sb.append(' id=\'');
            sb.append(menuId);
            sb.append('.');
            sb.append(category);
            sb.append('.Item');
            sb.append(i.toString());
            sb.append('\' InnerHTML=\"&lt;div style=\'width:48px;height:46px;overflow:hidden;white-space:normal;\'&gt;&lt;img src=\'');
            if (webPartInfo[i].buttonIcon) {
                sb.append(SP.Utilities.HttpUtility.escapeXmlText(webPartInfo[i].buttonIcon));
            }
            else {
                sb.append(Pub.HtmlDesign.SnippetPageComponent._defaultWebPartIcon$p);
            }
            sb.append('\' style=\'width:16px;\' /&gt;&lt;br/&gt;&lt;span class=\'ms-cui-ctl-smalllabel\'&gt;');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(webPartInfo[i].buttonLabelText));
            sb.append('&lt;/span&gt;&lt;/div&gt;\" Alt=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(webPartInfo[i].buttonLabelText));
            sb.append('\' CommandValueId=\'');
            sb.append(SP.Utilities.HttpUtility.escapeXmlText(webPartInfo[i].buttonValue));
            sb.append('\' Command=\'');
            sb.append(Pub.HtmlDesign._htmlDesignCommandNames.webParts);
            sb.append('\' />');
        }
        sb.append('</Gallery></MenuSection>');
    }
}
Pub.HtmlDesign.SnippetPageComponent._generateMenuSectionSiteElement$p = function Pub_HtmlDesign_SnippetPageComponent$_generateMenuSectionSiteElement$p(sb, siteElementInfo, category, buttonName) {
    if (siteElementInfo && siteElementInfo.length > 0) {
        var menuId = 'Ribbon.HtmlDesignTab.' + buttonName + '.' + buttonName + '.Menu';
        sb.append('<MenuSection Id=\'');
        sb.append(menuId);
        sb.append('.');
        sb.append(category);
        sb.append('\' >');
        sb.append('<Gallery Id=\'');
        sb.append(menuId);
        sb.append('.');
        sb.append(category);
        sb.append('.Gallery\' ElementDimensions=\'Size48by48\' Width=\'4\' >');
        for (var i = 0; i < siteElementInfo.length; i++) {
            sb.append('<GalleryButton');
            sb.append(' id=\'');
            sb.append(menuId);
            sb.append('.');
            sb.append(category);
            sb.append('.Item');
            sb.append(i.toString());
            sb.append('\' InnerHTML=\"&lt;div style=\'width:48px;height:46px;overflow:hidden;white-space:normal;\'&gt;&lt;img src=\'');
            sb.append(Pub.HtmlDesign.SnippetPageComponent._defaultWebPartIcon$p);
            sb.append('\' style=\'width:16px;\' /&gt;&lt;br/&gt;&lt;span class=\'ms-cui-ctl-smalllabel\'&gt;');
            sb.append(SP.Utilities.HttpUtility.htmlEncode(SP.Utilities.HttpUtility.escapeXmlText(siteElementInfo[i].buttonLabelText)));
            sb.append('&lt;/span&gt;&lt;/div&gt;\" Alt=\'');
            sb.append(SP.Utilities.HttpUtility.htmlEncode(SP.Utilities.HttpUtility.escapeXmlText(siteElementInfo[i].buttonLabelText)));
            sb.append('\' CommandValueId=\'');
            sb.append(SP.Utilities.HttpUtility.htmlEncode(SP.Utilities.HttpUtility.escapeXmlText(siteElementInfo[i].buttonValue)));
            sb.append('\' Command=\'');
            sb.append(Pub.HtmlDesign._htmlDesignCommandNames.siteElement);
            sb.append('\' />');
        }
        sb.append('</Gallery></MenuSection>');
    }
}
Pub.HtmlDesign.SnippetPageComponent._populatePageFieldsGalleryMenu$p = function Pub_HtmlDesign_SnippetPageComponent$_populatePageFieldsGalleryMenu$p() {
    var contentFieldsList = Pub.HtmlDesign.Externs.contenttypebuttonlist.buttonInfoList;
    var pageFieldsList = Pub.HtmlDesign.Externs.pagecontenttypebuttonlist.buttonInfoList;
    var sb = new Sys.StringBuilder();
    if ((contentFieldsList && contentFieldsList.length > 0) || (pageFieldsList && pageFieldsList.length > 0)) {
        sb.append('<Menu Id=\'Ribbon.HtmlDesignTab.PageFields.PageFields.Menu\'>');
        Pub.HtmlDesign.SnippetPageComponent._generateMenuSection$p(sb, contentFieldsList, 'ContentFields');
        Pub.HtmlDesign.SnippetPageComponent._generateMenuSection$p(sb, pageFieldsList, 'PageFields');
        sb.append('</Menu>');
    }
    return sb.toString();
}
Pub.HtmlDesign.SnippetPageComponent._populateMediaAndContentGallery$p = function Pub_HtmlDesign_SnippetPageComponent$_populateMediaAndContentGallery$p() {
    var mediaAndContentList = Pub.HtmlDesign.Externs.mediaandcontentbuttonlist.buttonInfoList;
    var sb = new Sys.StringBuilder();
    if (mediaAndContentList && mediaAndContentList.length > 0) {
        sb.append('<Menu Id=\'Ribbon.HtmlDesignTab.MediaAndContent.MediaAndContent.Menu\'>');
        Pub.HtmlDesign.SnippetPageComponent._generateMenuSectionWebPart$p(sb, mediaAndContentList, 'MediaAndContent', 'MediaAndContent');
        sb.append('</Menu>');
    }
    return sb.toString();
}
Pub.HtmlDesign.SnippetPageComponent._populateDynamicContentGallery$p = function Pub_HtmlDesign_SnippetPageComponent$_populateDynamicContentGallery$p() {
    var mediaAndContentList = Pub.HtmlDesign.Externs.contentrollupbuttonlist.buttonInfoList;
    var sb = new Sys.StringBuilder();
    if (mediaAndContentList && mediaAndContentList.length > 0) {
        sb.append('<Menu Id=\'Ribbon.HtmlDesignTab.DynamicContent.DynamicContent.Menu\'>');
        Pub.HtmlDesign.SnippetPageComponent._generateMenuSectionWebPart$p(sb, mediaAndContentList, 'DynamicContent', 'DynamicContent');
        sb.append('</Menu>');
    }
    return sb.toString();
}
Pub.HtmlDesign.SnippetPageComponent._populateSiteElementGallery$p = function Pub_HtmlDesign_SnippetPageComponent$_populateSiteElementGallery$p() {
    var siteElementList = Pub.HtmlDesign.Externs.siteelementbuttonlist.buttonInfoList;
    var sb = new Sys.StringBuilder();
    if (siteElementList && siteElementList.length > 0) {
        sb.append('<Menu Id=\'Ribbon.HtmlDesignTab.Administration.SiteElement.Menu\'>');
        Pub.HtmlDesign.SnippetPageComponent._generateMenuSectionSiteElement$p(sb, siteElementList, 'SiteElement', 'SiteElement');
        sb.append('</Menu>');
    }
    return sb.toString();
}
Pub.HtmlDesign.SnippetPageComponent._populateWebPartsGalleryMenu$p = function Pub_HtmlDesign_SnippetPageComponent$_populateWebPartsGalleryMenu$p() {
    var ret = null;
    var xmlMenuSection = null;
    var xmlControls = null;
    var buttonInfoList = Pub.HtmlDesign.Externs.webpartsgallerybuttonlist.buttonInfoList;
    if (buttonInfoList && buttonInfoList.length > 0) {
        var idPrefix = 'Ribbon.HtmlDesignTab.WebParts.WebParts';
        ret = new CUI.JsonXmlElement('Menu', { Id: idPrefix + '.Menu' });
        var group = '';
        for (var i = 0; i < buttonInfoList.length; i++) {
            var buttonInfo = buttonInfoList[i];
            if (!i || buttonInfo.buttonGroupName !== group) {
                group = buttonInfo.buttonGroupName;
                xmlMenuSection = ret.appendChild('MenuSection', { Id: idPrefix + '.Menu.Section', Title: group, DisplayMode: 'Menu16' });
                xmlControls = xmlMenuSection.appendChild('Controls', { Id: idPrefix + '.Menu.Controls' });
            }
            var iconUrl = Pub.HtmlDesign.SnippetPageComponent._defaultWebPartIcon$p;
            if (buttonInfo.buttonIcon) {
                iconUrl = buttonInfo.buttonIcon;
            }
            xmlControls.appendChild('Button', { Id: idPrefix + '.Menu.Item' + i.toString(), LabelText: buttonInfo.buttonLabelText, Image16by16: iconUrl, CommandType: 'OptionSelection', Command: 'HtmlDesign.Command.WebParts', CommandValueId: buttonInfo.buttonValue });
        }
    }
    return ret;
}
Pub.HtmlDesign.SnippetPageComponent.prototype = {
    _focusedCommands$p$1: null,
    _globalCommands$p$1: null,
    
    _registerWithPageManager$i$1: function Pub_HtmlDesign_SnippetPageComponent$_registerWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().addPageComponent(this);
    },
    
    init: function Pub_HtmlDesign_SnippetPageComponent$init() {
        this._focusedCommands$p$1 = [];
        this._globalCommands$p$1 = [ Pub.HtmlDesign._htmlDesignCommandNames.pageHeadContents, Pub.HtmlDesign._htmlDesignCommandNames.mobilePanel, Pub.HtmlDesign._htmlDesignCommandNames.pageFields, Pub.HtmlDesign._htmlDesignCommandNames.siteLogo, Pub.HtmlDesign._htmlDesignCommandNames.siteTitle, Pub.HtmlDesign._htmlDesignCommandNames.populateSiteElementGallery, Pub.HtmlDesign._htmlDesignCommandNames.siteElement, Pub.HtmlDesign._htmlDesignCommandNames.topNavigationNoFlyoutWithStartNode, Pub.HtmlDesign._htmlDesignCommandNames.quickLaunch, Pub.HtmlDesign._htmlDesignCommandNames.breadcrumb, Pub.HtmlDesign._htmlDesignCommandNames.searchBox, Pub.HtmlDesign._htmlDesignCommandNames.populatePageFieldsGallery, Pub.HtmlDesign._htmlDesignCommandNames.populateMediaAndContentGallery, Pub.HtmlDesign._htmlDesignCommandNames.populateDynamicContentGallery, Pub.HtmlDesign._htmlDesignCommandNames.populateWebPartsGallery, Pub.HtmlDesign._htmlDesignCommandNames.customMarkup, Pub.HtmlDesign._htmlDesignCommandNames.webParts, Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInEdit, Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInRead, Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAdministrators, Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthenticated, Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthors, Pub.HtmlDesign._htmlDesignCommandNames.signIn, Pub.HtmlDesign._htmlDesignCommandNames.webPartZone ];
    },
    
    getFocusedCommands: function Pub_HtmlDesign_SnippetPageComponent$getFocusedCommands() {
        return this._focusedCommands$p$1;
    },
    
    getGlobalCommands: function Pub_HtmlDesign_SnippetPageComponent$getGlobalCommands() {
        return this._globalCommands$p$1;
    },
    
    canHandleCommand: function Pub_HtmlDesign_SnippetPageComponent$canHandleCommand(commandId) {
        return true;
    },
    
    handleCommand: function Pub_HtmlDesign_SnippetPageComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.pageHeadContents) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._pageHeadContents$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.mobilePanel) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._mobilePanel$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.pageFields) {
            var fieldName = properties['CommandValueId'];
            if (fieldName) {
                Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._pageFields$i, fieldName, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
            }
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.siteLogo) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._siteLogo$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.siteTitle) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._siteTitle$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.populateSiteElementGallery) {
            var props = properties;
            props.PopulationXML = Pub.HtmlDesign.SnippetPageComponent._populateSiteElementGallery$p();
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.siteElement) {
            var fieldName = properties['CommandValueId'];
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._siteElement$i, fieldName, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.topNavigationNoFlyoutWithStartNode) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._topNavigationNoFlyoutWithStartNode$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.customMarkup) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._customMarkup$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.quickLaunch) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._quickLaunch$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.breadcrumb) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._breadcrumb$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.searchBox) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._searchBox$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInRead) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._editModePanelShowInRead$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInEdit) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._editModePanelShowInEdit$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthors) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAuthors$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthenticated) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAuthenticated$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAdministrators) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAdministrators$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.signIn) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._signIn$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.webPartZone) {
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(Pub.HtmlDesign._htmlDesignComponentNames._webPartZone$i, null, null, Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i);
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.populatePageFieldsGallery) {
            var props = properties;
            props.PopulationXML = Pub.HtmlDesign.SnippetPageComponent._populatePageFieldsGalleryMenu$p();
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.populateMediaAndContentGallery) {
            var props = properties;
            props.PopulationXML = Pub.HtmlDesign.SnippetPageComponent._populateMediaAndContentGallery$p();
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.populateDynamicContentGallery) {
            var props = properties;
            props.PopulationXML = Pub.HtmlDesign.SnippetPageComponent._populateDynamicContentGallery$p();
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.populateWebPartsGallery) {
            var props = properties;
            props.PopulationJSON = Pub.HtmlDesign.SnippetPageComponent._populateWebPartsGalleryMenu$p();
        }
        else if (commandId === Pub.HtmlDesign._htmlDesignCommandNames.webParts) {
            var targetWebPartUrl = properties['CommandValueId'];
            Pub.HtmlDesign.SnippetPageComponent._redirectToComponentPage$i(null, null, targetWebPartUrl, Pub.HtmlDesign._htmlDesignPageNames._webPartEditingSurface$i);
        }
        return true;
    },
    
    isFocusable: function Pub_HtmlDesign_SnippetPageComponent$isFocusable() {
        return true;
    },
    
    receiveFocus: function Pub_HtmlDesign_SnippetPageComponent$receiveFocus() {
        return true;
    },
    
    yieldFocus: function Pub_HtmlDesign_SnippetPageComponent$yieldFocus() {
        return true;
    }
}


Pub.HtmlDesign.HtmlDesignGridView = function Pub_HtmlDesign_HtmlDesignGridView() {
}
Pub.HtmlDesign.HtmlDesignGridView.$$cctor = function Pub_HtmlDesign_HtmlDesignGridView$$$cctor() {
    Pub.HtmlDesign.HtmlDesignGridView._msSetCopyButtonVisibility$i();
}
Pub.HtmlDesign.HtmlDesignGridView.changeGridCellValue = function Pub_HtmlDesign_HtmlDesignGridView$changeGridCellValue(propertyId) {
    var valueElement = Pub.HtmlDesign.HtmlDesignGridView._getValueElementByPropertyId$i(propertyId);
    var nameElement = $get('Name_' + propertyId);
    valueElement.style.fontWeight = 'bold';
    nameElement.style.fontWeight = 'bold';
    var changeElement = $get('sys_changed:' + propertyId);
    changeElement.value = '1';
    Pub.HtmlDesign.HtmlDesignGridView._values$p[propertyId] = valueElement.nodeValue;
    Pub.HtmlDesign.HtmlDesignGridView._keys$p[Pub.HtmlDesign.HtmlDesignGridView._arraysize$p++] = propertyId;
}
Pub.HtmlDesign.HtmlDesignGridView.msCopySnippetToClipboard = function Pub_HtmlDesign_HtmlDesignGridView$msCopySnippetToClipboard() {
    if (window.clipboardData) {
        window.clipboardData.setData('Text', $get('ComponentSnippetTextBox').innerText);
    }
}
Pub.HtmlDesign.HtmlDesignGridView.isTabPressed = function Pub_HtmlDesign_HtmlDesignGridView$isTabPressed(keyboardEvent) {
    return (keyboardEvent.keyCode === 9);
}
Pub.HtmlDesign.HtmlDesignGridView._msSetCopyButtonVisibility$i = function Pub_HtmlDesign_HtmlDesignGridView$_msSetCopyButtonVisibility$i() {
    if ($get('MsCopyButtonDiv') && window.clipboardData) {
        $get('MsCopyButtonDiv').style.display = 'block';
    }
}
Pub.HtmlDesign.HtmlDesignGridView.showSelectColorDialog = function Pub_HtmlDesign_HtmlDesignGridView$showSelectColorDialog(basePropertyId, propertyValueId) {
    var dialogOptions = new SP.UI.DialogOptions();
    var colorInput = $get(propertyValueId);
    dialogOptions.args = (colorInput.value) ? colorInput.value : '#FFFFFF';
    var url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'morecolors.aspx');
    dialogOptions.url = url;
    dialogOptions.title = SP.Publishing.Resources.enhancedThemingColorDialogTitle;
    dialogOptions.dialogReturnValueCallback = function(dialogResult, returnValue) {
        if (dialogResult === SP.UI.DialogResult.OK) {
            colorInput.value = returnValue;
            Pub.HtmlDesign.HtmlDesignGridView.changeGridCellValue(basePropertyId);
        }
        var valueElement = Pub.HtmlDesign.HtmlDesignGridView._getValueElementByPropertyId$i(basePropertyId);
        if (valueElement) {
            valueElement.focus();
        }
    };
    SP.UI.ModalDialog.showModalDialog(dialogOptions);
}
Pub.HtmlDesign.HtmlDesignGridView._getValueElementByPropertyId$i = function Pub_HtmlDesign_HtmlDesignGridView$_getValueElementByPropertyId$i(propertyId) {
    return $get('ComponentPropertyValue_' + propertyId);
}


Pub.HtmlDesign._htmlDesignCommandNames.registerClass('Pub.HtmlDesign._htmlDesignCommandNames');
Pub.HtmlDesign._htmlDesignComponentNames.registerClass('Pub.HtmlDesign._htmlDesignComponentNames');
Pub.HtmlDesign.StatusAndPreviewClickHandler.registerClass('Pub.HtmlDesign.StatusAndPreviewClickHandler');
Pub.HtmlDesign._htmlDesignPageNames.registerClass('Pub.HtmlDesign._htmlDesignPageNames');
Pub.HtmlDesign._htmlDesignQueryStringConstants.registerClass('Pub.HtmlDesign._htmlDesignQueryStringConstants');
Pub.HtmlDesign.SnippetPageComponent.registerClass('Pub.HtmlDesign.SnippetPageComponent', CUI.Page.PageComponent);
Pub.HtmlDesign.HtmlDesignGridView.registerClass('Pub.HtmlDesign.HtmlDesignGridView');
function sp_ui_pub_htmldesign_initialize() {
Pub.HtmlDesign._htmlDesignCommandNames.pageHeadContents = 'HtmlDesign.Command.PageHeadContents';
Pub.HtmlDesign._htmlDesignCommandNames.mobilePanel = 'HtmlDesign.Command.MobilePanel';
Pub.HtmlDesign._htmlDesignCommandNames.webPartZone = 'HtmlDesign.Command.WebPartZone';
Pub.HtmlDesign._htmlDesignCommandNames.pageFields = 'HtmlDesign.Command.PageFields';
Pub.HtmlDesign._htmlDesignCommandNames.siteLogo = 'HtmlDesign.Command.SiteLogo';
Pub.HtmlDesign._htmlDesignCommandNames.siteTitle = 'HtmlDesign.Command.SiteTitle';
Pub.HtmlDesign._htmlDesignCommandNames.populateSiteElementGallery = 'HtmlDesign.Command.PopulateSiteElementGallery';
Pub.HtmlDesign._htmlDesignCommandNames.siteElement = 'HtmlDesign.Command.SiteElement';
Pub.HtmlDesign._htmlDesignCommandNames.topNavigationNoFlyoutWithStartNode = 'HtmlDesign.Command.TopNavigationNoFlyoutWithStartNode';
Pub.HtmlDesign._htmlDesignCommandNames.quickLaunch = 'HtmlDesign.Command.QuickLaunch';
Pub.HtmlDesign._htmlDesignCommandNames.breadcrumb = 'HtmlDesign.Command.Breadcrumb';
Pub.HtmlDesign._htmlDesignCommandNames.searchBox = 'HtmlDesign.Command.SearchBox';
Pub.HtmlDesign._htmlDesignCommandNames.signIn = 'HtmlDesign.Command.SignIn';
Pub.HtmlDesign._htmlDesignCommandNames.populatePageFieldsGallery = 'HtmlDesign.Command.PopulatePageFieldsGallery';
Pub.HtmlDesign._htmlDesignCommandNames.populateWebPartsGallery = 'HtmlDesign.Command.PopulateWebPartsGallery';
Pub.HtmlDesign._htmlDesignCommandNames.populateMediaAndContentGallery = 'HtmlDesign.Command.PopulateMediaAndContentGallery';
Pub.HtmlDesign._htmlDesignCommandNames.populateDynamicContentGallery = 'HtmlDesign.Command.PopulateDynamicContentGallery';
Pub.HtmlDesign._htmlDesignCommandNames.webParts = 'HtmlDesign.Command.WebParts';
Pub.HtmlDesign._htmlDesignCommandNames.customMarkup = 'HtmlDesign.Command.CustomMarkup';
Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInEdit = 'HtmlDesign.Command.EditModePanelShowInEdit';
Pub.HtmlDesign._htmlDesignCommandNames.editModePanelShowInRead = 'HtmlDesign.Command.EditModePanelShowInRead';
Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthors = 'HtmlDesign.Command.SecurityTrimmedAuthors';
Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAuthenticated = 'HtmlDesign.Command.SecurityTrimmedAuthenticated';
Pub.HtmlDesign._htmlDesignCommandNames.securityTrimmedAdministrators = 'HtmlDesign.Command.SecurityTrimmedAdministrators';
Pub.HtmlDesign._htmlDesignComponentNames._home$i = 'Home';
Pub.HtmlDesign._htmlDesignComponentNames._pageHeadContents$i = 'PageHeadContents';
Pub.HtmlDesign._htmlDesignComponentNames._mobilePanel$i = 'DeviceChannelPanel';
Pub.HtmlDesign._htmlDesignComponentNames._webPartZone$i = 'WebPartZone';
Pub.HtmlDesign._htmlDesignComponentNames._pageFields$i = 'PageFields';
Pub.HtmlDesign._htmlDesignComponentNames._siteLogo$i = 'SiteLogo';
Pub.HtmlDesign._htmlDesignComponentNames._siteTitle$i = 'SiteTitle';
Pub.HtmlDesign._htmlDesignComponentNames._siteElement$i = 'SiteElement';
Pub.HtmlDesign._htmlDesignComponentNames._topNavigationNoFlyoutWithStartNode$i = 'TopNavigationNoFlyoutWithStartNode';
Pub.HtmlDesign._htmlDesignComponentNames._quickLaunch$i = 'QuickLaunch';
Pub.HtmlDesign._htmlDesignComponentNames._breadcrumb$i = 'Breadcrumb';
Pub.HtmlDesign._htmlDesignComponentNames._searchBox$i = 'SearchBox';
Pub.HtmlDesign._htmlDesignComponentNames._signIn$i = 'SignIn';
Pub.HtmlDesign._htmlDesignComponentNames._customMarkup$i = 'CustomMarkup';
Pub.HtmlDesign._htmlDesignComponentNames._editModePanelShowInEdit$i = 'EditModePanelShowInEdit';
Pub.HtmlDesign._htmlDesignComponentNames._editModePanelShowInRead$i = 'EditModePanelShowInRead';
Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAuthors$i = 'SecurityTrimmedAuthors';
Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAuthenticated$i = 'SecurityTrimmedAuthenticated';
Pub.HtmlDesign._htmlDesignComponentNames._securityTrimmedAdministrators$i = 'SecurityTrimmedAdministrators';
Pub.HtmlDesign._htmlDesignPageNames._componentConfigureControls$i = SP.Utilities.Utility.getLayoutsPageUrl('ComponentConfigureControls.aspx');
Pub.HtmlDesign._htmlDesignPageNames._componentHome$i = SP.Utilities.Utility.getLayoutsPageUrl('ComponentHome.aspx');
Pub.HtmlDesign._htmlDesignPageNames._webPartEditingSurface$i = SP.Utilities.Utility.getLayoutsPageUrl('WebPartEditingSurface.aspx');
Pub.HtmlDesign._htmlDesignQueryStringConstants._componentName$i = 'ComponentName';
Pub.HtmlDesign._htmlDesignQueryStringConstants._fieldName$i = 'FieldName';
Pub.HtmlDesign._htmlDesignQueryStringConstants._url$i = 'Url';
Pub.HtmlDesign._htmlDesignQueryStringConstants._webPartUrl$i = 'WebPartUrl';
Pub.HtmlDesign.SnippetPageComponent._instance$p = null;
Pub.HtmlDesign.SnippetPageComponent._defaultPageFieldIcon$p = SP.Utilities.Utility.getLayoutsPageUrl('images/pagefields32.png');
Pub.HtmlDesign.SnippetPageComponent._defaultWebPartIcon$p = SP.Utilities.Utility.getLayoutsPageUrl('images/webpart.gif');
Pub.HtmlDesign.HtmlDesignGridView._values$p = {};
Pub.HtmlDesign.HtmlDesignGridView._keys$p = [];
Pub.HtmlDesign.HtmlDesignGridView._arraysize$p = 0;
Pub.HtmlDesign.HtmlDesignGridView.$$cctor();
};
sp_ui_pub_htmldesign_initialize();

ExecuteAndRegisterBeginEndFunctions("sp.ui.pub.htmldesign.js",
    sp_ui_pub_htmldesign_initialize, 
    null,
    function(){

Pub.HtmlDesign.Externs = function Pub_HtmlDesign_Externs() {}
if (typeof(contenttypebuttonlist) != "undefined") Pub.HtmlDesign.Externs.contenttypebuttonlist = contenttypebuttonlist;
if (typeof(pagecontenttypebuttonlist) != "undefined") Pub.HtmlDesign.Externs.pagecontenttypebuttonlist = pagecontenttypebuttonlist;
if (typeof(GetUrlKeyValue) != "undefined") Pub.HtmlDesign.Externs.GetUrlKeyValue = GetUrlKeyValue;
if (typeof(webpartsgallerybuttonlist) != "undefined") Pub.HtmlDesign.Externs.webpartsgallerybuttonlist = webpartsgallerybuttonlist;
if (typeof(mediaandcontentbuttonlist) != "undefined") Pub.HtmlDesign.Externs.mediaandcontentbuttonlist = mediaandcontentbuttonlist;
if (typeof(contentrollupbuttonlist) != "undefined") Pub.HtmlDesign.Externs.contentrollupbuttonlist = contentrollupbuttonlist;
if (typeof(siteelementbuttonlist) != "undefined") Pub.HtmlDesign.Externs.siteelementbuttonlist = siteelementbuttonlist;

ExecuteOrDelayUntilScriptLoaded(Pub.HtmlDesign.SnippetPageComponent.load, "sp.ribbon.js");

if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
    window.setTimeout(Pub.HtmlDesign.StatusAndPreviewClickHandler.load, 0);
}
else
{
    _spBodyOnLoadFunctionNames.push("Pub.HtmlDesign.StatusAndPreviewClickHandler.load");
}

function CopyToClipboard(inputId)
{
    var inputElement = document.getElementById(inputId);
	if (inputElement.createTextRange)
	{
	    var range = inputElement.createTextRange();
		range.select();
		range.execCommand('Copy');
		alert(SP.Publishing.Resources.htmlDesignCopiedToClipboard);
	}
	else
	{
		alert(SP.Publishing.Resources.htmlDesignCantCopyToClipboard);
	}
}
Pub.HtmlDesign.Externs.CopyToClipboard = CopyToClipboard;

    });

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.pub.htmldesign.js");
