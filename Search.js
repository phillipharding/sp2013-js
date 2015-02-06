function ULShpi(){var o=new Object;o.ULSTeamName="Search Server";o.ULSFileName="Search.js";return o;}
var i7F = parseInt("0x7F");
var i7FF = parseInt("0x7FF");
var iFFFF = parseInt("0xFFFF");
var i1FFFFF = parseInt("0x1FFFFF");
var i3FFFFFF = parseInt("0x3FFFFFF");
var i7FFFFFFF = parseInt("0x7FFFFFFF");
var logWAQuery = true;
var suggestedQuery = false;

function canonicalizedUtf8FromUnicode(strURL) 
{ULShpi:;
    var strSpecialUrl = " <>\"#%{}|^~[]`&?+";
    var strEncode="";
    var i;
    var chUrl;
    var iCode;
    var num;
    var iCodeBin;
    var tempBin;
    var j, leadingzeros;

    strURL += "";
    for (i=0; i<strURL.length; i++) {
        chUrl = strURL.charAt(i);
        iCode = chUrl.charCodeAt(0);
        if (iCode<=i7F)
        {
            if (strSpecialUrl.indexOf(chUrl)!=-1)
            {

                strEncode+="%"+iCode.toString(16).toUpperCase();
            }
            else
            {

                strEncode+=chUrl;
            }
        }
        else
        {
            leadingzeros="";
            iCodeBin=iCode.toString(2)
            if (iCode<=i7FF)
            {

                for (j=11; j>iCodeBin.length; j--) leadingzeros+="0";
                iCodeBin=leadingzeros+iCodeBin

                tempBin="110"+iCodeBin.substr(0,5);
                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                tempBin="10"+iCodeBin.substr(5,6);
                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
            }
            else
            {
                if (iCode<=iFFFF)
                {

                    for (j=16; j>iCodeBin.length; j--) leadingzeros+="0";
                    iCodeBin=leadingzeros+iCodeBin

                    tempBin="1110"+iCodeBin.substr(0,4);
                    strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                    tempBin="10"+iCodeBin.substr(4,6);
                    strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                    tempBin="10"+iCodeBin.substr(10,6);
                    strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                }
                else
                {
                    if (iCode<=i1FFFFF)
                    {

                        for (j=21; j>iCodeBin.length; j--) leadingzeros+="0";
                        iCodeBin=leadingzeros+iCodeBin

                        tempBin="11110"+iCodeBin.substr(0,3);
                        strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                        tempBin="10"+iCodeBin.substr(3,6);
                        strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                        tempBin="10"+iCodeBin.substr(9,6);
                        strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                        tempBin="10"+iCodeBin.substr(15,6);
                        strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                    }
                    else
                    {
                        if (iCode<=i3FFFFFF)
                        {

                            for (j=26; j>iCodeBin.length; j--) leadingzeros+="0";
                            iCodeBin=leadingzeros+iCodeBin

                            tempBin="111110"+iCodeBin.substr(0,2);
                            strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                            tempBin="10"+iCodeBin.substr(2,6);
                            strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                            tempBin="10"+iCodeBin.substr(8,6);
                            strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                            tempBin="10"+iCodeBin.substr(14,6);
                            strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                            tempBin="10"+iCodeBin.substr(20,6);
                            strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                        }
                        else
                        {
                            if (iCode<=i7FFFFFFF)
                            {

                                for (j=31; j>iCodeBin.length; j--) leadingzeros+="0";
                                iCodeBin=leadingzeros+iCodeBin

                                tempBin="1111110"+iCodeBin.substr(0,1);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                                tempBin="10"+iCodeBin.substr(1,6);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                                tempBin="10"+iCodeBin.substr(7,6);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                                tempBin="10"+iCodeBin.substr(13,6);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                                tempBin="10"+iCodeBin.substr(19,6);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                                tempBin="10"+iCodeBin.substr(25,6);
                                strEncode+="%"+parseInt(tempBin,2).toString(16).toUpperCase()
                            }
                        }
                    }   
                }           
            }
        }
    }
    return strEncode;
}

