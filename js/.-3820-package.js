(function () {
	'use strict';

	/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
	!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e);}("undefined"!=typeof window?window:undefined,function(C,e){var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return "function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o);}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return !m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return (t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return !(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return !1;return !0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n);},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase();});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return -1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T();},ae=be(function(e){return !0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType;}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t));}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1;}};}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else {if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",");}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0);}finally{s===S&&e.removeAttribute("id");}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return !!e(t)}catch(e){return !1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t;}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return -1;return e?1:-1}function de(t){return function(e){return "input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return ("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return "form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]));})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return !Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return [o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return [o]}return []}}),b.find.TAG=d.getElementsByTagName?function(e,t){return "undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]");}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:");})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F);}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return !0;return !1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0);}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return (e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return (e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1);}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e);}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return "*"===e?function(){return !0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return !!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return !1;u=l="only"===h&&!u&&"nextSibling";}return !0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return (d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i]);}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i));}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return -1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return (t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return !1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return "input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return !1;return !0},parent:function(e){return !b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return "input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return "input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return [0]}),last:ye(function(e,t){return [t-1]}),eq:ye(function(e,t,n){return [n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in {submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return !1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return !0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else {if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return !0}return !1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return !1;return !0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r);}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a));}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p);})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return -1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else {if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t);}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h);}m&&((o=!s&&o)&&u--,e&&c.push(o));}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f);}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r);}return i&&(k=h,w=p),c},m?le(r):r))).selector=e;}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length);}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return (l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return !0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e);}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return !!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return -1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return !0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return !!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return !t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return (i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return !0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return "Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)};});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r));}catch(e){n.apply(void 0,[e]);}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0;}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1);}r.memory||(t=!1),i=!1,a&&(s=t?[]:"");},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t);});}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--;}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return !s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return !!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return !!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments);});}),i=null;}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r));}},t=s?e:function(){try{e();}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r));}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t));}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M));}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r;},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith;}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i);}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t);},S.readyException=function(e){C.setTimeout(function(){throw e});};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready();}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e);}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S]);}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++;}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]];}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i);}catch(e){}Q.set(e,t,n);}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t);},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t);}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0);}return i}return "object"==typeof n?this.each(function(){Q.set(this,n);}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e);});},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e);})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t);},o)),!r&&o&&o.empty.fire();},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n]);})})}}),S.fn.extend({queue:function(t,n){var e=2;return "string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t);})},dequeue:function(e){return this.each(function(){S.dequeue(this,e);})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o]);};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return "none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[];}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return "boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide();})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"));}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent="";}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o);}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return !0}function Te(){return !1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in "string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n);})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation());}})):void 0===Y.get(e,i)&&S.event.add(e,i,we);}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return "undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0);}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d]);}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events");}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o});}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e});}});},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0;},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault();},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation();},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation();}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e};}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}};}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return !1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t);})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return "true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a));}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o);});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l));}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0;}n[Q.expando]&&(n[Q.expando]=void 0);}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e);})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild);}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this));},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)};});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return (n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return {get:function(){if(!e())return (this.get=t).apply(this,arguments);delete this.get;}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null;}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}));}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return !r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto";}return (!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return ""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n));}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return !Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}};}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return (parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je);}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px");},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit);}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},S.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick());}function ut(){return C.setTimeout(function(){tt=void 0;}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem;}),u=function(){if(a)return !1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i;}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t);},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s();}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire();});})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0;}d[r]=y&&y[r]||S.style(e,r);}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l;}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2];})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r]);})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0));}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e);}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue);},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0);};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o);};return "string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i);})},finish:function(a){return !1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish;})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)};}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)};}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0;},S.fx.timer=function(e){S.timers.push(e),S.fx.start();},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st());},S.fx.stop=function(){nt=null;},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n);};})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e);})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return "undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n);}}),pt={set:function(e,t,n){return !1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r};});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return (e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e];})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this;}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)));}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a);}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)));}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ");}a=yt(n),r!==a&&this.setAttribute("class",a);}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n);}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""));}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return !0;return !1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t));})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t);}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value});}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation();};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C);}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t);}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this);})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e));};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1);},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r));}};});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml");}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i);});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i);}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(null==e)return "";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value);});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return {name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t);}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return "string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);}t=n[e.toLowerCase()+" "];}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host;}catch(e){y.crossDomain=!0;}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in (g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout");},y.timeout));try{h=!1,c.send(a,l);}catch(e){if(h)throw e;l(-1,e);}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else {for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i);}o=o||a;}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t);}catch(e){return {state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return {state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")));}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))};}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"");}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n);}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e));}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n);})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t);})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes);}),this}}),S.expr.pseudos.hidden=function(e){return !S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return !!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return {send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()));}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a();});},o=o("abort");try{r.send(i.hasContent&&i.data||null);}catch(e){if(o)throw e}},abort:function(){o&&o();}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return {send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type);}),E.head.appendChild(r[0]);},abort:function(){i&&i();}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments;},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0;}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return "string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o;},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return -1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e);}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e]);});}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f);}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e);});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else {t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0));}return {top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n;},t,e,arguments.length)};}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t});}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)};});}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)};}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)};});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0);},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return ("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

	const jQuery = window.jQuery.noConflict();
	const $ = jQuery;

	const exports$6 = {};

	exports$6.chromeBrowser = typeof chrome !== "undefined";

	// chrome store app
	exports$6.chrome = typeof chrome !== "undefined" && typeof chrome.storage !== "undefined";

	function canFullscreen() {
		var elem = document.body;

		if (exports$6.chrome ||
			elem.requestFullscreen ||
			elem.mozRequestFullScreen ||
			elem.webkitRequestFullscreen) {
			return true;
		}

		return false;
	}

	if (exports$6.chromeBrowser) {
		$("html").addClass("chrome-browser");
	}

	$(() => {
		if (canFullscreen()) {
			$("html").addClass("fullscreen-capable");
		}
	});

	exports$6.isFullscreen = function() {
		if (exports$6.chrome) {
			return chrome.app.window.current().isFullscreen();
		} else if ("mozFullScreenElement" in document) {
			return document.mozFullScreenElement !== null;
		} else if ("webkitFullscreenElement" in document) {
			return document.webkitFullscreenElement !== null;
		} else if ("fullscreenElement" in document) {
			return document.fullscreenElement !== null;
		}

		return false;
	};

	exports$6.fullscreen = function() {
		var elem = document.body;
		if (exports$6.chrome) {
			chrome.app.window.current().fullscreen();
		} else if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		} else {
			// unsupported
			return false;
		}

		$("html").addClass("fullscreen-enabled");
	};

	exports$6.restore = function() {
		var elem = document;
		if (exports$6.chrome) {
			chrome.app.window.current().restore();
		} else if (elem.cancelFullscreen) {
			elem.cancelFullscreen();
		} else if (elem.mozCancelFullScreen) {
			elem.mozCancelFullScreen();
		} else if (elem.webkitCancelFullScreen) {
			elem.webkitCancelFullScreen();
		} else {
			return false;
		}

		$("html").removeClass("fullscreen-enabled");
	};

	// keep the current state updated
	setInterval(function environmentUpdate() {
		if (exports$6.isFullscreen()) {
			$("html").addClass("fullscreen-enabled");
		} else {
			$("html").removeClass("fullscreen-enabled");
		}
	}, 100);

	const exports$5 = {};

	exports$5.get = (key) => {
		return new Promise((resolve, reject) => {
			if (undefined) {
				chrome.storage.sync.get(null, function(objs) {
					resolve(objs[key]);
				});
			} else {
				resolve(localStorage[key]);
			}
		});
	};

	exports$5.set = function(key, value) {
		return new Promise((resolve, reject) => {
			if (undefined) {
				var obj = {};
				obj[key] = value;
				chrome.storage.sync.set(obj, () => resolve());
			} else {
				localStorage[key] = value;
				resolve();
			}
		});
	};

	let resolveReady;
	const ready$1 = new Promise((resolve) => {
		resolveReady = resolve;
	});

	const modes = {
		twelveHour: "12hr",
		twentyFourHour: "24hr"
	},
		timeModeDefault = modes.twelveHour,
		fontDefault = 'default';

	const cache = {};

	// preload!
	Promise.all([
		exports$5.get('font'),
		exports$5.get('timeMode'),
		exports$5.get('showSeconds'),
		exports$5.get('toolbar')
	]).then(([font, timeMode, showSeconds, toolbar]) => {
		cache.timeMode = timeMode ?? timeModeDefault;
		cache.showSeconds = showSeconds === "true" || showSeconds === true;
		cache.font = font ?? fontDefault;
		cache.toolbar = toolbar ?? "false";

		console.log("Loaded settings", cache);

		resolveReady(cache);
	});

	const exports$4 = {};

	exports$4.ready = () => ready$1;

	function get(key) {return cache[key];}
	function set(key, value) {
		cache[key] = value;
		return exports$5.set(key, value);
	}
	exports$4.get = get;
	exports$4.set = set;

	exports$4.setFont = (font) => set('font', font);
	exports$4.getFont = () => get('font');

	exports$4.setTimeMode = (mode) => set('timeMode', mode);
	exports$4.getTimeMode = () => get('timeMode');

	exports$4.setShowSeconds = (showSeconds) => set('showSeconds', showSeconds ? "true" : "false");
	exports$4.getShowSeconds = () => get('showSeconds');

	exports$4.data = () => cache;

	exports$4.modes = modes;

	const exports$3 = {};

	//fgnass.github.com/spin.js#v1.2.7
	!function(window, document, undefined$1) {

		/**
		 * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
		 * Licensed under the MIT license
		 */

		var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
			, animations = {} /* Animation rules keyed by their name */
			, useCssAnimations;

		/**
		 * Utility function to create elements. If no tag name is given,
		 * a DIV is created. Optionally properties can be passed.
		 */
		function createEl(tag, prop) {
			var el = document.createElement(tag || 'div')
				, n;

			for (n in prop) el[n] = prop[n];
			return el
		}

		/**
		 * Appends children and returns the parent.
		 */
		function ins(parent /* child1, child2, ...*/) {
			for (var i = 1, n = arguments.length; i < n; i++)
				parent.appendChild(arguments[i]);

			return parent
		}

		/**
		 * Insert a new stylesheet to hold the @keyframe or VML rules.
		 */
		var sheet = function() {
			var el = createEl('style', {type: 'text/css'});
			ins(document.getElementsByTagName('head')[0], el);
			return el.sheet || el.styleSheet
		}();

		/**
		 * Creates an opacity keyframe animation rule and returns its name.
		 * Since most mobile Webkits have timing issues with animation-delay,
		 * we create separate rules for each line/segment.
		 */
		function addAnimation(alpha, trail, i, lines) {
			var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
				, start = 0.01 + i / lines * 100
				, z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
				, prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
				, pre = prefix && '-' + prefix + '-' || '';

			if (!animations[name]) {
				sheet.insertRule(
					'@' + pre + 'keyframes ' + name + '{' +
					'0%{opacity:' + z + '}' +
					start + '%{opacity:' + alpha + '}' +
					(start + 0.01) + '%{opacity:1}' +
					(start + trail) % 100 + '%{opacity:' + alpha + '}' +
					'100%{opacity:' + z + '}' +
					'}', sheet.cssRules.length);

				animations[name] = 1;
			}
			return name
		}

		/**
		 * Tries various vendor prefixes and returns the first supported property.
		 **/
		function vendor(el, prop) {
			var s = el.style
				, pp
				, i;

			if (s[prop] !== undefined$1) return prop
			prop = prop.charAt(0).toUpperCase() + prop.slice(1);
			for (i = 0; i < prefixes.length; i++) {
				pp = prefixes[i] + prop;
				if (s[pp] !== undefined$1) return pp
			}
		}

		/**
		 * Sets multiple style properties at once.
		 */
		function css(el, prop) {
			for (var n in prop)
				el.style[vendor(el, n) || n] = prop[n];

			return el
		}

		/**
		 * Fills in default values.
		 */
		function merge(obj) {
			for (var i = 1; i < arguments.length; i++) {
				var def = arguments[i];
				for (var n in def)
					if (obj[n] === undefined$1) obj[n] = def[n];
			}
			return obj
		}

		/**
		 * Returns the absolute page-offset of the given element.
		 */
		function pos(el) {
			var o = {x: el.offsetLeft, y: el.offsetTop};
			while ((el = el.offsetParent))
				o.x += el.offsetLeft, o.y += el.offsetTop;

			return o
		}

		var defaults = {
			lines: 12,            // The number of lines to draw
			length: 7,            // The length of each line
			width: 5,             // The line thickness
			radius: 10,           // The radius of the inner circle
			rotate: 0,            // Rotation offset
			corners: 1,           // Roundness (0..1)
			color: '#000',        // #rgb or #rrggbb
			speed: 1,             // Rounds per second
			trail: 100,           // Afterglow percentage
			opacity: 1 / 4,         // Opacity of the lines
			fps: 20,              // Frames per second when using setTimeout()
			zIndex: 2e9,          // Use a high z-index by default
			className: 'spinner', // CSS class to assign to the element
			top: 'auto',          // center vertically
			left: 'auto',         // center horizontally
			position: 'relative'  // element position
		};

		/** The constructor */
		var Spinner = function Spinner(o) {
			if (!this.spin) return new Spinner(o)
			this.opts = merge(o || {}, Spinner.defaults, defaults);
		};

		Spinner.defaults = {};

		merge(Spinner.prototype, {
			spin: function(target) {
				this.stop();
				var self = this
					, o = self.opts
					, el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
					, mid = o.radius + o.length + o.width
					, ep // element position
					, tp; // target position

				if (target) {
					target.insertBefore(el, target.firstChild || null);
					tp = pos(target);
					ep = pos(el);
					css(el, {
						left: (o.left == 'auto' ? tp.x - ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
						top: (o.top == 'auto' ? tp.y - ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid) + 'px'
					});
				}

				el.setAttribute('aria-role', 'progressbar');
				self.lines(el, self.opts);

				if (!useCssAnimations) {
					// No CSS animation support, use setTimeout() instead
					var i = 0
						, fps = o.fps
						, f = fps / o.speed
						, ostep = (1 - o.opacity) / (f * o.trail / 100)
						, astep = f / o.lines

						; (function anim() {
							i++;
							for (var s = o.lines; s; s--) {
								var alpha = Math.max(1 - (i + s * astep) % f * ostep, o.opacity);
								self.opacity(el, o.lines - s, alpha, o);
							}
							self.timeout = self.el && setTimeout(anim, ~~(1000 / fps));
						})();
				}
				return self
			},

			stop: function() {
				var el = this.el;
				if (el) {
					clearTimeout(this.timeout);
					if (el.parentNode) el.parentNode.removeChild(el);
					this.el = undefined$1;
				}
				return this
			},

			lines: function(el, o) {
				var i = 0
					, seg;

				function fill(color, shadow) {
					return css(createEl(), {
						position: 'absolute',
						width: (o.length + o.width) + 'px',
						height: o.width + 'px',
						background: color,
						boxShadow: shadow,
						transformOrigin: 'left',
						transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.radius + 'px' + ',0)',
						borderRadius: (o.corners * o.width >> 1) + 'px'
					})
				}

				for (; i < o.lines; i++) {
					seg = css(createEl(), {
						position: 'absolute',
						top: 1 + ~(o.width / 2) + 'px',
						transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
						opacity: o.opacity,
						animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
					});

					if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2 + 'px'}));

					ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')));
				}
				return el
			},

			opacity: function(el, i, val) {
				if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
			}

		})

			/////////////////////////////////////////////////////////////////////////
			// VML rendering for IE
			/////////////////////////////////////////////////////////////////////////

			/**
			 * Check and init VML support
			 */
			; (function() {

				function vml(tag, attr) {
					return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
				}

				var s = css(createEl('group'), {behavior: 'url(#default#VML)'});

				if (!vendor(s, 'transform') && s.adj) {

					// VML support detected. Insert CSS rule ...
					sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');

					Spinner.prototype.lines = function(el, o) {
						var r = o.length + o.width
							, s = 2 * r;

						function grp() {
							return css(
								vml('group', {
									coordsize: s + ' ' + s,
									coordorigin: -r + ' ' + -r
								}),
								{width: s, height: s}
							)
						}

						var margin = -(o.width + o.length) * 2 + 'px'
							, g = css(grp(), {position: 'absolute', top: margin, left: margin})
							, i;

						function seg(i, dx, filter) {
							ins(g,
								ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
									ins(css(vml('roundrect', {arcsize: o.corners}), {
										width: r,
										height: o.width,
										left: o.radius,
										top: -o.width >> 1,
										filter: filter
									}),
										vml('fill', {color: o.color, opacity: o.opacity}),
										vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
									)
								)
							);
						}

						if (o.shadow)
							for (i = 1; i <= o.lines; i++)
								seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');

						for (i = 1; i <= o.lines; i++) seg(i);
						return ins(el, g)
					};

					Spinner.prototype.opacity = function(el, i, val, o) {
						var c = el.firstChild;
						o = o.shadow && o.lines || 0;
						if (c && i + o < c.childNodes.length) {
							c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild;
							if (c) c.opacity = val;
						}
					};
				}
				else
					useCssAnimations = vendor(s, 'animation');
			})();

		if (typeof define == 'function' && define.amd)
			define(function() {return Spinner});
		else
			window.Spinner = Spinner;

	}(exports$3, document);

	const Spinner = exports$3.Spinner;

	function parseTimeOutOfParams(data) {
	  var tmp = '',
	    params = {},
	    // Is this a parsable date?
	    isDate = true;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	    switch (chr) {
	      case 'h':
	        params.hours = parseInt(tmp);
	        tmp = '';
	        isDate = false;
	        break;
	      case 'm':
	        params.minutes = parseInt(tmp);
	        tmp = '';
	        isDate = false;
	        break;
	      case 's':
	        params.seconds = parseInt(tmp);
	        tmp = '';
	        isDate = false;
	        break;
	      default:
	        tmp += chr;
	    }
	  }
	  if (isDate) {
	    params.time = data;
	  }

	  return params;
	}

	// Container
	var FlipClock = {};

	// Setup constants
	FlipClock.MS_TO_S = 1000;
	FlipClock.MS_TO_M = 1000 * 60;
	FlipClock.MS_TO_H = 1000 * 60 * 60;

	FlipClock.Digit = function(params) {
	  this.params = params || {};
	  this.init();
	};

	FlipClock.Digit.prototype.init = function() {
	  this.$active_top = $('<div class="top" />');
	  this.$active_bottom = $('<div class="bottom" />').append('<div class="inner" />');
	  this.$back_top = $('<div class="top" />');
	  this.$back_bottom = $('<div class="bottom" />').append('<div class="inner" />');

	  var top = $('<div class="card back" />')
	    .append(this.$back_top)
	    .append(this.$back_bottom);

	  var bottom = $('<div class="card active transform" />')
	    .append($('<div class="front" />')
	      .append(this.$active_top))
	    .append($('<div class="back" />')
	      .append(this.$active_bottom));

	  var tile = $('<div class="digit" />')
	    .append(top)
	    .append(bottom);

	  if (this.params.cls) tile.addClass(this.params.cls);

	  this.tile = tile;
	};

	FlipClock.Digit.prototype.flip = function(number) {
	  var digit = this,
	    tile = this.tile,
	    from = tile.attr("number"),
	    // Should match the duration defined in the CSS
	    transition_duration = this.params.transition_duration || 1000;

	  // Check to see if the new number is already set
	  if (number == from) return;

	  // Store the old/new number on the element
	  tile.attr("from", from);
	  tile.attr("number", number);

	  // Set the static (to-be-revealed) tile on the top to the target number
	  digit.$back_top.html(number);

	  // Set the down-sliding tile on the bottom to the target number
	  $(".inner", digit.$active_bottom).html(number);

	  $(".active", tile).addClass("transform");
	  $(".active", tile).addClass("flipped");

	  // Start flipping the bottom digit when the top one is almost complete.
	  setTimeout(function() {
	    // update hidden to new number
	    digit.$active_top.html(number);
	    $(".inner", digit.$back_bottom).html(number);

	    // reset
	    $(".active", tile).removeClass("transform");
	    $(".active", tile).removeClass("flipped");
	  }, transition_duration);
	};

	FlipClock.Layout = function(layout, params) {
	  this.cls = layout.cls;
	  layout.init.apply(this, [params]);

	  var container = $('<div />').addClass(this.cls);
	  var l = this.items.length;
	  for (var i = 0; i < l; i++) {
	    var tile = this.items[i].tile;
	    container.append(tile);
	  }

	  this.element = container;

	  this.done = false;
	  this.stop = false;

	  this.start = function() {
	    this.update();
	  };
	  this.stop = function(fireDoneEvent) {
	    this.stop = true;
	    if (fireDoneEvent === true) {
	      this.done = true;
	    }
	  };
	  this.unload = function() {
	    params.unload && params.unload();
	  };

	  this.update = function() {
	    layout.update.apply(this);
	    if (this.done !== true && this.stop !== true) {
	      var that = this;
	      setTimeout(function() {
	        that.update();
	      }, layout.refreshTime);
	    } else if (this.done === true) {
	      // done, execute complete function
	      if (params.done) params.done();
	    }
	  };
	};


	function loadFlipclock(layout, params) {
	  var clock = new FlipClock.Layout(layout, params),
	    container = params.container,
	    start = params.start;

	  if (container) {
	    $(container).append(clock.element);
	  }
	  if (start) {
	    clock.start();
	  }
	  return clock;
	}

	function blink(params) {
	  // When the countdown is done, flash the background four times to white
	  //   followed by 2 minutes of flashing to grey

	  return new function() {
	    var passive_count = params.passive || 8,
	      count = params.count || 244,
	      blink_class = "blink",
	      blink_count = 0,
	      target = params.target,
	      blinker_interval;

	    this.stop = function() {
	      blink_count = 0;
	      clearInterval(blinker_interval);
	      target.removeClass("blink").removeClass("passive_blink");
	    };

	    blinker_interval = setInterval(function() {
	      target.toggleClass(blink_class);
	      blink_count++;
	      if (blink_count == passive_count) {
	        blink_class = "passive_blink";
	      }
	      if (blink_count == count) {
	        this.stop();
	      }
	    }, 750);
	  }
	}

	// Small amount of time to add to countdown so that the first tick is the same
	// as the starting value for the countdown.
	const padding_time = 100;

	const layout$3 = {
	  cls: 'countdown_box layout_countdown',
	  refreshTime: 1000,
	  init: function(params) {
	    if (params.time) {
	      this.date = new Date(params.time);
	    } else {
	      var ms_time = Date.now();
	      if (params.seconds) {
	        ms_time += params.seconds * FlipClock.MS_TO_S;
	      }
	      if (params.minutes) {
	        ms_time += params.minutes * FlipClock.MS_TO_M;
	      }
	      if (params.hours) {
	        ms_time += params.hours * FlipClock.MS_TO_H;
	      }

	      this.date = new Date(ms_time + padding_time);
	    }

	    this.left1 = new FlipClock.Digit({
	      cls: 'time left_1',
	      transition_duration: 850
	    });
	    this.left2 = new FlipClock.Digit({
	      cls: 'time left_2',
	      transition_duration: 850
	    });
	    this.right1 = new FlipClock.Digit({
	      cls: 'time right_1',
	      transition_duration: 850
	    });
	    this.right2 = new FlipClock.Digit({
	      cls: 'time right_2',
	      transition_duration: 850
	    });

	    this.items = [
	      this.left1, this.left2,
	      this.right1, this.right2
	    ];
	  },
	  update: function() {
	    var targetMs = this.date.getTime(),
	      nowMs = Date.now(),
	      differenceMs = targetMs - nowMs;

	    if (differenceMs <= 0) {
	      differenceMs = 0;
	      this.done = true;
	    }

	    var hours = Math.floor(differenceMs / FlipClock.MS_TO_H);
	    differenceMs = differenceMs % FlipClock.MS_TO_H;

	    var minutes = Math.floor(differenceMs / FlipClock.MS_TO_M);
	    differenceMs = differenceMs % FlipClock.MS_TO_M;

	    var seconds = Math.floor(differenceMs / FlipClock.MS_TO_S);
	    differenceMs = differenceMs % FlipClock.MS_TO_S;

	    var h_tens = Math.floor(hours / 10);
	    var h_ones = hours % 10;

	    var m_tens = Math.floor(minutes / 10);
	    var m_ones = minutes % 10;

	    var s_tens = Math.floor(seconds / 10);
	    var s_ones = seconds % 10;

	    if (hours > 0) {
	      this.left1.flip(h_tens);
	      this.left2.flip(h_ones);
	      this.right1.flip(m_tens);
	      this.right2.flip(m_ones);

	    } else {

	      this.left1.flip(m_tens);
	      this.left2.flip(m_ones);
	      this.right1.flip(s_tens);
	      this.right2.flip(s_ones);
	    }
	  }
	};

	var countdown_blink;

	function initCountdown() {
	  $(document).on({
	    "countdown_minute_up": function() {
	      var value = parseInt($("#countdown_min").html(), 10);
	      if (value < 99) $("#countdown_min").html(value + 1);
	    },
	    "countdown_minute_down": function() {
	      var value = parseInt($("#countdown_min").html(), 10);
	      if (value > 0) $("#countdown_min").html(value - 1);
	    },
	    "countdown_hour_up": function() {
	      var value = parseInt($("#countdown_hour").html(), 10);
	      if (value < 99) $("#countdown_hour").html(value + 1);
	    },
	    "countdown_hour_down": function() {
	      var value = parseInt($("#countdown_hour").html(), 10);
	      if (value > 0) $("#countdown_hour").html(value - 1);
	    },
	    "countdown_second_up": function() {
	      var value = parseInt($("#countdown_sec").html(), 10);
	      if (value < 99) $("#countdown_sec").html(value + 1);
	    },
	    "countdown_second_down": function() {
	      var value = parseInt($("#countdown_sec").html(), 10);
	      if (value > 0) $("#countdown_sec").html(value - 1);
	    },
	    "countdown_start": function() {
	      var sec = parseInt($("#countdown_sec").html(), 10),
	        min = parseInt($("#countdown_min").html(), 10),
	        hour = parseInt($("#countdown_hour").html(), 10),
	        string = hour + 'h' + min + 'm' + sec + 's',
	        url = '#/c/' + string;

	      $(document).trigger('hide_dialog');
	      document.location = url;
	    }
	  });
	}

	function loadCountdown(params) {
	  params.done = function() {
	    countdown_blink = blink({
	      target: $("#container")
	    });
	  };
	  params.unload = function() {
	    countdown_blink && countdown_blink.stop();
	    countdown_blink = undefined;
	  };
	  params.container = $("#container");
	  params.start = true;

	  return loadFlipclock(layout$3, params);
	}

	const layout$2 = {
	  cls: 'time_box layout_time_ampm',
	  refreshTime: 1000,
	  init: function() {
	    this.mode = exports$4.getTimeMode();

	    this.hour1 = new FlipClock.Digit({
	      cls: 'time hour_1'
	    });
	    this.hour2 = new FlipClock.Digit({
	      cls: 'time hour_2'
	    });
	    this.minute1 = new FlipClock.Digit({
	      cls: 'time minute_1'
	    });
	    this.minute2 = new FlipClock.Digit({
	      cls: 'time minute_2'
	    });

	    this.items = [
	      this.hour1, this.hour2,
	      this.minute1, this.minute2
	    ];

	    if (this.mode == exports$4.modes.twelveHour) {
	      this.ampm = new FlipClock.Digit({
	        cls: 'ampm'
	      });

	      this.items.push(this.ampm);
	    } else {
	      this.cls += " layout_no_seconds";
	    }
	  },
	  update: function() {
	    var d = new Date();

	    d.getSeconds();

	    // flipTo(".second_1", s_tens);
	    // flipTo(".second_2", s_ones);

	    var minutes = d.getMinutes();
	    var m_tens = Math.floor(minutes / 10);
	    var m_ones = minutes % 10;

	    this.minute1.flip(m_tens);
	    this.minute2.flip(m_ones);

	    var hours = d.getHours();

	    if (this.mode == exports$4.modes.twelveHour) {
	      if (hours > 12) hours -= 12;
	      if (hours == 0) hours = 12;

	      var ampm_val = "am";
	      if (d.getHours() >= 12) ampm_val = "pm";
	      this.ampm.flip(ampm_val);
	    }

	    var h_tens = Math.floor(hours / 10);
	    var h_ones = hours % 10;

	    this.hour1.flip(h_tens == 0 ? "" : h_tens);
	    this.hour2.flip(h_ones);
	  }
	};

	const layout$1 = {
	  cls: 'time_box layout_time_ampm_sec',
	  refreshTime: 1000,
	  init: function() {
	    this.mode = exports$4.getTimeMode();

	    this.hour1 = new FlipClock.Digit({
	      cls: 'time hour_1'
	    });
	    this.hour2 = new FlipClock.Digit({
	      cls: 'time hour_2'
	    });
	    this.minute1 = new FlipClock.Digit({
	      cls: 'time minute_1'
	    });
	    this.minute2 = new FlipClock.Digit({
	      cls: 'time minute_2'
	    });
	    this.second1 = new FlipClock.Digit({
	      cls: 'time_right small second_1',
	      transition_duration: 850
	    });
	    this.second2 = new FlipClock.Digit({
	      cls: 'time_right small second_2',
	      transition_duration: 850
	    });

	    this.items = [
	      this.hour1, this.hour2,
	      this.minute1, this.minute2,
	      this.second1, this.second2
	    ];

	    if (this.mode == exports$4.modes.twelveHour) {
	      this.ampm = new FlipClock.Digit({
	        cls: 'ampm',
	        transition_duration: 850
	      });

	      this.items.push(this.ampm);
	    }
	  },
	  update: function() {
	    var d = new Date();

	    var seconds = d.getSeconds();
	    var s_tens = Math.floor(seconds / 10);
	    var s_ones = seconds % 10;

	    this.second1.flip(s_tens);
	    this.second2.flip(s_ones);

	    var minutes = d.getMinutes();
	    var m_tens = Math.floor(minutes / 10);
	    var m_ones = minutes % 10;

	    this.minute1.flip(m_tens);
	    this.minute2.flip(m_ones);

	    var hours = d.getHours();

	    if (this.mode == exports$4.modes.twelveHour) {
	      if (hours > 12) hours -= 12;
	      if (hours == 0) hours = 12;

	      var ampm_val = "am";
	      if (d.getHours() >= 12) ampm_val = "pm";
	      this.ampm.flip(ampm_val);
	    }

	    var h_tens = Math.floor(hours / 10);
	    var h_ones = hours % 10;

	    this.hour1.flip(h_tens == 0 ? "" : h_tens);
	    this.hour2.flip(h_ones);
	  }
	};

	/**
	 * Twig.js 0.5.10
	 *
	 * @copyright 2011-2013 John Roepke
	 * @license   Available under the BSD 2-Clause License
	 * @link      https://github.com/justjohn/twig.js
	 */

	var Twig = (function(Twig) {

	    Twig.VERSION = "0.5.10";

	    return Twig;
	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	var Twig = (function(Twig) {
	    // ## twig.core.js
	    //
	    // This file handles template level tokenizing, compiling and parsing.

	    Twig.trace = false;
	    Twig.debug = false;

	    // Default caching to true for the improved performance it offers
	    Twig.cache = true;

	    Twig.placeholders = {
	        parent: "{{|PARENT|}}"
	    };

	    /**
	     * Exception thrown by twig.js.
	     */
	    Twig.Error = function(message) {
	        this.message = message;
	        this.name = "TwigException";
	        this.type = "TwigException";
	    };

	    /**
	     * Get the string representation of a Twig error.
	     */
	    Twig.Error.prototype.toString = function() {
	        return this.name + ": " + this.message;
	    };

	    /**
	     * Wrapper for logging to the console.
	     */
	    Twig.log = {
	        trace: function() {if (Twig.trace && console) {console.log(Array.prototype.slice.call(arguments));} },
	        debug: function() {if (Twig.debug && console) {console.log(Array.prototype.slice.call(arguments));} }
	    };

	    /**
	     * Container for methods related to handling high level template tokens
	     *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
	     */
	    Twig.token = {};

	    /**
	     * Token types.
	     */
	    Twig.token.type = {
	        output: 'output',
	        logic: 'logic',
	        comment: 'comment',
	        raw: 'raw'
	    };

	    /**
	     * Token syntax definitions.
	     */
	    Twig.token.definitions = [
	        {
	            type: Twig.token.type.raw,
	            open: '{% raw %}',
	            close: '{% endraw %}'
	        },
	        // *Output type tokens*
	        //
	        // These typically take the form `{{ expression }}`.
	        {
	            type: Twig.token.type.output,
	            open: '{{',
	            close: '}}'
	        },
	        // *Logic type tokens*
	        //
	        // These typically take a form like `{% if expression %}` or `{% endif %}`
	        {
	            type: Twig.token.type.logic,
	            open: '{%',
	            close: '%}'
	        },
	        // *Comment type tokens*
	        //
	        // These take the form `{# anything #}`
	        {
	            type: Twig.token.type.comment,
	            open: '{#',
	            close: '#}'
	        }
	    ];


	    /**
	     * What characters start "strings" in token definitions. We need this to ignore token close
	     * strings inside an expression.
	     */
	    Twig.token.strings = ['"', "'"];

	    Twig.token.findStart = function(template) {
	        var output = {
	            position: null,
	            def: null
	        },
	            i,
	            token_template,
	            first_key_position;

	        for (i = 0; i < Twig.token.definitions.length; i++) {
	            token_template = Twig.token.definitions[i];
	            first_key_position = template.indexOf(token_template.open);

	            Twig.log.trace("Twig.token.findStart: ", "Searching for ", token_template.open, " found at ", first_key_position);

	            // Does this token occur before any other types?
	            if (first_key_position >= 0 && (output.position === null || first_key_position < output.position)) {
	                output.position = first_key_position;
	                output.def = token_template;
	            }
	        }

	        return output;
	    };

	    Twig.token.findEnd = function(template, token_def, start) {
	        var end = null,
	            found = false,
	            offset = 0,

	            // String position variables
	            str_pos = null,
	            str_found = null,
	            pos = null,
	            end_offset = null,
	            this_str_pos = null,
	            end_str_pos = null,

	            // For loop variables
	            i,
	            l;

	        while (!found) {
	            str_pos = null;
	            str_found = null;
	            pos = template.indexOf(token_def.close, offset);

	            if (pos >= 0) {
	                end = pos;
	                found = true;
	            } else {
	                // throw an exception
	                throw new Twig.Error("Unable to find closing bracket '" + token_def.close +
	                    "'" + " opened near template position " + start);
	            }

	            // Ignore quotes within comments; just look for the next comment close sequence,
	            // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95
	            if (token_def.type === Twig.token.type.comment) {
	                break;
	            }

	            l = Twig.token.strings.length;
	            for (i = 0; i < l; i += 1) {
	                this_str_pos = template.indexOf(Twig.token.strings[i], offset);

	                if (this_str_pos > 0 && this_str_pos < pos &&
	                    (str_pos === null || this_str_pos < str_pos)) {
	                    str_pos = this_str_pos;
	                    str_found = Twig.token.strings[i];
	                }
	            }

	            // We found a string before the end of the token, now find the string's end and set the search offset to it
	            if (str_pos !== null) {
	                end_offset = str_pos + 1;
	                end = null;
	                found = false;
	                while (true) {
	                    end_str_pos = template.indexOf(str_found, end_offset);
	                    if (end_str_pos < 0) {
	                        throw "Unclosed string in template";
	                    }
	                    // Ignore escaped quotes
	                    if (template.substr(end_str_pos - 1, 1) !== "\\") {
	                        offset = end_str_pos + 1;
	                        break;
	                    } else {
	                        end_offset = end_str_pos + 1;
	                    }
	                }
	            }
	        }
	        return end;
	    };

	    /**
	     * Convert a template into high-level tokens.
	     */
	    Twig.tokenize = function(template) {
	        var tokens = [],
	            // An offset for reporting errors locations in the template.
	            error_offset = 0,

	            // The start and type of the first token found in the template.
	            found_token = null,
	            // The end position of the matched token.
	            end = null;

	        while (template.length > 0) {
	            // Find the first occurance of any token type in the template
	            found_token = Twig.token.findStart(template);

	            Twig.log.trace("Twig.tokenize: ", "Found token: ", found_token);

	            if (found_token.position !== null) {
	                // Add a raw type token for anything before the start of the token
	                if (found_token.position > 0) {
	                    tokens.push({
	                        type: Twig.token.type.raw,
	                        value: template.substring(0, found_token.position)
	                    });
	                }
	                template = template.substr(found_token.position + found_token.def.open.length);
	                error_offset += found_token.position + found_token.def.open.length;

	                // Find the end of the token
	                end = Twig.token.findEnd(template, found_token.def, error_offset);

	                Twig.log.trace("Twig.tokenize: ", "Token ends at ", end);

	                tokens.push({
	                    type: found_token.def.type,
	                    value: template.substring(0, end).trim()
	                });

	                if (found_token.def.type === "logic" && template.substr(end + found_token.def.close.length, 1) === "\n") {
	                    // Newlines directly after logic tokens are ignored
	                    end += 1;
	                }

	                template = template.substr(end + found_token.def.close.length);

	                // Increment the position in the template
	                error_offset += end + found_token.def.close.length;

	            } else {
	                // No more tokens -> add the rest of the template as a raw-type token
	                tokens.push({
	                    type: Twig.token.type.raw,
	                    value: template
	                });
	                template = '';
	            }
	        }

	        return tokens;
	    };


	    Twig.compile = function(tokens) {
	        // Output and intermediate stacks
	        var output = [],
	            stack = [],
	            // The tokens between open and close tags
	            intermediate_output = [],

	            token = null,
	            logic_token = null,
	            unclosed_token = null,
	            // Temporary previous token.
	            prev_token = null,
	            // The previous token's template
	            prev_template = null,
	            // The output token
	            tok_output = null,

	            // Logic Token values
	            type = null,
	            open = null,
	            next = null;

	        while (tokens.length > 0) {
	            token = tokens.shift();
	            Twig.log.trace("Compiling token ", token);
	            switch (token.type) {
	                case Twig.token.type.raw:
	                    if (stack.length > 0) {
	                        intermediate_output.push(token);
	                    } else {
	                        output.push(token);
	                    }
	                    break;

	                case Twig.token.type.logic:
	                    // Compile the logic token
	                    logic_token = Twig.logic.compile.apply(this, [token]);

	                    type = logic_token.type;
	                    open = Twig.logic.handler[type].open;
	                    next = Twig.logic.handler[type].next;

	                    Twig.log.trace("Twig.compile: ", "Compiled logic token to ", logic_token,
	                        " next is: ", next, " open is : ", open);

	                    // Not a standalone token, check logic stack to see if this is expected
	                    if (open !== undefined && !open) {
	                        prev_token = stack.pop();
	                        prev_template = Twig.logic.handler[prev_token.type];

	                        if (prev_template.next.indexOf(type) < 0) {
	                            throw new Error(type + " not expected after a " + prev_token.type);
	                        }

	                        prev_token.output = prev_token.output || [];

	                        prev_token.output = prev_token.output.concat(intermediate_output);
	                        intermediate_output = [];

	                        tok_output = {
	                            type: Twig.token.type.logic,
	                            token: prev_token
	                        };
	                        if (stack.length > 0) {
	                            intermediate_output.push(tok_output);
	                        } else {
	                            output.push(tok_output);
	                        }
	                    }

	                    // This token requires additional tokens to complete the logic structure.
	                    if (next !== undefined && next.length > 0) {
	                        Twig.log.trace("Twig.compile: ", "Pushing ", logic_token, " to logic stack.");

	                        if (stack.length > 0) {
	                            // Put any currently held output into the output list of the logic operator
	                            // currently at the head of the stack before we push a new one on.
	                            prev_token = stack.pop();
	                            prev_token.output = prev_token.output || [];
	                            prev_token.output = prev_token.output.concat(intermediate_output);
	                            stack.push(prev_token);
	                            intermediate_output = [];
	                        }

	                        // Push the new logic token onto the logic stack
	                        stack.push(logic_token);

	                    } else if (open !== undefined && open) {
	                        tok_output = {
	                            type: Twig.token.type.logic,
	                            token: logic_token
	                        };
	                        // Standalone token (like {% set ... %}
	                        if (stack.length > 0) {
	                            intermediate_output.push(tok_output);
	                        } else {
	                            output.push(tok_output);
	                        }
	                    }
	                    break;

	                // Do nothing, comments should be ignored
	                case Twig.token.type.comment:
	                    break;

	                case Twig.token.type.output:
	                    Twig.expression.compile.apply(this, [token]);
	                    if (stack.length > 0) {
	                        intermediate_output.push(token);
	                    } else {
	                        output.push(token);
	                    }
	                    break;
	            }

	            Twig.log.trace("Twig.compile: ", " Output: ", output,
	                " Logic Stack: ", stack,
	                " Pending Output: ", intermediate_output);
	        }

	        // Verify that there are no logic tokens left in the stack.
	        if (stack.length > 0) {
	            unclosed_token = stack.pop();
	            throw new Error("Unable to find an end tag for " + unclosed_token.type +
	                ", expecting one of " + unclosed_token.next);
	        }
	        return output;
	    };

	    /**
	     * Parse a compiled template.
	     *
	     * @param {Array} tokens The compiled tokens.
	     * @param {Object} context The render context.
	     *
	     * @return {string} The parsed template.
	     */
	    Twig.parse = function(tokens, context) {
	        var output = [],
	            // Track logic chains
	            chain = true,
	            that = this;

	        // Default to an empty object if none provided
	        context = context || {};


	        tokens.forEach(function parseToken(token) {
	            Twig.log.debug("Twig.parse: ", "Parsing token: ", token);

	            switch (token.type) {
	                case Twig.token.type.raw:
	                    output.push(token.value);
	                    break;

	                case Twig.token.type.logic:
	                    var logic_token = token.token,
	                        logic = Twig.logic.parse.apply(that, [logic_token, context, chain]);

	                    if (logic.chain !== undefined) {
	                        chain = logic.chain;
	                    }
	                    if (logic.context !== undefined) {
	                        context = logic.context;
	                    }
	                    if (logic.output !== undefined) {
	                        output.push(logic.output);
	                    }
	                    break;

	                case Twig.token.type.comment:
	                    // Do nothing, comments should be ignored
	                    break;

	                case Twig.token.type.output:
	                    Twig.log.debug("Twig.parse: ", "Output token: ", token.stack);
	                    // Parse the given expression in the given context
	                    output.push(Twig.expression.parse.apply(that, [token.stack, context]));
	                    break;
	            }
	        });
	        return output.join("");
	    };

	    /**
	     * Tokenize and compile a string template.
	     *
	     * @param {string} data The template.
	     *
	     * @return {Array} The compiled tokens.
	     */
	    Twig.prepare = function(data) {
	        var tokens, raw_tokens;

	        // Tokenize
	        Twig.log.debug("Twig.prepare: ", "Tokenizing ", data);
	        raw_tokens = Twig.tokenize.apply(this, [data]);

	        // Compile
	        Twig.log.debug("Twig.prepare: ", "Compiling ", raw_tokens);
	        tokens = Twig.compile.apply(this, [raw_tokens]);

	        Twig.log.debug("Twig.prepare: ", "Compiled ", tokens);

	        return tokens;
	    };

	    // Namespace for template storage and retrieval
	    Twig.Templates = {
	        registry: {}
	    };

	    /**
	     * Is this id valid for a twig template?
	     *
	     * @param {string} id The ID to check.
	     *
	     * @throws {Twig.Error} If the ID is invalid or used.
	     * @return {boolean} True if the ID is valid.
	     */
	    Twig.validateId = function(id) {
	        if (id === "prototype") {
	            throw new Twig.Error(id + " is not a valid twig identifier");
	        } else if (Twig.Templates.registry.hasOwnProperty(id)) {
	            throw new Twig.Error("There is already a template with the ID " + id);
	        }
	        return true;
	    };

	    /**
	     * Save a template object to the store.
	     *
	     * @param {Twig.Template} template   The twig.js template to store.
	     */
	    Twig.Templates.save = function(template) {
	        if (template.id === undefined) {
	            throw new Twig.Error("Unable to save template with no id");
	        }
	        Twig.Templates.registry[template.id] = template;
	    };

	    /**
	     * Load a previously saved template from the store.
	     *
	     * @param {string} id   The ID of the template to load.
	     *
	     * @return {Twig.Template} A twig.js template stored with the provided ID.
	     */
	    Twig.Templates.load = function(id) {
	        if (!Twig.Templates.registry.hasOwnProperty(id)) {
	            return null;
	        }
	        return Twig.Templates.registry[id];
	    };

	    /**
	     * Load a template from a remote location using AJAX and saves in with the given ID.
	     *
	     * Available parameters:
	     *
	     *      async:       Should the HTTP request be performed asynchronously.
	     *                      Defaults to true.
	     *      method:      What method should be used to load the template
	     *                      (fs or ajax)
	     *      precompiled: Has the template already been compiled.
	     *
	     * @param {string} location  The remote URL to load as a template.
	     * @param {Object} params The template parameters.
	     * @param {function} callback  A callback triggered when the template finishes loading.
	     * @param {function} error_callback  A callback triggered if an error occurs loading the template.
	     *
	     *
	     */
	    Twig.Templates.loadRemote = function(location, params, callback, error_callback) {
	        var id = params.id,
	            method = params.method,
	            async = params.async,
	            precompiled = params.precompiled,
	            template = null;

	        // Default to async
	        if (async === undefined) async = true;

	        // Default to the URL so the template is cached.
	        if (id === undefined) {
	            id = location;
	        }
	        params.id = id;

	        // Check for existing template
	        if (Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) {
	            // A template is already saved with the given id.
	            if (callback) {
	                callback(Twig.Templates.registry[id]);
	            }
	            return Twig.Templates.registry[id];
	        }

	        if (method == 'ajax') {
	            if (typeof XMLHttpRequest == "undefined") {
	                throw new Twig.Error("Unsupported platform: Unable to do remote requests " +
	                    "because there is no XMLHTTPRequest implementation");
	            }

	            var xmlhttp = new XMLHttpRequest();
	            xmlhttp.onreadystatechange = function() {
	                var data = null;

	                if (xmlhttp.readyState == 4) {
	                    if (xmlhttp.status == 200) {
	                        Twig.log.debug("Got template ", xmlhttp.responseText);

	                        if (precompiled === true) {
	                            data = JSON.parse(xmlhttp.responseText);
	                        } else {
	                            data = xmlhttp.responseText;
	                        }

	                        params.url = location;
	                        params.data = data;

	                        template = new Twig.Template(params);

	                        if (callback) {
	                            callback(template);
	                        }
	                    } else {
	                        if (error_callback) {
	                            error_callback(xmlhttp);
	                        }
	                    }
	                }
	            };
	            xmlhttp.open("GET", location, async);
	            xmlhttp.send();

	        } else { // if method = 'fs'
	            // Create local scope
	            (function() {
	                var fs = require('fs');
	                    require('path');
	                    var data = null,
	                    loadTemplateFn = function(err, data) {
	                        if (err) {
	                            if (error_callback) {
	                                error_callback(err);
	                            }
	                            return;
	                        }

	                        if (precompiled === true) {
	                            data = JSON.parse(data);
	                        }

	                        params.data = data;
	                        params.path = location;

	                        // template is in data
	                        template = new Twig.Template(params);

	                        if (callback) {
	                            callback(template);
	                        }
	                    };

	                if (async === true) {
	                    fs.stat(location, function(err, stats) {
	                        if (err || !stats.isFile())
	                            throw new Twig.Error("Unable to find template file " + location);

	                        fs.readFile(location, 'utf8', loadTemplateFn);
	                    });
	                } else {
	                    if (!fs.statSync(location).isFile())
	                        throw new Twig.Error("Unable to find template file " + location);

	                    data = fs.readFileSync(location, 'utf8');
	                    loadTemplateFn(undefined, data);
	                }
	            })();
	        }
	        if (async === false) {
	            return template;
	        } else {
	            // placeholder for now, should eventually return a deferred object.
	            return true;
	        }
	    };

	    // Determine object type
	    function is(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    }

	    /**
	     * Create a new twig.js template.
	     *
	     * Parameters: {
	     *      data:   The template, either pre-compiled tokens or a string template
	     *      id:     The name of this template
	     *      blocks: Any pre-existing block from a child template
	     * }
	     *
	     * @param {Object} params The template parameters.
	     */
	    Twig.Template = function(params) {
	        var data = params.data,
	            id = params.id,
	            blocks = params.blocks,
	            base = params.base,
	            path = params.path,
	            url = params.url,
	            // parser options
	            options = params.options;

	        // # What is stored in a Twig.Template
	        //
	        // The Twig Template hold several chucks of data.
	        //
	        //     {
	        //          id:     The token ID (if any)
	        //          tokens: The list of tokens that makes up this template.
	        //          blocks: The list of block this template contains.
	        //          base:   The base template (if any)
	        //            options:  {
	        //                Compiler/parser options
	        //
	        //                strict_variables: true/false
	        //                    Should missing variable/keys emit an error message. If false, they default to null.
	        //            }
	        //     }
	        //

	        this.id = id;
	        this.base = base;
	        this.path = path;
	        this.url = url;
	        this.options = options;

	        this.reset(blocks);

	        if (is('String', data)) {
	            this.tokens = Twig.prepare.apply(this, [data]);
	        } else {
	            this.tokens = data;
	        }

	        if (id !== undefined) {
	            Twig.Templates.save(this);
	        }
	    };

	    Twig.Template.prototype.reset = function(blocks) {
	        Twig.log.debug("Twig.Template.reset", "Reseting template " + this.id);
	        this.blocks = {};
	        this.child = {
	            blocks: blocks || {}
	        };
	        this.extend = null;
	    };

	    Twig.Template.prototype.render = function(context, params) {
	        params = params || {};

	        var output,
	            url;

	        this.context = context || {};

	        // Clear any previous state
	        this.reset();
	        if (params.blocks) {
	            this.blocks = params.blocks;
	        }

	        output = Twig.parse.apply(this, [this.tokens, this.context]);

	        // Does this template extend another
	        if (this.extend) {
	            url = relativePath(this, this.extend);

	            // This template extends another, load it with this template's blocks
	            this.parent = Twig.Templates.loadRemote(url, {
	                method: this.url ? 'ajax' : 'fs',
	                base: this.base,
	                async: false,
	                id: url,
	                options: this.options
	            });

	            return this.parent.render(this.context, {
	                blocks: this.blocks
	            });
	        }

	        if (params.output == 'blocks') {
	            return this.blocks;
	        } else {
	            return output;
	        }
	    };

	    Twig.Template.prototype.importFile = function(file) {
	        var url, sub_template;
	        if (!this.url && !this.path && this.options.allowInlineIncludes) {
	            sub_template = Twig.Templates.load(file);
	            sub_template.options = this.options;
	            if (sub_template) {
	                return sub_template;
	            }

	            throw new Twig.Error("Didn't find the inline template by id");
	        }

	        url = relativePath(this, file);

	        // Load blocks from an external file
	        sub_template = Twig.Templates.loadRemote(url, {
	            method: this.url ? 'ajax' : 'fs',
	            base: this.base,
	            async: false,
	            options: this.options,
	            id: url
	        });

	        return sub_template;
	    };

	    Twig.Template.prototype.importBlocks = function(file, override) {
	        var sub_template = this.importFile(file),
	            context = this.context,
	            that = this;

	        override = override || false;

	        sub_template.render(context);

	        // Mixin blocks
	        Object.keys(sub_template.blocks).forEach(function(key) {
	            if (override || that.blocks[key] === undefined) {
	                that.blocks[key] = sub_template.blocks[key];
	            }
	        });
	    };

	    Twig.Template.prototype.compile = function(options) {
	        // compile the template into raw JS
	        return Twig.compiler.compile(this, options);
	    };

	    /**
	     * Generate the relative canonical version of a url based on the given base path and file path.
	     *
	     * @param {string} template The Twig.Template.
	     * @param {string} file The file path, relative to the base path.
	     *
	     * @return {string} The canonical version of the path.
	     */
	    function relativePath(template, file) {
	        var base,
	            base_path,
	            sep_chr = "/",
	            new_path = [],
	            val;

	        if (template.url) {
	            if (typeof template.base !== 'undefined') {
	                base = template.base + ((template.base.charAt(template.base.length - 1) === '/') ? '' : '/');
	            } else {
	                base = template.url;
	            }
	        } else if (template.path) {
	            // Get the system-specific path separator
	            var path = require("path"),
	                sep = path.sep || sep_chr,
	                relative = new RegExp("^\\.{1,2}" + sep.replace("\\", "\\\\"));

	            if (template.base !== undefined && file.match(relative) == null) {
	                file = file.replace(template.base, '');
	                base = template.base + sep;
	            } else {
	                base = template.path;
	            }

	            base = base.replace(sep + sep, sep);
	            sep_chr = sep;
	        } else {
	            throw new Twig.Error("Cannot extend an inline template.");
	        }

	        base_path = base.split(sep_chr);

	        // Remove file from url
	        base_path.pop();
	        base_path = base_path.concat(file.split(sep_chr));

	        while (base_path.length > 0) {
	            val = base_path.shift();
	            if (val == ".") ; else if (val == ".." && new_path.length > 0 && new_path[new_path.length - 1] != "..") {
	                new_path.pop();
	            } else {
	                new_path.push(val);
	            }
	        }

	        return new_path.join(sep_chr);
	    }

	    return Twig;

	})(Twig || {});

	// The following methods are from MDN and are available under a
	// [MIT License](http://www.opensource.org/licenses/mit-license.php) or are
	// [Public Domain](https://developer.mozilla.org/Project:Copyrights).
	//
	// See:
	//
	// * [Array.indexOf - MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)
	// * [Array.forEach - MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach)
	// * [Object.keys - MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys)

	// ## twig.fills.js
	//
	// This file contains fills for backwards compatability.
	(function() {
	    // Handle methods that don't yet exist in every browser

	    if (!String.prototype.trim) {
	        String.prototype.trim = function() {
	            return this.replace(/^\s+|\s+$/g, '');
	        };
	    }
	    if (!Array.prototype.indexOf) {
	        Array.prototype.indexOf = function(searchElement /*, fromIndex */) {
	            if (this === void 0 || this === null) {
	                throw new TypeError();
	            }
	            var t = Object(this);
	            var len = t.length >>> 0;
	            if (len === 0) {
	                return -1;
	            }
	            var n = 0;
	            if (arguments.length > 0) {
	                n = Number(arguments[1]);
	                if (n !== n) { // shortcut for verifying if it's NaN
	                    n = 0;
	                } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
	                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
	                }
	            }
	            if (n >= len) {
	                return -1;
	            }
	            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
	            for (; k < len; k++) {
	                if (k in t && t[k] === searchElement) {
	                    return k;
	                }
	            }
	            return -1;
	        };
	    }
	    // Production steps of ECMA-262, Edition 5, 15.4.4.18
	    // Reference: http://es5.github.com/#x15.4.4.18
	    if (!Array.prototype.forEach) {
	        Array.prototype.forEach = function(callback, thisArg) {

	            var T, k;

	            if (this == null) {
	                throw new TypeError(" this is null or not defined");
	            }

	            // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
	            var O = Object(this);

	            // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
	            // 3. Let len be ToUint32(lenValue).
	            var len = O.length >>> 0; // Hack to convert O.length to a UInt32

	            // 4. If IsCallable(callback) is false, throw a TypeError exception.
	            // See: http://es5.github.com/#x9.11
	            if ({}.toString.call(callback) != "[object Function]") {
	                throw new TypeError(callback + " is not a function");
	            }

	            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	            if (thisArg) {
	                T = thisArg;
	            }

	            // 6. Let k be 0
	            k = 0;

	            // 7. Repeat, while k < len
	            while (k < len) {

	                var kValue;

	                // a. Let Pk be ToString(k).
	                //   This is implicit for LHS operands of the in operator
	                // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
	                //   This step can be combined with c
	                // c. If kPresent is true, then
	                if (k in O) {

	                    // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
	                    kValue = O[k];

	                    // ii. Call the Call internal method of callback with T as the this value and
	                    // argument list containing kValue, k, and O.
	                    callback.call(T, kValue, k, O);
	                }
	                // d. Increase k by 1.
	                k++;
	            }
	            // 8. return undefined
	        };
	    }
	    if (!Object.keys) Object.keys = function(o) {
	        if (o !== Object(o)) {
	            throw new TypeError('Object.keys called on non-object');
	        }
	        var ret = [], p;
	        for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) ret.push(p);
	        return ret;
	    };

	})();
	// ## twig.lib.js
	//
	// This file contains 3rd party libraries used within twig.
	//
	// Copies of the licenses for the code included here can be found in the
	// LICENSES.md file.
	//

	var Twig = (function(Twig) {

	    // Namespace for libraries
	    Twig.lib = {};

	    /**
	    sprintf() for JavaScript 0.7-beta1
	    http://www.diveintojavascript.com/projects/javascript-sprintf
	    **/
	    var sprintf = (function() {
	        function get_type(variable) {
	            return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	        }
	        function str_repeat(input, multiplier) {
	            for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
	            return output.join('');
	        }

	        var str_format = function() {
	            if (!str_format.cache.hasOwnProperty(arguments[0])) {
	                str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
	            }
	            return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	        };

	        str_format.format = function(parse_tree, argv) {
	            var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
	            for (i = 0; i < tree_length; i++) {
	                node_type = get_type(parse_tree[i]);
	                if (node_type === 'string') {
	                    output.push(parse_tree[i]);
	                }
	                else if (node_type === 'array') {
	                    match = parse_tree[i]; // convenience purposes only
	                    if (match[2]) { // keyword argument
	                        arg = argv[cursor];
	                        for (k = 0; k < match[2].length; k++) {
	                            if (!arg.hasOwnProperty(match[2][k])) {
	                                throw (sprintf('[sprintf] property "%s" does not exist', match[2][k]));
	                            }
	                            arg = arg[match[2][k]];
	                        }
	                    }
	                    else if (match[1]) { // positional argument (explicit)
	                        arg = argv[match[1]];
	                    }
	                    else { // positional argument (implicit)
	                        arg = argv[cursor++];
	                    }

	                    if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
	                        throw (sprintf('[sprintf] expecting number but found %s', get_type(arg)));
	                    }
	                    switch (match[8]) {
	                        case 'b': arg = arg.toString(2); break;
	                        case 'c': arg = String.fromCharCode(arg); break;
	                        case 'd': arg = parseInt(arg, 10); break;
	                        case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
	                        case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
	                        case 'o': arg = arg.toString(8); break;
	                        case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
	                        case 'u': arg = Math.abs(arg); break;
	                        case 'x': arg = arg.toString(16); break;
	                        case 'X': arg = arg.toString(16).toUpperCase(); break;
	                    }
	                    arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+' + arg : arg);
	                    pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
	                    pad_length = match[6] - String(arg).length;
	                    pad = match[6] ? str_repeat(pad_character, pad_length) : '';
	                    output.push(match[5] ? arg + pad : pad + arg);
	                }
	            }
	            return output.join('');
	        };

	        str_format.cache = {};

	        str_format.parse = function(fmt) {
	            var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
	            while (_fmt) {
	                if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
	                    parse_tree.push(match[0]);
	                }
	                else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
	                    parse_tree.push('%');
	                }
	                else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
	                    if (match[2]) {
	                        arg_names |= 1;
	                        var field_list = [], replacement_field = match[2], field_match = [];
	                        if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	                            field_list.push(field_match[1]);
	                            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
	                                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	                                    field_list.push(field_match[1]);
	                                }
	                                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
	                                    field_list.push(field_match[1]);
	                                }
	                                else {
	                                    throw ('[sprintf] huh?');
	                                }
	                            }
	                        }
	                        else {
	                            throw ('[sprintf] huh?');
	                        }
	                        match[2] = field_list;
	                    }
	                    else {
	                        arg_names |= 2;
	                    }
	                    if (arg_names === 3) {
	                        throw ('[sprintf] mixing positional and named placeholders is not (yet) supported');
	                    }
	                    parse_tree.push(match);
	                }
	                else {
	                    throw ('[sprintf] huh?');
	                }
	                _fmt = _fmt.substring(match[0].length);
	            }
	            return parse_tree;
	        };

	        return str_format;
	    })();

	    var vsprintf = function(fmt, argv) {
	        argv.unshift(fmt);
	        return sprintf.apply(null, argv);
	    };

	    // Expose to Twig
	    Twig.lib.sprintf = sprintf;
	    Twig.lib.vsprintf = vsprintf;
	 (function() {
	        var shortDays = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");
	        var fullDays = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
	        var shortMonths = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
	        var fullMonths = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
	        function getOrdinalFor(intNum) {
	            return (((intNum = Math.abs(intNum) % 100) % 10 == 1 && intNum != 11) ? "st"
	                : (intNum % 10 == 2 && intNum != 12) ? "nd" : (intNum % 10 == 3
	                    && intNum != 13) ? "rd" : "th");
	        }
	        function getISO8601Year(aDate) {
	            var d = new Date(aDate.getFullYear() + 1, 0, 4);
	            if ((d - aDate) / 86400000 < 7 && (aDate.getDay() + 6) % 7 < (d.getDay() + 6) % 7)
	                return d.getFullYear();
	            if (aDate.getMonth() > 0 || aDate.getDate() >= 4)
	                return aDate.getFullYear();
	            return aDate.getFullYear() - (((aDate.getDay() + 6) % 7 - aDate.getDate() > 2) ? 1 : 0);
	        }
	        function getISO8601Week(aDate) {
	            // Get a day during the first week of the year.
	            var d = new Date(getISO8601Year(aDate), 0, 4);
	            // Get the first monday of the year.
	            d.setDate(d.getDate() - (d.getDay() + 6) % 7);
	            return parseInt((aDate - d) / 604800000) + 1;
	        }
	        Twig.lib.formatDate = function(date, format) {
	            /// <summary>
	            ///   Gets a string for this date, formatted according to the given format
	            ///   string.
	            /// </summary>
	            /// <param name="format" type="String">
	            ///   The format of the output date string.  The format string works in a
	            ///   nearly identical way to the PHP date function which is highlighted here:
	            ///   http://php.net/manual/en/function.date.php.
	            ///   The only difference is the fact that "u" signifies milliseconds
	            ///   instead of microseconds.  The following characters are recognized in
	            ///   the format parameter string:
	            ///     d - Day of the month, 2 digits with leading zeros
	            ///     D - A textual representation of a day, three letters
	            ///     j - Day of the month without leading zeros
	            ///     l (lowercase 'L') - A full textual representation of the day of the week
	            ///     N - ISO-8601 numeric representation of the day of the week (starting from 1)
	            ///     S - English ordinal suffix for the day of the month, 2 characters st,
	            ///         nd, rd or th. Works well with j.
	            ///     w - Numeric representation of the day of the week (starting from 0)
	            ///     z - The day of the year (starting from 0)
	            ///     W - ISO-8601 week number of year, weeks starting on Monday
	            ///     F - A full textual representation of a month, such as January or March
	            ///     m - Numeric representation of a month, with leading zeros
	            ///     M - A short textual representation of a month, three letters
	            ///     n - Numeric representation of a month, without leading zeros
	            ///     t - Number of days in the given month
	            ///     L - Whether it's a leap year
	            ///     o - ISO-8601 year number. This has the same value as Y, except that if
	            ///         the ISO week number (W) belongs to the previous or next year, that
	            ///         year is used instead.
	            ///     Y - A full numeric representation of a year, 4 digits
	            ///     y - A two digit representation of a year
	            ///     a - Lowercase Ante meridiem and Post meridiem
	            ///     A - Uppercase Ante meridiem and Post meridiem
	            ///     B - Swatch Internet time
	            ///     g - 12-hour format of an hour without leading zeros
	            ///     G - 24-hour format of an hour without leading zeros
	            ///     h - 12-hour format of an hour with leading zeros
	            ///     H - 24-hour format of an hour with leading zeros
	            ///     i - Minutes with leading zeros
	            ///     s - Seconds, with leading zeros
	            ///     u - Milliseconds
	            /// </param>
	            /// <returns type="String">
	            ///   Returns the string for this date, formatted according to the given
	            ///   format string.
	            /// </returns>
	            // If the format was not passed, use the default toString method.
	            if (typeof format !== "string" || /^\s*$/.test(format))
	                return date + "";
	            var jan1st = new Date(date.getFullYear(), 0, 1);
	            var me = date;
	            return format.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisu]/g, function(option) {
	                switch (option) {
	                    // Day of the month, 2 digits with leading zeros
	                    case "d": return ("0" + me.getDate()).replace(/^.+(..)$/, "$1");
	                    // A textual representation of a day, three letters
	                    case "D": return shortDays[me.getDay()];
	                    // Day of the month without leading zeros
	                    case "j": return me.getDate();
	                    // A full textual representation of the day of the week
	                    case "l": return fullDays[me.getDay()];
	                    // ISO-8601 numeric representation of the day of the week
	                    case "N": return (me.getDay() + 6) % 7 + 1;
	                    // English ordinal suffix for the day of the month, 2 characters
	                    case "S": return getOrdinalFor(me.getDate());
	                    // Numeric representation of the day of the week
	                    case "w": return me.getDay();
	                    // The day of the year (starting from 0)
	                    case "z": return Math.ceil((jan1st - me) / 86400000);
	                    // ISO-8601 week number of year, weeks starting on Monday
	                    case "W": return ("0" + getISO8601Week(me)).replace(/^.(..)$/, "$1");
	                    // A full textual representation of a month, such as January or March
	                    case "F": return fullMonths[me.getMonth()];
	                    // Numeric representation of a month, with leading zeros
	                    case "m": return ("0" + (me.getMonth() + 1)).replace(/^.+(..)$/, "$1");
	                    // A short textual representation of a month, three letters
	                    case "M": return shortMonths[me.getMonth()];
	                    // Numeric representation of a month, without leading zeros
	                    case "n": return me.getMonth() + 1;
	                    // Number of days in the given month
	                    case "t": return new Date(me.getFullYear(), me.getMonth() + 1, -1).getDate();
	                    // Whether it's a leap year
	                    case "L": return new Date(me.getFullYear(), 1, 29).getDate() == 29 ? 1 : 0;
	                    // ISO-8601 year number. This has the same value as Y, except that if the
	                    // ISO week number (W) belongs to the previous or next year, that year is
	                    // used instead.
	                    case "o": return getISO8601Year(me);
	                    // A full numeric representation of a year, 4 digits
	                    case "Y": return me.getFullYear();
	                    // A two digit representation of a year
	                    case "y": return (me.getFullYear() + "").replace(/^.+(..)$/, "$1");
	                    // Lowercase Ante meridiem and Post meridiem
	                    case "a": return me.getHours() < 12 ? "am" : "pm";
	                    // Uppercase Ante meridiem and Post meridiem
	                    case "A": return me.getHours() < 12 ? "AM" : "PM";
	                    // Swatch Internet time
	                    case "B": return Math.floor((((me.getUTCHours() + 1) % 24) + me.getUTCMinutes() / 60 + me.getUTCSeconds() / 3600) * 1000 / 24);
	                    // 12-hour format of an hour without leading zeros
	                    case "g": return me.getHours() % 12 != 0 ? me.getHours() % 12 : 12;
	                    // 24-hour format of an hour without leading zeros
	                    case "G": return me.getHours();
	                    // 12-hour format of an hour with leading zeros
	                    case "h": return ("0" + (me.getHours() % 12 != 0 ? me.getHours() % 12 : 12)).replace(/^.+(..)$/, "$1");
	                    // 24-hour format of an hour with leading zeros
	                    case "H": return ("0" + me.getHours()).replace(/^.+(..)$/, "$1");
	                    // Minutes with leading zeros
	                    case "i": return ("0" + me.getMinutes()).replace(/^.+(..)$/, "$1");
	                    // Seconds, with leading zeros
	                    case "s": return ("0" + me.getSeconds()).replace(/^.+(..)$/, "$1");
	                    // Milliseconds
	                    case "u": return me.getMilliseconds();
	                }
	            });
	        };
	    })();

	    Twig.lib.strip_tags = function(input, allowed) {
	        // Strips HTML and PHP tags from a string
	        //
	        // version: 1109.2015
	        // discuss at: http://phpjs.org/functions/strip_tags
	        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +   improved by: Luke Godfrey
	        // +      input by: Pul
	        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +   bugfixed by: Onno Marsman
	        // +      input by: Alex
	        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +      input by: Marc Palau
	        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +      input by: Brett Zamir (http://brett-zamir.me)
	        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +   bugfixed by: Eric Nagel
	        // +      input by: Bobby Drake
	        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +   bugfixed by: Tomasz Wesolowski
	        // +      input by: Evertjan Garretsen
	        // +    revised by: Rafał Kukawski (http://blog.kukawski.pl/)
	        // *     example 1: strip_tags('<p>Kevin</p> <b>van</b> <i>Zonneveld</i>', '<i><b>');
	        // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
	        // *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
	        // *     returns 2: '<p>Kevin van Zonneveld</p>'
	        // *     example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
	        // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
	        // *     example 4: strip_tags('1 < 5 5 > 1');
	        // *     returns 4: '1 < 5 5 > 1'
	        // *     example 5: strip_tags('1 <br/> 1');
	        // *     returns 5: '1  1'
	        // *     example 6: strip_tags('1 <br/> 1', '<br>');
	        // *     returns 6: '1  1'
	        // *     example 7: strip_tags('1 <br/> 1', '<br><br/>');
	        // *     returns 7: '1 <br/> 1'
	        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
	            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	        return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
	            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	        });
	    };

	    Twig.lib.strtotime = function(str, now) {
	        // http://kevin.vanzonneveld.net
	        // +   original by: Caio Ariede (http://caioariede.com)
	        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	        // +      input by: David
	        // +   improved by: Caio Ariede (http://caioariede.com)
	        // +   improved by: Brett Zamir (http://brett-zamir.me)
	        // +   bugfixed by: Wagner B. Soares
	        // +   bugfixed by: Artur Tchernychev
	        // %        note 1: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
	        // *     example 1: strtotime('+1 day', 1129633200);
	        // *     returns 1: 1129719600
	        // *     example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
	        // *     returns 2: 1130425202
	        // *     example 3: strtotime('last month', 1129633200);
	        // *     returns 3: 1127041200
	        // *     example 4: strtotime('2009-05-04 08:30:00');
	        // *     returns 4: 1241418600
	        var i, l, match, s, parse = '';

	        str = str.replace(/\s{2,}|^\s|\s$/g, ' '); // unecessary spaces
	        str = str.replace(/[\t\r\n]/g, ''); // unecessary chars
	        if (str === 'now') {
	            return now === null || isNaN(now) ? new Date().getTime() / 1000 | 0 : now | 0;
	        } else if (!isNaN(parse = Date.parse(str))) {
	            return parse / 1000 | 0;
	        } else if (now) {
	            now = new Date(now * 1000); // Accept PHP-style seconds
	        } else {
	            now = new Date();
	        }

	        str = str.toLowerCase();

	        var __is = {
	            day: {
	                'sun': 0,
	                'mon': 1,
	                'tue': 2,
	                'wed': 3,
	                'thu': 4,
	                'fri': 5,
	                'sat': 6
	            },
	            mon: [
	                'jan',
	                'feb',
	                'mar',
	                'apr',
	                'may',
	                'jun',
	                'jul',
	                'aug',
	                'sep',
	                'oct',
	                'nov',
	                'dec'
	            ]
	        };

	        var process = function(m) {
	            var ago = (m[2] && m[2] === 'ago');
	            var num = (num = m[0] === 'last' ? -1 : 1) * (ago ? -1 : 1);

	            switch (m[0]) {
	                case 'last':
	                case 'next':
	                    switch (m[1].substring(0, 3)) {
	                        case 'yea':
	                            now.setFullYear(now.getFullYear() + num);
	                            break;
	                        case 'wee':
	                            now.setDate(now.getDate() + (num * 7));
	                            break;
	                        case 'day':
	                            now.setDate(now.getDate() + num);
	                            break;
	                        case 'hou':
	                            now.setHours(now.getHours() + num);
	                            break;
	                        case 'min':
	                            now.setMinutes(now.getMinutes() + num);
	                            break;
	                        case 'sec':
	                            now.setSeconds(now.getSeconds() + num);
	                            break;
	                        case 'mon':
	                            if (m[1] === "month") {
	                                now.setMonth(now.getMonth() + num);
	                                break;
	                            }
	                        // fall through
	                        default:
	                            var day = __is.day[m[1].substring(0, 3)];
	                            if (typeof day !== 'undefined') {
	                                var diff = day - now.getDay();
	                                if (diff === 0) {
	                                    diff = 7 * num;
	                                } else if (diff > 0) {
	                                    if (m[0] === 'last') {
	                                        diff -= 7;
	                                    }
	                                } else {
	                                    if (m[0] === 'next') {
	                                        diff += 7;
	                                    }
	                                }
	                                now.setDate(now.getDate() + diff);
	                                now.setHours(0, 0, 0, 0); // when jumping to a specific last/previous day of week, PHP sets the time to 00:00:00
	                            }
	                    }
	                    break;

	                default:
	                    if (/\d+/.test(m[0])) {
	                        num *= parseInt(m[0], 10);

	                        switch (m[1].substring(0, 3)) {
	                            case 'yea':
	                                now.setFullYear(now.getFullYear() + num);
	                                break;
	                            case 'mon':
	                                now.setMonth(now.getMonth() + num);
	                                break;
	                            case 'wee':
	                                now.setDate(now.getDate() + (num * 7));
	                                break;
	                            case 'day':
	                                now.setDate(now.getDate() + num);
	                                break;
	                            case 'hou':
	                                now.setHours(now.getHours() + num);
	                                break;
	                            case 'min':
	                                now.setMinutes(now.getMinutes() + num);
	                                break;
	                            case 'sec':
	                                now.setSeconds(now.getSeconds() + num);
	                                break;
	                        }
	                    } else {
	                        return false;
	                    }
	                    break;
	            }
	            return true;
	        };

	        match = str.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
	        if (match !== null) {
	            if (!match[2]) {
	                match[2] = '00:00:00';
	            } else if (!match[3]) {
	                match[2] += ':00';
	            }

	            s = match[1].split(/-/g);

	            s[1] = __is.mon[s[1] - 1] || s[1];
	            s[0] = +s[0];

	            s[0] = (s[0] >= 0 && s[0] <= 69) ? '20' + (s[0] < 10 ? '0' + s[0] : s[0] + '') : (s[0] >= 70 && s[0] <= 99) ? '19' + s[0] : s[0] + '';
	            return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]) + (match[4] ? match[4] / 1000 : ''), 10);
	        }

	        var regex = '([+-]?\\d+\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)' + '|(last|next)\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))' + '(\\sago)?';

	        match = str.match(new RegExp(regex, 'gi')); // Brett: seems should be case insensitive per docs, so added 'i'
	        if (match === null) {
	            return false;
	        }

	        for (i = 0, l = match.length; i < l; i++) {
	            if (!process(match[i].split(' '))) {
	                return false;
	            }
	        }

	        return now.getTime() / 1000 | 0;
	    };

	    Twig.lib.is = function(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    };

	    // shallow-copy an object
	    Twig.lib.copy = function(src) {
	        var target = {},
	            key;
	        for (key in src)
	            target[key] = src[key];

	        return target;
	    };

	    Twig.lib.replaceAll = function(string, search, replace) {
	        return string.split(search).join(replace);
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.logic.js
	//
	// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
	var Twig = (function(Twig) {

	    /**
	     * Namespace for logic handling.
	     */
	    Twig.logic = {};

	    /**
	     * Logic token types.
	     */
	    Twig.logic.type = {
	        if_: 'Twig.logic.type.if',
	        endif: 'Twig.logic.type.endif',
	        for_: 'Twig.logic.type.for',
	        endfor: 'Twig.logic.type.endfor',
	        else_: 'Twig.logic.type.else',
	        elseif: 'Twig.logic.type.elseif',
	        set: 'Twig.logic.type.set',
	        filter: 'Twig.logic.type.filter',
	        endfilter: 'Twig.logic.type.endfilter',
	        block: 'Twig.logic.type.block',
	        endblock: 'Twig.logic.type.endblock',
	        extends_: 'Twig.logic.type.extends',
	        use: 'Twig.logic.type.use',
	        include: 'Twig.logic.type.include',
	        spaceless: 'Twig.logic.type.spaceless',
	        endspaceless: 'Twig.logic.type.endspaceless'
	    };


	    // Regular expressions for handling logic tokens.
	    //
	    // Properties:
	    //
	    //      type:  The type of expression this matches
	    //
	    //      regex: A regular expression that matches the format of the token
	    //
	    //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
	    //             logic token is assumed to not require an end tag and isn't push onto the stack.
	    //
	    //      open:  Does this tag open a logic expression or is it standalone. For example,
	    //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
	    //
	    //  Functions:
	    //
	    //      compile: A function that handles compiling the token into an output token ready for
	    //               parsing with the parse function.
	    //
	    //      parse:   A function that parses the compiled token into output (HTML / whatever the
	    //               template represents).
	    Twig.logic.definitions = [
	        {
	            /**
	             * If type logic tokens.
	             *
	             *  Format: {% if expression %}
	             */
	            type: Twig.logic.type.if_,
	            regex: /^if\s+([^\s].+)$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.elseif,
	                Twig.logic.type.endif
	            ],
	            open: true,
	            compile: function(token) {
	                var expression = token.match[1];
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, chain) {
	                var output = '',
	                    // Parse the expression
	                    result = Twig.expression.parse.apply(this, [token.stack, context]);

	                // Start a new logic chain
	                chain = true;

	                if (result) {
	                    chain = false;
	                    // parse if output
	                    output = Twig.parse.apply(this, [token.output, context]);
	                }
	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },
	        {
	            /**
	             * Else if type logic tokens.
	             *
	             *  Format: {% elseif expression %}
	             */
	            type: Twig.logic.type.elseif,
	            regex: /^elseif\s+([^\s].*)$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.elseif,
	                Twig.logic.type.endif
	            ],
	            open: false,
	            compile: function(token) {
	                var expression = token.match[1];
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, chain) {
	                var output = '';

	                if (chain && Twig.expression.parse.apply(this, [token.stack, context]) === true) {
	                    chain = false;
	                    // parse if output
	                    output = Twig.parse.apply(this, [token.output, context]);
	                }

	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },
	        {
	            /**
	             * Else if type logic tokens.
	             *
	             *  Format: {% elseif expression %}
	             */
	            type: Twig.logic.type.else_,
	            regex: /^else$/,
	            next: [
	                Twig.logic.type.endif,
	                Twig.logic.type.endfor
	            ],
	            open: false,
	            parse: function(token, context, chain) {
	                var output = '';
	                if (chain) {
	                    output = Twig.parse.apply(this, [token.output, context]);
	                }
	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },
	        {
	            /**
	             * End if type logic tokens.
	             *
	             *  Format: {% endif %}
	             */
	            type: Twig.logic.type.endif,
	            regex: /^endif$/,
	            next: [],
	            open: false
	        },
	        {
	            /**
	             * For type logic tokens.
	             *
	             *  Format: {% for expression %}
	             */
	            type: Twig.logic.type.for_,
	            regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.endfor
	            ],
	            open: true,
	            compile: function(token) {
	                var key_value = token.match[1],
	                    expression = token.match[2],
	                    conditional = token.match[3],
	                    kv_split = null;

	                token.key_var = null;
	                token.value_var = null;

	                if (key_value.indexOf(",") >= 0) {
	                    kv_split = key_value.split(',');
	                    if (kv_split.length === 2) {
	                        token.key_var = kv_split[0].trim();
	                        token.value_var = kv_split[1].trim();
	                    } else {
	                        throw new Twig.Error("Invalid expression in for loop: " + key_value);
	                    }
	                } else {
	                    token.value_var = key_value;
	                }

	                // Valid expressions for a for loop
	                //   for item     in expression
	                //   for key,item in expression

	                // Compile the expression.
	                token.expression = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                // Compile the conditional (if available)
	                if (conditional) {
	                    token.conditional = Twig.expression.compile.apply(this, [{
	                        type: Twig.expression.type.expression,
	                        value: conditional
	                    }]).stack;
	                }

	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, continue_chain) {
	                // Parse expression
	                var result = Twig.expression.parse.apply(this, [token.expression, context]),
	                    output = [],
	                    len,
	                    index = 0,
	                    keyset,
	                    that = this,
	                    conditional = token.conditional,
	                    buildLoop = function(index, len) {
	                        var isConditional = conditional !== undefined;
	                        return {
	                            index: index + 1,
	                            index0: index,
	                            revindex: isConditional ? undefined : len - index,
	                            revindex0: isConditional ? undefined : len - index - 1,
	                            first: (index === 0),
	                            last: isConditional ? undefined : (index === len - 1),
	                            length: isConditional ? undefined : len,
	                            parent: context
	                        };
	                    },
	                    loop = function(key, value) {
	                        var inner_context = Twig.lib.copy(context);

	                        inner_context[token.value_var] = value;
	                        if (token.key_var) {
	                            inner_context[token.key_var] = key;
	                        }

	                        // Loop object
	                        inner_context.loop = buildLoop(index, len);

	                        if (conditional === undefined ||
	                            Twig.expression.parse.apply(that, [conditional, inner_context])) {
	                            output.push(Twig.parse.apply(that, [token.output, inner_context]));
	                            index += 1;
	                        }
	                    };

	                if (result instanceof Array) {
	                    len = result.length;
	                    result.forEach(function(value) {
	                        var key = index;

	                        loop(key, value);
	                    });
	                } else if (result instanceof Object) {
	                    if (result._keys !== undefined) {
	                        keyset = result._keys;
	                    } else {
	                        keyset = Object.keys(result);
	                    }
	                    len = keyset.length;
	                    keyset.forEach(function(key) {
	                        // Ignore the _keys property, it's internal to twig.js
	                        if (key === "_keys") return;

	                        loop(key, result[key]);
	                    });
	                }

	                // Only allow else statements if no output was generated
	                continue_chain = (output.length === 0);

	                return {
	                    chain: continue_chain,
	                    output: output.join("")
	                };
	            }
	        },
	        {
	            /**
	             * End if type logic tokens.
	             *
	             *  Format: {% endif %}
	             */
	            type: Twig.logic.type.endfor,
	            regex: /^endfor$/,
	            next: [],
	            open: false
	        },
	        {
	            /**
	             * Set type logic tokens.
	             *
	             *  Format: {% set key = expression %}
	             */
	            type: Twig.logic.type.set,
	            regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*(.+)$/,
	            next: [],
	            open: true,
	            compile: function(token) {
	                var key = token.match[1].trim(),
	                    expression = token.match[2],
	                    // Compile the expression.
	                    expression_stack = Twig.expression.compile.apply(this, [{
	                        type: Twig.expression.type.expression,
	                        value: expression
	                    }]).stack;

	                token.key = key;
	                token.expression = expression_stack;

	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, continue_chain) {
	                var value = Twig.expression.parse.apply(this, [token.expression, context]),
	                    key = token.key;

	                // set on both the global and local context
	                this.context[key] = value;
	                context[key] = value;

	                return {
	                    chain: continue_chain,
	                    context: context
	                };
	            }
	        },
	        {
	            /**
	             * Filter logic tokens.
	             *
	             *  Format: {% filter upper %} or {% filter lower|escape %}
	             */
	            type: Twig.logic.type.filter,
	            regex: /^filter\s+(.+)$/,
	            next: [
	                Twig.logic.type.endfilter
	            ],
	            open: true,
	            compile: function(token) {
	                var expression = "|" + token.match[1].trim();
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, chain) {
	                var unfiltered = Twig.parse.apply(this, [token.output, context]),
	                    stack = [{
	                        type: Twig.expression.type.string,
	                        value: unfiltered
	                    }].concat(token.stack);

	                var output = Twig.expression.parse.apply(this, [stack, context]);

	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },
	        {
	            /**
	             * End filter logic tokens.
	             *
	             *  Format: {% endfilter %}
	             */
	            type: Twig.logic.type.endfilter,
	            regex: /^endfilter$/,
	            next: [],
	            open: false
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% block title %}
	             */
	            type: Twig.logic.type.block,
	            regex: /^block\s+([a-zA-Z0-9_]+)$/,
	            next: [
	                Twig.logic.type.endblock
	            ],
	            open: true,
	            compile: function(token) {
	                token.block = token.match[1].trim();
	                delete token.match;
	                return token;
	            },
	            parse: function(token, context, chain) {
	                var block_output = "",
	                    output = "",
	                    hasParent = this.blocks[token.block] && this.blocks[token.block].indexOf(Twig.placeholders.parent) > -1;

	                // Don't override previous blocks
	                if (this.blocks[token.block] === undefined || hasParent) {
	                    block_output = Twig.expression.parse.apply(this, [{
	                        type: Twig.expression.type.string,
	                        value: Twig.parse.apply(this, [token.output, context])
	                    }, context]);

	                    if (hasParent) {
	                        this.blocks[token.block] = this.blocks[token.block].replace(Twig.placeholders.parent, block_output);
	                    } else {
	                        this.blocks[token.block] = block_output;
	                    }
	                }

	                // Check if a child block has been set from a template extending this one.
	                if (this.child.blocks[token.block]) {
	                    output = this.child.blocks[token.block];

	                } else {
	                    output = this.blocks[token.block];
	                }

	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },
	        {
	            /**
	             * End filter logic tokens.
	             *
	             *  Format: {% endfilter %}
	             */
	            type: Twig.logic.type.endblock,
	            regex: /^endblock$/,
	            next: [],
	            open: false
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% extends "template.twig" %}
	             */
	            type: Twig.logic.type.extends_,
	            regex: /^extends\s+(.+)$/,
	            next: [],
	            open: true,
	            compile: function(token) {
	                var expression = token.match[1].trim();
	                delete token.match;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function(token, context, chain) {
	                // Resolve filename
	                var file = Twig.expression.parse.apply(this, [token.stack, context]);

	                // Set parent template
	                this.extend = file;

	                return {
	                    chain: chain,
	                    output: ''
	                };
	            }
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% extends "template.twig" %}
	             */
	            type: Twig.logic.type.use,
	            regex: /^use\s+(.+)$/,
	            next: [],
	            open: true,
	            compile: function(token) {
	                var expression = token.match[1].trim();
	                delete token.match;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function(token, context, chain) {
	                // Resolve filename
	                var file = Twig.expression.parse.apply(this, [token.stack, context]);

	                // Import blocks
	                this.importBlocks(file);

	                return {
	                    chain: chain,
	                    output: ''
	                };
	            }
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
	             */
	            type: Twig.logic.type.include,
	            regex: /^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
	            next: [],
	            open: true,
	            compile: function(token) {
	                var match = token.match,
	                    includeMissing = match[1] !== undefined,
	                    expression = match[2].trim(),
	                    withContext = match[3],
	                    only = ((match[4] !== undefined) && match[4].length);

	                delete token.match;

	                token.only = only;
	                token.includeMissing = includeMissing;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                if (withContext !== undefined) {
	                    token.withStack = Twig.expression.compile.apply(this, [{
	                        type: Twig.expression.type.expression,
	                        value: withContext.trim()
	                    }]).stack;
	                }

	                return token;
	            },
	            parse: function(token, context, chain) {
	                // Resolve filename
	                var innerContext = {},
	                    withContext,
	                    i,
	                    template;

	                if (!token.only) {
	                    for (i in context) {
	                        if (context.hasOwnProperty(i))
	                            innerContext[i] = context[i];
	                    }
	                }

	                if (token.withStack !== undefined) {
	                    withContext = Twig.expression.parse.apply(this, [token.withStack, context]);

	                    for (i in withContext) {
	                        if (withContext.hasOwnProperty(i))
	                            innerContext[i] = withContext[i];
	                    }
	                }

	                var file = Twig.expression.parse.apply(this, [token.stack, innerContext]);

	                // Import file
	                template = this.importFile(file);

	                return {
	                    chain: chain,
	                    output: template.render(innerContext)
	                };
	            }
	        },
	        {
	            type: Twig.logic.type.spaceless,
	            regex: /^spaceless$/,
	            next: [
	                Twig.logic.type.endspaceless
	            ],
	            open: true,

	            // Parse the html and return it without any spaces between tags
	            parse: function(token, context, chain) {
	                var // Parse the output without any filter
	                    unfiltered = Twig.parse.apply(this, [token.output, context]),
	                    // A regular expression to find closing and opening tags with spaces between them
	                    rBetweenTagSpaces = />\s+</g,
	                    // Replace all space between closing and opening html tags
	                    output = unfiltered.replace(rBetweenTagSpaces, '><').trim();

	                return {
	                    chain: chain,
	                    output: output
	                };
	            }
	        },

	        // Add the {% endspaceless %} token
	        {
	            type: Twig.logic.type.endspaceless,
	            regex: /^endspaceless$/,
	            next: [],
	            open: false
	        }
	    ];

	    /**
	     * Registry for logic handlers.
	     */
	    Twig.logic.handler = {};

	    /**
	     * Define a new token type, available at Twig.logic.type.{type}
	     */
	    Twig.logic.extendType = function(type, value) {
	        value = value || ("Twig.logic.type" + type);
	        Twig.logic.type[type] = value;
	    };

	    /**
	     * Extend the logic parsing functionality with a new token definition.
	     *
	     * // Define a new tag
	     * Twig.logic.extend({
	     *     type: Twig.logic.type.{type},
	     *     // The pattern to match for this token
	     *     regex: ...,
	     *     // What token types can follow this token, leave blank if any.
	     *     next: [ ... ]
	     *     // Create and return compiled version of the token
	     *     compile: function(token) { ... }
	     *     // Parse the compiled token with the context provided by the render call
	     *     //   and whether this token chain is complete.
	     *     parse: function(token, context, chain) { ... }
	     * });
	     *
	     * @param {Object} definition The new logic expression.
	     */
	    Twig.logic.extend = function(definition) {

	        if (!definition.type) {
	            throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
	        }
	        if (Twig.logic.type[definition.type]) {
	            throw new Twig.Error("Unable to extend logic definitions. Type " +
	                definition.type + " is already defined.");
	        } else {
	            Twig.logic.extendType(definition.type);
	        }
	        Twig.logic.handler[definition.type] = definition;
	    };

	    // Extend with built-in expressions
	    while (Twig.logic.definitions.length > 0) {
	        Twig.logic.extend(Twig.logic.definitions.shift());
	    }

	    /**
	     * Compile a logic token into an object ready for parsing.
	     *
	     * @param {Object} raw_token An uncompiled logic token.
	     *
	     * @return {Object} A compiled logic token, ready for parsing.
	     */
	    Twig.logic.compile = function(raw_token) {
	        var expression = raw_token.value.trim(),
	            token = Twig.logic.tokenize.apply(this, [expression]),
	            token_template = Twig.logic.handler[token.type];

	        // Check if the token needs compiling
	        if (token_template.compile) {
	            token = token_template.compile.apply(this, [token]);
	            Twig.log.trace("Twig.logic.compile: ", "Compiled logic token to ", token);
	        }

	        return token;
	    };

	    /**
	     * Tokenize logic expressions. This function matches token expressions against regular
	     * expressions provided in token definitions provided with Twig.logic.extend.
	     *
	     * @param {string} expression the logic token expression to tokenize
	     *                (i.e. what's between {% and %})
	     *
	     * @return {Object} The matched token with type set to the token type and match to the regex match.
	     */
	    Twig.logic.tokenize = function(expression) {
	        var token = {},
	            token_template_type = null,
	            token_type = null,
	            token_regex = null,
	            regex_array = null,
	            regex = null,
	            match = null;

	        // Ignore whitespace around expressions.
	        expression = expression.trim();

	        for (token_template_type in Twig.logic.handler) {
	            if (Twig.logic.handler.hasOwnProperty(token_template_type)) {
	                // Get the type and regex for this template type
	                token_type = Twig.logic.handler[token_template_type].type;
	                token_regex = Twig.logic.handler[token_template_type].regex;

	                // Handle multiple regular expressions per type.
	                regex_array = [];
	                if (token_regex instanceof Array) {
	                    regex_array = token_regex;
	                } else {
	                    regex_array.push(token_regex);
	                }

	                // Check regular expressions in the order they were specified in the definition.
	                while (regex_array.length > 0) {
	                    regex = regex_array.shift();
	                    match = regex.exec(expression.trim());
	                    if (match !== null) {
	                        token.type = token_type;
	                        token.match = match;
	                        Twig.log.trace("Twig.logic.tokenize: ", "Matched a ", token_type, " regular expression of ", match);
	                        return token;
	                    }
	                }
	            }
	        }

	        // No regex matches
	        throw new Twig.Error("Unable to parse '" + expression.trim() + "'");
	    };

	    /**
	     * Parse a logic token within a given context.
	     *
	     * What are logic chains?
	     *      Logic chains represent a series of tokens that are connected,
	     *          for example:
	     *          {% if ... %} {% else %} {% endif %}
	     *
	     *      The chain parameter is used to signify if a chain is open of closed.
	     *      open:
	     *          More tokens in this chain should be parsed.
	     *      closed:
	     *          This token chain has completed parsing and any additional
	     *          tokens (else, elseif, etc...) should be ignored.
	     *
	     * @param {Object} token The compiled token.
	     * @param {Object} context The render context.
	     * @param {boolean} chain Is this an open logic chain. If false, that means a
	     *                        chain is closed and no further cases should be parsed.
	     */
	    Twig.logic.parse = function(token, context, chain) {
	        var output = '',
	            token_template;

	        context = context || {};

	        Twig.log.debug("Twig.logic.parse: ", "Parsing logic token ", token);

	        token_template = Twig.logic.handler[token.type];

	        if (token_template.parse) {
	            output = token_template.parse.apply(this, [token, context, chain]);
	        }
	        return output;
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.expression.js
	//
	// This file handles tokenizing, compiling and parsing expressions.
	var Twig = (function(Twig) {

	    /**
	     * Namespace for expression handling.
	     */
	    Twig.expression = {};

	    /**
	     * Reserved word that can't be used as variable names.
	     */
	    Twig.expression.reservedWords = [
	        "true", "false", "null"
	    ];

	    /**
	     * The type of tokens used in expressions.
	     */
	    Twig.expression.type = {
	        comma: 'Twig.expression.type.comma',
	        operator: {
	            unary: 'Twig.expression.type.operator.unary',
	            binary: 'Twig.expression.type.operator.binary'
	        },
	        string: 'Twig.expression.type.string',
	        bool: 'Twig.expression.type.bool',
	        array: {
	            start: 'Twig.expression.type.array.start',
	            end: 'Twig.expression.type.array.end'
	        },
	        object: {
	            start: 'Twig.expression.type.object.start',
	            end: 'Twig.expression.type.object.end'
	        },
	        parameter: {
	            start: 'Twig.expression.type.parameter.start',
	            end: 'Twig.expression.type.parameter.end'
	        },
	        key: {
	            period: 'Twig.expression.type.key.period',
	            brackets: 'Twig.expression.type.key.brackets'
	        },
	        filter: 'Twig.expression.type.filter',
	        _function: 'Twig.expression.type._function',
	        variable: 'Twig.expression.type.variable',
	        number: 'Twig.expression.type.number',
	        _null: 'Twig.expression.type.null',
	        test: 'Twig.expression.type.test'
	    };

	    Twig.expression.set = {
	        // What can follow an expression (in general)
	        operations: [
	            Twig.expression.type.filter,
	            Twig.expression.type.operator.unary,
	            Twig.expression.type.operator.binary,
	            Twig.expression.type.array.end,
	            Twig.expression.type.object.end,
	            Twig.expression.type.parameter.end,
	            Twig.expression.type.comma,
	            Twig.expression.type.test
	        ],
	        expressions: [
	            Twig.expression.type._function,
	            Twig.expression.type.bool,
	            Twig.expression.type.string,
	            Twig.expression.type.variable,
	            Twig.expression.type.number,
	            Twig.expression.type._null,
	            Twig.expression.type.parameter.start,
	            Twig.expression.type.array.start,
	            Twig.expression.type.object.start
	        ]
	    };

	    // Most expressions allow a '.' or '[' after them, so we provide a convenience set
	    Twig.expression.set.operations_extended = Twig.expression.set.operations.concat([
	        Twig.expression.type.key.period,
	        Twig.expression.type.key.brackets]);

	    // Some commonly used compile and parse functions.
	    Twig.expression.fn = {
	        compile: {
	            push: function(token, stack, output) {
	                output.push(token);
	            },
	            push_both: function(token, stack, output) {
	                output.push(token);
	                stack.push(token);
	            }
	        },
	        parse: {
	            push: function(token, stack, context) {
	                stack.push(token);
	            },
	            push_value: function(token, stack, context) {
	                stack.push(token.value);
	            }
	        }
	    };

	    // The regular expressions and compile/parse logic used to match tokens in expressions.
	    //
	    // Properties:
	    //
	    //      type:  The type of expression this matches
	    //
	    //      regex: One or more regular expressions that matche the format of the token.
	    //
	    //      next:  Valid tokens that can occur next in the expression.
	    //
	    // Functions:
	    //
	    //      compile: A function that compiles the raw regular expression match into a token.
	    //
	    //      parse:   A function that parses the compiled token into output.
	    //
	    Twig.expression.definitions = [
	        {
	            type: Twig.expression.type.test,
	            regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,
	            next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.filter = token.match[2];
	                token.modifier = token.match[1];
	                delete token.match;
	                delete token.value;
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var value = stack.pop(),
	                    params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
	                    result = Twig.test(token.filter, value, params);

	                if (token.modifier == 'not') {
	                    stack.push(!result);
	                } else {
	                    stack.push(result);
	                }
	            }
	        },
	        {
	            type: Twig.expression.type.comma,
	            // Match a comma
	            regex: /^,/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
	            compile: function(token, stack, output) {
	                var i = stack.length - 1,
	                    stack_token;

	                delete token.match;
	                delete token.value;

	                // pop tokens off the stack until the start of the object
	                for (; i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token.type === Twig.expression.type.object.start
	                        || stack_token.type === Twig.expression.type.parameter.start
	                        || stack_token.type === Twig.expression.type.array.start) {
	                        stack.push(stack_token);
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            }
	        },
	        {
	            type: Twig.expression.type.operator.binary,
	            // Match any of +, *, /, -, %, ~, <, <=, >, >=, !=, ==, **, ?, :, and, or, not
	            regex: /(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.operator.unary]),
	            compile: function(token, stack, output) {
	                delete token.match;

	                token.value = token.value.trim();
	                var value = token.value,
	                    operator = Twig.expression.operator.lookup(value, token);

	                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);

	                while (stack.length > 0 &&
	                    (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) &&
	                    (
	                        (operator.associativity === Twig.expression.operator.leftToRight &&
	                            operator.precidence >= stack[stack.length - 1].precidence) ||

	                        (operator.associativity === Twig.expression.operator.rightToLeft &&
	                            operator.precidence > stack[stack.length - 1].precidence)
	                    )
	                ) {
	                    var temp = stack.pop();
	                    output.push(temp);
	                }

	                if (value === ":") {
	                    // Check if this is a ternary or object key being set
	                    if (stack[stack.length - 1] && stack[stack.length - 1].value === "?") ; else {
	                        // This is not a ternary so we push the token to the output where it can be handled
	                        //   when the assocated object is closed.
	                        var key_token = output.pop();

	                        if (key_token.type === Twig.expression.type.string ||
	                            key_token.type === Twig.expression.type.variable ||
	                            key_token.type === Twig.expression.type.number) {
	                            token.key = key_token.value;

	                        } else {
	                            throw new Twig.Error("Unexpected value before ':' of " + key_token.type + " = " + key_token.value);
	                        }

	                        output.push(token);
	                        return;
	                    }
	                } else {
	                    stack.push(operator);
	                }
	            },
	            parse: function(token, stack, context) {
	                if (token.key) {
	                    // handle ternary ':' operator
	                    stack.push(token);
	                } else {
	                    Twig.expression.operator.parse(token.value, stack);
	                }
	            }
	        },
	        {
	            type: Twig.expression.type.operator.unary,
	            // Match any of not
	            regex: /(^not\s+)/,
	            next: Twig.expression.set.expressions,
	            compile: function(token, stack, output) {
	                delete token.match;

	                token.value = token.value.trim();
	                var value = token.value,
	                    operator = Twig.expression.operator.lookup(value, token);

	                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);

	                while (stack.length > 0 &&
	                    (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) &&
	                    (
	                        (operator.associativity === Twig.expression.operator.leftToRight &&
	                            operator.precidence >= stack[stack.length - 1].precidence) ||

	                        (operator.associativity === Twig.expression.operator.rightToLeft &&
	                            operator.precidence > stack[stack.length - 1].precidence)
	                    )
	                ) {
	                    var temp = stack.pop();
	                    output.push(temp);
	                }

	                stack.push(operator);
	            },
	            parse: function(token, stack, context) {
	                Twig.expression.operator.parse(token.value, stack);
	            }
	        },
	        {
	            /**
	             * Match a string. This is anything between a pair of single or double quotes.
	             */
	            type: Twig.expression.type.string,
	            // See: http://blog.stevenlevithan.com/archives/match-quoted-string
	            regex: /^(["'])(?:(?=(\\?))\2.)*?\1/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                var value = token.value;
	                delete token.match;

	                // Remove the quotes from the string
	                if (value.substring(0, 1) === '"') {
	                    value = value.replace('\\"', '"');
	                } else {
	                    value = value.replace("\\'", "'");
	                }
	                token.value = value.substring(1, value.length - 1).replace(/\\n/g, "\n").replace(/\\r/g, "\r");
	                Twig.log.trace("Twig.expression.compile: ", "String value: ", token.value);
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            /**
	             * Match a parameter set start.
	             */
	            type: Twig.expression.type.parameter.start,
	            regex: /^\(/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },
	        {
	            /**
	             * Match a parameter set end.
	             */
	            type: Twig.expression.type.parameter.end,
	            regex: /^\)/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var stack_token,
	                    end_token = token;

	                stack_token = stack.pop();
	                while (stack.length > 0 && stack_token.type != Twig.expression.type.parameter.start) {
	                    output.push(stack_token);
	                    stack_token = stack.pop();
	                }

	                // Move contents of parens into preceding filter
	                var param_stack = [];
	                while (token.type !== Twig.expression.type.parameter.start) {
	                    // Add token to arguments stack
	                    param_stack.unshift(token);
	                    token = output.pop();
	                }
	                param_stack.unshift(token);

	                // Get the token preceding the parameters
	                token = output[output.length - 1];

	                if (token === undefined ||
	                    (token.type !== Twig.expression.type._function &&
	                        token.type !== Twig.expression.type.filter &&
	                        token.type !== Twig.expression.type.test &&
	                        token.type !== Twig.expression.type.key.brackets &&
	                        token.type !== Twig.expression.type.key.period)) {

	                    end_token.expression = true;

	                    // remove start and end token from stack
	                    param_stack.pop();
	                    param_stack.shift();

	                    end_token.params = param_stack;

	                    output.push(end_token);

	                } else {
	                    end_token.expression = false;
	                    token.params = param_stack;
	                }
	            },
	            parse: function(token, stack, context) {
	                var new_array = [],
	                    array_ended = false,
	                    value = null;

	                if (token.expression) {
	                    value = Twig.expression.parse.apply(this, [token.params, context]);
	                    stack.push(value);

	                } else {

	                    while (stack.length > 0) {
	                        value = stack.pop();
	                        // Push values into the array until the start of the array
	                        if (value && value.type && value.type == Twig.expression.type.parameter.start) {
	                            array_ended = true;
	                            break;
	                        }
	                        new_array.unshift(value);
	                    }

	                    if (!array_ended) {
	                        throw new Twig.Error("Expected end of parameter set.");
	                    }

	                    stack.push(new_array);
	                }
	            }
	        },
	        {
	            /**
	             * Match an array start.
	             */
	            type: Twig.expression.type.array.start,
	            regex: /^\[/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },
	        {
	            /**
	             * Match an array end.
	             */
	            type: Twig.expression.type.array.end,
	            regex: /^\]/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var i = stack.length - 1,
	                    stack_token;
	                // pop tokens off the stack until the start of the object
	                for (; i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token.type === Twig.expression.type.array.start) {
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var new_array = [],
	                    array_ended = false,
	                    value = null;

	                while (stack.length > 0) {
	                    value = stack.pop();
	                    // Push values into the array until the start of the array
	                    if (value.type && value.type == Twig.expression.type.array.start) {
	                        array_ended = true;
	                        break;
	                    }
	                    new_array.unshift(value);
	                }
	                if (!array_ended) {
	                    throw new Twig.Error("Expected end of array.");
	                }

	                stack.push(new_array);
	            }
	        },
	        // Token that represents the start of a hash map '}'
	        //
	        // Hash maps take the form:
	        //    { "key": 'value', "another_key": item }
	        //
	        // Keys must be quoted (either single or double) and values can be any expression.
	        {
	            type: Twig.expression.type.object.start,
	            regex: /^\{/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },

	        // Token that represents the end of a Hash Map '}'
	        //
	        // This is where the logic for building the internal
	        // representation of a hash map is defined.
	        {
	            type: Twig.expression.type.object.end,
	            regex: /^\}/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var i = stack.length - 1,
	                    stack_token;

	                // pop tokens off the stack until the start of the object
	                for (; i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token && stack_token.type === Twig.expression.type.object.start) {
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            },
	            parse: function(end_token, stack, context) {
	                var new_object = {},
	                    object_ended = false,
	                    token = null,
	                    has_value = false,
	                    value = null;

	                while (stack.length > 0) {
	                    token = stack.pop();
	                    // Push values into the array until the start of the object
	                    if (token && token.type && token.type === Twig.expression.type.object.start) {
	                        object_ended = true;
	                        break;
	                    }
	                    if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
	                        if (!has_value) {
	                            throw new Twig.Error("Missing value for key '" + token.key + "' in object definition.");
	                        }
	                        new_object[token.key] = value;

	                        // Preserve the order that elements are added to the map
	                        // This is necessary since JavaScript objects don't
	                        // guarantee the order of keys
	                        if (new_object._keys === undefined) new_object._keys = [];
	                        new_object._keys.unshift(token.key);

	                        // reset value check
	                        value = null;
	                        has_value = false;

	                    } else {
	                        has_value = true;
	                        value = token;
	                    }
	                }
	                if (!object_ended) {
	                    throw new Twig.Error("Unexpected end of object.");
	                }

	                stack.push(new_object);
	            }
	        },

	        // Token representing a filter
	        //
	        // Filters can follow any expression and take the form:
	        //    expression|filter(optional, args)
	        //
	        // Filter parsing is done in the Twig.filters namespace.
	        {
	            type: Twig.expression.type.filter,
	            // match a | then a letter or _, then any number of letters, numbers, _ or -
	            regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
	            next: Twig.expression.set.operations_extended.concat([
	                Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.value = token.match[1];
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var input = stack.pop(),
	                    params = token.params && Twig.expression.parse.apply(this, [token.params, context]);

	                stack.push(Twig.filter.apply(this, [token.value, input, params]));
	            }
	        },
	        {
	            type: Twig.expression.type._function,
	            // match any letter or _, then any number of letters, numbers, _ or - followed by (
	            regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
	            next: Twig.expression.type.parameter.start,
	            transform: function(match, tokens) {
	                return '(';
	            },
	            compile: function(token, stack, output) {
	                var fn = token.match[1];
	                token.fn = fn;
	                // cleanup token
	                delete token.match;
	                delete token.value;

	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
	                    fn = token.fn,
	                    value;

	                if (Twig.functions[fn]) {
	                    // Get the function from the built-in functions
	                    value = Twig.functions[fn].apply(this, params);

	                } else if (typeof context[fn] == 'function') {
	                    // Get the function from the user/context defined functions
	                    value = context[fn].apply(context, params);

	                } else {
	                    throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
	                }

	                stack.push(value);
	            }
	        },

	        // Token representing a variable.
	        //
	        // Variables can contain letters, numbers, underscores and
	        // dashes, but must start with a letter or underscore.
	        //
	        // Variables are retrieved from the render context and take
	        // the value of 'undefined' if the given variable doesn't
	        // exist in the context.
	        {
	            type: Twig.expression.type.variable,
	            // match any letter or _, then any number of letters, numbers, _ or -
	            regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
	            next: Twig.expression.set.operations_extended.concat([
	                Twig.expression.type.parameter.start]),
	            compile: Twig.expression.fn.compile.push,
	            validate: function(match, tokens) {
	                return Twig.expression.reservedWords.indexOf(match[0]) == -1;
	            },
	            parse: function(token, stack, context) {
	                // Get the variable from the context
	                var value = Twig.expression.resolve(context[token.value], context);
	                stack.push(value);
	            }
	        },
	        {
	            type: Twig.expression.type.key.period,
	            regex: /^\.([a-zA-Z0-9_]+)/,
	            next: Twig.expression.set.operations_extended.concat([
	                Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.key = token.match[1];
	                delete token.match;
	                delete token.value;

	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
	                    key = token.key,
	                    object = stack.pop(),
	                    value;

	                if (object === null || object === undefined) {
	                    if (this.options.strict_variables) {
	                        throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
	                    } else {
	                        return null;
	                    }
	                }

	                var capitalize = function(value) {return value.substr(0, 1).toUpperCase() + value.substr(1);};

	                // Get the variable from the context
	                if (typeof object === 'object' && key in object) {
	                    value = object[key];
	                } else if (object["get" + capitalize(key)] !== undefined) {
	                    value = object["get" + capitalize(key)];
	                } else if (object["is" + capitalize(key)] !== undefined) {
	                    value = object["is" + capitalize(key)];
	                } else {
	                    value = null;
	                }
	                stack.push(Twig.expression.resolve(value, object, params));
	            }
	        },
	        {
	            type: Twig.expression.type.key.brackets,
	            regex: /^\[([^\]]*)\]/,
	            next: Twig.expression.set.operations_extended.concat([
	                Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                var match = token.match[1];
	                delete token.value;
	                delete token.match;

	                // The expression stack for the key
	                token.stack = Twig.expression.compile({
	                    value: match
	                }).stack;

	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                // Evaluate key
	                var params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
	                    key = Twig.expression.parse.apply(this, [token.stack, context]),
	                    object = stack.pop(),
	                    value;

	                if (object === null || object === undefined) {
	                    if (this.options.strict_variables) {
	                        throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
	                    } else {
	                        return null;
	                    }
	                }

	                // Get the variable from the context
	                if (typeof object === 'object' && key in object) {
	                    value = object[key];
	                } else {
	                    value = null;
	                }
	                stack.push(Twig.expression.resolve(value, object, params));
	            }
	        },
	        {
	            /**
	             * Match a null value.
	             */
	            type: Twig.expression.type._null,
	            // match a number
	            regex: /^null/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                delete token.match;
	                token.value = null;
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            /**
	             * Match a number (integer or decimal)
	             */
	            type: Twig.expression.type.number,
	            // match a number
	            regex: /^\-?\d+(\.\d+)?/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                token.value = Number(token.value);
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            /**
	             * Match a boolean
	             */
	            type: Twig.expression.type.bool,
	            regex: /^(true|false)/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                token.value = (token.match[0] == "true");
	                delete token.match;
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        }
	    ];

	    /**
	     * Resolve a context value.
	     *
	     * If the value is a function, it is executed with a context parameter.
	     *
	     * @param {string} key The context object key.
	     * @param {Object} context The render context.
	     */
	    Twig.expression.resolve = function(value, context, params) {
	        if (typeof value == 'function') {
	            return value.apply(context, params || []);
	        } else {
	            return value;
	        }
	    };

	    /**
	     * Registry for logic handlers.
	     */
	    Twig.expression.handler = {};

	    /**
	     * Define a new expression type, available at Twig.logic.type.{type}
	     *
	     * @param {string} type The name of the new type.
	     */
	    Twig.expression.extendType = function(type) {
	        Twig.expression.type[type] = "Twig.expression.type." + type;
	    };

	    /**
	     * Extend the expression parsing functionality with a new definition.
	     *
	     * Token definitions follow this format:
	     *  {
	     *      type:     One of Twig.expression.type.[type], either pre-defined or added using
	     *                    Twig.expression.extendType
	     *
	     *      next:     Array of types from Twig.expression.type that can follow this token,
	     *
	     *      regex:    A regex or array of regex's that should match the token.
	     *
	     *      compile: function(token, stack, output) called when this token is being compiled.
	     *                   Should return an object with stack and output set.
	     *
	     *      parse:   function(token, stack, context) called when this token is being parsed.
	     *                   Should return an object with stack and context set.
	     *  }
	     *
	     * @param {Object} definition A token definition.
	     */
	    Twig.expression.extend = function(definition) {
	        if (!definition.type) {
	            throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
	        }
	        Twig.expression.handler[definition.type] = definition;
	    };

	    // Extend with built-in expressions
	    while (Twig.expression.definitions.length > 0) {
	        Twig.expression.extend(Twig.expression.definitions.shift());
	    }

	    /**
	     * Break an expression into tokens defined in Twig.expression.definitions.
	     *
	     * @param {string} expression The string to tokenize.
	     *
	     * @return {Array} An array of tokens.
	     */
	    Twig.expression.tokenize = function(expression) {
	        var tokens = [],
	            // Keep an offset of the location in the expression for error messages.
	            exp_offset = 0,
	            // The valid next tokens of the previous token
	            next = null,
	            // Match information
	            type, regex, regex_array,
	            // The possible next token for the match
	            token_next,
	            // Has a match been found from the definitions
	            match_found, invalid_matches = [], match_function;

	        match_function = function() {
	            var match = Array.prototype.slice.apply(arguments);
	                match.pop();
	                match.pop();

	            Twig.log.trace("Twig.expression.tokenize",
	                "Matched a ", type, " regular expression of ", match);

	            if (next && next.indexOf(type) < 0) {
	                invalid_matches.push(
	                    type + " cannot follow a " + tokens[tokens.length - 1].type +
	                    " at template:" + exp_offset + " near '" + match[0].substring(0, 20) +
	                    "...'"
	                );
	                // Not a match, don't change the expression
	                return match[0];
	            }

	            // Validate the token if a validation function is provided
	            if (Twig.expression.handler[type].validate &&
	                !Twig.expression.handler[type].validate(match, tokens)) {
	                return match[0];
	            }

	            invalid_matches = [];

	            tokens.push({
	                type: type,
	                value: match[0],
	                match: match
	            });

	            match_found = true;
	            next = token_next;
	            exp_offset += match[0].length;

	            // Does the token need to return output back to the expression string
	            // e.g. a function match of cycle( might return the '(' back to the expression
	            // This allows look-ahead to differentiate between token types (e.g. functions and variable names)
	            if (Twig.expression.handler[type].transform) {
	                return Twig.expression.handler[type].transform(match, tokens);
	            }
	            return '';
	        };

	        Twig.log.debug("Twig.expression.tokenize", "Tokenizing expression ", expression);

	        while (expression.length > 0) {
	            expression = expression.trim();
	            for (type in Twig.expression.handler) {
	                if (Twig.expression.handler.hasOwnProperty(type)) {
	                    token_next = Twig.expression.handler[type].next;
	                    regex = Twig.expression.handler[type].regex;
	                    // Twig.log.trace("Checking type ", type, " on ", expression);
	                    if (regex instanceof Array) {
	                        regex_array = regex;
	                    } else {
	                        regex_array = [regex];
	                    }

	                    match_found = false;
	                    while (regex_array.length > 0) {
	                        regex = regex_array.pop();
	                        expression = expression.replace(regex, match_function);
	                    }
	                    // An expression token has been matched. Break the for loop and start trying to
	                    //  match the next template (if expression isn't empty.)
	                    if (match_found) {
	                        break;
	                    }
	                }
	            }
	            if (!match_found) {
	                if (invalid_matches.length > 0) {
	                    throw new Twig.Error(invalid_matches.join(" OR "));
	                } else {
	                    throw new Twig.Error("Unable to parse '" + expression + "' at template position" + exp_offset);
	                }
	            }
	        }

	        Twig.log.trace("Twig.expression.tokenize", "Tokenized to ", tokens);
	        return tokens;
	    };

	    /**
	     * Compile an expression token.
	     *
	     * @param {Object} raw_token The uncompiled token.
	     *
	     * @return {Object} The compiled token.
	     */
	    Twig.expression.compile = function(raw_token) {
	        var expression = raw_token.value,
	            // Tokenize expression
	            tokens = Twig.expression.tokenize(expression),
	            token = null,
	            output = [],
	            stack = [],
	            token_template = null;

	        Twig.log.trace("Twig.expression.compile: ", "Compiling ", expression);

	        // Push tokens into RPN stack using the Sunting-yard algorithm
	        // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

	        while (tokens.length > 0) {
	            token = tokens.shift();
	            token_template = Twig.expression.handler[token.type];

	            Twig.log.trace("Twig.expression.compile: ", "Compiling ", token);

	            // Compile the template
	            token_template.compile && token_template.compile(token, stack, output);

	            Twig.log.trace("Twig.expression.compile: ", "Stack is", stack);
	            Twig.log.trace("Twig.expression.compile: ", "Output is", output);
	        }

	        while (stack.length > 0) {
	            output.push(stack.pop());
	        }

	        Twig.log.trace("Twig.expression.compile: ", "Final output is", output);

	        raw_token.stack = output;
	        delete raw_token.value;

	        return raw_token;
	    };


	    /**
	     * Parse an RPN expression stack within a context.
	     *
	     * @param {Array} tokens An array of compiled expression tokens.
	     * @param {Object} context The render context to parse the tokens with.
	     *
	     * @return {Object} The result of parsing all the tokens. The result
	     *                  can be anything, String, Array, Object, etc... based on
	     *                  the given expression.
	     */
	    Twig.expression.parse = function(tokens, context) {
	        var that = this;

	        // If the token isn't an array, make it one.
	        if (!(tokens instanceof Array)) {
	            tokens = [tokens];
	        }

	        // The output stack
	        var stack = [],
	            token_template = null;

	        tokens.forEach(function(token) {
	            token_template = Twig.expression.handler[token.type];

	            token_template.parse && token_template.parse.apply(that, [token, stack, context]);
	        });

	        // Pop the final value off the stack
	        return stack.pop();
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.expression.operator.js
	//
	// This file handles operator lookups and parsing.
	var Twig = (function(Twig) {

	    /**
	     * Operator associativity constants.
	     */
	    Twig.expression.operator = {
	        leftToRight: 'leftToRight',
	        rightToLeft: 'rightToLeft'
	    };

	    var containment = function(a, b) {
	        if (b.indexOf !== undefined) {
	            // String
	            return a === b || a !== '' && b.indexOf(a) > -1;

	        } else {
	            var el;
	            for (el in b) {
	                if (b.hasOwnProperty(el) && b[el] === a) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    };

	    /**
	     * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
	     * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
	     */
	    Twig.expression.operator.lookup = function(operator, token) {
	        switch (operator) {
	            case "..":
	            case 'not in':
	            case 'in':
	                token.precidence = 20;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case ',':
	                token.precidence = 18;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            // Ternary
	            case '?':
	            case ':':
	                token.precidence = 16;
	                token.associativity = Twig.expression.operator.rightToLeft;
	                break;

	            case 'or':
	                token.precidence = 14;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'and':
	                token.precidence = 13;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '==':
	            case '!=':
	                token.precidence = 9;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '<':
	            case '<=':
	            case '>':
	            case '>=':
	                token.precidence = 8;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;


	            case '~': // String concatination
	            case '+':
	            case '-':
	                token.precidence = 6;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '//':
	            case '**':
	            case '*':
	            case '/':
	            case '%':
	                token.precidence = 5;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'not':
	                token.precidence = 3;
	                token.associativity = Twig.expression.operator.rightToLeft;
	                break;

	            default:
	                throw new Twig.Error(operator + " is an unknown operator.");
	        }
	        token.operator = operator;
	        return token;
	    };

	    /**
	     * Handle operations on the RPN stack.
	     *
	     * Returns the updated stack.
	     */
	    Twig.expression.operator.parse = function(operator, stack) {
	        Twig.log.trace("Twig.expression.operator.parse: ", "Handling ", operator);
	        var a, b, c;
	        switch (operator) {
	            case ':':
	                // Ignore
	                break;

	            case '?':
	                c = stack.pop(); // false expr
	                b = stack.pop(); // true expr
	                a = stack.pop(); // conditional
	                if (a) {
	                    stack.push(b);
	                } else {
	                    stack.push(c);
	                }
	                break;

	            case '+':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(a + b);
	                break;

	            case '-':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(a - b);
	                break;

	            case '*':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(a * b);
	                break;

	            case '/':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(a / b);
	                break;

	            case '//':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(parseInt(a / b));
	                break;

	            case '%':
	                b = parseFloat(stack.pop());
	                a = parseFloat(stack.pop());
	                stack.push(a % b);
	                break;

	            case '~':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push((a !== undefined ? a.toString() : "")
	                    + (b !== undefined ? b.toString() : ""));
	                break;

	            case 'not':
	            case '!':
	                stack.push(!stack.pop());
	                break;

	            case '<':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a < b);
	                break;

	            case '<=':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a <= b);
	                break;

	            case '>':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a > b);
	                break;

	            case '>=':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a >= b);
	                break;

	            case '===':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a === b);
	                break;

	            case '==':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a == b);
	                break;

	            case '!==':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a !== b);
	                break;

	            case '!=':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a != b);
	                break;

	            case 'or':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a || b);
	                break;

	            case 'and':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(a && b);
	                break;

	            case '**':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(Math.pow(a, b));
	                break;


	            case 'not in':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(!containment(a, b));
	                break;

	            case 'in':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(containment(a, b));
	                break;

	            case '..':
	                b = stack.pop();
	                a = stack.pop();
	                stack.push(Twig.functions.range(a, b));
	                break;

	            default:
	                throw new Twig.Error(operator + " is an unknown operator.");
	        }
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.filters.js
	//
	// This file handles parsing filters.
	var Twig = (function(Twig) {

	    // Determine object type
	    function is(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    }

	    Twig.filters = {
	        // String Filters
	        upper: function(value) {
	            if (typeof value !== "string") {
	                return value;
	            }

	            return value.toUpperCase();
	        },
	        lower: function(value) {
	            if (typeof value !== "string") {
	                return value;
	            }

	            return value.toLowerCase();
	        },
	        capitalize: function(value) {
	            if (typeof value !== "string") {
	                return value;
	            }

	            return value.substr(0, 1).toUpperCase() + value.substr(1);
	        },
	        title: function(value) {
	            if (typeof value !== "string") {
	                return value;
	            }

	            return value.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
	                return p1 + p2.toUpperCase();
	            });
	        },
	        length: function(value) {
	            if (value instanceof Array || typeof value === "string") {
	                return value.length;
	            } else if (value instanceof Object) {
	                if (value._keys === undefined) {
	                    return Object.keys(value).length;
	                } else {
	                    return value._keys.length;
	                }
	            } else {
	                return 0;
	            }
	        },

	        // Array/Object Filters
	        reverse: function(value) {
	            if (is("Array", value)) {
	                return value.reverse();
	            } else if (is("String", value)) {
	                return value.split("").reverse().join("");
	            } else if (value instanceof Object) {
	                var keys = value._keys || Object.keys(value).reverse();
	                value._keys = keys;
	                return value;
	            }
	        },
	        sort: function(value) {
	            if (is("Array", value)) {
	                return value.sort();
	            } else if (value instanceof Object) {
	                // Sorting objects isn't obvious since the order of
	                // returned keys isn't guaranteedin JavaScript.
	                // Because of this we use a "hidden" key called _keys to
	                // store the keys in the order we want to return them.

	                delete value._keys;
	                var keys = Object.keys(value),
	                    sorted_keys = keys.sort(function(a, b) {
	                        return value[a] > value[b];
	                    });
	                value._keys = sorted_keys;
	                return value;
	            }
	        },
	        keys: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            var keyset = value._keys || Object.keys(value),
	                output = [];

	            keyset.forEach(function(key) {
	                if (key === "_keys") return; // Ignore the _keys property
	                if (value.hasOwnProperty(key)) {
	                    output.push(key);
	                }
	            });
	            return output;
	        },
	        url_encode: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            return encodeURIComponent(value);
	        },
	        join: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            var join_str = "",
	                output = [],
	                keyset = null;

	            if (params && params[0]) {
	                join_str = params[0];
	            }
	            if (value instanceof Array) {
	                output = value;
	            } else {
	                keyset = value._keys || Object.keys(value);
	                keyset.forEach(function(key) {
	                    if (key === "_keys") return; // Ignore the _keys property
	                    if (value.hasOwnProperty(key)) {
	                        output.push(value[key]);
	                    }
	                });
	            }
	            return output.join(join_str);
	        },
	        "default": function(value, params) {
	            if (params === undefined || params.length !== 1) {
	                throw new Twig.Error("default filter expects one argument");
	            }
	            if (value === undefined || value === null || value === '') {
	                return params[0];
	            } else {
	                return value;
	            }
	        },
	        json_encode: function(value) {
	            if (value && value.hasOwnProperty("_keys")) {
	                delete value._keys;
	            }
	            if (value === undefined || value === null) {
	                return "null";
	            }
	            return JSON.stringify(value);
	        },
	        merge: function(value, params) {
	            var obj = [],
	                arr_index = 0,
	                keyset = [];

	            // Check to see if all the objects being merged are arrays
	            if (!(value instanceof Array)) {
	                // Create obj as an Object
	                obj = {};
	            } else {
	                params.forEach(function(param) {
	                    if (!(param instanceof Array)) {
	                        obj = {};
	                    }
	                });
	            }
	            if (!(obj instanceof Array)) {
	                obj._keys = [];
	            }

	            if (value instanceof Array) {
	                value.forEach(function(val) {
	                    if (obj._keys) obj._keys.push(arr_index);
	                    obj[arr_index] = val;
	                    arr_index++;
	                });
	            } else {
	                keyset = value._keys || Object.keys(value);
	                keyset.forEach(function(key) {
	                    obj[key] = value[key];
	                    obj._keys.push(key);

	                    // Handle edge case where a number index in an object is greater than
	                    //   the array counter. In such a case, the array counter is increased
	                    //   one past the index.
	                    //
	                    // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
	                    // Without this, d would have an index of "4" and overwrite the value
	                    //   of "value"
	                    var int_key = parseInt(key, 10);
	                    if (!isNaN(int_key) && int_key >= arr_index) {
	                        arr_index = int_key + 1;
	                    }
	                });
	            }

	            // mixin the merge arrays
	            params.forEach(function(param) {
	                if (param instanceof Array) {
	                    param.forEach(function(val) {
	                        if (obj._keys) obj._keys.push(arr_index);
	                        obj[arr_index] = val;
	                        arr_index++;
	                    });
	                } else {
	                    keyset = param._keys || Object.keys(param);
	                    keyset.forEach(function(key) {
	                        if (!obj[key]) obj._keys.push(key);
	                        obj[key] = param[key];

	                        var int_key = parseInt(key, 10);
	                        if (!isNaN(int_key) && int_key >= arr_index) {
	                            arr_index = int_key + 1;
	                        }
	                    });
	                }
	            });
	            if (params.length === 0) {
	                throw new Twig.Error("Filter merge expects at least one parameter");
	            }

	            return obj;
	        },
	        date: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            var date = Twig.functions.date(value);
	            return Twig.lib.formatDate(date, params[0]);
	        },

	        replace: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            var pairs = params[0],
	                tag;
	            for (tag in pairs) {
	                if (pairs.hasOwnProperty(tag) && tag !== "_keys") {
	                    value = Twig.lib.replaceAll(value, tag, pairs[tag]);
	                }
	            }
	            return value;
	        },

	        format: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            return Twig.lib.vsprintf(value, params);
	        },

	        striptags: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            return Twig.lib.strip_tags(value);
	        },

	        escape: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            return value.toString().replace(/&/g, "&amp;")
	                .replace(/</g, "&lt;")
	                .replace(/>/g, "&gt;")
	                .replace(/"/g, "&quot;")
	                .replace(/'/g, "&#039;");
	        },

	        /* Alias of escape */
	        "e": function(value) {
	            return Twig.filters.escape(value);
	        },

	        nl2br: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            var linebreak_tag = "BACKSLASH_n_replace",
	                br = "<br />" + linebreak_tag;

	            value = Twig.filters.escape(value)
	                .replace(/\r\n/g, br)
	                .replace(/\r/g, br)
	                .replace(/\n/g, br);

	            return Twig.lib.replaceAll(value, linebreak_tag, "\n");
	        },

	        /**
	         * Adapted from: http://phpjs.org/functions/number_format:481
	         */
	        number_format: function(value, params) {
	            var number = value,
	                decimals = (params && params[0]) ? params[0] : undefined,
	                dec = (params && params[1] !== undefined) ? params[1] : ".",
	                sep = (params && params[2] !== undefined) ? params[2] : ",";

	            number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	            var n = !isFinite(+number) ? 0 : +number,
	                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	                s = '',
	                toFixedFix = function(n, prec) {
	                    var k = Math.pow(10, prec);
	                    return '' + Math.round(n * k) / k;
	                };
	            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	            if (s[0].length > 3) {
	                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	            }
	            if ((s[1] || '').length < prec) {
	                s[1] = s[1] || '';
	                s[1] += new Array(prec - s[1].length + 1).join('0');
	            }
	            return s.join(dec);
	        },

	        trim: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            var str = Twig.filters.escape('' + value),
	                whitespace;
	            if (params && params[0]) {
	                whitespace = '' + params[0];
	            } else {
	                whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	            }
	            for (var i = 0; i < str.length; i++) {
	                if (whitespace.indexOf(str.charAt(i)) === -1) {
	                    str = str.substring(i);
	                    break;
	                }
	            }
	            for (i = str.length - 1; i >= 0; i--) {
	                if (whitespace.indexOf(str.charAt(i)) === -1) {
	                    str = str.substring(0, i + 1);
	                    break;
	                }
	            }
	            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
	        },

	        slice: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            if (params === undefined || params.length < 1) {
	                throw new Twig.Error("slice filter expects at least 1 argument");
	            }

	            // default to start of string
	            var start = params[0] || 0;
	            // default to length of string
	            var length = params.length > 1 ? params[1] : value.length;
	            // handle negative start values
	            var startIndex = start >= 0 ? start : Math.max(value.length + start, 0);

	            if (Twig.lib.is("Array", value)) {
	                var output = [];
	                for (var i = startIndex; i < startIndex + length && i < value.length; i++) {
	                    output.push(value[i]);
	                }
	                return output;
	            } else if (Twig.lib.is("String", value)) {
	                return value.substr(startIndex, length);
	            } else {
	                throw new Twig.Error("slice filter expects value to be an array or string");
	            }
	        }
	    };

	    Twig.filter = function(filter, value, params) {
	        if (!Twig.filters[filter]) {
	            throw "Unable to find filter " + filter;
	        }
	        return Twig.filters[filter].apply(this, [value, params]);
	    };

	    Twig.filter.extend = function(filter, definition) {
	        Twig.filters[filter] = definition;
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//                   2012 Hadrien Lanneau
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.functions.js
	//
	// This file handles parsing filters.
	var Twig = (function(Twig) {

	    Twig.functions = {
	        //  attribute, block, constant, date, dump, parent, random,.

	        // Range function from http://phpjs.org/functions/range:499
	        // Used under an MIT License
	        range: function(low, high, step) {
	            // http://kevin.vanzonneveld.net
	            // +   original by: Waldo Malqui Silva
	            // *     example 1: range ( 0, 12 );
	            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	            // *     example 2: range( 0, 100, 10 );
	            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
	            // *     example 3: range( 'a', 'i' );
	            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
	            // *     example 4: range( 'c', 'a' );
	            // *     returns 4: ['c', 'b', 'a']
	            var matrix = [];
	            var inival, endval, plus;
	            var walker = step || 1;
	            var chars = false;

	            if (!isNaN(low) && !isNaN(high)) {
	                inival = parseInt(low, 10);
	                endval = parseInt(high, 10);
	            } else if (isNaN(low) && isNaN(high)) {
	                chars = true;
	                inival = low.charCodeAt(0);
	                endval = high.charCodeAt(0);
	            } else {
	                inival = (isNaN(low) ? 0 : low);
	                endval = (isNaN(high) ? 0 : high);
	            }

	            plus = ((inival > endval) ? false : true);
	            if (plus) {
	                while (inival <= endval) {
	                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
	                    inival += walker;
	                }
	            } else {
	                while (inival >= endval) {
	                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
	                    inival -= walker;
	                }
	            }

	            return matrix;
	        },
	        cycle: function(arr, i) {
	            var pos = i % arr.length;
	            return arr[pos];
	        },
	        dump: function() {
	            var EOL = '\n',
	                indentChar = '  ',
	                indentTimes = 0,
	                out = '',
	                args = Array.prototype.slice.call(arguments),
	                indent = function(times) {
	                    var ind = '';
	                    while (times > 0) {
	                        times--;
	                        ind += indentChar;
	                    }
	                    return ind;
	                },
	                displayVar = function(variable) {
	                    out += indent(indentTimes);
	                    if (typeof (variable) === 'object') {
	                        dumpVar(variable);
	                    } else if (typeof (variable) === 'function') {
	                        out += 'function()' + EOL;
	                    } else if (typeof (variable) === 'string') {
	                        out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
	                    } else if (typeof (variable) === 'number') {
	                        out += 'number(' + variable + ')' + EOL;
	                    } else if (typeof (variable) === 'boolean') {
	                        out += 'bool(' + variable + ')' + EOL;
	                    }
	                },
	                dumpVar = function(variable) {
	                    var i;
	                    if (variable === null) {
	                        out += 'NULL' + EOL;
	                    } else if (variable === undefined) {
	                        out += 'undefined' + EOL;
	                    } else if (typeof variable === 'object') {
	                        out += indent(indentTimes) + typeof (variable);
	                        indentTimes++;
	                        out += '(' + (function(obj) {
	                            var size = 0, key;
	                            for (key in obj) {
	                                if (obj.hasOwnProperty(key)) {
	                                    size++;
	                                }
	                            }
	                            return size;
	                        })(variable) + ') {' + EOL;
	                        for (i in variable) {
	                            out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
	                            displayVar(variable[i]);
	                        }
	                        indentTimes--;
	                        out += indent(indentTimes) + '}' + EOL;
	                    } else {
	                        displayVar(variable);
	                    }
	                };

	            // handle no argument case by dumping the entire render context
	            if (args.length == 0) args.push(this.context);

	            args.forEach(function(variable) {
	                dumpVar(variable);
	            });

	            return out;
	        },
	        date: function(date, time) {
	            var dateObj;
	            if (date === undefined) {
	                dateObj = new Date();
	            } else if (Twig.lib.is("Date", date)) {
	                dateObj = date;
	            } else if (Twig.lib.is("String", date)) {
	                dateObj = new Date(Twig.lib.strtotime(date) * 1000);
	            } else if (Twig.lib.is("Number", date)) {
	                // timestamp
	                dateObj = new Date(date * 1000);
	            } else {
	                throw new Twig.Error("Unable to parse date " + date);
	            }
	            return dateObj;
	        },
	        block: function(block) {
	            return this.blocks[block];
	        },
	        parent: function() {
	            // Add a placeholder
	            return Twig.placeholders.parent;
	        }
	    };

	    Twig._function = function(_function, value, params) {
	        if (!Twig.functions[_function]) {
	            throw "Unable to find function " + _function;
	        }
	        return Twig.functions[_function](value, params);
	    };

	    Twig._function.extend = function(_function, definition) {
	        Twig.functions[_function] = definition;
	    };

	    return Twig;

	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.tests.js
	//
	// This file handles expression tests. (is empty, is not defined, etc...)
	var Twig = (function(Twig) {
	    Twig.tests = {
	        empty: function(value) {
	            if (value === null || value === undefined) return true;
	            // Handler numbers
	            if (typeof value === "number") return false; // numbers are never "empty"
	            // Handle strings and arrays
	            if (value.length && value.length > 0) return false;
	            // Handle objects
	            for (var key in value) {
	                if (value.hasOwnProperty(key)) return false;
	            }
	            return true;
	        },
	        odd: function(value) {
	            return value % 2 === 1;
	        },
	        even: function(value) {
	            return value % 2 === 0;
	        },
	        divisibleby: function(value, params) {
	            return value % params[0] === 0;
	        },
	        defined: function(value) {
	            return value !== undefined;
	        },
	        none: function(value) {
	            return value === null;
	        },
	        'null': function(value) {
	            return this.none(value); // Alias of none
	        },
	        sameas: function(value, params) {
	            return value === params[0];
	        }
	        /*
	        constant ?
	         */
	    };

	    Twig.test = function(test, value, params) {
	        if (!Twig.tests[test]) {
	            throw "Test " + test + " is not defined.";
	        }
	        return Twig.tests[test](value, params);
	    };

	    Twig.test.extend = function(test, definition) {
	        Twig.tests[test] = definition;
	    };

	    return Twig;
	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.exports.js
	//
	// This file provides extension points and other hooks into the twig functionality.

	var Twig = (function(Twig) {
	    Twig.exports = {
	        VERSION: Twig.VERSION
	    };

	    /**
	     * Create and compile a twig.js template.
	     *
	     * @param {Object} param Paramteres for creating a Twig template.
	     *
	     * @return {Twig.Template} A Twig template ready for rendering.
	     */
	    Twig.exports.twig = function twig(params) {
	        var id = params.id,
	            options = {
	                strict_variables: params.strict_variables || false,
	                allowInlineIncludes: params.allowInlineIncludes || false
	            };
	        if (id) {
	            Twig.validateId(id);
	        }

	        if (params.debug !== undefined) {
	            Twig.debug = params.debug;
	        }
	        if (params.trace !== undefined) {
	            Twig.trace = params.trace;
	        }

	        if (params.data !== undefined) {
	            return new Twig.Template({
	                data: params.data,
	                module: params.module,
	                id: id,
	                options: options
	            });

	        } else if (params.ref !== undefined) {
	            if (params.id !== undefined) {
	                throw new Error("Both ref and id cannot be set on a twig.js template.");
	            }
	            return Twig.Templates.load(params.ref);

	        } else if (params.href !== undefined) {
	            return Twig.Templates.loadRemote(params.href, {
	                id: id,
	                method: 'ajax',
	                base: params.base,
	                module: params.module,
	                precompiled: params.precompiled,
	                async: params.async,
	                options: options

	            }, params.load, params.error);

	        } else if (params.path !== undefined) {
	            return Twig.Templates.loadRemote(params.path, {
	                id: id,
	                method: 'fs',
	                base: params.base,
	                module: params.module,
	                precompiled: params.precompiled,
	                async: params.async,
	                options: options

	            }, params.load, params.error);
	        }
	    };

	    // Extend Twig with a new filter.
	    Twig.exports.extendFilter = function(filter, definition) {
	        Twig.filter.extend(filter, definition);
	    };

	    // Extend Twig with a new function.
	    Twig.exports.extendFunction = function(fn, definition) {
	        Twig._function.extend(fn, definition);
	    };

	    // Extend Twig with a new test.
	    Twig.exports.extendTest = function(test, definition) {
	        Twig.test.extend(test, definition);
	    };

	    // Extend Twig with a new definition.
	    Twig.exports.extendTag = function(definition) {
	        Twig.logic.extend(definition);
	    };

	    // Provide an environment for extending Twig core.
	    // Calls fn with the internal Twig object.
	    Twig.exports.extend = function(fn) {
	        fn(Twig);
	    };


	    /**
	     * Provide an extension for use with express 2.
	     *
	     * @param {string} markup The template markup.
	     * @param {array} options The express options.
	     *
	     * @return {string} The rendered template.
	     */
	    Twig.exports.compile = function(markup, options) {
	        var id = options.filename,
	            path = options.filename,
	            template;

	        // Try to load the template from the cache
	        template = new Twig.Template({
	            data: markup,
	            path: path,
	            id: id,
	            options: options.settings['twig options']
	        }); // Twig.Templates.load(id) ||

	        return function(context) {
	            return template.render(context);
	        };
	    };

	    /**
	     * Provide an extension for use with express 3.
	     *
	     * @param {string} path The location of the template file on disk.
	     * @param {Object|Function} The options or callback.
	     * @param {Function} fn callback.
	     */

	    Twig.exports.renderFile = function(path, options, fn) {
	        // handle callback in options
	        if ('function' == typeof options) {
	            fn = options;
	            options = {};
	        }

	        options = options || {};

	        var params = {
	            path: path,
	            base: options.settings['views'],
	            load: function(template) {
	                // render and return template
	                fn(null, template.render(options));
	            }
	        };

	        // mixin any options provided to the express app.
	        var view_options = options.settings['twig options'];

	        if (view_options) {
	            for (var option in view_options) if (view_options.hasOwnProperty(option)) {
	                params[option] = view_options[option];
	            }
	        }

	        Twig.exports.twig(params);
	    };

	    // Express 3 handler
	    Twig.exports.__express = Twig.exports.renderFile;

	    /**
	     * Shoud Twig.js cache templates.
	     * Disable during development to see changes to templates without
	     * reloading, and disable in production to improve performance.
	     *
	     * @param {boolean} cache
	     */
	    Twig.exports.cache = function(cache) {
	        Twig.cache = cache;
	    };

	    return Twig;
	})(Twig || {});

	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	// ## twig.compiler.js
	//
	// This file handles compiling templates into JS
	var Twig = (function(Twig) {
	    /**
	     * Namespace for compilation.
	     */
	    Twig.compiler = {
	        module: {}
	    };

	    // Compile a Twig Template to output.
	    Twig.compiler.compile = function(template, options) {
	        // Get tokens
	        var tokens = JSON.stringify(template.tokens)
	            , id = template.id
	            , output;

	        if (options.module) {
	            if (Twig.compiler.module[options.module] === undefined) {
	                throw new Twig.Error("Unable to find module type " + options.module);
	            }
	            output = Twig.compiler.module[options.module](id, tokens, options.twig);
	        } else {
	            output = Twig.compiler.wrap(id, tokens);
	        }
	        return output;
	    };

	    Twig.compiler.module = {
	        amd: function(id, tokens, pathToTwig) {
	            return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
	        }
	        , node: function(id, tokens) {
	            return 'var twig = require("twig").twig;\n'
	                + 'exports.template = ' + Twig.compiler.wrap(id, tokens)
	        }
	        , cjs2: function(id, tokens, pathToTwig) {
	            return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n'
	                + '\tvar twig = require("twig").twig;\n'
	                + '\texports.template = ' + Twig.compiler.wrap(id, tokens)
	                + '\n});'
	        }
	    };

	    Twig.compiler.wrap = function(id, tokens) {
	        return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ', precompiled: true});\n';
	    };

	    return Twig;
	})(Twig || {});
	//     Twig.js
	//     Copyright (c) 2011-2013 John Roepke
	//     Available under the BSD 2-Clause License
	//     https://github.com/justjohn/twig.js

	var Twig$1 = Twig.exports;

	const exports$2 = {};

	var twig = Twig$1.twig,
	  dialogs = {},
	  count = 0,
	  load_callback,
	  config = {
	    active_dialog_class: "active_dialog"
	  },
	  ready = false,
	  onready = [];

	twig({
	  id: 'dialog',
	  href: "templates/dialog.twig",
	  load: function() {
	    ready = true;
	    while (onready.length > 0) {
	      var fn = onready.shift();
	      fn();
	    }
	  }
	});

	exports$2.get = function(id) {
	  return dialogs[id];
	};

	exports$2.show = function(id) {
	  // Show dialog
	  $('#' + id).addClass(config.active_dialog_class);
	};
	exports$2.hide = function(e) {
	  if (e && e.returnValue === false) return false;
	  // Hide dialog
	  $("." + config.active_dialog_class).removeClass(config.active_dialog_class);
	};

	exports$2.create = function(params, callback) {
	  count++;
	  var id = params.id,
	    href = params.template,
	    data = params.data,
	    container = params.container,
	    title = params.title;

	  twig({
	    href: href,
	    load: function(template) {
	      var readyFn = function() {
	        var content = template.render(data || {});

	        content = twig({ref: 'dialog'}).render({
	          "id": id,
	          "content": content,
	          "title": title,
	        });

	        content = $(content);
	        dialogs[id] = content;

	        container && container.append(content);
	        callback && callback(content);

	        count--;

	        if (count === 0 && load_callback) {
	          load_callback();
	          load_callback = undefined;
	        }
	      };

	      if (ready)
	        readyFn();
	      else
	        onready.push(readyFn);
	    }
	  });

	  return exports$2;
	};

	exports$2.complete = function(callback) {
	  if (count > 0) {
	    load_callback = callback;
	  } else {
	    callback();
	  }
	};

	const exports$1 = {};

	// UI classes
	var cls = "button",
	  active_cls = "active",
	  pressed_cls = "down";

	exports$1.init = function() {

	  var button_interval,
	    button_interval_accel = 1.1,
	    button_interval_timeout,
	    button_incrementing = false,
	    button_trigger = function(element) {
	      button_interval /= button_interval_accel;
	      button_incrementing = true;
	      $(element).trigger("action");

	      button_interval_timeout = setTimeout(button_trigger, button_interval, element);
	    };

	  var button_down = function(e) {
	    $(this).removeClass(active_cls);
	    $(this).addClass(pressed_cls);

	    button_incrementing = false;
	    if ($(this).attr("interval")) {
	      button_interval = parseInt($(this).attr("interval"), 10);
	      button_interval_timeout = setTimeout(button_trigger, button_interval, this);
	    }

	    e.preventDefault();
	  };

	  var button_up = function(e) {
	    var pressed = $(this).hasClass(pressed_cls);
	    $(this).removeClass(pressed_cls);

	    clearTimeout(button_interval_timeout);

	    if (pressed && !button_incrementing) {
	      // Active Event
	      $(this).trigger("action");
	    }
	    e.preventDefault();
	  };

	  var button_over = function() {
	    $(this).addClass(active_cls);
	  };

	  var button_out = function() {
	    $(this)
	      .removeClass(active_cls)
	      .removeClass(pressed_cls);

	    clearTimeout(button_interval_timeout);
	  };

	  $("." + cls)
	    .append($('<div class="button_inner" />'));

	  $(document).on({
	    "mousedown": button_down,
	    "mouseup": button_up,
	    "mouseover": button_over,
	    "mouseout": button_out,

	    "touchstart": button_down,
	    "touchend": button_up,
	    "touchcancel": button_up,

	    "touchmove": function(event) {
	      var x = event.originalEvent.targetTouches[0].pageX,
	        y = event.originalEvent.targetTouches[0].pageY;

	      var offset = $(this).offset(),
	        left = offset.left,
	        top = offset.top,
	        right = left + $(this).outerWidth(),
	        bottom = top + $(this).outerHeight();

	      // console.log("left: " + left + ", x: " + x + ", right: " + right + ", top: " + top +  ", y: " + y + ", bottom: " + bottom);
	      if (x < left || x > right || y < top || y > bottom) {
	        // Out of button
	        $(this).removeClass(pressed_cls);
	        clearTimeout(button_interval_timeout);
	        event.preventDefault();
	        return false;
	      }
	    },

	    "action": function(e) {
	      if ($(this).attr("dialog")) {
	        exports$2.show($(this).attr("dialog"));
	        e.preventDefault();

	      } else if ($(this).attr("action")) {
	        var action = $(this).attr("action");
	        $(document).trigger(action);
	        e.preventDefault();

	      } else {
	        document.location = $(this).attr("href");
	      }
	    }

	  }, "." + cls);
	};

	var active_class = 'active';

	function initToggle(element) {
	  element.each(function() {

	    var toggle = $(this),
	      options = $("button", this);

	    var click_fn = function(e) {
	      var target = $(this);

	      // toggle styles
	      options.removeClass(active_class);
	      target.addClass(active_class);
	    };

	    toggle.on({
	      'click': click_fn,
	      'touchstart': click_fn
	    }, 'button');

	    toggle.on({
	      'confirm': function() {
	        var active = $('.' + active_class, toggle),
	          value = active.data('value');

	        // set value
	        toggle.data('value', value);
	      },
	      'reset': function() {
	        var value = toggle.data('value');

	        options.each(function() {
	          if ($(this).data('value') == value) {
	            $(this).addClass(active_class);
	          } else {
	            $(this).removeClass(active_class);
	          }
	        });
	      }
	    });
	  });
	}

	// 3rd Party Libraries

	const APP_VERSION = '2.2';

	const layouts = {
	  timeAMPM: layout$2,
	  timeAMPMsec: layout$1,
	  countdown: layout$3,
	};

	var layout,
	  active_page = '',
	  active_font,
	  appCache = window.applicationCache,
	  // App configuration
	  App = {
	    page: {
	      clock: "clock",
	      countdown: "countdown"
	    }
	  };

	exports$4.ready().then(() => {
	  active_font = exports$4.getFont();
	});

	function boot() {
	  initCountdown();

	  $(document).on({
	    "hide_dialog": exports$2.hide,
	    "save_settings": function() {
	      var options_dialog = exports$2.get('options');
	      exports$2.hide();

	      // lock in changes
	      $(".toggle", options_dialog).each(function(i) {
	        var toggle = $(this);
	        toggle.trigger('confirm');

	        // write to settings
	        var binding = toggle.data('binding'),
	          value = toggle.data('value');

	        exports$4.set(binding, value);
	      });

	      // reset UI if clock is visible
	      if (active_page === App.page.clock) {
	        stopClock();
	        initClock();
	        resize();
	      }

	      updateFont();
	    },
	    "hide_settings": function() {
	      var options_dialog = exports$2.get('options');
	      exports$2.hide();

	      // reset settings
	      $(".toggle", options_dialog).trigger('reset');
	    },
	    "fullscreen": function() {
	      if (exports$6.isFullscreen()) {
	        exports$6.restore();
	      } else {
	        exports$6.fullscreen();
	      }
	    }
	  });

	  $(window).resize(resize);

	  function hashchange() {
	    var splitHash = [],
	      section = '',
	      data = '';

	    var hash = location.hash;

	    if (hash.indexOf("#") >= 0) {
	      hash = hash.replace("#!", "");
	      hash = hash.replace("#", "");
	      splitHash = hash.split("/");
	      section = splitHash[1];
	      data = splitHash[2];
	    }

	    switch (section) {
	      // Handle countdown clocks
	      case "c":
	      case "countdown":
	        stopClock();
	        active_page = App.page.countdown;
	        var params = parseTimeOutOfParams(data);

	        layout = loadCountdown(params);
	        break;

	      // Default to clock mode
	      default:
	        if (active_page === App.page.clock) break;
	        stopClock();
	        active_page = App.page.clock;
	        initClock();
	    }

	    // hide and reposition the clock.
	    resize(false);

	    // resize again, and show after some delay for the UI
	    // to update...
	    setTimeout(function resizeFix() {
	      resize(true);
	    }, 50);
	  }

	  // Routing
	  $(window).on('hashchange', hashchange);

	  let init = false;
	  let updating = false;
	  let spinner;

	  function startSpinner() {
	    // show loader
	    const opts = {
	      lines: 15, // The number of lines to draw
	      length: 13, // The length of each line
	      width: 2, // The line thickness
	      radius: 15, // The radius of the inner circle
	      corners: 0.6, // Corner roundness (0..1)
	      rotate: 0, // The rotation offset
	      color: '#eee', // #rgb or #rrggbb
	      speed: 0.7, // Rounds per second
	      trail: 60, // Afterglow percentage
	      shadow: false, // Whether to render a shadow
	      hwaccel: false, // Whether to use hardware acceleration
	      className: 'spinner', // The CSS class to assign to the spinner
	      zIndex: 2e9, // The z-index (defaults to 2000000000)
	      top: 'auto', // Top position relative to parent in px
	      left: 'auto' // Left position relative to parent in px
	    };

	    $(() => {
	      var el = $('body').get(0);
	      spinner = new Spinner(opts).spin(el);
	    });
	  }

	  function stopSpinner() {
	    spinner && spinner.stop();
	  }

	  function documentReady() {
	    // only run once
	    if (init) return;
	    init = true;

	    stopSpinner();
	    updateFont();

	    // Setup dialogs
	    exports$2.create({
	      id: "about",
	      title: "About",
	      template: "templates/about.twig",
	      container: $("#body"),
	      data: {
	        thisYear: new Date().getFullYear(),
	        version: APP_VERSION,
	      },
	    }).create({
	      id: "countdown",
	      title: "Countdown",
	      template: "templates/countdown.twig",
	      container: $("#body")
	    }).create({
	      id: "options",
	      title: "Options",
	      template: "templates/options.twig",
	      container: $("#body"),
	      data: exports$4.data()
	    }, (content) => {
	      initToggle($(".toggle", content));
	    }).complete(() => {
	      $(".dialog_container").bind("touchend mouseup", (e) => {
	        if (e.target.className.indexOf("dialog_container") > -1) {
	          exports$2.hide();
	        }
	      });
	    });

	    // Prevent clicks on the toolback from propigating to the container and
	    // closing the toolbar.
	    $("#toolbar").on("click", (e) => {
	      e.preventDefault();
	      return false;
	    });

	    // Open the toolbar on init if it was previously open.
	    if (exports$4.get('toolbar') === 'true') {
	      document.body.classList.add("toolbar_active");
	    }

	    function toggle_toolbar(e) {
	      if (e.returnValue === false) return false;
	      const isActive = document.body.classList.toggle("toolbar_active");
	      exports$4.set('toolbar', isActive ? 'true' : 'false');
	      e.preventDefault();
	    }

	    $("#container, #toolbarContainer").bind({
	      click: toggle_toolbar,
	      touchstart: toggle_toolbar
	    });
	    $("#container").addClass("blink_transition");
	    exports$1.init();

	    hashchange();
	  }

	  if (appCache) {
	    $(startSpinner);

	    $(appCache).bind({
	      "downloading": function(e) {
	        updating = true;
	      },
	      "updateready": function(e) {
	        // reload for newest version of site
	        appCache.swapCache();
	        window.location.reload();
	      },
	      "error noupdate cached": function(e) {
	        $(documentReady);
	      },
	    });

	    // In order to hande the user disallowing use of the appCache in FF,
	    //
	    setTimeout(function lateInit() {
	      if (!updating)
	        $(documentReady);
	    }, 500);
	  } else {
	    $(documentReady);
	  }
	}
	function center(element) {
	  var element_width = element.outerWidth(),
	    element_height = element.outerHeight(),
	    window_width = $("body").width(),
	    window_height = $("body").height();

	  if (element_height < window_height) {
	    element.css("top", ((window_height - element_height) / 2) + 'px');
	  }
	  if (element_width < window_width) {
	    element.css("left", ((window_width - element_width) / 2) + 'px');
	  }
	}

	function resize(e) {
	  if (e === false) {
	    $(".time_box, .countdown_box").hide();
	  } else {
	    $(".time_box, .countdown_box").show();

	    $(".time_box").get(0) && center($(".time_box"));
	    $(".countdown_box").get(0) && center($(".countdown_box"));
	  }
	}

	function stopClock() {
	  // Clear any existing clock/timer
	  $("#container").empty();
	  if (layout) {
	    layout.stop(false);
	    layout.unload();
	  }
	}

	function initClock() {
	  var params = {
	    container: $("#container"),
	    start: true
	  },
	    format = exports$4.getShowSeconds() ?
	      layouts.timeAMPMsec :
	      layouts.timeAMPM;

	  layout = loadFlipclock(format, params);
	}

	function updateFont() {
	  $(body).removeClass("font_" + active_font);
	  active_font = exports$4.getFont();
	  $(body).addClass("font_" + active_font);
	}

	// Prevent scrolling on Android / iOS devices
	document.ontouchmove = function(e) {e.preventDefault();};
	document.ontouchstart = function(e) {e.preventDefault();};

	exports$4.ready().then(() => boot());

})();

//# sourceMappingURL=package.js.map
