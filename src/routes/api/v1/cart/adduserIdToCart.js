
const addCartForUserHelper = require('./helpers/addCartForUserHelper');
// used to generate a cart id for a new user
// this api NEED NOT BE USED IN PRODUCTION AS CART MIGHT BE GENERATED DURING REGISTRATION
// GET request
// parameters  userId( make sure user id is valid i.e in database as it refernces foreign key)
// returns object as reponse with keys statusCode, message(Contains cart id) and header code
module.exports = [
  {
    method: 'GET',
    path: '/api/v1/cart/userCart/{userId}',
    config: { auth: false },
    handler: (request, response) => {
      // console.log('hjh');
      addCartForUserHelper(request.params.userId).then((result) => {
        response({
          message: result,
          statusCode: 201,
        }).code(201);
      }).catch((error) => {
        response({
          message: error.message,
          statusCode: error.code,
        }).code(404);
      });
    },
  },
];
