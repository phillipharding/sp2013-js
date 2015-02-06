// JScript File


Type.registerNamespace('SP.UI.MySiteCommon');

SP.UI.MySiteCommon.CheckBoxMenuItem = function SP_UI_MySiteCommon_CheckBoxMenuItem(callback) {
    SP.UI.MySiteCommon.CheckBoxMenuItem.initializeBase(this, [ callback ]);
    this.$j_0 = false;
}
SP.UI.MySiteCommon.CheckBoxMenuItem.prototype = {
    
    onInvoke: function SP_UI_MySiteCommon_CheckBoxMenuItem$onInvoke(index, evt) {
        this.$L_1 = !this.$L_1;
        if (!this.$14_1) {
            this.$T_0.$1R_0(evt);
        }
    },
    
    onMenuElementCreated: function SP_UI_MySiteCommon_CheckBoxMenuItem$onMenuElementCreated(element) {
        SP.UI.MySiteCommon.MySiteMenuItem.prototype.onMenuElementCreated.call(this, element);
        element.setAttribute('checked', this.$L_1);
    },
    
    get_checked: function SP_UI_MySiteCommon_CheckBoxMenuItem$get_checked() {
        return this.$L_1;
    },
    set_checked: function SP_UI_MySiteCommon_CheckBoxMenuItem$set_checked(value) {
        this.$L_1 = value;
        return value;
    },
    
    get_closeOnCheck: function SP_UI_MySiteCommon_CheckBoxMenuItem$get_closeOnCheck() {
        return this.$14_1;
    },
    set_closeOnCheck: function SP_UI_MySiteCommon_CheckBoxMenuItem$set_closeOnCheck(value) {
        this.$14_1 = value;
        return value;
    },
    
    $L_1: false,
    $14_1: true
}


SP.UI.MySiteCommon.CommonUIElements = function SP_UI_MySiteCommon_CommonUIElements() {
}
SP.UI.MySiteCommon.CommonUIElements.$C = function SP_UI_MySiteCommon_CommonUIElements$$C($p0, $p1) {
    return ($p1) ? 'ms-hidden' : (($p0) ? 'ms-visibilityHidden' : 'ms-hide');
}
SP.UI.MySiteCommon.CommonUIElements.display = function SP_UI_MySiteCommon_CommonUIElements$display(el) {
    if (el) {
        el.className = el.className.replace(SP.UI.MySiteCommon.CommonUIElements.$C(true, false), '').replace(SP.UI.MySiteCommon.CommonUIElements.$C(false, false), '').trim();
        if (el.tagName.toLowerCase() === 'a') {
            el.tabIndex = 0;
        }
    }
}
SP.UI.MySiteCommon.CommonUIElements.displayForTabbable = function SP_UI_MySiteCommon_CommonUIElements$displayForTabbable(el) {
    if (el) {
        var $v_0 = el.previousSibling;
        var $v_1 = el.parentNode;
        if ($v_1 && $v_0 && $v_0.getAttribute(SP.UI.MySiteCommon.CommonUIElements.$1D) === 'true') {
            $v_1.removeChild($v_0);
        }
        var $v_2 = el.getAttribute(SP.UI.MySiteCommon.CommonUIElements.$b);
        var $v_3 = el.getAttribute(SP.UI.MySiteCommon.CommonUIElements.$a);
        if ($v_2) {
            el.style.width = $v_2;
            el.removeAttribute(SP.UI.MySiteCommon.CommonUIElements.$b);
        }
        if ($v_3) {
            el.style.height = $v_3;
            el.removeAttribute(SP.UI.MySiteCommon.CommonUIElements.$a);
        }
        el.className = el.className.replace(SP.UI.MySiteCommon.CommonUIElements.$C(false, true), '').trim();
    }
}
SP.UI.MySiteCommon.CommonUIElements.setDisplayNone = function SP_UI_MySiteCommon_CommonUIElements$setDisplayNone(takeUpSpace, el) {
    var $v_0 = SP.UI.MySiteCommon.CommonUIElements.$C(takeUpSpace, false);
    if (el && el.className.indexOf($v_0) === -1) {
        el.className += ' ' + $v_0;
        if (el.tagName.toLowerCase() === 'a') {
            el.tabIndex = -1;
        }
    }
}
SP.UI.MySiteCommon.CommonUIElements.setDisplayNoneAndTabbable = function SP_UI_MySiteCommon_CommonUIElements$setDisplayNoneAndTabbable(takeUpSpace, el) {
    var $v_0 = SP.UI.MySiteCommon.CommonUIElements.$C(takeUpSpace, true);
    if (el && el.className.indexOf($v_0) === -1) {
        var $v_1 = false;
        var $v_2 = false;
        var $v_3 = el.style.width;
        var $v_4 = $v_3;
        if (SP.ScriptHelpers.isNullOrEmptyString($v_3) || $v_3 === 'auto') {
            $v_4 = el.clientWidth + 'px';
        }
        else {
            $v_1 = true;
        }
        var $v_5 = el.style.height;
        var $v_6 = $v_5;
        if (SP.ScriptHelpers.isNullOrEmptyString($v_5) || $v_5 === 'auto') {
            $v_6 = el.clientHeight + 'px';
        }
        else {
            $v_2 = true;
        }
        var $v_7 = el.className;
        var $v_8 = el.parentNode;
        el.className += ' ' + $v_0;
        el.style.height = '';
        el.style.width = '';
        if ($v_1) {
            el.setAttribute(SP.UI.MySiteCommon.CommonUIElements.$b, $v_3);
        }
        if ($v_2) {
            el.setAttribute(SP.UI.MySiteCommon.CommonUIElements.$a, $v_5);
        }
        if (takeUpSpace && $v_8) {
            var $v_9 = document.createElement('div');
            $v_9.setAttribute(SP.UI.MySiteCommon.CommonUIElements.$1D, 'true');
            $v_9.style.width = $v_4;
            $v_9.style.height = $v_6;
            $v_9.className = $v_7;
            $v_8.insertBefore($v_9, el);
        }
    }
}
SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden = function SP_UI_MySiteCommon_CommonUIElements$isEntirelyHidden(el) {
    if (!el) {
        return true;
    }
    if (el.className) {
        return (el.className.indexOf(SP.UI.MySiteCommon.CommonUIElements.$C(false, false)) !== -1);
    }
    return false;
}
SP.UI.MySiteCommon.CommonUIElements.displayOrHide = function SP_UI_MySiteCommon_CommonUIElements$displayOrHide(el, shouldDisplay) {
    if (shouldDisplay) {
        SP.UI.MySiteCommon.CommonUIElements.display(el);
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, el);
    }
}
SP.UI.MySiteCommon.CommonUIElements.findElementByID = function SP_UI_MySiteCommon_CommonUIElements$findElementByID(node, id) {
    if (!node || node.id === id) {
        return node;
    }
    var $v_0 = node.childNodes;
    var $v_1 = null;
    if ($v_0) {
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            $v_1 = SP.UI.MySiteCommon.CommonUIElements.findElementByID($v_0[$v_2], id);
            if ($v_1) {
                return $v_1;
            }
        }
    }
    return null;
}
SP.UI.MySiteCommon.CommonUIElements.getValidId = function SP_UI_MySiteCommon_CommonUIElements$getValidId(idWithPlaceholder, accountName) {
    var $v_0 = new RegExp('\\\\', 'g');
    var $v_1 = StAttrQuote(String.format(idWithPlaceholder, accountName.replace($v_0, '_-_')));
    return $v_1.substring(1, $v_1.length - 1);
}
SP.UI.MySiteCommon.CommonUIElements.isSafeURL = function SP_UI_MySiteCommon_CommonUIElements$isSafeURL(potentialLink) {
    if (potentialLink) {
        var $v_0 = potentialLink.toLowerCase();
        if ($v_0.indexOf('javascript:') === -1 && $v_0.indexOf('vbscript:') === -1) {
            return true;
        }
    }
    return false;
}
SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML = function SP_UI_MySiteCommon_CommonUIElements$createSafeAnchorHTML(ID, text, className, hrefValue, additionalAttributes, needsEncoding) {
    var $v_0 = '';
    if (SP.UI.MySiteCommon.CommonUIElements.isSafeURL(hrefValue)) {
        var $v_1 = (needsEncoding) ? STSHtmlEncode(text) : text;
        $v_0 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(ID, className, hrefValue, additionalAttributes) + $v_1 + '</a>';
    }
    else {
        if (needsEncoding) {
            $v_0 = STSHtmlEncode(text);
        }
        else {
            $v_0 = text;
        }
    }
    return $v_0;
}
SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag = function SP_UI_MySiteCommon_CommonUIElements$createAnchorOpenHTMLTag(ID, className, hrefValue, additionalAttributes) {
    var $v_0 = StAttrQuote(hrefValue);
    return SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTagWithAdditionalAttributes('a', ID, className, 'href=' + $v_0 + ' ' + additionalAttributes);
}
SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML = function SP_UI_MySiteCommon_CommonUIElements$createSafeImageHTML(ID, className, srcValue, additionalAttributes) {
    var $v_0 = '';
    var $v_1 = '';
    if (SP.UI.MySiteCommon.CommonUIElements.isSafeURL(srcValue)) {
        $v_1 = StAttrQuote(srcValue);
        $v_0 = '<img id=\"' + ID + '\" class=\"' + className + '\" src=' + $v_1 + ' ' + additionalAttributes + '/>';
    }
    return $v_0;
}
SP.UI.MySiteCommon.CommonUIElements.encodeSafeURL = function SP_UI_MySiteCommon_CommonUIElements$encodeSafeURL(url) {
    if (SP.UI.MySiteCommon.CommonUIElements.isSafeURL(url)) {
        url = StAttrQuote(url);
        return url.substring(1, url.length - 2);
    }
    return '';
}
SP.UI.MySiteCommon.CommonUIElements.get_loadingAnimation = function SP_UI_MySiteCommon_CommonUIElements$get_loadingAnimation() {
    return GetThemedImageUrl('loadingcirclests16.gif');
}
SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder32 = function SP_UI_MySiteCommon_CommonUIElements$get_profileImagePlaceholder32() {
    return GetThemedImageUrl('PersonPlaceholder.32x32x32.png');
}
SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder42 = function SP_UI_MySiteCommon_CommonUIElements$get_profileImagePlaceholder42() {
    return GetThemedImageUrl('PersonPlaceholder.42x42x32.png');
}
SP.UI.MySiteCommon.CommonUIElements.makeImage = function SP_UI_MySiteCommon_CommonUIElements$makeImage(path, id, className, title) {
    return SP.UI.MySiteCommon.CommonUIElements.makeImageWithAltText(path, id, className, title, null);
}
SP.UI.MySiteCommon.CommonUIElements.makeImageAltSameAsTitle = function SP_UI_MySiteCommon_CommonUIElements$makeImageAltSameAsTitle(path, id, className, title) {
    return SP.UI.MySiteCommon.CommonUIElements.makeImageWithAltText(path, id, className, title, title);
}
SP.UI.MySiteCommon.CommonUIElements.makeImageWithAltText = function SP_UI_MySiteCommon_CommonUIElements$makeImageWithAltText(path, id, className, title, alt) {
    var $v_0 = document.createElement('img');
    $v_0.src = path;
    $v_0.id = id;
    $v_0.className = className;
    $v_0.title = (!title) ? '' : title;
    $v_0.alt = (!alt) ? '' : alt;
    return $v_0;
}
SP.UI.MySiteCommon.CommonUIElements.ensureTrailingSlash = function SP_UI_MySiteCommon_CommonUIElements$ensureTrailingSlash(path) {
    if (SP.ScriptHelpers.isNullOrEmptyString(path)) {
        return '';
    }
    else if (!path.endsWith('/')) {
        return path + '/';
    }
    return path;
}
SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag = function SP_UI_MySiteCommon_CommonUIElements$createOpenHTMLTag(tagName, id, className) {
    return SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTagWithAdditionalAttributes(tagName, id, className, '');
}
SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTagWithAdditionalAttributes = function SP_UI_MySiteCommon_CommonUIElements$createOpenHTMLTagWithAdditionalAttributes(tagName, id, className, additionalAttributes) {
    return '<' + tagName + ' id=\"' + id + '\" class=\"' + className + '\" ' + additionalAttributes + '>';
}
SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler = function SP_UI_MySiteCommon_CommonUIElements$makeLinkWithClickHandler(id, className, image, text, title, onclick) {
    var $v_0 = document.createElement('a');
    $v_0.id = id;
    $v_0.className = className;
    SP.UI.MySiteCommon.CommonUIElements.addClickHandlerToAnchorElement($v_0, onclick);
    if (image) {
        $v_0.appendChild(image);
    }
    if (text) {
        $v_0.appendChild(document.createTextNode(text));
    }
    if (title) {
        $v_0.title = title;
    }
    return $v_0;
}
SP.UI.MySiteCommon.CommonUIElements.addClickHandlerToAnchorElement = function SP_UI_MySiteCommon_CommonUIElements$addClickHandlerToAnchorElement(link, onclick) {
    link.href = '#';
    link.setAttribute('onclick', 'return false;');
    if (onclick) {
        $addHandler(link, 'click', onclick);
    }
}
SP.UI.MySiteCommon.CommonUIElements.getCursorPosition = function SP_UI_MySiteCommon_CommonUIElements$getCursorPosition(textArea) {
    if (typeof(textArea.selectionStart) !== 'undefined') {
        return textArea.selectionStart;
    }
    else {
        var $v_0 = document.selection.createRange();
        if (!$v_0) {
            return 0;
        }
        var $v_1 = textArea.createTextRange();
        var $v_2 = $v_1.duplicate();
        $v_1.moveToBookmark($v_0.getBookmark());
        $v_2.setEndPoint('EndToStart', $v_1);
        return $v_2.text.length;
    }
}
SP.UI.MySiteCommon.CommonUIElements.setCursorPosition = function SP_UI_MySiteCommon_CommonUIElements$setCursorPosition(textArea, position) {
    if (typeof(textArea.setSelectionRange) !== 'undefined') {
        textArea.setSelectionRange(position, position);
        textArea.focus();
    }
    else if (typeof(textArea.createTextRange) !== 'undefined') {
        var $v_0 = textArea.createTextRange();
        $v_0.collapse(true);
        $v_0.moveEnd('character', position);
        $v_0.moveStart('character', position);
        $v_0.select();
    }
}
SP.UI.MySiteCommon.CommonUIElements.createLoadingDiv = function SP_UI_MySiteCommon_CommonUIElements$createLoadingDiv(loadingText, ID, className) {
    return SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('div', ID, className) + SP.UI.MySiteCommon.CommonUIElements.createProcessingIconAsHTML(ID + '_image', 'ms-microfeed-loadingImage') + STSHtmlEncode(loadingText) + '</div>';
}
SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon = function SP_UI_MySiteCommon_CommonUIElements$createProcessingIcon(ID, classname) {
    var $v_0 = document.createElement('img');
    $v_0.id = ID;
    $v_0.className = classname;
    $v_0.setAttribute('src', SP.UI.MySiteCommon.CommonUIElements.get_loadingAnimation());
    $v_0.title = '';
    $v_0.setAttribute('alt', '');
    SP.UI.MySiteCommon.CommonUIElements.addProcessingIconClickHandler($v_0);
    return $v_0;
}
SP.UI.MySiteCommon.CommonUIElements.createProcessingIconAsHTML = function SP_UI_MySiteCommon_CommonUIElements$createProcessingIconAsHTML(ID, classname) {
    return '<img src=\"' + SP.UI.MySiteCommon.CommonUIElements.get_loadingAnimation() + '\" id=\"' + ID + '\" class=\"' + classname + '\" title=\"\" alt=\"\"/ onclick=\"SP.UI.MySiteCommon.CommonUIElements.processingIconClickHandler(event);\">';
}
SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv = function SP_UI_MySiteCommon_CommonUIElements$addTechnicalDetailsDiv(parentElement, errorMessage, idSuffix, dialog) {
    if (!idSuffix) {
        idSuffix = '';
    }
    var $v_0 = document.createElement('div');
    $v_0.id = 'ms-errorDetailsDiv' + idSuffix;
    $v_0.setAttribute('style', 'margin-bottom: 15px;');
    var $v_1 = document.createElement('div');
    $v_1.id = 'ms-errorDetailsLinkDiv' + idSuffix;
    var $v_2 = document.createElement('div');
    $v_2.id = 'ms-errorDetailsText' + idSuffix;
    $v_2.className = 'ms-hide ms-descriptiontext';
    $v_2.setAttribute('style', 'margin-bottom: 15px;');
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, errorMessage);
    var $v_3 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler('ms-errorDetailsLink', 'ms-commandLink', null, SpsClient.ScriptResources.technicalDetails, null, function($p1_0) {
        SP.UI.MySiteCommon.CommonUIElements.$1b($v_2, dialog);
    });
    $v_1.appendChild($v_3);
    $v_0.appendChild($v_1);
    $v_0.appendChild($v_2);
    parentElement.appendChild($v_0);
}
SP.UI.MySiteCommon.CommonUIElements.$1b = function SP_UI_MySiteCommon_CommonUIElements$$1b($p0, $p1) {
    if ($p0) {
        if (SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($p0)) {
            SetOpacity($p0, 0);
            SP.UI.MySiteCommon.CommonUIElements.display($p0);
            SPAnimationUtility.BasicAnimator.FadeIn($p0, null, null);
        }
        else {
            SPAnimationUtility.BasicAnimator.FadeOut($p0, function() {
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p0);
            }, null);
        }
    }
    if ($p1) {
        $p1.autoSize();
    }
}
SP.UI.MySiteCommon.CommonUIElements.addProcessingIconClickHandler = function SP_UI_MySiteCommon_CommonUIElements$addProcessingIconClickHandler(progressSpinner) {
    $addHandler(progressSpinner, 'click', SP.UI.MySiteCommon.CommonUIElements.processingIconClickHandler);
}
SP.UI.MySiteCommon.CommonUIElements.removeProcessingIconClickHandlerAndDisplay = function SP_UI_MySiteCommon_CommonUIElements$removeProcessingIconClickHandlerAndDisplay(progressSpinner) {
    $removeHandler(progressSpinner, 'click', SP.UI.MySiteCommon.CommonUIElements.processingIconClickHandler);
    SP.UI.MySiteCommon.CommonUIElements.display(progressSpinner);
}
SP.UI.MySiteCommon.CommonUIElements.processingIconClickHandler = function SP_UI_MySiteCommon_CommonUIElements$processingIconClickHandler(e) {
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, e.target);
}
SP.UI.MySiteCommon.CommonUIElements.displaySimpleErrorDialog = function SP_UI_MySiteCommon_CommonUIElements$displaySimpleErrorDialog(exceptionText) {
    var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, SpsClient.ScriptResources.failedToLoadPageErrorMessage);
    $v_0.$B_0 = SpsClient.ScriptResources.closeButtonText;
    $v_0.$A_0 = true;
    $v_0.$O_0 = exceptionText;
    $v_0.show();
}
SP.UI.MySiteCommon.CommonUIElements.setElementText = function SP_UI_MySiteCommon_CommonUIElements$setElementText(element, text) {
    if (element) {
        element.innerHTML = STSHtmlEncode(text);
    }
}


