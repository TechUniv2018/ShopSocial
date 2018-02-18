const Joi = require('joi');

module.exports = Joi.object({
  userName: Joi.string().min(5).max(15).regex(/^[a-z][a-z0-9_]*$/i),
  password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
  email: Joi.string().email(),
})
  .options({ allowUnknown: false });
