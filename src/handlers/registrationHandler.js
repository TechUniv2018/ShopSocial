const Models = require('../../models');
const passwordHash = require('password-hash');


const handler = (request, response) => {
  Models.UserDetails
    .create({
      name: request.payload.userName,
      email: request.payload.email,
      password: passwordHash.generate(request.payload.password),
    })
    .then(() => {
      response('You are registered!').code(201);
    }).catch((error) => {
      if (error.message === 'Validation error') {
        response({
          message: 'email already belongs to an existing user',
          statusCode: 409,
        });
      } else {
        response({
          message: 'server error',
          statusCode: 503,
        });
      }
    });
};
module.exports = handler;
