const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');
const getProductById = require('./api/v1/products/getProductById');
const getProductsByCategory = require('./api/v1/products/getProductsByCategory');
const userRegistration = require('./user/userRegistration');
const removeProductByID = require('./api/v1/products/remove/removeProductByID');
const adminLoginRoute = require('./admin/adminLoginRoute');
const userLoginRoute = require('./user/userLoginRoute');

const routes = [].concat(
  addProductById,
  addProductsByCategoryAndPrice,
  removeProductByID,
  userRegistration,
  adminLoginRoute,
  getRequest,
  getProductById,
  getProductsByCategory,
  userLoginRoute,
);
module.exports = routes;
