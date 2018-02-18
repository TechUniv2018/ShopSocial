const getProductsByCategoryAndPrice = require('../getProductsByCategoryAndPrice');
const addProductsToDatabase = require('./addProductsToDatabase');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/products/add/',
    handler: (request, response) => {
      getProductsByCategoryAndPrice(request.payload).then((remoteFetchResponse) => {
        addProductsToDatabase(remoteFetchResponse.data).then((dbInsertResponse) => {
          console.log(dbInsertResponse);
          let addedCount = 0;
          let updatedCount = 0;
          dbInsertResponse.forEach((insertedValue) => {
            if (insertedValue) {
              addedCount += 1;
            } else {
              updatedCount += 1;
            }
          });
          response({
            statusCode: 201,
            action: `${addedCount} added, ${updatedCount} updated`,
          });
        });
      }).catch(() => {
        response({
          statusCode: 404,
          action: 'No product added',
        });
      });
    },
  },
];
