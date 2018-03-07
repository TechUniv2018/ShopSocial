const Models = require('../../../../../models/');

const queryResultDecomposer = queryResult => ({
  productID: queryResult.productID,
  price: queryResult.price,
  name: queryResult.name,
  description: queryResult.description,
  manufacturer: queryResult.manufacturer,
  model: queryResult.model,
  category: queryResult.category,
  image: queryResult.image,
  upc: queryResult.upc,
});

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/category/{productCategory}',
    config: {
      auth: false,
    },
    handler: (request, response) => {
      const fromPrice = request.query.fromPrice ? request.query.fromPrice : 0;
      const toPrice = request.query.toPrice ? request.query.toPrice : 1000000;
      Models.ProductDetails.findAll({
        where: {
          category: request.params.productCategory,
          price: {
            $between: [fromPrice, toPrice],
          },
        },
      }).then((queryResult) => {
        if (queryResult.length === 0) {
          response({
            statusCode: 404,
            error: 'Product/s not found',
          });
        } else {
          const decomposedQueryResult = [];
          queryResult.forEach((productObject) => {
            decomposedQueryResult.push(queryResultDecomposer(productObject));
          });
          response({
            statusCode: 200,
            data: decomposedQueryResult,
          });
        }
      }).catch((queryError) => {
        console.log(queryError);
        response({
          statusCode: 404,
          error: 'Error',
        });
      });
    },
  },
];
