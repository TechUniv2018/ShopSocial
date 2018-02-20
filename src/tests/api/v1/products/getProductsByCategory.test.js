const server = require('../../../../server');
const Models = require('../../../../../models/');

beforeEach((done) => {
  Models.ProductDetails.destroy({ truncate: true }).then(() => {
    const validMultipleProductPayload = {
      productCategory: 'TVs',
      productBrand: 'Insignia',
      priceFrom: 160,
      priceTo: 200,
    };
    const request = {
      method: 'POST',
      url: '/api/v1/products/add/',
      payload: JSON.stringify(validMultipleProductPayload),
    };
    server.inject(request, (response) => {
      console.log(response.result.action);
      done();
    });
  });
});
afterAll(() => {
  Models.ProductDetails.destroy({ truncate: true }).then(() => {
    Models.close();
  });
});


describe('Tests for fetching product details sorted by category from internal DB using an internal API', () => {
  test('Test for successful response with existing product category in the DB', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/category/TVs',
    };
    server.inject(request, (response) => {
      console.log(response.result);
      expect(response).toBe(false);
      done();
    });
  });
  test('Test for error response on request with non existent category in the DB', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/category/Gifts',
    };
    server.inject(request, (response) => {
      console.log(response.result);
      expect(response).toBe(false);
      done();
    });
  });
});
