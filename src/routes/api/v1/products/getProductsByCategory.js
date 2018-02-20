module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/category/{productCategory}',
    handler: (request, response) => {
      response(true);
    },
  },
];