SP.UI.MySiteCommon.PresenceManager = function SP_UI_MySiteCommon_PresenceManager() {
    this.$6_0 = new ContextInfo();
    this.$6_0.Templates = {};
    this.$6_0.Templates['Fields'] = {};
    this.$7_0 = {};
    var $v_0 = [];
    var $v_1 = {};
    $v_1['Name'] = 'PeoplePresence';
    $v_1['FieldType'] = 'User';
    $v_1['HasUserLink'] = '1';
    $v_1['Type'] = 'User';
    $v_1['PictureOnly'] = '1';
    $v_1['PictureSize'] = 'Size_48px';
    Array.add($v_0, $v_1);
    this.$7_0['Field'] = $v_0;
    this.$7_0['EffectivePresenceEnabled'] = '1';
    this.$7_0['UserDispUrl'] = 'person.aspx';
    this.$7_0['UserDispParam'] = 'accountname';
}
SP.UI.MySiteCommon.PresenceManager.get_$G = function SP_UI_MySiteCommon_PresenceManager$get_$G() {
    if (!SP.UI.MySiteCommon.PresenceManager.$5) {
        SP.UI.MySiteCommon.PresenceManager.$5 = new SP.UI.MySiteCommon.PresenceManager();
    }
    return SP.UI.MySiteCommon.PresenceManager.$5;
}
SP.UI.MySiteCommon.PresenceManager.isPresenceJSLoaded = function SP_UI_MySiteCommon_PresenceManager$isPresenceJSLoaded() {
    return SP.UI.MySiteCommon.PresenceManager.get_$G().$1P_0;
}
SP.UI.MySiteCommon.PresenceManager.ensurePresenceJSLoaded = function SP_UI_MySiteCommon_PresenceManager$ensurePresenceJSLoaded(callback) {
    SP.SOD.executeFunc('clienttemplates.js', 'spMgr.RenderFieldByName', function() {
        SP.UI.MySiteCommon.PresenceManager.get_$G().$1P_0 = true;
        callback();
    });
}
SP.UI.MySiteCommon.PresenceManager.drawLyncUserImage = function SP_UI_MySiteCommon_PresenceManager$drawLyncUserImage(UserImage, accountName, displayName, pictureUrl, profileUrl, email, jobTitle, useSmallImage, imageonly) {
    UserImage.innerHTML = SP.UI.MySiteCommon.PresenceManager.getUserImageInnerHTML(accountName, displayName, pictureUrl, profileUrl, email, jobTitle, useSmallImage, imageonly);
}
SP.UI.MySiteCommon.PresenceManager.getUserImageInnerHTML = function SP_UI_MySiteCommon_PresenceManager$getUserImageInnerHTML(accountName, displayName, pictureUrl, profileUrl, email, jobTitle, useSmallImage, imageonly) {
    var $v_0 = (SP.UI.MySiteCommon.PresenceManager.get_$G().$7_0['Field'])[0];
    var $v_1 = $v_0['Name'];
    var $v_2 = {};
    var $v_3 = [];
    var $v_4 = {};
    $v_4['accountname'] = accountName;
    $v_4['title'] = displayName;
    $v_4['picture'] = pictureUrl;
    $v_4['email'] = email;
    $v_4['jobTitle'] = jobTitle;
    $v_4['department'] = '';
    Array.add($v_3, $v_4);
    $v_2[$v_1] = $v_3;
    if (imageonly) {
        $v_0['PictureOnly'] = '1';
        delete $v_0.WithPictureDetail;
    }
    else {
        $v_0['PictureOnly'] = '0';
        $v_0['WithPictureDetail'] = '1';
    }
    if (useSmallImage) {
        $v_0['PictureSize'] = 'Size_36px';
    }
    else {
        $v_0['PictureSize'] = 'Size_48px';
    }
    if (profileUrl) {
        var $v_5 = profileUrl.indexOf('?');
        SP.UI.MySiteCommon.PresenceManager.get_$G().$7_0['UserDispUrl'] = ($v_5 > 0) ? profileUrl.substring(0, $v_5) : profileUrl;
    }
    return spMgr.RenderFieldByName(SP.UI.MySiteCommon.PresenceManager.get_$G().$6_0, $v_1, $v_2, SP.UI.MySiteCommon.PresenceManager.get_$G().$7_0);
}
SP.UI.MySiteCommon.PresenceManager.prototype = {
    $6_0: null,
    $7_0: null,
    $1P_0: false
}


