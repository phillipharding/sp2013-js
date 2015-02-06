function $_global_timecard() {
    TIMECARD_PATTERN_OF_VACATION_NONE = 1;
    TIMECARD_PATTERN_OF_VACATION_ALLDAY = 2;
    TIMECARD_PATTERN_OF_VACATION_AMOFF = 3;
    TIMECARD_PATTERN_OF_VACATION_PMOFF = 4;
    TIMECARD_NIGHT_DEFINITION = "11:00";
    TimeCardParseResult_InitializePrototype();
    ControlsCollection_InitializePrototype();
    WpControlsCollection_InitializePrototype();
    TimeCardConfig_InitializePrototype();
    TimeCardCalc_InitializePrototype();
    TimeCardCalcHoliday_InitializePrototype();
    (function() {
    ULSSZb:
        ;
        if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
            Sys.Application.notifyScriptLoaded();
        }
        if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
            NotifyScriptLoadedAndExecuteWaitingJobs("timecard.js");
        }
    })();
}
function ULSSZb() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "timecard.commentedjs";
    return o;
}
var TIMECARD_PATTERN_OF_VACATION_NONE;
var TIMECARD_PATTERN_OF_VACATION_ALLDAY;
var TIMECARD_PATTERN_OF_VACATION_AMOFF;
var TIMECARD_PATTERN_OF_VACATION_PMOFF;
var TIMECARD_NIGHT_DEFINITION;

