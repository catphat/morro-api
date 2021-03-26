#!/usr/bin/env bash

# Request
# keyType - REQUIRED
# mainKey - REQUIRED

MAIN_KEY=$1
KEY_TYPE=$2

if [[ -z "$MAIN_KEY" || -z "$KEY_TYPE" ]]; then
  echo "usage: $0 <main-key> <key-type>"
  exit 1
fi


curl "https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSubList" \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: BlackDesert' \
  --socks5 "127.0.0.1:7770" \
  -X POST \
  -d "{
  'keyType': $KEY_TYPE,
  'mainKey': $MAIN_KEY
}"

# Response
#   0 - Item ID
#   1 - Enhancement range - min
#   2 - Enhancement range - max
#   3 - Base price
#   4 - Current stock
#   5 - Total trades
#   6 - Price hard cap - min
#   7 - Price hard cap - max
#   8 - Last sale price
#   9 - Last sale time
# {
#   "resultCode":0,
#   "resultMsg": "5952-0-0-6600-458325-8667917-6600-92500-6600-1616607693|"
# }

