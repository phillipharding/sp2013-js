
Type.registerNamespace('SP.UI.Reputation');

SP.UI.Reputation.AverageRatingRenderer = function SP_UI_Reputation_AverageRatingRenderer(ID, userId, averageRating, ratingCount, ratedBy, ratings, listName, listTemplate, CSR, direction) {
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$$d_$Z_0 = Function.createDelegate(this, this.$Z_0);
    this.$$d_$W_0 = Function.createDelegate(this, this.$W_0);
    this.$$d_$X_0 = Function.createDelegate(this, this.$X_0);
    this.$$d_$V_0 = Function.createDelegate(this, this.$V_0);
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$6_0 = ID;
    this.$F_0 = userId;
    this.$P_0 = listName;
    this.$H_0 = listTemplate;
    this.$4_0 = averageRating;
    this.$2_0 = (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(ratingCount)) ? '0' : ratingCount;
    this.$I_0 = ratedBy;
    this.$J_0 = ratings;
    this.$G_0 = CSR;
    if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(direction) || (direction.toUpperCase() !== 'RTL' && direction.toUpperCase() !== 'LTR')) {
        this.$L_0 = (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(document.documentElement.dir) && document.documentElement.dir.toUpperCase() === 'RTL') ? true : false;
    }
    else {
        this.$L_0 = (direction.toUpperCase() === 'RTL') ? true : false;
    }
    this.elementId = this.$R_0();
    this.$3_0 = this.$S_0();
    this.onClickHandler = this.$$d_$U_0;
    this.onClickStopPropagationHandler = this.$$d_$V_0;
    this.onMouseOverHandler = this.$$d_$X_0;
    this.onMouseOutHandler = this.$$d_$W_0;
}
SP.UI.Reputation.AverageRatingRenderer.prototype = {
    onClickHandler: null,
    onClickStopPropagationHandler: null,
    onMouseOverHandler: null,
    onMouseOutHandler: null,
    elementId: null,
    $6_0: 0,
    $F_0: 0,
    $P_0: null,
    $H_0: null,
    $4_0: 0,
    $2_0: null,
    $J_0: null,
    $3_0: null,
    $O_0: null,
    $I_0: null,
    $G_0: false,
    $L_0: false,
    $5_0: null,
    $9_0: null,
    
    render: function SP_UI_Reputation_AverageRatingRenderer$render() {
        var $v_0 = new SP.HtmlBuilder();
        $v_0.addCssClass('ms-comm-noWrap');
        if (this.$H_0 === '108') {
            $v_0.addCssClass('ms-comm-cmdSpaceListItem');
            $v_0.renderBeginTag('li');
        }
        else if (this.$H_0 === '301') {
            $v_0.renderBeginTag('span');
        }
        else {
            $v_0.addAttribute('align', 'right');
            $v_0.renderBeginTag('div');
        }
        this.$b_0($v_0);
        $v_0.addCssClass('ms-comm-ratingSeparator');
        $v_0.renderBeginTag('span');
        $v_0.renderEndTag();
        this.$a_0($v_0);
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    
    renderStars: function SP_UI_Reputation_AverageRatingRenderer$renderStars() {
        if (SP.UI.Reputation.AverageRatingRenderer.$K) {
            SP.UI.Reputation.RatingsHelpers.$c(this.$G_0);
        }
        this.$5_0 = this.$M_0();
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = 1;
        var $$dict_2 = this.$5_0;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = '';
            $v_3 += '<a href=\"javascript:;\">';
            $v_3 += '<span ';
            $v_3 += 'class=\"ms-comm-ratingsImageContainer\"';
            if (SP.UI.Reputation.AverageRatingRenderer.isAnonymous.toUpperCase() !== 'TRUE') {
                $v_3 += this.$T_0($v_1);
            }
            $v_3 += '>';
            $v_3 += '<img ';
            $v_3 += 'id=\"' + this.elementId + '-img-' + $v_2.key + '\" ';
            $v_3 += String.format('alt=\"' + SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsNotRatedAltText, Strings.STS.L_SPRatingsNotRatedAltTextIntervals, $v_1) + '\"', $v_1);
            $v_3 += 'src=\"' + $v_2.value + '\"/>';
            $v_3 += '</span>';
            $v_3 += '</a>';
            $v_0.write($v_3);
            $v_1++;
        }
        return $v_0.toString();
    },
    
    $b_0: function SP_UI_Reputation_AverageRatingRenderer$$b_0($p0) {
        $p0.addAttribute('id', this.elementId);
        $p0.renderBeginTag('span');
        $p0.write(this.renderStars());
        $p0.renderEndTag();
    },
    
    $a_0: function SP_UI_Reputation_AverageRatingRenderer$$a_0($p0) {
        $p0.addCssClass('ms-comm-ratingCountContainer');
        $p0.addAttribute('id', this.elementId + '-count');
        $p0.addAttribute('title', String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsCountAltText, Strings.STS.L_SPRatingsCountAltTextIntervals, Number.parseLocale(this.$2_0)), this.$2_0));
        $p0.renderBeginTag('span');
        $p0.write(this.$2_0);
        $p0.renderEndTag();
    },
    
    $X_0: function SP_UI_Reputation_AverageRatingRenderer$$X_0($p0) {
        if (SP.ScriptHelpers.isNullOrUndefined($p0.target)) {
            return;
        }
        var $v_0 = null;
        switch ($p0.target.tagName) {
            case 'A':
                $v_0 = $p0.target.firstChild.firstChild;
                break;
            case 'SPAN':
                $v_0 = $p0.target.firstChild;
                break;
            case 'IMG':
                $v_0 = $p0.target;
                break;
            default:
                break;
        }
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            var $v_1 = SP.UI.Reputation.RatingsHelpers.$N($v_0.id);
            var $v_2 = 0;
            var $v_3 = 6;
            while ($v_2 !== $v_1 || $v_3 !== $v_1) {
                if ($v_2 !== $v_1) {
                    $v_2 = $v_2 + 1;
                    var $v_4 = $get(this.elementId + '-img-' + $v_2.toString());
                    if (!SP.ScriptHelpers.isNullOrUndefined($v_4)) {
                        $v_4.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$C;
                    }
                }
                if ($v_3 !== $v_1) {
                    $v_3 = $v_3 - 1;
                    if ($v_3 !== $v_2) {
                        var $v_5 = $get(this.elementId + '-img-' + $v_3.toString());
                        if (!SP.ScriptHelpers.isNullOrUndefined($v_5)) {
                            $v_5.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$B;
                        }
                    }
                }
            }
        }
    },
    
    $W_0: function SP_UI_Reputation_AverageRatingRenderer$$W_0($p0) {
        if (SP.ScriptHelpers.isNullOrUndefined($p0.target) || SP.ScriptHelpers.isNullOrUndefined($p0.target.parentNode)) {
            return;
        }
        for (var $v_0 = 1; $v_0 <= 5; $v_0++) {
            var $v_1 = $get(this.elementId + '-img-' + $v_0.toString());
            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $v_1.src = this.$5_0[$v_0.toString()].toString();
            }
        }
    },
    
    $U_0: function SP_UI_Reputation_AverageRatingRenderer$$U_0($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.target;
        if (SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $v_0 = $p0.rawEvent.srcElement;
            if (SP.ScriptHelpers.isNullOrUndefined($v_0)) {
                return;
            }
        }
        var $v_1 = null;
        switch ($v_0.tagName) {
            case 'A':
                $v_1 = $v_0.firstChild;
                break;
            case 'SPAN':
                $v_1 = $v_0;
                break;
            case 'IMG':
                $v_1 = $v_0.parentNode;
                break;
            default:
                break;
        }
        if (!SP.ScriptHelpers.isNullOrUndefined($v_1) && !SP.ScriptHelpers.isNullOrUndefined($v_1.firstChild)) {
            var $v_2 = $v_1.firstChild;
            $v_2.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$A;
            var $v_3 = SP.UI.Reputation.RatingsHelpers.$N($v_2.id);
            var $$t_6 = this;
            EnsureScriptFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function() {
                var $v_4 = new SP.ClientContext();
                $$t_6.$9_0 = Microsoft.Office.Server.ReputationModel.Reputation.setRating($v_4, $$t_6.$P_0, $$t_6.$6_0, $v_3);
                $v_4.executeQueryAsync($$t_6.$$d_$Z_0, $$t_6.$$d_$Y_0);
                $$t_6.$O_0 = $v_3.toString();
            });
        }
        $p0.stopPropagation();
    },
    
    $V_0: function SP_UI_Reputation_AverageRatingRenderer$$V_0($p0) {
        $p0.stopPropagation();
    },
    
    $Z_0: function SP_UI_Reputation_AverageRatingRenderer$$Z_0($p0, $p1) {
        if (SP.ScriptHelpers.isNullOrUndefined(this.$9_0) || SP.ScriptHelpers.isNullOrUndefined(this.$9_0.get_value())) {
            return;
        }
        this.$4_0 = this.$9_0.get_value();
        this.$5_0 = this.$M_0();
        for (var $v_0 = 1; $v_0 <= 5; $v_0++) {
            var $v_1 = $get(this.elementId + '-img-' + $v_0.toString());
            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $v_1.src = this.$5_0[$v_0.toString()].toString();
            }
        }
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$3_0)) {
            var $v_2 = $get(this.elementId + '-count');
            if (!SP.ScriptHelpers.isNullOrUndefined($v_2)) {
                this.$2_0 = (Number.parseInvariant(this.$2_0) + 1).toString();
                $v_2.innerHTML = this.$2_0;
                this.$3_0 = this.$O_0;
            }
        }
    },
    
    $Y_0: function SP_UI_Reputation_AverageRatingRenderer$$Y_0($p0, $p1) {
        alert($p1.get_message());
    },
    
    $T_0: function SP_UI_Reputation_AverageRatingRenderer$$T_0($p0) {
        var $v_0 = '';
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$3_0)) {
            $v_0 = String.format('title=\"' + SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsNotRatedAltText, Strings.STS.L_SPRatingsNotRatedAltTextIntervals, $p0) + '\"', $p0);
        }
        else {
            $v_0 = String.format('title=\"' + SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsRatedAltText, Strings.STS.L_SPRatingsRatedAltTextIntervals, Number.parseLocale(this.$3_0)) + '\"', this.$3_0);
        }
        return $v_0;
    },
    
    $S_0: function SP_UI_Reputation_AverageRatingRenderer$$S_0() {
        var $v_0 = '';
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$J_0) && !SP.ScriptHelpers.isNullOrUndefined(this.$F_0)) {
            var $v_1 = [];
            Array.addRange($v_1, this.$J_0.split(','));
            for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
                if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1[$v_2].toString())) {
                    Array.removeAt($v_1, $v_2);
                }
            }
            if (this.$G_0) {
                var $v_4 = this.$I_0;
                if (!SP.ScriptHelpers.isNullOrUndefined($v_4) && $v_1.length === $v_4.length) {
                    var $v_5 = null;
                    for (var $v_6 = 0, $v_7 = $v_4.length; $v_6 < $v_7; $v_6++) {
                        $v_5 = $v_4[$v_6];
                        if ($v_5.id === this.$F_0.toString()) {
                            $v_0 = $v_1[$v_6].toString();
                            break;
                        }
                    }
                }
            }
            else {
                var $v_8 = this.$I_0;
                if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_8)) {
                    var $v_9 = new RegExp('(\\d+);#', 'g');
                    var $v_A = $v_8.match($v_9);
                    if ($v_1.length === $v_A.length) {
                        for (var $v_B = 0, $v_C = $v_A.length; $v_B < $v_C; $v_B++) {
                            var $v_D = $v_A[$v_B];
                            var $v_E = $v_D.substr(0, $v_D.length - 2);
                            if ($v_E === this.$F_0.toString()) {
                                $v_0 = $v_1[$v_B].toString();
                                break;
                            }
                        }
                    }
                }
            }
        }
        return $v_0;
    },
    
    $R_0: function SP_UI_Reputation_AverageRatingRenderer$$R_0() {
        var $v_0 = 'averageRatingElement-';
        if (SP.ScriptHelpers.isNullOrUndefined($get($v_0 + this.$6_0))) {
            $v_0 += this.$6_0;
        }
        else {
            $v_0 += 'best' + this.$6_0;
        }
        return $v_0;
    },
    
    $M_0: function SP_UI_Reputation_AverageRatingRenderer$$M_0() {
        var $v_0 = {};
        var $v_1 = this.$4_0 - Math.floor(this.$4_0);
        var $v_2 = (this.$4_0 - $v_1);
        var $v_3 = '';
        for (var $v_4 = 1; $v_4 <= 5; $v_4++) {
            if ($v_2 > 0) {
                $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$8;
                $v_2--;
            }
            else if ($v_1 > 0) {
                if ($v_1 >= 0.25 && $v_1 <= 0.75) {
                    if (this.$L_0) {
                        $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$E;
                    }
                    else {
                        $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$D;
                    }
                }
                else if ($v_1 > 0.75) {
                    $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$8;
                }
                else {
                    $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$7;
                }
                $v_1 = 0;
            }
            else {
                $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$7;
            }
            $v_0[$v_4.toString()] = $v_3;
        }
        return $v_0;
    }
}


