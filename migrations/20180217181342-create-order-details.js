
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('OrderDetails', {
    orderID: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    userIDs: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    productIDs: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
    productPrices: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.FLOAT),
    },
    orderStatus: {
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
