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
    Models.UserDetails.findOne({ where: { email: friendsEmail } }).then((result) => {
      if (result !== null) {
        Models.UserDetails.findOne({ where: { id: userId } }).then((UserDetails) => {
          if (UserDetails.email === friendsEmail) {
            response({
              message: 'cannot Add Yourself As a friend',
              statusCode: 422,
            });
          } else {
            Models.UserFriends.findOrCreate({ where: { userId, friendsEmail } })
              .spread((user, created) => {
                if (created) {
                  response({
                    message: 'friend Added',
                    statusCode: 201,
                  });
                } else {
                  response({
                    message: 'friend Already Added',
                    statusCode: 409,
                  });
                }
              });
          }
        });
      } else {
        response({
          message: 'user whom you want to add as a friend doesnt exist',
          statusCode: 403,
        });
      }
    });
  },
};
module.exports = addFriend;
