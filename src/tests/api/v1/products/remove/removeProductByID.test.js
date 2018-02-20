const Server = require('../../../../../server');

describe('Testing route removeProductById', () => {
  it('Testing the ID provided is a number', (done) => {
    const request = {
      method: 'DELETE',
      url: '/api/v1/products/remove/',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
});
