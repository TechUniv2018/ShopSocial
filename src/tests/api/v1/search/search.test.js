const server = require('../../../../server');
const Models = require('../../../../../models/');

beforeAll((done) => {
  Models.ProductDetails.destroy({ truncate: true, cascade: true }).then(() => done());
});
afterAll(() => {
  Models.ProductDetails.destroy({ truncate: true, cascade: true }).then(() => {
    Models.close();
  });
});


describe('Tests for searching product by name from internal DB using an internal API', () => {
  test('Test for successful response with existing product in the DB', (done) => {
    const request = {
      method: 'GET',
      url: '/search/32',
    };
    server.inject(request, (response) => {
      console.log(response.result);
      expect(response.result.statusCode).toEqual(404);
      done();
    });
  });
});
