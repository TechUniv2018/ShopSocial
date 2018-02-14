const getRequest = require('./getRequest');
const addProductById = require('./api/v1/addProductById');

module.exports = [].concat(getRequest, addProductById);
