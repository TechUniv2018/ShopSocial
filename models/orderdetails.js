
module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define('OrderDetails', {
    OrderID: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    UserIDs: DataTypes.ARRAY(DataTypes.STRING),
    ProductIDs: DataTypes.ARRAY(DataTypes.INTEGER),
    ProductPrices: DataTypes.ARRAY(DataTypes.FLOAT),
    OrderStatus: DataTypes.ENUM('FULFILLED', 'CANCELLED', 'ONGOING'),
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return OrderDetails;
};
