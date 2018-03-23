module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserFriends', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: 'actions_unique',
    },
    friendsEmail: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: 'actions_unique',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    uniqueKeys: {
      actions_unique: {
        fields: ['userId', 'friendsEmail'],
      },
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserFriends'),
};
