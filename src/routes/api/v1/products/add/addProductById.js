const getProductByID = require('../getProductById');
const Models = require('../../../../../../models/');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/add/{productId}',
    handler: (request, response) => {
      getProductByID(request.params.productId).then((result) => {
        response({
          action: 'Product added',
          statusCode: 201,
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
