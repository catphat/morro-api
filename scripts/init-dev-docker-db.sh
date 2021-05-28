#!/usr/bin/env bash


. ../.env

docker-compose up -d

docker run \
  --name docker-dev-mapi-db \
  --add-host=database:172.17.0.1 \
  -e POSTGRES_DB=mapi_db_dev \
  -e POSTGRES_USER="$DB_USERNAME" \
  -e POSTGRES_PASSWORD="$DB_PASSWORD" \
  -e "DB_HOST=$DB_HOST" \
  -e "DB_PORT=$DB_PORT" \
  -p 5432:5432 \
  -d timescale/timescaledb:2.2.0-pg13
