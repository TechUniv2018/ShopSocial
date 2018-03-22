const Models = require('../../../models');

const addFriend = {
  method: 'POST',
  path: '/addFriend',
  config: {
    auth: false,
  },
  handler: (request, response) => {
    const { userId } = request.payload;
    const { friendsEmail } = request.payload;
    Models.UserFriends.findOrCreate({ where: { userId, friendsEmail } })
      .spread((user, created) => {
        if (created) {
          response({
            message: 'friendAdded',
            statusCode: 200,
          });
        } else {
          response({
            message: 'friendAlreadyAdded',
            statusCode: 409,
          });
        }
      });
  },
};
module.exports = addFriend;