SP.UI.MySiteCommon.MySiteDialog = function SP_UI_MySiteCommon_MySiteDialog(title, message) {
    this.$u_0 = title;
    this.$S_0 = message;
    this.$P_0 = false;
    this.$A_0 = false;
    this.$o_0 = false;
}
SP.UI.MySiteCommon.MySiteDialog.prototype = {
    
    show: function SP_UI_MySiteCommon_MySiteDialog$show() {
        var $v_0 = null;
        var $v_1 = document.createElement('div');
        $v_1.id = 'ms-errorDialogDiv';
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$S_0)) {
            var $v_2 = document.createElement('div');
            $v_2.id = 'ms-errorMessageDiv';
            $v_2.setAttribute('style', 'margin-bottom: 15px;');
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, this.$S_0);
            $v_1.appendChild($v_2);
        }
        if (this.$p_0) {
            var $v_3 = document.createElement('div');
            $v_3.id = 'ms-errorExtraMessageDiv';
            $v_3.setAttribute('style', 'margin-bottom: 15px;');
            $v_3.appendChild(this.$p_0);
            $v_1.appendChild($v_3);
        }
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$O_0)) {
            SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv($v_1, this.$O_0, '_dialog', this.$Y_0);
        }
        if (!this.$P_0 || !this.$A_0) {
            var $v_4 = document.createElement('div');
            $v_4.id = 'ms-errorButtons';
            $v_4.className = 'ms-alignRight';
            if (!this.$P_0) {
                $v_0 = document.createElement('button');
                $v_0.id = 'ms-errorOkButton';
                $v_0.className = 'ms-ButtonHeightWidth';
                if (SP.ScriptHelpers.isNullOrEmptyString(this.$B_0)) {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, SpsClient.ScriptResources.okButtonText);
                }
                else {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, this.$B_0);
                }
                var $$t_9 = this;
                $addHandler($v_0, 'click', function($p1_0) {
                    if ($$t_9.$F_0) {
                        $$t_9.$F_0();
                    }
                    if (!$$t_9.$o_0) {
                        SP.UI.ModalDialog.commonModalDialogClose(1, null);
                    }
                    $$t_9.$Y_0 = null;
                });
                $v_4.appendChild($v_0);
            }
            if (!this.$A_0) {
                var $v_5 = document.createElement('button');
                $v_5.id = 'ms-errorCancelButton';
                $v_5.className = 'ms-ButtonHeightWidth';
                if (SP.ScriptHelpers.isNullOrEmptyString(this.$K_0)) {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_5, SpsClient.ScriptResources.cancelButtonText);
                }
                else {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_5, this.$K_0);
                }
                var $$t_A = this;
                $addHandler($v_5, 'click', function($p1_0) {
                    if ($$t_A.$i_0) {
                        $$t_A.$i_0();
                    }
                    SP.UI.ModalDialog.commonModalDialogClose(0, null);
                    $$t_A.$Y_0 = null;
                });
                $v_4.appendChild($v_5);
            }
            $v_1.appendChild($v_4);
        }
        var $$t_B = this;
        SP.SOD.executeFunc('SP.UI.Dialog.js', 'SP.UI.ModalDialog.showModalDialog', function() {
            var $v_6 = new SP.UI.DialogOptions();
            $v_6.title = $$t_B.$u_0;
            $v_6.html = $v_1;
            $v_6.autoSize = true;
            $$t_B.$Y_0 = SP.UI.ModalDialog.showModalDialog($v_6);
            if ($$t_B.$e_0) {
                $$t_B.$e_0();
            }
            else if ($v_0) {
                $v_0.focus();
            }
        });
    },
    
    get_title: function SP_UI_MySiteCommon_MySiteDialog$get_title() {
        return this.$u_0;
    },
    set_title: function SP_UI_MySiteCommon_MySiteDialog$set_title(value) {
        this.$u_0 = value;
        return value;
    },
    
    get_message: function SP_UI_MySiteCommon_MySiteDialog$get_message() {
        return this.$S_0;
    },
    set_message: function SP_UI_MySiteCommon_MySiteDialog$set_message(value) {
        this.$S_0 = value;
        return value;
    },
    
    get_errorMessage: function SP_UI_MySiteCommon_MySiteDialog$get_errorMessage() {
        return this.$O_0;
    },
    set_errorMessage: function SP_UI_MySiteCommon_MySiteDialog$set_errorMessage(value) {
        this.$O_0 = value;
        return value;
    },
    
    get_extraMessage: function SP_UI_MySiteCommon_MySiteDialog$get_extraMessage() {
        return this.$p_0;
    },
    set_extraMessage: function SP_UI_MySiteCommon_MySiteDialog$set_extraMessage(value) {
        this.$p_0 = value;
        return value;
    },
    
    get_okButtonText: function SP_UI_MySiteCommon_MySiteDialog$get_okButtonText() {
        return this.$B_0;
    },
    set_okButtonText: function SP_UI_MySiteCommon_MySiteDialog$set_okButtonText(value) {
        this.$B_0 = value;
        return value;
    },
    
    get_okButtonCallback: function SP_UI_MySiteCommon_MySiteDialog$get_okButtonCallback() {
        return this.$F_0;
    },
    set_okButtonCallback: function SP_UI_MySiteCommon_MySiteDialog$set_okButtonCallback(value) {
        this.$F_0 = value;
        return value;
    },
    
    get_cancelButtonText: function SP_UI_MySiteCommon_MySiteDialog$get_cancelButtonText() {
        return this.$K_0;
    },
    set_cancelButtonText: function SP_UI_MySiteCommon_MySiteDialog$set_cancelButtonText(value) {
        this.$K_0 = value;
        return value;
    },
    
    get_cancelButtonCallback: function SP_UI_MySiteCommon_MySiteDialog$get_cancelButtonCallback() {
        return this.$i_0;
    },
    set_cancelButtonCallback: function SP_UI_MySiteCommon_MySiteDialog$set_cancelButtonCallback(value) {
        this.$i_0 = value;
        return value;
    },
    
    get_afterDisplayCallback: function SP_UI_MySiteCommon_MySiteDialog$get_afterDisplayCallback() {
        return this.$e_0;
    },
    set_afterDisplayCallback: function SP_UI_MySiteCommon_MySiteDialog$set_afterDisplayCallback(value) {
        this.$e_0 = value;
        return value;
    },
    
    get_hideOkButton: function SP_UI_MySiteCommon_MySiteDialog$get_hideOkButton() {
        return this.$P_0;
    },
    set_hideOkButton: function SP_UI_MySiteCommon_MySiteDialog$set_hideOkButton(value) {
        this.$P_0 = value;
        return value;
    },
    
    get_hideCancelButton: function SP_UI_MySiteCommon_MySiteDialog$get_hideCancelButton() {
        return this.$A_0;
    },
    set_hideCancelButton: function SP_UI_MySiteCommon_MySiteDialog$set_hideCancelButton(value) {
        this.$A_0 = value;
        return value;
    },
    
    get_delayClose: function SP_UI_MySiteCommon_MySiteDialog$get_delayClose() {
        return this.$o_0;
    },
    set_delayClose: function SP_UI_MySiteCommon_MySiteDialog$set_delayClose(value) {
        this.$o_0 = value;
        return value;
    },
    
    $Y_0: null,
    $u_0: null,
    $S_0: null,
    $O_0: null,
    $p_0: null,
    $B_0: null,
    $F_0: null,
    $K_0: null,
    $i_0: null,
    $e_0: null,
    $P_0: false,
    $A_0: false,
    $o_0: false
}


