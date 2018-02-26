module.exports = (sequelize, DataTypes) => {
  const CartsWSessions = sequelize.define('CartsWSessions', {
    cartID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sessionID: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return CartsWSessions;
};
