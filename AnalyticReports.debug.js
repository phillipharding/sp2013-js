function ULSM53(){var o=new Object;o.ULSTeamName="PerformancePoint Monitoring Service";o.ULSFileName="AnalyticReports.debug.js";return o;}
// AnalyticReports.js
//


Type.registerNamespace('PPSMA');

PPSMA.AjaxOlapRenderRequestRecord = function PPSMA_AjaxOlapRenderRequestRecord(outerDivId, controlType, olapContextId, height, width, reportLocation, inputs, navigationAction, viewProperties) {ULSM53:;
    this.TargetControlId = outerDivId;
    this.TargetControlType = controlType;
    this.OlapContextId = olapContextId;
    this.Height = height;
    this.Width = width;
    this.ReportLocation = reportLocation;
    this.Inputs = inputs;
    this.NavigationAction = navigationAction;
    this.ViewProperties = viewProperties;
}


PPSMA.AjaxOlapMetadataRequestRecord = function PPSMA_AjaxOlapMetadataRequestRecord(outerDivId, controlType, olapContextId, metadataContextId, reportLocation, metadataAction) {ULSM53:;
    this.TargetControlId = outerDivId;
    this.TargetControlType = controlType;
    this.OlapContextId = olapContextId;
    this.MetadataContextId = metadataContextId;
    this.ReportLocation = reportLocation;
    this.MetadataAction = metadataAction;
}


PPSMA.SubMenuType = function() {}
PPSMA.SubMenuType.prototype = {
    DrillDownTo: 0, 
    AddActions: 1
}
PPSMA.SubMenuType.registerEnum('PPSMA.SubMenuType', false);


PPSMA.MenuMetadataTypes = function() {}
PPSMA.MenuMetadataTypes.prototype = {
    None: 0, 
    CellActions: 1, 
    MeasureData: 2, 
    DimensionData: 3
}
PPSMA.MenuMetadataTypes.registerEnum('PPSMA.MenuMetadataTypes', false);


PPSMA.OlapReportType = function() {}
PPSMA.OlapReportType.prototype = {
    Grid: 0, 
    ColumnChart: 1, 
    ColumnChartStacked: 2, 
    ColumnChartStacked100: 3, 
    LineChart: 4, 
    LineChartWithMarkers: 5, 
    PieChart: 6, 
    BarChart: 7, 
    BarChartStacked: 8, 
    BarChartStacked100: 9
}
PPSMA.OlapReportType.registerEnum('PPSMA.OlapReportType', false);


PPSMA.OlapView = function() {}
PPSMA.OlapView.registerInterface('PPSMA.OlapView');


PPSMA.Dimension = function PPSMA_Dimension(name, caption, type) {ULSM53:;
    this._name$p$0 = name;
    this._caption$p$0 = caption;
    this._type$p$0 = type;
}
PPSMA.Dimension.prototype = {
    _name$p$0: null,
    _caption$p$0: null,
    _type$p$0: 0,
    _userDefinedHierarchies$p$0: null,
    _attributeHierarchies$p$0: null,
    
    get_name: function PPSMA_Dimension$get_name() {ULSM53:;
        return this._name$p$0;
    },
    
    get_caption: function PPSMA_Dimension$get_caption() {ULSM53:;
        return this._caption$p$0;
    },
    
    get_dimensionType: function PPSMA_Dimension$get_dimensionType() {ULSM53:;
        return this._type$p$0;
    },
    
    get_userDefinedHierarchies: function PPSMA_Dimension$get_userDefinedHierarchies() {ULSM53:;
        return this._userDefinedHierarchies$p$0;
    },
    
    get_attributeHierarchies: function PPSMA_Dimension$get_attributeHierarchies() {ULSM53:;
        return this._attributeHierarchies$p$0;
    },
    
    createUserDefinedHierarchies: function PPSMA_Dimension$createUserDefinedHierarchies(count) {ULSM53:;
        this._userDefinedHierarchies$p$0 = new Array(count);
        return this._userDefinedHierarchies$p$0;
    },
    
    createAttributeHierarchies: function PPSMA_Dimension$createAttributeHierarchies(count) {ULSM53:;
        this._attributeHierarchies$p$0 = new Array(count);
        return this._attributeHierarchies$p$0;
    }
}


PPSMA.DimensionProperties = function PPSMA_DimensionProperties(uniqueName, displayCaption, numPropertiesCount) {ULSM53:;
    this._uniqueName$0 = uniqueName;
    this._displayCaption$0 = displayCaption;
    this._propertyCount$0 = numPropertiesCount;
    this._propNameArray$0 = new Array(numPropertiesCount + 1);
    this._propCaptionArray$0 = new Array(numPropertiesCount + 1);
    this._propCheckedArray$0 = new Array(numPropertiesCount + 1);
    for (var i = 0; i < numPropertiesCount + 1; i++) {
        this._propCheckedArray$0[i] = false;
    }
}
PPSMA.DimensionProperties.prototype = {
    _uniqueName$0: null,
    _displayCaption$0: null,
    _propertyCount$0: 0,
    _propNameArray$0: null,
    _propCaptionArray$0: null,
    _propCheckedArray$0: null,
    _noPropertiesMsg$0: null,
    
    get_name: function PPSMA_DimensionProperties$get_name() {ULSM53:;
        return this._uniqueName$0;
    },
    
    get_caption: function PPSMA_DimensionProperties$get_caption() {ULSM53:;
        return this._displayCaption$0;
    },
    
    get_enabledCount: function PPSMA_DimensionProperties$get_enabledCount() {ULSM53:;
        var retVal = 0;
        for (var i = 0; i < this._propertyCount$0; i++) {
            if (this._propCheckedArray$0[i]) {
                ++retVal;
            }
        }
        return retVal;
    },
    
    get_count: function PPSMA_DimensionProperties$get_count() {ULSM53:;
        return this._propertyCount$0;
    },
    
    get_captions: function PPSMA_DimensionProperties$get_captions() {ULSM53:;
        return this._propCaptionArray$0;
    },
    
    get_names: function PPSMA_DimensionProperties$get_names() {ULSM53:;
        return this._propNameArray$0;
    },
    
    get_checked: function PPSMA_DimensionProperties$get_checked() {ULSM53:;
        return this._propCheckedArray$0;
    },
    
    get_noPropertiesMessage: function PPSMA_DimensionProperties$get_noPropertiesMessage() {ULSM53:;
        return this._noPropertiesMsg$0;
    },
    set_noPropertiesMessage: function PPSMA_DimensionProperties$set_noPropertiesMessage(value) {ULSM53:;
        this._noPropertiesMsg$0 = value;
        return value;
    }
}


PPSMA.Hierarchy = function PPSMA_Hierarchy(name, caption, type) {ULSM53:;
    this._name$p$0 = name;
    this._caption$p$0 = caption;
    this._type$p$0 = type;
    if (this._type$p$0 !== 1) {
        this._type$p$0 = 0;
    }
}
PPSMA.Hierarchy.prototype = {
    _name$p$0: null,
    _caption$p$0: null,
    _levels$p$0: null,
    _type$p$0: 0,
    
    get_hierarchyType: function PPSMA_Hierarchy$get_hierarchyType() {ULSM53:;
        return this._type$p$0;
    },
    
    get_name: function PPSMA_Hierarchy$get_name() {ULSM53:;
        return this._name$p$0;
    },
    
    get_caption: function PPSMA_Hierarchy$get_caption() {ULSM53:;
        return this._caption$p$0;
    },
    
    get_levels: function PPSMA_Hierarchy$get_levels() {ULSM53:;
        return this._levels$p$0;
    },
    
    createLevels: function PPSMA_Hierarchy$createLevels(count) {ULSM53:;
        this._levels$p$0 = new Array(count);
        return this._levels$p$0;
    }
}


PPSMA.Level = function PPSMA_Level(name, caption, index) {ULSM53:;
    this._name$p$0 = name;
    this._caption$p$0 = caption;
    this._index$p$0 = index;
}
PPSMA.Level.prototype = {
    _name$p$0: null,
    _caption$p$0: null,
    _index$p$0: 0,
    
    get_name: function PPSMA_Level$get_name() {ULSM53:;
        return this._name$p$0;
    },
    
    get_caption: function PPSMA_Level$get_caption() {ULSM53:;
        return this._caption$p$0;
    },
    
    get_index: function PPSMA_Level$get_index() {ULSM53:;
        return this._index$p$0;
    }
}


PPSMA.ResultHierarchy = function PPSMA_ResultHierarchy(name, isSingleton, deepestLevel, highestLevel, highestLevelName, dimension) {ULSM53:;
    this._name$p$0 = name;
    this._isSingleton$p$0 = isSingleton;
    this._deepestLevel$p$0 = deepestLevel;
    this._highestLevel$p$0 = highestLevel;
    this._highestLevelName$p$0 = highestLevelName;
    this._isAggregated$p$0 = false;
    this._resultMemberProperties$p$0 = null;
    this._dimension$p$0 = dimension;
    this._isCalculated$p$0 = false;
}
PPSMA.ResultHierarchy.prototype = {
    _name$p$0: null,
    _isSingleton$p$0: false,
    _deepestLevel$p$0: 0,
    _highestLevel$p$0: 0,
    _highestLevelName$p$0: null,
    _isAggregated$p$0: false,
    _resultMemberProperties$p$0: null,
    _dimension$p$0: null,
    _isCalculated$p$0: false,
    
    get_name: function PPSMA_ResultHierarchy$get_name() {ULSM53:;
        return this._name$p$0;
    },
    
    get_dimension: function PPSMA_ResultHierarchy$get_dimension() {ULSM53:;
        return this._dimension$p$0;
    },
    
    get_isSingleton: function PPSMA_ResultHierarchy$get_isSingleton() {ULSM53:;
        return this._isSingleton$p$0;
    },
    
    get_deepestLevel: function PPSMA_ResultHierarchy$get_deepestLevel() {ULSM53:;
        return this._deepestLevel$p$0;
    },
    
    get_highestLevel: function PPSMA_ResultHierarchy$get_highestLevel() {ULSM53:;
        return this._highestLevel$p$0;
    },
    
    get_highestLevelName: function PPSMA_ResultHierarchy$get_highestLevelName() {ULSM53:;
        return this._highestLevelName$p$0;
    },
    
    get_isAggregated: function PPSMA_ResultHierarchy$get_isAggregated() {ULSM53:;
        return this._isAggregated$p$0;
    },
    set_isAggregated: function PPSMA_ResultHierarchy$set_isAggregated(value) {ULSM53:;
        this._isAggregated$p$0 = value;
        return value;
    },
    
    get_isCalculated: function PPSMA_ResultHierarchy$get_isCalculated() {ULSM53:;
        return this._isCalculated$p$0;
    },
    set_isCalculated: function PPSMA_ResultHierarchy$set_isCalculated(value) {ULSM53:;
        this._isCalculated$p$0 = value;
        return value;
    },
    
    createMemberProperties: function PPSMA_ResultHierarchy$createMemberProperties(uniqueName, memberPropertyCount) {ULSM53:;
        if (!this._resultMemberProperties$p$0) {
            this._resultMemberProperties$p$0 = new PPSMA.ResultMemberProperties(uniqueName, memberPropertyCount);
        }
    },
    
    get_memberProperties: function PPSMA_ResultHierarchy$get_memberProperties() {ULSM53:;
        return this._resultMemberProperties$p$0;
    }
}


PPSMA.ResultMemberProperties = function PPSMA_ResultMemberProperties(uniqueName, count) {ULSM53:;
    this._uniqueName$0 = uniqueName;
    this._propertyArraySize$0 = count;
    this._propNameArray$0 = new Array(this._propertyArraySize$0);
    this._propCaptionArray$0 = new Array(this._propertyArraySize$0);
    this._propEnabled$0 = new Array(this._propertyArraySize$0);
    this._propertyCount$0 = 0;
}
PPSMA.ResultMemberProperties.prototype = {
    _uniqueName$0: null,
    _propertyCount$0: 0,
    _propNameArray$0: null,
    _propCaptionArray$0: null,
    _propEnabled$0: null,
    _propertyArraySize$0: 0,
    
    createProperty: function PPSMA_ResultMemberProperties$createProperty(name, caption) {ULSM53:;
        this._propNameArray$0[this._propertyCount$0] = name;
        this._propCaptionArray$0[this._propertyCount$0] = caption;
        this._propEnabled$0[this._propertyCount$0] = true;
        ++this._propertyCount$0;
    },
    
    hide: function PPSMA_ResultMemberProperties$hide(propertyName) {ULSM53:;
        for (var i = 0; i < this._propertyCount$0; i++) {
            if (this._propNameArray$0[i] === propertyName) {
                this._propEnabled$0[i] = false;
                break;
            }
        }
    },
    
    isPropertyHidden: function PPSMA_ResultMemberProperties$isPropertyHidden(propertyName) {ULSM53:;
        for (var i = 0; i < this._propertyCount$0; i++) {
            if (this._propNameArray$0[i] === propertyName) {
                return ((this._propEnabled$0[i]) ? false : true);
            }
        }
        return true;
    },
    
    get_numPropertiesHidden: function PPSMA_ResultMemberProperties$get_numPropertiesHidden() {ULSM53:;
        var numPropertiesHidden = 0;
        for (var i = 0; i < this._propertyCount$0; i++) {
            if (!this._propEnabled$0[i]) {
                ++numPropertiesHidden;
            }
        }
        return numPropertiesHidden;
    },
    
    get_count: function PPSMA_ResultMemberProperties$get_count() {ULSM53:;
        return this._propertyCount$0;
    },
    
    get_name: function PPSMA_ResultMemberProperties$get_name() {ULSM53:;
        return this._uniqueName$0;
    },
    
    get_captions: function PPSMA_ResultMemberProperties$get_captions() {ULSM53:;
        return this._propCaptionArray$0;
    },
    
    get_names: function PPSMA_ResultMemberProperties$get_names() {ULSM53:;
        return this._propNameArray$0;
    }
}


PPSMA.Results = function PPSMA_Results(rowCount, columnCount, canNavigate, isDesigner) {ULSM53:;
    this._rowHierarchies$p$0 = new Array(0);
    this._columnHierarchies$p$0 = new Array(0);
    this._filterHierarchies$p$0 = new Array(0);
    this._rowCount$p$0 = rowCount;
    this._columnCount$p$0 = columnCount;
    this._canNavigate$p$0 = canNavigate;
    this._isDesigner$p$0 = isDesigner;
    this._filterEmptyAxis$p$0 = 0;
    this._sortedAxes$p$0 = 0;
    this._sortTuple$p$0 = null;
    this._sortTypeCol$p$0 = 'nosort';
    this._sortTypeRow$p$0 = 'nosort';
    this._sortColIndex$p$0 = 0;
    this._sortRowIndex$p$0 = 0;
    this._valueFilterCol$p$0 = 0;
    this._valueFilterRow$p$0 = 0;
    this._topFilterCol$p$0 = 0;
    this._topFilterRow$p$0 = 0;
    this._valueFilterParamsCol$p$0 = '';
    this._valueFilterParamsRow$p$0 = '';
}
PPSMA.Results.prototype = {
    _unknownFilterParameters$p$0: false,
    _rowHierarchyCount$p$0: 0,
    _rowMembers$p$0: null,
    _columnHierarchyCount$p$0: 0,
    _columnMembers$p$0: null,
    _filterHierarchyCount$p$0: 0,
    _filterMembers$p$0: null,
    _rowCount$p$0: 0,
    _columnCount$p$0: 0,
    _canNavigate$p$0: false,
    _isDesigner$p$0: false,
    _filterEmptyAxis$p$0: 0,
    _sortedAxes$p$0: 0,
    _sortTuple$p$0: null,
    _sortTypeCol$p$0: null,
    _sortTypeRow$p$0: null,
    _sortColIndex$p$0: 0,
    _sortRowIndex$p$0: 0,
    _valueFilterCol$p$0: 0,
    _valueFilterRow$p$0: 0,
    _topFilterCol$p$0: 0,
    _topFilterRow$p$0: 0,
    _valueFilterParamsCol$p$0: null,
    _valueFilterParamsRow$p$0: null,
    
    get_rowMembers: function PPSMA_Results$get_rowMembers() {ULSM53:;
        return this._rowMembers$p$0;
    },
    
    get_columnMembers: function PPSMA_Results$get_columnMembers() {ULSM53:;
        return this._columnMembers$p$0;
    },
    
    get_filterMembers: function PPSMA_Results$get_filterMembers() {ULSM53:;
        return this._filterMembers$p$0;
    },
    
    get_rowHierarchies: function PPSMA_Results$get_rowHierarchies() {ULSM53:;
        return this._rowHierarchies$p$0;
    },
    
    get_columnHierarchies: function PPSMA_Results$get_columnHierarchies() {ULSM53:;
        return this._columnHierarchies$p$0;
    },
    
    get_filterHierarchies: function PPSMA_Results$get_filterHierarchies() {ULSM53:;
        return this._filterHierarchies$p$0;
    },
    
    get_rowCount: function PPSMA_Results$get_rowCount() {ULSM53:;
        return this._rowCount$p$0;
    },
    
    get_columnCount: function PPSMA_Results$get_columnCount() {ULSM53:;
        return this._columnCount$p$0;
    },
    
    get_canNavigate: function PPSMA_Results$get_canNavigate() {ULSM53:;
        return this._canNavigate$p$0;
    },
    
    get_isDesigner: function PPSMA_Results$get_isDesigner() {ULSM53:;
        return this._isDesigner$p$0;
    },
    
    get_filterEmptyAxis: function PPSMA_Results$get_filterEmptyAxis() {ULSM53:;
        return this._filterEmptyAxis$p$0;
    },
    set_filterEmptyAxis: function PPSMA_Results$set_filterEmptyAxis(value) {ULSM53:;
        this._filterEmptyAxis$p$0 = value;
        return value;
    },
    
    get_sortedAxes: function PPSMA_Results$get_sortedAxes() {ULSM53:;
        return this._sortedAxes$p$0;
    },
    set_sortedAxes: function PPSMA_Results$set_sortedAxes(value) {ULSM53:;
        this._sortedAxes$p$0 = value;
        return value;
    },
    
    get_sortTuple: function PPSMA_Results$get_sortTuple() {ULSM53:;
        return this._sortTuple$p$0;
    },
    set_sortTuple: function PPSMA_Results$set_sortTuple(value) {ULSM53:;
        this._sortTuple$p$0 = value;
        return value;
    },
    
    get_sortTypeCol: function PPSMA_Results$get_sortTypeCol() {ULSM53:;
        return this._sortTypeCol$p$0;
    },
    set_sortTypeCol: function PPSMA_Results$set_sortTypeCol(value) {ULSM53:;
        this._sortTypeCol$p$0 = value;
        return value;
    },
    
    get_sortTypeRow: function PPSMA_Results$get_sortTypeRow() {ULSM53:;
        return this._sortTypeRow$p$0;
    },
    set_sortTypeRow: function PPSMA_Results$set_sortTypeRow(value) {ULSM53:;
        this._sortTypeRow$p$0 = value;
        return value;
    },
    
    get_sortColIndex: function PPSMA_Results$get_sortColIndex() {ULSM53:;
        return this._sortColIndex$p$0;
    },
    set_sortColIndex: function PPSMA_Results$set_sortColIndex(value) {ULSM53:;
        this._sortColIndex$p$0 = value;
        return value;
    },
    
    get_sortRowIndex: function PPSMA_Results$get_sortRowIndex() {ULSM53:;
        return this._sortRowIndex$p$0;
    },
    set_sortRowIndex: function PPSMA_Results$set_sortRowIndex(value) {ULSM53:;
        this._sortRowIndex$p$0 = value;
        return value;
    },
    
    get_unknownFilterParameters: function PPSMA_Results$get_unknownFilterParameters() {ULSM53:;
        return this._unknownFilterParameters$p$0;
    },
    set_unknownFilterParameters: function PPSMA_Results$set_unknownFilterParameters(value) {ULSM53:;
        this._unknownFilterParameters$p$0 = value;
        return value;
    },
    
    get_valueFilterCol: function PPSMA_Results$get_valueFilterCol() {ULSM53:;
        return this._valueFilterCol$p$0;
    },
    set_valueFilterCol: function PPSMA_Results$set_valueFilterCol(value) {ULSM53:;
        this._valueFilterCol$p$0 = value;
        return value;
    },
    
    get_valueFilterRow: function PPSMA_Results$get_valueFilterRow() {ULSM53:;
        return this._valueFilterRow$p$0;
    },
    set_valueFilterRow: function PPSMA_Results$set_valueFilterRow(value) {ULSM53:;
        this._valueFilterRow$p$0 = value;
        return value;
    },
    
    get_valueFilterParamsCol: function PPSMA_Results$get_valueFilterParamsCol() {ULSM53:;
        return this._valueFilterParamsCol$p$0;
    },
    set_valueFilterParamsCol: function PPSMA_Results$set_valueFilterParamsCol(value) {ULSM53:;
        this._valueFilterParamsCol$p$0 = value;
        return value;
    },
    
    get_valueFilterParamsRow: function PPSMA_Results$get_valueFilterParamsRow() {ULSM53:;
        return this._valueFilterParamsRow$p$0;
    },
    set_valueFilterParamsRow: function PPSMA_Results$set_valueFilterParamsRow(value) {ULSM53:;
        this._valueFilterParamsRow$p$0 = value;
        return value;
    },
    
    get_topFilterCol: function PPSMA_Results$get_topFilterCol() {ULSM53:;
        return this._topFilterCol$p$0;
    },
    set_topFilterCol: function PPSMA_Results$set_topFilterCol(value) {ULSM53:;
        this._topFilterCol$p$0 = value;
        return value;
    },
    
    get_topFilterRow: function PPSMA_Results$get_topFilterRow() {ULSM53:;
        return this._topFilterRow$p$0;
    },
    set_topFilterRow: function PPSMA_Results$set_topFilterRow(value) {ULSM53:;
        this._topFilterRow$p$0 = value;
        return value;
    },
    
    createRowMembers: function PPSMA_Results$createRowMembers(hierarchyCount) {ULSM53:;
        this._rowHierarchyCount$p$0 = hierarchyCount;
        this._rowHierarchies$p$0 = new Array(hierarchyCount);
        this._rowMembers$p$0 = new Array(this._rowCount$p$0);
        for (var i = 0; i < this._rowCount$p$0; i++) {
            this._rowMembers$p$0[i] = new Array(this._rowHierarchyCount$p$0);
        }
        return this._rowMembers$p$0;
    },
    
    createColumnMembers: function PPSMA_Results$createColumnMembers(hierarchyCount) {ULSM53:;
        this._columnHierarchyCount$p$0 = hierarchyCount;
        this._columnHierarchies$p$0 = new Array(hierarchyCount);
        this._columnMembers$p$0 = new Array(this._columnCount$p$0);
        for (var i = 0; i < this._columnCount$p$0; i++) {
            this._columnMembers$p$0[i] = new Array(this._columnHierarchyCount$p$0);
        }
        return this._columnMembers$p$0;
    },
    
    createFilterMembers: function PPSMA_Results$createFilterMembers(hierarchyCount) {ULSM53:;
        this._filterHierarchyCount$p$0 = hierarchyCount;
        this._filterHierarchies$p$0 = new Array(hierarchyCount);
        this._filterMembers$p$0 = new Array(this._filterHierarchyCount$p$0);
        return this._filterMembers$p$0;
    }
}


PPSMA.Member = function PPSMA_Member(id, name, cap, lName, lNum, hasP, hasC, dd) {ULSM53:;
    this._id$p$0 = id;
    this._name$p$0 = name;
    this._caption$p$0 = cap;
    this._levelName$p$0 = lName;
    this._levelNumber$p$0 = lNum;
    this._hasParent$p$0 = hasP;
    this._hasChildren$p$0 = hasC;
    this._drilledDown$p$0 = dd;
}
PPSMA.Member.prototype = {
    _id$p$0: null,
    _name$p$0: null,
    _caption$p$0: null,
    _levelName$p$0: null,
    _levelNumber$p$0: 0,
    _hasParent$p$0: false,
    _hasChildren$p$0: false,
    _drilledDown$p$0: false,
    
    get_id: function PPSMA_Member$get_id() {ULSM53:;
        return this._id$p$0;
    },
    
    get_name: function PPSMA_Member$get_name() {ULSM53:;
        return this._name$p$0;
    },
    
    get_caption: function PPSMA_Member$get_caption() {ULSM53:;
        return this._caption$p$0;
    },
    
    get_levelName: function PPSMA_Member$get_levelName() {ULSM53:;
        return this._levelName$p$0;
    },
    
    get_levelNumber: function PPSMA_Member$get_levelNumber() {ULSM53:;
        return this._levelNumber$p$0;
    },
    
    get_hasParent: function PPSMA_Member$get_hasParent() {ULSM53:;
        return this._hasParent$p$0;
    },
    
    get_hasChildren: function PPSMA_Member$get_hasChildren() {ULSM53:;
        return this._hasChildren$p$0;
    },
    
    get_drilledDown: function PPSMA_Member$get_drilledDown() {ULSM53:;
        return this._drilledDown$p$0;
    },
    set_drilledDown: function PPSMA_Member$set_drilledDown(value) {ULSM53:;
        this._drilledDown$p$0 = value;
        return value;
    }
}


PPSMA.ReportsCommon = function PPSMA_ReportsCommon() {
}
PPSMA.ReportsCommon.getCellTypeId = function PPSMA_ReportsCommon$getCellTypeId(currCell) {ULSM53:;
    var cellType = '\u0000';
    if (currCell) {
        var cellId = currCell.getAttribute('id');
        if (cellId && cellId.length >= 5) {
            var first_char = cellId.charAt(0);
            switch (first_char) {
                case 'R':
                case 'C':
                case 'D':
                case 'P':
                case 'Z':
                case 'Y':
                    cellType = first_char;
                    break;
            }
        }
    }
    return cellType;
}
PPSMA.ReportsCommon.logErrorCondition = function PPSMA_ReportsCommon$logErrorCondition(msg) {
}
PPSMA.ReportsCommon.getHeaderCellHierarchy = function PPSMA_ReportsCommon$getHeaderCellHierarchy(olapViewContext, currCell) {ULSM53:;
    var hier = null;
    if (currCell) {
        var rowPos = PPSMA.ReportsCommon.getCellRowPosition(currCell);
        var colPos = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
        if ((rowPos !== -1) && (colPos !== -1)) {
            var cellTypeId = PPSMA.ReportsCommon.getCellTypeId(currCell);
            var rowHiers;
            switch (cellTypeId) {
                case 'Z':
                case 'Y':
                    rowHiers = olapViewContext.get_results().get_rowHierarchies();
                    hier = rowHiers[rowPos];
                    break;
                case 'R':
                    rowHiers = olapViewContext.get_results().get_rowHierarchies();
                    hier = rowHiers[colPos];
                    break;
                case 'C':
                    var colHiers = olapViewContext.get_results().get_columnHierarchies();
                    hier = colHiers[rowPos];
                    break;
                case 'D':
                case 'P':
                    break;
            }
        }
    }
    return hier;
}
PPSMA.ReportsCommon.getCellRowPosition = function PPSMA_ReportsCommon$getCellRowPosition(currCell) {ULSM53:;
    var rowPos = -1;
    if (currCell) {
        var cellId = currCell.getAttribute('id');
        if (cellId && cellId.length >= 5) {
            var rowMatches = cellId.match(new RegExp('R[0-9]+', 'g'));
            if (rowMatches && rowMatches.length >= 1) {
                var rowPosStr = rowMatches[0];
                if (rowPosStr.length >= 1) {
                    rowPos = parseInt(rowPosStr.substring(1, rowPosStr.length));
                }
            }
        }
    }
    return rowPos;
}
PPSMA.ReportsCommon.getSortedCellColumnPosition = function PPSMA_ReportsCommon$getSortedCellColumnPosition(currCell) {ULSM53:;
    var cellTypeId = PPSMA.ReportsCommon.getCellTypeId(currCell);
    var cIndex = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
    if (cellTypeId === 'C') {
        var tce = currCell;
        cIndex = cIndex - (tce.colSpan - 1);
    }
    return cIndex;
}
PPSMA.ReportsCommon.getCellColumnPosition = function PPSMA_ReportsCommon$getCellColumnPosition(currCell) {ULSM53:;
    var colPos = -1;
    if (currCell) {
        var cellId = currCell.getAttribute('id');
        if (cellId && cellId.length >= 5) {
            var colMatches = cellId.match(new RegExp('C[0-9]+', 'g'));
            if (colMatches && colMatches.length >= 1) {
                var colPosStr = colMatches[0];
                if (colPosStr.length >= 1) {
                    colPos = parseInt(colPosStr.substring(1, colPosStr.length));
                }
            }
        }
    }
    return colPos;
}


PPSMA.DialogsCommon = function PPSMA_DialogsCommon() {
}
PPSMA.DialogsCommon.addDialogResizeEventHandlers = function PPSMA_DialogsCommon$addDialogResizeEventHandlers(windowResizeHandler, resizeImgLnkClickHandler) {ULSM53:;
    try {
        if (windowResizeHandler) {
            $addHandler(window, 'resize', windowResizeHandler);
        }
    }
    catch ($$e_2) {
        return false;
    }
    var allAnchors = document.getElementsByTagName('a');
    if (!allAnchors) {
        return false;
    }
    for (var i = 0; i < allAnchors.length; i++) {
        var elem = allAnchors[i];
        if ((PPSMA.DomElementEx.tagsMatch(elem.tagName, 'a')) && elem.className === PPSMA.DialogsCommon._dlgResizeClass$p && resizeImgLnkClickHandler) {
            $addHandler(elem, 'click', resizeImgLnkClickHandler);
            return true;
        }
    }
    return false;
}
PPSMA.DialogsCommon.removeWindowResizeEventHandler = function PPSMA_DialogsCommon$removeWindowResizeEventHandler(windowResizeHandler) {ULSM53:;
    try {
        $removeHandler(window, 'resize', windowResizeHandler);
        return true;
    }
    catch ($$e_1) {
        return false;
    }
}
PPSMA.DialogsCommon.getDlgFrameContainerDiv = function PPSMA_DialogsCommon$getDlgFrameContainerDiv() {ULSM53:;
    var haystack = document.getElementsByTagName('div');
    for (var i = 0; i < haystack.length; i++) {
        var needle = haystack[i];
        if (Sys.UI.DomElement.containsCssClass(needle, 'ms-dlgframecontainer') || Sys.UI.DomElement.containsCssClass(needle, 'ms-dlgFrameContainer')) {
            return needle;
        }
    }
    return null;
}
PPSMA.DialogsCommon.getDlgTitleDiv = function PPSMA_DialogsCommon$getDlgTitleDiv() {ULSM53:;
    var haystack = document.getElementsByTagName('div');
    for (var i = 0; i < haystack.length; i++) {
        var needle = haystack[i];
        if (Sys.UI.DomElement.containsCssClass(needle, 'ms-dlgtitle') || Sys.UI.DomElement.containsCssClass(needle, 'ms-dlgTitle')) {
            return needle;
        }
    }
    return null;
}


PPSMA.ContextMenu = function PPSMA_ContextMenu() {
}
PPSMA.ContextMenu.createForReportsNScorecards = function PPSMA_ContextMenu$createForReportsNScorecards(currItem, ctxObject, xOffset, yOffset, isInPulpit) {ULSM53:;
    if (isNaN(xOffset)) {
        xOffset = 0;
    }
    if (isNaN(yOffset)) {
        yOffset = 0;
    }
    var isInToolbar = (!!currItem && PPSMA.DomElementEx.tagsMatch(currItem.tagName, 'a') && currItem.id.startsWith(PPSMA.ContextMenu._toolBarPrefix$p));
    if (PPSMA.ContextMenu.isMenuOn() && PPSMA.ContextMenu.get_menuType() !== 'tooltip') {
        return false;
    }
    PPSMA.ContextMenu._resetExecState$p();
    if (!currItem || (PPSMA.DomElementEx.tagsMatch(currItem.tagName, 'a') && !isInPulpit && !isInToolbar)) {
        return false;
    }
    return PPSMA.ContextMenu._createMenu$p(currItem, ctxObject, xOffset, yOffset, 'menu');
}
PPSMA.ContextMenu.createForParameterTree = function PPSMA_ContextMenu$createForParameterTree(currItem, apmid, xOffset, yOffset) {ULSM53:;
    if (PPSMA.ContextMenu.isMenuOn() && PPSMA.ContextMenu.get_menuType() !== 'tooltip') {
        return false;
    }
    PPSMA.ContextMenu._resetExecState$p();
    return PPSMA.ContextMenu._createMenuForParameterTree$p(currItem, apmid, xOffset, yOffset, 'menu');
}
PPSMA.ContextMenu.createTooltip = function PPSMA_ContextMenu$createTooltip(currItem, ctxObject, xOffset, yOffset) {ULSM53:;
    if (PPSMA.ContextMenu.isMenuOn() && PPSMA.ContextMenu.get_menuType() !== 'tooltip') {
        return false;
    }
    PPSMA.ContextMenu._resetExecState$p();
    return PPSMA.ContextMenu._createMenu$p(currItem, ctxObject, xOffset, yOffset, 'tooltip');
}
PPSMA.ContextMenu.get_menuType = function PPSMA_ContextMenu$get_menuType() {ULSM53:;
    return PPSMA.Menu.GetType(PPSMA.ContextMenu._currMenu);
}
PPSMA.ContextMenu.isMenuOn = function PPSMA_ContextMenu$isMenuOn() {ULSM53:;
    return PPSMA.Menu.IsOpen(PPSMA.ContextMenu._currMenu);
}
PPSMA.ContextMenu.addMenuSeparator = function PPSMA_ContextMenu$addMenuSeparator(p) {ULSM53:;
    var ms = PPSMA.ContextMenu._createMenuSeparator$p();
    if (!ms) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, ms);
    return ms;
}
PPSMA.ContextMenu.addSubMenu = function PPSMA_ContextMenu$addSubMenu(p, caption, imgUrl, indent) {ULSM53:;
    var sm = PPSMA.ContextMenu._createSubMenu$p(caption, null, null, null, imgUrl, indent);
    if (!sm) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, sm);
    return sm;
}
PPSMA.ContextMenu.addDynamicSubMenu = function PPSMA_ContextMenu$addDynamicSubMenu(p, caption, fetchFunction, populateFunction, hoverOffFunction, indent) {ULSM53:;
    var sm = PPSMA.ContextMenu._createSubMenu$p(caption, fetchFunction, populateFunction, hoverOffFunction, null, indent);
    if (!sm) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, sm);
    return sm;
}
PPSMA.ContextMenu.addToggleMenuOption = function PPSMA_ContextMenu$addToggleMenuOption(p, caption, eventFunction, imageUrl, altText, selected, indent) {ULSM53:;
    var mo = PPSMA.ContextMenu._createMenuOption$p(caption, eventFunction, imageUrl, altText, selected, true, indent);
    if (!mo) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, mo);
    return mo;
}
PPSMA.ContextMenu.addMenuOption = function PPSMA_ContextMenu$addMenuOption(p, caption, eventFunction, imageUrl, altText, selected, indent) {ULSM53:;
    var mo = PPSMA.ContextMenu._createMenuOption$p(caption, eventFunction, imageUrl, altText, selected, false, indent);
    if (!mo) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, mo);
    return mo;
}
PPSMA.ContextMenu.addDisabledMenuOption = function PPSMA_ContextMenu$addDisabledMenuOption(p, caption, eventFunction, imageUrl, indent) {ULSM53:;
    var mo = PPSMA.ContextMenu._createDisabledMenuOption$p(caption, imageUrl, '', indent);
    if (!mo) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, mo);
    return mo;
}
PPSMA.ContextMenu.addMenuItem = function PPSMA_ContextMenu$addMenuItem(p, type) {ULSM53:;
    var mo = PPSMA.ContextMenu._createMenuItem$p(type);
    if (!mo) {
        return null;
    }
    PPSMA.ContextMenu._addChildToParent$p(p, mo);
    return mo;
}
PPSMA.ContextMenu.removeAllButFirst = function PPSMA_ContextMenu$removeAllButFirst(p) {ULSM53:;
    while (p.childNodes.length > 1) {
        p.removeChild(p.lastChild);
    }
}
PPSMA.ContextMenu.refreshMenu = function PPSMA_ContextMenu$refreshMenu(currentMenu, force) {ULSM53:;
    if (PPSMA.ContextMenu.isMenuOn()) {
        PPSMA.Menu.Refresh(PPSMA.ContextMenu._currMenu, currentMenu, force);
    }
}
PPSMA.ContextMenu.neutralizeBrowserMenu = function PPSMA_ContextMenu$neutralizeBrowserMenu(e) {ULSM53:;
    e.rawEvent.cancelBubble = true;
    e.rawEvent.returnValue = false;
    e.preventDefault();
    e.stopPropagation();
}
PPSMA.ContextMenu._resetExecState$p = function PPSMA_ContextMenu$_resetExecState$p() {ULSM53:;
    PPSMA.ContextMenu._currMenu = null;
    PPSMA.ContextMenu._currItem = null;
}
PPSMA.ContextMenu._createMenu$p = function PPSMA_ContextMenu$_createMenu$p(tag, ctxObject, xOffset, yOffset, menuType) {ULSM53:;
    if (PPSMA.DomElementEx.tagsMatch(tag.tagName, 'span')) {
        PPSMA.ContextMenu._currItem = tag.parentNode;
    }
    else if (PPSMA.DomElementEx.tagsMatch(tag.tagName, 'strong')) {
        PPSMA.ContextMenu._currItem = tag.parentNode.parentNode;
    }
    else {
        PPSMA.ContextMenu._currItem = tag;
    }
    var itemID = PPSMA.ContextMenu._currItem.getAttribute('ID');
    PPSMA.ContextMenu._currMenu = PPSMA.ContextMenu._createMenuElement$p(itemID + '_' + menuType, menuType);
    if (!ctxObject.addPrimaryMenuItems(PPSMA.ContextMenu._currMenu)) {
        PPSMA.ContextMenu._resetExecState$p();
        return false;
    }
    PPSMA.ContextMenu._openMenu$p(PPSMA.ContextMenu._currMenu, PPSMA.ContextMenu._currItem, true, false, xOffset, yOffset);
    return true;
}
PPSMA.ContextMenu._createMenuForParameterTree$p = function PPSMA_ContextMenu$_createMenuForParameterTree$p(tag, apmid, xOffset, yOffset, menuType) {ULSM53:;
    PPSMA.ContextMenu._currItem = tag;
    PPSMA.ContextMenu._currMenu = PPSMA.ContextMenu._createMenuElement$p(PPSMA.ContextMenu._currItem.id + '_' + menuType, menuType);
    if (!apmid(PPSMA.ContextMenu._currMenu, PPSMA.ContextMenu._currItem)) {
        PPSMA.ContextMenu._resetExecState$p();
        return false;
    }
    PPSMA.ContextMenu._openMenu$p(PPSMA.ContextMenu._currMenu, PPSMA.ContextMenu._currItem, true, false, xOffset, yOffset);
    return true;
}
PPSMA.ContextMenu._openMenu$p = function PPSMA_ContextMenu$_openMenu$p(m, r, fr, ft, xoff, yoff) {ULSM53:;
    if (m) {
        if (!PPSMA.Menu.IsOpen(m)) {
            PPSMA.Menu.Show(m, r, fr, ft, xoff, yoff);
        }
    }
}
PPSMA.ContextMenu._addImageToMenuItem$p = function PPSMA_ContextMenu$_addImageToMenuItem$p(mi, src, alt) {ULSM53:;
    if (!mi) {
        return;
    }
    if (!isNullOrEmpty(src)) {
        mi.setAttribute('iconSrc', src);
    }
    if (!isNullOrEmpty(alt)) {
        mi.setAttribute('iconAltText', alt);
    }
}
PPSMA.ContextMenu._addChildToParent$p = function PPSMA_ContextMenu$_addChildToParent$p(p, c) {ULSM53:;
    if (p && c) {
        p.appendChild(c);
    }
}
PPSMA.ContextMenu._createMenuElement$p = function PPSMA_ContextMenu$_createMenuElement$p(id, type) {ULSM53:;
    var m = $get(id);
    if (m) {
        m._initialized = false;
        m._oContents = null;
        m.innerHTML = '';
        return m;
    }
    m = document.createElement('MENU');
    if (!m) {
        return null;
    }
    if (!isNullOrEmpty(id)) {
        m.id = id;
    }
    m.className = 'bsm-SrvMenuUI';
    m._menuType = type;
    PPSMA.ContextMenu._addChildToParent$p(document.body, m);
    return m;
}
PPSMA.ContextMenu._createMenuOption$p = function PPSMA_ContextMenu$_createMenuOption$p(text, act, src, alt, selected, toggle, indent) {ULSM53:;
    var mo = PPSMA.ContextMenu._createMenuItem$p('option');
    if (!mo) {
        return null;
    }
    PPSMA.DomElementEx.setInnerText(mo, text);
    if (indent) {
        mo.setAttribute('indent', 'true');
    }
    var handler = act;
    if (selected && !isNullOrEmpty(src)) {
        mo.setAttribute('selected', 'true');
        if (!toggle) {
            handler = '';
        }
    }
    mo.setAttribute('onMenuClick', handler);
    PPSMA.ContextMenu._addImageToMenuItem$p(mo, src, alt);
    return mo;
}
PPSMA.ContextMenu._createDisabledMenuOption$p = function PPSMA_ContextMenu$_createDisabledMenuOption$p(text, src, alt, indent) {ULSM53:;
    var mo = PPSMA.ContextMenu._createMenuItem$p('option');
    if (!mo) {
        return null;
    }
    PPSMA.DomElementEx.setInnerText(mo, text);
    mo.setAttribute('enabled', 'false');
    if (indent) {
        mo.setAttribute('indent', 'true');
    }
    PPSMA.ContextMenu._addImageToMenuItem$p(mo, src, alt);
    return mo;
}
PPSMA.ContextMenu._createMenuSeparator$p = function PPSMA_ContextMenu$_createMenuSeparator$p() {ULSM53:;
    var sep = PPSMA.ContextMenu._createMenuItem$p('separator');
    PPSMA.DomElementEx.setInnerText(sep, '');
    return sep;
}
PPSMA.ContextMenu._createMenuItem$p = function PPSMA_ContextMenu$_createMenuItem$p(type) {ULSM53:;
    var mi = document.createElement('SPAN');
    if (!mi) {
        return null;
    }
    mi.setAttribute('type', type);
    return mi;
}
PPSMA.ContextMenu._createSubMenu$p = function PPSMA_ContextMenu$_createSubMenu$p(text, fetch, populate, hoveroff, src, indent) {ULSM53:;
    var sm = PPSMA.ContextMenu._createMenuItem$p('submenu');
    if (!sm) {
        return null;
    }
    if (indent) {
        sm.setAttribute('indent', 'true');
    }
    PPSMA.ContextMenu._addImageToMenuItem$p(sm, src, null);
    if (!isNullOrEmpty(fetch)) {
        sm.setAttribute('onfetch', fetch);
    }
    if (!isNullOrEmpty(populate)) {
        sm.setAttribute('onpopulate', populate);
    }
    if (!isNullOrEmpty(hoveroff)) {
        sm.setAttribute('onhoveroff', hoveroff);
    }
    var label = PPSMA.ContextMenu._createMenuLabel$p(text);
    PPSMA.ContextMenu._addChildToParent$p(sm, label);
    return sm;
}
PPSMA.ContextMenu._createMenuLabel$p = function PPSMA_ContextMenu$_createMenuLabel$p(text) {ULSM53:;
    var l = PPSMA.ContextMenu._createMenuItem$p('label');
    if (!l) {
        return null;
    }
    PPSMA.DomElementEx.setInnerText(l, text);
    return l;
}




PPSMA.ShowProperties = function PPSMA_ShowProperties(viewCtxName, olapViewContext) {ULSM53:;
    this.$$d__closeDialog$p$0 = Function.createDelegate(this, this._closeDialog$p$0);
    this.$$d_inputClick = Function.createDelegate(this, this.inputClick);
    this.$$d_cancel = Function.createDelegate(this, this.cancel);
    this.$$d_apply = Function.createDelegate(this, this.apply);
    this.$$d_selectAll = Function.createDelegate(this, this.selectAll);
    this.$$d__handleResizeLinkClick$p$0 = Function.createDelegate(this, this._handleResizeLinkClick$p$0);
    this.$$d__handleWindowResize$p$0 = Function.createDelegate(this, this._handleWindowResize$p$0);
    this.$$d__populateDimensionPropertiesList$p$0 = Function.createDelegate(this, this._populateDimensionPropertiesList$p$0);
    this._viewCtxName$0 = viewCtxName;
    this._olapViewContext$0 = olapViewContext;
    this._showPropertiesCell$0 = null;
    this._memberPropertyCount$0 = -1;
}
PPSMA.ShowProperties.prototype = {
    _viewCtxName$0: null,
    _olapViewContext$0: null,
    _showPropertiesCell$0: null,
    _memberPropertyCount$0: 0,
    _selectedHierarchyName$0: null,
    _showPropertiesCheckedList$0: null,
    _spDialog$0: null,
    _callbackMethod$0: null,
    _windowResizeHandler$0: null,
    _selectedButton$0: null,
    
    get_selectedButton: function PPSMA_ShowProperties$get_selectedButton() {ULSM53:;
        return this._selectedButton$0;
    },
    
    setCallbackMethod: function PPSMA_ShowProperties$setCallbackMethod(callback) {ULSM53:;
        this._callbackMethod$0 = callback;
    },
    
    show: function PPSMA_ShowProperties$show(currCell) {ULSM53:;
        this._showPropertiesCell$0 = currCell;
        this._initializeShowPropertiesBox$p$0();
        this._populateShowPropertiesBox$p$0();
        this._addPropertyBoxDomEventHandlers$p$0();
    },
    
    getTotalMemberPropertyCount: function PPSMA_ShowProperties$getTotalMemberPropertyCount() {ULSM53:;
        if (this._memberPropertyCount$0 === -1) {
            this._memberPropertyCount$0 = 0;
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            if (rowHiers) {
                for (var i = 0; i < rowHiers.length; i++) {
                    var rowHiersName = rowHiers[i].get_name();
                    var memberProperties = this._getQueryMemberProperties$p$0(rowHiersName);
                    this._memberPropertyCount$0 += memberProperties.get_count();
                }
            }
        }
        return this._memberPropertyCount$0;
    },
    
    isEnabled: function PPSMA_ShowProperties$isEnabled(currCell) {ULSM53:;
        var selectedHierarchy = this._getSelectedHierarchy$p$0(currCell);
        if (!selectedHierarchy) {
            return true;
        }
        if (selectedHierarchy.get_name() === this._olapViewContext$0.get_measureHierarchyName()) {
            return false;
        }
        else {
            return true;
        }
    },
    
    _populateShowPropertiesBox$p$0: function PPSMA_ShowProperties$_populateShowPropertiesBox$p$0() {ULSM53:;
        var selectedHierarchy = this._getSelectedHierarchy$p$0(this._showPropertiesCell$0);
        if (selectedHierarchy) {
            this._selectedHierarchyName$0 = selectedHierarchy.get_name();
            if (!this._olapViewContext$0.getDimensionPropertiesList(selectedHierarchy.get_name())) {
                this._olapViewContext$0.getDimensionProperties(this._getSelectedMemberXml$p$0(), this.$$d__populateDimensionPropertiesList$p$0);
            }
            else {
                this._populateDimensionPropertiesList$p$0(true);
            }
        }
    },
    
    _populateDimensionPropertiesList$p$0: function PPSMA_ShowProperties$_populateDimensionPropertiesList$p$0(success) {ULSM53:;
        if ((this._olapViewContext$0.get_dimensionData()) && success) {
            if (this._addDimensionPropertiesToList$p$0()) {
                this._setPropertyCheckBoxes$p$0();
                this.setInitialFocus();
                this._olapViewContext$0.notifyBrowserOfAsyncUpdate($get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDShowPropertiesMain$p));
            }
            else {
                this._spDialog$0.close(0);
            }
        }
        else {
            this._olapViewContext$0.getDimensionProperties(this._getSelectedMemberXml$p$0(), this.$$d__populateDimensionPropertiesList$p$0);
        }
    },
    
    setInitialFocus: function PPSMA_ShowProperties$setInitialFocus() {ULSM53:;
        var dimPropertiesFieldSet = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        if ((dimPropertiesFieldSet) && (dimPropertiesFieldSet.firstChild) && (dimPropertiesFieldSet.firstChild.firstChild)) {
            dimPropertiesFieldSet.firstChild.firstChild.focus();
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('ShowProperties: can\'t set initial focus.');
        }
    },
    
    inputClick: function PPSMA_ShowProperties$inputClick(e) {ULSM53:;
        var DimPropertiesElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        var inputCollection = DimPropertiesElem.getElementsByTagName('input');
        var selectedHierarchyName = this._getSelectedHierarchy$p$0(this._showPropertiesCell$0).get_name();
        var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(selectedHierarchyName);
        var dimPropertiesChecked = dimProperties.get_checked();
        var srcElem = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
        if (srcElem.className === PPSMA.ShowProperties._classCheckBox$p) {
            var id = srcElem.id;
            var index = parseInt(id.substr((this._olapViewContext$0.get_ctrlProxyId().length + PPSMA.ShowProperties._divIDCheckBox$p.length), id.length));
            (inputCollection[index]).checked = !(inputCollection[index]).checked;
        }
        else if (srcElem.className === PPSMA.ShowProperties._classCheckBoxLabel$p) {
            var id = srcElem.id;
            var index = parseInt(id.substr((this._olapViewContext$0.get_ctrlProxyId().length + PPSMA.ShowProperties._divIDLabelCheckBox$p.length), id.length));
            (inputCollection[index]).checked = !(inputCollection[index]).checked;
        }
        for (var i = 0; i < inputCollection.length; ++i) {
            var inputElem = inputCollection[i];
            if (!inputElem.checked) {
                dimPropertiesChecked[i] = false;
            }
            else {
                dimPropertiesChecked[i] = true;
            }
        }
    },
    
    selectAll: function PPSMA_ShowProperties$selectAll(e) {ULSM53:;
        var DimPropertiesElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        var inputCollection = DimPropertiesElem.getElementsByTagName('input');
        var selectAllElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectAll$p);
        var selectedHierarchyName = this._getSelectedHierarchy$p$0(this._showPropertiesCell$0).get_name();
        var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(selectedHierarchyName);
        var dimPropertiesChecked = dimProperties.get_checked();
        for (var i = 0; i < inputCollection.length; ++i) {
            var inputElem = inputCollection[i];
            if (inputElem.checked !== selectAllElem.checked) {
                inputElem.checked = selectAllElem.checked;
                dimPropertiesChecked[i] = selectAllElem.checked;
            }
        }
    },
    
    handleHidePropertyMenuClick: function PPSMA_ShowProperties$handleHidePropertyMenuClick(hierName, propertyName) {ULSM53:;
        if (!this.get__canNavigate$p$0()) {
            return;
        }
        var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(hierName);
        if (dimProperties) {
            var dimPropertiesNames = dimProperties.get_names();
            var dimPropertiesChecked = dimProperties.get_checked();
            for (var i = 0; i < dimProperties.get_count(); i++) {
                if ((dimPropertiesNames[i] === propertyName) && (dimPropertiesChecked[i])) {
                    dimPropertiesChecked[i] = false;
                    break;
                }
            }
        }
        else {
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            for (var i = 0; i < rowHiers.length; i++) {
                var rowHier = rowHiers[i];
                if (rowHier.get_name() === hierName) {
                    var memberProperties = rowHier.get_memberProperties();
                    if (memberProperties) {
                        memberProperties.hide(propertyName);
                        break;
                    }
                }
            }
        }
        this._olapViewContext$0.applyDimensionProperties();
    },
    
    apply: function PPSMA_ShowProperties$apply(e) {ULSM53:;
        var rh = this._getSelectedHierarchy$p$0(this._showPropertiesCell$0);
        if (!rh || isNullUndefinedOrEmpty(rh.get_name()) || !this._isDirtyMemberProperties$p$0(rh.get_name())) {
            this._spDialog$0.close(0);
            return;
        }
        var elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDShowPropertiesMain$p);
        elem.style.display = 'none';
        var dimPropertiesElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        var collection = dimPropertiesElem.getElementsByTagName('input');
        var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(rh.get_name());
        if (dimProperties) {
            var dimPropertiesChecked = dimProperties.get_checked();
            for (var i = 0; i < collection.length; ++i) {
                var el = collection[i];
                dimPropertiesChecked[i] = el.checked;
            }
            var selectAllElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectAll$p);
            dimPropertiesChecked[dimProperties.get_count()] = selectAllElem.checked;
        }
        this._olapViewContext$0.applyDimensionProperties();
        this._spDialog$0.close(SP.UI.DialogResult.OK);
    },
    
    cancel: function PPSMA_ShowProperties$cancel(e) {ULSM53:;
        this._spDialog$0.close(0);
    },
    
    _closeDialog$p$0: function PPSMA_ShowProperties$_closeDialog$p$0(result, param) {ULSM53:;
        this._selectedButton$0 = PPSMA.ShowProperties._okBtn$p;
        if (!result) {
            this._selectedButton$0 = PPSMA.ShowProperties._cancelBtn$p;
            var rh = this._getSelectedHierarchy$p$0(this._showPropertiesCell$0);
            if (rh && !isNullUndefinedOrEmpty(rh.get_name())) {
                this._revertMemberPropertySelections$p$0(rh.get_name());
            }
        }
        this._removePropertyBoxDomEventHandlers$p$0();
        if (this._callbackMethod$0) {
            this._callbackMethod$0();
        }
    },
    
    get__canNavigate$p$0: function PPSMA_ShowProperties$get__canNavigate$p$0() {ULSM53:;
        return this._olapViewContext$0.get_results().get_canNavigate();
    },
    
    _addPropertyBoxDomEventHandlers$p$0: function PPSMA_ShowProperties$_addPropertyBoxDomEventHandlers$p$0() {ULSM53:;
        this._windowResizeHandler$0 = this.$$d__handleWindowResize$p$0;
        if (!PPSMA.DialogsCommon.addDialogResizeEventHandlers(this._windowResizeHandler$0, this.$$d__handleResizeLinkClick$p$0)) {
            PPSMA.ReportsCommon.logErrorCondition('ShowProperties: couldn\'t add the resize event handlers');
        }
        var elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectAll$p);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_selectAll);
        }
        elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDApply$p);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_apply);
        }
        elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCancel$p);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_cancel);
        }
        elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_inputClick);
        }
    },
    
    _removePropertyBoxDomEventHandlers$p$0: function PPSMA_ShowProperties$_removePropertyBoxDomEventHandlers$p$0() {ULSM53:;
        if (!PPSMA.DialogsCommon.removeWindowResizeEventHandler(this._windowResizeHandler$0)) {
            PPSMA.ReportsCommon.logErrorCondition('ShowProperties: couldn\'t remove the resize event handlers');
        }
        this._windowResizeHandler$0 = null;
    },
    
    _handleWindowResize$p$0: function PPSMA_ShowProperties$_handleWindowResize$p$0(e) {
    },
    
    _handleResizeLinkClick$p$0: function PPSMA_ShowProperties$_handleResizeLinkClick$p$0(e) {
    },
    
    _getSelectedHierarchy$p$0: function PPSMA_ShowProperties$_getSelectedHierarchy$p$0(currCell) {ULSM53:;
        var cellId = PPSMA.ReportsCommon.getCellTypeId(currCell);
        var selectedHierarchy = null;
        if ((cellId === 'R') || (cellId === 'Z') || (cellId === 'Y')) {
            selectedHierarchy = PPSMA.ReportsCommon.getHeaderCellHierarchy(this._olapViewContext$0, currCell);
        }
        else if (cellId === 'P') {
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            var colPos = PPSMA.ReportsCommon.getCellColumnPosition(currCell);
            selectedHierarchy = rowHiers[colPos];
        }
        return selectedHierarchy;
    },
    
    _initializeShowPropertiesBox$p$0: function PPSMA_ShowProperties$_initializeShowPropertiesBox$p$0() {ULSM53:;
        var proxyid = this._olapViewContext$0.get_ctrlProxyId();
        var showPropertiesDiv = document.createElement('div');
        showPropertiesDiv.id = proxyid + PPSMA.ShowProperties._divIDShowPropertiesMain$p;
        showPropertiesDiv.className = PPSMA.ShowProperties._classShowPropertiesDiv$p;
        document.body.appendChild(showPropertiesDiv);
        var selectedDimDiv = document.createElement('div');
        selectedDimDiv.id = proxyid + PPSMA.ShowProperties._divIDSelectedHierArea$p;
        selectedDimDiv.className = PPSMA.ShowProperties._classSelectedMember$p;
        var selectedDimSpan = document.createElement('span');
        selectedDimSpan.id = proxyid + PPSMA.ShowProperties._divIDSelectedHierSpan$p;
        selectedDimDiv.appendChild(selectedDimSpan);
        showPropertiesDiv.appendChild(selectedDimDiv);
        var checkboxFieldSetDiv = document.createElement('div');
        checkboxFieldSetDiv.id = proxyid + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p;
        checkboxFieldSetDiv.className = PPSMA.ShowProperties._classCheckBoxList$p;
        showPropertiesDiv.appendChild(checkboxFieldSetDiv);
        var footerDiv = document.createElement('div');
        footerDiv.id = proxyid + PPSMA.ShowProperties._divIDFooter$p;
        footerDiv.className = PPSMA.ShowProperties._classFooter$p;
        showPropertiesDiv.appendChild(footerDiv);
        var selectAllDiv = document.createElement('div');
        selectAllDiv.className = PPSMA.ShowProperties._classSelectAllDiv$p;
        footerDiv.appendChild(selectAllDiv);
        var buttonsDiv = document.createElement('div');
        buttonsDiv.className = PPSMA.ShowProperties._classButtonsDiv$p;
        footerDiv.appendChild(buttonsDiv);
        var cbSelectAll = document.createElement('input');
        cbSelectAll.id = proxyid + PPSMA.ShowProperties._divIDSelectAll$p;
        cbSelectAll.setAttribute('type', 'checkbox');
        cbSelectAll.title = PPSMA.SR.OlapPropertiesDialog_SelectAll;
        selectAllDiv.appendChild(cbSelectAll);
        var lblSelectAll = document.createElement('label');
        lblSelectAll.id = proxyid + PPSMA.ShowProperties._divIDSelectAll$p + 'label';
        lblSelectAll.setAttribute('for', proxyid + PPSMA.ShowProperties._divIDSelectAll$p);
        lblSelectAll.setAttribute('title', PPSMA.SR.OlapPropertiesDialog_SelectAll);
        lblSelectAll.className = PPSMA.ShowProperties._classCheckBoxLabel$p;
        lblSelectAll.innerHTML = PPSMA.SR.OlapPropertiesDialog_SelectAll;
        selectAllDiv.appendChild(lblSelectAll);
        var apply = document.createElement('input');
        apply.id = proxyid + PPSMA.ShowProperties._divIDApply$p;
        Sys.UI.DomElement.addCssClass(apply, PPSMA.ShowProperties._classApplyCustom$p);
        apply.type = 'button';
        buttonsDiv.appendChild(apply);
        apply.value = PPSMA.SR.OlapPropertiesDialog_Apply;
        var cancel = document.createElement('input');
        cancel.id = proxyid + PPSMA.ShowProperties._divIDCancel$p;
        Sys.UI.DomElement.addCssClass(cancel, PPSMA.ShowProperties._classCancelCustom$p);
        cancel.type = 'button';
        buttonsDiv.appendChild(cancel);
        cancel.value = PPSMA.SR.OlapPropertiesDialog_Cancel;
        var parentDiv = document.createElement('div');
        parentDiv.className = PPSMA.ShowProperties._classPositioningParent$p;
        parentDiv.appendChild(showPropertiesDiv);
        var pt = PPSMA.SizeEx.getCenterXandY(PPSMA.ScriptConstants.defaultDialogWidth, PPSMA.ScriptConstants.defaultDialogHeight);
        var opts = new SP.UI.DialogOptions();
        opts.height = PPSMA.ScriptConstants.defaultDialogHeight;
        opts.width = PPSMA.ScriptConstants.defaultDialogWidth;
        opts.title = PPSMA.SR.OlapPropertiesDialog_Title;
        opts.allowMaximize = true;
        opts.html = parentDiv;
        opts.html.innerHTML = parentDiv.innerHTML;
        PPSMA.DomElementEx.removeElement(showPropertiesDiv);
        opts.x = pt.x;
        opts.y = pt.y;
        opts.dialogReturnValueCallback = this.$$d__closeDialog$p$0;
        this._spDialog$0 = SP.UI.ModalDialog.showModalDialog(opts);
    },
    
    _addDimensionPropertiesToList$p$0: function PPSMA_ShowProperties$_addDimensionPropertiesToList$p$0() {ULSM53:;
        var showPropertiesDiv = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDShowPropertiesMain$p);
        var dimProperties;
        var dimPropertiesNames = null;
        var dimPropertiesCaptions = null;
        var dimPropertiesChecked = null;
        var selectedHierarchyCaption;
        if (this._olapViewContext$0.get_dimensionData()) {
            var xdoc = PPSMA.XmlEx.loadXml(this._olapViewContext$0.get_dimensionData());
            var xmlDimPropertiesRootNode = xdoc.getElementsByTagName('DimensionProperties');
            var xmlDimProperties = xdoc.getElementsByTagName('DimProperty');
            selectedHierarchyCaption = xmlDimPropertiesRootNode[0].getAttribute('caption');
            dimProperties = this._olapViewContext$0.addDimensionPropertiesList(this._selectedHierarchyName$0, selectedHierarchyCaption, xmlDimProperties.length);
            dimProperties.set_noPropertiesMessage(xmlDimPropertiesRootNode[0].getAttribute('NoPropertiesMessage'));
            if (xmlDimProperties.length > 0) {
                var memberProperties = this._getQueryMemberProperties$p$0(this._selectedHierarchyName$0);
                var memberPropertyNames = null;
                if (memberProperties) {
                    memberPropertyNames = memberProperties.get_names();
                }
                dimPropertiesNames = dimProperties.get_names();
                dimPropertiesCaptions = dimProperties.get_captions();
                dimPropertiesChecked = dimProperties.get_checked();
                for (var i = 0; i < xmlDimProperties.length; i++) {
                    dimPropertiesNames[i] = xmlDimProperties[i].getAttribute('name');
                    dimPropertiesCaptions[i] = xmlDimProperties[i].getAttribute('caption');
                    if (memberProperties) {
                        for (var j = 0; j < memberProperties.get_count(); j++) {
                            if (memberPropertyNames[j] === dimPropertiesNames[i]) {
                                dimPropertiesChecked[i] = true;
                            }
                        }
                    }
                }
            }
        }
        else {
            dimProperties = this._olapViewContext$0.getDimensionPropertiesList(this._selectedHierarchyName$0);
            selectedHierarchyCaption = dimProperties.get_caption();
            dimPropertiesNames = dimProperties.get_names();
            dimPropertiesCaptions = dimProperties.get_captions();
            dimPropertiesChecked = dimProperties.get_checked();
        }
        var divBody = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p);
        if (dimProperties.get_count() > 0) {
            var hierDiv = PPSMA.DomElementEx.getChildElementById(showPropertiesDiv, this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectedHierArea$p);
            var hierSpan = PPSMA.DomElementEx.getChildElementById(hierDiv, this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectedHierSpan$p);
            hierSpan.innerHTML = String.format(PPSMA.SR.OlapPropertiesDialog_PropertiesCaption, selectedHierarchyCaption);
            var numSelected = 0;
            this._showPropertiesCheckedList$0 = new Array(dimProperties.get_count() + 1);
            for (var i = 0; i < dimProperties.get_count(); i++) {
                var inputid = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDInputCheckBox$p + i;
                var divid = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDCheckBox$p + i;
                var labelid = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDLabelCheckBox$p + i;
                var cbdiv = document.createElement('div');
                var cbinput = document.createElement('input');
                var cblabel = document.createElement('label');
                cbdiv.id = divid;
                cbdiv.className = PPSMA.ShowProperties._classCheckBox$p;
                cbinput.setAttribute('type', 'checkbox');
                cbinput.setAttribute('title', dimPropertiesCaptions[i]);
                cbinput.setAttribute('value', dimPropertiesNames[i]);
                cbinput.setAttribute('id', inputid);
                cblabel.setAttribute('for', inputid);
                cblabel.setAttribute('title', dimPropertiesCaptions[i]);
                cblabel.className = PPSMA.ShowProperties._classCheckBoxLabel$p;
                cblabel.id = labelid;
                var caption = dimPropertiesCaptions[i];
                if (caption.length > 100) {
                    caption = caption.substr(0, 100) + PPSMA.SR.OlapPropertiesDialog_LongStringPadding;
                }
                cblabel.innerHTML = '&nbsp;' + caption;
                cbdiv.appendChild(cbinput);
                cbdiv.appendChild(cblabel);
                divBody.appendChild(cbdiv);
                if (dimPropertiesChecked[i]) {
                    this._showPropertiesCheckedList$0[numSelected++] = inputid;
                }
            }
            var selectAllElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ShowProperties._divIDSelectAll$p);
            if (numSelected === dimProperties.get_count()) {
                this._showPropertiesCheckedList$0[numSelected] = selectAllElem.id;
            }
            return true;
        }
        alert(dimProperties.get_noPropertiesMessage());
        return false;
    },
    
    _setPropertyCheckBoxes$p$0: function PPSMA_ShowProperties$_setPropertyCheckBoxes$p$0() {ULSM53:;
        for (var i = 0; i < this._showPropertiesCheckedList$0.length; i++) {
            if (isNullUndefinedOrEmpty(this._showPropertiesCheckedList$0[i])) {
                break;
            }
            var elem = $get(this._showPropertiesCheckedList$0[i]);
            elem.checked = true;
        }
    },
    
    _getSelectedMemberXml$p$0: function PPSMA_ShowProperties$_getSelectedMemberXml$p$0() {ULSM53:;
        var xdoc = PPSMA.XmlEx.loadXml('<_dimProp />');
        var dimensionElem = xdoc.createElement('Dimension');
        xdoc.documentElement.appendChild(dimensionElem);
        dimensionElem.setAttribute('name', this._selectedHierarchyName$0);
        return PPSMA.XmlEx.getXml(xdoc.documentElement);
    },
    
    _getQueryMemberProperties$p$0: function PPSMA_ShowProperties$_getQueryMemberProperties$p$0(selectedHierarchyName) {ULSM53:;
        var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
        for (var rowHierIndex = 0; rowHierIndex < rowHiers.length; rowHierIndex++) {
            if (rowHiers[rowHierIndex].get_name() === selectedHierarchyName) {
                var selectedHier = rowHiers[rowHierIndex];
                return selectedHier.get_memberProperties();
            }
        }
        return null;
    },
    
    _revertMemberPropertySelections$p$0: function PPSMA_ShowProperties$_revertMemberPropertySelections$p$0(selectedHierarchyName) {ULSM53:;
        var memberProperties = this._getQueryMemberProperties$p$0(selectedHierarchyName);
        if (memberProperties) {
            var memberPropertyNames = memberProperties.get_names();
            var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(selectedHierarchyName);
            if (dimProperties) {
                var dimPropertiesNames = dimProperties.get_names();
                var dimPropertiesChecked = dimProperties.get_checked();
                for (var i = 0; i < dimProperties.get_count(); i++) {
                    dimPropertiesChecked[i] = false;
                    for (var j = 0; j < memberProperties.get_count(); j++) {
                        if (memberPropertyNames[j] === dimPropertiesNames[i]) {
                            dimPropertiesChecked[i] = true;
                        }
                    }
                }
            }
        }
    },
    
    _isDirtyMemberProperties$p$0: function PPSMA_ShowProperties$_isDirtyMemberProperties$p$0(selectedHierarchyName) {ULSM53:;
        var memberProperties = this._getQueryMemberProperties$p$0(selectedHierarchyName);
        var dimProperties = this._olapViewContext$0.getDimensionPropertiesList(selectedHierarchyName);
        if (dimProperties) {
            if (((!memberProperties) || (!memberProperties.get_count())) && (dimProperties.get_enabledCount() > 0)) {
                return true;
            }
            var memberPropertyNames = null;
            if (memberProperties) {
                memberPropertyNames = memberProperties.get_names();
            }
            var dimPropertiesNames = dimProperties.get_names();
            var dimPropertiesChecked = dimProperties.get_checked();
            for (var i = 0; i < dimProperties.get_count(); i++) {
                if (!memberProperties || !memberPropertyNames) {
                    if (dimPropertiesChecked[i]) {
                        return true;
                    }
                }
                else {
                    var foundMatch = false;
                    for (var j = 0; j < memberProperties.get_count(); j++) {
                        if (memberPropertyNames[j] === dimPropertiesNames[i]) {
                            foundMatch = true;
                            if (!dimPropertiesChecked[i]) {
                                return true;
                            }
                        }
                    }
                    if (!foundMatch && dimPropertiesChecked[i]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}


PPSMA.ThinFieldListItemSelectedEventArgs = function PPSMA_ThinFieldListItemSelectedEventArgs(uniqueName, caption, isSelected) {ULSM53:;
    PPSMA.ThinFieldListItemSelectedEventArgs.initializeBase(this);
    this.itemUniqueName = uniqueName;
    this.itemCaption = caption;
    this.itemIsSelected = isSelected;
}
PPSMA.ThinFieldListItemSelectedEventArgs.prototype = {
    itemUniqueName: null,
    itemCaption: null,
    itemIsSelected: false
}


PPSMA.ThinFieldList = function PPSMA_ThinFieldList(olapViewContext, multiSelect, displayKpis) {ULSM53:;
    this.$$d__componentClick$p$0 = Function.createDelegate(this, this._componentClick$p$0);
    this.$$d_cancel = Function.createDelegate(this, this.cancel);
    this.$$d_apply = Function.createDelegate(this, this.apply);
    this.$$d__populateMeasureGroups$p$0 = Function.createDelegate(this, this._populateMeasureGroups$p$0);
    this._events$0 = new Sys.EventHandlerList();
    this._olapViewContext$0 = olapViewContext;
    this._isVisible$0 = false;
    this._measuresLoaded$0 = false;
    this._olapViewContext$0.get_measures().set_ctrlProxyId(this._olapViewContext$0.get_ctrlProxyId());
    this._olapViewContext$0.get_measures().set_multiSelectEnabled(multiSelect);
    this._olapViewContext$0.get_measures().set_displayKpis(displayKpis);
    this._olapViewContext$0.get_measures().set_resourcePath(this._olapViewContext$0.get_resourcePath());
    this._olapViewContext$0.get_measures().set_imagesPath(this._olapViewContext$0.get_imagesPath());
    this._thinFieldListDivId$0 = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.divIDThinFieldListMain;
    this._ULDisplayObjectsId$0 = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.ulidDisplayObjectParent;
}
PPSMA.ThinFieldList.prototype = {
    _olapViewContext$0: null,
    _dataCell$0: null,
    _isVisible$0: false,
    _measuresLoaded$0: false,
    _domParentElement$0: null,
    _thinFieldListDivId$0: null,
    _ULDisplayObjectsId$0: null,
    
    resize: function PPSMA_ThinFieldList$resize(ulDivHeight, measureGroupcomboBoxWidth) {ULSM53:;
        var listDivContainer = $get(PPSMA.ThinFieldList.divIDListContainer);
        if (listDivContainer) {
            listDivContainer.style.height = ulDivHeight + 'px';
        }
        this._olapViewContext$0.get_measures().resize(measureGroupcomboBoxWidth);
    },
    
    showInChangeMeasure: function PPSMA_ThinFieldList$showInChangeMeasure() {ULSM53:;
        this.show(null, $get(PPSMA.ChangeMeasure.idFieldList));
    },
    
    show: function PPSMA_ThinFieldList$show(currCell, parentElement) {ULSM53:;
        this._dataCell$0 = currCell;
        this._domParentElement$0 = parentElement;
        this._fireSelectedMeasureEvents$p$0(this._olapViewContext$0.get_results());
        this._showLoadingDiv$p$0();
        if (!this._olapViewContext$0.get_measureData()) {
            this._olapViewContext$0.getMeasureGroups(this.$$d__populateMeasureGroups$p$0);
        }
        else {
            this._populateMeasureGroups$p$0(true);
        }
    },
    
    reOrderItem: function PPSMA_ThinFieldList$reOrderItem(uniqueName, newOrderIndex) {ULSM53:;
        if (!this._measuresLoaded$0) {
            return false;
        }
        var obj = this._olapViewContext$0.get_measures().getObjectByName(uniqueName);
        if (obj) {
            return (this._olapViewContext$0.get_measures().setQueryOrder(obj, newOrderIndex, this._olapViewContext$0.get_ctrlProxyId()));
        }
        return false;
    },
    
    deSelectItem: function PPSMA_ThinFieldList$deSelectItem(uniqueName) {ULSM53:;
        if (!this._measuresLoaded$0) {
            return false;
        }
        var obj = this._olapViewContext$0.get_measures().getObjectByName(uniqueName);
        if (this._olapViewContext$0.get_measures().deSelectObject(obj)) {
            this._olapViewContext$0.get_measures().set_selectedCount(this._olapViewContext$0.get_measures().get_selectedCount() - 1);
            return true;
        }
        else {
            return false;
        }
    },
    
    get_measuresLoaded: function PPSMA_ThinFieldList$get_measuresLoaded() {ULSM53:;
        return this._measuresLoaded$0;
    },
    
    add_itemSelected: function PPSMA_ThinFieldList$add_itemSelected(value) {ULSM53:;
        this._events$0.addHandler(PPSMA.ThinFieldList._eventKey_ItemSelected$p, value);
    },
    remove_itemSelected: function PPSMA_ThinFieldList$remove_itemSelected(value) {ULSM53:;
        this._events$0.removeHandler(PPSMA.ThinFieldList._eventKey_ItemSelected$p, value);
    },
    
    _raiseItemSelectedEvent$p$0: function PPSMA_ThinFieldList$_raiseItemSelectedEvent$p$0(uniqueName, caption, isSelected) {ULSM53:;
        var handler = this._events$0.getHandler(PPSMA.ThinFieldList._eventKey_ItemSelected$p);
        if (handler) {
            handler(this, new PPSMA.ThinFieldListItemSelectedEventArgs(uniqueName, caption, isSelected));
        }
    },
    
    _populateMeasureGroups$p$0: function PPSMA_ThinFieldList$_populateMeasureGroups$p$0(success) {ULSM53:;
        this._measuresLoaded$0 = false;
        if (this._olapViewContext$0.get_measureData() && success) {
            this._measuresLoaded$0 = this._addMeasureGroupsToList$p$0();
            if (!this._measuresLoaded$0) {
                this._showErrorLoadingDiv$p$0();
            }
            else {
                this._olapViewContext$0.notifyBrowserOfAsyncUpdate($get(PPSMA.ThinFieldList.divIDListContainer));
            }
        }
        else {
            this._showErrorLoadingDiv$p$0();
        }
    },
    
    _componentClick$p$0: function PPSMA_ThinFieldList$_componentClick$p$0(e) {ULSM53:;
        var componentInputElem = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
        if (!componentInputElem) {
            return;
        }
        var componentElem = componentInputElem.parentNode;
        var obj = this._olapViewContext$0.get_measures().findMeasureOrKpiByID(componentElem.id);
        if (!obj) {
            alert('Error. Unknown object was selected.');
            return;
        }
        var isChecked;
        var kpiComponent = '';
        var kpiIsSelected = false;
        if (Object.getType(obj).getName() === 'PPSMA.Measure') {
            isChecked = !obj.get_selected();
        }
        else {
            kpiIsSelected = (obj).get_selected();
            kpiComponent = this._olapViewContext$0.get_measures().findKpiComponentID(componentElem.id);
            isChecked = !(obj).isComponentSelected(kpiComponent);
        }
        if ((!this._olapViewContext$0.get_measures().get_multiSelectEnabled()) && (isChecked)) {
            for (var i = 0; i < this._olapViewContext$0.get_measures().get_selectedCount(); i++) {
                var currentlySelectedObj = this._olapViewContext$0.get_measures().getSelectedMeasureOrKpiByOrder(i);
                if (currentlySelectedObj) {
                    this._raiseItemSelectedEvent$p$0(currentlySelectedObj.get_name(), currentlySelectedObj.get_caption(), false);
                    break;
                }
            }
        }
        else if ((this._olapViewContext$0.get_measures().get_multiSelectEnabled()) && (kpiIsSelected) && (isChecked)) {
            this._raiseItemSelectedEvent$p$0(obj.get_name(), obj.get_caption(), false);
        }
        this._raiseItemSelectedEvent$p$0(obj.get_name(), obj.get_caption(), isChecked);
        this._olapViewContext$0.get_measures().componentClicked(obj, componentElem, kpiComponent, isChecked);
    },
    
    apply: function PPSMA_ThinFieldList$apply(e) {ULSM53:;
        if (this._isVisible$0) {
            var elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.divIDThinFieldListMain);
            elem.style.display = 'none';
            this._cleanup$p$0();
            this._olapViewContext$0.applyMeasureSelectorChanges();
        }
    },
    
    cancel: function PPSMA_ThinFieldList$cancel(e) {ULSM53:;
        if (this._isVisible$0) {
            var elem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.divIDThinFieldListMain);
            if (elem) {
                elem.style.display = 'none';
            }
            this._cleanup$p$0();
        }
    },
    
    _cleanup$p$0: function PPSMA_ThinFieldList$_cleanup$p$0() {ULSM53:;
        this._isVisible$0 = false;
    },
    
    _setupDomEventHandlers$p$0: function PPSMA_ThinFieldList$_setupDomEventHandlers$p$0(proxyid) {ULSM53:;
        var id = (proxyid + PPSMA.ThinFieldList._divIDApply$p);
        var elem = $get(id);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_apply);
        }
        id = (proxyid + PPSMA.ThinFieldList._divIDCancel$p);
        elem = $get(id);
        if (elem) {
            $addHandler(elem, 'click', this.$$d_cancel);
        }
    },
    
    _fireSelectedMeasureEvents$p$0: function PPSMA_ThinFieldList$_fireSelectedMeasureEvents$p$0(results) {ULSM53:;
        var found = false;
        for (var i = 0; i < results.get_rowHierarchies().length; i++) {
            if (results.get_rowHierarchies()[i].get_name() === this._olapViewContext$0.get_measureHierarchyName()) {
                var rowMembers = results.get_rowMembers();
                if (rowMembers) {
                    for (var z = 0; z < rowMembers.length; z++) {
                        this._raiseItemSelectedEvent$p$0(rowMembers[z][i].get_name(), rowMembers[z][i].get_caption(), true);
                        if (!this._olapViewContext$0.get_measures().get_multiSelectEnabled()) {
                            return;
                        }
                        found = true;
                    }
                }
            }
        }
        if (found) {
            return;
        }
        for (var i = 0; i < results.get_columnHierarchies().length; i++) {
            if (results.get_columnHierarchies()[i].get_name() === this._olapViewContext$0.get_measureHierarchyName()) {
                var colMembers = results.get_columnMembers();
                if (colMembers) {
                    for (var z = 0; z < colMembers.length; z++) {
                        this._raiseItemSelectedEvent$p$0(colMembers[z][i].get_name(), colMembers[z][i].get_caption(), true);
                        if (!this._olapViewContext$0.get_measures().get_multiSelectEnabled()) {
                            return;
                        }
                        found = true;
                    }
                }
            }
        }
        if (found) {
            return;
        }
        if (0 === results.get_rowHierarchies().length || 0 === results.get_columnHierarchies().length) {
            return;
        }
        for (var i = 0; i < results.get_filterHierarchies().length; i++) {
            if (results.get_filterHierarchies()[i].get_name() === this._olapViewContext$0.get_measureHierarchyName()) {
                var bgMembers = results.get_filterMembers();
                if (bgMembers) {
                    this._raiseItemSelectedEvent$p$0(bgMembers[i].get_name(), bgMembers[i].get_caption(), true);
                    if (!this._olapViewContext$0.get_measures().get_multiSelectEnabled()) {
                        return;
                    }
                }
            }
        }
    },
    
    _initializeMeasureGroupsBox$p$0: function PPSMA_ThinFieldList$_initializeMeasureGroupsBox$p$0() {ULSM53:;
        var retVal = true;
        var proxyid = this._olapViewContext$0.get_ctrlProxyId();
        var measureGroupsMainDiv = $get(proxyid + PPSMA.ThinFieldList.divIDThinFieldListMain);
        if (measureGroupsMainDiv) {
            if (!this._domParentElement$0) {
                document.body.removeChild(measureGroupsMainDiv);
            }
            else {
                this._domParentElement$0.removeChild(measureGroupsMainDiv);
            }
            this._setupDomEventHandlers$p$0(proxyid);
            retVal = false;
        }
        measureGroupsMainDiv = document.createElement('div');
        measureGroupsMainDiv.id = this._thinFieldListDivId$0;
        var comboBoxClientHeightDiv = document.createElement('div');
        comboBoxClientHeightDiv.id = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.Measures.measureGroupDropDownComboxBoxWrapperDivID;
        comboBoxClientHeightDiv.className = PPSMA.ThinFieldList._classSelectGroupWrapper$p;
        var comboBoxElem;
        if (!this._domParentElement$0) {
            measureGroupsMainDiv.className = PPSMA.ThinFieldList._classThinFieldListMain$p;
            comboBoxElem = this._olapViewContext$0.get_measures().getMeasureGroupComboBoxHtml();
        }
        else {
            comboBoxElem = this._olapViewContext$0.get_measures().getMeasureGroupComboBoxHtml();
        }
        comboBoxClientHeightDiv.appendChild(comboBoxElem);
        measureGroupsMainDiv.appendChild(comboBoxClientHeightDiv);
        var listDivContainer = document.createElement('div');
        listDivContainer.id = PPSMA.ThinFieldList.divIDListContainer;
        listDivContainer.className = PPSMA.ThinFieldList._classScrollList$p;
        var ulElem = document.createElement('ul');
        ulElem.id = this._ULDisplayObjectsId$0;
        ulElem.className = PPSMA.ThinFieldList._classThinFieldListUL$p;
        measureGroupsMainDiv.appendChild(listDivContainer);
        listDivContainer.appendChild(ulElem);
        if (!this._domParentElement$0) {
            var footerDiv = document.createElement('div');
            footerDiv.id = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDFooter$p;
            footerDiv.className = PPSMA.ThinFieldList._classFooter$p;
            var apply = document.createElement('A');
            apply.id = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDApply$p;
            apply.className = PPSMA.ThinFieldList._classApply$p;
            apply.innerHTML = PPSMA.SR.OlapPropertiesDialog_Apply;
            var cancel = document.createElement('A');
            cancel.id = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDCancel$p;
            cancel.className = PPSMA.ThinFieldList._classCancel$p;
            cancel.innerHTML = PPSMA.SR.OlapPropertiesDialog_Cancel;
            footerDiv.appendChild(apply);
            footerDiv.appendChild(cancel);
            measureGroupsMainDiv.appendChild(footerDiv);
        }
        if (!this._domParentElement$0) {
            document.body.appendChild(measureGroupsMainDiv);
        }
        else {
            this._domParentElement$0.appendChild(measureGroupsMainDiv);
        }
        this._setupDomEventHandlers$p$0(proxyid);
        return retVal;
    },
    
    _addMeasureGroupsToList$p$0: function PPSMA_ThinFieldList$_addMeasureGroupsToList$p$0() {ULSM53:;
        this._hideLoadingDiv$p$0();
        this._initializeMeasureGroupsBox$p$0();
        var ulBody = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.ulidDisplayObjectParent);
        if ((this._olapViewContext$0.get_measureData()) && (!this._olapViewContext$0.get_measures().get_haveData())) {
            var xdoc = PPSMA.XmlEx.loadXml(this._olapViewContext$0.get_measureData());
            var numLoaded = this._olapViewContext$0.get_measures().loadMeasuresFromXml(xdoc);
        }
        if (!this._olapViewContext$0.get_measures()) {
            alert('Measures is null');
            return false;
        }
        this._olapViewContext$0.get_measures().setSelectedMeasuresFromResults(this._olapViewContext$0.get_results());
        this._olapViewContext$0.get_measures().writeMeasureGroupComboBoxContents();
        if (this._olapViewContext$0.get_measures().get_displayObjectCount() > 0) {
            var mainDivElem = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList.divIDThinFieldListMain);
            var comboBoxOuterDiv = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.Measures.measureGroupDropDownComboxBoxWrapperDivID);
            if (!this._domParentElement$0) {
                ulBody.style.height = (PPSMA.ThinFieldList._thinFieldListDefaultHeight$p - comboBoxOuterDiv.offsetHeight) + 'px';
            }
            if (!mainDivElem) {
                return false;
            }
            if (!this._domParentElement$0) {
                mainDivElem.style.width = PPSMA.ThinFieldList._thinFieldListDefaultWidth$p + 'px';
                mainDivElem.style.height = PPSMA.ThinFieldList._thinFieldListDefaultHeight$p + 'px';
                mainDivElem.style.left = '0px';
                mainDivElem.style.top = '0px';
            }
            else {
                mainDivElem.style.display = 'block';
            }
            if (!this._domParentElement$0) {
                this._setXandY$p$0(mainDivElem, PPSMA.ThinFieldList._thinFieldListDefaultHeight$p + comboBoxOuterDiv.offsetHeight);
            }
            this._olapViewContext$0.get_measures().writeDivOutputHtml(ulBody, this.$$d__componentClick$p$0);
            this._addExpandCollapseLinkHandlers$p$0(ulBody);
            if (!this._domParentElement$0) {
                if (this._olapViewContext$0.get_measures().get_labelOffsetWidth() > PPSMA.ThinFieldList._thinFieldListDefaultWidth$p) {
                    mainDivElem.style.width = this._olapViewContext$0.get_measures().get_labelOffsetWidth() + 'px';
                    var comboBoxElem = $get(PPSMA.Measures.measureGroupDropDownComboxBoxID);
                    if (comboBoxElem) {
                        comboBoxElem.style.width = (this._olapViewContext$0.get_measures().get_labelOffsetWidth() + comboBoxOuterDiv.offsetWidth) + 'px';
                    }
                }
            }
        }
        else {
            return false;
        }
        this._isVisible$0 = true;
        return true;
    },
    
    _addExpandCollapseLinkHandlers$p$0: function PPSMA_ThinFieldList$_addExpandCollapseLinkHandlers$p$0(ulBody) {ULSM53:;
        var links = ulBody.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            var a = links[i];
            if (a.className === PPSMA.Folder.classExCoA) {
                $addHandler(a, 'click', this._olapViewContext$0.get_measures().$$d_handleExpandCollapseClick);
            }
        }
    },
    
    _setXandY$p$0: function PPSMA_ThinFieldList$_setXandY$p$0(elem, menuHeight) {ULSM53:;
        var yOffset = PPSMA.SizeEx.getAbsoluteTop(this._dataCell$0);
        var xOffset = PPSMA.SizeEx.getAbsoluteLeft(this._dataCell$0);
        var width = this._dataCell$0.offsetWidth;
        var height = this._dataCell$0.offsetHeight;
        var availHeight = PPSMA.SizeEx.getClientHeight();
        if ((yOffset + menuHeight) > availHeight) {
            yOffset -= menuHeight;
            if (yOffset < 0) {
                yOffset = 0;
            }
        }
        var availWidth = PPSMA.SizeEx.getClientWidth();
        if ((xOffset + 225) > availWidth) {
            xOffset = (availWidth - 225);
            if (xOffset < 0) {
                xOffset = 0;
            }
        }
        var scrollLeft = 0;
        var scrollTop = 0;
        var parentDiv = $get(this._olapViewContext$0.get_innerTargetId());
        if (parentDiv) {
            scrollLeft = parentDiv.scrollLeft;
            scrollTop = parentDiv.scrollTop;
        }
        elem.style.left = (xOffset + width - scrollLeft - 10) + 'px';
        elem.style.top = (yOffset + height - scrollTop - 10) + 'px';
    },
    
    _showLoadingDiv$p$0: function PPSMA_ThinFieldList$_showLoadingDiv$p$0() {ULSM53:;
        var loadingDiv = document.createElement('div');
        loadingDiv.id = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDLoading$p;
        loadingDiv.className = PPSMA.ThinFieldList._classWaitingDiv$p;
        if (loadingDiv) {
            loadingDiv.innerHTML = PPSMA.SR.OlapContextMenu_DynamicLoadText;
            if (!this._domParentElement$0) {
                this._setXandY$p$0(loadingDiv, PPSMA.ThinFieldList._thinFieldListDefaultHeight$p);
                document.body.appendChild(loadingDiv);
            }
            else {
                this._domParentElement$0.appendChild(loadingDiv);
            }
        }
    },
    
    _hideLoadingDiv$p$0: function PPSMA_ThinFieldList$_hideLoadingDiv$p$0() {ULSM53:;
        var loadingDiv = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDLoading$p);
        if (loadingDiv) {
            if (!this._domParentElement$0) {
                document.body.removeChild(loadingDiv);
            }
            else {
                this._domParentElement$0.removeChild(loadingDiv);
            }
        }
    },
    
    _showErrorLoadingDiv$p$0: function PPSMA_ThinFieldList$_showErrorLoadingDiv$p$0() {ULSM53:;
        var loadingDiv = $get(this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ThinFieldList._divIDLoading$p);
        if (loadingDiv) {
            loadingDiv.innerHTML = PPSMA.SR.OlapContextMenu_ErrorLoadingMeasures;
        }
    }
}


PPSMA.BaseMeasureKpi = function PPSMA_BaseMeasureKpi() {
}
PPSMA.BaseMeasureKpi.prototype = {
    _resourcePath: null,
    _uniqueName: null,
    _displayCaption: null,
    _measureGroup: null,
    _hierarchyName: null,
    _description: null,
    _isVisible: false,
    _order: 0,
    _index: 0,
    _offsetWidth$0: 0,
    
    get_resourcePath: function PPSMA_BaseMeasureKpi$get_resourcePath() {ULSM53:;
        return this._resourcePath;
    },
    set_resourcePath: function PPSMA_BaseMeasureKpi$set_resourcePath(value) {ULSM53:;
        this._resourcePath = value;
        return value;
    },
    
    get_visible: function PPSMA_BaseMeasureKpi$get_visible() {ULSM53:;
        return this._isVisible;
    },
    set_visible: function PPSMA_BaseMeasureKpi$set_visible(value) {ULSM53:;
        this._isVisible = value;
        return value;
    },
    
    get_name: function PPSMA_BaseMeasureKpi$get_name() {ULSM53:;
        return this._uniqueName;
    },
    set_name: function PPSMA_BaseMeasureKpi$set_name(value) {ULSM53:;
        this._uniqueName = value;
        return value;
    },
    
    get_index: function PPSMA_BaseMeasureKpi$get_index() {ULSM53:;
        return this._index;
    },
    set_index: function PPSMA_BaseMeasureKpi$set_index(value) {ULSM53:;
        this._index = value;
        return value;
    },
    
    get_caption: function PPSMA_BaseMeasureKpi$get_caption() {ULSM53:;
        return this._displayCaption;
    },
    set_caption: function PPSMA_BaseMeasureKpi$set_caption(value) {ULSM53:;
        this._displayCaption = value;
        return value;
    },
    
    get_measureGroupName: function PPSMA_BaseMeasureKpi$get_measureGroupName() {ULSM53:;
        return this._measureGroup;
    },
    set_measureGroupName: function PPSMA_BaseMeasureKpi$set_measureGroupName(value) {ULSM53:;
        this._measureGroup = value;
        return value;
    },
    
    get_description: function PPSMA_BaseMeasureKpi$get_description() {ULSM53:;
        return this._description;
    },
    set_description: function PPSMA_BaseMeasureKpi$set_description(value) {ULSM53:;
        this._description = value;
        return value;
    },
    
    get_order: function PPSMA_BaseMeasureKpi$get_order() {ULSM53:;
        return this._order;
    },
    set_order: function PPSMA_BaseMeasureKpi$set_order(value) {ULSM53:;
        this._order = value;
        return value;
    },
    
    get_axisHierarchy: function PPSMA_BaseMeasureKpi$get_axisHierarchy() {ULSM53:;
        return this._hierarchyName;
    },
    set_axisHierarchy: function PPSMA_BaseMeasureKpi$set_axisHierarchy(value) {ULSM53:;
        this._hierarchyName = value;
        return value;
    },
    
    get_offsetWidth: function PPSMA_BaseMeasureKpi$get_offsetWidth() {ULSM53:;
        return this._offsetWidth$0;
    },
    set_offsetWidth: function PPSMA_BaseMeasureKpi$set_offsetWidth(value) {ULSM53:;
        this._offsetWidth$0 = value;
        return value;
    }
}


PPSMA.Kpi = function PPSMA_Kpi() {ULSM53:;
    PPSMA.Kpi.initializeBase(this);
    this._isVisible = true;
    this._isExpanded$1 = true;
    this._componentsChecked$1 = new Array(PPSMA.Kpi.kpiComponentSize);
    for (var i = 0; i < PPSMA.Kpi.kpiComponentSize; i++) {
        this._componentsChecked$1[i] = false;
    }
}
PPSMA.Kpi.prototype = {
    _value$1: null,
    _goal$1: null,
    _status$1: null,
    _trend$1: null,
    _isExpanded$1: false,
    _componentsChecked$1: null,
    
    get_selected: function PPSMA_Kpi$get_selected() {ULSM53:;
        for (var i = 0; i < PPSMA.Kpi.kpiComponentSize; i++) {
            if (this._componentsChecked$1[i]) {
                return true;
            }
        }
        return false;
    },
    set_selected: function PPSMA_Kpi$set_selected(value) {ULSM53:;
        if (!value) {
            for (var i = 0; i < PPSMA.Kpi.kpiComponentSize; i++) {
                this._componentsChecked$1[i] = false;
            }
        }
        return value;
    },
    
    get_expanded: function PPSMA_Kpi$get_expanded() {ULSM53:;
        return this._isExpanded$1;
    },
    set_expanded: function PPSMA_Kpi$set_expanded(value) {ULSM53:;
        this._isExpanded$1 = value;
        return value;
    },
    
    get_uniqueId: function PPSMA_Kpi$get_uniqueId() {ULSM53:;
        return (PPSMA.Kpi.listElemID + '_K' + this._index.toString());
    },
    
    get_value: function PPSMA_Kpi$get_value() {ULSM53:;
        return this._value$1;
    },
    set_value: function PPSMA_Kpi$set_value(value) {ULSM53:;
        this._value$1 = value;
        return value;
    },
    
    get_goal: function PPSMA_Kpi$get_goal() {ULSM53:;
        return this._goal$1;
    },
    set_goal: function PPSMA_Kpi$set_goal(value) {ULSM53:;
        this._goal$1 = value;
        return value;
    },
    
    get_status: function PPSMA_Kpi$get_status() {ULSM53:;
        return this._status$1;
    },
    set_status: function PPSMA_Kpi$set_status(value) {ULSM53:;
        this._status$1 = value;
        return value;
    },
    
    get_trend: function PPSMA_Kpi$get_trend() {ULSM53:;
        return this._trend$1;
    },
    set_trend: function PPSMA_Kpi$set_trend(value) {ULSM53:;
        this._trend$1 = value;
        return value;
    },
    
    isComponentSelected: function PPSMA_Kpi$isComponentSelected(componentName) {ULSM53:;
        var componentIndex = this._getComponentIndexFromComponentName$p$1(componentName);
        if ((componentIndex < 0) || (componentIndex >= PPSMA.Kpi.kpiComponentSize)) {
            return false;
        }
        return this._componentsChecked$1[componentIndex];
    },
    
    writeDivOutputHtml: function PPSMA_Kpi$writeDivOutputHtml(ctrlProxyId, ulBody, padding, folderId, parentClickHandler, componentClickHandler) {ULSM53:;
        var liElemId = PPSMA.Measures.getKpiUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        var listElem = document.createElement('li');
        var listAInput = document.createElement('a');
        var listImgInput = document.createElement('img');
        listElem.id = liElemId;
        listElem.className = PPSMA.Kpi.classThinFieldListLI;
        listElem.style.listStyleType = 'none';
        listAInput.setAttribute('href', '#');
        $addHandler(listAInput, 'mouseup', parentClickHandler);
        listImgInput.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_CollapseKpi);
        listImgInput.setAttribute('src', this.get_resourcePath() + PPSMA.Kpi._kpiCollapsedGifName$p);
        listImgInput.setAttribute('border', '0px');
        listAInput.appendChild(listImgInput);
        listElem.appendChild(listAInput);
        var innerElem = window.document.createTextNode(this._displayCaption);
        listElem.appendChild(innerElem);
        ulBody.appendChild(listElem);
        this.set_offsetWidth(listElem.offsetWidth);
        var ulElem = document.createElement('ul');
        if (this._goal$1) {
            this._writeKpiAttribute$p$1(ctrlProxyId, ulElem, liElemId, PPSMA.Kpi._kpI_GOAL_NAME$p, PPSMA.SR.OlapChangeMeasure_KpiGoal, (padding + 0), componentClickHandler);
        }
        if (this._value$1) {
            this._writeKpiAttribute$p$1(ctrlProxyId, ulElem, liElemId, PPSMA.Kpi._kpI_VALUE_NAME$p, PPSMA.SR.OlapChangeMeasure_KpiValue, (padding + 0), componentClickHandler);
        }
        if (this._status$1) {
            this._writeKpiAttribute$p$1(ctrlProxyId, ulElem, liElemId, PPSMA.Kpi._kpI_STATUS_NAME$p, PPSMA.SR.OlapChangeMeasure_KpiStatus, (padding + 0), componentClickHandler);
        }
        if (this._trend$1) {
            this._writeKpiAttribute$p$1(ctrlProxyId, ulElem, liElemId, PPSMA.Kpi._kpI_TREND_NAME$p, PPSMA.SR.OlapChangeMeasure_KpiTrend, (padding + 0), componentClickHandler);
        }
        ulElem.style.display = 'block';
        listElem.appendChild(ulElem);
        return true;
    },
    
    setVisibility: function PPSMA_Kpi$setVisibility(ctrlProxyId, folderId) {ULSM53:;
        var kpiElemId = PPSMA.Measures.getKpiUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        var kpiElem = $get(kpiElemId);
        if (!kpiElem) {
            return false;
        }
        if (!this._isVisible) {
            kpiElem.style.display = 'none';
            return false;
        }
        else {
            kpiElem.style.display = 'block';
            return true;
        }
    },
    
    expandCollapse: function PPSMA_Kpi$expandCollapse(kpiElem) {ULSM53:;
        this._setExpandCollapse$p$1(kpiElem, !this._isExpanded$1);
    },
    
    setInputElemCheckValue: function PPSMA_Kpi$setInputElemCheckValue(ctrlProxyId, inputElem, folderId, component, isChecked) {ULSM53:;
        var kpiElemId = PPSMA.Measures.getKpiUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        var kpiElem = $get(kpiElemId);
        if (kpiElem) {
            var input_Children = kpiElem.getElementsByTagName('input');
            var kpiComponentIndex = -1;
            if (component !== '') {
                kpiComponentIndex = this._getComponentIndexFromComponentName$p$1(component);
                if ((kpiComponentIndex < 0) || (kpiComponentIndex >= PPSMA.Kpi.kpiComponentSize)) {
                    return;
                }
                var kpiComponentInputElem = input_Children[kpiComponentIndex];
                if (kpiComponentInputElem !== inputElem) {
                    (kpiComponentInputElem).checked = isChecked;
                }
                this._componentsChecked$1[kpiComponentIndex] = isChecked;
            }
            if ((isChecked) || ((!isChecked) && (component === ''))) {
                for (var i = 0; i < input_Children.length; i++) {
                    var kpiComponentSiblingInputElem = input_Children[i];
                    if ((i !== kpiComponentIndex) && (kpiComponentSiblingInputElem !== inputElem)) {
                        (kpiComponentSiblingInputElem).checked = false;
                        this._componentsChecked$1[i] = false;
                    }
                }
            }
        }
    },
    
    _getComponentIndexFromComponentName$p$1: function PPSMA_Kpi$_getComponentIndexFromComponentName$p$1(componentName) {ULSM53:;
        if (componentName === PPSMA.Kpi._kpI_GOAL_NAME$p) {
            return PPSMA.Kpi.kpI_GOAL_INDEX;
        }
        else if (componentName === PPSMA.Kpi._kpI_VALUE_NAME$p) {
            return PPSMA.Kpi.kpI_VALUE_INDEX;
        }
        else if (componentName === PPSMA.Kpi._kpI_STATUS_NAME$p) {
            return PPSMA.Kpi.kpI_STATUS_INDEX;
        }
        else if (componentName === PPSMA.Kpi._kpI_TREND_NAME$p) {
            return PPSMA.Kpi.kpI_TREND_INDEX;
        }
        else {
            return -1;
        }
    },
    
    _writeKpiAttribute$p$1: function PPSMA_Kpi$_writeKpiAttribute$p$1(ctrlProxyId, ulBody, parentElemId, attributeName, attributeCaption, padding, componentClickHandler) {ULSM53:;
        var paddingStr = padding.toString() + 'px';
        var hint = this._displayCaption;
        if ((this._description) && (this._description.length > 0)) {
            hint += ' (';
            hint += this._description;
            hint += ')';
        }
        var liElemId = parentElemId + '_' + attributeName;
        var listElem = document.createElement('li');
        var listElemInput = document.createElement('input');
        var listElemLabel = document.createElement('label');
        listElem.id = liElemId;
        listElem.className = PPSMA.Measure.classThinFieldListLI;
        listElem.style.listStyleType = 'none';
        listElem.setAttribute('title', hint);
        listElemInput.setAttribute('type', 'checkbox');
        listElemInput.className = PPSMA.Measure.classThinFieldListCheckBox;
        listElemInput.setAttribute('title', hint);
        listElemInput.setAttribute('title', hint);
        listElemInput.style.cursor = 'hand';
        listElemInput.setAttribute('value', attributeName);
        $addHandler(listElemInput, 'click', componentClickHandler);
        listElemLabel.style.cursor = 'hand';
        $addHandler(listElemLabel, 'mouseup', componentClickHandler);
        var innerElem = window.document.createTextNode(attributeCaption);
        listElem.appendChild(listElemInput);
        listElem.appendChild(listElemLabel);
        listElemLabel.appendChild(innerElem);
        ulBody.appendChild(listElem);
        this.set_offsetWidth(innerElem.offsetWidth);
    },
    
    _setExpandCollapse$p$1: function PPSMA_Kpi$_setExpandCollapse$p$1(kpiElem, e) {ULSM53:;
        var kpi_Children = kpiElem.getElementsByTagName('ul');
        var ulElem = kpi_Children[0];
        if (!ulElem) {
            return;
        }
        if (!e) {
            ulElem.style.display = 'none';
            var img_Children = kpiElem.getElementsByTagName('img');
            var ulImgElem = img_Children[0];
            if (ulImgElem) {
                ulImgElem.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_ExpandKpi);
                ulImgElem.setAttribute('src', this.get_resourcePath() + PPSMA.Kpi._kpiExpandedGifName$p);
            }
        }
        else {
            ulElem.style.display = 'block';
            var img_Children = kpiElem.getElementsByTagName('img');
            var ulImgElem = img_Children[0];
            if (ulImgElem) {
                ulImgElem.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_CollapseKpi);
                ulImgElem.setAttribute('src', this.get_resourcePath() + PPSMA.Kpi._kpiCollapsedGifName$p);
            }
        }
        this._isExpanded$1 = e;
    }
}


PPSMA.Measure = function PPSMA_Measure() {ULSM53:;
    PPSMA.Measure.initializeBase(this);
    this._isVisible = true;
    this._checked$1 = false;
    this._order = -1;
}
PPSMA.Measure.prototype = {
    _checked$1: false,
    
    get_uniqueId: function PPSMA_Measure$get_uniqueId() {ULSM53:;
        return (PPSMA.Measure.listElemID + '_M' + this._index.toString());
    },
    
    get_selected: function PPSMA_Measure$get_selected() {ULSM53:;
        return this._checked$1;
    },
    set_selected: function PPSMA_Measure$set_selected(value) {ULSM53:;
        this._checked$1 = value;
        return value;
    },
    
    writeDivOutputHtml: function PPSMA_Measure$writeDivOutputHtml(ctrlProxyId, ulBody, padding, folderId, parentClickHandler, componentClickHandler) {ULSM53:;
        var liElemId = PPSMA.Measures.getMeasureUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        if (!ulBody.id.endsWith(PPSMA.ThinFieldList.ulidDisplayObjectParent)) {
            ulBody.style.paddingLeft = '20px';
        }
        else {
            ulBody.style.paddingLeft = '0px';
        }
        var hint = this._displayCaption;
        if ((this._description) && (this._description.length > 0)) {
            hint += ' (';
            hint += this._description;
            hint += ')';
        }
        var listElem = document.createElement('li');
        var listElemInput = document.createElement('input');
        var listElemLabel = document.createElement('label');
        listElem.setAttribute('id', liElemId);
        listElem.className = PPSMA.Measure.classThinFieldListLI;
        listElem.style.listStyleType = 'none';
        listElem.setAttribute('title', hint);
        listElemInput.setAttribute('title', hint);
        listElemInput.setAttribute('type', 'checkbox');
        listElemInput.className = PPSMA.Measure.classThinFieldListCheckBox;
        listElemInput.setAttribute('title', hint);
        listElemInput.style.cursor = 'hand';
        listElemInput.setAttribute('value', this._uniqueName);
        $addHandler(listElemInput, 'click', componentClickHandler);
        listElemLabel.style.cursor = 'hand';
        $addHandler(listElemLabel, 'mouseup', componentClickHandler);
        var innerElem = window.document.createTextNode(this._displayCaption);
        listElem.appendChild(listElemInput);
        listElem.appendChild(listElemLabel);
        listElemLabel.appendChild(innerElem);
        listElemLabel.style.paddingTop = '2px';
        listElemLabel.style.paddingLeft = '4px';
        listElemLabel.style.position = 'absolute';
        ulBody.appendChild(listElem);
        if (this._checked$1) {
            (listElemInput).checked = true;
        }
        this.set_offsetWidth(innerElem.offsetWidth);
        return true;
    },
    
    setVisibility: function PPSMA_Measure$setVisibility(ctrlProxyId, folderId) {ULSM53:;
        var measElemId = PPSMA.Measures.getMeasureUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        var measElem = $get(measElemId);
        if (!measElem) {
            return false;
        }
        if (!this._isVisible) {
            measElem.style.display = 'none';
            return false;
        }
        else {
            measElem.style.display = 'block';
            return true;
        }
    },
    
    setInputElemCheckValue: function PPSMA_Measure$setInputElemCheckValue(ctrlProxyId, inputElem, folderId, componentId, isChecked) {ULSM53:;
        var measElemId = PPSMA.Measures.getMeasureUniqueID(this, ctrlProxyId) + '_F' + folderId.toString();
        var measElem = $get(measElemId);
        if (measElem) {
            var input_Children = measElem.getElementsByTagName('input');
            var measInputElem = input_Children[0];
            if (measInputElem !== inputElem) {
                (measInputElem).checked = isChecked;
            }
        }
        this._checked$1 = isChecked;
    }
}


PPSMA.Folder = function PPSMA_Folder(name, level, index) {ULSM53:;
    this._isExpanded$0 = true;
    this._level$0 = level;
    this._name$0 = name;
    this._index$0 = index;
    this._childrenFolders$0 = [];
    this._childrenDisplayObjects$0 = [];
}
PPSMA.Folder.addFolders = function PPSMA_Folder$addFolders(folders, folderList, measure_or_kpi, level, resourcePath, imagesPath) {ULSM53:;
    if ((!folderList) || (!folderList.length)) {
        return null;
    }
    var childFolders = null;
    var localFolders = [];
    var multipleFolderNames = folderList.split(PPSMA.Folder.multipleFoldersDelimitor);
    if (multipleFolderNames.length > 1) {
        for (var x = 0; x < multipleFolderNames.length; x++) {
            childFolders = PPSMA.Folder.addFolders(folders, multipleFolderNames[x], measure_or_kpi, level, resourcePath, imagesPath);
            if (childFolders) {
                for (var f = 0; f < childFolders.length; f++) {
                    Array.add(localFolders, childFolders[f]);
                }
            }
        }
        return localFolders;
    }
    var parentChildFolderNames = folderList.split(PPSMA.Folder.parentChildDelimitor);
    if (!parentChildFolderNames.length) {
        return null;
    }
    var folder = PPSMA.Folder.getChildFolder(folders, parentChildFolderNames[0], -1);
    if (!folder) {
        folder = new PPSMA.Folder(parentChildFolderNames[0], level, ++PPSMA.Measures.folderCount);
        folder.set_resourcePath(resourcePath);
        folder.set_imagesPath(imagesPath);
        Array.add(folders, folder);
    }
    Array.add(localFolders, folder);
    if (parentChildFolderNames.length === 1) {
        var t = Object.getType(measure_or_kpi);
        if (t.getName() === 'PPSMA.Measure') {
            folder.addMeasure(measure_or_kpi);
        }
        else if (t.getName() === 'PPSMA.Kpi') {
            folder.addKpi(measure_or_kpi);
        }
        return localFolders;
    }
    var firstbreak = folderList.indexOf(PPSMA.Folder.parentChildDelimitor);
    var remainingFolderNames = folderList.substring((firstbreak + 1), folderList.length);
    childFolders = PPSMA.Folder.addFolders(folder.get_childrenFolders(), remainingFolderNames, measure_or_kpi, (level + 1), resourcePath, imagesPath);
    if (childFolders) {
        for (var x = 0; x < childFolders.length; x++) {
            if (!PPSMA.Folder.folderIsAlreadyInDisplay(folder.get_childrenFolders(), childFolders[x])) {
                Array.add(folder.get_childrenFolders(), childFolders[x]);
            }
        }
    }
    return localFolders;
}
PPSMA.Folder.getChildFolder = function PPSMA_Folder$getChildFolder(folders, folderName, folderIndex) {ULSM53:;
    for (var d = 0; d < folders.length; d++) {
        var childFolder = folders[d];
        if (folderIndex === -1) {
            if (childFolder.get_name() === folderName) {
                return childFolder;
            }
        }
        else if (childFolder.get_index() === folderIndex) {
            return childFolder;
        }
    }
    for (var d = 0; d < folders.length; d++) {
        var childFolder = folders[d];
        var grandChildFolder = PPSMA.Folder.getChildFolder(childFolder.get_childrenFolders(), folderName, folderIndex);
        if (grandChildFolder) {
            return grandChildFolder;
        }
    }
    return null;
}
PPSMA.Folder.folderIsAlreadyInDisplay = function PPSMA_Folder$folderIsAlreadyInDisplay(folders, folder) {ULSM53:;
    for (var i = 0; i < folders.length; i++) {
        var folderObj = folders[i];
        var t = Object.getType(folderObj);
        if (t.getName() === 'PPSMA.Folder') {
            var displayFolder = folderObj;
            if (displayFolder.get_name() === folder.get_name()) {
                return true;
            }
        }
    }
    return false;
}
PPSMA.Folder.prototype = {
    _childrenFolders$0: null,
    _childrenDisplayObjects$0: null,
    _name$0: null,
    _level$0: 0,
    _offsetWidth$0: 0,
    _isExpanded$0: false,
    _index$0: 0,
    _resourcePath$0: null,
    _imagesPath$0: null,
    
    get_resourcePath: function PPSMA_Folder$get_resourcePath() {ULSM53:;
        return this._resourcePath$0;
    },
    set_resourcePath: function PPSMA_Folder$set_resourcePath(value) {ULSM53:;
        this._resourcePath$0 = value;
        return value;
    },
    
    get_imagesPath: function PPSMA_Folder$get_imagesPath() {ULSM53:;
        return this._imagesPath$0;
    },
    set_imagesPath: function PPSMA_Folder$set_imagesPath(value) {ULSM53:;
        this._imagesPath$0 = value;
        return value;
    },
    
    get_expanded: function PPSMA_Folder$get_expanded() {ULSM53:;
        return this._isExpanded$0;
    },
    set_expanded: function PPSMA_Folder$set_expanded(value) {ULSM53:;
        this._isExpanded$0 = value;
        return value;
    },
    
    get_index: function PPSMA_Folder$get_index() {ULSM53:;
        return this._index$0;
    },
    set_index: function PPSMA_Folder$set_index(value) {ULSM53:;
        this._index$0 = value;
        return value;
    },
    
    get_uniqueId: function PPSMA_Folder$get_uniqueId() {ULSM53:;
        return (PPSMA.Folder.listElemID + 'F' + this._index$0);
    },
    
    get_offsetWidth: function PPSMA_Folder$get_offsetWidth() {ULSM53:;
        return this._offsetWidth$0;
    },
    set_offsetWidth: function PPSMA_Folder$set_offsetWidth(value) {ULSM53:;
        this._offsetWidth$0 = value;
        return value;
    },
    
    get_childrenFolders: function PPSMA_Folder$get_childrenFolders() {ULSM53:;
        return this._childrenFolders$0;
    },
    
    get_name: function PPSMA_Folder$get_name() {ULSM53:;
        return this._name$0;
    },
    
    get_level: function PPSMA_Folder$get_level() {ULSM53:;
        return this._level$0;
    },
    
    expandCollapse: function PPSMA_Folder$expandCollapse(folderElem) {ULSM53:;
        this._setExpandCollapse$p$0(folderElem, !this._isExpanded$0);
    },
    
    writeDivOutputHtml: function PPSMA_Folder$writeDivOutputHtml(ctrlProxyId, ulBody, padding, kpiClickFunc, componentInputClickFunc) {ULSM53:;
        var liElemId = PPSMA.Measures.getFolderUniqueID(this, ctrlProxyId);
        var listElem = document.createElement('li');
        var listAInput = document.createElement('a');
        var imgExCo = document.createElement('img');
        var imgFolder = document.createElement('img');
        imgFolder.setAttribute('src', this.get_imagesPath() + PPSMA.Folder._folderGifName$p);
        listElem.setAttribute('id', liElemId);
        listElem.className = PPSMA.Measure.classThinFieldListLI;
        listElem.style.listStyleType = 'none';
        listElem.style.paddingTop = '3px';
        listAInput.setAttribute('href', '#');
        listAInput.className = PPSMA.Folder.classExCoA;
        imgExCo.className = PPSMA.Folder.classExCoImg;
        imgFolder.className = PPSMA.Folder.classFolderImg;
        listAInput.appendChild(imgExCo);
        listElem.appendChild(listAInput);
        listElem.appendChild(imgFolder);
        var spanElement = document.createElement('span');
        spanElement.style.textIndent = '0px';
        spanElement.style.position = 'absolute';
        spanElement.style.paddingTop = '1px';
        spanElement.style.paddingRight = '2px';
        spanElement.style.paddingBottom = '2px';
        spanElement.style.paddingLeft = '5px';
        listElem.appendChild(spanElement);
        ulBody.appendChild(listElem);
        if (!ulBody.id.endsWith(PPSMA.ThinFieldList.ulidDisplayObjectParent)) {
            ulBody.style.paddingLeft = '20px';
        }
        else {
            ulBody.style.paddingLeft = '0px';
        }
        this.set_offsetWidth(listElem.offsetWidth);
        var atLeastOneMeasureIsChecked = false;
        var ulElem = document.createElement('ul');
        for (var m = 0; m < this._childrenDisplayObjects$0.length; m++) {
            if (Object.getType(this._childrenDisplayObjects$0[m]).getName() !== 'PPSMA.Folder') {
                (this._childrenDisplayObjects$0[m]).writeDivOutputHtml(ctrlProxyId, ulElem, padding, this._index$0, kpiClickFunc, componentInputClickFunc);
                if ((this._childrenDisplayObjects$0[m]).get_selected()) {
                    atLeastOneMeasureIsChecked = true;
                }
            }
        }
        for (var x = 0; x < this._childrenFolders$0.length; x++) {
            var f = this._childrenFolders$0[x];
            if (f.writeDivOutputHtml(ctrlProxyId, ulElem, padding, kpiClickFunc, componentInputClickFunc)) {
                atLeastOneMeasureIsChecked = true;
            }
        }
        listElem.appendChild(ulElem);
        if (atLeastOneMeasureIsChecked) {
            var boldElement = document.createElement('B');
            spanElement.appendChild(boldElement);
            var textElem = window.document.createTextNode(this._name$0);
            boldElement.appendChild(textElem);
            imgExCo.setAttribute('alt', String.format(PPSMA.SR.OlapChangeMeasure_CollapseFolder, this._name$0));
            imgExCo.setAttribute('title', String.format(PPSMA.SR.OlapChangeMeasure_CollapseFolder, this._name$0));
            imgExCo.setAttribute('src', this.get_imagesPath() + PPSMA.Folder._collapseGifName$p);
            ulElem.style.display = 'block';
            this._isExpanded$0 = true;
        }
        else {
            var textElem = window.document.createTextNode(this._name$0);
            spanElement.appendChild(textElem);
            imgExCo.setAttribute('alt', String.format(PPSMA.SR.OlapChangeMeasure_ExpandFolder, this._name$0));
            imgExCo.setAttribute('title', String.format(PPSMA.SR.OlapChangeMeasure_ExpandFolder, this._name$0));
            imgExCo.setAttribute('src', this.get_imagesPath() + PPSMA.Folder._expandGifName$p);
            ulElem.style.display = 'none';
            this._isExpanded$0 = false;
        }
        return atLeastOneMeasureIsChecked;
    },
    
    addMeasure: function PPSMA_Folder$addMeasure(measure) {ULSM53:;
        if (!Array.contains(this._childrenDisplayObjects$0, measure)) {
            Array.add(this._childrenDisplayObjects$0, measure);
        }
    },
    
    addKpi: function PPSMA_Folder$addKpi(kpi) {ULSM53:;
        if (!Array.contains(this._childrenDisplayObjects$0, kpi)) {
            Array.add(this._childrenDisplayObjects$0, kpi);
        }
    },
    
    sortDisplayObjects: function PPSMA_Folder$sortDisplayObjects() {ULSM53:;
        for (var x = 0; x < this._childrenDisplayObjects$0.length; x++) {
            for (var y = 0; y < this._childrenDisplayObjects$0.length; y++) {
                var m1 = this._childrenDisplayObjects$0[x];
                var m2 = this._childrenDisplayObjects$0[y];
                if (m1.get_caption().localeCompare(m2.get_caption()) < 0) {
                    var tmp = this._childrenDisplayObjects$0[y];
                    this._childrenDisplayObjects$0[y] = this._childrenDisplayObjects$0[x];
                    this._childrenDisplayObjects$0[x] = tmp;
                    (this._childrenDisplayObjects$0[y]).set_index(m1.get_index());
                    (this._childrenDisplayObjects$0[x]).set_index(m2.get_index());
                }
            }
        }
        for (var x = 0; x < this._childrenFolders$0.length; x++) {
            for (var y = 0; y < this._childrenFolders$0.length; y++) {
                var f1 = this._childrenFolders$0[x];
                var f2 = this._childrenFolders$0[y];
                if (f1.get_name().localeCompare(f2.get_name()) < 0) {
                    var tmp = this._childrenFolders$0[y];
                    this._childrenFolders$0[y] = this._childrenFolders$0[x];
                    this._childrenFolders$0[x] = tmp;
                }
            }
        }
    },
    
    setMeasuresVisibility: function PPSMA_Folder$setMeasuresVisibility(ctrlProxyId) {ULSM53:;
        var atLeastOneMeasureIsVisible = false;
        for (var m = 0; m < this._childrenDisplayObjects$0.length; m++) {
            var obj = this._childrenDisplayObjects$0[m];
            if (obj.setVisibility(ctrlProxyId, this._index$0)) {
                atLeastOneMeasureIsVisible = true;
            }
        }
        for (var f = 0; f < this._childrenFolders$0.length; f++) {
            var folder = this._childrenFolders$0[f];
            if (folder.setMeasuresVisibility(ctrlProxyId)) {
                atLeastOneMeasureIsVisible = true;
            }
        }
        this._setVisibility$p$0(ctrlProxyId, atLeastOneMeasureIsVisible);
        return atLeastOneMeasureIsVisible;
    },
    
    _setMeasuresAndKpisAreSelected$p$0: function PPSMA_Folder$_setMeasuresAndKpisAreSelected$p$0(ctrlProxyId, hasSelectedComponents) {ULSM53:;
        var folderElemId = PPSMA.Measures.getFolderUniqueID(this, ctrlProxyId);
        var folderElem = $get(folderElemId);
        var span_Children = folderElem.getElementsByTagName('span');
        var spanElem = span_Children[0];
        if (spanElem) {
            while (spanElem.childNodes.length > 0) {
                spanElem.removeChild(spanElem.childNodes[0]);
            }
            if (hasSelectedComponents) {
                var boldElement = document.createElement('B');
                spanElem.appendChild(boldElement);
                var textElem = window.document.createTextNode(this._name$0);
                boldElement.appendChild(textElem);
            }
            else {
                var textElem = window.document.createTextNode(this._name$0);
                spanElem.appendChild(textElem);
            }
        }
    },
    
    setInputElemCheckValue: function PPSMA_Folder$setInputElemCheckValue(obj, inputElem, ctrlProxyId, component, isChecked) {ULSM53:;
        if (Array.contains(this._childrenDisplayObjects$0, obj)) {
            obj.setInputElemCheckValue(ctrlProxyId, inputElem, this._index$0, component, isChecked);
        }
        for (var i = 0; i < this._childrenFolders$0.length; i++) {
            (this._childrenFolders$0[i]).setInputElemCheckValue(obj, inputElem, ctrlProxyId, component, isChecked);
        }
        this.checkForSelectedMeasuresAndKpis(ctrlProxyId);
    },
    
    checkForSelectedMeasuresAndKpis: function PPSMA_Folder$checkForSelectedMeasuresAndKpis(ctrlProxyId) {ULSM53:;
        var atLeastOneComponentIsSelected = false;
        for (var m = 0; m < this._childrenDisplayObjects$0.length; m++) {
            var obj = this._childrenDisplayObjects$0[m];
            if (obj.get_selected()) {
                atLeastOneComponentIsSelected = true;
            }
        }
        for (var f = 0; f < this._childrenFolders$0.length; f++) {
            var folder = this._childrenFolders$0[f];
            if (folder.checkForSelectedMeasuresAndKpis(ctrlProxyId)) {
                atLeastOneComponentIsSelected = true;
            }
        }
        this._setMeasuresAndKpisAreSelected$p$0(ctrlProxyId, atLeastOneComponentIsSelected);
        return atLeastOneComponentIsSelected;
    },
    
    _setExpandCollapse$p$0: function PPSMA_Folder$_setExpandCollapse$p$0(folderElem, e) {ULSM53:;
        var folder_Children = folderElem.getElementsByTagName('ul');
        var ulElem = folder_Children[0];
        if (!ulElem) {
            return;
        }
        var img_Children = folderElem.getElementsByTagName('img');
        var ulImgElem = img_Children[0];
        if (ulImgElem) {
            if (!ulElem.id.endsWith(PPSMA.ThinFieldList.ulidDisplayObjectParent)) {
                ulElem.style.paddingLeft = '20px';
            }
            else {
                ulElem.style.paddingLeft = '0px';
            }
            if (!e) {
                ulElem.style.display = 'none';
                ulImgElem.setAttribute('alt', String.format(PPSMA.SR.OlapChangeMeasure_ExpandFolder, this._name$0));
                ulImgElem.setAttribute('title', String.format(PPSMA.SR.OlapChangeMeasure_ExpandFolder, this._name$0));
                ulImgElem.setAttribute('src', this.get_imagesPath() + PPSMA.Folder._expandGifName$p);
            }
            else {
                ulElem.style.display = 'block';
                ulImgElem.setAttribute('alt', String.format(PPSMA.SR.OlapChangeMeasure_CollapseFolder, this._name$0));
                ulImgElem.setAttribute('title', String.format(PPSMA.SR.OlapChangeMeasure_CollapseFolder, this._name$0));
                ulImgElem.setAttribute('src', this.get_imagesPath() + PPSMA.Folder._collapseGifName$p);
            }
        }
        this._isExpanded$0 = e;
    },
    
    _setVisibility$p$0: function PPSMA_Folder$_setVisibility$p$0(ctrlProxyId, v) {ULSM53:;
        var folderElemId = PPSMA.Measures.getFolderUniqueID(this, ctrlProxyId);
        var folderElem = $get(folderElemId);
        if (!folderElem) {
            return false;
        }
        if (!v) {
            folderElem.style.display = 'none';
            return false;
        }
        else {
            folderElem.style.display = 'block';
            return true;
        }
    }
}


PPSMA.Measures = function PPSMA_Measures() {ULSM53:;
    this.$$d__kpiClick$p$0 = Function.createDelegate(this, this._kpiClick$p$0);
    this.$$d_measureGroupComboBoxClick = Function.createDelegate(this, this.measureGroupComboBoxClick);
    this.$$d_handleExpandCollapseClick = Function.createDelegate(this, this.handleExpandCollapseClick);
    this._kpiClickFunc$0 = null;
    this._axis$0 = PPSMA.Measures.noAxisSelected;
    this._measureCount$0 = 0;
    this._selectedCount$0 = 0;
    this._kpiCount$0 = 0;
    this._hierarchies$0 = [];
    this._displayFolders$0 = [];
    this._displayObjects$0 = [];
    this._displayKpisEnabled$0 = false;
    this._multiSelectEnabled$0 = true;
}
PPSMA.Measures.getMeasureUniqueID = function PPSMA_Measures$getMeasureUniqueID(measure, ctrlProxyId) {ULSM53:;
    if (!measure) {
        return '';
    }
    return (ctrlProxyId + measure.get_uniqueId());
}
PPSMA.Measures.getKpiUniqueID = function PPSMA_Measures$getKpiUniqueID(kpi, ctrlProxyId) {ULSM53:;
    if (!kpi) {
        return '';
    }
    return (ctrlProxyId + kpi.get_uniqueId());
}
PPSMA.Measures.getFolderUniqueID = function PPSMA_Measures$getFolderUniqueID(folder, ctrlProxyId) {ULSM53:;
    if (!folder) {
        return '';
    }
    return (ctrlProxyId + folder.get_uniqueId());
}
PPSMA.Measures.prototype = {
    _measures$0: null,
    _kpis$0: null,
    _measureCount$0: 0,
    _selectedCount$0: 0,
    _kpiCount$0: 0,
    _axis$0: null,
    _hierarchies$0: null,
    _displayFolders$0: null,
    _displayObjects$0: null,
    _labelOffsetWidth$0: 0,
    _ctrlProxyId$0: null,
    _multiSelectEnabled$0: false,
    _displayKpisEnabled$0: false,
    _kpiClickFunc$0: null,
    _measureGroupNames$0: null,
    _measureGroupCaptions$0: null,
    _resourcePath$0: null,
    _imagesPath$0: null,
    _currentMeasureGroupName$0: null,
    
    get_imagesPath: function PPSMA_Measures$get_imagesPath() {ULSM53:;
        return this._imagesPath$0;
    },
    set_imagesPath: function PPSMA_Measures$set_imagesPath(value) {ULSM53:;
        this._imagesPath$0 = value;
        return value;
    },
    
    get_resourcePath: function PPSMA_Measures$get_resourcePath() {ULSM53:;
        return this._resourcePath$0;
    },
    set_resourcePath: function PPSMA_Measures$set_resourcePath(value) {ULSM53:;
        this._resourcePath$0 = value;
        return value;
    },
    
    get_ctrlProxyId: function PPSMA_Measures$get_ctrlProxyId() {ULSM53:;
        return this._ctrlProxyId$0;
    },
    set_ctrlProxyId: function PPSMA_Measures$set_ctrlProxyId(value) {ULSM53:;
        this._ctrlProxyId$0 = value;
        return value;
    },
    
    get_multiSelectEnabled: function PPSMA_Measures$get_multiSelectEnabled() {ULSM53:;
        return this._multiSelectEnabled$0;
    },
    set_multiSelectEnabled: function PPSMA_Measures$set_multiSelectEnabled(value) {ULSM53:;
        this._multiSelectEnabled$0 = value;
        return value;
    },
    
    get_displayKpis: function PPSMA_Measures$get_displayKpis() {ULSM53:;
        return this._displayKpisEnabled$0;
    },
    set_displayKpis: function PPSMA_Measures$set_displayKpis(value) {ULSM53:;
        this._displayKpisEnabled$0 = value;
        return value;
    },
    
    get_selectedCount: function PPSMA_Measures$get_selectedCount() {ULSM53:;
        return this._selectedCount$0;
    },
    set_selectedCount: function PPSMA_Measures$set_selectedCount(value) {ULSM53:;
        this._selectedCount$0 = value;
        return value;
    },
    
    get_measureCount: function PPSMA_Measures$get_measureCount() {ULSM53:;
        return this._measureCount$0;
    },
    
    get_haveData: function PPSMA_Measures$get_haveData() {ULSM53:;
        if ((this._measureCount$0 > 0) || (this._kpiCount$0 > 0)) {
            return true;
        }
        else {
            return false;
        }
    },
    
    get_kpiCount: function PPSMA_Measures$get_kpiCount() {ULSM53:;
        return this._kpiCount$0;
    },
    
    get_measureGroupName: function PPSMA_Measures$get_measureGroupName() {ULSM53:;
        if ((this._currentMeasureGroupName$0) && (this._currentMeasureGroupName$0 !== PPSMA.Measures.measureGroupALLID)) {
            return this._currentMeasureGroupName$0;
        }
        else {
            return '';
        }
    },
    set_measureGroupName: function PPSMA_Measures$set_measureGroupName(value) {ULSM53:;
        this._currentMeasureGroupName$0 = value;
        return value;
    },
    
    get_axis: function PPSMA_Measures$get_axis() {ULSM53:;
        return this._axis$0;
    },
    
    get_displayObjectCount: function PPSMA_Measures$get_displayObjectCount() {ULSM53:;
        return this._displayObjects$0.length;
    },
    
    get_hierarchyCount: function PPSMA_Measures$get_hierarchyCount() {ULSM53:;
        return this._hierarchies$0.length;
    },
    
    get_labelOffsetWidth: function PPSMA_Measures$get_labelOffsetWidth() {ULSM53:;
        return this._labelOffsetWidth$0;
    },
    
    measureGroupDrowDownComboBoxID: null,
    
    getDisplayObject: function PPSMA_Measures$getDisplayObject(index) {ULSM53:;
        if ((index >= 0) && (index < this._displayObjects$0.length)) {
            return this._displayObjects$0[index];
        }
        return null;
    },
    
    findMeasureOrKpiByID: function PPSMA_Measures$findMeasureOrKpiByID(elemId) {ULSM53:;
        var obj = this.findMeasureByID(elemId);
        if (obj) {
            return obj;
        }
        obj = this.findKpiByID(elemId);
        if (obj) {
            return obj;
        }
        return null;
    },
    
    findMeasureByID: function PPSMA_Measures$findMeasureByID(measureElemId) {ULSM53:;
        if (!this._measures$0) {
            return null;
        }
        var folderNameBreak = measureElemId.indexOf('_F');
        var uniqueId = measureElemId.substr(0, folderNameBreak);
        for (var i = 0; i < this._measures$0.length; i++) {
            var id = (this._ctrlProxyId$0 + this._measures$0[i].get_uniqueId());
            if (id === uniqueId) {
                return this._measures$0[i];
            }
        }
        return null;
    },
    
    findKpiComponentID: function PPSMA_Measures$findKpiComponentID(kpiComponentElemId) {ULSM53:;
        if (!this._displayKpisEnabled$0) {
            return '';
        }
        var folderNameBreak = kpiComponentElemId.indexOf('_F');
        var uniqueId = kpiComponentElemId.substr(0, folderNameBreak);
        var componentBreak = kpiComponentElemId.indexOf('_', (folderNameBreak + 2));
        return (kpiComponentElemId.substr((componentBreak + 1), kpiComponentElemId.length));
    },
    
    findKpiByID: function PPSMA_Measures$findKpiByID(kpiElemId) {ULSM53:;
        if ((!this._displayKpisEnabled$0) || (!this._kpis$0)) {
            return null;
        }
        var folderNameBreak = kpiElemId.indexOf('_F');
        var uniqueId = kpiElemId.substr(0, folderNameBreak);
        for (var i = 0; i < this._kpis$0.length; i++) {
            var id = (this._ctrlProxyId$0 + this._kpis$0[i].get_uniqueId());
            if (id === uniqueId) {
                return this._kpis$0[i];
            }
        }
        return null;
    },
    
    findFolderByID: function PPSMA_Measures$findFolderByID(folderElemId) {ULSM53:;
        var folderNameBreak = folderElemId.indexOf('_F');
        var uniqueIdStr = folderElemId.substring((folderNameBreak + 2), folderElemId.length);
        var folderIndex = parseInt(uniqueIdStr);
        return (PPSMA.Folder.getChildFolder(this._displayFolders$0, '', folderIndex));
    },
    
    setQueryOrder: function PPSMA_Measures$setQueryOrder(obj, order, ctrlProxyId) {ULSM53:;
        if (!this._measures$0) {
            return false;
        }
        if (!obj) {
            return false;
        }
        if (!obj.get_selected()) {
            return false;
        }
        if (obj.get_order() === order) {
            return false;
        }
        if (obj.get_order() < order) {
            for (var o = (obj.get_order() + 1); o <= order; o++) {
                var reOrderedObj = this.getSelectedMeasureOrKpiByOrder(o);
                if (reOrderedObj) {
                    reOrderedObj.set_order((o - 1));
                }
            }
        }
        else {
            for (var o = (obj.get_order() - 1); o >= order; o--) {
                var reOrderedObj = this.getSelectedMeasureOrKpiByOrder(o);
                if (reOrderedObj) {
                    reOrderedObj.set_order((o + 1));
                }
            }
        }
        obj.set_order(order);
        return true;
    },
    
    getSelectedMeasureOrKpiByOrder: function PPSMA_Measures$getSelectedMeasureOrKpiByOrder(orderIndex) {ULSM53:;
        var obj = this.getSelectedMeasureByOrder(orderIndex);
        if (obj) {
            return obj;
        }
        obj = this.getSelectedKpiByOrder(orderIndex);
        if (obj) {
            return obj;
        }
        return null;
    },
    
    getSelectedMeasureByOrder: function PPSMA_Measures$getSelectedMeasureByOrder(orderIndex) {ULSM53:;
        for (var i = 0; i < this._measures$0.length; i++) {
            if ((this._measures$0[i].get_selected()) && (this._measures$0[i].get_order() === orderIndex)) {
                return this._measures$0[i];
            }
        }
        return null;
    },
    
    getSelectedKpiByOrder: function PPSMA_Measures$getSelectedKpiByOrder(orderIndex) {ULSM53:;
        if ((!this._displayKpisEnabled$0) || (!this._kpis$0)) {
            return null;
        }
        for (var i = 0; i < this._kpis$0.length; i++) {
            if ((this._kpis$0[i].get_selected()) && (this._kpis$0[i].get_order() === orderIndex)) {
                return this._kpis$0[i];
            }
        }
        return null;
    },
    
    getObjectByName: function PPSMA_Measures$getObjectByName(uniqueName) {ULSM53:;
        if (!this._measures$0) {
            return null;
        }
        var meas = this.getMeasureByName(uniqueName);
        if (meas) {
            return meas;
        }
        var kpi = this.getKpiByName(uniqueName);
        if (kpi) {
            return kpi;
        }
        return null;
    },
    
    getMeasureByName: function PPSMA_Measures$getMeasureByName(uniqueName) {ULSM53:;
        for (var i = 0; i < this._measures$0.length; i++) {
            if (this._measures$0[i].get_name() === uniqueName) {
                return this._measures$0[i];
            }
        }
        return null;
    },
    
    getKpiByName: function PPSMA_Measures$getKpiByName(uniqueName) {ULSM53:;
        if ((!this._displayKpisEnabled$0) || (!this._kpis$0)) {
            return null;
        }
        for (var i = 0; i < this._kpis$0.length; i++) {
            if (this._kpis$0[i].get_name() === uniqueName) {
                return this._kpis$0[i];
            }
        }
        return null;
    },
    
    getMeasure: function PPSMA_Measures$getMeasure(index) {ULSM53:;
        if (!this._measureCount$0) {
            return null;
        }
        for (var i = 0; i < this._measures$0.length; i++) {
            if (this._measures$0[i].get_index() === index) {
                return this._measures$0[i];
            }
        }
        return null;
    },
    
    getKpi: function PPSMA_Measures$getKpi(index) {ULSM53:;
        if (!this._kpiCount$0) {
            return null;
        }
        for (var i = 0; i < this._kpis$0.length; i++) {
            if (this._kpis$0[i].get_index() === index) {
                return this._kpis$0[i];
            }
        }
        return null;
    },
    
    getHierarchyName: function PPSMA_Measures$getHierarchyName(index) {ULSM53:;
        if ((index < 0) || (index >= this._hierarchies$0.length)) {
            return '';
        }
        return this._hierarchies$0[index].toString();
    },
    
    measureGroupComboBoxClick: function PPSMA_Measures$measureGroupComboBoxClick(e) {ULSM53:;
        var mgParentElem = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
        if (!mgParentElem) {
            return;
        }
        var optionCollection = mgParentElem.getElementsByTagName('option');
        for (var i = 0; i < optionCollection.length; ++i) {
            var optionElem = optionCollection[i];
            if (optionElem.selected) {
                var mgName = optionElem.id.substring(PPSMA.Measures.measureGroupID.length, optionElem.id.length);
                if (mgName !== PPSMA.Measures.measureGroupALLID) {
                    mgParentElem.title = mgName;
                }
                else {
                    mgParentElem.title = PPSMA.SR.OlapChangeMeasure_AllMeasureGroups;
                }
                this._setVisibilityOfMeasureGroupComboItems$p$0(mgName);
                this._currentMeasureGroupName$0 = mgName;
                break;
            }
        }
    },
    
    resize: function PPSMA_Measures$resize(width) {ULSM53:;
        var measGroupsDropDownElem = $get(this._ctrlProxyId$0 + PPSMA.Measures.measureGroupDropDownComboxBoxID);
        if (measGroupsDropDownElem) {
            measGroupsDropDownElem.style.width = width.toString() + 'px';
        }
    },
    
    getMeasureGroupComboBoxHtml: function PPSMA_Measures$getMeasureGroupComboBoxHtml() {ULSM53:;
        var measGroupsDropDownElem = document.createElement('select');
        measGroupsDropDownElem.id = this._ctrlProxyId$0 + PPSMA.Measures.measureGroupDropDownComboxBoxID;
        measGroupsDropDownElem.className = PPSMA.Measures._classSelectGroup$p;
        $addHandler(measGroupsDropDownElem, 'change', this.$$d_measureGroupComboBoxClick);
        var dropDownElemAllMeasureGroups = document.createElement('option');
        dropDownElemAllMeasureGroups.id = PPSMA.Measures.measureGroupID + PPSMA.Measures.measureGroupALLID;
        dropDownElemAllMeasureGroups.selected = true;
        dropDownElemAllMeasureGroups.innerHTML = PPSMA.SR.OlapChangeMeasure_AllMeasureGroups;
        measGroupsDropDownElem.title = PPSMA.SR.OlapChangeMeasure_AllMeasureGroups;
        measGroupsDropDownElem.appendChild(dropDownElemAllMeasureGroups);
        return measGroupsDropDownElem;
    },
    
    writeMeasureGroupComboBoxContents: function PPSMA_Measures$writeMeasureGroupComboBoxContents() {ULSM53:;
        if (!this._measureGroupNames$0) {
            return;
        }
        if (this._measureGroupNames$0.length > 0) {
            var measGroupsDropDownElem = $get((this._ctrlProxyId$0 + PPSMA.Measures.measureGroupDropDownComboxBoxID));
            if (measGroupsDropDownElem) {
                for (var i = 0; i < this._measureGroupNames$0.length; i++) {
                    var dropDownElem = document.createElement('option');
                    dropDownElem.id = PPSMA.Measures.measureGroupID + this._measureGroupNames$0[i];
                    dropDownElem.innerHTML = this._measureGroupCaptions$0[i];
                    measGroupsDropDownElem.appendChild(dropDownElem);
                    if (this._currentMeasureGroupName$0 === this._measureGroupNames$0[i]) {
                        dropDownElem.selected = true;
                        measGroupsDropDownElem.title = this._measureGroupCaptions$0[i];
                    }
                }
            }
        }
        else {
        }
    },
    
    writeDivOutputHtml: function PPSMA_Measures$writeDivOutputHtml(ulBody, componentInputClickFunc) {ULSM53:;
        if (this._displayKpisEnabled$0) {
            if (!this._kpiClickFunc$0) {
                this._kpiClickFunc$0 = this.$$d__kpiClick$p$0;
            }
        }
        this._sortDisplayObjects$p$0();
        this._labelOffsetWidth$0 = 0;
        for (var i = 0; i < this._displayObjects$0.length; i++) {
            var width = 0;
            if (Object.getType(this._displayObjects$0[i]).getName() !== 'PPSMA.Folder') {
                (this._displayObjects$0[i]).writeDivOutputHtml(this._ctrlProxyId$0, ulBody, 0, 0, this._kpiClickFunc$0, componentInputClickFunc);
                width = (this._displayObjects$0[i]).get_offsetWidth();
            }
            else {
                var folder = this._displayObjects$0[i];
                folder.writeDivOutputHtml(this._ctrlProxyId$0, ulBody, 0, this._kpiClickFunc$0, componentInputClickFunc);
                width = folder.get_offsetWidth();
            }
            if (width > this._labelOffsetWidth$0) {
                this._labelOffsetWidth$0 = width;
            }
        }
        if ((this._currentMeasureGroupName$0) && (this._currentMeasureGroupName$0 !== '')) {
            this._setVisibilityOfMeasureGroupComboItems$p$0(this._currentMeasureGroupName$0);
        }
    },
    
    loadMeasuresFromXml: function PPSMA_Measures$loadMeasuresFromXml(xdoc) {ULSM53:;
        if (!xdoc) {
            return 0;
        }
        this._loadMeasureGroupComboBoxItems$p$0(xdoc);
        this._sortMeasureGroupComboBoxItems$p$0();
        this._measureCount$0 = 0;
        this._kpiCount$0 = 0;
        if (xdoc.documentElement) {
            this._currentMeasureGroupName$0 = xdoc.documentElement.getAttribute('LastMeasureGroupName');
        }
        PPSMA.Measures.folderCount = 0;
        var xmlMeasureElements = xdoc.getElementsByTagName('Measure');
        if (xmlMeasureElements.length > 0) {
            Array.clear(this._hierarchies$0);
            this._measures$0 = new Array(xmlMeasureElements.length);
            if (xmlMeasureElements.length > 0) {
                for (var i = 0; i < xmlMeasureElements.length; i++) {
                    this._measures$0[i] = new PPSMA.Measure();
                    this._measures$0[i].set_name(xmlMeasureElements[i].getAttribute('uniqueName'));
                    this._measures$0[i].set_caption(xmlMeasureElements[i].getAttribute('caption'));
                    this._measures$0[i].set_index(i);
                    this._measures$0[i].set_resourcePath(this.get_resourcePath());
                    var folders = PPSMA.Folder.addFolders(this._displayFolders$0, this._maxFolderDepthFixup$p$0(xmlMeasureElements[i].getAttribute('displayFolder')), this._measures$0[i], 1, this.get_resourcePath(), this.get_imagesPath());
                    if (folders) {
                        for (var x = 0; x < folders.length; x++) {
                            if (!PPSMA.Folder.folderIsAlreadyInDisplay(this._displayObjects$0, folders[x])) {
                                Array.add(this._displayObjects$0, folders[x]);
                            }
                        }
                    }
                    else {
                        Array.add(this._displayObjects$0, this._measures$0[i]);
                    }
                    this._measures$0[i].set_description(xmlMeasureElements[i].getAttribute('description'));
                    this._measures$0[i].set_measureGroupName(xmlMeasureElements[i].getAttribute('measureGroup'));
                    this._setHierarchyName$p$0(this._measures$0[i], xmlMeasureElements[i].getAttribute('hierarchyName'));
                }
            }
            this._measureCount$0 = xmlMeasureElements.length;
            if (this._displayKpisEnabled$0) {
                var xmlKpiElements = xdoc.getElementsByTagName('Kpi');
                if (xmlKpiElements.length > 0) {
                    this._kpis$0 = new Array(xmlKpiElements.length);
                    for (var i = 0; i < xmlKpiElements.length; i++) {
                        this._kpis$0[i] = new PPSMA.Kpi();
                        this._kpis$0[i].set_name(xmlKpiElements[i].getAttribute('uniqueName'));
                        this._kpis$0[i].set_caption(xmlKpiElements[i].getAttribute('caption'));
                        this._kpis$0[i].set_index(i);
                        this._kpis$0[i].set_resourcePath(this.get_resourcePath());
                        var folders = PPSMA.Folder.addFolders(this._displayFolders$0, this._maxFolderDepthFixup$p$0(xmlKpiElements[i].getAttribute('displayFolder')), this._kpis$0[i], 1, this.get_resourcePath(), this.get_imagesPath());
                        if (folders) {
                            for (var x = 0; x < folders.length; x++) {
                                if (!PPSMA.Folder.folderIsAlreadyInDisplay(this._displayObjects$0, folders[x])) {
                                    Array.add(this._displayObjects$0, folders[x]);
                                }
                            }
                        }
                        else {
                            Array.add(this._displayObjects$0, this._kpis$0[i]);
                        }
                        this._kpis$0[i].set_value(xmlKpiElements[i].getAttribute('value'));
                        this._kpis$0[i].set_goal(xmlKpiElements[i].getAttribute('goal'));
                        this._kpis$0[i].set_status(xmlKpiElements[i].getAttribute('status'));
                        this._kpis$0[i].set_trend(xmlKpiElements[i].getAttribute('trend'));
                        this._kpis$0[i].set_description(xmlKpiElements[i].getAttribute('description'));
                        this._kpis$0[i].set_measureGroupName(xmlKpiElements[i].getAttribute('measureGroup'));
                    }
                }
                this._kpiCount$0 = xmlKpiElements.length;
            }
        }
        return (this._measureCount$0 + this._kpiCount$0);
    },
    
    setSelectedMeasuresFromResults: function PPSMA_Measures$setSelectedMeasuresFromResults(results) {ULSM53:;
        if (!this._measures$0) {
            return;
        }
        for (var m = 0; m < this._measures$0.length; m++) {
            this._measures$0[m].set_selected(false);
            this._measures$0[m].set_order(-1);
        }
        var measuresFound = false;
        this._selectedCount$0 = 0;
        for (var i = 0; i < results.get_rowHierarchies().length; i++) {
            for (var y = 0; y < this._measures$0.length; y++) {
                var rowMembers = results.get_rowMembers();
                if (rowMembers) {
                    for (var z = 0; z < rowMembers.length; z++) {
                        if (this._measures$0[y].get_name() === rowMembers[z][i].get_name()) {
                            ++this._selectedCount$0;
                            this._measures$0[y].set_selected(true);
                            this._measures$0[y].set_order(z);
                            measuresFound = true;
                            this._axis$0 = 'Rows';
                            if (!this._multiSelectEnabled$0) {
                                return;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (measuresFound) {
            return;
        }
        for (var i = 0; i < results.get_columnHierarchies().length; i++) {
            for (var y = 0; y < this._measures$0.length; y++) {
                var colMembers = results.get_columnMembers();
                if (colMembers) {
                    for (var z = 0; z < colMembers.length; z++) {
                        if (this._measures$0[y].get_name() === colMembers[z][i].get_name()) {
                            ++this._selectedCount$0;
                            this._measures$0[y].set_selected(true);
                            this._measures$0[y].set_order(z);
                            measuresFound = true;
                            this._axis$0 = 'Columns';
                            if (!this._multiSelectEnabled$0) {
                                return;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (measuresFound) {
            return;
        }
        if (0 === results.get_rowHierarchies().length || 0 === results.get_columnHierarchies().length) {
            return;
        }
        for (var y = 0; y < this._measures$0.length; y++) {
            var bgMembers = results.get_filterMembers();
            if (bgMembers) {
                for (var z = 0; z < bgMembers.length; z++) {
                    if (this._measures$0[y].get_name() === bgMembers[z].get_name()) {
                        ++this._selectedCount$0;
                        this._measures$0[y].set_selected(true);
                        this._measures$0[y].set_order(z);
                        measuresFound = true;
                        this._axis$0 = 'Filter';
                        if (!this._multiSelectEnabled$0) {
                            return;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    },
    
    componentClicked: function PPSMA_Measures$componentClicked(obj, inputElem, component, isChecked) {ULSM53:;
        var numSelected;
        if (!isChecked) {
            obj.set_order(-1);
            numSelected = (this._selectedCount$0 - 1);
        }
        else {
            obj.set_order(this._selectedCount$0);
            numSelected = (this._selectedCount$0 + 1);
        }
        if ((!this._multiSelectEnabled$0) && (isChecked)) {
            for (var i = 0; i < this._measures$0.length; i++) {
                var meas = this._measures$0[i];
                if (meas === obj) {
                    continue;
                }
                if (meas.get_selected()) {
                    meas.set_order(-1);
                    this._setMeasureOrKpiInputElemCheckValue$p$0(meas, inputElem, '', false);
                    break;
                }
            }
            for (var i = 0; i < this._kpis$0.length; i++) {
                var kpi = this._kpis$0[i];
                if (kpi === obj) {
                    continue;
                }
                if (kpi.get_selected()) {
                    kpi.set_order(-1);
                    this._setMeasureOrKpiInputElemCheckValue$p$0(kpi, inputElem, '', false);
                    break;
                }
            }
            numSelected = 1;
            obj.set_order(0);
        }
        this._setMeasureOrKpiInputElemCheckValue$p$0(obj, inputElem, component, isChecked);
        this._selectedCount$0 = numSelected;
        return obj.get_selected();
    },
    
    deSelectObject: function PPSMA_Measures$deSelectObject(obj) {ULSM53:;
        if (!this._measures$0) {
            return false;
        }
        if (!obj) {
            return false;
        }
        if (!obj.get_selected()) {
            return false;
        }
        obj.set_order(-1);
        this._setMeasureOrKpiInputElemCheckValue$p$0(obj, null, '', false);
        return true;
    },
    
    _setVisibilityOfMeasureGroupComboItems$p$0: function PPSMA_Measures$_setVisibilityOfMeasureGroupComboItems$p$0(selectedMeasureGroupName) {ULSM53:;
        for (var m = 0; m < this._measures$0.length; m++) {
            var meas = this._measures$0[m];
            if (selectedMeasureGroupName === PPSMA.Measures.measureGroupALLID) {
                meas.set_visible(true);
            }
            else {
                if (meas.get_measureGroupName() === selectedMeasureGroupName) {
                    meas.set_visible(true);
                }
                else {
                    meas.set_visible(false);
                }
            }
        }
        if ((this._displayKpisEnabled$0) && (this._kpis$0)) {
            for (var k = 0; k < this._kpis$0.length; k++) {
                var kpi = this._kpis$0[k];
                if (selectedMeasureGroupName === PPSMA.Measures.measureGroupALLID) {
                    kpi.set_visible(true);
                }
                else {
                    if (kpi.get_measureGroupName() === selectedMeasureGroupName) {
                        kpi.set_visible(true);
                    }
                    else {
                        kpi.set_visible(false);
                    }
                }
            }
        }
        for (var x = 0; x < this._displayObjects$0.length; x++) {
            if (Object.getType(this._displayObjects$0[x]).getName() !== 'PPSMA.Folder') {
                (this._displayObjects$0[x]).setVisibility(this._ctrlProxyId$0, 0);
            }
            else {
                var folder = this._displayObjects$0[x];
                if (folder) {
                    folder.setMeasuresVisibility(this._ctrlProxyId$0);
                }
            }
        }
    },
    
    _loadMeasureGroupComboBoxItems$p$0: function PPSMA_Measures$_loadMeasureGroupComboBoxItems$p$0(xdoc) {ULSM53:;
        var xmlMeasureGroupElements = xdoc.getElementsByTagName('MeasureGroup');
        if (xmlMeasureGroupElements.length > 0) {
            this._measureGroupNames$0 = new Array(xmlMeasureGroupElements.length);
            this._measureGroupCaptions$0 = new Array(xmlMeasureGroupElements.length);
            for (var i = 0; i < xmlMeasureGroupElements.length; i++) {
                this._measureGroupNames$0[i] = xmlMeasureGroupElements[i].getAttribute('name');
                this._measureGroupCaptions$0[i] = xmlMeasureGroupElements[i].getAttribute('caption');
            }
        }
    },
    
    _sortMeasureGroupComboBoxItems$p$0: function PPSMA_Measures$_sortMeasureGroupComboBoxItems$p$0() {ULSM53:;
        if (!this._measureGroupCaptions$0) {
            return;
        }
        if (this._measureGroupCaptions$0.length > 1) {
            for (var x = 0; x < this._measureGroupCaptions$0.length; x++) {
                for (var y = (x + 1); y < this._measureGroupCaptions$0.length; y++) {
                    if (this._measureGroupCaptions$0[x].localeCompare(this._measureGroupCaptions$0[y]) >= 0) {
                        var tmpCaption = this._measureGroupCaptions$0[y];
                        var tmpName = this._measureGroupNames$0[y];
                        this._measureGroupCaptions$0[y] = this._measureGroupCaptions$0[x];
                        this._measureGroupNames$0[y] = this._measureGroupNames$0[x];
                        this._measureGroupCaptions$0[x] = tmpCaption;
                        this._measureGroupNames$0[x] = tmpName;
                    }
                }
            }
        }
    },
    
    _maxFolderDepthFixup$p$0: function PPSMA_Measures$_maxFolderDepthFixup$p$0(folderList) {ULSM53:;
        var multipleFolderNames = folderList.split(PPSMA.Folder.parentChildDelimitor);
        if (multipleFolderNames.length < 5) {
            return folderList;
        }
        else {
            var reducedFolderListStr = (multipleFolderNames[0] + PPSMA.Folder.parentChildDelimitor + multipleFolderNames[1] + PPSMA.Folder.parentChildDelimitor + multipleFolderNames[2] + PPSMA.Folder.parentChildDelimitor + multipleFolderNames[3] + PPSMA.Folder.parentChildDelimitor + multipleFolderNames[4]);
            return reducedFolderListStr;
        }
    },
    
    handleExpandCollapseClick: function PPSMA_Measures$handleExpandCollapseClick(e) {ULSM53:;
        var currEvent = PPSMA.EventsEx.getEvent(e.rawEvent);
        currEvent.cancelBubble = true;
        e.preventDefault();
        e.stopPropagation();
        var clickedElem = e.target;
        var folderElem = null;
        if (PPSMA.DomElementEx.tagsMatch(clickedElem.tagName, 'img') && Sys.UI.DomElement.containsCssClass(clickedElem, PPSMA.Folder.classExCoImg)) {
            folderElem = clickedElem.parentNode.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(clickedElem.tagName, 'a') && Sys.UI.DomElement.containsCssClass(clickedElem, PPSMA.Folder.classExCoA)) {
            folderElem = clickedElem.parentNode;
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('couldn\'t find the folderElem');
        }
        if (folderElem && PPSMA.DomElementEx.tagsMatch(folderElem.tagName, 'li') && Sys.UI.DomElement.containsCssClass(folderElem, PPSMA.Measure.classThinFieldListLI) && !isNullUndefinedOrEmpty(folderElem.id)) {
            var folder = this.findFolderByID(folderElem.id);
            if (folder) {
                folder.expandCollapse(folderElem);
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('couldn\'t find the folderElem');
        }
    },
    
    _kpiClick$p$0: function PPSMA_Measures$_kpiClick$p$0(e) {ULSM53:;
        var currEvent = PPSMA.EventsEx.getEvent(e.rawEvent);
        currEvent.cancelBubble = true;
        e.preventDefault();
        e.stopPropagation();
        var kpiClickElem = PPSMA.EventsEx.getCurrentElement(e.rawEvent);
        if (!kpiClickElem) {
            return;
        }
        var kpiElem = kpiClickElem.parentNode.parentNode;
        var kpi = this.findKpiByID(kpiElem.id);
        if (kpi) {
            kpi.expandCollapse(kpiElem);
        }
    },
    
    _sortDisplayObjects$p$0: function PPSMA_Measures$_sortDisplayObjects$p$0() {ULSM53:;
        for (var x = 0; x < this._displayObjects$0.length; x++) {
            var t1 = Object.getType(this._displayObjects$0[x]);
            if (t1.getName() === 'PPSMA.Folder') {
                for (var y = (x + 1); y < this._displayObjects$0.length; y++) {
                    var t2 = Object.getType(this._displayObjects$0[y]);
                    var t2Name = t2.getName();
                    if ((t2Name === 'PPSMA.Measure') || (t2Name === 'PPSMA.Kpi')) {
                        var tmp = this._displayObjects$0[y];
                        this._displayObjects$0[y] = this._displayObjects$0[x];
                        this._displayObjects$0[x] = tmp;
                        break;
                    }
                }
            }
        }
        for (var x = 0; x < this._displayObjects$0.length; x++) {
            var t1 = Object.getType(this._displayObjects$0[x]);
            if (t1.getName() === 'PPSMA.Folder') {
                break;
            }
            for (var y = 0; y < this._displayObjects$0.length; y++) {
                var t2 = Object.getType(this._displayObjects$0[y]);
                if (t2.getName() === 'PPSMA.Folder') {
                    break;
                }
                var m1 = this._displayObjects$0[x];
                var m2 = this._displayObjects$0[y];
                if (m1.get_caption().localeCompare(m2.get_caption()) < 0) {
                    var tmp = this._displayObjects$0[y];
                    this._displayObjects$0[y] = this._displayObjects$0[x];
                    this._displayObjects$0[x] = tmp;
                    (this._displayObjects$0[y]).set_index(m1.get_index());
                    (this._displayObjects$0[x]).set_index(m2.get_index());
                }
            }
        }
        for (var x = 0; x < this._displayObjects$0.length; x++) {
            var t1Name = Object.getType(this._displayObjects$0[x]).getName();
            if ((t1Name === 'PPSMA.Measure') || (t1Name === 'PPSMA.Kpi')) {
                continue;
            }
            for (var y = 0; y < this._displayObjects$0.length; y++) {
                var t2Name = Object.getType(this._displayObjects$0[y]).getName();
                if ((t2Name === 'PPSMA.Measure') || (t2Name === 'PPSMA.Kpi')) {
                    continue;
                }
                var f1 = this._displayObjects$0[x];
                var f2 = this._displayObjects$0[y];
                if (f1.get_name().localeCompare(f2.get_name()) < 0) {
                    var tmp = this._displayObjects$0[y];
                    this._displayObjects$0[y] = this._displayObjects$0[x];
                    this._displayObjects$0[x] = tmp;
                }
            }
        }
        for (var x = 0; x < this._displayObjects$0.length; x++) {
            var t1Name = Object.getType(this._displayObjects$0[x]).getName();
            if ((t1Name === 'PPSMA.Measure') || (t1Name === 'PPSMA.Kpi')) {
                continue;
            }
            var f1 = this._displayObjects$0[x];
            f1.sortDisplayObjects();
        }
    },
    
    _setHierarchyName$p$0: function PPSMA_Measures$_setHierarchyName$p$0(meas, hierName) {ULSM53:;
        meas.set_axisHierarchy(hierName);
        if (!Array.contains(this._hierarchies$0, hierName)) {
            Array.add(this._hierarchies$0, hierName);
        }
    },
    
    _setMeasureOrKpiInputElemCheckValue$p$0: function PPSMA_Measures$_setMeasureOrKpiInputElemCheckValue$p$0(obj, inputElem, component, isChecked) {ULSM53:;
        for (var i = 0; i < this._displayObjects$0.length; i++) {
            if (Object.getType(this._displayObjects$0[i]).getName() !== 'PPSMA.Folder') {
                if ((this._displayObjects$0[i]).get_name() === obj.get_name()) {
                    obj.setInputElemCheckValue(this._ctrlProxyId$0, inputElem, 0, component, isChecked);
                }
            }
        }
        for (var i = 0; i < this._displayFolders$0.length; i++) {
            var folder = this._displayFolders$0[i];
            folder.setInputElemCheckValue(obj, inputElem, this._ctrlProxyId$0, component, isChecked);
        }
    }
}


PPSMA.DetailsHelper = function PPSMA_DetailsHelper(olapViewContext, contextId, rIndex, cIndex, resultTableIndex) {ULSM53:;
    this._olapViewContext$0 = olapViewContext;
    this._contextId$0 = contextId;
    this._rIndex$0 = rIndex;
    this._cIndex$0 = cIndex;
    this._resultTableIndex$0 = resultTableIndex;
}
PPSMA.DetailsHelper.prototype = {
    _olapViewContext$0: null,
    _contextId$0: null,
    _rIndex$0: 0,
    _cIndex$0: 0,
    _resultTableIndex$0: null,
    
    showDetails: function PPSMA_DetailsHelper$showDetails() {ULSM53:;
        PPSMA.NewWindow.popupShowDetails(this._olapViewContext$0.get_reportId(), this._olapViewContext$0.get_ctrlProxyId(), this.getCellTupleXml(), this._resultTableIndex$0, this._olapViewContext$0.get_drillThroughPage(), this._olapViewContext$0.get_resourcePath(), false);
    },
    
    getCellTupleXml: function PPSMA_DetailsHelper$getCellTupleXml() {ULSM53:;
        var results = this._olapViewContext$0.get_results();
        var rowMembers = results.get_rowMembers();
        var columnMembers = results.get_columnMembers();
        var filterMembers = results.get_filterMembers();
        var xdoc = PPSMA.XmlEx.loadXml('<_dd />');
        var rowMembersElem = xdoc.createElement('RowMembers');
        var columnMembersElem = xdoc.createElement('ColumnMembers');
        var backgroundMembersElem = xdoc.createElement('BackgroundMembers');
        xdoc.documentElement.appendChild(rowMembersElem);
        xdoc.documentElement.appendChild(columnMembersElem);
        xdoc.documentElement.appendChild(backgroundMembersElem);
        if (rowMembers) {
            for (var i = 0; i < rowMembers[this._rIndex$0].length; i++) {
                var row = rowMembers[this._rIndex$0][i];
                var rowElem = xdoc.createElement('Row');
                rowElem.setAttribute('name', row.get_name());
                rowElem.setAttribute('caption', row.get_caption());
                rowMembersElem.appendChild(rowElem);
            }
        }
        if (columnMembers) {
            for (var i = 0; i < columnMembers[this._cIndex$0].length; i++) {
                var column = columnMembers[this._cIndex$0][i];
                var columnElem = xdoc.createElement('Column');
                columnElem.setAttribute('name', column.get_name());
                columnElem.setAttribute('caption', column.get_caption());
                columnMembersElem.appendChild(columnElem);
            }
        }
        if (filterMembers) {
            for (var i = 0; i < filterMembers.length; i++) {
                var filter = filterMembers[i];
                var filterElem = xdoc.createElement('Filter');
                filterElem.setAttribute('name', filter.get_name());
                filterElem.setAttribute('caption', filter.get_caption());
                backgroundMembersElem.appendChild(filterElem);
            }
        }
        return PPSMA.XmlEx.getXml(xdoc.documentElement);
    }
}


PPSMA.DrillDownToHelper = function PPSMA_DrillDownToHelper(drillFromMember, drillFromHierarchy, drillFromAxisId, olapViewContext) {ULSM53:;
    this._drillFromMember$0 = drillFromMember;
    this._drillFromHierarchy$0 = drillFromHierarchy;
    this._drillFromAxisId$0 = drillFromAxisId;
    this._olapViewContext$0 = olapViewContext;
}
PPSMA.DrillDownToHelper._getNonCascadeDimensionHierarchy$p = function PPSMA_DrillDownToHelper$_getNonCascadeDimensionHierarchy$p(udhiers, ahiers) {ULSM53:;
    var lvlCt = 0;
    var singleHier = null;
    if ((udhiers) && (udhiers.length > 0)) {
        for (var hierIndex = 0; hierIndex < udhiers.length; hierIndex++) {
            var hier = udhiers[hierIndex];
            var lvls = hier.get_levels();
            if (lvls.length > 1) {
                lvlCt += lvls.length - 1;
                singleHier = hier;
            }
        }
    }
    if (lvlCt <= 1) {
        if ((ahiers) && (ahiers.length > 0)) {
            for (var hierIndex = 0; hierIndex < ahiers.length; hierIndex++) {
                var hier = ahiers[hierIndex];
                var lvls = hier.get_levels();
                if (lvls.length > 1) {
                    lvlCt += lvls.length - 1;
                    singleHier = hier;
                }
            }
        }
    }
    if (lvlCt > 1) {
        singleHier = null;
    }
    return singleHier;
}
PPSMA.DrillDownToHelper._addSingleLevelUDHierSubMenus$p = function PPSMA_DrillDownToHelper$_addSingleLevelUDHierSubMenus$p(sm, needSep, hierList, nextCaption) {ULSM53:;
    if (!hierList.length) {
        return needSep;
    }
    var sep = needSep;
    var i = 0;
    var removed = false;
    var caption = '';
    if ((hierList.length > 0) && (hierList[0])) {
        caption = hierList[i].caption;
    }
    while (i < hierList.length && hierList[i] && compareStrings(caption, nextCaption)) {
        if (sep) {
            PPSMA.ContextMenu.addMenuSeparator(sm);
            sep = false;
        }
        var fn = hierList[i].fn;
        var imgRes = hierList[i].imgRes;
        caption = hierList[i].caption;
        PPSMA.ContextMenu.addMenuOption(sm, caption, fn, imgRes, null, false, false);
        hierList[i] = null;
        removed = true;
        i++;
    }
    if (removed) {
        for (i = 0; i < hierList.length; i++) {
            if (hierList[i]) {
                Array.removeAt(hierList, i);
                i--;
            }
        }
    }
    return sep;
}
PPSMA.DrillDownToHelper._addMultiItemsSubMenu$p = function PPSMA_DrillDownToHelper$_addMultiItemsSubMenu$p(sm, hier, menuClickHandler) {ULSM53:;
    var fn = menuClickHandler + '(\'' + escape(hier.get_name());
    fn += '\', \'\', \'\');';
    var text = PPSMA.SR.OlapContextMenu_MultipleSelections;
    PPSMA.ContextMenu.addMenuOption(sm, text, fn, null, null, false, true);
}
PPSMA.DrillDownToHelper._shouldShowDimensionInMenu$p = function PPSMA_DrillDownToHelper$_shouldShowDimensionInMenu$p(dim) {ULSM53:;
    var res = false;
    if (dim) {
        if (dim.get_dimensionType() !== 2) {
            var udhiers = dim.get_userDefinedHierarchies();
            if (udhiers) {
                for (var hierIndex = 0; hierIndex < udhiers.length; hierIndex++) {
                    var hier = udhiers[hierIndex];
                    if (PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p(hier)) {
                        res = true;
                        break;
                    }
                }
            }
            if (!res) {
                var ahiers = dim.get_attributeHierarchies();
                if (ahiers) {
                    for (var hierIndex = 0; hierIndex < ahiers.length; hierIndex++) {
                        var hier = ahiers[hierIndex];
                        if (PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p(hier)) {
                            res = true;
                            break;
                        }
                    }
                }
            }
        }
    }
    return res;
}
PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p = function PPSMA_DrillDownToHelper$_shouldShowHierarchyInMenu$p(hier) {ULSM53:;
    return !PPSMA.DrillDownToHelper._isHierarchyFlat$p(hier);
}
PPSMA.DrillDownToHelper._isHierarchyFlat$p = function PPSMA_DrillDownToHelper$_isHierarchyFlat$p(hier) {ULSM53:;
    var res = true;
    if (hier) {
        var lvls = hier.get_levels();
        if ((lvls) && (lvls.length > 1)) {
            res = false;
        }
    }
    return res;
}
PPSMA.DrillDownToHelper.prototype = {
    _drillFromMember$0: null,
    _drillFromHierarchy$0: null,
    _drillFromAxisId$0: null,
    _olapViewContext$0: null,
    
    populateSubMenuItems: function PPSMA_DrillDownToHelper$populateSubMenuItems(sm, menuClickHandler) {ULSM53:;
        var dims = this._olapViewContext$0.get_cubeMetadata();
        if (dims) {
            for (var dimIndex = 0; dimIndex < dims.length; dimIndex++) {
                var dim = dims[dimIndex];
                if (PPSMA.DrillDownToHelper._shouldShowDimensionInMenu$p(dim)) {
                    var udhiers = dim.get_userDefinedHierarchies();
                    var ahiers = dim.get_attributeHierarchies();
                    if (this._areHierarchyMenusEnabled$p$0(udhiers) || this._areHierarchyMenusEnabled$p$0(ahiers)) {
                        this._addDimensionSubMenu$p$0(sm, dim, udhiers, ahiers, menuClickHandler, true);
                    }
                    else {
                        this._addDimensionSubMenu$p$0(sm, dim, udhiers, ahiers, menuClickHandler, false);
                    }
                }
            }
        }
    },
    
    _addDimensionSubMenu$p$0: function PPSMA_DrillDownToHelper$_addDimensionSubMenu$p$0(sm, dim, udhiers, ahiers, menuClickHandler, enabled) {ULSM53:;
        var imgRes = this._getDimensionResPath$p$0(dim);
        if (enabled) {
            var singleHier = PPSMA.DrillDownToHelper._getNonCascadeDimensionHierarchy$p(udhiers, ahiers);
            if (singleHier) {
                this._addNonCascadeDimensionMenu$p$0(sm, singleHier, dim, menuClickHandler, imgRes, enabled);
            }
            else {
                var dimSubMenu = PPSMA.ContextMenu.addSubMenu(sm, dim.get_caption(), imgRes, false);
                var needSep = this._addUserDefinedHierarchySubMenus$p$0(dimSubMenu, dim, udhiers, menuClickHandler);
                var pseudoAhierList = this._extractSingleLevelUDHierSubMenus$p$0(udhiers, dim, menuClickHandler);
                this._addAttributeHierarchySubMenus$p$0(dimSubMenu, ahiers, dim, menuClickHandler, needSep, pseudoAhierList);
            }
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(sm, dim.get_caption(), '', imgRes, false);
        }
    },
    
    _addUserDefinedHierarchySubMenus$p$0: function PPSMA_DrillDownToHelper$_addUserDefinedHierarchySubMenus$p$0(sm, dim, udhiers, menuClickHandler) {ULSM53:;
        var needSep = false;
        if (udhiers) {
            for (var hierIndex = 0; hierIndex < udhiers.length; hierIndex++) {
                var hier = udhiers[hierIndex];
                if (PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p(hier)) {
                    var hierBackgroundAggregate = this._isHierarchyBackgroundAggregate$p$0(hier);
                    var hierDisabled = this._isHierarchyOnOppositeForegroundAxis$p$0(hier) || this._isHierarchyBackgroundCalculated$p$0(hier);
                    var disableDepth;
                    if (hier.get_name() === this._drillFromHierarchy$0.get_name()) {
                        disableDepth = this._drillFromMember$0.get_levelNumber();
                    }
                    else {
                        var resHier = this._findHierarchyInQueryResults$p$0(hier);
                        if (!resHier) {
                            disableDepth = 0;
                        }
                        else {
                            disableDepth = resHier.get_deepestLevel();
                        }
                    }
                    var lvls = hier.get_levels();
                    if ((lvls) && (lvls.length > 2)) {
                        if (dim.get_name() === this._drillFromHierarchy$0.get_dimension()) {
                            var drillFromMemberLvlFullName = this._drillFromMember$0.get_levelName();
                            var lastDot = drillFromMemberLvlFullName.lastIndexOf('.');
                            var drillFromMemberLvlName = drillFromMemberLvlFullName.substring(lastDot + 1, drillFromMemberLvlFullName.length);
                            for (var lvlIndex = 1; lvlIndex < lvls.length; lvlIndex++) {
                                var lvl = lvls[lvlIndex];
                                var lvlName = lvl.get_name();
                                var dot = lvlName.lastIndexOf('.');
                                var newLvlName = lvlName.substring(dot + 1, lvlName.length);
                                if (newLvlName === drillFromMemberLvlName) {
                                    disableDepth = lvlIndex;
                                }
                            }
                        }
                        PPSMA.ContextMenu.addDisabledMenuOption(sm, hier.get_caption(), null, null, false);
                        if (hierBackgroundAggregate) {
                            PPSMA.DrillDownToHelper._addMultiItemsSubMenu$p(sm, hier, menuClickHandler);
                        }
                        else {
                            for (var lvlIndex = 1; lvlIndex < lvls.length; lvlIndex++) {
                                var lvl = lvls[lvlIndex];
                                if (hierDisabled || (lvlIndex <= disableDepth)) {
                                    this._addLevelSubMenu$p$0(sm, lvl, hier, menuClickHandler, false);
                                }
                                else {
                                    this._addLevelSubMenu$p$0(sm, lvl, hier, menuClickHandler, true);
                                }
                            }
                        }
                        needSep = true;
                    }
                }
            }
        }
        return needSep;
    },
    
    _extractSingleLevelUDHierSubMenus$p$0: function PPSMA_DrillDownToHelper$_extractSingleLevelUDHierSubMenus$p$0(udhiers, dim, menuClickHandler) {ULSM53:;
        var hierList = [];
        if (udhiers) {
            var imgRes = this._getAttributeResPath$p$0(dim);
            for (var hierIndex = 0; hierIndex < udhiers.length; hierIndex++) {
                var hier = udhiers[hierIndex];
                if (PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p(hier)) {
                    var lvls = hier.get_levels();
                    if ((lvls) && (lvls.length === 2)) {
                        var drillToMemberName = this._getDrillToMemberName$p$0(hier);
                        var fn;
                        if (drillToMemberName !== '') {
                            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'' + escape(drillToMemberName) + '\', \'' + escape(lvls[1].get_name()) + '\');';
                        }
                        else {
                            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'\', \'\');';
                        }
                        var item = {};
                        item.caption = hier.get_caption();
                        item.fn = fn;
                        item.imgRes = imgRes;
                        Array.add(hierList, item);
                    }
                }
            }
        }
        return hierList;
    },
    
    _addAttributeHierarchySubMenus$p$0: function PPSMA_DrillDownToHelper$_addAttributeHierarchySubMenus$p$0(sm, ahiers, dim, menuClickHandler, needSep, pseudoAhierList) {ULSM53:;
        var sep = needSep;
        if (ahiers) {
            var imgRes = this._getAttributeResPath$p$0(dim);
            for (var hierIndex = 0; hierIndex < ahiers.length; hierIndex++) {
                var hier = ahiers[hierIndex];
                if (PPSMA.DrillDownToHelper._shouldShowHierarchyInMenu$p(hier)) {
                    var lvls = hier.get_levels();
                    if (lvls.length > 1) {
                        sep = PPSMA.DrillDownToHelper._addSingleLevelUDHierSubMenus$p(sm, sep, pseudoAhierList, hier.get_caption());
                        if (sep) {
                            PPSMA.ContextMenu.addMenuSeparator(sm);
                            sep = false;
                        }
                        var drillToMemberName = this._getDrillToMemberName$p$0(hier);
                        var fn;
                        if (drillToMemberName !== '') {
                            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'' + escape(drillToMemberName) + '\', \'' + escape(lvls[1].get_name()) + '\');';
                        }
                        else {
                            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'\', \'\');';
                        }
                        var resHier = this._findHierarchyInQueryResults$p$0(hier);
                        var hierDisabled = this._isHierarchyOnOppositeForegroundAxis$p$0(hier);
                        if (hierDisabled || ((resHier) && (resHier.get_deepestLevel() > 0))) {
                            PPSMA.ContextMenu.addDisabledMenuOption(sm, hier.get_caption(), '', imgRes, false);
                        }
                        else {
                            PPSMA.ContextMenu.addMenuOption(sm, hier.get_caption(), fn, imgRes, null, false, false);
                        }
                    }
                }
            }
        }
        PPSMA.DrillDownToHelper._addSingleLevelUDHierSubMenus$p(sm, sep, pseudoAhierList, '');
    },
    
    _addNonCascadeDimensionMenu$p$0: function PPSMA_DrillDownToHelper$_addNonCascadeDimensionMenu$p$0(sm, hier, dim, menuClickHandler, imgRes, enabled) {ULSM53:;
        var drillToMemberName = this._getDrillToMemberName$p$0(hier);
        var fn;
        if (drillToMemberName !== '') {
            var level = hier.get_levels()[1];
            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'' + escape(drillToMemberName) + '\', \'' + escape(level.get_name()) + '\');';
        }
        else {
            fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'\', \'\');';
        }
        if (enabled) {
            PPSMA.ContextMenu.addMenuOption(sm, dim.get_caption(), fn, imgRes, null, false, false);
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(sm, dim.get_caption(), null, imgRes, false);
        }
    },
    
    _addLevelSubMenu$p$0: function PPSMA_DrillDownToHelper$_addLevelSubMenu$p$0(sm, level, hier, menuClickHandler, enabled) {ULSM53:;
        var drillToMemberName = this._getDrillToMemberName$p$0(hier);
        var fn = menuClickHandler + '(\'' + escape(hier.get_name()) + '\', \'' + escape(drillToMemberName) + '\', \'' + escape(level.get_name()) + '\');';
        if (enabled) {
            PPSMA.ContextMenu.addMenuOption(sm, level.get_caption(), fn, null, null, false, true);
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(sm, level.get_caption(), null, null, true);
        }
    },
    
    _getDrillToMemberName$p$0: function PPSMA_DrillDownToHelper$_getDrillToMemberName$p$0(hier) {ULSM53:;
        var mbrName;
        if (hier.get_name() === this._drillFromHierarchy$0.get_name()) {
            mbrName = this._drillFromMember$0.get_name();
        }
        else {
            mbrName = hier.get_name() + '.DefaultMember';
            var mbrs = this._olapViewContext$0.get_results().get_filterMembers();
            var hiers = this._olapViewContext$0.get_results().get_filterHierarchies();
            if ((mbrs) && (hiers)) {
                for (var hierIndex = 0; hierIndex < hiers.length; hierIndex++) {
                    var h = hiers[hierIndex];
                    if (h.get_name() === hier.get_name()) {
                        mbrName = (!h.get_isAggregated()) ? mbrs[hierIndex].get_name() : '';
                        break;
                    }
                }
            }
        }
        return mbrName;
    },
    
    _areHierarchyMenusEnabled$p$0: function PPSMA_DrillDownToHelper$_areHierarchyMenusEnabled$p$0(hiers) {ULSM53:;
        var res = false;
        if (hiers) {
            for (var hierIndex = 0; hierIndex < hiers.length; hierIndex++) {
                var hier = hiers[hierIndex];
                if (!this._isHierarchyOnOppositeForegroundAxis$p$0(hier)) {
                    res = true;
                    break;
                }
            }
        }
        return res;
    },
    
    _isHierarchyOnOppositeForegroundAxis$p$0: function PPSMA_DrillDownToHelper$_isHierarchyOnOppositeForegroundAxis$p$0(hier) {ULSM53:;
        var res = false;
        if (hier) {
            if (this._drillFromAxisId$0 === 'C') {
                res = (!!this._findHierarchyOnRows$p$0(hier));
            }
            else if (this._drillFromAxisId$0 === 'R') {
                res = (!!this._findHierarchyOnColumns$p$0(hier));
            }
        }
        return res;
    },
    
    _isHierarchyBackgroundCalculated$p$0: function PPSMA_DrillDownToHelper$_isHierarchyBackgroundCalculated$p$0(hier) {ULSM53:;
        var res = false;
        if (hier) {
            var bgHier = this._findHierarchyOnBackground$p$0(hier);
            if (bgHier && bgHier.get_isCalculated()) {
                res = true;
            }
        }
        return res;
    },
    
    _isHierarchyBackgroundAggregate$p$0: function PPSMA_DrillDownToHelper$_isHierarchyBackgroundAggregate$p$0(hier) {ULSM53:;
        var res = false;
        if (hier) {
            var bgHier = this._findHierarchyOnBackground$p$0(hier);
            if (bgHier) {
                res = bgHier.get_isAggregated();
            }
        }
        return res;
    },
    
    _findHierarchyOnRows$p$0: function PPSMA_DrillDownToHelper$_findHierarchyOnRows$p$0(hierarchy) {ULSM53:;
        var res = null;
        if (this._olapViewContext$0) {
            var rowHiers = this._olapViewContext$0.get_results().get_rowHierarchies();
            for (var rowHierIndex = 0; rowHierIndex < rowHiers.length; rowHierIndex++) {
                var hier = rowHiers[rowHierIndex];
                if (hier.get_name() === hierarchy.get_name()) {
                    res = hier;
                    break;
                }
            }
        }
        return res;
    },
    
    _findHierarchyOnColumns$p$0: function PPSMA_DrillDownToHelper$_findHierarchyOnColumns$p$0(hierarchy) {ULSM53:;
        var res = null;
        if (this._olapViewContext$0) {
            var colHiers = this._olapViewContext$0.get_results().get_columnHierarchies();
            for (var colHierIndex = 0; colHierIndex < colHiers.length; colHierIndex++) {
                var hier = colHiers[colHierIndex];
                if (hier.get_name() === hierarchy.get_name()) {
                    res = hier;
                    break;
                }
            }
        }
        return res;
    },
    
    _findHierarchyOnBackground$p$0: function PPSMA_DrillDownToHelper$_findHierarchyOnBackground$p$0(hierarchy) {ULSM53:;
        var res = null;
        if (this._olapViewContext$0) {
            var bgHiers = this._olapViewContext$0.get_results().get_filterHierarchies();
            for (var bgHierIndex = 0; bgHierIndex < bgHiers.length; bgHierIndex++) {
                var hier = bgHiers[bgHierIndex];
                if (hier.get_name() === hierarchy.get_name()) {
                    res = hier;
                    break;
                }
            }
        }
        return res;
    },
    
    _findHierarchyInQueryResults$p$0: function PPSMA_DrillDownToHelper$_findHierarchyInQueryResults$p$0(hier) {ULSM53:;
        var resHier = this._findHierarchyOnForeground$p$0(hier);
        if (!resHier) {
            resHier = this._findHierarchyOnBackground$p$0(hier);
        }
        return resHier;
    },
    
    _findHierarchyOnForeground$p$0: function PPSMA_DrillDownToHelper$_findHierarchyOnForeground$p$0(hier) {ULSM53:;
        var resHier = null;
        if (this._olapViewContext$0) {
            resHier = this._findHierarchyOnRows$p$0(hier);
            if (!resHier) {
                resHier = this._findHierarchyOnColumns$p$0(hier);
            }
        }
        return resHier;
    },
    
    _getAttributeResPath$p$0: function PPSMA_DrillDownToHelper$_getAttributeResPath$p$0(dim) {ULSM53:;
        var imgRes;
        if (dim.get_dimensionType() === 1) {
            imgRes = this._olapViewContext$0.get_resourcePath() + 'AttributeTime.gif';
        }
        else {
            imgRes = this._olapViewContext$0.get_resourcePath() + 'Attribute.gif';
        }
        return imgRes;
    },
    
    _getDimensionResPath$p$0: function PPSMA_DrillDownToHelper$_getDimensionResPath$p$0(dim) {ULSM53:;
        var imgRes;
        if (dim.get_dimensionType() === 1) {
            imgRes = this._olapViewContext$0.get_resourcePath() + 'DimensionTime.gif';
        }
        else {
            imgRes = this._olapViewContext$0.get_resourcePath() + 'Dimension.gif';
        }
        return imgRes;
    }
}


PPSMA.AnalyzeInDecompHelper = function PPSMA_AnalyzeInDecompHelper() {
}
PPSMA.AnalyzeInDecompHelper.getDefaultQueryParameters = function PPSMA_AnalyzeInDecompHelper$getDefaultQueryParameters() {ULSM53:;
    var queryParameters = new PPSMA.DecompQueryParameters();
    if (queryParameters) {
        queryParameters.ClientState = '';
        queryParameters.SortType = 'descending';
    }
    return queryParameters;
}
PPSMA.AnalyzeInDecompHelper._getCellTuple$p = function PPSMA_AnalyzeInDecompHelper$_getCellTuple$p(olapViewContext, rIndex, cIndex) {ULSM53:;
    var results = olapViewContext.get_results();
    var rowMembers = results.get_rowMembers();
    var columnMembers = results.get_columnMembers();
    var filterMembers = results.get_filterMembers();
    var filterHierarchies = results.get_filterHierarchies();
    var tuple = new PPSMA.DecompTupleRecord();
    if (rowMembers) {
        tuple.RowSelections = new Array(rowMembers[rIndex].length);
        for (var i = 0; i < rowMembers[rIndex].length; i++) {
            var row = rowMembers[rIndex][i];
            tuple.RowSelections[i] = row.get_name();
        }
    }
    if (columnMembers) {
        tuple.ColumnSelections = new Array(columnMembers[cIndex].length);
        for (var i = 0; i < columnMembers[cIndex].length; i++) {
            var column = columnMembers[cIndex][i];
            tuple.ColumnSelections[i] = column.get_name();
        }
    }
    if (filterMembers) {
        for (var i = 0; i < filterHierarchies.length; i++) {
            if (filterHierarchies[i].get_name() !== olapViewContext.get_measureHierarchyName()) {
                continue;
            }
            var filter = filterMembers[i];
            tuple.BackgroundMeasureName = filter.get_name();
            break;
        }
    }
    return tuple;
}
PPSMA.AnalyzeInDecompHelper._getCellTupleFromXml$p = function PPSMA_AnalyzeInDecompHelper$_getCellTupleFromXml$p(tupleXml) {ULSM53:;
    var tuple = new PPSMA.DecompTupleRecord();
    var xdoc = PPSMA.XmlEx.loadXml(tupleXml);
    var rowElements = xdoc.getElementsByTagName('Row');
    if (rowElements.length > 0) {
        tuple.RowSelections = new Array(rowElements.length);
        for (var i = 0; i < rowElements.length; i++) {
            tuple.RowSelections[i] = rowElements[i].getAttribute('name');
        }
    }
    var columnElements = xdoc.getElementsByTagName('Column');
    if (columnElements.length > 0) {
        tuple.ColumnSelections = new Array(columnElements.length);
        for (var i = 0; i < columnElements.length; i++) {
            tuple.ColumnSelections[i] = columnElements[i].getAttribute('name');
        }
    }
    return tuple;
}
PPSMA.AnalyzeInDecompHelper.prototype = {
    _decompWindowReference$0: null,
    _decompWindowDocument$0: null,
    
    launchAnalyzeRequest: function PPSMA_AnalyzeInDecompHelper$launchAnalyzeRequest(olapViewContext, contextId, rIndex, cIndex) {ULSM53:;
        this._decompWindowReference$0 = PPSMA.NewWindow.openPopUpWindow(PPSMA.AnalyzeInDecompHelper._defaultWidth$p, PPSMA.AnalyzeInDecompHelper._defaultHeight$p, PPSMA.AnalyzeInDecompHelper._decompWindowName$p + (new Date().getTime()), PPSMA.AnalyzeInDecompHelper._windowAttr$p);
        if (!this._decompWindowReference$0) {
            return;
        }
        if (!this._decompWindowReference$0.document) {
            return;
        }
        this._decompWindowDocument$0 = this._decompWindowReference$0.document;
        PPSMA.NewWindow.applyDefaults(this._decompWindowDocument$0, olapViewContext.get_ctrlProxyId());
        var queryParameters = PPSMA.AnalyzeInDecompHelper.getDefaultQueryParameters();
        this._decompWindowDocument$0.title = PPSMA.SR.OlapContextMenu_AnalyzeInDecomp;
        var tuple = PPSMA.AnalyzeInDecompHelper._getCellTuple$p(olapViewContext, rIndex, cIndex);
        PPSMA.NewWindow.createDecompForm(this._decompWindowDocument$0, olapViewContext.get_reportId(), Sys.Serialization.JavaScriptSerializer.serialize(tuple), Sys.Serialization.JavaScriptSerializer.serialize(queryParameters), '', olapViewContext.get_decompTreePage());
    },
    
    launchAnalyzeRequestFromScorecard: function PPSMA_AnalyzeInDecompHelper$launchAnalyzeRequestFromScorecard(reportId, tupleXml, clientViewState, decompTreePage, resourcePath) {ULSM53:;
        this._decompWindowReference$0 = PPSMA.NewWindow.openPopUpWindow(PPSMA.AnalyzeInDecompHelper._defaultWidth$p, PPSMA.AnalyzeInDecompHelper._defaultHeight$p, PPSMA.AnalyzeInDecompHelper._decompWindowName$p + (new Date().getTime()), PPSMA.AnalyzeInDecompHelper._windowAttr$p);
        if (!this._decompWindowReference$0) {
            return;
        }
        if (!this._decompWindowReference$0.document) {
            return;
        }
        this._decompWindowDocument$0 = this._decompWindowReference$0.document;
        PPSMA.NewWindow.applyDefaults(this._decompWindowDocument$0, reportId);
        var queryParameters = PPSMA.AnalyzeInDecompHelper.getDefaultQueryParameters();
        this._decompWindowDocument$0.title = PPSMA.SR.OlapContextMenu_AnalyzeInDecomp;
        var tuple = PPSMA.AnalyzeInDecompHelper._getCellTupleFromXml$p(tupleXml);
        PPSMA.NewWindow.createDecompForm(this._decompWindowDocument$0, reportId, Sys.Serialization.JavaScriptSerializer.serialize(tuple), Sys.Serialization.JavaScriptSerializer.serialize(queryParameters), clientViewState, decompTreePage);
    }
}


PPSMA.MenuOptionHelper = function PPSMA_MenuOptionHelper(member, hierarchy, canNavigate, olapViewContext) {ULSM53:;
    this._member$0 = member;
    this._hierarchy$0 = hierarchy;
    this._canNavigate$0 = canNavigate;
    this._olapViewContext$0 = olapViewContext;
}
PPSMA.MenuOptionHelper._getSwitchToText$p = function PPSMA_MenuOptionHelper$_getSwitchToText$p(s) {ULSM53:;
    var truncAt = 20;
    if (s.length > truncAt) {
        s = s.substr(0, truncAt - 3) + '...';
    }
    return String.format(PPSMA.SR.OlapContextMenu_SwitchToType, s);
}
PPSMA.MenuOptionHelper._addLoadingOption$p = function PPSMA_MenuOptionHelper$_addLoadingOption$p(sm) {ULSM53:;
    PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_DynamicLoadText, null, null, null, false, false);
}
PPSMA.MenuOptionHelper.prototype = {
    _member$0: null,
    _hierarchy$0: null,
    _canNavigate$0: false,
    _olapViewContext$0: null,
    _optionsAdded$0: 0,
    
    get_optionsAdded: function PPSMA_MenuOptionHelper$get_optionsAdded() {ULSM53:;
        return this._optionsAdded$0;
    },
    
    showHideInfo: function PPSMA_MenuOptionHelper$showHideInfo(m, eventFunction, indent) {ULSM53:;
        if (this._optionsAdded$0 > 0) {
            PPSMA.ContextMenu.addMenuSeparator(m);
        }
        var text;
        if (this._olapViewContext$0.get_infoBarVisible()) {
            text = PPSMA.SR.OlapContextMenu_HideInfo;
        }
        else {
            text = PPSMA.SR.OlapContextMenu_ShowInfo;
        }
        PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, getResFolder() + 'info16by16.gif', null, false, indent);
        this._optionsAdded$0++;
    },
    
    drillDown: function PPSMA_MenuOptionHelper$drillDown(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_DrillDown;
            if (this._member$0.get_hasChildren()) {
                PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, this._olapViewContext$0.get_resourcePath() + 'DrillDown.gif', null, false, indent);
            }
            else {
                PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, this._olapViewContext$0.get_resourcePath() + 'DrillDownD.gif', indent);
            }
            this._optionsAdded$0++;
        }
    },
    
    drillUp: function PPSMA_MenuOptionHelper$drillUp(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_DrillUp;
            if (this._member$0.get_hasParent()) {
                PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, this._olapViewContext$0.get_resourcePath() + 'DrillUp.gif', null, false, indent);
            }
            else {
                PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, this._olapViewContext$0.get_resourcePath() + 'DrillUpD.gif', indent);
            }
            this._optionsAdded$0++;
        }
    },
    
    expandCollapse: function PPSMA_MenuOptionHelper$expandCollapse(m, expandFunction, collapseFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text;
            if (this._member$0.get_drilledDown()) {
                text = PPSMA.SR.OlapContextMenu_Collapse;
                if (this._member$0.get_hasChildren()) {
                    PPSMA.ContextMenu.addMenuOption(m, text, collapseFunction, null, null, false, indent);
                }
                else {
                    PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, null, indent);
                }
                this._optionsAdded$0++;
            }
            else {
                text = PPSMA.SR.OlapContextMenu_Expand;
                if (this._member$0.get_hasChildren()) {
                    PPSMA.ContextMenu.addMenuOption(m, text, expandFunction, null, null, false, indent);
                }
                else {
                    PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, null, indent);
                }
                this._optionsAdded$0++;
            }
        }
    },
    
    showOnly: function PPSMA_MenuOptionHelper$showOnly(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_ShowOnly;
            if (!this._hierarchy$0.get_isSingleton()) {
                PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
            }
            else {
                PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, null, indent);
            }
            this._optionsAdded$0++;
        }
    },
    
    remove: function PPSMA_MenuOptionHelper$remove(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_Remove;
            if (!this._hierarchy$0.get_isSingleton()) {
                PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
            }
            else {
                PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, null, indent);
            }
            this._optionsAdded$0++;
        }
    },
    
    pivot: function PPSMA_MenuOptionHelper$pivot(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_Pivot;
            PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
            this._optionsAdded$0++;
        }
    },
    
    showProperties: function PPSMA_MenuOptionHelper$showProperties(m, eventFunction, indent, enabled) {ULSM53:;
        var text = PPSMA.SR.OlapContextMenu_ShowProperties;
        if (enabled) {
            PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(m, text, eventFunction, null, indent);
        }
        this._optionsAdded$0++;
    },
    
    hideProperty: function PPSMA_MenuOptionHelper$hideProperty(m, caption, eventFunction, indent) {ULSM53:;
        var text = caption;
        PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
        this._optionsAdded$0++;
    },
    
    showChangeMeasure: function PPSMA_MenuOptionHelper$showChangeMeasure(m, eventFunction, isDesigner, indent) {ULSM53:;
        if (!isDesigner) {
            var text = PPSMA.SR.OlapChangeMeasure_ContextMenuLabel;
            PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
            this._optionsAdded$0++;
        }
    },
    
    selectItems: function PPSMA_MenuOptionHelper$selectItems(m, eventFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_SelectItems;
            PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
            this._optionsAdded$0++;
        }
    },
    
    hasAggregatedBackGroundHierarchies: function PPSMA_MenuOptionHelper$hasAggregatedBackGroundHierarchies() {ULSM53:;
        var results = this._olapViewContext$0.get_results();
        if (results.get_unknownFilterParameters()) {
            return true;
        }
        var filterHierarchies = results.get_filterHierarchies();
        if (filterHierarchies) {
            for (var i = 0; i < filterHierarchies.length; i++) {
                var filterHier = filterHierarchies[i];
                if (filterHier.get_isAggregated()) {
                    return true;
                }
            }
        }
        return false;
    },
    
    isSilverlightInstalled: function PPSMA_MenuOptionHelper$isSilverlightInstalled() {ULSM53:;
        return isSilverlightInstalled('3.0.40624');
    },
    
    decompositionTree: function PPSMA_MenuOptionHelper$decompositionTree(m, eventFunction, indent, nonEmptyCell, isDesigner) {ULSM53:;
        if (isDesigner) {
            return;
        }
        if (!this.isSilverlightInstalled() || !this._canNavigate$0 || !nonEmptyCell) {
            return;
        }
        var text = PPSMA.SR.OlapContextMenu_AnalyzeInDecomp;
        PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, this._olapViewContext$0.get_resourcePath() + 'DecompositionTree.png', null, false, indent);
        this._optionsAdded$0++;
    },
    
    showDetails: function PPSMA_MenuOptionHelper$showDetails(m, eventFunction, indent, enabled) {ULSM53:;
        var text = PPSMA.SR.OlapContextMenu_ShowDetails;
        if (enabled) {
            PPSMA.ContextMenu.addMenuOption(m, text, eventFunction, null, null, false, indent);
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(m, text, eventFunction, null, indent);
        }
        this._optionsAdded$0++;
    },
    
    switchToOption: function PPSMA_MenuOptionHelper$switchToOption(m, t, fn, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.MenuOptionHelper._getSwitchToText$p(t);
            PPSMA.ContextMenu.addMenuOption(m, text, fn, null, null, false, indent);
            this._optionsAdded$0++;
        }
    },
    
    addDisabledOption: function PPSMA_MenuOptionHelper$addDisabledOption(m, t, indent) {ULSM53:;
        PPSMA.ContextMenu.addDisabledMenuOption(m, t, null, null, indent);
        this._optionsAdded$0++;
    },
    
    drillDownTo: function PPSMA_MenuOptionHelper$drillDownTo(m, fetchFunction, populateFunction, hoverOffFunction, indent) {ULSM53:;
        if (this._canNavigate$0) {
            var text = PPSMA.SR.OlapContextMenu_DrillDownTo;
            var drillDownTo = PPSMA.ContextMenu.addDynamicSubMenu(m, text, fetchFunction, populateFunction, hoverOffFunction, indent);
            PPSMA.MenuOptionHelper._addLoadingOption$p(drillDownTo);
            this._optionsAdded$0++;
            return drillDownTo;
        }
        return null;
    },
    
    additionalActions: function PPSMA_MenuOptionHelper$additionalActions(m, fetchFunction, populateFunction, hoverOffFunction, indent, enabled) {ULSM53:;
        var text = PPSMA.SR.OlapContextMenu_AdditionalActions;
        var addActions = null;
        if (enabled) {
            addActions = PPSMA.ContextMenu.addDynamicSubMenu(m, text, fetchFunction, populateFunction, hoverOffFunction, indent);
            PPSMA.MenuOptionHelper._addLoadingOption$p(addActions);
        }
        else {
            PPSMA.ContextMenu.addDisabledMenuOption(m, text, null, null, indent);
        }
        this._optionsAdded$0++;
        return addActions;
    },
    
    reportTypeSubMenu: function PPSMA_MenuOptionHelper$reportTypeSubMenu(m, contextId, reportType) {ULSM53:;
        if (this._canNavigate$0) {
            var sm = PPSMA.ContextMenu.addSubMenu(m, PPSMA.SR.OlapContextMenu_ReportType, this._olapViewContext$0.get_resourcePath() + 'BarChart.png', false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_Grid, contextId + '.switchToGrid()', this._olapViewContext$0.get_resourcePath() + 'Grid.png', null, (!reportType), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_ColumnChart, contextId + '.switchToColumnChart()', this._olapViewContext$0.get_resourcePath() + 'BarChart.png', null, (reportType === PPSMA.OlapReportType.ColumnChart), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_ColumnChartStacked, contextId + '.switchToColumnChartStacked()', this._olapViewContext$0.get_resourcePath() + 'BarChartStacked.png', null, (reportType === PPSMA.OlapReportType.ColumnChartStacked), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_ColumnChartStacked100, contextId + '.switchToColumnChartStacked100()', this._olapViewContext$0.get_resourcePath() + 'BarChartStacked100.png', null, (reportType === PPSMA.OlapReportType.ColumnChartStacked100), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_LineChart, contextId + '.switchToLineChart()', this._olapViewContext$0.get_resourcePath() + 'LineChartNoMarker.png', null, (reportType === PPSMA.OlapReportType.LineChart), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_LineChartWithMarkers, contextId + '.switchToLineChartWithMarkers()', this._olapViewContext$0.get_resourcePath() + 'LineChart.png', null, (reportType === PPSMA.OlapReportType.LineChartWithMarkers), false);
            PPSMA.ContextMenu.addMenuOption(sm, PPSMA.SR.OlapContextMenu_ReportType_PieChart, contextId + '.switchToPieChart()', this._olapViewContext$0.get_resourcePath() + 'PieChart.png', null, (reportType === PPSMA.OlapReportType.PieChart), false);
            this._optionsAdded$0++;
        }
    },
    
    formatReportSubMenu: function PPSMA_MenuOptionHelper$formatReportSubMenu(m, indent) {ULSM53:;
        var text = PPSMA.SR.OlapContextMenu_FormatReport;
        this._optionsAdded$0++;
        return PPSMA.ContextMenu.addSubMenu(m, text, this._olapViewContext$0.get_resourcePath() + 'FormatReport.gif', indent);
    }
}


PPSMA.SubMenu = function PPSMA_SubMenu(menuElement, menuType) {ULSM53:;
    this._menuElement$0 = menuElement;
    this._menuType$0 = menuType;
}
PPSMA.SubMenu.prototype = {
    _hoverOn$0: false,
    _menuType$0: 0,
    _menuElement$0: null,
    _isPopulated$0: false,
    
    get_hoverOn: function PPSMA_SubMenu$get_hoverOn() {ULSM53:;
        return this._hoverOn$0;
    },
    set_hoverOn: function PPSMA_SubMenu$set_hoverOn(value) {ULSM53:;
        this._hoverOn$0 = value;
        return value;
    },
    
    get_menuType: function PPSMA_SubMenu$get_menuType() {ULSM53:;
        return this._menuType$0;
    },
    set_menuType: function PPSMA_SubMenu$set_menuType(value) {ULSM53:;
        this._menuType$0 = value;
        return value;
    },
    
    get_isPopulated: function PPSMA_SubMenu$get_isPopulated() {ULSM53:;
        return this._isPopulated$0;
    },
    set_isPopulated: function PPSMA_SubMenu$set_isPopulated(value) {ULSM53:;
        this._isPopulated$0 = value;
        return value;
    },
    
    get_menu: function PPSMA_SubMenu$get_menu() {ULSM53:;
        return this._menuElement$0;
    }
}


PPSMA.OlapViewContext = function PPSMA_OlapViewContext(controlFactoryPath, metadataFactoryPath, ctrlProxyId, targetId, webPartTargetId, resourcePath, imagesPath, loadingImagePath, decompTreePage, drillThroughPage) {ULSM53:;
    this.$$d__onCubeMetadataRequestCompleted$p$0 = Function.createDelegate(this, this._onCubeMetadataRequestCompleted$p$0);
    this.$$d__onHistoryNavigated$p$0 = Function.createDelegate(this, this._onHistoryNavigated$p$0);
    this.$$d__onNavigationalRequestCompleted$p$0 = Function.createDelegate(this, this._onNavigationalRequestCompleted$p$0);
    this.$$d__onCancelRequest$p$0 = Function.createDelegate(this, this._onCancelRequest$p$0);
    this.$$d__onMenuMetadataRequestCompleted$p$0 = Function.createDelegate(this, this._onMenuMetadataRequestCompleted$p$0);
    this._dimensionPropertiesDict$p$0 = {};
    this._measures$p$0 = new PPSMA.Measures();
    this._errorHtml$p$0 = '<div class=\"ms-bireport-error ms-error\"><div>' + PPSMA.SR.Dashboard_Render_UnexpectedError + '</div></div>';
    this._controlFactoryPath$p$0 = controlFactoryPath;
    this._metadataFactoryPath$p$0 = metadataFactoryPath;
    this._ctrlProxyId$p$0 = ctrlProxyId;
    this._targetId$p$0 = targetId;
    this._webPartTargetId$p$0 = webPartTargetId;
    this._resourcePath$p$0 = resourcePath;
    this._imagesPath$p$0 = imagesPath;
    this._decompTreePage$p$0 = decompTreePage;
    this._drillThroughPage$p$0 = drillThroughPage;
    this._toolbarID$p$0 = PPSMA.OlapViewContext._toolbarIDprefix$p + this._innerTargetId$p$0;
    this._loadingImage$p$0 = loadingImagePath;
    PPSMA.OlapViewContext._trace$p('OlapViewContext' + this._targetId$p$0);
    PPSMA.OlapViewContext._trace$p('OlapViewContext' + this._ctrlProxyId$p$0);
    PPSMA.OlapViewContext._trace$p('OlapViewContext' + this._webPartTargetId$p$0);
    PPSMA.OlapViewContext._trace$p('OlapViewContext' + this._reportId$p$0);
    if (!isNullOrEmpty(webPartTargetId)) {
        this._webPartProxy$p$0 = PPSMA.ClientConnectionManager.get_instance().findClientWebPart(webPartTargetId);
        if (this._webPartProxy$p$0) {
            this._webPartProxy$p$0.registerDisposableView(this);
        }
    }
    PPSMA.OlapViewContext.globalIds[ctrlProxyId] = this;
}
PPSMA.OlapViewContext._getWindowSize$p = function PPSMA_OlapViewContext$_getWindowSize$p() {ULSM53:;
    var obj = new Sys.UI.Point(0, 0);
    if (window.self.innerWidth) {
        obj.x = window.self.innerWidth;
        obj.y = window.self.innerHeight;
    }
    else {
        obj.x = PPSMA.SizeEx.getClientWidth();
        obj.y = PPSMA.SizeEx.getClientHeight();
    }
    return obj;
}
PPSMA.OlapViewContext._getDivSize$p = function PPSMA_OlapViewContext$_getDivSize$p(container) {ULSM53:;
    var size = new Sys.UI.Point(0, 0);
    if (!container) {
        size = PPSMA.OlapViewContext._getWindowSize$p();
    }
    else {
        var width = getStyle(container, 'width');
        var height = getStyle(container, 'height');
        if (width !== 'auto' || height !== 'auto') {
            size.x = container.clientWidth;
            size.y = container.clientHeight;
        }
    }
    return size;
}
PPSMA.OlapViewContext._getChildElementByID$p = function PPSMA_OlapViewContext$_getChildElementByID$p(parentID, childID) {ULSM53:;
    var parent = $get(parentID);
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].id === childID) {
            return children[i];
        }
    }
    return null;
}
PPSMA.OlapViewContext.getViewInfoDiv = function PPSMA_OlapViewContext$getViewInfoDiv(elem) {ULSM53:;
    while (elem) {
        if (PPSMA.DomElementEx.tagsMatch(elem.tagName, 'div') && elem.id === '_viewInfoId') {
            return elem;
        }
        elem = elem.parentNode;
    }
    return null;
}
PPSMA.OlapViewContext.overTbItem = function PPSMA_OlapViewContext$overTbItem(e) {ULSM53:;
    var elem = PPSMA.EventsEx.getCurrentElement(e);
    while (elem && elem.tagName.toLowerCase() !== 'td') {
        elem = elem.parentNode;
    }
    if (elem) {
        elem.className = 'bsm-toolbarCellSelected';
    }
}
PPSMA.OlapViewContext.outTbItem = function PPSMA_OlapViewContext$outTbItem(e, className) {ULSM53:;
    var elem = PPSMA.EventsEx.getCurrentElement(e);
    while (elem && elem.tagName.toLowerCase() !== 'td') {
        elem = elem.parentNode;
    }
    if (elem) {
        elem.className = className;
    }
}
PPSMA.OlapViewContext.overLiItem = function PPSMA_OlapViewContext$overLiItem(e, className) {ULSM53:;
    var elem = PPSMA.EventsEx.getCurrentElement(e);
    while (elem && elem.tagName.toLowerCase() !== 'li') {
        elem = elem.parentNode;
    }
    if (elem) {
        elem.className = className;
    }
}
PPSMA.OlapViewContext.outLiItem = function PPSMA_OlapViewContext$outLiItem(e, className) {ULSM53:;
    var elem = PPSMA.EventsEx.getCurrentElement(e);
    while (elem && elem.tagName.toLowerCase() !== 'li') {
        elem = elem.parentNode;
    }
    if (elem) {
        elem.className = className;
    }
}
PPSMA.OlapViewContext._trace$p = function PPSMA_OlapViewContext$_trace$p(msg) {
}
PPSMA.OlapViewContext.prototype = {
    _controlFactoryPath$p$0: null,
    _metadataFactoryPath$p$0: null,
    _ctrlProxyId$p$0: null,
    _webPartTargetId$p$0: null,
    _targetId$p$0: null,
    _resourcePath$p$0: null,
    _imagesPath$p$0: null,
    _loadingImage$p$0: null,
    _decompTreePage$p$0: null,
    _drillThroughPage$p$0: null,
    _webPartProxy$p$0: null,
    _innerTargetId$p$0: null,
    _reportId$p$0: null,
    _targetType$p$0: null,
    _inboundSerialStamp$p$0: 0,
    _results$p$0: null,
    _measureHierarchyName$p$0: null,
    _formatDimHierarchyName$p$0: null,
    _renderWebRequest$p$0: null,
    _measureData$p$0: null,
    _dimensionData$p$0: null,
    _cellActionData$p$0: null,
    _cubeMetadata$p$0: null,
    _infoBarVisible$p$0: true,
    _historyButtonsVisible$p$0: false,
    _isSingleView$p$0: false,
    _isDesigner$p$0: false,
    _toolbarVisible$p$0: false,
    _currentDataPage$p$0: 1,
    _thousandSeparator$p$0: ',',
    _decimalPoint$p$0: '.',
    _historyManager$p$0: null,
    _isHistoryNavigation$p$0: false,
    _reportContext$p$0: null,
    _analyticCallback$p$0: null,
    _getMeasureDataCallback$p$0: null,
    _getDimensionDataCallback$p$0: null,
    _isReloading$p$0: true,
    _lastWidth$p$0: 0,
    _lastHeight$p$0: 0,
    _toolbar$p$0: null,
    _toolbarID$p$0: null,
    
    _onHistoryNavigated$p$0: function PPSMA_OlapViewContext$_onHistoryNavigated$p$0(sender, e) {ULSM53:;
        if (!isNullOrEmpty(e.get_entryName())) {
            var items = e.get_entryName().split('|');
            var ctxId = items[0];
            var historyReportId = items[1];
            if (ctxId === this._ctrlProxyId$p$0) {
                if (historyReportId !== 'null' && historyReportId !== 'error') {
                    this._reportId$p$0 = historyReportId;
                    var pageNum = 1;
                    if (items.length > 2 && items[2].length > 0) {
                        pageNum = Number.parseInvariant(items[2]);
                    }
                    this._currentDataPage$p$0 = pageNum;
                    this._isHistoryNavigation$p$0 = true;
                    this.set_targetType(items[4]);
                    this.setPage(pageNum);
                }
                else {
                    if (null !== this._targetId$p$0) {
                        var target = $get(this._targetId$p$0);
                        if (null !== target) {
                            target.style.position = 'static';
                            target.innerHTML = this._errorHtml$p$0;
                        }
                    }
                }
            }
        }
    },
    
    get_toolbar: function PPSMA_OlapViewContext$get_toolbar() {ULSM53:;
        return this._toolbar$p$0;
    },
    set_toolbar: function PPSMA_OlapViewContext$set_toolbar(value) {ULSM53:;
        this._toolbar$p$0 = value;
        return value;
    },
    
    get_reportId: function PPSMA_OlapViewContext$get_reportId() {ULSM53:;
        return this._reportId$p$0;
    },
    set_reportId: function PPSMA_OlapViewContext$set_reportId(value) {ULSM53:;
        this._reportId$p$0 = value;
        return value;
    },
    
    get_targetType: function PPSMA_OlapViewContext$get_targetType() {ULSM53:;
        return this._targetType$p$0;
    },
    set_targetType: function PPSMA_OlapViewContext$set_targetType(value) {ULSM53:;
        this._targetType$p$0 = value;
        return value;
    },
    
    get_innerTargetId: function PPSMA_OlapViewContext$get_innerTargetId() {ULSM53:;
        return this._innerTargetId$p$0;
    },
    set_innerTargetId: function PPSMA_OlapViewContext$set_innerTargetId(value) {ULSM53:;
        this._innerTargetId$p$0 = value;
        return value;
    },
    
    get_outerTargetId: function PPSMA_OlapViewContext$get_outerTargetId() {ULSM53:;
        return this._targetId$p$0;
    },
    
    get_webPartTargetId: function PPSMA_OlapViewContext$get_webPartTargetId() {ULSM53:;
        return this._webPartTargetId$p$0;
    },
    
    get_results: function PPSMA_OlapViewContext$get_results() {ULSM53:;
        return this._results$p$0;
    },
    set_results: function PPSMA_OlapViewContext$set_results(value) {ULSM53:;
        this._results$p$0 = value;
        return value;
    },
    
    get_measureHierarchyName: function PPSMA_OlapViewContext$get_measureHierarchyName() {ULSM53:;
        return this._measureHierarchyName$p$0;
    },
    set_measureHierarchyName: function PPSMA_OlapViewContext$set_measureHierarchyName(value) {ULSM53:;
        this._measureHierarchyName$p$0 = value;
        return value;
    },
    
    get_formatDimHierarchyName: function PPSMA_OlapViewContext$get_formatDimHierarchyName() {ULSM53:;
        return this._formatDimHierarchyName$p$0;
    },
    set_formatDimHierarchyName: function PPSMA_OlapViewContext$set_formatDimHierarchyName(value) {ULSM53:;
        this._formatDimHierarchyName$p$0 = value;
        return value;
    },
    
    get_measureData: function PPSMA_OlapViewContext$get_measureData() {ULSM53:;
        return this._measureData$p$0;
    },
    set_measureData: function PPSMA_OlapViewContext$set_measureData(value) {ULSM53:;
        this._measureData$p$0 = value;
        return value;
    },
    
    get_dimensionData: function PPSMA_OlapViewContext$get_dimensionData() {ULSM53:;
        return this._dimensionData$p$0;
    },
    set_dimensionData: function PPSMA_OlapViewContext$set_dimensionData(value) {ULSM53:;
        this._dimensionData$p$0 = value;
        return value;
    },
    
    get_cellActionData: function PPSMA_OlapViewContext$get_cellActionData() {ULSM53:;
        return this._cellActionData$p$0;
    },
    set_cellActionData: function PPSMA_OlapViewContext$set_cellActionData(value) {ULSM53:;
        this._cellActionData$p$0 = value;
        return value;
    },
    
    get_resourcePath: function PPSMA_OlapViewContext$get_resourcePath() {ULSM53:;
        return this._resourcePath$p$0;
    },
    
    get_imagesPath: function PPSMA_OlapViewContext$get_imagesPath() {ULSM53:;
        return this._imagesPath$p$0;
    },
    
    get_decompTreePage: function PPSMA_OlapViewContext$get_decompTreePage() {ULSM53:;
        return this._decompTreePage$p$0;
    },
    
    get_drillThroughPage: function PPSMA_OlapViewContext$get_drillThroughPage() {ULSM53:;
        return this._drillThroughPage$p$0;
    },
    
    get_cubeMetadata: function PPSMA_OlapViewContext$get_cubeMetadata() {ULSM53:;
        return this._cubeMetadata$p$0;
    },
    set_cubeMetadata: function PPSMA_OlapViewContext$set_cubeMetadata(value) {ULSM53:;
        this._cubeMetadata$p$0 = value;
        return value;
    },
    
    get_webPartProxy: function PPSMA_OlapViewContext$get_webPartProxy() {ULSM53:;
        return this._webPartProxy$p$0;
    },
    
    get_infoBarVisible: function PPSMA_OlapViewContext$get_infoBarVisible() {ULSM53:;
        return this._infoBarVisible$p$0;
    },
    set_infoBarVisible: function PPSMA_OlapViewContext$set_infoBarVisible(value) {ULSM53:;
        this._infoBarVisible$p$0 = value;
        return value;
    },
    
    get_toolbarVisible: function PPSMA_OlapViewContext$get_toolbarVisible() {ULSM53:;
        return this._toolbarVisible$p$0;
    },
    set_toolbarVisible: function PPSMA_OlapViewContext$set_toolbarVisible(value) {ULSM53:;
        this._toolbarVisible$p$0 = value;
        return value;
    },
    
    get_historyButtonsVisible: function PPSMA_OlapViewContext$get_historyButtonsVisible() {ULSM53:;
        return this._historyButtonsVisible$p$0;
    },
    set_historyButtonsVisible: function PPSMA_OlapViewContext$set_historyButtonsVisible(value) {ULSM53:;
        this._historyButtonsVisible$p$0 = value;
        return value;
    },
    
    get_isSingleView: function PPSMA_OlapViewContext$get_isSingleView() {ULSM53:;
        return this._isSingleView$p$0;
    },
    set_isSingleView: function PPSMA_OlapViewContext$set_isSingleView(value) {ULSM53:;
        this._isSingleView$p$0 = value;
        return value;
    },
    
    get_isDesigner: function PPSMA_OlapViewContext$get_isDesigner() {ULSM53:;
        return this._isDesigner$p$0;
    },
    set_isDesigner: function PPSMA_OlapViewContext$set_isDesigner(value) {ULSM53:;
        this._isDesigner$p$0 = value;
        return value;
    },
    
    get_currentDataPage: function PPSMA_OlapViewContext$get_currentDataPage() {ULSM53:;
        return this._currentDataPage$p$0;
    },
    set_currentDataPage: function PPSMA_OlapViewContext$set_currentDataPage(value) {ULSM53:;
        this._currentDataPage$p$0 = value;
        return value;
    },
    
    get_thousandSeparator: function PPSMA_OlapViewContext$get_thousandSeparator() {ULSM53:;
        return this._thousandSeparator$p$0;
    },
    set_thousandSeparator: function PPSMA_OlapViewContext$set_thousandSeparator(value) {ULSM53:;
        this._thousandSeparator$p$0 = value;
        return value;
    },
    
    get_decimalPoint: function PPSMA_OlapViewContext$get_decimalPoint() {ULSM53:;
        return this._decimalPoint$p$0;
    },
    set_decimalPoint: function PPSMA_OlapViewContext$set_decimalPoint(value) {ULSM53:;
        this._decimalPoint$p$0 = value;
        return value;
    },
    
    get_ctrlProxyId: function PPSMA_OlapViewContext$get_ctrlProxyId() {ULSM53:;
        return this._ctrlProxyId$p$0;
    },
    
    get_reportContext: function PPSMA_OlapViewContext$get_reportContext() {ULSM53:;
        return this._reportContext$p$0;
    },
    set_reportContext: function PPSMA_OlapViewContext$set_reportContext(value) {ULSM53:;
        this._reportContext$p$0 = value;
        return value;
    },
    
    applyMeasureSelectorChanges: function PPSMA_OlapViewContext$applyMeasureSelectorChanges() {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"ApplyMeasureSelectorChanges\">' + this.get__measuresXml$p$0() + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    applyDimensionProperties: function PPSMA_OlapViewContext$applyDimensionProperties() {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"ApplyDimensionProperties\">' + '<DimensionProperties>' + this.get__dimensionPropertiesXml$p$0() + '</DimensionProperties>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    execute: function PPSMA_OlapViewContext$execute(height, width) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        if (!width) {
            width = size.x;
        }
        if (!height) {
            height = size.y;
        }
        this.makeNavigationRequest('', height, width);
    },
    
    changeViewSize: function PPSMA_OlapViewContext$changeViewSize(viewInfoBarSize) {ULSM53:;
        if (!isNullOrEmpty(this._innerTargetId$p$0)) {
            var innerDiv = $get(this._innerTargetId$p$0);
            if (innerDiv) {
                innerDiv.style.height = (innerDiv.offsetHeight + viewInfoBarSize) + 'px';
            }
        }
    },
    
    setOuterTagAttribute: function PPSMA_OlapViewContext$setOuterTagAttribute(attribName, attribValue) {ULSM53:;
        if (!isNullOrEmpty(this._targetId$p$0)) {
            var outerTagDiv = $get(this._targetId$p$0);
            if (outerTagDiv) {
                outerTagDiv.setAttribute(attribName, attribValue);
            }
        }
    },
    
    getOuterTagAttribute: function PPSMA_OlapViewContext$getOuterTagAttribute(attribName) {ULSM53:;
        var attribValue = '';
        if (!isNullOrEmpty(this._targetId$p$0)) {
            var outerTagDiv = $get(this._targetId$p$0);
            if (outerTagDiv) {
                attribValue = outerTagDiv.getAttribute(attribName);
            }
        }
        return attribValue;
    },
    
    toggleViewInfoBar: function PPSMA_OlapViewContext$toggleViewInfoBar(viewInfoBar) {ULSM53:;
        this.changeViewConfiguration('ShowInformationBar', (!this._infoBarVisible$p$0).toString());
    },
    
    drillUp: function PPSMA_OlapViewContext$drillUp(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"DrillUp\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    drillDown: function PPSMA_OlapViewContext$drillDown(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"DrillDown\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    get__measuresXml$p$0: function PPSMA_OlapViewContext$get__measuresXml$p$0() {ULSM53:;
        var measureSelectionsXML;
        if (this._measures$p$0.get_axis() === 'none') {
            if (this._measures$p$0.get_selectedCount() === 1) {
                measureSelectionsXML = '<Measures Axis=\"Filter\" ';
            }
            else {
                measureSelectionsXML = '<Measures Axis=\"Columns\" ';
            }
        }
        else {
            if (!this._measures$p$0.get_selectedCount()) {
                measureSelectionsXML = '<Measures Axis=\"Filter\" ';
            }
            else {
                if ((this._measures$p$0.get_axis() === 'Filter') && (this._measures$p$0.get_selectedCount() > 1)) {
                    if (this._targetType$p$0 === 'AnalyticChart') {
                        measureSelectionsXML = '<Measures Axis=\"Rows\" Moved=\"yes\" ';
                    }
                    else {
                        measureSelectionsXML = '<Measures Axis=\"Columns\" Moved=\"yes\" ';
                    }
                }
                else {
                    measureSelectionsXML = '<Measures Axis=\"' + this._measures$p$0.get_axis() + '\" ';
                }
            }
        }
        measureSelectionsXML += 'MeasureGroupName=\"';
        measureSelectionsXML += this._measures$p$0.get_measureGroupName();
        measureSelectionsXML += '\">';
        for (var h = 0; h < this._measures$p$0.get_hierarchyCount(); h++) {
            var hierName = this._measures$p$0.getHierarchyName(h);
            measureSelectionsXML += '<Hierarchy name=\"';
            measureSelectionsXML += hierName;
            measureSelectionsXML += '\">';
            for (var i = 0; i < this._measures$p$0.get_selectedCount(); i++) {
                var meas = this._measures$p$0.getSelectedMeasureByOrder(i);
                if (!meas) {
                    continue;
                }
                if (meas.get_axisHierarchy() !== hierName) {
                    continue;
                }
                measureSelectionsXML += '<Measure name=\"';
                measureSelectionsXML += meas.get_name();
                measureSelectionsXML += '\"/>';
            }
            measureSelectionsXML += '</Hierarchy>';
        }
        measureSelectionsXML += '</Measures>';
        return measureSelectionsXML;
    },
    
    get__dimensionPropertiesXml$p$0: function PPSMA_OlapViewContext$get__dimensionPropertiesXml$p$0() {ULSM53:;
        var dimPropsXML = '';
        if ((!this._results$p$0) || (!this._results$p$0.get_rowHierarchies())) {
            return dimPropsXML;
        }
        for (var r = 0; r < this._results$p$0.get_rowHierarchies().length; r++) {
            var hierName = this._results$p$0.get_rowHierarchies()[r].get_name();
            var dimProps = this.getDimensionPropertiesList(hierName);
            if (dimProps) {
                if (dimProps.get_enabledCount() > 0) {
                    dimPropsXML += '<Hierarchy name=\"' + dimProps.get_name() + '\" PropertyCount=\"' + dimProps.get_enabledCount() + '\">';
                    for (var d = 0; d < dimProps.get_count(); d++) {
                        if (dimProps.get_checked()[d]) {
                            dimPropsXML += '<DimProperty name=\"' + dimProps.get_names()[d] + '\" caption=\"' + dimProps.get_captions()[d] + '\"/>';
                        }
                    }
                    dimPropsXML += '</Hierarchy>';
                }
                delete this._dimensionPropertiesDict$p$0[hierName];
            }
            else {
                var memberProps = this._results$p$0.get_rowHierarchies()[r].get_memberProperties();
                var totalProperties = (memberProps.get_count() - memberProps.get_numPropertiesHidden());
                if (totalProperties > 0) {
                    dimPropsXML += '<Hierarchy name=\"' + hierName + '\" PropertyCount=\"' + totalProperties + '\">';
                    for (var d = 0; d < memberProps.get_count(); d++) {
                        if (!memberProps.isPropertyHidden(memberProps.get_names()[d])) {
                            dimPropsXML += '<DimProperty name=\"' + memberProps.get_names()[d] + '\" caption=\"' + memberProps.get_captions()[d] + '\"/>';
                        }
                    }
                    dimPropsXML += '</Hierarchy>';
                }
            }
        }
        return dimPropsXML;
    },
    
    getPageHeadersHeight: function PPSMA_OlapViewContext$getPageHeadersHeight() {ULSM53:;
        var headersHeight = 0;
        if (this._toolbarVisible$p$0) {
            headersHeight += 30;
        }
        if (this._infoBarVisible$p$0) {
            headersHeight += 23;
        }
        return headersHeight;
    },
    
    setPage: function PPSMA_OlapViewContext$setPage(pageno) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var canNavigate = true;
        if (this._results$p$0) {
            canNavigate = this._results$p$0.get_canNavigate();
        }
        var actionXML = '<Action type=\"Execute\">' + '<Page>' + pageno + '</Page>' + '<Nav>' + canNavigate + '</Nav>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    setPage2: function PPSMA_OlapViewContext$setPage2(pageno, e) {ULSM53:;
        var keyNum = (e).keyCode;
        if (keyNum === 13) {
            this.setPage(pageno);
        }
    },
    
    setAllPageWithMessage: function PPSMA_OlapViewContext$setAllPageWithMessage(msg) {ULSM53:;
        var ans;
        ans = confirm(msg);
        if (ans) {
            var size = this._getContainerDivSize$p$0();
            var canNavigate = true;
            if (this._results$p$0) {
                canNavigate = this._results$p$0.get_canNavigate();
            }
            var actionXML = '<Action type=\"Execute\">' + '<Page>0</Page>' + '<Nav>' + canNavigate + '</Nav>' + '</Action>';
            this.makeNavigationRequest(actionXML, size.y, size.x);
        }
    },
    
    setAllPageWithMessage2: function PPSMA_OlapViewContext$setAllPageWithMessage2(msg, e) {ULSM53:;
        var keyNum = (e).keyCode;
        if (keyNum === 13) {
            this.setAllPageWithMessage(msg);
        }
    },
    
    expand: function PPSMA_OlapViewContext$expand(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Expand\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    collapse: function PPSMA_OlapViewContext$collapse(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Collapse\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    showOnly: function PPSMA_OlapViewContext$showOnly(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"ShowOnly\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    hide: function PPSMA_OlapViewContext$hide(hierarchyName, memberName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Hide\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    crossDrill: function PPSMA_OlapViewContext$crossDrill(hierarchyName, memberName, drillToHierarchyName, drillToMemberName, drillToLevelName) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"CrossDrill\">' + '<Member>' + PPSMA.EncodeEx.xmlEncode(memberName) + '</Member>' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchyName) + '</Hierarchy>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '<DrillToMember>' + PPSMA.EncodeEx.xmlEncode(drillToMemberName) + '</DrillToMember>' + '<DrillToLevel>' + PPSMA.EncodeEx.xmlEncode(drillToLevelName) + '</DrillToLevel>' + '<DrillToHierarchy>' + PPSMA.EncodeEx.xmlEncode(drillToHierarchyName) + '</DrillToHierarchy>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    pivot: function PPSMA_OlapViewContext$pivot() {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Pivot\"></Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    switchOlapReportType: function PPSMA_OlapViewContext$switchOlapReportType(reportType, callback) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"SwitchReportType\">' + '<Page>' + reportType + '</Page>' + '</Action>';
        var type;
        if (!reportType) {
            type = 'OLAPGrid';
        }
        else {
            type = 'AnalyticChart';
        }
        this._analyticCallback$p$0 = callback;
        this._makeNavigationRequestWithType$p$0(actionXML, size.y, size.x, type);
    },
    
    changeViewConfiguration: function PPSMA_OlapViewContext$changeViewConfiguration(propertyName, propertyValue) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"ChangeViewConfiguration\">' + '<' + propertyName + '>' + propertyValue + '</' + propertyName + '>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    changeViewConfigurationWithCallback: function PPSMA_OlapViewContext$changeViewConfigurationWithCallback(propertyName, propertyValue, callback) {ULSM53:;
        this._analyticCallback$p$0 = callback;
        this.changeViewConfiguration(propertyName, propertyValue);
    },
    
    filterEmpty: function PPSMA_OlapViewContext$filterEmpty(axis, filter) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"FilterEmpty\">' + '<Axis>' + PPSMA.EncodeEx.xmlEncode(axis) + '</Axis>' + '<Filter>' + filter + '</Filter>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    clearFilter: function PPSMA_OlapViewContext$clearFilter(axis, resetPaging) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var page = this._currentDataPage$p$0;
        if (!page && resetPaging) {
            page = 1;
        }
        var actionXML = '<Action type=\"Filter\">' + '<Hierarchy></Hierarchy>' + '<TupleXML></TupleXML>' + '<Axis>' + PPSMA.EncodeEx.xmlEncode(axis) + '</Axis>' + '<FilterType>' + PPSMA.EncodeEx.xmlEncode('0') + '</FilterType>' + '<Level></Level>' + '<Value1></Value1>' + '<Value2></Value2>' + '<Page>' + page + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    filter: function PPSMA_OlapViewContext$filter(filterType, hierarchy, tupleXml, axis, level, value1, value2) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Filter\">' + '<Hierarchy>' + PPSMA.EncodeEx.xmlEncode(hierarchy) + '</Hierarchy>' + '<TupleXML>' + tupleXml + '</TupleXML>' + '<Axis>' + PPSMA.EncodeEx.xmlEncode(axis) + '</Axis>' + '<FilterType>' + PPSMA.EncodeEx.xmlEncode(filterType) + '</FilterType>' + '<Level>' + PPSMA.EncodeEx.xmlEncode(level) + '</Level>' + '<Value1>' + PPSMA.EncodeEx.xmlEncode(value1) + '</Value1>' + '<Value2>' + PPSMA.EncodeEx.xmlEncode(value2) + '</Value2>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    sort: function PPSMA_OlapViewContext$sort(axis, tupleXml, sortType, preservePeerGroup) {ULSM53:;
        var size = this._getContainerDivSize$p$0();
        var actionXML = '<Action type=\"Sort\">' + '<Axis>' + PPSMA.EncodeEx.xmlEncode(axis) + '</Axis>' + '<TupleXML>' + tupleXml + '</TupleXML>' + '<SortType>' + PPSMA.EncodeEx.xmlEncode(sortType) + '</SortType>' + '<PreservePeerGroup>' + PPSMA.EncodeEx.xmlEncode(preservePeerGroup) + '</PreservePeerGroup>' + '<Page>' + this._currentDataPage$p$0 + '</Page>' + '</Action>';
        this.makeNavigationRequest(actionXML, size.y, size.x);
    },
    
    loadCubeMetadata: function PPSMA_OlapViewContext$loadCubeMetadata(metadataContextId) {ULSM53:;
        var actionXML = '<Action type=\"GetCubeMetadata\"></Action>';
        this.makeCubeMetadataRequest(actionXML, metadataContextId);
    },
    
    getCellLevelActions: function PPSMA_OlapViewContext$getCellLevelActions(tupleXml) {ULSM53:;
        var actionXML = '<Action type=\"CellLevelActions\">' + '<Tuple>' + tupleXml + '</Tuple>' + '</Action>';
        this._makeMenuMetadataRequest$p$0(actionXML, PPSMA.MenuMetadataTypes.CellActions);
    },
    
    getDimensionProperties: function PPSMA_OlapViewContext$getDimensionProperties(selectedMemberXml, callback) {ULSM53:;
        this._getDimensionDataCallback$p$0 = callback;
        var actionXML = '<Action type=\"DimensionProperties\">' + '<Member>' + selectedMemberXml + '</Member>' + '</Action>';
        this._makeMenuMetadataRequest$p$0(actionXML, PPSMA.MenuMetadataTypes.DimensionData);
    },
    
    getMeasureGroups: function PPSMA_OlapViewContext$getMeasureGroups(callback) {ULSM53:;
        this._getMeasureDataCallback$p$0 = callback;
        var actionXML = '<Action type=\"MeasureGroups\">' + '<RetrieveKpis>' + this._measures$p$0.get_displayKpis() + '</RetrieveKpis>' + '</Action>';
        this._makeMenuMetadataRequest$p$0(actionXML, PPSMA.MenuMetadataTypes.MeasureData);
    },
    
    _makeMenuMetadataRequest$p$0: function PPSMA_OlapViewContext$_makeMenuMetadataRequest$p$0(actionXml, mtype) {ULSM53:;
        var viewPropsString = 'InfoBar:' + this._infoBarVisible$p$0 + ',History:' + this._historyButtonsVisible$p$0 + ',SingleView:' + this._isSingleView$p$0 + ',IsDesigner:' + this._isDesigner$p$0 + ',ActionXML:' + actionXml.replace(':', '');
        var rr = new PPSMA.AjaxOlapRenderRequestRecord(this._targetId$p$0, 'OLAPGrid', this._ctrlProxyId$p$0, 0, 0, this._reportId$p$0, '', actionXml, viewPropsString);
        var body = { requestRecord: rr };
        var wr = new Sys.Net.WebRequest();
        wr.get_headers()['Content-Type'] = 'application/json; charset=utf-8';
        wr.get_headers()[PPSMA.OlapViewContext.menU_METADATA_HEADER_TYPE] = (mtype === PPSMA.MenuMetadataTypes.CellActions) ? 'CellActions' : (mtype === PPSMA.MenuMetadataTypes.DimensionData) ? 'DimensionData' : (mtype === PPSMA.MenuMetadataTypes.MeasureData) ? 'MeasureData' : 'None';
        wr.set_url(this._controlFactoryPath$p$0);
        wr.set_body(Sys.Serialization.JavaScriptSerializer.serialize(body));
        wr.set_httpVerb('POST');
        wr.add_completed(this.$$d__onMenuMetadataRequestCompleted$p$0);
        wr.invoke();
    },
    
    _onMenuMetadataRequestCompleted$p$0: function PPSMA_OlapViewContext$_onMenuMetadataRequestCompleted$p$0(executor) {ULSM53:;
        var t = 0;
        var stype = '';
        if (executor.get_webRequest()) {
            stype = executor.get_webRequest().get_headers()[PPSMA.OlapViewContext.menU_METADATA_HEADER_TYPE];
            t = (stype === 'CellActions') ? PPSMA.MenuMetadataTypes.CellActions : (stype === 'DimensionData') ? PPSMA.MenuMetadataTypes.DimensionData : (stype === 'MeasureData') ? PPSMA.MenuMetadataTypes.MeasureData : 0;
        }
        else {
            this._menuMetadataRequestCompletedError$p$0('The request was destroyed');
        }
        if (executor.get_responseAvailable() && executor.get_statusCode() === 200) {
            var resultRecord = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'AjaxRenderResultRecord');
            var response = resultRecord.Html;
            if (!isNullOrUndefined(response)) {
                var properlyFormed;
                if (t === PPSMA.MenuMetadataTypes.MeasureData) {
                    properlyFormed = response.startsWith('<MeasureGroups');
                    this._measureData$p$0 = (properlyFormed) ? response : null;
                    if (this._getMeasureDataCallback$p$0) {
                        this._getMeasureDataCallback$p$0(properlyFormed);
                        this._getMeasureDataCallback$p$0 = null;
                    }
                }
                else if (t === PPSMA.MenuMetadataTypes.DimensionData) {
                    properlyFormed = response.startsWith('<DimensionProperties');
                    this._dimensionData$p$0 = (properlyFormed) ? response : null;
                    if (this._getDimensionDataCallback$p$0) {
                        this._getDimensionDataCallback$p$0(properlyFormed);
                        this._getDimensionDataCallback$p$0 = null;
                    }
                }
                else if (t === PPSMA.MenuMetadataTypes.CellActions) {
                    properlyFormed = response.startsWith('<AdditionalActions');
                    this._cellActionData$p$0 = (properlyFormed) ? response : null;
                }
                else {
                    this._menuMetadataRequestCompletedError$p$0('Unrecognized return type ' + stype);
                }
            }
            else {
                this._menuMetadataRequestCompletedError$p$0('Response is blank');
            }
        }
        else {
            this._menuMetadataRequestCompletedError$p$0('Menu metadata response ' + ((executor.get_responseAvailable()) ? 'available, ' : 'not available, ') + 'StatusCode=' + executor.get_statusCode());
        }
        if (executor && !executor.get_aborted()) {
            executor.abort();
        }
    },
    
    notifyBrowserOfAsyncUpdate: function PPSMA_OlapViewContext$notifyBrowserOfAsyncUpdate(elem) {ULSM53:;
        if (PPSMA.NewWindow.isInMoreAccessibleMode()) {
            if (elem) {
                notifyBrowserOfAsyncUpdate(elem);
            }
            else {
                PPSMA.ReportsCommon.logErrorCondition('Couldn\'t notify browser of an asynchronous update.');
            }
        }
    },
    
    _menuMetadataRequestCompletedError$p$0: function PPSMA_OlapViewContext$_menuMetadataRequestCompletedError$p$0(errorMsg) {
    },
    
    _onCancelRequest$p$0: function PPSMA_OlapViewContext$_onCancelRequest$p$0() {ULSM53:;
        if (this._renderWebRequest$p$0) {
            this._renderWebRequest$p$0.dispose();
            this._renderWebRequest$p$0 = null;
        }
    },
    
    _makeNavigationRequestWithType$p$0: function PPSMA_OlapViewContext$_makeNavigationRequestWithType$p$0(actionXML, height, width, viewType) {ULSM53:;
        if (this._renderWebRequest$p$0) {
            this._renderWebRequest$p$0.dispose();
            this._renderWebRequest$p$0 = null;
        }
        var target = null;
        if (!isNullOrEmpty(this._webPartTargetId$p$0) && !this.get_isDesigner()) {
            target = $get(this._webPartTargetId$p$0);
        }
        else {
            target = $get(PPSMA.Dashboard.contentBox);
        }
        if (!target) {
            PPSMA.OlapViewContext._trace$p('Waiting indicator target container item not found!!!!!!!');
        }
        this._renderWebRequest$p$0 = new PPSMA.OlapWebRequest(target, this.$$d__onCancelRequest$p$0, this._loadingImage$p$0);
        if (target) {
            this._renderWebRequest$p$0.show();
        }
        this._inboundSerialStamp$p$0++;
        var viewPropsString = 'InfoBar:' + this._infoBarVisible$p$0 + ',History:' + this._historyButtonsVisible$p$0 + ',SingleView:' + this._isSingleView$p$0 + ',IsDesigner:' + this._isDesigner$p$0;
        var rr = new PPSMA.AjaxOlapRenderRequestRecord(this._targetId$p$0, viewType || 'OLAPGrid', this._ctrlProxyId$p$0, height, width, this._reportId$p$0, '', actionXML, viewPropsString);
        var body = { requestRecord: rr };
        var details = new PPSMA.WebRequestDetails(this._controlFactoryPath$p$0, Sys.Serialization.JavaScriptSerializer.serialize(body), 'POST', 'application/json; charset=utf-8', this.$$d__onNavigationalRequestCompleted$p$0);
        this._renderWebRequest$p$0.submit(details);
    },
    
    makeNavigationRequest: function PPSMA_OlapViewContext$makeNavigationRequest(actionXml, height, width) {ULSM53:;
        this._makeNavigationRequestWithType$p$0(actionXml, height, width, this._targetType$p$0);
    },
    
    _invokeAnalyticCallback$p$0: function PPSMA_OlapViewContext$_invokeAnalyticCallback$p$0(success) {ULSM53:;
        if (this._analyticCallback$p$0) {
            this._analyticCallback$p$0(success);
            this._analyticCallback$p$0 = null;
        }
    },
    
    _onNavigationalRequestCompleted$p$0: function PPSMA_OlapViewContext$_onNavigationalRequestCompleted$p$0(executor) {ULSM53:;
        if (executor.get_aborted()) {
            this._invokeAnalyticCallback$p$0(false);
            return;
        }
        else {
            this._invokeAnalyticCallback$p$0(true);
        }
        this._renderWebRequest$p$0.dispose();
        this._renderWebRequest$p$0 = null;
        if (this._isSingleView$p$0 && !this._historyManager$p$0) {
            var target = $get(this._targetId$p$0);
            this._historyManager$p$0 = AjaxFX.HistoryManager.createHistory(target, this._resourcePath$p$0 + 'plus.gif?' + this._ctrlProxyId$p$0 + '|' + this._reportId$p$0 + '|1|' + this._inboundSerialStamp$p$0 + '|' + this.get_targetType());
            if (Sys.Browser.agent === Sys.Browser.Firefox) {
                this._historyManager$p$0.addEntry(this._ctrlProxyId$p$0 + '|' + this._reportId$p$0 + '|1|' + this._inboundSerialStamp$p$0 + '|' + this.get_targetType());
            }
            this._historyManager$p$0.add_navigated(this.$$d__onHistoryNavigated$p$0);
        }
        if (executor.get_responseAvailable() && executor.get_statusCode() === 200) {
            var resultRecord;
            resultRecord = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'AjaxRenderResultRecord');
            var updatedReportId = false;
            if (!isNullOrUndefined(resultRecord)) {
                updatedReportId = this.renderResult(resultRecord);
            }
            if (this._historyManager$p$0 && !this._isHistoryNavigation$p$0) {
                if (updatedReportId && !isNullOrEmpty(this._reportId$p$0)) {
                    this._historyManager$p$0.addEntry(this._ctrlProxyId$p$0 + '|' + this._reportId$p$0 + '|' + this._currentDataPage$p$0 + '|' + this._inboundSerialStamp$p$0 + '|' + this.get_targetType());
                }
                else {
                    this._historyManager$p$0.addEntry(this._ctrlProxyId$p$0 + '|error|1|' + this._inboundSerialStamp$p$0 + '|' + this.get_targetType());
                }
            }
        }
        else {
            if (null !== this._targetId$p$0) {
                var target = $get(this._targetId$p$0);
                if (null !== target) {
                    target.style.position = 'static';
                    target.innerHTML = this._errorHtml$p$0;
                }
            }
            if (this._historyManager$p$0 && !this._isHistoryNavigation$p$0) {
                this._historyManager$p$0.addEntry(this._ctrlProxyId$p$0 + '|error|1|' + this._inboundSerialStamp$p$0 + '|' + this.get_targetType());
            }
        }
        this._isHistoryNavigation$p$0 = false;
        this.notifyBrowserOfAsyncUpdate($get(this._targetId$p$0));
    },
    
    makeCubeMetadataRequest: function PPSMA_OlapViewContext$makeCubeMetadataRequest(metadataXML, metadataContextId) {ULSM53:;
        if (this._renderWebRequest$p$0) {
            this._renderWebRequest$p$0.dispose();
            this._renderWebRequest$p$0 = null;
        }
        this._renderWebRequest$p$0 = new PPSMA.OlapWebRequest(null, null, '');
        this._inboundSerialStamp$p$0++;
        var mr = new PPSMA.AjaxOlapMetadataRequestRecord(this._targetId$p$0, 'OlapMetadata', this._ctrlProxyId$p$0, metadataContextId, this._reportId$p$0, metadataXML);
        var body = { requestRecord: mr };
        var details = new PPSMA.WebRequestDetails(this._metadataFactoryPath$p$0, Sys.Serialization.JavaScriptSerializer.serialize(body), 'POST', 'application/json; charset=utf-8', this.$$d__onCubeMetadataRequestCompleted$p$0);
        this._renderWebRequest$p$0.submit(details);
    },
    
    _onCubeMetadataRequestCompleted$p$0: function PPSMA_OlapViewContext$_onCubeMetadataRequestCompleted$p$0(executor) {ULSM53:;
        if (this._renderWebRequest$p$0) {
            this._renderWebRequest$p$0.dispose();
            this._renderWebRequest$p$0 = null;
        }
        if (executor.get_responseAvailable() && executor.get_statusCode() === 200) {
            var resultRecord;
            resultRecord = PPSMA.WebRequestExecuterEx.simpleResult(executor, 'AjaxRenderResultRecord');
            if (!isNullOrUndefined(resultRecord)) {
                this.renderMetadataResult(resultRecord);
            }
        }
        else {
        }
    },
    
    renderResult: function PPSMA_OlapViewContext$renderResult(record) {ULSM53:;
        var ctrlDiv = $get(this._targetId$p$0);
        if (isNullOrUndefined(ctrlDiv)) {
            return false;
        }
        if (!isNullUndefinedOrEmpty(record.Html)) {
            ctrlDiv.innerHTML = record.Html;
        }
        if (!isNullUndefinedOrEmpty(record.Script)) {
            try {
                eval(record.Script);
            }
            catch (ex) {
                alert(ex.message);
            }
        }
        else {
            ctrlDiv.style.position = 'static';
        }
        return true;
    },
    
    renderMetadataResult: function PPSMA_OlapViewContext$renderMetadataResult(record) {ULSM53:;
        var script = record.Script;
        if (!isNullOrEmpty(script)) {
            try {
                eval(script);
            }
            catch (ex) {
                alert(ex.message);
            }
        }
    },
    
    renderUpdate: function PPSMA_OlapViewContext$renderUpdate() {ULSM53:;
        var ctrlDiv = $get(this._targetId$p$0);
        if (ctrlDiv) {
            var hwObject = PPSMA.OlapViewContext._getWindowSize$p();
            this._lastHeight$p$0 = hwObject.y;
            this._lastWidth$p$0 = hwObject.x;
            if (!isNullOrEmpty(this._innerTargetId$p$0)) {
                var resizeDiv = $get(this._innerTargetId$p$0);
                if (resizeDiv) {
                    this._isReloading$p$0 = false;
                    if (this._targetType$p$0 !== PPSMA.OlapViewContext._olapDrillThrough$p) {
                        resizeDiv.style.overflow = 'auto';
                    }
                    var overflowSetting = ctrlDiv.parentNode.style.overflow;
                    ctrlDiv.parentNode.style.overflow = 'hidden';
                    ctrlDiv.parentNode.style.overflow = overflowSetting;
                }
            }
        }
    },
    
    resize: function PPSMA_OlapViewContext$resize(e) {ULSM53:;
        if (PPSMA.SizeEx.getClientHeight() <= 30) {
            return;
        }
        var ctrlDiv = $get(this._targetId$p$0);
        if (ctrlDiv && !isNullOrEmpty(this._innerTargetId$p$0)) {
            var resizeDiv = $get(this._innerTargetId$p$0);
            if (resizeDiv) {
                var hwObject = PPSMA.OlapViewContext._getWindowSize$p();
                if (hwObject.y !== this._lastHeight$p$0) {
                    resizeDiv.style.height = (ctrlDiv.offsetParent.offsetHeight - this.getPageHeadersHeight() - 4) + 'px';
                }
                if (hwObject.x !== this._lastWidth$p$0) {
                    resizeDiv.style.width = ctrlDiv.offsetParent.offsetWidth + 'px';
                }
            }
        }
    },
    
    _getContainerDivSize$p$0: function PPSMA_OlapViewContext$_getContainerDivSize$p$0() {ULSM53:;
        var webPartTarget = null;
        if (!isNullOrEmpty(this._webPartTargetId$p$0)) {
            webPartTarget = $get(this._webPartTargetId$p$0);
        }
        return PPSMA.OlapViewContext._getDivSize$p(webPartTarget);
    },
    
    dispose: function PPSMA_OlapViewContext$dispose() {ULSM53:;
        if (this._historyManager$p$0) {
            this._historyManager$p$0.dispose();
        }
        if (this._renderWebRequest$p$0) {
            this._renderWebRequest$p$0.dispose();
            this._renderWebRequest$p$0 = null;
        }
        delete PPSMA.OlapViewContext.globalIds[this._ctrlProxyId$p$0];
    },
    
    get_measures: function PPSMA_OlapViewContext$get_measures() {ULSM53:;
        return this._measures$p$0;
    },
    
    getDimensionPropertiesList: function PPSMA_OlapViewContext$getDimensionPropertiesList(uniqueName) {ULSM53:;
        return (this._dimensionPropertiesDict$p$0[uniqueName]);
    },
    
    addDimensionPropertiesList: function PPSMA_OlapViewContext$addDimensionPropertiesList(uniqueName, displayCaption, count) {ULSM53:;
        var dimProperties = this.getDimensionPropertiesList(uniqueName);
        if (dimProperties) {
            return dimProperties;
        }
        dimProperties = new PPSMA.DimensionProperties(uniqueName, displayCaption, count);
        this._dimensionPropertiesDict$p$0[uniqueName] = dimProperties;
        return dimProperties;
    }
}


PPSMA.ChangeMeasure = function PPSMA_ChangeMeasure(olapViewContext) {ULSM53:;
    this.$$d_handleRemoveMeasureLinkClick = Function.createDelegate(this, this.handleRemoveMeasureLinkClick);
    this.$$d_handleMoveDownLinkClick = Function.createDelegate(this, this.handleMoveDownLinkClick);
    this.$$d_handleMoveUpLinkClick = Function.createDelegate(this, this.handleMoveUpLinkClick);
    this.$$d_blurMeasureListOnTabToFieldList = Function.createDelegate(this, this.blurMeasureListOnTabToFieldList);
    this.$$d_handleMeasureNameLinkFocus = Function.createDelegate(this, this.handleMeasureNameLinkFocus);
    this.$$d_handleMeasureNameLinkClick = Function.createDelegate(this, this.handleMeasureNameLinkClick);
    this.$$d_handleMeasureNameDivClick = Function.createDelegate(this, this.handleMeasureNameDivClick);
    this.$$d_handleMeasureNameDivKeydown = Function.createDelegate(this, this.handleMeasureNameDivKeydown);
    this.$$d_handleMeasureNameDivKeyup = Function.createDelegate(this, this.handleMeasureNameDivKeyup);
    this.$$d__closeDialog$p$0 = Function.createDelegate(this, this._closeDialog$p$0);
    this.$$d_closeChangeMeasureDialog = Function.createDelegate(this, this.closeChangeMeasureDialog);
    this.$$d_handleOKButtonFocus = Function.createDelegate(this, this.handleOKButtonFocus);
    this.$$d_applyNewMeasureSelection = Function.createDelegate(this, this.applyNewMeasureSelection);
    this.$$d_handleTabMoverLinkKeydown = Function.createDelegate(this, this.handleTabMoverLinkKeydown);
    this.$$d__handleTabMoverLinkClick$p$0 = Function.createDelegate(this, this._handleTabMoverLinkClick$p$0);
    this.$$d_setInitialFocus = Function.createDelegate(this, this.setInitialFocus);
    this.$$d_handleThinFieldListItemSelected = Function.createDelegate(this, this.handleThinFieldListItemSelected);
    this._measureList$p$0 = [];
    this._olapViewContext$0 = olapViewContext;
    this._thinFieldList$0 = new PPSMA.ThinFieldList(this._olapViewContext$0, true, false);
    this._thinFieldList$0.add_itemSelected(this.$$d_handleThinFieldListItemSelected);
    this._dragContainerId$0 = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ChangeMeasure._idDragContainer$p;
    this._changeMeasureId$0 = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.ChangeMeasure._idChangeMeasureDialog$p;
    this._measureGroupsComboId$0 = this._olapViewContext$0.get_ctrlProxyId() + PPSMA.Measures.measureGroupDropDownComboxBoxID;
}
PPSMA.ChangeMeasure.prototype = {
    _olapViewContext$0: null,
    _thinFieldList$0: null,
    _spDialog$0: null,
    _callbackMethod$0: null,
    _windowResizeHandler$0: null,
    _selectedButton$0: null,
    _dragContainerId$0: null,
    _changeMeasureId$0: null,
    _measureGroupsComboId$0: null,
    _currentSelectedMeasure$p$0: null,
    
    setCallbackMethod: function PPSMA_ChangeMeasure$setCallbackMethod(callback) {ULSM53:;
        this._callbackMethod$0 = callback;
    },
    
    get_selectedButton: function PPSMA_ChangeMeasure$get_selectedButton() {ULSM53:;
        return this._selectedButton$0;
    },
    
    show: function PPSMA_ChangeMeasure$show(currCell) {ULSM53:;
        this.initializeChangeMeasureDiv();
        this._thinFieldList$0.showInChangeMeasure();
        window.setTimeout(this.$$d_setInitialFocus, 500);
        this._addChangeMeasureDomEventHandlers$p$0();
    },
    
    _addChangeMeasureDomEventHandlers$p$0: function PPSMA_ChangeMeasure$_addChangeMeasureDomEventHandlers$p$0() {ULSM53:;
        var tabMoverLink = $get(PPSMA.ChangeMeasure._idtabMoverLink$p);
        if (tabMoverLink) {
            $addHandler(tabMoverLink, 'click', this.$$d__handleTabMoverLinkClick$p$0);
            $addHandler(tabMoverLink, 'keydown', this.$$d_handleTabMoverLinkKeydown);
        }
        var okButton = $get(PPSMA.ChangeMeasure._idOkButton$p);
        if (okButton) {
            $addHandler(okButton, 'click', this.$$d_applyNewMeasureSelection);
            $addHandler(okButton, 'focus', this.$$d_handleOKButtonFocus);
        }
        var cancelButton = $get(PPSMA.ChangeMeasure._idCancelButton$p);
        if (cancelButton) {
            $addHandler(cancelButton, 'click', this.$$d_closeChangeMeasureDialog);
        }
    },
    
    _removeChangeMeasureDomEventHandlers$p$0: function PPSMA_ChangeMeasure$_removeChangeMeasureDomEventHandlers$p$0() {ULSM53:;
        if (!PPSMA.DialogsCommon.removeWindowResizeEventHandler(this._windowResizeHandler$0)) {
            PPSMA.ReportsCommon.logErrorCondition('ChangeMeasure: couldn\'t remove the resize event handlers');
        }
        this._windowResizeHandler$0 = null;
    },
    
    setInitialFocus: function PPSMA_ChangeMeasure$setInitialFocus() {ULSM53:;
        if (!PPSMA.NewWindow.isInMoreAccessibleMode()) {
            this.skipToMeasureList();
        }
        else {
            this.showAndActivateSkipToLink();
        }
    },
    
    showAndActivateSkipToLink: function PPSMA_ChangeMeasure$showAndActivateSkipToLink() {ULSM53:;
        var tabMoverDiv = $get(PPSMA.ChangeMeasure._idtabMoverDiv$p);
        if (tabMoverDiv) {
            tabMoverDiv.style.display = 'block';
            var tabMoverLink = $get(PPSMA.ChangeMeasure._idtabMoverLink$p);
            if (tabMoverLink) {
                tabMoverLink.focus();
            }
            else {
                PPSMA.ReportsCommon.logErrorCondition('SetInitialFocus: couldn\'t find anchor ' + PPSMA.ChangeMeasure._idtabMoverLink$p + ' to focus on it.');
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('SetInitialFocus: couldn\'t find div ' + PPSMA.ChangeMeasure._idtabMoverDiv$p + ' to make it visible.');
        }
    },
    
    initializeChangeMeasureDiv: function PPSMA_ChangeMeasure$initializeChangeMeasureDiv() {ULSM53:;
        var measureDiv = document.createElement('div');
        measureDiv.id = this._changeMeasureId$0;
        measureDiv.className = PPSMA.ChangeMeasure._classChangeMeasureMain$p;
        measureDiv.title = PPSMA.SR.OlapChangeMeasure_DialogAltText;
        measureDiv.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_DialogAltText);
        document.body.appendChild(measureDiv);
        var tabMoverDiv = document.createElement('div');
        tabMoverDiv.className = PPSMA.ChangeMeasure._tabMover$p;
        tabMoverDiv.id = PPSMA.ChangeMeasure._idtabMoverDiv$p;
        measureDiv.appendChild(tabMoverDiv);
        var tabMoverLink = document.createElement('a');
        tabMoverLink.href = 'javascript:;';
        tabMoverLink.id = PPSMA.ChangeMeasure._idtabMoverLink$p;
        tabMoverLink.title = PPSMA.SR.OlapChangeMeasure_SkipToMeasureList;
        tabMoverLink.className = PPSMA.ChangeMeasure._tabMoverLink$p;
        PPSMA.DomElementEx.setInnerText(tabMoverLink, PPSMA.SR.OlapChangeMeasure_SkipToMeasureList);
        tabMoverDiv.appendChild(tabMoverLink);
        var aboveFooter = document.createElement('div');
        aboveFooter.id = PPSMA.ChangeMeasure._idaboveFooterLayoutDiv$p;
        aboveFooter.className = PPSMA.ChangeMeasure._classChangeMeasureContent$p;
        measureDiv.appendChild(aboveFooter);
        var fieldListDiv = document.createElement('div');
        fieldListDiv.id = PPSMA.ChangeMeasure.idFieldList;
        fieldListDiv.className = PPSMA.ChangeMeasure._fieldList$p;
        aboveFooter.appendChild(fieldListDiv);
        var measureListDiv = document.createElement('div');
        measureListDiv.id = PPSMA.ChangeMeasure._idMeasureList$p;
        measureListDiv.className = PPSMA.ChangeMeasure._measureList$p;
        aboveFooter.appendChild(measureListDiv);
        var dragContainer = document.createElement('div');
        dragContainer.id = this._dragContainerId$0;
        dragContainer.className = PPSMA.ChangeMeasure._dragContainer$p;
        measureListDiv.appendChild(dragContainer);
        var footerDiv = document.createElement('div');
        footerDiv.id = PPSMA.ChangeMeasure._idFooterDiv$p;
        footerDiv.className = PPSMA.ChangeMeasure._footer$p;
        measureDiv.appendChild(footerDiv);
        var okButton = document.createElement('input');
        okButton.type = 'button';
        okButton.id = PPSMA.ChangeMeasure._idOkButton$p;
        okButton.value = PPSMA.SR.OlapChangeMeasure_Ok;
        okButton.title = PPSMA.SR.OlapChangeMeasure_Ok;
        okButton.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_Ok);
        okButton.className = PPSMA.ChangeMeasure._classApplyCustom$p;
        footerDiv.appendChild(okButton);
        var cancelButton = document.createElement('input');
        cancelButton.type = 'button';
        cancelButton.id = PPSMA.ChangeMeasure._idCancelButton$p;
        cancelButton.value = PPSMA.SR.OlapChangeMeasure_Cancel;
        cancelButton.title = PPSMA.SR.OlapChangeMeasure_Cancel;
        cancelButton.setAttribute('alt', PPSMA.SR.OlapChangeMeasure_Cancel);
        cancelButton.className = PPSMA.ChangeMeasure._classCancelCustom$p;
        footerDiv.appendChild(cancelButton);
        var parentDiv = document.createElement('div');
        parentDiv.className = PPSMA.ChangeMeasure._classPositioningParent$p;
        parentDiv.appendChild(measureDiv);
        var pt = PPSMA.SizeEx.getCenterXandY(PPSMA.ScriptConstants.defaultDialogWidth, PPSMA.ScriptConstants.defaultDialogHeight);
        var opts = new SP.UI.DialogOptions();
        opts.height = PPSMA.ScriptConstants.defaultDialogHeight;
        opts.width = PPSMA.ScriptConstants.defaultDialogWidth;
        opts.allowMaximize = true;
        opts.title = PPSMA.SR.OlapChangeMeasure_DialogTitle;
        opts.html = parentDiv;
        opts.html.innerHTML = parentDiv.innerHTML;
        PPSMA.DomElementEx.removeElement(measureDiv);
        opts.x = pt.x;
        opts.y = pt.y;
        opts.dialogReturnValueCallback = this.$$d__closeDialog$p$0;
        this._spDialog$0 = SP.UI.ModalDialog.showModalDialog(opts);
    },
    
    handleOKButtonFocus: function PPSMA_ChangeMeasure$handleOKButtonFocus(e) {ULSM53:;
        this.focusOnlyMeasure(PPSMA.ChangeMeasure._nonexistentUniqueMeausureName$p);
    },
    
    deleteUpDownRemove: function PPSMA_ChangeMeasure$deleteUpDownRemove() {ULSM53:;
        var kill = $get(PPSMA.ChangeMeasure._idControlButtonsDiv$p);
        if (kill) {
            kill.parentNode.removeChild(kill);
        }
    },
    
    handleThinFieldListItemSelected: function PPSMA_ChangeMeasure$handleThinFieldListItemSelected(sender, args) {ULSM53:;
        if (sender) {
            var dragContainerDiv = $get(this._dragContainerId$0);
            if (args.itemIsSelected) {
                if (!Array.contains(this._measureList$p$0, args.itemUniqueName)) {
                    if (dragContainerDiv) {
                        var measureNameDiv = document.createElement('div');
                        dragContainerDiv.appendChild(measureNameDiv);
                        measureNameDiv.id = args.itemUniqueName;
                        measureNameDiv.className = PPSMA.ChangeMeasure._classDragBoxItems$p;
                        measureNameDiv.title = args.itemCaption;
                        $addHandler(measureNameDiv, 'keyup', this.$$d_handleMeasureNameDivKeyup);
                        $addHandler(measureNameDiv, 'keydown', this.$$d_handleMeasureNameDivKeydown);
                        $addHandler(measureNameDiv, 'click', this.$$d_handleMeasureNameDivClick);
                        var measureNameDivLink = document.createElement('a');
                        measureNameDiv.appendChild(measureNameDivLink);
                        measureNameDivLink.id = PPSMA.ChangeMeasure._idMeasureNameDivLink$p + args.itemUniqueName;
                        measureNameDivLink.setAttribute('href', '#');
                        measureNameDivLink.className = PPSMA.ChangeMeasure._classDragBoxItemsLink$p;
                        PPSMA.DomElementEx.setInnerText(measureNameDivLink, args.itemCaption);
                        $addHandler(measureNameDivLink, 'click', this.$$d_handleMeasureNameLinkClick);
                        $addHandler(measureNameDivLink, 'focus', this.$$d_handleMeasureNameLinkFocus);
                        $addHandler(measureNameDivLink, 'keydown', this.$$d_blurMeasureListOnTabToFieldList);
                        Array.add(this._measureList$p$0, args.itemUniqueName);
                        this.focusOnlyMeasure(args.itemUniqueName);
                    }
                    else {
                        PPSMA.ReportsCommon.logErrorCondition('can\'t add measures to the drag container div ' + this._dragContainerId$0 + ' because it couldn\'t be found');
                    }
                }
            }
            else {
                var removeMeasureNameDiv = $get(args.itemUniqueName);
                var removeMeasureNameDivParent = removeMeasureNameDiv.parentNode;
                removeMeasureNameDivParent.removeChild(removeMeasureNameDiv);
                Array.remove(this._measureList$p$0, args.itemUniqueName);
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('HandleThinFieldListItemSelected sender was NULL!');
        }
    },
    
    _closeDialog$p$0: function PPSMA_ChangeMeasure$_closeDialog$p$0(result, param) {ULSM53:;
        this._removeChangeMeasureDomEventHandlers$p$0();
        this._selectedButton$0 = PPSMA.ChangeMeasure._cancelBtn$p;
        if (result === SP.UI.DialogResult.OK) {
            this._selectedButton$0 = PPSMA.ChangeMeasure._okBtn$p;
            this._olapViewContext$0.setOuterTagAttribute('MeasureGroupName', this._olapViewContext$0.get_measures().get_measureGroupName());
            this._olapViewContext$0.applyMeasureSelectorChanges();
        }
        Array.clear(this._measureList$p$0);
        if (this._callbackMethod$0) {
            this._callbackMethod$0();
        }
    },
    
    closeChangeMeasureDialog: function PPSMA_ChangeMeasure$closeChangeMeasureDialog(e) {ULSM53:;
        this._spDialog$0.close(0);
    },
    
    applyNewMeasureSelection: function PPSMA_ChangeMeasure$applyNewMeasureSelection(e) {ULSM53:;
        this.defineMeasureOrder();
        this._spDialog$0.close(SP.UI.DialogResult.OK);
    },
    
    defineMeasureOrder: function PPSMA_ChangeMeasure$defineMeasureOrder() {ULSM53:;
        var dragContainerDiv = $get(this._dragContainerId$0);
        for (var i = 0; i < dragContainerDiv.childNodes.length; i++) {
            var measureElem = dragContainerDiv.childNodes[i];
            if (measureElem) {
                var uniqueMeasureName = measureElem.id;
                this._thinFieldList$0.reOrderItem(uniqueMeasureName, i);
            }
        }
    },
    
    handleMeasureNameLinkClick: function PPSMA_ChangeMeasure$handleMeasureNameLinkClick(e) {
    },
    
    handleMeasureNameLinkFocus: function PPSMA_ChangeMeasure$handleMeasureNameLinkFocus(e) {ULSM53:;
        this.focusOnlyMeasure(e.target.parentNode.id);
    },
    
    blurMeasureListOnTabToFieldList: function PPSMA_ChangeMeasure$blurMeasureListOnTabToFieldList(e) {ULSM53:;
        var measure = e.target.parentNode;
        if (measure) {
            if (!Sys.UI.DomElement.containsCssClass(measure, PPSMA.ChangeMeasure._classDragBoxItems$p)) {
                PPSMA.ReportsCommon.logErrorCondition('BlurMeasureListOnTabToFieldList: i\'m not so sure we have a valid measure, we have tag=' + measure.tagName + ', ID=' + measure.id + ', className=' + measure.className);
            }
            else {
                if (e.keyCode === 9 && e.shiftKey && measure.id === measure.parentNode.firstChild.id) {
                    this.focusOnlyMeasure(PPSMA.ChangeMeasure._nonexistentUniqueMeausureName$p);
                }
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('BlurMeasureListOnTabToFieldList: couldn\'t get a measure dragbox from event target ' + e.target.id);
        }
    },
    
    moveMeasureUp: function PPSMA_ChangeMeasure$moveMeasureUp(measure) {ULSM53:;
        var dragContainer = measure.parentNode;
        var measureID = measure.id;
        if (measure.previousSibling) {
            dragContainer.insertBefore(measure, measure.previousSibling);
            this.focusMeasureAndMeasureNameLink(measureID);
        }
    },
    
    moveMeasureDown: function PPSMA_ChangeMeasure$moveMeasureDown(measure) {ULSM53:;
        var dragContainer = measure.parentNode;
        var measureID = measure.id;
        if (measure.nextSibling) {
            dragContainer.insertBefore(measure.nextSibling, measure);
            this.focusMeasureAndMeasureNameLink(measureID);
        }
    },
    
    removeMeasureFromList: function PPSMA_ChangeMeasure$removeMeasureFromList(measure) {ULSM53:;
        var measureUniqueId = measure.id;
        if (this._thinFieldList$0.deSelectItem(measureUniqueId)) {
            measure.parentNode.removeChild(measure);
            Array.remove(this._measureList$p$0, measureUniqueId);
        }
    },
    
    handleRemoveMeasureLinkClick: function PPSMA_ChangeMeasure$handleRemoveMeasureLinkClick(e) {ULSM53:;
        if (this._thinFieldList$0) {
            if (!this._thinFieldList$0.get_measuresLoaded()) {
                return;
            }
        }
        var toBeRemoved = null;
        var toBeFocused = null;
        if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
            toBeRemoved = e.target.parentNode.parentNode.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a')) {
            toBeRemoved = e.target.parentNode.parentNode;
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('HandleRemoveMeasureLinkClick: unidentified tag=' + e.target.tagName + ' id=' + e.target.id);
        }
        if (toBeRemoved) {
            if (toBeRemoved.nextSibling) {
                toBeFocused = toBeRemoved.nextSibling;
            }
            else if (toBeRemoved.previousSibling) {
                toBeFocused = toBeRemoved.previousSibling;
            }
            else {
                toBeFocused = $get(PPSMA.ThinFieldList.divIDListContainer);
                if (toBeFocused) {
                    var checkBoxes = toBeFocused.getElementsByTagName('input');
                    toBeFocused = (checkBoxes && checkBoxes.length > 0) ? checkBoxes[0] : null;
                }
            }
            this.removeMeasureFromList(toBeRemoved);
            if (toBeFocused && Sys.UI.DomElement.containsCssClass(toBeFocused, PPSMA.ChangeMeasure._classDragBoxItems$p)) {
                this.focusMeasureAndMeasureNameLink(toBeFocused.id);
            }
            else if (toBeFocused && toBeFocused.className === PPSMA.Measure.classThinFieldListCheckBox) {
                try {
                    toBeFocused.focus();
                }
                catch ($$e_4) {
                    try {
                        var comboBox = $get(this._measureGroupsComboId$0);
                        if (comboBox) {
                            comboBox.focus();
                        }
                        else {
                            PPSMA.ReportsCommon.logErrorCondition('HandleRemoveMeasureLinkClick: couldn\'t find ID=\'' + this._measureGroupsComboId$0 + '\' to focus.');
                        }
                    }
                    catch ($$e_6) {
                        PPSMA.ReportsCommon.logErrorCondition('HandleRemoveMeasureLinkClick: couldn\'t focus ID=\'' + this._measureGroupsComboId$0 + '\' to focus.');
                    }
                }
            }
            else {
                PPSMA.ReportsCommon.logErrorCondition('HandleRemoveMeasureLinkClick: couldn\'t find anything to focus.');
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('HandleRemoveMeasureLinkClick: couldn\'t find anything to delete.');
        }
    },
    
    focusOnlyMeasure: function PPSMA_ChangeMeasure$focusOnlyMeasure(uniqueMeasureId) {ULSM53:;
        var dragContainer = $get(this._dragContainerId$0);
        if (!dragContainer) {
            PPSMA.ReportsCommon.logErrorCondition('FocusOnlyMeasure: can\'t find div ' + this._dragContainerId$0);
            return;
        }
        for (var i = 0; i < dragContainer.childNodes.length; i++) {
            if (uniqueMeasureId === dragContainer.childNodes[i].id) {
                this.focusMeasure(dragContainer.childNodes[i]);
            }
            else {
                this.blurMeasure(dragContainer.childNodes[i]);
            }
        }
    },
    
    focusMeasureAndMeasureNameLink: function PPSMA_ChangeMeasure$focusMeasureAndMeasureNameLink(uniqueMeasureId) {ULSM53:;
        this.focusOnlyMeasure(uniqueMeasureId);
        var measure = $get(uniqueMeasureId);
        if (measure && measure.firstChild) {
            measure.firstChild.focus();
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('FocusMeasureAndMeasureNameLink: couldn\'t focus measure and its first child for ' + uniqueMeasureId);
        }
    },
    
    handleMeasureNameDivKeydown: function PPSMA_ChangeMeasure$handleMeasureNameDivKeydown(e) {ULSM53:;
        var k = e.keyCode;
        if (k === 38 || k === 40) {
            e.stopPropagation();
            e.preventDefault();
        }
    },
    
    handleMeasureNameDivKeyup: function PPSMA_ChangeMeasure$handleMeasureNameDivKeyup(e) {ULSM53:;
        var k = e.keyCode;
        if (k === 38 || k === 40) {
            var measure = null;
            if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a') && e.target.id.startsWith(PPSMA.ChangeMeasure._idMeasureNameDivLink$p)) {
                measure = e.target.parentNode;
            }
            else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a') && (e.target.id === PPSMA.ChangeMeasure._idRemoveLink$p || e.target.id === PPSMA.ChangeMeasure._idDownLink$p || e.target.id === PPSMA.ChangeMeasure._idUpLink$p)) {
                measure = e.target.parentNode.parentNode;
            }
            else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
                measure = e.target.parentNode.parentNode.parentNode;
            }
            if (k === 38 && measure && measure.previousSibling) {
                this.focusMeasureAndMeasureNameLink(measure.previousSibling.id);
            }
            else if (k === 40 && measure && measure.nextSibling) {
                this.focusMeasureAndMeasureNameLink(measure.nextSibling.id);
            }
            e.stopPropagation();
            e.preventDefault();
        }
    },
    
    handleMoveUpLinkClick: function PPSMA_ChangeMeasure$handleMoveUpLinkClick(e) {ULSM53:;
        if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
            this.moveMeasureUp(e.target.parentNode.parentNode.parentNode);
        }
        else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a')) {
            this.moveMeasureUp(e.target.parentNode.parentNode);
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('HandleMoveUpLinkClick: unidentified tag=' + e.target.tagName + ' id=' + e.target.id);
        }
    },
    
    handleMoveDownLinkClick: function PPSMA_ChangeMeasure$handleMoveDownLinkClick(e) {ULSM53:;
        if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
            this.moveMeasureDown(e.target.parentNode.parentNode.parentNode);
        }
        else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a')) {
            this.moveMeasureDown(e.target.parentNode.parentNode);
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('HandleMoveDownLinkClick: unidentified tag=' + e.target.tagName + ' id=' + e.target.id);
        }
    },
    
    skipToMeasureList: function PPSMA_ChangeMeasure$skipToMeasureList() {ULSM53:;
        this._hideTabMoverLink$p$0();
        var dragContainer = $get(this._dragContainerId$0);
        if (dragContainer && dragContainer.hasChildNodes() && dragContainer.firstChild.hasChildNodes()) {
            if (getBrowserIs().ie55up) {
                this.focusMeasure(dragContainer.firstChild);
            }
            dragContainer.firstChild.firstChild.focus();
            if (getBrowserIs().ie55up) {
                dragContainer.firstChild.firstChild.setActive();
            }
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('SkipToMeasureList: couldn\'t find the drag container or it doesn\'t have any measure children divs.');
        }
    },
    
    _handleTabMoverLinkClick$p$0: function PPSMA_ChangeMeasure$_handleTabMoverLinkClick$p$0(e) {ULSM53:;
        this._hideTabMoverLink$p$0();
        this.skipToMeasureList();
    },
    
    handleTabMoverLinkKeydown: function PPSMA_ChangeMeasure$handleTabMoverLinkKeydown(e) {ULSM53:;
        if (e.keyCode === 9) {
            this._hideTabMoverLink$p$0();
        }
    },
    
    _hideTabMoverLink$p$0: function PPSMA_ChangeMeasure$_hideTabMoverLink$p$0() {ULSM53:;
        var skipToDiv = $get(PPSMA.ChangeMeasure._idtabMoverDiv$p);
        if (skipToDiv) {
            skipToDiv.style.display = 'none';
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('coudln\'t find div ' + PPSMA.ChangeMeasure._idtabMoverDiv$p + ' so that we could hide it');
        }
    },
    
    handleMeasureNameDivClick: function PPSMA_ChangeMeasure$handleMeasureNameDivClick(e) {ULSM53:;
        var measure;
        if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a') || PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'img')) {
            if (e.target.id === PPSMA.ChangeMeasure._idUpLink$p || e.target.id === PPSMA.ChangeMeasure._idmuLinkImage$p || e.target.id === PPSMA.ChangeMeasure._idDownLink$p || e.target.id === PPSMA.ChangeMeasure._idmdLinkImage$p || e.target.id === PPSMA.ChangeMeasure._idRemoveLink$p || e.target.id === PPSMA.ChangeMeasure._idremoveMeasureImageLink$p) {
                return;
            }
        }
        if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'div') && e.target.id === PPSMA.ChangeMeasure._idControlButtonsDiv$p) {
            measure = e.target.parentNode;
        }
        else if (PPSMA.DomElementEx.tagsMatch(e.target.tagName, 'a') && Sys.UI.DomElement.containsCssClass(e.target, PPSMA.ChangeMeasure._classDragBoxItemsLink$p)) {
            measure = e.target.parentNode;
        }
        else {
            measure = e.target;
        }
        if (measure && Sys.UI.DomElement.containsCssClass(measure, PPSMA.ChangeMeasure._classDragBoxItems$p)) {
            this.focusOnlyMeasure(measure.id);
        }
        else {
            PPSMA.ReportsCommon.logErrorCondition('couldn\'t find measure div');
        }
    },
    
    focusMeasure: function PPSMA_ChangeMeasure$focusMeasure(measure) {ULSM53:;
        this._currentSelectedMeasure$p$0 = measure;
        this.deleteUpDownRemove();
        if (!Sys.UI.DomElement.containsCssClass(measure, PPSMA.ChangeMeasure._classDragBoxItemSelected$p)) {
            Sys.UI.DomElement.addCssClass(measure, PPSMA.ChangeMeasure._classDragBoxItemSelected$p);
        }
        var buttonsDiv = document.createElement('div');
        buttonsDiv.id = PPSMA.ChangeMeasure._idControlButtonsDiv$p;
        buttonsDiv.className = PPSMA.ChangeMeasure._classDragBoxButtonsBar$p;
        var moveUpLink = document.createElement('a');
        moveUpLink.href = '#';
        moveUpLink.id = PPSMA.ChangeMeasure._idUpLink$p;
        buttonsDiv.appendChild(moveUpLink);
        $addHandler(moveUpLink, 'click', this.$$d_handleMoveUpLinkClick);
        var moveMeasureUpImage = document.createElement('img');
        moveMeasureUpImage.id = PPSMA.ChangeMeasure._idmuLinkImage$p;
        moveMeasureUpImage.src = this._olapViewContext$0.get_resourcePath() + 'pps_moveup.gif';
        moveMeasureUpImage.title = PPSMA.SR.OlapChangeMeasure_MoveUp;
        moveMeasureUpImage.alt = PPSMA.SR.OlapChangeMeasure_MoveUp;
        moveMeasureUpImage.className = PPSMA.ChangeMeasure._classDragBoxItemsUpImage$p;
        moveUpLink.appendChild(moveMeasureUpImage);
        var moveDownLink = document.createElement('a');
        moveDownLink.href = '#';
        moveDownLink.id = PPSMA.ChangeMeasure._idDownLink$p;
        buttonsDiv.appendChild(moveDownLink);
        $addHandler(moveDownLink, 'click', this.$$d_handleMoveDownLinkClick);
        var moveMeasureDownImage = document.createElement('img');
        moveMeasureDownImage.src = this._olapViewContext$0.get_resourcePath() + 'pps_movedown.gif';
        moveMeasureDownImage.id = PPSMA.ChangeMeasure._idmdLinkImage$p;
        moveMeasureDownImage.title = PPSMA.SR.OlapChangeMeasure_MoveDown;
        moveMeasureDownImage.alt = PPSMA.SR.OlapChangeMeasure_MoveDown;
        moveMeasureDownImage.className = PPSMA.ChangeMeasure._classDragBoxItemsDownImage$p;
        moveDownLink.appendChild(moveMeasureDownImage);
        var removeMeasureLink = document.createElement('a');
        removeMeasureLink.href = '#';
        removeMeasureLink.id = PPSMA.ChangeMeasure._idRemoveLink$p;
        buttonsDiv.appendChild(removeMeasureLink);
        $addHandler(removeMeasureLink, 'click', this.$$d_handleRemoveMeasureLinkClick);
        removeMeasureLink.disabled = !this._thinFieldList$0.get_measuresLoaded();
        var removeMeasureImage = document.createElement('img');
        removeMeasureImage.src = this._olapViewContext$0.get_resourcePath() + 'pps_remove.gif';
        removeMeasureImage.id = PPSMA.ChangeMeasure._idremoveMeasureImageLink$p;
        removeMeasureImage.title = PPSMA.SR.OlapChangeMeasure_Remove;
        removeMeasureImage.alt = PPSMA.SR.OlapChangeMeasure_Remove;
        removeMeasureImage.className = PPSMA.ChangeMeasure._classDragBoxItemsDeleteImage$p;
        removeMeasureImage.disabled = !this._thinFieldList$0.get_measuresLoaded();
        removeMeasureLink.appendChild(removeMeasureImage);
        measure.appendChild(buttonsDiv);
        measure.firstChild.focus();
    },
    
    blurMeasure: function PPSMA_ChangeMeasure$blurMeasure(measure) {ULSM53:;
        if (measure) {
            Sys.UI.DomElement.removeCssClass(measure, PPSMA.ChangeMeasure._classDragBoxItemSelected$p);
            while (measure.childNodes.length > 1) {
                measure.removeChild(measure.lastChild);
            }
        }
    }
}


PPSMA.FilterDialogConstants = function PPSMA_FilterDialogConstants() {
}


PPSMA.ValueFilterDialogConstants = function PPSMA_ValueFilterDialogConstants() {
}


PPSMA.TopFilterDialogConstants = function PPSMA_TopFilterDialogConstants() {
}


PPSMA.FilterDialog = function PPSMA_FilterDialog(olapViewContext, gridCtxName) {ULSM53:;
    this.$$d_wrapFocus = Function.createDelegate(this, this.wrapFocus);
    this.$$d_handleClearFilterKeyEvent = Function.createDelegate(this, this.handleClearFilterKeyEvent);
    this.$$d__topVarOptionChanged$p$0 = Function.createDelegate(this, this._topVarOptionChanged$p$0);
    this.$$d__validateTopFilterInput$p$0 = Function.createDelegate(this, this._validateTopFilterInput$p$0);
    this.$$d__formatTopFilterInput$p$0 = Function.createDelegate(this, this._formatTopFilterInput$p$0);
    this.$$d__updateValueFilterTypes$p$0 = Function.createDelegate(this, this._updateValueFilterTypes$p$0);
    this.$$d__validateValueFilterInput2$p$0 = Function.createDelegate(this, this._validateValueFilterInput2$p$0);
    this.$$d__formatValueFilterInput2$p$0 = Function.createDelegate(this, this._formatValueFilterInput2$p$0);
    this.$$d__validateValueFilterInput1$p$0 = Function.createDelegate(this, this._validateValueFilterInput1$p$0);
    this.$$d__formatValueFilterInput1$p$0 = Function.createDelegate(this, this._formatValueFilterInput1$p$0);
    this.$$d_cancel = Function.createDelegate(this, this.cancel);
    this.$$d_apply = Function.createDelegate(this, this.apply);
    this.$$d_clear = Function.createDelegate(this, this.clear);
    this.$$d__closeDialog$p$0 = Function.createDelegate(this, this._closeDialog$p$0);
    this._olapViewContext$0 = olapViewContext;
    this._currentCell$0 = null;
    this._gridCtxName$0 = gridCtxName;
    if (olapViewContext) {
        this._proxyID$0 = this._olapViewContext$0.get_ctrlProxyId();
        this._resourcePath$0 = olapViewContext.get_resourcePath();
        this._innerTargetID$0 = olapViewContext.get_innerTargetId();
    }
    this._selectedButton$0 = '0';
    this._showClearOption$0 = false;
}
PPSMA.FilterDialog._getInputValue$p = function PPSMA_FilterDialog$_getInputValue$p(input) {ULSM53:;
    if (!input) {
        return '';
    }
    var inputElement = input;
    var value = inputElement.value;
    if (!value) {
        value = '';
    }
    return value;
}
PPSMA.FilterDialog._setInputValue$p = function PPSMA_FilterDialog$_setInputValue$p(input, value) {ULSM53:;
    if (!input) {
        return;
    }
    var inputElement = input;
    inputElement.value = value;
}
PPSMA.FilterDialog._resolvePercentSymbol$p = function PPSMA_FilterDialog$_resolvePercentSymbol$p(value, ignorePercentSign) {ULSM53:;
    var newValue = value;
    if (value.length > 1 && value.endsWith('%')) {
        value = value.substring(0, value.length - 1);
        newValue = value;
        if (!ignorePercentSign) {
            try {
                var fValue = parseFloat(value);
                fValue = fValue / 100;
                newValue = fValue.toString();
            }
            catch ($$e_4) {
                newValue = value;
            }
        }
    }
    return newValue;
}
PPSMA.FilterDialog._addLabel$p = function PPSMA_FilterDialog$_addLabel$p(filterDialog, text, id, hidden, className) {ULSM53:;
    var label = document.createElement('span');
    if (id) {
        label.id = id;
    }
    label.className = ((hidden) ? PPSMA.FilterDialog.classFilterItemHidden : className);
    label.innerHTML = text;
    filterDialog.appendChild(label);
}
PPSMA.FilterDialog._removeClickHandler$p = function PPSMA_FilterDialog$_removeClickHandler$p(element) {ULSM53:;
    element.click = '';
}
PPSMA.FilterDialog.prototype = {
    toP_FILTER: 1,
    bottoM_FILTER: 4,
    valuE_EQUALS: 7,
    valuE_NOT_EQUAL: 8,
    valuE_GREATER_THAN: 9,
    valuE_GREATER_THAN_OR_EQUAL: 10,
    valuE_LESS_THAN: 11,
    valuE_LESS_THAN_OR_EQUAL: 12,
    valuE_BETWEEN: 13,
    valuE_NOT_BETWEEN: 14,
    _filterType$0: 0,
    _value1$0: null,
    _val1$0: 0,
    _value2$0: null,
    _val2$0: 100,
    _tupleIndex$0: 0,
    _tupleXML$0: null,
    _hierarchy$0: null,
    _axis$0: null,
    _levelName$0: null,
    _callbackMethod$0: null,
    _dimensionName$0: null,
    _callback$0: null,
    _selectedButton$0: null,
    _showClearOption$0: false,
    _currentCell$0: null,
    _modalDialog$p$0: null,
    _tupleOptionList$0: null,
    _resourcePath$0: null,
    _innerTargetID$0: null,
    _activeDlg$0: null,
    _olapViewContext$0: null,
    _gridCtxName$0: null,
    
    get_thousandSeparator: function PPSMA_FilterDialog$get_thousandSeparator() {ULSM53:;
        var ts = this._olapViewContext$0.get_thousandSeparator();
        return ts;
    },
    
    get_decimalPoint: function PPSMA_FilterDialog$get_decimalPoint() {ULSM53:;
        var dp = this._olapViewContext$0.get_decimalPoint();
        return dp;
    },
    
    _proxyID$0: null,
    _lastValidValue2$0: null,
    _tuple$0: null,
    
    get_currentCell: function PPSMA_FilterDialog$get_currentCell() {ULSM53:;
        return this._currentCell$0;
    },
    set_currentCell: function PPSMA_FilterDialog$set_currentCell(value) {ULSM53:;
        this._currentCell$0 = value;
        return value;
    },
    
    get_filterType: function PPSMA_FilterDialog$get_filterType() {ULSM53:;
        return this._filterType$0;
    },
    set_filterType: function PPSMA_FilterDialog$set_filterType(value) {ULSM53:;
        this._filterType$0 = value;
        return value;
    },
    
    get_value1: function PPSMA_FilterDialog$get_value1() {ULSM53:;
        return this._value1$0;
    },
    set_value1: function PPSMA_FilterDialog$set_value1(value) {ULSM53:;
        this._val1$0 = this._tryParseNumber$p$0(value);
        this._value1$0 = value;
        return value;
    },
    
    get_value2: function PPSMA_FilterDialog$get_value2() {ULSM53:;
        return this._value2$0;
    },
    set_value2: function PPSMA_FilterDialog$set_value2(value) {ULSM53:;
        this._val2$0 = this._tryParseNumber$p$0(value);
        this._value2$0 = value;
        return value;
    },
    
    get_tupleIndex: function PPSMA_FilterDialog$get_tupleIndex() {ULSM53:;
        return this._tupleIndex$0;
    },
    set_tupleIndex: function PPSMA_FilterDialog$set_tupleIndex(value) {ULSM53:;
        this._tupleIndex$0 = value;
        return value;
    },
    
    get_tupleXML: function PPSMA_FilterDialog$get_tupleXML() {ULSM53:;
        return this._tupleXML$0;
    },
    set_tupleXML: function PPSMA_FilterDialog$set_tupleXML(value) {ULSM53:;
        this._tupleXML$0 = value;
        return value;
    },
    
    get_hierarchyName: function PPSMA_FilterDialog$get_hierarchyName() {ULSM53:;
        return this._hierarchy$0;
    },
    set_hierarchyName: function PPSMA_FilterDialog$set_hierarchyName(value) {ULSM53:;
        this._hierarchy$0 = value;
        return value;
    },
    
    get_axis: function PPSMA_FilterDialog$get_axis() {ULSM53:;
        return this._axis$0;
    },
    set_axis: function PPSMA_FilterDialog$set_axis(value) {ULSM53:;
        this._axis$0 = value;
        return value;
    },
    
    get_levelName: function PPSMA_FilterDialog$get_levelName() {ULSM53:;
        return this._levelName$0;
    },
    set_levelName: function PPSMA_FilterDialog$set_levelName(value) {ULSM53:;
        this._levelName$0 = value;
        return value;
    },
    
    setCallbackMethod: function PPSMA_FilterDialog$setCallbackMethod(callback) {ULSM53:;
        this._callbackMethod$0 = callback;
    },
    
    get_dimensionName: function PPSMA_FilterDialog$get_dimensionName() {ULSM53:;
        return this._dimensionName$0;
    },
    set_dimensionName: function PPSMA_FilterDialog$set_dimensionName(value) {ULSM53:;
        this._dimensionName$0 = value;
        return value;
    },
    
    get_callback: function PPSMA_FilterDialog$get_callback() {ULSM53:;
        return this._callback$0;
    },
    set_callback: function PPSMA_FilterDialog$set_callback(value) {ULSM53:;
        this._callback$0 = value;
        return value;
    },
    
    get_selectedButton: function PPSMA_FilterDialog$get_selectedButton() {ULSM53:;
        return this._selectedButton$0;
    },
    set_selectedButton: function PPSMA_FilterDialog$set_selectedButton(value) {ULSM53:;
        this._selectedButton$0 = value;
        return value;
    },
    
    get_showClearOption: function PPSMA_FilterDialog$get_showClearOption() {ULSM53:;
        return this._showClearOption$0;
    },
    set_showClearOption: function PPSMA_FilterDialog$set_showClearOption(value) {ULSM53:;
        this._showClearOption$0 = value;
        return value;
    },
    
    get_tupleOptionList: function PPSMA_FilterDialog$get_tupleOptionList() {ULSM53:;
        return this._tupleOptionList$0;
    },
    set_tupleOptionList: function PPSMA_FilterDialog$set_tupleOptionList(value) {ULSM53:;
        this._tupleOptionList$0 = value;
        return value;
    },
    
    get_proxyID: function PPSMA_FilterDialog$get_proxyID() {ULSM53:;
        return this._proxyID$0;
    },
    set_proxyID: function PPSMA_FilterDialog$set_proxyID(value) {ULSM53:;
        this._proxyID$0 = value;
        return value;
    },
    
    get_resourcePath: function PPSMA_FilterDialog$get_resourcePath() {ULSM53:;
        return this._resourcePath$0;
    },
    set_resourcePath: function PPSMA_FilterDialog$set_resourcePath(value) {ULSM53:;
        this._resourcePath$0 = value;
        return value;
    },
    
    get_innerTargetID: function PPSMA_FilterDialog$get_innerTargetID() {ULSM53:;
        return this._innerTargetID$0;
    },
    set_innerTargetID: function PPSMA_FilterDialog$set_innerTargetID(value) {ULSM53:;
        this._innerTargetID$0 = value;
        return value;
    },
    
    _createModalDialog$p$0: function PPSMA_FilterDialog$_createModalDialog$p$0(filterID, title, html, width, height) {ULSM53:;
        var pt = PPSMA.SizeEx.getCenterXandY(width, height);
        var opts = new SP.UI.DialogOptions();
        opts.height = height;
        opts.width = width;
        opts.title = title;
        opts.showMaximized = false;
        opts.allowMaximize = false;
        opts.html = html;
        opts.x = pt.x;
        opts.y = pt.y;
        opts.dialogReturnValueCallback = this.$$d__closeDialog$p$0;
        this._modalDialog$p$0 = SP.UI.ModalDialog.showModalDialog(opts);
        this.focusFirstElement();
        this._addFilterDomEventHandlers$p$0(filterID);
    },
    
    focusFirstElement: function PPSMA_FilterDialog$focusFirstElement() {ULSM53:;
        var elm = $get(this._proxyID$0 + ((this._filterType$0 < 7) ? PPSMA.FilterDialog.idTopFilterOptionsDropdown : PPSMA.FilterDialog.idValueFilterTupleDropdown));
        if (elm) {
            elm.focus();
        }
    },
    
    _closeDialog$p$0: function PPSMA_FilterDialog$_closeDialog$p$0(result, param) {ULSM53:;
        if (result === SP.UI.DialogResult.OK) {
            if (this._callbackMethod$0) {
                this._callbackMethod$0();
            }
        }
    },
    
    _addFilterDomEventHandlers$p$0: function PPSMA_FilterDialog$_addFilterDomEventHandlers$p$0(filterID) {ULSM53:;
        var spanClear = $get(this._proxyID$0 + PPSMA.FilterDialog.idClearFilterBtn + filterID);
        $addHandler(spanClear, 'click', this.$$d_clear);
        var apply = $get(this._proxyID$0 + PPSMA.FilterDialog.idFilterApply + filterID);
        $addHandler(apply, 'click', this.$$d_apply);
        var cancel = $get(this._proxyID$0 + PPSMA.FilterDialog.idFilterCancel + filterID);
        $addHandler(cancel, 'click', this.$$d_cancel);
        var inputIndex = ((filterID === PPSMA.FilterDialog.idValueFilterDialog) ? 1 : 2);
        switch (inputIndex) {
            case 1:
                var filterInput = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1);
                $addHandler(filterInput, 'change', this.$$d__formatValueFilterInput1$p$0);
                $addHandler(filterInput, 'keyup', this.$$d__validateValueFilterInput1$p$0);
                var filterInput2 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2);
                $addHandler(filterInput2, 'change', this.$$d__formatValueFilterInput2$p$0);
                $addHandler(filterInput2, 'keyup', this.$$d__validateValueFilterInput2$p$0);
                var options = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterOptionsDropdown);
                $addHandler(options, 'change', this.$$d__updateValueFilterTypes$p$0);
                break;
            case 2:
                var topInput = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInput);
                $addHandler(topInput, 'change', this.$$d__formatTopFilterInput$p$0);
                $addHandler(topInput, 'keyup', this.$$d__validateTopFilterInput$p$0);
                var filterTopVar = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopVarOptionsDropdown);
                $addHandler(filterTopVar, 'change', this.$$d__topVarOptionChanged$p$0);
                break;
        }
    },
    
    showValueFilterDlg: function PPSMA_FilterDialog$showValueFilterDlg() {ULSM53:;
        this._lastValidValue2$0 = this._value2$0;
        if (!this._levelName$0 || this._levelName$0 === '') {
            this._levelName$0 = this._getFilterByInfo$p$0();
        }
        this._activeDlg$0 = this._getValueFilterDlg$p$0();
        if (!this._activeDlg$0) {
            this._activeDlg$0 = this._createValueFilterDlg$p$0();
        }
        this._activeDlg$0.style.visibility = 'visible';
        var parentDiv = document.createElement('div');
        parentDiv.className = PPSMA.FilterDialog.classFilterMain;
        parentDiv.appendChild(this._activeDlg$0);
        var title = PPSMA.SR.OlapFilter_ValueFilterHeader + ' ' + this._levelName$0;
        this._createModalDialog$p$0(PPSMA.FilterDialog.idValueFilterDialog, title, parentDiv, PPSMA.ScriptConstants.analyticReportsValueFilterDialogWidth, PPSMA.ScriptConstants.analyticReportsValueFilterDialogHeight);
    },
    
    showTopFilterDlg: function PPSMA_FilterDialog$showTopFilterDlg() {ULSM53:;
        if (!this._levelName$0 || this._levelName$0 === '') {
            this._levelName$0 = this._getFilterByInfo$p$0();
        }
        this._activeDlg$0 = this._getTopFilterDlg$p$0();
        if (!this._activeDlg$0) {
            this._activeDlg$0 = this._createTopFilterDlg$p$0();
        }
        this._activeDlg$0.style.visibility = 'visible';
        var parentDiv = document.createElement('div');
        parentDiv.className = PPSMA.FilterDialog.classFilterMain;
        parentDiv.appendChild(this._activeDlg$0);
        var title = PPSMA.SR.OlapFilter_TopFilterHeader + ' ' + this._levelName$0;
        this._createModalDialog$p$0(PPSMA.FilterDialog.idTopFilterDialog, title, parentDiv, PPSMA.ScriptConstants.analyticReportsTopFilterDialogWidth, PPSMA.ScriptConstants.analyticReportsTopFilterDialogHeight);
    },
    
    _tryParseNumber$p$0: function PPSMA_FilterDialog$_tryParseNumber$p$0(value) {ULSM53:;
        if (value.indexOf(this.get_thousandSeparator()) >= 0 && value.indexOf(this.get_decimalPoint()) >= 0) {
            value = value.split(this.get_thousandSeparator()).join('');
            value = value.split(this.get_decimalPoint()).join('.');
        }
        else if (value.indexOf(this.get_thousandSeparator()) >= 0 && !(value.indexOf(this.get_decimalPoint()) >= 0)) {
            value = value.split(this.get_thousandSeparator()).join('');
        }
        else if (!(value.indexOf(this.get_thousandSeparator()) >= 0) && value.indexOf(this.get_decimalPoint()) >= 0) {
            value = value.split(this.get_decimalPoint()).join('.');
        }
        var dval = Number.parseInvariant(value);
        if (!isNaN(dval)) {
            return dval;
        }
        else {
            return 0;
        }
    },
    
    loadFilterDialog: function PPSMA_FilterDialog$loadFilterDialog(sFilterTypeIndex, tuple, level, hierarchy, value1, value2, lastCell, axis) {ULSM53:;
        this._filterType$0 = parseInt(sFilterTypeIndex);
        var valueFilter = (this._filterType$0 < 7) ? false : true;
        this._hierarchy$0 = hierarchy;
        this._currentCell$0 = lastCell;
        this._levelName$0 = level;
        this._axis$0 = axis;
        this._value1$0 = value1;
        this._val1$0 = this._tryParseNumber$p$0(value1);
        this._value2$0 = value2;
        this._val2$0 = this._tryParseNumber$p$0(value2);
        this._showClearOption$0 = true;
        var filterHierarchy = this._getBackgroundMeasure$p$0();
        this._tuple$0 = tuple;
        var tuplesList = this._getTuplesList$p$0();
        this._tupleIndex$0 = 0;
        for (var i = 0; i < tuplesList.length; i++) {
            var tupleName = tuplesList[i] + filterHierarchy;
            if (!tupleName.indexOf(tuple)) {
                this._tupleIndex$0 = i;
                break;
            }
        }
        if (valueFilter) {
            this.showValueFilterDlg();
        }
        else {
            this.showTopFilterDlg();
        }
    },
    
    _getValueFilterDlg$p$0: function PPSMA_FilterDialog$_getValueFilterDlg$p$0() {ULSM53:;
        var valueFilterDlg = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterDialog);
        if (!valueFilterDlg) {
            return null;
        }
        this._setFilterByLevelDisplay$p$0(PPSMA.SR.OlapFilter_ValueFilterHeader + '&nbsp;' + this._levelName$0);
        this._setFilterOptionsDropdown$p$0(PPSMA.FilterDialog.idValueFilterOptionsDropdown);
        this._setTupleDropdown$p$0(PPSMA.FilterDialog.idValueFilterTupleDropdown);
        this._setInputValue1$p$0(PPSMA.FilterDialog.idValueFilterInput1);
        this._setAndLabel$p$0(PPSMA.FilterDialog.idValueFilterAndLabel);
        this._setInputValue2$p$0(PPSMA.FilterDialog.idValueFilterInput2);
        this._setClearButton$p$0(PPSMA.FilterDialog.idValueFilterDialog);
        return valueFilterDlg;
    },
    
    _createValueFilterDlg$p$0: function PPSMA_FilterDialog$_createValueFilterDlg$p$0() {ULSM53:;
        var contentSection = this._createValueFilterContents$p$0(PPSMA.SR.OlapFilter_ValueFilterText);
        var mainDlg = this._createMainDlg$p$0(PPSMA.FilterDialog.idValueFilterDialog, contentSection, PPSMA.ScriptConstants.analyticReportsValueFilterDialogWidth, PPSMA.ScriptConstants.analyticReportsValueFilterDialogHeight);
        return mainDlg;
    },
    
    _createValueFilterContents$p$0: function PPSMA_FilterDialog$_createValueFilterContents$p$0(label) {ULSM53:;
        var filterContents = this._createFilterContents$p$0(label);
        filterContents.appendChild(this._createValueFilterInputFieldsDiv$p$0());
        filterContents.appendChild(this._createNumericValidationWarning$p$0(PPSMA.FilterDialog.idValueFilterDialog, PPSMA.FilterDialog.classNumericValidationWarningDiv));
        return filterContents;
    },
    
    _createValueFilterInputFieldsDiv$p$0: function PPSMA_FilterDialog$_createValueFilterInputFieldsDiv$p$0() {ULSM53:;
        var id = this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInputDiv;
        var inputFields = $get(id);
        if (!inputFields) {
            inputFields = document.createElement('div');
            inputFields.id = id;
            inputFields.className = PPSMA.FilterDialog.classVFilterInputDiv;
            var tupleLine = document.createElement('div');
            this._addTupleDropdown$p$0(tupleLine, this._proxyID$0 + PPSMA.FilterDialog.idValueFilterTupleDropdown, this._tupleIndex$0, PPSMA.ValueFilterDialogConstants.tupleOptionsTI);
            inputFields.appendChild(tupleLine);
            var inputLine = document.createElement('div');
            inputLine.className = PPSMA.FilterDialog.classValueFilterInputParent;
            this._addValueFilterOptions$p$0(inputLine, PPSMA.ValueFilterDialogConstants.filterOptionsTI);
            var inputsAndLabelSizer = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInputsAndLabelWrapper);
            if (isNullOrEmpty(inputsAndLabelSizer)) {
                inputsAndLabelSizer = document.createElement('div');
                inputsAndLabelSizer.id = this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInputsAndLabelWrapper;
                inputsAndLabelSizer.className = PPSMA.FilterDialog.classValueFilterInputSizer;
                inputLine.appendChild(inputsAndLabelSizer);
            }
            this._addInput$p$0(inputsAndLabelSizer, this._filterType$0, this._val1$0, this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1, (this._filterType$0 < this.valuE_BETWEEN) ? PPSMA.FilterDialog.classValueFilterInput : PPSMA.FilterDialog.classFilterInputForBetween, true, PPSMA.ValueFilterDialogConstants.input1TI);
            PPSMA.FilterDialog._addLabel$p(inputsAndLabelSizer, PPSMA.SR.OlapFilter_AndLabel, this._proxyID$0 + PPSMA.FilterDialog.idValueFilterAndLabel, (this._filterType$0 < this.valuE_BETWEEN) ? true : false, PPSMA.FilterDialog.classFilterLabelForBetween);
            this._addInput$p$0(inputsAndLabelSizer, this._filterType$0, this._val2$0, this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2, PPSMA.FilterDialog.classFilterInputForBetween + ' ' + PPSMA.FilterDialog.classFilterInputForBetween2, (this._filterType$0 < this.valuE_BETWEEN) ? false : true, PPSMA.ValueFilterDialogConstants.input2TI);
            inputFields.appendChild(inputLine);
        }
        return inputFields;
    },
    
    _validateValueFilterInput1$p$0: function PPSMA_FilterDialog$_validateValueFilterInput1$p$0(e) {ULSM53:;
        if (this._isTupleListEmpty$p$0()) {
            this._updateApplyButton$p$0(false);
            return;
        }
        var input = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1);
        var valid = this._numericValidation$p$0(input, 1, true, true, this.get_thousandSeparator(), this.get_decimalPoint(), 0, 0, false, String.format(PPSMA.SR.OlapFilter_Number, '0'), PPSMA.FilterDialog.idValueFilterDialog);
        if (valid) {
            var input2 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2);
            var value = '';
            if (input2) {
                value = PPSMA.FilterDialog._getInputValue$p(input2);
            }
            var errorCode = this._isValidNumber$p$0(value, true, true, this.get_thousandSeparator());
            if (errorCode > 0) {
                valid = false;
            }
        }
        this._updateApplyButton$p$0(valid);
    },
    
    _validateValueFilterInput2$p$0: function PPSMA_FilterDialog$_validateValueFilterInput2$p$0(e) {ULSM53:;
        if (this._isTupleListEmpty$p$0()) {
            this._updateApplyButton$p$0(false);
            return;
        }
        var input = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2);
        var valid = this._numericValidation$p$0(input, 2, true, true, this.get_thousandSeparator(), this.get_decimalPoint(), 0, 0, false, String.format(PPSMA.SR.OlapFilter_Number, '0'), PPSMA.FilterDialog.idValueFilterDialog);
        if (valid) {
            this._lastValidValue2$0 = PPSMA.FilterDialog._getInputValue$p(input);
            var input1 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1);
            var value = '';
            if (input1) {
                value = PPSMA.FilterDialog._getInputValue$p(input1);
            }
            var errorCode = this._isValidNumber$p$0(value, true, true, this.get_thousandSeparator());
            if (errorCode > 0) {
                valid = false;
            }
        }
        this._updateApplyButton$p$0(valid);
    },
    
    _formatValueFilterInput1$p$0: function PPSMA_FilterDialog$_formatValueFilterInput1$p$0(e) {ULSM53:;
        this._validateValueFilterInput1$p$0(e);
        this._tryFormatInputValue$p$0($get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1), false);
    },
    
    _formatValueFilterInput2$p$0: function PPSMA_FilterDialog$_formatValueFilterInput2$p$0(e) {ULSM53:;
        this._validateValueFilterInput2$p$0(e);
        this._tryFormatInputValue$p$0($get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2), false);
    },
    
    _tryFormatInputValue$p$0: function PPSMA_FilterDialog$_tryFormatInputValue$p$0(inputElement, noDecimal) {ULSM53:;
        if (!inputElement) {
            return;
        }
        var sval = inputElement.value;
        var dval = this._tryParseNumber$p$0(sval);
        if (!isNaN(dval)) {
            inputElement.value = this.getFormattedStringFromInvariantNumber(dval, noDecimal);
        }
    },
    
    _addValueFilterOptions$p$0: function PPSMA_FilterDialog$_addValueFilterOptions$p$0(filterDialog, tabindex) {ULSM53:;
        var options = document.createElement('select');
        var id = this._proxyID$0 + PPSMA.FilterDialog.idValueFilterOptionsDropdown;
        options.id = id;
        if (tabindex !== -1) {
            options.setAttribute('tabindex', tabindex);
        }
        options.className = PPSMA.FilterDialog.classFilterValueOptionsDropdown;
        var useDefault = false;
        if (this._filterType$0 < 7 || this._filterType$0 > 14) {
            useDefault = true;
        }
        var optionEq = this._createFilterOption$p$0(this.valuE_EQUALS.toString(), PPSMA.SR.OlapFilter_Equals, this._filterType$0 === this.valuE_EQUALS);
        options.appendChild(optionEq);
        var optionNEq = this._createFilterOption$p$0(this.valuE_NOT_EQUAL.toString(), PPSMA.SR.OlapFilter_NotEqual, this._filterType$0 === this.valuE_NOT_EQUAL);
        options.appendChild(optionNEq);
        var optionGT = this._createFilterOption$p$0(this.valuE_GREATER_THAN.toString(), PPSMA.SR.OlapFilter_GreaterThan, useDefault || this._filterType$0 === this.valuE_GREATER_THAN);
        options.appendChild(optionGT);
        var optionGTE = this._createFilterOption$p$0(this.valuE_GREATER_THAN_OR_EQUAL.toString(), PPSMA.SR.OlapFilter_GreaterThanOrEqual, this._filterType$0 === this.valuE_GREATER_THAN_OR_EQUAL);
        options.appendChild(optionGTE);
        var optionLT = this._createFilterOption$p$0(this.valuE_LESS_THAN.toString(), PPSMA.SR.OlapFilter_LessThan, this._filterType$0 === this.valuE_LESS_THAN);
        options.appendChild(optionLT);
        var optionLTE = this._createFilterOption$p$0(this.valuE_LESS_THAN_OR_EQUAL.toString(), PPSMA.SR.OlapFilter_LessThanOrEqual, this._filterType$0 === this.valuE_LESS_THAN_OR_EQUAL);
        options.appendChild(optionLTE);
        var optionB = this._createFilterOption$p$0(this.valuE_BETWEEN.toString(), PPSMA.SR.OlapFilter_Between, this._filterType$0 === this.valuE_BETWEEN);
        options.appendChild(optionB);
        var optionNB = this._createFilterOption$p$0(this.valuE_NOT_BETWEEN.toString(), PPSMA.SR.OlapFilter_NotBetween, this._filterType$0 === this.valuE_NOT_BETWEEN);
        options.appendChild(optionNB);
        filterDialog.appendChild(options);
    },
    
    _updateValueFilterTypes$p$0: function PPSMA_FilterDialog$_updateValueFilterTypes$p$0(e) {ULSM53:;
        var filters = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterOptionsDropdown);
        if (filters) {
            var filterSelect = filters;
            var options = filters.getElementsByTagName('option');
            var sFilterType = PPSMA.FilterDialog._getInputValue$p(options[filterSelect.selectedIndex]);
            var iFilterType = parseInt(sFilterType);
            var value1 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput1);
            var value2 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2);
            var label = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterAndLabel);
            if (iFilterType === this.valuE_BETWEEN || iFilterType === this.valuE_NOT_BETWEEN) {
                value1.className = PPSMA.FilterDialog.classFilterInputForBetween;
                label.className = PPSMA.FilterDialog.classFilterLabelForBetween;
                value2.className = PPSMA.FilterDialog.classFilterInputForBetween + ' ' + PPSMA.FilterDialog.classFilterInputForBetween2;
            }
            else {
                value1.className = PPSMA.FilterDialog.classValueFilterInput;
                label.className = PPSMA.FilterDialog.classFilterItemHidden;
                value2.className = PPSMA.FilterDialog.classFilterItemHidden;
                var valid = this._numericValidation$p$0(value2, 2, true, true, this.get_thousandSeparator(), this.get_decimalPoint(), 0, 0, false, String.format(PPSMA.SR.OlapFilter_Number, '0'), PPSMA.FilterDialog.idValueFilterDialog);
                if (!valid) {
                    this._value2$0 = this._lastValidValue2$0;
                    PPSMA.FilterDialog._setInputValue$p(value2, this._value2$0);
                    this._validateValueFilterInput2$p$0(null);
                }
            }
        }
    },
    
    _createMainDlg$p$0: function PPSMA_FilterDialog$_createMainDlg$p$0(filterID, contentSection, width, height) {ULSM53:;
        var mainDialog = this._createParentBorder$p$0(filterID, width, height);
        mainDialog.appendChild(contentSection);
        var footerDiv = this._createFooterSection$p$0(filterID);
        mainDialog.appendChild(footerDiv);
        document.body.appendChild(mainDialog);
        return mainDialog;
    },
    
    _createFilterContents$p$0: function PPSMA_FilterDialog$_createFilterContents$p$0(contentLabel) {ULSM53:;
        var contentDiv = document.createElement('div');
        contentDiv.id = this._proxyID$0 + PPSMA.FilterDialog.idFilterDialogContents;
        contentDiv.className = PPSMA.FilterDialog.classFilterDialogContents;
        var textMsgDiv = document.createElement('div');
        textMsgDiv.className = PPSMA.FilterDialog.classFilterLabelDiv;
        var textMsg = document.createElement('span');
        textMsg.className = PPSMA.FilterDialog.classFilterLabel;
        textMsg.innerHTML = contentLabel;
        textMsgDiv.appendChild(textMsg);
        contentDiv.appendChild(textMsgDiv);
        return contentDiv;
    },
    
    _createParentBorder$p$0: function PPSMA_FilterDialog$_createParentBorder$p$0(filterID, width, height) {ULSM53:;
        var mainDialog = document.createElement('div');
        mainDialog.id = this._proxyID$0 + filterID;
        mainDialog.className = PPSMA.FilterDialog.classFilterParentBorder;
        mainDialog.style.height = height + 'px';
        mainDialog.style.width = width + 'px';
        mainDialog.style.overflow = 'hidden';
        return mainDialog;
    },
    
    _isTupleListEmpty$p$0: function PPSMA_FilterDialog$_isTupleListEmpty$p$0() {ULSM53:;
        if (this._tupleOptionList$0 && this._tupleOptionList$0 !== '') {
            return false;
        }
        var isEmpty = false;
        var results = this._olapViewContext$0.get_results();
        var members = ((this._axis$0 === '1') ? results.get_rowMembers() : results.get_columnMembers());
        if (!members || !members.length) {
            isEmpty = true;
        }
        return isEmpty;
    },
    
    handleClearFilterKeyEvent: function PPSMA_FilterDialog$handleClearFilterKeyEvent(e) {ULSM53:;
        var keyPressed = e.keyCode;
        var enterKey = 13;
        switch (keyPressed) {
            case enterKey:
                this.clear(e);
                break;
        }
    },
    
    _createFooterSection$p$0: function PPSMA_FilterDialog$_createFooterSection$p$0(filterID) {ULSM53:;
        var footerDiv = document.createElement('div');
        footerDiv.id = this._proxyID$0 + PPSMA.FilterDialog.idFilterFooter;
        footerDiv.className = PPSMA.FilterDialog.classFilterFooter;
        var spanClear = document.createElement('span');
        spanClear.id = this._proxyID$0 + PPSMA.FilterDialog.idClearFilterBtn + filterID;
        spanClear.className = ((this._showClearOption$0) ? PPSMA.FilterDialog.classFilterClear : PPSMA.FilterDialog.classFilterItemHidden);
        var clear = document.createElement('a');
        clear.setAttribute('tabindex', PPSMA.FilterDialogConstants.clearButtonTI);
        clear.setAttribute('href', 'javascript:;');
        $addHandler(clear, 'keyup', this.$$d_handleClearFilterKeyEvent);
        var clearImage = document.createElement('img');
        clearImage.id = this._proxyID$0 + PPSMA.FilterDialog.idClearFilterBtnImage;
        clearImage.className = PPSMA.FilterDialog.classClearFilterImage;
        clearImage.setAttribute('src', this._resourcePath$0 + 'ClearFilter.gif');
        clear.appendChild(clearImage);
        var clearText = document.createElement('span');
        clearText.id = this._proxyID$0 + PPSMA.FilterDialog.idClearFilterText;
        clearText.innerHTML = PPSMA.SR.OlapFilter_Clear;
        clear.appendChild(clearText);
        spanClear.appendChild(clear);
        footerDiv.appendChild(spanClear);
        var apply = document.createElement('input');
        apply.id = this._proxyID$0 + PPSMA.FilterDialog.idFilterApply + filterID;
        Sys.UI.DomElement.addCssClass(apply, PPSMA.FilterDialog.classFilterApplyCustom);
        apply.setAttribute('type', 'button');
        apply.setAttribute('value', PPSMA.SR.OlapChangeMeasure_Ok);
        apply.setAttribute('tabindex', PPSMA.FilterDialogConstants.applyButtonTI);
        if (this._isTupleListEmpty$p$0()) {
            apply.disabled = true;
        }
        else {
            apply.disabled = false;
        }
        footerDiv.appendChild(apply);
        var cancel = document.createElement('input');
        cancel.id = this._proxyID$0 + PPSMA.FilterDialog.idFilterCancel + filterID;
        Sys.UI.DomElement.addCssClass(cancel, PPSMA.FilterDialog.classFilterCancelCustom);
        cancel.setAttribute('type', 'button');
        cancel.setAttribute('value', PPSMA.SR.OlapChangeMeasure_Cancel);
        cancel.setAttribute('onkeydown', this._gridCtxName$0 + '._valueFilter.handleTabEvent(event)');
        cancel.setAttribute('tabindex', PPSMA.FilterDialogConstants.cancelButtonTI);
        footerDiv.appendChild(cancel);
        var wrapFocus = document.createElement('a');
        wrapFocus.setAttribute('href', 'javascript:;');
        wrapFocus.setAttribute('tabindex', PPSMA.FilterDialogConstants.wrapFocusTI);
        Sys.UI.DomElement.addCssClass(wrapFocus, PPSMA.FilterDialog.classFilterWrapFocusLink);
        $addHandler(wrapFocus, 'focus', this.$$d_wrapFocus);
        footerDiv.appendChild(wrapFocus);
        return footerDiv;
    },
    
    wrapFocus: function PPSMA_FilterDialog$wrapFocus(e) {ULSM53:;
        this.focusFirstElement();
    },
    
    _getFilterByInfo$p$0: function PPSMA_FilterDialog$_getFilterByInfo$p$0() {ULSM53:;
        if (!this._olapViewContext$0) {
            return '';
        }
        var hiers = ((this._axis$0 === '1') ? this._olapViewContext$0.get_results().get_columnHierarchies() : this._olapViewContext$0.get_results().get_rowHierarchies());
        var innerHierPos = hiers.length - 1;
        var rh = hiers[innerHierPos];
        this._dimensionName$0 = rh.get_dimension();
        this._dimensionName$0 = this._dimensionName$0.replace('[', '');
        this._dimensionName$0 = this._dimensionName$0.replace(']', '');
        var levelName = rh.get_highestLevelName();
        levelName = levelName.substring(levelName.lastIndexOf('.') + 1, levelName.length);
        levelName = levelName.replace('[', '');
        levelName = levelName.replace(']', '');
        if ((levelName.toLowerCase().indexOf(this._dimensionName$0.toLowerCase())) < 0) {
            levelName = this._dimensionName$0 + ' ' + levelName;
        }
        return levelName;
    },
    
    _createFilterOption$p$0: function PPSMA_FilterDialog$_createFilterOption$p$0(value, displayText, selected) {ULSM53:;
        var option = document.createElement('option');
        option.setAttribute('value', value);
        if (selected) {
            option.setAttribute('selected', 'selected');
        }
        option.setAttribute('title', displayText);
        option.innerHTML = displayText;
        return option;
    },
    
    getFormattedStringFromInvariantNumber: function PPSMA_FilterDialog$getFormattedStringFromInvariantNumber(value, noDecimal) {ULSM53:;
        var s = value.toString();
        var parts = s.split('.');
        var wholePart = '0';
        var fractionPart = '0';
        if (parts.length > 0) {
            wholePart = parts[0];
            if (parts.length > 1) {
                fractionPart = parts[1];
            }
        }
        var rgx = new RegExp('(\\d+)(\\d{3})');
        while (rgx.test(wholePart)) {
            wholePart = wholePart.replace(rgx, '$1' + this.get_thousandSeparator() + '$2');
        }
        s = wholePart + ((noDecimal) ? '' : (this.get_decimalPoint() + fractionPart));
        return s;
    },
    
    _setFilterOptionsDropdown$p$0: function PPSMA_FilterDialog$_setFilterOptionsDropdown$p$0(id) {ULSM53:;
        var filters = $get(this._proxyID$0 + id);
        filters.setAttribute('tabindex', PPSMA.ValueFilterDialogConstants.filterOptionsTI);
        if (filters) {
            var options = filters.getElementsByTagName('option');
            for (var i = 0; i < options.length; i++) {
                var sval = PPSMA.FilterDialog._getInputValue$p(options[i]);
                var val = parseInt(sval);
                if (val === this._filterType$0) {
                    options[i].setAttribute('selected', 'selected');
                }
                else {
                    options[i].setAttribute('selected', '');
                }
            }
        }
    },
    
    _setTopVarFilterOptionsDropdown$p$0: function PPSMA_FilterDialog$_setTopVarFilterOptionsDropdown$p$0(id) {ULSM53:;
        if (this._filterType$0 > 6) {
            return;
        }
        var filters = $get(this._proxyID$0 + id);
        if (filters) {
            var options = filters.getElementsByTagName('option');
            var varType = 0;
            if (this._filterType$0 === 2 || this._filterType$0 === 5) {
                varType = 1;
            }
            else if (this._filterType$0 === 3 || this._filterType$0 === 6) {
                varType = 2;
            }
            for (var i = 0; i < options.length; i++) {
                var sval = PPSMA.FilterDialog._getInputValue$p(options[i]);
                var val = parseInt(sval);
                if (val === varType) {
                    options[i].setAttribute('selected', 'selected');
                }
                else {
                    options[i].setAttribute('selected', '');
                }
            }
        }
    },
    
    _setAndLabel$p$0: function PPSMA_FilterDialog$_setAndLabel$p$0(id) {ULSM53:;
        if (!this._proxyID$0) {
            return;
        }
        var label = $get(this._proxyID$0 + id);
        if (!label) {
            return;
        }
        if (this._filterType$0 >= this.valuE_EQUALS && this._filterType$0 <= this.valuE_LESS_THAN_OR_EQUAL) {
            label.className = PPSMA.FilterDialog.classFilterItemHidden;
        }
        else if (this._filterType$0 > this.valuE_LESS_THAN_OR_EQUAL) {
            label.className = PPSMA.FilterDialog.classFilterLabelForBetween;
        }
    },
    
    _getBackgroundMeasure$p$0: function PPSMA_FilterDialog$_getBackgroundMeasure$p$0() {ULSM53:;
        var filterHierarchy = '';
        if (this._olapViewContext$0.get_results()) {
            var filterMembers = this._olapViewContext$0.get_results().get_filterMembers();
            if (filterMembers) {
                for (var i = 0; i < filterMembers.length; i++) {
                    var filterHier = filterMembers[i];
                    if (filterHier.get_name().startsWith('[Measures]')) {
                        filterHierarchy = filterHierarchy + ', ' + filterHier.get_caption();
                    }
                }
            }
        }
        return filterHierarchy;
    },
    
    _setTupleDropdown$p$0: function PPSMA_FilterDialog$_setTupleDropdown$p$0(id) {ULSM53:;
        var filterTuples = $get(this._proxyID$0 + id);
        filterTuples.setAttribute('tabindex', PPSMA.ValueFilterDialogConstants.tupleOptionsTI);
        if (filterTuples) {
            var filterHierarchy = '';
            if (!this._tupleOptionList$0 || this._tupleOptionList$0 === '') {
                var tupleOptions = filterTuples.getElementsByTagName('option');
                while (true) {
                    if (!tupleOptions.length) {
                        break;
                    }
                    filterTuples.removeChild(tupleOptions[0]);
                }
                filterHierarchy = this._getBackgroundMeasure$p$0();
            }
            var tuplesList = this._getTuplesList$p$0();
            var optionArray = new Array(tuplesList.length);
            for (var i = 0; i < tuplesList.length; i++) {
                var tupleName = tuplesList[i];
                var selected = false;
                if (i === this._tupleIndex$0) {
                    selected = true;
                }
                var stype = i.toString();
                optionArray[i] = this._createFilterOption$p$0(stype, tupleName + filterHierarchy, selected);
                filterTuples.appendChild(optionArray[i]);
            }
        }
    },
    
    _setInputValue1$p$0: function PPSMA_FilterDialog$_setInputValue1$p$0(id) {ULSM53:;
        var input = $get(this._proxyID$0 + id);
        if (this._filterType$0 >= this.valuE_EQUALS && this._filterType$0 <= this.valuE_LESS_THAN_OR_EQUAL) {
            input.className = PPSMA.FilterDialog.classValueFilterInput;
        }
        else if (this._filterType$0 > this.valuE_LESS_THAN_OR_EQUAL) {
            input.className = PPSMA.FilterDialog.classFilterInputForBetween;
        }
        input.value = this.getFormattedStringFromInvariantNumber(this._val1$0, (this._filterType$0 === this.toP_FILTER || this._filterType$0 === this.bottoM_FILTER));
    },
    
    _setFilterByLevelDisplay$p$0: function PPSMA_FilterDialog$_setFilterByLevelDisplay$p$0(levelName) {ULSM53:;
        var label = $get(this._proxyID$0 + PPSMA.FilterDialog.idFilterByLevelDisplay);
        if (label) {
            label.innerHTML = levelName;
        }
    },
    
    _setInputValue2$p$0: function PPSMA_FilterDialog$_setInputValue2$p$0(id) {ULSM53:;
        var input = $get(this._proxyID$0 + id);
        if (this._filterType$0 >= this.valuE_EQUALS && this._filterType$0 <= this.valuE_LESS_THAN_OR_EQUAL) {
            input.className = PPSMA.FilterDialog.classFilterItemHidden;
        }
        else if (this._filterType$0 > this.valuE_LESS_THAN_OR_EQUAL) {
            input.className = PPSMA.FilterDialog.classFilterInputForBetween + ' ' + PPSMA.FilterDialog.classFilterInputForBetween2;
        }
        input.value = this.getFormattedStringFromInvariantNumber(this._val2$0, false);
    },
    
    _setClearButton$p$0: function PPSMA_FilterDialog$_setClearButton$p$0(filterID) {ULSM53:;
        var clear = $get(this._proxyID$0 + PPSMA.FilterDialog.idClearFilterBtn + filterID);
        if (clear) {
            if (this._showClearOption$0) {
                clear.className = PPSMA.FilterDialog.classFilterClear;
            }
            else {
                clear.className = PPSMA.FilterDialog.classFilterItemHidden;
            }
        }
    },
    
    _addInput$p$0: function PPSMA_FilterDialog$_addInput$p$0(filterDialog, filterTypeIndex, value, id, className, visible, tabindex) {ULSM53:;
        var filterInput = document.createElement('input');
        filterInput.id = id;
        filterInput.className = ((visible) ? className : PPSMA.FilterDialog.classFilterItemHidden);
        filterInput.type = 'text';
        filterInput.setAttribute('maxlength', 100);
        filterInput.value = this.getFormattedStringFromInvariantNumber(value, (filterTypeIndex === 1 || filterTypeIndex === 4));
        if (tabindex !== -1) {
            filterInput.setAttribute('tabindex', tabindex);
        }
        filterDialog.appendChild(filterInput);
    },
    
    _createNumericValidationWarning$p$0: function PPSMA_FilterDialog$_createNumericValidationWarning$p$0(forParentId, warningLineDivClass) {ULSM53:;
        var id = this._proxyID$0 + PPSMA.FilterDialog.idNumericValidationWarning + forParentId;
        var warningLineDiv = $get(id);
        if (warningLineDiv) {
            return warningLineDiv;
        }
        warningLineDiv = document.createElement('div');
        warningLineDiv.id = id;
        warningLineDiv.className = warningLineDivClass;
        var msgDiv1 = document.createElement('div');
        Sys.UI.DomElement.addCssClass(msgDiv1, PPSMA.FilterDialog.classFilterWarningLabelDiv1);
        Sys.UI.DomElement.addCssClass(msgDiv1, PPSMA.FilterDialog.classFilterWarningOff);
        var span1 = document.createElement('span');
        Sys.UI.DomElement.addCssClass(span1, PPSMA.FilterDialog.msFormValidation);
        Sys.UI.DomElement.addCssClass(span1, PPSMA.FilterDialog.classFilterWarningLabel);
        msgDiv1.appendChild(span1);
        warningLineDiv.appendChild(msgDiv1);
        var msgDiv2 = document.createElement('div');
        Sys.UI.DomElement.addCssClass(msgDiv1, PPSMA.FilterDialog.classFilterWarningLabelDiv2);
        Sys.UI.DomElement.addCssClass(msgDiv1, PPSMA.FilterDialog.classFilterWarningOff);
        var span2 = document.createElement('span');
        Sys.UI.DomElement.addCssClass(span2, PPSMA.FilterDialog.msFormValidation);
        Sys.UI.DomElement.addCssClass(span2, PPSMA.FilterDialog.classFilterWarningLabel);
        msgDiv2.appendChild(span2);
        warningLineDiv.appendChild(msgDiv2);
        return warningLineDiv;
    },
    
    _massageValue$p$0: function PPSMA_FilterDialog$_massageValue$p$0(value) {ULSM53:;
        var newValue = value.toUpperCase().replace(this.get_decimalPoint(), '');
        if (value.toUpperCase().indexOf('+') > 0 || value.toUpperCase().indexOf('-') > 0) {
            newValue = newValue.replace('E+', '').replace('E-', '');
        }
        else {
            newValue = newValue.replace('E', '');
        }
        return newValue;
    },
    
    _isValidNumber$p$0: function PPSMA_FilterDialog$_isValidNumber$p$0(value, allowDecimal, allowNegative, separator) {ULSM53:;
        if (value.indexOf('e') !== -1) {
            return 1;
        }
        if (value.indexOf('E') !== -1) {
            return 1;
        }
        while (value.indexOf(separator) >= 0) {
            value = value.replace(separator, '');
        }
        if (allowNegative && !value.trim().indexOf('-')) {
            value = value.replace('-', '');
        }
        if (value === '' || !value) {
            return 4;
        }
        if (allowDecimal && !value.trim().indexOf('.')) {
            var tempValue = value.replace('.', '');
            if (tempValue === '' || !tempValue) {
                return 4;
            }
        }
        var clear0s = new RegExp('^[0]+');
        value = value.replace(clear0s, '');
        if (!value || value === '') {
            value = '0';
        }
        var errorCode = 0;
        var valid;
        while (value.indexOf(separator) >= 0) {
            value = value.replace(separator, '');
        }
        var valueSplit = value.split(this.get_decimalPoint());
        var splitLimit = ((allowDecimal) ? 2 : 1);
        valid = valueSplit.length <= splitLimit;
        if (!valid) {
            errorCode = 3;
        }
        if (valid) {
            value = this._massageValue$p$0(value);
            var rgx = new RegExp('(\\D+)');
            valid = !rgx.test(value);
            if (!valid) {
                errorCode = 1;
            }
        }
        if (valid && !allowNegative) {
            valid = value.indexOf('-') < 0;
            if (!valid) {
                errorCode = 2;
            }
        }
        return errorCode;
    },
    
    _resolvePercentSymbol2$p$0: function PPSMA_FilterDialog$_resolvePercentSymbol2$p$0(value) {ULSM53:;
        var ignorePercentSign = false;
        if (this._filterType$0 === this.toP_FILTER || this._filterType$0 === this.bottoM_FILTER) {
            var selectedTopVar = this._getSelectedTopVar$p$0();
            if (selectedTopVar === 1) {
                ignorePercentSign = true;
            }
        }
        return PPSMA.FilterDialog._resolvePercentSymbol$p(value, ignorePercentSign);
    },
    
    _numericValidation$p$0: function PPSMA_FilterDialog$_numericValidation$p$0(input, pos, allowNegative, floatAccepted, separator, decimalPt, limitFrom, limitTo, ignorePercentSign, errorMsg, id) {ULSM53:;
        if (!input) {
            return true;
        }
        var valid = true;
        var value = PPSMA.FilterDialog._getInputValue$p(input);
        value = value.trimStart().trimEnd();
        var errorCode;
        if (value.search(new RegExp('[eE]+')) > 0 || (limitFrom !== limitTo && (parseFloat(value) < limitFrom || parseFloat(value) > limitTo))) {
            errorCode = 5;
        }
        else if (!value || value === '') {
            errorCode = 4;
        }
        else {
            var clear0s = new RegExp('^[0]+');
            value = value.replace(clear0s, '');
            if (!value || value === '') {
                value = '0';
            }
            value = PPSMA.FilterDialog._resolvePercentSymbol$p(value, ignorePercentSign);
            errorCode = this._isValidNumber$p$0(value, floatAccepted, allowNegative, separator);
        }
        if (errorCode > 0) {
            valid = false;
        }
        else {
            while (value.indexOf(separator) >= 0) {
                value = value.replace(separator, '');
            }
            var numValue = parseInt(value.replace(separator, ''));
            if ((!allowNegative && numValue < limitFrom) || (limitTo > 0 && numValue > limitTo)) {
                valid = false;
            }
        }
        var warningDiv = $get(this._proxyID$0 + PPSMA.FilterDialog.idNumericValidationWarning + id);
        var divs = warningDiv.getElementsByTagName('div');
        var msgDiv = divs[pos - 1];
        var noErrorDisplay = (errorCode === 4 || errorCode === 3);
        if (!valid && !noErrorDisplay) {
            Sys.UI.DomElement.removeCssClass(msgDiv, PPSMA.FilterDialog.classFilterWarningOff);
            Sys.UI.DomElement.addCssClass(msgDiv, PPSMA.FilterDialog.classFilterWarningOn);
            msgDiv.setAttribute('role', 'alert');
            var span = msgDiv.firstChild;
            span.innerHTML = errorMsg;
        }
        else {
            Sys.UI.DomElement.removeCssClass(msgDiv, PPSMA.FilterDialog.classFilterWarningOn);
            Sys.UI.DomElement.addCssClass(msgDiv, PPSMA.FilterDialog.classFilterWarningOff);
            msgDiv.removeAttribute('role');
        }
        return valid;
    },
    
    _updateApplyButton$p$0: function PPSMA_FilterDialog$_updateApplyButton$p$0(enable) {ULSM53:;
        var valueFilter = (this._filterType$0 > 6);
        var id = (valueFilter) ? PPSMA.FilterDialog.idValueFilterDialog : PPSMA.FilterDialog.idTopFilterDialog;
        var okBtn = $get(this._proxyID$0 + PPSMA.FilterDialog.idFilterApply + id);
        if (okBtn) {
            if (enable) {
                okBtn.disabled = false;
                this._addClickHandler$p$0(okBtn, 'apply');
            }
            else {
                okBtn.disabled = true;
                PPSMA.FilterDialog._removeClickHandler$p(okBtn);
            }
        }
    },
    
    _addTupleDropdown$p$0: function PPSMA_FilterDialog$_addTupleDropdown$p$0(filterDialog, id, colIndex, tabindex) {ULSM53:;
        var filterTuples = document.createElement('select');
        if (tabindex !== -1) {
            filterTuples.setAttribute('tabindex', tabindex);
        }
        filterTuples.id = id;
        filterTuples.className = (id.indexOf(PPSMA.FilterDialog.idTopFilterTupleDropdown) >= 0) ? PPSMA.FilterDialog.classTopFilterTupleDropdown : PPSMA.FilterDialog.classFilterTupleDropdown;
        filterTuples.name = id;
        filterDialog.appendChild(filterTuples);
        var filterHierarchy = this._getBackgroundMeasure$p$0();
        var tuples = this._getTuplesList$p$0();
        var optionArray = new Array(tuples.length);
        for (var i = 0; i < tuples.length; i++) {
            var tupleName = tuples[i];
            var selected = false;
            if (i === colIndex) {
                selected = true;
            }
            optionArray[i] = this._createFilterOption$p$0(i.toString(), tupleName + filterHierarchy, selected);
            filterTuples.appendChild(optionArray[i]);
        }
        filterDialog.appendChild(filterTuples);
    },
    
    _filterGetSelectedHierarchy$p$0: function PPSMA_FilterDialog$_filterGetSelectedHierarchy$p$0() {ULSM53:;
        var rowHier = this._olapViewContext$0.get_results().get_rowHierarchies();
        if (rowHier && rowHier.length > 0) {
            return rowHier[rowHier.length - 1];
        }
        return null;
    },
    
    _verifyIfSelectedTupleOnList$p$0: function PPSMA_FilterDialog$_verifyIfSelectedTupleOnList$p$0(tuplesList) {ULSM53:;
        var filterHierarchy = this._getBackgroundMeasure$p$0();
        this._tupleIndex$0 = -1;
        for (var i = 0; i < tuplesList.length; i++) {
            var tupleName = tuplesList[i];
            if (tupleName.indexOf(filterHierarchy) < 0) {
                tupleName += filterHierarchy;
            }
            if (!tupleName.indexOf(this._tuple$0)) {
                this._tupleIndex$0 = i;
                break;
            }
        }
        if (this._tupleIndex$0 === -1) {
            Array.insert(tuplesList, 0, this._tuple$0);
        }
    },
    
    _getTuplesList$p$0: function PPSMA_FilterDialog$_getTuplesList$p$0() {ULSM53:;
        var tuplesList = [];
        if (this._tupleOptionList$0 && this._tupleOptionList$0 !== '') {
            var options = this._tupleOptionList$0.split(':');
            for (var i = 0; i < options.length; i++) {
                Array.add(tuplesList, options[i]);
            }
            return tuplesList;
        }
        var results = this._olapViewContext$0.get_results();
        var members = ((this._axis$0 === '1') ? results.get_rowMembers() : results.get_columnMembers());
        if (members) {
            var colCount = members.length;
            for (var colIndex = 0; colIndex < colCount; colIndex++) {
                var caption = '';
                for (var i = 0; i < members[colIndex].length; i++) {
                    var column = members[colIndex][i];
                    caption = caption + column.get_caption();
                    if (i < members[colIndex].length - 1) {
                        caption = caption + ', ';
                    }
                }
                Array.add(tuplesList, caption);
            }
        }
        return tuplesList;
    },
    
    _addClickHandler$p$0: function PPSMA_FilterDialog$_addClickHandler$p$0(element, fn) {ULSM53:;
        var escCtxName = PPSMA.EncodeEx.jsQuoteEncode(this._gridCtxName$0);
        element.click = eval('new Function(\'' + escCtxName + '._valueFilter.' + fn + '(event);\');');
    },
    
    _getTopFilterDlg$p$0: function PPSMA_FilterDialog$_getTopFilterDlg$p$0() {ULSM53:;
        var topFilterDlg = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopFilterDialog);
        if (!topFilterDlg) {
            return null;
        }
        this._setFilterByLevelDisplay$p$0(PPSMA.SR.OlapFilter_TopFilterHeader + '&nbsp;' + this._levelName$0);
        this._setFilterOptionsDropdown$p$0(PPSMA.FilterDialog.idTopFilterOptionsDropdown);
        this._setTupleDropdown$p$0(PPSMA.FilterDialog.idTopFilterTupleDropdown);
        this._setTopVarFilterOptionsDropdown$p$0(PPSMA.FilterDialog.idTopVarOptionsDropdown);
        this._setInputValue1$p$0(PPSMA.FilterDialog.idTopFilterInput);
        this._setClearButton$p$0(PPSMA.FilterDialog.idTopFilterDialog);
        return topFilterDlg;
    },
    
    _createTopFilterDlg$p$0: function PPSMA_FilterDialog$_createTopFilterDlg$p$0() {ULSM53:;
        var contentSection = this._createTopFilterContents$p$0(PPSMA.SR.OlapFilter_TopFilterText);
        var mainDlg = this._createMainDlg$p$0(PPSMA.FilterDialog.idTopFilterDialog, contentSection, PPSMA.ScriptConstants.analyticReportsTopFilterDialogWidth, PPSMA.ScriptConstants.analyticReportsTopFilterDialogHeight);
        return mainDlg;
    },
    
    _createTopFilterContents$p$0: function PPSMA_FilterDialog$_createTopFilterContents$p$0(label) {ULSM53:;
        var filterContents = this._createFilterContents$p$0(label);
        filterContents.appendChild(this._createTopFilterInputFieldsDiv$p$0());
        return filterContents;
    },
    
    _createTopFilterInputFieldsDiv$p$0: function PPSMA_FilterDialog$_createTopFilterInputFieldsDiv$p$0() {ULSM53:;
        var id = this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInputDiv;
        var inputFields = $get(id);
        if (!inputFields) {
            inputFields = document.createElement('div');
            inputFields.id = id;
            inputFields.className = PPSMA.FilterDialog.classTFilterInputDiv;
            this._addTopFilterOptions$p$0(inputFields, this._filterType$0, PPSMA.TopFilterDialogConstants.filterOptionsTI);
            var topFilterInputDiv = document.createElement('div');
            topFilterInputDiv.className = PPSMA.FilterDialog.classTopFilterInputDiv;
            inputFields.appendChild(topFilterInputDiv);
            this._addInput$p$0(topFilterInputDiv, this._filterType$0, this._val1$0, this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInput, PPSMA.FilterDialog.classTopFilterInput, true, PPSMA.TopFilterDialogConstants.inputTI);
            this._addTopVarFilterOptions$p$0(inputFields, this._filterType$0, PPSMA.TopFilterDialogConstants.varOptionsTI);
            var textLine = document.createElement('div');
            textLine.className = PPSMA.FilterDialog.classTopFilterLabelAndWarningDiv;
            var labelDiv = document.createElement('div');
            labelDiv.className = PPSMA.FilterDialog.classFilterLabelForByDiv;
            PPSMA.FilterDialog._addLabel$p(labelDiv, PPSMA.SR.OlapFilter_ByLabel, null, false, PPSMA.FilterDialog.classFilterLabelForBy);
            textLine.appendChild(labelDiv);
            textLine.appendChild(this._createNumericValidationWarning$p$0(PPSMA.FilterDialog.idTopFilterDialog, PPSMA.FilterDialog.classTopNumericValidationWarningDiv));
            inputFields.appendChild(textLine);
            var tupleLine = document.createElement('div');
            tupleLine.className = PPSMA.FilterDialog.classTopFilterTupleDropdownDiv;
            this._addTupleDropdown$p$0(tupleLine, this._proxyID$0 + PPSMA.FilterDialog.idTopFilterTupleDropdown, this._tupleIndex$0, PPSMA.TopFilterDialogConstants.tupleOptionsTI);
            inputFields.appendChild(tupleLine);
        }
        return inputFields;
    },
    
    _getSelectedTopVar$p$0: function PPSMA_FilterDialog$_getSelectedTopVar$p$0() {ULSM53:;
        var selectedOption = 0;
        var options = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopVarOptionsDropdown);
        if (options) {
            var option = options;
            selectedOption = option.selectedIndex;
        }
        return selectedOption;
    },
    
    _validateTopFilterInput$p$0: function PPSMA_FilterDialog$_validateTopFilterInput$p$0(e) {ULSM53:;
        if (this._isTupleListEmpty$p$0()) {
            this._updateApplyButton$p$0(false);
            return;
        }
        var input = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInput);
        var varOption = this._getSelectedTopVar$p$0();
        var limitFrom = 0;
        var limitTo = 0;
        var percentType = false;
        var errorMsg = '';
        switch (varOption) {
            case 0:
                limitFrom = 1;
                limitTo = 2000000000;
                errorMsg = String.format(PPSMA.SR.OlapFilter_NumberOnly);
                break;
            case 1:
                limitTo = 100;
                percentType = true;
                errorMsg = String.format(PPSMA.SR.OlapFilter_NumberLimit, limitFrom.toString(), limitTo.toString());
                break;
            case 2:
                errorMsg = String.format(PPSMA.SR.OlapFilter_NumberGreaterThanZero, limitFrom.toString());
                break;
        }
        var valid = this._numericValidation$p$0(input, 1, false, true, this.get_thousandSeparator(), this.get_decimalPoint(), limitFrom, limitTo, percentType, errorMsg, PPSMA.FilterDialog.idTopFilterDialog);
        this._updateApplyButton$p$0(valid);
    },
    
    _formatTopFilterInput$p$0: function PPSMA_FilterDialog$_formatTopFilterInput$p$0(e) {ULSM53:;
        this._validateTopFilterInput$p$0(e);
        var value = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInput);
        var options = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopVarOptionsDropdown);
        var noFloat = false;
        if (options) {
            var option = options;
            if (!option.selectedIndex) {
                noFloat = true;
            }
        }
        this._tryFormatInputValue$p$0(value, noFloat);
    },
    
    _addTopFilterOptions$p$0: function PPSMA_FilterDialog$_addTopFilterOptions$p$0(filterDialog, filterTypeIndex, tabindex) {ULSM53:;
        var filterTopOptionsDiv = document.createElement('div');
        filterTopOptionsDiv.className = PPSMA.FilterDialog.classFilterTopOptionsDropdownDiv;
        var filterTopOptions = document.createElement('select');
        filterTopOptions.id = this._proxyID$0 + PPSMA.FilterDialog.idTopFilterOptionsDropdown;
        filterTopOptions.className = PPSMA.FilterDialog.classFilterTopOptionsDropdown;
        filterTopOptions.setAttribute('name', PPSMA.FilterDialog.idTopFilterOptionsDropdown);
        if (tabindex !== -1) {
            filterTopOptions.setAttribute('tabindex', tabindex);
        }
        var topbotoption = (filterTypeIndex > 3) ? 4 : 1;
        var optionTop = this._createFilterOption$p$0('1', PPSMA.SR.OlapFilter_Top, topbotoption === 1);
        filterTopOptions.appendChild(optionTop);
        var optionBot = this._createFilterOption$p$0('4', PPSMA.SR.OlapFilter_Bottom, topbotoption === 4);
        filterTopOptions.appendChild(optionBot);
        filterTopOptionsDiv.appendChild(filterTopOptions);
        filterDialog.appendChild(filterTopOptionsDiv);
    },
    
    _topVarOptionChanged$p$0: function PPSMA_FilterDialog$_topVarOptionChanged$p$0(e) {ULSM53:;
        this._validateTopFilterInput$p$0(e);
    },
    
    _addTopVarFilterOptions$p$0: function PPSMA_FilterDialog$_addTopVarFilterOptions$p$0(filterDialog, filterTypeIndex, tabindex) {ULSM53:;
        var topvaroption = (filterTypeIndex - 1) % 3;
        var filterTopVar = document.createElement('select');
        filterTopVar.id = this._proxyID$0 + PPSMA.FilterDialog.idTopVarOptionsDropdown;
        filterTopVar.className = PPSMA.FilterDialog.classFilterTopVarDropdown;
        filterTopVar.setAttribute('name', PPSMA.FilterDialog.idTopVarOptionsDropdown);
        if (tabindex !== -1) {
            filterTopVar.setAttribute('tabindex', tabindex);
        }
        var optionItems = this._createFilterOption$p$0('0', PPSMA.SR.OlapFilter_Count, !topvaroption);
        filterTopVar.appendChild(optionItems);
        var optionPercent = this._createFilterOption$p$0('1', PPSMA.SR.OlapFilter_Percent, topvaroption === 1);
        filterTopVar.appendChild(optionPercent);
        var optionSum = this._createFilterOption$p$0('2', PPSMA.SR.OlapFilter_Sum, topvaroption === 2);
        filterTopVar.appendChild(optionSum);
        var filterTopVarDiv = document.createElement('div');
        filterTopVarDiv.className = PPSMA.FilterDialog.classFilterTopVarDropdownDiv;
        filterTopVarDiv.appendChild(filterTopVar);
        filterDialog.appendChild(filterTopVarDiv);
    },
    
    apply: function PPSMA_FilterDialog$apply(e) {ULSM53:;
        this._setFilterAttributes$p$0();
        this._selectedButton$0 = '1';
        this._modalDialog$p$0.close(SP.UI.DialogResult.OK);
    },
    
    _setFilterAttributes$p$0: function PPSMA_FilterDialog$_setFilterAttributes$p$0() {ULSM53:;
        var selectedHierarchyName = this._hierarchy$0;
        if (isNullUndefinedOrEmpty(selectedHierarchyName)) {
            var rHier = null;
            if (!this._currentCell$0 && this._olapViewContext$0.get_results().get_rowHierarchies() && this._olapViewContext$0.get_results().get_rowHierarchies().length > 0) {
                rHier = this._olapViewContext$0.get_results().get_rowHierarchies()[0];
            }
            else {
                rHier = this._filterGetSelectedHierarchy$p$0();
            }
            if (rHier) {
                selectedHierarchyName = rHier.get_name();
            }
        }
        var valueFilter = true;
        if (this._filterType$0 < 7) {
            valueFilter = false;
        }
        this._hierarchy$0 = selectedHierarchyName;
        var filters = $get(this._proxyID$0 + ((valueFilter) ? PPSMA.FilterDialog.idValueFilterOptionsDropdown : PPSMA.FilterDialog.idTopFilterOptionsDropdown));
        var input1 = $get(this._proxyID$0 + ((valueFilter) ? PPSMA.FilterDialog.idValueFilterInput1 : PPSMA.FilterDialog.idTopFilterInput));
        if (input1) {
            input1.setAttribute('tabindex', PPSMA.ValueFilterDialogConstants.input1TI);
        }
        var input2 = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInput2);
        if (input2) {
            input2.setAttribute('tabindex', PPSMA.ValueFilterDialogConstants.input2TI);
        }
        var filterTuples = $get(this._proxyID$0 + ((valueFilter) ? PPSMA.FilterDialog.idValueFilterTupleDropdown : PPSMA.FilterDialog.idTopFilterTupleDropdown));
        if (!this._levelName$0 || this._levelName$0 === '') {
            this._levelName$0 = this._getFilterByInfo$p$0();
        }
        var options = filterTuples.children;
        if (!options) {
            options = filterTuples.childNodes;
        }
        var tupleSelect = filterTuples;
        var sTupleIndex = PPSMA.FilterDialog._getInputValue$p(options[tupleSelect.selectedIndex]);
        try {
            this._tupleIndex$0 = parseInt(sTupleIndex);
        }
        catch ($$e_A) {
            this._tupleIndex$0 = 0;
        }
        if (this._olapViewContext$0) {
            var detailsHelper = new PPSMA.DetailsHelper(this._olapViewContext$0, this._gridCtxName$0, ((this._axis$0 === '1') ? this._tupleIndex$0 : 0), ((this._axis$0 === '1') ? 0 : this._tupleIndex$0), '');
            this._tupleXML$0 = detailsHelper.getCellTupleXml();
        }
        this._value1$0 = PPSMA.FilterDialog._getInputValue$p(input1);
        this._value1$0 = this._resolvePercentSymbol2$p$0(this._value1$0);
        if (input2) {
            this._value2$0 = PPSMA.FilterDialog._getInputValue$p(input2);
            this._value2$0 = this._resolvePercentSymbol2$p$0(this._value2$0);
        }
        else {
            this._value2$0 = '0';
        }
        var filterOptions = filters.getElementsByTagName('option');
        var filterSelect = filters;
        var sType = PPSMA.FilterDialog._getInputValue$p(filterOptions[filterSelect.selectedIndex]);
        var iType;
        try {
            iType = parseInt(sType);
        }
        catch ($$e_G) {
            iType = 1;
        }
        if (iType < 6) {
            this._formatTopFilterInput$p$0(null);
            var topvar = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopVarOptionsDropdown);
            var vars = topvar.getElementsByTagName('option');
            var varSelect = topvar;
            var sTopVar = PPSMA.FilterDialog._getInputValue$p(vars[varSelect.selectedIndex]);
            var iTopVar = parseInt(sTopVar);
            iType = iType + iTopVar;
        }
        this._filterType$0 = iType;
        if (this._filterType$0 === this.valuE_BETWEEN || this._filterType$0 === this.valuE_NOT_BETWEEN) {
            this._swapValues$p$0();
        }
    },
    
    _swapValues$p$0: function PPSMA_FilterDialog$_swapValues$p$0() {ULSM53:;
        var tempValue1 = this._value1$0;
        var tempValue2 = this._value2$0;
        while (tempValue1.indexOf(this.get_thousandSeparator()) >= 0) {
            tempValue1 = tempValue1.replace(this.get_thousandSeparator(), '');
        }
        while (tempValue2.indexOf(this.get_thousandSeparator()) >= 0) {
            tempValue2 = tempValue2.replace(this.get_thousandSeparator(), '');
        }
        var value1 = parseInt(tempValue1);
        var value2 = parseInt(tempValue2);
        if (value1 > value2) {
            var temp = this._value1$0;
            this._value1$0 = this._value2$0;
            this._value2$0 = temp;
        }
    },
    
    cancel: function PPSMA_FilterDialog$cancel(e) {ULSM53:;
        this._selectedButton$0 = '2';
        this._modalDialog$p$0.close(SP.UI.DialogResult.OK);
    },
    
    clear: function PPSMA_FilterDialog$clear(e) {ULSM53:;
        this._selectedButton$0 = '3';
        this._modalDialog$p$0.close(SP.UI.DialogResult.OK);
    },
    
    handleTabEvent: function PPSMA_FilterDialog$handleTabEvent(e) {ULSM53:;
        var tabKey = 9;
        var currEvent = PPSMA.EventsEx.getEvent(e);
        var keyPressed = (currEvent).keyCode;
        if (keyPressed !== tabKey) {
            return;
        }
        if ((currEvent).shiftKey) {
            return;
        }
        var currElem = PPSMA.EventsEx.getCurrentElement(e);
        var currElemID = currElem.getAttribute('id');
        if (currElemID === this._proxyID$0 + PPSMA.FilterDialog.idFilterCancel + PPSMA.FilterDialog.idValueFilterDialog) {
            var vfTupledd = $get(this._proxyID$0 + PPSMA.FilterDialog.idValueFilterInputDiv);
            vfTupledd.focus();
        }
        else if (currElemID === this._proxyID$0 + PPSMA.FilterDialog.idFilterCancel + PPSMA.FilterDialog.idTopFilterDialog) {
            var tfOptionsdd = $get(this._proxyID$0 + PPSMA.FilterDialog.idTopFilterInputDiv);
            tfOptionsdd.focus();
        }
    }
}


PPSMA.Toolbar = function PPSMA_Toolbar(olapViewContext, toolbarContextId) {ULSM53:;
    this._olapViewContext$0 = olapViewContext;
    this._toolbarContextId$0 = toolbarContextId;
}
PPSMA.Toolbar.prototype = {
    _olapViewContext$0: null,
    _toolbarContextId$0: null,
    
    handleSkipToReportLinkClick: function PPSMA_Toolbar$handleSkipToReportLinkClick() {ULSM53:;
        this._olapViewContext$0.get_reportContext().assignFocus();
    }
}


PPSMA.OlapWebRequest = function PPSMA_OlapWebRequest(containerElement, cancelCallback, imagePath) {ULSM53:;
    this.$$d__cancelled$p$0 = Function.createDelegate(this, this._cancelled$p$0);
    if (isNullOrUndefined(containerElement)) {
        return;
    }
    this._cancellableWebRequest$0 = new PPSMA.CancellableWebRequest(containerElement, PPSMA.RenderWebRequest.msgtypE_LOADING, imagePath, containerElement.id, PPSMA.RenderWebRequest.ProgressIndicatorPositioning.ZeroZero);
    this._cancellableWebRequest$0.add_onCancelled(this.$$d__cancelled$p$0);
    this._cancelCallback$0 = cancelCallback;
}
PPSMA.OlapWebRequest.prototype = {
    _cancellableWebRequest$0: null,
    _webRequest$0: null,
    _cancelCallback$0: null,
    
    dispose: function PPSMA_OlapWebRequest$dispose() {ULSM53:;
        if (this._cancellableWebRequest$0) {
            this._cancellableWebRequest$0.dispose();
            this._cancellableWebRequest$0 = null;
        }
        if (this._webRequest$0) {
            if (!isNullOrUndefined(this._webRequest$0.get_executor()) && !this._webRequest$0.get_executor().get_aborted()) {
                this._webRequest$0.get_executor().abort();
            }
            this._webRequest$0 = null;
        }
    },
    
    _cancelled$p$0: function PPSMA_OlapWebRequest$_cancelled$p$0(request) {ULSM53:;
        if (this._cancelCallback$0) {
            this._cancelCallback$0();
        }
    },
    
    show: function PPSMA_OlapWebRequest$show() {ULSM53:;
        if (this._cancellableWebRequest$0) {
            this._cancellableWebRequest$0.show();
        }
    },
    
    hide: function PPSMA_OlapWebRequest$hide() {ULSM53:;
        if (this._cancellableWebRequest$0) {
            this._cancellableWebRequest$0.hide();
        }
    },
    
    submit: function PPSMA_OlapWebRequest$submit(details) {ULSM53:;
        if (this._cancellableWebRequest$0) {
            this._cancellableWebRequest$0.submit(details);
        }
        else {
            if (this._webRequest$0) {
                this._webRequest$0.get_executor().abort();
            }
            this._webRequest$0 = new Sys.Net.WebRequest();
            this._webRequest$0.set_url(details.url);
            this._webRequest$0.set_body(details.body);
            this._webRequest$0.set_httpVerb(details.httpVerb);
            this._webRequest$0.get_headers()['Content-Type'] = details.contentType;
            this._webRequest$0.add_completed(details.completedCallback);
            this._webRequest$0.invoke();
        }
    }
}


Type.registerNamespace('AjaxFX');

AjaxFX.HistoryEventArgs = function AjaxFX_HistoryEventArgs(entryName) {ULSM53:;
    AjaxFX.HistoryEventArgs.initializeBase(this);
    this._entryName$1 = entryName;
}
AjaxFX.HistoryEventArgs.prototype = {
    _entryName$1: null,
    
    get_entryName: function AjaxFX_HistoryEventArgs$get_entryName() {ULSM53:;
        return this._entryName$1;
    }
}


AjaxFX.HistoryManager = function AjaxFX_HistoryManager(enabled, iframe) {ULSM53:;
    this.$$d__onIFrameLoad$p$0 = Function.createDelegate(this, this._onIFrameLoad$p$0);
    this.$$d__onIdleTimerTick$p$0 = Function.createDelegate(this, this._onIdleTimerTick$p$0);
    this.$$d__onAppIdle$p$0 = Function.createDelegate(this, this._onAppIdle$p$0);
    this._events$0 = new Sys.EventHandlerList();
    this._enabled$0 = enabled;
    this._iframe$0 = iframe;
    this._idleFrequency$0 = 500;
}
AjaxFX.HistoryManager.createHistory = function AjaxFX_HistoryManager$createHistory(target, iframeUrl) {ULSM53:;
    if (AjaxFX.HistoryManager._historyManager) {
        AjaxFX.HistoryManager._historyManager.dispose();
    }
    AjaxFX.HistoryManager._historyManager = null;
    if (Sys.Browser.agent !== Sys.Browser.InternetExplorer && Sys.Browser.agent !== Sys.Browser.Firefox && Sys.Browser.agent !== Sys.Browser.Safari) {
        AjaxFX.HistoryManager._historyManager = new AjaxFX.HistoryManager(false, null);
    }
    else {
        var iframe = null;
        if (Sys.Browser.name === 'Microsoft Internet Explorer') {
            AjaxFX.HistoryManager._createHistoryIFrame$p(target, iframeUrl);
            iframe = $get('_historyFrame');
        }
        AjaxFX.HistoryManager._historyManager = new AjaxFX.HistoryManager(true, iframe);
    }
    AjaxFX.HistoryManager._historyManager._initialize$i$0();
    return AjaxFX.HistoryManager._historyManager;
}
AjaxFX.HistoryManager._createHistoryIFrame$p = function AjaxFX_HistoryManager$_createHistoryIFrame$p(target, src) {ULSM53:;
    if (target) {
        var iFrame = document.createElement('iframe');
        iFrame.id = '_historyFrame';
        iFrame.style.display = 'none';
        iFrame.src = src;
        target.parentNode.insertBefore(iFrame, target);
    }
}
AjaxFX.HistoryManager.prototype = {
    _enabled$0: false,
    _iframe$0: null,
    _emptyPageURL$0: null,
    _iframeLoadHandler$0: null,
    _isIFrameLoaded$0: false,
    _ignoreTimer$0: false,
    _ignoreIFrame$0: false,
    _currentEntry$0: null,
    _idleEvent$0: null,
    _idleFrequency$0: 0,
    _idleTimer$0: 0,
    _idleTimerTickHandler$0: null,
    
    get_isEnabled: function AjaxFX_HistoryManager$get_isEnabled() {ULSM53:;
        return this._enabled$0;
    },
    
    add_navigated: function AjaxFX_HistoryManager$add_navigated(value) {ULSM53:;
        this._events$0.addHandler(AjaxFX.HistoryManager._eventKey_Navigated$p, value);
    },
    remove_navigated: function AjaxFX_HistoryManager$remove_navigated(value) {ULSM53:;
        this._events$0.removeHandler(AjaxFX.HistoryManager._eventKey_Navigated$p, value);
    },
    
    addEntry: function AjaxFX_HistoryManager$addEntry(entryName) {ULSM53:;
        if (!this._enabled$0) {
            return;
        }
        this._ignoreTimer$0 = true;
        if (this._iframe$0 && !this._isIFrameLoaded$0) {
            this._ignoreIFrame$0 = true;
            this._iframe$0.src = this._emptyPageURL$0 + entryName;
            if (Sys.Browser.name === 'Microsoft Internet Explorer') {
                if (window.navigator.userAgent.search(new RegExp('Trident')) >= 0 || Sys.Browser.version === 8) {
                    this._isIFrameLoaded$0 = true;
                }
            }
        }
        else {
            this._setCurrentEntry$p$0(entryName);
        }
    },
    
    dispose: function AjaxFX_HistoryManager$dispose() {ULSM53:;
        if (this._iframe$0) {
            $clearHandlers(this._iframe$0);
            this._iframe$0 = null;
        }
        if (this._idleTimer$0) {
            window.clearTimeout(this._idleTimer$0);
        }
    },
    
    _getCurrentEntry$p$0: function AjaxFX_HistoryManager$_getCurrentEntry$p$0() {ULSM53:;
        var entryName = window.location.hash;
        if ((entryName.length) && (entryName.charAt(0) === '#')) {
            entryName = entryName.substr(1);
        }
        return entryName;
    },
    
    goBack: function AjaxFX_HistoryManager$goBack() {ULSM53:;
        window.history.back();
    },
    
    goForward: function AjaxFX_HistoryManager$goForward() {ULSM53:;
        window.history.forward();
    },
    
    _initialize$i$0: function AjaxFX_HistoryManager$_initialize$i$0() {ULSM53:;
        if (!this._enabled$0) {
            return;
        }
        this._idleEvent$0 = this.$$d__onAppIdle$p$0;
        this._idleTimerTickHandler$0 = this.$$d__onIdleTimerTick$p$0;
        this._idleTimer$0 = window.setTimeout(this._idleTimerTickHandler$0, this._idleFrequency$0);
        if (this._iframe$0) {
            var searchStart = this._iframe$0.src.indexOf('?');
            if (searchStart > 0) {
                this._emptyPageURL$0 = this._iframe$0.src.substr(0, searchStart) + '?';
            }
            else {
                this._emptyPageURL$0 = this._iframe$0.src + '?';
            }
            this._iframeLoadHandler$0 = this.$$d__onIFrameLoad$p$0;
            $addHandler(this._iframe$0, 'load', this._iframeLoadHandler$0);
        }
        this._currentEntry$0 = this._getCurrentEntry$p$0();
        this._onNavigated$p$0(this._currentEntry$0);
        Sys.Application.registerDisposableObject(this);
    },
    
    _onIdleTimerTick$p$0: function AjaxFX_HistoryManager$_onIdleTimerTick$p$0() {ULSM53:;
        this._idleTimer$0 = 0;
        if (this._idleEvent$0) {
            this._idleEvent$0(this, Sys.EventArgs.Empty);
            this._idleTimer$0 = window.setTimeout(this._idleTimerTickHandler$0, this._idleFrequency$0);
        }
    },
    
    _onAppIdle$p$0: function AjaxFX_HistoryManager$_onAppIdle$p$0(sender, e) {ULSM53:;
        var entryName = this._getCurrentEntry$p$0();
        if (entryName !== this._currentEntry$0) {
            if (this._ignoreTimer$0) {
                return;
            }
            this._currentEntry$0 = entryName;
            this._onNavigated$p$0(entryName);
        }
        else {
            this._ignoreTimer$0 = false;
        }
    },
    
    _onIFrameLoad$p$0: function AjaxFX_HistoryManager$_onIFrameLoad$p$0(e) {ULSM53:;
        var entryName = this._iframe$0.contentWindow.location.search;
        if ((entryName.length) && (entryName.charAt(0) === '?')) {
            entryName = entryName.substr(1);
        }
        this._setCurrentEntry$p$0(entryName);
        if (this._ignoreIFrame$0) {
            this._ignoreIFrame$0 = false;
            return;
        }
        this._onNavigated$p$0(entryName);
        if (Sys.Browser.name === 'Microsoft Internet Explorer') {
            if (window.navigator.userAgent.search(new RegExp('Trident')) >= 0 || Sys.Browser.version === 8) {
                this._isIFrameLoaded$0 = false;
            }
        }
    },
    
    _onNavigated$p$0: function AjaxFX_HistoryManager$_onNavigated$p$0(entryName) {ULSM53:;
        var handler = this._events$0.getHandler(AjaxFX.HistoryManager._eventKey_Navigated$p);
        if (handler) {
            handler(this, new AjaxFX.HistoryEventArgs(entryName));
        }
    },
    
    _setCurrentEntry$p$0: function AjaxFX_HistoryManager$_setCurrentEntry$p$0(entryName) {ULSM53:;
        window.location.hash = entryName;
        this._currentEntry$0 = this._getCurrentEntry$p$0();
    }
}


PPSMA.AjaxOlapRenderRequestRecord.registerClass('PPSMA.AjaxOlapRenderRequestRecord');
PPSMA.AjaxOlapMetadataRequestRecord.registerClass('PPSMA.AjaxOlapMetadataRequestRecord');
PPSMA.Dimension.registerClass('PPSMA.Dimension');
PPSMA.DimensionProperties.registerClass('PPSMA.DimensionProperties');
PPSMA.Hierarchy.registerClass('PPSMA.Hierarchy');
PPSMA.Level.registerClass('PPSMA.Level');
PPSMA.ResultHierarchy.registerClass('PPSMA.ResultHierarchy');
PPSMA.ResultMemberProperties.registerClass('PPSMA.ResultMemberProperties');
PPSMA.Results.registerClass('PPSMA.Results');
PPSMA.Member.registerClass('PPSMA.Member');
PPSMA.ReportsCommon.registerClass('PPSMA.ReportsCommon');
PPSMA.DialogsCommon.registerClass('PPSMA.DialogsCommon');
PPSMA.ContextMenu.registerClass('PPSMA.ContextMenu');
PPSMA.ShowProperties.registerClass('PPSMA.ShowProperties');
PPSMA.ThinFieldListItemSelectedEventArgs.registerClass('PPSMA.ThinFieldListItemSelectedEventArgs', Sys.EventArgs);
PPSMA.ThinFieldList.registerClass('PPSMA.ThinFieldList');
PPSMA.BaseMeasureKpi.registerClass('PPSMA.BaseMeasureKpi');
PPSMA.Kpi.registerClass('PPSMA.Kpi', PPSMA.BaseMeasureKpi);
PPSMA.Measure.registerClass('PPSMA.Measure', PPSMA.BaseMeasureKpi);
PPSMA.Folder.registerClass('PPSMA.Folder');
PPSMA.Measures.registerClass('PPSMA.Measures');
PPSMA.DetailsHelper.registerClass('PPSMA.DetailsHelper');
PPSMA.DrillDownToHelper.registerClass('PPSMA.DrillDownToHelper');
PPSMA.AnalyzeInDecompHelper.registerClass('PPSMA.AnalyzeInDecompHelper');
PPSMA.MenuOptionHelper.registerClass('PPSMA.MenuOptionHelper');
PPSMA.SubMenu.registerClass('PPSMA.SubMenu');
PPSMA.OlapViewContext.registerClass('PPSMA.OlapViewContext', null, Sys.IDisposable);
PPSMA.ChangeMeasure.registerClass('PPSMA.ChangeMeasure');
PPSMA.FilterDialogConstants.registerClass('PPSMA.FilterDialogConstants');
PPSMA.ValueFilterDialogConstants.registerClass('PPSMA.ValueFilterDialogConstants');
PPSMA.TopFilterDialogConstants.registerClass('PPSMA.TopFilterDialogConstants');
PPSMA.FilterDialog.registerClass('PPSMA.FilterDialog');
PPSMA.Toolbar.registerClass('PPSMA.Toolbar');
PPSMA.OlapWebRequest.registerClass('PPSMA.OlapWebRequest');
AjaxFX.HistoryEventArgs.registerClass('AjaxFX.HistoryEventArgs', Sys.EventArgs);
AjaxFX.HistoryManager.registerClass('AjaxFX.HistoryManager', null, Sys.IDisposable);
PPSMA.DialogsCommon._dlgResizeClass$p = 'ms-dlgCloseBtn';
PPSMA.ContextMenu._currItem = null;
PPSMA.ContextMenu._currMenu = null;
PPSMA.ContextMenu._toolBarPrefix$p = 'olap_toolbar';
PPSMA.ShowProperties._okBtn$p = '1';
PPSMA.ShowProperties._cancelBtn$p = '2';
PPSMA.ShowProperties._classCheckBoxList$p = 'ms-bishowproperties-checkboxlist';
PPSMA.ShowProperties._classCheckBox$p = 'ms-bishowproperties-checkbox';
PPSMA.ShowProperties._classCheckBoxLabel$p = 'ms-bishowproperties-checkboxlabel';
PPSMA.ShowProperties._classSelectedMember$p = 'ms-bishowproperties-selectedmember';
PPSMA.ShowProperties._classApplyCustom$p = 'ms-bishowproperties-apply';
PPSMA.ShowProperties._classCancelCustom$p = 'ms-bishowproperties-cancel';
PPSMA.ShowProperties._classFooter$p = 'ms-bishowproperties-footer';
PPSMA.ShowProperties._classSelectAllDiv$p = 'ms-bishowproperties-selectall';
PPSMA.ShowProperties._classButtonsDiv$p = 'ms-bishowproperties-buttons';
PPSMA.ShowProperties._classPositioningParent$p = 'ms-bishowproperties-positioningparent';
PPSMA.ShowProperties._classShowPropertiesDiv$p = 'ms-bishowproperties-main';
PPSMA.ShowProperties._divIDCheckBoxFieldSetParent$p = '_DimPropertiesDiv';
PPSMA.ShowProperties._divIDShowPropertiesMain$p = '_ShowPropertiesDiv';
PPSMA.ShowProperties._divIDSelectedHierArea$p = '_SelectedMemberNameTable';
PPSMA.ShowProperties._divIDSelectedHierSpan$p = '_gspanSelectedDimension';
PPSMA.ShowProperties._divIDFooter$p = '_ShowPropertiesFooter';
PPSMA.ShowProperties._divIDSelectAll$p = '_propSelectAll';
PPSMA.ShowProperties._divIDApply$p = '_propApply_';
PPSMA.ShowProperties._divIDCancel$p = '_propCancel_';
PPSMA.ShowProperties._divIDInputCheckBox$p = '_inputPropCheckBox_';
PPSMA.ShowProperties._divIDCheckBox$p = '_divPropCheckBox_';
PPSMA.ShowProperties._divIDLabelCheckBox$p = '_divPropLabel_';
PPSMA.ThinFieldList._classThinFieldListMain$p = 'ms-bichangemeasures-thinfieldlistmaindiv';
PPSMA.ThinFieldList._classThinFieldListUL$p = 'ms-bichangemeasures-thinfieldlistitems';
PPSMA.ThinFieldList._classWaitingDiv$p = 'ms-bichangemeasures-waiting';
PPSMA.ThinFieldList._classFooter$p = 'ms-bichangemeasures-thinfieldlistfooter';
PPSMA.ThinFieldList._classApply$p = 'ms-bichangemeasures-thinfieldlistapply';
PPSMA.ThinFieldList._classCancel$p = 'ms-bichangemeasures-thinfieldlistcancel';
PPSMA.ThinFieldList._classScrollList$p = 'ms-bichangemeasures-scrolllist';
PPSMA.ThinFieldList._classSelectGroupWrapper$p = 'ms-bichangemeasures-selectgroupdiv';
PPSMA.ThinFieldList.divIDListContainer = '_ScrollList';
PPSMA.ThinFieldList.ulidDisplayObjectParent = '_ULDisplayObjects';
PPSMA.ThinFieldList._divIDLoading$p = '_ThinFieldListLoadingDiv';
PPSMA.ThinFieldList.divIDThinFieldListMain = '_ThinFieldListDiv';
PPSMA.ThinFieldList._divIDFooter$p = '_MeasureGroupsFooter';
PPSMA.ThinFieldList._divIDApply$p = '_propApply_';
PPSMA.ThinFieldList._divIDCancel$p = '_propCancel_';
PPSMA.ThinFieldList._eventKey_ItemSelected$p = '__ItemSelected__';
PPSMA.ThinFieldList._thinFieldListDefaultWidth$p = 210;
PPSMA.ThinFieldList._thinFieldListDefaultHeight$p = 202;
PPSMA.ThinFieldList._ajaxTimeoutMs$p = 200;
PPSMA.Kpi.classThinFieldListLI = 'ms-bichangemeasures-thinfieldlistitems';
PPSMA.Kpi.classThinFieldListCheckBox = 'ms-bichangemeasures-thinfieldlistcheckbox';
PPSMA.Kpi._kpiCollapsedGifName$p = 'pps_minus_stoplight.gif';
PPSMA.Kpi._kpiExpandedGifName$p = 'pps_plus_stoplight.gif';
PPSMA.Kpi.listElemID = '_kli';
PPSMA.Kpi.kpiComponentSize = 4;
PPSMA.Kpi.kpI_GOAL_INDEX = 0;
PPSMA.Kpi.kpI_VALUE_INDEX = 1;
PPSMA.Kpi.kpI_STATUS_INDEX = 2;
PPSMA.Kpi.kpI_TREND_INDEX = 3;
PPSMA.Kpi._kpI_GOAL_NAME$p = 'Goal';
PPSMA.Kpi._kpI_VALUE_NAME$p = 'Value';
PPSMA.Kpi._kpI_STATUS_NAME$p = 'Status';
PPSMA.Kpi._kpI_TREND_NAME$p = 'Trend';
PPSMA.Measure.classThinFieldListLI = 'chgMeasTflListItem';
PPSMA.Measure.classThinFieldListCheckBox = 'chgMeasTflListCheckBox';
PPSMA.Measure.listElemID = '_mli';
PPSMA.Folder.classExCoA = 'ms-bichangemeasures-expandcollapseanchor';
PPSMA.Folder.classExCoImg = 'ms-bichangemeasures-expandcollapseimage';
PPSMA.Folder.classFolderImg = 'ms-bichangemeasures-expandcollapsefolderimage';
PPSMA.Folder.listElemID = '_fli_';
PPSMA.Folder._expandGifName$p = 'MDNCollapsed.png';
PPSMA.Folder._collapseGifName$p = 'MDNExpanded.png';
PPSMA.Folder._folderGifName$p = 'folder.gif';
PPSMA.Folder.parentChildDelimitor = '\\';
PPSMA.Folder.multipleFoldersDelimitor = ';';
PPSMA.Measures._classSelectGroup$p = 'ms-bichangemeasures-selectgroup';
PPSMA.Measures.noAxisSelected = 'none';
PPSMA.Measures.measureGroupID = 'mg_';
PPSMA.Measures.measureGroupALLID = '_ALL_';
PPSMA.Measures.measureGroupDropDownComboxBoxID = 'MeasureGroupsDropDownSelect';
PPSMA.Measures.measureGroupDropDownComboxBoxWrapperDivID = 'MeasureGroupsDropDownSelectWrapperDiv';
PPSMA.Measures.folderCount = 0;
PPSMA.AnalyzeInDecompHelper._decompWindowName$p = 'DecompWindow';
PPSMA.AnalyzeInDecompHelper._windowAttr$p = ',resizable=yes,scrollbars=no,toolbar=no';
PPSMA.AnalyzeInDecompHelper._defaultWidth$p = 1000;
PPSMA.AnalyzeInDecompHelper._defaultHeight$p = 600;
PPSMA.OlapViewContext._toolbarIDprefix$p = 'OTB';
PPSMA.OlapViewContext._olapDrillThrough$p = 'OLAPDrillThrough';
PPSMA.OlapViewContext.globalIds = {};
PPSMA.OlapViewContext.menU_METADATA_HEADER_TYPE = 'MenuMetadata-Type';
PPSMA.ChangeMeasure._okBtn$p = '1';
PPSMA.ChangeMeasure._cancelBtn$p = '2';
PPSMA.ChangeMeasure._nonexistentUniqueMeausureName$p = 'deadbeefdeadbeefdeadbeef';
PPSMA.ChangeMeasure._classPositioningParent$p = 'ms-bichangemeasures-positioningparent';
PPSMA.ChangeMeasure._classChangeMeasureMain$p = 'ms-bichangemeasures-main';
PPSMA.ChangeMeasure._classChangeMeasureContent$p = 'ms-bichangemeasures-content';
PPSMA.ChangeMeasure._classDragBoxItems$p = 'ms-bichangemeasures-dragboxitems';
PPSMA.ChangeMeasure._classDragBoxItemSelected$p = 'ms-bichangemeasures-dragboxselecteditem';
PPSMA.ChangeMeasure._classDragBoxItemsLink$p = 'ms-bichangemeasures-dragboxitemslink';
PPSMA.ChangeMeasure._classDragBoxButtonsBar$p = 'ms-bichangemeasures-dragboxitemsbuttonbar';
PPSMA.ChangeMeasure._classDragBoxItemsUpImage$p = 'ms-bichangemeasures-dragboxitemimageup';
PPSMA.ChangeMeasure._classDragBoxItemsDownImage$p = 'ms-bichangemeasures-dragboxitemimagedown';
PPSMA.ChangeMeasure._classDragBoxItemsDeleteImage$p = 'ms-bichangemeasures-dragboxitemimagedelete';
PPSMA.ChangeMeasure._tabMover$p = 'ms-bichangemeasures-tabmover';
PPSMA.ChangeMeasure._tabMoverLink$p = 'ms-bichangemeasures-tabmoverlink';
PPSMA.ChangeMeasure._classApplyCustom$p = 'ms-bichangemeasures-thinfieldlistapply';
PPSMA.ChangeMeasure._classCancelCustom$p = 'ms-bichangemeasures-thinfieldlistcancel';
PPSMA.ChangeMeasure._dragContainer$p = 'ms-bichangemeasures-dragcontainer';
PPSMA.ChangeMeasure._measureList$p = 'ms-bichangemeasures-measurelist';
PPSMA.ChangeMeasure._fieldList$p = 'ms-bichangemeasures-fieldlist';
PPSMA.ChangeMeasure._footer$p = 'ms-bichangemeasures-thinfieldlistfooter';
PPSMA.ChangeMeasure._idChangeMeasureDialog$p = '_CmId';
PPSMA.ChangeMeasure._idOkButton$p = 'okLinkId';
PPSMA.ChangeMeasure._idCancelButton$p = 'cancelLinkId';
PPSMA.ChangeMeasure._idMeasureList$p = 'mlId';
PPSMA.ChangeMeasure.idFieldList = 'flId';
PPSMA.ChangeMeasure._idMeasureNameDivLink$p = 'msNameId';
PPSMA.ChangeMeasure._idUpLink$p = 'upLinkId';
PPSMA.ChangeMeasure._idmuLinkImage$p = 'muLinkImage';
PPSMA.ChangeMeasure._idDownLink$p = 'downLinkId';
PPSMA.ChangeMeasure._idmdLinkImage$p = 'mdLinkImage';
PPSMA.ChangeMeasure._idRemoveLink$p = 'removelinkId';
PPSMA.ChangeMeasure._idControlButtonsDiv$p = 'udrControlButtonsDiv';
PPSMA.ChangeMeasure._idFooterDiv$p = 'cmfId';
PPSMA.ChangeMeasure._idremoveMeasureImageLink$p = 'rmLinkImage';
PPSMA.ChangeMeasure._idDragContainer$p = '_DragContainer';
PPSMA.ChangeMeasure._idtabMoverDiv$p = 'tabMoverDivId';
PPSMA.ChangeMeasure._idtabMoverLink$p = 'tabMoverLinkId';
PPSMA.ChangeMeasure._idaboveFooterLayoutDiv$p = 'aboveFooterLayoutDivId';
PPSMA.FilterDialogConstants.clearButtonTI = 1750;
PPSMA.FilterDialogConstants.applyButtonTI = 2000;
PPSMA.FilterDialogConstants.cancelButtonTI = 2500;
PPSMA.FilterDialogConstants.wrapFocusTI = 3000;
PPSMA.ValueFilterDialogConstants.tupleOptionsTI = 100;
PPSMA.ValueFilterDialogConstants.filterOptionsTI = 500;
PPSMA.ValueFilterDialogConstants.input1TI = 1000;
PPSMA.ValueFilterDialogConstants.input2TI = 1500;
PPSMA.TopFilterDialogConstants.filterOptionsTI = 100;
PPSMA.TopFilterDialogConstants.inputTI = 500;
PPSMA.TopFilterDialogConstants.varOptionsTI = 1000;
PPSMA.TopFilterDialogConstants.tupleOptionsTI = 1500;
PPSMA.FilterDialog.margiN_LEFT = 15;
PPSMA.FilterDialog.classFilterMain = 'ms-bifilter-main';
PPSMA.FilterDialog.classFilterParentBorder = 'ms-bifilter-parentborder';
PPSMA.FilterDialog.classFilterDialogContents = 'ms-bifilter-dialogcontents';
PPSMA.FilterDialog.classFilterLabelDiv = 'ms-bifilter-labeldiv';
PPSMA.FilterDialog.classTopFilterLabelAndWarningDiv = 'ms-bitfilter-labelwrndiv';
PPSMA.FilterDialog.classFilterLabel = 'ms-bifilter-label';
PPSMA.FilterDialog.classFilterLabelForByDiv = 'ms-bifilter-labelforbysizer';
PPSMA.FilterDialog.classFilterLabelForBy = 'ms-bifilter-labelforby';
PPSMA.FilterDialog.classFilterLabelForBetween = 'ms-bifilter-labelforbetween';
PPSMA.FilterDialog.classTFilterInputDiv = 'ms-bitfilter-inputsdiv';
PPSMA.FilterDialog.classVFilterInputDiv = 'ms-bivfilter-inputsdiv';
PPSMA.FilterDialog.classFilterClear = 'ms-bifilter-clear';
PPSMA.FilterDialog.classFilterApplyCustom = 'ms-bifilter-apply';
PPSMA.FilterDialog.classFilterCancelCustom = 'ms-bifilter-cancel';
PPSMA.FilterDialog.classFilterWrapFocusLink = 'ms-bifilter-wrapfocus';
PPSMA.FilterDialog.classFilterFooter = 'ms-bifilter-footer';
PPSMA.FilterDialog.classFilterTupleDropdown = 'ms-bifilter-tupledropdown';
PPSMA.FilterDialog.classTopFilterTupleDropdown = 'ms-bifilter-topfiltertupledropdown';
PPSMA.FilterDialog.classTopFilterTupleDropdownDiv = 'ms-bifilter-topfiltertupledropdownsizer';
PPSMA.FilterDialog.classFilterTopOptionsDropdown = 'ms-bifilter-topoptionsdropdown';
PPSMA.FilterDialog.classFilterTopOptionsDropdownDiv = 'ms-bifilter-topoptionsdropdownsizer';
PPSMA.FilterDialog.classFilterTopVarDropdown = 'ms-bifilter-topvardropdown';
PPSMA.FilterDialog.classFilterTopVarDropdownDiv = 'ms-bifilter-topvardropdownsizer';
PPSMA.FilterDialog.classFilterValueOptionsDropdown = 'ms-bifilter-valueoptionsdropdown';
PPSMA.FilterDialog.classFilterValueAndOrDropdown = 'ms-bifilter-valueandordropdown';
PPSMA.FilterDialog.classNumericValidationWarningDiv = 'ms-bifilter-numericvalidationwarningdiv';
PPSMA.FilterDialog.classTopNumericValidationWarningDiv = 'ms-bitfilter-numericvalidationwarningdiv';
PPSMA.FilterDialog.classFilterItemHidden = 'ms-bifilter-itemhidden';
PPSMA.FilterDialog.classTopFilterInput = 'ms-bitfilter-input';
PPSMA.FilterDialog.classTopFilterInputDiv = 'ms-bitfilter-inputsizer';
PPSMA.FilterDialog.classValueFilterInput = 'ms-bifilter-valuefilterinput';
PPSMA.FilterDialog.classValueFilterInputParent = 'ms-bifilter-valuefilterinputparent';
PPSMA.FilterDialog.classValueFilterInputSizer = 'ms-bifilter-valuefilterinputsizer';
PPSMA.FilterDialog.classFilterInputForBetween = 'ms-bifilter-inputforbetween';
PPSMA.FilterDialog.classFilterInputForBetween2 = 'ms-bifilter-inputforbetween2';
PPSMA.FilterDialog.classFilterWarningOn = 'ms-bifilter-warnon';
PPSMA.FilterDialog.classFilterWarningOff = 'ms-bifilter-warnoff';
PPSMA.FilterDialog.classFilterWarningLabel = 'ms-bifilter-warninglabel';
PPSMA.FilterDialog.classFilterWarningLabelDiv1 = 'ms-bifilter-warninglabeldiv1';
PPSMA.FilterDialog.classFilterWarningLabelDiv2 = 'ms-bifilter-warninglabeldiv2';
PPSMA.FilterDialog.classClearFilterImage = 'ms-bifilter-clearimage';
PPSMA.FilterDialog.msFormValidation = 'ms-formvalidation';
PPSMA.FilterDialog.idValueFilterDialog = 'IDValueFilterDialog';
PPSMA.FilterDialog.idTopFilterDialog = 'IDTopFilterDialog';
PPSMA.FilterDialog.idFilterDialogContents = 'IDFilterDialogContents';
PPSMA.FilterDialog.idFilterApply = 'IDFilterApply';
PPSMA.FilterDialog.idFilterCancel = 'IDFilterCancel';
PPSMA.FilterDialog.idFilterFooter = 'IDFilterFooter';
PPSMA.FilterDialog.idTopFilterTupleDropdown = 'IDTopFilterTupleDropdown';
PPSMA.FilterDialog.idValueFilterTupleDropdown = 'IDValueFilterTupleDropdown';
PPSMA.FilterDialog.idValueFilterOptionsDropdown = 'IDValueFilterOptionsDropdown';
PPSMA.FilterDialog.idTopFilterOptionsDropdown = 'IDTopFilterOptionsDropdown';
PPSMA.FilterDialog.idTopVarOptionsDropdown = 'IDTopVarOptionsDropdown';
PPSMA.FilterDialog.idNumericValidationWarning = 'IDNumericValidationWarning';
PPSMA.FilterDialog.idValueFilterInputsAndLabelWrapper = 'IDValueFilterInputsAndLabelWrapper';
PPSMA.FilterDialog.idValueFilterInput1 = 'IDValueFilterInput1';
PPSMA.FilterDialog.idValueFilterInput2 = 'IDValueFilterInput2';
PPSMA.FilterDialog.idValueFilterAndLabel = 'IDValueFilterAndLabel';
PPSMA.FilterDialog.idTopFilterInput = 'IDTopFilterInput';
PPSMA.FilterDialog.idTopFilterInputDiv = 'IDTopFilterInputDiv';
PPSMA.FilterDialog.idValueFilterInputDiv = 'IDValueFilterInputDiv';
PPSMA.FilterDialog.idClearFilterBtn = 'IDClearFilterBtn';
PPSMA.FilterDialog.idClearFilterBtnImage = 'IDClearFilterBtnImage';
PPSMA.FilterDialog.idClearFilterText = 'IDClearFilterText';
PPSMA.FilterDialog.idFilterByLevelDisplay = 'IDFilterByLevelDisplay';
AjaxFX.HistoryManager._historyManager = null;
AjaxFX.HistoryManager._eventKey_Navigated$p = 'Navigated';

function getResFolder()
{ULSM53:;
    return g_resFolder;
}

function _ovc(s)
{ULSM53:;
	return PPSMA.OlapViewContext.globalIds[s];
}

function _ovrc(s)
{ULSM53:;
	return PPSMA.OlapViewContext.globalIds[s].get_reportContext();
}

function _ovtc(s)
{ULSM53:;
	return PPSMA.OlapViewContext.globalIds[s].get_toolbar();
}

function isValidBrowser()
{ULSM53:;
	return (browseris.ie55up || browseris.nav6up || browseris.safari125up);
}

function touchEnabled()
{ULSM53:;
	return ( "ontouchstart" in window || window.navigator.msPointerEnabled );
}

function isSilverlightInstalled(version)
{ULSM53:;
	return Silverlight.isInstalled(version);
}

function byid(id) {ULSM53:; return document.getElementById(id); }
function newE(tag) {ULSM53:; return document.createElement(tag); }
function wpf() {ULSM53:; return document.forms[MSOWebPartPageFormName]; }
function startReplacement() { }

Type.registerNamespace('PPSMA');
PPSMA.Menu = function () { };

PPSMA.Menu.AttachEvent = function PPSMA_Menu$AttachEvent(eventName, eventFunc, el)
{ULSM53:;
    if (!el) el = window;
    if (eventName == 'domLoad')
    {
        eventName = el.addEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
    }
    if (typeof (eventFunc) == 'string') eventFunc = new Function(eventFunc);
    if (el.addEventListener) el.addEventListener(eventName, eventFunc, false);
    else el.attachEvent('on' + eventName, eventFunc);
}
PPSMA.Menu.CancelEvent = function PPSMA_Menu$CancelEvent(e)
{ULSM53:;
    e.cancelBubble = true;
    e.returnValue = false;
}
PPSMA.Menu.GetEventSrcElement = function PPSMA_Menu$GetEventSrcElement(e)
{ULSM53:;
    return e.srcElement;
}
PPSMA.Menu.GetEventKeyCode = function PPSMA_Menu$GetEventKeyCode(e)
{ULSM53:;
    return e.keyCode;
}
PPSMA.Menu.GetInnerText = function PPSMA_Menu$GetInnerText(e)
{ULSM53:;
    return e.innerText;
}

// Menu stuff

var kfnDisableEvent = new Function("return false");

// oMaster structure
// oMaster is stored in a MENU tag directly on the document.body tag
// When menu is displayed, the oMaster structure is first saved into the oMaster._oContents property.
// Then it is fixed up and stored in the oMaster._oRoot property.
// Then it is converted to the actual display HTML (DIV/SPAN tags) and is added as a child to the document.body tag.
// If we are in accessibility mode, we don't use the _arrPopup, _arrSelected, and _nLevel properties.
// We use the _accessibleMenu property instead.
// oMaster properties:
//
// DOMElement   _oParent: The reference to the HTML element in the original page this menu is attached to 
//                        (the one the user clicked on).  For example, the oParent element for the grid would be <TD>
// DOMElement   _oContents: A copy of the DOMElements contained in the oMaster object, surrounded by a <SPAN> tag.  
//                          For example, the _oContents object will be a DOMElement encapsulating 
//                          <SPAN><MENU>...</MENU></SPAN>
// DOMElement   _oRoot: The fixed up version of _oContents.  It will have redundant separators removed, for example.
// int          _nLevel: The current popup menu level displayed.  If only the root shows, it would be 0.  If the first
//                       submenu is displayed, it would be 1, etc.
// DOMElement[] _arrPopup: The array of actual displayed HTML menus, one for each level displayed.  This is the one
//                         shown to the user, and starts with a <DIV> tag.
// DOMElement[] _arrSelected: The array of selected items in the displayed menus.  There will be one less member in the
//                            _arrSelected array than the _arrPopup array.  For example, _arrSelected[0] is the element
//                            selected by the user in the main menu to display menu _arrPopup[1].  There won't be an entry in
//                            _arrSelected[_nLevel] because if the user selects it, the menu disappears anyway.
// Window       _accessibleMenu: The window object corresponding to the popup window containing the accessible markup
//                               version of the menu.
// bool          _initialized: True after the Init method is called.
// function      _onDestroy: The method to be executed when the menu is destroyed.
// string        _menuType: Either menu or tooltip.

// bool          _fIsRtL: True if menu is right to left.
// bool          _fLargeIconMode: True if large icons are used instead of the standard 16x16.
// bool          _fCompactItemsWithoutIcons: True if you want smallest menus displayed.
// string        _wzPrefixID: Unique prefix to use to make all the menu's unique IDs.
// string        _wzMenuStyle: The style class for the menu when generating the display HTML
// string        _wzChkMrkPath: The URL path to the check mark image
// string        _wzMArrPath: The URL path to the arrow image
// string        _wzMArrPathRtL: The URL path to the right to left arrow image

// oPopup properties:
//
// string     _backgroundFrameId: Id of the IFRAME tag for IE.
// string     _backgroundDivId: Id of the DIV tag for menu placement for IE.
// bool       isMenu: Always set to true.
// DOMElement master: Reference to oMaster object.
// int        level: Level of this popup menu.
// string     dir: Menu direction.  Either "rtl" or "ltr".
// bool       flipped: True if popup menu is on the wrong side of the parent menu (for ltr, flipped would be on the left).
// int        timeoutID: Id of the DOM timer for hiding the submenu on timeout.
// int        intervalID: Id of the DOM timer for polling if the dynamic submenu is populated.




// g_lastMenu points to the last (or currently) displayed oMaster object
PPSMA.Menu.g_lastMenu = null;
PPSMA.Menu.g_uniqueNumber = 0;
PPSMA.Menu.g_bIgnoreTouchUp = false;

PPSMA.Menu.IsAccessibilityFeatureEnabledProxy = function PPSMA_Menu$IsAccessibilityFeatureEnabledProxy()
{ULSM53:;
    if (typeof (IsAccessibilityFeatureEnabled) != "undefined")
        return IsAccessibilityFeatureEnabled();
    return false;
}
PPSMA.Menu.GetType = function PPSMA_Menu$GetType(oMaster)
{ULSM53:;
    if (!oMaster) return "menu";
    else return oMaster._menuType;
}

PPSMA.Menu.Show = function PPSMA_Menu$Show(oMaster, oParent, fForceRefresh, fFlipTop, xOffset, yOffset) {ULSM53:;

    if ("ontouchstart" in window) {
        PPSMA.Menu.g_bIgnoreTouchUp = true;
    }

    if (!(browseris.ie55up || browseris.nav6up || browseris.safari125up))
        return false;
    PPSMA.Menu.Hide();
    PPSMA.Menu.Init(oMaster);
    oMaster._oParent = oParent;
    oMaster._fIsRtL = PPSMA.Menu.IsElementRtl(oMaster._oParent);
    if ((browseris.ie || browseris.nav) && PPSMA.Menu.IsAccessibilityFeatureEnabledProxy()) {
        var menu = null;
        if (oParent.foa) {
            menu = byid(oParent.foa);
            if (!menu) {
                menu = eval(oParent.foa);
            }
        }
        if (menu && menu.onblur) {
            menu.onblur();
        }
        PPSMA.Menu.RenderAccessibleMenu(oMaster, fForceRefresh);
        PPSMA.Menu.g_lastMenu = oMaster;
    }
    else {
        PPSMA.Menu.SetBodyEventHandlers(null, false);
        PPSMA.Menu.SetBodyTouchEndEventHandler(null);
        PPSMA.Menu.RemoveBodyMouseScrollEventHandlers(PPSMA.Menu.HandleDocumentBodyScroll, false);
        PPSMA.Menu.AssureId(oParent);
        var result = PPSMA.Menu.ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, xOffset, yOffset);
        PPSMA.Menu.g_lastMenu = oMaster;
        PPSMA.Menu.NavigateToMenu(oMaster);
        PPSMA.Menu.SetBodyEventHandlers(PPSMA.Menu.HandleDocumentBodyClick, PPSMA.Menu.GetType(oMaster) == "tooltip");
        PPSMA.Menu.SetBodyTouchEndEventHandler(PPSMA.Menu.HandleDocumentBodyTouchEnd);
        PPSMA.Menu.SetBodyMouseScrollEventHandlers(PPSMA.Menu.HandleDocumentBodyScroll, PPSMA.Menu.GetType(oMaster) == "tooltip");
    }
    if (browseris.ie) {
        if (window.event)
            window.event.cancelBubble = true;
    }
    return false;
}
PPSMA.Menu.Hide = function PPSMA_Menu$Hide()
{ULSM53:;
    PPSMA.Menu.ClearTimeoutToHideMenu();
    var oMaster = PPSMA.Menu.g_lastMenu;
    if (oMaster)
    {
        if (oMaster._accessibleMenu)
        {
            PPSMA.Menu.CloseAccessibleMenu(oMaster);
        }
        else
        {
            PPSMA.Menu.HideMenu(oMaster);
        }
    }
    PPSMA.Menu.g_lastMenu = null;
}
PPSMA.Menu.IsOpen = function PPSMA_Menu$IsOpen(oMaster)
{ULSM53:;
    if (!oMaster || !oMaster._initialized)
        return false;
    var result = PPSMA.Menu.IsOpenInternal(oMaster);
    return result;
}
PPSMA.Menu.Item = function PPSMA_Menu$Item(oMaster, nLevel, nIndex)
{ULSM53:;
    PPSMA.Menu.Init(oMaster);
    var result = PPSMA.Menu.GetItem(oMaster, nLevel, nIndex);
    return result;
}
PPSMA.Menu.TrapMenuClick = function PPSMA_Menu$TrapMenuClick(e)
{ULSM53:;
    if (e)
    {
        PPSMA.Menu.CancelEvent(e);
    }
    return false;
}
PPSMA.Menu.SetBodyEventHandlers = function PPSMA_Menu$SetBodyEventHandlers(h, handleContextMenu)
{ULSM53:;
    //document.onclick=h;
    //if (handleContextMenu) 
    //document.oncontextmenu=h;

    if ("ontouchstart" in window)
    {
        document.ontouchstart = h;
    }
    else
    {
        document.onmousedown = h;
    }
}
PPSMA.Menu.SetBodyMouseScrollEventHandlers = function PPSMA_Menu$SetBodyMouseScrollEventHandlers(h, handleContextMenu) {ULSM53:;

    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', h, false);
    }
    window.onmousewheel = document.onmousewheel = h;
}
PPSMA.Menu.RemoveBodyMouseScrollEventHandlers = function PPSMA_Menu$RemoveBodyMouseScrollEventHandlers(h, handleContextMenu) {ULSM53:;

    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', h, false);
    }
    window.onmousewheel = document.onmousewheel = null;
}
PPSMA.Menu.SetBodyTouchEndEventHandler = function PPSMA_Menu$SetBodyTouchEndEventHandler(h)
{ULSM53:;
    if ("ontouchend" in window)
    {
        document.ontouchend = h;
    }
}
PPSMA.Menu.HandleDocumentBodyTouchEnd = function PPSMA_Menu$HandleDocumentBodyTouchEnd(e) {ULSM53:;
    return;
}
PPSMA.Menu.HandleDocumentBodyClick = function PPSMA_Menu$HandleDocumentBodyClick(e) {ULSM53:;
    var currEvent = PPSMA.EventsEx.getEvent(e);
    if (PPSMA.Menu.g_lastMenu) {
        PPSMA.Menu.HideMenu(PPSMA.Menu.g_lastMenu);
    }
    return false;
}
PPSMA.Menu.HandleDocumentBodyScroll = function PPSMA_Menu$HandleDocumentBodyScroll(e) {ULSM53:;
    var currEvent = PPSMA.EventsEx.getEvent(e);
    if (PPSMA.Menu.g_lastMenu) {
        PPSMA.Menu.HideMenu(PPSMA.Menu.g_lastMenu);
    }
    return false;
}
PPSMA.Menu.GetEventPopup = function PPSMA_Menu$GetEventPopup(e)
{ULSM53:;
    var obj = PPSMA.Menu.GetEventSrcElement(e);
    while (obj)
    {
        if (obj.master)
            return obj;
        obj = obj.parentNode;
    }
    return null;
}
PPSMA.Menu.GetUniqueNumber = function PPSMA_Menu$GetUniqueNumber()
{ULSM53:;
    PPSMA.Menu.g_uniqueNumber++;
    return PPSMA.Menu.g_uniqueNumber;
}
PPSMA.Menu.Init = function PPSMA_Menu$Init(oMaster)
{ULSM53:;
    if (oMaster._initialized)
        return;
    oMaster._initialized = true;
    oMaster._wzPrefixID = "mp" + PPSMA.Menu.GetUniqueNumber();
    if (!oMaster.id)
        oMaster.id = oMaster._wzPrefixID + "_id";
    oMaster._nLevel = 0;
    oMaster._arrPopup = new Array();
    oMaster._arrSelected = new Array();
    if (typeof (oMaster._onDestroy) == "undefined")
        oMaster._onDestroy = null;
    oMaster._fLargeIconMode = false;
    oMaster._fCompactItemsWithoutIcons = false;
}
PPSMA.Menu.PrepContents = function PPSMA_Menu$PrepContents(oMaster)
{ULSM53:;
    oMaster._fLargeIconMode = (oMaster.getAttribute("largeIconMode") == "true");
    oMaster._fCompactItemsWithoutIcons = (oMaster.getAttribute("CompactMode") == "true");
    if (!browseris.safari)
    {
        oMaster._oContents = document.createElement("span");
        oMaster._oContents.style.display = "none";
        oMaster._oContents.innerHTML = oMaster.innerHTML;
    }
    else
    {
        oMaster._oContents = oMaster.cloneNode(true);
        oMaster._oContents.style.display = "none";
    }
    if (PPSMA.Menu.GetType(oMaster) == "tooltip")
    {
        oMaster._wzMenuStyle = "bsm-ToolTipUI";
    }
    else
    {
        if (oMaster._fLargeIconMode)
        {
            if (oMaster._fIsRtL)
                oMaster._wzMenuStyle = "bsm-MenuUILargeRtL";
            else
                oMaster._wzMenuStyle = "bsm-MenuUILarge";
        }
        else
        {
            if (oMaster._fIsRtL)
                oMaster._wzMenuStyle = "bsm-MenuUIRtL";
            else
                oMaster._wzMenuStyle = "bsm-MenuUI";
        }
    }
    oMaster._wzChkMrkPath = g_resFolder + "ChkMrk.gif";
    oMaster._wzMArrPath = g_resFolder + "MArr.gif";
    oMaster._wzMArrPathRtL = g_resFolder + "MArrRtL.gif";
}
PPSMA.Menu.FixUpMenuStructure = function PPSMA_Menu$FixUpMenuStructure(oMaster)
{ULSM53:;
    var menuNodes = oMaster._oRoot.childNodes;
    var lastGroupId = null;
    var lastMenuSeparatorRow = null;
    for (var nIndex = 0; nIndex < menuNodes.length; nIndex++)
    {
        var menuRow = menuNodes[nIndex];
        if (menuRow.nodeType != 1)
            continue;
        var deleteRow = false;
        var displayNone = (menuRow.style && menuRow.style.display === 'none');
        var jsHidden = PPSMA.Menu.FIsHidden(menuRow);
        if (displayNone || jsHidden)
        {
            deleteRow = true;
        }
        else if (PPSMA.Menu.FIsIType(menuRow, "separator"))
        {
            if (lastMenuSeparatorRow || nIndex == 0)
                deleteRow = true;
            else
                lastMenuSeparatorRow = menuRow;
        }
        else
        {
            var cGroupId = menuRow.getAttribute("menuGroupId");
            if (cGroupId != lastGroupId &&
				!lastMenuSeparatorRow &&
				nIndex != 0)
            {
                var lastMenuSeparatorRow = document.createElement("ie:menuitem");
                lastMenuSeparatorRow.setAttribute("type", "separator");
                oMaster._oRoot.insertBefore(lastMenuSeparatorRow, menuRow);
            }
            else
            {
                lastMenuSeparatorRow = null;
            }
            lastGroupId = cGroupId;
        }
        if (deleteRow)
        {
            menuRow.parentNode.removeChild(menuRow);
            nIndex--;
        }
    }
    if (lastMenuSeparatorRow)
        lastMenuSeparatorRow.parentNode.removeChild(lastMenuSeparatorRow);
}
PPSMA.Menu.IsElementRtl = function PPSMA_Menu$IsElementRtl(oCurrent)
{ULSM53:;
    while (oCurrent && oCurrent.tagName)
    {
        var dir = oCurrent.getAttribute("dir");
        if ((dir || dir === "") && oCurrent.style)
        {
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
PPSMA.Menu.AdjustScrollPosition = function PPSMA_Menu$AdjustScrollPosition(element, relativeToElement, result)
{ULSM53:;
    var oCurrent = element;
    while (oCurrent &&
		oCurrent != relativeToElement &&
		oCurrent != element.offsetParent &&
		oCurrent.tagName &&
		oCurrent.tagName.toLowerCase() != "body" &&
		oCurrent.tagName.toLowerCase() != "html")
    {
        if (oCurrent.scrollWidth > oCurrent.clientWidth &&
			oCurrent.offsetWidth >= oCurrent.clientWidth &&
			oCurrent.clientWidth != 0)
        {
            if (!PPSMA.Menu.IsElementRtl(oCurrent))
            {
                if (oCurrent.scrollLeft > 0)
                    result.x -= oCurrent.scrollLeft;
            }
            else
            {
                result.x += (oCurrent.scrollWidth - oCurrent.offsetWidth - oCurrent.scrollLeft);
            }
        }
        if (oCurrent.scrollTop > 0)
            result.y -= oCurrent.scrollTop;
        oCurrent = oCurrent.parentNode;
    }
}
PPSMA.Menu.GetElementPosition = function PPSMA_Menu$GetElementPosition(element, relativeToElement)
{ULSM53:;
    var result = new Object();
    result.x = 0;
    result.y = 0;
    result.width = 0;
    result.height = 0;
    if (element.offsetParent)
    {
        var parent = element;
        while (parent &&
			parent != relativeToElement)
        {
            result.x += parent.offsetLeft;
            result.y += parent.offsetTop;
            PPSMA.Menu.AdjustScrollPosition(parent, relativeToElement, result);
            var parentTagName = parent.tagName.toLowerCase();
            if (parentTagName != "table" &&
				parentTagName != "body" &&
				parentTagName != "html" &&
				parentTagName != "div" &&
				parent.clientTop &&
				parent.clientLeft)
            {
                result.x += parent.clientLeft;
                result.y += parent.clientTop;
            }
            if (browseris.ie && parentTagName == "td")
            {
                if (parent.runtimeStyle.borderTopStyle != "none" ||
				    parent.currentStyle.borderTopStyle != "none")
                {
                    var shift;
                    if (parent.runtimeStyle.borderTopWidth != "")
                    {
                        shift = parseInt(parent.runtimeStyle.borderTopWidth);
                    }
                    else
                    {
                        shift = parseInt(parent.currentStyle.borderTopWidth);
                    }
                    if (!isNaN(shift))
                    {
                        result.y += shift;
                    }
                }
                if (parent.runtimeStyle.borderLeftStyle != "none" ||
				    parent.currentStyle.borderLeftStyle != "none")
                {
                    var shift;
                    if (parent.runtimeStyle.borderLeftWidth != "")
                    {
                        shift = parseInt(parent.runtimeStyle.borderLeftWidth);
                    }
                    else
                    {
                        shift = parseInt(parent.currentStyle.borderLeftWidth);
                    }
                    if (!isNaN(shift))
                    {
                        result.x += shift;
                    }
                }
            }
            parent = parent.offsetParent;
        }
    }
    else if (element.left && element.top)
    {
        result.x = element.left;
        result.y = element.top;
    }
    else
    {
        if (element.x)
        {
            result.x = element.x;
        }
        if (element.y)
        {
            result.y = element.y;
        }
    }
    if (element.offsetWidth && element.offsetHeight)
    {
        result.width = element.offsetWidth;
        result.height = element.offsetHeight;
    }
    else if (element.style && element.style.pixelWidth && element.style.pixelHeight)
    {
        result.width = element.style.pixelWidth;
        result.height = element.style.pixelHeight;
    }
    return result;
}
PPSMA.Menu.InternalShow = function PPSMA_Menu$InternalShow(oMaster, oParent, x, y, fFlipTop) {ULSM53:;
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    var nIndex;
    var fTopLevel;
    var oInnerDiv;
    if (!oMaster._oContents) PPSMA.Menu.PrepContents(oMaster);
    if (!oMaster._oContents || PPSMA.Menu.IsOpenInternal(oMaster)) return;
    if (!oPopup && !oMaster._oRoot) {
        oMaster._nLevel = 0;
        oMaster._oRoot = oMaster._oContents;
    }
    fTopLevel = oMaster._nLevel == 0;
    fFlipTop = fFlipTop && fTopLevel;
    if (!oPopup) {
        oMaster._arrPopup[oMaster._nLevel] = document.createElement("DIV");
        oPopup = oMaster._arrPopup[oMaster._nLevel];
        oPopup.isMenu = true;
        oPopup.master = oMaster;
        oPopup.level = oMaster._nLevel;
        oInnerDiv = document.createElement("DIV");
        var oTable = document.createElement("table");
        var oTBody = document.createElement("tbody");
        oInnerDiv.isInner = true;
        oPopup.style.position = "absolute";
        oInnerDiv.style.overflow = "visible";
        oTable.appendChild(oTBody);
        oInnerDiv.appendChild(oTable);
        oPopup.appendChild(oInnerDiv);
        if (oMaster._fIsRtL)
            oPopup.setAttribute("dir", "rtl");
        else
            oPopup.setAttribute("dir", "ltr");
        document.body.appendChild(oPopup);
        PPSMA.Menu.FixUpMenuStructure(oMaster);
        var id = 0;
        var childNodeLength = oMaster._oRoot.childNodes.length;
        for (nIndex = 0; nIndex < childNodeLength; nIndex++) {
            var oNode = oMaster._oRoot.childNodes[nIndex];
            if (oNode.nodeType != 1)
                continue;
            if (!PPSMA.Menu.FIsIType(oNode, "label")) {
                var oItem = PPSMA.Menu.CreateMenuItem(oMaster, oNode, PPSMA.Menu.MakeID(oMaster, oMaster._nLevel, id));
                if (oItem) oTBody.appendChild(oItem);
                id++;
            }
        }
        if (PPSMA.Menu.GetType(oMaster) == "tooltip") {
            oPopup.className = "bsm-TooltipUIPopupBody";
        }
        else {
            oPopup.className = "bsm-MenuUIPopupBody ms-core-menu-box";
        }
        oTable.className = oMaster._wzMenuStyle;
        oTable.cellSpacing = 0;
        oTable.cellPadding = 0;
        oPopup.oncontextmenu = kfnDisableEvent;
        oPopup.ondragstart = kfnDisableEvent;
        oPopup.onselectstart = kfnDisableEvent;
        if (!oParent._onmouseover)
            oParent._onmouseover = oParent.onmouseover;
        if (!oParent._onmouseout)
            oParent._onmouseout = oParent.onmouseout;
        if (!oParent._onmouseup)
            oParent._onmouseup = oParent.onmouseup;
        if (!oParent._onclick)
            oParent._onclick = oParent.onclick;
        if (!oParent._oncontextmenu)
            oParent._oncontextmenu = oParent.oncontextmenu;
        if (browseris.nav) {
            oPopup.onkeypress = function (e) {ULSM53:; return false; };
            oPopup.onkeyup = function (e) {ULSM53:; return false; };
            oPopup.onmousedown = function (e) {ULSM53:; PPSMA.Menu.TrapMenuClick(e); return false; };
            oPopup.onmouseover = function (e) {ULSM53:; PPSMA.Menu.PopupMouseOver(e); return false; };
            oPopup.onmouseout = function (e) {ULSM53:; PPSMA.Menu.PopupMouseLeave(e); return false; };
            if ("ontouchstart" in window) {
                oPopup.ontouchstart = function (e) {ULSM53:; PPSMA.Menu.g_bIgnoreTouchUp = false; e.cancelBubble = true; return true; };
                oPopup.ontouchend = function (e) {ULSM53:; e.cancelBubble = true; return true; };
            }

            if (PPSMA.Menu.GetType(oMaster) != "tooltip") {
                oPopup.onkeydown = function (e) {ULSM53:; PPSMA.Menu.PopupKeyDown(e); return false; };
                oPopup.onclick = function (e) {ULSM53:; PPSMA.Menu.PopupMouseClick(e); PPSMA.Menu.TrapMenuClick(e); return false; };

                oParent.onmouseup = function (e) {ULSM53:; PPSMA.Menu.TrapMenuClick(e); return false; };
                //oParent.onmousedown=function(e) {ULSM53:;PPSMA.Menu.TrapMenuClick(e); return false; };
                oParent.onclick = function (e) {ULSM53:; PPSMA.Menu.TrapMenuClick(e); return false; };
                oParent.oncontextmenu = function (e) {ULSM53:; PPSMA.Menu.TrapMenuClick(e); return false; };
            }
            else {
                oPopup.onclick = function (e) {ULSM53:; PPSMA.Menu.TrapMenuClick(e); return false; };
            }
            oParent.onmouseover = function (e) {ULSM53:; PPSMA.Menu.PopupMouseOverParent(e); return false; };
            oParent.onmouseout = function (e) {ULSM53:; PPSMA.Menu.PopupMouseLeaveParent(e); return false; };
        }
        else {
            oPopup.onmousedown = new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
            oPopup.onmouseover = new Function("PPSMA.Menu.PopupMouseOver(event); return false;");
            oPopup.onmouseout = new Function("PPSMA.Menu.PopupMouseLeave(event); return false;");
            if ("ontouchstart" in window) {
                oPopup.ontouchstart = function (e) {ULSM53:; e.cancelBubble = true; return true; };
            }

            if (PPSMA.Menu.GetType(oMaster) != "tooltip") {
                oPopup.onkeydown = new Function("PPSMA.Menu.PopupKeyDown(event); return false;");
                oPopup.onclick = new Function("PPSMA.Menu.PopupMouseClick(event); PPSMA.Menu.TrapMenuClick(event); return false;");

                oParent.onmouseup = new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
                //oParent.onmousedown=new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
                oParent.onclick = new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
                oParent.oncontextmenu = new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
            }
            else {
                oPopup.onclick = new Function("PPSMA.Menu.TrapMenuClick(event); return false;");
            }
            oParent.onmouseover = new Function("PPSMA.Menu.PopupMouseOverParent(event); return false;");
            oParent.onmouseout = new Function("PPSMA.Menu.PopupMouseLeaveParent(event); return false;");
        }
        if (fTopLevel) {
            var wzOnUnload = oMaster.getAttribute("onunloadtext");
            if (wzOnUnload) oPopup.onunload = new Function(wzOnUnload);
        }
    }
    else {
        var oOld = oMaster._arrSelected[oMaster._nLevel];
        if (oOld) PPSMA.Menu.UnselectItem(oOld);
    }
    oMaster._arrSelected[oMaster._nLevel] = null;
    var oBackFrame;
    var oBackDiv;
    if (browseris.ie) {
        var originalScrollLeft = PPSMA.SizeEx.getScrollLeft();
        oBackFrame = document.createElement("iframe");
        PPSMA.Menu.AssureId(oBackFrame);
        oBackFrame.style.position = "absolute";
        oBackFrame.style.display = "none";
        oBackFrame.scrolling = "no";
        oBackFrame.frameBorder = "0";
        document.body.appendChild(oBackFrame);
        oPopup.style.zIndex = 103;
        oPopup._backgroundFrameId = oBackFrame.id;
        oBackDiv = document.createElement("div");
        PPSMA.Menu.AssureId(oBackDiv);
        oBackDiv.style.position = "absolute";
        oBackDiv.style.display = "none";
        document.body.appendChild(oBackDiv);
        oPopup._backgroundDivId = oBackDiv.id;
        if (originalScrollLeft != PPSMA.SizeEx.getScrollLeft()) {
            PPSMA.SizeEx.setScrollLeft(originalScrollLeft);
        }
    }
    else {
        oPopup.style.zIndex = 103;
    }
    PPSMA.Menu.SetMenuPosition(oMaster, oParent, oPopup, oInnerDiv, x, y, fFlipTop, fTopLevel);
    if (browseris.ie) {
        PPSMA.Menu.SetBackFrameSize(null, oPopup);
        oPopup.onresize = new Function("PPSMA.Menu.SetBackFrameSize(event, null);");
        oBackFrame.style.display = "block";
        oBackFrame.style.zIndex = 101;
        oBackDiv.style.display = "block";
        oBackDiv.style.zIndex = 102;
    }
}
PPSMA.Menu.SetMenuPosition = function PPSMA_Menu$SetMenuPosition(oMaster, oParent, oPopup, oInnerDiv, xClick, yClick, fFlipTop, fTopLevel)
{ULSM53:;
    var maxWidth = window.screen.width;
    var maxHeight = window.screen.height;
    if (self.innerHeight)
    {
        maxWidth = self.innerWidth;
        maxHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
    {
        maxWidth = document.documentElement.clientWidth;
        maxHeight = document.documentElement.clientHeight;
    }
    else if (document.body)
    {
        maxWidth = document.body.clientWidth;
        maxHeight = document.body.clientHeight;
    }
    var nRealWidth = oPopup.scrollWidth + oPopup.offsetWidth - oPopup.clientWidth;
    var nRealHeight = oPopup.scrollHeight + oPopup.offsetHeight - oPopup.clientHeight;
    var widthTooBig = false;
    var heightTooBig = false;
    if (oMaster._fCompactItemsWithoutIcons && nRealHeight >= 375)
    {
        heightTooBig = true;
        nRealHeight = 375;
    }
    if (nRealHeight >= maxHeight - 10)
    {
        heightTooBig = true;
        nRealHeight = maxHeight - 10;
        nRealWidth += 16;
    }
    if (nRealWidth > maxWidth - 10)
    {
        widthTooBig = true;
        nRealWidth = maxWidth - 10;
    }
    if (!widthTooBig && !heightTooBig)
    {
        oInnerDiv.style.overflow = "visible";
    }
    else
    {
        if (browseris.ie)
        {
            if (widthTooBig)
            {
                oPopup.style.width = nRealWidth + "px";
                oInnerDiv.style.width = nRealWidth + "px";
                oInnerDiv.style.overflowX = "scroll";
            }
            else
            {
                oInnerDiv.style.width = nRealWidth + "px";
                oInnerDiv.style.overflowX = "visible";
            }
            if (heightTooBig)
            {
                oPopup.style.height = nRealHeight + "px";
                oInnerDiv.style.height = nRealHeight + "px";
                oInnerDiv.style.overflowY = "scroll";
            }
            else
            {
                oInnerDiv.style.height = nRealHeight + "px";
                oInnerDiv.style.overflowY = "visible";
            }
        }
        else
        {
            oPopup.style.height = nRealHeight + "px";
            oInnerDiv.style.height = nRealHeight + "px";
            oPopup.style.width = nRealWidth + "px";
            oInnerDiv.style.width = nRealWidth + "px";
            oInnerDiv.style.overflow = "auto";
        }
    }
    nRealWidth = oPopup.scrollWidth + oPopup.offsetWidth - oPopup.clientWidth;
    nRealHeight = oPopup.scrollHeight + oPopup.offsetHeight - oPopup.clientHeight;


    var EdgeLeft = 0;
    var EdgeRight = maxWidth;
    var ParentLeft = 0;
    var EdgeTop = 0;
    var ParentTop = 0;
    var nParentWidth;
    var oCurrent = oParent;
    if (browseris.safari)
    {
        if (oCurrent.tagName == "TR" && oCurrent.childNodes.length > 0)
            oCurrent = oCurrent.childNodes[0];
    }

    var p = PPSMA.Menu.GetElementPosition(oCurrent);
    ParentLeft = p.x;
    ParentTop = p.y;
    if (fTopLevel)
    {
        if (xClick == -1 && yClick == -1)
        {
            nParentWidth = p.width;
            ParentTop += p.height - 1;
        }
        else
        {
            ParentLeft += xClick;
            ParentTop += yClick;
            nParentWidth = -4;
        }
    }
    else
    {
        nParentWidth = p.width + 1;
    }

    var fTryGoDefault = !fFlipTop && !document.body.getAttribute("flipped");
    var fFlippedDefault, fFlippedNonDefault;
    var xDefault, xFlipped;
    if (!oMaster._fIsRtL)
    {
        var MenuRightDefault;
        var MenuLeftFlipped;
        if (fTopLevel)
        {
            xDefault = ParentLeft;
            MenuRightDefault = ParentLeft + nRealWidth;
            MenuLeftFlipped = ParentLeft + nParentWidth - nRealWidth;
        }
        else
        {
            xDefault = ParentLeft + nParentWidth;
            MenuRightDefault = ParentLeft + nParentWidth + nRealWidth;
            MenuLeftFlipped = ParentLeft - nRealWidth;
        }
        xFlipped = MenuLeftFlipped;
        fFlippedDefault = MenuRightDefault > EdgeRight && MenuLeftFlipped > EdgeLeft;
        fFlippedNonDefault = !(MenuLeftFlipped < EdgeLeft && MenuRightDefault < EdgeRight);
    }
    else
    {
        var MenuLeftDefault;
        var MenuRightFlipped;
        if (fTopLevel)
        {
            MenuLeftDefault = ParentLeft + nParentWidth - nRealWidth;
            MenuRightFlipped = ParentLeft + nRealWidth;
            xFlipped = ParentLeft;
        }
        else
        {
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
    if (window.pageXOffset !== undefined)
    {
        xOffset = window.pageXOffset;
        yOffset = window.pageYOffset;
    }
    else
    {
        var htmlElement = document.body.parentElement;
        if (!PPSMA.Menu.IsElementRtl(document.body))
        {
            xOffset = document.body.scrollLeft;
            xOffset += htmlElement.scrollLeft;
        }
        else
        {
            xOffset = -document.body.scrollWidth + document.body.offsetWidth + document.body.scrollLeft;
            xOffset += -htmlElement.scrollWidth + htmlElement.offsetWidth + htmlElement.scrollLeft;
        }
        yOffset = document.body.scrollTop;
        yOffset += htmlElement.scrollTop;
    }

    if (nRealWidth >= maxWidth)
    {
        x = xOffset;
    }
    else if (x - xOffset + nRealWidth >= maxWidth)
    {
        x = xOffset + maxWidth - nRealWidth;
    }
    var y;
    if (nRealHeight >= maxHeight)
    {
        y = yOffset;
    }
    else if (ParentTop + nRealHeight - yOffset >= maxHeight)
    {
        y = yOffset + maxHeight - nRealHeight;
    }
    else
    {
        y = ParentTop;
    }
    oPopup.setAttribute("flipped", fFlipTop ? fFlipped && fFlippedDefault : fFlipped);
    var posLeft = Math.max(x, xOffset);
    var posTop = Math.max(y, yOffset);
    oPopup.style.left = posLeft + "px";
    oPopup.style.top = posTop + "px";
}
PPSMA.Menu.SetBackFrameSize = function PPSMA_Menu$SetBackFrameSize(e, oPopup)
{ULSM53:;
    if (!oPopup)
        oPopup = PPSMA.Menu.GetEventSrcElement(e);
    var nRealWidth = oPopup.scrollWidth + oPopup.offsetWidth - oPopup.clientWidth;
    var nRealHeight = oPopup.scrollHeight + oPopup.offsetHeight - oPopup.clientHeight;
    var oBackFrame = document.getElementById(oPopup._backgroundFrameId);
    oBackFrame.style.left = oPopup.offsetLeft + "px";
    oBackFrame.style.top = oPopup.offsetTop + "px";
    oBackFrame.style.width = nRealWidth + "px";
    oBackFrame.style.height = nRealHeight + "px";
    var oBackDiv = document.getElementById(oPopup._backgroundDivId);
    oBackDiv.style.left = oPopup.offsetLeft + "px";
    oBackDiv.style.top = oPopup.offsetTop + "px";
    oBackDiv.style.width = nRealWidth + "px";
    oBackDiv.style.height = nRealHeight + "px";
}
PPSMA.Menu.HideMenu = function PPSMA_Menu$HideMenu(oMaster, nPhase)
{ULSM53:;
    PPSMA.Menu.ClearTimeoutToHideMenu();
    if (!nPhase)
        nPhase = 0;
    if (nPhase == 2)
    {
        if (oMaster._onDestroy)
        {
            oMaster._onDestroy();
            oMaster._onDestroy = null;
        }
        return;
    }
    if (PPSMA.Menu.IsOpenInternal(oMaster) && !PPSMA.Menu.IsAccessibilityFeatureEnabledProxy())
    {
        if (oMaster._oParent)
        {
            oMaster._oParent.onclick = oMaster._oParent._onclick;
            oMaster._oParent.onmouseover = oMaster._oParent._onmouseover;
            oMaster._oParent.onmouseout = oMaster._oParent._onmouseout;
            oMaster._oParent.onmouseup = oMaster._oParent._onmouseup;
            oMaster._oParent.oncontextmenu = oMaster._oParent._oncontextmenu;
        }
        PPSMA.Menu.SetBodyEventHandlers(null, false);
        PPSMA.Menu.SetBodyTouchEndEventHandler(null);
        PPSMA.Menu.RemoveBodyMouseScrollEventHandlers(PPSMA.Menu.HandleDocumentBodyScroll, false);
        PPSMA.Menu.UpdateLevel(oMaster, 0);
        var oPopup = oMaster._arrPopup[0];
        if (oPopup)
        {
            var oBackFrame = document.getElementById(oPopup._backgroundFrameId);
            if (oBackFrame)
                oBackFrame.parentNode.removeChild(oBackFrame);
            oPopup.parentNode.removeChild(oPopup);
            var oBackDiv = document.getElementById(oPopup._backgroundDivId);
            if (oBackDiv)
                oBackDiv.parentNode.removeChild(oBackDiv);
            oMaster._arrPopup[0] = null;
            if (nPhase == 0)
            {
                if (oMaster._onDestroy)
                {
                    oMaster._onDestroy();
                    oMaster._onDestroy = null;
                }
            }
        }
        PPSMA.Menu.g_lastMenu = null;
    }
}
PPSMA.Menu.IsOpenInternal = function PPSMA_Menu$IsOpenInternal(oMaster)
{ULSM53:;
    if (oMaster._accessibleMenu && !oMaster._accessibleMenu.closed)
        return true;
    if (!oMaster._arrPopup)
        return false;
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    return (oPopup) ? true : false;
}
PPSMA.Menu.FindLabel = function PPSMA_Menu$FindLabel(oParent)
{ULSM53:;
    var arrNodes = oParent ? oParent.childNodes : null;
    if (arrNodes)
    {
        for (var nIndex = 0; nIndex < arrNodes.length; nIndex++)
        {
            var oNode = arrNodes[nIndex];
            if (oNode.nodeType != 1)
                continue;
            if (PPSMA.Menu.FIsIType(oNode, "label")) return oNode;
        }
    }
    return null;
}
PPSMA.Menu.ShowRoot = function PPSMA_Menu$ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, xOffset, yOffset)
{ULSM53:;
    if (fForceRefresh)
    {
        oMaster._oContents = null;
        oMaster._oRoot = null;
        oMaster._nLevel = 0;
        oMaster._arrPopup = new Array();
        oMaster._arrSelected = new Array();
    }
    else
    {
        oMaster._oRoot = oMaster._oContents;
    }
    PPSMA.Menu.UpdateLevel(oMaster, 0);
    fFlipTop = fFlipTop != false;
    PPSMA.Menu.InternalShow(oMaster, oParent, xOffset, yOffset, fFlipTop);
}
PPSMA.Menu.ShowSubMenu = function PPSMA_Menu$ShowSubMenu(oMaster, nLevel, oParent)
{ULSM53:;
    if (!oParent) return;
    if (oParent.submenuRoot == null) return;
    PPSMA.Menu.UpdateLevel(oMaster, nLevel);
    oMaster._oRoot = oParent.submenuRoot;
    oMaster._nLevel = oMaster._nLevel + 1;
    PPSMA.Menu.InternalShow(oMaster, oParent, 0, 0, false);
    PPSMA.Menu.SetSubMenuCallbacks(oMaster);
}
PPSMA.Menu.ShowSubMenuEvnt = function PPSMA_Menu$ShowSubMenuEvnt(id)
{ULSM53:;
    var oMaster = document.getElementById(id);
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup)
    {
        oPopup.removeAttribute("timeoutID");
        PPSMA.Menu.ShowSubMenu(oMaster, oMaster._nLevel, oMaster._arrSelected[oMaster._nLevel]);
    }
}
function ClearTimeOut(oAttribute)
{ULSM53:;
    var id = document.body.getAttribute(oAttribute);
    if (id)
    {
        window.clearTimeout(id);
    }
    document.body.removeAttribute(oAttribute);
}
PPSMA.Menu.ClearShowSubMenuEvnt = function PPSMA_Menu$ClearShowSubMenuEvnt(oPopup)
{ULSM53:;
    ClearTimeOut("timeoutID");
}
PPSMA.Menu.GetEventSrcItem = function PPSMA_Menu$GetEventSrcItem(oMaster, srcElement)
{ULSM53:;
    for (var oSrc = srcElement;
		oSrc && !PPSMA.Menu.FIStringEquals(oSrc.tagName, "BODY");
		oSrc = oSrc.parentNode)
    {
        if (PPSMA.Menu.FIStringEquals(oSrc.tagName, "TR") &&
			oSrc.id.substring(0, oMaster._wzPrefixID.length) == oMaster._wzPrefixID)
        {
            return oSrc;
        }
    }
    return null;
}
PPSMA.Menu.UpdateLevel = function PPSMA_Menu$UpdateLevel(oMaster, nLevel)
{ULSM53:;
    var oPopup;
    while (oMaster._nLevel > nLevel)
    {
        oPopup = oMaster._arrPopup[oMaster._nLevel];
        if (oPopup)
        {
            PPSMA.Menu.ClearShowSubMenuEvnt(oPopup);
            var oBackFrame = document.getElementById(oPopup._backgroundFrameId);
            if (oBackFrame)
                oBackFrame.parentNode.removeChild(oBackFrame);
            var oBackDiv = document.getElementById(oPopup._backgroundDivId);
            if (oBackDiv)
                oBackDiv.parentNode.removeChild(oBackDiv);
            oPopup.parentNode.removeChild(oPopup);
        }
        oMaster._arrPopup[oMaster._nLevel] = null;
        oMaster._arrSelected[oMaster._nLevel] = null;
        oMaster._oRoot = oMaster._oRoot.parentNode;
        oMaster._nLevel--;
    }
    oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup) PPSMA.Menu.ClearShowSubMenuEvnt(oPopup);
}
PPSMA.Menu.PopupMouseOver = function PPSMA_Menu$PopupMouseOver(e)
{ULSM53:;
    var oPopup = PPSMA.Menu.GetEventPopup(e);
    if (oPopup)
    {
        var oMaster = oPopup.master;
        var nLevel = oPopup.level;
        if (nLevel < 0) return;
        var oSrcElem = PPSMA.Menu.GetEventSrcItem(oMaster, PPSMA.Menu.GetEventSrcElement(e));
        if (oSrcElem)
        {
            if (oSrcElem != oMaster._arrSelected[nLevel])
            {
                if (PPSMA.Menu.FIsIType(oSrcElem, "separator") ||
                    PPSMA.Menu.FIsIType(oSrcElem, "valtooltip") ||
	                PPSMA.Menu.FIsIType(oSrcElem, "desctooltip") ||
	                PPSMA.Menu.FIsIType(oSrcElem, "normaltooltip") ||
                    PPSMA.Menu.FIsIType(oSrcElem, "descvaltooltip") ||
                    PPSMA.Menu.FIsIType(oSrcElem, "ttpheader"))
                {
                    PPSMA.Menu.ClearTimeoutToHideMenu();
                    return;
                }

                PPSMA.Menu.ToggleMenuItem(oMaster, nLevel, oSrcElem);
                if (PPSMA.Menu.FIsIType(oSrcElem, "submenu"))
                    PPSMA.Menu.EngageSelection(oMaster, true, true, false);
            }
            else if (nLevel < oMaster._nLevel)
            {
                PPSMA.Menu.UnselectCurrentOption(oMaster);
            }
        }
        PPSMA.Menu.ClearTimeoutToHideMenu();
    }
}
PPSMA.Menu.PopupMouseLeave = function PPSMA_Menu$PopupMouseLeave(e)
{ULSM53:;
    var oPopup;
    oPopup = PPSMA.Menu.GetEventPopup(e);
    if (oPopup)
    {
        PPSMA.Menu.UnselectCurrentOption(oPopup.master);
        PPSMA.Menu.SetTimeoutToHideMenu();
    }
    return false;
}
PPSMA.Menu.PopupMouseOverParent = function PPSMA_Menu$PopupMouseOverParent(e)
{ULSM53:;
    if (PPSMA.Menu.g_lastMenu)
    {
        PPSMA.Menu.ClearTimeoutToHideMenu();
        if (PPSMA.Menu.g_lastMenu._oParent && PPSMA.Menu.g_lastMenu._oParent._onmouseover)
        {
            PPSMA.Menu.g_lastMenu._oParent._onmouseover();
        }
    }
}
PPSMA.Menu.PopupMouseLeaveParent = function PPSMA_Menu$PopupMouseLeaveParent(e)
{ULSM53:;
    if (PPSMA.Menu.g_lastMenu)
    {
        if (PPSMA.Menu.g_lastMenu._oParent && PPSMA.Menu.g_lastMenu._oParent._onmouseout)
        {
            PPSMA.Menu.g_lastMenu._oParent._onmouseout();
        }
        PPSMA.Menu.SetTimeoutToHideMenu();
    }
}
PPSMA.Menu.ClearTimeoutToHideMenu = function PPSMA_Menu$ClearTimeoutToHideMenu()
{ULSM53:;
    if (document.body.getAttribute("HideMenuTimeOut"))
    {
        ClearTimeOut("HideMenuTimeOut");
    }
}
PPSMA.Menu.SetTimeoutToHideMenu = function PPSMA_Menu$SetTimeoutToHideMenu()
{ULSM53:;
    ClearTimeOut("HideMenuTimeOut");
    //document.body.setAttribute("HideMenuTimeOut", window.setTimeout(PPSMA.Menu.Hide, 1500));
    document.body.setAttribute("HideMenuTimeOut", window.setTimeout(PPSMA.Menu.Hide, 180000)); //NOTE: really nice for debugging
}
PPSMA.Menu.PopupMouseClick = function PPSMA_Menu$PopupMouseClick(e)
{ULSM53:;
    if ("ontouchstart" in window && PPSMA.Menu.g_bIgnoreTouchUp == true) {
        return;
    }

    var oPopup = PPSMA.Menu.GetEventPopup(e);
    var oMaster = oPopup.master;
    var nLevel = oPopup.level;
    if (nLevel < 0) return;
    /*Fix for tablets where the current selection is not set onmouseover*/
    if (oMaster && !oMaster._arrSelected[nLevel]) {
        oMaster._arrSelected[nLevel] = PPSMA.Menu.GetEventSrcItem(oMaster, PPSMA.Menu.GetEventSrcElement(e));
    }
    var oItem = oMaster._arrSelected[nLevel];
    PPSMA.Menu.UpdateLevel(oMaster, nLevel);
    var onExpand;
    var fExpand;
    if (browseris.nav)
    {
        fExpand = (e && e.target && e.target.className == "hierarchy");
        onExpand = (e && e.target && e.target.getAttribute("onExpand"));
    }
    else
    {
        fExpand = (e && e.srcElement && e.srcElement.className == "hierarchy");
        onExpand = (e && e.srcElement && e.srcElement.getAttribute("onExpand"));
    }
    PPSMA.Menu.EngageSelection(oMaster, true, false, false, fExpand, onExpand);
}
PPSMA.Menu.PopupKeyDown = function PPSMA_Menu$PopupKeyDown(e)
{ULSM53:;
    var oPopup = PPSMA.Menu.GetEventPopup(e);
    var oMaster = oPopup.master;
    var nLevel = oPopup.level;
    if (nLevel < 0)
        return;
    var nKeyCode = PPSMA.Menu.GetEventKeyCode(e);
    var shiftKey = e.shiftKey;
    if (oMaster._fIsRtL)
    {
        if (nKeyCode == 37) nKeyCode = 39;
        else if (nKeyCode == 39) nKeyCode = 37;
    }
    if (nKeyCode == 9) nKeyCode = !shiftKey ? 40 : 38;
    PPSMA.Menu.ClearShowSubMenuEvnt(oPopup);
    switch (nKeyCode)
    {
        case 38:
            PPSMA.Menu.MoveMenuSelection(oMaster, -1);
            break;
        case 40:
            PPSMA.Menu.MoveMenuSelection(oMaster, 1);
            break;
        case 37:
        case 27:
            PPSMA.Menu.CloseCurrentLevel(oMaster, nKeyCode == 27);
            break;
        case 39:
        case 13:
            PPSMA.Menu.EngageSelection(oMaster, nKeyCode == 13, false, true);
            break;
    }
    e.returnValue = false;
}
PPSMA.Menu.AssureId = function PPSMA_Menu$AssureId(obj)
{ULSM53:;
    if (!obj.id || obj.id === "")
        obj.id = "msomenuid" + PPSMA.Menu.GetUniqueNumber();
    return obj.id;
}
PPSMA.Menu.NavigateToMenu = function PPSMA_Menu$NavigateToMenu(oMaster)
{ULSM53:;
    var oMenu = oMaster._arrPopup[oMaster._nLevel].firstChild;
    if (oMenu.tagName != "DIV")
    {
        alert("Internal Error at PPSMA.Menu.NavigateToMenu");
    }
    PPSMA.Menu.AssureId(oMenu);
    try
    {
        var oFirstItem = oMenu.firstChild.firstChild.firstChild;
        oFirstItem.tabIndex = 0;
        if (oFirstItem.setActive)
            oFirstItem.setActive();
        else if (oFirstItem.focus)
            oFirstItem.focus();
    }
    catch (e)
    {
    }
}
PPSMA.Menu.ExecuteOnClick = function PPSMA_Menu$ExecuteOnClick(fnOnClick, oMaster)
{ULSM53:;
    try
    {
        if (browseris.safari)
        {
            if (PPSMA.Menu.FIStringEquals(typeof (fnOnClick), "string"))
                eval("var document=window.document; {" + fnOnClick + "}");
            else
                fnOnClick();
        }
        else
        {
            if (PPSMA.Menu.FIStringEquals(typeof (fnOnClick), "string"))
            {
                fnOnClick = new Function("event", "var document=window.document; {" + fnOnClick + "}");
            }
            var oTemp = window.document.body.appendChild(window.document.createElement("span"));
            oTemp.master = oMaster;
            oTemp.onclick = fnOnClick;
            var evt;
            var ctx = null;
            if (typeof (currentCtx) != 'undefined' && currentCtx)
                ctx = currentCtx;
            else if (typeof (ctxFilter) != 'undefined' && ctxFilter)
                ctx = ctxFilter;
            if (browseris.ie)
                evt = { "srcElement": oTemp, "fakeEvent": 1, "currentCtx": ctx };
            else
                evt = { "target": oTemp, "fakeEvent": 1, "currentCtx": ctx };
            oTemp.onclick(evt);
            oTemp.parentNode.removeChild(oTemp);
        }
    }
    catch (e)
    {
    }
}
PPSMA.Menu.EngageSelection = function PPSMA_Menu$EngageSelection(oMaster, fDoSelection, fDelayExpandSM, fEnterSM, fExpand, fCommand)
{ULSM53:;
    var oItem = oMaster._arrSelected[oMaster._nLevel];
    if (!oItem || oItem.optionDisabled) return;
    if (PPSMA.Menu.FIsIType(oItem, "submenu"))
    {
        if (fDelayExpandSM)
        {
            PPSMA.Menu.SetTimeoutOnParentWindow(oMaster, "PPSMA.Menu.ShowSubMenuEvnt");
        }
        else
        {
            PPSMA.Menu.ShowSubMenu(oMaster, oMaster._nLevel, oItem);
            if (fEnterSM) PPSMA.Menu.MoveMenuSelection(oMaster, 1);
        }
    }
    else if (fDoSelection)
    {
        var fEnabled = oItem.getAttribute("enabled");
        if (fEnabled != "false")
        {
            if (!fExpand)
            {
                var fnOnClick = oItem.getAttribute("onMenuClick");
                if (fnOnClick)
                {
                    PPSMA.Menu.HideMenu(oMaster, 1);
                    PPSMA.Menu.ExecuteOnClick(fnOnClick, oMaster);
                    PPSMA.Menu.HideMenu(oMaster, 2);
                }
            }
            else
            {
                eval(fCommand);
            }
        }
    }
}
PPSMA.Menu.CloseCurrentLevel = function PPSMA_Menu$CloseCurrentLevel(oMaster, fAllowHideRoot)
{ULSM53:;
    if (oMaster._nLevel > 0)
    {
        PPSMA.Menu.UpdateLevel(oMaster, oMaster._nLevel - 1);
        var obj = oMaster._arrSelected[oMaster._nLevel];
        if (obj)
        {
            if (browseris.nav)
            {
                obj = obj.firstChild.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild;
                if (obj.focus)
                    obj.focus();
            }
            else
            {
                if (obj.focus)
                    obj.focus();
            }
        }
    }
    else if (fAllowHideRoot)
    {
        PPSMA.Menu.HideMenu(oMaster);
        var oParent = oMaster._oParent;
        while (oParent &&
			oParent.tagName == "SPAN" &&
			oParent.getAttribute("contentEditable"))
        {
            oParent = oParent.parentElement;
        }
        if (oParent)
        {
            var focusElement = oParent;
            if (oParent.foa)
            {
                var foa = null;
                foa = eval(oParent.foa);
                if (!foa)
                {
                    foa = byid(oParent.foa);
                }
                if (foa)
                {
                    focusElement = foa;
                }
            }
            if (focusElement.setActive)
            {
                focusElement.setActive();
            }
            else if (focusElement.focus)
            {
                focusElement.focus();
            }
        }
    }
}
PPSMA.Menu.UnselectCurrentOption = function PPSMA_Menu$UnselectCurrentOption(oMaster)
{ULSM53:;
    if (oMaster._nLevel >= 0)
    {
        var oItem = oMaster._arrSelected[oMaster._nLevel];
        if (PPSMA.Menu.FIsIType(oItem, "option"))
        {
            PPSMA.Menu.UnselectItem(oItem);
            oMaster._arrSelected[oMaster._nLevel] = null;
        }
    }
}
PPSMA.Menu.MakeID = function PPSMA_Menu$MakeID(oMaster, nLevel, nIndex)
{ULSM53:;
    return oMaster._wzPrefixID + "_" + nLevel + "_" + nIndex;
}
PPSMA.Menu.GetItem = function PPSMA_Menu$GetItem(oMaster, nLevel, nIndex)
{ULSM53:;
    var oPopup = oMaster._arrPopup[nLevel];
    return oPopup ? document.getElementById(PPSMA.Menu.MakeID(oMaster, nLevel, nIndex)) : null;
}
PPSMA.Menu.MoveMenuSelection = function PPSMA_Menu$MoveMenuSelection(oMaster, iDir)
{ULSM53:;
    var nIndex = -1;
    var nNumItems = oMaster._oRoot.childNodes.length;
    var oSelected = oMaster._arrSelected[oMaster._nLevel];
    if (oSelected)
    {
        var wzSelectedID = oSelected ? oSelected.id : null;
        if (wzSelectedID)
        {
            var nCurIndex = parseInt(wzSelectedID.substring(wzSelectedID.lastIndexOf("_") + 1, wzSelectedID.length));
            nIndex = (nCurIndex + nNumItems + iDir) % nNumItems;
        }
    }
    if (nIndex < 0)
        nIndex = iDir > 0 ? 0 : (nNumItems - 1);
    var oItem;
    var nIndexStart = nIndex;
    do
    {
        oItem = PPSMA.Menu.GetItem(oMaster, oMaster._nLevel, nIndex);
        nIndex = (nIndex + nNumItems + iDir) % nNumItems;
    }
    while (nIndex != nIndexStart &&
			 (!oItem || oItem.style.display == "none" ||
			  !(PPSMA.Menu.FIsIType(oItem, "option") || PPSMA.Menu.FIsIType(oItem, "submenu"))));
    PPSMA.Menu.ToggleMenuItem(oMaster, oMaster._nLevel, oItem);
}
PPSMA.Menu.ToggleMenuItem = function PPSMA_Menu$ToggleMenuItem(oMaster, nLevel, oItem) {ULSM53:;
    var oOld = oMaster._arrSelected[nLevel];
    if (!oItem || (oOld && oItem.id == oOld.id)) return;
    if (oOld) {
        PPSMA.Menu.UnselectItem(oOld);
        oOld.onkeydown = null;
        oOld.onmousedown = null;
        oOld.onmouseover = null;
        oOld.onmouseout = null;
        oOld.oncontextmenu = null;

        if ("ontouchstart" in window) {
            oOld.ontouchstart = null;
            oOld.ontouchend = null;
        }

        if (PPSMA.Menu.FIsIType(oOld, "submenu")) {
            PPSMA.Menu.ClearSubMenuInterval(oMaster);
            var hoverOff = PPSMA.Menu.GetISubMenuOnHoverOff(oOld);
            if (hoverOff && hoverOff != "") eval(hoverOff);
        }
    }
    PPSMA.Menu.UpdateLevel(oMaster, nLevel);
    PPSMA.Menu.SelectItem(oItem);
    oMaster._arrSelected[nLevel] = oItem;
    oItem.tabIndex = 0;

    if (oItem.setActive) {
        if (!browseris.ie9standardUp) {
            oItem.setActive();
        }
    }
    else if (oItem.focus) {
        oItem.focus();
    }
    var oPopup = oMaster._arrPopup[nLevel];
    var oDiv = oPopup.childNodes[0];
    var posPopup = PPSMA.Menu.GetElementPosition(oItem, oDiv);
    if (posPopup.y + posPopup.height - oDiv.scrollTop > oDiv.offsetHeight) {
        oDiv.scrollTop = posPopup.y + posPopup.height - oDiv.offsetHeight;
    }
    else if (posPopup.y < oDiv.scrollTop) {
        oDiv.scrollTop = posPopup.y;
    }
}
PPSMA.Menu.SelectItem = function PPSMA_Menu$SelectItem(oItem)
{ULSM53:;
    if (!oItem) return;
    var oItemTableCell = oItem.firstChild;
    var oItemTable = oItemTableCell.firstChild;
    if (oItemTableCell.className == "bsm-MenuUIItemTableCellCompact")
        oItemTableCell.className = "bsm-MenuUIItemTableCellCompactHover";
    else
        oItemTableCell.className = "bsm-MenuUIItemTableCellHover";
    oItemTable.className = "bsm-MenuUIItemTableHover";
}
PPSMA.Menu.UnselectItem = function PPSMA_Menu$UnselectItem(oItem)
{ULSM53:;
    if (!oItem) return;
    var oItemTableCell = oItem.firstChild;
    var oItemTable = oItemTableCell.firstChild;
    if (oItemTableCell.className == "bsm-MenuUIItemTableCellCompactHover")
        oItemTableCell.className = "bsm-MenuUIItemTableCellCompact";
    else
        oItemTableCell.className = "bsm-MenuUIItemTableCell";
    oItemTable.className = "bsm-MenuUIItemTable";
}
PPSMA.Menu.SetImageSize = function PPSMA_Menu$SetImageSize(oMaster, oImg, oSize)
{ULSM53:;
    if (!oSize)
    {
        if (oMaster._fLargeIconMode)
            oSize = 32;
        else
            oSize = 16;
    }
    oImg.width = oSize;
    oImg.height = oSize;
}
PPSMA.Menu.CreateMenuOption = function PPSMA_Menu$CreateMenuOption(oMaster, oRow, oNode, wzID, wzHtml)
{ULSM53:;
    var oIcon = document.createElement("td");
    var oLabel = document.createElement("td");
    var oAccKey = document.createElement("td");
    var oArrow = document.createElement("td");
    oRow.appendChild(oIcon);
    oRow.appendChild(oLabel);
    oRow.appendChild(oAccKey);
    oRow.appendChild(oArrow);
    if (oMaster._fLargeIconMode)
        oIcon.className = !oMaster._fIsRtL ? "bsm-MenuUIIconLarge" : "bsm-MenuUIIconRtlLarge";
    else if (oNode.getAttribute("selected") == "true")
        oIcon.className = !oMaster._fIsRtL ? "bsm-MenuUIIconSelected" : "bsm-MenuUIIconSelectedRtL";
    else
        oIcon.className = !oMaster._fIsRtL ? "bsm-MenuUIIcon" : "bsm-MenuUIIconRtL";
    oIcon.align = "center";

    var labelClass = "bsm-MenuUILabel";
    if (oMaster._fCompactItemsWithoutIcons && !oNode.getAttribute("iconSrc"))
        labelClass += "Compact";
    else if (oNode.getAttribute("selected") == "true")
        labelClass += "Selected";

    if (oNode.getAttribute("indent") == "true") labelClass += "Indent";
    if (oMaster._fIsRtL) labelClass += "RtL";
    oLabel.className = labelClass;

    oAccKey.className = "bsm-MenuUIAccessKey";
    oArrow.className = "bsm-MenuUISubmenuArrow";
    if (!oMaster._fLargeIconMode)
    {
        oLabel.noWrap = true;
    }
    oIcon.noWrap = true;
    oAccKey.noWrap = true;
    oArrow.noWrap = true;
    oLabel.id = oNode.id;
    if (!wzHtml) wzHtml = oNode.innerHTML;
    if (oNode.getAttribute("enabled") == "false")
    {
        oRow.disabled = true;
        oLabel.className += " bsm-MenuUIItemTableCellDisabled";
    }
    var wzIconSrc = null, wzIconAlt = null;
    if (oNode.getAttribute("checked") == "true")
    {
        wzIconSrc = oMaster._wzChkMrkPath;
        wzIconAlt = "*";
    }
    else
    {
        wzIconSrc = PPSMA.Menu.EvalAttributeValue(oNode, "iconSrc", "iconScript");
        wzIconAlt = oNode.getAttribute("iconAltText");
    }
    var innerHtml = wzHtml;
    var sText = PPSMA.Menu.EvalAttributeValue(oNode, "text", "textScript");
    var sDescription = PPSMA.Menu.EvalAttributeValue(oNode, "description", "descriptionScript");
    var oMenuItemBody = document.createElement("div");
    if (sDescription && oMaster._fLargeIconMode)
    {
        var oBold = document.createElement("B");
        var oTextSpan = document.createElement("SPAN");
        var oTextNode = document.createTextNode(sText);
        var oBr = document.createElement("BR");
        var oDescSpan = document.createElement("SPAN");
        var oDescNode = document.createTextNode(sDescription);
        oTextSpan.setAttribute("style", "white-space: nowrap;");
        oDescSpan.className = "bsm-menuitemdescription";
        oMenuItemBody.appendChild(oBold);
        oBold.appendChild(oTextSpan);
        oTextSpan.appendChild(oTextNode);
        oMenuItemBody.appendChild(oBr);
        oMenuItemBody.appendChild(oDescSpan);
        oDescSpan.appendChild(oDescNode);
    }
    else if (sText)
    {
        var oTextSpan = document.createElement("SPAN");
        var hierarchy = oNode.getAttribute("hierarchy");
        if (hierarchy)
        {
            var myTextSpan = document.createElement("SPAN");
            myTextSpan.setAttribute("style", "white-space: nowrap;");
            var command = oNode.getAttribute("onExpand");
            if (command)
            {
                myTextSpan.setAttribute("onExpand", command);
            }
            myTextSpan.className = "hierarchy";
            oMenuItemBody.appendChild(myTextSpan);
            myTextSpan.innerHTML = hierarchy;
            oTextSpan.setAttribute("style", "white-space: nowrap;");
            oMenuItemBody.appendChild(oTextSpan);
            oTextSpan.innerHTML = sText;
        }
        else
        {
            var oTextNode = document.createTextNode(sText);
            oTextSpan.setAttribute("style", "white-space: nowrap;");
            oMenuItemBody.appendChild(oTextSpan);
            oTextSpan.appendChild(oTextNode);
        }
    }
    var htmlSpan = document.createElement("SPAN");
    htmlSpan.innerHTML = innerHtml;
    oMenuItemBody.appendChild(htmlSpan);
    if (wzIconSrc)
    {
        var oImg = document.createElement("IMG");
        PPSMA.Menu.SetImageSize(oMaster, oImg);
        var oImgLbl = document.createElement("LABEL");
        oIcon.appendChild(oImg);
        oLabel.appendChild(oImgLbl);
        var wzIconId = wzID + "_" + "ICON";
        oImg.id = wzIconId;
        oImg.src = wzIconSrc;
        if (wzIconAlt)
        {
            oImg.alt = "";
            oImg.title = "";
        }
        oImgLbl.htmlFor = wzIconId;
        oImgLbl.appendChild(oMenuItemBody);
    }
    else
    {
        var oImg = document.createElement("IMG");
        PPSMA.Menu.SetImageSize(oMaster, oImg);
        var oImgLbl = document.createElement("LABEL");
        oIcon.appendChild(oImg);
        oLabel.appendChild(oImgLbl);
        var wzIconId = wzID + "_" + "ICON";
        oImg.id = wzIconId;
        oImg.src = g_resFolder + "blank.gif";
        oImg.alt = "";
        oImg.title = "";
        oImgLbl.htmlFor = wzIconId;
        oImgLbl.appendChild(oMenuItemBody);
        if (oMaster._fLargeIconMode)
        {
            oImg.width = 32;
            oImg.height = 16;
        }
        else
        {
            oImg.width = 16;
        }
    }
    var wzAccKey = oNode.getAttribute("accessKeyText");
    if (wzAccKey) oAccKey.innerHTML = wzAccKey;
    PPSMA.Menu.SetIType(oRow, "option");
}

PPSMA.Menu.CreateTooltip = function PPSMA_Menu$CreateTooltip(oMaster, oRow, oNode, wzID)
{ULSM53:;
    var wzHtml = "";
    var oLabel = document.createElement("td");
    oRow.appendChild(oLabel);
    oLabel.className = "bsm-Tooltipcell";
    oLabel.noWrap = false;
    oLabel.id = oNode.id;

    if (!wzHtml) wzHtml = oNode.ttpdesc;

    var lblText = null;
    if (PPSMA.Menu.FIsIType(oNode, "desctooltip"))
    {
        lblText = PPSMA.Menu.FCLabelText(g_descriptionTag);
        oLabel.innerHTML = lblText + PPSMA.Menu.ConvertIntoMultiLine(wzHtml);
        PPSMA.Menu.SetIType(oRow, "desctooltip");
    }
    else if (PPSMA.Menu.FIsIType(oNode, "valtooltip"))
    {
        lblText = PPSMA.Menu.FCLabelText(g_valueTag);
        oLabel.innerHTML = lblText + PPSMA.Menu.ConvertIntoMultiLine(wzHtml);
        PPSMA.Menu.SetIType(oRow, "valtooltip");
    }
    else if (PPSMA.Menu.FIsIType(oNode, "normaltooltip"))
    {
        oLabel.innerHTML = PPSMA.Menu.ConvertIntoMultiLine(wzHtml);
        PPSMA.Menu.SetIType(oRow, "normaltooltip");
    }
}


PPSMA.Menu.CreateDescValTooltip = function PPSMA_Menu$CreateDescValTooltip(oMaster, oRow, oNode, wzID)
{ULSM53:;
    var wzHtml = "";
    var oLabel = document.createElement("td");
    oRow.appendChild(oLabel);
    oLabel.className = "bsm-Tooltipcell";
    oLabel.noWrap = false;
    oLabel.id = oNode.id;
    if (oNode.ttpdesc)
    {
        lblText = PPSMA.Menu.FCLabelText(g_descriptionTag);
        if (!wzHtml) wzHtml = oNode.ttpdesc;
    }
    else if (oNode.ttpval)
    {
        lblText = PPSMA.Menu.FCLabelText(g_valueTag);
        if (!wzHtml) wzHtml = oNode.ttpval;
    }
    oLabel.innerHTML = lblText + PPSMA.Menu.ConvertIntoMultiLine(wzHtml);
    PPSMA.Menu.SetIType(oRow, "descvaltooltip");
}

PPSMA.Menu.CreateMenuSeparator = function PPSMA_Menu$CreateMenuSeparator(oMaster, oRow)
{ULSM53:;
    var oCell = document.createElement("td");
    oCell.setAttribute("colspan", "2");
    var oHr = document.createElement("hr");
    oRow.appendChild(oCell);
    oCell.appendChild(oHr);
    PPSMA.Menu.SetIType(oRow, "separator");
}

PPSMA.Menu.CreateHeader = function PPSMA_Menu$CreateHeader(oMaster, oRow, oNode)
{ULSM53:;
    var oHdr = document.createElement("td");
    oHdr.className = "bsm-ttpHdrCell";
    oRow.appendChild(oHdr);

    var oparentDiv = document.createElement("div");
    oHdr.appendChild(oparentDiv);

    var ochldDiv = document.createElement("div");
    oparentDiv.appendChild(ochldDiv);
    ochldDiv.className = "bsm-tooltiphdr";

    var oCloseImg = document.createElement("IMG");
    ochldDiv.appendChild(oCloseImg);

    oCloseImg.alt = "Close";
    oCloseImg.src = g_resFolder + "CloseWindow.gif";
    oCloseImg.onclick = PPSMA.Menu.Hide;
    PPSMA.Menu.SetIType(oRow, "ttpheader");
}

PPSMA.Menu.CreateSubmenu = function PPSMA_Menu$CreateSubmenu(oMaster, oRow, oNode, wzID)
{ULSM53:;

    var oLabelNode = PPSMA.Menu.FindLabel(oNode);
    PPSMA.Menu.CreateMenuOption(oMaster, oRow, oNode, wzID, oLabelNode ? oLabelNode.innerHTML : null);
    var oArrow = oRow.childNodes[3];
    var oArrowImg = document.createElement("IMG");
    PPSMA.Menu.SetImageSize(oMaster, oArrowImg, 16);
    oArrow.appendChild(oArrowImg);
    oArrowImg.src = !oMaster._fIsRtL ? oMaster._wzMArrPath : oMaster._wzMArrPathRtL;
    oArrowImg.alt = !oMaster._fIsRtL ? ">" : "<";
    oArrowImg.title = "";
    PPSMA.Menu.SetIType(oRow, "submenu");
    PPSMA.Menu.SetISubMenuOnFetch(oRow, PPSMA.Menu.GetISubMenuOnFetch(oNode));
    PPSMA.Menu.SetISubMenuOnPopulate(oRow, PPSMA.Menu.GetISubMenuOnPopulate(oNode));
    PPSMA.Menu.SetISubMenuOnHoverOff(oRow, PPSMA.Menu.GetISubMenuOnHoverOff(oNode));
    oRow.submenuRoot = oNode;
}
PPSMA.Menu.MergeAttributes = function PPSMA_Menu$MergeAttributes(oTarget, oSource)
{ULSM53:;
    var oAttributes = oSource.attributes;
    for (var i = 0; i < oAttributes.length; i++)
    {
        var oAttrib = oAttributes[i];
        if (oAttrib &&
				oAttrib.specified &&
				oAttrib.nodeName.toLowerCase() != "id" &&
				oAttrib.nodeName.toLowerCase() != "name")
        {
            oTarget.setAttribute(oAttrib.nodeName, oAttrib.nodeValue);
        }
    }

    if (oSource.getAttribute("type") != null)
        oTarget.setAttribute("type", oSource.getAttribute("type"));

    if (oSource.submenuRoot != null)
        oTarget.submenuRoot = oSource.submenuRoot;

}
PPSMA.Menu.CreateMenuItem = function PPSMA_Menu$CreateMenuItem(oMaster, oNode, wzID, wzHtml)
{ULSM53:;
    if (PPSMA.Menu.FIsIType(oNode, "label")) return;
    var oRow = document.createElement("tr");
    PPSMA.Menu.MergeAttributes(oRow, oNode);
    if (PPSMA.Menu.GetType(oMaster) != "tooltip")
    {
        oRow.setAttribute("onMenuClick", oNode.getAttribute("onMenuClick"));
    }
    if (PPSMA.Menu.FIsIType(oNode, "separator"))
    {
        PPSMA.Menu.CreateMenuSeparator(oMaster, oRow);
        return oRow;
    }
    if (!PPSMA.Menu.GetIType(oNode)) PPSMA.Menu.SetIType(oNode, "option");
    var oFmtTableRow = document.createElement("tr");
    var oFmtTableCell = document.createElement("td");
    var oFmtTable = document.createElement("table");
    var oFmtTableBody = document.createElement("tbody");
    oFmtTableRow.appendChild(oFmtTableCell);
    oFmtTableCell.appendChild(oFmtTable);
    oFmtTable.appendChild(oFmtTableBody);
    oFmtTableBody.appendChild(oRow);
    if (PPSMA.Menu.GetType(oMaster) != "tooltip")
    {
        if (oMaster._fCompactItemsWithoutIcons && !oNode.getAttribute("iconSrc"))
            oFmtTableCell.className = "bsm-MenuUIItemTableCellCompact";
        else
            oFmtTableCell.className = "bsm-MenuUIItemTableCell";
        oFmtTable.className = "bsm-MenuUIItemTable";
    }
    else
    {
        oFmtTableCell.className = "bsm-TooltipUIItemTableCell";
        oFmtTable.className = "bsm-TooltipUIItemTable";
    }
    oFmtTable.width = "100%";
    oFmtTable.cellSpacing = 0;
    oFmtTable.cellPadding = 0;
    if (PPSMA.Menu.FIsIType(oNode, "submenu"))
        PPSMA.Menu.CreateSubmenu(oMaster, oRow, oNode, wzID);
    else if (PPSMA.Menu.FIsIType(oNode, "option"))
        PPSMA.Menu.CreateMenuOption(oMaster, oRow, oNode, wzID, wzHtml);
    else if (PPSMA.Menu.FIsIType(oNode, "valtooltip") || PPSMA.Menu.FIsIType(oNode, "desctooltip") || PPSMA.Menu.FIsIType(oNode, "normaltooltip"))
        PPSMA.Menu.CreateTooltip(oMaster, oRow, oNode, wzID);
    else if (PPSMA.Menu.FIsIType(oNode, "descvaltooltip"))
        PPSMA.Menu.CreateDescValTooltip(oMaster, oRow, oNode, wzID); //when both descrition and value is to be shown
    else if (PPSMA.Menu.FIsIType(oNode, "ttpheader"))
        PPSMA.Menu.CreateHeader(oMaster, oRow, oNode);

    if (oRow.disabled || oRow.getAttribute("enabled") == "false")
    {
        oRow.disabled = false;
        oRow.className = "bsm-MenuUIDisabled";
        oRow.disabled = false;
        for (var nIndex = 0; nIndex < oRow.childNodes.length; nIndex++)
        {
            if (oRow.childNodes[nIndex].nodeType != 1)
                continue;
            oRow.childNodes[nIndex].disabled = true;
            oFmtTableCell.className += " bsm-MenuUIItemTableCellDisabled";
        }
        oRow.optionDisabled = true;
    }
    PPSMA.Menu.MergeAttributes(oFmtTableRow, oRow);
    if (oRow.optionDisabled)
    {
        oFmtTableRow.optionDisabled = oRow.optionDisabled;
    }
    oFmtTableRow.id = wzID;
    PPSMA.Menu.SetIType(oFmtTableRow, PPSMA.Menu.GetIType(oRow));
    return oFmtTableRow;
}

PPSMA.Menu.GetISubMenuOnFetch = function PPSMA_Menu$GetISubMenuOnFetch(oItem)
{ULSM53:;
    return oItem ? oItem.getAttribute("onfetch") : null;
}
PPSMA.Menu.SetISubMenuOnFetch = function PPSMA_Menu$SetISubMenuOnFetch(oItem, fetchCallback)
{ULSM53:;
    if (oItem) oItem.setAttribute("onfetch", fetchCallback);
}
PPSMA.Menu.GetISubMenuOnPopulate = function PPSMA_Menu$GetISubMenuOnPopulate(oItem)
{ULSM53:;
    return oItem ? oItem.getAttribute("onpopulate") : null;
}
PPSMA.Menu.SetISubMenuOnPopulate = function PPSMA_Menu$SetISubMenuOnPopulate(oItem, fetchCallback)
{ULSM53:;
    if (oItem) oItem.setAttribute("onpopulate", fetchCallback);
}
PPSMA.Menu.GetISubMenuOnHoverOff = function PPSMA_Menu$GetISubMenuOnHoverOff(oItem)
{ULSM53:;
    return oItem ? oItem.getAttribute("onhoveroff") : null;
}
PPSMA.Menu.SetISubMenuOnHoverOff = function PPSMA_Menu$SetISubMenuOnHoverOff(oItem, fetchCallback)
{ULSM53:;
    if (oItem) oItem.setAttribute("onhoveroff", fetchCallback);
}
PPSMA.Menu.GetIType = function PPSMA_Menu$GetIType(oItem)
{ULSM53:;
    return oItem ? oItem.getAttribute("type") : null;
}
PPSMA.Menu.FIsIType = function PPSMA_Menu$FIsIType(oItem, wzType)
{ULSM53:;
    return PPSMA.Menu.FIStringEquals(PPSMA.Menu.GetIType(oItem), wzType);
}
PPSMA.Menu.SetIType = function PPSMA_Menu$SetIType(oItem, wzType)
{ULSM53:;
    if (oItem) oItem.setAttribute("type", wzType);
}
PPSMA.Menu.FIStringEquals = function PPSMA_Menu$FIStringEquals(wzX, wzY)
{ULSM53:;
    return (wzX && wzY && wzX.toLowerCase() == wzY.toLowerCase());
}
PPSMA.Menu.RenderAccessibleMenu = function PPSMA_Menu$RenderAccessibleMenu(oMaster, fForceRefresh)
{ULSM53:;
    if (fForceRefresh)
    {
        oMaster._oContents = null;
        oMaster._oRoot = null;
        oMaster._nLevel = 0;
        oMaster._arrPopup = new Array();
        oMaster._arrSelected = new Array();
    }
    else
    {
        oMaster._oRoot = oMaster._oContents;
    }
    if (!oMaster._oContents) PPSMA.Menu.PrepContents(oMaster);
    if (!oMaster._oContents) return;
    if (!oMaster._oRoot)
    {
        oMaster._nLevel = 0;
        oMaster._oRoot = oMaster._oContents;
    }
    PPSMA.Menu.FixUpMenuStructure(oMaster);
    var menuDir = oMaster._fIsRtL ? "rtl" : "ltr";
    PPSMA.Menu.g_html = "<html dir='" + menuDir + "'><head><title>" + Strings.STS.L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
    PPSMA.Menu.RenderMenuLevel(oMaster, oMaster._oRoot, true);
    PPSMA.Menu.g_html = PPSMA.Menu.g_html + "</ul></body></html>";
    var oNewWindow = window.open("", "_blank", "status=no,toolbar=no,menubar=no,location=no");
    oMaster._accessibleMenu = oNewWindow;
    oNewWindow.document.write(PPSMA.Menu.g_html);
    oNewWindow.document.close();
    oNewWindow.focus();
}
PPSMA.Menu.RenderAccessibleDynamicMenu = function PPSMA_Menu$RenderAccessibleDynamicMenu(oMaster, oContents)
{ULSM53:;
    oMaster._oContents = oContents;
    oMaster._oRoot = oContents;
    oMaster._nLevel = 0;
    oMaster._arrPopup = new Array();
    oMaster._arrSelected = new Array();

    PPSMA.Menu.FixUpMenuStructure(oMaster);
    var menuDir = oMaster._fIsRtL ? "rtl" : "ltr";
    PPSMA.Menu.g_html = "<html dir='" + menuDir + "'><head><title>" + Strings.STS.L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
    PPSMA.Menu.RenderMenuLevel(oMaster, oMaster._oRoot, true);
    PPSMA.Menu.g_html = PPSMA.Menu.g_html + "</ul></body></html>";
    var oNewWindow = window.open("", "_blank", "status=no,toolbar=no,menubar=no,location=no");
    oMaster._accessibleMenu = oNewWindow;
    oNewWindow.document.write(PPSMA.Menu.g_html);
    oNewWindow.document.close();
    oNewWindow.focus();
}
PPSMA.Menu.CloseAccessibleMenu = function PPSMA_Menu$CloseAccessibleMenu(oMaster, n)
{ULSM53:;
    if (!n)
        n = 0;
    if (oMaster)
    {
        if (n == 0 || n == 1)
        {
            if (oMaster._accessibleMenu)
            {
                oMaster._accessibleMenu.close();
                oMaster._accessibleMenu = null;
            }
        }
        if (n == 0 || n == 2)
        {
            if (oMaster._onDestroy)
            {
                oMaster._onDestroy();
                oMaster._onDestroy = null;
            }
        }
    }
}
PPSMA.Menu.GetMenuItemText = function PPSMA_Menu$GetMenuItemText(oMaster, oNode, s)
{ULSM53:;
    if (s == "")
    {
        s = PPSMA.Menu.EvalAttributeValue(oNode, "text", "textScript");
        var description = PPSMA.Menu.EvalAttributeValue(oNode, "description", "descriptionScript");
        if (description &&
			description != "" &&
			oMaster._fLargeIconMode)
        {
            if (s != "")
                s = s + ": ";
            s = s + description;
        }
    }
    if (oNode.getAttribute("checked") == "true")
        s = "* " + s;
    if (oNode.title && oNode.title != "")
        s = s + ": " + oNode.title;
    return s;
}
PPSMA.Menu.GetMenuItemEnabled = function PPSMA_Menu$GetMenuItemEnabled(oNode, fEnabled)
{ULSM53:;
    if (!fEnabled)
        return false;
    if (oNode.getAttribute("enabled") == "false")
        return false;
    if (oNode.getAttribute("disabled") && oNode.getAttribute("disabled") != "")
        return false;
    return true;
}
PPSMA.Menu.g_html = "";
PPSMA.Menu.RenderMenuLevel = function PPSMA_Menu$RenderMenuLevel(oMaster, oRoot, fEnabled)
{ULSM53:;
    for (var nIndex = 0; nIndex < oRoot.childNodes.length; nIndex++)
    {
        var oNode = oRoot.childNodes[nIndex];
        if (oNode.nodeType != 1)
            continue;
        if (oNode.style.display == "none")
            continue;
        if (PPSMA.Menu.FIsIType(oNode, "option"))
        {
            var s = PPSMA.Menu.GetMenuItemText(oMaster, oNode, oNode.innerHTML);
            if (!PPSMA.Menu.GetMenuItemEnabled(oNode, fEnabled))
            {
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "<li><span id=\"" + oNode.id + "\">" + s + "</span></li>";
            }
            else
            {
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "<li><a href=\"#\" id=\"" + oNode.id + "\" " +
				"onMenuClick=\"" + oNode.getAttribute("onMenuClick") + "\" " +
				"onclick=\"javascript:opener.PPSMA.Menu.ExecuteOnAccessibleClick(this.getAttribute('onMenuClick')); return false;\" " +
                ">" + s + "</a></li>";
            }
        }
        else if (PPSMA.Menu.FIsIType(oNode, "submenu"))
        {
            var s = PPSMA.Menu.GetMenuItemText(oMaster, oNode, "");
            for (var n = 0; n < oNode.childNodes.length; n++)
            {
                var oLabelNode = oNode.childNodes[n];
                if (oLabelNode.nodeType != 1)
                    continue;
                if (oLabelNode.style.display == "none")
                    continue;
                if (PPSMA.Menu.FIsIType(oLabelNode, "label"))
                {
                    s += " " + oLabelNode.innerHTML;
                    break;
                }
            }
            var fetchCB = PPSMA.Menu.GetISubMenuOnFetch(oNode);
            if (fetchCB && fetchCB != "")
            {
                var populateCB = PPSMA.Menu.GetISubMenuOnPopulate(oNode);
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "<li><a href=\"#\" id=\"" + oNode.id + "\" " +
				"onfetch=\"" + fetchCB + "\" " +
				"onpopulate=\"" + populateCB + "\" " +
				"onclick=\"javascript:opener.PPSMA.Menu.ExecuteOnAccessibleFetch(this); return false;\" " +
                ">" + s + "</a></li>";
            }
            else
            {
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "<li><span id=\"" + oNode.id + "\">" + s;
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "</span><ul>";
                PPSMA.Menu.RenderMenuLevel(oMaster, oNode, PPSMA.Menu.GetMenuItemEnabled(oNode, fEnabled));
                PPSMA.Menu.g_html = PPSMA.Menu.g_html + "</ul></li>";
            }
        }
    }
}
PPSMA.Menu.ExecuteOnAccessibleClick = function PPSMA_Menu$ExecuteOnAccessibleClick(fnOnClick)
{ULSM53:;
    var oMaster = PPSMA.Menu.g_lastMenu;
    if (oMaster)
    {
        PPSMA.Menu.CloseAccessibleMenu(oMaster, 1);
        window.focus();
        PPSMA.Menu.ExecuteOnClick(fnOnClick, oMaster);
        PPSMA.Menu.CloseAccessibleMenu(oMaster, 2);
    }
}
PPSMA.Menu.ExecuteOnAccessibleFetch = function PPSMA_Menu$ExecuteOnAccessibleFetch(oItem)
{ULSM53:;
    var oMaster = PPSMA.Menu.g_lastMenu;
    if (oMaster && oMaster._accessibleMenu)
    {
        var fetchCB = PPSMA.Menu.GetISubMenuOnFetch(oItem);
        var populateCB = PPSMA.Menu.GetISubMenuOnPopulate(oItem);
        if (fetchCB && fetchCB != "" && populateCB && populateCB != "")
        {
            oMaster._accessibleMenu.onpopulate = populateCB;
            oMaster._accessibleMenu.intervalID = oMaster._accessibleMenu.setInterval("opener.PPSMA.Menu.CheckPopulateAccessibleCallback('" + oMaster.id + "');", 300);
            eval(fetchCB);
        }
    }
}
PPSMA.Menu.FIsHidden = function PPSMA_Menu$FIsHidden(oItem)
{ULSM53:;
    if (oItem)
    {
        var hiddenFunc = oItem.getAttribute("hidden");
        if (!hiddenFunc) return false;
        return eval(hiddenFunc);
    }
    else
        return false;
}
PPSMA.Menu.EvalAttributeValue = function PPSMA_Menu$EvalAttributeValue(oNode, sAttribute1, sAttribute2)
{ULSM53:;
    var result = oNode.getAttribute(sAttribute2);
    if (result &&
		result.toLowerCase().indexOf("javascript:") == 0)
    {
        result = eval(result.substring(11));
        if (result && result != "")
            return result;
    }
    var result = oNode.getAttribute(sAttribute1);
    if (!result)
        return "";
    return result;
}

PPSMA.Menu.FCLabelText = function PPSMA_Menu$FCLabelText(wzText)
{ULSM53:;
    wzText = "<b class = \"bsm-TooltipLabel\">" + wzText + "</b><br/>";
    return wzText;
}
PPSMA.Menu.ConvertIntoMultiLine = function PPSMA_Menu$ConvertIntoMultiLine(wzDescription)
{ULSM53:;
    var displayText = wzDescription;
    var lenToRead = displayText.length;
    var chunk = 120;
    var start = 0;
    var output = "";
    while (lenToRead - chunk >= 0)
    {
        var tmp = displayText.substr(start, chunk);
        output = output + tmp + "<br/>";
        start = start + chunk;
        lenToRead = lenToRead - chunk;
    }
    var multiline = output + displayText.substr(start, lenToRead) + "<br/>";

    return multiline;
};


//------------ Dynamic submenus -------------------------------------------------
PPSMA.Menu.Refresh = function PPSMA_Menu$Refresh(oMaster, m, force)
{ULSM53:;
    PPSMA.Menu.ClearSubMenuInterval(oMaster);
    if (force)
    {
        if (oMaster._accessibleMenu)
        {
            PPSMA.Menu.CloseAccessibleMenu(oMaster, 0);
            PPSMA.Menu.RenderAccessibleDynamicMenu(oMaster, m);
        }
        else
        {
            PPSMA.Menu.CloseCurrentLevel(oMaster, false);
            oParent = oMaster._arrSelected[oMaster._nLevel];
            oParent.submenuRoot = m;
            PPSMA.Menu.SetTimeoutOnParentWindow(oMaster, "PPSMA.Menu.ShowNewSubMenuEvnt");
        }
    }
}

PPSMA.Menu.ClearSubMenuInterval = function PPSMA_Menu$ClearSubMenuInterval(oMaster)
{ULSM53:;
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup)
    {
        var id = oPopup.getAttribute("intervalID");
        if (typeof (id) == "number") window.clearInterval(id);
        oPopup.removeAttribute("intervalID");
    }
}

PPSMA.Menu.SetTimeoutOnParentWindow = function PPSMA_Menu$SetTimeoutOnParentWindow(oMaster, fn)
{ULSM53:;
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup)
    {
        oPopup.setAttribute("timeoutID", window.setTimeout(new Function(fn + "('" + oMaster.id + "');"), 100));
    }
}

PPSMA.Menu.ShowNewSubMenuEvnt = function PPSMA_Menu$ShowNewSubMenuEvnt(id)
{ULSM53:;
    var oMaster = document.getElementById(id);
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup)
    {
        oPopup.removeAttribute("timeoutID");
        PPSMA.Menu.ShowNewSubMenu(oMaster, oMaster._nLevel, oMaster._arrSelected[oMaster._nLevel]);
    }
}

PPSMA.Menu.ShowNewSubMenu = function PPSMA_Menu$ShowNewSubMenu(oMaster, nLevel, oParent)
{ULSM53:;
    if (!oParent) return;
    if (!oParent.submenuRoot) return;
    PPSMA.Menu.UpdateLevel(oMaster, nLevel);
    oMaster._oRoot = oParent.submenuRoot;
    oMaster._nLevel = oMaster._nLevel + 1;
    PPSMA.Menu.InternalShow(oMaster, oParent, 0, 0, false);
    PPSMA.Menu.MoveMenuSelection(oMaster, 1);
}

PPSMA.Menu.SetSubMenuCallbacks = function PPSMA_Menu$SetSubMenuCallbacks(oMaster)
{ULSM53:;
    var oPopup = oMaster._arrPopup[oMaster._nLevel];
    if (oPopup)
    {
        var oItem = oMaster._arrSelected[oMaster._nLevel - 1];
        if (oItem)
        {
        }
        else
        {
            oItem = oMaster._arrSelected[oMaster._nLevel];
        }
        var fetchCB = PPSMA.Menu.GetISubMenuOnFetch(oItem);
        if (fetchCB && fetchCB != "")
        {
            oPopup.setAttribute("intervalID", window.setInterval(new Function("PPSMA.Menu.CheckPopulateCallback('" + oMaster.id + "');"), 300));
            eval(fetchCB);
        }
    }
}
PPSMA.Menu.CheckPopulateCallback = function PPSMA_Menu$CheckPopulateCallback(id)
{ULSM53:;
    var oMaster = document.getElementById(id);
    var oItem = oMaster._arrSelected[oMaster._nLevel - 1];
    var populateCB = PPSMA.Menu.GetISubMenuOnPopulate(oItem);
    if (populateCB && populateCB != "") eval(populateCB);
}
PPSMA.Menu.CheckPopulateAccessibleCallback = function PPSMA_Menu$CheckPopulateAccessibleCallback(id)
{ULSM53:;
    var oMaster = document.getElementById(id);
    if (oMaster._accessibleMenu)
    {
        var populateCB = oMaster._accessibleMenu.onpopulate;
        if (populateCB && populateCB != "") eval(populateCB);
    }
}

//-----------------------------------------------------------------------------------------

if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined")
    NotifyScriptLoadedAndExecuteWaitingJobs("analyticreports.js");
