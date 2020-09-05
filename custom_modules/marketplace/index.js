const axios = require("axios");
const qs = require("qs");

const baseUrl = 'https://marketweb-eu.blackdesertonline.com/Home';

const CONFIG = {
  headers: { 
    'Accept': '*/*', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25', 
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 
    'DNT': '1', 
    'Cookie': '__RequestVerificationToken=rMV9y4rrtmc2uAsQZCzAbkX2khHfhRiOctKmMEVYElUT-B8wzaXL68R9SLpmW0iZoYKpsuCmHSh9Zpa-G9awSNWB4eCPmIydrbRBaPjZlI01'
  }
};

class Market {
  constructor() {}
  
  /**
   * Fetch data with axios
   * @param {String} endpoint 
   * @param {*} data 
   */
  fetchData(endpoint, data) {
    return axios.post(baseUrl + endpoint, data, CONFIG).then(x => x.data);
  }

  /**
   * Search the marketplace for an item by name.
   * @param {String} name - The name of the item you'd like to search.
   * @returns {Promise<Array>} - Returns an array of possible items.
   */
  searchItem(name) {
    const endpoint = "/GetWorldMarketSearchList";

      var formData = qs.stringify({
        __RequestVerificationToken:
          "wf0wqhOwpK4ZlGVBQS7ZAVa9oHBiru4Uq1jf4utTePHRaXMb-Cn0HhVHT8FOCR-JpQ-tuE4aLBtvFSeHs6N1Wlj9J8Xy3o3VpiLFTidlKdw1",
        searchText: name,
      });

      return this.fetchData(endpoint, formData).then(x => JSON.stringify(x));
  }

  /**
   * Fetch the item by the ID, can be found by searching
   * the item on BDOCodex, and copying the last digits in the URL.
   * @param {Number|String} id - The BDOCodex ID of the item.
   */
  fetchItemById(id) {
    const endpoint = "/GetWorldMarketSubList";

    var formData = qs.stringify({
      __RequestVerificationToken:
        "wf0wqhOwpK4ZlGVBQS7ZAVa9oHBiru4Uq1jf4utTePHRaXMb-Cn0HhVHT8FOCR-JpQ-tuE4aLBtvFSeHs6N1Wlj9J8Xy3o3VpiLFTidlKdw1",
      mainKey: id,
      usingCleint: 0,
    });
    
    return this.fetchData(endpoint, formData).then(x => x.detailList);
  }
}

module.exports = { Market };
