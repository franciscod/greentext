def: greentext.js
	uglifyjs --output tmp.js greentext.js
	cat ../greentext.meta.js tmp.js > ../greentext.user.js
	rm tmp.js
