#!/usr/bin/env bash

# Request
# keyType       - REQUIRED
# mainCategory  - REQUIRED
# subCategory   - OPTIONAL

MAIN_CATEGORY_KEY=$1
SUB_CATEGORY_KEY=$2
KEY_TYPE=$3

if [[ -z "$MAIN_CATEGORY_KEY" || -z "$SUB_CATEGORY_KEY" || -z "$KEY_TYPE" ]]; then
  echo "usage: $0 <main-category-key> <sub-category-key> <key-type>"
  exit 1
fi


curl "https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketList" \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: BlackDesert' \
  --socks5 "127.0.0.1:7770" \
  -X POST \
  -d "{
  'keyType': $KEY_TYPE,
  'mainCategory': $MAIN_CATEGORY_KEY,
  'subCategory': $SUB_CATEGORY_KEY
}"

# Response
#   0 - ItemID
#   1 - Current Stock
#   2 - Total Trades
#   3 - Base Price
# {
#   "resultCode":0,
#   "resultMsg":"10003-3-57259-16300|10005-27-608241-46600|10006-2-113975-292000|10007-4-313985-97500|10009-28-102753-3830000|10010-29-39737-128000000|10012-5-580551-62000|10013-2-696756-43200|10014-24-1080473-102000|10056-15-729314-34900|10057-38-2632191-43900|10071-0-46278-13000|10072-0-54183-18900|10086-5-3592-124000000|715001-8-3277-630000000|"
# }


