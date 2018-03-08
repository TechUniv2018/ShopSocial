const Models = require('../../models');
const passwordHash = require('password-hash');


const handler = (request, response) => {
  Models.UserDetails
    .create({
      name: request.payload.name,
      email: request.payload.email,
      password: passwordHash.generate(request.payload.password),
    })
    .then(() => {
      response({
        message: 'You are registered!',
        statusCode: 201,
      });
    }).catch((error) => {
      if (error.message === 'Validation error') {
        response({
          message: 'Email already belongs to an existing user',
          statusCode: 409,
        });
      } else {
        response({
          message: 'Server error',
          statusCode: 503,
        });
      }
    });
};
module.exports = handler;
