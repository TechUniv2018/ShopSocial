const server = require('../../../../../server');
const Models = require('../../../../../../models/');

beforeEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

const sampleProductDBObject = {
  productID: 43900,
  name: 'Duracell - AAA Batteries (4-Pack)',
  price: 5.49,
  upc: '041333424019',
  description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
  manufacturer: 'Duracell',
  model: 'MN2400B4Z',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
  category: 'Alkaline Batteries',
};

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
      expect(response.result.action).toMatch('Product added');
      done();
    });
  });
  test('Test for successful response message from the server on a invalid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/1234',
    };
    server.inject(request, (response) => {
      expect(response.result.action).toMatch('NotFound');
      done();
    });
  });
  test('Test for successful insert into database on a valid request', (done) => {
    const request = {
      method: 'GET',
      url: '/api/v1/products/add/43900',
    };
    server.inject(request, (response) => {
      Models.ProductDetails.find().then((result) => {
        expect(result.productID).toBe(sampleProductDBObject.productID);
        expect(result.name).toBe(sampleProductDBObject.name);
        expect(result.price).toBe(sampleProductDBObject.price);
        expect(result.upc).toBe(sampleProductDBObject.upc);
        expect(result.description).toBe(sampleProductDBObject.description);
        expect(result.manufacturer).toBe(sampleProductDBObject.manufacturer);
        expect(result.model).toBe(sampleProductDBObject.model);
        expect(result.model).toBe(sampleProductDBObject.model);
        expect(result.image).toBe(sampleProductDBObject.image);
        expect(result.category).toBe(sampleProductDBObject.category);
        done();
      });
    });
  });
});
