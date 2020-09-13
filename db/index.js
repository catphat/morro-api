//Connect to database for materials, nodes etc.
const { Sequelize } = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(config.DB_URL);

function applyConnections(sequelize) {
  //const { instrument, orchestra } = sequelize.models;
  //orchestra.hasMany(instrument);
  //instrument.belongsTo(orchestra);
}

/*const modelDefiners = [
	require('./models/node.model'),
	require('./models/recipe.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}*/

applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
