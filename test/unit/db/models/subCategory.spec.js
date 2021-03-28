const {
  expect, sequelize, dataTypes, checkPropertyExists, checkModelName,
} = require('../../../helpers/db');

const SubCategoryModel = require('../../../../src/db/models/subCategory.model');

describe('src/db/models/SubCategory', () => {
  const SubCategory = SubCategoryModel(sequelize, dataTypes);
  const subCategory = new SubCategory();

  checkModelName(SubCategory)('SubCategory');

  context('properties', () => {
    ['id', 'subCategoryIndex', 'name'].forEach(checkPropertyExists(subCategory));
  });

  context('associations', () => {
    const MainCategory = 'test mainCategory';

    before(() => {
      SubCategory.associate({ MainCategory });
    });

    it('defined a belongsTo association with MainCategory', () => {
      expect(SubCategory.belongsTo).to.have.been.calledWith(MainCategory);
    });
  });
});
