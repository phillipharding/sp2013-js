function $_global_activexwinprojlauncher() {
    ActiveXWinProjLauncher = function() {
        var ActiveXWinProjControl = null;
        var TaskControlIsValid = false;

        Init();
        this.IsControlValid = function() {
            return TaskControlIsValid;
        };
        this.GetControl = function() {
            return ActiveXWinProjControl;
        };
        function Init() {
            if (ActiveXWinProjControl != null) {
                return;
            }
            try {
                ActiveXWinProjControl = new ActiveXObject("WinProj.Activator");
            }
            catch (e) {
                ActiveXWinProjControl = null;
                return;
            }
            ActiveXWinProjControl.ServerURL = "";
            ActiveXWinProjControl.BasePath = "";
            ActiveXWinProjControl.IsNTRes = window['g_fIsNTLogon'] != null ? 1 : window['g_fIsNTLogon'];
            ActiveXWinProjControl.ResName = window['g_sUserName'] != null ? "" : window['g_sUserName'];
            ActiveXWinProjControl.IsOffline = 1;
            if (!ActiveXWinProjControl['IsMSProjectAvailable']) {
                return;
            }
            if (ActiveXWinProjControl['IsMSProjectOffline']) {
                return;
            }
            TaskControlIsValid = true;
        }
    };
    NotifyScriptLoadedAndExecuteWaitingJobs("activexwinprojlauncher.js");
}
var ActiveXWinProjLauncher;

$_global_activexwinprojlauncher();
