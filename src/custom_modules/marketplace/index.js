'use strict'

require("dotenv").config();
const config = require("../../config")
const axios = require("axios");
const qs = require("qs");

const tokenEU = config.MARKET_TOKEN_EU;
const tokenNA = config.MARKET_TOKEN_NA;
const baseUrlEU = config.MARKET_BASE_URL_EU;
const baseUrlNA = config.MARKET_BASE_URL_NA;

const getHeader = (region) => {
    if (region == null || (region !== "NA" & region !== "EU")) {
        throw "region must be NA or EU."
    }
    return {
        "accept": "*/*",
        "user_Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) " +
            "Version/6.0 Mobile/10A5376e Safari/8536.25",
        "DNT": "1",
        "cookie": (region === "NA" ? tokenNA : tokenEU)
    }
}

const getBaseURL = (region) => {
    if (region == null || (region !== "NA" & region !== "EU")) {
        throw "region must be NA or EU."
    }
    return (region === "NA" ? baseUrlNA : baseUrlEU)
}

class Market {
    constructor() {
    }

    /**
     * Fetch data with axios
     * @param {String} endpoint
     * @param {*} data
     * @param region
     */
    fetchData(endpoint, data, region) {
        throw "not implemented";

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
     * @param region
     * @returns {Promise<Array>} - Returns an array of possible items.
     */
    searchItem(name, region) {
        throw "not implemented";

        const endpoint = "/GetWorldMarketSearchList";

        var formData = qs.stringify({
            __RequestVerificationToken: region === "NA" ? tokenNA : tokenEU,
            searchText: name,
        });

        return this.fetchData(endpoint, formData).then((x) => JSON.stringify(x));
    }

    /**
     * Fetch the item by the ID, can be found by searching
     * the item on BDOCodex, and copying the last digits in the URL.
     * @param {Number|String} id - The BDOCodex ID of the item.
     * @param region
     */
    fetchItemById(id, region) {
        throw "not implemented";

        const endpoint = "/GetWorldMarketSubList";

        var formData = qs.stringify({
            __RequestVerificationToken: region === "NA" ? tokenNA : tokenEU,
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
        throw "not implemented";

        const endpoint = "/GetItemSellBuyInfo";

        var formData = qs.stringify({
            __RequestVerificationToken: region === "NA" ? tokenNA : tokenEU,
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
            pricePerOne: x.basePrice ? x.basePrice : null,
            count: x.marketConditionList
                ? x.marketConditionList.reduce((a, mat) => a + mat.sellCount, 0)
                : null,
            flooded: x.marketConditionList
                ? x.marketConditionList[0].sellCount > 50000 &&
                x.marketConditionList[0].pricePerOne === x.basePrice
                    ? true
                    : false
                : null,
            maxed: x.marketConditionList
                ? x.marketConditionList[x.marketConditionList.length - 1].buyCount >
                5000
                    ? true
                    : false
                : null,
        }));
    }
}

module.exports = {Market, getHeader, getBaseURL};
