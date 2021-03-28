// Connect to database for materials, nodes etc.
const { Sequelize } = require('sequelize');

const config = require('../config');

const sequelize = new Sequelize(config.DB_URL, {
  logging: false,
});

const { createAssociations } = require('./associations/assocs');

const nodeModel = require('./models/node.model');
const recipeModel = require('./models/recipe.model');
const materialModel = require('./models/material.model');
const materialLogModel = require('./models/materiallog.model');
const groupModel = require('./models/group.model');
const userModel = require('./models/user.model');
const userNodeModel = require('./models/usernode.model');
const gearModel = require('./models/gear.model');
const tokenModel = require('./models/token.model');

const recipeIngredientAssoc = require('./associations/recipeIngredient.model');
const recipeProductAssoc = require('./associations/recipeProduct.model');
const nodeMaterialAssoc = require('./associations/nodeMaterial.model');

const modelDefiners = [
  nodeModel,
  recipeModel,
  materialModel,
  materialLogModel,
  groupModel,
  userModel,
  userNodeModel,
  gearModel,
  tokenModel,
];

const assocDefiners = [
  recipeIngredientAssoc,
  recipeProductAssoc,
  nodeMaterialAssoc,
];
modelDefiners.forEach((x) => x(sequelize));
assocDefiners.forEach((x) => x(sequelize));

// Create simple assocs with sequalize methods
createAssociations(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
