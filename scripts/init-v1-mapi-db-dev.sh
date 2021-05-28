#!/usr/bin/env bash


. ../.env

PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -a -f '../src/db/sql/v01_deploy_bdo.sql'
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -a -f '../src/db/sql/v01_seed_bdo.sql'
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -c "\copy bdo.item(id, name) FROM 'seed/bdo_item_table.csv' CSV;"
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -c "\copy bdo.region(id, region_code) FROM 'seed/bdo_region_table.csv' CSV;"
PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h $DB_HOST -d "mapi_db_dev" -c "\copy bdo.market_category(id, name) FROM 'seed/bdo_market_category_table.csv' CSV;"

IMPFILES=("$DB_SEED_DIR/*.csv")
for i in ${IMPFILES[@]};
do
      CSV=$(realpath "$i")
      echo "${CSV}"
      if [[ "$i" == *"-items.csv" ]];then
          PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h "$DB_HOST" -d "mapi_db_dev" -c "\copy tmp_csv_items FROM '$CSV' DELIMITER '|' CSV HEADER NULL 'NULL';"
      fi
 if [[ "$i" == *"-orders.csv" ]];then
          PGPASSWORD="$DB_PASSWORD" psql -U "$DB_USERNAME" -h "$DB_HOST" -d "mapi_db_dev" -c "\copy tmp_csv_orders FROM '$CSV' DELIMITER '|' CSV HEADER NULL 'NULL';"
      fi
done

