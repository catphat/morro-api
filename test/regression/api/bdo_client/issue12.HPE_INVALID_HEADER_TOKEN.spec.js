const { networkInterfaces } = require('os');
const fs = require('fs');
const chai = require('chai');
const { describe, it } = require('mocha');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

const proxyquire = require('proxyquire');
const axios = require('axios');
const net = require('net');
const http = require('http');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('HPE_INVALID_HEADER_TOKEN error', () => {
  let server;
  let config;
  let SERVER_HOST;
  const SERVER_PORT = 9991;

  let getRegionalBdoTransport;
  let getWorldMarketList;

  before(() => {
    const invalidRawPacketFile = fs.readFileSync('test/regression/api/bdo_client/issue12.invalidRawPacket.json', 'utf8');
    const rawPacketData = JSON.parse(invalidRawPacketFile);
    const invalidPacket = Buffer.from(rawPacketData, 'utf8');

    const invalidPacketStr = invalidPacket.toString('utf8');

    const netInterfaces = networkInterfaces();
    const [{ address }] = Object.values(netInterfaces).flatMap((netInterface) => netInterface.filter((prop) => prop.family === 'IPv4' && !prop.internal));
    SERVER_HOST = address;

    const incompleteData = '{"resultCode":0,"resultMsg":"10003-0-57488-16900|10005-7-608508-32800|10006-0-113996-292000|10007-0-315594-89500|10009-37-103499-5050000|10010-10-40305-184000000|10012-6-582460-75000|10013-3-700529-63000|10014-44-1085548-156000|10056-6-731908-34';
    const remainingContentLength = 5303 - Buffer.byteLength(incompleteData);

    // if content-length exceeds actual content-length
    //  then clients will hang awaiting remaining content.
    const bufFiller = Buffer.alloc(remainingContentLength);
    bufFiller.fill(' ');
    bufFiller.write('"}', 'utf-8');
    const bufFillerStr = bufFiller.toString();
    server = net.createServer((socket) => {
      socket.write(invalidPacketStr);
      socket.write(bufFillerStr);
    });

    config = {
      bdoClient: {
        BASE_URL_NA: `http://${SERVER_HOST}:${SERVER_PORT}`,
        BASE_URL_EU: `http://${SERVER_HOST}:${SERVER_PORT}`,
        USE_PROXY: true,
        PROXY_URL: '127.0.0.1',
        PROXY_PORT: '7770',
      },
    };

    const { getRegionalBdoTransport: bdoTransport } = proxyquire('../../../../src/api/bdo_client/regionalBdoTransport', {
      '../../config': config,
    });
    getRegionalBdoTransport = bdoTransport;
    const { getWorldMarketList: worldMarketList } = proxyquire('../../../../src/api/bdo_client/getWorldMarketList', {
      './regionalBdoTransport': { getRegionalBdoTransport },
    });
    getWorldMarketList = worldMarketList;

    server.listen(SERVER_PORT, SERVER_HOST);
  });

  after(() => {
    server.close();
  });

  it('is thrown when using invalid config', async () => {
    const client = axios.create({
      baseURL: `http://${SERVER_HOST}:${SERVER_PORT}`,
    });
    const clientConfig = {
      method: 'post',
      url: 'GetWorldMarketList',
      data: '{"mainCategory":1,"subCategory":1,"keyType":0}',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BlackDesert',
      },
      timeout: 2500,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
    };

    const response = client(clientConfig);
    let errorMsg;
    try {

      await response;
    } catch (e) {
      errorMsg = e.message;
    }

    expect(errorMsg).to.equal('Parse Error: Invalid header value char');
  });

  it('is not thrown when using insecureHTTPParser option', async () => {
    const wrappedHttp = {
      ...http,
      request: (options, callback) => http.request({
        ...options,
        insecureHTTPParser: true,
      }, callback),
    };
    const client = axios.create({
      baseURL: `http://${SERVER_HOST}:${SERVER_PORT}`,
      transport: wrappedHttp,
    });

    const clientConfig = {
      method: 'post',
      url: 'Trademarket/GetWorldMarketList',
      data: "{'mainCategory':1,'subCategory':1,'keyType':0}",
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BlackDesert',
      },
      timeout: 2500,
      maxContentLength: -1,
      maxBodyLength: -1,
    };

    let errorMsg;
    let response;
    try {

      response = await client(clientConfig);

    } catch (e) {
      errorMsg = e.message;
    }

    expect(errorMsg).to.not.equal('Parse Error: Invalid header value char');
    expect(errorMsg).to.be.undefined;
    expect(response.data.resultCode).to.equal(0);
    expect(response.data.resultMsg).to.equal('10003-0-57488-16900|10005-7-608508-32800|10006-0-113996-292000|10007-0-315594-89500|10009-37-103499-5050000|10010-10-40305-184000000|10012-6-582460-75000|10013-3-700529-63000|10014-44-1085548-156000|10056-6-731908-34');

  });

  it('is not thrown when using the api/bdo_client/getWorldMarketList', async () => {
    const result = await getWorldMarketList('NA')({
      mainCategory: 1,
      subCategory: 1,
      keyType: 0,
    });
    expect(result.isValid).to.be.true;
    expect(result.itemList.length).to.equal(10);
    expect(result.itemList[0].basePrice).to.equal(16900);
    expect(result.itemList[0].itemId).to.equal(10003);
    expect(result.itemList[0].itemStock).to.equal(0);
    expect(result.itemList[0].totalTrades).to.equal(57488);
  });
});
