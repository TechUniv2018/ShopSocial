const Models = require('../../../../../../models/');

const addCartForUserHelper = (userId) => {
  const CartObj = {

    sessionID: null,
    userID: userId,
  };
  const addCartId = Models.CartsWSessions.create(CartObj);
  return addCartId;
};
module.exports = addCartForUserHelper;
