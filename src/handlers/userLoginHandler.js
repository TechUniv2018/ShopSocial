const findUser = require('../routes/user/helper/verifyUser');
const JWT = require('jsonwebtoken');
const secret = require('../routes/user/helper/secretKey');
const Models = require('../../models');

module.exports = (request, response) => {
  findUser(request.payload.email, request.payload.password).then((status) => {
    if (status === 'valid') {
      Models.UserDetails.findOne({
        where: {
          email: request.payload.email,
        },
      }).then((UserDetail) => {
        Models.CartsWSessions.findOne({
          where: {
            userID: UserDetail.id,
          },
        }).then((cartDetail) => {
          const obj = {
            email: request.payload.email,
            cartID: cartDetail.cartID,
            name: UserDetail.name,
          };
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
            message: 'User verified ',
            statusCode: 200,
          }).header('Authorization', token).state('token', token, cookieOptions);
        });
      });
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
