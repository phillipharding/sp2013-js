Type.registerNamespace('SP');
if (typeof IEnumerator == "undefined") {
    var IEnumerator = function() {
    };

    IEnumerator.prototype = {
        get_current: null,
        moveNext: null,
        reset: null
    };
    IEnumerator.registerInterface("IEnumerator");
}
if (typeof IEnumerable == "undefined") {
    var IEnumerable = function() {
    };

    IEnumerable.prototype = {
        getEnumerator: null
    };
    IEnumerable.registerInterface("IEnumerable");
}
if (typeof IDisposable == "undefined") {
    var IDisposable = function() {
    };

    IDisposable.prototype = {
        dispose: null
    };
    IDisposable.registerInterface("IDisposable");
}
SP.EnumerableArray = function SP_EnumerableArray(array) {
    if (array == null)
        array = [];
    this._m_array = array;
};
SP.EnumerableArray.prototype = {
    _m_array: null,
    getEnumerator: function SP_EnumerableArray$getEnumerator() {
        return new SP._arrayEnumerator(this._m_array);
    },
    get_length: function SP_EnumerableArray$get_length() {
        return this._m_array.length;
    },
    get_count: function SP_EnumerableArray$get_count() {
        return this._m_array.length;
    },
    add: function SP_EnumerableArray$add(obj) {
        this._m_array.push(obj);
    },
    addRange: function SP_EnumerableArray$addRange(items) {
        Array.addRange(this._m_array, items);
    },
    clear: function SP_EnumerableArray$clear() {
        this._m_array.length = 0;
    },
    contains: function SP_EnumerableArray$contains(item) {
        return Array.contains(this._m_array, item);
    },
    indexOf: function SP_EnumerableArray$indexOf(item, start) {
        return Array.indexOf(this._m_array, item, start);
    },
    insert: function SP_EnumerableArray$insert(index, item) {
        Array.insert(this._m_array, index, item);
    },
    remove: function SP_EnumerableArray$remove(item) {
        Array.remove(this._m_array, item);
    },
    removeAt: function SP_EnumerableArray$removeAt(index) {
        Array.removeAt(this._m_array, index);
    },
    toArray: function SP_EnumerableArray$toArray() {
        return this._m_array;
    },
    toArrayList: function SP_EnumerableArray$toArrayList() {
        return this._m_array;
    }
};
SP._arrayEnumerator = function SP__arrayEnumerator(array) {
    this._m_array = array;
    this._m_index = -1;
    this.current = null;
};
SP._arrayEnumerator.prototype = {
    _m_index: 0,
    _m_array: null,
    get_current: function SP__arrayEnumerator$get_current() {
        return this._m_array[this._m_index];
    },
    moveNext: function SP__arrayEnumerator$moveNext() {
        this._m_index++;
        this.current = this._m_array[this._m_index];
        return this._m_index < this._m_array.length;
    },
    reset: function SP__arrayEnumerator$reset() {
        this.current = null;
        this._m_index = -1;
    }
};
SP.EnumerableArray.registerClass('SP.EnumerableArray', null, IEnumerable);
SP._arrayEnumerator.registerClass('SP._arrayEnumerator', null, IEnumerator);
Type.registerNamespace('SP');
SP.BWsaStreamTypes = function() {
};
SP.BWsaStreamTypes.prototype = {
    static: 1,
    cyclic: 2
};
SP.BWsaStreamTypes.registerEnum('SP.BWsaStreamTypes', false);
SP.SQMDP = function() {
};
SP.SQMDP.prototype = {
    none: 0,
    dataiD_SESSION_TYPE: 60,
    dataiD_BSQM_BROWSERINFO: 7982,
    dataiD_BSQM_MAXSTREAMROWS: 7993,
    dataiD_BSQM_MAXLSTREAMROWSOVERWRITTEN: 7994,
    dataiD_BSQM_MAXSTREAMROWSOVERWRITTENSTREAMID: 8047,
    dataiD_BSQM_MAXSTREAMROWSSTREAMID: 8048,
    dataiD_BSQM_OSDATA: 8049,
    dataiD_BSQM_COMMANDUIACTION: 8327,
    dataiD_BSQM_INVALIDVALUEDP: 8763,
    dataiD_OFFICESQMSESSIONTYPE: 8814,
    dataiD_BSQM_SCREENRESOLUTION: 9411,
    dataiD_BSQM_MOBILEDEVICE: 9412,
    dataiD_DOCUMENTID: 9797,
    dataiD_BSQMDOCUMENTID: 10273
};
SP.SQMDP.registerEnum('SP.SQMDP', false);
SP.BWsaConfig = function SP_BWsaConfig() {
    this.$n_0 = [60, 7982, 7993, 7994, 8047, 8048, 8049, 9411, 9412];
    this.$Y_0 = '';
    this.$6_0 = false;
    this.$A_0 = false;
    this.$y_0 = null;
    this.$h_0 = 1800000;
    this.$w_0 = 65536;
    this.$i_0 = 2147483647;
    this.$1A_0 = 9;
    this.$1B_0 = 1000;
    this.$x_0 = 1000;
};
SP.BWsaConfig.prototype = {
    $Y_0: null,
    $6_0: false,
    $A_0: false,
    $y_0: null,
    $h_0: 0,
    $w_0: 0,
    $i_0: 0,
    $1B_0: 0,
    $x_0: 0,
    $1A_0: 0,
    get_maxSessionMs: function SP_BWsaConfig$get_maxSessionMs() {
        return this.$h_0;
    },
    set_maxSessionMs: function SP_BWsaConfig$set_maxSessionMs(value) {
        this.$h_0 = value;
        return value;
    },
    get_uploadUrl: function SP_BWsaConfig$get_uploadUrl() {
        return this.$Y_0;
    }
};
SP.Ticks = function SP_Ticks() {
};
SP.Ticks.getTicks32 = function SP_Ticks$getTicks32() {
    var $v_0 = new Date();
    var $v_1 = $v_0.getTime();

    if (!SP.Ticks.$k) {
        SP.Ticks.$k = $v_1;
    }
    return 1 + $v_1 - SP.Ticks.$k & 2147483647;
};
SP.Ticks.getTicks64 = function SP_Ticks$getTicks64() {
    var $v_0 = new Date();
    var $v_1 = $v_0.getTime();

    $v_1 = $v_1 + 11644473600000;
    $v_1 = $v_1 * 10000;
    return $v_1;
};
SP.TimerResetCheck = function SP_TimerResetCheck() {
};
SP.TimerResetCheck.isTimerResetNeeded = function SP_TimerResetCheck$isTimerResetNeeded() {
    var $v_0 = false;
    var $v_1 = new Date();
    var $v_2 = $v_1.getTime();

    if (!SP.TimerResetCheck.$f || $v_2 - SP.TimerResetCheck.$f > 60000) {
        $v_0 = true;
        SP.TimerResetCheck.$f = $v_2;
    }
    return $v_0;
};
SP.StreamRowCounters = function SP_StreamRowCounters() {
};
SP.BWsaDatapoint = function SP_BWsaDatapoint($p0) {
    this.m_WsaId = $p0;
    this.m_Value = 0;
    this.m_Ticks = SP.Ticks.getTicks32();
    this.m_Count = 0;
    this.m_Sum = 0;
};
SP.BWsaDatapoint.prototype = {
    m_WsaId: 0,
    m_Value: 0,
    m_Ticks: 0,
    m_Count: 0,
    m_Sum: 0
};
SP.WsaStreamRow = function SP_WsaStreamRow($p0) {
    this.m_Ticks = SP.Ticks.getTicks32();
    this.m_Values = new Array($p0);
};
SP.WsaStreamRow.prototype = {
    m_Ticks: 0,
    m_Values: null
};
SP.BWsaStream = function SP_BWsaStream($p0, $p1, $p2, $p3) {
    if ($p3 < 1 || $p3 > 1000) {
        $p3 = 1000;
    }
    this.m_WsaId = $p0;
    this.m_StreamType = $p1;
    this.m_Width = $p2;
    this.m_MaxRows = $p3;
    this.m_RowCount = 0;
    this.m_RowsOverwritten = 0;
    this.m_Rows = {};
};
SP.BWsaStream.prototype = {
    m_WsaId: 0,
    m_StreamType: 0,
    m_Width: 0,
    m_MaxRows: 0,
    m_RowCount: 0,
    m_RowsOverwritten: 0,
    m_Rows: null
};
SP.BWsaHeader = function SP_BWsaHeader() {
    this.m_StartTime = SP.Ticks.getTicks64();
    this.m_EndTime = 0;
};
SP.BWsaHeader.prototype = {
    m_StartTime: 0,
    m_EndTime: 0,
    m_CorrelationId: null
};
SP.BWsaData = function SP_BWsaData() {
    this.m_cDataPoints = 0;
    this.m_cStreams = 0;
    this.m_cbStreams = 0;
    this.m_wsaHeader = new SP.BWsaHeader();
    this.m_wsaDatapoints = {};
    this.m_wsaStreams = {};
};
SP.BWsaData.prototype = {
    m_cDataPoints: 0,
    m_cStreams: 0,
    m_cbStreams: 0,
    m_wsaHeader: null,
    m_wsaDatapoints: null,
    m_wsaStreams: null
};
SP.BWsaClient = function SP_BWsaClient(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints) {
    this.$$d_$1L_0 = Function.createDelegate(this, this.$1L_0);
    this.bWsaClientInit(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints);
};
SP.BWsaClient.$1O = function SP_BWsaClient$$1O() {
    var $v_0 = 0;
    var $v_1 = window.navigator.userAgent;
    var $v_2 = -1;

    if (($v_2 = $v_1.indexOf(' MSIE ')) > -1) {
        $v_2 += 6;
        $v_0 = 2 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Firefox/')) > -1) {
        $v_2 += 9;
        $v_0 = 3 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Chrome/')) > -1) {
        $v_2 += 8;
        $v_0 = 6 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Safari/')) > -1 && ($v_2 = $v_1.indexOf(' Version/')) > -1) {
        $v_2 += 9;
        $v_0 = 4 << 24;
    }
    else if (($v_2 = $v_1.indexOf('Opera/')) > -1) {
        $v_2 += 6;
        $v_0 = 5 << 24;
    }
    else {
        $v_0 = 1 << 24;
        $v_2 = -1;
    }
    if ($v_2 >= 0) {
        var $v_3 = SP.BWsaClient.$17($v_1.substr($v_2));

        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && $v_3[0] === 7 && $v_1.indexOf('Trident/4.0') >= 0) {
            $v_3[0] = 8;
        }
        $v_0 = $v_0 | ($v_3[0] << 16) + $v_3[1];
    }
    try {
        if (window.navigator.cookieEnabled) {
            $v_0 = $v_0 | 1073741824;
        }
        else {
            $v_0 = $v_0 | 1610612736;
        }
    }
    catch ($$e_4) { }
    $v_0 = $v_0;
    return $v_0;
};
SP.BWsaClient.$17 = function SP_BWsaClient$$17($p0) {
    var $v_0 = [0, 0];

    if (SP.BWsaClient.$t($p0.charAt(0))) {
        $v_0[0] = parseInt($p0);
    }
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        if (!SP.BWsaClient.$t($p0.charAt($v_1))) {
            $p0 = $p0.substr($v_1 + 1);
            break;
        }
    }
    if (SP.BWsaClient.$t($p0.charAt(0))) {
        $v_0[1] = parseInt($p0);
    }
    if ($v_0[0] < 0 || $v_0[0] > 255 || $v_0[1] < 0 || $v_0[1] > 65535) {
        $v_0[0] = 0;
        $v_0[1] = 0;
    }
    return $v_0;
};
SP.BWsaClient.$1Q = function SP_BWsaClient$$1Q() {
    var $v_0 = 0;
    var $v_1 = 1;
    var $v_2 = window.navigator.userAgent;

    if ($v_2.indexOf('Windows CE') >= 0) {
        $v_1 = 3;
    }
    else if ($v_2.indexOf('Windows') >= 0) {
        $v_1 = 2;
    }
    else if ($v_2.indexOf('PPC') >= 0 || $v_2.indexOf('Macintosh') >= 0) {
        $v_1 = 4;
    }
    else if ($v_2.indexOf('iPhone;') >= 0 || $v_2.indexOf('iPad;') >= 0 || $v_2.indexOf('iPod;') >= 0) {
        $v_1 = 7;
    }
    else if ($v_2.indexOf('SunOS') >= 0) {
        $v_1 = 5;
    }
    else if ($v_2.indexOf('Linux') >= 0) {
        $v_1 = 6;
    }
    $v_0 = $v_1 << 24;
    var $v_3 = 'Windows NT ';

    if ($v_1 === 7) {
        $v_3 = ' OS ';
    }
    var $v_4 = $v_2.indexOf($v_3);

    if ($v_4 < 0) {
        $v_3 = 'Mac OS X ';
        $v_4 = $v_2.indexOf($v_3);
    }
    if ($v_4 >= 0) {
        var $v_6 = SP.BWsaClient.$17($v_2.substr($v_4 + $v_3.length));

        $v_0 = $v_0 + (($v_6[0] << 16) + $v_6[1]);
    }
    var $v_5 = 0;

    try {
        var $v_7 = window.navigator.platform;

        if ($v_2.indexOf('WOW64') !== -1) {
            $v_5 = 2;
        }
        else if ($v_7 === 'Win64') {
            $v_5 = 3;
        }
        else if ($v_7 === 'Win32' || $v_7 === 'Linux i686') {
            $v_5 = 1;
        }
    }
    catch ($$e_8) { }
    $v_0 = $v_0 | $v_5 << 29;
    return $v_0;
};
SP.BWsaClient.$1R = function SP_BWsaClient$$1R() {
    var $v_0 = window.screen.width & 65535;
    var $v_1 = window.screen.height & 65535;

    return ($v_1 << 16) + $v_0;
};
SP.BWsaClient.$1P = function SP_BWsaClient$$1P() {
    var $v_0 = window.navigator.userAgent;
    var $v_1 = 0;

    if ($v_0.indexOf('iPhone;') >= 0) {
        $v_1 = 1;
    }
    else if ($v_0.indexOf('iPad;') >= 0) {
        $v_1 = 2;
    }
    else if ($v_0.indexOf('iPod;') >= 0) {
        $v_1 = 3;
    }
    return $v_1;
};
SP.BWsaClient.$t = function SP_BWsaClient$$t($p0) {
    return $p0 >= '0' && $p0 <= '9';
};
SP.BWsaClient.getSQMLocationFromCUICommandInfo = function SP_BWsaClient$getSQMLocationFromCUICommandInfo(commandInfo) {
    if (!commandInfo) {
        return 0;
    }
    var $v_0 = 0;
    var $v_1 = commandInfo['RootType'];
    var $v_2 = commandInfo['RootLocation'];

    if ($v_1) {
        if ($v_1 === 'Ribbon') {
            if ($v_2 === 'LowerRibbon') {
                $v_0 = 2;
            }
            else if ($v_2 === 'UpperRibbon') {
                $v_0 = 1;
            }
        }
        else if ($v_1 === 'QAT') {
            $v_0 = 3;
        }
        else if ($v_1 === 'Jewel') {
            $v_0 = 4;
        }
        else if ($v_1 === 'ContextMenu') {
            $v_0 = 19;
        }
    }
    return $v_0;
};
SP.BWsaClient.calcActionId = function SP_BWsaClient$calcActionId(actionName) {
    var $v_0 = 5381;
    var $v_1 = $v_0;
    var $v_2 = actionName.length;

    for (var $v_6 = 0; $v_6 < $v_2; $v_6 += 2) {
        $v_0 = (($v_0 << 5) + $v_0 ^ actionName.charCodeAt($v_6)) & 4294967295;
        if ($v_6 === $v_2 - 1) {
            break;
        }
        $v_1 = (($v_1 << 5) + $v_1 ^ actionName.charCodeAt($v_6 + 1)) & 4294967295;
    }
    var $v_3 = $v_1 * 35685;
    var $v_4 = $v_1 * 23896 << 16;
    var $v_5 = $v_0 + $v_3 + $v_4 & 4294967295;

    if ($v_5 < 0) {
        $v_5 += 4294967296;
    }
    return $v_5;
};
SP.BWsaClient.prototype = {
    bWsaClientInit: function SP_BWsaClient$bWsaClientInit(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints) {
        this.$1_0 = new SP.BWsaData();
        this.$0_0 = new SP.BWsaConfig();
        this.$v_0 = false;
        this.$g_0 = 0;
        this.$Q_0 = 0;
        this.$X_0 = false;
        this.$W_0 = {};
        for (var $v_0 = 0; $v_0 < this.$0_0.$n_0.length; $v_0++) {
            this.$W_0[this.$0_0.$n_0[$v_0]] = true;
        }
        this.$0_0.$Y_0 = uploadUrl;
        this.$0_0.$6_0 = uploadUrl === '' ? false : fIsOptedIn;
        this.$0_0.$A_0 = sqmQosEnabled && !!qosDataPoints;
        this.$0_0.$y_0 = qosDataPoints;
    },
    $1_0: null,
    $0_0: null,
    $v_0: false,
    $g_0: 0,
    $Q_0: 0,
    $X_0: false,
    $W_0: null,
    $M_0: null,
    $1S_0: function SP_BWsaClient$$1S_0() {
        var $v_0 = new SP.BWsaData();
        var $$dict_1 = this.$W_0;

        for (var $$key_2 in $$dict_1) {
            var $v_1 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };
            var $v_2 = $v_1.key;
            var $v_3 = this.$1_0.m_wsaDatapoints[$v_2];

            if ($v_3) {
                var $v_4 = new SP.BWsaDatapoint(parseInt($v_2));

                $v_4.m_Value = $v_3.m_Value;
                $v_4.m_Count = $v_3.m_Count;
                $v_4.m_Sum = $v_3.m_Sum;
                $v_0.m_wsaDatapoints[$v_2] = $v_4;
                $v_0.m_cDataPoints++;
            }
        }
        $v_0.m_wsaHeader.m_CorrelationId = this.$1_0.m_wsaHeader.m_CorrelationId;
        this.$1_0 = $v_0;
        this.$X_0 = false;
    },
    $10_0: function SP_BWsaClient$$10_0() {
        var $v_0 = this.$1_0.m_cDataPoints * SP.BWsaClient.$a + this.$1_0.m_cbStreams;

        if ($v_0 >= this.$0_0.$w_0) {
            this.uploadWsaData();
            $v_0 = this.$1_0.m_cDataPoints * SP.BWsaClient.$a + this.$1_0.m_cbStreams;
            return $v_0 >= this.$0_0.$w_0;
        }
        return false;
    },
    $1E_0: function SP_BWsaClient$$1E_0($p0) {
        try {
            if (this.$X_0 || this.$W_0[$p0]) {
                return;
            }
            this.$X_0 = true;
            this.$U_0(7982, SP.BWsaClient.$1O());
            this.$U_0(8049, SP.BWsaClient.$1Q());
            this.$U_0(8814, 3);
            this.$U_0(9411, SP.BWsaClient.$1R());
            this.$U_0(9412, SP.BWsaClient.$1P());
        }
        catch ($$e_1) { }
    },
    $19_0: function SP_BWsaClient$$19_0($p0) {
        if (this.$0_0.$6_0) {
            return true;
        }
        if (!this.$0_0.$A_0) {
            return false;
        }
        var $$dict_1 = this.$0_0.$y_0;

        for (var $$key_2 in $$dict_1) {
            var $v_0 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            if ($v_0.value === $p0) {
                return true;
            }
        }
        return false;
    },
    setDw: function SP_BWsaClient$setDw(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            if (dwDatapointId < 1 || dwDatapointId > this.$0_0.$i_0) {
                return;
            }
            if (dwDatapointValue < 0 || dwDatapointValue > 4294967295) {
                this.setDw(8763, dwDatapointId);
                return;
            }
            if (this.$10_0()) {
                return;
            }
            this.$1E_0(dwDatapointId);
            this.$P_0();
            var $v_0 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if (!$v_0) {
                $v_0 = new SP.BWsaDatapoint(dwDatapointId);
                this.$1_0.m_wsaDatapoints[dwDatapointId] = $v_0;
                this.$1_0.m_cDataPoints++;
            }
            $v_0.m_Value = dwDatapointValue;
            $v_0.m_Count++;
            $v_0.m_Sum = dwDatapointValue + $v_0.m_Sum;
        }
        catch ($$e_3) { }
    },
    setBool: function SP_BWsaClient$setBool(dwDatapointId, dwDatapointValue) {
        if (dwDatapointValue) {
            dwDatapointValue = 1;
        }
        this.setDw(dwDatapointId, dwDatapointValue);
    },
    setBitsOrAnd: function SP_BWsaClient$setBitsOrAnd(dwDatapointId, dwOrBits, dwAndBitsFirst) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwOrBits) !== Number || Object.getType(dwAndBitsFirst) !== Number) {
                return;
            }
            if (dwOrBits < 0 || dwOrBits > 4294967295 || dwAndBitsFirst < 0 || dwAndBitsFirst > 4294967295) {
                this.setDw(8763, dwDatapointId);
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if ($v_0) {
                this.$P_0();
                $v_0.m_Value &= dwAndBitsFirst;
                $v_0.m_Value |= dwOrBits;
                $v_0.m_Count++;
            }
            else {
                this.setDw(dwDatapointId, dwOrBits);
            }
        }
        catch ($$e_4) { }
    },
    setBitsOr: function SP_BWsaClient$setBitsOr(dwDatapointId, dwOrBits) {
        this.setBitsOrAnd(dwDatapointId, dwOrBits, 4294967295);
    },
    setBitsAnd: function SP_BWsaClient$setBitsAnd(dwDatapointId, dwAndBits) {
        this.setBitsOrAnd(dwDatapointId, 0, dwAndBits);
    },
    setIfMax: function SP_BWsaClient$setIfMax(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if (!$v_0 || $v_0.m_Value < dwDatapointValue) {
                this.setDw(dwDatapointId, dwDatapointValue);
            }
            else {
                this.$P_0();
            }
        }
        catch ($$e_3) { }
    },
    setIfMin: function SP_BWsaClient$setIfMin(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if (!$v_0 || $v_0.m_Value > dwDatapointValue) {
                this.setDw(dwDatapointId, dwDatapointValue);
            }
            else {
                this.$P_0();
            }
        }
        catch ($$e_3) { }
    },
    incrementDw: function SP_BWsaClient$incrementDw(dwDatapointId, dwInc) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwInc) !== Number) {
                return;
            }
            if (!dwInc) {
                this.$P_0();
                return;
            }
            var $v_0 = 0;
            var $v_1 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if ($v_1) {
                $v_0 = $v_1.m_Value;
            }
            this.setDw(dwDatapointId, $v_0 + dwInc);
        }
        catch ($$e_4) { }
    },
    addToAverage: function SP_BWsaClient$addToAverage(dwDatapointId, dwDatapointValue, count) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            this.setDw(dwDatapointId, dwDatapointValue);
            var $v_0 = this.$1_0.m_wsaDatapoints[dwDatapointId];

            if ($v_0) {
                if (count > 1) {
                    $v_0.m_Count += count - 1;
                }
                $v_0.m_Value = Math.floor($v_0.m_Sum / $v_0.m_Count);
            }
        }
        catch ($$e_4) { }
    },
    createStream: function SP_BWsaClient$createStream(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows) {
        try {
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (WsaStreamEntryId < 1 || WsaStreamEntryId > this.$0_0.$i_0) {
                return;
            }
            if (dwStreamType !== 1 && dwStreamType !== 2) {
                return;
            }
            if (dwWidth < 1 || dwWidth > this.$0_0.$1A_0) {
                return;
            }
            if (this.$10_0()) {
                return;
            }
            if (dwMaxRows < 1 || dwMaxRows > this.$0_0.$x_0) {
                dwMaxRows = this.$0_0.$x_0;
            }
            if (!this.$1_0.m_wsaStreams[WsaStreamEntryId]) {
                var $v_0 = new SP.BWsaStream(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows);

                this.$1_0.m_wsaStreams[WsaStreamEntryId] = $v_0;
                this.$1_0.m_cStreams++;
                this.$1_0.m_cbStreams += SP.BWsaClient.$a;
            }
        }
        catch ($$e_5) { }
    },
    createStreamUnobfuscated: function SP_BWsaClient$createStreamUnobfuscated(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows) {
        this.createStream(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows);
    },
    $1W_0: function SP_BWsaClient$$1W_0($p0) {
        delete $p0.m_Rows[$p0.m_RowsOverwritten];
        this.$1_0.m_cbStreams -= ($p0.m_Width + 1) * 4;
        $p0.m_RowCount--;
        $p0.m_RowsOverwritten++;
        if ($p0.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
            SP.StreamRowCounters.maxOverwritten = $p0.m_RowsOverwritten;
            this.setDw(7994, $p0.m_RowsOverwritten);
            this.setDw(8047, $p0.m_WsaId);
        }
    },
    addToStreamDw: function SP_BWsaClient$addToStreamDw(dwStreamId) {
        var values = [];

        for (var $$pai_5 = 1; $$pai_5 < arguments.length; ++$$pai_5) {
            values[$$pai_5 - 1] = arguments[$$pai_5];
        }
        if (!values.length) {
            return;
        }
        try {
            var $v_0 = new SP.WsaStreamRow(values.length);

            for (var $v_1 = 0; $v_1 < values.length; $v_1++) {
                $v_0.m_Values[$v_1] = values[$v_1];
            }
            this.$1H_0(dwStreamId, $v_0);
        }
        catch ($$e_4) { }
    },
    addToStreamDwUnobfuscated: function SP_BWsaClient$addToStreamDwUnobfuscated(dwStreamId) {
        var values = [];

        for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
            values[$$pai_2 - 1] = arguments[$$pai_2];
        }
        this.addToStreamDw.apply(this, [dwStreamId].concat(values));
    },
    $1H_0: function SP_BWsaClient$$1H_0($p0, $p1) {
        if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
            return;
        }
        if ($p0 < 1 || $p0 > this.$0_0.$i_0) {
            return;
        }
        if (this.$10_0()) {
            return;
        }
        this.$1E_0($p0);
        for (var $v_1 = 0; $v_1 < $p1.m_Values.length; $v_1++) {
            var $v_2 = $p1.m_Values[$v_1];

            if ($v_2 < 0 || $v_2 > 4294967295) {
                this.setDw(8763, $p0);
                return;
            }
        }
        var $v_0 = this.$1_0.m_wsaStreams[$p0];

        if ($v_0) {
            this.$P_0();
            if ($v_0.m_Width !== $p1.m_Values.length) {
                return;
            }
            if ($v_0.m_RowCount >= $v_0.m_MaxRows && $v_0.m_StreamType === 2) {
                this.$1W_0($v_0);
            }
            if ($v_0.m_RowCount < $v_0.m_MaxRows) {
                var $v_3 = $v_0.m_RowCount + $v_0.m_RowsOverwritten;

                $v_0.m_Rows[$v_3] = $p1;
                $v_0.m_RowCount++;
                this.$1_0.m_cbStreams += ($v_0.m_Width + 1) * 4;
                if ($v_0.m_RowCount > SP.StreamRowCounters.maxRowCount) {
                    SP.StreamRowCounters.maxRowCount = $v_0.m_RowCount;
                    this.setDw(7993, $v_0.m_RowCount);
                    this.setDw(8048, $v_0.m_WsaId);
                }
            }
            else {
                $v_0.m_RowsOverwritten++;
                if ($v_0.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
                    SP.StreamRowCounters.maxOverwritten = $v_0.m_RowsOverwritten;
                    this.setDw(7994, $v_0.m_RowsOverwritten);
                    this.setDw(8047, $v_0.m_WsaId);
                }
            }
        }
    },
    terminate: function SP_BWsaClient$terminate() {
        this.uploadWsaData();
    },
    uploadWsaData: function SP_BWsaClient$uploadWsaData() {
        try {
            this.$d_0();
            if (!this.$1_0 || !this.$0_0) {
                return;
            }
            if (!this.$0_0.$6_0 && !this.$0_0.$A_0) {
                return;
            }
            if (this.$0_0.$Y_0 === '') {
                this.$0_0.$6_0 = false;
                return;
            }
            var $v_0 = SP.Ticks.getTicks32();

            if (this.$g_0 > 0 && $v_0 <= this.$g_0 + this.$0_0.$1B_0) {
                return;
            }
            this.$g_0 = $v_0;
            var $v_1 = new Array(0);
            var $$dict_2 = this.$1_0.m_wsaStreams;

            for (var $$key_3 in $$dict_2) {
                var $v_2 = {
                    key: $$key_3,
                    value: $$dict_2[$$key_3]
                };
                var $v_3 = $v_2.value;

                if (!$v_3.m_RowCount) {
                    $v_1[$v_1.length] = $v_2.key;
                }
            }
            for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
                delete this.$1_0.m_wsaStreams[$v_1[$v_4]];
                this.$1_0.m_cStreams--;
                this.$1_0.m_cbStreams -= SP.BWsaClient.$a;
            }
            if (this.$X_0) {
                if (this.$v_0) {
                    this.setDw(60, 1);
                }
                else {
                    this.setDw(60, 0);
                    this.$v_0 = true;
                }
                this.writeDocIdStream();
                this.$1_0.m_wsaHeader.m_EndTime = SP.Ticks.getTicks64();
                var $v_5 = this.$1X_0(this.$1_0, this.$0_0);

                this.$1S_0();
                if ($v_5 && $v_5.length > 0) {
                    this.uploadWsaDataRequest($v_5);
                }
            }
        }
        catch ($$e_8) { }
    },
    uploadWsaDataRequest: function SP_BWsaClient$uploadWsaDataRequest(json) {
        if (!this.$M_0) {
            this.$M_0 = new XMLHttpRequest();
        }
        if (this.$M_0.readyState === 0 || this.$M_0.readyState === 4) {
            var $v_0 = true;

            if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version >= 10) {
                $v_0 = false;
            }
            this.$M_0.open('POST', this.$0_0.$Y_0, $v_0);
            this.$M_0.setRequestHeader('Content-Type', 'application/json');
            this.$M_0.send(json);
        }
    },
    $1X_0: function SP_BWsaClient$$1X_0($p0, $p1) {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = true;
        var $v_2 = false;
        var $v_3 = 0;

        if ($p1.$6_0) {
            $v_3 = 16;
        }
        if ($p1.$A_0) {
            $v_3 |= 32;
        }
        $v_0.append('{');
        $v_0.append('\"StartTime\":' + $p0.m_wsaHeader.m_StartTime + ',');
        $v_0.append('\"EndTime\":' + $p0.m_wsaHeader.m_EndTime + ',');
        $v_0.append('\"Flags\":' + $v_3 + ',');
        if ($p0.m_wsaHeader.m_CorrelationId) {
            $v_0.append('\"CorrelationId\":\"' + $p0.m_wsaHeader.m_CorrelationId + '\",');
        }
        $v_0.append('\"wsaDatapoints\":[');
        var $$dict_6 = $p0.m_wsaDatapoints;

        for (var $$key_7 in $$dict_6) {
            var $v_4 = {
                key: $$key_7,
                value: $$dict_6[$$key_7]
            };
            var $v_5 = $v_4.value;

            if (!this.$19_0($v_5.m_WsaId)) {
                continue;
            }
            $v_2 = true;
            if (!$v_1) {
                $v_0.append(',');
            }
            $v_0.append('{\"Id\":' + $v_5.m_WsaId + ',');
            $v_0.append('\"Val\":' + $v_5.m_Value + ',');
            $v_0.append('\"Tic\":' + $v_5.m_Ticks + '}');
            $v_1 = false;
        }
        $v_0.append('],\"wsaStreams\":[');
        $v_1 = true;
        var $$dict_A = $p0.m_wsaStreams;

        for (var $$key_B in $$dict_A) {
            var $v_6 = {
                key: $$key_B,
                value: $$dict_A[$$key_B]
            };
            var $v_7 = $v_6.value;

            if (!this.$19_0($v_7.m_WsaId)) {
                continue;
            }
            $v_2 = true;
            var $v_8 = true;

            if (!$v_1) {
                $v_0.append(',');
            }
            $v_0.append('{\"Id\":' + $v_7.m_WsaId + ',');
            $v_0.append('\"Width\":' + $v_7.m_Width + ',');
            $v_0.append('\"Rows\":[');
            var $$dict_F = $v_7.m_Rows;

            for (var $$key_G in $$dict_F) {
                var $v_9 = {
                    key: $$key_G,
                    value: $$dict_F[$$key_G]
                };
                var $v_A = $v_9.value;

                if (!$v_8) {
                    $v_0.append(',');
                }
                $v_0.append('{\"Tic\":' + $v_A.m_Ticks + ',');
                $v_0.append('\"Vals\":[');
                for (var $v_B = 0; $v_B < $v_A.m_Values.length; $v_B++) {
                    if ($v_B > 0) {
                        $v_0.append(',');
                    }
                    $v_0.append($v_A.m_Values[$v_B]);
                }
                $v_0.append(']}');
                $v_8 = false;
            }
            $v_0.append(']}');
            $v_1 = false;
        }
        $v_0.append(']}');
        if ($v_2) {
            return $v_0.toString();
        }
        else {
            return null;
        }
    },
    isUserOptedIn: function SP_BWsaClient$isUserOptedIn() {
        return this.$0_0.$6_0;
    },
    disable: function SP_BWsaClient$disable() {
        try {
            this.$d_0();
            this.$0_0.$6_0 = false;
        }
        catch ($$e_0) { }
    },
    $U_0: function SP_BWsaClient$$U_0($p0, $p1) {
        if (!this.$1_0.m_wsaDatapoints[$p0]) {
            var $v_0 = new SP.BWsaDatapoint($p0);

            $v_0.m_Value = $p1;
            this.$1_0.m_wsaDatapoints[$p0] = $v_0;
            this.$1_0.m_cDataPoints++;
        }
    },
    $d_0: function SP_BWsaClient$$d_0() {
        if (this.$Q_0) {
            window.clearTimeout(this.$Q_0);
            this.$Q_0 = 0;
        }
    },
    $P_0: function SP_BWsaClient$$P_0() {
        if (SP.TimerResetCheck.isTimerResetNeeded()) {
            this.$d_0();
            this.$Q_0 = window.setTimeout(this.$$d_$1L_0, this.$0_0.$h_0);
        }
    },
    $1L_0: function SP_BWsaClient$$1L_0() {
        this.$Q_0 = 0;
        this.$d_0();
        this.uploadWsaData();
        this.$P_0();
    },
    addCommonDatapoint: function SP_BWsaClient$addCommonDatapoint(datapointId) {
        this.$W_0[datapointId] = true;
    },
    $e_0: 0,
    $O_0: null,
    registerPersistentDocId: function SP_BWsaClient$registerPersistentDocId(DocHash) {
        if (DocHash && DocHash.length === 4 && (DocHash[0] || DocHash[1] || DocHash[2] || DocHash[3])) {
            this.$e_0 = 1;
            this.$O_0 = DocHash;
            return true;
        }
        else {
            return false;
        }
    },
    getActiveDocKey: function SP_BWsaClient$getActiveDocKey() {
        return this.$e_0;
    },
    writeDocIdStream: function SP_BWsaClient$writeDocIdStream() {
        if (this.$e_0 && this.$O_0) {
            this.createStream(9797, 1, 5, 1);
            this.addToStreamDw(9797, this.$e_0, this.$O_0[0], this.$O_0[1], this.$O_0[2], this.$O_0[3]);
            this.setDw(10273, this.$O_0[0]);
            return true;
        }
        else {
            return false;
        }
    },
    setCorrelationId: function SP_BWsaClient$setCorrelationId(correlationId) {
        this.$1_0.m_wsaHeader.m_CorrelationId = correlationId;
    }
};
Type.registerNamespace('SP.UI');
SP.UI.Orientation = function() {
};
SP.UI.Orientation.prototype = {
    horizontal: 0,
    vertical: 1
};
SP.UI.Orientation.registerEnum('SP.UI.Orientation', false);
SP.UI.AspMenu = function SP_UI_AspMenu(e) {
    this.$q_2 = [];
    SP.UI.AspMenu.initializeBase(this, [e]);
};
SP.UI.AspMenu.$16 = function SP_UI_AspMenu$$16($p0) {
    var $v_0 = null;

    for (var $v_1 = 0, $v_2 = $p0.childNodes.length; $v_1 < $v_2; ++$v_1) {
        var $v_3 = $p0.childNodes[$v_1];

        if ($v_3 && $v_3.nodeType === 1 && $v_3.tagName.toLowerCase() === 'ul') {
            $v_0 = $v_3;
            break;
        }
    }
    return $v_0;
};
SP.UI.AspMenu.prototype = {
    $G_2: null,
    $E_2: null,
    $p_2: 500,
    $11_2: 125,
    $z_2: 250,
    get_menuOrientation: function SP_UI_AspMenu$get_menuOrientation() {
        if (Sys.UI.DomElement.containsCssClass(this.$G_2.parentNode, 'ms-core-listMenu-horizontalBox')) {
            return 0;
        }
        else {
            return 1;
        }
    },
    set_menuOrientation: function SP_UI_AspMenu$set_menuOrientation(value) {
        if (!value) {
            Sys.UI.DomElement.removeCssClass(this.$G_2.parentNode, 'ms-core-listMenu-verticalBox');
            Sys.UI.DomElement.addCssClass(this.$G_2.parentNode, 'ms-core-listMenu-horizontalBox');
        }
        else if (value === 1) {
            Sys.UI.DomElement.removeCssClass(this.$G_2.parentNode, 'ms-core-listMenu-horizontalBox');
            Sys.UI.DomElement.addCssClass(this.$G_2.parentNode, 'ms-core-listMenu-verticalBox');
        }
        return value;
    },
    get_disappearAfter: function SP_UI_AspMenu$get_disappearAfter() {
        return this.$p_2;
    },
    set_disappearAfter: function SP_UI_AspMenu$set_disappearAfter(value) {
        this.$p_2 = value;
        return value;
    },
    initialize: function SP_UI_AspMenu$initialize() {
        Sys.Component.prototype.initialize.call(this);
        this.$G_2 = ((this.get_element()).getElementsByTagName('ul'))[0];
        this.$1T_2();
        this.$1U_2();
    },
    $1T_2: function SP_UI_AspMenu$$1T_2() {
        var $v_0 = this.$G_2.getElementsByTagName('li');

        for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; ++$v_1) {
            var $v_3 = $v_0[$v_1];

            $v_3.hoverDebouncer = 0;
            this.$1J_2($v_3);
        }
    },
    $s_2: function SP_UI_AspMenu$$s_2($p0, $p1) {
        for (var $v_0 = $p1; $v_0; $v_0 = $v_0.parentNode) {
            if ($v_0 === $p0) {
                return true;
            }
        }
        return false;
    },
    $1J_2: function SP_UI_AspMenu$$1J_2($p0) {
        var $$t_C = this;

        $addHandler($p0, 'mouseover', function($p1_0) {
            $$t_C.showSubMenu($p0);
        });
        var $$t_D = this;

        $addHandler($p0, 'mouseout', function($p1_0) {
            $$t_D.hideSubMenu($p0);
        });
        var $v_0 = $p0.querySelector('.menu-item');

        if ($v_0) {
            var $$t_E = this;

            $addHandler($v_0, 'focus', function($p1_0) {
                if ($p0.parentNode) {
                    var $v_2 = $p0.parentNode.parentNode;

                    if ($v_2 && $v_2.tagName && $v_2.tagName.toUpperCase() === 'LI') {
                        $$t_E.showSubMenu($v_2);
                    }
                }
            });
        }
        var $$t_F = this;

        $addHandler($p0, 'focusout', function($p1_0) {
            $$t_F.$18_2($p0);
        });
        var $$t_G = this;

        $addHandler($p0, 'blur', function($p1_0) {
            $$t_G.$18_2($p0);
        });
        var $v_1 = $p0.querySelector('.additional-background');

        if ($v_1) {
            var $$t_H = this;

            $addHandler($v_1, 'click', function($p1_0) {
                if (!$p1_0.target || !Sys.UI.DomElement.containsCssClass($p1_0.target, 'menu-item-text')) {
                    var $v_3 = $p0.hoverDebouncer;
                    var $v_4 = 0;

                    if ($v_3 <= 1) {
                        $v_4 = 999;
                    }
                    else {
                        $v_4 = 1;
                    }
                    $p0.hoverDebouncer = $v_4;
                    if ($v_4 > 1) {
                        $$t_H.showSubMenu($p0);
                    }
                    else {
                        $$t_H.hideSubMenu($p0);
                    }
                    SP.UI.UIUtility.cancelEvent($p1_0);
                    return false;
                }
            });
        }
    },
    $18_2: function SP_UI_AspMenu$$18_2($p0) {
        if (!this.$s_2($p0, document.activeElement)) {
            var $v_0 = $p0.hoverDebouncer;

            if ($v_0 > 1) {
                $p0.hoverDebouncer = 1;
            }
            this.hideSubMenu($p0);
        }
    },
    $r_2: function SP_UI_AspMenu$$r_2($p0, $p1, $p2, $p3) {
        var $v_0 = 0;
        var $v_1 = document.documentElement.dir === 'rtl';
        var $v_2 = $p0.querySelector('.menu-item-text');

        if (!$v_2) {
            $v_2 = $p0.querySelector('.menu-item');
        }
        if (!$p1) {
            $v_0 = (Sys.UI.DomElement.getLocation($v_2)).x - (Sys.UI.DomElement.getLocation($p2)).x;
        }
        else {
            $v_0 = (Sys.UI.DomElement.getLocation($v_2)).y - (Sys.UI.DomElement.getLocation($p2)).y;
            if ($p3) {
                $v_0 += $v_2.offsetHeight;
            }
        }
        if ($v_1 && !$p1) {
            $v_0 = $p2.offsetWidth - $v_0 - $v_2.offsetWidth;
        }
        return $v_0;
    },
    showSubMenu: function SP_UI_AspMenu$showSubMenu(flyoutItem) {
        var $v_0 = Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover');
        var $v_1 = Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover-off');

        if (flyoutItem.hoverDebouncer > 0) {
            return;
        }
        flyoutItem.hoverDebouncer = flyoutItem.hoverDebouncer + 1;
        if (!$v_0 && !$v_1) {
            if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'dynamic-children')) {
                if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'static')) {
                    var $v_2 = document.documentMode;
                    var $v_3 = Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 8 && (SP.ScriptUtility.isNullOrUndefined($v_2) || $v_2 < 8);
                    var $v_4 = document.documentElement.dir === 'rtl';

                    if ($v_4 && !this.get_menuOrientation() && $v_3) {
                        this.showSubMenuCore(flyoutItem, -flyoutItem.offsetWidth, 0);
                        return;
                    }
                }
                this.showSubMenuCore(flyoutItem, 0, 0);
            }
        }
        else if (!$v_0) {
            Sys.UI.DomElement.addCssClass(flyoutItem, 'hover');
            Sys.UI.DomElement.removeCssClass(flyoutItem, 'hover-off');
        }
    },
    showSubMenuCore: function SP_UI_AspMenu$showSubMenuCore(li, xOffset, yOffset) {
        if (li.childNodes.length < 1) {
            return;
        }
        if (this.$E_2 && this.$E_2 !== li && !this.$s_2(this.$E_2, li)) {
            this.hideSubMenuCore(this.$E_2, li);
        }
        if (li) {
            this.$q_2.push(this.$E_2);
            this.$E_2 = li;
        }
        var $v_0 = document.documentElement.dir === 'rtl';
        var $v_1 = this.$r_2(li, 1, li, true) + 6;

        Sys.UI.DomElement.addCssClass(li, 'hover');
        var $v_2 = SP.UI.AspMenu.$16(li);

        if ($v_2) {
            var $v_3 = window.innerWidth;

            if (typeof $v_3 === 'undefined' || $v_3 <= 0) {
                $v_3 = window.document.body.clientWidth;
            }
            var $v_4 = -1;
            var $v_5 = !this.get_menuOrientation() && Sys.UI.DomElement.containsCssClass(li.parentNode, 'static');
            var $v_6 = $v_2.querySelector('li');

            if ($v_5 && li.offsetWidth >= this.$11_2 && li.offsetWidth <= this.$z_2) {
                $v_2.style.width = li.offsetWidth + 'px';
            }
            if ($v_2.offsetWidth < this.$11_2) {
                $v_2.style.width = this.$11_2 + 'px';
            }
            else if ($v_2.offsetWidth > this.$z_2) {
                $v_2.style.width = this.$z_2 + 'px';
            }
            if ($v_6) {
                var $v_7 = $v_5 ? 0 : 1;

                $v_4 = this.$r_2(li, $v_7, li, false) - this.$r_2($v_6, $v_7, $v_2, false);
            }
            if ($v_5) {
                var $v_8 = AbsLeft(li);
                var $v_9 = $v_4 + xOffset + $v_2.offsetWidth;

                if (!$v_0 && $v_8 + $v_9 > $v_3 || $v_0 && $v_8 + li.offsetWidth - $v_9 < 0) {
                    $v_4 = li.offsetWidth - $v_2.offsetWidth;
                }
                if (!$v_0) {
                    $v_2.style.left = $v_4 + xOffset + 'px';
                }
                else {
                    $v_2.style.right = $v_4 + xOffset + 'px';
                }
                $v_2.style.top = $v_1 + yOffset + 'px';
                var $v_A = li.querySelector('.menu-item');
            }
            else {
                if (!$v_0) {
                    $v_2.style.left = li.offsetWidth + xOffset + 'px';
                }
                else {
                    $v_2.style.right = li.offsetWidth + xOffset + 'px';
                }
                $v_2.style.top = $v_4 + yOffset + 'px';
            }
        }
    },
    hideSubMenu: function SP_UI_AspMenu$hideSubMenu(flyoutItem) {
        var $v_0 = flyoutItem.hoverDebouncer;

        if ($v_0 <= 0) {
            return;
        }
        flyoutItem.hoverDebouncer = flyoutItem.hoverDebouncer - 1;
        if (flyoutItem.hoverDebouncer <= 0 && Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover')) {
            Sys.UI.DomElement.addCssClass(flyoutItem, 'hover-off');
            Sys.UI.DomElement.removeCssClass(flyoutItem, 'hover');
            var $$t_2 = this;

            window.setTimeout(function() {
                if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover-off')) {
                    $$t_2.hideSubMenuCore(flyoutItem, null);
                }
            }, this.$p_2);
        }
    },
    hideSubMenuCore: function SP_UI_AspMenu$hideSubMenuCore(li, newLi) {
        do {
            var $v_0 = document.documentElement.dir === 'rtl';
            var $v_1 = SP.UI.AspMenu.$16(li);

            if ($v_1) {
                $v_1.style.top = '';
                $v_1.style.left = '';
                $v_1.style.right = '';
                $v_1.style.width = '';
            }
            Sys.UI.DomElement.removeCssClass(li, 'hover-off');
            Sys.UI.DomElement.removeCssClass(li, 'hover');
            if (li === this.$E_2) {
                this.$E_2 = this.$q_2.pop();
                if (newLi && this.$s_2(this.$E_2, newLi)) {
                    break;
                }
                li = this.$E_2;
            }
            if (!newLi) {
                break;
            }
        } while (li);
    },
    $1U_2: function SP_UI_AspMenu$$1U_2() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$G_2.querySelectorAll)) {
            var $v_0 = this.$G_2.querySelectorAll('a.new-window');

            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                $v_0[$v_1].target = '_blank';
            }
        }
        else {
            var $v_2 = this.$G_2.getElementsByTagName('a');

            for (var $v_3 = 0; $v_3 < $v_2.length; ++$v_3) {
                if (Sys.UI.DomElement.containsCssClass($v_2[$v_3], 'new-window')) {
                    $v_2[$v_3].target = '_blank';
                }
            }
        }
    }
};
Type.registerNamespace('SP.Utilities');
SP.Utilities.CommandBlock = function SP_Utilities_CommandBlock(state, commandFunction, finishFunction) {
    this.state = state;
    this.commandFunction = commandFunction;
    this.finishFunction = finishFunction;
};
SP.Utilities.TaskTelemetry = function SP_Utilities_TaskTelemetry($p0, $p1) {
    this.startTime = $p0;
    this.finishTime = -1;
    this.cancelTime = -1;
    this.currentSlice = 0;
    this.sliceStart = new Array(1);
    this.sliceDuration = new Array(1);
    this.times = new Array(1);
};
SP.Utilities.TaskTelemetry.prototype = {
    startTime: null,
    sliceStart: null,
    sliceDuration: null,
    finishTime: 0,
    cancelTime: 0,
    currentSlice: 0,
    times: null,
    $14_0: function SP_Utilities_TaskTelemetry$$14_0($p0, $p1, $p2) {
        var $v_0 = this.currentSlice++;

        this.sliceStart[$v_0] = $p0 - this.startTime;
        this.sliceDuration[$v_0] = $p1 - $p0;
    }
};
SP.Utilities.Task = function SP_Utilities_Task(elementIn, taskType, timeOut, cb, longFunction, cancelFunction, progressFunction) {
    this.$$d_onBeforeUnload = Function.createDelegate(this, this.onBeforeUnload);
    this.$1b_0 = taskType;
    this.$2_0 = cb;
    this.$u_0 = longFunction;
    this.$V_0 = cancelFunction;
    this.$J_0 = progressFunction;
    this.$8_0 = elementIn;
    this.$13_0 = timeOut;
    this.$4_0 = null;
    this.$I_0 = 0;
    this.$m_0 = false;
    this.$R_0 = false;
};
SP.Utilities.Task.prototype = {
    $8_0: null,
    $13_0: 0,
    $4_0: null,
    $I_0: 0,
    $m_0: false,
    $R_0: false,
    $u_0: null,
    $V_0: null,
    $J_0: null,
    $Z_0: null,
    $12_0: null,
    $2_0: null,
    $1b_0: 0,
    $7_0: null,
    $1C_0: '',
    start: function SP_Utilities_Task$start() {
        if (SP.Utilities.TaskCarousel.$1a(2)) {
            SP.Utilities.TaskCarousel.$b = SP.Utilities.TaskCarousel.$K;
            SP.Utilities.TaskCarousel.$C = (SP.Utilities.TaskCarousel.$4 = (this.$4_0 = new Date()));
            this.$7_0 = new SP.Utilities.TaskTelemetry(this.$4_0, this.$2_0.state);
            this.$I_0 = this.$2_0.commandFunction(this.$2_0.state, SP.Utilities.TaskCarousel.$1D);
            this.$7_0.$14_0(this.$4_0, SP.Utilities.TaskCarousel.$3, this.$2_0.state);
            if (this.$I_0 < 1) {
                SP.Utilities.TaskCarousel.$b = SP.Utilities.TaskCarousel.$N;
                if (!SP.Utilities.TaskCarousel.$D) {
                    SP.Utilities.TaskCarousel.$1Y();
                }
                SP.Utilities.TaskCarousel.$1G(this);
            }
            else if (this.$2_0.finishFunction) {
                this.$7_0.finishTime = new Date() - this.$7_0.startTime;
                this.$2_0.finishFunction(this.$8_0, this.$2_0.state);
            }
        }
    },
    cancel: function SP_Utilities_Task$cancel(type) {
        return SP.Utilities.TaskCarousel.$l(this, type);
    },
    telemetry: function SP_Utilities_Task$telemetry() {
        return this.$7_0;
    },
    addTelemetryTime: function SP_Utilities_Task$addTelemetryTime(index) {
        this.$7_0.times[index] = new Date() - this.$7_0.startTime;
    },
    getTelemetryTime: function SP_Utilities_Task$getTelemetryTime(index) {
        return this.$7_0.times[index];
    },
    setPageExitText: function SP_Utilities_Task$setPageExitText(pet) {
        this.$1C_0 = pet;
    },
    onBeforeUnload: function SP_Utilities_Task$onBeforeUnload() {
        var $v_0;

        if (this.$Z_0) {
            $v_0 = this.$Z_0();
            if (typeof $v_0 !== 'undefined') {
                return $v_0;
            }
        }
        var $v_1 = SP.Utilities.TaskCarousel.$l(this, 3);

        if (!$v_1) {
            $v_0 = this.$1C_0;
            return $v_0;
        }
        else if (this === SP.Utilities.TaskCarousel.currentCancellableTask) {
            SP.Utilities.TaskCarousel.currentCancellableTask = null;
        }
    }
};
SP.Utilities.Task.CancelType = function() {
};
SP.Utilities.Task.CancelType.prototype = {
    explicit: 1,
    implicitByCommand: 2,
    implicitByNavigation: 3,
    implicitByTimeOut: 4
};
SP.Utilities.Task.CancelType.registerEnum('SP.Utilities.Task.CancelType', false);
SP.Utilities.Task.TaskType = function() {
};
SP.Utilities.Task.TaskType.prototype = {
    autoCancel: 1,
    background: 2,
    deferred: 3
};
SP.Utilities.Task.TaskType.registerEnum('SP.Utilities.Task.TaskType', false);
SP.Utilities.tcsaver = function SP_Utilities_tcsaver() {
};
SP.Utilities.tcsaver.save = function SP_Utilities_tcsaver$save() {
    var $v_0 = new SP.Utilities.tcsaver();

    $v_0.$5_0 = SP.Utilities.TaskCarousel.$5;
    $v_0.$3_0 = SP.Utilities.TaskCarousel.$3;
    $v_0.$C_0 = SP.Utilities.TaskCarousel.$C;
    $v_0.$D_0 = SP.Utilities.TaskCarousel.$D;
    $v_0.$F_0 = SP.Utilities.TaskCarousel.$F;
    $v_0.$B_0 = SP.Utilities.TaskCarousel.$B;
    $v_0.$N_0 = SP.Utilities.TaskCarousel.$N;
    $v_0.$K_0 = SP.Utilities.TaskCarousel.$K;
    $v_0.$S_0 = SP.Utilities.TaskCarousel.$S;
    $v_0.$15_0 = SP.Utilities.TaskCarousel.currentCancellableTask;
    $v_0.$9_0 = SP.Utilities.TaskCarousel.$9;
    $v_0.$H_0 = SP.Utilities.TaskCarousel.$H;
    return $v_0;
};
SP.Utilities.tcsaver.restore = function SP_Utilities_tcsaver$restore(tcs) {
    SP.Utilities.TaskCarousel.$5 = tcs.$5_0;
    SP.Utilities.TaskCarousel.$3 = tcs.$3_0;
    SP.Utilities.TaskCarousel.$C = tcs.$C_0;
    SP.Utilities.TaskCarousel.$D = tcs.$D_0;
    SP.Utilities.TaskCarousel.$F = tcs.$F_0;
    SP.Utilities.TaskCarousel.$B = tcs.$B_0;
    SP.Utilities.TaskCarousel.$N = tcs.$N_0;
    SP.Utilities.TaskCarousel.$K = tcs.$K_0;
    SP.Utilities.TaskCarousel.$S = tcs.$S_0;
    SP.Utilities.TaskCarousel.currentCancellableTask = tcs.$15_0;
    SP.Utilities.TaskCarousel.$9 = tcs.$9_0;
    SP.Utilities.TaskCarousel.$H = tcs.$H_0;
};
SP.Utilities.tcsaver.prototype = {
    $5_0: null,
    $3_0: null,
    $C_0: null,
    $D_0: 0,
    $F_0: 0,
    $B_0: 0,
    $N_0: 50,
    $K_0: 500,
    $S_0: 1000,
    $15_0: null,
    $9_0: null,
    $H_0: null,
    get_sharedTimer: function SP_Utilities_tcsaver$get_sharedTimer() {
        return this.$D_0;
    },
    get_sharedCancelTimer: function SP_Utilities_tcsaver$get_sharedCancelTimer() {
        return this.$F_0;
    }
};
SP.Utilities.TaskCarousel = function SP_Utilities_TaskCarousel() {
};
SP.Utilities.TaskCarousel.$1Y = function SP_Utilities_TaskCarousel$$1Y() {
    SP.Utilities.TaskCarousel.$D = window.setInterval(SP.Utilities.TaskCarousel.$1Z, SP.Utilities.TaskCarousel.$N * 2);
    SP.Utilities.TaskCarousel.$F = window.setTimeout(SP.Utilities.TaskCarousel.$1F, 3600000);
    SP.Utilities.TaskCarousel.$B = 0;
};
SP.Utilities.TaskCarousel.$l = function SP_Utilities_TaskCarousel$$l($p0, $p1) {
    var $v_0 = SP.Utilities.TaskCarousel.$5.length;

    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        if (SP.Utilities.TaskCarousel.$5[$v_1] === $p0) {
            if ($p0.$V_0) {
                var $v_2 = $p0.$V_0($p0.$8_0, $p0.$2_0.state, $p1);

                $p0.$7_0.cancelTime = new Date() - $p0.$7_0.startTime;
                if (!$v_2) {
                    return false;
                }
            }
            if ($p0.$8_0) {
                $p0.$8_0.style.cursor = 'default';
            }
            if ($p0.$R_0) {
                if ($p0.$J_0) {
                    $p0.$J_0(1, SP.Utilities.TaskCarousel.$3 - $p0.$4_0, $p0.$2_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$j(1, SP.Utilities.TaskCarousel.$3 - $p0.$4_0, $p0.$2_0.state);
                }
            }
            SP.Utilities.TaskCarousel.$o($p0);
            SP.Utilities.TaskCarousel.$5[$v_1] = null;
            --SP.Utilities.TaskCarousel.$B;
        }
    }
    return true;
};
SP.Utilities.TaskCarousel.$1a = function SP_Utilities_TaskCarousel$$1a($p0) {
    var $v_0 = true;
    var $v_1 = SP.Utilities.TaskCarousel.$5.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = SP.Utilities.TaskCarousel.$5[$v_2];

        if ($v_3) {
            if ($v_3.$V_0) {
                $v_0 = $v_3.$V_0($v_3.$8_0, $v_3.$2_0.state, $p0);
                $v_3.$7_0.cancelTime = new Date() - $v_3.$7_0.startTime;
                if (!$v_0) {
                    break;
                }
            }
            if ($v_3.$8_0) {
                $v_3.$8_0.style.cursor = 'default';
            }
            if ($v_3.$R_0) {
                if ($v_3.$J_0) {
                    $v_3.$J_0(1, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$j(1, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
            }
            SP.Utilities.TaskCarousel.$o($v_3);
            SP.Utilities.TaskCarousel.$5[$v_2] = null;
            --SP.Utilities.TaskCarousel.$B;
        }
    }
    return $v_0;
};
SP.Utilities.TaskCarousel.$j = function SP_Utilities_TaskCarousel$$j($p0, $p1, $p2) {
    if (!SP.Utilities.TaskCarousel.$9) {
        if (window.document.title && typeof window.document.title !== 'undefined') {
            SP.Utilities.TaskCarousel.$9 = window.document.title;
        }
        else {
            SP.Utilities.TaskCarousel.$9 = '';
        }
        window.document.title = (SP.Utilities.TaskCarousel.$H = SP.Utilities.TaskCarousel.$9);
    }
    else if (window.document.title !== SP.Utilities.TaskCarousel.$H) {
        SP.Utilities.TaskCarousel.$9 = window.document.title;
    }
    if ($p0 >= 1) {
        window.document.title = SP.Utilities.TaskCarousel.$9;
        SP.Utilities.TaskCarousel.$9 = null;
        SP.Utilities.TaskCarousel.$H = null;
    }
    else {
        if ($p0 >= 0) {
            window.document.title = Math.round($p0 * 100) + '% ' + SP.Utilities.TaskCarousel.$9;
        }
        else {
            window.document.title = Math.round($p1 / 1000) + 's ' + SP.Utilities.TaskCarousel.$9;
        }
        SP.Utilities.TaskCarousel.$H = window.document.title;
    }
};
SP.Utilities.TaskCarousel.$1D = function SP_Utilities_TaskCarousel$$1D() {
    SP.Utilities.TaskCarousel.$3 = new Date();
    var $v_0 = SP.Utilities.TaskCarousel.$3 - SP.Utilities.TaskCarousel.$C;

    if (SP.Utilities.TaskCarousel.$B > 0) {
        SP.Utilities.TaskCarousel.$b /= SP.Utilities.TaskCarousel.$B;
    }
    if ($v_0 > SP.Utilities.TaskCarousel.$b) {
        return true;
    }
    return false;
};
SP.Utilities.TaskCarousel.$1G = function SP_Utilities_TaskCarousel$$1G($p0) {
    var $v_0 = SP.Utilities.TaskCarousel.$5.length;
    var $v_1;

    for ($v_1 = 0; $v_1 < $v_0; $v_1++) {
        if (!SP.Utilities.TaskCarousel.$5[$v_1]) {
            break;
        }
    }
    SP.Utilities.TaskCarousel.$5[$v_1] = $p0;
    SP.Utilities.TaskCarousel.$B++;
};
SP.Utilities.TaskCarousel.$1Z = function SP_Utilities_TaskCarousel$$1Z() {
    var $v_0 = false;
    var $v_1 = SP.Utilities.TaskCarousel.$5.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = SP.Utilities.TaskCarousel.$5[$v_2];

        if ($v_3) {
            SP.Utilities.TaskCarousel.$C = new Date();
            if ($v_3.$13_0 > 0 && SP.Utilities.TaskCarousel.$C - $v_3.$4_0 > $v_3.$13_0) {
                SP.Utilities.TaskCarousel.$l($v_3, 4);
                continue;
            }
            if (!$v_3.$m_0 && SP.Utilities.TaskCarousel.$C - $v_3.$4_0 >= SP.Utilities.TaskCarousel.$K) {
                $v_3.$m_0 = true;
                if ($v_3.$8_0) {
                    $v_3.$8_0.style.cursor = 'wait';
                }
                if ($v_3.$u_0) {
                    $v_3.$u_0($v_3.$8_0, $v_3.$2_0.state);
                }
            }
            else if (!$v_3.$R_0 && SP.Utilities.TaskCarousel.$C - $v_3.$4_0 >= SP.Utilities.TaskCarousel.$S) {
                $v_3.$R_0 = true;
                SP.Utilities.TaskCarousel.currentCancellableTask = $v_3;
                SP.Utilities.TaskCarousel.$1I($v_3, SP.Utilities.TaskCarousel.$1M);
                SP.Utilities.TaskCarousel.$1K($v_3, $v_3.$$d_onBeforeUnload);
            }
            $v_3.$I_0 = $v_3.$2_0.commandFunction($v_3.$2_0.state, SP.Utilities.TaskCarousel.$1D);
            $v_3.$7_0.$14_0(SP.Utilities.TaskCarousel.$C, SP.Utilities.TaskCarousel.$3, $v_3.$2_0.state);
            if ($v_3.$I_0 >= 1) {
                if ($v_3.$m_0 && $v_3.$8_0) {
                    $v_3.$8_0.style.cursor = 'default';
                }
                if ($v_3.$2_0.finishFunction) {
                    $v_3.$7_0.finishTime = new Date() - $v_3.$7_0.startTime;
                    $v_3.$2_0.finishFunction($v_3.$8_0, $v_3.$2_0.state);
                }
                SP.Utilities.TaskCarousel.$1N($v_3);
                SP.Utilities.TaskCarousel.$o($v_3);
                SP.Utilities.TaskCarousel.$5[$v_2] = null;
                --SP.Utilities.TaskCarousel.$B;
                if ($v_3.$J_0) {
                    $v_3.$J_0($v_3.$I_0, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$j($v_3.$I_0, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
                break;
            }
            else {
                $v_0 = true;
            }
            if ($v_3.$R_0) {
                if ($v_3.$J_0) {
                    $v_3.$J_0($v_3.$I_0, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$j($v_3.$I_0, SP.Utilities.TaskCarousel.$3 - $v_3.$4_0, $v_3.$2_0.state);
                }
            }
        }
    }
    if (!$v_0) {
        SP.Utilities.TaskCarousel.$1F();
    }
};
SP.Utilities.TaskCarousel.$1F = function SP_Utilities_TaskCarousel$$1F() {
    if (SP.Utilities.TaskCarousel.$F) {
        window.clearTimeout(SP.Utilities.TaskCarousel.$F);
        SP.Utilities.TaskCarousel.$F = 0;
    }
    if (SP.Utilities.TaskCarousel.$D) {
        window.clearInterval(SP.Utilities.TaskCarousel.$D);
        SP.Utilities.TaskCarousel.$D = 0;
    }
    SP.Utilities.TaskCarousel.$B = 0;
};
SP.Utilities.TaskCarousel.$1M = function SP_Utilities_TaskCarousel$$1M() {
    if (SP.Utilities.TaskCarousel.currentCancellableTask) {
        SP.Utilities.TaskCarousel.$l(SP.Utilities.TaskCarousel.currentCancellableTask, 1);
        SP.Utilities.TaskCarousel.currentCancellableTask = null;
    }
};
SP.Utilities.TaskCarousel.$1I = function SP_Utilities_TaskCarousel$$1I($p0, $p1) {
    $p0.$12_0 = window.document.onstop;
    window.document.onstop = $p1;
};
SP.Utilities.TaskCarousel.$1N = function SP_Utilities_TaskCarousel$$1N($p0) {
    window.document.onstop = $p0.$12_0;
    $p0.$12_0 = null;
};
SP.Utilities.TaskCarousel.$1K = function SP_Utilities_TaskCarousel$$1K($p0, $p1) {
    $p0.$Z_0 = window.onbeforeunload;
    window.onbeforeunload = $p1;
};
SP.Utilities.TaskCarousel.$o = function SP_Utilities_TaskCarousel$$o($p0) {
    window.onbeforeunload = $p0.$Z_0;
    $p0.$Z_0 = null;
};
Type.registerNamespace('SP.Disposal');
SP.Disposal.DisposalManager = function SP_Disposal_DisposalManager() {
    this.$$d_$1V_0 = Function.createDelegate(this, this.$1V_0);
    this.$c_0 = [];
    $addHandler(window, 'unload', this.$$d_$1V_0);
};
SP.Disposal.DisposalManager.get_instance = function SP_Disposal_DisposalManager$get_instance() {
    if (!SP.Disposal.DisposalManager.$T) {
        SP.Disposal.DisposalManager.$T = new SP.Disposal.DisposalManager();
    }
    return SP.Disposal.DisposalManager.$T;
};
SP.Disposal.DisposalManager.prototype = {
    registerForDisposal: function SP_Disposal_DisposalManager$registerForDisposal(objectToDispose) {
        Array.add(this.$c_0, objectToDispose);
    },
    $1V_0: function SP_Disposal_DisposalManager$$1V_0($p0) {
        $removeHandler(window, 'unload', this.$$d_$1V_0);
        for (var $v_0 = 0; $v_0 < this.$c_0.length; $v_0++) {
            try {
                var $v_1 = this.$c_0[$v_0];

                $v_1.dispose();
            }
            catch ($$e_3) { }
        }
        SP.Disposal.DisposalManager.$T = null;
    }
};
Type.registerNamespace('SP.ListOperation');
SP.ListOperation.ViewOperation = function SP_ListOperation_ViewOperation() {
};
SP.ListOperation.ViewOperation.getSelectedView = function SP_ListOperation_ViewOperation$getSelectedView() {
    return GetSelectedViewNative();
};
SP.ListOperation.ViewOperation.navigateUp = function SP_ListOperation_ViewOperation$navigateUp(viewId) {
    NavigateUpNative(viewId);
};
SP.ListOperation.ViewOperation.refreshView = function SP_ListOperation_ViewOperation$refreshView(viewId) {
    RefreshViewNative(viewId);
};
SP.ListOperation.Selection = function SP_ListOperation_Selection() {
};
SP.ListOperation.Selection.selectListItem = function SP_ListOperation_Selection$selectListItem(iid, bSelect) {
    return SelectListItemNative(iid, bSelect);
};
SP.ListOperation.Selection.getSelectedItems = function SP_ListOperation_Selection$getSelectedItems() {
    return GetSelectedItemsNative();
};
SP.ListOperation.Selection.getSelectedList = function SP_ListOperation_Selection$getSelectedList() {
    return GetSelectedListNative();
};
SP.ListOperation.Selection.getSelectedView = function SP_ListOperation_Selection$getSelectedView() {
    return GetSelectedViewNative();
};
SP.ListOperation.Selection.navigateUp = function SP_ListOperation_Selection$navigateUp(viewId) {
    NavigateUpNative(viewId);
};
SP.ListOperation.Selection.deselectAllListItems = function SP_ListOperation_Selection$deselectAllListItems(iid) {
    return DeselectAllListItemsNative(iid);
};
SP.ListOperation.Overrides = function SP_ListOperation_Overrides() {
};
SP.ListOperation.Overrides.overrideDeleteConfirmation = function SP_ListOperation_Overrides$overrideDeleteConfirmation(listId, overrideText) {
    return OverrideDeleteConfirmationNative(listId, overrideText);
};
SP.BWsaConfig.registerClass('SP.BWsaConfig');
SP.Ticks.registerClass('SP.Ticks');
SP.TimerResetCheck.registerClass('SP.TimerResetCheck');
SP.StreamRowCounters.registerClass('SP.StreamRowCounters');
SP.BWsaDatapoint.registerClass('SP.BWsaDatapoint');
SP.WsaStreamRow.registerClass('SP.WsaStreamRow');
SP.BWsaStream.registerClass('SP.BWsaStream');
SP.BWsaHeader.registerClass('SP.BWsaHeader');
SP.BWsaData.registerClass('SP.BWsaData');
SP.BWsaClient.registerClass('SP.BWsaClient');
SP.UI.AspMenu.registerClass('SP.UI.AspMenu', Sys.UI.Control);
SP.Utilities.CommandBlock.registerClass('SP.Utilities.CommandBlock');
SP.Utilities.TaskTelemetry.registerClass('SP.Utilities.TaskTelemetry');
SP.Utilities.Task.registerClass('SP.Utilities.Task');
SP.Utilities.tcsaver.registerClass('SP.Utilities.tcsaver');
SP.Utilities.TaskCarousel.registerClass('SP.Utilities.TaskCarousel');
SP.Disposal.DisposalManager.registerClass('SP.Disposal.DisposalManager');
SP.ListOperation.ViewOperation.registerClass('SP.ListOperation.ViewOperation');
SP.ListOperation.Selection.registerClass('SP.ListOperation.Selection');
SP.ListOperation.Overrides.registerClass('SP.ListOperation.Overrides');
function sp_core_initialize() {
    SP.BWsaConfig.defaultMaxStreamRows = 1000;
    SP.BWsaConfig.defaultMaxInt32 = 4294967295;
    SP.BWsaConfig.defaultRibbonStreamWidth = 8;
    SP.Ticks.$k = 0;
    SP.TimerResetCheck.$f = 0;
    SP.StreamRowCounters.maxRowCount = 0;
    SP.StreamRowCounters.maxOverwritten = 0;
    SP.BWsaClient.$a = 3 * 4;
    SP.Utilities.TaskCarousel.$5 = [null, null, null, null, null];
    SP.Utilities.TaskCarousel.$3 = null;
    SP.Utilities.TaskCarousel.$C = null;
    SP.Utilities.TaskCarousel.$D = 0;
    SP.Utilities.TaskCarousel.$F = 0;
    SP.Utilities.TaskCarousel.$B = 0;
    SP.Utilities.TaskCarousel.$N = 50;
    SP.Utilities.TaskCarousel.$K = 500;
    SP.Utilities.TaskCarousel.$S = 1000;
    SP.Utilities.TaskCarousel.currentCancellableTask = null;
    SP.Utilities.TaskCarousel.$9 = null;
    SP.Utilities.TaskCarousel.$H = null;
    SP.Utilities.TaskCarousel.$4 = null;
    SP.Utilities.TaskCarousel.$b = SP.Utilities.TaskCarousel.$K;
    SP.Disposal.DisposalManager.$T = null;
}
;
sp_core_initialize();
if (typeof RegisterModuleInit == "function") {
    RegisterModuleInit("sp.core.js", sp_core_initialize);
}
function Sys$UI$Control$dispose$fixup() {
    Sys.UI.Control.callBaseMethod(this, 'dispose');
    if (this._element) {
        this._element.control = undefined;
        delete this._element;
    }
    if (this._parent)
        delete this._parent;
}
if (typeof Sys != "undefined" && typeof Sys.UI != "undefined" && typeof Sys.UI.Control == "function") {
    Sys.UI.Control.prototype.dispose = Sys$UI$Control$dispose$fixup;
}
function SelectListItemNative(iid, bSelect) {
    var o = GetCtxRgiidFromIid(iid);

    if (o == null)
        return false;
    var ctxT = o.ctx;
    var rgiid = o.rgiid;

    if (bSelect) {
        if (ctxT.CurrentSelectedItems == g_MaximumSelectedItemsAllowed)
            return false;
        if (ctxT.dictSel[iid] == null) {
            ctxT.CurrentSelectedItems++;
            ctxT.dictSel[iid] = {
                id: rgiid[1],
                fsObjType: rgiid[2]
            };
        }
    }
    else {
        if (ctxT.dictSel[iid] != null) {
            delete ctxT.dictSel[iid];
            ctxT.CurrentSelectedItems--;
        }
    }
    OnItemSelectionChanged(ctxT, null, true);
    return true;
}
function DeselectAllListItemsNative(iid) {
    var o = GetCtxRgiidFromIid(iid);

    if (o == null)
        return false;
    var ctxT = o.ctx;

    ctxT.dictSel = [];
    ctxT.CurrentSelectedItems = 0;
    OnItemSelectionChanged(ctxT, null, true);
    return true;
}
function GetSelectedItemsNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null || typeof ctxT.dictSel == "undefined")
        return [];
    var i = 0;
    var dictSelRet = [];

    for (var key in ctxT.dictSel) {
        dictSelRet[i] = {
            id: ctxT.dictSel[key].id,
            fsObjType: ctxT.dictSel[key].fsObjType
        };
        i++;
    }
    return dictSelRet;
}
function GetSelectedListNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null)
        return null;
    return ctxT.listName;
}
function GetSelectedViewNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null)
        return null;
    return ctxT.view;
}
function NavigateUpNative(viewId) {
    var ctxId = g_ViewIdToViewCounterMap[viewId];

    if (ctxId == null) {
        return;
    }
    var ctxLocal = window['ctx' + ctxId];

    EnsureScriptParams("inplview", "NavigateUp", ctxLocal);
}
function RefreshViewNative(viewId) {
    var ctxId = g_ViewIdToViewCounterMap[viewId];

    if (ctxId == null) {
        return;
    }
    var ctxLocal = window['ctx' + ctxId];

    if (ctxLocal != null && ctxLocal.IsClientRendering) {
        var evtAjax = {
            'currentCtx': ctxLocal,
            'csrAjaxRefresh': true
        };

        AJAXRefreshView(evtAjax, SP.UI.DialogResult.OK);
    }
}
function OverrideDeleteConfirmationNative(listId, overrideText) {
    for (var ctxId in g_ctxDict) {
        var ctxLocal = g_ctxDict[ctxId];

        if (ctxLocal.listName == listId) {
            ctxLocal.overrideDeleteConfirmation = overrideText;
        }
    }
}
function WSAEnabled() {
    return WSACEIPEnabled() || WSAQoSEnabled();
}
function WSACEIPEnabled() {
    return typeof g_wsaEnabled != "undefined" && g_wsaEnabled;
}
function WSAQoSEnabled() {
    return typeof g_wsaQoSEnabled != "undefined" && g_wsaQoSEnabled;
}
function WSAQoSDatapoints() {
    if (typeof g_wsaQoSDataPoints != "undefined")
        return g_wsaQoSDataPoints;
    else
        return null;
}
function SendWSA() {
    try {
        if (WSAEnabled()) {
            g_thewsa.uploadWsaData();
        }
    }
    catch (e) { }
}
function GetWSA() {
    if (typeof g_thewsa == "undefined" || !g_thewsa) {
        if (SP) {
            if (SP.BWsaClient) {
                g_thewsa = new SP.BWsaClient(SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl() + "WsaUpload.ashx", WSACEIPEnabled(), WSAQoSEnabled(), WSAQoSDatapoints());
                var wsa = g_thewsa;

                if (typeof ULS.Correlation != "undefined" && ULS.Correlation) {
                    wsa.setCorrelationId(ULS.Correlation);
                }
                wsa.createStream(8327, 1, 8, 200);
                wsa.addCommonDatapoint(59);
                wsa.setDw(59, 89);
                if (typeof g_wsaSiteTemplateId != "undefined" && g_wsaSiteTemplateId) {
                    wsa.addCommonDatapoint(8492);
                    wsa.setDw(8492, SP.BWsaClient.calcActionId(g_wsaSiteTemplateId));
                }
                if (typeof g_wsaLCID != "undefined" && g_wsaLCID) {
                    wsa.addCommonDatapoint(8491);
                    wsa.setDw(8491, g_wsaLCID);
                }
                if (typeof addEventListener != "undefined")
                    addEventListener("beforeunload", SendWSA, false);
                else
                    attachEvent("onbeforeunload", SendWSA);
            }
        }
    }
    return g_thewsa;
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.core.js");
}
