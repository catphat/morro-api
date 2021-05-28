BEGIN;

CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

CREATE SCHEMA bdo;

CREATE TABLE bdo.item
(
    id   INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE bdo.market_category
(
    id   SMALLINT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE bdo.region
(
    id          SMALLINT PRIMARY KEY,
    region_code TEXT NOT NULL UNIQUE
);

CREATE TABLE bdo.regional_market_item (
    id SERIAL PRIMARY KEY,
    region_id SMALLINT references bdo.region(id),
    category_id SMALLINT references bdo.market_category(id),
    item_id INTEGER references bdo.item(id),
    enhancement_level SMALLINT NOT NULL,
    unique (region_id, category_id, item_id, enhancement_level)
);

CREATE TABLE bdo.market_item_summary_ts
(
    time     TIMESTAMP WITH TIME ZONE                     NOT NULL,
    market_item_id INTEGER references bdo.regional_market_item(id),

    PRIMARY KEY (time, market_item_id),

    base_price         BIGINT                                       NOT NULL,
    current_stock      INTEGER                                      NOT NULL,
    total_trades       BIGINT                                       NOT NULL,
    last_sale_time     TIMESTAMP WITH TIME ZONE                     NULL,
    last_sale_price    BIGINT                                       NULL
);


CREATE TABLE bdo.order_book_snapshot_ts
(
    time          TIMESTAMP WITH TIME ZONE                     NOT NULL,
    market_item_id INTEGER references bdo.regional_market_item(id),

    PRIMARY KEY (time, market_item_id),

    bid_price_1             BIGINT                                       NULL,
    bid_price_2             BIGINT                                       NULL,
    bid_price_3             BIGINT                                       NULL,
    bid_price_4             BIGINT                                       NULL,
    bid_price_5             BIGINT                                       NULL,
    bid_price_6             BIGINT                                       NULL,
    bid_price_7             BIGINT                                       NULL,
    bid_price_8             BIGINT                                       NULL,
    bid_price_9             BIGINT                                       NULL,
    bid_price_10            BIGINT                                       NULL,

    bid_size_1              BIGINT                                       NULL,
    bid_size_2              BIGINT                                       NULL,
    bid_size_3              BIGINT                                       NULL,
    bid_size_4              BIGINT                                       NULL,
    bid_size_5              BIGINT                                       NULL,
    bid_size_6              BIGINT                                       NULL,
    bid_size_7              BIGINT                                       NULL,
    bid_size_8              BIGINT                                       NULL,
    bid_size_9              BIGINT                                       NULL,
    bid_size_10             BIGINT                                       NULL,

    ask_price_1             BIGINT                                       NULL,
    ask_price_2             BIGINT                                       NULL,
    ask_price_3             BIGINT                                       NULL,
    ask_price_4             BIGINT                                       NULL,
    ask_price_5             BIGINT                                       NULL,
    ask_price_6             BIGINT                                       NULL,
    ask_price_7             BIGINT                                       NULL,
    ask_price_8             BIGINT                                       NULL,
    ask_price_9             BIGINT                                       NULL,
    ask_price_10            BIGINT                                       NULL,

    ask_size_1              BIGINT                                       NULL,
    ask_size_2              BIGINT                                       NULL,
    ask_size_3              BIGINT                                       NULL,
    ask_size_4              BIGINT                                       NULL,
    ask_size_5              BIGINT                                       NULL,
    ask_size_6              BIGINT                                       NULL,
    ask_size_7              BIGINT                                       NULL,
    ask_size_8              BIGINT                                       NULL,
    ask_size_9              BIGINT                                       NULL,
    ask_size_10             BIGINT                                       NULL,

    spread                  BIGINT                                       NULL,
    mid_price               BIGINT                                       NULL,
    total_bid_quote_size_10 BIGINT                                       NOT NULL,
    total_ask_quote_size_10 BIGINT                                       NOT NULL
);

SELECT create_hypertable('bdo.market_item_summary_ts', 'time');
SELECT create_hypertable('bdo.order_book_snapshot_ts', 'time');

--ALTER TABLE bdo.market_item_summary_ts
--    SET (timescaledb.compress,
--         timescaledb.compress_segmentby = 'market_item_id');

COMMIT;
