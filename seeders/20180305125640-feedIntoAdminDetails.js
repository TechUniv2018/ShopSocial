const Models = require('../models');
const passwordHash = require('password-hash');


module.exports = {
  up: (queryInterface, Sequelize) => Models.AdminDetails.bulkCreate([{
    email: 'admin1@gmail.com',
    password: passwordHash.generate('Admin@1234'),
    name: 'Admin_1',
  }, {
    email: 'admin2@gmail.com',
    password: passwordHash.generate('Admin@12345'),
    name: 'Admin_2',
  }]).then(res => console.log(res)),

  down: (queryInterface, Sequelize) => Models.AdminDetails.destroy({ truncate: true }),
};
