const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');
const getProductById = require('./api/v1/products/getProductById');
const getProductsByCategory = require('./api/v1/products/getProductsByCategory');

module.exports = [].concat(
  getRequest,
  addProductById,
  addProductsByCategoryAndPrice,
  getProductById,
  getProductsByCategory,
);
