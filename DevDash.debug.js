function $_global_devdash() {
    CSSUtil = {
        AddClass: function(el, className) {
            el.className += ' ' + className;
        },
        RemoveClass: function(el, className) {
            el.className = el.className.replace(' ' + className, '');
        }
    };
    EV_MOUSE_DOWN = 'mousedown';
    EV_MOUSE_MOVE = 'mousemove';
    EV_MOUSE_UP = 'mouseup';
    (function() {
        ddTabCtrlEvents.elLoading = null;
        ddTabCtrlEvents.ACTION_REFRESH = 'refresh';
        ddTabCtrlEvents.ACTION_FOCUS = 'focus';
        ddTabCtrlEvents.ACTION_BLUR = 'blur';
        ddTabCtrlEvents.ACTION_CLEAR = 'clear';
        ddTabCtrlEvents.ACTION_PAUSE = 'pause';
        ddTabCtrlEvents.createLoading = function() {
            var loadingEl;

            loadingEl = document.createElement('DIV');
            loadingEl.className = 'ms-dd-loading';
            loadingEl.innerHTML = '<i>Loading...</i>';
            return loadingEl;
        };
    })();
    (function() {
        DevDashOOB.RECEIVEMSG = 'receiveMsg';
        DevDashOOB();
    })();
    (function() {
        ScopeUtils = {
            GetTimeLength: GetTimeLength,
            AddServerDataToGantt: AddServerDataToGantt,
            AddClientDataToGantt: AddClientDataToGantt,
            NormalizeCPUDuration: NormalizeCPUDuration,
            GetMemoryBytesString: GetMemoryBytesString,
            RequestHasMemoryData: RequestHasMemoryData
        };
        function GetTimeLength(data) {
            var tStart, tEnd;

            tStart = data.StartTimeUtc;
            tEnd = data.EndTimeUtc;
            return tEnd - tStart;
        }
        function AddServerDataToGantt(gantt, data, req, useSpecialStyle) {
            var i, len, currScope, scopeData, cycles, bytes, barRightColumnsValues, currentUseSpecialStyle;

            if (null == data || null == req)
                return;
            len = data.length;
            for (i = 0; i < len; i++) {
                currScope = data[i];
                if ('ChildScopes' in req && currScope.Id in req.ChildScopes) {
                    scopeData = req.ChildScopes[currScope.Id];
                    cycles = NormalizeCPUDuration(scopeData.CPUDuration);
                    if (RequestHasMemoryData(req)) {
                        bytes = GetMemoryBytesString(scopeData.Memory_ManagedBytes, scopeData.Memory_ManagedBytesLOH);
                    }
                }
                if (undefined == useSpecialStyle) {
                    if (currScope.Name == "ExecuteWcfServerOperation") {
                        currentUseSpecialStyle = true;
                    }
                    else {
                        currentUseSpecialStyle = false;
                    }
                }
                else {
                    currentUseSpecialStyle = useSpecialStyle;
                }
                barRightColumnsValues = [cycles];
                if (bytes != null) {
                    barRightColumnsValues.push(bytes);
                }
                gantt.addRow(currScope.Name, currScope.StartTimeUtc, currScope.EndTimeUtc, [currScope.Machine], barRightColumnsValues, currentUseSpecialStyle);
                if (currentUseSpecialStyle) {
                    AddServerDataToGantt(gantt, currScope.Children, req, true);
                }
                else {
                    AddServerDataToGantt(gantt, currScope.Children, req);
                }
                gantt.endRow();
            }
        }
        function AddClientDataToGantt(gantt, data) {
            var i, len, currScope;

            if (null == data)
                return;
            len = data.length;
            for (i = 0; i < len; i++) {
                currScope = data[i];
                gantt.addRow(currScope.Name, currScope.StartTimeUtc, currScope.EndTimeUtc);
                AddClientDataToGantt(gantt, currScope.Children);
                gantt.endRow();
            }
        }
        function NormalizeCPUDuration(cycles) {
            return cycles;
        }
        function NormalizeMemBytes(bytes) {
            return (bytes / 1048576.0).toFixed(3) + Strings.DevDash.Common_MB;
        }
        function GetMemoryBytesString(bytes, bytesLOH) {
            var data;

            if (bytes == undefined || bytes == null)
                return Strings.DevDash.Common_NA;
            if (bytes == 0)
                return '-';
            data = NormalizeMemBytes(bytes);
            if (bytesLOH > 0) {
                data += ' [LOH: ' + NormalizeMemBytes(bytesLOH) + ']';
            }
            return data;
        }
        function RequestHasMemoryData(req) {
            var bytes, data;

            if (req === null)
                return false;
            bytes = req.Memory_ManagedBytes;
            return bytes !== undefined && bytes !== null && bytes !== 0;
        }
    })();
    (function() {
        var depot = {};

        DiagnosticsDataDepot = {
            Add: Add,
            Get: Get,
            Remove: Remove
        };
        function Add(key, object) {
            var createNewRecord;

            createNewRecord = !(key in depot);
            depot[key] = object;
            return createNewRecord;
        }
        function Get(key) {
            if (!(key in depot))
                return null;
            return depot[key];
        }
        function Remove(key) {
            delete depot[key];
        }
    })();
    (function() {
        var updatedTime;
        var updatedTimeString;

        updatedTime = null;
        updatedTimeString = null;
        DiagnosticsDataProvider = {
            GetRequests: GetRequests,
            GetDataForRequest: GetDataForRequest,
            GetULSLog: GetULSLog,
            SetUpdatedTime: SetUpdatedTime
        };
        function GetRequests(callback) {
            var url;

            url = '/_vti_bin/diagnosticsdata.svc/my/scopes';
            if (null != updatedTimeString)
                url = url + '?startTimeUtc=' + updatedTimeString;
            StartRequest(url, callback);
        }
        function GetDataForRequest(correlationId, callback, data) {
            var url;

            url = '/_vti_bin/diagnosticsdata.svc/' + correlationId + '/data?executionplanAsLink=true';
            StartRequest(url, callback, data);
        }
        function GetULSLog(correlationId, callback, data) {
            var url;

            url = '/_vti_bin/diagnosticsdata.svc/' + correlationId + '/uls';
            StartRequest(url, callback, data);
        }
        function StartRequest(url, callback, data) {
            var ajax;

            ajax = new XMLHttpRequest();
            ajax.open('GET', url, true);
            ajax.onreadystatechange = OnData;
            ajax.send();
            function OnData() {
                var response;

                if (4 != ajax.readyState)
                    return;
                else {
                    if (200 != ajax.status) {
                        callback(null);
                        return;
                    }
                }
                try {
                    response = eval(ajax.responseText);
                    callback(response, data);
                }
                catch (e) { }
            }
        }
        function SetUpdatedTime(time) {
            if (null == updatedTime || time.valueOf() > updatedTime.valueOf()) {
                updatedTime = time;
                updatedTimeString = ddGetUTCTimeString(time);
            }
        }
    })();
    (function() {
        var idleCount, tid;

        tid = 0;
        idleCount = 0;
        DeveloperDashboard.Messaging.Subscribe('MS.DiagnosticsData', {
            Start: Start,
            Stop: Stop,
            Refresh: DoRequest,
            receiveMsg: null
        });
        function Start() {
            if (0 != tid)
                return;
            window.setTimeout(DoRequest, 0);
            tid = window.setInterval(DoRequest, 3000);
        }
        function Stop() {
            if (0 == tid)
                return;
            window.clearInterval(tid);
            tid = 0;
        }
        function DoRequest() {
            DiagnosticsDataProvider.GetRequests(OnRequests);
        }
        function OnRequests(data) {
            var i, len, currdata;

            if (null == data || 0 == (len = data.length)) {
                Bump();
                return;
            }
            Reset();
            for (i = 0; i < len; i++) {
                currdata = data[i];
                NormalizeTime(currdata);
                DiagnosticsDataProvider.GetDataForRequest(currdata.CorrelationId, OnDataForRequest, currdata);
            }
        }
        function OnDataForRequest(data, req) {
            var normal;

            if (null == data) {
                Bump();
                return;
            }
            normal = NormalizeData(data, req);
            if (req.ParentId == -1) {
                var diagnosticId = req.Id;

                if (DiagnosticsDataDepot.Add(diagnosticId, req)) {
                    DeveloperDashboard.Messaging.PostMsg('MS.Requests', 'AddRequest', diagnosticId);
                }
            }
        }
        function NormalizeData(data, req) {
            var i, len, currdata, names, pScopeObj, currentPutTime, latestTime, latestTimeValue;

            latestTimeValue = 0;
            len = data.length;
            for (i = 0; i < len; i++) {
                currdata = data[i];
                if (req.Id == currdata.ScopeId) {
                    pScopeObj = req;
                }
                else {
                    if (!('ChildScopes' in req))
                        req.ChildScopes = {};
                    pScopeObj = req.ChildScopes[currdata.ScopeId];
                    if (undefined === pScopeObj)
                        pScopeObj = (req.ChildScopes[currdata.ScopeId] = {});
                }
                names = ParseName(currdata.Name);
                if (1 == names.length) {
                    pScopeObj[names[0]] = currdata.Value;
                }
                else if (2 == names.length) {
                    if (!(names[0] in pScopeObj))
                        pScopeObj[names[0]] = {};
                    pScopeObj[names[0]][names[1]] = currdata.Value;
                }
                else {
                    AddDataToScope(currdata, req, names);
                }
                if ('PutTimeUtc' in currdata) {
                    currentPutTime = ddGetDateFromJsonString(currdata.PutTimeUtc);
                    if (currentPutTime.valueOf() > latestTimeValue) {
                        latestTimeValue = currentPutTime.valueOf();
                        latestTime = currentPutTime;
                    }
                }
            }
            if (latestTimeValue > 0) {
                DiagnosticsDataProvider.SetUpdatedTime(latestTime);
            }
        }
        function AddDataToScope(data, scope, names) {
            var dParent, entry, container;

            if (!(names[0] in scope))
                scope[names[0]] = {};
            dParent = scope[names[0]].Children;
            if (undefined === dParent)
                dParent = (scope[names[0]].Children = []);
            container = GetContainer(dParent, names[1], names[2]);
            if (null != container) {
                container[names[2]] = data.Value;
            }
            else {
                entry = {
                    Name: names[1],
                    Scope: data.ScopeId,
                    Properties: {}
                };
                entry.Properties[names[2]] = data.Value;
                dParent.push(entry);
            }
            function GetContainer(arr, propName, elemName) {
                var arrLen, i, obj, ret;

                arrLen = arr.length;
                for (i = 0; i < arrLen; i++) {
                    obj = arr[i];
                    if (obj.Name == propName && (ret = obj.Properties) != undefined && !(elemName in ret)) {
                        return ret;
                    }
                }
                return null;
            }
        }
        function ParseName(scopeName) {
            var firstDot, lastDot;

            firstDot = scopeName.indexOf('.');
            if (-1 == firstDot) {
                return [scopeName];
            }
            lastDot = scopeName.lastIndexOf('.');
            if (lastDot == firstDot) {
                return [scopeName.substring(0, firstDot), scopeName.substring(firstDot + 1)];
            }
            else {
                return [scopeName.substring(0, firstDot), scopeName.substring(firstDot + 1, lastDot), scopeName.substring(lastDot + 1)];
            }
        }
        function NormalizeTime(data) {
            var i, len, arr, curr;

            AdjustTime(data);
            arr = data.Children;
            if (null == arr)
                return;
            len = arr.length;
            for (i = 0; i < len; i++) {
                curr = arr[i];
                NormalizeTime(curr);
            }
        }
        function AdjustTime(data) {
            var str;

            if ('string' == typeof data.StartTimeUtc) {
                data.StartTimeUtc = GetTimeFromServerString(data.StartTimeUtc);
            }
            if ('string' == typeof data.EndTimeUtc) {
                data.EndTimeUtc = GetTimeFromServerString(data.EndTimeUtc);
            }
        }
        function GetTimeFromServerString(str) {
            str = str.replace('/Date(', '');
            str = str.replace(')/', '');
            return Number(str);
        }
        function Bump() {
            idleCount++;
            if (61 == idleCount) {
                Reset();
                Stop();
                DeveloperDashboard.Messaging.PostMsg('MS.Requests', 'Pause', null);
            }
        }
        function Reset() {
            idleCount = 0;
        }
    })();
    (function() {
        var domEl, splitView, requestList, requestListEl, topEl, bottomSplitView, bottomTabEl, infoTabs, helpEl, msgs;
        var isPaused, wasPaused, lastKey;
        var count;

        msgs = {
            AddRequest: AddRequest,
            Pause: Pause
        };
        wasPaused = false;
        isPaused = true;
        lastKey = null;
        count = 0;
        DeveloperDashboard.Modes.Add({
            _syncInit: null,
            name: 'MS.Requests',
            displayName: Strings.DevDash.Requests_Tab,
            init: Init,
            focus: Focus,
            blur: Blur,
            refresh: Refresh,
            pause: Pause,
            clear: Clear,
            onResize: OnResize,
            receiveMsg: ReceiveMsg
        });
        function Init(height) {
            var tabsContainer, tabsHeight;

            domEl = document.createElement('DIV');
            domEl.style.height = '100%';
            splitView = ddVSplitView(domEl, true, 0.4 * height);
            topEl = document.createElement('DIV');
            topEl.style.height = '100%';
            topEl.style.overflowY = 'auto';
            requestListEl = document.createElement('DIV');
            helpEl = CreateDisplayText(Strings.DevDash.Requests_Placeholder);
            topEl.appendChild(helpEl);
            splitView.top.appendChild(topEl);
            requestList = ddListView(requestListEl, OnListSelect);
            tabsContainer = document.createElement('DIV');
            infoTabs = ddTabCtrlEvents(tabsContainer, null, InfoTabsRender, InfoTabsGetViewportHeight);
            tabsHeight = GetClientHeight(tabsContainer, document.body);
            bottomSplitView = ddVSplitView(splitView.bottom, false, tabsHeight);
            bottomSplitView.top.appendChild(tabsContainer);
            bottomSplitView.bottom.className = 'ms-dd-reqinfo-panel';
            bottomTabEl = document.createElement('DIV');
            bottomTabEl.className = 'ms-dd-reqinfo-tab';
            bottomSplitView.bottom.appendChild(bottomTabEl);
            DeveloperDashboard.Modes.Requests = {
                AddDiagnostics: infoTabs.addTab
            };
            return domEl;
        }
        function InfoTabsRender(el) {
            var v;

            v = bottomTabEl;
            ClearArea(v);
            v.appendChild(el);
            window.setTimeout(OnInfoTabSwitch, 0);
        }
        function InfoTabsGetViewportHeight() {
            var height;

            height = bottomSplitView.bottom.scrollHeight;
            return height;
        }
        function Focus() {
            if (!wasPaused && isPaused) {
                Pause();
            }
        }
        function Blur() {
            wasPaused = isPaused;
            if (!isPaused) {
                Pause();
            }
        }
        function Refresh() {
            DeveloperDashboard.Messaging.PostMsg('MS.DiagnosticsData', 'Refresh', null);
        }
        function Pause() {
            var strAction, strMsg;

            if (isPaused) {
                strAction = 'Resume';
                strMsg = 'Start';
            }
            else {
                strAction = 'Pause';
                strMsg = 'Stop';
            }
            DeveloperDashboard.Messaging.PostMsg('MS.DiagnosticsData', strMsg, null);
            DeveloperDashboard.Messaging.PostMsg('MS.DevDash', strAction, null);
            isPaused = !isPaused;
        }
        function Clear() {
            requestList.clear();
            count = 0;
            lastKey = null;
            TriggerUpdate(null);
            UpdateUI();
        }
        function UpdateUI() {
            ClearArea(topEl);
            if (0 == count)
                topEl.appendChild(helpEl);
            else
                topEl.appendChild(requestListEl);
        }
        function ReceiveMsg(subject, msg) {
            if (!(subject in msgs))
                return;
            msgs[subject](msg);
        }
        function AddRequest(key) {
            var obj, el, t, a, update;

            update = 0 == count;
            obj = DiagnosticsDataDepot.Get(key);
            el = document.createElement('SPAN');
            t = document.createTextNode(obj.Name);
            a = Linkify(t);
            el.appendChild(a);
            requestList.addRow(el, key, true);
            count++;
            if (update)
                UpdateUI();
            function Linkify(elText) {
                var elA;

                elA = document.createElement('A');
                elA.className = 'ms-dd-req-entry';
                elA.appendChild(elText);
                elA.href = 'javascript:return false;';
                elA.onClick = function() {
                    OnListSelect(key);
                };
                return elA;
            }
        }
        function OnInfoTabSwitch() {
            OnListSelect(undefined);
        }
        function OnListSelect(key) {
            if (!Boolean(key))
                key = lastKey;
            else
                lastKey = key;
            TriggerUpdate(key);
        }
        function TriggerUpdate(key) {
            var currTab;

            currTab = infoTabs.getActive();
            if (!Boolean(currTab) || !Boolean(currTab.display))
                return;
            if ('_init' in currTab && currTab._init)
                currTab.display(key);
        }
        function OnResize() {
            var currTab, th, bh;

            th = domEl.clientHeight;
            splitView.redraw(th);
            bh = splitView.bottom.clientHeight;
            bottomSplitView.redraw(bh);
            currTab = infoTabs.getActive();
            if (Boolean(currTab) && Boolean(currTab.onResize))
                currTab.onResize();
        }
    })();
    (function() {
        var domEl, listEl, topEl, bottomEl, helpTopEl, helpBottomEl;
        var list, splitView;
        var msgs, count, scopes, gantts;

        msgs = {
            AddScenario: AddScenario
        };
        count = 0;
        scopes = {};
        gantts = {};
        DeveloperDashboard.Modes.Add({
            name: 'MS.Scenarios',
            displayName: Strings.DevDash.Scenarios_Tab,
            init: Init,
            focus: null,
            blur: null,
            refresh: null,
            pause: null,
            clear: Clear,
            onResize: OnResize,
            receiveMsg: ReceiveMsg
        });
        function Init(height) {
            domEl = document.createElement('DIV');
            domEl.style.height = '100%';
            splitView = ddVSplitView(domEl, true, 0.4 * height);
            topEl = document.createElement('DIV');
            listEl = document.createElement('DIV');
            bottomEl = document.createElement('DIV');
            bottomEl.className = 'ms-dd-sc-info';
            splitView.top.appendChild(topEl);
            splitView.bottom.appendChild(bottomEl);
            list = ddListView(listEl, OnListSelect);
            helpTopEl = CreateDisplayText(Strings.DevDash.Scenarios_Placeholder);
            topEl.appendChild(helpTopEl);
            helpBottomEl = CreateDisplayText(Strings.DevDash.Scenarios_DetailPlaceholder);
            bottomEl.appendChild(helpBottomEl);
            return domEl;
        }
        function Clear() {
            list.clear();
            count = 0;
            PurgeHistory();
            OnListSelect(null);
            UpdateUI();
        }
        function ReceiveMsg(subject, msg) {
            if (!(subject in msgs))
                return;
            msgs[subject](msg);
        }
        function AddScenario(cscope) {
            var el, t, key, update;

            update = 0 == count;
            if (!('Name' in cscope) || !('StartTimeUtc' in cscope) || !('EndTimeUtc' in cscope))
                return;
            el = document.createElement('SPAN');
            t = document.createTextNode(cscope.Name);
            el.appendChild(t);
            key = String(count);
            list.addRow(el, key);
            scopes[key] = cscope;
            count++;
            if (update)
                UpdateUI();
        }
        function OnListSelect(key) {
            var gantt;

            ClearArea(bottomEl);
            if (null == key) {
                bottomEl.appendChild(helpBottomEl);
                return;
            }
            if (!(key in gantts)) {
                gantt = CreateGantt(key);
                if (null == gantt) {
                    return;
                }
                gantts[key] = gantt;
            }
            else
                gantt = gantts[key];
            bottomEl.appendChild(gantt.el);
        }
        function CreateGantt(key, columns) {
            var cscope, duration, gantt;

            cscope = scopes[key];
            if (null == cscope)
                return null;
            duration = ScopeUtils.GetTimeLength(cscope);
            gantt = ddGanttView(cscope.StartTimeUtc, duration, -1, columns);
            ScopeUtils.AddClientDataToGantt(gantt, cscope.Children);
            return gantt;
        }
        function OnResize() {
            var h;

            h = domEl.clientHeight;
            splitView.redraw(h);
        }
        function PurgeHistory() {
            var s;

            for (s in scopes) {
                delete scopes[s];
            }
            for (s in gantts) {
                delete gantts[s];
            }
        }
        function UpdateUI() {
            ClearArea(topEl);
            if (0 == count)
                topEl.appendChild(helpTopEl);
            else
                topEl.appendChild(listEl);
        }
    })();
    (function() {
        var msgs;

        msgs = {};
        if (true)
            return;
        DeveloperDashboard.Modes.Add({
            name: 'MS.PLT',
            displayName: Strings.DevDash.PLT_Tab,
            receiveMsg: null
        });
    })();
    (function() {
        var domEl;
        var msgs = {
            AddAnimationData: AddData
        };

        DeveloperDashboard.Modes.Add({
            name: 'MS.AnimationTelemetry',
            displayName: Strings.DevDash.Animation_Tab,
            init: Init,
            focus: null,
            blur: null,
            refresh: null,
            pause: null,
            clear: Clear,
            onResize: null,
            receiveMsg: ReceiveMsg
        });
        function Init(height) {
            domEl = document.createElement('DIV');
            domEl.className = 'ms-dd-anim-container';
            return domEl;
        }
        function Clear() {
            domEl.innerHTML = '';
        }
        function ReceiveMsg(subject, msg) {
            if (!(subject in msgs))
                return;
            msgs[subject](msg);
        }
        function AddData(msg) {
            domEl.innerHTML += msg;
        }
    })();
    (function() {
        var domEl;
        var msgs = {
            AddMDSData: AddData
        };

        DeveloperDashboard.Modes.Add({
            name: 'MS.MDSTelemetry',
            displayName: Strings.DevDash.MDS_Tab,
            init: Init,
            focus: null,
            blur: null,
            refresh: null,
            pause: null,
            clear: Clear,
            onResize: null,
            receiveMsg: ReceiveMsg
        });
        function Init(height) {
            domEl = document.createElement('DIV');
            domEl.className = 'ms-dd-mds-container';
            return domEl;
        }
        function Clear() {
            domEl.innerHTML = '';
        }
        function ReceiveMsg(subject, msg) {
            if (!(subject in msgs))
                return;
            msgs[subject](msg);
        }
        function AddData(msg) {
            domEl.innerHTML += msg;
        }
    })();
    (function() {
        var tab, table;
        var txtTimeStamp, txtExecutionTime, txtCPUDuration, txtMemoryBytes, txtUser, txtPageCheckout, txtMachine, txtUserAddress, txtCorrelationId;
        var txtSqlQueriesCount, txtSqlDuration, txtSpReqCount, txtAssertCount, txtServCallCount, txtServCallDur;
        var STR_NO_TEXT = '-';

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.Server',
            displayName: Strings.DevDash.ServerInfo_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            tab = document.createElement('DIV');
            tab.className = 'ms-dd-reqinfo';
            table = document.createElement('TABLE');
            table.className = 'ms-dd-reqinfo';
            AddGroup(table, Strings.DevDash.ServerInfo_Summary);
            txtTimeStamp = AddRow(table, Strings.DevDash.ServerInfo_StartTime);
            txtExecutionTime = AddRow(table, Strings.DevDash.ServerInfo_Duration);
            txtCPUDuration = AddRow(table, Strings.DevDash.ServerInfo_CPUTime);
            txtMemoryBytes = AddRow(table, Strings.DevDash.ServerInfo_Memory);
            txtUser = AddRow(table, Strings.DevDash.ServerInfo_Username);
            txtPageCheckout = AddRow(table, Strings.DevDash.ServerInfo_PCL);
            txtMachine = AddRow(table, Strings.DevDash.ServerInfo_Server);
            txtUserAddress = AddRow(table, Strings.DevDash.ServerInfo_ClientAdd);
            txtCorrelationId = AddRow(table, Strings.DevDash.ServerInfo_CorrID);
            AddGroup(table, Strings.DevDash.ServerInfo_Aggregate);
            txtSqlQueriesCount = AddRow(table, Strings.DevDash.ServerInfo_SQLCount);
            txtSqlDuration = AddRow(table, Strings.DevDash.ServerInfo_SQLDur);
            txtSpReqCount = AddRow(table, Strings.DevDash.ServerInfo_ReqCount);
            txtAssertCount = AddRow(table, Strings.DevDash.ServerInfo_AssertCount);
            txtServCallCount = AddRow(table, Strings.DevDash.ServerInfo_ServCount);
            txtServCallDur = AddRow(table, Strings.DevDash.ServerInfo_ServDur);
            tab.appendChild(table);
            return tab;
        }
        function AddGroup(tableEl, caption) {
            var tr, tdCaption, txtCaption;

            tr = document.createElement('TR');
            tdCaption = document.createElement('TD');
            txtCaption = document.createTextNode(caption);
            tdCaption.colSpan = 2;
            tdCaption.className = 'ms-dd-TableView-Title ms-dd-reqinfo-group';
            tdCaption.appendChild(txtCaption);
            tr.appendChild(tdCaption);
            tableEl.appendChild(tr);
        }
        function AddRow(tableEl, caption) {
            var tr, tdCaption, tdValue, txtCaption, txtValue;

            tr = document.createElement('TR');
            tdCaption = document.createElement('TD');
            tdValue = document.createElement('TD');
            txtCaption = document.createTextNode(caption);
            txtValue = document.createTextNode(STR_NO_TEXT);
            tdCaption.className = 'ms-dd-reqinfo-caption';
            tdValue.className = 'ms-dd-reqinfo-text';
            tdCaption.appendChild(txtCaption);
            tdValue.appendChild(txtValue);
            tr.appendChild(tdCaption);
            tr.appendChild(tdValue);
            tableEl.appendChild(tr);
            return txtValue;
        }
        function Display(diagnosticId) {
            var dur, diagData, cycles;

            diagData = null;
            if (null != diagnosticId)
                diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null != diagData) {
                dur = Number(diagData.ExecutionTime);
                txtTimeStamp.data = undefined != diagData.StartTimeUtc ? (new Date(diagData.StartTimeUtc)).toUTCString() : Strings.DevDash.Common_NA;
                txtExecutionTime.data = String(dur.toFixed(2)) + Strings.DevDash.Common_ms;
                txtUser.data = diagData.CurrentUser;
                txtPageCheckout.data = diagData.FileLevel;
                txtMachine.data = diagData.Machine;
                txtUserAddress.data = diagData.ClientUserAddress;
                txtCorrelationId.data = diagData.CorrelationId;
                txtCPUDuration.data = Boolean(diagData.CPUDuration) ? ScopeUtils.NormalizeCPUDuration(diagData.CPUDuration) + Strings.DevDash.Common_ms : Strings.DevDash.Common_NA;
                txtMemoryBytes.data = ScopeUtils.GetMemoryBytesString(diagData.Memory_ManagedBytes, diagData.Memory_ManagedBytesLOH);
                txtSqlQueriesCount.data = GetAggregateData(diagData, 'SqlQuery', 'TotalCount');
                txtSqlDuration.data = GetAggregateData(diagData, 'SqlQuery', 'TotalDuration', Strings.DevDash.Common_ms);
                txtSpReqCount.data = GetAggregateData(diagData, 'SPRequest', 'TotalCount');
                txtAssertCount.data = GetAggregateData(diagData, 'CriticalTrace', 'TotalCount');
                txtServCallCount.data = GetAggregateData(diagData, 'ServiceCall', 'TotalCount');
                txtServCallDur.data = GetAggregateData(diagData, 'ServiceCall', 'TotalDuration', Strings.DevDash.Common_ms);
            }
            else {
                txtTimeStamp.data = STR_NO_TEXT;
                txtExecutionTime.data = STR_NO_TEXT;
                txtUser.data = STR_NO_TEXT;
                txtPageCheckout.data = STR_NO_TEXT;
                txtMachine.data = STR_NO_TEXT;
                txtUserAddress.data = STR_NO_TEXT;
                txtCorrelationId.data = STR_NO_TEXT;
                txtCPUDuration.data = STR_NO_TEXT;
                txtMemoryBytes.data = STR_NO_TEXT;
                txtSqlQueriesCount.data = STR_NO_TEXT;
                txtSqlDuration.data = STR_NO_TEXT;
                txtSpReqCount.data = STR_NO_TEXT;
                txtAssertCount.data = STR_NO_TEXT;
                txtServCallCount.data = STR_NO_TEXT;
                txtServCallDur.data = STR_NO_TEXT;
            }
        }
        function GetAggregateData(data, groupName, valueName, suffix) {
            var group, value;

            group = data[groupName];
            if (!Boolean(group))
                return Strings.DevDash.Common_NA;
            value = group[valueName];
            if (undefined === value)
                return Strings.DevDash.Common_NA;
            return value + (undefined !== suffix ? suffix : '');
        }
    })();
    (function() {
        var domEl, tab, gantts;

        gantts = {};
        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.Scopes',
            displayName: Strings.DevDash.Scopes_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            return domEl;
        }
        function Display(diagnosticId) {
            var gantt;

            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            if (!(diagnosticId in gantts)) {
                gantt = CreateGantt(diagnosticId, [Strings.DevDash.Scopes_Machine], [Strings.DevDash.Scopes_CPU]);
                gantts[diagnosticId] = gantt;
            }
            else
                gantt = gantts[diagnosticId];
            domEl.appendChild(gantt.el);
        }
        function CreateGantt(diagnosticId, barLeftColumns, barRightColumns) {
            var gantt, req, duration;

            req = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == req)
                return null;
            if (ScopeUtils.RequestHasMemoryData(req)) {
                barRightColumns.push(Strings.DevDash.Scopes_Memory);
            }
            duration = ScopeUtils.GetTimeLength(req);
            gantt = ddGanttView(req.StartTimeUtc, duration, -1, barLeftColumns, barRightColumns);
            ScopeUtils.AddServerDataToGantt(gantt, req.Children, req);
            return gantt;
        }
    })();
    (function() {
        var domEl, viewEl, noResultsEl, noInfoEl, table, arr;

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.SQL',
            displayName: Strings.DevDash.SQL_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            viewEl = document.createElement('DIV');
            table = ddTableView(viewEl, OnRowSelect, [Strings.DevDash.SQL_Query, Strings.DevDash.SQL_Duration, Strings.DevDash.SQL_Reads, Strings.DevDash.SQL_Writes, Strings.DevDash.SQL_CPU, Strings.DevDash.SQL_SQLDuration, Strings.DevDash.SQL_ExecPlan]);
            return domEl;
        }
        function Display(diagnosticId) {
            var diagData, data, i, len, curr, duration, nameEl, executionPlanEl, displayName;

            arr = null;
            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            data = diagData.SqlQuery;
            if (!Boolean(data)) {
                DisplayNoInfo();
                return;
            }
            arr = data.Children;
            if (!Boolean(arr)) {
                DisplayNoResults();
                return;
            }
            else {
                table.clear();
                domEl.appendChild(viewEl);
            }
            len = arr.length;
            for (i = 0; i < len; i++) {
                curr = arr[i];
                duration = new Number(curr.Properties.Duration);
                nameEl = document.createElement('SPAN');
                if (curr.Name == "RawSqlText" && null != curr.Properties.Text && undefined != curr.Properties.Text)
                    displayName = CreateRawSqlDisplayName(curr.Properties.Text);
                else
                    displayName = curr.Name;
                nameEl.appendChild(MakeLink(displayName));
                executionPlanEl = CreateSqlPlanElement(curr);
                table.addRow(String(i), [nameEl, CreateSqlMetricElement(duration, 3), CreateSqlMetricElement(curr.Properties.NumLogicalReads), CreateSqlMetricElement(curr.Properties.NumPhysicalWrites), CreateSqlMetricElement(curr.Properties.SqlCPU), CreateSqlMetricElement(curr.Properties.SqlDuration), executionPlanEl]);
            }
        }
        function OnRowSelect(key) {
            var data;

            table.clearSelection();
            data = arr[key];
            SetSqlWindowText(Strings.DevDash.MoreInfo_Text, data.Properties.Text, Strings.DevDash.MoreInfo_Callstack, data.Properties.CallStack, Strings.DevDash.MoreInfo_IOStats, data.Properties.IOStatistics);
        }
        function DisplayNoInfo() {
            if (null == noInfoEl)
                noInfoEl = CreateDisplayText(Strings.DevDash.SQL_NoInfo);
            domEl.appendChild(noInfoEl);
        }
        function DisplayNoResults() {
            if (null == noResultsEl)
                noResultsEl = CreateDisplayText(Strings.DevDash.SQL_NoQueries);
            domEl.appendChild(noResultsEl);
        }
        function CreateSqlPlanElement(sqlQuery) {
            var el, executionPlanEl;

            if (sqlQuery.Properties.ExecutionPlan == undefined) {
                el = CreateSqlMetricElement();
            }
            else {
                el = document.createElement('A');
                el.setAttribute('href', sqlQuery.Properties.ExecutionPlan + '?filename=query.sqlplan');
                el.appendChild(document.createTextNode("plan"));
            }
            return el;
        }
        function CreateRawSqlDisplayName(text) {
            var index;

            index = text.indexOf('\'', 0);
            if (index > 0)
                return text.substr(index + 1, 16);
            else
                return text.substr(0, 16);
        }
        function CreateSqlMetricElement(metric, digits, unit) {
            var el;

            el = document.createElement('SPAN');
            if (metric != undefined) {
                if (digits == undefined)
                    digits = 0;
                if (unit == undefined)
                    unit = '';
                el.appendChild(document.createTextNode(metric.toFixed(digits) + unit));
            }
            else {
                el.appendChild(document.createTextNode(Strings.DevDash.Common_NA));
            }
            return el;
        }
    })();
    (function() {
        var domEl, listEl, noResultsEl, list, arr;

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.SPRequests',
            displayName: Strings.DevDash.SPRequests_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            listEl = document.createElement('DIV');
            list = ddListView(listEl, OnListSelect);
            return domEl;
        }
        function Display(diagnosticId) {
            var diagData, data, i, len, curr;

            arr = null;
            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            data = diagData.SPRequest;
            if (!Boolean(data))
                return;
            arr = data.Children;
            if (!Boolean(arr)) {
                DisplayNoResults();
                return;
            }
            else {
                list.clear();
                domEl.appendChild(listEl);
            }
            len = arr.length;
            for (i = 0; i < len; i++) {
                curr = arr[i];
                list.addRow(MakeLink(curr.Name), String(i));
            }
        }
        function OnListSelect(key) {
            var data;

            list.clearSelection();
            data = arr[key];
            SetSqlWindowText(Strings.DevDash.MoreInfo_Callstack, data.Properties.CallStack, null, null, null, null);
        }
        function DisplayNoResults() {
            if (null == noResultsEl)
                noResultsEl = CreateDisplayText(Strings.DevDash.Requests_NoRequests);
            domEl.appendChild(noResultsEl);
        }
    })();
    (function() {
        var domEl, noAssertsEl, listEl, list;

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.Asserts',
            displayName: Strings.DevDash.Asserts_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            listEl = document.createElement('DIV');
            domEl.appendChild(listEl);
            list = ddListView(listEl, null);
            return domEl;
        }
        function Display(diagnosticId) {
            var diagData, data, count, arr, len, i;

            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            data = diagData.CriticalTrace;
            if (!Boolean(data))
                return;
            count = data.TotalCount;
            if (0 == count) {
                DisplayNoAsserts();
            }
            else {
                list.clear();
                domEl.appendChild(listEl);
                arr = diagData.CriticalTrace.TraceMessages.split('\n');
                len = arr.length;
                for (i = 0; i < len; i++) {
                    list.addRow(document.createTextNode(arr[i]), null);
                }
            }
        }
        function DisplayNoAsserts() {
            if (null == noAssertsEl)
                noAssertsEl = CreateDisplayText(Strings.DevDash.Asserts_NoAsserts);
            domEl.appendChild(noAssertsEl);
        }
    })();
    (function() {
        var domEl, noResultsEl, listEl, list, arr;

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.ServiceCalls',
            displayName: Strings.DevDash.ServiceCalls_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            listEl = document.createElement('DIV');
            domEl.appendChild(listEl);
            list = ddListView(listEl, OnListSelect);
            return domEl;
        }
        function Display(diagnosticId) {
            var data, diagData, i, len, curr, duration, lineEl;

            arr = null;
            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            data = diagData.ServiceCall;
            if (!Boolean(data))
                return;
            arr = data.Children;
            if (!Boolean(arr)) {
                DisplayNoResults();
                return;
            }
            else {
                list.clear();
                domEl.appendChild(listEl);
            }
            len = arr.length;
            for (i = 0; i < len; i++) {
                curr = arr[i];
                duration = new Number(curr.Properties.Duration);
                if (isNaN(duration)) {
                    lineEl = MakeLink(curr.Name);
                }
                else {
                    lineEl = MakeLinkWithInfoText(curr.Name, String(duration.toFixed(3)) + Strings.DevDash.Common_ms);
                }
                list.addRow(lineEl, String(i));
            }
        }
        function OnListSelect(key) {
            var data;

            list.clearSelection();
            data = arr[key];
            SetSqlWindowText(Strings.DevDash.MoreInfo_Callstack, data.Properties.CallStack, Strings.DevDash.MoreInfo_Duration, data.Properties.Duration, null, null);
        }
        function DisplayNoResults() {
            if (null == noResultsEl)
                noResultsEl = CreateDisplayText(Strings.DevDash.ServiceCalls_NoServCalls);
            domEl.appendChild(noResultsEl);
        }
    })();
    (function() {
        var domEl, loadingEl, errorEl, ulsTables;

        ulsTables = {};
        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.ULS',
            displayName: Strings.DevDash.ULS_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            loadingEl = CreateDisplayText(Strings.DevDash.ULS_Fetching);
            errorEl = null;
            domEl = document.createElement('DIV');
            domEl.appendChild(loadingEl);
            return domEl;
        }
        function Display(diagnosticId) {
            var ulsTable, correlationId, diagData;

            ClearArea(domEl);
            if (null == diagnosticId)
                return;
            ulsTable = ulsTables[diagnosticId];
            if (Boolean(ulsTable)) {
                domEl.appendChild(ulsTable);
                return;
            }
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            correlationId = diagData.CorrelationId;
            if (null == correlationId)
                return;
            domEl.appendChild(loadingEl);
            DiagnosticsDataProvider.GetULSLog(correlationId, OnULSDataCallback, diagnosticId);
        }
        function OnULSDataCallback(data, diagnosticId) {
            var tableEl;

            if (null == data) {
                DisplayError();
                return;
            }
            tableEl = BuildULSTable(data);
            ulsTables[diagnosticId] = tableEl;
            Display(diagnosticId);
        }
        function BuildULSTable(data) {
            var dom, i, len, arr, table;

            dom = document.createElement('DIV');
            table = ddTableView(dom, null, [Strings.DevDash.ULS_Time, Strings.DevDash.ULS_Event, Strings.DevDash.ULS_Process, Strings.DevDash.ULS_Thread, Strings.DevDash.ULS_Level, Strings.DevDash.ULS_Category, Strings.DevDash.ULS_Area, Strings.DevDash.ULS_Message]);
            len = data.length;
            for (i = 0; i < len; i++) {
                AddULSLine(table, data[i]);
            }
            return dom;
        }
        function AddULSLine(table, line) {
            table.addRow(null, [CreateDataText(ddGetTimeWithMsFromServerString(line.Timestamp)), CreateDataText(line.EventID), CreateDataText(line.Process), CreateDataText(String(line.ThreadID)), CreateDataText(line.Level), CreateDataText(line.Category), CreateDataText(line.Area), CreateDataText(line.Message)]);
        }
        function CreateDataText(text) {
            var el;

            el = document.createTextNode(text);
            return el;
        }
        function DisplayError() {
            if (null == errorEl)
                errorEl = CreateDisplayText(Strings.DevDash.ULS_Error);
            ClearArea(domEl);
            domEl.appendChild(errorEl);
        }
    })();
    (function() {
        var domEl, viewEl, noResultsEl, table, arr, cacheCallDuration, totalCacheCallDuration, cachedObjectsRequested, totalCachedObjectsRequested, cachedObjectReadSize, totalCachedObjectReadSize, cachedObjectWriteSize, totalCachedObjectWriteSize, cachedObjectMissCount, totalCachedObjectMissCount, cachedObjectHitCount, totalCachedObjectHitCount, cachedObjectFailure, totalCachedObjectFailure;

        DeveloperDashboard.Modes.Requests.AddDiagnostics({
            name: 'MS.Requests.Cache',
            displayName: Strings.DevDash.Cache_Tab,
            init: Init,
            display: Display
        });
        function Init() {
            domEl = document.createElement('DIV');
            viewEl = document.createElement('DIV');
            totalCacheCallDuration = new Number();
            totalCachedObjectsRequested = new Number();
            totalCachedObjectReadSize = new Number();
            totalCachedObjectWriteSize = new Number();
            totalCachedObjectMissCount = new Number();
            totalCachedObjectHitCount = new Number();
            totalCachedObjectFailure = new Number();
            table = ddTableView(viewEl, OnRowSelect, [Strings.DevDash.Cache_Method, Strings.DevDash.Cache_Duration, Strings.DevDash.Cache_Objects_Requested, Strings.DevDash.Cache_Key, Strings.DevDash.Cache_ReadSize, Strings.DevDash.Cache_WriteSize, Strings.DevDash.Cache_Miss, Strings.DevDash.Cache_Hit, Strings.DevDash.Cache_Failures, Strings.DevDash.Cache_Usage]);
            return domEl;
        }
        function Display(diagnosticId) {
            var diagData, data, i, len;

            arr = null;
            if (domEl.childNodes.length > 0)
                domEl.removeChild(domEl.childNodes[0]);
            if (null == diagnosticId)
                return;
            diagData = DiagnosticsDataDepot.Get(diagnosticId);
            if (null == diagData)
                return;
            data = diagData.SPDistributedCache;
            if (!Boolean(data))
                return;
            arr = data.Children;
            if (!Boolean(arr)) {
                DisplayNoResults();
                return;
            }
            else {
                table.clear();
                domEl.appendChild(viewEl);
            }
            len = arr.length;
            for (i = 0; i < len; i++) {
                AddRow(arr[i]);
            }
            if (len > 0) {
                AddTotalsRow();
            }
            function AddRow(curr) {
                cacheCallDuration = new Number(curr.Properties.CacheOperationDuration);
                totalCacheCallDuration += cacheCallDuration;
                var cacheKey;

                if (curr.Properties.CachedKey == null || curr.Properties.CachedKey == undefined || curr.Properties.CachedKey == '') {
                    cacheKey = Strings.DevDash.Common_NA;
                }
                else {
                    cacheKey = curr.Properties.CachedKey;
                }
                cachedObjectsRequested = new Number(curr.Properties.CachedObjectsRequested);
                totalCachedObjectsRequested += cachedObjectsRequested;
                cachedObjectReadSize = new Number(curr.Properties.CachedObjectReadSize);
                totalCachedObjectReadSize += cachedObjectReadSize;
                cachedObjectWriteSize = new Number(curr.Properties.CachedObjectWriteSize);
                totalCachedObjectWriteSize += cachedObjectWriteSize;
                cachedObjectMissCount = new Number(curr.Properties.CachedObjectMissCount);
                totalCachedObjectMissCount += cachedObjectMissCount;
                cachedObjectHitCount = new Number(curr.Properties.CachedObjectHitCount);
                totalCachedObjectHitCount += cachedObjectHitCount;
                cachedObjectFailure = new Number(curr.Properties.CachedObjectFailure);
                totalCachedObjectFailure += cachedObjectFailure;
                table.addRow(String(i), [MakeLink(curr.Properties.CacheMethod), CreateCacheMetricElement(cacheCallDuration, 3), CreateCacheMetricElement(cachedObjectsRequested), document.createTextNode(cacheKey), CreateCacheMetricElement(cachedObjectReadSize), CreateCacheMetricElement(cachedObjectWriteSize), CreateCacheMetricElement(cachedObjectMissCount), CreateCacheMetricElement(cachedObjectHitCount), CreateCacheMetricElement(cachedObjectFailure), document.createTextNode(curr.Properties.CacheUsageName)]);
            }
            function AddTotalsRow() {
                table.addRow('', [document.createTextNode(Strings.DevDash.Cache_Totals), CreateCacheMetricElement(totalCacheCallDuration, 3), CreateCacheMetricElement(totalCachedObjectsRequested), document.createTextNode(Strings.DevDash.Common_NA), CreateCacheMetricElement(totalCachedObjectReadSize), CreateCacheMetricElement(totalCachedObjectWriteSize), CreateCacheMetricElement(totalCachedObjectMissCount), CreateCacheMetricElement(totalCachedObjectHitCount), CreateCacheMetricElement(totalCachedObjectFailure), document.createTextNode(Strings.DevDash.Common_NA)]);
                totalCacheCallDuration = 0;
                totalCachedObjectsRequested = 0;
                totalCachedObjectReadSize = 0;
                totalCachedObjectWriteSize = 0;
                totalCachedObjectMissCount = 0;
                totalCachedObjectHitCount = 0;
                totalCachedObjectFailure = 0;
            }
        }
        function OnRowSelect(key) {
            var data;

            table.clearSelection();
            data = arr[key];
            SetSqlWindowText(Strings.DevDash.MoreInfo_Callstack, data.Properties.CallStack, null, null, null, null);
        }
        function DisplayNoResults() {
            if (null == noResultsEl)
                noResultsEl = CreateDisplayText(Strings.DevDash.Cache_NoCache);
            domEl.appendChild(noResultsEl);
        }
        function CreateCacheMetricElement(metric, digits, unit) {
            var el;

            el = document.createElement('SPAN');
            if (metric != undefined) {
                if (digits == undefined)
                    digits = 0;
                if (unit == undefined)
                    unit = '';
                el.appendChild(document.createTextNode(metric.toFixed(digits) + unit));
            }
            else {
                el.appendChild(document.createTextNode(Strings.DevDash.Common_NA));
            }
            return el;
        }
    })();
}
function SetSqlWindowText(textTitle, text, stackTitle, stack, ioTitle, io) {
    var sqlWindow;

    if (typeof document.sqlWindow != 'undefined')
        sqlWindow = document.sqlWindow;
    if (!Boolean(sqlWindow) || sqlWindow.closed) {
        sqlWindow = window.open('', '', 'width=800,height=770,status=yes,location=no,scrollbar=yes,resize=yes');
        document.sqlWindow = sqlWindow;
    }
    var sqlDocument = sqlWindow.document;
    var sqlText;
    var sqlStack;
    var sqlIO;

    if (Boolean(sqlText)) {
        sqlDocument.open();
        sqlDocument.write('');
        sqlDocument.close();
    }
    sqlDocument.open();
    sqlDocument.write('<html><head><link rel="stylesheet" type="text/css" href="');
    sqlDocument.write('/_layouts/15/1033/styles/layouts.css');
    sqlDocument.write('"/></head><body><div class="ms-developerdashboard"><table width="100%"><tr><td style="font-weight:bold">');
    sqlDocument.write(textTitle);
    sqlDocument.write('</td></tr><tr><td><textarea id="sqlText" rows="18" cols="94"></textarea></td></tr>');
    if (Boolean(stack)) {
        sqlDocument.write('<tr><td style="font-weight:bold">');
        sqlDocument.write(stackTitle);
        sqlDocument.write('</td></tr><tr><td><textarea id="sqlStack" rows="14" cols="94"></textarea></td></tr>');
    }
    if (Boolean(io)) {
        sqlDocument.write('<tr><td style="font-weight:bold">');
        sqlDocument.write(ioTitle);
        sqlDocument.write('</td></tr><tr><td><textarea id="sqlIO" rows="8" cols="94"></textarea></td></tr>');
    }
    sqlDocument.write('</table></div></body></html>');
    sqlDocument.close();
    sqlText = sqlDocument.getElementById("sqlText");
    sqlStack = sqlDocument.getElementById("sqlStack");
    sqlIO = sqlDocument.getElementById("sqlIO");
    sqlText.value = text;
    if (typeof sqlStack != 'undefined' && Boolean(sqlStack))
        sqlStack.value = stack;
    if (typeof sqlIO != 'undefined' && Boolean(sqlIO))
        sqlIO.value = io;
    sqlWindow.focus();
}
function ddGetUTCTimeString(date) {
    var now;

    if (null == date)
        date = new Date;
    return String(date.getUTCFullYear()) + '-' + String(date.getUTCMonth() + 1) + '-' + String(date.getUTCDate()) + ' ' + String(date.getUTCHours()) + ':' + String(date.getUTCMinutes()) + ':' + String(date.getUTCSeconds()) + '.' + String(date.getUTCMilliseconds());
}
function ddGetDateFromJsonString(str) {
    var date;

    str = str.substr(1, str.length - 2);
    date = eval('new ' + str);
    return date;
}
function ddGetTimeWithMsFromServerString(str, datePart) {
    var date, ret;

    date = ddGetDateFromJsonString(str);
    ret = ddGetTimeWithMsFromDate(date, datePart);
    return ret;
}
function ddGetTimeWithMsFromDate(date, datePart) {
    var ret, dateStr;

    dateStr = Boolean(datePart) ? ddGetPaddedString2(date.getMonth() + 1) + '/' + ddGetPaddedString2(date.getDate()) + '/' + String(date.getFullYear()) + ' ' : '';
    ret = dateStr + ddGetPaddedString2(date.getHours()) + ':' + ddGetPaddedString2(date.getMinutes()) + ':' + ddGetPaddedString2(date.getSeconds()) + '.' + ddGetPaddedString3(date.getMilliseconds());
    return ret;
}
function ddGetPaddedString2(n) {
    return ddGetPaddedStringN(n, '0');
}
function ddGetPaddedString3(n) {
    return ddGetPaddedStringN(n, '00');
}
function ddGetPaddedStringN(n, zeroes) {
    var len, aux, ret;

    aux = String(n);
    len = aux.length;
    aux = zeroes + aux;
    ret = aux.slice(len - 1);
    return ret;
}
function GetAbsoluteX(el) {
    var x = 0;

    while (el != null) {
        x += el.offsetLeft;
        el = el.offsetParent;
    }
    return x;
}
function GetAbsoluteY(el) {
    var y = 0;

    while (el != null) {
        y += el.offsetTop;
        el = el.offsetParent;
    }
    return y;
}
function GetCurrentStyle(el, styleProp) {
    var style, ret;

    if ('undefined' !== typeof el.currentStyle) {
        ret = el.currentStyle[styleProp];
    }
    else if ('undefined' !== typeof window.getComputedStyle) {
        style = document.defaultView.getComputedStyle(el, null);
        ret = style.getPropertyValue(styleProp);
    }
    return ret;
}
function FALSE() {
    return false;
}
function MakeLink(displayText) {
    var el;

    el = document.createElement('A');
    el.href = 'javascript:;';
    el.onclick = FALSE;
    el.appendChild(document.createTextNode(displayText));
    return el;
}
function MakeLinkWithInfoText(displayText, info) {
    var span, link, text;

    span = document.createElement('SPAN');
    link = MakeLink(displayText);
    text = document.createTextNode(' (' + info + ')');
    span.appendChild(link);
    span.appendChild(text);
    return span;
}
function GetClientHeight(element, container) {
    var auxContainer, elemHeight;

    auxContainer = document.createElement('DIV');
    auxContainer.style.visible = 'false';
    auxContainer.appendChild(element);
    container.appendChild(auxContainer);
    elemHeight = element.clientHeight;
    auxContainer.removeChild(element);
    container.removeChild(auxContainer);
    return elemHeight;
}
var CSSUtil;
var EV_MOUSE_DOWN;
var EV_MOUSE_MOVE;
var EV_MOUSE_UP;

