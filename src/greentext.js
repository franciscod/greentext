var gt = function (s) {
  if (!s) return;

  var fc = s.firstChild; if (!fc) return;
  var text = fc.nodeValue; if (!text) return;

  if (text.substr(0,1) != '>')
    s.style.color = "";
  else
    s.style.color = "#789922";
};

var gte = function() {
  $("*").each(function(i) {
      gt(this);
  });
};

setInterval(gte, 200);
