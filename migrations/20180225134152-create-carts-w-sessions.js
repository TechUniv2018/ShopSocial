
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CartsWSessions', {
    cartID: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    sessionID: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    userID: {
      type: Sequelize.INTEGER,
      allowNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('CartsWSessions'),
};
