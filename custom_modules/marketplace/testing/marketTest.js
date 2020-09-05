const MARKET = require("../index");
//Param is anti captcha key
const market = new MARKET.Market();

async function print() {
    const info = await market.fetchItemById("4601").then(x => x[0]);
    console.log(info);
}

print();


