const {
  expect, sequelize, dataTypes, checkPropertyExists, checkModelName,
} = require('../../../helpers/db');

const ItemModel = require('../../../../src/db/models/item.model');

describe('src/db/models/Item', () => {
  const Item = ItemModel(sequelize, dataTypes);
  const item = new Item();

  checkModelName(Item)('Item');

  context('properties', () => {
    ['id', 'name', 'icon'].forEach(checkPropertyExists(item));
  });

  context('associations', () => {
    const SubCategory = 'test subCategory';

    before(() => {
      Item.associate({ SubCategory });
    });

    it('defined a belongsTo association with SubCategory', () => {
      expect(Item.belongsTo).to.have.been.calledWith(SubCategory);
    });
  });
});
