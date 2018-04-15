const server = require('../../../../server');
const Models = require('../../../../../models/');

beforeAll((done) => {
  Models.ProductDetails.destroy({ truncate: true, cascade: true }).then(() => {
    const sampleProduct = {
      productID: 1052096,
      name: 'Insignia‚Ñ¢ - 28" Class (27.5" Diag.) - LED - 720p - HDTV - Black',
      price: 159.99,
      upc: '041333424019',
      description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
      manufacturer: 'Duracell',
      model: 'MN2400B4Z',
      image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
      category: 'Alkaline Batteries',
    };
    Models.ProductDetails.create(sampleProduct).then(() => {
      done();
    });
  });
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
      url: '/search/Insignia',
    };
    server.inject(request, (response) => {
      console.log(response.result);
      expect(response.result.statusCode).toEqual(200);
      done();
    });
  });
});
