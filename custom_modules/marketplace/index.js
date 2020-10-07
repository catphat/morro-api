const axios = require("axios");
const qs = require("qs");

const baseUrlEU = "https://marketweb-eu.blackdesertonline.com/Home";
const baseUrlNA = "https://marketweb-na.blackdesertonline.com/Home";

const tokenEU =
  "wf0wqhOwpK4ZlGVBQS7ZAVa9oHBiru4Uq1jf4utTePHRaXMb-Cn0HhVHT8FOCR-JpQ-tuE4aLBtvFSeHs6N1Wlj9J8Xy3o3VpiLFTidlKdw1";
const tokenNA =
  "PZ_v0iKRMKfWONdgKsvb90d5aOoXWA6ePvQnTUroylgn4cjN1S9eKAO-IrjcxOMTmhrEeHn3fQ4Ga37hrL6SvsMrvuNTD4-i8IN-dDxbYxU1";

const CONFIG_EU = {
  headers: {
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    DNT: "1",
    Cookie:
      "__RequestVerificationToken=rMV9y4rrtmc2uAsQZCzAbkX2khHfhRiOctKmMEVYElUT-B8wzaXL68R9SLpmW0iZoYKpsuCmHSh9Zpa-G9awSNWB4eCPmIydrbRBaPjZlI01",
  },
};

const CONFIG_NA = {
  headers: {
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    DNT: "1",
    Cookie:
      "__RequestVerificationToken=tx_pjeJL_9XXqyenPm1JoodjXHRZJpwiaaXYams_Ic8vnjis5sMcaEiuximGcFYuqRFsJ30GykpCNhysa6Tik3ZG8Lv380kTVCEnSEhQSuE1",
  },
};

class Market {
  constructor() {}

  /**
   * Fetch data with axios
   * @param {String} endpoint
   * @param {*} data
   */
  fetchData(endpoint, data, region) {
    if (region == "NA") {
      return axios
        .post(baseUrlNA + endpoint, data, CONFIG_NA)
        .then((x) => x.data);
    } else {
      return axios
        .post(baseUrlEU + endpoint, data, CONFIG_EU)
        .then((x) => x.data);
    }
  }

  /**
   * Search the marketplace for an item by name.
   * @param {String} name - The name of the item you'd like to search.
   * @returns {Promise<Array>} - Returns an array of possible items.
   */
  searchItem(name, region) {
    const endpoint = "/GetWorldMarketSearchList";

    var formData = qs.stringify({
      __RequestVerificationToken: region == "NA" ? tokenNA : tokenEU,
      searchText: name,
    });

    return this.fetchData(endpoint, formData).then((x) => JSON.stringify(x));
  }

  /**
   * Fetch the item by the ID, can be found by searching
   * the item on BDOCodex, and copying the last digits in the URL.
   * @param {Number|String} id - The BDOCodex ID of the item.
   */
  fetchItemById(id, region) {
    const endpoint = "/GetWorldMarketSubList";

    var formData = qs.stringify({
      __RequestVerificationToken: region == "NA" ? tokenNA : tokenEU,
      mainKey: id,
      usingClient: 0,
    });

    return this.fetchData(endpoint, formData, region).then((x) => x.detailList);
  }
  /**
   * Fetch the item by the ID, can be found by searching
   * the item on BDOCodex, and copying the last digits in the URL.
   * @param {Number|String} id - The BDOCodex ID of the item.
   * @param {String} region - The market region to get data from
   */
  fetchItemStats(id, region) {
    const endpoint = "/GetItemSellBuyInfo";

    var formData = qs.stringify({
      __RequestVerificationToken: region == "NA" ? tokenNA : tokenEU,
      chooseKey: 0,
      count: 0,
      countText: 0,
      grade: 0,
      isUp: true,
      keyType: 0,
      mainKey: id,
      subKey: 0,
      sumCountText: 0,
    });

    //Baseprice us used to achieve a more consistent result. This will prevent market fluctuation to be cached for 1 hour
    //If more than 10 000 items are sold at min price, consider flooded
    return this.fetchData(endpoint, formData, region).then((x) => ({
      pricePerOne: x.basePrice,
      count: x.marketConditionList.reduce((a, mat) => a + mat.sellCount, 0),
      flooded: x.marketConditionList[0].sellCount > 10000 ? true : false,
      maxed:
        x.marketConditionList[x.marketConditionList.length - 1].buyCount > 0
          ? true
          : false,
    }));
  }
}

module.exports = { Market };
