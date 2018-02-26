const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');
const userRegistration = require('./user/userRegistration');
const removeProductByID = require('./api/v1/products/remove/removeProductByID');
const adminLoginRoute = require('./admin/adminLoginRoute');

const routes = [].concat(
  addProductById,
  addProductsByCategoryAndPrice,
  removeProductByID,
  userRegistration,
  adminLoginRoute,
  getRequest,
);
module.exports = routes;
