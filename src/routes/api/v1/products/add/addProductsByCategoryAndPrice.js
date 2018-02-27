const getProductsByCategoryAndPrice = require('./helpers/getProductsByCategoryAndPrice');
const addProductsToDatabase = require('./helpers/addProductsToDatabase');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/products/add/',
    config: { auth: false },
    handler: (request, response) => {
      getProductsByCategoryAndPrice(JSON.parse(JSON.stringify(request.payload)))
        .then((remoteFetchResponse) => {
          addProductsToDatabase(remoteFetchResponse.data).then((dbInsertResponse) => {
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
