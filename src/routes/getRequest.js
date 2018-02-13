module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, response) => {
      response('hello');
    },
  },
];
