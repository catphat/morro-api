const { Item } = require('ishqbb-calpheonjs');
const { validateFields } = require('../../validation');

const validation = {
  itemId: ['isRequired', 'isPositiveNumber'],
};

const getItemInfo = async (itemId) => {
  validateFields({ itemId }, validation);
  return Item(itemId);
};

module.exports = { getItemInfo };
