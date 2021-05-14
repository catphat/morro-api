const chai = require('chai');

chai.use(require('sinon-chai'));

const { expect } = chai;
const { stub, spy } = require('sinon');
const proxyquire = require('proxyquire');
const path = require('path');
const fs = require('fs');

describe('domain/query/getBdoFullMarketItemState', () => {

  context('when remote api responses are valid', () => {

    const responseDir = 'test/unit/domain/query/parsed_responses';

    const getWorldMarketSubListStub = stub().returns((region) = ({ mainKey }) => {
      const worldMarketSubListValidResponseFile = fs.readFileSync(path.resolve(`${responseDir}/getWorldMarketSubList-${mainKey}.json`)).toString();
      const worldMarketSubListResponseJSON = JSON.parse(worldMarketSubListValidResponseFile);
      return worldMarketSubListResponseJSON;

    });

    const getBiddingInfoListStub = stub().returns((region) = ({ mainKey, subKey }) => {
      const biddingInfoListValidResponseFile = fs.readFileSync(path.resolve(`${responseDir}/getBiddingInfoList-${mainKey}-${subKey}.json`)).toString();
      const biddingInfoListResponseJSON = JSON.parse(biddingInfoListValidResponseFile);
      return biddingInfoListResponseJSON;
    });
    const bdo = {
      getWorldMarketSubList: getWorldMarketSubListStub,
      getBiddingInfoList: getBiddingInfoListStub,
    };

    const getBdoFullMarketItemState = proxyquire('../../../../src/domain/query/getBdoFullMarketItemState', {
      '../../api': bdo,
    });

    it('expected methods were called once', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(getWorldMarketSubListStub.calledOnce).to.be.true;
    });

    it('return expected results ', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(resp.isValid).to.be.true;
      expect(resp.itemId).to.be.equal('11609');

      expect(resp.subList[0].enhancementMin).to.equal(0);
      expect(resp.subList[0].asks.length).to.equal(7);
      expect(resp.subList[0].asks[0].price).to.equal(7650000);
      expect(resp.subList[0].asks[0].amount).to.equal(2);

      expect(resp.subList[1].enhancementMin).to.equal(1);
      expect(resp.subList[1].asks.length).to.equal(1);
      expect(resp.subList[1].asks[0].price).to.equal(29100000);
      expect(resp.subList[1].asks[0].amount).to.equal(2);

    });
  });

  context('when remote api response getWorldMarkestSubList is invalid', () => {

    const responseDir = 'test/unit/domain/query/parsed_responses';

    const getWorldMarketSubListStub = stub().returns((region) = ({ mainKey }) => {
      throw new Error('test error');
    });

    const getBiddingInfoListStub = stub().returns((region) = ({ mainKey, subKey }) => {
      const biddingInfoListValidResponseFile = fs.readFileSync(path.resolve(`${responseDir}/getBiddingInfoList-${mainKey}-${subKey}.json`)).toString();
      const biddingInfoListResponseJSON = JSON.parse(biddingInfoListValidResponseFile);
      return biddingInfoListResponseJSON;
    });
    const bdo = {
      getWorldMarketSubList: getWorldMarketSubListStub,
      getBiddingInfoList: getBiddingInfoListStub,
    };

    const getBdoFullMarketItemState = proxyquire('../../../../src/domain/query/getBdoFullMarketItemState', {
      '../../api': bdo,
    });

    it('expected methods were called thrice', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(getWorldMarketSubListStub.calledThrice).to.be.true;
    });

    it('returns expected results', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(resp.isValid).to.be.false;
      expect(resp.itemId).to.equal('11609');
      expect(resp.exception.message).to.equal('test error');
    });

  });

  context('when remote api response getBiddingInfoList is invalid', () => {

    const responseDir = 'test/unit/domain/query/parsed_responses';

    const getWorldMarketSubListStub = stub().returns((region) = ({ mainKey }) => {
      const worldMarketSubListValidResponseFile = fs.readFileSync(path.resolve(`${responseDir}/getWorldMarketSubList-${mainKey}.json`)).toString();
      const worldMarketSubListResponseJSON = JSON.parse(worldMarketSubListValidResponseFile);
      return worldMarketSubListResponseJSON;

    });
    const getBiddingInfoListStub = stub().returns((region) = ({ mainKey, subKey }) => {
      throw new Error('test error');
    });
    const bdo = {
      getWorldMarketSubList: getWorldMarketSubListStub,
      getBiddingInfoList: getBiddingInfoListStub,
    };

    const getBdoFullMarketItemState = proxyquire('../../../../src/domain/query/getBdoFullMarketItemState', {
      '../../api': bdo,
    });

    it('expected methods were called thrice', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(getWorldMarketSubListStub.calledOnce).to.be.true;
      expect(getBiddingInfoListStub.callCount).to.equal(18);
    });

    it('returns expected results', async () => {
      const resp = await getBdoFullMarketItemState('NA', '11609');
      expect(resp.isValid).to.be.false;
      expect(resp.itemId).to.equal('11609');
      expect(resp.exception.message).to.equal('ItemId: 11609 Region: NA EnhancementMin: 0 | Threw error: test error');
    });

  });

});
