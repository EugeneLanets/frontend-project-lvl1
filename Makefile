install: # установка зависимостей npm
	npm ci

brain-games: # запуск проекта
	node bin/brain-games.js

publish:
	npm run publ

lint:
	npx eslint .