SP.UI.MySiteCommon.MySiteMenu = function SP_UI_MySiteCommon_MySiteMenu(ID) {
    this.$$d__OnClick = Function.createDelegate(this, this._OnClick);
    this.$2_0 = ID;
    SP.UI.MySiteCommon.MySiteMenu.$1E[ID] = this;
    this.$4_0 = [];
}
SP.UI.MySiteCommon.MySiteMenu.onMenuClickCallback = function SP_UI_MySiteCommon_MySiteMenu$onMenuClickCallback(ID, index) {
    var $v_0 = SP.UI.MySiteCommon.MySiteMenu.$1E[ID];
    if ($v_0.$I_0(index)) {
        var $v_1 = $v_0.$4_0[index];
        if ($v_1.$D_0) {
            $v_1.$1W_0();
        }
    }
}
SP.UI.MySiteCommon.MySiteMenu.onMySiteMenuKeyDown = function SP_UI_MySiteCommon_MySiteMenu$onMySiteMenuKeyDown(ID, e) {
    if (e) {
        var $v_0 = $get('ms-mysitemenu-menu_' + ID);
        if ($v_0) {
            var $v_1 = $v_0.getElementsByTagName('DIV')[0];
            if ($v_1) {
                if (e.keyCode === 27) {
                    $v_0.removeChild($v_1);
                }
                else if (e.keyCode === 9) {
                    NavigateToMenu($v_0);
                }
            }
        }
    }
}
SP.UI.MySiteCommon.MySiteMenu.prototype = {
    
    add: function SP_UI_MySiteCommon_MySiteMenu$add(text, description, imageSource, imageAltText, callback) {
        var $v_0 = new SP.UI.MySiteCommon.MySiteMenuItem(callback);
        $v_0.set_text(text);
        $v_0.set_description(description);
        $v_0.set_imageSource(imageSource);
        $v_0.set_imageAltText(imageAltText);
        return this.appendMenuItem($v_0);
    },
    
    appendMenuItem: function SP_UI_MySiteCommon_MySiteMenu$appendMenuItem(item) {
        var $v_0 = this.get_menuCount();
        if (!$v_0) {
            this.$U_0 = item.get_text();
        }
        item.set_$11_0(this.$2_0 + '_item_' + $v_0);
        item.$Q_0 = $v_0;
        item.$T_0 = this;
        this.$4_0[$v_0] = item;
        return $v_0;
    },
    
    updateMySiteMenuItemByName: function SP_UI_MySiteCommon_MySiteMenu$updateMySiteMenuItemByName(name, newName, newCallback) {
        var $v_0 = this.getMenuIndexFromName(name);
        var $v_1 = null;
        if ($v_0 === -1) {
            return;
        }
        else {
            $v_1 = ((this.$4_0[$v_0]));
            $v_1.set_text(newName);
            $v_1.$1Y_0(newCallback);
            this.$4_0[$v_0] = $v_1;
        }
    },
    
    clear: function SP_UI_MySiteCommon_MySiteMenu$clear() {
        this.$4_0 = [];
        this.$R_0 = 0;
    },
    
    getMenuIndexFromName: function SP_UI_MySiteCommon_MySiteMenu$getMenuIndexFromName(name) {
        for (var $v_0 = 0; $v_0 < this.get_menuCount(); $v_0++) {
            if (name === ((this.$4_0[$v_0])).get_text()) {
                return $v_0;
            }
        }
        return -1;
    },
    
    getNameFromMenuIndex: function SP_UI_MySiteCommon_MySiteMenu$getNameFromMenuIndex(index) {
        if (!this.$I_0(index)) {
            return null;
        }
        return ((this.$4_0[index])).get_text();
    },
    
    getIDFromMenuIndex: function SP_UI_MySiteCommon_MySiteMenu$getIDFromMenuIndex(index) {
        if (!this.$I_0(index)) {
            return null;
        }
        return 'ms-mysitemenu-menu_Item_' + ((this.$4_0[index])).get_$11_0();
    },
    
    setEnabledItem: function SP_UI_MySiteCommon_MySiteMenu$setEnabledItem(index, value) {
        if (!this.$I_0(index)) {
            return;
        }
        ((this.$4_0[index])).$D_0 = value;
    },
    
    setStyles: function SP_UI_MySiteCommon_MySiteMenu$setStyles() {
        this.$m_0 = 'ms-mysitemenu-control';
        this.$l_0 = 'ms-mysitemenu-image';
        this.$k_0 = 'ms-mysitemenu-link';
        this.set_controlElementType('h2');
    },
    
    setSelection: function SP_UI_MySiteCommon_MySiteMenu$setSelection(index) {
        if (this.$R_0 !== index && this.$I_0(index)) {
            this.set_text(((this.$4_0[index])).get_text());
            var $v_0 = $get('ms-mysitemenu-control_Link_' + this.$2_0);
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, this.get_text());
            this.$1G_0($v_0);
            this.$R_0 = index;
            return true;
        }
        return false;
    },
    
    render: function SP_UI_MySiteCommon_MySiteMenu$render() {
        this.setStyles();
        var $v_0 = document.createElement('span');
        $v_0.id = 'ms-mysitemenu-control_' + this.$2_0;
        $v_0.className = this.$m_0;
        var $v_1 = document.createElement(this.get_controlElementType());
        var $v_2 = document.createElement('a');
        $v_2.id = 'ms-mysitemenu-control_Link_' + this.$2_0;
        $v_2.className = this.$k_0;
        $v_2.setAttribute('href', 'javascript:;');
        $v_2.setAttribute('onclick', 'return false;');
        $v_2.setAttribute('onkeydown', 'javascript:SP.UI.MySiteCommon.MySiteMenu.onMySiteMenuKeyDown(\'' + this.$2_0 + '\', event);');
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, this.get_text());
        this.$1G_0($v_2);
        var $v_3 = document.createElement('div');
        $v_3.id = 'ms-mysitemenu-menu_' + this.$2_0;
        $v_3.className = this.$18_0;
        $v_3.style.visibility = 'hidden';
        $v_3.setAttribute('hideicons', this.$16_0);
        $addHandler($v_0, 'click', this.$$d__OnClick);
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        $v_0.appendChild($v_3);
        return $v_0;
    },
    
    $1R_0: function SP_UI_MySiteCommon_MySiteMenu$$1R_0($p0) {
        if ($p0) {
            $p0.preventDefault();
        }
        if (this.$t_0) {
            this.$t_0();
        }
        var $v_0 = SP.UI.Menu.create('ms-mysitemenu-menu_' + this.$2_0);
        for (var $v_2 = 0; $v_2 < this.get_menuCount(); $v_2++) {
            var $v_3 = (this.$4_0[$v_2]);
            $v_3.$1U_0($v_0, this.$2_0, 'ms-mysitemenu-menu_Item_' + $v_3.get_$11_0());
        }
        var $v_1 = $get('ms-mysitemenu-menu_' + this.$2_0);
        var $$t_5 = this;
        window.setTimeout(function() {
            $v_0.showFilterMenu($v_1, false, false, 0, $$t_5.$1A_0, $$t_5.$19_0);
        }, 0);
    },
    
    _OnClick: function SP_UI_MySiteCommon_MySiteMenu$_OnClick(e) {
        var $v_0 = $get('ms-mysitemenu-menu_' + this.$2_0);
        if ($v_0) {
            var $v_1 = $v_0.getElementsByTagName('DIV')[0];
            if ($v_1) {
                $v_0.removeChild($v_1);
            }
            else {
                this.$1R_0(e);
            }
        }
    },
    
    $I_0: function SP_UI_MySiteCommon_MySiteMenu$$I_0($p0) {
        return (0 <= $p0) && (this.get_menuCount() > $p0);
    },
    
    $1G_0: function SP_UI_MySiteCommon_MySiteMenu$$1G_0($p0) {
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$r_0)) {
            var $v_0 = document.createElement('img');
            $v_0.id = 'ms-mysitemenu-control_Image_' + this.$2_0;
            $v_0.className = this.$l_0;
            $v_0.setAttribute('src', this.$r_0);
            $v_0.title = this.$E_0;
            $v_0.setAttribute('alt', this.$E_0);
            if (SP.ScriptHelpers.isNullOrEmptyString(this.$q_0)) {
                $p0.appendChild($v_0);
            }
            else {
                var $v_1 = document.createElement('span');
                $v_1.id = 'ms-mysitemenu-control_ImageParent_' + this.$2_0;
                $v_1.className = this.$q_0;
                $v_1.appendChild($v_0);
                $p0.appendChild($v_1);
            }
        }
        else {
            var $v_2 = document.createElement('span');
            $v_2.setAttribute('style', 'margin-left:7px; height:' + 4 + 'px;width:' + 7 + 'px; position:relative; display:inline-block; overflow:hidden;');
            $v_2.className = 's4-clust ms-viewselector-arrow ms-menu-stdarw';
            var $v_3 = document.createElement('img');
            $v_3.setAttribute('src', '/_layouts/15/images/fgimg.png?rev=23');
            $v_3.setAttribute('style', 'border-width:0px; position:absolute; left:-' + 0 + 'px !important; top:-' + 262 + 'px !important;');
            $v_3.title = this.$E_0;
            $v_3.setAttribute('alt', this.$E_0);
            $v_2.appendChild($v_3);
            $p0.appendChild($v_2);
        }
    },
    
    get_textOverride: function SP_UI_MySiteCommon_MySiteMenu$get_textOverride() {
        return this.$V_0;
    },
    set_textOverride: function SP_UI_MySiteCommon_MySiteMenu$set_textOverride(value) {
        this.$V_0 = value;
        return value;
    },
    
    get_imageSourceOverride: function SP_UI_MySiteCommon_MySiteMenu$get_imageSourceOverride() {
        return this.$r_0;
    },
    set_imageSourceOverride: function SP_UI_MySiteCommon_MySiteMenu$set_imageSourceOverride(value) {
        this.$r_0 = value;
        return value;
    },
    
    get_imageParentClassOverride: function SP_UI_MySiteCommon_MySiteMenu$get_imageParentClassOverride() {
        return this.$q_0;
    },
    set_imageParentClassOverride: function SP_UI_MySiteCommon_MySiteMenu$set_imageParentClassOverride(value) {
        this.$q_0 = value;
        return value;
    },
    
    get_imageTitleText: function SP_UI_MySiteCommon_MySiteMenu$get_imageTitleText() {
        return this.$E_0;
    },
    set_imageTitleText: function SP_UI_MySiteCommon_MySiteMenu$set_imageTitleText(value) {
        this.$E_0 = value;
        return value;
    },
    
    get_menuCount: function SP_UI_MySiteCommon_MySiteMenu$get_menuCount() {
        return this.$4_0.length;
    },
    
    get_selectedIndex: function SP_UI_MySiteCommon_MySiteMenu$get_selectedIndex() {
        return this.$R_0;
    },
    set_selectedIndex: function SP_UI_MySiteCommon_MySiteMenu$set_selectedIndex(value) {
        this.$R_0 = value;
        return value;
    },
    
    get_showCheckBoxes: function SP_UI_MySiteCommon_MySiteMenu$get_showCheckBoxes() {
        return this.$19_0;
    },
    set_showCheckBoxes: function SP_UI_MySiteCommon_MySiteMenu$set_showCheckBoxes(value) {
        this.$19_0 = value;
        return value;
    },
    
    get_showCloseButton: function SP_UI_MySiteCommon_MySiteMenu$get_showCloseButton() {
        return this.$1A_0;
    },
    set_showCloseButton: function SP_UI_MySiteCommon_MySiteMenu$set_showCloseButton(value) {
        this.$1A_0 = value;
        return value;
    },
    
    get_hideIcons: function SP_UI_MySiteCommon_MySiteMenu$get_hideIcons() {
        return this.$16_0;
    },
    set_hideIcons: function SP_UI_MySiteCommon_MySiteMenu$set_hideIcons(value) {
        this.$16_0 = value;
        return value;
    },
    
    get_text: function SP_UI_MySiteCommon_MySiteMenu$get_text() {
        if ('EMPTY_STRING_A2BF7E95-82D5-4055-8451-B0B86C4E973E' === this.$V_0) {
            return '';
        }
        else {
            return (!this.$V_0) ? this.$U_0 : this.$V_0;
        }
    },
    set_text: function SP_UI_MySiteCommon_MySiteMenu$set_text(value) {
        if (!value) {
            value = '';
        }
        this.$U_0 = value;
        return value;
    },
    
    get_controlStyle: function SP_UI_MySiteCommon_MySiteMenu$get_controlStyle() {
        return this.$m_0;
    },
    set_controlStyle: function SP_UI_MySiteCommon_MySiteMenu$set_controlStyle(value) {
        this.$m_0 = value;
        return value;
    },
    
    get_controlHeaderStyle: function SP_UI_MySiteCommon_MySiteMenu$get_controlHeaderStyle() {
        return this.$k_0;
    },
    set_controlHeaderStyle: function SP_UI_MySiteCommon_MySiteMenu$set_controlHeaderStyle(value) {
        this.$k_0 = value;
        return value;
    },
    
    get_controlImageStyle: function SP_UI_MySiteCommon_MySiteMenu$get_controlImageStyle() {
        return this.$l_0;
    },
    set_controlImageStyle: function SP_UI_MySiteCommon_MySiteMenu$set_controlImageStyle(value) {
        this.$l_0 = value;
        return value;
    },
    
    get_menuStyle: function SP_UI_MySiteCommon_MySiteMenu$get_menuStyle() {
        return this.$18_0;
    },
    set_menuStyle: function SP_UI_MySiteCommon_MySiteMenu$set_menuStyle(value) {
        this.$18_0 = value;
        return value;
    },
    
    get_controlElementType: function SP_UI_MySiteCommon_MySiteMenu$get_controlElementType() {
        return this.$15_0;
    },
    set_controlElementType: function SP_UI_MySiteCommon_MySiteMenu$set_controlElementType(value) {
        if (SP.ScriptHelpers.isNullOrEmptyString(value)) {
            this.$15_0 = 'div';
        }
        else {
            this.$15_0 = value;
        }
        return value;
    },
    
    get_id: function SP_UI_MySiteCommon_MySiteMenu$get_id() {
        return this.$2_0;
    },
    
    get_openedCallback: function SP_UI_MySiteCommon_MySiteMenu$get_openedCallback() {
        return this.$t_0;
    },
    set_openedCallback: function SP_UI_MySiteCommon_MySiteMenu$set_openedCallback(value) {
        this.$t_0 = value;
        return value;
    },
    
    $m_0: null,
    $l_0: null,
    $k_0: null,
    $18_0: null,
    $15_0: null,
    $2_0: '',
    $U_0: '',
    $V_0: '',
    $r_0: '',
    $q_0: '',
    $E_0: '',
    $R_0: 0,
    $4_0: null,
    $1A_0: false,
    $19_0: false,
    $16_0: false,
    $t_0: null
}


