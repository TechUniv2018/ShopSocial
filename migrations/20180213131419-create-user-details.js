
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserDetails', {
    userID: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserDetails'),
};
