up:
	docker compose up -d

bash:
	docker compose exec app bash

ps:
	docker compose ps

down:
	docker compose down

dev:
	docker compose exec app bash -c 'yarn dev'

destroy:
	docker-compose down --rmi all --volumes --remove-orphans