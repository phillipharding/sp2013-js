// JScript File


Type.registerNamespace('Microsoft.SharePoint.Portal');

Microsoft.SharePoint.Portal.CollaborationMailboxStatus = function() {}
Microsoft.SharePoint.Portal.CollaborationMailboxStatus.prototype = {
    showOwaFrame: 0, 
    showProvisionFrame: 1, 
    errorStart: 49, 
    notSiteOwner: 50, 
    unsupportedExchangeVersion: 51, 
    unsupportedExchangeTopology: 52, 
    autoDiscoverFailed: 53, 
    unsupportedSharePointConfiguration: 54, 
    ewsClientMissing: 55, 
    webUrlChanged: 56, 
    mailboxNotReady: 57, 
    memberGroupsNotAvailable: 58, 
    serviceError: 98, 
    errorEnd: 99, 
    loadShowOwaFrame: 100, 
    loadShowProvisionFrame: 101, 
    defaultStatus: 1000
}
Microsoft.SharePoint.Portal.CollaborationMailboxStatus.registerEnum('Microsoft.SharePoint.Portal.CollaborationMailboxStatus', false);


Microsoft.SharePoint.Portal.CollaborationMailbox = function Microsoft_SharePoint_Portal_CollaborationMailbox() {
}
Microsoft.SharePoint.Portal.CollaborationMailbox.getCollabMailboxViewInfo = function Microsoft_SharePoint_Portal_CollaborationMailbox$getCollabMailboxViewInfo(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{c5f8e1b0-748e-4fa3-b799-c6fe07013774}', 'GetCollabMailboxViewInfo', null);
    context.addQuery($v_1);
    $v_0 = new Microsoft.SharePoint.Portal.CollaborationMailboxResponse();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Microsoft.SharePoint.Portal.CollaborationMailboxResponse = function Microsoft_SharePoint_Portal_CollaborationMailboxResponse() {
    Microsoft.SharePoint.Portal.CollaborationMailboxResponse.initializeBase(this);
}
Microsoft.SharePoint.Portal.CollaborationMailboxResponse.prototype = {
    $2_1: null,
    $3_1: null,
    $4_1: 0,
    $1_1: 0,
    $5_1: null,
    
    get_alternateUrl: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_alternateUrl() {
        return this.$2_1;
    },
    set_alternateUrl: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$set_alternateUrl(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_correlationId: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_correlationId() {
        return this.$3_1;
    },
    set_correlationId: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$set_correlationId(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_errorCode: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_errorCode() {
        return this.$4_1;
    },
    set_errorCode: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$set_errorCode(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_status: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_status() {
        return this.$1_1;
    },
    set_status: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$set_status(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_url: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_url() {
        return this.$5_1;
    },
    set_url: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$set_url(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$get_typeId() {
        return '{53cc7746-0596-478c-ae12-d5b1ed5da52e}';
    },
    
    writeToXml: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AlternateUrl', 'CorrelationId', 'ErrorCode', 'Status', 'Url' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Portal_CollaborationMailboxResponse$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AlternateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.AlternateUrl;
        }
        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.ErrorCode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.ErrorCode;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Status;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Type.registerNamespace('SP.UI.CollaborationMailbox');

SP.UI.CollaborationMailbox.CollaborationMailboxControl = function SP_UI_CollaborationMailbox_CollaborationMailboxControl($p0) {
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.initializeBase(this, [ $p0 ]);
}
SP.UI.CollaborationMailbox.CollaborationMailboxControl.$$cctor = function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$$cctor() {
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[1] = 'ShowProvisionFrame';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[2] = 'ShowManageFrame';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[50] = 'NotSiteOwner';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[51] = 'UnsupportedExchangeVersion';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[52] = 'UnsupportedExchangeTopology';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[53] = 'AutoDiscoverFailed';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[54] = 'UnsupportedSharePointConfiguration';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[55] = 'EwsClientMissing';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[56] = 'WebUrlChanged';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[57] = 'MailboxNotReady';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[58] = 'MemberGroupsNotAvailable';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[98] = 'ServiceError';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[100] = 'LoadShowOwaFrame';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[101] = 'LoadShowProvisionFrame';
    SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[102] = 'LoadShowManageFrame';
}
SP.UI.CollaborationMailbox.CollaborationMailboxControl.prototype = {
    
    initializeMailboxControl: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$initializeMailboxControl(status) {
        this.$6_2(status, null, null, 0);
        if (status < 49 || status > 99) {
            this.$8_2();
        }
    },
    
    $8_2: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$8_2() {
        var $v_0 = Microsoft.SharePoint.Portal.CollaborationMailbox.getCollabMailboxViewInfo(SP.ClientContext.get_current());
        var $$t_5 = this, $$t_6 = this;
        SP.ClientContext.get_current().executeQueryAsync(function($p1_0, $p1_1) {
            if (!$v_0.$1_1 || $v_0.$1_1 === 1) {
                window.location.replace($v_0.$5_1);
            }
            else {
                $$t_5.$6_2($v_0.$1_1, $v_0.$2_1, $v_0.$3_1, $v_0.$4_1);
            }
        }, function($p1_0, $p1_1) {
            $$t_6.$6_2(98, null, SP.ClientContext.get_current().get_traceCorrelationId(), 0);
        });
    },
    
    $B_2: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$B_2($p0) {
        var $v_0 = SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[$p0];
        var $v_1 = eval(String.format('SpsClient.ScriptResources.collabMailbox_Status_{0}_Title', $v_0));
        var $v_2 = eval(String.format('SpsClient.ScriptResources.collabMailbox_Status_{0}_Description', $v_0));
        var $v_3 = String.format('<h1 id=\'{0}_stathead\'>{1}</h1><p id=\'{0}_statdesc\'>{2}</p>', this.get_element().id, $v_1, $v_2);
        return $v_3;
    },
    
    $9_2: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$9_2($p0, $p1) {
        if (!$p1 || !$p1.length) {
            return '';
        }
        var $v_0 = SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0[$p0];
        var $v_1 = eval(String.format('SpsClient.ScriptResources.collabMailbox_Status_{0}_AlternateAddress', $v_0));
        var $v_2 = String.format('<a href=\'{0}\'>', $p1);
        var $v_3 = String.format($v_1, $v_2, '</a>');
        var $v_4 = String.format('<p id=\'{0}_statlink\'>{1}</p>', this.get_element().id, $v_3);
        return $v_4;
    },
    
    $6_2: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$6_2($p0, $p1, $p2, $p3) {
        var $v_0 = this.$B_2($p0);
        var $v_1 = this.$9_2($p0, $p1);
        var $v_2 = '';
        if (49 <= $p0 && 99 >= $p0) {
            $v_2 = this.$A_2($p2, $p3);
        }
        this.get_element().innerHTML = $v_0 + $v_1 + $v_2;
    },
    
    $A_2: function SP_UI_CollaborationMailbox_CollaborationMailboxControl$$A_2($p0, $p1) {
        var $v_0 = new Date();
        var $v_1 = '';
        if ($p0) {
            $v_1 = String.format('<p id=\'{0}_corid\'>{1}</p>', this.get_element().id, String.format(SpsClient.ScriptResources.collabMailbox_CorrelationId_Message, $p0, $p1));
        }
        $v_1 += String.format('<p id=\'{0}_datetime\'>{1}</p>', this.get_element().id, $v_0.toLocaleString());
        return $v_1;
    }
}


Microsoft.SharePoint.Portal.CollaborationMailbox.registerClass('Microsoft.SharePoint.Portal.CollaborationMailbox');
Microsoft.SharePoint.Portal.CollaborationMailboxResponse.registerClass('Microsoft.SharePoint.Portal.CollaborationMailboxResponse', SP.ClientValueObject);
SP.UI.CollaborationMailbox.CollaborationMailboxControl.registerClass('SP.UI.CollaborationMailbox.CollaborationMailboxControl', Sys.UI.Control);
function sp_ui_collabmailbox_initialize() {
SP.UI.CollaborationMailbox.CollaborationMailboxControl.$0 = new Array(0);
SP.UI.CollaborationMailbox.CollaborationMailboxControl.$$cctor();
};
sp_ui_collabmailbox_initialize();

RegisterModuleInit("sp.ui.collabmailbox.js", sp_ui_collabmailbox_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.collabmailbox.js");

_spApplicationPagesScriptLoaded = true;
