module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/{productId}',
    handler: (request, response) => {
      response({
        statusCode: 404,
        error: 'Product not found',
      });
    },
  },
];
