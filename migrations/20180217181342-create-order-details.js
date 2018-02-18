
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('OrderDetails', {
    OrderID: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    UserIDs: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    ProductIDs: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    ProductPrices: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.FLOAT),
    },
    OrderStatus: {
      allowNull: false,
      type: Sequelize.ENUM('FULFILLED', 'CANCELLED', 'ONGOING'),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('OrderDetails'),
};