function replaceSuffix(id, str) {
    var parts = id.split("_");

    parts[parts.length - 1] = str;
    return parts.join("_");
}
function TimeCardParseResult_InitializePrototype() {
ULSSZb:
    ;
    TimeCardParseResult.prototype.start = undefined;
    TimeCardParseResult.prototype.end = undefined;
}
function TimeCardParseResult() {
}
function ControlsCollection_InitializePrototype() {
ULSSZb:
    ;
    ControlsCollection.prototype.breakCtrl = undefined;
    ControlsCollection.prototype.earlyWorkHidden = undefined;
    ControlsCollection.prototype.earlyWorkSpan = undefined;
    ControlsCollection.prototype.endCtrl = undefined;
    ControlsCollection.prototype.holidayLateNightWorkHidden = undefined;
    ControlsCollection.prototype.holidayLateNightWorkSpan = undefined;
    ControlsCollection.prototype.holidayWorkHidden = undefined;
    ControlsCollection.prototype.holidayWorkSpan = undefined;
    ControlsCollection.prototype.inCtrl = undefined;
    ControlsCollection.prototype.lateNightHidden = undefined;
    ControlsCollection.prototype.lateNightSpan = undefined;
    ControlsCollection.prototype.lateWorkHidden = undefined;
    ControlsCollection.prototype.lateWorkSpan = undefined;
    ControlsCollection.prototype.oofHidden = undefined;
    ControlsCollection.prototype.oofSpan = undefined;
    ControlsCollection.prototype.outCtrl = undefined;
    ControlsCollection.prototype.overtimeHidden = undefined;
    ControlsCollection.prototype.overtimeSpan = undefined;
    ControlsCollection.prototype.patternOfVacation = undefined;
    ControlsCollection.prototype.startCtrl = undefined;
    ControlsCollection.prototype.workHidden = undefined;
    ControlsCollection.prototype.workSpan = undefined;
}
function ControlsCollection(strid) {
ULSSZb:
    ;
    var get = function(str) {
    ULSSZb:
        ;
        return document.getElementById(replaceSuffix(strid, str));
    };

    this.startCtrl = get("Start");
    this.endCtrl = get("End");
    this.outCtrl = get("Out");
    this.inCtrl = get("In");
    this.breakCtrl = get("Break");
    this.workSpanCtrl = get("WorkingHourSpan");
    this.workHidden = get("WorkingHourHiddenText");
    this.overtimeSpanCtrl = get("OvertimeWorkSpan");
    this.overtimeHidden = get("OvertimeWorkHiddenText");
    this.lateNightSpanCtrl = get("LateNightWorkSpan");
    this.lateNightHidden = get("LateNightWorkHiddenText");
    this.holidayWorkSpan = get("HolidayWorkSpan");
    this.holidayWorkHiddenText = get("HolidayWorkHiddenText");
    this.holidayAndLateNightWorkSpan = get("HolidayAndLateNightWorkSpan");
    this.holidayAndLateNightWorkHiddenText = get("HolidayAndLateNightWorkHiddenText");
    this.lateSpanCtrl = get("LateWorkSpan");
    this.lateHidden = get("LateWorkHiddenText");
    this.earlySpanCtrl = get("EarlyWorkSpan");
    this.earlyHidden = get("EarlyWorkHiddenText");
    this.privateOofSpan = get("PrivateOutOfOfficeSpan");
    this.privateOofHidden = get("PrivateOutOfOfficeHiddenText");
    this.patternOfVacation = get("PatternOfVacation");
}
function WpControlsCollection_InitializePrototype() {
ULSSZb:
    ;
    WpControlsCollection.prototype.breakCtrl = undefined;
    WpControlsCollection.prototype.earlyWorkHidden = undefined;
    WpControlsCollection.prototype.endCtrl = undefined;
    WpControlsCollection.prototype.holidayLateNightWorkHidden = undefined;
    WpControlsCollection.prototype.holidayWorkHidden = undefined;
    WpControlsCollection.prototype.inCtrl = undefined;
    WpControlsCollection.prototype.lateNightHidden = undefined;
    WpControlsCollection.prototype.lateWorkHidden = undefined;
    WpControlsCollection.prototype.oofHidden = undefined;
    WpControlsCollection.prototype.outCtrl = undefined;
    WpControlsCollection.prototype.overtimeHidden = undefined;
    WpControlsCollection.prototype.overtimeSpan = undefined;
    WpControlsCollection.prototype.startCtrl = undefined;
    WpControlsCollection.prototype.workHidden = undefined;
}
function WpControlsCollection(strid) {
ULSSZb:
    ;
    var get = function(str) {
    ULSSZb:
        ;
        return document.getElementById(replaceSuffix(strid, str));
    };

    this.startCtrl = get("Start");
    this.endCtrl = get("End");
    this.outCtrl = get("Out");
    this.inCtrl = get("In");
    this.breakCtrl = get("Break");
    this.workHidden = get("WorkingHourHiddenText");
    this.overtimeHidden = get("OvertimeWorkHiddenText");
    this.lateNightHidden = get("LateNightWorkHiddenText");
    this.holidayWorkHiddenText = get("HolidayWorkHiddenText");
    this.holidayAndLateNightWorkHiddenText = get("HolidayAndLateNightWorkHiddenText");
    this.lateHidden = get("LateWorkHiddenText");
    this.earlyHidden = get("EarlyWorkHiddenText");
    this.privateOofHidden = get("PrivateOutOfOfficeHiddenText");
    this.patternOfVacation = get("PatternOfVacation");
}
function validateTime(str) {
    return Boolean(str.match(/^[0-9][0-9]*:[0-5][0-9]$/));
}
function validate24Time(str) {
    return Boolean(str.match(/^[0-2]?[0-9]:[0-5][0-9]$/));
}
function parseIntLZ(str) {
    var grp = str.match(/0*([1-9].*)/);

    if (grp == undefined)
        return parseInt(str);
    return parseInt(grp[1]);
}
function parseTimeDur(str) {
    if (!validateTime(str) || str == "")
        return 0;
    var grp = str.match(/^([0-9][0-9]*):([0-5][0-9])$/);

    return parseIntLZ(grp[1]) * 60 + parseIntLZ(grp[2]);
}
function parseTimeStartRound(startStr, unit) {
ULSSZb:
    ;
    var startLocal = parseTimeDur(startStr);

    startLocal = Math.floor((startLocal + unit - 1) / unit) * unit;
    return startLocal;
}
function parseTimeEndRound(endStr, unit) {
ULSSZb:
    ;
    var end = parseTimeDur(endStr);

    end = end - end % unit;
    return end;
}
function parseTime(startStr, endStr, unit) {
ULSSZb:
    ;
    var parseResult = new TimeCardParseResult();

    if (startStr == "" || typeof startStr == "undefined")
        return parseResult;
    var startLocal = parseTimeStartRound(startStr, unit);
    var end = parseTimeEndRound(endStr, unit);

    if (end <= startLocal) {
        end += parseTimeDur("24:00");
    }
    parseResult.startLocal = startLocal;
    parseResult.end = end;
    return parseResult;
}
function parseTimeNight(startStr, endStr, unit) {
ULSSZb:
    ;
    var parseResult = new TimeCardParseResult();

    if (startStr == "" || typeof startStr == "undefined")
        return parseResult;
    var startLocal = parseTimeStartRound(startStr, unit);
    var threshold = parseTimeDur(TIMECARD_NIGHT_DEFINITION);

    if (startLocal < threshold) {
        startLocal += parseTimeDur("24:00");
    }
    var end = parseTimeEndRound(endStr, unit);

    if (end < startLocal) {
        end += parseTimeDur("24:00");
    }
    parseResult.start = startLocal;
    parseResult.end = end;
    return parseResult;
}
function timeToString(time) {
ULSSZb:
    ;
    var minute = time % 60;
    var hour = (time - minute) / 60;

    return hourMinuteToStr(hour, minute);
}
function TimeCardConfig_InitializePrototype() {
ULSSZb:
    ;
    TimeCardConfig.prototype = {
        scheduledStart: undefined,
        scheduledEnd: undefined,
        morningStart: undefined,
        morningEnd: undefined,
        afternoonStart: undefined,
        afternoonEnd: undefined,
        startTimeOfADay: undefined,
        nightWorkStart: undefined,
        nightWorkEnd: undefined,
        flex: undefined,
        calcDetails: undefined,
        coreTimeStart: undefined,
        coreTimeEnd: undefined,
        timeUnit: undefined,
        restUnit: undefined
    };
}
function TimeCardConfig() {
}
var gTCConfig;

