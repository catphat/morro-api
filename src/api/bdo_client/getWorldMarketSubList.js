const { getRegionalBdoTransport, parseErrorResponseOrDefault } = require('./regionalBdoTransport');
const { validateFields } = require('../../validation');

/**
 * @typedef {Object} RawWorldMarketSubListData
 *  @property {number} resultCode - 0 indicates success
 *  @property {string} resultMsg - Each entry is delimited by a '|'.
 *                                 Each item of each entry is delimited by a '-'.
 *                                 i.e.: ItemId-EnhancementMin-EnhancementMax-BasePrice...
 */

/**
   *  @typedef {Object} WorldMarketSubListItem
   *  @property {number} itemId
   *  @property {number} enhancementMin
   *  @property {number} enhancementMax
   *  @property {number} basePrice
   *  @property {number} currentStock
   *  @property {number} totalTrades
   *  @property {number} priceHardCapMin
   *  @property {number} priceHardCapMax
   *  @property {number} lastSalePrice
   *  @property {number} lastSaleTime
   */

/**
   *  @typedef {Object} ParsedWorldSubMarketList
   *  @property {!boolean} isValid - received a valid resultCode (0)
   *  @property {string | undefined} errorMsg - remote API provided error message if exists.
   *  @property {!number} resultCode - remote API provided resultCode
   *  @property {Array<WorldMarketSubListItem> | undefined} marketSubList
   */
const parseResponse = (resp) => {
  const errorResp = parseErrorResponseOrDefault(resp);
  if (errorResp) {
    return errorResp;
  }
  const marketSubList = resp.resultMsg.split('|').reduce((result, x) => {
    const entry = x.split('-');
    const itemId = parseInt(entry[0], 10);
    if (itemId === null || Number.isNaN(itemId)) {
      // trailing delimiter '|' can lead to a bunch of NaN/Null property values
      return result;
    }
    const enhancementMin = parseInt(entry[1], 10);
    const enhancementMax = parseInt(entry[2], 10);
    const basePrice = parseInt(entry[3], 10);
    const currentStock = parseInt(entry[4], 10);
    const totalTrades = parseInt(entry[5], 10);
    const priceHardCapMin = parseInt(entry[6], 10);
    const priceHardCapMax = parseInt(entry[7], 10);
    const lastSalePrice = parseInt(entry[8], 10);
    const lastSaleTime = parseInt(entry[9], 10);
    result.push({
      itemId,
      enhancementMin,
      enhancementMax,
      basePrice,
      currentStock,
      totalTrades,
      priceHardCapMin,
      priceHardCapMax,
      lastSalePrice,
      lastSaleTime,
    });

    return result;
  }, []);

  return {
    isValid: true,
    resultCode: resp.resultCode,
    marketSubList,
  };
};

const validation = {
  mainKey: ['isRequired', 'isPositiveNumber'],
  keyType: ['isRequired', 'isNonNegativeNumber'],
};

const getWorldMarketSubList = (region) => async ({
  mainKey,
  keyType,
}) => {
  const payload = {
    mainKey,
    keyType,
  };
  validateFields(payload, validation);
  const path = 'GetWorldMarketSubList';
  const { post } = getRegionalBdoTransport(region);
  const resp = await post(path, payload);
  return parseResponse(resp);
};

module.exports = { getWorldMarketSubList, parseResponse };
