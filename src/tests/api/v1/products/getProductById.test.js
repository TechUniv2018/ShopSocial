const server = require('../../../../server');
const Models = require('../../../../../models/');

const validProduct = {
  productID: 43900,
  price: 5.49,
  name: 'Duracell - AAA Batteries (4-Pack)',
  description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
  manufacturer: 'Duracell',
  model: 'MN2400B4Z',
  category: 'Alkaline Batteries',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
  upc: '041333424019',
};

beforeEach((done) => {
  Models.ProductDetails.destroy({ truncate: true }).then(() => {
    Models.ProductDetails.upsert(validProduct).then(() => {
      done();
    });
  });
});
afterAll(() => Models.close());


describe('Tests for fetching product to the database from external API', () => {
  test('Test for successful response with product details on a valid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/43900',
    };
    server.inject(request, (response) => {
      expect(response.result.data).toEqual(validProduct);
      done();
    });
  });
  test('Test for error response on request with non existent ID', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/9132294',
    };
    server.inject(request, (response) => {
      expect(response.result).toEqual({
        error: 'Product not found',
        statusCode: 404,
      });
      done();
    });
  });
});
