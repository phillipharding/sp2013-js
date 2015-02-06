function ULS2vj(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="PageOverview.debug.js";return o;}
// PageOverview.js
//


Type.registerNamespace('PPSMA');

PPSMA.PageOverviewSelector = function PPSMA_PageOverviewSelector(tabs) {ULS2vj:;
    this._overviewElement$0 = $get('ppsmaPageOverview');
    this._tabStrip$0 = document.createElement('div');
    this._tabStripList$0 = document.createElement('ul');
    Sys.UI.DomElement.addCssClass(this._tabStripList$0, 'ms-core-listMenu-horizontalBox');
    this._tabStrip$0.appendChild(this._tabStripList$0);
    for (var $$arr_1 = tabs, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var tabItem = $$arr_1[$$idx_3];
        this._tabStripList$0.appendChild(PPSMA.PageOverviewSelector.createPageOverviewTab(tabItem.caption, tabItem.href, tabItem.isActive));
    }
    this._overviewElement$0.appendChild(this._tabStrip$0);
}
PPSMA.PageOverviewSelector.setInnerText = function PPSMA_PageOverviewSelector$setInnerText(n, t) {ULS2vj:;
    var innerFunc = document.createTextNode;
    if (!isNullOrUndefined(innerFunc)) {
        var parsedText = document.createTextNode(t);
        n.innerHTML = '';
        n.appendChild(parsedText);
    }
    else {
        n.innerText = t;
    }
}
PPSMA.PageOverviewSelector.createPageOverview = function PPSMA_PageOverviewSelector$createPageOverview(tabs) {ULS2vj:;
    var pageOverview = new PPSMA.PageOverviewSelector(tabs);
}
PPSMA.PageOverviewSelector.createPageOverviewTab = function PPSMA_PageOverviewSelector$createPageOverviewTab(caption, href, isActive) {ULS2vj:;
    var tab = document.createElement('li');
    var tabCaption;
    if (isActive) {
        tabCaption = document.createElement('a');
        Sys.UI.DomElement.addCssClass(tabCaption, 'ms-core-listMenu-selected');
        Sys.UI.DomElement.addCssClass(tabCaption, 'ms-core-listMenu-item');
        (tabCaption).href = document.URL;
    }
    else {
        tabCaption = document.createElement('a');
        Sys.UI.DomElement.addCssClass(tabCaption, 'ms-core-listMenu-item');
        (tabCaption).href = href;
    }
    tab.appendChild(tabCaption);
    PPSMA.PageOverviewSelector.setInnerText(tabCaption, caption);
    return tab;
}
PPSMA.PageOverviewSelector.prototype = {
    _tabStrip$0: null,
    _tabStripList$0: null,
    
    _appendTabs$p$0: function PPSMA_PageOverviewSelector$_appendTabs$p$0(tabs) {ULS2vj:;
        for (var index = 0; index < tabs.length; index++) {
            this._tabStripList$0.appendChild(tabs[index]);
            if (index !== tabs.length - 1) {
                var separator = document.createElement('li');
                PPSMA.PageOverviewSelector.setInnerText(separator, '|');
                this._tabStripList$0.appendChild(separator);
            }
        }
    }
}


PPSMA.PageOverviewSelector.registerClass('PPSMA.PageOverviewSelector');

function isNullOrUndefined(o) 
{ULS2vj:;
    return (o === null) || (o === undefined);
}

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("pageoverview.js");
