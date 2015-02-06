// JScript File


Type.registerNamespace('SP.UI');

SP.UI.MySiteLinks = function SP_UI_MySiteLinks(context, objectPath) {
    SP.UI.MySiteLinks.initializeBase(this, [ context, objectPath ]);
}
SP.UI.MySiteLinks.getMySiteLinks = function SP_UI_MySiteLinks$getMySiteLinks(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.UI.MySiteLinks(context, new SP.ObjectPathStaticMethod(context, '{abe75edc-bf10-4a06-b14f-6ef77ed9b9c2}', 'GetMySiteLinks', null));
    return $v_0;
}
SP.UI.MySiteLinks.prototype = {
    
    get_allDocumentsLink: function SP_UI_MySiteLinks$get_allDocumentsLink() {
        this.checkUninitializedProperty('AllDocumentsLink');
        return ((this.get_objectData().get_properties()['AllDocumentsLink']));
    },
    
    get_allDocumentsLinkTarget: function SP_UI_MySiteLinks$get_allDocumentsLinkTarget() {
        this.checkUninitializedProperty('AllDocumentsLinkTarget');
        return ((this.get_objectData().get_properties()['AllDocumentsLinkTarget']));
    },
    
    get_allSitesLink: function SP_UI_MySiteLinks$get_allSitesLink() {
        this.checkUninitializedProperty('AllSitesLink');
        return ((this.get_objectData().get_properties()['AllSitesLink']));
    },
    
    get_allSitesLinkTarget: function SP_UI_MySiteLinks$get_allSitesLinkTarget() {
        this.checkUninitializedProperty('AllSitesLinkTarget');
        return ((this.get_objectData().get_properties()['AllSitesLinkTarget']));
    },
    
    initPropertiesFromJson: function SP_UI_MySiteLinks$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AllDocumentsLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllDocumentsLink'] = ($v_0);
            delete parentNode.AllDocumentsLink;
        }
        $v_0 = parentNode.AllDocumentsLinkTarget;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllDocumentsLinkTarget'] = ($v_0);
            delete parentNode.AllDocumentsLinkTarget;
        }
        $v_0 = parentNode.AllSitesLink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllSitesLink'] = ($v_0);
            delete parentNode.AllSitesLink;
        }
        $v_0 = parentNode.AllSitesLinkTarget;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllSitesLinkTarget'] = ($v_0);
            delete parentNode.AllSitesLinkTarget;
        }
    }
}


SP.UI.MySiteLinksPropertyNames = function SP_UI_MySiteLinksPropertyNames() {
}


Type.registerNamespace('SP.UI.MySiteNavigation');

SP.UI.MySiteNavigation.QuickLaunch = function SP_UI_MySiteNavigation_QuickLaunch() {
}
SP.UI.MySiteNavigation.QuickLaunch.$0 = function SP_UI_MySiteNavigation_QuickLaunch$$0($p0) {
    if (window.GetWSA) {
        var $v_0 = GetWSA();
        var $v_1 = 0;
        if ($p0.indexOf('MySite.aspx?MySiteRedirect=') >= 0) {
            if ($p0.indexOf('AllDocuments') >= 0) {
                $v_1 = 9748;
            }
            else if ($p0.indexOf('FollowedDocuments') >= 0) {
                $v_1 = 9749;
            }
            else if ($p0.indexOf('SharedDocuments') >= 0) {
                $v_1 = 9752;
            }
            else if ($p0.indexOf('AllSites') >= 0) {
                $v_1 = 9753;
            }
            else if ($p0.indexOf('AllTasks') >= 0) {
                $v_1 = 9754;
            }
        }
        else if ($p0.indexOf('MyPeople.aspx') >= 0) {
            $v_1 = 9750;
        }
        else if ($p0.indexOf('Person.aspx') >= 0) {
            $v_1 = 9751;
        }
        else if ($p0.indexOf('Default.aspx') >= 0) {
            $v_1 = 9755;
        }
        if (!SP.ScriptUtility.isNullOrUndefined($v_0) && $v_1 > 0) {
            $v_0.incrementDw($v_1, 1);
        }
    }
}
SP.UI.MySiteNavigation.QuickLaunch.openLink = function SP_UI_MySiteNavigation_QuickLaunch$openLink(url) {
    SP.UI.MySiteNavigation.QuickLaunch.$0(url);
    var $v_0 = true;
    if (window.SPUpdatePage) {
        $v_0 = SPUpdatePage(url);
    }
    if ($v_0) {
        window.location.href = url;
    }
}


SP.UI.MySiteLinks.registerClass('SP.UI.MySiteLinks', SP.ClientObject);
SP.UI.MySiteLinksPropertyNames.registerClass('SP.UI.MySiteLinksPropertyNames');
SP.UI.MySiteNavigation.QuickLaunch.registerClass('SP.UI.MySiteNavigation.QuickLaunch');
function sp_ui_mysitenavigation_initialize() {
SP.UI.MySiteLinksPropertyNames.allDocumentsLink = 'AllDocumentsLink';
SP.UI.MySiteLinksPropertyNames.allDocumentsLinkTarget = 'AllDocumentsLinkTarget';
SP.UI.MySiteLinksPropertyNames.allSitesLink = 'AllSitesLink';
SP.UI.MySiteLinksPropertyNames.allSitesLinkTarget = 'AllSitesLinkTarget';
};
sp_ui_mysitenavigation_initialize();

RegisterModuleInit("sp.ui.mysitenavigation.js", sp_ui_mysitenavigation_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.mysitenavigation.js");

_spApplicationPagesScriptLoaded = true;
