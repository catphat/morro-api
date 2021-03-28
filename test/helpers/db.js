const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

module.exports = {
  chai, expect, sequelize, dataTypes, checkModelName, checkPropertyExists,
};
