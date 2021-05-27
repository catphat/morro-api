#!/usr/bin/env bash

. ../.env
ssh -L 9090:localhost:5432 "$MAPI_DB_USER"@"$MAPI_DB_HOST"
