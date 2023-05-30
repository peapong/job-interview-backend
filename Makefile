build:
	cd core_app && yarn install && yarn build && cd ..
	docker-compose -f docker-compose.yml down
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down