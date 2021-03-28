const {
  sequelize, dataTypes, checkPropertyExists, checkModelName,
} = require('../../../helpers/db');

const MainCategoryModel = require('../../../../src/db/models/mainCategory.model');

describe('src/db/models/MainCategory', () => {
  const MainCategory = MainCategoryModel(sequelize, dataTypes);
  const mainCategory = new MainCategory();

  checkModelName(MainCategory)('MainCategory');

  context('properties', () => {
    ['id', 'name'].forEach(checkPropertyExists(mainCategory));
  });

  context('associations', () => {
    // todo
  });
});
