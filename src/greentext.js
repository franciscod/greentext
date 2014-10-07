var gt = function (s) {
  if (!s) return;

  var fc = s.firstChild; if (!fc) return;
  var text = fc.nodeValue; if (!text) return;

  var gtd = Zepto(s).data('greentext-d');
  var isgt = text.substr(0,1) == '>';

  if (!gtd && isgt) {
    Zepto(s).data('greentext-precolor', s.style.color);
    Zepto(s).data('greentext-d', true);
    s.style.color = "#789922";
    return;
  }

  if (gtd && !isgt) {
    s.style.color = Zepto(s).data('greentext-precolor');
    Zepto(s).data('greentext-d', false);
    return;
  }

};

var gte = function() {
  Zepto("*").each(function(i) {
      gt(this);
  });
};

setInterval(gte, 200);
