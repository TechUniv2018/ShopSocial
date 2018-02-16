module.exports = [
  {
    method: 'POST',
    path: '/api/v1/products/add/',
    handler: (request, response) => {
      response({
        statusCode: 201,
        result: 'Success'
      })
    },
  },
];
