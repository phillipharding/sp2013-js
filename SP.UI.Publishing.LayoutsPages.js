function ULSYD9(){var o=new Object;o.ULSTeamName="CMS";o.ULSFileName="SP.UI.Publishing.LayoutsPages.js";return o;}
Type.registerNamespace("SP.UI.Publishing.LayoutsPages");SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions=function(a){ULSYD9:;this.$$d_$e_2=Function.createDelegate(this,this.$e_2);this.$$d_$c_2=Function.createDelegate(this,this.$c_2);this.$$d_$Z_2=Function.createDelegate(this,this.$Z_2);this.$$d_$d_2=Function.createDelegate(this,this.$d_2);this.$$d_$b_2=Function.createDelegate(this,this.$b_2);this.$$d_$V_2=Function.createDelegate(this,this.$V_2);this.$$d_$a_2=Function.createDelegate(this,this.$a_2);SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.initializeBase(this,[a])};SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$f=function(c,d){ULSYD9:;var a=null,b=c;while(b.previousSibling){b=b.previousSibling;if(b.nodeType===1){a=b;break}}if(!d){c.style.display="";if(a)a.style.display=""}else{c.style.display="none";if(a)a.style.display="none"}};SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$Q=function(d,e){ULSYD9:;for(var b=d.getElementsByTagName("option"),a=0;a<b.length;++a){var c=b[a];if(c.value===e)return c}return null};SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.prototype={$2_2:null,$5_2:null,$O_2:null,$T_2:null,$S_2:false,$I_2:null,$M_2:null,$J_2:null,$N_2:null,$C_2:null,$D_2:null,$E_2:null,$F_2:null,$G_2:null,$H_2:null,$L_2:null,$K_2:null,$6_2:null,$7_2:null,$8_2:null,$P_2:null,$U_2:null,$B_2:null,$A_2:null,$R_2:null,$0_2:null,$1_2:null,initialize:function(){ULSYD9:;Sys.Component.prototype.initialize.call(this);this.$T_2=this.get_element();this.$U_2=this.$$d_$a_2;Sys.Application.add_load(this.$U_2);if(this.$5_2){this.$B_2=this.$$d_$V_2;$addHandler(this.$5_2,"click",this.$B_2);$addHandler(this.$O_2,"click",this.$B_2)}this.$0_2=this.$$d_$b_2;this.$1_2=this.$$d_$d_2;var a=$get("dark1-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("light1-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("dark2-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("light2-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent1-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent2-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent3-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent4-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent5-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent6-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("hlink-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("folHlink-more");$addHandler(a,"click",this.$0_2);$addHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);this.$A_2=this.$$d_$Z_2;$addHandler(this.$6_2,"change",this.$A_2);$addHandler(this.$7_2,"change",this.$A_2);this.$R_2=this.$$d_$c_2;$addHandler(this.$8_2,"click",this.$R_2)},dispose:function(){ULSYD9:;if(this.$5_2){$removeHandler(this.$5_2,"click",this.$B_2);$removeHandler(this.$O_2,"click",this.$B_2)}var a=$get("dark1-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("light1-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("dark2-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("light2-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent1-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent2-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent3-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent4-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent5-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("accent6-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("hlink-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);a=$get("folHlink-more");$removeHandler(a,"click",this.$0_2);$removeHandler(a.parentNode.getElementsByTagName("div")[0],"click",this.$1_2);$removeHandler(this.$6_2,"change",this.$A_2);$removeHandler(this.$7_2,"change",this.$A_2);$removeHandler(this.$8_2,"click",this.$R_2);Sys.Component.prototype.dispose.call(this)},$a_2:function(){ULSYD9:;this.$2_2=document.body.control;this.$8_2.disabled=this.$2_2.get_thmxThemes().value==="_current";this.$2_2.add_themeDisplayUpdated(this.$$d_$e_2);this.$5_2&&this.$V_2(null)},$V_2:function(){ULSYD9:;var a=this.$5_2.checked;this.$2_2.get_thmxThemes().disabled=a;SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$f(this.$P_2,a)},$d_2:function(b){ULSYD9:;var a=null;if(b.target.parentNode.className)a=b.target.parentNode.parentNode.getElementsByTagName("input")[0];else a=b.target.parentNode.getElementsByTagName("input")[0];a&&this.$Y_2(a)},$b_2:function(a){ULSYD9:;a.preventDefault();this.$Y_2(a.target.parentNode.getElementsByTagName("input")[0])},$Y_2:function(b){ULSYD9:;var a=new SP.UI.DialogOptions;a.args=b.value?b.value:"#FFFFFF";var d=SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(),SP.Utilities.Utility.get_layoutsLatestVersionRelativeUrl()+"morecolors.aspx");a.url=d;a.title=SP.Publishing.Resources.enhancedThemingColorDialogTitle;var c=this;a.dialogReturnValueCallback=function(a,d){ULSYD9:;if(a===1){c.$W_2();var e=window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4],f=e[b.getAttribute("themecolor")];c.$g_2(f,d)}};SP.UI.ModalDialog.showModalDialog(a)},$g_2:function(b,c){ULSYD9:;b.DefaultColor.HtmlColor=c;var d=b.Shades;d[0].HtmlColor=c;for(var a=1;a<6;++a)d[a].HtmlColor="";var e=this,f=this;getShadesForColor(c,null,function(a){ULSYD9:;var c=Sys.Serialization.JavaScriptSerializer.deserialize(a);b.Shades=c;e.$2_2.updateThemeDisplay()},function(a){ULSYD9:;alert(String.format(SP.Publishing.Resources.enhancedThemingGetShadesServerError,a))})},$Z_2:function(a){ULSYD9:;this.$W_2();var b=window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4],c=b[a.target.getAttribute("themefont")];c.LatinFont=a.target.value;this.$2_2.updateThemeDisplay()},$c_2:function(){ULSYD9:;var b=SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Publishing.Resources.enhancedThemingPreviewDialogTitle,SP.Publishing.Resources.enhancedThemingPreviewDialogText),a=this,c=this;prepareForThemePreview(this.$2_2.get_thmxThemes().value,null,function(){ULSYD9:;b.close(1);var c=null;if(a.$2_2.get_thmxThemes().value===SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4)c=SP.PageContextInfo.get_webServerRelativeUrl()+"?ThemeOverride="+encodeURIComponent(SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$X);else c=SP.PageContextInfo.get_webServerRelativeUrl()+"?ThemeOverride="+encodeURIComponent(a.$2_2.get_thmxThemes().value);window.self.commonShowModalDialog(c,"dialogWidth:800px; dialogHeight:600px; resizable:yes; help:no;")},function(a){ULSYD9:;b.close(1);alert(String.format(SP.Publishing.Resources.enhancedThemingGenThemeServerError,a))})},$W_2:function(){ULSYD9:;var a=SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$Q(this.$2_2.get_thmxThemes(),SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4);if(!a||this.$S_2){if(this.$2_2.get_thmxThemes().value)window.self.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4]=window.self.Clone(window.themes[this.$2_2.get_thmxThemes().value]);if(!a){a=document.createElement("option");a.setAttribute("value",SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4);a.appendChild(document.createTextNode(SP.Publishing.Resources.enhancedThemingCustomTheme));this.$2_2.get_thmxThemes().insertBefore(a,this.$2_2.get_thmxThemes().options[1])}}this.$2_2.get_thmxThemes().value=SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4;this.$T_2.value="true";$get("themeCustomizedWarning").style.display="block";this.$S_2=false},$e_2:function(){ULSYD9:;this.$S_2=true;this.$8_2.disabled=this.$2_2.get_thmxThemes().value==="_current";var a=window.themes[this.$2_2.get_thmxThemes().value];if(!a)a=window.themes[SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4];this.$I_2.value=a.DarkColor1.DefaultColor.HtmlColor;this.$3_2(this.$I_2);this.$M_2.value=a.LightColor1.DefaultColor.HtmlColor;this.$3_2(this.$M_2);this.$J_2.value=a.DarkColor2.DefaultColor.HtmlColor;this.$3_2(this.$J_2);this.$N_2.value=a.LightColor2.DefaultColor.HtmlColor;this.$3_2(this.$N_2);this.$C_2.value=a.AccentColor1.DefaultColor.HtmlColor;this.$3_2(this.$C_2);this.$D_2.value=a.AccentColor2.DefaultColor.HtmlColor;this.$3_2(this.$D_2);this.$E_2.value=a.AccentColor3.DefaultColor.HtmlColor;this.$3_2(this.$E_2);this.$F_2.value=a.AccentColor4.DefaultColor.HtmlColor;this.$3_2(this.$F_2);this.$G_2.value=a.AccentColor5.DefaultColor.HtmlColor;this.$3_2(this.$G_2);this.$H_2.value=a.AccentColor6.DefaultColor.HtmlColor;this.$3_2(this.$H_2);this.$L_2.value=a.HyperlinkColor.DefaultColor.HtmlColor;this.$3_2(this.$L_2);this.$K_2.value=a.FollowedHyperlinkColor.DefaultColor.HtmlColor;this.$3_2(this.$K_2);var c=a.MajorFont.LatinFont,b=SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$Q(this.$6_2,c);if(!b){b=document.createElement("option");b.setAttribute("value",c);b.appendChild(document.createTextNode(c));this.$6_2.appendChild(b)}b.selected=true;c=a.MinorFont.LatinFont;b=SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$Q(this.$7_2,c);if(!b){b=document.createElement("option");b.setAttribute("value",c);b.appendChild(document.createTextNode(c));this.$7_2.appendChild(b)}b.selected=true},$3_2:function(a){ULSYD9:;a.parentNode.getElementsByTagName("div")[1].style.backgroundColor=a.value;a.parentNode.getElementsByTagName("span")[0].innerHTML=a.value},get_inheritTheme:function(){ULSYD9:;return this.$5_2},set_inheritTheme:function(a){ULSYD9:;this.$5_2=a;return a},get_selectTheme:function(){ULSYD9:;return this.$O_2},set_selectTheme:function(a){ULSYD9:;this.$O_2=a;return a},get_customizeThemeSection:function(){ULSYD9:;return this.$P_2},set_customizeThemeSection:function(a){ULSYD9:;this.$P_2=a;return a},get_dark1:function(){ULSYD9:;return this.$I_2},set_dark1:function(a){ULSYD9:;this.$I_2=a;return a},get_light1:function(){ULSYD9:;return this.$M_2},set_light1:function(a){ULSYD9:;this.$M_2=a;return a},get_dark2:function(){ULSYD9:;return this.$J_2},set_dark2:function(a){ULSYD9:;this.$J_2=a;return a},get_light2:function(){ULSYD9:;return this.$N_2},set_light2:function(a){ULSYD9:;this.$N_2=a;return a},get_accent1:function(){ULSYD9:;return this.$C_2},set_accent1:function(a){ULSYD9:;this.$C_2=a;return a},get_accent2:function(){ULSYD9:;return this.$D_2},set_accent2:function(a){ULSYD9:;this.$D_2=a;return a},get_accent3:function(){ULSYD9:;return this.$E_2},set_accent3:function(a){ULSYD9:;this.$E_2=a;return a},get_accent4:function(){ULSYD9:;return this.$F_2},set_accent4:function(a){ULSYD9:;this.$F_2=a;return a},get_accent5:function(){ULSYD9:;return this.$G_2},set_accent5:function(a){ULSYD9:;this.$G_2=a;return a},get_accent6:function(){ULSYD9:;return this.$H_2},set_accent6:function(a){ULSYD9:;this.$H_2=a;return a},get_hlink:function(){ULSYD9:;return this.$L_2},set_hlink:function(a){ULSYD9:;this.$L_2=a;return a},get_folHlink:function(){ULSYD9:;return this.$K_2},set_folHlink:function(a){ULSYD9:;this.$K_2=a;return a},get_font1:function(){ULSYD9:;return this.$6_2},set_font1:function(a){ULSYD9:;this.$6_2=a;return a},get_font2:function(){ULSYD9:;return this.$7_2},set_font2:function(a){ULSYD9:;this.$7_2=a;return a},get_previewButton:function(){ULSYD9:;return this.$8_2},set_previewButton:function(a){ULSYD9:;this.$8_2=a;return a}};SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.registerClass("SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions",Sys.UI.Control);function sp_ui_publishing_layoutspages_initialize(){ULSYD9:;SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$4=SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(),"_themes/Custom.thmx");SP.UI.Publishing.LayoutsPages.EnhancedThemingOptions.$X=SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(),"_themes/CustomPreview.thmx")}sp_ui_publishing_layoutspages_initialize();function Clone(a){ULSYD9:;if(a==null||typeof a!="object")return a;var b=new a.constructor;for(var c in a)b[c]=Clone(a[c]);return b}RegisterModuleInit("sp.ui.publishing.layoutspages.js",sp_ui_publishing_layoutspages_initialize);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.Publishing.LayoutsPages.js");