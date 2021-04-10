const { Item } = require('ishqbb-calpheonjs');

const getItemInfo = async (id) => {
  const item = await Item(id);

  return item;
};

module.exports = { getItemInfo };
