
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CartsWProducts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cartID: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'CartsWSessions',
        key: 'cartID',
      },
    },
    productID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'ProductDetails',
        key: 'productID',
      },
    },
    addedByUser: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'UserDetails',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }).then(() => queryInterface.addConstraint('CartsWProducts', ['cartID', 'productID', 'addedByUser'], {
    type: 'unique',
    name: 'CartsWProducts_unique_cartID_productID_addedByUser',
  })),
  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('CartsWProducts', 'CartsWProducts_unique_cartID_productID_addedByUser')
    .then(() => queryInterface.dropTable('CartsWProducts')),
};
