
Type.registerNamespace('Srch');

Srch.ContentBySearch = function Srch_ContentBySearch(elem) {
    this.$0_5 = 'path:[Site.URL]';
    Srch.ContentBySearch.initializeBase(this, [ elem ]);
}
Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage = function Srch_ContentBySearch$getControlTemplateEncodedNoResultsMessage(cbs) {
    var $v_0 = Srch.ContentBySearch.isRollupPage(cbs);
    var $v_1 = Srch.U.loadResource('control_Content_NoResultsDisplayMode');
    var $v_2 = ($v_0) ? Srch.U.loadResource('control_RollupPage_NoResultsDisplayMode') : $v_1;
    var $v_3 = Srch.U.isPageInEditMode();
    if ($v_3 && $v_0) {
        $v_2 = $v_1 + $v_2;
    }
    $v_2 = String.format(SP.Utilities.HttpUtility.htmlEncode($v_2), '&nbsp;');
    if ($v_3) {
        return String.format(SP.Utilities.HttpUtility.htmlEncode(Srch.U.loadResource('control_Content_NoResultsEditMode')), $v_2, '<br/>');
    }
    return $v_2;
}
Srch.ContentBySearch.isRollupPage = function Srch_ContentBySearch$isRollupPage(cbs) {
    if (!Srch.U.n(cbs) && !Srch.U.e(cbs.$0_5)) {
        var $v_0 = cbs.$0_5.toLowerCase();
        return $v_0.indexOf('{term') !== -1 || $v_0.indexOf('{topic') !== -1;
    }
    return false;
}
Srch.ContentBySearch.getPictureMarkup = function Srch_ContentBySearch$getPictureMarkup(imageInfo, width, height, itemData, imageClassName, altTextInfo, elementId) {
    if (!Srch.U.n(imageInfo) && !imageInfo.isEmpty) {
        var $v_0 = Srch.U.getImageSourceWithRendition(imageInfo, width, height);
        var $v_1 = String.format('onerror=\"this.parentNode.innerHTML=Srch.ContentBySearch.getNoPictureMarkup({0});\" ', height);
        var $v_2 = !Srch.U.n(width) && !isNaN(width);
        var $v_3 = !Srch.U.n(height) && !isNaN(height);
        var $v_4 = $v_2 && $v_3 && width === height;
        if ($v_4) {
            $v_1 += String.format('onload=\"Srch.ContentBySearch.resizeImageToSquareLength(this, {0});\"', width);
        }
        var $v_5 = (Srch.U.e(elementId)) ? '' : String.format('id=\"{0}\"', SP.Utilities.HttpUtility.htmlEncode(elementId));
        return String.format('<img src=\"{0}\" class=\"{1}\" alt=\"{2}\" {3} {4} />', $v_0, SP.Utilities.HttpUtility.htmlEncode(imageClassName), altTextInfo.toString(), $v_5, $v_1);
    }
    else {
        return Srch.ContentBySearch.getNoPictureMarkup(height);
    }
}
Srch.ContentBySearch.getNoPictureMarkup = function Srch_ContentBySearch$getNoPictureMarkup(height) {
    var $v_0 = String.format('<span class=\"cbs-noImageContainer-ContentWrapper{0}\"><span class=\"cbs-noImageContainer-Content{0}\">{1}</span></span>', (height > 100) ? 'Large' : 'Small', SP.Utilities.HttpUtility.htmlEncode(Srch.U.loadResource('item_Content_GenericNoImageSymbol')));
    return String.format('<span class=\"cbs-noImageContainer ms-fillBoxFull\" title=\"{0}\">{1}<span class=\"ms-tableRow\">{2}{3}{2}</span>{4}</span>', SP.Utilities.HttpUtility.htmlEncode(Srch.U.loadResource('item_NoImageMessage')), String.format('<span class=\"cbs-noImageContainer-Row{0}\">&nbsp;</span>', ''), '<span class=\"cbs-noImageContainer-Cell\"></span>', $v_0, String.format('<span class=\"cbs-noImageContainer-Row{0}\">&nbsp;</span>', (height <= 100) ? '' : 'Large'));
}
Srch.ContentBySearch.getIconSourceFromItem = function Srch_ContentBySearch$getIconSourceFromItem(itemData) {
    return Srch.U.getIconUrlByFileExtension(itemData, SP.Utilities.VersionUtility.getImageUrl('generaldocument.png'));
}
Srch.ContentBySearch.resizeImageToSquareLength = function Srch_ContentBySearch$resizeImageToSquareLength(imgElement, squareLength) {
    if (Srch.U.n(squareLength) || (isNaN(squareLength)) || Srch.U.n(imgElement) || imgElement.tagName !== 'IMG' || imgElement.style.visibility === 'hidden') {
        return;
    }
    var $v_0 = (Srch.U.n(imgElement.naturalWidth)) ? imgElement.clientWidth : imgElement.naturalWidth;
    var $v_1 = (Srch.U.n(imgElement.naturalHeight)) ? imgElement.clientHeight : imgElement.naturalHeight;
    if (isNaN($v_0) || isNaN($v_1)) {
        return;
    }
    if ($v_0 < $v_1) {
        imgElement.width = squareLength;
        Srch.ContentBySearch.$8(imgElement, $v_1, $v_0, squareLength, false);
    }
    else if ($v_0 > $v_1) {
        imgElement.height = squareLength;
        Srch.ContentBySearch.$8(imgElement, $v_0, $v_1, squareLength, true);
    }
    else {
        imgElement.width = squareLength;
    }
}
Srch.ContentBySearch.$8 = function Srch_ContentBySearch$$8($p0, $p1, $p2, $p3, $p4) {
    if ($p2 !== $p3) {
        var $v_0 = 1 * $p3 / $p2;
        var $v_1 = Math.round(($v_0 * $p1 - $p3) / 2);
        var $v_2 = $v_1 + 'px';
        if ($p4) {
            var $v_3 = !Srch.U.n(document.body.parentNode) && document.body.parentNode.dir === 'rtl';
            if ($v_3) {
                $p0.style.left = $v_2;
            }
            else {
                $p0.style.right = $v_2;
            }
        }
        else {
            $p0.style.bottom = $v_2;
        }
        Sys.UI.DomElement.addCssClass($p0, 'ms-positionRelative');
    }
}
Srch.ContentBySearch.prototype = {
    
    get_numberOfItems: function Srch_ContentBySearch$get_numberOfItems() {
        return this.$4_5;
    },
    set_numberOfItems: function Srch_ContentBySearch$set_numberOfItems(value) {
        this.$4_5 = value;
        return value;
    },
    
    $4_5: 3,
    
    get_startingItemIndex: function Srch_ContentBySearch$get_startingItemIndex() {
        return this.$2_5;
    },
    set_startingItemIndex: function Srch_ContentBySearch$set_startingItemIndex(value) {
        this.$2_5 = value;
        return value;
    },
    
    $2_5: 1,
    
    get_displayStyle: function Srch_ContentBySearch$get_displayStyle() {
        return this.$6_5;
    },
    set_displayStyle: function Srch_ContentBySearch$set_displayStyle(value) {
        this.$6_5 = value;
        return value;
    },
    
    $6_5: '',
    
    get_propertyMappings: function Srch_ContentBySearch$get_propertyMappings() {
        return this.$7_5;
    },
    set_propertyMappings: function Srch_ContentBySearch$set_propertyMappings(value) {
        this.$7_5 = value;
        return value;
    },
    
    $7_5: '',
    
    get_targetResultTable: function Srch_ContentBySearch$get_targetResultTable() {
        return this.$5_5;
    },
    set_targetResultTable: function Srch_ContentBySearch$set_targetResultTable(value) {
        this.$5_5 = value;
        return value;
    },
    
    $5_5: 'RelevantResults',
    
    get_shouldHideControlWhenEmpty: function Srch_ContentBySearch$get_shouldHideControlWhenEmpty() {
        return this.$1_5;
    },
    set_shouldHideControlWhenEmpty: function Srch_ContentBySearch$set_shouldHideControlWhenEmpty(value) {
        this.$1_5 = value;
        return value;
    },
    
    $1_5: true,
    
    get_unparsedQueryTemplate: function Srch_ContentBySearch$get_unparsedQueryTemplate() {
        return this.$0_5;
    },
    set_unparsedQueryTemplate: function Srch_ContentBySearch$set_unparsedQueryTemplate(value) {
        this.$0_5 = value;
        return value;
    },
    
    getDataProvider: function Srch_ContentBySearch$getDataProvider() {
        return this.get_dataProvider();
    },
    
    clearLastQueryState: function Srch_ContentBySearch$clearLastQueryState() {
        if (!Srch.U.n(this.get_dataProvider())) {
            this.get_dataProvider().get_currentQueryState().copyFrom(new Srch.QueryState(), 0);
        }
    },
    
    processResultReady: function Srch_ContentBySearch$processResultReady(resultTableCollection) {
        var $v_0 = this.$9_5(resultTableCollection);
        if (!this.shouldRenderControl() && this.$1_5) {
            this.processDataProviderErrors(this.get_dataProvider());
            if (!this.hasMessages()) {
                var $v_1 = new Srch.ControlMessage(null, 0, -1, 'HiddenWithNoResultsWarningMessage', Srch.U.loadResource('cc_err_HiddenWithNoResultsWarningMessage'), '', '', null, true, false, true);
                var $v_2 = [];
                Srch.U.appendArray($v_2, $v_1);
                this.processDataErrorMessages($v_2);
            }
            this.displayControlMessages();
            this.setControlElementVisibility(false);
        }
        else {
            Srch.Result.prototype.processResultReady.call(this, $v_0);
        }
    },
    
    shouldRenderControl: function Srch_ContentBySearch$shouldRenderControl() {
        return (this.$3_5 || !this.$1_5);
    },
    
    shouldShowTable: function Srch_ContentBySearch$shouldShowTable(resultTable) {
        if (!Srch.U.n(resultTable)) {
            var $v_0 = resultTable[Srch.U.PropNames.rowCount];
            if (!Srch.U.n($v_0) && $v_0 > 0) {
                if (Srch.U.isTableTypeof(resultTable, this.$5_5)) {
                    this.set_renderedResult(true);
                    return true;
                }
            }
        }
        return false;
    },
    
    $3_5: false,
    
    $9_5: function Srch_ContentBySearch$$9_5($p0) {
        this.$3_5 = false;
        var $v_0 = Srch.U.copyDictionary($p0);
        var $v_1 = null;
        if (!Srch.U.n($p0)) {
            $v_1 = $p0.ResultTables;
        }
        if (!Srch.U.n($v_1) && $v_1.length > 0) {
            var $v_2 = new Array($v_1.length);
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                $v_2[$v_3] = Srch.U.copyDictionary($v_1[$v_3]);
                var $v_4 = $v_1[$v_3].ResultRows;
                var $v_5 = 0;
                if (this.$2_5 > 1) {
                    $v_5 = this.$2_5 - 1;
                }
                var $v_6 = this.$4_5 + $v_5;
                if ($v_4.length < $v_6) {
                    $v_6 = $v_4.length;
                }
                var $v_7 = $v_6 - $v_5;
                if ($v_7 < 0) {
                    $v_7 = 0;
                }
                if (this.shouldShowTable($v_1[$v_3])) {
                    this.$3_5 = true;
                }
                if (Srch.U.n($v_4) || ($v_4.length < $v_6 && !$v_5)) {
                    continue;
                }
                var $v_8 = new Array($v_7);
                var $v_9 = 0;
                for (var $v_A = $v_5; $v_A < $v_6 && $v_A < $v_4.length; $v_A++) {
                    $v_8[$v_9] = $v_4[$v_A];
                    $v_9++;
                }
                $v_2[$v_3].RowCount = $v_7;
                $v_2[$v_3].ResultRows = $v_8;
            }
            $v_0.ResultTables = $v_2;
            return $v_0;
        }
        else {
            return $p0;
        }
    }
}


Srch.ContentBySearch.registerClass('Srch.ContentBySearch', Srch.Result);
function search_cbs_initialize() {
Srch.ContentBySearch.$A = [ 'WMV', 'AVI', 'MPG', 'ASF', 'MP4', 'OGG', 'OGV', 'WEBM' ];
};
search_cbs_initialize();

RegisterModuleInit("Search.CBS.js", search_cbs_initialize);

NotifyScriptLoadedAndExecuteWaitingJobs("Search.CBS.js");
