def: build clean

debug: greentext.js
	cat meta.js greentext.js > ../greentext.user.js

ugly.js: greentext.js
	uglifyjs --output ugly.js greentext.js

bump:
	./bump.sh

build: bump ugly.js
	cat meta.js ugly.js > ../greentext.user.js
	cp meta.js ../greentext.meta.js

clean:
	rm ugly.js
