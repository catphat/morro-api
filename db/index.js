//Connect to database for materials, nodes etc.
const { Sequelize } = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(config.DB_URL);

const { createAssociations } = require("./assocs");

const modelDefiners = [
  require("./models/node.model"),
  require("./models/recipe.model"),
  require("./models/user.model"),
  require("./models/material.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

createAssociations(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
