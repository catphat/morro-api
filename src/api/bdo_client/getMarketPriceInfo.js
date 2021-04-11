const { getRegionalBdoTransport } = require('./regionalBdoTransport');
const { validateFields } = require('../../validation');

/**
 *  @typedef {Object} ParsedMarketInfoResponse
 *  @property {!boolean} isValid - received a valid resultCode (0)
 *  @property {string | undefined} errorMsg - remote API provided error message if exists.
 *  @property {!number} resultCode - remote API provided resultCode
 *  @property {number | undefined} currentBasePrice - latest base price (average price of recent transactions)
 *  @property {Array<int>|undefined} priceHistoryAsc - 90 day price history in ascending order.
 *                                                     Last array item being most recent.
 */

/**
 *  @param {RawMarketInfoResponseData} resp
 *  @return {ParsedMarketInfoResponse}
 */

/**
 *  @typedef {Object} RawMarketInfoResponseData
 *  @property {number} resultCode - 0 indicates success
 *  @property {string} resultMsg - 90 days of price information in ascending order.
 *                                 Delimited by a '-' last value being the most recent price.
 */

const parseResponse = (resp) => {
  if (resp.resultCode !== 0) {
    return {
      isValid: false,
      resultCode: resp.resultCode,
      errorMsg: resp.resultMsg,
    };
  }
  const priceHistoryStr = resp.resultMsg.split('-');
  const priceHistory = priceHistoryStr.map((x) => parseInt(x, 10));
  return {
    isValid: true,
    resultCode: resp.resultCode,
    currentBasePrice: priceHistory[priceHistory.length - 1],
    priceHistoryAsc: priceHistory,
  };
};

const validation = {
  mainKey: ['isRequired', 'isPositiveNumber'],
  subKey: ['isNonNegativeNumber'],
  keyType: ['isNonNegativeNumber'],
};

const getMarketPriceInfo = (region) => async ({
  mainKey,
  keyType,
  subKey,
}) => {
  const payload = {
    mainKey,
    keyType,
    subKey,
  };

  if (payload.keyType === undefined) {
    payload.keyType = 0;
  }

  if (payload.subKey === undefined) {
    payload.subKey = 0;
  }

  validateFields(payload, validation);
  const path = 'GetMarketPriceInfo';
  const { post } = getRegionalBdoTransport(region);
  const resp = await post(path, payload);
  return parseResponse(resp);
};

module.exports = { getMarketPriceInfo };
