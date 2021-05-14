BEGIN;

CREATE EXTENSION IF NOT EXISTS timescaledb;

CREATE SCHEMA bdo;

CREATE TABLE bdo.item
(
    id   INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE bdo.market_category
(
    id   INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE bdo.region
(
    id          SERIAL PRIMARY KEY,
    region_name TEXT NOT NULL UNIQUE
);

CREATE TABLE bdo.market_region_item
(
    id                 SERIAL PRIMARY KEY,
    item_id            INTEGER REFERENCES bdo.item (id)            NOT NULL,
    region_id          INTEGER REFERENCES bdo.region (id)          NOT NULL,
    market_category_id INTEGER REFERENCES bdo.market_category (id) NOT NULL
);

/* https://www.kaiko.com/pages/cryptocurrency-data-types#orderbooks */
CREATE TABLE bdo.market_item_summary_ts
(
    poll_timestamp        TIMESTAMP WITH TIME ZONE  NOT NULL,
    item_id               INTEGER                   NOT NULL,
    region_id             SMALLINT                  NOT NULL,
    enhancement_range_min SMALLINT                  NOT NULL,

    PRIMARY KEY (poll_timestamp, item_id, region_id, enhancement_range_min),

    base_price            BIGINT                   NOT NULL,
    current_stock         INTEGER                  NOT NULL,
    total_trades          BIGINT                   NOT NULL,
    last_sale_time        TIMESTAMP WITH TIME ZONE NULL,
    last_sale_price       BIGINT                   NULL
);

CREATE TABLE bdo.order_book_snapshot_ts (
    poll_timestamp        TIMESTAMP WITH TIME ZONE  NOT NULL,
    item_id               INTEGER                   NOT NULL,
    region_id             SMALLINT                  NOT NULL,
    enhancement_range_min SMALLINT                  NOT NULL,
    PRIMARY KEY (poll_timestamp, item_id, region_id, enhancement_range_min),

    bid_price_1      INTEGER NULL,
    bid_price_2      INTEGER NULL,
    bid_price_3      INTEGER NULL,
    bid_price_4      INTEGER NULL,
    bid_price_5      INTEGER NULL,
    bid_price_6      INTEGER NULL,
    bid_price_7      INTEGER NULL,
    bid_price_8      INTEGER NULL,
    bid_price_9      INTEGER NULL,
    bid_price_10     INTEGER NULL,

    bid_size_1       INTEGER NULL,
    bid_size_2       INTEGER NULL,
    bid_size_3       INTEGER NULL,
    bid_size_4       INTEGER NULL,
    bid_size_5       INTEGER NULL,
    bid_size_6       INTEGER NULL,
    bid_size_7       INTEGER NULL,
    bid_size_8       INTEGER NULL,
    bid_size_9       INTEGER NULL,
    bid_size_10      INTEGER NULL,

    ask_price_1      INTEGER NULL,
    ask_price_2      INTEGER NULL,
    ask_price_3      INTEGER NULL,
    ask_price_4      INTEGER NULL,
    ask_price_5      INTEGER NULL,
    ask_price_6      INTEGER NULL,
    ask_price_7      INTEGER NULL,
    ask_price_8      INTEGER NULL,
    ask_price_9      INTEGER NULL,
    ask_price_10     INTEGER NULL,

    ask_size_1       INTEGER NULL,
    ask_size_2       INTEGER NULL,
    ask_size_3       INTEGER NULL,
    ask_size_4       INTEGER NULL,
    ask_size_5       INTEGER NULL,
    ask_size_6       INTEGER NULL,
    ask_size_7       INTEGER NULL,
    ask_size_8       INTEGER NULL,
    ask_size_9       INTEGER NULL,
    ask_size_10      INTEGER NULL,

    spread                  INTEGER NULL,
    mid_price               INTEGER NULL,
    total_bid_quote_size    INTEGER NULL,
    total_ask_quote_size    INTEGER NULL

);

SELECT create_hypertable('bdo.market_item_summary_ts', 'poll_timestamp');
SELECT create_hypertable('bdo.order_book_snapshot_ts', 'poll_timestamp');


COMMIT;
