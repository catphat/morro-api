// fetch("https://na-trade.naeu.playblackdesert.com/Home/GetItemSellBuyInfo", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",
// eslint-disable-next-line max-len
//     "cookie": "lang=en-US; naeu.Session=tz2hnuxjile2o3h2jmhikl2o; blackdesert_ad_tracker=2IotfHrJgv+X83ZTSld2iR4pDDD7GRuMROg7W1IpRmQ=; bodyCountryCode=US; _gcl_au=1.1.179990586.1615407451; _rdt_uuid=1615407451003.f044811b-5eab-43f5-b009-0fea6742fcf9; _ga=GA1.2.1133361930.1615407451; _gid=GA1.2.947035438.1615407451; _fbp=fb.1.1615407451274.151221838; _ga_7WRV3PC0Y0=GS1.1.1615407450.1.0.1615407453.0; _gat=1; TradeAuth_Session=knm0uckutjbkzhtk05zfdos0; __RequestVerificationToken=yE41vG-abpgG4se0pg4xD0ss39KdM6Oh475OGqYJ3xfduXDGsd_jOjLajPQyHjFItqh8GL0-fs543JE4qSiPOGGkCIaCsL7huqXzU-jmB1g1"
//   },
//   "referrer": "https://na-trade.naeu.playblackdesert.com/Home/item/11629",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "
// eslint-disable-next-line max-len
//   + __RequestVerificationToken=NqcHWpPexRnezmsFrF76nNNHQf47-FN3CMEiaZZcUIkuYm3CZ3AFAezMLTPB30IjKTJEzd2kvtF3US0rfreebPeTuNATGEof8I0C-Vk5SwI1
//   + &pricePerOne=87%2C500%2C000
//   + &totalTradeCount=158307&keyType=0&mainKey=11629&subKey=0&count=29&name=Tungrad+Necklace
//   + &grade=3&mainCategory=20&subCategory=2&chooseKey=0
//   + &iconPath=url(&sumCountText=84&countText=29&isUp=true",
//   "method": "POST",
//   "mode": "cors"
// });
require('dotenv').config();
const marketUtil = require('./marketUtil');

class GetItemBuySellInfo {
  constructor(region) {
    marketUtil.throwIfInvalidRegion(region);
    this.region = region;
    this.client = marketUtil.getClient(region);
  }

  /**
   * @param {int} mainKey
   */
  getRequestParameters(mainKey) {
    const endpoint = marketUtil.ENDPOINTS.MARKET_SELLBUYINFO;
    const body = {
      pricePerOne: 0,
      totalTradeCount: 0,
      keyType: 0,
      mainKey,
      subKey: 0,
      count: 0,
      name: '',
      grade: 0,
      mainCategory: 0,
      subCategory: 0,
      chooseKey: 0,
    };
    return {
      url: marketUtil.getUrlByEndpointPath(this.region, endpoint.path),
      opt: marketUtil.getRequestOptions(this.region, endpoint.method, body),
    };
  }

  parseResponse = (resp) => ({
    pricePerOne: resp.basePrice ? resp.basePrice : null,
    count: resp.marketConditionList
      ? resp.marketConditionList.reduce((a, mat) => a + mat.sellCount, 0)
      : null,
    flooded: resp.marketConditionList
      ? resp.marketConditionList[0].sellCount > 50000
        && resp.marketConditionList[0].pricePerOne === resp.basePrice
      : null,
    maxed: resp.marketConditionList
      ? resp.marketConditionList[resp.marketConditionList.length - 1].buyCount
        > 5000
      : null,
  });

  /**
   * @param {int} mainKey
   */
  async byMainKey(mainKey) {
    const params = this.getRequestParameters(mainKey);
    try {
      return this.client.post(params.url.href, params.opt.body, { headers: params.opt.headers });
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

module.exports = GetItemBuySellInfo;
