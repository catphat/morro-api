-- Deploy morro-api:bdo_item_data to pg

BEGIN;
INSERT INTO bdo.item(id, name)
SELECT i.item_id, '__MISSING NAME__'
FROM (SELECT item_id
      FROM tmp_csv_items
      WHERE NOT EXISTS(SELECT bdo.item.id FROM bdo.item WHERE tmp_csv_items.item_id = bdo.item.id)
      GROUP BY item_id) i;


INSERT INTO bdo.market_item_summary_ts (poll_timestamp, region_fk, market_category_fk, item_fk, enhancement_level,
                                        base_price, current_stock, total_trades, last_sale_time, last_sale_price)
SELECT poll_timestamp,
       (SELECT id from bdo.region WHERE region_code = tmp_csv_items.region_code),
       category_id,
       item_id,
       enhancement_level_min,
       base_price,
       current_stock,
       total_trades,
       last_sale_timestamp,
       last_sale_price
FROM tmp_csv_items;



INSERT INTO bdo.order_book_snapshot_ts (poll_timestamp, region_fk, market_category_fk, item_fk, enhancement_level,
                                        bid_price_1, bid_price_2, bid_price_3, bid_price_4, bid_price_5, bid_price_6,
                                        bid_price_7, bid_price_8, bid_price_9, bid_price_10, bid_size_1, bid_size_2,
                                        bid_size_3, bid_size_4, bid_size_5, bid_size_6, bid_size_7, bid_size_8,
                                        bid_size_9, bid_size_10, ask_price_1, ask_price_2, ask_price_3, ask_price_4,
                                        ask_price_5, ask_price_6, ask_price_7, ask_price_8, ask_price_9, ask_price_10,
                                        ask_size_1, ask_size_2, ask_size_3, ask_size_4, ask_size_5, ask_size_6,
                                        ask_size_7, ask_size_8, ask_size_9, ask_size_10, spread, mid_price,
                                        total_bid_quote_size, total_ask_quote_size)
SELECT poll_timestamp,
       region_fk,
       category_fk,
       item_fk,
       enhancement_level_min,

       (SELECT bid_prices.b1 as bid_price_1),
       (SELECT bid_prices.b2 as bid_price_2),
       (SELECT bid_prices.b3 as bid_price_3),
       (SELECT bid_prices.b4 as bid_price_4),
       (SELECT bid_prices.b5 as bid_price_5),
       (SELECT bid_prices.b6 as bid_price_6),
       (SELECT bid_prices.b7 as bid_price_7),
       (SELECT bid_prices.b8 as bid_price_8),
       (SELECT bid_prices.b9 as bid_price_9),
       (SELECT bid_prices.b10 as bid_price_10),

       (SELECT bid_sizes.b1 as bid_size_1),
       (SELECT bid_sizes.b2 as bid_size_2),
       (SELECT bid_sizes.b3 as bid_size_3),
       (SELECT bid_sizes.b4 as bid_size_4),
       (SELECT bid_sizes.b5 as bid_size_5),
       (SELECT bid_sizes.b6 as bid_size_6),
       (SELECT bid_sizes.b7 as bid_size_7),
       (SELECT bid_sizes.b8 as bid_size_8),
       (SELECT bid_sizes.b9 as bid_size_9),
       (SELECT bid_sizes.b10 as bid_size_10),

       (SELECT ask_prices.a1 as ask_price_1),
       (SELECT ask_prices.a2 as ask_price_2),
       (SELECT ask_prices.a3 as ask_price_3),
       (SELECT ask_prices.a4 as ask_price_4),
       (SELECT ask_prices.a5 as ask_price_5),
       (SELECT ask_prices.a6 as ask_price_6),
       (SELECT ask_prices.a7 as ask_price_7),
       (SELECT ask_prices.a8 as ask_price_8),
       (SELECT ask_prices.a9 as ask_price_9),
       (SELECT ask_prices.a10 as ask_price_10),

       (SELECT ask_sizes.a1 as ask_size_1),
       (SELECT ask_sizes.a2 as ask_size_2),
       (SELECT ask_sizes.a3 as ask_size_3),
       (SELECT ask_sizes.a4 as ask_size_4),
       (SELECT ask_sizes.a5 as ask_size_5),
       (SELECT ask_sizes.a6 as ask_size_6),
       (SELECT ask_sizes.a7 as ask_size_7),
       (SELECT ask_sizes.a8 as ask_size_8),
       (SELECT ask_sizes.a9 as ask_size_9),
       (SELECT ask_sizes.a10 as ask_size_10),

       (SELECT s1.spread as spread),
       (SELECT ROUND(((SELECT s1.spread)::decimal / 2) + (bids -> 0 ->> 'price')::bigint, 0) as mid_price),
       (SELECT (
                       COALESCE(ask_sizes.a2, 0)
                       + COALESCE(ask_sizes.a2, 0)
                       + COALESCE(ask_sizes.a3, 0)
                       + COALESCE(ask_sizes.a4, 0)
                       + COALESCE(ask_sizes.a5, 0)
                       + COALESCE(ask_sizes.a6, 0)
                       + COALESCE(ask_sizes.a7, 0)
                       + COALESCE(ask_sizes.a8, 0)
                       + COALESCE(ask_sizes.a9, 0)
                       + COALESCE(ask_sizes.a10, 0)
                   )) as total_ask_quote_size_10,
       (SELECT (
                       COALESCE(bid_sizes.b2, 0)
                       + COALESCE(bid_sizes.b2, 0)
                       + COALESCE(bid_sizes.b3, 0)
                       + COALESCE(bid_sizes.b4, 0)
                       + COALESCE(bid_sizes.b5, 0)
                       + COALESCE(bid_sizes.b6, 0)
                       + COALESCE(bid_sizes.b7, 0)
                       + COALESCE(bid_sizes.b8, 0)
                       + COALESCE(bid_sizes.b9, 0)
                       + COALESCE(bid_sizes.b10, 0)
                   )) as total_bid_quote_size_10


