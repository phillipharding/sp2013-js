// JScript File


Type.registerNamespace('SP.UI.MicroFeed');

SP.UI.MicroFeed.HandlingMode = function() {}
SP.UI.MicroFeed.HandlingMode.prototype = {
    notHandling: 0, 
    handlingMention: 1, 
    handlingTag: 2, 
    handlingLink: 3
}
SP.UI.MicroFeed.HandlingMode.registerEnum('SP.UI.MicroFeed.HandlingMode', false);


SP.UI.MicroFeed.TextBoxElementType = function() {}
SP.UI.MicroFeed.TextBoxElementType.prototype = {
    mention: 0, 
    tag: 1, 
    link: 2
}
SP.UI.MicroFeed.TextBoxElementType.registerEnum('SP.UI.MicroFeed.TextBoxElementType', false);


SP.UI.MicroFeed.WebPartFeedType = function() {}
SP.UI.MicroFeed.WebPartFeedType.prototype = {
    publishedFeed: 0, 
    whatsNew: 1, 
    siteFeed: 2
}
SP.UI.MicroFeed.WebPartFeedType.registerEnum('SP.UI.MicroFeed.WebPartFeedType', false);


SP.UI.MicroFeed.keyCode = function() {}
SP.UI.MicroFeed.keyCode.prototype = {
    none: 0, 
    backspace: 8, 
    enter: 13, 
    escape: 27, 
    space: 32, 
    leftArrow: 37, 
    upArrow: 38, 
    rightArrow: 39, 
    downArrow: 40, 
    zero: 48, 
    nine: 57, 
    a: 65, 
    z: 90, 
    numPadZero: 96, 
    numPadNine: 105, 
    deleteKey: 127
}
SP.UI.MicroFeed.keyCode.registerEnum('SP.UI.MicroFeed.keyCode', false);


SP.UI.MicroFeed.PostType = function() {}
SP.UI.MicroFeed.PostType.prototype = {
    unknown: 0, 
    rootRepliable: 1, 
    reply: 2, 
    rootPreview: 3, 
    replyPreview: 4, 
    newRoot: 6, 
    newReply: 7, 
    replyForRef: 8, 
    refPost: 9, 
    refMention: 10, 
    minimalRoot: 11, 
    errorPost: 12
}
SP.UI.MicroFeed.PostType.registerEnum('SP.UI.MicroFeed.PostType', false);


SP.UI.MicroFeed.FeedType = function() {}
SP.UI.MicroFeed.FeedType.prototype = {
    published: 0, 
    consolidated: 1, 
    categorical: 2, 
    custom: 3, 
    company: 4, 
    mentions: 5, 
    likes: 6
}
SP.UI.MicroFeed.FeedType.registerEnum('SP.UI.MicroFeed.FeedType', false);


SP.UI.MicroFeed.NewReplyDivType = function() {}
SP.UI.MicroFeed.NewReplyDivType.prototype = {
    empty: 0, 
    newReply: 1, 
    maxRepliesReached: 2
}
SP.UI.MicroFeed.NewReplyDivType.registerEnum('SP.UI.MicroFeed.NewReplyDivType', false);


SP.UI.MicroFeed.UpdateType = function() {}
SP.UI.MicroFeed.UpdateType.prototype = {
    noUpdate: 0, 
    older: 1, 
    newer: 2
}
SP.UI.MicroFeed.UpdateType.registerEnum('SP.UI.MicroFeed.UpdateType', false);


SP.UI.MicroFeed.PictureSize = function() {}
SP.UI.MicroFeed.PictureSize.prototype = {
    normal: 0, 
    small: 1, 
    icon: 2
}
SP.UI.MicroFeed.PictureSize.registerEnum('SP.UI.MicroFeed.PictureSize', false);


SP.UI.MicroFeed.AtMention = function SP_UI_MicroFeed_AtMention($p0, $p1, $p2) {
    this.$$d_$9A_1 = Function.createDelegate(this, this.$9A_1);
    this.$$d_$9E_1 = Function.createDelegate(this, this.$9E_1);
    this.$3D_1 = {};
    this.$2K_1 = [];
    this.$2L_1 = {};
    this.$U_1 = [];
    this.$17_1 = {};
    this.$c_1 = [];
    SP.UI.MicroFeed.AtMention.initializeBase(this, [ $p1 ]);
    this.$2_1 = $p0;
    this.$4l_1 = $p2;
    $addHandler($p0, 'keyup', this.$$d_typeAheadKeyUpHandler);
    var $$t_4 = this;
    $addHandler($p0, 'click', function($p1_0) {
        $$t_4.correctDropdownState();
    });
    $addHandler($p0, 'paste', this.$$d_$9E_1);
}
SP.UI.MicroFeed.AtMention.$95 = function SP_UI_MicroFeed_AtMention$$95($p0) {
    var $v_0 = $p0.lastIndexOf('http://');
    var $v_1 = $p0.lastIndexOf('https://');
    var $v_2 = $p0.lastIndexOf('www.');
    var $v_3 = Math.max($v_0, $v_1, $v_2);
    while ($v_3 > -1) {
        if (!$v_3) {
            return 0;
        }
        var $v_4 = $p0.charCodeAt($v_3 - 1);
        if (($v_4 >= 65 && $v_4 <= 90) || ($v_4 >= 97 && $v_4 <= 122) || ($v_3 === $v_2 && $v_4 === 47) || $v_4 === 60) {
            $p0 = $p0.substr(0, $v_3);
            if ($v_3 === $v_0) {
                $v_0 = $p0.lastIndexOf('http://');
            }
            if ($v_3 === $v_1) {
                $v_1 = $p0.lastIndexOf('https://');
            }
            if ($v_3 === $v_2) {
                $v_2 = $p0.lastIndexOf('www.');
            }
            $v_3 = Math.max($v_0, $v_1, $v_2);
        }
        else {
            return $v_3;
        }
    }
    return $v_3;
}
SP.UI.MicroFeed.AtMention.$4I = function SP_UI_MicroFeed_AtMention$$4I($p0) {
    var $v_0 = $p0;
    if (window.browseris.ie8standard && (!SP.ScriptUtility.isNullOrEmptyString($p0))) {
        $v_0 = $p0.replace(SP.UI.MicroFeed.AtMention.$76, '\n');
    }
    return $v_0;
}
SP.UI.MicroFeed.AtMention.$3w = function SP_UI_MicroFeed_AtMention$$3w($p0) {
    var $v_0 = '';
    if ($p0) {
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0.charAt($v_1);
            if ($v_2 === '{') {
                $v_0 += '{{';
            }
            else if ($v_2 === '}') {
                $v_0 += '}}';
            }
            else {
                $v_0 += $v_2;
            }
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.AtMention.prototype = {
    $2_1: null,
    $4o_1: null,
    $4l_1: null,
    
    get_ownerControlId: function SP_UI_MicroFeed_AtMention$get_ownerControlId() {
        return this.$2_1.id;
    },
    
    get_isHandlingLinkEntry: function SP_UI_MicroFeed_AtMention$get_isHandlingLinkEntry() {
        return this.m_handlingMode === 3;
    },
    
    get_$4j_1: function SP_UI_MicroFeed_AtMention$get_$4j_1() {
        var $v_0 = this.$2_1.value.substring(0, SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1));
        var $v_1 = -1;
        var $v_2 = $v_0.substr(Math.max($v_0.lastIndexOf(' '), $v_0.lastIndexOf('\n'), $v_0.lastIndexOf('\t'), $v_0.lastIndexOf('\r')) + 1);
        var $v_3 = SP.UI.MicroFeed.AtMention.$95($v_2);
        if ($v_3 > -1) {
            $v_1 = $v_0.lastIndexOf($v_2) + $v_3;
            this.m_handlingMode = 3;
        }
        else {
            var $v_4 = $v_0.lastIndexOf('@');
            var $v_5 = $v_0.lastIndexOf('#');
            $v_1 = Math.max($v_4, $v_5);
            if ($v_1 > -1) {
                if ($v_1 === $v_4) {
                    this.m_handlingMode = 1;
                }
                else if ($v_1 === $v_5) {
                    this.m_handlingMode = 2;
                }
                else {
                    this.m_handlingMode = 3;
                }
            }
            else {
                this.m_handlingMode = 0;
            }
        }
        return $v_1;
    },
    
    get_shouldDisplayTooManyWarning: function SP_UI_MicroFeed_AtMention$get_shouldDisplayTooManyWarning() {
        var $v_0 = 0, $v_1 = 0;
        var $v_2 = this.get_$2c_1();
        for ($v_1 = 0; $v_1 < $v_2.length; $v_1++) {
            if (this.$2_1.value.indexOf($v_2[$v_1]) >= 0) {
                $v_0++;
            }
        }
        if (this.m_handlingMode === 2) {
            return $v_0 >= this.m_MaxTagsToResolve;
        }
        else {
            return $v_0 >= this.m_MaxToResolve;
        }
    },
    
    get_$9N_1: function SP_UI_MicroFeed_AtMention$get_$9N_1() {
        var $v_0 = 0, $v_1 = 0;
        for ($v_1 = 0; $v_1 < this.$U_1.length; $v_1++) {
            if (this.$2_1.value.indexOf(this.$U_1[$v_1]) >= 0) {
                $v_0++;
            }
        }
        return $v_0 <= this.m_MaxTagsToResolve;
    },
    
    get_shouldProvideSuggestions: function SP_UI_MicroFeed_AtMention$get_shouldProvideSuggestions() {
        var $v_0 = this.get_$4j_1();
        var $v_1 = this.get_$2c_1();
        var $v_2 = 0;
        if ($v_0 === -1) {
            return false;
        }
        var $v_3 = -1;
        for ($v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_4 = $v_1[$v_2];
            if (this.$2_1.value.substr($v_0).startsWith($v_4)) {
                if (this.m_handlingMode === 2) {
                    if ($v_3 === -1) {
                        $v_3 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1);
                    }
                    if ($v_3 === $v_0 + $v_4.length) {
                        return true;
                    }
                }
                return false;
            }
        }
        return true;
    },
    
    get_$2c_1: function SP_UI_MicroFeed_AtMention$get_$2c_1() {
        if (this.m_handlingMode === 1) {
            return this.$2K_1;
        }
        else if (this.m_handlingMode === 2) {
            return this.$U_1;
        }
        else if (this.m_handlingMode === 3) {
            return this.$c_1;
        }
        else {
            return [];
        }
    },
    
    get_linkToEdit: function SP_UI_MicroFeed_AtMention$get_linkToEdit() {
        var $v_0 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1);
        for (var $v_1 = 0; $v_1 < this.$c_1.length; $v_1++) {
            var $v_2 = this.$c_1[$v_1];
            var $v_3 = this.$2_1.value.indexOf($v_2);
            if ($v_3 >= 0 && $v_3 < $v_0 && $v_3 + $v_2.length >= $v_0) {
                return $v_2;
            }
        }
        return null;
    },
    
    typeAheadKeyDownHandler: function SP_UI_MicroFeed_AtMention$typeAheadKeyDownHandler($p0) {
        if (this.m_handlingMode === 3) {
            this.$9V_1($p0);
            return;
        }
        SP.UI.MicroFeed.BaseAtMention.prototype.typeAheadKeyDownHandler.call(this, $p0);
    },
    
    $9E_1: function SP_UI_MicroFeed_AtMention$$9E_1($p0) {
        var $v_0 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1);
        var $$t_5 = this;
        window.setTimeout(function() {
            var $v_1 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition($$t_5.$2_1);
            var $v_2 = $$t_5.$5b_1($v_0, $v_1);
            var $v_3 = $v_2.toLowerCase();
            if ($v_3.startsWith('www.') || $v_3.startsWith('http://') || $v_3.startsWith('https://')) {
                $$t_5.m_handlingMode = 3;
                $$t_5.$7h_1($v_2, $v_0, $v_1);
            }
        }, 10);
    },
    
    $9V_1: function SP_UI_MicroFeed_AtMention$$9V_1($p0) {
        if (this.m_handlingMode !== 3) {
            return;
        }
        var $v_0 = this.get_$4j_1();
        var $v_1 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1);
        if ($p0.keyCode === 32 || $p0.keyCode === 13) {
            this.$7h_1(this.$5b_1($v_0, $v_1), $v_0, $v_1);
            if ($p0.keyCode === 13 && !$p0.shiftKey) {
                $p0.preventDefault();
            }
        }
    },
    
    $7h_1: function SP_UI_MicroFeed_AtMention$$7h_1($p0, $p1, $p2) {
        this.$4e_1($p0.length, $p1, false, $p0, $p0, true, $p2 - $p1 - $p0.length);
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID(this.$2_1.id);
        if ($v_0 === this.$2_1.id) {
            $v_0 = null;
        }
        SP.UI.MicroFeed.SPMicroFeed.$81($p0, $v_0);
    },
    
    linkUrlFromDisplayText: function SP_UI_MicroFeed_AtMention$linkUrlFromDisplayText($p0) {
        if (!$p0) {
            return null;
        }
        var $v_0 = this.$17_1['<' + $p0 + '>'];
        return ((!$v_0) ? null : $v_0.$3_0);
    },
    
    $9A_1: function SP_UI_MicroFeed_AtMention$$9A_1($p0, $p1) {
        var $v_0 = this.$2_1.value.indexOf($p0);
        var $v_1 = this.$2_1.value.indexOf($p1);
        if ($v_0 < 0) {
            if ($v_1 < 0) {
                return 0;
            }
            return 1;
        }
        if ($v_0 < $v_1 || $v_1 < 0) {
            return -1;
        }
        if ($v_0 > $v_1) {
            return 1;
        }
        return 0;
    },
    
    setPostContentAndDataLinks: function SP_UI_MicroFeed_AtMention$setPostContentAndDataLinks($p0) {
        this.$60_1($p0, null);
    },
    
    setElementHighlights: function SP_UI_MicroFeed_AtMention$setElementHighlights($p0) {
        this.$60_1(null, $p0);
    },
    
    $60_1: function SP_UI_MicroFeed_AtMention$$60_1($p0, $p1) {
        var $v_0 = '';
        var $v_1 = -1, $v_2 = -1;
        var $v_3 = 0, $v_4 = 0;
        var $v_5 = false;
        var $v_6 = {};
        var $v_7 = {};
        var $v_8 = {};
        var $v_9 = [];
        this.$2K_1.sort(this.$$d_$9A_1);
        if ($p0) {
            $p0.set_contentText('');
        }
        if ($p1) {
            $p1.innerHTML = '';
        }
        for ($v_3 = 0; $v_3 < this.$U_1.length; $v_3++) {
            Array.remove(this.$U_1, this.$U_1[$v_3]);
            $v_3--;
        }
        while (($v_2 = this.$8q_1($v_1 + 1)) >= 0) {
            $v_0 = this.$2_1.value.substring($v_1 + 1, $v_2);
            if ($p1 && $v_0 !== '') {
                $p1.appendChild(document.createTextNode(SP.UI.MicroFeed.AtMention.$4I($v_0)));
            }
            if ($p0) {
                $p0.set_contentText($p0.get_contentText() + SP.UI.MicroFeed.AtMention.$3w($v_0));
            }
            $v_1 = $v_2;
            if (this.$2_1.value.charAt($v_2) === '@') {
                var $$t_C, $$t_D;
                $v_5 = (($$t_D = this.$4f_1(0, ($$t_C = {'val': $v_1}), $p1, $p0, $v_7, true, $v_9)), $v_1 = $$t_C.val, $$t_D);
            }
            else if (this.$2_1.value.charAt($v_2) === '#') {
                var $$t_E, $$t_F;
                $v_5 = (($$t_F = this.$4f_1(1, ($$t_E = {'val': $v_1}), $p1, $p0, $v_6, true, $v_9)), $v_1 = $$t_E.val, $$t_F);
            }
            else if (this.$2_1.value.charAt($v_2) === '<') {
                var $$t_G, $$t_H;
                $v_5 = (($$t_H = this.$4f_1(2, ($$t_G = {'val': $v_1}), $p1, $p0, $v_8, false, $v_9)), $v_1 = $$t_G.val, $$t_H);
            }
            if (!$v_5) {
                $v_0 = this.$2_1.value.charAt($v_2);
                if ($p1) {
                    $p1.appendChild(document.createTextNode(SP.UI.MicroFeed.AtMention.$4I($v_0)));
                }
                if ($p0) {
                    $p0.set_contentText($p0.get_contentText() + SP.UI.MicroFeed.AtMention.$3w($v_0));
                }
            }
        }
        $v_0 = this.$2_1.value.substr($v_1 + 1);
        if ($p1 && $v_0 !== '') {
            $p1.appendChild(document.createTextNode(SP.UI.MicroFeed.AtMention.$4I($v_0)));
        }
        if ($p0) {
            $p0.set_contentText($p0.get_contentText() + SP.UI.MicroFeed.AtMention.$3w($v_0));
            $p0.set_contentItems(new Array($v_9.length));
            for ($v_4 = 0; $v_4 < $v_9.length; $v_4++) {
                $p0.get_contentItems()[$v_4] = $v_9[$v_4];
            }
        }
    },
    
    $4f_1: function SP_UI_MicroFeed_AtMention$$4f_1($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = 0;
        var $v_1 = '';
        var $v_2 = '';
        var $v_3 = '';
        var $v_4 = [];
        var $v_5 = {};
        this.$4o_1 = $p2;
        var $v_6 = '';
        switch ($p0) {
            case 0:
                $v_4 = this.$2K_1;
                $v_5 = this.$3D_1;
                break;
            case 1:
                $v_4 = this.$U_1;
                $v_5 = this.$2L_1;
                break;
            case 2:
                $v_4 = this.$c_1;
                $v_5 = this.$17_1;
                break;
        }
        var $v_7 = $v_4.length;
        if ($p0 === 1) {
            $v_7 = Math.min($v_7, this.m_MaxTagsToResolve);
        }
        else if ($p0 !== 2) {
            $v_7 = Math.min($v_7, this.m_MaxToResolve);
        }
        for ($v_0 = 0; $v_0 < $v_7; $v_0++) {
            $v_3 = $v_4[$v_0];
            if (this.$2_1.value.substr($p1.val).startsWith($v_3) && ($p5 || !$p4[$v_3])) {
                if ($p0 === 1) {
                    var $v_8 = this.$2_1.value.substr($p1.val + $v_3.length, 1);
                    if (!SP.ScriptHelpers.isNullOrEmptyString($v_8) && $v_8.search(SP.UI.MicroFeed.BaseAtMention.disallowedHashTagCharsRegex) === -1) {
                        continue;
                    }
                }
                $v_1 = ($v_5[$v_3]).$a_0;
                $v_2 = ($v_5[$v_3]).$3_0;
                if ($p3) {
                    switch ($p0) {
                        case 0:
                            $p3.set_contentText($p3.get_contentText() + '@');
                            break;
                    }
                    if ($p4 && $p4[$v_3]) {
                        $v_6 = $p4[$v_3];
                    }
                    else {
                        $v_6 = this.$5o_1($p0, $v_1, $v_2, $p6);
                    }
                    $p3.set_contentText($p3.get_contentText() + $v_6);
                }
                this.$6z_1($p2, $v_3, $p1.val);
                $p1.val += $v_3.length - 1;
                if ($p4) {
                    $p4[$v_3] = $v_6;
                }
                return true;
            }
        }
        if ($p0 === 1) {
            var $v_9 = this.$2_1.value.substr($p1.val + 1);
            var $v_A = SP.UI.MicroFeed.BaseAtMention.getTagEndIndex($v_9, !!$p3);
            if ($v_A > 0) {
                $v_A += $p1.val + 1;
            }
            if ($v_A > $p1.val) {
                var $v_B = this.$2_1.value.substr($p1.val, $v_A - $p1.val);
                if ($v_B !== '') {
                    if (!Array.contains(this.$U_1, $v_B)) {
                        Array.add(this.$U_1, $v_B);
                        this.$2L_1[$v_B] = new SP.UI.MicroFeed.TextBoxElement($v_B, '00000000-0000-0000-0000-000000000000', 1);
                    }
                    if (!this.get_$9N_1()) {
                        SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
                        return false;
                    }
                    this.$8w_1($v_B, $p3, $p4, $p6);
                    this.$6z_1($p2, $v_B, $p1.val);
                    $p1.val += $v_B.length - 1;
                    return true;
                }
            }
        }
        return false;
    },
    
    $5o_1: function SP_UI_MicroFeed_AtMention$$5o_1($p0, $p1, $p2, $p3) {
        var $v_0 = new SP.Social.SocialDataItem();
        switch ($p0) {
            case 0:
                $v_0.set_itemType(0);
                $v_0.set_accountName($p2);
                break;
            case 1:
                $v_0.set_itemType(3);
                if (!SP.ScriptHelpers.isNullOrEmptyString($p2)) {
                    $v_0.set_tagGuid(new SP.Guid($p2));
                }
                break;
            case 2:
                if ($p2.toLowerCase().startsWith('www.')) {
                    $p2 = 'http://' + $p2;
                }
                $v_0.set_uri($p2);
                $v_0.set_itemType(4);
                break;
        }
        $v_0.set_text($p1);
        Array.add($p3, $v_0);
        return '{' + ($p3.length - 1).toString() + '}';
    },
    
    $6z_1: function SP_UI_MicroFeed_AtMention$$6z_1($p0, $p1, $p2) {
        if ($p0) {
            var $v_0 = null;
            $v_0 = document.createElement('span');
            $v_0.className = 'ms-microfeed-highlightedTextBoxElement';
            $v_0.iStart = $p2;
            $v_0.iEnd = $p2 + $p1.length;
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, $p1);
            $p0.appendChild($v_0);
        }
    },
    
    shouldCreateSuggestionDropdown: function SP_UI_MicroFeed_AtMention$shouldCreateSuggestionDropdown($p0) {
        if (this.m_handlingMode === 2 && this.$93_1($p0)) {
            return false;
        }
        else {
            return true;
        }
    },
    
    $93_1: function SP_UI_MicroFeed_AtMention$$93_1($p0) {
        if (this.m_handlingMode === 2 && this.$4o_1) {
            var $v_0 = this.$4o_1.firstChild;
            while ($v_0) {
                if ($v_0.nodeType === 1) {
                    var $v_1 = $v_0.iStart;
                    var $v_2 = $v_0.iEnd;
                    var $v_3 = $p0.prefix.length;
                    if ($p0.triggerPosition === $v_1 && $v_1 + $v_3 < $v_2) {
                        return true;
                    }
                }
                $v_0 = $v_0.nextSibling;
            }
        }
        return false;
    },
    
    $8w_1: function SP_UI_MicroFeed_AtMention$$8w_1($p0, $p1, $p2, $p3) {
        if ($p1) {
            var $v_0 = this.$5o_1(1, $p0, '', $p3);
            $p1.set_contentText($p1.get_contentText() + $v_0);
            if ($p2) {
                $p2[$p0] = $v_0;
            }
        }
    },
    
    $8q_1: function SP_UI_MicroFeed_AtMention$$8q_1($p0) {
        var $v_0 = -1;
        var $v_1 = -1;
        var $v_2 = -1;
        var $v_3 = -1;
        $v_2 = this.$2_1.value.indexOf('#', $p0);
        $v_1 = this.$2_1.value.indexOf('@', $p0);
        $v_3 = this.$2_1.value.indexOf('<', $p0);
        if ($v_2 < 0) {
            $v_0 = $v_1;
        }
        else if ($v_1 < 0) {
            $v_0 = $v_2;
        }
        else {
            $v_0 = Math.min($v_1, $v_2);
        }
        if ($v_3 >= 0 && $v_0 < 0) {
            $v_0 = $v_3;
        }
        else if ($v_3 >= 0) {
            $v_0 = Math.min($v_3, $v_0);
        }
        return $v_0;
    },
    
    reset: function SP_UI_MicroFeed_AtMention$reset() {
        SP.UI.MicroFeed.BaseAtMention.prototype.reset.call(this);
        this.$3D_1 = {};
        this.$2K_1 = [];
        this.$2L_1 = {};
        this.$U_1 = [];
        this.$17_1 = {};
        this.$c_1 = [];
    },
    
    onElementSelected: function SP_UI_MicroFeed_AtMention$onElementSelected($p0, $p1, $p2) {
        this.$4e_1($p0.prefix.length, $p0.triggerPosition, $p2, $p1.displayName, $p1.alias, true, 0);
    },
    
    sendFocusBackToOwnerControl: function SP_UI_MicroFeed_AtMention$sendFocusBackToOwnerControl($p0) {
        SP.UI.MySiteCommon.CommonUIElements.setCursorPosition(this.$2_1, $p0.triggerPosition + $p0.prefix.length + 1);
    },
    
    addTextAreaElement: function SP_UI_MicroFeed_AtMention$addTextAreaElement($p0, $p1, $p2, $p3) {
        this.m_handlingMode = $p0;
        this.$4e_1(0, this.$2_1.value.length, false, $p1, $p2, $p3, 0);
    },
    
    $4e_1: function SP_UI_MicroFeed_AtMention$$4e_1($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = '';
        if (this.m_handlingMode === 1) {
            $v_0 = '@[' + $p3 + ']';
        }
        else if (this.m_handlingMode === 2) {
            $v_0 = $p3;
        }
        else if (this.m_handlingMode === 3 && !this.hasLinkWithDisplayText($p3)) {
            $v_0 = '<' + $p3 + '>';
        }
        else {
            return;
        }
        if (!Array.contains(this.get_$2c_1(), $v_0)) {
            Array.add(this.get_$2c_1(), $v_0);
            if (this.m_handlingMode === 1) {
                this.$3D_1[$v_0] = new SP.UI.MicroFeed.TextBoxElement($p3, $p4, 0);
            }
            else if (this.m_handlingMode === 2) {
                this.$2L_1[$v_0] = new SP.UI.MicroFeed.TextBoxElement($p3, $p4, 1);
            }
            else if (this.m_handlingMode === 3) {
                this.$17_1[$v_0] = new SP.UI.MicroFeed.TextBoxElement($p3, $p4, 2);
            }
        }
        if ($p2) {
            $v_0 += ' ';
        }
        this.$7s_1($v_0, $p1, $p0, $p5, $p6);
        SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
    },
    
    hasLinkWithDisplayText: function SP_UI_MicroFeed_AtMention$hasLinkWithDisplayText($p0) {
        return !!this.getLinkWithDisplayText($p0);
    },
    
    getLinkWithDisplayText: function SP_UI_MicroFeed_AtMention$getLinkWithDisplayText($p0) {
        var $v_0 = '<' + $p0 + '>';
        if (this.$2_1.value.indexOf($v_0) >= 0 && Array.contains(this.$c_1, $v_0)) {
            var $v_1 = this.$17_1[$v_0];
            if ($v_1) {
                return $v_1.$3_0;
            }
        }
        return null;
    },
    
    updateLinkSelection: function SP_UI_MicroFeed_AtMention$updateLinkSelection($p0, $p1, $p2) {
        var $v_0 = '<' + $p0 + '>';
        var $v_1 = '<' + $p1 + '>';
        if (!Array.contains(this.$c_1, $v_0)) {
            return;
        }
        this.$17_1[$v_1] = new SP.UI.MicroFeed.TextBoxElement($p1, $p2, 2);
        if ($v_0 !== $v_1) {
            Array.remove(this.$c_1, $v_0);
            Array.add(this.$c_1, $v_1);
            this.$17_1[$v_0] = null;
            this.$2_1.value = this.$2_1.value.replace($v_0, $v_1);
            this.$4l_1();
        }
        SP.UI.MySiteCommon.CommonUIElements.setCursorPosition(this.$2_1, this.$2_1.value.indexOf($v_1) + $v_1.length);
    },
    
    updateOwnerControlWithNewText: function SP_UI_MicroFeed_AtMention$updateOwnerControlWithNewText($p0, $p1) {
        this.$7s_1($p0, $p1.triggerPosition, $p1.prefix.length, true, 0);
    },
    
    $7s_1: function SP_UI_MicroFeed_AtMention$$7s_1($p0, $p1, $p2, $p3, $p4) {
        this.$2_1.value = this.$2_1.value.substring(0, $p1) + $p0 + this.$2_1.value.substr($p1 + $p2 + ((this.m_handlingMode === 3) ? 0 : 1));
        this.$4l_1();
        if ($p3) {
            SP.UI.MySiteCommon.CommonUIElements.setCursorPosition(this.$2_1, Math.min(($p1 + $p0.length + $p4), this.$2_1.value.length));
        }
    },
    
    $8F_1: function SP_UI_MicroFeed_AtMention$$8F_1($p0, $p1) {
        if (this.m_handlingMode === 2) {
            return this.$2_1.value.substring($p0, $p1);
        }
        else {
            return this.$2_1.value.substring($p0 + 1, $p1);
        }
    },
    
    $5b_1: function SP_UI_MicroFeed_AtMention$$5b_1($p0, $p1) {
        var $v_0 = this.$2_1.value.substring($p0, $p1);
        var $v_1;
        for ($v_1 = $v_0.length; $v_1 >= 0; $v_1--) {
            var $v_2 = $v_0.charAt($v_1 - 1);
            if ($v_2 !== '.' && $v_2 !== '!' && $v_2 !== '?' && $v_2 !== ',' && $v_2 !== ';' && $v_2 !== ':' && $v_2 !== '\"' && $v_2 !== '\'' && $v_2 !== '<' && $v_2 !== '>' && $v_2 !== '(' && $v_2 !== ')' && $v_2 !== '[' && $v_2 !== ']' && $v_2 !== '{' && $v_2 !== '}' && $v_2 !== ' ' && $v_2 !== '\n' && $v_2 !== '\r' && $v_2 !== '\t') {
                break;
            }
        }
        return $v_0.substr(0, ($v_1 >= 0) ? $v_1 : 0);
    },
    
    get_dropDownBeforeSibling: function SP_UI_MicroFeed_AtMention$get_dropDownBeforeSibling() {
        return this.$2_1;
    },
    
    addAdditionalWarningMessages: function SP_UI_MicroFeed_AtMention$addAdditionalWarningMessages($p0, $p1) {
        if (this.m_handlingMode === 1) {
            var $v_0 = STSHtmlDecode(this.$2_1.getAttribute('targetDisplayName'));
            if (!SP.ScriptHelpers.isNullOrEmptyString($v_0)) {
                this.addMentionsWarningTextWhenTargetting($p1, $v_0);
            }
        }
        return true;
    },
    
    calculateCurrentState: function SP_UI_MicroFeed_AtMention$calculateCurrentState() {
        var $v_0 = this.get_$4j_1();
        var $v_1 = SP.UI.MySiteCommon.CommonUIElements.getCursorPosition(this.$2_1);
        var $v_2 = new SP.UI.MicroFeed.OwnerControlState();
        $v_2.triggerPosition = $v_0;
        $v_2.prefix = this.$8F_1($v_0, $v_1);
        return $v_2;
    }
}


SP.UI.MicroFeed.TextBoxElement = function SP_UI_MicroFeed_TextBoxElement(displayName, identifier, type) {
    this.$a_0 = displayName;
    this.$3_0 = identifier;
    this.$1N_0 = type;
    this.$2H_0 = '';
}
SP.UI.MicroFeed.TextBoxElement.$8G = function SP_UI_MicroFeed_TextBoxElement$$8G($p0, $p1) {
    var $v_0 = $p0;
    var $v_1 = $p1;
    var $v_2 = $v_0.$a_0.toLowerCase();
    var $v_3 = $v_1.$a_0.toLowerCase();
    var $v_4 = $v_2.localeCompare($v_3);
    if ($v_4) {
        return $v_4;
    }
    $v_2 = $v_0.$3_0.toLowerCase();
    $v_3 = $v_1.$3_0.toLowerCase();
    return $v_2.localeCompare($v_3);
}
SP.UI.MicroFeed.TextBoxElement.prototype = {
    $a_0: null,
    $3_0: null,
    $1N_0: 0,
    $2H_0: null,
    
    get_displayName: function SP_UI_MicroFeed_TextBoxElement$get_displayName() {
        return this.$a_0;
    },
    
    get_identifier: function SP_UI_MicroFeed_TextBoxElement$get_identifier() {
        return this.$3_0;
    },
    
    get_elementType: function SP_UI_MicroFeed_TextBoxElement$get_elementType() {
        return this.$1N_0;
    },
    
    get_description: function SP_UI_MicroFeed_TextBoxElement$get_description() {
        return this.$2H_0;
    },
    set_description: function SP_UI_MicroFeed_TextBoxElement$set_description(value) {
        this.$2H_0 = value;
        return value;
    },
    
    insertIntoSortedArray: function SP_UI_MicroFeed_TextBoxElement$insertIntoSortedArray(array) {
        var $v_0 = 0;
        if (!array) {
            array = [];
        }
        else if (array.length > 0) {
            $v_0 = this.$2Y_0(array, 0, array.length);
        }
        Array.insert(array, $v_0, this);
        return array;
    },
    
    removeFromSortedArray: function SP_UI_MicroFeed_TextBoxElement$removeFromSortedArray(array) {
        var $v_0 = 0;
        if (!array) {
            array = [];
        }
        else if (array.length > 0) {
            $v_0 = this.$2Y_0(array, 0, array.length);
        }
        if ($v_0 > -1 && $v_0 < array.length) {
            var $v_1 = array[$v_0];
            if ($v_1.$1N_0 === this.$1N_0 && $v_1.$3_0 === this.$3_0) {
                Array.removeAt(array, $v_0);
            }
        }
        return array;
    },
    
    $2Y_0: function SP_UI_MicroFeed_TextBoxElement$$2Y_0($p0, $p1, $p2) {
        if ($p1 === $p2) {
            return $p1;
        }
        var $v_0 = Math.floor(($p1 + $p2) / 2);
        var $v_1 = SP.UI.MicroFeed.TextBoxElement.$8G($p0[$v_0], this);
        if ($v_1 < 0) {
            return this.$2Y_0($p0, $v_0 + 1, $p2);
        }
        else if ($v_1 > 0) {
            return this.$2Y_0($p0, $p1, $v_0);
        }
        return $v_0;
    }
}


SP.UI.MicroFeed.BaseAtMention = function SP_UI_MicroFeed_BaseAtMention(maxToResolve) {
    this.$$d_$9C_0 = Function.createDelegate(this, this.$9C_0);
    this.$$d_$7T_0 = Function.createDelegate(this, this.$7T_0);
    this.$$d_$9B_0 = Function.createDelegate(this, this.$9B_0);
    this.$$d_$9D_0 = Function.createDelegate(this, this.$9D_0);
    this.$$d_$9T_0 = Function.createDelegate(this, this.$9T_0);
    this.$$d_typeAheadKeyUpHandler = Function.createDelegate(this, this.typeAheadKeyUpHandler);
    this.m_handlingMode = 0;
    this.m_MaxToResolve = maxToResolve;
}
SP.UI.MicroFeed.BaseAtMention.get_$1V = function SP_UI_MicroFeed_BaseAtMention$get_$1V() {
    if (!SP.UI.MicroFeed.BaseAtMention.$3X) {
        SP.UI.MicroFeed.BaseAtMention.$3X = new SP.UI.MicroFeed.AllUsersSuggestionManager(SP.UI.MicroFeed.BaseAtMention.$2M);
    }
    return SP.UI.MicroFeed.BaseAtMention.$3X;
}
SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector = function SP_UI_MicroFeed_BaseAtMention$removeSuggestionSelector() {
    SP.UI.MicroFeed.BaseAtMention.$7d();
    SP.UI.MicroFeed.BaseAtMention.$7e();
}
SP.UI.MicroFeed.BaseAtMention.$7d = function SP_UI_MicroFeed_BaseAtMention$$7d() {
    var $v_0 = $get(SP.UI.MicroFeed.BaseAtMention.$1c);
    if ($v_0 && $v_0.parentNode) {
        $v_0.parentNode.removeChild($v_0);
    }
}
SP.UI.MicroFeed.BaseAtMention.$7e = function SP_UI_MicroFeed_BaseAtMention$$7e() {
    if (SP.UI.MicroFeed.BaseAtMention.tagSuggestions) {
        SP.UI.MicroFeed.BaseAtMention.tagSuggestions.hidePanel();
    }
}
SP.UI.MicroFeed.BaseAtMention.$90 = function SP_UI_MicroFeed_BaseAtMention$$90($p0) {
    var $v_0 = $get(SP.UI.MicroFeed.BaseAtMention.$1c);
    var $v_1 = null;
    if ($v_0) {
        $v_1 = $v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$1U);
    }
    else if (SP.UI.MicroFeed.BaseAtMention.tagSuggestions) {
        $v_1 = SP.UI.MicroFeed.BaseAtMention.tagSuggestions[SP.UI.MicroFeed.BaseAtMention.$1U];
    }
    if ($v_1) {
        if (!SP.ScriptHelpers.isNullOrEmptyString($v_1)) {
            var $v_2 = $get($v_1);
            if ($v_2) {
                var $v_3 = $p0;
                while ($v_3) {
                    if ($v_3 === $v_2) {
                        return true;
                    }
                    $v_3 = $v_3.parentNode;
                }
            }
        }
    }
    return false;
}
SP.UI.MicroFeed.BaseAtMention.$73 = function SP_UI_MicroFeed_BaseAtMention$$73() {
    return !!$get(SP.UI.MicroFeed.BaseAtMention.$4k) || !!$get(SP.UI.MicroFeed.BaseAtMention.get_$1V().m_loadingAnimationIDForRequest);
}
SP.UI.MicroFeed.BaseAtMention.setFollowedPeople = function SP_UI_MicroFeed_BaseAtMention$setFollowedPeople(newFollowedPeopleList) {
    if (newFollowedPeopleList.get_areItemsAvailable()) {
        SP.UI.MicroFeed.BaseAtMention.$1E = [];
        var $$enum_1 = newFollowedPeopleList.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            SP.UI.People.PersonManager.addPerson($v_0);
            SP.UI.MicroFeed.BaseAtMention.addFollowedPerson($v_0.get_accountName(), $v_0.get_displayName());
        }
    }
}
SP.UI.MicroFeed.BaseAtMention.addFollowedPerson = function SP_UI_MicroFeed_BaseAtMention$addFollowedPerson(accountName, displayName) {
    new SP.UI.MicroFeed.TextBoxElement(displayName, accountName, 0).insertIntoSortedArray(SP.UI.MicroFeed.BaseAtMention.$1E);
}
SP.UI.MicroFeed.BaseAtMention.removeFollowedPerson = function SP_UI_MicroFeed_BaseAtMention$removeFollowedPerson(accountName, displayName) {
    new SP.UI.MicroFeed.TextBoxElement(displayName, accountName, 0).removeFromSortedArray(SP.UI.MicroFeed.BaseAtMention.$1E);
}
SP.UI.MicroFeed.BaseAtMention.$7v = function SP_UI_MicroFeed_BaseAtMention$$7v($p0) {
    if ($p0.indexOf(';') !== -1 || $p0.indexOf('<') !== -1 || $p0.indexOf('>') !== -1 || $p0.indexOf('|') !== -1 || $p0.indexOf('\t') !== -1 || $p0.indexOf('\n') !== -1 || $p0.indexOf('\r') !== -1 || $p0.startsWith(' ')) {
        return false;
    }
    var $v_0 = $p0.split(' ');
    if ($v_0.length > 3) {
        return false;
    }
    return true;
}
SP.UI.MicroFeed.BaseAtMention.$9e = function SP_UI_MicroFeed_BaseAtMention$$9e($p0) {
    if ($p0.indexOf('\n') !== -1 || $p0.indexOf('\r') !== -1 || $p0.startsWith('\t') || $p0.startsWith(' ')) {
        return false;
    }
    return true;
}
SP.UI.MicroFeed.BaseAtMention.$8t = function SP_UI_MicroFeed_BaseAtMention$$8t() {
    var $v_0 = window._spPageContextInfo;
    if ($v_0) {
        var $v_1 = $v_0.webServerRelativeUrl;
        if (!$v_1.endsWith('/')) {
            $v_1 += '/';
        }
        return $v_1 + '_vti_bin/taxonomyinternalservice.json';
    }
    else {
        return '';
    }
}
SP.UI.MicroFeed.BaseAtMention.$8l = function SP_UI_MicroFeed_BaseAtMention$$8l() {
    var $v_0 = 1033;
    var $v_1 = window._spPageContextInfo;
    if ($v_1) {
        $v_0 = $v_1.currentLanguage;
    }
    return $v_0;
}
SP.UI.MicroFeed.BaseAtMention.getTagEndIndex = function SP_UI_MicroFeed_BaseAtMention$getTagEndIndex(potentialTag, isSubmitPost) {
    var $v_0 = potentialTag.search(SP.UI.MicroFeed.BaseAtMention.disallowedHashTagCharsRegex);
    if ($v_0 === -1 && isSubmitPost) {
        $v_0 = potentialTag.length;
    }
    return $v_0;
}
SP.UI.MicroFeed.BaseAtMention.prototype = {
    $q_0: 0,
    m_MaxToResolve: 0,
    m_MaxTagsToResolve: 6,
    m_LastGetTaxonomyFailed: false,
    
    get_isSuggestionMenuOpen: function SP_UI_MicroFeed_BaseAtMention$get_isSuggestionMenuOpen() {
        var $v_0 = $get(SP.UI.MicroFeed.BaseAtMention.$1c);
        return (!!$v_0 && $v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$1U) === this.get_ownerControlId()) || (!!SP.UI.MicroFeed.BaseAtMention.tagSuggestions && SP.UI.MicroFeed.BaseAtMention.tagSuggestions.get_isShowing());
    },
    
    reset: function SP_UI_MicroFeed_BaseAtMention$reset() {
        this.$q_0 = 0;
    },
    
    get_currentSelection: function SP_UI_MicroFeed_BaseAtMention$get_currentSelection() {
        if ($get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + 1)) {
            if (this.$q_0 > 0) {
                return this.getElementAt(this.$q_0);
            }
        }
        return null;
    },
    
    getElementAt: function SP_UI_MicroFeed_BaseAtMention$getElementAt(index) {
        var $v_0 = null;
        $v_0 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + index);
        if ($v_0) {
            var $v_1 = new SP.UI.MicroFeed.AtMentionMenuOption();
            $v_1.displayName = $v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$21);
            $v_1.alias = $v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$3l);
            return $v_1;
        }
        return null;
    },
    
    highlightElementFromDropDown: function SP_UI_MicroFeed_BaseAtMention$highlightElementFromDropDown(newSelectionIndex) {
        var $v_0 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + this.$q_0);
        var $v_1 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + newSelectionIndex);
        if (($v_0) && ($v_1)) {
            $v_0.className = $v_0.className.replace(SP.UI.MicroFeed.BaseAtMention.$3f, SP.UI.MicroFeed.BaseAtMention.$23);
            $v_0.removeAttribute('role');
            $v_1.className = $v_1.className.replace(SP.UI.MicroFeed.BaseAtMention.$23, SP.UI.MicroFeed.BaseAtMention.$3f);
            $v_1.setAttribute('role', 'alert');
            this.$q_0 = newSelectionIndex;
        }
    },
    
    shouldCreateSuggestionDropdown: function SP_UI_MicroFeed_BaseAtMention$shouldCreateSuggestionDropdown(state) {
        return true;
    },
    
    moveSuggestionDropDownToCurrentOwner: function SP_UI_MicroFeed_BaseAtMention$moveSuggestionDropDownToCurrentOwner() {
        var $v_0 = $get(SP.UI.MicroFeed.BaseAtMention.$1c);
        var $v_1 = null;
        if ($v_0 && $v_0.parentNode) {
            if ($v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$1U) === this.get_ownerControlId()) {
                $v_1 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$5G);
            }
            else {
                $v_0.parentNode.removeChild($v_0);
                $v_0 = null;
            }
        }
        if (!$v_0) {
            $v_0 = document.createElement('div');
            $v_0.id = SP.UI.MicroFeed.BaseAtMention.$1c;
            $v_0.className = 'ms-microfeed-mentionContainer';
            $v_0.setAttribute(SP.UI.MicroFeed.BaseAtMention.$1U, this.get_ownerControlId());
            this.$72_0($v_0);
        }
        if (!$v_1) {
            $v_1 = document.createElement('div');
            $v_1.id = this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$5G;
            $v_1.className = 'ms-microfeed-typeAheadSelectorsDiv';
            $v_1.setAttribute('aria-live', 'polite');
            $v_1.setAttribute('aria-relevant', 'all');
            $v_0.appendChild($v_1);
        }
        this.fullContainerChanged($v_0);
        return $v_1;
    },
    
    $72_0: function SP_UI_MicroFeed_BaseAtMention$$72_0($p0) {
        if (this.get_dropDownBeforeSibling() && this.get_dropDownBeforeSibling().parentNode) {
            this.get_dropDownBeforeSibling().parentNode.insertBefore($p0, this.get_dropDownBeforeSibling().nextSibling);
        }
    },
    
    fullContainerChanged: function SP_UI_MicroFeed_BaseAtMention$fullContainerChanged(fullContainer) {
    },
    
    buildSuggestionDropDown: function SP_UI_MicroFeed_BaseAtMention$buildSuggestionDropDown(state) {
        var $v_0 = this.get_shouldDisplayTooManyWarning();
        if (this.m_handlingMode === 2 && SP.UI.MicroFeed.BaseAtMention.$7v(state.prefix) && !$v_0) {
            SP.UI.MicroFeed.BaseAtMention.$7d();
            if (this.addAdditionalWarningMessages(state, null)) {
                this.$8h_0();
                this.$72_0(SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv);
                this.$9R_0(state.prefix);
                SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.elementPrefix = state.prefix;
                SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.triggerPosition = state.triggerPosition;
            }
            return;
        }
        SP.UI.MicroFeed.BaseAtMention.$7e();
        var $v_1 = this.moveSuggestionDropDownToCurrentOwner();
        var $v_2 = null;
        if (!$v_1) {
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
            return;
        }
        if (this.m_handlingMode === 1 && !SP.UI.MicroFeed.SPMicroFeed.$1Q) {
            SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(true);
        }
        $v_1.innerHTML = '';
        if ($v_0) {
            var $v_3 = null;
            if (this.m_handlingMode === 1) {
                $v_3 = SpsClient.ScriptResources.mentionsWarningText;
            }
            else if (this.m_handlingMode === 2) {
                $v_3 = String.format(SpsClient.ScriptResources.tooManyTagsWarning, this.m_MaxTagsToResolve);
            }
            if ($v_3) {
                this.appendDropdownWarning($v_1, $v_3, '_toomanymentionwarning', 'ms-microfeed-tooManyElementsWarning');
            }
            if (this.m_handlingMode === 2) {
                return;
            }
        }
        if (this.m_handlingMode === 1 && SP.UI.MicroFeed.BaseAtMention.$9e(state.prefix)) {
            if (this.addAdditionalWarningMessages(state, $v_1)) {
                this.$8A_0(state, $v_1);
            }
        }
        $v_2 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + '1');
        if ($v_2) {
            $v_2.className = $v_2.className.replace(SP.UI.MicroFeed.BaseAtMention.$23, SP.UI.MicroFeed.BaseAtMention.$3f);
            this.$q_0 = 1;
            var $$t_6 = this;
            $addHandler($v_1, 'click', function($p1_0) {
                $p1_0.stopPropagation();
            });
        }
        else if (!$get(this.get_ownerControlId() + '_taxonomynotavailablewarning') && !SP.UI.MicroFeed.BaseAtMention.$73()) {
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
        }
    },
    
    $8A_0: function SP_UI_MicroFeed_BaseAtMention$$8A_0($p0, $p1) {
        var $v_0 = 0;
        var $v_1 = false;
        var $v_2 = $p0.prefix;
        if (SP.UI.MicroFeed.BaseAtMention.$1E && SP.UI.MicroFeed.BaseAtMention.$1E.length) {
            for (var $$arr_5 = SP.UI.MicroFeed.BaseAtMention.$1E, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
                var $v_3 = $$arr_5[$$idx_7];
                if (!$v_3.$a_0.toLowerCase().startsWith($v_2.toLowerCase())) {
                    continue;
                }
                $v_0++;
                if (!$v_1) {
                    $p1.appendChild(this.$2b_0(SpsClient.ScriptResources.peopleFollowingLabel, '_FollowingHeadingDiv', null, null));
                    $v_1 = true;
                }
                $p1.appendChild(this.$3o_0($p0, $v_0, $v_3.$a_0, $v_3.$3_0, ''));
                if ($v_0 >= SP.UI.MicroFeed.BaseAtMention.$2M) {
                    break;
                }
            }
        }
        else if (!SP.UI.MicroFeed.BaseAtMention.$1E) {
            $p1.appendChild(this.$2b_0(SpsClient.ScriptResources.peopleFollowingLabel, '_FollowingHeadingDiv', SP.UI.MicroFeed.BaseAtMention.$4k, SpsClient.ScriptResources.loadingPeopleTitle));
        }
        $v_1 = false;
        if ($v_0 < SP.UI.MicroFeed.BaseAtMention.$2M) {
            var $v_4 = 0;
            var $v_5 = null;
            if (SP.UI.MicroFeed.BaseAtMention.get_$1V().$1n_0) {
                $p1.appendChild(this.$2b_0(SpsClient.ScriptResources.allPeopleLabel, '_CompanyHeadingDiv', SP.UI.MicroFeed.BaseAtMention.get_$1V().m_loadingAnimationIDForRequest, SpsClient.ScriptResources.loadingPeopleTitle));
                $v_1 = true;
            }
            if (!SP.UI.MicroFeed.BaseAtMention.get_$1V().$92_1($v_2)) {
                var $v_6 = SP.UI.MicroFeed.BaseAtMention.get_$1V().$8s_0($v_2.substr(0, 1));
                for ($v_4 = 0; $v_4 < $v_6.length; $v_4++) {
                    $v_5 = $v_6[$v_4];
                    if (!$v_5.$a_0.toLowerCase().startsWith($v_2.toLowerCase())) {
                        continue;
                    }
                    $v_0++;
                    if (!$v_1) {
                        $p1.appendChild(this.$2b_0(SpsClient.ScriptResources.allPeopleLabel, '_CompanyHeadingDiv', null, null));
                        $v_1 = true;
                    }
                    $p1.appendChild(this.$3o_0($p0, $v_0, $v_5.$a_0, $v_5.$3_0, $v_5.$2H_0));
                    if ($v_0 >= SP.UI.MicroFeed.BaseAtMention.$2M) {
                        break;
                    }
                }
            }
        }
    },
    
    createLinkElement: function SP_UI_MicroFeed_BaseAtMention$createLinkElement(state, index, displayName, linkId, linkText) {
        var $v_0 = this.$3o_0(state, index, '', '', '');
        $v_0.setAttribute(SP.UI.MicroFeed.BaseAtMention.$21, displayName);
        $v_0.className += ' ms-linkOptionDiv';
        var $v_1 = document.createElement('a');
        $v_1.id = linkId;
        $v_1.href = '#';
        $v_1.className = 'ms-commandLink';
        $v_1.setAttribute('onclick', 'return false;');
        $v_1.innerHTML = STSHtmlEncode(linkText);
        $v_0.appendChild($v_1);
        return $v_0;
    },
    
    appendDropdownWarning: function SP_UI_MicroFeed_BaseAtMention$appendDropdownWarning(selectorDiv, warningText, idSuffix, className) {
        var $v_0 = document.createElement('div');
        $v_0.id = this.get_ownerControlId() + idSuffix;
        $v_0.className = className;
        $v_0.style.height = 'auto';
        var $v_1 = document.createElement('span');
        $v_1.className = 'ms-microfeed-warningImage';
        $v_1.id = 'ms-DropdownWarningImage';
        var $v_2 = document.createElement('div');
        $v_2.id = 'ms-microfeed-warningText';
        $v_2.className = 'ms-microfeed-warningText';
        $v_2.appendChild(document.createTextNode(warningText));
        $v_0.appendChild($v_1);
        $v_0.appendChild($v_2);
        selectorDiv.appendChild($v_0);
    },
    
    $2b_0: function SP_UI_MicroFeed_BaseAtMention$$2b_0($p0, $p1, $p2, $p3) {
        var $v_0 = document.createElement('div');
        $v_0.id = this.get_ownerControlId() + $p1;
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, $p0);
        $v_0.className = 'ms-microfeed-followingHeadingDiv ms-soften';
        if ($p2) {
            var $v_1 = SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon($p2, 'ms-microfeed-loadingSuggestionImage');
            $p3 = $p3 || '';
            $v_1.alt = $p3;
            $v_1.title = $p3;
            $v_0.appendChild($v_1);
        }
        return $v_0;
    },
    
    $4h_0: function SP_UI_MicroFeed_BaseAtMention$$4h_0($p0, $p1, $p2) {
        if ($p1) {
            this.onElementSelected($p0, $p1, $p2);
        }
    },
    
    $3o_0: function SP_UI_MicroFeed_BaseAtMention$$3o_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = document.createElement('div');
        $v_0.id = this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + $p1;
        $v_0.className = 'ms-microfeed-mentionUserDiv ' + SP.UI.MicroFeed.BaseAtMention.$23;
        var $$t_8 = this;
        $addHandler($v_0, 'click', function($p1_0) {
            $$t_8.$4h_0($p0, $$t_8.getElementAt($p1), false);
        });
        $v_0.setAttribute(SP.UI.MicroFeed.BaseAtMention.$3l, $p3);
        $v_0.setAttribute(SP.UI.MicroFeed.BaseAtMention.$21, $p2);
        var $v_1 = $p2;
        if (!SP.ScriptHelpers.isNullOrEmptyString($p4)) {
            $v_1 = String.format(SpsClient.ScriptResources.nameAndDescriptionFormatString, $p2, $p4);
        }
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, $v_1);
        $addHandler($v_0, 'mouseover', this.$$d_$9T_0);
        return $v_0;
    },
    
    $9T_0: function SP_UI_MicroFeed_BaseAtMention$$9T_0($p0) {
        var $v_0 = $p0.target.id;
        this.highlightElementFromDropDown(parseInt($v_0.substr($v_0.lastIndexOf('_') + 1)));
    },
    
    correctDropdownState: function SP_UI_MicroFeed_BaseAtMention$correctDropdownState() {
        if (this.get_shouldProvideSuggestions()) {
            var $v_0 = this.calculateCurrentState();
            if (this.shouldCreateSuggestionDropdown($v_0)) {
                this.buildSuggestionDropDown($v_0);
            }
        }
        else {
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
        }
    },
    
    $7b_0: function SP_UI_MicroFeed_BaseAtMention$$7b_0($p0, $p1) {
        var $$t_3 = this;
        $p0.$99_0($p1.prefix, function() {
            if ($$t_3.get_shouldProvideSuggestions()) {
                var $v_0 = $$t_3.calculateCurrentState();
                $$t_3.$7b_0($p0, $v_0);
            }
            $$t_3.correctDropdownState();
        });
    },
    
    typeAheadKeyDownHandler: function SP_UI_MicroFeed_BaseAtMention$typeAheadKeyDownHandler(e) {
        if (!this.get_isSuggestionMenuOpen()) {
            return;
        }
        if (!this.get_shouldProvideSuggestions()) {
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
            return;
        }
        if (e.keyCode === 27) {
            e.preventDefault();
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
            return;
        }
        if (e.keyCode === 38 || e.keyCode === 40) {
            this.$8D_0(e.keyCode === 38);
            e.preventDefault();
            return;
        }
        if (e.keyCode === 13 && !e.shiftKey) {
            if (SP.UI.MicroFeed.BaseAtMention.tagSuggestions && SP.UI.MicroFeed.BaseAtMention.tagSuggestions.get_isShowing()) {
                this.$8i_0();
            }
            if ($get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + 1)) {
                this.$4h_0(this.calculateCurrentState(), this.get_currentSelection(), false);
            }
            e.preventDefault();
            e.stopPropagation();
        }
    },
    
    typeAheadKeyUpHandler: function SP_UI_MicroFeed_BaseAtMention$typeAheadKeyUpHandler(e) {
        if (!this.get_shouldProvideSuggestions() || e.keyCode === 27 || e.keyCode === 13) {
            SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
            return;
        }
        if (e.keyCode === 38 || e.keyCode === 40) {
            if (this.get_isSuggestionMenuOpen()) {
                var $v_1 = 1;
                if (e.keyCode === 38) {
                    $v_1 = this.$q_0 - 1;
                }
                else {
                    $v_1 = this.$q_0 + 1;
                }
                this.highlightElementFromDropDown($v_1);
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }
        var $v_0 = this.calculateCurrentState();
        if (this.m_handlingMode === 1) {
            this.$7b_0(SP.UI.MicroFeed.BaseAtMention.get_$1V(), $v_0);
        }
        if (this.m_handlingMode === 2) {
            if (!SP.UI.MicroFeed.BaseAtMention.$7v($v_0.prefix)) {
                SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
                return;
            }
        }
        if (e.keyCode === 32 && this.m_handlingMode !== 2) {
            var $v_2 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + '2');
            if (this.m_handlingMode === 1 && !$v_2) {
                if (this.$8X_0($v_0.prefix)) {
                    this.$4h_0($v_0, this.get_currentSelection(), true);
                    return;
                }
                else if (!$get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + '1') && !SP.UI.MicroFeed.BaseAtMention.$73()) {
                    SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
                    return;
                }
            }
        }
        if (this.shouldCreateSuggestionDropdown($v_0)) {
            this.buildSuggestionDropDown($v_0);
        }
    },
    
    $8X_0: function SP_UI_MicroFeed_BaseAtMention$$8X_0($p0) {
        var $v_0 = $get(this.get_ownerControlId() + SP.UI.MicroFeed.BaseAtMention.$R + this.$q_0);
        if (!$v_0) {
            return false;
        }
        return $p0.toLowerCase() === (($v_0.getAttribute(SP.UI.MicroFeed.BaseAtMention.$21)).toLowerCase() + ' ');
    },
    
    $9Q_0: function SP_UI_MicroFeed_BaseAtMention$$9Q_0($p0) {
        var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, $p0);
        $v_0.set_hideCancelButton(true);
        $v_0.show();
    },
    
    addMentionsWarningTextWhenTargetting: function SP_UI_MicroFeed_BaseAtMention$addMentionsWarningTextWhenTargetting(selectorDiv, targetName) {
        this.addStandardDropdownWarning(selectorDiv, String.format(SpsClient.ScriptResources.mentionsWarningTextWhenTargetting, targetName), '_targetmentionwarning');
    },
    
    addStandardDropdownWarning: function SP_UI_MicroFeed_BaseAtMention$addStandardDropdownWarning(selectorDiv, message, idSufix) {
        this.appendDropdownWarning(selectorDiv, message, idSufix, 'ms-microfeed-tooManyElementsWarning');
    },
    
    $9R_0: function SP_UI_MicroFeed_BaseAtMention$$9R_0($p0) {
        if (SP.ScriptHelpers.isNullOrEmptyString($p0) || $p0 === '#') {
            return;
        }
        var $v_0 = {};
        $v_0['start'] = $p0;
        $v_0['lcid'] = SP.UI.MicroFeed.BaseAtMention.$8l();
        $v_0['sspList'] = '00000000-0000-0000-0000-000000000000';
        $v_0['termSetList'] = '3CEB0050-69A1-40E7-A427-83E2FAC80C27';
        $v_0['anchorId'] = '00000000-0000-0000-0000-000000000000';
        $v_0['isSpanTermStores'] = false;
        $v_0['isSpanTermSets'] = false;
        $v_0['isIncludeUnavailable'] = false;
        $v_0['isIncludeDeprecated'] = false;
        $v_0['isAddTerms'] = false;
        $v_0['isIncludePathData'] = false;
        $v_0['excludeKeyword'] = true;
        $v_0['excludedTermset'] = '00000000-0000-0000-0000-000000000000';
        var $v_1 = SP.UI.MicroFeed.BaseAtMention.$8t();
        if (!SP.ScriptHelpers.isNullOrEmptyString($v_1)) {
            Sys.Net.WebServiceProxy.invoke($v_1, 'GetSuggestions', false, $v_0, this.$$d_$9D_0, this.$$d_$9B_0, $p0, Sys.Net.WebRequestManager.get_defaultTimeout(), false, null);
        }
    },
    
    $9D_0: function SP_UI_MicroFeed_BaseAtMention$$9D_0($p0, $p1, $p2) {
        this.m_LastGetTaxonomyFailed = false;
        if (!SP.UI.MicroFeed.BaseAtMention.tagSuggestions) {
            return;
        }
        var $v_0 = $p1;
        if (!SP.ScriptHelpers.isNullOrEmptyString($v_0)) {
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.updateSuggestionsWithTaxonomyResult($p0, $v_0, $v_0, {}, true);
        }
        else {
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.hidePanel();
        }
    },
    
    $9B_0: function SP_UI_MicroFeed_BaseAtMention$$9B_0($p0, $p1, $p2) {
        if (!this.m_LastGetTaxonomyFailed) {
            this.$9Q_0(SpsClient.ScriptResources.taxonomyNotAvailableWarning);
            this.m_LastGetTaxonomyFailed = true;
        }
    },
    
    $8h_0: function SP_UI_MicroFeed_BaseAtMention$$8h_0() {
        if (!SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv || !SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.parentNode) {
            SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv = document.createElement('DIV');
            SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.id = 'HashTagSuggestionsContainer';
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions = new Microsoft.SharePoint.Taxonomy.SuggestionContainer(SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv);
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.hidePanel();
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions[SP.UI.MicroFeed.BaseAtMention.$1U] = this.get_ownerControlId();
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.set_isSpanTermSets(true);
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.add_selectionMade(this.$$d_$7T_0);
            Sys.Net.WebRequestManager.add_invokingRequest(this.$$d_$9C_0);
        }
    },
    
    $7T_0: function SP_UI_MicroFeed_BaseAtMention$$7T_0($p0, $p1) {
        if ($p1) {
            var $v_0 = this.calculateCurrentState();
            var $v_1 = new SP.UI.MicroFeed.AtMentionMenuOption();
            var $v_2 = $p1.results;
            if ($v_2) {
                var $v_3 = SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.triggerPosition;
                var $v_4 = SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv.elementPrefix;
                var $v_5 = new Microsoft.SharePoint.Taxonomy.Term($v_2);
                $v_1.alias = $v_5.get_guid();
                $v_1.displayName = $v_5.get_text();
            }
            this.onElementSelected($v_0, $v_1, false);
        }
    },
    
    $9C_0: function SP_UI_MicroFeed_BaseAtMention$$9C_0($p0, $p1) {
        if (!SP.ScriptHelpers.isUndefined(window._spPageContextInfo) && !SP.ScriptHelpers.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptHelpers.isUndefined(window.UpdateFormDigest)) {
            var $v_1 = _spPageContextInfo.webServerRelativeUrl;
            var $v_2 = window._spFormDigestRefreshInterval;
            UpdateFormDigest($v_1, $v_2);
        }
        var $v_0 = $get('__REQUESTDIGEST');
        if ($v_0) {
            $p1.get_webRequest().get_headers()['X-RequestDigest'] = ($v_0).value;
        }
    },
    
    $8D_0: function SP_UI_MicroFeed_BaseAtMention$$8D_0($p0) {
        if (SP.UI.MicroFeed.BaseAtMention.tagSuggestions && SP.UI.MicroFeed.BaseAtMention.tagSuggestions.get_isShowing()) {
            SP.UI.MicroFeed.BaseAtMention.tagSuggestions.toggleHighlight($p0);
        }
    },
    
    $8i_0: function SP_UI_MicroFeed_BaseAtMention$$8i_0() {
        if (SP.UI.MicroFeed.BaseAtMention.tagSuggestions && SP.UI.MicroFeed.BaseAtMention.tagSuggestions.get_isShowing()) {
            var $v_0 = SP.UI.MicroFeed.BaseAtMention.tagSuggestions.getHighlightedSuggestion();
            if ($v_0) {
                var $v_1 = new Microsoft.SharePoint.Taxonomy.SelectionMadeEventArgs($v_0.get_suggestValue());
                this.$7T_0(null, $v_1);
            }
        }
    }
}


SP.UI.MicroFeed.AtMentionMenuOption = function SP_UI_MicroFeed_AtMentionMenuOption() {
}
SP.UI.MicroFeed.AtMentionMenuOption.prototype = {
    displayName: null,
    alias: null
}


SP.UI.MicroFeed.OwnerControlState = function SP_UI_MicroFeed_OwnerControlState() {
}
SP.UI.MicroFeed.OwnerControlState.prototype = {
    prefix: null,
    triggerPosition: 0
}


SP.UI.MicroFeed.SocialActorCache = function SP_UI_MicroFeed_SocialActorCache() {
    this.$3i_0 = {};
}
SP.UI.MicroFeed.SocialActorCache.get_actorCache = function SP_UI_MicroFeed_SocialActorCache$get_actorCache() {
    if (!SP.UI.MicroFeed.SocialActorCache.$11) {
        SP.UI.MicroFeed.SocialActorCache.$11 = new SP.UI.MicroFeed.SocialActorCache();
    }
    return SP.UI.MicroFeed.SocialActorCache.$11;
}
SP.UI.MicroFeed.SocialActorCache.isFollowedByMe = function SP_UI_MicroFeed_SocialActorCache$isFollowedByMe(id) {
    if (!id) {
        return false;
    }
    return SP.UI.MicroFeed.SocialActorCache.get_actorCache().$3i_0[id];
}
SP.UI.MicroFeed.SocialActorCache.setIsFollowedByMeValue = function SP_UI_MicroFeed_SocialActorCache$setIsFollowedByMeValue(tagEntity, followed) {
    if (!tagEntity) {
        return;
    }
    SP.UI.MicroFeed.SocialActorCache.get_actorCache().$3i_0[tagEntity.get_id()] = followed;
}
SP.UI.MicroFeed.SocialActorCache.prototype = {
    $3i_0: null
}


SP.UI.MicroFeed.MicrofeedThreadCache = function SP_UI_MicroFeed_MicrofeedThreadCache() {
    this.$C_0 = {};
}
SP.UI.MicroFeed.MicrofeedThreadCache.get_threadCache = function SP_UI_MicroFeed_MicrofeedThreadCache$get_threadCache() {
    if (!SP.UI.MicroFeed.MicrofeedThreadCache.$11) {
        SP.UI.MicroFeed.MicrofeedThreadCache.$11 = new SP.UI.MicroFeed.MicrofeedThreadCache();
    }
    return SP.UI.MicroFeed.MicrofeedThreadCache.$11;
}
SP.UI.MicroFeed.MicrofeedThreadCache.getThreadById = function SP_UI_MicroFeed_MicrofeedThreadCache$getThreadById(id) {
    if (!id) {
        return null;
    }
    return SP.UI.MicroFeed.MicrofeedThreadCache.get_threadCache().$C_0[id];
}
SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate = function SP_UI_MicroFeed_MicrofeedThreadCache$addOrUpdate(thread, updateNewPostCount) {
    if (!thread) {
        return;
    }
    SP.UI.MicroFeed.MicrofeedThreadCache.$5Q(thread.get_actors());
    if (thread.get_postReference() && thread.get_postReference().get_digest()) {
        SP.UI.MicroFeed.MicrofeedThreadCache.$5Q(thread.get_postReference().get_digest().get_actors());
    }
    if (!thread.get_threadType() && thread.get_replies() && thread.get_replies().length < 2 && thread.get_replies().length !== thread.get_totalReplyCount()) {
        return;
    }
    if (!thread.get_actors().length) {
        return;
    }
    if (updateNewPostCount) {
        var $v_0 = SP.UI.MicroFeed.MicrofeedThreadCache.getThreadById(thread.get_id());
        if (!$v_0 || thread.get_totalReplyCount() !== $v_0.get_totalReplyCount() || thread.get_rootPost().get_modifiedTime().toString() !== $v_0.get_rootPost().get_modifiedTime().toString()) {
            SP.UI.MicroFeed.SPMicroFeed.microfeed.incrementNewPostCount();
        }
    }
    SP.UI.MicroFeed.MicrofeedThreadCache.get_threadCache().$C_0[thread.get_id()] = thread;
}
SP.UI.MicroFeed.MicrofeedThreadCache.$5Q = function SP_UI_MicroFeed_MicrofeedThreadCache$$5Q($p0) {
    for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_0 = $$arr_1[$$idx_3];
        if (!$v_0.get_actorType()) {
            SP.UI.People.PersonManager.addSocialActor($v_0);
        }
        else {
            SP.UI.MicroFeed.SocialActorCache.setIsFollowedByMeValue($v_0, $v_0.get_isFollowed());
        }
    }
}
SP.UI.MicroFeed.MicrofeedThreadCache.removeById = function SP_UI_MicroFeed_MicrofeedThreadCache$removeById(threadID) {
    if (!threadID) {
        return;
    }
    SP.UI.MicroFeed.MicrofeedThreadCache.get_threadCache().$C_0[threadID] = null;
}
SP.UI.MicroFeed.MicrofeedThreadCache.prototype = {
    $C_0: null
}


SP.UI.MicroFeed.MicrofeedThreadList = function SP_UI_MicroFeed_MicrofeedThreadList() {
    this.$C_0 = [];
    this.$37_0 = {};
}
SP.UI.MicroFeed.MicrofeedThreadList.prototype = {
    $C_0: null,
    $7B_0: false,
    $37_0: null,
    
    setThreadCollection: function SP_UI_MicroFeed_MicrofeedThreadList$setThreadCollection(threadCollection, updateNewPostCount, preventDuplicatesWithSameRoot) {
        if (threadCollection && threadCollection.get_threads()) {
            var $v_0 = 0;
            this.$7B_0 = preventDuplicatesWithSameRoot;
            Array.clear(this.$C_0);
            this.$37_0 = {};
            for ($v_0 = 0; $v_0 < threadCollection.get_threads().length; $v_0++) {
                var $v_1 = threadCollection.get_threads()[$v_0];
                this.add($v_1, updateNewPostCount, true);
            }
        }
    },
    
    appendThreadList: function SP_UI_MicroFeed_MicrofeedThreadList$appendThreadList(threadList) {
        this.$5c_0();
        if (!threadList || !threadList.sizeAfterRemovingRecentDeletions()) {
            return;
        }
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < threadList.size(); $v_1++) {
            $v_0 = threadList.get($v_1);
            if (!this.containsByID($v_0.get_id())) {
                this.add($v_0, false, false);
            }
        }
    },
    
    get: function SP_UI_MicroFeed_MicrofeedThreadList$get(index) {
        if (index < 0 || index >= this.$C_0.length) {
            return null;
        }
        return SP.UI.MicroFeed.MicrofeedThreadCache.getThreadById(this.$C_0[index]);
    },
    
    containsByID: function SP_UI_MicroFeed_MicrofeedThreadList$containsByID(threadID) {
        return this.$4g_0(threadID) > -1;
    },
    
    $5c_0: function SP_UI_MicroFeed_MicrofeedThreadList$$5c_0() {
        for (var $v_0 = 0; $v_0 < this.$C_0.length; $v_0++) {
            while ($v_0 < this.$C_0.length && !SP.UI.MicroFeed.MicrofeedThreadCache.getThreadById(this.$C_0[$v_0])) {
                Array.removeAt(this.$C_0, $v_0);
            }
        }
    },
    
    add: function SP_UI_MicroFeed_MicrofeedThreadList$add(thread, updateNewPostCount, updateCache) {
        if (updateCache) {
            SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate(thread, updateNewPostCount);
        }
        if (this.$7B_0) {
            var $v_0 = '';
            if (!thread.get_threadType()) {
                $v_0 = thread.get_rootPost().get_id();
            }
            else if (thread.get_postReference()) {
                $v_0 = thread.get_postReference().get_threadId();
            }
            else {
                return;
            }
            if (this.$37_0[$v_0]) {
                return;
            }
            this.$37_0[$v_0] = true;
        }
        Array.add(this.$C_0, thread.get_id());
    },
    
    addToFront: function SP_UI_MicroFeed_MicrofeedThreadList$addToFront(thread, updateNewPostCount) {
        SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate(thread, updateNewPostCount);
        Array.insert(this.$C_0, 0, thread.get_id());
    },
    
    moveToFront: function SP_UI_MicroFeed_MicrofeedThreadList$moveToFront(thread, updateNewPostCount) {
        SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate(thread, updateNewPostCount);
        var $v_0 = this.$4g_0(thread.get_id());
        if ($v_0 > -1) {
            Array.removeAt(this.$C_0, $v_0);
            Array.insert(this.$C_0, 0, thread.get_id());
        }
    },
    
    remove: function SP_UI_MicroFeed_MicrofeedThreadList$remove(thread) {
        var $v_0 = this.$4g_0(thread.get_id());
        if ($v_0 > -1) {
            Array.removeAt(this.$C_0, $v_0);
        }
    },
    
    $4g_0: function SP_UI_MicroFeed_MicrofeedThreadList$$4g_0($p0) {
        if (!$p0) {
            return -1;
        }
        for (var $v_0 = 0; $v_0 < this.$C_0.length; $v_0++) {
            if (this.$C_0[$v_0] === $p0) {
                return $v_0;
            }
        }
        return -1;
    },
    
    size: function SP_UI_MicroFeed_MicrofeedThreadList$size() {
        return this.$C_0.length;
    },
    
    sizeAfterRemovingRecentDeletions: function SP_UI_MicroFeed_MicrofeedThreadList$sizeAfterRemovingRecentDeletions() {
        this.$5c_0();
        return this.$C_0.length;
    }
}


SP.UI.MicroFeed.MicroFeedView = function SP_UI_MicroFeed_MicroFeedView() {
}
SP.UI.MicroFeed.MicroFeedView.createView = function SP_UI_MicroFeed_MicroFeedView$createView(visiblePosts, FeedToUse, FeedName, emptyFeedMsg, feedDescription) {
    var $v_0 = new SP.UI.MicroFeed.MicroFeedView();
    $v_0.$5P_0 = visiblePosts;
    $v_0.$f_0 = FeedToUse;
    $v_0.$u_0 = FeedName;
    $v_0.$3u_0 = emptyFeedMsg;
    $v_0.$2l_0 = feedDescription;
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedView.prototype = {
    
    get_numVisiblePosts: function SP_UI_MicroFeed_MicroFeedView$get_numVisiblePosts() {
        return this.$5P_0.length;
    },
    
    visiblePostAttribute: function SP_UI_MicroFeed_MicroFeedView$visiblePostAttribute(index) {
        return this.$5P_0[index];
    },
    
    get_feedName: function SP_UI_MicroFeed_MicroFeedView$get_feedName() {
        return this.$u_0;
    },
    
    get_emptyFeedMessage: function SP_UI_MicroFeed_MicroFeedView$get_emptyFeedMessage() {
        return this.$3u_0;
    },
    
    get_feedToUse: function SP_UI_MicroFeed_MicroFeedView$get_feedToUse() {
        return this.$f_0;
    },
    
    get_feedDescription: function SP_UI_MicroFeed_MicroFeedView$get_feedDescription() {
        return this.$2l_0;
    },
    
    $5P_0: null,
    $f_0: 0,
    $u_0: null,
    $3u_0: null,
    $2l_0: null
}


SP.UI.MicroFeed.AttributePair = function SP_UI_MicroFeed_AttributePair() {
}
SP.UI.MicroFeed.AttributePair.createAttributePairWithType = function SP_UI_MicroFeed_AttributePair$createAttributePairWithType(type, value) {
    return SP.UI.MicroFeed.AttributePair.createAttributePair(SP.Social.SocialThreadType.toString(type), value);
}
SP.UI.MicroFeed.AttributePair.createAttributePair = function SP_UI_MicroFeed_AttributePair$createAttributePair(name, value) {
    var $v_0 = new SP.UI.MicroFeed.AttributePair();
    $v_0.$39_0 = name;
    $v_0.$3h_0 = value;
    return $v_0;
}
SP.UI.MicroFeed.AttributePair.prototype = {
    
    get_key: function SP_UI_MicroFeed_AttributePair$get_key() {
        return this.$39_0;
    },
    
    get_value: function SP_UI_MicroFeed_AttributePair$get_value() {
        return this.$3h_0;
    },
    
    $39_0: null,
    $3h_0: null
}


SP.UI.MicroFeed.SPMicroFeed = function SP_UI_MicroFeed_SPMicroFeed(webPartType, editProfileLink, changePhotoLink) {
    this.$$d_$9X_0 = Function.createDelegate(this, this.$9X_0);
    this.$$d_$9Y_0 = Function.createDelegate(this, this.$9Y_0);
    this.$$d_$9W_0 = Function.createDelegate(this, this.$9W_0);
    this.$$d_$7X_0 = Function.createDelegate(this, this.$7X_0);
    this.$$d_$8E_0 = Function.createDelegate(this, this.$8E_0);
    this.$P_0 = SpsClient.ScriptResources.replyTextBoxString;
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1s);
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$7O;
    var $v_1 = '';
    var $v_2 = '';
    this.$3B_0 = '';
    this.$7_0 = webPartType;
    $v_0.innerHTML = '';
    this.$M_0 = '';
    this.$K_0 = true;
    SP.UI.MicroFeed.SPMicroFeed.$N = {};
    this.$E_0 = [];
    this.$5_0 = [];
    this.$1A_0 = new Date();
    this.$1l_0 = 0;
    this.$18_0 = -1;
    this.$1O_0 = this.$7_0 === 1;
    this.$4t_0 = false;
    this.$1i_0 = -1;
    this.$2I_0 = false;
    this.$3C_0 = 0;
    this.$1k_0 = null;
    this.$4q_0 = new Date();
    this.$14_0 = false;
    SP.UI.MicroFeed.SPMicroFeed.$W = false;
    SP.UI.MicroFeed.SPMicroFeed.$1T = null;
    this.$4v_0 = false;
    this.$3F_0 = '';
    this.$3E_0 = '';
    this.$3J_0 = '';
    this.$3I_0 = '';
    this.$1h_0 = editProfileLink;
    this.$3A_0 = changePhotoLink;
    SP.UI.MicroFeed.SPMicroFeed.$H = {};
    var $v_3 = '';
    var $v_4 = '';
    var $v_5 = SP.ScriptHelpers.getDocumentQueryPairs();
    var $$dict_9 = $v_5;
    for (var $$key_A in $$dict_9) {
        var $v_6 = { key: $$key_A, value: $$dict_9[$$key_A] };
        $v_1 = $v_6.key.toLowerCase();
        $v_2 = decodeURIComponent(($v_6.value || ''));
        if ($v_1 === 'threadid' && !SP.ScriptHelpers.isNullOrEmptyString($v_2)) {
            SP.UI.MicroFeed.SPMicroFeed.$W = true;
        }
        if ($v_1 === 'mentionperson') {
            this.$3F_0 = $v_2;
        }
        else if ($v_1 === 'mentionpersonname') {
            this.$3E_0 = $v_2;
        }
        else if ($v_1 === 'tagtext') {
            this.$3J_0 = $v_2;
        }
        else if ($v_1 === 'tagid') {
            this.$3I_0 = $v_2;
        }
        else if ($v_1 === 'unsubscribe') {
            this.$4v_0 = true;
        }
        else if ($v_1 === 'rootpostauthorid') {
            $v_3 = $v_2;
        }
        else if ($v_1 === 'rootpostid') {
            $v_4 = $v_2;
        }
    }
    if (!SP.ScriptHelpers.isNullOrEmptyString($v_4) && !SP.ScriptHelpers.isNullOrEmptyString($v_3)) {
        SP.UI.MicroFeed.SPMicroFeed.$W = true;
    }
}
SP.UI.MicroFeed.SPMicroFeed.get_companyFeedViewIndex = function SP_UI_MicroFeed_SPMicroFeed$get_companyFeedViewIndex() {
    return SP.UI.MicroFeed.SPMicroFeed.$1t;
}
SP.UI.MicroFeed.SPMicroFeed.set_companyFeedViewIndex = function SP_UI_MicroFeed_SPMicroFeed$set_companyFeedViewIndex(value) {
    SP.UI.MicroFeed.SPMicroFeed.$1t = value;
    return value;
}
SP.UI.MicroFeed.SPMicroFeed.get_$D = function SP_UI_MicroFeed_SPMicroFeed$get_$D() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$Q && !SP.UI.MicroFeed.SPMicroFeed.$r) {
        SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
    }
    return SP.UI.MicroFeed.SPMicroFeed.$Q;
}
SP.UI.MicroFeed.SPMicroFeed.get_$X = function SP_UI_MicroFeed_SPMicroFeed$get_$X() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$Q && !SP.UI.MicroFeed.SPMicroFeed.$r) {
        SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
    }
    return SP.UI.MicroFeed.SPMicroFeed.$3Z;
}
SP.UI.MicroFeed.SPMicroFeed.get_$5F = function SP_UI_MicroFeed_SPMicroFeed$get_$5F() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$1u) {
        SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
    }
    return SP.UI.MicroFeed.SPMicroFeed.$1u;
}
SP.UI.MicroFeed.SPMicroFeed.get_followedPeopleCallback = function SP_UI_MicroFeed_SPMicroFeed$get_followedPeopleCallback() {
    return SP.UI.MicroFeed.SPMicroFeed.$2S;
}
SP.UI.MicroFeed.SPMicroFeed.set_followedPeopleCallback = function SP_UI_MicroFeed_SPMicroFeed$set_followedPeopleCallback(value) {
    SP.UI.MicroFeed.SPMicroFeed.$2S = value;
    return value;
}
SP.UI.MicroFeed.SPMicroFeed.get_$1H = function SP_UI_MicroFeed_SPMicroFeed$get_$1H() {
    return GetThemedImageUrl('spcommon.png');
}
SP.UI.MicroFeed.SPMicroFeed.get_$5K = function SP_UI_MicroFeed_SPMicroFeed$get_$5K() {
    return GetThemedImageUrl('socialcommon.png');
}
SP.UI.MicroFeed.SPMicroFeed.setFocusOnRootPostInputBox = function SP_UI_MicroFeed_SPMicroFeed$setFocusOnRootPostInputBox() {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1D);
    if ($v_0) {
        $v_0.focus();
    }
}
SP.UI.MicroFeed.SPMicroFeed.initializeForExternalUse = function SP_UI_MicroFeed_SPMicroFeed$initializeForExternalUse() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$1S) {
        SP.UI.MicroFeed.SPMicroFeed.$r = true;
        SP.UI.MicroFeed.SPMicroFeed.$1S = true;
    }
}
SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData = function SP_UI_MicroFeed_SPMicroFeed$initializeCSOMData(forceExecuteQuery) {
    if (SP.UI.MicroFeed.SPMicroFeed.$1S && !SP.UI.MicroFeed.SPMicroFeed.$Q && !SP.UI.MicroFeed.SPMicroFeed.$r) {
        SP.UI.MicroFeed.SPMicroFeed.$3b = false;
        SP.UI.MicroFeed.SPMicroFeed.$2V = false;
        SP.UI.MicroFeed.SPMicroFeed.$1Q = false;
    }
    if (!SP.UI.MicroFeed.SPMicroFeed.$Q && SP.UI.MicroFeed.SPMicroFeed.$1S && !SP.UI.MicroFeed.SPMicroFeed.$3b) {
        SP.UI.MicroFeed.SPMicroFeed.$3b = true;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            SP.UI.MicroFeed.SPMicroFeed.$L = SP.ClientContext.get_current();
            if (!SP.UI.MicroFeed.SPMicroFeed.$r) {
                SP.UI.MicroFeed.SPMicroFeed.$Q = SP.Social.SocialFeedManager.newObject(SP.UI.MicroFeed.SPMicroFeed.$L);
            }
            if (!SP.UI.MicroFeed.SPMicroFeed.$1u) {
                SP.UI.MicroFeed.SPMicroFeed.$1u = SP.UserProfiles.PeopleManager.newObject(SP.UI.MicroFeed.SPMicroFeed.$L);
            }
        });
    }
    if (forceExecuteQuery) {
        SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
        }, function() {
        });
    }
}
SP.UI.MicroFeed.SPMicroFeed.setCSOMDataInited = function SP_UI_MicroFeed_SPMicroFeed$setCSOMDataInited() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$1Q && (SP.UI.MicroFeed.SPMicroFeed.$r || SP.UI.MicroFeed.SPMicroFeed.$Q.isPropertyAvailable(SP.Social.SocialFeedManagerPropertyNames.owner))) {
        if (SP.UI.MicroFeed.SPMicroFeed.$Q) {
            SP.UI.MicroFeed.SPMicroFeed.$3Z = SP.UI.MicroFeed.SPMicroFeed.$Q.get_owner();
        }
        SP.UI.MicroFeed.SPMicroFeed.$1Q = true;
    }
}
SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded = function SP_UI_MicroFeed_SPMicroFeed$executeQueryIfNeeded(success, error) {
    var $v_0 = null;
    var $v_1 = false;
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        if (!SP.UI.MicroFeed.SPMicroFeed.$1Q && !SP.UI.MicroFeed.SPMicroFeed.$2V) {
            SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
            SP.UI.MicroFeed.SPMicroFeed.$2V = true;
            $v_1 = true;
            $v_0 = SP.UI.MicroFeed.SPMicroFeed.$9Z();
            if (SP.UI.MicroFeed.SPMicroFeed.$Q) {
                SP.UI.MicroFeed.SPMicroFeed.$L.load(SP.UI.MicroFeed.SPMicroFeed.$Q);
            }
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$L.get_hasPendingRequest()) {
            SP.UI.MicroFeed.SPMicroFeed.$L.executeQueryAsync(function($p2_0, $p2_1) {
                if ($v_1) {
                    SP.UI.MicroFeed.SPMicroFeed.setCSOMDataInited();
                    if ($v_0) {
                        SP.UI.MicroFeed.SPMicroFeed.$9a($v_0);
                    }
                }
                success($p2_0, $p2_1);
            }, function($p2_0, $p2_1) {
                if ($v_1) {
                    SP.UI.MicroFeed.SPMicroFeed.$2V = false;
                }
                error($p2_0, $p2_1);
            });
        }
    });
}
SP.UI.MicroFeed.SPMicroFeed.$8z = function SP_UI_MicroFeed_SPMicroFeed$$8z() {
    var $v_0 = null;
    var $v_1 = OpenSuiteLinksJson();
    if ($v_1) {
        try {
            $v_0 = JSON.parse($v_1);
        }
        catch ($$e_2) {
        }
    }
    if ($v_0) {
        if (typeof($v_0.AdminLink) !== 'undefined' && $v_0.AdminLink) {
            return true;
        }
    }
    return false;
}
SP.UI.MicroFeed.SPMicroFeed.$8o = function SP_UI_MicroFeed_SPMicroFeed$$8o() {
    var $v_0 = new SP.ClientRuntimeContext(_spPageContextInfo.webServerRelativeUrl);
    var $v_1 = $get('ms-microfeedthreadviewthread');
    if ($v_1) {
        SP.UI.MicroFeed.SPMicroFeed.$1T = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_1));
        SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate(SP.UI.MicroFeed.SPMicroFeed.$1T, false);
        $v_1.parentNode.removeChild($v_1);
    }
    var $v_2 = $get('ms-microfeedinitialdata');
    var $v_3 = null;
    if ($v_2) {
        $v_3 = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_2));
        $v_2.parentNode.removeChild($v_2);
    }
    var $v_4 = $get('ms-microfeedsitesfolloweddata');
    if ($v_4) {
        SP.UI.MicroFeed.SPMicroFeed.$1v = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_4));
        $v_4.parentNode.removeChild($v_4);
    }
    var $v_5 = $get('ms-microfeedcurrentuser');
    if ($v_5) {
        SP.UI.MicroFeed.SPMicroFeed.$3Z = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_5));
        $v_5.parentNode.removeChild($v_5);
    }
    var $v_6 = $get('ms-microfeedisfeedactivitypublic');
    if ($v_6) {
        SP.UI.MicroFeed.SPMicroFeed.$5E = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_6));
        $v_6.parentNode.removeChild($v_6);
    }
    var $v_7 = $get('ms-microfeedcanfollowtagsandusers');
    if ($v_7) {
        SP.UI.MicroFeed.SPMicroFeed.$3Y = $v_0.parseObjectFromJsonString(SP.UI.UIUtility.getInnerText($v_7));
        $v_7.parentNode.removeChild($v_7);
    }
    return $v_3;
}
SP.UI.MicroFeed.SPMicroFeed.switchToCompanyFeedView = function SP_UI_MicroFeed_SPMicroFeed$switchToCompanyFeedView() {
    SP.UI.MicroFeed.SPMicroFeed.microfeed.changeView(SP.UI.MicroFeed.SPMicroFeed.$1t);
}
SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID = function SP_UI_MicroFeed_SPMicroFeed$getPostIDFromDOMElementID(elementID) {
    return elementID.substr(elementID.lastIndexOf('_') + 1);
}
SP.UI.MicroFeed.SPMicroFeed.initializeWhatsNew = function SP_UI_MicroFeed_SPMicroFeed$initializeWhatsNew(editProfileLink, changePhotoLink, showPostBox) {
    var $v_0 = '';
    var $v_1 = '';
    var $v_2 = '';
    var $v_3 = '';
    var $v_4 = $get(SP.UI.MicroFeed.SPMicroFeed.$1s);
    if ($v_4) {
        $v_0 = $v_4.getAttribute('unreadMentionCount');
        $v_1 = $v_4.getAttribute('errorString');
        $v_2 = $v_4.getAttribute('statusCode');
        $v_3 = $v_4.getAttribute('isPubFeedOnly');
    }
    else {
        return;
    }
    if ($v_3 === 'false') {
        SP.UI.MicroFeed.SPMicroFeed.microfeed = new SP.UI.MicroFeed.SPMicroFeed(1, editProfileLink, changePhotoLink);
        if (!SP.ScriptHelpers.isNullOrEmptyString($v_0)) {
            SP.UI.MicroFeed.SPMicroFeed.microfeed.$1x_0(Number.parseInvariant($v_0));
        }
        SP.UI.MicroFeed.SPMicroFeed.microfeed.$M_0 = '';
        SP.UI.MicroFeed.SPMicroFeed.microfeed.initialize(showPostBox, true, '', '', (($v_1) ? $v_1 : ''), (($v_2) ? $v_2 : ''));
    }
}
SP.UI.MicroFeed.SPMicroFeed.initializePublishedFeed = function SP_UI_MicroFeed_SPMicroFeed$initializePublishedFeed(profileAccountName, profileDisplayName, editProfileLink, changePhotoLink, showPostingPart, isGroupFeed, groupSiteID, hasWritePermission) {
    var $v_0 = '';
    var $v_1 = '';
    var $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$1s);
    if ($v_2) {
        $v_0 = $v_2.getAttribute('errorString');
        $v_1 = $v_2.getAttribute('statusCode');
    }
    else {
        return;
    }
    var $v_3 = false;
    if (isGroupFeed) {
        $v_3 = true;
    }
    SP.UI.MicroFeed.SPMicroFeed.microfeed = new SP.UI.MicroFeed.SPMicroFeed(($v_3) ? 2 : 0, editProfileLink, changePhotoLink);
    if ($v_3 && groupSiteID) {
        SP.UI.MicroFeed.SPMicroFeed.microfeed.$M_0 = groupSiteID;
    }
    if (!hasWritePermission) {
        SP.UI.MicroFeed.SPMicroFeed.microfeed.$K_0 = false;
    }
    var $v_4 = false;
    if (showPostingPart && SP.UI.MicroFeed.SPMicroFeed.microfeed.$K_0) {
        $v_4 = true;
    }
    SP.UI.MicroFeed.SPMicroFeed.microfeed.initialize($v_4, true, profileAccountName, profileDisplayName, ($v_0 || ''), ($v_1 || ''));
}
SP.UI.MicroFeed.SPMicroFeed.$2X = function SP_UI_MicroFeed_SPMicroFeed$$2X($p0) {
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID($p0.id);
    var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$N[$v_0];
    var $v_2 = $get(($p0.id === SP.UI.MicroFeed.SPMicroFeed.$1D) ? SP.UI.MicroFeed.SPMicroFeed.$3R : SP.UI.MicroFeed.SPMicroFeed.$2z + $v_0);
    if ($v_2) {
        $v_1.setElementHighlights($v_2);
        $v_2.style.height = $p0.clientHeight + 'px';
    }
}
SP.UI.MicroFeed.SPMicroFeed.$3m = function SP_UI_MicroFeed_SPMicroFeed$$3m($p0, $p1, $p2) {
    var $v_0 = document.createElement('button');
    $v_0.id = $p1;
    $v_0.setAttribute('type', 'button');
    $v_0.className = $p2;
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, $p0);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$2a = function SP_UI_MicroFeed_SPMicroFeed$$2a($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = document.createElement('img');
    $v_0.id = $p3 + '_Image';
    $v_0.src = $p0;
    $v_0.alt = $p1;
    $v_0.className = $p6;
    var $v_1 = document.createElement('span');
    $v_1.id = $p3 + '_Span';
    $v_1.className = $p5;
    $v_1.appendChild($v_0);
    var $v_2 = SP.UI.MicroFeed.SPMicroFeed.$3m('', $p3, $p4);
    $v_2.title = $p2;
    $v_2.appendChild($v_1);
    return $v_2;
}
SP.UI.MicroFeed.SPMicroFeed.$5g = function SP_UI_MicroFeed_SPMicroFeed$$5g($p0, $p1) {
    var $v_0 = document.createElement('div');
    $v_0.id = ((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1p : SP.UI.MicroFeed.SPMicroFeed.$1Y + $p1);
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$7H;
    var $v_1 = document.createElement('div');
    $v_1.id = ((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$7I : SP.UI.MicroFeed.SPMicroFeed.$6b + $p1);
    $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$51;
    var $v_2 = document.createElement('div');
    $v_2.id = ((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$7E : SP.UI.MicroFeed.SPMicroFeed.$6a + $p1);
    $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$51;
    var $v_3 = SP.UI.MicroFeed.SPMicroFeed.$3n(((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1r : SP.UI.MicroFeed.SPMicroFeed.$1a + $p1), SP.UI.MicroFeed.SPMicroFeed.$52);
    var $v_4 = SP.UI.MicroFeed.SPMicroFeed.$3n(((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3P : SP.UI.MicroFeed.SPMicroFeed.$2w + $p1), SP.UI.MicroFeed.SPMicroFeed.$52);
    var $v_5 = SP.UI.MicroFeed.SPMicroFeed.$2a(SP.UI.MicroFeed.SPMicroFeed.get_$1H(), SpsClient.ScriptResources.cancelButtonText, SpsClient.ScriptResources.cancelButtonText, SP.UI.MicroFeed.SPMicroFeed.$3S + ((!$p1) ? '' : '_' + $p1), SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$5B, SP.UI.MicroFeed.SPMicroFeed.$3V, SP.UI.MicroFeed.SPMicroFeed.$3U);
    var $v_6 = document.createElement('div');
    $v_6.id = ((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1q : SP.UI.MicroFeed.SPMicroFeed.$1Z + $p1);
    $v_6.className = 'ms-error ms-microfeed-linkErrorMessageDiv';
    var $v_7 = SP.UI.MicroFeed.SPMicroFeed.$2a(SP.UI.MicroFeed.SPMicroFeed.get_$5K(), SpsClient.ScriptResources.saveLinkButtonText, SpsClient.ScriptResources.saveLinkButtonText, ((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3O : SP.UI.MicroFeed.SPMicroFeed.$2v + $p1), SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$5B, 'ms-microfeed-editLinkButtonImageParent', 'ms-microfeed-editLinkButtonImage');
    $addHandler($v_5, 'click', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$9J($p0, $p1);
    });
    $addHandler($v_7, 'click', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$9d($p0, $v_3, $v_4, $p1);
    });
    $addHandler($v_3, 'focus', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$77($v_3, $v_7, $v_5);
    });
    $addHandler($v_4, 'focus', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$77($v_4, $v_7, $v_5);
    });
    $addHandler($v_3, 'blur', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$98($v_3, $v_6, (!$p1) ? $p0.id : $p1);
    });
    $addHandler($v_4, 'blur', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$97($v_4, $v_3, $v_6);
    });
    $addHandler($v_3, 'keydown', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$78($p1_0, $v_7);
    });
    $addHandler($v_4, 'keydown', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$78($p1_0, $v_7);
    });
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, SpsClient.ScriptResources.linkUrlLabel);
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, SpsClient.ScriptResources.displayLinkAsLabel);
    $v_0.appendChild($v_1);
    $v_0.appendChild($v_3);
    $v_0.appendChild($v_2);
    $v_0.appendChild($v_4);
    $v_0.appendChild($v_7);
    $v_0.appendChild($v_5);
    $v_0.appendChild($v_6);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$77 = function SP_UI_MicroFeed_SPMicroFeed$$77($p0, $p1, $p2) {
    if ($p0) {
        $p0.select();
    }
    SP.UI.MySiteCommon.CommonUIElements.display($p1);
    SP.UI.MySiteCommon.CommonUIElements.display($p2);
}
SP.UI.MicroFeed.SPMicroFeed.$98 = function SP_UI_MicroFeed_SPMicroFeed$$98($p0, $p1, $p2) {
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$N[$p2];
    if (!$v_0 || !$p0) {
        return;
    }
    var $v_1 = $p0.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v);
    if (!$v_1) {
        return;
    }
    var $v_2 = $v_0.linkUrlFromDisplayText($v_1);
    if (SP.ScriptHelpers.isNullOrEmptyString($p0.value) && $v_2) {
        $p0.value = $v_2;
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p1);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$97 = function SP_UI_MicroFeed_SPMicroFeed$$97($p0, $p1, $p2) {
    if (!$p1 || !$p0) {
        return;
    }
    var $v_0 = $p1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v);
    if (SP.ScriptHelpers.isNullOrEmptyString($p0.value) && $v_0) {
        $p0.value = $v_0;
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p2);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$78 = function SP_UI_MicroFeed_SPMicroFeed$$78($p0, $p1) {
    if ($p0.keyCode === 13) {
        $p1.click();
        $p0.preventDefault();
        $p0.stopPropagation();
    }
}
SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv = function SP_UI_MicroFeed_SPMicroFeed$handleChangesToElementsDiv(elementsDiv) {
    var $v_0 = elementsDiv.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y);
    if (!(SP.UI.MicroFeed.SPMicroFeed.$H[$v_0]) && elementsDiv.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K) !== 'true') {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, elementsDiv);
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.display(elementsDiv);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$6m = function SP_UI_MicroFeed_SPMicroFeed$$6m($p0) {
    var $v_0;
    $v_0 = SP.UI.MicroFeed.SPMicroFeed.$H[($p0) ? $p0 : ''];
    if ($v_0) {
        var $v_1 = $get((!$p0) ? SP.UI.MicroFeed.SPMicroFeed.$2R : SP.UI.MicroFeed.SPMicroFeed.$2B + $p0);
        var $v_2;
        if (!$v_0.get_attachmentKind()) {
            $v_2 = (!$p0) ? SP.UI.MicroFeed.SPMicroFeed.$3N : SP.UI.MicroFeed.SPMicroFeed.$2u + $p0;
        }
        else {
            $v_2 = (!$p0) ? SP.UI.MicroFeed.SPMicroFeed.$2N : SP.UI.MicroFeed.SPMicroFeed.$2C + $p0;
        }
        if ($v_1) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_1);
            var $v_3 = $get($v_2);
            if ($v_3) {
                $v_1.removeChild($v_3);
            }
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$8L = function SP_UI_MicroFeed_SPMicroFeed$$8L($p0, $p1) {
    var $v_0 = document.createElement('div');
    $v_0.id = (!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3N : SP.UI.MicroFeed.SPMicroFeed.$2u + $p1;
    var $v_1 = document.createElement('img');
    $v_1.className = 'ms-microfeed-imageAttachmentPreview';
    $v_1.src = $p0.get_previewUri();
    $v_1.alt = $p0.get_name();
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$1w = function SP_UI_MicroFeed_SPMicroFeed$$1w($p0, $p1) {
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$N[(!$p1) ? $p0.id : $p1];
    var $v_1 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1r : SP.UI.MicroFeed.SPMicroFeed.$1a + $p1);
    if (!$v_0 || !$v_1) {
        return;
    }
    var $v_2 = $v_0.get_linkToEdit();
    if ($v_2 && $v_2.startsWith('<') && $v_2.endsWith('>') && $v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v) !== $v_2) {
        SP.UI.MicroFeed.SPMicroFeed.$8W($p0, $p1, $v_2.substring(1, $v_2.length - 1));
    }
    else if (!$v_2 && $v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v)) {
        SP.UI.MicroFeed.SPMicroFeed.$6x($p0, $p1, -1);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$8W = function SP_UI_MicroFeed_SPMicroFeed$$8W($p0, $p1, $p2) {
    var $v_0 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1p : SP.UI.MicroFeed.SPMicroFeed.$1Y + $p1);
    var $v_1 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1r : SP.UI.MicroFeed.SPMicroFeed.$1a + $p1);
    var $v_2 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3P : SP.UI.MicroFeed.SPMicroFeed.$2w + $p1);
    var $v_3 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3O : SP.UI.MicroFeed.SPMicroFeed.$2v + $p1);
    var $v_4 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1q : SP.UI.MicroFeed.SPMicroFeed.$1Z + $p1);
    var $v_5 = $get(SP.UI.MicroFeed.SPMicroFeed.$3S + ((!$p1) ? '' : '_' + $p1));
    var $v_6 = SP.UI.MicroFeed.SPMicroFeed.$N[SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID($p0.id)];
    if (!$v_0 || !$v_0.parentNode || !$v_1 || !$v_2 || !$v_3 || !$p2) {
        return;
    }
    if ($v_4) {
        $v_4.innerHTML = '';
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_4);
    }
    SP.UI.MySiteCommon.CommonUIElements.display($v_0);
    $v_0.parentNode.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K, 'true');
    SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_0.parentNode);
    if (!$v_6) {
        return;
    }
    var $v_7 = $v_6.linkUrlFromDisplayText($p2);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_3);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_5);
    $v_1.value = $v_7;
    $v_2.value = $p2;
    $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$v, $p2);
}
SP.UI.MicroFeed.SPMicroFeed.$9J = function SP_UI_MicroFeed_SPMicroFeed$$9J($p0, $p1) {
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$N[(!$p1) ? $p0.id : $p1];
    var $v_1 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1r : SP.UI.MicroFeed.SPMicroFeed.$1a + $p1);
    var $v_2 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3P : SP.UI.MicroFeed.SPMicroFeed.$2w + $p1);
    var $v_3 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1q : SP.UI.MicroFeed.SPMicroFeed.$1Z + $p1);
    var $v_4 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$3O : SP.UI.MicroFeed.SPMicroFeed.$2v + $p1);
    var $v_5 = $get(SP.UI.MicroFeed.SPMicroFeed.$3S + ((!$p1) ? '' : '_' + $p1));
    if (!$v_0 || !$v_1 || !$v_2) {
        return;
    }
    var $v_6 = $v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v);
    if (!$v_6) {
        return;
    }
    $v_1.value = $v_0.linkUrlFromDisplayText($v_6);
    $v_2.value = $v_6;
    if ($v_3) {
        $v_3.innerHTML = '';
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_3);
    }
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_4);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_5);
}
SP.UI.MicroFeed.SPMicroFeed.$6x = function SP_UI_MicroFeed_SPMicroFeed$$6x($p0, $p1, $p2) {
    var $v_0 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1p : SP.UI.MicroFeed.SPMicroFeed.$1Y + $p1);
    var $v_1 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1r : SP.UI.MicroFeed.SPMicroFeed.$1a + $p1);
    var $v_2 = $get((!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$1q : SP.UI.MicroFeed.SPMicroFeed.$1Z + $p1);
    if (!$v_0 || !$v_0.parentNode) {
        return;
    }
    if ($v_2) {
        $v_2.innerHTML = '';
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_2);
    }
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    if ($v_1) {
        $v_1.removeAttribute(SP.UI.MicroFeed.SPMicroFeed.$v);
    }
    $v_0.parentNode.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K, 'false');
    SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_0.parentNode);
    if ($p2 >= 0 && $p2 <= $p0.value.length) {
        $p0.blur();
        SP.UI.MySiteCommon.CommonUIElements.setCursorPosition($p0, $p2);
    }
    $p0.focus();
}
SP.UI.MicroFeed.SPMicroFeed.$9d = function SP_UI_MicroFeed_SPMicroFeed$$9d($p0, $p1, $p2, $p3) {
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$N[(!$p3) ? $p0.id : $p3];
    var $v_1 = $get((!$p3) ? SP.UI.MicroFeed.SPMicroFeed.$1q : SP.UI.MicroFeed.SPMicroFeed.$1Z + $p3);
    if (!$p1 || !$p2 || !$v_0 || !$v_1) {
        return;
    }
    var $v_2 = $p1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$v);
    if (!$v_2) {
        return;
    }
    var $v_3 = $v_0.linkUrlFromDisplayText($v_2);
    $v_1.innerHTML = '';
    var $v_4 = $p2.value;
    var $v_5 = $p1.value || '';
    var $v_6 = $v_5.toLowerCase() || '';
    if (SP.ScriptHelpers.isNullOrEmptyString($v_4)) {
        if ($v_2) {
            $p2.value = $v_5;
        }
        $v_4 = $v_5;
    }
    if ($v_4 !== $v_2 && $v_0.hasLinkWithDisplayText($v_4)) {
        if ($v_1) {
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, SpsClient.ScriptResources.duplicateLinkErrorMessage);
            SP.UI.MySiteCommon.CommonUIElements.display($v_1);
        }
        return;
    }
    if (!$v_6.startsWith('www.') && !$v_6.startsWith('http://') && !$v_6.startsWith('https://')) {
        if ($v_1) {
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, SpsClient.ScriptResources.invalidLinkErrorMessage);
            SP.UI.MySiteCommon.CommonUIElements.display($v_1);
        }
        return;
    }
    if ($v_2 === $v_4 && $v_2 === $v_0.getLinkWithDisplayText($v_2)) {
        $v_4 = $v_5;
    }
    $v_0.updateLinkSelection($v_2, $v_4, $v_5);
    SP.UI.MicroFeed.SPMicroFeed.$6x($p0, $p3, $p0.value.indexOf('<' + $v_4 + '>') + $v_4.length + 2);
}
SP.UI.MicroFeed.SPMicroFeed.$81 = function SP_UI_MicroFeed_SPMicroFeed$$81($p0, $p1) {
    if (SP.UI.MicroFeed.SPMicroFeed.$1R) {
        return;
    }
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getPreview($p0);
        SP.UI.MicroFeed.SPMicroFeed.$1R = true;
        SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function($p2_0, $p2_1) {
            if (SP.UI.MicroFeed.SPMicroFeed.$1R) {
                SP.UI.MicroFeed.SPMicroFeed.$1R = false;
                if ($v_0 && $v_0.get_uri()) {
                    var $v_1 = (!$p1);
                    if (SP.UI.MicroFeed.SPMicroFeed.$H[$p1 || '']) {
                        return;
                    }
                    var $v_2 = $get(($v_1) ? SP.UI.MicroFeed.SPMicroFeed.$2R : SP.UI.MicroFeed.SPMicroFeed.$2B + $p1);
                    var $v_3 = $get(($v_1) ? SP.UI.MicroFeed.SPMicroFeed.$V : SP.UI.MicroFeed.SPMicroFeed.$y + $p1);
                    var $v_4 = null;
                    switch ($v_0.get_attachmentKind()) {
                        case 1:
                            $v_4 = SP.UI.MicroFeed.MicroFeedVideo.$5n($v_0, $p1);
                            break;
                        case 2:
                            $v_4 = SP.UI.MicroFeed.MicroFeedDoc.$5j($v_0, $p1);
                            break;
                    }
                    if ($v_4) {
                        SP.UI.MicroFeed.SPMicroFeed.$1z($v_4, $v_2, null, true);
                        SP.UI.MySiteCommon.CommonUIElements.display($v_2);
                    }
                    var $v_5 = ($p1) ? $p1 : '';
                    SP.UI.MicroFeed.SPMicroFeed.$H[$v_5] = $v_0;
                    $v_3.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, $v_5);
                    $v_2.parentNode.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, $v_5);
                    SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_2.parentNode);
                }
            }
        }, function() {
            SP.UI.MicroFeed.SPMicroFeed.$1R = false;
        });
    });
}
SP.UI.MicroFeed.SPMicroFeed.$7q = function SP_UI_MicroFeed_SPMicroFeed$$7q($p0, $p1, $p2) {
    var $v_0 = ($p2) ? $get(SP.UI.MicroFeed.SPMicroFeed.$V) : $get(SP.UI.MicroFeed.SPMicroFeed.$y + $p1);
    var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$N[$p1];
    if ($p0.keyCode === 13 && !$p0.shiftKey && $v_0 && !$v_0.disabled && (!$v_1 || (!$v_1.get_isSuggestionMenuOpen() && !$v_1.get_isHandlingLinkEntry()))) {
        $v_0.focus();
        $v_0.click();
        $p0.preventDefault();
        $p0.stopPropagation();
    }
    if ($v_1) {
        $v_1.typeAheadKeyDownHandler($p0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.createProgressDiv = function SP_UI_MicroFeed_SPMicroFeed$createProgressDiv() {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$2s;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6U;
    $v_0.appendChild(SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon(SP.UI.MicroFeed.SPMicroFeed.$6W, SP.UI.MicroFeed.SPMicroFeed.$6V));
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$4d = function SP_UI_MicroFeed_SPMicroFeed$$4d($p0, $p1) {
    if ($p1 > 0) {
        return String.format(SpsClient.ScriptResources.pivotControlViewTitleText, $p0, $p1);
    }
    else {
        return $p0;
    }
}
SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner = function SP_UI_MicroFeed_SPMicroFeed$showProgressSpinner() {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$2s);
    if ($v_0) {
        SP.UI.MySiteCommon.CommonUIElements.display($v_0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner = function SP_UI_MicroFeed_SPMicroFeed$hideProgressSpinner() {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$2s);
    if ($v_0) {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.drawEmptyFeedThreadWithGivenMessage = function SP_UI_MicroFeed_SPMicroFeed$drawEmptyFeedThreadWithGivenMessage(emptyFeedMessage, errorMessage) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$27;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6A;
    if (!SP.ScriptHelpers.isNullOrEmptyString(errorMessage)) {
        $v_0.innerHTML = emptyFeedMessage + '<br/><br/>';
        SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv($v_0, errorMessage, '_emptyfeed', null);
    }
    else {
        $v_0.innerHTML = emptyFeedMessage;
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.drawMinimalThread = function SP_UI_MicroFeed_SPMicroFeed$drawMinimalThread(thread) {
    SP.SOD.executeFunc('SP.DateTimeUtil.js', 'SP.DateTimeUtil.SPRelativeDateTime.getRelativeDateTimeString', null);
    var $v_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_rootPost());
    var $v_1 = $v_0.$3_0;
    var $v_2 = SP.UI.MicroFeed.SPMicroFeed.createThreadDivWithoutHiding(null, $v_1);
    $v_2.appendChild(SP.UI.MicroFeed.SPMicroFeed.$8c($v_0, $v_1, $v_0.$3_0));
    $v_2.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
    return $v_2;
}
SP.UI.MicroFeed.SPMicroFeed.$8U = function SP_UI_MicroFeed_SPMicroFeed$$8U($p0) {
    var $v_0 = 0;
    if (($p0.get_attributes() & 8)) {
        $v_0 = 0;
    }
    else if (($p0.get_attributes() & 2)) {
        $v_0 = 1;
    }
    else if (($p0.get_attributes() & 16)) {
        $v_0 = 2;
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$1e = function SP_UI_MicroFeed_SPMicroFeed$$1e($p0) {
    return !$p0 || (!$p0.$b_0 && !$p0.$I_0);
}
SP.UI.MicroFeed.SPMicroFeed.$1d = function SP_UI_MicroFeed_SPMicroFeed$$1d($p0) {
    return ($p0.get_actorType() === 1) || ($p0.get_actorType() === 2);
}
SP.UI.MicroFeed.SPMicroFeed.$7r = function SP_UI_MicroFeed_SPMicroFeed$$7r($p0) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$z + $p0);
    var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$4Y + $p0);
    var $v_2 = null;
    var $v_3 = null;
    if (!$v_0 || !$v_1) {
        return;
    }
    if ($v_0.getAttribute('expanded')) {
        if ($v_0) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1I + $p0));
            $v_0.removeAttribute('expanded');
        }
        $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$33 + $p0);
        if ($v_2) {
            $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.expandRepliesText);
        }
        $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$32 + $p0);
        if ($v_3) {
            $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$2p;
        }
    }
    else {
        if ($v_0) {
            SP.UI.MySiteCommon.CommonUIElements.display($v_0);
            SP.UI.MySiteCommon.CommonUIElements.display($get(SP.UI.MicroFeed.SPMicroFeed.$1I + $p0));
            $v_0.setAttribute('expanded', 'true');
        }
        $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$33 + $p0);
        if ($v_2) {
            $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.collapseRepliesText);
        }
        $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$32 + $p0);
        if ($v_3) {
            $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$4A;
        }
    }
}
SP.UI.MicroFeed.SPMicroFeed.$8j = function SP_UI_MicroFeed_SPMicroFeed$$8j($p0) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$z + $p0);
    var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$2D + $p0);
    if ($v_0 && !$v_0.getAttribute('expanded') && $v_1 && !SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_1)) {
        SP.UI.MicroFeed.SPMicroFeed.$7r($p0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$7w = function SP_UI_MicroFeed_SPMicroFeed$$7w($p0) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$2D + $p0;
    var $v_1 = document.createElement('button');
    $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$4Y + $p0;
    var $v_2 = document.createElement('span');
    $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$33 + $p0;
    var $v_3 = document.createElement('span');
    $v_3.id = SP.UI.MicroFeed.SPMicroFeed.$6k + $p0;
    var $v_4 = document.createElement('img');
    $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$32 + $p0;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$2A + ' ' + SP.UI.MicroFeed.SPMicroFeed.$4E;
    $v_1.setAttribute('type', 'button');
    $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$4D;
    $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$4F;
    $v_1.appendChild($v_3);
    $v_4.setAttribute('src', SP.UI.MicroFeed.SPMicroFeed.get_$1H());
    $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$4A;
    $v_3.appendChild($v_4);
    $v_2.className = 'ms-microfeed-toggleRepliesText';
    $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.collapseRepliesText);
    $addHandler($v_1, 'click', function() {
        SP.UI.MicroFeed.SPMicroFeed.$7r($p0);
    });
    $v_1.appendChild($v_2);
    $v_0.appendChild($v_1);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5O = function SP_UI_MicroFeed_SPMicroFeed$$5O($p0, $p1, $p2) {
    $p1 = Math.max($p1, 0);
    $p0.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$t, $p1);
    if (!$p1) {
        $p0.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2e, 'false');
        $p0.setAttribute(SP.Microfeed.MicroBlogType.toString(8), 'false');
    }
    else if ($p2) {
        $p0.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2e, 'true');
    }
}
SP.UI.MicroFeed.SPMicroFeed.$4i = function SP_UI_MicroFeed_SPMicroFeed$$4i($p0) {
    return (!!$p0.get_likerInfo() && $p0.get_likerInfo().get_includesCurrentUser());
}
SP.UI.MicroFeed.SPMicroFeed.createThreadDivWithoutHiding = function SP_UI_MicroFeed_SPMicroFeed$createThreadDivWithoutHiding(thread, threadID) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$10 + threadID;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6f;
    $v_0.setAttribute('LastModificationTime', (thread) ? ('' + thread.get_rootPost().get_modifiedTime()) : '');
    if (SP.UI.MicroFeed.SPMicroFeed.$H && ((threadID || '') in SP.UI.MicroFeed.SPMicroFeed.$H)) {
        delete SP.UI.MicroFeed.SPMicroFeed.$H[threadID || ''];
    }
    if (thread) {
        $v_0.setAttribute(SP.Social.SocialThreadType.toString(thread.get_threadType()), 'true');
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5v = function SP_UI_MicroFeed_SPMicroFeed$$5v($p0) {
    SP.UI.MicroFeed.SPMicroFeed.$5L($p0);
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = 0, $v_3 = 0;
    var $v_4 = null, $v_5 = null;
    var $v_6 = '';
    $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$z + $p0);
    if (!$v_0) {
        return;
    }
    $v_1 = $v_0.childNodes;
    $v_3 = $v_1.length;
    $v_2 = $v_3 - 1;
    while ($v_2 >= 0) {
        $v_4 = $v_1[$v_2];
        if ($v_4.getAttribute('deleted') !== 'true') {
            if (SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_4)) {
                $v_0.removeChild($v_4);
                SP.UI.MySiteCommon.CommonUIElements.display($v_4);
                SP.UI.MicroFeed.SPMicroFeed.$1z($v_4, $v_0, null, false);
                $v_2 += 2;
            }
            $v_6 = $v_4.id.substr($v_4.id.indexOf('_') + 1);
            $v_5 = $get(SP.UI.MicroFeed.SPMicroFeed.$3x + $v_6);
            if ($v_5) {
                SP.UI.MySiteCommon.CommonUIElements.display($v_5);
            }
        }
        $v_2--;
    }
    $v_0.setAttribute('expanded', 'true');
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$4B + $p0));
    if ($v_3 > 2) {
        SP.UI.MySiteCommon.CommonUIElements.display($get(SP.UI.MicroFeed.SPMicroFeed.$2D + $p0));
    }
    SP.UI.MicroFeed.SPMicroFeed.$5M($p0);
}
SP.UI.MicroFeed.SPMicroFeed.$5e = function SP_UI_MicroFeed_SPMicroFeed$$5e($p0, $p1, $p2, $p3) {
    var $v_0 = '';
    var $v_1 = 'ms-microfeed-userThumbnailArea';
    var $v_2 = '';
    if (!$p3) {
        $v_1 += ' ms-hide';
    }
    if ($p2) {
        var $v_3 = 36;
        var $v_4 = 48;
        var $v_5 = $v_3;
        if ($p1 && !$p1.$n_0) {
            $v_5 = $v_4;
        }
        if ($p1 && !$p1.$p_0 && !SP.ScriptHelpers.isNullOrEmptyString($p1.$1B_0)) {
            $v_1 += ' ms-microfeed-contentThumbnailArea';
            $v_0 = $p1.$1B_0;
        }
        else {
            var $v_6 = $p2.get_imageUri();
            if (!$p1 || $p1.$p_0) {
                if (!SP.ScriptHelpers.isNullOrEmptyString($v_6)) {
                    if (!_spPageContextInfo.crossDomainPhotosEnabled || $v_6.startsWith('/') || SP.UI.MicroFeed.SPMicroFeed.$94($v_6)) {
                        $v_0 = $v_6;
                    }
                    else {
                        $v_0 = '/_layouts/15/userphoto.aspx?size=S&url=' + encodeURIComponent($v_6);
                        if (!SP.ScriptHelpers.isNullOrEmptyString($p2.get_accountName())) {
                            $v_0 += '&accountname=' + encodeURIComponent($p2.get_accountName());
                        }
                        try {
                            var $v_7 = SP.ScriptHelpers.getUrlQueryPairs($v_6);
                            var $v_8 = $v_7['t'];
                            if (!SP.ScriptHelpers.isNullOrEmptyString($v_8)) {
                                $v_0 += '&t=' + $v_8;
                            }
                        }
                        catch ($$e_D) {
                        }
                    }
                }
                else {
                    $v_0 = SP.UI.MicroFeed.SPMicroFeed.$7a;
                }
            }
            else {
                if (SP.UI.MicroFeed.SPMicroFeed.$1d($p2)) {
                    $v_0 = $v_6;
                }
                else {
                    $v_0 = SP.UI.MicroFeed.SPMicroFeed.$70;
                }
            }
        }
        if ($p1 && $p1.$n_0 === 2) {
            $v_2 = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.SPMicroFeed.$40 + $p0, 'ms-microfeed-iconImage', $v_0, '');
        }
        else {
            if (SP.UI.MySiteCommon.PresenceManager.isPresenceJSLoaded() && !$p2.get_actorType()) {
                return SP.UI.MicroFeed.SPMicroFeed.$8p('div', SP.UI.MicroFeed.SPMicroFeed.$25 + $p0, $v_1, $p2.get_accountName(), $p2.get_name(), $v_0, $p2.get_uri(), $p2.get_emailAddress(), $v_5);
            }
            else {
                var $v_9 = $v_5.toString() + 'px';
                var $v_A = SP.UI.MicroFeed.SPMicroFeed.$40 + $p0;
                var $v_B = 'style=\"height:' + $v_9 + ';width:' + $v_9 + '\"';
                if (!$p2.get_actorType()) {
                    $v_B += ' name=\"authorElement\" profileUri=\"' + $p2.get_uri() + '\" accountName=\"' + STSHtmlEncode($p2.get_accountName()) + '\" displayName=\"' + STSHtmlEncode($p2.get_name()) + '\"';
                    if ($p2.get_emailAddress()) {
                        $v_B += ' email=\"' + STSHtmlEncode($p2.get_emailAddress()) + '\"';
                    }
                    $v_0 = $v_0.replace('_MThumb', '_SThumb');
                }
                $v_2 = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML($v_A, '', $v_0, $v_B);
            }
        }
    }
    return SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('div', SP.UI.MicroFeed.SPMicroFeed.$25 + $p0, $v_1) + $v_2 + '</div>';
}
SP.UI.MicroFeed.SPMicroFeed.$94 = function SP_UI_MicroFeed_SPMicroFeed$$94($p0) {
    if (!SP.UI.MicroFeed.SPMicroFeed.$e) {
        SP.UI.MicroFeed.SPMicroFeed.$e = window.location.href;
        if (SP.UI.MicroFeed.SPMicroFeed.$e.lastIndexOf('/') > SP.UI.MicroFeed.SPMicroFeed.$e.indexOf('//') + 1) {
            SP.UI.MicroFeed.SPMicroFeed.$e = SP.UI.MicroFeed.SPMicroFeed.$e.substring(0, SP.UI.MicroFeed.SPMicroFeed.$e.indexOf('/', SP.UI.MicroFeed.SPMicroFeed.$e.indexOf('//') + 2));
        }
    }
    return $p0.toLowerCase().startsWith(SP.UI.MicroFeed.SPMicroFeed.$e.toLowerCase());
}
SP.UI.MicroFeed.SPMicroFeed.$8a = function SP_UI_MicroFeed_SPMicroFeed$$8a($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    SP.UI.MySiteCommon.PresenceManager.drawLyncUserImage($p0, $p1, $p2, $p3, $p4, $p5, null, $p6 !== 48, true);
    $p0.className += ' ' + (($p6 === 48) ? SP.UI.MicroFeed.SPMicroFeed.$4V : SP.UI.MicroFeed.SPMicroFeed.$4P);
}
SP.UI.MicroFeed.SPMicroFeed.$8p = function SP_UI_MicroFeed_SPMicroFeed$$8p($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    return SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag($p0, $p1, $p2 + ' ' + (($p8 === 48) ? SP.UI.MicroFeed.SPMicroFeed.$4V : SP.UI.MicroFeed.SPMicroFeed.$4P)) + SP.UI.MySiteCommon.PresenceManager.getUserImageInnerHTML($p3, $p4, $p5, $p6, $p7, null, $p8 !== 48, true) + '</' + $p0 + '>';
}
SP.UI.MicroFeed.SPMicroFeed.$9b = function SP_UI_MicroFeed_SPMicroFeed$$9b($p0) {
    window.setTimeout(function() {
        SP.UI.MySiteCommon.PresenceManager.ensurePresenceJSLoaded(function() {
            var $v_0 = document.getElementsByName('authorElement');
            while ($v_0.length > 0) {
                var $v_1 = $v_0[0];
                if ($v_1 && $v_1.parentNode) {
                    var $v_2 = STSHtmlDecode($v_1.getAttribute('accountName'));
                    var $v_3 = STSHtmlDecode($v_1.getAttribute('displayName'));
                    var $v_4 = $v_1.getAttribute('src');
                    var $v_5 = $v_1.getAttribute('profileUri');
                    var $v_6 = STSHtmlDecode($v_1.getAttribute('email'));
                    var $v_7 = $v_1.clientHeight;
                    SP.UI.MicroFeed.SPMicroFeed.$8a($v_1.parentNode, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7);
                }
            }
            ProcessImn();
        });
    }, $p0);
}
SP.UI.MicroFeed.SPMicroFeed.$8c = function SP_UI_MicroFeed_SPMicroFeed$$8c($p0, $p1, $p2) {
    var $v_0 = document.createElement('div');
    var $v_1 = null;
    $p0.$2J_0 = false;
    $p0.$F_0 = true;
    $p0.$9_0 = $p1;
    $p0.$4_0 = $p2;
    $v_1 = SP.UI.MicroFeed.SPMicroFeed.$71($p0);
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$1b + $p1;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$30;
    if (!SP.UI.MicroFeed.SPMicroFeed.$1e($p0)) {
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.$8M($p0, $p2, true));
    }
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$71 = function SP_UI_MicroFeed_SPMicroFeed$$71($p0) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$29 + $p0.$4_0;
    $v_0.setAttribute('threadDivID', $p0.$9_0);
    var $v_1 = document.createElement('input');
    $v_1.name = $p0.$3_0;
    $v_1.type = 'hidden';
    $v_0.appendChild($v_1);
    if ($p0.$F_0) {
        $v_0.setAttribute('isRoot', 'true');
    }
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$4J + (($p0.$1_0 === 4 || $p0.$1_0 === 2 || $p0.$1_0 === 7 || $p0.$1_0 === 8) ? ' ms-microfeed-replyMessage' : '');
    if ($p0.$2J_0) {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$1L = function SP_UI_MicroFeed_SPMicroFeed$$1L($p0) {
    return !SP.UI.MicroFeed.SPMicroFeed.get_$X() || SP.UI.MicroFeed.SPMicroFeed.$2f($p0.$A_0, SP.UI.MicroFeed.SPMicroFeed.get_$X());
}
SP.UI.MicroFeed.SPMicroFeed.$2f = function SP_UI_MicroFeed_SPMicroFeed$$2f($p0, $p1) {
    if (!$p0 || !$p1 || $p0.get_actorType() !== $p1.get_actorType()) {
        return false;
    }
    if (!$p0.get_actorType()) {
        return $p0.get_accountName().toLowerCase() === $p1.get_accountName().toLowerCase();
    }
    return $p0.get_id() === $p1.get_id();
}
SP.UI.MicroFeed.SPMicroFeed.$8I = function SP_UI_MicroFeed_SPMicroFeed$$8I($p0) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$6Y + $p0.$4_0;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6X;
    var $v_1 = document.createElement('div');
    $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$64 + $p0.$4_0;
    $v_1.className = 'ms-microfeed-activityImageDiv';
    $v_1.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML('ms-microfeed-activityImage_' + $p0.$4_0, 'ms-microfeed-activityImage', $p0.$6_0.$1B_0, '');
    if (($p0 && SP.UI.MicroFeed.SPMicroFeed.$1e($p0)) || SP.UI.MicroFeed.SPMicroFeed.$1e($p0.$6_0) || $p0.$6_0.$b_0 === '') {
        $v_0.className = 'ms-metadata';
    }
    $v_0.appendChild($v_1);
    $v_0.innerHTML = $v_0.innerHTML + $p0.$6_0.$b_0;
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5k = function SP_UI_MicroFeed_SPMicroFeed$$5k($p0, $p1, $p2) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$3M + $p1;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$3L;
    $v_0.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.SPMicroFeed.$1o + $p1, $p2, $p0.get_previewUri() || $p0.get_uri(), 'alt=\"' + $p0.get_name() + '\"');
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$8M = function SP_UI_MicroFeed_SPMicroFeed$$8M($p0, $p1, $p2) {
    var $v_0 = 11;
    var $v_1 = document.createElement('div');
    var $v_2 = document.createElement('div');
    var $v_3 = null;
    var $v_4 = null;
    var $v_5 = document.createElement('a');
    $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$4K + $p1;
    $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$2n + $p1;
    $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$6H;
    $v_5.id = 'ms-viewthreadlink_' + $p1;
    $v_2.appendChild(SP.UI.MicroFeed.SPMicroFeed.$5p($p0, $p1, '', $p2, $v_0, false));
    if ($p0.$I_0) {
        var $v_6 = null;
        switch ($p0.$I_0.get_attachmentKind()) {
            case 0:
                $v_6 = SP.UI.MicroFeed.SPMicroFeed.$5k($p0.$I_0, $p1, 'ms-microfeed-smallAttachmentImage');
                break;
            case 1:
                $v_6 = SP.UI.MicroFeed.MicroFeedVideo.$5l($p0.$I_0, $p1);
                break;
            case 2:
                $v_6 = SP.UI.MicroFeed.MicroFeedDoc.$5h($p0.$I_0, $p1);
                break;
        }
        if ($v_6) {
            $v_2.appendChild($v_6);
        }
    }
    $v_3 = SP.UI.MicroFeed.SPMicroFeed.$5V($p0, $v_0, $p1, false);
    if ($p0.$19_0 > 0) {
        SP.UI.MicroFeed.SPMicroFeed.$g($v_3);
        $v_4 = document.createElement('span');
        $v_4.id = 'ms-replycount_' + $p1;
        $v_4.className = 'ms-microfeed-replyCountText ms-textSmall';
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_4, String.format(SP.Utilities.LocUtility.getLocalizedCountValue(SpsClient.ScriptResources.numRepliesText, SpsClient.ScriptResources.numRepliesTextIntervals, $p0.$19_0), $p0.$19_0));
        $v_3.appendChild($v_4);
    }
    SP.UI.MicroFeed.SPMicroFeed.$g($v_3);
    if (!SP.ScriptHelpers.isNullOrEmptyString($p0.$O_0)) {
        $v_5.className = 'ms-microfeed-viewThreadLink ' + SP.UI.MicroFeed.SPMicroFeed.$5A;
        $v_5.href = $p0.$O_0;
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_5, SpsClient.ScriptResources.viewFullThreadLinkText);
        $v_3.appendChild($v_5);
    }
    $v_2.appendChild($v_3);
    $v_1.appendChild($v_2);
    return $v_1;
}
SP.UI.MicroFeed.SPMicroFeed.$8P = function SP_UI_MicroFeed_SPMicroFeed$$8P($p0, $p1, $p2) {
    var $v_0 = '';
    if (!$p0.$p_0) {
        return $v_0;
    }
    $v_0 = SP.UI.MicroFeed.SPMicroFeed.$5r('ms-authorlabel_' + $p1, $p0.$A_0.get_uri(), $p0.$A_0.get_name(), (!$p0.$o_0));
    if ($p0.$B_0 && (!$p0.$o_0 || ($p0.$6_0 && $p0.$6_0.$1_0 === 10)) && !$p2 && SP.UI.MicroFeed.SPMicroFeed.$1d($p0.$B_0) && !SP.ScriptHelpers.isNullOrEmptyString($p0.$B_0.get_name())) {
        $v_0 = String.format(SpsClient.ScriptResources.postTitleFormatString, $v_0, SP.UI.MicroFeed.SPMicroFeed.$5r('ms-targetlabel_' + $p1, $p0.$B_0.get_uri(), $p0.$B_0.get_name(), (!$p0.$o_0)));
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5r = function SP_UI_MicroFeed_SPMicroFeed$$5r($p0, $p1, $p2, $p3) {
    return SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML($p0, $p2, (($p3) ? 'ms-microfeed-userName ms-textLarge ms-subtleLink' : 'ms-microfeed-userName ms-textSmall ms-bold ms-subtleLink'), $p1, '', true);
}
SP.UI.MicroFeed.SPMicroFeed.$5p = function SP_UI_MicroFeed_SPMicroFeed$$5p($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$69 + $p1;
    var $v_1 = $p0.$b_0;
    var $v_2 = '';
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$68 + ((!SP.ScriptHelpers.isNullOrEmptyString($p2)) ? ' ' + $p2 : '');
    if ($p4 !== 11) {
        $v_2 = SP.UI.MicroFeed.SPMicroFeed.$8P($p0, $p1, $p5);
        if ($v_2 !== '') {
            if ($p3) {
                $v_2 += '<br/>';
            }
            else {
                $v_2 += '&nbsp; ';
            }
        }
    }
    if (!SP.ScriptHelpers.isNullOrEmptyString($v_1)) {
        $v_2 += SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$6R + $p1, SP.UI.MicroFeed.SPMicroFeed.$6Q) + $v_1.replace(new RegExp('\r?\n', 'g'), '<br/>') + '</span>';
    }
    $v_0.innerHTML = $v_2;
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5T = function SP_UI_MicroFeed_SPMicroFeed$$5T($p0, $p1) {
    if ($p1.$1f_0) {
        $p0.addRootPostDropDownItem(SpsClient.ScriptResources.followUpDropDownText, function() {
            var $v_0 = document.createElement('span');
            $v_0.innerHTML = $p1.$b_0;
            var $v_1 = SP.UI.UIUtility.getInnerText($v_0);
            var $v_2 = 255 - String.format(SpsClient.ScriptResources.moreContentEllipsesNoSpace, '').length;
            var $v_3 = ($v_1.length > 255) ? String.format(SpsClient.ScriptResources.moreContentEllipsesNoSpace, $v_1.substr(0, $v_2)) : $v_1;
            var $v_4 = String.format(SpsClient.ScriptResources.followUpTaskDescription, $p1.$A_0.get_name(), $v_1);
            SP.UI.MicroFeed.SPMicroFeed.$8S($p1, $v_3, $v_4);
        });
        return true;
    }
    return false;
}
SP.UI.MicroFeed.SPMicroFeed.$8S = function SP_UI_MicroFeed_SPMicroFeed$$8S($p0, $p1, $p2) {
    SP.SOD.executeFunc('SP.WorkManagement.js', 'SP.WorkManagement.OM.TaskWriteResult', function() {
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            if (!SP.UI.MicroFeed.SPMicroFeed.$1Q) {
                SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
            }
            var $v_0 = new SP.WorkManagement.OM.SortableSessionManager(SP.UI.MicroFeed.SPMicroFeed.$L);
            var $v_1 = $v_0.createSession();
            var $v_2 = (!$p0.$O_0) ? '' : $p0.$O_0;
            var $v_3 = $v_1.createTask($p1, $p2, '', '', false, true, -1, $v_2);
            SP.UI.MicroFeed.SPMicroFeed.$L.load($v_3);
            SP.UI.MicroFeed.SPMicroFeed.$L.load($v_3.get_result());
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                var $v_4 = { txt: '', dt: '', img: null };
                if ($v_3.get_error() || !$v_3.get_result()) {
                    var $v_5 = new SP.UI.Notify.Notification(1, SpsClient.ScriptResources.followUpTaskCreatingFailed, false, '', null, $v_4);
                    $v_5.Show(false);
                }
                else {
                    $v_4['txt'] = SpsClient.ScriptResources.followUpTaskCreatedNotificationSubText;
                    var $v_6 = new SP.UI.Notify.Notification(1, SpsClient.ScriptResources.followUpTaskCreatedNotification, false, '', function() {
                        window.location.href = SP.Utilities.Utility.getLayoutsPageUrl('MySite.aspx?MySiteRedirect=AllTasks');
                    }, $v_4);
                    $v_6.Show(false);
                }
            }, function() {
                var $v_7 = { txt: '', dt: '', img: null };
                var $v_8 = new SP.UI.Notify.Notification(1, SpsClient.ScriptResources.followUpTaskCreatingFailed, false, '', null, $v_7);
                $v_8.Show(false);
            });
        });
    });
}
SP.UI.MicroFeed.SPMicroFeed.$8T = function SP_UI_MicroFeed_SPMicroFeed$$8T($p0) {
    switch ($p0.get_actorType()) {
        case 2:
            return SpsClient.ScriptResources.hideSiteRootDropDownText;
        case 1:
            return SpsClient.ScriptResources.hideDocumentRootDropDownText;
        case 0:
            return SpsClient.ScriptResources.stopFollowingRootDropDownText;
        default:
            return String.format(SpsClient.ScriptResources.stopFollowingObjectDropDownText, $p0.get_name());
    }
}
SP.UI.MicroFeed.SPMicroFeed.$5S = function SP_UI_MicroFeed_SPMicroFeed$$5S($p0, $p1, $p2) {
    var $v_0 = 0;
    var $v_1 = [];
    if ($p1 && $p1.length > 0) {
        var $v_2 = {};
        for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
            var $v_4 = $p1[$v_3];
            if ($v_4.get_canFollow()) {
                var $v_5 = $v_4.get_id();
                if ((!$v_5 || !$v_5.length) && $v_4.get_accountName()) {
                    $v_5 = $v_4.get_accountName();
                }
                if ($v_5 && !(($v_5) in $v_2) && SP.UI.MicroFeed.SPMicroFeed.$3Y) {
                    if (SP.UI.MicroFeed.SPMicroFeed.$7z($p0, $v_4, $p2)) {
                        $v_0++;
                        $v_1[$v_1.length] = $v_4;
                    }
                    $v_2[$v_5] = true;
                }
            }
        }
    }
    if ($v_0 > 0) {
        $p0.setOpenedCallback(function() {
            for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
                SP.UI.MicroFeed.SPMicroFeed.$8H($p0, $v_1[$v_6]);
            }
        });
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$8H = function SP_UI_MicroFeed_SPMicroFeed$$8H($p0, $p1) {
    var $v_0 = (!$p1.get_actorType()) ? SP.UI.People.PersonManager.getFollowState($p1.get_accountName()) : SP.UI.MicroFeed.SocialActorCache.isFollowedByMe($p1.get_id());
    var $v_1 = String.format(SP.UI.MicroFeed.SPMicroFeed.$2E($p1.get_actorType(), $v_0), $p1.get_name());
    var $v_2 = String.format(SP.UI.MicroFeed.SPMicroFeed.$2E($p1.get_actorType(), !$v_0), $p1.get_name());
    $p0.updateMySiteMenuItemByName($v_1, $v_2, function() {
        SP.UI.MicroFeed.SPMicroFeed.$2q($p1, !$v_0);
    });
}
SP.UI.MicroFeed.SPMicroFeed.$2E = function SP_UI_MicroFeed_SPMicroFeed$$2E($p0, $p1) {
    return (!$p0) ? (($p1) ? SpsClient.ScriptResources.followLinkTextWithName : SpsClient.ScriptResources.stopFollowingLinkTextWithName) : (($p1) ? SpsClient.ScriptResources.followObjectDropDownText : SpsClient.ScriptResources.stopFollowingObjectDropDownText);
}
SP.UI.MicroFeed.SPMicroFeed.$7z = function SP_UI_MicroFeed_SPMicroFeed$$7z($p0, $p1, $p2) {
    if (!$p1 || SP.UI.MicroFeed.SPMicroFeed.$2f($p1, SP.UI.MicroFeed.SPMicroFeed.get_$X()) || SP.UI.MicroFeed.SPMicroFeed.$2f($p1, $p2)) {
        return false;
    }
    var $v_0 = (!$p1.get_actorType()) ? SP.UI.People.PersonManager.getFollowState($p1.get_accountName()) : SP.UI.MicroFeed.SocialActorCache.isFollowedByMe($p1.get_id());
    if ($v_0) {
        return false;
    }
    var $v_1 = String.format(SP.UI.MicroFeed.SPMicroFeed.$2E($p1.get_actorType(), true), $p1.get_name());
    $p0.addRootPostDropDownItem($v_1, function() {
        SP.UI.MicroFeed.SPMicroFeed.$2q($p1, true);
    });
    return true;
}
SP.UI.MicroFeed.SPMicroFeed.$8Q = function SP_UI_MicroFeed_SPMicroFeed$$8Q($p0) {
    var $v_0 = document.createElement('a');
    $v_0.id = 'ms-postLink_' + $p0;
    $v_0.setAttribute('name', 'fullyOrphaned');
    $v_0.className = 'ms-microfeed-activityPostLink ' + SP.UI.MicroFeed.SPMicroFeed.$28;
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_0, SpsClient.ScriptResources.viewFullThreadText);
    $v_0.setAttribute('href', '#');
    $v_0.setAttribute('onclick', 'return false;');
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$3n = function SP_UI_MicroFeed_SPMicroFeed$$3n($p0, $p1) {
    var $v_0 = document.createElement('input');
    $v_0.id = $p0;
    $v_0.className = $p1;
    $v_0.type = 'text';
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$9U = function SP_UI_MicroFeed_SPMicroFeed$$9U($p0, $p1, $p2) {
    var $v_0 = $get('ms-threadLink_' + $p1);
    var $v_1 = null;
    if ($v_0) {
        SP.UI.MySiteCommon.CommonUIElements.display($v_0);
        $v_1 = $get('ms-threadLinkInput_' + $p1);
        if ($v_1) {
            $v_1.focus();
            $v_1.select();
        }
    }
    else {
        $v_0 = document.createElement('div');
        $v_0.id = 'ms-threadLink_' + $p1;
        $v_0.className = 'ms-microfeed-threadLinkDiv ms-textSmall';
        $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.threadLinkDescriptorText);
        $v_1 = SP.UI.MicroFeed.SPMicroFeed.$3n('ms-threadLinkInput_' + $p1, 'ms-microfeed-threadLinkInputBox');
        $v_1.setAttribute('readonly', 'readonly');
        $addHandler($v_1, 'blur', function($p1_0) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
        });
        $v_0.appendChild($v_1);
        $p2.insertBefore($v_0, $p2.firstChild);
        SP.UI.MicroFeed.SPMicroFeed.$9M($v_1, $p0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$9M = function SP_UI_MicroFeed_SPMicroFeed$$9M($p0, $p1) {
    $p0.focus();
    $p0.value = (($p1 && $p1.$O_0) ? $p1.$O_0 : '');
    $p0.select();
}
SP.UI.MicroFeed.SPMicroFeed.$2g = function SP_UI_MicroFeed_SPMicroFeed$$2g($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$29 + $p0);
    var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$3y + $p0);
    var $v_2 = document.createElement('div');
    var $v_3 = document.createElement('div');
    var $v_4 = document.createElement('div');
    var $v_5 = document.createElement('button');
    var $v_6 = document.createElement('button');
    var $v_7 = null;
    var $v_8 = 0;
    var $v_9 = 6;
    var $v_A = 0;
    var $v_B = 0;
    var $v_C = null;
    if ($v_1) {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_1);
    }
    if ($v_0) {
        $clearHandlers($v_0);
    }
    $v_5.id = 'ms-confConfirmButton_' + $p0;
    $v_6.id = 'ms-confCancelButton_' + $p0;
    $v_2.id = 'ms-confDiv_' + $p0;
    $v_3.id = 'ms-confMessageDiv_' + $p0;
    $v_2.className = 'ms-microfeed-confirmationDiv ms-shadow';
    $v_3.className = 'ms-microfeed-confMessageDiv';
    $v_5.className = 'ms-microfeed-confirmationDivButton ms-button-emphasize';
    $v_6.className = 'ms-microfeed-confirmationDivButton ms-microfeed-cancelButton';
    $v_4.className = 'ms-microfeed-confirmationButtonDiv';
    if (!SP.ScriptHelpers.isNullOrEmptyString($p4)) {
        $v_3.innerHTML = STSHtmlEncode($p3) + '<br/><br/>';
        SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv($v_3, $p4, '_' + $p0, null);
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_3, $p3);
    }
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_5, $p5);
    if (!SP.ScriptHelpers.isNullOrEmptyString($p6)) {
        $v_5.title = $p6;
    }
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_6, SpsClient.ScriptResources.cancelConfirmationDialogButtonText);
    $v_4.appendChild($v_5);
    $v_4.appendChild($v_6);
    $v_3.appendChild($v_4);
    if ($p2) {
        if (!SP.UI.MicroFeed.SPMicroFeed.$6o($get(SP.UI.MicroFeed.SPMicroFeed.$z + $p1))) {
            $v_8 = 6;
        }
        else {
            $v_8 = 31;
        }
        $v_2.className = $v_2.className + ' ms-microfeed-rootConfDiv';
        $v_7 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $p1);
        if ($v_7.previousSibling) {
            $v_7.previousSibling.className += ' ms-microfeed-noBottomBorder';
        }
    }
    else {
        $v_8 = 6;
        $v_2.className = $v_2.className + ' ms-microfeed-replyConfDiv';
        $v_7 = $v_0;
        $v_C = $get(SP.UI.MicroFeed.SPMicroFeed.$1b + $v_7.getAttribute('threadDivID'));
    }
    $v_2.style.marginTop = $v_8 + 'px';
    $v_2.style.marginBottom = $v_9 + 'px';
    $v_7.className += ' ' + SP.UI.MicroFeed.SPMicroFeed.$5D;
    $v_2.appendChild($v_3);
    $v_7.parentNode.insertBefore($v_2, $v_7);
    $v_5.focus();
    $v_A = $v_7.style.pixelHeight;
    if ($v_7.offsetHeight > 0) {
        $v_A = $v_7.offsetHeight;
    }
    $v_B = $v_2.style.pixelHeight;
    if ($v_2.offsetHeight > 0) {
        $v_B = $v_2.offsetHeight;
    }
    $v_B += $v_8 + $v_9;
    $v_7.style.height = Math.max($v_B, $v_A) + 'px';
    $addHandler($v_5, 'click', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$7c($v_0, $v_1, $v_2, $v_7, $v_C);
        $p7();
        $v_7.style.height = '';
    });
    $addHandler($v_6, 'click', function($p1_0) {
        SP.UI.MicroFeed.SPMicroFeed.$7c($v_0, $v_1, $v_2, $v_7, $v_C);
    });
    SP.UI.MicroFeed.SPMicroFeed.$8V($v_7);
    if ($v_C) {
        SP.UI.MicroFeed.SPMicroFeed.$3q($v_C);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$7c = function SP_UI_MicroFeed_SPMicroFeed$$7c($p0, $p1, $p2, $p3, $p4) {
    $p2.parentNode.removeChild($p2);
    if ($p3) {
        $p3.className = $p3.className.replace(SP.UI.MicroFeed.SPMicroFeed.$5D, '');
        $p3.style.height = '';
        if ($p3.previousSibling) {
            $p3.previousSibling.className = $p3.previousSibling.className.replace('ms-microfeed-noBottomBorder', '');
        }
    }
    if ($p0 && $p1) {
        $addHandler($p0, 'mouseover', function() {
            SP.UI.MySiteCommon.CommonUIElements.display($p1);
        });
        $addHandler($p0, 'mouseout', function() {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $p1);
        });
    }
    SP.UI.MicroFeed.SPMicroFeed.$8g($p3);
    if ($p4) {
        SP.UI.MicroFeed.SPMicroFeed.$61($p4);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$3q = function SP_UI_MicroFeed_SPMicroFeed$$3q($p0) {
    SP.UI.MicroFeed.SPMicroFeed.$2j($p0, 'button', true);
}
SP.UI.MicroFeed.SPMicroFeed.$61 = function SP_UI_MicroFeed_SPMicroFeed$$61($p0) {
    SP.UI.MicroFeed.SPMicroFeed.$2j($p0, 'button', false);
}
SP.UI.MicroFeed.SPMicroFeed.$8V = function SP_UI_MicroFeed_SPMicroFeed$$8V($p0) {
    SP.UI.MicroFeed.SPMicroFeed.$3q($p0);
    SP.UI.MicroFeed.SPMicroFeed.$2j($p0, 'a', true);
}
SP.UI.MicroFeed.SPMicroFeed.$8g = function SP_UI_MicroFeed_SPMicroFeed$$8g($p0) {
    SP.UI.MicroFeed.SPMicroFeed.$61($p0);
    SP.UI.MicroFeed.SPMicroFeed.$2j($p0, 'a', false);
}
SP.UI.MicroFeed.SPMicroFeed.$2j = function SP_UI_MicroFeed_SPMicroFeed$$2j($p0, $p1, $p2) {
    var $v_0 = null;
    $v_0 = $p0.getElementsByTagName($p1);
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1].disabled = $p2;
    }
}
SP.UI.MicroFeed.SPMicroFeed.$5u = function SP_UI_MicroFeed_SPMicroFeed$$5u($p0) {
    SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
        SPAnimationUtility.BasicAnimator.FadeOut($p0, function() {
            $p0.style.height = $p0.clientHeight + 'px';
            $p0.style.width = $p0.clientWidth + 'px';
            SPAnimationUtility.BasicAnimator.Resize($p0, 0, 0, function() {
                if ($get($p0.id)) {
                    if (($p0.getAttribute('deleted')) !== 'true') {
                        SP.UI.MicroFeed.SPMicroFeed.$2d($p0);
                    }
                    else {
                        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p0);
                    }
                    $p0.style.height = '';
                    $p0.style.width = '';
                }
            }, null);
        }, null);
    });
}
SP.UI.MicroFeed.SPMicroFeed.$2d = function SP_UI_MicroFeed_SPMicroFeed$$2d($p0) {
    $p0.removeAttribute('deleted');
    SP.UI.MySiteCommon.CommonUIElements.display($p0);
    SetOpacity($p0, 1);
}
SP.UI.MicroFeed.SPMicroFeed.$6o = function SP_UI_MicroFeed_SPMicroFeed$$6o($p0) {
    var $v_0 = 0;
    var $v_1 = null;
    if (!$p0) {
        return 0;
    }
    $v_1 = $p0.childNodes;
    if ($p0.hasChildNodes()) {
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            if (!SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_3)) {
                $v_0++;
            }
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$6y = function SP_UI_MicroFeed_SPMicroFeed$$6y($p0, $p1, $p2) {
    var $v_0 = $p0.id.substr($p0.id.indexOf('_') + 1);
    if (SP.UI.MicroFeed.SPMicroFeed.$6o($p0) === $p1) {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$2D + $v_0));
        var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$1I + $v_0);
        if ($v_1) {
            SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
                SPAnimationUtility.BasicAnimator.FadeOut($v_1, function() {
                    $v_1.style.height = $v_1.clientHeight + 'px';
                    $v_1.style.width = $v_1.clientWidth + 'px';
                    SPAnimationUtility.BasicAnimator.Resize($v_1, 0, $v_1.clientWidth, function() {
                        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_1);
                        $v_1.style.height = '';
                        $v_1.style.width = '';
                        SetOpacity($v_1, 1);
                        if ($p2) {
                            $p2();
                        }
                    }, null);
                }, null);
            });
            return true;
        }
    }
    return false;
}
SP.UI.MicroFeed.SPMicroFeed.$6s = function SP_UI_MicroFeed_SPMicroFeed$$6s() {
    var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, SpsClient.ScriptResources.lockThreadErrorMessage);
    $v_0.set_okButtonText(SpsClient.ScriptResources.closeButtonText);
    $v_0.set_hideCancelButton(true);
    $v_0.show();
    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
}
SP.UI.MicroFeed.SPMicroFeed.$6n = function SP_UI_MicroFeed_SPMicroFeed$$6n($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = document.createElement('span');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$48 + $p4;
    var $v_1 = '';
    if ($p1 > 0) {
        $v_1 = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$47 + $p4, SP.UI.MicroFeed.SPMicroFeed.$46) + SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.SPMicroFeed.$44 + $p4, ($p2) ? SP.UI.MicroFeed.SPMicroFeed.$45 : SP.UI.MicroFeed.SPMicroFeed.$43, SP.UI.MicroFeed.SPMicroFeed.get_$5K(), '') + '</span>';
    }
    $v_1 += SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$6F + $p4, '') + SP.UI.MicroFeed.SPMicroFeed.$8r($p1, $p2, $p3, $p4, $p5) + '</span>';
    $v_0.innerHTML = $v_1;
    var $v_2 = SP.UI.MicroFeed.SPMicroFeed.$4W + $p4;
    var $v_3 = SP.UI.MySiteCommon.CommonUIElements.findElementByID($v_0, $v_2);
    if ($p1 > 0 && $v_3 && $p5) {
        SP.UI.MicroFeed.AllLikerDisplayManager.createAllLikerCallout($p0, $v_3);
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$8r = function SP_UI_MicroFeed_SPMicroFeed$$8r($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = '';
    var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$4W + $p3;
    var $v_2 = ($p4) ? SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag($v_1, SP.UI.MicroFeed.SPMicroFeed.$41, '#', 'title=\"' + STSHtmlEncode(SpsClient.ScriptResources.seeAllLikerTitle) + '\"') : '';
    var $v_3 = ($p4) ? '</a>' : '';
    if (!$p2) {
        if ($p0 > 0) {
            if ($p1) {
                $v_0 += (($p0 === 1) ? STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYou) : String.format(STSHtmlEncode(SP.Utilities.LocUtility.getLocalizedCountValue(SpsClient.ScriptResources.likeIndicatorNoNamesYouAndOthers_withAnchor, SpsClient.ScriptResources.likeIndicatorNoNamesYouAndOthers_withAnchorIntervals, $p0 - 1)), $v_2, $p0 - 1, $v_3));
            }
            else {
                $v_0 += String.format(STSHtmlEncode(SP.Utilities.LocUtility.getLocalizedCountValue(SpsClient.ScriptResources.likeIndicatorNoNames_withAnchor, SpsClient.ScriptResources.likeIndicatorNoNames_withAnchorIntervals, $p0)), $v_2, $p0, $v_3);
            }
        }
    }
    else {
        switch ($p0) {
            case 0:
                break;
            case 1:
                if ($p1) {
                    $v_0 += STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYou);
                }
                else {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicator1Other), $p2[0]);
                }
                break;
            case 2:
                if ($p1) {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYouAnd1Other), $p2[0]);
                }
                else {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicator2Others), $p2[0], $p2[1]);
                }
                break;
            case 3:
                if ($p1) {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYouAnd2Others), $p2[0], $p2[1]);
                }
                else {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicator3Others_withAnchor), $p2[0], $v_2, $v_3);
                }
                break;
            default:
                if ($p1) {
                    if ($p0 === 4) {
                        $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYouAnd3Others_withAnchor), $p2[0], $v_2, $v_3);
                    }
                    else {
                        $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorYouAndManyOthers_withAnchor), $p2[0], $p2[1], $v_2, $p0 - 3, $v_3);
                    }
                }
                else {
                    $v_0 += String.format(STSHtmlEncode(SpsClient.ScriptResources.likeIndicatorManyOthers_withAnchor), $p2[0], $p2[1], $v_2, $p0 - 2, $v_3);
                }
                break;
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$g = function SP_UI_MicroFeed_SPMicroFeed$$g($p0) {
    var $v_0 = SP.UI.UIUtility.getInnerText($p0);
    if (!SP.ScriptHelpers.isNullOrEmptyString($v_0)) {
        var $v_1 = document.createElement('span');
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$7Q;
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, '');
        $p0.appendChild($v_1);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$7x = function SP_UI_MicroFeed_SPMicroFeed$$7x($p0, $p1, $p2) {
    if (!$p0 || !$p1) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = null;
    if ($p0.$S_0) {
        $p0.$S_0.sort(SP.UI.MicroFeed.MicrofeedEntry.actorComparison);
    }
    if (!$p0.$k_0 && SP.UI.MicroFeed.SPMicroFeed.get_$X() && !SP.UI.MicroFeed.SPMicroFeed.$1L($p0) && !$p0.$A_0.get_actorType() && $p0.$1_0 !== 10) {
        $v_0 = $p0.$A_0;
    }
    else if ($p0.$S_0) {
        for (var $v_2 = 0; $v_2 < $p0.$S_0.length; $v_2++) {
            var $v_3 = $p0.$S_0[$v_2];
            if (!$v_3.get_actorType()) {
                if (!SP.UI.People.PersonManager.getFollowState($v_3.get_accountName()) && !SP.UI.MicroFeed.SPMicroFeed.$2f($v_3, SP.UI.MicroFeed.SPMicroFeed.get_$X())) {
                    $v_0 = $v_3;
                    break;
                }
            }
            else if (!SP.UI.MicroFeed.SocialActorCache.isFollowedByMe($v_3.get_id())) {
                $v_0 = $v_3;
                break;
            }
        }
    }
    if ($v_0 && $v_0.get_canFollow() && SP.UI.MicroFeed.SPMicroFeed.$3Y) {
        if (!$v_0.get_actorType()) {
            var $v_4 = SP.UI.People.FollowLinkManager.getLink($v_0.get_accountName());
            if ($v_4) {
                $v_1 = $v_4.htmlForCustomLink(SP.UI.People.FollowLink.microfeedIdPrefixAndSource + '_' + $p2 + '_', SP.UI.People.FollowLink.microfeedIdPrefixAndSource, false, true, true);
            }
        }
        else {
            $v_1 = document.createElement('a');
            $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$6B + $p0.$4_0;
            $v_1.setAttribute('href', '#');
            $v_1.setAttribute('onclick', 'return false;');
            $v_1.setAttribute('name', SP.UI.MicroFeed.SPMicroFeed.$4H + $v_0.get_id());
            $v_1.innerHTML = STSHtmlEncode(String.format(SP.UI.MicroFeed.SPMicroFeed.$2E($v_0.get_actorType(), true), $v_0.get_name()));
            $addHandler($v_1, 'click', function($p1_0) {
                SP.UI.MicroFeed.SPMicroFeed.$2q($v_0, true);
            });
        }
    }
    if ($v_1) {
        SP.UI.MicroFeed.SPMicroFeed.$g($p1);
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$28;
        $p1.appendChild($v_1);
        return $v_0;
    }
    return null;
}
SP.UI.MicroFeed.SPMicroFeed.$5V = function SP_UI_MicroFeed_SPMicroFeed$$5V($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('div');
    $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$6J + $p2;
    $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6I;
    if (($p1 === 1 || $p1 === 6 || $p1 === 11) && !$p0.$J_0) {
        var $v_4 = document.createElement('div');
        $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$49 + $p2;
        $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$6E;
        var $v_5 = null;
        if ($p1 !== 11) {
            $v_5 = SP.UI.MicroFeed.SPMicroFeed.$5X($p0.$16_0, $v_4, true);
        }
        $v_4.setAttribute('numLikers', $p0.$m_0);
        $v_4.appendChild(SP.UI.MicroFeed.SPMicroFeed.$6n($p0, $p0.$m_0, $p0.$15_0, $v_5, $p2, $p3));
        if ($p0.$m_0 <= 0) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_4);
        }
        $v_0.appendChild($v_4);
    }
    var $v_1 = document.createElement('span');
    $v_1.id = 'ms-timesource_' + $p2;
    $v_1.className = 'ms-metadata';
    var $v_2 = (($p0.$J_0 && $p0.$6_0) ? $p0.$6_0 : $p0).$13_0;
    var $v_3 = false;
    if ($v_2) {
        $v_3 = true;
        $v_2 = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', 'ms-relativetime_' + $p2, 'ms-microfeed-postedTime') + $v_2 + '</span>';
    }
    if (!SP.ScriptHelpers.isNullOrEmptyString($p0.$1P_0)) {
        $v_3 = true;
        var $v_6 = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', 'ms-source_' + $p2, '');
        if (!SP.ScriptHelpers.isNullOrEmptyString($p0.$1m_0)) {
            $v_6 += SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('ms-sourcelink_' + $p2, $p0.$1P_0, 'ms-subtleLink', $p0.$1m_0, 'target=\"_blank\"', true) + '</span>';
        }
        else {
            $v_6 += STSHtmlEncode($p0.$1P_0) + '</span>';
        }
        if ($v_2) {
            $v_1.innerHTML = String.format(STSHtmlEncode(SpsClient.ScriptResources.postFooter), $v_2, $v_6);
        }
        else {
            $v_1.innerHTML = String.format(STSHtmlEncode(SpsClient.ScriptResources.postFooterOnlySource), $v_6);
        }
    }
    else if ($v_2) {
        $v_1.innerHTML = $v_2;
    }
    if ($v_3) {
        $v_0.appendChild($v_1);
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5X = function SP_UI_MicroFeed_SPMicroFeed$$5X($p0, $p1, $p2) {
    var $v_0 = [ '', '' ];
    var $v_1 = 0, $v_2 = 0;
    var $v_3 = null;
    if ($p0) {
        for ($v_1 = 0; $v_1 < $p0.length && $v_2 < $v_0.length; $v_1++) {
            $v_3 = $p0[$v_1];
            if (!$v_3 || $v_3.get_actorType()) {
                continue;
            }
            $v_0[$v_2] = SP.UI.MicroFeed.SPMicroFeed.$4c($v_3.get_name(), ($p2) ? $v_3.get_uri() : null);
            $p1.setAttribute('liker_' + $v_2, $v_3.get_name());
            if ($p2) {
                $p1.setAttribute('likerUri_' + $v_2, $v_3.get_uri());
            }
            $v_2++;
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$4c = function SP_UI_MicroFeed_SPMicroFeed$$4c($p0, $p1) {
    if (SP.ScriptHelpers.isNullOrEmptyString($p1)) {
        return STSHtmlEncode($p0);
    }
    return SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('ms-linkToLikers', $p0, 'ms-subtleLink', $p1, '', true);
}
SP.UI.MicroFeed.SPMicroFeed.$8n = function SP_UI_MicroFeed_SPMicroFeed$$8n($p0, $p1, $p2) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$4U + $p0);
    if (!$v_0) {
        $v_0 = document.createElement('span');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$4U + $p0;
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6e;
    }
    var $v_1 = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$6d + $p0, '') + SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$47 + $p0, SP.UI.MicroFeed.SPMicroFeed.$46) + SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.SPMicroFeed.$44 + $p0, (($p2) ? SP.UI.MicroFeed.SPMicroFeed.$45 : SP.UI.MicroFeed.SPMicroFeed.$43), SP.UI.MicroFeed.SPMicroFeed.get_$5K(), '') + '</span>' + SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('span', SP.UI.MicroFeed.SPMicroFeed.$4S + $p0, '') + $p1 + '</span></span>';
    $v_0.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$4T + $p0, SP.UI.MicroFeed.SPMicroFeed.$41, '#', 'onclick=\"return false;\" title=\"' + SpsClient.ScriptResources.seeAllLikerTitle + '\"') + $v_1 + '</a>';
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$5W = function SP_UI_MicroFeed_SPMicroFeed$$5W($p0, $p1, $p2, $p3, $p4) {
    if (!$p0) {
        return;
    }
    var $v_0 = null;
    var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$8n($p2, $p1, $p4);
    if (!$v_1) {
        return;
    }
    if (!$get($v_1.id)) {
        SP.UI.MicroFeed.SPMicroFeed.$g($p0);
        $p0.appendChild($v_1);
    }
    $v_0 = $v_1.previousSibling;
    if ($p1 <= 0) {
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_1);
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
    }
    else {
        SP.UI.MySiteCommon.CommonUIElements.display($v_1);
        SP.UI.MySiteCommon.CommonUIElements.display($v_0);
        var $v_2 = SP.UI.MicroFeed.SPMicroFeed.$4T + $p2;
        var $v_3 = SP.UI.MySiteCommon.CommonUIElements.findElementByID($v_1, $v_2);
        SP.UI.MicroFeed.AllLikerDisplayManager.createAllLikerCallout($p3, $v_3);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$96 = function SP_UI_MicroFeed_SPMicroFeed$$96($p0, $p1, $p2) {
    var $v_0 = ($p0.target.getAttribute('liked')) === 'true';
    SP.UI.MySiteCommon.CommonUIElements.setElementText($p0.target, ($v_0) ? SpsClient.ScriptResources.likeCommandText : SpsClient.ScriptResources.unlikeCommandText);
    $p0.target.disabled = true;
    SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
        var $v_1 = ($v_0) ? SP.UI.MicroFeed.SPMicroFeed.get_$D().unlikePost($p1) : SP.UI.MicroFeed.SPMicroFeed.get_$D().likePost($p1);
        SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
            var $v_2 = $v_1.get_status();
            if ($v_2 && $v_2 !== 5 && $v_2 !== 8) {
                SP.UI.MicroFeed.SPMicroFeed.$74($p0, $v_0, null);
            }
            else {
                SP.UI.MicroFeed.SPMicroFeed.$75($p0, $p1, $v_0, $v_1, $p2);
            }
        }, function($p2_0, $p2_1) {
            if ($p2_1.get_errorCode() === 5) {
                SP.UI.MicroFeed.SPMicroFeed.$75($p0, $p1, $v_0, null, $p2);
            }
            else {
                SP.UI.MicroFeed.SPMicroFeed.$74($p0, $v_0, $p2_1);
            }
        });
    });
}
SP.UI.MicroFeed.SPMicroFeed.$75 = function SP_UI_MicroFeed_SPMicroFeed$$75($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = 0;
    var $v_1 = null;
    var $v_2 = null;
    var $v_3 = null;
    var $v_4 = null;
    var $v_5 = '';
    var $v_6 = '';
    var $v_7 = null;
    var $v_8 = 0;
    if ($p3) {
        SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate($p3, false);
    }
    $v_3 = document.getElementsByName($p1);
    for (var $v_9 = 0; $v_9 < $v_3.length; $v_9++) {
        $v_0 = ($p2) ? -1 : 1;
        $v_4 = $v_3[$v_9].parentNode;
        $v_5 = $v_4.getAttribute('threadDivID');
        $v_6 = $v_4.id.substr($v_4.id.indexOf('_') + 1);
        $v_7 = $get(SP.UI.MicroFeed.SPMicroFeed.$42 + $v_6);
        $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $v_5);
        $v_8 = parseInt($v_2.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$t));
        if (!$v_7) {
            continue;
        }
        if ($p2 && $v_7.getAttribute('liked') === 'true') {
            $v_7.removeAttribute('liked');
            $v_8 = Math.max($v_8 - 1, 0);
        }
        else if (!$p2 && $v_7.getAttribute('liked') !== 'true') {
            $v_7.setAttribute('liked', 'true');
            $v_8++;
        }
        else {
            continue;
        }
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_7, ($p2) ? SpsClient.ScriptResources.likeCommandText : SpsClient.ScriptResources.unlikeCommandText);
        SP.UI.MicroFeed.SPMicroFeed.$5O($v_2, $v_8, $v_7 === $p0.target);
        if ($v_4.getAttribute('isRoot') === 'true') {
            SP.UI.MicroFeed.SPMicroFeed.$9c($p2, $v_0, $v_6, $p4);
        }
        else {
            $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$4S + $v_6);
            $v_0 += (!$v_1) ? 0 : parseInt(SP.UI.UIUtility.getInnerText($v_1));
            SP.UI.MicroFeed.SPMicroFeed.$5W($get('ms-footer_' + $v_6), $v_0, $v_6, $p4, !$p2);
        }
    }
    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
    $p0.target.disabled = false;
}
SP.UI.MicroFeed.SPMicroFeed.$9c = function SP_UI_MicroFeed_SPMicroFeed$$9c($p0, $p1, $p2, $p3) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$49 + $p2);
    var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$48 + $p2);
    var $v_2 = [ '', '' ];
    $p1 += parseInt($v_0.getAttribute('numLikers'));
    $v_0.setAttribute('numLikers', $p1);
    $v_2[0] = SP.UI.MicroFeed.SPMicroFeed.$4c($v_0.getAttribute('liker_' + 0), $v_0.getAttribute('likerUri_' + 0));
    $v_2[1] = SP.UI.MicroFeed.SPMicroFeed.$4c($v_0.getAttribute('liker_' + 1), $v_0.getAttribute('likerUri_' + 1));
    if ($p1 > 0) {
        SP.UI.MySiteCommon.CommonUIElements.display($v_0);
        $v_0.innerHTML = '';
        $v_1 = SP.UI.MicroFeed.SPMicroFeed.$6n($p3, $p1, !$p0, $v_2, $p2, true);
        var $v_3 = (!$p0 && $p1 === 1);
        if ($v_3) {
            SP.UI.MicroFeed.SPMicroFeed.$1z($v_1, $v_0, null, false);
        }
        else {
            $v_0.appendChild($v_1);
        }
    }
    else {
        SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
            SPAnimationUtility.BasicAnimator.FadeOut($v_0, function() {
                $v_0.style.paddingBottom = '0';
                $v_0.style.height = $v_0.clientHeight + 'px';
                $v_0.style.width = $v_0.clientWidth + 'px';
                $v_0.innerHTML = '';
                SPAnimationUtility.BasicAnimator.Resize($v_0, 0, 0, function() {
                    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
                    $v_0.style.height = '';
                    $v_0.style.width = '';
                    $v_0.style.paddingBottom = '';
                    SetOpacity($v_0, 1);
                }, null);
            }, null);
        });
    }
}
SP.UI.MicroFeed.SPMicroFeed.$74 = function SP_UI_MicroFeed_SPMicroFeed$$74($p0, $p1, $p2) {
    if ($p2 && $p2.get_errorCode() === 2) {
        SP.UI.MicroFeed.SPMicroFeed.$2h(function() {
            SP.UI.MicroFeed.SPMicroFeed.$5Z($p0, $p1);
        });
    }
    else {
        var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, ($p1) ? SpsClient.ScriptResources.unLikeErrorMessage : SpsClient.ScriptResources.likeErrorMessage);
        $v_0.set_okButtonCallback(function() {
            SP.UI.MicroFeed.SPMicroFeed.$5Z($p0, $p1);
        });
        $v_0.set_hideCancelButton(true);
        $v_0.show();
    }
}
SP.UI.MicroFeed.SPMicroFeed.$5Z = function SP_UI_MicroFeed_SPMicroFeed$$5Z($p0, $p1) {
    SP.UI.MySiteCommon.CommonUIElements.setElementText($p0.target, ($p1) ? SpsClient.ScriptResources.unlikeCommandText : SpsClient.ScriptResources.likeCommandText);
    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
}
SP.UI.MicroFeed.SPMicroFeed.$91 = function SP_UI_MicroFeed_SPMicroFeed$$91($p0) {
    if (!$p0) {
        return true;
    }
    return $p0.innerHTML === '' || $p0.innerHTML === STSHtmlEncode(SpsClient.ScriptResources.replyLimitErrorText);
}
SP.UI.MicroFeed.SPMicroFeed.getTextBoxFocusDiv = function SP_UI_MicroFeed_SPMicroFeed$getTextBoxFocusDiv(textBox, isRoot) {
    if (isRoot) {
        return $get(SP.UI.MicroFeed.SPMicroFeed.$57);
    }
    else {
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID(textBox.id);
        return $get(SP.UI.MicroFeed.SPMicroFeed.$4R + $v_0);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$63 = function SP_UI_MicroFeed_SPMicroFeed$$63($p0, $p1) {
    var $v_0 = $get($p0);
    var $v_1 = SP.UI.MicroFeed.SPMicroFeed.getTextBoxFocusDiv($v_0, $p1);
    if ($v_1) {
        $v_1.className = $v_1.className.replace(SP.UI.MicroFeed.SPMicroFeed.$56, SP.UI.MicroFeed.SPMicroFeed.$2Q);
    }
    if (SP.UI.MicroFeed.SPMicroFeed.$s) {
        window.clearInterval(SP.UI.MicroFeed.SPMicroFeed.$3a);
    }
}
SP.UI.MicroFeed.SPMicroFeed.$9Z = function SP_UI_MicroFeed_SPMicroFeed$$9Z() {
    if (!SP.UI.MicroFeed.SPMicroFeed.$L) {
        SP.UI.MicroFeed.SPMicroFeed.$L = SP.ClientContext.get_current();
    }
    var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$1u.getPeopleFollowedByMe();
    SP.UI.MicroFeed.SPMicroFeed.$L.load($v_0, SP.UI.People.MySitePeopleUtilities.personPropertiesToIncludeInCollection);
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.$9a = function SP_UI_MicroFeed_SPMicroFeed$$9a($p0) {
    if (!$p0) {
        return;
    }
    SP.UI.MicroFeed.BaseAtMention.setFollowedPeople($p0);
    if (document.activeElement && document.activeElement.className.indexOf(SP.UI.MicroFeed.SPMicroFeed.$3T) > -1) {
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$N[SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID(document.activeElement.id)];
        if ($v_0) {
            $v_0.correctDropdownState();
        }
    }
    if (SP.UI.MicroFeed.SPMicroFeed.$2S) {
        SP.UI.MicroFeed.SPMicroFeed.$2S();
    }
}
SP.UI.MicroFeed.SPMicroFeed.$24 = function SP_UI_MicroFeed_SPMicroFeed$$24($p0, $p1) {
    SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$26);
        if ($v_0) {
            if ($p1) {
                SPAnimationUtility.BasicAnimator.FadeIn($v_0, function() {
                    if ($p0) {
                        $p0();
                    }
                }, null);
            }
            else {
                SPAnimationUtility.BasicAnimator.FadeOut($v_0, function() {
                    if ($p0) {
                        $p0();
                    }
                }, null);
            }
        }
    });
}
SP.UI.MicroFeed.SPMicroFeed.$1z = function SP_UI_MicroFeed_SPMicroFeed$$1z($p0, $p1, $p2, $p3) {
    if (!$p0 || !$p1) {
        return;
    }
    var $v_0 = document.createElement('div');
    var $v_1 = 0;
    var $v_2 = 0;
    var $v_3 = $p0.style.zIndex;
    var $v_4 = $p0.style.position;
    var $v_5 = $p0.style.left;
    var $v_6 = $p0.style.top;
    $p0.style.zIndex = 1;
    $p0.style.position = 'absolute';
    $p0.style.left = '0px';
    $p0.style.top = '0px';
    SetOpacity($p0, 0);
    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $p0);
    if (!$p3) {
        $p1.insertBefore($p0, $p1.firstChild);
    }
    else {
        $p1.appendChild($p0);
    }
    $v_1 = $p0.clientHeight;
    $v_2 = $p0.clientWidth;
    $v_0.style.height = '0px';
    $v_0.style.width = '0px';
    $p1.insertBefore($v_0, $p0);
    SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
        SPAnimationUtility.BasicAnimator.Resize($v_0, $v_1, $v_2, function() {
            $p1.removeChild($v_0);
            $p0.style.left = $v_5;
            $p0.style.top = $v_6;
            $p0.style.zIndex = $v_3;
            $p0.style.position = $v_4;
            SP.UI.MicroFeed.SPMicroFeed.$7k($p0, 2);
            SP.UI.MySiteCommon.CommonUIElements.display($p0);
            SPAnimationUtility.BasicAnimator.FadeIn($p0, $p2, null);
        }, null);
    });
}
SP.UI.MicroFeed.SPMicroFeed.$7k = function SP_UI_MicroFeed_SPMicroFeed$$7k($p0, $p1) {
    if (!$p0) {
        return;
    }
    if ($p1 > 0) {
        var $v_0 = $p0.childNodes;
        if ($v_0) {
            var $v_1 = $v_0.length;
            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
                if ($v_0[$v_2].nodeType !== 3) {
                    SetOpacity($v_0[$v_2], 1);
                    SP.UI.MicroFeed.SPMicroFeed.$7k($v_0[$v_2], $p1 - 1);
                }
            }
        }
    }
}
SP.UI.MicroFeed.SPMicroFeed.$7f = function SP_UI_MicroFeed_SPMicroFeed$$7f($p0, $p1) {
    if ($p0) {
        var $v_0 = $get($p1);
        if ($v_0 && $v_0.parentNode) {
            $p0.id = $p1;
            $v_0.parentNode.replaceChild($p0, $v_0);
        }
    }
}
SP.UI.MicroFeed.SPMicroFeed.$2h = function SP_UI_MicroFeed_SPMicroFeed$$2h($p0) {
    var $v_0 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, SpsClient.ScriptResources.lossOfPermissionsDialogText);
    $v_0.set_okButtonCallback($p0);
    $v_0.set_hideCancelButton(true);
    $v_0.show();
}
SP.UI.MicroFeed.SPMicroFeed.$5L = function SP_UI_MicroFeed_SPMicroFeed$$5L($p0) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$2o + $p0);
    if ($v_0) {
        $v_0.innerHTML = '';
        $v_0.appendChild(SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon('', ''));
        return true;
    }
    return false;
}
SP.UI.MicroFeed.SPMicroFeed.$5M = function SP_UI_MicroFeed_SPMicroFeed$$5M($p0) {
    var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$2o + $p0);
    if ($v_0) {
        $v_0.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.SPMicroFeed.$4C + $p0, SP.UI.MicroFeed.SPMicroFeed.$2p, SP.UI.MicroFeed.SPMicroFeed.get_$1H(), '');
    }
}
SP.UI.MicroFeed.SPMicroFeed.$2q = function SP_UI_MicroFeed_SPMicroFeed$$2q($p0, $p1) {
    SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
    SP.UI.MicroFeed.SPMicroFeed.$3k($p0, !$p1, false);
    var $v_0 = function() {
        SP.UI.MicroFeed.SPMicroFeed.$6t($p0, $p1);
    };
    var $v_1 = function() {
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        SP.UI.MicroFeed.SPMicroFeed.$3k($p0, $p1, true);
    };
    if (!$p0.get_actorType()) {
        var $v_2 = SP.UI.People.FollowLinkManager.getLink($p0.get_accountName());
        if ($v_2 && $v_2.get_followingState() !== $p1) {
            $v_2.onClick(SP.UI.People.FollowLink.microfeedIdPrefixAndSource);
        }
        else {
            SP.UI.MicroFeed.SPMicroFeed.$6t($p0, $p1);
        }
    }
    else if ($p0.get_actorType() === 3) {
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            if ($p1) {
                SP.UI.MicroFeed.SPMicroFeed.get_$5F().followTag($p0.get_tagGuid());
            }
            else {
                SP.UI.MicroFeed.SPMicroFeed.get_$5F().stopFollowingTag($p0.get_tagGuid());
            }
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded($v_0, $v_1);
        });
    }
    else {
        SP.SOD.executeFunc('followingcommon.js', 'SetFollowStatus', function() {
            SetFollowStatus($p0.get_uri(), $p1, $p0.get_actorType() === 1, $v_0, $v_1);
        });
    }
}
SP.UI.MicroFeed.SPMicroFeed.$6t = function SP_UI_MicroFeed_SPMicroFeed$$6t($p0, $p1) {
    if (!$p0.get_actorType()) {
        var $v_0 = SP.UI.People.FollowLinkManager.getLink($p0.get_accountName());
        if ($v_0) {
            $v_0.updateFromExternalSource($p1, SP.UI.People.FollowLink.microfeedIdPrefixAndSource);
        }
    }
    else {
        SP.UI.MicroFeed.SPMicroFeed.$3k($p0, !$p1, true);
        SP.UI.MicroFeed.SocialActorCache.setIsFollowedByMeValue($p0, $p1);
    }
    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
}
SP.UI.MicroFeed.SPMicroFeed.$3k = function SP_UI_MicroFeed_SPMicroFeed$$3k($p0, $p1, $p2) {
    if ($p0 && $p0.get_actorType()) {
        var $v_0 = document.getElementsByName(SP.UI.MicroFeed.SPMicroFeed.$4H + $p0.get_id());
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2) {
                SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, String.format(SP.UI.MicroFeed.SPMicroFeed.$2E($p0.get_actorType(), $p1), $p0.get_name()));
                $v_2.disabled = !$p2;
                $clearHandlers($v_2);
                $addHandler($v_2, 'click', function($p1_0) {
                    SP.UI.MicroFeed.SPMicroFeed.$2q($p0, $p1);
                });
            }
        }
    }
}
SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv = function SP_UI_MicroFeed_SPMicroFeed$createClearFloatsDiv() {
    var $v_0 = document.createElement('div');
    $v_0.className = 'ms-clear';
    return $v_0;
}
SP.UI.MicroFeed.SPMicroFeed.prototype = {
    $3B_0: null,
    $7_0: 0,
    
    get_webPartFeedType: function SP_UI_MicroFeed_SPMicroFeed$get_webPartFeedType() {
        return this.$7_0;
    },
    
    $M_0: null,
    
    get_targetID: function SP_UI_MicroFeed_SPMicroFeed$get_targetID() {
        return this.$M_0;
    },
    set_targetID: function SP_UI_MicroFeed_SPMicroFeed$set_targetID(value) {
        this.$M_0 = value;
        return value;
    },
    
    $K_0: false,
    
    get_hasWritePermission: function SP_UI_MicroFeed_SPMicroFeed$get_hasWritePermission() {
        return this.$K_0;
    },
    set_hasWritePermission: function SP_UI_MicroFeed_SPMicroFeed$set_hasWritePermission(value) {
        this.$K_0 = value;
        return value;
    },
    
    $14_0: false,
    $5_0: null,
    $3C_0: 0,
    $E_0: null,
    $4q_0: null,
    $1k_0: null,
    $1O_0: false,
    $4t_0: false,
    $2I_0: false,
    $4r_0: 0,
    $8_0: 0,
    $1i_0: 0,
    $18_0: 0,
    $1j_0: false,
    $1A_0: null,
    $1l_0: 0,
    $4u_0: null,
    $3G_0: null,
    $1h_0: null,
    $3A_0: null,
    $3H_0: false,
    $4v_0: false,
    $3F_0: '',
    $3E_0: '',
    $3J_0: '',
    $3I_0: '',
    $T_0: null,
    $12_0: null,
    $7A_0: false,
    $4s_0: 1,
    $G_0: '',
    
    initializeViewsAndThreadAttributes: function SP_UI_MicroFeed_SPMicroFeed$initializeViewsAndThreadAttributes() {
        var $v_0 = null;
        var $v_1 = [];
        var $v_2 = '</a>';
        if (this.$7_0 === 1) {
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(0, 'true');
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(1, 'true');
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(2, 'true');
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(4, 'true');
            var $v_4 = 'SP.UI.MicroFeed.SPMicroFeed.switchToCompanyFeedView();';
            if (SP._yam) {
                $v_0 = String.format(STSHtmlEncode(SpsClient.ScriptResources.yammerEmptyFeedDueToNoActivity), SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', '', SP.UI.MySiteCommon.CommonUIElements.ensureTrailingSlash(_spPageContextInfo.webAbsoluteUrl) + SP.UI.MicroFeed.SPMicroFeed.$7m, ''), $v_2);
            }
            else {
                $v_0 = String.format(STSHtmlEncode(SpsClient.ScriptResources.emptyFeedDueToNoActivity), SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', '', SP.UI.MySiteCommon.CommonUIElements.ensureTrailingSlash(_spPageContextInfo.webAbsoluteUrl) + SP.UI.MicroFeed.SPMicroFeed.$6O, ''), $v_2, SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', 'ms-link', '#', 'onclick=\"' + $v_4 + 'return false;\"'), $v_2);
            }
            this.$1i_0 = this.$5_0.length;
            this.$5_0[this.$5_0.length] = SP.UI.MicroFeed.MicroFeedView.createView($v_1, 1, SpsClient.ScriptResources.followingViewName, $v_0, '');
            $v_1 = [];
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(0, 'true');
            $v_0 = STSHtmlEncode(SpsClient.ScriptResources.emptyFeedDueToCacheIssues);
            SP.UI.MicroFeed.SPMicroFeed.$1t = this.$5_0.length;
            this.$5_0[this.$5_0.length] = SP.UI.MicroFeed.MicroFeedView.createView($v_1, 4, SpsClient.ScriptResources.companyFeedViewName, $v_0, '');
            $v_1 = [];
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(3, 'true');
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(0, 'true');
            this.$18_0 = this.$5_0.length;
            $v_0 = STSHtmlEncode(SpsClient.ScriptResources.emptyMentionView);
            this.$5_0[this.$5_0.length] = SP.UI.MicroFeed.MicroFeedView.createView($v_1, 5, SpsClient.ScriptResources.mentionsViewName, $v_0, STSHtmlEncode(SpsClient.ScriptResources.mentionsViewDescription));
        }
        $v_1 = [];
        $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(1, 'true');
        $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(2, 'true');
        $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(0, 'true');
        var $v_3 = 'SP.UI.MicroFeed.SPMicroFeed.setFocusOnRootPostInputBox();';
        if (this.$7_0 === 1) {
            $v_0 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', 'ms-link', '#', 'onclick=\"' + $v_3 + 'return false;\"') + STSHtmlEncode(SpsClient.ScriptResources.emptyPublishedFeedViewLinkText) + $v_2;
            $v_0 = String.format(STSHtmlEncode(SpsClient.ScriptResources.emptyPublishedFeedView), $v_0);
        }
        else if (!this.$7_0) {
            $v_0 = STSHtmlEncode(String.format(SpsClient.ScriptResources.emptyOtherUserFeed, this.$3G_0));
        }
        else {
            var $v_5 = '';
            var $v_6 = '';
            if (!SP.ScriptHelpers.isNullOrEmptyString(this.$M_0)) {
                var $v_7 = 'SP.SOD.executeFunc(\'sharing.js\', \'DisplaySharingDialog\', function() { DisplaySharingDialog(\'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(this.$M_0) + '\'); });';
                $v_5 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', 'ms-link', '#', 'onclick=\"' + $v_7 + 'return false;\"');
                $v_6 = $v_2;
            }
            if (this.$K_0) {
                $v_0 = String.format(SpsClient.ScriptResources.emptySiteFeed, $v_5, $v_6, SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', 'ms-link', '#', 'onclick=\"' + $v_3 + 'return false;\"'), $v_2);
            }
            else {
                $v_0 = String.format(SpsClient.ScriptResources.emptySiteFeedWithNoPermissions, $v_5, $v_6);
            }
        }
        this.$5_0[this.$5_0.length] = SP.UI.MicroFeed.MicroFeedView.createView($v_1, 0, SpsClient.ScriptResources.publishedFeedViewName, $v_0, '');
        if (this.$7_0 === 1) {
            $v_1 = [];
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePairWithType(1, 'true');
            $v_1[$v_1.length] = SP.UI.MicroFeed.AttributePair.createAttributePair(SP.UI.MicroFeed.SPMicroFeed.$2e, 'true');
            $v_0 = STSHtmlEncode(SpsClient.ScriptResources.emptyMyLikesView);
            this.$5_0[this.$5_0.length] = SP.UI.MicroFeed.MicroFeedView.createView($v_1, 0, SpsClient.ScriptResources.likesViewName, $v_0, '');
        }
    },
    
    $1y_0: function SP_UI_MicroFeed_SPMicroFeed$$1y_0() {
        return this.$1O_0 || this.$4t_0 || (this.$7_0 === 2);
    },
    
    initialize: function SP_UI_MicroFeed_SPMicroFeed$initialize(i_DisplayPostPart, i_DisplayFeedPart, profileAccountName, profileDisplayName, errorText, errorCode) {
        this.$4u_0 = profileAccountName;
        this.$3G_0 = profileDisplayName;
        if (this.$7_0 === 2) {
            this.$G_0 = SpsClient.ScriptResources.siteFeedRootTextBoxString;
        }
        else {
            this.$G_0 = SpsClient.ScriptResources.postTextBoxString;
        }
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1s);
        var $$t_F = this;
        $addHandler(document.body, 'click', function($p1_0) {
            if (!SP.UI.MicroFeed.BaseAtMention.$90($p1_0.target)) {
                SP.UI.MicroFeed.BaseAtMention.removeSuggestionSelector();
            }
        });
        var $$t_G = this;
        SP.UI.People.FollowLinkManager.set_followCallback(function($p1_0, $p1_1, $p1_2, $p1_3) {
            if ($p1_3) {
                var $v_3 = SP.UI.People.PersonManager.getPerson($p1_0);
                if ($v_3) {
                    if ($p1_1) {
                        SP.UI.MicroFeed.BaseAtMention.addFollowedPerson($v_3.get_accountName(), $v_3.get_displayName());
                    }
                    else {
                        SP.UI.MicroFeed.BaseAtMention.removeFollowedPerson($v_3.get_accountName(), $v_3.get_displayName());
                    }
                }
            }
            SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        });
        var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$8o();
        i_DisplayPostPart = !!(i_DisplayPostPart & ((this.$7_0 === 1 || this.$7_0 === 2) && !SP.UI.MicroFeed.SPMicroFeed.$W));
        if (i_DisplayFeedPart) {
            this.initializeViewsAndThreadAttributes();
            this.$7i_0(0);
            if (!SP.UI.MicroFeed.SPMicroFeed.$W) {
                if (!$v_1) {
                    $v_1 = new SP.Social.SocialFeed();
                }
                this.$9K_0($v_1);
            }
        }
        this.$7A_0 = SP.UI.MicroFeed.SPMicroFeed.$8z();
        if ((!SP.ScriptHelpers.isNullOrEmptyString(errorText)) || (!SP.ScriptHelpers.isNullOrEmptyString(errorCode))) {
            var $v_2 = 0;
            if (!SP.ScriptHelpers.isNullOrEmptyString(errorCode)) {
                $v_2 = Number.parseInvariant(errorCode);
            }
            this.$6r_0(errorText, $v_2);
        }
        else {
            this.drawTheWebPart(i_DisplayPostPart, i_DisplayFeedPart, $v_0);
            SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        }
    },
    
    $6r_0: function SP_UI_MicroFeed_SPMicroFeed$$6r_0($p0, $p1) {
        var $v_0 = document.createElement('div');
        $v_0.id = 'ms-ErrorMessage';
        var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$1s);
        if (!$v_1) {
            return;
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$W) {
            $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.individualThreadViewErrorText);
            $v_1.appendChild($v_0);
            return;
        }
        switch ($p1) {
            case 16:
                $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.featureDisabledErrorMessage);
                if (!SP.ScriptHelpers.isNullOrEmptyString($p0)) {
                    SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv($v_0, String.format(SpsClient.ScriptResources.genericErrorMessage, $p0), '_featuredisabled', null);
                }
                $v_1.appendChild($v_0);
                break;
            case 9:
                if (this.$7_0 !== 2) {
                    $v_0.innerHTML = this.$8k_0();
                    $v_1.appendChild($v_0);
                    SP.UI.MicroFeed.SPMicroFeed.$1S = true;
                    SP.UI.MicroFeed.SPMicroFeed.$r = false;
                    SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(true);
                }
                break;
            case 10:
                if (this.$7_0 !== 2) {
                    $v_0.innerHTML = SpsClient.ScriptResources.currentUserTriedAndFailedToCreateMySite;
                    $v_1.appendChild($v_0);
                }
                break;
            case 11:
                if (this.$7_0 !== 2) {
                    $v_0.innerHTML = SpsClient.ScriptResources.currentUserCannotHaveMySite;
                    $v_1.appendChild($v_0);
                }
                break;
            case 12:
                break;
            case 7:
                $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.emptyFeedDueToCacheIssues);
                $v_1.appendChild($v_0);
                break;
            default:
                $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.unknownErrorTitle);
                if (!SP.ScriptHelpers.isNullOrEmptyString($p0)) {
                    SP.UI.MySiteCommon.CommonUIElements.addTechnicalDetailsDiv($v_0, String.format(SpsClient.ScriptResources.genericErrorMessage, $p0), '_initialerror', null);
                }
                $v_1.appendChild($v_0);
                break;
        }
    },
    
    $8k_0: function SP_UI_MicroFeed_SPMicroFeed$$8k_0() {
        var $v_0 = '';
        var $v_1 = '';
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$3A_0) && SP.UI.MySiteCommon.CommonUIElements.isSafeURL(this.$3A_0)) {
            $v_0 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$7U, '', this.$3A_0, '');
            $v_1 = '</a>';
        }
        var $v_2 = '';
        var $v_3 = '';
        var $v_4 = '';
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$1h_0) && SP.UI.MySiteCommon.CommonUIElements.isSafeURL(this.$1h_0)) {
            $v_2 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$7W, '', this.$1h_0, '');
            var $v_8 = SP.ScriptHelpers.replaceOrAddQueryString(this.$1h_0, 'Section', 'Preferences');
            $v_3 = SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$7V, '', $v_8, '');
            $v_4 = '</a>';
        }
        var $v_5 = '<span class=\"ms-bold\">';
        var $v_6 = '</span>';
        var $v_7 = '<h1 class=\"ms-core-pageTitle\">' + STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_Title) + '</h1><br/>';
        $v_7 += '<div class=\"ms-textLarge\">' + String.format(STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_EditProfileLinks), $v_0, $v_1, $v_3, $v_4, $v_2, $v_4) + '</div><br/>';
        $v_7 += '<div class=\"ms-microfeed-welcomeText\">';
        $v_7 += '<div>' + STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_MySiteHubs) + '</div>';
        $v_7 += '<div>' + String.format(STSHtmlEncode((SP._yam) ? SpsClient.ScriptResources.yammerCurrentUserDoesNotHaveMySite_NewsfeedHub : SpsClient.ScriptResources.currentUserDoesNotHaveMySite_NewsfeedHub), $v_5, $v_6) + '</div>';
        if (!SP.ScriptHelpers.isUndefined(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_SkyDriveHub2)) {
            $v_7 += '<div>' + String.format(STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_SkyDriveHub2), $v_5, 'OneDrive', $v_6) + '</div>';
        }
        else {
            $v_7 += '<div>' + String.format(STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_SkyDriveHub), $v_5, $v_6) + '</div>';
        }
        $v_7 += '<div>' + String.format(STSHtmlEncode(SpsClient.ScriptResources.currentUserDoesNotHaveMySite_SitesHub), $v_5, $v_6) + '</div>';
        $v_7 += '</div>';
        return $v_7;
    },
    
    $9K_0: function SP_UI_MicroFeed_SPMicroFeed$$9K_0($p0) {
        var $v_0 = new SP.UI.MicroFeed.MicrofeedThreadList();
        $v_0.setThreadCollection($p0, false, this.$1O_0);
        this.$E_0[(this.$5_0[this.$8_0]).$f_0] = $v_0;
        if (this.$1y_0()) {
            this.$5H_0($p0);
        }
    },
    
    drawTheWebPart: function SP_UI_MicroFeed_SPMicroFeed$drawTheWebPart(i_DisplayPostPart, i_DisplayFeedPart, MicroFeedDiv) {
        if (SP._yam && this.$7_0 === 1) {
            var $v_0 = document.createElement('div');
            $v_0.setAttribute('class', 'ms-status-blue ms-status-msg');
            $v_0.setAttribute('aria-live', 'polite');
            $v_0.setAttribute('aria-relevant', 'all');
            $v_0.innerHTML = '<span class=\'ms-status-status\' role=\'alert\'><span class=\'ms-status-body\'>' + SpsClient.ScriptResources.yammerMicroFeedReadOnly + ' <a href=\'http://o15.officeredir.microsoft.com/r/rlidSPOnewsfeedO15\' target=\'_blank\'>' + SpsClient.ScriptResources.yammerMicroFeedReadOnlyMoreInfo + '</a></span></span>';
            MicroFeedDiv.appendChild($v_0);
        }
        if (i_DisplayFeedPart && this.$7_0 === 2) {
            MicroFeedDiv.appendChild(this.$5z_0());
        }
        if (i_DisplayPostPart) {
            MicroFeedDiv.appendChild(this.$8b_0());
            var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$1D);
            if ($v_1 && !SP.ScriptHelpers.isNullOrEmptyString($v_1.value) && $v_1.value !== this.$G_0) {
                $v_1.focus();
                SP.UI.MySiteCommon.CommonUIElements.setCursorPosition($v_1, $v_1.value.length);
                SP.UI.MicroFeed.SPMicroFeed.$2X($v_1);
            }
        }
        if (i_DisplayFeedPart) {
            MicroFeedDiv.appendChild(this.$8Y_0());
            this.$14_0 = true;
            SP.SOD.executeFunc('SP.DateTimeUtil.js', 'SP.DateTimeUtil.SPRelativeDateTime.getRelativeDateTimeString', null);
            SP.UI.MicroFeed.SPMicroFeed.$9b((this.$7_0 === 2) ? 800 : 0);
        }
        SP.UI.MicroFeed.SPMicroFeed.$1S = true;
        SP.UI.MicroFeed.SPMicroFeed.$r = false;
    },
    
    changeView: function SP_UI_MicroFeed_SPMicroFeed$changeView(viewIndex) {
        if (viewIndex < 0) {
            return;
        }
        var $v_0 = null;
        var $v_1 = this.$5_0[this.$8_0];
        var $v_2 = this.$5_0[viewIndex];
        var $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$V);
        var $v_4 = false;
        if (!$v_2) {
            return;
        }
        if ($v_1.$u_0 === $v_2.$u_0) {
            this.refreshTheFeed();
            return;
        }
        if (this.$T_0) {
            if (this.$8_0 >= 0) {
                this.$T_0.AllOptions[this.$8_0].SelectedOption = false;
            }
            this.$T_0.AllOptions[viewIndex].SelectedOption = true;
            this.$T_0.Render();
        }
        this.$1k_0 = null;
        this.resetNewPostNotifications();
        this.$1O_0 = (viewIndex === this.$1i_0);
        this.$4t_0 = (viewIndex === SP.UI.MicroFeed.SPMicroFeed.$1t);
        if ($v_1.$u_0 === SpsClient.ScriptResources.mentionsViewName || $v_2.$u_0 === SpsClient.ScriptResources.mentionsViewName) {
            $v_4 = true;
        }
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        this.$7i_0(viewIndex);
        if ($v_2.$u_0 === SpsClient.ScriptResources.mentionsViewName) {
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1X);
            if ($v_3) {
                $v_3.disabled = true;
            }
            this.$1A_0 = new Date();
            this.$4b_0(true, $v_0, true);
        }
        else if ($v_2.$f_0 === $v_1.$f_0 && this.$1j_0) {
            this.refreshCurrentFeedDataForNewView($v_4);
        }
        else {
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1X);
            if ($v_3) {
                $v_3.disabled = true;
            }
            this.$1A_0 = new Date();
            this.$4b_0(this.$1y_0(), $v_0, false);
        }
    },
    
    refreshCurrentFeedDataForNewView: function SP_UI_MicroFeed_SPMicroFeed$refreshCurrentFeedDataForNewView(needToUpdateMentionHighlights) {
        var $v_0 = 0, $v_1 = 0;
        var $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$1J);
        var $v_3 = null;
        var $v_4 = $v_2.children;
        var $v_5 = this.$5_0[this.$8_0];
        var $v_6 = $get(SP.UI.MicroFeed.SPMicroFeed.$4a);
        SP.UI.MicroFeed.SPMicroFeed.$24(null, false);
        $v_6.innerHTML = $v_5.$2l_0;
        if (SP.ScriptHelpers.isNullOrEmptyString($v_6.innerHTML)) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
        }
        else {
            SP.UI.MySiteCommon.CommonUIElements.display($v_6);
        }
        $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$27);
        if (null !== $v_3) {
            $v_3.parentNode.removeChild($v_3);
        }
        for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
            if (this.$3g_0($v_4[$v_7]) && $v_0 < SP.UI.MicroFeed.SPMicroFeed.$1F) {
                $v_0++;
                SP.UI.MySiteCommon.CommonUIElements.display($v_4[$v_7]);
            }
            else {
                $v_1++;
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_4[$v_7]);
            }
        }
        if (!$v_0) {
            $v_2.appendChild(this.$22_0(false));
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1W));
        }
        $v_2.setAttribute('numHiddenThreads', $v_1);
        SP.UI.MySiteCommon.CommonUIElements.display($get(SP.UI.MicroFeed.SPMicroFeed.$1W));
        if ($v_0 < SP.UI.MicroFeed.SPMicroFeed.$1F) {
            this.$3e_0($v_2, SP.UI.MicroFeed.SPMicroFeed.$1F - $v_0, 0);
        }
        if (needToUpdateMentionHighlights) {
            this.$7t_0();
        }
        SP.UI.MicroFeed.SPMicroFeed.$24(null, true);
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        this.$1j_0 = true;
    },
    
    $7t_0: function SP_UI_MicroFeed_SPMicroFeed$$7t_0() {
        var $v_0 = 0, $v_1 = 0;
        var $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$1J);
        var $v_3 = null;
        if ($v_2 && $v_2.childNodes) {
            for ($v_0 = 0; $v_0 < $v_2.childNodes.length; $v_0++) {
                $v_3 = $v_2.childNodes[$v_0];
                if ($v_3.getAttribute(SP.Social.SocialThreadType.toString(3)) === 'true') {
                    if (this.$8_0 === this.$18_0 && $v_1 < this.$1l_0) {
                        $v_3.className += ' ' + SP.UI.MicroFeed.SPMicroFeed.$3z;
                        $v_1++;
                    }
                    else {
                        $v_3.className = $v_3.className.replace(SP.UI.MicroFeed.SPMicroFeed.$3z, '');
                    }
                }
            }
        }
        if (this.$8_0 === this.$18_0) {
            this.$1x_0(0);
        }
    },
    
    $8E_0: function SP_UI_MicroFeed_SPMicroFeed$$8E_0($p0) {
        if ($p0.keyCode === 37 || $p0.keyCode === 38 || $p0.keyCode === 39 || $p0.keyCode === 40) {
            return;
        }
        this.$20_0($p0.target);
    },
    
    $20_0: function SP_UI_MicroFeed_SPMicroFeed$$20_0($p0) {
        if (!SP.ScriptHelpers.isNullOrEmptyString($p0.style.height) && $p0.style.height.toLowerCase() !== 'auto') {
            return;
        }
        if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
            $removeHandler($p0, 'propertychange', this.$$d_$8E_0);
        }
        while ($p0.scrollHeight <= $p0.clientHeight && $p0.rows > 2) {
            $p0.rows = $p0.rows - 1;
        }
        while ($p0.scrollHeight > $p0.clientHeight) {
            $p0.rows = $p0.rows + 1;
        }
        if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
            $addHandler($p0, 'propertychange', this.$$d_$8E_0);
        }
        SP.UI.MicroFeed.SPMicroFeed.$2X($p0);
    },
    
    $8b_0: function SP_UI_MicroFeed_SPMicroFeed$$8b_0() {
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$7G;
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$7F + ((this.$7_0 === 2) ? ' ms-microfeed-siteFeedMicroBlogPart' : '');
        var $v_1 = document.createElement('div');
        $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$57;
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$55 + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2Q;
        $v_1.style.position = 'relative';
        var $v_2 = document.createElement('div');
        $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$3R;
        $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$53 + ' ' + SP.UI.MicroFeed.SPMicroFeed.$7J;
        var $v_3 = document.createElement('textarea');
        $v_3.id = SP.UI.MicroFeed.SPMicroFeed.$1D;
        $v_3.style.position = 'relative';
        if (this.$7_0 !== 2) {
            var $v_A = document.createElement('div');
            $v_A.id = 'ms-shareWithDiv';
            var $v_B = new SP.UI.MicroFeed.MicrofeedMenu('ms-shareWithTarget', 'span', '', '', true, 'ms-microfeed-mysitemenu-control ms-microfeed-mysitemenu-subtleEmphasis', 'ms-microfeed-mysitemenu-titleImage', 'ms-mysitemenu-link ms-microfeed-shareWithTarget', '');
            var $$t_G = this;
            $v_B.add(SpsClient.ScriptResources.shareWithEveryoneString, '', '', '', function() {
                $$t_G.$M_0 = '';
                $v_3.setAttribute('targetDisplayName', '');
                $v_3.focus();
                return;
            });
            $v_B.addSeparator();
            if (!this.$7y_0($v_3, $v_B)) {
                var $v_D = new SP.UI.MySiteCommon.MySiteMenuItem(null);
                $v_D.set_enabled(false);
                $v_D.set_text(SpsClient.ScriptResources.notFollowingAnySitesHelperText);
                $v_B.appendMenuItem($v_D);
                $v_B.addSeparator();
                var $$t_H = this;
                $v_B.add(SpsClient.ScriptResources.createAGroupTargetString, '', '', '', function() {
                    window.location.href = SP.Utilities.Utility.getLayoutsPageUrl('MySite.aspx?MySiteRedirect=AllSites');
                    $v_B.setSelection(0);
                });
            }
            var $v_C = document.createElement('label');
            $v_C.id = 'ms-shareWithLabel';
            $v_A.className = 'ms-microfeed-shareWith';
            $v_C.className = 'ms-microfeed-shareWithLabel ms-soften ms-textLarge';
            $v_C.setAttribute('for', 'ms-mysitemenu-control_Link_ms-shareWithTarget');
            $v_C.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.shareWithString) + '&nbsp;';
            $v_A.appendChild($v_C);
            $v_C.appendChild($v_B.render());
            $v_0.appendChild($v_A);
        }
        var $v_4 = document.createElement('span');
        $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$59;
        var $v_5 = SP.UI.MicroFeed.SPMicroFeed.$3m(SpsClient.ScriptResources.postCommandText, SP.UI.MicroFeed.SPMicroFeed.$V, SP.UI.MicroFeed.SPMicroFeed.$58);
        $v_5.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, '');
        var $v_6 = document.createElement('div');
        $v_6.id = SP.UI.MicroFeed.SPMicroFeed.$3Q;
        var $v_7 = document.createElement('label');
        $v_7.id = SP.UI.MicroFeed.SPMicroFeed.$1C;
        $v_7.className = SP.UI.MicroFeed.SPMicroFeed.$4z + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2O;
        $v_3.rows = 2;
        $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$53 + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2P + ' ' + SP.UI.MicroFeed.SPMicroFeed.$3T;
        $v_3.title = SpsClient.ScriptResources.postBoxTitleText;
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$M_0)) {
            $v_3.setAttribute('targetDisplayName', this.$3G_0);
        }
        else {
            $v_3.setAttribute('targetDisplayName', '');
        }
        if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
            $addHandler($v_3, 'keydown', this.$$d_$8E_0);
            $addHandler($v_3, 'keyup', this.$$d_$8E_0);
            $addHandler($v_3, 'propertychange', this.$$d_$8E_0);
            $addHandler($v_3, 'input', this.$$d_$8E_0);
        }
        var $$t_I = this;
        $addHandler($v_3, 'focus', function() {
            $$t_I.$62_0($v_3.id, true, null);
        });
        var $$t_J = this;
        $addHandler($v_3, 'blur', function() {
            SP.UI.MicroFeed.SPMicroFeed.$63($v_3.id, true);
        });
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_3, this.$G_0);
        $v_0.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        $v_1.appendChild($v_2);
        $v_1.appendChild($v_3);
        $v_6.className = 'ms-microfeed-elementsNoFocus';
        $v_6.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, '');
        $v_6.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K, 'false');
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
        $v_6.appendChild(SP.UI.MicroFeed.SPMicroFeed.$5g($v_3, null));
        $v_6.appendChild(this.$5d_0($v_3, $v_5, null));
        $v_1.appendChild($v_6);
        $v_0.appendChild($v_1);
        $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$3W + ' ' + SP.UI.MicroFeed.SPMicroFeed.$7L;
        $v_5.disabled = true;
        var $$t_K = this;
        $addHandler($v_5, 'click', function() {
            $$t_K.$7Z_0(null, '', SP.UI.MicroFeed.SPMicroFeed.$6m(null));
        });
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_7);
        $v_4.appendChild($v_7);
        $v_4.appendChild($v_5);
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_5);
        var $v_8 = SP.UI.MicroFeed.SPMicroFeed.$2a(SP.UI.MicroFeed.SPMicroFeed.get_$1H(), SpsClient.ScriptResources.attachPictureButtonText, SpsClient.ScriptResources.attachPictureButtonText, SP.UI.MicroFeed.SPMicroFeed.$3K, SP.UI.MicroFeed.SPMicroFeed.$4y + ' ' + SP.UI.MicroFeed.SPMicroFeed.$d, SP.UI.MicroFeed.SPMicroFeed.$4x, SP.UI.MicroFeed.SPMicroFeed.$4w);
        $v_8.setAttribute('name', SP.UI.MicroFeed.SPMicroFeed.$38);
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_8);
        var $$t_L = this;
        $addHandler($v_8, 'click', function($p1_0) {
            $$t_L.$5a_0($v_5, $v_3, null);
            $$t_L.clearDefaultTextInPostBoxIfNeeded($v_3);
        });
        $v_0.appendChild($v_8);
        $v_0.appendChild($v_4);
        $v_0.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
            var $$t_M = this, $$t_N = this;
            $addHandlers($v_3, { keyup: function() {
                $$t_M.$w_0($v_3, $v_7, $v_5, $$t_M.$G_0);
            }, change: function() {
                $$t_N.$w_0($v_3, $v_7, $v_5, $$t_N.$G_0);
            } });
        }
        var $$t_O = this, $$t_P = this, $$t_Q = this, $$t_R = this, $$t_S = this;
        $addHandlers($v_3, { cut: function() {
            $$t_O.$2Z_0($v_3, $v_7, $v_5, $$t_O.$G_0);
        }, paste: function() {
            $$t_P.$2Z_0($v_3, $v_7, $v_5, $$t_P.$G_0);
        }, keyup: function() {
            SP.UI.MicroFeed.SPMicroFeed.$1w($v_3, null);
        }, click: function() {
            SP.UI.MicroFeed.SPMicroFeed.$1w($v_3, null);
        }, focus: function() {
            SP.UI.MicroFeed.SPMicroFeed.$1w($v_3, null);
        } });
        var $$t_T = this;
        var $v_9 = new SP.UI.MicroFeed.AtMention($v_3, 3, function() {
            $$t_T.$7p_0($v_3, $v_5, $v_6, $v_7, $$t_T.$G_0);
        });
        SP.UI.MicroFeed.SPMicroFeed.$N[$v_3.id] = $v_9;
        var $$t_U = this;
        $addHandler($v_3, 'keydown', function($p1_0) {
            SP.UI.MicroFeed.SPMicroFeed.$7q($p1_0, $v_3.id, true);
        });
        this.$8x_0($v_3, $v_9);
        return $v_0;
    },
    
    $8x_0: function SP_UI_MicroFeed_SPMicroFeed$$8x_0($p0, $p1) {
        if (this.$3F_0 !== '' && this.$3E_0 !== '') {
            $p0.value = '';
            $p1.addTextAreaElement(1, this.$3E_0, this.$3F_0, false);
            $p0.value = $p0.value + ' ';
        }
        if (this.$3J_0 !== '' && this.$3I_0 !== '') {
            if ($p0.value === this.$G_0) {
                $p0.value = '';
            }
            $p1.addTextAreaElement(2, this.$3J_0, this.$3I_0, false);
            $p0.value = $p0.value + ' ';
        }
    },
    
    $7y_0: function SP_UI_MicroFeed_SPMicroFeed$$7y_0($p0, $p1) {
        if (SP.UI.MicroFeed.SPMicroFeed.$1v && SP.UI.MicroFeed.SPMicroFeed.$1v.length > 0) {
            var $v_0 = new SP.UI.MySiteCommon.MySiteMenuItem(null);
            $v_0.set_enabled(false);
            $v_0.set_text(SpsClient.ScriptResources.teamSiteDropDownDescriptionText);
            $p1.appendMenuItem($v_0);
            for (var $v_1 = 0; $v_1 < SP.UI.MicroFeed.SPMicroFeed.$1v.length; $v_1++) {
                this.$87_0(SP.UI.MicroFeed.SPMicroFeed.$1v[$v_1], $p0, $p1);
            }
            return true;
        }
        return false;
    },
    
    $87_0: function SP_UI_MicroFeed_SPMicroFeed$$87_0($p0, $p1, $p2) {
        if (!$p0) {
            return;
        }
        var $v_0 = $p0.get_name();
        var $v_1 = $p0.get_id();
        var $$t_6 = this;
        var $v_2 = new SP.UI.MySiteCommon.MySiteMenuItem(function() {
            $$t_6.$M_0 = $v_1;
            $p1.setAttribute('targetDisplayName', $v_0);
            $p1.focus();
        });
        $v_2.set_enabled(true);
        $v_2.set_text($v_0);
        $p2.appendMenuItem($v_2);
    },
    
    clearDefaultTextInPostBoxIfNeeded: function SP_UI_MicroFeed_SPMicroFeed$clearDefaultTextInPostBoxIfNeeded(InputBox) {
        if (InputBox && InputBox.value === this.$G_0) {
            InputBox.value = '';
        }
    },
    
    incrementNewPostCount: function SP_UI_MicroFeed_SPMicroFeed$incrementNewPostCount() {
        this.$4r_0++;
    },
    
    $2W_0: function SP_UI_MicroFeed_SPMicroFeed$$2W_0($p0, $p1, $p2) {
        if (!$p0 || !$p1) {
            return;
        }
        var $v_0 = $p0.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y);
        var $v_1 = ($v_0 === '' || !!$v_0) && SP.UI.MicroFeed.SPMicroFeed.$H[$v_0];
        if ((($p1.value.trim().length > 0 && $p1.value !== $p2) || $v_1) && SP.UI.MicroFeed.SPMicroFeed.get_$D() && this.$1j_0) {
            $p0.disabled = false;
        }
        else {
            $p0.disabled = true;
        }
    },
    
    $3v_0: function SP_UI_MicroFeed_SPMicroFeed$$3v_0($p0) {
        var $v_0 = 0;
        this.$3H_0 = !$p0;
        var $v_1 = document.getElementsByName(SP.UI.MicroFeed.SPMicroFeed.$38);
        for ($v_0 = 0; $v_0 < $v_1.length; $v_0++) {
            $v_1[$v_0].disabled = !$p0;
        }
    },
    
    $5d_0: function SP_UI_MicroFeed_SPMicroFeed$$5d_0($p0, $p1, $p2) {
        var $v_0 = document.createElement('div');
        $v_0.id = ((!$p2) ? SP.UI.MicroFeed.SPMicroFeed.$2R : SP.UI.MicroFeed.SPMicroFeed.$2B + $p2);
        $v_0.className = ((!$p2) ? 'ms-microfeed-attachmentPreviewDiv' : 'ms-microfeed-attachmentReplyPreviewDiv');
        var $v_1 = document.createElement('div');
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$3W;
        var $v_2 = document.createElement('a');
        $v_2.id = 'ms-microfeed-cancelImageAttachmentLink' + ((!$p2) ? '' : '_' + $p2);
        $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$3W + ' ' + SP.UI.MicroFeed.SPMicroFeed.$3V;
        $v_2.href = '#';
        $v_2.setAttribute('onclick', 'return false;');
        var $v_3 = document.createElement('img');
        $v_3.id = 'ms-microfeed-cancelImageAttachmentLinkImage' + ((!$p2) ? '' : '_' + $p2);
        $v_3.src = SP.UI.MicroFeed.SPMicroFeed.get_$1H();
        $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$3U;
        $v_2.appendChild($v_3);
        var $$t_A = this;
        $addHandler($v_2, 'click', function($p1_0) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
            var $v_4 = SP.UI.MicroFeed.SPMicroFeed.$H[($p2) ? $p2 : ''];
            if ($v_4) {
                var $v_5;
                switch ($v_4.get_attachmentKind()) {
                    case 0:
                        $v_5 = $get((!$p2) ? SP.UI.MicroFeed.SPMicroFeed.$3N : SP.UI.MicroFeed.SPMicroFeed.$2u + $p2);
                        break;
                    default:
                        $v_5 = $get((!$p2) ? SP.UI.MicroFeed.SPMicroFeed.$2N : SP.UI.MicroFeed.SPMicroFeed.$2C + $p2);
                        break;
                }
                if ($v_5) {
                    $v_0.removeChild($v_5);
                }
            }
            $$t_A.$3v_0(true);
            delete SP.UI.MicroFeed.SPMicroFeed.$H[($p2) ? $p2 : ''];
            SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_0.parentNode);
            $$t_A.$2W_0($p1, $p0, (!$p2) ? $$t_A.$G_0 : $$t_A.$P_0);
            $p0.focus();
        });
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
        return $v_0;
    },
    
    $5a_0: function SP_UI_MicroFeed_SPMicroFeed$$5a_0($p0, $p1, $p2) {
        var $$t_4 = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $v_0 = 'SelectPicture2.aspx?Type=User&FeedAttachment=true';
            $$t_4.$9P_0(SP.Utilities.Utility.getLayoutsPageUrl($v_0), $p0, $p1, $p2);
        });
    },
    
    $9P_0: function SP_UI_MicroFeed_SPMicroFeed$$9P_0($p0, $p1, $p2, $p3) {
        if (!(SP.UI.MicroFeed.SPMicroFeed.$H[($p3) ? $p3 : ''])) {
            var $v_0 = new SP.UI.DialogOptions();
            $v_0.autoSizeStartWidth = 410;
            $v_0.autoSize = true;
            $v_0.url = $p0;
            var $$t_C = this;
            $v_0.dialogReturnValueCallback = function($p1_0, $p1_1) {
                if ($p1_0 === 1) {
                    var $v_1 = ($p1_1).split('|');
                    if (!$v_1 || $v_1.length !== 3) {
                        return;
                    }
                    var $v_2 = $v_1[0];
                    var $v_3 = $v_1[1];
                    var $v_4 = $v_1[2];
                    var $v_5 = new SP.Social.SocialAttachment();
                    $v_5.set_attachmentKind(0);
                    $v_5.set_uri($v_2);
                    $v_5.set_previewUri($v_3);
                    $v_5.set_name($v_4);
                    $$t_C.displayAttachmentPreview($p1, $p2, $v_5, $p3);
                }
            };
            SP.UI.ModalDialog.showModalDialog($v_0);
        }
    },
    
    displayAttachmentPreview: function SP_UI_MicroFeed_SPMicroFeed$displayAttachmentPreview(PostButton, InputBox, atm, ID) {
        var $v_0 = $get((!ID) ? SP.UI.MicroFeed.SPMicroFeed.$2R : SP.UI.MicroFeed.SPMicroFeed.$2B + ID);
        var $v_1 = null;
        switch (atm.get_attachmentKind()) {
            case 0:
                $v_1 = SP.UI.MicroFeed.SPMicroFeed.$8L(atm, ID);
                break;
            case 1:
                $v_1 = SP.UI.MicroFeed.MicroFeedVideo.$5n(atm, ID);
                break;
            case 2:
                $v_1 = SP.UI.MicroFeed.MicroFeedDoc.$5j(atm, ID);
                break;
        }
        this.$3v_0(false);
        if ($v_0 && $v_1) {
            SP.UI.MySiteCommon.CommonUIElements.display($v_0);
            SP.UI.MicroFeed.SPMicroFeed.$1z($v_1, $v_0, null, true);
        }
        if (PostButton) {
            SP.UI.MySiteCommon.CommonUIElements.display(PostButton);
            SP.UI.MySiteCommon.CommonUIElements.display(PostButton);
            this.$2W_0(PostButton, InputBox, (!ID) ? this.$G_0 : this.$P_0);
        }
        SP.UI.MicroFeed.SPMicroFeed.$H[(ID) ? ID : ''] = atm;
        if (InputBox) {
            SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_0.parentNode);
            InputBox.focus();
        }
    },
    
    $7p_0: function SP_UI_MicroFeed_SPMicroFeed$$7p_0($p0, $p1, $p2, $p3, $p4) {
        this.$20_0($p0);
        this.$w_0($p0, $p3, $p1, $p4);
        SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($p2);
    },
    
    $9S_0: function SP_UI_MicroFeed_SPMicroFeed$$9S_0() {
        this.$2I_0 = true;
        this.$7X_0();
    },
    
    $7X_0: function SP_UI_MicroFeed_SPMicroFeed$$7X_0() {
        window.clearInterval(this.$3C_0);
        var $v_0 = Math.max(new Date() - this.$4q_0, 0);
        var $v_1 = this.$4s_0 * 60000 - $v_0;
        if ($v_1 <= 0) {
            if ($get(SP.UI.MicroFeed.SPMicroFeed.$1X) && this.$1y_0()) {
                this.$9H_0();
            }
            this.$7n_0();
        }
        else {
            this.$3C_0 = window.setInterval(this.$$d_$7X_0, $v_1);
        }
    },
    
    $7n_0: function SP_UI_MicroFeed_SPMicroFeed$$7n_0() {
        this.$2I_0 = false;
        window.clearInterval(this.$3C_0);
    },
    
    $9H_0: function SP_UI_MicroFeed_SPMicroFeed$$9H_0() {
        var $v_0 = (this.$5_0[this.$8_0]).$f_0;
        var $v_1 = this.$E_0[$v_0];
        var $v_2 = new SP.UI.MicroFeed.MicrofeedThreadList();
        var $v_3 = null;
        var $v_4 = false;
        var $$t_7 = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $$t_5, $$t_6;
            $v_3 = (($$t_6 = $$t_7.$35_0(2, false, ($$t_5 = {'val': $v_4}))), $v_4 = $$t_5.val, $$t_6);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if ($v_3) {
                    $v_2.setThreadCollection($v_3, true, $$t_7.$1O_0);
                    $$t_7.$4s_0 = 1;
                    $$t_7.$5H_0($v_3);
                    $v_2.appendThreadList($v_1);
                    $$t_7.$E_0[$v_0] = $v_2;
                    $$t_7.updateNewPostNotifications();
                }
                if ($v_4) {
                    $$t_7.$1x_0($v_3.get_unreadMentionCount());
                }
            }, function() {
                $$t_7.$4s_0++;
            });
        });
    },
    
    $5H_0: function SP_UI_MicroFeed_SPMicroFeed$$5H_0($p0) {
        if ($p0.get_threads() && $p0.get_threads().length > 0 && $p0.get_threads()[0] && $p0.get_threads()[0].get_rootPost()) {
            this.$1k_0 = $p0.get_threads()[0].get_rootPost().get_modifiedTime();
        }
    },
    
    $2Z_0: function SP_UI_MicroFeed_SPMicroFeed$$2Z_0($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.value;
        var $v_1 = 0;
        var $v_2 = 0;
        var $$t_7 = this;
        $v_2 = window.setInterval(function() {
            if ($p0.value !== $v_0) {
                window.clearInterval($v_2);
                $$t_7.$w_0($p0, $p1, $p2, $p3);
                $$t_7.$20_0($p0);
            }
            if ($v_1++ > 100) {
                window.clearInterval($v_2);
            }
        }, 50);
    },
    
    $w_0: function SP_UI_MicroFeed_SPMicroFeed$$w_0($p0, $p1, $p2, $p3) {
        if (!$p0) {
            return;
        }
        if ($p1 && $p0.value.length > (0.9 * 512)) {
            var $v_0 = 512 - $p0.value.length;
            SP.UI.MySiteCommon.CommonUIElements.display($p1);
            $p1.innerHTML = STSHtmlEncode($v_0.localeFormat('n0'));
            if ($v_0 < 0) {
                $p1.className = $p1.className.replace(SP.UI.MicroFeed.SPMicroFeed.$2O, SP.UI.MicroFeed.SPMicroFeed.$50);
            }
            else {
                $p1.className = $p1.className.replace(SP.UI.MicroFeed.SPMicroFeed.$50, SP.UI.MicroFeed.SPMicroFeed.$2O);
            }
        }
        else {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p1);
        }
        if ($p2) {
            this.$2W_0($p2, $p0, $p3);
        }
    },
    
    $8Y_0: function SP_UI_MicroFeed_SPMicroFeed$$8Y_0() {
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$1X;
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6P;
        if (this.$7_0 === 1 || this.$7_0 === 2) {
            var $$t_1 = this;
            $addHandler($v_0, 'mouseover', function() {
                $$t_1.$7j_0();
            });
        }
        if (this.$7_0 !== 2) {
            $v_0.appendChild(this.$5z_0());
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$W) {
            this.$8Z_0($v_0);
        }
        else {
            this.$3r_0($v_0);
            SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        }
        return $v_0;
    },
    
    $7Z_0: function SP_UI_MicroFeed_SPMicroFeed$$7Z_0($p0, $p1, $p2) {
        var $v_0 = (!$p0);
        var $v_1 = $get(($v_0) ? SP.UI.MicroFeed.SPMicroFeed.$1D : SP.UI.MicroFeed.SPMicroFeed.$2x + $p0);
        if (!$v_1) {
            return;
        }
        var $v_2 = $v_1.value;
        var $v_3 = SP.UI.MicroFeed.SPMicroFeed.$N[SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID($v_1.id)];
        var $v_4 = $get(($v_0) ? SP.UI.MicroFeed.SPMicroFeed.$V : SP.UI.MicroFeed.SPMicroFeed.$y + $p0);
        var $v_5 = ($v_0) ? null : $get(SP.UI.MicroFeed.SPMicroFeed.$25 + SP.UI.MicroFeed.SPMicroFeed.$2k + $p0);
        var $v_6 = $get(SP.UI.MicroFeed.SPMicroFeed.$3Q + (($v_0) ? '' : $p0));
        var $v_7 = $get(($v_0) ? SP.UI.MicroFeed.SPMicroFeed.$1p : SP.UI.MicroFeed.SPMicroFeed.$1Y + $p0);
        if ($v_2.length > 512) {
            var $v_9 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.postTooLongErrorTitle, String.format(SpsClient.ScriptResources.postTooLong, $v_2.length, 512));
            $v_9.set_hideCancelButton(true);
            $v_9.show();
            if ($p2) {
                this.displayAttachmentPreview($v_4, $v_1, $p2, ($v_0) ? null : $p0);
            }
            return;
        }
        SP.UI.MicroFeed.SPMicroFeed.$1R = false;
        var $v_8 = new SP.Social.SocialPostCreationData();
        if ($v_3) {
            $v_3.setPostContentAndDataLinks($v_8);
            $v_3.reset();
        }
        $v_8.set_attachment($p2);
        $v_1.value = '';
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1C + (($v_0) ? '' : $p0)));
        if ($p2) {
            this.$3v_0(true);
        }
        SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_7);
        if ($v_4) {
            $v_4.disabled = true;
        }
        delete SP.UI.MicroFeed.SPMicroFeed.$H[($p0) ? $p0 : ''];
        if ($v_6) {
            $v_6.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K, 'false');
            SP.UI.MicroFeed.SPMicroFeed.handleChangesToElementsDiv($v_6);
        }
        if ($v_0) {
            $v_1.rows = 2;
            $v_1.focus();
            SP.UI.MicroFeed.SPMicroFeed.$2X($v_1);
        }
        else {
            this.$9I_0($p0, $v_0, $v_5, $v_1);
        }
        this.$7Y_0($v_8, $v_2, $p0, ((SP.ScriptHelpers.isNullOrEmptyString($p1)) ? SP.UI.MicroFeed.SPMicroFeed.microfeed.$M_0 : $p1));
    },
    
    $8d_0: function SP_UI_MicroFeed_SPMicroFeed$$8d_0() {
        for (var $v_0 = 0; $v_0 < this.$5_0.length; ++$v_0) {
            var $v_1 = this.$5_0[$v_0];
            var $v_2 = (this.$12_0) ? this.$12_0 : $v_1.$u_0;
            var $v_3 = ($v_0 === this.$18_0) ? this.$1l_0 : 0;
            var $v_4 = new ClientPivotControlMenuOption();
            $v_4.DisplayText = SP.UI.MicroFeed.SPMicroFeed.$4d($v_2, $v_3);
            $v_4.OnClickAction = 'SP.UI.MicroFeed.SPMicroFeed.microfeed.changeView(' + $v_0.toString() + ');';
            this.$T_0.AddMenuOption($v_4);
        }
        var $$t_5 = this;
        window.setTimeout(function() {
            $$t_5.$T_0.Render();
        }, 0);
    },
    
    $5z_0: function SP_UI_MicroFeed_SPMicroFeed$$5z_0() {
        var $v_0 = document.createElement('div');
        $v_0.id = 'ms-titlebararea';
        if (SP.UI.MicroFeed.SPMicroFeed.$W) {
            return $v_0;
        }
        $v_0.className = 'ms-microfeed-titleArea';
        var $v_1 = null;
        var $v_2 = SP.UI.MicroFeed.SPMicroFeed.$6g;
        var $v_3 = SP.UI.MicroFeed.SPMicroFeed.createProgressDiv();
        var $v_4 = null;
        var $v_5 = null;
        var $v_6 = null;
        var $v_7 = null;
        if (!this.$7_0) {
            $v_1 = document.createElement('div');
            $v_4 = document.createElement('h2');
            $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$31;
            $v_4.className = 'ms-microfeed-feedTitleLabel ms-webpart-titleText';
            this.$12_0 = String.format(SpsClient.ScriptResources.wallViewName, this.$3G_0);
            $v_4.innerHTML = STSHtmlEncode(this.$12_0);
            $v_1.appendChild($v_4);
            if (SP.UI.MicroFeed.SPMicroFeed.get_$X() && this.$4u_0 === SP.UI.MicroFeed.SPMicroFeed.get_$X().get_accountName() && !SP.UI.MicroFeed.SPMicroFeed.$5E) {
                $v_5 = document.createElement('span');
                $v_5.id = SP.UI.MicroFeed.SPMicroFeed.$4O;
                $v_5.className = SP.UI.MicroFeed.SPMicroFeed.$5C + ' ms-microfeed-privacyIcon';
                $v_6 = new SP.UI.MySiteCommon.MySitePrivacyIcon(SP.UI.MicroFeed.SPMicroFeed.$4O, SpsClient.ScriptResources.feedPrivacyIcon_Tooltip, this.$1h_0);
                $v_7 = $v_6.render();
                $v_5.innerHTML = $v_7;
                $v_1.appendChild($v_5);
            }
        }
        else if (this.$7_0 === 1) {
            $v_1 = document.createElement('div');
            var $v_8 = document.createElement('div');
            $v_8.id = SP.UI.MicroFeed.SPMicroFeed.$4X;
            $v_8.className = SP.UI.MicroFeed.SPMicroFeed.$6j;
            $v_1.appendChild($v_8);
            var $$t_B = this;
            SP.SOD.executeFunc('clienttemplates.js', 'ClientPivotControl', function() {
                var $v_9 = {};
                $v_9['PivotParentId'] = SP.UI.MicroFeed.SPMicroFeed.$4X;
                $v_9['PivotContainerId'] = SP.UI.MicroFeed.SPMicroFeed.$6i;
                $$t_B.$T_0 = new ClientPivotControl($v_9);
                $$t_B.$T_0.SurfacedPivotCount = 3;
                $$t_B.$8d_0();
            });
        }
        else {
            $v_1 = document.createElement('h2');
            $v_4 = document.createElement('a');
            $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$31;
            $v_4.className = 'ms-microfeed-feedTitleLabel ms-headerFont ms-microfeed-siteFeedTitleLabel';
            this.$12_0 = String.format(SpsClient.ScriptResources.siteFeedTitleName);
            $v_4.innerHTML = STSHtmlEncode(this.$12_0);
            var $v_A = $v_4;
            $v_4.setAttribute('href', '#');
            $v_4.setAttribute('onclick', 'return false;');
            var $$t_C = this;
            $addHandler($v_4, 'click', function() {
                $$t_C.refreshTheFeed();
            });
            $v_1.appendChild($v_4);
            $v_2 += ' ms-webpart-titleText';
            $v_0.className = 'ms-microfeed-siteFeedTitleArea';
        }
        $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$6h;
        $v_1.className = $v_2;
        $v_1.appendChild($v_3);
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        if (this.$7_0 === 1) {
            this.$1x_0(this.$1l_0);
        }
        $v_0.appendChild($v_1);
        return $v_0;
    },
    
    resetNewPostNotifications: function SP_UI_MicroFeed_SPMicroFeed$resetNewPostNotifications() {
        this.$4r_0 = 0;
        this.updateNewPostNotifications();
    },
    
    updateNewPostNotifications: function SP_UI_MicroFeed_SPMicroFeed$updateNewPostNotifications() {
        this.$7u_0(this.$8_0, this.$4r_0);
    },
    
    refreshTheFeed: function SP_UI_MicroFeed_SPMicroFeed$refreshTheFeed() {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1X);
        if ($v_0) {
            this.$4b_0(true, $v_0, (this.$8_0 === this.$18_0));
            this.resetNewPostNotifications();
        }
    },
    
    $1x_0: function SP_UI_MicroFeed_SPMicroFeed$$1x_0($p0) {
        this.$1l_0 = $p0;
        this.$7u_0(this.$18_0, this.$1l_0);
    },
    
    $7u_0: function SP_UI_MicroFeed_SPMicroFeed$$7u_0($p0, $p1) {
        if ($p0 < 0) {
            return;
        }
        var $v_0 = this.$5_0[$p0];
        var $v_1 = (this.$12_0) ? this.$12_0 : $v_0.$u_0;
        if (this.$T_0) {
            this.$T_0.AllOptions[$p0].DisplayText = SP.UI.MicroFeed.SPMicroFeed.$4d($v_1, $p1);
            this.$T_0.Render();
        }
        else {
            var $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$31);
            if ($v_2) {
                $v_2.innerHTML = STSHtmlEncode(SP.UI.MicroFeed.SPMicroFeed.$4d($v_1, $p1));
            }
        }
    },
    
    $3r_0: function SP_UI_MicroFeed_SPMicroFeed$$3r_0($p0) {
        if (!$p0) {
            return;
        }
        var $v_0 = this.$7g_0();
        var $v_1 = this.$5_0[this.$8_0];
        var $v_2 = $v_1.$f_0;
        var $v_3 = this.$E_0[$v_2];
        var $v_4 = document.createElement('div');
        $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$1J;
        var $v_5 = $get(SP.UI.MicroFeed.SPMicroFeed.$1D);
        var $v_6 = document.createElement('div');
        $v_6.id = SP.UI.MicroFeed.SPMicroFeed.$1W;
        var $v_7 = document.createElement('div');
        $v_7.id = SP.UI.MicroFeed.SPMicroFeed.$4G;
        var $v_8 = document.createElement('button');
        $v_8.id = 'ms-MoreThreadsButtonLabel';
        var $v_9 = document.createElement('span');
        $v_9.id = 'ms-MoreThreadsButtonText';
        var $v_A = null;
        var $v_B;
        var $v_C = 0;
        $v_4.className = 'ms-microfeed-threadsDiv';
        $v_B = document.createElement('div');
        $v_B.id = SP.UI.MicroFeed.SPMicroFeed.$4a;
        $v_B.className = SP.UI.MicroFeed.SPMicroFeed.$6l;
        $v_B.innerHTML = (this.$5_0[this.$8_0]).$2l_0;
        $v_0.appendChild($v_B);
        if (SP.ScriptHelpers.isNullOrEmptyString($v_B.innerHTML)) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_B);
        }
        else {
            SP.UI.MySiteCommon.CommonUIElements.display($v_B);
        }
        if (!$v_3) {
            $v_4.appendChild(this.$22_0(true));
            $v_0.appendChild($v_4);
            $p0.appendChild($v_0);
            SP.UI.MicroFeed.SPMicroFeed.$24(null, true);
            this.$14_0 = true;
            return;
        }
        else {
            if (!$v_3.sizeAfterRemovingRecentDeletions()) {
                $v_4.appendChild(this.$22_0(false));
            }
            else {
                $v_C = this.$5y_0($v_4, $v_3, 0, SP.UI.MicroFeed.SPMicroFeed.$1F);
                if (!$v_C) {
                    $v_4.appendChild(this.$22_0(false));
                }
            }
        }
        $v_0.appendChild($v_4);
        this.$1j_0 = true;
        $v_6.className = SP.UI.MicroFeed.SPMicroFeed.$6M;
        $v_7.className = SP.UI.MicroFeed.SPMicroFeed.$6N;
        $v_8.className = SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$5C + ' ms-commandLink';
        $v_8.setAttribute('type', 'button');
        $v_9.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.seeMorePostsText);
        $v_8.appendChild($v_9);
        $v_6.appendChild($v_8);
        $v_7.appendChild($v_6);
        var $$t_J = this;
        $addHandler($v_8, 'click', function() {
            var $v_D = $v_4.children;
            var $v_E = null;
            var $v_F = 0, $v_G = 0;
            var $v_H = parseInt($v_4.getAttribute('numHiddenThreads'));
            if ($v_H > 0) {
                for ($v_G = 0; $v_G < $v_D.length && $v_F < SP.UI.MicroFeed.SPMicroFeed.$1F; $v_G++) {
                    $v_E = $v_D[$v_G];
                    if ($v_E && SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_E) && ($v_E.getAttribute('deleted')) !== 'true') {
                        if ($$t_J.$3g_0($v_E)) {
                            $v_F++;
                            SP.UI.MySiteCommon.CommonUIElements.display($v_E);
                        }
                    }
                }
            }
            $v_H = $v_H - $v_F;
            $v_4.setAttribute('numHiddenThreads', '' + $v_H);
            if ($v_F < SP.UI.MicroFeed.SPMicroFeed.$1F) {
                $$t_J.$3e_0($v_4, SP.UI.MicroFeed.SPMicroFeed.$1F - $v_F, 0);
            }
        });
        if (!$v_C) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
        }
        $v_0.appendChild($v_7);
        $v_0.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        $p0.appendChild($v_0);
        if (this.$8_0 === this.$18_0) {
            this.$7t_0();
        }
        SP.UI.MicroFeed.SPMicroFeed.$24(null, true);
        $v_A = $get(SP.UI.MicroFeed.SPMicroFeed.$V);
        this.$2W_0($v_A, $v_5, this.$G_0);
        ProcessImn();
        this.$7j_0();
    },
    
    $7j_0: function SP_UI_MicroFeed_SPMicroFeed$$7j_0() {
        var $v_0 = this.$1y_0();
        if ($v_0 && !this.$2I_0) {
            this.$9S_0();
        }
        else if (!$v_0 && this.$2I_0) {
            this.$7n_0();
        }
    },
    
    $7g_0: function SP_UI_MicroFeed_SPMicroFeed$$7g_0() {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$26);
        var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$V);
        if ($v_0) {
            $v_0.innerHTML = '';
        }
        else {
            $v_0 = document.createElement('div');
            $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$26;
            $v_0.style.left = '0px';
            $v_0.style.right = '0px';
        }
        if ($v_1) {
            var $v_2 = $v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y);
            this.$3H_0 = (!!SP.UI.MicroFeed.SPMicroFeed.$H[$v_2]);
        }
        else {
            this.$3H_0 = false;
        }
        return $v_0;
    },
    
    $8Z_0: function SP_UI_MicroFeed_SPMicroFeed$$8Z_0($p0) {
        var $v_0 = this.$7g_0();
        var $v_1 = document.createElement('div');
        $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$1J;
        if (this.$4v_0) {
            var $v_2 = document.createElement('div');
            $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$34;
            $v_2.className = 'ms-microfeed-unsubscribe ms-textXLarge';
            $v_2.innerHTML = String.format(STSHtmlEncode(SpsClient.ScriptResources.unsubscribeConfirmationText), SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$4Z, '', '#', 'onclick=\"return false;\"'), '</a>');
            var $v_3 = $v_2.getElementsByTagName('a')[0];
            $addHandler($v_3, 'click', this.$$d_$9W_0);
            $p0.insertBefore($v_2, $p0.firstChild);
        }
        $v_1.appendChild(this.$2i_0(SP.UI.MicroFeed.SPMicroFeed.$1T, false, false, true));
        ProcessImn();
        $v_0.appendChild($v_1);
        $p0.appendChild($v_0);
        this.$14_0 = true;
        this.$1j_0 = true;
    },
    
    $9W_0: function SP_UI_MicroFeed_SPMicroFeed$$9W_0($p0) {
        if (!SP.UI.MicroFeed.SPMicroFeed.$1T) {
            return;
        }
        var $$t_1 = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            SP.UI.MicroFeed.SPMicroFeed.get_$D().suppressThreadNotifications(SP.UI.MicroFeed.SPMicroFeed.$1T.get_id());
            SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded($$t_1.$$d_$9Y_0, $$t_1.$$d_$9X_0);
        });
    },
    
    $9Y_0: function SP_UI_MicroFeed_SPMicroFeed$$9Y_0($p0, $p1) {
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$34);
        $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.unsubscribeSuccess);
    },
    
    $9X_0: function SP_UI_MicroFeed_SPMicroFeed$$9X_0($p0, $p1) {
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$34);
        $v_0.innerHTML = String.format(STSHtmlEncode(SpsClient.ScriptResources.unsubscribeFailure), SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag(SP.UI.MicroFeed.SPMicroFeed.$4Z, '', '#', 'onclick=\"return false;\"'), '</a>');
        var $v_1 = $v_0.getElementsByTagName('a')[0];
        $addHandler($v_1, 'click', this.$$d_$9W_0);
    },
    
    $5y_0: function SP_UI_MicroFeed_SPMicroFeed$$5y_0($p0, $p1, $p2, $p3) {
        if (!$p0 || !$p1 || !$p1.sizeAfterRemovingRecentDeletions()) {
            return 0;
        }
        var $v_0 = null;
        var $v_1 = 0;
        var $v_2 = null;
        var $v_3 = 0;
        var $v_4 = false;
        var $v_5 = null;
        for (var $v_6 = $p2; $v_6 < $p1.size(); $v_6++) {
            $v_0 = $p1.get($v_6);
            if (!$v_0.get_rootPost() || !$v_0.get_actors()) {
                continue;
            }
            $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $v_0.get_id());
            if ($v_2) {
                $v_4 = true;
                $v_5 = new Date(Date.parse($v_2.getAttribute('LastModificationTime')));
                if ($v_5 > $v_0.get_rootPost().get_modifiedTime()) {
                    $v_2 = this.$3t_0($v_0, ($v_1 >= $p3), $v_2, false, null, false);
                }
            }
            else {
                $v_2 = this.$2i_0($v_0, ($v_1 >= $p3), false, false);
            }
            if (!$v_4) {
                $p0.appendChild($v_2);
            }
            if (!SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_2)) {
                if (!$v_4) {
                    $v_1++;
                }
            }
            else if (!$v_4) {
                $v_3++;
            }
            $v_4 = false;
            if (this.$1A_0 > $v_0.get_rootPost().get_modifiedTime()) {
                this.$1A_0 = $v_0.get_rootPost().get_modifiedTime();
            }
        }
        if ($p0.getAttribute('numHiddenThreads')) {
            $v_3 = parseInt($p0.getAttribute('numHiddenThreads')) + $v_3;
        }
        $p0.setAttribute('numHiddenThreads', $v_3);
        return $v_1;
    },
    
    $22_0: function SP_UI_MicroFeed_SPMicroFeed$$22_0($p0) {
        if ($p0) {
            var $v_0 = (!SP.ScriptHelpers.isNullOrEmptyString(this.$3B_0)) ? String.format(SpsClient.ScriptResources.genericErrorMessage, this.$3B_0) : '';
            return SP.UI.MicroFeed.SPMicroFeed.drawEmptyFeedThreadWithGivenMessage(STSHtmlEncode(SpsClient.ScriptResources.emptyFeedDueToError), $v_0);
        }
        else {
            return SP.UI.MicroFeed.SPMicroFeed.drawEmptyFeedThreadWithGivenMessage((this.$5_0[this.$8_0]).$3u_0, '');
        }
    },
    
    $8f_0: function SP_UI_MicroFeed_SPMicroFeed$$8f_0($p0, $p1) {
        var $v_0 = $p0.$3_0;
        var $v_1 = this.createThreadDiv(null, $v_0, $p1, true), $v_2 = document.createElement('div');
        $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$1b + $v_0;
        $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$30;
        $p0.$1_0 = 3;
        $p0.$9_0 = $v_0;
        $v_2.appendChild(this.$x_0($p0));
        $v_1.appendChild($v_2);
        $v_1.appendChild(this.$3s_0(null, $v_0, false, true, false, false));
        $v_1.appendChild(this.$5w_0(0, false, $v_0, $v_0, (($p0.$B_0) ? $p0.$B_0.get_name() : '')));
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$t, 0);
        return $v_1;
    },
    
    $9O_0: function SP_UI_MicroFeed_SPMicroFeed$$9O_0($p0) {
        var $v_0 = this.$5_0[this.$8_0];
        var $v_1 = SP.Social.SocialThreadType.toString($p0.get_threadType());
        var $v_2;
        for (var $v_3 = 0; $v_3 < $v_0.get_numVisiblePosts(); $v_3++) {
            $v_2 = $v_0.visiblePostAttribute($v_3);
            if ($v_2.$39_0 === $v_1) {
                if ($v_2.$3h_0 === 'true') {
                    return true;
                }
            }
        }
        return false;
    },
    
    $3g_0: function SP_UI_MicroFeed_SPMicroFeed$$3g_0($p0) {
        var $v_0 = this.$5_0[this.$8_0];
        var $v_1 = '';
        var $v_2;
        for (var $v_3 = 0; $v_3 < $v_0.get_numVisiblePosts(); $v_3++) {
            $v_2 = $v_0.visiblePostAttribute($v_3);
            $v_1 = $p0.getAttribute($v_2.$39_0);
            if ($v_1 === $v_2.$3h_0) {
                return true;
            }
        }
        return false;
    },
    
    $2i_0: function SP_UI_MicroFeed_SPMicroFeed$$2i_0($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.get_id();
        var $v_1 = this.createThreadDiv($p0, $v_0, $p1, $p2);
        var $v_2 = $p0.get_replies().length;
        var $v_3 = $p0.get_totalReplyCount();
        var $v_4 = 0;
        var $v_5 = null;
        var $v_6 = null;
        $v_1.appendChild(this.$8e_0($p0, $p2, $v_0));
        if (SP.UI.MicroFeed.SPMicroFeed.$4i($p0.get_rootPost())) {
            $v_4++;
        }
        if ($p0.get_postReference() && $p0.get_postReference().get_digest()) {
            $v_3 = $p0.get_postReference().get_digest().get_totalReplyCount();
            $v_2 = $p0.get_postReference().get_digest().get_replies().length;
        }
        var $v_7 = $p0.get_actors()[$p0.get_rootPost().get_authorIndex()];
        if (!SP.UI.MicroFeed.SPMicroFeed.$1d($v_7)) {
            $v_6 = this.$84_0($p0, $p1, $v_0, $v_1, $v_2, $v_3, $p3);
            $v_5 = this.$3s_0($p0, $v_0, false, (($v_2 >= $v_3 && $v_2 <= 2) || $p3), ($p0.get_threadType() === 1 || $p0.get_threadType() === 2) ? true : false, false);
            if (!$v_2 || !($v_5.hasChildNodes() || ($v_6 && $v_6.hasChildNodes()))) {
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_5);
            }
            $v_4 += parseInt($v_5.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$t));
            $v_5.removeAttribute(SP.UI.MicroFeed.SPMicroFeed.$t);
            $v_1.appendChild($v_5);
            if ($p0.get_threadType() === 1) {
                $v_4++;
            }
            SP.UI.MicroFeed.SPMicroFeed.$5O($v_1, $v_4, true);
            if (this.$3g_0($v_1) && !$p1) {
                SP.UI.MySiteCommon.CommonUIElements.display($v_1);
            }
            $v_1.appendChild(this.$5x_0($p0, $v_0));
        }
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        return $v_1;
    },
    
    $5x_0: function SP_UI_MicroFeed_SPMicroFeed$$5x_0($p0, $p1) {
        var $v_0 = $p0;
        if (($p0.get_threadType() === 1 || $p0.get_threadType() === 2 || $p0.get_threadType() === 4) && $p0.get_postReference() && $p0.get_postReference().get_digest()) {
            $v_0 = $p0.get_postReference().get_digest();
        }
        var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$8U($v_0);
        var $v_2 = $v_0.get_actors()[$v_0.get_ownerIndex()];
        var $v_3 = '';
        if ($v_2 && $v_2.get_actorType()) {
            $v_3 = $v_2.get_name();
        }
        return this.$5w_0($v_1, $v_0.get_replies().length > 0, $p1, $v_0.get_id(), $v_3);
    },
    
    $84_0: function SP_UI_MicroFeed_SPMicroFeed$$84_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = null;
        var $v_1 = false;
        if (!$p6) {
            if ($p0.get_threadType() && $p0.get_postReference() && !$p0.get_postReference().get_digest()) {
                $v_0 = this.$5Y_0($p0, $p2, $p3, $p1, $p4, $p5, true);
                $v_1 = true;
            }
            else if ($p5 > 2) {
                $v_0 = this.$5Y_0($p0, $p2, $p3, $p1, $p4, $p5, false);
                $v_1 = true;
            }
        }
        if ($v_0) {
            $p3.appendChild($v_0);
        }
        if ($v_1) {
            $p3.appendChild(SP.UI.MicroFeed.SPMicroFeed.$7w($p2));
        }
        return $v_0;
    },
    
    $8e_0: function SP_UI_MicroFeed_SPMicroFeed$$8e_0($p0, $p1, $p2) {
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$1b + $p2;
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$30;
        var $v_1 = SP.UI.MicroFeed.MicrofeedEntry.createRootPostFromThread($p0);
        if (!$v_1) {
            return $v_0;
        }
        if ($p1) {
            $v_1.$1_0 = 6;
        }
        $v_0.appendChild(this.$x_0($v_1));
        return $v_0;
    },
    
    $5Y_0: function SP_UI_MicroFeed_SPMicroFeed$$5Y_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = false;
        if ($p6) {
            var $v_1 = $p2.getElementsByTagName('a');
            var $v_2 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost($p0, $p0.get_rootPost());
            var $v_3 = null;
            for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
                if ($v_1[$v_4].getAttribute('name') === 'fullyOrphaned') {
                    $v_3 = $v_1[$v_4];
                    var $$t_C = this;
                    $addHandler($v_3, 'click', function() {
                        if ($p0.get_postReference() && $p0.get_postReference().get_threadId()) {
                            $v_3.innerHTML = '';
                            $v_3.appendChild(SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon(SP.UI.MicroFeed.SPMicroFeed.$2m + $p0.get_postReference().get_threadId(), SP.UI.MicroFeed.SPMicroFeed.$2r));
                            $$t_C.$36_0($p0.get_postReference().get_threadId(), false, true, $p2, $v_2);
                        }
                    });
                    $v_0 = true;
                    return null;
                }
            }
        }
        if (!$v_0) {
            return this.$8R_0($p6, $p1, $p0, $p2, $p5, $p4, $p3);
        }
        return null;
    },
    
    $8R_0: function SP_UI_MicroFeed_SPMicroFeed$$8R_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$4B + $p1;
        var $v_1 = document.createElement('button');
        var $v_2 = document.createElement('span');
        $v_2.id = 'ms-moreRepliesText_' + $p1;
        var $v_3 = document.createElement('span');
        $v_3.id = SP.UI.MicroFeed.SPMicroFeed.$2o + $p1;
        var $v_4 = document.createElement('img');
        $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$4C + $p1;
        var $v_5 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost($p2, $p2.get_rootPost());
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$2A;
        $v_1.setAttribute('type', 'button');
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$d;
        $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$4F;
        $v_1.appendChild($v_3);
        $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$2p;
        $v_4.setAttribute('src', SP.UI.MicroFeed.SPMicroFeed.get_$1H());
        $v_3.appendChild($v_4);
        $v_2.className = 'ms-microfeed-moreRepliesText';
        if ($p0) {
            $v_0.className = $v_0.className + ' ' + SP.UI.MicroFeed.SPMicroFeed.$6L;
            $v_1.id = 'ms-OrphanContent_' + $p1;
            $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.viewFullThreadText);
            var $$t_D = this;
            $addHandler($v_1, 'click', function() {
                $v_1.innerHTML = '';
                $v_1.appendChild(SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon(SP.UI.MicroFeed.SPMicroFeed.$2m + $p2.get_postReference().get_threadId(), SP.UI.MicroFeed.SPMicroFeed.$2r));
                $$t_D.$36_0($p2.get_postReference().get_threadId(), false, true, $p3, $v_5);
            });
        }
        else {
            $v_0.className = $v_0.className + ' ' + SP.UI.MicroFeed.SPMicroFeed.$4E;
            $v_1.className = $v_1.className + ' ' + SP.UI.MicroFeed.SPMicroFeed.$4D;
            $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$6K + $p1;
            $v_2.innerHTML = STSHtmlEncode(String.format(SpsClient.ScriptResources.viewRepliesText, $p4));
            var $$t_E = this;
            $addHandler($v_1, 'click', function() {
                SP.UI.MicroFeed.SPMicroFeed.$5L($p1);
                if ($p2.get_threadType()) {
                    $$t_E.$7R_0($p2.get_postReference().get_threadId(), $p5, $p4, $p6, $p3, $v_5);
                }
                else {
                    $$t_E.$7R_0($p1, $p5, $p4, $p6, $p3, null);
                }
            });
        }
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        return $v_0;
    },
    
    $3t_0: function SP_UI_MicroFeed_SPMicroFeed$$3t_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = '';
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = null;
        var $v_4 = 0;
        if ($p2) {
            $v_0 = $p2.id.substr($p2.id.lastIndexOf('_') + 1);
            $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$1b + $v_0);
            $p2.setAttribute('LastModificationTime', $p0.get_rootPost().get_modifiedTime());
            $v_1.innerHTML = '';
            $v_3 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost($p0, $p0.get_rootPost());
            $v_3.$1_0 = 1;
            $v_3.$6_0 = $p4;
            $v_3.$9_0 = $v_0;
            $v_1.appendChild(this.$x_0($v_3));
            if (SP.UI.MicroFeed.SPMicroFeed.$4i($p0.get_rootPost())) {
                $v_4++;
            }
            $v_2 = this.$3s_0($p0, $v_0, !$p3, false, ($p4) ? true : false, $p5);
            $v_4 += parseInt($v_2.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$t));
            $v_2.removeAttribute(SP.UI.MicroFeed.SPMicroFeed.$t);
            SP.UI.MicroFeed.SPMicroFeed.$5O($p2, $v_4, true);
            this.$5x_0($p0, $v_0);
        }
        else {
            $p2 = this.$2i_0($p0, $p1, false, false);
        }
        ProcessImn();
        return $p2;
    },
    
    $3s_0: function SP_UI_MicroFeed_SPMicroFeed$$3s_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$z + $p1);
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = 0;
        var $v_4 = 0;
        var $v_5 = 0;
        var $v_6 = null;
        var $v_7 = null;
        var $v_8 = $p0;
        if (!$v_0) {
            $v_0 = document.createElement('div');
            $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$z + $p1;
        }
        if (!$p2) {
            $v_0.innerHTML = '';
        }
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$2A + ' ms-microfeed-repliesDiv';
        if ($p3) {
            $v_0.setAttribute('expanded', 'true');
        }
        if ($p0 && $p0.get_postReference() && $p0.get_postReference().get_digest()) {
            $v_8 = $p0.get_postReference().get_digest();
        }
        if ($v_8 && $v_8.get_replies()) {
            for ($v_5 = 0; $v_5 < $v_8.get_replies().length; $v_5++) {
                $v_7 = $v_8.get_replies()[$v_5];
                $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$29 + $v_7.get_id());
                $v_2 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost($v_8, $v_7);
                $v_2.$9_0 = $p1;
                if ($v_1 && $v_8.get_id() === $p1) {
                    if ($p5) {
                        $v_2.$1_0 = 2;
                        $v_6 = this.$x_0($v_2);
                        $v_1.parentNode.insertBefore($v_6, $v_1);
                        if (SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_1)) {
                            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
                        }
                        $v_1.parentNode.removeChild($v_1);
                    }
                    continue;
                }
                if ($p4) {
                    $v_2.$1_0 = 8;
                }
                else {
                    $v_2.$1_0 = 2;
                }
                $v_6 = this.$x_0($v_2);
                if (($v_4 >= 2 || $p2) && !$p3) {
                    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_6);
                }
                if (SP.UI.MicroFeed.SPMicroFeed.$4i($v_7)) {
                    $v_3++;
                }
                $v_0.insertBefore($v_6, $v_0.firstChild);
                $v_4++;
            }
        }
        $v_0.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$t, $v_3);
        return $v_0;
    },
    
    createThreadDiv: function SP_UI_MicroFeed_SPMicroFeed$createThreadDiv(thread, threadID, hidden, preview) {
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.createThreadDivWithoutHiding(thread, threadID);
        if (!preview && (hidden || (thread && !this.$9O_0(thread)))) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
        }
        return $v_0;
    },
    
    $7R_0: function SP_UI_MicroFeed_SPMicroFeed$$7R_0($p0, $p1, $p2, $p3, $p4, $p5) {
        if ($p2 !== $p1) {
            this.$36_0($p0, $p3, true, $p4, $p5);
        }
        else {
            SP.UI.MicroFeed.SPMicroFeed.$5v($p0);
        }
    },
    
    $x_0: function SP_UI_MicroFeed_SPMicroFeed$$x_0($p0) {
        if (!$p0) {
            return document.createElement('div');
        }
        if (!$p0.$F_0) {
            $p0.$F_0 = (($p0.$1_0 === 3) || ($p0.$1_0 === 1) || ($p0.$1_0 === 6) || ($p0.$1_0 === 11) || ($p0.$1_0 === 10));
        }
        if ($p0.$1_0 === 8 || ($p0.$F_0 && $p0.$6_0)) {
            $p0.$4_0 = $p0.$9_0 + '_' + $p0.$3_0;
        }
        var $v_0 = SP.UI.MicroFeed.SPMicroFeed.$71($p0);
        if ($p0.$J_0) {
            $v_0.appendChild(this.$5q_0($p0, $v_0));
        }
        if ($p0.$6_0) {
            $v_0.appendChild(SP.UI.MicroFeed.SPMicroFeed.$8I($p0));
        }
        if (!SP.UI.MicroFeed.SPMicroFeed.$1e($p0)) {
            $v_0.appendChild(this.$8J_0($p0, $v_0));
        }
        else if ($p0.$1_0 !== 12) {
            var $v_1 = document.createElement('div');
            $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$2n + $p0.$4_0;
            $v_1.className = 'ms-microfeed-oneLiner';
            $v_1.appendChild(this.$5U_0($p0, $v_0));
            $v_0.appendChild($v_1);
        }
        return $v_0;
    },
    
    $5q_0: function SP_UI_MicroFeed_SPMicroFeed$$5q_0($p0, $p1) {
        var $v_0 = document.createElement('div');
        $v_0.id = 'ms-rightAlignedDiv_' + $p0.$4_0;
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$7P;
        if ($p0.$1_0 === 3 || $p0.$1_0 === 4) {
            $v_0.appendChild(SP.UI.MySiteCommon.CommonUIElements.createProcessingIcon('ms-PendingUploadImage_' + $p0.$4_0, SP.UI.MicroFeed.SPMicroFeed.$2r));
        }
        else if ($p0.$1_0 !== 12 && $p0.$1_0 !== 11 && this.$K_0) {
            this.$8B_0($v_0, $p0, $p1);
        }
        return $v_0;
    },
    
    $8B_0: function SP_UI_MicroFeed_SPMicroFeed$$8B_0($p0, $p1, $p2) {
        var $v_0 = null;
        var $v_1 = false;
        if ($p1.$6_0) {
            this.$8C_0($p0, $p1, $p2);
        }
        else if ($p1.$1_0 === 9 && $p1.$Z_0) {
            $p0.appendChild(this.$3j_0(true, $p1.$4_0, $p1.$3_0, $p1.$F_0, $p2, $p1.$A_0, $p1.$1_0, $p1.$9_0, false));
        }
        else if (!$p1.$J_0 && !SP.UI.MicroFeed.SPMicroFeed.$1e($p1)) {
            if ($p1.$Z_0 && SP.UI.MicroFeed.SPMicroFeed.$1L($p1) && !($p1.$1_0 === 9)) {
                $v_1 = true;
                $v_0 = $p1.$A_0;
            }
            else if ($p1.$F_0 && $p1.$1_0 !== 3 && this.$8_0 === this.$1i_0) {
                if ($p1.$B_0 && $p1.$B_0.get_isFollowed()) {
                    $v_0 = $p1.$B_0;
                }
                else if (($p1.$k_0 || SP.UI.MicroFeed.SPMicroFeed.$1d($p1.$A_0)) && !SP.UI.MicroFeed.SPMicroFeed.$1L($p1)) {
                    $v_0 = $p1.$A_0;
                }
                else {
                    return;
                }
            }
            else {
                return;
            }
            $p0.appendChild(this.$3j_0($v_1, $p1.$4_0, $p1.$3_0, $p1.$F_0, $p2, $v_0, $p1.$1_0, $p1.$9_0, $p1.get_isActivityPost()));
        }
    },
    
    $8C_0: function SP_UI_MicroFeed_SPMicroFeed$$8C_0($p0, $p1, $p2) {
        var $v_0 = false;
        if (!$p1.$6_0) {
            return;
        }
        if ($p1.$6_0.$Z_0 && SP.UI.MicroFeed.SPMicroFeed.$1L($p1.$6_0)) {
            if ($p1.$6_0.$1_0 === 10 || ($p1.$J_0 && $p1.$6_0.$1_0 === 9)) {
                $v_0 = true;
            }
            else {
                return;
            }
        }
        else if (!$p1.$J_0 || !$p1.$6_0.$k_0 || SP.UI.MicroFeed.SPMicroFeed.$1L($p1.$6_0) || this.$8_0 !== this.$1i_0) {
            return;
        }
        $p0.appendChild(this.$3j_0($v_0, $p1.$4_0, $p1.$6_0.$3_0, $p1.$F_0, $p2, $p1.$6_0.$A_0, $p1.$6_0.$1_0, $p1.$9_0, false));
    },
    
    $8J_0: function SP_UI_MicroFeed_SPMicroFeed$$8J_0($p0, $p1) {
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$4K + $p0.$4_0;
        var $v_1 = document.createElement('div');
        $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$2n + $p0.$4_0;
        if ($p0.$1g_0) {
            $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$6S;
        }
        else if ($p0.$6_0) {
            $v_0.className = 'ms-microfeed-indentRootRef';
        }
        $v_0.innerHTML = SP.UI.MicroFeed.SPMicroFeed.$5e($p0.$4_0, $p0, $p0.$A_0, true);
        if ($p0.$n_0 === 2) {
            $v_1.className = 'ms-microfeed-oneLiner';
        }
        else if ($p0.$F_0 && !$p0.$1g_0) {
            $v_1.className = 'ms-microfeed-rootBody';
        }
        else {
            $v_1.className = 'ms-microfeed-replyBody';
        }
        if (!$p0.$J_0) {
            $v_1.appendChild(this.$5q_0($p0, $p1));
        }
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.$5p($p0, $p0.$4_0, (($p0.$F_0) ? 'ms-microfeed-rootText' : 'ms-microfeed-replyText'), $p0.$F_0, $p0.$1_0, ((this.$7_0 === 2) ? true : false)));
        if ($p0.$I_0) {
            var $v_2 = null;
            switch ($p0.$I_0.get_attachmentKind()) {
                case 0:
                    $v_2 = SP.UI.MicroFeed.SPMicroFeed.$5k($p0.$I_0, $p0.$4_0, 'ms-microfeed-attachmentImage');
                    break;
                case 1:
                    $v_2 = SP.UI.MicroFeed.MicroFeedVideo.$5l($p0.$I_0, $p0.$4_0);
                    break;
                case 2:
                    $v_2 = SP.UI.MicroFeed.MicroFeedDoc.$5h($p0.$I_0, $p0.$4_0);
                    break;
            }
            if ($v_2) {
                $v_1.appendChild($v_2);
            }
        }
        if ($p0.$1_0 !== 12) {
            $v_1.appendChild(this.$5U_0($p0, $p1));
        }
        $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
        $v_0.appendChild($v_1);
        return $v_0;
    },
    
    $3j_0: function SP_UI_MicroFeed_SPMicroFeed$$3j_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        if (!$p0 && !$p5.get_canFollow()) {
            return document.createElement('div');
        }
        var $v_0 = document.createElement('div');
        $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$6D + $p1;
        var $v_1 = document.createElement('div');
        $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$3y + $p1;
        $v_1.style.width = '24px';
        $v_1.style.height = '24px';
        var $v_2 = document.createElement('img');
        var $v_3 = document.createElement('button');
        $v_3.id = SP.UI.MicroFeed.SPMicroFeed.$3x + $p1;
        var $v_4 = document.createElement('span');
        if ($p0) {
            if ($p8 || $p6 === 9 || $p6 === 10) {
                $v_3.title = SpsClient.ScriptResources.hideActivityTitleText;
            }
            else {
                $v_3.title = ($p3) ? SpsClient.ScriptResources.deleteRootTitleText : SpsClient.ScriptResources.deleteReplyTitleText;
            }
        }
        else if ($p5) {
            $v_3.title = String.format((!$p5.get_actorType()) ? SpsClient.ScriptResources.stopFollowingAuthorTitleText : SpsClient.ScriptResources.stopFollowingObjectTitleText, $p5.get_name());
        }
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$6C;
        $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$7N;
        $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$3V;
        $v_2.setAttribute('src', SP.UI.MicroFeed.SPMicroFeed.get_$1H());
        $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$3U;
        $v_3.setAttribute('type', 'button');
        if ($p0) {
            var $$t_E = this;
            $addHandler($v_3, 'click', function() {
                $$t_E.$5t_0($p1, $p2, $p3, $p6, $p7, $p8);
            });
        }
        else {
            var $$t_F = this;
            $addHandler($v_3, 'click', function() {
                $$t_F.$6w_0($p1, $p3, $p5, $p7);
            });
        }
        $v_4.appendChild($v_2);
        $v_3.appendChild($v_4);
        $v_1.appendChild($v_3);
        $v_0.appendChild($v_1);
        if (!($p6 === 6 || $p6 === 7 || $p6 === 10)) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNoneAndTabbable(true, $v_1);
            $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2G, 'false');
            $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2F, 'false');
            var $$t_G = this;
            $addHandler($p4, 'mouseover', function() {
                $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2G, 'true');
                SP.UI.MySiteCommon.CommonUIElements.displayForTabbable($v_1);
            });
            var $$t_H = this;
            $addHandler($p4, 'mouseout', function() {
                $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2G, 'false');
                if ($v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$2F) !== 'true') {
                    SP.UI.MySiteCommon.CommonUIElements.setDisplayNoneAndTabbable(true, $v_1);
                }
            });
            var $$t_I = this;
            $addHandler($v_3, 'focus', function() {
                $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2F, 'true');
                SP.UI.MySiteCommon.CommonUIElements.displayForTabbable($v_1);
            });
            var $$t_J = this;
            $addHandler($v_3, 'blur', function() {
                $v_1.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$2F, 'false');
                if ($v_1.getAttribute(SP.UI.MicroFeed.SPMicroFeed.$2G) !== 'true') {
                    SP.UI.MySiteCommon.CommonUIElements.setDisplayNoneAndTabbable(true, $v_1);
                }
            });
        }
        return $v_0;
    },
    
    $86_0: function SP_UI_MicroFeed_SPMicroFeed$$86_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = new SP.UI.MicroFeed.MicrofeedMenu('microfeed-moreDropDownMenu_' + $p2, 'span', 'socialcommon.png', SpsClient.ScriptResources.titleTextForMoreDropDown, false, SP.UI.MicroFeed.SPMicroFeed.$4L, 'ms-microfeed-mysitemenu-ellipsisImage', 'ms-core-menu-root', 'ms-microfeed-mysitemenu-ellipsisImageParent');
        var $v_1 = 0;
        if (SP.UI.MicroFeed.SPMicroFeed.$1e($p0)) {
            return null;
        }
        if ($p0.$O_0 && $p0.$O_0.length && ($p0.$j_0 || $p0.$i_0 || $p0.$l_0) && !SP.UI.MicroFeed.SPMicroFeed.$W) {
            var $$t_8 = this;
            $v_0.addRootPostDropDownItem(SpsClient.ScriptResources.copyThreadLinkRootDropDownText, function() {
                SP.UI.MicroFeed.SPMicroFeed.$9U($p0, $p2, $p3);
            });
            $v_1++;
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$5T($v_0, $p0)) {
            $v_1++;
        }
        if ($p0.$1M_0 && this.$K_0) {
            if (!$p0.$l_0) {
                var $$t_9 = this;
                $v_0.addRootPostDropDownItem(SpsClient.ScriptResources.lockThreadDropDownText, function() {
                    $$t_9.$79_0($p4, $p0.$3_0, true, $p0.$6_0);
                });
                $v_1++;
            }
            else {
                var $$t_A = this;
                $v_0.addRootPostDropDownItem(SpsClient.ScriptResources.unlockThreadDropDownText, function() {
                    $$t_A.$79_0($p4, $p0.$3_0, false, $p0.$6_0);
                });
                $v_1++;
            }
        }
        if (this.$K_0) {
            if (this.$5R_0($v_0, $p0, $p1, $p2, $p4)) {
                $v_1++;
            }
        }
        if ($v_1 > 0) {
            $v_0.addSeparator();
        }
        $v_1 += SP.UI.MicroFeed.SPMicroFeed.$5S($v_0, $p0.$S_0, $p5);
        if (this.$80_0($v_0, $p0, $p2, $p4)) {
            $v_1++;
        }
        if ($v_1 > 0) {
            return $v_0.render();
        }
        else {
            return null;
        }
    },
    
    $5R_0: function SP_UI_MicroFeed_SPMicroFeed$$5R_0($p0, $p1, $p2, $p3, $p4) {
        if (($p1.$Z_0 || this.$7A_0) && !($p1.$1_0 === 9 || $p1.$1_0 === 10) && !SP.UI.MicroFeed.SPMicroFeed.$1L($p1)) {
            var $$t_5 = this;
            $p0.addRootPostDropDownItem(SpsClient.ScriptResources.deleteRootDropDownText, function() {
                $$t_5.$5t_0($p3, $p1.$3_0, $p1.$F_0, $p2, $p4, false);
            });
            return true;
        }
        return false;
    },
    
    $80_0: function SP_UI_MicroFeed_SPMicroFeed$$80_0($p0, $p1, $p2, $p3) {
        if (this.$8_0 === this.$1i_0) {
            if ($p1.$B_0 && $p1.$B_0.get_isFollowed() && $p1.$B_0.get_id() !== $p1.$A_0.get_id() && SP.UI.MicroFeed.SPMicroFeed.$1L($p1)) {
                var $$t_4 = this;
                $p0.addRootPostDropDownItem(SP.UI.MicroFeed.SPMicroFeed.$8T($p1.$B_0), function() {
                    $$t_4.$6w_0($p2, true, $p1.$B_0, $p3);
                });
                return true;
            }
        }
        return false;
    },
    
    $85_0: function SP_UI_MicroFeed_SPMicroFeed$$85_0($p0, $p1, $p2) {
        var $v_0 = new SP.UI.MicroFeed.MicrofeedMenu('microfeed-moreDropDownMenu_' + $p1, 'span', 'socialcommon.png', SpsClient.ScriptResources.titleTextForMoreDropDown, false, SP.UI.MicroFeed.SPMicroFeed.$4L, 'ms-microfeed-mysitemenu-ellipsisImage', 'ms-core-menu-root', 'ms-microfeed-mysitemenu-ellipsisImageParent');
        var $v_1 = 0;
        if (this.$K_0) {
            if (this.$5R_0($v_0, $p0, $p0.$1_0, $p1, $p0.$9_0)) {
                $v_1++;
            }
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$5T($v_0, $p0)) {
            $v_1++;
        }
        if ($v_1 > 0) {
            $v_0.addSeparator();
        }
        $v_1 += SP.UI.MicroFeed.SPMicroFeed.$5S($v_0, $p0.$S_0, $p2);
        if ($v_1 > 0) {
            return $v_0.render();
        }
        else {
            return null;
        }
    },
    
    $5t_0: function SP_UI_MicroFeed_SPMicroFeed$$5t_0($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = '';
        var $v_1 = SpsClient.ScriptResources.deleteConfirmationDialogButtonText;
        var $v_2 = ($p3 === 9);
        var $v_3 = $p2 || $v_2;
        if ($p5 || $v_2) {
            $v_0 = SpsClient.ScriptResources.deleteRefConfirmationText;
            $v_1 = SpsClient.ScriptResources.hideConfirmationDialogButtonText;
        }
        else if ($p2) {
            if ($p3 === 10) {
                $v_0 = SpsClient.ScriptResources.deleteRefMentionConfirmationText;
                $v_1 = SpsClient.ScriptResources.removeConfirmationDialogButtonText;
            }
            else {
                $v_0 = SpsClient.ScriptResources.deleteRootConfirmationText;
            }
        }
        else {
            $v_0 = SpsClient.ScriptResources.deleteReplyConfirmationText;
        }
        var $$t_A = this;
        SP.UI.MicroFeed.SPMicroFeed.$2g($p0, $p4, $v_3, $v_0, '', $v_1, '', function() {
            $$t_A.$3p_0((($v_3) ? $p4 : $p0), $p1, $v_3);
        });
    },
    
    $6w_0: function SP_UI_MicroFeed_SPMicroFeed$$6w_0($p0, $p1, $p2, $p3) {
        if (!$p2) {
            return;
        }
        var $v_0 = '';
        var $v_1 = '';
        var $v_2 = $p2.get_name();
        var $v_3 = $v_2;
        if ($v_2.length >= 15) {
            $v_3 = String.format(SpsClient.ScriptResources.moreContentEllipsesNoSpace, $v_2.substr(0, 15));
        }
        if (!$p2.get_actorType()) {
            $v_0 = String.format(SpsClient.ScriptResources.hideConfirmationText, $v_2);
            $v_1 = String.format(SpsClient.ScriptResources.stopFollowingPersonConfirmationDialogButtonText, $v_3);
        }
        else {
            $v_0 = String.format(SpsClient.ScriptResources.hideDocumentConfirmationText, $v_2);
            $v_1 = String.format(SpsClient.ScriptResources.stopFollowingObjectConfirmationDialogButtonText, $v_3);
        }
        var $$t_8 = this;
        SP.UI.MicroFeed.SPMicroFeed.$2g($p0, $p3, $p1, $v_0, '', $v_1, $v_2, function() {
            $$t_8.$6v_0((($p1) ? $p3 : $p0), $p2, $v_2);
        });
    },
    
    $3p_0: function SP_UI_MicroFeed_SPMicroFeed$$3p_0($p0, $p1, $p2) {
        var $v_0 = null;
        var $v_1 = null;
        if ($p2) {
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $p0);
        }
        else {
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$29 + $p0);
        }
        if ($v_0) {
            $v_0.setAttribute('deleted', 'true');
            SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
            if (!$p2) {
                SP.UI.MicroFeed.SPMicroFeed.$6y($v_0.parentNode, 1, null);
            }
            if (!SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_0)) {
                SP.UI.MicroFeed.SPMicroFeed.$5u($v_0);
            }
            var $$t_7 = this;
            SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
                $v_1 = SP.UI.MicroFeed.SPMicroFeed.get_$D().deletePost($p1);
                SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                    if ($v_1.get_status()) {
                        $$t_7.$5s_0($p0, $p1, $p2, $v_0, '');
                    }
                    else {
                        if ($p2) {
                            SP.UI.MicroFeed.MicrofeedThreadCache.removeById($p1);
                        }
                        else {
                            SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate($v_1, false);
                        }
                        $$t_7.$7o_0($p1, $p2, $v_0.id);
                    }
                    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                }, function($p2_0, $p2_1) {
                    if ($p2_1.get_errorCode() === 3) {
                        $$t_7.$7o_0($p1, $p2, $v_0.id);
                    }
                    else if ($p2_1.get_errorCode() === 2) {
                        SP.UI.MicroFeed.SPMicroFeed.$2h(function() {
                            SP.UI.MicroFeed.SPMicroFeed.$2d($v_0);
                        });
                    }
                    else {
                        $$t_7.$5s_0($p0, $p1, $p2, $v_0, $p2_1.get_message());
                    }
                    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                });
            });
        }
    },
    
    $7o_0: function SP_UI_MicroFeed_SPMicroFeed$$7o_0($p0, $p1, $p2) {
        var $v_0 = null;
        var $v_1 = $get($p2);
        if ($v_1) {
            $v_1.parentNode.removeChild($v_1);
        }
        if ($p1) {
            this.$82_0();
        }
        else {
            $v_0 = document.getElementsByName($p0);
            while ($v_0.length > 0) {
                SP.UI.MicroFeed.SPMicroFeed.$6y($v_0[0].parentNode.parentNode, 1, null);
                $v_0[0].parentNode.parentNode.removeChild($v_0[0].parentNode);
            }
        }
    },
    
    $5s_0: function SP_UI_MicroFeed_SPMicroFeed$$5s_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = document.createElement('div');
        $v_0.id = 'ms-errorPostDiv';
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$4J + ' ' + SP.UI.MicroFeed.SPMicroFeed.$4M;
        $v_0.innerHTML = $p3.innerHTML;
        if ($p2) {
            $v_0.innerHTML = $p3.firstChild.firstChild.innerHTML;
        }
        SP.UI.MicroFeed.SPMicroFeed.$3q($v_0);
        var $v_1 = '';
        if (!SP.ScriptHelpers.isNullOrEmptyString($p4)) {
            $v_1 = String.format(SpsClient.ScriptResources.genericErrorMessage, $p4);
        }
        var $v_2 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, SpsClient.ScriptResources.deleteErrorMessage);
        $v_2.set_okButtonText(SpsClient.ScriptResources.retryButtonText);
        var $$t_8 = this;
        $v_2.set_okButtonCallback(function() {
            $$t_8.$3p_0($p0, $p1, $p2);
        });
        var $$t_9 = this;
        $v_2.set_cancelButtonCallback(function() {
            SP.UI.MicroFeed.SPMicroFeed.$2d($p3);
        });
        $v_2.set_extraMessage($v_0);
        $v_2.set_errorMessage($v_1);
        $v_2.show();
    },
    
    $82_0: function SP_UI_MicroFeed_SPMicroFeed$$82_0() {
        var $v_0 = null;
        var $v_1 = false;
        var $v_2 = false;
        var $v_3 = false;
        var $v_4 = 0;
        var $v_5 = null;
        var $v_6 = 0;
        var $v_7 = 0;
        var $v_8 = '';
        $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1J);
        if (!$v_0) {
            return;
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$W) {
            this.$6r_0('', 0);
            return;
        }
        $v_8 = $v_0.getAttribute('numHiddenThreads');
        if (!SP.ScriptHelpers.isNullOrEmptyString($v_8)) {
            $v_7 = parseInt($v_0.getAttribute('numHiddenThreads'));
        }
        for ($v_4 = 0; $v_4 < $v_0.children.length; $v_4++) {
            $v_5 = $v_0.children[$v_4];
            $v_2 = ($v_0.children[$v_4].getAttribute('deleted')) === 'true';
            $v_3 = SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_5);
            if ($v_3 && !$v_6 && !$v_2) {
                if (this.$3g_0($v_5)) {
                    $v_6 = 1;
                    SP.UI.MySiteCommon.CommonUIElements.display($v_5);
                    $v_1 = true;
                    break;
                }
            }
            if (!$v_1) {
                $v_1 = !($v_2 || $v_3);
            }
        }
        $v_7 = $v_7 - $v_6;
        $v_0.setAttribute('numHiddenThreads', '' + $v_7);
        if ($v_6 < 1) {
            this.$3e_0($v_0, 1, 0);
        }
        if (!$v_1) {
            $v_0.appendChild(this.$22_0(false));
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1W));
        }
    },
    
    $79_0: function SP_UI_MicroFeed_SPMicroFeed$$79_0($p0, $p1, $p2, $p3) {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $p0);
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        var $$t_8 = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $v_1 = ($p2) ? SP.UI.MicroFeed.SPMicroFeed.get_$D().lockThread($p1) : SP.UI.MicroFeed.SPMicroFeed.get_$D().unlockThread($p1);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if (!$v_1.get_status() || $v_1.get_status() === 5 || $v_1.get_status() === 8) {
                    SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate($v_1, false);
                    $$t_8.$3t_0($v_1, false, $v_0, false, $p3, true);
                    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                }
                else {
                    SP.UI.MicroFeed.SPMicroFeed.$6s();
                }
            }, function($p2_0, $p2_1) {
                if ($p2_1.get_errorCode() === 2) {
                    SP.UI.MicroFeed.SPMicroFeed.$2h(function() {
                        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                    });
                }
                else {
                    SP.UI.MicroFeed.SPMicroFeed.$6s();
                }
            });
        });
    },
    
    $5U_0: function SP_UI_MicroFeed_SPMicroFeed$$5U_0($p0, $p1) {
        var $v_0 = $p0.$3_0;
        var $v_1 = SP.UI.MicroFeed.SPMicroFeed.$5V($p0, $p0.$1_0, $p0.$4_0, true);
        var $v_2 = document.createElement('a');
        $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$42 + $p0.$4_0;
        var $v_3 = document.createElement('a');
        $v_3.id = SP.UI.MicroFeed.SPMicroFeed.$6Z + $p0.$4_0;
        var $v_4 = document.createElement('span');
        $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$6G + $p0.$4_0;
        $v_4.className = 'ms-textSmall';
        var $v_5 = null;
        if (!$p0.$J_0) {
            if ($p0.$1_0 === 2 || $p0.$1_0 === 8 || $p0.$1_0 === 7) {
                SP.UI.MicroFeed.SPMicroFeed.$5X($p0.$16_0, $v_2, false);
                SP.UI.MicroFeed.SPMicroFeed.$5W($v_1, $p0.$m_0, $p0.$4_0, $p0, $p0.$15_0);
            }
            if ($p0.$i_0 && this.$K_0) {
                SP.UI.MicroFeed.SPMicroFeed.$g($v_1);
                $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$28;
                $v_2.setAttribute('href', '#');
                $v_2.setAttribute('onclick', 'return false;');
                if ($p0.$15_0) {
                    $v_2.setAttribute('liked', 'true');
                    $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.unlikeCommandText);
                }
                else {
                    $v_2.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.likeCommandText);
                }
                var $$t_C = this;
                $addHandler($v_2, 'click', function($p1_0) {
                    SP.UI.MicroFeed.SPMicroFeed.$96($p1_0, $v_0, $p0);
                });
                $v_1.appendChild($v_2);
            }
            if ($p0.$j_0 && ($p0.$1_0 === 6 || $p0.$1_0 === 1) && this.$K_0) {
                SP.UI.MicroFeed.SPMicroFeed.$g($v_1);
                $v_3.className = SP.UI.MicroFeed.SPMicroFeed.$28;
                $v_3.setAttribute('href', '#');
                $v_3.setAttribute('onclick', 'return false;');
                SP.UI.MySiteCommon.CommonUIElements.setElementText($v_3, SpsClient.ScriptResources.replyCommandText);
                $v_1.appendChild($v_3);
                var $$t_D = this;
                $addHandler($v_3, 'click', function() {
                    var $v_7 = $get(SP.UI.MicroFeed.SPMicroFeed.$2x + $p0.$9_0);
                    var $v_8 = $get(SP.UI.MicroFeed.SPMicroFeed.$1I + $p0.$9_0);
                    SP.UI.MicroFeed.SPMicroFeed.$8j($p0.$9_0);
                    SP.UI.MySiteCommon.CommonUIElements.display($v_8);
                    $v_7.focus();
                });
            }
            if ($p0.$l_0 && ($p0.$1_0 === 6 || $p0.$1_0 === 1)) {
                SP.UI.MicroFeed.SPMicroFeed.$g($v_1);
                $v_4.title = SpsClient.ScriptResources.lockedToolTip;
                SP.UI.MySiteCommon.CommonUIElements.setElementText($v_4, SpsClient.ScriptResources.lockedPostText);
                $v_1.appendChild($v_4);
            }
            var $v_6 = SP.UI.MicroFeed.SPMicroFeed.$7x($p0, $v_1, $p0.$4_0);
            if ($p0.$1_0 === 1 || $p0.$1_0 === 6) {
                $v_5 = this.$86_0($p0, $p0.$1_0, $p0.$4_0, $p1, $p0.$9_0, $v_6);
            }
            else {
                $v_5 = this.$85_0($p0, $p0.$4_0, $v_6);
            }
            if ($v_5) {
                SP.UI.MicroFeed.SPMicroFeed.$g($v_1);
                $v_1.appendChild($v_5);
            }
        }
        else {
            SP.UI.MicroFeed.SPMicroFeed.$g($v_1);
            $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.$8Q($p0.$4_0));
        }
        return $v_1;
    },
    
    $5w_0: function SP_UI_MicroFeed_SPMicroFeed$$5w_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$1I + $p2);
        if (!$v_0) {
            $v_0 = document.createElement('div');
            $v_0.id = SP.UI.MicroFeed.SPMicroFeed.$1I + $p2;
        }
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$2A + ' ms-microfeed-newReplyDiv';
        if (!$p1 || !this.$K_0) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
        }
        if (!this.$K_0) {
            return $v_0;
        }
        if (1 === $p0 && SP.UI.MicroFeed.SPMicroFeed.$91($v_0)) {
            var $v_1 = null;
            var $v_2 = null;
            var $v_3 = null;
            var $v_4 = null;
            var $v_5 = null;
            var $v_6 = null;
            var $v_7 = null;
            var $v_8 = null;
            var $v_9 = null;
            $v_7 = document.createElement('div');
            $v_7.id = SP.UI.MicroFeed.SPMicroFeed.$4R + $p2;
            $v_7.style.position = 'relative';
            $v_7.className = SP.UI.MicroFeed.SPMicroFeed.$55 + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2Q;
            $v_8 = document.createElement('div');
            $v_8.id = SP.UI.MicroFeed.SPMicroFeed.$3Q + $p2;
            $v_1 = document.createElement('div');
            $v_1.id = 'ms-newReplyDivContent_' + $p2;
            $v_1.className = 'ms-microfeedReplyContent';
            $v_1.style.position = 'relative';
            $v_0.innerHTML = SP.UI.MicroFeed.SPMicroFeed.$5e(SP.UI.MicroFeed.SPMicroFeed.$2k + $p2, null, SP.UI.MicroFeed.SPMicroFeed.get_$X(), false);
            var $v_A = document.createElement('div');
            $v_A.id = SP.UI.MicroFeed.SPMicroFeed.$2z + $p2;
            $v_A.className = SP.UI.MicroFeed.SPMicroFeed.$4Q + ' ' + SP.UI.MicroFeed.SPMicroFeed.$6c;
            $v_2 = document.createElement('textarea');
            $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$2x + $p2;
            $v_2.className = SP.UI.MicroFeed.SPMicroFeed.$4Q + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2P + ' ' + SP.UI.MicroFeed.SPMicroFeed.$3T;
            $v_2.title = SpsClient.ScriptResources.replyTitleText;
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_2, this.$P_0);
            $v_2.rows = 1;
            $v_2.style.position = 'relative';
            $v_2.setAttribute('targetDisplayName', STSHtmlEncode($p4));
            $v_4 = document.createElement('span');
            $v_4.id = SP.UI.MicroFeed.SPMicroFeed.$59;
            $v_4.className = SP.UI.MicroFeed.SPMicroFeed.$7M;
            $v_5 = document.createElement('label');
            $v_5.id = SP.UI.MicroFeed.SPMicroFeed.$1C + $p2;
            $v_5.className = SP.UI.MicroFeed.SPMicroFeed.$4z + ' ' + SP.UI.MicroFeed.SPMicroFeed.$2O;
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_5);
            if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
                $addHandler($v_2, 'keydown', this.$$d_$8E_0);
                $addHandler($v_2, 'keyup', this.$$d_$8E_0);
                $addHandler($v_2, 'propertychange', this.$$d_$8E_0);
                $addHandler($v_2, 'input', this.$$d_$8E_0);
            }
            var $$t_I = this;
            $addHandler($v_2, 'focus', function() {
                SP.UI.MySiteCommon.CommonUIElements.display($v_0);
                $$t_I.$62_0($v_2.id, false, $get(SP.UI.MicroFeed.SPMicroFeed.$25 + SP.UI.MicroFeed.SPMicroFeed.$2k + $p2));
            });
            var $$t_J = this;
            $addHandler($v_2, 'blur', function() {
                SP.UI.MicroFeed.SPMicroFeed.$63($v_2.id, false);
            });
            if (!SP.UI.MicroFeed.SPMicroFeed.$s) {
                var $$t_K = this, $$t_L = this;
                $addHandlers($v_2, { keyup: function() {
                    $$t_K.$w_0($v_2, $v_5, $v_3, $$t_K.$P_0);
                }, change: function() {
                    $$t_L.$w_0($v_2, $v_5, $v_3, $$t_L.$P_0);
                } });
            }
            var $$t_M = this, $$t_N = this, $$t_O = this, $$t_P = this, $$t_Q = this;
            $addHandlers($v_2, { cut: function() {
                $$t_M.$2Z_0($v_2, $v_5, $v_3, $$t_M.$P_0);
            }, paste: function() {
                $$t_N.$2Z_0($v_2, $v_5, $v_3, $$t_N.$P_0);
            }, keyup: function() {
                SP.UI.MicroFeed.SPMicroFeed.$1w($v_2, $p2);
            }, click: function() {
                SP.UI.MicroFeed.SPMicroFeed.$1w($v_2, $p2);
            }, focus: function() {
                SP.UI.MicroFeed.SPMicroFeed.$1w($v_2, $p2);
            } });
            $v_3 = SP.UI.MicroFeed.SPMicroFeed.$3m(SpsClient.ScriptResources.postCommandText, SP.UI.MicroFeed.SPMicroFeed.$y + $p2, SP.UI.MicroFeed.SPMicroFeed.$58);
            $v_3.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, $p2);
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_3);
            $v_9 = SP.UI.MicroFeed.SPMicroFeed.$2a(SP.UI.MicroFeed.SPMicroFeed.get_$1H(), SpsClient.ScriptResources.attachPictureButtonText, SpsClient.ScriptResources.attachPictureButtonText, SP.UI.MicroFeed.SPMicroFeed.$2t + $p2, SP.UI.MicroFeed.SPMicroFeed.$4y + ' ' + SP.UI.MicroFeed.SPMicroFeed.$d, SP.UI.MicroFeed.SPMicroFeed.$4x, SP.UI.MicroFeed.SPMicroFeed.$4w);
            $v_9.setAttribute('name', SP.UI.MicroFeed.SPMicroFeed.$38);
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_9);
            var $$t_R = this;
            $addHandler($v_9, 'click', function($p1_0) {
                $$t_R.$5a_0($v_3, $v_2, $p2);
            });
            $v_7.appendChild($v_A);
            $v_7.appendChild($v_2);
            $v_8.className = 'ms-microfeed-elementsNoFocus';
            $v_8.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$Y, $p2);
            $v_8.setAttribute(SP.UI.MicroFeed.SPMicroFeed.$1K, 'false');
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_8);
            $v_8.appendChild(SP.UI.MicroFeed.SPMicroFeed.$5g($v_2, $p2));
            $v_8.appendChild(this.$5d_0($v_2, $v_3, $p2));
            $v_7.appendChild($v_8);
            $v_1.appendChild($v_7);
            var $$t_S = this;
            $addHandler($v_3, 'click', function() {
                $$t_S.$7Z_0($p2, $p3, SP.UI.MicroFeed.SPMicroFeed.$6m($p2));
            });
            $v_4.appendChild($v_5);
            $v_4.appendChild($v_3);
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_4);
            $v_1.appendChild($v_9);
            $v_1.appendChild($v_4);
            $v_1.appendChild(SP.UI.MicroFeed.SPMicroFeed.createClearFloatsDiv());
            $v_0.appendChild($v_1);
            var $$t_T = this;
            $v_6 = new SP.UI.MicroFeed.AtMention($v_2, 3, function() {
                $$t_T.$7p_0($v_2, $v_3, $v_8, $v_5, $$t_T.$P_0);
            });
            SP.UI.MicroFeed.SPMicroFeed.$N[$p2] = $v_6;
            var $$t_U = this;
            $addHandler($v_2, 'keydown', function($p1_0) {
                SP.UI.MicroFeed.SPMicroFeed.$7q($p1_0, $p2, false);
            });
        }
        else if (2 === $p0) {
            $v_0.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.replyLimitErrorText);
        }
        else if (0 === $p0) {
            $v_0.innerHTML = '';
        }
        return $v_0;
    },
    
    $62_0: function SP_UI_MicroFeed_SPMicroFeed$$62_0($p0, $p1, $p2) {
        var $v_0 = $get($p0), $v_1 = document.createElement('textarea');
        var $v_2, $v_3, $v_4;
        var $v_5 = '';
        var $v_6 = $p0.substr($p0.indexOf('_') + 1);
        var $v_7 = 0, $v_8 = 0;
        var $v_9 = SP.UI.MicroFeed.SPMicroFeed.getTextBoxFocusDiv($v_0, $p1);
        if ($v_9) {
            $v_9.className = $v_9.className.replace(SP.UI.MicroFeed.SPMicroFeed.$2Q, SP.UI.MicroFeed.SPMicroFeed.$56);
        }
        if ($p2) {
            SP.UI.MySiteCommon.CommonUIElements.display($p2);
        }
        if ($p1) {
            if ($v_0.rows < 2) {
                $v_0.rows = 2;
            }
            $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$V);
            $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$3K);
            $v_4 = $get(SP.UI.MicroFeed.SPMicroFeed.$1p);
            $v_5 = this.$G_0;
        }
        else {
            $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$y + $v_6);
            $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$2t + $v_6);
            $v_4 = $get(SP.UI.MicroFeed.SPMicroFeed.$1Y + $v_6);
            $v_5 = this.$P_0;
            if ($v_9 && $v_9.parentNode) {
                if ($v_9.parentNode.className.indexOf(SP.UI.MicroFeed.SPMicroFeed.$2y) === -1) {
                    $v_9.parentNode.className += ' ' + SP.UI.MicroFeed.SPMicroFeed.$2y;
                }
            }
            if ($v_0.rows < 2) {
                $v_1.rows = 2;
                $v_1.style.zIndex = 1;
                $v_1.style.position = 'absolute';
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_1);
                $v_0.parentNode.appendChild($v_1);
                $v_7 = $v_1.clientHeight;
                $v_8 = $v_1.clientWidth;
                $v_0.parentNode.removeChild($v_1);
                $v_0.style.height = $v_0.clientHeight + 'px';
                $v_0.style.width = $v_8 + 'px';
                var $$t_F = this;
                SP.SOD.executeFunc('core.js', 'SPAnimationUtility', function() {
                    SPAnimationUtility.BasicAnimator.Resize($v_0, $v_7 - 8, $v_8 - 10, function() {
                        $v_0.rows = 2;
                        $v_0.style.height = 'auto';
                        $v_0.style.width = '';
                        $$t_F.$20_0($v_0);
                    }, null);
                });
            }
        }
        if (SP.UI.MicroFeed.SPMicroFeed.$s) {
            window.clearInterval(SP.UI.MicroFeed.SPMicroFeed.$3a);
            var $$t_G = this;
            SP.UI.MicroFeed.SPMicroFeed.$3a = window.setInterval(function() {
                $$t_G.$20_0($v_0);
                var $v_A = SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID($v_0.id);
                var $v_B = ($p0 === SP.UI.MicroFeed.SPMicroFeed.$1D);
                if ($v_B) {
                    $$t_G.$w_0($v_0, $get(SP.UI.MicroFeed.SPMicroFeed.$1C), $get(SP.UI.MicroFeed.SPMicroFeed.$V), $$t_G.$G_0);
                }
                else {
                    $$t_G.$w_0($v_0, $get(SP.UI.MicroFeed.SPMicroFeed.$1C + $v_A), $get(SP.UI.MicroFeed.SPMicroFeed.$y + $v_A), $$t_G.$P_0);
                }
            }, 100);
        }
        if ($v_2) {
            SP.UI.MySiteCommon.CommonUIElements.display($v_2);
            SP.UI.MySiteCommon.CommonUIElements.display($v_2.parentNode);
            this.$2W_0($v_2, $v_0, $v_5);
        }
        if ($v_3) {
            SP.UI.MySiteCommon.CommonUIElements.display($v_3);
            $v_3.disabled = this.$3H_0;
        }
        if ($v_0.value === $v_5) {
            $v_0.value = '';
        }
        $v_0.className = $v_0.className.replace(SP.UI.MicroFeed.SPMicroFeed.$2P, SP.UI.MicroFeed.SPMicroFeed.$54);
    },
    
    $9I_0: function SP_UI_MicroFeed_SPMicroFeed$$9I_0($p0, $p1, $p2, $p3) {
        var $v_0 = null, $v_1 = null;
        if ($p1) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1C));
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$V);
            $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$3K);
            $p3.value = this.$G_0;
        }
        else {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1C + $p0));
            $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$y + $p0);
            $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$2t + $p0);
            $p3.value = this.$P_0;
            var $v_3 = SP.UI.MicroFeed.SPMicroFeed.getTextBoxFocusDiv($p3, $p1);
            if ($v_3 && $v_3.parentNode) {
                $v_3.parentNode.className = $v_3.parentNode.className.replace(SP.UI.MicroFeed.SPMicroFeed.$2y, '');
            }
            $p3.style.height = '';
            $p3.style.width = '';
        }
        SP.UI.MicroFeed.SPMicroFeed.$2X($p3);
        var $v_2 = $get(($p1) ? SP.UI.MicroFeed.SPMicroFeed.$3R : SP.UI.MicroFeed.SPMicroFeed.$2z + SP.UI.MicroFeed.SPMicroFeed.getPostIDFromDOMElementID($p3.id));
        if ($v_2) {
            $v_2.innerHTML = '';
        }
        if (!(SP.UI.MicroFeed.SPMicroFeed.$H[($p0) ? $p0 : ''])) {
            $v_0.disabled = true;
            if ($p1) {
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(true, $v_0);
            }
            else {
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0);
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_0.parentNode);
            }
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $v_1);
        }
        if (!$p1) {
            $p3.rows = 1;
        }
        else {
            $p3.rows = 2;
        }
        if ($p2) {
            SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $p2);
        }
        $p3.className = $p3.className.replace(SP.UI.MicroFeed.SPMicroFeed.$54, SP.UI.MicroFeed.SPMicroFeed.$2P);
    },
    
    $7i_0: function SP_UI_MicroFeed_SPMicroFeed$$7i_0($p0) {
        this.$8_0 = $p0;
        this.$1j_0 = false;
    },
    
    $35_0: function SP_UI_MicroFeed_SPMicroFeed$$35_0($p0, $p1, $p2) {
        var $v_0 = this.$5_0[this.$8_0];
        var $v_1 = $v_0.$f_0;
        var $v_2 = null;
        var $v_3 = new SP.Social.SocialFeedOptions();
        $v_3.set_maxThreadCount(SP.UI.MicroFeed.SPMicroFeed.$7S);
        $v_3.set_sortOrder(0);
        if ($p0) {
            if ($p0 === 1) {
                $v_3.set_olderThan(this.$1A_0);
            }
            else if ($p0 === 2) {
                if (this.$1k_0) {
                    $v_3.set_newerThan(this.$1k_0);
                }
                else {
                    this.$1A_0 = new Date();
                }
            }
        }
        if (this.$1y_0()) {
            this.$4q_0 = new Date();
        }
        $p2.val = true;
        switch ($v_1) {
            case 0:
                if (this.$7_0 === 1) {
                    $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeed(0, $v_3);
                }
                else if (this.$7_0 === 2) {
                    $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeedFor(SP.UI.MicroFeed.SPMicroFeed.microfeed.$M_0, $v_3);
                    $p2.val = false;
                }
                else {
                    $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeedFor(this.$4u_0, $v_3);
                    $p2.val = false;
                }
                break;
            case 1:
                $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeed(1, $v_3);
                break;
            case 4:
                $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeed(4, $v_3);
                $p2.val = false;
                break;
            case 2:
                $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeed(2, $v_3);
                break;
            case 6:
                $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFeed(3, $v_3);
                break;
            case 5:
                $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getMentions($p1, $v_3);
                break;
        }
        return $v_2;
    },
    
    $4b_0: function SP_UI_MicroFeed_SPMicroFeed$$4b_0($p0, $p1, $p2) {
        var $v_0 = (this.$5_0[this.$8_0]).$f_0;
        var $v_1 = this.$E_0[$v_0];
        var $v_2 = new SP.UI.MicroFeed.MicrofeedThreadList();
        var $v_3 = null;
        var $v_4 = false;
        var $v_5 = false;
        if (!$p0 && (this.$E_0[$v_0])) {
            this.$5J_0($p1);
            SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
            return;
        }
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        var $$t_F = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            if ($$t_F.$1y_0() && $$t_F.$1k_0 && $v_1 && $v_1.size() > 0) {
                var $$t_B, $$t_C;
                $v_3 = (($$t_C = $$t_F.$35_0(2, $p2, ($$t_B = {'val': $v_4}))), $v_4 = $$t_B.val, $$t_C);
                $v_5 = true;
            }
            else {
                $$t_F.$1A_0 = new Date();
                var $$t_D, $$t_E;
                $v_3 = (($$t_E = $$t_F.$35_0(0, $p2, ($$t_D = {'val': $v_4}))), $v_4 = $$t_D.val, $$t_E);
            }
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                $v_2.setThreadCollection($v_3, false, $$t_F.$1O_0);
                if ($v_5) {
                    $$t_F.$5H_0($v_3);
                    $v_2.appendThreadList($v_1);
                }
                $$t_F.$E_0[$v_0] = $v_2;
                $$t_F.resetNewPostNotifications();
                if ($v_4) {
                    $$t_F.$1x_0($v_3.get_unreadMentionCount());
                }
                $$t_F.$5J_0($p1);
                SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
            }, function($p2_0, $p2_1) {
                $$t_F.$3B_0 = $p2_1.get_message();
                if ($p2_1.get_errorCode() === 9) {
                    $$t_F.$E_0[$v_0] = new SP.UI.MicroFeed.MicrofeedThreadList();
                }
                $$t_F.$5J_0($p1);
                SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
            });
        });
    },
    
    $5J_0: function SP_UI_MicroFeed_SPMicroFeed$$5J_0($p0) {
        var $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$26);
        if ($v_0) {
            var $$t_2 = this;
            SP.UI.MicroFeed.SPMicroFeed.$24(function() {
                $$t_2.$3r_0($p0);
            }, false);
        }
        else {
            this.$3r_0($p0);
        }
    },
    
    $3e_0: function SP_UI_MicroFeed_SPMicroFeed$$3e_0($p0, $p1, $p2) {
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        var $v_0 = new SP.UI.MicroFeed.MicrofeedThreadList();
        var $v_1 = false;
        var $$t_G = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $$t_E, $$t_F;
            var $v_2 = (($$t_F = $$t_G.$35_0(1, false, ($$t_E = {'val': $v_1}))), $v_1 = $$t_E.val, $$t_F);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if ($v_1) {
                    $$t_G.$1x_0($v_2.get_unreadMentionCount());
                }
                var $v_3 = 0;
                var $v_4 = 0;
                var $v_5 = 0;
                $v_0.setThreadCollection($v_2, false, $$t_G.$1O_0);
                var $v_6 = ($$t_G.$5_0[$$t_G.$8_0]).$f_0;
                var $v_7 = $$t_G.$E_0[$v_6];
                if (!$v_7) {
                    $$t_G.$E_0[$v_6] = $v_0;
                    $v_4 = $v_0.size();
                }
                else {
                    $v_5 = $v_7.sizeAfterRemovingRecentDeletions();
                    $v_7.appendThreadList($v_0);
                    $$t_G.$E_0[$v_6] = $v_7;
                    $v_4 = $v_7.size() - $v_5;
                }
                if ($v_4) {
                    $v_3 = $$t_G.$5y_0($p0, $$t_G.$E_0[$v_6], $v_5, $p1);
                }
                if ($v_3 < $p1 && $v_4 && $p2 !== 3) {
                    $$t_G.$3e_0($p0, $p1 - $v_3, ++$p2);
                }
                else {
                    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                }
                if (!$v_4) {
                    SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$4G));
                }
                if ($v_3 > 0) {
                    var $v_8 = $get(SP.UI.MicroFeed.SPMicroFeed.$27);
                    if (null !== $v_8) {
                        $v_8.parentNode.removeChild($v_8);
                    }
                }
                ProcessImn();
            }, function($p2_0, $p2_1) {
                SP.UI.MySiteCommon.CommonUIElements.setDisplayNone(false, $get(SP.UI.MicroFeed.SPMicroFeed.$1W));
                SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
            });
        });
    },
    
    $7Y_0: function SP_UI_MicroFeed_SPMicroFeed$$7Y_0($p0, $p1, $p2, $p3) {
        var $$t_7 = this;
        SP.SOD.executeFunc('initstrings.js', 'Strings.STS.L_RelativeDateTime_AFewSeconds', function() {
            var $v_0 = SP.ScriptHelpers.isNullOrEmptyString($p2);
            var $v_1 = SP.UI.MicroFeed.MicrofeedEntry.createEntryFromData(SP.UI.MicroFeed.SPMicroFeed.get_$X(), ($v_0) ? 0 : 1, $p1, 'pending', false, false, false, $p0.get_attachment());
            var $v_2 = $get(SP.UI.MicroFeed.SPMicroFeed.$27);
            if (null !== $v_2) {
                $v_2.parentNode.removeChild($v_2);
            }
            if (!$v_0) {
                $$t_7.$8N_0($p0, $p1, $p2, $p3, $v_1);
            }
            else {
                $$t_7.$8O_0($p0, $p1, $v_1, $p3);
            }
        });
    },
    
    $8N_0: function SP_UI_MicroFeed_SPMicroFeed$$8N_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null;
        var $v_1 = null, $v_2 = null;
        var $v_3 = '';
        var $v_4 = null;
        if (this.$14_0) {
            $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$z + $p2);
            $p4.$1_0 = 4;
            $p4.$9_0 = $p2;
            $v_2 = this.$x_0($p4);
            $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$4N + $p2;
            SP.UI.MySiteCommon.CommonUIElements.display($v_1);
            $v_1.appendChild($v_2);
            ProcessImn();
            SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        }
        if (!SP.ScriptHelpers.isNullOrEmptyString($p3)) {
            $v_3 = $p3;
        }
        else {
            $v_3 = $p2;
        }
        var $$t_E = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            $v_0 = SP.UI.MicroFeed.SPMicroFeed.get_$D().createPost($v_3, $p0);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if ($v_0.get_status() && $v_0.get_status() !== 8) {
                    $$t_E.$3d_0($p0, $p1, $p2, $p3, $p4, $v_2, null);
                }
                else if (!$v_0.get_status() && $$t_E.$14_0) {
                    var $v_5 = ($$t_E.$E_0[1]);
                    if ($v_5) {
                        $v_5.moveToFront($v_0, false);
                    }
                    $v_5 = ($$t_E.$E_0[0]);
                    if ($v_5) {
                        $v_5.moveToFront($v_0, false);
                    }
                    var $v_6 = $get(SP.UI.MicroFeed.SPMicroFeed.$1o + $p4.$3_0);
                    if ($v_2 && $v_2.parentNode) {
                        $v_2.parentNode.removeChild($v_2);
                    }
                    $v_4 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost($v_0, $v_0.get_replies()[0]);
                    $v_4.$1_0 = 7;
                    $v_4.$9_0 = $p2;
                    $v_1.appendChild($$t_E.$x_0($v_4));
                    SP.UI.MicroFeed.SPMicroFeed.$7f($v_6, SP.UI.MicroFeed.SPMicroFeed.$1o + $v_4.$3_0);
                    ProcessImn();
                    SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                }
            }, function($p2_0, $p2_1) {
                $$t_E.$3d_0($p0, $p1, $p2, $p3, $p4, $v_2, $p2_1);
            });
        });
    },
    
    $8O_0: function SP_UI_MicroFeed_SPMicroFeed$$8O_0($p0, $p1, $p2, $p3) {
        var $v_0 = null;
        var $v_1 = null, $v_2 = null, $v_3 = null;
        if (this.$14_0) {
            $v_3 = $get(SP.UI.MicroFeed.SPMicroFeed.$1J);
            $v_1 = document.createElement('div');
            $v_1.id = SP.UI.MicroFeed.SPMicroFeed.$6T + '0';
            $v_2 = this.$8f_0($p2, false);
            $v_2.id = SP.UI.MicroFeed.SPMicroFeed.$4N + '0';
            $v_1.appendChild($v_2);
            SP.UI.MicroFeed.SPMicroFeed.$1z($v_1, $v_3, null, false);
            ProcessImn();
        }
        if (SP.ScriptHelpers.isNullOrEmptyString(this.$M_0)) {
            $p0.set_updateStatusText(true);
        }
        else {
            $p0.set_updateStatusText(false);
        }
        var $$t_C = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            $v_0 = SP.UI.MicroFeed.SPMicroFeed.get_$D().createPost($p3, $p0);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if ($v_0.get_status() && $v_0.get_status() !== 8) {
                    $$t_C.$3d_0($p0, $p1, null, null, $p2, $v_1, null);
                }
                if (!$v_0.get_status() && $$t_C.$14_0) {
                    var $v_4 = ($$t_C.$E_0[1]);
                    if ($v_4) {
                        $v_4.addToFront($v_0, false);
                    }
                    $v_4 = ($$t_C.$E_0[0]);
                    if ($v_4) {
                        $v_4.addToFront($v_0, false);
                    }
                    var $v_5 = $get(SP.UI.MicroFeed.SPMicroFeed.$1o + $p2.$3_0);
                    if ($v_1 && $v_1.parentNode) {
                        $v_1.parentNode.replaceChild($$t_C.$2i_0($v_0, false, true, false), $v_1);
                    }
                    SP.UI.MicroFeed.SPMicroFeed.$7f($v_5, SP.UI.MicroFeed.SPMicroFeed.$1o + $v_0.get_id());
                    ProcessImn();
                }
            }, function($p2_0, $p2_1) {
                $$t_C.$3d_0($p0, $p1, null, $p3, $p2, $v_1, $p2_1);
            });
        });
    },
    
    $3d_0: function SP_UI_MicroFeed_SPMicroFeed$$3d_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = false;
        var $v_1 = document.createElement('div');
        $v_1.id = 'ms-errorPostDiv';
        $v_1.className = SP.UI.MicroFeed.SPMicroFeed.$4M;
        $p4.$1_0 = 12;
        $p4.$9_0 = '';
        $v_1.appendChild(this.$x_0($p4));
        if ($p6) {
            if ($p6.get_errorCode() === 3) {
                var $v_2 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.knownErrorButNoUserFixTitle, SpsClient.ScriptResources.postToDeletedThreadErrorMessage);
                var $$t_M = this;
                $v_2.set_okButtonCallback(function() {
                    $p5.parentNode.removeChild($p5);
                });
                $v_2.set_hideCancelButton(true);
                $v_2.set_extraMessage($v_1);
                $v_2.set_errorMessage(String.format(SpsClient.ScriptResources.genericErrorMessage, $p6.get_message()));
                $v_2.show();
                $v_0 = true;
            }
            else if ($p6.get_errorCode() === 2) {
                var $$t_N = this;
                SP.UI.MicroFeed.SPMicroFeed.$2h(function() {
                    $p5.parentNode.removeChild($p5);
                });
                $v_0 = true;
            }
        }
        if (!$v_0) {
            var $v_3 = SpsClient.ScriptResources.unknownErrorTitle;
            var $v_4 = SpsClient.ScriptResources.retryErrorMessage;
            var $v_5 = '';
            var $v_6 = '';
            var $v_7 = SpsClient.ScriptResources.retryButtonText;
            var $$t_O = this;
            var $v_8 = function() {
                $p5.parentNode.removeChild($p5);
                $$t_O.$7Y_0($p0, $p1, $p2, $p3);
            };
            var $v_9 = SpsClient.ScriptResources.cancelButtonText;
            var $$t_P = this;
            var $v_A = function() {
                $p5.parentNode.removeChild($p5);
            };
            var $v_B = $v_1;
            if ($p6 && $p6.get_errorCode() === 14 && $p0.get_contentText().trim().length > 0) {
                $v_5 = SpsClient.ScriptResources.pictureUploadErrorMessage;
                $v_4 = SpsClient.ScriptResources.retryWithoutPictureErrorMessage;
                $v_7 = SpsClient.ScriptResources.retryWithoutPictureButtonText;
                $p0.set_attachment(null);
            }
            else if (!SP.ScriptHelpers.isNullOrEmptyString($p3) && SP.ScriptHelpers.isNullOrEmptyString($p2)) {
                $v_3 = SpsClient.ScriptResources.knownErrorButNoUserFixTitle;
                $v_5 = SpsClient.ScriptResources.postingToSiteFeedFailure;
                $v_4 = '';
                $v_7 = SpsClient.ScriptResources.okButtonText;
                var $$t_Q = this;
                $v_8 = function() {
                    $p5.parentNode.removeChild($p5);
                };
                $v_9 = null;
                $v_A = null;
                $v_B = null;
            }
            else if (!$p6) {
                $v_5 = SpsClient.ScriptResources.postErrorMessage;
            }
            else {
                $v_5 = SpsClient.ScriptResources.postErrorMessage;
                $v_6 = String.format(SpsClient.ScriptResources.genericErrorMessage, $p6.get_message());
            }
            var $v_C = document.createElement('div');
            if ($v_B) {
                $v_C.appendChild($v_B);
            }
            var $v_D = document.createElement('div');
            $v_D.setAttribute('style', 'margin-top:15px;');
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_D, $v_4);
            $v_C.appendChild($v_D);
            var $v_E = new SP.UI.MySiteCommon.MySiteDialog($v_3, $v_5);
            $v_E.set_okButtonText($v_7);
            $v_E.set_okButtonCallback($v_8);
            $v_E.set_cancelButtonText($v_9);
            $v_E.set_cancelButtonCallback($v_A);
            $v_E.set_extraMessage($v_C);
            $v_E.set_errorMessage($v_6);
            $v_E.show();
        }
        ProcessImn();
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
    },
    
    $36_0: function SP_UI_MicroFeed_SPMicroFeed$$36_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = false;
        if (!$p3 || $p3.getAttribute('updating') === 'true') {
            return;
        }
        $p3.setAttribute('updating', 'true');
        $v_0 = SP.UI.MicroFeed.SPMicroFeed.$5L($p0);
        var $v_1 = $p3.id.substr($p3.id.lastIndexOf('_') + 1);
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        var $$t_A = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getFullThread($p0);
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                if ($v_2.get_status()) {
                    $$t_A.$6q_0($p0, $p1, $p2, $p3, $p4, $v_1, '', 0);
                }
                else {
                    SP.UI.MicroFeed.MicrofeedThreadCache.addOrUpdate($v_2, false);
                    $$t_A.$3t_0($v_2, $p1, $p3, true, $p4, false);
                    if ($p2) {
                        SP.UI.MicroFeed.SPMicroFeed.$5v($v_1);
                    }
                }
                SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
                $p3.removeAttribute('updating');
                if ($v_0) {
                    SP.UI.MicroFeed.SPMicroFeed.$5M($p0);
                }
            }, function($p2_0, $p2_1) {
                $$t_A.$6q_0($p0, $p1, $p2, $p3, $p4, $v_1, $p2_1.get_message(), $p2_1.get_errorCode());
                $p3.removeAttribute('updating');
                if ($v_0) {
                    SP.UI.MicroFeed.SPMicroFeed.$5M($p0);
                }
            });
        });
    },
    
    $6q_0: function SP_UI_MicroFeed_SPMicroFeed$$6q_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = (!SP.ScriptHelpers.isNullOrEmptyString($p6)) ? String.format(SpsClient.ScriptResources.genericErrorMessage, $p6) : '';
        if ($p7 === 2) {
            var $v_2 = SpsClient.ScriptResources.siteFeedInsufficientPermissionsUnknownSiteErrorMessage;
            var $v_3 = SP.UI.MicroFeed.MicrofeedThreadCache.getThreadById($p4.$3_0);
            if ($v_3) {
                var $v_5 = SP.UI.MicroFeed.MicrofeedEntry.getTargetForRef($v_3);
                if ($v_5 && $v_5.get_uri() && SP.UI.MySiteCommon.CommonUIElements.isSafeURL($v_5.get_uri())) {
                    $v_2 = String.format(SpsClient.ScriptResources.siteFeedInsufficientPermissionsErrorMessage, SP.UI.MySiteCommon.CommonUIElements.createAnchorOpenHTMLTag('', '', $v_5.get_uri(), ''), '</a>');
                }
            }
            var $v_4 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, $v_2);
            $v_4.set_hideCancelButton(true);
            $v_4.set_errorMessage($v_0);
            $v_4.show();
        }
        else if ($p4 && $p4.$Z_0) {
            var $$t_E = this;
            SP.UI.MicroFeed.SPMicroFeed.$2g($p5, $p5, true, SpsClient.ScriptResources.getOrphanedThreadErrorMessage, $v_0, SpsClient.ScriptResources.deleteConfirmationDialogButtonText, '', function() {
                $$t_E.$3p_0($p5, $p4.$3_0, true);
            });
        }
        else {
            var $$t_F = this;
            SP.UI.MicroFeed.SPMicroFeed.$2g($p5, $p5, true, SpsClient.ScriptResources.getThreadErrorMessage, $v_0, SpsClient.ScriptResources.retryButtonText, '', function() {
                $$t_F.$36_0($p0, $p1, $p2, $p3, $p4);
            });
        }
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
        var $v_1 = $get(SP.UI.MicroFeed.SPMicroFeed.$2m + $p0);
        if ($v_1) {
            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1.parentNode, SpsClient.ScriptResources.viewFullThreadText);
        }
    },
    
    $6v_0: function SP_UI_MicroFeed_SPMicroFeed$$6v_0($p0, $p1, $p2) {
        var $v_0 = null;
        if ($p1.get_actorType() && !SP.UI.MicroFeed.SPMicroFeed.$1d($p1)) {
            return;
        }
        $v_0 = $get(SP.UI.MicroFeed.SPMicroFeed.$10 + $p0);
        $v_0.setAttribute('deleted', 'true');
        if (!SP.UI.MySiteCommon.CommonUIElements.isEntirelyHidden($v_0)) {
            SP.UI.MicroFeed.SPMicroFeed.$5u($v_0);
        }
        SP.UI.MicroFeed.SPMicroFeed.showProgressSpinner();
        var $$t_7 = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            if (SP.UI.MicroFeed.SPMicroFeed.$1d($p1)) {
                SP.UI.MicroFeed.SPMicroFeed.initializeCSOMData(false);
                var $v_1 = new SP.UserProfiles.FollowedContent(SP.UI.MicroFeed.SPMicroFeed.$L);
                $v_1.stopFollowing((($p1.get_contentUri()) ? $p1.get_contentUri() : $p1.get_uri()));
            }
            else if (!$p1.get_actorType()) {
                SP.UI.MicroFeed.SPMicroFeed.get_$5F().stopFollowing($p1.get_accountName());
            }
            SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                $$t_7.$6u_0($p1, $v_0);
            }, function($p2_0, $p2_1) {
                if ($p2_1.get_errorTypeName() === 'Microsoft.Office.Server.UserProfiles.PrivacyItemNotFoundException') {
                    $$t_7.$6u_0($p1, $v_0);
                }
                else {
                    $$t_7.$8y_0($p0, $p1, $v_0, $p2_1.get_message(), $p2);
                }
            });
        });
    },
    
    $6u_0: function SP_UI_MicroFeed_SPMicroFeed$$6u_0($p0, $p1) {
        $p1.parentNode.removeChild($p1);
        this.$E_0[1] = null;
        this.refreshTheFeed();
        if (!$p0.get_actorType()) {
            var $v_0 = SP.UI.People.FollowLinkManager.getLink($p0.get_accountName());
            if ($v_0) {
                $v_0.updateFromExternalSource(false, SP.UI.People.FollowLink.microfeedIdPrefixAndSource);
            }
        }
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
    },
    
    $8y_0: function SP_UI_MicroFeed_SPMicroFeed$$8y_0($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = '';
        if (!SP.ScriptHelpers.isNullOrEmptyString($p3)) {
            $v_0 = String.format(SpsClient.ScriptResources.genericErrorMessage, $p3);
        }
        var $v_1 = new SP.UI.MySiteCommon.MySiteDialog(SpsClient.ScriptResources.unknownErrorTitle, String.format(SpsClient.ScriptResources.hideErrorMessage, $p4));
        $v_1.set_okButtonText(SpsClient.ScriptResources.retryButtonText);
        var $$t_7 = this;
        $v_1.set_okButtonCallback(function() {
            $$t_7.$6v_0($p0, $p1, $p4);
        });
        var $$t_8 = this;
        $v_1.set_cancelButtonCallback(function() {
            SP.UI.MicroFeed.SPMicroFeed.$2d($p2);
        });
        $v_1.set_errorMessage($v_0);
        $v_1.show();
        SP.UI.MicroFeed.SPMicroFeed.hideProgressSpinner();
    }
}


SP.UI.MicroFeed.AllLikerDisplayManager = function SP_UI_MicroFeed_AllLikerDisplayManager() {
}
SP.UI.MicroFeed.AllLikerDisplayManager.socialActorCompare = function SP_UI_MicroFeed_AllLikerDisplayManager$socialActorCompare(A, B) {
    var $v_0 = A;
    var $v_1 = B;
    var $v_2 = SP.UI.MicroFeed.SPMicroFeed.get_$X();
    if ($v_2) {
        var $v_3 = $v_2.get_accountName().toLowerCase();
        if ($v_0.get_accountName().toLowerCase() === $v_3) {
            return -1;
        }
        else if ($v_1.get_accountName().toLowerCase() === $v_3) {
            return 1;
        }
    }
    return $v_0.get_name().toLowerCase().localeCompare($v_1.get_name().toLowerCase());
}
SP.UI.MicroFeed.AllLikerDisplayManager.createAllLikerCallout = function SP_UI_MicroFeed_AllLikerDisplayManager$createAllLikerCallout(post, launch) {
    if (!launch || !post) {
        return;
    }
    SP.UI.MySiteCommon.PresenceManager.ensurePresenceJSLoaded(function() {
        SP.SOD.executeFunc('callout.js', 'Callout', function() {
            var $v_0 = new CalloutOptions();
            var $v_1 = true;
            $v_0.launchPoint = launch;
            $v_0.ID = SP.UI.MicroFeed.AllLikerDisplayManager.$66 + launch.id;
            var $v_2 = $get('contentBox');
            $v_0.boundingBox = ((!$v_2) ? document.body : $v_2);
            var $v_3 = document.createElement('div');
            $v_3.id = SP.UI.MicroFeed.AllLikerDisplayManager.$65 + launch.id;
            $v_3.setAttribute('style', 'min-height: 50px');
            var $v_4 = SP.UI.MicroFeed.AllLikerDisplayManager.$67 + launch.id;
            $v_0.onOpenedCallback = function($p3_0) {
                var $v_6 = $get($v_4);
                if ($v_1) {
                    $v_1 = false;
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
                        var $v_7 = SP.UI.MicroFeed.SPMicroFeed.get_$D().getAllLikers(post.$3_0);
                        SP.UI.MicroFeed.SPMicroFeed.executeQueryIfNeeded(function() {
                            if ($v_7) {
                                $v_7.sort(SP.UI.MicroFeed.AllLikerDisplayManager.socialActorCompare);
                                post.$h_0 = $v_7;
                            }
                            var $v_8 = post.$h_0.length;
                            var $v_9 = String.format(SP.Utilities.LocUtility.getLocalizedCountValue(SpsClient.ScriptResources.seeAllLikerCalloutTitle, SpsClient.ScriptResources.seeAllLikerCalloutTitleIntervals, $v_8), $v_8);
                            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_6, $v_9);
                            SP.UI.MicroFeed.AllLikerDisplayManager.$5N[post.$3_0] = $v_9;
                            var $v_A = '<div>';
                            var $v_B = null;
                            for (var $v_C = 0; $v_C < post.$h_0.length; $v_C++) {
                                $v_B = post.$h_0[$v_C];
                                $v_A += '<div>' + SP.UI.MySiteCommon.PresenceManager.getUserImageInnerHTML($v_B.get_accountName(), $v_B.get_name(), $v_B.get_imageUri(), $v_B.get_uri(), $v_B.get_emailAddress(), $v_B.get_title(), false, false) + '</div>';
                            }
                            $v_3.className = SP.UI.MicroFeed.AllLikerDisplayManager.$7K;
                            $v_3.innerHTML = $v_A + '</div>';
                            ProcessImn();
                        }, function() {
                            SP.UI.MySiteCommon.CommonUIElements.setElementText($v_6, SpsClient.ScriptResources.unknownErrorTitle);
                            $v_3.innerHTML = STSHtmlEncode(SpsClient.ScriptResources.getLikerErrorMsg);
                            $v_1 = true;
                        });
                    });
                }
                else {
                    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_6, SP.UI.MicroFeed.AllLikerDisplayManager.$5N[post.$3_0] || '');
                    ProcessImn();
                }
            };
            $v_0.title = SP.UI.MySiteCommon.CommonUIElements.createOpenHTMLTag('div', $v_4, '') + SP.UI.MySiteCommon.CommonUIElements.createProcessingIconAsHTML('ms-progressAllLikerSpinner', 'ms-microfeed-processingImage') + '</div>';
            $v_0.beakOrientation = 'leftRight';
            $v_0.contentElement = $v_3;
            $v_0.contentWidth = 300;
            var $v_5 = CalloutManager.createNew($v_0);
        });
    });
}


SP.UI.MicroFeed.MicrofeedEntry = function SP_UI_MicroFeed_MicrofeedEntry() {
    this.$A_0 = null;
    this.$B_0 = null;
    this.$Z_0 = false;
    this.$i_0 = false;
    this.$1f_0 = false;
    this.$1M_0 = false;
    this.$j_0 = false;
    this.$13_0 = '';
    this.$3_0 = '';
    this.$k_0 = false;
    this.$2J_0 = false;
    this.$l_0 = false;
    this.$J_0 = false;
    this.$1g_0 = false;
    this.$F_0 = false;
    this.$15_0 = false;
    this.$16_0 = null;
    this.$h_0 = null;
    this.$I_0 = null;
    this.$m_0 = 0;
    this.$19_0 = 0;
    this.$n_0 = 0;
    this.$S_0 = [];
    this.$O_0 = '';
    this.$4_0 = '';
    this.$1B_0 = '';
    this.$1P_0 = null;
    this.$1m_0 = null;
    this.$o_0 = 0;
    this.$6_0 = null;
    this.$p_0 = true;
    this.$b_0 = '';
    this.$9_0 = '';
    this.$1_0 = 0;
}
SP.UI.MicroFeed.MicrofeedEntry.createEntryFromData = function SP_UI_MicroFeed_MicrofeedEntry$createEntryFromData(author, postType, text, id, isLiked, canDelete, canILike, attachment) {
    var $v_0 = new SP.UI.MicroFeed.MicrofeedEntry();
    $v_0.$A_0 = author;
    $v_0.$B_0 = null;
    $v_0.$o_0 = postType;
    $v_0.$b_0 = STSHtmlEncode(text);
    $v_0.$3_0 = id;
    $v_0.$4_0 = id;
    $v_0.$j_0 = false;
    $v_0.$19_0 = 0;
    $v_0.$Z_0 = canDelete;
    $v_0.$15_0 = isLiked;
    $v_0.$m_0 = 0;
    $v_0.$16_0 = null;
    $v_0.$h_0 = null;
    $v_0.$i_0 = canILike;
    $v_0.$1f_0 = false;
    $v_0.$k_0 = true;
    $v_0.$l_0 = false;
    $v_0.$1M_0 = false;
    $v_0.$13_0 = STSHtmlEncode(Strings.STS.L_RelativeDateTime_AFewSeconds);
    if (attachment) {
        $v_0.$I_0 = attachment;
    }
    SP.UI.MicroFeed.MicrofeedEntry.$7l($v_0);
    return $v_0;
}
SP.UI.MicroFeed.MicrofeedEntry.getTargetForRef = function SP_UI_MicroFeed_MicrofeedEntry$getTargetForRef(thread) {
    if (thread && thread.get_postReference() && thread.get_postReference().get_threadOwnerIndex() > 0 && thread.get_postReference().get_threadOwnerIndex() < thread.get_actors().length) {
        var $v_0 = thread.get_actors()[thread.get_postReference().get_threadOwnerIndex()];
        if ($v_0 && $v_0.get_actorType()) {
            return $v_0;
        }
    }
    return null;
}
SP.UI.MicroFeed.MicrofeedEntry.createRootPostFromThread = function SP_UI_MicroFeed_MicrofeedEntry$createRootPostFromThread(thread) {
    var $v_0 = new SP.UI.MicroFeed.MicrofeedEntry();
    if (thread) {
        if (!thread.get_threadType()) {
            $v_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_rootPost());
            $v_0.$J_0 = false;
        }
        else if (!thread.get_postReference()) {
            return null;
        }
        else if (thread.get_postReference().get_digest()) {
            $v_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread.get_postReference().get_digest(), thread.get_postReference().get_digest().get_rootPost());
            $v_0.$6_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_rootPost());
            $v_0.$J_0 = false;
            $v_0.$9_0 = thread.get_id();
        }
        else if (thread.get_postReference().get_post()) {
            $v_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_postReference().get_post());
            $v_0.$6_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_rootPost());
            var $v_1 = SP.UI.MicroFeed.MicrofeedEntry.getTargetForRef(thread);
            if ($v_1) {
                $v_0.$B_0 = $v_1;
            }
            if (thread.get_postReference().get_post().get_postType() === 1) {
                $v_0.$1g_0 = true;
                $v_0.$4_0 = thread.get_postReference().get_threadId();
            }
            else {
                $v_0.$F_0 = true;
            }
            $v_0.$J_0 = true;
        }
        else {
            $v_0 = SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost(thread, thread.get_rootPost());
            $v_0.$J_0 = true;
            $v_0.$4_0 = thread.get_postReference().get_threadId();
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.MicrofeedEntry.createMicrofeedEntryFromPost = function SP_UI_MicroFeed_MicrofeedEntry$createMicrofeedEntryFromPost(thread, post) {
    var $v_0 = new SP.UI.MicroFeed.MicrofeedEntry();
    if (post) {
        $v_0.$A_0 = thread.get_actors()[post.get_authorIndex()];
        var $v_1 = thread.get_actors()[thread.get_ownerIndex()];
        if ($v_1.get_actorType()) {
            $v_0.$B_0 = $v_1;
        }
        $v_0.$o_0 = post.get_postType();
        if (!post.get_postType()) {
            switch (thread.get_threadType()) {
                case 3:
                    $v_0.$1_0 = 10;
                    break;
                case 1:
                case 2:
                case 4:
                    $v_0.$1_0 = 9;
                    break;
                case 0:
                    $v_0.$1_0 = 1;
                    break;
            }
        }
        else {
            $v_0.$1_0 = 2;
        }
        $v_0.$3_0 = post.get_id();
        $v_0.$h_0 = null;
        $v_0.$4_0 = post.get_id();
        $v_0.$j_0 = !!(thread.get_attributes() & 2);
        $v_0.$19_0 = thread.get_totalReplyCount();
        $v_0.$Z_0 = !!(post.get_attributes() & 2);
        if (post.get_likerInfo()) {
            var $v_2 = post.get_likerInfo();
            $v_0.$15_0 = $v_2.get_includesCurrentUser();
            $v_0.$m_0 = $v_2.get_totalCount();
            $v_0.$16_0 = [];
            for (var $$arr_5 = $v_2.get_indexes(), $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
                var $v_3 = $$arr_5[$$idx_7];
                Array.add($v_0.$16_0, thread.get_actors()[$v_3]);
            }
        }
        $v_0.$i_0 = !!(post.get_attributes() & 1);
        if (!$v_0.$A_0.get_actorType()) {
            $v_0.$k_0 = SP.UI.People.PersonManager.getFollowState($v_0.$A_0.get_accountName());
        }
        else {
            $v_0.$k_0 = $v_0.$A_0.get_isFollowed();
        }
        $v_0.$1f_0 = !!(post.get_attributes() & 16);
        $v_0.$l_0 = !!(thread.get_attributes() & 8);
        $v_0.$1M_0 = !!(thread.get_attributes() & 4);
        if (!SP.ScriptHelpers.isNullOrEmptyString(post.get_preferredImageUri())) {
            $v_0.$p_0 = false;
            var $v_4 = '/_layouts/' + SP.OfficeVersion.majorVersion + '/images/';
            var $v_5 = post.get_preferredImageUri().toLowerCase().lastIndexOf($v_4);
            $v_0.$1B_0 = ($v_5 >= 0) ? GetThemedImageUrl(post.get_preferredImageUri().substr($v_5 + $v_4.length)) : post.get_preferredImageUri();
            if (!thread.get_threadType()) {
                $v_0.$13_0 = '';
            }
            else {
                $v_0.$13_0 = SP.UI.MicroFeed.MicrofeedEntry.$5f(post.get_createdTime());
            }
        }
        else {
            $v_0.$p_0 = true;
        }
        if ($v_0.$p_0 || $v_0.$i_0 || $v_0.$j_0) {
            $v_0.$13_0 = SP.UI.MicroFeed.MicrofeedEntry.$5f(post.get_createdTime());
        }
        $v_0.$I_0 = post.get_attachment();
        $v_0.$9_0 = thread.get_id();
        SP.UI.MicroFeed.MicrofeedEntry.$7l($v_0);
        $v_0.$b_0 = SP.UI.MicroFeed.MicrofeedEntry.$9G(thread, $v_0, post);
        $v_0.$O_0 = thread.get_permalink();
        if (post.get_source()) {
            $v_0.$1P_0 = post.get_source().get_text();
            $v_0.$1m_0 = post.get_source().get_uri();
        }
    }
    return $v_0;
}
SP.UI.MicroFeed.MicrofeedEntry.$7l = function SP_UI_MicroFeed_MicrofeedEntry$$7l($p0) {
    $p0.$n_0 = 0;
    if ($p0.$o_0 === 1) {
        $p0.$n_0 = 1;
    }
    else if (!SP.ScriptHelpers.isNullOrEmptyString($p0.$1B_0)) {
        $p0.$n_0 = 2;
    }
}
SP.UI.MicroFeed.MicrofeedEntry.$9G = function SP_UI_MicroFeed_MicrofeedEntry$$9G($p0, $p1, $p2) {
    if (!$p2 || SP.ScriptHelpers.isNullOrEmptyString($p2.get_text())) {
        return '';
    }
    var $v_0 = $p2.get_text();
    var $v_1 = '';
    var $v_2 = 0;
    var $v_3 = 0;
    var $v_4 = 0;
    var $v_5 = null;
    for ($v_4 = 0; $v_4 < $p2.get_overlays().length; $v_4++) {
        $v_5 = $p2.get_overlays()[$v_4];
        $v_3 = $v_5.get_index();
        $v_1 += STSHtmlEncode($v_0.substr($v_2, $v_3 - $v_2));
        var $v_6 = $v_0.substr($v_3, $v_5.get_length());
        $v_1 += SP.UI.MicroFeed.MicrofeedEntry.$8K($v_6, $v_5, $p0, $p1);
        $v_2 = $v_3 + $v_5.get_length();
    }
    $v_1 += STSHtmlEncode($v_0.substr($v_2));
    return $v_1;
}
SP.UI.MicroFeed.MicrofeedEntry.$8K = function SP_UI_MicroFeed_MicrofeedEntry$$8K($p0, $p1, $p2, $p3) {
    var $v_0 = '';
    switch ($p1.get_overlayType()) {
        case 1:
            var $v_1 = $p2.get_actors()[$p1.get_actorIndexes()[0]];
            $v_0 = SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('ms-actorElement', $v_1.get_name(), 'ms-bold ms-subtleLink', $v_1.get_uri(), '', true);
            Array.add($p3.$S_0, $v_1);
            break;
        case 0:
            $v_0 = SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('ms-externalLink', $p0, '', $p1.get_linkUri(), 'target=\"_blank\"', true);
            break;
        default:
            return $p0;
    }
    return $v_0;
}
SP.UI.MicroFeed.MicrofeedEntry.$5f = function SP_UI_MicroFeed_MicrofeedEntry$$5f($p0) {
    var $v_0 = false;
    var $v_1 = SP.Guid.newGuid().toString();
    var $v_2 = '<span id=\"' + $v_1 + '\" class=\"ms-hide\">' + $p0 + '</span>';
    SP.SOD.executeOrDelayUntilScriptLoaded(function() {
        var $v_3 = new Date();
        if ($p0 > $v_3) {
            $p0 = $v_3;
        }
        var $v_4 = new Date($v_3.getFullYear(), $v_3.getMonth(), $v_3.getDate());
        var $v_5 = new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate());
        var $v_6 = Math.round(($v_4 - $v_5) / 1000 / 60 / 60 / 24);
        if ($p0.getFullYear() === $v_4.getFullYear() || $v_6 <= 6) {
            $v_2 = SP.DateTimeUtil.SPRelativeDateTime.getRelativeDateTimeString($p0, true, 0, false);
        }
        else {
            var $v_7 = SP.DateTimeUtil.IntlDate.createFromJsLocalDate($p0, 0);
            $v_2 = $v_7.format('D', Sys.CultureInfo.CurrentCulture.name);
        }
        if ($v_0) {
            var $v_8 = $get($v_1);
            if ($v_8 && $v_8.parentNode) {
                $v_8.parentNode.replaceChild(document.createTextNode($v_2), $v_8);
            }
        }
    }, 'SP.DateTimeUtil.js');
    $v_0 = true;
    return $v_2;
}
SP.UI.MicroFeed.MicrofeedEntry.actorComparison = function SP_UI_MicroFeed_MicrofeedEntry$actorComparison(actor1, actor2) {
    if (!actor1) {
        return (!actor2) ? 0 : 1;
    }
    if (!actor2) {
        return -1;
    }
    var $v_0 = (actor1);
    var $v_1 = (actor2);
    if ($v_0.get_actorType() === $v_1.get_actorType()) {
        return $v_0.get_name().toLowerCase().localeCompare($v_1.get_name().toLowerCase());
    }
    if (!$v_0.get_actorType()) {
        return -1;
    }
    if (!$v_1.get_actorType()) {
        return 1;
    }
    if ($v_0.get_actorType() === 1) {
        return -1;
    }
    if ($v_1.get_actorType() === 1) {
        return 1;
    }
    if ($v_0.get_actorType() === 2) {
        return -1;
    }
    if ($v_1.get_actorType() === 2) {
        return 1;
    }
    return 0;
}
SP.UI.MicroFeed.MicrofeedEntry.prototype = {
    
    get_author: function SP_UI_MicroFeed_MicrofeedEntry$get_author() {
        return this.$A_0;
    },
    set_author: function SP_UI_MicroFeed_MicrofeedEntry$set_author(value) {
        this.$A_0 = value;
        return value;
    },
    
    get_target: function SP_UI_MicroFeed_MicrofeedEntry$get_target() {
        return this.$B_0;
    },
    set_target: function SP_UI_MicroFeed_MicrofeedEntry$set_target(value) {
        this.$B_0 = value;
        return value;
    },
    
    get_postType: function SP_UI_MicroFeed_MicrofeedEntry$get_postType() {
        return this.$o_0;
    },
    set_postType: function SP_UI_MicroFeed_MicrofeedEntry$set_postType(value) {
        this.$o_0 = value;
        return value;
    },
    
    get_text: function SP_UI_MicroFeed_MicrofeedEntry$get_text() {
        return this.$b_0;
    },
    set_text: function SP_UI_MicroFeed_MicrofeedEntry$set_text(value) {
        this.$b_0 = value;
        return value;
    },
    
    get_id: function SP_UI_MicroFeed_MicrofeedEntry$get_id() {
        return this.$3_0;
    },
    set_id: function SP_UI_MicroFeed_MicrofeedEntry$set_id(value) {
        this.$3_0 = value;
        return value;
    },
    
    get_canReply: function SP_UI_MicroFeed_MicrofeedEntry$get_canReply() {
        return this.$j_0;
    },
    set_canReply: function SP_UI_MicroFeed_MicrofeedEntry$set_canReply(value) {
        this.$j_0 = value;
        return value;
    },
    
    get_numReplies: function SP_UI_MicroFeed_MicrofeedEntry$get_numReplies() {
        return this.$19_0;
    },
    set_numReplies: function SP_UI_MicroFeed_MicrofeedEntry$set_numReplies(value) {
        this.$19_0 = value;
        return value;
    },
    
    get_canDelete: function SP_UI_MicroFeed_MicrofeedEntry$get_canDelete() {
        return this.$Z_0;
    },
    set_canDelete: function SP_UI_MicroFeed_MicrofeedEntry$set_canDelete(value) {
        this.$Z_0 = value;
        return value;
    },
    
    get_likedByMe: function SP_UI_MicroFeed_MicrofeedEntry$get_likedByMe() {
        return this.$15_0;
    },
    set_likedByMe: function SP_UI_MicroFeed_MicrofeedEntry$set_likedByMe(value) {
        this.$15_0 = value;
        return value;
    },
    
    get_numLikers: function SP_UI_MicroFeed_MicrofeedEntry$get_numLikers() {
        return this.$m_0;
    },
    set_numLikers: function SP_UI_MicroFeed_MicrofeedEntry$set_numLikers(value) {
        this.$m_0 = value;
        return value;
    },
    
    get_likers: function SP_UI_MicroFeed_MicrofeedEntry$get_likers() {
        return this.$16_0;
    },
    set_likers: function SP_UI_MicroFeed_MicrofeedEntry$set_likers(value) {
        this.$16_0 = value;
        return value;
    },
    
    get_allLikerList: function SP_UI_MicroFeed_MicrofeedEntry$get_allLikerList() {
        return this.$h_0;
    },
    set_allLikerList: function SP_UI_MicroFeed_MicrofeedEntry$set_allLikerList(value) {
        this.$h_0 = value;
        return value;
    },
    
    get_canLike: function SP_UI_MicroFeed_MicrofeedEntry$get_canLike() {
        return this.$i_0;
    },
    set_canLike: function SP_UI_MicroFeed_MicrofeedEntry$set_canLike(value) {
        this.$i_0 = value;
        return value;
    },
    
    get_canFollowUp: function SP_UI_MicroFeed_MicrofeedEntry$get_canFollowUp() {
        return this.$1f_0;
    },
    set_canFollowUp: function SP_UI_MicroFeed_MicrofeedEntry$set_canFollowUp(value) {
        this.$1f_0 = value;
        return value;
    },
    
    get_isFollowedByMe: function SP_UI_MicroFeed_MicrofeedEntry$get_isFollowedByMe() {
        return this.$k_0;
    },
    set_isFollowedByMe: function SP_UI_MicroFeed_MicrofeedEntry$set_isFollowedByMe(value) {
        this.$k_0 = value;
        return value;
    },
    
    get_isLocked: function SP_UI_MicroFeed_MicrofeedEntry$get_isLocked() {
        return this.$l_0;
    },
    set_isLocked: function SP_UI_MicroFeed_MicrofeedEntry$set_isLocked(value) {
        this.$l_0 = value;
        return value;
    },
    
    get_canLock: function SP_UI_MicroFeed_MicrofeedEntry$get_canLock() {
        return this.$1M_0;
    },
    set_canLock: function SP_UI_MicroFeed_MicrofeedEntry$set_canLock(value) {
        this.$1M_0 = value;
        return value;
    },
    
    get_isActivityPost: function SP_UI_MicroFeed_MicrofeedEntry$get_isActivityPost() {
        return (!this.$J_0 && !this.$i_0 && !this.$j_0 && !this.$1M_0 && !this.$l_0 && (this.$1_0 === 6 || this.$1_0 === 1));
    },
    
    get_renderPostAuthorImage: function SP_UI_MicroFeed_MicrofeedEntry$get_renderPostAuthorImage() {
        return this.$p_0;
    },
    set_renderPostAuthorImage: function SP_UI_MicroFeed_MicrofeedEntry$set_renderPostAuthorImage(value) {
        this.$p_0 = value;
        return value;
    },
    
    get_postImagePath: function SP_UI_MicroFeed_MicrofeedEntry$get_postImagePath() {
        return this.$1B_0;
    },
    set_postImagePath: function SP_UI_MicroFeed_MicrofeedEntry$set_postImagePath(value) {
        this.$1B_0 = value;
        return value;
    },
    
    get_postSource: function SP_UI_MicroFeed_MicrofeedEntry$get_postSource() {
        return this.$1P_0;
    },
    set_postSource: function SP_UI_MicroFeed_MicrofeedEntry$set_postSource(value) {
        this.$1P_0 = value;
        return value;
    },
    
    get_postSourceUri: function SP_UI_MicroFeed_MicrofeedEntry$get_postSourceUri() {
        return this.$1m_0;
    },
    set_postSourceUri: function SP_UI_MicroFeed_MicrofeedEntry$set_postSourceUri(value) {
        this.$1m_0 = value;
        return value;
    },
    
    get_footer: function SP_UI_MicroFeed_MicrofeedEntry$get_footer() {
        return this.$13_0;
    },
    set_footer: function SP_UI_MicroFeed_MicrofeedEntry$set_footer(value) {
        this.$13_0 = value;
        return value;
    },
    
    get_attachment: function SP_UI_MicroFeed_MicrofeedEntry$get_attachment() {
        return this.$I_0;
    },
    set_attachment: function SP_UI_MicroFeed_MicrofeedEntry$set_attachment(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_pictureSize: function SP_UI_MicroFeed_MicrofeedEntry$get_pictureSize() {
        return this.$n_0;
    },
    set_pictureSize: function SP_UI_MicroFeed_MicrofeedEntry$set_pictureSize(value) {
        this.$n_0 = value;
        return value;
    },
    
    get_actors: function SP_UI_MicroFeed_MicrofeedEntry$get_actors() {
        return this.$S_0;
    },
    set_actors: function SP_UI_MicroFeed_MicrofeedEntry$set_actors(value) {
        this.$S_0 = value;
        return value;
    },
    
    get_permalink: function SP_UI_MicroFeed_MicrofeedEntry$get_permalink() {
        return this.$O_0;
    },
    set_permalink: function SP_UI_MicroFeed_MicrofeedEntry$set_permalink(value) {
        this.$O_0 = value;
        return value;
    },
    
    $A_0: null,
    $B_0: null,
    $o_0: 0,
    $b_0: null,
    $3_0: null,
    $j_0: false,
    $19_0: 0,
    $Z_0: false,
    $15_0: false,
    $m_0: 0,
    $16_0: null,
    $h_0: null,
    $i_0: false,
    $1f_0: false,
    $k_0: false,
    $l_0: false,
    $1M_0: false,
    $p_0: false,
    $1B_0: null,
    $1P_0: null,
    $1m_0: null,
    $13_0: null,
    $I_0: null,
    $n_0: 0,
    $S_0: null,
    $O_0: null,
    $2J_0: false,
    
    get_isHidden: function SP_UI_MicroFeed_MicrofeedEntry$get_isHidden() {
        return this.$2J_0;
    },
    set_isHidden: function SP_UI_MicroFeed_MicrofeedEntry$set_isHidden(value) {
        this.$2J_0 = value;
        return value;
    },
    
    $1_0: 0,
    
    get_drawPostType: function SP_UI_MicroFeed_MicrofeedEntry$get_drawPostType() {
        return this.$1_0;
    },
    set_drawPostType: function SP_UI_MicroFeed_MicrofeedEntry$set_drawPostType(value) {
        this.$1_0 = value;
        return value;
    },
    
    $6_0: null,
    
    get_refRootPost: function SP_UI_MicroFeed_MicrofeedEntry$get_refRootPost() {
        return this.$6_0;
    },
    set_refRootPost: function SP_UI_MicroFeed_MicrofeedEntry$set_refRootPost(value) {
        this.$6_0 = value;
        return value;
    },
    
    $9_0: null,
    
    get_threadDivID: function SP_UI_MicroFeed_MicrofeedEntry$get_threadDivID() {
        return this.$9_0;
    },
    set_threadDivID: function SP_UI_MicroFeed_MicrofeedEntry$set_threadDivID(value) {
        this.$9_0 = value;
        return value;
    },
    
    $4_0: null,
    
    get_postIDForDrawPost: function SP_UI_MicroFeed_MicrofeedEntry$get_postIDForDrawPost() {
        return this.$4_0;
    },
    set_postIDForDrawPost: function SP_UI_MicroFeed_MicrofeedEntry$set_postIDForDrawPost(value) {
        this.$4_0 = value;
        return value;
    },
    
    $J_0: false,
    
    get_isOrphan: function SP_UI_MicroFeed_MicrofeedEntry$get_isOrphan() {
        return this.$J_0;
    },
    set_isOrphan: function SP_UI_MicroFeed_MicrofeedEntry$set_isOrphan(value) {
        this.$J_0 = value;
        return value;
    },
    
    $1g_0: false,
    
    get_drawAsIndentedOrphan: function SP_UI_MicroFeed_MicrofeedEntry$get_drawAsIndentedOrphan() {
        return this.$1g_0;
    },
    set_drawAsIndentedOrphan: function SP_UI_MicroFeed_MicrofeedEntry$set_drawAsIndentedOrphan(value) {
        this.$1g_0 = value;
        return value;
    },
    
    $F_0: false,
    
    get_isRoot: function SP_UI_MicroFeed_MicrofeedEntry$get_isRoot() {
        return this.$F_0;
    },
    set_isRoot: function SP_UI_MicroFeed_MicrofeedEntry$set_isRoot(value) {
        this.$F_0 = value;
        return value;
    }
}


SP.UI.MicroFeed.MicrofeedMenu = function SP_UI_MicroFeed_MicrofeedMenu(ID, elementType, imageName, imageAltText, showText, controlStyle, imageStyle, headerStyle, imageParentStyle) {
    SP.UI.MicroFeed.MicrofeedMenu.initializeBase(this, [ ID ]);
    if (!SP.ScriptHelpers.isNullOrEmptyString(imageName)) {
        this.set_imageSourceOverride(GetThemedImageUrl(imageName));
        this.set_imageTitleText(imageAltText);
        if (!SP.ScriptHelpers.isNullOrEmptyString(imageParentStyle)) {
            this.set_imageParentClassOverride(imageParentStyle);
        }
    }
    if (!showText) {
        this.set_textOverride(SP.UI.MySiteCommon.MySiteMenu.emptyStringPromptConst);
    }
    this.$1N_1 = elementType;
    this.$4m_1 = controlStyle;
    this.$4p_1 = imageStyle;
    this.$4n_1 = headerStyle;
    this.set_hideIcons(true);
}
SP.UI.MicroFeed.MicrofeedMenu.prototype = {
    $1N_1: '',
    $4m_1: '',
    $4p_1: '',
    $4n_1: '',
    
    setStyles: function SP_UI_MicroFeed_MicrofeedMenu$setStyles() {
        this.set_menuStyle('ms-textLarge ms-headerFont');
        this.set_controlImageStyle('ms-microfeed-mysitemenu-image');
        this.set_controlStyle('');
        this.set_controlElementType('');
        this.set_controlHeaderStyle('');
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$4m_1)) {
            this.set_controlStyle(this.$4m_1);
        }
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$1N_1)) {
            this.set_controlElementType(this.$1N_1);
        }
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$4p_1)) {
            this.set_controlImageStyle(this.$4p_1);
        }
        if (!SP.ScriptHelpers.isNullOrEmptyString(this.$4n_1)) {
            this.set_controlHeaderStyle(this.$4n_1);
        }
    },
    
    setOpenedCallback: function SP_UI_MicroFeed_MicrofeedMenu$setOpenedCallback(callback) {
        this.set_openedCallback(callback);
    },
    
    addRootPostDropDownItem: function SP_UI_MicroFeed_MicrofeedMenu$addRootPostDropDownItem(ItemName, callbackFunction) {
        var $$t_3 = this;
        this.add(ItemName, null, null, null, function($p1_0) {
            callbackFunction();
        });
    },
    
    addSeparator: function SP_UI_MicroFeed_MicrofeedMenu$addSeparator() {
        var $v_0 = new SP.UI.MySiteCommon.SeparatorMenuItem();
        this.appendMenuItem($v_0);
    }
}


SP.UI.MicroFeed.MicroFeedDoc = function SP_UI_MicroFeed_MicroFeedDoc() {
}
SP.UI.MicroFeed.MicroFeedDoc.$5h = function SP_UI_MicroFeed_MicroFeedDoc$$5h($p0, $p1) {
    return SP.UI.MicroFeed.MicroFeedDoc.$5i($p0, SP.UI.MicroFeed.SPMicroFeed.$3M + $p1, true);
}
SP.UI.MicroFeed.MicroFeedDoc.$5j = function SP_UI_MicroFeed_MicroFeedDoc$$5j($p0, $p1) {
    return SP.UI.MicroFeed.MicroFeedDoc.$5i($p0, (!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$2N : SP.UI.MicroFeed.SPMicroFeed.$2C + $p1, false);
}
SP.UI.MicroFeed.MicroFeedDoc.$5i = function SP_UI_MicroFeed_MicroFeedDoc$$5i($p0, $p1, $p2) {
    var $v_0 = document.createElement('div');
    var $v_1;
    $v_0.id = $p1;
    if ($p2) {
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$3L;
    }
    $v_1 = SP.UI.MicroFeed.MicroFeedDoc.$8m($p0, $p1, $p2);
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedDoc.$8m = function SP_UI_MicroFeed_MicroFeedDoc$$8m($p0, $p1, $p2) {
    var $v_0;
    var $v_1;
    var $v_2;
    $v_0 = document.createElement('div');
    $v_0.className = 'ms-microfeed-attachment';
    $v_1 = document.createElement('div');
    $v_1.innerHTML = '<span class=\"ms-microfeed-attachment-title\">' + SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('', $p0.get_name(), 'ms-textSmall ms-subtleLink', $p0.get_uri(), 'target=\"_blank\"', true) + '</span><span class=\"ms-microfeed-attachment-url ms-metadata\">' + STSHtmlEncode($p0.get_contentUri()) + '</span>';
    var $v_3;
    if ($p2) {
        var $v_4 = document.createElement('span');
        $v_3 = document.createElement('a');
        $v_4.className = 'ms-microfeed-attachment-action';
        $v_3.className = 'ms-secondaryCommandLink';
        $v_3.style.textDecoration = 'none';
        SP.UI.MySiteCommon.CommonUIElements.setElementText($v_3, SpsClient.ScriptResources.docPreview);
        $v_4.appendChild($v_3);
        $v_1.appendChild($v_4);
    }
    else {
        $v_3 = null;
    }
    $v_2 = SP.UI.MicroFeed.MicroFeedDoc.$6p($p0, $p1, $v_3, $p2);
    $v_0.appendChild($v_2);
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedDoc.$6p = function SP_UI_MicroFeed_MicroFeedDoc$$6p($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('div');
    var $v_1 = 'alt=\"' + $p0.get_name() + '\"' + ' style=\"' + 'vertical-align:top; margin-bottom:10px;' + '\"';
    var $v_2 = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.MicroFeedDoc.$7C + $p1, '', $p0.get_previewUri(), $v_1);
    $v_0.id = 'ms-microfeed-previewAreaDiv_' + $p1;
    $v_0.className = 'ms-microfeed-previewArea';
    if ($p3 && null !== $p0.get_clickAction()) {
        var $v_3 = null;
        switch ($p0.get_clickAction().get_actionKind()) {
            case 1:
                $p2.href = '#';
                $p2.setAttribute('onclick', 'return false;');
                $v_3 = function($p1_0) {
                    var $v_5 = document.createElement('iframe');
                    $v_5.id = 'ms-microfeed-attachment-inlineDocIframe_' + $p1;
                    $v_5.src = $p0.get_clickAction().get_actionUri();
                    $v_5.className = 'ms-microfeed-attachment-inlineDoc';
                    $v_0.parentNode.appendChild($v_5);
                    $v_0.parentNode.removeChild($v_0);
                    $p2.parentNode.removeChild($p2);
                };
                $addHandler($p2, 'click', $v_3);
                break;
            case 0:
                $p2.href = $p0.get_clickAction().get_actionUri();
                $p2.target = '_blank';
                break;
        }
        var $v_4 = 'target=\"_blank\" style=\"vertical-align:top;\"';
        $v_0.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('ms-microfeed-attachmentDocLink_' + $p1, $v_2, '', $p0.get_uri(), $v_4, false);
    }
    else {
        $v_0.innerHTML = $v_2;
    }
    return $v_0;
}


SP.UI.MicroFeed.MicroFeedVideo = function SP_UI_MicroFeed_MicroFeedVideo() {
}
SP.UI.MicroFeed.MicroFeedVideo.$5l = function SP_UI_MicroFeed_MicroFeedVideo$$5l($p0, $p1) {
    return SP.UI.MicroFeed.MicroFeedVideo.$5m($p0, SP.UI.MicroFeed.SPMicroFeed.$3M + $p1, true);
}
SP.UI.MicroFeed.MicroFeedVideo.$5n = function SP_UI_MicroFeed_MicroFeedVideo$$5n($p0, $p1) {
    return SP.UI.MicroFeed.MicroFeedVideo.$5m($p0, (!$p1) ? SP.UI.MicroFeed.SPMicroFeed.$2N : SP.UI.MicroFeed.SPMicroFeed.$2C + $p1, false);
}
SP.UI.MicroFeed.MicroFeedVideo.$5m = function SP_UI_MicroFeed_MicroFeedVideo$$5m($p0, $p1, $p2) {
    var $v_0 = document.createElement('div');
    var $v_1;
    $v_0.id = $p1;
    if ($p2) {
        $v_0.className = SP.UI.MicroFeed.SPMicroFeed.$3L;
    }
    $v_1 = SP.UI.MicroFeed.MicroFeedVideo.$8v($p0, $p1, $p2);
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedVideo.$8v = function SP_UI_MicroFeed_MicroFeedVideo$$8v($p0, $p1, $p2) {
    var $v_0;
    var $v_1;
    var $v_2;
    $v_0 = document.createElement('div');
    $v_0.className = 'ms-microfeed-attachment';
    $v_1 = document.createElement('div');
    var $v_3 = document.createElement('span');
    $v_3.className = 'ms-microfeed-attachment-title';
    $v_3.innerHTML = SP.UI.MySiteCommon.CommonUIElements.createSafeAnchorHTML('videoTitle_' + $p1, $p0.get_name(), 'ms-textSmall ms-subtleLink', $p0.get_uri(), 'target=\"_blank\"', true);
    $v_1.appendChild($v_3);
    var $v_4 = $p0.get_uri().split('/');
    var $v_5 = '';
    if ($v_4.length >= 3) {
        $v_5 = String.format('{0}//{1}', $v_4[0], $v_4[2]);
    }
    else {
        $v_5 = $p0.get_uri();
    }
    var $v_6 = document.createElement('span');
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_6, $v_5);
    $v_6.className = 'ms-metadata';
    $v_1.appendChild($v_6);
    var $v_7 = document.createElement('span');
    $v_7.className = 'ms-metadata ms-microfeed-attachment-description';
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_7, (null !== $p0.get_description()) ? $p0.get_description() : '');
    $v_1.appendChild($v_7);
    $v_2 = SP.UI.MicroFeed.MicroFeedVideo.$6p($p0, $p1, $p2, $v_7);
    $v_0.appendChild($v_2);
    $v_0.appendChild($v_1);
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedVideo.$6p = function SP_UI_MicroFeed_MicroFeedVideo$$6p($p0, $p1, $p2, $p3) {
    var $v_0 = document.createElement('div');
    var $v_1 = 'alt=\"' + $p0.get_name() + '\"';
    var $v_2 = 120;
    var $v_3 = 0;
    if ($p0.get_width() && $p0.get_height()) {
        var $v_7 = $p0.get_height() / $p0.get_width();
        $v_3 = (120 * $v_7);
    }
    else {
        $v_3 = 67;
    }
    $v_1 += ' width=\"' + $v_2 + '\"' + ' height=\"' + $v_3 + '\"';
    var $v_4 = ($v_3 - 67) / 2;
    var $v_5 = String.format('{0}px', $v_4);
    $v_1 += ' style=\"bottom:' + $v_5 + '\"';
    var $v_6 = SP.UI.MySiteCommon.CommonUIElements.createSafeImageHTML(SP.UI.MicroFeed.MicroFeedVideo.$7D + $p1, 'ms-microfeed-videoThumbnail', $p0.get_previewUri(), $v_1);
    $v_0.className = 'ms-microfeed-previewArea ms-microfeed-videoPreviewArea';
    if ($p2 && null !== $p0.get_clickAction()) {
        var $v_8 = null;
        var $v_9 = document.createElement('a');
        $v_9.id = 'ms-microfeed-attachmentVideoLink_' + $p1;
        $v_9.style.verticalAlign = 'top';
        switch ($p0.get_clickAction().get_actionKind()) {
            case 1:
                $v_9.href = 'javascript:return false;';
                $v_8 = function($p1_0) {
                    var $v_A;
                    $v_A = document.createElement('iframe');
                    $v_A.src = $p0.get_clickAction().get_actionUri();
                    var $v_B = $v_0.parentNode;
                    $v_B.appendChild($v_A);
                    $v_A.className = 'ms-microfeed-embeddedVideo';
                    $v_A.style.width = $v_B.clientWidth.toString() + 'px';
                    $v_A.style.height = (9 * $v_B.clientWidth / 16).toString() + 'px';
                    $v_B.removeChild($v_0);
                    $p3.parentNode.removeChild($p3);
                };
                $addHandler($v_9, 'click', $v_8);
                break;
            case 0:
                $v_9.href = SP.UI.MySiteCommon.CommonUIElements.encodeSafeURL($p0.get_clickAction().get_actionUri());
                $v_9.target = '_blank';
                break;
        }
        $v_9.innerHTML = $v_6;
        $v_0.appendChild($v_9);
        SP.UI.MicroFeed.MicroFeedVideo.$83($v_0, $v_8);
    }
    else {
        $v_0.innerHTML = $v_6;
    }
    SP.UI.MicroFeed.MicroFeedVideo.$89($v_0, $p0.get_length());
    return $v_0;
}
SP.UI.MicroFeed.MicroFeedVideo.$83 = function SP_UI_MicroFeed_MicroFeedVideo$$83($p0, $p1) {
    var $v_0 = document.createElement('div');
    $v_0.className = 'ms-microfeed-videoPlay';
    var $v_1 = document.createElement('a');
    $v_1.href = 'javascript:return false;';
    $v_1.title = SpsClient.ScriptResources.videoPlayButtonTitle;
    var $v_2 = document.createElement('span');
    $v_1.appendChild($v_2);
    $v_0.appendChild($v_1);
    if ($p1) {
        $addHandler($v_0, 'click', $p1);
    }
    $p0.appendChild($v_0);
}
SP.UI.MicroFeed.MicroFeedVideo.$8u = function SP_UI_MicroFeed_MicroFeedVideo$$8u($p0) {
    var $v_0, $v_1, $v_2, $v_3, $v_4;
    var $v_5;
    var $v_6 = new Sys.StringBuilder();
    $v_0 = 3600;
    $v_1 = 60;
    $v_2 = ($p0 / $v_0) | 0;
    $v_3 = (($p0 % $v_0) / $v_1) | 0;
    $v_4 = ($p0 % $v_1) | 0;
    if ($v_5 = ($v_2 > 0)) {
        $v_6.append($v_2.toString());
        $v_6.append(':');
    }
    if ($v_5 && $v_3 < 10) {
        $v_6.append('0');
    }
    $v_6.append($v_3.toString());
    $v_6.append(':');
    if ($v_4 < 10) {
        $v_6.append('0');
    }
    $v_6.append($v_4.toString());
    return $v_6.toString();
}
SP.UI.MicroFeed.MicroFeedVideo.$89 = function SP_UI_MicroFeed_MicroFeedVideo$$89($p0, $p1) {
    var $v_0 = document.createElement('div');
    $v_0.className = 'ms-microfeed-videoTime';
    var $v_1 = document.createElement('span');
    SP.UI.MySiteCommon.CommonUIElements.setElementText($v_1, SP.UI.MicroFeed.MicroFeedVideo.$8u($p1));
    $v_0.appendChild($v_1);
    $p0.appendChild($v_0);
}


SP.UI.MicroFeed.SuggestionQueryManager = function SP_UI_MicroFeed_SuggestionQueryManager() {
    this.$2U_0 = {};
    this.$1G_0 = {};
    this.$3c_0 = {};
}
SP.UI.MicroFeed.SuggestionQueryManager.prototype = {
    $2U_0: null,
    $1G_0: null,
    
    get_possibleSuggestions: function SP_UI_MicroFeed_SuggestionQueryManager$get_possibleSuggestions() {
        return this.$1G_0;
    },
    
    lastKnownEmptySuggestion: '',
    m_loadingAnimationIDForRequest: '',
    
    get_loadingAnimationIDForRequest: function SP_UI_MicroFeed_SuggestionQueryManager$get_loadingAnimationIDForRequest() {
        return this.m_loadingAnimationIDForRequest;
    },
    
    m_maxSuggestionsToDisplay: 0,
    $3c_0: null,
    
    get_uniqueIDs: function SP_UI_MicroFeed_SuggestionQueryManager$get_uniqueIDs() {
        return this.$3c_0;
    },
    
    $1n_0: false,
    
    get_processingRequest: function SP_UI_MicroFeed_SuggestionQueryManager$get_processingRequest() {
        return this.$1n_0;
    },
    set_processingRequest: function SP_UI_MicroFeed_SuggestionQueryManager$set_processingRequest($p0) {
        this.$1n_0 = $p0;
        return $p0;
    },
    
    $2T_0: null,
    
    get_lastRequest: function SP_UI_MicroFeed_SuggestionQueryManager$get_lastRequest() {
        return this.$2T_0;
    },
    set_lastRequest: function SP_UI_MicroFeed_SuggestionQueryManager$set_lastRequest($p0) {
        this.$2T_0 = $p0;
        return $p0;
    },
    
    $99_0: function SP_UI_MicroFeed_SuggestionQueryManager$$99_0($p0, $p1) {
        this.getPossibleSuggestions($p0, $p1);
    },
    
    $88_0: function SP_UI_MicroFeed_SuggestionQueryManager$$88_0($p0) {
        if (!this.suggestionsContains($p0)) {
            var $v_0 = $p0.$a_0.substr(0, 1).toLowerCase();
            var $v_1 = (($v_0) in this.$1G_0) ? this.$1G_0[$v_0] : [];
            this.$1G_0[$v_0] = $p0.insertIntoSortedArray($v_1);
            this.$3c_0[$p0.$3_0] = true;
        }
    },
    
    $8s_0: function SP_UI_MicroFeed_SuggestionQueryManager$$8s_0($p0) {
        var $v_0 = null;
        var $v_1 = $p0.toLowerCase();
        if (!(($v_1) in this.$1G_0)) {
            this.$1G_0[$v_1] = [];
        }
        $v_0 = this.$1G_0[$v_1];
        return $v_0;
    },
    
    suggestionsContains: function SP_UI_MicroFeed_SuggestionQueryManager$suggestionsContains($p0) {
        return this.suggestionsContainsByID($p0.$3_0);
    },
    
    suggestionsContainsByID: function SP_UI_MicroFeed_SuggestionQueryManager$suggestionsContainsByID($p0) {
        return (($p0) in this.$3c_0);
    },
    
    isThisPrefixInQueriedForPrefixDictionary: function SP_UI_MicroFeed_SuggestionQueryManager$isThisPrefixInQueriedForPrefixDictionary($p0) {
        return (($p0.toLowerCase()) in this.$2U_0);
    },
    
    isThisPrefixAlreadyCoveredInTheCollection: function SP_UI_MicroFeed_SuggestionQueryManager$isThisPrefixAlreadyCoveredInTheCollection($p0, $p1) {
        if (this.isThisPrefixInQueriedForPrefixDictionary($p0)) {
            return true;
        }
        var $v_0 = null;
        for (var $v_1 = $p0.length - 1; $v_1 > 0; $v_1--) {
            $v_0 = this.getValueForQueriedPrefix($p0.substr(0, $v_1));
            if (SP.ScriptHelpers.isNullOrEmptyString($v_0)) {
                continue;
            }
            if ($v_0 === 'empty') {
                this.setValueForQueriedPrefix($p0, 0);
                return true;
            }
            if ($v_0 === 'processing') {
                return true;
            }
            if (Number.parseInvariant($v_0) >= this.m_maxSuggestionsToDisplay) {
                return false;
            }
            if ($p1) {
                return true;
            }
        }
        return false;
    },
    
    prepareForRequestIfReady: function SP_UI_MicroFeed_SuggestionQueryManager$prepareForRequestIfReady($p0) {
        if (this.$1n_0) {
            return false;
        }
        if (this.$2T_0) {
            var $v_0 = new Date();
            var $v_1 = $v_0 - this.$2T_0;
            if ($v_1 < 500) {
                return false;
            }
        }
        this.$1n_0 = true;
        this.$2T_0 = new Date();
        this.markPrefixProcessing($p0);
        return true;
    },
    
    handleCompletedRequest: function SP_UI_MicroFeed_SuggestionQueryManager$handleCompletedRequest($p0, $p1, $p2, $p3) {
        this.$1n_0 = false;
        if ($p2) {
            this.setValueForQueriedPrefix($p0, $p1);
        }
        else {
            this.clearPrefixProcessingOnError($p0);
        }
        var $v_0 = $get(this.m_loadingAnimationIDForRequest);
        if ($v_0 && $v_0.parentNode) {
            $v_0.parentNode.removeChild($v_0);
        }
        if ($p3) {
            $p3();
        }
    },
    
    getValueForQueriedPrefix: function SP_UI_MicroFeed_SuggestionQueryManager$getValueForQueriedPrefix($p0) {
        if (this.isThisPrefixInQueriedForPrefixDictionary($p0)) {
            return this.$2U_0[$p0.toLowerCase()];
        }
        return '';
    },
    
    setValueForQueriedPrefix: function SP_UI_MicroFeed_SuggestionQueryManager$setValueForQueriedPrefix($p0, $p1) {
        if (!$p1) {
            this.$5I_0($p0, 'empty');
        }
        else {
            this.$5I_0($p0, $p1.toString());
        }
    },
    
    markPrefixProcessing: function SP_UI_MicroFeed_SuggestionQueryManager$markPrefixProcessing($p0) {
        this.$5I_0($p0, 'processing');
    },
    
    clearPrefixProcessingOnError: function SP_UI_MicroFeed_SuggestionQueryManager$clearPrefixProcessingOnError($p0) {
        if (this.getValueForQueriedPrefix($p0) === 'processing') {
            delete this.$2U_0[$p0.toLowerCase()];
        }
    },
    
    $5I_0: function SP_UI_MicroFeed_SuggestionQueryManager$$5I_0($p0, $p1) {
        this.$2U_0[$p0.toLowerCase()] = $p1;
    }
}


SP.UI.MicroFeed.AllUsersSuggestionManager = function SP_UI_MicroFeed_AllUsersSuggestionManager($p0) {
    SP.UI.MicroFeed.AllUsersSuggestionManager.initializeBase(this);
    this.m_maxSuggestionsToDisplay = $p0;
    this.m_loadingAnimationIDForRequest = 'ms-microfeed-LoadingCompanyUsersImage';
}
SP.UI.MicroFeed.AllUsersSuggestionManager.prototype = {
    
    getPossibleSuggestions: function SP_UI_MicroFeed_AllUsersSuggestionManager$getPossibleSuggestions($p0, $p1) {
        var $v_0 = $p0.toLowerCase();
        if ($p0.length < 2) {
            return;
        }
        if (!this.isThisPrefixAlreadyCoveredInTheCollection($v_0, false)) {
            this.$9F_1($v_0, $p1);
        }
    },
    
    $9L_1: function SP_UI_MicroFeed_AllUsersSuggestionManager$$9L_1($p0) {
        var $v_0 = $p0.toLowerCase();
        if (this.lastKnownEmptySuggestion === '' || !$v_0.startsWith(this.lastKnownEmptySuggestion)) {
            this.lastKnownEmptySuggestion = $v_0;
        }
    },
    
    $92_1: function SP_UI_MicroFeed_AllUsersSuggestionManager$$92_1($p0) {
        if (SP.ScriptHelpers.isNullOrEmptyString(this.lastKnownEmptySuggestion)) {
            return false;
        }
        return $p0.toLowerCase().startsWith(this.lastKnownEmptySuggestion);
    },
    
    $9F_1: function SP_UI_MicroFeed_AllUsersSuggestionManager$$9F_1($p0, $p1) {
        if (!this.prepareForRequestIfReady($p0)) {
            return;
        }
        var $$t_C = this;
        SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function() {
            var $v_0 = SP.ClientContext.get_current();
            var $v_1 = new SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters();
            $v_1.set_allowMultipleEntities(false);
            $v_1.set_maximumEntitySuggestions(50);
            $v_1.set_principalType(1);
            $v_1.set_principalSource(15);
            $v_1.set_queryString($p0);
            var $v_2 = SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser($v_0, $v_1);
            $v_0.executeQueryAsync(function() {
                var $v_3 = $v_0.parseObjectFromJsonString($v_2.get_value());
                var $v_4 = 0;
                var $v_5 = '';
                var $v_6 = '';
                var $v_7 = '';
                var $v_8 = null;
                if ($v_3) {
                    if (!$v_3.length) {
                        $$t_C.$9L_1($p0);
                    }
                    for ($v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                        $v_8 = $v_3[$v_4];
                        $v_5 = $v_8['Key'];
                        $v_6 = $v_8['DisplayText'];
                        $v_7 = '';
                        if ($v_8['EntityData']) {
                            $v_7 = ($v_8['EntityData'])['Title'];
                        }
                        var $v_9 = new SP.UI.MicroFeed.TextBoxElement($v_6, $v_5, 0);
                        $v_9.$2H_0 = $v_7;
                        $$t_C.$88_0($v_9);
                    }
                }
                $$t_C.handleCompletedRequest($p0, (!$v_3) ? 0 : $v_3.length, true, $p1);
            }, function() {
                $$t_C.handleCompletedRequest($p0, 0, false, null);
            });
        });
    }
}


SP.UI.MicroFeed.BaseAtMention.registerClass('SP.UI.MicroFeed.BaseAtMention');
SP.UI.MicroFeed.AtMention.registerClass('SP.UI.MicroFeed.AtMention', SP.UI.MicroFeed.BaseAtMention);
SP.UI.MicroFeed.TextBoxElement.registerClass('SP.UI.MicroFeed.TextBoxElement');
SP.UI.MicroFeed.AtMentionMenuOption.registerClass('SP.UI.MicroFeed.AtMentionMenuOption');
SP.UI.MicroFeed.OwnerControlState.registerClass('SP.UI.MicroFeed.OwnerControlState');
SP.UI.MicroFeed.SocialActorCache.registerClass('SP.UI.MicroFeed.SocialActorCache');
SP.UI.MicroFeed.MicrofeedThreadCache.registerClass('SP.UI.MicroFeed.MicrofeedThreadCache');
SP.UI.MicroFeed.MicrofeedThreadList.registerClass('SP.UI.MicroFeed.MicrofeedThreadList');
SP.UI.MicroFeed.MicroFeedView.registerClass('SP.UI.MicroFeed.MicroFeedView');
SP.UI.MicroFeed.AttributePair.registerClass('SP.UI.MicroFeed.AttributePair');
SP.UI.MicroFeed.SPMicroFeed.registerClass('SP.UI.MicroFeed.SPMicroFeed');
SP.UI.MicroFeed.AllLikerDisplayManager.registerClass('SP.UI.MicroFeed.AllLikerDisplayManager');
SP.UI.MicroFeed.MicrofeedEntry.registerClass('SP.UI.MicroFeed.MicrofeedEntry');
SP.UI.MicroFeed.MicrofeedMenu.registerClass('SP.UI.MicroFeed.MicrofeedMenu', SP.UI.MySiteCommon.MySiteMenu);
SP.UI.MicroFeed.MicroFeedDoc.registerClass('SP.UI.MicroFeed.MicroFeedDoc');
SP.UI.MicroFeed.MicroFeedVideo.registerClass('SP.UI.MicroFeed.MicroFeedVideo');
SP.UI.MicroFeed.SuggestionQueryManager.registerClass('SP.UI.MicroFeed.SuggestionQueryManager');
SP.UI.MicroFeed.AllUsersSuggestionManager.registerClass('SP.UI.MicroFeed.AllUsersSuggestionManager', SP.UI.MicroFeed.SuggestionQueryManager);
function sp_ui_microfeed_initialize() {
SP.UI.MicroFeed.AtMention.$76 = new RegExp('\r\n', 'g');
SP.UI.MicroFeed.BaseAtMention.$2M = 10;
SP.UI.MicroFeed.BaseAtMention.$1E = null;
SP.UI.MicroFeed.BaseAtMention.$3X = null;
SP.UI.MicroFeed.BaseAtMention.$5G = '_mentionselectordiv';
SP.UI.MicroFeed.BaseAtMention.$1c = 'ms-mentioncontainerdiv';
SP.UI.MicroFeed.BaseAtMention.$R = '_atmentiondiv_';
SP.UI.MicroFeed.BaseAtMention.$4k = 'ms-microfeed-LoadingFollowedUsersImage';
SP.UI.MicroFeed.BaseAtMention.$3f = 'ms-microfeed-typeAheadElementSelected';
SP.UI.MicroFeed.BaseAtMention.$23 = 'ms-microfeed-typeAheadElementName';
SP.UI.MicroFeed.BaseAtMention.$21 = 'DisplayName';
SP.UI.MicroFeed.BaseAtMention.$3l = 'alias';
SP.UI.MicroFeed.BaseAtMention.$1U = 'TextBoxID';
SP.UI.MicroFeed.BaseAtMention.emptyGuid = '00000000-0000-0000-0000-000000000000';
SP.UI.MicroFeed.BaseAtMention.hashTagsTermSetId = '3CEB0050-69A1-40E7-A427-83E2FAC80C27';
SP.UI.MicroFeed.BaseAtMention.tagSuggestions = null;
SP.UI.MicroFeed.BaseAtMention.tagSuggestionDiv = null;
SP.UI.MicroFeed.BaseAtMention.disallowedHashTagCharsRegex = new RegExp('[\\u0000-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007F\\u3000\\u00A0\\u1680\\u180E\\u2000-\\u200A\\u202F\\u205F]');
SP.UI.MicroFeed.SocialActorCache.$11 = null;
SP.UI.MicroFeed.MicrofeedThreadCache.$11 = null;
SP.UI.MicroFeed.SPMicroFeed.microfeed = null;
SP.UI.MicroFeed.SPMicroFeed.maxResolvedMentions = 3;
SP.UI.MicroFeed.SPMicroFeed.characterLimit = 512;
SP.UI.MicroFeed.SPMicroFeed.$N = null;
SP.UI.MicroFeed.SPMicroFeed.$1t = 0;
SP.UI.MicroFeed.SPMicroFeed.$L = null;
SP.UI.MicroFeed.SPMicroFeed.$Q = null;
SP.UI.MicroFeed.SPMicroFeed.$r = false;
SP.UI.MicroFeed.SPMicroFeed.$1S = false;
SP.UI.MicroFeed.SPMicroFeed.$3b = false;
SP.UI.MicroFeed.SPMicroFeed.$2V = false;
SP.UI.MicroFeed.SPMicroFeed.$1R = false;
SP.UI.MicroFeed.SPMicroFeed.$1Q = false;
SP.UI.MicroFeed.SPMicroFeed.$3Z = null;
SP.UI.MicroFeed.SPMicroFeed.$5E = false;
SP.UI.MicroFeed.SPMicroFeed.$3Y = true;
SP.UI.MicroFeed.SPMicroFeed.$1v = null;
SP.UI.MicroFeed.SPMicroFeed.$1F = 20;
SP.UI.MicroFeed.SPMicroFeed.$7S = 20;
SP.UI.MicroFeed.SPMicroFeed.$W = false;
SP.UI.MicroFeed.SPMicroFeed.$1T = null;
SP.UI.MicroFeed.SPMicroFeed.$H = null;
SP.UI.MicroFeed.SPMicroFeed.$e = null;
SP.UI.MicroFeed.SPMicroFeed.$3a = 0;
SP.UI.MicroFeed.SPMicroFeed.$s = browseris.ie8down || browseris.ie8standard;
SP.UI.MicroFeed.SPMicroFeed.$1u = null;
SP.UI.MicroFeed.SPMicroFeed.$2S = null;
SP.UI.MicroFeed.SPMicroFeed.$t = 'MyThreadLikeCount';
SP.UI.MicroFeed.SPMicroFeed.$Y = 'attachId';
SP.UI.MicroFeed.SPMicroFeed.$1K = 'hasLinks';
SP.UI.MicroFeed.SPMicroFeed.$2G = 'hasHover';
SP.UI.MicroFeed.SPMicroFeed.$2F = 'hasFocus';
SP.UI.MicroFeed.SPMicroFeed.$v = 'updatingLinkId';
SP.UI.MicroFeed.SPMicroFeed.$38 = 'AttachmentImageButton';
SP.UI.MicroFeed.SPMicroFeed.$4H = 'FollowButtonFor';
SP.UI.MicroFeed.SPMicroFeed.$2e = 'displayInMyLikesView';
SP.UI.MicroFeed.SPMicroFeed.targetAttribute = 'targetDisplayName';
SP.UI.MicroFeed.SPMicroFeed.$1s = 'ms-microfeeddiv';
SP.UI.MicroFeed.SPMicroFeed.$7O = 'ms-microfeed-fullMicrofeedDiv';
SP.UI.MicroFeed.SPMicroFeed.$d = 'ms-microfeed-button';
SP.UI.MicroFeed.SPMicroFeed.$7N = 'ms-microfeed-deleteButton';
SP.UI.MicroFeed.SPMicroFeed.$3V = 'ms-microfeed-deleteButtonImageParent';
SP.UI.MicroFeed.SPMicroFeed.$3U = 'ms-microfeed-deleteButtonImage';
SP.UI.MicroFeed.SPMicroFeed.$5B = 'ms-microfeed-editLinkButton';
SP.UI.MicroFeed.SPMicroFeed.$5A = 'ms-textSmall ms-secondaryCommandLink';
SP.UI.MicroFeed.SPMicroFeed.$7Q = 'ms-microfeed-linkSeparator ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$7P = 'ms-microfeed-rightAlignedDiv';
SP.UI.MicroFeed.SPMicroFeed.$3W = 'ms-floatRight';
SP.UI.MicroFeed.SPMicroFeed.$5C = 'ms-microfeed-floatLeft';
SP.UI.MicroFeed.SPMicroFeed.$5D = 'ms-microfeed-greyout';
SP.UI.MicroFeed.SPMicroFeed.$7G = 'ms-microblogdiv';
SP.UI.MicroFeed.SPMicroFeed.$7F = 'ms-microfeed-microblogpart';
SP.UI.MicroFeed.SPMicroFeed.$1D = 'ms-microbloginputbox';
SP.UI.MicroFeed.SPMicroFeed.$53 = 'ms-microfeed-postBox ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$3R = 'ms-microbloginputboxmentionhighlightdiv';
SP.UI.MicroFeed.SPMicroFeed.$7J = 'ms-microfeed-mentionHighlightDiv';
SP.UI.MicroFeed.SPMicroFeed.$2P = 'ms-helperText';
SP.UI.MicroFeed.SPMicroFeed.$54 = 'ms-microfeed-defaultTextColor';
SP.UI.MicroFeed.SPMicroFeed.$3T = 'ms-microfeed-rootOrReplyPostBox';
SP.UI.MicroFeed.SPMicroFeed.$57 = 'ms-microblogInputFocus';
SP.UI.MicroFeed.SPMicroFeed.$55 = 'ms-microfeed-focusBox';
SP.UI.MicroFeed.SPMicroFeed.$2Q = 'ms-microfeed-focusBoxNoFocus';
SP.UI.MicroFeed.SPMicroFeed.$56 = 'ms-microfeed-focusBoxInFocus';
SP.UI.MicroFeed.SPMicroFeed.$1p = 'ms-microfeed-editLinkDiv';
SP.UI.MicroFeed.SPMicroFeed.$2R = 'ms-microfeed-newAttachment';
SP.UI.MicroFeed.SPMicroFeed.$3N = 'ms-microfeed-attachmentPreviewImage';
SP.UI.MicroFeed.SPMicroFeed.$2N = 'ms-microfeed-attachmentPreviewRich';
SP.UI.MicroFeed.SPMicroFeed.$1o = 'ms-microfeed-attachmentImage_';
SP.UI.MicroFeed.SPMicroFeed.$1r = 'ms-microfeed-editLinkTextBox';
SP.UI.MicroFeed.SPMicroFeed.$3P = 'ms-microfeed-editLinkDisplayTextTextBox';
SP.UI.MicroFeed.SPMicroFeed.$7H = 'ms-microfeed-editLinkDiv ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$52 = 'ms-microfeed-editLinkTextBox';
SP.UI.MicroFeed.SPMicroFeed.$3O = 'ms-microfeed-editLinkButton';
SP.UI.MicroFeed.SPMicroFeed.$7I = 'ms-microfeed-editUrlSpan';
SP.UI.MicroFeed.SPMicroFeed.$7E = 'ms-microfeed-displayLinkAsSpan';
SP.UI.MicroFeed.SPMicroFeed.$51 = 'ms-microfeed-displayLinkAsSpan';
SP.UI.MicroFeed.SPMicroFeed.$1q = 'ms-microfeed-editLinkErrorMessage';
SP.UI.MicroFeed.SPMicroFeed.$3S = 'ms-microfeed-revertEditLinkDivLink';
SP.UI.MicroFeed.SPMicroFeed.$3Q = 'ms-microfeed-textBoxElements';
SP.UI.MicroFeed.SPMicroFeed.$59 = 'ms-mbRightSpan';
SP.UI.MicroFeed.SPMicroFeed.$7L = 'ms-microfeed-postButtonSpan';
SP.UI.MicroFeed.SPMicroFeed.$7M = 'ms-microfeed-postReplyButtonSpan ms-floatRight';
SP.UI.MicroFeed.SPMicroFeed.$V = 'ms-postbutton';
SP.UI.MicroFeed.SPMicroFeed.$58 = 'ms-microfeed-postButton ms-button-emphasize ms-floatRight';
SP.UI.MicroFeed.SPMicroFeed.$1C = 'ms-microblogcharacterlimitlabel';
SP.UI.MicroFeed.SPMicroFeed.$4z = 'ms-microfeed-characterLimit';
SP.UI.MicroFeed.SPMicroFeed.$50 = 'ms-microfeed-tooManyCharactersLabel';
SP.UI.MicroFeed.SPMicroFeed.$2O = 'ms-microfeed-closeToLimitCharLabel';
SP.UI.MicroFeed.SPMicroFeed.$3K = 'ms-addImageButton';
SP.UI.MicroFeed.SPMicroFeed.$4y = 'ms-microfeed-attachmentButton';
SP.UI.MicroFeed.SPMicroFeed.$4w = 'ms-microfeed-addImageButtonImage';
SP.UI.MicroFeed.SPMicroFeed.$4x = 'ms-microfeed-addImageButtonImageParent';
SP.UI.MicroFeed.SPMicroFeed.$3M = 'ms-microfeed-attachment_';
SP.UI.MicroFeed.SPMicroFeed.$3L = 'ms-microfeed-attachmentDiv';
SP.UI.MicroFeed.SPMicroFeed.$1X = 'ms-newsfeedpartdiv';
SP.UI.MicroFeed.SPMicroFeed.$6P = 'ms-microfeed-feedPart';
SP.UI.MicroFeed.SPMicroFeed.$6h = 'ms-titlebardiv';
SP.UI.MicroFeed.SPMicroFeed.$6g = 'ms-microfeed-title';
SP.UI.MicroFeed.SPMicroFeed.$31 = 'ms-currentFeedLabel';
SP.UI.MicroFeed.SPMicroFeed.$4X = 'ms-microfeed-titleViewSelectorPivotParent';
SP.UI.MicroFeed.SPMicroFeed.$6i = 'ms-microfeed-titleViewSelectorPivotContainer';
SP.UI.MicroFeed.SPMicroFeed.$6j = 'ms-microfeed-titlePivotControl ms-textXLarge';
SP.UI.MicroFeed.SPMicroFeed.$4O = 'ms-microfeed-privacyIcon';
SP.UI.MicroFeed.SPMicroFeed.$2s = 'ms-progressSpan';
SP.UI.MicroFeed.SPMicroFeed.$6U = 'ms-microfeed-processingDiv';
SP.UI.MicroFeed.SPMicroFeed.$6W = 'ms-progressSpinner';
SP.UI.MicroFeed.SPMicroFeed.$6V = 'ms-microfeed-processingImage';
SP.UI.MicroFeed.SPMicroFeed.$3z = 'ms-microfeed-highlightedRefMention';
SP.UI.MicroFeed.SPMicroFeed.$4a = 'ms-viewDescription';
SP.UI.MicroFeed.SPMicroFeed.$6l = 'ms-microfeed-viewDescription';
SP.UI.MicroFeed.SPMicroFeed.$26 = 'ms-feeddiv';
SP.UI.MicroFeed.SPMicroFeed.$1J = 'ms-feedthreadsdiv';
SP.UI.MicroFeed.SPMicroFeed.$1W = 'ms-showMoreThreadsButton';
SP.UI.MicroFeed.SPMicroFeed.$4G = 'ms-showMoreThreadsButtonContainer';
SP.UI.MicroFeed.SPMicroFeed.$6M = 'ms-microfeed-seeMoreThreadsDiv';
SP.UI.MicroFeed.SPMicroFeed.$6N = 'ms-microfeed-seeMoreThreadsDivContainer';
SP.UI.MicroFeed.SPMicroFeed.$27 = 'ms-blankfeeddiv';
SP.UI.MicroFeed.SPMicroFeed.$6A = 'ms-microfeed-emptyThreadDiv';
SP.UI.MicroFeed.SPMicroFeed.$10 = 'ms-threaddiv_';
SP.UI.MicroFeed.SPMicroFeed.$6f = 'ms-microfeed-thread';
SP.UI.MicroFeed.SPMicroFeed.$1b = 'ms-rootpostcontainerdiv_';
SP.UI.MicroFeed.SPMicroFeed.$30 = 'ms-microfeed-rootDiv';
SP.UI.MicroFeed.SPMicroFeed.$z = 'ms-threadrepliesdiv_';
SP.UI.MicroFeed.SPMicroFeed.$29 = 'ms-post_';
SP.UI.MicroFeed.SPMicroFeed.$4J = 'ms-microfeed-message';
SP.UI.MicroFeed.SPMicroFeed.$4M = 'ms-microfeed-messageError';
SP.UI.MicroFeed.SPMicroFeed.$6Y = 'ms-userActivityText_';
SP.UI.MicroFeed.SPMicroFeed.$6X = 'ms-microfeed-activityText ms-metadata';
SP.UI.MicroFeed.SPMicroFeed.$4K = 'ms-content_';
SP.UI.MicroFeed.SPMicroFeed.$6S = 'ms-microfeed-indentedPost';
SP.UI.MicroFeed.SPMicroFeed.$3x = 'ms-deletebutton_';
SP.UI.MicroFeed.SPMicroFeed.$4R = 'ms-replyInputFocus_';
SP.UI.MicroFeed.SPMicroFeed.$1Y = 'ms-microfeed-editLinkDiv_';
SP.UI.MicroFeed.SPMicroFeed.$2B = 'ms-microfeed-newAttachment_';
SP.UI.MicroFeed.SPMicroFeed.$2u = 'ms-microfeed-attachmentPreviewImage_';
SP.UI.MicroFeed.SPMicroFeed.$2C = 'ms-microfeed-attachmentPreviewRich_';
SP.UI.MicroFeed.SPMicroFeed.$1a = 'ms-microfeed-editLinkTextBox_';
SP.UI.MicroFeed.SPMicroFeed.$2w = 'ms-microfeed-editLinkDisplayTextTextBox_';
SP.UI.MicroFeed.SPMicroFeed.$2v = 'ms-microfeed-editLinkButton_';
SP.UI.MicroFeed.SPMicroFeed.$6b = 'ms-microfeed-editUrlSpan_';
SP.UI.MicroFeed.SPMicroFeed.$6a = 'ms-microfeed-displayLinkAsSpan_';
SP.UI.MicroFeed.SPMicroFeed.$1Z = 'ms-microfeed-editLinkErrorMessage_';
SP.UI.MicroFeed.SPMicroFeed.$2t = 'ms-addImageButton_';
SP.UI.MicroFeed.SPMicroFeed.$1I = 'ms-createreplydiv_';
SP.UI.MicroFeed.SPMicroFeed.$2x = 'ms-replyinput_';
SP.UI.MicroFeed.SPMicroFeed.$4Q = 'ms-microfeed-postBox ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$2z = 'ms-replyinputmentionhighlightdiv_';
SP.UI.MicroFeed.SPMicroFeed.$6c = 'ms-microfeed-replyMentionHighlightDiv';
SP.UI.MicroFeed.SPMicroFeed.$2y = 'ms-microfeed-replyBoxIndentDiv';
SP.UI.MicroFeed.SPMicroFeed.$6J = 'ms-footer_';
SP.UI.MicroFeed.SPMicroFeed.$6I = 'ms-microfeed-messageFooter';
SP.UI.MicroFeed.SPMicroFeed.$28 = SP.UI.MicroFeed.SPMicroFeed.$d + ' ' + SP.UI.MicroFeed.SPMicroFeed.$5A + ' ms-microfeed-footerButton';
SP.UI.MicroFeed.SPMicroFeed.$4L = 'ms-microfeed-mysitemenu-control ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$25 = 'ms-userthumbnailarea_';
SP.UI.MicroFeed.SPMicroFeed.$2k = 'newreply_';
SP.UI.MicroFeed.SPMicroFeed.$42 = 'ms-likebutton_';
SP.UI.MicroFeed.SPMicroFeed.$6G = 'ms-lockedspan_';
SP.UI.MicroFeed.SPMicroFeed.$6Z = 'ms-replybutton_';
SP.UI.MicroFeed.SPMicroFeed.$6B = 'ms-followbutton_';
SP.UI.MicroFeed.SPMicroFeed.$y = 'ms-postreplybutton_';
SP.UI.MicroFeed.SPMicroFeed.$6D = 'ms-hidedeleteinfodiv_';
SP.UI.MicroFeed.SPMicroFeed.$3y = 'ms-hiddenelementsdiv_';
SP.UI.MicroFeed.SPMicroFeed.$6C = 'ms-microfeed-deleteDiv';
SP.UI.MicroFeed.SPMicroFeed.$4N = 'ms-PostPreview_';
SP.UI.MicroFeed.SPMicroFeed.$6T = 'ms-PostPreviewContainer_';
SP.UI.MicroFeed.SPMicroFeed.$2A = 'ms-microfeed-replyArea';
SP.UI.MicroFeed.SPMicroFeed.$4B = 'ms-seeMoreReplies_';
SP.UI.MicroFeed.SPMicroFeed.$4E = 'ms-microfeed-seeMoreRepliesDiv';
SP.UI.MicroFeed.SPMicroFeed.$6L = 'ms-microfeed-seeFullThread ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$4D = 'ms-floatLeft ms-secondaryCommandLink ms-microfeed-seeMoreReplies';
SP.UI.MicroFeed.SPMicroFeed.$4F = 'ms-microfeed-moreRepliesImageParent';
SP.UI.MicroFeed.SPMicroFeed.$2p = 'ms-floatLeft ms-microfeed-moreRepliesImageDown';
SP.UI.MicroFeed.SPMicroFeed.$4A = 'ms-floatLeft ms-microfeed-moreRepliesImageUp';
SP.UI.MicroFeed.SPMicroFeed.$6K = 'ms-moreRepliesButton_';
SP.UI.MicroFeed.SPMicroFeed.$2o = 'ms-moreRepliesImageParent_';
SP.UI.MicroFeed.SPMicroFeed.$4C = 'ms-moreRepliesImage_';
SP.UI.MicroFeed.SPMicroFeed.$2D = 'ms-toggleReplies_';
SP.UI.MicroFeed.SPMicroFeed.$4Y = 'ms-toggleRepliesButton_';
SP.UI.MicroFeed.SPMicroFeed.$32 = 'ms-toggleRepliesImage_';
SP.UI.MicroFeed.SPMicroFeed.$6k = 'ms-toggleRepliesImageParent_';
SP.UI.MicroFeed.SPMicroFeed.$33 = 'ms-toggleRepliesText_';
SP.UI.MicroFeed.SPMicroFeed.$64 = 'ms-activityImage_';
SP.UI.MicroFeed.SPMicroFeed.$69 = 'ms-text_';
SP.UI.MicroFeed.SPMicroFeed.$68 = 'ms-microfeed-text';
SP.UI.MicroFeed.SPMicroFeed.$4S = 'ms-likecount_';
SP.UI.MicroFeed.SPMicroFeed.$44 = 'ms-likeimage_';
SP.UI.MicroFeed.SPMicroFeed.$47 = 'ms-likeimageparent_';
SP.UI.MicroFeed.SPMicroFeed.$46 = 'ms-microfeed-likeImageParent';
SP.UI.MicroFeed.SPMicroFeed.$43 = 'ms-microfeed-likeImage';
SP.UI.MicroFeed.SPMicroFeed.$45 = 'ms-microfeed-likeImageLikedByMe';
SP.UI.MicroFeed.SPMicroFeed.$48 = 'ms-likeIndicatorSpanID_';
SP.UI.MicroFeed.SPMicroFeed.$41 = 'ms-microfeed-LikerAnchor ms-bold ms-subtleLink';
SP.UI.MicroFeed.SPMicroFeed.$4U = 'ms-replyLikeIndicatorOuterSpanID_';
SP.UI.MicroFeed.SPMicroFeed.$6e = 'ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$49 = 'ms-likesindicator_';
SP.UI.MicroFeed.SPMicroFeed.$6E = 'ms-microfeed-likesIndicatorText ms-metadata ms-link';
SP.UI.MicroFeed.SPMicroFeed.$6F = 'likersListSpan_';
SP.UI.MicroFeed.SPMicroFeed.$6d = 'ms-replyLikeCountImageSpanID_';
SP.UI.MicroFeed.SPMicroFeed.$4T = 'ms-ReplyLikeCountImageLinkID_';
SP.UI.MicroFeed.SPMicroFeed.$4W = 'ms-seeAllLikersAnchor_';
SP.UI.MicroFeed.SPMicroFeed.$6R = 'ms-postBody_';
SP.UI.MicroFeed.SPMicroFeed.$6Q = 'ms-microfeed-postBody ms-textSmall';
SP.UI.MicroFeed.SPMicroFeed.$40 = 'ms-iconimage_';
SP.UI.MicroFeed.SPMicroFeed.$4V = 'ms-microfeed-userThumbnailAreaRootPadding';
SP.UI.MicroFeed.SPMicroFeed.$4P = 'ms-microfeed-userThumbnailAreaReplyPadding';
SP.UI.MicroFeed.SPMicroFeed.$2n = 'ms-body_';
SP.UI.MicroFeed.SPMicroFeed.$6H = 'ms-microfeed-messageBody';
SP.UI.MicroFeed.SPMicroFeed.$4Z = 'ms-microfeed-unsubscribelink';
SP.UI.MicroFeed.SPMicroFeed.$34 = 'ms-microfeed-unsubscribediv';
SP.UI.MicroFeed.SPMicroFeed.$2m = 'ms-getThreadImage_';
SP.UI.MicroFeed.SPMicroFeed.$2r = 'ms-microfeed-pendingImage';
SP.UI.MicroFeed.SPMicroFeed.$7U = 'ms-PersonalSiteChangePhotoLink';
SP.UI.MicroFeed.SPMicroFeed.$7V = 'ms-PersonalSiteConfigureSettingsLink';
SP.UI.MicroFeed.SPMicroFeed.$7W = 'ms-PersonalSiteEditProfileLink';
SP.UI.MicroFeed.SPMicroFeed.$7a = SP.UI.MySiteCommon.CommonUIElements.get_profileImagePlaceholder42();
SP.UI.MicroFeed.SPMicroFeed.$70 = GetThemedImageUrl('placeholder32x32.png');
SP.UI.MicroFeed.SPMicroFeed.$6O = 'mypeople.aspx';
SP.UI.MicroFeed.SPMicroFeed.$7m = '_layouts/15/MySite.aspx?MySiteRedirect=AllSites';
SP.UI.MicroFeed.AllLikerDisplayManager.$7K = 'ms-microfeed-LikerCalloutDiv';
SP.UI.MicroFeed.AllLikerDisplayManager.$65 = 'ms-allLiker-CalloutContentID_';
SP.UI.MicroFeed.AllLikerDisplayManager.$66 = 'ms-allLiker-CalloutControlID_';
SP.UI.MicroFeed.AllLikerDisplayManager.$67 = 'ms-allLiker-CalloutTitleID_';
SP.UI.MicroFeed.AllLikerDisplayManager.$5N = {};
SP.UI.MicroFeed.MicroFeedDoc.$7C = 'ms-microfeed-attachmentDoc_';
SP.UI.MicroFeed.MicroFeedVideo.$7D = 'ms-microfeed-attachmentVideo_';
};
sp_ui_microfeed_initialize();

RegisterModuleInit("sp.ui,microfeed.js", sp_ui_microfeed_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}

NotifyScriptLoadedAndExecuteWaitingJobs("SP.UI.MicroFeed.js");

_spApplicationPagesScriptLoaded = true;
