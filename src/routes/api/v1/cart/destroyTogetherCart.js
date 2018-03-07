
const destroyTogetherCartHelper = require('./helpers/destroyTogetherCartHelper');

// Used to remove cartId entry of together session
// Can be used during end session
// Needs to be called only once by one of the users
// GET request
// parameters expected is sessionId
// Returns object with key statuscode, message(contains result of delete) and header code

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cart/destroyTogetherCart/{sessionId}',
    config: { auth: false },
    handler: (request, response) => {
      destroyTogetherCartHelper(request.params.sessionId).then((result) => {
        response({
          message: result,
          statusCode: 200,
        }).code(200);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: 404,
        }).code(404);
      });
    },
  },
];