SP.UI.MySiteCommon.MySiteMenuItem = function SP_UI_MySiteCommon_MySiteMenuItem(callback) {
    this.$13_0 = callback;
}
SP.UI.MySiteCommon.MySiteMenuItem.prototype = {
    
    $1W_0: function SP_UI_MySiteCommon_MySiteMenuItem$$1W_0() {
        if (this.$D_0) {
            if (this.$j_0) {
                this.$T_0.setSelection(this.$Q_0);
            }
            this.onInvoke(this.$Q_0, null);
            this.$13_0(this.$Q_0);
        }
    },
    
    $1U_0: function SP_UI_MySiteCommon_MySiteMenuItem$$1U_0($p0, $p1, $p2) {
        var $v_0 = this.createMenuOption($p0, $p1, $p2);
        this.onMenuElementCreated($v_0);
    },
    
    createMenuOption: function SP_UI_MySiteCommon_MySiteMenuItem$createMenuOption(menu, menuId, itemElementId) {
        return menu.addMenuItem(this.get_text(), SP.UI.MySiteCommon.MySiteMenu.$1M + '(\'' + menuId + '\', ' + this.$Q_0 + ');', this.get_imageSource(), this.get_imageAltText(), 100, this.get_description(), itemElementId);
    },
    
    onMenuElementCreated: function SP_UI_MySiteCommon_MySiteMenuItem$onMenuElementCreated(element) {
        element.setAttribute('enabled', this.$D_0);
        element.setAttribute('isindented', this.$17_0);
    },
    
    onInvoke: function SP_UI_MySiteCommon_MySiteMenuItem$onInvoke(index, evt) {
    },
    
    get_$11_0: function SP_UI_MySiteCommon_MySiteMenuItem$get_$11_0() {
        return this.$2_0;
    },
    set_$11_0: function SP_UI_MySiteCommon_MySiteMenuItem$set_$11_0($p0) {
        if (!$p0) {
            $p0 = '';
        }
        this.$2_0 = $p0;
        return $p0;
    },
    
    get_parent: function SP_UI_MySiteCommon_MySiteMenuItem$get_parent() {
        return this.$T_0;
    },
    set_parent: function SP_UI_MySiteCommon_MySiteMenuItem$set_parent(value) {
        this.$T_0 = value;
        return value;
    },
    
    get_text: function SP_UI_MySiteCommon_MySiteMenuItem$get_text() {
        return this.$U_0;
    },
    set_text: function SP_UI_MySiteCommon_MySiteMenuItem$set_text(value) {
        if (!value) {
            value = '';
        }
        this.$U_0 = value;
        return value;
    },
    
    get_description: function SP_UI_MySiteCommon_MySiteMenuItem$get_description() {
        return this.$1I_0;
    },
    set_description: function SP_UI_MySiteCommon_MySiteMenuItem$set_description(value) {
        if (!value) {
            value = '';
        }
        this.$1I_0 = value;
        return value;
    },
    
    get_imageSource: function SP_UI_MySiteCommon_MySiteMenuItem$get_imageSource() {
        return this.$1K_0;
    },
    set_imageSource: function SP_UI_MySiteCommon_MySiteMenuItem$set_imageSource(value) {
        if (!value) {
            value = '';
        }
        this.$1K_0 = value;
        return value;
    },
    
    get_imageAltText: function SP_UI_MySiteCommon_MySiteMenuItem$get_imageAltText() {
        return this.$1J_0;
    },
    set_imageAltText: function SP_UI_MySiteCommon_MySiteMenuItem$set_imageAltText(value) {
        if (!value) {
            value = '';
        }
        this.$1J_0 = value;
        return value;
    },
    
    get_enabled: function SP_UI_MySiteCommon_MySiteMenuItem$get_enabled() {
        return this.$D_0;
    },
    set_enabled: function SP_UI_MySiteCommon_MySiteMenuItem$set_enabled(value) {
        this.$D_0 = value;
        return value;
    },
    
    $1Y_0: function SP_UI_MySiteCommon_MySiteMenuItem$$1Y_0($p0) {
        this.$13_0 = $p0;
    },
    
    get_changeHeader: function SP_UI_MySiteCommon_MySiteMenuItem$get_changeHeader() {
        return this.$j_0;
    },
    set_changeHeader: function SP_UI_MySiteCommon_MySiteMenuItem$set_changeHeader(value) {
        this.$j_0 = value;
        return value;
    },
    
    get_isIndented: function SP_UI_MySiteCommon_MySiteMenuItem$get_isIndented() {
        return this.$17_0;
    },
    set_isIndented: function SP_UI_MySiteCommon_MySiteMenuItem$set_isIndented(value) {
        this.$17_0 = value;
        return value;
    },
    
    $2_0: '',
    $Q_0: 0,
    $T_0: null,
    $U_0: '',
    $1I_0: '',
    $1K_0: '',
    $1J_0: '',
    $D_0: true,
    $13_0: null,
    $j_0: true,
    $17_0: false
}


SP.UI.MySiteCommon.MySitePrivacyIcon = function SP_UI_MySiteCommon_MySitePrivacyIcon(sID, sTooltip, sEditLink) {
    this.$2_0 = sID;
    this.$1L_0 = sTooltip;
    this.$N_0 = sEditLink;
}
SP.UI.MySiteCommon.MySitePrivacyIcon.prototype = {
    
    render: function SP_UI_MySiteCommon_MySitePrivacyIcon$render() {
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$N_0)) {
            this.$N_0 = SP.Utilities.UrlBuilder.replaceOrAddQueryString(this.$N_0, 'Section', 'Preferences');
            return '<a href=\"' + this.$N_0 + '\" id=\"' + SP.UI.MySiteCommon.MySitePrivacyIcon.$1F + this.$2_0 + '\" title=\"' + this.$1L_0 + '\">' + '<span style=\"height:17px;width:17px;position:relative;display:inline-block;overflow:hidden;\"><img src=\"/_layouts/15/images/spcommon.png?rev=23\" style=\"left:-160px !important;top:-177px !important;position:absolute;\"/></span>' + '</a>';
        }
        else {
            return '<span style=\"height:17px;width:17px;position:relative;display:inline-block;overflow:hidden;\"><img src=\"/_layouts/15/images/spcommon.png?rev=23\" style=\"left:-160px !important;top:-177px !important;position:absolute;\"/></span>';
        }
    },
    
    $2_0: '',
    $1L_0: '',
    $N_0: ''
}


SP.UI.MySiteCommon.SeparatorMenuItem = function SP_UI_MySiteCommon_SeparatorMenuItem() {
    SP.UI.MySiteCommon.SeparatorMenuItem.initializeBase(this, [ null ]);
}
SP.UI.MySiteCommon.SeparatorMenuItem.prototype = {
    
    createMenuOption: function SP_UI_MySiteCommon_SeparatorMenuItem$createMenuOption(menu, menuId, itemElementId) {
        menu.addSeparator();
        return null;
    },
    
    onMenuElementCreated: function SP_UI_MySiteCommon_SeparatorMenuItem$onMenuElementCreated(element) {
    }
}


SP.UI.MySiteCommon.ErrorCodes = function SP_UI_MySiteCommon_ErrorCodes() {
}


SP.UI.MySiteCommon.DataCache = function SP_UI_MySiteCommon_DataCache() {
    this.$h_0 = SP.UI.MySiteCommon.DataCache.$12;
    this.$J_0 = 10;
}
SP.UI.MySiteCommon.DataCache.getObjectFromJsonData = function SP_UI_MySiteCommon_DataCache$getObjectFromJsonData(dataID, ctx) {
    if ((null === dataID) || (null === ctx)) {
        return null;
    }
    var $v_0 = $get(dataID);
    if (null === $v_0) {
        return null;
    }
    return ctx.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_0));
}
SP.UI.MySiteCommon.DataCache.prototype = {
    $s_0: false,
    $g_0: null,
    $M_0: null,
    
    loadCacheFromJsonData: function SP_UI_MySiteCommon_DataCache$loadCacheFromJsonData(dataIDs) {
        this.clearCache();
        if ((null === dataIDs) || (dataIDs.length < 1)) {
            return true;
        }
        var $v_0 = new SP.ClientRuntimeContext(_spPageContextInfo.webServerRelativeUrl);
        this.$M_0 = {};
        var $v_1 = 0;
        var $v_2 = dataIDs.length;
        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = dataIDs[$v_3];
            if ((null === $v_4) || ($v_4.length < 1) || ($v_4.trim().length < 1)) {
                this.clearCache();
                return false;
            }
            this.$M_0[$v_4] = SP.UI.MySiteCommon.DataCache.getObjectFromJsonData($v_4, $v_0);
            if (null !== this.$M_0[$v_4]) {
                $v_1++;
            }
        }
        if ($v_1 < 1) {
            this.clearCache();
            return false;
        }
        this.$g_0 = new Date();
        this.$h_0 = 0;
        return false;
    },
    
    getDataObject: function SP_UI_MySiteCommon_DataCache$getDataObject(dataID) {
        if ((null === dataID) || (dataID.length < 1) || (dataID.trim().length < 1)) {
            return null;
        }
        return ((this.isCacheValid()) ? this.$M_0[dataID] : null);
    },
    
    isCacheValid: function SP_UI_MySiteCommon_DataCache$isCacheValid() {
        if (0 !== this.$h_0) {
            return false;
        }
        if (this.$1X_0()) {
            this.clearCache();
            return false;
        }
        return true;
    },
    
    clearCache: function SP_UI_MySiteCommon_DataCache$clearCache() {
        this.$h_0 = SP.UI.MySiteCommon.DataCache.$12;
        this.$J_0 = 10;
        this.$s_0 = false;
        this.$g_0 = null;
        this.$M_0 = null;
    },
    
    get_cacheDurationInSeconds: function SP_UI_MySiteCommon_DataCache$get_cacheDurationInSeconds() {
        return this.$J_0;
    },
    set_cacheDurationInSeconds: function SP_UI_MySiteCommon_DataCache$set_cacheDurationInSeconds(value) {
        this.$J_0 = value;
        return value;
    },
    
    get_isNoExpiration: function SP_UI_MySiteCommon_DataCache$get_isNoExpiration() {
        return this.$s_0;
    },
    set_isNoExpiration: function SP_UI_MySiteCommon_DataCache$set_isNoExpiration(value) {
        this.$s_0 = value;
        return value;
    },
    
    get_cacheStartTime: function SP_UI_MySiteCommon_DataCache$get_cacheStartTime() {
        return this.$g_0;
    },
    
    $1X_0: function SP_UI_MySiteCommon_DataCache$$1X_0() {
        if (this.$s_0) {
            return false;
        }
        var $v_0 = new Date();
        var $v_1 = ($v_0 - this.$g_0) / 1000;
        return (($v_1 > this.$J_0) || ($v_1 < 0)) ? true : false;
    }
}


Type.registerNamespace('SP.UI.MicroFeed');

SP.UI.MicroFeed.ExternallyDefinedStrings = function SP_UI_MicroFeed_ExternallyDefinedStrings() {
}


Type.registerNamespace('SP.UI.People');

