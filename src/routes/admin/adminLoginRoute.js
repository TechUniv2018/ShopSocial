const Joi = require('joi');
const adminLoginHandler = require('../../handlers/adminLoginHandler');

const adminLoginRoute = {
  method: 'POST',
  path: '/admin/login',
  config: {
    auth: false,
    validate: {
      payload: Joi.object({
        password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required(),
        email: Joi.string().email().required(),
      }),
    },
  },
  handler: adminLoginHandler,
};

module.exports = adminLoginRoute;
