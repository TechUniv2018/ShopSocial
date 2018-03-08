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
          insertToDbPromises.push(Models.ProductDetails.create({
            productID: product.id,
            name: product.name,
            price: product.price,
            upc: product.upc,
            description: product.description,
            manufacturer: product.manufacturer,
            model: product.model,
            image: product.image,
            category: product.categories[0].name,
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
