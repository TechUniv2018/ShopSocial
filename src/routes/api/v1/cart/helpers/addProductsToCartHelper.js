const Models = require('../../../../../../models/');

const addProductsToCartHelper = (requestfromurl) => {
  const cartId = JSON.parse(JSON.stringify(requestfromurl.payload.cartId));
  const productId = JSON.parse(JSON.stringify(requestfromurl.payload.productId));
  const userId = JSON.parse(JSON.stringify(requestfromurl.payload.userId));
  const promiseinserttocart = new Promise((resolve, reject) => {
    Models.CartsWProducts.findAll({
      where: {
        cartID: cartId,
        productID: productId,
      },
    }).then((searchResponse) => {
      console.log('len', searchResponse);
      console.log('len', searchResponse.length);
      if (searchResponse.length === 0) {
        const productObj = {
          cartID: cartId,
          productID: productId,
          addedByUser: userId,
        };

        Models.CartsWProducts.create(productObj).then(() => {
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
