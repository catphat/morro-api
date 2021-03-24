#!/usr/bin/env bash

# Request
# Price history from last 90 days
# keyType - REQUIRED
# mainKey - REQUIRED
# subKey  - REQUIRED
curl "https://na-trade.naeu.playblackdesert.com/Trademarket/GetMarketPriceInfo" \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: BlackDesert' \
  --socks5 "127.0.0.1:7770" \
  -X POST \
  -d '{
  "keyType": 0,
  "mainKey": 5952,
  "subKey": 0
}'

# Response (flooded)
# Sorted by date in asc order. First value being oldest, last value being most recent.
# {
#   "resultCode":0,
#   "resultMsg":"6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600-6600"
# }

