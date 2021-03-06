module.exports = {
  method: 'GET',
  path: '/user/logout',
  config: { auth: false },
  handler: (request, response) => {
    const cookieOptions = {
      ttl: -24 * 60 * 60 * 1000,
      encoding: 'none',
      isSecure: false,
      isHttpOnly: true,
      clearInvalid: false,
      strictHeader: true,
      path: '/',
    };
    response({
      message: 'successfully logged out',
      statusCode: 200,
    }).header('Authorization', null).state('token', null, cookieOptions);
  },
};
