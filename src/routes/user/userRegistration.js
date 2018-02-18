const registrationHandler = require('../../handlers/registrationHandler');
const registrationValidation = require('../../schemes/registrationValidation');

module.exports = {
  method: 'POST',
  path: '/user/register',
  config: {
    auth: false,
    validate: {
      payload: registrationValidation,
    },
  },
  handler: registrationHandler,
};
