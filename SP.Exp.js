function ULShEI(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Exp.js";return o;}
Type.registerNamespace("SP.Exp");SP.Exp.Node=function(b,a){ULShEI:;this.m_children=a;this.m_value=b};SP.Exp.Node.v=function(a){ULShEI:;return new SP.Exp.ValueNode(a)};SP.Exp.Node.f=function(a,b){ULShEI:;return new SP.Exp.FunctionNode(a,b)};SP.Exp.Node.a=function(a){ULShEI:;return new SP.Exp.ArgumentNode(a)};SP.Exp.Node.m=function(){ULShEI:;return new SP.Exp.MissingArgumentNode};SP.Exp.Node.prototype={m_children:null,m_value:null};SP.Exp.ValueNode=function(a){ULShEI:;SP.Exp.ValueNode.initializeBase(this,[a,null])};SP.Exp.ValueNode.prototype={$K_0:function(){ULShEI:;return this.m_value}};SP.Exp.FunctionNode=function(a,b){ULShEI:;SP.Exp.FunctionNode.initializeBase(this,[a,b])};SP.Exp.FunctionNode.$g=function(e,d){ULShEI:;for(var b=d.length,c=new Array(b),a=0;a<b;a++)c[a]=d[a].$K_0(e);return c};SP.Exp.FunctionNode.prototype={$K_0:function(d){ULShEI:;var a=SP.Exp.FunctionNode.$g(d,this.m_children),b=this.m_value,c=SP.Exp.Functions.$8[b];return c(a)}};SP.Exp.ArgumentNode=function(a){ULShEI:;SP.Exp.ArgumentNode.initializeBase(this,[a,null])};SP.Exp.ArgumentNode.prototype={$K_0:function(b){ULShEI:;var a=b.$R_0[this.m_value];return typeof a==="object"&&!a?new SP.Exp.CalcErrorNull:a}};SP.Exp.MissingArgumentNode=function(){ULShEI:;SP.Exp.MissingArgumentNode.initializeBase(this,[null,null])};SP.Exp.MissingArgumentNode.prototype={$K_0:function(){ULShEI:;return new SP.Exp.MissingArgumentValue}};SP.Exp.Calc=function(){};SP.Exp.Calc.get_strictTypeCoercion=function(){ULShEI:;return SP.Exp.Calc.$1};SP.Exp.Calc.set_strictTypeCoercion=function(a){ULShEI:;SP.Exp.Calc.$1=a;return a};SP.Exp.Calc.eval=function(c,b){ULShEI:;var d=new SP.Exp.CalcContext(b),a=c.$K_0(d);if(SP.Exp.CalcErrorNull.isInstanceOfType(a))a=null;return a};SP.Exp.Calc.registerCustomFunction=function(a,b){ULShEI:;a=a.toUpperCase();if(SP.Exp.Functions.$8[a])return false;SP.Exp.Functions.$8[a]=b;return true};SP.Exp.Calc.valid=function(b,c){ULShEI:;var a=SP.Exp.Calc.eval(b,[c]);if(typeof a==="object"&&!a)return true;switch(SP.Exp.CalcUtils.$3(a)){case 1:return!!a;case 4:return a;case 3:return true;default:return false}};SP.Exp.CalcContext=function(a){ULShEI:;this.$R_0=a};SP.Exp.CalcContext.prototype={$R_0:null};SP.Exp.CalcError=function(){};SP.Exp.CalcError.prototype={toLocaleString:function(){ULShEI:;return this.toString()}};SP.Exp.CalcErrorDiv0=function(){ULShEI:;SP.Exp.CalcErrorDiv0.initializeBase(this)};SP.Exp.CalcErrorDiv0.prototype={toString:function(){ULShEI:;return"#DIV/0!"}};SP.Exp.CalcErrorValue=function(){ULShEI:;SP.Exp.CalcErrorValue.initializeBase(this)};SP.Exp.CalcErrorValue.prototype={toString:function(){ULShEI:;return"#VALUE!"}};SP.Exp.CalcErrorRef=function(){ULShEI:;SP.Exp.CalcErrorRef.initializeBase(this)};SP.Exp.CalcErrorRef.prototype={toString:function(){ULShEI:;return"#REF!"}};SP.Exp.CalcErrorName=function(){ULShEI:;SP.Exp.CalcErrorName.initializeBase(this)};SP.Exp.CalcErrorName.prototype={toString:function(){ULShEI:;return"#NAME?"}};SP.Exp.CalcErrorNum=function(){ULShEI:;SP.Exp.CalcErrorNum.initializeBase(this)};SP.Exp.CalcErrorNum.prototype={toString:function(){ULShEI:;return"#NUM!"}};SP.Exp.CalcErrorNA=function(){ULShEI:;SP.Exp.CalcErrorNA.initializeBase(this)};SP.Exp.CalcErrorNA.prototype={toString:function(){ULShEI:;return"#N/A"}};SP.Exp.CalcErrorNull=function(){ULShEI:;SP.Exp.CalcErrorNull.initializeBase(this)};SP.Exp.CalcErrorNull.prototype={toString:function(){ULShEI:;return"#NULL!"}};SP.Exp.MissingArgumentValue=function(){};SP.Exp.CalcUtils=function(){};SP.Exp.CalcUtils.convertToNumber=function(b){ULShEI:;var c=SP.Exp.CalcUtils.$3(b);if(SP.Exp.CalcUtils.$7(c,1))throw Error.argumentType();var a=null;switch(c){case 1:a=b;break;case 2:a=SP.Exp.CalcUtils.parseNumber(b,true,true,null);break;case 3:a=SP.Exp.CalcUtils.convertDateToNumber(b);break;case 4:a=b?1:0}if(!SP.Exp.CalcUtils.$O(a))throw Error.argumentType();return a};SP.Exp.CalcUtils.parseNumber=function(a,i,h,f){ULShEI:;var b=null,c=false,g=false;while(a.indexOf(" ")>=0)a=a.replace(" ","");if(i){var e=Sys.CultureInfo.CurrentCulture.numberFormat.PercentSymbol;c=a.indexOf(e)>=0;if(!c){e=Sys.CultureInfo.InvariantCulture.numberFormat.PercentSymbol;c=a.indexOf(e)>=0}a=a.replace(e,"")}if(!c&&h){var d=Sys.CultureInfo.CurrentCulture.numberFormat.CurrencySymbol;if(a.indexOf(d)<0){d=Sys.CultureInfo.InvariantCulture.numberFormat.CurrencySymbol;if(a.indexOf(d)<0&&f)d=f}a=a.replace(d,"");if(!a.indexOf("(")&&a.indexOf(")")>0){a=a.replace("(","");a=a.replace(")","");g=true}}b=Number.parseLocale(a);if(b===null||isNaN(b))b=Number.parseInvariant(a);if(b!==null&&!isNaN(b)&&isFinite(b)){if(c)b=b/100;if(g)b=-b}return b};SP.Exp.CalcUtils.convertToString=function(b){ULShEI:;var c=SP.Exp.CalcUtils.$3(b);if(SP.Exp.CalcUtils.$7(c,2))throw Error.argumentType();var a;switch(c){case 1:a=SP.Exp.CalcUtils.$P(b);break;case 2:a=b;break;case 3:var d=SP.Exp.CalcUtils.convertDateToNumber(b);a=SP.Exp.CalcUtils.$P(d);break;case 4:a=b?"TRUE":"FALSE";break;default:throw Error.argumentType();}return a};SP.Exp.CalcUtils.convertToBool=function(a){ULShEI:;var b=SP.Exp.CalcUtils.$3(a);if(SP.Exp.CalcUtils.$7(b,4))throw Error.argumentType();switch(b){case 4:return a;case 1:return a?true:false;case 3:return true;case 2:throw Error.argumentType();case 0:return false;default:throw Error.argumentType();}};SP.Exp.CalcUtils.convertDateToNumber=function(a){ULShEI:;var b,c,d,e;b=SP.Utilities.DateUtility.dateToJulianDay(a.getFullYear(),a.getMonth()+1,a.getDate());c=b-109205;d=(a.getSeconds()+60*(a.getMinutes()+60*a.getHours()))/86400;e=c+d;return e};SP.Exp.CalcUtils.escapeLiteralStringForRegEx=function(f){ULShEI:;for(var c=new Sys.StringBuilder,d=4,b=new Array(d),g="0".charCodeAt(0),h="a".charCodeAt(0)-10,e=0;e<f.length;e++){for(var i=f.charCodeAt(e),a=0;a<d;a++){b[a]=i>>4*(d-a-1)&15;b[a]+=b[a]<10?g:h}c.append("\\u");c.append(String.fromCharCode.apply(null,b))}return c.toString()};SP.Exp.CalcUtils.$a=function(a){ULShEI:;a+=109205;var e=a>0?Math.floor(a):Math.ceil(a),c=SP.Utilities.DateUtility.julianDayToDate(e),b=new Date(c.get_year(),c.get_month()-1,c.get_day()),d=new Date(864e5*(a-e));b.setHours(d.getUTCHours());b.setMinutes(d.getUTCMinutes());b.setSeconds(d.getUTCSeconds());return b};SP.Exp.CalcUtils.$A=function(a){ULShEI:;if(SP.Exp.CalcError.isInstanceOfType(a))return a;try{var b=SP.Exp.CalcUtils.convertToBool(a);return!b}catch(c){return new SP.Exp.CalcErrorValue}};SP.Exp.CalcUtils.$3=function(b){ULShEI:;var a=Object.getType(b);if(a===Number)return 1;else if(a===String)return 2;else if(a===Boolean)return 4;else if(a===Date)return 3;else if(a===SP.Exp.CalcErrorValue)return 102;else if(a===SP.Exp.CalcErrorDiv0)return 101;else if(a===SP.Exp.CalcErrorNull)return 103;else if(a===SP.Exp.MissingArgumentValue)return 0;throw Error.argumentType();};SP.Exp.CalcUtils.$H=function(a,b){ULShEI:;a=SP.Exp.CalcUtils.$B(a);b=SP.Exp.CalcUtils.$B(b);return a.localeCompare(b)};SP.Exp.CalcUtils.$N=function(c,d){ULShEI:;var a=d[0];if(SP.Exp.CalcError.isInstanceOfType(a))return a;try{var b=SP.Exp.CalcUtils.convertToNumber(a);return c(b)}catch(e){return new SP.Exp.CalcErrorValue}};SP.Exp.CalcUtils.$6=function(i,f,b){ULShEI:;var c=SP.Exp.CalcUtils.$2(b);if(c)return c;try{var d=b[0],e=b[1],g=SP.Exp.CalcUtils.convertToNumber(d),h=SP.Exp.CalcUtils.convertToNumber(e),a=i(g,h);if(f&&f(d,e)&&SP.Exp.CalcUtils.$O(a))a=SP.Exp.CalcUtils.$a(a);return a}catch(j){return new SP.Exp.CalcErrorValue}};SP.Exp.CalcUtils.$M=function(e,f){ULShEI:;for(var c=false,b=0;b<e.length;b++){var a=e[b];if(SP.Exp.CalcError.isInstanceOfType(a))if(SP.Exp.CalcErrorNull.isInstanceOfType(a)){c=true;continue}else return a;try{var d=SP.Exp.CalcUtils.convertToBool(a);if(f===!d)return d}catch(g){return new SP.Exp.CalcErrorValue}}return c?new SP.Exp.CalcErrorNull:f};SP.Exp.CalcUtils.$L=function(f,b){ULShEI:;var e=b.length,c=SP.Exp.CalcUtils.$2(b);if(c)return c;var d;try{d=SP.Exp.CalcUtils.convertToString(b[0])}catch(g){return new SP.Exp.CalcErrorValue}var a;if(e===2)try{a=SP.Exp.CalcUtils.convertToNumber(b[1]);a=Math.floor(a);if(!a)return"";else if(a<0)return new SP.Exp.CalcErrorValue}catch(h){return new SP.Exp.CalcErrorValue}else a=1;return f(d,a)};SP.Exp.CalcUtils.$h=function(d){ULShEI:;var e=SP.Exp.CalcUtils.$2(d);if(e)return e;var a;try{a=SP.Exp.CalcUtils.convertToString(d[1])}catch(h){return new SP.Exp.CalcErrorValue}if(!a)return new SP.Exp.CalcErrorValue;var b;try{b=SP.Exp.CalcUtils.convertToString(d[0])}catch(i){return new SP.Exp.CalcErrorValue}var c;if(d.length===3)try{c=SP.Exp.CalcUtils.convertToNumber(d[2])-1;if(c<0)return new SP.Exp.CalcErrorValue}catch(j){return new SP.Exp.CalcErrorValue}else c=0;a=a.substr(c);b=SP.Exp.CalcUtils.$B(b);a=SP.Exp.CalcUtils.$B(a);b=SP.Exp.CalcUtils.$f(b);var g=new RegExp(b),f=a.search(g);return f===-1?new SP.Exp.CalcErrorValue:f+c+1};SP.Exp.CalcUtils.$2=function(c){ULShEI:;for(var a=0;a<c.length;a++){var b=c[a];if(SP.Exp.CalcError.isInstanceOfType(b))return b}return null};SP.Exp.CalcUtils.$V=function(a){ULShEI:;var b=a[0];a[0]=a[1];a[1]=b};SP.Exp.CalcUtils.$7=function(a,b){ULShEI:;return!SP.Exp.Calc.$1?false:a===1||a===3?!(b===1||b===3):a!==b};SP.Exp.CalcUtils.$O=function(a){ULShEI:;if(a===null||!Number.isInstanceOfType(a))return false;var b=a;return!isNaN(b)&&isFinite(b)};SP.Exp.CalcUtils.$f=function(a){ULShEI:;var b;a=a.replace(new RegExp("\\\\","g"),"\\u005C");a=a.replace(new RegExp("~\\*","g"),"\\u002A");a=a.replace(new RegExp("~\\?","g"),"\\u003F");a=a.replace(new RegExp("\\.","g"),"\\u002E");a=a.replace(new RegExp("\\*","g"),".*");a=a.replace(new RegExp("\\?","g"),".");b=new RegExp("([\\^\\$\\+\\!\\:\\|\\(\\)\\{\\}\\[\\]\\=])","g");var c=a.replace(b,"\\$1");return c};SP.Exp.CalcUtils.$B=function(a){ULShEI:;return a.toLocaleUpperCase()};SP.Exp.CalcUtils.$P=function(e){ULShEI:;var f=Sys.CultureInfo.CurrentCulture.numberFormat,g=f.NumberDecimalSeparator,a,b=Math.abs(e);if(b>=1e-6&&b<1e20||!b){var h=f.NumberGroupSeparator;a=e.localeFormat("N15");var i=new RegExp(SP.Exp.CalcUtils.escapeLiteralStringForRegEx(h),"g");a=a.replace(i,"");a=SP.Exp.CalcUtils.$U(a,g)}else{var d,j=e<0;d=Math.floor(Math.log(b)*Math.LOG10E);b/=Math.pow(10,d);var c=new Sys.StringBuilder;j&&c.append("-");c.append(SP.Exp.CalcUtils.$U(b.localeFormat("N14"),g));c.append("E");c.append(d<0?"-":"+");c.append(Math.abs(d).localeFormat("D"));a=c.toString()}return a};SP.Exp.CalcUtils.$U=function(a,b){ULShEI:;var c=String.localeFormat("({0:D})+$",0);a=a.replace(new RegExp(c),"");if(a.endsWith(b))a=a.replace(b,"");return a};SP.Exp.Functions=function(){};SP.Exp.Functions.$X=function(a){ULShEI:;return SP.Exp.CalcUtils.$6(function(a,b){ULShEI:;return a+b},function(a,b){ULShEI:;return!!(Date.isInstanceOfType(a)^Date.isInstanceOfType(b))},a)};SP.Exp.Functions.$15=function(a){ULShEI:;return SP.Exp.CalcUtils.$6(function(a,b){ULShEI:;return a-b},function(a,b){ULShEI:;return!!(Date.isInstanceOfType(a)^Date.isInstanceOfType(b))},a)};SP.Exp.Functions.$u=function(a){ULShEI:;return SP.Exp.CalcUtils.$6(function(a,b){ULShEI:;return a*b},function(a,b){ULShEI:;return!!(Date.isInstanceOfType(a)^Date.isInstanceOfType(b))},a)};SP.Exp.Functions.$e=function(a){ULShEI:;return SP.Exp.CalcUtils.$6(function(b,a){ULShEI:;return!a?new SP.Exp.CalcErrorDiv0:b/a},function(a,b){ULShEI:;return Date.isInstanceOfType(a)&&!Date.isInstanceOfType(b)},a)};SP.Exp.Functions.$t=function(a){ULShEI:;return SP.Exp.CalcUtils.$N(function(a){ULShEI:;return-a},a)};SP.Exp.Functions.$13=function(b){ULShEI:;var a=function(c,a){ULShEI:;a=a>0?Math.floor(a):Math.ceil(a);var b=Math.pow(10,a);return Math.round(c*b)/b};return SP.Exp.CalcUtils.$6(a,null,b)};SP.Exp.Functions.$11=function(a){ULShEI:;return SP.Exp.CalcUtils.$N(function(a){ULShEI:;return a/100},a)};SP.Exp.Functions.$9=function(d){ULShEI:;var e=SP.Exp.CalcUtils.$2(d);if(e)return e;var b=d[0],a=d[1],f=SP.Exp.CalcUtils.$3(b),c=SP.Exp.CalcUtils.$3(a);if(SP.Exp.CalcUtils.$7(f,c))return new SP.Exp.CalcErrorValue;switch(f){case 1:var g=b;switch(c){case 1:return g<a;case 3:return g<SP.Exp.CalcUtils.convertDateToNumber(a);case 2:case 4:return true}break;case 4:switch(c){case 4:return!b&&a;case 1:case 2:case 3:return false}break;case 2:switch(c){case 2:return SP.Exp.CalcUtils.$H(b,a)<0;case 1:case 3:return false;case 4:return true}break;case 3:var h=b;switch(c){case 3:return h.getTime()<a.getTime();case 1:return SP.Exp.CalcUtils.convertDateToNumber(h)<a;case 2:case 4:return true}}return new SP.Exp.CalcErrorValue};SP.Exp.Functions.$J=function(d){ULShEI:;var e=SP.Exp.CalcUtils.$2(d);if(e)return e;var b=d[0],a=d[1],f=SP.Exp.CalcUtils.$3(b),c=SP.Exp.CalcUtils.$3(a);if(SP.Exp.CalcUtils.$7(f,c))return new SP.Exp.CalcErrorValue;switch(f){case 1:var g=b;switch(c){case 1:return g===a;case 3:return g===SP.Exp.CalcUtils.convertDateToNumber(a);default:return false}case 4:switch(c){case 4:return b===a;default:return false}case 2:switch(c){case 2:return!SP.Exp.CalcUtils.$H(b,a);default:return false}case 3:var h=b;switch(c){case 3:return h.getTime()===a.getTime();case 1:return SP.Exp.CalcUtils.convertDateToNumber(h)===a;default:return false}default:return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$v=function(a){ULShEI:;return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$J(a))};SP.Exp.Functions.$o=function(a){ULShEI:;var b=SP.Exp.CalcUtils.$2(a);if(b)return b;SP.Exp.CalcUtils.$V(a);return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$9(a))};SP.Exp.Functions.$j=function(a){ULShEI:;var b=SP.Exp.CalcUtils.$2(a);if(b)return b;SP.Exp.CalcUtils.$V(a);return SP.Exp.Functions.$9(a)};SP.Exp.Functions.$i=function(a){ULShEI:;return SP.Exp.CalcUtils.$A(SP.Exp.Functions.$9(a))};SP.Exp.Functions.$Y=function(a){ULShEI:;return SP.Exp.CalcUtils.$M(a,true)};SP.Exp.Functions.$10=function(a){ULShEI:;return SP.Exp.CalcUtils.$M(a,false)};SP.Exp.Functions.$w=function(a){ULShEI:;return SP.Exp.CalcUtils.$A(a[0])};SP.Exp.Functions.$m=function(a){ULShEI:;return SP.Exp.CalcErrorNull.isInstanceOfType(a[0])};SP.Exp.Functions.$z=function(a){ULShEI:;return SP.Exp.CalcErrorNull.isInstanceOfType(a[0])?a[1]:a[0]};SP.Exp.Functions.$k=function(a){ULShEI:;return SP.Exp.CalcError.isInstanceOfType(a[0])?SP.Exp.CalcErrorNull.isInstanceOfType(a[0])?a[0]:a[1]:a[0]};SP.Exp.Functions.$y=function(){ULShEI:;return new SP.Exp.CalcErrorNull};SP.Exp.Functions.$l=function(a){ULShEI:;var b=a[0];if(SP.Exp.CalcError.isInstanceOfType(b))return b;try{return SP.Exp.CalcUtils.convertToBool(b)?a[1]:a.length>2?a[2]:false}catch(c){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$q=function(c){ULShEI:;var a=c[0];if(SP.Exp.CalcError.isInstanceOfType(a))return a;try{var b=SP.Exp.CalcUtils.convertToString(a);return b.length}catch(d){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$17=function(c){ULShEI:;var a=c[0];if(SP.Exp.CalcError.isInstanceOfType(a))return a;try{var b=SP.Exp.CalcUtils.convertToString(a);return b.toUpperCase()}catch(d){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$r=function(c){ULShEI:;var a=c[0];if(SP.Exp.CalcError.isInstanceOfType(a))return a;try{var b=SP.Exp.CalcUtils.convertToString(a);return b.toLowerCase()}catch(d){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$Z=function(g){ULShEI:;var c=new Sys.StringBuilder,d=false,e=SP.Exp.Calc.$1;SP.Exp.Calc.$1=false;try{for(var b=0;b<g.length;b++){var a=g[b];if(SP.Exp.CalcErrorNull.isInstanceOfType(a))continue;else if(SP.Exp.CalcError.isInstanceOfType(a))return a;if(e){var f=SP.Exp.CalcUtils.$3(a);if(f!==1&&f!==2)return new SP.Exp.CalcErrorValue}d=true;c.append(SP.Exp.CalcUtils.convertToString(a))}return d?c.toString():new SP.Exp.CalcErrorNull}finally{SP.Exp.Calc.$1=e}};SP.Exp.Functions.$s=function(a){ULShEI:;var c=SP.Exp.CalcUtils.$2(a);if(c)return c;try{var e=SP.Exp.CalcUtils.convertToString(a[0]),d=Math.floor(SP.Exp.CalcUtils.convertToNumber(a[1])),b=Math.floor(SP.Exp.CalcUtils.convertToNumber(a[2]));return d<=0||b<0?new SP.Exp.CalcErrorValue:!b?"":e.substr(d-1,b)}catch(f){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$12=function(a){ULShEI:;return SP.Exp.CalcUtils.$L(function(a,b){ULShEI:;return a.substr(a.length-b,b)},a)};SP.Exp.Functions.$p=function(a){ULShEI:;return SP.Exp.CalcUtils.$L(function(a,b){ULShEI:;return a.substring(0,b)},a)};SP.Exp.Functions.$14=function(a){ULShEI:;return SP.Exp.CalcUtils.$h(a)};SP.Exp.Functions.$b=function(a){ULShEI:;a[3]=0;a[4]=0;a[5]=0;return SP.Exp.Functions.$I(a)};SP.Exp.Functions.$I=function(a){ULShEI:;var e=SP.Exp.CalcUtils.$2(a);if(e)return e;try{var b=SP.Exp.CalcUtils.convertToNumber(a[0]),c=SP.Exp.CalcUtils.convertToNumber(a[1]),d=SP.Exp.CalcUtils.convertToNumber(a[2]),f=SP.Exp.CalcUtils.convertToNumber(a[3]),g=SP.Exp.CalcUtils.convertToNumber(a[4]),h=SP.Exp.CalcUtils.convertToNumber(a[5]);if(b<1900)b+=1900;if(c<=SP.Exp.Functions.$G||c>=32767||d<=SP.Exp.Functions.$G||d>=32767||f>32767||g>32767||h>32767)return new SP.Exp.CalcErrorNum;var i=new Date(b,c-1,d,f,g,h),j=i.getTime();return j<SP.Exp.Functions.$T||j>SP.Exp.Functions.$S?new SP.Exp.CalcErrorNum:i}catch(k){return new SP.Exp.CalcErrorValue}};SP.Exp.Functions.$x=function(){ULShEI:;return new Date};SP.Exp.Functions.$16=function(){ULShEI:;var a=new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a};SP.Exp.Functions.$18=function(d){ULShEI:;var a=d[0];if(SP.Exp.CalcError.isInstanceOfType(a))return a;if(Boolean.isInstanceOfType(a))return new SP.Exp.CalcErrorValue;var b=SP.Exp.Calc.$1;try{SP.Exp.Calc.$1=false;var c=SP.Exp.CalcUtils.convertToNumber(a);return c}catch(e){return new SP.Exp.CalcErrorValue}finally{SP.Exp.Calc.$1=b}};Type.registerNamespace("SP.DateTimeUtil");SP.DateTimeUtil.GregorianCalendarImpl=function(){ULShEI:;SP.DateTimeUtil.GregorianCalendarImpl.initializeBase(this)};SP.DateTimeUtil.GregorianCalendarImpl.$5=function(a){ULShEI:;return SP.DateTimeUtil.SolarCalendarImpl.$5(a)};SP.DateTimeUtil.GregorianCalendarImpl.$c=function(a,b,c){ULShEI:;return SP.DateTimeUtil.GregorianCalendarImpl.$W(a)+SP.DateTimeUtil.GregorianCalendarImpl.$4[SP.DateTimeUtil.SolarCalendarImpl.$5(a)?1:0][b-1]+c-1};SP.DateTimeUtil.GregorianCalendarImpl.$W=function(b){ULShEI:;var a=b-1601;return 365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)};SP.DateTimeUtil.GregorianCalendarImpl.$n=function(d){ULShEI:;var b=d,a=new SP.DateTimeUtil.SimpleDate(0,0,0,0),c;a.set_year(Math.floor(1601+(b*400+600)/SP.DateTimeUtil.SolarCalendarImpl._DaysIn400Years));b-=SP.DateTimeUtil.GregorianCalendarImpl.$W(a.get_year());if(b<0){a.set_year(a.get_year()-1);c=SP.DateTimeUtil.GregorianCalendarImpl.$5(a.get_year());b+=c?366:365}else c=SP.DateTimeUtil.GregorianCalendarImpl.$5(a.get_year());a.set_month(1+(b>>5));a.get_month()<SP.DateTimeUtil.SolarCalendarImpl._MonthsInYear&&b>=SP.DateTimeUtil.GregorianCalendarImpl.$4[c?1:0][a.get_month()]&&a.set_month(a.get_month()+1);a.set_day(1+b-SP.DateTimeUtil.GregorianCalendarImpl.$4[c?1:0][a.get_month()-1]);return a};SP.DateTimeUtil.GregorianCalendarImpl.$d=function(c,b){ULShEI:;var a=SP.DateTimeUtil.GregorianCalendarImpl.$5(c);return SP.DateTimeUtil.GregorianCalendarImpl.$4[a?1:0][b]-SP.DateTimeUtil.GregorianCalendarImpl.$4[a?1:0][b-1]};SP.DateTimeUtil.SimpleDate=function(b,a,c,d){ULShEI:;this.$F_0=b;this.$E_0=a;this.$C_0=c;this.$D_0=d;this.$Q_0=b+a+c+d};SP.DateTimeUtil.SimpleDate.dateGreater=function(a,b){ULShEI:;return a.get_era()>b.get_era()||a.get_era()===b.get_era()&&(a.get_year()>b.get_year()||a.get_year()===b.get_year()&&(a.get_month()>b.get_month()||a.get_month()===b.get_month()&&a.get_day()>b.get_day()))};SP.DateTimeUtil.SimpleDate.dateLess=function(a,b){ULShEI:;return a.get_era()<b.get_era()||a.get_era()===b.get_era()&&(a.get_year()<b.get_year()||a.get_year()===b.get_year()&&(a.get_month()<b.get_month()||a.get_month()===b.get_month()&&a.get_day()<b.get_day()))};SP.DateTimeUtil.SimpleDate.dateGreaterEqual=function(a,b){ULShEI:;return!SP.DateTimeUtil.SimpleDate.dateLess(a,b)};SP.DateTimeUtil.SimpleDate.dateLessEqual=function(a,b){ULShEI:;return!SP.DateTimeUtil.SimpleDate.dateGreater(a,b)};SP.DateTimeUtil.SimpleDate.dateEquals=function(a,b){ULShEI:;return a.get_year()===b.get_year()&&a.get_month()===b.get_month()&&a.get_day()===b.get_day()};SP.DateTimeUtil.SimpleDate.prototype={$F_0:0,$E_0:0,$C_0:0,$D_0:0,$Q_0:0,get_year:function(){ULShEI:;return this.$F_0},set_year:function(a){ULShEI:;this.$F_0=a<<0;return a},get_month:function(){ULShEI:;return this.$E_0},set_month:function(a){ULShEI:;this.$E_0=a<<0;return a},get_day:function(){ULShEI:;return this.$C_0},set_day:function(a){ULShEI:;this.$C_0=a<<0;return a},get_era:function(){ULShEI:;return this.$D_0},set_era:function(a){ULShEI:;this.$D_0=a<<0;return a},equals:function(a){ULShEI:;return SP.DateTimeUtil.SimpleDate.dateEquals(this,a)},getHashCode:function(){ULShEI:;return this.$Q_0}};SP.DateTimeUtil.SolarCalendarImpl=function(){};SP.DateTimeUtil.SolarCalendarImpl.$5=function(a){ULShEI:;return 0===a%400?true:0===a%100?false:0===a%4?true:false};Type.registerNamespace("SP.Utilities");SP.Utilities.DateUtility=function(){};SP.Utilities.DateUtility.isLeapYear=function(a){ULShEI:;return SP.DateTimeUtil.GregorianCalendarImpl.$5(a)};SP.Utilities.DateUtility.dateToJulianDay=function(b,a,c){ULShEI:;return SP.DateTimeUtil.GregorianCalendarImpl.$c(b,a,c)};SP.Utilities.DateUtility.julianDayToDate=function(a){ULShEI:;return SP.DateTimeUtil.GregorianCalendarImpl.$n(a)};SP.Utilities.DateUtility.daysInMonth=function(b,a){ULShEI:;return SP.DateTimeUtil.GregorianCalendarImpl.$d(b,a)};SP.Exp.Node.registerClass("SP.Exp.Node");SP.Exp.ValueNode.registerClass("SP.Exp.ValueNode",SP.Exp.Node);SP.Exp.FunctionNode.registerClass("SP.Exp.FunctionNode",SP.Exp.Node);SP.Exp.ArgumentNode.registerClass("SP.Exp.ArgumentNode",SP.Exp.Node);SP.Exp.MissingArgumentNode.registerClass("SP.Exp.MissingArgumentNode",SP.Exp.Node);SP.Exp.Calc.registerClass("SP.Exp.Calc");SP.Exp.CalcContext.registerClass("SP.Exp.CalcContext");SP.Exp.CalcError.registerClass("SP.Exp.CalcError");SP.Exp.CalcErrorDiv0.registerClass("SP.Exp.CalcErrorDiv0",SP.Exp.CalcError);SP.Exp.CalcErrorValue.registerClass("SP.Exp.CalcErrorValue",SP.Exp.CalcError);SP.Exp.CalcErrorRef.registerClass("SP.Exp.CalcErrorRef",SP.Exp.CalcError);SP.Exp.CalcErrorName.registerClass("SP.Exp.CalcErrorName",SP.Exp.CalcError);SP.Exp.CalcErrorNum.registerClass("SP.Exp.CalcErrorNum",SP.Exp.CalcError);SP.Exp.CalcErrorNA.registerClass("SP.Exp.CalcErrorNA",SP.Exp.CalcError);SP.Exp.CalcErrorNull.registerClass("SP.Exp.CalcErrorNull",SP.Exp.CalcError);SP.Exp.MissingArgumentValue.registerClass("SP.Exp.MissingArgumentValue");SP.Exp.CalcUtils.registerClass("SP.Exp.CalcUtils");SP.Exp.Functions.registerClass("SP.Exp.Functions");SP.DateTimeUtil.SolarCalendarImpl.registerClass("SP.DateTimeUtil.SolarCalendarImpl");SP.DateTimeUtil.GregorianCalendarImpl.registerClass("SP.DateTimeUtil.GregorianCalendarImpl",SP.DateTimeUtil.SolarCalendarImpl);SP.DateTimeUtil.SimpleDate.registerClass("SP.DateTimeUtil.SimpleDate");SP.Utilities.DateUtility.registerClass("SP.Utilities.DateUtility");function sp_exp_initialize(){ULShEI:;SP.Exp.Calc.$1=false;SP.Exp.Functions.$8={ADD:SP.Exp.Functions.$X,CONCATENATE_DB:SP.Exp.Functions.$Z,DIV:SP.Exp.Functions.$e,MINUS:SP.Exp.Functions.$t,MUL:SP.Exp.Functions.$u,PCT:SP.Exp.Functions.$11,SUB:SP.Exp.Functions.$15,EQ:SP.Exp.Functions.$J,NE:SP.Exp.Functions.$v,LT:SP.Exp.Functions.$9,LE:SP.Exp.Functions.$o,GT:SP.Exp.Functions.$j,GE:SP.Exp.Functions.$i,AND_DB:SP.Exp.Functions.$Y,DATE:SP.Exp.Functions.$b,DATETIME:SP.Exp.Functions.$I,IF:SP.Exp.Functions.$l,ISNULL:SP.Exp.Functions.$m,LEFT:SP.Exp.Functions.$p,LEN:SP.Exp.Functions.$q,LOWER:SP.Exp.Functions.$r,MID:SP.Exp.Functions.$s,NOT:SP.Exp.Functions.$w,NOW:SP.Exp.Functions.$x,NULL:SP.Exp.Functions.$y,NZ:SP.Exp.Functions.$z,OR_DB:SP.Exp.Functions.$10,RIGHT:SP.Exp.Functions.$12,ROUND:SP.Exp.Functions.$13,SEARCH:SP.Exp.Functions.$14,TODAY:SP.Exp.Functions.$16,UPPER:SP.Exp.Functions.$17,VALUE:SP.Exp.Functions.$18,IFERROR:SP.Exp.Functions.$k};SP.Exp.Functions.$T=+new Date(1899,11,31,0,0,0);SP.Exp.Functions.$S=+new Date(9999,11,31,23,59,59);SP.Exp.Functions.$G=-32768;SP.DateTimeUtil.GregorianCalendarImpl.$4=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];SP.DateTimeUtil.SolarCalendarImpl._MonthsInYear=12;SP.DateTimeUtil.SolarCalendarImpl._DaysIn400Years=146097}sp_exp_initialize();typeof RegisterModuleInit!="undefined"&&RegisterModuleInit("sp.exp.js",sp_exp_initialize);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs=="function"&&NotifyScriptLoadedAndExecuteWaitingJobs("sp.exp.js");