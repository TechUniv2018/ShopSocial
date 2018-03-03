const Models = require('../../../../../../models/');

const addCartForUserHelper = (userId) => {
  const CartObj = {

    sessionID: null,
    userID: userId,
  };
  // console.log('hello');
  const addCartId = Models.CartsWSessions.create(CartObj);
  return addCartId;
};
module.exports = addCartForUserHelper;
