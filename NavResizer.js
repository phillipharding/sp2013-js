function ULS4S1(){var o=new Object;o.ULSTeamName="DLC Server";o.ULSFileName="NavResizer.js";return o;}
Type.registerNamespace("Microsoft.Office.Server.Ajax");Microsoft.Office.Server.Ajax.NavResizer=function(e,c,d,a,b){ULS4S1:;this.$$d_$19_0=Function.createDelegate(this,this.$19_0);this.$$d_$1E_0=Function.createDelegate(this,this.$1E_0);this.$$d_$1D_0=Function.createDelegate(this,this.$1D_0);this.$$d_$1I_0=Function.createDelegate(this,this.$1I_0);this.$$d_$1G_0=Function.createDelegate(this,this.$1G_0);this.$$d_$1H_0=Function.createDelegate(this,this.$1H_0);this.$$d_$1F_0=Function.createDelegate(this,this.$1F_0);this.$K_0=-1;this.$G_0=document.documentElement.dir==="ltr";if(null!==Microsoft.Office.Server.Ajax.NavResizer.Instance)return;Microsoft.Office.Server.Ajax.NavResizer.Instance=this;this.$S_0=e;this.$O_0=c;this.$R_0=d;this.$P_0=a;this.$w_0=b;if(!this.get_$1P_0())return;this.$J_0=this.$$d_$1F_0;this.$a_0=this.$$d_$1H_0;this.$Z_0=this.$$d_$1G_0;this.$b_0=this.$$d_$1I_0;this.$u_0=this.$$d_$1D_0;this.$v_0=this.$$d_$1E_0;this.Load()};Microsoft.Office.Server.Ajax.NavResizer.calculateOffsetTop=function(b){ULS4S1:;var a=Sys.UI.DomElement.getLocation(b);return a.y};Microsoft.Office.Server.Ajax.NavResizer.$n=function(c){ULS4S1:;for(var b=null,a=0;a<c.childNodes.length;++a){if(c.childNodes[a].nodeType!==1)continue;if(b)return null;b=c.childNodes[a]}return b};Microsoft.Office.Server.Ajax.NavResizer.$1A=function(c){ULS4S1:;var a=Microsoft.Office.Server.Ajax.NavResizer.$m(c,-1),b=Microsoft.Office.Server.Ajax.NavResizer.$9(c);a+=Microsoft.Office.Server.Ajax.NavResizer.$6(b.marginLeft);a+=Microsoft.Office.Server.Ajax.NavResizer.$6(b.marginRight);return a};Microsoft.Office.Server.Ajax.NavResizer.$m=function(a,b){ULS4S1:;var d=b,e=!!a.clientWidth,f=!e||a.hasChildNodes();if(b<Math.max(a.clientWidth,a.scrollWidth))b=Math.max(a.clientWidth,a.scrollWidth);if(f)for(var c=0;c<a.childNodes.length;++c){if(a.childNodes[c].nodeType!==1)continue;var h=Microsoft.Office.Server.Ajax.NavResizer.$m(a.childNodes[c],b);b=Math.max(b,h)}var g=Microsoft.Office.Server.Ajax.NavResizer.$1B(a)&&b>d;return g?b+17:b};Microsoft.Office.Server.Ajax.NavResizer.$1B=function(a){ULS4S1:;return!Microsoft.Office.Server.Ajax.NavResizer.$3(a)&&!!a.clientHeight&&a.clientHeight<a.scrollHeight&&Microsoft.Office.Server.Ajax.NavResizer.$9(a).overflowY!=="hidden"};Microsoft.Office.Server.Ajax.NavResizer.$f=function(b){ULS4S1:;var a=b.nextSibling;while(a&&a.nodeType!==1)a=a.nextSibling;return a};Microsoft.Office.Server.Ajax.NavResizer.$1C=function(b){ULS4S1:;var a=b.previousSibling;while(a&&a.nodeType!==1)a=a.previousSibling;return a};Microsoft.Office.Server.Ajax.NavResizer.$F=function(b,c){ULS4S1:;var a=Microsoft.Office.Server.Ajax.NavResizer.$j(b,c,true);return a&&a.length>0?a[0]:null};Microsoft.Office.Server.Ajax.NavResizer.$j=function(a,c,d){ULS4S1:;if(!Microsoft.Office.Server.Ajax.NavResizer.$3(a.getElementsByClassName)){var b=a.getElementsByClassName(c);if(d){if(Microsoft.Office.Server.Ajax.NavResizer.$3(b)||b.length<=1)return b;var e=[];e[0]=b[0];return e}return b}if(!Microsoft.Office.Server.Ajax.NavResizer.$3(a.querySelectorAll)){if(d){var f=a.querySelector("."+c),g=[];if(!Microsoft.Office.Server.Ajax.NavResizer.$3(f))g[0]=f;return g}return a.querySelectorAll("."+c)}else return Microsoft.Office.Server.Ajax.NavResizer.$k(a,c,d)};Microsoft.Office.Server.Ajax.NavResizer.$k=function(e,f,d){ULS4S1:;for(var a=[],g=0,b,c=0;c<e.childNodes.length;c++){b=e.childNodes[c];if(!Microsoft.Office.Server.Ajax.NavResizer.$3(b.className)&&b.className.indexOf(f)>=0){a[g++]=b;if(d)break}a=a.concat(Microsoft.Office.Server.Ajax.NavResizer.$k(b,f,d));if(a.length>0&&d)break}return a};Microsoft.Office.Server.Ajax.NavResizer.$6=function(b){ULS4S1:;var d=0;if(!Microsoft.Office.Server.Ajax.NavResizer.$3(b)){for(var a=0,a=0;a<b.length;a++){var c=b.charCodeAt(a);if(c===46||c>=48&&c<=57)continue;else break}if(a>0)d=parseFloat(b.substr(0,a))}return d};Microsoft.Office.Server.Ajax.NavResizer.$3=function(a){ULS4S1:;return a===null||typeof a==="undefined"};Microsoft.Office.Server.Ajax.NavResizer.$9=function($p0){var $v_0=$p0.currentStyle;if(!Microsoft.Office.Server.Ajax.NavResizer.$3($v_0))return $v_0;else{var $v_1=(eval("document")).defaultView;if(!Microsoft.Office.Server.Ajax.NavResizer.$3($v_1)&&!Microsoft.Office.Server.Ajax.NavResizer.$3($v_1.getComputedStyle)){$v_0=$v_1.getComputedStyle($p0,null);if(!Microsoft.Office.Server.Ajax.NavResizer.$3($v_0))return $v_0}}return $p0.style};Microsoft.Office.Server.Ajax.NavResizer.prototype={$S_0:null,$O_0:null,$R_0:null,$e_0:null,$5_0:null,$D_0:null,$0_0:null,$4_0:false,$1_0:null,$E_0:null,$7_0:false,$r_0:false,$J_0:null,$a_0:null,$Z_0:null,$b_0:null,$u_0:null,$v_0:null,$d_0:0,$x_0:0,$q_0:0,$p_0:0,$Y_0:0,$I_0:0,$L_0:null,$N_0:false,$1I_0:function(a){ULS4S1:;this.$L_0&&a.preventDefault()},$1F_0:function(b){ULS4S1:;var c=b.target;this.$N_0=c===this.$5_0;if(this.$N_0||c===this.$D_0){this.$L_0=c;this.$d_0=b.clientX;this.$x_0=b.clientY;$removeHandler(this.$L_0,"mousedown",this.$J_0);var a=document.body;$addHandler(a,"mouseup",this.$a_0);$addHandler(a,"mousemove",this.$Z_0);a.style.cursor=this.$N_0?"e-resize":"n-resize";this.$q_0=this.get_$A_0();this.$p_0=this.get_$T_0();a.focus();$addHandler(a,"selectstart",this.$b_0);b.preventDefault()}},$1H_0:function(b){ULS4S1:;this.$11_0(b);var a=document.body;$removeHandler(a,"mouseup",this.$a_0);$removeHandler(a,"mousemove",this.$Z_0);$addHandler(a,"selectstart",this.$b_0);a.style.cursor="default";$addHandler(this.$L_0,"mousedown",this.$J_0);this.$L_0=null},$1G_0:function(a){ULS4S1:;this.$11_0(a)},$1E_0:function(){ULS4S1:;this.$1O_0()},get_$10_0:function(){ULS4S1:;return this.$7_0?this.$0_0:$get("LeftNavigationAreaCell")},$1O_0:function(){ULS4S1:;if(!Microsoft.Office.Server.Ajax.NavResizer.$3(this.get_$10_0())){var a=Microsoft.Office.Server.Ajax.NavResizer.$1A(this.get_$10_0())+this.$s_0;if(a>this.get_$A_0()){this.set_$C_0(this.set_$A_0(this.$M_0(a)));this.$H_0()}}},$M_0:function(a){ULS4S1:;if(a>this.get_$y_0())a=this.get_$y_0();if(a<this.$I_0&&!this.get_$W_0())a=this.$I_0;return a},$17_0:function(a){ULS4S1:;if(a<this.get_$z_0())a=this.get_$z_0();return a},$1N_0:function(){ULS4S1:;if(this.$7_0)this.$I_0=190;else if(this.get_$B_0())this.$I_0=221;else this.$I_0=190},get_$y_0:function(){ULS4S1:;return document.body.offsetWidth/2},get_$z_0:function(){ULS4S1:;return 150},get_$W_0:function(){ULS4S1:;return!!document.body.className&&document.body.className.indexOf("ms-fullscreenmode")!==-1},$1D_0:function(){ULS4S1:;if(this.get_$W_0())this.$K_0=this.get_$C_0();this.$1J_0()},$1J_0:function(){ULS4S1:;var a=!this.get_$W_0()&&this.$K_0>-1,b=a?this.$K_0:this.get_$A_0();this.set_$C_0(this.set_$A_0(this.$M_0(b)));this.$H_0()},$l_0:function(){ULS4S1:;return eval("typeof(_fV4UI) != 'undefined' && _fV4UI")},$g_0:function(){ULS4S1:;if(this.$r_0)return;if(this.$l_0()){if(!this.$1_0){this.$1_0=$get("contentBox");if(!this.$1_0)this.$1_0=$get("MSO_ContentTable");if(!this.$1_0)this.$1_0=Microsoft.Office.Server.Ajax.NavResizer.$F(document.body,"main-container");if(!this.$1_0)this.$1_0=Microsoft.Office.Server.Ajax.NavResizer.$F(document.body,"res-cnt")}if(!this.$0_0){this.$0_0=$get("sideNavBox");this.$4_0=!!this.$0_0;if(!this.$0_0){this.$0_0=$get("s4-leftpanel");this.$4_0=!!this.$0_0;if(!this.$0_0)this.$0_0=$get("s4-rightpanel")}if(!this.$0_0){this.$0_0=Microsoft.Office.Server.Ajax.NavResizer.$F(document.body,"res-nav-l");this.$4_0=!!this.$0_0;if(!this.$0_0)this.$0_0=Microsoft.Office.Server.Ajax.NavResizer.$F(document.body,"res-nav-r")}}}if(null!==this.$1_0){Sys.UI.DomElement.addCssClass(this.$1_0,"ms-navresizeractive-contentbox");this.$1_0.style.minWidth="auto"}if(null!==this.$0_0){Sys.UI.DomElement.addCssClass(this.$0_0,"ms-navresizeractive-sideNavBox");this.$0_0.style.overflowX="hidden"}if(null!==this.get_$2_0()){Sys.UI.DomElement.addCssClass(this.get_$2_0(),"ms-navresizeractive-resizetarget");this.get_$2_0().style.overflowY="auto";this.get_$2_0().style.overflowX="hidden";if(this.$4_0&&this.$G_0)this.get_$2_0().style.marginRight="2px";else this.get_$2_0().style.marginLeft="2px"}if(null!==this.get_$8_0()&&this.$l_0()){Sys.UI.DomElement.addCssClass(this.get_$8_0(),"ms-navresizeractive-keyfilters");this.get_$8_0().style.overflowY="auto";this.get_$8_0().style.overflowX="hidden"}this.$7_0=!!this.$0_0&&!!this.$1_0;if(!this.$7_0)this.$4_0=true;this.$r_0=true;this.$1N_0()},$H_0:function(){ULS4S1:;this.$g_0();if(!this.$7_0)return;if(!this.$5_0){this.$5_0=document.createElement("div");this.$5_0.id="navresizerVerticalBar";this.$5_0.className="ms-navresizer-vertical"}if(!this.$E_0){this.$E_0=document.createElement("div");this.$E_0.id="navresizerVerticalBarPositionHelper";this.$E_0.className="ms-navresizer-verticalpositionhelper";this.$E_0.style.left="0px";this.$E_0.appendChild(this.$5_0);this.$0_0.parentNode.insertBefore(this.$E_0,this.$0_0)}var e=800;this.$5_0.style.height=e+"px";var a=0,b=this.get_$C_0();if(this.$4_0)if(b)a=b;else a=this.$0_0.offsetWidth;else if(b)a=this.$1_0.offsetWidth-(b-this.$0_0.offsetWidth);else a=this.$1_0.offsetWidth;var f=this.$4_0?Microsoft.Office.Server.Ajax.NavResizer.$9(this.$0_0).marginLeft:Microsoft.Office.Server.Ajax.NavResizer.$9(this.$0_0).marginRight;a+=Microsoft.Office.Server.Ajax.NavResizer.$6(f);var c=2*(this.$4_0?-1:1);a+=c;var d=a+"px";if(this.$G_0)this.$5_0.style.left=d;else this.$5_0.style.right=d;if(this.get_$B_0()&&this.$4_0)this.get_$8_0().style.width=a-this.$s_0-this.$Q_0-c+"px"},$s_0:20,$11_0:function(a){ULS4S1:;var b=this.$4_0&&this.$G_0?a.clientX-this.$d_0:this.$d_0-a.clientX,c=a.clientY-this.$x_0;if(this.$N_0){var d=this.$q_0+b;this.set_$C_0(this.set_$A_0(this.$M_0(d)))}else{var e=this.$p_0+c;this.set_$o_0(this.set_$T_0(this.$17_0(e)))}this.$H_0()},Load:function(){ULS4S1:;if(!this.$S_0||!this.$O_0||!this.$R_0||!this.get_$2_0())return;var a=this.get_$C_0();a&&this.set_$A_0(a);var b=this.get_$o_0();b&&this.get_$B_0()&&this.set_$T_0(b);this.$1K_0();this.$18_0();this.$15_0();window.setTimeout(this.$$d_$19_0,0)},$15_0:function(){ULS4S1:;if(this.get_$B_0()&&null!==this.get_$8_0()){var a=Microsoft.Office.Server.Ajax.NavResizer.$j(this.get_$8_0(),"ms-taxonomy",false);if(null!==a)for(var b=0;b<a.length;b++){var c=a[b],d=typeof c.IsSpanTermSets!=="undefined"&&true===c.IsSpanTermSets;c.DisplayPickerButton=!d}}},OnTreeExpandClick:function(a){ULS4S1:;this.$13_0(a,false)},$1L_0:function(){ULS4S1:;var a=Microsoft.Office.Server.Ajax.NavResizer.$n(this.get_$2_0());if(!a)return;var b=Microsoft.Office.Server.Ajax.NavResizer.$F(a,"ms-tv-selected");if(!b)return;this.$13_0(b,true);Hook_TreeView_ToggleNode()},$13_0:function(g,t){ULS4S1:;var j=Microsoft.Office.Server.Ajax.NavResizer.$n(this.get_$2_0());if(!j)return;var c=0,d=Microsoft.Office.Server.Ajax.NavResizer.calculateOffsetTop(this.get_$2_0()),e=d+this.get_$2_0().clientHeight;if(t){var a=g;while(a.parentNode!==j)a=a.parentNode;var b=null;if(a.nodeName.toLowerCase()==="div"){b=a;a=Microsoft.Office.Server.Ajax.NavResizer.$1C(a)}else if(a.nodeName.toLowerCase()==="table")b=Microsoft.Office.Server.Ajax.NavResizer.$f(a);else return;if(!b)b=a;else if(!a)a=b;var l=Microsoft.Office.Server.Ajax.NavResizer.calculateOffsetTop(a),p=l<d,i=b.clientHeight;if(!i)i=b.offsetHeight;var m=Microsoft.Office.Server.Ajax.NavResizer.calculateOffsetTop(b)+i,q=m>e;if(p)c=l-d;else if(q)c=m-e}d+=c;e+=c;var f=Microsoft.Office.Server.Ajax.NavResizer.calculateOffsetTop(g),n=f<d,h=g.clientHeight;if(!h)h=g.offsetHeight;var k=f+h,o=k>e;if(n)c+=f-d;else if(o){var r=Math.max(0,f-d-25),s=k-e;c+=Math.min(s,r)}this.get_$2_0().scrollTop+=c},$19_0:function(){ULS4S1:;this.get_$2_0().scrollLeft=0;this.$1L_0()},$1K_0:function(){ULS4S1:;this.$16_0();this.$1M_0()},get_$8_0:function(){ULS4S1:;if(!this.$X_0)this.$X_0=$get(this.$P_0);return this.$X_0},$X_0:null,$1M_0:function(){ULS4S1:;if(this.get_$B_0()){this.$Y_0=205;if(this.$Y_0>this.get_$C_0()){this.set_$C_0(this.set_$A_0(this.$K_0=this.$M_0(this.$Y_0)));this.$H_0()}}},$18_0:function(){ULS4S1:;if(this.$5_0&&this.$D_0)return;this.$g_0();if(this.$7_0)this.$H_0();else{var a=$get("LeftNavigationAreaCell");if(a)this.$5_0=Microsoft.Office.Server.Ajax.NavResizer.$F(Microsoft.Office.Server.Ajax.NavResizer.$f(a),"ms-pagemargin")}$addHandler(window,"resize",this.$u_0);if(this.$5_0){$addHandler(this.$5_0,"mousedown",this.$J_0);$addHandler(this.$5_0,"dblclick",this.$v_0)}if(this.get_$B_0()&&this.$R_0!==this.$P_0){this.$D_0=document.createElement("div");this.get_$12_0().parentNode.insertBefore(this.$D_0,Microsoft.Office.Server.Ajax.NavResizer.$f(this.get_$12_0()));$addHandler(this.$D_0,"mousedown",this.$J_0);Sys.UI.DomElement.addCssClass(this.$D_0,"ms-navresizer-horizontal");this.$D_0.id="navresizerHorizontalBar"}else this.set_$T_0(0)},get_$14_0:function(){ULS4S1:;var b=Microsoft.Office.Server.Ajax.NavResizer.$9(this.$0_0),a=Microsoft.Office.Server.Ajax.NavResizer.$9(this.$1_0);return this.$4_0&&this.$V_0(b)==="left"&&!!Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginLeft)||!this.$4_0&&this.$V_0(b)==="right"&&!!Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginRight)||this.$4_0&&!this.$G_0&&this.$V_0(b)==="right"&&(!!Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginRight)||!!Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginLeft))},get_$A_0:function(){ULS4S1:;return this.get_$h_0().offsetWidth},set_$A_0:function(a){ULS4S1:;this.get_$h_0().style.width=a.toString()+"px";if(this.$7_0&&this.get_$14_0())if(this.$4_0&&this.$G_0)this.$1_0.style.marginLeft=(a+Microsoft.Office.Server.Ajax.NavResizer.$U).toString()+"px";else this.$1_0.style.marginRight=(a+Microsoft.Office.Server.Ajax.NavResizer.$U).toString()+"px";if(this.get_$B_0()&&!this.$7_0){this.get_$8_0().style.width=(a+Microsoft.Office.Server.Ajax.NavResizer.$i).toString()+"px";var b=a+this.$Q_0;this.get_$h_0().style.width=b.toString()+"px"}return a},get_$T_0:function(){ULS4S1:;return this.get_$2_0().offsetHeight},set_$T_0:function(a){ULS4S1:;this.get_$2_0().style.height=0===a?"":a.toString()+"px";return a},get_$C_0:function(){ULS4S1:;var a=$get(this.$S_0).value;return a===""||!a?0:parseInt(a)},set_$C_0:function(a){ULS4S1:;$get(this.$S_0).value=a.toString();return a},get_$o_0:function(){ULS4S1:;var a=$get(this.$O_0).value;return a===""||!a?0:parseInt(a)},set_$o_0:function(a){ULS4S1:;$get(this.$O_0).value=a.toString();return a},get_$h_0:function(){ULS4S1:;return!this.$7_0?this.get_$2_0():this.$0_0},get_$2_0:function(){ULS4S1:;if(!this.$e_0)this.$e_0=$get(this.$R_0);return this.$e_0},$P_0:null,get_$B_0:function(){ULS4S1:;return this.$P_0!==""&&!!this.get_$8_0()},$w_0:null,get_$12_0:function(){ULS4S1:;if(!this.$c_0)this.$c_0=$get(this.$w_0);return this.$c_0},$c_0:null,get_$1P_0:function(){ULS4S1:;this.$g_0();return this.$7_0&&Microsoft.Office.Server.Ajax.NavResizer.$9(this.$0_0).display!=="none"||!this.$7_0},$t_0:false,$Q_0:0,$16_0:function(){ULS4S1:;if(this.$t_0||!this.get_$B_0())return;var a=Microsoft.Office.Server.Ajax.NavResizer.$9(this.get_$8_0());if(a){this.$Q_0=Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginLeft)+Microsoft.Office.Server.Ajax.NavResizer.$6(a.marginRight);if(this.$7_0||Sys.Browser.agent!==Sys.Browser.InternetExplorer)this.$Q_0+=Microsoft.Office.Server.Ajax.NavResizer.$6(a.paddingRight)+Microsoft.Office.Server.Ajax.NavResizer.$6(a.paddingLeft)+Microsoft.Office.Server.Ajax.NavResizer.$6(a.borderRightWidth)+Microsoft.Office.Server.Ajax.NavResizer.$6(a.borderLeftWidth)}this.$t_0=true},$V_0:function(a){ULS4S1:;var b="";if(!Microsoft.Office.Server.Ajax.NavResizer.$3(a))if(!Microsoft.Office.Server.Ajax.NavResizer.$3(a.styleFloat))b=a.styleFloat;else b=a.cssFloat;return b}};Microsoft.Office.Server.Ajax.NavResizer.registerClass("Microsoft.Office.Server.Ajax.NavResizer");function navresizer_initialize(){ULS4S1:;Microsoft.Office.Server.Ajax.NavResizer.Instance=null;Microsoft.Office.Server.Ajax.NavResizer.treeRowHeightPx=25;Microsoft.Office.Server.Ajax.NavResizer.$U=45;Microsoft.Office.Server.Ajax.NavResizer.$i=12}navresizer_initialize();RegisterModuleInit("navresizer.js",navresizer_initialize);function Hook_TreeView_ToggleNode(){ULS4S1:;if(undefined===window.TreeView_ToggleNode)return;if(!(undefined===window.Original_TreeView_ToggleNode))return;Original_TreeView_ToggleNode=function(){};Original_TreeView_ToggleNode=TreeView_ToggleNode;New_TreeView_ToggleNode=function(f,e,b,c,a){ULS4S1:;var d=Original_TreeView_ToggleNode(f,e,b,c,a);if(a!=null)if(a.style!=null&&a.style.display!="none"){Microsoft.Office.Server.Ajax.NavResizer.Instance.OnTreeExpandClick(a);typeof setChildrenIconsToSelected=="function"&&setChildrenIconsToSelected(b)}return d};TreeView_ToggleNode=New_TreeView_ToggleNode}typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("NavResizer.js");