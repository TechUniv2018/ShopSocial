const Models = require('../../../../../../models/');

const removeProductFromCartHelper = (requestfromurl) => {
  const cartId = JSON.parse(JSON.stringify(requestfromurl.payload.cartId));
  const productId = JSON.parse(JSON.stringify(requestfromurl.payload.productId));
  const remProduct = Models.CartsWProducts.destroy({
    where: {
      cartID: cartId,
      productID: productId,
    },

  });
  return remProduct;
};
module.exports = removeProductFromCartHelper;
