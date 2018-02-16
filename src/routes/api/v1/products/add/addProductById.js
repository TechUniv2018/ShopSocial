const getProductByID = require('../getProductById');
const Models = require('../../../../../../models/');

const insertProductIntoDatabase = productObject => Models.ProductDetails.create(productObject);

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/products/add/{productId}',
    handler: (request, response) => {
      getProductByID(request.params.productId).then((result) => {
        let productCategory = result.categories;
        if (productCategory.length === 0) {
          productCategory = 'undefined';
        } else {
          productCategory = productCategory[0].name;
        }
        const productObject = {
          productID: result.id,
          name: result.name,
          price: result.price,
          upc: result.upc,
          description: result.description,
          manufacturer: result.manufacturer,
          model: result.model,
          image: result.image,
          category: productCategory,
        };
        insertProductIntoDatabase(productObject).then((res) => {
          response({
            action: 'Product added',
            statusCode: 201,
          });
        });
      }).catch((error) => {
        response({
          action: error.error.name,
          statusCode: error.error.code,
        });
      });
    },
  },
];
