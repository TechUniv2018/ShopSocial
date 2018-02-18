const registrationHandler = require('../../handlers/registrationHandler');

module.exports = {
  method: 'POST',
  path: '/user/register',
  handler: registrationHandler,
};
