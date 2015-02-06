// JScript File


Type.registerNamespace('SP.DocumentSet');

SP.DocumentSet.DocumentSet = function SP_DocumentSet_DocumentSet(context, objectPath) {
    SP.DocumentSet.DocumentSet.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSet.create = function SP_DocumentSet_DocumentSet$create(context, parentFolder, name, ctid) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'Create', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Type.registerNamespace('SP.Video');

SP.Video.EmbedCodeConfiguration = function SP_Video_EmbedCodeConfiguration() {
    SP.Video.EmbedCodeConfiguration.initializeBase(this);
}
SP.Video.EmbedCodeConfiguration.prototype = {
    $0_1: false,
    $1_1: false,
    $2_1: false,
    $3_1: false,
    $4_1: false,
    $5_1: 0,
    $6_1: 0,
    $7_1: null,
    $8_1: 0,
    
    get_autoPlay: function SP_Video_EmbedCodeConfiguration$get_autoPlay() {
        return this.$0_1;
    },
    set_autoPlay: function SP_Video_EmbedCodeConfiguration$set_autoPlay(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_displayTitle: function SP_Video_EmbedCodeConfiguration$get_displayTitle() {
        return this.$1_1;
    },
    set_displayTitle: function SP_Video_EmbedCodeConfiguration$set_displayTitle(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$get_linkToOwnerProfilePage() {
        return this.$2_1;
    },
    set_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$set_linkToOwnerProfilePage(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$get_linkToVideoHomePage() {
        return this.$3_1;
    },
    set_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$set_linkToVideoHomePage(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_loop: function SP_Video_EmbedCodeConfiguration$get_loop() {
        return this.$4_1;
    },
    set_loop: function SP_Video_EmbedCodeConfiguration$set_loop(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_pixelHeight: function SP_Video_EmbedCodeConfiguration$get_pixelHeight() {
        return this.$5_1;
    },
    set_pixelHeight: function SP_Video_EmbedCodeConfiguration$set_pixelHeight(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_pixelWidth: function SP_Video_EmbedCodeConfiguration$get_pixelWidth() {
        return this.$6_1;
    },
    set_pixelWidth: function SP_Video_EmbedCodeConfiguration$set_pixelWidth(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_previewImagePath: function SP_Video_EmbedCodeConfiguration$get_previewImagePath() {
        return this.$7_1;
    },
    set_previewImagePath: function SP_Video_EmbedCodeConfiguration$set_previewImagePath(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_startTime: function SP_Video_EmbedCodeConfiguration$get_startTime() {
        return this.$8_1;
    },
    set_startTime: function SP_Video_EmbedCodeConfiguration$set_startTime(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_typeId: function SP_Video_EmbedCodeConfiguration$get_typeId() {
        return '{294cf1eb-cef4-49e0-b114-648abb3916af}';
    },
    
    writeToXml: function SP_Video_EmbedCodeConfiguration$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AutoPlay', 'DisplayTitle', 'LinkToOwnerProfilePage', 'LinkToVideoHomePage', 'Loop', 'PixelHeight', 'PixelWidth', 'PreviewImagePath', 'StartTime' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Video_EmbedCodeConfiguration$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AutoPlay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.AutoPlay;
        }
        $v_0 = parentNode.DisplayTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.DisplayTitle;
        }
        $v_0 = parentNode.LinkToOwnerProfilePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.LinkToOwnerProfilePage;
        }
        $v_0 = parentNode.LinkToVideoHomePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.LinkToVideoHomePage;
        }
        $v_0 = parentNode.Loop;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Loop;
        }
        $v_0 = parentNode.PixelHeight;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.PixelHeight;
        }
        $v_0 = parentNode.PixelWidth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.PixelWidth;
        }
        $v_0 = parentNode.PreviewImagePath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.PreviewImagePath;
        }
        $v_0 = parentNode.StartTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.StartTime;
        }
    }
}


SP.Video.VideoSet = function SP_Video_VideoSet(context, objectPath) {
    SP.Video.VideoSet.initializeBase(this, [ context, objectPath ]);
}
SP.Video.VideoSet.createVideo = function SP_Video_VideoSet$createVideo(context, parentFolder, name, ctid) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'CreateVideo', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.uploadVideo = function SP_Video_VideoSet$uploadVideo(context, list, fileName, file, overwriteIfExists, parentFolderPath) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'UploadVideo', [ list, fileName, file, overwriteIfExists, parentFolderPath ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.getEmbedCode = function SP_Video_VideoSet$getEmbedCode(context, videoPath, properties) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'GetEmbedCode', [ videoPath, properties ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.migrateVideo = function SP_Video_VideoSet$migrateVideo(context, videoFile) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ListItem(context, new SP.ObjectPathStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'MigrateVideo', [ videoFile ]));
    return $v_0;
}


SP.DocumentSet.DocumentSet.registerClass('SP.DocumentSet.DocumentSet', SP.ClientObject);
SP.Video.EmbedCodeConfiguration.registerClass('SP.Video.EmbedCodeConfiguration', SP.ClientValueObject);
SP.Video.VideoSet.registerClass('SP.Video.VideoSet', SP.DocumentSet.DocumentSet);
function sp_documentmanagement_initialize() {
};
sp_documentmanagement_initialize();

RegisterModuleInit("sp.documentmanagement.js", sp_documentmanagement_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.DocumentManagement.js");
