####################################################### VARIABLE #######################################################
NAME		:=	anima-terra
SRCS_D		:=	srcs
COMPOSE_F	:=	$(SRCS_D)/docker-compose.yml
COMPOSE_DEV_F	:=	$(SRCS_D)/docker-compose.dev.yml
SERVICE		?=	#Leave blank
BACKUP_D	:=	backups

######################################################## FLAGS #########################################################
FLAGS		=	-f $(COMPOSE_F)
COMPOSE		=	docker compose
DSHELL		=	/bin/sh

######################################################## RULES #########################################################
.DEFAULT_GOAL = all

.PHONY: all
all			:	$(NAME)

$(NAME)		:
			$(COMPOSE) $(FLAGS) up --build $(SERVICE)

CMDS		:=	up build down ps ls images top
.PHONY: $(CMDS)
$(CMDS)		:
			$(COMPOSE) $(FLAGS) $@ $(SERVICE)

.PHONY: dev
dev			:
			$(COMPOSE) -f $(COMPOSE_DEV_F) up --build $(SERVICE)

.PHONY: migrations
migrations	:
			$(COMPOSE) -f $(COMPOSE_DEV_F) exec api python manage.py makemigrations

.PHONY: repair-db
repair-db	:
			$(COMPOSE) $(FLAGS) build api
			$(COMPOSE) $(FLAGS) stop api
			$(COMPOSE) $(FLAGS) up -d --wait api-db
			mkdir -p $(BACKUP_D)
			$(COMPOSE) $(FLAGS) exec -T api-db sh -c 'pg_dump -U "$$POSTGRES_USER" "$$POSTGRES_DB"' > $(BACKUP_D)/db-$$(date +%Y%m%d-%H%M%S).sql
			$(COMPOSE) $(FLAGS) run --rm --no-deps -e MIGRATION=false -e COLLECT_STATIC=false api python manage.py repair_migrations --apply
			$(COMPOSE) $(FLAGS) up -d api

.PHONY: detach
detach		:
			$(COMPOSE) $(FLAGS) up --$@ $(SERVICE)

.PHONY: logs
logs		:	build
			$(COMPOSE) $(FLAGS) $@ -f $(SERVICE)

.PHONY: exec
exec		:
			$(COMPOSE) $(FLAGS) $@ $(SERVICE) $(DSHELL)

.PHONY: clean
clean		:
			$(COMPOSE) $(FLAGS) down --rmi local --remove-orphans

PHONY: fclean
fclean		: dusting
			$(COMPOSE) $(FLAGS) down -v --rmi all --remove-orphans
			rm -rf $(DATA_DIR)

PHONY: vdusting
vdusting	: dusting
			find . -path "*/migrations/*.py" -not -name "__init__.py" -delete


.PHONY: dusting
dusting		:
			find . -path "*/__pycache__/*" -delete
			find . -path "*/__pycache__" -delete

.PHONY: prune
prune		:
			docker system prune -af

.PHONY: re
re			:	clean all

.PHONY: vre
vre			:	vdusting fclean all
