function $_global_core() {
    SPAnimation = {};
    SPAnimation.g_Curves = new Array(7);
    SPAnimation.g_Curves[0] = new SPCurve(0, 0, 0, 0, 0, 0);
    SPAnimation.g_Curves[1] = new SPCurve(1, 1, 0, 0, 0, 0);
    SPAnimation.g_Curves[2] = new SPCurve(2, 2, 0, 0, 0, 0);
    SPAnimation.g_Curves[3] = new SPCurve(3, 3, 0.1, 0.9, 0.2, 1.0);
    SPAnimation.g_Curves[4] = new SPCurve(4, 3, 0.42, 0, 1.0, 1.0);
    SPAnimation.g_Curves[5] = new SPCurve(5, 3, 0, 0, 0.58, 1.0);
    SPAnimation.g_Curves[6] = new SPCurve(6, 3, 0.42, 0.0, 0.58, 1.0);
    SPKeyFrame.prototype = {
        type: 0,
        curveID: 0,
        startTime: 0,
        endTime: 0,
        startValue: 0,
        endValue: 0,
        relativeTo: 0,
        operationType: 0
    };
    SPAnimation.Attribute = {
        PositionX: 1,
        PositionY: 2,
        Height: 3,
        Width: 4,
        Opacity: 5
    };
    SPAnimation.ID = {
        Basic_Show: 0,
        Basic_SlowShow: 1,
        Basic_Fade: 2,
        Basic_Move: 3,
        Basic_Size: 4,
        Content_SlideInFadeInRight: 5,
        Content_SlideInFadeInRightInc: 6,
        Content_SlideOutFadeOutRight: 7,
        Content_SlideInFadeInLeft: 8,
        Content_SlideInFadeInLeftInc: 9,
        SmallObject_SlideInFadeInTop: 10,
        SmallObject_SlideInFadeInLeft: 11,
        Test_Instant: 12,
        Test_Hold: 13,
        Basic_Opacity: 14,
        Basic_QuickShow: 15,
        Basic_QuickFade: 16,
        Content_SlideInFadeInGeneric: 17,
        Basic_StrikeThrough: 18,
        SmallObject_SlideInFadeInBottom: 19,
        SmallObject_SlideOutFadeOutBottom: 20,
        Basic_QuickSize: 21
    };
    SPAnimation.g_Animations = new Array(22);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Show] = new Animation(SPAnimation.ID.Basic_Show, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_SlowShow] = new Animation(SPAnimation.ID.Basic_SlowShow, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 700, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickShow] = new Animation(SPAnimation.ID.Basic_QuickShow, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Fade] = new Animation(SPAnimation.ID.Basic_Fade, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickFade] = new Animation(SPAnimation.ID.Basic_QuickFade, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Move] = new Animation(SPAnimation.ID.Basic_Move, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 0, 367, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Size] = new Animation(SPAnimation.ID.Basic_Size, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 367, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.Height, 3, 0, 367, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickSize] = new Animation(SPAnimation.ID.Basic_QuickSize, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 167, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.Height, 3, 0, 167, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInRight] = new Animation(SPAnimation.ID.Content_SlideInFadeInRight, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, -100, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 367, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInRightInc] = new Animation(SPAnimation.ID.Content_SlideInFadeInRightInc, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 100, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideOutFadeOutRight] = new Animation(SPAnimation.ID.Content_SlideOutFadeOutRight, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 0, 0, 1, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInLeft] = new Animation(SPAnimation.ID.Content_SlideInFadeInLeft, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, 100, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 367, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInLeftInc] = new Animation(SPAnimation.ID.Content_SlideInFadeInLeftInc, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, -100, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInTop] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInTop, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, -40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInLeft] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInLeft, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, 40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Test_Instant] = new Animation(SPAnimation.ID.Test_Instant, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Test_Hold] = new Animation(SPAnimation.ID.Test_Hold, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 1, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 1, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Opacity] = new Animation(SPAnimation.ID.Basic_Opacity, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInGeneric] = new Animation(SPAnimation.ID.Content_SlideInFadeInGeneric, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_StrikeThrough] = new Animation(SPAnimation.ID.Basic_StrikeThrough, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 167, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInBottom] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInBottom, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, 40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideOutFadeOutBottom] = new Animation(SPAnimation.ID.SmallObject_SlideOutFadeOutBottom, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 1, 0, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, 0, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 40, 0, 1)]);
    SPAnimation.g_AnimationEngine = (function() {
        return null;
    })();
    SPAnimation.Logging = window.location.search.indexOf("AnimationLogging=1") != -1;
    SPAnimation.g_AnimationWSA = null;
    SPAnimation.DATAID_SPANIMATION = 9423;
    SPAnimation.g_AnimationThrottleCutoffFPS = 11;
    SPAnimation.g_AnimationThrottleNumInstance = 3;
    if (!IsNullOrUndefined(window.sessionStorage) && IsNullOrUndefined(window.sessionStorage.SPAnimationEnabled))
        TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 1);
    if (!IsNullOrUndefined(window.localStorage) && IsNullOrUndefined(window.localStorage.SPAnimationEnabled))
        TrySetProperty(window.localStorage, "SPAnimationEnabled", 1);
    SPAnimation.Settings = {};
    SPAnimation.Settings.EnableAnimation = function() {
        TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 1);
        TrySetProperty(window.localStorage, "SPAnimationEnabled", 1);
        if (typeof UpdateAnimationUserControl != "undefined")
            UpdateAnimationUserControl(false);
    };
    SPAnimation.Settings.DisableAnimation = function() {
        TrySetProperty(window.localStorage, "SPAnimationEnabled", 0);
        if (typeof UpdateAnimationUserControl != "undefined")
            UpdateAnimationUserControl(false);
    };
    SPAnimation.Settings.DisableSessionAnimation = function() {
        TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 0);
        if (typeof UpdateAnimationUserControl != "undefined")
            UpdateAnimationUserControl(false);
    };
    SPAnimation.Settings.IsAnimationEnabled = function() {
        var bSession = IsNullOrUndefined(window.sessionStorage) ? false : window.sessionStorage.SPAnimationEnabled == 1;
        var bLocal = IsNullOrUndefined(window.localStorage) ? false : window.localStorage.SPAnimationEnabled == 1;

        return bSession && bLocal;
    };
    UpdateAnimationStateFromQuery();
    SPAnimation.State = SPAnimation_State;
    SPAnimation.Object = SPAnimation_Object;
    AnimationEngine.prototype = {
        AnimationQueue: new Array(0),
        sharedTimer: null,
        sharedCancelTimer: null,
        frameInterval: 1000 / 60,
        resetInterval: 30000,
        sharedTimerRefs: 0,
        conflictTable: new Array(0),
        currentAnimationIndex: -1,
        temporaryIDGenerator: 0
    };
    AnimationEngine.prototype.LocalStepper = function() {
        SPAnimation.g_AnimationEngine.StepAllAnimations();
    };
    AnimationEngine.prototype.LocalStopper = function() {
        SPAnimation.g_AnimationEngine.StopEngine();
    };
    AnimationEngine.prototype.StartEngine = function() {
        if (this.sharedTimer != null || this.sharedCancelTimer != null || this.sharedTimerRefs != 0)
            return;
        this.sharedTimer = window.setInterval(AnimationEngine.prototype.LocalStepper, this.frameInterval);
        this.sharedCancelTimer = window.setTimeout(AnimationEngine.prototype.LocalStopper, this.resetInterval);
        this.sharedTimerRefs = 0;
        SPAnimation.g_TelemetryObject.Start();
    };
    AnimationEngine.prototype.StopEngine = function() {
        SPAnimation.g_TelemetryObject.Stop();
        if (this.sharedCancelTimer != null) {
            window.clearTimeout(this.sharedCancelTimer);
            this.sharedCancelTimer = null;
        }
        if (this.sharedTimer != null) {
            window.clearInterval(this.sharedTimer);
            this.sharedTimer = null;
        }
        this.sharedTimerRefs = 0;
        this.conflictTable = new Array(0);
    };
    AnimationEngine.prototype.StartAnimation = function(a) {
        this.AnimationQueue[this.sharedTimerRefs++] = a;
    };
    AnimationEngine.prototype.StopAnimation = function(a) {
        for (var i = 0; i < this.AnimationQueue.length; i++)
            if (this.AnimationQueue[i] == a) {
                this.RemoveTemporaryIds(a);
                this.AnimationQueue[i] = null;
            }
    };
    AnimationEngine.prototype.StepAllAnimations = function() {
        var found = false;
        var lastFrameTime = null;

        for (var i = 0; i < this.AnimationQueue.length; i++) {
            if (this.AnimationQueue[i] != null) {
                if (IsNullOrUndefined(lastFrameTime))
                    lastFrameTime = this.AnimationQueue[i].currentTime;
                this.currentAnimationIndex = i;
                this.AnimationQueue[i].StepAnimation();
                found = true;
            }
        }
        this.currentAnimationIndex = -1;
        if (found && !IsNullOrUndefined(lastFrameTime))
            SPAnimation.g_TelemetryObject.AddPerfData(new Date() - lastFrameTime);
        if (!found)
            this.StopEngine();
    };
    AnimationEngine.prototype.CheckForConflictingAnimations = function(element, attribute) {
        if (element.id == null || element.id == "") {
            var tempID = "tempAnimID_" + String(this.temporaryIDGenerator);

            this.temporaryIDGenerator++;
            element.id = tempID;
        }
        var key = element.id + "_" + String(attribute);
        var idxAnimUnit = this.conflictTable[key];

        if (IsNullOrUndefined(idxAnimUnit) || idxAnimUnit == this.currentAnimationIndex || this.AnimationQueue[idxAnimUnit] == null) {
            this.conflictTable[key] = this.currentAnimationIndex;
        }
        else {
            var confictingAnimUnit = this.AnimationQueue[idxAnimUnit];

            confictingAnimUnit.curveID.SetAttribute(attribute, null);
            var currentAnimUnit = this.AnimationQueue[this.currentAnimationIndex];
            var finishFunc1 = confictingAnimUnit.finishFunc;
            var extraData1 = confictingAnimUnit.extraData;
            var finishFunc2 = currentAnimUnit.finishFunc;
            var extraData2 = currentAnimUnit.extraData;

            currentAnimUnit.finishFunc = finishFunc1 == null ? finishFunc2 == null ? function() {
                confictingAnimUnit.StopAnimation();
            } : function() {
                finishFunc2(extraData2);
                confictingAnimUnit.StopAnimation();
            } : finishFunc2 == null ? function() {
                finishFunc1(extraData1);
                confictingAnimUnit.StopAnimation();
            } : function() {
                finishFunc1(extraData1);
                finishFunc2(extraData2);
                confictingAnimUnit.StopAnimation();
            };
            currentAnimUnit.extraData = null;
            confictingAnimUnit.finishFunc = null;
        }
    };
    AnimationEngine.prototype.RemoveTemporaryIds = function(animUnit) {
        var thisElement;

        if (IsArray(animUnit.element)) {
            var len = animUnit.element.length;

            for (var elIndex = 0; elIndex < len; elIndex++) {
                thisElement = animUnit.element[elIndex];
                if (thisElement.id.indexOf("tempAnimID_") == 0)
                    thisElement.id == null;
            }
        }
        else {
            thisElement = animUnit.element;
            if (thisElement.id.indexOf("tempAnimID_") == 0)
                thisElement.id == null;
        }
    };
    SPAnimation_State.prototype = {
        Index: 0,
        Data: new Array(0)
    };
    SPAnimation_State.prototype.SetAttribute = function(attributeID, value) {
        var idx = this.GetDataIndex(attributeID);

        if (idx == -1) {
            var n = this.Data.length;

            this.Index += attributeID * Math.pow(10, n);
            this.Data[n] = value;
        }
        else
            this.Data[idx] = value;
    };
    SPAnimation_State.prototype.GetAttribute = function(attributeID) {
        var idx = this.GetDataIndex(attributeID);

        return idx == -1 ? null : this.Data[idx];
    };
    SPAnimation_State.prototype.GetDataIndex = function(attributeID) {
        var count = 0;
        var d = this.Index;

        while (d != 0) {
            var r = d % 10;

            if (r == attributeID)
                return count;
            d = Math.floor(d / 10);
            count++;
        }
        return -1;
    };
    SPAnimation_Object.prototype = {
        animationID: -1,
        delay: 0,
        element: null,
        finalState: null,
        finishFunc: null,
        extraData: null,
        arrAnimationUnits: null,
        idxAnimUnit: 0
    };
    SPAnimation_Object.prototype.Initialize = function(animationID, delay, element, finalState, finishFunc, extraData) {
        this.animationID = animationID;
        this.delay = delay;
        this.element = element;
        this.finalState = finalState;
        this.finishFunc = finishFunc;
        this.extraData = extraData;
        this.arrAnimationUnits = new Array(0);
        this.idxAnimUnit = 0;
    };
    SPAnimation_Object.prototype.RunAnimation = function() {
        if (this.ValidateParametersForAnimation()) {
            var len;

            if (SPAnimation.Settings.IsAnimationEnabled()) {
                this.GenerateAnimationUnits();
                len = this.arrAnimationUnits.length;
                for (var i = 0; i < len; i++)
                    this.arrAnimationUnits[i].StartAnimation();
            }
            else {
                var animation = SPAnimation.g_Animations[this.animationID];

                if (IsArray(this.element)) {
                    len = this.element.length;
                    for (var elIndex = 0; elIndex < len; elIndex++)
                        this.AdvanceToFinalState(elIndex, animation);
                }
                else
                    this.AdvanceToFinalState(-1, animation);
                if (this.finishFunc != null) {
                    this.finishFunc(this.extraData);
                }
                if (typeof ExecuteOrDelayUntilScriptLoaded == "function")
                    ExecuteOrDelayUntilScriptLoaded(function() {
                        var wsa = GetAnimationWSA();

                        if (WSAEnabled() && !IsNullOrUndefined(wsa))
                            wsa.addToStreamDw(SPAnimation.DATAID_SPANIMATION, Number(SPAnimation.Settings.IsAnimationEnabled()), 0, 0, 0, 0, 0, 0, 0);
                    }, "SP.core.js");
            }
        }
    };
    SPAnimation_Object.prototype.ValidateParametersForAnimation = function() {
        var isValid = true;

        if (this.animationID == -1 || this.element == null) {
            isValid = false;
        }
        else {
            if (IsArray(this.element)) {
                var len = this.element.length;

                for (var elIndex = 0; elIndex < len; elIndex++) {
                    if (typeof this.element[elIndex].style == "undefined") {
                        isValid = false;
                        break;
                    }
                }
            }
            else if (typeof this.element.style == "undefined")
                isValid = false;
        }
        return isValid;
    };
    SPAnimation_Object.prototype.AdvanceToFinalState = function(elIndex, animation) {
        var finalValue = new SPAnimation_State();
        var kfLen = animation.keyFrames.length;

        for (var i = 0; i < kfLen; i++) {
            var keyframe = animation.keyFrames[i];

            finalValue.SetAttribute(keyframe.type, this.GetFinalValue(keyframe, elIndex));
        }
        var numAttrib = 5;
        var element = IsArray(this.element) ? this.element[elIndex] : this.element;

        for (var attrib = 1; attrib <= numAttrib; attrib++) {
            var value = finalValue.GetAttribute(attrib);

            if (value != null)
                AnimationUnit.prototype.SetStyle(attrib, element, value);
        }
    };
    SPAnimation_Object.prototype.GenerateAnimationUnits = function() {
        var animation = SPAnimation.g_Animations[this.animationID];
        var lastUnit = null;
        var kfLen = animation.keyFrames.length;
        var finalValue = null;

        for (var i = 0; i < kfLen; i++) {
            var keyframe = animation.keyFrames[i];
            var match = this.FindMatchingAnimationUnit(keyframe);
            var elIndex, len;

            if (match != null) {
                match.startValue.SetAttribute(keyframe.type, keyframe.startValue);
                match.curveID.SetAttribute(keyframe.type, keyframe.curveID);
                if (IsArray(this.element)) {
                    len = this.element.length;
                    for (elIndex = 0; elIndex < len; elIndex++) {
                        finalValue = this.GetFinalValue(keyframe, elIndex);
                        if (IsNullOrUndefined(finalValue)) {
                            match.curveID.SetAttribute(keyframe.type, null);
                            break;
                        }
                        else
                            match.targetValue[elIndex].SetAttribute(keyframe.type, finalValue);
                    }
                }
                else {
                    finalValue = this.GetFinalValue(keyframe, -1);
                    if (IsNullOrUndefined(finalValue))
                        match.curveID.SetAttribute(keyframe.type, null);
                    else
                        match.targetValue.SetAttribute(keyframe.type, finalValue);
                }
            }
            else {
                var newUnit = new AnimationUnit(this.element, keyframe.startTime + this.delay, keyframe.endTime - keyframe.startTime, null, null);

                newUnit.startValue.SetAttribute(keyframe.type, keyframe.startValue);
                newUnit.curveID.SetAttribute(keyframe.type, keyframe.curveID);
                if (IsArray(this.element)) {
                    len = this.element.length;
                    for (elIndex = 0; elIndex < len; elIndex++) {
                        if (newUnit.targetValue == null)
                            newUnit.targetValue = new Array(this.element.length);
                        if (newUnit.targetValue[elIndex] == null)
                            newUnit.targetValue[elIndex] = new SPAnimation_State();
                        finalValue = this.GetFinalValue(keyframe, elIndex);
                        if (IsNullOrUndefined(finalValue)) {
                            newUnit.curveID.SetAttribute(keyframe.type, null);
                            break;
                        }
                        else
                            newUnit.targetValue[elIndex].SetAttribute(keyframe.type, finalValue);
                    }
                }
                else {
                    if (newUnit.targetValue == null)
                        newUnit.targetValue = new SPAnimation_State();
                    finalValue = this.GetFinalValue(keyframe, -1);
                    if (IsNullOrUndefined(finalValue))
                        newUnit.curveID.SetAttribute(keyframe.type, null);
                    else
                        newUnit.targetValue.SetAttribute(keyframe.type, finalValue);
                }
                if (lastUnit == null || lastUnit.delay + lastUnit.duration <= newUnit.delay + newUnit.duration)
                    lastUnit = newUnit;
                this.arrAnimationUnits[this.idxAnimUnit++] = newUnit;
            }
        }
        if (lastUnit != null) {
            lastUnit.finishFunc = this.finishFunc;
            lastUnit.extraData = this.extraData;
        }
    };
    SPAnimation_Object.prototype.FindMatchingAnimationUnit = function(keyframe) {
        var len = this.arrAnimationUnits.length;

        for (var i = 0; i < len; i++) {
            var animUnit = this.arrAnimationUnits[i];

            if (animUnit.delay == keyframe.startTime + this.delay && animUnit.duration == keyframe.endTime - keyframe.startTime)
                return animUnit;
        }
        return null;
    };
    SPAnimation_Object.prototype.GetFinalValue = function(keyframe, iElement) {
        var value = null;

        if (!IsNullOrUndefined(keyframe.endValue)) {
            switch (keyframe.relativeTo) {
            case 0:
                var element = IsArray(this.element) ? this.element[iElement] : this.element;
                var initialValue = keyframe.startValue == null ? GetCurrentAttributeValue(element, keyframe.type) : keyframe.startValue;

                value = keyframe.operationType == 0 ? keyframe.endValue * initialValue : keyframe.endValue + initialValue;
                break;
            case 1:
                var finalState = IsArray(this.element) ? this.finalState[iElement] : this.finalState;
                var finalValue = finalState.GetAttribute(keyframe.type);

                if (!IsNullOrUndefined(finalValue))
                    value = keyframe.operationType == 0 ? keyframe.endValue * finalValue : keyframe.endValue + finalValue;
                break;
            case 2:
                value = keyframe.endValue;
                break;
            }
        }
        return value;
    };
    AnimationUnit.prototype = {
        element: null,
        delay: 0,
        duration: 0,
        startValue: null,
        perElementStartValue: null,
        targetValue: null,
        curveID: null,
        finishFunc: null,
        extraData: null,
        startTime: null,
        fIsExecuting: false
    };
    AnimationUnit.prototype.Initialize = function(element, delay, duration, finishFunc, extraData) {
        this.element = element;
        this.delay = delay;
        this.duration = duration;
        this.finishFunc = finishFunc;
        this.extraData = extraData;
        this.startValue = new SPAnimation_State();
        this.perElementStartValue = null;
        this.targetValue = null;
        this.curveID = new SPAnimation_State();
        this.startTime = null;
        this.fIsExecuting = false;
    };
    AnimationUnit.prototype.StartAnimation = function() {
        if (SPAnimation.g_AnimationEngine == null)
            SPAnimation.g_AnimationEngine = new AnimationEngine();
        if (SPAnimation.g_AnimationEngine.sharedTimer == null)
            SPAnimation.g_AnimationEngine.StartEngine();
        this.startTime = new Date();
        this.currentTime = new Date();
        SPAnimation.g_AnimationEngine.StartAnimation(this);
    };
    AnimationUnit.prototype.StopAnimation = function() {
        SPAnimation.g_AnimationEngine.StopAnimation(this);
    };
    AnimationUnit.prototype.StepAnimation = function() {
        this.currentTime = new Date();
        var elapsedTime = Number(this.currentTime) - Number(this.startTime);

        if (elapsedTime < this.delay)
            return;
        elapsedTime -= this.delay;
        var done = false;
        var fFirstFrame = !this.fIsExecuting;
        var numAttrib = 5;

        for (var attrib = 1; attrib <= numAttrib; attrib++) {
            var curveID = this.curveID.GetAttribute(attrib);

            if (IsNullOrUndefined(curveID))
                continue;
            var position = this.PositionFunction(elapsedTime, this.duration, curveID);
            var startVal, targetVal, newValue;
            var thisElement;
            var thisTarget;

            if (IsArray(this.element)) {
                var len = this.element.length;

                for (var elIndex = 0; elIndex < len; elIndex++) {
                    thisElement = this.element[elIndex];
                    startVal = this.startValue.GetAttribute(attrib);
                    thisTarget = this.targetValue[elIndex];
                    targetVal = thisTarget.GetAttribute(attrib);
                    if (IsNullOrUndefined(startVal)) {
                        if (this.perElementStartValue == null)
                            this.perElementStartValue = new Array(this.element.length);
                        if (IsNullOrUndefined(this.perElementStartValue[elIndex]))
                            this.perElementStartValue[elIndex] = new SPAnimation_State();
                        startVal = this.perElementStartValue[elIndex].GetAttribute(attrib);
                        if (IsNullOrUndefined(startVal)) {
                            startVal = GetCurrentAttributeValue(thisElement, attrib);
                            this.perElementStartValue[elIndex].SetAttribute(attrib, startVal);
                        }
                    }
                    if (isNaN(startVal)) {
                        SPAnimation.g_TelemetryObject.LogData("Unexpected: bogus start value for element " + String(thisElement.id) + ", attribute " + String(attrib));
                        newValue = targetVal;
                    }
                    else {
                        newValue = startVal + position * (targetVal - startVal);
                    }
                    if (elapsedTime > this.duration || position > 1) {
                        newValue = targetVal;
                        done = true;
                    }
                    if (fFirstFrame)
                        SPAnimation.g_AnimationEngine.CheckForConflictingAnimations(thisElement, attrib);
                    this.SetStyle(attrib, thisElement, newValue);
                }
            }
            else {
                thisElement = this.element;
                startVal = this.startValue.GetAttribute(attrib);
                thisTarget = this.targetValue;
                targetVal = thisTarget.GetAttribute(attrib);
                if (IsNullOrUndefined(startVal)) {
                    startVal = GetCurrentAttributeValue(this.element, attrib);
                    this.startValue.SetAttribute(attrib, startVal);
                }
                if (isNaN(startVal)) {
                    SPAnimation.g_TelemetryObject.LogData("Unexpected: bogus start value for element " + String(this.element.id) + ", attribute " + String(attrib));
                    newValue = targetVal;
                }
                else {
                    newValue = startVal + position * (targetVal - startVal);
                }
                if (elapsedTime > this.duration || position > 1) {
                    newValue = targetVal;
                    done = true;
                    SPAnimation.g_TelemetryObject.LogData("done");
                }
                if (fFirstFrame)
                    SPAnimation.g_AnimationEngine.CheckForConflictingAnimations(this.element, attrib);
                this.SetStyle(attrib, this.element, newValue);
            }
        }
        this.fIsExecuting = true;
        if (done) {
            this.StopAnimation();
            if (this.finishFunc != null) {
                SPAnimation.g_TelemetryObject.LogData("calling fnishfunc");
                this.finishFunc(this.extraData);
            }
        }
    };
    AnimationUnit.prototype.PositionFunction = function(position, range, curveID) {
        var retValue = 0;
        var curve = SPAnimation.g_Curves[curveID];

        switch (curve.type) {
        case 0:
            retValue = 1;
            break;
        case 1:
            retValue = position < range ? 0 : 1;
            break;
        case 2:
            retValue = position / range;
            break;
        case 3:
            retValue = BezierFunction(curve.x1, curve.y1, curve.x2, curve.y2, position / range);
            break;
        }
        return retValue;
    };
    AnimationUnit.prototype.SetStyle = function(attribute, element, newValue) {
        switch (attribute) {
        case 1:
            this.StyleLeftSetter(element, newValue);
            break;
        case 2:
            this.StyleTopSetter(element, newValue);
            break;
        case 3:
            this.StyleHeightSetter(element, newValue);
            break;
        case 4:
            this.StyleWidthSetter(element, newValue);
            break;
        case 5:
            this.StyleOpacitySetter(element, newValue);
            break;
        }
    };
    AnimationUnit.prototype.StyleLeftSetter = function(element, newValue) {
        if (fRightToLeft)
            element.style.right = String(newValue) + "px";
        else
            element.style.left = String(newValue) + "px";
        if (SPAnimation.Logging)
            SPAnimation.g_TelemetryObject.LogData("element: " + element.id + ", " + (fRightToLeft ? "right" : "left") + ": " + String(newValue) + ", timestamp: " + String(Number(new Date())));
    };
    AnimationUnit.prototype.StyleTopSetter = function(element, newValue) {
        element.style.top = String(newValue) + "px";
        if (SPAnimation.Logging)
            SPAnimation.g_TelemetryObject.LogData("element: " + element.id + ", top: " + String(element.style.top) + ", timestamp: " + String(Number(new Date())));
    };
    AnimationUnit.prototype.StyleHeightSetter = function(element, newValue) {
        element.style.height = String(newValue) + "px";
        if (SPAnimation.Logging)
            SPAnimation.g_TelemetryObject.LogData("element: " + element.id + ", height: " + String(element.style.height) + ", timestamp: " + String(Number(new Date())));
    };
    AnimationUnit.prototype.StyleWidthSetter = function(element, newValue) {
        element.style.width = String(newValue) + "px";
        if (SPAnimation.Logging)
            SPAnimation.g_TelemetryObject.LogData("element: " + element.id + ", width: " + String(element.style.width) + ", timestamp: " + String(Number(new Date())));
    };
    AnimationUnit.prototype.StyleOpacitySetter = function(element, newValue) {
        SetOpacity(element, newValue);
        if (SPAnimation.Logging)
            SPAnimation.g_TelemetryObject.LogData("element: " + element.id + ", opacity: " + String(newValue) + ", timestamp: " + String(Number(new Date())));
    };
    AnimationTelemetry.prototype = {
        perfData: null,
        logData: null,
        perfDataIndex: 0,
        logDataIndex: 0,
        animationIndex: 0,
        startTime: null,
        duration: null,
        numUnits: 0
    };
    AnimationTelemetry.prototype.Start = function() {
        this.startTime = new Date();
        this.perfDataIndex = 0;
        this.logDataIndex = 0;
    };
    AnimationTelemetry.prototype.Stop = function() {
        this.duration = Number(new Date()) - Number(this.startTime);
        this.numUnits = SPAnimation.g_AnimationEngine.sharedTimerRefs;
        this.CalculateAndShowStatistics();
        this.perfDataIndex = 0;
        this.logDataIndex = 0;
    };
    AnimationTelemetry.prototype.AddPerfData = function(time) {
        this.perfData[this.perfDataIndex++] = time;
    };
    AnimationTelemetry.prototype.LogData = function(data) {
        this.logData[this.logDataIndex++] = data;
    };
    AnimationTelemetry.prototype.CalculateStatistics = function() {
        var fps = 0;
        var min = 0;
        var max = 0;
        var avg = 0;
        var stddev = 0;
        var log = "";
        var all = "";
        var duration = this.duration;

        if (IsNullOrUndefined(duration))
            duration = Number(new Date()) - Number(this.startTime);
        if (SPAnimation.Logging && this.logDataIndex > 0) {
            var logIndex = this.logDataIndex;

            for (var i = 0; i < logIndex; i++) {
                if (i != 0)
                    log += "<br/>";
                log += this.logData[i];
            }
        }
        if (this.perfDataIndex > 0) {
            min = Number.MAX_VALUE;
            max = Number.MIN_VALUE;
            var perfIndex = this.perfDataIndex;

            for (i = 0; i < perfIndex; i++) {
                if (this.perfData[i] < min)
                    min = this.perfData[i];
                if (this.perfData[i] > max)
                    max = this.perfData[i];
                avg += this.perfData[i];
                if (i != 0)
                    all += ", ";
                all += this.perfData[i];
            }
            if (perfIndex > 1)
                avg /= perfIndex - 1;
            avg = Math.round(avg * 100) / 100;
            for (i = 0; i < perfIndex; i++) {
                var temp = this.perfData[i] - avg;

                temp = temp * temp;
                stddev += temp;
            }
            if (perfIndex > 1)
                stddev /= perfIndex - 1;
            stddev = Math.sqrt(stddev);
            stddev = Math.round(stddev * 100) / 100;
            fps = this.perfDataIndex / duration * 1000;
            fps = Math.round(fps);
        }
        var stats = new Array(9);

        stats[0] = duration;
        stats[1] = fps;
        stats[2] = min;
        stats[3] = max;
        stats[4] = avg;
        stats[5] = stddev;
        stats[6] = all;
        stats[7] = log;
        stats[8] = this.numUnits;
        return stats;
    };
    AnimationTelemetry.prototype.CalculateAndShowStatistics = function() {
        var stats = this.CalculateStatistics();

        SPAnimation.g_LastAnimationTelemetryData = stats;
        this.ShowAnimationStats(stats[0], stats[1], stats[2], stats[3], stats[4], stats[5], stats[6], stats[7], stats[8]);
        if (typeof ExecuteOrDelayUntilScriptLoaded == "function")
            ExecuteOrDelayUntilScriptLoaded(function() {
                var wsa = GetAnimationWSA();

                if (WSAEnabled() && !IsNullOrUndefined(wsa))
                    wsa.addToStreamDw(SPAnimation.DATAID_SPANIMATION, Number(SPAnimation.Settings.IsAnimationEnabled()), stats[0], stats[1], stats[2], stats[3], Math.round(stats[4]), Math.round(stats[5]), stats[8]);
            }, "SP.core.js");
        if (!IsNullOrUndefined(window.sessionStorage)) {
            if (stats[1] < SPAnimation.g_AnimationThrottleCutoffFPS) {
                TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", IsNullOrUndefined(window.sessionStorage.SPAnimationThrottleCounter) ? 1 : Number(window.sessionStorage.SPAnimationThrottleCounter) + 1);
                if (window.sessionStorage.SPAnimationThrottleCounter >= SPAnimation.g_AnimationThrottleNumInstance) {
                    SPAnimation.Settings.DisableSessionAnimation();
                    TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", 0);
                }
            }
            else {
                TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", 0);
            }
        }
    };
    AnimationTelemetry.prototype.ShowAnimationStats = function(duration, fps, min, max, avg, stddev, all, log, numUnits) {
        this.animationIndex++;
        var i = String(this.animationIndex);

        if (typeof DeveloperDashboard != "undefined" && typeof DeveloperDashboard.PostMsg != "undefined") {
            var bStringsLoaded = typeof Strings != "undefined" && typeof Strings.STS != "undefined";
            var sDuration = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Duration != "undefined" ? Strings.STS.L_DevDashAnimation_Duration : "Duration";
            var sFPS = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_FPS != "undefined" ? Strings.STS.L_DevDashAnimation_FPS : "FPS";
            var sMin = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Min != "undefined" ? Strings.STS.L_DevDashAnimation_Min : "Min";
            var sMax = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Max != "undefined" ? Strings.STS.L_DevDashAnimation_Max : "Max";
            var sAvg = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Avg != "undefined" ? Strings.STS.L_DevDashAnimation_Avg : "Average";
            var sStdDev = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Stddev != "undefined" ? Strings.STS.L_DevDashAnimation_Stddev : "Standard Dev";
            var sUnits = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_NumUnits != "undefined" ? Strings.STS.L_DevDashAnimation_NumUnits : "#Units";
            var sFrames = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_AllFrames != "undefined" ? Strings.STS.L_DevDashAnimation_AllFrames : "All Frames:";
            var sAnimation = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Header != "undefined" ? Strings.STS.L_DevDashAnimation_Header : "Animation";
            var sMillisec = bStringsLoaded && typeof Strings.STS.L_DevDashAnimation_Millisec != "undefined" ? Strings.STS.L_DevDashAnimation_Millisec : "ms";
            var animStats = "<div class='ms-dd-anim'>" + "<div class='ms-dd-anim-header'>" + sAnimation + " " + i + "</div>" + "<table class='ms-dd-anim-table'>" + "<tr><td>" + sDuration + "</td><td>" + sFPS + "</td><td>" + sMin + "</td><td>" + sMax + "</td><td>" + sAvg + "</td><td>" + sStdDev + "</td><td>" + sUnits + "</td></tr>" + "<tr><td><span id='duration" + i + "'>" + String(duration) + sMillisec + "</span></td>" + "<td><span id='fps" + i + "'>" + String(fps) + "</span></td>" + "<td><span id='min" + i + "'>" + String(min) + sMillisec + "</span></td>" + "<td><span id='max" + i + "'>" + String(max) + sMillisec + "</span></td>" + "<td><span id='avg" + i + "'>" + String(avg) + sMillisec + "</span></td>" + "<td><span id='stddev" + i + "'>" + String(stddev) + "</span></td>" + "<td><span id='numunit" + i + "'>" + String(numUnits) + "</span></td>" + "</tr>" + "<tr><td colspan='7'><div id='all" + i + "'> " + sFrames + all + "</div></td></tr>" + "<tr><td colspan='7'><div id='log" + i + "'>" + log + "</div></td></tr>" + "</table>" + "</div>";

            DeveloperDashboard.PostMsg("MS.AnimationTelemetry", "AddAnimationData", animStats);
        }
    };
    SPAnimation.g_TelemetryObject = new AnimationTelemetry();
    SPAnimation.g_LastAnimationTelemetryData = null;
    SPAnimationUtility = {};
    SPAnimationUtility.BasicAnimator = {};
    SPAnimationUtility.BasicAnimator.FadeIn = function(element, finishFunc, data) {
        if (element == null)
            return;
        SetOpacity(element, 0);
        if (element.style.display == "none") {
            element.style.display = "";
        }
        if (element.style.visibility == "hidden") {
            element.style.visibility = "";
        }
        var state = new SPAnimation.State();

        state.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var o = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, 0, element, state, finishFunc, data);

        o.RunAnimation();
    };
    SPAnimationUtility.BasicAnimator.FadeOut = function(element, finishFunc, data) {
        if (element == null)
            return;
        var state = new SPAnimation.State();

        state.SetAttribute(SPAnimation.Attribute.Opacity, 0);
        var o = new SPAnimation.Object(SPAnimation.ID.Basic_QuickFade, 0, element, state, finishFunc, data);

        o.RunAnimation();
    };
    SPAnimationUtility.BasicAnimator.Move = function(element, posX, posY, finishFunc, data) {
        if (element == null)
            return;
        var newX = posX == null ? pxToNum(element.style.left) : posX;
        var newY = posY == null ? pxToNum(element.style.top) : posY;
        var state = new SPAnimation.State();

        state.SetAttribute(SPAnimation.Attribute.PositionX, newX);
        state.SetAttribute(SPAnimation.Attribute.PositionY, newY);
        var o = new SPAnimation.Object(SPAnimation.ID.Basic_Move, 0, element, state, finishFunc, data);

        o.RunAnimation();
    };
    SPAnimationUtility.BasicAnimator.StrikeThrough = function(element, strikeThroughWidth, finishFunc, data) {
        if (element == null)
            return;
        var topOffset = SPAnimationUtility.BasicAnimator.GetTopOffset(element);
        var leftOffset = SPAnimationUtility.BasicAnimator.GetLeftOffset(element);
        var rightOffset = SPAnimationUtility.BasicAnimator.GetRightOffset(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;

        if (strikeThroughWidth == null)
            strikeThroughWidth = width;
        var strikeThroughHost = document.createElement('div');
        var strikeThroughWrapper = document.createElement('div');

        strikeThroughWrapper.style.overflow = 'hidden';
        var plainTextWrapper = document.createElement('div');

        plainTextWrapper.style.overflow = 'hidden';
        var strikeThroughText = element.cloneNode(true);

        strikeThroughText.style.textDecoration = 'line-through';
        strikeThroughWrapper.appendChild(strikeThroughText);
        var plainText = element.cloneNode(true);

        plainTextWrapper.appendChild(plainText);
        strikeThroughHost.appendChild(plainTextWrapper);
        strikeThroughHost.appendChild(strikeThroughWrapper);
        element.parentNode.appendChild(strikeThroughHost);
        element.style.visibility = 'hidden';
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(strikeThroughHost, topOffset, leftOffset, height, width);
        var overlapMargin = 8;

        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(strikeThroughWrapper, 0, 0, height, overlapMargin);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(plainTextWrapper, 0, 0, height, width);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(strikeThroughText, 0, 0, height, width);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(plainText, 0, 0, height, width);
        if (!fRightToLeft) {
            plainTextWrapper.style.left = (plainText.style.left = '');
            plainTextWrapper.style.right = (plainText.style.right = '0px');
        }
        else {
            plainTextWrapper.style.right = (plainText.style.right = '');
            plainTextWrapper.style.left = (plainText.style.left = '0px');
        }
        var plainTextState = new SPAnimation.State();

        plainTextState.SetAttribute(SPAnimation.Attribute.Width, width - strikeThroughWidth);
        var plainTextAnimation = new SPAnimation.Object(SPAnimation.ID.Basic_StrikeThrough, 0, plainTextWrapper, plainTextState, null, data);

        plainTextAnimation.RunAnimation();
        var strikeThroughState = new SPAnimation.State();

        strikeThroughState.SetAttribute(SPAnimation.Attribute.Width, strikeThroughWidth);
        var strikeThroughAnimation = new SPAnimation.Object(SPAnimation.ID.Basic_StrikeThrough, 0, strikeThroughWrapper, strikeThroughState, function() {
            element.style.textDecoration = 'line-through';
            element.style.visibility = '';
            element.parentNode.removeChild(strikeThroughHost);
            if (finishFunc != null) {
                finishFunc();
            }
        }, data);

        strikeThroughAnimation.RunAnimation();
    };
    SPAnimationUtility.BasicAnimator.PositionAbsolute = function(element) {
        if (element == null)
            return;
        var topOffset = SPAnimationUtility.BasicAnimator.GetTopOffset(element);
        var leftOffset = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(element) : SPAnimationUtility.BasicAnimator.GetLeftOffset(element);
        var offsetWidth = element.offsetWidth == 0 ? element.parentNode.offsetWidth : element.offsetWidth;
        var offsetHeight = element.offsetHeight;

        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(element, topOffset, leftOffset, offsetHeight, offsetWidth);
    };
    SPAnimationUtility.BasicAnimator.PositionRelative = function(element) {
        if (element == null)
            return;
        SPAnimationUtility.BasicAnimator.PositionRelativeExact(element, 0, 0, null, null);
    };
    SPAnimationUtility.BasicAnimator.PositionAbsoluteExact = function(element, topValue, leftValue, heightValue, widthValue) {
        if (element == null)
            return;
        element.style.position = "absolute";
        SPAnimationUtility.BasicAnimator.PositionElement(element, topValue, leftValue, heightValue, widthValue);
    };
    SPAnimationUtility.BasicAnimator.PositionRelativeExact = function(element, topValue, leftValue, heightValue, widthValue) {
        if (element == null)
            return;
        element.style.position = "relative";
        SPAnimationUtility.BasicAnimator.PositionElement(element, topValue, leftValue, heightValue, widthValue);
    };
    SPAnimationUtility.BasicAnimator.ResetPosition = function(element) {
        if (element == null)
            return;
        element.style.position = (element.style.top = (element.style.left = ""));
    };
    SPAnimationUtility.BasicAnimator.GetLeftOffset = function(element) {
        if (element == null)
            return 0;
        var offsetLeft = element.offsetLeft;

        while (element.offsetParent != null) {
            element = element.offsetParent;
            if (SPAnimationUtility.BasicAnimator.IsPositioned(element) && !(browseris.firefox && element.tagName.toUpperCase() == 'TD'))
                break;
            offsetLeft += element.offsetLeft;
        }
        return offsetLeft;
    };
    SPAnimationUtility.BasicAnimator.GetTopOffset = function(element) {
        if (element == null)
            return 0;
        var offsetTop = element.offsetTop;

        while (element.offsetParent != null) {
            element = element.offsetParent;
            if (SPAnimationUtility.BasicAnimator.IsPositioned(element) && !(browseris.firefox && element.tagName.toUpperCase() == 'TD'))
                break;
            offsetTop += element.offsetTop;
        }
        return offsetTop;
    };
    SPAnimationUtility.BasicAnimator.IsPositioned = function(element) {
        var style = Boolean(window.getComputedStyle) ? window.getComputedStyle(element, null) : element.currentStyle;

        return style.position == "relative" || style.position == "absolute";
    };
    SPAnimationUtility.BasicAnimator.GetDefaultCloneId = function(element) {
        return element.id + "_clone";
    };
    SPAnimationUtility.BasicAnimator.CloneElement = function(element, fMakeTransparent, fInsertBefore, fAdjustWidth, fUseFullOffsets, fSetZIndex, fNoLeftOffset) {
        if (element == null)
            return null;
        if (element.id != null && element.id.indexOf("_clone") != -1)
            return element;
        var cloneId = SPAnimationUtility.BasicAnimator.GetDefaultCloneId(element);
        var cloneElement = document.getElementById(cloneId);

        if (cloneElement == null) {
            cloneElement = document.createElement("div");
            if (fSetZIndex)
                cloneElement.style.zIndex = "-100";
            var scrollPosition = SPAnimationUtility.BasicAnimator.GetWindowScrollPosition();
            var scrollX = scrollPosition.x;
            var scrollY = scrollPosition.y;
            var isPositioned = SPAnimationUtility.BasicAnimator.IsPositioned(element);
            var topOffset = fUseFullOffsets ? SPAnimationUtility.BasicAnimator.GetTopOffset(element) : element.offsetTop;

            if (element.parentNode != null && element.parentNode.offsetTop > topOffset)
                topOffset = element.parentNode.offsetTop;
            if (!isPositioned) {
                topOffset -= scrollY;
            }
            var leftOffset = null;

            if (!fNoLeftOffset) {
                leftOffset = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(element) : fUseFullOffsets ? SPAnimationUtility.BasicAnimator.GetLeftOffset(element) : element.offsetLeft;
                if (!isPositioned) {
                    leftOffset -= scrollX;
                }
            }
            var offsetWidth = element.offsetWidth == 0 ? element.parentNode.offsetWidth : element.offsetWidth;

            if (fAdjustWidth)
                offsetWidth = offsetWidth + 1;
            var offsetHeight = element.offsetHeight == 0 ? element.parentNode.offsetHeight : element.offsetHeight;

            SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(cloneElement, topOffset, leftOffset, offsetHeight, offsetWidth);
            var htmlContent = element.innerHTML.replace(/(\s+)id=(["])([^"]*)(["])/g, "$1");

            htmlContent = htmlContent.replace(/(\s+)id=(['])([^']*)(['])/g, "$1");
            if (browseris.ie8standard) {
                htmlContent = htmlContent.replace(/(\s+)id=([^\s<>]*)([\s>])/g, "$1$3");
            }
            cloneElement.innerHTML = htmlContent;
            cloneElement.className = element.className;
            cloneElement.id = cloneId;
            element.style.visibility = "hidden";
            if (fMakeTransparent)
                SetOpacity(element, 0);
            if (fInsertBefore)
                element.parentNode.insertBefore(cloneElement, element);
            else
                element.parentNode.appendChild(cloneElement);
        }
        return cloneElement;
    };
    SPAnimationUtility.BasicAnimator.CommonResize = function(element, newHeight, newWidth, finishFunc, data, animationId) {
        if (element == null)
            return;
        if (!IsNullOrUndefined(newHeight) && (element.style.height == null || element.style.height == "")) {
            element.style.height = String(element.clientHeight) + "px";
        }
        if (!IsNullOrUndefined(newWidth) && (element.style.width == null || element.style.width == "")) {
            element.style.width = String(element.clientWidth) + "px";
        }
        var state = new SPAnimation.State();

        if (!IsNullOrUndefined(newHeight))
            state.SetAttribute(SPAnimation.Attribute.Height, newHeight);
        if (!IsNullOrUndefined(newWidth))
            state.SetAttribute(SPAnimation.Attribute.Width, newWidth);
        var o = new SPAnimation.Object(animationId, 0, element, state, finishFunc, data);

        o.RunAnimation();
    };
    SPAnimationUtility.BasicAnimator.Resize = function(element, newHeight, newWidth, finishFunc, data) {
        SPAnimationUtility.BasicAnimator.CommonResize(element, newHeight, newWidth, finishFunc, data, SPAnimation.ID.Basic_Size);
    };
    SPAnimationUtility.BasicAnimator.QuickResize = function(element, newHeight, newWidth, finishFunc, data) {
        SPAnimationUtility.BasicAnimator.CommonResize(element, newHeight, newWidth, finishFunc, data, SPAnimation.ID.Basic_QuickSize);
    };
    SPAnimationUtility.BasicAnimator.ResizeContainerAndFillContent = function(newElement, parentNode, finishFunc, fAddToEnd) {
        if (newElement == null || parentNode == null)
            return;
        var oldZIndex = newElement.style.zIndex;
        var oldPosition = newElement.style.position;
        var oldLeft = newElement.style.left;
        var oldTop = newElement.style.top;

        newElement.style.zIndex = String(1);
        newElement.style.position = "absolute";
        newElement.style.left = "0px";
        newElement.style.top = "0px";
        newElement.style.visibility = "hidden";
        if (!fAddToEnd)
            parentNode.insertBefore(newElement, parentNode.firstChild);
        else
            parentNode.appendChild(newElement);
        var fillerDiv = document.createElement("div");

        fillerDiv.style.height = "0px";
        fillerDiv.style.width = "0px";
        parentNode.insertBefore(fillerDiv, newElement);
        var newElemHeight = newElement.clientHeight;
        var newElemWidth = newElement.clientWidth;

        SPAnimationUtility.BasicAnimator.Resize(fillerDiv, newElemHeight, newElemWidth, function() {
            parentNode.removeChild(fillerDiv);
            newElement.style.left = oldLeft;
            newElement.style.top = oldTop;
            newElement.style.zIndex = oldZIndex;
            newElement.style.position = oldPosition;
            SPAnimationUtility.BasicAnimator.FadeIn(newElement, finishFunc, null);
        }, null);
    };
    SPAnimationUtility.BasicAnimator.GetRightOffset = function(element) {
        return document.body.offsetWidth - element.offsetWidth - SPAnimationUtility.BasicAnimator.GetLeftOffset(element);
    };
    SPAnimationUtility.BasicAnimator.PositionElement = function(element, topValue, leftValue, heightValue, widthValue) {
        if (!IsNullOrUndefined(topValue))
            element.style.top = String(topValue) + "px";
        if (!IsNullOrUndefined(leftValue))
            fRightToLeft ? (element.style.right = String(leftValue) + "px") : (element.style.left = String(leftValue) + "px");
        if (!IsNullOrUndefined(widthValue))
            element.style.width = String(widthValue) + "px";
        if (!IsNullOrUndefined(heightValue))
            element.style.height = String(heightValue) + "px";
    };
    SPAnimationUtility.BasicAnimator.GetWindowScrollPosition = function() {
        var scrOfX = 0;
        var scrOfY = 0;
        var workspace = document.getElementById("s4-workspace");

        if (workspace != null) {
            scrOfY = workspace.scrollTop;
            scrOfX = workspace.scrollLeft;
        }
        else {
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
        }
        if (IsNullOrUndefined(scrOfY))
            scrOfY = 0;
        if (IsNullOrUndefined(scrOfX))
            scrOfX = 0;
        return {
            x: scrOfX,
            y: scrOfY
        };
    };
    SPAnimationUtility.RowAddInfo = function() {
    };
    SPAnimationUtility.RowMoveInfo = function() {
    };
    SPAnimationUtility.TableAnimator = SPAnimUtil_TableAnimator;
    SPAnimUtil_TableAnimator.prototype = {
        tableElement: null,
        tbody: null,
        headerRow: null,
        footer: null,
        fAnimatable: false,
        topOffset: 0,
        leftOffset: 0,
        headerRowHeight: 0,
        itemRowHeight: 0,
        headerColWidths: null,
        itemColWidths: null
    };
    SPAnimUtil_TableAnimator.prototype.AnimatePaging = function(bPagingRight, footerTable, finishFunc) {
        this.IncrementRefCount();
        var savedOverflow = this.tableElement.parentNode.style.overflow;

        this.tableElement.parentNode.style.overflow = "hidden";
        SetOpacity(this.tableElement, 0);
        var oldtbody = this.tbody;
        var newtbody = oldtbody.nextSibling;

        newtbody.style.display = "";
        this.footer = footerTable;
        SetOpacity(this.footer, 0);
        this.footer.style.display = "";
        oldtbody.parentNode.removeChild(oldtbody);
        var state1 = new SPAnimation.State();

        state1.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var o1 = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, 0, footerTable, state1, null, null);

        o1.RunAnimation();
        var newLeft = bPagingRight ? 100 : -100;

        SPAnimationUtility.BasicAnimator.PositionRelativeExact(this.tableElement, null, newLeft, null, null);
        var _this = this;
        var state2 = new SPAnimation.State();

        state2.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var o2 = new SPAnimation.Object(bPagingRight ? SPAnimation.ID.Content_SlideInFadeInLeftInc : SPAnimation.ID.Content_SlideInFadeInRightInc, 0, this.tableElement, state2, function() {
            _this.ResetPagingAnimation(savedOverflow);
            finishFunc();
        }, null);

        o2.RunAnimation();
    };
    SPAnimUtil_TableAnimator.prototype.ResetPagingAnimation = function(savedOverflow) {
        var animRefCount = this.DecrementRefCount();

        if (animRefCount == 0) {
            SPAnimationUtility.BasicAnimator.ResetPosition(this.footer);
            this.tableElement.parentNode.style.overflow = savedOverflow;
        }
    };
    SPAnimUtil_TableAnimator.prototype.AnimateSort = function(oldtbody, tbody, finishFunc) {
        this.PrepareForSortAnimation(oldtbody, tbody);
        var staggerDelta = 15;
        var numRows = tbody.rows.length;

        for (var iRow = 0; iRow < numRows; iRow++) {
            var row = tbody.rows[iRow];
            var state = new SPAnimation.State();

            state.SetAttribute(SPAnimation.Attribute.Opacity, 1);
            var nDelay = iRow == 0 ? 0 : 100 + (iRow - 1) * staggerDelta;
            var o = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, nDelay, row, state, iRow == numRows - 1 ? finishFunc : null, null);

            o.RunAnimation();
        }
    };
    SPAnimUtil_TableAnimator.prototype.PrepareForSortAnimation = function(oldtbody, tbody) {
        var numRows = tbody.rows.length;

        for (var iRow = 0; iRow < numRows; iRow++) {
            var row = tbody.rows[iRow];

            SetOpacity(row, 0);
        }
        tbody.style.display = "";
        if (oldtbody != null && oldtbody.parentNode != null)
            oldtbody.parentNode.removeChild(oldtbody);
    };
    SPAnimUtil_TableAnimator.prototype.AnimateFooter = function(deltaRows, finishFunc) {
        this.doneFooter = false;
        if (this.footer != null && deltaRows != 0) {
            var state = new SPAnimation.State();
            var newX = fRightToLeft ? pxToNum(this.footer.style.right) : pxToNum(this.footer.style.left);

            state.SetAttribute(SPAnimation.Attribute.PositionX, newX);
            state.SetAttribute(SPAnimation.Attribute.PositionY, pxToNum(this.footer.style.top) + deltaRows * this.itemRowHeight);
            var thisAnimator = this;
            var o = new SPAnimation.Object(SPAnimation.ID.Basic_Move, 0, this.footer, state, function() {
                if (finishFunc != null)
                    finishFunc();
            }, null);

            o.RunAnimation();
        }
        else {
            if (finishFunc != null)
                finishFunc();
        }
    };
    SPAnimUtil_TableAnimator.prototype.Initialize = function() {
        var scrollPosition = SPAnimationUtility.BasicAnimator.GetWindowScrollPosition();
        var scrollX = scrollPosition.x;
        var scrollY = scrollPosition.y;

        this.topOffset = SPAnimationUtility.BasicAnimator.GetTopOffset(this.tableElement) - scrollY;
        this.leftOffset = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(this.tableElement) - scrollX : SPAnimationUtility.BasicAnimator.GetLeftOffset(this.tableElement) - scrollX;
        this.tbody = this.GetTableBody();
        this.headerRow = this.tableElement.rows[0];
        this.headerRowHeight = this.tableElement.firstChild.offsetHeight;
        this.itemRowHeight = this.tbody.rows[0].offsetHeight;
        this.headerColWidths = this.GetColumnWidths(this.headerRow);
        this.itemColWidths = this.GetColumnWidths(this.tbody.rows[0]);
    };
    SPAnimUtil_TableAnimator.prototype.GetTableBody = function() {
        var tb = this.tableElement.firstChild;

        while (tb.nodeName != "TBODY")
            tb = tb.nextSibling;
        return tb;
    };
    SPAnimUtil_TableAnimator.prototype.GetColumnWidths = function(row) {
        var arrWidths = new Array(0);

        while (this.IsErrorRow(row))
            row = row.nextSibling;
        for (var iCol = 0; iCol < row.childNodes.length; iCol++) {
            var cell = row.childNodes[iCol];
            var style = Boolean(window.getComputedStyle) ? window.getComputedStyle(cell, null) : cell.currentStyle;
            var leftPadding = pxToNum(style.paddingLeft);
            var rightPadding = pxToNum(style.paddingRight);
            var leftExtraSpace = pxToNum(style.borderLeftWidth) + pxToNum(style.marginLeft);
            var rightExtraSpace = pxToNum(style.borderRightWidth) + pxToNum(style.marginRight);

            if (isNaN(leftExtraSpace))
                leftExtraSpace = 0;
            if (isNaN(rightExtraSpace))
                rightExtraSpace = 0;
            arrWidths[iCol] = [cell.clientWidth - leftPadding - rightPadding, leftPadding + leftExtraSpace, rightPadding + rightExtraSpace];
        }
        return arrWidths;
    };
    SPAnimUtil_TableAnimator.prototype.IncrementRefCount = function() {
        var animRefCount = this.tableElement.getAttribute("AnimationRefCount");
        var newRefCount = animRefCount == null ? 1 : Number(animRefCount) + 1;

        this.tableElement.setAttribute("AnimationRefCount", String(newRefCount));
        return newRefCount;
    };
    SPAnimUtil_TableAnimator.prototype.DecrementRefCount = function() {
        var animRefCount = Number(this.tableElement.getAttribute("AnimationRefCount"));

        this.tableElement.setAttribute("AnimationRefCount", String(--animRefCount));
        return animRefCount;
    };
    SPAnimUtil_TableAnimator.prototype.IsErrorRow = function(row) {
        return row.className.indexOf("ms-dragupload-error") != -1;
    };
    IsMenuShown = false;
    ChevronContainer = null;
    itemTableDeferred = null;
    imageCell = null;
    onKeyPress = false;
    downArrowText = null;
    currentEditMenu = null;
    currentItemID = null;
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemOpenApp = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    bIsCheckout = 0;
    currentItemCanModify = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemEvtType = 0;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null;
    g_MaximumSelectedItemsAllowed = 100;
    g_CustomActionDialogHandlers = new Object();
    g_CustomActionDialogHandlerId = 0;
    g_ExpGroupWPState = new LRUCache();
    DocOpen = {
        CLIENT: 0,
        BROWSER: 1
    };
    hoverTR = null;
    ecbTD = null;
    ProtocolCommand = {
        View: 'ofv',
        Edit: 'ofe',
        New: 'nft'
    };
    phManager = new (function() {
        var fProtocolHandlerEnabled = false;
        var fProtocolHandlerInitialized = false;
        var supportedPHs = {};

        this.ShouldTryProtocolHandler = function(strApp) {
            return !IsStrNullOrEmpty(strApp) && typeof navigator.msLaunchUri == "function" && supportedPHs[strApp] == null;
        };
        this.SetProtocolHandlerEnabled = function(strApp, bEnabled) {
            supportedPHs[strApp] = bEnabled;
        };
        this.IsProtocolHandlerEnabled = function(strApp) {
            if (IsStrNullOrEmpty(strApp))
                return false;
            if (supportedPHs[strApp] != null)
                return supportedPHs[strApp];
            if (fProtocolHandlerInitialized)
                return fProtocolHandlerEnabled;
            fProtocolHandlerInitialized = true;
            if (strApp === "ms-project") {
                if (typeof navigator.msLaunchUri == "function") {
                    fProtocolHandlerEnabled = true;
                    return fProtocolHandlerEnabled;
                }
            }
            if (Boolean(window.ActiveXObject)) {
                try {
                    if (strApp === "ms-project") {
                        var projActiveX = new ActiveXObject("WinProj.Activator");
                    }
                    else {
                        var activeX = new ActiveXObject("SharePoint.OpenDocuments.5");
                    }
                    fProtocolHandlerEnabled = true;
                }
                catch (e) { }
            }
            else if (IsSupportedNPApiBrowserOnWin()) {
                var plugin = CreateNPApiOnWindowsPlugin("application/x-sharepoint");

                if (plugin != null) {
                    try {
                        if (plugin.GetOfficeVersion() == "15") {
                            fProtocolHandlerEnabled = true;
                        }
                    }
                    catch (e) { }
                }
            }
            return fProtocolHandlerEnabled;
        };
        this.CreateProtocolHandlerUrl = function(strApp, strUrl, command, defaultSaveUrl) {
            var ret = [];
            var protocolList = strApp.split('|');

            if (protocolList.length == 2) {
                ret.push(protocolList[0]);
                ret.push(':');
                ret.push(strUrl);
                return ret.join('');
            }
            else if (protocolList.length == 3)
                strApp = protocolList[0];
            ret.push(strApp);
            ret.push(':');
            ret.push(command);
            ret.push('|u|');
            ret.push(strUrl);
            if (command == ProtocolCommand.New) {
                ret.push('|s|');
                ret.push(defaultSaveUrl);
            }
            return ret.join('');
        };
    });
    CBSelectedValues_InitializePrototype();
    PageContextInfo_InitializePrototype();
    g_ExtensionNotSupportCheckoutToLocal = ["ascx", "asp", "aspx", "htm", "html", "master", "odc", "exe", "bat", "com", "cmd", "onetoc2"];
    g_ExtensionDefaultForRead = ["jpg", "jpeg", "bmp", "png", "gif", "onetoc2", "one", "odc"];
    bValidSearchTerm = false;
    fListControl = false;
    fListErrorShown = false;
    fNewDoc = false;
    fNewDoc2 = false;
    fNewDoc3 = false;
    SPDesignerDownloadUrl = "http://o15.officeredir.microsoft.com/r/rlidSPD2013Download";
    SPDesignerProgID = "SharePoint.WebPartPage.Document";
    CtxRgiid_InitializePrototype();
    g_varSkipRefreshOnFocus = 0;
    g_useDialogAlwaysList = ["upload.aspx", "uploadex.aspx", "deploydeveloperapp.aspx"];
    LRUCache_InitializePrototype();
    v_stsOpenDoc = null;
    v_strStsOpenDoc = null;
    g_AdditionalNavigateHierarchyQString = "";
    httpFolderTarget = null;
    httpFolderSource = null;
    httpFolderDiv = null;
    previousClickedItemRow = null;
    Point.prototype = {
        x: undefined,
        y: undefined,
        toString: function() {
            return "(" + String(this.x) + "," + String(this.y) + ")";
        }
    };
    isdlg = (ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1"));
    if (_spBodyOnLoadFunctionNames != null && typeof _spBodyOnLoadFunctionNames != "undefined") {
        _spBodyOnLoadFunctionNames.push("SearchOnBodyLoad");
    }
    if (isdlg == null) {
        SetEvent("resize", FixRibbonAndWorkspaceDimensionsForResize, window);
    }
    QstringStruct.prototype.toString = QstringStructToString;
    QstringStruct.prototype.toArray = QstringStructToArray;
    Diff.prototype = {
        left: [],
        right: []
    };
    QstringStruct.Diff = function(strLeft, strRight) {
        var rgLeft = (new QstringStruct(strLeft)).toArray();
        var rgRight = (new QstringStruct(strRight)).toArray();
        var temp = {};
        var ret = new Diff;
        var i;

        for (i = 0; i < rgLeft.length; i++) {
            temp[rgLeft[i]] |= 1;
        }
        for (i = 0; i < rgRight.length; i++) {
            temp[rgRight[i]] |= 2;
        }
        for (var key in temp) {
            if (temp[key] == 1) {
                ret.left.push(key);
            }
            else if (temp[key] == 2) {
                ret.right.push(key);
            }
        }
        return ret;
    };
    g_listItemCache = {};
    ;
    g_fSkipAnimation = false;
    g_fSkipNextTabExpandAnimation = false;
    g_InViewPort = 1;
    g_OutOfViewPortCloserToTop = 2;
    g_OutOfViewPortCloserToBottom = 3;
    g_NotificationEngine = null;
    g_notiExpireTimerId = -1;
    g_standardNotiCt = null;
    g_statusNotiCt = null;
    SPNotifications = {};
    SPNotifications.ContainerID = {
        Basic: 0,
        Status: 1
    };
    g_SPNotificationEventID_Count = 5;
    SPNotifications.EventID = {
        OnShow: 0,
        OnHide: 1,
        OnDisplayNotification: 2,
        OnRemoveNotification: 3,
        OnNotificationCountChanged: 4,
        OnDisposing: 5
    };
    SP.UI.Notify = {};
    SP.UI.Notify.Notification = SPNotification;
    SP.UI.Notify.NotificationContainer = SPNotificationContainer;
    SP.UI.Notify.addNotification = function(strHtml, bSticky) {
        return addNotification(strHtml, bSticky);
    };
    SP.UI.Notify.removeNotification = function(nid) {
        removeNotification(nid);
    };
    SP.UI.Notify.showLoadingNotification = function(bSticky) {
        var strHtml = "<img src='" + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + "' style='vertical-align:bottom; display:inline-block; margin-" + (document.documentElement.dir == 'rtl' ? 'left' : 'right') + ":2px;' />&nbsp;<span style='vertical-align:top;'>" + STSHtmlEncode(Strings.STS.L_Loading_Text) + "</span>";

        return addNotification(strHtml, bSticky);
    };
    NotificationEngine.prototype = {
        Initialized: false,
        Notifications: undefined,
        Containers: undefined,
        Initialize: undefined,
        AddNotification: undefined,
        AddContainer: undefined,
        DisposeNotification: undefined,
        SetExpireTimer: undefined,
        RetireNotificationInternal: undefined
    };
    (function() {
        var _thisEngine = null;
        var _notiExpireTimerId = -1;

        NotificationEngine.prototype.Initialize = function() {
            if (this.Initialized) {
                return;
            }
            this.Notifications = {};
            this.Containers = {};
            this.Initialized = true;
        };
        NotificationEngine.prototype.Reset = function() {
            var ctr;
            var key;

            for (key in this.Containers) {
                ctr = this.Containers[key];
                ctr.Dispose();
                ctr.UnblockUpdatesInternal();
            }
            var timerIdLocal = _notiExpireTimerId;

            _notiExpireTimerId = -1;
            window.clearInterval(timerIdLocal);
        };
        NotificationEngine.prototype.AddNotification = function(containerId, noti) {
            var ctr = this.Containers[containerId];

            Sys.Debug.assert(ctr != null, "[NotificationEngine.AddNotification] : Container ID is invalid (" + String(containerId) + ")");
            noti.container = ctr;
            this.Notifications[noti.id] = noti;
        };
        NotificationEngine.prototype.AddContainer = function(ctr) {
            this.Containers[ctr.id] = ctr;
        };
        NotificationEngine.prototype.DisposeNotification = function(noti) {
            if (this.Notifications[noti.id] != null) {
                delete this.Notifications[noti.id];
                delete noti;
            }
        };
        NotificationEngine.prototype.SetExpireTimer = function(noti, nDisplayDuration) {
            var now = new Date();

            noti.expires = now.valueOf() + nDisplayDuration;
            if (_notiExpireTimerId == -1) {
                _notiExpireTimerId = window.setInterval(function() {
                    (GetNotificationEngineInstance()).RetireNotificationInternal();
                }, 750);
            }
        };
        NotificationEngine.prototype.RetireNotificationInternal = function() {
            var now = new Date();
            var nowVal = now.valueOf();
            var bClearTimer = true;
            var key;
            var noti;
            var ctr;
            var rgretire = [];

            for (key in this.Notifications) {
                noti = this.Notifications[key];
                if (noti.expires != null) {
                    if (nowVal > noti.expires) {
                        rgretire.push(noti);
                    }
                    else {
                        bClearTimer = false;
                    }
                }
            }
            while (rgretire.length > 0) {
                noti = rgretire.shift();
                ctr = noti.container;
                ctr.RemoveNotification(noti);
                ctr.pendingUpdate = true;
            }
            for (key in this.Containers) {
                ctr = this.Containers[key];
                if (ctr.items.length > 0)
                    bClearTimer = false;
                if (Boolean(ctr.pendingUpdate)) {
                    ctr.Update();
                    delete ctr.pendingUpdate;
                }
            }
            if (bClearTimer) {
                var timerIdLocal = _notiExpireTimerId;

                _notiExpireTimerId = -1;
                window.clearInterval(timerIdLocal);
            }
        };
        SPNotification.prototype = {
            id: undefined,
            elm: undefined,
            strHtml: undefined,
            strTooltip: undefined,
            bSticky: undefined,
            bIsAdd: undefined,
            bNoAnimate: undefined,
            bHidden: undefined,
            onclickHandler: undefined,
            container: undefined,
            extraData: undefined,
            expires: undefined
        };
        SPNotification.prototype.Initialize = function(containerId, strHtml, bSticky, strTooltip, onclickHandler, extraData) {
            var id = "notification_" + String(getUniqueIndex());
            var elm = document.createElement("span");

            elm.id = id;
            this.id = id;
            this.bIsAdd = true;
            this.elm = elm;
            this.strHtml = strHtml;
            this.extraData = extraData;
            this.bSticky = bSticky;
            this.strTooltip = strTooltip;
            this.onclickHandler = onclickHandler;
            this.bHidden = false;
            (GetNotificationEngineInstance()).AddNotification(containerId, this);
        };
        SPNotification.prototype.Show = function(bNoAnimate) {
            if (Boolean(bNoAnimate) == true) {
                this.bNoAnimate = true;
            }
            this.container.AddNotification(this);
        };
        SPNotification.prototype.Hide = function(bNoAnimate) {
            if (Boolean(bNoAnimate) == true) {
                this.bNoAnimate = true;
            }
            this.container.RemoveNotification(this);
        };
        SPNotificationContainer.prototype = {
            id: undefined,
            element: undefined,
            bIsShown: undefined,
            bIsBlocked: undefined,
            nDisposalState: undefined,
            nNotificationLayer: 25,
            nDisplayDuration: 7000,
            nMaxNotifications: 20,
            events: undefined,
            items: undefined,
            pending: undefined,
            blockedUpdates: undefined
        };
        SPNotificationContainer.prototype.Initialize = function(id, element, layer, maxNoti) {
            this.id = id;
            this.element = element;
            this.events = new Array(g_SPNotificationEventID_Count);
            this.bIsShown = false;
            this.nNotificationLayer = layer;
            this.bIsBlocked = false;
            this.items = [];
            this.pending = [];
            this.blockedUpdates = [];
            this.nDisposalState = 0;
            var that = this;

            this.items.add = function(item) {
                this.push(item);
                that.FireEvent(SPNotifications.EventID.OnNotificationCountChanged);
            };
            this.items.remove = function(item) {
                var i, len;

                for (i = 0, len = this.length; i < len; i++) {
                    if (item.id == this[i].id) {
                        this.splice(i, 1);
                        that.FireEvent(SPNotifications.EventID.OnNotificationCountChanged);
                        return true;
                    }
                }
                return false;
            };
            if (maxNoti != null)
                this.nMaxNotifications = maxNoti;
            (GetNotificationEngineInstance()).AddContainer(this);
        };
        SPNotificationContainer.prototype.Dispose = function() {
            if (this.nDisposalState > 0) {
                return;
            }
            this.nDisposalState = 1;
            this.Clear();
        };
        SPNotificationContainer.prototype.AddNotification = function(noti) {
            Sys.Debug.assert(noti.container.id == this.id, "[AddNotification] : Notification does not match container! Expected: " + String(this.id) + "; Actual: " + String(noti.container.id));
            var i, len;

            for (i = 0, len = this.items.length; i < len; i++) {
                if (noti.id == this.items[i].id) {
                    return;
                }
            }
            if (this.GetCount() < this.nMaxNotifications) {
                noti.bHidden = false;
                noti.elm.style.display = '';
            }
            else {
                noti.bHidden = true;
                noti.elm.style.display = 'none';
            }
            this.items.add(noti);
            var that = this;
            var fn = function() {
                if (!Boolean(noti.bSticky)) {
                    (GetNotificationEngineInstance()).SetExpireTimer(noti, that.nDisplayDuration);
                }
                if (!that.bIsShown) {
                    that.Show();
                }
                that.FireEvent(SPNotifications.EventID.OnDisplayNotification, noti, function() {
                    that.Update();
                    return true;
                });
                that.Update();
            };

            if (this.bIsBlocked && this.nDisposalState === 0) {
                this.pending.push(fn);
            }
            else {
                fn();
            }
        };
        SPNotificationContainer.prototype.RemoveNotification = function(noti) {
            if (noti.bIsAdd === false) {
                return;
            }
            noti.bIsAdd = false;
            Sys.Debug.assert(noti.container.id == this.id, "[RemoveNotification] : Notification does not match container! Expected: " + String(this.id) + "; Actual: " + String(noti.container.id));
            var i, len, found = false;

            for (i = 0, len = this.pending.length; i < len; i++) {
                if (noti.id == this.pending[i].id) {
                    this.pending.splice(i, 1);
                    found = true;
                }
            }
            if (found) {
                this.items.remove(noti);
                return;
            }
            var that = this;
            var fn = function() {
                that.FireEvent(SPNotifications.EventID.OnRemoveNotification, noti, function() {
                    try {
                        that.items.remove(noti);
                        var elm = noti.elm;
                        var host = that.element;

                        host.removeChild(elm);
                    }
                    catch (err) { }
                    (GetNotificationEngineInstance()).DisposeNotification(noti);
                    that.Update();
                    return true;
                });
                that.Update();
            };

            if (this.bIsBlocked && this.nDisposalState === 0) {
                this.pending.push(fn);
            }
            else {
                fn();
            }
        };
        SPNotificationContainer.prototype.ShowAllNotifications = function() {
            var i, len, items = this.items;

            for (i = 0, len = items.length; i < len; i++) {
                var noti = items[i];

                if (noti.bHidden) {
                    noti.bHidden = false;
                    noti.elm.style.display = '';
                }
            }
        };
        SPNotificationContainer.prototype.Update = function() {
            if (!this.element.hasChildNodes() && this.items.length == 0)
                this.Hide();
            if (this.bIsShown) {
                for (var key in (GetNotificationEngineInstance()).Containers) {
                    this.BlockUpdatesInternal((GetNotificationEngineInstance()).Containers[key]);
                }
            }
        };
        SPNotificationContainer.prototype.Clear = function(bNoAnimate) {
            var items = this.items;

            for (var i = items.length - 1; i >= 0; i--) {
                var noti = items[i];

                if (!Boolean(noti) || !noti.bIsAdd)
                    continue;
                if (Boolean(bNoAnimate)) {
                    noti.bNoAnimate = true;
                }
                this.RemoveNotification(noti);
            }
        };
        SPNotificationContainer.prototype.GetCount = function() {
            return this.items.length;
        };
        SPNotificationContainer.prototype.GetHiddenCount = function() {
            var numHidden = 0;
            var i, len, items = this.items;

            for (i = 0, len = items.length; i < len; i++) {
                var noti = items[i];

                if (noti.bHidden) {
                    numHidden++;
                }
            }
            return numHidden;
        };
        SPNotificationContainer.prototype.SetEventHandler = function(eventId, eventHandler) {
            if (this.events[eventId] != null)
                throw 'Event handler already specified for eventId ' + String(eventId) + '. ContainerId: ' + String(this.id);
            this.events[eventId] = eventHandler;
        };
        SPNotificationContainer.prototype.FireEvent = function(eventId) {
            if (eventId > g_SPNotificationEventID_Count)
                throw 'Invalid eventId ' + String(eventId) + '. ContainerId: ' + String(this.id);
            if (this.events[eventId] != null) {
                var func = this.events[eventId];

                Array.prototype.shift.call(arguments);
                Sys.Debug.assert(arguments.length <= 2, "[FireEvent] : Too many arguments passed to callback. Expected <= 2; Actual: " + String(arguments.length));
                func.apply(null, arguments);
            }
        };
        SPNotificationContainer.prototype.Show = function() {
            if (this.bIsShown) {
                return;
            }
            this.bIsShown = true;
            var that = this;

            this.FireEvent(SPNotifications.EventID.OnShow, function() {
                that.Update();
                return true;
            });
        };
        SPNotificationContainer.prototype.Hide = function() {
            if (!this.bIsShown) {
                return;
            }
            this.bIsShown = false;
            while (this.element.hasChildNodes()) {
                this.element.removeChild(this.element.firstChild);
            }
            var that = this;

            this.FireEvent(SPNotifications.EventID.OnHide, function() {
                if (that.nDisposalState == 0) {
                    that.UnblockUpdatesInternal();
                    that.Update();
                }
                else if (that.nDisposalState == 1) {
                    that.nDisposalState = 2;
                    that.FireEvent(SPNotifications.EventID.OnDisposing);
                }
                return true;
            });
        };
        SPNotificationContainer.prototype.BlockUpdatesInternal = function(ctr) {
            if (ctr.nNotificationLayer > this.nNotificationLayer || ctr.id == this.id)
                return;
            var i, len, found = false;

            for (i = 0, len = this.blockedUpdates.length; i < len; i++) {
                if (ctr.id == this.blockedUpdates[i].id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                return;
            }
            ctr.bIsBlocked = true;
            this.blockedUpdates.push(ctr);
            return;
        };
        SPNotificationContainer.prototype.UnblockUpdatesInternal = function() {
            while (this.blockedUpdates.length > 0) {
                var ctr = this.blockedUpdates.shift();

                ctr.bIsBlocked = false;
                while (ctr.pending.length > 0) {
                    var fn = ctr.pending.shift();

                    fn();
                }
                ctr.Update();
            }
        };
        var renderNotificationBase = function(noti, cssName) {
            var span = noti.elm;
            var onclickHandler = noti.onclickHandler;
            var strTooltip = noti.strTooltip;
            var bNoAnimate = noti.bNoAnimate;
            var anchor_onclick = function() {
                if (onclickHandler != null) {
                    onclickHandler();
                }
                removeNotification(span.id, bNoAnimate);
                return false;
            };

            span.className = "ms-trcnoti-base";
            SetOpacity(span, 0);
            var bg = document.createElement("div");

            bg.className = "ms-trcnoti-bg";
            AttachEvent("click", anchor_onclick, bg);
            var span2 = document.createElement("div");

            span2.className = cssName;
            bg.appendChild(span2);
            span.appendChild(bg);
            if (Boolean(strTooltip)) {
                span.title = strTooltip;
            }
            span.setAttribute("role", "alert");
            return span2;
        };
        var doAnimate = function(noti, animId, opacityStart, callback) {
            var elm = noti.elm;

            if (noti.bNoAnimate || IsAccessibilityFeatureEnabled()) {
                callback(noti);
            }
            else {
                var finalState = new SPAnimation.State();

                finalState.SetAttribute(SPAnimation.Attribute.Opacity, opacityStart);
                var animation = new SPAnimation.Object(animId, 0, elm, finalState, callback, noti);

                animation.RunAnimation();
            }
        };

        function createContainerUI(elmCtr) {
            var elmCt = document.createElement("div");
            var elmIn2 = document.createElement("div");
            var elmHost = document.createElement("div");

            elmCt.className = "ms-trcnoti-border";
            elmIn2.className = "ms-fullWidth";
            elmHost.className = "ms-trcnoti-host ms-fullWidth";
            elmIn2.appendChild(elmHost);
            elmCt.appendChild(elmIn2);
            elmCtr.appendChild(elmCt);
            return {
                ctr: elmCtr,
                root: elmCt,
                host: elmHost
            };
        }
        function createStatusUI() {
            var elmCtr = document.createElement("div");

            elmCtr.className = "ms-trcnoti-ctr";
            document.body.appendChild(elmCtr);
            var ui = createContainerUI(elmCtr);

            ui.root.id = "js-trcnoti-ct";
            ui.host.id = "js-trcnoti-host";
            ui.root.style.display = "none";
            var elmOverflow = document.createElement("div");

            elmOverflow.id = "ms-trcnoti-ovrflw";
            elmOverflow.className = "ms-trcnoti-ovrflw ms-trcnoti-bg";
            ui.host.parentNode.appendChild(elmOverflow);
            ui.ovrflw = elmOverflow;
            return ui;
        }
        function createToastUI() {
            var elmCtr = document.getElementById("notificationArea");

            if (elmCtr == null) {
                elmCtr = document.createElement("div");
                elmCtr.id = "notificationArea";
                var mainarea = document.getElementById("contentBox");

                if (null != mainarea) {
                    mainarea.appendChild(elmCtr);
                }
                else {
                    document.body.appendChild(elmCtr);
                }
            }
            elmCtr.style.display = "none";
            var ui = createContainerUI(elmCtr);

            return ui;
        }
        function StandardContainer_Init() {
            if (g_standardNotiCt != null)
                return g_standardNotiCt;
            var ui = createToastUI();
            var ctr = ui.ctr;
            var ics = ui.host;

            g_standardNotiCt = new SPNotificationContainer(SPNotifications.ContainerID.Basic, ics, 50);
            var renderNotification = function(noti) {
                var span = renderNotificationBase(noti, "ms-trcnoti-toast");

                span.innerHTML = noti.strHtml;
            };
            var hide = function(callback) {
                ctr.style.display = "none";
                callback();
            };
            var show = function(callback) {
                ctr.setAttribute("aria-live", "polite");
                ctr.setAttribute("aria-relevant", "all");
                ctr.style.display = "block";
                callback();
            };
            var display = function(noti, callback) {
                renderNotification(noti);
                var elm = noti.elm;

                elm.style.top = '0px';
                ics.appendChild(elm);
                doAnimate(noti, SPAnimation.ID.SmallObject_SlideInFadeInTop, 1, callback);
            };
            var remove = function(noti, callback) {
                doAnimate(noti, SPAnimation.ID.Basic_Fade, 0, callback);
            };

            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnHide, hide);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnShow, show);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnDisplayNotification, display);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnRemoveNotification, remove);
            return g_standardNotiCt;
        }
        function StatusContainer_Init() {
            var ui = createStatusUI();
            var ctr = ui.ctr;
            var root = ui.root;
            var overFlow = ui.ovrflw;
            var ics = ui.host;
            var notiCt = new SPNotificationContainer(SPNotifications.ContainerID.Status, ics, 75, 3);

            function RenderOCSUserName(id, displayName, sip) {
                var span = document.createElement("span");
                var anchor = document.createElement("a");
                var img = document.createElement("img");
                var content = document.createElement("a");

                anchor.href = '#';
                content.className = 'ms-core-defaultFont ms-textLarge';
                anchor.className = 'ms-imnlink';
                anchor.onclick = function() {
                    IMNImageOnClick(event);
                    return false;
                };
                img.id = id + '_imn,type=sip';
                img.setAttribute('name', 'imnmark');
                img.className = 'ms-imnImg';
                img.title = '';
                img.border = 0;
                img.src = "/_layouts/15/images/blank.gif?rev=23";
                img.alt = Strings.STS.L_NoPresenceInformation;
                img.width = '12px';
                img.height = '12px';
                img.style.verticalAlign = "middle";
                img.style.marginRight = "0px";
                img.setAttribute('sip', sip);
                content.innerHTML = displayName;
                anchor.appendChild(img);
                span.appendChild(anchor);
                span.appendChild(content);
                return span;
            }
            ;
            var renderNotification = function(noti) {
                var span = renderNotificationBase(noti, "ms-trcnoti-status");
                var strHtml = noti.strHtml;
                var extraData = noti.extraData;
                var elmInnerLeft = document.createElement("div");
                var elmInnerBlock = document.createElement("div");
                var elmInnerTxt = document.createElement("div");

                elmInnerBlock.className = "ms-trcnoti-body";
                elmInnerLeft.className = "ms-trcnoti-gfx";
                elmInnerTxt.className = "ms-trcnoti-txt ms-core-defaultFont ms-trc-noti-title";
                if (extraData.img != null) {
                    var img = document.createElement("img");

                    img.src = extraData.img;
                    if (browseris.ie) {
                        img.removeAttribute("width");
                        img.removeAttribute("height");
                    }
                    elmInnerLeft.appendChild(img);
                }
                if (extraData.sip != null) {
                    if (browseris.ie5up) {
                        var ocsName = RenderOCSUserName(noti.id, strHtml, extraData.sip);

                        elmInnerTxt.appendChild(ocsName);
                        var imgs = ocsName.getElementsByTagName('img');

                        for (var i = 0, l = imgs.length; i < l; i++) {
                            if (imgs[i].name == 'imnmark')
                                IMNRC(imgs[i].getAttribute('sip'), imgs[i]);
                        }
                    }
                    else {
                        var nameSpan = document.createElement("span");

                        nameSpan.innerHTML = strHtml;
                        elmInnerTxt.insertBefore(nameSpan, elmInnerTxt.firstChild);
                    }
                }
                else {
                    var itemName = document.createElement('span');

                    itemName.className = 'ms-core-defaultFont ms-textLarge';
                    itemName.innerHTML = strHtml;
                    elmInnerTxt.appendChild(itemName);
                }
                elmInnerTxt.appendChild(document.createTextNode(" "));
                var txt = document.createElement('span');

                txt.className = 'ms-textSmall';
                txt.innerHTML = extraData.txt;
                elmInnerTxt.appendChild(txt);
                elmInnerBlock.appendChild(elmInnerTxt);
                if (extraData.dt != null) {
                    var elmInnerFtr = document.createElement("div");

                    elmInnerFtr.className = "ms-trcnoti-dt ms-metadata";
                    if (browseris.ie) {
                        elmInnerFtr.style.paddingBottom = "1px";
                    }
                    elmInnerFtr.innerHTML = extraData.dt;
                    elmInnerBlock.appendChild(elmInnerFtr);
                }
                span.appendChild(elmInnerLeft);
                span.appendChild(elmInnerBlock);
            };
            var show = function(callback) {
                ics.setAttribute("aria-live", "polite");
                ics.setAttribute("aria-relevant", "all");
                if (IsAccessibilityFeatureEnabled()) {
                    callback();
                }
                else {
                    var finalState = new SPAnimation.State();

                    finalState.SetAttribute(SPAnimation.Attribute.Opacity, 1);
                    root.style.top = '0px';
                    var animation = new SPAnimation.Object(SPAnimation.ID.SmallObject_SlideInFadeInTop, 0, root, finalState, callback, null);

                    animation.RunAnimation();
                }
                root.style.display = "block";
            };
            var hide = function(callback) {
                root.style.display = "none";
                callback();
            };
            var display = function(noti, callback) {
                if (typeof noti.extraData === 'undefined' || noti.extraData === null) {
                    throw "Argument Error: Status notifications requires extraData argument";
                }
                renderNotification(noti);
                ics.insertBefore(noti.elm, ics.firstChild);
                noti.elm.style.top = '0px';
                doAnimate(noti, SPAnimation.ID.SmallObject_SlideInFadeInTop, 1, callback);
            };
            var remove = function(noti, callback) {
                doAnimate(noti, SPAnimation.ID.Basic_Fade, 0, callback);
            };
            var countChanged = function() {
                var hiddenCount = notiCt.GetHiddenCount();

                if (hiddenCount > 0) {
                    overFlow.style.display = "block";
                    overFlow.innerHTML = StBuildParam(Strings.STS.L_NotificationsAndNMore, hiddenCount);
                    overFlow.onclick = function() {
                        notiCt.ShowAllNotifications();
                        overFlow.style.display = "none";
                        return false;
                    };
                }
                else {
                    overFlow.style.display = "none";
                }
            };
            var dispose = function() {
                document.body.removeChild(ctr);
            };

            notiCt.SetEventHandler(SPNotifications.EventID.OnShow, show);
            notiCt.SetEventHandler(SPNotifications.EventID.OnHide, hide);
            notiCt.SetEventHandler(SPNotifications.EventID.OnDisplayNotification, display);
            notiCt.SetEventHandler(SPNotifications.EventID.OnRemoveNotification, remove);
            notiCt.SetEventHandler(SPNotifications.EventID.OnNotificationCountChanged, countChanged);
            notiCt.SetEventHandler(SPNotifications.EventID.OnDisposing, dispose);
            g_statusNotiCt = notiCt;
        }
        addNotification = function(strHtml, bSticky, strTooltip, onclickHandler, bNoAnimate) {
            var objNoti = new SPNotification(SPNotifications.ContainerID.Basic, strHtml, bSticky, strTooltip, onclickHandler);

            objNoti.Show(bNoAnimate);
            return objNoti.id;
        };
        removeNotification = function(id, bNoAnimate) {
            var objNoti = (GetNotificationEngineInstance()).Notifications[id];

            if (Boolean(objNoti)) {
                objNoti.Hide(bNoAnimate);
            }
        };
        function GetNotificationEngineInstance() {
            if (_thisEngine === null) {
                g_NotificationEngine = new NotificationEngine();
                _thisEngine = g_NotificationEngine;
                StandardContainer_Init();
                StatusContainer_Init();
            }
            return _thisEngine;
        }
        NotificationEngine.GetInstance = GetNotificationEngineInstance;
    })();
    cGCMinimumWidth = 400;
    cGCMinimumHeight = 200;
    cGCMaxGCResizeCount = 10;
    glGCObjectHeight = 0;
    glGCObjectWidth = 0;
    glGCResizeCounter = 0;
    objGCGlobal = null;
    PositionInfo_InitializePrototype();
    ecbManager = {
        callOutPar: null,
        DismissECB: function() {
            var fakeEvt = new Object();

            if (ecbManager.callOutPar != null) {
                var oldItemTable = itemTable;

                fakeEvt.callOut = true;
                OutItem(fakeEvt);
                ecbManager.callOutPar = null;
                itemTable = oldItemTable;
            }
            var e = window.event;
            var srcElement = null;

            if (e != null)
                srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
            while (srcElement != null && srcElement.tagName != "TR")
                srcElement = srcElement.parentNode;
            var itemParent = null;

            if (srcElement != null && itemTable != null) {
                itemParent = itemTable;
                while (itemParent != null) {
                    if (itemParent == srcElement)
                        break;
                    itemParent = itemParent.parentNode;
                }
            }
            if (itemParent == null) {
                fakeEvt.callOut = false;
                OutItem(fakeEvt);
            }
        }
    };
    ecbItems = "ECBItems";
    SYSTEM_ACCOUNT_ID = 1073741823;
    resetItemGlobals();
    _spBodyOnLoadFunctions.push(InitFullScreenMode);
    filterTable = null;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    filterStr = null;
    strFieldName = "";
    bMenuLoadInProgress = false;
    strFilteredValue = null;
    bIsMultiFilter = false;
    fnOnFilterMouseOut = null;
    if (typeof String.prototype.trim == "undefined") {
        String.prototype.trim = function() {
            return (this.replace(/^\s\s*/, '')).replace(/\s\s*$/, '');
        };
    }
    if (typeof Object.create === "undefined") {
        Object.create = function(o) {
            function F() {
            }
            F.prototype = o;
            return new F();
        };
    }
    if (typeof Object.keys === "undefined") {
        Object.keys = function(obj) {
            var keys = [];

            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    keys.push(property);
                }
            }
            return keys;
        };
    }
    RibbonBlock.prototype = {
        initialTabId: null,
        buildMinimized: true,
        initStarted: false,
        initialTabSelectedByUser: false,
        launchedByKeyboard: false
    };
    kfnDisableEvent = new Function("return false");
    g_menuHtc_lastMenu = null;
    g_uniqueNumber = 0;
    g_MenuEndOfDOM = false;
    ElementPosition_InitializePrototype();
    MenuTag_InitializePrototype();
    MMU_chDelim = ",";
    MMU_chDelimEnc = "%2c";
    MMU_postbackPrefix = "javascript:__doPostBack(";
    MMU_chDelim2 = "%";
    MMU_chDelim2Enc = "%25";
    MHash_InitializePrototype();
    ParseContext_InitializePrototype();
    MMU_reDelimEnc = new RegExp(MMU_chDelimEnc, "g");
    MMU_reDelim2Enc = new RegExp(MMU_chDelim2Enc, "g");
    MMU_reDelimDec = new RegExp(MMU_chDelim, "g");
    MMU_reDelim2Dec = new RegExp(MMU_chDelim2, "g");
    g_MMU_HighlightedEcbTable = null;
    g_MMU_HighlightedEcbTableOpen = null;
    g_MMU_OpenTimeoutHandle = null;
    g_MMU_theFormActionAtPageLoad = null;
    g_MMU_Form0ActionAtPageLoad = null;
    g_MMU_Form0ActionAtPreMenuOpen = null;
    g_MMU_RequestTimeoutTimeoutHandle = null;
    _AddSilverlightWebPartPopupUI_InitializePrototype();
    _ConfigSilverlightWebpartPopupUI_InitializePrototype();
    _launchNotificationId = null;
    _tenantAppData = null;
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("core.js");
    }
}
var SPAnimation;

function SPCurve(ID, type, x1, y1, x2, y2) {
    this.ID = ID;
    this.type = type;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
function SPKeyFrame(type, curveID, startTime, endTime, startVal, endVal, relativeTo, operationType) {
    this.type = type;
    this.curveID = curveID;
    this.startTime = startTime;
    this.endTime = endTime;
    this.startValue = startVal;
    this.endValue = endVal;
    this.relativeTo = relativeTo;
    this.operationType = operationType;
}
function Animation(animationID, keyFrames) {
    this.ID = animationID;
    this.keyFrames = keyFrames;
}
function UpdateAnimationStateFromQuery() {
    var pageQuery = window.location.href;
    var animationDisabledFromQuery = pageQuery != null && pageQuery.indexOf("Animation=0") != -1;
    var animationEnabledFromQuery = pageQuery != null && pageQuery.indexOf("Animation=1") != -1;

    if (animationDisabledFromQuery)
        SPAnimation.Settings.DisableAnimation();
    if (animationEnabledFromQuery)
        SPAnimation.Settings.EnableAnimation();
}
function AnimationEngine() {
    this.AnimationQueue = new Array(0);
    this.sharedTimer = null;
    this.sharedCancelTimer = null;
    this.frameInterval = 1000 / 60;
    this.resetInterval = 30000;
    this.sharedTimerRefs = 0;
    this.conflictTable = new Array(0);
    this.currentAnimationIndex = -1;
    this.temporaryIDGenerator = 0;
}
function SPAnimation_State() {
    this.Index = 0;
    this.Data = new Array(0);
}
function SPAnimation_Object(animationID, delay, element, finalState, finishFunc, extraData) {
    this.Initialize(animationID, delay, element, finalState, finishFunc, extraData);
}
function AnimationUnit(element, delay, duration, finishFunc, extraData) {
    this.Initialize(element, delay, duration, finishFunc, extraData);
}
function AnimationTelemetry() {
    this.perfData = new Array(0);
    this.logData = new Array(0);
    this.perfDataIndex = 0;
    this.logDataIndex = 0;
    this.animationIndex = 0;
    this.startTime = null;
    this.duration = null;
    this.numAddedUnits = 0;
}
function GetCurrentAttributeValue(element, attribute) {
    var currentValue = 0;

    switch (attribute) {
    case 1:
        if (fRightToLeft)
            currentValue = parseInt(element.style.right.replace("px", ""));
        else
            currentValue = parseInt(element.style.left.replace("px", ""));
        break;
    case 2:
        currentValue = parseInt(element.style.top.replace("px", ""));
        break;
    case 3:
        currentValue = parseInt(element.style.height.replace("px", ""));
        break;
    case 4:
        currentValue = parseInt(element.style.width.replace("px", ""));
        break;
    case 5:
        currentValue = GetOpacity(element);
        break;
    }
    return currentValue;
}
function TrySetProperty(obj, propName, value) {
    var propertyWasSet = false;

    if (obj != null) {
        try {
            obj[propName] = value;
            propertyWasSet = true;
        }
        catch (e) { }
    }
    return propertyWasSet;
}
function B1(t) {
    return t * t * t;
}
function B2(t) {
    return 3 * t * t * (1 - t);
}
function B3(t) {
    return 3 * t * (1 - t) * (1 - t);
}
function B4(t) {
    return (1 - t) * (1 - t) * (1 - t);
}
function BezierFunction(x1, y1, x2, y2, t) {
    return 0 * B4(t) + y1 * B3(t) + y2 * B2(t) + 1 * B1(t);
}
function GetAnimationWSA() {
    if (typeof SPAnimation.g_AnimationWSA == "undefined" || !Boolean(SPAnimation.g_AnimationWSA)) {
        if (SP) {
            if (SP.BWsaClient != null) {
                var animationWSA = GetWSA();

                SPAnimation.g_AnimationWSA = animationWSA;
                SPAnimation.g_AnimationWSA.createStream(SPAnimation.DATAID_SPANIMATION, 1, 8, 200);
            }
        }
    }
    return SPAnimation.g_AnimationWSA;
}
var SPAnimationUtility;

function SPAnimUtil_TableAnimator(t) {
    this.tableElement = t;
    this.fAnimatable = false;
    this.Initialize();
}
function SiteLogoImagePageUpdate(ctrl, data) {
    ctrl.src = data.ImageUrl;
    ctrl.alt = data.AlternateText;
}
function SearchAreaPageUpdate(ctrl, data) {
    var mySel = (ctrl.getElementsByTagName('select'))[0];

    mySel.options[0].value = data.Site.value;
    if (mySel.options.length > 1) {
        mySel.remove(1);
    }
    if (data.List.isValid) {
        mySel.options[1] = new Option(data.List.text, data.List.value);
        mySel.selectedIndex = 1;
    }
    else {
        mySel.selectedIndex = 0;
    }
    if (typeof searchAreaUrl != 'undefined') {
        searchAreaUrl = data.SearchAreaUrl;
    }
}
var IsMenuShown;
var ChevronContainer;
var itemTableDeferred;
var imageCell;
var onKeyPress;
var downArrowText;
var currentEditMenu;
var currentItemID;
var currentItemAppName;
var currentItemProgId;
var currentItemIcon;
var currentItemOpenControl;
var currentItemOpenApp;
var currentItemFileUrl;
var currentItemFSObjType;
var currentItemContentTypeId;
var currentItemCheckedOutUserId;
var currentItemCheckoutExpires;
var currentItemModerationStatus;
var currentItemUIString;
var currentItemCheckedoutToLocal;
var bIsCheckout;
var currentItemCanModify;
var currentItemPermMaskH;
var currentItemPermMaskL;
var currentItemEvtType;
var currentItemIsEventsExcp;
var currentItemIsEventsDeletedExcp;
var g_MaximumSelectedItemsAllowed;
var g_CustomActionDialogHandlers;
var g_CustomActionDialogHandlerId;
var g_ExpGroupWPState;
var DocOpen;
var hoverTR;
var ecbTD;

function RowOnHover(tr, evt) {
    var iid = tr.getAttribute("iid");
    var curCtx = CtxFromRow(tr);

    if (CountSelectedItems(curCtx) > 1 && ItemIsCurrentlySelected(curCtx, iid, tr)) {
        ecbTD = null;
        hoverTR = null;
        for (var i = 0; i < tr.childNodes.length; i++) {
            var child = tr.childNodes[i];

            if (child.getAttribute("IsECB") == 'TRUE') {
                OnChildItem(child);
                ecbTD = child;
                hoverTR = tr;
                break;
            }
        }
        var elem = null;

        if (evt != null) {
            elem = evt.toElement != null ? evt.toElement : evt.target;
        }
        if (elem != null && tr != elem) {
            if (elem.tagName != "DIV") {
                elem = GetAncestor(elem, "DIV");
            }
            if (elem != null && typeof elem.onmouseover == 'function') {
                elem.onmouseover(evt);
            }
        }
    }
}
function RowHoverOff(tr, evt) {
    if (hoverTR == null || evt == null || ecbTD == null || CountSelectedItems(CtxFromRow(tr)) <= 1)
        return;
    var toElement = evt.toElement != null ? evt.toElement : evt.relatedTarget;

    if (toElement != null && toElement.tagName != "TR") {
        var node = toElement.parentNode;

        while (node != null && node.tagName != "TR") {
            node = node.parentNode;
        }
        if (node == hoverTR)
            return;
    }
    else if (toElement == hoverTR)
        return;
    var fakeEvt = new Object();

    OutItem(fakeEvt);
    ecbTD = null;
    hoverTR = null;
}
function IsEventTargetAnchor(evt) {
    var elmTarget = evt.srcElement != null ? evt.srcElement : evt.target;

    if (elmTarget != null && elmTarget.tagName.toUpperCase() == "A") {
        return true;
    }
    return false;
}
function IsEventRightClickOnAnchor(evt) {
    if (evt == null)
        return false;
    if (evt.type == "contextmenu") {
        return IsEventTargetAnchor(evt);
    }
    return false;
}
function ShowMenuForTrOuter(elm, evt, fSelect) {
    if (evt == null)
        return true;
    var srcElement = evt.srcElement;

    if (srcElement == null)
        return true;
    if (srcElement.tagName.toLowerCase() == "div" && srcElement.className.indexOf("ms-list-itemLink") >= 0) {
        return ShowCalloutMenuForTr(elm, evt, fSelect);
    }
    return true;
}
function ShowCalloutMenuForTr(elm, evt, fSelect) {
    var fRet = false;

    EnsureScriptFunc("callout.js", "Callout", function() {
        fRet = ShowCalloutMenuForTrInner(elm, evt, fSelect);
    });
    return fRet;
}
function ShowCalloutMenuForTrInner(elm, evt, fSelect) {
    if (IsEventRightClickOnAnchor(evt))
        return true;
    var elmTr = GetAncestor(elm, "TR");
    var elmTdEcb = GetEcbTdFromRow(elmTr);
    var elmDivEcb = GetEcbDivFromEcbTd(elmTdEcb);
    var elmDivEcbAffordance = GetEcbAffordanceDivFromRow(elmTr);

    if (elmDivEcb == null)
        return true;
    if (fSelect) {
        SingleItemSelectByElement(elmTr, false);
    }
    var strItmID = GetAttributeFromItemTable(elmDivEcb, "ItemId", "Id");

    OpenCallout(elmDivEcbAffordance, evt, elmDivEcb, strItmID);
    return false;
}
function FIsMouseCursorInsideElement(evt, elm) {
    if (evt == null || elm == null || evt.clientX == null || evt.clientY == null || evt.clientX == 0 || evt.clientY == 0)
        return false;
    var rect = elm.getBoundingClientRect();

    if (rect.left <= evt.clientX && rect.right >= evt.clientX && rect.top <= evt.clientY && rect.bottom >= evt.clientY) {
        return true;
    }
    return false;
}
function ShowECBMenuForTr(elm, evt) {
    if (IsEventRightClickOnAnchor(evt))
        return true;
    var elmTr = GetAncestor(elm, "TR");
    var elmTdEcb = GetEcbTdFromRow(elmTr);
    var elmDivEcb = GetEcbDivFromEcbTd(elmTdEcb);

    if (elmDivEcb == null)
        return true;
    if (elmTr.className.indexOf("s4-itm-selected") < 0) {
        SingleItemSelectByElement(elmTr, false);
    }
    var isAjax = IsAjaxMenu(elmDivEcb);

    itemTable = elmDivEcb;
    currentItemID = GetAttributeFromItemTable(elmDivEcb, "ItemId", "Id");
    currentCtx = g_ctxDict[elmDivEcb.getAttribute("CTXName")];
    if (isAjax) {
        var fUseMousePosition = FIsMouseCursorInsideElement(evt, elm);

        return CreateAjaxMenu(evt, fUseMousePosition);
    }
    else {
        return CreateMenu(evt);
    }
}
var ProtocolCommand;
var phManager;

function CBSelectedValues(strList, fAllChecked) {
    this.strList = strList;
    this.fAllChecked = fAllChecked;
}
function CBSelectedValues_InitializePrototype() {
    CBSelectedValues.prototype.strList = "";
    CBSelectedValues.prototype.fAllChecked = false;
}
function PageContextInfo(webServerRelativeUrl, webLanguage, currentLanguage, webUIVersion, pageListId, pageItemId, userId, alertsEnabled, siteServerRelativeUrl, allowSilverlightPrompt, webAbsoluteUrl, siteClientTag, layoutsUrl, tenantAppVersion, siteAbsoluteUrl, themedImageRootPath, themedImageFileNames, clientServerTimeDelta) {
    this.webServerRelativeUrl = webServerRelativeUrl;
    this.webAbsoluteUrl = webAbsoluteUrl;
    this.siteAbsoluteUrl = siteAbsoluteUrl;
    this.layoutsUrl = layoutsUrl;
    this.webLanguage = webLanguage;
    this.siteClientTag = siteClientTag;
    this.currentLanguage = currentLanguage;
    this.webUIVersion = webUIVersion;
    this.pageListId = pageListId;
    this.pageItemId = pageItemId;
    this.userId = userId;
    this.alertsEnabled = alertsEnabled;
    this.siteServerRelativeUrl = siteServerRelativeUrl;
    this.allowSilverlightPrompt = allowSilverlightPrompt;
    this.tenantAppVersion = tenantAppVersion;
    this.themedImageRootPath = themedImageRootPath;
    this.themedImageFileNames = themedImageFileNames;
    this.clientServerTimeDelta = clientServerTimeDelta;
}
function PageContextInfo_InitializePrototype() {
    PageContextInfo.prototype.webServerRelativeUrl = "";
    PageContextInfo.prototype.webAbsoluteUrl = "";
    PageContextInfo.prototype.siteAbsoluteUrl = "";
    PageContextInfo.prototype.serverRequestPath = "";
    PageContextInfo.prototype.layoutsUrl = "";
    PageContextInfo.prototype.siteClientTag = "";
    PageContextInfo.prototype.webLanguage = 0;
    PageContextInfo.prototype.webTitle = null;
    PageContextInfo.prototype.webLogoUrl = null;
    PageContextInfo.prototype.currentCultureName = null;
    PageContextInfo.prototype.currentUICultureName = null;
    PageContextInfo.prototype.currentLanguage = 0;
    PageContextInfo.prototype.crossDomainPhotosEnabled = false;
    PageContextInfo.prototype.webUIVersion = 0;
    PageContextInfo.prototype.pageListId = "";
    PageContextInfo.prototype.pageItemId = 0;
    PageContextInfo.prototype.userId = "";
    PageContextInfo.prototype.systemUserKey = "";
    PageContextInfo.prototype.alertsEnabled = false;
    PageContextInfo.prototype.siteServerRelativeUrl = "";
    PageContextInfo.prototype.allowSilverlightPrompt = "";
    PageContextInfo.prototype.tenantAppVersion = null;
    PageContextInfo.prototype.themedImageRootPath = null;
    PageContextInfo.prototype.themedImageFileNames = null;
    PageContextInfo.prototype.clientServerTimeDelta = 0;
}
var _groupCollapse;
var _spPageContextInfo;
var bGridViewPresent;
var _fV4Calendar;
var _spCustomNavigateHierarchy;
var g_ExtensionNotSupportCheckoutToLocal;
var g_ExtensionDefaultForRead;
var bValidSearchTerm;
var ListCtrlObj;
var fListControl;
var fListErrorShown;
var fNewDoc;
var fNewDoc2;
var fNewDoc3;
var SPDesignerDownloadUrl;
var SPDesignerProgID;

function CtxRgiid(ctxT, rgiid) {
    this.ctx = ctxT;
    this.rgiid = rgiid;
}
function CtxRgiid_InitializePrototype() {
    CtxRgiid.prototype = {
        ctx: undefined,
        rgiid: undefined
    };
}
function FilterNoteField(view, fieldName, fieldValue, keyCode) {
    if (keyCode != 13)
        return;
    event.returnValue = false;
    var strDocUrl = window.location.href;
    var pagedPart = /&Paged=TRUE&p_[^&]*&PageFirstRow=[^&]*/gi;

    strDocUrl = strDocUrl.replace(pagedPart, "");
    var viewGuid = GetUrlKeyValue("View", true);

    if (viewGuid == "") {
        strDocUrl = StURLSetVar2(strDocUrl, "View", view);
        viewGuid = view;
    }
    var idxQuery;

    if (view.toUpperCase() != viewGuid.toUpperCase()) {
        var encodedView = escapeProperly(view);

        if (encodedView.toUpperCase() != viewGuid.toUpperCase()) {
            var pattern = /\?[^?]*/i;

            idxQuery = strDocUrl.indexOf("?");
            if (idxQuery != -1)
                strDocUrl = strDocUrl.replace(pattern, "?View=" + view);
            else
                strDocUrl = strDocUrl + "?View=" + view;
        }
    }
    var arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)=" + fieldName));

    if (arrayField == null) {
        idxQuery = strDocUrl.indexOf("?");
        if (idxQuery != -1)
            strDocUrl = strDocUrl + "&";
        else
            strDocUrl = strDocUrl + "?";
        var i = 0;
        var filterArray;

        do {
            i++;
            filterArray = strDocUrl.match(new RegExp("FilterField" + String(i) + "=[^&]*" + "&FilterValue" + String(i) + "=[^&]*"));
        } while (filterArray != null);
        strDocUrl = strDocUrl + "FilterField" + String(i) + "=" + fieldName + "&FilterValue" + String(i) + "=" + escapeProperly(fieldValue);
        strDocUrl = strDocUrl.replace("Filter=1&", "");
    }
    else {
        var filterNo = parseInt(arrayField[1]);
        var arrayValue = strDocUrl.match(new RegExp("&FilterValue" + String(filterNo) + "=[^&]*"));
        var strTemp = "&" + arrayField[0] + arrayValue[0];
        var strNewFilter = "&FilterField" + arrayField[1] + "=" + fieldName + "&FilterValue" + arrayField[1] + "=" + escapeProperly(fieldValue);

        strDocUrl = strDocUrl.replace(strTemp, strNewFilter);
        strDocUrl = strDocUrl.replace("Filter=1&", "");
    }
    window.location.href = STSPageUrlValidation(strDocUrl);
}
function _SelectField(view, selectID) {
    var strDocUrl = ajaxNavigate.get_href();
    var strHash = ajaxNavigate.get_hash();
    var fViewReplaced = false;
    var pattern = /\#.*/i;

    strDocUrl = strDocUrl.replace(pattern, "");
    var viewGuid = GetUrlKeyValue("View", true);
    var pageView = GetUrlKeyValue("PageView", true);
    var idForm = GetUrlKeyValue("ID", true);
    var contentTypeIdForm = GetUrlKeyValue("ContentTypeId", true);

    if (view.toUpperCase() != viewGuid.toUpperCase()) {
        var encodedView = escapeProperly(view);

        if (encodedView.toUpperCase() != viewGuid.toUpperCase()) {
            pattern = /\?[^?]*/i;
            var idxQuery = strDocUrl.indexOf("?");

            if (idxQuery != -1)
                strDocUrl = strDocUrl.replace(pattern, "?View=" + encodedView);
            else
                strDocUrl = strDocUrl + "?View=" + encodedView;
            fViewReplaced = true;
        }
    }
    if (!fViewReplaced && GetUrlKeyValue("SelectedID") != "") {
        var selectIDOld = /&SelectedID=[^&]*/gi;

        strDocUrl = strDocUrl.replace(selectIDOld, "");
        selectIDOld = /\?SelectedID=[^&]*&?/;
        strDocUrl = strDocUrl.replace(selectIDOld, "?");
    }
    strDocUrl = strDocUrl + "&SelectedID=";
    strDocUrl = strDocUrl + selectID;
    if (fViewReplaced && pageView != "") {
        strDocUrl = strDocUrl + "&PageView=" + pageView;
    }
    if (idForm != "") {
        strDocUrl = strDocUrl + "&ID=" + idForm;
    }
    if (contentTypeIdForm != "") {
        strDocUrl = strDocUrl + "&ContentTypeId=" + contentTypeIdForm;
    }
    if (strHash != "") {
        strDocUrl = strDocUrl + strHash;
    }
    _SubmitFormPost(strDocUrl);
    return false;
}
function getSortQueryParam(strDocUrl) {
    if (strDocUrl == null || strDocUrl == "")
        return "";
    var strFilterQuery = "";
    var arrayField;

    arrayField = strDocUrl.match(new RegExp("SortField" + "=[^&]*" + "&SortDir" + "=[^&]*"));
    if (arrayField != null)
        strFilterQuery = arrayField[0];
    return strFilterQuery;
}
function _FilterField(view, fieldName, fieldValue, selOption) {
    return FilterFieldV3(view, fieldName, fieldValue, selOption, "", false);
}
function CompleteDecode(strIn) {
    if (typeof strIn == 'undefined' || strIn == null)
        return strIn;
    var strOut = strIn;
    var dStr = unescapeProperly(strOut);

    while (strOut != dStr) {
        strOut = dStr;
        dStr = unescapeProperly(strOut);
    }
    return strOut;
}
function FilterFieldV3(view, fieldName, fieldValue, selOption, queryString, bReturnUrl) {
    var idxQuery;
    var strDocUrl = Boolean(queryString) ? queryString : CanonicalizeUrlEncodingCase(ajaxNavigate.get_href());
    var uri = new URI(strDocUrl, {
        disableEncodingDecodingForLegacyCode: true
    });

    strDocUrl = "?" + uri.getQuery();
    var filterNo;
    var filterArray;
    var arrayField = strDocUrl.match(new RegExp("[&\?]Paged=TRUE[^&]*"));

    if (arrayField != null) {
        var pagedPart = /&p_[^&]*/gi;

        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PageFirstRow=[^&]*/gi;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PageLastRow=[^&]*/gi;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        pagedPart = /&PagedPrev=TRUE[^&]*/i;
        strDocUrl = strDocUrl.replace(pagedPart, "");
        arrayField = strDocUrl.match(new RegExp("[\?]Paged=TRUE[^&]*"));
        if (arrayField != null) {
            idxQuery = (strDocUrl.substr(arrayField["index"])).indexOf("&");
            if (idxQuery != -1) {
                strDocUrl = strDocUrl.substr(0, arrayField["index"] + 1) + strDocUrl.substr(idxQuery + arrayField["index"] + 1);
            }
            else {
                strDocUrl = strDocUrl.substr(0, arrayField["index"]);
            }
        }
        else {
            pagedPart = /&Paged=TRUE[^&]*/i;
            strDocUrl = strDocUrl.replace(pagedPart, "");
        }
    }
    var viewGuid = GetUrlKeyValue("View", true);

    if (viewGuid == "") {
        strDocUrl = StURLSetVar2(strDocUrl, "View", view);
        viewGuid = view;
    }
    if (CompleteDecode(view.toUpperCase()) != CompleteDecode(viewGuid.toUpperCase())) {
        var pattern = /\?[^?]*/i;

        idxQuery = strDocUrl.indexOf("?");
        if (idxQuery != -1)
            strDocUrl = strDocUrl.replace(pattern, "?View=" + view);
        else
            strDocUrl = strDocUrl + "?View=" + view;
    }
    var singleField = true;

    arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)=" + fieldName + "&"));
    if (!Boolean(arrayField)) {
        arrayField = strDocUrl.match(new RegExp("FilterFields([0-9]+)=" + fieldName + "&"));
        singleField = false;
    }
    if (!Boolean(arrayField)) {
        if (0 == selOption) {
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("?Filter=1", "");
        }
        else {
            idxQuery = strDocUrl.indexOf("?");
            if (idxQuery != -1)
                strDocUrl = strDocUrl + "&";
            else
                strDocUrl = strDocUrl + "?";
            var i = 0;

            do {
                i++;
                filterArray = strDocUrl.match(new RegExp("FilterField" + String(i) + "=[^&]*"));
                if (!Boolean(filterArray))
                    filterArray = strDocUrl.match(new RegExp("FilterFields" + String(i) + "=[^&]*"));
            } while (filterArray != null);
            strDocUrl = strDocUrl + "FilterField" + String(i) + "=" + fieldName + "&FilterValue" + String(i) + "=" + escapeProperly(fieldValue);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
        }
    }
    else {
        filterNo = parseInt(arrayField[1]);
        var arrayValue = strDocUrl.match(new RegExp("FilterValue" + String(filterNo) + "=[^&]*"));

        if (!Boolean(arrayValue))
            arrayValue = strDocUrl.match(new RegExp("FilterValues" + String(filterNo) + "=[^&]*"));
        var arrayOp = strDocUrl.match(new RegExp("&FilterOp" + String(filterNo) + "=[^&]*"));
        var arrayLookupId = strDocUrl.match(new RegExp("&FilterLookupId" + String(filterNo) + "=[^&]*"));
        var arrayData = strDocUrl.match(new RegExp("&FilterData" + String(filterNo) + "=[^&]*"));
        var strTemp = "&" + arrayField[0] + arrayValue[0];

        if (0 == selOption) {
            if (strDocUrl.indexOf(strTemp) == -1) {
                var arrayField_0 = arrayField[0];

                strTemp = arrayField_0 + arrayValue[0] + "&";
            }
            strDocUrl = strDocUrl.replace(strTemp, "");
            if (arrayOp != null)
                strDocUrl = strDocUrl.replace(String(arrayOp[0]), "");
            if (arrayLookupId != null)
                strDocUrl = strDocUrl.replace(String(arrayLookupId[0]), "");
            if (arrayData != null)
                strDocUrl = strDocUrl.replace(String(arrayData[0]), "");
            strDocUrl = restructureFilterUrl(strDocUrl, filterNo);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("?Filter=1", "");
            strDocUrl = strDocUrl.replace("&Filter=1", "");
        }
        else {
            var strFirstChar;

            if (strDocUrl.indexOf(strTemp) == -1) {
                strTemp = "?" + arrayField[0] + arrayValue[0];
                strFirstChar = "?";
            }
            else {
                strFirstChar = "&";
            }
            var strNewFilter;

            if (ctxFilter == null || !ctxFilter.IsClientRendering) {
                strNewFilter = strFirstChar + "FilterField" + arrayField[1] + "=" + fieldName + "&FilterValue" + arrayField[1] + "=" + escapeProperly(fieldValue);
            }
            else {
                var fieldValueFound = false;
                var exFilterValue = String(arrayValue[0].substr(arrayValue[0].indexOf('=') + 1));
                var newFilterArray = [];
                var filterValueArray = [];

                if (singleField) {
                    exFilterValue = unescapeProperly(exFilterValue);
                    if (fieldValue != exFilterValue) {
                        newFilterArray.push(exFilterValue);
                        newFilterArray.push(fieldValue);
                    }
                }
                else {
                    filterValueArray = ParseMultiColumnValue(unescapeProperly(exFilterValue), ';#', true);
                    for (var valueIndex in filterValueArray) {
                        if (filterValueArray[valueIndex] == fieldValue) {
                            fieldValueFound = true;
                            continue;
                        }
                        newFilterArray.push(filterValueArray[valueIndex]);
                    }
                    if (!fieldValueFound) {
                        newFilterArray.push(fieldValue);
                    }
                }
                exFilterValue = escapeProperly(ConvertMultiColumnValueToString(newFilterArray, null, false));
                var strFilterField = "FilterField";
                var strFilterValue = "&FilterValue";

                if (newFilterArray.length > 1) {
                    strFilterField = "FilterFields";
                    strFilterValue = "&FilterValues";
                }
                strNewFilter = strFirstChar + strFilterField + arrayField[1] + "=" + fieldName + strFilterValue + arrayField[1] + "=" + exFilterValue;
                if (exFilterValue == "" && singleField) {
                    strNewFilter = "";
                    strDocUrl = restructureFilterUrl(strDocUrl, filterNo);
                }
            }
            strDocUrl = strDocUrl.replace(strTemp, strNewFilter);
            strDocUrl = strDocUrl.replace("Filter=1&", "");
            strDocUrl = strDocUrl.replace("&Filter=1", "");
        }
    }
    var originalArrayField = arrayField;

    arrayField = strDocUrl.match(new RegExp("FilterField([0-9]+)="));
    if (!Boolean(arrayField))
        arrayField = strDocUrl.match(new RegExp("FilterFields([0-9]+)="));
    if (arrayField == null && selOption == 0 && (ctxFilter != null && (!ctxFilter.IsClientRendering || originalArrayField != null && !Boolean(queryString)))) {
        strDocUrl = strDocUrl + "&FilterClear=1";
    }
    else {
        strDocUrl = strDocUrl.replace("&FilterClear=1", "");
    }
    uri.setQuery(strDocUrl);
    strDocUrl = uri.getString();
    if (bReturnUrl) {
        var ich = strDocUrl.indexOf('?');

        ich = (strDocUrl.substr(ich + 1)).indexOf('?');
        return strDocUrl;
    }
    else
        _SubmitFormPost(strDocUrl);
    return null;
}
function restructureFilterUrl(strDocUrl, filterNo) {
    var j = filterNo + 1;
    var filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
    var isMultipleFilter = false;

    if (!Boolean(filterArray)) {
        filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
        isMultipleFilter = filterArray != null;
    }
    for (var i = filterNo; filterArray != null; i++) {
        var strNew = isMultipleFilter ? "FilterFields" + String(i) : "FilterField" + String(i);
        var strOld = isMultipleFilter ? "FilterFields" + String(j) : "FilterField" + String(j);

        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = isMultipleFilter ? "FilterValues" + String(i) : "FilterValue" + String(i);
        strOld = isMultipleFilter ? "FilterValues" + String(j) : "FilterValue" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterOp" + String(i);
        strOld = "FilterOp" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterLookupId" + String(i);
        strOld = "FilterLookupId" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        strNew = "FilterData" + String(i);
        strOld = "FilterData" + String(j);
        strDocUrl = strDocUrl.replace(strOld, strNew);
        j++;
        filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
        if (!Boolean(filterArray))
            filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
    }
    return strDocUrl;
}
function CanonicalizeUrlEncodingCase(str) {
    var strOut = "";
    var ix;

    for (ix = 0; ix < str.length; ix++) {
        var curChar = str.charAt(ix);

        if (curChar == '%' && ix + 2 < str.length) {
            strOut += curChar;
            ix++;
            strOut += ((str.charAt(ix)).toString()).toUpperCase();
            ix++;
            strOut += ((str.charAt(ix)).toString()).toUpperCase();
        }
        else {
            strOut += curChar;
        }
    }
    return strOut;
}
function _SetControlValue(controlId, value) {
    var control = document.getElementById(controlId);

    if (control != null)
        control.value = value;
}
function SetSearchView() {
    if (typeof bValidSearchTerm != "undefined")
        bValidSearchTerm = true;
}
function GroupCollapse() {
    return typeof _groupCollapse != "undefined" && _groupCollapse;
}
function HandleFilter(evt, url, operationType) {
    if (FV4UI()) {
        {
            var defd;

            try {
                defd = typeof inplview.HandleFilterReal;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.HandleFilterReal";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        inplview.HandleFilterReal(evt, url, operationType);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
        return;
    }
    _SubmitFormPost(url);
}
function _SubmitFormPost(url, bForceSubmit, bDemoteIntoFormBody) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var form = document.forms[MSOWebPartPageFormName];

        if (null != form) {
            if (bForceSubmit != undefined && bForceSubmit == true || typeof form.onsubmit == "undefined" || form.onsubmit == null || form.onsubmit() != false) {
                if (typeof window.WebForm_OnSubmit == 'function') {
                    window.WebForm_OnSubmit();
                }
                if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null)
                    url += url.indexOf('?') == -1 ? "?IsDlg=1" : "&IsDlg=1";
                if (FV4UI()) {
                    try {
                        var currentTabId = ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).get_selectedTabId();

                        if (Boolean(currentTabId)) {
                            url = StURLSetVar2(url, "InitialTabId", escapeProperly(currentTabId));
                            url = StURLSetVar2(url, "VisibilityContext", "WSSTabPersistence");
                        }
                    }
                    catch (e) { }
                }
                if (bDemoteIntoFormBody != undefined && bDemoteIntoFormBody == true) {
                    url = DemoteIntoFormBody(form, url, "owsfileref");
                    url = DemoteIntoFormBody(form, url, "NextUsing");
                }
                form.action = STSPageUrlValidation(url);
                form.method = "POST";
                if (isPortalTemplatePage(url))
                    form.target = "_top";
                if (!bValidSearchTerm)
                    _ClearSearchTerm("");
                form.submit();
            }
        }
    }
}
function DemoteIntoFormBody(form, strUrl, strKey) {
    var strVal = GetUrlKeyValue(strKey, false, strUrl);

    if (strVal.length > 0) {
        var obj = document.createElement("INPUT");

        if (obj != null) {
            obj.setAttribute("type", "hidden");
            obj.setAttribute("id", strKey);
            obj.setAttribute("name", strKey);
            obj.setAttribute("value", strVal);
            form.appendChild(obj);
            return RemoveUrlKeyValue(strKey, strUrl);
        }
    }
    return strUrl;
}
function RemoveUrlKeyValue(keyName, url) {
    var re = new RegExp(keyName + "=[^&]*&");

    url = url.replace(re, "");
    re = new RegExp(keyName + "=[^&]*");
    url = url.replace(re, "");
    return url;
}
function _RefreshPageTo(evt, url, bForceSubmit) {
    Sys.Debug.assert(FV4UI());
    EnsureScript("inplview", typeof inplview, null, true);
    inplview.RefreshPageTo(evt, url, bForceSubmit);
}
var g_varSkipRefreshOnFocus;

function RefreshOnFocus() {
    if (typeof g_varSkipRefreshOnFocus == "undefined" || !Boolean(g_varSkipRefreshOnFocus)) {
        _RefreshPage(1);
    }
}
function RefreshOnFocusForOneRow() {
    RefreshOnFocus();
}
function DisableRefreshOnFocus() {
    g_varSkipRefreshOnFocus = 1;
}
function SetWindowRefreshOnFocus() {
    window.onbeforeunload = DisableRefreshOnFocus;
    window.onfocus = RefreshOnFocus;
}
function RemoveParametersFromUrl(url) {
    var paramsBeginPos = url.indexOf('?');

    if (paramsBeginPos == -1)
        return url;
    else
        return url.substr(0, paramsBeginPos);
}
function _GoToPageRelative(url) {
    if (url.substr(0, 4) != "http" && url.substr(0, 1) != "/") {
        var currentPage = RemoveParametersFromUrl(window.location.href);
        var pos = currentPage.lastIndexOf("/");

        if (pos > 0)
            url = currentPage.substring(0, pos + 1) + url;
    }
    GoToPage(url);
}
function _EnterFolder(url) {
    var currentPage = RemoveParametersFromUrl(window.location.href);
    var newPage = RemoveParametersFromUrl(url);
    var newPageIsRelativeCurrentPage = newPage != null && newPage.length > 0 && newPage.charAt(0) == '/' && newPage.length < currentPage.length && currentPage.indexOf(newPage) == currentPage.length - newPage.length;

    if (!newPageIsRelativeCurrentPage && newPage.toLowerCase() != currentPage.toLowerCase())
        STSNavigate(url);
    else
        _SubmitFormPost(url);
}
function _HandleFolder(ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    var hasHtmlType = Boolean(strHtmlType) && strHtmlType != "";
    var hasServerFileRedirect = Boolean(strServerFileRedirect) && strServerFileRedirect != "";
    var isEdit = !IsNullOrUndefined(ele.getAttribute("isEdit"));

    if (hasHtmlType && hasServerFileRedirect || strHtmlType == "OneNote.Notebook" && isEdit) {
        if (strHtmlTrProgId == "FALSE" && ele != null && isEdit && !IsNullOrUndefined(strProgId))
            strHtmlTrProgId = strProgId;
        DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
    }
    else {
        if (objEvent != null) {
            CancelEvent(objEvent);
        }
        _EnterFolder(url);
    }
}
function UseDialogsForNewItem(formUrl) {
    var myCtx = GetCtxFromFormUrl(formUrl);
    var uri = new URI(formUrl);
    var type = uri.getQueryParameter('Type');

    return Boolean(myCtx) && type == '1';
}
var g_useDialogAlwaysList;

function UseDialogsForFormsPages(formUrl) {
    if (Boolean(formUrl)) {
        var uri = new URI(formUrl);
        var url = uri.getLastPathSegment();

        if (Boolean(url)) {
            url = url.toLowerCase();
            for (var i = 0; i < g_useDialogAlwaysList.length; i++) {
                if (url == g_useDialogAlwaysList[i]) {
                    return true;
                }
            }
        }
    }
    return UseDialogsForFormsWithCtx(GetCtxFromFormUrl(formUrl));
}
function GetCtxFromFormUrl(formUrl) {
    var myCtx = null;
    var listName = GetUrlKeyValue("LISTID", false, formUrl.toUpperCase());

    if (listName == "")
        listName = GetUrlKeyValue("LIST", false, formUrl.toUpperCase());
    if (listName != "" && g_ctxDict != null) {
        for (var ctxId in g_ctxDict) {
            var ctxT = g_ctxDict[ctxId];

            if (Boolean(ctxT.listName) && ctxT.listName.toUpperCase() == listName.toUpperCase()) {
                myCtx = ctxT;
                break;
            }
        }
    }
    return myCtx;
}
function UseDialogsForFormsWithCtx(myCtx) {
    if (myCtx == null || typeof myCtx.NavigateForFormsPages == "undefined") {
        return false;
    }
    return !Boolean(myCtx.NavigateForFormsPages);
}
function _EditItemWithCheckoutAlert(evt, url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser)) {
        if (bCheckout == '1' && UseDialogsForFormsPages(url))
            NewOrEditV4Core(evt, url, true);
        else
            _EditItem2(evt, url);
    }
}
function _STSNavigateWithCheckoutAlert(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser)) {
        STSNavigate(url);
    }
}
function ShowInPopUI(evt, currentCtxt, strUrl) {
    var fn = function() {
        if (currentCtxt == null && typeof evt.fromRibbon == "boolean" && evt.fromRibbon && typeof evt.currentCtx != "undefined" && evt.currentCtx != null)
            currentCtxt = evt.currentCtx;
        if (typeof currentCtxt != 'undefined' && currentCtxt != null && currentCtxt.clvp != null) {
            var clvp = currentCtxt.clvp;

            GetFocusInfo(evt, clvp);
            clvp.ShowPopup(strUrl);
        }
        else {
            STSNavigate(strUrl);
        }
    };

    EnsureScript("inplview", typeof inplview, fn);
}
function CheckoutAlertBeforeNavigate(url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    if (typeof strCurrentUser == "undefined" || strCurrentUser == null || strCurrentUser == "")
        strCurrentUser = currentItemCheckedOutUserId;
    if ((typeof strCheckoutUser == "undefined" || strCheckoutUser == null || strCheckoutUser == "") && typeof ctx != "undefined") {
        strCheckoutUser = ctx.CurrentUserId;
    }
    if (bIsCheckedOutToLocal == "1") {
        alert(Strings.STS.L_CannotEditPropertyForLocalCopy_Text);
        return false;
    }
    if (strCurrentUser != null && strCurrentUser != "" && strCheckoutUser != null && strCurrentUser != strCheckoutUser) {
        alert(Strings.STS.L_CannotEditPropertyCheckout_Text);
        return false;
    }
    if (bCheckout == "1") {
        if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
            if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
                strDocument = window.location.protocol + "//" + window.location.host + strDocument;
            return CheckoutviaXmlhttp(strhttpRoot, strDocument);
        }
        else
            return false;
    }
    return true;
}
function CheckoutviaXmlhttp(strhttpRoot, strDocument) {
    var xh;
    var req;

    xh = new XMLHttpRequest();
    if (xh == null)
        return false;
    xh.open("POST", strhttpRoot + "/_vti_bin/lists.asmx", false);
    xh.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    xh.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/CheckOutFile");
    var soapData = '<?xml version="1.0" encoding="utf-8"?>' + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' + 'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + '<soap:Body>' + '<CheckOutFile xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>' + strDocument + '</pageUrl></CheckOutFile></soap:Body></soap:Envelope>';

    xh.send(soapData);
    return xh.status == 200 && xh.responseText.indexOf("true") != 0;
}
function FSupportCheckoutToLocal(strExtension) {
    var fRet = true;

    if (strExtension == null || strExtension == "")
        return false;
    strExtension = strExtension.toLowerCase();
    var ix = 0;

    for (ix = 0; ix < g_ExtensionNotSupportCheckoutToLocal.length; ix++) {
        if (strExtension == g_ExtensionNotSupportCheckoutToLocal[ix])
            return false;
    }
    return true;
}
function FDefaultOpenForReadOnly(strExtension) {
    var fRet = false;

    if (strExtension == null || strExtension == "")
        return true;
    strExtension = strExtension.toLowerCase();
    var ix = 0;

    for (ix = 0; ix < g_ExtensionDefaultForRead.length; ix++) {
        if (strExtension == g_ExtensionDefaultForRead[ix])
            return true;
    }
    return false;
}
function CheckoutDocument(strhttpRoot, strDocument, strOpenControl) {
    var stsOpen = null;
    var fRet = true;
    var fClientCheckout = false;

    if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    var strextension = SzExtension(unescapeProperly(strDocument));

    if (FSupportCheckoutToLocal(strextension) && strOpenControl == "SharePoint.OpenDocuments.3") {
        stsOpen = StsOpenEnsureEx2(strOpenControl);
    }
    if (stsOpen != null && !browseris.chrome) {
        try {
            fRet = typeof stsOpen.CheckoutDocumentPrompt != "undefined" && stsOpen.CheckoutDocumentPrompt(unescapeProperly(strDocument), false, "");
            if (fRet) {
                RefreshOnFocus();
            }
            fClientCheckout = fRet;
            if (fClientCheckout || !(IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()))
                return fRet;
        }
        catch (e) { }
    }
    if (!fClientCheckout) {
        var url = "FileName=" + escapeProperly(unescapeProperly(strDocument)) + "&Checkout=true";

        NavigateToCheckinAspx(strhttpRoot, url);
    }
    return true;
}
function NewOrEditV4Core(evt, url, bForceRefreshOnCancel) {
    var focusCallback = function() {
        var clvp = CLVPFromEventReal(evt);

        GetFocusInfo(evt, clvp);
    };

    if (evt != null) {
        EnsureScript("inplview", typeof InitAllClvps, focusCallback);
    }
    if (bForceRefreshOnCancel)
        _OpenPopUpPage(url, RefreshOnDialogClose);
    else
        _OpenPopUpPage(url, RefreshPage);
    return false;
}
function _NewItem2(evt, url) {
    if (UseDialogsForNewItem(url) || UseDialogsForFormsPages(url)) {
        return NewOrEditV4Core(evt, url);
    }
    else {
        _NewItem(url);
        return undefined;
    }
}
function _NewItem(url) {
    GoToPage(url);
}
function _EditItem2(evt, url) {
    if (UseDialogsForFormsPages(url)) {
        return NewOrEditV4Core(evt, url);
    }
    _EditItem(url);
    return false;
}
function _EditItem(url) {
    GoToPage(url);
}
function _CorrectUrlForRefreshPageSubmitForm() {
    var returnURL = window.location.href;

    if (typeof g_MinimalDownload != 'undefined' && g_MinimalDownload) {
        var url = ajaxNavigate.getSavedFormAction();

        if (url != null && url.length > 0) {
            returnURL = url;
        }
    }
    var existingServerFilterHash = ajaxNavigate.getParam("ServerFilter");

    if (typeof existingServerFilterHash != "undefined" && null != existingServerFilterHash && existingServerFilterHash.length > 0) {
        existingServerFilterHash = (existingServerFilterHash.replace(/-/g, '&')).replace(/&&/g, '-');
        var serverFilterRootFolder = GetUrlKeyValue("RootFolder", true, existingServerFilterHash);
        var currentRootFolderLocal = GetUrlKeyValue("RootFolder", true);

        if ("" == serverFilterRootFolder && "" != currentRootFolderLocal) {
            existingServerFilterHash += "&RootFolder=" + currentRootFolderLocal;
        }
        var uri = new URI(returnURL, {
            disableEncodingDecodingForLegacyCode: true
        });

        uri.setFragment("");
        uri.setQuery(existingServerFilterHash);
        return uri.getString();
    }
    return returnURL;
}
function _RefreshPage(dialogResult) {
    var focusCallback = function() {
        SetFocusBack(dialogResult);
    };

    if (dialogResult == 1) {
        _SubmitFormPost(_CorrectUrlForRefreshPageSubmitForm());
    }
    else {
        EnsureScript("inplview", typeof InitAllClvps, focusCallback);
    }
}
function AJAXRefreshView(evt, dialogResult) {
    if (evt == null || !(typeof evt.fakeEvent == "boolean" && evt.fakeEvent || typeof evt.csrAjaxRefresh == "boolean" && evt.csrAjaxRefresh || typeof evt.fromRibbon == "boolean" && evt.fromRibbon)) {
        _RefreshPage(dialogResult);
    }
    else {
        if (dialogResult == SP.UI.DialogResult.OK) {
            var defd;

            try {
                defd = typeof inplview.HandleRefreshView;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.HandleRefreshView";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        inplview.HandleRefreshView(evt);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    }
}
function AJAXRefreshViewOnDialogClose(evt) {
    AJAXRefreshView(evt, SP.UI.DialogResult.OK);
}
function RefreshOnDialogClose() {
    _RefreshPage(SP.UI.DialogResult.OK);
}
function OpenPopUpPageWithDialogOptions(dialogOptions) {
    var fn = function() {
        var dlg = SP.UI.ModalDialog.showModalDialog(dialogOptions);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.UI.Dialog.js", defd, fn);
    var curEvent = window.event;

    if (curEvent != null) {
        if (curEvent.stopPropagation != null) {
            curEvent.stopPropagation();
        }
        else {
            curEvent.cancelBubble = true;
        }
    }
}
function OpenPopUpPageWithTitle(url, callback, width, height, title) {
    var dOpt = {
        url: url,
        args: null,
        title: title,
        dialogReturnValueCallback: callback,
        width: width,
        height: height
    };

    OpenPopUpPageWithDialogOptions(dOpt);
}
function SetupAndOpenDialogForCustomAction(url, width, height, title) {
    if (typeof url == 'undefined' || url == null || url.length == 0) {
        return;
    }
    var schemePosition = url.indexOf("//", 0);
    var domainPosition = -1;

    if (schemePosition == -1) {
        domainPosition = url.indexOf("/", 0);
    }
    else {
        domainPosition = url.indexOf("/", schemePosition + 2);
    }
    var origin = "";

    if (domainPosition == -1) {
        domainPosition = url.length - 1;
    }
    origin = url.substring(0, domainPosition);
    var options = {
        url: url,
        args: null,
        title: title,
        dialogReturnValueCallback: CustomActionDialogCloseCallback,
        width: width,
        height: height
    };
    var dialog = EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
    var currentHandlerId = g_CustomActionDialogHandlerId;
    var callbackFunc = function(e) {
        if (typeof e.data == 'undefined' || typeof e.data == null || e.data != "CloseCustomActionDialogRefresh" && e.data != "CloseCustomActionDialogNoRefresh") {
            return;
        }
        if (typeof e.origin == 'undefined' || typeof e.origin == null) {
            return;
        }
        var fn = function() {
            var dlg = SP.UI.ModalDialog.get_childDialog();

            if (e.data == "CloseCustomActionDialogRefresh") {
                dlg.close(0);
            }
            else {
                dlg.close(1);
            }
        };
        var defd;

        try {
            defd = typeof SP.UI.ModalDialog.get_childDialog;
        }
        catch (e) {
            defd = "undefined";
        }
        EnsureScript("SP.UI.Dialog.js", defd, fn);
        if (e.data == "CloseCustomActionDialogNoRefresh") {
            RemoveCustomActionDialogPostMessageHandler(currentHandlerId);
        }
    };

    g_CustomActionDialogHandlers[g_CustomActionDialogHandlerId] = callbackFunc;
    g_CustomActionDialogHandlerId++;
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener("message", callbackFunc, false);
    }
    else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent("onmessage", callbackFunc);
    }
}
function CustomActionDialogCloseCallback(dialogResult) {
    if (dialogResult == 0) {
        RefreshOnDialogClose();
    }
}
function RemoveCustomActionDialogPostMessageHandler(handlerId) {
    var cbFunc = g_CustomActionDialogHandlers[handlerId];

    if (typeof cbFunc == 'function') {
        if (typeof window.removeEventListener != 'undefined' && typeof window.removeEventListener != null) {
            window.removeEventListener("message", cbFunc, false);
        }
        else if (typeof window.detachEvent != 'undefined' && typeof window.detachEvent != null) {
            window.detachEvent("onmessage", cbFunc);
        }
        delete g_CustomActionDialogHandlers[handlerId];
    }
}
function _OpenPopUpPage(url, callback, width, height) {
    OpenPopUpPageWithTitle(url, callback, width, height, null);
}
function _RemoveQueryStringsAndHash(url) {
    if (Boolean(url)) {
        var index = url.indexOf("#");

        if (index >= 0) {
            url = url.substr(0, index);
        }
        index = url.indexOf("?");
        if (index >= 0) {
            url = url.substr(0, index);
        }
    }
    return url;
}
function _OpenCreateWebPageDialog(url) {
    if (!Boolean(url) && typeof _spPageContextInfo != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        url = _spPageContextInfo.webServerRelativeUrl;
        if (url.charAt(url.length - 1) != "/") {
            url = url + "/";
        }
        url = url + "_layouts/15/createwebpage.aspx";
    }
    var currentPageUrl = ajaxNavigate.get_href();

    currentPageUrl = _RemoveQueryStringsAndHash(currentPageUrl);
    url = StURLSetVar2(url, "Url", escapeProperly(currentPageUrl));
    if (FV4UI()) {
        var dlgOpt = {};

        commonModalDialogOpen(url, dlgOpt, null, null);
    }
    else {
        GoToPage(url);
    }
}
function _EditLink2(elm, ctxNum) {
    var fn = function() {
        var url = GetGotoLinkUrl(elm);

        if (url == null)
            return false;
        var ctxT = window["ctx" + String(ctxNum)];

        if (ctxT != null && ctxT.clvp != null && UseDialogsForFormsWithCtx(ctxT)) {
            var clvp = ctxT.clvp;

            PreventDefaultNavigation();
            clvp.ShowPopup(url);
            return false;
        }
        GoToLinkOrDialogNewWindow(elm);
        return false;
    };

    EnsureScript("inplview", typeof inplview, fn);
}
function EditLink(elm, ctxNum) {
    if (FV4UI()) {
        EditLink2(elm, ctxNum);
    }
    else {
        GoToLink(elm);
    }
}
function _GoBack(defViewUrl) {
    window.location.href = unescapeProperly(GetSource(defViewUrl));
}
function _ReplyItem(url, threading, guid, subject) {
    if (threading.length >= 504) {
        alert(Strings.STS.L_ReplyLimitMsg_Text);
    }
    else {
        url += "?Threading=" + threading;
        url += "&Guid=" + guid;
        url += "&Subject=" + subject;
        GoToPage(url);
    }
}
function GoBacktoCurrentIssue(url, issueid) {
    url += '?ID=' + issueid;
    GoToPage(url);
}
function _ExportToDatabase(strSiteUrl, strListID, strViewID, fUseExistingDB) {
    if (g_expDatabase == null) {
        var databaseBtnText = GetCookie("databaseBtnText");

        if (databaseBtnText != null && databaseBtnText != '0') {
            try {
                g_expDatabase = new ActiveXObject('SharePoint.ExportDatabase');
            }
            catch (e) {
                return;
            }
        }
        else if (databaseBtnText == null)
            GetDataBaseInstalled();
        else
            return;
    }
    if (g_expDatabase != null && typeof g_expDatabase.DoExport != "undefined") {
        if (browseris.ie5up && browseris.win32) {
            try {
                g_expDatabase["SiteUrl"] = makeAbsUrl(strSiteUrl);
                g_expDatabase["ListID"] = strListID;
                g_expDatabase["ViewID"] = strViewID;
                g_expDatabase.DoExport(fUseExistingDB);
            }
            catch (e) {
                alert(Strings.STS.L_ExportDBFail_Text);
                return;
            }
        }
        else {
            alert(Strings.STS.L_NoWSSClient_Text);
        }
    }
}
function _ExportList(using) {
    var excelPHInstalled = typeof navigator.msProtocols == "function" && navigator.msProtocols["excel"];

    if (!excelPHInstalled && g_ssImporterObj == null) {
        EnsureSSImporter();
    }
    if (!excelPHInstalled && g_ssImporterObj == null) {
        if (g_fSSImporter || GetCookie("EnsureSSImporter") == null) {
            EnsureSSImporter(true);
        }
    }
    if (IsSupportedMacBrowser()) {
        if (g_fSSImporter != null && typeof g_ssImporterObj.IqyExportEnabled != "undefined" && g_ssImporterObj.IqyExportEnabled && typeof g_ssImporterObj.IqyExport != "undefined") {
            var exportHandled = g_ssImporterObj.IqyExport(makeAbsUrl(using));

            if (!exportHandled) {
                window.location.href = STSPageUrlValidation(makeAbsUrl(using));
            }
        }
        else {
            if (confirm(Strings.STS.L_ExportListSpreadsheet_Text)) {
                window.location.href = STSPageUrlValidation(makeAbsUrl(using));
            }
        }
    }
    else {
        if (excelPHInstalled || g_fSSImporter != false && typeof g_ssImporterObj.IqyImportEnabled != "undefined" && g_ssImporterObj.IqyImportEnabled() || confirm(Strings.STS.L_ExportListSpreadsheet_Text)) {
            window.location.href = STSPageUrlValidation(makeAbsUrl(using));
        }
    }
}
function ExportDiagram(weburl, listguid, listid, listname, viewname, viewguid) {
    if (g_objDiagramLaunch == null) {
        var digInstalled = GetCookie("digInstalled");

        if (digInstalled != null && digInstalled != '0') {
            try {
                g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher");
            }
            catch (e) {
                return;
            }
        }
        else if (digInstalled == null)
            GetDiagramLaunchInstalled();
        else
            return;
    }
    if (g_objDiagramLaunch != null && typeof g_objDiagramLaunch.CreateDiagram != "undefined") {
        try {
            var bstrTemplate = "";
            var bstrURI = weburl;
            var bstrViewGUID = viewguid;
            var bstrListGUID = listguid;
            var iListID = listid;

            g_objDiagramLaunch.CreateDiagram(bstrTemplate, bstrURI, bstrViewGUID, bstrListGUID, listname, viewname, iListID);
        }
        catch (e) {
            alert(Strings.STS.L_DiagramLaunchFail_Text);
        }
    }
}
function OpenTasks(weburl, listguid, listid, listname, viewname, viewguid) {
    var protocol = "ms-project:ost|u|" + weburl + "|l|" + listguid + "|i|" + listid + "|n|" + listname + "|v|" + viewname + "|g|" + viewguid;

    window.location.href = protocol;
}
function CatchListCreateError(strIgnore1, strIgnore2, strIgnore3) {
    alert(Strings.STS.L_EditInGrid_Text);
    fListErrorShown = true;
    return false;
}
function RegisterTouchOverride(elem, fn) {
    if (elem.getAttribute("hasTouchHandler") != "true") {
        if (window.navigator.msMaxTouchPoints != null && window.navigator.msMaxTouchPoints > 0) {
            AttachEvent("MSPointerDown", function(evt) {
                evt.target.setAttribute("pointerType", evt.pointerType.toString());
            }, elem);
            elem.setAttribute("hasTouchHandler", "true");
        }
        else if (document.documentElement != null && 'ontouchstart' in document.documentElement) {
            AttachEvent("touchstart", function(evt) {
                if (fn(evt)) {
                    if (evt.preventDefault != null)
                        evt.preventDefault();
                    if (evt.stopPropagation != null)
                        evt.stopPropagation();
                }
            }, elem);
            elem.setAttribute("hasTouchHandler", "true");
        }
    }
}
function EnsureListControl() {
    if (!fListControl) {
        fListErrorShown = false;
        if (browseris.ie5up && browseris.win32) {
            var functionBody = "try" + "{" + "    ListCtrlObj = new ActiveXObject(\"ListNet.ListNet\");" + "    if (ListCtrlObj)" + "        fListControl = true;" + "} catch (e)" + "{" + "    fListControl = false;" + "};";
            var EnsureListControlInner = new Function(functionBody);

            EnsureListControlInner();
        }
        else {
            window.onerror = CatchListCreateError;
            ListCtrlObj = new ActiveXObject("ListNet.ListNet");
            if (ListCtrlObj != null)
                fListControl = true;
        }
    }
    ListCtrlObj = null;
    return fListControl;
}
function IsVoteOK(notAllowed) {
    if (1 == notAllowed)
        alert(Strings.STS.L_NoQuestion_Text);
    else if (2 == notAllowed)
        alert(Strings.STS.L_NoVoteAllowed_Text);
    else
        return true;
    return false;
}
function hasHighChar(str) {
    var ix = 0;

    for (ix = 0; ix < str.length; ix++) {
        if (str.charCodeAt(ix) > 127)
            return true;
    }
    return false;
}
function _ClearSearchTerm(guidView) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var form = document.forms[MSOWebPartPageFormName];

        if (null != form) {
            if (guidView != null) {
                var frmElem = form["SearchString" + guidView];

                if (frmElem != null)
                    frmElem.value = "";
            }
        }
    }
    bValidSearchTerm = true;
}
function _SubmitSearchRedirect(strUrl) {
    var frm = document.forms["frmSiteSearch"];

    if (frm == null) {
        if (typeof MSOWebPartPageFormName != "undefined")
            frm = document.forms[MSOWebPartPageFormName];
    }
    if (frm != null) {
        var searchString;

        if (typeof frm.elements["SearchString"] != 'undefined') {
            searchString = frm.elements["SearchString"];
        }
        var searchText = searchString.value.trim();

        if (searchText === Strings.STS.L_SharepointSearch_Text || searchText === '') {
            return false;
        }
        strUrl = strUrl + "?k=" + escapeProperly(searchText);
        var searchScope = frm.elements["SearchScope"];

        if (searchScope != null) {
            var searchScopeUrl = searchScope.value;

            if (Boolean(searchScopeUrl)) {
                strUrl = strUrl + "&u=" + escapeProperly(searchScopeUrl);
            }
        }
        window.location.href = strUrl;
    }
    return false;
}
function ShowGridUrlInHTML(strUrl) {
    if (strUrl.indexOf("?") > 0)
        strUrl = strUrl + "&";
    else
        strUrl = strUrl + "?";
    strUrl = strUrl + "ShowInGrid=HTML";
    return strUrl;
}
function SearchOnBodyLoad() {
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && (searchBox.value.trim() === Strings.STS.L_SharepointSearch_Text || searchBox.value.trim() === '')) {
        searchBox.className = "ms-sharepointsearchtext";
    }
}
function SearchOnBlur() {
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && searchBox.value.trim() === '') {
        searchBox.value = Strings.STS.L_SharepointSearch_Text;
        searchBox.className = "ms-sharepointsearchtext";
    }
}
function SearchOnFocus() {
    var searchBox = document.getElementById('idSearchString');

    if (searchBox != null && searchBox.value.trim() === Strings.STS.L_SharepointSearch_Text) {
        searchBox.value = "";
        searchBox.className = "ms-searchtext";
    }
}
function SubmitSearch() {
    _SubmitSearchForView("");
}
function _SubmitSearchForView(ViewGuid) {
    var frm = document.forms[0];
    var srchCtlName = "SearchString" + ViewGuid;
    var searchText = frm.elements[srchCtlName].value;

    if ("" == searchText) {
        alert(Strings.STS.L_Enter_Text);
        frm.elements[srchCtlName].focus();
    }
    else {
        var strDocUrl;

        strDocUrl = RemovePagingArgs(frm.action);
        if (typeof bGridViewPresent != "undefined" && bGridViewPresent)
            strDocUrl = ShowGridUrlInHTML(strDocUrl);
        frm.action = strDocUrl;
        frm.submit();
    }
}
function IsKeyDownSubmit(evt) {
    if (evt != null) {
        var charCode;
        var bKeyModifiers;

        if (browseris.ie) {
            charCode = evt.keyCode;
            bKeyModifiers = Number(evt.altKey || evt.ctrlKey);
        }
        else {
            charCode = evt.which;
            bKeyModifiers = typeof evt.modifers != "undefined" && typeof evt.ALT_MASK != "undefined" && typeof evt.CONTROL_MASK != "undefined" ? evt.modifers & (evt.ALT_MASK | evt.CONTROL_MASK) : 0;
        }
        if (charCode == 13 && !Boolean(bKeyModifiers))
            return true;
    }
    return false;
}
function SearchViewKeyDown(guidView) {
    if (IsKeyDownSubmit(event))
        _SubmitSearchForView(guidView);
}
function SearchKeyDown(evt, strUrl) {
    if (IsKeyDownSubmit(evt)) {
        _SubmitSearchRedirect(strUrl);
        return false;
    }
    return true;
}
function SearchKeyDownGoSearch(evt) {
    if (IsKeyDownSubmit(evt)) {
        if (typeof GoSearch != "undefined")
            GoSearch();
        return false;
    }
    return true;
}
function _AlertAndSetFocus(msg, fieldName) {
    fieldName.focus();
    fieldName.select();
    window.alert(msg);
}
function _AlertAndSetFocusForDropdown(msg, fieldName) {
    fieldName.focus();
    window.alert(msg);
}
function setElementValue(elemName, elemValue) {
    var elem = (document.getElementsByName(elemName))[0];

    if (elem == null)
        return false;
    elem.value = elemValue;
    return true;
}
function GetMultipleSelectedText(frmElem) {
    var strret = "";

    if (frmElem != null) {
        var cnt = frmElem.options.length;
        var bEmpty = true;

        for (var i = 0; i < cnt; i++) {
            if (frmElem.options[i].selected) {
                if (!bEmpty) {
                    strret += ",";
                }
                else {
                    bEmpty = false;
                }
                strret += frmElem.options[i].text;
            }
        }
    }
    return strret;
}
function GetCBSelectedValues(frm) {
    if (frm == null)
        return null;
    var strList = "";
    var fAllChecked = true;
    var cnt = frm.elements.length;

    for (var i = 0; i < cnt; i++) {
        var e = frm.elements[i];

        if (e.type == "checkbox" && !e.disabled) {
            if (e.checked) {
                if (strList != "")
                    strList += ",";
                strList += e.value;
            }
            else {
                fAllChecked = false;
            }
        }
    }
    return new CBSelectedValues(strList, fAllChecked);
}
function editDocumentWithProgID(strDocument, varProgID) {
    if (fNewDoc) {
        if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
            strDocument = window.location.protocol + "//" + window.location.host + strDocument;
        if (!fNewDoc2 && !fNewDoc3) {
            if (typeof EditDocumentButton.EditDocument == "undefined" || !EditDocumentButton.EditDocument(strDocument, varProgID))
                alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
        else {
            if (typeof EditDocumentButton.EditDocument2 == "undefined" || !EditDocumentButton.EditDocument2(window, strDocument, varProgID))
                alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
    }
    else {
        alert(Strings.STS.L_EditDocumentProgIDError_Text);
    }
}
function GetSPDDownLoadUrl() {
    var lang = typeof navigator.userLanguage == "string" ? navigator.userLanguage : null;

    if (!Boolean(lang))
        lang = navigator.browserLanguage;
    return SPDesignerDownloadUrl + "?clid=" + lang;
}
function PHSucceed(strApp, bEnabled) {
    phManager.SetProtocolHandlerEnabled(strApp, bEnabled);
}
function _EditInSPD(strDocument, bRefresh) {
    var strSPDRedirectUrl = GetSPDDownLoadUrl();

    if (strDocument.charAt(0) == "/") {
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    }
    var strRegularUrl = ajaxNavigate.convertMDSURLtoRegularURL(strDocument);

    if (phManager.ShouldTryProtocolHandler("ms-spd")) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl("ms-spd", strRegularUrl, ProtocolCommand.Edit, null), function() {
            PHSucceed("ms-spd", true);
        }, function() {
            PHSucceed("ms-spd", false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
        if (phManager.IsProtocolHandlerEnabled("ms-spd")) {
            window.location.href = phManager.CreateProtocolHandlerUrl("ms-spd", unescapeProperly(strRegularUrl), ProtocolCommand.Edit, null);
            return;
        }
        var EditDocument = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");

        if (EditDocument != null && typeof EditDocument.EditDocument3 != "undefined") {
            if (!EditDocument.EditDocument3(window, strDocument, false, SPDesignerProgID)) {
                window.open(strSPDRedirectUrl);
            }
            else {
                if (bRefresh) {
                    window.onfocus = RefreshOnNextFocus;
                }
            }
        }
        else {
            window.open(strSPDRedirectUrl);
        }
    }
}
function editDocumentWithProgID2(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp) {
    editDocumentWithProgIDNoUI(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp, ErrorFunction1, ErrorFunction2);
    function ErrorFunction1() {
        if (varProgID == SPDesignerProgID) {
            var strSPDRedirectUrl = GetSPDDownLoadUrl();

            window.open(strSPDRedirectUrl);
        }
        else {
            alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        }
        window.onfocus = RefreshOnNextFocus;
    }
    function ErrorFunction2() {
        alert(Strings.STS.L_EditDocumentProgIDError_Text);
    }
}
function editDocumentWithProgIDNoUI(strDocument, varProgID, varEditor, bCheckout, strhttpRoot, strCheckouttolocal, strApp, fn1, fn2) {
    var objEditor;
    var fUseLocalCopy = false;

    varEditor = varEditor.replace(/(?:\.\d+)$/, '');
    if (strDocument.charAt(0) == "/" || (strDocument.substr(0, 3)).toLowerCase() == "%2f")
        strDocument = window.location.protocol + "//" + window.location.host + strDocument;
    var strextension = SzExtension(unescapeProperly(strDocument));

    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null), function() {
            PHSucceed(strApp, true);
        }, function() {
            PHSucceed(strApp, false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
        var ret = FallThroughInternal();

        if (ret == 1 && fn1 != null)
            fn1();
        else if (ret == 2 && fn2 != null)
            fn2();
    }
    function FallThroughInternal() {
        if (!IsNullOrUndefined(strApp) && strApp != '' && phManager.IsProtocolHandlerEnabled(strApp)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(strApp, strDocument, ProtocolCommand.Edit, null);
            return 0;
        }
        if (FSupportCheckoutToLocal(strextension)) {
            try {
                objEditor = StsOpenEnsureEx2(varEditor + ".3");
                if (objEditor != null) {
                    if (bCheckout == "1") {
                        if (typeof objEditor.CheckoutDocumentPrompt == "undefined")
                            return 1;
                        if (!objEditor.CheckoutDocumentPrompt(strDocument, true, varProgID))
                            return 1;
                    }
                    else {
                        if (strCheckouttolocal == "1")
                            fUseLocalCopy = true;
                        if (!objEditor.EditDocument3(window, strDocument, fUseLocalCopy, varProgID))
                            return 1;
                    }
                    var fRefreshOnNextFocus = false;

                    fRefreshOnNextFocus = objEditor.PromptedOnLastOpen();
                    if (fRefreshOnNextFocus) {
                        window.onfocus = RefreshOnNextFocus;
                    }
                    else {
                        SetWindowRefreshOnFocus();
                    }
                    return 0;
                }
            }
            catch (e) { }
        }
        if (bCheckout == "1") {
            if (confirm(Strings.STS.L_ConfirmCheckout_Text))
                NavigateToCheckinAspx(strhttpRoot, "FileName=" + escapeProperly(unescapeProperly(strDocument)) + "&Checkout=true");
            else
                return 0;
        }
        objEditor = StsOpenEnsureEx2(varEditor);
        if (objEditor != null) {
            try {
                if (!objEditor.EditDocument2(window, strDocument, varProgID))
                    return 1;
                if (varEditor == "SharePoint.OpenXMLDocuments") {
                    SetWindowRefreshOnFocus();
                }
                else {
                    window.onfocus = RefreshOnNextFocus;
                }
                return 0;
            }
            catch (e) { }
            try {
                window.onfocus = null;
                if (SzExtension(strDocument) == "ppt" && varProgID == "")
                    varProgID = "PowerPoint.Slide";
                if (!objEditor.EditDocument(strDocument, varProgID))
                    return 1;
                SetWindowRefreshOnFocus();
                return 0;
            }
            catch (e) {
                return 2;
            }
        }
        return 1;
    }
}
function RefreshOnNextFocus() {
    SetWindowRefreshOnFocus();
}
function createNewDocumentWithProgID2Ex(evt, strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp) {
    createNewDocumentWithProgID2(strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp);
}
function createNewDocumentWithProgID2(strTemplate, strSaveLocation, strProgID, strProgID2, bXMLForm, strApp) {
    createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, false, strApp, function() {
        createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID2, bXMLForm, true, strApp);
    });
}
function createNewDocumentWithProgIDEx(evt, strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    createNewDocumentWithProgID(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
}
function createNewDocumentWithProgID(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, true, strApp);
}
function createNewDocumentWithProgIDCore(strTemplate, strSaveLocation, strProgID, bXMLForm, bWarning, strApp, func) {
    var objEditor;
    var NewDocumentRuntimeError_Text;
    var NewDocumentError_Text;
    var fRefreshOnNextFocus = false;

    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, strTemplate, ProtocolCommand.New, strSaveLocation), function() {
            PHSucceed(strApp, true);
        }, function() {
            PHSucceed(strApp, false);
            FallThrough();
        });
        return;
    }
    FallThrough();
    function FallThrough() {
        if (!FallThroughInternal() && func != null) {
            func();
        }
    }
    function FallThroughInternal() {
        if (Boolean(strApp) && phManager.IsProtocolHandlerEnabled(strApp)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(strApp, strTemplate, ProtocolCommand.New, strSaveLocation);
            return true;
        }
        if (bXMLForm) {
            NewDocumentRuntimeError_Text = Strings.STS.L_NewFormLibTb1_Text;
            NewDocumentError_Text = Strings.STS.L_NewFormLibTb2_Text;
        }
        else {
            NewDocumentRuntimeError_Text = Strings.STS.L_NewDocLibTb1_Text;
            NewDocumentError_Text = Strings.STS.L_NewDocLibTb2_Text;
        }
        try {
            objEditor = StsOpenEnsureEx2(strProgID + ".2");
            if (typeof objEditor.CreateNewDocument2 == "undefined" || !objEditor.CreateNewDocument2(window, strTemplate, strSaveLocation))
                alert(NewDocumentRuntimeError_Text);
            fRefreshOnNextFocus = typeof objEditor.PromptedOnLastOpen != "undefined" && objEditor.PromptedOnLastOpen();
            if (fRefreshOnNextFocus) {
                window.onfocus = RefreshOnNextFocus;
            }
            else {
                SetWindowRefreshOnFocus();
            }
            return true;
        }
        catch (e) { }
        try {
            objEditor = StsOpenEnsureEx2(strProgID + ".1");
            window.onfocus = null;
            if (typeof objEditor.CreateNewDocument == "undefined" || !objEditor.CreateNewDocument(strTemplate, strSaveLocation))
                alert(NewDocumentRuntimeError_Text);
            SetWindowRefreshOnFocus();
            return true;
        }
        catch (e) {
            if (bWarning)
                alert(NewDocumentError_Text);
        }
        return undefined;
    }
}
function createNewDocumentWithRedirect2(evt, strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp) {
    createNewDocumentWithRedirect(strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp);
}
function createNewDocumentWithRedirect(strTemplate, strSaveLocation, strProgID, bXMLForm, strRedirectUrl, sron, defaultItemOpen, strApp) {
    if (sron) {
        if (IsClientAppInstalled(strProgID, strApp, null)) {
            createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
        }
        else {
            createNewInBrowser(strRedirectUrl, strSaveLocation, strProgID, defaultItemOpen);
        }
    }
    else {
        if (IsClientAppInstalled(strProgID, strApp, null) && defaultItemOpen != 1) {
            createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp);
        }
        else {
            createNewInBrowser(strRedirectUrl, strSaveLocation, strProgID, defaultItemOpen);
        }
    }
}
function createNewInClient(strTemplate, strSaveLocation, strProgID, bXMLForm, strApp) {
    var strIndependentProgId = strProgID.replace(/(?:\.\d+)$/, '');

    createNewDocumentWithProgID(strTemplate, strSaveLocation, strIndependentProgId, bXMLForm, strApp);
}
function createNewInBrowser(strRedirectUrl, strSaveLocation, strProgId, defaultItemOpen) {
    strRedirectUrl = strRedirectUrl + "&SaveLocation=" + makeAbsUrl(escapeProperly(strSaveLocation));
    strRedirectUrl = AddInfoPathParametersToUrl(strRedirectUrl, strProgId, null, defaultItemOpen);
    strRedirectUrl = AddSourceToUrl(strRedirectUrl);
    var url = new URI(strRedirectUrl);
    var isCreateNewDoc = false;

    if (Boolean(url)) {
        var urlPath = url.getPath(true);

        if (Boolean(urlPath) && (urlPath.toLowerCase()).indexOf('createnewdocument.aspx') != -1) {
            isCreateNewDoc = true;
        }
    }
    if (isCreateNewDoc) {
        _OpenPopUpPage(strRedirectUrl, OnCloseDialogNavigate);
    }
    else {
        STSNavigate(strRedirectUrl);
    }
}
function OnCloseDialogNavigate(result, returnValue) {
    if (result == SP.UI.DialogResult.OK && Boolean(returnValue)) {
        STSNavigate(returnValue);
    }
}
function LRUCache() {
    this.state = [];
    this.ageStack = [];
    this.count = 0;
}
function LRUCache_InitializePrototype() {
    LRUCache.prototype.state = [];
    LRUCache.prototype.ageStack = [];
    LRUCache.prototype.count = 0;
}
function LRUCache_Add(cache, itemName) {
    if (cache == null) {
        return;
    }
    var oldAge = cache.state[itemName];

    if (oldAge != null) {
        cache.ageStack[oldAge] = null;
    }
    else {
        cache.count++;
    }
    var age = cache.ageStack.length;

    cache.state[itemName] = age;
    cache.ageStack.push(itemName);
}
function LRUCache_Remove(cache, itemName) {
    if (cache == null)
        return;
    var age = cache.state[itemName];

    if (age != null) {
        cache.ageStack[age] = null;
        cache.state[itemName] = null;
        cache.count--;
    }
}
function _AddGroupToCookie(groupName) {
    var webPartID = ExpGroupFetchWebPartID(groupName);

    if (webPartID == null)
        return;
    LRUCache_Add(g_ExpGroupWPState, webPartID);
    if (g_ExpGroupTable[webPartID] == null) {
        g_ExpGroupTable[webPartID] = new LRUCache();
    }
    var groupString = ExpGroupFetchGroupString(groupName);

    if (groupString == null)
        return;
    LRUCache_Add(g_ExpGroupTable[webPartID], groupString);
    ExpGroupRenderCookie();
}
function _RemoveGroupFromCookie(groupName) {
    var webPartID = ExpGroupFetchWebPartID(groupName);

    if (webPartID == null)
        return;
    if (g_ExpGroupTable[webPartID] == null)
        return;
    LRUCache_Add(g_ExpGroupWPState, webPartID);
    var groupString = ExpGroupFetchGroupString(groupName);

    if (groupString == null)
        return;
    var aGroupString;

    for (aGroupString in g_ExpGroupTable[webPartID].state) {
        if (g_ExpGroupTable[webPartID].state[aGroupString] != null && aGroupString.substring(0, groupString.length) == groupString) {
            LRUCache_Remove(g_ExpGroupTable[webPartID], aGroupString);
        }
    }
    ExpGroupRenderCookie();
}
function ExpGroupRenderCookie() {
    if (g_ExpGroupWPState == null)
        return;
    var newWPString = ExpGroupWPListName + "=";
    var numWPRendered = 0;
    var ix;

    for (ix = g_ExpGroupWPState.ageStack.length - 1; ix >= 0; ix--) {
        if (g_ExpGroupWPState.ageStack[ix] != null) {
            var webPartID = g_ExpGroupWPState.ageStack[ix];

            if (numWPRendered == ExpGroupMaxWP) {
                DeleteCookie(ExpGroupCookiePrefix + webPartID);
                break;
            }
            else if (g_ExpGroupTable[webPartID] == null) {
                numWPRendered++;
                if (numWPRendered > 1)
                    newWPString += escapeProperly(ExpGroupCookieDelimiter);
                newWPString += escapeProperly(webPartID);
            }
            else if (g_ExpGroupTable[webPartID].count == 0) {
                DeleteCookie(ExpGroupCookiePrefix + webPartID);
            }
            else if (numWPRendered < ExpGroupMaxWP) {
                numWPRendered++;
                ExpGroupRenderCookieForWebPart(webPartID);
                if (numWPRendered > 1)
                    newWPString += escapeProperly(ExpGroupCookieDelimiter);
                newWPString += escapeProperly(webPartID);
            }
        }
    }
    if (numWPRendered == 0) {
        DeleteCookie(ExpGroupWPListName);
    }
    else {
        document.cookie = newWPString;
    }
}
function ExpGroupRenderCookieForWebPart(webPartID) {
    if (!g_ExpGroupTable[webPartID].ageStack)
        return;
    var newCookieString = ExpGroupCookiePrefix + webPartID + "=";
    var bFirst = true;
    var ix;

    for (ix = g_ExpGroupTable[webPartID].ageStack.length - 1; ix >= 0; ix--) {
        if (g_ExpGroupTable[webPartID].ageStack[ix] != null) {
            var groupString = g_ExpGroupTable[webPartID].ageStack[ix];
            var newPortion = "";

            if (!bFirst)
                newPortion += escapeProperly(ExpGroupCookieDelimiter);
            newPortion += escapeProperly(groupString);
            if (newCookieString.length + newPortion.length <= ExpGroupMaxCookieLength) {
                newCookieString += newPortion;
                bFirst = false;
            }
        }
    }
    document.cookie = newCookieString + ";";
}
function ExpDataViewGroupOnPageLoad() {
    ExpGroupOnPageLoad("PageLoad");
}
function ExpGroupOnPageLoad(isDataView) {
    var flag = document.getElementById("GroupByColFlag");

    if (flag != null) {
        g_ExpGroupNeedsState = true;
        ExpGroupParseCookie(isDataView);
    }
}
function ExpGroupParseCookie(isDataView) {
    var webPartListString = GetCookie(ExpGroupWPListName);

    if (webPartListString == null)
        return;
    g_ExpGroupParseStage = true;
    var webPartList = webPartListString.split(ExpGroupCookieDelimiter);
    var ix;

    for (ix = webPartList.length - 1; ix >= 0; ix--) {
        var webPartID = webPartList[ix];

        LRUCache_Add(g_ExpGroupWPState, webPartID);
        if (g_ExpGroupTable[webPartID] == null) {
            if (document.getElementById("GroupByCol" + webPartID) != null)
                ExpGroupParseCookieForWebPart(webPartID, isDataView);
        }
    }
    g_ExpGroupParseStage = false;
    if (Boolean(isDataView) && g_ExpGroupXSLTQueue.length > 0) {
        ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), isDataView);
    }
    else if (!Boolean(isDataView) && g_ExpGroupCAMLQueue.length > 0) {
        ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), isDataView);
    }
}
function ExpGroupParseCookieForWebPart(webPartID, isDataView) {
    var groupListString = GetCookie(ExpGroupCookiePrefix + webPartID);

    if (groupListString == null)
        return;
    var groupList = groupListString.split(ExpGroupCookieDelimiter);
    var groupString;
    var ix;

    g_ExpGroupTable[webPartID] = new LRUCache();
    for (ix = groupList.length - 1; ix >= 0; ix--) {
        groupString = groupList[ix];
        LRUCache_Add(g_ExpGroupTable[webPartID], groupString);
    }
    var loadedGroups = [];
    var viewTable = (document.getElementById("GroupByCol" + webPartID)).parentNode;
    var tbodyTags = viewTable.getElementsByTagName("TBODY");

    for (ix = 0; ix < tbodyTags.length; ix++) {
        groupString = tbodyTags[ix].getAttribute("groupString");
        if (groupString != null) {
            var tbodyId = tbodyTags[ix].id;

            if (tbodyId == null)
                continue;
            var groupName = tbodyId.substring(4, tbodyId.length);
            var ctxId = groupName.substring(0, groupName.indexOf('-'));
            var myCtx = g_ctxDict["ctx" + ctxId];

            if (myCtx == null || !myCtx.isXslView && Boolean(isDataView) || myCtx.isXslView && !Boolean(isDataView)) {
                g_ExpGroupTable[webPartID] = null;
                break;
            }
            if (g_ExpGroupTable[webPartID].state[groupString] != null && loadedGroups[groupName] == null) {
                ExpCollGroup(groupName, "img_" + groupName, isDataView);
                loadedGroups[groupName] = true;
                var tbody = document.getElementById("tbod" + groupName + "_");

                if (tbody != null) {
                    var isLoaded = tbody.getAttribute("isLoaded");

                    if (isLoaded == "false") {
                        if (Boolean(isDataView))
                            g_ExpGroupXSLTQueue.push(groupName);
                        else
                            g_ExpGroupCAMLQueue.push(groupName);
                    }
                }
            }
        }
    }
    var aGroupName;

    for (aGroupName in loadedGroups) {
        var index = aGroupName.indexOf("_");

        if (index != aGroupName.length - 1 && index != -1) {
            var parentName = aGroupName.substring(0, index + 1);

            if (loadedGroups[parentName] == null) {
                var parentString = ExpGroupFetchGroupString(parentName);

                if (parentString != null) {
                    LRUCache_Add(g_ExpGroupWPState, parentString);
                    ExpCollGroup(parentName, "img_" + parentName, isDataView);
                    loadedGroups[parentString] = true;
                }
            }
        }
    }
}
function _ExpGroupBy(formObj) {
    if (browseris.w3c && !browseris.ie) {
        document.all = document.getElementsByTagName("*");
    }
    var docElts = document.all;
    var numElts = docElts.length;
    var images = formObj.getElementsByTagName("IMG");
    var img = images[0];
    var srcPath = img.getAttribute('src');
    var index = srcPath.lastIndexOf("/");
    var imgName = srcPath.slice(index + 1);
    var expandSrcPath = GetThemedImageUrl("commentexpand12.png");
    var collapseSrcPath = GetThemedImageUrl("commentcollapse12.png");
    var displayStr = "auto";

    if (srcPath == expandSrcPath || imgName == 'plus.gif') {
        displayStr = "";
        if (imgName == 'plus.gif')
            img.src = '/_layouts/15/images/minus.gif';
        else
            img.src = expandSrcPath;
    }
    else {
        displayStr = "none";
        if (imgName == 'minus.gif')
            img.src = '/_layouts/15/images/plus.gif';
        else
            img.src = GetThemedImageUrl("commentcollapse12.png");
    }
    var oldName = img.name;

    img.name = img.alt;
    img.alt = oldName;
    var spanNode = img;

    while (spanNode != null) {
        spanNode = spanNode.parentNode;
        if (spanNode != null && spanNode.id != null && spanNode.id.length > 5 && spanNode.id.substr(0, 5) == "group")
            break;
    }
    var parentNode = spanNode;

    while (parentNode != null) {
        parentNode = parentNode.parentNode;
        if (parentNode != null && parentNode.tagName == "TABLE")
            break;
    }
    var lastNode = null;

    if (parentNode != null) {
        lastNode = parentNode.lastChild;
        if (lastNode != null && lastNode.tagName == "TBODY")
            lastNode = lastNode.lastChild;
        if (lastNode != null && lastNode.tagName == "TR" && lastNode.lastChild != null)
            lastNode = lastNode.lastChild;
    }
    var childObj;

    for (var i = 0; i < numElts; i++) {
        childObj = docElts[i];
        if (childObj == spanNode)
            break;
    }
    var ID = spanNode.id.slice(5);
    var IDInt = parseInt(ID);
    var displayStyle = displayStr;

    for (var j = i + 1; j < numElts; j++) {
        childObj = docElts[j];
        if (childObj.id.length > 5 && childObj.id.substr(0, 5) == "group") {
            var curID = parseInt(childObj.id.slice(5));

            if (curID <= IDInt)
                return;
        }
        parentNode = childObj;
        while (parentNode != null) {
            parentNode = parentNode.parentNode;
            if (parentNode == spanNode)
                break;
        }
        if (parentNode == spanNode)
            continue;
        if (childObj.id != null && childObj.id.substring(0, 5) == "group")
            displayStr = displayStyle;
        if (childObj.id != null && childObj.id.substring(0, 8) == "footer" + ID)
            displayStr = displayStyle;
        if (displayStyle != "none" && childObj != img && childObj.tagName == "IMG" && childObj.src != null) {
            var plusGif = '/_layouts/15/images/plus.gif';
            var minisGif = '/_layouts/15/images/minus.gif';

            if (childObj.getAttribute('src') == expandSrcPath || childObj.src.slice(childObj.src.length - plusGif.length) == plusGif) {
                displayStr = "none";
            }
            else if (childObj.getAttribute('src') == collapseSrcPath || childObj.src.slice(childObj.src.length - minisGif.length) == minisGif) {
                displayStr = "";
            }
        }
        if (childObj.tagName == spanNode.tagName && childObj.id != "footer") {
            childObj.style.display = displayStr;
        }
        if (childObj.tagName == "TABLE" && lastNode == null || childObj == lastNode)
            break;
    }
}
function SzExtension(szHref) {
    var sz = new String(szHref);
    var re = /^.*\.([^\.]*)$/;

    return (sz.replace(re, "$1")).toLowerCase();
}
function SzServer(szHref) {
    var sz = new String(szHref);
    var re = /^([^:]*):\/\/([^\/]*).*$/;

    return sz.replace(re, "$1://$2");
}
var v_stsOpenDoc;
var v_strStsOpenDoc;

function NavigateParentOrSelf(ele, strUrl) {
    if (ele.target == "_top" && typeof window.frameElement.navigateParent != "undefined") {
        window.frameElement.navigateParent(strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function StsOpenEnsureEx(szProgId) {
    if (v_stsOpenDoc == null || v_strStsOpenDoc != szProgId) {
        if (window.ActiveXObject != null) {
            try {
                v_stsOpenDoc = new ActiveXObject(szProgId);
                v_strStsOpenDoc = szProgId;
            }
            catch (e) {
                v_stsOpenDoc = null;
                v_strStsOpenDoc = null;
            }
            ;
        }
    }
    return v_stsOpenDoc;
}
function _DispDocItem(ele, strProgId) {
    return _DispDocItemEx(ele, 'FALSE', 'FALSE', 'FALSE', strProgId);
}
function _DispDocItemExWithServerRedirect(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect) {
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "";
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0) || SzExtension(ele.href) == "pdf";

    if (fIsServerFile) {
        strServerFileRedirect = strServerFileRedirect.substring(1);
        fIsServerFile = strServerFileRedirect != "";
    }
    if (fIsServerFile) {
        if (iDefaultItemOpen == "1" || !fIsClientAppInstalled) {
            var strUrl = strServerFileRedirect;

            strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
            strUrl = AddSourceToUrl(strUrl);
            if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                if (typeof window.frameElement.navigateParent != "undefined")
                    window.frameElement.navigateParent(strUrl);
            }
            else {
                if (objEvent.shiftKey || objEvent.ctrlKey) {
                    return true;
                }
                else {
                    NavigateParentOrSelf(ele, strUrl);
                }
            }
            objEvent.cancelBubble = true;
            objEvent.returnValue = false;
            return false;
        }
    }
    return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function _DispDocItemEx(ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId) {
    return DispDocItemExWithEvent(ele, null, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, callbackFunc, fIsClientAppInstalled) {
    var strUrl;

    itemTable = FindSTSMenuTable(ele, "CTXName");
    if (!browseris.ie && !IsSupportedMacBrowser() && !IsSupportedNPApiBrowserOnWin()) {
        if (browseris.ie)
            event.cancelBubble = false;
        strUrl = ele.href;
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else
            STSNavigate(strUrl);
        return false;
    }
    var stsOpen;
    var szHref;
    var fRet = true;
    var szAppId = "";
    var tblFileDlg = document.getElementById("FileDialogViewTable");

    if (tblFileDlg != null) {
        if (browseris.ie) {
            event.cancelBubble = false;
            event.returnValue = false;
        }
        return true;
    }
    var strApp = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";
    var isEdit = Boolean(ele.getAttribute("isEdit")) || strApp == "ms-infopath";

    szHref = itemTable != null ? GetAttributeFromItemTable(itemTable, "Url", "ServerUrl") : "";
    if (szHref == null || szHref == "") {
        if (isEdit)
            szHref = ele.editHref;
        if (!Boolean(szHref))
            szHref = ele.href;
    }
    else
        szHref = SzServer(ele.href) + szHref;
    var szExt = SzExtension(szHref);
    var shouldEdit = isEdit && HasRights(0x0, 0x4) && !FDefaultOpenForReadOnly(szExt) && (!Boolean(currentItemCheckedOutUserId) || currentItemCheckedOutUserId == ctx.CurrentUserId);

    if (!Boolean(strApp))
        strApp = ele.getAttribute("App");
    if (phManager.ShouldTryProtocolHandler(strApp)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(strApp, szHref, shouldEdit ? ProtocolCommand.Edit : ProtocolCommand.View, null), function() {
            PHSucceed(strApp, true);
        }, function() {
            PHSucceed(strApp, false);
            if (callbackFunc != null && !(isEdit && fIsClientAppInstalled))
                callbackFunc();
            else
                FallThrough();
        });
        return CancelMyEvent(false, stsOpen, objEvent, true);
    }
    return FallThrough();
    function FallThrough() {
        if (Boolean(strApp) && phManager.IsProtocolHandlerEnabled(strApp)) {
            if (strApp != null && strApp != '') {
                window.location.href = phManager.CreateProtocolHandlerUrl(strApp, szHref, shouldEdit ? ProtocolCommand.Edit : ProtocolCommand.View, null);
                return CancelMyEvent(false, stsOpen, objEvent, true);
            }
        }
        if (currentItemProgId == null && itemTable != null)
            currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
        if (currentItemProgId != null)
            szAppId = currentItemProgId;
        if (FDefaultOpenForReadOnly(szExt)) {
            if (strProgId.indexOf("SharePoint.OpenDocuments") >= 0)
                strProgId = "SharePoint.OpenDocuments.3";
        }
        else if (!FSupportCheckoutToLocal(szExt)) {
            strProgId = "";
        }
        if (currentItemCheckedOutUserId == null && itemTable != null && typeof itemTable.COUId == "string")
            currentItemCheckedOutUserId = itemTable.COUId;
        if (currentItemCheckedoutToLocal == null && itemTable != null)
            currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
        if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && currentItemCheckedOutUserId == ctx.CurrentUserId && (strProgId == "" || strProgId.indexOf("SharePoint.OpenDocuments") >= 0) && FSupportCheckoutToLocal(szExt) || strProgId == "SharePoint.OpenDocuments") {
            strProgId = "SharePoint.OpenDocuments.3";
        }
        var stsopenVersion = 2;

        if (strProgId != '' && HasRights(0x10, 0x0)) {
            if (strProgId.indexOf(".3") >= 0)
                stsopenVersion = 3;
            stsOpen = StsOpenEnsureEx2(strProgId);
            if (stsOpen == null && stsopenVersion == 3) {
                strProgId = strProgId.replace(".3", ".2");
                stsOpen = StsOpenEnsureEx2(strProgId);
                stsopenVersion = 2;
            }
        }
        if (stsOpen != null) {
            if (stsopenVersion == 2 || itemTable == null && currentItemCheckedOutUserId == null || ctx.isVersions == 1 && (itemTable == null || typeof itemTable.isMostCur != "string" || itemTable.isMostCur == "0")) {
                try {
                    if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && (currentItemCheckedOutUserId == ctx.CurrentUserId || ctx.CurrentUserId == null)) {
                        if (currentItemCheckedoutToLocal == '1') {
                            alert(Strings.STS.L_OpenDocumentLocalError_Text);
                            fRet = false;
                        }
                        else
                            fRet = typeof stsOpen.EditDocument2 != "undefined" && stsOpen.EditDocument2(window, szHref, szAppId);
                    }
                    else {
                        fRet = typeof stsOpen.ViewDocument2 != "undefined" && stsOpen.ViewDocument2(window, szHref, szAppId);
                    }
                }
                catch (e) {
                    fRet = false;
                }
                if (fRet)
                    window.onfocus = RefreshOnNextFocus;
            }
            else {
                var iOpenFlag = 0;

                if (currentItemCheckedOutUserId != "") {
                    if (currentItemCheckedOutUserId != ctx.CurrentUserId && ctx.CurrentUserId != null)
                        iOpenFlag = 1;
                    else if (currentItemCheckedoutToLocal == null || currentItemCheckedoutToLocal != '1')
                        iOpenFlag = 2;
                    else
                        iOpenFlag = 4;
                }
                else if (!HasRights(0x0, 0x4) || FDefaultOpenForReadOnly(szExt))
                    iOpenFlag = 1;
                else if (ctx.isForceCheckout == true)
                    iOpenFlag = 3;
                try {
                    if (isEdit)
                        fRet = typeof stsOpen.EditDocument3 != "undefined" && stsOpen.EditDocument3(window, szHref, false, szAppId);
                    else
                        fRet = typeof stsOpen.ViewDocument3 != "undefined" && stsOpen.ViewDocument3(window, szHref, iOpenFlag, szAppId);
                }
                catch (e) {
                    fRet = false;
                }
                if (fRet) {
                    var fRefreshOnNextFocus = typeof stsOpen.PromptedOnLastOpen != "undefined" && stsOpen.PromptedOnLastOpen();

                    if (fRefreshOnNextFocus)
                        window.onfocus = RefreshOnNextFocus;
                    else
                        SetWindowRefreshOnFocus();
                }
            }
        }
        else if (currentItemCheckedoutToLocal == '1') {
            alert(Strings.STS.L_OpenDocumentLocalError_Text);
        }
        if (stsOpen == null || !fRet) {
            if (fTransformServiceOn == 'TRUE' && fShouldTransformExtension == 'TRUE' && fTransformHandleUrl == 'TRUE') {
                if (itemTable == null)
                    return fRet;
                if (browseris.ie) {
                    event.cancelBubble = true;
                    event.returnValue = false;
                }
                else if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                    if (typeof objEvent.preventDefault != "undefined")
                        objEvent.preventDefault();
                    if (typeof objEvent.stopPropagation != "undefined")
                        objEvent.stopPropagation();
                }
                var getHttpRoot = new Function("return " + itemTable.getAttribute("CTXName") + ".HttpRoot;");

                strUrl = getHttpRoot() + "/_layouts/15/htmltrverify.aspx?doc=" + escapeProperly(szHref);
                if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                    if (typeof window.frameElement.navigateParent != "undefined")
                        window.frameElement.navigateParent(strUrl);
                }
                else
                    GoToPage(strUrl);
            }
            else if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
                if (typeof window.frameElement.navigateParent != "undefined")
                    window.frameElement.navigateParent(ele.href);
            }
            else
                STSNavigate(ele.href);
            return false;
        }
        return CancelMyEvent(fRet, stsOpen, objEvent);
    }
}
function CancelMyEvent(fRet, stsOpen, objEvent, forceCancel) {
    if (browseris.ie) {
        if (event != null) {
            event.cancelBubble = true;
            event.returnValue = false;
        }
    }
    else if (IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        if (forceCancel || stsOpen != null && fRet) {
            if (typeof objEvent.preventDefault != "undefined")
                objEvent.preventDefault();
            if (typeof objEvent.stopPropagation != "undefined")
                objEvent.stopPropagation();
        }
        return true;
    }
    return fRet;
}
function DispDocItemEx2(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strServerFileRedirect) {
    var strUrl;
    var fRedirect = false;
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "";
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);
    var isEdit = !IsNullOrUndefined(ele.getAttribute("isEdit"));

    function OpenDocInWAC() {
        strUrl = strServerFileRedirect;
        strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
        strUrl = AddSourceToUrl(strUrl);
        if (isEdit) {
            var url = new URI(strUrl);

            url.setQueryParameter("action", "edit");
            strUrl = url.getString();
        }
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else {
            if (objEvent.shiftKey || objEvent.ctrlKey) {
                return true;
            }
            else {
                NavigateParentOrSelf(ele, strUrl);
            }
        }
        objEvent.cancelBubble = true;
        objEvent.returnValue = false;
        return false;
    }
    if ((SzExtension(ele.href)).indexOf("pdf") != -1) {
        var dynEle = ele;
        var navUrl = isEdit && Boolean(dynEle.editHref) ? dynEle.editHref : dynEle.href;

        dynEle.href = navUrl;
        STSNavigate(navUrl);
        return false;
    }
    if (fIsServerFile) {
        itemTable = FindSTSMenuTable(ele, "CTXName");
        var strApp = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";

        if (!Boolean(strApp))
            strApp = ele.getAttribute("App");
        var tryPHFirst = !fIsClientAppInstalled && browseris.ie10standardUp && Boolean(strApp) && (iDefaultItemOpen == "0" || isEdit) && HasRights(0x0, 0x20);

        if (!tryPHFirst && (iDefaultItemOpen == "1" && !(fIsClientAppInstalled && isEdit && HasRights(0x0, 0x20)) || !fIsClientAppInstalled)) {
            return OpenDocInWAC();
        }
        else if (fIsClientAppInstalled) {
            if (strProgId == "" || strProgId.indexOf("SharePoint.OpenDocuments") >= 0) {
                return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId);
            }
            else {
                if (!ViewDoc(ele.href, strProgId)) {
                    editDocumentWithProgIDNoUI(ele.href, currentItemProgId, strProgId, "0", ctx.HttpRoot, "0", strApp, ErrorFunction, ErrorFunction);
                }
                var stsOpen = StsOpenEnsureEx2(strProgId);

                return CancelMyEvent(false, stsOpen, objEvent);
            }
        }
    }
    function ErrorFunction() {
        strUrl = strServerFileRedirect;
        strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, -1);
        strUrl = AddSourceToUrl(strUrl);
        if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) != null) {
            if (typeof window.frameElement.navigateParent != "undefined")
                window.frameElement.navigateParent(strUrl);
        }
        else {
            NavigateParentOrSelf(ele, strUrl);
        }
    }
    return DispDocItemExWithEvent(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, fIsServerFile ? OpenDocInWAC : null, fIsClientAppInstalled);
}
function DispDocItemExWithOutContext(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
}
function AddSourceToUrl(url) {
    var isWOPIUrl = (url.toLowerCase()).indexOf("/wopiframe.aspx?") > 0;

    if (isWOPIUrl) {
        document.cookie = "WOPISessionContext=" + GetSource() + ";path=/;";
        return url;
    }
    else {
        var source = GetSource();
        var totalUrlLength = url.length + source.length;

        if (totalUrlLength > 1950) {
            return url;
        }
        else {
            var ch = url.indexOf('?') >= 0 ? '&' : '?';

            return url + ch + "Source=" + source;
        }
    }
}
function IsInfoPathProgId(strProgId) {
    if (strProgId != null && (strProgId.startsWith("SharePoint.OpenXMLDocuments") || strProgId.startsWith("SharePoint.OpenXmlDocuments")))
        return true;
    else
        return false;
}
function AddInfoPathParametersToUrl(strUrl, strProgId, ele, iDefaultItemOpen) {
    if (IsInfoPathProgId(strProgId)) {
        var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);
        var ch = strUrl.indexOf('?') >= 0 ? '&' : '?';
        var strNewUrl = strUrl + ch + "ClientInstalled=" + String(fIsClientAppInstalled);

        if (iDefaultItemOpen != -1) {
            strNewUrl = strNewUrl + "&DefaultItemOpen=" + String(iDefaultItemOpen);
        }
        if (strNewUrl.length > 1950) {
            return strUrl;
        }
        else {
            return strNewUrl;
        }
    }
    else {
        return strUrl;
    }
}
function _VerifyFolderHref(ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect) {
    var fGetHrefForLinking = objEvent.button == Sys.UI.MouseButton.rightButton;
    var strUrl = GetRedirectedHref(ele.href, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, false, fGetHrefForLinking, ele);
    var fIsServerFile = strHtmlType != null && strHtmlType != "" && strServerFileRedirect != null && strServerFileRedirect.length > 1;

    if (fIsServerFile) {
        if (Boolean(ele.getAttribute("isEdit")))
            ele.editHref = ele.href;
        if (!(strHtmlType == "OneNote.Notebook" && iDefaultItemOpen == "0"))
            ele.href = strUrl;
        else {
            var ctxCur = GetCurrentCtx();

            if (ctxCur != null && typeof getHostUrl == 'function') {
                var listItem = ListItemDataFromId(ctxCur, ele.parentNode.id);

                if (listItem != null)
                    ele.href = getHostUrl(ctxCur.HttpRoot) + listItem.FileRef;
            }
        }
        objEvent.cancelBubble = true;
        objEvent.returnValue = true;
        DetachEvent('mousedown', VerifyFolderHref, ele);
    }
    return false;
}
function _VerifyHref(ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect) {
    var fGetHrefForLinking = objEvent.button == Sys.UI.MouseButton.rightButton;
    var strUrl = GetRedirectedHref(ele.href, iDefaultItemOpen, strProgId, null, strServerFileRedirect, false, fGetHrefForLinking, ele);
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect.length > 1;
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);

    if (fIsServerFile) {
        if (iDefaultItemOpen == "1" && !(fIsClientAppInstalled && !IsNullOrUndefined(ele.getAttribute("isEdit"))) || !fIsClientAppInstalled) {
            if (Boolean(ele.getAttribute("isEdit")))
                ele.editHref = ele.href;
            if (iDefaultItemOpen == "1")
                ele.href = strUrl;
            objEvent.cancelBubble = true;
            objEvent.returnValue = true;
        }
        DetachEvent('mousedown', VerifyHref, ele);
    }
    return false;
}
function GetRedirectedHref(defaultHref, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, fIsFolder, fGetHrefForLinking, ele) {
    var fIsServerFile = strServerFileRedirect != null && strServerFileRedirect != "" && (!fIsFolder || strHtmlType != null && strHtmlType != "");
    var fIsClientAppInstalled = IsClientAppInstalled(strProgId, null, ele) && HasRights(0x10, 0x0);

    if (fIsServerFile) {
        strServerFileRedirect = strServerFileRedirect.substring(1);
        fIsServerFile = strServerFileRedirect != "";
    }
    var strUrl = defaultHref;

    if (fIsServerFile) {
        if (fIsFolder || iDefaultItemOpen == "1" || !fIsClientAppInstalled) {
            strUrl = strServerFileRedirect;
            if (!IsInfoPathProgId(strProgId) && defaultHref.indexOf("?") < 0 && fGetHrefForLinking) {
                strUrl = defaultHref + "?Web=1";
            }
            else {
                if (GetUrlKeyValue("Web", true, defaultHref, true) == "1") {
                    strUrl = defaultHref;
                }
                else {
                    strUrl = AddInfoPathParametersToUrl(strUrl, strProgId, ele, DocOpen.BROWSER);
                    strUrl = AddSourceToUrl(strUrl);
                }
            }
            strUrl = STSPageUrlValidation(strUrl);
        }
    }
    return strUrl;
}
function _DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    if (objEvent.shiftKey || objEvent.ctrlKey) {
        return true;
    }
    var tblFileDlg = document.getElementById("FileDialogViewTable");

    if (tblFileDlg != null) {
        objEvent.cancelBubble = false;
        objEvent.returnValue = false;
        return true;
    }
    if (typeof ctx == "undefined" || ctx == null)
        ctx = new ContextInfo();
    CtxSetCurrentUserId(strCurrentUser);
    if (strRequireCheckout == '1')
        CtxSetIsForceCheckout(true);
    else
        CtxSetIsForceCheckout(false);
    currentItemCheckedOutUserId = strCheckoutUser;
    currentItemCheckedoutToLocal = strCheckedoutTolocal;
    currentItemProgId = strHtmlType;
    if (strPermmask != null && strPermmask != '') {
        SetCurrentPermMaskFromString(strPermmask, null);
        if (iDefaultItemOpen == "0" && !HasRights(0x0, 0x20))
            iDefaultItemOpen = "1";
    }
    objEvent.cancelBubble = true;
    if (strServerFileRedirect != null && strServerFileRedirect != '')
        strServerFileRedirect = strServerFileRedirect.substring(1);
    return DispDocItemEx2(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strServerFileRedirect);
}
function IsClientAppInstalled(strProgId, strApp, ele) {
    if (strApp != null && phManager.IsProtocolHandlerEnabled(strApp)) {
        return true;
    }
    if (ele != null) {
        itemTable = FindSTSMenuTable(ele, "CTXName");
        var strAppLocal = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";

        if (!Boolean(strAppLocal))
            strAppLocal = ele.getAttribute("App");
        if (Boolean(strAppLocal) && phManager.IsProtocolHandlerEnabled(strAppLocal))
            return true;
    }
    var stsOpen = null;

    if (strProgId != '') {
        stsOpen = StsOpenEnsureEx2(strProgId);
    }
    return stsOpen != null;
}
function ViewDoc(url, strProgId) {
    var stsOpen = StsOpenEnsureEx2(strProgId);
    var fRet = false;

    if (stsOpen != null) {
        try {
            fRet = typeof stsOpen.ViewDocument2 != "undefined" && stsOpen.ViewDocument2(window, url);
        }
        catch (e) {
            fRet = false;
        }
    }
    return fRet;
}
function _PortalPinToMyPage3(eForm, portalUrl, instanceID) {
    eForm.action = portalUrl + '_vti_bin/portalapi.aspx?Cmd=PinToMyPage';
    if (typeof eForm.ReturnUrl != "undefined")
        eForm.ReturnUrl.value = window.location.href;
    if (typeof eForm.ListViewUrl != "undefined" && typeof eForm.ListViewUrl.value != "undefined")
        eForm.ListViewUrl.value = MakeMtgInstanceUrl(eForm.ListViewUrl.value, instanceID);
    eForm.submit();
}
function _PortalPinToMyPage(eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate) {
    eForm.action = portalUrl + '_vti_bin/portalapi.aspx?Cmd=PinToMyPage';
    SetFieldValue(eForm, "ReturnUrl", window.location.href);
    SetFieldValue(eForm, "ListViewUrl", MakeMtgInstanceUrl(listViewUrl, instanceId));
    SetFieldValue(eForm, "ListTitle", listTitle);
    SetFieldValue(eForm, "ListDescription", listDescription);
    SetFieldValue(eForm, "BaseType", baseType);
    SetFieldValue(eForm, "ServerTemplate", serverTemplate);
    eForm.submit();
}
function SetFieldValue(eForm, fieldName, value) {
    var field = eForm[fieldName];

    if (field == null) {
        field = document.createElement("INPUT");
        field.setAttribute("type", "hidden");
        field.setAttribute("name", fieldName);
        eForm.appendChild(field);
    }
    field.value = value;
}
function _MoveToViewDate(strdate, view_type, ctxid) {
    var fn = function() {
        var ctrl;

        if (Boolean(ctxid))
            ctrl = SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance(ctxid);
        else
            ctrl = SP.UI.ApplicationPages.CalendarInstanceRepository.firstInstance();
        if (ctrl != null) {
            if (view_type != null) {
                if (typeof ctrl.moveToViewType != "undefined")
                    ctrl.moveToViewType(view_type);
            }
            else if (typeof ctrl.moveToDate != "undefined")
                ctrl.moveToDate(strdate);
        }
    };

    if (FV4UI() && typeof _fV4Calendar != "undefined" && _fV4Calendar) {
        AjaxCalendarCall(fn);
    }
    else {
        MoveToViewDatePostBack(strdate, view_type);
    }
}
function MoveToViewDatePostBack(strdate, view_type) {
    var wUrl = window.location.href;

    if (strdate != null)
        wUrl = StURLSetVar2(wUrl, "CalendarDate", escapeProperly(strdate));
    if (view_type != null)
        wUrl = StURLSetVar2(wUrl, "CalendarPeriod", view_type);
    _SubmitFormPost(wUrl, true);
}
function AjaxCalendarCall(fn) {
    var defd;

    try {
        defd = typeof SP.UI.ApplicationPages.CalendarInstanceRepository;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function _MoveToDate(strdate, ctxid) {
    _MoveToViewDate(strdate, null, ctxid);
}
function MoveToToday() {
    _MoveToViewDate("", null);
}
function MoveView(viewtype) {
    _MoveToViewDate(null, viewtype);
}
function _ClickDay(date) {
    _MoveToDate(date);
}
function GetIframe() {
    return null;
}
function _GetMonthView(str) {
    var wUrl = window.location.href;
    var ExpWeek = document.getElementById("ExpandedWeeksId");

    if (ExpWeek != null) {
        ExpWeek.value = str;
        _SubmitFormPost(wUrl, true);
    }
}
function NewItemDT(url, day, time) {
    if (url == null)
        return;
    if (time != null)
        url = StURLSetVar2(url, "CalendarTime", time);
    if (day != null)
        url = StURLSetVar2(url, "CalendarDate", day);
    _NewItem(url);
}
function ClickTime(url, time) {
    NewItemDT(url, null, time);
}
function NewItemDay(url, day) {
    NewItemDT(url, day, null);
}
function ScrollToAnchorInInnerScrollPane(formName, hiddenFieldName, textInHref) {
    try {
        var form = document.getElementById(formName);
        var anchor = document.getElementById(form[hiddenFieldName].value);

        if (typeof anchor == "undefined" || anchor == null)
            throw "";
        var iconAnchor = anchor.parentNode.previousSibling;

        if (typeof iconAnchor != "undefined" && iconAnchor != null) {
            var expandIconAnchor = iconAnchor.previousSibling;

            if (typeof expandIconAnchor != "undefined" && expandIconAnchor != null)
                anchor = expandIconAnchor;
            else
                anchor = iconAnchor;
        }
        else
            throw "";
    }
    catch (e) {
        var tempAnchor = null;
        var anchorLength = document.anchors.length;

        for (var i = 0; i < anchorLength; i++) {
            tempAnchor = document.anchors[i];
            var href = tempAnchor.href;

            if (href.search(new RegExp(textInHref)) != -1) {
                anchor = tempAnchor;
                break;
            }
        }
    }
    if (typeof anchor != "undefined" && anchor != null) {
        var tableNode = anchor.parentNode;

        while (tableNode != null && tableNode.tagName != "TABLE")
            tableNode = tableNode.parentNode;
        if (typeof tableNode != "undefined" && tableNode != null) {
            var treeViewDiv = tableNode.parentNode;

            while (treeViewDiv != null && (treeViewDiv.tagName != "DIV" || treeViewDiv.style.overflow != "auto"))
                treeViewDiv = treeViewDiv.parentNode;
            if (typeof treeViewDiv != "undefined" && treeViewDiv != null) {
                var x = anchor.offsetLeft;

                treeViewDiv.scrollLeft = x;
                treeViewDiv.scrollTop = tableNode.offsetTop - treeViewDiv.clientHeight + tableNode.offsetHeight;
            }
        }
    }
}
function FilterChoice(opt, ctrl, strVal, filterVal) {
    var i;
    var cOpt = 0;
    var bSelected = false;
    var strHtml = "";
    var strId = opt.id;
    var strName = opt.name;
    var strMatch = "";
    var strMatchVal = "";
    var strOptsAttr = ctrl.getAttribute("choices");
    var strOpts = strOptsAttr != null ? strOptsAttr : "";
    var rgopt = strOpts.split("|");
    var x = 0;
    var y = ctrl.offsetHeight;
    var strHiddenAttr = ctrl.getAttribute("optHid");
    var strHidden = strHiddenAttr != null ? strHiddenAttr : "";
    var iMac = rgopt.length - 1;
    var iMatch = -1;
    var unlimitedLength = false;
    var strSelectedLower = "";

    if (opt != null && opt.selectedIndex >= 0) {
        bSelected = true;
        strSelectedLower = opt.options[opt.selectedIndex].innerText;
    }
    for (i = 0; i < rgopt.length; i = i + 2) {
        var strOpt = rgopt[i];

        while (i < iMac - 1 && rgopt[i + 1].length == 0) {
            strOpt = strOpt + "|";
            i++;
            if (i < iMac - 1) {
                strOpt = strOpt + rgopt[i + 1];
            }
            i++;
        }
        var strValue = rgopt[i + 1];
        var strLowerOpt = strOpt.toLocaleLowerCase();
        var strLowerVal = strVal.toLocaleLowerCase();

        if (filterVal.length != 0)
            bSelected = true;
        if (strLowerOpt.indexOf(strLowerVal) == 0) {
            var strLowerFilterVal = filterVal.toLocaleLowerCase();

            if (strLowerFilterVal.length != 0 && strLowerOpt.indexOf(strLowerFilterVal) == 0 && strMatch.length == 0)
                bSelected = false;
            if (strLowerOpt.length > 20) {
                unlimitedLength = true;
            }
            if (!bSelected || strLowerOpt == strSelectedLower) {
                strHtml += "<option selected value=\"" + strValue + "\">" + STSHtmlEncode(strOpt) + "</option>";
                bSelected = true;
                strMatch = strOpt;
                strMatchVal = strValue;
                iMatch = i;
            }
            else {
                strHtml += "<option value=\"" + strValue + "\">" + STSHtmlEncode(strOpt) + "</option>";
            }
            cOpt++;
        }
    }
    var strHandler = " ondblclick=\"HandleOptDblClick()\" onkeydown=\"HandleOptKeyDown()\"";
    var strOptHtml = "";

    if (unlimitedLength) {
        strOptHtml = "<select tabIndex=\"-1\" ctrl=\"" + ctrl.id + "\" name=\"" + strName + "\" id = \"" + strId + "\"" + strHandler;
    }
    else {
        strOptHtml = "<select class=\"ms-lookuptypeindropdown\" tabIndex=\"-1\" ctrl=\"" + ctrl.id + "\" name=\"" + strName + "\" id = \"" + strId + "\"" + strHandler;
    }
    if (cOpt == 0) {
        strOptHtml += " style=\"display:none;position:absolute;z-index:2;left:" + String(x) + "px;top:" + String(y) + "px\" onfocusout=\"OptLoseFocus(this)\"></select>";
    }
    else {
        strOptHtml += " style=\"position:absolute;z-index:2;left:" + String(x) + "px;top:" + String(y) + "px\"" + " size=\"" + String(cOpt <= 8 ? cOpt : 8) + "\"" + (cOpt == 1 ? "multiple=\"true\"" : "") + " onfocusout=\"OptLoseFocus(this)\">" + strHtml + "</select>";
    }
    opt.outerHTML = strOptHtml;
    var hid = document.getElementById(strHidden);

    if (iMatch != 0 || rgopt[1] != "0")
        hid.value = strMatchVal;
    else
        hid.value = "0";
    if (iMatch != 0 || rgopt[1] != "0")
        return strMatch;
    else
        return "";
}
function _OptLoseFocus(opt) {
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);

    if (opt.selectedIndex >= 0)
        _SetCtrlFromOpt(ctrl, opt);
    opt.style.display = "none";
}
function SetCtrlMatch(ctrl, opt) {
    var optHidAttr = ctrl.getAttribute("optHid");
    var ctrl_optHid = optHidAttr != null ? optHidAttr : "";
    var hid = document.getElementById(ctrl_optHid);

    hid.value = opt.options[opt.selectedIndex].value;
    if (hid.value != "0")
        ctrl.match = opt.options[opt.selectedIndex].innerText;
    else
        ctrl.match = "";
}
function _SetCtrlFromOpt(ctrl, opt) {
    var optHidAttr = ctrl.getAttribute("optHid");
    var ctrl_optHid = optHidAttr != null ? optHidAttr : "";
    var hid = document.getElementById(ctrl_optHid);

    hid.value = opt.options[opt.selectedIndex].value;
    ctrl.value = opt.options[opt.selectedIndex].innerText;
    if (opt.options[opt.selectedIndex].value == 0)
        ctrl.match = "";
    else
        ctrl.match = ctrl.value;
    if (typeof ctrl.onValueSetFromPicker == "function")
        ctrl.onValueSetFromPicker();
}
function HandleOptDblClick() {
    var opt = event.srcElement;
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);

    _SetCtrlFromOpt(ctrl, opt);
    SetCtrlMatch(ctrl, opt);
    opt.style.display = "none";
}
function HandleOptKeyDown() {
    var opt = event.srcElement;
    var ctrlAttr = opt.getAttribute("ctrl");
    var opt_ctrl = ctrlAttr != null ? ctrlAttr : "";
    var ctrl = document.getElementById(opt_ctrl);
    var key = event.keyCode;

    switch (key) {
    case 13:
    case 9:
        _SetCtrlFromOpt(ctrl, opt);
        event.returnValue = false;
        opt.style.display = "none";
        return;
    default:
        break;
    }
    return;
}
function CommitInlineEditChange(tr, cancel) {
    if (tr.cells.length > 0) {
        var c = tr.cells[0];

        if (c.width == "1%")
            eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href);
        else if (tr.cells.length > 1) {
            c = tr.cells[1];
            if (c.width == "1%")
                eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href);
        }
    }
}
function InlineEditNextTR(tr, nextTr, element, down) {
    var inlineEditString;

    if (nextTr != null) {
        _inlineEditString = tr.getAttribute("automode") + "#";
        var index = null;

        while (element != null && element.nodeType == 1 && element.getAttribute("automode") == null) {
            var siblingCount = 0;
            var sibling = element.previousSibling;

            while (sibling != null) {
                siblingCount++;
                sibling = sibling.previousSibling;
            }
            if (index == null)
                index = String(siblingCount);
            else
                index = String(siblingCount) + "," + index;
            element = element.parentNode;
        }
        _inlineEditString += index;
        var tab = nextTr;

        while (tab != null && tab.tagName != "TABLE")
            tab = tab.parentNode;
        if (tab != null && nextTr != null && nextTr.getAttribute("iid") != null) {
            inlineEditString = tab.getAttribute("inlineedit");
            if (inlineEditString != null) {
                inlineEditString = inlineEditString.replace('{@ID}', '{' + IdFromRow(nextTr) + '}');
                inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                eval(inlineEditString);
            }
        }
        else if (down == true && nextTr != null) {
            if (nextTr.cells.length > 0) {
                inlineEditString = null;
                var c = nextTr.cells[0];

                if (c.width == "1%") {
                    inlineEditString = c.firstChild.href;
                }
                else if (nextTr.cells.length > 1) {
                    c = nextTr.cells[1];
                    if (c.width == "1%")
                        inlineEditString = c.firstChild.href;
                }
                if (inlineEditString != null) {
                    inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                    eval(inlineEditString);
                }
            }
        }
    }
}
function HandleInlineEditKeyDown(ctrl) {
    var element = event.srcElement;

    if (element.tagName != "INPUT")
        return;
    var key = event.keyCode;
    var tr = ctrl.parentNode;
    var nextTr;

    switch (key) {
    case 27:
        CommitInlineEditChange(tr, true);
        break;
    case 38:
        nextTr = tr.previousSibling;
        InlineEditNextTR(tr, nextTr, element);
        break;
    case 13:
    case 40:
        nextTr = tr.nextSibling;
        InlineEditNextTR(tr, nextTr, element, true);
        break;
    default:
        break;
    }
    if (window.event != null)
        window.event.cancelBubble = true;
    else if (ctrl != null && typeof ctrl.stopPropagation != "undefined")
        ctrl.stopPropagation();
}
function EnsureSelectElement(ctrl, strId) {
    var select = document.getElementById(strId);

    if (select == null) {
        select = document.createElement("SELECT");
        ctrl.parentNode.appendChild(select);
        select.outerHTML = "<select id=\"" + strId + "\" ctrl=\"" + ctrl.id + "\" class=\"ms-lookuptypeindropdown\" name=\"" + strId + "\" style=\"display:none\" onfocusout=\"OptLoseFocus(this)\"></select>";
        FilterChoice(select, ctrl, ctrl.value, "");
    }
    else {
        select.parentNode.removeChild(select);
        ctrl.parentNode.appendChild(select);
    }
    return document.getElementById(strId);
}
function HandleKey() {
    var key = event.keyCode;
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttr = ctrl.getAttribute("opt");
    var ctrl_opt = optAttr != null ? optAttr : "";
    var opt = EnsureSelectElement(ctrl, ctrl_opt);
    var bNeedMatch = false;
    var strLower;
    var strMatchLower;

    switch (key) {
    case 8:
        if (str.length > 0) {
            str = str.substr(0, str.length - 1);
        }
        bNeedMatch = true;
        break;
    case 16:
    case 17:
    case 18:
        return;
    case 9:
    case 16:
    case 17:
    case 18:
        return;
    case 13:
        strLower = ctrl.value.toLocaleLowerCase();
        var ctrl_match = typeof ctrl.match == "string" ? ctrl.match : "";

        strMatchLower = ctrl_match.toLocaleLowerCase();
        if (strMatchLower.indexOf(strLower) != 0)
            ctrl.match = FilterChoice(opt, ctrl, ctrl.value, "");
        if (opt.style.display != "none") {
            ctrl.value = ctrl.match;
            opt.style.display = "none";
            event.returnValue = false;
        }
        return;
    case 27:
        opt.style.display = "none";
        event.returnValue = false;
        return;
    case 38:
        if (opt.style.display != "none") {
            if (opt.selectedIndex > 0)
                opt.selectedIndex = opt.selectedIndex - 1;
            else
                opt.selectedIndex = opt.options.length - 1;
            SetCtrlMatch(ctrl, opt);
            event.returnValue = false;
        }
        return;
    case 40:
        if (opt.style.display != "none" && opt.selectedIndex < opt.options.length - 1) {
            opt.selectedIndex = opt.selectedIndex + 1;
            SetCtrlMatch(ctrl, opt);
            event.returnValue = false;
            return;
        }
        bNeedMatch = true;
        break;
    case 46:
        break;
    default:
        break;
    }
    if (bNeedMatch)
        ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function ShowDropdown(textboxId) {
    var ctrl = document.getElementById(textboxId);
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = EnsureSelectElement(ctrl, ctrl_opt);

    ctrl.match = FilterChoice(opt, ctrl, "", ctrl.value);
    ctrl.focus();
}
function HandleChar() {
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);
    var key = event.keyCode;

    if (key == 13)
        return;
    str = str + (String.fromCharCode(key)).toLocaleLowerCase();
    ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function HandleLoseFocus() {
    var ctrl = event.srcElement;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);

    if (opt != null && opt.style.display != "none" && typeof document.activeElement != "undefined" && document.activeElement != opt)
        _OptLoseFocus(opt);
}
function HandleChange() {
    var ctrl = event.srcElement;
    var str = ctrl.value;
    var optAttribute = ctrl.getAttribute("opt");
    var ctrl_opt = optAttribute != null ? optAttribute : '';
    var opt = document.getElementById(ctrl_opt);

    ctrl.match = FilterChoice(opt, ctrl, str, "");
}
function IsSafeHref(href) {
    return href.match(new RegExp("^http://", "i")) != null || href.match(new RegExp("^https://", "i")) != null || href.match(new RegExp("^ftp://", "i")) != null || href.match(new RegExp("^file://", "i")) != null || href.match(new RegExp("^mailto:", "i")) != null || href.match(new RegExp("^news:", "i")) != null || href.match(new RegExp("^pnm://", "i")) != null || href.match(new RegExp("^mms://", "i")) != null || href.match(new RegExp("^/", "i")) != null || href.match(new RegExp("^#", "i")) != null || href.match(new RegExp("^\\\\\\\\", "i")) != null;
}
function Discuss(strUrl) {
    if (browseris.ie5up && browseris.win32)
        window.parent.location.href = strUrl;
    else
        alert(Strings.STS.L_IE5upRequired_Text);
}
var g_AdditionalNavigateHierarchyQString;

function GetAdditionalNavigateHierarchyQString() {
    return g_AdditionalNavigateHierarchyQString;
}
function SetAdditionalNavigateHierarchyQString(additionalQString) {
    g_AdditionalNavigateHierarchyQString = additionalQString;
}
function ProcessDefaultNavigateHierarchy(nodeDiv, dataSourceId, dataPath, url, listInContext, type, form, qsCore, submitPath) {
    if (typeof _spCustomNavigateHierarchy != "undefined") {
        _spCustomNavigateHierarchy(nodeDiv, dataSourceId, dataPath, url, listInContext, type);
    }
    else {
        if (listInContext == false) {
            top.location.href = url;
        }
        else {
            var par = document.createElement('INPUT');

            par.type = 'hidden';
            par.name = '_spTreeNodeClicked';
            par.value = dataPath;
            form.appendChild(par);
            var qs = "?RootFolder=" + escapeProperly(url) + qsCore + "&" + g_AdditionalNavigateHierarchyQString;

            _SubmitFormPost(submitPath + qs);
            return false;
        }
    }
    return undefined;
}
function ParseMultiColumnValue(fieldValue, delimiter, bIncludeEmpty) {
    var strSubColumn;
    var subColumnValues = [];

    if (delimiter == null)
        delimiter = ';#';
    var lead = delimiter.charCodeAt(0);
    var trail = delimiter.charCodeAt(1);

    if (fieldValue == null || fieldValue.length == 0)
        return subColumnValues;
    var strLead = delimiter.charAt(0);
    var strLeadLead = strLead + strLead;
    var escaped = new RegExp(strLeadLead, "g");
    var unescaped = delimiter.charAt(0);
    var startLocal = 0;

    if (fieldValue.substr(0, 2) == delimiter) {
        if (Boolean(bIncludeEmpty))
            subColumnValues.push('');
        startLocal = 2;
    }
    var end = startLocal;
    var bContainEscapedCharacters = false;
    var totalLength = fieldValue.length;

    while (end < totalLength) {
        var index = fieldValue.indexOf(strLead, end);

        if (index >= 0) {
            end = index;
            end++;
            if (fieldValue.charCodeAt(end) == trail) {
                if (end - 1 > startLocal) {
                    strSubColumn = fieldValue.substr(startLocal, end - startLocal - 1);
                    if (bContainEscapedCharacters)
                        strSubColumn = strSubColumn.replace(escaped, unescaped);
                    subColumnValues.push(strSubColumn);
                    bContainEscapedCharacters = false;
                }
                else {
                    subColumnValues.push('');
                }
                end++;
                startLocal = end;
                continue;
            }
            else if (fieldValue.charCodeAt(end) == lead) {
                end++;
                bContainEscapedCharacters = true;
                continue;
            }
            else {
                throw "ArgumentException";
            }
        }
        else {
            end = totalLength;
        }
    }
    if (end > startLocal) {
        strSubColumn = fieldValue.substr(startLocal, end - startLocal);
        if (bContainEscapedCharacters)
            strSubColumn = strSubColumn.replace(escaped, unescaped);
        subColumnValues.push(strSubColumn);
    }
    else if (Boolean(bIncludeEmpty))
        subColumnValues.push('');
    return subColumnValues;
}
function ConvertMultiColumnValueToString(subColumnValues, delimiter, bAddLeadingTailingDelimiter) {
    if (delimiter == null)
        delimiter = ";#";
    if (bAddLeadingTailingDelimiter == null)
        bAddLeadingTailingDelimiter = true;
    var strLead = delimiter.charAt(0);
    var strLeadLead = strLead + strLead;
    var escaped = new RegExp(delimiter.charAt(0), "g");
    var bHasValue = false;
    var sb = '';

    for (var i = 0; i < subColumnValues.length; i++) {
        var strSubColumn = subColumnValues[i];

        if (strSubColumn != null && strSubColumn.length > 0)
            strSubColumn = strSubColumn.replace(escaped, strLeadLead);
        if (strSubColumn != null && strSubColumn.length > 0)
            bHasValue = true;
        if (bAddLeadingTailingDelimiter || i != 0)
            sb += delimiter;
        sb += strSubColumn;
    }
    if (bHasValue) {
        if (bAddLeadingTailingDelimiter) {
            sb += delimiter;
        }
        return sb;
    }
    else
        return '';
}
var httpFolderTarget;
var httpFolderSource;
var httpFolderDiv;

function NavigateHttpFolderCore() {
    var targetFrame;

    if (httpFolderDiv == null) {
        httpFolderDiv = document.createElement('DIV');
        document.body.appendChild(httpFolderDiv);
        httpFolderDiv.onreadystatechange = NavigateHttpFolderCore;
        if (typeof httpFolderDiv.addBehavior != "undefined")
            httpFolderDiv.addBehavior('#default#httpFolder');
    }
    if (typeof httpFolderDiv.readyState == "string" && httpFolderDiv.readyState == "complete") {
        httpFolderDiv.onreadystatechange = null;
        try {
            targetFrame = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
            if (targetFrame != null) {
                var targetDocument = typeof targetFrame.document != "undefined" ? targetFrame.document : null;

                if (targetDocument != null) {
                    var targetBody = typeof targetDocument.body != "undefined" ? targetDocument.body : null;

                    if (targetBody != null && typeof targetBody.innerText == "string") {
                        targetBody.innerText = Strings.STS.L_WebFoldersRequired_Text;
                    }
                }
            }
        }
        catch (e) { }
        var isOk = false;

        try {
            var ret = "";

            if (typeof httpFolderDiv.navigateFrame != "undefined") {
                ret = httpFolderDiv.navigateFrame(httpFolderSource, httpFolderTarget);
            }
            if (ret == "OK")
                isOk = true;
        }
        catch (e) { }
        if (!isOk && 0 == httpFolderSource.search(new RegExp("http://[a-zA-Z0-9\-\.]+(:80)?/"))) {
            var sUrl = (httpFolderSource.replace(/http:\/\/([a-zA-Z0-9\-\.]+)(:80)?[\/]/, "//$1/")).replace(/[\/]/g, "\\");

            try {
                targetFrame = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
                if (targetFrame != null) {
                    targetFrame.onload = null;
                    var targetDocument2 = typeof targetFrame.document != "undefined" ? targetFrame.document : null;

                    if (targetDocument2 != null) {
                        var targetLocation = typeof targetDocument2.location != "undefined" ? targetDocument2.location : null;

                        if (targetLocation != null && typeof targetLocation.href == "string") {
                            targetLocation.href = sUrl;
                            isOk = true;
                        }
                    }
                }
            }
            catch (e) { }
        }
        if (!isOk) {
            if (browseris.ie)
                alert(Strings.STS.L_WebFoldersError_IE_Text);
            else
                alert(Strings.STS.L_WebFoldersError_Text);
        }
    }
}
function NavigateHttpFolder(urlSrc, frameTarget) {
    if ('/' == urlSrc.charAt(0)) {
        urlSrc = window.location.protocol + "//" + window.location.host + urlSrc;
    }
    httpFolderSource = urlSrc;
    httpFolderTarget = frameTarget;
    NavigateHttpFolderCore();
}
function NavigateHttpFolderIfSupported(urlSrc, frameTarget) {
    if (frameTarget == "_blank") {
        if (SupportsNavigateHttpFolder()) {
            NavigateHttpFolder(urlSrc, frameTarget);
        }
        else {
            alert(Strings.STS.L_WebFoldersError_Text);
        }
    }
    else {
        alert(Strings.STS.L_NoExplorerView_Text);
    }
}
function AutoIndexForRelationshipsConfirmation() {
    var message = Strings.STS.L_Lookup_AutoIndexForRelationships_Confirm_Text;

    return confirm(message);
}
function SetHomePage2(webRoot) {
    if (!window.confirm(SP.Res.confirmWelcomePage))
        return;
    var cctx = new SP.ClientContext(undefined);
    var rootFolder = (cctx.get_web()).get_rootFolder();
    var url = "";

    if (webRoot.length > 0) {
        url = _spPageContextInfo.serverRequestPath;
        url = unescapeProperly(url);
        url = url.substr(webRoot.length);
        if (url.indexOf("/") == 0)
            url = url.substr(1);
    }
    rootFolder.set_welcomePage(url);
    rootFolder.update();
    var noti = STSHtmlEncode(SP.Res.sending);
    var id = addNotification(noti, true);

    cctx.executeQueryAsync(function() {
        removeNotification(id);
        addNotification(STSHtmlEncode(SP.Res.pageIsSiteHomePage), false);
    }, null);
}
function SetHomePage(webRoot) {
    var fn = function() {
        SetHomePage2(webRoot);
    };

    if (typeof SP != 'undefined')
        EnsureScript("SP.js", typeof SP.ClientContext, fn);
    else
        EnsureScript("SP.js", typeof SP, fn);
}
function SendEmail(strItemUrl) {
    {
        var defd;

        try {
            defd = typeof SP.Ribbon.EMailLink.openMailerWithUrl;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "SP.Ribbon.EMailLink.openMailerWithUrl";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    SP.Ribbon.EMailLink.openMailerWithUrl(strItemUrl);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function TryCopyStringToClipboard(strText) {
    if (typeof window.clipboardData != "undefined" && typeof window.clipboardData.setData != "undefined") {
        window.clipboardData.setData("Text", strText);
    }
    else {
        if (typeof netscape != "undefined" && typeof Components != "undefined") {
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

            if (str == null)
                return false;
            str.data = strText;
            var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);

            if (trans == null || typeof trans.addDataFlavor == "undefined" || typeof trans.setTransferData == "undefined")
                return false;
            trans.addDataFlavor("text/unicode");
            trans.setTransferData("text/unicode", str, strText.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            var clip = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);

            if (clip == null || typeof clip.setData == "undefined")
                return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
    }
    return true;
}
function CopyStringToClipboard(str) {
    var bSuccess = false;

    try {
        bSuccess = TryCopyStringToClipboard(str);
    }
    catch (err) {
        bSuccess = false;
    }
    if (!bSuccess) {
        alert(SP.Res.clipboardNoAccess);
    }
}
function CopyPageAddressToClipboard() {
    CopyStringToClipboard(window.location.href);
}
function showViewSelector(evt, elm, opt) {
    if (evt == null)
        evt = window.event;
    CancelEvent(evt);
    elm = EnsureValidPositioningElement(evt, elm);
    if (elm != null && elm.className == 'ms-csrlistview-viewselectormenu')
        elm = elm.parentNode;
    var fn = function() {
        SP.Application.UI.ViewSelectorMenuBuilder.showMenu(elm, opt);
    };
    var defd;

    try {
        defd = typeof SP.Application.UI.ViewSelectorMenuBuilder.showMenu;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function EnsureValidPositioningElement(evt, elm) {
    if (elm != null)
        return elm;
    var srcElm = GetEventSrcElement(evt);
    var parentElm = srcElm;

    while (parentElm != null && parentElm.tagName != "BODY") {
        if (parentElm.tagName == "TD" && (parentElm.className == "ms-viewselector" || parentElm.className == "ms-viewselectorhover"))
            return parentElm;
        parentElm = parentElm.parentNode;
    }
    return srcElm;
}
function EnsureCheckoutAndChangeLayoutModeToEdit(listId, itemId, bPersonalView) {
    var item;
    var checkoutCallback = function() {
        {
            var defd;

            try {
                defd = typeof browserScript.MSOLayout_ChangeLayoutMode;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "browserScript.MSOLayout_ChangeLayoutMode";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        browserScript.MSOLayout_ChangeLayoutMode(bPersonalView);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    };
    var getItemCallback = function() {
        var user = item != null ? item.get_item("CheckoutUser") : null;

        if (!user) {
            if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
                var context2 = new SP.ClientContext(undefined);
                var list2 = ((context2.get_web()).get_lists()).getById(new SP.Guid(listId));

                item = list2.getItemById(itemId);
                (item.get_file()).checkOut();
                context2.executeQueryAsync(checkoutCallback, null);
            }
        }
        else {
            checkoutCallback();
        }
    };
    var fn = function() {
        var context = new SP.ClientContext(undefined);
        var list = ((context.get_web()).get_lists()).getById(new SP.Guid(listId));

        item = list.getItemById(itemId);
        context.load(item, "CheckoutUser");
        context.executeQueryAsync(getItemCallback, null);
    };
    var defd2;

    try {
        defd2 = typeof SP.ClientContext;
    }
    catch (e) {
        defd2 = "undefined";
    }
    EnsureScript("SP.js", defd2, fn);
}
function _ChangeLayoutMode(p1, p2) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOLayout_ChangeLayoutMode;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOLayout_ChangeLayoutMode";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOLayout_ChangeLayoutMode(p1, p2);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function OpenWebPartMenuFromLink(p1, p2, p3, p4) {
    OpenWebPartMenu(p1, p2, p3, p4, false);
}
function OpenWebPartMenu(p1, p2, p3, p4, p5) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOWebPartPage_OpenMenu;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOWebPartPage_OpenMenu";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOWebPartPage_OpenMenu(p1, p2, p3, p4, p5);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
    return true;
}
function UpdateWebPartMenuFocus(elem, elmClass, editClass) {
    if (elem != null)
        elem.className = elmClass;
    var child = null;

    if (elem != null && elem.childNodes != null) {
        child = elem.childNodes[0];
        if (child != null && child.tagName == "SPAN")
            child.className = editClass;
    }
}
function _WebPartMenuKeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, evt) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOMenu_KeyboardClick;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOMenu_KeyboardClick";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOMenu_KeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, evt);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function _ShowToolPane2Wrapper(p1, p2, p3) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOTlPn_ShowToolPane2Wrapper;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOTlPn_ShowToolPane2Wrapper";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOTlPn_ShowToolPane2Wrapper(p1, p2, p3);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function ChangeWebPartPageView(bPersonalView) {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOLayout_ToggleView;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOLayout_ToggleView";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOLayout_ToggleView(bPersonalView);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function _SetupFixedWidthWebParts() {
    {
        var defd;

        try {
            defd = typeof browserScript.MSOWebPartPage_SetupFixedWidthWebParts;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "browserScript.MSOWebPartPage_SetupFixedWidthWebParts";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    browserScript.MSOWebPartPage_SetupFixedWidthWebParts();
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function EnsureSelectionHandlerOnFocusDeferred(evt, cbx, ctxNum) {
    var tab = cbx;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    EnsureSelectionHandlerDeferred(evt, tab, ctxNum);
}
function EnsureSelectionHandlerDeferred(evt, tab, ctxNum) {
    var ctxCur = window["ctx" + String(ctxNum)];

    if (!FV4UI() || ctxCur == null) {
        tab.onmouseover = null;
        return;
    }
    if (ctxCur.BaseViewID == "MapView" && (IsStrNullOrEmpty(tab.className) || tab.className.indexOf("ms-mapviewtable") == -1))
        return;
    ctxInitItemState(ctxCur);
    var selectAll = tab.querySelector('.ms-selectall-span');

    if (selectAll != null) {
        $addHandler(selectAll, "keydown", function(e) {
            if (e.keyCode == Sys.UI.Key.space || e.keyCode == Sys.UI.Key.enter) {
                ClkElmt(selectAll);
                selectAll.focus();
                e.preventDefault();
            }
        });
        $addHandler(selectAll, "mousedown", function() {
            selectAll.style.outline = 'none';
        });
        $addHandler(selectAll, "mouseup", function() {
            selectAll.style.outline = '';
            selectAll.firstChild.focus();
        });
    }
    var i;
    var rows = tab.rows;

    for (i = 0; i < rows.length; i++) {
        var r = rows[i];

        if (HasCssClass(r, "ms-viewheadertr")) {
            var c = r.cells[0];

            if (c != null) {
                var cbx = (c.getElementsByTagName("INPUT"))[0];

                if (cbx != null) {
                    cbx.className = "s4-selectAllCbx";
                }
                else {
                    cbx = c.querySelector(".ms-selectall-span");
                }
                if (cbx != null) {
                    ctxCur.SelectAllCbx = cbx;
                    if (typeof cbx.onfocus != "undefined")
                        ctxCur.TableCbxFocusHandler = cbx.onfocus;
                    cbx.onfocus = null;
                }
            }
        }
        var iid = r.getAttribute("iid");

        if (iid != null) {
            var curSelected = false;

            if (ItemIsCurrentlySelected(ctxCur, iid, r)) {
                curSelected = true;
                ctxCur.CurrentSelectedItems++;
            }
            if (ItemIsCurrentlyVisible(r)) {
                ctxCur.TotalListItems++;
                ctxCur.LastSelectableRowIdx = i;
            }
            if (r.cells.length > 0) {
                c = r.cells[0];
                var itmCbx = c.querySelector(".s4-itm-cbx");

                if (itmCbx != null) {
                    if (!curSelected)
                        itmCbx.checked = false;
                    if (typeof itmCbx._setup == "undefined" || !Boolean(itmCbx._setup)) {
                        itmCbx._setup = true;
                        var tt = TooltipOfRow(r);

                        if (tt != null)
                            itmCbx.title = tt;
                        itmCbx.onblur = HideItemCbx;
                        itmCbx.onfocus = DisplayItemCbx;
                        itmCbx.onclick = ToggleItemRowSelection;
                        c.onclick = ToggleItemRowSelection;
                        if (itmCbx.nodeName == "DIV") {
                            $addHandler(c, "keydown", (function(tr, div) {
                                return function(e) {
                                    if (e.keyCode == Sys.UI.Key.space || e.keyCode == Sys.UI.Key.enter) {
                                        ToggleItemRowSelection(e, tr);
                                        div.focus();
                                    }
                                };
                            })(r, c));
                            $addHandler(c, "mousedown", (function(tc) {
                                return function() {
                                    tc.style.outline = 'none';
                                };
                            })(c));
                            $addHandler(c, "mouseup", (function(tc) {
                                return function() {
                                    tc.style.outline = '';
                                };
                            })(c));
                        }
                    }
                    if (r.getAttribute("automode") == null)
                        r.onclick = SingleItemSelect;
                }
                UpdateAutoMode(r);
                AddSpaceToEmptyTDs(r);
                AddBorderToLastCell(r);
            }
        }
    }
    ctxCur.TableMouseoverHandler = tab.onmouseover;
    tab.onmouseover = null;
    AddKeyDownEventHandler(tab, ctxNum);
}
function AddKeyDownEventHandler(tab, ctxNum) {
    if (tab.nodeName.toUpperCase() != "TABLE")
        return;
    var ctxCur = window["ctx" + String(ctxNum)];

    if (IsStrNullOrEmpty(tab.className) || ctxCur.BaseViewID == "MapView" && tab.className.indexOf("ms-mapviewtable") == -1 || ctxCur.BaseViewID != "MapView" && tab.className.indexOf("ms-listviewtable") == -1)
        return;
    if (tab.getAttribute("handleDeleteInit") == null) {
        tab.setAttribute("handleDeleteInit", "true");
        $addHandler(tab, "keydown", function(ei) {
            OnListViewKeyDown(ei, ctxNum);
        });
    }
}
function ItemIsSelectable(row) {
    if (row == null || !ItemHasiid(row) || !ItemIsCurrentlyVisible(row))
        return false;
    return true;
}
function ItemIsCurrentlyVisible(row) {
    if (row == null || row.parentNode == null)
        return false;
    if (GetCurrentEltStyle(row.parentNode, "display") == "none" || GetCurrentEltStyle(row, "display") == "none")
        return false;
    return true;
}
function ItemIsCurrentlySelected(ctxCur, iid, row) {
    if (ctxCur == null || !Boolean(iid))
        return false;
    var dictSel = GetSelectedItemsDict(ctxCur);

    if (dictSel == null || dictSel[iid] == null || row.className.indexOf("s4-itm-selected") < 0)
        return false;
    return true;
}
function ItemHasiid(row) {
    if (row == null || row.getAttribute("iid") == null)
        return false;
    return true;
}
function OnListViewKeyDown(ei, ctxNum) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null || ctxCur.inGridMode) {
        return;
    }
    var keyCode = ei.keyCode;
    var fShiftOrCtrlPressed = ei.shiftKey || ei.ctrlKey;

    if (IsCallOutOn()) {
        return;
    }
    switch (keyCode) {
    case Sys.UI.Key.del:
        HandleItemDelete(ei, ctxNum);
        break;
    case Sys.UI.Key.up:
        SelectNextRow(ctxNum, -1, fShiftOrCtrlPressed, ei);
        break;
    case Sys.UI.Key.down:
        SelectNextRow(ctxNum, +1, fShiftOrCtrlPressed, ei);
        break;
    case Sys.UI.Key.enter:
        if (IsEventTargetAnchor(ei)) {
            return;
        }
        if (ei.target != null && !IsStrNullOrEmpty(ei.target.className) && ei.target.className.indexOf("ms-lstItmLinkAnchor") >= 0) {
            OpenCallOutOrECB(ctxNum, ei);
        }
        else {
            ListItem_Open(ctxNum, ei);
        }
        break;
    default:
        break;
    }
}
function OpenCallOutOrECB(ctxNum, ei) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null)
        return true;
    var elmTarget = ei.target;
    var fIsDocLib = DoesListUseCallout(ctxCur);
    var elmTr = GetAncestor(elmTarget, "TR");
    var strID = IdFromRow(elmTr);

    if (IsStrNullOrEmpty(strID))
        return true;
    if (fIsDocLib) {
        ShowCalloutMenuForTr(elmTarget, ei, true);
    }
    else {
        ShowECBMenuForTr(elmTarget.parentNode, ei);
    }
    return true;
}
function ListItem_Open(ctxNum, ei) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));

    if (ctxCur == null)
        return false;
    var trCurrentSelected = GetLastSelectedRow(ctxCur);

    if (trCurrentSelected == null)
        return false;
    if (ctxCur.ListSchema.IsDocLib) {
        OpenDocItem(ei, ctxCur, trCurrentSelected);
    }
    else {
        OpenListItem(trCurrentSelected, ctxNum);
    }
    return true;
}
function OpenDocItem(ei, ctxCur, trCurrentSelected) {
    var listItem = GetListItemDataFromTrInternal(ctxCur, trCurrentSelected);
    var elmTarget = trCurrentSelected;
    var elmEcbTd = GetEcbTdFromRow(trCurrentSelected);
    var elmECBDiv = GetEcbDivFromEcbTd(elmEcbTd);

    if (elmECBDiv != null) {
        elmTarget = elmECBDiv.querySelector("a.ms-draggable");
    }
    if (elmTarget == null) {
        elmTarget = trCurrentSelected;
    }
    var lstSchema = ctxCur.ListSchema;

    return DispEx(elmTarget, ei, "TRUE", "FALSE", listItem["File_x0020_Type.url"], listItem["File_x0020_Type.progid"], lstSchema.DefaultItemOpen, listItem["HTML_x0020_File_x0020_Type.File_x0020_Type.mapcon"], listItem["HTML_x0020_File_x0020_Type"], listItem["serverurl.progid"], Boolean(listItem["CheckoutUser"]) ? listItem["CheckoutUser"][0].id : "", lstSchema.Userid, lstSchema.ForceCheckout, listItem.IsCheckedoutToLocal, listItem.PermMask);
}
function OpenListItem(trCurrentSelected, ctxNum) {
    var elmOpenAnchor = trCurrentSelected.querySelector("a[class*=\"ms-listlink\"]");

    if (elmOpenAnchor == null)
        return;
    EditLink2(elmOpenAnchor, ctxNum);
}
function GetListItemDataFromTr(trCurrentSelected) {
    if (trCurrentSelected == null) {
        return null;
    }
    var ctxCur = GetListContextFromTr(trCurrentSelected);

    if (ctxCur == null) {
        return null;
    }
    return GetListItemDataFromTrInternal(ctxCur, trCurrentSelected);
}
function GetListItemDataFromTrInternal(ctxCur, trCurrentSelected) {
    if (ctxCur == null || trCurrentSelected == null) {
        return null;
    }
    var idSelected = IdFromRow(trCurrentSelected);

    return ListItemDataFromId(ctxCur, idSelected);
}
function GetListContextFromTr(trCurrentSelected) {
    if (trCurrentSelected == null) {
        return null;
    }
    var strIID = trCurrentSelected.getAttribute("iid");

    if (IsStrNullOrEmpty(strIID)) {
        return null;
    }
    var rgIds = strIID.split(',');

    if (rgIds.length <= 2) {
        return null;
    }
    return GetListContextFromContextNumber(rgIds[0]);
}
function GetListContextFromContextNumber(strCtxNum) {
    return window["ctx" + strCtxNum];
}
function ListItemDataFromId(ctxCur, idSelected) {
    if (ctxCur == null || idSelected == null || ctxCur.ListData == null) {
        return null;
    }
    var listData = ctxCur.ListData.Row;

    if (listData == null)
        return null;
    var cRows = listData.length;

    for (var i = 0; i < cRows; i++) {
        if (listData[i].ID === idSelected) {
            return listData[i];
        }
    }
    return null;
}
function SelectNextRow(ctxNum, iNext, fAddToSelection, evt) {
    var ctxCur = GetListContextFromContextNumber(String(ctxNum));
    var trCurrentSelected = GetLastSelectedRow(ctxCur);
    var trNext = null;

    if (trCurrentSelected != null) {
        trNext = GetNextRow(trCurrentSelected, iNext);
        if (trNext != null) {
            var fRet;

            fRet = SingleItemSelectByElement(trNext, fAddToSelection);
            if (evt == null) {
                return fRet;
            }
            else {
                return CancelEvent(evt);
            }
        }
    }
    else {
        MakeDefaultSelectionForListView(ctxCur);
    }
    return true;
}
function GetLastSelectedRow(ctxCur) {
    var rgSelectedIIDs = ctxCur.dictSel;
    var strLastSelectedIID = "";
    var trLastSelected = null;

    if (ctxCur != null) {
        strLastSelectedIID = ctxCur.LastSelectedItemIID;
    }
    if (strLastSelectedIID != null && strLastSelectedIID.length > 0) {
        var strQS = "tr[iid=\"" + strLastSelectedIID + "\"]";

        trLastSelected = document.querySelector(strQS);
        if (trLastSelected != null && trLastSelected.getAttribute("automode") != null) {
            trLastSelected = null;
        }
    }
    return trLastSelected;
}
function GetIndexFromIID(ctxCur, strLastSelectedIID) {
    if (strLastSelectedIID == null)
        return -1;
    var strItmIDToFind = (strLastSelectedIID.split(','))[1];
    var cListItemsInCtx = 0;

    if (ctxCur != null && ctxCur.ListData != null && ctxCur.ListData.Row != null) {
        var rgItems = ctxCur.ListData.Row;

        cListItemsInCtx = rgItems.length;
        for (var i = 0; i < cListItemsInCtx; i++) {
            var strID = ctxCur.ListData.Row[i].ID;

            if (strID === strItmIDToFind) {
                return i;
            }
        }
    }
    return -1;
}
function GetLastSelectedRowIndex(ctxCur) {
    var strLastSelectedIID = ctxCur.LastSelectedItemIID;

    return GetIndexFromIID(ctxCur, strLastSelectedIID);
}
function GetTrFromIID(iid) {
    if (iid == null || iid.length == 0)
        return null;
    var strQS = "tr[iid=\"" + iid + "\"]";

    return document.querySelector(strQS);
}
function SelectRowByIID(iid, fAddToSelection) {
    var trToSelect = GetTrFromIID(iid);

    if (trToSelect != null) {
        SingleItemSelectByElement(trToSelect, fAddToSelection);
    }
}
function SelectRowByIndex(ctxCur, rowIndex, fAddToSelection) {
    var iid;

    if (ctxCur != null && ctxCur.ListData != null && ctxCur.ListData.Row != null && ctxCur.ListData.Row[rowIndex] != null) {
        iid = GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[rowIndex]);
        if (iid != null && iid.length > 0) {
            SelectRowByIID(iid, fAddToSelection);
        }
    }
}
function EnsureKeyBoardHandlersRegistered(ctxCur) {
    if (ctxCur == null) {
        return;
    }
    if (ctxCur.ListData == null || ctxCur.ListData.Row == null || ctxCur.ListData.Row[0] == null) {
        return;
    }
    var strFirstListIID = GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[0]);
    var elmTr = GetTrFromIID(strFirstListIID);

    if (elmTr == null) {
        return;
    }
    var elmTable = GetAncestor(elmTr, "TABLE");

    if (elmTable == null) {
        return;
    }
    AddKeyDownEventHandler(elmTable, (strFirstListIID.split(","))[0]);
}
function MakeDefaultSelectionForListView(ctxCur) {
    if (ctxCur == null) {
        return;
    }
    EnsureKeyBoardHandlersRegistered(ctxCur);
    if (ctxCur.ListData != null && ctxCur.ListData.Row != null && ctxCur.ListData.Row[0] != null) {
        var node = GetTrFromIID(GenerateIIDForListItem(ctxCur, ctxCur.ListData.Row[0]));

        if (node == null) {
            return;
        }
        while (node != null) {
            if (node.className.indexOf('s4-wpcell') >= 0 || node.className.indexOf('s4-wpActive') >= 0) {
                break;
            }
            node = node.parentNode;
        }
        if (node == null)
            return;
        EnsureScriptParams("ribbon", "SelectWp", node);
    }
    if (ctxCur.LastSelectedItemIID != null && ctxCur.LastSelectedItemIID.length > 0) {
        var trToSelect = GetTrFromIID(ctxCur.LastSelectedItemIID);

        if (trToSelect != null) {
            SingleItemSelectByElement(trToSelect, false);
            return;
        }
    }
    var iLastSelectedRowIndex = ctxCur.LastRowIndexSelected;

    if (iLastSelectedRowIndex == null) {
        iLastSelectedRowIndex = 0;
    }
    else {
        if (ctxCur.ListData != null && ctxCur.ListData.Row != null)
            var cListItems = ctxCur.ListData.Row.length;
        if (iLastSelectedRowIndex >= cListItems) {
            iLastSelectedRowIndex = cListItems == 0 ? -1 : cListItems - 1;
        }
    }
    ctxCur.LastRowIndexSelected = null;
    if (iLastSelectedRowIndex != -1) {
        SelectRowByIndex(ctxCur, iLastSelectedRowIndex, false);
    }
}
function GetNextRow(trCurrent, iNext) {
    var trNextRow = null;

    if (trCurrent != null && trCurrent.nodeName.toLowerCase() != "tr") {
        return null;
    }
    if (iNext == 1) {
        trNextRow = trCurrent.nextSibling;
    }
    else if (iNext == -1) {
        trNextRow = trCurrent.previousSibling;
    }
    if (trNextRow != null) {
        var strIID = trNextRow.getAttribute("iid");

        if (strIID != null && strIID.length > 0) {
            return trNextRow;
        }
        else {
            return GetNextRow(trNextRow, iNext);
        }
    }
    return trNextRow;
}
function HandleItemDelete(ei, ctxNum) {
    var ctxCur = window["ctx" + String(ctxNum)];
    var iLastSelectedRowIndex = GetLastSelectedRowIndex(ctxCur);

    if (iLastSelectedRowIndex == -1)
        iLastSelectedRowIndex = 0;
    ctxCur.LastRowIndexSelected = iLastSelectedRowIndex;
    {
        var defd;

        try {
            defd = typeof inplview.DeleteSelectedItems;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "inplview.DeleteSelectedItems";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    inplview.DeleteSelectedItems(ctxCur);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
    return false;
}
function GetItemRow2(obj) {
    var o = obj;

    while (o != null && o.nodeType == 1 && o.tagName != "BODY" && o.getAttribute("iid") == null) {
        if (typeof o.parentNode == "undefined" || o.parentNode == null || typeof o.parentNode.tagName == "undefined") {
            o = null;
            break;
        }
        o = o.parentNode;
    }
    if (o != null && o.nodeType == 1 && o.tagName == "TR")
        return o;
    return null;
}
function GetItemRow(evt) {
    if (evt == null)
        evt = window.event;
    var o = GetEventSrcElement(evt);

    return GetItemRow2(o);
}
function TooltipOfRow(tr) {
    var cs = tr.cells;
    var i = 0;

    for (i = 0; i < cs.length; i++) {
        var c = cs[i];

        if (HasCssClass(c, "ms-vb-title"))
            return (GetInnerText(c)).trim();
    }
    var iid = tr.getAttribute("iid");

    if (iid != null) {
        var r = iid.split(',');

        if (r.length > 2)
            return "" + r[1];
    }
    return null;
}
function AlertCheckOut() {
    alert(Strings.STS.L_MustCheckout_Text);
}
function UpdateAutoModeImage(evt) {
    if (evt == null)
        evt = window.event;
    if (evt != null) {
        var aTag = evt.srcElement != null ? evt.srcElement : evt.currentTarget;

        if (aTag != null && aTag.tagName == "A") {
            if (evt.type == "blur")
                RemoveCssClassFromElement(aTag, "ms-inlineEditLink");
            else if (evt.type == "focus")
                AddCssClassToElement(aTag, "ms-inlineEditLink");
        }
    }
}
function AddAutoModeTag(c, tr, image) {
    var aTag = document.createElement("A");

    SetEvent("blur", UpdateAutoModeImage, aTag);
    SetEvent("focus", UpdateAutoModeImage, aTag);
    var tab = tr;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    if (c.getAttribute("requiresCheckout") != null)
        SetEvent("click", AlertCheckOut, aTag);
    else {
        var inlineEditString = tab.getAttribute("inlineedit");

        if (inlineEditString != null) {
            aTag.href = inlineEditString.replace('{@ID}', '{' + IdFromRow(tr) + '}');
        }
    }
    var img = document.createElement("IMG");

    img.className = "s4-itm-inlineedit";
    img.src = image;
    img.border = 0;
    img.alt = Strings.STS.L_Edit_Text;
    aTag.appendChild(img);
    c.appendChild(aTag);
}
function GetItemRowCbx(tr) {
    var cbx = null;

    if (tr != null && tr.cells != null && tr.cells.length > 0) {
        var c = tr.cells[0];

        cbx = c.querySelector(".s4-itm-cbx");
    }
    return cbx;
}
function GetEcbTdFromRow(tr) {
    var elmEcbTd = null;

    if (tr != null) {
        elmEcbTd = tr.querySelector("td[IsECB=\"TRUE\"]");
    }
    return elmEcbTd;
}
function GetEcbDivFromEcbTd(elmEcbTd) {
    return elmEcbTd == null ? null : elmEcbTd.querySelector("div.ms-vb.itx");
}
function GetEcbAffordanceDivFromRow(elmTr) {
    return elmTr == null ? null : elmTr.querySelector("div.ms-list-itemLink");
}
function UpdateAutoMode(tr) {
    if (tr != null) {
        var ctxCur = CtxFromRow(tr);

        if (ctxCur == null || typeof ctxCur.InlineEdit == "undefined" || !Boolean(ctxCur.InlineEdit))
            return;
        if (tr.cells != null && tr.cells.length > 0) {
            var c = tr.cells[0];

            if (c.innerHTML == "" && c.width == "1%") {
                if (c.getAttribute("requiresCheckout") == null)
                    c.onclick = ClickToEdit;
                AddAutoModeTag(c, tr, "/_layouts/15/images/edititem.gif?rev=23");
            }
            else if (tr.cells.length > 1) {
                c = tr.cells[1];
                if (c.innerHTML == "" && c.width == "1%") {
                    if (c.getAttribute("requiresCheckout") == null)
                        c.onclick = ClickToEdit;
                    AddAutoModeTag(c, tr, "/_layouts/15/images/edititem.gif?rev=23");
                }
            }
        }
    }
}
function ClickToEdit(evt) {
    var tr = GetItemRow(evt);

    if (tr != null && tr.cells.length > 1) {
        var c = tr.cells[1];
        var a = c.firstChild;

        if (a != null) {
            var img = a.firstChild;

            if (img != null && img.tagName == "IMG")
                img.src = "/_layouts/15/images/spinnyrefresh.gif?rev=23";
        }
    }
    if (window.event != null)
        window.event.cancelBubble = true;
    else if (evt != null)
        evt.stopPropagation();
}
function HideItemCbx(evt) {
    if (evt == null)
        evt = window.event;
    var tr = GetItemRow(evt);
    var itemCbx = GetItemRowCbx(tr);

    if (itemCbx != null && itemCbx.tagName == "INPUT") {
        itemCbx.style.top = '';
        itemCbx.style.position = '';
        itemCbx.onmouseout = null;
    }
}
function DisplayItemCbx(evt) {
    if (evt == null)
        evt = window.event;
    var tr = GetItemRow(evt);
    var itemCbx = GetItemRowCbx(tr);

    if (itemCbx != null && itemCbx.tagName == "INPUT") {
        itemCbx.style.top = '0px';
        itemCbx.style.position = 'relative';
        itemCbx.onmouseout = HideItemCbx;
    }
}
function Log(str) {
    var div = document.createElement("DIV");

    div.innerHTML = str;
    document.body.appendChild(div);
}
function _ToggleAllItems(evt, cbx, ctxNum) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectOrDeselectAllStart);
    if (evt == null)
        evt = window.event;
    MenuHtc_hide();
    ToggleAllItems2(cbx, ctxNum, cbx.checked);
    if (window.event != null)
        window.event.cancelBubble = true;
    else
        evt.stopPropagation();
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectOrDeselectAllEnd);
    return false;
}
function ToggleAllItems2(cbx, ctxNum, f) {
    var ctxCur = window["ctx" + String(ctxNum)];

    if (ctxCur == null) {
        cbx.checked = false;
        return;
    }
    if (ctxCur.inGridMode) {
        SPGridToggleAllItems(ctxCur);
        return;
    }
    var tb = cbx;

    while (tb.tagName != "TABLE")
        tb = tb.parentNode;
    var rows = tb.rows;
    var totalItems = CountTotalItems(ctxCur);

    if (totalItems == 0) {
        cbx.checked = false;
        return;
    }
    if (f) {
        if (totalItems > g_MaximumSelectedItemsAllowed) {
            cbx.checked = false;
            alert(Strings.STS.L_BulkSelection_TooManyItems);
            return;
        }
        SelectAllItems(ctxCur, rows);
    }
    else
        DeselectAllItems(ctxCur, rows, true);
}
function SelectAllItems(ctxCur, rows) {
    if (ctxCur == null || rows == null)
        return;
    var i;
    var lastIdx = ctxCur.LastSelectableRowIdx;

    for (i = 1; i < lastIdx; i++) {
        var r = rows[i];
        var iid = r.getAttribute("iid");

        if (iid != null) {
            if (ItemIsCurrentlyVisible(r))
                ToggleItemRowSelection2(ctxCur, r, true, false, true);
        }
    }
    ToggleItemRowSelection2(ctxCur, rows[lastIdx], true, true, true);
}
function DeselectAllItems(ctxCur, rows, bNeedsRefresh) {
    if (ctxCur == null)
        return;
    var i;
    var lastIdx = ctxCur.LastSelectableRowIdx;
    var startIdx = 1;

    if (ctxCur.BaseViewID == "MapView") {
        startIdx = 0;
        var tab = document.getElementById("mapviewListTable_" + ctxCur.wpq);

        if (tab == null)
            return;
        rows = tab.rows;
        lastIdx = rows.length - 1;
    }
    if (rows == null)
        return;
    for (i = startIdx; i <= lastIdx; i++) {
        var r = rows[i];
        var iid = r.getAttribute("iid");

        if (iid != null && typeof iid == "string") {
            var rgiid = iid.split(",");

            SelectListItem(ctxCur, iid, rgiid, r, false, true);
        }
    }
    if (bNeedsRefresh)
        RefreshCommandUI();
}
function DeselectCollapsedGroup(ctxCur, tbody) {
    if (tbody == null)
        return;
    var rows = tbody.rows;
    var lastIdx = GetLastSelectableRowIdx(tbody, ItemHasiid);

    if (Boolean(rows) && lastIdx != -1) {
        for (var i = 0; i < lastIdx; i++) {
            var row = rows[i];

            if (ItemHasiid(row))
                ToggleItemRowSelection2(ctxCur, row, false, false, false);
        }
        ToggleItemRowSelection2(ctxCur, rows[lastIdx], false, true, false);
    }
}
function HandleSingleGroupByRow(ctxCur, child, fOpen) {
    if (ctxCur == null || child == null)
        return;
    var iid = child.getAttribute("iid");

    if (iid == null)
        return;
    if (!fOpen) {
        ctxCur.TotalListItems--;
        if (ItemIsCurrentlySelected(ctxCur, iid, child))
            ToggleItemRowSelection2(ctxCur, child, false, true, false);
    }
    else {
        ctxCur.TotalListItems++;
    }
}
function RefreshCommandUI() {
    if (IsFullNameDefined('SP.Ribbon.PageManager')) {
        var instance = SP.Ribbon.PageManager.get_instance();

        if (instance != null)
            (instance.get_commandDispatcher()).executeCommand(Commands.CommandIds.ApplicationStateChanged, null);
    }
}
function _CommandUIExecuteCommand(commandId) {
    if (IsFullNameDefined('SP.Ribbon.PageManager')) {
        var instance = SP.Ribbon.PageManager.get_instance();

        if (instance != null)
            (instance.get_commandDispatcher()).executeCommand(commandId, null);
    }
}
function OnItemSelectionChanged(ctxArg, strGroupName, bUpdateRibbon) {
    var ctxCur = ctxArg;

    if (FV4UI()) {
        var _clvpsInited = function() {
            var args = [];

            if (typeof _ribbon != 'undefined' && _ribbon != null) {
                var clvp = ctxCur.clvp;

                if (clvp != null) {
                    if (bUpdateRibbon) {
                        clvp.EnsureEcbInfo(RefreshCommandUI, args, strGroupName);
                    }
                    else {
                        clvp.EnsureEcbInfo(null, null, strGroupName);
                    }
                }
            }
        };

        EnsureScript("inplview", typeof InitAllClvps, _clvpsInited);
    }
}
function IdFromRow(tr) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");

    return rgiid[1];
}
function CtxFromRow(tr) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");
    var ctxNum = rgiid[0];

    return window["ctx" + ctxNum];
}
function GroupNameFromRow(tr) {
    var parentNode = tr.parentNode;
    var str = parentNode.id;

    if (str == null || str == "") {
        var siblingNode = parentNode.previousSibling;

        if (siblingNode != null && siblingNode.childNodes.length == 0 && siblingNode.tagName == parentNode.tagName)
            str = siblingNode.id;
    }
    if (str == null || str == "")
        return null;
    var strGroupName = str.substr(4, str.length - 6);

    return strGroupName == "" ? null : strGroupName;
}
function GroupStringFromGroupName(strGroupName) {
    if (strGroupName == null || strGroupName == "")
        return null;
    var ele = document.getElementById("titl" + strGroupName + "_");

    if (ele == null)
        return null;
    var strGroupString = ele.getAttribute("groupString");

    return strGroupString == "" ? null : strGroupString;
}
var previousClickedItemRow;

function IsCallOutOn() {
    return typeof CalloutManager === "object" && typeof CalloutManager.isAtLeastOneCalloutOn === "function" && CalloutManager.isAtLeastOneCalloutOn();
}
function SingleItemSelectByElement(tr, fAddToSelection) {
    return SingleItemSelectInternal(null, false, tr, fAddToSelection);
}
function MultiItemSelect(evt) {
    var tr = GetItemRow(evt);

    if (tr == null)
        return false;
    var ctxCur = CtxFromRow(tr);
    var striid = tr.getAttribute("iid");
    var indexClickedOn = GetIndexFromIID(ctxCur, striid);
    var strLastSelectedIID = ctxCur.LastSelectedItemIID;
    var indexLastSelected = GetLastSelectedRowIndex(ctxCur);
    var trLastSelectedRow = GetLastSelectedRow(ctxCur);
    var iStart = indexClickedOn < indexLastSelected ? indexClickedOn : indexLastSelected;
    var iEnd = indexClickedOn > indexLastSelected ? indexClickedOn : indexLastSelected;

    if (!evt.ctrlKey) {
        if (CountSelectedItems(ctxCur) > 0) {
            var tab = tr;

            while (tab.tagName != "TABLE") {
                tab = tab.parentNode;
            }
            var rows = tab.rows;

            for (var rowIdx = 0; rowIdx < rows.length; rowIdx++) {
                var r = rows[rowIdx];

                if (ItemIsSelectable(r))
                    ToggleItemRowSelection2(ctxCur, r, false, false, false);
            }
        }
    }
    for (var i = iStart; i <= iEnd; i++) {
        SelectRowByIndex(ctxCur, i, true);
    }
    FocusRow(ctxCur, strLastSelectedIID, trLastSelectedRow);
    return false;
}
function OpenCalloutAndSelectItem(launchPoint, curEvent, node, listItemID) {
    var elmTr = GetAncestor(launchPoint, "TR");

    SingleItemSelectInternal(curEvent, false, elmTr, false);
    OpenCallout(launchPoint, curEvent, node, listItemID);
}
function SingleItemSelect(evt) {
    if (evt == null)
        evt = window.event;
    var fShiftPressed = evt.shiftKey;
    var fCtrlPressed = evt.ctrlKey;

    if (fShiftPressed) {
        MultiItemSelect(evt);
        return false;
    }
    else {
        var fRet = SingleItemSelectInternal(evt, true, null, fCtrlPressed);

        return fCtrlPressed ? false : fRet;
    }
}
function SingleItemSelectInternal(evt, fInvokedByMouse, tr, fAddToSelection) {
    var fSelect = true;

    if (fInvokedByMouse) {
        var o = GetEventSrcElement(evt);

        if (o != null && ElementContainsLink(o))
            return undefined;
        if (IsCallOutOn()) {
            return true;
        }
        tr = GetItemRow(evt);
        if (clearECBMenu(o, tr == null ? null : CtxFromRow(tr))) {
            CancelEvent(evt);
            return false;
        }
    }
    if (tr == null) {
        return false;
    }
    var tab = tr;

    while (tab.tagName != "TABLE")
        tab = tab.parentNode;
    var rows = tab.rows;
    var ctxCur = CtxFromRow(tr);

    if (fInvokedByMouse) {
        var iid = tr.getAttribute("iid");
        var rgiid = iid.split(",");

        fSelect = !ItemIsCurrentlySelected(ctxCur, iid, tr);
        if (!fAddToSelection && CountSelectedItems(ctxCur) > 1) {
            fSelect = true;
        }
    }
    if (fSelect && !fAddToSelection) {
        if (CountSelectedItems(ctxCur) > 0) {
            var rowIdx;
            var rowsSelected = tab == null ? null : tab.querySelectorAll("tr[class*='s4-itm-selected']");
            var cSelected = rowsSelected == null ? 0 : rowsSelected.length;

            for (rowIdx = 0; rowIdx < cSelected; rowIdx++) {
                var r = rowsSelected[rowIdx];
                var iidRow = r.getAttribute("iid");

                if (ItemIsSelectable(r) && ItemIsCurrentlySelected(ctxCur, iidRow, r)) {
                    ToggleItemRowSelection2(ctxCur, r, false, false, false);
                }
            }
        }
    }
    ToggleItemRowSelection2(ctxCur, tr, fSelect, true, false);
    UpdateSelectAllCbx(ctxCur, fSelect);
    previousClickedItemRow = tr;
    if (fInvokedByMouse) {
        CancelEvent(evt);
    }
    return true;
}
function Point(xCoord, yCoord) {
    this.x = xCoord;
    this.y = yCoord;
}
function GetCellCoordinates(cell) {
    var cellIdx = 0;
    var cellIdy = 0;

    while (cell.tagName != "TD")
        cell = cell.parentNode;
    var curCell = cell.previousSibling;

    while (curCell != null) {
        cellIdx++;
        curCell = curCell.previousSibling;
    }
    curCell = cell.parentNode.previousSibling;
    while (curCell != null) {
        cellIdy++;
        curCell = curCell.previousSibling;
    }
    return new Point(cellIdx, cellIdy);
}
function ElementContainsLink(obj) {
    while (obj != null && obj.tagName != "TD") {
        if (obj.tagName == "A")
            return true;
        obj = obj.parentNode;
    }
    return false;
}
function clearECBMenu(src, ctxt) {
    if (g_menuHtc_lastMenu == null)
        return false;
    if (src != null) {
        var td = src;

        while (td != null && td.tagName != "TD")
            td = td.parentNode;
        var currentRow = GetItemRow2(td);

        MenuHtc_hide();
        var fIsClientSideRendered = ctxt != null && ctxt.IsClientRendering == true;

        if (!fIsClientSideRendered && tdHasEcbMenu(td))
            OnChildItem(td);
    }
    return true;
}
function tdHasEcbMenu(td) {
    var i;

    for (i = 0; i < td.childNodes.length; i++) {
        var child = td.childNodes[i];

        if (child.nodeType == 1 && child.tagName == "DIV") {
            var ctxVar = child.getAttribute("CTXName");

            if (ctxVar != null && ctxVar != "")
                return true;
        }
    }
    return false;
}
function ToggleItemRowSelection(evt, tr) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectItemStart);
    if (evt == null)
        evt = window.event;
    if (evt.keyCode == Sys.UI.Key.enter) {
        return false;
    }
    MenuHtc_hide();
    if (tr == null)
        tr = GetItemRow(evt);
    var ctxCur = CtxFromRow(tr);
    var iid = tr.getAttribute("iid");
    var fSelect = !ItemIsCurrentlySelected(ctxCur, iid, tr);

    if (fSelect && CountSelectedItems(ctxCur) == g_MaximumSelectedItemsAllowed) {
        var itemCbx = GetItemRowCbx(tr);

        itemCbx.checked = false;
        alert(Strings.STS.L_BulkSelection_TooManyItems);
        CancelEvent(evt);
        return true;
    }
    ToggleItemRowSelection2(ctxCur, tr, fSelect, true, false);
    UpdateSelectAllCbx(ctxCur, fSelect);
    previousClickedItemRow = tr;
    if (window.event != null)
        window.event.cancelBubble = true;
    else
        evt.stopPropagation();
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectItemEnd);
    return true;
}
function ToggleItemRowSelection2(ctxCur, tr, fSelect, fUpdateRibbon, dontSetFocus) {
    var iid = tr.getAttribute("iid");
    var rgiid = iid.split(",");

    if (rgiid[1] == "")
        return false;
    SelectListItem(ctxCur, iid, rgiid, tr, fSelect, dontSetFocus);
    OnItemSelectionChanged(ctxCur, GroupNameFromRow(tr), fUpdateRibbon);
    return true;
}
function UpdateSelectAllCbx(ctxCur, fSelect) {
    if (ctxCur == null || ctxCur.SelectAllCbx == null)
        return;
    ctxCur.SelectAllCbx.checked = false;
    if (fSelect) {
        var total = CountTotalItems(ctxCur);
        var selectedLocal = CountSelectedItems(ctxCur);

        if (selectedLocal == total && selectedLocal > 0)
            ctxCur.SelectAllCbx.checked = true;
    }
}
function SelectListItem(ctxArg, iid, rgiid, tr, fSelect, dontSetFocus) {
    var cbx = GetItemRowCbx(tr);

    if (cbx == null) {
        return;
    }
    cbx.checked = fSelect;
    if (typeof ctxArg.dictSel == "undefined")
        ctxArg.dictSel = [];
    if (fSelect) {
        AddCssClassToElement(tr, "s4-itm-selected");
        if (ctxArg.dictSel[iid] == null) {
            ctxArg.CurrentSelectedItems++;
            ctxArg.dictSel[iid] = {
                id: rgiid[1],
                fsObjType: rgiid[2]
            };
        }
        if (cbx.nodeName.toUpperCase() != 'INPUT') {
            cbx.setAttribute('aria-checked', "true");
        }
    }
    else {
        RemoveCssClassFromElement(tr, "s4-itm-selected");
        if (ctxArg.dictSel[iid] != null) {
            delete ctxArg.dictSel[iid];
            ctxArg.CurrentSelectedItems--;
        }
        if (cbx.nodeName.toUpperCase() != 'INPUT') {
            cbx.setAttribute('aria-checked', "false");
        }
    }
    if (!dontSetFocus) {
        FocusRow(ctxArg, iid, tr);
    }
}
function FocusRow(ctxArg, iid, tr) {
    if (ctxArg == null)
        return;
    ctxArg.LastSelectedItemIID = iid;
    var cbx = GetItemRowCbx(tr);

    if (cbx != null) {
        if (ctxArg.RowFocusTimerID != null) {
            clearTimeout(ctxArg.RowFocusTimerID);
        }
        ctxArg.RowFocusTimerID = setTimeout(function() {
            SetFocusOnRowDelayed(ctxArg, cbx);
        }, 11);
    }
}
function SetFocusOnRowDelayed(ctxArg, cbx) {
    if (cbx == null || ctxArg == null)
        return;
    cbx.focus();
    if (browseris.webKit) {
        var inViewPort = ElementInViewportVertical(cbx, document.getElementById("s4-workspace"));

        if (inViewPort != g_InViewPort) {
            var fScrollTop = inViewPort == g_OutOfViewPortCloserToTop ? true : false;

            cbx.scrollIntoView(fScrollTop);
        }
    }
    ctxArg.RowFocusTimerID = null;
}
function CountTotalItems(ctxCur) {
    if (ctxCur.TotalListItems == null)
        ctxCur.TotalListItems = 0;
    return ctxCur.TotalListItems;
}
function CountSelectedItems(ctxCur) {
    if (ctxCur.CurrentSelectedItems == null)
        ctxCur.CurrentSelectedItems = 0;
    return ctxCur.CurrentSelectedItems;
}
function GetCtxRgiidFromIid(iid) {
    if (iid == null)
        return null;
    var rgiid = iid.split(",");

    if (rgiid.length != 3)
        return null;
    if (rgiid[1] == "")
        return null;
    var ctxNum = rgiid[0];
    var ctxT = window["ctx" + ctxNum];

    if (ctxT == null)
        return null;
    if (typeof ctxT.dictSel == "undefined")
        ctxT.dictSel = [];
    if (ctxT.CurrentSelectedItems == null)
        ctxT.CurrentSelectedItems = 0;
    return new CtxRgiid(ctxT, rgiid);
}
function GetCurrentCtx() {
    var ele = document.getElementById("_wpSelected");

    if (ele == null)
        return null;
    var strId = ele.getAttribute("value");

    if (strId == null || strId == "")
        return null;
    strId = strId.substr(12);
    ele = document.getElementById(strId);
    if (ele == null)
        return null;
    var strViewId;

    if (typeof _spWebPartComponents != "undefined" && _spWebPartComponents != null && _spWebPartComponents[strId] && _spWebPartComponents[strId].storageId) {
        strViewId = _spWebPartComponents[strId].storageId;
    }
    else {
        strViewId = ele.getAttribute("WebPartID");
    }
    if (strViewId == null)
        return null;
    strViewId = strViewId.toUpperCase();
    var ctxNum = g_ViewIdToViewCounterMap["{" + strViewId + "}"];

    if (ctxNum == null)
        return null;
    var ctxT = window["ctx" + ctxNum];

    return ctxT;
}
function GetLastSelectableRowIdx(elt, fn) {
    if (elt == null || fn == null)
        return -1;
    var lastRowIdx;
    var rows = elt.rows;

    for (lastRowIdx = rows.length - 1; lastRowIdx >= 0; lastRowIdx--) {
        var row = rows[lastRowIdx];

        if (fn(row))
            return lastRowIdx;
    }
    return -1;
}
function UpdateCtxLastSelectableRow(ctxCur, tab) {
    if (ctxCur == null || tab == null)
        return;
    ctxCur.LastSelectableRowIdx = 0;
    var lastIdx = GetLastSelectableRowIdx(tab, ItemIsSelectable);

    if (lastIdx != -1)
        ctxCur.LastSelectableRowIdx = lastIdx;
}
function DeselectAllWPItems() {
    var ctxCur = GetCurrentCtx();
    var clvp;

    if (ctxCur == null || (clvp = ctxCur.clvp) == null || clvp.tab == null)
        return;
    var tab = clvp.tab;
    var selectAllCbx = getSelectAllCbxFromTable(tab);

    if (selectAllCbx == null)
        return;
    selectAllCbx.checked = false;
    if (CountSelectedItems(ctxCur) > 0)
        DeselectAllItems(ctxCur, tab.rows, false);
}
function callOpenBreadcrumbMenu(evt, anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSBreadcrumbStart);
    if (evt == null)
        evt = window.event;
    evt.cancelBubble = true;
    if (typeof evt.stopPropagation != "undefined")
        evt.stopPropagation();
    var fn = function() {
        SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width);
    };
    var defd;

    try {
        defd = typeof SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSBreadcrumbEnd);
}
function HasCssClass(e, c, fRemove) {
    var cn = e.className;

    if (cn == null)
        return false;
    var rg = cn.split(" ");
    var i;

    for (i = 0; i < rg.length; i++) {
        if (rg[i] == c) {
            if (fRemove) {
                rg.splice(i, 1);
                e.className = rg.join(" ");
            }
            return true;
        }
    }
    return false;
}
function AddSpaceToEmptyTDs(tr) {
    var i;

    if (browseris.ie7down && tr != null) {
        if (tr.getAttribute("addEmptySpace") == null)
            tr.setAttribute("addEmptySpace", "true");
        else
            return;
        for (i = 0; i < tr.childNodes.length; i++) {
            var child = tr.childNodes[i];

            if (child.nodeType == 1 && child.tagName == "TD" && child.width != "1%") {
                if (child.innerHTML == "")
                    child.innerHTML = "&#8203;";
                else if (child.innerText == "") {
                    while (child != null && child.nodeType == 1 && child.innerHTML != "") {
                        child = child.firstChild;
                    }
                    if (child != null && child.nodeType == 1 && child.innerHTML == "" && (child.tagName == "SPAN" || child.tagName == "DIV" || child.tagName == "NOBR"))
                        child.innerHTML = "&#8203;";
                }
            }
        }
    }
}
function AddBorderToLastCell(r) {
    if (r.getAttribute("setEdgeBorder") != null)
        return;
    var cells = r.cells;

    if (cells != null && cells.length > 0) {
        if (browseris.ie7down)
            cells[0].className += "";
        var cell = cells[cells.length - 1];

        if (cell != null) {
            if (cell.className != "")
                cell.className += " ms-vb-lastCell";
            else
                cell.className = "ms-vb-lastCell";
        }
    }
    r.setAttribute("setEdgeBorder", "true");
}
function AddCssClassToElement(e, c) {
    var cn = e.className;

    if (cn != null) {
        if (!HasCssClass(e, c))
            e.className = e.className + " " + c;
    }
    else {
        e.className = c;
    }
}
function RemoveCssClassFromElement(e, c) {
    HasCssClass(e, c, true);
}
function AddGallery_TypeOf(value) {
    if (value != null) {
        var valueType = typeof value;

        if (valueType == 'object') {
            if (valueType.constructor != null) {
                var constructorAsString = value.constructor.toString();
                var firstSpace = constructorAsString.indexOf(' ');
                var firstParen = constructorAsString.indexOf('(');
                var typeName = constructorAsString.substr(firstSpace + 1, firstParen - firstSpace - 1);

                return typeName;
            }
        }
        return valueType;
    }
    return null;
}
function IsLanguageSupportedInSilverlight(language) {
    if (language == 1025 || language == 1037 || language == 1054 || language == 1081) {
        return false;
    }
    return true;
}
function IsSilverlightInstalled(version) {
    if (typeof version == "undefined")
        version = null;
    var isVersionSupported = false;
    var container = null;

    try {
        var control = null;
        var tryNS = false;

        if (window.ActiveXObject != null) {
            try {
                control = new ActiveXObject('AgControl.AgControl');
                if (version === null) {
                    isVersionSupported = true;
                }
                else if (typeof control.IsVersionSupported != "undefined" && control.IsVersionSupported(version)) {
                    isVersionSupported = true;
                }
                control = null;
            }
            catch (e) {
                tryNS = true;
            }
        }
        else {
            tryNS = true;
        }
        if (tryNS) {
            var plugin = typeof navigator.plugins != "undefined" ? navigator.plugins["Silverlight Plug-In"] : null;

            if (plugin != null) {
                if (version === null) {
                    isVersionSupported = true;
                }
                else {
                    var actualVer = typeof plugin.description == "string" ? plugin.description : "";

                    if (actualVer === "1.0.30226.2")
                        actualVer = "2.0.30226.2";
                    var actualVerArray = actualVer.split(".");

                    while (actualVerArray.length > 3) {
                        actualVerArray.pop();
                    }
                    while (actualVerArray.length < 4) {
                        actualVerArray.push(0);
                    }
                    var reqVerArray = version.split(".");

                    while (reqVerArray.length > 4) {
                        reqVerArray.pop();
                    }
                    var requiredVersionPart;
                    var actualVersionPart;
                    var index = 0;

                    do {
                        requiredVersionPart = parseInt(reqVerArray[index]);
                        actualVersionPart = parseInt(actualVerArray[index]);
                        index++;
                    } while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);
                    if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart)) {
                        isVersionSupported = true;
                    }
                }
            }
        }
    }
    catch (e) {
        isVersionSupported = false;
    }
    return isVersionSupported;
}
function IsAddGalleryProviderEnabled(rooturl, providername) {
    var req;
    var ret = true;

    try {
        if (window.XMLHttpRequest != null) {
            req = new XMLHttpRequest();
            req.open("HEAD", rooturl + providername + ".deny.xml", false);
            req.send();
            if (req.status == 200) {
                ret = false;
            }
        }
    }
    catch (e) { }
    return ret;
}
function SilverlightBasedCreateHandler(scope) {
    var curtime = new Date();
    var pageurl;
    var sitecollectionurl;
    var siteurl;
    var serverLanguage;
    var currentLanguage;

    if (typeof _spPageContextInfo != "undefined") {
        if (_spPageContextInfo.siteServerRelativeUrl != null) {
            sitecollectionurl = _spPageContextInfo.siteServerRelativeUrl;
            if (sitecollectionurl.charAt(sitecollectionurl.length - 1) != "/") {
                sitecollectionurl = sitecollectionurl + "/";
            }
        }
        else {
            return true;
        }
        if (_spPageContextInfo.webServerRelativeUrl != null) {
            siteurl = _spPageContextInfo.webServerRelativeUrl;
            if (siteurl.charAt(siteurl.length - 1) != "/") {
                siteurl = siteurl + "/";
            }
            pageurl = siteurl + "_layouts/15/AddGallery.aspx";
        }
        else {
            return true;
        }
        if (Boolean(_spPageContextInfo.webLanguage)) {
            serverLanguage = _spPageContextInfo.webLanguage;
        }
        else {
            return true;
        }
        if (Boolean(_spPageContextInfo.currentLanguage)) {
            currentLanguage = _spPageContextInfo.currentLanguage;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
    if (FV4UI() && IsSilverlightInstalled('3.0.40624.0') && IsLanguageSupportedInSilverlight(serverLanguage) && IsLanguageSupportedInSilverlight(currentLanguage)) {
        if (scope == null) {
            scope = 'All';
        }
        if (AddGallery_TypeOf(scope) != 'string') {
            return true;
        }
        scope = scope.toLowerCase();
        if (scope == 'page' || scope == 'publishingpage') {
            return true;
        }
        var providerDetails = [];

        providerDetails = scope.split(':');
        if (providerDetails.length == 2 && providerDetails[0] == 'provider') {
            if (!IsAddGalleryProviderEnabled(sitecollectionurl + "_layouts/15/AddGalleryProviders/", providerDetails[1])) {
                return true;
            }
        }
        var dialogClosedCallback = function(result, args) {
            if (FV4UI()) {
                if (Boolean(result)) {
                    if (Boolean(args)) {
                        window.location = args;
                    }
                    else {
                        window.location.reload();
                    }
                }
            }
            else {
                var stringResult = typeof result == "string" ? result : null;

                if (stringResult != null && stringResult != "") {
                    window.location.href = stringResult;
                }
                else {
                    window.location.reload();
                }
            }
        };
        var showDialogCallback = function() {
            var args = {
                scope: scope,
                currentWeb: siteurl,
                currentSiteCollection: sitecollectionurl,
                clickDateTime: curtime
            };
            var windowWidth = scope == 'page' ? 660 : 1012;
            var windowHeight = scope == 'page' ? 360 : 600;

            if (FV4UI()) {
                var options = {
                    width: windowWidth,
                    height: windowHeight,
                    resizable: true,
                    status: false,
                    menubar: false,
                    help: false,
                    url: pageurl,
                    dialogReturnValueCallback: dialogClosedCallback,
                    args: args
                };
                var dialog = SP.UI.ModalDialog.showModalDialog(options);
            }
            else {
                var features;

                if (window.showModalDialog != null) {
                    features = "dialogWidth:" + String(windowWidth) + "px;dialogHeight:" + String(windowHeight) + "px;resizable:yes;status:no;menubar:no;help:no";
                }
                else {
                    features = "width=" + String(windowWidth) + ",height=" + String(windowHeight) + ",resizable=yes,status=no,menubar=no,help=no";
                }
                var result = commonShowModalDialog(pageurl, features, dialogClosedCallback, args);
            }
        };
        var defined;

        try {
            defined = typeof SP.UI.ModalDialog.showModalDialog;
        }
        catch (e) {
            defined = 'undefined';
        }
        EnsureScript('SP.UI.Dialog.js', defined, showDialogCallback);
        return false;
    }
    return true;
}
function LaunchCreateHandler(scope) {
    if (typeof __CreateHandler != "undefined" && __CreateHandler != null) {
        var result = __CreateHandler(scope);

        return result;
    }
    else {
        try {
            return SilverlightBasedCreateHandler(scope);
        }
        catch (e) {
            return true;
        }
    }
}
var isdlg;

function QstringStruct(strQuery) {
    if (strQuery == null) {
        strQuery = "";
    }
    if (strQuery.indexOf("?") == 0) {
        strQuery = strQuery.substring(1);
    }
    this.nonFilterParams = new Object();
    this.filterParams = new Object();
    var params = strQuery.split("&");
    var i;

    for (i = 0; i < params.length; i++) {
        var param = params[i];
        var keyval = param.split("=");

        if (keyval.length == 2) {
            if (keyval[0].search("^Filter") != -1) {
                var fieldNumber = keyval[0].match(new RegExp("[0-9]*$"));
                var filter;

                if (typeof this.filterParams[fieldNumber] != "undefined") {
                    filter = this.filterParams[fieldNumber];
                }
                else {
                    filter = new Object();
                    this.filterParams[fieldNumber] = filter;
                }
                var fieldName = keyval[0].match(new RegExp("^Filter[^0-9]*"));

                filter[fieldName] = keyval[1];
            }
            else {
                this.nonFilterParams[keyval[0]] = keyval[1];
            }
        }
    }
}
function QstringStructToString() {
    var output = this.toArray();

    return "?" + output.join("&");
}
function QstringStructToArray() {
    var output = [];
    var key;
    var keyValuePair;
    var filterIdx = 1;
    var filterParams_length = typeof this.filterParams.length == "number" ? this.filterParams.length : 0;

    for (key in this.filterParams) {
        var filter = this.filterParams[key];

        for (key in filter) {
            keyValuePair = [];
            keyValuePair.push(key);
            keyValuePair.push(filterIdx);
            keyValuePair.push("=");
            keyValuePair.push(filter[key]);
            output.push(keyValuePair.join(""));
        }
        filterIdx++;
    }
    for (key in this.nonFilterParams) {
        keyValuePair = [];
        keyValuePair.push(key);
        keyValuePair.push("=");
        keyValuePair.push(this.nonFilterParams[key]);
        output.push(keyValuePair.join(""));
    }
    return output;
}
function Diff() {
}
function ReconcileQstringFilters(strUrl1, strUrl2) {
    var qUrls = [];

    qUrls.push(new QstringStruct(strUrl1));
    qUrls.push(new QstringStruct(strUrl2));
    var output = [];
    var i, j;
    var key;
    var keyValuePair;

    for (i = 0; i < qUrls.length; i++) {
        for (key in qUrls[i].nonFilterParams) {
            if (i == 0 || typeof qUrls[0].nonFilterParams[key] == 'undefined' && i == 1) {
                keyValuePair = [];
                keyValuePair.push(key);
                keyValuePair.push("=");
                keyValuePair.push(qUrls[i].nonFilterParams[key]);
                output.push(keyValuePair.join(""));
            }
        }
    }
    var filterIdx = 1;
    var trackEachFilterFieldName = new Object();

    for (i = 0; i < qUrls.length; i++) {
        for (j in qUrls[i].filterParams) {
            var filter = qUrls[i].filterParams[j];
            var filter_FilterField = typeof filter.FilterField == "string" ? filter.FilterField : null;

            if (filter_FilterField == null)
                filter_FilterField = typeof filter.FilterFields == "string" ? filter.FilterFields : null;
            if (filter_FilterField != null && typeof trackEachFilterFieldName[filter_FilterField] == 'undefined') {
                for (key in filter) {
                    keyValuePair = [];
                    keyValuePair.push(key);
                    keyValuePair.push(filterIdx);
                    keyValuePair.push("=");
                    keyValuePair.push(filter[key]);
                    output.push(keyValuePair.join(""));
                }
                filterIdx++;
                trackEachFilterFieldName[filter.FilterField] = filter;
            }
        }
    }
    return output.join("&");
}
function PageActionClick(elem) {
    EnsureScript("ribbon", TypeofFullName("SP.Ribbon.PageStateActionButton"), function() {
        SP.Ribbon.PageStateActionButton.sendCommand();
    });
}
function ShowWebPartAdder(zoneId) {
    LoadWPAdderOnDemand();
    ExecuteOrDelayUntilEventNotified(function() {
        var adder = window.WPAdder;

        if (adder != null) {
            adder._showCategoryColumn(true);
            adder._setZone(zoneId);
            adder.show();
        }
    }, "_spEventWebPartAdderReady");
}
function GenerateXMLArray(jsArray, itemTag) {
    var buffer = [];

    if (jsArray != null) {
        var beginTag = "<" + itemTag + ">";
        var endTag = "</" + itemTag + ">";

        for (var itm in jsArray) {
            buffer.push(beginTag);
            buffer.push(jsArray[itm]);
            buffer.push(endTag);
        }
    }
    return buffer.join("");
}
function GetAncestor(elem, tag) {
    while (elem != null && elem.tagName != tag) {
        elem = elem.parentNode;
    }
    return elem;
}
function GetAncestorByTagNames(elem, tagNames) {
    if (elem == null)
        return null;
    var ancestor = elem.parentNode;

    while (ancestor != null) {
        if (Array.contains(tagNames, ancestor.tagName))
            break;
        ancestor = ancestor.parentNode;
    }
    return ancestor;
}
function StURLNormalize(stURL) {
    if (stURL.substr(0, 2) == "\\\\" || stURL.substr(0, 2) == "\/\/")
        stURL = "file:" + stURL;
    if (stURL.substr(0, 5) == "file:")
        stURL = stURL.replace(/\\/g, "\/");
    return stURL;
}
function QuickLaunchInitDroppable() {
    if (Boolean(g_QuickLaunchControlIds)) {
        var droppableItems = [];

        for (var i = 0; i < g_QuickLaunchControlIds.length; i++) {
            var qlId = g_QuickLaunchControlIds[i];
            var qlElement = document.getElementById(qlId);

            if (Boolean(qlElement)) {
                var dropNodes = qlElement.querySelectorAll(".ms-quicklaunch-dropNode");

                if (Boolean(dropNodes)) {
                    for (var j = 0; j < dropNodes.length; j++) {
                        var dropNode = dropNodes[j];

                        droppableItems.push(dropNode);
                    }
                }
            }
        }
        if (droppableItems.length > 0) {
            EnsureScriptParams('DragDrop.js', "InitMenuItemAsDroppable", droppableItems);
        }
    }
}
var g_listItemCache;

function GetListItemByIID(iid) {
    if (typeof g_listItemCache[iid] !== "undefined")
        return g_listItemCache[iid];
    var ctxRgiid = GetCtxRgiidFromIid(iid);
    var ctxT = ctxRgiid.ctx;
    var listItemID = ctxRgiid.rgiid[1];

    if (typeof ctxT === 'undefined' || ctxT === null || typeof ctxT.ListData === 'undefined' || ctxT.ListData === null || typeof ctxT.ListData.Row === 'undefined' || ctxT.ListData.Row === null) {
        throw "Error: ctx ListData could not be found";
    }
    for (var i = 0; i < ctxT.ListData.Row.length; i++) {
        if (ctxT.ListData.Row[i].ID === listItemID) {
            return g_listItemCache[iid] = ctxT.ListData.Row[i];
        }
    }
    return g_listItemCache[iid] = null;
}
function FixRibbonAndPageLayout(ribbonMinimized) {
    var ribbonElement = GetCachedElement("s4-ribbonrow");

    if (Boolean(ribbonElement)) {
        ribbonElement.className = ribbonElement.className.replace(RegExp("s4-ribbonrowhidetitle"), "");
        var titleElement = GetCachedElement("s4-titlerow");
        var bodyElement = document.body;

        if (Boolean(titleElement)) {
            titleElement.className = titleElement.className.replace(RegExp("s4-titlerowhidetitle"), "");
            if (ribbonMinimized) {
                titleElement.style.display = "block";
            }
            else {
                titleElement.style.display = "none";
            }
        }
        var webPartAdderElement = ribbonElement.querySelector(".ms-core-webpartadder");

        if (Boolean(webPartAdderElement)) {
            if (GetCurrentEltStyle(webPartAdderElement, "position") == "absolute") {
                var ribbonHeaderElement = document.getElementById("Ribbon");

                if (Boolean(ribbonHeaderElement)) {
                    var bottomOfInterestingElement;

                    if (ribbonMinimized) {
                        bottomOfInterestingElement = AbsTop(ribbonHeaderElement) + ribbonHeaderElement.offsetHeight;
                    }
                    else {
                        var ribbonTabBodyElement = ribbonHeaderElement.querySelector(".ms-cui-tabContainer");

                        if (Boolean(ribbonTabBodyElement)) {
                            bottomOfInterestingElement = AbsTop(ribbonTabBodyElement) + ribbonTabBodyElement.offsetHeight;
                        }
                        else {
                            bottomOfInterestingElement = AbsTop(ribbonHeaderElement) + ribbonHeaderElement.offsetHeight;
                        }
                    }
                    bottomOfInterestingElement -= AbsTop(ribbonElement);
                    webPartAdderElement.style.top = bottomOfInterestingElement.toString() + "px";
                }
            }
        }
    }
    var wasInited = g_spribbon.isInited;

    g_spribbon.isInited = true;
    var lastState = g_spribbon.isMinimized;

    g_spribbon.isMinimized = ribbonMinimized;
    if (lastState != ribbonMinimized || !wasInited)
        FixRibbonAndWorkspaceDimensions();
}
var g_fRibbonAnimationEnabled;
var g_fSkipAnimation;
var g_fSkipNextTabExpandAnimation;

function PrepareRibbonForAnimation(ribbonMinimized, fPreTabSwitch) {
    g_fRibbonAnimationEnabled = (ajaxNavigate.get_search()).indexOf("IsDlg=1") == -1 && SPAnimation.Settings.IsAnimationEnabled();
    if (!g_fRibbonAnimationEnabled)
        return;
    var ribbonContainer = document.getElementById("Ribbon");
    var ribbonTabArea = ribbonContainer.childNodes[2];
    var tabHeight = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);

    if (ribbonMinimized) {
        if (ribbonTabArea != null) {
            var ribbonTabClone = SPAnimationUtility.BasicAnimator.CloneElement(ribbonTabArea, false, true, false, false);
            var ribbonTabBody = ribbonTabClone.firstChild;

            SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(ribbonTabBody, 0, 0, null, null);
            SPAnimationUtility.BasicAnimator.Move(ribbonTabBody, 0, -tabHeight, function() {
                if (ribbonTabClone.parentNode != null)
                    ribbonTabClone.parentNode.removeChild(ribbonTabClone);
                ribbonTabArea.style.visibility = "";
            }, null);
        }
    }
    else {
        if (g_fSkipNextTabExpandAnimation) {
            g_fSkipAnimation = true;
            g_fSkipNextTabExpandAnimation = false;
        }
        else
            g_fSkipAnimation = fPreTabSwitch && Boolean(ribbonTabArea);
        if (!g_fSkipAnimation && ribbonContainer.className.indexOf("ms-cui-animatingRibbon") == -1)
            CSSUtil.AddClass(ribbonContainer, "ms-cui-animatingRibbon");
    }
}
function AnimateRibbonMinimizedChanged(ribbonMinimized) {
    if (!g_fRibbonAnimationEnabled || ribbonMinimized) {
        FixRibbonAndPageLayout(ribbonMinimized);
    }
    else if (!g_fSkipAnimation) {
        var ribbonContainer = document.getElementById("Ribbon");
        var ribbonTabArea = ribbonContainer.childNodes[2];
        var tabHeight = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);

        PrepareRibbonForAnimation(ribbonMinimized, false);
        if (ribbonTabArea != null) {
            var ribbonTabBody = ribbonTabArea.firstChild;

            ribbonTabBody.style.top = String(-tabHeight) + "px";
            fRightToLeft ? (ribbonTabBody.style.right = "0px") : (ribbonTabBody.style.left = "0px");
            SPAnimationUtility.BasicAnimator.Move(ribbonTabBody, 0, 0, function() {
                var currentTabContainer = (document.getElementById("Ribbon")).childNodes[2];

                if (currentTabContainer != null) {
                    var currentTabBody = currentTabContainer.firstChild;

                    if (currentTabBody != null && ribbonTabBody.id == "Ribbon.BlankTab" && currentTabBody.id == "Ribbon.BlankTab")
                        g_fSkipNextTabExpandAnimation = true;
                }
                if (ribbonTabBody.parentNode == null || ribbonTabBody.parentNode.parentNode == null || ribbonTabBody.parentNode.parentNode.nodeType != 1)
                    ribbonMinimized = true;
                CSSUtil.RemoveClass(ribbonContainer, "ms-cui-animatingRibbon");
                FixRibbonAndPageLayout(ribbonMinimized);
            }, null);
        }
    }
}
function UpdateAnimationUserControl(bSetFocus) {
    var turnOnAnimation = document.getElementById("TurnOnAnimation");
    var turnOffAnimation = document.getElementById("TurnOffAnimation");
    var linkOn = document.getElementById("linkTurnOnAnimation");
    var linkOff = document.getElementById("linkTurnOffAnimation");

    if (SPAnimation.Settings.IsAnimationEnabled()) {
        if (turnOnAnimation != null)
            turnOnAnimation.style.display = "none";
        if (turnOffAnimation != null)
            turnOffAnimation.style.display = "";
        if (bSetFocus && linkOff != null)
            linkOff.focus();
    }
    else {
        if (turnOnAnimation != null)
            turnOnAnimation.style.display = "";
        if (turnOffAnimation != null)
            turnOffAnimation.style.display = "none";
        if (bSetFocus && linkOn != null)
            linkOn.focus();
    }
}
function ToggleAnimationStatus() {
    if (SPAnimation.Settings.IsAnimationEnabled()) {
        SPAnimation.Settings.DisableAnimation();
    }
    else {
        SPAnimation.Settings.EnableAnimation();
    }
    UpdateAnimationUserControl(true);
}
function setupPageDescriptionCallout() {
    var pageDescElem = document.getElementById("ms-pageDescription");

    if (Boolean(pageDescElem)) {
        var pageDescElemText = GetInnerText(pageDescElem);
        var pageDescDiv = document.getElementById("ms-pageDescriptionDiv");

        if (Boolean(pageDescElemText)) {
            setInnerText(pageDescElem, pageDescElemText);
            pageDescElemText = pageDescElemText.replace(/(\n|\r|\t| )/g, "");
            if (Boolean(pageDescElemText)) {
                SPAnimationUtility.BasicAnimator.FadeIn(document.getElementById("ms-pageDescriptionDiv"), null, null);
                EnsureScriptFunc("callout.js", "Callout", function() {
                    CalloutManager.createNew({
                        ID: 'ms-pageDescriptionCallout',
                        launchPoint: pageDescDiv,
                        openOptions: {
                            event: "click",
                            showCloseButton: true
                        },
                        content: pageDescElem.innerHTML
                    });
                });
            }
        }
    }
}
function SendAjaxFormPostWithFormDigest(url, params, callBackAfterRequestFinished) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (params != null)
        xmlhttp.setRequestHeader("Content-length", params.length);
    xmlhttp.setRequestHeader("Connection", "Keep-alive");
    xmlhttp.setRequestHeader("x-requestdigest", document.forms[MSOWebPartPageFormName]["__REQUESTDIGEST"].value);
    xmlhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (callBackAfterRequestFinished != null) {
                callBackAfterRequestFinished(xmlhttp);
            }
        }
    };
    xmlhttp.send(params);
}
function numToPx(num) {
    return String(num) + 'px';
}
var g_InViewPort;
var g_OutOfViewPortCloserToTop;
var g_OutOfViewPortCloserToBottom;

function ElementInViewportVertical(elm, elmParent) {
    if (elm == null)
        return g_InViewPort;
    if (elmParent == null) {
        elmParent = document.body;
    }
    var posTop = AbsTop(elm);
    var posParentTop = AbsTop(elmParent);
    var posScrollTop = elmParent.scrollTop;
    var parentYOffset = posParentTop + posScrollTop;
    var elmHeight = elm.offsetHeight;
    var offsetFromTopOfParent = posTop - parentYOffset;
    var offsetFromBottomOfParent = parentYOffset + elmParent.offsetHeight - (posTop + elmHeight);

    if (offsetFromTopOfParent >= 0 && offsetFromBottomOfParent >= 0) {
        return g_InViewPort;
    }
    else {
        return Math.abs(offsetFromTopOfParent) < Math.abs(offsetFromBottomOfParent) ? g_OutOfViewPortCloserToTop : g_OutOfViewPortCloserToBottom;
    }
}
function GetSuiteHelpLink(linksJson) {
    var links = null;

    if (linksJson != null) {
        links = JSON.parse(linksJson);
    }
    var helpLinkUrl = null;

    if (links != null) {
        if (typeof links.HelpLink != 'undefined' && typeof links.HelpLink.Url == 'string') {
            helpLinkUrl = links.HelpLink.Url;
        }
    }
    return helpLinkUrl;
}
function SuiteLinksEmptyOrSuiteHelpLinkIsCached() {
    var linksJson = OpenSuiteLinksJson();
    var result = false;

    if (linksJson == "{}") {
        result = true;
    }
    else {
        result = !IsStrNullOrEmpty(GetSuiteHelpLink(linksJson));
    }
    return result;
}
function GetCurrentUserKey() {
    var retVal = null;

    if (_spPageContextInfo != null) {
        retVal = _spPageContextInfo.systemUserKey;
    }
    return retVal;
}
function GetCurrentUICultureOrNone() {
    var currentLanguage = "none";

    if (_spPageContextInfo != null && Boolean(_spPageContextInfo.currentUICultureName)) {
        currentLanguage = _spPageContextInfo.currentUICultureName;
    }
    return currentLanguage;
}
function GetSuiteLinks(callBackToRetrieveData, callBackToProcessData) {
    var currentLanguage = GetCurrentUICultureOrNone();
    var linksLanguage = null;
    var linksJson = null;
    var linksJsonIsStale = false;

    if (!IsNullOrUndefined(window.localStorage) && typeof window.localStorage.SPSuiteLinksJson == 'string') {
        if (GetCurrentUserKey() == window.localStorage.SPSuiteLinksUserKey) {
            linksLanguage = window.localStorage.SPSuiteLinksLanguage;
            linksJson = window.localStorage.SPSuiteLinksJson;
            var linksDate = Date.parse(window.localStorage.SPSuiteLinksDate);

            linksJsonIsStale = !(linksDate > 0) || (new Date()).getTime() - linksDate > 24 * 60 * 60 * 1000;
        }
    }
    else {
        if (typeof SPSuiteNavBar != 'undefined' && typeof SPSuiteNavBar.cachedJson == 'string' && !IsStrNullOrEmpty(SPSuiteNavBar.cachedJson)) {
            linksJsonIsStale = false;
            linksLanguage = currentLanguage;
            linksJson = SPSuiteNavBar.cachedJson;
        }
    }
    if (typeof SP._yam !== "undefined") {
        if (!linksJsonIsStale && Boolean(linksJson) && linksJson.indexOf(SP._yam ? "ShellNewsfeed" : "ShellYammer") !== -1) {
            linksJsonIsStale = true;
        }
    }
    if (linksLanguage != currentLanguage || linksJson == null) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                SP.SOD.executeFunc('suitelinks.js', 'CacheSuiteLinks', function() {
                    CacheSuiteLinks(data);
                    if (callBackToProcessData != null)
                        callBackToProcessData(data);
                });
            });
        }
        else {
            if (callBackToProcessData != null)
                callBackToProcessData(null);
        }
        return;
    }
    if (linksJsonIsStale) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                SP.SOD.executeFunc('suitelinks.js', 'CacheSuiteLinks', function() {
                    if (CacheSuiteLinks(data)) {
                        linksJson = data;
                    }
                });
            });
        }
    }
    if (callBackToProcessData != null)
        callBackToProcessData(linksJson);
}
function CtxFromElement(srcElement) {
    if (srcElement == null)
        return null;
    var tabTb = null;
    var tablv = null;

    tabTb = GetAncestor(srcElement, "TABLE");
    var childNodes = tabTb.getElementsByTagName("SCRIPT");

    if (childNodes == null)
        return null;
    var scriptWpq;

    if (childNodes.length > 0) {
        scriptWpq = childNodes[0];
    }
    while (!fIsNullOrUndefined(scriptWpq) && !fIsNullOrUndefined(scriptWpq.id) && scriptWpq.id.indexOf('scriptBodyWPQ') == -1)
        scriptWpq = scriptWpq.previousSibling;
    var scriptId = null;
    var wpqId = null;

    if (!fIsNullOrUndefined(scriptWpq) && !fIsNullOrUndefined(scriptWpq.id)) {
        scriptId = scriptWpq.id;
        var idx = scriptId.indexOf('WPQ');

        if (idx != -1) {
            wpqId = scriptId.substr(idx);
        }
    }
    if (!fIsNullOrUndefined(wpqId) && !fIsNullOrUndefined(g_ctxDict)) {
        for (var ctxId in g_ctxDict) {
            var _ctx = g_ctxDict[ctxId];

            if (_ctx.wpq == wpqId)
                return _ctx;
        }
    }
    return null;
}
var g_NotificationEngine;
var g_notiExpireTimerId;
var g_standardNotiCt;
var g_statusNotiCt;
var SPNotifications;
var g_SPNotificationEventID_Count;
var addNotification;
var removeNotification;

function NotificationEngine() {
    this.Initialize();
}
function SPNotification(containerId, strHtml, bSticky, strTooltip, onclickHandler, extraData) {
    this.Initialize(containerId, strHtml, bSticky, strTooltip, onclickHandler, extraData);
}
function SPNotificationContainer(id, element, layer, maxNoti) {
    this.Initialize(id, element, layer, maxNoti);
}
function SPStatusNotificationData(txt, dt, img, sip) {
    this.txt = txt;
    this.dt = dt;
    this.img = img;
    this.sip = sip;
}
function addSharingNotification(itemName, iconUrl, newSharedUsers, isAccessRequestMode, includeAnonymousLink, sharedOnlyWithExternalUsers) {
    var dt;

    if (isAccessRequestMode) {
        dt = STSHtmlEncode(Strings.STS.L_SharingNotificationAccessRequestsMode);
    }
    else if (includeAnonymousLink) {
        dt = STSHtmlEncode(Strings.STS.L_SharingNotificationGuestLink);
    }
    else if (sharedOnlyWithExternalUsers) {
        dt = STSHtmlEncode(Strings.STS.L_SharingNotificationExternalUsers);
    }
    else {
        if (newSharedUsers !== null && newSharedUsers.length > 0) {
            dt = STSHtmlEncode(StBuildParam(Strings.STS.L_SharingNotificationPrefixText, newSharedUsers.join(Strings.STS.L_SharingNotificationUserSeparator)));
        }
        else {
            dt = STSHtmlEncode(Strings.STS.L_SharingNotificationEmptyText);
        }
    }
    var extraData = new SPStatusNotificationData("", dt, iconUrl, null);
    var objNoti = new SP.UI.Notify.Notification(SPNotifications.ContainerID.Status, STSHtmlEncode(itemName), false, null, null, extraData);

    window.setTimeout(function() {
        objNoti.Show(false);
    }, 200);
}
var cGCMinimumWidth;
var cGCMinimumHeight;
var cGCMaxGCResizeCount;
var glGCObjectHeight;
var glGCObjectWidth;
var glGCResizeCounter;

function GCComputeSizing(GCObject) {
    if (TestGCObject(GCObject)) {
        var fBIDI = document.documentElement.currentStyle.direction == "rtl";
        var fBackCompat = typeof document.compatMode != "undefined" && document.compatMode == "BackCompat";
        var lGCWindowWidth = fBackCompat ? document.documentElement.scrollWidth : document.documentElement.clientWidth;
        var lGCWindowHeight = fBackCompat ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
        var lGCObjectOffsetLeft = 0;
        var lGCObjectOffsetTop = 0;

        if (fBIDI) {
            lGCObjectOffsetLeft = -180;
            lGCObjectOffsetTop = 120;
        }
        else {
            lGCObjectOffsetLeft = 32;
            lGCObjectOffsetTop = -2;
        }
        var lGCObjectWalker = GCObject.parentNode;

        while (lGCObjectWalker != document.body) {
            lGCObjectOffsetLeft += lGCObjectWalker.offsetLeft;
            lGCObjectOffsetTop += lGCObjectWalker.offsetTop;
            lGCObjectWalker = lGCObjectWalker.offsetParent;
            if (lGCObjectWalker == null)
                break;
            if (fBIDI)
                if (lGCObjectWalker.offsetLeft > 0)
                    break;
        }
        lGCObjectOffsetLeft += GCObject.parentNode.offsetLeft;
        lGCObjectOffsetTop += GCObject.parentNode.offsetTop;
        glGCObjectHeight = lGCWindowHeight - lGCObjectOffsetTop;
        if (glGCObjectHeight > lGCWindowHeight)
            glGCObjectHeight = lGCWindowHeight;
        if (glGCObjectHeight < cGCMinimumHeight)
            glGCObjectHeight = cGCMinimumHeight;
        if (fBIDI) {
            glGCObjectWidth = lGCWindowWidth + lGCObjectOffsetLeft;
        }
        else
            glGCObjectWidth = lGCWindowWidth - lGCObjectOffsetLeft;
        if (glGCObjectWidth > lGCWindowWidth)
            glGCObjectWidth = lGCWindowWidth;
        if (glGCObjectWidth < cGCMinimumWidth)
            glGCObjectWidth = cGCMinimumWidth;
    }
}
function GCResizeGridControl(GCObject) {
    if (TestGCObject(GCObject)) {
        var lGCOldObjectHeight = glGCObjectHeight;
        var lGCOldglGCObjectWidth = glGCObjectWidth;

        GCComputeSizing(GCObject);
        if (lGCOldObjectHeight != glGCObjectHeight)
            GCObject.height = String(glGCObjectHeight);
        if (lGCOldglGCObjectWidth != glGCObjectWidth)
            GCObject.width = String(glGCObjectWidth);
    }
}
function GCWindowResize(GCObject) {
    if (TestGCObject(GCObject)) {
        glGCResizeCounter = 0;
        GCResizeGridControl(GCObject);
    }
}
function GCOnResizeGridControl(GCObject) {
    if (TestGCObject(GCObject)) {
        if (glGCResizeCounter < cGCMaxGCResizeCount) {
            glGCResizeCounter++;
            GCResizeGridControl(GCObject);
        }
    }
}
function _GCActivateAndFocus(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.SetActive != "undefined") {
            GCObject.SetActive();
        }
        if (typeof GCObject.Focus != "undefined") {
            GCObject.Focus();
        }
    }
}
function _GCNavigateToNonGridPage() {
    var gridSet;
    var strDocUrl = window.location.href;
    var gridPart = strDocUrl.match(new RegExp("ShowInGrid="));

    if (null != gridPart) {
        gridSet = /ShowInGrid=\w*/;
        strDocUrl = strDocUrl.replace(gridSet, "");
    }
    var idxQuery = strDocUrl.indexOf("?");

    if (idxQuery != -1) {
        var idxQry2 = strDocUrl.indexOf("?", idxQuery + 1);

        if (idxQry2 != -1)
            strDocUrl = strDocUrl.slice(0, idxQry2);
        strDocUrl = strDocUrl + "&";
    }
    else
        strDocUrl = strDocUrl + "?";
    strDocUrl = strDocUrl + "ShowInGrid=False";
    window.location.replace(STSPageUrlValidation(strDocUrl));
}
function GCAddNewColumn(GCObject, path) {
    if (TestGCObject(GCObject)) {
        var source = window.location.href;
        var listName = typeof GCObject.Name != "undefined" ? GCObject.Name : "";
        var colName = typeof GCObject.SelectedColumnUniqueName != "undefined" ? GCObject.SelectedColumnUniqueName : "";
        var ltr = typeof GCObject.RightToLeft != "undefined" ? GCObject.RightToLeft : "";
        var viewGUID = typeof GCObject.ViewGUID != "undefined" ? GCObject.ViewGUID : "";
        var listServerTemplate = typeof GCObject.ServerTemplate != "undefined" ? GCObject.ServerTemplate : "";
        var page = "FldNew.aspx";

        if (listServerTemplate == "102") {
            page = "QstNew.aspx";
        }
        path = path + "/_layouts/15/" + page + "?List=" + listName + "&View=" + viewGUID + "&Source=" + source + "&RelativeToField=" + colName + "&LTR=" + ltr;
        window.location.href = path;
    }
}
function GCEditDeleteColumn(GCObject, path) {
    if (TestGCObject(GCObject)) {
        var source = window.location.href;
        var listName = typeof GCObject.Name != "undefined" ? GCObject.Name : "";
        var colName = typeof GCObject.SelectedColumnUniqueName != "undefined" ? GCObject.SelectedColumnUniqueName : "";
        var listServerTemplate = typeof GCObject.ServerTemplate != "undefined" ? GCObject.ServerTemplate : "";
        var page = "FldEdit.aspx";

        if (listServerTemplate == "102") {
            page = "QstEdit.aspx";
        }
        path = path + "/_layouts/15/" + page + "?List=" + listName + "&Field=" + colName + "&Source=" + source;
        window.location.href = path;
    }
}
var objGCGlobal;

function GCShowTaskPane() {
    if (objGCGlobal != null) {
        objGCGlobal.DisplayTaskPane = true;
        objGCGlobal = null;
    }
}
function GCShowHideTaskPane(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.DisplayTaskPane != undefined) {
            var state = GCObject.DisplayTaskPane;

            GCObject.DisplayTaskPane = !state;
            if (!state) {
                objGCGlobal = GCObject;
                window.setTimeout("GCShowTaskPane()", 5);
            }
        }
    }
}
function GCShowHideTotalsRow(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.DisplaySheetTotals != "undefined") {
            var state = GCObject.DisplaySheetTotals;

            GCObject.DisplaySheetTotals = !state;
        }
    }
}
function GCGridNewRow(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.SelectNewRow != "undefined") {
            GCObject.SelectNewRow();
        }
    }
}
function GCRefresh(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.Refresh != "undefined") {
            GCObject.Refresh();
        }
    }
}
function GCNewFolder(GCObject) {
    if (TestGCObject(GCObject)) {
        if (typeof GCObject.NewFolder != "undefined") {
            GCObject.NewFolder();
        }
    }
}
function PositionInfo(positionLeft, positionTop, positionWidth, positionHeight) {
    this.left = positionLeft;
    this.top = positionTop;
    this.width = positionWidth;
    this.height = positionHeight;
}
function PositionInfo_InitializePrototype() {
    PositionInfo.prototype.left = 0;
    PositionInfo.prototype.top = 0;
    PositionInfo.prototype.width = 0;
    PositionInfo.prototype.height = 0;
}
function CUIInfo(menuItem, command, enabledCommands) {
    menuItem.CUICommand = command;
    menuItem.CUIEnabledCommands = enabledCommands;
}
function resetExecutionState() {
    IsMenuShown = false;
    itemTable = null;
    imageCell = null;
    onKeyPress = false;
    currentCtx = null;
    currentEditMenu = null;
    currentItemID = null;
    downArrowText = null;
    resetItemGlobals();
}
function resetItemGlobals() {
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    currentItemOpenApp = null;
    currentItemCanModify = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null;
}
var ecbManager;

function IsMenuEnabled() {
    return browseris.ie55up || browseris.nav6up || browseris.safari125up;
}
function GetSelectedElement(elem, tagName, tagAlt) {
    while (elem != null && elem.tagName != tagName && (tagAlt == null || elem.tagName != tagAlt))
        elem = elem.parentNode;
    return elem;
}
function setupMenuContext(ctxt) {
    currentCtx = ctxt;
}
function setupMenuContextName(strCtx) {
    var lctx;

    try {
        eval("lctx = " + strCtx + ";");
    }
    catch (e) {
        eval("lctx = g_ctxDict['" + strCtx + "'];");
    }
    setupMenuContext(lctx);
}
function FindSTSMenuTable(elm, strSearch) {
    var str = elm.getAttribute(strSearch);

    while (elm != null && (str == null || str == "")) {
        elm = GetSelectedElement(elm.parentNode, "TABLE", "DIV");
        if (elm != null)
            str = elm.getAttribute(strSearch);
    }
    return elm;
}
function OnLinkDeferCall(elm) {
    if (!IsMenuEnabled())
        return false;
    elm.onfocusout = OutItem;
    elm.onkeydown = PopMenu;
    var elmTmp = FindSTSMenuTable(elm, "CTXName");

    if (elmTmp == null)
        return false;
    OnItem(elmTmp);
    return false;
}
function StartDeferItem(elm) {
    if (elm != itemTable) {
        itemTableDeferred = elm;
        var isTable = elm.tagName == "TABLE";

        if (isTable) {
            elm.onmouseout = EndDeferItem;
            elm.onclick = DeferredOnItem;
            elm.oncontextmenu = DeferredOnItem;
        }
        else {
            var par = elm.parentNode;

            if (par.getAttribute("IsCallout") != "TRUE") {
                par.onmouseout = EndDeferItem;
                par.oncontextmenu = DeferredOnItem;
            }
        }
    }
}
function IsAjaxMenu(e) {
    var eventType = e.getAttribute("eventtype");

    if (eventType != null && (eventType == 5 || eventType == 3 || eventType == 4))
        return false;
    var str = e.className;

    if (str != null && str.length > 0) {
        var rg = str.split(" ");

        if (rg != null && rg.length > 1 && rg[rg.length - 1] == "itx")
            return true;
    }
    return false;
}
function DeferredOnItem(e) {
    var elm = itemTableDeferred;

    if (elm != null) {
        MenuHtc_hide();
        OnItem(elm);
        if (IsAjaxMenu(elm))
            CreateAjaxMenu(e);
        else
            CreateMenu(e);
        return false;
    }
    return undefined;
}
function EndDeferItem() {
    var elm = itemTableDeferred;

    if (elm != null) {
        itemTableDeferred = null;
        var isTable = elm.tagName == "TABLE";

        if (isTable) {
            elm.onmouseout = null;
            elm.onclick = null;
            elm.oncontextmenu = null;
        }
        else {
            var par = elm.parentNode;

            par.onmouseout = null;
            par.onclick = null;
            par.oncontextmenu = null;
        }
    }
}
function GetLastChildElement(e) {
    for (var i = e.childNodes.length - 1; i >= 0; i--) {
        if (e.childNodes[i].nodeType == 1)
            return e.childNodes[i];
    }
    return null;
}
function CreateHiddenCtxMenu(td, outHandler) {
    return CreateCtxImg_Helper(td, outHandler, false);
}
function CreateCtxImg(td, outHandler) {
    return CreateCtxImg_Helper(td, outHandler, true);
}
function CreateCtxImg_Helper(td, outHandler, showCtxImage) {
    var div = FindCtxImg(td);

    if (div != null && typeof div.shown == "boolean" && div.shown == true)
        return div;
    if (div == null) {
        div = document.createElement("DIV");
        div.className = "s4-ctx";
        var rg = [];

        rg.push("<span>\u00a0</span>");
        rg.push("<a onfocus='");
        if (td.tagName == "TD") {
            rg.push("OnChildItem(this.parentNode.parentNode); return false;'");
        }
        else if (td.tagName == "TH") {
            rg.push("OnChildColumn(this.parentNode.parentNode); return false;'");
        }
        else {
            rg.push("return false;'");
        }
        rg.push("href='javascript:;' onclick='PopMenuFromChevron(event); return false;' title='");
        rg.push(Strings.STS.L_OpenMenu_Text + "'></a>");
        rg.push("<span>\u00a0</span>");
        div.innerHTML = rg.join("");
        delete rg;
        td.appendChild(div);
    }
    if (typeof div.shown == "undefined") {
        var spans = div.getElementsByTagName("SPAN");
        var spansLen = spans.length;

        for (var i = 0; i < spansLen; i++) {
            if (browseris.ie && browseris.iever == 6)
                spans[i].style.lineHeight = "1px";
        }
        var ctxImgLink = (div.getElementsByTagName("A"))[0];

        ctxImgLink.onfocusout = outHandler;
        var menuImgTag = (ctxImgLink.getElementsByTagName("img"))[0];
        var newImgElem = menuImgTag == null;

        if (newImgElem) {
            menuImgTag = document.createElement("img");
        }
        menuImgTag.style.visibility = "hidden";
        if (td.getAttribute("IsECB") == "TRUE" || td.getAttribute("IsCallout") == "TRUE" || td.getAttribute("role") == "gridcell")
            menuImgTag.src = !IsElementRtl(td) ? GetThemedImageUrl("ecbbutton.png") : GetThemedImageUrl("ecbbuttonrtl.png");
        else
            menuImgTag.src = GetThemedImageUrl("ecbarw.png");
        menuImgTag.alt = Strings.STS.L_OpenMenu_Text;
        menuImgTag.setAttribute("ms-jsgrid-click-passthrough", "true");
        if (newImgElem) {
            ctxImgLink.appendChild(menuImgTag);
        }
    }
    if (showCtxImage) {
        ShowCtxImg(div, true, td);
    }
    return div;
}
function FindCtxImg(td) {
    var div = null;
    var i;
    var children = td.childNodes;
    var childrenLen = children.length;

    for (i = 0; i < childrenLen; i++) {
        var child = children[i];

        if (child.nodeType == 1 && child.className.indexOf("s4-ctx") != -1) {
            div = child;
            break;
        }
        else {
            div = FindCtxImg(child);
            if (div != null) {
                break;
            }
        }
    }
    return div;
}
function RemoveCtxImg(td) {
    var div = FindCtxImg(td);

    if (div != null) {
        ShowCtxImg(div, false, td);
    }
}
function ShowCtxImg(div, flag, td) {
    EnsureScriptFunc("mQuery.js", "m$", function() {
        var link = null;
        var img = null;

        if (div != null)
            link = (div.getElementsByTagName("A"))[0];
        if (link != null)
            img = (link.getElementsByTagName("IMG"))[0];
        if (img != null) {
            var isHeader = td.tagName == "TH";

            if (flag == true) {
                AddCssClassToElement(div, "s4-ctx-show");
                if (isHeader) {
                    AddCssClassToElement(td, "ms-headerCellStyleHover");
                }
                PositionCtxImg(div, td);
                img.style.visibility = "visible";
                div.shown = true;
                ChevronContainer = td;
                if (div["onmouseover"] == null)
                    div.onmouseover = function(e) {
                        if (!HasCssClass(div, "s4-ctx-show-hover")) {
                            AddCssClassToElement(div, "s4-ctx-show-hover");
                        }
                    };
                div.onmouseout = function(e) {
                    if (!IsMenuOn() && !IsCallOutOn() && !IsFilterMenuOn()) {
                        if (e == null) {
                            e = window.event;
                        }
                        var tag = Boolean(e.relatedTarget) ? e.relatedTarget : e.toElement;

                        while (tag != null && tag.tagName != 'BODY') {
                            if (tag == this) {
                                return;
                            }
                            tag = tag.parentNode;
                        }
                        if (tag != null) {
                            RemoveCssClassFromElement(div, "s4-ctx-show-hover");
                        }
                    }
                };
            }
            else {
                img.style.visibility = "hidden";
                RemoveCssClassFromElement(div, "s4-ctx-show");
                RemoveCssClassFromElement(div, "s4-ctx-show-hover");
                div.shown = false;
                div.onmouseout = null;
                ChevronContainer = null;
                if (isHeader) {
                    RemoveCssClassFromElement(td, "ms-headerCellStyleHover");
                    RemoveCssClassFromElement(td, "ms-headerCellStylePressed");
                    RemoveCssClassFromElement(td, "ms-headerCellStyleMenuOpen");
                }
            }
        }
    });
}
function GetPosition(node) {
    if (node == null) {
        return null;
    }
    var left = 0;
    var t = 0;
    var width = 0;
    var height = 0;
    var parentNode = null;
    var offsetParent = null;

    offsetParent = node.offsetParent;
    var originalObject = node;
    var el = node;

    while (el.parentNode != null) {
        el = el.parentNode;
        if (el.offsetParent != null) {
            var considerScroll = true;

            if (typeof el.scrollTop == "number" && el.scrollTop > 0) {
                t -= el.scrollTop;
            }
            if (typeof el.scrollLeft == "number" && el.scrollLeft > 0) {
                left -= el.scrollLeft;
            }
        }
        if (el == offsetParent) {
            left += node.offsetLeft;
            if (typeof el.clientLeft == "number" && el.nodeName != "TABLE") {
                left += el.clientLeft;
            }
            t += node.offsetTop;
            if (typeof el.clientTop == "number" && el.nodeName != "TABLE") {
                t += el.clientTop;
            }
            node = el;
            if (node.offsetParent == null) {
                if (typeof node.offsetLeft == "number") {
                    left += node.offsetLeft;
                }
                if (typeof node.offsetTop == "number") {
                    t += node.offsetTop;
                }
            }
            offsetParent = node.offsetParent;
        }
    }
    if (typeof originalObject.offsetWidth == "number") {
        width = originalObject.offsetWidth;
    }
    if (typeof originalObject.offsetHeight == "number") {
        height = originalObject.offsetHeight;
    }
    return new PositionInfo(left, t, width, height);
}
function GetElemHeight(elem, bIncludePadding, bIncludeBorder, bIncludeMargin) {
    var bIE9Plus = browseris.ie9standardUp;

    if (!bIE9Plus && bIncludePadding && !bIncludeBorder && !bIncludeMargin) {
        return elem.clientHeight;
    }
    var elemStyle = window.getComputedStyle(elem, null);
    var elemHeight = getWidthFromPxString(elemStyle.height);

    if (bIE9Plus || bIncludePadding) {
        var padding = getWidthFromPxString(elemStyle.paddingTop) + getWidthFromPxString(elemStyle.paddingBottom);

        if (bIE9Plus) {
            elemHeight = Math.max(elem.clientHeight, elemHeight + padding) - padding;
        }
        if (bIncludePadding) {
            elemHeight += padding;
        }
    }
    if (bIncludeBorder) {
        elemHeight += getWidthFromPxString(GetCurrentEltStyle(elem, "border-top-width")) + getWidthFromPxString(GetCurrentEltStyle(elem, "border-bottom-width"));
    }
    var margins = 0;

    if (bIncludeMargin) {
        elemHeight += getWidthFromPxString(elemStyle.marginTop) + getWidthFromPxString(elemStyle.marginBottom);
    }
    return elemHeight;
}
function PositionCtxImg(div, td) {
    var t = 0;
    var sideOffset = 0;
    var bRelativePositioning = HasCssClass(div.parentNode, "ms-positionRelative");
    var pos = GetPosition(td);
    var posDiv = GetPosition(div.offsetParent);

    if (!window.browseris["chrome"] && getCurrentEltStyleByNames(td, ["border-collapse", "borderCollapse"]) == "collapse") {
        var averageBorderWidth = td.offsetHeight - td.clientHeight;

        pos.height += averageBorderWidth;
        pos.top -= averageBorderWidth;
    }
    var posOffset = (m$(bRelativePositioning ? td : td)).offset();
    var posDivOffset = (m$(bRelativePositioning ? div.parentNode : div.offsetParent)).offset();

    t = posOffset.top - posDivOffset.top;
    if (bRelativePositioning) {
        var sidePaddingString;
        var sideBorderString;

        if (!IsElementRtl(td)) {
            sidePaddingString = getCurrentEltStyleByNames(td, ["padding-right", "paddingRight"]);
            sideBorderString = getCurrentEltStyleByNames(td, ["border-right-width", "borderRightWidth"]);
        }
        else {
            sidePaddingString = getCurrentEltStyleByNames(td, ["padding-left", "paddingLeft"]);
            sideBorderString = getCurrentEltStyleByNames(td, ["border-left-width", "borderLeftWidth"]);
        }
        var sidePadding = getWidthFromPxString(sidePaddingString);
        var sideBorderWidth = getWidthFromPxString(sideBorderString);

        sideOffset = -sidePadding - sideBorderWidth;
    }
    else {
        sideOffset = posOffset.left - posDivOffset.left;
        if (!IsElementRtl(td)) {
            sideOffset = sideOffset + td.offsetWidth - div.offsetWidth;
        }
        t += div.offsetParent.scrollTop;
        sideOffset += div.offsetParent.scrollLeft;
    }
    var sideOffsetString = String(sideOffset) + "px";
    var divStyle = div.style;

    divStyle.top = String(t) + "px";
    if (!IsElementRtl(td) && bRelativePositioning) {
        divStyle.right = sideOffsetString;
    }
    else {
        divStyle.left = sideOffsetString;
    }
    var height = GetElemHeight(td, true, false, false);

    if (browseris.ie9standardUp) {
        var tr = GetAncestorByTagNames(td, ["TR", "TH"]);

        if (tr != null && tr.nextSibling != null) {
            var heightCorrection = tr.nextSibling.offsetTop - tr.offsetTop - tr.offsetHeight;

            height += heightCorrection;
        }
    }
    divStyle.height = String(height) + "px";
    divStyle.lineHeight = String(Math.max(height - 2, 0)) + "px";
    divStyle.margin = "0px";
}
function getCurrentEltStyleByNames(elem, styleNames) {
    var style = null;
    var i = 0;

    while (i < styleNames.length) {
        style = GetCurrentEltStyle(elem, styleNames[i]);
        if (style != null) {
            break;
        }
        i++;
    }
    return style;
}
function getWidthFromPxString(pxString) {
    if (typeof pxString != "string")
        return 0;
    var trimmedPxString = pxString.trim();
    var pxWidth = Number((trimmedPxString.substring(0, trimmedPxString.length - 2)).trim());

    return isNaN(pxWidth) ? 0 : pxWidth;
}
function IsInCtxImg(obj) {
    while (obj != null && obj.tagName != "TD" && obj.tagName != "BODY" && obj.className.indexOf("s4-ctx") == -1)
        obj = obj.parentNode;
    if (obj != null && obj.className.indexOf("s4-ctx") != -1)
        return obj;
    return null;
}
function OnItemDeferCall(elm) {
    if (!IsMenuEnabled()) {
        return false;
    }
    if (IsMenuOn()) {
        StartDeferItem(elm);
        return false;
    }
    if (itemTable == elm)
        return undefined;
    if (itemTable != null)
        OutItem();
    itemTable = elm;
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    var isTable = itemTable.tagName == "TABLE";
    var createCtx = new Function("setupMenuContextName('" + itemTable.getAttribute("CTXName") + "');");

    createCtx();
    var ctxt = currentCtx;
    var isAjax = IsAjaxMenu(itemTable);

    if (isTable) {
        if (browseris.nav6up)
            itemTable.className = "ms-selectedtitlealternative";
        else
            itemTable.className = "ms-selectedtitle";
        if (isAjax)
            itemTable.className = itemTable.className + " itx";
    }
    var par = itemTable.parentNode;

    while (par.tagName != "TD" && par.tagName != "BODY")
        par = par.parentNode;
    var divImg = null;

    if (!isTable) {
        if (ctxt.IsClientRendering != true) {
            divImg = CreateCtxImg(par, OutItem);
        }
    }
    var fnCreate = isAjax ? CreateAjaxMenu : CreateMenu;

    if (isTable) {
        itemTable["onclick"] = fnCreate;
        itemTable["oncontextmenu"] = fnCreate;
    }
    else {
        var bNoContextMenu = false;

        if (divImg != null) {
            if (divImg.onclick == null)
                divImg.onclick = fnCreate;
            else
                bNoContextMenu = true;
        }
        if (!bNoContextMenu)
            par.oncontextmenu = fnCreate;
        else if (divImg != null)
            par.oncontextmenu = divImg.onclick;
    }
    if (isTable)
        itemTable["onmouseout"] = OutItem;
    else if (par.getAttribute("IsECB") != "TRUE" || itemTable["onmouseover"] != null)
        par.onmouseout = OutItem;
    if (isTable) {
        var titleRow;

        titleRow = GetFirstChildElement(GetFirstChildElement(itemTable));
        if (titleRow != null) {
            imageCell = GetLastChildElement(titleRow);
        }
        if (ctxt.listTemplate == 200) {
            if (itemTable.getAttribute("menuType") == "Orphaned")
                downArrowText = Strings.STS.L_Reschedule_Text;
        }
        else
            downArrowText = Strings.STS.L_Edit_Text;
        var imageTag = GetFirstChildElement(imageCell);

        imageTag.src = ctxt.imagesPath + "menudark.gif";
        imageTag.alt = downArrowText;
        imageTag.style.visibility = "visible";
        imageCell.className = "ms-menuimagecell";
    }
    return false;
}
function OutItem(evt) {
    var par = null;

    if (evt != null && typeof evt.callOut != 'undefined' && Boolean(evt.callOut) && ecbManager.callOutPar != null)
        par = ecbManager.callOutPar;
    if (!IsMenuOn() && (itemTable != null || par != null)) {
        var isTable = itemTable != null && itemTable.tagName == "TABLE";

        if (isTable) {
            if (IsAjaxMenu(itemTable))
                itemTable.className = "ms-unselectedtitle itx";
            else
                itemTable.className = "ms-unselectedtitle";
            itemTable["onclick"] = null;
            itemTable["oncontextmenu"] = null;
            itemTable["onmouseout"] = null;
        }
        else {
            if (par == null)
                par = GetAncestorByTagNames(itemTable, ["TD", "TH"]);
            if (par != null && par.getAttribute != null && par.getAttribute("IsCallout") == "TRUE") {
                if (typeof CalloutManager === "object" && calloutManager.containsOneCalloutOpen(par)) {
                    ecbManager.callOutPar = par;
                    return true;
                }
            }
            var toElem = null;

            if (evt == null)
                evt = window.event;
            if (evt != null) {
                toElem = typeof evt.toElement != "undefined" && evt.toElement != null ? evt.toElement : evt.relatedTarget;
                if (par != null && toElem != null && IsContained(toElem, par))
                    return true;
            }
            if (par != null) {
                par.onclick = null;
                par.oncontextmenu = null;
                par.onmouseout = null;
                RemoveCtxImg(par);
            }
        }
        if (isTable && imageCell != null) {
            (GetFirstChildElement(imageCell)).style.visibility = "hidden";
            imageCell.className = "";
        }
        resetExecutionState();
    }
    return undefined;
}
function IsContained(elem, ancestor) {
    if (elem == ancestor)
        return true;
    var elemArray = ancestor.getElementsByTagName(elem.tagName);

    for (var i = 0; i < elemArray.length; i++) {
        if (elem == elemArray[i])
            return true;
    }
    return false;
}
function IsMenuOn() {
    if (!IsMenuShown)
        return false;
    var fIsOpen = false;

    fIsOpen = MenuHtc_isOpen(currentEditMenu);
    if (!fIsOpen)
        IsMenuShown = false;
    return fIsOpen;
}
function _ListHeaderMenu_OnMouseDown(headerCell) {
    if (headerCell != null && headerCell.tagName == "TH") {
        if (HasCssClass(headerCell, "ms-headerCellStyleHover")) {
            RemoveCssClassFromElement(headerCell, "ms-headerCellStyleHover");
            AddCssClassToElement(headerCell, "ms-headerCellStylePressed");
        }
    }
}
function _PopMenuFromChevron(e) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSFilterSortStart);
    if (e == null)
        e = window.event;
    var srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
    var itemcell = srcElement.parentNode;

    while (itemcell.tagName != "TD" && itemcell.tagName != "TH" && itemcell.tagName != "BODY")
        itemcell = itemcell.parentNode;
    var elements;
    var i;

    if (itemcell.tagName == "TD") {
        elements = itemcell.getElementsByTagName("DIV");
        var itemDiv = null;

        for (i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('CtxNum') != null) {
                itemDiv = elements[i];
            }
        }
        if (itemDiv != null) {
            OnItemDeferCall(itemDiv);
        }
    }
    else if (itemcell.tagName == "TH") {
        elements = itemcell.getElementsByTagName("DIV");
        var headerdiv = null;

        for (i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('CtxNum') != null) {
                headerdiv = elements[i];
            }
        }
        if (headerdiv != null) {
            OnMouseOverFilterDeferCall(headerdiv);
        }
    }
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSFilterSortEnd);
    return false;
}
function PopMenu(e) {
    if (!IsMenuEnabled())
        return true;
    if (e == null)
        e = window.event;
    var nKeyCode;

    if (e == null)
        return true;
    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (!IsMenuOn() && (e.shiftKey && nKeyCode == 13 || e.altKey && nKeyCode == 40)) {
        onKeyPress = true;
        var itemlink = Boolean(e.srcElement) ? e.srcElement : e.target;
        var itemdiv = FindSTSMenuTable(itemlink, "CTXName");

        if (itemdiv == null)
            return false;
        OnItemDeferCall(itemdiv);
        if (IsAjaxMenu(itemdiv))
            CreateAjaxMenu(e);
        else
            CreateMenu(e);
        onKeyPress = false;
        return false;
    }
    else
        return true;
}
function CreateMenuEx(ctxt, container, e, flipTopLevelMenu) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSECBClickStart);
    if (container == null)
        return undefined;
    IsMenuShown = true;
    document.body.onclick = null;
    var m;

    m = BuildMenu(ctxt);
    m.setAttribute("hideicons", "true");
    currentEditMenu = m;
    container.onmouseout = null;
    var itemCell = null;
    var div = null;

    if (container.tagName == "SPAN" && HasCssClass(container, "js-callout-ecbMenu")) {
        itemCell = container;
    }
    else {
        div = FindCtxImg(container);
        if (div == null) {
            itemCell = GetAncestorByTagNames(container, ["TD", "TR"]);
            if (itemCell == null) {
                itemCell = container;
            }
            else {
                div = FindCtxImg(container);
            }
        }
    }
    if (div != null && typeof div.shown == "boolean" && div.shown == false)
        ShowCtxImg(div, true, itemCell);
    OMenu(m, itemCell, null, flipTopLevelMenu, -1, false, false, e);
    if (itemTable != null && itemTable.tagName != "DIV") {
        var ctxAttribute = itemTable.getAttribute("CTXName");

        if (ctxAttribute == undefined || ctxAttribute == "")
            itemTable = GetSelectedElement(container, "TABLE", "DIV");
    }
    if (itemCell.tagName == "TD")
        itemCell.onclick = SingleItemSelect;
    m._onDestroy = OutItem;
    if (e != null)
        e.cancelBubble = true;
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSECBClickEnd);
    return false;
}
function BuildMenuWithInit(ctxt) {
    resetItemGlobals();
    setDocType();
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    currentItemCheckedOutUserId = typeof itemTable.COUId == "string" ? itemTable.COUId : null;
    currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    return BuildMenu(ctxt);
}
function BuildMenu(ctxt) {
    var m = CMenu(currentItemID + "_menu");

    if (m == null)
        return null;
    else if (Boolean(ctxt.isVersions))
        AddVersionMenuItems(m, ctxt);
    else if (ctxt.listTemplate == 121)
        AddSolutionsCatalogMenuItems(m, ctxt);
    else if (ctxt.listBaseType == 1)
        AddDocLibMenuItems(m, ctxt);
    else if (ctxt.listTemplate == 200)
        AddMeetingMenuItems(m, ctxt);
    else
        AddListMenuItems(m, ctxt);
    InsertFeatureMenuItems(m, ctxt);
    SP.SOD.notifyEventAndExecuteWaitingJobs("CleanupContextMenu", [m, ctxt]);
    return m;
}
function GetParentLinkFromEvent(e) {
    if (e == null)
        e = window.event;
    var srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
    var anchorElement = GetSelectedElement(srcElement, "A");

    if (anchorElement !== null && anchorElement.tagName === "A")
        return anchorElement;
    else
        return null;
}
function isInvalidAjaxMenuElement(element) {
    return element === null || typeof element === "undefined" || onKeyPress == false && IsInCtxImg(element) == null && element.className.indexOf("js-callout-action") === -1 && element.className.indexOf("ms-lstItmLinkAnchor") === -1 && (element.tagName == "A" || element.parentNode.tagName == "A");
}
function CreateAjaxMenu(e, fUseMousePosition) {
    if (!IsContextSet())
        return undefined;
    if (e == null)
        e = window.event;
    if (itemTable == null || itemTable.tagName == "TABLE" && imageCell == null)
        return undefined;
    var srcElement = GetParentLinkFromEvent(e);

    if (isInvalidAjaxMenuElement(srcElement)) {
        srcElement = Boolean(e.srcElement) ? e.srcElement : e.target;
        if (isInvalidAjaxMenuElement(srcElement)) {
            return undefined;
        }
    }
    var itab = itemTable;
    var p = itab.parentNode;

    if (p != null && parseInt(p.getAttribute('creatingAjax')) == 1)
        return undefined;
    itab.parentNode.setAttribute('creatingAjax', '1');
    var ctxt = currentCtx;
    var evtCopy = null;

    if (fUseMousePosition && e != null && e.clientX != null && e.clientY != null && e.clientX != 0 && e.clientY != 0) {
        evtCopy = new Object();
        evtCopy.clientX = e.clientX;
        evtCopy.clientY = e.clientY;
    }
    var fn = function(ctxt2, tab) {
        if (tab != undefined) {
            if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
                if (tab["FileRef"] != undefined)
                    itab.setAttribute("Url", tab["FileRef"]);
                if (tab["FileDirRef"] != undefined)
                    itab.setAttribute("DRef", tab["FileDirRef"]);
                if (tab["File_x0020_Type"] != undefined)
                    itab.setAttribute("Ext", tab["File_x0020_Type"]);
                if (tab["HTML_x0020_File_x0020_Type"] != undefined)
                    itab.setAttribute("Type", tab["HTML_x0020_File_x0020_Type"]);
                if (tab["FSObjType"] != undefined)
                    itab.setAttribute("OType", tab["FSObjType"]);
                if (tab["CheckedOutUserId"] != undefined)
                    itab.setAttribute("COUId", tab["CheckedOutUserId"]);
                if (tab["_HasCopyDestinations"] != undefined)
                    itab.setAttribute("HCD", tab["_HasCopyDestinations"]);
                if (tab["_CopySource"] != undefined)
                    itab.setAttribute("CSrc", tab["_CopySource"]);
                if (tab["_ModerationStatus"] != undefined)
                    itab.setAttribute("MS", tab["_ModerationStatus."]);
                if (tab["ContentType"] != undefined)
                    itab.setAttribute("CType", tab["ContentType"]);
                if (tab["ContentTypeId"] != undefined)
                    itab.setAttribute("CId", tab["ContentTypeId"]);
                if (tab["_UIVersion"] != undefined)
                    itab.setAttribute("UIS", tab["_UIVersion"]);
                if (tab["_SourceUrl"] != undefined)
                    itab.setAttribute("SUrl", tab["_SourceUrl"]);
                if (tab["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"] != undefined)
                    itab.setAttribute("Icon", tab["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"]);
                if (ctxt.ListSchema.IsDocLib) {
                    if (tab["serverurl.progid"] != undefined)
                        itab.setAttribute("sred", tab["serverurl.progid"]);
                    if (tab["ctxt.ListSchema.DefaultItemOpen"] != undefined)
                        itab.setAttribute("defaultio", ctxt.ListSchema.DefaultItemOpen);
                    if (tab["IsCheckedoutToLocal"] != undefined)
                        itab.setAttribute("cout", tab["IsCheckedoutToLocal"]);
                }
                OnItemDeferCall(itab);
                CreateMenuEx(ctxt2, itab, evtCopy, false);
                itab.parentNode.removeAttribute('creatingAjax');
            }
            else {
                itab.parentNode.replaceChild(tab, itab);
                tab.onclick = typeof itab.onclick != "undefined" ? itab.onclick : undefined;
                tab.onmousehover = OnItem;
                OnItemDeferCall(tab);
                CreateMenuEx(ctxt2, tab, evtCopy);
                tab.parentNode.removeAttribute('creatingAjax');
            }
        }
    };

    FetchEcbInfo(ctxt, itemTable.id, itemTable.tagName, fn);
    e.cancelBubble = true;
    return false;
}
var ecbItems;

function FetchEcbInfo(ctxt, id, tagName, fnCallback) {
    var rg = [];
    var hasCustomAction = false;
    var str = escapeUrlForCallback(ctxt.HttpRoot);

    rg.push(str);
    if (str[str.length - 1] != "/")
        rg.push("/");
    rg.push("_layouts/15/inplview.aspx?Cmd=Ctx&List=");
    rg.push(ctxt.listName);
    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
        rg.push("&CascDelWarnMessage=1");
    }
    if (ctxt.view != null) {
        rg.push("&View=");
        rg.push(ctxt.view);
    }
    rg.push("&ViewCount=");
    rg.push(ctxt.ctxId);
    if (typeof ctxt.isXslView != "undefined" && ctxt.isXslView) {
        rg.push("&IsXslView=TRUE");
        rg.push("&Field=");
        if (itemTable != null)
            rg.push(GetAttributeFromItemTable(itemTable, "Field", "Field"));
        else
            rg.push("LinkFilename");
        if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
            rg.push("&IsCSR=TRUE");
            if (Boolean(ctxt.listName)) {
                var ecbId = ecbItems + "_" + ctxt.listName.toLowerCase();

                ;
                if (document.getElementById(ecbId) == null) {
                    rg.push("&CustomAction=TRUE");
                    hasCustomAction = true;
                }
                else if (Boolean(ctxt.ExternalDataList)) {
                    CallBackWithRowData(ctxt, id, ctxt.ListData, fnCallback);
                    return;
                }
            }
        }
    }
    rg.push("&ID=");
    rg.push(id);
    var strRoot = GetUrlKeyValue("RootFolder", true, ajaxNavigate.get_href());

    if (strRoot.length > 0) {
        rg.push("&RootFolder=");
        rg.push(strRoot);
    }
    rg.push("&ListViewPageUrl=");
    var uri = new URI(ajaxNavigate.get_href(), {
        disableEncodingDecodingForLegacyCode: true
    });

    str = uri.getStringWithoutQueryAndFragment();
    rg.push(str);
    if (typeof ctxt.overrideScope != "undefined") {
        rg.push("&OverrideScope=");
        rg.push(escapeProperly(ctxt.overrideScope));
    }
    if (typeof ctxt.searchTerm != "undefined" && ctxt.searchTerm != null) {
        rg.push("&InplaceSearchQuery=");
        rg.push(escapeProperlyCore(ctxt.searchTerm, true));
    }
    else if (typeof ctxt.completedSearchTerm != "undefined" && ctxt.completedSearchTerm != null) {
        rg.push("&InplaceSearchQuery=");
        rg.push(escapeProperlyCore(ctxt.completedSearchTerm, true));
    }
    if (typeof ctxt.fullListSearch != "undefined" && ctxt.fullListSearch != null && ctxt.fullListSearch == true) {
        rg.push("&InplaceFullListSearch=true");
    }
    var strUrl = rg.join("");
    var req;

    if (window.XMLHttpRequest != null) {
        req = new XMLHttpRequest();
        req.open("POST", strUrl, true);
        req.onreadystatechange = function() {
            if (req.readyState != 4)
                return;
            if (req.status == 601) {
                alert(req.responseText);
            }
            else if (req.status == 503) {
                alert(Strings.STS.L_ServerBusyError);
            }
            else {
                if (typeof ctxt.IsClientRendering != "undefined" && ctxt.IsClientRendering) {
                    var strEcb = req.responseText;

                    if (hasCustomAction) {
                        var strCustomAction = '<CustomAction/>';
                        var index = strEcb.indexOf(strCustomAction);

                        if (index >= 0) {
                            var ecbDiv = document.createElement("DIV");

                            ecbDiv.innerHTML = strEcb.substring(0, index);
                            document.body.appendChild(ecbDiv);
                            strEcb = strEcb.substring(index + strCustomAction.length);
                        }
                    }
                    var newListData = null;

                    if (Boolean(ctxt.ExternalDataList)) {
                        newListData = ctxt.ListData;
                    }
                    else {
                        newListData = JSON.parse(strEcb);
                    }
                    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
                        ctxt.CascadeDeleteWarningMessage = newListData.CascadeDeleteWarningMessage;
                    }
                    CallBackWithRowData(ctxt, id, newListData, fnCallback);
                }
                else {
                    var strInner = req.responseText;
                    var div = document.createElement("DIV");

                    div.style.visibility = "hidden";
                    if (ctxt.HasRelatedCascadeLists == 1 && ctxt.CascadeDeleteWarningMessage == null) {
                        var cdBeginTag = '<CascadeDeleteWarningMessage>';
                        var cdEndTag = '</CascadeDeleteWarningMessage>';

                        if (strInner.startsWith(cdBeginTag)) {
                            var idx = strInner.indexOf(cdEndTag);

                            if (idx !== -1) {
                                ctxt.CascadeDeleteWarningMessage = strInner.substring(cdBeginTag.length, idx);
                                strInner = strInner.substring(idx + cdEndTag.length);
                            }
                        }
                    }
                    div.innerHTML = strInner;
                    var tabs = div.getElementsByTagName(tagName);
                    var tab;
                    var i;

                    for (i = 0; i < tabs.length; i++) {
                        tab = tabs[i];
                        if (tab.id == id)
                            break;
                    }
                    if (i == tabs.length)
                        tab = null;
                    if (tab != null) {
                        fnCallback(ctxt, tab);
                    }
                    else {
                        alert(Strings.STS.L_ItemGone);
                        RefreshPage(1);
                    }
                }
            }
        };
        req.send(null);
    }
}
function CallBackWithRowData(ctxt, id, listData, fnCallback) {
    var i;
    var rowData = undefined;

    for (i = 0; i < listData.Row.length; i++) {
        if (listData.Row[i].ID == id) {
            rowData = listData.Row[i];
            break;
        }
    }
    if (rowData != undefined)
        fnCallback(ctxt, rowData);
}
function CreateMenu(e) {
    if (!IsContextSet())
        return undefined;
    var ctxt = currentCtx;

    if (e == null)
        e = window.event;
    var srcElement = e.srcElement != null ? e.srcElement : e.target;

    if (itemTable == null || itemTable.tagName == "TABLE" && imageCell == null || onKeyPress == false && IsInCtxImg(srcElement) == null && (srcElement.tagName == "A" || srcElement.parentNode.tagName == "A"))
        return undefined;
    return CreateMenuEx(ctxt, itemTable, e);
}
function AddSendSubMenu(m, ctxt) {
    var SubmitFileConfirmation = [];

    SubmitFileConfirmation["Copy"] = Strings.STS.L_SubmitFileCopyWarning_Text;
    SubmitFileConfirmation["Move"] = Strings.STS.L_SubmitFileMoveWarning_Text;
    SubmitFileConfirmation["Link"] = Strings.STS.L_SubmitFileLinkWarning_Text;
    var strDisplayText = Strings.STS.L_Send_Text;
    var currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;
    var currentItenUnescapedUrl;
    var strExtension;

    if (currentItemFileUrl != null) {
        currentItenUnescapedUrl = unescapeProperly(currentItemFileUrl);
        currentItemEscapedFileUrl = escapeProperly(currentItenUnescapedUrl);
        strExtension = SzExtension(currentItenUnescapedUrl);
        if (strExtension != null && strExtension != "")
            strExtension = strExtension.toLowerCase();
    }
    var serverFileRedirect = itemTable.getAttribute("SRed");
    var iDefaultIO = itemTable.getAttribute("DefaultIO");

    if (iDefaultIO == "0" && !HasRights(0x0, 0x20))
        iDefaultIO = "1";
    var otherLocationMenuItemCondition = currentItemProgId != "SharePoint.WebPartPage.Document" && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20)) && strExtension != "aspx";
    var sendToEmailMenuItemCondition = HasRights(0x10, 0x0);
    var downloadACopyMenuItemCondition = currentItemFSObjType != "1" && ctxt.listBaseType == 1 && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20));

    if (!otherLocationMenuItemCondition && !sendToEmailMenuItemCondition && !downloadACopyMenuItemCondition)
        return;
    var sm = CASubM(m, strDisplayText, "", "", String(400));

    CUIInfo(sm, "SendTo", ["SendTo", "PopulateSendToMenu"]);
    sm.IsSubMenu = true;
    sm.id = "ID_Send";
    sm.style.display = "none";
    var menuOption;

    if (otherLocationMenuItemCondition) {
        if (typeof ctxt.SendToLocationName != "undefined" && ctxt.SendToLocationName != null && ctxt.SendToLocationName != "" && typeof ctxt.SendToLocationUrl != "undefined" && ctxt.SendToLocationUrl != null && ctxt.SendToLocationUrl != "") {
            var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/copy.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl + "&FldUrl=" + escapeProperly(ctxt.SendToLocationUrl);

            strAction = AddSourceToUrl(strAction) + "')";
            menuOption = CAMOpt(sm, ctxt.SendToLocationName, strAction, "");
            CUIInfo(menuOption, "SendToRecommendedLocation", ["SendToRecommendedLocation"]);
        }
        if (typeof itemTable.getAttribute("HCD") != "undefined" && itemTable.getAttribute("HCD") == "1") {
            strDisplayText = Strings.STS.L_ExistingCopies_Text;
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/updatecopies.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl;
            strAction = AddSourceToUrl(strAction) + "')";
            var strImagePath = ctxt.imagesPath + "existingLocations.gif";

            menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
            menuOption.id = "ID_ExistingCopies";
            CUIInfo(menuOption, "SendToExistingCopies", ["SendToExistingCopies"]);
        }
        strDisplayText = Strings.STS.L_OtherLocation_Text;
        strAction = "NavigateToSendToOtherLocationV4(event, '" + ctxt.HttpRoot + "/_layouts/15/copy.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = ctxt.imagesPath + "sendOtherLoc.gif";
        menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_OtherLocation";
        CUIInfo(menuOption, "SendToOtherLocation", ["SendToOtherLocation"]);
        if (typeof ctxt.OfficialFileNames == "string" && ctxt.OfficialFileNames != "") {
            var ar_officialFileNames = ctxt.OfficialFileNames.split("__HOSTSEPARATOR__");

            if (ar_officialFileNames != null) {
                for (var count = 0; count < ar_officialFileNames.length; count++) {
                    var strSerializedText = ar_officialFileNames[count];
                    var ar_OfficialFileHost = strSerializedText.split(",");

                    strDisplayText = ar_OfficialFileHost[0];
                    var index = 0;
                    var action = "Copy";

                    if (ar_OfficialFileHost.length == 3) {
                        strDisplayText = (ar_OfficialFileHost[0].replace(/%2c/g, ",")).replace(/%25/g, "%");
                        index = ar_OfficialFileHost[1];
                        action = ar_OfficialFileHost[2];
                    }
                    strAction = "if(confirm(\"" + StBuildParam(SubmitFileConfirmation[action], STSScriptEncode(strDisplayText)) + "\")!=0) SubmitFormPost('" + ctxt.HttpRoot + "/_layouts/15/SendToOfficialFile.aspx?" + "ID=" + escapeProperly(strDisplayText) + "&Index=" + String(index) + "&SourceUrl=" + currentItemEscapedFileUrl;
                    strAction = AddSourceToUrl(strAction) + "')";
                    strImagePath = "";
                    menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
                    var strRibbonCmd = "SendToOfficialFile" + String(count);

                    CUIInfo(menuOption, strRibbonCmd, [strRibbonCmd]);
                }
            }
        }
        CAMSep(sm);
    }
    if (sendToEmailMenuItemCondition) {
        strDisplayText = Strings.STS.L_SendToEmail_Text;
        currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
        var httpRootWithSlash = ctx.HttpRoot.substr(0);

        if (httpRootWithSlash[httpRootWithSlash.length - 1] != '/')
            httpRootWithSlash += '/';
        var slashLoc = -1;
        var fileUrl = "";

        slashLoc = (httpRootWithSlash.substring(8)).indexOf('/') + 8;
        fileUrl = httpRootWithSlash.substr(0, slashLoc) + escapeProperlyCore(unescapeProperly(currentItemUrl), true);
        strAction = "javascript:SendEmail('" + fileUrl + "')";
        strImagePath = ctx.imagesPath + "gmailnew.gif";
        menuOption = CAMOpt(sm, strDisplayText, strAction, strImagePath);
        CUIInfo(menuOption, "EmailLink", ["EmailLink"]);
        menuOption.id = "ID_SendToEmail";
    }
    if (downloadACopyMenuItemCondition) {
        if (ctx.listTemplate != 119)
            AddWorkspaceMenuItem(sm, ctx);
        if (ctx.listTemplate != 119) {
            strAction = "STSNavigate('" + ctx.HttpRoot + "/_layouts/15/download.aspx?" + "SourceUrl=" + currentItemEscapedFileUrl + "&FldUrl=" + escapeProperly(ctx.SendToLocationUrl);
            strAction = AddSourceToUrl(strAction) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_DownloadACopy_Text, strAction, "");
            CUIInfo(menuOption, "DownloadCopy", ["DownloadCopy"]);
            menuOption.id = "ID_DownloadACopy";
        }
    }
}
function AddDocTransformSubMenu(m, ctxt) {
    if (typeof rgDocTransformers == "undefined" || rgDocTransformers == null) {
        return;
    }
    var rgDocTransformersLocal = rgDocTransformers;
    var sm = null;
    var currentItemUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var iDot = currentItemUrl.lastIndexOf(".");

    if (iDot > 0) {
        var strExtension = (currentItemUrl.substring(iDot + 1, currentItemUrl.length)).toLowerCase();
        var iTransformer;
        var fAddedTransformer = false;

        for (iTransformer = 0; iTransformer < rgDocTransformers.length; iTransformer++) {
            if (rgDocTransformers[iTransformer].ConvertFrom == strExtension) {
                var ctid = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
                var re = new RegExp("/\|" + ctid + "\|/");

                if (ctid != null && !re.test(rgDocTransformers[iTransformer].ExcludedContentTypes)) {
                    if (!fAddedTransformer) {
                        sm = CASubM(m, Strings.STS.L_DocTran_Text, ctx.imagesPath + "ConvertDocument.gif", Strings.STS.L_DocTran_Text, String(500));
                        sm.IsSubMenu = true;
                        sm.Id = "ID_ConvertDocument";
                        fAddedTransformer = true;
                    }
                    var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/" + escapeProperlyCore(rgDocTransformers[iTransformer].TransformUIPage, true) + "?" + "FileName=" + currentItemEscapedFileUrl + "&TID=" + rgDocTransformers[iTransformer].Id;

                    strAction = AddSourceToUrl(strAction) + "')";
                    var tm;

                    tm = CAMOpt(sm, rgDocTransformers[iTransformer].Name, strAction, "");
                    tm.Id = "ID_Transform" + rgDocTransformers[iTransformer].Id;
                }
            }
        }
    }
}
function AddMeetingMenuItems(m, ctxt) {
    if (itemTable.getAttribute("menuType") == "Orphaned") {
        var menuOption;
        var currentInstanceId = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
        var strDisplayText = Strings.STS.L_Move_Text;
        var strAction = "GoToMtgMove('" + ctxt.listUrlDir + "'," + currentInstanceId + ",'" + itemTable.getAttribute("DateTime") + "','" + itemTable.getAttribute("DateTimeISO") + "')";
        var strImagePath = "";

        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Move";
        strDisplayText = Strings.STS.L_Keep_Text;
        strAction = "MtgKeep('" + ctxt.HttpPath + "','" + ctxt.listName + "'," + currentInstanceId + ")";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Keep";
        strDisplayText = Strings.STS.L_Delete_Text;
        strAction = "MtgDelete('" + ctxt.HttpPath + "','" + ctxt.listName + "'," + currentInstanceId + ")";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);
        menuOption.id = "ID_Delete";
    }
}
function AddListMenuItems(m, ctxt) {
    if (typeof Custom_AddListMenuItems != "undefined") {
        if (Custom_AddListMenuItems(m, ctxt))
            return;
    }
    if (currentItemFileUrl == null)
        currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var fixedItemId = currentItemID;

    if (currentItemIsEventsExcp == null) {
        currentItemIsEventsExcp = false;
        currentItemIsEventsDeletedExcp = false;
        currentItemEvtType = parseInt(itemTable.getAttribute("EventType"));
        if (currentItemEvtType != null && (currentItemEvtType == 2 || currentItemEvtType == 3 || currentItemEvtType == 4)) {
            currentItemIsEventsExcp = true;
            if (currentItemEvtType == 3)
                currentItemIsEventsDeletedExcp = true;
            if (currentItemID.indexOf(".") != -1)
                fixedItemId = (currentItemID.split("."))[0];
        }
    }
    var menuOption;
    var strAction;
    var strImagePath;

    if (ctxt.listBaseType == 3 && ctxt.listTemplate == 108) {
        var strDisplayText = Strings.STS.L_Reply_Text;

        if ((itemTable.getAttribute("Ordering")).length >= 504) {
            strAction = "alert('" + Strings.STS.L_ReplyLimitMsg_Text + "')";
        }
        else {
            strAction = "STSNavigate('" + ctxt.newFormUrl + "&Threading=" + escapeProperly(itemTable.getAttribute("Ordering")) + "&Guid=" + escapeProperly(itemTable.getAttribute("ThreadID")) + "&Subject=" + escapeProperly(itemTable.getAttribute("Subject"));
            strAction = AddSourceToUrl(strAction) + "')";
        }
        strImagePath = ctxt.imagesPath + "reply.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(100));
        menuOption.id = "ID_Reply";
    }
    AddSharedNamespaceMenuItems(m, ctxt);
    var contentTypeId = itemTable.getAttribute("CId");

    if (contentTypeId != null && contentTypeId.indexOf("0x0106") == 0 && HasRights(0x10, 0x0)) {
        strDisplayText = Strings.STS.L_ExportContact_Text;
        strAction = "STSNavigate('" + ctxt.HttpPath + "&Cmd=Display&CacheControl=1&List=" + ctxt.listName + "&ID=" + currentItemID + "&Using=" + escapeProperly(ctxt.listUrlDir) + "/vcard.vcf" + "')";
        strImagePath = ctxt.imagesPath + "exptitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(350));
        CUIInfo(menuOption, "ExportContact", ["ExportContact"]);
        menuOption.id = "ID_ExportContact";
    }
    CAMSep(m);
    if (ctxt.verEnabled == 1) {
        AddVersionsMenuItem(m, ctxt, currentItemEscapedFileUrl);
    }
    if (HasRights(0x0, 0x4) && ctxt.isModerated == true && HasRights(0x0, 0x10) && HasRights(0x0, 0x21000) && ctxt.listBaseType != 4 && currentItemID.indexOf(".0.") < 0) {
        strDisplayText = Strings.STS.L_ModerateItem_Text;
        strAction = "NavigateToApproveRejectAspx(event, '" + ctxt.HttpRoot + "/_layouts/15/approve.aspx?List=" + ctxt.listName + "&ID=" + fixedItemId;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = ctxt.imagesPath + "apprj.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(850));
        CUIInfo(menuOption, "Moderate", ["Moderate"]);
        menuOption.id = "ID_ModerateItem";
    }
    CAMSep(m);
    AddWorkflowsMenuItem(m, ctxt);
    var alertsEnabled = typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null && _spPageContextInfo.alertsEnabled;

    if (currentItemID.indexOf(".0.") < 0 && HasRights(0x80, 0x0) && !ctxt.ExternalDataList && alertsEnabled) {
        strDisplayText = Strings.STS.L_Subscribe_Text;
        strAction = "NavigateToSubNewAspxV4(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&ID=" + currentItemID + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1100));
        menuOption.id = "ID_Subscribe";
        CUIInfo(menuOption, "Subscribe", ["Subscribe"]);
    }
    if (alertsEnabled || !ctxt.ExternalDataList && HasRights(0x0, 0x4)) {
        CAMSep(m);
    }
    AddManagePermsMenuItem(m, ctxt, ctxt.listName, currentItemID);
    if (currentItemID.indexOf(".0.") < 0 && HasRights(0x0, 0x8) && !currentItemIsEventsExcp) {
        if (ctxt.listBaseType == 4)
            strDisplayText = Strings.STS.L_DeleteResponse_Text;
        else
            strDisplayText = Strings.STS.L_DeleteItem_Text;
        strAction = "DeleteListItem()";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1180));
        CUIInfo(menuOption, "Delete", ["Delete"]);
        menuOption.id = "ID_DeleteItem";
        CUIInfo(menuOption, "Delete", ["Delete"]);
    }
    var hasProgId = currentItemProgId != null && currentItemProgId != "";

    if (currentItemFSObjType == "1" && !hasProgId && HasRights(0x0, 0x4) && ctxt.ContentTypesEnabled && ctxt.listTemplate != 108) {
        strDisplayText = Strings.STS.L_CustomizeNewButton_Text;
        strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + ctxt.listName + "&RootFolder=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1170));
        CUIInfo(menuOption, "ChangeNewButton", ["ChangeNewButton"]);
        menuOption.id = "ID_CustomizeNewButton";
    }
}
function ReplaceUrlTokens(urlWithTokens, ctxt) {
    var encodedToken;

    if (urlWithTokens == null || urlWithTokens == "") {
        urlWithTokens = "";
        return urlWithTokens;
    }
    if (currentItemID != null) {
        urlWithTokens = urlWithTokens.replace(/{ItemId}/g, currentItemID);
    }
    var query = null;
    var path = null;
    var qmarkIdx = urlWithTokens.indexOf("?");

    if (-1 != qmarkIdx && qmarkIdx + 2 < urlWithTokens.length) {
        query = urlWithTokens.substr(qmarkIdx + 1);
        path = urlWithTokens.substr(0, qmarkIdx + 1);
    }
    else {
        path = urlWithTokens;
    }
    if (currentItemFileUrl != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(currentItemFileUrl));
            query = query.replace(/{ItemUrl}/g, encodedToken);
        }
        path = path.replace(/{ItemUrl}/g, currentItemFileUrl);
    }
    if (ctxt.HttpRoot != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(ctxt.HttpRoot));
            query = query.replace(/{SiteUrl}/g, encodedToken);
        }
        path = path.replace(/{SiteUrl}/g, ctxt.HttpRoot);
    }
    if (ctxt.listName != null) {
        if (null != query) {
            encodedToken = escapeProperly(ctxt.listName);
            query = query.replace(/{ListId}/g, encodedToken);
        }
        path = path.replace(/{ListId}/g, ctxt.listName);
    }
    if (ctxt.listUrlDir != null) {
        if (null != query) {
            encodedToken = escapeProperly(unescapeProperly(ctxt.listUrlDir));
            query = query.replace(/{ListUrlDir}/g, encodedToken);
        }
        path = path.replace(/{ListUrlDir}/g, ctxt.listUrlDir);
    }
    var strSource = GetSource();

    path = path.replace(/{Source}/g, strSource);
    if (query != null) {
        if (path.length + query.length + strSource.length > 1950) {
            query = query.replace(/{Source}/g, "");
        }
        else {
            query = query.replace(/{Source}/g, strSource);
        }
    }
    if (null == query) {
        return path;
    }
    else {
        return path + query;
    }
}
var SYSTEM_ACCOUNT_ID;

function UseCustomAction(regType, regId, rightsHigh, rightsLow, fileType, progId, contentTypeId, listTemplateId, listName) {
    var applies = false;
    var trimmed = true;

    if (regId != null) {
        regId = regId.toLowerCase();
        if (regType == "FileType") {
            applies = fileType == regId.toLowerCase();
        }
        else if (regType == "ProgId") {
            applies = progId == regId.toLowerCase();
        }
        else if (regType == "ContentType") {
            applies = contentTypeId != null && contentTypeId.indexOf(regId.toLowerCase()) == 0;
        }
        else if (regType == "List") {
            if (null != listTemplateId && listTemplateId == regId) {
                applies = true;
            }
            else if (null != listName && listName == regId) {
                applies = true;
            }
        }
    }
    if (applies) {
        trimmed = !HasRights(rightsHigh, rightsLow) || IsTrimmedBySystem(rightsHigh, rightsLow);
    }
    return applies && !trimmed;
}
function InsertFeatureMenuItems(m, ctxt) {
    CAMSep(m);
    var fileType = GetAttributeFromItemTable(itemTable, "Ext", "FileType");
    var progId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
    var contentTypeId = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
    var listTemplateId = null;
    var listName = null;
    var ecbId = ecbItems;

    if (ctxt != null) {
        listTemplateId = String(ctxt.listTemplate);
        if (null != ctxt.listName && 0 < ctxt.listName.length) {
            listName = ctxt.listName.toLowerCase();
            ecbId = ecbId + "_" + listName;
        }
    }
    if (fileType != null)
        fileType = fileType.toLowerCase();
    if (progId != null)
        progId = progId.toLowerCase();
    if (contentTypeId != null)
        contentTypeId = contentTypeId.toLowerCase();
    var menuOption;
    var elemTBody = document.getElementById(ecbId);
    var cas = new Array(0);
    var ca = null;
    var i = 0;
    var seenProductIds = [];

    if (elemTBody != null) {
        for (var iMenuItem = 0; iMenuItem < elemTBody.childNodes.length; iMenuItem++) {
            var elemTR = elemTBody.childNodes[iMenuItem];
            var regType = GetInnerText(elemTR.childNodes[5]);
            var regId = GetInnerText(elemTR.childNodes[6]);
            var rightsHigh = parseInt(GetInnerText(elemTR.childNodes[3]));
            var rightsLow = parseInt(GetInnerText(elemTR.childNodes[4]));

            if (!UseCustomAction(regType, regId, rightsHigh, rightsLow, fileType, progId, contentTypeId, listTemplateId, listName)) {
                continue;
            }
            ca = new Object();
            ca["Title"] = GetInnerText(elemTR.childNodes[0]);
            ca["ImageUrl"] = GetInnerText(elemTR.childNodes[1]);
            ca["Action"] = GetInnerText(elemTR.childNodes[2]);
            ca["Sequence"] = parseInt(GetInnerText(elemTR.childNodes[7]));
            var productId = GetInnerText(elemTR.childNodes[8]);

            ca["ProductId"] = productId.length > 0 ? productId : null;
            ca["FromTenantApp"] = false;
            if (productId != null && productId.length > 0)
                seenProductIds[productId] = true;
            cas.push(ca);
        }
    }
    var tenantAppData = GetTenantAppData();

    if (tenantAppData != null) {
        var apps = tenantAppData["apps"];

        for (i = 0; i < apps.length; i++) {
            var app = apps[i];

            for (var j = 0; j < app["customActions"].length; j++) {
                try {
                    ca = app["customActions"][j];
                    if (!UseCustomAction(ca["registrationType"], ca["registrationId"], parseInt(ca["rightsHigh"]), parseInt(ca["rightsLow"]), fileType, progId, contentTypeId, listTemplateId, listName)) {
                        continue;
                    }
                    if (typeof seenProductIds[ca["productId"]] != "undefined")
                        continue;
                    var caTemp = new Object();

                    caTemp["Title"] = ca["title"];
                    caTemp["ImageUrl"] = ca["imageUrl"];
                    caTemp["Action"] = ca["action"];
                    caTemp["Sequence"] = parseInt(ca["sequence"]);
                    caTemp["ProductId"] = ca["productId"];
                    caTemp["FromTenantApp"] = true;
                    caTemp["AppTitle"] = app["title"];
                    cas.push(caTemp);
                }
                catch (e) {
                    throw e;
                }
            }
        }
    }
    for (i = 0; i < cas.length; i++) {
        ca = cas[i];
        var tdAction = ReplaceUrlTokens(ca["Action"], ctxt);
        var strAction = null;

        if (ca["FromTenantApp"]) {
            if (tdAction.startsWith("javascript:LaunchApp")) {
                strAction = tdAction;
            }
            else if (tdAction.substr(0, 11) != "javascript:") {
                strAction = "STSNavigate('" + STSScriptEncode(tdAction) + "')";
            }
        }
        else {
            if (tdAction.substr(0, 11) == "javascript:")
                strAction = tdAction;
            else
                strAction = "STSNavigate('" + STSScriptEncode(tdAction) + "')";
        }
        if (strAction != null) {
            var strImagePath = ca["ImageUrl"] == null ? null : ReplaceUrlTokens(ca["ImageUrl"], ctxt);

            menuOption = CIMOpt(m, ca["Title"], strAction, strImagePath, null, String(ca["Sequence"]));
            menuOption.id = "ID_" + ca["Title"];
        }
    }
}
function GetRootFolder2(ctxt) {
    var RootFolder = GetUrlKeyValue("RootFolder", false);
    var clvp = ctxt.clvp;

    if (clvp != null && clvp.rootFolder != null)
        RootFolder = clvp.rootFolder;
    if (RootFolder == "" || bValidSearchTerm) {
        var FileDirRef;

        if (itemTable != null)
            FileDirRef = GetAttributeFromItemTable(itemTable, "DRef", "FileDirRef");
        if (FileDirRef != null && FileDirRef != "") {
            if (FileDirRef.substring(0, 1) == "/")
                RootFolder = FileDirRef;
            else
                RootFolder = "/" + FileDirRef;
        }
        else
            RootFolder = ctxt.listUrlDir;
    }
    return RootFolder;
}
function GetRootFolder(ctxt) {
    var RootFolder = GetRootFolder2(ctxt);

    return "&RootFolder=" + escapeProperly(RootFolder);
}
function HasRights(requiredH, requiredL) {
    if (currentItemPermMaskH == null) {
        if (itemTable == null)
            return true;
        var pmStr = GetAttributeFromItemTable(itemTable, "Perm", "PermMask");

        if (pmStr == null)
            return true;
        var currentItemAuthor = itemTable.getAttribute("Author");

        SetCurrentPermMaskFromString(pmStr, currentItemAuthor);
    }
    if (!currentItemCanModify && (EqualRights(requiredH, requiredL, 0x0, 0x4) || EqualRights(requiredH, requiredL, 0x0, 0x8) || EqualRights(requiredH, requiredL, 0x40000000, 0x0))) {
        return false;
    }
    return (requiredL & currentItemPermMaskL) == requiredL && (requiredH & currentItemPermMaskH) == requiredH;
}
function EqualRights(rightsH1, rightsL1, rightsH2, rightsL2) {
    return rightsH1 == rightsH2 && rightsL1 == rightsL2;
}
function CheckIfHasRights(requiredH, requiredL, actualRightH, actualRightL) {
    return (requiredL & actualRightL) == requiredL && (requiredH & actualRightH) == requiredH;
}
function IsTrimmedBySystem(requiredH, requiredL) {
    var isTrimmed = false;

    if (CheckIfHasRights(0x0, 0x4, requiredH, requiredL) && itemTable != null) {
        if (currentItemCheckedOutUserId == null) {
            currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
        }
        isTrimmed = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctx.CurrentUserId != String(SYSTEM_ACCOUNT_ID);
    }
    return isTrimmed;
}
function GetPermMaskH(pmStr) {
    var pmLen = pmStr.length;

    if (pmLen <= 10) {
        return 0;
    }
    else {
        return parseInt(pmStr.substring(2, pmLen - 8), 16);
    }
}
function GetPermMaskL(pmStr) {
    var pmLen = pmStr.length;

    if (pmLen <= 10) {
        return parseInt(pmStr);
    }
    else {
        return parseInt(pmStr.substring(pmLen - 8, pmLen), 16);
    }
}
function SetCurrentPermMaskFromString(pmStr, currentItemAuthor) {
    currentItemPermMaskH = GetPermMaskH(pmStr);
    currentItemPermMaskL = GetPermMaskL(pmStr);
    currentItemCanModify = currentItemAuthor == null || HasRights(0x0, 0x800) || ctx.CurrentUserId == currentItemAuthor || ctx.CurrentUserId == null || typeof ctx.WriteSecurity == "number" && ctx.WriteSecurity == 1;
}
function AddSharedNamespaceMenuItems(m, ctxt) {
    var RootFolder = GetRootFolder(ctxt);

    setupMenuContext(ctxt);
    if (currentItemFileUrl == null)
        currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFSObjType == null)
        currentItemFSObjType = String(parseInt(GetAttributeFromItemTable(itemTable, "OType", "FSObjType")));
    if (currentItemContentTypeId == null)
        currentItemContentTypeId = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
    if (currentItemModerationStatus == null)
        currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    if (currentItemCheckedOutUserId == null)
        currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedoutToLocal == null)
        currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    if (currentItemCheckedoutToLocal != "1")
        currentItemCheckedoutToLocal = "0";
    var systemCheckout = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID);

    bIsCheckout = 0;
    if (ctxt.isForceCheckout == true && currentItemCheckedOutUserId == "" && currentItemFSObjType != "1") {
        bIsCheckout = 1;
    }
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null) {
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    }
    var menuOption;
    var strDisplayText;
    var strAction;
    var strImagePath;

    if (ctxt.listBaseType == 1)
        strDisplayText = Strings.STS.L_ViewProperties_Text;
    else if (ctxt.listBaseType == 4)
        strDisplayText = Strings.STS.L_ViewResponse_Text;
    else
        strDisplayText = Strings.STS.L_ViewItem_Text;
    var contentTypeParam = "";

    if (currentItemContentTypeId != null && currentItemContentTypeId != "")
        contentTypeParam = "&ContentTypeID=" + currentItemContentTypeId;
    var strSeperator = "&";

    if (ctxt.displayFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    var viewItemUrl = ctxt.displayFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;

    viewItemUrl = AddSourceToUrl(viewItemUrl) + RootFolder;
    if (301 == ctxt.listTemplate) {
        strAction = "EditItem('" + viewItemUrl + "')";
    }
    else {
        strAction = "EditItem2(event, '" + viewItemUrl + "')";
    }
    menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(200));
    CUIInfo(menuOption, "ViewProperties", ["ViewProperties"]);
    if (ctxt.listBaseType == 1) {
        menuOption.id = "ID_ViewProperties";
    }
    else {
        menuOption.id = "ID_ViewItem";
    }
    if (HasRights(0x0, 0x4) && !systemCheckout && !currentItemIsEventsDeletedExcp) {
        if (ctxt.listBaseType == 1)
            strDisplayText = Strings.STS.L_EditProperties_Text;
        else if (ctxt.listBaseType == 4)
            strDisplayText = Strings.STS.L_EditResponse_Text;
        else
            strDisplayText = Strings.STS.L_EditItem_Text;
        strSeperator = "&";
        if (ctxt.editFormUrl.indexOf("?") == -1)
            strSeperator = "?";
        if (ctxt.listBaseType == 1) {
            strAction = "EditItemWithCheckoutAlert(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;
            strAction = AddSourceToUrl(strAction) + RootFolder + "'," + String(bIsCheckout) + ",'" + currentItemCheckedoutToLocal + "','" + STSScriptEncode(currentItemFileUrl) + "','" + ctxt.HttpRoot + "')";
        }
        else {
            if (FV4UI()) {
                strAction = "EditItem2(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam + "')";
            }
            else {
                strAction = "EditItem('" + ctxt.editFormUrl + strSeperator + "ID=" + currentItemID + contentTypeParam;
                strAction = AddSourceToUrl(strAction) + "')";
            }
        }
        strImagePath = ctxt.imagesPath + "edititem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(220));
        if (ctxt.listBaseType == 1) {
            menuOption.id = "ID_EditProperties";
            CUIInfo(menuOption, "EditProperties", ["EditProperties"]);
        }
        else {
            menuOption.id = "ID_EditItem";
            CUIInfo(menuOption, "EditProperties", ["EditProperties"]);
        }
        if (ctxt.listTemplate == 106 && currentItemID.indexOf(".0.") > 0) {
            var SeriesIdEnd = currentItemID.indexOf(".0.");
            var itemSeriesID = currentItemID.substr(0, SeriesIdEnd);

            strDisplayText = Strings.STS.L_EditSeriesItem_Text;
            strAction = "EditItem2(event, '" + ctxt.editFormUrl + strSeperator + "ID=" + itemSeriesID + contentTypeParam;
            strAction = AddSourceToUrl(strAction) + "')";
            strImagePath = ctxt.imagesPath + "recurrence.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(230));
            CUIInfo(menuOption, "EditSeriesItem", ["EditSeriesItem"]);
            menuOption.id = "ID_EditSeriesItem";
        }
    }
}
function AddSolutionsCatalogMenuItems(m, ctxt) {
    if (HasRights(0x0, 0x4)) {
        if (currentItemFSObjType != "1") {
            var addDelete = true;
            var url = GetAttributeFromItemTable(itemTable, "Url", null);

            if (url.length > 4) {
                var ext = (url.substr(url.length - 4)).toLowerCase();

                if (ext == ".wsp") {
                    var solutionHash = GetAttributeFromItemTable(itemTable, "SolutionHash", null);
                    var hash = GetAttributeFromItemTable(itemTable, "Hash", null);
                    var solutionItemId = GetAttributeFromItemTable(itemTable, "SolutionItemID", null);
                    var solutionStatus = GetAttributeFromItemTable(itemTable, "Status", null);
                    var id = GetAttributeFromItemTable(itemTable, "id", null);

                    if (solutionHash != "") {
                        if (solutionStatus == "") {
                            AddSolutionMenuActivate(m);
                        }
                        else if (solutionHash == hash) {
                            addDelete = false;
                            AddSolutionMenuDeactivate(m);
                        }
                        else {
                            AddSolutionMenuUpgrade(m);
                        }
                    }
                }
            }
            if (addDelete) {
                AddSolutionMenuDelete(m, ctxt);
            }
        }
    }
}
function AddSolutionMenuHelper(m, displayText, operation, imagePath, sequence, cuiInfo, menuOptionId) {
    var menuOption;
    var action = "if(event){event.currentItemID=" + currentItemID + ";}RunSolutionOperation(event, \"" + operation + "\")";

    menuOption = CAMOpt(m, displayText, action, imagePath, null, String(sequence));
    CUIInfo(menuOption, cuiInfo, [cuiInfo]);
    menuOption.id = menuOptionId;
}
function AddSolutionMenuActivate(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_ActivateSolution_Text, "ACT", "", 1210, "ActivateSolution", "ID_ActivateSolution");
    }
}
function AddSolutionMenuDeactivate(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_DeactivateSolution_Text, "DEA", "", 1220, "DeactivateSolution", "ID_DeactivateSolution");
    }
}
function AddSolutionMenuUpgrade(m) {
    if (typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true) {
        AddSolutionMenuHelper(m, Strings.STS.L_UpgradeSolution_Text, "UPG", "", 1230, "UpgradeSolution", "ID_UpgradeSolution");
    }
}
function AddSolutionMenuDelete(m, ctxt) {
    var menuOption;
    var currentItemEscapedFileUrl;

    currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var strDisplayText = Strings.STS.L_DeleteDocItem_Text;
    var isCopy = "false";

    if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") {
        isCopy = "true";
    }
    var strAction = "DeleteDocLibItem('" + ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + currentItemID + "&owsfileref=" + currentItemEscapedFileUrl + "&NextUsing=" + GetSource() + "'," + isCopy + ")";
    var strImagePath = ctxt.imagesPath + "delitem.gif";

    menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, "310");
    menuOption.id = "ID_DeleteDocItem";
    CUIInfo(menuOption, "Delete", ["Delete"]);
}
function RunSolutionOperation(evt, operation) {
    if (evt == null && !IsContextSet())
        return;
    var ctxt = currentCtx != null ? currentCtx : typeof evt.currentCtx == "object" ? evt.currentCtx : null;
    var currentSolutionItemID = currentItemID != null ? currentItemID : typeof evt.currentItemID == "string" ? evt.currentItemID : "";

    if (ctxt == null)
        return;
    var RootFolder = ctxt.listUrlDir;
    var source = GetSource();
    var editFormUrl = RootFolder + "/Forms/Activate.aspx?" + "Op=" + operation + "&ID=" + currentSolutionItemID + "&Source=" + source;

    if (ctxt.listBaseType == 1)
        editFormUrl = editFormUrl + GetRootFolder(ctxt);
    var callback = function() {
    };
    var popup = function() {
        var dopt = {
            url: editFormUrl,
            args: null,
            width: 650,
            height: 450,
            dialogReturnValueCallback: callback
        };
        var dlg = SP.UI.ModalDialog.showModalDialog(dopt);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.UI.Dialog.js", defd, popup);
}
function AddDocLibMenuItems(m, ctxt) {
    if (typeof window.Custom_AddDocLibMenuItems != "undefined") {
        if (window.Custom_AddDocLibMenuItems(m, ctxt))
            return;
    }
    var RootFolder = GetRootFolder(ctxt);
    var menuOption;
    var strDisplayText;
    var strAction;
    var strImagePath;

    AddSharedNamespaceMenuItems(m, ctxt);
    var currentItemEscapedFileUrl;

    if (currentItemFileUrl != null)
        currentItemEscapedFileUrl = escapeProperly(unescapeProperly(currentItemFileUrl));
    var serverFileRedirect = itemTable.getAttribute("SRed");
    var systemCheckout = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID);

    if (HasRights(0x0, 0x4) && HasRights(0x10, 0x0) && !systemCheckout && (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20))) {
        if (ctxt.isWebEditorPreview == 0 && ctxt.listBaseType == 1) {
            if (ctxt.listTemplate != 119) {
                setDocType();
                if (currentItemAppName != "" && currentItemOpenControl != "") {
                    if (!(ctxt.IsAppWeb && currentItemProgId == SPDesignerProgID)) {
                        strDisplayText = "";
                        if (currentItemAppName != " ")
                            strDisplayText = StBuildParam(Strings.STS.L_EditIn_Text, currentItemAppName);
                        else {
                            var objEditor = StsOpenEnsureEx2(currentItemOpenControl + ".3");

                            if (objEditor != null)
                                strDisplayText = Strings.STS.L_EditInApplication_Text;
                        }
                        if (strDisplayText != "") {
                            strAction = "editDocumentWithProgID2('" + currentItemFileUrl + "', '" + currentItemProgId + "', '" + currentItemOpenControl + "', '" + String(bIsCheckout) + "', '" + ctxt.HttpRoot + "', '" + currentItemCheckedoutToLocal + "', '" + currentItemOpenApp + "')";
                            strImagePath = ctxt.imagesPath + currentItemIcon;
                            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(260));
                            menuOption.id = "ID_EditIn_" + currentItemAppName;
                            menuOption.style.cssText = "display:none";
                            CUIInfo(menuOption, "EditDocument", ["EditDocument"]);
                        }
                    }
                }
            }
        }
    }
    CAMSep(m);
    if (HasRights(0x0, 0x4)) {
        if (currentItemFSObjType != "1") {
            if (ctxt.listBaseType == 1) {
                AddCheckinCheckoutMenuItem(m, ctxt, currentItemEscapedFileUrl);
            }
        }
    }
    if ((ctxt.verEnabled == 1 || ctxt.isModerated) && currentItemFSObjType != "1") {
        AddVersionsMenuItem(m, ctxt, currentItemEscapedFileUrl);
    }
    if (HasRights(0x0, 0x4)) {
        if (ctxt.isModerated == true && HasRights(0x0, 0x10) && ((currentItemModerationStatus == String(2) || !ctxt.EnableMinorVersions) && currentItemCheckedOutUserId == "" || currentItemFSObjType == "1")) {
            strDisplayText = Strings.STS.L_ModerateItem_Text;
            strAction = "NavigateToApproveRejectAspx(event, '" + ctxt.HttpRoot + "/_layouts/15/approve.aspx?List=" + ctxt.listName + "&ID=" + currentItemID;
            strAction = AddSourceToUrl(strAction) + GetRootFolder(ctxt) + "')";
            strImagePath = ctxt.imagesPath + "apprj.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(850));
            CUIInfo(menuOption, "Moderate", ["Moderate"]);
            menuOption.id = "ID_ModerateItem";
        }
    }
    CAMSep(m);
    AddWorkflowsMenuItem(m, ctxt);
    if (currentItemFSObjType != "1") {
        if (ctxt.PortalUrl != null) {
            strDisplayText = Strings.STS.L_AddToMyLinks_Text;
            strAction = "Portal_Tasks('PinToMyPage')";
            ;
            strImagePath = "";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1000));
            CUIInfo(menuOption, "AddToMyLinks", ["AddToMyLinks"]);
            menuOption.id = "ID_AddToMyLinks";
            menuOption.style.display = "none";
        }
    }
    else if (ctxt.listBaseType == 1 && HasRights(0x10, 0x0)) {
        AddWorkOfflineMenuItem(m, ctxt, currentItemFileUrl);
    }
    if (HasRights(0x80, 0x0) && typeof _spPageContextInfo != 'undefined' && _spPageContextInfo != null && typeof _spPageContextInfo.alertsEnabled == 'boolean' && _spPageContextInfo.alertsEnabled) {
        strDisplayText = Strings.STS.L_Subscribe_Text;
        strAction = "NavigateToSubNewAspxV4(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&ID=" + currentItemID + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1100));
        CUIInfo(menuOption, "Subscribe", ["Subscribe"]);
        menuOption.id = "ID_Subscribe";
        menuOption.style.display = "none";
    }
    if (currentItemFSObjType != "1") {
        AddSendSubMenu(m, ctxt);
        AddGotoSourceItemMenuItem(m, ctxt, itemTable, currentItemFSObjType);
        AddDocTransformSubMenu(m, ctxt);
    }
    CAMSep(m);
    AddManagePermsMenuItem(m, ctxt, ctxt.listName, currentItemID);
    if (HasRights(0x0, 0x8) && !systemCheckout) {
        strDisplayText = Strings.STS.L_DeleteDocItem_Text;
        var isCopy = "false";

        if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") {
            isCopy = "true";
        }
        strAction = "DeleteDocLibItem('" + ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + currentItemID + "&owsfileref=" + currentItemEscapedFileUrl + "&NextUsing=" + GetSource() + "'," + isCopy + ")";
        strImagePath = ctxt.imagesPath + "delitem.gif";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1190));
        menuOption.id = "ID_DeleteDocItem";
        CUIInfo(menuOption, "Delete", ["Delete"]);
    }
    if (HasRights(0x0, 0x4) && currentItemFSObjType == "1" && ctxt.ContentTypesEnabled && ctxt.listTemplate != 108) {
        strDisplayText = Strings.STS.L_CustomizeNewButton_Text;
        strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + ctxt.listName + "&RootFolder=" + currentItemEscapedFileUrl;
        strAction = AddSourceToUrl(strAction) + "')";
        strImagePath = "";
        menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1170));
        CUIInfo(menuOption, "ChangeNewButton", ["ChangeNewButton"]);
        menuOption.id = "ID_CustomizeNewButton";
    }
}
function AddManagePermsMenuItem(m, ctxt, listId, url) {
    if (!HasRights(0x0, 0x20000) || currentItemIsEventsExcp || ctxt.ExternalDataList || currentItemEvtType == 5)
        return;
    var strDisplayText = Strings.STS.L_SharedWithDialogTitle;
    var strAction = "EnsureScriptFunc('sharing.js', 'DisplaySharedWithDialog', function () { DisplaySharedWithDialog('" + ctxt.HttpRoot + "', '" + listId + "','" + url + "'); })";
    var strImagePath = ctxt.imagesPath + "permissions16.png";
    var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(1160));

    menuOption.id = "ID_MngPerms";
    CUIInfo(menuOption, "ManagePermissions", ["ManagePermissions"]);
}
function AddGotoSourceItemMenuItem(m, ctxt, itemsTable, objtype) {
    if (objtype != "1") {
        var attribute = itemsTable.getAttribute("CSrc");

        if (typeof attribute != "undefined" && attribute != null && attribute != "") {
            var strDisplayText = Strings.STS.L_GoToSourceItem_Text;
            var strAction = "NavigateToSourceItem(event, '" + STSScriptEncode(attribute) + "')";
            var strImagePath = ctxt.imagesPath + "goToOriginal.gif";
            var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(440));

            menuOption.id = "ID_GoToSourceItem";
            CUIInfo(menuOption, "GotoSourceItem", ["GotoSourceItem"]);
        }
    }
}
function CheckoutSingleItemFromECB(currentCtxt, itemsTable) {
    {
        var defd;

        try {
            defd = typeof inplview.CheckOutSingleItem;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "inplview.CheckOutSingleItem";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    inplview.CheckOutSingleItem(currentCtxt, itemsTable);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function AddCheckinCheckoutMenuItem(m, ctxt, url) {
    var menuOption;
    var strDisplayText;
    var strImagePath;
    var strAction;

    if (!HasRights(0x0, 0x4))
        return;
    if (currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctxt.CurrentUserId != String(SYSTEM_ACCOUNT_ID))
        return;
    if (currentItemCheckedOutUserId == null)
        currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedOutUserId != "") {
        if (currentItemCheckedOutUserId == ctxt.CurrentUserId || ctxt.CurrentUserId == null || HasRights(0x0, 0x100)) {
            strDisplayText = Strings.STS.L_Checkin_Text;
            if (!FV4UI())
                strAction = "NavigateToCheckinAspx('" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&FileName=" + url + "')";
            else
                strAction = "CheckInSingleItemFromECB(event, currentCtx, itemTable)";
            strImagePath = ctxt.imagesPath + "checkin.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(300));
            menuOption.id = "ID_Checkin";
            CUIInfo(menuOption, "CheckIn", ["CheckIn"]);
            strDisplayText = Strings.STS.L_DiscardCheckou_Text;
            strAction = "UnDoCheckOutwithNotification('" + ctxt.HttpRoot + "', '" + url + "')";
            strImagePath = ctxt.imagesPath + "unchkout.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(310));
            menuOption.id = "ID_DiscardCheckou";
            CUIInfo(menuOption, "DiscardCheckOut", ["DiscardCheckOut"]);
        }
    }
    else if (typeof g_disableCheckoutInEditMode == "undefined" || !g_disableCheckoutInEditMode) {
        strDisplayText = Strings.STS.L_Checkout_Text;
        if (currentItemOpenControl == "")
            setDocType();
        var opencontrol = "";
        var serverFileRedirect = itemTable.getAttribute("SRed");

        if (serverFileRedirect == null || serverFileRedirect == "" || HasRights(0x0, 0x20)) {
            if (!FV4UI())
                strAction = "CheckoutDocument('" + ctxt.HttpRoot + "', '" + url + "', '" + opencontrol + "')";
            else
                strAction = "CheckoutSingleItemFromECB(currentCtx, itemTable)";
            strImagePath = ctxt.imagesPath + "checkout.gif";
            menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(300));
            menuOption.id = "ID_Checkout";
            CUIInfo(menuOption, "CheckOut", ["CheckOut"]);
        }
        if (currentItemModerationStatus == null)
            currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
        if (ctxt.EnableMinorVersions) {
            if (currentItemUIString == null)
                currentItemUIString = GetAttributeFromItemTable(itemTable, "UIS", "UIString");
            var minorversion = parseInt(currentItemUIString) % 512;

            if ((currentItemModerationStatus == String(1) || currentItemModerationStatus == String(3)) && ctxt.isModerated || !ctxt.isModerated && minorversion != 0) {
                strDisplayText = Strings.STS.L_PublishItem_Text;
                strAction = "PublishMajorVersion(event, '" + ctxt.HttpRoot + "', 'List=" + ctxt.listName + "&FileName=" + url + "&Publish=true')";
                strImagePath = ctxt.imagesPath + "pubmajor.gif";
                menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(320));
                CUIInfo(menuOption, "Publish", ["Publish"]);
                menuOption.id = "ID_PublishItem";
            }
            else {
                var strMenuOptionId;
                var bCancelApproval = false;

                if (!ctxt.isModerated || currentItemModerationStatus == String(0)) {
                    strDisplayText = Strings.STS.L_UnPublishItem_Text;
                    strMenuOptionId = "ID_UnPublishItem";
                    strImagePath = ctxt.imagesPath + "unpub.gif";
                }
                else {
                    strDisplayText = Strings.STS.L_CancelPublish_Text;
                    strMenuOptionId = "ID_CancelPublish";
                    strImagePath = ctxt.imagesPath + "unapprv.gif";
                    bCancelApproval = true;
                }
                strAction = "UnPublish('" + ctxt.HttpRoot + "', 'FileName=" + url + "&UnPublish=true'," + String(bCancelApproval) + ")";
                menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(330));
                if (bCancelApproval)
                    CUIInfo(menuOption, "CancelApproval", ["CancelApproval"]);
                else
                    CUIInfo(menuOption, "Unpublish", ["Unpublish"]);
                menuOption.id = strMenuOptionId;
            }
        }
    }
}
function AddWorkflowsMenuItem(m, ctxt) {
    if (HasRights(0x0, 0x4) && !ctxt.ExternalDataList) {
        var strCTID = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");

        if (strCTID == null || strCTID.substr(0, 8) != "0x010801") {
            var strImagePath = ctxt.imagesPath + "workflows.png";
            var itemID;
            var SeriesIdEnd = ("" + currentItemID).indexOf(".0.");

            if (SeriesIdEnd > 0)
                itemID = currentItemID.substr(0, SeriesIdEnd);
            else
                itemID = currentItemID;
            var strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/Workflow.aspx?ID=" + itemID + "&List=" + ctxt.listName;

            strAction = AddSourceToUrl(strAction) + "')";
            var menuOption = CAMOpt(m, Strings.STS.L_Workflows_Text, strAction, strImagePath, null, String(900));

            CUIInfo(menuOption, "ViewWorkflows", ["ViewWorkflows"]);
            menuOption.id = "ID_Workflows";
        }
    }
}
function AddWorkspaceMenuItem(m, ctxt) {
    var menuOption;
    var strAction;
    var strSourceUrl = GetAttributeFromItemTable(itemTable, "SUrl", "SourceUrl");

    if (strSourceUrl != null && strSourceUrl != "" && strSourceUrl != "%20") {
        if (HasRights(0x0, 0x21000)) {
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/publishback.aspx?list=" + ctxt.listName + "&item=" + currentItemID + GetRootFolder(ctxt) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_PublishBack_Text, strAction, "", null, String(1140));
            CUIInfo(menuOption, "PublishBack", ["PublishBack"]);
            menuOption.id = "ID_PublishBack";
        }
    }
    else {
        if (HasRights(0x0, 0x800000) && HasRights(0x0, 0x21000) && HasRights(0x0, 0x4000000)) {
            strAction = "STSNavigate('" + ctxt.HttpRoot + "/_layouts/15/createws.aspx?list=" + ctxt.listName + "&item=" + currentItemID + GetRootFolder(ctxt) + "')";
            menuOption = CAMOpt(m, Strings.STS.L_CreateDWS_Text, strAction, "", null, String(1140));
            CUIInfo(menuOption, "CreateDocumentWorkspace", ["CreateDocumentWorkspace"]);
            menuOption.id = "ID_CreateDWS";
        }
    }
}
function AddVersionsMenuItem(m, ctxt, url) {
    if (currentItemID != null) {
        var strCurrentItemID = currentItemID.toString();

        if (strCurrentItemID.indexOf(".0.") >= 0)
            return;
    }
    var fixedItemId = currentItemID;

    if (currentItemIsEventsExcp) {
        if (currentItemID.indexOf(".") != -1)
            fixedItemId = (currentItemID.split("."))[0];
    }
    if (!HasRights(0x0, 0x40))
        return;
    var strDisplayText = Strings.STS.L_Versions_Text;
    var strAction = "NavigateToVersionsAspxV4(event, '" + ctxt.HttpRoot + "', 'list=" + ctxt.listName + "&ID=" + fixedItemId + "&FileName=" + url + "')";
    var strImagePath = ctxt.imagesPath + "versions.gif";
    var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath, null, String(800));

    CUIInfo(menuOption, "ViewVersions", ["ViewVersions"]);
    menuOption.id = "ID_Versions";
}
function AddWorkOfflineMenuItem(m, ctxt, url) {
    var stsData = GetStssyncData("documents", Strings.STS.L_WorkOffline_Text, ctxt.imagesPath + "tbsprsht.gif", ctxt.imagesPath);

    if (stsData != null) {
        var strDisplayText = stsData.BtnText;
        var strImagePath = stsData.BtnImagePath;

        if (strDisplayText != null) {
            var siteTitle = "";

            if (typeof ctxt.SiteTitle == "string" && ctxt.SiteTitle != null)
                siteTitle = STSScriptEncode(ctxt.SiteTitle);
            var encodedListTitle = "";

            if (typeof ctxt.ListTitle == "string" && ctxt.ListTitle != null)
                encodedListTitle = STSScriptEncode(ctxt.ListTitle);
            var strAction = "javascript:ExportHailStorm('documents','" + ctxt.HttpRoot + "','" + STSScriptEncode(ctxt.listName) + "','" + STSScriptEncode(siteTitle) + "','" + encodedListTitle + "','" + STSScriptEncode(ctxt.listUrlDir) + "','','" + STSScriptEncode(unescapeProperly(ctxt.listUrlDir)) + "'";

            strAction += ",'" + STSScriptEncode(unescapeProperly(url)) + "','" + currentItemID + "')";
            var menuOption = CAMOpt(m, strDisplayText, strAction, strImagePath);

            CUIInfo(menuOption, "ConnectFolderToClient", ["ConnectFolderToClient"]);
            menuOption.id = "ID_WorkOffline";
        }
    }
}
function AddVersionMenuItems(m, ctxt) {
    if (typeof AddVersionMenuItemsCore == "function") {
        AddVersionMenuItemsCore(m, ctxt);
    }
}
function NavigateToApproveRejectAspx(evt, strUrl) {
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function PublishMajorVersion(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/Checkin.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        SubmitFormPost(url);
    }
}
function _NavigateToSubNewAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/SubNew.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    STSNavigate(navigateUrl);
}
function NavigateToSubNewAspxV4(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/SubNew.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function NavigateToVersionsAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/Versions.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    STSNavigate(navigateUrl);
}
function NavigateToVersionsAspxV4(evt, strHttpRoot, strArgs) {
    var url = strHttpRoot + "/_layouts/15/Versions.aspx?" + strArgs;

    url = AddSourceToUrl(url);
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function NavigateToSendToOtherLocationV4(evt, url) {
    if (FV4UI()) {
        ShowInPopUI(evt, currentCtx, url);
    }
    else {
        STSNavigate(url);
    }
}
function UnDoCheckOutwithNotification(strHttpRoot, strUrl) {
    var returnVal = UnDoCheckOut(strHttpRoot, strUrl);

    if (returnVal) {
        var noti = Strings.STS.L_Notification_DiscardCheckOut;

        addNotification(noti, true);
    }
}
function UnDoCheckOut(strHttpRoot, strUrl) {
    try {
        var stsOpen = null;
        var strextension = SzExtension(unescapeProperly(strUrl));

        if (FSupportCheckoutToLocal(strextension))
            stsOpen = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
        if (stsOpen != null && typeof stsOpen.DiscardLocalCheckout == "function") {
            var strDocument = unescapeProperly(strUrl);

            if (strDocument.charAt(0) == "/")
                strDocument = window.location.protocol + "//" + window.location.host + strDocument;
            var fRet = stsOpen.DiscardLocalCheckout(strDocument);

            if (fRet) {
                SetWindowRefreshOnFocus();
                return fRet;
            }
            if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) {
                    return false;
                }
            }
            else {
                return fRet;
            }
        }
        else {
            if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) {
                return false;
            }
        }
    }
    catch (e) { }
    NavigateToCheckinAspx(strHttpRoot, "FileName=" + strUrl + "&DiscardCheckout=true");
    return true;
}
function UnPublish(strHttpRoot, strArgs, bCancelApproval) {
    var strAlert = Strings.STS.L_UnPublishWarning_Text;

    if (bCancelApproval)
        strAlert = Strings.STS.L_CancleApproval_TEXT;
    if (!confirm(strAlert))
        return;
    NavigateToCheckinAspx(strHttpRoot, strArgs);
}
function NavigateToCheckinAspx(strHttpRoot, strArgs) {
    var navigateUrl = strHttpRoot + "/_layouts/15/Checkin.aspx?" + strArgs;

    navigateUrl = AddSourceToUrl(navigateUrl);
    SubmitFormPost(navigateUrl);
}
function _NavigateToManagePermsPage(strHttpRoot, strListId, strFileRef) {
    NavigateToManagePermsPageEx(strHttpRoot, strListId, strFileRef, false);
}
function NavigateToManagePermsPageEx(strHttpRoot, strListId, strFileRef, isPopUI) {
    var strObjType = ",LISTITEM";
    var strUrl = strHttpRoot + "/_layouts/15/User.aspx?obj=" + strListId + "," + strFileRef + strObjType + "&List=" + strListId;

    strUrl = AddSourceToUrl(strUrl);
    if (isPopUI) {
        if (typeof window.frameElement.navigateParent == "function")
            window.frameElement.navigateParent(strUrl);
    }
    else {
        STSNavigate(strUrl);
    }
}
function NavigateToSourceItem(evt, url) {
    var match = url.match(/[^\/]*\/\/[^\/]*/g);
    var serverUrl = match[0];

    url = escapeProperly(url);
    var destUrl = serverUrl + "/_layouts/15/copyutil.aspx?GoToDispForm=1&Use=url&ItemUrl=" + url;

    destUrl = AddSourceToUrl(destUrl);
    STSNavigate(destUrl);
}
function setDocType() {
    var iconValue = GetAttributeFromItemTable(itemTable, "Icon", "DocIcon");
    var strArray = Boolean(iconValue) ? iconValue.split("|") : [];

    currentItemIcon = strArray[0];
    currentItemAppName = strArray[1];
    currentItemOpenControl = strArray[2];
    if (strArray[3] == null)
        currentItemOpenApp = '';
    else
        currentItemOpenApp = strArray[3];
    currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
}
function DeleteListItem() {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var ciid = currentItemID;
    var strMessage = Strings.STS.L_STSRecycleConfirm_Text;

    if (!ctxt.RecycleBinEnabled || ctxt.ExternalDataList)
        strMessage = Strings.STS.L_STSDelConfirm_Text;
    if (Boolean(ctxt.HasRelatedCascadeLists) && ctxt.CascadeDeleteWarningMessage != null)
        strMessage = ctxt.CascadeDeleteWarningMessage + strMessage;
    if (confirm(strMessage)) {
        var noti = Strings.STS.L_Notification_Delete;
        var nid = addNotification(noti, true);
        var clvp = ctxt.clvp;

        if (ctxt.ExternalDataList && clvp != null) {
            clvp.DeleteItemCore(ciid);
            clvp.pendingItems = [];
            if (typeof clvp.cctx.executeQueryAsync != "undefined")
                clvp.cctx.executeQueryAsync(function() {
                    if (clvp.rgehs != null && typeof clvp.rgehs.length == "number") {
                        if (clvp.rgehs.length == 1 && clvp.rgehs[0].get_serverErrorCode() == SP.ClientErrorCodes.redirect) {
                            GoToPage(clvp.rgehs[0].get_serverErrorValue());
                            return;
                        }
                        removeNotification(nid);
                        clvp.ShowErrorDialog(RefreshOnDialogClose);
                    }
                    else
                        RefreshPage(SP.UI.DialogResult.OK);
                }, function() {
                    removeNotification(nid);
                    if (typeof clvp.rgehs != "undefined")
                        clvp.ShowErrorDialog(function() {
                        });
                });
        }
        else {
            var urlToPost = ctxt.HttpPath + "&Cmd=Delete&List=" + ctxt.listName + "&ID=" + ciid + "&NextUsing=" + GetSource();

            if (null != currentItemContentTypeId)
                urlToPost += "&ContentTypeId=" + currentItemContentTypeId;
            SubmitFormPost(urlToPost);
        }
    }
}
function DeleteDocLibItem(delUrl, isCopy) {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var ciid = currentItemID;
    var fsobjType = currentItemFSObjType;
    var strConfirm;
    var isDocumentSet = false;

    if (currentItemFSObjType == "1") {
        if (currentItemContentTypeId != null) {
            delUrl += "&ContentTypeId=" + currentItemContentTypeId;
            if ((currentItemContentTypeId.substr(0, 8)).toLowerCase() == "0x0120d5") {
                isDocumentSet = true;
            }
        }
        if (isDocumentSet) {
            strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm2_Text : Strings.STS.L_STSDelConfirm2_Text;
        }
        else {
            strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm1_Text : Strings.STS.L_STSDelConfirm1_Text;
        }
    }
    else {
        strConfirm = ctxt.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm_Text : Strings.STS.L_STSDelConfirm_Text;
    }
    if (Boolean(ctxt.HasRelatedCascadeLists) && ctxt.CascadeDeleteWarningMessage != null)
        strConfirm = ctxt.CascadeDeleteWarningMessage + strConfirm;
    if (isCopy && currentItemFSObjType != "1")
        strConfirm = Strings.STS.L_NotifyThisIsCopy_Text + strConfirm;
    if (confirm(strConfirm)) {
        var noti = Strings.STS.L_Notification_Delete;

        addNotification(noti, true);
        SubmitFormPost(delUrl, false, true);
    }
}
function EditMenuDefaultForOnclick() {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;

    if (Boolean(ctxt.isVersions)) {
        STSNavigate(itemTable.getAttribute("verUrl"));
    }
    else if (ctxt.listTemplate == 200) {
        var currentInstanceID = currentItemID;

        MtgNavigate(currentInstanceID);
    }
    else {
        EditListItem();
    }
}
function EditListItem() {
    if (event.srcElement.tagName == "A" || event.srcElement.parentNode.tagName == "A")
        return;
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var strSeperator = "&";

    if (ctxt.editFormUrl.indexOf("?") == -1)
        strSeperator = "?";
    var editFormUrl = ctxt.editFormUrl + strSeperator + "ID=" + currentItemID;

    editFormUrl = AddSourceToUrl(editFormUrl);
    if (ctxt.listBaseType == 1)
        editFormUrl = editFormUrl + GetRootFolder(ctxt);
    STSNavigate2(event, editFormUrl);
}
function _DoNavigateToTemplateGallery(strSaveLocUrl, strTGUrl) {
    document.cookie = "MSOffice_AWS_DefSaveLoc=" + strSaveLocUrl;
    STSNavigate(strTGUrl);
}
function Portal_Tasks(cmd) {
    if (!IsContextSet())
        return;
    var ctxt = currentCtx;
    var fileRef = unescapeProperly(currentItemFileUrl);
    var idx1 = 0, idx2 = 0;

    idx1 = fileRef.lastIndexOf("/");
    idx2 = fileRef.lastIndexOf(".");
    if (idx1 < 0 || idx2 < 0 || idx1 > idx2)
        return;
    var fileName = fileRef.substr(idx1 + 1, idx2 - idx1 - 1);
    var serverUrl = "";

    idx1 = ctxt.HttpRoot.indexOf("://");
    if (idx1 > 0) {
        idx2 = ctxt.HttpRoot.indexOf("/", idx1 + 3);
        if (idx2 > 0)
            serverUrl = ctxt.HttpRoot.substring(0, idx2);
        else
            serverUrl = ctxt.HttpRoot;
    }
    var currentItemFileFullUrl = "";

    if (currentItemFileUrl.charAt(0) == "/" || (currentItemFileUrl.substr(0, 3)).toLowerCase() == "%2f") {
        currentItemFileFullUrl = serverUrl + currentItemFileUrl;
    }
    else {
        currentItemFileFullUrl = currentItemFileUrl;
    }
    var strParams = "";

    if (setElementValue("ListViewURL", currentItemFileFullUrl) == false) {
        strParams = strParams + "&ListViewURL=" + escapeProperly(currentItemFileFullUrl);
    }
    if (setElementValue("ListTitle", fileName) == false) {
        strParams = strParams + "&ListTitle=" + escapeProperly(fileName);
    }
    if (setElementValue("ListDescription", "") == false) {
        strParams = strParams + "&ListDescription=";
    }
    if (setElementValue("ReturnUrl", window.location.href) == false) {
        strParams = strParams + "&ReturnUrl=" + escapeProperly(window.location.href);
    }
    if (ctxt.PortalUrl.substr(0, 4) != "http") {
        ctxt.PortalUrl = serverUrl + ctxt.PortalUrl;
    }
    var url = ctxt.PortalUrl + "_vti_bin/portalapi.aspx?cmd=" + cmd;

    url = url + "&IconUrl=" + ctxt.imagesPath + currentItemIcon + strParams;
    SubmitFormPost(url);
}
function IsContextSet() {
    if (currentCtx == null)
        return false;
    else if (typeof currentCtx.isExplictLogin == "boolean" && currentCtx.isExplictLogin)
        return true;
    else if (currentCtx.HttpPath == null || currentItemID == null)
        return false;
    return true;
}
function ChangeContentType(id) {
    var obj = document.getElementById(id);
    var strUrl = window.location.href;
    var idxQuery = strUrl.indexOf("?");

    if (strUrl.indexOf("?") <= 0) {
        strUrl = strUrl + "?ContentTypeId=" + obj.value;
    }
    else if (strUrl.indexOf("&ContentTypeId=") <= 0) {
        strUrl = strUrl + "&ContentTypeId=" + obj.value;
    }
    else {
        var pattern = /&ContentTypeId=[^&]*/i;

        strUrl = strUrl.replace(pattern, "&ContentTypeId=" + obj.value);
    }
    STSNavigate(strUrl);
}
function _TopHelpButtonClick(strParam) {
    if (typeof navBarHelpOverrideKey != "undefined")
        return HelpWindowKey(navBarHelpOverrideKey);
    if (strParam != null)
        HelpWindowKey(strParam);
    else
        HelpWindowKey("HelpHome");
}
function GetSPHelpUrl(strParam) {
    var queryString;
    var siteurl;

    if (typeof strParam == "undefined") {
        queryString = "?Lcid=" + Strings.STS.L_Language_Text;
    }
    else {
        queryString = "?Lcid=" + Strings.STS.L_Language_Text + strParam;
    }
    var strHelpUrl;

    if (typeof ctx == "undefined" || ctx == null) {
        if (typeof currentCtx != 'undefined' && currentCtx != null)
            ctx = currentCtx;
        else if (typeof ctxFilter != 'undefined' && ctxFilter != null)
            ctx = ctxFilter;
    }
    if (typeof ctx != "undefined" && ctx != null && typeof ctx.HttpRoot != "undefined" && ctx.HttpRoot != null) {
        siteurl = ctx.HttpRoot;
        if (siteurl.charAt(siteurl.length - 1) != '/') {
            siteurl = siteurl + "/";
        }
        strHelpUrl = siteurl + "_layouts/15/help.aspx";
    }
    if (strHelpUrl == null && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && typeof _spPageContextInfo.webServerRelativeUrl != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        siteurl = _spPageContextInfo.webServerRelativeUrl;
        if (siteurl.charAt(siteurl.length - 1) != '/') {
            siteurl = siteurl + "/";
        }
        strHelpUrl = siteurl + "_layouts/15/help.aspx";
    }
    if (strHelpUrl == null) {
        strHelpUrl = "/_layouts/15/help.aspx";
    }
    return strHelpUrl + queryString;
}
function ShowHelpWindow(strUrl) {
    if (strUrl != null) {
        var wndHelp = window.open(strUrl, 'STSHELP_15', 'height=500,location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no,width=400');

        wndHelp.focus();
    }
}
function HelpWindowHelper(strParam) {
    if (SuiteLinksEmptyOrSuiteHelpLinkIsCached()) {
        GetSuiteLinks(null, function(linksJson) {
            SP.SOD.executeFunc("suitelinks.js", "GetSPOHelpUrl", function() {
                var onlineHelpUrl = GetSPOHelpUrl(linksJson, strParam);

                ShowHelpWindow(onlineHelpUrl);
            });
        });
    }
    else {
        var onPremHelpUrl = GetSPHelpUrl(strParam);

        ShowHelpWindow(onPremHelpUrl);
    }
}
function _HelpWindowKey(strKey) {
    if (strKey != null)
        HelpWindowHelper("&Key=" + strKey + "&ShowNav=true");
    else
        HelpWindowHelper("&Key=HelpHome&ShowNav=true");
}
function _HelpWindowUrl(strUrl) {
    HelpWindowHelper("&Url=" + strUrl);
}
function _HelpWindow() {
    HelpWindowKey("HelpHome");
}
function _ToggleFullScreenMode() {
    var bIsFullScreenMode = HasCssClass(document.body, "ms-fullscreenmode");

    SetFullScreenMode(!bIsFullScreenMode);
}
function SetFullScreenMode(fEnableFullScreenMode) {
    var bodyElement = document.body;
    var fsmButtonElement = document.getElementById('fullscreenmode');
    var efsmButtonElement = document.getElementById('exitfullscreenmode');

    if (bodyElement != null) {
        SetCookieEx("WSS_FullScreenMode", fEnableFullScreenMode, true, window);
        if (fEnableFullScreenMode) {
            AddCssClassToElement(bodyElement, "ms-fullscreenmode");
            if (fsmButtonElement != null && efsmButtonElement != null) {
                fsmButtonElement.style.display = 'none';
                efsmButtonElement.style.display = '';
            }
        }
        else {
            RemoveCssClassFromElement(bodyElement, "ms-fullscreenmode");
            if (fsmButtonElement != null && efsmButtonElement != null) {
                fsmButtonElement.style.display = '';
                efsmButtonElement.style.display = 'none';
            }
        }
        if ('undefined' != typeof document.createEvent && 'function' == typeof window.dispatchEvent) {
            var evt = document.createEvent("Event");

            evt.initEvent("resize", false, false);
            window.dispatchEvent(evt);
        }
        else if ('undefined' != typeof document.createEventObject) {
            document.body.fireEvent('onresize');
        }
        CallWorkspaceResizedEventHandlers();
    }
}
function FullScreenModeOnKeyDown(e) {
    if (e == null)
        e = window.event;
    var nKeyCode;

    if (e == null)
        return true;
    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (e.altKey && nKeyCode == 122) {
        _ToggleFullScreenMode();
    }
    return true;
}
function InitFullScreenMode() {
    AttachEvent("keydown", FullScreenModeOnKeyDown, document.body);
    SetFullScreenMode(GetCookieEx("WSS_FullScreenMode", window) == "true");
}
function EditSelectedImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _EditSelectedImages();
}
function DeleteImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _DeleteImages();
}
function SendImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _SendImages();
}
function DownloadImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return;
    }
    _DownloadImages();
}
function MtgToggleTimeZone() {
    var timezoneElem = document.getElementById("TimeZoneSection");
    var timezoneLinkElem = document.getElementById("TimeZoneLink");

    if (timezoneElem.style.display == "none") {
        timezoneElem.style.display = "";
        timezoneLinkElem.innerHTML = "&lt;&lt;";
        timezoneLinkElem.title = Strings.STS.L_HideTZ_Text;
        SetMtgCookie("MtgTimeZone", "1", "");
    }
    else {
        timezoneElem.style.display = "none";
        timezoneLinkElem.innerHTML = "&gt;&gt;";
        timezoneLinkElem.title = Strings.STS.L_ShowTZ_Text;
        SetMtgCookie("MtgTimeZone", "0", "");
    }
}
function GetPageUrl(fHomePage) {
    var url = undefined;

    if (fHomePage && typeof g_webUrl != "undefined")
        url = g_webUrl;
    else if (typeof g_pageUrl != "undefined")
        url = g_pageUrl;
    return unescapeProperly(url);
}
function MtgNavigate(instanceId) {
    if (typeof g_instanceId != "undefined" && instanceId == g_instanceId)
        return;
    if (typeof g_fPageGlobal != "undefined")
        var fHomePage = !g_fPageGlobal;
    if (typeof g_thispagedata != "undefined")
        var thispagedata = g_thispagedata;
    window.location.href = GetPageUrl(fHomePage) + '?InstanceID=' + instanceId + '&' + thispagedata;
}
function GoToMtgMove(listUrlDir, instanceId, instanceDateTime, instanceDateTimeISO) {
    window.location.href = listUrlDir + '/movetodt.aspx' + '?FromInstanceID=' + instanceId + '&FromInstanceDate=' + escapeProperly(instanceDateTime) + '&FromInstanceDateISO=' + escapeProperly(instanceDateTimeISO) + '&Source=' + escapeProperly(window.location.href);
}
function MtgKeep(httpPath, listId, instanceId) {
    if (confirm(Strings.STS.L_MtgKeepConfirm_Text))
        SubmitFormPost(httpPath + '&Cmd=MtgKeep&List=' + escapeProperly(listId) + '&EditInstanceID=' + instanceId + '&NextUsing=' + escapeProperly(window.location.href));
}
function MtgDelete(httpPath, listId, instanceId) {
    if (confirm(Strings.STS.L_MtgDeleteConfirm_Text)) {
        var fHomePage = instanceId == g_instanceId;

        SubmitFormPost(httpPath + '&Cmd=MtgMove&List=' + escapeProperly(listId) + '&FromInstanceID=' + instanceId + '&ToInstanceID=-3' + '&NextUsing=' + escapeProperly(fHomePage ? GetPageUrl(true) : window.location.href));
    }
}
function SetMtgCookie(cookieName, value, path) {
    document.cookie = cookieName + "=" + value + ";path=" + path;
}
function SetAsLastTabVisited() {
    if (typeof g_pageUrl != "undefined" && typeof g_webUrl != "undefined")
        SetMtgCookie("MtgLastTabVisited", escapeProperly(unescapeProperly(g_pageUrl)), escapeProperlyCore(unescapeProperly(g_webUrl), true));
}
function MtgRedirect() {
    var strServerRelative = GetCookie("MtgLastTabVisited");

    if (strServerRelative == null) {
        if (typeof g_webUrl != "undefined")
            strServerRelative = g_webUrl;
        else
            strServerRelative = "../../";
    }
    else
        strServerRelative = escapeProperlyCore(strServerRelative, true);
    window.location.href = strServerRelative;
}
function MakeMtgInstanceUrl(strUrl, instanceID) {
    if (instanceID != "undefined" && instanceID != '') {
        var iQueryString = strUrl.indexOf('?');

        if (iQueryString == -1 || strUrl.indexOf('InstanceID=', iQueryString) == -1)
            strUrl = strUrl + (iQueryString == -1 ? '?' : '&') + 'InstanceID=' + instanceID;
    }
    return strUrl;
}
var filterTable;
var bIsFilterMenuShown;
var bIsFilterDataLoaded;
var filterImageCell;
var currentFilterMenu;
var loadingFilterMenu;
var ctxFilter;
var bIsFilterKeyPress;
var filterStr;
var strFieldName;
var bMenuLoadInProgress;
var strFilteredValue;
var bIsMultiFilter;
var fnOnFilterMouseOut;

function resetFilterMenuState() {
    if (bMenuLoadInProgress)
        return;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterTable = null;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    if (fnOnFilterMouseOut != null)
        fnOnFilterMouseOut();
    fnOnFilterMouseOut = null;
}
function setupFilterMenuContext(ctxArg) {
    ctxFilter = ctxArg;
}
function IsFilterMenuOn() {
    var bIsOpen = false;

    if (!bIsFilterMenuShown)
        return false;
    bIsOpen = bMenuLoadInProgress || MenuHtc_isOpen(currentFilterMenu) || MenuHtc_isOpen(loadingFilterMenu);
    if (!bIsOpen)
        bIsFilterMenuShown = false;
    return bIsOpen;
}
function IsFilterMenuEnabled(elm) {
    if (elm == null)
        return true;
    var elmCtx = CtxFromElement(elm);

    if (elmCtx != null && typeof elmCtx.fullListSearch != "undefined" && Boolean(elmCtx.fullListSearch)) {
        return false;
    }
    return true;
}
function OnMouseOverFilterDeferCall(elm) {
    if (!IsFilterMenuEnabled(elm))
        return false;
    if (IsFilterMenuOn() || bMenuLoadInProgress) {
        return false;
    }
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1)
        return false;
    if (typeof elm.FilterDisable != undefined && elm.FilterDisable == "TRUE")
        return false;
    if (IsFieldNotFilterable(elm) && IsFieldNotSortable(elm))
        return false;
    if (filterTable == elm)
        return true;
    if (filterTable != null)
        OnMouseOutFilter();
    filterTable = elm;
    var isTable = filterTable.tagName == "TABLE";
    var curCtx;

    try {
        curCtx = eval("ctx" + filterTable.getAttribute('CtxNum'));
    }
    catch (e) { }
    if (typeof curCtx == 'undefined')
        return false;
    var createCtx = new Function("setupFilterMenuContext(ctx" + filterTable.getAttribute('CtxNum') + ");");

    createCtx();
    if (isTable) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable);
    }
    else {
        var par = filterTable.parentNode;

        SetEvent("click", CreateFilterMenu, par);
        SetEvent("contextmenu", CreateFilterMenu, par);
        SetEvent("mouseout", OnMouseOutFilter, par);
        CreateCtxImg(par, OnMouseOutFilter);
    }
    if (isTable) {
        var titleParent = filterTable.childNodes[0];
        var titleRow = titleParent.childNodes[0];

        filterImageCell = titleRow.childNodes[titleRow.childNodes.length - 1];
        var filterArrow = filterImageCell.childNodes[0];

        filterArrow.src = ctxFilter.imagesPath + "menudark.gif";
        filterArrow.alt = Strings.STS.L_OpenMenu_Text;
        filterArrow.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px";
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px";
        }
        filterImageCell.className = "ms-menuimagecell";
    }
    return true;
}
function OnMouseOutFilter(evt) {
    if (!IsFilterMenuOn() && filterTable != null && !bMenuLoadInProgress) {
        var isTable = filterTable.tagName == "TABLE";
        var par = filterTable.parentNode;

        if (isTable || par == null) {
            filterTable.className = "ms-unselectedtitle";
            filterTable.onclick = null;
            filterTable.oncontextmenu = null;
            filterTable.onmouseout = null;
        }
        else {
            if (evt == null)
                evt = window.event;
            if (evt != null) {
                var toElem = typeof evt.toElement != "undefined" && evt.toElement != null ? evt.toElement : evt.relatedTarget;

                if (par != null && toElem != null && IsContained(toElem, par))
                    return;
            }
            par.onclick = null;
            par.oncontextmenu = null;
            par.onmouseout = null;
            RemoveCtxImg(par);
        }
        if (isTable && filterImageCell != null && filterImageCell.childNodes.length > 0) {
            filterImageCell.childNodes[0].style.visibility = "hidden";
            filterImageCell.className = "";
        }
        resetFilterMenuState();
    }
}
function _OnFocusFilter(elm) {
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1)
        return false;
    if (!IsFilterMenuEnabled(elm))
        return false;
    elm.onfocusout = OnMouseOutFilter;
    elm.onkeydown = PopFilterMenu;
    var filterString = elm.getAttribute('FilterString');

    if (filterString != null)
        filterStr = filterString;
    var elmTmp = FindSTSMenuTable(elm, "CTXNum");

    if (elmTmp == null)
        return false;
    OnMouseOverFilter(elmTmp);
    return false;
}
function PopFilterMenu(e) {
    var nKeyCode;

    if (e == null)
        e = window.event;
    if (browseris.nav6up)
        nKeyCode = e.which;
    else
        nKeyCode = e.keyCode;
    if (!IsFilterMenuOn() && (e.shiftKey && nKeyCode == 13 || e.altKey && nKeyCode == 40)) {
        var headerlink = Boolean(e.srcElement) ? e.srcElement : e.target;

        if (!IsFilterMenuEnabled(headerlink))
            return true;
        var headerdiv = FindSTSMenuTable(headerlink, "CTXNum");

        if (headerdiv == null)
            return false;
        OnMouseOverFilterDeferCall(headerdiv);
        CreateFilterMenu(e);
        return false;
    }
    else {
        return true;
    }
}
function CreateFilterMenu(e) {
    if (filterTable == null || filterTable.tagName == "TABLE" && filterImageCell == null)
        return true;
    var headerCell = filterTable.tagName == "DIV" ? filterTable.parentNode : filterTable;
    var div = FindCtxImg(headerCell);

    if (div != null && div['shown'] == false)
        ShowCtxImg(div, true, headerCell);
    if (e == null)
        e = window.event;
    bIsFilterMenuShown = true;
    window["origBodyOnClickHandler"] = document.body.onclick;
    window.document.body.onclick = null;
    currentFilterMenu = CMenu("filter_menu");
    loadingFilterMenu = CMenu("filter_menu_loading");
    currentFilterMenu.setAttribute("CompactMode", "true");
    addSortMenuItems(currentFilterMenu, loadingFilterMenu);
    if (filterStr == null)
        addFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    else
        addAdHocFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    if (HasCssClass(headerCell, "ms-headerCellStylePressed") || HasCssClass(headerCell, "ms-headerCellStyleHover")) {
        RemoveCssClassFromElement(headerCell, "ms-headerCellStylePressed");
        RemoveCssClassFromElement(headerCell, "ms-headerCellStyleHover");
        AddCssClassToElement(headerCell, "ms-headerCellStyleMenuOpen");
    }
    if (e != null && e.stopPropagation != null) {
        e.stopPropagation();
    }
    return false;
}
function GetUrlWithNoSortParameters(strSortFields) {
    var url = ajaxNavigate.get_href();
    var uri = new URI(url, {
        disableEncodingDecodingForLegacyCode: true
    });

    uri.setFragment("");
    url = uri.getString();
    var strT;
    var ichStart = 0;
    var ichEqual;
    var ichAmp;

    do {
        ichEqual = strSortFields.indexOf("=", ichStart);
        if (ichEqual == -1)
            return url;
        strT = strSortFields.substring(ichStart, ichEqual);
        if (strT != "")
            url = RemoveQueryParameterFromUrl(url, strT);
        if (typeof strT == "string" && strT.length > "FilterField".length && strT.substring(0, "FilterField".length) == "FilterField") {
            var filterFieldNumString = strT.substring("FilterField".length);

            url = RemoveQueryParameterFromUrl(url, "FilterValue" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterLookupId" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterOp" + filterFieldNumString);
            url = RemoveQueryParameterFromUrl(url, "FilterData" + filterFieldNumString);
        }
        ichAmp = strSortFields.indexOf("&", ichEqual + 1);
        if (ichAmp == -1)
            return url;
        ichStart = ichAmp + 1;
    } while (strT != "");
    return url;
}
function IsFieldNotSortable(elm) {
    if (elm.getAttribute('Sortable') == "FALSE" || elm.getAttribute('SortDisable') == "TRUE" || elm.getAttribute('FieldType') == "MultiChoice") {
        return true;
    }
    return false;
}
function addSortMenuItems(menu, menuLoading) {
    if (IsFieldNotSortable(filterTable)) {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
        CAMSep(menu);
        CAMSep(menuLoading);
        return;
    }
    var strSortAsc = "";
    var strSortDesc = "";
    var strFieldType = "";
    var strImageAZ = GetThemedLocalizedImageUrl("SortUpGlyph.png");
    var strImageZA = GetThemedLocalizedImageUrl("SortDownGlyph.png");

    if (filterStr == null) {
        var str = ctxFilter.queryString;

        if (null == str || str == "") {
            str = filterTable.getAttribute('SortFields');
        }
        else {
            var sortField = GetUrlKeyValue("SortField", true, str);
            var sortFields = filterTable.getAttribute('SortFields');
            var sortField2 = GetUrlKeyValue("SortField", true, sortFields);

            if (sortField != sortField2) {
                str = SetUrlKeyValue("SortField", sortField2, false, str);
                str = SetUrlKeyValue("SortDir", GetUrlKeyValue("SortDir", true, sortFields), false, str);
            }
        }
        var uri = new URI(str, {
            disableEncodingDecodingForLegacyCode: true
        });

        if ((uri.getQuery()).length > 0)
            str = uri.getQuery();
        var ichSort = str.indexOf("&SortDir");

        if (ichSort == -1) {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
            CAMSep(menu);
            CAMSep(menuLoading);
            return;
        }
        var ichSortMac = str.indexOf("&", ichSort + 1);
        var url = GetUrlWithNoSortParameters(str);

        url = RemovePagingArgs(url);
        uri = new URI(url, {
            disableEncodingDecodingForLegacyCode: true
        });
        var strQ = "?" + uri.getQuery();

        if (strQ.length > 1)
            strQ += '&';
        var strQSav = strQ;

        if (ichSortMac < 0)
            ichSortMac = str.length;
        strQ += str.substr(0, ichSort) + "&SortDir=Asc" + str.substr(ichSortMac);
        uri.setQuery(strQ);
        strSortAsc = "HandleFilter(event, '" + STSScriptEncode(uri.getString()) + "', 1);";
        strQ = strQSav;
        strQ += str.substr(0, ichSort) + "&SortDir=Desc" + str.substr(ichSortMac);
        uri.setQuery(strQ);
        strSortDesc = "HandleFilter(event, '" + STSScriptEncode(uri.getString()) + "', 1);";
        if (strSortAsc.indexOf('?') >= 0)
            if ((strSortAsc.substr(strSortAsc.indexOf('?') + 1)).indexOf('?') >= 0)
                debugger;
        strFieldType = filterTable.getAttribute('FieldType');
        strFieldName = filterTable.getAttribute('Name');
    }
    else {
        var separator = ' ';
        var index = filterStr.lastIndexOf(separator);

        strFieldType = filterStr.substring(index + 1);
        if (strFieldType.substring(0, 2) == "x:")
            strFieldType = strFieldType.substring(2);
        var curStr = filterStr.substring(0, index);

        index = curStr.lastIndexOf(separator);
        strFieldName = curStr.substring(index + 1);
        if (strFieldName.substring(0, 1) == '@')
            strFieldName = strFieldName.substring(1);
        curStr = filterStr.substring(0, index);
        index = curStr.lastIndexOf(separator);
        if (index > 0) {
            strFieldName = curStr.substring(0, index);
        }
        var isTable = filterTable.tagName == "TABLE";
        var filterATag = null;

        if (isTable) {
            var titleParent = filterTable.childNodes[0];
            var titleRow = titleParent.childNodes[0];
            var filerATagParent = titleRow.childNodes[0];

            filterATag = filerATagParent.childNodes[0];
            if (filterATag.tagName == "TABLE") {
                var tmpElem = filterATag.childNodes[0];

                tmpElem = tmpElem.childNodes[0];
                tmpElem = tmpElem.childNodes[1];
                filterATag = tmpElem.childNodes[0];
            }
        }
        else {
            filterATag = filterTable.firstChild;
        }
        if (filterATag.tagName == "DIV")
            filterATag = filterATag.childNodes[0];
        var strSort = filterATag.href;

        strSort = strSort.replace(/%20/g, " ");
        if (strSort.indexOf("'ascending'") > 0) {
            strSortAsc = strSort.replace("'ascending'", "ascending");
            strSortDesc = strSort.replace("'ascending'", "descending");
        }
        else {
            strSortDesc = strSort.replace("'descending'", "descending");
            strSortAsc = strSort.replace("'descending'", "ascending");
        }
    }
    strFieldType = strFieldType.toLowerCase();
    if (strFieldType == "dateTime") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "integer" || strFieldType == "number" || strFieldType == "currency") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_SmallestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_LargestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "text" || strFieldType == "user" || strFieldType == "string") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_AOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_ZOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "calculated") {
        var strResultType = filterTable.getAttribute('ResultType');

        if (strResultType == "Number" || strResultType == "Currency") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_SmallestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_LargestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else if (strResultType == "dateTime") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else if (strResultType == "boolean") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_AOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_ZOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
    }
    else if (strFieldType == "attachments") {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_BlanksOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_AttachmentsOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    else if (strFieldType == "lookup") {
        var curFieldName = filterTable.getAttribute('Name');

        if (curFieldName == "Last_x0020_Modified" || curFieldName == "Created_x0020_Date") {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_OldestOnTop_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_NewestOnTop_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
        else {
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
            CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
        }
    }
    else {
        CAMOptFilter(menu, menuLoading, Strings.STS.L_Ascending_Text, strSortAsc, strImageAZ, true, "fmi_asc");
        CAMOptFilter(menu, menuLoading, Strings.STS.L_Descending_Text, strSortDesc, strImageZA, true, "fmi_desc");
    }
    CAMSep(menu);
    CAMSep(menuLoading);
}
function CAMOptFilter(menu, menuLoading, wzText, wzAct, wzImage, bEnabled, strId) {
    var mi;

    mi = CAMOpt(menu, wzText, wzAct, wzImage);
    mi.id = strId;
    if (!bEnabled) {
        mi.setAttribute("enabled", "false");
        mi.disabled = true;
    }
    mi = CAMOpt(menuLoading, wzText, wzAct, wzImage);
    mi.id = strId + "_p";
    if (!bEnabled) {
        mi.setAttribute("enabled", "false");
        mi.disabled = true;
    }
}
function ShowFilterLoadingMenu() {
    if (!bIsFilterDataLoaded && filterTable != null)
        FilterOMenu(loadingFilterMenu, filterTable);
}
function IsFieldNotFilterable(elm) {
    if (elm.getAttribute('Filterable') == "FALSE" || elm.getAttribute('FilterDisable') == "TRUE" || elm.getAttribute('FieldType ') == "Note" || elm.getAttribute('FieldType ') == "URL") {
        return true;
    }
    return false;
}
function addFilteringDisabledMenuItem(menu) {
    FilterOMenu(menu, filterTable);
    menu._onDestroy = OnMouseOutFilter;
}
function addFilterMenuItems(menu, menuLoading) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(menu);
        return;
    }
    var iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));

    if (iframe == null)
        return;
    var strDocUrl = ctxFilter.queryString;

    if (null == strDocUrl || strDocUrl == "") {
        strDocUrl = iframe.getAttribute('FilterLink');
    }
    if (strDocUrl == null || strDocUrl == "") {
        window.alert("Unexpected");
    }
    if (strDocUrl == '?') {
        var strHash = ajaxNavigate.getParam("InplviewHash" + ctxFilter.view);

        if (Boolean(strHash))
            strDocUrl += DecodeHashAsQueryString(strHash);
    }
    var strFilterField = escapeProperly(filterTable.getAttribute('Name'));

    strFilteredValue = null;
    var strFilterQuery = "";
    var filterNo = 0;
    var arrayField;
    var arrayValue;

    do {
        filterNo++;
        var multi = false;

        arrayField = strDocUrl.match(new RegExp("FilterField" + String(filterNo) + "=[^&#]*"));
        if (!Boolean(arrayField))
            arrayField = strDocUrl.match(new RegExp("FilterFields" + String(filterNo) + "=[^&#]*"));
        arrayValue = strDocUrl.match(new RegExp("&FilterValue" + String(filterNo) + "=[^&#]*"));
        if (!Boolean(arrayValue)) {
            arrayValue = strDocUrl.match(new RegExp("&FilterValues" + String(filterNo) + "=[^&#]*"));
            multi = true;
        }
        if (arrayField != null && arrayValue != null) {
            if (strFilteredValue == null) {
                strFilteredValue = getFilterValueFromUrl(arrayField.toString() + arrayValue.toString(), strFilterField);
                bIsMultiFilter = multi;
            }
            strFilterQuery = strFilterQuery + "&" + arrayField.toString() + arrayValue.toString();
            var arrayOp = strDocUrl.match(new RegExp("&FilterOp" + String(filterNo) + "=[^&#]*"));

            if (arrayOp != null)
                strFilterQuery = strFilterQuery + arrayOp.toString();
            var arrayLookupId = strDocUrl.match(new RegExp("&FilterLookupId" + String(filterNo) + "=[^&#]*"));

            if (arrayLookupId != null)
                strFilterQuery = strFilterQuery + arrayLookupId.toString();
            var arrayData = strDocUrl.match(new RegExp("&FilterData" + String(filterNo) + "=[^&#]*"));

            if (arrayData != null)
                strFilterQuery = strFilterQuery + arrayData.toString();
            if (arrayLookupId != null && arrayData == null && strFilteredValue != null) {
                addFilteringDisabledMenuItem(menu);
                return;
            }
        }
    } while (null != arrayField);
    var bFiltered = strFilteredValue != null;
    var strDisplayText = StBuildParam(Strings.STS.L_DontFilterBy_Text, filterTable.getAttribute('DisplayName'));
    var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, strFilterField, "", 0, ctxFilter.queryString, true)) + "')";
    var strImageUrl;

    if (bFiltered)
        strImageUrl = GetThemedImageUrl("DeleteFilterGlyph.png");
    else
        strImageUrl = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    CAMOptFilter(menu, menuLoading, strDisplayText, strFilterUrl, strImageUrl, bFiltered, "fmi_clr");
    var mi = CAMOpt(menuLoading, Strings.STS.L_Loading_Text, "");

    mi.setAttribute("enabled", "false");
    setTimeout("ShowFilterLoadingMenu()", 500);
    menuLoading._onDestroy = OnMouseOutFilter;
    arrayField = strDocUrl.match(new RegExp("MembershipGroupId=[^&]*"));
    if (arrayField != null) {
        strFilterQuery = strFilterQuery + "&" + arrayField.toString();
    }
    arrayField = strDocUrl.match(new RegExp("InstanceID=[^&]*"));
    if (arrayField != null) {
        strFilterQuery = strFilterQuery + "&" + arrayField.toString();
    }
    if (strFilterQuery != null && strFilterQuery.length > 0) {
        if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) {
            strFilterQuery = "&" + ReconcileQstringFilters(strFilterQuery.substring(1), ctxFilter.overrideFilterQstring);
        }
    }
    else {
        if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) {
            strFilterQuery = "&" + ctxFilter.overrideFilterQstring;
        }
    }
    var strRootFolder = "";
    var clvp;

    if (ctxFilter != null && (clvp = ctxFilter.clvp) != null && clvp.rootFolder != null && clvp.rootFolder.length > 0) {
        strRootFolder = "&RootFolder=" + escapeProperlyCore(clvp.rootFolder, true);
    }
    else {
        arrayField = strDocUrl.match(new RegExp("RootFolder=[^&]*"));
        if (arrayField != null)
            strRootFolder = "&" + arrayField.toString();
    }
    var strOverrideScope = "";

    arrayField = strFilterQuery.match(new RegExp("OverrideScope=[^&]*"));
    if (ctxFilter != null && typeof ctxFilter.overrideScope != "undefined" && arrayField == null) {
        strOverrideScope = "&OverrideScope=" + escapeProperlyCore(ctxFilter.overrideScope, false);
    }
    if (browseris.safari) {
        iframe.src = "/_layouts/15/blank.htm";
        iframe.style.offsetLeft = "-550px";
        iframe.style.offsetTop = "-550px";
        iframe.style.border = "0px";
        iframe.style.display = "block";
    }
    iframe.src = ctxFilter.HttpRoot + "/_layouts/15/filter.aspx?ListId=" + ctxFilter.listName + strRootFolder + strOverrideScope + "&FieldInternalName=" + strFilterField + "&ViewId=" + ctxFilter.view + "&FilterOnly=1&Filter=1" + strFilterQuery;
    bMenuLoadInProgress = true;
}
function getFilterValueFromUrl(strUrl, strFilterField) {
    var ichStart, ichEnd;
    var strFilterFieldUrl;

    ichStart = strUrl.indexOf("=");
    if (ichStart == -1)
        return null;
    ichEnd = strUrl.indexOf("&");
    if (ichEnd == -1)
        return null;
    if (ichEnd < ichStart)
        return null;
    strUrl = CanonicalizeUrlEncodingCase(strUrl);
    strFilterFieldUrl = strUrl.substring(ichStart + 1, ichEnd);
    if (strFilterFieldUrl == strFilterField) {
        var strUnescaped;

        ichStart = strUrl.indexOf("=", ichEnd + 1);
        if (ichStart == -1)
            return null;
        strUnescaped = strUrl.substr(ichStart + 1);
        strUnescaped = unescapeProperly(strUnescaped);
        return strUnescaped;
    }
    return null;
}
function _OnIframeLoad() {
    bMenuLoadInProgress = false;
    if (filterTable != null && filterTable.getAttribute('Name') != null) {
        var iframe = null;

        iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));
        if (iframe != null) {
            var iframeDoc = null;
            var fieldName = filterTable.getAttribute('Name');

            if (typeof iframe.contentDocument != "undefined")
                iframeDoc = iframe.contentDocument;
            if (iframeDoc == null && null != iframe.contentWindow)
                iframeDoc = iframe.contentWindow.document;
            if (iframeDoc == null) {
                iframeDoc = iframe.ownerDocument;
            }
            if (iframeDoc != null) {
                var customFilterTable = iframeDoc.getElementById("diidFilterCustomTable");

                if (customFilterTable != null && (typeof iframe.contentWindow != "undefined" && null != iframe.contentWindow && typeof iframe.contentWindow.CustomPopulateFilterMenu != "undefined" && null != iframe.contentWindow.CustomPopulateFilterMenu || typeof iframeDoc.defaultView != "undefined" && null != iframeDoc.defaultView && typeof iframeDoc.defaultView.CustomPopulateFilterMenu != "undefined" && null != iframeDoc.defaultView.CustomPopulateFilterMenu)) {
                    if (null != iframe.contentWindow) {
                        iframe.contentWindow.CustomPopulateFilterMenu(currentFilterMenu, customFilterTable, "FilterIframe" + filterTable.getAttribute('CtxNum'), ctxFilter.view, fieldName);
                    }
                    else {
                        iframeDoc.defaultView.CustomPopulateFilterMenu(currentFilterMenu, customFilterTable, "FilterIframe" + filterTable.getAttribute('CtxNum'), ctxFilter.view, fieldName);
                    }
                }
                else {
                    var select = iframeDoc.getElementById("diidFilter" + fieldName);

                    fieldName = escapeProperly(fieldName);
                    if (select != null) {
                        var c = select.childNodes.length;

                        if (c > 500) {
                            addFilterOptionMenuItem();
                        }
                        else {
                            var rgChoices = select.childNodes;

                            for (var i = 1; i < c; i++) {
                                var strMenuText;

                                if (rgChoices[i].innerText)
                                    strMenuText = rgChoices[i].innerText;
                                else if (rgChoices[i].textContent)
                                    strMenuText = rgChoices[i].textContent;
                                else
                                    strMenuText = rgChoices[i].innerHTML;
                                var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, fieldName, rgChoices[i].value, i, ctxFilter.queryString, true)) + "')";
                                var mi = CAMOpt(currentFilterMenu, strMenuText, strFilterUrl);

                                if (ctxFilter.IsClientRendering)
                                    mi.setAttribute("checked", "false");
                                if (strFilteredValue != null) {
                                    var arrayFilteredValue = [];

                                    if (bIsMultiFilter)
                                        arrayFilteredValue = ParseMultiColumnValue(strFilteredValue, ';#', true);
                                    else
                                        arrayFilteredValue.push(strFilteredValue);
                                    for (var j in arrayFilteredValue) {
                                        if (arrayFilteredValue[j] != null && arrayFilteredValue[j] == rgChoices[i].value)
                                            mi.setAttribute("checked", "true");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        alert(Strings.STS.L_FilterThrottled_Text);
                        return;
                    }
                }
                bIsFilterDataLoaded = true;
                if (loadingFilterMenu != null)
                    loadingFilterMenu._onDestroy = null;
                if (currentFilterMenu != null) {
                    currentFilterMenu._onDestroy = OnMouseOutFilter;
                    FilterOMenu(currentFilterMenu, filterTable);
                }
            }
        }
    }
}
function addFilterOptionMenuItem() {
    var strUrl = ajaxNavigate.get_href();

    strUrl = StURLSetVar2(strUrl, "Filter", "1");
    strUrl = StURLSetVar2(strUrl, "View", ctxFilter.view);
    strUrl = "javascript:SubmitFormPost('" + strUrl + "')";
    CAMOpt(currentFilterMenu, Strings.STS.L_FilterMode_Text, strUrl);
}
function OnMouseOverAdHocFilterDeferCall(elm, fieldStr) {
    filterStr = fieldStr;
    if (IsFilterMenuOn())
        return false;
    if (filterTable != null)
        OnMouseOutFilter();
    filterTable = elm;
    var isTable = filterTable.tagName == "TABLE";

    if (isTable) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable);
    }
    else {
        var par = filterTable.parentNode;

        SetEvent("click", CreateFilterMenu, par);
        SetEvent("contextmenu", CreateFilterMenu, par);
        SetEvent("mouseout", OnMouseOutFilter, par);
        CreateCtxImg(par, OnMouseOutFilter);
    }
    if (isTable) {
        var titleParent = filterTable.childNodes[0];
        var titleRow = titleParent.childNodes[0];

        filterImageCell = titleRow.childNodes[titleRow.childNodes.length - 1];
        var filterArrow = filterImageCell.childNodes[0];

        filterArrow.src = "/_layouts/15/images/menudark.gif?rev=23";
        filterArrow.alt = Strings.STS.L_OpenMenu_Text;
        filterArrow.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px";
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px";
        }
        filterImageCell.className = "ms-menuimagecell";
    }
    return true;
}
function addAdHocFilterMenuItems(menu, menuLoading) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(menu);
        return;
    }
    var mi = CAMOpt(menuLoading, Strings.STS.L_Loading_Text, "");

    mi.setAttribute("enabled", "false");
    FilterOMenu(menuLoading, filterTable);
    menuLoading._onDestroy = OnMouseOutFilter;
    if (typeof DoCallBack == "function")
        DoCallBack("__filter={" + filterStr + "}");
    filterStr = null;
}
function UpdateFilterCallback(filterHTML) {
    var select = "</OPTION>";
    var i = -1;

    i = filterHTML.indexOf(select, i + 1);
    var j = filterHTML.lastIndexOf('>', i);
    var strDisplayText = StBuildParam(Strings.STS.L_DontFilterBy_Text, strFieldName);
    var strImageUrl;
    var strFilterUrl = "";
    var index, index2;

    if (j < i - 1) {
        index = filterHTML.lastIndexOf('\"', i);
        if (index > 0) {
            index2 = filterHTML.lastIndexOf('\"', index - 1);
            if (index2 > 0) {
                strFilterUrl = filterHTML.substring(index2 + 1, index);
            }
        }
    }
    if (j == i - 1)
        strImageUrl = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    else
        strImageUrl = GetThemedImageUrl("DeleteFilterGlyph.png");
    var mi;

    if (i > 0) {
        mi = CAMOpt(currentFilterMenu, strDisplayText, strFilterUrl, strImageUrl);
        mi.setAttribute("enabled", j == i - 1 ? "false" : "true");
        index = i;
        var optionStart = "<OPTION href=\"";

        i = filterHTML.indexOf(select, i + 8);
        while (i > 0) {
            j = filterHTML.indexOf(optionStart, index + 8);
            j = filterHTML.indexOf('\"', j + 20);
            if (j > 0 && j < i) {
                var tagEndIndex = filterHTML.indexOf('>', j);
                var strMenuText = filterHTML.substring(tagEndIndex + 1, i);

                strFilterUrl = '';
                index = filterHTML.lastIndexOf('\"', j);
                if (index > 0) {
                    index2 = filterHTML.lastIndexOf('\"', index - 1);
                    if (index2 > 0) {
                        strFilterUrl = filterHTML.substring(index2 + 1, index);
                        strFilterUrl = strFilterUrl.replace(/&amp;/g, "&");
                    }
                }
                if (strMenuText.length > 40)
                    strMenuText = strMenuText.substring(0, 40) + "...";
                if (strMenuText.length > 0) {
                    mi = CAMOpt(currentFilterMenu, strMenuText, strFilterUrl);
                    if (tagEndIndex > j + 1)
                        mi.setAttribute("checked", "true");
                }
            }
            index = i;
            i = filterHTML.indexOf(select, i + 8);
        }
    }
    else {
        mi = CAMOpt(currentFilterMenu, Strings.STS.L_OpenMenu_Text, Strings.STS.L_NotFilterable_Text, "");
        mi.setAttribute("enabled", "false");
        FilterOMenu(currentFilterMenu, filterTable);
        return;
    }
    loadingFilterMenu._onDestroy = null;
    FilterOMenu(currentFilterMenu, filterTable);
    currentFilterMenu._onDestroy = OnMouseOutFilter;
}
function FilterOMenu(menu, container) {
    if (container == null)
        return;
    var anchor = container.tagName == "DIV" ? container.parentNode : container;

    OMenu(menu, anchor, null, null, -1);
}
function _OnClickFilter(obj, e) {
    if (!IsFilterMenuEnabled(obj)) {
        alert(Strings.STS.L_SortNotAllowed);
        return false;
    }
    if (FV4UI()) {
        if (browseris.ie) {
            e.cancelBubble = true;
            e.returnValue = false;
        }
        else {
            e.stopPropagation();
        }
        {
            var defd;

            try {
                defd = typeof inplview.OnClickFilterV4;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.OnClickFilterV4";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        inplview.OnClickFilterV4(obj);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
        return false;
    }
    var o = FindSTSMenuTable(obj, "CTXNum");

    if (o != null && o.getAttribute("SortFields") != null) {
        var strSortFields = o.getAttribute("SortFields");
        var url = GetUrlWithNoSortParameters(strSortFields);

        url = RemovePagingArgs(url);
        if (url.indexOf("?") < 0)
            url += "?";
        else
            url += "&";
        SubmitFormPost(url + strSortFields);
    }
    if (!bIsFileDialogView)
        e.cancelBubble = true;
    return false;
}
function ToggleSelectionAllUsers(viewCounter) {
    var chkToggle = document.getElementById("spToggleUserSelectionCheckBox_" + viewCounter.toString());

    if (chkToggle != null) {
        var elementName = "spUserSelectionCheckBox_" + viewCounter.toString();
        var users = document.getElementsByName(elementName);

        chkToggle.checked = !chkToggle.checked;
        for (var i = 0; i < users.length; i++) {
            var chkBox = users[i];

            chkBox.checked = chkToggle.checked;
        }
        var imageId = "cbxUserSelectAll" + viewCounter.toString();
        var img = document.getElementById(imageId);

        if (img != null) {
            if (chkToggle.checked)
                img.src = '/_layouts/15/images/checkall.gif';
            else
                img.src = '/_layouts/15/images/unchecka.gif';
        }
    }
}
function _UserSelectionOnClick(chk, viewCounter) {
    var imageId = "cbxUserSelectAll" + viewCounter.toString();
    var img = document.getElementById(imageId);
    var chkToggle = document.getElementById("spToggleUserSelectionCheckBox_" + viewCounter.toString());

    if (!chk.checked) {
        if (chkToggle != null) {
            chkToggle.checked = false;
        }
        if (img != null) {
            img.src = '/_layouts/15/images/unchecka.gif';
        }
    }
    else {
        var elementName = "spUserSelectionCheckBox_" + viewCounter.toString();
        var users = document.getElementsByName(elementName);
        var bAllChecked = true;

        for (var i = 0; i < users.length; i++) {
            var chkBox = users[i];

            if (!chkBox.checked) {
                bAllChecked = false;
                break;
            }
        }
        if (bAllChecked) {
            if (null != img)
                img.src = '/_layouts/15/images/checkall.gif';
            if (null != chkToggle)
                chkToggle.checked = true;
        }
    }
}
function initPageRequestManagerForDFWP() {
    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (typeof prm.add_beginRequest != "undefined") {
        prm.add_beginRequest(hideMRBForRequest);
    }
}
function hideMRBForRequest(sender, args) {
    if (typeof args.get_postBackElement != "undefined") {
        var elem = args.get_postBackElement();

        if (elem == null || elem.value == null || elem.value == "")
            return;
        var updateProgress = $get(elem.value);

        if (updateProgress == null)
            return;
        hideMRB(updateProgress.parentNode);
    }
}
function hideMRB(elem) {
    var i;

    if (elem == null)
        return;
    var allChildren = elem.childNodes;
    var len = allChildren.length;

    for (i = 0; i < len; i++) {
        var child = allChildren[i];

        if (child.tagName == 'IMG') {
            var regEx = new RegExp('ManualRefresh', 'i');

            if (child.id != undefined && regEx.test(allChildren[i].id)) {
                hideElement(child);
                break;
            }
        }
    }
}
function hideElement(elem) {
    if (elem == null)
        return;
    elem.style.visibility = 'hidden';
    elem.style.display = 'none';
}
var g_errMsg;
var L_SSCDlgInvalidCharacter_TEXT;
var g_btnCreateId;
var g_txtTitleId;
var g_CusValTxtTitle;

function format(str) {
    for (var i = 1, l = arguments.length; i < l; i++) {
        str = str.replace('{' + String(i - 1) + '}', arguments[i]);
    }
    return str;
}
function SSC_ValidateRequiredFields() {
    var bEnableCreateButton = false;
    var strTitle = (document.getElementById(g_txtTitleId)).value;
    var labelSiteUrl = document.getElementById("LabelPreviewSiteUrl");

    labelSiteUrl.innerHTML = STSHtmlEncode(strTitle);
    var errorTitleDiv = document.getElementById("error_txtTitle");

    if (strTitle.length > 0) {
        var ix = IndexOfIllegalCharInUrlLeafName(strTitle);

        if (ix == -1)
            ix = strTitle.indexOf("+");
        if (ix != -1) {
            var ch = strTitle.charAt(ix);

            errorTitleDiv.innerHTML = format(L_SSCDlgInvalidCharacter_TEXT, ch);
        }
        else {
            errorTitleDiv.innerHTML = "";
            bEnableCreateButton = true;
        }
    }
    else {
        errorTitleDiv.innerHTML = "";
    }
    if (bEnableCreateButton)
        (document.getElementById(g_btnCreateId)).disabled = false;
    else
        (document.getElementById(g_btnCreateId)).disabled = true;
    (document.getElementById(g_CusValTxtTitle)).innerHTML = '';
    window.setTimeout("UpdateSSCDialogPageSize();", 1);
}
function SSC_MakeErrorStatusWithMessage(errorMsg) {
    var statusId = null;

    if (errorMsg != null && typeof errorMsg != 'undefined') {
        removeAllStatus(false);
        statusId = addStatus("", errorMsg, true);
        if (statusId != null) {
            setStatusPriColor(statusId, 'red');
            window.setTimeout("UpdateSSCDialogPageSize();", 1);
        }
    }
    return statusId;
}
function SSC_MakeErrorStatus() {
    return SSC_MakeErrorStatusWithMessage(g_errMsg);
}
function RibbonBlock() {
}
var _ribbon;

function _ribbonClear() {
    _ribbon = (function(u) {
        return u;
    })();
}
function _ribbonInitFunc1Wrapped(p0, p1, p2, p3, p4, p5, p8, p9, p10, p11, p12, p13, p14, p15, p18, p20, p21, p24, p27, p28, p29) {
    var temp;

    try {
        temp = new CUI.RibbonBuildOptions();
    }
    catch (e) {
        return;
    }
    var options = new CUI.RibbonBuildOptions();

    options.lazyTabInit = true;
    options.shallowTabs = true;
    options.lazyMenuInit = true;
    options.attachToDOM = p12;
    options.initialScalingIndex = p13;
    options.validateServerRendering = p14;
    options.showQATId = p0;
    options.showJewelId = p1;
    options.minimized = _ribbon.buildMinimized;
    options.shownTabs = p8;
    options.shownContextualGroups = p9;
    options.initiallyVisibleContextualGroups = p20;
    options.normalizedContextualGroups = p24;
    options.trimmedIds = p10;
    options.enabledVisibilityContexts = p11;
    options.fixedPositioningEnabled = p18;
    options.clientID = p5;
    options.trimEmptyGroups = true;
    options.dataExtensions = p21;
    options.scalingHint = p27;
    options.initialTabSelectedByUser = _ribbon.initialTabSelectedByUser;
    options.launchedByKeyboard = _ribbon.launchedByKeyboard;
    options.percentPositivePattern = p28;
    options.decimalSeparator = p29;
    try {
        temp = eval(p15);
    }
    catch (e) {
        return;
    }
    var builder;

    builder = new CUI.RibbonBuilder(options, document.getElementById(p5), eval(p15));
    var dataSource = new CUI.DataSource(p2, p3, p4);

    builder.set_dataSource(dataSource);
    var handlerFunction = Function.createDelegate(builder, builder.buildRibbonFromData);

    builder.fetchAndProcessRibbonData(_ribbon.initialTabId, function(res) {
        var eventInfo = g_ExecuteOrWaitJobs["sp.bodyloaded"];

        if (eventInfo != null && typeof eventInfo != "undefined" && eventInfo.notified) {
            handlerFunction(res.queryData, _ribbon.initialTabId);
        }
        else {
            _spBodyOnLoadFunctions.push(function() {
                handlerFunction(res.queryData, _ribbon.initialTabId);
            });
        }
    });
}
function _ribbonStartInitWrapped(initialTabId, buildMinimized, e, p26, p16) {
    if (typeof _ribbon == 'undefined' || _ribbon == null)
        return;
    if (Boolean(e)) {
        _ribbon.initialTabSelectedByUser = true;
    }
    var firstTabId = null;
    var evt = Boolean(e) ? e : window.event;

    if (Boolean(evt)) {
        if (!Boolean(evt.preventDefault))
            evt.returnValue = false;
        else
            evt.preventDefault();
    }
    if (Boolean(_ribbon) && typeof _ribbon.initStarted != 'undefined' && _ribbon.initStarted)
        return;
    _ribbon.initStarted = true;
    if (typeof CUI != 'undefined' && typeof CUI.PMetrics != 'undefined')
        CUI.PMetrics.perfMark(CUI.PMarker.perfCUIRibbonInitStart);
    if (Boolean(initialTabId)) {
        firstTabId = _ribbon.initialTabId;
        _ribbon.initialTabId = initialTabId;
    }
    if (typeof buildMinimized != 'undefined')
        _ribbon.buildMinimized = buildMinimized;
    if (Boolean(initialTabId) && typeof _ribbonOnStartInit != 'undefined') {
        _ribbonOnStartInit(_ribbon);
        var oldTab = document.getElementById(firstTabId + "-title");

        if (Boolean(oldTab))
            oldTab.className = "ms-cui-tt";
        var newTab = document.getElementById(initialTabId + "-title");

        if (Boolean(newTab))
            newTab.className = "ms-cui-tt ms-cui-tt-s";
    }
    eval(p16);
}
var _spRibbonInstantiateByRibbonControl;

function RibbonControlInitWrapped() {
    _spRibbonInstantiateByRibbonControl = true;
    ExecuteOrDelayUntilScriptLoaded(_registerCommonComponents, "sp.ribbon.js");
}
function _registerCUIEComponentWrapped(p0, p1, p2) {
    var instance = SP.Ribbon.CommandUIExtensionPageComponent.get_instance();

    instance.set_dataUrl(p0);
    instance.set_dataLCID(p1);
    ;
    instance.set_dataVersion(p2);
    SP.Ribbon.CommandUIExtensionPageComponent.registerWithPageManager();
}
function _ribbonKeyboardTitleShortcutWrapped(e, p22, p23) {
    var evt = Boolean(e) ? e : window.event;

    if (Boolean(evt)) {
        var key = evt.ctrlKey ? 't' : 'f';

        key += evt.altKey ? 't' : 'f';
        key += evt.shiftKey ? 't' : 'f';
        try {
            key += String.fromCharCode(_processKeyCodes(evt.keyCode));
        }
        catch (error) {
            return;
        }
        if (key == p22) {
            if (Boolean(document.selection) && document.selection.type == 'Control') {
                var r = document.selection.createRange();
                var len = r.length;

                for (; len > 0; len--) {
                    r.remove(len - 1);
                }
                r.select();
            }
            var tabHead = document.getElementById(p23);

            if (Boolean(tabHead))
                tabHead.firstChild.focus();
        }
    }
}
function _ribbonOnWindowResizeForHeaderScalingWrapped(evt, p0, p2) {
    if (_ribbon.initStarted)
        return;
    var e = document.getElementById(p0);

    if (Boolean(e))
        _ribbonScaleHeader(e.firstChild.childNodes[1], p2);
}
function _ribbonInitResizeHandlers(func, p0, p1, p2) {
    if (typeof _ribbonScaleHeader == 'function' && p1) {
        _ribbonScaleHeader((document.getElementById(p0)).firstChild.childNodes[1], p2);
        if (Boolean(window.addEventListener))
            window.addEventListener('resize', func, false);
        else if (Boolean(window.attachEvent))
            window.attachEvent('onresize', func);
    }
}
function _ribbonAddEventListener(func) {
    if (Boolean(document.addEventListener))
        document.addEventListener('keydown', func, false);
    else
        document.attachEvent('onkeydown', func);
}
function FNEmpWz(wz) {
    return null != wz && "" != wz;
}
function AChld(p, c) {
    if (null != p && null != c)
        p.appendChild(c);
}
function AImg(mi, wzISrc, wzIAlt) {
    if (null == mi)
        return;
    if (FNEmpWz(wzISrc))
        mi.setAttribute("iconSrc", wzISrc);
    if (FNEmpWz(wzIAlt))
        mi.setAttribute("iconAltText", wzIAlt);
    else
        mi.setAttribute("iconAltText", "");
}
function CMenu(wzID) {
    var m = document.getElementById(wzID);

    if (null != m) {
        m._initialized = false;
        m._oContents = null;
        m.innerHTML = "";
        return m;
    }
    m = document.createElement("MENU");
    if (null == m)
        return null;
    if (null != wzID)
        m.id = wzID;
    m.className = "ms-SrvMenuUI";
    var p = document.body;

    if (typeof g_clientIdDeltaPlaceHolderUtilityContent != 'undefined' && Boolean(g_clientIdDeltaPlaceHolderUtilityContent)) {
        var elem = document.getElementById(g_clientIdDeltaPlaceHolderUtilityContent);

        if (Boolean(elem)) {
            p = elem;
        }
    }
    AChld(p, m);
    return m;
}
function CMItm(wzType) {
    var mi = document.createElement("SPAN");

    if (null == mi)
        return null;
    mi.setAttribute("type", wzType);
    return mi;
}
function CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var mo = CMItm("option");

    if (null == mo)
        return null;
    mo.setAttribute("text", wzText);
    mo.setAttribute("onMenuClick", wzAct);
    if (null != wzDesc)
        mo.setAttribute("description", wzDesc);
    AImg(mo, wzISrc, wzIAlt);
    if (FNEmpWz(wzISeq))
        mo.setAttribute("sequence", wzISeq);
    return mo;
}
function CAMOpt(p, wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var mo = CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq, wzDesc);

    if (null == mo)
        return null;
    AChld(p, mo);
    return mo;
}
function CIMOpt(p, wzText, wzAct, wzISrc, wzIAlt, wzISeq) {
    var mo = CMOpt(wzText, wzAct, wzISrc, wzIAlt, wzISeq);

    if (null == mo)
        return null;
    for (var i = 0; i < p.childNodes.length; i++) {
        var iSeq = p.childNodes[i].getAttribute("sequence");

        if (iSeq) {
            if (Number(iSeq) > Number(wzISeq)) {
                p.childNodes[i].parentNode.insertBefore(mo, p.childNodes[i]);
                return mo;
            }
        }
    }
    AChld(p, mo);
    return mo;
}
function CMSep() {
    var sep = CMItm("separator");

    setInnerText(sep, "");
    return sep;
}
function CAMSep(p) {
    var ms = CMSep();

    if (null == ms)
        return null;
    AChld(p, ms);
    return ms;
}
function CSubM(wzText, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var sm = CMItm("submenu");

    if (null == sm)
        return null;
    sm.setAttribute("text", wzText);
    if (null != wzDesc)
        sm.setAttribute("description", wzDesc);
    AImg(sm, wzISrc, wzIAlt);
    if (FNEmpWz(wzISeq))
        sm.setAttribute("sequence", wzISeq);
    return sm;
}
function CASubM(p, wzText, wzISrc, wzIAlt, wzISeq, wzDesc) {
    var sm = CSubM(wzText, wzISrc, wzIAlt, wzISeq, wzDesc);

    if (null == sm)
        return null;
    AChld(p, sm);
    return sm;
}
function FRdy(o) {
    if (null == o)
        return false;
    if (o.readyState == null)
        return true;
    switch (o.readyState) {
    case "loaded":
    case "interactive":
    case "complete":
        return true;
    default:
        return false;
    }
    return false;
}
function OMenu(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt) {
    var dynm = m;
    var me;

    if (typeof dynm == "string") {
        var id = dynm;

        me = document.getElementById(id);
    }
    else {
        me = dynm;
    }
    if (null != me) {
        OMenuInt(me, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt);
    }
    return false;
}
function OMenuInt(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt) {
    if (null != m && !MenuHtc_isOpen(m) || null != m && null != fr)
        MenuHtc_show(m, r, fr, ft, yoff, fShowClose, fShowCheckBoxes, evt);
}
function OMenuEvnt() {
    var m = event.srcElement;

    if (null != m && FRdy(document)) {
        var r = m["relativeTo"];
        var fr = m["forceRefresh"];
        var ft = m["flipTop"];
        var yoff = m["yOffsetTop"];

        if (r != null)
            m.removeAttribute("relativeTo");
        if (fr != null)
            m.removeAttribute("forceRefresh");
        if (ft != null)
            m.removeAttribute("flipTop");
        if (yoff != null)
            m.removeAttribute("yOffsetTop");
        m.onreadystatechange = null;
        OMenuInt(m, r, fr, ft, yoff);
    }
}
var kfnDisableEvent;
var g_menuHtc_lastMenu;
var g_uniqueNumber;
var g_MenuEndOfDOM;

function RenderECBBackwardCompatibilityMode(fEndOfDOM) {
    g_MenuEndOfDOM = fEndOfDOM;
}
function IsAccessibilityFeatureEnabledProxy() {
    var ret = false;

    if (typeof IsAccessibilityFeatureEnabled != "undefined") {
        ret = IsAccessibilityFeatureEnabled();
    }
    return ret;
}
function MenuHtc_show(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt) {
    MenuHtc_hide();
    MenuHtc_init(oMaster);
    oMaster['_oParent'] = oParent;
    oMaster['_fIsRtL'] = IsElementRtl(oMaster['_oParent']);
    if ((browseris.ie || browseris.nav) && IsAccessibilityFeatureEnabledProxy()) {
        var menu = null;

        if (oParent['foa'] != null) {
            var foa = oParent['foa'];

            menu = byid(foa);
            if (menu == null) {
                menu = eval(foa);
            }
        }
        if (menu != null) {
            if (typeof menu.onblur != "undefined" && menu.onblur != null) {
                menu.onblur();
            }
        }
        RenderAccessibleMenu(oMaster, fForceRefresh);
        g_menuHtc_lastMenu = oMaster;
    }
    else {
        SetBodyEventHandlers(null);
        AssureId(oParent);
        var result = ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt);

        g_menuHtc_lastMenu = oMaster;
        SetBodyEventHandlers(HandleDocumentBodyClick);
    }
    if (browseris.ie) {
        if (window.event != null)
            window.event.cancelBubble = true;
    }
    return false;
}
function MenuHtc_hide() {
    ClearTimeOutToHideMenu();
    var oMaster = g_menuHtc_lastMenu;

    if (oMaster != null) {
        if (oMaster['_accessibleMenu'] != null) {
            CloseAccessibleMenu(oMaster);
        }
        else {
            HideMenu(oMaster);
        }
    }
    g_menuHtc_lastMenu = null;
}
function MenuHtc_isOpen(oMaster) {
    if (null == oMaster || null == oMaster['_initialized'])
        return false;
    var result = IsOpen(oMaster);

    return result;
}
function MenuHtc_item(oMaster, nLevel, nIndex) {
    MenuHtc_init(oMaster);
    var result = GetItem(oMaster, nLevel, nIndex);

    return result;
}
function TrapMenuClick(e) {
    if (e != null)
        e.cancelBubble = true;
    return false;
}
function SetBodyEventHandlers(h) {
    SetEvent("click", h, document.body);
}
function HandleDocumentBodyClick(e) {
    if (g_menuHtc_lastMenu != null) {
        var oMaster = g_menuHtc_lastMenu;

        if (oMaster != null) {
            HideMenu(oMaster);
        }
    }
    return false;
}
function GetEventPopup(e) {
    var obj = GetEventSrcElement(e);

    while (obj != null) {
        if (obj['master'] != null)
            return obj;
        obj = obj.parentNode;
    }
    return null;
}
function GetUniqueNumber() {
    g_uniqueNumber++;
    return g_uniqueNumber;
}
function MenuHtc_init(oMaster) {
    if (oMaster['_initialized'])
        return;
    oMaster['_initialized'] = true;
    oMaster['_wzPrefixID'] = "mp" + String(GetUniqueNumber());
    if (oMaster.id == null)
        oMaster.id = oMaster['_wzPrefixID'] + "_id";
    oMaster['_nLevel'] = 0;
    oMaster['_arrPopup'] = [];
    oMaster['_arrSelected'] = [];
    if (typeof oMaster['_onDestroy'] == "undefined")
        oMaster['_onDestroy'] = null;
    oMaster['_fLargeIconMode'] = false;
    oMaster['_fCompactItemsWithoutIcons'] = false;
}
function PrepContents(oMaster) {
    var oContents;

    oMaster['_fLargeIconMode'] = oMaster.getAttribute("largeIconMode") == "true";
    oMaster['_fHideIcons'] = oMaster.getAttribute("hideicons") == "true";
    oMaster['_fCompactItemsWithoutIcons'] = oMaster.getAttribute("CompactMode") == "true";
    if (!browseris.safari) {
        oContents = document.createElement("span");
        oMaster['_oContents'] = oContents;
        oContents.style.display = "none";
        var str = oMaster.innerHTML;

        if (str.indexOf("<IE:MENUITEM ") < 0 && str.indexOf("<MENUITEM ") >= 0) {
            str = "<?XML:NAMESPACE PREFIX = IE />" + str;
            str = str.replace(/<MENUITEM/g, "<IE:MENUITEM");
            str = str.replace(/<\/MENUITEM/g, "</IE:MENUITEM");
        }
        oContents.innerHTML = str;
    }
    else {
        oContents = oMaster.cloneNode(true);
        oMaster['_oContents'] = oContents;
        oContents.style.display = "none";
    }
    oMaster['_wzMArrPath'] = "/_layouts/15/images/MArr.gif";
    oMaster['_wzMArrPathRtL'] = "/_layouts/15/images/MArrRtL.gif";
}
function FixUpMenuStructure(oMaster) {
    var oRoot = oMaster['_oRoot'];
    var menuNodes = oRoot.childNodes;
    var lastGroupId = null;
    var lastMenuSeparatorRow = null;
    var separatorExplicit = false;

    for (var nIndex = 0; nIndex < menuNodes.length; nIndex++) {
        var menuRow = menuNodes[nIndex];

        if (menuRow.nodeType != 1)
            continue;
        var deleteRow = false;
        var displayNone = menuRow.style != null && menuRow.style.display == 'none';
        var jsHidden = FIsIHidden(menuRow);

        if (displayNone || jsHidden) {
            deleteRow = true;
        }
        else if (FIsIType(menuRow, "separator")) {
            if (lastMenuSeparatorRow != null || nIndex == 0)
                deleteRow = true;
            else {
                lastMenuSeparatorRow = menuRow;
                separatorExplicit = true;
            }
        }
        else {
            var cGroupId = menuRow.getAttribute("menuGroupId");

            if (cGroupId != lastGroupId && lastMenuSeparatorRow == null && nIndex != 0) {
                lastMenuSeparatorRow = document.createElement("ie:menuitem");
                lastMenuSeparatorRow.setAttribute("type", "separator");
                oRoot = oMaster['_oRoot'];
                oRoot.insertBefore(lastMenuSeparatorRow, menuRow);
            }
            else if (FIsIType(menuRow, "submenu") && lastMenuSeparatorRow != null && !separatorExplicit) {
                menuRow.parentNode.removeChild(lastMenuSeparatorRow);
                lastMenuSeparatorRow = null;
            }
            else {
                lastMenuSeparatorRow = null;
            }
            lastGroupId = cGroupId;
            separatorExplicit = false;
        }
        if (deleteRow) {
            menuRow.parentNode.removeChild(menuRow);
            nIndex--;
        }
    }
    if (lastMenuSeparatorRow != null) {
        lastMenuSeparatorRow.parentNode.removeChild(lastMenuSeparatorRow);
    }
}
function IsElementRtl(oCurrent) {
    while (oCurrent != null && oCurrent.tagName != null) {
        var dir = oCurrent.getAttribute("dir");

        if ((dir == null || dir == "") && oCurrent.style != null) {
            dir = oCurrent.style.direction;
        }
        if (dir == "rtl")
            return true;
        else if (dir == "ltr")
            return false;
        oCurrent = oCurrent.parentNode;
    }
    return false;
}
function getElementOverFlowStyle(element) {
    try {
        if (typeof element.currentStyle != undefined && element.currentStyle != null) {
            return element.currentStyle.overflow.toLowerCase();
        }
        else {
            return ((document.defaultView.getComputedStyle(element, null)).getPropertyValue("overflow")).toLowerCase();
        }
    }
    catch (e) {
        return "";
    }
}
function AdjustScrollPosition(element, relativeToElement, result) {
    var oCurrent = element;

    while (oCurrent != null && oCurrent != relativeToElement && oCurrent != element.offsetParent && oCurrent.tagName != null && oCurrent.tagName.toLowerCase() != "body" && oCurrent.tagName.toLowerCase() != "html" && !(getElementOverFlowStyle(oCurrent) == "hidden")) {
        if (oCurrent.scrollWidth > oCurrent.clientWidth && oCurrent.offsetWidth >= oCurrent.clientWidth && oCurrent.clientWidth != 0) {
            if (!IsElementRtl(oCurrent)) {
                if (oCurrent.scrollLeft > 0)
                    result.x -= oCurrent.scrollLeft;
            }
            else {
                if (browseris.ie8standardUp) {
                    result.x += oCurrent.scrollLeft;
                }
                else {
                    if (browseris.firefox) {
                        result.x -= oCurrent.scrollLeft;
                    }
                    else {
                        var oCurrentOverFlowStyle = getElementOverFlowStyle(oCurrent);

                        if (browseris.ie || browseris.safari && (oCurrentOverFlowStyle == "auto" || oCurrentOverFlowStyle == "scroll"))
                            result.x += oCurrent.scrollWidth - oCurrent.clientWidth - oCurrent.scrollLeft;
                    }
                }
            }
        }
        if (oCurrent.scrollTop > 0)
            result.y -= oCurrent.scrollTop;
        oCurrent = oCurrent.parentNode;
    }
}
function ElementPosition_InitializePrototype() {
    ElementPosition.prototype.x = undefined;
    ElementPosition.prototype.y = undefined;
    ElementPosition.prototype.width = undefined;
    ElementPosition.prototype.height = undefined;
}
function ElementPosition(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
function MenuHtc_GetElementPosition(element, relativeToElement) {
    var result = new ElementPosition(0, 0, 0, 0);

    if (null != element.offsetParent) {
        var parentElement = element;

        while (parentElement != null && parentElement != relativeToElement) {
            result.x += parentElement.offsetLeft;
            result.y += parentElement.offsetTop;
            AdjustScrollPosition(parentElement, relativeToElement, result);
            var parentTagName = parentElement.tagName.toLowerCase();

            if (parentTagName != "body" && parentTagName != "html" && parentElement.clientTop != null && parentElement.clientLeft != null && parentElement != element) {
                result.x += parentElement.clientLeft;
                result.y += parentElement.clientTop;
            }
            parentElement = parentElement.offsetParent;
        }
    }
    else if (0 != element.offsetLeft || 0 != element.offsetTop) {
        result.x = element.offsetLeft;
        result.y = element.offsetTop;
    }
    else {
        if (Boolean(element['x'])) {
            result.x = element['x'];
        }
        if (Boolean(element['y'])) {
            result.y = element['y'];
        }
    }
    if (0 != element.offsetWidth && 0 != element.offsetHeight) {
        result.width = element.offsetWidth;
        result.height = element.offsetHeight;
    }
    else if (null != element.style && typeof element.style.pixelWidth != "undefined" && 0 != element.style.pixelWidth && typeof element.style.pixelHeight != "undefined" && 0 != element.style.pixelHeight) {
        result.width = element.style.pixelWidth;
        result.height = element.style.pixelHeight;
    }
    return result;
}
function MenuTag(tagName, className) {
    this.tagName = tagName;
    this.className = className;
}
function MenuTag_InitializePrototype() {
    MenuTag.prototype.tagName = undefined;
    MenuTag.prototype.className = undefined;
}
function CreateMenuTag(menuTag) {
    var tag = null;

    if (menuTag.tagName != null) {
        tag = document.createElement(menuTag.tagName);
        if (menuTag.className != null)
            tag.className = menuTag.className;
    }
    return tag;
}
function TransferEventToMenu(oPopup, e) {
    var evt;

    if (browseris.ie) {
        evt = {
            "srcElement": oPopup,
            "keyCode": e.keyCode
        };
    }
    else {
        evt = {
            "target": oPopup,
            "which": e.which
        };
    }
    PopupKeyDown(evt);
}
function MenuHtcInternal_Show(oMaster, oParent, yCoord, fFlipTop, fShowClose, fShowCheckBoxes, evt) {
    var menuTagPopup;
    var menuTagInner;
    var menuTagSection;
    var menuTagMenuBody;

    if (!Boolean(oMaster['_oContents']))
        PrepContents(oMaster);
    var classes = "ms-core-menu-box";

    if (oMaster['_fLargeIconMode'])
        classes += "Big";
    if (!Boolean(oMaster['_fHideIcons']))
        classes += " ms-core-menu-hasIcons";
    classes += " ms-core-defaultFont ms-shadow";
    menuTagPopup = new MenuTag("div", classes);
    menuTagMenuBody = new MenuTag("ul", "ms-core-menu-list");
    var arrPopup = oMaster['_arrPopup'];
    var arrSelected = oMaster['_arrSelected'];
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    if (!Boolean(oMaster['_oContents']) || IsOpen(oMaster))
        return;
    if (null == oPopup && !Boolean(oMaster['_oRoot'])) {
        oMaster['_nLevel'] = 0;
        nLevel = 0;
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    var fTopLevel = nLevel == 0;

    fFlipTop = fFlipTop && fTopLevel;
    if (null == oPopup) {
        oPopup = CreateMenuTag(menuTagPopup);
        oPopup.title = "";
        arrPopup[nLevel] = oPopup;
        oPopup['isMenu'] = true;
        oPopup['master'] = oMaster;
        oPopup['level'] = nLevel;
        var oMenubody = CreateMenuTag(menuTagMenuBody);

        oPopup.style.top = "0px";
        oPopup.style.position = "fixed";
        oPopup.style.visibility = "hidden";
        if (oMaster['_fIsRtL']) {
            oPopup.style.right = "0px";
            oPopup.setAttribute("dir", "rtl");
        }
        else {
            oPopup.style.left = "0px";
            oPopup.setAttribute("dir", "ltr");
        }
        oPopup.contentEditable = false;
        oPopup.appendChild(oMenubody);
        if (g_MenuEndOfDOM == true) {
            document.body.appendChild(oPopup);
        }
        else {
            if (oParent.tagName == "TABLE")
                oParent.parentNode.appendChild(oPopup);
            else
                oParent.appendChild(oPopup);
        }
        FixUpMenuStructure(oMaster);
        var id = 0;
        var oRoot = oMaster['_oRoot'];

        nLevel = oMaster['_nLevel'];
        var childNodeLength = oRoot.childNodes.length;

        for (var nIndex = 0; nIndex < childNodeLength; nIndex++) {
            var oNode = oRoot.childNodes[nIndex];

            if (oNode.nodeType != 1)
                continue;
            if (!FIsIType(oNode, "label")) {
                var oItem = CreateMenuItem(oMaster, oNode, MakeID3(oMaster, nLevel, id), null, fShowCheckBoxes);

                if (null != oItem) {
                    oMenubody.appendChild(oItem);
                }
                id++;
            }
        }
        if (oMaster.id == "filter_menu" || fShowClose) {
            oItem = document.createElement("div");
            oItem.id = MakeID3(oMaster, nLevel, id);
            oItem.className = "ms-core-menu-closebutton";
            oNode = document.createElement("button");
            oItem.appendChild(oNode);
            oNode.id = "fmi_cls";
            oNode.innerHTML = Strings.STS.L_CloseButtonCaption;
            oNode.onclick = MenuHtc_hide;
            oMenubody.appendChild(oItem);
        }
        oPopup.oncontextmenu = kfnDisableEvent;
        oPopup.ondragstart = kfnDisableEvent;
        oPopup.onselectstart = kfnDisableEvent;
        if (oParent['_onmouseover'] == null && typeof oParent.onmouseover != "undefined")
            oParent['_onmouseover'] = oParent.onmouseover;
        if (oParent['_onmouseout'] == null && typeof oParent.onmouseout != "undefined")
            oParent['_onmouseout'] = oParent.onmouseout;
        if (oParent['_onmousedown'] == null && typeof oParent.onmousedown != "undefined")
            oParent['_onmousedown'] = oParent.onmousedown;
        if (oParent['_onclick'] == null && typeof oParent.onclick != "undefined")
            oParent['_onclick'] = oParent.onclick;
        if (oParent['_oncontextmenu'] == null && typeof oParent.oncontextmenu != "undefined")
            oParent['_oncontextmenu'] = oParent.oncontextmenu;
        if (fTopLevel) {
            if (oParent['_onkeydown'] == null && typeof oParent.onkeydown != "undefined")
                oParent['_onkeydown'] = oParent.onkeydown;
        }
        if (browseris.nav) {
            SetEvent("keypress", function(e) {
                return false;
            }, oPopup);
            SetEvent("keyup", function(e) {
                return false;
            }, oPopup);
            SetEvent("keydown", function(e) {
                PopupKeyDown(e);
                e.cancelBubble = true;
                return false;
            }, oPopup);
            SetEvent("mousedown", function(e) {
                TrapMenuClick(e);
                return false;
            }, oPopup);
            SetEvent("mouseover", function(e) {
                PopupMouseOver(e);
                return false;
            }, oPopup);
            SetEvent("mouseout", function(e) {
                PopupMouseLeave(e);
                return false;
            }, oPopup);
            SetEvent("click", function(e) {
                PopupMouseClick(e);
                TrapMenuClick(e);
                return false;
            }, oPopup);
            SetEvent("mouseover", function(e) {
                PopupMouseOverParent(e);
                return false;
            }, oParent);
            SetEvent("mouseout", function(e) {
                PopupMouseLeaveParent(e);
                return false;
            }, oParent);
            SetEvent("mousedown", function(e) {
                TrapMenuClick(e);
                return false;
            }, oParent);
            SetEvent("click", function(e) {
                TrapMenuClick(e);
                return false;
            }, oParent);
            SetEvent("contextmenu", function(e) {
                TrapMenuClick(e);
                return false;
            }, oParent);
            if (fTopLevel) {
                oParent.onkeydown = function(e) {
                    TransferEventToMenu(oPopup, e);
                    return false;
                };
            }
        }
        else {
            SetEvent("keydown", new Function("PopupKeyDown(event); event.cancelBubble = true; return false;"), oPopup);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), oPopup);
            SetEvent("mouseover", new Function("PopupMouseOver(event); return false;"), oPopup);
            SetEvent("mouseout", new Function("PopupMouseLeave(event); return false;"), oPopup);
            SetEvent("click", new Function("PopupMouseClick(event); TrapMenuClick(event); return false;"), oPopup);
            SetEvent("mouseover", new Function("PopupMouseOverParent(event); return false;"), oParent);
            SetEvent("mouseout", new Function("PopupMouseLeaveParent(event); return false;"), oParent);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), oParent);
            SetEvent("click", new Function("TrapMenuClick(event); return false;"), oParent);
            SetEvent("contextmenu", new Function("TrapMenuClick(event); return false;"), oParent);
            if (fTopLevel) {
                oParent.onkeydown = function() {
                    TransferEventToMenu(oPopup, event);
                    return false;
                };
            }
        }
        if (fTopLevel) {
            var wzOnUnload = oMaster.getAttribute("onunloadtext");

            if (null != wzOnUnload) {
                SetEvent("unload", new Function(wzOnUnload), oPopup);
            }
        }
    }
    else {
        var oOld = arrSelected[nLevel];

        if (null != oOld)
            UnselectItem(oOld);
    }
    arrSelected[nLevel] = null;
    var oBackFrame;

    if (browseris.ie && evt == null) {
        var originalScrollLeft = document.body.scrollLeft;

        oBackFrame = document.createElement("iframe");
        AssureId(oBackFrame);
        oBackFrame.src = "/_layouts/blank.htm";
        oBackFrame.style.position = "absolute";
        oBackFrame.style.display = "none";
        oBackFrame.scrolling = "no";
        oBackFrame.frameBorder = 0;
        if (g_MenuEndOfDOM == true)
            document.body.appendChild(oBackFrame);
        else {
            if (oParent.tagName == "TABLE")
                oParent.parentNode.appendChild(oBackFrame);
            else
                oParent.appendChild(oBackFrame);
        }
        oPopup.style.zIndex = "103";
        oPopup['_backgroundFrameId'] = oBackFrame.id;
        if (originalScrollLeft != document.body.scrollLeft) {
            document.body.scrollLeft = originalScrollLeft;
        }
    }
    oPopup.style.width = String(oPopup.offsetWidth) + "px";
    if (oMaster['_fIsRtL'])
        oPopup.style.right = "";
    oPopup.style.position = "absolute";
    SetMenuPosition(oMaster, oParent, oPopup, fFlipTop, fTopLevel, evt);
    oPopup.style.visibility = "visible";
    NavigateToMenu(oMaster);
    if (browseris.ie && evt == null) {
        SetBackFrameSize(null, oPopup);
        oPopup.onresize = new Function("SetBackFrameSize(event, null);");
        oBackFrame.style.display = "block";
        oBackFrame.style.zIndex = String(101);
    }
}
function GetWindowPosition() {
    var windowInfo = new ElementPosition(0, 0, 0, 0);

    windowInfo.width = window.screen.width;
    windowInfo.height = window.screen.height;
    if (Boolean(self.innerHeight)) {
        windowInfo.width = self.innerWidth;
        windowInfo.height = self.innerHeight;
    }
    else if (null != document.documentElement && Boolean(document.documentElement.clientHeight)) {
        windowInfo.width = document.documentElement.clientWidth;
        windowInfo.height = document.documentElement.clientHeight;
    }
    else if (null != document.body) {
        windowInfo.width = document.body.clientWidth;
        windowInfo.height = document.body.clientHeight;
    }
    return windowInfo;
}
function SetMenuPosition(oMaster, oParent, oPopup, fFlipTop, fTopLevel, evt) {
    var windowPos = GetWindowPosition();
    var maxWidth = windowPos.width;
    var maxHeight = windowPos.height;
    var nRealWidth = oPopup.offsetWidth;
    var nRealHeight = oPopup.offsetHeight;
    var widthTooBig = false;
    var heightTooBig = false;

    if (nRealWidth > maxWidth - 50) {
        widthTooBig = true;
        nRealWidth = maxWidth - 50 < 0 ? 0 : maxWidth - 50;
    }
    if (nRealHeight >= maxHeight - 50) {
        heightTooBig = true;
        nRealHeight = maxHeight - 50 < 0 ? 0 : maxHeight - 50;
    }
    if (widthTooBig) {
        oPopup.style.width = String(nRealWidth) + "px";
        oPopup.style.overflowX = "scroll";
    }
    if (heightTooBig) {
        oPopup.style.height = String(nRealHeight) + "px";
        oPopup.style.overflowY = "scroll";
    }
    nRealWidth = oPopup.offsetWidth;
    nRealHeight = oPopup.offsetHeight;
    var EdgeLeft = windowPos.x;
    var EdgeTop = windowPos.y;
    var EdgeRight = maxWidth;
    var ParentLeft = 0;
    var ParentTop = 0;
    var oCurrent = oParent;
    var p;

    if (evt != null) {
        p = new ElementPosition(evt.clientX, evt.clientY, 0, 0);
    }
    else {
        p = MenuHtc_GetElementPosition(oCurrent, null);
    }
    ParentLeft = p.x;
    ParentTop = p.y;
    var nParentWidth;

    if (fTopLevel) {
        nParentWidth = p.width;
        ParentTop += p.height;
    }
    else {
        nParentWidth = p.width + 1;
    }
    var fTryGoDefault = !fFlipTop && !document.body['WZ_ATTRIB_FLIPPED'];
    var fFlippedDefault, fFlippedNonDefault;
    var xDefault, xFlipped;

    if (!oMaster['_fIsRtL']) {
        var MenuRightDefault;
        var MenuLeftFlipped;

        if (fTopLevel) {
            xDefault = ParentLeft;
            MenuRightDefault = ParentLeft + nRealWidth;
            MenuLeftFlipped = ParentLeft + nParentWidth - nRealWidth;
        }
        else {
            xDefault = ParentLeft + nParentWidth;
            MenuRightDefault = ParentLeft + nParentWidth + nRealWidth;
            MenuLeftFlipped = ParentLeft - nRealWidth;
        }
        xFlipped = MenuLeftFlipped;
        fFlippedDefault = MenuRightDefault > EdgeRight && MenuLeftFlipped > EdgeLeft;
        fFlippedNonDefault = !(MenuLeftFlipped < EdgeLeft && MenuRightDefault < EdgeRight);
    }
    else {
        var MenuLeftDefault;
        var MenuRightFlipped;

        if (fTopLevel) {
            MenuLeftDefault = ParentLeft + nParentWidth - nRealWidth;
            MenuRightFlipped = ParentLeft + nRealWidth;
            xFlipped = ParentLeft;
        }
        else {
            MenuLeftDefault = ParentLeft - nRealWidth;
            MenuRightFlipped = ParentLeft + nParentWidth + nRealWidth;
            xFlipped = ParentLeft + nParentWidth;
        }
        xDefault = MenuLeftDefault;
        fFlippedDefault = MenuLeftDefault < EdgeLeft && MenuRightFlipped < EdgeRight;
        fFlippedNonDefault = !(MenuRightFlipped > EdgeRight && MenuLeftDefault > EdgeLeft);
    }
    var fFlipped = fTryGoDefault ? fFlippedDefault : fFlippedNonDefault;
    var x = fFlipped ? xFlipped : xDefault;
    var xOffset;
    var yOffset;

    if (typeof window.pageXOffset != 'undefined') {
        xOffset = window.pageXOffset;
        yOffset = window.pageYOffset;
    }
    else {
        var htmlElement = document.body.parentNode;

        if (!IsElementRtl(document.body)) {
            xOffset = document.body.scrollLeft;
            xOffset += htmlElement.scrollLeft;
        }
        else {
            if (browseris.ie8standard) {
                xOffset = -document.body.scrollLeft;
                xOffset += -htmlElement.scrollLeft;
            }
            else {
                var bodyOverFlowStyle = getElementOverFlowStyle(document.body);

                if (browseris.ie || browseris.safari && (bodyOverFlowStyle == "auto" || bodyOverFlowStyle == "scroll"))
                    xOffset = -document.body.scrollWidth + document.body.clientWidth + document.body.scrollLeft;
                xOffset += -htmlElement.scrollWidth + htmlElement.offsetWidth + htmlElement.scrollLeft;
            }
        }
        yOffset = document.body.scrollTop;
        yOffset += htmlElement.scrollTop;
    }
    if (nRealWidth >= maxWidth) {
        x = xOffset;
    }
    else if (x - xOffset + nRealWidth >= maxWidth) {
        x = xOffset + maxWidth - nRealWidth;
    }
    var y;

    if (nRealHeight >= maxHeight) {
        y = yOffset;
    }
    else if (ParentTop + nRealHeight - yOffset >= maxHeight) {
        y = yOffset + maxHeight - nRealHeight;
    }
    else {
        y = ParentTop;
    }
    if (browseris.safari)
        y += window.pageYOffset;
    else
        y += document.documentElement.scrollTop;
    oPopup.setAttribute("flipped", String(fFlipTop ? fFlipped && fFlippedDefault : fFlipped));
    var posLeft = x;
    var posTop = y;

    if (browseris.safari)
        posTop -= window.pageYOffset;
    else
        posTop -= document.documentElement.scrollTop;
    if (g_MenuEndOfDOM == false) {
        if (!fTopLevel) {
            if (oMaster['_fIsRtL']) {
                if (browseris.ie) {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft;
                    else
                        posLeft = posLeft - ParentLeft + 1;
                }
                else {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft;
                    else
                        posLeft = posLeft - ParentLeft + 3;
                }
            }
            else {
                if (browseris.ie) {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft + 1;
                    else
                        posLeft = posLeft - ParentLeft;
                }
                else {
                    if (fFlipped)
                        posLeft = posLeft - ParentLeft + 3;
                    else
                        posLeft = posLeft - ParentLeft;
                }
            }
            if (posTop == 0)
                posTop = oParent.offsetTop - oPopup.offsetParent.firstChild.scrollTop;
            else
                posTop = posTop - ParentTop + oParent.offsetTop - oPopup.offsetParent.firstChild.scrollTop;
            if (browseris.ie8standard)
                posTop = posTop - 1;
        }
        else {
            if (oPopup.offsetParent != null && oPopup.offsetParent.tagName.toLowerCase() != "body") {
                var offsetParentLeft;
                var offsetParentTop;
                var offsetParentP = MenuHtc_GetElementPosition(oPopup.offsetParent);

                offsetParentLeft = offsetParentP.x;
                offsetParentTop = offsetParentP.y;
                posTop = posTop - offsetParentTop;
                posLeft = posLeft - offsetParentLeft;
            }
            else {
                posLeft = posLeft + document.documentElement.scrollLeft;
                posTop = posTop + document.documentElement.scrollTop;
            }
        }
    }
    oPopup.style.left = String(posLeft) + "px";
    oPopup.style.top = String(posTop) + "px";
    oPopup['LeftForBackIframe'] = posLeft;
    oPopup['TopForBackIframe'] = posTop;
}
function SetBackFrameSize(e, oPopup) {
    if (oPopup == null)
        oPopup = GetEventSrcElement(e);
    var nRealWidth = oPopup.offsetWidth;
    var nRealHeight = oPopup.offsetHeight;
    var n;
    var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

    if (oBackFrame != null) {
        n = oPopup['LeftForBackIframe'];
        oBackFrame.style.left = String(n) + "px";
        n = oPopup['TopForBackIframe'];
        oBackFrame.style.top = String(n) + "px";
        oBackFrame.style.width = String(nRealWidth) + "px";
        oBackFrame.style.height = String(nRealHeight) + "px";
    }
}
function HideMenu(oMaster, nPhase) {
    ClearTimeOutToHideMenu();
    if (nPhase == null)
        nPhase = 0;
    if (nPhase == 2) {
        if (typeof oMaster._onDestroy == 'function') {
            oMaster._onDestroy();
            oMaster._onDestroy = null;
        }
        return;
    }
    if (IsOpen(oMaster) && !IsAccessibilityFeatureEnabledProxy()) {
        var oParent = oMaster['_oParent'];

        if (oParent != null) {
            oParent.onclick = oParent['_onclick'];
            oParent.onmouseover = oParent['_onmouseover'];
            oParent.onmouseout = oParent['_onmouseout'];
            oParent.onmousedown = oParent['_onmousedown'];
            oParent.oncontextmenu = oParent['_oncontextmenu'];
            oParent.onkeydown = oParent['_onkeydown'];
        }
        SetBodyEventHandlers(typeof window["origBodyOnClickHandler"] == "undefined" ? null : window["origBodyOnClickHandler"]);
        UpdateLevel(oMaster, 0);
        var arrPopup = oMaster['_arrPopup'];
        var oPopup = arrPopup[0];

        if (oPopup != null) {
            var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

            if (oBackFrame != null)
                oBackFrame.parentNode.removeChild(oBackFrame);
            if (oPopup.parentNode != null)
                oPopup.parentNode.removeChild(oPopup);
            arrPopup[0] = null;
            if (nPhase == 0) {
                if (typeof oMaster._onDestroy == "function") {
                    oMaster._onDestroy();
                    oMaster._onDestroy = null;
                }
            }
        }
        g_menuHtc_lastMenu = null;
        RenderECBBackwardCompatibilityMode(false);
    }
}
function IsOpen(oMaster) {
    var accessibleMenu = oMaster['_accessibleMenu'];

    if (oMaster['_accessibleMenuInProgress'] || null != accessibleMenu && !accessibleMenu.closed) {
        return true;
    }
    var arrPopup = oMaster['_arrPopup'];

    if (null == arrPopup) {
        return false;
    }
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    return oPopup ? true : false;
}
function FindLabel(oParent) {
    var arrNodes = Boolean(oParent) ? oParent.childNodes : null;

    if (null != arrNodes) {
        for (var nIndex = 0; nIndex < arrNodes.length; nIndex++) {
            var oNode = arrNodes[nIndex];

            if (oNode.nodeType != 1)
                continue;
            if (FIsIType(oNode, "label"))
                return oNode;
        }
    }
    return null;
}
function ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt) {
    UpdateLevel(oMaster, 0);
    if (fForceRefresh) {
        oMaster['_oContents'] = null;
        oMaster['_oRoot'] = null;
        oMaster['_nLevel'] = 0;
        oMaster['_arrPopup'] = [];
        oMaster['_arrSelected'] = [];
    }
    else {
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    fFlipTop = fFlipTop != false;
    MenuHtcInternal_Show(oMaster, oParent, 0, fFlipTop, fShowClose, fShowCheckBoxes, evt);
}
function ShowSubMenu(oMaster, nLevelArg, oParent) {
    if (null == oParent)
        return;
    if (oParent['submenuRoot'] == null)
        return;
    if (oParent['submenuRoot'] == oMaster['_oRoot'])
        return;
    UpdateLevel(oMaster, nLevelArg);
    oMaster['_oRoot'] = oParent['submenuRoot'];
    var nLevel = oMaster['_nLevel'];

    oMaster['_nLevel'] = nLevel + 1;
    MenuHtcInternal_Show(oMaster, oParent, -1);
}
function ShowSubMenuEvnt(oMaster) {
    if (oMaster != null) {
        var arrPopup = oMaster['_arrPopup'];
        var nLevel = oMaster['_nLevel'];
        var oPopup = arrPopup[nLevel];

        if (null != oPopup) {
            oPopup.removeAttribute("timeoutID");
            var arrSelected = oMaster['_arrSelected'];
            var oSelected = arrSelected[nLevel];

            ShowSubMenu(oMaster, nLevel, oSelected);
        }
    }
}
function SetShowSubMenuEvnt(oMaster) {
    var arrPopup = oMaster['_arrPopup'];
    var nLevel = oMaster['_nLevel'];
    var oPopup = arrPopup[nLevel];

    if (null != oPopup) {
        ClearTimeOut("timeoutID");
        document.body.setAttribute("timeoutID", String(window.setTimeout(function() {
            ShowSubMenuEvnt(oMaster);
        }, 100)));
    }
}
function ClearTimeOut(oAttribute) {
    var id = document.body.getAttribute(oAttribute);

    if (id != null) {
        window.clearTimeout(Number(id));
    }
    document.body.removeAttribute(oAttribute);
}
function ClearShowSubMenuEvnt(oPopup) {
    ClearTimeOut("timeoutID");
}
function GetEventSrcItem(oMaster, srcElement) {
    var tag;
    var oSrc;
    var wzPrefixID;

    tag = "li";
    if (srcElement != null && FIStringEquals(srcElement.tagName, "div") && srcElement.className.indexOf("ms-core-menu-box") != -1) {
        return null;
    }
    wzPrefixID = oMaster['_wzPrefixID'];
    for (oSrc = srcElement; oSrc != null && !FIStringEquals(oSrc.tagName, "body"); oSrc = oSrc.parentNode) {
        if (FIStringEquals(oSrc.tagName, tag) && oSrc.id.substring(0, wzPrefixID.length) == wzPrefixID) {
            return oSrc;
        }
    }
    return null;
}
function UpdateLevel(oMaster, nLevelArg) {
    var arrSelected;
    var arrPopup;
    var oPopup;
    var oRoot;
    var nLevel = oMaster['_nLevel'];

    while (nLevel > nLevelArg) {
        arrSelected = oMaster['_arrSelected'];
        arrPopup = oMaster['_arrPopup'];
        if (arrPopup != null) {
            oPopup = arrPopup[nLevel];
        }
        if (null != oPopup) {
            ClearShowSubMenuEvnt(oPopup);
            var oBackFrame = document.getElementById(oPopup['_backgroundFrameId']);

            if (oBackFrame != null)
                oBackFrame.parentNode.removeChild(oBackFrame);
            oPopup.parentNode.removeChild(oPopup);
        }
        arrPopup[nLevel] = null;
        arrSelected[nLevel] = null;
        oRoot = oMaster['_oRoot'];
        oMaster['_oRoot'] = oRoot.parentNode;
        nLevel--;
        oMaster['_nLevel'] = nLevel;
    }
    arrPopup = oMaster['_arrPopup'];
    if (arrPopup != null)
        oPopup = arrPopup[nLevel];
    if (null != oPopup)
        ClearShowSubMenuEvnt(oPopup);
}
function PopupMouseOver(e) {
    var oPopup = GetEventPopup(e);

    if (oPopup != null) {
        var oMaster = oPopup['master'];
        var nLevel = oPopup['level'];

        if (nLevel < 0)
            return;
        var arrSelected = oMaster['_arrSelected'];
        var oSrcElem = GetEventSrcItem(oMaster, GetEventSrcElement(e));

        if (null != oSrcElem) {
            var oSelected = arrSelected[nLevel];
            var nLevelMaster = oMaster['_nLevel'];

            if (oSrcElem != oSelected) {
                if (FIsIType(oSrcElem, "separator"))
                    return;
                ToggleMenuItem(oMaster, nLevel, oSrcElem);
                if (FIsIType(oSrcElem, "submenu"))
                    EngageSelection(oMaster, true, true, false);
            }
            else if (nLevel < nLevelMaster) {
                UnselectCurrentOption(oMaster);
            }
        }
        ClearTimeOutToHideMenu();
    }
}
function PopupMouseLeave(e) {
    var oPopup;

    oPopup = GetEventPopup(e);
    if (oPopup != null) {
        UnselectCurrentOption(oPopup['master']);
        SetTimeOutToHideMenu();
    }
    return false;
}
function PopupMouseOverParent(e) {
    if (g_menuHtc_lastMenu != null) {
        ClearTimeOutToHideMenu();
        var oParent = g_menuHtc_lastMenu['_oParent'];

        if (oParent != null) {
            if (typeof oParent._onmouseover == 'function') {
                oParent._onmouseover();
            }
        }
    }
}
function PopupMouseLeaveParent(e) {
    if (g_menuHtc_lastMenu != null) {
        var oParent = g_menuHtc_lastMenu['_oParent'];

        if (oParent != null) {
            if (typeof oParent._onmouseout == 'function') {
                oParent._onmouseout();
            }
        }
        SetTimeOutToHideMenu();
    }
}
function ClearTimeOutToHideMenu() {
    if (document.body.getAttribute("HideMenuTimeOut") != null) {
        ClearTimeOut("HideMenuTimeOut");
    }
}
function SetTimeOutToHideMenu() {
    ClearTimeOut("HideMenuTimeOut");
    document.body.setAttribute("HideMenuTimeOut", String(window.setTimeout(MenuHtc_hide, 5000)));
}
function PopupMouseClick(e) {
    var oPopup = GetEventPopup(e);
    var oMaster = oPopup['master'];
    var nLevel = oPopup['level'];

    if (nLevel < 0)
        return;
    var arrSelected = oMaster['_arrSelected'];
    var oItem = arrSelected[nLevel];
    var oSrcItem = GetEventSrcItem(oMaster, GetEventSrcElement(e));

    if (oItem != oSrcItem) {
        if (null != oSrcItem) {
            arrSelected[nLevel] = oSrcItem;
        }
    }
    UpdateLevel(oMaster, nLevel);
    var onExpand = null;
    var fExpand = false;

    if (browseris.nav) {
        if (null != e && null != e.target) {
            fExpand = e.target.className == "hierarchy";
            onExpand = e.target.getAttribute("onExpand");
        }
    }
    else {
        if (null != e && null != e.srcElement) {
            fExpand = e.srcElement.className == "hierarchy";
            onExpand = e.srcElement.getAttribute("onExpand");
        }
    }
    EngageSelection(oMaster, true, false, false, fExpand, onExpand);
}
function PopupKeyDown(e) {
    var oPopup = GetEventPopup(e);
    var oMaster = oPopup['master'];
    var nLevel = oPopup['level'];

    if (nLevel < 0)
        return;
    var nKeyCode = GetEventKeyCode(e);
    var shiftKey = e.shiftKey;

    if (oMaster['_fIsRtL']) {
        if (nKeyCode == 37)
            nKeyCode = 39;
        else if (nKeyCode == 39)
            nKeyCode = 37;
    }
    if (nKeyCode == 9)
        nKeyCode = !shiftKey ? 40 : 38;
    ClearShowSubMenuEvnt(oPopup);
    switch (nKeyCode) {
    case 38:
        MoveMenuSelection(oMaster, -1);
        break;
    case 40:
        MoveMenuSelection(oMaster, 1);
        break;
    case 37:
    case 27:
        CloseCurrentLevel(oMaster, nKeyCode == 27);
        break;
    case 39:
    case 32:
    case 13:
        EngageSelection(oMaster, nKeyCode == 13 || nKeyCode == 32, false, true);
        break;
    }
    e.returnValue = false;
}
function SetNewId(obj) {
    obj.id = "msomenuid" + String(GetUniqueNumber());
    return obj.id;
}
function AssureId(obj) {
    if (obj.id == null || obj.id == "")
        obj.id = "msomenuid" + String(GetUniqueNumber());
    return obj.id;
}
function NavigateToMenu(oMaster) {
    if (IsAccessibilityFeatureEnabledProxy())
        return;
    var oMenu = null;
    var nLevel = oMaster['_nLevel'];
    var arrPopup = oMaster['_arrPopup'];

    oMenu = arrPopup[nLevel];
    try {
        var oFirstItem = oMenu.firstChild.firstChild;

        oFirstItem = (oFirstItem.getElementsByTagName("A"))[0];
        if (oFirstItem != null) {
            if (typeof oFirstItem.setActive != "undefined" && oFirstItem.setActive != null) {
                oFirstItem.setActive();
            }
            else if (typeof oFirstItem.focus != "undefined" && oFirstItem.focus != null) {
                oFirstItem.focus();
            }
        }
    }
    catch (e) { }
}
function ExecuteOnClick(fnOnClick, oMaster) {
    try {
        if (browseris.safari) {
            if (FIStringEquals(typeof fnOnClick, "string")) {
                eval("var document=window.document; {" + fnOnClick + "}");
            }
            else {
                fnOnClick();
            }
        }
        else {
            if (FIStringEquals(typeof fnOnClick, "string")) {
                fnOnClick = new Function("event", "var document=window.document; {" + fnOnClick + "}");
            }
            var oTemp = window.document.body.appendChild(window.document.createElement("span"));

            oTemp['master'] = oMaster;
            oTemp.onclick = fnOnClick;
            var evt;
            var ctxVar = null;

            if (typeof currentCtx != 'undefined' && currentCtx != null)
                ctxVar = currentCtx;
            else if (typeof ctxFilter != 'undefined' && ctxFilter != null)
                ctxVar = ctxFilter;
            if (browseris.ie)
                evt = {
                    "srcElement": oTemp,
                    "fakeEvent": 1,
                    "currentCtx": ctxVar
                };
            else
                evt = {
                    "target": oTemp,
                    "fakeEvent": 1,
                    "currentCtx": ctxVar
                };
            oTemp.onclick(evt);
            oTemp.parentNode.removeChild(oTemp);
        }
    }
    catch (e) { }
}
function EngageSelection(oMaster, fDoSelection, fDelayExpandSM, fEnterSM, fExpand, fCommand) {
    var nLevel = oMaster['_nLevel'];
    var arrSelected = oMaster['_arrSelected'];
    var oItem = arrSelected[nLevel];

    if (null == oItem || oItem['optionDisabled'])
        return;
    if (FIsIType(oItem, "submenu")) {
        if (fDelayExpandSM) {
            SetShowSubMenuEvnt(oMaster);
        }
        else {
            ShowSubMenu(oMaster, nLevel, oItem);
            if (fEnterSM)
                MoveMenuSelection(oMaster, 1);
        }
    }
    else if (fDoSelection) {
        var fEnabled = oItem.getAttribute("enabled");

        if (fEnabled != "false") {
            if (!fExpand) {
                var fnOnClick = oItem.getAttribute("onMenuClick");

                if (null != fnOnClick) {
                    var noHideMenu = false;
                    var executed = false;

                    if (oMaster['id'] == "filter_menu") {
                        ExecuteOnClick(fnOnClick, oMaster);
                        executed = true;
                        RefreshOpenedSortMenu(oMaster, nLevel);
                        RefreshClearAndFilterMenu(oMaster, oItem, nLevel);
                        var idValue = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_";

                        if (oItem.id != idValue + String(1) && oItem.id != idValue + String(0) && !oMaster['hideMenu'])
                            noHideMenu = true;
                    }
                    if (!noHideMenu) {
                        HideMenu(oMaster, 1);
                        if (!executed)
                            ExecuteOnClick(fnOnClick, oMaster);
                        HideMenu(oMaster, 2);
                    }
                }
                else {
                    var oItemAnchor = oItem.firstChild;
                    var fnClick = oItemAnchor.onclick;

                    if (null != fnClick)
                        fnClick();
                }
            }
            else {
                eval(fCommand);
            }
        }
    }
}
function RefreshClearAndFilterMenu(oMaster, oItem, nLevel) {
    if (ctxFilter == null)
        return;
    var nIndex = parseInt(oItem.id.substr(oItem.id.lastIndexOf('_') + 1));
    var oRoot = oMaster['_oRoot'];
    var oRootChildren = oRoot.childNodes;
    var fieldName = filterTable.getAttribute('Name');
    var iframe = document.getElementById("FilterIframe" + filterTable.getAttribute('CtxNum'));
    var iframeDoc = null;

    if (typeof iframe.contentDocument != "undefined")
        iframeDoc = iframe.contentDocument;
    if (iframeDoc == null && null != iframe.contentWindow)
        iframeDoc = iframe.contentWindow.document;
    if (iframeDoc == null)
        iframeDoc = iframe.ownerDocument;
    var select = iframeDoc.getElementById("diidFilter" + fieldName);

    if (select == null)
        return;
    var rgChoices = select == null ? null : select.childNodes;
    var filterOffDisabled = true;
    var checkImg = null;

    if (oRootChildren[nIndex].id != "fmi_asc" && oRootChildren[nIndex].id != "fmi_desc" && oRootChildren[nIndex].id != "fmi_clr") {
        checkImg = document.getElementById(oItem.id + "_ICON");
        if (oItem.getAttribute("checked") == "true") {
            oItem.setAttribute("checked", "false");
            if (checkImg != null) {
                checkImg.checked = false;
                window.setTimeout(function() {
                    checkImg.checked = false;
                }, 0);
            }
        }
        else {
            oItem.setAttribute("checked", "true");
            if (checkImg != null) {
                checkImg.checked = true;
                window.setTimeout(function() {
                    checkImg.checked = true;
                }, 0);
            }
        }
    }
    else if (oRootChildren[nIndex].id == "fmi_asc" || oRootChildren[nIndex].id == "fmi_desc")
        filterOffDisabled = false;
    var elementId = "";
    var choicesLength = rgChoices == null ? 0 : rgChoices.length;
    var clearFilterIndex = -1;

    for (var i = 0, rgIndex = 1; i < oRootChildren.length && rgIndex < choicesLength; i++, rgIndex++) {
        elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(i);
        var filterNode = document.getElementById(elementId);

        if (clearFilterIndex < 0) {
            var childNode = filterNode.firstChild;

            if (childNode != null)
                childNode = childNode.firstChild;
            if (childNode != null)
                childNode = childNode.nextSibling;
            if (childNode != null && childNode.id == "fmi_clr")
                clearFilterIndex = i;
            rgIndex = 0;
            continue;
        }
        var newQueryString = FilterFieldV3(ctxFilter.view, escapeProperly(fieldName), rgChoices[rgIndex].value, rgIndex, ctxFilter.queryString, true);
        var strFilterUrl = "javascript:HandleFilter(event, '" + STSScriptEncode(newQueryString) + "')";

        filterNode.setAttribute("onMenuClick", strFilterUrl);
        if (nIndex == clearFilterIndex) {
            filterNode.setAttribute("checked", "false");
            var checkNode = document.getElementById(elementId + "_ICON");

            if (checkNode != null)
                checkNode.checked = false;
        }
        if (filterNode.getAttribute("checked") == "true")
            filterOffDisabled = false;
    }
    if (clearFilterIndex < 0)
        return;
    elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(clearFilterIndex);
    filterNode = document.getElementById(elementId);
    if (filterNode == null)
        return;
    var clearFilterImg = document.getElementById(elementId + "_ICON");
    var oMenuitem = document.getElementById(MakeID3(oMaster, nLevel, clearFilterIndex));

    if (!filterOffDisabled) {
        filterNode.setAttribute("enabled", "true");
        filterNode.disabled = false;
        filterNode.optionDisabled = false;
        filterNode.setAttribute("iconSrc", GetThemedImageUrl("DeleteFilterGlyph.png"));
        if (clearFilterImg != null)
            clearFilterImg.src = GetThemedImageUrl("DeleteFilterGlyph.png");
        if (oMenuitem != null)
            RemoveCssClassFromElement(oMenuitem, "ms-core-menu-itemDisabled");
    }
    else {
        filterNode.setAttribute("enabled", "false");
        filterNode.disabled = true;
        filterNode.optionDisabled = true;
        filterNode.setAttribute("iconSrc", GetThemedImageUrl("DisabledDeleteFilterGlyph.png"));
        if (clearFilterImg != null)
            clearFilterImg.src = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
        if (oMenuitem != null)
            Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
    }
}
function RefreshOpenedSortMenu(oMaster, nLevel) {
    if (ctxFilter == null)
        return;
    var strSortAsc = "";
    var strSortDesc = "";
    var str = ctxFilter.queryString;

    if (str == null)
        str = "";
    var uri = new URI(str, {
        disableEncodingDecodingForLegacyCode: true
    });

    str = "?" + uri.getQuery();
    str = RemovePagingArgs(str);
    var sortFields = filterTable.getAttribute('SortFields');
    var ichSort = str.indexOf("&SortDir=");
    var ichSortMac = str.indexOf("&", ichSort + 1);

    if (ichSort == -1) {
        ichSort = sortFields.indexOf("&SortDir=");
        ichSortMac = sortFields.indexOf("&SortField=");
        strSortAsc = str + sortFields.substr(ichSortMac, ichSort - ichSortMac) + "&SortDir=Asc";
        strSortDesc = str + sortFields.substr(ichSortMac, ichSort - ichSortMac) + "&SortDir=Desc";
    }
    else if (ichSort != -1) {
        strSortAsc = str.substr(0, ichSort) + "&SortDir=Asc";
        strSortDesc = str.substr(0, ichSort) + "&SortDir=Desc";
        if (ichSortMac != -1) {
            strSortAsc += str.substr(ichSortMac);
            strSortDesc += str.substr(ichSortMac);
        }
    }
    strSortAsc = "HandleFilter(event, '" + STSScriptEncode(strSortAsc) + "', 1);";
    strSortDesc = "HandleFilter(event, '" + STSScriptEncode(strSortDesc) + "', 1);";
    var elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(0);
    var sortNode = document.getElementById(elementId);

    sortNode.setAttribute("onMenuClick", strSortAsc);
    elementId = oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(1);
    sortNode = document.getElementById(elementId);
    sortNode.setAttribute("onMenuClick", strSortDesc);
}
function CloseCurrentLevel(oMaster, fAllowHideRoot) {
    var nLevel = oMaster['_nLevel'];
    var arrSelected;
    var obj;

    if (nLevel > 0) {
        UpdateLevel(oMaster, nLevel - 1);
        nLevel = oMaster['_nLevel'];
        arrSelected = oMaster['_arrSelected'];
        obj = arrSelected[nLevel];
        if (obj != null) {
            if (typeof obj.onclick != "undefined" && obj.onclick != null) {
                SetEvent("click", obj['_onclick'], obj);
            }
            obj = (obj.getElementsByTagName("a"))[0];
            if (obj != null) {
                if (typeof obj.setActive != "undefined" && obj.setActive != null) {
                    obj.setActive();
                }
                else if (typeof obj.focus != "undefined" && obj.focus != null) {
                    obj.focus();
                }
            }
        }
    }
    else if (fAllowHideRoot) {
        HideMenu(oMaster);
        var oParent = oMaster['_oParent'];

        while (oParent != null && oParent.tagName == "SPAN" && oParent.getAttribute("contentEditable") == "true") {
            oParent = oParent.parentNode;
        }
        if (oParent != null) {
            var focusElement = oParent;
            var foastr = oParent.getAttribute("foa");

            if (foastr != null) {
                var foa = eval(foastr);

                if (foa == null) {
                    foa = byid(foastr);
                }
                if (foa != null) {
                    focusElement = foa;
                }
            }
            else {
                if (focusElement.tagName != "A") {
                    var anchorList = focusElement.getElementsByTagName("a");
                    var anchorListLen = anchorList.length;

                    if (anchorListLen > 0) {
                        focusElement = anchorList[anchorListLen - 1];
                    }
                }
            }
            if (focusElement != null) {
                try {
                    if (typeof focusElement.setActive != "undefined" && focusElement.setActive != null) {
                        focusElement.setActive();
                    }
                    else if (typeof focusElement.focus != "undefined" && focusElement.focus != null) {
                        focusElement.focus();
                    }
                }
                catch (e) { }
            }
        }
    }
}
function UnselectCurrentOption(oMaster) {
    var nLevel = oMaster['_nLevel'];

    if (nLevel >= 0) {
        var arrSelected = oMaster['_arrSelected'];
        var oItem = arrSelected[nLevel];

        if (FIsIType(oItem, "option")) {
            UnselectItem(oItem);
            arrSelected[nLevel] = null;
        }
    }
}
function MakeID3(oMaster, nLevel, nIndex) {
    return oMaster['_wzPrefixID'] + "_" + String(nLevel) + "_" + String(nIndex);
}
function GetItem(oMaster, nLevel, nIndex) {
    var arrPopup = oMaster['_arrPopup'];
    var oPopup = arrPopup[nLevel];

    return Boolean(oPopup) ? document.getElementById(MakeID3(oMaster, nLevel, nIndex)) : null;
}
function MoveMenuSelection(oMaster, iDir) {
    var nIndex = -1;
    var oRoot = oMaster['_oRoot'];
    var nNumItems = oRoot.childNodes.length;
    var nLevel = oMaster['_nLevel'];
    var arrSelected = oMaster['_arrSelected'];
    var oSelected = arrSelected[nLevel];
    var oItem = null;

    if (null != oSelected) {
        var wzSelectedID = Boolean(oSelected) ? oSelected.id : null;

        if (null != wzSelectedID) {
            var nCurIndex = parseInt(wzSelectedID.substring(wzSelectedID.lastIndexOf("_") + 1, wzSelectedID.length));

            if (nCurIndex == nNumItems)
                nCurIndex = -1;
            if (nCurIndex + iDir == nNumItems) {
                nIndex = nNumItems;
                oItem = GetItem(oMaster, nLevel, nNumItems);
            }
            if (oItem == null)
                nIndex = (nCurIndex + iDir) % nNumItems;
        }
    }
    if (nIndex < 0) {
        nIndex = iDir > 0 ? 0 : nNumItems - 1;
    }
    if (oItem == null) {
        var nIndexStart = nIndex;

        do {
            oItem = GetItem(oMaster, nLevel, nIndex);
            nIndex = (nIndex + iDir) % nNumItems;
        } while (nIndex != nIndexStart && (null == oItem || oItem.style.display == "none" || !(FIsIType(oItem, "option") || FIsIType(oItem, "submenu"))));
    }
    ToggleMenuItem(oMaster, nLevel, oItem);
}
function ToggleMenuItem(oMaster, nLevel, oItem) {
    var arrSelected = oMaster['_arrSelected'];
    var oOld = arrSelected[nLevel];

    if (null == oItem || null != oOld && oItem.id == oOld.id)
        return;
    if (null != oOld) {
        UnselectItem(oOld);
        oOld.onkeydown = null;
        oOld.onmousedown = null;
        oOld.onmouseover = null;
        oOld.onmouseout = null;
        oOld.oncontextmenu = null;
    }
    UpdateLevel(oMaster, nLevel);
    SelectItem(oItem);
    arrSelected[nLevel] = oItem;
    try {
        var oItemAnchor = oItem.firstChild;

        if (oItemAnchor != null) {
            if (typeof oItemAnchor.setActive != "undefined" && oItemAnchor.setActive != null)
                oItemAnchor.setActive();
            else if (typeof oItemAnchor.focus != "undefined" && oItemAnchor.focus != null)
                oItemAnchor.focus();
        }
    }
    catch (e) { }
}
function SelectItemStatic(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.setAttribute("selectedStatic", "true");
        oItem.className += " ms-core-menu-staticItemSelected";
    }
}
function SelectItem(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.className += " ms-core-menu-itemSelected";
    }
}
function UnselectItem(oItem) {
    if (null == oItem)
        return;
    if (oItem.tagName != "HR" && oItem.tagName != "DIV") {
        oItem.className = oItem.className.replace("ms-core-menu-itemSelected", "");
    }
}
function SetImageSize(oMaster, oImg, oSize) {
    if (oSize == null) {
        if (oMaster['_fLargeIconMode'])
            oSize = 32;
        else
            oSize = 16;
    }
    oImg.width = String(oSize);
    oImg.height = String(oSize);
}
function CreateMenuOption(oMaster, oMenuitem, oNode, iD, wzHtml, fShowCheckBoxes) {
    var oAnchor = null;
    var oIcon;
    var oLabel;
    var oAccKey;
    var oArrow;
    var sText;
    var innerNode;
    var sDescription;
    var oMenuItemBody = null;
    var oTextSpan;
    var oTextNode;
    var oBr;
    var oDescSpan;
    var oDescNode;
    var hierarchy;
    var myTextSpan;
    var command;
    var htmlSpan;
    var oImg;
    var wzAccKey;
    var mtSpan = new MenuTag("span", null);
    var mtDiv = new MenuTag("div", null);

    oIcon = CreateMenuTag(mtDiv);
    oLabel = CreateMenuTag(mtDiv);
    oAccKey = CreateMenuTag(mtSpan);
    oArrow = CreateMenuTag(mtDiv);
    oAnchor = document.createElement("a");
    oAnchor.className = "ms-core-menu-link";
    if (oMenuitem.getAttribute("isindented") == "true")
        Menu_AddCssClassToElement(oAnchor, "ms-core-menu-indent");
    oAnchor.id = iD + "_Anchor";
    oAnchor.appendChild(oIcon);
    oAnchor.appendChild(oLabel);
    oAnchor.appendChild(oAccKey);
    oAnchor.appendChild(oArrow);
    oAnchor.href = "javascript:;";
    oAnchor.setAttribute("onclick", "return false;");
    if (oMaster['_fCompactItemsWithoutIcons'] && null == oNode.getAttribute("iconSrc"))
        oLabel.className = "ms-core-menu-labelCompact";
    else
        oLabel.className = "ms-core-menu-label";
    oLabel.id = oNode.id;
    if (oNode.getAttribute("enabled") == "false") {
        oMenuitem.disabled = true;
        Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
        var oDisabledSpan = document.createElement("span");

        oDisabledSpan.appendChild(document.createTextNode(Strings.STS.L_DisabledMenuItem));
        oDisabledSpan.className = "ms-accessible ms-core-menu-disabledText";
        oLabel.appendChild(oDisabledSpan);
        oAnchor.setAttribute("aria-disabled", "true");
    }
    sText = EvalAttributeValue(oNode, "text", "textScript");
    if (sText == null || sText == "") {
        innerNode = oNode.firstChild;
        if (innerNode != null && innerNode.nodeType == 3)
            sText = innerNode.nodeValue;
    }
    sDescription = EvalAttributeValue(oNode, "description", "descriptionScript");
    if (sDescription != null && sText != null && oMaster['_fLargeIconMode']) {
        oTextSpan = document.createElement("span");
        oTextSpan.className = 'ms-core-menu-title';
        oTextNode = document.createTextNode(sText);
        oBr = document.createElement("br");
        oDescSpan = document.createElement("span");
        oDescNode = document.createTextNode(sDescription);
        oDescSpan.className = "ms-core-menu-itemDescription";
        oLabel.appendChild(oTextSpan);
        oTextSpan.appendChild(oTextNode);
        oLabel.appendChild(oBr);
        oLabel.appendChild(oDescSpan);
        oDescSpan.appendChild(oDescNode);
    }
    else if (sText != null) {
        oTextSpan = document.createElement("span");
        oTextSpan.className = 'ms-core-menu-title';
        hierarchy = oNode.getAttribute("hierarchy");
        if (hierarchy != null) {
            myTextSpan = document.createElement("span");
            command = oNode.getAttribute("onExpand");
            if (command != null) {
                myTextSpan.setAttribute("onExpand", command);
            }
            myTextSpan.className = "hierarchy";
            oLabel.appendChild(myTextSpan);
            myTextSpan.innerHTML = hierarchy;
            oLabel.appendChild(oTextSpan);
            oTextSpan.innerHTML = sText;
        }
        else {
            oTextNode = document.createTextNode(sText);
            oLabel.appendChild(oTextSpan);
            oTextSpan.appendChild(oTextNode);
        }
    }
    if (sText != null)
        oAnchor.title = sText;
    htmlSpan = document.createElement("span");
    htmlSpan.innerHTML = Boolean(wzHtml) ? wzHtml : "";
    oLabel.appendChild(htmlSpan);
    if (Boolean(oMaster['_fHideIcons'])) {
        oIcon.className = "ms-hide";
    }
    else {
        if (oMaster['_fLargeIconMode'])
            oIcon.className = "ms-core-menu-iconLarge";
        else
            oIcon.className = "ms-core-menu-icon";
    }
    var iconSrc = null;
    var iconAlt = null;
    var isCheckBox = false;
    var isChecked = false;

    if (oNode.getAttribute("checked") == "true") {
        isChecked = true;
        isCheckBox = true;
    }
    else if (oNode.getAttribute("checked") == "false" && (currentFilterMenu != null && currentFilterMenu.id == "filter_menu" || fShowCheckBoxes)) {
        isCheckBox = true;
    }
    else {
        iconSrc = EvalAttributeValue(oNode, "iconSrc", "iconScript");
        iconAlt = oNode.getAttribute("iconAltText");
    }
    if (isCheckBox) {
        oImg = document.createElement("INPUT");
        oImg.setAttribute("type", "checkbox");
        if (isChecked)
            oImg.setAttribute("checked", "yes");
        oImg.title = Boolean(iconAlt) ? iconAlt : "";
        oIcon.appendChild(oImg);
        oImg.id = iD + "_ICON";
        oImg.setAttribute("style", "padding-left:0px");
    }
    else if (Boolean(iconSrc)) {
        oImg = document.createElement("img");
        oImg.src = iconSrc;
        oImg.alt = Boolean(iconAlt) ? iconAlt : "";
        oImg.title = Boolean(iconAlt) ? iconAlt : "";
        oIcon.appendChild(oImg);
        oImg.id = iD + "_ICON";
    }
    wzAccKey = oNode.getAttribute("accessKeyText");
    if (null != wzAccKey)
        oAccKey.innerHTML = wzAccKey;
    else
        oAccKey.className = "ms-accessible";
    SetIType(oMenuitem, "option");
    oMenuitem.appendChild(oAnchor);
}
function CreateMenuSeparator(oMaster, oMenuitem) {
    oMenuitem.innerHTML = '<hr class="ms-core-menu-separatorHr" />';
    SetIType(oMenuitem, "separator");
}
function CreateSubmenu(oMaster, oMenuitem, oNode, iD) {
    var oLabelNode = FindLabel(oNode);

    CreateMenuOption(oMaster, oMenuitem, oNode, iD, Boolean(oLabelNode) ? oLabelNode.innerHTML : null);
    var oArrow = null;
    var oArrowImg = document.createElement("img");

    if (oMenuitem.className.indexOf("ms-core-menu-hasArrow") == -1)
        oMenuitem.className += " ms-core-menu-hasArrow";
    oArrow = oMenuitem.childNodes[0].childNodes[3];
    oArrow.className = "ms-core-menu-arrowBox";
    oArrowImg.className = "ms-core-menu-arrow";
    oArrow.appendChild(oArrowImg);
    oArrowImg.src = !oMaster['_fIsRtL'] ? oMaster['_wzMArrPath'] : oMaster['_wzMArrPathRtL'];
    oArrowImg.alt = Strings.STS.L_SubMenu_Text;
    oArrowImg.title = "";
    SetIType(oMenuitem, "submenu");
    oMenuitem.submenuRoot = oNode;
}
function MergeAttributes(oTarget, oSource) {
    if (!browseris.nav && (typeof oTarget.mergeAttributes != "undefined" && oTarget.mergeAttributes != null)) {
        oTarget.mergeAttributes(oSource);
    }
    else {
        var oAttributes = oSource.attributes;
        var len = 0;

        if (typeof oAttributes.length != "undefined" && oAttributes.length != null) {
            len = oAttributes.length;
        }
        for (var i = 0; i < len; i++) {
            var oAttrib = oAttributes[i];

            if (oAttrib != null && oAttrib['specified'] && oAttrib.nodeName != "id" && oAttrib.nodeName != "ID" && oAttrib.nodeName != "name") {
                oTarget.setAttribute(oAttrib.nodeName, oAttrib.nodeValue);
            }
        }
        if (oSource.getAttribute("type") != null) {
            oTarget.setAttribute("type", oSource.getAttribute("type"));
        }
        if (oSource['submenuRoot'] != null) {
            oTarget['submenuRoot'] = oSource['submenuRoot'];
        }
    }
}
function CreateMenuItem(oMaster, oNode, iD, wzHtml, fShowCheckBox) {
    var oMenuitem;
    var childLen;
    var nIndex;
    var childNode;

    if (FIsIType(oNode, "label"))
        return null;
    oMenuitem = document.createElement("li");
    MergeAttributes(oMenuitem, oNode);
    oMenuitem.id = iD;
    if (FIsIType(oNode, "separator")) {
        CreateMenuSeparator(oMaster, oMenuitem);
        oMenuitem.className = "ms-core-menu-separator";
        return oMenuitem;
    }
    oMenuitem.className = "ms-core-menu-item";
    if (null == GetIType(oNode))
        SetIType(oNode, "option");
    if (FIsIType(oNode, "submenu"))
        CreateSubmenu(oMaster, oMenuitem, oNode, iD);
    else if (FIsIType(oNode, "option"))
        CreateMenuOption(oMaster, oMenuitem, oNode, iD, wzHtml, fShowCheckBox);
    if (oMenuitem.disabled == true || oMenuitem.getAttribute("enabled") == "false") {
        Menu_AddCssClassToElement(oMenuitem, "ms-core-menu-itemDisabled");
        oMenuitem.disabled = false;
        childLen = oMenuitem.childNodes.length;
        for (nIndex = 0; nIndex < childLen; nIndex++) {
            childNode = oMenuitem.childNodes[nIndex];
            if (childNode.nodeType != 1 || childNode.tagName == "A")
                continue;
            childNode.disabled = true;
        }
        oMenuitem.optionDisabled = true;
    }
    return oMenuitem;
}
function GetItems(oMaster) {
    var oContents = oMaster['_oContents'];

    if (null == oContents) {
        PrepContents(oMaster);
    }
    oContents = oMaster['_oContents'];
    return oContents.childNodes;
}
function GetIType(oItem) {
    return Boolean(oItem) ? oItem.getAttribute("type") : null;
}
function FIsIType(oItem, wzType) {
    return FIStringEquals(GetIType(oItem), wzType);
}
function SetIType(oItem, wzType) {
    if (null != oItem)
        oItem.setAttribute("type", wzType);
}
function FIStringEquals(wzX, wzY) {
    return wzX != null && wzY != null && wzX.toLowerCase() == wzY.toLowerCase();
}
function RenderAccessibleMenu(oMaster, fForceRefresh) {
    if (fForceRefresh) {
        oMaster['_oContents'] = null;
        oMaster['_oRoot'] = null;
        oMaster['_nLevel'] = 0;
        oMaster['_arrPopup'] = [];
        oMaster['_arrSelected'] = [];
    }
    else {
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    if (!Boolean(oMaster['_oContents']))
        PrepContents(oMaster);
    if (!Boolean(oMaster['_oContents']))
        return;
    if (!Boolean(oMaster['_oRoot'])) {
        oMaster['_nLevel'] = 0;
        oMaster['_oRoot'] = oMaster['_oContents'];
    }
    FixUpMenuStructure(oMaster);
    var menuDir = oMaster['_fIsRtL'] ? "rtl" : "ltr";

    g_menuHtc_html = "<html dir='" + menuDir + "'><head><title>" + Strings.STS.L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
    RenderMenuLevel(oMaster, oMaster['_oRoot'], true);
    g_menuHtc_html = g_menuHtc_html + "</ul></body></html>";
    oMaster['_accessibleMenuInProgress'] = true;
    var oNewWindow = window.open("/_layouts/blank.htm", "_blank", "status=no,toolbar=no,menubar=no,location=no");

    oMaster['_accessibleMenu'] = oNewWindow;
    oNewWindow.document.write(g_menuHtc_html);
    oNewWindow.document.close();
    oNewWindow.onunload = MenuHtc_hide;
    oNewWindow.focus();
}
function CloseAccessibleMenu(oMaster, n) {
    if (n == null)
        n = 0;
    if (oMaster != null) {
        oMaster['_accessibleMenuInProgress'] = false;
        if (n == 0 || n == 1) {
            var accessibleMenu = oMaster['_accessibleMenu'];

            if (accessibleMenu != null) {
                accessibleMenu.close();
                try {
                    if (accessibleMenu.opener != null)
                        accessibleMenu.opener.focus();
                }
                catch (e) { }
                oMaster['_accessibleMenu'] = null;
            }
        }
        if (n == 0 || n == 2) {
            if (typeof oMaster._onDestroy == 'function') {
                oMaster._onDestroy();
                oMaster._onDestroy = null;
            }
        }
    }
}
function GetMenuItemText(oMaster, oNode, s) {
    if (s == "") {
        s = EvalAttributeValue(oNode, "text", "textScript");
        var description = EvalAttributeValue(oNode, "description", "descriptionScript");

        if (description != null && description != "" && oMaster['_fLargeIconMode']) {
            if (s != "")
                s = s + ": ";
            s = s + description;
        }
    }
    if (oNode.getAttribute("checked") == "true")
        s = "* " + s;
    if (oNode.title != null && oNode.title != "")
        s = s + ": " + oNode.title;
    return s;
}
function GetMenuItemEnabled(oNode, fEnabled) {
    if (!fEnabled)
        return false;
    if (oNode.getAttribute("enabled") == "false")
        return false;
    if (oNode.getAttribute("disabled") != null && oNode.getAttribute("disabled") != "")
        return false;
    return true;
}
var g_menuHtc_html;

function RenderMenuLevel(oMaster, oRoot, fEnabled) {
    var nodes = oRoot.childNodes;
    var nnodes = nodes.length;

    for (var nIndex = 0; nIndex < nnodes; nIndex++) {
        var oNode = nodes[nIndex];

        if (oNode.nodeType != 1)
            continue;
        if (oNode.style.display == "none")
            continue;
        var s;

        if (FIsIType(oNode, "option")) {
            s = GetMenuItemText(oMaster, oNode, oNode.innerHTML.trim());
            if (!GetMenuItemEnabled(oNode, fEnabled)) {
                g_menuHtc_html = g_menuHtc_html + "<li><span id=\"" + oNode.id + "\">" + s + "</span></li>";
            }
            else {
                g_menuHtc_html = g_menuHtc_html + "<li><a href=\"#\" id=\"" + oNode.id + "\" " + "onMenuClick" + "=\"" + oNode.getAttribute("onMenuClick") + "\" onclick=\"" + "javascript:opener.ExecuteOnAccessibleClick(this.getAttribute('" + "onMenuClick" + "')); return false;" + "\">" + s + "</a></li>";
            }
        }
        else if (FIsIType(oNode, "submenu")) {
            s = GetMenuItemText(oMaster, oNode, "");
            g_menuHtc_html = g_menuHtc_html + "<li><span id=\"" + oNode.id + "\">" + s;
            for (var n = 0; n < oNode.childNodes.length; n++) {
                var oLabelNode = oNode.childNodes[n];

                if (oLabelNode.nodeType != 1)
                    continue;
                if (oLabelNode.style.display == "none")
                    continue;
                if (FIsIType(oLabelNode, "label")) {
                    g_menuHtc_html = g_menuHtc_html + " " + oLabelNode.innerHTML;
                    break;
                }
            }
            g_menuHtc_html = g_menuHtc_html + "</span><ul>";
            RenderMenuLevel(oMaster, oNode, GetMenuItemEnabled(oNode, fEnabled));
            g_menuHtc_html = g_menuHtc_html + "</ul></li>";
        }
    }
}
function ExecuteOnAccessibleClick(fnOnClick) {
    var oMaster = g_menuHtc_lastMenu;

    if (oMaster != null) {
        CloseAccessibleMenu(oMaster, 1);
        ExecuteOnClick(fnOnClick, oMaster);
        CloseAccessibleMenu(oMaster, 2);
    }
}
function FIsIHidden(oItem) {
    if (null != oItem) {
        var hiddenFunc = oItem.getAttribute("hidden");

        if (null == hiddenFunc)
            return false;
        return eval(hiddenFunc);
    }
    else
        return false;
}
function EvalAttributeValue(oNode, sAttribute1, sAttribute2) {
    var result = oNode.getAttribute(sAttribute2);

    if (result != null && (result.toLowerCase()).indexOf("javascript:") == 0) {
        result = String(eval(result.substring(11)));
    }
    else {
        result = null;
    }
    if (result == null || result == "") {
        result = oNode.getAttribute(sAttribute1);
    }
    if (result == null)
        result = "";
    return result;
}
function Menu_AddCssClassToElement(e, c) {
    var cn = e.className;

    if (cn != null) {
        if (!Menu_HasCssClass(e, c))
            e.className = e.className + " " + c;
    }
    else {
        e.className = c;
    }
    function Menu_HasCssClass(elem, className, fRemove) {
        var cn2 = elem.className;

        if (cn2 == null)
            return false;
        var rg = cn2.split(" ");
        var i;

        for (i = 0; i < rg.length; i++) {
            if (rg[i] == className) {
                if (fRemove) {
                    rg.splice(i, 1);
                    elem.className = rg.join(" ");
                }
                return true;
            }
        }
        return false;
    }
}
var MMU_chDelim;
var MMU_chDelimEnc;
var MMU_postbackPrefix;
var MMU_chDelim2;
var MMU_chDelim2Enc;

function MHash_InitializePrototype() {
    MHash.prototype._keys = undefined;
    MHash.prototype._values = undefined;
    MHash.prototype.Add = MHash_Add;
    MHash.prototype.Count = MHash_Count;
    MHash.prototype.Keys = MHash_Keys;
    MHash.prototype.Values = MHash_Values;
    MHash.prototype.Exists = MHash_Exists;
    MHash.prototype.Item = MHash_Item;
}
function MHash() {
    this._keys = [];
    this._values = [];
}
function MHash_Add(oKey, oValue) {
    this._keys.push(oKey);
    this._values.push(oValue);
}
function MHash_Count() {
    return this._keys.length;
}
function MHash_Keys() {
    return this._keys;
}
function MHash_Values() {
    return this._values;
}
function MHash_Exists(oKey) {
    var len = this.Count();
    var keys = this.Keys();

    for (var i = 0; i < len; i++) {
        if (keys[i] == oKey)
            return true;
    }
    return false;
}
function MHash_Item(oKey) {
    var len = this.Count();
    var keys = this.Keys();

    for (var i = 0; i < len; i++) {
        if (keys[i] == oKey)
            return (this.Values())[i];
    }
    return null;
}
function ParseContext_InitializePrototype() {
    ParseContext.prototype.TemplateClientId = undefined;
    ParseContext.prototype.MenuClientId = undefined;
    ParseContext.prototype.TimeoutMessage = undefined;
}
function ParseContext(contextString) {
    try {
        var values = contextString.split(';');
        var str = values[0];

        this.TemplateClientId = str;
        str = values[1];
        this.MenuClientId = str;
        str = values[2];
        this.TimeoutMessage = (str.replace(/%semi%/g, ";")).replace(/%quot%/g, "\'");
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
var MMU_reDelimEnc;
var MMU_reDelim2Enc;
var MMU_reDelimDec;
var MMU_reDelim2Dec;

function MMU_EncVal(strDec) {
    return (strDec.replace(MMU_reDelimDec, MMU_chDelimEnc)).replace(MMU_reDelim2Dec, MMU_chDelim2Enc);
}
function MMU_DecVal(strEnc) {
    return (strEnc.replace(MMU_reDelim2Enc, MMU_chDelim2)).replace(MMU_reDelimEnc, MMU_chDelim);
}
function MMU_ParseNV(rgnv) {
    var dictNV = new MHash();
    var rgstrNV = rgnv.split(MMU_chDelim);

    if (rgstrNV != null) {
        var i;

        for (i = 0; i < rgstrNV.length; i++) {
            var strNV = rgstrNV[i];
            var iEq = strNV.indexOf("=");

            if (iEq == 0) {
                continue;
            }
            var key = null;
            var value = null;

            if (iEq < 0) {
                key = strNV;
            }
            else {
                key = strNV.substr(0, iEq);
                if (iEq < strNV.length - 1) {
                    value = MMU_DecVal(strNV.substr(iEq + 1));
                }
                else {
                    value = "";
                }
            }
            dictNV.Add(key, value);
        }
    }
    return dictNV;
}
function MMU_ParseNVAttr(elem, attr) {
    var val = elem.getAttribute(attr);

    if (val == null && elem.childNodes.length > 0) {
        var firstChild = elem.childNodes[0];

        if (firstChild.nodeType == 1) {
            val = firstChild.getAttribute(attr);
        }
    }
    if (val == null) {
        return new MHash();
    }
    return MMU_ParseNV(val);
}
function MMU_ResetMenuState(menu, dis, hid, chk, tokval) {
    var i;
    var childNodes = menu.childNodes;

    for (i = 0; i < childNodes.length; i++) {
        var mnu = childNodes[i];

        if (mnu.nodeType != 1)
            continue;
        var mnuId = mnu.getAttribute("id");

        if (mnu != null && mnuId != null && mnuId.length > 0) {
            if (mnu.childNodes.length > 0) {
                MMU_ResetMenuState(mnu, dis, hid, chk, tokval);
                continue;
            }
            if (hid.Exists(mnuId)) {
                mnu.style.display = "none";
            }
            else {
                mnu.style.display = "";
                var enabledOverride = mnu.getAttribute("enabledOverride");

                if (enabledOverride != null && enabledOverride.length > 0) {
                    mnu.setAttribute("enabled", enabledOverride);
                }
                else {
                    if (dis.Exists(mnuId)) {
                        mnu.setAttribute("enabled", "false");
                    }
                    else {
                        mnu.setAttribute("enabled", "true");
                        if (chk.Exists(mnuId)) {
                            mnu.setAttribute("checked", "true");
                        }
                        else {
                            mnu.setAttribute("checked", "false");
                        }
                    }
                }
            }
            MMU_ReplTokValAttr(mnu, "onMenuClick", tokval);
            MMU_ReplTokValAttr(mnu, "text", tokval);
            MMU_ReplTokValAttr(mnu, "description", tokval);
            MMU_ReplTokValVal(mnu, tokval);
        }
    }
}
function MMU_ReplTokValAttr(elem, attr, tokval) {
    var val = elem.getAttribute(attr);
    var orig = elem.getAttribute(attr + "_Original");

    if (val != null && orig == null && tokval.Count() > 0) {
        elem.setAttribute(attr + "_Original", val);
    }
    else if (val != null && orig != null && val != orig) {
        val = orig;
    }
    if (val == null || val.length <= 0) {
        return;
    }
    var newVal = MMU_ReplTokVal(val, tokval);

    if (newVal != val) {
        elem.setAttribute(attr, newVal);
    }
}
function MMU_ReplTokValVal(item, tokval) {
    if (item.nextSibling == null) {
        return;
    }
    var val = item.nextSibling.nodeValue;
    var orig = item.getAttribute("valOrig");

    if (val != null && orig == null && tokval.Count() > 0) {
        orig = val;
        item.setAttribute("valOrig", orig);
    }
    else if (val != null && orig != null && val != orig) {
        val = orig;
    }
    var newVal = MMU_ReplTokVal(val, tokval);

    if (val != null && newVal != null && newVal != val) {
        item.nextSibling.nodeValue = newVal;
    }
}
function MMU_ReplTokVal(toFix, tokval) {
    if (toFix != null && toFix.indexOf("%") >= 0 && tokval != null && tokval.Count() > 0) {
        var toks = tokval.Keys();
        var vals = tokval.Values();
        var i;
        var len = toks.length;

        for (i = 0; i < len; i++) {
            var tok = toks[i];
            var val = vals[i];

            toFix = toFix.replace("%" + tok + "%", val);
        }
    }
    return toFix;
}
var g_MMU_HighlightedEcbTable;
var g_MMU_HighlightedEcbTableOpen;
var g_MMU_OpenTimeoutHandle;

function MMU_Open(menu, ecbLink, e, fAlignRight, alignId, delay) {
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSMMUOpenStart);
    try {
        if (menu == null || ecbLink == null) {
            return;
        }
        if (ecbLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return;
        }
        ClearHighlightedEcbTableOpen();
        if (fAlignRight == null) {
            fAlignRight = true;
        }
        MMU_ResetMenuState(menu, MMU_ParseNVAttr(ecbLink, "menuItemsDisabled"), MMU_ParseNVAttr(ecbLink, "menuItemsHidden"), MMU_ParseNVAttr(ecbLink, "menuItemsChecked"), MMU_ParseNVAttr(ecbLink, "menuTokenValues"));
        var elemAlign = null;

        if (alignId != null && alignId.length > 0) {
            elemAlign = document.getElementById(alignId);
        }
        if (elemAlign == null) {
            elemAlign = document.getElementById(ecbLink.id + "_t");
        }
        if (elemAlign == null) {
            elemAlign = ecbLink;
        }
        MMU_EcbHighlight(MMU_GetHighlightElement(ecbLink), true);
        var openMenuScript = "MenuHtc_show(document.getElementById('" + menu.id + "'), document.getElementById('" + elemAlign.id + "'), true, " + String(fAlignRight) + ", null);";

        openMenuScript += "SetEcbMouseOutAndDestroy('" + menu.id + "');";
        if (delay != null && delay > 0) {
            openMenuScript += " g_MMU_OpenTimeoutHandle = null;";
            g_MMU_OpenTimeoutHandle = window.setTimeout(openMenuScript, delay, "javascript");
        }
        else {
            eval(openMenuScript);
        }
        if (e != null) {
            try {
                e.cancelBubble = true;
            }
            catch (exIgnored) { }
        }
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
    if (IsFullNameDefined("CUI.PMetrics.perfMark"))
        CUI.PMetrics.perfMark(CUI.PMarker.perfWSSMMUOpenEnd);
}
function SetEcbMouseOutAndDestroy(menuId) {
    if (g_MMU_HighlightedEcbTable != null) {
        g_MMU_HighlightedEcbTable.onmouseout = null;
        g_MMU_HighlightedEcbTableOpen = g_MMU_HighlightedEcbTable;
        (document.getElementById(menuId))._onDestroy = ClearHighlightedEcbTableOpen;
    }
}
function ClearHighlightedEcbTableOpen() {
    if (g_MMU_HighlightedEcbTableOpen != null) {
        MMU_EcbHighlight(g_MMU_HighlightedEcbTableOpen, false);
        g_MMU_HighlightedEcbTableOpen = null;
    }
}
function MMU_EcbLinkOnFocusBlurDeferCall(menu, ecbLink, fOnFocus) {
    if (fOnFocus) {
        ecbLink.onblur = fOnFocus ? new Function("MMU_EcbLinkOnFocusBlurDeferCall(null, this, false)") : null;
    }
    if (g_MMU_HighlightedEcbTableOpen != null)
        return;
    var ecbTable = document.getElementById(ecbLink.id + "_t");

    if (ecbTable != null) {
        MMU_EcbHighlight(ecbTable, fOnFocus);
    }
}
function MMU_EcbTableMouseOverOutDeferCall(ecbTable, fMouseOver) {
    if (fMouseOver) {
        if (ecbTable == g_MMU_HighlightedEcbTableOpen) {
            return;
        }
        ecbTable.onmouseout = fMouseOver ? new Function("MMU_EcbTableMouseOverOut(this, false)") : null;
    }
    MMU_EcbHighlight(ecbTable, fMouseOver);
}
function MMU_EcbHighlight(ecbTable, fHighlight) {
    if (ecbTable == null && !fHighlight) {
        ecbTable = g_MMU_HighlightedEcbTableOpen;
    }
    if (ecbTable == null) {
        return;
    }
    if (fHighlight == null) {
        fHighlight = false;
    }
    var hoverActive = ecbTable.getAttribute("hoverActive");
    var hoverInactive = ecbTable.getAttribute("hoverInactive");

    if (hoverActive == null) {
        hoverActive = "ms-selectedtitle";
    }
    if (hoverInactive == null) {
        hoverInactive = "ms-unselectedtitle";
    }
    if (fHighlight) {
        ecbTable.className = hoverActive;
        g_MMU_HighlightedEcbTable = ecbTable;
    }
    else {
        ecbTable.className = hoverInactive;
    }
    var menuFormat = ecbTable.getAttribute("menuformat");
    var imageCell2 = document.getElementById(ecbTable.id + "i");

    if (imageCell2 != null && menuFormat != null && menuFormat == "ArrowOnHover") {
        imageCell2.style.visibility = fHighlight ? "visible" : "hidden";
    }
    if (!fHighlight) {
        g_MMU_HighlightedEcbTable = null;
    }
}
function MMU_PopMenuIfShowingDeferCall(menuElement) {
}
function MMU_HandleArrowSplitButtonKeyDown(e, id, a, t) {
    if (!e.shiftKey && !e.altKey && !e.ctrlKey && GetEventKeyCode(e) == 13) {
        return undefined;
    }
    if (Boolean(a))
        return MMU_EcbLinkOnKeyDown(byid(id), a, e);
    return undefined;
}
function MMU_HandleArrowOnHoverKeyDown(menu, ecbLink, e) {
    if (!e.shiftKey && !e.altKey && !e.ctrlKey && GetEventKeyCode(e) == 13) {
        return undefined;
    }
    if (null != ecbLink)
        return MMU_EcbLinkOnKeyDown(menu, ecbLink, e);
    return undefined;
}
function MMU_GetHighlightElement(elem) {
    var highlightElement = null;

    highlightElement = document.getElementById(elem.id + "_t");
    if (highlightElement != null)
        return highlightElement;
    else
        return elem;
}
var g_MMU_theFormActionAtPageLoad;
var g_MMU_Form0ActionAtPageLoad;
var g_MMU_Form0ActionAtPreMenuOpen;

function MMU_CallbackPreMenuOpen(templateClientId, menuClientId, callbackEventReference, timeoutLength, timeoutMessage, e) {
    try {
        var menuTemplate = document.getElementById(templateClientId);
        var menuLink = document.getElementById(menuClientId);

        if (menuLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return;
        }
        MMU_StopPendingTimerEventsFromCallback();
        MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
        var menu = document.getElementById(menuClientId);

        menu.setAttribute("callbackInProgress", "true");
        loadingMessageMenuItem = CAMOpt(menuTemplate, Strings.STS.L_Loading_Text, "null");
        if (loadingMessageMenuItem != null) {
            loadingMessageMenuItem.setAttribute("callbackitem", "true");
            loadingMessageMenuItem.setAttribute("enabled", "false");
        }
        var callbackContext = templateClientId + ";" + menuClientId + ";" + (timeoutMessage.replace(/;/g, "%semi%")).replace(/\'/g, "%quot%");

        callbackEventReference = callbackEventReference.replace(/__CALLBACKCONTEXT__/g, callbackContext);
        eval(callbackEventReference);
        g_MMU_RequestTimeoutTimeoutHandle = window.setTimeout("MMU_CallbackErrHandler('timeout', '" + callbackContext + "')", timeoutLength, "javascript");
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
var g_MMU_RequestTimeoutTimeoutHandle;

function MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate) {
    try {
        for (var menuChildIndex = 0; menuChildIndex < menuTemplate.childNodes.length; menuChildIndex++) {
            var menuChild = menuTemplate.childNodes[menuChildIndex];

            if (menuChild.nodeType == 1 && menuChild.getAttribute("callbackitem") == "true") {
                menuTemplate.removeChild(menuChild);
                --menuChildIndex;
            }
        }
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
function MMU_StopPendingTimerEventsFromCallback() {
    if (g_MMU_OpenTimeoutHandle != null) {
        window.clearTimeout(g_MMU_OpenTimeoutHandle);
        g_MMU_OpenTimeoutHandle = null;
    }
    if (g_MMU_RequestTimeoutTimeoutHandle != null) {
        window.clearTimeout(g_MMU_RequestTimeoutTimeoutHandle);
        g_MMU_RequestTimeoutTimeoutHandle = null;
    }
}
var loadingMessageMenuItem;

function MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString) {
    MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
    var errorMenuItem = CAMOpt(menuTemplate, errorString, "null");

    if (loadingMessageMenuItem != null) {
        loadingMessageMenuItem.setAttribute("callbackitem", "true");
        loadingMessageMenuItem.setAttribute("enabled", "false");
    }
}
function MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorString) {
    MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString);
    HideMenu(menuTemplate);
    MMU_Open(menuTemplate, menu);
}
function MMU_CallbackHandler(result, contextString) {
    {
        MMU_StopPendingTimerEventsFromCallback();
        var context = new ParseContext(contextString);
        var menuTemplate = document.getElementById(context.TemplateClientId);

        if (menuTemplate == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var menu = document.getElementById(context.MenuClientId);

        if (menu == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var disabledIds = "";
        var hiddenIds = "";
        var checkedIds = "";
        var tokensAndValues = "";
        var menuItemsHtml = "";
        var parts = result.split(MMU_chDelim);

        if (parts == null || parts.length != 5) {
            if (typeof MMU_GenerateErrorMenuItem != "undefined")
                menuItemsHtml = MMU_GenerateErrorMenuItem(Strings.STS.L_Loading_Error_Text);
        }
        else {
            var re = new RegExp(MMU_chDelimEnc, "g");

            disabledIds = parts[0].replace(re, MMU_chDelim);
            hiddenIds = parts[1].replace(re, MMU_chDelim);
            checkedIds = parts[2].replace(re, MMU_chDelim);
            tokensAndValues = parts[3].replace(re, MMU_chDelim);
            menuItemsHtml = parts[4].replace(re, MMU_chDelim);
        }
        menu.setAttribute("menuItemsDisabled", disabledIds);
        menu.setAttribute("menuItemsHidden", hiddenIds);
        menu.setAttribute("menuItemsChecked", checkedIds);
        menu.setAttribute("menuTokenValues", tokensAndValues);
        MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
        menuTemplate.innerHTML = menuTemplate.innerHTML + menuItemsHtml;
        HideMenu(menuTemplate);
        MMU_Open(menuTemplate, menu);
        menu.setAttribute("callbackInProgress", "");
    }
}
function MMU_CallbackErrHandler(result, contextString) {
    try {
        alert(Strings.STS.L_Loading_Error_Text);
        var context = new ParseContext(contextString);
        var menuTemplate = document.getElementById(context.TemplateClientId);

        if (menuTemplate == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        var menu = document.getElementById(context.MenuClientId);

        if (menu == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return;
        }
        menu.setAttribute("callbackInProgress", "");
        var errorMessage = Strings.STS.L_Loading_Error_Text;

        if (result == "timeout" && context.TimeoutMessage != null && context.TimeoutMessage.length > 0) {
            errorMessage = context.TimeoutMessage;
        }
        MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorMessage);
        ;
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text);
    }
}
function combineDocuments(strProgID, strTemplate, strSaveLocation) {
    fNewDoc = false;
    var i;

    if (browseris.w3c && !browseris.ie)
        document.all = document.getElementsByTagName("*");
    var fSelectionError = true;
    var strTemplateUrl;
    var strProgID2;

    try {
        var chkCombines = document.all['chkCombine'];
        var chkUrls = document.all['chkUrl'];
        var chkProgIDs = document.all['chkProgID'];

        if (undefined != chkCombines) {
            var chkCombineCollection = chkCombines;
            var chkUrlCollection = chkUrls;
            var chkProgIDCollection = chkProgIDs;

            if (typeof chkCombineCollection.length != "undefined") {
                for (i = 0; fSelectionError && i < chkCombineCollection.length; i++) {
                    if (chkCombineCollection[i].checked) {
                        fSelectionError = false;
                        strTemplateUrl = chkUrlCollection[i].getAttribute("href");
                        strProgID2 = chkProgIDCollection[i].getAttribute("href");
                    }
                }
            }
            else {
                var chkCombine = chkCombines;

                if (fSelectionError && null != chkCombine) {
                    var chkUrl = chkUrls;
                    var chkProgID = chkProgIDs;

                    fSelectionError = false;
                    strTemplateUrl = chkUrl.getAttribute("href");
                    strProgID2 = chkProgID.getAttribute("href");
                }
            }
        }
    }
    catch (ex) { }
    if (!fSelectionError) {
        var bSuccess = false;
        var NewDocumentButton;

        try {
            NewDocumentButton = new ActiveXObject(strProgID2);
            fNewDoc = NewDocumentButton != null;
        }
        catch (ex) { }
        if (!fNewDoc)
            alert(Strings.STS.L_NewFormLibTb3_Text);
        else {
            try {
                bSuccess = typeof NewDocumentButton.MergeDocuments != "undefined" && NewDocumentButton.MergeDocuments(strTemplateUrl, document.all['chkCombine'], makeAbsUrl(strSaveLocation));
            }
            catch (e) { }
            if (!bSuccess)
                alert(Strings.STS.L_NewFormLibTb3_Text);
            else
                window.onfocus = RefreshOnFocus;
        }
    }
    else {
        alert(Strings.STS.L_NewFormLibTb4_Text);
    }
}
function repairLinks(strRootFolder, strList, strVDir) {
    if (browseris.w3c && !browseris.ie)
        document.all = document.getElementsByTagName("*");
    var cntChecked = 0;
    var inputSubmitRepairDocs = document.all['SubmitRepairDocs'];

    inputSubmitRepairDocs.value = "";
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].id == 'chkRepair') {
            if (inputs[i].checked) {
                inputSubmitRepairDocs.value += inputs[i].getAttribute('docID');
                inputSubmitRepairDocs.value += " ";
                cntChecked++;
            }
        }
    }
    if (cntChecked > 0 && cntChecked <= 500) {
        var input = document.all['SubmitRepairRedirectList'];

        input.value = strList;
        input = document.all['SubmitRepairRedirectFolder'];
        input.value = strRootFolder;
        var form = document.all['SubmitRepairDocsForm'];

        form.action = strVDir + "/submitrepair.aspx";
        form.submit();
    }
    else
        alert(cntChecked == 0 ? Strings.STS.L_NewFormLibTb5_Text : Strings.STS.L_NewFormLibTb6_Text);
}
function repairAllLinks(strRootFolder, strList, strVDir) {
    if (browseris.w3c && !browseris.ie)
        document.all = document.getElementsByTagName("*");
    var input = document.all['SubmitRepairDocs'];

    input.value = "*";
    input = document.all['SubmitRepairRedirectList'];
    input.value = strList;
    input = document.all['SubmitRepairRedirectFolder'];
    input.value = strRootFolder;
    var form = document.all['SubmitRepairDocsForm'];

    form.action = strVDir + "/submitrepair.aspx";
    form.submit();
}
function NavigateToManageCopiesPage(strHttpRoot, strFileRef) {
    STSNavigate(strHttpRoot + "/_layouts/15/managecopies.aspx?ItemUrl=" + strFileRef + "&Source=" + GetSource());
}
function AddVersionMenuItemsCore(m, ctxArg) {
    if (currentItemID != null) {
        var strCurrentItemID = currentItemID;

        if (strCurrentItemID.indexOf(".0.") >= 0)
            return;
    }
    if (!HasRights(0x0, 0x40))
        return;
    var menuOption;
    var IsCurrent = itemTable.getAttribute("isCur");
    var iLevel = itemTable.getAttribute("Level");
    var canViewProperty = itemTable.getAttribute("canViewProperty");

    if (currentItemFSObjType == null)
        currentItemFSObjType = String(parseInt(GetAttributeFromItemTable(itemTable, "OType", "FSObjType")));
    if (canViewProperty != "0") {
        menuOption = CAMOpt(m, Strings.STS.L_ViewVersion_Text, "javascript:ViewVersion()", "");
        menuOption.id = "ID_ViewVersion";
    }
    if (HasRights(0x0, 0x4)) {
        menuOption = CAMOpt(m, Strings.STS.L_RestoreVersion_Text, "javascript:RestoreVersion()", "");
        menuOption.id = "ID_RestoreVersion";
    }
    if (HasRights(0x0, 0x80) && IsCurrent != "1") {
        menuOption = CAMOpt(m, Strings.STS.L_DeleteVersion_Text, "javascript:DeleteVersion()", "");
        menuOption.id = "ID_DeleteVersion";
    }
    if (HasRights(0x0, 0x10) && HasRights(0x0, 0x4)) {
        if ((ctxArg.isModerated || ctxArg.EnableMinorVersions) && currentItemFSObjType != "1" && (iLevel == String(1) && IsCurrent == "1")) {
            var menustring = Strings.STS.L_DenyVersion_Text;

            if (ctxArg.EnableMinorVersions)
                menustring = Strings.STS.L_UnPublishVersion_Text;
            menuOption = CAMOpt(m, menustring, "javascript:TakeOfflineVersion()", "");
            menuOption.id = "ID_TakeOfflineVersion";
        }
    }
}
function ViewVersion() {
    if (!IsContextSet())
        return;
    STSNavigate(itemTable.getAttribute("verUrl"));
}
function RestoreVersion() {
    if (!IsContextSet())
        return;
    var ctxVar = currentCtx;

    if (itemTable.getAttribute("isMostCur") != "0") {
        alert(Strings.STS.L_Version_NoRestore_Current_ERR);
    }
    else {
        var path = ctxVar.HttpPath + "&op=Restore&ver=" + itemTable.getAttribute("verId");

        if (confirm(Boolean(ctxVar.verEnabled) ? Strings.STS.L_Version_Restore_Confirm_Text : Strings.STS.L_Version_RestoreVersioningOff_Confirm_Text)) {
            if (null != window.frameElement && typeof window.frameElement.overrideDialogResult != "undefined")
                window.frameElement.overrideDialogResult(1);
            SubmitFormPost(path);
        }
    }
}
function TakeOfflineVersion() {
    if (!IsContextSet())
        return;
    var ctxVar = currentCtx;
    var confrimstr = Strings.STS.L_Version_deny_Confirm_Text;

    if (ctxVar.EnableMinorVersions)
        confrimstr = Strings.STS.L_Version_unpublish_Confirm_Text;
    if (itemTable.getAttribute("isCur") != "1" || itemTable.getAttribute("Level") != String(1)) {
        alert(Strings.STS.L_Version_NoOffline_NonCurrent_ERR);
    }
    else if (confirm(confrimstr)) {
        SubmitFormPost(ctxVar.HttpPath + "&op=TakeOffline");
    }
}
function DeleteVersion() {
    if (!IsContextSet())
        return;
    var ctxVar = currentCtx;

    if (itemTable.getAttribute("isCur") != "0") {
        alert(Strings.STS.L_Version_NoDelete_Current_ERR);
    }
    else {
        var path = ctxVar.HttpPath + "&op=Delete&ver=" + itemTable.getAttribute("verId");

        if (confirm(ctxVar.RecycleBinEnabled ? Strings.STS.L_Version_Recycle_Confirm_Text : Strings.STS.L_Version_Delete_Confirm_Text)) {
            SubmitFormPost(path);
        }
    }
}
function DeleteAllVersions(nVers, ctxArg) {
    if (nVers <= 1) {
        alert(Strings.STS.L_Version_NoDeleteAll_None_ERR);
    }
    else {
        if (confirm(ctxArg.RecycleBinEnabled ? Strings.STS.L_Version_RecycleAll_Confirm_Text : Strings.STS.L_Version_DeleteAll_Confirm_Text)) {
            SubmitFormPost(ctxArg.HttpPath + "&op=DeleteAll");
        }
    }
}
function DeleteAllMinorVersions(nVers, ctxArg) {
    if (nVers <= 1) {
        alert(Strings.STS.L_Version_NoDeleteAll_None_ERR);
    }
    else if (confirm(ctxArg.RecycleBinEnabled ? Strings.STS.L_Version_RecycleAllMinor_Confirm_Text : Strings.STS.L_Version_DeleteAllMinor_Confirm_Text)) {
        SubmitFormPost(ctxArg.HttpPath + "&op=DeleteAllMinor");
    }
}
function GetServerRelativeUrlFromURL(pageUrl) {
    var serverURL;
    var slashSlash = pageUrl.indexOf('//');

    if (-1 != slashSlash) {
        var pathStart = pageUrl.indexOf('/', slashSlash + 2);

        if (-1 != pathStart) {
            serverURL = pageUrl.substr(pathStart);
        }
        else {
            serverURL = "/";
        }
    }
    else {
        serverURL = pageUrl;
    }
    return serverURL;
}
function GetTargetHandler(targetLocalPath) {
    if (null == targetLocalPath)
        return "";
    var targetLen = targetLocalPath.length;

    if (0 == targetLen || '/' != targetLocalPath[0])
        return "";
    var startQuery = targetLocalPath.indexOf('?');
    var startAnchor = targetLocalPath.indexOf('#');

    if (-1 == startQuery)
        startQuery = targetLen;
    if (-1 == startAnchor)
        startAnchor = targetLen;
    return targetLocalPath.substr(0, Math.min(startQuery, startAnchor));
}
var _spFullDownloadList;

function IsFailoverTarget(targetLocalPath) {
    var leafStart = targetLocalPath.lastIndexOf('/');

    if (-1 != leafStart) {
        var leafName = targetLocalPath.substr(leafStart + 1);

        if (0 != leafName.length) {
            var extStart = leafName.lastIndexOf('.');

            if (-1 == extStart) {
                return false;
            }
            var extension = leafName.substr(extStart + 1);

            if ("aspx" != extension.toLowerCase()) {
                return true;
            }
            var fileName = (leafName.substr(0, extStart)).toLowerCase();

            if (Boolean(_spFullDownloadList) && Array.contains(_spFullDownloadList, fileName)) {
                return true;
            }
        }
    }
    return false;
}
function GetQuery(targetLocalPath) {
    var query = (new URI(targetLocalPath, {
        disableEncodingDecodingForLegacyCode: true
    })).getQuery();

    return query;
}
function IsFailoverQuery(queryIn) {
    queryIn = queryIn.toLowerCase();
    if (queryIn.indexOf("wikipagemode=edit") != -1)
        return true;
    if (queryIn.indexOf("usemds=false") != -1)
        return true;
    return false;
}
function SPUpdatePage(pageUrl) {
    if ("undefined" == typeof g_MinimalDownload || !g_MinimalDownload || IsAccessibilityFeatureEnabled())
        return true;
    pageUrl = GetAbsoluteUrl(pageUrl);
    if (browseris.ie && browseris.iever < 10) {
        var idxQ = pageUrl.indexOf("?");

        if (-1 == idxQ) {
            idxQ = pageUrl.length;
        }
        var idxH = pageUrl.indexOf("#");

        if (-1 == idxH) {
            idxH = pageUrl.length;
        }
        var idx = Math.min(idxQ, idxH);

        pageUrl = encodeURI(decodeURI(pageUrl.substr(0, idx))) + pageUrl.substr(idx);
    }
    var fReturn = true;
    var urlTail = "/_layouts/15/start.aspx";
    var urlTailLength = urlTail.length;
    var pathname = window.location.pathname;
    var pathLength = pathname.length;
    var hash1Start = pageUrl.indexOf('#');

    if (-1 != hash1Start) {
        var startPagePos = ((pageUrl.substr(0, hash1Start)).toLowerCase()).indexOf("/_layouts/15/start.aspx");

        if (-1 != startPagePos) {
            if (pageUrl.length > hash1Start + 2 && '/' == pageUrl[hash1Start + 1]) {
                if (pageUrl.length > hash1Start + 3 && '/' == pageUrl[hash1Start + 2]) {
                    pageUrl = pageUrl.substr(hash1Start + 2);
                }
                else {
                    pageUrl = pageUrl.substr(0, startPagePos) + pageUrl.substr(hash1Start + 1);
                }
            }
        }
    }
    if (pathLength >= urlTailLength && urlTail == pathname.substr(pathLength - urlTailLength)) {
        if (pageUrl.charAt(0) == '/') {
            if (!IsFailoverTarget(GetTargetHandler(pageUrl))) {
                ajaxNavigate.update(pageUrl);
                fReturn = false;
            }
        }
        else {
            if (pageUrl.indexOf('/') == -1) {
                var currentUrl = ajaxNavigate.get_href();
                var idxQuery = currentUrl.indexOf('?');

                if (idxQuery != -1)
                    currentUrl = currentUrl.substr(0, idxQuery);
                var idxLastSlash = currentUrl.lastIndexOf('/');

                if (idxLastSlash != -1)
                    pageUrl = currentUrl.substr(0, idxLastSlash + 1) + pageUrl;
            }
            var slashSlash = pageUrl.indexOf('//');

            if (-1 != slashSlash) {
                var pathStart = pageUrl.indexOf('/', slashSlash + 2);

                if (-1 != pathStart) {
                    var pageUrlHostName = pageUrl.substr(slashSlash + 2, pathStart - (slashSlash + 2));
                    var pageUrlPort = '';
                    var portStart = pageUrlHostName.indexOf(':');

                    if (-1 != portStart) {
                        pageUrlPort = pageUrlHostName.substr(portStart + 1);
                        if (pageUrlPort == '80')
                            pageUrlPort = '';
                        pageUrlHostName = pageUrlHostName.substr(0, portStart);
                    }
                    if (window.location.hostname == pageUrlHostName && window.location.port == pageUrlPort) {
                        if (!IsFailoverTarget(GetTargetHandler(pageUrl.substr(pathStart)))) {
                            ajaxNavigate.update(pageUrl.substr(pathStart));
                            fReturn = false;
                        }
                    }
                }
                else {
                    if (window.location.hostname == pageUrl.substr(slashSlash + 2)) {
                        ajaxNavigate.update("");
                        fReturn = false;
                    }
                }
            }
            else {
                fReturn = true;
            }
        }
    }
    else {
        if ("undefined" !== typeof g_WebServerRelativeUrl) {
            var a = document.createElement('a');

            a.href = pageUrl;
            pageUrl = a.href;
            a.href = g_WebServerRelativeUrl;
            var webServerRelativeUrl = a.href;

            if (pageUrl.length >= webServerRelativeUrl.length && webServerRelativeUrl.toLowerCase() == (pageUrl.substr(0, webServerRelativeUrl.length)).toLowerCase()) {
                var destUrl = webServerRelativeUrl;

                if ('/' == destUrl[destUrl.length - 1]) {
                    destUrl += "/_layouts/15/start.aspx".substr(1);
                }
                else {
                    destUrl += "/_layouts/15/start.aspx";
                }
                if (!IsFailoverTarget(GetTargetHandler(GetServerRelativeUrlFromURL(pageUrl)))) {
                    destUrl += "#/" + GetServerRelativeUrlFromURL(pageUrl);
                    window.location.href = destUrl;
                    fReturn = false;
                }
            }
        }
    }
    if (!fReturn) {
        g_MDNav = false;
        var curEvent = window.event;

        if (curEvent != null) {
            cancelDefault(curEvent);
        }
    }
    return fReturn;
}
function _AddSilverlightWebPart(item, zoneNum, zoneIndex) {
    var popup = new _AddSilverlightWebPartPopupUI(item, zoneNum, zoneIndex);

    popup.show();
}
function _AddSilverlightWebPartPopupUI_InitializePrototype() {
    _AddSilverlightWebPartPopupUI.prototype.item = undefined;
    _AddSilverlightWebPartPopupUI.prototype.zoneNum = undefined;
    _AddSilverlightWebPartPopupUI.prototype.zoneIndex = undefined;
    _AddSilverlightWebPartPopupUI.prototype.show = _AddSilverlightWebPartPopupUI_show;
    _AddSilverlightWebPartPopupUI.prototype.dialogCallback = _AddSilverlightWebPartPopupUI_dialogCallback;
}
function _AddSilverlightWebPartPopupUI(item, zoneNum, zoneIndex) {
    this.item = item;
    this.zoneNum = zoneNum;
    this.zoneIndex = zoneIndex;
}
function _AddSilverlightWebPartPopupUI_show() {
    var thisObj = this;
    var fn = function() {
        var options = new Object();

        if (typeof _spExternalApplicationRegistrationInformation != "undefined") {
            if (typeof _spExternalApplicationRegistrationInformation.dialogUrl != "undefined")
                options['url'] = _spExternalApplicationRegistrationInformation.dialogUrl;
            if (typeof _spExternalApplicationRegistrationInformation.dialogWidth != "undefined")
                options['width'] = _spExternalApplicationRegistrationInformation.dialogWidth;
            if (typeof _spExternalApplicationRegistrationInformation.dialogHeight != "undefined")
                options['height'] = _spExternalApplicationRegistrationInformation.dialogHeight;
        }
        options['dialogReturnValueCallback'] = Function.createDelegate(thisObj, thisObj.dialogCallback);
        SP.UI.ModalDialog.showModalDialog(options);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function _AddSilverlightWebPartPopupUI_dialogCallback(dialogResult, returnValue) {
    if (dialogResult == 1) {
        var hid = WPAdder._getHiddenField('wpVal');

        if (null != hid) {
            hid.value = returnValue['applicationXml'];
            if (null == hid.value);
            {
                hid.value = returnValue['url'];
            }
        }
        WPAdder.addItemToPage(this.item, this.zoneNum, this.zoneIndex);
    }
}
function _ConfigSilverlightWebpart(urlElementId, appXmlElementId, dialogUrl, width, height) {
    var popup = new _ConfigSilverlightWebpartPopupUI(urlElementId, appXmlElementId, dialogUrl, width, height);

    popup.show();
}
function _ConfigSilverlightWebpartPopupUI_InitializePrototype() {
    _ConfigSilverlightWebpartPopupUI.prototype.urlElementId = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.appXmlElementId = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogUrl = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogWidth = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogHeight = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.show = _ConfigSilverlightWebpartPopupUI_show;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogCallback = _ConfigSilverlightWebpartPopupUI_dialogCallback;
}
function _ConfigSilverlightWebpartPopupUI(urlElementId, appXmlElementId, dialogUrl, width, height) {
    this.urlElementId = urlElementId;
    this.appXmlElementId = appXmlElementId;
    this.dialogUrl = dialogUrl;
    this.dialogWidth = width;
    this.dialogHeight = height;
}
function _ConfigSilverlightWebpartPopupUI_show() {
    var thisObj = this;
    var fn = function() {
        var options = new Object();

        options.url = thisObj.dialogUrl;
        options.width = thisObj.dialogWidth;
        options.height = thisObj.dialogHeight;
        var args = new Object();

        args.url = (document.getElementById(thisObj.urlElementId)).value;
        args.applicationXml = (document.getElementById(thisObj.appXmlElementId)).value;
        options.args = args;
        options.dialogReturnValueCallback = Function.createDelegate(thisObj, thisObj.dialogCallback);
        SP.UI.ModalDialog.showModalDialog(options);
    };
    var defd;

    try {
        defd = typeof SP.UI.ModalDialog.showModalDialog;
    }
    catch (e) {
        defd = "undefined";
    }
    EnsureScript("SP.js", defd, fn);
}
function _ConfigSilverlightWebpartPopupUI_dialogCallback(dialogResult, returnValue) {
    if (dialogResult == 1) {
        var hid = document.getElementById(this.urlElementId);

        if (null != hid) {
            hid.value = returnValue['url'];
            if (hid.value == null) {
                hid.value = '';
            }
        }
        hid = document.getElementById(this.appXmlElementId);
        if (null != hid) {
            hid.value = returnValue['applicationXml'];
            if (hid.value == null) {
                hid.value = '';
            }
        }
    }
}
function LaunchApp(appInstanceId, appOAuthId, launchUrl, dialogOptions, isTenantApp) {
    return LaunchAppInternal(appInstanceId, appOAuthId, launchUrl, dialogOptions, isTenantApp);
}
var _launchNotificationId;

function LaunchAppInternal(appInstanceId, appOAuthId, launchUrl, dialogOptions, isTenantApp) {
    var siteRelUrl = _spPageContextInfo.webServerRelativeUrl == "/" ? "" : _spPageContextInfo.webServerRelativeUrl;
    var finalLaunchUrl = escapeUrlForCallback(siteRelUrl) + "/" + "_layouts/15/appredirect.aspx";

    if (typeof appOAuthId != "undefined" && appOAuthId != null && typeof launchUrl != "undefined" && launchUrl != null) {
        finalLaunchUrl += "?client_id=" + escapeProperly(appOAuthId) + "&redirect_uri=" + escapeProperly(launchUrl);
    }
    else if (typeof appInstanceId != "undefined" && appInstanceId != null) {
        finalLaunchUrl += "?instance_id=" + escapeProperly(appInstanceId);
    }
    else {
        throw "appOAuthId, launchUrl, appInstanceId are null";
    }
    if (isTenantApp) {
        finalLaunchUrl += "&tsapp=1";
    }
    if (typeof dialogOptions != "undefined" && dialogOptions != null) {
        SetupAndOpenDialogForCustomAction(finalLaunchUrl, dialogOptions["width"], dialogOptions["height"], dialogOptions["title"]);
    }
    else {
        window.location.href = finalLaunchUrl;
    }
}
var _tenantAppData;

function GetTenantAppData() {
    var siteRelUrl = _spPageContextInfo.webServerRelativeUrl == "/" ? "" : _spPageContextInfo.webServerRelativeUrl;

    if (_tenantAppData != null) {
        return _tenantAppData;
    }
    if (_spPageContextInfo.tenantAppVersion == "none") {
        _tenantAppData = {
            isCorpSite: false,
            apps: []
        };
        return _tenantAppData;
    }
    var req = new XMLHttpRequest();

    req.open("GET", escapeUrlForCallback(siteRelUrl) + "/" + "_layouts/15/tenantappinfo.ashx" + "?etag=" + escapeProperly(String(_spPageContextInfo.tenantAppVersion)) + "&lcid=" + escapeProperly("" + String(_spPageContextInfo.currentLanguage)), false);
    req.send("");
    if (req.status < 400 && (req.getResponseHeader("Content-Type")).indexOf("application/json") != -1) {
        try {
            _tenantAppData = JSON.parse(req.responseText);
        }
        catch (e) { }
    }
    return _tenantAppData;
}
$_global_core();
