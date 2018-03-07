const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');
const getProductById = require('./api/v1/products/getProductById');
const getProductsByCategory = require('./api/v1/products/getProductsByCategory');
const userRegistration = require('./user/userRegistration');
const removeProductByID = require('./api/v1/products/remove/removeProductByID');
const adminLoginRoute = require('./admin/adminLoginRoute');
const addProductToCart = require('./api/v1/cart/addProductToCart');
const adduserIdToCart = require('./api/v1/cart/adduserIdToCart');
const cartLoginInit = require('./api/v1/cart/cartLoginInit');
const cartTogetherSessionInit = require('./api/v1/cart/cartTogetherSessionInit');
const destroyTogetherCart = require('./api/v1/cart/destroyTogetherCart');
const fetchCart = require('./api/v1/cart/fetchCart');
const removeFromCart = require('./api/v1/cart/removeFromCart');

const routes = [].concat(
  addProductById,
  addProductsByCategoryAndPrice,
  removeProductByID,
  userRegistration,
  adminLoginRoute,
  getRequest,
  getProductById,
  getProductsByCategory,
  addProductToCart,
  adduserIdToCart,
  cartLoginInit,
  cartTogetherSessionInit,
  destroyTogetherCart,
  fetchCart,
  removeFromCart,


);
module.exports = routes;
