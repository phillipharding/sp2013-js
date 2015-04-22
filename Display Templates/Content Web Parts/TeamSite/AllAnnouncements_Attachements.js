/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_2b4cd86b669c42ee8e77d7016c4c3391(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_2b4cd86b669c42ee8e77d7016c4c3391.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'Line 3':[], 'LinkOfficeChild':['LinkOfficeChild'], 'FileExtension':null, 'SecondaryFileExtension':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
); 
        if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
            var id = ctx.ClientControl.get_nextUniqueId();
            var itemId = id + Srch.U.Ids.item;
			var hoverId = id + Srch.U.Ids.hover;
			var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default_HoverPanel.js";
            $setResultItem(itemId, ctx.CurrentItem);
			if(ctx.CurrentItem.IsContainer){
				ctx.CurrentItem.csr_Icon = Srch.U.getFolderIconUrl();
			}
			
			 var linkString = ctx.CurrentItem.LinkOfficeChild;
			 var linkYes;
			 console.log(linkString );
			if($isEmptyString(linkString) == false) {
			
                var attachmentLinks = linkString.split(/\n+/);
                
                var numberOfLinks = attachmentLinks.length;
                    var linkMarkup = "";
                    for(var i=0; i<numberOfLinks; i++) {
                    	linkYes=true;
                    	linkMarkup = linkMarkup + "<a href='" + attachmentLinks[i] + "'>Attachment</a><i class='fa fa-paperclip'></i>";
					}
                }
               
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_2lines_");

var linkURL = $getItemValue(ctx, "Link URL");
linkURL.overrideValueRenderer($urlHtmlEncodeValueObject);
var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);


var line1 = $getItemValue(ctx, "Line 1");
var line2 = $getItemValue(ctx, "Line 2");
var line3 = $getItemValue(ctx, "Line 3");
var line4 = $getItemValue(ctx, "Line 4");
var itemAttach=$getItemValue(ctx, "LinkOfficeChild");

line1.overrideValueRenderer($contentLineText);
line2.overrideValueRenderer($contentLineText);
line3.overrideValueRenderer($contentLineText);
line4.overrideValueRenderer($contentLineText);

var itemYear=String(line3.value.getFullYear()).substr(2);
var itemMonth=(line3.value.getMonth() < 10 ? "0" : "") + (line3.value.getMonth() + 1);
var itemDay=line3.value.getDate();
var itemCreated=itemDay + "-"+itemMonth + "-"+ itemYear;

var containerId = encodedId + "container";
var pictureLinkId = encodedId + "pictureLink";
var pictureId = encodedId + "picture";
var dataContainerId = encodedId + "dataContainer";
var line1LinkId = encodedId + "line1Link";
var line1LinkId1= line1.value.substring(0,50).replace(" ","-");
var line1Id = encodedId + "line1";
var line2Id = encodedId + "line2";
var line3Id = encodedId + "line3";

var Currenturl=window.location.href;
var backURL=Currenturl.split("Pages")[0];
linkURL=linkURL.value + "&Source=" + backURL;
var linkTitle="Announcments published at: ";
var Sitetitle= [];
Sitetitle=backURL.split('/');
linkTitle=linkTitle+Sitetitle[Sitetitle.length-2];
			var currentItemIdx = ctx.CurrentItemIdx + 1;
			var altClass;
			if (currentItemIdx % 2 === 0) {
			    altClass = "altStyle1";
			}
			else
			{
			altClass="altStyle2";
			}
			var linkclass;
			
			if(linkYes)
			{
				 linkclass="Attachment";
			}
			else
			{
				linkclass="NoAttachment";
			
			}
			
			
			//dvAttachments
			
ms_outHtml.push(''
,'			 <div class="', altClass ,'" id="', containerId ,'" data-displaytemplate="Item2Lines">'
,'           <!-- <a class="cbs-ItemLink" title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', pictureLinkId ,'">'
,'                <img class="cbs-Thumbnail" src="', $urlHtmlEncodeString(iconURL) ,'" alt="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', pictureId ,'"/>'
,'            </a>'
,'            '
,'            removed announcments default title [title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'"]-->'
,'            <div class="dvContentGroup" id="', dataContainerId ,'">'
,'                <a class="" style="text-decoration:none;" href="#" title="', linkTitle ,'" id="', line1LinkId1 ,'">', line1 ,'</a>'
,'              	'
,'                <!--', linkURL ,'-->'
,'		 '
,''
,''
);
if(!line2.isEmpty) 
{
ms_outHtml.push(''
,'				<div class="dvAttDate">	'
,'				<div style="float:left;">',linkMarkup,'</div>'
,'				'
,'				<div class="dvannDate " style=" " title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', line3Id ,'">', itemCreated ,'</div>'
,'				</div>'
,'                <div class="dvannDetails " style=" " title="', $htmlEncode(line1.defaultValueRenderer(line1)) ,'" id="', line2Id ,'">', STSHtmlDecode(line2.value) ,'</div>'
,'               '
);
}
ms_outHtml.push(''
,'                </div>'
,'                '
,'                                '
,'                '
,'                '
,'        	</div>'
,'       '
,'    '
,''
,''
,''
,''
,'            '
); 
        } 
ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_2b4cd86b669c42ee8e77d7016c4c3391() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Default", DisplayTemplate_2b4cd86b669c42ee8e77d7016c4c3391);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js", DisplayTemplate_2b4cd86b669c42ee8e77d7016c4c3391);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
       // $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js", "~sitecollection//Style Library/RBStyles/js/jquery-1.11.1.js");
       //  $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js", "~sitecollection//Style Library/RBStyles/js/Myscript.js");
         $includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js","../../../../SiteAssets/TemplateSite/Detail Page/AllAnnouncementsStyles.css");
        
    //
}
RegisterTemplate_2b4cd86b669c42ee8e77d7016c4c3391();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fAllAnnouncements_Attachements.js"), RegisterTemplate_2b4cd86b669c42ee8e77d7016c4c3391);
}