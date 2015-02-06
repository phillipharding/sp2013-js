
Type.registerNamespace('Policy.Ribbon');

Policy.Ribbon.PolicyRibbonComponent = function Policy_Ribbon_PolicyRibbonComponent() {
    Policy.Ribbon.PolicyRibbonComponent.initializeBase(this);
    this._registerWithPageManager$i$1();
}
Policy.Ribbon.PolicyRibbonComponent.load = function Policy_Ribbon_PolicyRibbonComponent$load() {
    Policy.Ribbon.PolicyRibbonComponent._instance$p = new Policy.Ribbon.PolicyRibbonComponent();
}
Policy.Ribbon.PolicyRibbonComponent.prototype = {
    _focusedCommands$p$1: null,
    _globalCommands$p$1: null,
    
    _registerWithPageManager$i$1: function Policy_Ribbon_PolicyRibbonComponent$_registerWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().addPageComponent(this);
    },
    
    _unregisterWithPageManager$i$1: function Policy_Ribbon_PolicyRibbonComponent$_unregisterWithPageManager$i$1() {
        SP.Ribbon.PageManager.get_instance().removePageComponent(this);
    },
    
    init: function Policy_Ribbon_PolicyRibbonComponent$init() {
        this._focusedCommands$p$1 = [];
        this._globalCommands$p$1 = [ Policy.Ribbon.PolicyRibbonCommandNames.documentTab, Policy.Ribbon.PolicyRibbonCommandNames.documentManageGroup, Policy.Ribbon.PolicyCommandNames.declareRecord, Policy.Ribbon.PolicyCommandNames.undeclareRecord, Policy.Ribbon.PolicyCommandNames.declareRecordMenuOpen ];
    },
    
    getFocusedCommands: function Policy_Ribbon_PolicyRibbonComponent$getFocusedCommands() {
        return this._focusedCommands$p$1;
    },
    
    getGlobalCommands: function Policy_Ribbon_PolicyRibbonComponent$getGlobalCommands() {
        return this._globalCommands$p$1;
    },
    
    canHandleCommand: function Policy_Ribbon_PolicyRibbonComponent$canHandleCommand(commandId) {
        if (commandId === Policy.Ribbon.PolicyCommandNames.declareRecord) {
            return Policy.Ribbon.PolicyCommands.declareRecordEnabled();
        }
        else if (commandId === Policy.Ribbon.PolicyCommandNames.undeclareRecord) {
            return Policy.Ribbon.PolicyCommands.undeclareRecordEnabled();
        }
        else if (commandId === Policy.Ribbon.PolicyCommandNames.declareRecordMenuOpen) {
            return Policy.Ribbon.PolicyCommands.declareRecordEnabled() || Policy.Ribbon.PolicyCommands.undeclareRecordEnabled();
        }
        return true;
    },
    
    handleCommand: function Policy_Ribbon_PolicyRibbonComponent$handleCommand(commandId, properties, sequence) {
        if (commandId === Policy.Ribbon.PolicyCommandNames.declareRecord) {
            Policy.Ribbon.PolicyCommands.declareRecord();
        }
        else if (commandId === Policy.Ribbon.PolicyCommandNames.undeclareRecord) {
            Policy.Ribbon.PolicyCommands.undeclareRecord();
        }
        return true;
    },
    
    isFocusable: function Policy_Ribbon_PolicyRibbonComponent$isFocusable() {
        return true;
    },
    
    receiveFocus: function Policy_Ribbon_PolicyRibbonComponent$receiveFocus() {
        return true;
    },
    
    yieldFocus: function Policy_Ribbon_PolicyRibbonComponent$yieldFocus() {
        return true;
    }
}


Policy.Ribbon.PolicyCommandNames = function Policy_Ribbon_PolicyCommandNames() {
}


Policy.Ribbon.PolicyRibbonCommandNames = function Policy_Ribbon_PolicyRibbonCommandNames() {
}


