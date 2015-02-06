function $_global_offline(){g_OfflineClient=null;typeof Sys!="undefined"&&Sys!=null&&Sys.Application!=null&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs=="function"&&NotifyScriptLoadedAndExecuteWaitingJobs("offline.js")}function ULSNRC(){var a={};a.ULSTeamName="Microsoft SharePoint Foundation";a.ULSFileName="offline.commentedjs";return a}var g_OfflineClient;function TakeOfflineDisabled(a,c,d,b){if(InitOfflineClient())return!g_OfflineClient.IsOfflineAllowed(a,c,d,b);var e=browseris.win&&IsScopeValidForOffline(a)&&IsSiteTemplateValidForOffline(a,c)&&IsListValidForOffline(a,d,b);return!e?true:typeof navigator.msProtocols=="object"?!navigator.msProtocols.grvopen:false}function InitOfflineClient(){a:;try{if(g_OfflineClient==null)if(document.cookie.indexOf("OfflineClientInstalled")==-1){if(IsSupportedMacBrowser())g_OfflineClient=CreateMacPlugin();else g_OfflineClient=new ActiveXObject("SharePoint.OfflineClient");document.cookie="OfflineClientInstalled=1"}else if(GetCookie("OfflineClientInstalled")=="1")if(IsSupportedMacBrowser())g_OfflineClient=CreateMacPlugin();else g_OfflineClient=new ActiveXObject("SharePoint.OfflineClient");else return false;if(g_OfflineClient!=null&&typeof g_OfflineClient.IsOfflineAllowed!="undefined"&&typeof g_OfflineClient.TakeOffline!="undefined")return true}catch(a){document.cookie="OfflineClientInstalled=0";g_OfflineClient=null}return false}function IsScopeValidForOffline(a){switch(a){case 1:case 2:case 3:return true;default:return false}}function IsSiteTemplateValidForOffline(b,a){if(b!==1)return true;switch(a){case 2:case 3:case 4:case 9:case 15:case 54:return false;default:return true}}function IsListValidForOffline(c,b,a){if(c===1)return true;switch(a){case 100:case 101:case 103:case 104:case 105:case 107:case 108:case 109:case 120:case 150:case 499:case 851:case 1100:case 1300:case 2002:case 2003:return true}switch(b){case 0:case 1:case 3:return true}return false}function TakeOfflineToClientReal(f,j,g,i,e,d,c){try{if(TakeOfflineDisabled(f,j,i,e))return;if(InitOfflineClient()){g_OfflineClient.TakeOffline(f,j,g,i,e,d,c);return}if(!IsValidCommandForOffline(f,g,d,c))throw"ArgumentException: Incorrect parameters used to initiate offline sync.";var b=[];b.push("/");b.push(StringToASCIIAlnum(g));if(d!=null&&d!=""){b.push(StringToASCIIAlnum(d));e!=null&&b.push(StringToASCIIAlnum(e.toString()));c!=null&&c!=""&&b.push(StringToASCIIAlnum(c))}var l=new URI(b.join("/"));l.setScheme("grvopen");var h=l.getString()+"?"+GetScopeName(f),k="SPFolderSyncFrame",a=document.getElementById(k);if(a==null){a=document.createElement("iframe");a.id=k;a.className="ObjectInDialog";a.style.visibility="hidden";a.src=h;document.body.appendChild(a)}else a.src=h}catch(m){alert(m.message)}}function IsValidCommandForOffline(g,f,e,d){var c=f===null||f==="",a=e===null||e==="",b=d===null||d==="";switch(g){case 1:return!c&&a&&b;case 2:return!c&&!a&&b;case 3:return!c&&!a&&!b;default:return false}}function GetScopeName(a){switch(a){case 1:return"OPENSITE";case 2:return"OPENLIST";case 3:return"OPENFOLDER";default:throw"ArgumentException: Incorrect offline scope value";}}function StringToASCIIAlnum(f){for(var c=97,a="",d=0;d<f.length;d++){var e=f[d];if(IsWAsciiAlnum(e))a+=e;else{a+="_";var b=e.charCodeAt(0);if(b<=99)a+=b.toString();else{a+=String.fromCharCode(c+Math.floor(b/4096));a+=String.fromCharCode(c+Math.floor(b/256)%16);a+=String.fromCharCode(c+Math.floor(b/16)%16);a+=String.fromCharCode(c+b%16)}}}return a}function IsWAsciiAlnum(a){return a>="a"&&a<="z"||a>="A"&&a<="Z"||a>="0"&&a<="9"}$_global_offline();