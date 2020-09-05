var axios = require('axios');
var qs = require('qs');

const baseUrl = 'https://marketweb-eu.blackdesertonline.com/Home';

var data = qs.stringify({
 '__RequestVerificationToken': 'wf0wqhOwpK4ZlGVBQS7ZAVa9oHBiru4Uq1jf4utTePHRaXMb-Cn0HhVHT8FOCR-JpQ-tuE4aLBtvFSeHs6N1Wlj9J8Xy3o3VpiLFTidlKdw1',
'mainCategory': '10',
'subCategory': '7' 
});
var config = {
  headers: { 
    'Accept': '*/*', 
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25', 
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 
    'DNT': '1', 
    'Cookie': '__RequestVerificationToken=rMV9y4rrtmc2uAsQZCzAbkX2khHfhRiOctKmMEVYElUT-B8wzaXL68R9SLpmW0iZoYKpsuCmHSh9Zpa-G9awSNWB4eCPmIydrbRBaPjZlI01'
  }
};

axios.post(baseUrl + "/GetWorldMarketList", data, config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});