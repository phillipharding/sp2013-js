function $_global_roamingapps() {
    if (typeof MSOJS == "undefined")
        MSOJS = {};
    MSOJS.ClientUtils = (function() {
        var O15ProgId = "SharePoint.OpenDocuments.5";
        var O14ProgId = "SharePoint.OpenDocuments.4";
        var O12ProgId = "SharePoint.OpenDocuments.3";
        var O11ProgId = "SharePoint.OpenDocuments.2";
        var NpapiPluginMimeType = "application/x-sharepoint";
        var MacWebKitPluginMimeType = "application/x-sharepoint-webkit";
        var MacOfficeLivePluginMimeType = "application/officelive";
        var PluginDomElementId = "npSharePointPlugin";
        var WLSIAProgId = "IDBHO.IDBHOCtrl";
        var OneNoteProgId = "OneNote.Notebook";
        var ViewProtocolHandlerCommand = "ofv|";
        var EditProtocolHandlerCommand = "ofe|";
        var UrlProtocolHandlerParameter = "u|";
        var RoamingActiveXProgId = "RoamingOfficeActiveX.RoamingOffice";
        var RoamingNPAPIMimeType = "application/x-vnd.officeondemand";
        var RoamingProtocol = "office:";
        var X86RootUrl = "";
        var FirefoxExtensionUrl = "";
        var ControlInstallerUrl = "";
        var _successCallback;
        var _failureCallback;
        var _roamingSuccessCallback;
        var _roamingFailureCallback;
        var _params;
        var _ntVersionChecked;
        var _ntVersion;
        var _wpVersionChecked;
        var _wpVersion;

        function InitUrls(x86RootUrl, controlInstallerUrl, firefoxExtensionUrl) {
            X86RootUrl = x86RootUrl;
            FirefoxExtensionUrl = firefoxExtensionUrl;
            ControlInstallerUrl = controlInstallerUrl;
        }
        var OpenDocumentMode = {
            ReadWrite: 0,
            ReadOnly: 1,
            WriteOnly: 2,
            ForceCheckout: 3,
            WriteLocalCopy: 4
        };
        var OpenDocumentOptions = {
            None: 0x00,
            CheckoutRequired: 0x01,
            O14Only: 0x02,
            HostIsEditOnly: 0x04,
            O12UpOnly: 0x08,
            SkipProtocolHandler: 0x10,
            NoProtocolHandlerFallback: 0x20
        };
        var OpenDocumentFailureType = {
            None: 0,
            Failed: 1,
            Unattempted: 2,
            LauncherNeeded: 3,
            ControlNeeded: 4
        };
        var OpenDocumentControl = {
            Unknown: 0,
            NpapiPlugin: 1,
            O10ActiveX: 2,
            O11ActiveX: 3,
            O12ActiveX: 4,
            O14ActiveX: 5,
            ProtocolHandler: 6,
            RoamingActiveX: 7,
            RoamingFFExtension: 8,
            RoamingProtocolHandler: 9,
            O15ActiveX: 10
        };
        var OfficeApplication = {
            Unknown: 0,
            Excel: 1,
            OneNote: 2,
            PowerPoint: 3,
            Visio: 4,
            Word: 5,
            Project: 6,
            Publisher: 7,
            Infopath: 8,
            Access: 9
        };

        function IsSupportedBrowserForMacPlugin() {
            return IsMac() && (IsFirefox3Up() || IsSafari3Up());
        }
        function SupportsOpenInClientNpapiPlugin() {
            return IsFirefox3Up();
        }
        function SupportsActiveX() {
            return "ActiveXObject" in window && !IsWindowsPhone();
        }
        function SupportsRoamingApps() {
            return IsWindows7Up() && !IsArm() && (IsInternetExplorer() || IsFirefox3Up() || IsChrome());
        }
        function IsWindows() {
            return window.navigator.userAgent.indexOf("Windows") >= 0;
        }
        function IsWindowsPhone() {
            return window.navigator.userAgent.indexOf("Windows Phone") >= 0;
        }
        function CheckWindowsNTVersion() {
            if (Boolean(_ntVersionChecked))
                return;
            _ntVersionChecked = true;
            _ntVersion = GetWindowsVersion('Windows NT');
        }
        function CheckWindowsPhoneVersion() {
            if (Boolean(_wpVersionChecked))
                return;
            _wpVersionChecked = true;
            _wpVersion = GetWindowsVersion('Windows Phone');
        }
        function GetWindowsVersion(regexPrefix) {
            var ntVersionRegex = new RegExp(regexPrefix + '\\s+(\\d+(\\.\\d*)?)');
            var result = ntVersionRegex.exec(window.navigator.userAgent);
            var version = -1;

            if (result != null && result.length >= 2) {
                version = parseFloat(result[1]);
                if (isNaN(version)) {
                    version = -1;
                }
            }
            return version;
        }
        function IsWindows7Up() {
            CheckWindowsNTVersion();
            return _ntVersion >= 6.1;
        }
        function IsWindowsPhone8Up() {
            CheckWindowsPhoneVersion();
            return _wpVersion >= 8.0;
        }
        function IsArm() {
            return window.navigator.userAgent.indexOf("ARM;") >= 0;
        }
        function SupportsUriNavigation() {
            return typeof navigator.msLaunchUri == "function" && !IsWindowsPhone();
        }
        function SupportsProtocolHandlerDetection() {
            return SupportsUriNavigation() || IsFirefox();
        }
        function IsMac() {
            return window.navigator.userAgent.indexOf("Macintosh") >= 0;
        }
        function IsPpcMac() {
            return window.navigator.userAgent.indexOf("PPC Mac") >= 0;
        }
        function IsInternetExplorer() {
            return window.navigator.userAgent.indexOf(" MSIE ") >= 0;
        }
        function IsInternetExplorer8() {
            if (!IsInternetExplorer())
                return false;
            return window.document.documentMode == 8;
        }
        function IsFirefox() {
            return window.navigator.userAgent.indexOf(" Firefox/") >= 0;
        }
        function IsWebKit() {
            return window.navigator.userAgent.indexOf(" AppleWebKit/") >= 0;
        }
        function IsChrome() {
            var userAgent = window.navigator.userAgent.toLowerCase();

            return userAgent.indexOf("chrome") >= 0;
        }
        function IsFirefox3Up() {
            return GetFirefoxVersion() >= 3;
        }
        function IsSafari3Up() {
            return GetSafariVersion() >= 3;
        }
        function GetFirefoxVersion() {
            if (IsFirefox()) {
                return ParseVersionAfterString("firefox/");
            }
            return 0;
        }
        function GetSafariVersion() {
            if (IsWebKit()) {
                return ParseVersionAfterString("version/");
            }
            return 0;
        }
        function ParseVersionAfterString(versionString) {
            var userAgent = window.navigator.userAgent.toLowerCase();
            var iVersion = userAgent.indexOf(versionString);

            if (iVersion >= 0) {
                var iStart = iVersion + versionString.length;
                var iEnd = userAgent.length;

                return parseInt(userAgent.substring(iStart, iEnd));
            }
            return 0;
        }
        function LaunchProtocolHandlerUrl(url, onSuccessCallback, onFailureCallback) {
            if (SupportsUriNavigation()) {
                navigator.msLaunchUri(url, onSuccessCallback, onFailureCallback);
            }
            else {
                NavigateToUrlInFrame(url, onSuccessCallback, onFailureCallback);
            }
        }
        function NavigateToUrlInFrame(url, onSuccessCallback, onFailureCallback) {
            var frameId = "OICFrame";
            var frame = document.getElementById(frameId);

            if (frame == null) {
                frame = document.createElement('iframe');
                frame.id = frameId;
                frame.className = 'ObjectInDialog';
                frame.style.visibility = 'hidden';
                frame.src = "about:blank";
                document.body.appendChild(frame);
            }
            try {
                frame.contentWindow.location.href = url;
            }
            catch (e) {
                if (onFailureCallback != null)
                    onFailureCallback();
                return;
            }
            if (onSuccessCallback != null)
                onSuccessCallback();
        }
        function SkipProtocolHandler(params) {
            return (params.Options & OpenDocumentOptions.SkipProtocolHandler) == OpenDocumentOptions.SkipProtocolHandler || IsInternetExplorer8();
        }
        function ShouldUseProtocolHandler(params) {
            if (SkipProtocolHandler(params))
                return false;
            if (SupportsUriNavigation())
                return true;
            return !CanDetermineOfficeVersion() || OfficeVersionInstalled() >= 15;
        }
        function ShouldUseNpapiPlugin() {
            return IsSupportedBrowserForMacPlugin() || SupportsOpenInClientNpapiPlugin();
        }
        function IsReadMode(mode) {
            return mode === OpenDocumentMode.ReadOnly || mode === OpenDocumentMode.ReadWrite;
        }
        function OpenDocumentWithO15ActiveX(documentUrl, mode, options, progId) {
            try {
                var ax = new ActiveXObject(O15ProgId);

                if (ax) {
                    return ax.ViewDocument3(window.self, documentUrl, mode, progId);
                }
            }
            catch (e) { }
            return false;
        }
        function OpenDocumentWithActiveX(documentUrl, mode, options, progId) {
            var ax;
            var success;

            try {
                ax = new ActiveXObject(O14ProgId);
                if (ax) {
                    success = ax.ViewDocument3(window.self, documentUrl, mode, progId);
                    if (success) {
                        ExecuteSuccessCallback(OpenDocumentControl.O14ActiveX);
                        return OpenDocumentFailureType.None;
                    }
                    else {
                        return OpenDocumentFailureType.Failed;
                    }
                }
            }
            catch (e) { }
            if (OpenDocumentOptions.O14Only === (options & OpenDocumentOptions.O14Only)) {
                return OpenDocumentFailureType.Unattempted;
            }
            try {
                ax = new ActiveXObject(O12ProgId);
                if (ax) {
                    success = ax.ViewDocument3(window.self, documentUrl, mode, progId);
                    if (success) {
                        ExecuteSuccessCallback(OpenDocumentControl.O12ActiveX);
                        return OpenDocumentFailureType.None;
                    }
                    else {
                        return OpenDocumentFailureType.Failed;
                    }
                }
            }
            catch (e) { }
            if (OpenDocumentOptions.O12UpOnly === (options & OpenDocumentOptions.O12UpOnly)) {
                return OpenDocumentFailureType.Unattempted;
            }
            try {
                ax = new ActiveXObject(O11ProgId);
                if (ax) {
                    if (IsReadMode(mode))
                        success = ax.ViewDocument2(window.self, documentUrl, progId);
                    else
                        success = ax.EditDocument2(window.self, documentUrl, progId);
                    if (success) {
                        ExecuteSuccessCallback(OpenDocumentControl.O11ActiveX);
                        return OpenDocumentFailureType.None;
                    }
                    else {
                        return OpenDocumentFailureType.Failed;
                    }
                }
            }
            catch (e) { }
            return OpenDocumentFailureType.Unattempted;
        }
        function OpenDocumentWithPlugin(documentUrl, mode, progId) {
            var plugin = GetPlugin();

            if (plugin == null) {
                return OpenDocumentFailureType.Unattempted;
            }
            var success = false;

            try {
                success = plugin.ViewDocument3(window.self, documentUrl, mode, progId);
            }
            catch (e) { }
            if (!success) {
                try {
                    if (IsReadMode(mode))
                        success = plugin.ViewDocument2(window.self, documentUrl, progId);
                    else
                        success = plugin.EditDocument2(window.self, documentUrl, progId);
                }
                catch (e) { }
            }
            if (success) {
                ExecuteSuccessCallback(OpenDocumentControl.NpapiPlugin);
                return OpenDocumentFailureType.None;
            }
            else {
                return OpenDocumentFailureType.Failed;
            }
        }
        function OpenDocumentWithProtocolHandler(app, documentUrl, mode, omitProtocolHandlerParameters) {
            var protocolHandler = ProtocolHandlerFromApplication(app);

            if (protocolHandler == null) {
                ExecuteFailureCallback(OpenDocumentFailureType.Unattempted);
                return false;
            }
            if (app == OfficeApplication.Visio && mode == OpenDocumentMode.ReadWrite) {
                mode = OpenDocumentMode.WriteOnly;
            }
            var protocolHandlerUrl = protocolHandler;

            omitProtocolHandlerParameters = omitProtocolHandlerParameters || IsWindowsPhone() && !IsWindowsPhone8Up();
            if (!omitProtocolHandlerParameters) {
                if (IsReadMode(mode))
                    protocolHandlerUrl += ViewProtocolHandlerCommand;
                else
                    protocolHandlerUrl += EditProtocolHandlerCommand;
                protocolHandlerUrl += UrlProtocolHandlerParameter;
            }
            protocolHandlerUrl += documentUrl;
            LaunchProtocolHandlerUrl(protocolHandlerUrl, OnProtocolHandlerSuccess, OnProtocolHandlerFailure);
            return true;
        }
        function OnProtocolHandlerSuccess() {
            ExecuteSuccessCallback(OpenDocumentControl.ProtocolHandler);
        }
        function OnProtocolHandlerFailure() {
            _params.Options |= OpenDocumentOptions.SkipProtocolHandler;
            EditDocumentInClient(_params, _successCallback, _failureCallback);
        }
        function CanUseRoamingControl() {
            if (SupportsUriNavigation()) {
                return true;
            }
            else if (IsChrome()) {
                if (typeof navigator.plugins.refresh != 'undefined')
                    navigator.plugins.refresh(false);
                return Boolean(navigator.mimeTypes[RoamingNPAPIMimeType]);
            }
            else if (IsFirefox()) {
                var dataElement = document.createElement("RoamingExtensionElement");

                document.documentElement.appendChild(dataElement);
                var evt = document.createEvent("Events");

                evt.initEvent("RoamingOfficeInstalled", true, false);
                dataElement.dispatchEvent(evt);
                return Boolean(dataElement.getAttribute("installed"));
            }
            else if (IsInternetExplorer()) {
                try {
                    var control = new ActiveXObject(RoamingActiveXProgId);

                    return control.HrExists();
                }
                catch (e) { }
            }
            return false;
        }
        function LaunchRoamingApps(documentUrl, launcher, app, appParameters, onSuccessCallback, onFailureCallback) {
            MSOJS.ClientUtils.LaunchRoamingApps2(documentUrl, launcher, ApplicationExeFromApp(app), appParameters, "x86", X86RootUrl, onSuccessCallback, onFailureCallback);
        }
        function LaunchRoamingApps2(documentUrl, launcher, appExe, appParameters, platform, rootUrl, onSuccessCallback, onFailureCallback) {
            var argument = "";

            if (appParameters != null)
                argument += " " + appParameters;
            if (documentUrl != null)
                argument += " \"" + documentUrl + "\"";
            if (SupportsUriNavigation() || IsChrome()) {
                _roamingSuccessCallback = onSuccessCallback;
                _roamingFailureCallback = onFailureCallback;
                var protocolHandlerUrl = RoamingProtocol;

                protocolHandlerUrl += ' "' + rootUrl + '"';
                protocolHandlerUrl += ' "' + appExe + '"';
                protocolHandlerUrl += ' "ROAMING"';
                protocolHandlerUrl += ' "' + launcher + '"';
                protocolHandlerUrl += ' "' + platform + '"';
                protocolHandlerUrl += ' ' + argument;
                LaunchProtocolHandlerUrl(protocolHandlerUrl, OnRoamingProtocolHandlerSuccess, OnRoamingProtocolHandlerFailure);
            }
            else if (IsFirefox()) {
                var dataElement = document.createElement("RoamingExtensionElement");

                dataElement.setAttribute("cabUrl", rootUrl);
                dataElement.setAttribute("app", appExe);
                dataElement.setAttribute("licensingEntitlements", launcher);
                dataElement.setAttribute("platform", platform);
                dataElement.setAttribute("args", argument);
                document.documentElement.appendChild(dataElement);
                var evt = document.createEvent("Events");

                evt.initEvent("RoamingOfficeLaunch", true, false);
                dataElement.dispatchEvent(evt);
                if (onSuccessCallback != null)
                    onSuccessCallback(OpenDocumentControl.RoamingFFExtension);
            }
            else if (IsInternetExplorer()) {
                var control = new ActiveXObject(RoamingActiveXProgId);

                if (control != null) {
                    try {
                        control.HrConfigureSingle(rootUrl, appExe, launcher, platform, argument);
                        if (onSuccessCallback != null)
                            onSuccessCallback(OpenDocumentControl.RoamingActiveX);
                    }
                    catch (e) { }
                }
            }
            else {
                if (onFailureCallback != null)
                    onFailureCallback(OpenDocumentFailureType.Failed);
            }
        }
        function OnRoamingProtocolHandlerSuccess() {
            if (_roamingSuccessCallback != null)
                _roamingSuccessCallback(OpenDocumentControl.RoamingProtocolHandler);
        }
        function OnRoamingProtocolHandlerFailure() {
            if (_roamingFailureCallback != null)
                _roamingFailureCallback(OpenDocumentFailureType.ControlNeeded);
        }
        function OpenDocumentWithRoamingApps(params) {
            if (typeof params.RoamingAppsLauncher == "undefined" || params.RoamingAppsLauncher == null) {
                ExecuteFailureCallback(OpenDocumentFailureType.Unattempted);
                return;
            }
            if (typeof params.RoamingBitsUrl == "undefined" || params.RoamingBitsUrl == null) {
                MSOJS.ClientUtils.LaunchRoamingApps(params.DocumentUrl, params.RoamingAppsLauncher, params.Application, params.ApplicationParameters, _successCallback, _failureCallback);
            }
            else {
                MSOJS.ClientUtils.LaunchRoamingApps2(params.DocumentUrl, params.RoamingAppsLauncher, params.RoamingApplicationExe, params.ApplicationParameters, params.RoamingPlatform, params.RoamingBitsUrl, _successCallback, _failureCallback);
            }
        }
        function GetPlugin() {
            var plugin = document.getElementById(PluginDomElementId);

            if (plugin == null) {
                var pluginMimeType = NpapiPluginMimeType;

                if (IsMac() && IsSafari3Up() && IsPluginInstalled(MacWebKitPluginMimeType)) {
                    pluginMimeType = MacWebKitPluginMimeType;
                }
                if (!IsPluginInstalled(pluginMimeType)) {
                    if (IsMac() && IsPluginInstalled(MacOfficeLivePluginMimeType)) {
                        pluginMimeType = MacOfficeLivePluginMimeType;
                    }
                    else {
                        return null;
                    }
                }
                var pluginNode = document.createElement('object');

                pluginNode.id = PluginDomElementId;
                pluginNode.type = pluginMimeType;
                pluginNode.style.width = "0px";
                pluginNode.style.height = "0px";
                pluginNode.style.setProperty('visibility', 'hidden', '');
                document.body.appendChild(pluginNode);
                plugin = document.getElementById(PluginDomElementId);
            }
            return plugin;
        }
        function IsPluginInstalled(pluginMimeType) {
            var mimeTypes = window.navigator.mimeTypes;

            if (mimeTypes == null) {
                return false;
            }
            var plugin = mimeTypes[pluginMimeType];

            if (!plugin) {
                return false;
            }
            if (!plugin.enabledPlugin) {
                return false;
            }
            return true;
        }
        function IsActiveXInstalled(progId) {
            try {
                var ax = new ActiveXObject(progId);

                if (ax != null) {
                    return true;
                }
            }
            catch (e) { }
            return false;
        }
        function SaveCredentials() {
            try {
                var wlsia = new ActiveXObject(WLSIAProgId);

                if (wlsia != null) {
                    wlsia.SaveSSOCreds();
                }
            }
            catch (e) { }
        }
        function ProgIdFromApplication(app) {
            switch (app) {
            case OfficeApplication.OneNote:
                return OneNoteProgId;
            default:
                return "";
            }
        }
        function ProtocolHandlerFromApplication(app) {
            if (app != OfficeApplication.OneNote && IsWindowsPhone() && !IsWindowsPhone8Up()) {
                return "office:";
            }
            switch (app) {
            case OfficeApplication.Excel:
                return "ms-excel:";
            case OfficeApplication.OneNote:
                return "onenote:";
            case OfficeApplication.PowerPoint:
                return "ms-powerpoint:";
            case OfficeApplication.Visio:
                return "ms-visio:";
            case OfficeApplication.Word:
                return "ms-word:";
            case OfficeApplication.Project:
                return "ms-project:";
            case OfficeApplication.Publisher:
                return "ms-publisher:";
            case OfficeApplication.Infopath:
                return "ms-infopath:";
            case OfficeApplication.Access:
                return "ms-access:";
            default:
                return "";
            }
        }
        function ApplicationExeFromApp(app) {
            switch (app) {
            case OfficeApplication.Excel:
                return "root\\office15\\excel.exe";
            case OfficeApplication.PowerPoint:
                return "root\\office15\\powerpnt.exe";
            case OfficeApplication.Visio:
                return "root\\office15\\visio.exe";
            case OfficeApplication.Word:
                return "root\\office15\\winword.exe";
            case OfficeApplication.Project:
                return "root\\office15\\winproj.exe";
            case OfficeApplication.Publisher:
                return "root\\office15\\mspub.exe";
            case OfficeApplication.Infopath:
                return "root\\office15\\infopath.exe";
            case OfficeApplication.Access:
                return "root\\office15\\msaccess.exe";
            default:
                return null;
            }
        }
        function EditDocumentInClientParams() {
            this.DocumentUrl = "";
            this.Mode = 0;
            this.Options = 0;
            this.Application = OfficeApplication.Unknown;
            this.CouldUseRoamingApps = false;
            this.RoamingAppsLauncher = "";
            this.ContinueIfLauncherIsNull = false;
            this.ApplicationParameters = "";
            this.RoamingPlatform = "";
            this.RoamingApplicationExe = "";
            this.RoamingBitsUrl = "";
        }
        ;
        function EditDocumentInClient(params, successCallback, failureCallback) {
            _params = params;
            _successCallback = successCallback;
            _failureCallback = failureCallback;
            if (!params.DocumentUrl) {
                ExecuteFailureCallback(OpenDocumentFailureType.Unattempted);
                return;
            }
            var decodedDocumentUrl = decodeURIComponent(params.DocumentUrl);

            if (params.Mode === OpenDocumentMode.ReadWrite && OpenDocumentOptions.CheckoutRequired === (params.Options & OpenDocumentOptions.CheckoutRequired)) {
                params.Mode = OpenDocumentMode.ForceCheckout;
            }
            if (OpenDocumentOptions.HostIsEditOnly === (params.Options & OpenDocumentOptions.HostIsEditOnly)) {
                params.Mode = OpenDocumentMode.WriteOnly;
            }
            if (ShouldUseProtocolHandler(params)) {
                OpenDocumentWithProtocolHandler(params.Application, params.DocumentUrl, params.Mode, params.Application == OfficeApplication.OneNote);
                return;
            }
            else if (IsInternetExplorer8()) {
                if (OpenDocumentWithO15ActiveX(decodedDocumentUrl, params.Mode, params.Options, ProgIdFromApplication(params.Application))) {
                    ExecuteSuccessCallback(OpenDocumentControl.O15ActiveX);
                    return;
                }
            }
            if (params.CouldUseRoamingApps && SupportsRoamingApps() && params.Application != OfficeApplication.OneNote) {
                if (!MSOJS.ClientUtils.CanUseRoamingControl()) {
                    ExecuteFailureCallback(OpenDocumentFailureType.ControlNeeded);
                    return;
                }
                if (params.RoamingAppsLauncher) {
                    OpenDocumentWithRoamingApps(params);
                    return;
                }
                if (!params.ContinueIfLauncherIsNull) {
                    ExecuteFailureCallback(OpenDocumentFailureType.LauncherNeeded);
                    return;
                }
            }
            var failureType;

            if (ShouldUseNpapiPlugin()) {
                failureType = OpenDocumentWithPlugin(decodedDocumentUrl, params.Mode, ProgIdFromApplication(params.Application));
            }
            else {
                SaveCredentials();
                failureType = OpenDocumentWithActiveX(decodedDocumentUrl, params.Mode, params.Options, ProgIdFromApplication(params.Application));
            }
            if (failureType != OpenDocumentFailureType.None) {
                if (OpenDocumentOptions.NoProtocolHandlerFallback != (params.Options & OpenDocumentOptions.NoProtocolHandlerFallback) && !SkipProtocolHandler(params) && !IsInternetExplorer()) {
                    OpenDocumentWithProtocolHandler(params.Application, params.DocumentUrl, params.Mode, params.Application == OfficeApplication.OneNote);
                    return;
                }
                ExecuteFailureCallback(failureType);
            }
        }
        function ExecuteSuccessCallback(controlUsed) {
            if (_successCallback != null)
                _successCallback(controlUsed);
        }
        function ExecuteFailureCallback(failureType) {
            if (_failureCallback != null)
                _failureCallback(failureType);
        }
        function CanDetermineOfficeVersion() {
            return ShouldUseNpapiPlugin() || SupportsActiveX() || IsChrome();
        }
        function OfficeVersionInstalled() {
            var officeVersion = 0;

            if (ShouldUseNpapiPlugin() || IsChrome()) {
                var plugin = GetPlugin();

                try {
                    if (plugin != null) {
                        officeVersion = plugin.GetOfficeVersion();
                    }
                }
                catch (e) { }
            }
            else {
                if (IsActiveXInstalled(O15ProgId))
                    officeVersion = 15;
                else if (IsActiveXInstalled(O14ProgId))
                    officeVersion = 14;
                else if (IsActiveXInstalled(O12ProgId))
                    officeVersion = 12;
                else if (IsActiveXInstalled(O11ProgId))
                    officeVersion = 11;
            }
            return officeVersion;
        }
        function IsO14MacPluginInstalled() {
            return IsMac() && (IsPluginInstalled(NpapiPluginMimeType) || IsPluginInstalled(MacWebKitPluginMimeType));
        }
        function OfferOfficeInDialog() {
            return IsWindows() && OfficeVersionInstalled() <= 11;
        }
        function OfferOfficeNoIntrusive() {
            return IsWindows() && OfficeVersionInstalled() < 15;
        }
        function OfferMacOffice() {
            return IsMac() && !IsPpcMac() && !IsO14MacPluginInstalled();
        }
        function InstallRoamingControl() {
            if (IsFirefox()) {
                window.InstallTrigger.install({
                    "Office": {
                        URL: FirefoxExtensionUrl
                    }
                });
            }
            else {
                NavigateToUrlInFrame(ControlInstallerUrl, null, null);
            }
        }
        return {
            OpenDocumentMode: OpenDocumentMode,
            OpenDocumentOptions: OpenDocumentOptions,
            OpenDocumentFailureType: OpenDocumentFailureType,
            OpenDocumentControl: OpenDocumentControl,
            OfficeApplication: OfficeApplication,
            EditDocumentInClient: EditDocumentInClient,
            EditDocumentInClientParams: EditDocumentInClientParams,
            OfficeVersionInstalled: OfficeVersionInstalled,
            IsO14MacPluginInstalled: IsO14MacPluginInstalled,
            OfferOfficeInDialog: OfferOfficeInDialog,
            OfferOfficeNoIntrusive: OfferOfficeNoIntrusive,
            OfferMacOffice: OfferMacOffice,
            InstallRoamingControl: InstallRoamingControl,
            CanUseRoamingControl: CanUseRoamingControl,
            InitUrls: InitUrls,
            LaunchRoamingApps: LaunchRoamingApps,
            LaunchRoamingApps2: LaunchRoamingApps2,
            SupportsProtocolHandlerDetection: SupportsProtocolHandlerDetection
        };
    })();
    SPRoamingAppLauncher.prototype = {
        EntitlementBitmap: 0,
        HasEntitlements: false,
        AppLauncherToken: null,
        RoamingAppsServiceUrl: null,
        ExtensionInstallPollInterval: 500,
        AppLaunchRetryInterval: 1000,
        AppTokenExpirationTime: 5 * 60 * 1000,
        LastAppTokenTime: 0,
        LastAppToken: null,
        LastAppId: 0,
        InstallingExtension: false
    };
    SPRoamingAppLauncher.prototype.InitializeRoamingApplicationLaunch = function() {
        this.ShowCheckingEntitlementText();
        var _this = this;
        var req = new XMLHttpRequest();

        req.open("POST", this.RoamingAppsServiceUrl + "?cmd=GetEntitlement", true);
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                var data = req.responseText;

                _this.ProcessRoamingData(data);
            }
        };
        req.send(null);
    };
    SPRoamingAppLauncher.prototype.ProcessRoamingData = function(data) {
        if (this.ParseEntitlementData(data)) {
            if (this.HasEntitlements) {
                var queryApp = GetUrlKeyValue("app");
                var queryAppId = Boolean(queryApp) ? GetAppIdFromAppQueryName(queryApp) : MSOJS.ClientUtils.OfficeApplication.Unknown;

                if (queryAppId != MSOJS.ClientUtils.OfficeApplication.Unknown) {
                    var queryDoc = GetUrlKeyValue("doc");

                    queryDoc = Boolean(queryDoc) ? queryDoc : "";
                    this.LaunchApplication(queryAppId, queryDoc);
                }
                else {
                    this.ShowRoamingAppLaunchLinks();
                }
            }
            else {
                this.ShowNoSubscriptionText();
            }
        }
        else {
            this.ShowNoSubscriptionText();
        }
    };
    SPRoamingAppLauncher.prototype.ParseEntitlementData = function(responseText) {
        var data = null;

        try {
            data = JSON.parse(responseText);
        }
        catch (e) { }
        if (data != null) {
            this.EntitlementBitmap = parseInt(data.EntitlementBitmap);
            this.HasEntitlements = this.EntitlementBitmap != 0;
            if (this.HasEntitlements) {
                MSOJS.ClientUtils.InitUrls(data.InstallUrl, data.ProtocolHandler, data.FirefoxExtensionUrl);
            }
            return true;
        }
        else {
            return false;
        }
    };
    SPRoamingAppLauncher.prototype.GetRoamingAppLauncherToken = function(appId, callback) {
        if (this.LastAppId != 0 && this.LastAppTokenTime != 0 && appId == this.LastAppId && (new Date()).getTime() - this.LastAppTokenTime < this.AppTokenExpirationTime) {
            callback(this.LastAppToken);
        }
        else {
            var _this = this;
            var appLicBit = GetLicAppBitsFromApplication(appId);
            var req = new XMLHttpRequest();

            req.open("POST", this.RoamingAppsServiceUrl + "?cmd=GetAppToken&appId=" + String(appLicBit), true);
            req.onreadystatechange = function() {
                if (req.readyState == 4) {
                    var data = "";

                    try {
                        data = JSON.parse(req.responseText);
                    }
                    catch (e) { }
                    _this.LastAppTokenTime = (new Date()).getTime();
                    _this.LastAppToken = data;
                    _this.LastAppId = appId;
                    callback(data);
                }
            };
            req.send(null);
        }
    };
    SPRoamingAppLauncher.prototype.ShowRoamingAppLaunchLinks = function() {
        this.EmptyStatusArea();
        var appIconContainer = document.getElementById("officeAppIcons");

        for (var app in MSOJS.ClientUtils.OfficeApplication) {
            var appId = MSOJS.ClientUtils.OfficeApplication[app];

            if (this.IsUserLicensedForApp(appId)) {
                var appOuterClass = "ms-roamingapps-iconouter-" + String(appId);
                var appInnerClass = "ms-roamingapps-iconinner-" + String(appId);
                var appLaunchDiv = document.createElement("div");

                appLaunchDiv.className = "ms-roamingapps-appicon";
                appLaunchDiv.id = "appLauncher_" + String(appId);
                appLaunchDiv.innerHTML = "<a href=\"#\" onclick=\"g_RoamingAppLauncher.LaunchApplication(" + String(appId) + ")\">" + "<span class=\"" + appOuterClass + "\">" + "<img class=\"" + appInnerClass + "\" src=\"" + "/_layouts/15/images/sproaming.png?rev=23" + "\"/>" + "</span><div class=\"ms-textLarge\">" + GetAppNameFromApplication(appId) + "</div>" + "</a>";
                appIconContainer.appendChild(appLaunchDiv);
            }
        }
    };
    SPRoamingAppLauncher.prototype.LaunchApplication = function(appId, documentUrl, isRetry, isDelayLaunch) {
        if (this.IsUserLicensedForApp(appId)) {
            this.ShowAppLaunchingText();
            var _this = this;

            this.GetRoamingAppLauncherToken(appId, function(appLauncherData) {
                if (appLauncherData != null && appLauncherData != "") {
                    var extensionData = appLauncherData.extensionData;
                    var appLauncherToken = appLauncherData.licensing;
                    var rootUrl = appLauncherData.offerVersion;
                    var appExe = appLauncherData.officeApplication;
                    var platform = appLauncherData.platform;
                    var __this = _this;

                    _this.EnsureRoamingExtensionAndCallback(function() {
                        documentUrl = Boolean(documentUrl) ? documentUrl : "";
                        var launchParams = {
                            docUrl: documentUrl,
                            appId: appId
                        };
                        var launchApp = function() {
                            MSOJS.ClientUtils.LaunchRoamingApps2(documentUrl, appLauncherToken, appExe, null, platform, rootUrl, function() {
                                __this.SuccessCallback(__this);
                            }, function(failureType) {
                                __this.FailureCallback(launchParams, failureType);
                            });
                        };

                        if (Boolean(isDelayLaunch)) {
                            setTimeout(launchApp, __this.AppLaunchRetryInterval);
                        }
                        else {
                            launchApp();
                        }
                    }, Boolean(isRetry));
                }
                else {
                    _this.ShowNoSubscriptionText();
                }
            });
        }
    };
    SPRoamingAppLauncher.prototype.SuccessCallback = function(context) {
        this.InstallingExtension = false;
        var dlgWnd = _dlgWndTop();

        while (dlgWnd.g_childDialog != null) {
            commonModalDialogClose(0, null);
        }
        context.ShowRoamingAppLaunchLinks();
    };
    SPRoamingAppLauncher.prototype.FailureCallback = function(launchParams, failureType) {
        if (failureType == MSOJS.ClientUtils.OpenDocumentFailureType.ControlNeeded) {
            if (launchParams != null) {
                this.LaunchApplication(launchParams.appId, launchParams.docUrl, !this.InstallingExtension, true);
            }
        }
    };
    SPRoamingAppLauncher.prototype.IsUserLicensedForApp = function(appId) {
        var appLicBit = GetLicAppBitsFromApplication(appId);

        return (this.EntitlementBitmap & appLicBit) != 0;
    };
    SPRoamingAppLauncher.prototype.EnsureRoamingExtensionAndCallback = function(callback, forceInstallExtension) {
        var _this = this;

        if (this.IsRoamingExtensionInstalled() && !forceInstallExtension) {
            callback();
        }
        else {
            this.InstallRoamingExtension();
            this.InstallingExtension = true;
            setTimeout(function() {
                _this.WaitUntilExtensionInstalledAndCallback(callback);
            }, this.ExtensionInstallPollInterval);
        }
    };
    SPRoamingAppLauncher.prototype.WaitUntilExtensionInstalledAndCallback = function(callback) {
        if (this.IsRoamingExtensionInstalled()) {
            callback();
        }
        else {
            var _this = this;

            setTimeout(function() {
                _this.WaitUntilExtensionInstalledAndCallback(callback);
            }, this.ExtensionInstallPollInterval);
        }
    };
    SPRoamingAppLauncher.prototype.InstallRoamingExtension = function() {
        this.ShowInstallExtensionDialog();
        MSOJS.ClientUtils.InstallRoamingControl();
    };
    SPRoamingAppLauncher.prototype.IsRoamingExtensionInstalled = function() {
        return MSOJS.ClientUtils.CanUseRoamingControl();
    };
    SPRoamingAppLauncher.prototype.ShowCheckingEntitlementText = function() {
        var statusDiv = document.getElementById("roamingAppStatusArea");

        statusDiv.innerHTML = Strings.STS.L_RoamingOffice_EntitlementCheck;
        this.VerticallyCenterAlignText(statusDiv);
    };
    SPRoamingAppLauncher.prototype.ShowNoSubscriptionText = function() {
        var statusDiv = document.getElementById("roamingAppStatusArea");

        statusDiv.innerHTML = Strings.STS.L_RoamingOffice_NoSubscription;
        this.VerticallyCenterAlignText(statusDiv);
    };
    SPRoamingAppLauncher.prototype.ShowAppLaunchingText = function() {
        this.EmptyAppIconContainer();
        var statusDiv = document.getElementById("roamingAppStatusArea");

        statusDiv.innerHTML = Strings.STS.L_RoamingOffice_LaunchingApp;
        this.VerticallyCenterAlignText(statusDiv);
    };
    SPRoamingAppLauncher.prototype.ShowInstallExtensionDialog = function() {
        var divElem = document.createElement("DIV");

        divElem.innerHTML = Strings.STS.L_RoamingOffice_InstallExtension;
        var dopt = {
            html: divElem,
            title: Strings.STS.L_RoamingOffice_InstallExtensionDialogTitle
        };

        EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dopt);
    };
    SPRoamingAppLauncher.prototype.EmptyStatusArea = function() {
        var statusDiv = document.getElementById("roamingAppStatusArea");

        statusDiv.innerHTML = "";
        statusDiv.style.paddingTop = "0px";
    };
    SPRoamingAppLauncher.prototype.EmptyAppIconContainer = function() {
        var appIconContainer = document.getElementById("officeAppIcons");

        appIconContainer.innerHTML = "";
    };
    SPRoamingAppLauncher.prototype.VerticallyCenterAlignText = function(element) {
        element.style.paddingTop = "0px";
        var paddingTop = (element.parentNode.clientHeight - element.clientHeight) / 2;

        element.style.paddingTop = String(paddingTop) + "px";
    };
    g_RoamingAppLauncher = new SPRoamingAppLauncher();
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("roamingapps.js");
    }
}
var MSOJS;

