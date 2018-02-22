module.exports = (sequelize, DataTypes) => {
  const UserDetails = sequelize.define('AdminDetails', {
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
