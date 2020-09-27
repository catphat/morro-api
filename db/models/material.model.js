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
    totalTradeCountNA: {
      type: DataTypes.BIGINT,
    },
    totalTradeCountEU: {
      type: DataTypes.BIGINT,
    },
    countNA: {
      type: DataTypes.INTEGER,
    },
    countEU: {
      type: DataTypes.INTEGER,
    },
    codexBuyPrice: {
      type: DataTypes.INTEGER,
    },
    codexSellPrice: {
      type: DataTypes.INTEGER,
    },
  });
};
