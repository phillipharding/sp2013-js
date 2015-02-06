
Type.registerNamespace('SP.UI.Reputation');

SP.UI.Reputation.AverageRatingFieldTemplate = function SP_UI_Reputation_AverageRatingFieldTemplate() {
}
SP.UI.Reputation.AverageRatingFieldTemplate.createRenderingContextOverrides = function SP_UI_Reputation_AverageRatingFieldTemplate$createRenderingContextOverrides() {
    var $v_0 = new Context();
    $v_0.Templates['Fields'] = { AverageRating: { View: SP.UI.Reputation.AverageRatingFieldTemplate.renderAverageRatingField, NewForm: SP.UI.Reputation.AverageRatingFieldTemplate.renderAverageRatingField, EditForm: SP.UI.Reputation.AverageRatingFieldTemplate.renderAverageRatingField, DisplayForm: SP.UI.Reputation.AverageRatingFieldTemplate.renderAverageRatingField } };
    $v_0.OnPostRender = SP.UI.Reputation.AverageRatingFieldTemplate.onPostRender;
    return $v_0;
}
SP.UI.Reputation.AverageRatingFieldTemplate.renderAverageRatingField = function SP_UI_Reputation_AverageRatingFieldTemplate$renderAverageRatingField(context) {
    var $v_0;
    var $v_1;
    var $v_2 = '';
    var $v_3;
    var $v_4;
    var $v_5 = '';
    var $v_6;
    var $v_7 = '';
    var $v_8 = '';
    var $v_9 = '';
    var $v_A = true;
    var $v_B = '';
    var $v_C = null;
    var $v_D = SPClientTemplates.Utility.GetFormContextForCurrentField(context);
    if (!SP.ScriptHelpers.isNullOrUndefined($v_D)) {
        if (SP.ScriptHelpers.isNullOrUndefined($v_D.itemAttributes) || SP.ScriptHelpers.isNullOrUndefined($v_D.itemAttributes.Id) || SP.ScriptHelpers.isNullOrUndefined($v_D.itemAttributes.FsObjType) || SP.ScriptHelpers.isNullOrUndefined($v_D.listAttributes) || SP.ScriptHelpers.isNullOrUndefined($v_D.listAttributes.Id)) {
            return '';
        }
        $v_0 = $v_D.itemAttributes.Id;
        $v_1 = $v_D.webAttributes.CurrentUserId;
        $v_3 = $v_D.itemAttributes.FsObjType;
        $v_9 = $v_D.listAttributes.Direction;
        $v_4 = $v_D.listAttributes.Id;
        if (!SP.ScriptHelpers.isNullOrUndefined($v_D.listAttributes.ListTemplateType)) {
            $v_5 = $v_D.listAttributes.ListTemplateType.toString();
        }
        $v_6 = Number.parseLocale($v_D.fieldValue);
        $v_B = $v_D.webAttributes.WebUrl;
        SP.UI.Reputation.AverageRatingRenderer.isAnonymous = (SP.ScriptHelpers.isNullOrUndefined($v_D.webAttributes.CurrentUserId) || $v_D.webAttributes.CurrentUserId < 1).toString();
    }
    else {
        if (SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem) || SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem['ID']) || SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem['FSObjType'])) {
            return '';
        }
        $v_0 = context.CurrentItem['ID'];
        $v_1 = context.ListSchema.Userid;
        $v_3 = context.CurrentItem['FSObjType'];
        $v_2 = context.CurrentItem['ContentTypeId'];
        $v_4 = context.listName;
        $v_5 = context.listTemplate;
        $v_9 = context.ListSchema.Direction;
        $v_6 = Number.parseLocale(context.CurrentItem['AverageRating']);
        $v_8 = context.CurrentItem['Ratings'];
        $v_C = context.CurrentItem['RatedBy'];
        if (!SP.ScriptHelpers.isNullOrUndefined($v_C)) {
            $v_7 = $v_C.length.toString();
        }
        $v_B = context.HttpRoot;
        context.CurrentFieldSchema.AllowGridEditing = 'FALSE';
        context.CurrentFieldSchema.GridActiveAndReadOnly = 'TRUE';
        SP.UI.Reputation.AverageRatingRenderer.isAnonymous = (SP.ScriptHelpers.isNullOrUndefined(context.ListSchema.Userid) || context.ListSchema.Userid < 1).toString();
        $v_A = SP.UI.Reputation.AverageRatingFieldTemplate.$13(context.listTemplate, $v_3, $v_2);
    }
    if (!$v_A) {
        return '';
    }
    if (SP.UI.Reputation.GlobalTemplateOverrides.$J) {
        RegisterSod('reputation.js', SP.ScriptHelpers.getLayoutsPageUrl('reputation.js', $v_B));
        SP.UI.Reputation.GlobalTemplateOverrides.$J = false;
    }
    if (!SP.UI.Reputation.AverageRatingFieldTemplate.$2) {
        SP.UI.Reputation.AverageRatingFieldTemplate.$2 = [];
    }
    var $v_E = new SP.UI.Reputation.AverageRatingRenderer($v_0, $v_1, $v_6, $v_7, $v_C, $v_8, $v_4, $v_5, true, $v_9);
    Array.add(SP.UI.Reputation.AverageRatingFieldTemplate.$2, new SP.UI.Reputation.AverageRatingHandler($v_E.elementId, $v_E.$$d_$w_0, $v_E.$$d_$i_0, $v_E.$$d_$y_0, $v_E.$$d_$x_0));
    return $v_E.render();
}
SP.UI.Reputation.AverageRatingFieldTemplate.onPostRender = function SP_UI_Reputation_AverageRatingFieldTemplate$onPostRender() {
    if (SP.ScriptHelpers.isNullOrUndefined(SP.UI.Reputation.AverageRatingFieldTemplate.$2)) {
        return;
    }
    for (var $v_0 = 0, $v_1 = SP.UI.Reputation.AverageRatingFieldTemplate.$2.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = SP.UI.Reputation.AverageRatingFieldTemplate.$2[$v_0];
        if (SP.ScriptHelpers.isNullOrUndefined($v_2)) {
            continue;
        }
        var $v_3 = $get($v_2.elementId);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_3)) {
            for (var $v_5 = 0, $v_6 = $v_3.childNodes.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_3.childNodes[$v_5];
                if (SP.UI.Reputation.AverageRatingRenderer.isAnonymous === 'true') {
                    $addHandler($v_7, 'click', $v_2.onClickStopPropagationHandler);
                }
                else {
                    $addHandler($v_7, 'click', $v_2.onClickHandler);
                    $addHandler($v_7, 'mouseover', $v_2.onMouseOverHandler);
                    $addHandler($v_7, 'mouseout', $v_2.onMouseOutHandler);
                }
            }
        }
        var $v_4 = $get($v_2.elementId + '-count');
        if (!SP.ScriptHelpers.isNullOrUndefined($v_4)) {
            $addHandler($v_4, 'click', $v_2.onClickStopPropagationHandler);
        }
    }
    Array.clear(SP.UI.Reputation.AverageRatingFieldTemplate.$2);
}
SP.UI.Reputation.AverageRatingFieldTemplate.$13 = function SP_UI_Reputation_AverageRatingFieldTemplate$$13($p0, $p1, $p2) {
    var $v_0 = false;
    if ($p1 === '0' || $p0 === '108') {
        $v_0 = true;
    }
    else if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($p2)) {
        for (var $$arr_4 = SP.UI.Reputation.AverageRatingFieldTemplate.$b, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_1 = $$arr_4[$$idx_6];
            if ($p2.toUpperCase().startsWith($v_1.toUpperCase())) {
                $v_0 = true;
                break;
            }
        }
    }
    return $v_0;
}


