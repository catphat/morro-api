const { stub, match } = require('sinon');
const proxyquire = require('proxyquire');
const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { validateFields: realValidateFields } = require('../../../../src/validation');

const { expect } = chai;

context('api/getItemInfo', () => {
  const validResponseFile = path.resolve('test/unit/api/bdo_codex/raw_responses/getItemInfo-11609-valid_response.json');
  const validResponse = JSON.parse(fs.readFileSync(validResponseFile).toString());
  const Item = stub().returns(validResponse);
  const validateFields = stub();
  const validation = {
    itemId: ['isRequired', 'isPositiveNumber'],
  };

  const { getItemInfo } = proxyquire('../../../../src/api/bdo_codex/getItemInfo', {
    'ishqbb-calpheonjs': { Item },
    '../../validation': { validateFields },
  });

  afterEach(() => {
    validateFields.resetHistory();
  });

  it('test validation matches expected validation', () => {
    getItemInfo(0);
    const expectedValidation = validateFields.args[0][1];
    expect(validation).to.deep.equal(expectedValidation);
  });

  it('called validateFields with invalid param and validation rules', () => {
    getItemInfo(0);
    const payload = validateFields.args[0][0];
    expect(() => realValidateFields(payload, validation)).to.throw();
  });

  it('called validateFields with valid param and validation rules', () => {
    getItemInfo(1);
    const payload = validateFields.args[0][0];
    expect(() => realValidateFields(payload, validation)).to.not.throw();
  });

  it('returns expected response', async () => {
    const resp = await getItemInfo(1);
    expect(resp.data).to.deep.equal(validResponse.data);
  });
});
