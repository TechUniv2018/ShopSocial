const Models = require('../../../../../../models/');

const getProductsInCartHelper = (cartId) => {
  const getProducts = Models.CartsWProducts.findAll({
    where: {
      cartID: cartId,
    },
    attributes: ['productID'],
  });
  return getProducts;
};


module.exports = getProductsInCartHelper;
