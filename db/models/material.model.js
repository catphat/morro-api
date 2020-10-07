const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define("Material", {
    // The following specification of the 'id' attribute could be omitted
    // since it is the default.
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    priceNA: {
      type: DataTypes.INTEGER,
    },
    priceEU: {
      type: DataTypes.INTEGER,
    },
    countNA: {
      type: DataTypes.INTEGER,
    },
    countEU: {
      type: DataTypes.INTEGER,
    },
    floodedNA: {
      type: DataTypes.BOOLEAN,
    },
    floodedNA: {
      type: DataTypes.BOOLEAN,
    },
    maxedNA: {
      type: DataTypes.BOOLEAN,
    },
    maxedEU: {
      type: DataTypes.BOOLEAN,
    },
    codexBuyPrice: {
      type: DataTypes.INTEGER,
    },
    codexSellPrice: {
      type: DataTypes.INTEGER,
    },
  });
};