SP.UI.People.FollowOrStopFollowingButtonControl = function SP_UI_People_FollowOrStopFollowingButtonControl() {
}
SP.UI.People.FollowOrStopFollowingButtonControl.createFollowLinkForPageUser = function SP_UI_People_FollowOrStopFollowingButtonControl$createFollowLinkForPageUser(elementId) {
    var $v_0 = $get(elementId);
    var $v_1 = $get('ms-followButtonPersonProperties');
    var $v_2 = null;
    if ($v_1) {
        var $v_3 = new SP.ClientRuntimeContext(_spPageContextInfo.webServerRelativeUrl);
        $v_2 = $v_3.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_1));
        $v_1.parentNode.removeChild($v_1);
    }
    if ($v_2 && $v_0) {
        SP.UI.People.PersonManager.addPerson($v_2);
        var $v_4 = document.createElement('div');
        $v_4.id = 'ms-profile-followLinkDiv';
        var $v_5 = SP.UI.People.FollowLinkManager.getLink($v_2.get_accountName());
        var $v_6 = $v_5.htmlForLink('Profile', true, true);
        $v_4.appendChild($v_6);
        if ($v_0.parentNode) {
            $v_0.parentNode.replaceChild($v_4, $v_0);
        }
        if (!$v_2.get_isFollowed()) {
            var $v_7 = SP.ScriptHelpers.getDocumentQueryPairs();
            var $$dict_9 = $v_7;
            for (var $$key_A in $$dict_9) {
                var $v_8 = { key: $$key_A, value: $$dict_9[$$key_A] };
                if ($v_8.key.toLowerCase() === 'followperson' && $v_8.value.toString() === '1') {
                    SP.UI.People.FollowOrStopFollowingButtonControl.showFollowDialog($v_5, $v_2.get_displayName());
                    break;
                }
            }
        }
    }
}
SP.UI.People.FollowOrStopFollowingButtonControl.showFollowDialog = function SP_UI_People_FollowOrStopFollowingButtonControl$showFollowDialog(newfollowLink, followUserName) {
    var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(String.format(SpsClient.ScriptResources.followLinkTextWithName, followUserName), SpsClient.ScriptResources.l_DialogFollowPersonAction_Content);
    $v_0.$B_0 = SpsClient.ScriptResources.followLinkText;
    $v_0.$F_0 = function() {
        newfollowLink.onClick('Profile');
    };
    $v_0.show();
}


SP.UI.People.MySitePeopleUtilities = function SP_UI_People_MySitePeopleUtilities() {
}
SP.UI.People.MySitePeopleUtilities.getPersonManagerPropertiesToInclude = function SP_UI_People_MySitePeopleUtilities$getPersonManagerPropertiesToInclude() {
    return SP.UI.People.MySitePeopleUtilities.$1N;
}
SP.UI.People.MySitePeopleUtilities.getPersonPropertiesToInclude = function SP_UI_People_MySitePeopleUtilities$getPersonPropertiesToInclude() {
    return SP.UI.People.MySitePeopleUtilities.$1O;
}


SP.UI.People.PersonManager = function SP_UI_People_PersonManager() {
    this.$W_0 = {};
}
SP.UI.People.PersonManager.get_people = function SP_UI_People_PersonManager$get_people() {
    if (!SP.UI.People.PersonManager.$5) {
        SP.UI.People.PersonManager.$5 = new SP.UI.People.PersonManager();
    }
    return SP.UI.People.PersonManager.$5;
}
SP.UI.People.PersonManager.addPerson = function SP_UI_People_PersonManager$addPerson(person) {
    var $v_0 = new SP.UI.People.ClientPerson();
    $v_0.setFromPersonProperties(person);
    SP.UI.People.PersonManager.get_people().$W_0[person.get_accountName().toLowerCase()] = $v_0;
    SP.UI.People.FollowLinkManager.newLink(person.get_accountName());
}
SP.UI.People.PersonManager.addSocialActor = function SP_UI_People_PersonManager$addSocialActor(person) {
    var $v_0 = new SP.UI.People.ClientPerson();
    $v_0.setFromSocialActor(person);
    SP.UI.People.PersonManager.get_people().$W_0[person.get_accountName().toLowerCase()] = $v_0;
    SP.UI.People.FollowLinkManager.newLink(person.get_accountName());
}
SP.UI.People.PersonManager.getPerson = function SP_UI_People_PersonManager$getPerson(accountName) {
    return SP.UI.People.PersonManager.get_people().$W_0[accountName.toLowerCase()];
}
SP.UI.People.PersonManager.getFollowState = function SP_UI_People_PersonManager$getFollowState(accountName) {
    var $v_0 = SP.UI.People.PersonManager.getPerson(accountName);
    return !!$v_0 && $v_0.$9_0;
}
SP.UI.People.PersonManager.updateFollowState = function SP_UI_People_PersonManager$updateFollowState(accountName, followState) {
    var $v_0 = SP.UI.People.PersonManager.getPerson(accountName);
    if ($v_0) {
        $v_0.$9_0 = followState;
        SP.UI.People.PersonManager.get_people().$W_0[accountName.toLowerCase()] = $v_0;
    }
}
SP.UI.People.PersonManager.prototype = {
    $W_0: null
}


SP.UI.People.ClientPerson = function SP_UI_People_ClientPerson() {
}
SP.UI.People.ClientPerson.prototype = {
    $y_0: null,
    $H_0: null,
    $Z_0: null,
    $c_0: null,
    $w_0: null,
    $x_0: null,
    $9_0: false,
    
    setFromPersonProperties: function SP_UI_People_ClientPerson$setFromPersonProperties(person) {
        this.$y_0 = person.get_accountName();
        this.$H_0 = person.get_displayName();
        this.$Z_0 = person.get_email();
        this.$c_0 = person.get_latestPost();
        this.$w_0 = person.get_pictureUrl();
        this.$x_0 = person.get_userUrl();
        this.$9_0 = person.get_isFollowed();
    },
    
    setFromSocialActor: function SP_UI_People_ClientPerson$setFromSocialActor(person) {
        this.$y_0 = person.get_accountName();
        this.$H_0 = person.get_name();
        this.$Z_0 = person.get_emailAddress();
        this.$c_0 = person.get_statusText();
        this.$w_0 = person.get_imageUri();
        this.$x_0 = person.get_uri();
        this.$9_0 = person.get_isFollowed();
    },
    
    get_accountName: function SP_UI_People_ClientPerson$get_accountName() {
        return this.$y_0;
    },
    
    get_displayName: function SP_UI_People_ClientPerson$get_displayName() {
        return this.$H_0;
    },
    
    get_email: function SP_UI_People_ClientPerson$get_email() {
        return this.$Z_0;
    },
    
    get_latestPost: function SP_UI_People_ClientPerson$get_latestPost() {
        return this.$c_0;
    },
    
    get_pictureUrl: function SP_UI_People_ClientPerson$get_pictureUrl() {
        return this.$w_0;
    },
    
    get_userUrl: function SP_UI_People_ClientPerson$get_userUrl() {
        return this.$x_0;
    },
    
    get_isFollowed: function SP_UI_People_ClientPerson$get_isFollowed() {
        return this.$9_0;
    },
    set_isFollowed: function SP_UI_People_ClientPerson$set_isFollowed(value) {
        this.$9_0 = value;
        return value;
    }
}


