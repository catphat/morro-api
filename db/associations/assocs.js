function createAssociations(sequelize) {
  const { User, UserNode, Node } = sequelize.models;
  UserNode.belongsTo(User);
  UserNode.hasOne(Node);
  User.hasMany(UserNode);
}

module.exports = { createAssociations };
