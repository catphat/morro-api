-- Deploy morro-api:bdo_item_data to pg

BEGIN;

CREATE TABLE tmp_csv_orders
(
    poll_timestamp        TIMESTAMP WITH TIME ZONE NOT NULL,
    region_code           text                     NOT NULL,
    category_id           SMALLINT                 NOT NULL,
    item_id               INTEGER                  NOT NULL,
    enhancement_level_min SMALLINT                 NOT NULL,
    order_type            TEXT                     NOT NULL,
    price                 BIGINT                   NOT NULL,
    amount                BIGINT                   NOT NULL
);

CREATE TABLE tmp_csv_items
(
    poll_timestamp        TIMESTAMP WITH TIME ZONE NOT NULL,
    region_code           text                     NOT NULL,
    category_id           SMALLINT                 NOT NULL,
    item_id               INTEGER                  NOT NULL,
    enhancement_level_min SMALLINT                 NOT NULL,

    base_price            BIGINT                   NOT NULL,
    current_stock         BIGINT                   NOT NULL,
    total_trades          BIGINT                   NOT NULL,
    last_sale_timestamp   TIMESTAMP WITH TIME ZONE,
    last_sale_price       BIGINT
);


COMMIT;
