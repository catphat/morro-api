module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const { Recipe, Material, Group } = sequelize.models;
  const RecipeMaterial = sequelize.define(
    "RecipeMaterial",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  Recipe.hasMany(RecipeMaterial);
  RecipeMaterial.belongsTo(Recipe);
  RecipeMaterial.belongsTo(Group);
  RecipeMaterial.belongsTo(Material);
};
