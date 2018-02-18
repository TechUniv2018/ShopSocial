
module.exports = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define('OrderDetails', {
    orderID: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    userIDs: DataTypes.ARRAY(DataTypes.STRING),
    productIDs: DataTypes.ARRAY(DataTypes.INTEGER),
    productPrices: DataTypes.ARRAY(DataTypes.FLOAT),
    orderStatus: DataTypes.ENUM('FULFILLED', 'CANCELLED', 'ONGOING'),
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return OrderDetails;
};
