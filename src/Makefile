def: greentext.js
	uglifyjs --output tmp.js greentext.js

	cat meta.js tmp.js > ../greentext.user.js
	cp meta.js ../greentext.meta.js

	rm tmp.js
