Type.registerNamespace("Microsoft.SharePoint.Search.FacetedNavigation");Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy=function(){};Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy.prototype={Frequency:0,Name:1,Number:2};Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy.registerEnum("Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy",false);Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder=function(){};Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder.prototype={Descending:0,Ascending:1};Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder.registerEnum("Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder",false);Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode=function(){};Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode.prototype={Inherit:0,Custom:1};Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode.registerEnum("Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode",false);Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs=function(a,b,c){this.refinementConfiguration=a;this.termId=b;this.error=c};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.toJSON=function(a){return Sys.Serialization.JavaScriptSerializer.serialize(a)};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.fromJSON=function(a){return Sys.Serialization.JavaScriptSerializer.deserialize(a)};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.prototype={refinementConfiguration:null,termId:null,error:null,contextDataProviderState:null};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration=function(a){this.refinerConfigurations=a};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.toJSON=function(a){return Sys.Serialization.JavaScriptSerializer.serialize(a)};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.fromJSON=function(a){return Sys.Serialization.JavaScriptSerializer.deserialize(a)};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.prototype={refinerConfigurations:null};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration=function(a){this.sortBy=Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortBy;this.sortOrder=Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortOrder;this.maxNumberRefinementOptions=15;this.propertyName=a};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortByString=function(a){return Srch.U.loadResource(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$2[a])};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortOrderString=function(a){return Srch.U.loadResource(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$3[a])};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0=function(b){var a=b.toString();return b<10?"0"+a:a};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$4=function(a){return a.getUTCFullYear()+"-"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0(a.getUTCMonth()+1)+"-"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0(a.getUTCDate())+"T"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0(a.getUTCHours())+":"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0(a.getUTCMinutes())+":"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0(a.getUTCSeconds())+"Z"};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.generateRefinerSpecStringForObject=function(b){var a="";if(b.type==="Text"||b.type==="YesNo"){if(!!b.sortBy||!!b.sortOrder){a+="sort=";if(!b.sortBy)a+="frequency";else if(b.sortBy===1)a+="name";else if(b.sortBy===2)a+="number";else a+="frequency";a+="/";if(!b.sortOrder)a+="descending";else if(b.sortOrder===1)a+="ascending";else a+="descending"}if(b.maxNumberRefinementOptions>0){if(a.length>0)a+=",";a+="filter";a+="=";a+=b.maxNumberRefinementOptions.toString();a+="/0/*"}}else if(b.type==="Double"||b.type==="Decimal"||b.type==="Integer"){if(b.intervals&&b.intervals.length>0){a+="discretize=manual";for(var g=b.intervals,i=g.length,d=0;d<i;++d){var k=g[d];a+="/"+k}}}else if(b.type==="DateTime"){var f=b.useDefaultDateIntervals?Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$1:b.intervals;if(f&&f.length>0){a+="discretize=manual";for(var h=f,j=h.length,e=0;e<j;++e){var l=h[e],m=8.64e7,c=new Date(new Date-new Date(m*l));c=new Date(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0);a+="/"+Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$4(c)}}}else Srch.U.traceFormatted(null,"GenerateRefinerSpecStringForObject","invoked for unsupported property type '{0}'",b.type);if(a.length>0)a="("+a+")";return a};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.prototype={propertyName:null,displayName:null,displayTemplate:null,refinerSpecStringOverride:"",useDefaultDateIntervals:false,type:null,intervals:null,aliases:null};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities=function(){};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.isValidNumberIntervalsString=function(g){var c=Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getBoundariesFromNumberIntervalsString(g);if(!c.length)return false;for(var e=c[0]-1,d=c,f=d.length,b=0;b<f;++b){var a=d[b];if(a===Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber||a<=e||parseInt(a*10)!==a*10)return false;e=a}return true};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getBoundariesFromNumberIntervalsString=function(b){var a=new Array(0);if(b&&b!=="")for(var i=b.split(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator),e=i,g=e.length,c=0;c<g;++c){var f=e[c],d=0;if(Srch.U.w(f))continue;try{d=parseFloat(f.trim());if(isFinite(d))a.push(d);else a.push(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber)}catch(h){a.push(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber)}}return a};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getNumberIntervalStringFrom=function(a){if(a.intervals&&a.intervals.length>0)return a.intervals.join(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator);else return null};Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getAliasesString=function(a){if(a&&a.length>0){var b=Srch.U.loadResource("refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator");return a.join(b)}else return ""};Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState=function(){};Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState.prototype={SourceId:null,RankModelId:null,ClientType:null,Sorts:null,Properties:null,CollapseSpecification:null,RankRules:null,QueryTemplate:null,EnableQueryRules:false,HitHighlightedProperties:null,SelectedProperties:null,BypassResultTypes:false,EnableInterleaving:false,TrimDuplicates:false,AvailableSorts:null,FallbackSort:null,InitialQueryState:null};Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.registerClass("Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs");Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.registerClass("Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration");Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.registerClass("Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration");Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.registerClass("Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities");Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState.registerClass("Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState");Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaulT_MAX_NUM_REFINEMENT_OPTIONS=15;Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$2=["refconf_SortBy_Count","refconf_SortBy_Name","refconf_SortBy_Number"];Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$3=["refconf_SortDirection_Descending","refconf_SortDirection_Ascending"];Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeUnsupported="Unsupported";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeText="Text";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeInteger="Integer";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDecimal="Decimal";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime="DateTime";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeYesNo="YesNo";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeBinary="Binary";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDouble="Double";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$1=[365,30,7,0];Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortBy=0;Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortOrder=0;Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator=";";Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber=-.001;typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("search.refinementconfiguration.js")