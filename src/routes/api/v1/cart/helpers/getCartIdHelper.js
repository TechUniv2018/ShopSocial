const Models = require('../../../../../../models/');

const getCartIdHelper = (userId) => {
  const getCartId = Models.CartsWSessions.findOne({
    where: {
      userID: userId,
    },
    attributes: ['cartID'],
  });
  return getCartId;
};


module.exports = getCartIdHelper;
