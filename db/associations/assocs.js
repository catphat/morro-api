function createAssociations(sequelize) {
  const { User, UserNode, Node } = sequelize.models;
  UserNode.belongsTo(User);
  User.hasMany(UserNode);
  UserNode.belongsTo(Node);
}

module.exports = { createAssociations };