function TimeCardCalc_InitializePrototype() {
ULSSZb:
    ;
    TimeCardCalc.prototype.vacationPattern = undefined;
    TimeCardCalc.prototype.schedule = undefined;
    TimeCardCalc.prototype.office = undefined;
    TimeCardCalc.prototype.afternoon = undefined;
    TimeCardCalc.prototype.morning = undefined;
    TimeCardCalc.prototype.core = undefined;
    TimeCardCalc.prototype.outs = undefined;
    TimeCardCalc.prototype.breakTime = undefined;
    TimeCardCalc.prototype.defaultBreak = undefined;
    TimeCardCalc.prototype.night = undefined;
    TimeCardCalc.prototype.workTime = undefined;
    TimeCardCalc.prototype.startOfWorkHour = undefined;
    TimeCardCalc.prototype.endOfWorkHour = undefined;
    TimeCardCalc.prototype.offWorkHour = undefined;
    TimeCardCalc.prototype.normalWorkHour = undefined;
    TimeCardCalc.prototype.lateNight = undefined;
    TimeCardCalc.prototype.effectiveWorkHour = undefined;
    TimeCardCalc.prototype.overtimeFlex = undefined;
    TimeCardCalc.prototype.workTimeFlex = undefined;
    TimeCardCalc.prototype.lateNightOverlap = undefined;
    TimeCardCalc.prototype.workTimeNormal = undefined;
    TimeCardCalc.prototype.endOfEarly = undefined;
    TimeCardCalc.prototype.early = undefined;
    TimeCardCalc.prototype.isFlex = undefined;
    TimeCardCalc.prototype.startOfLate = undefined;
    TimeCardCalc.prototype.late = undefined;
    TimeCardCalc.prototype.oof = undefined;
    TimeCardCalc.prototype.oofNormal = undefined;
    TimeCardCalc.prototype.oofNight = undefined;
    TimeCardCalc.prototype.lateNightOvertime = undefined;
    TimeCardCalc.prototype.overtimeNormal = undefined;
    TimeCardCalc.prototype.overtime = undefined;
}
function TimeCardCalc(ctrls, config) {
    this.vacationPattern = function(arg) {
        return arg.toString() == ctrls.patternOfVacation.value;
    };
    this.schedule = function() {
    ULSSZb:
        ;
        return parseTime(config.scheduledStart, config.scheduledEnd, config.timeUnit);
    };
    this.office = function() {
    ULSSZb:
        ;
        return parseTime(ctrls.startCtrl.value, ctrls.endCtrl.value, config.timeUnit);
    };
    this.afternoon = function() {
    ULSSZb:
        ;
        return parseTime(config.afternoonStart, config.afternoonEnd, config.timeUnit);
    };
    this.morning = function() {
    ULSSZb:
        ;
        return parseTime(config.morningStart, config.morningEnd, config.timeUnit);
    };
    this.core = function() {
    ULSSZb:
        ;
        return parseTime(config.coreTimeStart, config.coreTimeEnd, config.timeUnit);
    };
    this.outs = function() {
    ULSSZb:
        ;
        return parseTime(ctrls.outCtrl.value, ctrls.inCtrl.value, config.timeUnit);
    };
    this.breakTime = function() {
    ULSSZb:
        ;
        return parseTimeStartRound(ctrls.breakCtrl.value, config.timeUnit);
    };
    this.defaultBreak = function() {
    ULSSZb:
        ;
        return parseTimeStartRound(config.restUnit, config.timeUnit);
    };
    this.night = function() {
    ULSSZb:
        ;
        return parseTimeNight(config.nightWorkStart, config.nightWorkEnd, config.timeUnit);
    };
    this.workTime = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_ALLDAY))
            return this.normalWorkHour();
        else if (this.isFlex())
            return this.workTimeFlex();
        else
            return this.workTimeNormal();
    };
    this.startOfWorkHour = function() {
    ULSSZb:
        ;
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_AMOFF)) {
            return (this.morning()).start;
        }
        var startLocal = (this.office()).start;
        var coreStart = (this.core()).start;

        if (startLocal > coreStart) {
            return coreStart;
        }
        return startLocal;
    };
    this.endOfWorkHour = function() {
    ULSSZb:
        ;
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_PMOFF)) {
            return (this.afternoon()).end;
        }
        var end = (this.office()).end;
        var coreEnd = (this.core()).end;

        if (end < coreEnd) {
            return coreEnd;
        }
        return end;
    };
    this.offWorkHour = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_AMOFF)) {
            return (this.morning()).end - (this.morning()).start;
        }
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_PMOFF)) {
            return (this.afternoon()).end - (this.afternoon()).start;
        }
        return 0;
    };
    this.normalWorkHour = function() {
    ULSSZb:
        ;
        var schedule = this.schedule();
        var breakTime = this.defaultBreak();

        return schedule.end - schedule.start - breakTime;
    };
    this.lateNight = function() {
    ULSSZb:
        ;
        var rtv = 0;
        var end = (this.office()).end;
        var startLocal = (this.office()).start;
        var nightWorkStart = (this.night()).start;
        var nightWorkEnd = (this.night()).end;

        if (startLocal > nightWorkStart) {
            nightWorkStart = startLocal;
        }
        if (end > nightWorkStart) {
            if (end < nightWorkEnd) {
                rtv = end - nightWorkStart;
            }
            else {
                rtv = nightWorkEnd - nightWorkStart;
            }
        }
        return rtv;
    };
    this.effectiveWorkHour = function() {
    ULSSZb:
        ;
        var workStart = this.startOfWorkHour();
        var workEnd = this.endOfWorkHour();

        return workEnd - workStart - this.breakTime() - this.oofNormal() - this.late() - this.early() - this.lateNight();
    };
    this.overtimeFlex = function() {
    ULSSZb:
        ;
        var effective = this.effectiveWorkHour();
        var normal = this.normalWorkHour();

        if (effective > normal)
            return effective - normal;
        return 0;
    };
    this.workTimeFlex = function() {
    ULSSZb:
        ;
        return this.effectiveWorkHour() - this.overtimeFlex();
    };
    this.lateNightOverlap = function() {
    ULSSZb:
        ;
        var schedule = this.schedule();
        var night = this.night();

        if (schedule.end <= night.start)
            return 0;
        if (schedule.start < night.start) {
            if (schedule.end < night.end) {
                return schedule.end - night.start;
            }
            else {
                return night.end - night.start;
            }
        }
        if (schedule.end < night.end) {
            return schedule.end - schedule.start;
        }
        return night.end - schedule.start;
    };
    this.workTimeNormal = function() {
    ULSSZb:
        ;
        var schedule = this.schedule();
        var breakTime = this.breakTime();
        var end = (this.office()).end;
        var startLocal = (this.office()).start;
        var actualwork = 0;
        var overtime = this.overtimeNormal();
        var ooftime = this.oofNormal();
        var lateNightOverlapped = this.lateNightOverlap();

        if (startLocal < schedule.start)
            startLocal = schedule.start;
        if (startLocal < schedule.end) {
            if (end > schedule.end) {
                end = schedule.end;
            }
            actualwork = end - startLocal;
            if (actualwork < lateNightOverlapped) {
                actualwork = 0;
            }
            else {
                actualwork = actualwork - lateNightOverlapped;
                if (overtime < ooftime) {
                    ooftime = ooftime - overtime;
                }
                else {
                    ooftime = 0;
                }
                if (actualwork < ooftime) {
                    actualwork = 0;
                }
                else {
                    actualwork = actualwork - ooftime;
                }
                if (actualwork < breakTime) {
                    actualwork = 0;
                }
                else {
                    actualwork = actualwork - breakTime;
                }
            }
        }
        return actualwork + this.offWorkHour();
    };
    this.endOfEarly = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_PMOFF)) {
            return (this.morning()).end;
        }
        else {
            if (this.isFlex()) {
                return (this.core()).end;
            }
            else {
                return (this.schedule()).end;
            }
        }
    };
    this.early = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_ALLDAY)) {
            return 0;
        }
        var office = this.office();
        var earlyEnd = Number(this.endOfEarly());

        if (office.end < earlyEnd) {
            return earlyEnd - office.end;
        }
        return 0;
    };
    this.isFlex = function() {
    ULSSZb:
        ;
        return config.flex;
    };
    this.startOfLate = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_AMOFF)) {
            return (this.afternoon()).start;
        }
        else {
            if (this.isFlex()) {
                return (this.core()).start;
            }
            else {
                return (this.schedule()).start;
            }
        }
    };
    this.late = function() {
    ULSSZb:
        ;
        if (this.vacationPattern(TIMECARD_PATTERN_OF_VACATION_ALLDAY)) {
            return 0;
        }
        var office = this.office();
        var lateStart = Number(this.startOfLate());

        if (office.start > lateStart) {
            return Number(office.start) - lateStart;
        }
        return 0;
    };
    this.oof = function() {
    ULSSZb:
        ;
        var rtv = 0;

        return this.oofNormal() + this.oofNight();
    };
    this.oofNormal = function() {
    ULSSZb:
        ;
        var outs = this.outs();
        var office = this.office();
        var nightWork = this.night();
        var rtv = 0;
        var outTimenight = 0;
        var inTimenight = 0;

        if (typeof outs.start == "undefined" || typeof outs.end == "undefined")
            return 0;
        if (outs.start > office.end || outs.end <= office.start)
            return 0;
        if (outs.end > office.end)
            outs.end = office.end;
        rtv = outs.end - outs.start;
        if (outs.end < nightWork.start)
            return rtv;
        if (outs.start > nightWork.end) {
            return rtv;
        }
        if (outs.start < nightWork.start) {
            outTimenight = nightWork.start;
        }
        else {
            outTimenight = outs.start;
        }
        if (outs.end > nightWork.end) {
            inTimenight = nightWork.end;
        }
        else {
            inTimenight = outs.end;
        }
        rtv -= inTimenight - outTimenight;
        return rtv;
    };
    this.oofNight = function() {
    ULSSZb:
        ;
        var outs = this.outs();
        var office = this.office();
        var nightWork = this.night();
        var outTimenight = 0;
        var inTimenight = 0;
        var rtv = 0;

        if (typeof outs.start == "undefined" || typeof outs.end == "undefined")
            return 0;
        if (outs.start > office.end || outs.end <= office.start)
            return 0;
        if (outs.end > office.end)
            outs.end = office.end;
        if (outs.end < nightWork.start)
            return 0;
        if (outs.start > nightWork.end)
            return 0;
        if (outs.start < nightWork.start) {
            outTimenight = nightWork.start;
        }
        else {
            outTimenight = outs.start;
        }
        if (outs.end > nightWork.end) {
            inTimenight = nightWork.end;
        }
        else {
            inTimenight = outs.end;
        }
        return inTimenight - outTimenight;
    };
    this.lateNightOvertime = function() {
    ULSSZb:
        ;
        var rtv = 0;
        var nightWorkStartRevision = 0;
        var startLocal = (this.office()).start;
        var end = (this.office()).end;
        var nightWorkStart = (this.night()).start;
        var nightWorkEnd = (this.night()).end;

        if (end > nightWorkStart) {
            if (startLocal > nightWorkStart) {
                nightWorkStartRevision = startLocal;
            }
            else {
                nightWorkStartRevision = nightWorkStart;
            }
            if (end < nightWorkEnd) {
                rtv = end - nightWorkStartRevision;
            }
            else {
                rtv = nightWorkEnd - nightWorkStartRevision;
            }
        }
        return rtv - this.oofNight();
    };
    this.overtimeNormal = function() {
    ULSSZb:
        ;
        var rtv = 0;
        var nightoverlappedstart = 0;
        var nightoverlappedend = 0;
        var acutualnightwork = 0;
        var startLocal = (this.office()).start;
        var end = (this.office()).end;
        var scheduledStart = (this.schedule()).start;
        var scheduledEnd = (this.schedule()).end;
        var nightWorkStart = (this.night()).start;
        var nightWorkEnd = (this.night()).end;

        if (startLocal < scheduledStart && end > scheduledStart) {
            rtv = scheduledStart - startLocal;
        }
        if (end > scheduledEnd) {
            rtv += end - scheduledEnd;
            if (scheduledEnd < nightWorkStart) {
                nightoverlappedstart = nightWorkStart;
            }
            else {
                if (scheduledEnd < nightWorkEnd) {
                    nightoverlappedstart = scheduledEnd;
                }
                else {
                    nightoverlappedstart = nightWorkEnd;
                }
            }
            if (end > nightoverlappedstart) {
                if (end > nightWorkEnd) {
                    nightoverlappedend = nightWorkEnd;
                }
                else {
                    nightoverlappedend = end;
                }
                if (startLocal > nightoverlappedstart) {
                    acutualnightwork = nightoverlappedend - startLocal;
                }
                else {
                    acutualnightwork = nightoverlappedend - nightoverlappedstart;
                }
                rtv -= acutualnightwork;
            }
        }
        return rtv;
    };
    this.overtime = function() {
    ULSSZb:
        ;
        var rtv = this.overtimeNormal();
        var ooftime = this.oofNormal();

        if (this.isFlex()) {
            return this.overtimeFlex();
        }
        else {
            if (rtv != 0) {
                if (ooftime > rtv) {
                    return 0;
                }
                else {
                    return rtv - ooftime;
                }
            }
            return rtv;
        }
    };
}
function TimeCardCalcHoliday_InitializePrototype() {
ULSSZb:
    ;
    TimeCardCalcHoliday.prototype.workTime = undefined;
    TimeCardCalcHoliday.prototype.oof = undefined;
    TimeCardCalcHoliday.prototype.lateNightOvertime = undefined;
}
function TimeCardCalcHoliday(ctrls, config, tc) {
    var normalTc = tc;

    this.workTime = function() {
    ULSSZb:
        ;
        var oof = normalTc.oofNormal();
        var oofNight = normalTc.oofNight();
        var night = normalTc.lateNightOvertime();
        var office = normalTc.office();

        if (typeof office.start == "undefined" && typeof office.end == "undefined")
            return 0;
        var time = office.end - office.start - normalTc.breakTime() - oof - night - oofNight;

        if (time < 0)
            return 0;
        else
            return time;
    };
    this.oof = function() {
    ULSSZb:
        ;
        return normalTc.oof();
    };
    this.lateNightOvertime = function() {
    ULSSZb:
        ;
        return normalTc.lateNightOvertime();
    };
}
function createTimeCardCalcHoliday(ctrls, config) {
    var tc = new TimeCardCalc(ctrls, config);

    return new TimeCardCalcHoliday(ctrls, config, tc);
}
function collectTimeCardRows(strid) {
ULSSZb:
    ;
    var table = document.getElementById(strid);
    var rows = [];
    var tableRows = table.rows;

    for (var i = 0; i < tableRows.length; i++) {
        rows.push(tableRows[i]);
    }
    rows.shift();
    if (gTCConfig.calcDetails)
        rows.shift();
    rows.pop();
    return rows;
}
function totalCell(rows, locator) {
    var total = 0;

    for (var i = 0; i < rows.length; i++) {
        total += locator(rows[i]);
    }
    return total;
}
function suffixInputLocatorFromRow(row, suffix) {
    var time;
    var regexp = new RegExp(suffix + '$');
    var elems = row.getElementsByTagName('input');

    for (var i = 0; i < elems.length; i++) {
        if (elems[i].id.match(regexp)) {
            time = parseTimeDur(elems[i].value);
            break;
        }
    }
    return time;
}
function suffixSelectLocatorFromRow(row, suffix) {
    var regexp = new RegExp(suffix + '$');
    var elems = row.getElementsByTagName('select');

    for (var i = 0; i < elems.length; i++) {
        if (elems[i].id.match(regexp)) {
            if (elems[i].value == TIMECARD_PATTERN_OF_VACATION_NONE) {
                return 0;
            }
            else if (elems[i].value == TIMECARD_PATTERN_OF_VACATION_PMOFF) {
                return 0.5;
            }
            else if (elems[i].value == TIMECARD_PATTERN_OF_VACATION_AMOFF) {
                return 0.5;
            }
            else if (elems[i].value == TIMECARD_PATTERN_OF_VACATION_ALLDAY) {
                return 1;
            }
        }
    }
    return 0;
}
function createLocator(suffix) {
ULSSZb:
    ;
    return function(row) {
    ULSSZb:
        ;
        return suffixInputLocatorFromRow(row, suffix);
    };
}
function createHolidaysLocator(suffix) {
ULSSZb:
    ;
    return function(row) {
    ULSSZb:
        ;
        return suffixSelectLocatorFromRow(row, suffix);
    };
}
function updateNormalTotal(resultId, eachInputSuffix) {
ULSSZb:
    ;
    var objResult = document.getElementById(resultId);

    if (typeof objResult == "undefined")
        return;
    var rows = collectTimeCardRows("TimeCardTableId");

    objResult.innerHTML = timeToString(totalCell(rows, createLocator(eachInputSuffix)));
}
function updateHolidayTotalNum(resultId, eachSelectSuffix) {
ULSSZb:
    ;
    var objResult = document.getElementById(resultId);

    if (typeof objResult == "undefined")
        return;
    var rows = collectTimeCardRows("TimeCardTableId");

    objResult.innerHTML = String(totalCell(rows, createHolidaysLocator(eachSelectSuffix)));
}
function isAllDayOff(strid) {
ULSSZb:
    ;
    var ctrls = new ControlsCollection(strid);

    return ctrls.patternOfVacation.value == String(TIMECARD_PATTERN_OF_VACATION_ALLDAY);
}
function startEndConsistent(startParam, end) {
ULSSZb:
    ;
    if (typeof startParam == "undefined" && typeof end == "undefined" || startParam == "" && end == "")
        return true;
    return validate24Time(startParam) && validate24Time(end);
}
function validateAll(ctrls) {
    if (ctrls.patternOfVacation.value == String(TIMECARD_PATTERN_OF_VACATION_ALLDAY))
        return true;
    if (validate24Time(ctrls.startCtrl.value) && validate24Time(ctrls.endCtrl.value) && (typeof ctrls.outCtrl == "undefined" && typeof ctrls.inCtrl == "undefined" || startEndConsistent(ctrls.outCtrl.value, ctrls.inCtrl.value)) && (ctrls.breakCtrl.value == "" || validate24Time(ctrls.breakCtrl.value)))
        return true;
    return false;
}
function isStartSide(id) {
    var outReg = /(Out|Start|Break)$/;

    return outReg.test(id);
}
function isEndSide(id) {
ULSSZb:
    ;
    return !isStartSide(id);
}
function updateWorkingHour(ctrls, newVal) {
    if (typeof ctrls.workSpan != "undefined") {
        ctrls.workSpan.innerHTML = newVal;
        ctrls.workHidden.value = newVal;
    }
}
function updateOvertime(ctrls, newVal) {
    ctrls.overtimeSpan.innerHTML = newVal;
    ctrls.overtimeHidden.value = newVal;
}
function updateLateNight(ctrls, newVal) {
    ctrls.lateNightSpan.innerHTML = newVal;
    ctrls.lateNightHidden.value = newVal;
}
function updateLate(ctrls, newVal) {
    ctrls.lateWorkSpan.innerHTML = newVal;
    ctrls.lateWorkHidden.value = newVal;
}
function updateEarly(ctrls, newVal) {
    ctrls.earlyWorkSpan.innerHTML = newVal;
    ctrls.earlyWorkHidden.value = newVal;
}
function updateOof(ctrls, newVal) {
    ctrls.oofSpan.innerHTML = newVal;
    ctrls.oofHidden.value = newVal;
}
function updateWorkingHourHoliday(ctrls, newVal) {
    ctrls.holidayWorkSpan.innerHTML = newVal;
    ctrls.holidayWorkHidden.value = newVal;
}
function updateLateNightHoliday(ctrls, newVal) {
    ctrls.holidayLateNightWorkSpan.innerHTML = newVal;
    ctrls.holidayLateNightWorkHidden.value = newVal;
}
function adjustInput(obj, unit, allDayOff) {
    if (obj.tagName != "INPUT")
        return;
    if (allDayOff) {
        obj.value = "";
        return;
    }
    if ("" == obj.value || "undefined" == typeof obj.value || !validateTime(obj.value)) {
        obj.value = "";
        return;
    }
    if (isStartSide(obj.id)) {
        obj.value = timeToString(parseTimeStartRound(obj.value, unit));
    }
    else {
        obj.value = timeToString(parseTimeEndRound(obj.value, unit));
    }
}
function updateTotal() {
ULSSZb:
    ;
    updateHolidayTotalNum("TotalHolidayNumsId", "PatternOfVacation");
    updateNormalTotal("WorkTotalId", "WorkingHourHiddenText");
    updateNormalTotal("OvertimeTotalId", "OvertimeWorkHiddenText");
    updateNormalTotal("NightWorkTotalId", "LateNightWorkHiddenText");
    updateNormalTotal("HolidayWorkTotalId", "HolidayWorkHiddenText");
    updateNormalTotal("HolidayNightTotalId", "HolidayAndLateNightWorkHiddenText");
    updateNormalTotal("LateTotalId", "LateWorkHiddenText");
    updateNormalTotal("EarlyTotalId", "EarlyWorkHiddenText");
    updateNormalTotal("PrivateOofId", "PrivateOutOfOfficeHiddenText");
}
function updateUserInputHoliday(obj) {
    var unit = gTCConfig.timeUnit;

    adjustInput(obj, unit, false);
    var ctrls = new ControlsCollection(obj.id);

    if (!validateAll(ctrls))
        return false;
    if (gTCConfig.calcDetails) {
        var tc = createTimeCardCalcHoliday(ctrls, gTCConfig);

        updateWorkingHourHoliday(ctrls, timeToString(tc.workTime()));
        updateLateNightHoliday(ctrls, timeToString(tc.lateNightOvertime()));
        updateOof(ctrls, timeToString(tc.oof()));
    }
    else {
        updateWorkingHour(ctrls, timeToString(calcWorkTimeSimple(ctrls, gTCConfig)));
    }
    updateTotal();
    return true;
}
function calcWorkTimeSimple(ctrls, config) {
ULSSZb:
    ;
    var simpleWork = parseTime(ctrls.startCtrl.value, ctrls.endCtrl.value, config.timeUnit);

    if (typeof simpleWork.start == "undefined" && typeof simpleWork.end == "undefined")
        return 0;
    if (simpleWork.start > simpleWork.end)
        return 0;
    var actualWork = simpleWork.end - simpleWork.start;
    var breakTime = parseTimeStartRound(ctrls.breakCtrl.value, config.timeUnit);

    if (actualWork < breakTime)
        return 0;
    return actualWork - breakTime;
}
function updateUserInput(obj) {
    var unit = gTCConfig.timeUnit;

    adjustInput(obj, unit, isAllDayOff(obj.id));
    var ctrls = new ControlsCollection(obj.id);

    if (!validateAll(ctrls))
        return false;
    if (gTCConfig.calcDetails) {
        var tc = new TimeCardCalc(ctrls, gTCConfig);
        var wt = tc.workTime();

        updateWorkingHour(ctrls, timeToString(wt));
        updateOvertime(ctrls, timeToString(tc.overtime()));
        updateLateNight(ctrls, timeToString(tc.lateNightOvertime()));
        updateLate(ctrls, timeToString(tc.late()));
        updateEarly(ctrls, timeToString(tc.early()));
        updateOof(ctrls, timeToString(tc.oof()));
    }
    else {
        updateWorkingHour(ctrls, timeToString(calcWorkTimeSimple(ctrls, gTCConfig)));
    }
    updateTotal();
    return true;
}
function InitTimeCard() {
ULSSZb:
    ;
    updateTotal();
}
function SaveTimeCard() {
ULSSZb:
    ;
    var div = document.getElementById("TimeCardSaveButtonDiv");
    var button = (div.getElementsByTagName("input"))[0];

    button.click();
}
function wpGetTextBySuffix(idSuffix) {
ULSSZb:
    ;
    var element;
    var regexp = new RegExp(idSuffix + "$");
    var div = document.getElementById("TodayControlHolder");
    var elements = div.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id.match(regexp)) {
            element = elements[i];
            break;
        }
    }
}
function wpLinkButtonClick(target, idSuffix) {
ULSSZb:
    ;
    var hidden = wpGetTextBySuffix(idSuffix);

    hidden.value = dtToInputStr(new Date());
    if (typeof hidden.onchange != "undefined")
        hidden.onchange(hidden);
    return true;
}
function hourMinuteToStr(hour, minute) {
ULSSZb:
    ;
    var hourStr = hour < 10 ? "0" + hour.toString() : hour.toString();
    var minuteStr = minute < 10 ? "0" + minute.toString() : minute.toString();

    return hourStr + ":" + minuteStr;
}
function dtToInputStr(dt) {
ULSSZb:
    ;
    return hourMinuteToStr(dt.getHours(), dt.getMinutes());
}
function wpUpdateUserInput(obj) {
    var unit = gTCConfig.timeUnit;

    adjustInput(obj, unit, isAllDayOff(obj.id));
    var ctrls = new ControlsCollection(obj.id);

    if (!validateAll(ctrls))
        return true;
    if (gTCConfig.calcDetails) {
        var tc = new TimeCardCalc(ctrls, gTCConfig);

        ctrls.workHidden.value = timeToString(tc.workTime());
        ctrls.overtimeHidden.value = timeToString(tc.overtime());
        ctrls.lateNightHidden.value = timeToString(tc.lateNightOvertime());
        ctrls.lateWorkHidden.value = timeToString(tc.late());
        ctrls.earlyWorkHidden.value = timeToString(tc.early());
        ctrls.oofHidden.value = timeToString(tc.oof());
    }
    else {
        ctrls.workHidden.value = timeToString(calcWorkTimeSimple(ctrls, gTCConfig));
    }
    return true;
}
function wpHolidayAssignResult(ctrls, tcHoliday) {
    ctrls.holidayWorkHidden.value = timeToString(tcHoliday.workTime());
    ctrls.holidayLateNightWorkHidden.value = timeToString(tcHoliday.lateNightOvertime());
    ctrls.oofHidden.value = timeToString(tcHoliday.oof());
}
function wpUpdateUserInputHoliday(obj) {
    var unit = gTCConfig.timeUnit;

    adjustInput(obj, unit, isAllDayOff(obj.id));
    var ctrls = new ControlsCollection(obj.id);

    if (!validateAll(ctrls))
        return true;
    if (gTCConfig.calcDetails) {
        var tcHoliday = createTimeCardCalcHoliday(ctrls, gTCConfig);

        wpHolidayAssignResult(ctrls, tcHoliday);
    }
    else {
        ctrls.workHidden.value = timeToString(calcWorkTimeSimple(ctrls, gTCConfig));
    }
    return true;
}
$_global_timecard();
