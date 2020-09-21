const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define("Gear", {
    // The following specification of the 'id' attribute could be omitted
    // since it is the default.
    name: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    stacks: {
      type: DataTypes.STRING,
    },
    attempts: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
  });
};
