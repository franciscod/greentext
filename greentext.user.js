// ==UserScript==
// @name        greentext
// @namespace   greentext
// @description >greentext.js
// @include     *
// @version     3
// @grant       none
// @downloadURL https://raw.githubusercontent.com/franciscod/greentext/master/greentext.user.js
// @updateURL   https://raw.githubusercontent.com/franciscod/greentext/master/greentext.meta.js
// ==/UserScript==
var gt=function(s){if(!s)return;var fc=s.firstChild;if(!fc)return;var text=fc.nodeValue;if(!text)return;if(text.substr(0,1)!=">")return;s.style.color="#789922"};var gte=function(){var es=document.getElementsByTagName("*");for(var i=es.length;i--;){gt(es[i])}};setInterval(gte,200);