SP.UI.Reputation.AverageRatingHandler = function SP_UI_Reputation_AverageRatingHandler($p0, $p1, $p2, $p3, $p4) {
    this.elementId = $p0;
    this.onClickHandler = $p1;
    this.onClickStopPropagationHandler = $p2;
    this.onMouseOverHandler = $p3;
    this.onMouseOutHandler = $p4;
}
SP.UI.Reputation.AverageRatingHandler.prototype = {
    elementId: null,
    onClickHandler: null,
    onClickStopPropagationHandler: null,
    onMouseOverHandler: null,
    onMouseOutHandler: null
}


SP.UI.Reputation.AverageRatingRenderer = function SP_UI_Reputation_AverageRatingRenderer(ID, userId, averageRating, ratingCount, ratedBy, ratings, listName, listTemplate, CSR, direction) {
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$y_0 = Function.createDelegate(this, this.$y_0);
    this.$$d_$i_0 = Function.createDelegate(this, this.$i_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$1_0 = ID;
    this.$P_0 = userId;
    this.$g_0 = listName;
    this.$V_0 = listTemplate;
    this.$C_0 = averageRating;
    this.$7_0 = (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(ratingCount)) ? '0' : ratingCount;
    this.$W_0 = ratedBy;
    this.$X_0 = ratings;
    this.$R_0 = CSR;
    if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(direction) || (direction.toUpperCase() !== 'RTL' && direction.toUpperCase() !== 'LTR')) {
        this.$Z_0 = (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(document.documentElement.dir) && document.documentElement.dir.toUpperCase() === 'RTL') ? true : false;
    }
    else {
        this.$Z_0 = (direction.toUpperCase() === 'RTL') ? true : false;
    }
    this.elementId = this.$n_0();
    this.$B_0 = this.$r_0();
    this.onClickHandler = this.$$d_$w_0;
    this.onClickStopPropagationHandler = this.$$d_$i_0;
    this.onMouseOverHandler = this.$$d_$y_0;
    this.onMouseOutHandler = this.$$d_$x_0;
}
SP.UI.Reputation.AverageRatingRenderer.prototype = {
    onClickHandler: null,
    onClickStopPropagationHandler: null,
    onMouseOverHandler: null,
    onMouseOutHandler: null,
    elementId: null,
    $1_0: 0,
    $P_0: 0,
    $g_0: null,
    $V_0: null,
    $C_0: 0,
    $7_0: null,
    $X_0: null,
    $B_0: null,
    $f_0: null,
    $W_0: null,
    $R_0: false,
    $Z_0: false,
    $F_0: null,
    $5_0: null,
    
    render: function SP_UI_Reputation_AverageRatingRenderer$render() {
        var $v_0 = new SP.HtmlBuilder();
        $v_0.addCssClass('ms-comm-noWrap');
        if (this.$V_0 === '108') {
            $v_0.addCssClass('ms-comm-cmdSpaceListItem');
            $v_0.renderBeginTag('li');
        }
        else if (this.$V_0 === '301') {
            $v_0.renderBeginTag('span');
        }
        else {
            $v_0.addAttribute('align', 'right');
            $v_0.renderBeginTag('div');
        }
        this.$12_0($v_0);
        $v_0.addCssClass('ms-comm-ratingSeparator');
        $v_0.renderBeginTag('span');
        $v_0.renderEndTag();
        this.$11_0($v_0);
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    
    renderStars: function SP_UI_Reputation_AverageRatingRenderer$renderStars() {
        if (SP.UI.Reputation.AverageRatingRenderer.$A) {
            SP.UI.Reputation.RatingsHelpers.$l(this.$R_0);
        }
        this.$F_0 = this.$c_0();
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = 1;
        var $$dict_2 = this.$F_0;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = '';
            $v_3 += '<a href=\"javascript:;\">';
            $v_3 += '<span ';
            $v_3 += 'class=\"ms-comm-ratingsImageContainer\"';
            if (SP.UI.Reputation.AverageRatingRenderer.isAnonymous.toUpperCase() !== 'TRUE') {
                $v_3 += this.$u_0($v_1);
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
    
    $12_0: function SP_UI_Reputation_AverageRatingRenderer$$12_0($p0) {
        $p0.addAttribute('id', this.elementId);
        $p0.renderBeginTag('span');
        $p0.write(this.renderStars());
        $p0.renderEndTag();
    },
    
    $11_0: function SP_UI_Reputation_AverageRatingRenderer$$11_0($p0) {
        $p0.addCssClass('ms-comm-ratingCountContainer');
        $p0.addAttribute('id', this.elementId + '-count');
        $p0.addAttribute('title', String.format(SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsCountAltText, Strings.STS.L_SPRatingsCountAltTextIntervals, Number.parseLocale(this.$7_0)), this.$7_0));
        $p0.renderBeginTag('span');
        $p0.write(this.$7_0);
        $p0.renderEndTag();
    },
    
    $y_0: function SP_UI_Reputation_AverageRatingRenderer$$y_0($p0) {
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
            var $v_1 = SP.UI.Reputation.RatingsHelpers.$d($v_0.id);
            var $v_2 = 0;
            var $v_3 = 6;
            while ($v_2 !== $v_1 || $v_3 !== $v_1) {
                if ($v_2 !== $v_1) {
                    $v_2 = $v_2 + 1;
                    var $v_4 = $get(this.elementId + '-img-' + $v_2.toString());
                    if (!SP.ScriptHelpers.isNullOrUndefined($v_4)) {
                        $v_4.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$M;
                    }
                }
                if ($v_3 !== $v_1) {
                    $v_3 = $v_3 - 1;
                    if ($v_3 !== $v_2) {
                        var $v_5 = $get(this.elementId + '-img-' + $v_3.toString());
                        if (!SP.ScriptHelpers.isNullOrUndefined($v_5)) {
                            $v_5.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$L;
                        }
                    }
                }
            }
        }
    },
    
    $x_0: function SP_UI_Reputation_AverageRatingRenderer$$x_0($p0) {
        if (SP.ScriptHelpers.isNullOrUndefined($p0.target) || SP.ScriptHelpers.isNullOrUndefined($p0.target.parentNode)) {
            return;
        }
        for (var $v_0 = 1; $v_0 <= 5; $v_0++) {
            var $v_1 = $get(this.elementId + '-img-' + $v_0.toString());
            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $v_1.src = this.$F_0[$v_0.toString()].toString();
            }
        }
    },
    
    $w_0: function SP_UI_Reputation_AverageRatingRenderer$$w_0($p0) {
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
            $v_2.src = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$K;
            var $v_3 = SP.UI.Reputation.RatingsHelpers.$d($v_2.id);
            var $$t_6 = this;
            EnsureScriptFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function() {
                var $v_4 = new SP.ClientContext();
                $$t_6.$5_0 = Microsoft.Office.Server.ReputationModel.Reputation.setRating($v_4, $$t_6.$g_0, $$t_6.$1_0, $v_3);
                $v_4.executeQueryAsync($$t_6.$$d_$k_0, $$t_6.$$d_$j_0);
                $$t_6.$f_0 = $v_3.toString();
            });
        }
        $p0.stopPropagation();
    },
    
    $i_0: function SP_UI_Reputation_AverageRatingRenderer$$i_0($p0) {
        $p0.stopPropagation();
    },
    
    $k_0: function SP_UI_Reputation_AverageRatingRenderer$$k_0($p0, $p1) {
        if (SP.ScriptHelpers.isNullOrUndefined(this.$5_0) || SP.ScriptHelpers.isNullOrUndefined(this.$5_0.get_value())) {
            return;
        }
        this.$C_0 = this.$5_0.get_value();
        this.$F_0 = this.$c_0();
        for (var $v_0 = 1; $v_0 <= 5; $v_0++) {
            var $v_1 = $get(this.elementId + '-img-' + $v_0.toString());
            if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
                $v_1.src = this.$F_0[$v_0.toString()].toString();
            }
        }
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$B_0)) {
            var $v_2 = $get(this.elementId + '-count');
            if (!SP.ScriptHelpers.isNullOrUndefined($v_2)) {
                this.$7_0 = (Number.parseInvariant(this.$7_0) + 1).toString();
                $v_2.innerHTML = this.$7_0;
                this.$B_0 = this.$f_0;
            }
        }
    },
    
    $j_0: function SP_UI_Reputation_AverageRatingRenderer$$j_0($p0, $p1) {
        alert($p1.get_message());
    },
    
    $u_0: function SP_UI_Reputation_AverageRatingRenderer$$u_0($p0) {
        var $v_0 = '';
        if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$B_0)) {
            $v_0 = String.format('title=\"' + SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsNotRatedAltText, Strings.STS.L_SPRatingsNotRatedAltTextIntervals, $p0) + '\"', $p0);
        }
        else {
            $v_0 = String.format('title=\"' + SP.Utilities.LocUtility.getLocalizedCountValue(Strings.STS.L_SPRatingsRatedAltText, Strings.STS.L_SPRatingsRatedAltTextIntervals, Number.parseLocale(this.$B_0)) + '\"', this.$B_0);
        }
        return $v_0;
    },
    
    $r_0: function SP_UI_Reputation_AverageRatingRenderer$$r_0() {
        var $v_0 = '';
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$X_0) && !SP.ScriptHelpers.isNullOrUndefined(this.$P_0)) {
            var $v_1 = [];
            Array.addRange($v_1, this.$X_0.split(','));
            for (var $v_2 = 0, $v_3 = $v_1.length; $v_2 < $v_3; $v_2++) {
                if (SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1[$v_2].toString())) {
                    Array.removeAt($v_1, $v_2);
                }
            }
            if (this.$R_0) {
                var $v_4 = this.$W_0;
                if (!SP.ScriptHelpers.isNullOrUndefined($v_4) && $v_1.length === $v_4.length) {
                    var $v_5 = null;
                    for (var $v_6 = 0, $v_7 = $v_4.length; $v_6 < $v_7; $v_6++) {
                        $v_5 = $v_4[$v_6];
                        if ($v_5.id === this.$P_0.toString()) {
                            $v_0 = $v_1[$v_6].toString();
                            break;
                        }
                    }
                }
            }
            else {
                var $v_8 = this.$W_0;
                if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_8)) {
                    var $v_9 = new RegExp('(\\d+);#', 'g');
                    var $v_A = $v_8.match($v_9);
                    if ($v_1.length === $v_A.length) {
                        for (var $v_B = 0, $v_C = $v_A.length; $v_B < $v_C; $v_B++) {
                            var $v_D = $v_A[$v_B];
                            var $v_E = $v_D.substr(0, $v_D.length - 2);
                            if ($v_E === this.$P_0.toString()) {
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
    
    $n_0: function SP_UI_Reputation_AverageRatingRenderer$$n_0() {
        var $v_0 = 'averageRatingElement-';
        if (SP.ScriptHelpers.isNullOrUndefined($get($v_0 + this.$1_0))) {
            $v_0 += this.$1_0;
        }
        else {
            $v_0 += 'best' + this.$1_0;
        }
        return $v_0;
    },
    
    $c_0: function SP_UI_Reputation_AverageRatingRenderer$$c_0() {
        var $v_0 = {};
        var $v_1 = this.$C_0 - Math.floor(this.$C_0);
        var $v_2 = (this.$C_0 - $v_1);
        var $v_3 = '';
        for (var $v_4 = 1; $v_4 <= 5; $v_4++) {
            if ($v_2 > 0) {
                $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$I;
                $v_2--;
            }
            else if ($v_1 > 0) {
                if ($v_1 >= 0.25 && $v_1 <= 0.75) {
                    if (this.$Z_0) {
                        $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$O;
                    }
                    else {
                        $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$N;
                    }
                }
                else if ($v_1 > 0.75) {
                    $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$I;
                }
                else {
                    $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$H;
                }
                $v_1 = 0;
            }
            else {
                $v_3 = SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$H;
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
SP.UI.Reputation.RatingsHelpers.$d = function SP_UI_Reputation_RatingsHelpers$$d($p0) {
    var $v_0 = $p0.substr($p0.length - 1);
    return Number.parseInvariant($v_0);
}
SP.UI.Reputation.RatingsHelpers.$l = function SP_UI_Reputation_RatingsHelpers$$l($p0) {
    if ($p0) {
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$K = GetThemedImageUrl('RatingsLargeStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$H = GetThemedImageUrl('RatingsSmallStarEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$I = GetThemedImageUrl('RatingsSmallStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$N = GetThemedImageUrl('RatingsSmallStarLeftHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$O = GetThemedImageUrl('RatingsSmallStarRightHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$L = GetThemedImageUrl('RatingsSmallStarHoveroverEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$M = GetThemedImageUrl('RatingsSmallStarHoveroverFilled.png');
    }
    else {
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$K = SP.UI.Reputation.RatingsHelpers.$6('RatingsLargeStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$H = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$I = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$N = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarLeftHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$O = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarRightHalfFilled.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$L = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarHoveroverEmpty.png');
        SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$M = SP.UI.Reputation.RatingsHelpers.$6('RatingsSmallStarHoveroverFilled.png');
    }
    SP.UI.Reputation.AverageRatingRenderer.$A = false;
}
SP.UI.Reputation.RatingsHelpers.$6 = function SP_UI_Reputation_RatingsHelpers$$6($p0) {
    var $v_0 = '';
    var $v_1 = $get($p0);
    if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
        $v_0 = $v_1.src;
    }
    return $v_0;
}


SP.UI.Reputation.LikesFieldTemplate = function SP_UI_Reputation_LikesFieldTemplate() {
}
SP.UI.Reputation.LikesFieldTemplate.createRenderingContextOverrides = function SP_UI_Reputation_LikesFieldTemplate$createRenderingContextOverrides() {
    var $v_0 = new Context();
    $v_0.Templates['Fields'] = { Likes: { View: SP.UI.Reputation.LikesFieldTemplate.renderLikesField } };
    $v_0.OnPostRender = SP.UI.Reputation.LikesFieldTemplate.onPostRender;
    return $v_0;
}
SP.UI.Reputation.LikesFieldTemplate.renderLikesField = function SP_UI_Reputation_LikesFieldTemplate$renderLikesField(context) {
    if (SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem) || SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem['ID'])) {
        return '';
    }
    if ((context.listTemplate !== '108') && (!SP.UI.Reputation.LikesFieldTemplate.$v(context.CurrentItem)) && (SP.ScriptHelpers.isNullOrUndefined(context.CurrentItem['FSObjType']) || context.CurrentItem['FSObjType'] === '1')) {
        return '';
    }
    if (SP.UI.Reputation.GlobalTemplateOverrides.$J) {
        RegisterSod('reputation.js', SP.ScriptHelpers.getLayoutsPageUrl('reputation.js', context.HttpRoot));
        SP.UI.Reputation.GlobalTemplateOverrides.$J = false;
    }
    if (!SP.UI.Reputation.LikesFieldTemplate.$4) {
        SP.UI.Reputation.LikesFieldTemplate.$4 = [];
    }
    var $v_0 = new SP.UI.Reputation.LikesRenderer(context);
    SP.UI.Reputation.LikesRenderer.$U = (SP.ScriptHelpers.isNullOrUndefined(context.ListSchema.Userid) || context.ListSchema.Userid < 1).toString();
    Array.add(SP.UI.Reputation.LikesFieldTemplate.$4, new SP.UI.Reputation.LikesHandler($v_0.$9_0, $v_0.$$d_onClick, $v_0.$$d_$i_0));
    if (SP.UI.Reputation.LikesFieldTemplate.$A) {
        SP.UI.Reputation.LikesHelpers.$l();
        SP.UI.Reputation.LikesFieldTemplate.$A = false;
    }
    context.CurrentFieldSchema.AllowGridEditing = 'FALSE';
    context.CurrentFieldSchema.GridActiveAndReadOnly = 'TRUE';
    return $v_0.render();
}
SP.UI.Reputation.LikesFieldTemplate.onPostRender = function SP_UI_Reputation_LikesFieldTemplate$onPostRender() {
    if (SP.ScriptHelpers.isNullOrUndefined(SP.UI.Reputation.LikesFieldTemplate.$4)) {
        return;
    }
    for (var $v_0 = 0, $v_1 = SP.UI.Reputation.LikesFieldTemplate.$4.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = SP.UI.Reputation.LikesFieldTemplate.$4[$v_0];
        if (SP.ScriptHelpers.isNullOrUndefined($v_2)) {
            continue;
        }
        var $v_3 = $get($v_2.elementId);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_3)) {
            if (SP.UI.Reputation.LikesRenderer.$U === 'true') {
                $addHandler($v_3, 'click', $v_2.onClickStopPropagationHandler);
            }
            else {
                $addHandler($v_3, 'click', $v_2.onClickHandler);
            }
            $addHandler($v_3, 'contextmenu', $v_2.onClickStopPropagationHandler);
        }
    }
    Array.clear(SP.UI.Reputation.LikesFieldTemplate.$4);
}
SP.UI.Reputation.LikesFieldTemplate.$v = function SP_UI_Reputation_LikesFieldTemplate$$v($p0) {
    var $v_0 = $p0['ContentTypeId'];
    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
        return $v_0.startsWith('0x0120D520A808');
    }
    return false;
}


SP.UI.Reputation.LikesHandler = function SP_UI_Reputation_LikesHandler($p0, $p1, $p2) {
    this.elementId = $p0;
    this.onClickHandler = $p1;
    this.onClickStopPropagationHandler = $p2;
}
SP.UI.Reputation.LikesHandler.prototype = {
    elementId: null,
    onClickHandler: null,
    onClickStopPropagationHandler: null
}


SP.UI.Reputation.LikesRenderer = function SP_UI_Reputation_LikesRenderer($p0) {
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$i_0 = Function.createDelegate(this, this.$i_0);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$Q_0 = $p0;
    this.$3_0 = $p0.CurrentItem;
    this.$1_0 = this.$3_0['ID'];
    this.$G_0 = this.$3_0['LikesCount'];
    this.$9_0 = this.$o_0();
    this.$Y_0 = this.$p_0();
    if (!SP.ScriptHelpers.isNullOrUndefined($p0.ListSchema) && !SP.ScriptHelpers.isNullOrUndefined($p0.ListSchema.Userid)) {
        this.$D_0 = $p0.ListSchema.Userid.toString();
    }
    this.$E_0 = this.$q_0();
    this.$8_0 = this.$E_0 < 0;
}
SP.UI.Reputation.LikesRenderer.prototype = {
    $9_0: null,
    $Y_0: null,
    $e_0: false,
    $8_0: false,
    $1_0: 0,
    $E_0: 0,
    $G_0: null,
    $D_0: null,
    $Q_0: null,
    $3_0: null,
    $5_0: null,
    
    render: function SP_UI_Reputation_LikesRenderer$render() {
        var $v_0 = new SP.HtmlBuilder();
        var $v_1 = 'span';
        if (this.$Q_0.listTemplate === '108') {
            $v_1 = 'li';
            $v_0.addCssClass('ms-comm-cmdSpaceListItem');
            $v_0.addCssClass('ms-noList');
        }
        $v_0.addAttribute('id', this.$Y_0);
        $v_0.renderBeginTag($v_1);
        $v_0.write(this.renderLink(this.$9_0));
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    
    renderLink: function SP_UI_Reputation_LikesRenderer$renderLink($p0) {
        var $v_0 = new SP.HtmlBuilder();
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.$G_0) && this.$G_0 !== '0') {
            this.$10_0($v_0);
        }
        $v_0.addAttribute('href', 'javascript:;');
        $v_0.addAttribute('id', $p0);
        $v_0.addAttribute('class', 'ms-secondaryCommandLink');
        $v_0.renderBeginTag('a');
        $v_0.write(SP.UI.Reputation.LikesHelpers.$t(this.$8_0));
        $v_0.renderEndTag();
        return $v_0.toString();
    },
    
    $10_0: function SP_UI_Reputation_LikesRenderer$$10_0($p0) {
        var $v_0 = Number.parseLocale(this.$G_0);
        var $v_1 = !this.$8_0;
        var $v_2 = this.$3_0['LikedBy'];
        var $v_3 = '';
        if ($v_1) {
            $v_3 = SP.UI.Reputation.LikesHelpers.ImageUrls.$T;
        }
        else {
            $v_3 = SP.UI.Reputation.LikesHelpers.ImageUrls.$S;
        }
        $p0.addCssClass('ms-comm-likesMetadata ms-metadata');
        var $v_4 = SP.UI.Reputation.LikesHelpers.$s(this.$3_0, SP.UI.Reputation.LikesRenderer.$h, this.$D_0, $v_1);
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_4)) {
            $p0.addAttribute('title', $v_4);
        }
        $p0.renderBeginTag('span');
        $p0.addCssClass('ms-comm-likesImgContainer');
        $p0.renderBeginTag('span');
        $p0.addAttribute('src', $v_3);
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.addCssClass('ms-comm-likesCount ms-comm-reputationNumbers');
        $p0.renderBeginTag('span');
        $p0.write($v_0.toString());
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    
    $i_0: function SP_UI_Reputation_LikesRenderer$$i_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    
    onClick: function SP_UI_Reputation_LikesRenderer$onClick($p0) {
        $p0.preventDefault();
        var $v_0 = $p0.target;
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $v_0.disabled = true;
        }
        var $$t_3 = this;
        EnsureScriptFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function() {
            var $v_1 = new SP.ClientContext();
            $$t_3.$5_0 = Microsoft.Office.Server.ReputationModel.Reputation.setLike($v_1, $$t_3.$Q_0.listName, $$t_3.$1_0, $$t_3.$8_0);
            $v_1.executeQueryAsync($$t_3.$$d_$k_0, $$t_3.$$d_$j_0);
        });
    },
    
    $k_0: function SP_UI_Reputation_LikesRenderer$$k_0($p0, $p1) {
        if (SP.ScriptHelpers.isNullOrUndefined(this.$5_0) || SP.ScriptHelpers.isNullOrUndefined(this.$5_0.get_value())) {
            return;
        }
        this.$G_0 = this.$5_0.get_value().toString();
        this.$8_0 = !this.$8_0;
        if (this.$8_0) {
            SP.UI.Reputation.LikesHelpers.$z(this.$3_0, this.$D_0, this.$E_0);
            this.$E_0 = -1;
        }
        else {
            this.$E_0 = SP.UI.Reputation.LikesHelpers.$m(this.$3_0, this.$D_0);
        }
        var $v_0 = $get(this.$Y_0);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $v_0.innerHTML = this.renderLink(this.$9_0);
            var $v_4 = $get(this.$9_0);
            if (!SP.ScriptHelpers.isNullOrUndefined($v_4)) {
                $addHandler($v_4, 'click', this.$$d_onClick);
                $addHandler($v_4, 'contextmenu', this.$$d_$i_0);
            }
        }
        var $v_1 = 'likesElement-' + ((!this.$e_0) ? 'best' : '') + this.$1_0;
        var $v_2 = 'root-' + $v_1;
        var $v_3 = $get($v_2);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_3)) {
            $v_3.innerHTML = this.renderLink($v_1);
            var $v_5 = $get($v_1);
            if (!SP.ScriptHelpers.isNullOrUndefined($v_5)) {
                $addHandler($v_5, 'click', this.$$d_onClick);
                $addHandler($v_5, 'contextmenu', this.$$d_$i_0);
            }
        }
    },
    
    $j_0: function SP_UI_Reputation_LikesRenderer$$j_0($p0, $p1) {
        var $v_0 = $get(this.$9_0);
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $v_0.disabled = false;
        }
        alert($p1.get_message());
    },
    
    $o_0: function SP_UI_Reputation_LikesRenderer$$o_0() {
        var $v_0 = 'likesElement-';
        if (SP.ScriptHelpers.isNullOrUndefined($get($v_0 + this.$1_0))) {
            $v_0 += this.$1_0;
        }
        else {
            $v_0 += 'best' + this.$1_0;
        }
        return $v_0;
    },
    
    $p_0: function SP_UI_Reputation_LikesRenderer$$p_0() {
        var $v_0 = 'root-likesElement-';
        if (SP.ScriptHelpers.isNullOrUndefined($get($v_0 + this.$1_0))) {
            $v_0 += this.$1_0;
        }
        else {
            $v_0 += 'best' + this.$1_0;
            this.$e_0 = true;
        }
        return $v_0;
    },
    
    $q_0: function SP_UI_Reputation_LikesRenderer$$q_0() {
        var $v_0 = this.$3_0['LikedBy'];
        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
                var $v_3 = $v_0[$v_1];
                if ($v_3.id === this.$D_0) {
                    return $v_1;
                }
            }
        }
        return -1;
    }
}


