def: greentext.js
	uglifyjs --output tmp.js zepto.min.js greentext.js

	cat greentext.meta.js tmp.js > ../greentext.user.js
	cp greentext.meta.js ../greentext.meta.js
	
	rm tmp.js
