function $_global_kpilro(){filterColumnVisible=false}function pageReadyKpi(){Sys.Application.remove_load(pageReadyKpi);typeof spKpiAllCommands!="undefined"&&spKpiAllCommands!=null&&spKpiAllCommands!=""&&__doPostBack(spKpiAllCommands,"")}var showproblemssetting;function toggleKpiExpandCollaspe(c){var e,h,g,i,b;if(!Boolean(c))c=window.event;if(Boolean(c.target))b=c.target;else if(Boolean(c.srcElement))b=c.srcElement;if(b.nodeType==3)b=b.parentNode;if(b.getAttribute("expandmode")=="collapsed"){e="";h="/_layouts/images/collapseminus.gif";g="expanded";i=""}else{e="none";h="/_layouts/images/collapseplus.gif";g="collapsed";i=""}var j=b.parentNode.parentNode;b.src=h;b.alt=i;b.setAttribute("expandmode",g);var a=kpilGetNextSibling(j);while(a!=null){if(a.nodeType!=1)return;var f=a.getAttribute("parentRowId");if(f==null)return;var d=e;if(showproblemssetting==true){var m=a.getAttribute("problem");if(m!="Yes")d="none"}if(f==j.id)a.style.display=d;else if(f.indexOf(j.id)!=-1)if(e=="none")a.style.display=d;else{var k=document.getElementById(f);if(k==null)a.style.display="";else{var l=getImageFromRow(k);if(l==null)a.style.display=d;else if(l.getAttribute("expandmode")=="expanded")a.style.display=d}}a=a.nextSibling}}function ShowOnlyProblems(b,i,m){if(b==null)return;for(var c,f=getElementsByClassName(b.parentNode.parentNode,"ms-toolbar"),a=0;a<f.length;a++)if(f[a].tagName=="A"&&f[a].childNodes.length==1&&f[a].childNodes[0].nodeType==1)b=f[a];if(b.innerHTML==null)return;if(b.innerHTML==i){b.innerHTML=m;c="";showproblemssetting=false}else{b.innerHTML=i;c="none";showproblemssetting=true}var e=b.id.substring(0,b.id.indexOf("_RptControls"));e=e.substring(0,e.lastIndexOf("_"));var g=document.getElementById("showProblems_"+e);if(g.value==null||g.value=="")g.value="Yes";else g.value="";var n=document.getElementById("kpitable_"+e),d=getElementsByClassName(n,"ms-kpirow");for(a=0;a<d.length;a++){var k=d[a].getAttribute("problem");if(c==""){var j=d[a].getAttribute("parentRowId");if(j==null)d[a].style.display=c;else{var l=document.getElementById(j),h=kpilGetFirstChild(kpilGetFirstChild(l));if(h==null)h=getImageFromRow(l);if(h.getAttribute("expandmode")=="expanded")d[a].style.display=c}}else if(k==null||k=="No")d[a].style.display=c}}function kpilGetNextSibling(b){var a=b.nextSibling;while(a.nodeType!=1)a=a.nextSibling;return a}function getImageFromRow(b){var a=kpilGetFirstChild(b).nextSibling;return kpilGetFirstChild(a).tagName!="IMG"?null:kpilGetFirstChild(a)}function kpilGetFirstChild(a){if(!Boolean(a.childNodes.length))return undefined;for(var c=a.childNodes.length,b=0;b<=c;++b)if(a.childNodes[b].nodeType==1)return a.childNodes[b];return undefined}var filterColumnVisible;function getElementsByClassName(e,d){for(var c=[],f=new RegExp("\\b"+d+"\\b"),b=e.getElementsByTagName("*"),a=0,g=b.length;a<g;a++)f.test(b[a].className)&&c.push(b[a]);return c}$_global_kpilro();