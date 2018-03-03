const Models = require('../../../../../../models/');
require('es6-promise');

const addProductsToCartHelper = (sessionId) => {
  console.log(sessionId);
  const GenerateTogetherCartId = new Promise((resolve, reject) => {
    const sessionObj = {

      userID: null,
      sessionID: sessionId,
    };
    Models.CartsWSessions.findOrCreate({ where: sessionObj }).spread((cart, created) => {
      const res = cart.get({ plain: true });
      // console.log(res);
      // console.log(res.cartID);
      resolve(res.cartID);
    }).catch((err) => { reject(err); });
  });
  return GenerateTogetherCartId;
};

module.exports = addProductsToCartHelper;

