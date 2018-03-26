const Models = require('../../../../../models');
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const queryResultDecomposer = queryResult => ({
  productID: queryResult.productID,
  name: queryResult.name,
});

const getProductByProductName = (request, response) => {
  const requestAllias = request.params.productname;
  Models.ProductDetails.findAll({
    where: {
      name: {
        [Op.like]: `%${requestAllias}%`,
      },
    },
    limit: 10,
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
    response({
      statusCode: 404,
      error: 'Products unavailable',
    });
  });
};

module.exports = [
  {
    method: 'GET',
    path: '/search/{productname}',
    config: {
      auth: {
        mode: 'optional',
      },
    },
    handler: getProductByProductName,
  },
];