function GetItemUrl(a)
{ULShpi:;
    var isIE=false;
    if(null != window.clientInformation){
        isIE = (window.clientInformation.userAgent.indexOf("MSIE ") > 0);
    }
    var h = document.getElementById(a);
    if (null != h)
    {
        if(isIE){
            var h2 = h.outerHTML;
            var s = h2.indexOf('href="');
            if(s > 0){
                s += 6;
                var e = h2.indexOf('"', s);
                if(e > 0){
                    h2 = h2.substring(s, e);
                    h2 = h2.replace(/&#39;/ig, "'");
                    h2 = h2.replace(/&quot;/ig, '"');
                    h2 = h2.replace(/&amp;/ig, '&');
                    return h2;
                }
            }
        }

        return h.href;
    }
    return '';
}

function GoToItemUrl(a)
{ULShpi:;
    window.location.href = GetItemUrl(a);
}

function GetCookieExpireTime()
{ULShpi:;
    var ce = new Date();        
    var m = ce.getMonth();
    if(m == 11){
        ce.setMonth(0);
        ce.setYear(ce.getYear() + 1);
    }else{
        ce.setMonth(m+1);
    }
    return ce.toGMTString();
}

function _ppsi(lid, fieldID)        
{ULShpi:;
    return lid + fieldID;
}

function OnshdCB(lid)       
{ULShpi:;
    Onshd(lid, 'c', '', '', '');
}

function Onshd(lid, ct, eid, th, ts)    
{ULShpi:;
    var f = document.forms[0];
    var s = _ppsi(lid, 'shd');
    var c, b;                   
    var g = document.styleSheets(s).rules[0].style;
    if (null ==f || null == g) return;
    b = false;      

    if ('a' == ct)      
    {
        c = _ppsi(lid, 'spssSHDH');
        if(null != f.elements[c]) b = (f.elements[c].value == "false");
    }
    else
    {
        c = _ppsi(lid, 'spssSHDC');
        if(null != f.elements[c]) b = (f.elements[c].checked);
    }
    if(b){
        g.display = "";
        if ('a' == ct)
        { 
            if(null != f.elements[c]) f.elements[c].value = "true";
            document.links.item(eid).innerText = th;
        }
        document.cookie = s + "=true; expires=" + GetCookieExpireTime();
    } else {
        g.display = "none";
        if ('a' == ct) 
        { 
            if(null != f.elements[c]) f.elements[c].value = "false";
            document.links.item(eid).innerText = ts;
        }
        document.cookie = s + "=false; expires=" + GetCookieExpireTime();
    }
}

function OnPTP(lid)
{ULShpi:;
    var f=document.forms[0];
    if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value = "PageToPrevious";
    f.submit();
}

function OnPTN(lid)
{ULShpi:;
    var f=document.forms[0];
    if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value = "PageToNext";
    f.submit();
}

function OnPTT(a, event, lid, isIE)
{ULShpi:;
    var f=document.forms[0];
    if(isIE){
        var kCode = String.fromCharCode(event.keyCode);
        if(kCode == "\n" || kCode == "\r"){
            if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value="DirectPageTo";
            if(null != f.elements[_ppsi(lid, "spssAPNH")]) f.elements[_ppsi(lid, "spssAPNH")].value=a.value;
            f.submit();
        }
    } else {
        if((event.which == 10) || (event.which == 13)){
            if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value="DirectPageTo";
            f.submit();
        }
    }
}
function OnPTD(a, lid)
{ULShpi:;
    var f=document.forms[0];
    if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value="DirectPageTo";
    if(null != f.elements[_ppsi(lid, "spssAPNH")]) f.elements[_ppsi(lid, "spssAPNH")].value=a.value;
    f.submit();
}

function OnChangeGroupBySelection(lid, cid)
{ULShpi:;
    if(null != document.forms[0].elements[cid])
        OnGroupBy(lid, document.forms[0].elements[cid].value);
}
function OnGroupBy(lid, strURI)     
{ULShpi:;
    var f=document.forms[0];
    if(null != f.elements[_ppsi(lid, "spssWFEH")]) f.elements[_ppsi(lid, "spssWFEH")].value="GroupBy";

    if(null != f.elements[_ppsi(lid, "spssGBKH")]) f.elements[_ppsi(lid, "spssGBKH")].value=strURI;
    f.submit();
}

function OnChangeSortBySelection(lid, cid)
{ULShpi:;
    var s="";
    if(null != document.forms[0].elements[cid]) s = document.forms[0].elements[cid].value;
    var d = s.toUpperCase().lastIndexOf(' DESC');
    if(d>=0){
        s=s.substring(0, d);
    }
    var q = '"';
    var is = s.indexOf(q);
    var ie = s.lastIndexOf(q);
    if(is >=0){
        if(ie > is) s=s.substring(0, ie);
        s=s.substring(is + q.length, s.length);
    }
    OnCCT(lid, s, d>=0?'DESC':'ASC');
}
function OnCCT(lid, uri, o)         
{ULShpi:;
    var strTitleHiden = _ppsi(lid, 'spssSBCTH');
    var f = document.forms[0];
    if(null != f.elements[strTitleHiden])
    {
        f.elements[strTitleHiden].value = '\"' + uri + '\"';
        if( o.toUpperCase() == 'DESC'){
            f.elements[strTitleHiden].value +=' DESC';
        }
    }
    if(null != document.forms[0].elements[_ppsi(lid, "spssWFEH")]) document.forms[0].elements[_ppsi(lid,"spssWFEH")].value="SortBy";
    if(null != document.forms[0].elements[_ppsi(lid, "SBCH")]) document.forms[0].elements[_ppsi(lid,"SBCH")].value="1";
    document.forms[0].submit();
}

function OnGFL(lid, s, t)       
{ULShpi:;

    if(null != document.forms[0].elements[_ppsi(lid, "spssWFEH")])
        document.forms[0].elements[_ppsi(lid, "spssWFEH")].value="SeeFullListLink";
    if(null != document.forms[0].elements[_ppsi(lid, "spssWMCH")])
        document.forms[0].elements[_ppsi(lid, "spssWMCH")].value=s;
    if(null != document.forms[0].elements[_ppsi(lid, "spssWMDH")])
        document.forms[0].elements[_ppsi(lid, "spssWMDH")].value=t;
    document.forms[0].submit();
}

function SearchShowHideGroup(eid, gid, bE)        
{ULShpi:;
    var elem = document.getElementById(eid);
    if ( null == elem) return;

    var prefix = eid.substring(0, eid.indexOf('_t'));
    var sMatch = new RegExp(prefix+"_g"+gid+"_r");
    var oAll = document.getElementsByTagName("TR");
    var l = oAll.length;
    for(var i=0; i<l; i++)
    {
        var tmp=oAll[i];
        if(tmp.id.search(sMatch) >= 0)
        {
            if(bE) 
            {
                tmp.className = tmp.className.replace(/groupHide/g, "groupShow");
            }
            else
            {
                tmp.className = tmp.className.replace(/groupShow/g, "groupHide");
            }
        }
    }

    var ns, fs;
    if(bE){
        ns = eid.replace("_te_", "_tc_");
    }else{
        ns = eid.replace("_tc_", "_te_");
    }
    fs = document.getElementById(ns);
    if(null != fs) fs.style.display = "";
    elem.style.display = "none";

    try {
        ResizePeopleImages();
    }
    catch (e) {
    }
}

function OnExpandCollapseAll(lid, cid, expand)
{ULShpi:;
    var sMatch = new RegExp(_ppsi(lid,"_g([\\d]+)_r[\\d]"));    
    var oAll = document.getElementsByTagName("TR");
    var l = oAll.length;
    var i, temp, rg, fid, flk, exid, exlk;
    var ngid, gid = -1;

    for(i=0; i<l; i++){
        tmp=oAll[i];
        if(null != sMatch.exec(tmp.id))
        {
            ngid = RegExp.$1;
            if ( ngid != gid )  
            {

                fid = _ppsi(lid,  "_tc_" + RegExp.$1); flk = document.links.item(fid);
                exid = _ppsi(lid, "_te_" + RegExp.$1); exlk = document.links.item(exid);

                if (null != exlk){
                    exlk.style.display = expand?"none":"";
                    if (null != flk)  flk.style.display =  expand?"":"none";
                }

                gid = ngid;     
            }

            if(expand)
            {
                tmp.className = tmp.className.replace(/groupHide/g, "groupShow");
            }
            else 
            {
                tmp.className = tmp.className.replace(/groupShow/g, "groupHide");
            }
        }
    }

    if(null != document.forms[0].elements[_ppsi(lid, "spssAGECH")])
        document.forms[0].elements[_ppsi(lid, "spssAGECH")].value = expand;
    document.cookie = cid + "="+expand+"; expires=" + GetCookieExpireTime();
    if(null != document.forms[0].elements[_ppsi(lid, "spssECAH")])
        document.forms[0].elements[_ppsi(lid, "spssECAH")].value = expand;
}

function GetPinLink(lid)
{ULShpi:;
    var o = document.forms[0].elements[_ppsi(lid, "spssQI")];
    if(null != o){
        var i=document.URL.indexOf('?');
        if(i>=0) return document.URL.substring(0, i)+'?'+o.value;
        else return document.URL+'?'+o.value;
    }
    else return null;
}

function GetTaxonomyApplyFilterUrl(taggingContainerId, columnId)
{ULShpi:;
	var taggingContainer = document.getElementById("TaggingControl_" + taggingContainerId);
	if (taggingContainer == null)
	{
		return '';
	}
	var taggingControl = new Microsoft.SharePoint.Taxonomy.ControlObject(taggingContainer);
	if (taggingControl == null)
	{
		return '';
	}

	var terms = new Microsoft.SharePoint.Taxonomy.Term.getTerms(taggingControl.getRawText());
	if (terms && terms.length > 0)
	{

		var url = document.URL.replace(/&start1=[0-9]+/ig, "");
		var matchs = /(r=.+?)&/g.exec(url);
		if (matchs == null || matchs.length == 0)
		{
			matchs = /(r=.+)/g.exec(url);
		}
		var keyword = "";
		if (matchs != null && matchs.length >= 1)
		{
			keyword = matchs[1];
		}
		var newkeyword = keyword;

		for (var i = 0; i < terms.length; i++)
		{
			var guid = terms[i].get_guid();
                               var text = terms[i].get_text();
			if (guid == "00000000-0000-0000-0000-000000000000")
			{
				return '';
			}

			var filterIn = "";
			if (columnId == "Tags")
			{
				filterIn = "owstaxIdMetadataAllTagsInfo=#0" + guid + ':"' + text + '"';
			}
			else
			{
				filterIn = '"owstaxId' + columnId + '"=#' + guid + ':"' + text + '"';
			}

			filterIn = encodeURIComponent(filterIn).replace(/-/g, "%2D");

			if (keyword.indexOf(filterIn) >= 0)
			{

			}
			else if (newkeyword == "")
			{
				newkeyword = filterIn;
			}
			else
			{
				newkeyword = newkeyword + "%20" + filterIn;
			}
		}

		if (keyword == "")
		{
			return url.replace(/&r=/, "") + "&r=" + newkeyword;
		}
		else
		{
			return url.replace(keyword, newkeyword);
		}
	}
	else
	{
		return '';
	}
}

var containerIds = [];

function RenderTaggingControl(taggingContainerId, isTagsColumn, sspList, termSetList, metadataServiceUrl, 
	lcid, morePanelSuffix, columnName, showControl, isUIRightToLeft)
{ULShpi:;
	if (typeof(RTE) == 'undefined')
	{
		var fn = function()
		{ULShpi:;
			RenderTaggingControl(taggingContainerId, isTagsColumn, sspList, 
				termSetList, metadataServiceUrl, lcid, 
				morePanelSuffix, columnName, showControl, isUIRightToLeft);
		}
		RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.js');
		RegisterSodDep('ScriptForWebTaggingUI.js', 'sp.ui.rte.js');
	        SP.SOD.executeFunc('ScriptForWebTaggingUI.js', 'undefined', fn);
		return;
	}
	containerIds.push(taggingContainerId);
	var taggingControl = document.getElementById("TaggingControl_" + taggingContainerId);

	if (taggingControl == null)
	{
		alert("control is null");
		return;
	}

	if (taggingControl.childNodes.length <= 1)
	{
	        taggingControl['InputFieldId'] = "MetadataHiddenInput_" + taggingContainerId;
		if (isTagsColumn)
			taggingControl['TermSetId'] = "00000000-0000-0000-0000-000000000000";
		else
			taggingControl['TermSetId'] = termSetList;
		taggingControl['SspId'] = sspList;
		taggingControl['AnchorId'] = "00000000-0000-0000-0000-000000000000";
	        taggingControl['IsMulti'] = true;
		taggingControl['ExcludeKeyword'] = false;
		taggingControl['FieldName'] = columnName;
		taggingControl['DisplayPickerButton'] = true;
		taggingControl['WebServiceUrl'] = metadataServiceUrl;
		taggingControl['Lcid'] = lcid;

		taggingControl['IsUIRightToLeft'] = isUIRightToLeft;
		taggingControl['IsAddTerms'] = false;
		taggingControl['IsIgnoreFormatting'] = true;
		taggingControl['IsIncludeDeprecated'] = true;
		taggingControl['IsIncludePathData'] = false;
		taggingControl['IsIncludeTermSetName'] = false;
		taggingControl['IsIncludeUnavailable'] = true;
		taggingControl['IsSpanTermSets'] = isTagsColumn;
		taggingControl['IsSpanTermStores'] = isTagsColumn;
		taggingControl['IsUseCommaAsDelimiter'] = false;

		if (showControl == true)
		{
			Microsoft.SharePoint.Taxonomy.ScriptForWebTaggingUI.onLoad("TaggingControl_" + taggingContainerId);

			if (taggingControl.nextSibling != null)
				taggingControl.nextSibling.style.display='';
		}
	}

	SetElementGroupDisplay(morePanelSuffix, "none");
	var moreLink = document.getElementById(morePanelSuffix + "_" + taggingContainerId);
	if (moreLink != null)
	{
		moreLink.style.display = 'none';
		var nextSibling = moreLink.nextSibling;
		if (nextSibling != null)
		{
			nextSibling.style.display='block';
			nextSibling = nextSibling.nextSibling;
			if (nextSibling != null)
			{
				nextSibling.style.display='block';
				nextSibling.focus();
			}
		}
	}
}

function GoSearch(PmtId, TbId, HdQId, bApQ, bSc, DDId, HdSId, HdLId, HdFId, implicitScopeVal, Url, thisSite, thisList, thisFolder, relatedSites, csUrl, mFilters, AlertMessage)
{ULShpi:;
    try
    {
        AddSearchoptionsToQuery();
    }
    catch(e) {}
    var k = document.forms[0].elements[TbId].value;
    k = k.replace( /\s*$/, '' );
    var ui = '1';
    if (PmtId){
        ui = document.forms[0].elements[PmtId].Value;
    }                                                   
    if(k == '' || ui == '0'){
        alert(AlertMessage);
        if(null != event){
            event.returnValue = false;
            return false;
        }
        else return;
    }

    var sch = '?';
    if (suggestedQuery)
    {
        sch += 'sq=1&';
    }
    sch += 'k=' + encodeURIComponent(k);

    var paramToTocpy = new Array("rm","rm1","rm2","rm3","rm4","rm5","ql","ql1","ql2","ql3","ql4","ql5","v","v1","v2","v3","v4","v5","hs","hs1","hs2","hs3","hs4","hs5");    	
    for (var i = 0; i < paramToTocpy.length; i++)
    {
        var paramVal = GetUrlKeyValue(paramToTocpy[i], true);
        if (paramVal && paramVal.length > 0)
        {
            sch += '&' + paramToTocpy[i] + '=' + paramVal;
        }
    }

    if (mFilters != null && mFilters != ''){
        sch += '&r=' + encodeURIComponent(mFilters);
    }
    if(null != HdQId){
        var sa = document.forms[0].elements[HdQId].value;     
        if (bApQ)
            sch += canonicalizedUtf8FromUnicode(" "+sa);
        else
            sch += '&a='+canonicalizedUtf8FromUnicode(" "+sa);              
    }

    var d=null, s='', selVal='',implicitContextualScoping = (null != implicitScopeVal);
    if (implicitContextualScoping)
    {    
        s = implicitScopeVal;
        selVal = implicitScopeVal;
    }
    else if (bSc)
    {
        d = document.forms[0].elements[DDId];
        s = d.options[d.selectedIndex].getAttribute('scope');
        if (!s)
        {
            s = d.options[d.selectedIndex].text;
        }
        selVal = d.options[d.selectedIndex].value;
    }

    if(bSc || implicitContextualScoping){
        var cs='', u='';
        var fIsCS = false;

        if (selVal==thisSite){
            cs =selVal; s='';
            u=document.forms[0].elements[HdSId].value;
            fIsCS = true;            
        }
        if (selVal==thisList){
            cs =selVal; s='';
            u=document.forms[0].elements[HdLId].value; 
            fIsCS = true;         
        }
        if (selVal==thisFolder){
            cs =s; s='';
            u=document.forms[0].elements[HdFId].value;   
            fIsCS = true;        
        }
        if (s == relatedSites) {
            s = d.options[d.selectedIndex].value;
            fIsCS = true;
        }
        if(fIsCS)
        {
            Url = csUrl;
        }
        if (s != ''){                               
            sch += "&s=" + encodeURIComponent(s);
            if (d.options[d.selectedIndex].value != '' && !fIsCS) {
                Url = d.options[d.selectedIndex].value;
            }        
        }
        if (cs != ''){          
            sch += "&cs=" + encodeURIComponent(cs);
        }
        if (u != ''){
            sch += '&u=' + encodeURIComponent(u);
        }                                
    }

    var F=document.forms[0];

    try {external.AutoCompleteSaveForm(F);} catch (err) {}

    window.location = Url + sch;

    try {if(null    != event) event.returnValue = false;} catch (err) {}
    return; 
}

function SetSpecialTermFilters(TBId, DDId, Url)
{ULShpi:;
    var sch = Url; 
    var k = document.forms[0].elements[TBId].value;
        k = k.replace( /\s*$/, '' );
    if(k != '')
    {   
        sch += '&k=' + canonicalizedUtf8FromUnicode(k);
        delim = '&';    
    }
    if (sch == Url){         
            if(null != event){
                event.returnValue = false;
                return false;
            }
            else return;
        }  

        if ( null != DDId)
        {
            var d_cs = document.forms[0].elements[DDId];    
            var v_cs = d_cs.options[d_cs.selectedIndex].value;
        sch += '&ft=' + canonicalizedUtf8FromUnicode(v_cs);

  }
  window.location = sch;
  if (null != event) event.returnValue = false;
  return false;
}

function XmlEscape(text)
{ULShpi:;
  return (text)?text.replace(/&/g,'&amp;').replace(/>/g, '&gt;').replace(/</g,'&lt;'):'';
}

function SendClick(postUrl, soapAction, env, startPos, elem) 
{ULShpi:;
    var id = elem.id;
    var titleId = id.replace('_Url', '_Title').replace('_Icon', '_Title').replace('_VBlink', '_Title');
    var posString = /\d+_Title/.exec(titleId);
    var relPosStr = /\d+/.exec(posString);
    var relPos = (relPosStr ? parseInt(relPosStr[0],10) : 0)
    var cont = /^(CSR_RV|CSR_MRL|SRP_)/.exec(id);
    var bestBet = null;
    var title = null;
    var nonClickedXml = null;
    var idprefix = titleId.replace(/\d+_Title/, '');
    var titlElemHref = null;
    var isViewInBrowserLink = (id.match('_VBlink'+'$') == '_VBlink');
    var titleElem = document.getElementById(titleId);
    if (titleElem)
    {
        title=titleElem.innerText;
        titlElemHref = titleElem.href;
    }

    if (/^BBR_/.exec(id))
    {
        var bbTitleId = /\d+$/.exec(id);
        relPos = bbTitleId ?parseInt(bbTitleId[0],10):0;
        var bbelem = document.getElementById('BBR_'+ bbTitleId);
        if (bbelem)
        {
  	    		bestBet = bbelem.innerHTML;
			      title = bestBet;
		    }
    }
    else if (relPos > 0 && /^SRB_/.exec(id))
    {
        nonClickedXml = '';

        for (var i = 1; i < relPos && i < 10; i++)
        {
            var ncId = idprefix + posString[0].replace(/\d+/, i);
            var nonClickedElem = document.getElementById(ncId);
            if (nonClickedElem)
            {
                nonClickedXml += '<z>'+XmlEscape(nonClickedElem.href)+'</z>';
            }
        }
    }
    else if(elem.attributes["mss_definition"] != null)
    {
	env=env.replace('<df>false</df>','<df>true</df>')
    }
    var clickUrl = elem.href;
    if (cont)
    {
       clickUrl = null;
    }
    else if ( isViewInBrowserLink && titlElemHref != null)
    {
        clickUrl = titlElemHref;
    }
    SendSoap(postUrl, soapAction, env, clickUrl, relPos + startPos - 1, bestBet, cont, nonClickedXml, title);
}

function SendSoap(postUrl, soapAction, env, clickUrl, pos, bestBet, cont, nonClickedXml, title)
{ULShpi:;
    var req = (window.XMLHttpRequest) ? (new XMLHttpRequest())
            : (window.ActiveXObject) ? (new ActiveXObject('Msxml2.XMLHTTP')) : null;
    if (req)
    {
        req.open('POST', postUrl, true);
        req.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        req.setRequestHeader('SOAPAction', soapAction);
        if (clickUrl) env = env.replace("</i>", '<c>' + XmlEscape(clickUrl) + '</c>' + "</i>");
        if (pos) env = env.replace('<r>0','<r>'+pos);
        if (cont) env = env.replace('<f>false','<f>true');
        if (logWAQuery) env = env.replace('<lq>false','<lq>true');
        logWAQuery = false;
        if (bestBet) env = env.replace("</i>", '<y>' + XmlEscape(bestBet) + '</y>' + "</i>");
        if (nonClickedXml) env = env.replace("</i>", nonClickedXml + "</i>");
        if (title) env = env.replace("</i>", '<ti>' + XmlEscape(title) + '</ti>' + "</i>");
        req.send(env);
    }
}

function SetElementDisplay(elementId, display)
{ULShpi:;
	var elmt = document.getElementById(elementId);
	if (elmt) { elmt.style.display = display; }
}

function SetElementGroupDisplay(regex, display)
{ULShpi:;
	var elmts = document.getElementsByTagName("div");
	var regex = new RegExp(regex);
	for (var i=0; i<elmts.length; i++)
	{
		var elmt = elmts[i];
		if (regex.exec(elmt.id))
		{
			elmt.style.display = display;
		}
	}
}

function ToggleRefMoreLessFilters(currElmt, showMore)
{ULShpi:;
	if (showMore)
	{
		currElmt.nextSibling.style.display='block';
		currElmt.nextSibling.nextSibling.style.display='block';
		currElmt.previousSibling.style.display='none';
		currElmt.style.display='none';
	}
	else
	{
		currElmt.previousSibling.previousSibling.style.display='block';
		currElmt.previousSibling.previousSibling.previousSibling.style.display='block';
		currElmt.previousSibling.style.display='none';
		currElmt.style.display='none';
		currElmt.previousSibling.previousSibling.focus();	
	}
}

function ToggleTaxonomyLessFilters(currElmt)
{ULShpi:;
	currElmt.previousSibling.previousSibling.style.display='block';
	currElmt.style.display='none';
	currElmt.previousSibling.style.display='none';
	currElmt.previousSibling.previousSibling.focus();	
}

if (!String.prototype.FST_startsWith) {
     String.prototype.FST_startsWith = function(str)
     {ULShpi:;
       if (str == null) {
         return false;
       }
       if(!str.length) {
         return false;
       }
       if(str.length>this.length)
       {
         return false;
       }
       return(this.substr(0,str.length)==str);
    }   
}

function AjaxReplacementRequest(id)
{ULShpi:;
     this._delegatePostFix = id;
}

AjaxReplacementRequest.prototype =
{
    _iframeId: null,
    _callbackFunction: null,
    _url: null,

    set_url: function(url) {ULShpi:;
        this._url = url;
    },
    set_testurl: function(url) {ULShpi:;
        this._testImageUrl = url;
    },
    add_completed: function(callbackFunction) {ULShpi:;
        this._callbackFunction = callbackFunction;
    },

    invoke: function() {ULShpi:;

        if (this._testImageUrl) {
            var imgEl = document.createElement('IMG');
            imgEl.style.width = '0px';
            imgEl.style.height = '0px';
            imgEl.style.border = '0px';
            imgEl.alt = '';
            imgEl.onload = Function.createDelegate(this, this.invokeAfterTestImageLoad);
            imgEl.onerror = Function.createDelegate(this, this.invokeOnErrorImageLoad);
            imgEl.src = this._testImageUrl; 
            try {
                var bodyElem = document.getElementsByTagName('body')[0];
                bodyElem.appendChild(imgEl);                
	          } catch (exception) {

                  this.invokeAfterTestImageLoad();
	          }            
        }
        else {
            this.invokeAfterTestImageLoad();
        }
    },

    invokeOnErrorImageLoad:function() {ULShpi:;
        this.onCompletedHandler("ERROR: WAC not available!");
    },

    invokeAfterTestImageLoad: function() {ULShpi:;

        var delegateFn = Function.createDelegate(this, this.onCompletedHandler);
        var delegateFnName = 'DelegateFn_' + this._delegatePostFix ;

        window[delegateFnName] = delegateFn;        

        var headEl = document.getElementsByTagName('head')[0];
        var scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.src = this._url + '&callbackFunctionName=' + delegateFnName;
        headEl.appendChild(scriptEl);
    },

    onCompletedHandler: function(serverData) {ULShpi:;
        this._callbackFunction(serverData);
    }
}   

FST_FlickScrollWindow = function(previewWindowId, previewDivId, id)
{ULShpi:;
    this._id = id;
    this._previewWindowId = previewWindowId;
    this._previewDivId = previewDivId;    
}

FST_FlickScrollWindow.prototype =
{

    _id: null,
    _element: null,
    _previewWindow: null,
    _previewWindowId: null,
    _previewDiv: null,
    _previewDivId: null,
    _visible: false,
    _leftArrow: null,
    _rightArrow:null,
    _leftArrowDis: null,
    _rightArrowDis:null,

    _isDragging: false,
    _dragStartX: 0,
    _dragStartY: 0,
    _dragPrevX: 0,
    _dragPrevY: 0,
    _lastDragTime: 0,

    _animTimeLength: 1500, 
    _lastSpeedX: 0,
    _lastSpeedY: 0,
    _currSpeedX: 0,
    _currSpeedY: 0,
    _floatScrollPosX: 0,
    _floatScrollPosY: 0,
    _tamperCheckX: 0,
    _tamperCheckY: 0,
    _animTimeStart: 0,
    _lastAnimTime: 0,
    _animTimeoutId: null, 
    _isRtl:false,   

    initialize: function()
    {ULShpi:;
        this._isRtl = document.dir == 'rtl';
        this._previewWindow = document.getElementById(this._previewWindowId);
		this._previewDiv = document.getElementById(this._previewDivId);
		this._leftArrowDis = document.getElementById('FST_leftArrowDis_'+this._id);
		this._rightArrowDis = document.getElementById('FST_rightArrowDis_'+this._id);
		this._leftArrow = document.getElementById('FST_leftArrow_'+this._id);
		this._rightArrow = document.getElementById('FST_rightArrow_'+this._id);		
		this._previewLink = document.getElementById('FST_previewLink_'+this._id);
		this._previewLinkClose = document.getElementById('FST_previewLinkClose_'+this._id);

		if (this._isRtl) {
		    var toSwitchBackground = this._leftArrow.style.background;
		    this._leftArrow.style.background = this._rightArrow.style.background;
		    this._rightArrow.style.background = toSwitchBackground;
		    toSwitchBackground = this._leftArrowDis.style.background;
		    this._leftArrowDis.style.background = this._rightArrowDis.style.background;
		    this._rightArrowDis.style.background = toSwitchBackground;
		}

        this._previewDiv.onmousedown = Function.createDelegate(this, this.myBeginDrag);
        this._previewDiv.onmousemove = Function.createDelegate(this, this.myDrag);
        this._previewDiv.onmouseup = Function.createDelegate(this, this.myEndDrag);
    },

    ToggleVisible: function()
    {ULShpi:;
        this._visible = !this._visible;

       if (this._visible)
       {
          this._previewDiv.innerHTML = this.preparedHtml;
          this._previewWindow.style.width = '635px';

       }
        this._previewWindow.style.display = this._visible ? 'block' : 'none'; 
	      this._leftArrow.style.display = this._visible ? 'block' : 'none';       
	      this._rightArrow.style.display = this._visible ? 'block' : 'none'; 
	      this._leftArrowDis.style.display = this._visible ? 'block' : 'none';       
	      this._rightArrowDis.style.display = this._visible ? 'block' : 'none';	
	      this._previewLink.style.display = this._visible ? 'none' : 'inline-block';
	      this._previewLinkClose.style.display = this._visible ? 'inline-block' : 'none';	      	      

        if (this._visible) this.checkButtons();  
    },

    myBeginDrag: function(event)
    {ULShpi:;
        if (event == null)
            event = window.event;

        var target = event.target != null ? event.target : event.srcElement;

        {
            this.stopAnimation();

            this._dragStartX = event.clientX;
            this._dragStartY = event.clientY;
            this._dragPrevX = event.clientX;
            this._dragPrevY = event.clientY;

            this._lastDragTime = new Date().getTime();

            this._isDragging = true;
            return false;
        }
    },

    myDrag: function(event)
    {ULShpi:;
        if (event == null)
            event = window.event;

        if (this._isDragging)
        {
            var nowTime = new Date().getTime();

            var dragDeltaX = this._dragPrevX - event.clientX;
            var dragDeltaY = this._dragPrevY - event.clientY;
            if (!this._isRtl) {
                var scrollPos = this._previewWindow.scrollLeft += dragDeltaX;
                var scrollPos = this._previewWindow.scrollTop += dragDeltaY;
            } else {
                var scrollPos = this._previewWindow.scrollLeft -= dragDeltaX;
                var scrollPos = this._previewWindow.scrollTop -= dragDeltaY;
            }

	    this.checkButtons();

            this._dragPrevX = event.clientX;
            this._dragPrevY = event.clientY;

            this._lastSpeedX = dragDeltaX / (nowTime - this._lastDragTime + 1);
            this._lastSpeedY = dragDeltaY / (nowTime - this._lastDragTime + 1);

            this._lastDragTime = nowTime;

            return false;
        }
    },

    myEndDrag: function()
    {ULShpi:;
        if (this._isDragging)
        {	
            this._isDragging = false;
            if ( (Math.abs(this._lastSpeedX) > 0.2) || (Math.abs(this._lastSpeedY) > 0.2) )
            {
                this.startAnimation();
            }

        }
    },

    startAnimation: function()
    {ULShpi:;
        var nowTime = new Date().getTime();
        this._animTimeStart = nowTime;
        this._lastAnimTime = nowTime;

        this._currSpeedX = this._lastSpeedX;
        this._currSpeedY = this._lastSpeedY;

        this._floatScrollPosX = this._previewWindow.scrollLeft;
        this._floatScrollPosY = this._previewWindow.scrollTop;

        this._tamperCheckX = this._previewWindow.scrollLeft;
        this._tamperCheckY = this._previewWindow.scrollTop;

        this._animTimeoutId = setTimeout(Function.createDelegate(this, this.animate), 10);
    },

    stopAnimation: function()
    {ULShpi:;
        if (this._animTimeoutId)
        {
            clearTimeout(this._animTimeoutId);
            this._animTimeoutId = null;
        }

        this._lastSpeedX = 0;
        this._lastSpeedY = 0;
        this._currSpeedX = 0;
        this._currSpeedY = 0;
        this.checkButtons();
    },
    checkButtons: function()
    {ULShpi:;
	    var slideWidth = this._previewWindow.clientWidth;
	    var divWidth = parseInt(this._previewDiv.style.width);

	    this._leftArrow.style.top = this._previewWindow.offsetTop + 'px';
	    this._leftArrowDis.style.top = this._previewWindow.offsetTop + 'px';
	    this._rightArrow.style.top = this._previewWindow.offsetTop + 'px';
	    this._rightArrow.style.left = (slideWidth) +'px';
	    this._rightArrowDis.style.top = this._previewWindow.offsetTop + 'px';
      this._rightArrowDis.style.left = (slideWidth) +'px';

	    if (divWidth <= slideWidth || !this._visible)
	    {	  
	        this.disableButton(this._leftArrow);		
	        this.disableButton(this._leftArrowDis);		
	        this.disableButton(this._rightArrow);		
	        this.disableButton(this._rightArrowDis);	
	        return;	
	    }

	    if (this._previewWindow.scrollLeft == 0)
	    {
		    this.disableButton(this._leftArrow);	
	        this.enableButton(this._leftArrowDis);
	    }
	    else
	    {
             this.disableButton(this._leftArrowDis);
	         this.enableButton(this._leftArrow);
	    }
	    if (divWidth - slideWidth == this._previewWindow.scrollLeft)
	    {
	        this.enableButton(this._rightArrowDis);
            this.disableButton(this._rightArrow); 
       	}
	    else 
	    {
            this.disableButton(this._rightArrowDis);
            this.enableButton(this._rightArrow);  
	    }

    },
    disableButton: function(button)
    {ULShpi:;
	     button.style.display = "none";
    },
    enableButton: function(button)
    {ULShpi:;
	      button.style.display = "block";
    },

    animate: function()
    {ULShpi:;
        var nowTime = new Date().getTime();

        if (this._currSpeedX != 0)
        {
            var t = (nowTime-this._animTimeStart)/this._animTimeLength;
            if (t>=0 && t < 1)
            {
                if ((Math.abs(this._previewWindow.scrollLeft!=this._tamperCheckX)) ||
                    (Math.abs(this._previewWindow.scrollTop!=this._tamperCheckY)))
                {

                    this.stopAnimation();    
                }
                else
                {
                    var timeDelta = nowTime - this._lastAnimTime;

                    this._currSpeedX = this._lastSpeedX * (1-t)*(1-t);
                    this._currSpeedY = this._lastSpeedY * (1-t)*(1-t);

                    if(!this._isRtl) {
                      this._floatScrollPosX += this._currSpeedX * timeDelta;
                      this._floatScrollPosY += this._currSpeedY * timeDelta;
	                } else {
                      this._floatScrollPosX -= this._currSpeedX * timeDelta;
                      this._floatScrollPosY -= this._currSpeedY * timeDelta;
                    }                    

                    this._previewWindow.scrollLeft = this._floatScrollPosX;
                    this._previewWindow.scrollTop = this._floatScrollPosY;

                    this._tamperCheckX = this._previewWindow.scrollLeft;
                    this._tamperCheckY = this._previewWindow.scrollTop;

                    this._animTimeoutId = setTimeout(Function.createDelegate(this, this.animate), 10);
					this.checkButtons();

                }
            }
            else
            {
                this.stopAnimation();
            }
        }

        this._lastAnimTime = nowTime;
    },

    dummyElementWithoutComma: null
}

FST_ImageDisplayer = function(imgId, imgDivId, finalWidth, finalHeight, divClass, imgClass) 
{ULShpi:;
    this._image=document.getElementById(imgId); 
    if (this._image != null) {
        this._image.style.display = 'none';        
        this._image.width=0;
        this._image.height=0;        
    }    
    this._imageDiv = document.getElementById(imgDivId);    
    if (this._imageDiv != null) {
        this._imageDiv.style.display = 'block';
    } 
    this._final_height = finalHeight;
    this._final_width = finalWidth;
    this._divClass = divClass;    
    this._imgClass = imgClass;    
}

FST_ImageDisplayer.prototype =
{

   _final_height:80,
   _final_width:100,
   _image:null,   
   _animationSpeed:20,
   _heightReached:0,
   _withReached:0,
   _imageWidth:0,
   _imageHeight:0,  
   _imageWidthStepper:9,
   _imageHeightStepper:9,
   _stepperDecreasePercentage:0.8,   

 setImage:function(image) {ULShpi:;
   if (this._image != null) {
      this._image.style.display = '';      
      this._image.className=this._imgClass;

      this._imageHeight=this._final_height*0.7;
      this._imageWidth=this._final_width*0.7;
      if (this._imageDiv) {
        this._imageDiv.className=this._divClass;
      }      

      this._image.src = image;           
      this.display();
   }
 },

 display:function()
 {ULShpi:;
    if(this._imageHeight < this._final_height && !this._heightReached)
    {
      this._imageHeight += this._imageHeightStepper;      
      if (this._imageHeightStepper>2) {
        this._imageHeightStepper = this._imageHeightStepper*this._stepperDecreasePercentage;
      }
      this._image.style.height=this._imageHeight + 'px';      
      if(this._imageHeight > this._final_height)
      this._heightReached=1
    }    
    else this._heightReached=1; 
    if(this._imageWidth < this._final_width && !this._withReached)
    {
      this._imageWidth += this._imageWidthStepper;
      if (this._imageWidthStepper > 2) {
         this._imageWidthStepper = this._imageWidthStepper*this._stepperDecreasePercentage;
      }      

      this._image.style.width=this._imageWidth + 'px';
      if(this._imageWidth > this._final_width)
      this._withReached=1
    }
    else this._withReached=1

    if(!this._withReached ||
      !this._heightReached) {
        setTimeout(Function.createDelegate(this, this.display), this._animationSpeed);
    }
  }
}

   var FST_fullViewImgSrc = null;

    function FST_GetScrollLeft()
    {ULShpi:;
        var w = window.pageXOffset ||
                document.body.scrollLeft ||
                document.documentElement.scrollLeft;

        return w ? w : 0;
    } 

    function FST_GetScrollTop()
    {ULShpi:;
        var h = window.pageYOffset ||
                document.body.scrollTop ||
                document.documentElement.scrollTop;

        return h ? h : 0;
    }

    function FST_ShowFullView()
    {ULShpi:;
        var theDiv = document.getElementById('FST_fullSizePreviewWindow');

        if (!theDiv)
        {
            theDiv = document.createElement('div');
            theDiv.id = 'FST_fullSizePreviewWindow';
            theDiv.style.position = 'absolute';
            theDiv.style.top = '0';
            theDiv.style.left = '0';
            theDiv.style.width = 800+'px';
            theDiv.style.height = 600+'px';
            theDiv.style.zIndex = '1000';
            document.body.appendChild(theDiv);
        }

        var leftPos = FST_GetScrollLeft();
        var topPos = FST_GetScrollTop();

        theDiv.style.top = '' + topPos + 'px';
        theDiv.style.left = '' + leftPos + 'px';
        theDiv.style.display = 'block';

        theDiv.innerHTML = 
            '<center class="srch-ext-fullViewCenter">'+
                '<table class="srch-ext-fullViewTable"><tr><td class="srch-ext-fullViewTr">' +
                    '<div onclick="FST_HideFullView();" class="srch-ext-fullViewClose">X</div>'+
                '</td></tr>' +
                '<tr><td class="srch-ext-fullViewTableTd" id="FST_fullViewTd">' +
                '<img class="srch-ext-fullViewImg" src="'+FST_fullViewImgSrc+'" onclick="FST_HideFullView();" />'+
                '</td></tr></table>' +
            '</center>';
              }

    function FST_HideFullView()
    {ULShpi:;
        document.getElementById('FST_fullSizePreviewWindow').style.display='none';
    }

    var FST_displayPreview = new Array();

    function FST_CheckForPreview(id, serverredirectUrl, fileExt, windowHeight, spsiteUrl, previewTooltip, previewTooltipFailed, aamZone) 
    {ULShpi:;
        serverredirectUrl = encodeURIComponent(serverredirectUrl);        

        var previewWindowId = 'FST_previewWindow_' + id;
        var previewDivId = 'FST_previewDiv_' + id;
        var previewIconId = 'FST_previewIcon_' + id;
        var previewIconDivId = 'FST_previewIconDiv_' + id;
        var previewLinkId = 'FST_previewLink_' + id;

	      if (document.getElementById(previewWindowId) != null) {
            document.getElementById(previewWindowId).style.height = windowHeight + "px";
            document.getElementById(previewWindowId).style.display = "inline-block";
            var imageHeight = document.getElementById(previewWindowId).clientHeight;

            if (imageHeight == 0)
            {
                imageHeight = windowHeight - 4;
            }
            else 
            {
                imageHeight = imageHeight - 4;
            }
            document.getElementById(previewWindowId).style.display = "none";

            var myFlickScrollWindow = FST_displayPreview[id];

            if (!myFlickScrollWindow)
            {
                 myFlickScrollWindow = new FST_FlickScrollWindow(previewWindowId, previewDivId, id);
                 myFlickScrollWindow.initialize();
                 FST_displayPreview[id] = myFlickScrollWindow;
	    }
         }

         fileExt = fileExt.toUpperCase();

         if (fileExt.FST_startsWith('DO'))
         {
            var wordDoc = new FST_WordDocument();
            wordDoc.getPreviewImagesDoc(null, previewIconId, previewIconDivId, id, previewDivId, serverredirectUrl, imageHeight, spsiteUrl, previewTooltip, previewTooltipFailed, aamZone);
         }

         if (fileExt.FST_startsWith('PP'))
         {
            var pptPres = new FST_PPTPresentation();
            pptPres.getPreviewImagesPpt(previewLinkId, previewIconId,previewIconDivId, id, previewDivId, serverredirectUrl, imageHeight, spsiteUrl, previewTooltip, previewTooltipFailed, aamZone);
        }      
    }

    function FST_Scroll(id, dist)
    {ULShpi:;
	var myFlickScrollWindow = FST_displayPreview[id];
        if (myFlickScrollWindow)
	{
	    if (this._isRtl) {
	      dist = dist *-1;
	    }
	    myFlickScrollWindow._previewWindow.scrollLeft += dist; 

	}
    }

    var FST_ScrollTimer = new Array();

    function FST_ScrollRegister(id, dist, interval)
    {ULShpi:;
	var myScrollTimer = FST_ScrollTimer[id];
	if (myScrollTimer)
	{
		FST_Scroll(id, dist);
		var delta = 5;
		if (dist < 0) delta = -5;
		setTimeout('FST_ScrollRegister(\''+id+'\','+ (dist + delta) +')', interval);
	}
	FST_ScrollButtonCheck(id);

    }

    function FST_ScrollStart(id, dist)
    {ULShpi:;
	FST_ScrollTimer[id] = new Date().getTime();	
	setTimeout('FST_ScrollRegister(\''+id+'\','+dist+','+50+')', 200);
    }

    function FST_ScrollStop(id, dist)
    {ULShpi:;
	var myScrollTimer = FST_ScrollTimer[id];
	if (myScrollTimer)
	{
		var now = new Date().getTime();
		if (myScrollTimer + 200 > now)
			FST_Scroll(id, dist);
		FST_ScrollTimer[id] = null;
	}
	FST_ScrollButtonCheck(id);
    }

    function FST_ScrollButtonCheck(id)
    {ULShpi:;
	var myFlickScrollWindow = FST_displayPreview[id];
        if (myFlickScrollWindow)
	{
		myFlickScrollWindow.checkButtons();
	}
    }

   function FST_ShowElement(elem, display) {ULShpi:;
     if (elem != null) {
        elem.style.display = display;
     }
   }

    FST_PreviewRequests = new Array();

    function FST_RegisterDocPreviewFetch(req)
    {ULShpi:;
	FST_PreviewRequests.push(req);
    }
    var gTotReq = 0;
    var gTotReqSent = 0;

    function FST_StartDocPreviewFetch(conReq, totReq)
    {ULShpi:;
	gTotReq = totReq;
	for (var i = 0; i < conReq; i++)
		FST_DocPreviewFetch();

    }

    function FST_DocPreviewFetch()
    {ULShpi:;
	if (FST_PreviewRequests.length > 0 && gTotReqSent < gTotReq)
	{	    
        FST_PreviewRequests.shift().invoke();
	    gTotReqSent++;
	}
    }
    function FST_DocPreviewFetchFailed()
    {ULShpi:;	
    	gTotReqSent--;
	    FST_DocPreviewFetch();
    }    

    function FST_TogglePreviewWindow(id)
    {ULShpi:;
    	var myFlickScrollWindow = FST_displayPreview[id];
        if (myFlickScrollWindow) {        
            if (myFlickScrollWindow.imagesAvailable)
                myFlickScrollWindow.ToggleVisible();
        }
    }

    var gImageLoadErrors = new Array();
    function FST_ImageLoadError(id)
    {ULShpi:;
        var image = document.getElementById(id);
        if (image == null) return;
        var imageSrc = image.src;
        if (gImageLoadErrors[id] == undefined)
        {
          gImageLoadErrors[id] = 1;
        }
        else
        { 
          gImageLoadErrors[id]++;

        }

        if (gImageLoadErrors[id] > 2)
        {

          gImageLoadErrors[id] = undefined;
          return 0;
        }
        else 
         {

          image.src = "";
          image.src = imageSrc;
          return 1;
        }

    }
    function FST_ThumbnailImageLoadError(id, tooltipfailed)
    {ULShpi:;
       	if (FST_ImageLoadError('FST_previewIcon_'+id) == 0)
        { 

          var previewIconElem = document.getElementById('FST_previewIcon_'+id);  
          if (previewIconElem != null) 
          {
            previewIconElem.src = "/_layouts/images/blank.gif";
            previewIconElem.title = tooltipfailed;
          }
          var previewIconDivErrorElem =  document.getElementById('FST_prevIconDivError_' + id);  
          if (previewIconDivErrorElem  != null && previewIconElem != null) 
          {
            previewIconDivErrorElem.style.top = ((previewIconElem.height /2) ) + "px";
            previewIconDivErrorElem.style.left = ((previewIconElem.width /2) ) + "px";
            previewIconDivErrorElem.style.display = "block"; 
          } 

        }

    }

    function FST_WordDocument()
    {
    }

    FST_WordDocument.prototype =
    {
      slides: new Array(),
      docId: null,
      previewLinksId: null,
      previewIconId: null,
      previewIconDivId:null,
      previewDivId: null,
      url: null,
      gDocRef: null,
      numPages: 0,
      docDataXml: null,
      imageHeight: 0,
      imageWidth: 0,
      previewTooltip:"",
      previewTooltipFailed:"",	
      ajaxRequest: null,
      requestRetryCount: 0,

      getPreviewImagesDoc: function(previewLinksId, previewIconId, previewIconDivId, id, previewDivId, serverredirectUrl, imageHeight, spsiteurl,previewTooltip, previewTooltipFailed, aamZone)
      {ULShpi:;
				  this.docId = id;
				  this.previewLinksId = previewLinksId;
				  this.previewIconId = previewIconId;
				  this.previewDivId = previewDivId;
				  this.previewIconDivId = previewIconDivId;
				  this.imageHeight = imageHeight;
				  this.imageWidth = Math.round(imageHeight * (3.0/4.0));
				  if (previewTooltip) 
		            this.previewTooltip=previewTooltip;
		          if(previewTooltipFailed)		
		            this.previewTooltipFailed=previewTooltipFailed;				  				  

				  var myRequest=  new AjaxReplacementRequest(this.docId);

          myRequest.set_url(spsiteurl + '/_vti_bin/wacproxy.ashx?redirect=' + serverredirectUrl + '&spsite=' + encodeURIComponent(spsiteurl) + '&docType=' + 'docx' + '&zone=' + aamZone);
          myRequest.set_testurl(spsiteurl + '/_vti_bin/wacproxy.ashx?testImg=1');
				  myRequest.add_completed(Function.createDelegate(this, this.myOnCompleteDoc2));
				  this.ajaxRequest = myRequest;

				  FST_RegisterDocPreviewFetch(myRequest);
         },

    myOnCompleteDoc2: function(result)
    {ULShpi:;
	    if (result.indexOf('ERROR:') != 0) 
	    {
          try {
		         eval('var presInf = ' + result + ';');
          } catch (ex) {
              this.DocPreviewFetchFailed();
		          return;
          }
		      if (presInf == null || presInf.images == null)
		      {
              this.DocPreviewFetchFailed();
		          return;
		      }

          var html = '';
	 	      var elem = document.getElementById(this.previewIconId);

          if (presInf.images.length > 0 && elem != null) {		  
		        var previewIconElem = document.getElementById(this.previewIconId);
		        if (previewIconElem != null) {			        
		           imgDisplayer = new FST_ImageDisplayer(this.previewIconId, this.previewIconDivId, 64, 84, 'srch-ext-previewThumbnailDiv', 'srch-ext-previewIconDocImg');
		           imgDisplayer.setImage(presInf.images[0]);		           		           
		        }
		      }
		      FST_DocPreviewFetch();
    }
	  else 
	  {        

        if (this.requestRetryCount < 1 && FST_CheckIfRetryWacRequest(result) == true)
        {
              this.requestRetryCount++;
              this.ajaxRequest.invoke();
              return;
        }

        this.DocPreviewFetchFailed();
    }
    },
    DocPreviewFetchFailed: function()
    {ULShpi:;
        var previewIconElem = document.getElementById(this.previewIconId);  
        if (previewIconElem != null) 
        {
            previewIconElem.title = this.previewTooltipFailed;
        }
        var previewIconDivErrorElem =  document.getElementById('FST_prevIconDivError_' + this.docId);  
        if (previewIconDivErrorElem  != null && previewIconElem != null) 
        {
            previewIconDivErrorElem.style.top = ((previewIconElem.height /2) ) + "px";
            previewIconDivErrorElem.style.left = ((previewIconElem.width /2) ) + "px";
            previewIconDivErrorElem.style.display = "block"; 
        }
		FST_DocPreviewFetchFailed();

    },

    dummyElementWithoutTrailingComma: null
    }

    function FST_PPTPresentation()
    {
    }

    FST_PPTPresentation.prototype =
    {
	docId: null,
	previewLinksId: null,
	previewIconId: null,
	previewIconDivId: null,
	slides: new Array(),
	previewDivId: null,
	url: null,
	gDocRef: null,
	imageHeight: 0,
	imageWidth: 0,
	previewTooltip:"",
	previewTooltipFailed:"",	
	ajaxRequest: null,
	requestRetryCount: 0,

	getPreviewImagesPpt: function(previewLinksId, previewIconId, previewIconDivId, id, previewDivId, serverredirectUrl, imageHeight, spsiteurl, previewTooltip, previewTooltipFailed, aamZone)
        {ULShpi:;

		this.docId = id;
		this.previewLinksId = previewLinksId;
		this.previewIconId = previewIconId;
		this.previewIconDivId = previewIconDivId;
		this.previewDivId = previewDivId;		
		this.previewMagIconId = "FST_magIcon_" + this.docId;
		this.imageHeight = imageHeight;		
		this.imageWidth = Math.round(imageHeight * (4.0/3.0));

		if (previewTooltip) 
		    this.previewTooltip=previewTooltip;
		if(previewTooltipFailed)		
		    this.previewTooltipFailed=previewTooltipFailed;

		var myRequest = new AjaxReplacementRequest(this.docId );
		myRequest.set_url(spsiteurl   + '/_vti_bin/wacproxy.ashx?redirect=' + serverredirectUrl + '&spsite=' + encodeURIComponent(spsiteurl) + '&docType=' + 'pptx' + '&zone=' + aamZone);
		myRequest.set_testurl(spsiteurl  + '/_vti_bin/wacproxy.ashx?testImg=1');
		myRequest.add_completed(Function.createDelegate(this, this.myOnCompletePpt2));
		this.ajaxRequest = myRequest;
		FST_RegisterDocPreviewFetch(myRequest);
	},               
        myOnCompletePpt2: function(result)
        {ULShpi:;
            if (result.indexOf('ERROR:') != 0) 
	          {            
               var presInf = null;
	           try {
		             eval('presInf = ' + result + ';');
	           } catch (ex) {
	               this.DocPreviewFetchFailed();
	               return;
	           }

		       if (presInf == null || presInf == 'undefined' || presInf.images == null ||presInf.images.length == 0) 
		       {
		           this.DocPreviewFetchFailed();
			       return;
		       }

               var html = '';
               var encodedDocRef = encodeURIComponent(this.gDocRef);

               for (var i=0; i<presInf.images.length; i++)
               {  
                 var imgSrc = presInf.images[i];
		         if (i < presInf.images.length - 1)
		         {
			         html += '<img class="srch-ext-previewDivPptImg"'+ 
                             ' src="'+imgSrc+'" ' +
                             ' id="FST_PrevImg_'+this.docId+'_'+i+'"' +
                             ' height="'+this.imageHeight+'px" width="'+this.imageWidth+'px" onError="FST_ImageLoadError(\'FST_PrevImg_'+this.docId+'_'+i+'\')" />';
		         }
		         else {
			         html += '<img class="srch-ext-previewDivPptImgLast"'+ 
                             ' src="'+imgSrc+'" ' +
                             ' id="FST_PrevImg_'+this.docId+'_'+i+'"' +
                             ' height="'+this.imageHeight+'px" width="'+this.imageWidth+'px" onError="FST_ImageLoadError(\'FST_PrevImg_'+this.docId+'_'+i+'\')" />';
		         }
                 if (i == 0)
                 {
                        imgDisplayer = new FST_ImageDisplayer(this.previewIconId, this.previewIconDivId, 100, 80, 'srch-ext-previewThumbnailDiv', 'srch-ext-previewIconPptImg');
		                imgDisplayer.setImage(presInf.images[0]);
                 }
              }

              FST_displayPreview[this.docId].preparedHtml = html;
              FST_displayPreview[this.docId].imagesAvailable = true;
		      document.getElementById('FST_leftArrow_' + this.docId).style.height = this.imageHeight+'px';
		      document.getElementById('FST_rightArrow_' + this.docId).style.height = this.imageHeight+'px';
		      document.getElementById('FST_leftArrow_' + this.docId).style.lineheight = this.imageHeight+'px';
		      document.getElementById('FST_rightArrow_' + this.docId).style.lineheight = this.imageHeight+'px';
              document.getElementById(this.previewDivId).style.width = ((this.imageWidth+4) * presInf.images.length) -2 + 'px';

              FST_ShowElement(document.getElementById(this.previewLinksId), "inline");
              FST_ShowElement(document.getElementById('FST_linkSep_' + this.docId), "inline");
              FST_ShowElement(document.getElementById(this.previewMagIconId), "block");

              FST_DocPreviewFetch();
         }
         else 
	       {

            if (this.requestRetryCount < 1 && FST_CheckIfRetryWacRequest(result) == true)
            {
                  this.requestRetryCount++;
                  this.ajaxRequest.invoke();
                  return;
            }

            this.DocPreviewFetchFailed();
         }
	    },
	DocPreviewFetchFailed: function()
    {ULShpi:;
        var previewIconElem = document.getElementById(this.previewIconId);  
        if (previewIconElem != null) 
        {
            previewIconElem.title = this.previewTooltipFailed;
        }
        var previewIconDivErrorElem =  document.getElementById('FST_prevIconDivError_' + this.docId);  
        if (previewIconDivErrorElem  != null && previewIconElem != null) 
        {
            previewIconDivErrorElem.style.top = ((previewIconElem.height /2) - 8) + "px";
            previewIconDivErrorElem.style.left = ((previewIconElem.width /2) - 8) + "px";
            previewIconDivErrorElem.style.display = "block"; 
        }   
    },

	dummyElementWithoutTrailingComma: null
    };

function FST_CheckIfRetryWacRequest(result)
{ULShpi:;

    var regex = /^ERROR:(\d+):/;
    var m = regex.exec(result);

    if (m != null && m.length > 1)
    {
       var errorcode = m[1];        
       if (errorcode == 503)
       {
            return true;
       }       
    }
    return false;
}

function PostToUrl(url)
{ULShpi:;
    if(url == null || url.length <=0)
        return;
    var F=document.forms[0];
    F.action = url;
    F.method = 'post';
    F.onsubmit=function(){};
    F.submit();
}

function GetElementByIdSuffix(idSuffix, startingElement)
{ULShpi:;
    if (!startingElement || !startingElement)
    {
        return null;
    }
    var nodeQueue = [];
    var childNodes = startingElement.childNodes;
    for (var i = 0; i < childNodes.length; i++) 
    {
        var node = childNodes[i];
        if (node.nodeType == 1) 
        {
            nodeQueue[nodeQueue.length] = node;
        }
    }
    while (nodeQueue.length) 
    {
        node = nodeQueue.shift();
        if (node && node.id && node.id.endsWith(idSuffix)) 
        {
            return node;
        }
        childNodes = node.childNodes;
        for (i = 0; i < childNodes.length; i++) 
        {
            node = childNodes[i];
            if (node.nodeType == 1) 
            {
                nodeQueue[nodeQueue.length] = node;
            }
        }
    }

    return null;
}

function PrepareForPostBack(target, userName, recentTabLabel)
{ULShpi:;
    var relatedTab = $get('TabKeywordRelated', target);
    var recentTab = $get('TabRecentlyUpdated', target);

    if (relatedTab && recentTab)
    {
        Sys.UI.DomElement.addCssClass(relatedTab, 'psrch-TabSelected');
        Sys.UI.DomElement.removeCssClass(recentTab, 'psrch-TabSelected');
        DisableChildLinks(relatedTab);
        DisableChildLinks(recentTab);
    }
    else if (recentTab)
    {
        Sys.UI.DomElement.addCssClass(recentTab, 'psrch-TabSelected');
        DisableChildLinks(recentTab);
    }

    if (recentTabLabel && userName)
    {
        var recentLink = $get('LinkRecentlyUpdated', target);
        if (recentLink)
        {
            if (recentLink.textContent)
            {
                recentLink.textContent = String.format(recentTabLabel, userName);
            }
            else
            {
                recentLink.innerText = String.format(recentTabLabel, userName);
            }
        }
    }

    var results = GetElementByIdSuffix('PopupControl51A944753DF0430C8FE1EBAA70F3E945', target);
    if (results)
    {
        results.innerHTML = "";
    }

    var moreLink = $get('MoreLink', target);
    if (moreLink)
    {
        moreLink.innerHTML = "";
    }
}

function PostbackUserName(sender, target, recentTabLabel)
{ULShpi:;
    if (!sender || !target)
    {
        return;
    }
    var userNameAttr = sender.attributes.getNamedItem('PreferredName');
    if (userNameAttr)
    {
        var userName = userNameAttr.value;
        if (userName)
        {
            var targetUniqueHiddenField = $get('ControlUniqueID', target);
            if (targetUniqueHiddenField)
            {
                var targetUniqueID = targetUniqueHiddenField.value;
                if (targetUniqueID)
                {
                    PrepareForPostBack(target, userName, recentTabLabel);
                    __doPostBack(targetUniqueID, UserNamePostbackPrefix+userName);
                }
            }
        }
    }
}

function DisableChildLinks(elm)
{ULShpi:;
    if (!elm)
    {
        return;
    }
    var allLinks = elm.getElementsByTagName('a');
    if (!allLinks)
    {
        return;
    }
    for (var i = 0; i < allLinks.length; i++) 
    {
        var link = allLinks[i];
        if (link) 
        {
            link.disabled = true;
            link.removeAttribute('href');
        }
    }    
}

NotifyScriptLoadedAndExecuteWaitingJobs("search.js");

