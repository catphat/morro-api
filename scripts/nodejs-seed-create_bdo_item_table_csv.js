const fs = require('fs');
const path = require('path');

const dumpDir = path.resolve('dump');
const outputSeedDir = path.resolve('seed');
const outputSeedFilePath = `${outputSeedDir}/bdo_item_table.csv`;
const inputFileJSON = JSON.parse(fs.readFileSync(`${dumpDir}/item_db-ItemIdAndNames.json`).toString());

fs.writeFileSync(outputSeedFilePath, '');
for (const key in inputFileJSON) {
  if (inputFileJSON.hasOwnProperty(key)) {
    const item = inputFileJSON[key];
    console.log(item.id);
    fs.appendFileSync(outputSeedFilePath, `${item.id},"${item.name}"\n`);
  }
}
