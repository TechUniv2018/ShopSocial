const findAdmin = require('../routes/admin/helper/verifyAdmin');
const JWT = require('jsonwebtoken');
const secret = require('../routes/admin/helper/secretKey');

module.exports = (request, response) => {
  findAdmin(request.payload.email, request.payload.password).then((status) => {
    if ((status === 'valid')) {
      const obj = { email: request.payload.email };
      const token = JWT.sign(obj, secret);
      const cookieOptions = {
        ttl: 365 * 24 * 60 * 60 * 1000,
        encoding: 'none',
        isSecure: false,
        isHttpOnly: true,
        clearInvalid: false,
        strictHeader: true,
        path: '/',
      };
      response({
        message: 'Admin Verified ',
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