function RegisterEvent(el, evName, fn) {
    if ('undefined' === typeof el.addEventListener) {
        el.attachEvent('on' + evName, fn);
    }
    else {
        el.addEventListener(evName, fn, false);
    }
}
function UnregisterEvent(el, evName, fn) {
    if ('undefined' === typeof el.removeEventListener) {
        el.detachEvent('on' + evName, fn);
    }
    else {
        el.removeEventListener(evName, fn, false);
    }
}
function GetMouseCoords(ev) {
    if (ev.pageX) {
        return {
            x: ev.pageX,
            y: ev.pageY
        };
    }
    return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
function RegisterDrag(el, fn, fnOnStart) {
    RegisterEvent(el, EV_MOUSE_DOWN, StartDrag);
    function StartDrag(ev) {
        var body;

        body = document.body;
        RegisterEvent(body, EV_MOUSE_MOVE, fn);
        RegisterEvent(body, EV_MOUSE_UP, StopDrag);
        body.style.cursor = 'n-resize';
        if (null != fnOnStart)
            fnOnStart();
    }
    function StopDrag(ev) {
        var body;

        body = document.body;
        body.style.cursor = 'default';
        UnregisterEvent(body, EV_MOUSE_UP, StopDrag);
        UnregisterEvent(body, EV_MOUSE_MOVE, fn);
    }
}
function CreateDisplayText(text) {
    var el, iEl;

    el = document.createElement('DIV');
    iEl = document.createElement('I');
    iEl.appendChild(document.createTextNode(text));
    el.appendChild(iEl);
    el.className = 'ms-dd-req-loading';
    return el;
}
function ClearArea(el) {
    if (el.childNodes.length > 0)
        el.removeChild(el.childNodes[0]);
}
function ddListView(el, onSelect) {
    var elList, currSel, bOdd;

    bOdd = true;
    currSel = null;
    elList = document.createElement('DIV');
    elList.className = 'ms-dd-ListView';
    el.appendChild(elList);
    return {
        addRow: AddRow,
        clear: ClearRows,
        clearSelection: ClearSelection
    };
    function AddRow(elRow, key, scroll) {
        var elRowContainer, style;

        if (bOdd)
            style = 'ms-dd-ListView-Row ms-dd-ListView-Row-Odd';
        else
            style = 'ms-dd-ListView-Row';
        elRowContainer = document.createElement('DIV');
        elRowContainer.className = style;
        elRowContainer.onclick = SelectRow;
        elRowContainer.appendChild(elRow);
        elList.appendChild(elRowContainer);
        if (scroll)
            elRowContainer.scrollIntoView();
        bOdd = !bOdd;
        function SelectRow() {
            ClearSelection.call();
            CSSUtil.AddClass(elRowContainer, 'ms-dd-ListView-Row-Sel');
            currSel = elRowContainer;
            if (Boolean(onSelect))
                onSelect(key);
            return false;
        }
    }
    function ClearRows() {
        var i, len, elAux;

        len = elList.childNodes.length;
        for (i = 0; i < len; i++) {
            elAux = elList.firstChild;
            elList.removeChild(elAux);
            delete elAux.onclick;
            delete elAux;
        }
        bOdd = true;
    }
    function ClearSelection() {
        if (null != currSel) {
            CSSUtil.RemoveClass(currSel, 'ms-dd-ListView-Row-Sel');
        }
        currSel = null;
    }
}
function ddTabCtrl(el, onTabSwitch, onButtonClick) {
    var tabs, buttons, activeTab, tcRow, tcCellRight, tcFakeTab;

    tabs = {};
    buttons = {};
    activeTab = null;
    tcFakeTab = null;
    el.innerHTML = '';
    CreateTableElement();
    return {
        addTab: AddTab,
        addButton: AddButton
    };
    function CreateTableElement() {
        var tcTable, tcCellLeft;

        tcTable = document.createElement('TABLE');
        tcTable.className = 'ms-dd-TabCtrl';
        tcRow = document.createElement('TR');
        tcCellLeft = document.createElement('TD');
        tcCellLeft.className = 'ms-dd-TabLc';
        tcRow.appendChild(tcCellLeft);
        tcCellRight = document.createElement('TD');
        tcCellRight.className = 'ms-dd-TabRc';
        tcRow.appendChild(tcCellRight);
        tcFakeTab = CreateTab('[]', null);
        tcFakeTab.style.visible = 'false';
        tcRow.insertBefore(tcFakeTab, tcCellRight);
        tcTable.appendChild(tcRow);
        el.appendChild(tcTable);
    }
    function CreateTab(displayName, onClick) {
        var elTd, elA, elText;

        elTd = document.createElement('TD');
        elTd.className = 'ms-dd-Tab';
        elTd.unselectable = true;
        elA = document.createElement('A');
        elA.className = 'ms-dd-Tab';
        elA.title = displayName;
        elA.href = 'javascript:;';
        if (null != onClick)
            elA.onclick = onClick;
        elText = document.createTextNode(displayName);
        elA.appendChild(elText);
        elTd.appendChild(elA);
        return elTd;
    }
    function AddTab(tab) {
        var elTd;

        if (null != tcFakeTab) {
            tcRow.removeChild(tcFakeTab);
            tcFakeTab = null;
        }
        if (tab.name in tabs) {
            return false;
        }
        elTd = CreateTab(tab.displayName, OnClick);
        tcRow.insertBefore(elTd, tcCellRight);
        tabs[tab.name] = elTd;
        if (null == activeTab)
            SelectTab(tab);
        return true;
        function OnClick() {
            SelectTab(tab);
            return false;
        }
    }
    function SelectTab(tab) {
        var curTab;

        curTab = tabs[tab.name];
        if (undefined == curTab)
            return false;
        if (activeTab == curTab)
            return false;
        if (null != activeTab) {
            CSSUtil.RemoveClass(activeTab, 'ms-dd-TabActive');
        }
        CSSUtil.AddClass(curTab, 'ms-dd-TabActive');
        activeTab = curTab;
        if (Boolean(onTabSwitch))
            onTabSwitch(tab.name);
        return true;
    }
    function AddButton(button) {
        var elTd;

        if (button.name in buttons) {
            return false;
        }
        elTd = document.createElement('TD');
        elTd.className = 'ms-dd-Button';
        elTd.unselectable = true;
        elTd.onclick = OnClick;
        elTd.appendChild(button.el);
        tcRow.appendChild(elTd);
        buttons[button.name] = elTd;
        return true;
        function OnClick() {
            if (Boolean(onButtonClick))
                onButtonClick(button.name);
        }
    }
}
function ddTabCtrlEvents(el, fnInit, fnRender, fnGetViewportHeight) {
    var tabCtrl, tabs, buttons, tabContents, loadingEl, activeTab;

    loadingEl = ddTabCtrlEvents.createLoading();
    tabCtrl = ddTabCtrl(el, OnTabSwitch, OnButtonClick);
    tabs = {};
    buttons = {};
    tabContents = {};
    if (Boolean(fnInit))
        fnInit(tabCtrl);
    return {
        addTab: AddTab,
        addButton: AddButton,
        getActive: GetActiveTab
    };
    function AddTab(tab) {
        var bOk;

        if (tab.name in tabs)
            return false;
        tabs[tab.name] = tab;
        bOk = tabCtrl.addTab({
            name: tab.name,
            displayName: tab.displayName
        });
        window.setTimeout(function() {
            if (tab.name in tabContents)
                return;
            LoadInitialContents(tab);
        }, 0);
        return bOk;
    }
    function AddButton(button) {
        if (button.name in buttons)
            return;
        buttons[button.name] = button;
        tabCtrl.addButton(button);
    }
    function GetActiveTab() {
        return activeTab;
    }
    function OnTabSwitch(tabName) {
        var sync, tab, tc;

        DispatchTabAction(ddTabCtrlEvents.ACTION_BLUR);
        tab = tabs[tabName];
        tc = tabContents[tabName];
        sync = '_syncInit' in tab;
        if (undefined == tc) {
            InvokeRender(loadingEl);
            if (sync) {
                LoadAndRender();
            }
            else {
                window.setTimeout(LoadAndRender, 0);
            }
        }
        else {
            InvokeRender(tc);
        }
        activeTab = tab;
        function LoadAndRender() {
            var tabEl;

            tabEl = LoadInitialContents(tab);
            if (null != tabEl)
                InvokeRender(tabEl);
        }
        DispatchTabAction(ddTabCtrlEvents.ACTION_FOCUS);
    }
    function LoadInitialContents(tab) {
        var height, tabEl;

        if (!Boolean(tab.init))
            return null;
        if (Boolean(fnGetViewportHeight))
            height = fnGetViewportHeight();
        else
            height = 0;
        tabEl = tab.init(height);
        if (!Boolean(tabEl))
            return null;
        tab._init = true;
        tabContents[tab.name] = tabEl;
        return tabEl;
    }
    function OnButtonClick(buttonName) {
        if (!(buttonName in buttons))
            return;
        DispatchTabAction(buttonName);
    }
    function DispatchTabAction(button) {
        if (!Boolean(activeTab) || !Boolean(activeTab[button]))
            return;
        activeTab[button]();
    }
    function InvokeRender(lEl) {
        if (Boolean(fnRender))
            fnRender(lEl);
    }
}
function ddVSplitView(el, resizable, topHeight) {
    var elTop, elBottom, elSplit, maxHeight;
    var cbResize;
    var resizing = false;

    SetContainerHeight();
    el.innerHTML = '';
    if (-1 == topHeight) {
        topHeight = maxHeight >> 1;
    }
    elTop = document.createElement('DIV');
    elTop.className = 'ms-dd-VSplitView-Top';
    elTop.style.height = String(topHeight) + 'px';
    el.appendChild(elTop);
    if (resizable) {
        elSplit = document.createElement('DIV');
        elSplit.className = 'ms-dd-VSplitView-Grip';
        RegisterDrag(elSplit, MoveSplit, SetContainerHeight);
        el.appendChild(elSplit);
    }
    else {
        elSplit = null;
    }
    elBottom = document.createElement('DIV');
    SetBottomHeight(maxHeight, topHeight);
    el.appendChild(elBottom);
    return {
        top: elTop,
        bottom: elBottom,
        setResizeCallback: SetCallbackResize,
        redraw: Redraw
    };
    function SetBottomHeight(height, lTopHeight) {
        var bh, bhs;

        bh = GetBottomSize(height, lTopHeight, elSplit);
        bhs = String(bh) + 'px';
        elBottom.style.height = bhs;
        return bh;
    }
    function MoveSplit(ev) {
        var mp, tY, hd;

        ev = Boolean(ev) ? ev : window.event;
        mp = GetMouseCoords(ev);
        tY = GetAbsoluteY(elTop);
        hd = mp.y - tY;
        if (hd > 0 && hd < maxHeight) {
            ResizeElements(maxHeight, hd);
        }
        return false;
    }
    function ResizeElements(totalHeight, lTopHeight) {
        var bh;

        resizing = true;
        elTop.style.height = String(lTopHeight) + 'px';
        bh = SetBottomHeight(totalHeight, lTopHeight);
        if (Boolean(cbResize))
            cbResize({
                topHeight: lTopHeight,
                bottomHeight: bh
            });
        resizing = false;
    }
    function GetContainerHeight() {
        var h;

        h = el.scrollHeight;
        return h;
    }
    function SetContainerHeight() {
        maxHeight = GetContainerHeight();
    }
    function OnContainerResize(newH) {
        var newTopH;

        if (resizing)
            return;
        newTopH = topHeight;
        ResizeElements(newH, newTopH);
        maxHeight = newH;
        topHeight = newTopH;
    }
    function Redraw(height) {
        OnContainerResize(height);
    }
    function SetCallbackResize(fn) {
        cbResize = fn;
    }
}
function GetBottomSize(totalHeight, lTopHeight, resizeEl) {
    var rh, bh;

    if (null != resizeEl) {
        rh = resizeEl.offsetHeight;
    }
    else {
        rh = 0;
    }
    if (0 == totalHeight)
        bh = lTopHeight - rh;
    else
        bh = totalHeight - lTopHeight - rh;
    return bh;
}
function ddClusteredImage(imageInfo) {
    var elImg, elA, elSpan, aux;

    elSpan = document.createElement('SPAN');
    elSpan.className = 'ms-dd-clust';
    SetSize(elSpan, imageInfo);
    if (imageInfo.useLink) {
        elA = document.createElement('A');
        elA.className = 'ms-dd-clust';
        elA.href = 'javascript:;';
        elA.onclick = FALSE;
        elA.title = imageInfo.linkTitle;
        SetSize(elA, imageInfo);
    }
    elImg = document.createElement('IMG');
    elImg.src = imageInfo.imageUrl;
    elImg.className = 'ms-dd-clust';
    SetOffset(imageInfo.left, imageInfo.top);
    if (imageInfo.useLink) {
        elA.appendChild(elImg);
        aux = elA;
    }
    else {
        aux = elImg;
    }
    elSpan.appendChild(aux);
    return {
        el: elSpan,
        setOffset: SetOffset,
        setTitle: SetTitle
    };
    function SetSize(el, info) {
        el.style.width = String(info.width) + 'px';
        el.style.height = String(info.height) + 'px';
    }
    function SetOffset(x, y) {
        elImg.style.left = '-' + String(x) + 'px';
        elImg.style.top = '-' + String(y) + 'px';
    }
    function SetTitle(title) {
        elA.title = title;
    }
}
function ddGanttView(startTime, totalTime, ratio, barLeftColumns, barRightColumns) {
    var level, ganttEl;

    ganttEl = document.createElement('DIV');
    ganttEl.className = 'ms-dd-GanttView';
    AddTitle(barLeftColumns, barRightColumns);
    level = 0;
    if (!Boolean(ratio))
        ratio = 3;
    return {
        el: ganttEl,
        addRow: AddRow,
        endRow: EndRow
    };
    function AddRow(displayText, start, end, barLeftColumnsValues, barRightColumnsValues, useSpecialStyle) {
        var rowLen, rowStart, rowEl, rowCycles, contEl, cellWrapEl, nameEl, barEl, startTimeEl, totalTimeEl, colEl, len, i;

        rowLen = end - start;
        rowStart = start - startTime;
        rowEl = document.createElement('DIV');
        rowEl.className = 'ms-dd-GanttView-Row';
        if (undefined != barLeftColumnsValues && null != barLeftColumnsValues) {
            len = barLeftColumnsValues.length;
            for (i = 0; i < len; i++) {
                colEl = document.createElement('DIV');
                colEl.className = 'ms-dd-GanttView-Text';
                if (useSpecialStyle) {
                    colEl.className += ' ms-dd-GanttView-Text-Green';
                }
                else {
                    colEl.className += ' ms-dd-GanttView-Text-Blue';
                }
                colEl.appendChild(document.createTextNode(barLeftColumnsValues[i]));
                rowEl.appendChild(colEl);
            }
        }
        contEl = document.createElement('DIV');
        contEl.className = 'ms-dd-GanttView-Cont';
        rowEl.appendChild(contEl);
        cellWrapEl = document.createElement('DIV');
        cellWrapEl.className = 'ms-dd-GanttView-CellWrap';
        contEl.appendChild(cellWrapEl);
        nameEl = document.createElement('SPAN');
        nameEl.className = 'ms-dd-GanttView-Name';
        nameEl.style.paddingLeft = String(10 * level) + 'px';
        nameEl.appendChild(document.createTextNode(displayText));
        cellWrapEl.appendChild(nameEl);
        barEl = document.createElement('DIV');
        barEl.className = 'ms-dd-GanttView-Bar';
        if (-1 != ratio) {
            barEl.style.width = String(rowLen / ratio + 1) + 'px';
            barEl.style.left = String(rowStart / ratio) + 'px';
        }
        else {
            barEl.style.width = String(100 * rowLen / totalTime) + '%';
            barEl.style.left = String(100 * rowStart / totalTime) + '%';
        }
        barEl.appendChild(document.createTextNode('\u00a0'));
        cellWrapEl.appendChild(barEl);
        startTimeEl = document.createElement('DIV');
        startTimeEl.className = 'ms-dd-GanttView-Text';
        startTimeEl.appendChild(document.createTextNode(String(rowStart)));
        rowEl.appendChild(startTimeEl);
        totalTimeEl = document.createElement('DIV');
        totalTimeEl.className = 'ms-dd-GanttView-Text';
        totalTimeEl.appendChild(document.createTextNode(String(rowLen)));
        rowEl.appendChild(totalTimeEl);
        if (undefined != barRightColumnsValues && null != barRightColumnsValues) {
            len = barRightColumnsValues.length;
            for (i = 0; i < len; i++) {
                colEl = document.createElement('DIV');
                colEl.className = 'ms-dd-GanttView-Text';
                colEl.appendChild(document.createTextNode(barRightColumnsValues[i]));
                rowEl.appendChild(colEl);
            }
        }
        ganttEl.appendChild(rowEl);
        level++;
    }
    function EndRow() {
        if (0 == level)
            return;
        level--;
    }
    function AddTitle(leftColumns, rightColumns) {
        var rowEl, i, len;

        rowEl = document.createElement('DIV');
        rowEl.className = 'ms-dd-GanttView-Row';
        if (Boolean(leftColumns)) {
            len = leftColumns.length;
            for (i = 0; i < len; i++) {
                AddTitleCell(leftColumns[i], 'ms-dd-GanttView-Text');
            }
        }
        AddTitleCell(Strings.DevDash.Scopes_Name, 'ms-dd-GanttView-Cont');
        AddTitleCell(Strings.DevDash.Scopes_StartTime, 'ms-dd-GanttView-Text');
        AddTitleCell(Strings.DevDash.Scopes_Duration, 'ms-dd-GanttView-Text');
        if (Boolean(rightColumns)) {
            len = rightColumns.length;
            for (i = 0; i < len; i++) {
                AddTitleCell(rightColumns[i], 'ms-dd-GanttView-Text');
            }
        }
        ganttEl.appendChild(rowEl);
        function AddTitleCell(text, className) {
            var el;

            el = document.createElement('DIV');
            el.className = className + ' ms-dd-TableView-Title';
            el.appendChild(document.createTextNode(text));
            rowEl.appendChild(el);
        }
    }
}
function ddTableView(el, onSelect, columns) {
    var tblEl, tblHEl, elRows, currSel, bOdd;

    bOdd = true;
    currSel = null;
    tblEl = document.createElement('TABLE');
    tblEl.className = 'ms-dd-Table';
    tblHEl = CreateTableHeaderElement(columns);
    tblEl.appendChild(tblHEl);
    elRows = document.createElement('TBODY');
    elRows.className = 'ms-dd-TableView';
    el.appendChild(tblEl);
    tblEl.appendChild(elRows);
    return {
        addRow: AddRow,
        clear: ClearRows,
        clearSelection: ClearSelection
    };
    function AddRow(key, elements) {
        var elRow, style;

        if (bOdd)
            style = 'ms-dd-TableView-Row ms-dd-TableView-Row-Odd';
        else
            style = 'ms-dd-TableView-Row';
        elRow = document.createElement('TR');
        elRow.className = style;
        AddColumns(elements, elRow);
        if (Boolean(elRow.firstChild)) {
            elRow.firstChild.onclick = SelectRow;
        }
        elRows.appendChild(elRow);
        bOdd = !bOdd;
        function SelectRow() {
            ClearSelection();
            CSSUtil.AddClass(elRow, 'ms-dd-TableView-Row-Sel');
            currSel = elRow;
            if (Boolean(onSelect))
                onSelect(key);
            return false;
        }
    }
    function AddColumns(elements, line) {
        var curr, td, i, len;

        len = elements.length;
        for (i = 0; i < len; i++) {
            curr = elements[i];
            td = document.createElement('TD');
            td.className = 'ms-dd-TableView-Cell';
            td.appendChild(curr);
            line.appendChild(td);
        }
    }
    function ClearRows() {
        var i, len, elAux;

        len = elRows.childNodes.length;
        for (i = 0; i < len; i++) {
            elAux = elRows.firstChild;
            elRows.removeChild(elAux);
            delete elAux.onclick;
            delete elAux;
        }
        bOdd = true;
    }
    function ClearSelection() {
        if (null != currSel) {
            CSSUtil.RemoveClass(currSel, 'ms-dd-TableView-Row-Sel');
        }
        currSel = null;
    }
    function CreateTableHeaderElement(columnsParam) {
        var thead, tr, th, len, i;

        thead = document.createElement('THEAD');
        tr = document.createElement('TR');
        len = columnsParam.length;
        for (i = 0; i < len; i++) {
            th = CreateHeaderElement(columnsParam[i]);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        return thead;
    }
    function CreateHeaderElement(nameParam) {
        var header;

        header = document.createElement('TH');
        header.className = 'ms-dd-TableView-Title';
        header.appendChild(document.createTextNode(nameParam));
        return header;
    }
}
var DeveloperDashboard;

function DevDashOOB() {
    var domEl, vsplitModes, teoModes, pauseButton, msgHandlers, tabsHeight, tabsContainer;

    msgHandlers = {};
    domEl = document.getElementById('ddWnd');
    tabsContainer = document.createElement('DIV');
    teoModes = ddTabCtrlEvents(tabsContainer, null, ModeTabsRender, ModeTabsGetViewportHeight);
    ModeTabsInit(teoModes);
    tabsHeight = GetClientHeight(tabsContainer, domEl);
    vsplitModes = ddVSplitView(domEl, false, tabsHeight);
    vsplitModes.top.appendChild(tabsContainer);
    DeveloperDashboard = {
        Modes: {
            Add: AddMode
        },
        Messaging: {
            Subscribe: Subscribe,
            PostMsg: RouteMessage
        }
    };
    Subscribe('MS.DevDash', {
        receiveMsg: null,
        Pause: Pause,
        Resume: Resume
    });
    window.onresize = OnResize;
    window.setTimeout(OnResize, 0);
    function AddMode(tab) {
        if (tab.name in msgHandlers)
            return false;
        if (!(DevDashOOB.RECEIVEMSG in tab))
            return false;
        Subscribe(tab.name, tab);
        teoModes.addTab(tab);
        return true;
    }
    function Subscribe(lName, handler) {
        if (lName in msgHandlers)
            return false;
        msgHandlers[lName] = handler;
        return true;
    }
    function RouteMessage(to, subject, msg) {
        var handler;

        if (!(to in msgHandlers))
            return false;
        handler = msgHandlers[to];
        if (subject in handler) {
            window.setTimeout(function() {
                handler[subject](msg);
            }, 0);
        }
        else {
            window.setTimeout(function() {
                handler[DevDashOOB.RECEIVEMSG](subject, msg);
            }, 0);
        }
        return true;
    }
    function Pause() {
        pauseButton.setOffset(0, 0);
        pauseButton.setTitle(Strings.DevDash.OOB_Resume);
    }
    function Resume() {
        pauseButton.setOffset(0, 16);
        pauseButton.setTitle(Strings.DevDash.OOB_Pause);
    }
    function ModeTabsInit(tabCtrl) {
        var refreshButton, clearButton;

        refreshButton = ddClusteredImage({
            imageUrl: '/_layouts/15/images/DevDash15.png',
            top: 16,
            left: 16,
            height: 16,
            width: 16,
            useLink: true,
            linkTitle: Strings.DevDash.OOB_Refresh
        });
        pauseButton = ddClusteredImage({
            imageUrl: '/_layouts/15/images/DevDash15.png',
            top: 16,
            left: 0,
            height: 16,
            width: 16,
            useLink: true,
            linkTitle: Strings.DevDash.OOB_Pause
        });
        clearButton = ddClusteredImage({
            imageUrl: '/_layouts/15/images/DevDash15.png',
            top: 0,
            left: 16,
            height: 16,
            width: 16,
            useLink: true,
            linkTitle: Strings.DevDash.OOB_Clear
        });
        tabCtrl.addButton({
            name: ddTabCtrlEvents.ACTION_REFRESH,
            el: refreshButton.el
        });
        tabCtrl.addButton({
            name: ddTabCtrlEvents.ACTION_PAUSE,
            el: pauseButton.el
        });
        tabCtrl.addButton({
            name: ddTabCtrlEvents.ACTION_CLEAR,
            el: clearButton.el
        });
    }
    function ModeTabsRender(el) {
        var v;

        v = vsplitModes.bottom;
        if (v.childNodes.length > 0)
            v.removeChild(v.childNodes[0]);
        v.appendChild(el);
    }
    function ModeTabsGetViewportHeight() {
        var height;

        height = vsplitModes.bottom.scrollHeight;
        return height;
    }
    function OnResize() {
        var h, activeTab;

        h = domEl.clientHeight;
        vsplitModes.redraw(h);
        activeTab = teoModes.getActive();
        if (Boolean(activeTab) && Boolean(activeTab.onResize))
            activeTab.onResize();
    }
}
var ScopeUtils;
var DiagnosticsDataDepot;
var DiagnosticsDataProvider;

$_global_devdash();
