#!/usr/bin/env bash

docker run --name docker-dev-mapi-db \
  -e POSTGRES_USER=devdbuser01 \
  -e POSTGRES_PASSWORD=abc123 \
  -e POSTGRES_DB=mapi_db_dev \
  -p 5432:5432 -d postgres
