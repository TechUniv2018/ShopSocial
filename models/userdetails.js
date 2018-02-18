
module.exports = (sequelize, DataTypes) => {
  const UserDetails = sequelize.define('UserDetails', {
    userID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return UserDetails;
};
