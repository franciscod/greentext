// ==UserScript==
// @name        greentext
// @namespace   greentext
// @description >greentext.js
// @include     *
// @version     7
// @grant       none
// @require     https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js
// @downloadURL https://raw.githubusercontent.com/franciscod/greentext/master/greentext.user.js
// @updateURL   https://raw.githubusercontent.com/franciscod/greentext/master/greentext.meta.js
// ==/UserScript==
var gt=function(s){if(!s)return;var fc=s.firstChild;if(!fc)return;var text=fc.nodeValue;if(!text)return;if(text.substr(0,1)!=">")return;s.style.color="#789922"};var gte=function(){var es=$("*").not("input");for(var i=es.length;i--;){gt(es[i])}};setInterval(gte,200);