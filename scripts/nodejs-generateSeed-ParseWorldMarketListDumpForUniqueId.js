const fs = require('fs');
const path = require('path');

const uniqueItems = [];
const dumpDir = path.resolve('scripts/dump');
const seedDir = path.resolve('scripts/seed');
const outputSeedFile = `${seedDir}/seed-worldMarketListUniqueIds.js`;
const itemDbFile = `${dumpDir}/item_db.json`;
const outputItemIdsFile = `${seedDir}/itemIds.json`;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
fs.readdirSync(dumpDir).forEach((file) => {
  const fileName = file.split('-');
  const apiName = fileName[0];
  if (apiName === 'worldMarketList') {
    const mainCategory = fileName[1];

    const dumpFile = fs.readFileSync(`${dumpDir}/${file}`);
    const dumpJSON = JSON.parse(dumpFile);
    dumpJSON.itemList.forEach((x) => {
      const item = {
        itemId: x.itemId,
        mainCategory,
      };
      if (!uniqueItems.some((i) => i.itemId === item.itemId)) {
        uniqueItems.push(item);
      }
    });
  }
});

const sequelizeSeedTemplate = (items) => `module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('MainCategory', [{
      id: '1',
      name: 'Main Weapon',
    }, {
      id: '5',
      name: 'Sub-Weapon',
    }, {
      id: '10',
      name: 'Awakening',
    }, {
      id: '15',
      name: 'Armor',
    }, {
      id: '20',
      name: 'Accessories',
    }, {
      id: '25',
      name: 'Material',
    }, {
      id: '30',
      name: 'Enhancement',
    }, {
      id: '35',
      name: 'Consumables',
    }, {
      id: '40',
      name: 'Life Tools',
    }, {
      id: '45',
      name: 'Alchemy Stone',
    }, {
      id: '50',
      name: 'Magic Crystal',
    }, {
      id: '55',
      name: 'Pearl Item',
    }, {
      id: '60',
      name: 'Dye',
    }, {
      id: '65',
      name: 'Mount',
    }, {
      id: '70',
      name: 'Ship',
    }, {
      id: '75',
      name: 'Wagon',
    }, {
      id: '80',
      name: 'Furniture',
    }]);

    await queryInterface.bulkInsert('Item', ${items});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Item');
    await queryInterface.bulkDelete('MainCategory');
  },
};`;

uniqueItems.sort((a, b) => ((a.itemId > b.itemId) ? 1 : -1));
const items = [];

const itemDb = JSON.parse(fs.readFileSync(itemDbFile).toString());

uniqueItems.forEach((x) => {
  const itemDbItem = itemDb[x.itemId];
  console.log(itemDbItem);
  const item = { id: x.itemId, mainCategoryId: x.mainCategory, name: itemDbItem.name };
  items.push(item);
});
fs.writeFileSync(outputSeedFile, sequelizeSeedTemplate(JSON.stringify(items)));
