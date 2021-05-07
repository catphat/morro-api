#!/usr/bin/env bash

. ./init-env.sh
docker run --name docker-dev-mapi-db \
  -e POSTGRES_DB=mapi_db_dev \
  -e POSTGRES_USER="$DB_USERNAME" \
  -e POSTGRES_PASSWORD="$DB_PASSWORD" \
  -p 5432:5432 -d timescale/timescaledb:2.2.0-pg13
