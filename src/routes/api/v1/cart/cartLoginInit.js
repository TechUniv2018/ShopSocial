
const getCartIdHelper = require('./helpers/getCartIdHelper');

// Api expects GET request
// parameters expected userId
// returns cartId in reponse with key IdCart
module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cart/initCart/{userId}',
    config: { auth: false },
    handler: (request, response) => {
      getCartIdHelper(request.params.userId).then((result) => {
        response({
          message: result,
          statusCode: 200,
        }).code(200);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: 404,
        }).code(404);
      });
    },
  },
];
