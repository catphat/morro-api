// fetch("https://na-trade.naeu.playblackdesert.com/Home/GetWorldMarketSubList", {
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
//   "referrer": "https://na-trade.naeu.playblackdesert.com/Home/list/20-2",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "
// eslint-disable-next-line max-len
//   + __RequestVerificationToken=mKR3dPw3qqHKiP8v-PkWIRG4iWAmARO-JF6MBlXA2vVhQd1vy3wkWX1hbaEs44pKGiUoJ76QUmrthQoGIKdTgdlT8heeSQEpbxlnkLCupXw1
//   + &mainKey=11629
//   + &usingCleint=0",
//   "method": "POST",
//   "mode": "cors"
// });

const marketUtil = require('./marketUtil');

class GetWorldMarketSubList {
  constructor(region) {
    marketUtil.throwIfInvalidRegion(region);
    this.region = region;
    this.client = marketUtil.getClient(region);
  }

  /**
   * @param {int} mainKey
   */
  getRequestParameters(mainKey) {
    const endpoint = marketUtil.ENDPOINTS.MARKET_SUBLIST;
    const body = {
      mainKey,
      usingClient: 0, // todo: check if fixing typo causes issues with endpoint
    };
    return {
      url: marketUtil.getUrlByEndpointPath(this.region, endpoint.path),
      opt: marketUtil.getRequestOptions(this.region, endpoint.method, body),
    };
  }

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

module.exports = GetWorldMarketSubList;
