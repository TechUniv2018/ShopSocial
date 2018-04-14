const rp = require('request-promise');
const Models = require('../models');
const redis = require('redis');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const redisClient = redis.createClient();
    redisClient.on('connect', () => {
      console.log('Connected to redis');
    });
    const categoriesLinkArray = [
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0101000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0102000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0106000',
      'http://shop-social-product-api.herokuapp.com/products?$limit=25&category.id=abcat0200000',
    ];
    const categoriesNameArray = [
      'TVs',
      'DVD Players',
      'TV & Home Theater',
      'Audio',
    ];
    const promiseArray = [];
    categoriesLinkArray.forEach((categoryUri) => {
      const options = {
        uri: categoryUri,
        json: true, // Automatically parses the JSON string in the response
      };
      promiseArray.push(rp(options));
    });
    return Promise.all(promiseArray).then((apiResponse) => {
      const insertToDbPromises = [];
      let categoryCounter = 0;
      apiResponse.forEach((productArray) => {
        const categoryName = categoriesNameArray[categoryCounter];
        productArray.data.forEach((product) => {
          redisClient.hset('products', product.name.toString(), JSON.stringify({ ...product, category: categoryName }));
          insertToDbPromises.push(Models.ProductDetails.create({
            productID: product.id,
            name: product.name,
            price: product.price,
            upc: product.upc,
            description: product.description,
            manufacturer: product.manufacturer,
            model: product.model,
            image: product.image,
            category: categoryName,
          }));
        });
        categoryCounter += 1;
      });
      redisClient.quit();
      return Promise.all(insertToDbPromises);
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.destroy('ProductDetails', { truncate: true });
  },
};
