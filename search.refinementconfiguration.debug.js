// JScript File


Type.registerNamespace('Microsoft.SharePoint.Search.FacetedNavigation');

Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy = function() {}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy.prototype = {
    Frequency: 0, 
    Name: 1, 
    Number: 2
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy.registerEnum('Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortBy', false);


Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder = function() {}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder.prototype = {
    Descending: 0, 
    Ascending: 1
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder.registerEnum('Microsoft.SharePoint.Search.FacetedNavigation.RefinementOptionsSortOrder', false);


Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode = function() {}
Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode.prototype = {
    Inherit: 0, 
    Custom: 1
}
Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode.registerEnum('Microsoft.SharePoint.Search.FacetedNavigation.InheritanceMode', false);


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialogArgs(refinementConfiguration, termId, error) {
    this.refinementConfiguration = refinementConfiguration;
    this.termId = termId;
    this.error = error;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.toJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialogArgs$toJSON(refinementConfigurationDialogArgs) {
    return Sys.Serialization.JavaScriptSerializer.serialize(refinementConfigurationDialogArgs);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.fromJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfigurationDialogArgs$fromJSON(jsonRefinementConfigurationDialogArgs) {
    return Sys.Serialization.JavaScriptSerializer.deserialize(jsonRefinementConfigurationDialogArgs);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.prototype = {
    refinementConfiguration: null,
    termId: null,
    error: null,
    contextDataProviderState: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfiguration(refinerConfigurations) {
    this.refinerConfigurations = refinerConfigurations;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.toJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfiguration$toJSON(refinementConfiguration) {
    return Sys.Serialization.JavaScriptSerializer.serialize(refinementConfiguration);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.fromJSON = function Microsoft_SharePoint_Search_FacetedNavigation_RefinementConfiguration$fromJSON(jsonString) {
    return Sys.Serialization.JavaScriptSerializer.deserialize(jsonString);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.prototype = {
    refinerConfigurations: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration(propertyName) {
    this.sortBy = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortBy;
    this.sortOrder = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortOrder;
    this.maxNumberRefinementOptions = 15;
    this.propertyName = propertyName;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortByString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration$getSortByString(sortBy) {
    return Srch.U.loadResource(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$2[sortBy]);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.getSortOrderString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration$getSortOrderString(sortDirection) {
    return Srch.U.loadResource(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$3[sortDirection]);
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration$$0($p0) {
    var $v_0 = $p0.toString();
    return ($p0 < 10) ? '0' + $v_0 : $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$4 = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration$$4($p0) {
    return $p0.getUTCFullYear() + '-' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0($p0.getUTCMonth() + 1) + '-' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0($p0.getUTCDate()) + 'T' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0($p0.getUTCHours()) + ':' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0($p0.getUTCMinutes()) + ':' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$0($p0.getUTCSeconds()) + 'Z';
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.generateRefinerSpecStringForObject = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfiguration$generateRefinerSpecStringForObject(refinerConfigObj) {
    var $v_0 = '';
    if (refinerConfigObj.type === 'Text' || refinerConfigObj.type === 'YesNo') {
        if (!(!refinerConfigObj.sortBy) || !(!refinerConfigObj.sortOrder)) {
            $v_0 += 'sort=';
            if (!refinerConfigObj.sortBy) {
                $v_0 += 'frequency';
            }
            else if (refinerConfigObj.sortBy === 1) {
                $v_0 += 'name';
            }
            else if (refinerConfigObj.sortBy === 2) {
                $v_0 += 'number';
            }
            else {
                $v_0 += 'frequency';
            }
            $v_0 += '/';
            if (!refinerConfigObj.sortOrder) {
                $v_0 += 'descending';
            }
            else if (refinerConfigObj.sortOrder === 1) {
                $v_0 += 'ascending';
            }
            else {
                $v_0 += 'descending';
            }
        }
        if (refinerConfigObj.maxNumberRefinementOptions > 0) {
            if ($v_0.length > 0) {
                $v_0 += ',';
            }
            $v_0 += 'filter';
            $v_0 += '=';
            $v_0 += refinerConfigObj.maxNumberRefinementOptions.toString();
            $v_0 += '/0/*';
        }
    }
    else if (refinerConfigObj.type === 'Double' || refinerConfigObj.type === 'Decimal' || refinerConfigObj.type === 'Integer') {
        if (refinerConfigObj.intervals && refinerConfigObj.intervals.length > 0) {
            $v_0 += 'discretize=manual';
            for (var $$arr_2 = refinerConfigObj.intervals, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_1 = $$arr_2[$$idx_4];
                $v_0 += '/' + $v_1;
            }
        }
    }
    else if (refinerConfigObj.type === 'DateTime') {
        var $v_2 = (refinerConfigObj.useDefaultDateIntervals) ? Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$1 : refinerConfigObj.intervals;
        if ($v_2 && $v_2.length > 0) {
            $v_0 += 'discretize=manual';
            for (var $$arr_7 = $v_2, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
                var $v_3 = $$arr_7[$$idx_9];
                var $v_4 = 86400000;
                var $v_5 = new Date(new Date() - new Date($v_4 * $v_3));
                $v_5 = new Date($v_5.getFullYear(), $v_5.getMonth(), $v_5.getDate(), 0, 0, 0);
                $v_0 += '/' + Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$4($v_5);
            }
        }
    }
    else {
        Srch.U.traceFormatted(null, 'GenerateRefinerSpecStringForObject', 'invoked for unsupported property type \'{0}\'', refinerConfigObj.type);
    }
    if ($v_0.length > 0) {
        $v_0 = '(' + $v_0 + ')';
    }
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.prototype = {
    propertyName: null,
    displayName: null,
    displayTemplate: null,
    refinerSpecStringOverride: '',
    useDefaultDateIntervals: false,
    type: null,
    intervals: null,
    aliases: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfigurationUIUtilities() {
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.isValidNumberIntervalsString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfigurationUIUtilities$isValidNumberIntervalsString(str) {
    var $v_0 = Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getBoundariesFromNumberIntervalsString(str);
    if (!$v_0.length) {
        return false;
    }
    var $v_1 = $v_0[0] - 1;
    for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        if ($v_2 === Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber || $v_2 <= $v_1 || parseInt($v_2 * 10) !== ($v_2 * 10)) {
            return false;
        }
        $v_1 = $v_2;
    }
    return true;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getBoundariesFromNumberIntervalsString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfigurationUIUtilities$getBoundariesFromNumberIntervalsString(numberIntervalsString) {
    var $v_0 = new Array(0);
    if (numberIntervalsString && numberIntervalsString !== '') {
        var $v_1 = numberIntervalsString.split(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator);
        for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            var $v_3 = 0;
            if (Srch.U.w($v_2)) {
                continue;
            }
            try {
                $v_3 = parseFloat($v_2.trim());
                if (isFinite($v_3)) {
                    $v_0.push($v_3);
                }
                else {
                    $v_0.push(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber);
                }
            }
            catch ($$e_8) {
                $v_0.push(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber);
            }
        }
    }
    return $v_0;
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getNumberIntervalStringFrom = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfigurationUIUtilities$getNumberIntervalStringFrom(refinerConfiguration) {
    if (refinerConfiguration.intervals && refinerConfiguration.intervals.length > 0) {
        return refinerConfiguration.intervals.join(Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator);
    }
    else {
        return null;
    }
}
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.getAliasesString = function Microsoft_SharePoint_Search_FacetedNavigation_RefinerConfigurationUIUtilities$getAliasesString(aliases) {
    if (aliases && aliases.length > 0) {
        var $v_0 = Srch.U.loadResource('refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator');
        return aliases.join($v_0);
    }
    else {
        return '';
    }
}


Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState = function Microsoft_SharePoint_Search_FacetedNavigation_ContextDataProviderState() {
}
Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState.prototype = {
    SourceId: null,
    RankModelId: null,
    ClientType: null,
    Sorts: null,
    Properties: null,
    CollapseSpecification: null,
    RankRules: null,
    QueryTemplate: null,
    EnableQueryRules: false,
    HitHighlightedProperties: null,
    SelectedProperties: null,
    BypassResultTypes: false,
    EnableInterleaving: false,
    TrimDuplicates: false,
    AvailableSorts: null,
    FallbackSort: null,
    InitialQueryState: null
}


Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfigurationDialogArgs');
Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinementConfiguration');
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration');
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities');
Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState.registerClass('Microsoft.SharePoint.Search.FacetedNavigation.ContextDataProviderState');
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaulT_MAX_NUM_REFINEMENT_OPTIONS = 15;
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$2 = [ 'refconf_SortBy_Count', 'refconf_SortBy_Name', 'refconf_SortBy_Number' ];
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$3 = [ 'refconf_SortDirection_Descending', 'refconf_SortDirection_Ascending' ];
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeUnsupported = 'Unsupported';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeText = 'Text';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeInteger = 'Integer';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDecimal = 'Decimal';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDateTime = 'DateTime';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeYesNo = 'YesNo';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeBinary = 'Binary';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.typeDouble = 'Double';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.$1 = [ 365, 30, 7, 0 ];
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortBy = 0;
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfiguration.defaultSortOrder = 0;
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.numberIntervalUISeparator = ';';
Microsoft.SharePoint.Search.FacetedNavigation.RefinerConfigurationUIUtilities.invalidBoundaryNumber = (-0.001);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("search.refinementconfiguration.js");
