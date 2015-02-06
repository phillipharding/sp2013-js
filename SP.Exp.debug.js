Type.registerNamespace('SP.Exp');
SP.Exp.Node = function SP_Exp_Node(value, children) {
    this.m_children = children;
    this.m_value = value;
};
SP.Exp.Node.v = function SP_Exp_Node$v(value) {
    return new SP.Exp.ValueNode(value);
};
SP.Exp.Node.f = function SP_Exp_Node$f(functionName, children) {
    return new SP.Exp.FunctionNode(functionName, children);
};
SP.Exp.Node.a = function SP_Exp_Node$a(argumentNumber) {
    return new SP.Exp.ArgumentNode(argumentNumber);
};
SP.Exp.Node.m = function SP_Exp_Node$m() {
    return new SP.Exp.MissingArgumentNode();
};
SP.Exp.Node.prototype = {
    m_children: null,
    m_value: null
};
SP.Exp.ValueNode = function SP_Exp_ValueNode(value) {
    SP.Exp.ValueNode.initializeBase(this, [value, null]);
};
SP.Exp.ValueNode.prototype = {
    $K_0: function SP_Exp_ValueNode$$K_0($p0) {
        return this.m_value;
    }
};
SP.Exp.FunctionNode = function SP_Exp_FunctionNode(functionName, children) {
    SP.Exp.FunctionNode.initializeBase(this, [functionName, children]);
};
SP.Exp.FunctionNode.$g = function SP_Exp_FunctionNode$$g($p0, $p1) {
    var $v_0 = $p1.length;
    var $v_1 = new Array($v_0);

    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
        $v_1[$v_2] = $p1[$v_2].$K_0($p0);
    }
    return $v_1;
};
SP.Exp.FunctionNode.prototype = {
    $K_0: function SP_Exp_FunctionNode$$K_0($p0) {
        var $v_0 = SP.Exp.FunctionNode.$g($p0, this.m_children);
        var $v_1 = this.m_value;
        var $v_2 = SP.Exp.Functions.$8[$v_1];

        return $v_2($v_0);
    }
};
SP.Exp.ArgumentNode = function SP_Exp_ArgumentNode(argumentNumber) {
    SP.Exp.ArgumentNode.initializeBase(this, [argumentNumber, null]);
};
SP.Exp.ArgumentNode.prototype = {
    $K_0: function SP_Exp_ArgumentNode$$K_0($p0) {
        var $v_0 = $p0.$R_0[this.m_value];

        if (typeof $v_0 === 'object' && !$v_0) {
            return new SP.Exp.CalcErrorNull();
        }
        return $v_0;
    }
};
SP.Exp.MissingArgumentNode = function SP_Exp_MissingArgumentNode() {
    SP.Exp.MissingArgumentNode.initializeBase(this, [null, null]);
};
SP.Exp.MissingArgumentNode.prototype = {
    $K_0: function SP_Exp_MissingArgumentNode$$K_0($p0) {
        return new SP.Exp.MissingArgumentValue();
    }
};
SP.Exp.Calc = function SP_Exp_Calc() {
};
SP.Exp.Calc.get_strictTypeCoercion = function SP_Exp_Calc$get_strictTypeCoercion() {
    return SP.Exp.Calc.$1;
};
SP.Exp.Calc.set_strictTypeCoercion = function SP_Exp_Calc$set_strictTypeCoercion(value) {
    SP.Exp.Calc.$1 = value;
    return value;
};
SP.Exp.Calc.eval = function SP_Exp_Calc$eval(rootNode, parameters) {
    var $v_0 = new SP.Exp.CalcContext(parameters);
    var $v_1 = rootNode.$K_0($v_0);

    if (SP.Exp.CalcErrorNull.isInstanceOfType($v_1)) {
        $v_1 = null;
    }
    return $v_1;
};
SP.Exp.Calc.registerCustomFunction = function SP_Exp_Calc$registerCustomFunction(name, callback) {
    name = name.toUpperCase();
    if (SP.Exp.Functions.$8[name]) {
        return false;
    }
    SP.Exp.Functions.$8[name] = callback;
    return true;
};
SP.Exp.Calc.valid = function SP_Exp_Calc$valid(rootNode, value) {
    var $v_0 = SP.Exp.Calc.eval(rootNode, [value]);

    if (typeof $v_0 === 'object' && !$v_0) {
        return true;
    }
    switch (SP.Exp.CalcUtils.$3($v_0)) {
    case 1:
        return !!$v_0;
    case 4:
        return $v_0;
    case 3:
        return true;
    default:
        return false;
    }
};
SP.Exp.CalcContext = function SP_Exp_CalcContext($p0) {
    this.$R_0 = $p0;
};
SP.Exp.CalcContext.prototype = {
    $R_0: null
};
SP.Exp.CalcError = function SP_Exp_CalcError() {
};
SP.Exp.CalcError.prototype = {
    toLocaleString: function SP_Exp_CalcError$toLocaleString() {
        return this.toString();
    }
};
SP.Exp.CalcErrorDiv0 = function SP_Exp_CalcErrorDiv0() {
    SP.Exp.CalcErrorDiv0.initializeBase(this);
};
SP.Exp.CalcErrorDiv0.prototype = {
    toString: function SP_Exp_CalcErrorDiv0$toString() {
        return '#DIV/0!';
    }
};
SP.Exp.CalcErrorValue = function SP_Exp_CalcErrorValue() {
    SP.Exp.CalcErrorValue.initializeBase(this);
};
SP.Exp.CalcErrorValue.prototype = {
    toString: function SP_Exp_CalcErrorValue$toString() {
        return '#VALUE!';
    }
};
SP.Exp.CalcErrorRef = function SP_Exp_CalcErrorRef() {
    SP.Exp.CalcErrorRef.initializeBase(this);
};
SP.Exp.CalcErrorRef.prototype = {
    toString: function SP_Exp_CalcErrorRef$toString() {
        return '#REF!';
    }
};
SP.Exp.CalcErrorName = function SP_Exp_CalcErrorName() {
    SP.Exp.CalcErrorName.initializeBase(this);
};
SP.Exp.CalcErrorName.prototype = {
    toString: function SP_Exp_CalcErrorName$toString() {
        return '#NAME?';
    }
};
SP.Exp.CalcErrorNum = function SP_Exp_CalcErrorNum() {
    SP.Exp.CalcErrorNum.initializeBase(this);
};
SP.Exp.CalcErrorNum.prototype = {
    toString: function SP_Exp_CalcErrorNum$toString() {
        return '#NUM!';
    }
};
SP.Exp.CalcErrorNA = function SP_Exp_CalcErrorNA() {
    SP.Exp.CalcErrorNA.initializeBase(this);
};
SP.Exp.CalcErrorNA.prototype = {
    toString: function SP_Exp_CalcErrorNA$toString() {
        return '#N/A';
    }
};
SP.Exp.CalcErrorNull = function SP_Exp_CalcErrorNull() {
    SP.Exp.CalcErrorNull.initializeBase(this);
};
SP.Exp.CalcErrorNull.prototype = {
    toString: function SP_Exp_CalcErrorNull$toString() {
        return '#NULL!';
    }
};
SP.Exp.MissingArgumentValue = function SP_Exp_MissingArgumentValue() {
};
SP.Exp.CalcUtils = function SP_Exp_CalcUtils() {
};
SP.Exp.CalcUtils.convertToNumber = function SP_Exp_CalcUtils$convertToNumber(obj) {
    var $v_0 = SP.Exp.CalcUtils.$3(obj);

    if (SP.Exp.CalcUtils.$7($v_0, 1)) {
        throw Error.argumentType();
    }
    var $v_1 = null;

    switch ($v_0) {
    case 1:
        $v_1 = obj;
        break;
    case 2:
        $v_1 = SP.Exp.CalcUtils.parseNumber(obj, true, true, null);
        break;
    case 3:
        $v_1 = SP.Exp.CalcUtils.convertDateToNumber(obj);
        break;
    case 4:
        $v_1 = obj ? 1 : 0;
        break;
    }
    if (!SP.Exp.CalcUtils.$O($v_1)) {
        throw Error.argumentType();
    }
    return $v_1;
};
SP.Exp.CalcUtils.parseNumber = function SP_Exp_CalcUtils$parseNumber(value, tryPercent, tryCurrency, fallbackCurrencySymbol) {
    var $v_0 = null;
    var $v_1 = false;
    var $v_2 = false;

    while (value.indexOf(' ') >= 0) {
        value = value.replace(' ', '');
    }
    if (tryPercent) {
        var $v_3 = Sys.CultureInfo.CurrentCulture.numberFormat['PercentSymbol'];

        $v_1 = value.indexOf($v_3) >= 0;
        if (!$v_1) {
            $v_3 = Sys.CultureInfo.InvariantCulture.numberFormat['PercentSymbol'];
            $v_1 = value.indexOf($v_3) >= 0;
        }
        value = value.replace($v_3, '');
    }
    if (!$v_1 && tryCurrency) {
        var $v_4 = Sys.CultureInfo.CurrentCulture.numberFormat['CurrencySymbol'];

        if (value.indexOf($v_4) < 0) {
            $v_4 = Sys.CultureInfo.InvariantCulture.numberFormat['CurrencySymbol'];
            if (value.indexOf($v_4) < 0 && fallbackCurrencySymbol) {
                $v_4 = fallbackCurrencySymbol;
            }
        }
        value = value.replace($v_4, '');
        if (!value.indexOf('(') && value.indexOf(')') > 0) {
            value = value.replace('(', '');
            value = value.replace(')', '');
            $v_2 = true;
        }
    }
    $v_0 = Number.parseLocale(value);
    if ($v_0 === null || isNaN($v_0)) {
        $v_0 = Number.parseInvariant(value);
    }
    if ($v_0 !== null && !isNaN($v_0) && isFinite($v_0)) {
        if ($v_1) {
            $v_0 = $v_0 / 100;
        }
        if ($v_2) {
            $v_0 = -$v_0;
        }
    }
    return $v_0;
};
SP.Exp.CalcUtils.convertToString = function SP_Exp_CalcUtils$convertToString(obj) {
    var $v_0 = SP.Exp.CalcUtils.$3(obj);

    if (SP.Exp.CalcUtils.$7($v_0, 2)) {
        throw Error.argumentType();
    }
    var $v_1;

    switch ($v_0) {
    case 1:
        $v_1 = SP.Exp.CalcUtils.$P(obj);
        break;
    case 2:
        $v_1 = obj;
        break;
    case 3:
        var $v_2 = SP.Exp.CalcUtils.convertDateToNumber(obj);

        $v_1 = SP.Exp.CalcUtils.$P($v_2);
        break;
    case 4:
        $v_1 = obj ? 'TRUE' : 'FALSE';
        break;
    default:
        throw Error.argumentType();
    }
    return $v_1;
};
SP.Exp.CalcUtils.convertToBool = function SP_Exp_CalcUtils$convertToBool(obj) {
    var $v_0 = SP.Exp.CalcUtils.$3(obj);

    if (SP.Exp.CalcUtils.$7($v_0, 4)) {
        throw Error.argumentType();
    }
    switch ($v_0) {
    case 4:
        return obj;
    case 1:
        return obj ? true : false;
    case 3:
        return true;
    case 2:
        throw Error.argumentType();
    case 0:
        return false;
    default:
        throw Error.argumentType();
    }
};
SP.Exp.CalcUtils.convertDateToNumber = function SP_Exp_CalcUtils$convertDateToNumber(date) {
    var $v_0;
    var $v_1;
    var $v_2;
    var $v_3;

    $v_0 = SP.Utilities.DateUtility.dateToJulianDay(date.getFullYear(), date.getMonth() + 1, date.getDate());
    $v_1 = $v_0 - 109205;
    $v_2 = (date.getSeconds() + 60 * (date.getMinutes() + 60 * date.getHours())) / 86400;
    $v_3 = $v_1 + $v_2;
    return $v_3;
};
SP.Exp.CalcUtils.escapeLiteralStringForRegEx = function SP_Exp_CalcUtils$escapeLiteralStringForRegEx(unescaped) {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = 4;
    var $v_2 = new Array($v_1);
    var $v_3 = '0'.charCodeAt(0);
    var $v_4 = 'a'.charCodeAt(0) - 10;

    for (var $v_5 = 0; $v_5 < unescaped.length; $v_5++) {
        var $v_6 = unescaped.charCodeAt($v_5);

        for (var $v_7 = 0; $v_7 < $v_1; $v_7++) {
            $v_2[$v_7] = $v_6 >> 4 * ($v_1 - $v_7 - 1) & 15;
            $v_2[$v_7] += $v_2[$v_7] < 10 ? $v_3 : $v_4;
        }
        $v_0.append('\\u');
        $v_0.append(String.fromCharCode.apply(null, $v_2));
    }
    return $v_0.toString();
};
SP.Exp.CalcUtils.$a = function SP_Exp_CalcUtils$$a($p0) {
    $p0 += 109205;
    var $v_0 = $p0 > 0 ? Math.floor($p0) : Math.ceil($p0);
    var $v_1 = SP.Utilities.DateUtility.julianDayToDate($v_0);
    var $v_2 = new Date($v_1.get_year(), $v_1.get_month() - 1, $v_1.get_day());
    var $v_3 = new Date(86400000 * ($p0 - $v_0));

    $v_2.setHours($v_3.getUTCHours());
    $v_2.setMinutes($v_3.getUTCMinutes());
    $v_2.setSeconds($v_3.getUTCSeconds());
    return $v_2;
};
SP.Exp.CalcUtils.$A = function SP_Exp_CalcUtils$$A($p0) {
    if (SP.Exp.CalcError.isInstanceOfType($p0)) {
        return $p0;
    }
    try {
        var $v_0 = SP.Exp.CalcUtils.convertToBool($p0);

        return !$v_0;
    }
    catch ($$e_2) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.CalcUtils.$3 = function SP_Exp_CalcUtils$$3($p0) {
    var $v_0 = Object.getType($p0);

    if ($v_0 === Number) {
        return 1;
    }
    else if ($v_0 === String) {
        return 2;
    }
    else if ($v_0 === Boolean) {
        return 4;
    }
    else if ($v_0 === Date) {
        return 3;
    }
    else if ($v_0 === SP.Exp.CalcErrorValue) {
        return 102;
    }
    else if ($v_0 === SP.Exp.CalcErrorDiv0) {
        return 101;
    }
    else if ($v_0 === SP.Exp.CalcErrorNull) {
        return 103;
    }
    else if ($v_0 === SP.Exp.MissingArgumentValue) {
        return 0;
    }
    throw Error.argumentType();
};
SP.Exp.CalcUtils.$H = function SP_Exp_CalcUtils$$H($p0, $p1) {
    $p0 = SP.Exp.CalcUtils.$B($p0);
    $p1 = SP.Exp.CalcUtils.$B($p1);
    return $p0.localeCompare($p1);
};
SP.Exp.CalcUtils.$N = function SP_Exp_CalcUtils$$N($p0, $p1) {
    var $v_0 = $p1[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToNumber($v_0);

        return $p0($v_1);
    }
    catch ($$e_4) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.CalcUtils.$6 = function SP_Exp_CalcUtils$$6($p0, $p1, $p2) {
    var $v_0 = SP.Exp.CalcUtils.$2($p2);

    if ($v_0) {
        return $v_0;
    }
    try {
        var $v_1 = $p2[0];
        var $v_2 = $p2[1];
        var $v_3 = SP.Exp.CalcUtils.convertToNumber($v_1);
        var $v_4 = SP.Exp.CalcUtils.convertToNumber($v_2);
        var $v_5 = $p0($v_3, $v_4);

        if ($p1 && $p1($v_1, $v_2) && SP.Exp.CalcUtils.$O($v_5)) {
            $v_5 = SP.Exp.CalcUtils.$a($v_5);
        }
        return $v_5;
    }
    catch ($$e_9) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.CalcUtils.$M = function SP_Exp_CalcUtils$$M($p0, $p1) {
    var $v_0 = false;

    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];

        if (SP.Exp.CalcError.isInstanceOfType($v_2)) {
            if (SP.Exp.CalcErrorNull.isInstanceOfType($v_2)) {
                $v_0 = true;
                continue;
            }
            else {
                return $v_2;
            }
        }
        try {
            var $v_3 = SP.Exp.CalcUtils.convertToBool($v_2);

            if ($p1 === !$v_3) {
                return $v_3;
            }
        }
        catch ($$e_6) {
            return new SP.Exp.CalcErrorValue();
        }
    }
    if ($v_0) {
        return new SP.Exp.CalcErrorNull();
    }
    else {
        return $p1;
    }
};
SP.Exp.CalcUtils.$L = function SP_Exp_CalcUtils$$L($p0, $p1) {
    var $v_0 = $p1.length;
    var $v_1 = SP.Exp.CalcUtils.$2($p1);

    if ($v_1) {
        return $v_1;
    }
    var $v_2;

    try {
        $v_2 = SP.Exp.CalcUtils.convertToString($p1[0]);
    }
    catch ($$e_5) {
        return new SP.Exp.CalcErrorValue();
    }
    var $v_3;

    if ($v_0 === 2) {
        try {
            $v_3 = SP.Exp.CalcUtils.convertToNumber($p1[1]);
            $v_3 = Math.floor($v_3);
            if (!$v_3) {
                return '';
            }
            else if ($v_3 < 0) {
                return new SP.Exp.CalcErrorValue();
            }
        }
        catch ($$e_7) {
            return new SP.Exp.CalcErrorValue();
        }
    }
    else {
        $v_3 = 1;
    }
    return $p0($v_2, $v_3);
};
SP.Exp.CalcUtils.$h = function SP_Exp_CalcUtils$$h($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    var $v_1;

    try {
        $v_1 = SP.Exp.CalcUtils.convertToString($p0[1]);
    }
    catch ($$e_3) {
        return new SP.Exp.CalcErrorValue();
    }
    if (!$v_1) {
        return new SP.Exp.CalcErrorValue();
    }
    var $v_2;

    try {
        $v_2 = SP.Exp.CalcUtils.convertToString($p0[0]);
    }
    catch ($$e_5) {
        return new SP.Exp.CalcErrorValue();
    }
    var $v_3;

    if ($p0.length === 3) {
        try {
            $v_3 = SP.Exp.CalcUtils.convertToNumber($p0[2]) - 1;
            if ($v_3 < 0) {
                return new SP.Exp.CalcErrorValue();
            }
        }
        catch ($$e_7) {
            return new SP.Exp.CalcErrorValue();
        }
    }
    else {
        $v_3 = 0;
    }
    $v_1 = $v_1.substr($v_3);
    $v_2 = SP.Exp.CalcUtils.$B($v_2);
    $v_1 = SP.Exp.CalcUtils.$B($v_1);
    $v_2 = SP.Exp.CalcUtils.$f($v_2);
    var $v_4 = new RegExp($v_2);
    var $v_5 = $v_1.search($v_4);

    if ($v_5 === -1) {
        return new SP.Exp.CalcErrorValue();
    }
    return $v_5 + $v_3 + 1;
};
SP.Exp.CalcUtils.$2 = function SP_Exp_CalcUtils$$2($p0) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        var $v_1 = $p0[$v_0];

        if (SP.Exp.CalcError.isInstanceOfType($v_1)) {
            return $v_1;
        }
    }
    return null;
};
SP.Exp.CalcUtils.$V = function SP_Exp_CalcUtils$$V($p0) {
    var $v_0 = $p0[0];

    $p0[0] = $p0[1];
    $p0[1] = $v_0;
};
SP.Exp.CalcUtils.$7 = function SP_Exp_CalcUtils$$7($p0, $p1) {
    if (!SP.Exp.Calc.$1) {
        return false;
    }
    if ($p0 === 1 || $p0 === 3) {
        return !($p1 === 1 || $p1 === 3);
    }
    else {
        return $p0 !== $p1;
    }
};
SP.Exp.CalcUtils.$O = function SP_Exp_CalcUtils$$O($p0) {
    if ($p0 === null || !Number.isInstanceOfType($p0)) {
        return false;
    }
    var $v_0 = $p0;

    return !isNaN($v_0) && isFinite($v_0);
};
SP.Exp.CalcUtils.$f = function SP_Exp_CalcUtils$$f($p0) {
    var $v_0;

    $p0 = $p0.replace(new RegExp('\\\\', 'g'), '\\u005C');
    $p0 = $p0.replace(new RegExp('~\\*', 'g'), '\\u002A');
    $p0 = $p0.replace(new RegExp('~\\?', 'g'), '\\u003F');
    $p0 = $p0.replace(new RegExp('\\.', 'g'), '\\u002E');
    $p0 = $p0.replace(new RegExp('\\*', 'g'), '.*');
    $p0 = $p0.replace(new RegExp('\\?', 'g'), '.');
    $v_0 = new RegExp('([\\^\\$\\+\\!\\:\\|\\(\\)\\{\\}\\[\\]\\=])', 'g');
    var $v_1 = $p0.replace($v_0, '\\$1');

    return $v_1;
};
SP.Exp.CalcUtils.$B = function SP_Exp_CalcUtils$$B($p0) {
    return $p0.toLocaleUpperCase();
};
SP.Exp.CalcUtils.$P = function SP_Exp_CalcUtils$$P($p0) {
    var $v_0 = Sys.CultureInfo.CurrentCulture.numberFormat;
    var $v_1 = $v_0['NumberDecimalSeparator'];
    var $v_2;
    var $v_3 = Math.abs($p0);

    if ($v_3 >= 1E-06 && $v_3 < 1E+20 || !$v_3) {
        var $v_4 = $v_0['NumberGroupSeparator'];

        $v_2 = $p0.localeFormat('N15');
        var $v_5 = new RegExp(SP.Exp.CalcUtils.escapeLiteralStringForRegEx($v_4), 'g');

        $v_2 = $v_2.replace($v_5, '');
        $v_2 = SP.Exp.CalcUtils.$U($v_2, $v_1);
    }
    else {
        var $v_6;
        var $v_7 = $p0 < 0;

        $v_6 = Math.floor(Math.log($v_3) * Math.LOG10E);
        $v_3 /= Math.pow(10, $v_6);
        var $v_8 = new Sys.StringBuilder();

        if ($v_7) {
            $v_8.append('-');
        }
        $v_8.append(SP.Exp.CalcUtils.$U($v_3.localeFormat('N14'), $v_1));
        $v_8.append('E');
        $v_8.append($v_6 < 0 ? '-' : '+');
        $v_8.append((Math.abs($v_6)).localeFormat('D'));
        $v_2 = $v_8.toString();
    }
    return $v_2;
};
SP.Exp.CalcUtils.$U = function SP_Exp_CalcUtils$$U($p0, $p1) {
    var $v_0 = String.localeFormat('({0:D})+$', 0);

    $p0 = $p0.replace(new RegExp($v_0), '');
    if ($p0.endsWith($p1)) {
        $p0 = $p0.replace($p1, '');
    }
    return $p0;
};
SP.Exp.Functions = function SP_Exp_Functions() {
};
SP.Exp.Functions.$X = function SP_Exp_Functions$$X($p0) {
    return SP.Exp.CalcUtils.$6(function($p1_0, $p1_1) {
        return $p1_0 + $p1_1;
    }, function($p1_0, $p1_1) {
        return !!(Date.isInstanceOfType($p1_0) ^ Date.isInstanceOfType($p1_1));
    }, $p0);
};
SP.Exp.Functions.$15 = function SP_Exp_Functions$$15($p0) {
    return SP.Exp.CalcUtils.$6(function($p1_0, $p1_1) {
        return $p1_0 - $p1_1;
    }, function($p1_0, $p1_1) {
        return !!(Date.isInstanceOfType($p1_0) ^ Date.isInstanceOfType($p1_1));
    }, $p0);
};
SP.Exp.Functions.$u = function SP_Exp_Functions$$u($p0) {
    return SP.Exp.CalcUtils.$6(function($p1_0, $p1_1) {
        return $p1_0 * $p1_1;
    }, function($p1_0, $p1_1) {
        return !!(Date.isInstanceOfType($p1_0) ^ Date.isInstanceOfType($p1_1));
    }, $p0);
};
SP.Exp.Functions.$e = function SP_Exp_Functions$$e($p0) {
    return SP.Exp.CalcUtils.$6(function($p1_0, $p1_1) {
        if (!$p1_1) {
            return new SP.Exp.CalcErrorDiv0();
        }
        else {
            return $p1_0 / $p1_1;
        }
    }, function($p1_0, $p1_1) {
        return Date.isInstanceOfType($p1_0) && !Date.isInstanceOfType($p1_1);
    }, $p0);
};
SP.Exp.Functions.$t = function SP_Exp_Functions$$t($p0) {
    return SP.Exp.CalcUtils.$N(function($p1_0) {
        return -$p1_0;
    }, $p0);
};
SP.Exp.Functions.$13 = function SP_Exp_Functions$$13($p0) {
    var $v_0 = function($p1_0, $p1_1) {
        $p1_1 = $p1_1 > 0 ? Math.floor($p1_1) : Math.ceil($p1_1);
        var $v_1 = Math.pow(10, $p1_1);

        return Math.round($p1_0 * $v_1) / $v_1;
    };

    return SP.Exp.CalcUtils.$6($v_0, null, $p0);
};
SP.Exp.Functions.$11 = function SP_Exp_Functions$$11($p0) {
    return SP.Exp.CalcUtils.$N(function($p1_0) {
        return $p1_0 / 100;
    }, $p0);
};
SP.Exp.Functions.$9 = function SP_Exp_Functions$$9($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    var $v_1 = $p0[0];
    var $v_2 = $p0[1];
    var $v_3 = SP.Exp.CalcUtils.$3($v_1);
    var $v_4 = SP.Exp.CalcUtils.$3($v_2);

    if (SP.Exp.CalcUtils.$7($v_3, $v_4)) {
        return new SP.Exp.CalcErrorValue();
    }
    switch ($v_3) {
    case 1:
        var $v_5 = $v_1;

        switch ($v_4) {
        case 1:
            return $v_5 < $v_2;
        case 3:
            return $v_5 < SP.Exp.CalcUtils.convertDateToNumber($v_2);
        case 2:
        case 4:
            return true;
        }
        break;
    case 4:
        switch ($v_4) {
        case 4:
            return !$v_1 && $v_2;
        case 1:
        case 2:
        case 3:
            return false;
        }
        break;
    case 2:
        switch ($v_4) {
        case 2:
            return SP.Exp.CalcUtils.$H($v_1, $v_2) < 0;
        case 1:
        case 3:
            return false;
        case 4:
            return true;
        }
        break;
    case 3:
        var $v_6 = $v_1;

        switch ($v_4) {
        case 3:
            return $v_6.getTime() < $v_2.getTime();
        case 1:
            return SP.Exp.CalcUtils.convertDateToNumber($v_6) < $v_2;
        case 2:
        case 4:
            return true;
        }
        break;
    }
    return new SP.Exp.CalcErrorValue();
};
SP.Exp.Functions.$J = function SP_Exp_Functions$$J($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    var $v_1 = $p0[0];
    var $v_2 = $p0[1];
    var $v_3 = SP.Exp.CalcUtils.$3($v_1);
    var $v_4 = SP.Exp.CalcUtils.$3($v_2);

    if (SP.Exp.CalcUtils.$7($v_3, $v_4)) {
        return new SP.Exp.CalcErrorValue();
    }
    switch ($v_3) {
    case 1:
        var $v_5 = $v_1;

        switch ($v_4) {
        case 1:
            return $v_5 === $v_2;
        case 3:
            return $v_5 === SP.Exp.CalcUtils.convertDateToNumber($v_2);
        default:
            return false;
        }
    case 4:
        switch ($v_4) {
        case 4:
            return $v_1 === $v_2;
        default:
            return false;
        }
    case 2:
        switch ($v_4) {
        case 2:
            return !SP.Exp.CalcUtils.$H($v_1, $v_2);
        default:
            return false;
        }
    case 3:
        var $v_6 = $v_1;

        switch ($v_4) {
        case 3:
            return $v_6.getTime() === $v_2.getTime();
        case 1:
            return SP.Exp.CalcUtils.convertDateToNumber($v_6) === $v_2;
        default:
            return false;
        }
    default:
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$v = function SP_Exp_Functions$$v($p0) {
    return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$J($p0));
};
SP.Exp.Functions.$o = function SP_Exp_Functions$$o($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    SP.Exp.CalcUtils.$V($p0);
    return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$9($p0));
};
SP.Exp.Functions.$j = function SP_Exp_Functions$$j($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    SP.Exp.CalcUtils.$V($p0);
    return SP.Exp.Functions.$9($p0);
};
SP.Exp.Functions.$i = function SP_Exp_Functions$$i($p0) {
    return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$9($p0));
};
SP.Exp.Functions.$Y = function SP_Exp_Functions$$Y($p0) {
    return SP.Exp.CalcUtils.$M($p0, true);
};
SP.Exp.Functions.$10 = function SP_Exp_Functions$$10($p0) {
    return SP.Exp.CalcUtils.$M($p0, false);
};
SP.Exp.Functions.$w = function SP_Exp_Functions$$w($p0) {
    return SP.Exp.CalcUtils.$A($p0[0]);
};
SP.Exp.Functions.$m = function SP_Exp_Functions$$m($p0) {
    return SP.Exp.CalcErrorNull.isInstanceOfType($p0[0]);
};
SP.Exp.Functions.$z = function SP_Exp_Functions$$z($p0) {
    return SP.Exp.CalcErrorNull.isInstanceOfType($p0[0]) ? $p0[1] : $p0[0];
};
SP.Exp.Functions.$k = function SP_Exp_Functions$$k($p0) {
    return SP.Exp.CalcError.isInstanceOfType($p0[0]) ? SP.Exp.CalcErrorNull.isInstanceOfType($p0[0]) ? $p0[0] : $p0[1] : $p0[0];
};
SP.Exp.Functions.$y = function SP_Exp_Functions$$y($p0) {
    return new SP.Exp.CalcErrorNull();
};
SP.Exp.Functions.$l = function SP_Exp_Functions$$l($p0) {
    var $v_0 = $p0[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    try {
        if (SP.Exp.CalcUtils.convertToBool($v_0)) {
            return $p0[1];
        }
        else if ($p0.length > 2) {
            return $p0[2];
        }
        else {
            return false;
        }
    }
    catch ($$e_2) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$q = function SP_Exp_Functions$$q($p0) {
    var $v_0 = $p0[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToString($v_0);

        return $v_1.length;
    }
    catch ($$e_3) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$17 = function SP_Exp_Functions$$17($p0) {
    var $v_0 = $p0[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToString($v_0);

        return $v_1.toUpperCase();
    }
    catch ($$e_3) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$r = function SP_Exp_Functions$$r($p0) {
    var $v_0 = $p0[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToString($v_0);

        return $v_1.toLowerCase();
    }
    catch ($$e_3) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$Z = function SP_Exp_Functions$$Z($p0) {
    var $v_0 = new Sys.StringBuilder();
    var $v_1 = false;
    var $v_2 = SP.Exp.Calc.$1;

    SP.Exp.Calc.$1 = false;
    try {
        for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
            var $v_4 = $p0[$v_3];

            if (SP.Exp.CalcErrorNull.isInstanceOfType($v_4)) {
                continue;
            }
            else if (SP.Exp.CalcError.isInstanceOfType($v_4)) {
                return $v_4;
            }
            if ($v_2) {
                var $v_5 = SP.Exp.CalcUtils.$3($v_4);

                if ($v_5 !== 1 && $v_5 !== 2) {
                    return new SP.Exp.CalcErrorValue();
                }
            }
            $v_1 = true;
            $v_0.append(SP.Exp.CalcUtils.convertToString($v_4));
        }
        if ($v_1) {
            return $v_0.toString();
        }
        else {
            return new SP.Exp.CalcErrorNull();
        }
    }
    finally {
        SP.Exp.Calc.$1 = $v_2;
    }
};
SP.Exp.Functions.$s = function SP_Exp_Functions$$s($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToString($p0[0]);
        var $v_2 = Math.floor(SP.Exp.CalcUtils.convertToNumber($p0[1]));
        var $v_3 = Math.floor(SP.Exp.CalcUtils.convertToNumber($p0[2]));

        if ($v_2 <= 0 || $v_3 < 0) {
            return new SP.Exp.CalcErrorValue();
        }
        else if (!$v_3) {
            return '';
        }
        return $v_1.substr($v_2 - 1, $v_3);
    }
    catch ($$e_5) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$12 = function SP_Exp_Functions$$12($p0) {
    return SP.Exp.CalcUtils.$L(function($p1_0, $p1_1) {
        return $p1_0.substr($p1_0.length - $p1_1, $p1_1);
    }, $p0);
};
SP.Exp.Functions.$p = function SP_Exp_Functions$$p($p0) {
    return SP.Exp.CalcUtils.$L(function($p1_0, $p1_1) {
        return $p1_0.substring(0, $p1_1);
    }, $p0);
};
SP.Exp.Functions.$14 = function SP_Exp_Functions$$14($p0) {
    return SP.Exp.CalcUtils.$h($p0);
};
SP.Exp.Functions.$b = function SP_Exp_Functions$$b($p0) {
    $p0[3] = 0;
    $p0[4] = 0;
    $p0[5] = 0;
    return SP.Exp.Functions.$I($p0);
};
SP.Exp.Functions.$I = function SP_Exp_Functions$$I($p0) {
    var $v_0 = SP.Exp.CalcUtils.$2($p0);

    if ($v_0) {
        return $v_0;
    }
    try {
        var $v_1 = SP.Exp.CalcUtils.convertToNumber($p0[0]);
        var $v_2 = SP.Exp.CalcUtils.convertToNumber($p0[1]);
        var $v_3 = SP.Exp.CalcUtils.convertToNumber($p0[2]);
        var $v_4 = SP.Exp.CalcUtils.convertToNumber($p0[3]);
        var $v_5 = SP.Exp.CalcUtils.convertToNumber($p0[4]);
        var $v_6 = SP.Exp.CalcUtils.convertToNumber($p0[5]);

        if ($v_1 < 1900) {
            $v_1 += 1900;
        }
        if ($v_2 <= SP.Exp.Functions.$G || $v_2 >= 32767 || $v_3 <= SP.Exp.Functions.$G || $v_3 >= 32767 || $v_4 > 32767 || $v_5 > 32767 || $v_6 > 32767) {
            return new SP.Exp.CalcErrorNum();
        }
        var $v_7 = new Date($v_1, $v_2 - 1, $v_3, $v_4, $v_5, $v_6);
        var $v_8 = $v_7.getTime();

        if ($v_8 < SP.Exp.Functions.$T || $v_8 > SP.Exp.Functions.$S) {
            return new SP.Exp.CalcErrorNum();
        }
        return $v_7;
    }
    catch ($$e_A) {
        return new SP.Exp.CalcErrorValue();
    }
};
SP.Exp.Functions.$x = function SP_Exp_Functions$$x($p0) {
    return new Date();
};
SP.Exp.Functions.$16 = function SP_Exp_Functions$$16($p0) {
    var $v_0 = new Date();

    $v_0.setHours(0);
    $v_0.setMinutes(0);
    $v_0.setSeconds(0);
    $v_0.setMilliseconds(0);
    return $v_0;
};
SP.Exp.Functions.$18 = function SP_Exp_Functions$$18($p0) {
    var $v_0 = $p0[0];

    if (SP.Exp.CalcError.isInstanceOfType($v_0)) {
        return $v_0;
    }
    if (Boolean.isInstanceOfType($v_0)) {
        return new SP.Exp.CalcErrorValue();
    }
    var $v_1 = SP.Exp.Calc.$1;

    try {
        SP.Exp.Calc.$1 = false;
        var $v_2 = SP.Exp.CalcUtils.convertToNumber($v_0);

        return $v_2;
    }
    catch ($$e_4) {
        return new SP.Exp.CalcErrorValue();
    }
    finally {
        SP.Exp.Calc.$1 = $v_1;
    }
};
Type.registerNamespace('SP.DateTimeUtil');
SP.DateTimeUtil.GregorianCalendarImpl = function SP_DateTimeUtil_GregorianCalendarImpl() {
    SP.DateTimeUtil.GregorianCalendarImpl.initializeBase(this);
};
SP.DateTimeUtil.GregorianCalendarImpl.$5 = function SP_DateTimeUtil_GregorianCalendarImpl$$5($p0) {
    return SP.DateTimeUtil.SolarCalendarImpl.$5($p0);
};
SP.DateTimeUtil.GregorianCalendarImpl.$c = function SP_DateTimeUtil_GregorianCalendarImpl$$c($p0, $p1, $p2) {
    return SP.DateTimeUtil.GregorianCalendarImpl.$W($p0) + SP.DateTimeUtil.GregorianCalendarImpl.$4[SP.DateTimeUtil.SolarCalendarImpl.$5($p0) ? 1 : 0][$p1 - 1] + $p2 - 1;
};
SP.DateTimeUtil.GregorianCalendarImpl.$W = function SP_DateTimeUtil_GregorianCalendarImpl$$W($p0) {
    var $v_0 = $p0 - 1601;

    return 365 * $v_0 + Math.floor($v_0 / 4) - Math.floor($v_0 / 100) + Math.floor($v_0 / 400);
};
SP.DateTimeUtil.GregorianCalendarImpl.$n = function SP_DateTimeUtil_GregorianCalendarImpl$$n($p0) {
    var $v_0 = $p0;
    var $v_1 = new SP.DateTimeUtil.SimpleDate(0, 0, 0, 0);
    var $v_2;

    $v_1.set_year(Math.floor(1601 + ($v_0 * 400 + 600) / SP.DateTimeUtil.SolarCalendarImpl._DaysIn400Years));
    $v_0 -= SP.DateTimeUtil.GregorianCalendarImpl.$W($v_1.get_year());
    if ($v_0 < 0) {
        $v_1.set_year($v_1.get_year() - 1);
        $v_2 = SP.DateTimeUtil.GregorianCalendarImpl.$5($v_1.get_year());
        $v_0 += $v_2 ? 366 : 365;
    }
    else {
        $v_2 = SP.DateTimeUtil.GregorianCalendarImpl.$5($v_1.get_year());
    }
    $v_1.set_month(1 + ($v_0 >> 5));
    if ($v_1.get_month() < SP.DateTimeUtil.SolarCalendarImpl._MonthsInYear && $v_0 >= SP.DateTimeUtil.GregorianCalendarImpl.$4[$v_2 ? 1 : 0][$v_1.get_month()]) {
        $v_1.set_month($v_1.get_month() + 1);
    }
    $v_1.set_day(1 + $v_0 - SP.DateTimeUtil.GregorianCalendarImpl.$4[$v_2 ? 1 : 0][$v_1.get_month() - 1]);
    return $v_1;
};
SP.DateTimeUtil.GregorianCalendarImpl.$d = function SP_DateTimeUtil_GregorianCalendarImpl$$d($p0, $p1) {
    var $v_0 = SP.DateTimeUtil.GregorianCalendarImpl.$5($p0);

    return SP.DateTimeUtil.GregorianCalendarImpl.$4[$v_0 ? 1 : 0][$p1] - SP.DateTimeUtil.GregorianCalendarImpl.$4[$v_0 ? 1 : 0][$p1 - 1];
};
SP.DateTimeUtil.SimpleDate = function SP_DateTimeUtil_SimpleDate(year, month, day, era) {
    this.$F_0 = year;
    this.$E_0 = month;
    this.$C_0 = day;
    this.$D_0 = era;
    this.$Q_0 = year + month + day + era;
};
SP.DateTimeUtil.SimpleDate.dateGreater = function SP_DateTimeUtil_SimpleDate$dateGreater(di0, di) {
    return di0.get_era() > di.get_era() || di0.get_era() === di.get_era() && (di0.get_year() > di.get_year() || di0.get_year() === di.get_year() && (di0.get_month() > di.get_month() || di0.get_month() === di.get_month() && di0.get_day() > di.get_day()));
};
SP.DateTimeUtil.SimpleDate.dateLess = function SP_DateTimeUtil_SimpleDate$dateLess(di0, di) {
    return di0.get_era() < di.get_era() || di0.get_era() === di.get_era() && (di0.get_year() < di.get_year() || di0.get_year() === di.get_year() && (di0.get_month() < di.get_month() || di0.get_month() === di.get_month() && di0.get_day() < di.get_day()));
};
SP.DateTimeUtil.SimpleDate.dateGreaterEqual = function SP_DateTimeUtil_SimpleDate$dateGreaterEqual(di0, di) {
    return !SP.DateTimeUtil.SimpleDate.dateLess(di0, di);
};
SP.DateTimeUtil.SimpleDate.dateLessEqual = function SP_DateTimeUtil_SimpleDate$dateLessEqual(di0, di) {
    return !SP.DateTimeUtil.SimpleDate.dateGreater(di0, di);
};
SP.DateTimeUtil.SimpleDate.dateEquals = function SP_DateTimeUtil_SimpleDate$dateEquals(di0, di) {
    return di0.get_year() === di.get_year() && di0.get_month() === di.get_month() && di0.get_day() === di.get_day();
};
SP.DateTimeUtil.SimpleDate.prototype = {
    $F_0: 0,
    $E_0: 0,
    $C_0: 0,
    $D_0: 0,
    $Q_0: 0,
    get_year: function SP_DateTimeUtil_SimpleDate$get_year() {
        return this.$F_0;
    },
    set_year: function SP_DateTimeUtil_SimpleDate$set_year(value) {
        this.$F_0 = value << 0;
        return value;
    },
    get_month: function SP_DateTimeUtil_SimpleDate$get_month() {
        return this.$E_0;
    },
    set_month: function SP_DateTimeUtil_SimpleDate$set_month(value) {
        this.$E_0 = value << 0;
        return value;
    },
    get_day: function SP_DateTimeUtil_SimpleDate$get_day() {
        return this.$C_0;
    },
    set_day: function SP_DateTimeUtil_SimpleDate$set_day(value) {
        this.$C_0 = value << 0;
        return value;
    },
    get_era: function SP_DateTimeUtil_SimpleDate$get_era() {
        return this.$D_0;
    },
    set_era: function SP_DateTimeUtil_SimpleDate$set_era(value) {
        this.$D_0 = value << 0;
        return value;
    },
    equals: function SP_DateTimeUtil_SimpleDate$equals(o) {
        return SP.DateTimeUtil.SimpleDate.dateEquals(this, o);
    },
    getHashCode: function SP_DateTimeUtil_SimpleDate$getHashCode() {
        return this.$Q_0;
    }
};
SP.DateTimeUtil.SolarCalendarImpl = function SP_DateTimeUtil_SolarCalendarImpl() {
};
SP.DateTimeUtil.SolarCalendarImpl.$5 = function SP_DateTimeUtil_SolarCalendarImpl$$5($p0) {
    return 0 === $p0 % 400 ? true : 0 === $p0 % 100 ? false : 0 === $p0 % 4 ? true : false;
};
Type.registerNamespace('SP.Utilities');
SP.Utilities.DateUtility = function SP_Utilities_DateUtility() {
};
SP.Utilities.DateUtility.isLeapYear = function SP_Utilities_DateUtility$isLeapYear(year) {
    return SP.DateTimeUtil.GregorianCalendarImpl.$5(year);
};
SP.Utilities.DateUtility.dateToJulianDay = function SP_Utilities_DateUtility$dateToJulianDay(year, month, day) {
    return SP.DateTimeUtil.GregorianCalendarImpl.$c(year, month, day);
};
SP.Utilities.DateUtility.julianDayToDate = function SP_Utilities_DateUtility$julianDayToDate(jDay) {
    return SP.DateTimeUtil.GregorianCalendarImpl.$n(jDay);
};
SP.Utilities.DateUtility.daysInMonth = function SP_Utilities_DateUtility$daysInMonth(year, month) {
    return SP.DateTimeUtil.GregorianCalendarImpl.$d(year, month);
};
SP.Exp.Node.registerClass('SP.Exp.Node');
SP.Exp.ValueNode.registerClass('SP.Exp.ValueNode', SP.Exp.Node);
SP.Exp.FunctionNode.registerClass('SP.Exp.FunctionNode', SP.Exp.Node);
SP.Exp.ArgumentNode.registerClass('SP.Exp.ArgumentNode', SP.Exp.Node);
SP.Exp.MissingArgumentNode.registerClass('SP.Exp.MissingArgumentNode', SP.Exp.Node);
SP.Exp.Calc.registerClass('SP.Exp.Calc');
SP.Exp.CalcContext.registerClass('SP.Exp.CalcContext');
SP.Exp.CalcError.registerClass('SP.Exp.CalcError');
SP.Exp.CalcErrorDiv0.registerClass('SP.Exp.CalcErrorDiv0', SP.Exp.CalcError);
SP.Exp.CalcErrorValue.registerClass('SP.Exp.CalcErrorValue', SP.Exp.CalcError);
SP.Exp.CalcErrorRef.registerClass('SP.Exp.CalcErrorRef', SP.Exp.CalcError);
SP.Exp.CalcErrorName.registerClass('SP.Exp.CalcErrorName', SP.Exp.CalcError);
SP.Exp.CalcErrorNum.registerClass('SP.Exp.CalcErrorNum', SP.Exp.CalcError);
SP.Exp.CalcErrorNA.registerClass('SP.Exp.CalcErrorNA', SP.Exp.CalcError);
SP.Exp.CalcErrorNull.registerClass('SP.Exp.CalcErrorNull', SP.Exp.CalcError);
SP.Exp.MissingArgumentValue.registerClass('SP.Exp.MissingArgumentValue');
SP.Exp.CalcUtils.registerClass('SP.Exp.CalcUtils');
SP.Exp.Functions.registerClass('SP.Exp.Functions');
SP.DateTimeUtil.SolarCalendarImpl.registerClass('SP.DateTimeUtil.SolarCalendarImpl');
SP.DateTimeUtil.GregorianCalendarImpl.registerClass('SP.DateTimeUtil.GregorianCalendarImpl', SP.DateTimeUtil.SolarCalendarImpl);
SP.DateTimeUtil.SimpleDate.registerClass('SP.DateTimeUtil.SimpleDate');
SP.Utilities.DateUtility.registerClass('SP.Utilities.DateUtility');
function sp_exp_initialize() {
    SP.Exp.Calc.$1 = false;
    SP.Exp.Functions.$8 = {
        ADD: SP.Exp.Functions.$X,
        CONCATENATE_DB: SP.Exp.Functions.$Z,
        DIV: SP.Exp.Functions.$e,
        MINUS: SP.Exp.Functions.$t,
        MUL: SP.Exp.Functions.$u,
        PCT: SP.Exp.Functions.$11,
        SUB: SP.Exp.Functions.$15,
        EQ: SP.Exp.Functions.$J,
        NE: SP.Exp.Functions.$v,
        LT: SP.Exp.Functions.$9,
        LE: SP.Exp.Functions.$o,
        GT: SP.Exp.Functions.$j,
        GE: SP.Exp.Functions.$i,
        AND_DB: SP.Exp.Functions.$Y,
        DATE: SP.Exp.Functions.$b,
        DATETIME: SP.Exp.Functions.$I,
        IF: SP.Exp.Functions.$l,
        ISNULL: SP.Exp.Functions.$m,
        LEFT: SP.Exp.Functions.$p,
        LEN: SP.Exp.Functions.$q,
        LOWER: SP.Exp.Functions.$r,
        MID: SP.Exp.Functions.$s,
        NOT: SP.Exp.Functions.$w,
        NOW: SP.Exp.Functions.$x,
        NULL: SP.Exp.Functions.$y,
        NZ: SP.Exp.Functions.$z,
        OR_DB: SP.Exp.Functions.$10,
        RIGHT: SP.Exp.Functions.$12,
        ROUND: SP.Exp.Functions.$13,
        SEARCH: SP.Exp.Functions.$14,
        TODAY: SP.Exp.Functions.$16,
        UPPER: SP.Exp.Functions.$17,
        VALUE: SP.Exp.Functions.$18,
        IFERROR: SP.Exp.Functions.$k
    };
    SP.Exp.Functions.$T = (new Date(1899, 11, 31, 0, 0, 0)).getTime();
    SP.Exp.Functions.$S = (new Date(9999, 11, 31, 23, 59, 59)).getTime();
    SP.Exp.Functions.$G = -32768;
    SP.DateTimeUtil.GregorianCalendarImpl.$4 = [[0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]];
    SP.DateTimeUtil.SolarCalendarImpl._MonthsInYear = 12;
    SP.DateTimeUtil.SolarCalendarImpl._DaysIn400Years = 146097;
}
;
sp_exp_initialize();
if (typeof RegisterModuleInit != 'undefined') {
    RegisterModuleInit("sp.exp.js", sp_exp_initialize);
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.exp.js");
}
