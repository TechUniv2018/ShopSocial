const rp = require('request-promise');
const addProductsToDb = require('../src/routes/api/v1/products/add/helpers/addProductsToDatabase');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const categoriesArray = [
      'https://shop-social-product-api.herokuapp.com/products?category.name=TV%20%26%20Home%20Theater',
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
          dbInsertArray.push(productObject);
        });
        insertToDbPromises.push(queryInterface.bulkInsert('ProductDetails', dbInsertArray));
      });
      return Promise.all(insertToDbPromises);
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.destroy('ProductDetails', { truncate: true });
  },
};
