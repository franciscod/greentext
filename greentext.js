var gt = function (s) {if (!s) return; var fc = s.firstChild; if (!fc) return; var text = fc.nodeValue; if (!text) return; if (text.substr(0,1) != '>') return; s.style.color = "#789922";}

for (k in document.getElementsByTagName('span')) { gt(ss[k]); } for (k in document.getElementsByTagName('div')) { gt(ss[k]); }
