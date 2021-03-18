#!/usr/bin/env bash

docker run --name mapi-db -e POSTGRES_PASSWORD=abc123 -p 5432:5432 -d postgres