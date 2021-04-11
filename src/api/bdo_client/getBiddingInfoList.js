const { getRegionalBdoTransport } = require('./regionalBdoTransport');
const { validateFields } = require('../../validation');

/**
 *  @typedef {Object} RawBiddingInfoListData
 *  @property {number} resultCode - 0 indicates success
 *  @property {string} resultMsg - Buy/Sell orders delimited by a '|'.
 *                                 Each order item being delimited by a '-'.
 *                                 i.e.: Price-SellOrders-BuyOrders|Price-SellOrders-BuyOrders...
 */

/**
 *  @typedef {Object} BiddingInfoItem
 *  @property {number} Price
 *  @property {number} SellOrders
 *  @property {number} BuyOrders
 */

/**
 *  @typedef {Object} ParsedBiddingInfoList
 *  @property {!boolean} isValid - received a valid resultCode (0)
 *  @property {string | undefined} errorMsg - remote API provided error message if exists.
 *  @property {!number} resultCode - remote API provided resultCode
 *  @property {Array<BiddingInfoItem>|undefined} biddingList - all orders for item
 */

/**
 * @param {RawBiddingInfoListData} resp
 */
const parseResponse = (resp) => {
  if (resp.resultCode !== 0) {
    return {
      isValid: false,
      resultCode: resp.resultCode,
      errorMsg: resp.resultMsg,
    };
  }
  const biddingList = resp.resultMsg.split('|').reduce((result, x) => {
    const entry = x.split('-');
    const price = parseInt(entry[0], 10);
    if (price === null || Number.isNaN(price)) {
      // trailing delimiter '|' can lead to a bunch of NaN/Null property values
      return result;
    }
    const sellOrders = parseInt(entry[1], 10);
    const buyOrders = parseInt(entry[2], 10);
    result.push({
      price,
      sellOrders,
      buyOrders,
    });
    return result;
  }, []);

  return {
    isValid: true,
    resultCode: resp.resultCode,
    biddingList,
  };
};

const validation = {
  mainKey: ['isRequired', 'isPositiveNumber'],
  subKey: ['isNonNegativeNumber'],
  keyType: ['isNonNegativeNumber'],
};

const getBiddingInfoList = (region) => async ({
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
  const path = 'GetBiddingInfoList';
  const { post } = getRegionalBdoTransport(region);
  const resp = await post(path, payload);
  return parseResponse(resp);
};

module.exports = { getBiddingInfoList };
