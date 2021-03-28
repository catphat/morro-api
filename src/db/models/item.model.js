const model = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
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
      icon: {
        type: DataTypes.STRING,
      },
    },
  );
  Item.associate = ({ SubCategory }) => {
    Item.belongsTo(SubCategory);
  };
  return Item;
};

module.exports = model;
