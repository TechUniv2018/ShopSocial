const Models = require('../../../models');

const getUserFriends = {
  method: 'GET',
  path: '/friends',
  config: {
    auth: false,
  },
  handler: (request, response) => {
    const userId = request.query.id;
    Models.UserFriends.findAll({ where: { userId } }).then((userFriendRecords) => {
      const userFriendList = [];
      for (let i = 0; i < userFriendRecords.length; i += 1) {
        userFriendList.push(userFriendRecords[i].friendsEmail);
      }
      response({
        statusCode: 200,
        friendsList: userFriendList,
      });
    });
  },
};

module.exports = getUserFriends;