SP.UI.Reputation.LikesHelpers = function SP_UI_Reputation_LikesHelpers() {
}
SP.UI.Reputation.LikesHelpers.$t = function SP_UI_Reputation_LikesHelpers$$t($p0) {
    return ($p0) ? Strings.STS.L_SPDiscLike : Strings.STS.L_SPDiscUnlike;
}
SP.UI.Reputation.LikesHelpers.$s = function SP_UI_Reputation_LikesHelpers$$s($p0, $p1, $p2, $p3) {
    var $v_0 = '';
    var $v_1 = $p0['LikedBy'];
    if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
        var $v_2 = $v_1.length;
        if ($p3) {
            $v_0 += Strings.STS.L_CalloutLastEditedYou;
        }
        while ($v_2 > 0 && $p1 > 0) {
            $v_2--;
            var $v_3 = $v_1[$v_2];
            if ($v_3.id === $p2) {
                continue;
            }
            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
                $v_0 += '&#013';
            }
            $v_0 += SP.Utilities.HttpUtility.htmlEncode($v_3.title);
            $p1--;
        }
    }
    return $v_0;
}
SP.UI.Reputation.LikesHelpers.$m = function SP_UI_Reputation_LikesHelpers$$m($p0, $p1) {
    var $v_0 = $p0['LikedBy'];
    if (SP.ScriptHelpers.isNullOrUndefined($v_0) || !$v_0.length) {
        $v_0 = [];
    }
    var $v_1 = new UserInfo();
    $v_1.id = $p1;
    Array.add($v_0, $v_1);
    $p0['LikedBy'] = $v_0;
    return $v_0.length - 1;
}
SP.UI.Reputation.LikesHelpers.$z = function SP_UI_Reputation_LikesHelpers$$z($p0, $p1, $p2) {
    var $v_0 = $p0['LikedBy'];
    if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
        if ($v_0.length > $p2) {
            Array.removeAt($v_0, $p2);
            $p0['LikedBy'] = $v_0;
        }
    }
}
SP.UI.Reputation.LikesHelpers.$l = function SP_UI_Reputation_LikesHelpers$$l() {
    SP.UI.Reputation.LikesHelpers.ImageUrls.$S = GetThemedImageUrl('Like.11x11x32.png');
    SP.UI.Reputation.LikesHelpers.ImageUrls.$T = GetThemedImageUrl('LikeFull.11x11x32.png');
}


