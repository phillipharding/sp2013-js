fcchecker=function(){};fcchecker.prototype={high:2,redirectAfterFCC:function(){redirectAfterFCC()}};function redirectAfterFCC(){var a;if(!funTest()){a=fccParams().normPath;document.cookie=fccParams().normCookie}else{a=fccParams().advPath;document.cookie=fccParams().advCookie}if(window.location&&window.location.assign)window.location.assign(a);else location=a}function funTest(){return checkXmlHttpRequest()&&checkXmlDoc()&&checkTouchEvents()&&checkCSSTransform()&&checkAddEventListener()}function checkXmlHttpRequest(){try{if(window.ActiveXObject){new ActiveXObject("Microsoft.XMLHTTP");return true}}catch(a){return false}try{if(window.XMLHttpRequest){new XMLHttpRequest;return true}}catch(a){}}function checkXmlDoc(){try{if(document.implementation&&document.implementation.createDocument){var a=document.implementation.createDocument("","",null);return true}else if(window.ActiveXObject){new ActiveXObject("Microsoft.XMLDOM");return true}}catch(b){}}function checkTouchEvents(){try{if("msPointerEnabled"in navigator&&navigator.msPointerEnabled)return true}catch(a){}try{return"ontouchstart"in document&&"ontouchmove"in document&&"ontouchend"in document}catch(a){}}function checkCSSTransform(){try{for(var b=["msTransform","webkitTransform","MozTransform","OTransform","transform"],c=document.createElement("div"),a=0;a<b.length;++a)if(typeof c.style[b[a]]=="string")return true}catch(d){}}function checkAddEventListener(){try{return"addEventListener"in document&&"removeEventListener"in document}catch(a){}}checker=new fcchecker;checker.redirectAfterFCC()