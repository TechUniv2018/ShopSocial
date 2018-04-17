const Models = require('../../../../../../models/');

const destroyTogetherCartHelper = (sessionId) => {
  const remSessionCart = Models.CartsWSessions.destroy({
    where: {
      sessionID: sessionId,
    },

  });
  return remSessionCart;
};
module.exports = destroyTogetherCartHelper;
