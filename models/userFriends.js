
module.exports = (sequelize, DataTypes) => {
  const UserFriends = sequelize.define('UserFriends', {
    userId: DataTypes.INTEGER,
    friendsEmail: DataTypes.STRING,
  }, {
    indexes: [
      {
        unique: true,
        fields: ['userId', 'friendsEmail'],
      },
    ],
  });
  UserFriends.sync();
  return UserFriends;
};
