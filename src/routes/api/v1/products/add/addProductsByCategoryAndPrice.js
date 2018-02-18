const getProductsByCategoryAndPrice = require('../getProductsByCategoryAndPrice');
const addProductsToDatabase = require('./addProductsToDatabase');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/products/add/',
    handler: (request, response) => {
      getProductsByCategoryAndPrice(request.payload).then((remoteFetchResponse) => {
        addProductsToDatabase(remoteFetchResponse.data).then((dbInsertResponse) => {
          let addedIDs = '';
          dbInsertResponse.forEach((insertedValue) => {
            addedIDs += `${insertedValue.dataValues.productID};`;
          });
          response({
            statusCode: 201,
            action: 'Product/s added',
            added: addedIDs,
          });
        });
      }).catch(() => {
        response({
          statusCode: 404,
          action: 'No product added',
          added: ';',
        });
      });
    },
  },
];
