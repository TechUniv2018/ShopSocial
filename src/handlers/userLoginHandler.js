const findUser = require('../routes/user/helper/verifyUser');
const JWT = require('jsonwebtoken');
const secret = require('../routes/user/helper/secretKey');

module.exports = (request, response) => {
  findUser(request.payload.email, request.payload.password).then((status) => {
    if ((status === 'valid')) {
      const obj = { email: request.payload.email };
      const token = JWT.sign(obj, secret);
      const cookieOptions = {
        ttl: 24 * 60 * 60 * 1000,
        encoding: 'none',
        isSecure: false,
        isHttpOnly: true,
        clearInvalid: false,
        strictHeader: true,
        path: '/',
      };
      response({
        message: 'user Verified ',
        statusCode: 200,
      }).header('Authorization', token).state('token', token, cookieOptions);
    } else if (status === 'invalid') {
      response({
        message: 'invalid credentials',
        statusCode: 401,
      });
    } else {
      response({
        message: 'server error',
        statusCode: 503,
      });
    }
  });
};
