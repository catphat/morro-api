const fs = require('fs');

const dumpDir = '../../MAPI_DEV_DB_DATA/subListData2/';
const outDir = '../../MAPI_DEV_DB_DATA/';
const subListCsvFile = 'sublist2.csv';

const csvHeader = 'item_id, region_name, enhancement_range_min, time, base_price, current_stock, total_trades, last_sale_time, last_sale_price\n';
// eslint-disable-next-line camelcase
const getSubListCsvRow = (item_id, region_name, enhancement_range_min, time, base_price, current_stock, total_trades, last_sale_time, last_sale_price) => `${item_id},${region_name},${enhancement_range_min},${time},${base_price},${current_stock},${total_trades},${last_sale_time},${last_sale_price}\n`;

const convertAllMarketSubListJsonFilesToSingleCSV = (dir, out) => {
  const outFile = `${out}/${subListCsvFile}`;
  fs.writeFileSync(outFile, csvHeader);
  fs.readdirSync(dir).forEach((file) => {
    const fileNameArray = file.split('-');
    if (fileNameArray[0] === 'sublist') {

      let region;
      let fileTime;
      if (fileNameArray[1] !== 'NA' && fileNameArray[1] !== 'EU') {
        region = 'NA';
        fileTime = fileNameArray[2].split('.')[0];
      } else {
        region = fileNameArray[1];
        fileTime = fileNameArray[3].split('.')[0];
      }

      const observationTime = new Date(fileTime * 1000);
      const observationISO = observationTime.toISOString();
      const subListFileContents = fs.readFileSync(`${dumpDir}/${file}`).toString();
      const subListFileData = JSON.parse(subListFileContents);

      if (subListFileData.isValid) {
        subListFileData.marketSubList.forEach((x) => {
          let lastSaleTime = null;
          if (x.lastSaleTime !== 0) {
            lastSaleTime = new Date(x.lastSaleTime * 1000).toISOString();
          }

          let lastSalePrice = null;
          if (x.lastSalePrice !== 0) {
            lastSalePrice = x.lastSalePrice;
          }

          console.log(`${x.itemId}-${x.enhancementMin} `);
          const csvRow = getSubListCsvRow(x.itemId, region, x.enhancementMin, observationISO, x.basePrice, x.currentStock, x.totalTrades, lastSaleTime, lastSalePrice);
          fs.appendFileSync(outFile, csvRow);
        });
      }
    }
  });
};

convertAllMarketSubListJsonFilesToSingleCSV(dumpDir, outDir);
