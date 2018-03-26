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
          if (resultProducts.length === 0) {
            console.log(`length${resultProducts.length}`);
            response({
              products: [],
              statusCode: 200,
            });
          }
          const products = [];
          resultProducts.forEach((product, idx) => {
            Models.ProductDetails.findOne({
              where: {
                productID: product.productID,
              },
            }).then((productDetails) => {
              console.log('++++++++++++++', productDetails);
              products.push({
                productID: productDetails.productID,
                name: productDetails.name,
                image: productDetails.image,
                price: productDetails.price,
              });
              if (idx + 1 === resultProducts.length) {
                response({
                  products,
                  statusCode: 200,
                });
              }
            });
          });
        });
      }).catch(console.log);
    },
  },
];
