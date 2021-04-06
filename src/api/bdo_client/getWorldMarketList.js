const { getRegionalBdoTransport } = require('./regionalBdoTransport');
const { validateFields } = require('../../validation');

/**
 *  @typedef {Object} RawWorldMarketListData
 *  @property {number} resultCode - 0 indicates success
 *  @property {string} resultMsg - Item data delimited by a '|'.
 *                                 Each item is delimited by a '-'.
 *                                 i.e.: ItemId-ItemStock-TotalTrades-BasePrice|ItemId-...
 */

/**
 *  @typedef {Object} WorldMarketListItem
 *  @property {number} itemId
 *  @property {number} itemStock
 *  @property {number} totalTrades
 *  @property {number} basePrice
 */

/**
 *  @typedef {Object} ParsedWorldMarketList
 *  @property {!boolean} isValid - received a valid resultCode (0)
 *  @property {string | undefined} errorMsg - remote API provided error message if exists.
 *  @property {!number} resultCode - remote API provided resultCode
 *  @property {Array<WorldMarketListItem> | undefined} itemList
 */

/**
 * @param {RawWorldMarketListData} resp
 * @return {ParsedWorldMarketList}
 */
const parseResponse = (resp) => {
  if (resp.resultCode !== 0) {
    return {
      isValid: false,
      resultCode: resp.resultCode,
      errorMsg: resp.resultMsg,
    };
  }
  const itemList = resp.resultMsg.split('|').reduce((result, x) => {
    const entry = x.split('-');
    const itemId = parseInt(entry[0], 10);
    if (itemId === null || Number.isNaN(itemId)) {
      // trailing delimiter '|' can lead to a bunch of NaN/Null property values
      return result;
    }
    const itemStock = parseInt(entry[1], 10);
    const totalTrades = parseInt(entry[2], 10);
    const basePrice = parseInt(entry[3], 10);
    result.push({
      itemId,
      itemStock,
      totalTrades,
      basePrice,
    });

    return result;
  }, []);

  return {
    isValid: true,
    resultCode: resp.resultCode,
    itemList,
  };
};

const validation = {
  mainCategory: ['isRequired', 'isPositiveNumber'],
  subCategory: ['isRequired', 'isPositiveNumber'],
  keyType: ['isPositiveNumber'],
};

const getWorldMarketList = (region) => async ({
  mainCategory,
  subCategory,
  keyType,
}) => {
  const payload = {
    mainCategory,
    subCategory,
    keyType,
  };
  if (payload.keyType === undefined) {
    payload.keyType = 0;
  }
  validateFields(payload, validation);

  const path = 'GetWorldMarketList';
  const { post } = getRegionalBdoTransport(region);
  const resp = await post(path, payload);
  return parseResponse(resp);
};

module.exports = { getWorldMarketList };
