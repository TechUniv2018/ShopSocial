const Models = require('../../models');


const handler = (request, response) => {
  Models.UserDetails
    .create({
      name: request.payload.userName,
      email: request.payload.email,
      password: request.payload.password,
    })
    .then(() => {
      response('You are registered!').code(201);
    }).catch(() => {
      response('This email belongs to an existing user.').code(409);
    });
};
module.exports = handler;
