#!/usr/bin/env bash


. ./init-env.sh

docker-compose up -d


#docker run \
#  --name docker-dev-mapi-db \
#  --add-host=database:172.17.0.1 \
#  -e POSTGRES_DB=mapi_db_dev \
#  -e POSTGRES_USER="$DB_USERNAME" \
#  -e POSTGRES_PASSWORD="$DB_PASSWORD" \
#  -e "DB_HOST=$DB_HOST" \
#  -e "DB_PORT=$DB_PORT" \
#  -p 5432:5432 \
#  -d timescale/timescaledb:2.2.0-pg13

sleep 5

PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -a -f '../src/db/sql/v01_deploy_bdo.sql'
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -c "\copy bdo.item(id, name) FROM 'seed/bdo_item_table.csv' CSV;"
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -c "\copy bdo.market_category(id, name) FROM 'seed/bdo_market_category_table.csv' CSV;"

IMPFILES=("../../MAPI_DEV_DB_DATA/v1/subListData8/*.csv")
for i in ${IMPFILES[@]}
    do

      CSV=$(realpath "$i")
      if [[ "$i" == *"market_items_table"* ]];then
          PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h "$DB_HOST" -d "mapi_db_dev" -c "\copy bdo.market_items_ts(observed_time, item_id, region_id, enhancement_range_min, base_price, current_stock, total_trades, last_sale_time, last_sale_price)  FROM '$CSV' DELIMITER '|' CSV;"
      fi
      if [[ "$i" == *"market_orders_table"* ]];then
          PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h "$DB_HOST" -d "mapi_db_dev" -c "\copy bdo.market_orders_ts(observed_time, item_id, region_id, enhancement_range_min, is_bid, price, size)  FROM '$CSV' DELIMITER '|' CSV;"
      fi
    done

