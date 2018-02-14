
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProductDetails', {
    productID: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    manufacturer: {
      type: Sequelize.STRING,
    },
    model: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    upc: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ProductDetails'),
};
