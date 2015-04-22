/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_230f7245c8794f8983912fc560d03012(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_230f7245c8794f8983912fc560d03012.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsCarousel.js';
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
	      var maxBodyLengthInChars = 150;
	      var maxMetadataValue = Srch.U.maximumSocialMetadataValue;

	      if (ctx.CurrentItem.Title.toLowerCase() === "dispform.aspx")
	      {
	          ctx.CurrentItem.Title = Srch.Res.item_DefaultTitle;
	      }

	      var id = ctx.ClientControl.get_nextUniqueId();
         var titleLinkId = id + "_titleLink";
	      var itemId = id + Srch.U.Ids.item;
	      $setResultItem(itemId, ctx.CurrentItem);

         var path = ctx.CurrentItem.Path;
	      var newsitemTitle = ctx.CurrentItem.Title;
	      var newsitemTruncatedBody = '';
	      var newsitemPageImage = '';
	      var newsitemPublishedDate = '';
         if(!$isNull(ctx.CurrentItem.BodyOWSMTXT))
         {
             newsitemTruncatedBody = SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis(ctx.CurrentItem.BodyOWSMTXT, maxBodyLengthInChars);
         }
         if(!$isNull(ctx.CurrentItem.NewsPageImageOWSIMGE)) 
         {
             newsitemPageImage = ctx.CurrentItem.NewsPageImageOWSIMGE;
         }
         if (!$isNull(ctx.CurrentItem.NewsPostPublishedDate)) 
         {
				var d = new Date(ctx.CurrentItem.NewsPostPublishedDate);
				newsitemPublishedDate = String.format("<div class='news-item-newscarousel-date'><span class='date'>{0}</span><span class='month'>{1}</span></div>",
												d.getDate(), d.format('MMM'));
         }

	      var showHoverPanelCallback = null; /*Srch.U.getShowHoverPanelCallbackWide(itemId, hoverId, hoverUrl);*/
	      var hideHoverPanelCallback = null; /*Srch.U.getHideHoverPanelCallback();*/

         var newsitemAuthor = "";
         if(!$isNull(ctx.CurrentItem.AuthorOWSUSER))
         {
             newsitemAuthor = ctx.CurrentItem.AuthorOWSUSER;
         }

         var hasMetadata = false;
         if (!$isNull(ctx.CurrentItem.Created) || !$isNull(ctx.CurrentItem.LikesCount)) 
			{
             hasMetadata = true;
         }
ms_outHtml.push(''
,'			<div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="NewsCarouselItem" class="news-item-newscarousel" style="display:none;">'
,'				<!-- news page image, body, title -->'
,'				<a id="', $htmlEncode(titleLinkId) ,'" href="', $urlHtmlEncodeString(path) ,'" class="news-item-newscarousel-link" title="', $htmlEncode(newsitemTitle) ,'">'
,'					', newsitemPageImage ,''
,'					', newsitemPublishedDate ,''
,'					<span class="news-item-newscarousel-caption">'
,'						<span>', newsitemTruncatedBody ,'</span>'
,'					</span>'
,'				</a>'
,'			</div>'
);
		}
ms_outHtml.push(''
,'	'
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_230f7245c8794f8983912fc560d03012() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_NewsCarousel", DisplayTemplate_230f7245c8794f8983912fc560d03012);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsCarousel.js", DisplayTemplate_230f7245c8794f8983912fc560d03012);
}

}
RegisterTemplate_230f7245c8794f8983912fc560d03012();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fBuzz365\u002fItem_NewsCarousel.js"), RegisterTemplate_230f7245c8794f8983912fc560d03012);
}