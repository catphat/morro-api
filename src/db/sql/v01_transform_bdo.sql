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



SELECT poll_timestamp, region_fk, category_id, item_id, enhancement_level_min,
       (bids -> 0 ->> 'price')  as bid_price_1,
       (bids -> 0 ->> 'size') as bid_size_1,

       (bids -> 1 ->> 'price')  as bid_price_2,
       (bids -> 1 ->> 'size') as bid_size_2,

       (bids -> 2 ->> 'price')  as bid_price_3,
       (bids -> 2 ->> 'size') as bid_size_3,

       (bids -> 3 ->> 'price')  as bid_price_4,
       (bids -> 3 ->> 'size') as bid_size_4,

       (bids -> 4 ->> 'price')  as bid_price_5,
       (bids -> 4 ->> 'size') as bid_size_5,



       (asks -> 0 ->> 'price')  as ask_price_1,
       (asks -> 0 ->> 'size') as ask_size_1,

       (asks -> 1 ->> 'price')  as ask_price_2,
       (asks -> 1 ->> 'size') as ask_size_2,

       (asks -> 2 ->> 'price')  as ask_price_3,
       (asks -> 2 ->> 'size') as ask_size_3,

       (asks -> 3 ->> 'price')  as ask_price_4,
       (asks -> 3 ->> 'size') as ask_size_4,

       (asks -> 4 ->> 'price')  as ask_price_5,
       (asks -> 4 ->> 'size') as ask_size_5,




FROM (
         SELECT poll_timestamp,
                (SELECT id from bdo.region WHERE region_code = tmp_csv_orders.region_code) as region_fk,
                category_id,
                item_id,
                enhancement_level_min,

                (SELECT json_agg(json_build_object('price', price, 'size', amount, 'order_type', order_type)
                        ORDER BY price DESC) FILTER (WHERE order_type = 'b'))              as bids,

                (SELECT json_agg(json_build_object('price', price, 'size', amount, 'order_type', order_type)
                        ORDER BY price) FILTER (WHERE order_type = 'a'))                   as asks
         FROM tmp_csv_orders
         GROUP BY poll_timestamp, region_fk, category_id, item_id, enhancement_level_min
         LIMIT 100) as I;



COMMIT;