function SPRoamingAppLauncher() {
    this.EntitlementBitmap = 0;
    this.HasEntitlements = false;
    this.AppLauncherToken = null;
    this.LastAppTokenTime = 0;
    this.LastAppToken = null;
    this.LastAppId = 0;
    this.InstallingExtension = false;
}
function GetAppNameFromApplication(app) {
    switch (app) {
    case MSOJS.ClientUtils.OfficeApplication.Excel:
        return Strings.STS.L_RoamingOffice_AppNameExcel;
    case MSOJS.ClientUtils.OfficeApplication.OneNote:
        return Strings.STS.L_RoamingOffice_AppNameOneNote;
    case MSOJS.ClientUtils.OfficeApplication.PowerPoint:
        return Strings.STS.L_RoamingOffice_AppNamePowerpoint;
    case MSOJS.ClientUtils.OfficeApplication.Visio:
        return Strings.STS.L_RoamingOffice_AppNameVisio;
    case MSOJS.ClientUtils.OfficeApplication.Word:
        return Strings.STS.L_RoamingOffice_AppNameWord;
    case MSOJS.ClientUtils.OfficeApplication.Project:
        return Strings.STS.L_RoamingOffice_AppNameProject;
    case MSOJS.ClientUtils.OfficeApplication.Publisher:
        return Strings.STS.L_RoamingOffice_AppNamePublisher;
    case MSOJS.ClientUtils.OfficeApplication.Infopath:
        return Strings.STS.L_RoamingOffice_AppNameInfopath;
    case MSOJS.ClientUtils.OfficeApplication.Access:
        return Strings.STS.L_RoamingOffice_AppNameAccess;
    default:
        return "";
    }
}
function GetLicAppBitsFromApplication(app) {
    switch (app) {
    case MSOJS.ClientUtils.OfficeApplication.Excel:
        return 0x00000002;
    case MSOJS.ClientUtils.OfficeApplication.OneNote:
        return 0x00000008;
    case MSOJS.ClientUtils.OfficeApplication.PowerPoint:
        return 0x00000020;
    case MSOJS.ClientUtils.OfficeApplication.Visio:
        return 0x00000400;
    case MSOJS.ClientUtils.OfficeApplication.Word:
        return 0x00000100;
    case MSOJS.ClientUtils.OfficeApplication.Project:
        return 0x00000040;
    case MSOJS.ClientUtils.OfficeApplication.Publisher:
        return 0x00000080;
    case MSOJS.ClientUtils.OfficeApplication.Infopath:
        return 0x00000200;
    case MSOJS.ClientUtils.OfficeApplication.Access:
        return 0x00000001;
    default:
        return 0;
    }
}
function GetAppIdFromAppQueryName(appName) {
    appName = appName.toLowerCase();
    switch (appName) {
    case "excel":
        return MSOJS.ClientUtils.OfficeApplication.Excel;
    case "onenote":
        return MSOJS.ClientUtils.OfficeApplication.OneNote;
    case "powerpoint":
        return MSOJS.ClientUtils.OfficeApplication.PowerPoint;
    case "visio":
        return MSOJS.ClientUtils.OfficeApplication.Visio;
    case "word":
        return MSOJS.ClientUtils.OfficeApplication.Word;
    case "proj":
        return MSOJS.ClientUtils.OfficeApplication.Project;
    case "publisher":
        return MSOJS.ClientUtils.OfficeApplication.Publisher;
    case "infopath":
        return MSOJS.ClientUtils.OfficeApplication.Infopath;
    case "access":
        return MSOJS.ClientUtils.OfficeApplication.Access;
    default:
        return MSOJS.ClientUtils.OfficeApplication.Unknown;
    }
}
var g_RoamingAppLauncher;

function GoBackToSource() {
    var srcUrl = GetSource();

    if (srcUrl != null && srcUrl != "") {
        srcUrl = unescapeProperly(srcUrl);
        STSNavigate(srcUrl);
    }
}
$_global_roamingapps();
