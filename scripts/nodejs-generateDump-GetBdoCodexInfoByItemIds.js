const fs = require('fs');
const path = require('path');

const uniqueItems = [];
const dumpDir = path.resolve('scripts/dump');
const seedDir = path.resolve('scripts/seed');
const itemIdsFile = `${dumpDir}/itemIds.json`;
const bdoCodexDumpFile = `${dumpDir}/bdoCodexInfoDump.json`;
const { getItemInfo } = require('../src/api/bdo_codex/getItemInfo');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const items = JSON.parse(fs.readFileSync(itemIdsFile));

fs.writeFileSync(bdoCodexDumpFile, '{ "items":[');
const run = async () => {
  for (const id of items.itemIds) {
    await delay(200);
    console.log(id);
    const result = await getItemInfo(id);
    fs.appendFileSync(bdoCodexDumpFile, `${JSON.stringify(result)},`, 'utf-8');
  }
};
fs.appendFileSync(bdoCodexDumpFile, ']}', 'utf-8');

run().then((x) => console.log('done'));

//
// fs.writeFileSync(outputItemIdsFile, '{ "itemIds":[');
// uniqueItems.forEach((x) => {
//  fs.appendFileSync(outputItemIdsFile, `${x.itemId},`, 'utf-8');
// });
// fs.appendFileSync(outputItemIdsFile, ']}', 'utf-8');

// uniqueItems.forEach(async (x) => {
//  // const item = { id: x.itemId, mainCategoryId: x.mainCategory, name: itemInfo.data.name };
//  // items.push(item);
//
// });
// fs.writeFileSync(outputSeedFile, sequelizeSeedTemplate(JSON.stringify(items)));
