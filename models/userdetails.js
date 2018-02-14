
module.exports = (sequelize, DataTypes) => {
  const UserDetails = sequelize.define('UserDetails', {
    UserId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return UserDetails;
};
