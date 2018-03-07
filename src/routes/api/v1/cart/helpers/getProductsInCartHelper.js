const Models = require('../../../../../../models/');

const getProductsInCartHelper = (cartId) => {
  console.log(cartId);
  const getProducts = Models.CartsWProducts.findAll({
    where: {
      cartID: cartId,
    },
    attributes: ['productID'],
  });
  return getProducts;
};


module.exports = getProductsInCartHelper;
