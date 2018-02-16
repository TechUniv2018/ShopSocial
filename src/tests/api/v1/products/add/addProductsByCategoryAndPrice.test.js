const server = require('../../../../../server');
const Models = require('../../../../../../models/');

afterEach(() => Models.ProductDetails.destroy({ truncate: true }));
beforeEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Tests for adding multiple product/s to the database from external API', () => {
  const validSingleProductPayload = {
    productCategory: 'TVs',
    productBrand: 'Insignia',
    priceFrom: 160,
    priceTo: 170,
  };
  const invalidProductPayload = {
    productCategory: 'As',
    productBrand: 'Insignia',
    priceFrom: 160,
    priceTo: 160,
  };
  const validMultipleProductPayload = {
    productCategory: 'TVs',
    productBrand: 'Insignia',
    priceFrom: 160,
    priceTo: 200,
  };
  test('Test for successful response from the server for valid single product insert payload', (done) => {
    const request = {
      method: 'POST',
      url: '/api/v1/products/add/',
      payload: JSON.stringify(validSingleProductPayload),
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      expect(response.result.action).toMatch('Product/s added');
      expect(response.result.added).toMatch('4822001;');
      done();
    });
  });
  test('Test for successful response from the server for invalid product insert payload', (done) => {
    const request = {
      method: 'POST',
      url: '/api/v1/products/add/',
      payload: JSON.stringify(invalidProductPayload),
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(404);
      expect(response.result.action).toMatch('No product added');
      expect(response.result.added).toMatch(';');
      done();
    });
  });
  test('Test for successful response from the server for valid multiple product insert payload', (done) => {
    const request = {
      method: 'POST',
      url: '/api/v1/products/add/',
      payload: JSON.stringify(validMultipleProductPayload),
    };
    server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      expect(response.result.action).toMatch('Product/s added');
      expect(response.result.added).toMatch('1213167;4807511;4822001;');
      done();
    });
  });
});
