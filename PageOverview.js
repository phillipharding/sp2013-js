function ULScUF(){var a={};a.ULSTeamName="PerformancePoint Monitoring Service";a.ULSFileName="PageOverview.js";return a}Type.registerNamespace("PPSMA");PPSMA.PageOverviewSelector=function(e){this.$2_0=$get("ppsmaPageOverview");this.$1_0=document.createElement("div");this.$0_0=document.createElement("ul");Sys.UI.DomElement.addCssClass(this.$0_0,"ms-core-listMenu-horizontalBox");this.$1_0.appendChild(this.$0_0);for(var c=e,d=c.length,a=0;a<d;++a){var b=c[a];this.$0_0.appendChild(PPSMA.PageOverviewSelector.createPageOverviewTab(b.caption,b.href,b.isActive))}this.$2_0.appendChild(this.$1_0)};PPSMA.PageOverviewSelector.setInnerText=function(a,b){a:;var c=document.createTextNode;if(!isNullOrUndefined(c)){var d=document.createTextNode(b);a.innerHTML="";a.appendChild(d)}else a.innerText=b};PPSMA.PageOverviewSelector.createPageOverview=function(a){a:;var b=new PPSMA.PageOverviewSelector(a)};PPSMA.PageOverviewSelector.createPageOverviewTab=function(d,e,c){a:;var b=document.createElement("li"),a;if(c){a=document.createElement("a");Sys.UI.DomElement.addCssClass(a,"ms-core-listMenu-selected");Sys.UI.DomElement.addCssClass(a,"ms-core-listMenu-item");a.href=document.URL}else{a=document.createElement("a");Sys.UI.DomElement.addCssClass(a,"ms-core-listMenu-item");a.href=e}b.appendChild(a);PPSMA.PageOverviewSelector.setInnerText(a,d);return b};PPSMA.PageOverviewSelector.prototype={$1_0:null,$0_0:null};PPSMA.PageOverviewSelector.registerClass("PPSMA.PageOverviewSelector");function isNullOrUndefined(a){a:;return a===null||a===undefined}typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("pageoverview.js")