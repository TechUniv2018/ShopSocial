const server = require('../../../server');

describe('Tests for adding product/s to the database from external API', () => {
  test('Test for successful response code from the server on a valid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/{1234}',
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
});
