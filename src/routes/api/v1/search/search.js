const Models = require('../../../../../models');
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const queryResultDecomposer = queryResult => ({
  productID: queryResult.productID,
  name: queryResult.name,
});

const getProductByProductName = (request, response, redisClient) => {
  const requestAllias = request.params.productname;
  redisClient.hkeys('productName', (error, res) => {
    const searchKeys = [];
    res.forEach((product) => {
      if (product.includes(requestAllias)) {
        searchKeys.push(product);
      }
    });
    if (searchKeys.length === 0) {
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
    } else {
      redisClient.hmget('productName', searchKeys, (e, value) => {
        console.log('Served from cache');
        console.log(e, value);
        response({
          statusCode: 200,
          data: value.map((product) => {
            const parsedJSON = JSON.parse(product);
            console.log(parsedJSON);
            return ({ productID: parsedJSON.id, name: parsedJSON.name });
          }),
        });
      });
    }
  });
};

module.exports = redisClient => [
  {
    method: 'GET',
    path: '/search/{productname}',
    config: {
      auth: {
        mode: 'optional',
      },
    },
    handler: (request, response) => getProductByProductName(request, response, redisClient),
  },
];

