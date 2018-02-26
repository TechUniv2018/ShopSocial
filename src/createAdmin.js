const Models = require('../models');
const passwordHash = require('password-hash');

Models.AdminDetails.create({
  email: 'admin@gmail.com',
  password: passwordHash.generate('Admin@1234'),
  name: 'Admin',
});
