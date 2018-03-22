const getRequest = require('./getRequest');
const addProductById = require('./api/v1/products/add/addProductById');
const addProductsByCategoryAndPrice = require('./api/v1/products/add/addProductsByCategoryAndPrice');
const getProductById = require('./api/v1/products/getProductById');
const getProductsByCategory = require('./api/v1/products/getProductsByCategory');
const userRegistration = require('./user/userRegistration');
const removeProductByID = require('./api/v1/products/remove/removeProductByID');
const adminLoginRoute = require('./admin/adminLoginRoute');
const userLoginRoute = require('./user/userLoginRoute');
const userLogout = require('./user/userLogout');
const adminLogout = require('./admin/adminLogout');
const addProductToCart = require('./api/v1/cart/addProductToCart');
const adduserIdToCart = require('./api/v1/cart/adduserIdToCart');
const cartLoginInit = require('./api/v1/cart/cartLoginInit');
const cartTogetherSessionInit = require('./api/v1/cart/cartTogetherSessionInit');
const destroyTogetherCart = require('./api/v1/cart/destroyTogetherCart');
const fetchCart = require('./api/v1/cart/fetchCart');
const removeFromCart = require('./api/v1/cart/removeFromCart');
const getCartContentsOfSession = require('./api/v1/cart/getCartContentsOfSession');
const segregateCartContentsOfSession = require('./api/v1/cart/segregateCartContentsOfSession');
const getUserFriends = require('./user/getFriends');
const addFriend = require('./user/addFriend');

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
  userLoginRoute,
  userLogout,
  adminLogout,
  getCartContentsOfSession,
  segregateCartContentsOfSession,
  getUserFriends,
  addFriend,
);
module.exports = routes;
