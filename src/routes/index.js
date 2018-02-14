const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');

module.exports = [].concat(getRequest, addProductById);
