#!/usr/bin/env bash

docker run --name docker-mapi-db -e POSTGRES_PASSWORD=abc123 -e POSTGRES_DB=mapi-db -p 5432:5432 -d postgres