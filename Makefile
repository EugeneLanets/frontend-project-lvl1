install: # установка зависимостей npm	
	npm ci

brain-games: # запуск проекта
	node bin/brain-games.js

publish: 
	npm publish --dry-run