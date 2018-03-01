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
        CartsWSessions.hasMany(models.CartWProducts, {
          foreignKey: 'cartID',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return CartsWSessions;
};
