Type.registerNamespace('CUI');
Type.registerNamespace('CUI.Page');
if (typeof CUI.Page.PageComponent == "undefined") {
    CUI.Page.ICommandHandler = function() {
    };
    CUI.Page.ICommandHandler.registerInterface('CUI.Page.ICommandHandler');
    CUI.Page.PageComponent = function() {
    };
    CUI.Page.PageComponent.prototype = {
        init: function() {
        },
        getGlobalCommands: function() {
            return null;
        },
        getFocusedCommands: function() {
            return null;
        },
        handleCommand: function(commandId, properties, sequence) {
            return false;
        },
        canHandleCommand: function(commandId) {
            return false;
        },
        isFocusable: function() {
            return false;
        },
        receiveFocus: function() {
            return false;
        },
        yieldFocus: function() {
            return true;
        },
        getId: function() {
            return 'PageComponent';
        }
    };
    CUI.Page.PageComponent.registerClass('CUI.Page.PageComponent', null, CUI.Page.ICommandHandler);
}
function AddItemsToTimeline(itemsToAdd, listId, viewName) {
    if (!itemsToAdd || !itemsToAdd.length || itemsToAdd.length == 0) {
        return;
    }
    RunOperationOnTimelineData(function() {
        SP.UI.Timeline.ListTimelineDatasource.AddItemsToTimeline(listId, viewName, itemsToAdd);
    });
}
function GetTimelineView(propertyBag, fnCallback) {
    RunOperationOnTimelineData(function() {
        fnCallback(SP.UI.Timeline.ListTimelineDatasource.GetSelectedViewName(propertyBag));
    });
}
function RunOperationOnTimelineData(fnRunWithData) {
    fnRunWithData();
}
function RemoveItemsFromTimeline(itemsToRemove, listId, viewName) {
    if (!itemsToRemove || !itemsToRemove.length || itemsToRemove.length == 0) {
        return;
    }
    RunOperationOnTimelineData(function() {
        SP.UI.Timeline.ListTimelineDatasource.RemoveItemsFromTimeline(listId, viewName, itemsToRemove);
    });
}
Type.registerNamespace('SP.UI');
SP.UI.TaskListItem = function SP_UI_TaskListItem() {
};
SP.UI.TaskListItem.prototype = {
    $2H_0: null,
    get_taskId: function SP_UI_TaskListItem$get_taskId() {
        return this.$2H_0;
    },
    set_taskId: function SP_UI_TaskListItem$set_taskId(value) {
        this.$2H_0 = value;
        return value;
    },
    $39_0: null,
    get_taskName: function SP_UI_TaskListItem$get_taskName() {
        return this.$39_0;
    },
    set_taskName: function SP_UI_TaskListItem$set_taskName(value) {
        this.$39_0 = value;
        return value;
    },
    $2u_0: null,
    get_editUrl: function SP_UI_TaskListItem$get_editUrl() {
        return this.$2u_0;
    },
    set_editUrl: function SP_UI_TaskListItem$set_editUrl(value) {
        this.$2u_0 = value;
        return value;
    },
    $1R_0: null,
    get_filterUid: function SP_UI_TaskListItem$get_filterUid() {
        return this.$1R_0;
    },
    set_filterUid: function SP_UI_TaskListItem$set_filterUid(value) {
        this.$1R_0 = value;
        return value;
    },
    $37_0: null,
    get_taskBegin: function SP_UI_TaskListItem$get_taskBegin() {
        return this.$37_0;
    },
    set_taskBegin: function SP_UI_TaskListItem$set_taskBegin(value) {
        this.$37_0 = value;
        return value;
    },
    $38_0: null,
    get_taskEnd: function SP_UI_TaskListItem$get_taskEnd() {
        return this.$38_0;
    },
    set_taskEnd: function SP_UI_TaskListItem$set_taskEnd(value) {
        this.$38_0 = value;
        return value;
    },
    $30_0: null,
    get_navigationHandler: function SP_UI_TaskListItem$get_navigationHandler() {
        return this.$30_0;
    },
    set_navigationHandler: function SP_UI_TaskListItem$set_navigationHandler(value) {
        this.$30_0 = value;
        return value;
    },
    $3C_0: null,
    get_toolTipContentsRetriever: function SP_UI_TaskListItem$get_toolTipContentsRetriever() {
        return this.$3C_0;
    },
    set_toolTipContentsRetriever: function SP_UI_TaskListItem$set_toolTipContentsRetriever(value) {
        this.$3C_0 = value;
        return value;
    }
};
SP.UI.OfficeVersion = function SP_UI_OfficeVersion() {
};
Type.registerNamespace('SP.Timeline.InstrumentedApi');
SP.Timeline.InstrumentedApi.IJsApiImpl = function() {
};
SP.Timeline.InstrumentedApi.IJsApiImpl.registerInterface('SP.Timeline.InstrumentedApi.IJsApiImpl');
SP.Timeline.InstrumentedApi.IJsApi = function() {
};
SP.Timeline.InstrumentedApi.IJsApi.registerInterface('SP.Timeline.InstrumentedApi.IJsApi');
SP.Timeline.InstrumentedApi.ITimelineImpl = function() {
};
SP.Timeline.InstrumentedApi.ITimelineImpl.registerInterface('SP.Timeline.InstrumentedApi.ITimelineImpl');
SP.Timeline.InstrumentedApi.ITimeline = function() {
};
SP.Timeline.InstrumentedApi.ITimeline.registerInterface('SP.Timeline.InstrumentedApi.ITimeline');
SP.Timeline.InstrumentedApi.JsApiUtils = function SP_Timeline_InstrumentedApi_JsApiUtils() {
};
SP.Timeline.InstrumentedApi.JsApiUtils.executeWithJsApiLoaded = function SP_Timeline_InstrumentedApi_JsApiUtils$executeWithJsApiLoaded(toCallback) {
    SP.Timeline.InstrumentedApi.ExecuteWithJsApiLoaded(function() {
        toCallback();
    });
    ;
};
SP.Timeline.InstrumentedApi.JsApiUtils.notifyStateUpdated = function SP_Timeline_InstrumentedApi_JsApiUtils$notifyStateUpdated(underlyingObject) {
    window.JsApi != null && window.JsApi.ExtensibilityManager != null && JsApi.ExtensibilityManager.NotifyStateUpdated(underlyingObject);
    ;
};
SP.Timeline.InstrumentedApi.JsApiUtils.addListener = function SP_Timeline_InstrumentedApi_JsApiUtils$addListener(fnListener) {
    var $v_0 = function() {
        JsApi.ExtensibilityManager.AddListener('SP.Timeline.InstrumentedApi', fnListener);
        ;
    };

    SP.Timeline.InstrumentedApi.JsApiUtils.executeWithJsApiLoaded($v_0);
};
SP.Timeline.InstrumentedApi.JsApiUtils.createCallbackAggregator = function SP_Timeline_InstrumentedApi_JsApiUtils$createCallbackAggregator(baseCallback, expectedCallbackCount) {
    var $v_0 = null;

    if (baseCallback) {
        var $v_1 = 0;
        var $v_2 = true;

        $v_0 = function($p1_0) {
            $v_2 = $v_2 && $p1_0;
            $v_1++;
            if ($v_1 === expectedCallbackCount) {
                baseCallback($v_2);
            }
        };
    }
    return $v_0;
};
Type.registerNamespace('SP.UI.Timeline');
SP.UI.Timeline.ResizeStartsFrom = function() {
};
SP.UI.Timeline.ResizeStartsFrom.prototype = {
    top: 0,
    bottom: 1
};
SP.UI.Timeline.ResizeStartsFrom.registerEnum('SP.UI.Timeline.ResizeStartsFrom', false);
SP.UI.Timeline.ITimelineConnectable = function() {
};
SP.UI.Timeline.ITimelineConnectable.registerInterface('SP.UI.Timeline.ITimelineConnectable');
SP.UI.Timeline.IGraphicsRenderer = function() {
};
SP.UI.Timeline.IGraphicsRenderer.registerInterface('SP.UI.Timeline.IGraphicsRenderer');
SP.UI.Timeline.ISelectableElement = function() {
};
SP.UI.Timeline.ISelectableElement.registerInterface('SP.UI.Timeline.ISelectableElement');
SP.UI.Timeline.MajorPosition = function() {
};
SP.UI.Timeline.MajorPosition.prototype = {
    mainBar: -2,
    aboveMainBar: -1,
    onMainBar: 0,
    belowMainBar: 1
};
SP.UI.Timeline.MajorPosition.registerEnum('SP.UI.Timeline.MajorPosition', false);
SP.UI.Timeline.IVisibleElement = function() {
};
SP.UI.Timeline.IVisibleElement.registerInterface('SP.UI.Timeline.IVisibleElement');
SP.UI.Timeline.ISaveChanges = function() {
};
SP.UI.Timeline.ISaveChanges.registerInterface('SP.UI.Timeline.ISaveChanges');
SP.UI.Timeline.TimelineElementItem = function SP_UI_Timeline_TimelineElementItem() {
    var $$t_1 = this;

    this.navigationHandler = function($p1_0) {
        window.location.href = $p1_0;
    };
    this.launchDialog = null;
};
SP.UI.Timeline.ItemType = function() {
};
SP.UI.Timeline.ItemType.prototype = {
    barElement: 0,
    calloutElement: 1,
    milestoneElement: 2,
    mainArea: 3,
    timescale: 4,
    todayMarker: 5,
    other: 6
};
SP.UI.Timeline.ItemType.registerEnum('SP.UI.Timeline.ItemType', false);
SP.UI.Timeline.IElementCollection = function() {
};
SP.UI.Timeline.IElementCollection.registerInterface('SP.UI.Timeline.IElementCollection');
SP.UI.Timeline.BarElementSet = function SP_UI_Timeline_BarElementSet() {
    this.$2x_0 = -1;
};
SP.UI.Timeline.BarElementSet.$8k = function SP_UI_Timeline_BarElementSet$$8k($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;

    if ($v_0.get_itemStartTime() > $v_1.get_itemStartTime()) {
        return 1;
    }
    if ($v_0.get_itemStartTime() < $v_1.get_itemStartTime()) {
        return -1;
    }
    return 0;
};
SP.UI.Timeline.BarElementSet.$8j = function SP_UI_Timeline_BarElementSet$$8j($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;

    if ($v_0.get_itemEndTime() > $v_1.get_itemEndTime()) {
        return 1;
    }
    if ($v_0.get_itemEndTime() < $v_1.get_itemEndTime()) {
        return -1;
    }
    return 0;
};
SP.UI.Timeline.BarElementSet.$66 = function SP_UI_Timeline_BarElementSet$$66($p0, $p1) {
    return $p0.get_itemStartTime() >= $p1.get_itemEndTime() || $p0.get_itemEndTime() <= $p1.get_itemStartTime();
};
SP.UI.Timeline.BarElementSet.$8L = function SP_UI_Timeline_BarElementSet$$8L($p0, $p1, $p2) {
    for (var $v_0 = 0; $v_0 < $p2.length; $v_0++) {
        $p2[$v_0] = null;
    }
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];

        if ($v_2 === $p1) {
            continue;
        }
        var $v_3 = $v_2.fixedChannel;

        if ($v_3 === SP.UI.Timeline.BarElement.unsetChannel) {
            continue;
        }
        if ($p2[$v_3]) {
            continue;
        }
        if (SP.UI.Timeline.BarElementSet.$66($v_2, $p1)) {
            continue;
        }
        $p2[$v_3] = $v_2;
    }
};
SP.UI.Timeline.BarElementSet.prototype = {
    $7_0: null,
    $2x_0: 0,
    serialize: function SP_UI_Timeline_BarElementSet$serialize() {
        var $v_0 = [];

        for (var $v_3 = 0; $v_3 < (this.get_$T_0()).length; $v_3++) {
            Array.add($v_0, (this.get_item($v_3)).serialize());
        }
        var $v_1 = $v_0.join('');
        var $v_2 = String.format('<{0}>{1}</{0}>', 'tskSet', $v_1);

        return $v_2;
    },
    get_$T_0: function SP_UI_Timeline_BarElementSet$get_$T_0() {
        if (!this.$7_0) {
            this.$7_0 = [];
        }
        return this.$7_0;
    },
    get_item: function SP_UI_Timeline_BarElementSet$get_item(index) {
        return this.$7_0[index];
    },
    set_item: function SP_UI_Timeline_BarElementSet$set_item(index, value) {
        this.$7_0[index] = value;
        return value;
    },
    getAt: function SP_UI_Timeline_BarElementSet$getAt(index) {
        return this.get_item(index);
    },
    get_length: function SP_UI_Timeline_BarElementSet$get_length() {
        return (this.get_$T_0()).length;
    },
    get_channelCount: function SP_UI_Timeline_BarElementSet$get_channelCount() {
        return this.$2x_0;
    },
    organizeIntoChannels: function SP_UI_Timeline_BarElementSet$organizeIntoChannels() {
        for (var $v_7 = 0; $v_7 < (this.get_$T_0()).length; $v_7++) {
            var $v_8 = this.get_item($v_7);

            $v_8.$U_2 = SP.UI.Timeline.BarElement.unsetChannel;
        }
        var $v_0 = [];

        for (var $v_9 = 0; $v_9 < (this.get_$T_0()).length; $v_9++) {
            var $v_A = this.get_item($v_9);

            if ($v_A.get_shouldShow()) {
                Array.add($v_0, $v_A);
            }
        }
        var $v_1 = Array.clone($v_0);

        $v_0.sort(SP.UI.Timeline.BarElementSet.$8k);
        var $v_2 = 0;

        $v_1.sort(SP.UI.Timeline.BarElementSet.$8j);
        var $v_3 = 0;
        var $v_4 = [];
        var $v_5 = [];
        var $v_6 = [];
        var $v_B = 0;

        for (var $v_C = 0; $v_C < $v_0.length; $v_C++) {
            var $v_D = $v_0[$v_C];
            var $v_E = $v_D.fixedChannel;

            if ($v_E !== SP.UI.Timeline.BarElement.unsetChannel) {
                Array.add($v_6, $v_D);
                $v_B = Math.max($v_B, $v_E);
            }
        }
        for (var $v_F = 0; $v_F <= $v_B; $v_F++) {
            Array.add($v_4, false);
            Array.add($v_5, null);
        }
        while ($v_2 < $v_0.length) {
            var $v_G = $v_0[$v_2];
            var $v_H = $v_1[$v_3];
            var $v_I = !$v_H || $v_G.get_itemStartTime() < $v_H.get_itemEndTime();

            if ($v_I) {
                var $v_J = new Array($v_5.length);

                SP.UI.Timeline.BarElementSet.$8L($v_6, $v_G, $v_J);
                var $v_K = $v_G.fixedChannel === SP.UI.Timeline.BarElement.unsetChannel ? 0 : $v_G.fixedChannel;

                for (; $v_K < $v_5.length; $v_K++) {
                    var $v_L = !$v_5[$v_K] && !$v_J[$v_K];

                    if ($v_L) {
                        $v_5[$v_K] = $v_G;
                        $v_4[$v_K] = true;
                        if ($v_G.fixedChannel !== SP.UI.Timeline.BarElement.unsetChannel && $v_G.fixedChannel !== $v_K) {
                            $v_G.fixedChannel = SP.UI.Timeline.BarElement.unsetChannel;
                        }
                        $v_G.$U_2 = $v_K;
                        break;
                    }
                }
                if ($v_G.$U_2 === SP.UI.Timeline.BarElement.unsetChannel) {
                    var $v_M = $v_5.length;

                    $v_4[$v_M] = true;
                    $v_5[$v_M] = $v_G;
                    $v_G.$U_2 = $v_M;
                }
                $v_2++;
            }
            else {
                for (var $v_N = 0; $v_N < $v_5.length; $v_N++) {
                    if ($v_5[$v_N] === $v_H) {
                        $v_5[$v_N] = null;
                        break;
                    }
                }
                $v_3++;
            }
        }
        this.$8Z_0($v_4);
    },
    $8Z_0: function SP_UI_Timeline_BarElementSet$$8Z_0($p0) {
        var $v_0 = new Array($p0.length);
        var $v_1 = 0;

        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            if ($p0[$v_2]) {
                $v_0[$v_2] = $v_1;
                $v_1++;
            }
        }
        this.$2x_0 = $v_1;
        if ($v_1 !== $p0.length) {
            for (var $v_3 = 0; $v_3 < (this.get_$T_0()).length; $v_3++) {
                var $v_4 = this.get_item($v_3);
                var $v_5 = $v_4.$U_2;

                if ($v_0[$v_5] !== $v_5) {
                    if ($v_4.fixedChannel !== SP.UI.Timeline.BarElement.unsetChannel) {
                        $v_4.fixedChannel = $v_0[$v_5];
                    }
                    $v_4.$U_2 = $v_0[$v_5];
                }
            }
        }
    },
    $7Z_0: function SP_UI_Timeline_BarElementSet$$7Z_0($p0) {
        for (var $v_0 = 0; $v_0 < this.get_length(); $v_0++) {
            var $v_1 = this.get_item($v_0);

            if (!$v_1.get_isDataBound()) {
                continue;
            }
            if ($v_1 === $p0) {
                continue;
            }
            if ($v_1.fixedChannel !== $p0.fixedChannel) {
                continue;
            }
            if (!SP.UI.Timeline.BarElementSet.$66($p0, $v_1)) {
                $v_1.fixedChannel = -1;
            }
        }
    },
    add: function SP_UI_Timeline_BarElementSet$add(newBarElement) {
        Array.add(this.get_$T_0(), newBarElement);
    },
    createFromDefault: function SP_UI_Timeline_BarElementSet$createFromDefault(uid) {
        return this.$7M_0(uid);
    },
    $7M_0: function SP_UI_Timeline_BarElementSet$$7M_0($p0) {
        var $v_0 = (this.get_item(0)).$4j_2($p0);

        this.add($v_0);
        return $v_0;
    }
};
SP.UI.Timeline.BarPhysical = function SP_UI_Timeline_BarPhysical() {
    this.$2G_1 = -1;
    SP.UI.Timeline.BarPhysical.initializeBase(this);
};
SP.UI.Timeline.BarPhysical.prototype = {
    $k_1: null,
    $41_1: 0,
    getAllElements: function SP_UI_Timeline_BarPhysical$getAllElements() {
        if (this.hasElements()) {
            return [this.$k_1];
        }
        else {
            return null;
        }
    },
    hasElements: function SP_UI_Timeline_BarPhysical$hasElements() {
        return !!this.$k_1;
    },
    clean: function SP_UI_Timeline_BarPhysical$clean() {
        SP.UI.Timeline.PhysicalElements.prototype.clean.call(this);
        this.$k_1 = null;
    }
};
SP.UI.Timeline.CalloutElementSet = function SP_UI_Timeline_CalloutElementSet() {
};
SP.UI.Timeline.CalloutElementSet.prototype = {
    $7_0: null,
    serialize: function SP_UI_Timeline_CalloutElementSet$serialize() {
        var $v_0 = [];

        for (var $v_3 = 0; $v_3 < (this.get_$T_0()).length; $v_3++) {
            Array.add($v_0, (this.get_item($v_3)).serialize());
        }
        var $v_1 = $v_0.join('');
        var $v_2 = String.format('<{0}>{1}</{0}>', 'fltSet', $v_1);

        return $v_2;
    },
    get_$T_0: function SP_UI_Timeline_CalloutElementSet$get_$T_0() {
        if (!this.$7_0) {
            this.$7_0 = [];
        }
        return this.$7_0;
    },
    get_item: function SP_UI_Timeline_CalloutElementSet$get_item(index) {
        return this.$7_0[index];
    },
    set_item: function SP_UI_Timeline_CalloutElementSet$set_item(index, value) {
        this.$7_0[index] = value;
        return value;
    },
    getAt: function SP_UI_Timeline_CalloutElementSet$getAt(index) {
        return this.get_item(index);
    },
    get_length: function SP_UI_Timeline_CalloutElementSet$get_length() {
        return (this.get_$T_0()).length;
    },
    add: function SP_UI_Timeline_CalloutElementSet$add(newCalloutElement) {
        Array.add(this.get_$T_0(), newCalloutElement);
    },
    createFromDefault: function SP_UI_Timeline_CalloutElementSet$createFromDefault(uid) {
        return this.createCalloutFromDefault(uid);
    },
    createCalloutFromDefault: function SP_UI_Timeline_CalloutElementSet$createCalloutFromDefault(uid) {
        var $v_0 = (this.get_item(0)).$4j_2(uid);

        this.add($v_0);
        return $v_0;
    },
    $5k_0: function SP_UI_Timeline_CalloutElementSet$$5k_0($p0, $p1, $p2, $p3, $p4) {
        for (var $v_0 = 0; $v_0 < this.get_length(); $v_0++) {
            var $v_1 = this.get_item($v_0);

            if ($v_1.$12_1 || !$v_1.get_shouldShow()) {
                continue;
            }
            var $v_2;
            var $v_3;
            var $v_4;
            var $v_5;
            var $v_6;
            var $$t_C, $$t_D, $$t_E, $$t_F, $$t_G, $$t_H;

            if (!($$t_H = $v_1.$3I_2($$t_C = {
                'val': $v_2
            }, $$t_D = {
                'val': $v_3
            }, $$t_E = {
                'val': $v_4
            }, $$t_F = {
                'val': $v_5
            }, $$t_G = {
                'val': $v_6
            }), $v_2 = $$t_C.val, $v_3 = $$t_D.val, $v_4 = $$t_E.val, $v_5 = $$t_F.val, $v_6 = $$t_G.val, $$t_H)) {
                continue;
            }
            if ($v_2 !== $p0 || $v_4 < $p1 || $v_3 > $p2) {
                continue;
            }
            if ($v_2) {
                $v_5 = -$v_5;
                $v_6 = -$v_6;
            }
            if ($v_5 < $p3.val) {
                $p3.val = $v_5;
            }
            if ($v_6 > $p4.val) {
                $p4.val = $v_6;
            }
        }
    }
};
SP.UI.Timeline.CalloutPhysical = function SP_UI_Timeline_CalloutPhysical() {
    this.$1b_1 = -1;
    this.$2F_1 = -1;
    SP.UI.Timeline.CalloutPhysical.initializeBase(this);
};
SP.UI.Timeline.CalloutPhysical.prototype = {
    $m_1: false,
    $3f_1: null,
    $3g_1: null,
    $d_1: null,
    $3_1: null,
    $F_1: 0,
    get_$1i_1: function SP_UI_Timeline_CalloutPhysical$get_$1i_1() {
        return this.$3f_1;
    },
    set_$1i_1: function SP_UI_Timeline_CalloutPhysical$set_$1i_1($p0) {
        this.$3f_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$j_1: function SP_UI_Timeline_CalloutPhysical$get_$j_1() {
        return this.$3g_1;
    },
    set_$j_1: function SP_UI_Timeline_CalloutPhysical$set_$j_1($p0) {
        this.$3g_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$1m_1: function SP_UI_Timeline_CalloutPhysical$get_$1m_1() {
        return this.$d_1;
    },
    set_$1m_1: function SP_UI_Timeline_CalloutPhysical$set_$1m_1($p0) {
        this.$d_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$M_1: function SP_UI_Timeline_CalloutPhysical$get_$M_1() {
        return this.$3_1;
    },
    set_$M_1: function SP_UI_Timeline_CalloutPhysical$set_$M_1($p0) {
        this.$3_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    getAllElements: function SP_UI_Timeline_CalloutPhysical$getAllElements() {
        if (this.hasElements()) {
            return [this.get_$1i_1(), this.get_$j_1(), this.get_$1m_1(), this.get_$M_1()];
        }
        else {
            return null;
        }
    },
    hasElements: function SP_UI_Timeline_CalloutPhysical$hasElements() {
        return this.$m_1;
    },
    clean: function SP_UI_Timeline_CalloutPhysical$clean() {
        SP.UI.Timeline.PhysicalElements.prototype.clean.call(this);
        this.$3f_1 = null;
        this.$3g_1 = null;
        this.$d_1 = null;
        this.$3_1 = null;
        this.$m_1 = false;
    }
};
SP.UI.Timeline.MilestoneElementSet = function SP_UI_Timeline_MilestoneElementSet() {
};
SP.UI.Timeline.MilestoneElementSet.prototype = {
    $7_0: null,
    serialize: function SP_UI_Timeline_MilestoneElementSet$serialize() {
        var $v_0 = [];

        for (var $v_3 = 0; $v_3 < (this.get_$T_0()).length; $v_3++) {
            Array.add($v_0, (this.get_item($v_3)).serialize());
        }
        var $v_1 = $v_0.join('');
        var $v_2 = String.format('<{0}>{1}</{0}>', 'mlSet', $v_1);

        return $v_2;
    },
    get_$T_0: function SP_UI_Timeline_MilestoneElementSet$get_$T_0() {
        if (!this.$7_0) {
            this.$7_0 = [];
        }
        return this.$7_0;
    },
    get_item: function SP_UI_Timeline_MilestoneElementSet$get_item(index) {
        return this.$7_0[index];
    },
    set_item: function SP_UI_Timeline_MilestoneElementSet$set_item(index, value) {
        this.$7_0[index] = value;
        return value;
    },
    getAt: function SP_UI_Timeline_MilestoneElementSet$getAt(index) {
        return this.get_item(index);
    },
    get_length: function SP_UI_Timeline_MilestoneElementSet$get_length() {
        return (this.get_$T_0()).length;
    },
    add: function SP_UI_Timeline_MilestoneElementSet$add(newMilestoneElement) {
        Array.add(this.get_$T_0(), newMilestoneElement);
    },
    createFromDefault: function SP_UI_Timeline_MilestoneElementSet$createFromDefault(uid) {
        return this.$7O_0(uid);
    },
    $7O_0: function SP_UI_Timeline_MilestoneElementSet$$7O_0($p0) {
        var $v_0 = (this.get_item(0)).$4j_2($p0);

        this.add($v_0);
        return $v_0;
    },
    $5k_0: function SP_UI_Timeline_MilestoneElementSet$$5k_0($p0, $p1, $p2, $p3, $p4) {
        for (var $v_0 = 0; $v_0 < this.get_length(); $v_0++) {
            var $v_1 = this.get_item($v_0);

            if ($v_1.$12_1 || !$v_1.get_shouldShow()) {
                continue;
            }
            var $v_2;
            var $v_3;
            var $v_4;
            var $v_5;
            var $v_6;
            var $$t_C, $$t_D, $$t_E, $$t_F, $$t_G, $$t_H;

            if (!($$t_H = $v_1.$3I_2($$t_C = {
                'val': $v_2
            }, $$t_D = {
                'val': $v_3
            }, $$t_E = {
                'val': $v_4
            }, $$t_F = {
                'val': $v_5
            }, $$t_G = {
                'val': $v_6
            }), $v_2 = $$t_C.val, $v_3 = $$t_D.val, $v_4 = $$t_E.val, $v_5 = $$t_F.val, $v_6 = $$t_G.val, $$t_H)) {
                continue;
            }
            if ($v_2 !== $p0 || $v_4 < $p1 || $v_3 > $p2) {
                continue;
            }
            if ($v_2) {
                $v_5 = -$v_5;
                $v_6 = -$v_6;
            }
            if ($v_5 < $p3.val) {
                $p3.val = $v_5;
            }
            if ($v_6 > $p4.val) {
                $p4.val = $v_6;
            }
        }
    }
};
SP.UI.Timeline.MilestonePhysical = function SP_UI_Timeline_MilestonePhysical() {
    this.$32_1 = -1;
    SP.UI.Timeline.MilestonePhysical.initializeBase(this);
};
SP.UI.Timeline.MilestonePhysical.prototype = {
    $m_1: false,
    $3j_1: null,
    $3k_1: null,
    $3n_1: null,
    $d_1: null,
    $3_1: null,
    $F_1: 0,
    get_$3G_1: function SP_UI_Timeline_MilestonePhysical$get_$3G_1() {
        return this.$3j_1;
    },
    set_$3G_1: function SP_UI_Timeline_MilestonePhysical$set_$3G_1($p0) {
        this.$3j_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$2M_1: function SP_UI_Timeline_MilestonePhysical$get_$2M_1() {
        return this.$3k_1;
    },
    set_$2M_1: function SP_UI_Timeline_MilestonePhysical$set_$2M_1($p0) {
        this.$3k_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$3O_1: function SP_UI_Timeline_MilestonePhysical$get_$3O_1() {
        return this.$3n_1;
    },
    set_$3O_1: function SP_UI_Timeline_MilestonePhysical$set_$3O_1($p0) {
        this.$3n_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$1m_1: function SP_UI_Timeline_MilestonePhysical$get_$1m_1() {
        return this.$d_1;
    },
    set_$1m_1: function SP_UI_Timeline_MilestonePhysical$set_$1m_1($p0) {
        this.$d_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    get_$M_1: function SP_UI_Timeline_MilestonePhysical$get_$M_1() {
        return this.$3_1;
    },
    set_$M_1: function SP_UI_Timeline_MilestonePhysical$set_$M_1($p0) {
        this.$3_1 = $p0;
        this.$m_1 = true;
        return $p0;
    },
    getAllElements: function SP_UI_Timeline_MilestonePhysical$getAllElements() {
        if (this.hasElements()) {
            return [this.get_$3G_1(), this.get_$2M_1(), this.get_$3O_1(), this.get_$1m_1(), this.get_$M_1()];
        }
        else {
            return null;
        }
    },
    hasElements: function SP_UI_Timeline_MilestonePhysical$hasElements() {
        return this.$m_1;
    },
    clean: function SP_UI_Timeline_MilestonePhysical$clean() {
        SP.UI.Timeline.PhysicalElements.prototype.clean.call(this);
        this.$3j_1 = null;
        this.$3k_1 = null;
        this.$3n_1 = null;
        this.$d_1 = null;
        this.$3_1 = null;
        this.$m_1 = false;
    }
};
SP.UI.Timeline.BarElement = function SP_UI_Timeline_BarElement() {
    this.$4_2 = new (SP.UI.Timeline.PhysicalElementsContainer.$$(SP.UI.Timeline.BarPhysical))();
    SP.UI.Timeline.BarElement.initializeBase(this);
};
SP.UI.Timeline.BarElement.create = function SP_UI_Timeline_BarElement$create(itemFormatter) {
    var $v_0 = new SP.UI.Timeline.BarElement();

    $v_0.initializeBaseProperties(itemFormatter);
    $v_0.fixedChannel = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'ch', SP.UI.Timeline.BarElement.unsetChannel);
    return $v_0;
};
SP.UI.Timeline.BarElement.prototype = {
    notSelectedBorderColor: null,
    fixedChannel: 0,
    $U_2: 0,
    $2f_2: 0,
    $59_2: 0,
    $17_2: false,
    $1t_2: 0,
    serialize: function SP_UI_Timeline_BarElement$serialize() {
        var $v_0 = '<{0} {1}{2}=\"{3}\" />';

        return String.format($v_0, 't', this.serializedBaseFields(), 'ch', SP.UI.Timeline.TimelineControl.$2Q(this.fixedChannel));
    },
    get_pixelChannelHeight: function SP_UI_Timeline_BarElement$get_pixelChannelHeight() {
        return this.$59_2;
    },
    get_pixelBarHeight: function SP_UI_Timeline_BarElement$get_pixelBarHeight() {
        return this.$2f_2;
    },
    get_impliedChannel: function SP_UI_Timeline_BarElement$get_impliedChannel() {
        return this.$U_2;
    },
    set_impliedChannel: function SP_UI_Timeline_BarElement$set_impliedChannel(value) {
        this.$U_2 = value;
        return value;
    },
    get_itemType: function SP_UI_Timeline_BarElement$get_itemType() {
        return 0;
    },
    $14_2: true,
    $7w_2: function SP_UI_Timeline_BarElement$$7w_2() {
        return this.$14_2 ? 'ms-tl-barTitle' : 'ms-tl-barTitleWithoutDates';
    },
    get_labelClassName: function SP_UI_Timeline_BarElement$get_labelClassName() {
        return this.$7w_2();
    },
    get_dateClassName: function SP_UI_Timeline_BarElement$get_dateClassName() {
        return 'ms-tl-barDate';
    },
    createSuperToolTipContents: function SP_UI_Timeline_BarElement$createSuperToolTipContents(title, startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createToolTipContentsTwoDates(title, startTime, endTime, dateFormatString);
    },
    createDateString: function SP_UI_Timeline_BarElement$createDateString(startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createDateStringTwoParts(startTime, endTime, dateFormatString);
    },
    getTextContainingElement: function SP_UI_Timeline_BarElement$getTextContainingElement(graphics) {
        return (this.$4_2.getPhysicalElement(graphics)).$k_1;
    },
    setHorizontalPosition: function SP_UI_Timeline_BarElement$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        var $v_0 = this.calculateRenderTime(this.$6_1, canvasMinDate, canvasMaxDate);
        var $v_1 = $v_0.renderEndTime - $v_0.renderStartTime;
        var $v_2 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (!$v_2) {
            $v_2 = new SP.UI.Timeline.BarPhysical();
        }
        $v_2.$2G_1 = Math.ceil(pixelsPerMillisecond * ($v_0.renderStartTime - canvasMinDate));
        if ($v_0.renderEndTime === canvasMaxDate) {
            $v_2.$41_1 = mainAreaWidth - $v_2.$2G_1;
        }
        else {
            $v_2.$41_1 = Math.floor(pixelsPerMillisecond * $v_1);
        }
        this.$4_2.addPhysicalElement($v_2, SP.UI.Timeline.TimelineControl.$2);
        this.$17_2 = SP.UI.Timeline.TimelineControl.$2.get_isRtl();
    },
    get_majorPosition: function SP_UI_Timeline_BarElement$get_majorPosition() {
        return 0;
    },
    get_minorPosition: function SP_UI_Timeline_BarElement$get_minorPosition() {
        return this.$U_2;
    },
    getSubPosition: function SP_UI_Timeline_BarElement$getSubPosition() {
        var $v_0 = (this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2)).$2G_1;

        return $v_0;
    },
    createPhysicalElements: function SP_UI_Timeline_BarElement$createPhysicalElements(container) {
        var $v_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        $v_0.className = 'ms-tl-bar';
        this.notSelectedBorderColor = $v_0.style.borderColor;
        var $v_1 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        $v_1.$k_1 = $v_0;
        SP.UI.Timeline.BaseDataboundElement.prototype.createPhysicalElements.call(this, container);
    },
    formatTextProperties: function SP_UI_Timeline_BarElement$formatTextProperties(options) {
        this.$14_2 = options.$14_0;
        SP.UI.Timeline.BaseDataboundElement.prototype.formatTextProperties.call(this, options);
    },
    updateTextAndStyling: function SP_UI_Timeline_BarElement$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        SP.UI.Timeline.BaseDataboundElement.prototype.updateTextAndStyling.call(this, formats, tss, fIsAnyTaskShowing);
        var $v_0 = formats.getFormat(this.$b_0, 0);

        (this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2)).$k_1.style.backgroundColor = $v_0.getColor(formats, 0);
    },
    computeTextSizes: function SP_UI_Timeline_BarElement$computeTextSizes() {
        if (!this.isExplicitlySized()) {
            this.$59_2 = (this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2)).$k_1.offsetHeight;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_BarElement$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        this.$2f_2 = barHeight;
        this.$1t_2 = (barHeight + 1) * this.$U_2;
    },
    movePhysicalElements: function SP_UI_Timeline_BarElement$movePhysicalElements() {
        var $v_0 = this.$4_2.getAllPhysicalElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            $v_2.$H_0.MoveRect($v_2.$2G_1, this.$1t_2, $v_2.$41_1 + $v_2.$2G_1, this.$2f_2 + this.$1t_2, $v_2.$k_1);
            var $v_3 = $v_2.$k_1.style.width;

            if ($v_3.length < 2) {
                continue;
            }
            var $v_4 = Number.parseInvariant($v_3.substring(0, $v_3.length - 2));
            var $v_5 = $v_2.$k_1.firstChild;

            while ($v_5) {
                var $v_6 = $v_5.className;

                if (!$v_6 || !$v_6.startsWith('ms-tl-bar')) {
                    $v_5 = $v_5.nextSibling;
                    continue;
                }
                var $v_7 = 6;
                var $v_8 = this.$17_2 ? 'padding-right' : 'padding-left';
                var $v_9 = XUI.Html.GetComputedStyle($v_5, $v_8);

                if ($v_9 && $v_9.length > 0) {
                    var $v_A = $v_7;

                    if ($v_9.length > 2) {
                        $v_A = Number.parseInvariant($v_9.substring(0, $v_9.length - 2));
                    }
                }
                if ($v_7 >= $v_4) {
                    $v_5.style.display = 'none';
                }
                else {
                    $v_5.style.display = '';
                    var $v_B = $v_4 - $v_7;

                    $v_5.style.width = $v_B + 'px';
                }
                $v_5 = $v_5.nextSibling;
            }
        }
    },
    getPhysicalElements: function SP_UI_Timeline_BarElement$getPhysicalElements(graphics) {
        var $v_0 = this.$4_2.getPhysicalElement(graphics);

        if ($v_0) {
            return $v_0;
        }
        else {
            return null;
        }
    },
    showAsSelected: function SP_UI_Timeline_BarElement$showAsSelected() {
        (this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2)).$k_1.style.borderColor = SP.UI.Timeline.Colors.get_colorForSelected();
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsSelected.call(this);
    },
    showAsNotSelected: function SP_UI_Timeline_BarElement$showAsNotSelected() {
        (this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2)).$k_1.style.borderColor = this.notSelectedBorderColor;
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsNotSelected.call(this);
    },
    $2W_2: null,
    $22_2: null,
    $29_2: null,
    $2A_2: 0,
    $50_2: 0,
    $2t_2: false,
    addSelectionDetectionHandlers: function SP_UI_Timeline_BarElement$addSelectionDetectionHandlers(selMan) {
        SP.UI.Timeline.BaseSelectableElement.prototype.addSelectionDetectionHandlers.call(this, selMan);
        var $$t_A = this;

        this.$2W_2 = function($p1_0) {
            $$t_A.$2U_2($p1_0, selMan, false);
        };
        this.$22_2 = this.$$d_onDblClick;
        var $v_0 = this.$4_2.getPhysicalElement(selMan.get_graphics());

        $v_0.$1w_0 = selMan;
        var $v_1 = $v_0.$k_1;

        $addHandler($v_1, 'mousedown', this.$2W_2);
        $addHandler($v_1, 'dblclick', this.$22_2);
        if (!selMan.get_$16_0()) {
            var $$t_B = this, $$t_C = this, $$t_D = this;

            XUI.Touch.CreateTouchManager($v_1, function($p1_0, $p1_1) {
                $$t_B.$2U_2($p1_0, selMan, true);
            }, function($p1_0, $p1_1, $p1_2) {
                $$t_C.$2X_2($p1_0, selMan, true);
            }, function($p1_0) {
                $$t_D.$2V_2($p1_0, selMan);
            }, null, null);
        }
    },
    $2U_2: function SP_UI_Timeline_BarElement$$2U_2($p0, $p1, $p2) {
        if ($p1.get_$16_0()) {
            if (!$p2) {
                this.onClickReadOnlyDraggable($p0, $p1);
            }
            return;
        }
        var $v_0 = $p0.target;

        if ($v_0) {
            this.setFocus($p1.get_graphics());
            this.onStartDrag($v_0, $p1, $p2);
            this.$29_2 = XUI.Capture.GetEventLocation($p0);
            this.$2A_2 = this.$1t_2;
            this.$50_2 = this.$U_2;
            this.$2t_2 = true;
            if (!$p2) {
                var $$t_6 = this, $$t_7 = this;

                XUI.Capture.SetCapture($v_0, function($p1_0) {
                    $$t_6.$2X_2($p1_0, $p1, false);
                    XUI.Capture.StopEvent($p1_0);
                }, function($p1_0) {
                    $$t_7.$2V_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                });
                XUI.Capture.StopEvent($p0);
            }
        }
    },
    $2X_2: function SP_UI_Timeline_BarElement$$2X_2($p0, $p1, $p2) {
        this.closeSuperToolTipIfVisible();
        var $v_0 = XUI.Capture.GetEventLocation($p0);

        if (this.$2t_2 && (this.$29_2.x !== $v_0.x || this.$29_2.y !== $v_0.y)) {
            this.$2t_2 = false;
        }
        var $v_1 = this.$2A_2 + ($v_0.y - this.$29_2.y);
        var $v_2 = this.$2f_2;
        var $v_3 = $p1.get_mainAreaHeight();

        if ($v_1 > this.$2A_2 + $v_2 / 2 && $v_3 - 1 > this.$1t_2) {
            this.$U_2++;
            this.fixedChannel = this.$U_2;
            var $v_4 = 0, $v_5 = 0, $v_6 = 0, $v_7 = 0;
            var $$t_F, $$t_G, $$t_H, $$t_I;

            this.handleRepositioningItems($v_2, $v_3, $$t_F = {
                'val': $v_4
            }, $$t_G = {
                'val': $v_5
            }, $$t_H = {
                'val': $v_6
            }, $$t_I = {
                'val': $v_7
            }), $v_4 = $$t_F.val, $v_5 = $$t_G.val, $v_6 = $$t_H.val, $v_7 = $$t_I.val;
            this.$2A_2 = this.$1t_2;
            this.$29_2.y += $v_2 + 1;
        }
        else if ($v_1 < this.$2A_2 - $v_2 / 2 && this.$U_2 > 0) {
            this.$U_2--;
            this.fixedChannel = this.$U_2;
            var $v_8 = 0, $v_9 = 0, $v_A = 0, $v_B = 0;
            var $$t_J, $$t_K, $$t_L, $$t_M;

            this.handleRepositioningItems($v_2, $v_3, $$t_J = {
                'val': $v_8
            }, $$t_K = {
                'val': $v_9
            }, $$t_L = {
                'val': $v_A
            }, $$t_M = {
                'val': $v_B
            }), $v_8 = $$t_J.val, $v_9 = $$t_K.val, $v_A = $$t_L.val, $v_B = $$t_M.val;
            this.$2A_2 = this.$1t_2;
            this.$29_2.y -= $v_2 + 1;
        }
        if ($p2) {
            $p0.preventDefault();
        }
        this.movePhysicalElements();
    },
    $2V_2: function SP_UI_Timeline_BarElement$$2V_2($p0, $p1) {
        this.onEndDrag($p0.target, this.$2t_2);
        if (this.$50_2 !== this.$U_2) {
            var $v_0 = this.$4_2.getAllPhysicalElements();

            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                $v_0[$v_1].$1w_0.$8O_0(this);
            }
        }
    },
    $6L_0: function SP_UI_Timeline_BarElement$$6L_0($p0, $p1) {
        var $v_0 = this.modifiableItemFormat($p0);
        var $v_1 = $v_0.$5w_0($p0, this.get_itemType(), $p1);
        var $v_2 = $v_0.$80_0($p0, this.get_itemType(), $p1);

        return [$v_1, $v_2];
    },
    $4j_2: function SP_UI_Timeline_BarElement$$4j_2($p0) {
        var $v_0 = new SP.UI.Timeline.BarElement();

        SP.UI.Timeline.BaseDataboundElement.prototype.copyShallowCloneFields.call(this, $v_0, $p0);
        $v_0.fixedChannel = SP.UI.Timeline.BarElement.unsetChannel;
        return $v_0;
    },
    getAllPhysicalElements: function SP_UI_Timeline_BarElement$getAllPhysicalElements() {
        return this.$4_2.getAllPhysicalElements();
    },
    clean: function SP_UI_Timeline_BarElement$clean(graphics) {
        SP.UI.Timeline.BaseDataboundElement.prototype.clean.call(this, graphics);
        this.$4_2.removePhysicalElement(graphics);
    }
};
SP.UI.Timeline.BaseDataboundElement = function SP_UI_Timeline_BaseDataboundElement() {
    this.$$d_$8v_1 = Function.createDelegate(this, this.$8v_1);
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    SP.UI.Timeline.BaseDataboundElement.initializeBase(this);
};
SP.UI.Timeline.BaseDataboundElement.$6z = function SP_UI_Timeline_BaseDataboundElement$$6z($p0) {
    if ($p0 && $p0.hasElements()) {
        for (var $$arr_1 = $p0.getAllElements(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];

            if ($v_0) {
                SP.UI.Timeline.ItemTypeStatic.showElement($v_0);
            }
        }
    }
};
SP.UI.Timeline.BaseDataboundElement.$61 = function SP_UI_Timeline_BaseDataboundElement$$61($p0) {
    if ($p0 && $p0.hasElements()) {
        for (var $$arr_1 = $p0.getAllElements(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];

            if ($v_0) {
                SP.UI.Timeline.ItemTypeStatic.hideElement($v_0);
            }
        }
    }
};
SP.UI.Timeline.BaseDataboundElement.prototype = {
    $19_1: null,
    $20_1: null,
    $5H_1: null,
    $8_1: false,
    $12_1: false,
    $2g_1: null,
    $1v_1: null,
    $6_1: null,
    $36_1: null,
    initializeBaseProperties: function SP_UI_Timeline_BaseDataboundElement$initializeBaseProperties(itemFormatter) {
        SP.UI.Timeline.BaseSelectableElement.prototype.initializeBaseProperties.call(this, itemFormatter);
        this.$19_1 = itemFormatter.getAttribute('id');
        this.$20_1 = itemFormatter.getAttribute('uid');
        this.$5H_1 = itemFormatter.getAttribute('uidSrc');
        this.$8_1 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(itemFormatter, 'onTL', false);
        this.$12_1 = false;
    },
    serializedBaseFields: function SP_UI_Timeline_BaseDataboundElement$serializedBaseFields() {
        var $v_0 = !this.$6_1 || !this.$6_1.guid ? this.$19_1 : this.$6_1.guid;
        var $v_1 = !this.$6_1 || !this.$6_1.xmlUid ? this.$20_1 : this.$6_1.xmlUid;
        var $v_2 = !this.$6_1 ? this.$5H_1 : '1';
        var $v_3 = '{1}=\"{2}\" ';

        if ($v_1 && $v_1.length > 0) {
            $v_3 += '{3}=\"{4}\" {5}=\"{6}\" ';
        }
        $v_3 += '{7}=\"{8}\" {0}';
        return String.format($v_3, SP.UI.Timeline.BaseSelectableElement.prototype.serializedBaseFields.call(this), 'id', $v_0, 'uid', $v_1, 'uidSrc', $v_2, 'onTL', SP.UI.Timeline.TimelineControl.$4N(this.$8_1));
    },
    get_item: function SP_UI_Timeline_BaseDataboundElement$get_item() {
        return this.$6_1;
    },
    get_uid: function SP_UI_Timeline_BaseDataboundElement$get_uid() {
        return this.$19_1;
    },
    get_isDataBound: function SP_UI_Timeline_BaseDataboundElement$get_isDataBound() {
        return !!this.$6_1;
    },
    get_isItemMilestone: function SP_UI_Timeline_BaseDataboundElement$get_isItemMilestone() {
        return !!this.$6_1 && (this.$6_1.isMilestone || this.get_$67_1());
    },
    get_shouldShow: function SP_UI_Timeline_BaseDataboundElement$get_shouldShow() {
        if (this.$8_1 && this.$6_1 && this.get_$6D_1()) {
            var $v_0 = this.get_itemType() === 2;
            var $v_1 = this.get_isItemMilestone();

            return $v_0 && $v_1 || !($v_0 || $v_1);
        }
        return false;
    },
    set_shouldShow: function SP_UI_Timeline_BaseDataboundElement$set_shouldShow(value) {
        this.$8_1 = value;
        if (!this.$8_1) {
            this.closeSuperToolTipIfVisible();
        }
        return value;
    },
    get_$6D_1: function SP_UI_Timeline_BaseDataboundElement$get_$6D_1() {
        return !!this.$6_1 && (!!this.$6_1.startTime || !!this.$6_1.endTime);
    },
    $4c_1: function SP_UI_Timeline_BaseDataboundElement$$4c_1($p0, $p1) {
        if (!this.$8_1 || !this.get_$6D_1()) {
            return;
        }
        if ($p0.val > this.get_itemStartTime()) {
            $p0.val = this.get_itemStartTime();
        }
        if ($p1.val < this.get_itemEndTime()) {
            $p1.val = this.get_itemEndTime();
        }
    },
    get_$67_1: function SP_UI_Timeline_BaseDataboundElement$get_$67_1() {
        return !!this.$6_1 && (!this.$6_1.startTime || !this.$6_1.endTime || (this.get_itemStartTime()).getTime() === (this.get_itemEndTime()).getTime());
    },
    get_renderedTitle: function SP_UI_Timeline_BaseDataboundElement$get_renderedTitle() {
        return this.$2g_1;
    },
    set_renderedTitle: function SP_UI_Timeline_BaseDataboundElement$set_renderedTitle(value) {
        this.$2g_1 = value;
        return value;
    },
    get_renderedDate: function SP_UI_Timeline_BaseDataboundElement$get_renderedDate() {
        return this.$1v_1;
    },
    isExplicitlySized: function SP_UI_Timeline_BaseDataboundElement$isExplicitlySized() {
        var $v_0 = this.getTextContainingElement(SP.UI.Timeline.TimelineControl.$2);

        return !!$v_0.style.height && $v_0.style.height.length > 0;
    },
    getFocusableElement: function SP_UI_Timeline_BaseDataboundElement$getFocusableElement() {
        return this.getTextContainingElement(SP.UI.Timeline.TimelineControl.$2);
    },
    show: function SP_UI_Timeline_BaseDataboundElement$show() {
        this.set_shouldShow(true);
        var $v_0 = this.getPhysicalElements(SP.UI.Timeline.TimelineControl.$2);

        SP.UI.Timeline.BaseDataboundElement.$6z($v_0);
    },
    showAll: function SP_UI_Timeline_BaseDataboundElement$showAll() {
        this.set_shouldShow(true);
        this.$4q_1();
    },
    $4q_1: function SP_UI_Timeline_BaseDataboundElement$$4q_1() {
        if (this.get_shouldShow()) {
            for (var $$arr_0 = this.getAllPhysicalElements(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
                var $v_0 = $$arr_0[$$idx_2];

                SP.UI.Timeline.BaseDataboundElement.$6z($v_0);
            }
        }
    },
    hide: function SP_UI_Timeline_BaseDataboundElement$hide() {
        var $v_0 = this.getPhysicalElements(SP.UI.Timeline.TimelineControl.$2);

        SP.UI.Timeline.BaseDataboundElement.$61($v_0);
        this.set_shouldShow(false);
    },
    $3N_1: function SP_UI_Timeline_BaseDataboundElement$$3N_1() {
        for (var $$arr_0 = this.getAllPhysicalElements(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];

            SP.UI.Timeline.BaseDataboundElement.$61($v_0);
        }
    },
    hideAll: function SP_UI_Timeline_BaseDataboundElement$hideAll() {
        this.$3N_1();
        this.set_shouldShow(false);
    },
    copyShallowCloneFields: function SP_UI_Timeline_BaseDataboundElement$copyShallowCloneFields(bde, uid) {
        SP.UI.Timeline.BaseSelectableElement.prototype.copyShallowCloneFields.call(this, bde);
        bde.$8_1 = true;
        bde.$19_1 = uid;
    },
    matchesUid: function SP_UI_Timeline_BaseDataboundElement$matchesUid(uid) {
        if (this.$19_1 === uid || this.$20_1 === uid) {
            return true;
        }
        return false;
    },
    $6N_1: function SP_UI_Timeline_BaseDataboundElement$$6N_1($p0) {
        var $v_0 = [];

        Array.add($v_0, $p0);
        Array.add($v_0, 'needInfo');
        return $v_0.join('');
    },
    $7W_1: function SP_UI_Timeline_BaseDataboundElement$$7W_1($p0) {
        var $v_0 = this.$7K_1(this.$6N_1($p0.getID()), '');

        this.$74_1($p0, $v_0);
    },
    $7K_1: function SP_UI_Timeline_BaseDataboundElement$$7K_1($p0, $p1) {
        var $v_0 = [];

        Array.add($v_0, '<div id=\'');
        Array.add($v_0, $p0);
        Array.add($v_0, '\' >');
        Array.add($v_0, $p1);
        Array.add($v_0, '</div>');
        return $v_0.join('');
    },
    $74_1: function SP_UI_Timeline_BaseDataboundElement$$74_1($p0, $p1) {
        if ($p0) {
            var $v_0 = this.$5S_1($p0.getLaunchPoint());

            $v_0.content = $p1;
            $v_0.title = STSHtmlEncode(this.$2g_1);
            $v_0.contentWidth = ($p0.getActionMenu()).calculateActionWidth();
            $p0.set($v_0);
        }
    },
    get_itemStartTime: function SP_UI_Timeline_BaseDataboundElement$get_itemStartTime() {
        if (!this.$6_1.startTime) {
            return this.$6_1.endTime;
        }
        if (!this.$6_1.endTime) {
            return this.$6_1.startTime;
        }
        return this.$6_1.startTime < this.$6_1.endTime ? this.$6_1.startTime : this.$6_1.endTime;
    },
    get_itemEndTime: function SP_UI_Timeline_BaseDataboundElement$get_itemEndTime() {
        if (!this.$6_1.startTime) {
            return this.$6_1.endTime;
        }
        if (!this.$6_1.endTime) {
            return this.$6_1.startTime;
        }
        return this.$6_1.startTime < this.$6_1.endTime ? this.$6_1.endTime : this.$6_1.startTime;
    },
    bindToUnderlyingData: function SP_UI_Timeline_BaseDataboundElement$bindToUnderlyingData(elementData) {
        if (!this.$19_1) {
            this.$6_1 = null;
        }
        else {
            var $v_0 = elementData[this.$19_1];

            if (!$v_0 && this.$20_1) {
                $v_0 = elementData[this.$20_1];
            }
            if (!$v_0) {
                this.$3N_1();
            }
            else {
                this.$6_1 = $v_0;
                if (SP.UI.Timeline.ItemTypeStatic.$8E($v_0)) {
                    this.$4q_1();
                }
                else {
                    this.$3N_1();
                }
            }
        }
    },
    calculateRenderTime: function SP_UI_Timeline_BaseDataboundElement$calculateRenderTime(item, canvasMinDate, canvasMaxDate) {
        var $v_0 = item.renderStartTime ? item.renderStartTime : this.get_itemStartTime();
        var $v_1 = item.renderEndTime ? item.renderEndTime : this.get_itemEndTime();

        if (item.autoCalculateRenderTime) {
            if ($v_0 < canvasMinDate) {
                $v_0 = canvasMinDate;
            }
            if ($v_1 > canvasMaxDate) {
                $v_1 = canvasMaxDate;
            }
        }
        return new SP.UI.Timeline.RenderDates($v_0, $v_1);
    },
    createPhysicalElements: function SP_UI_Timeline_BaseDataboundElement$createPhysicalElements(container) {
        for (var $$arr_1 = (this.getPhysicalElements(SP.UI.Timeline.TimelineControl.$2)).getAllElements(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];

            if ($v_0 === this.getTextContainingElement(SP.UI.Timeline.TimelineControl.$2)) {
                $v_0.tabIndex = 0;
            }
            else {
                $v_0.tabIndex = -1;
            }
        }
        if (SP.UI.Timeline.TimelineControl.$2.get_shouldCreateSuperToolTip()) {
            var $v_1 = this.getElementsWithCallouts(SP.UI.Timeline.TimelineControl.$2);

            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];

                $v_3.id = String.format('{0}_lbl{1}_{2}', $v_3.parentNode.id, $v_2, SP.UI.Timeline.BaseDataboundElement.$4R);
            }
            SP.UI.Timeline.BaseDataboundElement.$4R++;
        }
    },
    getElementsWithCallouts: function SP_UI_Timeline_BaseDataboundElement$getElementsWithCallouts(graphics) {
        return [this.getTextContainingElement(graphics)];
    },
    closeSuperToolTipIfVisible: function SP_UI_Timeline_BaseDataboundElement$closeSuperToolTipIfVisible() {
        if (typeof CalloutManager !== 'undefined' && CalloutManager.isAtLeastOneCalloutOpen()) {
            CalloutManager.closeAll();
        }
    },
    $5S_1: function SP_UI_Timeline_BaseDataboundElement$$5S_1($p0) {
        var $v_0 = $p0.id;
        var $v_1 = new CalloutOpenOptions();

        $v_1.event = 'none';
        $v_1.showCloseButton = true;
        $v_1.closeCalloutOnBlur = true;
        var $v_2 = new CalloutOptions();

        $v_2.launchPoint = $p0;
        $v_2.openOptions = $v_1;
        $v_2.ID = $v_0;
        return $v_2;
    },
    $8v_1: function SP_UI_Timeline_BaseDataboundElement$$8v_1($p0) {
        if (this.$36_1) {
            var $v_0 = $get(this.$6N_1($p0.getID()));

            if ($v_0) {
                var $$t_3 = this;

                this.$36_1($v_0, function() {
                    $v_0.id = $v_0.id + 'Done';
                    var $v_1 = XUI.Html.GetOuterHTML($v_0);

                    $$t_3.$74_1($p0, $v_1);
                });
            }
        }
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_BaseDataboundElement$isPhysicalElementsCreated(graphics) {
        var $v_0 = this.getPhysicalElements(graphics);

        return !!$v_0 && $v_0.hasElements();
    },
    formatTextProperties: function SP_UI_Timeline_BaseDataboundElement$formatTextProperties(options) {
        this.$2g_1 = this.$6_1.title;
        this.$1v_1 = options.$14_0 ? this.createDateString(this.get_itemStartTime(), this.get_itemEndTime(), options.get_dateFormatString()) : null;
        if (this.$6_1.retrieveToolTipContents) {
            this.$36_1 = this.$6_1.retrieveToolTipContents;
        }
        else {
            var $$t_O = this;

            this.$36_1 = function($p1_0, $p1_1) {
                var $v_1 = $$t_O.createSuperToolTipContents($$t_O.$6_1.title, $$t_O.get_itemStartTime(), $$t_O.get_itemEndTime(), options.get_dateFormatString());

                $p1_0.innerHTML = $v_1;
                $p1_1();
            };
        }
        var $v_0 = SP.UI.Timeline.TimelineControl.$2;
        var $$t_P = this;

        EnsureScriptFunc('callout.js', 'Callout', function() {
            var $v_2 = $$t_P.getElementsWithCallouts($v_0);

            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];

                if ($v_4.id) {
                    var $v_5 = CalloutManager.getFromLaunchPointIfExists($v_4);

                    if (!$v_5) {
                        var $v_6 = $$t_P.$5S_1($v_4);

                        $v_6.onOpeningCallback = $$t_P.$$d_$8v_1;
                        $v_5 = CalloutManager.createNew($v_6);
                        var $v_7 = new CalloutActionOptions();

                        $v_7.text = Strings.STS.L_CalloutOpenAction;
                        $v_7.onClickCallback = function($p2_0, $p2_1) {
                            $$t_P.onDblClick($p2_0);
                        };
                        $v_7.isVisibleCallback = function($p2_0) {
                            return !!$$t_P.$6_1 && !!$$t_P.$6_1.url;
                        };
                        $v_5.addAction(new CalloutAction($v_7));
                        var $v_8 = new CalloutActionOptions();

                        if ($$t_P.get_$67_1()) {
                            $v_8.text = Strings.STS.L_CalloutDispBarsAction;
                        }
                        else {
                            $v_8.text = Strings.STS.L_CalloutEditDatesAction;
                        }
                        $v_8.onClickCallback = function($p2_0, $p2_1) {
                            $$t_P.$6_1.launchDialog();
                        };
                        $v_8.isVisibleCallback = function($p2_0) {
                            return !!$$t_P.$6_1.launchDialog;
                        };
                        $v_5.addAction(new CalloutAction($v_8));
                        var $v_9 = new CalloutActionOptions();

                        $v_9.text = Strings.STS.L_TimelineRemoveFromTimeline;
                        $v_9.onClickCallback = function($p2_0, $p2_1) {
                            var $v_A = $$t_P.getPhysicalElements($v_0);

                            $v_A.$1w_0.$8Y_0($$t_P);
                        };
                        $v_9.isVisibleCallback = function($p2_0) {
                            var $v_B = $$t_P.getPhysicalElements($v_0);

                            return !!$v_B.$1w_0 && !$v_B.$1w_0.get_$16_0();
                        };
                        $v_5.addAction(new CalloutAction($v_9));
                    }
                    $$t_P.$7W_1($v_5);
                }
            }
        });
    },
    updateTextAndStyling: function SP_UI_Timeline_BaseDataboundElement$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        var $v_0 = this.getTextContainingElement(SP.UI.Timeline.TimelineControl.$2);
        var $v_1 = formats.getFormat(this.$b_0, this.get_itemType());

        SP.UI.Timeline.ItemTypeStatic.addNodesForText($v_0, this.$2g_1, this.$1v_1, this.get_labelClassName(), this.get_dateClassName(), this.get_itemType(), $v_1, formats, tss);
        $v_0.style.height = '';
        $v_0.style.width = '';
    },
    onDblClick: function SP_UI_Timeline_BaseDataboundElement$onDblClick(e) {
        if (this.$6_1.url && this.$6_1.url.length) {
            this.$6_1.navigationHandler(this.$6_1.url);
        }
    },
    get_effectiveUid: function SP_UI_Timeline_BaseDataboundElement$get_effectiveUid() {
        if (this.$6_1) {
            if (this.$19_1 === this.$6_1.uid) {
                return this.$19_1;
            }
            if (this.$20_1 === this.$6_1.uid) {
                return this.$20_1;
            }
        }
        return this.$19_1;
    },
    showAsSelected: function SP_UI_Timeline_BaseDataboundElement$showAsSelected() {
        var $v_0 = this.getFocusableElement();

        if ($v_0) {
            Sys.UI.DomElement.addCssClass($v_0, 'ms-tl-selectedFocused');
        }
        var $v_1 = this.getPhysicalElements(SP.UI.Timeline.TimelineControl.$2);

        if ($v_1 && $v_1.hasElements()) {
            for (var $$arr_2 = $v_1.getAllElements(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];

                if ($v_2) {
                    Sys.UI.DomElement.addCssClass($v_2, 'ms-tl-selected');
                }
            }
        }
    },
    showAsNotSelected: function SP_UI_Timeline_BaseDataboundElement$showAsNotSelected() {
        var $v_0 = this.getFocusableElement();

        if ($v_0) {
            Sys.UI.DomElement.removeCssClass($v_0, 'ms-tl-selectedFocused');
        }
        var $v_1 = this.getPhysicalElements(SP.UI.Timeline.TimelineControl.$2);

        if ($v_1 && $v_1.hasElements()) {
            for (var $$arr_2 = $v_1.getAllElements(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];

                if ($v_2) {
                    Sys.UI.DomElement.removeCssClass($v_2, 'ms-tl-selected');
                }
            }
        }
    },
    elementsToRefreshOnStyleChange: function SP_UI_Timeline_BaseDataboundElement$elementsToRefreshOnStyleChange() {
        var $v_0 = new Array(1);

        $v_0[0] = this;
        return $v_0;
    },
    clean: function SP_UI_Timeline_BaseDataboundElement$clean(graphics) {
        var $v_0 = this.getPhysicalElements(graphics);

        if ($v_0) {
            $v_0.clean();
        }
    },
    cleanAll: function SP_UI_Timeline_BaseDataboundElement$cleanAll() {
        var $v_0 = this.getAllPhysicalElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            this.clean($v_0[$v_1].$H_0);
        }
    }
};
SP.UI.Timeline.RenderDates = function SP_UI_Timeline_RenderDates(renderStartTime, renderEndTime) {
    this.renderStartTime = renderStartTime;
    this.renderEndTime = renderEndTime;
};
SP.UI.Timeline.RenderDates.prototype = {
    renderStartTime: null,
    renderEndTime: null
};
SP.UI.Timeline.BaseSelectableElement = function SP_UI_Timeline_BaseSelectableElement() {
    this.$$d_$94_0 = Function.createDelegate(this, this.$94_0);
    this.$$d_$8y_0 = Function.createDelegate(this, this.$8y_0);
    this.$$d_$90_0 = Function.createDelegate(this, this.$90_0);
    this.$$d_$8z_0 = Function.createDelegate(this, this.$8z_0);
    this.$$d_$8u_0 = Function.createDelegate(this, this.$8u_0);
    this.$$d_$7q_0 = Function.createDelegate(this, this.$7q_0);
    this.$$d_$91_0 = Function.createDelegate(this, this.$91_0);
    this.$$d_$7v_0 = Function.createDelegate(this, this.$7v_0);
    this.$$d_$95_0 = Function.createDelegate(this, this.$95_0);
    this.$$d_$86_0 = Function.createDelegate(this, this.$86_0);
};
SP.UI.Timeline.BaseSelectableElement.prototype = {
    $b_0: 0,
    $2e_0: null,
    $1r_0: false,
    initializeBaseProperties: function SP_UI_Timeline_BaseSelectableElement$initializeBaseProperties(itemFormatter) {
        this.$b_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'fmt', -1);
    },
    get_formatNumber: function SP_UI_Timeline_BaseSelectableElement$get_formatNumber() {
        return this.$b_0;
    },
    updateFormatNumber: function SP_UI_Timeline_BaseSelectableElement$updateFormatNumber(formatNumber) {
        this.$b_0 = formatNumber;
    },
    serializedBaseFields: function SP_UI_Timeline_BaseSelectableElement$serializedBaseFields() {
        var $v_0 = '';

        if (this.$b_0 >= 0) {
            $v_0 = '{0}=\"{1}\" ';
        }
        return String.format($v_0, 'fmt', this.$b_0);
    },
    $6Z_0: null,
    $6e_0: null,
    $6c_0: null,
    addSelectionDetectionHandlers: function SP_UI_Timeline_BaseSelectableElement$addSelectionDetectionHandlers(selMan) {
        if (!selMan.get_$16_0()) {
            var $$t_4 = this;

            this.$6Z_0 = function($p1_0) {
                $$t_4.$8P_0($p1_0, selMan);
            };
            var $$t_5 = this;

            this.$6e_0 = function($p1_0) {
                $$t_5.$8S_0($p1_0, selMan);
            };
            var $$t_6 = this;

            this.$6c_0 = function($p1_0) {
                $$t_6.$8T_0($p1_0, selMan);
            };
            $addHandler(this.getFocusableElement(), 'focus', this.$6Z_0);
            $addHandler(this.getFocusableElement(), 'mouseover', this.$6e_0);
            $addHandler(this.getFocusableElement(), 'mouseout', this.$6c_0);
        }
    },
    setFocus: function SP_UI_Timeline_BaseSelectableElement$setFocus(graphics) {
        var $v_0 = null;
        var $$t_2 = this;

        SP.UI.Timeline.TimelineControl.$1C(graphics, function() {
            $v_0 = $$t_2.getFocusableElement();
        });
        if ($v_0) {
            $v_0.focus();
        }
    },
    onClickSelect: function SP_UI_Timeline_BaseSelectableElement$onClickSelect(e, selMan) {
        var $v_0 = e.target;

        if ($v_0) {
            this.setFocus(selMan.get_graphics());
        }
    },
    onClickReadOnlyDraggable: function SP_UI_Timeline_BaseSelectableElement$onClickReadOnlyDraggable(e, selMan) {
        var $v_0 = e.target;

        if ($v_0) {
            this.setFocus(selMan.get_graphics());
            this.onStartNoDrag($v_0);
            var $$t_4 = this;

            XUI.Capture.SetCapture($v_0, null, function($p1_0) {
                $$t_4.onEndNoDrag($v_0);
            });
            XUI.Capture.StopEvent(e);
        }
    },
    $8P_0: function SP_UI_Timeline_BaseSelectableElement$$8P_0($p0, $p1) {
        $p1.$3Y_0(this);
    },
    $6B_0: function SP_UI_Timeline_BaseSelectableElement$$6B_0() {
        return !this.get_itemType() || this.get_itemType() === 1 || this.get_itemType() === 2;
    },
    $8S_0: function SP_UI_Timeline_BaseSelectableElement$$8S_0($p0, $p1) {
        if (!this.$6B_0()) {
            return;
        }
        if (this.$1r_0) {
            this.$2e_0 = 'pointer';
        }
        else {
            $p0.target.style.cursor = 'pointer';
        }
    },
    $8T_0: function SP_UI_Timeline_BaseSelectableElement$$8T_0($p0, $p1) {
        if (!this.$6B_0()) {
            return;
        }
        if (this.$1r_0) {
            this.$2e_0 = 'default';
        }
        else {
            $p0.target.style.cursor = 'default';
        }
    },
    onSelect: function SP_UI_Timeline_BaseSelectableElement$onSelect() {
        this.showAsSelected();
    },
    onUnselect: function SP_UI_Timeline_BaseSelectableElement$onUnselect() {
        this.showAsNotSelected();
    },
    onStartDrag: function SP_UI_Timeline_BaseSelectableElement$onStartDrag(elementDragged, selMan, bIsTouch) {
        this.$1r_0 = true;
        if (!bIsTouch) {
            this.$4r_0(elementDragged, 'move');
        }
    },
    $7j_0: function SP_UI_Timeline_BaseSelectableElement$$7j_0($p0) {
        var $v_0 = $p0;

        while ($v_0) {
            var $v_1 = $v_0.className;

            if ($v_1 && $v_1.indexOf('js-callout-launchPoint') !== -1) {
                return $v_0;
            }
            $v_0 = $v_0.parentNode;
        }
        return null;
    },
    $5l_0: function SP_UI_Timeline_BaseSelectableElement$$5l_0($p0) {
        var $v_0 = this.$7j_0($p0);

        return !$v_0 ? null : CalloutManager.getFromLaunchPointIfExists($v_0);
    },
    onEndDrag: function SP_UI_Timeline_BaseSelectableElement$onEndDrag(elementDragged, fIsAClick) {
        this.$4s_0(elementDragged);
        this.$1r_0 = false;
        if (fIsAClick) {
            var $$t_3 = this;

            EnsureScriptFunc('callout.js', 'Callout', function() {
                var $v_0 = $$t_3.$5l_0(elementDragged);

                if ($v_0) {
                    $v_0.open();
                }
            });
        }
    },
    onStartResize: function SP_UI_Timeline_BaseSelectableElement$onStartResize(elementDragged, direction, selMan) {
        this.$1r_0 = true;
        var $v_0;

        switch (direction) {
        case 0:
            $v_0 = 'n-resize';
            break;
        case 1:
            $v_0 = 's-resize';
            break;
        default:
            $v_0 = 'n-resize';
            break;
        }
        this.$4r_0(elementDragged, $v_0);
    },
    onEndResize: function SP_UI_Timeline_BaseSelectableElement$onEndResize(elementDragged) {
        this.$4s_0(elementDragged);
        this.$1r_0 = false;
    },
    onStartNoDrag: function SP_UI_Timeline_BaseSelectableElement$onStartNoDrag(elementDragged) {
        this.$4r_0(elementDragged, 'not-allowed');
    },
    onEndNoDrag: function SP_UI_Timeline_BaseSelectableElement$onEndNoDrag(elementDragged) {
        this.$4s_0(elementDragged);
        var $$t_2 = this;

        EnsureScriptFunc('callout.js', 'Callout', function() {
            var $v_0 = $$t_2.$5l_0(elementDragged);

            if ($v_0) {
                $v_0.open();
            }
        });
    },
    $4r_0: function SP_UI_Timeline_BaseSelectableElement$$4r_0($p0, $p1) {
        this.$2e_0 = $p0.style.cursor;
        $p0.style.cursor = $p1;
    },
    $4s_0: function SP_UI_Timeline_BaseSelectableElement$$4s_0($p0) {
        $p0.style.cursor = this.$2e_0;
        this.$2e_0 = null;
    },
    copyShallowCloneFields: function SP_UI_Timeline_BaseSelectableElement$copyShallowCloneFields(bse) {
        bse.$b_0 = this.$b_0;
    },
    isSelectable: function SP_UI_Timeline_BaseSelectableElement$isSelectable() {
        return true;
    },
    $86_0: function SP_UI_Timeline_BaseSelectableElement$$86_0($p0, $p1) {
        return $p0.isUnderline($p1);
    },
    $7q_0: function SP_UI_Timeline_BaseSelectableElement$$7q_0($p0, $p1) {
        return $p0.isBold($p1);
    },
    $7v_0: function SP_UI_Timeline_BaseSelectableElement$$7v_0($p0, $p1) {
        return $p0.isItalics($p1);
    },
    $95_0: function SP_UI_Timeline_BaseSelectableElement$$95_0($p0, $p1) {
        $p0.setUnderline($p1);
    },
    $8u_0: function SP_UI_Timeline_BaseSelectableElement$$8u_0($p0, $p1) {
        $p0.setBold($p1);
    },
    $91_0: function SP_UI_Timeline_BaseSelectableElement$$91_0($p0, $p1) {
        $p0.setItalics($p1);
    },
    $4t_0: function SP_UI_Timeline_BaseSelectableElement$$4t_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$6L_0($p0, $p1);

        if (!$v_0.length) {
            return false;
        }
        var $v_1 = !$p2($v_0[0], $p1);

        for (var $$arr_7 = $v_0, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_2 = $$arr_7[$$idx_9];

            $p3($v_2, $v_1);
        }
        $p4.$4v_0();
        return true;
    },
    toggleUnderline: function SP_UI_Timeline_BaseSelectableElement$toggleUnderline(itemFormats, textStyles, selMan) {
        return this.$4t_0(itemFormats, textStyles, this.$$d_$86_0, this.$$d_$95_0, selMan);
    },
    toggleItalics: function SP_UI_Timeline_BaseSelectableElement$toggleItalics(itemFormats, textStyles, selMan) {
        return this.$4t_0(itemFormats, textStyles, this.$$d_$7v_0, this.$$d_$91_0, selMan);
    },
    toggleBold: function SP_UI_Timeline_BaseSelectableElement$toggleBold(itemFormats, textStyles, selMan) {
        return this.$4t_0(itemFormats, textStyles, this.$$d_$7q_0, this.$$d_$8u_0, selMan);
    },
    $8z_0: function SP_UI_Timeline_BaseSelectableElement$$8z_0($p0, $p1) {
        $p0.setFontName($p1);
    },
    $90_0: function SP_UI_Timeline_BaseSelectableElement$$90_0($p0, $p1) {
        $p0.setFontSize($p1);
    },
    $8y_0: function SP_UI_Timeline_BaseSelectableElement$$8y_0($p0, $p1) {
        $p0.setColor($p1);
    },
    $94_0: function SP_UI_Timeline_BaseSelectableElement$$94_0($p0, $p1) {
        $p0.setTheme($p1);
    },
    $3Z_0: function SP_UI_Timeline_BaseSelectableElement$$3Z_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$6L_0($p0, $p1);

        for (var $$arr_6 = $v_0, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
            var $v_1 = $$arr_6[$$idx_8];

            $p3($v_1, $p2);
        }
        $p4.$4v_0();
        return true;
    },
    setFontName: function SP_UI_Timeline_BaseSelectableElement$setFontName(itemFormats, textStyles, fontName, selMan) {
        return this.$3Z_0(itemFormats, textStyles, fontName, this.$$d_$8z_0, selMan);
    },
    setFontSize: function SP_UI_Timeline_BaseSelectableElement$setFontSize(itemFormats, textStyles, fontSize, selMan) {
        return this.$3Z_0(itemFormats, textStyles, fontSize, this.$$d_$90_0, selMan);
    },
    setFontColor: function SP_UI_Timeline_BaseSelectableElement$setFontColor(itemFormats, textStyles, fontColor, selMan) {
        if (!fontColor || !fontColor.length) {
            return false;
        }
        var $v_0 = SP.UI.Timeline.Colors.$5Q(fontColor);
        var $v_1 = this.$3Z_0(itemFormats, textStyles, $v_0, this.$$d_$8y_0, selMan);

        if ($v_1) {
            var $v_2 = SP.UI.Timeline.Colors.$60(fontColor);
            var $v_3;

            if ($v_2) {
                $v_3 = $v_2;
            }
            else {
                $v_3 = '0000';
            }
            $v_1 = this.$3Z_0(itemFormats, textStyles, $v_3, this.$$d_$94_0, selMan);
        }
        return $v_1;
    },
    setBkgdColor: function SP_UI_Timeline_BaseSelectableElement$setBkgdColor(itemFormats, bkgdColor, selMan) {
        if (this.setBkgdColorRaw(itemFormats, bkgdColor)) {
            selMan.$4v_0();
            return true;
        }
        return false;
    },
    setBkgdColorRaw: function SP_UI_Timeline_BaseSelectableElement$setBkgdColorRaw(itemFormats, bkgdColor) {
        if (!bkgdColor || !bkgdColor.length) {
            return false;
        }
        var $v_0 = SP.UI.Timeline.Colors.$5Q(bkgdColor);
        var $v_1 = this.modifiableItemFormat(itemFormats);
        var $v_2 = SP.UI.Timeline.RGB.rgbFromString($v_0);
        var $v_3 = SP.UI.Timeline.HSL.hsLfromRGB($v_2);
        var $v_4 = $v_3.lightenHSL();
        var $v_5 = $v_3.darkenHSL();

        $v_1.setColor($v_2.asARGBstring());
        $v_1.setLightColor((SP.UI.Timeline.HSL.rgBfromHSL($v_4)).asARGBstring());
        $v_1.setDarkColor((SP.UI.Timeline.HSL.rgBfromHSL($v_5)).asARGBstring());
        var $v_6 = SP.UI.Timeline.Colors.$60(bkgdColor);

        if (!$v_6) {
            $v_1.setTheme('0000');
        }
        else {
            $v_1.setTheme($v_6);
        }
        return true;
    },
    modifiableItemFormat: function SP_UI_Timeline_BaseSelectableElement$modifiableItemFormat(itemFormats) {
        var $v_0 = itemFormats.$81_0(this.$b_0, this.get_itemType());

        if ($v_0 !== this.$b_0) {
            this.updateFormatNumber($v_0);
        }
        return itemFormats.getFormat($v_0, this.get_itemType());
    },
    $6L_0: function SP_UI_Timeline_BaseSelectableElement$$6L_0($p0, $p1) {
        var $v_0 = this.modifiableItemFormat($p0);
        var $v_1 = $v_0.$5w_0($p0, this.get_itemType(), $p1);

        return [$v_1];
    },
    clean: function SP_UI_Timeline_BaseSelectableElement$clean(graphics) {
    },
    cleanAll: function SP_UI_Timeline_BaseSelectableElement$cleanAll() {
    },
    dispose: function SP_UI_Timeline_BaseSelectableElement$dispose() {
        this.cleanAll();
    }
};
SP.UI.Timeline.CalloutElement = function SP_UI_Timeline_CalloutElement() {
    this.$4_2 = new (SP.UI.Timeline.PhysicalElementsContainer.$$(SP.UI.Timeline.CalloutPhysical))();
    SP.UI.Timeline.CalloutElement.initializeBase(this);
    this.$o_2 = -1;
};
SP.UI.Timeline.CalloutElement.create = function SP_UI_Timeline_CalloutElement$create(itemFormatter) {
    var $v_0 = new SP.UI.Timeline.CalloutElement();

    $v_0.initializeBaseProperties(itemFormatter);
    $v_0.$9_2 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(itemFormatter, 'top', SP.UI.Timeline.Utilities.TimelineViewDefaults.$4D);
    $v_0.$C_2 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'y', SP.UI.Timeline.Utilities.TimelineViewDefaults.$5Y);
    $v_0.$Y_2 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'x', SP.UI.Timeline.Utilities.TimelineViewDefaults.$5X);
    $v_0.$O_2 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'h', SP.UI.Timeline.Utilities.TimelineViewDefaults.$5W);
    return $v_0;
};
SP.UI.Timeline.CalloutElement.prototype = {
    $9_2: false,
    $C_2: 0,
    $Y_2: 0,
    $O_2: 0,
    $n_2: 0,
    $o_2: 0,
    $t_2: 0,
    $17_2: false,
    serialize: function SP_UI_Timeline_CalloutElement$serialize() {
        var $v_0 = '<{0} {1}{2}=\"{3}\" {4}=\"{5}\" {6}=\"{7}\" ';

        if (this.$9_2 !== SP.UI.Timeline.Utilities.TimelineViewDefaults.$4D) {
            $v_0 += '{8}=\"{9}\" ';
        }
        $v_0 += '/>';
        return String.format($v_0, 'ft', this.serializedBaseFields(), 'y', SP.UI.Timeline.TimelineControl.$2Q(this.$C_2), 'x', SP.UI.Timeline.TimelineControl.$2Q(this.$Y_2), 'h', SP.UI.Timeline.TimelineControl.$2Q(this.$O_2), 'top', SP.UI.Timeline.TimelineControl.$4N(this.$9_2));
    },
    $3I_2: function SP_UI_Timeline_CalloutElement$$3I_2($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (!$v_0) {
            $p0.val = false;
            $p1.val = ($p2.val = ($p3.val = ($p4.val = 0)));
            return false;
        }
        $p0.val = this.$9_2;
        $p1.val = this.$y_2($v_0);
        $p2.val = this.$1l_2($v_0);
        $p3.val = this.get_$2P_2();
        $p4.val = $p3.val + (this.$9_2 ? -this.$t_2 : this.$t_2);
        return true;
    },
    $21_2: function SP_UI_Timeline_CalloutElement$$21_2($p0) {
        return this.$1M_2($p0) + this.$Y_2;
    },
    $1M_2: function SP_UI_Timeline_CalloutElement$$1M_2($p0) {
        return $p0.$2F_1 + $p0.$1b_1 / 2;
    },
    $5y_2: function SP_UI_Timeline_CalloutElement$$5y_2($p0) {
        return this.$3L_2($p0) + (this.$17_2 ? -this.$Y_2 : this.$Y_2);
    },
    $3L_2: function SP_UI_Timeline_CalloutElement$$3L_2($p0) {
        var $v_0 = this.$1M_2($p0);

        return this.$17_2 ? $p0.$F_1 - $v_0 : $v_0;
    },
    get_$6g_2: function SP_UI_Timeline_CalloutElement$get_$6g_2() {
        return this.get_$6h_2() + this.$C_2;
    },
    get_$6h_2: function SP_UI_Timeline_CalloutElement$get_$6h_2() {
        if (this.$9_2) {
            return this.$n_2 - this.$O_2;
        }
        else {
            return this.$n_2 + this.$O_2;
        }
    },
    get_$6F_2: function SP_UI_Timeline_CalloutElement$get_$6F_2() {
        return this.get_minorPosition();
    },
    set_$6F_2: function SP_UI_Timeline_CalloutElement$set_$6F_2($p0) {
        this.$C_2 = $p0 + (this.$9_2 ? this.$O_2 : -this.$O_2);
        return $p0;
    },
    $y_2: function SP_UI_Timeline_CalloutElement$$y_2($p0) {
        var $v_0 = this.$21_2($p0) - this.$o_2 / 2;

        if ($v_0 <= 0) {
            return 0;
        }
        if ($v_0 + this.$o_2 > $p0.$F_1) {
            return $p0.$F_1 - this.$o_2;
        }
        return $v_0;
    },
    $1l_2: function SP_UI_Timeline_CalloutElement$$1l_2($p0) {
        return this.$y_2($p0) + this.$o_2;
    },
    get_$2P_2: function SP_UI_Timeline_CalloutElement$get_$2P_2() {
        return this.get_$6g_2();
    },
    get_$4k_2: function SP_UI_Timeline_CalloutElement$get_$4k_2() {
        if (this.$9_2) {
            return this.$n_2 - this.$O_2;
        }
        else {
            return this.$n_2 + this.$O_2;
        }
    },
    get_$3T_2: function SP_UI_Timeline_CalloutElement$get_$3T_2() {
        if (this.$9_2) {
            return this.get_$2P_2() - this.$t_2;
        }
        else {
            return this.get_$2P_2() + this.$t_2;
        }
    },
    get_$73_2: function SP_UI_Timeline_CalloutElement$get_$73_2() {
        return this.get_$3T_2();
    },
    $2p_2: function SP_UI_Timeline_CalloutElement$$2p_2() {
        var $v_0 = this.$4_2.getAllPhysicalElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            if (this.$9_2) {
                ($v_2.get_$1i_1()).className = 'ms-tl-calloutBracketTop';
                ($v_2.get_$j_1()).className = 'ms-tl-calloutBracketTop-resize';
            }
            else {
                ($v_2.get_$1i_1()).className = 'ms-tl-calloutBracketBottom';
                ($v_2.get_$j_1()).className = 'ms-tl-calloutBracketBottom-resize';
            }
        }
    },
    get_itemType: function SP_UI_Timeline_CalloutElement$get_itemType() {
        return 1;
    },
    get_labelClassName: function SP_UI_Timeline_CalloutElement$get_labelClassName() {
        return 'ms-tl-calloutLabelTitle';
    },
    get_dateClassName: function SP_UI_Timeline_CalloutElement$get_dateClassName() {
        return 'ms-tl-calloutLabelDate';
    },
    createSuperToolTipContents: function SP_UI_Timeline_CalloutElement$createSuperToolTipContents(title, startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createToolTipContentsTwoDates(title, startTime, endTime, dateFormatString);
    },
    createDateString: function SP_UI_Timeline_CalloutElement$createDateString(startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createDateStringTwoParts(startTime, endTime, dateFormatString);
    },
    getTextContainingElement: function SP_UI_Timeline_CalloutElement$getTextContainingElement(graphics) {
        return (this.$4_2.getPhysicalElement(graphics)).get_$M_1();
    },
    setHorizontalPosition: function SP_UI_Timeline_CalloutElement$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (!$v_0) {
            $v_0 = new SP.UI.Timeline.CalloutPhysical();
        }
        $v_0.$F_1 = mainAreaWidth;
        var $v_1 = this.calculateRenderTime(this.$6_1, canvasMinDate, canvasMaxDate);
        var $v_2 = $v_1.renderEndTime - $v_1.renderStartTime;

        $v_0.$1b_1 = Math.floor(pixelsPerMillisecond * $v_2);
        $v_0.$2F_1 = Math.ceil(pixelsPerMillisecond * ($v_1.renderStartTime - canvasMinDate));
        this.$4_2.addPhysicalElement($v_0, SP.UI.Timeline.TimelineControl.$2);
        this.$17_2 = SP.UI.Timeline.TimelineControl.$2.get_isRtl();
    },
    get_majorPosition: function SP_UI_Timeline_CalloutElement$get_majorPosition() {
        if (this.$9_2) {
            return -1;
        }
        else {
            return 1;
        }
    },
    get_minorPosition: function SP_UI_Timeline_CalloutElement$get_minorPosition() {
        return this.$C_2 - (this.$9_2 ? this.$O_2 : -this.$O_2);
    },
    getSubPosition: function SP_UI_Timeline_CalloutElement$getSubPosition() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        return $v_0.$2F_1 + $v_0.$1b_1 / 2 + this.$Y_2;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_CalloutElement$get_pixelChannelHeight() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_CalloutElement$createPhysicalElements(container) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);
        var $v_1 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);
        var $v_2 = SP.UI.Timeline.TimelineControl.$2.CreateLine(container);
        var $v_3 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);
        var $v_4 = SP.UI.Timeline.TimelineControl.$2.CreateRect($v_3);

        $v_1.className = 'ms-tl-calloutLabel';
        $v_2.firstChild.className = 'ms-tl-calloutLine';
        $v_4.style.borderColor = 'transparent';
        $v_0.set_$M_1($v_1);
        $v_0.set_$1m_1($v_2);
        $v_0.set_$1i_1($v_3);
        $v_0.set_$j_1($v_4);
        this.$2p_2();
        SP.UI.Timeline.BaseDataboundElement.prototype.createPhysicalElements.call(this, container);
    },
    updateTextAndStyling: function SP_UI_Timeline_CalloutElement$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        SP.UI.Timeline.BaseDataboundElement.prototype.updateTextAndStyling.call(this, formats, tss, fIsAnyTaskShowing);
        var $v_0 = formats.getFormat(this.$b_0, 1);
        var $v_1 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_1.get_$1i_1()).style.borderColor = $v_0.getColor(formats, 1);
        ($v_1.get_$1m_1()).firstChild.style.backgroundColor = $v_0.getColor(formats, 1);
    },
    computeTextSizes: function SP_UI_Timeline_CalloutElement$computeTextSizes() {
        if (!this.isExplicitlySized()) {
            var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

            this.$o_2 = ($v_0.get_$M_1()).offsetWidth;
            this.$t_2 = ($v_0.get_$M_1()).offsetHeight;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_CalloutElement$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (this.$9_2) {
            this.$n_2 = -2;
            verticalOffset.val = Math.min(this.get_$73_2(), verticalOffset.val);
            verticalOffset.val = Math.min(this.get_$4k_2(), verticalOffset.val);
            nearOffset.val = Math.min(nearOffset.val, this.$y_2($v_0));
            widthFarOfNearBar.val = Math.max(widthFarOfNearBar.val, this.$1l_2($v_0));
        }
        else {
            this.$n_2 = mainAreaHeight + 1;
            heightBelowTopOfBar.val = Math.max(heightBelowTopOfBar.val, this.get_$73_2());
            heightBelowTopOfBar.val = Math.max(heightBelowTopOfBar.val, this.get_$4k_2());
            nearOffset.val = Math.min(nearOffset.val, this.$y_2($v_0));
            widthFarOfNearBar.val = Math.max(widthFarOfNearBar.val, this.$1l_2($v_0));
        }
        this.$6G_2($v_0);
    },
    movePhysicalElements: function SP_UI_Timeline_CalloutElement$movePhysicalElements() {
        var $v_0 = this.$4_2.getAllPhysicalElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            $v_2.$H_0.MoveRect(this.$y_2($v_2), this.get_$2P_2(), this.$1l_2($v_2), this.get_$3T_2(), $v_2.get_$M_1());
            var $v_3 = this.get_$6h_2();

            if ($v_2.$1b_1 < 12) {
                $v_3 = this.$n_2;
                SP.UI.Timeline.ItemTypeStatic.hideElement($v_2.get_$1i_1());
                SP.UI.Timeline.ItemTypeStatic.hideElement($v_2.get_$j_1());
            }
            else {
                SP.UI.Timeline.ItemTypeStatic.showElement($v_2.get_$1i_1());
                SP.UI.Timeline.ItemTypeStatic.showElement($v_2.get_$j_1());
                $v_2.$H_0.MoveRect($v_2.$2F_1, this.$n_2, $v_2.$2F_1 + $v_2.$1b_1, this.get_$4k_2(), $v_2.get_$1i_1());
                if (this.$9_2) {
                    $v_2.$H_0.MoveRect(-1, -2, $v_2.$1b_1 - 1, -2 + 7, $v_2.get_$j_1());
                }
                else {
                    $v_2.$H_0.MoveRect(-1, this.$O_2 + 1, $v_2.$1b_1 - 1, this.$O_2 + 1 - 7, $v_2.get_$j_1());
                }
            }
            var $v_4 = this.$9_2 ? 1 : 0;

            $v_2.$H_0.MoveLine(this.$5y_2($v_2), this.get_$6g_2() + $v_4, this.$3L_2($v_2), $v_3, $v_2.get_$1m_1());
        }
    },
    getPhysicalElements: function SP_UI_Timeline_CalloutElement$getPhysicalElements(graphics) {
        var $v_0 = this.$4_2.getPhysicalElement(graphics);

        if ($v_0) {
            return $v_0;
        }
        else {
            return null;
        }
    },
    showAsSelected: function SP_UI_Timeline_CalloutElement$showAsSelected() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_0.get_$M_1()).style.borderColor = SP.UI.Timeline.Colors.get_colorForSelected();
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsSelected.call(this);
    },
    showAsNotSelected: function SP_UI_Timeline_CalloutElement$showAsNotSelected() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_0.get_$M_1()).style.borderColor = 'transparent';
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsNotSelected.call(this);
    },
    $2W_2: null,
    $6d_2: null,
    $6b_2: null,
    $6Q_2: null,
    $22_2: null,
    $J_2: null,
    $v_2: false,
    $w_2: false,
    $z_2: 0,
    $1B_2: 0,
    $2Y_2: 0,
    $2Z_2: 0,
    $f_2: 0,
    $2S_2: 0,
    addSelectionDetectionHandlers: function SP_UI_Timeline_CalloutElement$addSelectionDetectionHandlers(selMan) {
        SP.UI.Timeline.BaseSelectableElement.prototype.addSelectionDetectionHandlers.call(this, selMan);
        var $$t_I = this;

        this.$2W_2 = function($p1_0) {
            $$t_I.$2U_2($p1_0, selMan, false);
        };
        var $$t_J = this;

        this.$6d_2 = function($p1_0) {
            $$t_J.$8U_2($p1_0, selMan);
        };
        var $$t_K = this;

        this.$6b_2 = function($p1_0) {
            $$t_K.$8Q_2($p1_0, selMan);
        };
        var $$t_L = this;

        this.$6Q_2 = function($p1_0) {
            $$t_L.$6S_2($p1_0, selMan, false);
        };
        this.$22_2 = this.$$d_onDblClick;
        var $v_0 = this.$4_2.getPhysicalElement(selMan.get_graphics());

        $v_0.$1w_0 = selMan;
        $addHandler($v_0.get_$M_1(), 'mousedown', this.$2W_2);
        $addHandler($v_0.get_$j_1(), 'mouseover', this.$6d_2);
        $addHandler($v_0.get_$j_1(), 'mouseout', this.$6b_2);
        $addHandler($v_0.get_$j_1(), 'mousedown', this.$6Q_2);
        $addHandler($v_0.get_$M_1(), 'dblclick', this.$22_2);
        if (!selMan.get_$16_0()) {
            var $$t_M = this, $$t_N = this, $$t_O = this;

            XUI.Touch.CreateTouchManager($v_0.get_$M_1(), function($p1_0, $p1_1) {
                $$t_M.$2U_2($p1_0, selMan, true);
            }, function($p1_0, $p1_1, $p1_2) {
                $$t_N.$2X_2($p1_0, selMan, true);
            }, function($p1_0) {
                $$t_O.$2V_2($p1_0, selMan);
            }, null, null);
            var $$t_P = this, $$t_Q = this, $$t_R = this;

            XUI.Touch.CreateTouchManager($v_0.get_$j_1(), function($p1_0, $p1_1) {
                $$t_P.$6S_2($p1_0, selMan, true);
            }, function($p1_0, $p1_1, $p1_2) {
                $$t_Q.$6R_2($p1_0, selMan);
            }, function($p1_0) {
                $$t_R.$6P_2($p1_0, selMan);
            }, null, null);
        }
    },
    $2U_2: function SP_UI_Timeline_CalloutElement$$2U_2($p0, $p1, $p2) {
        if ($p1.get_$16_0()) {
            if (!$p2) {
                this.onClickReadOnlyDraggable($p0, $p1);
            }
            return;
        }
        var $v_0 = $p0.target;

        if (!$v_0) {
            return;
        }
        this.setFocus($p1.get_graphics());
        this.onStartDrag($v_0, $p1, $p2);
        this.$J_2 = XUI.Capture.GetEventLocation($p0);
        this.$z_2 = this.$Y_2;
        this.$1B_2 = this.$C_2;
        this.$w_2 = this.$9_2;
        this.$2Y_2 = this.$z_2;
        this.$2Z_2 = this.$1B_2;
        this.$f_2 = $p1.get_mainAreaHeight();
        this.$v_2 = true;
        if (!$p2) {
            var $$t_6 = this, $$t_7 = this;

            XUI.Capture.SetCapture($v_0, function($p1_0) {
                $$t_6.$2X_2($p1_0, $p1, false);
                XUI.Capture.StopEvent($p1_0);
            }, function($p1_0) {
                $$t_7.$2V_2($p1_0, $p1);
                XUI.Capture.StopEvent($p1_0);
            });
            XUI.Capture.StopEvent($p0);
        }
    },
    $2X_2: function SP_UI_Timeline_CalloutElement$$2X_2($p0, $p1, $p2) {
        this.closeSuperToolTipIfVisible();
        var $v_0 = this.$4_2.getPhysicalElement($p1.get_graphics());
        var $v_1 = XUI.Capture.GetEventLocation($p0);

        if (this.$v_2 && (this.$J_2.x !== $v_1.x || this.$J_2.y !== $v_1.y)) {
            this.$v_2 = false;
            this.$z_2 += this.$y_2($v_0) + this.$o_2 / 2 - this.$21_2($v_0);
        }
        this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_1, $v_0);
        if (this.$9_2) {
            if (this.get_$3T_2() > this.$f_2 / 2 + 1) {
                this.$9_2 = false;
                this.$n_2 = this.$f_2;
                this.$J_2.y += this.$3d_2(this.$f_2);
                this.$2p_2();
                this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_1, $v_0);
            }
        }
        else {
            if (this.get_$3T_2() < this.$f_2 / 2 - 1) {
                this.$9_2 = true;
                this.$n_2 = 0;
                this.$J_2.y -= this.$3d_2(this.$f_2);
                this.$2p_2();
                this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_1, $v_0);
            }
        }
        if ($p2) {
            $p0.preventDefault();
        }
        this.movePhysicalElements();
    },
    $2V_2: function SP_UI_Timeline_CalloutElement$$2V_2($p0, $p1) {
        if (this.$9_2 && this.get_$2P_2() > 0 || !this.$9_2 && this.get_$2P_2() < this.$f_2) {
            var $v_0 = this.$9_2 !== this.$w_2;

            this.$n_2 = this.$9_2 ? 0 : this.$f_2;
            this.$Y_2 = this.$2Y_2;
            this.$C_2 = this.$2Z_2;
            if ($v_0) {
                this.$9_2 = this.$w_2;
                this.$2p_2();
            }
            $p1.$6T_0();
        }
        this.onEndDrag($p0.target, this.$v_2);
        if (this.$9_2 !== this.$w_2 || this.$Y_2 !== this.$2Y_2 || this.$C_2 !== this.$2Z_2) {
            $p1.$23_0();
        }
    },
    $3d_2: function SP_UI_Timeline_CalloutElement$$3d_2($p0) {
        var $v_0 = $p0 + 2 * this.$O_2 + this.$t_2;

        return $v_0;
    },
    $2K_2: function SP_UI_Timeline_CalloutElement$$2K_2($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$17_2 ? $p2.x - $p3.x : $p3.x - $p2.x;

        this.$Y_2 = $p0 + $v_0;
        this.$6G_2($p4);
        if (Math.abs(this.$Y_2) < 10) {
            this.$Y_2 = 0;
        }
        this.$C_2 = $p1 + ($p3.y - $p2.y);
    },
    $6G_2: function SP_UI_Timeline_CalloutElement$$6G_2($p0) {
        var $v_0 = this.$21_2($p0);

        if ($v_0 < 0) {
            this.$Y_2 = -this.$1M_2($p0);
        }
        else if ($v_0 > $p0.$F_1) {
            this.$Y_2 = $p0.$F_1 - this.$1M_2($p0);
        }
    },
    $8U_2: function SP_UI_Timeline_CalloutElement$$8U_2($p0, $p1) {
        var $v_0 = ($p1.get_itemFormats()).getFormat(this.$b_0, 1);

        ((this.$4_2.getPhysicalElement($p1.get_graphics())).get_$j_1()).style.borderColor = $v_0.getColor($p1.get_itemFormats(), 1);
    },
    $8Q_2: function SP_UI_Timeline_CalloutElement$$8Q_2($p0, $p1) {
        ((this.$4_2.getPhysicalElement($p1.get_graphics())).get_$j_1()).style.borderColor = 'transparent';
    },
    $6S_2: function SP_UI_Timeline_CalloutElement$$6S_2($p0, $p1, $p2) {
        if ($p1.get_$16_0()) {
            if (!$p2) {
                this.onClickReadOnlyDraggable($p0, $p1);
            }
            return;
        }
        var $v_0 = $p0.target;

        if ($v_0) {
            this.setFocus($p1.get_graphics());
            this.onStartResize($v_0, this.$9_2 ? 0 : 1, $p1);
            this.$J_2 = XUI.Capture.GetEventLocation($p0);
            this.$w_2 = this.$9_2;
            this.$2S_2 = this.$O_2;
            if (!$p2) {
                var $$t_6 = this, $$t_7 = this;

                XUI.Capture.SetCapture($v_0, function($p1_0) {
                    $$t_6.$6R_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                }, function($p1_0) {
                    $$t_7.$6P_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                });
            }
            XUI.Capture.StopEvent($p0);
        }
    },
    $6R_2: function SP_UI_Timeline_CalloutElement$$6R_2($p0, $p1) {
        this.closeSuperToolTipIfVisible();
        var $v_0 = XUI.Capture.GetEventLocation($p0);
        var $v_1 = $v_0.y - this.$J_2.y;

        if (this.$9_2) {
            this.$O_2 = Math.max(7, this.$2S_2 - $v_1);
        }
        else {
            this.$O_2 = Math.max(7, this.$2S_2 + $v_1);
        }
        var $v_2 = false;
        var $v_3 = $p1.get_mainAreaHeight();
        var $v_4 = this.$2S_2 + this.$n_2;

        if (this.$9_2) {
            if (-$v_4 + $v_1 > $v_3 / 2 + 1) {
                $v_2 = true;
            }
        }
        else {
            if ($v_4 + $v_1 < $v_3 / 2 - 1) {
                $v_2 = true;
            }
        }
        if ($v_2) {
            var $v_5 = $v_3 + this.$2S_2 * 2;

            this.$9_2 = !this.$9_2;
            this.$n_2 = this.$9_2 ? 0 : $v_3;
            this.$J_2.y += this.$9_2 ? -$v_5 : $v_5;
            this.$2p_2();
            this.$C_2 = -this.$C_2;
        }
        this.movePhysicalElements();
    },
    $6P_2: function SP_UI_Timeline_CalloutElement$$6P_2($p0, $p1) {
        this.onEndResize($p0.target);
        if (this.$w_2 !== this.$9_2 || this.$2S_2 !== this.$O_2) {
            $p1.$23_0();
        }
    },
    $4j_2: function SP_UI_Timeline_CalloutElement$$4j_2($p0) {
        var $v_0 = new SP.UI.Timeline.CalloutElement();

        SP.UI.Timeline.BaseDataboundElement.prototype.copyShallowCloneFields.call(this, $v_0, $p0);
        $v_0.$C_2 = this.$C_2;
        $v_0.$Y_2 = this.$Y_2;
        $v_0.$O_2 = this.$O_2;
        $v_0.$9_2 = this.$9_2;
        $v_0.$12_1 = true;
        return $v_0;
    },
    getAllPhysicalElements: function SP_UI_Timeline_CalloutElement$getAllPhysicalElements() {
        return this.$4_2.getAllPhysicalElements();
    },
    clean: function SP_UI_Timeline_CalloutElement$clean(graphics) {
        SP.UI.Timeline.BaseDataboundElement.prototype.clean.call(this, graphics);
        this.$4_2.removePhysicalElement(graphics);
    }
};
SP.UI.Timeline.ConnectedTimelineDataSource = function SP_UI_Timeline_ConnectedTimelineDataSource() {
    SP.UI.Timeline.ConnectedTimelineDataSource.initializeBase(this);
};
SP.UI.Timeline.ConnectedTimelineDataSource.prototype = {
    $2z_1: false,
    $W_1: null,
    $3q_1: null,
    $1Y_1: null,
    Init: function SP_UI_Timeline_ConnectedTimelineDataSource$Init(jsObject) {
        this.$1Y_1 = jsObject;
        this.$1Y_1.SetConnectedDataSource(this);
    },
    get_IsReadOnly: function SP_UI_Timeline_ConnectedTimelineDataSource$get_IsReadOnly() {
        return !this.$1Y_1 ? false : this.$1Y_1.get_IsReadOnly();
    },
    setItemRemovedCallback: function SP_UI_Timeline_ConnectedTimelineDataSource$setItemRemovedCallback(itemRemovedCallback) {
        this.$3q_1 = itemRemovedCallback;
    },
    RetrieveData: function SP_UI_Timeline_ConnectedTimelineDataSource$RetrieveData() {
        this.$W_1 = this.$1Y_1.RetrieveData();
        return this.$W_1;
    },
    AddVisibleItem: function SP_UI_Timeline_ConnectedTimelineDataSource$AddVisibleItem(uid) {
        this.AddVisibleItemWithFilter(uid, null);
    },
    AddVisibleItemWithFilter: function SP_UI_Timeline_ConnectedTimelineDataSource$AddVisibleItemWithFilter(uid, filterUid) {
        if (this.$W_1 && this.$W_1.tlViewData && !this.get_IsReadOnly()) {
            this.$W_1.tlViewData.addVisibleItemWithFilter(uid, filterUid);
            if (!this.$2z_1) {
                this.$W_1.fireOnVisibleItemChanged();
            }
        }
    },
    Save: function SP_UI_Timeline_ConnectedTimelineDataSource$Save() {
        this.$1Y_1.Save();
    },
    RemoveItem: function SP_UI_Timeline_ConnectedTimelineDataSource$RemoveItem(uid) {
        if (this.$W_1 && this.$W_1.tlViewData && !this.get_IsReadOnly()) {
            this.$W_1.tlViewData.removeItem(uid);
            this.$1Y_1.NotifyItemRemoved(uid);
            if (!this.$2z_1) {
                this.$W_1.fireOnVisibleItemChanged();
            }
        }
    },
    $7U_1: function SP_UI_Timeline_ConnectedTimelineDataSource$$7U_1($p0) {
        this.$2z_1 = true;
        $p0(this);
        this.$2z_1 = false;
        this.$W_1.fireOnVisibleItemChanged();
    },
    notifyItemRemoved: function SP_UI_Timeline_ConnectedTimelineDataSource$notifyItemRemoved(uid) {
        if (this.$3q_1) {
            this.$3q_1.RemoveItemFromTimeline(uid);
        }
        else {
            this.$1Y_1.NotifyItemRemoved(uid);
        }
    }
};
SP.UI.Timeline.GraphicsFactory = function SP_UI_Timeline_GraphicsFactory() {
};
SP.UI.Timeline.GraphicsFactory.getGraphicsRenderer = function SP_UI_Timeline_GraphicsFactory$getGraphicsRenderer(canvas, width, height, isRtl, mode) {
    if (!canvas) {
        return null;
    }
    var $v_0 = new SP.UI.Timeline.HtmlGraphicsRenderer(canvas, isRtl, mode === 1, SP.UI.Timeline.GraphicsFactory.$3v);

    SP.UI.Timeline.GraphicsFactory.$3v += 1;
    $v_0.set_width(width);
    $v_0.set_height(height);
    return $v_0;
};
SP.UI.Timeline.GraphicsFactory.GraphicsMode = function() {
};
SP.UI.Timeline.GraphicsFactory.GraphicsMode.prototype = {
    standard: 1,
    mobile: 2
};
SP.UI.Timeline.GraphicsFactory.GraphicsMode.registerEnum('SP.UI.Timeline.GraphicsFactory.GraphicsMode', false);
SP.UI.Timeline.HtmlGraphicsRenderer = function SP_UI_Timeline_HtmlGraphicsRenderer($p0, $p1, $p2, $p3) {
    this.$5h_0 = Math.PI * 2 / 360;
    this.get_height = this.get_Height;
    this.set_height = this.set_Height;
    this.get_width = this.get_Width;
    this.set_width = this.set_Width;
    this.$28_0 = $p0;
    this.$43_0 = $p1;
    this.$53_0 = $p3;
    this.$42_0 = 0;
    this.$5C_0 = $p2;
};
SP.UI.Timeline.HtmlGraphicsRenderer.$69 = function SP_UI_Timeline_HtmlGraphicsRenderer$$69() {
    var $v_0 = document.documentMode;

    return Sys.Browser.agent === Sys.Browser.InternetExplorer && (!$v_0 || $v_0 < 9);
};
SP.UI.Timeline.HtmlGraphicsRenderer.prototype = {
    $28_0: null,
    $43_0: false,
    $53_0: 0,
    $42_0: 0,
    $5C_0: false,
    get_shouldCreateSuperToolTip: function SP_UI_Timeline_HtmlGraphicsRenderer$get_shouldCreateSuperToolTip() {
        return this.$5C_0;
    },
    get_isRtl: function SP_UI_Timeline_HtmlGraphicsRenderer$get_isRtl() {
        return this.$43_0;
    },
    get_id: function SP_UI_Timeline_HtmlGraphicsRenderer$get_id() {
        return this.$53_0;
    },
    get_reserveWidth: function SP_UI_Timeline_HtmlGraphicsRenderer$get_reserveWidth() {
        return this.$42_0;
    },
    set_reserveWidth: function SP_UI_Timeline_HtmlGraphicsRenderer$set_reserveWidth($p0) {
        this.$42_0 = $p0;
        return $p0;
    },
    get_Height: function SP_UI_Timeline_HtmlGraphicsRenderer$get_Height() {
        return this.$28_0.clientHeight;
    },
    set_Height: function SP_UI_Timeline_HtmlGraphicsRenderer$set_Height($p0) {
        this.$28_0.style.height = SP.UI.Timeline.Measurer.getPixelString($p0);
        return $p0;
    },
    get_Width: function SP_UI_Timeline_HtmlGraphicsRenderer$get_Width() {
        return this.$28_0.clientWidth;
    },
    set_Width: function SP_UI_Timeline_HtmlGraphicsRenderer$set_Width($p0) {
        this.$28_0.style.width = SP.UI.Timeline.Measurer.getPixelString($p0);
        return $p0;
    },
    $3F_0: function SP_UI_Timeline_HtmlGraphicsRenderer$$3F_0($p0, $p1) {
        if ($p0) {
            $p0.appendChild($p1);
        }
        else {
            this.$28_0.appendChild($p1);
        }
    },
    CreateRect: function SP_UI_Timeline_HtmlGraphicsRenderer$CreateRect($p0) {
        var $v_0 = document.createElement('div');

        this.$3F_0($p0, $v_0);
        return $v_0;
    },
    MoveRect: function SP_UI_Timeline_HtmlGraphicsRenderer$MoveRect($p0, $p1, $p2, $p3, $p4) {
        if ($p0 > $p2) {
            var $v_0 = $p0;

            $p0 = $p2;
            $p2 = $v_0;
        }
        if ($p1 > $p3) {
            var $v_1 = $p1;

            $p1 = $p3;
            $p3 = $v_1;
        }
        $p4.style.width = SP.UI.Timeline.Measurer.getPixelString($p2 - $p0);
        $p4.style.height = SP.UI.Timeline.Measurer.getPixelString($p3 - $p1);
        $p4.style.top = SP.UI.Timeline.Measurer.getPixelString($p1);
        if (!this.$43_0) {
            $p4.style.left = SP.UI.Timeline.Measurer.getPixelString($p0);
        }
        else {
            $p4.style.right = SP.UI.Timeline.Measurer.getPixelString($p0);
        }
    },
    CreateLine: function SP_UI_Timeline_HtmlGraphicsRenderer$CreateLine($p0) {
        var $v_0 = document.createElement('div');

        $v_0.style.position = 'absolute';
        var $v_1 = document.createElement('div');
        var $v_2 = Sys.Browser.agent === Sys.Browser.InternetExplorer;

        if ($v_2) {
            $v_0.style.overflow = 'hidden';
        }
        if (SP.UI.Timeline.HtmlGraphicsRenderer.$69()) {
            $v_1.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\')';
        }
        this.$3F_0($p0, $v_0);
        this.$3F_0($v_0, $v_1);
        return $v_0;
    },
    MoveLine: function SP_UI_Timeline_HtmlGraphicsRenderer$MoveLine($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $p4.firstChild;
        var $v_1 = $p2 - $p0;
        var $v_2 = $p3 - $p1;
        var $v_3 = Math.sqrt($v_1 * $v_1 + $v_2 * $v_2);
        var $v_4 = Math.round(Math.abs($v_1 / 2));
        var $v_5 = Math.round(Math.abs($v_2 / 2));
        var $v_6 = Math.round($v_4 - $v_3 / 2);
        var $v_7 = Math.round($v_5);
        var $v_8 = 0;

        if ($v_1) {
            var $v_9 = 0;

            $v_9 = Math.atan($v_2 / $v_1);
            $v_8 = Math.round($v_9 / this.$5h_0);
        }
        else {
            $v_8 = 90;
        }
        $p4.style.width = SP.UI.Timeline.Measurer.getPixelString(Math.max(Math.abs($v_1), 1) + 10);
        $p4.style.height = SP.UI.Timeline.Measurer.getPixelString(Math.max(Math.abs($v_2), 1) + 10);
        $p4.style.top = SP.UI.Timeline.Measurer.getPixelString(Math.min($p1, $p3) - 5);
        $p4.style.left = SP.UI.Timeline.Measurer.getPixelString(Math.min($p0, $p2) - 5);
        $v_0.style.width = SP.UI.Timeline.Measurer.getPixelString($v_3);
        $v_0.style.top = SP.UI.Timeline.Measurer.getPixelString($v_7 + 5);
        $v_0.style.left = SP.UI.Timeline.Measurer.getPixelString($v_6 + 5);
        XUI.Html.RotateElement($v_0, $v_8, $v_4, $v_5, $v_3, 1);
        if (SP.UI.Timeline.HtmlGraphicsRenderer.$69()) {
            $v_0.style.top = SP.UI.Timeline.Measurer.getPixelString(5);
            if (XUI.Html.GetDirection() === 'ltr') {
                $v_0.style.left = SP.UI.Timeline.Measurer.getPixelString(5);
            }
            else {
                $v_0.style.right = SP.UI.Timeline.Measurer.getPixelString(5);
            }
        }
    },
    CreateDiamond: function SP_UI_Timeline_HtmlGraphicsRenderer$CreateDiamond($p0) {
        var $v_0 = document.createElement('img');

        $v_0.src = SP.UI.Timeline.Utilities.TimelineConstants.$63;
        $v_0.className = 'ms-tl-milestonediamond';
        var $v_1 = document.createElement('div');

        $v_1.appendChild($v_0);
        this.$3F_0($p0, $v_1);
        return $v_1;
    },
    MoveDiamond: function SP_UI_Timeline_HtmlGraphicsRenderer$MoveDiamond($p0, $p1, $p2, $p3, $p4) {
        this.MoveRect($p0, $p1, $p2, $p3, $p4);
    }
};
SP.UI.Timeline.AllVisibleItemsCollection = function SP_UI_Timeline_AllVisibleItemsCollection() {
};
SP.UI.Timeline.AllVisibleItemsCollection.prototype = {
    $7_0: null,
    get_$T_0: function SP_UI_Timeline_AllVisibleItemsCollection$get_$T_0() {
        if (!this.$7_0) {
            this.$7_0 = [];
        }
        return this.$7_0;
    },
    get_item: function SP_UI_Timeline_AllVisibleItemsCollection$get_item(index) {
        return (this.get_$T_0())[index];
    },
    get_length: function SP_UI_Timeline_AllVisibleItemsCollection$get_length() {
        return (this.get_$T_0()).length;
    },
    add: function SP_UI_Timeline_AllVisibleItemsCollection$add(element) {
        Array.add(this.get_$T_0(), element);
    },
    sort: function SP_UI_Timeline_AllVisibleItemsCollection$sort() {
        var $$t_4 = this;

        (this.get_$T_0()).sort(function($p1_0, $p1_1) {
            var $v_0 = $p1_0;
            var $v_1 = $p1_1;

            if ($v_0.get_majorPosition() > $v_1.get_majorPosition()) {
                return 1;
            }
            if ($v_0.get_majorPosition() < $v_1.get_majorPosition()) {
                return -1;
            }
            if ($v_0.get_minorPosition() > $v_1.get_minorPosition()) {
                return 1;
            }
            if ($v_0.get_minorPosition() < $v_1.get_minorPosition()) {
                return -1;
            }
            if ($v_0.getSubPosition() > $v_1.getSubPosition()) {
                return 1;
            }
            if ($v_0.getSubPosition() < $v_1.getSubPosition()) {
                return -1;
            }
            return 0;
        });
    }
};
SP.UI.Timeline.ListTimelineDatasource = function SP_UI_Timeline_ListTimelineDatasource() {
    this.$$d_updateTimelineItem = Function.createDelegate(this, this.updateTimelineItem);
    SP.UI.Timeline.ListTimelineDatasource.initializeBase(this);
};
SP.UI.Timeline.ListTimelineDatasource.$5v = function SP_UI_Timeline_ListTimelineDatasource$$5v($p0) {
    if (!SP.UI.Timeline.ListTimelineDatasource.$2d) {
        SP.UI.Timeline.ListTimelineDatasource.$2d = {};
    }
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$2d[$p0];

    if (!$v_0) {
        $v_0 = {};
        SP.UI.Timeline.ListTimelineDatasource.$2d[$p0] = $v_0;
    }
    return $v_0;
};
SP.UI.Timeline.ListTimelineDatasource.$x = function SP_UI_Timeline_ListTimelineDatasource$$x($p0, $p1, $p2) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$5v($p0);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$3P($p1);
    var $v_2 = $v_0[$v_1];

    if (!$v_2 && !$p2) {
        SP.UI.Timeline.TimelineData.$97(String, $v_0, function($p1_0) {
            $v_2 = $v_0[$p1_0];
            return true;
        });
    }
    return $v_2;
};
SP.UI.Timeline.ListTimelineDatasource.$6w = function SP_UI_Timeline_ListTimelineDatasource$$6w($p0, $p1, $p2) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$5v($p0);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$3P($p1);

    $v_0[$v_1] = $p2;
};
SP.UI.Timeline.ListTimelineDatasource.$3P = function SP_UI_Timeline_ListTimelineDatasource$$3P($p0) {
    return !$p0 || $p0 === 'null' ? Strings.STS.L_Timeline_DfltViewName : $p0;
};
SP.UI.Timeline.ListTimelineDatasource.GetSelectedViewName = function SP_UI_Timeline_ListTimelineDatasource$GetSelectedViewName(propertyBag) {
    var $v_0 = null;

    if (propertyBag) {
        $v_0 = propertyBag[SP.UI.Timeline.ListTimelineDatasource.$72];
        if (!$v_0) {
            $v_0 = propertyBag[SP.UI.Timeline.ListTimelineDatasource.$3b];
        }
    }
    return SP.UI.Timeline.ListTimelineDatasource.$3P($v_0);
};
SP.UI.Timeline.ListTimelineDatasource.DoesTimelineHaveRWData = function SP_UI_Timeline_ListTimelineDatasource$DoesTimelineHaveRWData(listId, viewName) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, viewName, false);

    return !!$v_1 && !$v_1.get_$6k_0();
};
SP.UI.Timeline.ListTimelineDatasource.DoesTimelineListHaveRWData = function SP_UI_Timeline_ListTimelineDatasource$DoesTimelineListHaveRWData(listId, viewName) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, viewName, true);

    return !!$v_1 && !$v_1.get_$8H_0();
};
SP.UI.Timeline.ListTimelineDatasource.DoesTimelineHaveInterestingData = function SP_UI_Timeline_ListTimelineDatasource$DoesTimelineHaveInterestingData(listId, viewName) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, viewName, false);

    if ($v_1) {
        var $v_2 = $v_1.get_$L_0();
        var $v_3 = $v_2.tlViewData;

        if ($v_3) {
            return $v_3.get_$88_0();
        }
    }
    return false;
};
SP.UI.Timeline.ListTimelineDatasource.IsItemVisibleOnTimeline = function SP_UI_Timeline_ListTimelineDatasource$IsItemVisibleOnTimeline(listId, viewName, itemId) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, viewName, false);

    if ($v_1) {
        var $v_2 = $v_1.get_$L_0();
        var $v_3 = $v_2.tlViewData;

        return !!$v_3 && $v_3.isOnTimeline(SP.UI.Timeline.ListTimelineDatasource.$q(itemId));
    }
    return false;
};
SP.UI.Timeline.ListTimelineDatasource.IsRWTimelineAwareOfList = function SP_UI_Timeline_ListTimelineDatasource$IsRWTimelineAwareOfList(listId, viewName) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, viewName, true);

    return !!$v_1 && !$v_1.get_$6k_0();
};
SP.UI.Timeline.ListTimelineDatasource.$8m = function SP_UI_Timeline_ListTimelineDatasource$$8m($p0, $p1, $p2, $p3) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$1k in $p1 ? Date.parseInvariant($p1[SP.UI.Timeline.ListTimelineDatasource.$1k].toString()) : null;
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$1j in $p1 ? Date.parseInvariant($p1[SP.UI.Timeline.ListTimelineDatasource.$1j].toString()) : null;
    var $v_2 = SP.UI.Timeline.ListTimelineDatasource.$2O in $p1 ? $p1[SP.UI.Timeline.ListTimelineDatasource.$2O].toString() : Strings.STS.L_NoTitle;

    return SP.UI.Timeline.ListTimelineDatasource.$5j($p2, $p3, $p0.$g_0, $p1[SP.UI.Timeline.ListTimelineDatasource.$3H].toString(), $p1[SP.UI.Timeline.ListTimelineDatasource.$2N].toString(), $v_2, null, $p1[SP.UI.Timeline.ListTimelineDatasource.$4G].toString(), false, $v_0, $v_1, false, null, null);
};
SP.UI.Timeline.ListTimelineDatasource.$75 = function SP_UI_Timeline_ListTimelineDatasource$$75($p0) {
    if (!$p0) {
        return $p0;
    }
    var $v_0 = _spRegionalSettings.timeZoneInHours * 60;
    var $v_1 = _spRegionalSettings.calendarType;
    var $v_2 = new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate(), $p0.getHours(), $p0.getMinutes() + $v_0, $p0.getSeconds());

    return (SP.DateTimeUtil.IntlDate.createFromJsUtcDate($v_2, $v_1)).toJsDate();
};
SP.UI.Timeline.ListTimelineDatasource.$8n = function SP_UI_Timeline_ListTimelineDatasource$$8n($p0, $p1, $p2, $p3) {
    var $v_0 = $p1.get_item(SP.UI.Timeline.ListTimelineDatasource.$2O);
    var $v_1 = ($p1.get_fieldValues())[SP.UI.Timeline.ListTimelineDatasource.$2N];
    var $v_2 = $v_1.ToSerialized();
    var $v_3 = ($p1.get_fieldValues())[SP.UI.Timeline.ListTimelineDatasource.$3H];
    var $v_4 = $p1.get_item(SP.UI.Timeline.ListTimelineDatasource.$4G);
    var $v_5 = SP.UI.Timeline.ListTimelineDatasource.$75($p1.get_item(SP.UI.Timeline.ListTimelineDatasource.$1k));
    var $v_6 = SP.UI.Timeline.ListTimelineDatasource.$75($p1.get_item(SP.UI.Timeline.ListTimelineDatasource.$1j));

    return SP.UI.Timeline.ListTimelineDatasource.$5j($p2, $p3, $p0.$g_0, $v_3.toString(), $v_2, $v_0, null, $v_4, false, $v_5, $v_6, false, null, null);
};
SP.UI.Timeline.ListTimelineDatasource.$7p = function SP_UI_Timeline_ListTimelineDatasource$$7p($p0, $p1, $p2, $p3) {
    if (!$p0 || !$p2 || !$p3) {
        return null;
    }
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q($p0);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, $p1, false);

    if (!$v_1) {
        return null;
    }
    var $v_2 = SP.UI.Timeline.ListTimelineDatasource.$7z($v_1);

    if (!$v_2) {
        return null;
    }
    var $v_3 = new Sys.StringBuilder($v_2);

    $v_3.append('/');
    $v_3.append(_spPageContextInfo.layoutsUrl);
    $v_3.append('/listform.aspx?PageType=4&ListId=');
    $v_3.append($v_0);
    $v_3.append('&ID=');
    $v_3.append($p2);
    $v_3.append('&ContentTypeID=');
    $v_3.append($p3);
    return $v_3.toString();
};
SP.UI.Timeline.ListTimelineDatasource.$7u = function SP_UI_Timeline_ListTimelineDatasource$$7u($p0) {
    var $v_0 = $p0.url;

    $v_0 = $v_0.replace('PageType=4', 'PageType=6');
    if ($v_0.indexOf('?') < 0) {
        $v_0 = $v_0 + '?EditDates=1';
    }
    else {
        if (!$v_0.endsWith('&')) {
            $v_0 = $v_0 + '&';
        }
        $v_0 = $v_0 + 'EditDates=1';
    }
    return $v_0;
};
SP.UI.Timeline.ListTimelineDatasource.$7G = function SP_UI_Timeline_ListTimelineDatasource$$7G($p0, $p1) {
    EnsureScriptFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', function() {
        SP.UI.ModalDialog.RefreshPage($p0);
    });
};
SP.UI.Timeline.ListTimelineDatasource.$5j = function SP_UI_Timeline_ListTimelineDatasource$$5j($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11, $p12, $p13) {
    if (!$p6) {
        $p6 = SP.UI.Timeline.ListTimelineDatasource.$7p($p0, $p1, $p3, $p7);
    }
    var $v_0 = SP.UI.Timeline.TimelineDatasource.EnsureDataItem($p2, $p3, $p3, $p4, $p5, $p6, $p8, $p9, $p10, $p11, $p12, $p13);

    if ($v_0) {
        $v_0.retrieveToolTipContents = function($p1_0, $p1_1) {
            EnsureScriptFunc('hierarchytaskslist.js', 'HierarchyTaskCallout', function() {
                EnsureScriptFunc('sp.js', 'SP.ClientContext', function() {
                    var $v_3 = SP.UI.Timeline.ListTimelineDatasource.$x($p0, $p1, true);

                    if ($v_3) {
                        var $v_4 = SP.UI.Timeline.ListTimelineDatasource.$2k($v_3);

                        HierarchyTaskCallout.RetrieveCalloutContent($v_4, $p0, $p3, $p1_0, $p1_1);
                    }
                });
            });
        };
        if (SP.UI.Timeline.ListTimelineDatasource.DoesTimelineListHaveRWData($p0, $p1)) {
            $v_0.launchDialog = function() {
                EnsureScriptFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', function() {
                    var $v_1 = new SP.UI.DialogOptions();

                    $v_1.url = SP.UI.Timeline.ListTimelineDatasource.$7u($v_0);
                    $v_1.autoSize = true;
                    $v_1.allowMaximize = false;
                    $v_1.dialogReturnValueCallback = SP.UI.Timeline.ListTimelineDatasource.$7G;
                    var $v_2 = SP.UI.ModalDialog.showModalDialog($v_1);
                });
            };
        }
    }
    return $v_0;
};
SP.UI.Timeline.ListTimelineDatasource.$3J = function SP_UI_Timeline_ListTimelineDatasource$$3J($p0) {
    return !$p0 ? null : $p0.get_$L_0();
};
SP.UI.Timeline.ListTimelineDatasource.$5u = function SP_UI_Timeline_ListTimelineDatasource$$5u($p0) {
    if (!$p0) {
        return null;
    }
    if (!$p0.get_$4Y_0()) {
        $p0.set_$4Y_0(SP.UI.Timeline.ListTimelineDatasource.$5t($p0.get_$8K_0(), SP.UI.Timeline.ListTimelineDatasource.$7y($p0)));
    }
    return $p0.get_$4Y_0();
};
SP.UI.Timeline.ListTimelineDatasource.$4L = function SP_UI_Timeline_ListTimelineDatasource$$4L($p0) {
    if (!$p0) {
        return null;
    }
    if (!$p0.get_$4H_0()) {
        $p0.set_$4H_0(SP.UI.Timeline.ListTimelineDatasource.$5q(SP.UI.Timeline.ListTimelineDatasource.$5u($p0)));
    }
    return $p0.get_$4H_0();
};
SP.UI.Timeline.ListTimelineDatasource.$7z = function SP_UI_Timeline_ListTimelineDatasource$$7z($p0) {
    if (!$p0) {
        return null;
    }
    if (!$p0.get_$2q_0()) {
        $p0.set_$2q_0(_spPageContextInfo.webAbsoluteUrl);
    }
    return $p0.get_$2q_0();
};
SP.UI.Timeline.ListTimelineDatasource.$7y = function SP_UI_Timeline_ListTimelineDatasource$$7y($p0) {
    if (!$p0) {
        return null;
    }
    if (!$p0.get_$4w_0()) {
        var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$2k($p0);

        $p0.set_$4w_0($v_0.get_web());
    }
    return $p0.get_$4w_0();
};
SP.UI.Timeline.ListTimelineDatasource.$2k = function SP_UI_Timeline_ListTimelineDatasource$$2k($p0) {
    if (!$p0) {
        return null;
    }
    if (!$p0.get_$4B_0()) {
        var $v_0 = !$p0.get_$2q_0() ? SP.ClientContext.get_current() : new SP.ClientContext($p0.get_$2q_0());

        $p0.set_$4B_0($v_0);
    }
    return $p0.get_$4B_0();
};
SP.UI.Timeline.ListTimelineDatasource.$q = function SP_UI_Timeline_ListTimelineDatasource$$q($p0) {
    return (($p0.toString()).replace(new RegExp('[\\{\\}]', 'g'), '')).toLowerCase();
};
SP.UI.Timeline.ListTimelineDatasource.$5t = function SP_UI_Timeline_ListTimelineDatasource$$5t($p0, $p1) {
    return ($p1.get_lists()).getById(new SP.Guid($p0));
};
SP.UI.Timeline.ListTimelineDatasource.$5q = function SP_UI_Timeline_ListTimelineDatasource$$5q($p0) {
    var $v_0 = $p0.get_rootFolder();

    ($v_0.get_properties()).retrieve();
    return $v_0;
};
SP.UI.Timeline.ListTimelineDatasource.AddItemsToTimeline = function SP_UI_Timeline_ListTimelineDatasource$AddItemsToTimeline(listId, viewName, itemIds) {
    var $v_0 = [];
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);

    SP.UI.Timeline.ListTimelineDatasource.$5i($v_1, viewName, function($p1_0) {
        var $v_2 = itemIds.length;

        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = itemIds[$v_3];
            var $v_5 = $p1_0.getItemById($v_4.id);

            $v_5.retrieve();
            Array.add($v_0, $v_5);
        }
    }, function($p1_0, $p1_1) {
        var $v_6 = false;
        var $v_7 = $v_0.length;

        for (var $v_8 = 0; $v_8 < $v_7; $v_8++) {
            var $v_9 = $v_0[$v_8];

            if (!$v_9.get_item(SP.UI.Timeline.ListTimelineDatasource.$1k) && !$v_9.get_item(SP.UI.Timeline.ListTimelineDatasource.$1j)) {
                continue;
            }
            var $v_A = SP.UI.Timeline.ListTimelineDatasource.$8n($p1_0, $v_9, $v_1, $p1_1);

            if ($v_A) {
                $v_6 = true;
                SP.UI.Timeline.ListTimelineDatasource.$5M($p1_0, $v_A);
                $p1_0.tlViewData.addVisibleItem($v_A.uid);
            }
        }
        if (!$v_6) {
            EnsureScriptFunc('sts_strings.js', 'Strings.STS.L_Timeline_PleaseAddDates', function() {
                alert(Strings.STS.L_Timeline_PleaseAddDates);
            });
        }
    });
};
SP.UI.Timeline.ListTimelineDatasource.RemoveItemsFromTimeline = function SP_UI_Timeline_ListTimelineDatasource$RemoveItemsFromTimeline(listId, viewName, itemIds) {
    SP.UI.Timeline.ListTimelineDatasource.$5i(listId, viewName, function($p1_0) {
    }, function($p1_0, $p1_1) {
        var $v_0 = itemIds.length;

        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = itemIds[$v_1];

            $p1_0.tlViewData.removeItem($v_2.id.toString());
        }
        if ($v_0 > 0) {
            SP.UI.Timeline.ListTimelineDatasource.$3U($p1_0);
        }
    });
};
SP.UI.Timeline.ListTimelineDatasource.$5i = function SP_UI_Timeline_ListTimelineDatasource$$5i($p0, $p1, $p2, $p3) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q($p0);

    EnsureScriptFunc('SP.js', 'SP.ClientContext', function() {
        var $v_1 = (SP.ClientContext.get_current()).get_web();
        var $v_2 = SP.UI.Timeline.ListTimelineDatasource.$x($v_0, $p1, false);
        var $v_3 = false;

        if (!$v_2) {
            var $v_8 = SP.UI.Timeline.ListTimelineDatasource.$5t($v_0, $v_1);
            var $v_9 = SP.UI.Timeline.ListTimelineDatasource.$5q($v_8);
            var $v_A = false;
            var $v_B = false;

            $v_2 = new SP.UI.Timeline.ListTimelineDatasource.ListModel($v_0, new SP.UI.Timeline.TimelineData(), $v_8, $v_9, $v_1, null, SP.ClientContext.get_current(), $v_A, $v_B);
            $v_3 = true;
        }
        var $v_4 = SP.UI.Timeline.ListTimelineDatasource.$5u($v_2);
        var $v_5 = SP.UI.Timeline.ListTimelineDatasource.$4L($v_2);
        var $v_6 = SP.UI.Timeline.ListTimelineDatasource.$3J($v_2);
        var $v_7 = SP.UI.Timeline.ListTimelineDatasource.$2k($v_2);

        $p2($v_4);
        $v_7.executeQueryAsync(function($p2_0, $p2_1) {
            if (!$p1) {
                $p1 = SP.UI.Timeline.ListTimelineDatasource.GetSelectedViewName(($v_5.get_properties()).get_fieldValues());
            }
            if (!$p1) {
                $p1 = Strings.STS.L_Timeline_DfltViewName;
            }
            if ($v_3) {
                SP.UI.Timeline.ListTimelineDatasource.$6w($p0, $p1, $v_2);
                var $v_C = SP.UI.Timeline.ListTimelineDatasource.$6i($p1);

                SP.UI.Timeline.ListTimelineDatasource.$7P($v_6, $v_5, $v_C);
            }
            $p3($v_6, $p1);
            if ($v_6.get_$89_0()) {
                $v_6.fireOnVisibleItemChanged();
            }
            else {
                SP.UI.Timeline.ListTimelineDatasource.$6p($v_0, $p1);
            }
        });
    });
};
SP.UI.Timeline.ListTimelineDatasource.$6t = function SP_UI_Timeline_ListTimelineDatasource$$6t($p0) {
    $p0.minDate = Date.parseInvariant('9999-12-31 23:59:59Z');
    $p0.maxDate = Date.parseInvariant('0001-01-01 00:00:01Z');
};
SP.UI.Timeline.ListTimelineDatasource.$3U = function SP_UI_Timeline_ListTimelineDatasource$$3U($p0) {
    SP.UI.Timeline.ListTimelineDatasource.$6t($p0);
    var $$t_1, $$t_2;

    $p0.tlViewData.getDateRangeOfVisibleItems($$t_1 = {
        'val': $p0.minDate
    }, $$t_2 = {
        'val': $p0.maxDate
    }), $p0.minDate = $$t_1.val, $p0.maxDate = $$t_2.val;
};
SP.UI.Timeline.ListTimelineDatasource.$5M = function SP_UI_Timeline_ListTimelineDatasource$$5M($p0, $p1) {
    var $v_0;
    var $v_1;

    if (!$p1.endTime) {
        if (!$p1.startTime) {
            return;
        }
        else {
            $v_0 = ($v_1 = $p1.startTime);
        }
    }
    else {
        if (!$p1.startTime) {
            $v_0 = ($v_1 = $p1.endTime);
        }
        else {
            $v_0 = SP.UI.Timeline.TimelineDatasource.timeMin($p1.startTime, $p1.endTime);
            $v_1 = SP.UI.Timeline.TimelineDatasource.timeMax($p1.startTime, $p1.endTime);
        }
    }
    if (!$p0.maxDate || !$p0.minDate || $p0.maxDate.getTime() < $p0.minDate.getTime()) {
        $p0.minDate = $v_0;
        $p0.maxDate = $v_1;
    }
    else {
        $p0.maxDate = SP.UI.Timeline.TimelineDatasource.timeMax($v_1, $p0.maxDate);
        $p0.minDate = SP.UI.Timeline.TimelineDatasource.timeMin($v_0, $p0.minDate);
    }
};
SP.UI.Timeline.ListTimelineDatasource.$7P = function SP_UI_Timeline_ListTimelineDatasource$$7P($p0, $p1, $p2) {
    var $v_0 = (($p1.get_properties()).get_fieldValues())[$p2];

    if (!$p0.tlViewData) {
        $p0.tlViewData = SP.UI.Timeline.Utilities.TimelineViewData.create();
    }
    if (!$v_0 || !$v_0.length) {
        $p0.tlViewData.setFromDefault();
    }
    else {
        $p0.tlViewData.setFromString($v_0);
    }
};
SP.UI.Timeline.ListTimelineDatasource.$6p = function SP_UI_Timeline_ListTimelineDatasource$$6p($p0, $p1) {
    EnsureScriptFunc('SP.js', 'SP.ClientContext', function() {
        var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$x($p0, $p1, false);
        var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$3J($v_0);
        var $v_2 = SP.UI.Timeline.ListTimelineDatasource.$4L($v_0);
        var $v_3 = SP.UI.Timeline.ListTimelineDatasource.$2k($v_0);

        $v_3.executeQueryAsync(function($p2_0, $p2_1) {
            SP.UI.Timeline.ListTimelineDatasource.$7k($p0, $p1);
        });
    });
};
SP.UI.Timeline.ListTimelineDatasource.$7k = function SP_UI_Timeline_ListTimelineDatasource$$7k($p0, $p1) {
    var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$x($p0, $p1, false);
    var $v_1 = SP.UI.Timeline.ListTimelineDatasource.$3J($v_0);
    var $v_2 = SP.UI.Timeline.ListTimelineDatasource.$4L($v_0);
    var $v_3 = SP.UI.Timeline.ListTimelineDatasource.$2k($v_0);
    var $v_4 = SP.UI.Timeline.ListTimelineDatasource.$6i($p1);
    var $v_5;
    var $v_6 = !!(($v_2.get_properties()).get_fieldValues())[$v_4];

    if ($v_6) {
        $v_5 = ($v_2.get_properties()).get_item($v_4);
    }
    else {
        $v_5 = '';
    }
    var $v_7 = $v_1.tlViewData.serialize();

    if ($v_5 !== $v_7) {
        ($v_2.get_properties()).set_item($v_4, $v_7);
        var $v_8 = (($v_2.get_properties()).get_fieldValues())[SP.UI.Timeline.ListTimelineDatasource.$3b];

        if (!$v_8 || !$v_8.length) {
            ($v_2.get_properties()).set_item(SP.UI.Timeline.ListTimelineDatasource.$3b, Strings.STS.L_Timeline_DfltViewName);
        }
        var $v_9 = (($v_2.get_properties()).get_fieldValues())[SP.UI.Timeline.ListTimelineDatasource.$3E];
        var $v_A = '*';
        var $v_B = $p1 + $v_A;

        if (!$v_9 || !$v_9.length) {
            ($v_2.get_properties()).set_item(SP.UI.Timeline.ListTimelineDatasource.$3E, $v_B);
        }
        else if (!$v_9.startsWith($v_B)) {
            var $v_C = $v_A + $v_B;

            if ($v_9.indexOf($v_B) === -1) {
                $v_9 += $v_B;
                ($v_2.get_properties()).set_item(SP.UI.Timeline.ListTimelineDatasource.$3E, $v_9);
            }
        }
        $v_2.update();
        $v_3.executeQueryAsync(function($p1_0, $p1_1) {
        });
    }
};
SP.UI.Timeline.ListTimelineDatasource.$6i = function SP_UI_Timeline_ListTimelineDatasource$$6i($p0) {
    return 'Timeline_' + $p0;
};
SP.UI.Timeline.ListTimelineDatasource.prototype = {
    $3D_1: null,
    $1s_1: null,
    $4y_1: null,
    $2c_1: null,
    $3t_1: false,
    $3r_1: false,
    Init: function SP_UI_Timeline_ListTimelineDatasource$Init(listId, initialData, currentTaskListWebAddress, viewName) {
        this.$1s_1 = SP.UI.Timeline.ListTimelineDatasource.$q(listId);
        this.$2c_1 = initialData;
        this.$3D_1 = SP.UI.Timeline.ListTimelineDatasource.$3P(viewName);
        this.$4y_1 = currentTaskListWebAddress;
        this.$8J_1();
    },
    $8J_1: function SP_UI_Timeline_ListTimelineDatasource$$8J_1() {
        var $$t_2 = this;

        ExecuteOrDelayUntilScriptLoaded(function() {
            SP.GanttControl.WaitForGanttCreation(function($p2_0) {
                if (SP.UI.Timeline.ListTimelineDatasource.$q($p2_0.GetListId()) === $$t_2.$1s_1) {
                    $p2_0.AttachFullLoadCallback(function($p3_0) {
                        if ($p3_0[SP.UI.Timeline.ListTimelineDatasource.$3H]) {
                            $p2_0.AttachRowChanged($$t_2.$$d_updateTimelineItem);
                        }
                    });
                }
            });
        }, 'spgantt.js');
    },
    updateTimelineItem: function SP_UI_Timeline_ListTimelineDatasource$updateTimelineItem(uidStr, fields, wasDeleted) {
        if (!this.get_$L_1() || !(this.get_$L_1()).$g_0) {
            return;
        }
        if (uidStr) {
            var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$q(uidStr);

            if (wasDeleted) {
                this.RemoveItem($v_0);
                return;
            }
            var $v_1 = (this.get_$L_1()).$g_0[$v_0];

            if ($v_1 && (this.get_$L_1()).tlViewData.isOnTimeline($v_0)) {
                var $v_2 = false;

                if (fields[SP.UI.Timeline.ListTimelineDatasource.$2O]) {
                    $v_1.title = fields[SP.UI.Timeline.ListTimelineDatasource.$2O].localizedValue;
                    $v_2 = true;
                }
                if (fields[SP.UI.Timeline.ListTimelineDatasource.$1k]) {
                    if (fields[SP.UI.Timeline.ListTimelineDatasource.$1k].localizedValue) {
                        $v_1.startTime = Date.parseLocale(fields[SP.UI.Timeline.ListTimelineDatasource.$1k].localizedValue);
                    }
                    else {
                        $v_1.startTime = null;
                    }
                    $v_2 = true;
                }
                if (fields[SP.UI.Timeline.ListTimelineDatasource.$1j]) {
                    if (fields[SP.UI.Timeline.ListTimelineDatasource.$1j].localizedValue) {
                        $v_1.endTime = Date.parseLocale(fields[SP.UI.Timeline.ListTimelineDatasource.$1j].localizedValue);
                    }
                    else {
                        $v_1.endTime = null;
                    }
                    $v_2 = true;
                }
                if (fields[SP.UI.Timeline.ListTimelineDatasource.$2N]) {
                    if (fields[SP.UI.Timeline.ListTimelineDatasource.$2N].localizedValue) {
                        $v_1.guid = SP.UI.Timeline.ListTimelineDatasource.$q(fields[SP.UI.Timeline.ListTimelineDatasource.$2N].localizedValue);
                    }
                    else {
                        $v_1.guid = null;
                    }
                    $v_2 = true;
                }
                if ($v_2) {
                    SP.UI.Timeline.ListTimelineDatasource.$3U(this.get_$L_1());
                    (this.get_$L_1()).fireOnDataItemChanged($v_0);
                }
            }
        }
    },
    RetrieveData: function SP_UI_Timeline_ListTimelineDatasource$RetrieveData() {
        return this.$7t_1(this.$1s_1, this.$3D_1);
    },
    get_IsReadOnly: function SP_UI_Timeline_ListTimelineDatasource$get_IsReadOnly() {
        return this.$3t_1;
    },
    get_itemsReadOnly: function SP_UI_Timeline_ListTimelineDatasource$get_itemsReadOnly() {
        return this.$3r_1;
    },
    $7t_1: function SP_UI_Timeline_ListTimelineDatasource$$7t_1($p0, $p1) {
        var $v_0 = SP.UI.Timeline.ListTimelineDatasource.$x($p0, $p1, true);

        if ($v_0) {
            return $v_0.get_$L_0();
        }
        var $v_1 = new SP.UI.Timeline.TimelineData();

        $v_1.tlViewData = SP.UI.Timeline.Utilities.TimelineViewData.create();
        $v_1.tlViewData.setFromDefault();
        SP.UI.Timeline.ListTimelineDatasource.$6t($v_1);
        var $v_2 = !this.$2c_1 ? null : this.$2c_1[0];

        this.$3r_1 = !('ItemsRO' in $v_2) || $v_2['ItemsRO'].toString() === '1';
        this.$3t_1 = !!$v_2 && (!('ListRO' in $v_2) || $v_2['ListRO'].toString() === '1');
        SP.UI.Timeline.ListTimelineDatasource.$6w($p0, $p1, new SP.UI.Timeline.ListTimelineDatasource.ListModel($p0, $v_1, null, null, null, this.$4y_1, null, this.$3t_1, this.$3r_1));
        if ($v_2) {
            var $v_3 = false;

            if ('Formatting' in $v_2) {
                $v_1.tlViewData.setFromString($v_2['Formatting'].toString());
                for (var $v_4 = 1; $v_4 < this.$2c_1.length; $v_4++) {
                    $v_2 = this.$2c_1[$v_4];
                    var $v_5 = SP.UI.Timeline.ListTimelineDatasource.$8m($v_1, $v_2, $p0, $p1);

                    if ($v_5) {
                        $v_3 = true;
                        SP.UI.Timeline.ListTimelineDatasource.$5M($v_1, $v_5);
                    }
                }
            }
            if ($v_3) {
                $v_1.fireOnDataItemChanged('');
            }
        }
        return $v_1;
    },
    get_$L_1: function SP_UI_Timeline_ListTimelineDatasource$get_$L_1() {
        return SP.UI.Timeline.ListTimelineDatasource.$3J(SP.UI.Timeline.ListTimelineDatasource.$x(this.$1s_1, this.$3D_1, true));
    },
    AddVisibleItem: function SP_UI_Timeline_ListTimelineDatasource$AddVisibleItem(uid) {
        if (this.get_$L_1() && (this.get_$L_1()).tlViewData && !this.get_IsReadOnly()) {
            (this.get_$L_1()).tlViewData.addVisibleItem(uid);
            (this.get_$L_1()).fireOnVisibleItemChanged();
        }
    },
    RemoveItem: function SP_UI_Timeline_ListTimelineDatasource$RemoveItem(uid) {
        if (this.get_$L_1() && (this.get_$L_1()).tlViewData && !this.get_IsReadOnly()) {
            (this.get_$L_1()).tlViewData.removeItem(uid);
            SP.UI.Timeline.ListTimelineDatasource.$3U(this.get_$L_1());
            (this.get_$L_1()).fireOnVisibleItemChanged();
        }
    },
    notifyItemRemoved: function SP_UI_Timeline_ListTimelineDatasource$notifyItemRemoved(uid) {
        SP.UI.Timeline.ListTimelineDatasource.$3U(this.get_$L_1());
    },
    Save: function SP_UI_Timeline_ListTimelineDatasource$Save() {
        SP.UI.Timeline.ListTimelineDatasource.$6p(this.$1s_1, this.$3D_1);
    }
};
SP.UI.Timeline.ListTimelineDatasource.ListModel = function SP_UI_Timeline_ListTimelineDatasource_ListModel($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    this.$1s_0 = $p0;
    this.$W_0 = $p1;
    this.$3s_0 = $p2;
    this.$3m_0 = $p3;
    this.$47_0 = $p4;
    this.$48_0 = $p5;
    this.$3i_0 = $p6;
    this.$52_0 = $p7;
    this.$51_0 = $p8;
};
SP.UI.Timeline.ListTimelineDatasource.ListModel.prototype = {
    $1s_0: null,
    $W_0: null,
    $3m_0: null,
    $3s_0: null,
    $47_0: null,
    $48_0: null,
    $3i_0: null,
    $52_0: false,
    $51_0: false,
    get_$8K_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$8K_0() {
        return this.$1s_0;
    },
    get_$L_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$L_0() {
        return this.$W_0;
    },
    get_$4H_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$4H_0() {
        return this.$3m_0;
    },
    set_$4H_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$set_$4H_0($p0) {
        this.$3m_0 = $p0;
        return $p0;
    },
    get_$4Y_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$4Y_0() {
        return this.$3s_0;
    },
    set_$4Y_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$set_$4Y_0($p0) {
        this.$3s_0 = $p0;
        return $p0;
    },
    get_$4w_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$4w_0() {
        return this.$47_0;
    },
    set_$4w_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$set_$4w_0($p0) {
        this.$47_0 = $p0;
        return $p0;
    },
    get_$2q_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$2q_0() {
        return this.$48_0;
    },
    set_$2q_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$set_$2q_0($p0) {
        this.$48_0 = $p0;
        return $p0;
    },
    get_$4B_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$4B_0() {
        return this.$3i_0;
    },
    set_$4B_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$set_$4B_0($p0) {
        this.$3i_0 = $p0;
        return $p0;
    },
    get_$6k_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$6k_0() {
        return this.$52_0;
    },
    get_$8H_0: function SP_UI_Timeline_ListTimelineDatasource_ListModel$get_$8H_0() {
        return this.$51_0;
    }
};
SP.UI.Timeline.MilestoneElement = function SP_UI_Timeline_MilestoneElement() {
    this.$4_2 = new (SP.UI.Timeline.PhysicalElementsContainer.$$(SP.UI.Timeline.MilestonePhysical))();
    SP.UI.Timeline.MilestoneElement.initializeBase(this);
};
SP.UI.Timeline.MilestoneElement.create = function SP_UI_Timeline_MilestoneElement$create(itemFormatter) {
    var $v_0 = new SP.UI.Timeline.MilestoneElement();

    $v_0.initializeBaseProperties(itemFormatter);
    $v_0.$I_2 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(itemFormatter, 'top', SP.UI.Timeline.Utilities.TimelineViewDefaults.$4E);
    $v_0.$C_2 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'y', SP.UI.Timeline.Utilities.TimelineViewDefaults.$5g);
    $v_0.$e_2 = SP.UI.Timeline.TimelineControl.getNumberFromXml(itemFormatter, 'x', SP.UI.Timeline.Utilities.TimelineViewDefaults.$5f);
    return $v_0;
};
SP.UI.Timeline.MilestoneElement.prototype = {
    $I_2: false,
    $C_2: 0,
    $e_2: 0,
    $13_2: 0,
    $o_2: 0,
    $t_2: 0,
    $17_2: false,
    serialize: function SP_UI_Timeline_MilestoneElement$serialize() {
        var $v_0 = '<{0} {1}{2}=\"{3}\" {4}=\"{5}\" ';

        if (this.$I_2 !== SP.UI.Timeline.Utilities.TimelineViewDefaults.$4E) {
            $v_0 += '{6}=\"{7}\" ';
        }
        $v_0 += '/>';
        return String.format($v_0, 'm', SP.UI.Timeline.BaseDataboundElement.prototype.serializedBaseFields.call(this), 'y', SP.UI.Timeline.TimelineControl.$2Q(this.$C_2), 'x', SP.UI.Timeline.TimelineControl.$2Q(this.$e_2), 'top', SP.UI.Timeline.TimelineControl.$4N(this.$I_2));
    },
    $3I_2: function SP_UI_Timeline_MilestoneElement$$3I_2($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (!$v_0) {
            $p0.val = false;
            $p1.val = ($p2.val = ($p3.val = ($p4.val = 0)));
            return false;
        }
        $p0.val = this.$I_2;
        $p1.val = this.$y_2($v_0);
        $p2.val = this.$1l_2($v_0);
        $p3.val = this.$C_2;
        $p4.val = $p3.val + (this.$I_2 ? -this.$t_2 : this.$t_2);
        return true;
    },
    $21_2: function SP_UI_Timeline_MilestoneElement$$21_2($p0) {
        return this.$1M_2($p0) + this.$e_2;
    },
    $1M_2: function SP_UI_Timeline_MilestoneElement$$1M_2($p0) {
        return $p0.$32_1;
    },
    $5y_2: function SP_UI_Timeline_MilestoneElement$$5y_2($p0) {
        return this.$3L_2($p0) + (this.$17_2 ? -this.$e_2 : this.$e_2);
    },
    $3L_2: function SP_UI_Timeline_MilestoneElement$$3L_2($p0) {
        var $v_0 = this.$1M_2($p0);

        return this.$17_2 ? $p0.$F_1 - $v_0 : $v_0;
    },
    $3M_2: function SP_UI_Timeline_MilestoneElement$$3M_2($p0) {
        return this.$13_2 + this.$C_2;
    },
    $y_2: function SP_UI_Timeline_MilestoneElement$$y_2($p0) {
        var $v_0 = this.$21_2($p0) - this.$o_2 / 2;

        if ($v_0 <= 0) {
            return 0;
        }
        if ($v_0 + this.$o_2 > $p0.$F_1) {
            return $p0.$F_1 - this.$o_2;
        }
        return $v_0;
    },
    $1l_2: function SP_UI_Timeline_MilestoneElement$$1l_2($p0) {
        return this.$y_2($p0) + this.$o_2;
    },
    getTotalVerticalHeight: function SP_UI_Timeline_MilestoneElement$getTotalVerticalHeight(physicalObject) {
        return this.$3K_2(physicalObject);
    },
    $3K_2: function SP_UI_Timeline_MilestoneElement$$3K_2($p0) {
        if (this.$I_2) {
            return this.$3M_2($p0) - this.$t_2;
        }
        else {
            return this.$3M_2($p0) + this.$t_2;
        }
    },
    $5x_2: function SP_UI_Timeline_MilestoneElement$$5x_2($p0) {
        return $p0.$32_1 - 11;
    },
    $82_2: function SP_UI_Timeline_MilestoneElement$$82_2($p0) {
        return this.$5x_2($p0) + 22;
    },
    get_labelClassName: function SP_UI_Timeline_MilestoneElement$get_labelClassName() {
        return 'ms-tl-milestoneLabelTitle';
    },
    get_dateClassName: function SP_UI_Timeline_MilestoneElement$get_dateClassName() {
        return 'ms-tl-milestoneLabelDate';
    },
    createSuperToolTipContents: function SP_UI_Timeline_MilestoneElement$createSuperToolTipContents(title, startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createToolTipContentsOneDate(title, endTime ? endTime : startTime, dateFormatString);
    },
    createDateString: function SP_UI_Timeline_MilestoneElement$createDateString(startTime, endTime, dateFormatString) {
        return SP.UI.Timeline.ItemTypeStatic.createDateString(endTime, dateFormatString);
    },
    getTextContainingElement: function SP_UI_Timeline_MilestoneElement$getTextContainingElement(graphics) {
        return (this.$4_2.getPhysicalElement(graphics)).get_$M_1();
    },
    getElementsWithCallouts: function SP_UI_Timeline_MilestoneElement$getElementsWithCallouts(graphics) {
        return [this.getTextContainingElement(graphics), (this.$4_2.getPhysicalElement(graphics)).get_$3G_1()];
    },
    get_itemType: function SP_UI_Timeline_MilestoneElement$get_itemType() {
        return 2;
    },
    setHorizontalPosition: function SP_UI_Timeline_MilestoneElement$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (!$v_0) {
            $v_0 = new SP.UI.Timeline.MilestonePhysical();
        }
        $v_0.$32_1 = Math.ceil(pixelsPerMillisecond * (this.get_itemEndTime() - canvasMinDate));
        $v_0.$F_1 = mainAreaWidth;
        this.$4_2.addPhysicalElement($v_0, SP.UI.Timeline.TimelineControl.$2);
        this.$17_2 = SP.UI.Timeline.TimelineControl.$2.get_isRtl();
    },
    get_majorPosition: function SP_UI_Timeline_MilestoneElement$get_majorPosition() {
        if (this.$I_2) {
            return -1;
        }
        else {
            return 1;
        }
    },
    get_minorPosition: function SP_UI_Timeline_MilestoneElement$get_minorPosition() {
        if (this.$I_2) {
            return this.$C_2 - 11;
        }
        else {
            return this.$C_2 + 11;
        }
    },
    getSubPosition: function SP_UI_Timeline_MilestoneElement$getSubPosition() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        return this.$1M_2($v_0);
    },
    get_pixelChannelHeight: function SP_UI_Timeline_MilestoneElement$get_pixelChannelHeight() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_MilestoneElement$createPhysicalElements(container) {
        var $v_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);
        var $v_1 = SP.UI.Timeline.TimelineControl.$2.CreateRect($v_0);
        var $v_2 = SP.UI.Timeline.TimelineControl.$2.CreateDiamond($v_0);
        var $v_3 = SP.UI.Timeline.TimelineControl.$2.CreateLine(container);
        var $v_4 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        $v_4.className = 'ms-tl-milestoneLabel';
        $v_3.firstChild.className = 'ms-tl-milestoneLine';
        $v_2.className = 'ms-tl-diamond';
        $v_1.className = 'ms-tl-innerDiamond';
        $v_0.className = 'ms-tl-diamondContainer';
        $v_2.setAttribute('unselectable', 'on');
        $v_4.style.borderColor = 'transparent';
        var $v_5 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        $v_5.set_$M_1($v_4);
        $v_5.set_$1m_1($v_3);
        $v_5.set_$2M_1($v_2);
        $v_5.set_$3O_1($v_1);
        $v_5.set_$3G_1($v_0);
        SP.UI.Timeline.BaseDataboundElement.prototype.createPhysicalElements.call(this, container);
    },
    updateTextAndStyling: function SP_UI_Timeline_MilestoneElement$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        SP.UI.Timeline.BaseDataboundElement.prototype.updateTextAndStyling.call(this, formats, tss, fIsAnyTaskShowing);
        var $v_0 = formats.getFormat(this.$b_0, 2);
        var $v_1 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_1.get_$1m_1()).firstChild.style.backgroundColor = (($v_1.get_$3O_1()).style.backgroundColor = $v_0.getColor(formats, 2));
    },
    computeTextSizes: function SP_UI_Timeline_MilestoneElement$computeTextSizes() {
        if (!this.isExplicitlySized()) {
            var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

            this.$o_2 = ($v_0.get_$M_1()).offsetWidth;
            this.$t_2 = ($v_0.get_$M_1()).offsetHeight;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_MilestoneElement$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        if (this.$I_2) {
            this.$13_2 = -1;
            verticalOffset.val = Math.min(this.getTotalVerticalHeight($v_0), verticalOffset.val);
            nearOffset.val = Math.min(nearOffset.val, this.$y_2($v_0));
            widthFarOfNearBar.val = Math.max(widthFarOfNearBar.val, this.$1l_2($v_0));
        }
        else {
            this.$13_2 = mainAreaHeight;
            heightBelowTopOfBar.val = Math.max(heightBelowTopOfBar.val, this.getTotalVerticalHeight($v_0));
            nearOffset.val = Math.min(nearOffset.val, this.$y_2($v_0));
            widthFarOfNearBar.val = Math.max(widthFarOfNearBar.val, this.$1l_2($v_0));
        }
        this.$6H_2($v_0);
    },
    movePhysicalElements: function SP_UI_Timeline_MilestoneElement$movePhysicalElements() {
        var $v_0 = this.$4_2.getAllPhysicalElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            var $v_3 = 6;

            $v_2.$H_0.MoveRect(this.$5x_2($v_2), this.$13_2 - 11, this.$82_2($v_2), this.$13_2 + 11, $v_2.get_$3G_1());
            $v_2.$H_0.MoveDiamond(0, 0, 22, 22, $v_2.get_$2M_1());
            $v_2.$H_0.MoveRect($v_3, $v_3, $v_3 + 10, $v_3 + 10, $v_2.get_$3O_1());
            $v_2.$H_0.MoveRect(this.$y_2($v_2), this.$3M_2($v_2), this.$1l_2($v_2), this.$3K_2($v_2), $v_2.get_$M_1());
            var $v_4 = this.$I_2 ? 1 : 0;

            $v_2.$H_0.MoveLine(this.$5y_2($v_2), this.$3M_2($v_2) + $v_4, this.$3L_2($v_2), this.$13_2, $v_2.get_$1m_1());
        }
    },
    getPhysicalElements: function SP_UI_Timeline_MilestoneElement$getPhysicalElements(graphics) {
        var $v_0 = this.$4_2.getPhysicalElement(graphics);

        if ($v_0) {
            return $v_0;
        }
        else {
            return null;
        }
    },
    showAsSelected: function SP_UI_Timeline_MilestoneElement$showAsSelected() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_0.get_$M_1()).style.borderColor = SP.UI.Timeline.Colors.get_colorForSelected();
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsSelected.call(this);
    },
    showAsNotSelected: function SP_UI_Timeline_MilestoneElement$showAsNotSelected() {
        var $v_0 = this.$4_2.getPhysicalElement(SP.UI.Timeline.TimelineControl.$2);

        ($v_0.get_$M_1()).style.borderColor = 'transparent';
        SP.UI.Timeline.BaseDataboundElement.prototype.showAsNotSelected.call(this);
    },
    $2W_2: null,
    $6W_2: null,
    $22_2: null,
    $J_2: null,
    $v_2: false,
    $w_2: false,
    $z_2: 0,
    $1B_2: 0,
    $2Y_2: 0,
    $2Z_2: 0,
    $f_2: 0,
    $1n_2: null,
    addSelectionDetectionHandlers: function SP_UI_Timeline_MilestoneElement$addSelectionDetectionHandlers(selMan) {
        SP.UI.Timeline.BaseSelectableElement.prototype.addSelectionDetectionHandlers.call(this, selMan);
        var $$t_G = this;

        this.$2W_2 = function($p1_0) {
            $$t_G.$2U_2($p1_0, selMan, false);
        };
        var $$t_H = this;

        this.$6W_2 = function($p1_0) {
            $$t_H.$6U_2($p1_0, selMan, false);
        };
        this.$22_2 = this.$$d_onDblClick;
        var $v_0 = this.$4_2.getPhysicalElement(selMan.get_graphics());

        $v_0.$1w_0 = selMan;
        $addHandler($v_0.get_$M_1(), 'mousedown', this.$2W_2);
        $addHandler($v_0.get_$2M_1(), 'mousedown', this.$6W_2);
        $addHandler($v_0.get_$M_1(), 'dblclick', this.$22_2);
        $addHandler($v_0.get_$2M_1(), 'dblclick', this.$22_2);
        if (!selMan.get_$16_0()) {
            var $$t_I = this, $$t_J = this, $$t_K = this;

            XUI.Touch.CreateTouchManager($v_0.get_$M_1(), function($p1_0, $p1_1) {
                $$t_I.$2U_2($p1_0, selMan, true);
            }, function($p1_0, $p1_1, $p1_2) {
                $$t_J.$2X_2($p1_0, selMan, true);
            }, function($p1_0) {
                $$t_K.$2V_2($p1_0, selMan);
            }, null, null);
            var $$t_L = this, $$t_M = this, $$t_N = this;

            XUI.Touch.CreateTouchManager($v_0.get_$2M_1(), function($p1_0, $p1_1) {
                $$t_L.$6U_2($p1_0, selMan, true);
            }, function($p1_0, $p1_1, $p1_2) {
                $$t_M.$6X_2($p1_0, selMan);
            }, function($p1_0) {
                $$t_N.$6V_2($p1_0, selMan);
            }, null, null);
        }
    },
    $2U_2: function SP_UI_Timeline_MilestoneElement$$2U_2($p0, $p1, $p2) {
        if ($p1.get_$16_0()) {
            if (!$p2) {
                this.onClickReadOnlyDraggable($p0, $p1);
            }
            return;
        }
        var $v_0 = $p0.target;

        if ($v_0) {
            this.setFocus($p1.get_graphics());
            this.onStartDrag($v_0, $p1, $p2);
            this.$J_2 = XUI.Capture.GetEventLocation($p0);
            this.$z_2 = this.$e_2;
            this.$1B_2 = this.$C_2;
            this.$w_2 = this.$I_2;
            this.$2Y_2 = this.$z_2;
            this.$2Z_2 = this.$1B_2;
            this.$f_2 = $p1.get_mainAreaHeight();
            this.$1n_2 = this.$4_2.getPhysicalElement($p1.get_graphics());
            this.$v_2 = true;
            if (!$p2) {
                var $$t_6 = this, $$t_7 = this;

                XUI.Capture.SetCapture($v_0, function($p1_0) {
                    $$t_6.$2X_2($p1_0, $p1, false);
                    XUI.Capture.StopEvent($p1_0);
                }, function($p1_0) {
                    $$t_7.$2V_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                });
            }
            XUI.Capture.StopEvent($p0);
        }
    },
    $2X_2: function SP_UI_Timeline_MilestoneElement$$2X_2($p0, $p1, $p2) {
        this.closeSuperToolTipIfVisible();
        var $v_0 = XUI.Capture.GetEventLocation($p0);

        if (this.$v_2 && (this.$J_2.x !== $v_0.x || this.$J_2.y !== $v_0.y)) {
            this.$v_2 = false;
            this.$z_2 += this.$y_2(this.$1n_2) + this.$o_2 / 2 - this.$21_2(this.$1n_2);
        }
        this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_0, this.$1n_2);
        if (this.$I_2) {
            if (this.$3K_2(this.$1n_2) > this.$f_2 / 2 + 1) {
                this.$I_2 = false;
                this.$13_2 = this.$f_2;
                this.$J_2.y += this.$3d_2(this.$f_2);
                this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_0, this.$1n_2);
            }
        }
        else if (this.$3K_2(this.$1n_2) < this.$f_2 / 2 - 1) {
            this.$I_2 = true;
            this.$13_2 = 0;
            this.$J_2.y -= this.$3d_2(this.$f_2);
            this.$2K_2(this.$z_2, this.$1B_2, this.$J_2, $v_0, this.$1n_2);
        }
        if ($p2) {
            $p0.preventDefault();
        }
        this.movePhysicalElements();
    },
    $2V_2: function SP_UI_Timeline_MilestoneElement$$2V_2($p0, $p1) {
        if (this.$I_2 && this.$C_2 > 0 || !this.$I_2 && this.$C_2 < 0) {
            this.$e_2 = this.$2Y_2;
            this.$C_2 = this.$2Z_2;
            this.$I_2 = this.$w_2;
            this.$13_2 = this.$w_2 ? 0 : this.$f_2;
            $p1.$6T_0();
        }
        this.onEndDrag($p0.target, this.$v_2);
        if (this.$e_2 !== this.$2Y_2 || this.$C_2 !== this.$2Z_2 || this.$I_2 !== this.$w_2) {
            $p1.$23_0();
        }
    },
    $6U_2: function SP_UI_Timeline_MilestoneElement$$6U_2($p0, $p1, $p2) {
        if ($p1.get_$16_0()) {
            if (!$p2) {
                this.onClickReadOnlyDraggable($p0, $p1);
            }
            return;
        }
        var $v_0 = $p0.target;

        if ($v_0) {
            this.setFocus($p1.get_graphics());
            this.onStartDrag($v_0, $p1, $p2);
            this.$w_2 = this.$I_2;
            this.$J_2 = XUI.Capture.GetEventLocation($p0);
            this.$v_2 = true;
            if (!$p2) {
                var $$t_6 = this, $$t_7 = this;

                XUI.Capture.SetCapture($v_0, function($p1_0) {
                    $$t_6.$6X_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                }, function($p1_0) {
                    $$t_7.$6V_2($p1_0, $p1);
                    XUI.Capture.StopEvent($p1_0);
                });
            }
            XUI.Capture.StopEvent($p0);
        }
    },
    $6X_2: function SP_UI_Timeline_MilestoneElement$$6X_2($p0, $p1) {
        this.closeSuperToolTipIfVisible();
        var $v_0 = XUI.Capture.GetEventLocation($p0);

        if (this.$v_2 && (this.$J_2.x !== $v_0.x || this.$J_2.y !== $v_0.y)) {
            this.$v_2 = false;
        }
        var $v_1 = $v_0.y - this.$J_2.y;
        var $v_2 = this.$4_2.getPhysicalElement($p1.get_graphics());
        var $v_3 = $p1.get_mainAreaHeight();

        if (this.$I_2) {
            if ($v_1 > $v_3 / 2 + 1) {
                this.$I_2 = false;
                this.$13_2 = $v_3;
                this.$J_2.y += $v_3;
                this.$C_2 = -this.$C_2;
            }
        }
        else {
            if ($v_1 < -($v_3 / 2 - 1)) {
                this.$I_2 = true;
                this.$13_2 = 0;
                this.$J_2.y -= $v_3;
                this.$C_2 = -this.$C_2;
            }
        }
        this.movePhysicalElements();
    },
    $6V_2: function SP_UI_Timeline_MilestoneElement$$6V_2($p0, $p1) {
        this.onEndDrag($p0.target, this.$v_2);
        if (this.$w_2 !== this.$I_2) {
            $p1.$23_0();
        }
    },
    $3d_2: function SP_UI_Timeline_MilestoneElement$$3d_2($p0) {
        var $v_0 = $p0 + 22 + this.$t_2;

        return $v_0;
    },
    $2K_2: function SP_UI_Timeline_MilestoneElement$$2K_2($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = this.$17_2 ? $p2.x - $p3.x : $p3.x - $p2.x;

        this.$e_2 = $p0 + $v_0;
        this.$6H_2($p4);
        if (Math.abs(this.$e_2) < 10) {
            this.$e_2 = 0;
        }
        this.$C_2 = $p1 + ($p3.y - $p2.y);
    },
    $6H_2: function SP_UI_Timeline_MilestoneElement$$6H_2($p0) {
        if (this.$21_2($p0) < 0) {
            this.$e_2 = -this.$1M_2($p0);
        }
        else if (this.$21_2($p0) > $p0.$F_1) {
            this.$e_2 = $p0.$F_1 - this.$1M_2($p0);
        }
    },
    $4j_2: function SP_UI_Timeline_MilestoneElement$$4j_2($p0) {
        var $v_0 = new SP.UI.Timeline.MilestoneElement();

        this.copyShallowCloneFields($v_0, $p0);
        $v_0.$I_2 = this.$I_2;
        $v_0.$e_2 = this.$e_2;
        $v_0.$C_2 = this.$C_2;
        $v_0.$12_1 = true;
        return $v_0;
    },
    getAllPhysicalElements: function SP_UI_Timeline_MilestoneElement$getAllPhysicalElements() {
        return this.$4_2.getAllPhysicalElements();
    },
    clean: function SP_UI_Timeline_MilestoneElement$clean(graphics) {
        SP.UI.Timeline.BaseDataboundElement.prototype.clean.call(this, graphics);
        this.$4_2.removePhysicalElement(graphics);
    }
};
SP.UI.Timeline.PhysicalElementsContainer = function SP_UI_Timeline_PhysicalElementsContainer() {
    this.$7_0 = {};
};
SP.UI.Timeline.PhysicalElementsContainer.$$ = function SP_UI_Timeline_PhysicalElementsContainer$$$(T) {
    var $$cn = 'PhysicalElementsContainer' + '$1' + '$' + (T.getName()).replace(/\./g, '_');

    if (!SP.UI.Timeline[$$cn]) {
        var $$ccr = SP.UI.Timeline[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['SP.UI.Timeline.PhysicalElementsContainer'] = {
                'T': T
            };
            var $v_0 = [];

            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            SP.UI.Timeline.PhysicalElementsContainer.apply(this, $v_0);
        };

        $$ccr.registerClass('SP.UI.Timeline.' + $$cn);
        var $$dict_5 = SP.UI.Timeline.PhysicalElementsContainer.prototype;

        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };

            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return SP.UI.Timeline[$$cn];
};
SP.UI.Timeline.PhysicalElementsContainer.prototype = {
    addPhysicalElement: function SP_UI_Timeline_PhysicalElementsContainer$addPhysicalElement(element, graphics) {
        this.$7_0[(graphics.get_id()).toString()] = element;
        element.$H_0 = graphics;
    },
    getPhysicalElement: function SP_UI_Timeline_PhysicalElementsContainer$getPhysicalElement(graphics) {
        var $v_0 = this.$7_0[(graphics.get_id()).toString()];

        return $v_0;
    },
    getAllPhysicalElements: function SP_UI_Timeline_PhysicalElementsContainer$getAllPhysicalElements() {
        var $v_0 = [];

        for (var physicalElement in this.$7_0) {
            $v_0.push(this.$7_0[physicalElement]);
        }
        ;
        return $v_0;
    },
    removePhysicalElement: function SP_UI_Timeline_PhysicalElementsContainer$removePhysicalElement(graphics) {
        delete this.$7_0[(graphics.get_id()).toString()];
    }
};
SP.UI.Timeline.PhysicalElements = function SP_UI_Timeline_PhysicalElements() {
};
SP.UI.Timeline.PhysicalElements.prototype = {
    $H_0: null,
    $1w_0: null,
    get_graphics: function SP_UI_Timeline_PhysicalElements$get_graphics() {
        return this.$H_0;
    },
    set_graphics: function SP_UI_Timeline_PhysicalElements$set_graphics(value) {
        this.$H_0 = value;
        return value;
    },
    clean: function SP_UI_Timeline_PhysicalElements$clean() {
        var $v_0 = this.getAllElements();

        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $clearHandlers($v_0[$v_1]);
        }
    }
};
SP.UI.Timeline.StartMarker = function SP_UI_Timeline_StartMarker() {
    this.$34_0 = Strings.STS.L_TimelineStart;
    this.$8_0 = true;
};
SP.UI.Timeline.StartMarker.prototype = {
    $5D_0: null,
    $1v_0: null,
    $18_0: 0,
    $1K_0: 0,
    $33_0: 0,
    $2D_0: 0,
    $3_0: null,
    $8_0: false,
    $4p_0: function SP_UI_Timeline_StartMarker$$4p_0($p0) {
        this.$3_0 = $p0;
    },
    get_itemType: function SP_UI_Timeline_StartMarker$get_itemType() {
        return 3;
    },
    get_formatNumber: function SP_UI_Timeline_StartMarker$get_formatNumber() {
        return -1;
    },
    get_shouldShow: function SP_UI_Timeline_StartMarker$get_shouldShow() {
        return this.$8_0;
    },
    set_shouldShow: function SP_UI_Timeline_StartMarker$set_shouldShow(value) {
        this.$8_0 = value;
        return value;
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_StartMarker$isPhysicalElementsCreated(graphics) {
        return !!this.$3_0;
    },
    get_pixelWidth: function SP_UI_Timeline_StartMarker$get_pixelWidth() {
        return this.$8_0 ? this.$18_0 : 0;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_StartMarker$get_pixelChannelHeight() {
        return 0;
    },
    bindToUnderlyingData: function SP_UI_Timeline_StartMarker$bindToUnderlyingData(elementData) {
    },
    setHorizontalPosition: function SP_UI_Timeline_StartMarker$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        this.$5D_0 = canvasMinDate;
    },
    get_majorPosition: function SP_UI_Timeline_StartMarker$get_majorPosition() {
        return 0;
    },
    get_minorPosition: function SP_UI_Timeline_StartMarker$get_minorPosition() {
        return SP.UI.Timeline.Utilities.TimelineConstants.$6K;
    },
    getSubPosition: function SP_UI_Timeline_StartMarker$getSubPosition() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_StartMarker$createPhysicalElements(container) {
        var $v_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        this.$4p_0($v_0);
        this.$3_0.className = 'ms-tl-start';
    },
    isSelectable: function SP_UI_Timeline_StartMarker$isSelectable() {
        return false;
    },
    formatTextProperties: function SP_UI_Timeline_StartMarker$formatTextProperties(options) {
        if (!this.$3_0) {
            return;
        }
        this.$1v_0 = SP.UI.Timeline.ItemTypeStatic.createDateString(this.$5D_0, options.get_dateFormatNoTimeString());
        this.$33_0 = options.$1I_0;
    },
    updateTextAndStyling: function SP_UI_Timeline_StartMarker$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        if (!this.$3_0) {
            return;
        }
        var $v_0 = formats.getFormat(this.$33_0, 3);

        SP.UI.Timeline.ItemTypeStatic.addNodesForText(this.$3_0, this.$34_0, this.$1v_0, 'ms-tl-startTitle', 'ms-tl-startDate', 3, $v_0, formats, tss);
        this.$3_0.style.height = '';
        this.$3_0.style.width = '';
    },
    computeTextSizes: function SP_UI_Timeline_StartMarker$computeTextSizes() {
        if (!this.$3_0) {
            return;
        }
        if (!this.$3_0.style.height || !this.$3_0.style.height.length) {
            this.$1K_0 = this.$3_0.offsetHeight;
            this.$18_0 = this.$3_0.offsetWidth;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_StartMarker$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        this.$2D_0 = mainAreaHeight;
        nearOffset.val = Math.min(nearOffset.val, -(this.$18_0 + 12));
        heightBelowTopOfBar.val = Math.max(heightBelowTopOfBar.val, this.$1K_0);
    },
    movePhysicalElements: function SP_UI_Timeline_StartMarker$movePhysicalElements() {
        if (!this.$3_0) {
            return;
        }
        SP.UI.Timeline.TimelineControl.$2.MoveRect(-5, 0, 0 - this.$18_0, Math.max(this.$2D_0, this.$1K_0), this.$3_0);
    },
    show: function SP_UI_Timeline_StartMarker$show() {
        if (this.$3_0) {
            this.$3_0.style.display = '';
        }
        this.$8_0 = true;
    },
    hide: function SP_UI_Timeline_StartMarker$hide() {
        if (this.$3_0) {
            this.$3_0.style.display = 'none';
        }
        this.$8_0 = false;
    }
};
SP.UI.Timeline.FinishMarker = function SP_UI_Timeline_FinishMarker() {
    this.$34_0 = Strings.STS.L_TimelineFinish;
    this.$8_0 = true;
};
SP.UI.Timeline.FinishMarker.prototype = {
    $2v_0: null,
    $1v_0: null,
    $33_0: 0,
    $18_0: 0,
    $1K_0: 0,
    $2D_0: 0,
    $F_0: 0,
    $3_0: null,
    $8_0: false,
    get_finishTime: function SP_UI_Timeline_FinishMarker$get_finishTime() {
        return this.$2v_0;
    },
    set_finishTime: function SP_UI_Timeline_FinishMarker$set_finishTime(value) {
        this.$2v_0 = value;
        return value;
    },
    get_mainAreaWidth: function SP_UI_Timeline_FinishMarker$get_mainAreaWidth() {
        return this.$F_0;
    },
    set_mainAreaWidth: function SP_UI_Timeline_FinishMarker$set_mainAreaWidth(value) {
        this.$F_0 = value;
        return value;
    },
    $4p_0: function SP_UI_Timeline_FinishMarker$$4p_0($p0) {
        this.$3_0 = $p0;
    },
    get_itemType: function SP_UI_Timeline_FinishMarker$get_itemType() {
        return 3;
    },
    get_formatNumber: function SP_UI_Timeline_FinishMarker$get_formatNumber() {
        return -1;
    },
    get_shouldShow: function SP_UI_Timeline_FinishMarker$get_shouldShow() {
        return this.$8_0;
    },
    set_shouldShow: function SP_UI_Timeline_FinishMarker$set_shouldShow(value) {
        this.$8_0 = value;
        return value;
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_FinishMarker$isPhysicalElementsCreated(graphics) {
        return !!this.$3_0;
    },
    get_pixelWidth: function SP_UI_Timeline_FinishMarker$get_pixelWidth() {
        return this.$8_0 ? this.$18_0 : 0;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_FinishMarker$get_pixelChannelHeight() {
        return 0;
    },
    bindToUnderlyingData: function SP_UI_Timeline_FinishMarker$bindToUnderlyingData(elementData) {
    },
    setHorizontalPosition: function SP_UI_Timeline_FinishMarker$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        this.$F_0 = mainAreaWidth;
        this.$2v_0 = canvasMaxDate;
    },
    get_majorPosition: function SP_UI_Timeline_FinishMarker$get_majorPosition() {
        return 0;
    },
    get_minorPosition: function SP_UI_Timeline_FinishMarker$get_minorPosition() {
        return 1000000;
    },
    getSubPosition: function SP_UI_Timeline_FinishMarker$getSubPosition() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_FinishMarker$createPhysicalElements(container) {
        var $v_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        this.$4p_0($v_0);
        this.$3_0.className = 'ms-tl-finish';
    },
    isSelectable: function SP_UI_Timeline_FinishMarker$isSelectable() {
        return false;
    },
    formatTextProperties: function SP_UI_Timeline_FinishMarker$formatTextProperties(options) {
        if (!this.$3_0) {
            return;
        }
        this.$1v_0 = SP.UI.Timeline.ItemTypeStatic.createDateString(this.$2v_0, options.get_dateFormatNoTimeString());
        this.$33_0 = options.$1I_0;
    },
    updateTextAndStyling: function SP_UI_Timeline_FinishMarker$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        if (!this.$3_0) {
            return;
        }
        var $v_0 = formats.getFormat(this.$33_0, 3);

        SP.UI.Timeline.ItemTypeStatic.addNodesForText(this.$3_0, this.$34_0, this.$1v_0, 'ms-tl-finishTitle', 'ms-tl-finishDate', 3, $v_0, formats, tss);
        this.$3_0.style.height = '';
        this.$3_0.style.width = '';
    },
    computeTextSizes: function SP_UI_Timeline_FinishMarker$computeTextSizes() {
        if (!this.$3_0) {
            return;
        }
        if (!this.$3_0.style.height || !this.$3_0.style.height.length) {
            this.$1K_0 = this.$3_0.offsetHeight;
            this.$18_0 = this.$3_0.offsetWidth;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_FinishMarker$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        this.$2D_0 = mainAreaHeight;
        widthFarOfNearBar.val = Math.max(widthFarOfNearBar.val, this.$F_0 + this.$18_0);
        heightBelowTopOfBar.val = Math.max(heightBelowTopOfBar.val, this.$1K_0);
    },
    movePhysicalElements: function SP_UI_Timeline_FinishMarker$movePhysicalElements() {
        if (!this.$3_0) {
            return;
        }
        SP.UI.Timeline.TimelineControl.$2.MoveRect(this.$F_0, 0, this.$F_0 + this.$18_0 + 12, Math.max(this.$2D_0, this.$1K_0), this.$3_0);
    },
    show: function SP_UI_Timeline_FinishMarker$show() {
        if (this.$3_0) {
            SP.UI.Timeline.ItemTypeStatic.showElement(this.$3_0);
            this.$3_0.style.display = '';
        }
        this.$8_0 = true;
    },
    hide: function SP_UI_Timeline_FinishMarker$hide() {
        if (this.$3_0) {
            SP.UI.Timeline.ItemTypeStatic.hideElement(this.$3_0);
            this.$3_0.style.display = 'none';
        }
        this.$8_0 = false;
    }
};
SP.UI.Timeline.SelectionManager = function SP_UI_Timeline_SelectionManager(tControl) {
    this.$5_0 = tControl;
};
SP.UI.Timeline.SelectionManager.$8D = function SP_UI_Timeline_SelectionManager$$8D($p0) {
    switch ($p0) {
    case 'TLSelectFontColorOpenQuery':
    case 'TLSelectBackgroundColorQuery':
    case 'TLQueryUnderline':
    case 'TLQueryItalics':
    case 'TLQueryBold':
    case 'TLQueryFontFamily':
    case 'TLQueryFontSize':
        return true;
    }
    return false;
};
SP.UI.Timeline.SelectionManager.prototype = {
    $A_0: null,
    $5_0: null,
    $3Y_0: function SP_UI_Timeline_SelectionManager$$3Y_0($p0) {
        if ($p0 === this.$A_0) {
            return;
        }
        var $$t_1 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_graphics(), function() {
            if ($$t_1.$A_0) {
                ($$t_1.$A_0.getFocusableElement()).blur();
                $$t_1.$A_0.onUnselect();
            }
            $$t_1.$A_0 = $p0;
            if ($$t_1.$A_0) {
                $$t_1.$A_0.onSelect();
            }
            SP.UI.Timeline.TimelineControl.$7m();
        });
    },
    get_itemFormats: function SP_UI_Timeline_SelectionManager$get_itemFormats() {
        return this.$5_0.get_$6C_0();
    },
    get_graphics: function SP_UI_Timeline_SelectionManager$get_graphics() {
        return this.$5_0.$H_0;
    },
    get_mainAreaHeight: function SP_UI_Timeline_SelectionManager$get_mainAreaHeight() {
        return this.$5_0.$D_0.get_height();
    },
    get_$16_0: function SP_UI_Timeline_SelectionManager$get_$16_0() {
        return this.$5_0.get_$16_0();
    },
    $8O_0: function SP_UI_Timeline_SelectionManager$$8O_0($p0) {
        var $v_0 = (this.$5_0.get_elements()).get_bars();

        $v_0.$7Z_0($p0);
        $v_0.organizeIntoChannels();
        this.$5_0.$6Y_0($p0.$2f_2);
        this.$5_0.save();
    },
    $6T_0: function SP_UI_Timeline_SelectionManager$$6T_0() {
        this.$5_0.$23_0();
    },
    $23_0: function SP_UI_Timeline_SelectionManager$$23_0() {
        this.$5_0.$23_0();
        this.$5_0.save();
    },
    $7D_0: function SP_UI_Timeline_SelectionManager$$7D_0($p0) {
        if (!this.$A_0) {
            return false;
        }
        if (SP.UI.Timeline.SelectionManager.$8D($p0)) {
            return true;
        }
        switch ($p0) {
        case 'TLFontGrp':
        case 'TLCurSlctnGrp':
        case 'TLSelectFontColorOpen':
        case 'TLSelectBackgroundColorOpen':
        case 'TLUnderline':
        case 'TLItalics':
        case 'TLBold':
        case 'TLFontFamilyStyleValue':
        case 'TLFontSizeStyleValue':
            return true;
        case 'TLCmdRmvFromTimeline':
            var $v_0 = this.$A_0.get_itemType();

            return !$v_0 || $v_0 === 1 || $v_0 === 2;
        case 'TLCmdShowAsBar':
        case 'TLCmdShowAsCallout':
            var $v_1 = this.$A_0.get_itemType();

            return !$v_1 || $v_1 === 1;
        }
        return false;
    },
    $87_0: function SP_UI_Timeline_SelectionManager$$87_0($p0, $p1) {
        if (!this.$A_0) {
            return false;
        }
        var $v_0 = false;

        switch ($p0) {
        case 'TLSelectFontColorOpen':
            $v_0 = this.$A_0.setFontColor(this.get_itemFormats(), this.$5_0.get_$Z_0(), $p1, this);
            break;
        case 'TLSelectBackgroundColorOpen':
            $v_0 = this.$A_0.setBkgdColor(this.get_itemFormats(), $p1, this);
            break;
        case 'TLUnderline':
            $v_0 = this.$A_0.toggleUnderline(this.get_itemFormats(), this.$5_0.get_$Z_0(), this);
            break;
        case 'TLItalics':
            $v_0 = this.$A_0.toggleItalics(this.get_itemFormats(), this.$5_0.get_$Z_0(), this);
            break;
        case 'TLBold':
            $v_0 = this.$A_0.toggleBold(this.get_itemFormats(), this.$5_0.get_$Z_0(), this);
            break;
        case 'TLFontFamilyStyleValue':
            $v_0 = this.$A_0.setFontName(this.get_itemFormats(), this.$5_0.get_$Z_0(), $p1, this);
            break;
        case 'TLFontSizeStyleValue':
            $v_0 = this.$A_0.setFontSize(this.get_itemFormats(), this.$5_0.get_$Z_0(), $p1, this);
            break;
        case 'TLCmdRmvFromTimeline':
            $v_0 = this.$6l_0(this.$A_0);
            break;
        case 'TLCmdShowAsBar':
        case 'TLCmdShowAsCallout':
            var $v_1 = this.$A_0.get_effectiveUid();

            this.$A_0.hideAll();
            var $v_2 = null;
            var $v_3 = null;

            if (this.$A_0.get_itemType() === 1) {
                $v_3 = (this.$5_0.get_elements()).get_bars();
            }
            else if (!this.$A_0.get_itemType()) {
                $v_3 = (this.$5_0.get_elements()).get_callouts();
            }
            else {
                return false;
            }
            for (var $v_4 = 0; $v_4 < $v_3.get_length(); $v_4++) {
                var $v_5 = $v_3.getAt($v_4);

                if ($v_5.matchesUid($v_1)) {
                    $v_2 = $v_5;
                }
            }
            if (!$v_2) {
                $v_2 = $v_3.createFromDefault($v_1);
            }
            $v_2.showAll();
            $v_2.bindToUnderlyingData((this.$5_0.get_data()).$g_0);
            SP.UI.Timeline.TimelineControl.$4Z((this.$5_0.get_elements()).get_bars());
            this.$5_0.$4d_0();
            $v_2.setFocus(this.get_graphics());
            $v_0 = true;
            break;
        default:
            return false;
        }
        if ($v_0) {
            if ($p0 === 'TLSelectFontColorOpen' || $p0 === 'TLSelectBackgroundColorOpen') {
                var $$t_8 = this;

                SP.UI.Timeline.TimelineControl.$1C(this.get_graphics(), function() {
                    ($$t_8.$A_0.getFocusableElement()).focus();
                });
            }
            this.$5_0.save();
        }
        return $v_0;
    },
    $6l_0: function SP_UI_Timeline_SelectionManager$$6l_0($p0) {
        var $v_0 = $p0.get_effectiveUid();
        var $$t_2 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_graphics(), function() {
            ($p0.getFocusableElement()).blur();
            $p0.hide();
            ($$t_2.$5_0.get_elements()).$8A_0($v_0);
        });
        if (!$p0.get_itemType()) {
            SP.UI.Timeline.TimelineControl.$4Z((this.$5_0.get_elements()).get_bars());
        }
        if (this.$A_0 === $p0) {
            this.$3Y_0(null);
        }
        if ($v_0) {
            this.$5_0.$h_0.notifyItemRemoved($v_0);
        }
        this.$5_0.$4i_0();
        return true;
    },
    $8Y_0: function SP_UI_Timeline_SelectionManager$$8Y_0($p0) {
        if (this.$6l_0($p0)) {
            this.$5_0.save();
        }
    },
    $4v_0: function SP_UI_Timeline_SelectionManager$$4v_0() {
        var $v_0 = this.$A_0.elementsToRefreshOnStyleChange();
        var $$t_3 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_graphics(), function() {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];

                $v_2.formatTextProperties($$t_3.$5_0.get_$E_0());
                $v_2.updateTextAndStyling($$t_3.get_itemFormats(), $$t_3.$5_0.get_$Z_0(), $$t_3.$5_0.get_isAnyTaskShowing());
                $v_2.computeTextSizes();
            }
            $$t_3.$A_0.showAsSelected();
            $$t_3.$5_0.$D_0.$1x_1.updateTextAndStyling($$t_3.get_itemFormats(), $$t_3.$5_0.get_$Z_0(), $$t_3.$5_0.get_isAnyTaskShowing());
        });
        this.$5_0.$4f_0();
    },
    $93_0: function SP_UI_Timeline_SelectionManager$$93_0($p0) {
        (this.$5_0.get_$E_0()).$1I_0 = $p0;
    },
    $8l_0: function SP_UI_Timeline_SelectionManager$$8l_0($p0) {
        if (!this.$A_0) {
            return null;
        }
        var $v_0 = this.$5s_0();

        switch ($p0) {
        case 'TLSelectBackgroundColorQuery':
            var $v_1 = this.$5r_0();

            return $v_1.getColor(this.get_itemFormats(), this.$A_0.get_itemType());
        case 'TLSelectFontColorOpenQuery':
            if ($v_0) {
                return ($v_0.getColor(this.$5_0.get_$Z_0(), this.$A_0.get_itemType())).toString();
            }
            else {
                return null;
            }
        case 'TLQueryFontFamily':
            if ($v_0) {
                var $v_2 = $v_0.getFontName(this.$5_0.get_$Z_0());

                return RTE.StyleRuleUtility.convertFontFamilyToDisplay($v_2);
            }
            else {
                return null;
            }
        case 'TLQueryFontSize':
            if ($v_0) {
                return ($v_0.getFontSize(this.$5_0.get_$Z_0())).toString();
            }
            else {
                return null;
            }
        default:
            return null;
        }
    },
    $7B_0: function SP_UI_Timeline_SelectionManager$$7B_0($p0) {
        if (!this.$A_0) {
            return false;
        }
        var $v_0 = this.$5s_0();

        switch ($p0) {
        case 'TLQueryBold':
            if ($v_0) {
                return $v_0.isBold(this.$5_0.get_$Z_0());
            }
            else {
                return false;
            }
        case 'TLQueryItalics':
            if ($v_0) {
                return $v_0.isItalics(this.$5_0.get_$Z_0());
            }
            else {
                return false;
            }
        case 'TLQueryUnderline':
            if ($v_0) {
                return $v_0.isUnderline(this.$5_0.get_$Z_0());
            }
            else {
                return false;
            }
        case 'TLCmdShowAsBarQuery':
            return !this.$A_0.get_itemType();
        case 'TLCmdShowAsCalloutQuery':
            return this.$A_0.get_itemType() === 1;
        default:
            return false;
        }
    },
    $5r_0: function SP_UI_Timeline_SelectionManager$$5r_0() {
        return (this.get_itemFormats()).getFormat(this.$A_0.get_formatNumber(), this.$A_0.get_itemType());
    },
    $5s_0: function SP_UI_Timeline_SelectionManager$$5s_0() {
        var $v_0 = this.$5r_0();

        return $v_0.getLabelTextStyle(this.get_itemFormats(), this.$A_0.get_itemType(), this.$5_0.get_$Z_0());
    }
};
SP.UI.Timeline.TaskListTimelineBridgeControl = function SP_UI_Timeline_TaskListTimelineBridgeControl($p0) {
    this.get_IsReadOnly = this.get_isReadOnly;
    this.NotifyItemRemoved = this.notifyItemRemoved;
    this.RetrieveData = this.retrieveData;
    this.Save = this.save;
    this.$46_0 = $p0;
};
SP.UI.Timeline.TaskListTimelineBridgeControl.Create = function SP_UI_Timeline_TaskListTimelineBridgeControl$Create(tlViewDataId, saveMethod, timelineBegin, timelineEnd) {
    var $v_0 = new SP.UI.Timeline.TaskListTimelineBridgeControl(tlViewDataId);

    $v_0.$5B_0 = saveMethod;
    $v_0.$3A_0 = timelineBegin;
    $v_0.$3B_0 = timelineEnd;
    $v_0.$1G_0 = Date.parseInvariant('0001-01-01 00:00:01Z');
    $v_0.$1H_0 = Date.parseInvariant('9999-12-31 23:59:59Z');
    return $v_0;
};
SP.UI.Timeline.TaskListTimelineBridgeControl.prototype = {
    $G_0: null,
    $46_0: null,
    $2s_0: null,
    $3p_0: null,
    $5B_0: null,
    $3o_0: false,
    $4z_0: null,
    $3A_0: 0,
    $3B_0: 0,
    $1H_0: null,
    $1G_0: null,
    SetCallbacks: function SP_UI_Timeline_TaskListTimelineBridgeControl$SetCallbacks(itemRemoved) {
        this.$3p_0 = itemRemoved;
        if (this.$2s_0) {
            this.$2s_0.setItemRemovedCallback(itemRemoved);
        }
    },
    retrieveData: function SP_UI_Timeline_TaskListTimelineBridgeControl$retrieveData() {
        if (!this.$G_0) {
            this.InitializeTimelineDataObject();
        }
        return this.$G_0;
    },
    notifyItemRemoved: function SP_UI_Timeline_TaskListTimelineBridgeControl$notifyItemRemoved(uid) {
    },
    get_isReadOnly: function SP_UI_Timeline_TaskListTimelineBridgeControl$get_isReadOnly() {
        return false;
    },
    save: function SP_UI_Timeline_TaskListTimelineBridgeControl$save() {
        var $v_0 = this.$G_0.tlViewData.serialize();
        var $v_1 = $get(this.$46_0);

        $v_1.value = $v_0;
        this.$4z_0 = $v_0;
        if (!this.$3o_0) {
            this.$3o_0 = true;
            var $$t_2 = this;

            window.setTimeout(function() {
                $$t_2.$5B_0($$t_2.$4z_0);
                $$t_2.$3o_0 = false;
            }, 2000);
        }
    },
    SetConnectedDataSource: function SP_UI_Timeline_TaskListTimelineBridgeControl$SetConnectedDataSource(connectedTimeline) {
        if (this.$3p_0) {
            connectedTimeline.setItemRemovedCallback(this.$3p_0);
        }
        this.$2s_0 = connectedTimeline;
    },
    InitializeTimelineDataObject: function SP_UI_Timeline_TaskListTimelineBridgeControl$InitializeTimelineDataObject() {
        if (!this.$G_0) {
            this.$G_0 = new SP.UI.Timeline.TimelineData();
        }
        if (!this.$G_0.tlViewData) {
            this.$G_0.tlViewData = SP.UI.Timeline.Utilities.TimelineViewData.create();
        }
        var $v_0 = $get(this.$46_0);

        if ($v_0 && $v_0.value !== '') {
            this.$G_0.tlViewData.setFromString($v_0.value);
        }
        else {
            this.$G_0.tlViewData.setFromDefault();
        }
        this.$6x_0();
    },
    $6x_0: function SP_UI_Timeline_TaskListTimelineBridgeControl$$6x_0() {
        if (this.$3A_0) {
            var $v_0 = new Date();

            $v_0.setDate($v_0.getDate() + this.$3B_0);
            this.$G_0.maxDate = this.$5o_0($v_0);
        }
        else {
            this.$G_0.maxDate = Date.parseInvariant('0001-01-01 00:00:01Z');
        }
        if (this.$3B_0) {
            var $v_1 = new Date();

            $v_1.setDate($v_1.getDate() - this.$3A_0);
            this.$G_0.minDate = this.$5o_0($v_1);
        }
        else {
            this.$G_0.minDate = Date.parseInvariant('9999-12-31 23:59:59Z');
        }
    },
    $5o_0: function SP_UI_Timeline_TaskListTimelineBridgeControl$$5o_0($p0) {
        return new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate());
    },
    GenerateItemInfo: function SP_UI_Timeline_TaskListTimelineBridgeControl$GenerateItemInfo(taskId, taskName, url, navigationHandler, filterUid, taskBegin, taskEnd, toolTipContentsRetriever) {
        var $v_0 = new SP.UI.TaskListItem();

        $v_0.$2H_0 = taskId;
        $v_0.$39_0 = taskName;
        $v_0.$2u_0 = url;
        $v_0.$1R_0 = filterUid;
        $v_0.$37_0 = taskBegin;
        $v_0.$38_0 = taskEnd;
        $v_0.$30_0 = navigationHandler;
        $v_0.$3C_0 = toolTipContentsRetriever;
        return $v_0;
    },
    Update: function SP_UI_Timeline_TaskListTimelineBridgeControl$Update(itemsUpdated, itemsRemoved) {
        if (!itemsUpdated.length && !itemsRemoved.length) {
            return;
        }
        var $v_0 = !!this.$3A_0 && !!this.$3B_0;
        var $$t_B = this;

        this.$2s_0.$7U_1(function($p1_0) {
            for (var $v_1 = 0; $v_1 < itemsUpdated.length; $v_1++) {
                var $v_2 = itemsUpdated[$v_1];
                var $v_3 = SP.UI.Timeline.TimelineDatasource.EnsureDataItem($$t_B.$G_0.$g_0, $v_2.$2H_0, null, null, $v_2.$39_0, $v_2.$2u_0, false, $v_2.$37_0, $v_2.$38_0, true, null, null);

                if ($v_3) {
                    $v_3.navigationHandler = $v_2.$30_0;
                    $v_3.retrieveToolTipContents = $v_2.$3C_0;
                    if (!$v_3.startTime) {
                        $v_3.startTime = $v_3.endTime;
                    }
                    if (!$v_3.endTime) {
                        $v_3.endTime = $v_3.startTime;
                    }
                    if (!$v_0 && !itemsRemoved.length) {
                        if ($v_3.startTime && $v_3.endTime) {
                            if (!($v_3.startTime - $v_3.endTime)) {
                                $v_3.isMilestone = true;
                            }
                            if ($v_3.endTime > $$t_B.$1G_0) {
                                $$t_B.$1G_0 = $v_3.endTime;
                                $$t_B.$G_0.maxDate = $v_3.endTime;
                            }
                            if ($v_3.startTime < $$t_B.$1H_0) {
                                $$t_B.$1H_0 = $v_3.startTime;
                                $$t_B.$G_0.minDate = $v_3.startTime;
                            }
                            if ($$t_B.$G_0.maxDate.getDate() === $$t_B.$G_0.minDate.getDate() && $$t_B.$G_0.maxDate.getMonth() === $$t_B.$G_0.minDate.getMonth() && $$t_B.$G_0.maxDate.getFullYear() === $$t_B.$G_0.minDate.getFullYear()) {
                                $$t_B.$1G_0.setDate($$t_B.$1G_0.getDate() + 1);
                                $$t_B.$G_0.maxDate = $$t_B.$1G_0;
                                $$t_B.$1H_0.setDate($$t_B.$1H_0.getDate() - 1);
                                $$t_B.$G_0.minDate = $$t_B.$1H_0;
                            }
                        }
                    }
                }
                $p1_0.AddVisibleItemWithFilter($v_2.$2H_0, $v_2.$1R_0);
            }
            if (itemsRemoved.length > 0) {
                for (var $v_4 = 0; $v_4 < itemsRemoved.length; $v_4++) {
                    var $v_5 = itemsRemoved[$v_4];

                    $p1_0.RemoveItem($v_5.$2H_0);
                }
                if (!$v_0) {
                    $$t_B.$6x_0();
                    var $$t_9, $$t_A;

                    $$t_B.$G_0.tlViewData.getDateRangeOfVisibleItems($$t_9 = {
                        'val': $$t_B.$1H_0
                    }, $$t_A = {
                        'val': $$t_B.$1G_0
                    }), $$t_B.$1H_0 = $$t_9.val, $$t_B.$1G_0 = $$t_A.val;
                    $$t_B.$G_0.maxDate = $$t_B.$1G_0;
                    $$t_B.$G_0.minDate = $$t_B.$1H_0;
                }
            }
        });
    }
};
SP.UI.Timeline.TimelineControl = function SP_UI_Timeline_TimelineControl() {
    this.$$d_$7S_0 = Function.createDelegate(this, this.$7S_0);
    this.$$d_$7R_0 = Function.createDelegate(this, this.$7R_0);
    this.$$d_$8W_0 = Function.createDelegate(this, this.$8W_0);
    this.$$d_$8R_0 = Function.createDelegate(this, this.$8R_0);
    this.$$d_$8V_0 = Function.createDelegate(this, this.$8V_0);
    this.SelectElementByUid = this.selectElementByUid;
    Sys.Application.registerDisposableObject(this);
};
SP.UI.Timeline.TimelineControl.$4n = function SP_UI_Timeline_TimelineControl$$4n($p0) {
    if (!SP.UI.Timeline.TimelineControl.$2) {
        $p0();
    }
    else {
        Array.add(SP.UI.Timeline.TimelineControl.$31, $p0);
    }
};
SP.UI.Timeline.TimelineControl.$8d = function SP_UI_Timeline_TimelineControl$$8d() {
    var $v_0 = SP.UI.Timeline.TimelineControl.$31;

    SP.UI.Timeline.TimelineControl.$31 = [];
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1]();
    }
};
SP.UI.Timeline.TimelineControl.get_currentGraphics = function SP_UI_Timeline_TimelineControl$get_currentGraphics() {
    return SP.UI.Timeline.TimelineControl.$2;
};
SP.UI.Timeline.TimelineControl.$79 = function SP_UI_Timeline_TimelineControl$$79($p0) {
    SP.UI.Timeline.TimelineControl.$2 = $p0;
};
SP.UI.Timeline.TimelineControl.$7X = function SP_UI_Timeline_TimelineControl$$7X() {
    SP.UI.Timeline.TimelineControl.$2 = null;
};
SP.UI.Timeline.TimelineControl.$1C = function SP_UI_Timeline_TimelineControl$$1C($p0, $p1) {
    try {
        SP.UI.Timeline.TimelineControl.$79($p0);
        $p1();
    }
    finally {
        SP.UI.Timeline.TimelineControl.$7X();
    }
    SP.UI.Timeline.TimelineControl.$8d();
};
SP.UI.Timeline.TimelineControl.$4Z = function SP_UI_Timeline_TimelineControl$$4Z($p0) {
    $p0.organizeIntoChannels();
};
SP.UI.Timeline.TimelineControl.get_$7J = function SP_UI_Timeline_TimelineControl$get_$7J() {
    if (!SP.UI.Timeline.TimelineControl.$B) {
        SP.UI.Timeline.TimelineControl.$B = {};
        SP.UI.Timeline.TimelineControl.$B['cxtTL'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLTab'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLActionGrp'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLShowHideGrp'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdDateFmt'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdDateFmtPopulate'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdDateFmtSelect'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowDates'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowProjSummDates'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowTimescale'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowToday'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdTimelineWidth'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowDatesQuery'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowProjSummDatesQuery'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowTodayQuery'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdShowTimescaleQuery'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLCmdTimelineWidthQuery'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLGetFontBackgroundColorMenuXml'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLGetFontColorMenuXml'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLGetFontFamilyMenuXml'] = true;
        SP.UI.Timeline.TimelineControl.$B['TLGetFontSizeMenuXml'] = true;
        SP.UI.Timeline.TimelineControl.$B['FontFamilyThemeClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['FontFamilyCssClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['FontSizeCssClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['BackgroundColorCssClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['BackgroundColorThemeClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['BackgroundColorCustom'] = true;
        SP.UI.Timeline.TimelineControl.$B['ColorCssClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['ColorThemeClass'] = true;
        SP.UI.Timeline.TimelineControl.$B['ColorCustom'] = true;
    }
    return SP.UI.Timeline.TimelineControl.$B;
};
SP.UI.Timeline.TimelineControl.getNumberFromXml = function SP_UI_Timeline_TimelineControl$getNumberFromXml(elem, attributeName, defaultValue) {
    var $v_0 = elem.getAttribute(attributeName);

    if (!$v_0 || !$v_0.length) {
        return defaultValue;
    }
    var $v_1 = Number.parseInvariant($v_0);

    return SP.UI.Timeline.TimelineControl.$4V($v_1, defaultValue);
};
SP.UI.Timeline.TimelineControl.$4V = function SP_UI_Timeline_TimelineControl$$4V($p0, $p1) {
    if ($p0 < 0) {
        return $p1;
    }
    if ($p0 > 4294967296) {
        return $p1;
    }
    if ($p0 > 2147483647) {
        $p0 = $p0 - 4294967296;
    }
    return $p0;
};
SP.UI.Timeline.TimelineControl.$2Q = function SP_UI_Timeline_TimelineControl$$2Q($p0) {
    if ($p0 >= 0) {
        return $p0.toString();
    }
    $p0 = 4294967296 + $p0;
    return $p0.toString();
};
SP.UI.Timeline.TimelineControl.getBooleanFromXml = function SP_UI_Timeline_TimelineControl$getBooleanFromXml(elem, attributeName, defaultValue) {
    var $v_0 = elem.getAttribute(attributeName);

    if (!$v_0 || !$v_0.length) {
        return defaultValue;
    }
    if ($v_0 === '0') {
        return false;
    }
    if ($v_0 === '1') {
        return true;
    }
    return defaultValue;
};
SP.UI.Timeline.TimelineControl.$4N = function SP_UI_Timeline_TimelineControl$$4N($p0) {
    return $p0 ? '1' : '0';
};
SP.UI.Timeline.TimelineControl.getEscapedStringForXml = function SP_UI_Timeline_TimelineControl$getEscapedStringForXml(originalString) {
    if (!originalString) {
        return originalString;
    }
    var $v_0 = originalString.replace(new RegExp('&', 'g'), '&amp;');

    $v_0 = $v_0.replace(new RegExp('\"', 'g'), '&quot;');
    $v_0 = $v_0.replace(new RegExp('<', 'g'), '&lt;');
    $v_0 = $v_0.replace(new RegExp('>', 'g'), '&gt;');
    return $v_0;
};
SP.UI.Timeline.TimelineControl.getUnEscapedStringForXml = function SP_UI_Timeline_TimelineControl$getUnEscapedStringForXml(escapedString) {
    if (!escapedString) {
        return escapedString;
    }
    var $v_0 = escapedString.replace(new RegExp('&quot;', 'g'), '\"');

    $v_0 = $v_0.replace(new RegExp('&lt;', 'g'), '<');
    $v_0 = $v_0.replace(new RegExp('&gt;', 'g'), '>');
    $v_0 = $v_0.replace(new RegExp('&amp;', 'g'), '&');
    return $v_0;
};
SP.UI.Timeline.TimelineControl.$7m = function SP_UI_Timeline_TimelineControl$$7m() {
    SP.UI.Timeline.TimelinePageComponent.timelineHasChanged();
};
SP.UI.Timeline.TimelineControl.prototype = {
    $1a_0: null,
    $h_0: null,
    $a_0: null,
    $W_0: null,
    $1d_0: null,
    $H_0: null,
    $c_0: false,
    $1E_0: null,
    $D_0: null,
    $2B_0: false,
    $1Q_0: null,
    $2I_0: false,
    $6f_0: null,
    $3y_0: 0,
    $3z_0: 0,
    $3w_0: 0,
    $3x_0: 0,
    $55_0: 0,
    $6a_0: null,
    Init: function SP_UI_Timeline_TimelineControl$Init(parentId, tlds) {
        if (!this.$2B_0) {
            var $$t_2 = this;

            SP.Timeline.InstrumentedApi.JsApiUtils.executeWithJsApiLoaded(function() {
                SP.Timeline.InstrumentedApi.Timeline.WrapImplementationInApiAndMarkInitComplete($$t_2);
            });
        }
        this.$1a_0 = parentId;
        this.$h_0 = tlds;
        this.$2I_0 = false;
    },
    get_parentId: function SP_UI_Timeline_TimelineControl$get_parentId() {
        return this.$1a_0;
    },
    set_parentId: function SP_UI_Timeline_TimelineControl$set_parentId(value) {
        this.$1a_0 = value;
        return value;
    },
    get_dataSource: function SP_UI_Timeline_TimelineControl$get_dataSource() {
        return this.$h_0;
    },
    set_dataSource: function SP_UI_Timeline_TimelineControl$set_dataSource(value) {
        this.$h_0 = value;
        return value;
    },
    get_mainArea: function SP_UI_Timeline_TimelineControl$get_mainArea() {
        return this.$D_0;
    },
    set_mainArea: function SP_UI_Timeline_TimelineControl$set_mainArea(value) {
        this.$D_0 = value;
        return value;
    },
    get_$E_0: function SP_UI_Timeline_TimelineControl$get_$E_0() {
        if (this.get_data() && (this.get_data()).tlViewData) {
            return (this.get_data()).tlViewData.$45_0;
        }
        return null;
    },
    get_data: function SP_UI_Timeline_TimelineControl$get_data() {
        if (!this.$W_0 && this.$h_0) {
            this.$W_0 = this.$h_0.RetrieveData();
        }
        return this.$W_0;
    },
    get_elements: function SP_UI_Timeline_TimelineControl$get_elements() {
        if (this.get_data() && (this.get_data()).tlViewData) {
            return (this.get_data()).tlViewData.$7_0;
        }
        return null;
    },
    get_$6C_0: function SP_UI_Timeline_TimelineControl$get_$6C_0() {
        if (this.get_data() && (this.get_data()).tlViewData) {
            return (this.get_data()).tlViewData.$s_0;
        }
        return null;
    },
    get_$Z_0: function SP_UI_Timeline_TimelineControl$get_$Z_0() {
        if (this.get_data() && (this.get_data()).tlViewData) {
            return (this.get_data()).tlViewData.$15_0;
        }
        return null;
    },
    get_$16_0: function SP_UI_Timeline_TimelineControl$get_$16_0() {
        if (this.$h_0) {
            return this.$h_0.get_IsReadOnly() || this.$2B_0;
        }
        return true;
    },
    get_isMobileMode: function SP_UI_Timeline_TimelineControl$get_isMobileMode() {
        return this.$2B_0;
    },
    get_$6q_0: function SP_UI_Timeline_TimelineControl$get_$6q_0() {
        if (!this.$1d_0) {
            this.$1d_0 = new SP.UI.Timeline.SelectionManager(this);
        }
        return this.$1d_0;
    },
    get_dateFormatString: function SP_UI_Timeline_TimelineControl$get_dateFormatString() {
        return !this.get_$E_0() ? '' : (this.get_$E_0()).get_dateFormatString();
    },
    AddEventHandler: function SP_UI_Timeline_TimelineControl$AddEventHandler(eventType, handler) {
        if (!this.$1Q_0) {
            this.$1Q_0 = new Array(2);
        }
        if (!this.$1Q_0[eventType]) {
            this.$1Q_0[eventType] = [];
        }
        Array.add(this.$1Q_0[eventType], handler);
    },
    $4F_0: function SP_UI_Timeline_TimelineControl$$4F_0() {
        if (eval('typeof(APD_InAssetPicker)') !== 'undefined' && APD_InAssetPicker()) {
            return false;
        }
        return true;
    },
    Render: function SP_UI_Timeline_TimelineControl$Render() {
        if (!this.$4F_0()) {
            var $v_1 = $get(this.$1a_0);

            if ($v_1 && $v_1.style.height) {
                $v_1.style.height = '';
            }
            return;
        }
        this.$a_0 = this.$7N_0();
        this.$78_0();
        if (!this.$h_0) {
            this.$1O_0(2, null);
        }
        if (!this.$c_0 && !this.get_data()) {
            this.$1O_0(2, null);
        }
        var $v_0 = null;

        if (!this.$c_0) {
            $v_0 = (this.get_data()).tlViewData;
        }
        if (!this.$c_0) {
            this.$7e_0();
            this.$8I_0(this.get_data());
        }
        if (!this.$c_0) {
            this.$7Y_0($v_0);
        }
        this.$4O_0();
        this.$6f_0 = this.$$d_$8V_0;
        this.$6a_0 = this.$$d_$8R_0;
        $addHandler(window, 'resize', this.$6f_0);
        $addHandler(this.$a_0, 'keydown', this.$6a_0);
        SP.UI.Workspace.add_resized(this.$$d_$8W_0);
        this.$3y_0 = document.body.clientHeight;
        this.$3z_0 = document.body.clientWidth;
        this.$3w_0 = document.body.scrollHeight;
        this.$3x_0 = document.body.scrollWidth;
    },
    SetToMobileMode: function SP_UI_Timeline_TimelineControl$SetToMobileMode() {
        this.$2B_0 = true;
    },
    $7l_0: function SP_UI_Timeline_TimelineControl$$7l_0($p0) {
        if (this.$1Q_0 && this.$1Q_0[$p0]) {
            var $$t_2 = this;

            Array.forEach(this.$1Q_0[$p0], function($p1_0) {
                $p1_0();
            });
        }
    },
    $8R_0: function SP_UI_Timeline_TimelineControl$$8R_0($p0) {
        var $v_0 = $p0.altKey;
        var $v_1 = $p0.ctrlKey;
        var $v_2 = $p0.shiftKey;

        if ($v_0 || $v_1 || $v_2) {
            return;
        }
        switch ($p0.keyCode) {
        case 127:
            if (this.canHandleCommand('TLCmdRmvFromTimeline')) {
                this.handleCommand('TLCmdRmvFromTimeline', '');
            }
            break;
        case 27:
            this.selectElementByUid(null);
            break;
        }
    },
    ParentResize: function SP_UI_Timeline_TimelineControl$ParentResize(callback) {
        var $$t_1 = this;

        SP.UI.Timeline.TimelineControl.$4n(function() {
            $$t_1.$3a_0();
            callback();
        });
    },
    $8W_0: function SP_UI_Timeline_TimelineControl$$8W_0() {
        var $$t_2 = this;

        window.setTimeout(function() {
            var $v_0 = document.body.scrollHeight;
            var $v_1 = document.body.scrollWidth;

            if ($v_1 !== $$t_2.$3x_0 || $v_0 !== $$t_2.$3w_0) {
                $$t_2.$3w_0 = $v_0;
                $$t_2.$3x_0 = $v_1;
                $$t_2.$3a_0();
            }
        }, 0);
    },
    $3a_0: function SP_UI_Timeline_TimelineControl$$3a_0() {
        this.$a_0.style.width = '';
        this.$a_0.style.height = '';
        this.$4f_0();
    },
    $8V_0: function SP_UI_Timeline_TimelineControl$$8V_0($p0) {
        var $$t_3 = this;

        window.setTimeout(function() {
            var $v_0 = document.body.clientHeight;
            var $v_1 = document.body.clientWidth;

            if ($v_1 !== $$t_3.$3z_0 || $v_0 !== $$t_3.$3y_0) {
                $$t_3.$3y_0 = $v_0;
                $$t_3.$3z_0 = $v_1;
                $$t_3.$3a_0();
            }
        }, 0);
    },
    $7f_0: function SP_UI_Timeline_TimelineControl$$7f_0() {
        if (!this.$D_0) {
            this.$D_0 = new SP.UI.Timeline.TimelineMainArea();
        }
    },
    $7Y_0: function SP_UI_Timeline_TimelineControl$$7Y_0($p0) {
        if (!$p0) {
            this.$1O_0(1, null);
            return;
        }
        else {
            if ($p0.$c_0) {
                this.$1O_0(0, $p0.$1E_0);
                return;
            }
        }
    },
    $4O_0: function SP_UI_Timeline_TimelineControl$$4O_0() {
        if (!this.$c_0) {
            this.bindData(this.get_data());
        }
        if (!this.$c_0) {
            SP.UI.Timeline.TimelineControl.$4Z((this.get_elements()).get_bars());
        }
        this.$7V_0();
        var $v_0 = $get(this.$1a_0);

        if ($v_0.style.height) {
            var $v_1 = this.$H_0.get_height() + 'px';

            if (!this.$h_0.get_IsReadOnly() && $v_0.style.height !== $v_1) {
                this.save();
            }
            $v_0.style.height = '';
        }
    },
    $1O_0: function SP_UI_Timeline_TimelineControl$$1O_0($p0, $p1) {
        this.$c_0 = true;
        var $$t_2 = this;

        EnsureScriptFunc('sts_strings.js', 'Strings.STS.L_TimelineErrorInvalidFormattingData', function() {
            switch ($p0) {
            case 0:
                $$t_2.$1E_0 = $p1;
                break;
            case 1:
                $$t_2.$1E_0 = Strings.STS.L_TimelineErrorInvalidFormattingData;
                break;
            case 2:
                $$t_2.$1E_0 = Strings.STS.L_TimelineErrorInvalidElementData;
                break;
            }
        });
    },
    $5P_0: function SP_UI_Timeline_TimelineControl$$5P_0() {
        (this.get_data()).tlViewData.clearError();
        this.$c_0 = false;
        this.$1E_0 = null;
    },
    bindData: function SP_UI_Timeline_TimelineControl$bindData(data) {
        for (var $v_0 = 0; $v_0 < ((this.get_elements()).get_bars()).get_length(); $v_0++) {
            var $v_1 = ((this.get_elements()).get_bars()).get_item($v_0);

            $v_1.bindToUnderlyingData(data.$g_0);
        }
        for (var $v_2 = 0; $v_2 < ((this.get_elements()).get_callouts()).get_length(); $v_2++) {
            var $v_3 = ((this.get_elements()).get_callouts()).get_item($v_2);

            $v_3.bindToUnderlyingData(data.$g_0);
        }
        for (var $v_4 = 0; $v_4 < ((this.get_elements()).get_milestones()).get_length(); $v_4++) {
            var $v_5 = ((this.get_elements()).get_milestones()).get_item($v_4);

            $v_5.bindToUnderlyingData(data.$g_0);
        }
    },
    $8I_0: function SP_UI_Timeline_TimelineControl$$8I_0($p0) {
        $p0.add_onDataItemChanged(this.$$d_$7R_0);
        $p0.add_onVisibleItemChanged(this.$$d_$7S_0);
    },
    $7R_0: function SP_UI_Timeline_TimelineControl$$7R_0($p0, $p1) {
        if ($p1.uids && $p1.uids.length > 0) {
            for (var $v_0 = 0; $v_0 < $p1.uids.length; $v_0++) {
                var $v_1 = $p1.uids[$v_0];

                if ($v_1 && $v_1.length > 0) {
                    this.$7h_0($v_1);
                }
            }
        }
        var $$t_4 = this;

        SP.UI.Timeline.TimelineControl.$4n(function() {
            $$t_4.$5P_0();
            $$t_4.$4O_0();
        });
    },
    $7S_0: function SP_UI_Timeline_TimelineControl$$7S_0($p0, $p1) {
        var $$t_2 = this;

        SP.UI.Timeline.TimelineControl.$4n(function() {
            $$t_2.$5P_0();
            $$t_2.$4O_0();
            $$t_2.save();
        });
    },
    $7h_0: function SP_UI_Timeline_TimelineControl$$7h_0($p0) {
        (this.get_elements()).$7c_0($p0);
    },
    $7V_0: function SP_UI_Timeline_TimelineControl$$7V_0() {
        var $v_0 = this.$a_0.clientWidth;
        var $v_1 = this.$a_0.clientHeight;

        if (this.$H_0) {
            this.$H_0.set_width($v_0);
            this.$H_0.set_height($v_1);
        }
        else {
            this.$H_0 = SP.UI.Timeline.GraphicsFactory.getGraphicsRenderer(this.$a_0, $v_0, $v_1, XUI.Html.GetDirection() === 'rtl', this.$2B_0 ? 2 : 1);
        }
        if (!this.$c_0) {
            this.$7f_0();
            this.$D_0.hide();
            this.$8X_0();
            this.$D_0.show();
        }
        else {
            var $v_2 = this.$H_0.CreateRect(this.$a_0);

            XUI.Html.SetText($v_2, this.$1E_0);
        }
    },
    get_isAnyTaskShowing: function SP_UI_Timeline_TimelineControl$get_isAnyTaskShowing() {
        return this.$2I_0;
    },
    get_allVisibleItems: function SP_UI_Timeline_TimelineControl$get_allVisibleItems() {
        this.$2I_0 = false;
        var $v_0 = new SP.UI.Timeline.AllVisibleItemsCollection();

        $v_0.add(this.$D_0);
        var $v_1 = this.$D_0.$1x_1;
        var $v_2 = (this.get_elements()).get_bars();

        for (var $v_5 = 0; $v_5 < $v_2.get_length(); $v_5++) {
            var $v_6 = $v_2.get_item($v_5);

            if ($v_6.get_shouldShow()) {
                this.$2I_0 = true;
                $v_0.add($v_6);
            }
        }
        var $v_3 = (this.get_elements()).get_milestones();

        for (var $v_7 = 0; $v_7 < $v_3.get_length(); $v_7++) {
            var $v_8 = $v_3.get_item($v_7);

            if ($v_8.get_shouldShow()) {
                this.$2I_0 = true;
                $v_0.add($v_8);
            }
        }
        var $v_4 = (this.get_elements()).get_callouts();

        for (var $v_9 = 0; $v_9 < $v_4.get_length(); $v_9++) {
            var $v_A = $v_4.get_item($v_9);

            if ($v_A.get_shouldShow()) {
                this.$2I_0 = true;
                $v_0.add($v_A);
            }
        }
        if (this.get_showTimescale() && $v_1.$8_0) {
            $v_0.add($v_1);
        }
        $v_0.add(this.$D_0.$1L_1);
        if (this.get_showToday()) {
            this.$D_0.$1L_1.show();
        }
        else {
            this.$D_0.$1L_1.hide();
        }
        if (this.get_showSummaryMarkers() && this.$D_0.$1J_1.$8_0) {
            var $v_B = this.$D_0.$1J_1;

            $v_0.add($v_B);
            var $v_C = this.$D_0.$1S_1;

            $v_C.$F_0 = this.$D_0.$p_1;
            $v_0.add($v_C);
        }
        return $v_0;
    },
    $8X_0: function SP_UI_Timeline_TimelineControl$$8X_0() {
        (this.get_$1o_0()).$3S_0();
    },
    $4d_0: function SP_UI_Timeline_TimelineControl$$4d_0() {
        (this.get_$1o_0()).$3S_0();
    },
    $4e_0: function SP_UI_Timeline_TimelineControl$$4e_0() {
        (this.get_$1o_0()).$4e_0();
    },
    $4f_0: function SP_UI_Timeline_TimelineControl$$4f_0() {
        (this.get_$1o_0()).$4f_0();
    },
    $4i_0: function SP_UI_Timeline_TimelineControl$$4i_0() {
        (this.get_$1o_0()).$3S_0();
    },
    $6Y_0: function SP_UI_Timeline_TimelineControl$$6Y_0($p0) {
        (this.get_$1o_0()).$6Y_0($p0);
    },
    $23_0: function SP_UI_Timeline_TimelineControl$$23_0() {
        (this.get_$1o_0()).$23_0();
    },
    $40_0: null,
    get_$1o_0: function SP_UI_Timeline_TimelineControl$get_$1o_0() {
        if (!this.$40_0) {
            this.$40_0 = new SP.UI.Timeline.TimelineControl.RenderPipeline(this);
        }
        return this.$40_0;
    },
    save: function SP_UI_Timeline_TimelineControl$save() {
        if (!this.$h_0.get_IsReadOnly()) {
            (this.get_$E_0()).$2i_0 = this.$H_0.get_height();
            this.$h_0.Save();
        }
    },
    get_showToday: function SP_UI_Timeline_TimelineControl$get_showToday() {
        if (this.get_$E_0()) {
            return (this.get_$E_0()).$1g_0;
        }
        return true;
    },
    get_showSummaryMarkers: function SP_UI_Timeline_TimelineControl$get_showSummaryMarkers() {
        return this.get_$E_0() ? (this.get_$E_0()).$1e_0 : false;
    },
    get_showTimescale: function SP_UI_Timeline_TimelineControl$get_showTimescale() {
        if (this.get_$E_0()) {
            return (this.get_$E_0()).$1f_0;
        }
        return true;
    },
    $7e_0: function SP_UI_Timeline_TimelineControl$$7e_0() {
        if (!this.get_data() || !(this.get_data()).$g_0) {
            this.$1O_0(2, null);
        }
    },
    canHandleCommand: function SP_UI_Timeline_TimelineControl$canHandleCommand(commandId) {
        if (!this.$h_0 || this.$h_0.get_IsReadOnly()) {
            return false;
        }
        if ((SP.UI.Timeline.TimelineControl.get_$7J())[commandId]) {
            return true;
        }
        return (this.get_$6q_0()).$7D_0(commandId);
    },
    handleCommand: function SP_UI_Timeline_TimelineControl$handleCommand(commandId, commandValue) {
        var $v_0 = true;

        switch (commandId) {
        case 'TLCmdTimelineWidth':
            (this.get_$E_0()).$8t_0(this.$D_0.$p_1);
            if ((this.get_$E_0()).$u_0 < 0) {
                this.$3a_0();
            }
            break;
        case 'TLCmdShowToday':
            (this.get_$E_0()).$8r_0();
            if ((this.get_$E_0()).$1g_0) {
                this.$D_0.$1L_1.show();
                this.$4d_0();
            }
            else {
                this.$D_0.$1L_1.hide();
                this.$4i_0();
            }
            break;
        case 'TLCmdShowDates':
            (this.get_$E_0()).$8p_0();
            this.$4e_0();
            break;
        case 'TLCmdShowProjSummDates':
            (this.get_$E_0()).$8q_0();
            if ((this.get_$E_0()).$1e_0) {
                this.$D_0.$1J_1.show();
                this.$D_0.$1S_1.show();
            }
            else {
                this.$D_0.$1J_1.hide();
                this.$D_0.$1S_1.hide();
            }
            (this.get_$1o_0()).$3S_0();
            break;
        case 'TLCmdShowTimescale':
            (this.get_$E_0()).$8s_0();
            if ((this.get_$E_0()).$1f_0) {
                this.$D_0.$1x_1.show();
                this.$4d_0();
            }
            else {
                this.$D_0.$1x_1.hide();
                this.$4i_0();
            }
            break;
        case 'TLCmdDateFmtSelect':
            (this.get_$E_0()).$8w_0(commandValue);
            this.$4e_0();
            break;
        case 'TLCmdDateFmt':
            break;
        default:
            $v_0 = this.$1d_0.$87_0(commandId, commandValue);
            break;
        }
        if (true === $v_0) {
            SP.UI.Timeline.TimelinePageComponent.timelineHasChanged();
            this.save();
        }
        return $v_0;
    },
    $7N_0: function SP_UI_Timeline_TimelineControl$$7N_0() {
        var $v_0 = $get(this.$1a_0);
        var $v_1 = document.createElement('div');

        $v_1.id = 'div' + $v_0.id;
        $v_1.style.position = 'relative';
        $v_1.style.msTouchAction = 'none';
        $v_1.style.msContentZooming = 'none';
        if (XUI.Html.GetDirection() === 'ltr') {
            $v_1.style.posLeft = 0;
        }
        else {
            $v_1.style.posRight = 0;
        }
        $v_1.style.posTop = 0;
        $v_1 = $v_0.appendChild($v_1);
        return $v_1;
    },
    $78_0: function SP_UI_Timeline_TimelineControl$$78_0() {
        if (this.$a_0.fireEvent) {
            var $v_0 = $get(this.$1a_0);
            var $$t_1 = this;

            this.AddEventHandler(0, function() {
                if ($v_0.firstChild === $$t_1.$a_0) {
                    $$t_1.$a_0.fireEvent('onbeforeupdate');
                }
            });
            var $$t_2 = this;

            this.AddEventHandler(1, function() {
                if ($v_0.firstChild === $$t_2.$a_0) {
                    $$t_2.$a_0.fireEvent('onafterupdate');
                }
            });
        }
    },
    get_timelinePageComponent: function SP_UI_Timeline_TimelineControl$get_timelinePageComponent() {
        return SP.UI.Timeline.TimelinePageComponent.get_$4T();
    },
    booleanQueryCommand: function SP_UI_Timeline_TimelineControl$booleanQueryCommand(commandId) {
        if (this.$c_0) {
            return false;
        }
        switch (commandId) {
        case 'TLQueryBold':
        case 'TLQueryItalics':
        case 'TLQueryUnderline':
        case 'TLCmdShowAsBarQuery':
        case 'TLCmdShowAsCalloutQuery':
            return this.$1d_0.$7B_0(commandId);
        case 'TLCmdTimelineWidthQuery':
            return (this.get_$E_0()).$u_0 > 0;
        case 'TLCmdShowDatesQuery':
            return (this.get_$E_0()).$14_0;
        case 'TLCmdShowProjSummDatesQuery':
            return this.get_showSummaryMarkers();
        case 'TLCmdShowTodayQuery':
            return this.get_showToday();
        case 'TLCmdShowTimescaleQuery':
            return this.get_showTimescale();
        default:
            return false;
        }
    },
    stringQueryCommand: function SP_UI_Timeline_TimelineControl$stringQueryCommand(commandId) {
        if (this.$c_0) {
            return null;
        }
        switch (commandId) {
        case 'TLQueryFontFamily':
        case 'TLQueryFontSize':
            return this.$1d_0.$8l_0(commandId);
        default:
            return null;
        }
    },
    selectElementByUid: function SP_UI_Timeline_TimelineControl$selectElementByUid(uid) {
        if (!uid) {
            this.$1d_0.$3Y_0(null);
            return true;
        }
        var $$t_2 = this;

        return this.$6J_0(function($p1_0) {
            if ($p1_0.matchesUid(uid) && $p1_0.get_shouldShow()) {
                $$t_2.$1d_0.$3Y_0($p1_0);
                return true;
            }
            return false;
        });
    },
    IsDragging: function SP_UI_Timeline_TimelineControl$IsDragging() {
        var $$t_1 = this;

        return this.$6J_0(function($p1_0) {
            if ($p1_0.$1r_0) {
                return true;
            }
            return false;
        });
    },
    $6J_0: function SP_UI_Timeline_TimelineControl$$6J_0($p0) {
        var $v_0 = (this.get_elements()).get_bars();

        for (var $v_3 = 0; $v_3 < $v_0.get_length(); $v_3++) {
            if ($p0($v_0.get_item($v_3))) {
                return true;
            }
        }
        var $v_1 = (this.get_elements()).get_milestones();

        for (var $v_4 = 0; $v_4 < $v_1.get_length(); $v_4++) {
            if ($p0($v_1.get_item($v_4))) {
                return true;
            }
        }
        var $v_2 = (this.get_elements()).get_callouts();

        for (var $v_5 = 0; $v_5 < $v_2.get_length(); $v_5++) {
            if ($p0($v_2.get_item($v_5))) {
                return true;
            }
        }
        return false;
    },
    HorizontalScrollBarPosition: function SP_UI_Timeline_TimelineControl$HorizontalScrollBarPosition(viewport, container) {
        if (this.IsFixedWidth()) {
            return 0;
        }
        else {
            return (container.clientWidth - this.$D_0.$p_1) / 2 + this.$D_0.$1L_1.$1c_0 - viewport.clientWidth / 5;
        }
    },
    IsFixedWidth: function SP_UI_Timeline_TimelineControl$IsFixedWidth() {
        if (this.get_$E_0()) {
            return (this.get_$E_0()).$u_0 > 0;
        }
        else {
            return false;
        }
    },
    SetMinHeight: function SP_UI_Timeline_TimelineControl$SetMinHeight(value) {
        this.$55_0 = value;
    },
    GetHeight: function SP_UI_Timeline_TimelineControl$GetHeight() {
        return this.$a_0 ? this.$a_0.clientHeight : 0;
    },
    dispose: function SP_UI_Timeline_TimelineControl$dispose() {
        (SP.UI.Timeline.TimelinePageComponent.get_$4T()).clean(this);
        if (this.$H_0) {
            (this.get_elements()).$7F_0(this.$H_0);
        }
    }
};
SP.UI.Timeline.TimelineControl.RenderEventType = function() {
};
SP.UI.Timeline.TimelineControl.RenderEventType.prototype = {
    BeforeUpdate: 0,
    AfterUpdate: 1
};
SP.UI.Timeline.TimelineControl.RenderEventType.registerEnum('SP.UI.Timeline.TimelineControl.RenderEventType', false);
SP.UI.Timeline.TimelineControl.RenderPipeline = function SP_UI_Timeline_TimelineControl_RenderPipeline($p0) {
    this.$5_0 = $p0;
};
SP.UI.Timeline.TimelineControl.RenderPipeline.prototype = {
    $5_0: null,
    get_$25_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$25_0() {
        return this.$5_0;
    },
    get_$S_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$S_0() {
        return this.$5_0.$D_0;
    },
    get_$L_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$L_0() {
        return this.$5_0.get_data();
    },
    get_$2j_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$2j_0() {
        return this.$5_0.get_allVisibleItems();
    },
    get_$T_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$T_0() {
        return this.$5_0.get_elements();
    },
    get_$Q_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$get_$Q_0() {
        return this.$5_0.$H_0;
    },
    $3S_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$3S_0() {
        if (this.$5_0.$4F_0()) {
            var $$t_2 = this;

            SP.UI.Timeline.TimelineControl.$1C(this.get_$Q_0(), function() {
                if (($$t_2.get_$Q_0()).get_width() > 0) {
                    $$t_2.$1A_0(0);
                    var $v_0 = $$t_2.get_$2j_0();

                    if (!($$t_2.get_$S_0()).$p_1) {
                        var $v_1 = new SP.UI.Timeline.AllVisibleItemsCollection();

                        $v_1.add($$t_2.get_$S_0());
                        $$t_2.$5m_0($v_1);
                    }
                    $$t_2.$5m_0($v_0);
                    $$t_2.$1A_0(1);
                }
            });
        }
    },
    $4e_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$4e_0() {
        var $$t_0 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_$Q_0(), function() {
            $$t_0.$1A_0(0);
            $$t_0.$5N_0($$t_0.get_$2j_0());
            $$t_0.$1A_0(1);
        });
    },
    $4f_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$4f_0() {
        var $$t_0 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_$Q_0(), function() {
            $$t_0.$1A_0(0);
            $$t_0.$5R_0($$t_0.get_$2j_0());
            $$t_0.$1A_0(1);
        });
    },
    $6Y_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$6Y_0($p0) {
        var $$t_1 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_$Q_0(), function() {
            $$t_1.$1A_0(0);
            $$t_1.$5L_0($$t_1.get_$2j_0(), $p0);
            $$t_1.$1A_0(1);
        });
    },
    $23_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$23_0() {
        var $$t_0 = this;

        SP.UI.Timeline.TimelineControl.$1C(this.get_$Q_0(), function() {
            $$t_0.$1A_0(0);
            $$t_0.$5K_0($$t_0.get_$2j_0());
            $$t_0.$1A_0(1);
        });
    },
    $6v_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$6v_0($p0) {
        var $v_0 = (this.get_$S_0()).$p_1;
        var $v_1 = (this.get_$L_0()).minDate;
        var $v_2 = (this.get_$L_0()).maxDate;
        var $v_3 = $v_2 - $v_1;

        if ($v_3 <= 0) {
            if (this.$5_0.get_isAnyTaskShowing()) {
                $v_2 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate(), $v_1.getHours() + 1, $v_1.getMinutes(), $v_1.getSeconds());
                $v_1 = new Date($v_2.getFullYear(), $v_2.getMonth(), $v_2.getDate(), $v_2.getHours() - 2, $v_2.getMinutes(), $v_2.getSeconds());
                $v_3 = 7200000;
            }
            else {
                var $v_5 = new Date();

                $v_1 = new Date($v_5.getFullYear(), $v_5.getMonth() - 1, $v_5.getDate(), $v_5.getHours(), $v_5.getMinutes(), $v_5.getSeconds());
                $v_2 = new Date($v_5.getFullYear(), $v_5.getMonth() + 2, $v_5.getDate(), $v_5.getHours(), $v_5.getMinutes(), $v_5.getSeconds());
                $v_3 = $v_2 - $v_1;
            }
        }
        var $v_4 = ($v_0 - 1) / $v_3;

        for (var $v_6 = 0; $v_6 < $p0.get_length(); $v_6++) {
            var $v_7 = $p0.get_item($v_6);

            $v_7.setHorizontalPosition($v_4, $v_1, $v_2, $v_0);
        }
    },
    $5m_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5m_0($p0) {
        this.$6v_0($p0);
        this.$7d_0($p0);
    },
    $7d_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$7d_0($p0) {
        $p0.sort();
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.get_item($v_0);

            if ($v_1.isPhysicalElementsCreated(this.get_$Q_0())) {
                continue;
            }
            $v_1.createPhysicalElements((this.get_$S_0()).$K_1);
            if (!this.$5_0.$2B_0 && $v_1.isSelectable()) {
                var $v_2 = $v_1;

                $v_2.addSelectionDetectionHandlers((this.get_$25_0()).get_$6q_0());
            }
        }
        this.$5N_0($p0);
    },
    $5N_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5N_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.get_item($v_0);

            $v_1.formatTextProperties((this.get_$25_0()).get_$E_0());
            $v_1.updateTextAndStyling((this.get_$25_0()).get_$6C_0(), (this.get_$25_0()).get_$Z_0(), this.$5_0.get_isAnyTaskShowing());
        }
        this.$5R_0($p0);
    },
    $5R_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5R_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.get_item($v_0);

            $v_1.computeTextSizes();
        }
        (this.get_$T_0()).$7E_0();
        this.$5K_0($p0);
    },
    $5K_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5K_0($p0) {
        var $v_0 = 0;

        for (var $v_1 = 0; $v_1 < $p0.get_length(); $v_1++) {
            var $v_2 = $p0.get_item($v_1);

            if ($v_2.get_shouldShow()) {
                $v_0 = Math.max($v_0, $v_2.get_pixelChannelHeight());
            }
        }
        if ($v_0 > 0) {
            $v_0++;
        }
        this.$5L_0($p0, $v_0);
    },
    $5L_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5L_0($p0, $p1) {
        if (!$p1) {
            (this.get_$S_0()).set_height($p1);
            $p1 = (this.get_$S_0()).get_height() - 2;
        }
        else {
            (this.get_$S_0()).set_height(($p1 + 1) * (((this.get_$T_0()).get_bars()).$2x_0 - 1) + $p1);
        }
        this.$5J_0($p0, $p1);
    },
    $5J_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$5J_0($p0, $p1) {
        (this.get_$S_0()).$p_1 = ((this.get_$25_0()).get_$E_0()).$u_0 > 0 ? ((this.get_$25_0()).get_$E_0()).$u_0 : (this.get_$Q_0()).get_width() - (this.get_$Q_0()).get_reserveWidth();
        (this.get_$S_0()).$1S_1.$F_0 = (this.get_$S_0()).$p_1;
        this.$6v_0($p0);
        this.$7C_0($p0, $p1);
    },
    $7C_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$7C_0($p0, $p1) {
        var $v_0 = 0;
        var $v_1 = (this.get_$S_0()).get_height() + 10;
        var $v_2 = -(this.get_$S_0()).$1J_1.get_pixelWidth();
        var $v_3 = (this.get_$S_0()).$p_1;

        for (var $v_4 = 0; $v_4 < $p0.get_length(); $v_4++) {
            var $v_5 = $p0.get_item($v_4);
            var $$t_8, $$t_9, $$t_A, $$t_B;

            $v_5.handleRepositioningItems($p1, (this.get_$S_0()).get_height(), $$t_8 = {
                'val': $v_0
            }, $$t_9 = {
                'val': $v_1
            }, $$t_A = {
                'val': $v_2
            }, $$t_B = {
                'val': $v_3
            }), $v_0 = $$t_8.val, $v_1 = $$t_9.val, $v_2 = $$t_A.val, $v_3 = $$t_B.val;
        }
        $v_3 += 20;
        this.$7i_0($p0, $v_0, $v_1, $v_3, $p1);
    },
    $7i_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$7i_0($p0, $p1, $p2, $p3, $p4) {
        (this.get_$S_0()).$2J_1 = -$p1;
        (this.get_$Q_0()).set_height(Math.max((this.get_$S_0()).$2J_1 + $p2, this.$5_0.$55_0));
        (this.get_$Q_0()).set_width((this.get_$S_0()).$2E_1 + $p3);
        if (((this.get_$25_0()).get_$E_0()).$u_0 <= 0 && (this.get_$S_0()).$p_1 !== (this.get_$Q_0()).get_width() - (this.get_$Q_0()).get_reserveWidth()) {
            var $v_0 = (this.get_$Q_0()).get_reserveWidth();

            (this.get_$Q_0()).set_reserveWidth((this.get_$Q_0()).get_width() - (this.get_$S_0()).$p_1);
            (this.get_$Q_0()).set_width((this.get_$Q_0()).get_width() + ($v_0 - (this.get_$Q_0()).get_reserveWidth()));
            this.$5J_0($p0, $p4);
        }
        this.$8M_0($p0);
    },
    $8M_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$8M_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.get_item($v_0);

            $v_1.movePhysicalElements();
        }
    },
    $1A_0: function SP_UI_Timeline_TimelineControl_RenderPipeline$$1A_0($p0) {
        this.$5_0.$7l_0($p0);
    }
};
SP.UI.Timeline.TimelineDatasource = function SP_UI_Timeline_TimelineDatasource() {
};
SP.UI.Timeline.TimelineDatasource.IsValidGuid = function SP_UI_Timeline_TimelineDatasource$IsValidGuid($p0) {
    var $v_0 = new RegExp('^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$');

    return !!$v_0.exec($p0);
};
SP.UI.Timeline.TimelineDatasource.EnsureDataItem = function SP_UI_Timeline_TimelineDatasource$EnsureDataItem(items, uid, xmlUid, guid, title, dblClkUrl, isMilestone, startTime, endTime, autoCalculateRenderTime, renderStartTime, renderEndTime) {
    var $v_0 = !startTime || Object.getType(startTime) !== Date ? null : startTime;
    var $v_1 = !endTime || Object.getType(endTime) !== Date ? null : endTime;

    if (!SP.UI.Timeline.TimelineDatasource.IsValidGuid(uid) && isNaN(Number.parseLocale(uid))) {
        return null;
    }
    var $v_2 = items[uid];

    if (!$v_2) {
        $v_2 = new SP.UI.Timeline.TimelineElementItem();
    }
    if ($v_0 < SP.UI.Timeline.TimelineDatasource.$4o) {
        $v_0 = null;
    }
    if ($v_1 < SP.UI.Timeline.TimelineDatasource.$4o) {
        $v_1 = null;
    }
    if ($v_1 && $v_0 && $v_1 < $v_0) {
        var $v_3 = $v_1;

        $v_1 = $v_0;
        $v_0 = $v_3;
    }
    $v_2.uid = uid;
    $v_2.xmlUid = xmlUid;
    $v_2.guid = guid;
    $v_2.title = title;
    $v_2.url = dblClkUrl;
    $v_2.isMilestone = isMilestone;
    $v_2.startTime = $v_0;
    $v_2.endTime = $v_1;
    $v_2.renderStartTime = renderStartTime;
    $v_2.renderEndTime = renderEndTime;
    $v_2.autoCalculateRenderTime = autoCalculateRenderTime;
    items[uid] = $v_2;
    return $v_2;
};
SP.UI.Timeline.TimelineDatasource.timeMax = function SP_UI_Timeline_TimelineDatasource$timeMax(dt1, dt2) {
    if (dt1 > dt2) {
        return dt1;
    }
    return dt2;
};
SP.UI.Timeline.TimelineDatasource.timeMin = function SP_UI_Timeline_TimelineDatasource$timeMin(dt1, dt2) {
    if (dt1 < dt2) {
        return dt1;
    }
    return dt2;
};
SP.UI.Timeline.TimelineDatasource.convertUtcToLocal = function SP_UI_Timeline_TimelineDatasource$convertUtcToLocal(utcTime) {
    if (!utcTime || Object.getType(utcTime) !== Date) {
        return null;
    }
    var $v_0 = new Date();

    $v_0.setFullYear(utcTime.getUTCFullYear());
    $v_0.setMonth(utcTime.getUTCMonth());
    $v_0.setDate(utcTime.getUTCDate());
    $v_0.setHours(utcTime.getUTCHours());
    $v_0.setMinutes(utcTime.getUTCMinutes());
    $v_0.setSeconds(utcTime.getUTCSeconds());
    $v_0.setMilliseconds(utcTime.getUTCMilliseconds());
    return $v_0;
};
SP.UI.Timeline.TimelineDatasource.convertLocalToUtc = function SP_UI_Timeline_TimelineDatasource$convertLocalToUtc(localTime) {
    if (!localTime || Object.getType(localTime) !== Date) {
        return null;
    }
    var $v_0 = new Date();

    $v_0.setUTCFullYear(localTime.getFullYear());
    $v_0.setUTCMonth(localTime.getMonth());
    $v_0.setUTCDate(localTime.getDate());
    $v_0.setUTCHours(localTime.getHours());
    $v_0.setUTCMinutes(localTime.getMinutes());
    $v_0.setUTCSeconds(localTime.getSeconds());
    $v_0.setUTCMilliseconds(localTime.getMilliseconds());
    return $v_0;
};
SP.UI.Timeline.DataItemChangeEventArgs = function SP_UI_Timeline_DataItemChangeEventArgs() {
    SP.UI.Timeline.DataItemChangeEventArgs.initializeBase(this);
};
SP.UI.Timeline.DataItemChangeEventArgs.prototype = {
    uids: null
};
SP.UI.Timeline.TimelineData = function SP_UI_Timeline_TimelineData() {
    this.$27_0 = [];
    this.$1p_0 = [];
    this.$g_0 = {};
};
SP.UI.Timeline.TimelineData.$97 = function SP_UI_Timeline_TimelineData$$97($p0, $p1, $p2) {
    for (var objLoop in $p1) {
        if ($p2(objLoop)) {
            break;
        }
    }
    ;
};
SP.UI.Timeline.TimelineData.prototype = {
    $g_0: null,
    maxDate: null,
    minDate: null,
    tlViewData: null,
    get_itemData: function SP_UI_Timeline_TimelineData$get_itemData() {
        return this.$g_0;
    },
    set_itemData: function SP_UI_Timeline_TimelineData$set_itemData(value) {
        this.$g_0 = value;
        return value;
    },
    $4K_0: function SP_UI_Timeline_TimelineData$$4K_0($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.getAt($v_0);
            var $v_2 = $v_1.get_effectiveUid();

            if (!this.$g_0[$v_2]) {
                if ($v_2 !== '{00000000-0000-0000-0000-000000000000}') {
                    $p1[$v_2] = true;
                }
            }
        }
    },
    getAllMissingItems: function SP_UI_Timeline_TimelineData$getAllMissingItems() {
        var $v_0 = {};

        this.$4K_0(this.tlViewData.$7_0.get_bars(), $v_0);
        this.$4K_0(this.tlViewData.$7_0.get_callouts(), $v_0);
        this.$4K_0(this.tlViewData.$7_0.get_milestones(), $v_0);
        var $v_1 = [];
        var $$t_3 = this;

        SP.UI.Timeline.TimelineData.$97(Object, $v_0, function($p1_0) {
            Array.add($v_1, $p1_0);
            return false;
        });
        return $v_1;
    },
    $1p_0: null,
    add_onDataItemChanged: function SP_UI_Timeline_TimelineData$add_onDataItemChanged(value) {
        Array.add(this.$1p_0, value);
    },
    remove_onDataItemChanged: function SP_UI_Timeline_TimelineData$remove_onDataItemChanged(value) {
        Array.remove(this.$1p_0, value);
    },
    fireOnDataItemsChanged: function SP_UI_Timeline_TimelineData$fireOnDataItemsChanged(uids) {
        var $v_0 = new SP.UI.Timeline.DataItemChangeEventArgs();

        $v_0.uids = uids;
        for (var $v_1 = 0; $v_1 < this.$1p_0.length; $v_1++) {
            var $v_2 = this.$1p_0[$v_1];

            $v_2(this, $v_0);
        }
    },
    fireOnDataItemChanged: function SP_UI_Timeline_TimelineData$fireOnDataItemChanged(uid) {
        var $v_0 = new SP.UI.Timeline.DataItemChangeEventArgs();

        $v_0.uids = [uid];
        for (var $v_1 = 0; $v_1 < this.$1p_0.length; $v_1++) {
            var $v_2 = this.$1p_0[$v_1];

            $v_2(this, $v_0);
        }
    },
    $27_0: null,
    get_$89_0: function SP_UI_Timeline_TimelineData$get_$89_0() {
        return this.$27_0.length > 0;
    },
    fireOnVisibleItemChanged: function SP_UI_Timeline_TimelineData$fireOnVisibleItemChanged() {
        var $v_0 = new Sys.EventArgs();

        for (var $v_1 = 0; $v_1 < this.$27_0.length; $v_1++) {
            var $v_2 = this.$27_0[$v_1];

            $v_2(this, $v_0);
        }
    },
    add_onVisibleItemChanged: function SP_UI_Timeline_TimelineData$add_onVisibleItemChanged(value) {
        Array.add(this.$27_0, value);
    },
    remove_onVisibleItemChanged: function SP_UI_Timeline_TimelineData$remove_onVisibleItemChanged(value) {
        Array.remove(this.$27_0, value);
    }
};
SP.UI.Timeline.TimelineMainArea = function SP_UI_Timeline_TimelineMainArea() {
    SP.UI.Timeline.TimelineMainArea.initializeBase(this);
    this.$8_1 = true;
    this.$11_1 = null;
    this.$1x_1 = new SP.UI.Timeline.Timescale();
    this.$1L_1 = new SP.UI.Timeline.TodayMarker();
    this.$1J_1 = new SP.UI.Timeline.StartMarker();
    this.$1S_1 = new SP.UI.Timeline.FinishMarker();
};
SP.UI.Timeline.TimelineMainArea.prototype = {
    $76_1: null,
    $77_1: null,
    $56_1: null,
    $K_1: null,
    $11_1: null,
    $2w_1: 0,
    $1J_1: null,
    $1S_1: null,
    $1L_1: null,
    $1x_1: null,
    $8_1: false,
    $p_1: 0,
    $2J_1: 0,
    $2E_1: 0,
    get_today: function SP_UI_Timeline_TimelineMainArea$get_today() {
        return this.$1L_1;
    },
    set_today: function SP_UI_Timeline_TimelineMainArea$set_today(value) {
        this.$1L_1 = value;
        return value;
    },
    get_height: function SP_UI_Timeline_TimelineMainArea$get_height() {
        return this.$2w_1;
    },
    set_height: function SP_UI_Timeline_TimelineMainArea$set_height(value) {
        this.$2w_1 = value;
        if (!this.$2w_1) {
            this.$2w_1 = SP.UI.Timeline.Utilities.TimelineViewDefaults.$5e;
        }
        return value;
    },
    get_width: function SP_UI_Timeline_TimelineMainArea$get_width() {
        return this.$p_1;
    },
    set_width: function SP_UI_Timeline_TimelineMainArea$set_width(value) {
        this.$p_1 = value;
        return value;
    },
    get_nearOffset: function SP_UI_Timeline_TimelineMainArea$get_nearOffset() {
        return this.$2E_1;
    },
    set_nearOffset: function SP_UI_Timeline_TimelineMainArea$set_nearOffset(value) {
        this.$2E_1 = value;
        return value;
    },
    get_topOffset: function SP_UI_Timeline_TimelineMainArea$get_topOffset() {
        return this.$2J_1;
    },
    set_topOffset: function SP_UI_Timeline_TimelineMainArea$set_topOffset(value) {
        this.$2J_1 = value;
        return value;
    },
    get_start: function SP_UI_Timeline_TimelineMainArea$get_start() {
        return this.$1J_1;
    },
    set_start: function SP_UI_Timeline_TimelineMainArea$set_start(value) {
        this.$1J_1 = value;
        return value;
    },
    get_finish: function SP_UI_Timeline_TimelineMainArea$get_finish() {
        return this.$1S_1;
    },
    set_finish: function SP_UI_Timeline_TimelineMainArea$set_finish(value) {
        this.$1S_1 = value;
        return value;
    },
    get_timescale: function SP_UI_Timeline_TimelineMainArea$get_timescale() {
        return this.$1x_1;
    },
    set_timescale: function SP_UI_Timeline_TimelineMainArea$set_timescale(value) {
        this.$1x_1 = value;
        return value;
    },
    get_bar: function SP_UI_Timeline_TimelineMainArea$get_bar() {
        return this.$K_1;
    },
    get_effectiveUid: function SP_UI_Timeline_TimelineMainArea$get_effectiveUid() {
        return '{00000000-0000-0000-0000-0000000000000}';
    },
    matchesUid: function SP_UI_Timeline_TimelineMainArea$matchesUid(uid) {
        return this.get_effectiveUid() === uid;
    },
    get_shouldShow: function SP_UI_Timeline_TimelineMainArea$get_shouldShow() {
        return this.$8_1;
    },
    set_shouldShow: function SP_UI_Timeline_TimelineMainArea$set_shouldShow(value) {
        this.$8_1 = value;
        return value;
    },
    get_itemType: function SP_UI_Timeline_TimelineMainArea$get_itemType() {
        return 3;
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_TimelineMainArea$isPhysicalElementsCreated(graphics) {
        return !!this.$K_1;
    },
    bindToUnderlyingData: function SP_UI_Timeline_TimelineMainArea$bindToUnderlyingData(elementData) {
    },
    setHorizontalPosition: function SP_UI_Timeline_TimelineMainArea$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
    },
    get_majorPosition: function SP_UI_Timeline_TimelineMainArea$get_majorPosition() {
        return -2;
    },
    get_minorPosition: function SP_UI_Timeline_TimelineMainArea$get_minorPosition() {
        return 0;
    },
    getSubPosition: function SP_UI_Timeline_TimelineMainArea$getSubPosition() {
        return 0;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_TimelineMainArea$get_pixelChannelHeight() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_TimelineMainArea$createPhysicalElements(canvas) {
        this.$K_1 = SP.UI.Timeline.TimelineControl.$2.CreateRect(canvas);
        this.$K_1.className = 'ms-tl-mainArea';
        this.$K_1.id = this.$K_1.parentNode.id + '_main';
        this.$11_1 = document.createElement('div');
        this.$11_1.className = 'ms-tl-mainAreaTitle ms-textLarge ms-soften';
        this.$11_1.setAttribute('unselectable', 'on');
        this.$11_1.style.width = SP.UI.Timeline.Measurer.getPercentString(100);
        this.$11_1.style.textOverflow = 'ellipsis';
        this.$K_1.appendChild(this.$11_1);
        var $v_0 = document.createTextNode(Strings.STS.L_Timeline_BlankTLHelpfulText);

        this.$11_1.appendChild($v_0);
    },
    formatTextProperties: function SP_UI_Timeline_TimelineMainArea$formatTextProperties(options) {
        SP.UI.Timeline.BaseSelectableElement.prototype.updateFormatNumber.call(this, options.$1I_0);
    },
    updateTextAndStyling: function SP_UI_Timeline_TimelineMainArea$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        this.$76_1 = formats;
        this.$77_1 = tss;
        var $v_0 = formats.getFormat(this.$b_0, 3);
        var $v_1 = $v_0.getColor(formats, 3);

        this.$K_1.tabIndex = 0;
        this.$K_1.style.backgroundColor = $v_1;
        var $v_2 = $v_0.getTheme(formats, 3);

        if ($v_2 !== '0001') {
            var $v_3 = SP.UI.Timeline.RGB.rgbFromString($v_1);
            var $v_4 = SP.UI.Timeline.HSL.hsLfromRGB($v_3);
            var $v_5 = $v_4.mainAreaBorderHSL();

            this.$K_1.style.borderColor = SP.UI.Timeline.Colors.argBtoRGB((SP.UI.Timeline.HSL.rgBfromHSL($v_5)).asARGBstring());
        }
        this.$56_1 = this.$K_1.style.borderColor;
        if (this.$11_1) {
            if (fIsAnyTaskShowing) {
                this.$11_1.style.visibility = 'hidden';
            }
            else {
                this.$11_1.style.visibility = '';
            }
        }
    },
    computeTextSizes: function SP_UI_Timeline_TimelineMainArea$computeTextSizes() {
    },
    handleRepositioningItems: function SP_UI_Timeline_TimelineMainArea$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        this.$2E_1 = -nearOffset.val;
    },
    movePhysicalElements: function SP_UI_Timeline_TimelineMainArea$movePhysicalElements() {
        SP.UI.Timeline.TimelineControl.$2.MoveRect(this.$2E_1, this.$2J_1, this.$2E_1 + this.$p_1, this.$2J_1 + this.get_height(), this.$K_1);
    },
    show: function SP_UI_Timeline_TimelineMainArea$show() {
        if (this.$K_1) {
            SP.UI.Timeline.ItemTypeStatic.showElement(this.$K_1);
        }
        this.set_shouldShow(true);
    },
    showAll: function SP_UI_Timeline_TimelineMainArea$showAll() {
        this.show();
    },
    hide: function SP_UI_Timeline_TimelineMainArea$hide() {
        if (this.$K_1) {
            SP.UI.Timeline.ItemTypeStatic.hideElement(this.$K_1);
        }
        this.set_shouldShow(false);
    },
    hideAll: function SP_UI_Timeline_TimelineMainArea$hideAll() {
        this.hide();
    },
    updateFormatNumber: function SP_UI_Timeline_TimelineMainArea$updateFormatNumber(formatNumber) {
        this.$6s_1.$93_0(formatNumber);
        SP.UI.Timeline.BaseSelectableElement.prototype.updateFormatNumber.call(this, formatNumber);
    },
    showAsSelected: function SP_UI_Timeline_TimelineMainArea$showAsSelected() {
        Sys.UI.DomElement.addCssClass(this.$K_1, 'ms-tl-selectedFocused');
        this.$K_1.style.borderColor = SP.UI.Timeline.Colors.get_colorForSelected();
    },
    showAsNotSelected: function SP_UI_Timeline_TimelineMainArea$showAsNotSelected() {
        Sys.UI.DomElement.removeCssClass(this.$K_1, 'ms-tl-selectedFocused');
        this.$K_1.style.borderColor = this.$56_1;
    },
    $6O_1: null,
    $6s_1: null,
    addSelectionDetectionHandlers: function SP_UI_Timeline_TimelineMainArea$addSelectionDetectionHandlers(selMan) {
        this.$6s_1 = selMan;
        SP.UI.Timeline.BaseSelectableElement.prototype.addSelectionDetectionHandlers.call(this, selMan);
        var $$t_2 = this;

        this.$6O_1 = function($p1_0) {
            $$t_2.onClickSelect($p1_0, selMan);
        };
        $addHandler(this.$K_1, 'mousedown', this.$6O_1);
    },
    getFocusableElement: function SP_UI_Timeline_TimelineMainArea$getFocusableElement() {
        return this.$K_1;
    },
    elementsToRefreshOnStyleChange: function SP_UI_Timeline_TimelineMainArea$elementsToRefreshOnStyleChange() {
        var $v_0 = new Array(3);

        $v_0[0] = this;
        $v_0[1] = this.$1J_1;
        $v_0[2] = this.$1S_1;
        return $v_0;
    }
};
SP.UI.Timeline.TimelineRibbonCmds = function SP_UI_Timeline_TimelineRibbonCmds() {
};
SP.UI.Timeline.TimelinePageComponent = function SP_UI_Timeline_TimelinePageComponent() {
    this.$$d_$8f_1 = Function.createDelegate(this, this.$8f_1);
    this.$$d_$8g_1 = Function.createDelegate(this, this.$8g_1);
    this.$$d_$7b_1 = Function.createDelegate(this, this.$7b_1);
    this.$$d_$8N_1 = Function.createDelegate(this, this.$8N_1);
    SP.UI.Timeline.TimelinePageComponent.initializeBase(this);
    this.$4g_1 = this.$$d_$8N_1;
    Sys.Application.registerDisposableObject(this);
};
SP.UI.Timeline.TimelinePageComponent.get_$4T = function SP_UI_Timeline_TimelinePageComponent$get_$4T() {
    if (!SP.UI.Timeline.TimelinePageComponent.$1N || SP.UI.Timeline.TimelinePageComponent.$1N.$4a_1) {
        SP.UI.Timeline.TimelinePageComponent.$1N = new SP.UI.Timeline.TimelinePageComponent();
        SP.UI.Timeline.TimelinePageComponent.$1N.$2L_1(function() {
            (SP.Ribbon.PageManager.get_instance()).addPageComponent(SP.UI.Timeline.TimelinePageComponent.$1N);
            $addHandler(document.body, 'click', SP.UI.Timeline.TimelinePageComponent.$1N.$4g_1);
        });
    }
    return SP.UI.Timeline.TimelinePageComponent.$1N;
};
SP.UI.Timeline.TimelinePageComponent.$8C = function SP_UI_Timeline_TimelinePageComponent$$8C($p0) {
    while ($p0 !== document.body && $p0 && $p0.parentNode) {
        var $v_0 = $p0.getAttribute('isTimelineParent');

        if ($v_0 && $v_0.length > 0) {
            return $p0.id;
        }
        else {
            $p0 = $p0.parentNode;
        }
    }
    return null;
};
SP.UI.Timeline.TimelinePageComponent.initialize = function SP_UI_Timeline_TimelinePageComponent$initialize(tlControl, divId) {
    if (!tlControl || !tlControl.$4F_0() || !divId || !divId.length) {
        return;
    }
    (SP.UI.Timeline.TimelinePageComponent.get_$4T()).$7A_1(divId, tlControl);
};
SP.UI.Timeline.TimelinePageComponent.timelineHasChanged = function SP_UI_Timeline_TimelinePageComponent$timelineHasChanged() {
    SP.UI.Timeline.TimelinePageComponent.$1N.$2L_1(function() {
        if ((SP.Ribbon.PageManager.get_instance()).get_ribbon()) {
            ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).refresh();
        }
    });
};
SP.UI.Timeline.TimelinePageComponent.$7o = function SP_UI_Timeline_TimelinePageComponent$$7o($p0, $p1, $p2, $p3) {
    if ($p2 === 'tmp') {
        if (!SP.UI.Timeline.ItemTypeStatic.isMonthDateSupportedCulture($p3)) {
            return null;
        }
        return SP.UI.Timeline.ItemTypeStatic.createDateString($p0, $p2);
    }
    return $p1.format($p2, $p3);
};
SP.UI.Timeline.TimelinePageComponent.$6j = function SP_UI_Timeline_TimelinePageComponent$$6j($p0, $p1) {
    if (!$p0 || !$p0.length) {
        return '';
    }
    var $v_0 = RTE.StyleRuleUtility.getStyleRules($p0, RTE.Canvas.getCurrentStyleSheetPrefix(), false);

    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        var $v_3 = $v_2.rule.style[$p1];

        if ($v_3 && $v_3.length) {
            return $v_3;
        }
    }
    return $p0;
};
SP.UI.Timeline.TimelinePageComponent.prototype = {
    $2T_1: null,
    $4g_1: null,
    $R_1: null,
    $4a_1: false,
    $7A_1: function SP_UI_Timeline_TimelinePageComponent$$7A_1($p0, $p1) {
        (this.get_$62_1())[$p0] = $p1;
        var $v_0 = $get($p0);

        if (!$v_0) { }
        $v_0.setAttribute('isTimelineParent', '1');
    },
    $8N_1: function SP_UI_Timeline_TimelinePageComponent$$8N_1($p0) {
        var $v_0 = $p0.target;

        if (!SP.UI.UIUtility.focusValidOnThisNode($v_0)) {
            return;
        }
        var $v_1 = null;
        var $v_2 = SP.UI.Timeline.TimelinePageComponent.$8C($v_0);

        if ($v_2 && $v_2.length > 0) {
            $v_1 = this.$8o_1($v_2);
        }
        this.$5O_1($v_1);
    },
    $5O_1: function SP_UI_Timeline_TimelinePageComponent$$5O_1($p0) {
        if ($p0 === this.$R_1) {
            return;
        }
        if (!$p0 && this.$R_1) {
            this.$R_1.selectElementByUid(null);
            var $$t_1 = this;

            this.$2L_1(function() {
                ((SP.Ribbon.PageManager.get_instance()).get_focusManager()).releaseFocusFromComponent($$t_1);
            });
        }
        if ($p0 && !this.$R_1) {
            var $$t_2 = this;

            this.$2L_1(function() {
                ((SP.Ribbon.PageManager.get_instance()).get_focusManager()).requestFocusForComponent($$t_2);
            });
        }
        this.$R_1 = $p0;
        SP.UI.Timeline.TimelinePageComponent.timelineHasChanged();
    },
    get_$62_1: function SP_UI_Timeline_TimelinePageComponent$get_$62_1() {
        if (!this.$2T_1) {
            this.$2T_1 = {};
        }
        return this.$2T_1;
    },
    $8o_1: function SP_UI_Timeline_TimelinePageComponent$$8o_1($p0) {
        return (this.get_$62_1())[$p0];
    },
    clean: function SP_UI_Timeline_TimelinePageComponent$clean(timeline) {
        if (!this.$4a_1) {
            if (this.$2T_1) {
                delete this.$2T_1[timeline.$1a_0];
            }
            if (this.$R_1 === timeline) {
                this.$5O_1(null);
            }
        }
    },
    init: function SP_UI_Timeline_TimelinePageComponent$init() {
        if (!SP.UI.Timeline.TimelinePageComponent.$3W) {
            SP.UI.Timeline.TimelinePageComponent.$3W = ['cxtTL', 'TLTab', 'TLFontGrp', 'TLShowHideGrp', 'TLActionGrp', 'TLCurSlctnGrp', 'TLCmdShowDates', 'TLCmdShowProjSummDates', 'TLCmdShowToday', 'TLCmdShowTimescale', 'TLCmdDateFmt', 'TLCmdDateFmtPopulate', 'TLCmdDateFmtSelect', 'TLCmdTimelineWidth', 'TLCmdTimelineWidthQuery', 'TLCmdShowAsBar', 'TLCmdShowAsBarQuery', 'TLCmdShowAsCallout', 'TLCmdShowAsCalloutQuery', 'TLCmdRmvFromTimeline', 'TLCmdShowDatesQuery', 'TLCmdShowProjSummDatesQuery', 'TLCmdShowTodayQuery', 'TLCmdShowTimescaleQuery', 'TLSelectBackgroundColorOpen', 'TLGetFontBackgroundColorMenuXml', 'TLSelectBackgroundColorQuery', 'TLSelectFontColorOpen', 'TLGetFontColorMenuXml', 'TLSelectFontColorOpenQuery', 'TLFontFamilyStyleValue', 'TLGetFontFamilyMenuXml', 'TLQueryFontFamily', 'TLFontSizeStyleValue', 'TLGetFontSizeMenuXml', 'TLQueryFontSize', 'TLBold', 'TLQueryBold', 'TLItalics', 'TLQueryItalics', 'TLUnderline', 'TLQueryUnderline', 'FontFamilyThemeClass', 'FontFamilyCssClass', 'FontSizeCssClass', 'BackgroundColorCssClass', 'BackgroundColorThemeClass', 'BackgroundColorCustom', 'ColorCssClass', 'ColorThemeClass', 'ColorCustom'];
        }
        if (!SP.UI.Timeline.TimelinePageComponent.$3X) {
            SP.UI.Timeline.TimelinePageComponent.$3X = [];
        }
        if (!SP.UI.Timeline.TimelinePageComponent.$3V) {
            SP.UI.Timeline.TimelinePageComponent.$3V = ['g', 'd', 'm', 'D', 'f', 'tmp', 'dd', 't'];
        }
    },
    getFocusedCommands: function SP_UI_Timeline_TimelinePageComponent$getFocusedCommands() {
        return SP.UI.Timeline.TimelinePageComponent.$3W;
    },
    getGlobalCommands: function SP_UI_Timeline_TimelinePageComponent$getGlobalCommands() {
        return SP.UI.Timeline.TimelinePageComponent.$3X;
    },
    isFocusable: function SP_UI_Timeline_TimelinePageComponent$isFocusable() {
        return true;
    },
    $7b_1: function SP_UI_Timeline_TimelinePageComponent$$7b_1() {
        var $$t_0 = this;

        this.$2L_1(function() {
            if (!(SP.Ribbon.PageManager.get_instance()).get_ribbon()) {
                _ribbonStartInit('Ribbon.Timeline', false);
            }
            else {
                ((SP.Ribbon.PageManager.get_instance()).get_ribbon()).selectTabById('Ribbon.Timeline');
            }
        });
    },
    receiveFocus: function SP_UI_Timeline_TimelinePageComponent$receiveFocus() {
        EnsureScriptFunc('SP.UI.Rte.js', 'RTE', this.$$d_$7b_1);
        return true;
    },
    yieldFocus: function SP_UI_Timeline_TimelinePageComponent$yieldFocus() {
        return true;
    },
    canHandleCommand: function SP_UI_Timeline_TimelinePageComponent$canHandleCommand(commandId) {
        if (!this.$R_1) {
            return false;
        }
        return this.$R_1.canHandleCommand(commandId);
    },
    handleCommand: function SP_UI_Timeline_TimelinePageComponent$handleCommand(commandId, properties, sequence) {
        if (!this.$R_1) {
            return false;
        }
        var $v_0 = properties;
        var $v_1 = '';

        switch (commandId) {
        case 'cxtTL':
        case 'TLTab':
            return true;
        case 'TLGetFontBackgroundColorMenuXml':
            $v_0.PopulationJSON = RTE.FontCommands.initFontBackgroundColorMenu();
            return true;
        case 'TLGetFontColorMenuXml':
            $v_0.PopulationJSON = RTE.FontCommands.initFontColorMenu();
            return true;
        case 'TLGetFontFamilyMenuXml':
            $v_0.PopulationJSON = RTE.FontCommands.initFontFamilyDropDownMenu();
            return true;
        case 'TLGetFontSizeMenuXml':
            $v_0.PopulationJSON = RTE.FontCommands.initFontSizeDropDownMenu();
            return true;
        case 'TLCmdDateFmtPopulate':
            properties.PopulationXML = this.$7n_1();
            break;
        case 'FontFamilyThemeClass':
        case 'FontFamilyCssClass':
            commandId = 'TLFontFamilyStyleValue';
            $v_1 = properties['CommandValueId'];
            $v_1 = SP.UI.Timeline.TimelinePageComponent.$6j($v_1, 'fontFamily');
            break;
        case 'FontSizeCssClass':
            commandId = 'TLFontSizeStyleValue';
            $v_1 = properties['CommandValueId'];
            $v_1 = SP.UI.Timeline.TimelinePageComponent.$6j($v_1, 'fontSize');
            $v_1 = $v_1.replace('pt', '');
            $v_1 = $v_1.replace('px', '');
            $v_1 = $v_1.replace('em', '');
            break;
        case 'BackgroundColorCssClass':
        case 'BackgroundColorThemeClass':
            commandId = 'TLSelectBackgroundColorOpen';
            $v_1 = properties['Color'];
            break;
        case 'ColorCssClass':
        case 'ColorThemeClass':
            commandId = 'TLSelectFontColorOpen';
            $v_1 = properties['Color'];
            break;
        case 'ColorCustom':
            this.$7s_1();
            return true;
        case 'BackgroundColorCustom':
            this.$7r_1();
            return true;
        case 'TLCmdDateFmtSelect':
            var $v_2 = properties['SourceControlId'];

            if ($v_2.length > 0) {
                var $v_3 = $v_2.lastIndexOf('.');

                if ($v_3 >= 0) {
                    $v_1 = $v_2.substring($v_3 + 1, $v_2.length);
                }
            }
            break;
        case 'TLFontFamilyStyleValue':
        case 'TLFontSizeStyleValue':
            $v_1 = properties['Value'];
            break;
        case 'TLQueryBold':
        case 'TLQueryItalics':
        case 'TLCmdShowAsBarQuery':
        case 'TLCmdShowAsCalloutQuery':
        case 'TLCmdShowDatesQuery':
        case 'TLCmdShowTimescaleQuery':
        case 'TLCmdShowProjSummDatesQuery':
        case 'TLCmdShowTodayQuery':
        case 'TLCmdTimelineWidthQuery':
        case 'TLQueryUnderline':
            properties['On'] = this.$R_1.booleanQueryCommand(commandId);
            return true;
        case 'TLQueryFontFamily':
        case 'TLQueryFontSize':
            var $v_4 = this.$R_1.stringQueryCommand(commandId);

            properties.Value = $v_4;
            return true;
        default:
            break;
        }
        return this.$R_1.handleCommand(commandId, $v_1);
    },
    $7s_1: function SP_UI_Timeline_TimelinePageComponent$$7s_1() {
        var $v_0 = this.$R_1.stringQueryCommand('TLSelectFontColorOpenQuery');
        var $v_1 = SP.Res.customColorTitle;

        RTE.RichTextEditor.showCustomColorDialog($v_1, $v_0, this.$$d_$8g_1);
    },
    $8g_1: function SP_UI_Timeline_TimelinePageComponent$$8g_1($p0, $p1) {
        if ($p0 === 1) {
            this.$R_1.handleCommand('TLSelectFontColorOpen', $p1);
        }
    },
    $7r_1: function SP_UI_Timeline_TimelinePageComponent$$7r_1() {
        var $v_0 = this.$R_1.stringQueryCommand('TLSelectBackgroundColorQuery');
        var $v_1 = SP.Res.customBackgroundColorTitle;

        RTE.RichTextEditor.showCustomColorDialog($v_1, $v_0, this.$$d_$8f_1);
    },
    $8f_1: function SP_UI_Timeline_TimelinePageComponent$$8f_1($p0, $p1) {
        if ($p0 === 1) {
            this.$R_1.handleCommand('TLSelectBackgroundColorOpen', $p1);
        }
    },
    $7n_1: function SP_UI_Timeline_TimelinePageComponent$$7n_1() {
        var $v_0 = !this.$R_1 ? '' : this.$R_1.get_dateFormatString();
        var $v_1 = 'Ribbon.Timeline.ShowHide.DateFmt.';
        var $v_2 = new Date(2010, 0, 28, 12, 33, 55);
        var $v_3 = SP.DateTimeUtil.IntlDate.createFromJsLocalDate($v_2, _spRegionalSettings.calendarType);
        var $v_4 = '\r\n<Menu Id =\"Ribbon.Timeline.ShowHide.DateFmt.Menu\">\r\n  <MenuSection Id =\"Ribbon.Timeline.ShowHide.DateFmt.MenuSection\" DisplayMode=\"Menu16\">\r\n    <Controls Id =\"Ribbon.Timeline.ShowHide.DateFmt.Controls\">';

        for (var $$arr_5 = SP.UI.Timeline.TimelinePageComponent.$3V, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_5 = $$arr_5[$$idx_7];
            var $v_6 = SP.UI.Timeline.TimelinePageComponent.$7o($v_2, $v_3, $v_5, Sys.CultureInfo.CurrentCulture.name);

            if ($v_6) {
                $v_4 += '\r\n       <Button Id = \"' + $v_1 + $v_5 + '\" LabelText = \"' + $v_6 + '\" Command=\"TLCmdDateFmtSelect\"';
                if ($v_5 === $v_0) {
                    $v_4 += ' Image16by16=\"/_layouts/15/Images/check.gif\"';
                }
                $v_4 += '/>';
            }
        }
        $v_4 += '\r\n     </Controls>\r\n  </MenuSection>\r\n</Menu>';
        return $v_4;
    },
    dispose: function SP_UI_Timeline_TimelinePageComponent$dispose() {
        var $$t_0 = this;

        this.$2L_1(function() {
            (SP.Ribbon.PageManager.get_instance()).removePageComponent($$t_0);
            $removeHandler(document.body, 'click', $$t_0.$4g_1);
        });
        this.$R_1 = null;
        this.$2T_1 = null;
        this.$4a_1 = true;
    },
    $2L_1: function SP_UI_Timeline_TimelinePageComponent$$2L_1($p0) {
        var $$t_1 = this;

        ExecuteOrDelayUntilScriptLoaded(function() {
            $p0();
        }, 'sp.ribbon.js');
    }
};
SP.UI.Timeline.Timescale = function SP_UI_Timeline_Timescale() {
    this.$8_0 = true;
};
SP.UI.Timeline.Timescale.prototype = {
    $5G_0: null,
    $5F_0: 0,
    $5E_0: null,
    $44_0: null,
    $i_0: null,
    $58_0: 0,
    $4x_0: null,
    $1y_0: 0,
    $8_0: false,
    $F_0: 0,
    get_itemType: function SP_UI_Timeline_Timescale$get_itemType() {
        return 4;
    },
    get_formatNumber: function SP_UI_Timeline_Timescale$get_formatNumber() {
        return -1;
    },
    get_shouldShow: function SP_UI_Timeline_Timescale$get_shouldShow() {
        return this.$8_0;
    },
    set_shouldShow: function SP_UI_Timeline_Timescale$set_shouldShow(value) {
        this.$8_0 = value;
        return value;
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_Timescale$isPhysicalElementsCreated(graphics) {
        return !!this.$i_0;
    },
    bindToUnderlyingData: function SP_UI_Timeline_Timescale$bindToUnderlyingData(elementData) {
    },
    setHorizontalPosition: function SP_UI_Timeline_Timescale$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        this.$58_0 = pixelsPerMillisecond;
        this.$4x_0 = canvasMinDate;
        this.$F_0 = mainAreaWidth;
    },
    get_majorPosition: function SP_UI_Timeline_Timescale$get_majorPosition() {
        return -1;
    },
    get_minorPosition: function SP_UI_Timeline_Timescale$get_minorPosition() {
        return 10000;
    },
    getSubPosition: function SP_UI_Timeline_Timescale$getSubPosition() {
        return 0;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_Timescale$get_pixelChannelHeight() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_Timescale$createPhysicalElements(container) {
        this.$i_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);
        this.$i_0.className = 'ms-tl-timescale';
        container.appendChild(this.$i_0);
    },
    isSelectable: function SP_UI_Timeline_Timescale$isSelectable() {
        return false;
    },
    formatTextProperties: function SP_UI_Timeline_Timescale$formatTextProperties(options) {
        this.$1y_0 = options.$1y_0;
        this.$5F_0 = options.$1I_0;
    },
    updateTextAndStyling: function SP_UI_Timeline_Timescale$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        this.$5G_0 = (tss.get_item(this.$1y_0)).$7Q_0(tss);
        var $v_0 = formats.getFormat(this.$5F_0, 3);
        var $v_1 = $v_0.getColor(formats, 3);
        var $v_2 = SP.UI.Timeline.RGB.rgbFromString($v_1);
        var $v_3 = SP.UI.Timeline.HSL.hsLfromRGB($v_2);
        var $v_4 = $v_3.mainAreaBorderHSL();

        this.$5E_0 = SP.UI.Timeline.Colors.argBtoRGB((SP.UI.Timeline.HSL.rgBfromHSL($v_4)).asARGBstring());
    },
    computeTextSizes: function SP_UI_Timeline_Timescale$computeTextSizes() {
    },
    handleRepositioningItems: function SP_UI_Timeline_Timescale$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        verticalOffset.val = Math.min(verticalOffset.val, -20);
    },
    movePhysicalElements: function SP_UI_Timeline_Timescale$movePhysicalElements() {
        if (!this.$8_0) {
            return;
        }
        SP.UI.Timeline.TimelineControl.$2.MoveRect(0, 0, this.$F_0, -20, this.$i_0);
        if (!this.$44_0) {
            var $v_0 = new SP.JsGrid.RTLInfo(SP.UI.Timeline.TimelineControl.$2.get_isRtl());

            this.$44_0 = new SP.JsGrid.TLTimeScale(this.$i_0.parentNode, this.$5G_0, $v_0);
        }
        while (this.$i_0.hasChildNodes()) {
            this.$i_0.removeChild(this.$i_0.firstChild);
        }
        this.$44_0.ScaledDraw(this.$i_0, this.$F_0, this.$5E_0, 20, this.$4x_0, this.$58_0);
    },
    hide: function SP_UI_Timeline_Timescale$hide() {
        if (this.$i_0) {
            SP.UI.Timeline.ItemTypeStatic.hideElement(this.$i_0);
        }
        this.$8_0 = false;
    },
    show: function SP_UI_Timeline_Timescale$show() {
        if (this.$i_0) {
            SP.UI.Timeline.ItemTypeStatic.showElement(this.$i_0);
        }
        this.$8_0 = true;
    }
};
SP.UI.Timeline.TodayMarker = function SP_UI_Timeline_TodayMarker() {
    this.$5A_0 = Strings.STS.L_TimelineToday;
    this.$8_0 = true;
};
SP.UI.Timeline.TodayMarker.prototype = {
    $1z_0: 0,
    $18_0: 0,
    $1K_0: 0,
    $2D_0: 0,
    $F_0: 0,
    $1c_0: 0,
    $d_0: null,
    $3_0: null,
    $8_0: false,
    $4p_0: function SP_UI_Timeline_TodayMarker$$4p_0($p0, $p1) {
        this.$d_0 = $p0;
        this.$3_0 = $p1;
    },
    get_itemType: function SP_UI_Timeline_TodayMarker$get_itemType() {
        return 5;
    },
    get_formatNumber: function SP_UI_Timeline_TodayMarker$get_formatNumber() {
        return -1;
    },
    get_pixelXNear: function SP_UI_Timeline_TodayMarker$get_pixelXNear() {
        return this.$1c_0;
    },
    get_pixelChannelHeight: function SP_UI_Timeline_TodayMarker$get_pixelChannelHeight() {
        return 0;
    },
    get_shouldShow: function SP_UI_Timeline_TodayMarker$get_shouldShow() {
        return this.$8_0;
    },
    set_shouldShow: function SP_UI_Timeline_TodayMarker$set_shouldShow(value) {
        this.$8_0 = value;
        return value;
    },
    isPhysicalElementsCreated: function SP_UI_Timeline_TodayMarker$isPhysicalElementsCreated(graphics) {
        return !!this.$3_0;
    },
    bindToUnderlyingData: function SP_UI_Timeline_TodayMarker$bindToUnderlyingData(elementData) {
    },
    setHorizontalPosition: function SP_UI_Timeline_TodayMarker$setHorizontalPosition(pixelsPerMillisecond, canvasMinDate, canvasMaxDate, mainAreaWidth) {
        var $v_0 = new Date();

        this.$1c_0 = Math.ceil(pixelsPerMillisecond * ($v_0 - canvasMinDate));
        this.$F_0 = mainAreaWidth;
    },
    get_majorPosition: function SP_UI_Timeline_TodayMarker$get_majorPosition() {
        return -1;
    },
    get_minorPosition: function SP_UI_Timeline_TodayMarker$get_minorPosition() {
        return 9000;
    },
    getSubPosition: function SP_UI_Timeline_TodayMarker$getSubPosition() {
        return 0;
    },
    createPhysicalElements: function SP_UI_Timeline_TodayMarker$createPhysicalElements(container) {
        var $v_0 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        $v_0.className = 'ms-tl-today';
        var $v_1 = SP.UI.Timeline.TimelineControl.$2.CreateRect(container);

        $v_1.className = 'ms-tl-todayLabel';
        this.$4p_0($v_0, $v_1);
    },
    isSelectable: function SP_UI_Timeline_TodayMarker$isSelectable() {
        return false;
    },
    formatTextProperties: function SP_UI_Timeline_TodayMarker$formatTextProperties(options) {
        this.$1z_0 = options.$1z_0;
    },
    updateTextAndStyling: function SP_UI_Timeline_TodayMarker$updateTextAndStyling(formats, tss, fIsAnyTaskShowing) {
        XUI.Html.SetText(this.$3_0, this.$5A_0);
        var $v_0 = tss.get_item(this.$1z_0);

        this.$3_0.style.backgroundColor = (this.$d_0.style.borderColor = $v_0.getColor(tss, this.get_itemType()));
        this.$d_0.style.height = '';
        this.$d_0.style.width = '';
    },
    computeTextSizes: function SP_UI_Timeline_TodayMarker$computeTextSizes() {
        if (!this.$3_0.style.height || !this.$3_0.style.height.length) {
            this.$1K_0 = this.$3_0.offsetHeight;
            this.$18_0 = this.$3_0.offsetWidth;
        }
    },
    handleRepositioningItems: function SP_UI_Timeline_TodayMarker$handleRepositioningItems(barHeight, mainAreaHeight, verticalOffset, heightBelowTopOfBar, nearOffset, widthFarOfNearBar) {
        var $v_0 = -(29 + this.$1K_0);

        verticalOffset.val = Math.min(verticalOffset.val, $v_0);
        this.$2D_0 = mainAreaHeight;
    },
    movePhysicalElements: function SP_UI_Timeline_TodayMarker$movePhysicalElements() {
        if (!this.$8_0 || this.$1c_0 < 0 || this.$1c_0 > this.$F_0) {
            this.$8B_0();
            return;
        }
        else {
            this.$8i_0();
        }
        SP.UI.Timeline.TimelineControl.$2.MoveRect(this.$1c_0, -26, this.$1c_0, this.$2D_0, this.$d_0);
        var $v_0 = 14 + this.$18_0;
        var $v_1 = 3 + this.$1K_0;
        var $v_2 = this.$1c_0 - $v_0 / 2;

        if ($v_2 < 0) {
            $v_2 = 0;
        }
        else if ($v_2 + $v_0 > this.$F_0) {
            $v_2 = this.$F_0 - $v_0;
        }
        SP.UI.Timeline.TimelineControl.$2.MoveRect($v_2, -26 - $v_1, $v_2 + $v_0, -26, this.$3_0);
    },
    $8B_0: function SP_UI_Timeline_TodayMarker$$8B_0() {
        if (this.$d_0) {
            SP.UI.Timeline.ItemTypeStatic.hideElement(this.$d_0);
            SP.UI.Timeline.ItemTypeStatic.hideElement(this.$3_0);
        }
    },
    hide: function SP_UI_Timeline_TodayMarker$hide() {
        this.$8_0 = false;
    },
    $8i_0: function SP_UI_Timeline_TodayMarker$$8i_0() {
        if (this.$d_0) {
            SP.UI.Timeline.ItemTypeStatic.showElement(this.$d_0);
            SP.UI.Timeline.ItemTypeStatic.showElement(this.$3_0);
        }
    },
    show: function SP_UI_Timeline_TodayMarker$show() {
        this.$8_0 = true;
    }
};
SP.UI.Timeline.Colors = function SP_UI_Timeline_Colors() {
};
SP.UI.Timeline.Colors.get_colorForSelected = function SP_UI_Timeline_Colors$get_colorForSelected() {
    if (!SP.UI.Timeline.Colors.$2r) {
        SP.UI.Timeline.Colors.$2r = SP.UI.Timeline.NamedColors.getColorFromTheme('FF09');
    }
    return SP.UI.Timeline.Colors.$2r;
};
SP.UI.Timeline.Colors.argBtoRGB = function SP_UI_Timeline_Colors$argBtoRGB(argbValue) {
    if (!argbValue || !argbValue.length) {
        return '#FFFFFF';
    }
    if (argbValue.length === 8) {
        return '#' + argbValue.substr(2);
    }
    return argbValue;
};
SP.UI.Timeline.Colors.$5Q = function SP_UI_Timeline_Colors$$5Q($p0) {
    if (!$p0 || !$p0.length) {
        return 'FF000000';
    }
    if ($p0.startsWith('#') && $p0.length >= 7) {
        return 'FF' + $p0.substr($p0.length - 6, 6);
    }
    if ($p0.startsWith('rgb')) {
        var $v_1 = new RegExp('rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)');
        var $v_2 = $v_1.exec($p0);

        if ($v_2.length === 4) {
            var $v_3 = parseInt($v_2[1]);
            var $v_4 = parseInt($v_2[2]);
            var $v_5 = parseInt($v_2[3]);

            return 'FF' + SP.UI.Timeline.Colors.$4P($v_3) + SP.UI.Timeline.Colors.$4P($v_4) + SP.UI.Timeline.Colors.$4P($v_5);
        }
    }
    var $v_0 = SP.UI.Timeline.NamedColors.nameToARGB($p0);

    if ($v_0) {
        return $v_0;
    }
    return 'FF' + $p0.substr($p0.length - 6, 6);
};
SP.UI.Timeline.Colors.$4P = function SP_UI_Timeline_Colors$$4P($p0) {
    var $v_0 = $p0.toString(16);

    if ($v_0.length >= 3) {
        return '00';
    }
    if ($v_0.length === 1) {
        return '0' + $v_0;
    }
    return $v_0;
};
SP.UI.Timeline.Colors.$4I = function SP_UI_Timeline_Colors$$4I($p0, $p1, $p2) {
    if ($p0 === '0001') {
        if ($p2) {
            switch ($p1) {
            case 0:
                $p0 = 'FF06';
                break;
            case 1:
                $p0 = 'FF08';
                break;
            case 2:
                $p0 = 'FF01';
                break;
            case 4:
            case 3:
                $p0 = 'FF02';
                break;
            case 5:
                $p0 = 'FF03';
                break;
            default:
                break;
            }
        }
        else {
            switch ($p1) {
            case 0:
                $p0 = 'FF05';
                break;
            case 1:
                $p0 = 'FF07';
                break;
            case 2:
                $p0 = 'FF00';
                break;
            case 3:
                $p0 = 'FF04';
                break;
            case 5:
                $p0 = 'FF03';
                break;
            case 6:
                $p0 = null;
                break;
            default:
                break;
            }
        }
    }
    if (!$p0 || !$p0.length || $p0 === '0000') {
        return null;
    }
    return SP.UI.Timeline.NamedColors.getColorFromTheme($p0);
};
SP.UI.Timeline.Colors.$60 = function SP_UI_Timeline_Colors$$60($p0) {
    if (!$p0 || !$p0.length) {
        return null;
    }
    return SP.UI.Timeline.NamedColors.getThemeFromColor($p0);
};
SP.UI.Timeline.NamedColors = function SP_UI_Timeline_NamedColors() {
};
SP.UI.Timeline.NamedColors.$65 = function SP_UI_Timeline_NamedColors$$65() {
    if (SP.UI.Timeline.NamedColors.$4b) {
        return;
    }
    var $v_0 = 'ms-rteThemeForeColor';
    var $v_1 = 'ms-rte';
    var $v_2 = 'color';
    var $v_3 = SP.UI.Timeline.NamedColors.StyleRuleUtility.getStyleRules($v_0, $v_1, false);

    for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
        var $v_5 = $v_3[$v_4];
        var $v_6 = $v_5.rule.selectorText;
        var $v_7 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$5z($v_6, $v_0 + '-');
        var $v_8 = $v_3[$v_4].rule.style[$v_2];
        var $v_9 = (SP.UI.Timeline.NamedColors.get_$7I())[$v_7];

        if ($v_9) {
            (SP.UI.Timeline.NamedColors.get_themeToColor())[$v_9] = $v_8;
            (SP.UI.Timeline.NamedColors.get_colorToTheme())[$v_8] = $v_9;
        }
    }
    SP.UI.Timeline.NamedColors.$4b = true;
};
SP.UI.Timeline.NamedColors.$64 = function SP_UI_Timeline_NamedColors$$64() {
    SP.UI.Timeline.NamedColors.$3R = {};
    SP.UI.Timeline.NamedColors.$3Q = {};
    var $v_0 = 'ms-tlThemeColor';
    var $v_1 = 'ms-tl';
    var $v_2 = 'color';
    var $v_3 = SP.UI.Timeline.NamedColors.StyleRuleUtility.getStyleRules($v_0, $v_1, false);

    for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
        var $v_5 = $v_3[$v_4];
        var $v_6 = $v_5.rule.selectorText;
        var $v_7 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$5z($v_6, $v_0 + '-');
        var $v_8 = $v_3[$v_4].rule.style[$v_2];

        if ($v_7) {
            (SP.UI.Timeline.NamedColors.get_themeToColor())[$v_7] = $v_8;
            (SP.UI.Timeline.NamedColors.get_colorToTheme())[$v_8] = $v_7;
        }
    }
};
SP.UI.Timeline.NamedColors.get_themeToColor = function SP_UI_Timeline_NamedColors$get_themeToColor() {
    if (!SP.UI.Timeline.NamedColors.$3R) {
        SP.UI.Timeline.NamedColors.$64();
    }
    return SP.UI.Timeline.NamedColors.$3R;
};
SP.UI.Timeline.NamedColors.getColorFromTheme = function SP_UI_Timeline_NamedColors$getColorFromTheme($p0) {
    var $v_0 = (SP.UI.Timeline.NamedColors.get_themeToColor())[$p0];

    if (!$v_0) {
        SP.UI.Timeline.NamedColors.$65();
        $v_0 = (SP.UI.Timeline.NamedColors.get_themeToColor())[$p0];
    }
    return $v_0;
};
SP.UI.Timeline.NamedColors.get_colorToTheme = function SP_UI_Timeline_NamedColors$get_colorToTheme() {
    if (!SP.UI.Timeline.NamedColors.$3Q) {
        SP.UI.Timeline.NamedColors.$64();
    }
    return SP.UI.Timeline.NamedColors.$3Q;
};
SP.UI.Timeline.NamedColors.getThemeFromColor = function SP_UI_Timeline_NamedColors$getThemeFromColor($p0) {
    var $v_0 = (SP.UI.Timeline.NamedColors.get_colorToTheme())[$p0];

    if (!$v_0) {
        SP.UI.Timeline.NamedColors.$65();
        $v_0 = (SP.UI.Timeline.NamedColors.get_colorToTheme())[$p0];
    }
    return $v_0;
};
SP.UI.Timeline.NamedColors.get_$7I = function SP_UI_Timeline_NamedColors$get_$7I() {
    if (!SP.UI.Timeline.NamedColors.$2l) {
        SP.UI.Timeline.NamedColors.$2l = {};
        var $v_0 = 6;
        var $v_1 = 10;

        for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
            for (var $v_3 = 1; $v_3 <= $v_1; $v_3++) {
                var $v_4 = String.format('{0:d}-{1:d}', $v_3, $v_2);
                var $v_5 = String.format('0{0}0{1}', $v_3.toString(16), $v_2.toString(16));

                SP.UI.Timeline.NamedColors.$2l[$v_4] = $v_5;
            }
        }
    }
    return SP.UI.Timeline.NamedColors.$2l;
};
SP.UI.Timeline.NamedColors.nameToARGB = function SP_UI_Timeline_NamedColors$nameToARGB($p0) {
    return (SP.UI.Timeline.NamedColors.get_$7H())[$p0];
};
SP.UI.Timeline.NamedColors.get_$7H = function SP_UI_Timeline_NamedColors$get_$7H() {
    if (!SP.UI.Timeline.NamedColors.$0) {
        SP.UI.Timeline.NamedColors.$0 = {};
        SP.UI.Timeline.NamedColors.$0['aliceblue'] = 'FFF0F8FF';
        SP.UI.Timeline.NamedColors.$0['antiquewhite'] = 'FFFAEBD7';
        SP.UI.Timeline.NamedColors.$0['aqua'] = 'FF00FFFF';
        SP.UI.Timeline.NamedColors.$0['aquamarine'] = 'FF7FFFD4';
        SP.UI.Timeline.NamedColors.$0['azure'] = 'FFF0FFFF';
        SP.UI.Timeline.NamedColors.$0['beige'] = 'FFF5F5DC';
        SP.UI.Timeline.NamedColors.$0['bisque'] = 'FFFFE4C4';
        SP.UI.Timeline.NamedColors.$0['black'] = 'FF000000';
        SP.UI.Timeline.NamedColors.$0['blanchedalmond'] = 'FFFFEBCD';
        SP.UI.Timeline.NamedColors.$0['blue'] = 'FF0000FF';
        SP.UI.Timeline.NamedColors.$0['blueviolet'] = 'FF8A2BE2';
        SP.UI.Timeline.NamedColors.$0['brown'] = 'FFA52A2A';
        SP.UI.Timeline.NamedColors.$0['burlywood'] = 'FFDEB887';
        SP.UI.Timeline.NamedColors.$0['cadetblue'] = 'FF5F9EA0';
        SP.UI.Timeline.NamedColors.$0['chartreuse'] = 'FF7FFF00';
        SP.UI.Timeline.NamedColors.$0['chocolate'] = 'FFD2691E';
        SP.UI.Timeline.NamedColors.$0['coral'] = 'FFFF7F50';
        SP.UI.Timeline.NamedColors.$0['cornflowerblue'] = 'FF6495ED';
        SP.UI.Timeline.NamedColors.$0['cornsilk'] = 'FFFFF8DC';
        SP.UI.Timeline.NamedColors.$0['crimson'] = 'FFDC143C';
        SP.UI.Timeline.NamedColors.$0['cyan'] = 'FF00FFFF';
        SP.UI.Timeline.NamedColors.$0['darkblue'] = 'FF00008B';
        SP.UI.Timeline.NamedColors.$0['darkcyan'] = 'FF008B8B';
        SP.UI.Timeline.NamedColors.$0['darkgoldenrod'] = 'FFB8860B';
        SP.UI.Timeline.NamedColors.$0['darkgray'] = 'FFA9A9A9';
        SP.UI.Timeline.NamedColors.$0['darkgreen'] = 'FF006400';
        SP.UI.Timeline.NamedColors.$0['darkkhaki'] = 'FFBDB76B';
        SP.UI.Timeline.NamedColors.$0['darkmagenta'] = 'FF8B008B';
        SP.UI.Timeline.NamedColors.$0['darkolivegreen'] = 'FF556B2F';
        SP.UI.Timeline.NamedColors.$0['darkorange'] = 'FFFF8C00';
        SP.UI.Timeline.NamedColors.$0['darkorchid'] = 'FF9932CC';
        SP.UI.Timeline.NamedColors.$0['darkred'] = 'FF8B0000';
        SP.UI.Timeline.NamedColors.$0['darksalmon'] = 'FFE9967A';
        SP.UI.Timeline.NamedColors.$0['darkseagreen'] = 'FF8FBC8F';
        SP.UI.Timeline.NamedColors.$0['darkslateblue'] = 'FF483D8B';
        SP.UI.Timeline.NamedColors.$0['darkslategray'] = 'FF2F4F4F';
        SP.UI.Timeline.NamedColors.$0['darkturquoise'] = 'FF00CED1';
        SP.UI.Timeline.NamedColors.$0['darkviolet'] = 'FF9400D3';
        SP.UI.Timeline.NamedColors.$0['deeppink'] = 'FFFF1493';
        SP.UI.Timeline.NamedColors.$0['deepskyblue'] = 'FF00BFFF';
        SP.UI.Timeline.NamedColors.$0['dimgray'] = 'FF696969';
        SP.UI.Timeline.NamedColors.$0['dodgerblue'] = 'FF1E90FF';
        SP.UI.Timeline.NamedColors.$0['firebrick'] = 'FFB22222';
        SP.UI.Timeline.NamedColors.$0['floralwhite'] = 'FFFFFAF0';
        SP.UI.Timeline.NamedColors.$0['forestgreen'] = 'FF228B22';
        SP.UI.Timeline.NamedColors.$0['fuchsia'] = 'FFFF00FF';
        SP.UI.Timeline.NamedColors.$0['gainsboro'] = 'FFDCDCDC';
        SP.UI.Timeline.NamedColors.$0['ghostwhite'] = 'FFF8F8FF';
        SP.UI.Timeline.NamedColors.$0['gold'] = 'FFFFD700';
        SP.UI.Timeline.NamedColors.$0['goldenrod'] = 'FFDAA520';
        SP.UI.Timeline.NamedColors.$0['gray'] = 'FF808080';
        SP.UI.Timeline.NamedColors.$0['green'] = 'FF008000';
        SP.UI.Timeline.NamedColors.$0['greenyellow'] = 'FFADFF2F';
        SP.UI.Timeline.NamedColors.$0['honeydew'] = 'FFF0FFF0';
        SP.UI.Timeline.NamedColors.$0['hotpink'] = 'FFFF69B4';
        SP.UI.Timeline.NamedColors.$0['indianred'] = 'FFCD5C5C';
        SP.UI.Timeline.NamedColors.$0['indigo'] = 'FF4B0082';
        SP.UI.Timeline.NamedColors.$0['ivory'] = 'FFFFFFF0';
        SP.UI.Timeline.NamedColors.$0['khaki'] = 'FFF0E68C';
        SP.UI.Timeline.NamedColors.$0['lavender'] = 'FFE6E6FA';
        SP.UI.Timeline.NamedColors.$0['lavenderblush'] = 'FFFFF0F5';
        SP.UI.Timeline.NamedColors.$0['lawngreen'] = 'FF7CFC00';
        SP.UI.Timeline.NamedColors.$0['lemonchiffon'] = 'FFFFFACD';
        SP.UI.Timeline.NamedColors.$0['lightblue'] = 'FFADD8E6';
        SP.UI.Timeline.NamedColors.$0['lightcoral'] = 'FFF08080';
        SP.UI.Timeline.NamedColors.$0['lightcyan'] = 'FFE0FFFF';
        SP.UI.Timeline.NamedColors.$0['lightgoldenrodyellow'] = 'FFFAFAD2';
        SP.UI.Timeline.NamedColors.$0['lightgreen'] = 'FF90EE90';
        SP.UI.Timeline.NamedColors.$0['lightgrey'] = 'FFD3D3D3';
        SP.UI.Timeline.NamedColors.$0['lightpink'] = 'FFFFB6C1';
        SP.UI.Timeline.NamedColors.$0['lightsalmon'] = 'FFFFA07A';
        SP.UI.Timeline.NamedColors.$0['lightseagreen'] = 'FF20B2AA';
        SP.UI.Timeline.NamedColors.$0['lightskyblue'] = 'FF87CEFA';
        SP.UI.Timeline.NamedColors.$0['lightslategray'] = 'FF778899';
        SP.UI.Timeline.NamedColors.$0['lightsteelblue'] = 'FFB0C4DE';
        SP.UI.Timeline.NamedColors.$0['lightyellow'] = 'FFFFFFE0';
        SP.UI.Timeline.NamedColors.$0['lime'] = 'FF00FF00';
        SP.UI.Timeline.NamedColors.$0['limegreen'] = 'FF32CD32';
        SP.UI.Timeline.NamedColors.$0['linen'] = 'FFFAF0E6';
        SP.UI.Timeline.NamedColors.$0['magenta'] = 'FFFF00FF';
        SP.UI.Timeline.NamedColors.$0['maroon'] = 'FF800000';
        SP.UI.Timeline.NamedColors.$0['mediumaquamarine'] = 'FF66CDAA';
        SP.UI.Timeline.NamedColors.$0['mediumblue'] = 'FF0000CD';
        SP.UI.Timeline.NamedColors.$0['mediumorchid'] = 'FFBA55D3';
        SP.UI.Timeline.NamedColors.$0['mediumpurple'] = 'FF9370DB';
        SP.UI.Timeline.NamedColors.$0['mediumseagreen'] = 'FF3CB371';
        SP.UI.Timeline.NamedColors.$0['mediumslateblue'] = 'FF7B68EE';
        SP.UI.Timeline.NamedColors.$0['mediumspringgreen'] = 'FF00FA9A';
        SP.UI.Timeline.NamedColors.$0['mediumturquoise'] = 'FF48D1CC';
        SP.UI.Timeline.NamedColors.$0['mediumvioletred'] = 'FFC71585';
        SP.UI.Timeline.NamedColors.$0['midnightblue'] = 'FF191970';
        SP.UI.Timeline.NamedColors.$0['mintcream'] = 'FFF5FFFA';
        SP.UI.Timeline.NamedColors.$0['mistyrose'] = 'FFFFE4E1';
        SP.UI.Timeline.NamedColors.$0['moccasin'] = 'FFFFE4B5';
        SP.UI.Timeline.NamedColors.$0['navajowhite'] = 'FFFFDEAD';
        SP.UI.Timeline.NamedColors.$0['navy'] = 'FF000080';
        SP.UI.Timeline.NamedColors.$0['oldlace'] = 'FFFDF5E6';
        SP.UI.Timeline.NamedColors.$0['olive'] = 'FF808000';
        SP.UI.Timeline.NamedColors.$0['olivedrab'] = 'FF6B8E23';
        SP.UI.Timeline.NamedColors.$0['orange'] = 'FFFFA500';
        SP.UI.Timeline.NamedColors.$0['orangered'] = 'FFFF4500';
        SP.UI.Timeline.NamedColors.$0['orchid'] = 'FFDA70D6';
        SP.UI.Timeline.NamedColors.$0['palegoldenrod'] = 'FFEEE8AA';
        SP.UI.Timeline.NamedColors.$0['palegreen'] = 'FF98FB98';
        SP.UI.Timeline.NamedColors.$0['paleturquoise'] = 'FFAFEEEE';
        SP.UI.Timeline.NamedColors.$0['palevioletred'] = 'FFDB7093';
        SP.UI.Timeline.NamedColors.$0['papayawhip'] = 'FFFFEFD5';
        SP.UI.Timeline.NamedColors.$0['peachpuff'] = 'FFFFDAB9';
        SP.UI.Timeline.NamedColors.$0['peru'] = 'FFCD853F';
        SP.UI.Timeline.NamedColors.$0['pink'] = 'FFFFC0CB';
        SP.UI.Timeline.NamedColors.$0['plum'] = 'FFDDA0DD';
        SP.UI.Timeline.NamedColors.$0['powderblue'] = 'FFB0E0E6';
        SP.UI.Timeline.NamedColors.$0['purple'] = 'FF800080';
        SP.UI.Timeline.NamedColors.$0['red'] = 'FFFF0000';
        SP.UI.Timeline.NamedColors.$0['rosybrown'] = 'FFBC8F8F';
        SP.UI.Timeline.NamedColors.$0['royalblue'] = 'FF4169E1';
        SP.UI.Timeline.NamedColors.$0['saddlebrown'] = 'FF8B4513';
        SP.UI.Timeline.NamedColors.$0['salmon'] = 'FFFA8072';
        SP.UI.Timeline.NamedColors.$0['sandybrown'] = 'FFF4A460';
        SP.UI.Timeline.NamedColors.$0['seagreen'] = 'FF2E8B57';
        SP.UI.Timeline.NamedColors.$0['seashell'] = 'FFFFF5EE';
        SP.UI.Timeline.NamedColors.$0['sienna'] = 'FFA0522D';
        SP.UI.Timeline.NamedColors.$0['silver'] = 'FFC0C0C0';
        SP.UI.Timeline.NamedColors.$0['skyblue'] = 'FF87CEEB';
        SP.UI.Timeline.NamedColors.$0['slateblue'] = 'FF6A5ACD';
        SP.UI.Timeline.NamedColors.$0['slategray'] = 'FF708090';
        SP.UI.Timeline.NamedColors.$0['snow'] = 'FFFFFAFA';
        SP.UI.Timeline.NamedColors.$0['springgreen'] = 'FF00FF7F';
        SP.UI.Timeline.NamedColors.$0['steelblue'] = 'FF4682B4';
        SP.UI.Timeline.NamedColors.$0['tan'] = 'FFD2B48C';
        SP.UI.Timeline.NamedColors.$0['teal'] = 'FF008080';
        SP.UI.Timeline.NamedColors.$0['thistle'] = 'FFD8BFD8';
        SP.UI.Timeline.NamedColors.$0['tomato'] = 'FFFF6347';
        SP.UI.Timeline.NamedColors.$0['turquoise'] = 'FF40E0D0';
        SP.UI.Timeline.NamedColors.$0['violet'] = 'FFEE82EE';
        SP.UI.Timeline.NamedColors.$0['wheat'] = 'FFF5DEB3';
        SP.UI.Timeline.NamedColors.$0['white'] = 'FFFFFFFF';
        SP.UI.Timeline.NamedColors.$0['whitesmoke'] = 'FFF5F5F5';
        SP.UI.Timeline.NamedColors.$0['yellow'] = 'FFFFFF00';
        SP.UI.Timeline.NamedColors.$0['yellowgreen'] = 'FF9ACD32';
    }
    return SP.UI.Timeline.NamedColors.$0;
};
SP.UI.Timeline.NamedColors.SU = function SP_UI_Timeline_NamedColors_SU() {
};
SP.UI.Timeline.NamedColors.SU.$68 = function SP_UI_Timeline_NamedColors_SU$$68($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || typeof $p0 === 'undefined' || !$p0.length;
};
SP.UI.Timeline.NamedColors.SU.$8F = function SP_UI_Timeline_NamedColors_SU$$8F($p0) {
    return typeof $p0 === 'undefined';
};
SP.UI.Timeline.NamedColors.CssStyleInfo = function SP_UI_Timeline_NamedColors_CssStyleInfo() {
};
SP.UI.Timeline.NamedColors.CssStyleInfo.prototype = {
    $8h_0: null,
    rule: null,
    $6r_0: null
};
SP.UI.Timeline.NamedColors.StyleRuleUtility = function SP_UI_Timeline_NamedColors_StyleRuleUtility() {
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$8G = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$8G($p0) {
    var $v_0 = new RegExp('[^:]*://' + window.location.hostname + '(:|/)', 'i');
    var $v_1 = new RegExp('[^:]*://', 'i');

    return $p0.search($v_1) === -1 || $p0.search($v_0) !== -1;
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$85 = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$85($p0, $p1, $p2, $p3, $p4) {
    if (!SP.UI.Timeline.NamedColors.SU.$8F($p0.href) && !SP.UI.Timeline.NamedColors.SU.$68($p0.href)) {
        if (SP.UI.Timeline.NamedColors.StyleRuleUtility.checkOnlyCssFromSameDomain && !SP.UI.Timeline.NamedColors.StyleRuleUtility.$8G($p0.href)) {
            return false;
        }
        var $v_0 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$8b($p0.href);

        if ($v_0.indexOf($p1) === -1) {
            return true;
        }
        return SP.UI.Timeline.NamedColors.StyleRuleUtility.$6E($p0, $p1, $p2, $p3);
    }
    return SP.UI.Timeline.NamedColors.StyleRuleUtility.$6E($p0, $p1, $p2, $p3);
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$6E = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$6E($p0, $p1, $p2, $p3) {
    var $v_0 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$83($p0);
    var $v_1 = $v_0.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $v_0[$v_2];
        var $v_4 = $v_3.selectorText;

        if (!SP.UI.Timeline.NamedColors.SU.$68($v_4)) {
            var $v_5 = $v_4.split(',');

            for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                var $v_7 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$84($p1, $v_5[$v_6].trim());

                if ($v_7 && !$p3[$v_7]) {
                    var $v_8 = new SP.UI.Timeline.NamedColors.CssStyleInfo();

                    $v_8.$8h_0 = $p0;
                    $v_8.rule = $v_3;
                    $v_8.$6r_0 = $v_7;
                    $p3[$v_7] = $v_3;
                    $p2.push($v_8);
                }
            }
        }
    }
    return true;
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$84 = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$84($p0, $p1) {
    if ($p1 && typeof $p1 !== 'undefined' && $p1.length && $p1.indexOf($p0) !== -1) {
        $p1 = $p1.toLowerCase();
        var $v_0;
        var $v_1 = null;

        if (($v_0 = $p1.lastIndexOf(' ')) >= 0) {
            if (++$v_0 < $p1.length) {
                $v_1 = $p1.substr($v_0);
            }
            else {
                $v_1 = '';
            }
        }
        else {
            $v_1 = $p1;
        }
        var $v_2 = $v_1.indexOf('.');

        if ($v_2 !== -1) {
            $v_1 = $v_1.substr($v_2);
        }
        if ($v_1.indexOf($p0) !== -1) {
            return $v_1;
        }
    }
    return null;
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$83 = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$83($p0) {
    if ($p0.rules) {
        return $p0.rules;
    }
    else {
        return $p0.cssRules;
    }
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.getStyleRules = function SP_UI_Timeline_NamedColors_StyleRuleUtility$getStyleRules(prefixWithClass, prefix, onlyIfLoaded) {
    if (!prefixWithClass.startsWith('.')) {
        prefixWithClass = '.' + prefixWithClass;
    }
    prefixWithClass = prefixWithClass.toLowerCase();
    if (!SP.UI.Timeline.NamedColors.StyleRuleUtility.$2m) {
        SP.UI.Timeline.NamedColors.StyleRuleUtility.$2m = {};
    }
    var $v_0 = null;

    $v_0 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$2m[prefixWithClass];
    if ($v_0) {
        return $v_0;
    }
    else {
        if (!SP.UI.Timeline.NamedColors.StyleRuleUtility.$2n) {
            SP.UI.Timeline.NamedColors.StyleRuleUtility.$2n = {};
        }
        var $v_1 = true;
        var $v_2 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$2n[prefix];

        if (!$v_2) {
            $v_2 = [];
            var $v_5 = {};
            var $v_6 = document.styleSheets;
            var $v_7 = $v_6.length;

            for (var $v_8 = 0; $v_8 < $v_7; $v_8++) {
                var $v_9 = SP.UI.Timeline.NamedColors.StyleRuleUtility.$85($v_6[$v_8], prefix, $v_2, $v_5, onlyIfLoaded);

                if (!$v_9) {
                    $v_1 = false;
                }
            }
            if ($v_1) {
                SP.UI.Timeline.NamedColors.StyleRuleUtility.$2n[prefix] = $v_2;
            }
        }
        var $v_3 = [];
        var $v_4 = $v_2.length;

        for (var $v_A = 0; $v_A < $v_4; $v_A++) {
            var $v_B = $v_2[$v_A];

            if ($v_B.$6r_0.indexOf(prefixWithClass) !== -1) {
                $v_3.push($v_B);
            }
        }
        if ($v_1) {
            SP.UI.Timeline.NamedColors.StyleRuleUtility.$2m[prefixWithClass] = $v_3;
        }
        return $v_3;
    }
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$5z = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$5z($p0, $p1) {
    var $v_0 = $p0.indexOf($p1);

    if ($v_0 === -1) {
        return '';
    }
    var $v_1 = $v_0 + $p1.length;
    var $v_2 = $p0.indexOf(',', $v_0);

    if ($v_2 === -1) {
        $v_2 = $p0.length;
    }
    var $v_3 = $v_2 - $v_1;

    return $p0.substr($v_1, $v_3);
};
SP.UI.Timeline.NamedColors.StyleRuleUtility.$8b = function SP_UI_Timeline_NamedColors_StyleRuleUtility$$8b($p0) {
    if (!SP.UI.Timeline.NamedColors.StyleRuleUtility.$2o[$p0]) {
        try {
            var $v_0 = new XMLHttpRequest();

            $v_0.open('GET', $p0, false);
            $v_0.send(null);
            SP.UI.Timeline.NamedColors.StyleRuleUtility.$2o[$p0] = $v_0.responseText;
        }
        catch ($$e_2) {
            SP.UI.Timeline.NamedColors.StyleRuleUtility.$2o[$p0] = '';
        }
    }
    return SP.UI.Timeline.NamedColors.StyleRuleUtility.$2o[$p0];
};
SP.UI.Timeline.RGB = function SP_UI_Timeline_RGB(r, g, b) {
    this.$1u_0 = SP.UI.Timeline.RGB.$4S(r);
    this.$1q_0 = SP.UI.Timeline.RGB.$4S(g);
    this.$26_0 = SP.UI.Timeline.RGB.$4S(b);
};
SP.UI.Timeline.RGB.$4S = function SP_UI_Timeline_RGB$$4S($p0) {
    if ($p0 < 0 || $p0 > 255) {
        return 0;
    }
    return $p0;
};
SP.UI.Timeline.RGB.rgbFromString = function SP_UI_Timeline_RGB$rgbFromString(value) {
    var $v_0 = 0;
    var $v_1 = 0;
    var $v_2 = 0;

    if (value.startsWith('rgb')) {
        var $v_3 = new RegExp('rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)');
        var $v_4 = $v_3.exec(value);

        if ($v_4.length === 4) {
            $v_0 = parseInt($v_4[1]);
            $v_1 = parseInt($v_4[2]);
            $v_2 = parseInt($v_4[3]);
        }
    }
    else {
        value = value.toUpperCase();
        if (value.length === 4) {
            var $v_5 = value.substr(value.length - 3);

            $v_0 = SP.UI.Timeline.RGB.$4h($v_5.substr(0, 1));
            $v_1 = SP.UI.Timeline.RGB.$4h($v_5.substr(1, 1));
            $v_2 = SP.UI.Timeline.RGB.$4h($v_5.substr(2, 1));
        }
        else if (value.length > 5) {
            var $v_6 = value.substr(value.length - 6);

            $v_0 = SP.UI.Timeline.RGB.$4u($v_6.substr(0, 2));
            $v_1 = SP.UI.Timeline.RGB.$4u($v_6.substr(2, 2));
            $v_2 = SP.UI.Timeline.RGB.$4u($v_6.substr(4, 2));
        }
    }
    return new SP.UI.Timeline.RGB($v_0, $v_1, $v_2);
};
SP.UI.Timeline.RGB.$4h = function SP_UI_Timeline_RGB$$4h($p0) {
    return SP.UI.Timeline.RGB.$4U($p0.charAt(0)) * 17;
};
SP.UI.Timeline.RGB.$4u = function SP_UI_Timeline_RGB$$4u($p0) {
    return SP.UI.Timeline.RGB.$4U($p0.charAt(0)) * 16 + SP.UI.Timeline.RGB.$4U($p0.charAt(1));
};
SP.UI.Timeline.RGB.$4U = function SP_UI_Timeline_RGB$$4U($p0) {
    switch ($p0) {
    case '0':
        return 0;
    case '1':
        return 1;
    case '2':
        return 2;
    case '3':
        return 3;
    case '4':
        return 4;
    case '5':
        return 5;
    case '6':
        return 6;
    case '7':
        return 7;
    case '8':
        return 8;
    case '9':
        return 9;
    case 'A':
        return 10;
    case 'B':
        return 11;
    case 'C':
        return 12;
    case 'D':
        return 13;
    case 'E':
        return 14;
    case 'F':
        return 15;
    default:
        return 0;
    }
};
SP.UI.Timeline.RGB.$2R = function SP_UI_Timeline_RGB$$2R($p0) {
    switch ($p0) {
    case 0:
        return '0';
    case 1:
        return '1';
    case 2:
        return '2';
    case 3:
        return '3';
    case 4:
        return '4';
    case 5:
        return '5';
    case 6:
        return '6';
    case 7:
        return '7';
    case 8:
        return '8';
    case 9:
        return '9';
    case 10:
        return 'A';
    case 11:
        return 'B';
    case 12:
        return 'C';
    case 13:
        return 'D';
    case 14:
        return 'E';
    case 15:
        return 'F';
    default:
        return '0';
    }
};
SP.UI.Timeline.RGB.prototype = {
    $1u_0: 0,
    $1q_0: 0,
    $26_0: 0,
    asARGBstring: function SP_UI_Timeline_RGB$asARGBstring() {
        var $v_0 = Math.round(this.$1u_0);
        var $v_1 = Math.round(this.$1q_0);
        var $v_2 = Math.round(this.$26_0);

        return String.format('FF{0}{1}{2}{3}{4}{5}', SP.UI.Timeline.RGB.$2R(Math.floor($v_0 / 16)), SP.UI.Timeline.RGB.$2R(Math.floor($v_0 % 16)), SP.UI.Timeline.RGB.$2R(Math.floor($v_1 / 16)), SP.UI.Timeline.RGB.$2R(Math.floor($v_1 % 16)), SP.UI.Timeline.RGB.$2R(Math.floor($v_2 / 16)), SP.UI.Timeline.RGB.$2R(Math.floor($v_2 % 16)));
    }
};
SP.UI.Timeline.HSL = function SP_UI_Timeline_HSL() {
};
SP.UI.Timeline.HSL.rgBfromHSL = function SP_UI_Timeline_HSL$rgBfromHSL(input) {
    var $v_0 = (1 - Math.abs(2 * input.$2C_0 - 1)) * input.$2h_0 * 255;
    var $v_1 = input.$2y_0 * 6;
    var $v_2 = $v_0 * (1 - Math.abs($v_1 % 2 - 1));
    var $v_3 = input.$2C_0 * 255 - $v_0 / 2;
    var $v_4;
    var $v_5;
    var $v_6;

    if (!$v_1) {
        $v_4 = ($v_5 = ($v_6 = 0));
    }
    if ($v_1 < 1) {
        $v_4 = $v_0 + $v_3;
        $v_5 = $v_2 + $v_3;
        $v_6 = $v_3;
    }
    else if ($v_1 < 2) {
        $v_4 = $v_2 + $v_3;
        $v_5 = $v_0 + $v_3;
        $v_6 = $v_3;
    }
    else if ($v_1 < 3) {
        $v_4 = $v_3;
        $v_5 = $v_0 + $v_3;
        $v_6 = $v_2 + $v_3;
    }
    else if ($v_1 < 4) {
        $v_4 = $v_3;
        $v_5 = $v_2 + $v_3;
        $v_6 = $v_0 + $v_3;
    }
    else if ($v_1 < 5) {
        $v_4 = $v_2 + $v_3;
        $v_5 = $v_3;
        $v_6 = $v_0 + $v_3;
    }
    else {
        $v_4 = $v_0 + $v_3;
        $v_5 = $v_3;
        $v_6 = $v_2 + $v_3;
    }
    return new SP.UI.Timeline.RGB(Math.round($v_4), Math.round($v_5), Math.round($v_6));
};
SP.UI.Timeline.HSL.hsLfromRGB = function SP_UI_Timeline_HSL$hsLfromRGB(input) {
    var $v_0 = new SP.UI.Timeline.HSL();
    var $v_1 = Math.max(input.$1u_0, input.$1q_0, input.$26_0);
    var $v_2 = Math.min(input.$1u_0, input.$1q_0, input.$26_0);
    var $v_3 = $v_1 - $v_2;
    var $v_4 = 0;

    if (!$v_3) {
        $v_4 = 0;
    }
    else {
        if (input.$1u_0 === $v_1) {
            $v_4 = (input.$1q_0 - input.$26_0) / $v_3 % 6;
            if ($v_4 < 0) {
                $v_4 += 6;
            }
        }
        else if (input.$1q_0 === $v_1) {
            $v_4 = (input.$26_0 - input.$1u_0) / $v_3 + 2;
        }
        else {
            $v_4 = (input.$1u_0 - input.$1q_0) / $v_3 + 4;
        }
    }
    $v_0.$2y_0 = $v_4 / 6;
    $v_0.$2C_0 = 0.5 * ($v_1 + $v_2) / 255;
    if (!$v_3) {
        $v_0.$2h_0 = 0;
    }
    else {
        $v_0.$2h_0 = $v_3 / 255 / (1 - Math.abs(2 * $v_0.$2C_0 - 1));
    }
    return $v_0;
};
SP.UI.Timeline.HSL.$49 = function SP_UI_Timeline_HSL$$49($p0, $p1) {
    var $v_0 = $p0 * 240;

    $v_0 += $p1;
    if ($v_0 > 240) {
        $v_0 = 240;
    }
    if ($v_0 < 0) {
        $v_0 = 0;
    }
    return $v_0 / 240;
};
SP.UI.Timeline.HSL.prototype = {
    $2y_0: 0,
    $2h_0: 0,
    $2C_0: 0,
    lightenHSL: function SP_UI_Timeline_HSL$lightenHSL() {
        return this.$4A_0(0, -40, 20);
    },
    darkenHSL: function SP_UI_Timeline_HSL$darkenHSL() {
        return this.$4A_0(0, 0, -20);
    },
    mainAreaBorderHSL: function SP_UI_Timeline_HSL$mainAreaBorderHSL() {
        return this.$4A_0(0, 0, -40);
    },
    $4A_0: function SP_UI_Timeline_HSL$$4A_0($p0, $p1, $p2) {
        var $v_0 = new SP.UI.Timeline.HSL();
        var $v_1 = SP.UI.Timeline.HSL.$49(this.$2y_0, $p0);
        var $v_2 = SP.UI.Timeline.HSL.$49(this.$2h_0, $p1);
        var $v_3 = SP.UI.Timeline.HSL.$49(this.$2C_0, $p2);

        $v_0.$2y_0 = $v_1;
        $v_0.$2h_0 = $v_2;
        $v_0.$2C_0 = $v_3;
        return $v_0;
    }
};
SP.UI.Timeline.ItemTypeStatic = function SP_UI_Timeline_ItemTypeStatic() {
};
SP.UI.Timeline.ItemTypeStatic.tagNameFromItemType = function SP_UI_Timeline_ItemTypeStatic$tagNameFromItemType(iType) {
    switch (iType) {
    case 0:
        return 't';
    case 1:
        return 'ft';
    case 2:
        return 'm';
    case 3:
    default:
        return null;
    }
};
SP.UI.Timeline.ItemTypeStatic.showElement = function SP_UI_Timeline_ItemTypeStatic$showElement(element) {
    element.style.visibility = '';
};
SP.UI.Timeline.ItemTypeStatic.hideElement = function SP_UI_Timeline_ItemTypeStatic$hideElement(element) {
    element.style.visibility = 'hidden';
};
SP.UI.Timeline.ItemTypeStatic.addNodesForText = function SP_UI_Timeline_ItemTypeStatic$addNodesForText(parent, renderedTitle, renderedDate, titleFormat, dateFormat, iType, localFormat, formats, tss) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    var $v_0 = document.createElement('span');

    $v_0.className = titleFormat;
    $v_0.setAttribute('unselectable', 'on');
    $v_0.style.width = SP.UI.Timeline.Measurer.getPercentString(100);
    $v_0.style.textOverflow = 'ellipsis';
    (localFormat.getLabelTextStyle(formats, iType, tss)).setStyleCss(tss, iType, $v_0.style);
    if (renderedTitle) {
        var $v_1 = document.createTextNode(renderedTitle);

        $v_0.appendChild($v_1);
        parent.appendChild($v_0);
    }
    if (renderedDate) {
        var $v_2 = document.createElement('br');

        parent.appendChild($v_2);
        var $v_3 = document.createElement('span');

        $v_3.className = dateFormat;
        $v_3.setAttribute('unselectable', 'on');
        $v_3.style.width = SP.UI.Timeline.Measurer.getPercentString(100);
        (localFormat.getDateTextStyle(formats, iType, tss)).setStyleCss(tss, iType, $v_3.style);
        var $v_4 = document.createTextNode(renderedDate);

        $v_3.appendChild($v_4);
        parent.appendChild($v_3);
    }
};
SP.UI.Timeline.ItemTypeStatic.createToolTipContentsOneDate = function SP_UI_Timeline_ItemTypeStatic$createToolTipContentsOneDate(title, date, dateFormatString) {
    return String.format(Strings.STS.L_TimelineDisplaySummaryInfoOneDate, STSHtmlEncode(title), SP.UI.Timeline.ItemTypeStatic.createDateString(date, dateFormatString));
};
SP.UI.Timeline.ItemTypeStatic.createToolTipContentsTwoDates = function SP_UI_Timeline_ItemTypeStatic$createToolTipContentsTwoDates(title, startDate, endDate, dateFormatString) {
    return String.format(Strings.STS.L_TimelineDisplaySummaryInfoTwoDates, STSHtmlEncode(title), SP.UI.Timeline.ItemTypeStatic.createDateString(startDate, dateFormatString), SP.UI.Timeline.ItemTypeStatic.createDateString(endDate, dateFormatString));
};
SP.UI.Timeline.ItemTypeStatic.createDateStringTwoParts = function SP_UI_Timeline_ItemTypeStatic$createDateStringTwoParts(startDate, endDate, dateFormatString) {
    return String.format(Strings.STS.L_TimelineDateRangeFormat, SP.UI.Timeline.ItemTypeStatic.createDateString(startDate, dateFormatString), SP.UI.Timeline.ItemTypeStatic.createDateString(endDate, dateFormatString));
};
SP.UI.Timeline.ItemTypeStatic.get_$6M = function SP_UI_Timeline_ItemTypeStatic$get_$6M() {
    if (!SP.UI.Timeline.ItemTypeStatic.$X) {
        SP.UI.Timeline.ItemTypeStatic.$X = {};
        SP.UI.Timeline.ItemTypeStatic.$X['de-DE'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '.');
        SP.UI.Timeline.ItemTypeStatic.$X['en-GB'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['en-US'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(true, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['es-ES'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['fr-FR'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['it-IT'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['ja-JP'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(true, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['ko-KR'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(true, '-');
        SP.UI.Timeline.ItemTypeStatic.$X['pt-BR'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['ru-RU'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '.');
        SP.UI.Timeline.ItemTypeStatic.$X['zh-CN'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(true, '/');
        SP.UI.Timeline.ItemTypeStatic.$X['zh-HK'] = new SP.UI.Timeline.ItemTypeStatic.MDInfo(false, '/');
    }
    return SP.UI.Timeline.ItemTypeStatic.$X;
};
SP.UI.Timeline.ItemTypeStatic.isMonthDateSupportedCulture = function SP_UI_Timeline_ItemTypeStatic$isMonthDateSupportedCulture(cultureName) {
    return cultureName in SP.UI.Timeline.ItemTypeStatic.get_$6M();
};
SP.UI.Timeline.ItemTypeStatic.createDateString = function SP_UI_Timeline_ItemTypeStatic$createDateString(oneDate, dateFormatString) {
    var $v_0 = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(oneDate, _spRegionalSettings.calendarType);
    var $v_1 = Sys.CultureInfo.CurrentCulture.name;

    if (dateFormatString === 'tmp') {
        if (SP.UI.Timeline.ItemTypeStatic.isMonthDateSupportedCulture($v_1)) {
            var $v_2 = (SP.UI.Timeline.ItemTypeStatic.get_$6M())[$v_1];
            var $v_3 = $v_2._monthFirst ? ($v_0.get_month()).toString() : ($v_0.get_day()).toString();
            var $v_4 = $v_2._monthFirst ? ($v_0.get_day()).toString() : ($v_0.get_month()).toString();

            return String.format('{0}{1}{2}', $v_3, $v_2._separator, $v_4);
        }
        dateFormatString = 'm';
    }
    return $v_0.format(dateFormatString, $v_1);
};
SP.UI.Timeline.ItemTypeStatic.$8E = function SP_UI_Timeline_ItemTypeStatic$$8E($p0) {
    if (!$p0.startTime && !$p0.endTime) {
        return false;
    }
    if ($p0.startTime && $p0.startTime < SP.UI.Timeline.ItemTypeStatic.$6o) {
        return false;
    }
    if ($p0.endTime && $p0.endTime > SP.UI.Timeline.ItemTypeStatic.$6n) {
        return false;
    }
    return true;
};
SP.UI.Timeline.ItemTypeStatic.MDInfo = function SP_UI_Timeline_ItemTypeStatic_MDInfo($p0, $p1) {
    this._monthFirst = $p0;
    this._separator = $p1;
};
SP.UI.Timeline.ItemTypeStatic.MDInfo.prototype = {
    _monthFirst: false,
    _separator: null
};
SP.UI.Timeline.ElementSet = function SP_UI_Timeline_ElementSet() {
};
SP.UI.Timeline.ElementSet.getByUid = function SP_UI_Timeline_ElementSet$getByUid(elements, uid) {
    for (var $v_0 = 0; $v_0 < elements.get_length(); $v_0++) {
        var $v_1 = elements.getAt($v_0);

        if ($v_1.matchesUid(uid)) {
            return $v_1;
        }
    }
    return null;
};
SP.UI.Timeline.ElementSet.prototype = {
    $3e_0: null,
    $3h_0: null,
    $3u_0: null,
    get_bars: function SP_UI_Timeline_ElementSet$get_bars() {
        if (!this.$3e_0) {
            this.$3e_0 = new SP.UI.Timeline.BarElementSet();
        }
        return this.$3e_0;
    },
    get_callouts: function SP_UI_Timeline_ElementSet$get_callouts() {
        if (!this.$3h_0) {
            this.$3h_0 = new SP.UI.Timeline.CalloutElementSet();
        }
        return this.$3h_0;
    },
    get_milestones: function SP_UI_Timeline_ElementSet$get_milestones() {
        if (!this.$3u_0) {
            this.$3u_0 = new SP.UI.Timeline.MilestoneElementSet();
        }
        return this.$3u_0;
    },
    getDateRangeOfVisibleElements: function SP_UI_Timeline_ElementSet$getDateRangeOfVisibleElements(minDate, maxDate) {
        for (var $v_0 = 0; $v_0 < (this.get_bars()).get_length(); $v_0++) {
            ((this.get_bars()).getAt($v_0)).$4c_1(minDate, maxDate);
        }
        for (var $v_1 = 0; $v_1 < (this.get_callouts()).get_length(); $v_1++) {
            ((this.get_callouts()).getAt($v_1)).$4c_1(minDate, maxDate);
        }
        for (var $v_2 = 0; $v_2 < (this.get_milestones()).get_length(); $v_2++) {
            ((this.get_milestones()).getAt($v_2)).$4c_1(minDate, maxDate);
        }
    },
    $4l_0: function SP_UI_Timeline_ElementSet$$4l_0($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.get_length(); $v_0++) {
            var $v_1 = $p0.getAt($v_0);

            if ($v_1) {
                $p1($v_1);
            }
        }
    },
    $8c_0: function SP_UI_Timeline_ElementSet$$8c_0($p0) {
        this.$4l_0(this.get_bars(), $p0);
        this.$4l_0(this.get_callouts(), $p0);
        this.$4l_0(this.get_milestones(), $p0);
    },
    $7F_0: function SP_UI_Timeline_ElementSet$$7F_0($p0) {
        var $$t_2 = this;

        this.$8c_0(function($p1_0) {
            $p1_0.clean($p0);
        });
    },
    $7c_0: function SP_UI_Timeline_ElementSet$$7c_0($p0) {
        var $$t_2 = this;

        this.$6m_0($p0, function($p1_0) {
            $p1_0.$3N_1();
            $p1_0.$4q_1();
        });
    },
    $8A_0: function SP_UI_Timeline_ElementSet$$8A_0($p0) {
        var $$t_2 = this;

        this.$6m_0($p0, function($p1_0) {
            $p1_0.hide();
        });
    },
    $6m_0: function SP_UI_Timeline_ElementSet$$6m_0($p0, $p1) {
        this.$4m_0($p0, this.get_bars(), $p1);
        this.$4m_0($p0, this.get_callouts(), $p1);
        this.$4m_0($p0, this.get_milestones(), $p1);
    },
    $4m_0: function SP_UI_Timeline_ElementSet$$4m_0($p0, $p1, $p2) {
        var $v_0 = SP.UI.Timeline.ElementSet.getByUid($p1, $p0);

        if ($v_0) {
            $p2($v_0);
        }
    },
    $5n_0: function SP_UI_Timeline_ElementSet$$5n_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = 9999;
        var $v_1 = -9999;
        var $$t_8, $$t_9;

        (this.get_milestones()).$5k_0($p1, $p2, $p3, $$t_8 = {
            'val': $v_0
        }, $$t_9 = {
            'val': $v_1
        }), $v_0 = $$t_8.val, $v_1 = $$t_9.val;
        var $$t_A, $$t_B;

        (this.get_callouts()).$5k_0($p1, $p2, $p3, $$t_A = {
            'val': $v_0
        }, $$t_B = {
            'val': $v_1
        }), $v_0 = $$t_A.val, $v_1 = $$t_B.val;
        if ($v_0 < $v_1) {
            $v_0 -= $p1 ? $p4 : $p5;
            $v_1 += $p1 ? $p5 : $p4;
            if ($p1) {
                if ($p0 < -$v_0) {
                    return -$v_1;
                }
            }
            else if ($p0 >= $v_0) {
                return $v_1;
            }
        }
        return $p0;
    },
    $7E_0: function SP_UI_Timeline_ElementSet$$7E_0() {
        for (var $v_0 = 0; $v_0 < (this.get_milestones()).get_length(); $v_0++) {
            var $v_1 = (this.get_milestones()).get_item($v_0);

            if (!$v_1.$12_1) {
                continue;
            }
            var $v_2;
            var $v_3;
            var $v_4;
            var $v_5;
            var $v_6;
            var $$t_I, $$t_J, $$t_K, $$t_L, $$t_M, $$t_N;

            if (!($$t_N = $v_1.$3I_2($$t_I = {
                'val': $v_2
            }, $$t_J = {
                'val': $v_3
            }, $$t_K = {
                'val': $v_4
            }, $$t_L = {
                'val': $v_5
            }, $$t_M = {
                'val': $v_6
            }), $v_2 = $$t_I.val, $v_3 = $$t_J.val, $v_4 = $$t_K.val, $v_5 = $$t_L.val, $v_6 = $$t_M.val, $$t_N)) {
                $v_1.$12_1 = false;
                continue;
            }
            var $v_7 = $v_6 - $v_5;

            if ($v_7 < 0) {
                $v_7 = -$v_7;
            }
            var $v_8 = 10;

            $v_1.$C_2 = this.$5n_0($v_1.$C_2, $v_2, $v_3, $v_4, $v_8, $v_7);
            $v_1.$12_1 = false;
        }
        for (var $v_9 = 0; $v_9 < (this.get_callouts()).get_length(); $v_9++) {
            var $v_A = (this.get_callouts()).get_item($v_9);

            if (!$v_A.$12_1) {
                continue;
            }
            var $v_B;
            var $v_C;
            var $v_D;
            var $v_E;
            var $v_F;
            var $$t_O, $$t_P, $$t_Q, $$t_R, $$t_S, $$t_T;

            if (!($$t_T = $v_A.$3I_2($$t_O = {
                'val': $v_B
            }, $$t_P = {
                'val': $v_C
            }, $$t_Q = {
                'val': $v_D
            }, $$t_R = {
                'val': $v_E
            }, $$t_S = {
                'val': $v_F
            }), $v_B = $$t_O.val, $v_C = $$t_P.val, $v_D = $$t_Q.val, $v_E = $$t_R.val, $v_F = $$t_S.val, $$t_T)) {
                $v_A.$12_1 = false;
                continue;
            }
            var $v_G = $v_F - $v_E;

            if ($v_G < 0) {
                $v_G = -$v_G;
            }
            var $v_H = 10;

            $v_A.set_$6F_2(this.$5n_0($v_A.get_$6F_2(), $v_B, $v_C, $v_D, $v_G, $v_H));
            $v_A.$12_1 = false;
        }
    }
};
SP.UI.Timeline.Measurer = function SP_UI_Timeline_Measurer() {
};
SP.UI.Timeline.Measurer.getPixelString = function SP_UI_Timeline_Measurer$getPixelString(value) {
    return Math.floor(value) + 'px';
};
SP.UI.Timeline.Measurer.getPointString = function SP_UI_Timeline_Measurer$getPointString(value) {
    return Math.floor(value) + 'pt';
};
SP.UI.Timeline.Measurer.getPercentString = function SP_UI_Timeline_Measurer$getPercentString(value) {
    return Math.floor(value) + '%';
};
Type.registerNamespace('SP.UI.Timeline.Utilities');
SP.UI.Timeline.Utilities.ItemFormat = function SP_UI_Timeline_Utilities_ItemFormat() {
    this.$$d_$8x_0 = Function.createDelegate(this, this.$8x_0);
    this.$$d_getDateTextStyle = Function.createDelegate(this, this.getDateTextStyle);
    this.$$d_$92_0 = Function.createDelegate(this, this.$92_0);
    this.$$d_getLabelTextStyle = Function.createDelegate(this, this.getLabelTextStyle);
};
SP.UI.Timeline.Utilities.ItemFormat.createStyle = function SP_UI_Timeline_Utilities_ItemFormat$createStyle(node) {
    var $v_0 = new SP.UI.Timeline.Utilities.ItemFormat();

    $v_0.$V_0 = node.getAttribute('clr');
    $v_0.$1P_0 = node.getAttribute('Dclr');
    $v_0.$1Z_0 = node.getAttribute('Lclr');
    $v_0.$P_0 = node.getAttribute('thm');
    $v_0.$1F_0 = node.getAttribute('t1');
    $v_0.$1D_0 = node.getAttribute('t2');
    $v_0.$1R_0 = node.getAttribute('filterUid');
    $v_0.$35_0 = node.getAttribute('shared') > 0;
    $v_0.$2b_0 = node.getAttribute('type');
    return $v_0;
};
SP.UI.Timeline.Utilities.ItemFormat.$4M = function SP_UI_Timeline_Utilities_ItemFormat$$4M($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = -1;

    if (!$p1) {
        $v_0 = $p4($p2);
    }
    else {
        $v_0 = Number.parseInvariant($p1);
    }
    var $v_1 = $p3.$4M_0($v_0);

    if ($v_0 !== $v_1) {
        $p6($v_1);
    }
    return $p5($p0, $p2, $p3);
};
SP.UI.Timeline.Utilities.ItemFormat.prototype = {
    $V_0: null,
    $1P_0: null,
    $1Z_0: null,
    $P_0: null,
    $1F_0: null,
    $1D_0: null,
    $1R_0: null,
    $35_0: false,
    $2b_0: null,
    serialize: function SP_UI_Timeline_Utilities_ItemFormat$serialize(idx) {
        var $v_0 = '<{0} {1}=\"{2}\" ';

        if (this.$V_0) {
            $v_0 += '{3}=\"{4}\" ';
        }
        if (this.$1P_0) {
            $v_0 += '{5}=\"{6}\" ';
        }
        if (this.$1Z_0) {
            $v_0 += '{7}=\"{8}\" ';
        }
        if (this.$P_0) {
            $v_0 += '{9}=\"{10}\" ';
        }
        if (this.$1F_0) {
            $v_0 += '{11}=\"{12}\" ';
        }
        if (this.$1D_0) {
            $v_0 += '{13}=\"{14}\" ';
        }
        if (this.$1R_0) {
            $v_0 += '{15}=\"{16}\" ';
        }
        if (this.$35_0) {
            $v_0 += '{17}=\"{18}\" ';
        }
        if (this.$2b_0) {
            $v_0 += '{19}=\"{20}\" ';
        }
        $v_0 += '/>';
        var $v_1 = String.format($v_0, 'fmt', 'id', idx, 'clr', this.$V_0, 'Dclr', this.$1P_0, 'Lclr', this.$1Z_0, 'thm', this.$P_0, 't1', this.$1F_0, 't2', this.$1D_0, 'filterUid', this.$1R_0, 'shared', this.$35_0 ? '1' : '0', 'type', this.$2b_0);

        return $v_1;
    },
    getFilterUid: function SP_UI_Timeline_Utilities_ItemFormat$getFilterUid() {
        return this.$1R_0;
    },
    getColor: function SP_UI_Timeline_Utilities_ItemFormat$getColor(ifs, iType) {
        if (this.$P_0) {
            var $v_0 = SP.UI.Timeline.Colors.$4I(this.$P_0, iType, false);

            if ($v_0) {
                return $v_0;
            }
        }
        if (this.$V_0) {
            return SP.UI.Timeline.Colors.argBtoRGB(this.$V_0);
        }
        if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
            var $v_1 = SP.UI.Timeline.Colors.$4I('0001', iType, false);

            if (!$v_1) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5V;
            }
            return $v_1;
        }
        return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getColor(null, iType);
    },
    setColor: function SP_UI_Timeline_Utilities_ItemFormat$setColor(color) {
        this.$V_0 = color;
    },
    getDarkColor: function SP_UI_Timeline_Utilities_ItemFormat$getDarkColor(ifs, iType) {
        if (!this.$1P_0) {
            if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
                var $v_0 = this.getColor(ifs, iType);
                var $v_1 = SP.UI.Timeline.RGB.rgbFromString($v_0);
                var $v_2 = SP.UI.Timeline.HSL.hsLfromRGB($v_1);
                var $v_3 = $v_2.darkenHSL();

                return SP.UI.Timeline.Colors.argBtoRGB((SP.UI.Timeline.HSL.rgBfromHSL($v_3)).asARGBstring());
            }
            else {
                return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getDarkColor(null, iType);
            }
        }
        else {
            return SP.UI.Timeline.Colors.argBtoRGB(this.$1P_0);
        }
    },
    setDarkColor: function SP_UI_Timeline_Utilities_ItemFormat$setDarkColor(darkColor) {
        this.$1P_0 = darkColor;
    },
    getLightColor: function SP_UI_Timeline_Utilities_ItemFormat$getLightColor(ifs, iType) {
        if (!this.$1Z_0) {
            if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
                var $v_0 = this.getColor(ifs, iType);
                var $v_1 = SP.UI.Timeline.RGB.rgbFromString($v_0);
                var $v_2 = SP.UI.Timeline.HSL.hsLfromRGB($v_1);
                var $v_3 = $v_2.lightenHSL();

                return SP.UI.Timeline.Colors.argBtoRGB((SP.UI.Timeline.HSL.rgBfromHSL($v_3)).asARGBstring());
            }
            else {
                return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getLightColor(null, iType);
            }
        }
        else {
            return SP.UI.Timeline.Colors.argBtoRGB(this.$1Z_0);
        }
    },
    setLightColor: function SP_UI_Timeline_Utilities_ItemFormat$setLightColor(lightColor) {
        this.$1Z_0 = lightColor;
    },
    getTheme: function SP_UI_Timeline_Utilities_ItemFormat$getTheme(ifs, iType) {
        if (!this.$P_0) {
            if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
                return '0001';
            }
            return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getTheme(null, iType);
        }
        return this.$P_0;
    },
    setTheme: function SP_UI_Timeline_Utilities_ItemFormat$setTheme(theme) {
        this.$P_0 = theme;
    },
    getLabelTextStyle: function SP_UI_Timeline_Utilities_ItemFormat$getLabelTextStyle(ifs, iType, tss) {
        if (!this.$1F_0) {
            if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
                return tss.defaultLabelStyleFromItemType(iType);
            }
            else {
                return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getLabelTextStyle(null, iType, tss);
            }
        }
        else {
            return tss.get_item(Number.parseInvariant(this.$1F_0));
        }
    },
    getDateTextStyle: function SP_UI_Timeline_Utilities_ItemFormat$getDateTextStyle(ifs, iType, tss) {
        if (!this.$1D_0) {
            if (!ifs || !ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)) {
                return tss.defaultDateStyleFromItemType(iType);
            }
            else {
                return (ifs.getFormat(SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType(iType), iType)).getDateTextStyle(null, iType, tss);
            }
        }
        else {
            return tss.get_item(Number.parseInvariant(this.$1D_0));
        }
    },
    $6y_0: function SP_UI_Timeline_Utilities_ItemFormat$$6y_0() {
        var $v_0 = new SP.UI.Timeline.Utilities.ItemFormat();

        $v_0.$V_0 = this.$V_0;
        $v_0.$1P_0 = this.$1P_0;
        $v_0.$1D_0 = this.$1D_0;
        $v_0.$2b_0 = this.$2b_0;
        $v_0.$1F_0 = this.$1F_0;
        $v_0.$1Z_0 = this.$1Z_0;
        $v_0.$P_0 = this.$P_0;
        return $v_0;
    },
    $5w_0: function SP_UI_Timeline_Utilities_ItemFormat$$5w_0($p0, $p1, $p2) {
        return SP.UI.Timeline.Utilities.ItemFormat.$4M($p0, this.$1F_0, $p1, $p2, SP.UI.Timeline.Utilities.TextStyleSet.$4C, this.$$d_getLabelTextStyle, this.$$d_$92_0);
    },
    $80_0: function SP_UI_Timeline_Utilities_ItemFormat$$80_0($p0, $p1, $p2) {
        return SP.UI.Timeline.Utilities.ItemFormat.$4M($p0, this.$1D_0, $p1, $p2, SP.UI.Timeline.Utilities.TextStyleSet.$5T, this.$$d_getDateTextStyle, this.$$d_$8x_0);
    },
    $92_0: function SP_UI_Timeline_Utilities_ItemFormat$$92_0($p0) {
        this.$1F_0 = $p0.toString();
    },
    $8x_0: function SP_UI_Timeline_Utilities_ItemFormat$$8x_0($p0) {
        this.$1D_0 = $p0.toString();
    },
    $6A_0: function SP_UI_Timeline_Utilities_ItemFormat$$6A_0() {
        return this.$35_0;
    }
};
SP.UI.Timeline.Utilities.ItemFormatSet = function SP_UI_Timeline_Utilities_ItemFormatSet() {
};
SP.UI.Timeline.Utilities.ItemFormatSet.createItemFormats = function SP_UI_Timeline_Utilities_ItemFormatSet$createItemFormats(fmtSet, filterFormats) {
    var $v_0 = new SP.UI.Timeline.Utilities.ItemFormatSet();

    $v_0.$s_0 = [];
    $v_0.$r_0 = {};
    var $v_1 = fmtSet.getElementsByTagName('fmt');

    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = SP.UI.Timeline.TimelineControl.getNumberFromXml($v_1[$v_2], 'id', -1);

        if ($v_3 < 0) {
            continue;
        }
        else {
            var $v_4 = SP.UI.Timeline.Utilities.ItemFormat.createStyle($v_1[$v_2]);

            $v_0.set_$96_0($v_3, $v_4);
            var $v_5 = $v_4.getFilterUid();

            if ($v_5) {
                filterFormats[$v_5] = $v_3;
            }
            $v_0.$r_0[$v_3.toString()] = $v_4;
        }
    }
    return $v_0;
};
SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType = function SP_UI_Timeline_Utilities_ItemFormatSet$sharedDefaultFormatNumberFromItemType(iType) {
    switch (iType) {
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    case 3:
        return 3;
    default:
        return 4;
    }
};
SP.UI.Timeline.Utilities.ItemFormatSet.prototype = {
    $s_0: null,
    $r_0: null,
    get_defaultFormats: function SP_UI_Timeline_Utilities_ItemFormatSet$get_defaultFormats() {
        return this.$r_0;
    },
    set_defaultFormats: function SP_UI_Timeline_Utilities_ItemFormatSet$set_defaultFormats(value) {
        this.$r_0 = value;
        return value;
    },
    get_calloutDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$get_calloutDefault() {
        return this.$r_0['1'];
    },
    set_calloutDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$set_calloutDefault(value) {
        this.$r_0['1'] = value;
        return value;
    },
    get_barDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$get_barDefault() {
        return this.$r_0['0'];
    },
    set_barDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$set_barDefault(value) {
        this.$r_0['0'] = value;
        return value;
    },
    get_milestoneDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$get_milestoneDefault() {
        return this.$r_0['2'];
    },
    set_milestoneDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$set_milestoneDefault(value) {
        this.$r_0['2'] = value;
        return value;
    },
    get_mainAreaDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$get_mainAreaDefault() {
        return this.$r_0['3'];
    },
    set_mainAreaDefault: function SP_UI_Timeline_Utilities_ItemFormatSet$set_mainAreaDefault(value) {
        this.$r_0['3'] = value;
        return value;
    },
    serialize: function SP_UI_Timeline_Utilities_ItemFormatSet$serialize() {
        var $v_0 = [];

        for (var $v_3 = 0; $v_3 < this.$s_0.length; $v_3++) {
            Array.add($v_0, (this.get_$96_0($v_3)).serialize($v_3));
        }
        var $v_1 = $v_0.join('');
        var $v_2 = String.format('<{0}>{1}</{0}>', 'fmtSet', $v_1);

        return $v_2;
    },
    get_$96_0: function SP_UI_Timeline_Utilities_ItemFormatSet$get_$96_0($p0) {
        return this.$s_0[$p0];
    },
    set_$96_0: function SP_UI_Timeline_Utilities_ItemFormatSet$set_$96_0($p0, $p1) {
        this.$s_0[$p0] = $p1;
        return $p1;
    },
    $81_0: function SP_UI_Timeline_Utilities_ItemFormatSet$$81_0($p0, $p1) {
        var $v_0 = this.$5p_0($p0, $p1);
        var $v_1 = this.get_$96_0($v_0);

        if ($v_0 === SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType($p1) || $v_1.$6A_0()) {
            var $v_2 = $v_1.$6y_0();
            var $v_3 = this.$s_0.length;

            this.$s_0[$v_3] = $v_2;
            return $v_3;
        }
        else {
            return $v_0;
        }
    },
    $5p_0: function SP_UI_Timeline_Utilities_ItemFormatSet$$5p_0($p0, $p1) {
        if ($p0 < 0 || $p0 >= this.$s_0.length) {
            return SP.UI.Timeline.Utilities.ItemFormatSet.sharedDefaultFormatNumberFromItemType($p1);
        }
        return $p0;
    },
    getFormat: function SP_UI_Timeline_Utilities_ItemFormatSet$getFormat(formatNumber, itemType) {
        return this.get_$96_0(this.$5p_0(formatNumber, itemType));
    }
};
SP.UI.Timeline.Utilities.TextStyle = function SP_UI_Timeline_Utilities_TextStyle() {
};
SP.UI.Timeline.Utilities.TextStyle.createStyle = function SP_UI_Timeline_Utilities_TextStyle$createStyle(styleNode) {
    var $v_0 = new SP.UI.Timeline.Utilities.TextStyle();

    $v_0.$V_0 = styleNode.getAttribute('clr');
    $v_0.$P_0 = styleNode.getAttribute('thm');
    $v_0.$1h_0 = styleNode.getAttribute('sz');
    $v_0.$1T_0 = styleNode.getAttribute('font');
    $v_0.$1V_0 = styleNode.getAttribute('ital');
    $v_0.$1U_0 = styleNode.getAttribute('bold');
    $v_0.$1X_0 = styleNode.getAttribute('und');
    $v_0.$1W_0 = styleNode.getAttribute('strk');
    $v_0.$N_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(styleNode, 'type', 0);
    if ($v_0.$N_0 > SP.UI.Timeline.Utilities.TextStyleSet.maxDefaultStyleId) {
        $v_0.$N_0 = 0;
    }
    return $v_0;
};
SP.UI.Timeline.Utilities.TextStyle.$6A = function SP_UI_Timeline_Utilities_TextStyle$$6A($p0) {
    return $p0 < 11;
};
SP.UI.Timeline.Utilities.TextStyle.prototype = {
    $V_0: null,
    $P_0: null,
    $1h_0: null,
    $1T_0: null,
    $1V_0: null,
    $1U_0: null,
    $1X_0: null,
    $1W_0: null,
    $N_0: 0,
    $8e_0: function SP_UI_Timeline_Utilities_TextStyle$$8e_0($p0) {
        var $v_0 = '<{0} {1}=\"{2}\" {3}=\"{4}\" ';

        if (this.$V_0) {
            $v_0 += '{5}=\"{6}\" ';
        }
        if (this.$P_0) {
            $v_0 += '{7}=\"{8}\" ';
        }
        if (this.$1h_0) {
            $v_0 += '{9}=\"{10}\" ';
        }
        if (this.$1T_0) {
            $v_0 += '{11}=\"{12}\" ';
        }
        if (this.$1U_0) {
            $v_0 += '{13}=\"{14}\" ';
        }
        if (this.$1V_0) {
            $v_0 += '{15}=\"{16}\" ';
        }
        if (this.$1X_0) {
            $v_0 += '{17}=\"{18}\" ';
        }
        if (this.$1W_0) {
            $v_0 += '{19}=\"{20}\" ';
        }
        $v_0 += '/>';
        var $v_1 = String.format($v_0, 'style', 'id', $p0, 'type', this.$N_0, 'clr', this.$V_0, 'thm', this.$P_0, 'sz', this.$1h_0, 'font', SP.UI.Timeline.TimelineControl.getEscapedStringForXml(this.$1T_0), 'bold', this.$1U_0, 'ital', this.$1V_0, 'und', this.$1X_0, 'strk', this.$1W_0);

        return $v_1;
    },
    setStyleCss: function SP_UI_Timeline_Utilities_TextStyle$setStyleCss(tss, iType, toModify) {
        var $v_0 = this.getColor(tss, iType);
        var $v_1 = this.getFontName(tss);
        var $v_2 = SP.UI.Timeline.Measurer.getPointString(this.getFontSize(tss));
        var $v_3 = this.isBold(tss) ? 'bold' : null;
        var $v_4 = this.isStrikeThrough(tss) ? 'line-through' : '';

        if (this.isUnderline(tss)) {
            $v_4 += ' underline';
        }
        var $v_5 = this.isItalics(tss) ? 'italic' : null;

        if ($v_0 && $v_0.length > 0) {
            toModify.color = $v_0;
        }
        if ($v_1 && $v_1.length > 0) {
            toModify.fontFamily = $v_1;
        }
        if ($v_2 && $v_2.length > 0) {
            toModify.fontSize = $v_2;
        }
        if ($v_5 && $v_5.length > 0) {
            toModify.fontStyle = $v_5;
        }
        if ($v_3 && $v_3.length > 0) {
            toModify.fontWeight = $v_3;
        }
        if ($v_4 && $v_4.length > 0) {
            toModify.textDecoration = $v_4;
        }
    },
    $7Q_0: function SP_UI_Timeline_Utilities_TextStyle$$7Q_0($p0) {
        var $v_0 = this.getColor($p0, 4);
        var $v_1 = this.getFontName($p0);
        var $v_2 = SP.UI.Timeline.Measurer.getPointString(this.getFontSize($p0));
        var $v_3 = this.isBold($p0) ? 'bold' : null;
        var $v_4 = new SP.JsGrid.TimescaleTierStyle();

        if ($v_0 && $v_0.length > 0) {
            $v_4.textColor = $v_0;
            $v_4.horizontalBorderColor = $v_0;
            $v_4.verticalBorderColor = $v_0;
        }
        if ($v_1 && $v_1.length > 0) {
            $v_4.font = $v_1;
        }
        if ($v_2 && $v_2.length > 0) {
            $v_4.fontSize = $v_2;
        }
        if ($v_3 && $v_3.length > 0) {
            $v_4.fontWeight = $v_3;
        }
        $v_4.horizontalBorderStyle = 'hidden';
        $v_4.verticalBorderStyle = 'solid';
        return $v_4;
    },
    getColor: function SP_UI_Timeline_Utilities_TextStyle$getColor(tss, iType) {
        var $v_0 = SP.UI.Timeline.Colors.$4I(this.$P_0, iType, true);

        if ($v_0) {
            return $v_0;
        }
        if (this.$V_0) {
            return SP.UI.Timeline.Colors.argBtoRGB(this.$V_0);
        }
        if (!tss || !tss.get_item(this.$N_0)) {
            return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5U;
        }
        else {
            return (tss.get_item(this.$N_0)).getColor(null, iType);
        }
    },
    setColor: function SP_UI_Timeline_Utilities_TextStyle$setColor(color) {
        this.$V_0 = color;
    },
    getTheme: function SP_UI_Timeline_Utilities_TextStyle$getTheme(tss) {
        if (!this.$P_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return '0001';
            }
            else {
                return (tss.get_item(this.$N_0)).getTheme(null);
            }
        }
        return this.$P_0;
    },
    setTheme: function SP_UI_Timeline_Utilities_TextStyle$setTheme(theme) {
        this.$P_0 = theme;
    },
    getFontSize: function SP_UI_Timeline_Utilities_TextStyle$getFontSize(tss) {
        if (!this.$1h_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5b;
            }
            else {
                return (tss.get_item(this.$N_0)).getFontSize(null);
            }
        }
        else {
            return Number.parseInvariant(this.$1h_0);
        }
    },
    setFontSize: function SP_UI_Timeline_Utilities_TextStyle$setFontSize(fontSize) {
        var $v_0 = Number.parseInvariant(fontSize);

        if ($v_0 > 0 && $v_0 < 145) {
            this.$1h_0 = fontSize;
        }
    },
    getFontName: function SP_UI_Timeline_Utilities_TextStyle$getFontName(tss) {
        if (!this.$1T_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return 'Segoe UI';
            }
            else {
                return (tss.get_item(this.$N_0)).getFontName(null);
            }
        }
        else {
            return this.$1T_0;
        }
    },
    setFontName: function SP_UI_Timeline_Utilities_TextStyle$setFontName(fontName) {
        if (fontName.length > 0) {
            this.$1T_0 = fontName;
        }
    },
    isItalics: function SP_UI_Timeline_Utilities_TextStyle$isItalics(tss) {
        if (!this.$1V_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5a;
            }
            else {
                return (tss.get_item(this.$N_0)).isItalics(null);
            }
        }
        else {
            return this.$1V_0 === '1';
        }
    },
    setItalics: function SP_UI_Timeline_Utilities_TextStyle$setItalics(isItalics) {
        this.$1V_0 = isItalics ? '1' : '0';
    },
    isBold: function SP_UI_Timeline_Utilities_TextStyle$isBold(tss) {
        if (!this.$1U_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5Z;
            }
            else {
                return (tss.get_item(this.$N_0)).isBold(null);
            }
        }
        else {
            return this.$1U_0 === '1';
        }
    },
    setBold: function SP_UI_Timeline_Utilities_TextStyle$setBold(isBold) {
        this.$1U_0 = isBold ? '1' : '0';
    },
    isUnderline: function SP_UI_Timeline_Utilities_TextStyle$isUnderline(tss) {
        if (!this.$1X_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5d;
            }
            else {
                return (tss.get_item(this.$N_0)).isUnderline(null);
            }
        }
        else {
            return this.$1X_0 === '1';
        }
    },
    setUnderline: function SP_UI_Timeline_Utilities_TextStyle$setUnderline(isUnderline) {
        this.$1X_0 = isUnderline ? '1' : '0';
    },
    isStrikeThrough: function SP_UI_Timeline_Utilities_TextStyle$isStrikeThrough(tss) {
        if (!this.$1W_0) {
            if (!tss || !tss.get_item(this.$N_0)) {
                return SP.UI.Timeline.Utilities.TimelineViewDefaults.$5c;
            }
            else {
                return (tss.get_item(this.$N_0)).isStrikeThrough(null);
            }
        }
        else {
            return this.$1W_0 === '1';
        }
    },
    setStrikeThrough: function SP_UI_Timeline_Utilities_TextStyle$setStrikeThrough(isStrikeThrough) {
        this.$1W_0 = isStrikeThrough ? '1' : '0';
    },
    $6y_0: function SP_UI_Timeline_Utilities_TextStyle$$6y_0() {
        var $v_0 = new SP.UI.Timeline.Utilities.TextStyle();

        $v_0.$V_0 = this.$V_0;
        $v_0.$1T_0 = this.$1T_0;
        $v_0.$1U_0 = this.$1U_0;
        $v_0.$1V_0 = this.$1V_0;
        $v_0.$1W_0 = this.$1W_0;
        $v_0.$1X_0 = this.$1X_0;
        $v_0.$1h_0 = this.$1h_0;
        $v_0.$P_0 = this.$P_0;
        return $v_0;
    }
};
SP.UI.Timeline.Utilities.TextStyleSet = function SP_UI_Timeline_Utilities_TextStyleSet() {
};
SP.UI.Timeline.Utilities.TextStyleSet.createStyles = function SP_UI_Timeline_Utilities_TextStyleSet$createStyles(txtSet) {
    var $v_0 = new SP.UI.Timeline.Utilities.TextStyleSet();

    $v_0.$15_0 = [];
    var $v_1 = txtSet.getElementsByTagName('style');

    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = SP.UI.Timeline.TimelineControl.getNumberFromXml($v_1[$v_2], 'id', -1);

        if ($v_3 < 0) {
            continue;
        }
        else {
            var $v_4 = SP.UI.Timeline.Utilities.TextStyle.createStyle($v_1[$v_2]);

            $v_0.$15_0[$v_3] = $v_4;
        }
    }
    return $v_0;
};
SP.UI.Timeline.Utilities.TextStyleSet.$4C = function SP_UI_Timeline_Utilities_TextStyleSet$$4C($p0) {
    switch ($p0) {
    case 0:
        return 0;
    case 2:
        return 4;
    case 1:
        return 2;
    case 3:
    default:
        return 6;
    }
};
SP.UI.Timeline.Utilities.TextStyleSet.$5T = function SP_UI_Timeline_Utilities_TextStyleSet$$5T($p0) {
    switch ($p0) {
    case 0:
        return 1;
    case 2:
        return 5;
    case 1:
        return 3;
    case 3:
    default:
        return 7;
    }
};
SP.UI.Timeline.Utilities.TextStyleSet.prototype = {
    $15_0: null,
    serialize: function SP_UI_Timeline_Utilities_TextStyleSet$serialize() {
        var $v_0 = [];

        for (var $v_3 = 0; $v_3 < this.$15_0.length; $v_3++) {
            Array.add($v_0, (this.get_item($v_3)).$8e_0($v_3));
        }
        var $v_1 = $v_0.join('');
        var $v_2 = String.format('<{0}>{1}</{0}>', 'txtSet', $v_1);

        return $v_2;
    },
    get_item: function SP_UI_Timeline_Utilities_TextStyleSet$get_item(index) {
        return this.$15_0[index];
    },
    set_item: function SP_UI_Timeline_Utilities_TextStyleSet$set_item(index, value) {
        this.$15_0[index] = value;
        return value;
    },
    defaultLabelStyleFromItemType: function SP_UI_Timeline_Utilities_TextStyleSet$defaultLabelStyleFromItemType(iType) {
        return this.get_item(SP.UI.Timeline.Utilities.TextStyleSet.$4C(iType));
    },
    defaultDateStyleFromItemType: function SP_UI_Timeline_Utilities_TextStyleSet$defaultDateStyleFromItemType(iType) {
        return this.get_item(SP.UI.Timeline.Utilities.TextStyleSet.$5T(iType));
    },
    $7x_0: function SP_UI_Timeline_Utilities_TextStyleSet$$7x_0($p0, $p1) {
        if ($p0 > 0 && $p0 < this.$15_0.length) {
            return $p0;
        }
        return SP.UI.Timeline.Utilities.TextStyleSet.$4C($p1);
    },
    getLabelTextStyle: function SP_UI_Timeline_Utilities_TextStyleSet$getLabelTextStyle(textStyle, itemType) {
        return this.get_item(this.$7x_0(textStyle, itemType));
    },
    $4M_0: function SP_UI_Timeline_Utilities_TextStyleSet$$4M_0($p0) {
        if (SP.UI.Timeline.Utilities.TextStyle.$6A($p0)) {
            var $v_0 = this.get_item($p0);
            var $v_1 = $v_0.$6y_0();
            var $v_2 = this.$15_0.length;

            this.$15_0[$v_2] = $v_1;
            return $v_2;
        }
        return $p0;
    }
};
SP.UI.Timeline.Utilities.TimelineConstants = function SP_UI_Timeline_Utilities_TimelineConstants() {
};
SP.UI.Timeline.Utilities.TimelineOptions = function SP_UI_Timeline_Utilities_TimelineOptions() {
};
SP.UI.Timeline.Utilities.TimelineOptions.createTimelineOptions = function SP_UI_Timeline_Utilities_TimelineOptions$createTimelineOptions(options) {
    if (!options) {
        return null;
    }
    var $v_0 = new SP.UI.Timeline.Utilities.TimelineOptions();

    $v_0.$l_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'dateFormat', 0);
    $v_0.$2i_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'timelineHeight', -1);
    $v_0.$u_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'timelineWidth', -1);
    $v_0.$57_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'panZoomT', 9);
    $v_0.$1I_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'ProjSummFmt', 3);
    $v_0.$14_0 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(options, 'showDates', true);
    $v_0.$1e_0 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(options, 'showProjSummDates', false);
    $v_0.$1g_0 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(options, 'showToday', true);
    $v_0.$1f_0 = SP.UI.Timeline.TimelineControl.getBooleanFromXml(options, 'showTS', true);
    $v_0.$1y_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'timescaleT', 8);
    $v_0.$1z_0 = SP.UI.Timeline.TimelineControl.getNumberFromXml(options, 'todayT', 10);
    return $v_0;
};
SP.UI.Timeline.Utilities.TimelineOptions.$3c = function SP_UI_Timeline_Utilities_TimelineOptions$$3c($p0) {
    return !$p0;
};
SP.UI.Timeline.Utilities.TimelineOptions.prototype = {
    $l_0: 0,
    $57_0: 0,
    $1I_0: 0,
    $14_0: false,
    $1e_0: false,
    $1f_0: false,
    $1g_0: false,
    $2i_0: 0,
    $u_0: 0,
    $1y_0: 0,
    $1z_0: 0,
    serialize: function SP_UI_Timeline_Utilities_TimelineOptions$serialize() {
        var $v_0 = String.format('<{0} {1}=\"{2}\" {3}=\"{4}\" {5}=\"{6}\" {7}=\"{8}\" {9}=\"{10}\" {11}=\"{12}\" {13}=\"{14}\" {15}=\"{16}\" {17}=\"{18}\" {19}=\"{20}\" {21}=\"{22}\" />', 'options', 'dateFormat', this.$l_0, 'panZoomT', this.$57_0, 'ProjSummFmt', this.$1I_0, 'showDates', this.$14_0 ? '1' : '0', 'showProjSummDates', this.$1e_0 ? '1' : '0', 'showToday', this.$1g_0 ? '1' : '0', 'showTS', this.$1f_0 ? '1' : '0', 'timelineHeight', this.$2i_0, 'timelineWidth', this.$u_0, 'timescaleT', this.$1y_0, 'todayT', this.$1z_0);

        return $v_0;
    },
    get_dateFormat: function SP_UI_Timeline_Utilities_TimelineOptions$get_dateFormat() {
        return this.$l_0;
    },
    set_dateFormat: function SP_UI_Timeline_Utilities_TimelineOptions$set_dateFormat(value) {
        this.$l_0 = value;
        return value;
    },
    get_dateFormatString: function SP_UI_Timeline_Utilities_TimelineOptions$get_dateFormatString() {
        switch (this.$l_0) {
        case 0:
            return 'g';
        case 1:
            return 'd';
        case 2:
            return 'g';
        case 3:
            return 'd';
        case 4:
            return 'g';
        case 5:
            return 'd';
        case 6:
            return 'm';
        case 7:
            return 'm';
        case 8:
            return 'f';
        case 9:
            return 'D';
        case 10:
            return 'D';
        case 11:
            return 'f';
        case 12:
            return 'tmp';
        case 13:
            return 'dd';
        case 14:
            return 't';
        case 15:
            return 'D';
        case 16:
            return 'D';
        case 17:
            return 'D';
        case 18:
            return 'd';
        case 19:
            return 'g';
        case 254:
        case 255:
            return 'tmp';
        }
        return 'tmp';
    },
    $8w_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8w_0($p0) {
        if (!$p0 || !$p0.length) {
            return;
        }
        switch ($p0) {
        case 'g':
            this.$l_0 = 0;
            break;
        case 'd':
            this.$l_0 = 3;
            break;
        case 'm':
            this.$l_0 = 6;
            break;
        case 'D':
            this.$l_0 = 10;
            break;
        case 'f':
            this.$l_0 = 11;
            break;
        case 'tmp':
            this.$l_0 = 12;
            break;
        case 'dd':
            this.$l_0 = 13;
            break;
        case 't':
            this.$l_0 = 14;
            break;
        default:
            break;
        }
    },
    get_dateFormatNoTimeString: function SP_UI_Timeline_Utilities_TimelineOptions$get_dateFormatNoTimeString() {
        var $v_0 = this.get_dateFormatString();

        switch ($v_0) {
        case 'g':
            return 'd';
        case 'f':
            return 'D';
        case 't':
            return 'dd';
        default:
            return $v_0;
        }
    },
    get_timelineHeight: function SP_UI_Timeline_Utilities_TimelineOptions$get_timelineHeight() {
        return this.$2i_0;
    },
    set_timelineHeight: function SP_UI_Timeline_Utilities_TimelineOptions$set_timelineHeight(value) {
        this.$2i_0 = value;
        return value;
    },
    get_timelineWidth: function SP_UI_Timeline_Utilities_TimelineOptions$get_timelineWidth() {
        return this.$u_0;
    },
    set_timelineWidth: function SP_UI_Timeline_Utilities_TimelineOptions$set_timelineWidth(value) {
        this.$u_0 = value;
        return value;
    },
    get_timescaleTextFormat: function SP_UI_Timeline_Utilities_TimelineOptions$get_timescaleTextFormat() {
        return this.$1y_0;
    },
    set_timescaleTextFormat: function SP_UI_Timeline_Utilities_TimelineOptions$set_timescaleTextFormat(value) {
        this.$1y_0 = value;
        return value;
    },
    get_todayTextFormat: function SP_UI_Timeline_Utilities_TimelineOptions$get_todayTextFormat() {
        return this.$1z_0;
    },
    set_todayTextFormat: function SP_UI_Timeline_Utilities_TimelineOptions$set_todayTextFormat(value) {
        this.$1z_0 = value;
        return value;
    },
    get_showTS: function SP_UI_Timeline_Utilities_TimelineOptions$get_showTS() {
        return this.$1f_0;
    },
    set_showTS: function SP_UI_Timeline_Utilities_TimelineOptions$set_showTS(value) {
        this.$1f_0 = value;
        return value;
    },
    get_showToday: function SP_UI_Timeline_Utilities_TimelineOptions$get_showToday() {
        return this.$1g_0;
    },
    set_showToday: function SP_UI_Timeline_Utilities_TimelineOptions$set_showToday(value) {
        this.$1g_0 = value;
        return value;
    },
    get_projectSummaryFormat: function SP_UI_Timeline_Utilities_TimelineOptions$get_projectSummaryFormat() {
        return this.$1I_0;
    },
    set_projectSummaryFormat: function SP_UI_Timeline_Utilities_TimelineOptions$set_projectSummaryFormat(value) {
        this.$1I_0 = value;
        return value;
    },
    get_showDates: function SP_UI_Timeline_Utilities_TimelineOptions$get_showDates() {
        return this.$14_0;
    },
    set_showDates: function SP_UI_Timeline_Utilities_TimelineOptions$set_showDates(value) {
        this.$14_0 = value;
        return value;
    },
    get_showProjSummDates: function SP_UI_Timeline_Utilities_TimelineOptions$get_showProjSummDates() {
        return this.$1e_0;
    },
    set_showProjSummDates: function SP_UI_Timeline_Utilities_TimelineOptions$set_showProjSummDates(value) {
        this.$1e_0 = value;
        return value;
    },
    $8r_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8r_0() {
        this.$1g_0 = SP.UI.Timeline.Utilities.TimelineOptions.$3c(this.$1g_0);
    },
    $8p_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8p_0() {
        this.$14_0 = SP.UI.Timeline.Utilities.TimelineOptions.$3c(this.$14_0);
    },
    $8q_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8q_0() {
        this.$1e_0 = SP.UI.Timeline.Utilities.TimelineOptions.$3c(this.$1e_0);
    },
    $8s_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8s_0() {
        this.$1f_0 = SP.UI.Timeline.Utilities.TimelineOptions.$3c(this.$1f_0);
    },
    $8t_0: function SP_UI_Timeline_Utilities_TimelineOptions$$8t_0($p0) {
        this.$u_0 = this.$u_0 > 0 ? -1 : $p0;
    }
};
SP.UI.Timeline.Utilities.TimelineViewData = function SP_UI_Timeline_Utilities_TimelineViewData() {
};
SP.UI.Timeline.Utilities.TimelineViewData.create = function SP_UI_Timeline_Utilities_TimelineViewData$create() {
    return new SP.UI.Timeline.Utilities.TimelineViewData();
};
SP.UI.Timeline.Utilities.TimelineViewData.$7T = function SP_UI_Timeline_Utilities_TimelineViewData$$7T($p0) {
    return $p0.replace(new RegExp(SP.UI.Timeline.Utilities.TimelineViewData.$70, 'g'), SP.UI.Timeline.Utilities.TimelineViewData.$71);
};
SP.UI.Timeline.Utilities.TimelineViewData.$4W = function SP_UI_Timeline_Utilities_TimelineViewData$$4W($p0, $p1) {
    var $v_0 = SP.UI.Timeline.ElementSet.getByUid($p0, $p1);

    return !!$v_0 && $v_0.$8_1;
};
SP.UI.Timeline.Utilities.TimelineViewData.$4X = function SP_UI_Timeline_Utilities_TimelineViewData$$4X($p0, $p1) {
    var $v_0 = SP.UI.Timeline.ElementSet.getByUid($p0, $p1);

    return !!$v_0 && $v_0.get_shouldShow();
};
SP.UI.Timeline.Utilities.TimelineViewData.$4Q = function SP_UI_Timeline_Utilities_TimelineViewData$$4Q($p0, $p1) {
    var $v_0 = SP.UI.Timeline.ElementSet.getByUid($p0, $p1);

    if ($v_0) {
        $v_0.hideAll();
    }
};
SP.UI.Timeline.Utilities.TimelineViewData.$7L = function SP_UI_Timeline_Utilities_TimelineViewData$$7L($p0, $p1) {
    var $v_0 = new SP.UI.Timeline.ElementSet();

    SP.UI.Timeline.Utilities.TimelineViewData.$4J($p0, 0, $v_0, $p1);
    SP.UI.Timeline.Utilities.TimelineViewData.$4J($p0, 1, $v_0, $p1);
    SP.UI.Timeline.Utilities.TimelineViewData.$4J($p0, 2, $v_0, $p1);
    return $v_0;
};
SP.UI.Timeline.Utilities.TimelineViewData.$4J = function SP_UI_Timeline_Utilities_TimelineViewData$$4J($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.getElementsByTagName(SP.UI.Timeline.ItemTypeStatic.tagNameFromItemType($p1));

    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        var $v_3 = $v_2.getAttribute('id');
        var $v_4 = $v_2.getAttribute('uid');

        if ((!$v_3 || !$v_3.length) && (!$v_4 || !$v_4.length)) {
            continue;
        }
        if ($v_3 && $v_3 === '{00000000-0000-0000-0000-000000000000}') {
            var $v_5 = SP.UI.Timeline.TimelineControl.getNumberFromXml($v_2, 'fmt', $p1);

            switch ($p1) {
            case 0:
                $p3.set_barDefault($p3.getFormat($v_5, 0));
                break;
            case 1:
                $p3.set_calloutDefault($p3.getFormat($v_5, 1));
                break;
            case 2:
                $p3.set_milestoneDefault($p3.getFormat($v_5, 2));
                break;
            }
        }
        switch ($p1) {
        case 0:
            ($p2.get_bars()).add(SP.UI.Timeline.BarElement.create($v_2));
            break;
        case 1:
            ($p2.get_callouts()).add(SP.UI.Timeline.CalloutElement.create($v_2));
            break;
        case 2:
            ($p2.get_milestones()).add(SP.UI.Timeline.MilestoneElement.create($v_2));
            break;
        }
    }
};
SP.UI.Timeline.Utilities.TimelineViewData.prototype = {
    $45_0: null,
    $s_0: null,
    $3l_0: null,
    $15_0: null,
    $7_0: null,
    $c_0: false,
    $1E_0: null,
    $54_0: false,
    setFromString: function SP_UI_Timeline_Utilities_TimelineViewData$setFromString(formattingXml) {
        formattingXml = SP.UI.Timeline.Utilities.TimelineViewData.$7T(formattingXml);
        var $v_0 = XUI.Xml.DOMParser.parseFromString(formattingXml, 'text/xml');

        if (!$v_0 || !$v_0.firstChild) {
            return false;
        }
        this.parseFormattingXml($v_0);
        return !this.$c_0;
    },
    setFromDefault: function SP_UI_Timeline_Utilities_TimelineViewData$setFromDefault() {
        return this.setFromString('\r\n<TLViewData>\r\n  <fltSet>\r\n    <ft id=\"{00000000-0000-0000-0000-000000000000}\" uid=\"4294967295\" uidSrc=\"1\" onTL=\"0\" fmt=\"1\" \r\n        x=\"0\" \r\n        y=\"4294967282\" \r\n        h=\"20\" \r\n        top=\"1\" /> \r\n  </fltSet>\r\n  <fmtSet>\r\n    <fmt id=\"0\" type=\"0\" clr=\"FFEE2222\" thm=\"0001\" t1=\"0\" t2=\"1\" /> \r\n    <fmt id=\"1\" type=\"1\" clr=\"FFEE2222\" thm=\"0001\" t1=\"2\" t2=\"3\" /> \r\n    <fmt id=\"2\" type=\"2\" clr=\"FFEE2222\" thm=\"0001\" t1=\"4\" t2=\"5\" /> \r\n    <fmt id=\"3\" type=\"3\" clr=\"FFEE2222\" thm=\"0001\" t1=\"6\" t2=\"7\" />\r\n  </fmtSet>\r\n  <mlSet>\r\n    <m id=\"{00000000-0000-0000-0000-000000000000}\" uid=\"4294967295\" \r\n        uidSrc=\"1\" onTL=\"0\" fmt=\"2\"\r\n        x=\"0\" \r\n        y=\"35\" \r\n        top=\"0\" /> \r\n  </mlSet>\r\n  <options dateFormat=\"255\" \r\n           minMode=\"0\" \r\n           numTextLines=\"1\" \r\n           panZoomT=\"9\" \r\n           ProjSummFmt=\"3\" \r\n           round=\"1\"\r\n           showDates=\"1\" \r\n           showOverlaps=\"1\" \r\n           showPanZoom=\"\"\r\n           showProjSummDates=\"0\" \r\n           showToday=\"1\"\r\n           showTS=\"1\" \r\n           timelineWidth=\"-1\"\r\n           timescaleT=\"8\" \r\n           todayT=\"10\" \r\n           zoom2Screen=\"1\"/> \r\n  <tskSet>\r\n    <t id=\"{00000000-0000-0000-0000-000000000000}\" uid=\"4294967295\" \r\n    uidSrc=\"1\" onTL=\"0\" fmt=\"0\" ch=\"4294967295\" /> \r\n  </tskSet>\r\n  <txtSet>\r\n    <style id=\"0\" shared=\"0\" type=\"0\" \r\n        clr=\"FFEE2222\"\r\n        thm=\"0001\" \r\n        sz=\"8\" \r\n        font=\"Segoe UI\" \r\n        bold=\"0\" \r\n        ital=\"0\" \r\n        und=\"0\" \r\n        strk=\"0\" /> \r\n    <style id=\"1\" shared=\"0\" type=\"1\" \r\n        clr=\"FFEE2222\"\r\n        thm=\"0001\" \r\n        sz=\"8\" \r\n        font=\"Segoe UI\" \r\n        bold=\"0\" \r\n        ital=\"0\" \r\n        und=\"0\" \r\n        strk=\"0\" /> \r\n    <style id=\"2\" shared=\"0\" type=\"2\" clr=\"FF999999\" thm=\"0001\" sz=\"8\" font=\"Segoe UI\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" /> \r\n    <style id=\"3\" shared=\"0\" type=\"3\" clr=\"FFB3B3B3\" thm=\"0001\" sz=\"8\" font=\"Segoe UI Light\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n    <style id=\"4\" shared=\"0\" type=\"4\" clr=\"FF525051\" thm=\"0001\" sz=\"10\" font=\"Segoe UI\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" /> \r\n    <style id=\"5\" shared=\"0\" type=\"5\" clr=\"FFB3B3B3\" thm=\"0001\" sz=\"8\" font=\"Segoe UI Light\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n    <style id=\"6\" shared=\"0\" type=\"6\" clr=\"FF999999\" thm=\"0001\" sz=\"9\" font=\"Segoe UI\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" /> \r\n    <style id=\"7\" shared=\"0\" type=\"7\" clr=\"FF999999\" thm=\"0001\" sz=\"8\" font=\"Segoe UI\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n    <style id=\"8\" shared=\"0\" type=\"8\" clr=\"FF999999\" thm=\"0001\" sz=\"8\" font=\"Segoe UI\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n    <style id=\"9\" shared=\"0\" type=\"9\" clr=\"FFFFA614\" thm=\"0001\" sz=\"8\" font=\"Segoe UI Semibold\" bold=\"1\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n    <style id=\"10\" shared=\"0\" type=\"10\" clr=\"FFFFA72B\" thm=\"0001\" sz=\"10\" font=\"Segoe UI Semibold\" bold=\"0\" ital=\"0\" und=\"0\" strk=\"0\" />\r\n  </txtSet>\r\n</TLViewData>\r\n');
    },
    serialize: function SP_UI_Timeline_Utilities_TimelineViewData$serialize() {
        var $v_0 = String.format('<{0}{1}>{2}{3}{4}{5}{6}{7}</{0}>', 'TLViewData', this.$54_0 ? ' dfltTLView=\"1\"' : '', this.$s_0.serialize(), (this.$7_0.get_callouts()).serialize(), (this.$7_0.get_bars()).serialize(), this.$45_0.serialize(), (this.$7_0.get_milestones()).serialize(), this.$15_0.serialize());

        return $v_0;
    },
    get_$88_0: function SP_UI_Timeline_Utilities_TimelineViewData$get_$88_0() {
        return (this.$7_0.get_bars()).get_length() > 1 || (this.$7_0.get_callouts()).get_length() > 1 || (this.$7_0.get_milestones()).get_length() > 1;
    },
    addVisibleItem: function SP_UI_Timeline_Utilities_TimelineViewData$addVisibleItem(uid) {
        this.addVisibleItemWithFilter(uid, null);
    },
    addVisibleItemWithFilter: function SP_UI_Timeline_Utilities_TimelineViewData$addVisibleItemWithFilter(uid, filterUid) {
        this.$7g_0(uid, filterUid);
        this.$7a_0(uid, filterUid);
    },
    removeItem: function SP_UI_Timeline_Utilities_TimelineViewData$removeItem(uid) {
        SP.UI.Timeline.Utilities.TimelineViewData.$4Q(this.$7_0.get_bars(), uid);
        SP.UI.Timeline.Utilities.TimelineViewData.$4Q(this.$7_0.get_callouts(), uid);
        SP.UI.Timeline.Utilities.TimelineViewData.$4Q(this.$7_0.get_milestones(), uid);
    },
    isOnTimeline: function SP_UI_Timeline_Utilities_TimelineViewData$isOnTimeline(uid) {
        return SP.UI.Timeline.Utilities.TimelineViewData.$4W(this.$7_0.get_bars(), uid) || SP.UI.Timeline.Utilities.TimelineViewData.$4W(this.$7_0.get_callouts(), uid) || SP.UI.Timeline.Utilities.TimelineViewData.$4W(this.$7_0.get_milestones(), uid);
    },
    isVisibleOnTimeline: function SP_UI_Timeline_Utilities_TimelineViewData$isVisibleOnTimeline(uid) {
        return SP.UI.Timeline.Utilities.TimelineViewData.$4X(this.$7_0.get_bars(), uid) || SP.UI.Timeline.Utilities.TimelineViewData.$4X(this.$7_0.get_callouts(), uid) || SP.UI.Timeline.Utilities.TimelineViewData.$4X(this.$7_0.get_milestones(), uid);
    },
    getDateRangeOfVisibleItems: function SP_UI_Timeline_Utilities_TimelineViewData$getDateRangeOfVisibleItems(minDate, maxDate) {
        this.$7_0.getDateRangeOfVisibleElements(minDate, maxDate);
    },
    $7a_0: function SP_UI_Timeline_Utilities_TimelineViewData$$7a_0($p0, $p1) {
        var $v_0 = SP.UI.Timeline.ElementSet.getByUid(this.$7_0.get_bars(), $p0);
        var $v_1 = SP.UI.Timeline.ElementSet.getByUid(this.$7_0.get_callouts(), $p0);

        if ($v_0 && $v_0.$8_1) {
            return;
        }
        if ($v_1 && $v_1.$8_1) {
            return;
        }
        if ($v_0) {
            $v_0.showAll();
            return;
        }
        if ($v_1) {
            $v_1.showAll();
            return;
        }
        this.$6u_0((this.$7_0.get_bars()).createFromDefault($p0), $p1);
    },
    $7g_0: function SP_UI_Timeline_Utilities_TimelineViewData$$7g_0($p0, $p1) {
        var $v_0 = SP.UI.Timeline.ElementSet.getByUid(this.$7_0.get_milestones(), $p0);

        if ($v_0) {
            $v_0.showAll();
            return;
        }
        $v_0 = (this.$7_0.get_milestones()).createFromDefault($p0);
        this.$6u_0($v_0, $p1);
    },
    $6u_0: function SP_UI_Timeline_Utilities_TimelineViewData$$6u_0($p0, $p1) {
        if ($p1) {
            var $v_0 = this.$3l_0[$p1];

            if ($v_0) {
                $p0.updateFormatNumber($v_0);
            }
        }
    },
    get_itemFormats: function SP_UI_Timeline_Utilities_TimelineViewData$get_itemFormats() {
        return this.$s_0;
    },
    get_elements: function SP_UI_Timeline_Utilities_TimelineViewData$get_elements() {
        return this.$7_0;
    },
    set_elements: function SP_UI_Timeline_Utilities_TimelineViewData$set_elements(value) {
        this.$7_0 = value;
        return value;
    },
    parseFormattingXml: function SP_UI_Timeline_Utilities_TimelineViewData$parseFormattingXml(TLViewDataResults) {
        if (!this.parseTopNode(TLViewDataResults)) {
            return;
        }
        if (!this.parseTextStyles(TLViewDataResults)) {
            return;
        }
        if (!this.parseFormatSet(TLViewDataResults)) {
            return;
        }
        if (!this.parseOptions(TLViewDataResults)) {
            return;
        }
        this.$7_0 = SP.UI.Timeline.Utilities.TimelineViewData.$7L(TLViewDataResults, this.$s_0);
    },
    parseTopNode: function SP_UI_Timeline_Utilities_TimelineViewData$parseTopNode(TLViewDataResults) {
        var $v_0 = (TLViewDataResults.getElementsByTagName('TLViewData'))[0];

        if ($v_0) {
            var $v_1 = $v_0.getAttribute('dfltTLView');

            this.$54_0 = !$v_1 || !$v_1.length ? false : true;
        }
        else {
            this.$1O_0(1);
            return false;
        }
        return true;
    },
    parseTextStyles: function SP_UI_Timeline_Utilities_TimelineViewData$parseTextStyles(TLViewDataResults) {
        var $v_0 = (TLViewDataResults.getElementsByTagName('txtSet'))[0];

        if ($v_0) {
            this.$15_0 = SP.UI.Timeline.Utilities.TextStyleSet.createStyles($v_0);
        }
        else {
            this.$1O_0(1);
            return false;
        }
        return true;
    },
    parseFormatSet: function SP_UI_Timeline_Utilities_TimelineViewData$parseFormatSet(TLViewDataResults) {
        var $v_0 = (TLViewDataResults.getElementsByTagName('fmtSet'))[0];

        if ($v_0) {
            this.$3l_0 = {};
            this.$s_0 = SP.UI.Timeline.Utilities.ItemFormatSet.createItemFormats($v_0, this.$3l_0);
        }
        else {
            this.$1O_0(1);
            return false;
        }
        return true;
    },
    parseOptions: function SP_UI_Timeline_Utilities_TimelineViewData$parseOptions(TLViewDataResults) {
        var $v_0 = (TLViewDataResults.getElementsByTagName('options'))[0];

        if ($v_0) {
            this.$45_0 = SP.UI.Timeline.Utilities.TimelineOptions.createTimelineOptions($v_0);
        }
        else {
            this.$1O_0(1);
            return false;
        }
        return true;
    },
    $1O_0: function SP_UI_Timeline_Utilities_TimelineViewData$$1O_0($p0) {
        this.$c_0 = true;
        var $$t_1 = this;

        EnsureScriptFunc('sts_strings.js', 'Strings.STS.L_TimelineErrorInvalidFormattingData', function() {
            switch ($p0) {
            case 1:
                $$t_1.$1E_0 = Strings.STS.L_TimelineErrorInvalidFormattingData;
                break;
            case 2:
                $$t_1.$1E_0 = Strings.STS.L_TimelineErrorInvalidElementData;
                break;
            }
        });
    },
    clearError: function SP_UI_Timeline_Utilities_TimelineViewData$clearError() {
        this.$c_0 = false;
        this.$1E_0 = null;
    }
};
SP.UI.Timeline.Utilities.TimelineViewData.TLViewDataError = function() {
};
SP.UI.Timeline.Utilities.TimelineViewData.TLViewDataError.prototype = {
    UseErrorStr: 0,
    InvalidFmtData: 1,
    InvalidElemData: 2
};
SP.UI.Timeline.Utilities.TimelineViewData.TLViewDataError.registerEnum('SP.UI.Timeline.Utilities.TimelineViewData.TLViewDataError', false);
SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations = function SP_UI_Timeline_Utilities_TimelineViewDefaultCalculations() {
};
SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24 = function SP_UI_Timeline_Utilities_TimelineViewDefaultCalculations$$24($p0) {
    return Number.parseInvariant($p0);
};
SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$4V = function SP_UI_Timeline_Utilities_TimelineViewDefaultCalculations$$4V($p0, $p1) {
    return SP.UI.Timeline.TimelineControl.$4V($p0, $p1);
};
SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$5I = function SP_UI_Timeline_Utilities_TimelineViewDefaultCalculations$$5I($p0) {
    return SP.UI.Timeline.Colors.argBtoRGB($p0);
};
SP.UI.Timeline.Utilities.TimelineViewDefaults = function SP_UI_Timeline_Utilities_TimelineViewDefaults() {
};
Type.registerNamespace('SP.JsGrid');
SP.JsGrid.TimescaleTierStyle = function SP_JsGrid_TimescaleTierStyle() {
    this.backgroundColor = '';
    this.font = '';
    this.fontSize = '';
    this.fontWeight = '';
    this.horizontalBorderColor = '';
    this.horizontalBorderStyle = '';
    this.imageUrl = '';
    this.textColor = '';
    this.verticalBorderColor = '';
    this.verticalBorderStyle = '';
};
SP.JsGrid.TimescaleTierStyle.prototype = {
    backgroundColor: null,
    font: null,
    fontSize: null,
    fontWeight: null,
    horizontalBorderStyle: null,
    horizontalBorderColor: null,
    imageUrl: null,
    textColor: null,
    verticalBorderStyle: null,
    verticalBorderColor: null
};
SP.JsGrid.RTLInfo = function SP_JsGrid_RTLInfo($p0) {
    this.bEnabled = $p0;
    this.left = $p0 ? 'right' : 'left';
    this.Left = $p0 ? 'Right' : 'Left';
    this.right = $p0 ? 'left' : 'right';
    this.Right = $p0 ? 'Left' : 'Right';
    this.ltr = $p0 ? 'rtl' : 'ltr';
};
SP.JsGrid.RTLInfo.prototype = {
    Left: null,
    Right: null,
    left: null,
    right: null,
    bEnabled: false,
    ltr: null
};
SP.UI.TaskListItem.registerClass('SP.UI.TaskListItem');
SP.UI.OfficeVersion.registerClass('SP.UI.OfficeVersion');
SP.Timeline.InstrumentedApi.JsApiUtils.registerClass('SP.Timeline.InstrumentedApi.JsApiUtils');
SP.UI.Timeline.TimelineElementItem.registerClass('SP.UI.Timeline.TimelineElementItem');
SP.UI.Timeline.BarElementSet.registerClass('SP.UI.Timeline.BarElementSet', null, SP.UI.Timeline.IElementCollection);
SP.UI.Timeline.PhysicalElements.registerClass('SP.UI.Timeline.PhysicalElements');
SP.UI.Timeline.BarPhysical.registerClass('SP.UI.Timeline.BarPhysical', SP.UI.Timeline.PhysicalElements);
SP.UI.Timeline.CalloutElementSet.registerClass('SP.UI.Timeline.CalloutElementSet', null, SP.UI.Timeline.IElementCollection);
SP.UI.Timeline.CalloutPhysical.registerClass('SP.UI.Timeline.CalloutPhysical', SP.UI.Timeline.PhysicalElements);
SP.UI.Timeline.MilestoneElementSet.registerClass('SP.UI.Timeline.MilestoneElementSet', null, SP.UI.Timeline.IElementCollection);
SP.UI.Timeline.MilestonePhysical.registerClass('SP.UI.Timeline.MilestonePhysical', SP.UI.Timeline.PhysicalElements);
SP.UI.Timeline.BaseSelectableElement.registerClass('SP.UI.Timeline.BaseSelectableElement', null, SP.UI.Timeline.ISelectableElement, SP.UI.Timeline.IVisibleElement, Sys.IDisposable);
SP.UI.Timeline.BaseDataboundElement.registerClass('SP.UI.Timeline.BaseDataboundElement', SP.UI.Timeline.BaseSelectableElement);
SP.UI.Timeline.BarElement.registerClass('SP.UI.Timeline.BarElement', SP.UI.Timeline.BaseDataboundElement, SP.UI.Timeline.ISelectableElement, SP.UI.Timeline.IVisibleElement);
SP.UI.Timeline.RenderDates.registerClass('SP.UI.Timeline.RenderDates');
SP.UI.Timeline.CalloutElement.registerClass('SP.UI.Timeline.CalloutElement', SP.UI.Timeline.BaseDataboundElement);
SP.UI.Timeline.TimelineDatasource.registerClass('SP.UI.Timeline.TimelineDatasource');
SP.UI.Timeline.ConnectedTimelineDataSource.registerClass('SP.UI.Timeline.ConnectedTimelineDataSource', SP.UI.Timeline.TimelineDatasource);
SP.UI.Timeline.GraphicsFactory.registerClass('SP.UI.Timeline.GraphicsFactory');
SP.UI.Timeline.HtmlGraphicsRenderer.registerClass('SP.UI.Timeline.HtmlGraphicsRenderer', null, SP.UI.Timeline.IGraphicsRenderer);
SP.UI.Timeline.AllVisibleItemsCollection.registerClass('SP.UI.Timeline.AllVisibleItemsCollection');
SP.UI.Timeline.ListTimelineDatasource.registerClass('SP.UI.Timeline.ListTimelineDatasource', SP.UI.Timeline.TimelineDatasource);
SP.UI.Timeline.ListTimelineDatasource.ListModel.registerClass('SP.UI.Timeline.ListTimelineDatasource.ListModel');
SP.UI.Timeline.MilestoneElement.registerClass('SP.UI.Timeline.MilestoneElement', SP.UI.Timeline.BaseDataboundElement);
SP.UI.Timeline.StartMarker.registerClass('SP.UI.Timeline.StartMarker', null, SP.UI.Timeline.IVisibleElement);
SP.UI.Timeline.FinishMarker.registerClass('SP.UI.Timeline.FinishMarker', null, SP.UI.Timeline.IVisibleElement);
SP.UI.Timeline.SelectionManager.registerClass('SP.UI.Timeline.SelectionManager');
SP.UI.Timeline.TaskListTimelineBridgeControl.registerClass('SP.UI.Timeline.TaskListTimelineBridgeControl', null, SP.UI.Timeline.ITimelineConnectable);
SP.UI.Timeline.TimelineControl.registerClass('SP.UI.Timeline.TimelineControl', null, SP.Timeline.InstrumentedApi.ITimelineImpl, SP.Timeline.InstrumentedApi.ITimeline, SP.Timeline.InstrumentedApi.IJsApiImpl, Sys.IDisposable);
SP.UI.Timeline.TimelineControl.RenderPipeline.registerClass('SP.UI.Timeline.TimelineControl.RenderPipeline');
SP.UI.Timeline.DataItemChangeEventArgs.registerClass('SP.UI.Timeline.DataItemChangeEventArgs', Sys.EventArgs);
SP.UI.Timeline.TimelineData.registerClass('SP.UI.Timeline.TimelineData');
SP.UI.Timeline.TimelineMainArea.registerClass('SP.UI.Timeline.TimelineMainArea', SP.UI.Timeline.BaseSelectableElement);
SP.UI.Timeline.TimelineRibbonCmds.registerClass('SP.UI.Timeline.TimelineRibbonCmds');
SP.UI.Timeline.TimelinePageComponent.registerClass('SP.UI.Timeline.TimelinePageComponent', CUI.Page.PageComponent, Sys.IDisposable);
SP.UI.Timeline.Timescale.registerClass('SP.UI.Timeline.Timescale', null, SP.UI.Timeline.IVisibleElement);
SP.UI.Timeline.TodayMarker.registerClass('SP.UI.Timeline.TodayMarker', null, SP.UI.Timeline.IVisibleElement);
SP.UI.Timeline.Colors.registerClass('SP.UI.Timeline.Colors');
SP.UI.Timeline.NamedColors.registerClass('SP.UI.Timeline.NamedColors');
SP.UI.Timeline.NamedColors.SU.registerClass('SP.UI.Timeline.NamedColors.SU');
SP.UI.Timeline.NamedColors.CssStyleInfo.registerClass('SP.UI.Timeline.NamedColors.CssStyleInfo');
SP.UI.Timeline.NamedColors.StyleRuleUtility.registerClass('SP.UI.Timeline.NamedColors.StyleRuleUtility');
SP.UI.Timeline.RGB.registerClass('SP.UI.Timeline.RGB');
SP.UI.Timeline.HSL.registerClass('SP.UI.Timeline.HSL');
SP.UI.Timeline.ItemTypeStatic.registerClass('SP.UI.Timeline.ItemTypeStatic');
SP.UI.Timeline.ItemTypeStatic.MDInfo.registerClass('SP.UI.Timeline.ItemTypeStatic.MDInfo');
SP.UI.Timeline.ElementSet.registerClass('SP.UI.Timeline.ElementSet');
SP.UI.Timeline.Measurer.registerClass('SP.UI.Timeline.Measurer');
SP.UI.Timeline.Utilities.ItemFormat.registerClass('SP.UI.Timeline.Utilities.ItemFormat');
SP.UI.Timeline.Utilities.ItemFormatSet.registerClass('SP.UI.Timeline.Utilities.ItemFormatSet');
SP.UI.Timeline.Utilities.TextStyle.registerClass('SP.UI.Timeline.Utilities.TextStyle');
SP.UI.Timeline.Utilities.TextStyleSet.registerClass('SP.UI.Timeline.Utilities.TextStyleSet');
SP.UI.Timeline.Utilities.TimelineConstants.registerClass('SP.UI.Timeline.Utilities.TimelineConstants');
SP.UI.Timeline.Utilities.TimelineOptions.registerClass('SP.UI.Timeline.Utilities.TimelineOptions');
SP.UI.Timeline.Utilities.TimelineViewData.registerClass('SP.UI.Timeline.Utilities.TimelineViewData');
SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.registerClass('SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations');
SP.UI.Timeline.Utilities.TimelineViewDefaults.registerClass('SP.UI.Timeline.Utilities.TimelineViewDefaults');
SP.JsGrid.TimescaleTierStyle.registerClass('SP.JsGrid.TimescaleTierStyle');
SP.JsGrid.RTLInfo.registerClass('SP.JsGrid.RTLInfo');
function sp_ui_timeline_initialize() {
    SP.UI.OfficeVersion.majorBuildVersion = 15;
    SP.UI.OfficeVersion.previousMajorBuildVersion = 14;
    SP.UI.OfficeVersion.majorVersion = '15';
    SP.UI.OfficeVersion.previousVersion = '14';
    SP.UI.OfficeVersion.majorVersionDotZero = '15.0';
    SP.UI.OfficeVersion.previousVersionDotZero = '14.0';
    SP.UI.OfficeVersion.assemblyVersion = '15.0.0.0';
    SP.UI.OfficeVersion.wssMajorVersion = '4';
    SP.UI.OfficeVersion.webServerExtensionsRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions';
    SP.UI.OfficeVersion.webServerExtensionsVersionRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions\\15.0';
    SP.UI.OfficeVersion.wssRegistryRoot = 'SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions\\15.0\\WSS';
    SP.UI.OfficeVersion.officeRegistryRoot = 'SOFTWARE\\Microsoft\\Office\\15.0';
    SP.UI.OfficeVersion.mossRegistryRoot = 'SOFTWARE\\Microsoft\\Office Server\\15.0';
    SP.UI.OfficeVersion.installedLanguagesPath = 'SOFTWARE\\Microsoft\\Office Server\\15.0\\InstalledLanguages';
    SP.UI.OfficeVersion.skuRegistrationPath = 'SOFTWARE\\Microsoft\\Office\\15.0\\Registration';
    SP.UI.OfficeVersion.publicKeyToken = '71e9bce111e9429c';
    SP.UI.OfficeVersion.assemblyFullyQualifiedName = ', Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c';
    SP.UI.Timeline.BarElement.unsetChannel = -1;
    SP.UI.Timeline.BaseDataboundElement.$4R = 0;
    SP.UI.Timeline.GraphicsFactory.$3v = 0;
    SP.UI.Timeline.ListTimelineDatasource.$3H = 'ID';
    SP.UI.Timeline.ListTimelineDatasource.$2N = 'GUID';
    SP.UI.Timeline.ListTimelineDatasource.$2O = 'Title';
    SP.UI.Timeline.ListTimelineDatasource.$1k = 'StartDate';
    SP.UI.Timeline.ListTimelineDatasource.$1j = 'DueDate';
    SP.UI.Timeline.ListTimelineDatasource.$4G = 'ContentTypeId';
    SP.UI.Timeline.ListTimelineDatasource.$3E = 'TimelineAllViews';
    SP.UI.Timeline.ListTimelineDatasource.$3b = 'TimelineDefaultView';
    SP.UI.Timeline.ListTimelineDatasource.$72 = 'TimelineSelectedView';
    SP.UI.Timeline.ListTimelineDatasource.$2d = null;
    SP.UI.Timeline.MilestoneElement.pixelDiamondWidth = 22;
    SP.UI.Timeline.MilestoneElement.pixelInnerDiamondWidth = 10;
    SP.UI.Timeline.TimelineControl.$B = null;
    SP.UI.Timeline.TimelineControl.$31 = [];
    SP.UI.Timeline.TimelineControl.$2 = null;
    SP.UI.Timeline.TimelineDatasource.$4o = new Date(1900, 0, 1);
    SP.UI.Timeline.TimelineRibbonCmds.cxtTL = 'cxtTL';
    SP.UI.Timeline.TimelineRibbonCmds.tlTab = 'TLTab';
    SP.UI.Timeline.TimelineRibbonCmds.tlFontGrp = 'TLFontGrp';
    SP.UI.Timeline.TimelineRibbonCmds.tlShowHideGrp = 'TLShowHideGrp';
    SP.UI.Timeline.TimelineRibbonCmds.tlActionGrp = 'TLActionGrp';
    SP.UI.Timeline.TimelineRibbonCmds.tlCurSlctnGrp = 'TLCurSlctnGrp';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontName = 'TLFontFamilyStyleValue';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontNamePopulate = 'TLGetFontFamilyMenuXml';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontNameQuery = 'TLQueryFontFamily';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontSize = 'TLFontSizeStyleValue';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontSizePopulate = 'TLGetFontSizeMenuXml';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontSizeQuery = 'TLQueryFontSize';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdBold = 'TLBold';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdBoldQuery = 'TLQueryBold';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdItalic = 'TLItalics';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdItalicQuery = 'TLQueryItalics';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdUnderline = 'TLUnderline';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdUnderlineQuery = 'TLQueryUnderline';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontColor = 'TLSelectFontColorOpen';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontColorPopulate = 'TLGetFontColorMenuXml';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdFontColorQuery = 'TLSelectFontColorOpenQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdBkgdColor = 'TLSelectBackgroundColorOpen';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdBkgdColorPopulate = 'TLGetFontBackgroundColorMenuXml';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdBkgdColorQuery = 'TLSelectBackgroundColorQuery';
    SP.UI.Timeline.TimelineRibbonCmds.fontFamilyThemeClass = 'FontFamilyThemeClass';
    SP.UI.Timeline.TimelineRibbonCmds.fontFamilyCssClass = 'FontFamilyCssClass';
    SP.UI.Timeline.TimelineRibbonCmds.fontSizeCssClass = 'FontSizeCssClass';
    SP.UI.Timeline.TimelineRibbonCmds.backgroundColorCssClass = 'BackgroundColorCssClass';
    SP.UI.Timeline.TimelineRibbonCmds.backgroundColorThemeClass = 'BackgroundColorThemeClass';
    SP.UI.Timeline.TimelineRibbonCmds.backgroundColorCustom = 'BackgroundColorCustom';
    SP.UI.Timeline.TimelineRibbonCmds.colorCssClass = 'ColorCssClass';
    SP.UI.Timeline.TimelineRibbonCmds.colorThemeClass = 'ColorThemeClass';
    SP.UI.Timeline.TimelineRibbonCmds.colorCustom = 'ColorCustom';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowDates = 'TLCmdShowDates';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowDatesQuery = 'TLCmdShowDatesQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowProjSummDates = 'TLCmdShowProjSummDates';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowProjSummDatesQuery = 'TLCmdShowProjSummDatesQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowToday = 'TLCmdShowToday';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowTodayQuery = 'TLCmdShowTodayQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowTimescale = 'TLCmdShowTimescale';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowTimescaleQuery = 'TLCmdShowTimescaleQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdDateFmt = 'TLCmdDateFmt';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdDateFmtPopulate = 'TLCmdDateFmtPopulate';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdDateFmtSelect = 'TLCmdDateFmtSelect';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdTimelineWidth = 'TLCmdTimelineWidth';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdTimelineWidthQuery = 'TLCmdTimelineWidthQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowAsBar = 'TLCmdShowAsBar';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowAsBarQuery = 'TLCmdShowAsBarQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowAsCallout = 'TLCmdShowAsCallout';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdShowAsCalloutQuery = 'TLCmdShowAsCalloutQuery';
    SP.UI.Timeline.TimelineRibbonCmds.tlCmdRmvFromTimeline = 'TLCmdRmvFromTimeline';
    SP.UI.Timeline.TimelinePageComponent.$3X = null;
    SP.UI.Timeline.TimelinePageComponent.$3W = null;
    SP.UI.Timeline.TimelinePageComponent.$3V = null;
    SP.UI.Timeline.TimelinePageComponent.$1N = null;
    SP.UI.Timeline.Timescale.timescaleHeight = 20;
    SP.UI.Timeline.Colors.$2r = null;
    SP.UI.Timeline.NamedColors.$3R = null;
    SP.UI.Timeline.NamedColors.$3Q = null;
    SP.UI.Timeline.NamedColors.$2l = null;
    SP.UI.Timeline.NamedColors.$4b = false;
    SP.UI.Timeline.NamedColors.$0 = null;
    SP.UI.Timeline.NamedColors.StyleRuleUtility.$2m = null;
    SP.UI.Timeline.NamedColors.StyleRuleUtility.$2n = null;
    SP.UI.Timeline.NamedColors.StyleRuleUtility.checkOnlyCssFromSameDomain = true;
    SP.UI.Timeline.NamedColors.StyleRuleUtility.$2o = {};
    SP.UI.Timeline.ItemTypeStatic.$6o = new Date(1900, 1, 1);
    SP.UI.Timeline.ItemTypeStatic.$6n = new Date(9999, 12, 31);
    SP.UI.Timeline.ItemTypeStatic.$X = null;
    SP.UI.Timeline.Utilities.TextStyleSet.maxDefaultStyleId = 10;
    SP.UI.Timeline.Utilities.TimelineConstants.styleBarTitle = 'ms-tl-barTitle';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlFormatNumber = 'fmt';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlIdGuid = 'id';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlIdUint = 'uid';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlIdSrcUint = 'uidSrc';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlIdSrcUintWinprojVal = '0';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlIdSrcUintWssVal = '1';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlTaskElement = 't';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlCalloutTaskElement = 'ft';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlMilestoneElement = 'm';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemStartTime = 'startTime';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemFinishTime = 'endTime';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemIsMilestone = 'isMilestone';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemTitle = 'title';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemUrl = 'url';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlItemElement = 'item';
    SP.UI.Timeline.Utilities.TimelineConstants.xmlParsingContentType = 'text/xml';
    SP.UI.Timeline.Utilities.TimelineConstants.dateUtcMinimum = '0001-01-01 00:00:01Z';
    SP.UI.Timeline.Utilities.TimelineConstants.dateUtcMaximum = '9999-12-31 23:59:59Z';
    SP.UI.Timeline.Utilities.TimelineConstants.$63 = '/_layouts/15/images/spcommon.png?rev=23';
    SP.UI.Timeline.Utilities.TimelineConstants.$6K = -10000;
    SP.UI.Timeline.Utilities.TimelineOptions.defaultDateFormatString = 'tmp';
    SP.UI.Timeline.Utilities.TimelineViewData.$71 = '=';
    SP.UI.Timeline.Utilities.TimelineViewData.$70 = '\u00e2\u00a0\u00a8';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5X = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('0');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5Y = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$4V(SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('4294967282'), -14);
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5W = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('20');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$4D = '1' === '1';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5V = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$5I('FF999999');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5U = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$5I('FF787577');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5e = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('25');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5f = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('0');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5g = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('35');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$4E = '0' === '1';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5b = SP.UI.Timeline.Utilities.TimelineViewDefaultCalculations.$24('8');
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5Z = '0' === '1';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5a = '0' === '1';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5d = '0' === '1';
    SP.UI.Timeline.Utilities.TimelineViewDefaults.$5c = '0' === '1';
}
;
sp_ui_timeline_initialize();
if (!Type.isNamespace('SP'))
    Type.registerNamespace('SP');
if (!Type.isNamespace('SP.JsGrid'))
    Type.registerNamespace('SP.JsGrid');
if (!Type.isNamespace('SP.JsGrid.Internal'))
    Type.registerNamespace('SP.JsGrid.Internal');
if (!Type.isNamespace('SP.Internal'))
    Type.registerNamespace('SP.Internal');
SP.JsGrid.TLTimeScale = function(parentNode, timescaleTierStyle, RTL) {
    var measuringElement = null;
    var actualStartDateAbsXCoord = 0;
    var scaleFactor;
    var localizer = new SP.JsGrid.Internal.DateTimeLocalizer();
    var _this = this;
    var timescaleTierStyleText, timescaleTierEntryStyleText, timescaleTickTierStyle;
    var dtu = SP.JsGrid.Internal.DateTimeUnit;
    var dtf = localizer.GetLabelFormats();
    var CONST_tier = 1;
    var cachedTierHeight;
    var tickUnits = dtu.Hour;
    var tickLabel = dtf.Hour;
    var tickUnitsCount = 1;
    var CONST_dateLeftPadding = 5;

    this.ScaledDraw = function(canvas, canvasWidth, tickColor, tsHeight, startDate, scaledPixelPerMS) {
        if (scaledPixelPerMS > 10) {
            return;
        }
        SetScaleFactor(scaledPixelPerMS);
        var CONST_MSperHour = 3600000;
        var canvasHrs = canvasWidth / scaledPixelPerMS / CONST_MSperHour;

        CalculateZoomFactorFromScale(canvasHrs);
        Draw(canvas, canvasWidth, tickColor, tsHeight, startDate);
    };
    function GetActualStartDateAbsXCoord() {
        return actualStartDateAbsXCoord;
    }
    ;
    function DateToAbsXCoord(intlDate) {
        return Math.floor((intlDate.get_ticks() - SP.JsGrid.Internal.DateManip.startOfTimeIntlDateTicks) * scaleFactor);
    }
    ;
    function GetMinTierItemDurationMs() {
        return SP.JsGrid.Internal.UnitTicks[tickUnits] * tickUnitsCount;
    }
    ;
    function GetMinHeight() {
        return ComputeTierHeight();
    }
    ;
    function Draw(canvas, canvasWidth, tickColor, tsHeight, startDate) {
        var tierHeight = ComputeTierHeight();
        var CONST_tickHeight = 10;
        var unusedTierVertSpace = Math.max(tsHeight - tierHeight, 0);
        var actualStartDate = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(startDate, _spRegionalSettings.calendarType);

        actualStartDateAbsXCoord = DateToAbsXCoord(actualStartDate);
        if (!canvas.firstChild) {
            var e = canvas.appendChild(document.createElement('div'));

            e.style.cssText = 'padding:0px; left:0px; top:0px; background-repeat:repeat-x; overflow:hidden; position:absolute; width:10000px';
            e.style.height = tsHeight - 1 + 'px';
            e.style.backgroundColor = timescaleTierStyle.backgroundColor;
            e.style.backgroundImage = timescaleTierStyle.imageUrl || '';
            e = canvas.appendChild(document.createElement('div'));
            e.style.cssText = timescaleTierStyleText;
            e.style.height = tierHeight - 1 + 'px';
            e.style.top = unusedTierVertSpace + 'px';
            if (!RTL.bEnabled) {
                e.style.left = '0px';
            }
            e = canvas.appendChild(document.createElement('div'));
            e.style.cssText = timescaleTierStyleText;
            e.style.height = CONST_tickHeight + 'px';
            e.style.top = tsHeight - CONST_tickHeight - 1 + 'px';
            if (!RTL.bEnabled) {
                e.style.left = '0px';
            }
        }
        var startDateX = actualStartDateAbsXCoord;
        var labelDiv = canvas.childNodes[CONST_tier];
        var tickDiv = canvas.childNodes[CONST_tier + 1];
        var date = SP.JsGrid.Internal.DateManip.RoundDown(actualStartDate, tickUnits, tickUnits >= dtu.Month ? 1 : tickUnitsCount);
        var left = DateToAbsXCoord(date) - startDateX;
        var cssText = timescaleTierEntryStyleText;
        var nextSpan = labelDiv.firstChild;
        var nextTickSpan = tickDiv.firstChild;

        labelDiv.style['margin' + RTL.Left] = left + 2 + 'px';
        tickDiv.style['margin' + RTL.Left] = left + 'px';
        var eText;

        while (left < canvasWidth) {
            var nextDate = SP.JsGrid.Internal.DateManip.Increment(date, tickUnits, tickUnitsCount);
            var nextLeft = DateToAbsXCoord(nextDate) - startDateX;
            var IsVisible = left >= 0;
            var label = IsVisible == true ? localizer.CreateLabel(date, tickLabel) : null;

            if (label != null && nextLeft >= canvasWidth && GetTierTextWidthInPx(label) + left >= canvasWidth) {
                break;
            }
            if (nextTickSpan) {
                e = nextTickSpan;
                nextTickSpan = e.nextSibling;
            }
            else {
                e = document.createElement('span');
                tickDiv.appendChild(e);
            }
            e.style.cssText = timescaleTickTierStyle;
            if (tickColor != null) {
                e.style.borderColor = tickColor;
            }
            e.style.width = nextLeft - left - 1 + 'px';
            if (nextSpan) {
                eText = nextSpan;
                nextSpan = eText.nextSibling;
            }
            else {
                eText = document.createElement('span');
                labelDiv.appendChild(eText);
            }
            eText.style.cssText = timescaleTierEntryStyleText;
            eText.style.width = nextLeft - left - CONST_dateLeftPadding + 'px';
            if (IsVisible == true) {
                XUI.Html.SetText(eText, label);
            }
            left = nextLeft;
            date = nextDate;
        }
    }
    ;
    function Init() {
        InitStyleRules();
        CreateMeasuringElements();
    }
    function InitStyleRules() {
        timescaleTierStyleText = "white-space:nowrap; overflow:hidden; position:absolute; width:10000px;" + ";background-color:" + timescaleTierStyle.backgroundColor + ";color:" + timescaleTierStyle.textColor + ";border-bottom:" + SP.JsGrid.Internal.MakeBorderString(1, timescaleTierStyle.horizontalBorderStyle, timescaleTierStyle.horizontalBorderColor);
        timescaleTickTierStyle = "white-space:nowrap; overflow:hidden; height:100%" + ";float:" + RTL.left + ";border-" + RTL.left + ":" + SP.JsGrid.Internal.MakeBorderString(1, timescaleTierStyle.verticalBorderStyle, timescaleTierStyle.verticalBorderColor);
        timescaleTierEntryStyleText = "white-space:nowrap; overflow:hidden; height:100%" + (timescaleTierStyle.font != null ? ";font-family:" + timescaleTierStyle.font : "") + ";font-size:" + timescaleTierStyle.fontSize + ";font-weight:" + timescaleTierStyle.fontWeight + ";float:" + RTL.left + ";text-align:" + RTL.left + ";padding-" + RTL.Left + ":5px" + ";padding-bottom:5px";
    }
    function CreateMeasuringElements() {
        measuringElement = document.createElement('span');
        var sharedCssText = ';position:absolute;top:0px;left:0px;visibility:hidden;overflow:visible';

        measuringElement.style.cssText = timescaleTierEntryStyleText + sharedCssText;
        measuringElement.style.height = '';
        parentNode.appendChild(measuringElement);
    }
    function ComputeTierHeight() {
        if (cachedTierHeight == null) {
            cachedTierHeight = GetTextHeightInPx('Apr \u88C6') + 1;
        }
        return cachedTierHeight;
    }
    function GetTierTextWidthInPx(text) {
        XUI.Html.SetText(measuringElement, text);
        return measuringElement.offsetWidth;
    }
    function GetTextHeightInPx(text) {
        XUI.Html.SetText(measuringElement, text);
        return measuringElement.offsetHeight;
    }
    function SetScaleFactor(newScaleFactor) {
        scaleFactor = newScaleFactor;
    }
    function CalculateZoomFactorFromScale(canvasHrs) {
        if (canvasHrs < 48) {
            tickUnits = dtu.Hour;
            tickLabel = dtf.Hour;
            tickUnitsCount = Math.ceil(canvasHrs / 8);
            return;
        }
        var canvasDays = canvasHrs / 24;

        if (canvasDays <= 88) {
            tickUnits = dtu.Day;
            tickLabel = dtf.MonthDay;
            tickUnitsCount = Math.ceil(canvasDays / 8);
            return;
        }
        var canvasMonths = canvasDays / 30;

        if (canvasMonths <= 36) {
            tickUnits = dtu.Month;
            tickLabel = dtf.YearMonth;
            tickUnitsCount = Math.ceil(canvasMonths / 8);
            return;
        }
        var canvasYears = canvasMonths / 12;

        tickUnits = dtu.Year;
        tickLabel = dtf.Year4;
        tickUnitsCount = Math.ceil(canvasYears / 8);
    }
    Init();
};
SP.JsGrid.Internal.MakeBorderString = function(width, style, color) {
    return [width, 'px ', style, ' ', color].join('');
};
SP.JsGrid.Internal.DateTimeUnit = {
    Minute: 0,
    Hour: 1,
    Day: 2,
    Week: 3,
    ThirdMonth: 4,
    Month: 5,
    Quarter: 6,
    HalfYear: 7,
    Year: 8
};
SP.JsGrid.Internal.DateTimeLocalizer = function() {
    var formatRE = /ddddd|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|q|l|r|rrr|ss|s|am|pm|tt|t|fff|ff|f|w|zzz|zz|z/g;
    var locale = Sys.CultureInfo.CurrentCulture;
    var dtf = locale.dateTimeFormat;
    var labelFormats;
    var testDate = SP.DateTimeUtil.IntlDate.createFromDateParts(2008, 1, 1, 1, SP.DateTimeUtil.SPCalendarType.gregorian);

    testDate.convertToCalendar(_spRegionalSettings.calendarType);
    this.GetLabelFormats = function() {
        return labelFormats;
    };
    this.CreateLabel = function(intlDate, labelFormat) {
        return intlDate.format(labelFormat, locale.name);
    };
    this.GetWidestLabelWidth = function(labelFormat, calendarId, fnMeasureWidth) {
        function maxOfInts(start, end, step) {
            var max = 0, largestInt = start;

            for (var i = start; i <= end; i += step) {
                var len = fnMeasureWidth(i);

                if (len > max) {
                    max = len;
                    largestInt = i;
                }
            }
            return largestInt;
        }
        function maxOfArray(array) {
            var max = 0, largestIdx = array.length - 1;

            for (var i = largestIdx; i >= 0; i--) {
                var len = fnMeasureWidth(array[i]);

                if (len > max) {
                    max = len;
                    largestIdx = i;
                }
            }
            return array[largestIdx];
        }
        function tokenSize(format) {
            var ar = [];

            testDate.setDate(testDate.get_year(), 1, 1, testDate.get_era());
            if (format == 'MMMM' || format == 'MMM') {
                var maxMonth = testDate.monthsInYear();

                for (var month = 1; month <= maxMonth; testDate.addMonths(1), month++) {
                    ar.push(testDate.format(format, locale.name));
                }
                return maxOfArray(ar);
            }
            else if (format == 'ddddd' || format == 'dddd' || format == 'ddd') {
                for (var day = 1; day <= 7; testDate.addDays(1), day++) {
                    ar.push(testDate.format(format, locale.name));
                }
                return maxOfArray(ar);
            }
            else {
                return fnMeasureWidth(testDate.format(format, locale.name));
            }
        }
        if (labelFormat[0] == '%') {
            labelFormat = labelFormat.substr(1);
        }
        var wideStrings = [];

        formatRE.lastIndex = 0;
        while (true) {
            var index = formatRE.lastIndex;
            var matchResult = formatRE.exec(labelFormat);

            wideStrings.push(labelFormat.slice(index, matchResult ? matchResult.index : labelFormat.length));
            if (!matchResult) {
                break;
            }
            var wide, match = matchResult[0];

            switch (match) {
            case "ddddd":
            case "dddd":
            case "ddd":
            case "MMMM":
            case "MMM":
                wide = tokenSize(match);
                break;
            case "yyyy":
                wide = maxOfInts(1111, 9999, 1111);
                break;
            case "fff":
                wide = maxOfInts(111, 999, 111);
                break;
            case "dd":
            case "d":
            case "MM":
            case "M":
            case "h":
            case "hh":
            case "HH":
            case "H":
            case "mm":
            case "m":
            case "ss":
            case "s":
            case "yy":
            case "y":
            case "ff":
            case "w":
            case "rrr":
                wide = maxOfInts(11, 99, 11);
                break;
            case "f":
            case "q":
            case "l":
            case "r":
                wide = maxOfInts(0, 9, 1);
                break;
            case "t":
                wide = maxOfArray([dtf.AMDesignator[0], dtf.PMDesignator[0]]);
            case "tt":
                wide = maxOfArray([dtf.AMDesignator, dtf.PMDesignator]);
                break;
            case "z":
            case "zz":
                wide = maxOfArray(['+', '-']) + maxOfInts(10, 13, 1);
                break;
            case "zzz":
                wide = maxOfArray(['+', '-']) + maxOfInts(10, 13, 1) + tokenSize(':') + maxOfInts(11, 99, 11);
                break;
            case "/":
                wide = tokenSize('/');
                break;
            case ":":
                wide = tokenSize(':');
                break;
            default:
                break;
            }
            wideStrings.push(wide);
        }
        return fnMeasureWidth(wideStrings.join(''));
    };
    function InitLabelFormats() {
        labelFormats = {
            Year4: 'yyyy',
            YearMonth: dtf.YearMonthPattern,
            MonthAbbr: 'MMM',
            ShortestDayName: 'ddddd',
            DayOfMonth: '%d',
            ShortDate: dtf.ShortDatePattern,
            ShortDateTime: dtf.ShortDatePattern + ' ' + dtf.ShortTimePattern,
            MonthDay: dtf.MonthDayPattern,
            LongDate: dtf.LongDatePattern,
            Hour: null,
            ShortDateHour: null,
            Minute: '%m'
        };
        var pat = dtf.ShortTimePattern;
        var m1 = /hh|h|HH|H/g.exec(pat);
        var m2 = / tt|.tt|tt |tt/g.exec(pat);

        labelFormats.Hour = (m1 ? !m2 ? m1 : m1.index < m2.index ? m1 + m2 : m2 + m1 : pat) + '';
        labelFormats.ShortDateHour = dtf.ShortDatePattern + ' ' + labelFormats.Hour;
    }
    InitLabelFormats();
};
SP.JsGrid.Internal.UnitTicks = [60 * 1000, 3600 * 1000, 86400 * 1000, 604800 * 1000, 864000 * 1000, 2628000 * 1000, 7884000 * 1000, 15768000 * 1000, 31536000 * 1000];
SP.JsGrid.Internal.RoundTime = function(unit, count, workDayStart, workDayEnd) {
    this.ganttDisplayInfo = SP.JsGrid.Internal.UnitTicks[unit] * count > SP.JsGrid.Internal.UnitTicks[SP.JsGrid.Internal.DateTimeUnit.Day] ? {
        unit: SP.JsGrid.Internal.DateTimeUnit.Day,
        count: 1
    } : {
        unit: unit,
        count: count
    };
    this.ganttDragInfo = {
        unit: unit,
        count: count
    };
    if (unit != SP.JsGrid.Internal.DateTimeUnit.Day) {
        this.ganttDragInfo = SP.JsGrid.Internal.DateManip.ReduceUnit(this.ganttDragInfo);
    }
    this.workDayStartMs = workDayStart * 60000;
    this.workDayEndMs = workDayEnd * 60000;
};
SP.JsGrid.Internal.RoundTime.prototype = {
    RoundForGanttDisplay: function(intlDate) {
        var ms = intlDate.get_ticks() % 86400000;

        if (ms <= this.workDayStartMs) {
            intlDate = SP.JsGrid.Internal.DateManip.RoundDown(intlDate, this.ganttDisplayInfo.unit, this.ganttDisplayInfo.count);
        }
        else if (ms >= this.workDayEndMs) {
            intlDate = SP.JsGrid.Internal.DateManip.RoundUp(intlDate, this.ganttDisplayInfo.unit, this.ganttDisplayInfo.count);
        }
        return intlDate;
    },
    RoundForGanttStartDrag: function(intlDate) {
        intlDate = SP.JsGrid.Internal.DateManip.RoundDown(intlDate, this.ganttDragInfo.unit, this.ganttDragInfo.count);
        if (this.ganttDragInfo.unit >= SP.JsGrid.Internal.DateTimeUnit.Day) {
            intlDate.setTime(0, 0, 0, this.workDayStartMs);
        }
        return intlDate;
    },
    RoundForGanttFinishDrag: function(intlDate) {
        intlDate = SP.JsGrid.Internal.DateManip.RoundUp(intlDate, this.ganttDragInfo.unit, this.ganttDragInfo.count);
        if (this.ganttDragInfo.unit >= SP.JsGrid.Internal.DateTimeUnit.Day) {
            intlDate.setTime(-24, 0, 0, this.workDayEndMs);
        }
        return intlDate;
    }
};
SP.JsGrid.Internal.DateManip = (function() {
    var startOfTime = SP.DateTimeUtil.IntlDate.createFromDateParts(1984, 1, 1, 0, SP.DateTimeUtil.SPCalendarType.gregorian);
    var endOfTime = SP.DateTimeUtil.IntlDate.createFromDateParts(2150, 1, 1, 0, SP.DateTimeUtil.SPCalendarType.gregorian);
    var ticksPerMin = 60 * 1000;
    var ticksPerHour = ticksPerMin * 60;
    var ticksPerDay = ticksPerHour * 24;
    var dtu = SP.JsGrid.Internal.DateTimeUnit;
    var incrementDispatch = ['addMinutes', 'addHours', 'addDays', 'addWeeks', 'addMonthThirds', 'addMonths', 'addQuarters', 'addHalfYears', 'addYears'];

    return {
        startOfTimeIntlDateTicks: startOfTime.get_ticks(),
        endOfTimeIntlDateTicks: endOfTime.get_ticks(),
        startOfTimeJsDateTicks: (startOfTime.toJsDate()).getTime(),
        endOfTimeJsDateTicks: (endOfTime.toJsDate()).getTime(),
        RoundUp: function(intlDate, tsunit, count) {
            var dnDate = this.RoundDown(intlDate, tsunit, count);

            return intlDate.equals(dnDate) ? dnDate : this.RoundDown(this.Increment(intlDate, tsunit, count), tsunit, count);
        },
        RoundDown: function(intlDate, tsunit, count) {
            var ticks = intlDate.get_ticks();
            var year, month, day;
            var calType, newMonth, leapMonthIndex;
            var r;

            switch (tsunit) {
            case dtu.Minute:
                r = SP.DateTimeUtil.IntlDate.createFromTicks(ticks - ticks % (count * ticksPerMin), intlDate.get_calendarType());
                break;
            case dtu.Hour:
                r = SP.DateTimeUtil.IntlDate.createFromTicks(ticks - ticks % (count * ticksPerHour), intlDate.get_calendarType());
                break;
            case dtu.Day:
            case dtu.Week:
                if (tsunit == dtu.Week) {
                    count *= 7;
                }
                var newTicks;

                if (ticks > _spRegionalSettings.firstDayOfWeek * ticksPerDay) {
                    var basedTicks = ticks - this.startOfTimeIntlDateTicks;

                    newTicks = ticks - (basedTicks - _spRegionalSettings.firstDayOfWeek * ticksPerDay) % (count * ticksPerDay);
                }
                else {
                    newTicks = this.startOfTimeIntlDateTicks + _spRegionalSettings.firstDayOfWeek * ticksPerDay;
                }
                r = SP.DateTimeUtil.IntlDate.createFromTicks(newTicks, intlDate.get_calendarType());
                break;
            case dtu.Month:
                Sys.Debug.assert(count == 1);
                r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), intlDate.get_month(), 1, intlDate.get_era(), intlDate.get_calendarType());
                break;
            case dtu.Quarter:
                Sys.Debug.assert(count == 1);
                var qtr = intlDate.get_quarter();

                calType = intlDate.get_calendarType();
                year = intlDate.get_year();
                newMonth = qtr * 3 - 2;
                leapMonthIndex = SP.DateTimeUtil.SPIntlCal.isLocalYearLeap(calType, year) ? SP.DateTimeUtil.SPIntlCal.getMonthLeap(calType, year) : -1;
                if (leapMonthIndex != -1 && leapMonthIndex < newMonth - 1) {
                    newMonth++;
                }
                r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), newMonth, 1, intlDate.get_era(), intlDate.get_calendarType());
                break;
            case dtu.HalfYear:
                Sys.Debug.assert(count == 1);
                var halfYear = intlDate.get_halfYear();

                calType = intlDate.get_calendarType();
                year = intlDate.get_year();
                newMonth = (halfYear - 1) * 6 + 1;
                leapMonthIndex = SP.DateTimeUtil.SPIntlCal.isLocalYearLeap(calType, year) ? SP.DateTimeUtil.SPIntlCal.getMonthLeap(calType, year) : -1;
                if (leapMonthIndex != -1 && leapMonthIndex < newMonth - 1) {
                    newMonth++;
                }
                r = SP.DateTimeUtil.IntlDate.createFromDateParts(intlDate.get_year(), newMonth, 1, intlDate.get_era(), intlDate.get_calendarType());
                break;
            case dtu.Year:
                r = intlDate.clone();
                r.addYears(-(intlDate.get_year() % count));
                r.setDate(r.get_year(), 1, 1, r.get_era());
                r.setTime(0, 0, 0, 0);
                break;
            case dtu.ThirdMonth:
            default:
                Sys.Debug.assert(false);
                break;
            }
            return r;
        },
        Increment: function(intlDate, tsunit, count) {
            var r = intlDate.clone();

            r[incrementDispatch[tsunit]](count);
            return r;
        },
        ReduceUnit: function(tsunitAndCount) {
            var r = tsunitAndCount;

            if (r.count > 1) {
                r.count = 1;
            }
            else {
                switch (r.unit) {
                case dtu.Minute:
                    break;
                case dtu.Hour:
                    r.unit = dtu.Minute;
                    break;
                case dtu.Day:
                    r.unit = dtu.Hour;
                    break;
                case dtu.Week:
                case dtu.ThirdMonth:
                    r.unit = dtu.Day;
                    break;
                case dtu.Month:
                    r.unit = dtu.Week;
                    break;
                case dtu.Quarter:
                case dtu.HalfYear:
                case dtu.Year:
                    r.unit = dtu.Month;
                    break;
                default:
                    Sys.Debug.assert(false);
                    break;
                }
            }
            return r;
        }
    };
})();
RegisterModuleInit("sp.ui.timeline.js", sp_ui_timeline_initialize);
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.timeline.js");
