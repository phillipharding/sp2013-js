function NavigationItemchange(a){ID=document.getElementById(a);subID=document.getElementById("sub-"+a);value=subID.style.display.toUpperCase();if(value=="NONE"){subID.style.display="block";ID.innerHTML=ID.innerHTML.replace("+","-")}else{subID.style.display="none";ID.innerHTML=ID.innerHTML.replace("-","+")}}function AdvPanelOpen(c){ID=document.getElementById(c);ID.style.display="block";value=c.toUpperCase();var b=document.body,a=document.documentElement;if(value=="MB-MASK-PANEL-ID")if(a.offsetHeight!=undefined&&a.scrollHeight!=undefined)ID.style.height=Math.max(a.offsetHeight,a.scrollHeight)+"px";if(b.clientWidth!=undefined&&b.offsetWidth!=undefined)ID.style.width=Math.min(b.clientWidth,b.offsetWidth)+"px"}function AdvPanelClose(a){ID=document.getElementById(a);ID.style.display="none"}window.onload=function(){var a=document.body,b=document.getElementById("mb-cmd-text-id"),c=document.getElementById("mb-title-content-id");if(b)if(a.clientWidth!=undefined&&a.offsetWidth!=undefined&&b.offsetWidth!=undefined){value=Math.min(a.clientWidth,a.offsetWidth)-b.offsetWidth-10;c.style.width=value+"px"}}