SP.UI.Reputation.AverageRatingRenderer.ImageUrls = function SP_UI_Reputation_AverageRatingRenderer_ImageUrls() {
}


SP.UI.Reputation.RatingsHelpers = function SP_UI_Reputation_RatingsHelpers() {
}
SP.UI.Reputation.RatingsHelpers.$N = function SP_UI_Reputation_RatingsHelpers$$N($p0) {
    var $v_0 = $p0.substr($p0.length - 1);
    return Number.parseInvariant($v_0);
}
SP.UI.Reputation.RatingsHelpers.$c = function SP_UI_Reputation_RatingsHelpers$$c($p0) {
    if ($p0) {
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$A = GetThemedImageUrl('RatingsLargeStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$7 = GetThemedImageUrl('RatingsSmallStarEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$8 = GetThemedImageUrl('RatingsSmallStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$D = GetThemedImageUrl('RatingsSmallStarLeftHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$E = GetThemedImageUrl('RatingsSmallStarRightHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$B = GetThemedImageUrl('RatingsSmallStarHoveroverEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$C = GetThemedImageUrl('RatingsSmallStarHoveroverFilled.png');
    }
    else {
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$A = SP.UI.Reputation.RatingsHelpers.$1('RatingsLargeStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$7 = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$8 = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$D = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarLeftHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$E = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarRightHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$B = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarHoveroverEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$C = SP.UI.Reputation.RatingsHelpers.$1('RatingsSmallStarHoveroverFilled.png');
    }
    SP.UI.Reputation.AverageRatingRenderer.$K = false;
}
SP.UI.Reputation.RatingsHelpers.$1 = function SP_UI_Reputation_RatingsHelpers$$1($p0) {
    var $v_0 = '';
    var $v_1 = $get($p0);
    if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
        $v_0 = $v_1.src;
    }
    return $v_0;
}


function Context() {
    this.Templates = {};
}
Context.prototype = {
    CurrentFieldSchema: null,
    CurrentItem: null,
    HttpRoot: null,
    listName: null,
    listTemplate: null,
    ListSchema: null,
    OnPreRender: null,
    OnPostRender: null
}


function FormContext() {
}
FormContext.prototype = {
    controlMode: 0,
    fieldName: null,
    fieldSchema: null,
    fieldValue: null,
    itemAttributes: null,
    listAttributes: null,
    webAttributes: null
}


function UserInfo() {
}
UserInfo.prototype = {
    email: null,
    id: null,
    picture: null,
    sip: null,
    title: null,
    value: null
}


SP.UI.Reputation.AverageRatingRenderer.registerClass('SP.UI.Reputation.AverageRatingRenderer');
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.registerClass('SP.UI.Reputation.AverageRatingRenderer.ImageUrls');
SP.UI.Reputation.RatingsHelpers.registerClass('SP.UI.Reputation.RatingsHelpers');
Context.registerClass('Context');
FormContext.registerClass('FormContext');
UserInfo.registerClass('UserInfo');
function sp_ui_ratings_initialize() {
SP.UI.Reputation.AverageRatingRenderer.isAnonymous = 'false';
SP.UI.Reputation.AverageRatingRenderer.$K = true;
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$A = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$7 = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$8 = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$D = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$E = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$B = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$C = '';
};
sp_ui_ratings_initialize();

RegisterModuleInit("sp.ui.ratings.js", sp_ui_ratings_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.ratings.js");
