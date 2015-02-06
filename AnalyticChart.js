function ULSBrN(){var a={};a.ULSTeamName="PerformancePoint Monitoring Service";a.ULSFileName="AnalyticChart.js";return a}Type.registerNamespace("PPSMA");PPSMA.ItemType=function(){};PPSMA.ItemType.prototype={Series:0,Points:1,Category:2,Background:3,ViewInfoBar:4,LegendLocation:5};PPSMA.ItemType.registerEnum("PPSMA.ItemType",false);PPSMA.LegendLocation=function(){};PPSMA.LegendLocation.prototype={hide:0,right:1,top:2};PPSMA.LegendLocation.registerEnum("PPSMA.LegendLocation",false);PPSMA.OlapChart=function(c,b,d){a:;this.$$d_legendCompleted=Function.createDelegate(this,this.legendCompleted);this.$$d_switchReportTypeCompleted=Function.createDelegate(this,this.switchReportTypeCompleted);this.$$d_processFilterDialogResult=Function.createDelegate(this,this.processFilterDialogResult);this.$$d_doShowContextMenu=Function.createDelegate(this,this.doShowContextMenu);this.$$d_$o_0=Function.createDelegate(this,this.$o_0);this.$1_0=c;this.$0_0=b;this.$I_0=d;this.$4_0=[];this.$2_0=null;this.$6_0=0;this.$B_0=0;this.$8_0=0;this._changeMeasure=new PPSMA.ChangeMeasure(this.$0_0);this._valueFilter=new PPSMA.FilterDialog(b,c);this.$Q_0=false;if(this.$0_0){var a=$get(this.$0_0.get_outerTargetId());this.$r_0(a);$clearHandlers(a);this.$0_0.setOuterTagAttribute("arFilterState","");a.attachEvent("onpropertychange",this.$$d_$o_0)}PPSMA.Trace.addFilters(["ChartContextMenu"],false);var e=this;$addHandler(document.body,"touchstart",function(){})};PPSMA.OlapChart.$b=function(a){while(a&&!PPSMA.DomElementEx.tagsMatch(a.tagName,"div")&&!PPSMA.DomElementEx.tagsMatch(a.tagName,"body"))a=a.parentNode;return a};PPSMA.OlapChart.prototype={$1_0:null,$0_0:null,$I_0:null,$4_0:null,$2_0:null,$D_0:0,$9_0:0,$6_0:0,$B_0:0,$H_0:null,$G_0:null,$3_0:0,$8_0:0,$O_0:null,$L_0:null,$C_0:null,$7_0:null,$A_0:null,_changeMeasure:null,_valueFilter:null,$Q_0:false,$F_0:0,$P_0:null,$r_0:function(h){if(h&&this.$0_0&&this.$0_0.get_results()){var a="row:{0};col:{1};emptyrow:{2};emptycol:{3};sortrow:{4};sortcol:{5}",b="no",c="no",d="no",e="no",f,g;if(this.$0_0.get_results().get_valueFilterRow()===1)b="value";if(this.$0_0.get_results().get_topFilterRow()===1)b="top";if(this.$0_0.get_results().get_valueFilterCol()===1)c="value";if(this.$0_0.get_results().get_topFilterCol()===1)c="top";if((this.$0_0.get_results().get_filterEmptyAxis()&2)>0)d="yes";if((this.$0_0.get_results().get_filterEmptyAxis()&1)>0)e="yes";f=this.$0_0.get_results().get_sortTypeRow();g=this.$0_0.get_results().get_sortTypeCol();a=String.format(a,b,c,d,e,f,g);this.$0_0.setOuterTagAttribute("arFilterState",a)}},$o_0:function(){a:;var $v_0="window.event.propertyName",$v_1=eval($v_0);switch($v_1){case "executeValueFilterRow":this.filterByValue("2");break;case "executeTopFilterRow":this.filterByTopBottom("2");break;case "clearFilterRow":this.$0_0.clearFilter("2",false);break;case "executeValueFilterCol":this.filterByValue("1");break;case "executeTopFilterCol":this.filterByTopBottom("1");break;case "clearFilterCol":this.$0_0.clearFilter("1",true);break;case "filterEmptyRows":this.filterEmptyRow();break;case "filterEmptyCols":this.filterEmptyCol();break;case "sortAscRow":this.sort("2","asc");break;case "sortDescRow":this.sort("2","desc");break;case "noSortRow":this.sort("2","nosort");break;case "sortAscCol":this.sort("1","asc");break;case "sortDescCol":this.sort("1","desc");break;case "noSortCol":this.sort("1","nosort");break;case "MeasureGroupName":this.handleMeasureGroupNameChange()}},onF:function(b,a){a:;this.$L_0=b;this.$C_0=a},onKD:function(e){a:;if(!this.$C_0)return;switch(e.keyCode){case 13:this.$X_0(null);break;case 93:PPSMA.Trace.eventEx(["ChartContextMenu"],e,"OnKD: context-menu");PPSMA.Trace.domElementEx(["ChartContextMenu"],this.$L_0,"OnKD: Focused Area",50);var a,b;if(getBrowserIs().ie55up){var c=Sys.UI.DomElement.getLocation(PPSMA.OlapChart.$b(this.$L_0));a=c.x;b=c.y}else{var d=this.$L_0.coords.split(",");a=parseInt(d[0]);b=parseInt(d[1])}var f=new PPSMA.ChartDomEvent(2,a+2,b+2,this.$L_0,this.$L_0);this.$X_0(f);break;default:return}},sOnTS:function(a,b){a:;if(a.touches!=undefined&&a.touches.length==1){this.$M_0(b,0);if(this.$3_0===1)this.$6_0=0;this.$3_0=0;this.$7_0=a.srcElement;this.$P_0=a;this.$F_0=window.setTimeout(this.$$d_doShowContextMenu,1500)}else window.clearTimeout(this.$F_0)},sOnC:function(a,b){a:;this.$M_0(b,0);if(this.$3_0===1)this.$6_0=0;this.$3_0=0;if(this.$V_0(a)&&!PPSMA.Menu.IsOpen(this.$2_0))this.drillDown();else if(PPSMA.EventsEx.isRightClick(a)){PPSMA.Trace.eventEx(["ChartContextMenu"],a,"SOnC: context-menu");this.$T_0(a)}else return;return},pOnTS:function(a,b){a:;if(a.touches!=undefined&&a.touches.length==1){this.$M_0(b,1);this.$Y_0();if(!this.$3_0)this.$6_0=0;this.$3_0=1;this.$P_0=a;this.$F_0=window.setTimeout(this.$$d_doShowContextMenu,1500)}else window.clearTimeout(this.$F_0)},pOnC:function(a,b){a:;this.$M_0(b,1);this.$Y_0();if(!this.$3_0)this.$6_0=0;this.$3_0=1;if(this.$V_0(a)&&!PPSMA.Menu.IsOpen(this.$2_0))this.drillDown();else if(PPSMA.EventsEx.isRightClick(a)){PPSMA.Trace.eventEx(["ChartContextMenu"],a,"POnC: context-menu");this.$T_0(a)}else return;return},xOnTS:function(a,b){a:;if(a.touches!=undefined&&a.touches.length==1){this.$M_0(b,2);if(this.$3_0===1)this.$6_0=0;this.$3_0=2;this.$8_0=2;this.$7_0=a.srcElement;this.$P_0=a;this.$F_0=window.setTimeout(this.$$d_doShowContextMenu,1500)}else window.clearTimeout(this.$F_0)},xOnC:function(a,b){a:;this.$M_0(b,2);if(this.$3_0===1)this.$6_0=0;this.$3_0=2;this.$8_0=2;if(this.$V_0(a)&&!PPSMA.Menu.IsOpen(this.$2_0))this.drillDown();else if(PPSMA.EventsEx.isRightClick(a)){PPSMA.Trace.eventEx(["ChartContextMenu"],a,"XOnC: context-menu");this.$T_0(a)}else return},bgOnTS:function(a){a:;if(a.touches!=undefined&&a.touches.length==1){this.$3_0=3;this.$7_0=a.srcElement;Array.clear(this.$4_0);this.$C_0=null;this.$P_0=a;this.$F_0=window.setTimeout(this.$$d_doShowContextMenu,1500)}else window.clearTimeout(this.$F_0)},bgOnC:function(a){a:;if(PPSMA.EventsEx.isRightClick(a)){PPSMA.Trace.eventEx(["ChartContextMenu"],a,"BGOnC: context-menu");if(!this.$d_0(a))return;this.$3_0=3;this.$7_0=a.srcElement;Array.clear(this.$4_0);this.$C_0=null;this.$W_0(a)}},$d_0:function(b){var a=b.type;if(a===PPSMA.ChartDomEventTypes.ppsContextMenu||a==="contextmenu")return true;return false},fOnC:function(h,e,d,g,f,a,b,c){a:;this.loadFilterDialog(e,d,g,f,this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(a),false),this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(b),false),c)},doShowContextMenu:function(){a:;this.$Q_0=true;this.$T_0(this.$P_0)},handleTouchMove:function(a){a:;if(a.targetTouches!=undefined&&a.targetTouches[0]!=undefined)(Math.abs(a.targetTouches[0].screenX-this._screenTouchPositionX)>=PPSMA.OlapChart._contextCancelDeltaX||Math.abs(a.targetTouches[0].screenY-this._screenTouchPositionY)>=PPSMA.OlapChart._contextCancelDeltaX)&&window.clearTimeout(this.lastTimeout)},handleTouchEnd:function(){a:;window.clearTimeout(this.$F_0);this.$Q_0=false},handleTouchCancel:function(){a:;window.clearTimeout(this.$F_0);this.$Q_0=false},$T_0:function(a){if(!this.$d_0(a)&&!this.$Q_0)return;this.$7_0=a.srcElement;Array.clear(this.$4_0);this.$C_0=null;if(a.type===PPSMA.ChartDomEventTypes.ppsContextMenu){this.$O_0=a;var h=a,b=PPSMA.EventsEx.getCurrentElement(a),c=PPSMA.EventsEx.getEvent(a),i=Sys.UI.DomElement.getLocation(b),f=b;if(PPSMA.DomElementEx.tagsMatch(a.srcElement.tagName,"area"))f=a.srcElement.parentNode.parentNode;if(PPSMA.DomElementEx.tagsMatch(a.srcElement.tagName,"map"))f=a.srcElement.parentNode;if(!a.srcElement.offsetLeft&&!a.srcElement.offsetTop)PPSMA.ContextMenu.createForReportsNScorecards(f,this,h.offsetX,h.offsetY,false);else{var d,e;if(isNullOrUndefined(c.offsetX)){d=PPSMA.SizeEx.getXOffset(c,b);e=PPSMA.SizeEx.getYOffset(c,b)}else{d=c.offsetX;e=c.offsetY}if(d!==i.x&&e!==i.y)PPSMA.ContextMenu.createForReportsNScorecards(b,this,d,e,false);else PPSMA.ContextMenu.createForReportsNScorecards(f,this,d,e,false)}return}var g=PPSMA.EventsEx.getEventOffset(a),j=PPSMA.OlapChart.$b(a.srcElement);this.$O_0=new PPSMA.ChartDomEvent(a.button,g.x,g.y,this.$7_0,j);this.$W_0(a)},addPrimaryMenuItems:function(a){a:;this.$2_0=a;switch(this.$3_0){case 0:return this.$j_0();case 1:return this.$i_0();case 2:return this.$g_0();case 3:return this.$f_0();case 4:return this.$h_0();case 5:return this.$S_0(this.$2_0)}return false},$j_0:function(){a:;var e=this.$E_0(),f=this.$J_0(),a=new PPSMA.MenuOptionHelper(e,f,this.get_$5_0(),this.$0_0),b=this.$H_0.length>1;this.get_$5_0()&&b&&a.addDisabledOption(this.$2_0,this.$H_0[this.$6_0],false);a.drillDown(this.$2_0,this.$1_0+".drillDown()",b);var d=a.drillDownTo(this.$2_0,this.$1_0+".fetchCallback("+this.$4_0.length+")",this.$1_0+".populateCallback("+this.$4_0.length+")",this.$1_0+".hoverOffCallback("+this.$4_0.length+")",b);if(d){var g=new PPSMA.SubMenu(d,0);Array.add(this.$4_0,g)}a.drillUp(this.$2_0,this.$1_0+".drillUp()",b);a.showOnly(this.$2_0,this.$1_0+".showOnly()",b);a.remove(this.$2_0,this.$1_0+".remove()",b);this.get_$5_0()&&a.showChangeMeasure(this.$2_0,this.$1_0+".selectMeasures()",this.get_$N_0(),b);for(var c=0;c<this.$H_0.length;c++)c!==this.$6_0&&a.switchToOption(this.$2_0,this.$H_0[c],this.$1_0+".switchTo("+c+",false);",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);this.$R_0(this.get_$5_0(),true,false);a.pivot(this.$2_0,this.$1_0+".pivot()",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);if(this.get_$5_0()){a.reportTypeSubMenu(this.$2_0,this.$1_0,this.$I_0[0]);var h=a.formatReportSubMenu(this.$2_0,false);this.$S_0(h);PPSMA.ContextMenu.addMenuSeparator(this.$2_0)}a.showHideInfo(this.$2_0,this.$1_0+".showHideInfo()",false);return a.get_optionsAdded()>0},$i_0:function(){a:;var i=this.$E_0(),j=this.$J_0(),a=new PPSMA.MenuOptionHelper(i,j,this.get_$5_0(),this.$0_0);if(this.get_$5_0())if(!this.$8_0)a.addDisabledOption(this.$2_0,this.$H_0[this.$6_0],false);else a.addDisabledOption(this.$2_0,this.$G_0[this.$B_0],false);a.drillDown(this.$2_0,this.$1_0+".drillDown()",true);var d=a.drillDownTo(this.$2_0,this.$1_0+".fetchCallback("+this.$4_0.length+")",this.$1_0+".populateCallback("+this.$4_0.length+")",this.$1_0+".hoverOffCallback("+this.$4_0.length+")",true);if(d){var k=new PPSMA.SubMenu(d,0);Array.add(this.$4_0,k)}a.drillUp(this.$2_0,this.$1_0+".drillUp()",true);a.showOnly(this.$2_0,this.$1_0+".showOnly()",true);a.remove(this.$2_0,this.$1_0+".remove()",true);this.get_$5_0()&&a.showChangeMeasure(this.$2_0,this.$1_0+".selectMeasures()",this.get_$N_0(),true);for(var b=0;b<this.$H_0.length;b++)(b!==this.$6_0||this.$8_0===1)&&a.switchToOption(this.$2_0,this.$H_0[b],this.$1_0+".switchTo("+b+",false);",false);for(var c=0;c<this.$G_0.length;c++)(c!==this.$B_0||!this.$8_0)&&a.switchToOption(this.$2_0,this.$G_0[c],this.$1_0+".switchTo("+c+",true);",false);if(!this.get_$N_0()){PPSMA.ContextMenu.addMenuSeparator(this.$2_0);a.decompositionTree(this.$2_0,this.$1_0+".analyzeInDecompositionTree('');",false,true,this.get_$N_0());var e=true,f=a.hasAggregatedBackGroundHierarchies();if(f)e=false;a.showDetails(this.$2_0,this.$1_0+".showDetails('')",false,e);var g=true;if(f)g=false;this.$0_0.set_cellActionData(null);var h=a.additionalActions(this.$2_0,this.$1_0+".fetchCallback("+this.$4_0.length+")",this.$1_0+".populateCallback("+this.$4_0.length+")",this.$1_0+".hoverOffCallback("+this.$4_0.length+")",false,g);if(h){var l=new PPSMA.SubMenu(h,1);Array.add(this.$4_0,l)}}PPSMA.ContextMenu.addMenuSeparator(this.$2_0);this.$k_0(this.get_$5_0());this.$R_0(this.get_$5_0(),true,true);a.pivot(this.$2_0,this.$1_0+".pivot()",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);a.showHideInfo(this.$2_0,this.$1_0+".showHideInfo();",false);return a.get_optionsAdded()>0},$g_0:function(){a:;var e=this.$E_0(),f=this.$J_0(),a=new PPSMA.MenuOptionHelper(e,f,this.get_$5_0(),this.$0_0),b=this.$G_0.length>1;this.get_$5_0()&&b&&a.addDisabledOption(this.$2_0,this.$G_0[this.$B_0],false);a.drillDown(this.$2_0,this.$1_0+".drillDown()",b);var d=a.drillDownTo(this.$2_0,this.$1_0+".fetchCallback("+this.$4_0.length+")",this.$1_0+".populateCallback("+this.$4_0.length+")",this.$1_0+".hoverOffCallback("+this.$4_0.length+")",b);if(d){var g=new PPSMA.SubMenu(d,0);Array.add(this.$4_0,g)}a.drillUp(this.$2_0,this.$1_0+".drillUp()",b);a.showOnly(this.$2_0,this.$1_0+".showOnly()",b);a.remove(this.$2_0,this.$1_0+".remove()",b);this.get_$5_0()&&a.showChangeMeasure(this.$2_0,this.$1_0+".selectMeasures()",this.get_$N_0(),b);for(var c=0;c<this.$G_0.length;c++)c!==this.$B_0&&a.switchToOption(this.$2_0,this.$G_0[c],this.$1_0+".switchTo("+c+",true);",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);this.$R_0(this.get_$5_0(),false,true);a.pivot(this.$2_0,this.$1_0+".pivot()",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);if(this.get_$5_0()){a.reportTypeSubMenu(this.$2_0,this.$1_0,this.$I_0[0]);var h=a.formatReportSubMenu(this.$2_0,false);this.$S_0(h);PPSMA.ContextMenu.addMenuSeparator(this.$2_0)}a.showHideInfo(this.$2_0,this.$1_0+".showHideInfo()",false);return a.get_optionsAdded()>0},$f_0:function(){a:;var a=new PPSMA.MenuOptionHelper(null,null,this.get_$5_0(),this.$0_0);this.get_$5_0()&&a.showChangeMeasure(this.$2_0,this.$1_0+".selectMeasures()",this.get_$N_0(),false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);this.$R_0(this.get_$5_0(),true,true);a.pivot(this.$2_0,this.$1_0+".pivot()",false);PPSMA.ContextMenu.addMenuSeparator(this.$2_0);a.reportTypeSubMenu(this.$2_0,this.$1_0,this.$I_0[0]);if(this.get_$5_0()){var b=a.formatReportSubMenu(this.$2_0,false);this.$S_0(b);PPSMA.ContextMenu.addMenuSeparator(this.$2_0)}a.showHideInfo(this.$2_0,this.$1_0+".showHideInfo();",false);return a.get_optionsAdded()>0},$h_0:function(){a:;var a=new PPSMA.MenuOptionHelper(null,null,this.get_$5_0(),this.$0_0);a.showHideInfo(this.$2_0,this.$1_0+".showHideInfoByDiv();",false);return a.get_optionsAdded()>0},$S_0:function(a){PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ChartLegendRight,this.$1_0+".showLegendAtRight()",this.$0_0.get_resourcePath()+"LegendRight.gif",null,this.$I_0[1]===1,false);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ChartLegendTop,this.$1_0+".showLegendAtTop()",this.$0_0.get_resourcePath()+"LegendTop.gif",null,this.$I_0[1]===2,false);var b=this.$1_0+".hideLegend()";if(!this.$I_0[1])b="";PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ChartLegendHide,b,null,null,false,false);return true},$W_0:function(a){var b=PPSMA.EventsEx.getCurrentElement(a),e=PPSMA.EventsEx.getEvent(a),c,d;if(isNullOrUndefined(e.offsetX)){c=PPSMA.SizeEx.getXOffset(e,b);d=PPSMA.SizeEx.getYOffset(e,b)}else{c=e.offsetX;d=e.offsetY}if(PPSMA.DomElementEx.tagsMatch(a.srcElement.tagName,"area"))b=a.srcElement.parentNode.parentNode;if(PPSMA.DomElementEx.tagsMatch(a.srcElement.tagName,"map"))b=a.srcElement.parentNode;var f=Sys.UI.DomElement.getLocation(b);if(a.target&&!a.target.offsetWidth&&!a.target.offsetHeight){c-=f.x;d-=f.y}if(isNaN(c)||isNaN(d)){var g=PPSMA.EventsEx.getEventOffset(a);c=g.x;d=g.y}PPSMA.ContextMenu.createForReportsNScorecards(b,this,c,d,false);PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(a))},drillDownTo:function(a,b,c){a:;var d=this.$E_0(),e=this.$J_0();this.$0_0.crossDrill(e.get_name(),d.get_name(),unescape(a),unescape(b),unescape(c))},drillDown:function(){a:;var a=this.$E_0(),b=this.$J_0();this.$0_0.drillDown(b.get_name(),a.get_name())},drillUp:function(){a:;var a=this.$E_0(),b=this.$J_0();this.$0_0.drillUp(b.get_name(),a.get_name())},showOnly:function(){a:;var a=this.$E_0(),b=this.$J_0();this.$0_0.showOnly(b.get_name(),a.get_name())},remove:function(){a:;var a=this.$E_0(),b=this.$J_0();this.$0_0.hide(b.get_name(),a.get_name())},selectMeasures:function(){a:;this._changeMeasure.show(this.$7_0)},sort:function(d,b){a:;var c=new PPSMA.DetailsHelper(this.$0_0,this.$1_0,this.$D_0,this.$9_0,null),a=c.getCellTupleXml();a&&this.$0_0.sort(d,a,b,"false")},pivot:function(){a:;this.$0_0.pivot()},handleMeasureGroupNameChange:function(){a:;var $v_0="window.event.srcElement.id",$v_1=eval($v_0),$v_2=$get($v_1);if($v_2){var $v_3=$v_2.getAttribute("MeasureGroupName");this.$0_0.get_measures().set_measureGroupName($v_3)}},filterByValue:function(b){a:;var c;if(b==="1")c=this.$0_0.get_results().get_valueFilterParamsCol();else c=this.$0_0.get_results().get_valueFilterParamsRow();var a=null;this._valueFilter.set_selectedButton("2");if(c&&c!=="")a=c.split(";");var d=0;if(a&&a[0]!=="0")d=parseInt(a[0]);this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);if(d>6&&a){this._valueFilter.set_hierarchyName(a[1]);this._valueFilter.set_filterType(d);isNullUndefinedOrEmpty(this._valueFilter.get_value1())&&this._valueFilter.set_value1(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(a[3]),false));isNullUndefinedOrEmpty(this._valueFilter.get_value2())&&this._valueFilter.set_value2(this._valueFilter.getFormattedStringFromInvariantNumber(Number.parseInvariant(a[4]),false));this._valueFilter.set_currentCell(null);this._valueFilter.set_axis(b);var e=a[2];this._valueFilter.set_levelName(a[5]);this._valueFilter.loadFilterDialog(a[0],e,a[5],this._valueFilter.get_hierarchyName(),this._valueFilter.get_value1(),this._valueFilter.get_value2(),null,b)}else{var f=this.$Z_0(b);this._valueFilter.set_hierarchyName(f.get_name());this._valueFilter.set_filterType(9);this._valueFilter.set_showClearOption(false);this._valueFilter.set_tupleIndex(b==="1"?this.$D_0:this.$9_0);this._valueFilter.set_value1("0");this._valueFilter.set_value2("100");this._valueFilter.set_currentCell(null);this._valueFilter.set_axis(b);this._valueFilter.set_innerTargetID(this.$0_0.get_innerTargetId());this._valueFilter.showValueFilterDlg()}},processFilterDialogResult:function(){a:;if(this._valueFilter.get_selectedButton()==="1")this.$0_0.filter(this._valueFilter.get_filterType().toString(),this._valueFilter.get_hierarchyName(),this._valueFilter.get_tupleXML(),this._valueFilter.get_axis(),this._valueFilter.get_levelName(),this._valueFilter.get_value1(),this._valueFilter.get_value2());else this._valueFilter.get_selectedButton()==="3"&&this.$0_0.clearFilter(this._valueFilter.get_axis(),this._valueFilter.get_axis()==="1")},filterByTopBottom:function(b){a:;var c;if(b==="1")c=this.$0_0.get_results().get_valueFilterParamsCol();else c=this.$0_0.get_results().get_valueFilterParamsRow();var a=null;this._valueFilter.set_selectedButton("2");if(c&&c!=="")a=c.split(";");var d=0;if(a&&a[0]!=="0")d=parseInt(a[0]);this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);if(d>0&&d<7&&a){this._valueFilter.set_hierarchyName(a[1]);this._valueFilter.set_filterType(d);this._valueFilter.set_tupleIndex(b==="1"?this.$D_0:this.$9_0);this._valueFilter.set_value1(a[3]);this._valueFilter.set_value2(a[4]);this._valueFilter.set_currentCell(null);this._valueFilter.set_axis(b);var e=a[2];this._valueFilter.set_levelName(a[5]);this._valueFilter.loadFilterDialog(a[0],a[5],e,this._valueFilter.get_hierarchyName(),this._valueFilter.get_value1(),this._valueFilter.get_value2(),null,b)}else{var f=this.$Z_0(b);this._valueFilter.set_hierarchyName(f.get_name());this._valueFilter.set_filterType(1);this._valueFilter.set_showClearOption(false);this._valueFilter.set_tupleIndex(b==="1"?this.$D_0:this.$9_0);this._valueFilter.set_value1("10");this._valueFilter.set_currentCell(null);this._valueFilter.set_axis(b);this._valueFilter.set_innerTargetID(this.$0_0.get_innerTargetId());this._valueFilter.showTopFilterDlg()}},loadFilterDialog:function(a,b,f,e,c,d,g){a:;this._valueFilter.setCallbackMethod(this.$$d_processFilterDialogResult);this._valueFilter.loadFilterDialog(a,f,e,b,c,d,null,g)},filterEmptyRow:function(){a:;var a=(this.$0_0.get_results().get_filterEmptyAxis()&2)>0;this.$0_0.filterEmpty("2",!a)},filterEmptyCol:function(){a:;var a=(this.$0_0.get_results().get_filterEmptyAxis()&1)>0;this.$0_0.filterEmpty("1",!a)},clearSeriesFilter:function(){a:;this.$0_0.clearFilter("2",false)},clearPointsFilter:function(){a:;this.$0_0.clearFilter("1",true)},switchSeriesEvnt:function(){a:;this.sOnC(this.$O_0,null)},switchPointsEvnt:function(){a:;this.pOnC(this.$O_0,null)},switchCategoryEvnt:function(){a:;this.xOnC(this.$O_0,null)},switchTo:function(a,b){a:;if(!PPSMA.OlapChart.$K)PPSMA.OlapChart.$K={};switch(this.$3_0){case 0:this.$6_0=a;window.setTimeout(this.$1_0+".switchSeriesEvnt()",100);break;case 1:if(b){this.$B_0=a;this.$8_0=1}else{this.$6_0=a;this.$8_0=0}PPSMA.OlapChart.$K[this.$1_0]=this.$8_0;window.setTimeout(this.$1_0+".switchPointsEvnt()",100);break;case 2:this.$B_0=a;this.$6_0=a;window.setTimeout(this.$1_0+".switchCategoryEvnt()",100)}},fetchCallback:function(b){a:;var a=this.$4_0[b];if(a){a.set_hoverOn(true);switch(a.get_menuType()){case 1:if(!this.$0_0.get_cellActionData()&&!this.$U_0){this.$U_0=true;var c=new PPSMA.DetailsHelper(this.$0_0,this.$1_0,this.$D_0,this.$9_0,""),d=c.getCellTupleXml();this.$0_0.getCellLevelActions(d)}break;case 0:!this.$0_0.get_cubeMetadata()&&this.$0_0.loadCubeMetadata(this.$0_0.get_ctrlProxyId());break;default:a.set_hoverOn(false)}}},$U_0:false,populateCallback:function(d){a:;var a=this.$4_0[d];if(a&&a.get_hoverOn()){var b=a.get_menu(),c=a.get_isPopulated();if(!c){PPSMA.ContextMenu.removeAllButFirst(b);switch(a.get_menuType()){case 1:if(this.$0_0.get_cellActionData()){this.$U_0=false;this.$p_0(b);a.set_isPopulated(true)}break;case 0:if(this.$0_0.get_cubeMetadata()){this.$q_0(b);a.set_isPopulated(true)}}}if(c)PPSMA.ContextMenu.refreshMenu(b,false);else a.get_isPopulated()&&PPSMA.ContextMenu.refreshMenu(b,true)}},hoverOffCallback:function(b){a:;var a=this.$4_0[b];a&&a.set_hoverOn(false)},switchToGrid:function(){a:;this.$A_0=0;this.$0_0.switchOlapReportType(0,this.$$d_switchReportTypeCompleted)},switchToColumnChart:function(){a:;this.$A_0=1;this.$0_0.switchOlapReportType(1,this.$$d_switchReportTypeCompleted)},switchToColumnChartStacked:function(){a:;this.$A_0=2;this.$0_0.switchOlapReportType(2,this.$$d_switchReportTypeCompleted)},switchToColumnChartStacked100:function(){a:;this.$A_0=3;this.$0_0.switchOlapReportType(3,this.$$d_switchReportTypeCompleted)},switchToLineChart:function(){a:;this.$A_0=4;this.$0_0.switchOlapReportType(4,this.$$d_switchReportTypeCompleted)},switchToLineChartWithMarkers:function(){a:;this.$A_0=5;this.$0_0.switchOlapReportType(5,this.$$d_switchReportTypeCompleted)},switchToPieChart:function(){a:;this.$A_0=6;this.$0_0.switchOlapReportType(6,this.$$d_switchReportTypeCompleted)},switchReportTypeCompleted:function(a){a:;if(a)this.$I_0[0]=this.$A_0},showLegendLocMenu:function(a){a:;this.$3_0=5;var b=PPSMA.EventsEx.getCurrentElement(a);this.$7_0=b.parentNode.parentNode;this.$W_0(a)},showLegendAtRight:function(){a:;this.$A_0=1;this.$0_0.changeViewConfigurationWithCallback("LegendLocation",(1).toString(),this.$$d_legendCompleted)},showLegendAtTop:function(){a:;this.$A_0=2;this.$0_0.changeViewConfigurationWithCallback("LegendLocation",(2).toString(),this.$$d_legendCompleted)},hideLegend:function(){a:;this.$A_0=0;this.$0_0.changeViewConfigurationWithCallback("LegendLocation",(0).toString(),this.$$d_legendCompleted)},legendCompleted:function(a){a:;if(a)this.$I_0[1]=this.$A_0},showHideInfoByDiv:function(){a:;this.$0_0.toggleViewInfoBar(this.$7_0.firstChild)},hideViewInfoBarCtxMenu:function(d){a:;var a=PPSMA.EventsEx.getEvent(d),e=PPSMA.EventsEx.getCurrentElement(d);if(PPSMA.EventsEx.isRightClick(a)){this.$3_0=4;this.$7_0=PPSMA.OlapViewContext.getViewInfoDiv(e);Array.clear(this.$4_0);this.$C_0=null;var b,c;if(isNullOrUndefined(a.offsetX)){b=PPSMA.SizeEx.getXOffset(a,this.$7_0);c=PPSMA.SizeEx.getYOffset(a,this.$7_0)}else{b=a.offsetX;c=a.offsetY}PPSMA.ContextMenu.createForReportsNScorecards(e,this,b,c,false);PPSMA.ContextMenu.neutralizeBrowserMenu(new Sys.UI.DomEvent(d))}},assignFocus:function(){a:;var a=$get(this.$0_0.get_innerTargetId());a&&a.firstChild.firstChild.focus()},showHideInfo:function(){a:;var b=null,a=this.$7_0;while(a){if(PPSMA.DomElementEx.tagsMatch(a.tagName,"map")){b=a;break}a=a.parentNode}var c=null;if(b){var d=b.parentNode.parentNode;a=d.firstChild;while(a){if(PPSMA.DomElementEx.tagsMatch(a.tagName,"div")&&a.id==="_viewInfoId"){c=a;break}a=a.nextSibling}}c&&this.$0_0.toggleViewInfoBar(c.firstChild)},handleShowUrlMenuClick:function(a){a:;PPSMA.NewWindow.openUrl(a)},showDetails:function(a){a:;var b=new PPSMA.DetailsHelper(this.$0_0,this.$1_0,this.$D_0,this.$9_0,a);b.showDetails()},analyzeInDecompositionTree:function(){a:;var a=new PPSMA.AnalyzeInDecompHelper;a.launchAnalyzeRequest(this.$0_0,this.$1_0,this.$D_0,this.$9_0)},get_cubeMetadata:function(){a:;return null},set_cubeMetadata:function(a){a:;return a},$M_0:function(a,b){this.$s_0(a);switch(b){case 0:this.$c_0();break;case 1:this.$c_0();this.$a_0();break;case 2:this.$a_0()}},$Y_0:function(){a:;if(PPSMA.OlapChart.$K&&PPSMA.OlapChart.$K[this.$1_0])this.$8_0=PPSMA.OlapChart.$K[this.$1_0]},$X_0:function(a){switch(this.$n_0()){case 0:this.sOnC(a,this.$C_0);break;case 1:this.pOnC(a,this.$C_0);break;case 2:this.xOnC(a,this.$C_0)}},$n_0:function(){a:;var a;if(this.$C_0[0]<0)a=2;else if(this.$C_0[1]<0)a=0;else a=1;return a},$s_0:function(a){if(a&&a.length===2){this.$D_0=a[0];this.$9_0=a[1]}},$c_0:function(){a:;this.$H_0=[];for(var b=this.$0_0.get_results().get_rowMembers()[this.$D_0],a=0;a<b.length;a++)Array.add(this.$H_0,b[a].get_caption())},$a_0:function(){a:;this.$G_0=[];for(var b=this.$0_0.get_results().get_columnMembers()[this.$9_0],a=0;a<b.length;a++)Array.add(this.$G_0,b[a].get_caption())},$E_0:function(){a:;if(!this.$3_0||!this.$8_0){var a=this.$0_0.get_results().get_rowMembers();return a[this.$D_0][this.$6_0]}else if(this.$3_0===1){var b=this.$0_0.get_results().get_columnMembers();return b[this.$9_0][this.$B_0]}else if(this.$3_0===2){var c=this.$0_0.get_results().get_columnMembers();return c[this.$9_0][this.$6_0]}return null},$J_0:function(){a:;if(!this.$3_0||!this.$8_0){var a=this.$0_0.get_results().get_rowHierarchies();return a[this.$6_0]}else if(this.$3_0===1){var b=this.$0_0.get_results().get_columnHierarchies();return b[this.$B_0]}else if(this.$3_0===2){var c=this.$0_0.get_results().get_columnHierarchies();return c[this.$B_0]}return null},$Z_0:function(a){if(a==="2"){var b=this.$0_0.get_results().get_rowHierarchies();return b[this.$6_0]}else if(a==="1"){var c=this.$0_0.get_results().get_columnHierarchies();return c[this.$B_0]}return null},$R_0:function(k,b,h){if(k){var c=this.$0_0.get_results().get_filterEmptyAxis(),i=(c&2)>0,j=(c&1)>0,a=PPSMA.ContextMenu.addSubMenu(this.$2_0,PPSMA.SR.OlapContextMenu_Filter,this.$0_0.get_resourcePath()+"ImageFilter.gif",false);if(b){var d=this.$0_0.get_results().get_valueFilterRow()===1,e=this.$0_0.get_results().get_topFilterRow()===1;PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_SortSeries,null,this.$0_0.get_resourcePath()+"ChartSeriesD.gif",false);if(d||e)PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ClearFilter,this.$1_0+".clearSeriesFilter()",this.$0_0.get_resourcePath()+"ClearFilter.gif",null,false,true);else PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_ClearFilter,null,this.$0_0.get_resourcePath()+"ClearFilterD.gif",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ValueFilter,this.$1_0+".filterByValue('2');",d?this.$0_0.get_resourcePath()+"Check.gif":"",null,false,true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_TopFilter,this.$1_0+".filterByTopBottom('2');",e?this.$0_0.get_resourcePath()+"Check.gif":"",null,false,true)}if(h){var f=this.$0_0.get_results().get_valueFilterCol()===1,g=this.$0_0.get_results().get_topFilterCol()===1;b&&PPSMA.ContextMenu.addMenuSeparator(a);PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_SortPoints,null,this.$0_0.get_resourcePath()+"ChartBottomAxisD.gif",false);if(f||g)PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ClearFilter,this.$1_0+".clearPointsFilter()",this.$0_0.get_resourcePath()+"ClearFilter.gif",null,false,true);else PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_ClearFilter,null,this.$0_0.get_resourcePath()+"ClearFilterD.gif",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_ValueFilter,this.$1_0+".filterByValue('1');",f?this.$0_0.get_resourcePath()+"Check.gif":"",null,false,true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_TopFilter,this.$1_0+".filterByTopBottom('1');",g?this.$0_0.get_resourcePath()+"Check.gif":"",null,false,true)}PPSMA.ContextMenu.addMenuSeparator(a);b&&PPSMA.ContextMenu.addToggleMenuOption(a,PPSMA.SR.OlapContextMenu_EmptySeries,this.$1_0+".filterEmptyRow()",this.$0_0.get_resourcePath()+"FilterEmpRowChart.gif",null,i,false);h&&PPSMA.ContextMenu.addToggleMenuOption(a,PPSMA.SR.OlapContextMenu_EmptyPoints,this.$1_0+".filterEmptyCol()",this.$0_0.get_resourcePath()+"FilterEmpColChart.gif",null,j,false)}},$k_0:function(d){if(d){var b=this.$9_0===this.$0_0.get_results().get_sortColIndex(),c=this.$D_0===this.$0_0.get_results().get_sortRowIndex(),a=PPSMA.ContextMenu.addSubMenu(this.$2_0,PPSMA.SR.OlapContextMenu_Sort,this.$0_0.get_resourcePath()+"Sort.gif",false);PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_SortSeries,null,this.$0_0.get_resourcePath()+"ChartSeriesD.gif",false);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_LargeToSmall,this.$1_0+".sort('2','desc')",this.$0_0.get_resourcePath()+"SortAscNum.gif",null,b&&this.$0_0.get_results().get_sortTypeRow()==="desc",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_SmallToLarge,this.$1_0+".sort('2','asc');",this.$0_0.get_resourcePath()+"SortDescNum.gif",null,b&&this.$0_0.get_results().get_sortTypeRow()==="asc",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_NoSort,this.$1_0+".sort('2','nosort');",null,null,false,true);PPSMA.ContextMenu.addMenuSeparator(a);PPSMA.ContextMenu.addDisabledMenuOption(a,PPSMA.SR.OlapContextMenu_SortPoints,null,this.$0_0.get_resourcePath()+"ChartBottomAxisD.gif",false);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_LargeToSmall,this.$1_0+".sort('1','desc');",this.$0_0.get_resourcePath()+"SortAscNum.gif",null,c&&this.$0_0.get_results().get_sortTypeCol()==="desc",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_SmallToLarge,this.$1_0+".sort('1','asc');",this.$0_0.get_resourcePath()+"SortDescNum.gif",null,c&&this.$0_0.get_results().get_sortTypeCol()==="asc",true);PPSMA.ContextMenu.addMenuOption(a,PPSMA.SR.OlapContextMenu_NoSort,this.$1_0+".sort('1','nosort');",null,null,false,true)}},$V_0:function(a){var b=this.$E_0();return (!a||PPSMA.EventsEx.isLeftClick(a))&&this.get_$5_0()&&b.get_hasChildren()},$p_0:function(f){var e=PPSMA.XmlEx.loadXml(this.$0_0.get_cellActionData()),a=e.getElementsByTagName("UrlAction");if(a&&a.length>0)for(var c=0;c<a.length;c++)PPSMA.ContextMenu.addMenuOption(f,a[c].getAttribute("caption"),this.$1_0+".handleShowUrlMenuClick('"+a[c].getAttribute("content")+"');",null,null,false,false);var b=e.getElementsByTagName("DDAction");if(b&&b.length>0)for(var d=0;d<b.length;d++)PPSMA.ContextMenu.addMenuOption(f,b[d].getAttribute("caption"),this.$1_0+".showDetails('"+b[d].getAttribute("resulttableindex")+"');",null,null,false,false);else{var g=e.getElementsByTagName("AdditionalActions");g&&PPSMA.ContextMenu.addDisabledMenuOption(f,g[0].getAttribute("message"),null,null,false)}},$q_0:function(e){var a=this.$E_0(),b=this.$J_0();if(a&&b){var c="R";if(this.$3_0===1&&this.$8_0===1||this.$3_0===2)c="C";var d=new PPSMA.DrillDownToHelper(a,b,c,this.$0_0);d.populateSubMenuItems(e,this.$1_0+".drillDownTo")}},get_$5_0:function(){a:;return this.$0_0.get_results().get_canNavigate()},get_$N_0:function(){a:;return this.$0_0.get_results().get_isDesigner()}};PPSMA.OlapChart.registerClass("PPSMA.OlapChart",null,PPSMA.OlapView);PPSMA.OlapChart.$K=null;PPSMA.OlapChart.$l=40;PPSMA.OlapChart.$m=40;typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("analyticchart.js")