

const addProductsToCartHelper = require('./helpers/addProductsToCartHelper');

// Api expects post request
// This is used by user to add a product to cart
// Duplicate products not allowed and message appropriately sent
// Prarameters expected in payload: userId, productId, and cartId (case must match for key names)
// Ensure userId, productId and cartId provided are already
// in their respective tables as foreign key is referenced
// Response returns string message and statusCode  and header code
module.exports = [
  {
    method: 'POST',
    path: '/api/v1/cart/addToCart',
    config: { auth: false },
    handler: (request, response) => {
      addProductsToCartHelper(request).then((result) => {
        response({
          message: result,
          statusCode: 201,
        }).code(201);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: 400,
        }).code(400);
      });
    },
  },
];
