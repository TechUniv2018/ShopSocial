const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');

module.exports = [].concat(getRequest, addProductById, addProductsByCategoryAndPrice);
