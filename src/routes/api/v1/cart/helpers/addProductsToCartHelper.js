const Models = require('../../../../../../models/');

require('es6-promise');

const addProductsToCartHelper = (requestfromurl) => {
//   const cartId = requestfromurl.cartId;
//   const productId = requestfromurl.productId;
  // const { cartId, productId, userId } = requestfromurl;
  const cartId = JSON.parse(JSON.stringify(requestfromurl.payload.cartId));
  const productId = JSON.parse(JSON.stringify(requestfromurl.payload.productId));
  const userId = JSON.parse(JSON.stringify(requestfromurl.payload.userId));
  console.log(cartId);
  console.log(productId);
  console.log(userId);
  // console.log(requestfromurl);
  const promiseinserttocart = new Promise((resolve, reject) => {
    Models.CartsWProducts.findAll({
      where: {
        cartID: cartId,
        productID: productId,
      },
    }).then((searchres) => {
      console.log('len', searchres);
      console.log('len', searchres.length);
      if (searchres.length === 0) {
        const productObj = {
          cartID: cartId,
          productID: productId,
          addedByUser: userId,
        };

        Models.CartsWProducts.create(productObj).then(() => {
          console.log('ddd');
          resolve('Product Added to Cart');
        }).catch((err) => {
          reject(err);
        });
      } else {
        reject(new Error('Product already in cart'));
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
  return promiseinserttocart;
};

module.exports = addProductsToCartHelper;

