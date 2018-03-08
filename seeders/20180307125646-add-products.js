const rp = require('request-promise');
const Models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const categoriesArray = [
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0101000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0102000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0106000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0200000',
    ];
    const promiseArray = [];
    const dbInsertArray = [];
    categoriesArray.forEach((categoryUri) => {
      const options = {
        uri: categoryUri,
        json: true, // Automatically parses the JSON string in the response
      };
      promiseArray.push(rp(options));
    });
    return Promise.all(promiseArray).then((apiResponse) => {
      const insertToDbPromises = [];
      apiResponse.forEach((productArray) => {
        productArray.data.forEach((product) => {
          const productObject = {
            productID: product.id,
            name: product.name,
            price: product.price,
            upc: product.upc,
            description: product.description,
            manufacturer: product.manufacturer,
            model: product.model,
            image: product.image,
            category: product.categories[0].name,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          insertToDbPromises.push(Models.ProductDetails.findCreateFind({
            where: {
              productID: product.id,
            },
          }, {
            defaults: productObject,
          }));
        });
      });
      return Promise.all(insertToDbPromises);
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.destroy('ProductDetails', { truncate: true });
  },
};
