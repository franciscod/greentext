var gt = function (s) {
  if (!s) return;
  var fc = s.firstChild;
  if (!fc) return;
  var text = fc.nodeValue;
  if (!text) return;
  if (text.substr(0,1) != '>') return;
  s.style.color = "#789922";
};

var gtt = function (t) {
  var es = document.getElementsByTagName(t);
  for (i in es) {
    gt(es[i]);
  }
};

gtt('div');
gtt('span');
