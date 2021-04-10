const model = (sequelize, DataTypes) => sequelize.define(
  'MainCategory',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  },
);

module.exports = model;
