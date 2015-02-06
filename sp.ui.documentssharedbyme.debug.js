// JScript File


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.SharedByMePeopleSearchBox = function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox(context, elem) {
    Microsoft.SharePoint.Portal.SharedByMePeopleSearchBox.initializeBase(this, [ context, elem ]);
}
Microsoft.SharePoint.Portal.SharedByMePeopleSearchBox.prototype = {
    
    initializeStrings: function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox$initializeStrings() {
        Microsoft.SharePoint.Portal.ListSearchBox.prototype.initializeStrings.call(this);
        this.set_ghostedText(SpsClient.ScriptResources.myDocs_SharedByMe_PeopleSearchBoxDefaultText);
        this.set_searchBoxInstructions(SpsClient.ScriptResources.myDocs_SharedByMe_PeopleSearchBoxTooltip);
    },
    
    onSearchBoxKeyUp: function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox$onSearchBoxKeyUp(evt) {
        Microsoft.SharePoint.Portal.ListSearchBox.prototype.onSearchBoxKeyUp.call(this, evt);
        if (this.get_isEmpty()) {
            showAllUsers(this.get_context());
        }
        else {
            filterUsers(this.get_context(), this.get_searchBox().value);
        }
    },
    
    onSearchBoxKeyPress: function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox$onSearchBoxKeyPress(evt) {
        return;
    },
    
    clearSearch: function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox$clearSearch() {
        Microsoft.SharePoint.Portal.ListSearchBox.prototype.clearSearch.call(this);
        this.set_isEmpty(Microsoft.SharePoint.Portal.ListSearchBox.isNullOrWhiteSpace(this.get_searchBox().value));
        showAllUsers(this.get_context());
    },
    
    updateVisuals: function Microsoft_SharePoint_Portal_SharedByMePeopleSearchBox$updateVisuals() {
        if (this.get_showingGhostedText() || this.get_isEmpty()) {
            this.showSearchIcon();
        }
        else {
            this.showCancelIcon();
        }
        this.styleParentDiv(this.get_isEmpty(), ((this.get_focusedElement() === 1) || (this.get_focusedElement() === 2) || this.get_isParentDivHovering()));
        this.styleTextBox(this.get_isEmpty(), this.get_focusedElement() === 1);
        this.get_searchProgress().style.visibility = (this.get_showProgress()) ? 'visible' : 'hidden';
    }
}


Microsoft.SharePoint.Portal.SharedByMePeopleSearchBox.registerClass('Microsoft.SharePoint.Portal.SharedByMePeopleSearchBox', Microsoft.SharePoint.Portal.ListSearchBox);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.DocumentsSharedByMe.js");

_spApplicationPagesScriptLoaded = true;
