function $_global_choicebuttonfieldtemplate(){(function(){a:;var a,e=false,c,d=false,f=false,b;function k(l){var j=m$("input[id*=diidIOSaveItem]"),i=j[j.length-1];if(m$.isUndefined(i)||document.getElementById(a)==null)return;if(document.getElementById(a).value==Strings.STS.L_Completed_Text||document.getElementById(c).value=="100")return;for(var g=document.getElementById(l),e=0;e<=g.options.length-1;e++)if(g.options[e].value.length>0){var f=m$(i).closest(".ms-toolbar");if(f.length!=1)return;var h=f[0],k=h.cloneNode(true);f=m$(k).find("input");if(f.length!=1)return;var d=f[0];d.setAttribute("optionId",e.toString());d.value=g.options[e].value;d.id=a+"_"+g.options[e].value;d.name=d.id;d.onclick=function(){a:;if(typeof b!="undefined")document.getElementById(a).value=b;document.getElementById(c).value="100";document.getElementById(l).selectedIndex=parseInt(this.getAttribute("optionId"));i.click()};h.parentNode.insertBefore(k,h)}var m=GetAncestor(g,"TR");if(m!=null)m.style.display="none"}function i(a){if(a.ListSchema==null||a.ListData==null||a.ListData.Items==null)return;var c=a.ListSchema.Field;for(var d in c)if(c[d].FieldType=="OutcomeChoice"){b=a.ListData.Items[0][c[d].Name].CompletedValue;a.ListData.Items[0][c[d].Name]=a.ListData.Items[0][c[d].Name].FieldValue}}function h(h){var b=h.ListSchema.Field;for(var g in b){b[g].FieldType=="OutcomeChoice"&&f&&k(b[g].Name+"_"+b[g].Id+"_$DropDownChoice");if(!e&&b[g].Name=="Status"){a=b[g].Name+"_"+b[g].Id+"_$DropDownChoice";e=true}if(!d&&b[g].Name=="PercentComplete"){c=b[g].Name+"_"+b[g].Id+"_$NumberField";d=true}}}function j(a){f=true;return SPFieldChoice_Edit(a)}function g(){a:;var a={};a.OnPreRender=i;a.OnPostRender=h;a.Templates={Fields:{OutcomeChoice:{DisplayForm:SPField_FormDisplay_Default,EditForm:j,NewForm:SPFieldChoice_Edit}}};SPClientTemplates.TemplateManager.RegisterTemplateOverrides(a)}typeof Sys!="undefined"&&typeof Sys.Application!="undefined"&&typeof Sys.Application.notifyScriptLoaded!="undefined"&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs=="function"&&NotifyScriptLoadedAndExecuteWaitingJobs("choicebuttonfieldtemplate.js");ExecuteOrDelayUntilScriptLoaded(g,"clienttemplates.js")})()}function ULSFzQ(){var a={};a.ULSTeamName="Microsoft SharePoint Foundation";a.ULSFileName="choicebuttonfieldtemplate.commentedjs";return a}$_global_choicebuttonfieldtemplate();