Policy.Ribbon.PolicyCommands = function Policy_Ribbon_PolicyCommands() {
}
Policy.Ribbon.PolicyCommands.declareRecordEnabled = function Policy_Ribbon_PolicyCommands$declareRecordEnabled() {
    return eval('GetIsItemSelected()') && Policy.Ribbon.Externals.declareRecord.userHasRights && Policy.Ribbon.Externals.declareRecord.iprList;
}
Policy.Ribbon.PolicyCommands.undeclareRecordEnabled = function Policy_Ribbon_PolicyCommands$undeclareRecordEnabled() {
    return eval('GetIsItemSelected()') && Policy.Ribbon.Externals.undeclareRecord.userHasRights && Policy.Ribbon.Externals.undeclareRecord.iprList && !Policy.Ribbon.Externals.undeclareRecord.isAutoDeclareList;
}
Policy.Ribbon.PolicyCommands.declareRecord = function Policy_Ribbon_PolicyCommands$declareRecord() {
    if (!Policy.Ribbon.PolicyCommands.declareRecordEnabled()) {
        return;
    }
    eval(Policy.Ribbon.Externals.declareRecord.declareRecordFn);
}
Policy.Ribbon.PolicyCommands.undeclareRecord = function Policy_Ribbon_PolicyCommands$undeclareRecord() {
    if (!Policy.Ribbon.PolicyCommands.undeclareRecordEnabled()) {
        return;
    }
    eval(Policy.Ribbon.Externals.undeclareRecord.undeclareRecordFn);
}


Policy.Ribbon.PolicyRibbonComponent.registerClass('Policy.Ribbon.PolicyRibbonComponent', CUI.Page.PageComponent);
Policy.Ribbon.PolicyCommandNames.registerClass('Policy.Ribbon.PolicyCommandNames');
Policy.Ribbon.PolicyRibbonCommandNames.registerClass('Policy.Ribbon.PolicyRibbonCommandNames');
Policy.Ribbon.PolicyCommands.registerClass('Policy.Ribbon.PolicyCommands');
function sp_ui_policy_ribbon_initialize() {
Policy.Ribbon.PolicyRibbonComponent._instance$p = null;
Policy.Ribbon.PolicyCommandNames.declareRecord = 'DeclareRecord';
Policy.Ribbon.PolicyCommandNames.undeclareRecord = 'UndeclareRecord';
Policy.Ribbon.PolicyCommandNames.declareRecordMenuOpen = 'DeclareRecordMenuOpen';
Policy.Ribbon.PolicyRibbonCommandNames.documentManageGroup = 'DocumentManageGroup';
Policy.Ribbon.PolicyRibbonCommandNames.documentTab = 'DocumentTab';
};
sp_ui_policy_ribbon_initialize();

ExecuteAndRegisterBeginEndFunctions("sp.ui.policy.ribbon.js",
    sp_ui_policy_ribbon_initialize, 
    null,
    function(){

Policy.Ribbon.Externals = function Policy_Ribbon_Externals() {}

if (typeof(declareRecord) != "undefined") Policy.Ribbon.Externals.declareRecord = declareRecord;
if (typeof(undeclareRecord) != "undefined") Policy.Ribbon.Externals.undeclareRecord = undeclareRecord;

if (typeof(_spBodyOnLoadCalled) == 'undefined' || _spBodyOnLoadCalled)
{
	window.setTimeout(Policy.Ribbon.PolicyRibbonComponent.load, 0);
}
else
{
	_spBodyOnLoadFunctionNames.push("Policy.Ribbon.PolicyRibbonComponent.load");
}

    });

function CountEntries(d) { var i = 0; var k; if (!d) return 0; for (k in d) i++; return i; }

function GetIsItemSelected()
{
    var items = SP.ListOperation.Selection.getSelectedItems();
    var ci = CountEntries(items);
    return ci > 0;
}

function GetItemCollectionString()
{
    var items = SP.ListOperation.Selection.getSelectedItems();
    var itemStr = '0';

    for (k in items)
    {
        itm = items[k];
        itemStr += '|' + itm.id;
    }

    return itemStr;
}

function DeclareSelectedItems()
{
    if (!confirm(SP.Publishing.Resources.declareConfirmation))
        return;

    document.getElementById('_DeclareRecordArgument').value = GetItemCollectionString();
    eval(Policy.Ribbon.Externals.declareRecord.pbFn);
}

function UndeclareSelectedItems()
{
    if (!confirm(SP.Publishing.Resources.undeclareConfirmation))
        return;

    document.getElementById('_UndeclareRecordArgument').value = GetItemCollectionString();
    eval(Policy.Ribbon.Externals.undeclareRecord.pbFn);

}

if( typeof(Sys) != "undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) != "undefined")
{
    NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.Policy.Ribbon.js");
}
