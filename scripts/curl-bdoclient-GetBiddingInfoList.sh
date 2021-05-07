#!/usr/bin/env bash

# Request
# Price history from last 90 days
# keyType - REQUIRED
# mainKey - REQUIRED
# subKey  - REQUIRED

MAIN_KEY=$1
SUB_KEY=$2

if [[ -z "$MAIN_KEY" || -z "$SUB_KEY" ]]; then
  echo "usage: $0 <main-key> <sub-key>"
  exit 1
fi

curl --socks5 "127.0.0.1:7770" "https://na-trade.naeu.playblackdesert.com/Trademarket/GetBiddingInfoList" \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: BlackDesert' \
  -X POST \
  -d "{
  'keyType': 0,
  'mainKey':$MAIN_KEY,
  'subKey': $SUB_KEY
}"

# Trace of Despair
# Response (flooded)
# Structure:
#   0 - Price
#   1 - Amount of Sell Orders
#   2 - Amount of Buy Orders
# {
#     "resultCode": 0,
#     "resultMsg": "6600-440971-0|7050-9576-0|6900-28-0|6750-32-0|6700-69-0|7000-1008-0|6650-204-0|6850-1010-0|6800-68-0|6950-38-0|"
# }
