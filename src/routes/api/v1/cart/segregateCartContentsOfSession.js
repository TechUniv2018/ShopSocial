const Models = require('../../../../../models');

// Accepts the session ID and segregates the items of the customers who were co-shopping previously

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/cart/segregateCartContentsOfSession',
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
            response({
              statusCode: 204,
            });
            return;
          }
          resultProducts.forEach((product) => {
            Models.CartsWSessions.findOne({
              attributes: ['cartID'],
              where: {
                userID: product.addedByUser,
              },
            }).then((resultUser) => {
              Models.CartsWProducts.create({
                cartID: resultUser.cartID,
                productID: product.productID,
                addedByUser: product.addedByUser,
              });
              Models.CartsWProducts.destroy({
                where: { id: product.id },
              });
            });
          });
        }).then(() => {
          response({
            statusCode: 200,
          });
        });
      }).catch(err => response({
        message: err.message,
        statusCode: 400,
      }));
    },
  },
];
