const Models = require('../../../../../models');

// Accepts the session ID and segregates the items of the customers who were co-shopping previously

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/cart/getCartContentsOfSession',
    config: { auth: false },
    handler: (request, response) => {
      Models.CartsWSessions.findOne({
        attributes: ['cartID'],
        where: {
          sessionID: request.payload.sessionID,
        },
      }).then((resultCart) => {
        const { cartID } = resultCart;
        Models.CartsWProducts.findAll({
          where: {
            cartID,
          },
        }).then((resultProducts) => {
          const products = [];
          resultProducts.forEach((product) => {
            Models.ProductDetails.findOne({
              where: {
                productID: product.productID,
              },
            }).then((productDetails) => {
              products.push({
                productID: productDetails.productID,
                name: productDetails.name,
                image: productDetails.image,
                price: productDetails.price,
              });
            });
          });
          response({
            products,
            statusCode: 200,
          });
        });
      }).catch(console.log);
    },
  },
];
