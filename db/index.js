//Connect to database for materials, nodes etc.
const { Sequelize } = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(config.DB_URL, {
  logging: config.ENV != "development",
});

const { createAssociations } = require("./associations/assocs");

const modelDefiners = [
  require("./models/node.model"),
  require("./models/recipe.model"),
  require("./models/material.model"),
  require("./models/group.model"),
  require("./models/user.model"),
  require("./models/usernode.model"),
  require("./models/gear.model"),
  require("./models/token.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Create complex assocs with assoc models
const assocDefiners = [
  require("./associations/recipeMaterial.model"),
  require("./associations/recipeProduct.model"),
  require("./associations/nodeMaterial.model"),
];
for (const assocDefiner of assocDefiners) {
  assocDefiner(sequelize);
}

// Create simple assocs with sequalize methods
createAssociations(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
