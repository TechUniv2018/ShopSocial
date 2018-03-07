
const getTogetherCartIdHelper = require('./helpers/getTogetherCartIdHelper');


// Api expects get request
// Send the session Id (string id)
// Returns the Cart Id
// Can be used both by person starting and joining the session
// Returns object with key message(contains cartId) and statusCode along with header code
module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cart/initTogetherCart/{sessionId}',
    config: { auth: false },
    handler: (request, response) => {
      getTogetherCartIdHelper(request.params.sessionId).then((result) => {
        response({
          message: result,
          statusCode: 201,
        }).code(201);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: 404,
        }).code(404);
      });
    },
  },
];
