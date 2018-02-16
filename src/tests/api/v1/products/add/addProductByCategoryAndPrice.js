const server = require('../../../../../server');
const Models = require('../../../../../../models/');

describe('Tests for adding multiple product/s to the database from external API', () => {
  test('Test for successful response code from the server on a valid request', (done) => {
    const request = {
      method: 'POST',
      url: '/api/v1/products/add/',
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
});
