
Type.registerNamespace('SP.UI.Publishing.LayoutsPages');

SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions = function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions(e) {
    this.$$d__onThemeDisplayUpdated$p$2 = Function.createDelegate(this, this._onThemeDisplayUpdated$p$2);
    this.$$d__onPreviewButtonClick$p$2 = Function.createDelegate(this, this._onPreviewButtonClick$p$2);
    this.$$d__onFontSelectionChanged$p$2 = Function.createDelegate(this, this._onFontSelectionChanged$p$2);
    this.$$d__onSwatchClick$p$2 = Function.createDelegate(this, this._onSwatchClick$p$2);
    this.$$d__onMoreColorsClick$p$2 = Function.createDelegate(this, this._onMoreColorsClick$p$2);
    this.$$d__onInheritThemeChange$p$2 = Function.createDelegate(this, this._onInheritThemeChange$p$2);
    this.$$d__onLoad$p$2 = Function.createDelegate(this, this._onLoad$p$2);
    SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.initializeBase(this, [ e ]);
}
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._toggleSectionVisibility$p = function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_toggleSectionVisibility$p(section, hide) {
    var sectionLine = null;
    var current = section;
    while (current.previousSibling) {
        current = current.previousSibling;
        if (current.nodeType === 1) {
            sectionLine = current;
            break;
        }
    }
    if (!hide) {
        section.style.display = '';
        if (sectionLine) {
            sectionLine.style.display = '';
        }
    }
    else {
        section.style.display = 'none';
        if (sectionLine) {
            sectionLine.style.display = 'none';
        }
    }
}
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._findOptionByValue$p = function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_findOptionByValue$p(select, value) {
    var options = select.getElementsByTagName('option');
    for (var i = 0; i < options.length; ++i) {
        var option = options[i];
        if (option.value === value) {
            return option;
        }
    }
    return null;
}
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.prototype = {
    _themeWebPage$p$2: null,
    _inheritTheme$p$2: null,
    _selectTheme$p$2: null,
    _customThemeDirty$p$2: null,
    _themeSelectionChanged$p$2: false,
    _dark1$p$2: null,
    _light1$p$2: null,
    _dark2$p$2: null,
    _light2$p$2: null,
    _accent1$p$2: null,
    _accent2$p$2: null,
    _accent3$p$2: null,
    _accent4$p$2: null,
    _accent5$p$2: null,
    _accent6$p$2: null,
    _hlink$p$2: null,
    _folHlink$p$2: null,
    _font1$p$2: null,
    _font2$p$2: null,
    _previewButton$p$2: null,
    _customizeThemeSection$p$2: null,
    _loadHandler$p$2: null,
    _inheritThemeChangeHandler$p$2: null,
    _fontSelectionChangeHandler$p$2: null,
    _previewButtonClickHandler$p$2: null,
    _moreColorsClickHandler$p$2: null,
    _swatchClickHandler$p$2: null,
    
    initialize: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this._customThemeDirty$p$2 = this.get_element();
        this._loadHandler$p$2 = this.$$d__onLoad$p$2;
        Sys.Application.add_load(this._loadHandler$p$2);
        if (this._inheritTheme$p$2) {
            this._inheritThemeChangeHandler$p$2 = this.$$d__onInheritThemeChange$p$2;
            $addHandler(this._inheritTheme$p$2, 'click', this._inheritThemeChangeHandler$p$2);
            $addHandler(this._selectTheme$p$2, 'click', this._inheritThemeChangeHandler$p$2);
        }
        this._moreColorsClickHandler$p$2 = this.$$d__onMoreColorsClick$p$2;
        this._swatchClickHandler$p$2 = this.$$d__onSwatchClick$p$2;
        var moreColorsLink = $get('dark1-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('light1-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('dark2-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('light2-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent1-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent2-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent3-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent4-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent5-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent6-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('hlink-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('folHlink-more');
        $addHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $addHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        this._fontSelectionChangeHandler$p$2 = this.$$d__onFontSelectionChanged$p$2;
        $addHandler(this._font1$p$2, 'change', this._fontSelectionChangeHandler$p$2);
        $addHandler(this._font2$p$2, 'change', this._fontSelectionChangeHandler$p$2);
        this._previewButtonClickHandler$p$2 = this.$$d__onPreviewButtonClick$p$2;
        $addHandler(this._previewButton$p$2, 'click', this._previewButtonClickHandler$p$2);
    },
    
    dispose: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$dispose() {
        if (this._inheritTheme$p$2) {
            $removeHandler(this._inheritTheme$p$2, 'click', this._inheritThemeChangeHandler$p$2);
            $removeHandler(this._selectTheme$p$2, 'click', this._inheritThemeChangeHandler$p$2);
        }
        var moreColorsLink = $get('dark1-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('light1-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('dark2-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('light2-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent1-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent2-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent3-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent4-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent5-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('accent6-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('hlink-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        moreColorsLink = $get('folHlink-more');
        $removeHandler(moreColorsLink, 'click', this._moreColorsClickHandler$p$2);
        $removeHandler(moreColorsLink.parentNode.getElementsByTagName('div')[0], 'click', this._swatchClickHandler$p$2);
        $removeHandler(this._font1$p$2, 'change', this._fontSelectionChangeHandler$p$2);
        $removeHandler(this._font2$p$2, 'change', this._fontSelectionChangeHandler$p$2);
        $removeHandler(this._previewButton$p$2, 'click', this._previewButtonClickHandler$p$2);
        Sys.Component.prototype.dispose.call(this);
    },
    
    _onLoad$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onLoad$p$2(sender, args) {
        this._themeWebPage$p$2 = document.body.control;
        this._previewButton$p$2.disabled = this._themeWebPage$p$2.get_thmxThemes().value === SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._currentThemeValue$p;
        this._themeWebPage$p$2.add_themeDisplayUpdated(this.$$d__onThemeDisplayUpdated$p$2);
        if (this._inheritTheme$p$2) {
            this._onInheritThemeChange$p$2(null);
        }
    },
    
    _onInheritThemeChange$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onInheritThemeChange$p$2(evt) {
        var inheritThemeChecked = this._inheritTheme$p$2.checked;
        this._themeWebPage$p$2.get_thmxThemes().disabled = inheritThemeChecked;
        SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._toggleSectionVisibility$p(this._customizeThemeSection$p$2, inheritThemeChecked);
    },
    
    _onSwatchClick$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onSwatchClick$p$2(evt) {
        var colorInput = null;
        if (evt.target.parentNode.className) {
            colorInput = evt.target.parentNode.parentNode.getElementsByTagName('input')[0];
        }
        else {
            colorInput = evt.target.parentNode.getElementsByTagName('input')[0];
        }
        if (colorInput) {
            this._showSelectColorDialog$p$2(colorInput);
        }
    },
    
    _onMoreColorsClick$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onMoreColorsClick$p$2(evt) {
        evt.preventDefault();
        this._showSelectColorDialog$p$2(evt.target.parentNode.getElementsByTagName('input')[0]);
    },
    
    _showSelectColorDialog$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_showSelectColorDialog$p$2(colorInput) {
        var dialogOptions = new SP.UI.DialogOptions();
        dialogOptions.args = (colorInput.value) ? colorInput.value : '#FFFFFF';
        var url = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl() + 'morecolors.aspx');
        dialogOptions.url = url;
        dialogOptions.title = SP.Publishing.Resources.enhancedThemingColorDialogTitle;
        var $$t_7 = this;
        dialogOptions.dialogReturnValueCallback = function(dialogResult, returnValue) {
            if (dialogResult === SP.UI.DialogResult.OK) {
                $$t_7._onThemeCustomized$p$2();
                var customTheme = window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p];
                var modifiedColor = customTheme[colorInput.getAttribute('themecolor')];
                $$t_7._updateThemeColorObject$p$2(modifiedColor, returnValue);
            }
        };
        SP.UI.ModalDialog.showModalDialog(dialogOptions);
    },
    
    _updateThemeColorObject$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_updateThemeColorObject$p$2(themeColor, newColor) {
        themeColor.DefaultColor.HtmlColor = newColor;
        var shades = themeColor.Shades;
        shades[0].HtmlColor = newColor;
        for (var i = 1; i < 6; ++i) {
            shades[i].HtmlColor = '';
        }
        var $$t_9 = this, $$t_A = this;
        getShadesForColor(newColor, null, function(result, context) {
            var newShades = Sys.Serialization.JavaScriptSerializer.deserialize(result);
            themeColor.Shades = newShades;
            $$t_9._themeWebPage$p$2.updateThemeDisplay();
        }, function(result, context) {
            alert(String.format(SP.Publishing.Resources.enhancedThemingGetShadesServerError, result));
        });
    },
    
    _onFontSelectionChanged$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onFontSelectionChanged$p$2(evt) {
        this._onThemeCustomized$p$2();
        var customTheme = window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p];
        var modifiedFont = customTheme[evt.target.getAttribute('themefont')];
        modifiedFont.LatinFont = (evt.target).value;
        this._themeWebPage$p$2.updateThemeDisplay();
    },
    
    _onPreviewButtonClick$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onPreviewButtonClick$p$2(evt) {
        var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Publishing.Resources.enhancedThemingPreviewDialogTitle, SP.Publishing.Resources.enhancedThemingPreviewDialogText);
        var $$t_7 = this, $$t_8 = this;
        prepareForThemePreview(this._themeWebPage$p$2.get_thmxThemes().value, null, function(result, context) {
            waitDialog.close(SP.UI.DialogResult.OK);
            var dialogUrl = null;
            if ($$t_7._themeWebPage$p$2.get_thmxThemes().value === SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p) {
                dialogUrl = SP.PageContextInfo.get_webServerRelativeUrl() + '?ThemeOverride=' + encodeURIComponent(SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomPreviewThemeUrl$p);
            }
            else {
                dialogUrl = SP.PageContextInfo.get_webServerRelativeUrl() + '?ThemeOverride=' + encodeURIComponent($$t_7._themeWebPage$p$2.get_thmxThemes().value);
            }
            window.self.commonShowModalDialog(dialogUrl, 'dialogWidth:800px; dialogHeight:600px; resizable:yes; help:no;');
        }, function(result, context) {
            waitDialog.close(SP.UI.DialogResult.OK);
            alert(String.format(SP.Publishing.Resources.enhancedThemingGenThemeServerError, result));
        });
    },
    
    _onThemeCustomized$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onThemeCustomized$p$2() {
        var customThemeOption = SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._findOptionByValue$p(this._themeWebPage$p$2.get_thmxThemes(), SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p);
        if (!customThemeOption || this._themeSelectionChanged$p$2) {
            if (this._themeWebPage$p$2.get_thmxThemes().value) {
                window.self.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p] = window.self.Clone(window.themes[this._themeWebPage$p$2.get_thmxThemes().value]);
            }
            if (!customThemeOption) {
                customThemeOption = document.createElement('option');
                customThemeOption.setAttribute('value', SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p);
                customThemeOption.appendChild(document.createTextNode(SP.Publishing.Resources.enhancedThemingCustomTheme));
                this._themeWebPage$p$2.get_thmxThemes().insertBefore(customThemeOption, this._themeWebPage$p$2.get_thmxThemes().options[1]);
            }
        }
        this._themeWebPage$p$2.get_thmxThemes().value = SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p;
        this._customThemeDirty$p$2.value = 'true';
        $get('themeCustomizedWarning').style.display = 'block';
        this._themeSelectionChanged$p$2 = false;
    },
    
    _onThemeDisplayUpdated$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_onThemeDisplayUpdated$p$2(sender, args) {
        this._themeSelectionChanged$p$2 = true;
        this._previewButton$p$2.disabled = this._themeWebPage$p$2.get_thmxThemes().value === SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._currentThemeValue$p;
        var theme = window.themes[this._themeWebPage$p$2.get_thmxThemes().value];
        if (!theme) {
            theme = window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p];
        }
        this._dark1$p$2.value = theme.DarkColor1.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._dark1$p$2);
        this._light1$p$2.value = theme.LightColor1.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._light1$p$2);
        this._dark2$p$2.value = theme.DarkColor2.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._dark2$p$2);
        this._light2$p$2.value = theme.LightColor2.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._light2$p$2);
        this._accent1$p$2.value = theme.AccentColor1.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent1$p$2);
        this._accent2$p$2.value = theme.AccentColor2.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent2$p$2);
        this._accent3$p$2.value = theme.AccentColor3.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent3$p$2);
        this._accent4$p$2.value = theme.AccentColor4.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent4$p$2);
        this._accent5$p$2.value = theme.AccentColor5.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent5$p$2);
        this._accent6$p$2.value = theme.AccentColor6.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._accent6$p$2);
        this._hlink$p$2.value = theme.HyperlinkColor.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._hlink$p$2);
        this._folHlink$p$2.value = theme.FollowedHyperlinkColor.DefaultColor.HtmlColor;
        this._updateColorSwatch$p$2(this._folHlink$p$2);
        var font = theme.MajorFont.LatinFont;
        var fontOption = SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._findOptionByValue$p(this._font1$p$2, font);
        if (!fontOption) {
            fontOption = document.createElement('option');
            fontOption.setAttribute('value', font);
            fontOption.appendChild(document.createTextNode(font));
            this._font1$p$2.appendChild(fontOption);
        }
        fontOption.selected = true;
        font = theme.MinorFont.LatinFont;
        fontOption = SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._findOptionByValue$p(this._font2$p$2, font);
        if (!fontOption) {
            fontOption = document.createElement('option');
            fontOption.setAttribute('value', font);
            fontOption.appendChild(document.createTextNode(font));
            this._font2$p$2.appendChild(fontOption);
        }
        fontOption.selected = true;
    },
    
    _updateColorSwatch$p$2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$_updateColorSwatch$p$2(colorInput) {
        colorInput.parentNode.getElementsByTagName('div')[1].style.backgroundColor = colorInput.value;
        colorInput.parentNode.getElementsByTagName('span')[0].innerHTML = colorInput.value;
    },
    
    get_inheritTheme: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_inheritTheme() {
        return this._inheritTheme$p$2;
    },
    set_inheritTheme: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_inheritTheme(value) {
        this._inheritTheme$p$2 = value;
        return value;
    },
    
    get_selectTheme: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_selectTheme() {
        return this._selectTheme$p$2;
    },
    set_selectTheme: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_selectTheme(value) {
        this._selectTheme$p$2 = value;
        return value;
    },
    
    get_customizeThemeSection: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_customizeThemeSection() {
        return this._customizeThemeSection$p$2;
    },
    set_customizeThemeSection: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_customizeThemeSection(value) {
        this._customizeThemeSection$p$2 = value;
        return value;
    },
    
    get_dark1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_dark1() {
        return this._dark1$p$2;
    },
    set_dark1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_dark1(value) {
        this._dark1$p$2 = value;
        return value;
    },
    
    get_light1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_light1() {
        return this._light1$p$2;
    },
    set_light1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_light1(value) {
        this._light1$p$2 = value;
        return value;
    },
    
    get_dark2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_dark2() {
        return this._dark2$p$2;
    },
    set_dark2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_dark2(value) {
        this._dark2$p$2 = value;
        return value;
    },
    
    get_light2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_light2() {
        return this._light2$p$2;
    },
    set_light2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_light2(value) {
        this._light2$p$2 = value;
        return value;
    },
    
    get_accent1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent1() {
        return this._accent1$p$2;
    },
    set_accent1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent1(value) {
        this._accent1$p$2 = value;
        return value;
    },
    
    get_accent2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent2() {
        return this._accent2$p$2;
    },
    set_accent2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent2(value) {
        this._accent2$p$2 = value;
        return value;
    },
    
    get_accent3: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent3() {
        return this._accent3$p$2;
    },
    set_accent3: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent3(value) {
        this._accent3$p$2 = value;
        return value;
    },
    
    get_accent4: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent4() {
        return this._accent4$p$2;
    },
    set_accent4: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent4(value) {
        this._accent4$p$2 = value;
        return value;
    },
    
    get_accent5: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent5() {
        return this._accent5$p$2;
    },
    set_accent5: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent5(value) {
        this._accent5$p$2 = value;
        return value;
    },
    
    get_accent6: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_accent6() {
        return this._accent6$p$2;
    },
    set_accent6: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_accent6(value) {
        this._accent6$p$2 = value;
        return value;
    },
    
    get_hlink: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_hlink() {
        return this._hlink$p$2;
    },
    set_hlink: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_hlink(value) {
        this._hlink$p$2 = value;
        return value;
    },
    
    get_folHlink: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_folHlink() {
        return this._folHlink$p$2;
    },
    set_folHlink: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_folHlink(value) {
        this._folHlink$p$2 = value;
        return value;
    },
    
    get_font1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_font1() {
        return this._font1$p$2;
    },
    set_font1: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_font1(value) {
        this._font1$p$2 = value;
        return value;
    },
    
    get_font2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_font2() {
        return this._font2$p$2;
    },
    set_font2: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_font2(value) {
        this._font2$p$2 = value;
        return value;
    },
    
    get_previewButton: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$get_previewButton() {
        return this._previewButton$p$2;
    },
    set_previewButton: function SP_UI_Publishing_LayoutsPages_EnhancedThemingOptions$set_previewButton(value) {
        this._previewButton$p$2 = value;
        return value;
    }
}


SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.registerClass('SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions', Sys.UI.Control);
function sp_ui_publishing_layoutspages_initialize() {
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._currentThemeValue$p = '_current';
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._customThemeFileUrl$p = '_themes/Custom.thmx';
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomThemeUrl$p = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._customThemeFileUrl$p);
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._customPreviewThemeFileUrl$p = '_themes/CustomPreview.thmx';
SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._serverRelativeCustomPreviewThemeUrl$p = SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions._customPreviewThemeFileUrl$p);
};
sp_ui_publishing_layoutspages_initialize();

function Clone(obj) {
    if (obj == null || typeof(obj) != 'object')
        return obj;

    var clone = new obj.constructor();
    for(var key in obj)
        clone[key] = Clone(obj[key]);

    return clone;
}

RegisterModuleInit("sp.ui.publishing.layoutspages.js", sp_ui_publishing_layoutspages_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.Publishing.LayoutsPages.js");
}
