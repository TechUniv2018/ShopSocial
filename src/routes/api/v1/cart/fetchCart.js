
const getProductsInCartHelper = require('./helpers/getProductsInCartHelper');


// Front end requests for all products in cart
// Cart id is sent
// Array of objects returned with key for each object as  ProductID
module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cart/fetchCart/{cartId}',
    config: { auth: false },
    handler: (request, response) => {
      getProductsInCartHelper(request.params.cartId).then((result) => {
        response({
          products: result,
          statusCode: 200,
        }).code(200);
      }).catch((error) => {
        response({
          action: error.error.name,
          statusCode: error.error.code,
        }).code(404);
      });
    },
  },
];
