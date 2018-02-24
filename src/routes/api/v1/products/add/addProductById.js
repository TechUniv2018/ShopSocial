const getProductByID = require('./helpers/getProductById');
const AddProductsToDB = require('./helpers/addProductsToDatabase');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/add/{productId}',
    handler: (request, response) => {
      getProductByID(request.params.productId).then((result) => {
        const productsArray = [];
        productsArray[0] = result;
        AddProductsToDB(productsArray).then((action) => {
          if (action[0]) {
            response({
              action: 'Product added',
              statusCode: 201,
            });
          } else {
            response({
              action: 'Product updated',
              statusCode: 201,
            });
          }
        });
      }).catch((error) => {
        response({
          action: error.error.name,
          statusCode: error.error.code,
        });
      });
    },
  },
];
