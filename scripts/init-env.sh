#!/usr/bin/env bash

export $(cat ../.env | xargs)

#case "$NODE_ENV" in
# "PROD") PGUSER="$DB_USERNAME" ;;
# "DEV")  PGUSER="$DB_DEV_USERNAME" ;;
# "TEST") PGUSER="$DB_TEST_USERNAME" ;;
# *)      PGUSER="$DB_DEV_USERNAME" ;;
#esac
