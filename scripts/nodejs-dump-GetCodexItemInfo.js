const { getItemInfo } = require('../src/api/bdo_codex/getItemInfo');

const get = async (itemId) => {
  const result = await getItemInfo(itemId);
  console.log(result);
};

get('abc').then(console.log('done'));
