install:
	npm install

starteven:
	npx babel-node src/bin/brain-even.js

startcalk:
	npx babel-node src/bin/brain-calk.js

startgcd:
	npx babel-node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint 	src/