SP.UI.Reputation.LikesHelpers.ImageUrls = function SP_UI_Reputation_LikesHelpers_ImageUrls() {
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


SP.UI.Reputation.GlobalTemplateOverrides = function SP_UI_Reputation_GlobalTemplateOverrides() {
}
SP.UI.Reputation.GlobalTemplateOverrides.$$cctor = function SP_UI_Reputation_GlobalTemplateOverrides$$$cctor() {
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(SP.UI.Reputation.LikesFieldTemplate.createRenderingContextOverrides());
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(SP.UI.Reputation.AverageRatingFieldTemplate.createRenderingContextOverrides());
}


SP.UI.Reputation.AverageRatingFieldTemplate.registerClass('SP.UI.Reputation.AverageRatingFieldTemplate');
SP.UI.Reputation.AverageRatingHandler.registerClass('SP.UI.Reputation.AverageRatingHandler');
SP.UI.Reputation.AverageRatingRenderer.registerClass('SP.UI.Reputation.AverageRatingRenderer');
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.registerClass('SP.UI.Reputation.AverageRatingRenderer.ImageUrls');
SP.UI.Reputation.RatingsHelpers.registerClass('SP.UI.Reputation.RatingsHelpers');
SP.UI.Reputation.LikesFieldTemplate.registerClass('SP.UI.Reputation.LikesFieldTemplate');
SP.UI.Reputation.LikesHandler.registerClass('SP.UI.Reputation.LikesHandler');
SP.UI.Reputation.LikesRenderer.registerClass('SP.UI.Reputation.LikesRenderer');
SP.UI.Reputation.LikesHelpers.registerClass('SP.UI.Reputation.LikesHelpers');
SP.UI.Reputation.LikesHelpers.ImageUrls.registerClass('SP.UI.Reputation.LikesHelpers.ImageUrls');
Context.registerClass('Context');
FormContext.registerClass('FormContext');
UserInfo.registerClass('UserInfo');
SP.UI.Reputation.GlobalTemplateOverrides.registerClass('SP.UI.Reputation.GlobalTemplateOverrides');
function sp_ui_reputation_initialize() {
SP.UI.Reputation.AverageRatingFieldTemplate.$b = [ '0x0120d5' ];
SP.UI.Reputation.AverageRatingFieldTemplate.$2 = null;
SP.UI.Reputation.AverageRatingRenderer.isAnonymous = 'false';
SP.UI.Reputation.AverageRatingRenderer.$A = true;
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$K = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$H = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$I = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$N = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$O = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$L = '';
SP.UI.Reputation.AverageRatingRenderer.ImageUrls.$M = '';
SP.UI.Reputation.LikesFieldTemplate.$4 = null;
SP.UI.Reputation.LikesFieldTemplate.$A = true;
SP.UI.Reputation.LikesRenderer.$h = 20;
SP.UI.Reputation.LikesRenderer.$U = 'false';
SP.UI.Reputation.LikesHelpers.ImageUrls.$T = '';
SP.UI.Reputation.LikesHelpers.ImageUrls.$S = '';
SP.UI.Reputation.GlobalTemplateOverrides.$J = true;
SP.UI.Reputation.GlobalTemplateOverrides.$$cctor();
};
sp_ui_reputation_initialize();

RegisterModuleInit("sp.ui.reputation.js", sp_ui_reputation_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.reputation.js");
