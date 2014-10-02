def: greentext.js
	uglifyjs --output greentext.min.js greentext.js
	cat greentext.meta.js greentext.min.js > greentext.userscript.js
