module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/add/{productId}',
    handler: (request, response) => {
      response({
        action: 'Product added',
        statusCode: 201,
      });
    },
  },
];
