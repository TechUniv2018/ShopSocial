

const removeProductFromCartHelper = require('./helpers/removeProductFromCartHelper');

// Api expects two arguments in payload. CartId and ProductId
// Returns 1 if product was removed
// Returns 0 if product was not in the cart
// Request type delete
// Returns object with key statusCode, message(delete result) and header code

module.exports = [
  {
    method: 'DELETE',
    path: '/api/v1/cart/removeFromCart',
    config: { auth: false },
    handler: (request, response) => {
      removeProductFromCartHelper((request)).then((result) => {
        response({
          // message: 'Product removed from Cart',
          message: result,

          statusCode: 200,
        }).code(200);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: error.code,
        }).code(404);
      });
    },
  },
];
