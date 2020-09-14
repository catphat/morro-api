const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const RecipeMaterial = sequelize.define("RecipeMaterial", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    group: {
      type: DataTypes.BOOLEAN,
    },
    isProduct: {
      type: DataTypes.BOOLEAN,
    },
    recipeId: {
      type: DataTypes.INTEGER,
    },
    materialId: {
      type: DataTypes.INTEGER,
    },
    groupId: {
      type: DataTypes.INTEGER,
    },
  });
};
