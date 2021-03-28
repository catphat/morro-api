module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  const { Recipe, Material, Group } = sequelize.models;
  const RecipeIngredient = sequelize.define(
    "RecipeIngredient",
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
  Recipe.hasMany(RecipeIngredient);
  RecipeIngredient.belongsTo(Recipe);
  RecipeIngredient.belongsTo(Group);
  RecipeIngredient.belongsTo(Material);
  Recipe.belongsToMany(Material, {
    through: RecipeIngredient,
    as: "ingredients",
  });
  Material.belongsToMany(Recipe, {
    through: RecipeIngredient,
    as: "matingredients",
  });
};
