const fs = require('fs');
const path = require('path');

const dumpDir = path.resolve('dump');
const outputSeedDir = path.resolve('seed');
const outputSeedFilePath = `${outputSeedDir}/bdo_market_category_table.csv`;
const inputFileJSON = JSON.parse(fs.readFileSync(`${dumpDir}/db_bdo_main_category_names.json`).toString());

fs.writeFileSync(outputSeedFilePath, '');
for (const key in inputFileJSON) {
  if (inputFileJSON.hasOwnProperty(key)) {
    const item = inputFileJSON[key];
    console.log(item.id);
    fs.appendFileSync(outputSeedFilePath, `${item.id},"${item.name}"\n`);
  }
}
