#!/usr/bin/env bash


curl --socks5 "127.0.0.1:7770" 'https://na-trade.naeu.playblackdesert.com/Home/GetWorldMarketSubList' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
  -H 'Accept: */*' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Origin: https://na-trade.naeu.playblackdesert.com' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://na-trade.naeu.playblackdesert.com/Home/list/hot' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Cookie: lang=en-US; _gcl_au=1.1.179990586.1615407451; _rdt_uuid=1615407451003.f044811b-5eab-43f5-b009-0fea6742fcf9; _fbp=fb.1.1615407451274.151221838; naeu.Session=3wnmtvyyxcl2bhwlruy3kiov; bodyCountryCode=US; rating=ESRB; _gid=GA1.2.1839907010.1616107593; _ga_7WRV3PC0Y0=GS1.1.1616107592.5.1.1616107617.0; _ga=GA1.2.1133361930.1615407451; _gat=1; TradeAuth_Session=l31jnsoqkruwwbp1wxtyuyuz; __RequestVerificationToken=hMfSRIzHSjmDaKIer1EnRzBZtUXPghzMQXZrKuQPuFMmsYiuQ7vLhM5JuBBDdXm7-7o_J5QBetwiZcBctKrdkyGld5jG-PYweyH7HyzIuTs1' \
  --data-raw '__RequestVerificationToken=YguIpWVDn-8YoJvSzja6vDp4fONcDZ33qg2dddwF-mOZDYUIv1JUMwkme1wXtCxEBv8kZRDq2ycgjyX6YgdnU9X4Wj-c_C_8qxk1xoCNc9o1&mainKey=11007&usingCleint=0' \
  --compressed