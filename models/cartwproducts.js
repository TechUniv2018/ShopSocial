
module.exports = (sequelize, DataTypes) => {
  const CartsWProducts = sequelize.define('CartsWProducts', {
    cartID: DataTypes.UUID,
    productID: DataTypes.INTEGER,
    addedByUser: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        CartsWProducts.belongsTo(models.CartsWSessions, {
          foreignKey: 'cartID',
        });
        CartsWProducts.belongsTo(models.ProductDetails, {
          foreignKey: 'productID',
        });
        CartsWProducts.belongsTo(models.UserDetails, {
          foreignKey: 'addedByUser',
        });
      },
    },
  });
  return CartsWProducts;
};
