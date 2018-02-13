
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserDetails', {
    UserId: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.STRING,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Email: {
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
