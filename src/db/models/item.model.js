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
    },
  );
  Item.associate = ({ MainCategory }) => {
    Item.belongsTo(MainCategory);
  };
  return Item;
};

module.exports = model;
