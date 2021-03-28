const path = require('path');
const fs = require('fs');
const chai = require('chai');
const { describe, it } = require('mocha');

const nock = require('nock');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;

require('dotenv').config({ path: path.resolve('test/test.env') });

const getRawResponse = (fileName) => {
  const rawResponseDir = path.resolve('test/unit/api/bdo_client/bdo_client_raw_responses/');
  const file = path.resolve(rawResponseDir, fileName);
  return fs.readFileSync(file);
};

module.exports = {
  getRawResponse, describe, it, expect, nock,
};
