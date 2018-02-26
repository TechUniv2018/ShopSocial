module.exports = {
  method: 'GET',
  path: '/',
  config: { auth: false },
  handler: (request, response) => {
    response('hello');
  },
};
