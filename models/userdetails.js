
module.exports = (sequelize, DataTypes) => {
  const UserDetails = sequelize.define('UserDetails', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    classMethods: {
      associate(models) {
        UserDetails.hasMany(models.CartWProducts, {
          foreignKey: 'addedByUser',
          onDelete: 'CASCADE',
        });
        UserDetails.hasMany(models.CartWSessions, {
          foreignKey: 'userID',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return UserDetails;
};
