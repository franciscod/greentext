function applyGreentext(i, s) {
  Zepto(s).wrap('<mark class="greentexted" style="background-color: inherit; color: #789922;"></div>')
};

function isTextNode() { return this.nodeType === 3; };
function greentextChild() { return Zepto(this).parent().is('mark.greentexted'); };
function isGreentext() { return Zepto(this).text().trim().substr(0,1) === '>'; };

function greentextTextNodes() {
  Zepto('*').contents().filter(isTextNode).not(greentextChild).filter(isGreentext).map(applyGreentext);
}

greentextTextNodes();
