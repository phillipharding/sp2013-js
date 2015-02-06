Type.registerNamespace("SP.UI.CommunityFeed");SP.UI.CommunityFeed.CommunitiesAutocomplete=function(){this.$$d_correctDropdownState=Function.createDelegate(this,this.correctDropdownState);this.$3_0={}};SP.UI.CommunityFeed.CommunitiesAutocomplete.$$cctor=function(){SP.UI.MicroFeed.SPMicroFeed.set_followedPeopleCallback(SP.UI.CommunityFeed.CommunitiesAutocomplete.$4.$$d_correctDropdownState);SP.UI.MicroFeed.SPMicroFeed.initializeForExternalUse();RTE.Canvas.registerAutocomplete(SP.UI.CommunityFeed.CommunitiesAutocomplete.$4)};SP.UI.CommunityFeed.CommunitiesAutocomplete.$F=function(a){return a.replace(SP.UI.CommunityFeed.CommunitiesAutocomplete.$G,"")};SP.UI.CommunityFeed.CommunitiesAutocomplete.prototype={$0_0:null,$5_0:null,$2_0:function(){var a=RTE.Canvas.currentEditableRegion();this.$R_0(a)},$R_0:function(a){if(a===this.$5_0)return;if(this.$0_0&&this.$0_0.get_isSuggestionMenuOpen()){SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();this.$0_0.reset();this.$0_0=null;this.$5_0=null}if(a){var b=false,d=communityDiscussionBoardId;if(typeof d!=="undefined")b=SP.UI.CommunityFeed.CommunitiesAutocomplete.$F(d)===SP.UI.CommunityFeed.CommunitiesAutocomplete.$F(SP.PageContextInfo.get_pageListId());b=b||SP.UI.CommunityFeed.CommunitiesAtMention.$B(a);if(!b)return;var c=this.$3_0[a.id];if(!c){c=new SP.UI.CommunityFeed.CommunitiesAtMention(a);this.$3_0[a.id]=c}this.$0_0=c;this.$5_0=a}},onKeyDown:function(a){this.$2_0();if(this.$0_0)if(this.$0_0.get_isHandlingSuggestions()&&(this.$0_0.get_isSuggestionMenuOpen()||!this.$0_0.get_$E_1()))this.$0_0.typeAheadKeyDownHandler(a);else a.ctrlKey&&32===a.keyCode&&this.$0_0.tryStart();return false},onKeyPress:function(a){this.$2_0();if(this.$0_0&&!this.$0_0.get_isSuggestionMenuOpen())(a.charCode===64||a.charCode===35)&&this.$0_0.tryStart();return false},onKeyUp:function(a){this.$2_0();this.$0_0&&this.$0_0.get_isHandlingSuggestions()&&a.keyCode!==27&&this.$0_0.typeAheadKeyUpHandler(a);return false},stop:function(){SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector()},correctDropdownState:function(){this.$2_0();this.$0_0&&this.$0_0.get_isHandlingSuggestions()&&this.$0_0.correctDropdownState()},onTextChanged:function(){},$I_0:false,get_isStarted:function(){var a=!!this.$0_0&&this.$0_0.get_isHandlingSuggestions();if(!!(a^this.$I_0)){this.$I_0=a;RTE.Canvas.changeKeyTimeout(a)}return a},isSuggestionNode:function(a){return this.$0_0&&this.$0_0.get_isSuggestionMenuOpen()?this.$0_0.isSuggestionNode(a):false}};SP.UI.CommunityFeed.CommunitiesAtMention=function(a){this.$$d_$Q_1=Function.createDelegate(this,this.$Q_1);SP.UI.CommunityFeed.CommunitiesAtMention.initializeBase(this,[SP.UI.MicroFeed.SPMicroFeed.maxResolvedMentions]);this.$1_1=a;$addHandler(a,"click",SP.UI.CommunityFeed.CommunitiesAtMention.$O)};SP.UI.CommunityFeed.CommunitiesAtMention.$P=function(b){var a=new RegExp("\\s","gi");return b.replace(a," ")};SP.UI.CommunityFeed.CommunitiesAtMention.$B=function(a){return Sys.UI.DomElement.containsCssClass(a,"ms-comm-postReplyTextBox")};SP.UI.CommunityFeed.CommunitiesAtMention.$O=function(b){var a=b.target;if(a&&a.nodeType===1&&a.tagName==="A")if(Sys.UI.DomElement.containsCssClass(a,"ms-atMention")||Sys.UI.DomElement.containsCssClass(a,"ms-hashTag")){var c=a.href;window.open(c);b.preventDefault();b.stopPropagation()}};SP.UI.CommunityFeed.CommunitiesAtMention.prototype={$C_1:null,$1_1:null,addAdditionalWarningMessages:function(c,a){var b=communityDiscussionPostAllowed;if(typeof b==="undefined"||!b){if(!a){a=this.moveSuggestionDropDownToCurrentOwner();a.innerHTML=""}var d=this.m_handlingMode===2?SpsClient.ScriptResources.privacyTagNotAllowedWarningText:SpsClient.ScriptResources.privacyMentionNotAllowedWarningText;this.addStandardDropdownWarning(a,d,"_privacywarning");var e=this.createLinkElement(c,1,"ChangePrivacy","ms-microfeed-changePrivacySettingsDiv",SpsClient.ScriptResources.changePrivacyElement);a.appendChild(e);return false}this.m_handlingMode===1&&this.addMentionsWarningTextWhenTargetting(a,SP.PageContextInfo.get_webTitle());return true},onElementSelected:function(e,a,c){if(a.displayName==="ChangePrivacy"){if(confirm(SpsClient.ScriptResources.changePrivacyNavigateAwayWarning)){var b=window.location.href;if(typeof AjaxNavigate$convertMDSURLtoRegularURL==="function")b=AjaxNavigate$convertMDSURLtoRegularURL(window.location.href)||b;var d=String.format("FeedRedirector.aspx?type=privacy&value={0}",encodeURIComponent(b));STSNavigate(SP.Utilities.VersionUtility.getLayoutsPageUrl(d))}return}this.$A_1(a.alias,a.displayName,c);SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector()},$A_1:function(d,c,f){var a,e=this.$9_1();if(e.length>=this.m_MaxToResolve&&!Array.contains(e,d))a=document.createTextNode(this.get_$6_1()+c);else{a=document.createElement(RTE.HtmlTagName.SPAN);a.setAttribute("contentEditable",false);a.setAttribute(this.get_$7_1(),d);a.setAttribute(this.get_$M_1(),c);a.className=RTE.Canvas.atomicItemClass+" ms-socialentity";this.m_handlingMode!==2&&a.appendChild(document.createTextNode(this.get_$6_1()));var b=document.createElement(RTE.HtmlTagName.a);b.href=this.$K_1(d,c);b.rel=c;Sys.UI.DomElement.addCssClass(b,this.get_$L_1());a.appendChild(b);b.appendChild(document.createTextNode(c))}this.$H_1(a,f)},$K_1:function(b,c){var a;switch(this.m_handlingMode){case 1:a=String.format("FeedRedirector.aspx?type=mention&value={0}",encodeURIComponent(b));break;case 2:a=String.format("FeedRedirector.aspx?type=tag&value={0}",encodeURIComponent(c));break;default:throw Error.invalidOperation("Invalid mode");}return SP.Utilities.VersionUtility.getLayoutsPageUrl(a)},get_$6_1:function(){switch(this.m_handlingMode){case 1:return"@";case 2:return"#"}throw Error.invalidOperation("Invalid mode");},get_$L_1:function(){switch(this.m_handlingMode){case 1:return"ms-atMention";case 2:return"ms-hashTag"}throw Error.invalidOperation("Invalid mode");},get_$7_1:function(){switch(this.m_handlingMode){case 1:return"data-atmention";case 2:return"data-hashtag"}throw Error.invalidOperation("Invalid mode");},get_$M_1:function(){switch(this.m_handlingMode){case 1:return"data-atname";case 2:return"data-hashname"}throw Error.invalidOperation("Invalid mode");},updateOwnerControlWithNewText:function(a){this.$H_1(document.createTextNode(this.get_$6_1()+a),false)},sendFocusBackToOwnerControl:function(){RTE.Cursor.update()},$8_1:function(){var b=RTE.AutocompleteParseData.parseCurrent(" @"),c=RTE.AutocompleteParseData.parseCurrent(" #"),a=null;if(!!(!b^!c))a=b||c;else if(b&&c)a=b.get_parsedText().length>c.get_parsedText().length?c:b;if(!a||!a.get_parsedText()||!a.get_parsedText().length){this.m_handlingMode=0;a=null}else if(a===b)this.m_handlingMode=1;else if(a===c)this.m_handlingMode=2;return a},calculateCurrentState:function(){var a=this.$8_1(),b=new SP.UI.MicroFeed.OwnerControlState,c=1;if(this.m_handlingMode===2)c=0;b.prefix=a?SP.UI.CommunityFeed.CommunitiesAtMention.$P(a.get_parsedText().substr(c)):"";return b},get_ownerControlId:function(){return this.$1_1.id},get_dropDownBeforeSibling:function(){return this.$1_1.parentNode},get_$E_1:function(){return this.$9_1().length>=SP.UI.MicroFeed.SPMicroFeed.maxResolvedMentions},$9_1:function(){var a=[];if(this.get_isHandlingSuggestions()){var b=this;RTE.RteUtility.forEachChildWithTagAndClass(this.$1_1,RTE.HtmlTagName.SPAN,"ms-socialentity",function(d){if(d){var c=d.getAttribute(b.get_$7_1());c&&!Array.contains(a,c)&&Array.add(a,c)}})}return a},get_shouldDisplayTooManyWarning:function(){return this.get_isHandlingSuggestions()&&this.get_$E_1()},get_shouldProvideSuggestions:function(){this.calculateCurrentState();return this.get_isHandlingSuggestions()},get_isHandlingSuggestions:function(){return!!this.m_handlingMode},fullContainerChanged:function(a){if(a){a.style.width=this.$N_1(this.$1_1).clientWidth+"px";this.$C_1=a;Sys.UI.DomElement.addCssClass(a,SP.UI.CommunityFeed.CommunitiesAtMention.$B(this.$1_1)?"ms-comm-feedsuggestions-reply":"ms-comm-feedsuggestions-post")}},$N_1:function(c){for(var a=c,b=0;b<4&&a;b++){if(Sys.UI.DomElement.containsCssClass(a,RTE.Canvas.inputBoxClass))return a;a=a.parentNode}return c},$D_1:0,tryStart:function(){window.clearTimeout(this.$D_1);this.$D_1=window.setTimeout(this.$$d_$Q_1,0)},$Q_1:function(){var a=this.calculateCurrentState();a&&this.get_isHandlingSuggestions()&&this.buildSuggestionDropDown(a)},$H_1:function(b,d){var a=this.$8_1();if(a&&this.m_handlingMode){a.replaceWith(b);if(d){var c=a.get_parsedText().length>0?a.get_parsedText().charAt(a.get_parsedText().length-1).toString():" ";b.parentNode.insertBefore(document.createTextNode(c),b.nextSibling)}RTE.Cursor.update()}},isSuggestionNode:function(a){while(a){if(a===this.$C_1)return true;a=a.parentNode}return false},typeAheadKeyUpHandler:function(d){var a=communityDiscussionPostAllowed;if(typeof a==="undefined"||!a)return;if(this.m_handlingMode===2){if(d.keyCode===8)return;var b=this.calculateCurrentState(),c=SP.UI.MicroFeed.BaseAtMention.getTagEndIndex(b.prefix.substr(1),false);if(c>1){var e=b.prefix.substring(0,c+1);this.$A_1(SP.UI.MicroFeed.BaseAtMention.emptyGuid,e,true)}}SP.UI.MicroFeed.BaseAtMention.prototype.typeAheadKeyUpHandler.call(this,d)}};SP.UI.CommunityFeed.CommunitiesAutocomplete.registerClass("SP.UI.CommunityFeed.CommunitiesAutocomplete",null,RTE.IAutocomplete);SP.UI.CommunityFeed.CommunitiesAtMention.registerClass("SP.UI.CommunityFeed.CommunitiesAtMention",SP.UI.MicroFeed.BaseAtMention);function sp_ui_communityfeed_initialize(){SP.UI.CommunityFeed.CommunitiesAutocomplete.$4=new SP.UI.CommunityFeed.CommunitiesAutocomplete;SP.UI.CommunityFeed.CommunitiesAutocomplete.$G=new RegExp("\\{|-|\\}","g");SP.UI.CommunityFeed.CommunitiesAutocomplete.$$cctor()}sp_ui_communityfeed_initialize();RegisterModuleInit("sp.ui.communityfeed.js",sp_ui_communityfeed_initialize);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.CommunityFeed.js");