SP.UI.People.FollowLink = function SP_UI_People_FollowLink(accountName) {
    this.$n_0 = 0;
    this.$3_0 = accountName;
    this.$1_0 = SP.UI.People.PersonManager.getPerson(this.$3_0).$9_0;
    this.$f_0 = false;
    this.set_$8_0(1);
}
SP.UI.People.FollowLink.get_$1a = function SP_UI_People_FollowLink$get_$1a() {
    return GetThemedImageUrl('socialcommon.png');
}
SP.UI.People.FollowLink.$1S = function SP_UI_People_FollowLink$$1S($p0, $p1) {
    SP.SOD.executeFunc('SP.Ribbon.js', 'GetWSA', function() {
        var $v_0 = GetWSA();
        var $v_1 = 0;
        switch ($p1) {
            case 'FollowMultiplePeople':
                if ($p0) {
                    $v_1 = 9711;
                }
                break;
            case 'Microfeed':
                if ($p0) {
                    $v_1 = 9712;
                }
                break;
            case 'PersonDiv':
                $v_1 = (($p0) ? 9713 : 9719);
                break;
            case 'CalloutOwnPage':
                $v_1 = (($p0) ? 9714 : 9720);
                break;
            case 'CalloutOtherPage':
                $v_1 = (($p0) ? 9715 : 9721);
                break;
            case 'Profile':
                $v_1 = (($p0) ? 9716 : 9722);
                break;
            case 'Search':
                if ($p0) {
                    $v_1 = 9717;
                }
                break;
            case 'Suggestion':
                if ($p0) {
                    $v_1 = 9718;
                }
                break;
        }
        if ($v_0 && $v_1 > 0) {
            $v_0.incrementDw($v_1, 1);
        }
    });
}
SP.UI.People.FollowLink.prototype = {
    $3_0: null,
    $1_0: false,
    $f_0: false,
    
    get_$8_0: function SP_UI_People_FollowLink$get_$8_0() {
        return this.$n_0;
    },
    set_$8_0: function SP_UI_People_FollowLink$set_$8_0($p0) {
        if (this.$n_0 !== $p0) {
            this.$n_0 = $p0;
            this.refreshLinks();
        }
        return $p0;
    },
    
    get_followingState: function SP_UI_People_FollowLink$get_followingState() {
        return this.$1_0;
    },
    set_followingState: function SP_UI_People_FollowLink$set_followingState(value) {
        this.$1_0 = value;
        return value;
    },
    
    get_blockFromTRC: function SP_UI_People_FollowLink$get_blockFromTRC() {
        return this.$f_0;
    },
    
    $1V_0: function SP_UI_People_FollowLink$$1V_0($p0) {
        var $v_0 = SP.UI.People.FollowLinkManager.get_$1B().amIFollowing(this.$3_0);
        if (SP.UI.People.FollowLinkManager.get_$v().get_hasPendingRequest()) {
            var $$t_4 = this, $$t_5 = this;
            SP.UI.People.FollowLinkManager.get_$v().executeQueryAsync(function() {
                $$t_4.$X_0($v_0.get_value(), $p0);
            }, function($p1_0, $p1_1) {
                $$t_5.set_$8_0(1);
            });
        }
    },
    
    generateTRC: function SP_UI_People_FollowLink$generateTRC() {
        var $$t_1 = this;
        SP.SOD.executeFunc('followingcommon.js', 'addPeopleFollowNotification', function() {
            if (!$$t_1.$f_0) {
                var $v_0 = SP.UI.People.PersonManager.getPerson($$t_1.$3_0);
                addPeopleFollowNotification($v_0.$H_0, $v_0.$c_0 || '', $v_0.$w_0 || SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder32(), $v_0.$Z_0, function() {
                    window.location.href = $v_0.$x_0;
                });
                $$t_1.$f_0 = true;
            }
        });
    },
    
    $X_0: function SP_UI_People_FollowLink$$X_0($p0, $p1) {
        if ($p0 && !this.$1_0) {
            this.generateTRC();
        }
        this.$1_0 = $p0;
        this.set_$8_0(1);
        SP.UI.People.PersonManager.updateFollowState(this.$3_0, this.$1_0);
        SP.UI.People.FollowLinkManager.get_followCallback()(this.$3_0, this.$1_0, $p1, true);
    },
    
    isClickable: function SP_UI_People_FollowLink$isClickable() {
        return this.get_$8_0() === 1;
    },
    
    updateFromExternalSource: function SP_UI_People_FollowLink$updateFromExternalSource(followingAction, source) {
        SP.UI.People.FollowLink.$1S(followingAction, source);
        this.$X_0(followingAction, source);
        this.refreshLinks();
    },
    
    onClick: function SP_UI_People_FollowLink$onClick(source) {
        if (this.isClickable()) {
            SP.UI.People.FollowLink.$1S(!this.$1_0, source);
            var $$t_9 = this;
            SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
                if ($$t_9.$1_0) {
                    SP.UI.People.FollowLinkManager.get_$1B().stopFollowing($$t_9.$3_0);
                }
                else {
                    SP.UI.People.FollowLinkManager.get_$1B().follow($$t_9.$3_0);
                }
                if (SP.UI.People.FollowLinkManager.get_$v().get_hasPendingRequest()) {
                    SP.UI.People.FollowLinkManager.get_$v().executeQueryAsync(function() {
                        $$t_9.$X_0(!$$t_9.$1_0, source);
                    }, function($p2_0, $p2_1) {
                        var $v_0 = null;
                        var $v_1 = null;
                        var $v_2 = SpsClient.ScriptResources.closeButtonText;
                        var $v_3 = null;
                        var $v_4 = null;
                        switch ($p2_1.get_errorTypeName()) {
                            case 'Microsoft.Office.Server.UserProfiles.PrivacyItemNotFoundException':
                                $$t_9.$X_0(false, source);
                                break;
                            case 'Microsoft.Office.Server.UserProfiles.PrivacyItemExistsException':
                                $$t_9.$X_0(true, source);
                                break;
                            case 'Microsoft.Office.Server.UserProfiles.PrivacyItemLimitReachedException':
                                $v_0 = SpsClient.ScriptResources.followingPeopleLimitReachedErrorDialogTitle;
                                $v_1 = $p2_1.get_message();
                                break;
                            case 'Microsoft.Office.Server.UserProfiles.PrivacyItemDataException':
                                $v_0 = SpsClient.ScriptResources.userActionFailedErrorDialogTitle;
                                $v_1 = $p2_1.get_message();
                                break;
                            case 'System.UnauthorizedAccessException':
                                $v_0 = SpsClient.ScriptResources.accessDeniedErrorDialogTitle;
                                $v_1 = SpsClient.ScriptResources.accessDeniedErrorMessage;
                                break;
                            default:
                                $$t_9.$1V_0(source);
                                if ((SP.UI.MySiteCommon.ErrorCodes.erroR_TP_E_CANARYTAMPERED === $p2_1.get_errorCode()) || (SP.UI.MySiteCommon.ErrorCodes.erroR_TP_E_CANARYTIMEDOUT === $p2_1.get_errorCode())) {
                                    $v_2 = SpsClient.ScriptResources.refreshButtonText;
                                    $v_4 = function() {
                                        SP.UI.ModalDialog.RefreshPage(1);
                                    };
                                    $v_3 = SpsClient.ScriptResources.closeButtonText;
                                    $v_0 = SpsClient.ScriptResources.needToRefreshErrorDialogTitle;
                                    $v_1 = SpsClient.ScriptResources.needToRefreshErrorMessage;
                                }
                                else {
                                    $v_0 = SpsClient.ScriptResources.unknownErrorTitle;
                                    $v_1 = $p2_1.get_message();
                                }
                                break;
                        }
                        $$t_9.set_$8_0(1);
                        if ($v_0 && $v_1) {
                            var $v_5 = new SP.UI.MySiteCommon.MySiteDialog($v_0, $v_1);
                            $v_5.$B_0 = $v_2;
                            $v_5.$F_0 = $v_4;
                            if (!SP.ScriptHelpers.isNullOrEmptyString($v_3)) {
                                $v_5.$K_0 = $v_3;
                            }
                            else {
                                $v_5.$A_0 = true;
                            }
                            $v_5.show();
                            SP.UI.People.FollowLinkManager.get_followCallback()($$t_9.$3_0, $$t_9.$1_0, source, false);
                        }
                    });
                    $$t_9.set_$8_0(2);
                }
            });
        }
    },
    
    $10_0: function SP_UI_People_FollowLink$$10_0($p0) {
        return SP.UI.MySiteCommon.CommonUIElements.getValidId($p0 + 'FollowLinkFor{0}', this.$3_0);
    },
    
    htmlForLink: function SP_UI_People_FollowLink$htmlForLink(IDPrefix, useImage, useText) {
        return this.htmlForCustomLink(IDPrefix, IDPrefix, useImage, useText, false);
    },
    
    htmlForCustomLink: function SP_UI_People_FollowLink$htmlForCustomLink(IDPrefix, source, useImage, useText, useName) {
        var $$t_6 = this;
        var $v_0 = SP.UI.MySiteCommon.CommonUIElements.makeLinkWithClickHandler(this.$10_0(IDPrefix), 'ms-commandLink', null, null, null, function() {
            $$t_6.onClick(source);
        });
        $v_0.setAttribute('name', this.$10_0(''));
        $v_0.setAttribute('source', source);
        $v_0.setAttribute('useImage', useImage);
        $v_0.setAttribute('useText', useText);
        $v_0.setAttribute('useName', useName);
        this.$1Q_0($v_0, IDPrefix);
        if ($v_0.parentNode && IDPrefix === 'Profile') {
            return $v_0.parentNode;
        }
        else {
            return $v_0;
        }
    },
    
    $1Q_0: function SP_UI_People_FollowLink$$1Q_0($p0, $p1) {
        if ($p0) {
            var $v_0 = this.isClickable() === this.$1_0;
            $p0.innerHTML = '';
            this.$1T_0($p0, $p1);
            $p0.disabled = !this.isClickable();
            if ($p0.getAttribute('useText') === 'true') {
                var $v_1 = document.createElement('span');
                $v_1.id = SP.UI.MySiteCommon.CommonUIElements.getValidId($p1 + 'FollowLinkTextFor{0}', this.$3_0);
                var $v_2 = '';
                var $v_3 = SP.UI.People.PersonManager.getPerson(this.$3_0);
                if ($p0.getAttribute('useName') === 'true' && $v_3) {
                    $v_2 = String.format(($v_0) ? SpsClient.ScriptResources.stopFollowingLinkTextWithName : SpsClient.ScriptResources.followLinkTextWithName, $v_3.$H_0);
                }
                else if ($p1 === 'Profile') {
                    $v_2 = this.$1Z_0($v_0, $p0);
                }
                else {
                    $v_2 = ($v_0) ? SpsClient.ScriptResources.stopFollowingLinkText : SpsClient.ScriptResources.followLinkText;
                }
                if (!SP.ScriptHelpers.isNullOrEmptyString($v_2)) {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, $v_2);
                    $p0.appendChild($v_1);
                }
            }
            if ($p1 === 'Profile') {
                $p0.className = ($v_0) ? 'ms-profile-stopFollowingLink ms-commandLink' : 'ms-profile-followLink ms-heroCommandLink ms-textXLarge';
            }
        }
    },
    
    $1Z_0: function SP_UI_People_FollowLink$$1Z_0($p0, $p1) {
        var $v_0 = '';
        var $v_1 = SP.UI.MySiteCommon.CommonUIElements.getValidId('ProfilePageFollowThisPersonLinkTextFor{0}', this.$3_0);
        if ($p1.parentNode) {
            var $v_2 = SP.UI.MySiteCommon.CommonUIElements.findElementByID($p1.parentNode, $v_1);
            if ($v_2) {
                $p1.parentNode.removeChild($v_2);
            }
        }
        else {
            var $v_3 = document.createElement('div');
            $v_3.appendChild($p1);
        }
        if ($p0) {
            $v_0 = SpsClient.ScriptResources.stopFollowingThisPersonText;
        }
        else {
            var $v_4 = document.createElement('span');
            $v_4.id = $v_1;
            $v_4.className = 'ms-profile-followLink ms-textXLarge';
            var $v_5 = SP.UI.MySiteCommon.CommonUIElements.getValidId('ProfilePageFollowThisPersonLinkAnchorFor{0}', this.$3_0);
            var $v_6 = String.format(STSHtmlEncode(SpsClient.ScriptResources.followThisPersonText), '<a id=\"' + $v_5 + '\">', '</a>');
            $v_4.innerHTML = $v_6;
            var $v_7 = SP.UI.MySiteCommon.CommonUIElements.findElementByID($v_4, $v_5);
            $v_7.className = 'ms-heroCommandLink';
            var $$t_A = this;
            SP.UI.MySiteCommon.CommonUIElements.addClickHandlerToAnchorElement($v_7, function() {
                $$t_A.onClick('Profile');
            });
            if ($p1.parentNode && !SP.ScriptHelpers.isNullOrEmptyString($v_6)) {
                ($p1.parentNode).appendChild($v_4);
            }
        }
        return $v_0;
    },
    
    $1T_0: function SP_UI_People_FollowLink$$1T_0($p0, $p1) {
        if (!$p0) {
            return;
        }
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = 'ms-people-followLinkImage';
        var $v_3 = $p0;
        if (this.get_$8_0() === 2) {
            if ($p1.startsWith('Microfeed')) {
                SP.UI.MySiteCommon.CommonUIElements.display($get('ms-progressSpan'));
            }
            else {
                $v_0 = SP.UI.MySiteCommon.CommonUIElements.get_loadingAnimation();
                $v_1 = '';
                if ($p1 === 'Profile' && this.$1_0) {
                    $v_2 = 'ms-profile-followHeroImageParent';
                }
            }
        }
        else if ($p0.getAttribute('useImage') === 'true') {
            $v_3 = document.createElement('span');
            var $v_4 = '';
            $v_0 = SP.UI.People.FollowLink.get_$1a();
            if ($p1 === 'Profile') {
                if (this.$1_0) {
                    return;
                }
                $v_2 = 'ms-profile-followHeroImage';
                $v_4 = 'ms-profile-followHeroImageParent';
            }
            else {
                $v_2 = (this.$1_0) ? 'ms-people-followLinkImageFollowing' : 'ms-people-followLinkImageNotFollowing';
                $v_4 = 'ms-people-followLinkImage ms-people-followLinkImageParent';
            }
            $v_3.className = $v_4;
            $p0.appendChild($v_3);
            $v_1 = (this.$1_0) ? SpsClient.ScriptResources.stopFollowingLinkText : SpsClient.ScriptResources.followLinkText;
        }
        if ($v_0) {
            $v_3.appendChild(SP.UI.MySiteCommon.CommonUIElements.makeImageAltSameAsTitle($v_0, SP.UI.MySiteCommon.CommonUIElements.getValidId($p1 + 'FollowLinkImageFor{0}', this.$3_0), $v_2, $v_1));
        }
    },
    
    refreshLinks: function SP_UI_People_FollowLink$refreshLinks() {
        var $v_0 = this.$10_0('');
        var $v_1 = document.getElementsByName($v_0);
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            var $v_4 = $v_3.id.substring(0, $v_3.id.length - $v_0.length);
            this.$1Q_0($v_3, $v_4);
        }
    }
}