FROM (
         SELECT poll_timestamp,
                (SELECT id from bdo.region WHERE region_code = tmp_csv_orders.region_code) as region_fk,
                category_id                                                                as category_fk,
                item_id                                                                    as item_fk,
                enhancement_level_min,

                (SELECT json_agg(json_build_object('price', price, 'size', amount, 'order_type', order_type)
                        ORDER BY price DESC) FILTER (WHERE order_type = 'b'))              as bids,

                (SELECT json_agg(json_build_object('price', price, 'size', amount, 'order_type', order_type)
                        ORDER BY price) FILTER (WHERE order_type = 'a'))                   as asks


         FROM tmp_csv_orders
         GROUP BY poll_timestamp, region_fk, category_id, item_id, enhancement_level_min
     ) as I,
     LATERAL (
         SELECT((I.asks -> 0 ->> 'price')::bigint - (I.bids -> 0 ->> 'price')::bigint)) as s1(spread),
     LATERAL (
         SELECT(I.bids -> 0 ->> 'price')::bigint,
               (I.bids -> 1 ->> 'price')::bigint,
               (I.bids -> 2 ->> 'price')::bigint,
               (I.bids -> 3 ->> 'price')::bigint,
               (I.bids -> 4 ->> 'price')::bigint,
               (I.bids -> 5 ->> 'price')::bigint,
               (I.bids -> 6 ->> 'price')::bigint,
               (I.bids -> 7 ->> 'price')::bigint,
               (I.bids -> 8 ->> 'price')::bigint,
               (I.bids -> 9 ->> 'price')::bigint
         ) as bid_prices(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10),
     LATERAL (
         SELECT(I.bids -> 0 ->> 'size')::bigint,
               (I.bids -> 1 ->> 'size')::bigint,
               (I.bids -> 2 ->> 'size')::bigint,
               (I.bids -> 3 ->> 'size')::bigint,
               (I.bids -> 4 ->> 'size')::bigint,
               (I.bids -> 5 ->> 'size')::bigint,
               (I.bids -> 6 ->> 'size')::bigint,
               (I.bids -> 7 ->> 'size')::bigint,
               (I.bids -> 8 ->> 'size')::bigint,
               (I.bids -> 9 ->> 'size')::bigint
         ) as bid_sizes(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10),
     LATERAL (
         SELECT(I.asks -> 0 ->> 'price')::bigint,
               (I.asks -> 1 ->> 'price')::bigint,
               (I.asks -> 2 ->> 'price')::bigint,
               (I.asks -> 3 ->> 'price')::bigint,
               (I.asks -> 4 ->> 'price')::bigint,
               (I.asks -> 5 ->> 'price')::bigint,
               (I.asks -> 6 ->> 'price')::bigint,
               (I.asks -> 7 ->> 'price')::bigint,
               (I.asks -> 8 ->> 'price')::bigint,
               (I.asks -> 9 ->> 'price')::bigint
         ) as ask_prices(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10),
     LATERAL (
         SELECT(I.asks -> 0 ->> 'size')::bigint,
               (I.asks -> 1 ->> 'size')::bigint,
               (I.asks -> 2 ->> 'size')::bigint,
               (I.asks -> 3 ->> 'size')::bigint,
               (I.asks -> 4 ->> 'size')::bigint,
               (I.asks -> 5 ->> 'size')::bigint,
               (I.asks -> 6 ->> 'size')::bigint,
               (I.asks -> 7 ->> 'size')::bigint,
               (I.asks -> 8 ->> 'size')::bigint,
               (I.asks -> 9 ->> 'size')::bigint
         ) as ask_sizes(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);



COMMIT;
