/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_90037a9d3896421e90e02a7893b5fda4(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_90037a9d3896421e90e02a7893b5fda4.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsByCategory.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'AuthorOWSUSER':['AuthorOWSUSER'], 'EditorOWSUSER':['EditorOWSUSER'], 'Path':['Path'], 'LastModifiedTime':['LastModifiedTime'], 'Created':['Created'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'ParentLink':['ParentLink'], 'AttachmentDescription':['AttachmentDescription'], 'AttachmentType':['AttachmentType'], 'AttachmentURI':['AttachmentURI'], 'RootPostID':['RootPostID'], 'LikesCount':['LikesCount'], 'NewsPostPublishedDate':['NewsPostPublishedDate'], 'NewsPostCategory':['NewsPostCategory'], 'NewsRollupImageOWSIMGE':['NewsRollupImageOWSIMGE'], 'NewsPageImageOWSIMGE':['NewsPageImageOWSIMGE'], 'BodyOWSMTXT':['BodyOWSMTXT']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
		if (!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl))
		{
	      var maxBodyLengthInChars = 275;
	      var maxMetadataValue = Srch.U.maximumSocialMetadataValue;

	      var id = ctx.ClientControl.get_nextUniqueId();
         var titleLinkId = id + "_titleLink";
	      var itemId = id + Srch.U.Ids.item;
	      $setResultItem(itemId, ctx.CurrentItem);

         var path = ctx.CurrentItem.Path;
	      var newsitemTitle = ctx.CurrentItem.Title;
	      var newsitemPostCategory = '';
	      var newsitemTruncatedBody = '';
	      var newsitemRollupImage = '';
	      var newsitemPublishedDate = '';
	      if (!$isNull(ctx.CurrentItem.NewsPostCategory)) {
				var cats = ctx.CurrentItem.NewsPostCategory.split(';');
				newsitemPostCategory = cats && cats.length ? cats[0] : 'Unknown Category';
	      }
         if(!$isNull(ctx.CurrentItem.BodyOWSMTXT)) {
             newsitemTruncatedBody = SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis(ctx.CurrentItem.BodyOWSMTXT, maxBodyLengthInChars);
         }
         if(!$isNull(ctx.CurrentItem.NewsRollupImageOWSIMGE)) {
				newsitemRollupImage = ctx.CurrentItem.NewsRollupImageOWSIMGE;
         }
         if($isEmptyString(newsitemRollupImage) && !$isNull(ctx.CurrentItem.NewsPageImageOWSIMGE)) {
             newsitemRollupImage = ctx.CurrentItem.NewsPageImageOWSIMGE;
         }
         if (!$isNull(ctx.CurrentItem.NewsPostPublishedDate)) {
				var d = new Date(ctx.CurrentItem.NewsPostPublishedDate);
				newsitemPublishedDate = String.format("<div class='news-item-newsbycategory-date'><span class='date'>{0}</span><span class='month'>{1}</span></div>",
												d.getDate(), d.format('MMM'));
         }

	      var showHoverPanelCallback = null; /*Srch.U.getShowHoverPanelCallbackWide(itemId, hoverId, hoverUrl);*/
	      var hideHoverPanelCallback = null; /*Srch.U.getHideHoverPanelCallback();*/

         var newsitemAuthor = "";
         if(!$isNull(ctx.CurrentItem.AuthorOWSUSER)) {
             newsitemAuthor = ctx.CurrentItem.AuthorOWSUSER;
         }
ms_outHtml.push(''
,'			<li id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="NewsByCategoryItem" class="news-item-newsbycategory" style="display:none;" title="', $htmlEncode(newsitemTitle) ,'">'
,'				<span class="news-item-newsbycategory-image">'
,'					', newsitemRollupImage ,''
,'				</span>'
,'				<div>'
,'					<span class="news-item-newsbycategory-caption">'
,'						<h3>', newsitemPostCategory ,'</h3>'
,'						<p>', newsitemTruncatedBody ,'</p>'
,'					</span>'
,'					<a id="', $htmlEncode(titleLinkId) ,'" href="', $urlHtmlEncodeString(path) ,'" class="news-item-newsbycategory-link" title="', $htmlEncode(newsitemTitle) ,'">'
,'						READ FULL ARTICLE&#160;<i class="fa fa-arrow-circle-right"></i>'
,'					</a>'
,'				</div>'
,'			</li>'
);
		}
ms_outHtml.push(''
,'	'
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_90037a9d3896421e90e02a7893b5fda4() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_NewsByCategory", DisplayTemplate_90037a9d3896421e90e02a7893b5fda4);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsByCategory.js", DisplayTemplate_90037a9d3896421e90e02a7893b5fda4);
}

}
RegisterTemplate_90037a9d3896421e90e02a7893b5fda4();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsByCategory.js"), RegisterTemplate_90037a9d3896421e90e02a7893b5fda4);
}