SP.UI.People.FollowLinkManager = function SP_UI_People_FollowLinkManager() {
    this.$d_0 = {};
    var $$t_4 = this;
    this.$z_0 = function($p1_0, $p1_1, $p1_2, $p1_3) {
    };
}
SP.UI.People.FollowLinkManager.get_links = function SP_UI_People_FollowLinkManager$get_links() {
    if (!SP.UI.People.FollowLinkManager.$5) {
        SP.UI.People.FollowLinkManager.$5 = new SP.UI.People.FollowLinkManager();
    }
    return SP.UI.People.FollowLinkManager.$5;
}
SP.UI.People.FollowLinkManager.get_$1B = function SP_UI_People_FollowLinkManager$get_$1B() {
    if (!SP.UI.People.FollowLinkManager.get_links().$1C_0) {
        SP.UI.People.FollowLinkManager.$1H();
    }
    return SP.UI.People.FollowLinkManager.get_links().$1C_0;
}
SP.UI.People.FollowLinkManager.get_$v = function SP_UI_People_FollowLinkManager$get_$v() {
    if (!SP.UI.People.FollowLinkManager.get_links().$6_0) {
        SP.UI.People.FollowLinkManager.$1H();
    }
    return SP.UI.People.FollowLinkManager.get_links().$6_0;
}
SP.UI.People.FollowLinkManager.$1H = function SP_UI_People_FollowLinkManager$$1H() {
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        SP.UI.People.FollowLinkManager.get_links().$6_0 = SP.ClientContext.get_current();
        SP.UI.People.FollowLinkManager.get_links().$1C_0 = SP.UserProfiles.PeopleManager.newObject(SP.UI.People.FollowLinkManager.get_links().$6_0);
    });
}
SP.UI.People.FollowLinkManager.newLink = function SP_UI_People_FollowLinkManager$newLink(accountName) {
    var $v_0 = accountName.toLowerCase();
    var $v_1 = SP.UI.People.FollowLinkManager.get_links().$d_0[$v_0];
    if (!$v_1) {
        SP.UI.People.FollowLinkManager.get_links().$d_0[$v_0] = new SP.UI.People.FollowLink(accountName);
    }
    else if ($v_1.isClickable()) {
        var $v_2 = SP.UI.People.PersonManager.getFollowState($v_0);
        if ($v_1.$1_0 !== $v_2) {
            $v_1.$1_0 = $v_2;
            $v_1.refreshLinks();
        }
    }
}
SP.UI.People.FollowLinkManager.getLink = function SP_UI_People_FollowLinkManager$getLink(accountName) {
    return SP.UI.People.FollowLinkManager.get_links().$d_0[accountName.toLowerCase()];
}
SP.UI.People.FollowLinkManager.get_followCallback = function SP_UI_People_FollowLinkManager$get_followCallback() {
    return SP.UI.People.FollowLinkManager.get_links().$z_0;
}
SP.UI.People.FollowLinkManager.set_followCallback = function SP_UI_People_FollowLinkManager$set_followCallback(value) {
    SP.UI.People.FollowLinkManager.get_links().$z_0 = value;
    return value;
}
SP.UI.People.FollowLinkManager.prototype = {
    $d_0: null,
    $z_0: null,
    $6_0: null,
    $1C_0: null
}


Type.registerNamespace('Microsoft.SharePoint.Portal.UserProfiles');

Microsoft.SharePoint.Portal.UserProfiles.MySiteDismissStatusText = function Microsoft_SharePoint_Portal_UserProfiles_MySiteDismissStatusText() {
}
Microsoft.SharePoint.Portal.UserProfiles.MySiteDismissStatusText.dismissStatusText = function Microsoft_SharePoint_Portal_UserProfiles_MySiteDismissStatusText$dismissStatusText(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{00a20542-1d5c-4bc5-bdd4-d64d75144ada}', 'DismissStatusText', null);
    context.addQuery($v_0);
}


Microsoft.SharePoint.Portal.UserProfiles.MySiteDocumentMoveUtility = function Microsoft_SharePoint_Portal_UserProfiles_MySiteDocumentMoveUtility() {
}
Microsoft.SharePoint.Portal.UserProfiles.MySiteDocumentMoveUtility.firstRunDocumentMove = function Microsoft_SharePoint_Portal_UserProfiles_MySiteDocumentMoveUtility$firstRunDocumentMove(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{f0be8ab9-1b53-41fa-84b3-bc6145595fcb}', 'FirstRunDocumentMove', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


SP.UI.MySiteCommon.MySiteMenuItem.registerClass('SP.UI.MySiteCommon.MySiteMenuItem');
SP.UI.MySiteCommon.CheckBoxMenuItem.registerClass('SP.UI.MySiteCommon.CheckBoxMenuItem', SP.UI.MySiteCommon.MySiteMenuItem);
SP.UI.MySiteCommon.CommonUIElements.registerClass('SP.UI.MySiteCommon.CommonUIElements');
SP.UI.MySiteCommon.PresenceManager.registerClass('SP.UI.MySiteCommon.PresenceManager');
SP.UI.MySiteCommon.MySiteDialog.registerClass('SP.UI.MySiteCommon.MySiteDialog');
SP.UI.MySiteCommon.MySiteMenu.registerClass('SP.UI.MySiteCommon.MySiteMenu');
SP.UI.MySiteCommon.MySitePrivacyIcon.registerClass('SP.UI.MySiteCommon.MySitePrivacyIcon');
SP.UI.MySiteCommon.SeparatorMenuItem.registerClass('SP.UI.MySiteCommon.SeparatorMenuItem', SP.UI.MySiteCommon.MySiteMenuItem);
SP.UI.MySiteCommon.ErrorCodes.registerClass('SP.UI.MySiteCommon.ErrorCodes');
SP.UI.MySiteCommon.DataCache.registerClass('SP.UI.MySiteCommon.DataCache');
SP.UI.MicroFeed.ExternallyDefinedStrings.registerClass('SP.UI.MicroFeed.ExternallyDefinedStrings');
SP.UI.People.FollowOrStopFollowingButtonControl.registerClass('SP.UI.People.FollowOrStopFollowingButtonControl');
SP.UI.People.MySitePeopleUtilities.registerClass('SP.UI.People.MySitePeopleUtilities');
SP.UI.People.PersonManager.registerClass('SP.UI.People.PersonManager');
SP.UI.People.ClientPerson.registerClass('SP.UI.People.ClientPerson');
SP.UI.People.FollowLink.registerClass('SP.UI.People.FollowLink');
SP.UI.People.FollowLinkManager.registerClass('SP.UI.People.FollowLinkManager');
Microsoft.SharePoint.Portal.UserProfiles.MySiteDismissStatusText.registerClass('Microsoft.SharePoint.Portal.UserProfiles.MySiteDismissStatusText');
Microsoft.SharePoint.Portal.UserProfiles.MySiteDocumentMoveUtility.registerClass('Microsoft.SharePoint.Portal.UserProfiles.MySiteDocumentMoveUtility');
function sp_ui_mysitecommon_initialize() {
SP.UI.MySiteCommon.CommonUIElements.$1D = 'placeholderDivForHiddenElement';
SP.UI.MySiteCommon.CommonUIElements.$a = 'fixedHeight';
SP.UI.MySiteCommon.CommonUIElements.$b = 'fixedWidth';
SP.UI.MySiteCommon.PresenceManager.$5 = null;
SP.UI.MySiteCommon.MySiteMenu.$1E = {};
SP.UI.MySiteCommon.MySiteMenu.$1M = 'SP.UI.MySiteCommon.MySiteMenu.onMenuClickCallback';
SP.UI.MySiteCommon.MySiteMenu.controlSpan = 'ms-mysitemenu-control_';
SP.UI.MySiteCommon.MySiteMenu.controlLink = 'ms-mysitemenu-control_Link_';
SP.UI.MySiteCommon.MySiteMenu.controlImage = 'ms-mysitemenu-control_Image_';
SP.UI.MySiteCommon.MySiteMenu.controlImageParent = 'ms-mysitemenu-control_ImageParent_';
SP.UI.MySiteCommon.MySiteMenu.menuDiv = 'ms-mysitemenu-menu_';
SP.UI.MySiteCommon.MySiteMenu.menuItem = 'ms-mysitemenu-menu_Item_';
SP.UI.MySiteCommon.MySiteMenu.emptyStringPromptConst = 'EMPTY_STRING_A2BF7E95-82D5-4055-8451-B0B86C4E973E';
SP.UI.MySiteCommon.MySitePrivacyIcon.$1F = 'mySitePrivacyIcon-anchor_';
SP.UI.MySiteCommon.ErrorCodes.erroR_TP_E_CANARYTAMPERED = -2130575251;
SP.UI.MySiteCommon.ErrorCodes.erroR_TP_E_CANARYTIMEDOUT = -2130575252;
SP.UI.MySiteCommon.DataCache.$12 = -1;
SP.UI.MicroFeed.ExternallyDefinedStrings.defaultPostDefinitionName = 'Microsoft.SharePoint.Microfeed.UserPost';
SP.UI.People.MySitePeopleUtilities.$1N = [ 'EditProfileLink', 'IsMyPeopleListPublic' ];
SP.UI.People.MySitePeopleUtilities.$1O = [ 'DisplayName', 'AccountName', 'UserUrl', 'PictureUrl', 'Email', 'LatestPost', 'IsFollowed' ];
SP.UI.People.MySitePeopleUtilities.personPropertiesToIncludeInCollection = 'Include(DisplayName, AccountName, UserUrl, PictureUrl, Email, LatestPost, IsFollowed)';
SP.UI.People.PersonManager.$5 = null;
SP.UI.People.FollowLink.followLinkId = 'FollowLinkFor{0}';
SP.UI.People.FollowLink.followLinkClass = 'ms-commandLink';
SP.UI.People.FollowLink.suggestionFollowLinkClass = 'ms-secondaryCommandLink';
SP.UI.People.FollowLink.followLinkImageId = 'FollowLinkImageFor{0}';
SP.UI.People.FollowLink.followLinkImageClass = 'ms-people-followLinkImage';
SP.UI.People.FollowLink.followLinkImageFollowingClass = 'ms-people-followLinkImageFollowing';
SP.UI.People.FollowLink.followLinkImageNotFollowingClass = 'ms-people-followLinkImageNotFollowing';
SP.UI.People.FollowLink.followLinkImageParentClass = 'ms-people-followLinkImageParent';
SP.UI.People.FollowLink.followLinkTextId = 'FollowLinkTextFor{0}';
SP.UI.People.FollowLink.profilePageFollowThisPersonLinkTextId = 'ProfilePageFollowThisPersonLinkTextFor{0}';
SP.UI.People.FollowLink.profilePageFollowThisPersonLinkAnchorId = 'ProfilePageFollowThisPersonLinkAnchorFor{0}';
SP.UI.People.FollowLink.profilePageFollowThisPersonLinkTextClass = 'ms-profile-followLink ms-textXLarge';
SP.UI.People.FollowLink.profilePageFollowThisPersonAnchorClass = 'ms-heroCommandLink';
SP.UI.People.FollowLink.profilePageFollowLinkClass = 'ms-profile-followLink ms-heroCommandLink ms-textXLarge';
SP.UI.People.FollowLink.profilePageStopFollowingLinkClass = 'ms-profile-stopFollowingLink ms-commandLink';
SP.UI.People.FollowLink.profilePageFollowLinkImageClass = 'ms-profile-followHeroImage';
SP.UI.People.FollowLink.profilePageFollowLinkImageParentClass = 'ms-profile-followHeroImageParent';
SP.UI.People.FollowLink.calloutIdPrefix = 'Callout';
SP.UI.People.FollowLink.calloutSourceOwnPage = 'CalloutOwnPage';
SP.UI.People.FollowLink.calloutSourceOtherPage = 'CalloutOtherPage';
SP.UI.People.FollowLink.microfeedIdPrefixAndSource = 'Microfeed';
SP.UI.People.FollowLink.profileIdPrefixAndSource = 'Profile';
SP.UI.People.FollowLink.suggestionIdPrefixAndSource = 'Suggestion';
SP.UI.People.FollowLink.searchIdPrefixAndSource = 'Search';
SP.UI.People.FollowLink.personDivPrefixAndSource = 'PersonDiv';
SP.UI.People.FollowLink.followMultiplePeoplePrefixAndSource = 'FollowMultiplePeople';
SP.UI.People.FollowLinkManager.$5 = null;
};
sp_ui_mysitecommon_initialize();

RegisterModuleInit("sp.ui.mysitecommon.js", sp_ui_mysitecommon_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.MySiteCommon.js");

_spApplicationPagesScriptLoaded = true;
