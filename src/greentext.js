var gt = function (s) {
  if (!s) return;

  var fc = s.firstChild; if (!fc) return;
  var text = fc.nodeValue; if (!text) return;

  if (text.substr(0,1) == '>') {
    $(s).data('greentext-precolor', s.style.color);
    $(s).data('greentext-d', true);
    s.style.color = "#789922";
    return;
  }

  if ($(s).data('greentext-d')) {
    s.style.color = $(s).data('greentext-precolor');
    $(s).data('greentext-precolor', null)
    $(s).data('greentext-d', false)
    return;
  }

};

var gte = function() {
  $("*").each(function(i) {
      gt(this);
  });
};

setInterval(gte, 200);
