var gt = function (s) {
  if (!s) return;
  var fc = s.firstChild;
  if (!fc) return;
  var text = fc.nodeValue;
  if (!text) return;
  if (text.substr(0,1) != '>') return;
  s.style.color = "#789922";
};
var gte = function() {
  var es = document.getElementsByTagName("*").not("input");
  for (var i = es.length; i--;) {
      gt(es[i]);
  }
};
setInterval(gte, 200);
