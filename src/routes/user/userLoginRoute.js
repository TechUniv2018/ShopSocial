const Joi = require('joi');
const userLoginHandler = require('../../handlers/userLoginHandler');

const userLoginRoute = {
  method: 'POST',
  path: '/user/login',
  config: {
    auth: false,
    validate: {
      payload: Joi.object({
        password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required(),
        email: Joi.string().email().required(),
      }),
    },
  },
  handler: userLoginHandler,
};

module.exports = userLoginRoute;
