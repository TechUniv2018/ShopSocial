const server = require('../../../../../server');
const Models = require('../../../../../../models/');

afterEach(() => Models.ProductDetails.destroy({ truncate: true, cascade: true }));
beforeEach(() => Models.ProductDetails.destroy({ truncate: true, cascade: true }));
afterAll(() => Models.close());


describe('Tests for adding product/s to the database from external API', () => {
  test('Test for successful response code from the server on a valid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/9132294',
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
  test('Test for successful response message from the server on a valid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/9132294',
    };
    server.inject(request, (response) => {
      expect(response.result.action).toBe('Product added');
      done();
    });
  });
  test('Test for successful response message from the server on a invalid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/1234',
    };
    server.inject(request, (response) => {
      expect(response.result.action).toBe('NotFound');
      done();
    });
  });
});
