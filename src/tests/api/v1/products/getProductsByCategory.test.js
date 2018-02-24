const server = require('../../../../server');
const Models = require('../../../../../models/');

const productsInDb = [{
  productID: 1213167,
  price: 199.99,
  name: 'Insignia™ - 39" Class (38.5" Diag.) - LED - 720p - HDTV - Black',
  description: '720p resolution60Hz refresh rate',
  manufacturer: 'Insignia™',
  model: 'NS-39D220NA16',
  category: 'TV & Home Theater',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/1213/1213167_sa.jpg',
  upc: '600603185199',
},
{
  productID: 4807511,
  price: 199.99,
  name: 'Insignia™ - 39" Class (38.5" Diag.) - LED - 720p - HDTV - Black',
  description: '720p resolution60Hz refresh rate',
  manufacturer: 'Insignia™',
  model: 'NS-39D310NA17',
  category: 'TV & Home Theater',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4807/4807511_sa.jpg',
  upc: '600603198403',
},
{
  productID: 4822001,
  price: 169.99,
  name: 'Insignia™ - 32" Class (31.5" Diag.) - LED - 720p - Smart - Roku TV - Black',
  description: '720p resolution; 60Hz refresh rate; Roku TV',
  manufacturer: 'Insignia™',
  model: 'NS-32DR310NA17',
  category: 'TV & Home Theater',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4822/4822001_sa.jpg',
  upc: '600603198120',
}];

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
      url: '/api/v1/products/category/TV & Home Theater',
    };
    server.inject(request, (response) => {
      expect(response.result.data).toEqual(productsInDb);
      done();
    });
  });
  test('Test for error response on request with non existent category in the DB', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/category/Gifts',
    };
    server.inject(request, (response) => {
      expect(response.result).toEqual({
        statusCode: 404,
        error: 'Product/s not found',
      });
      done();
    });
  });
});
