const getProductByID = require('../../../../../../routes/api/v1/products/add/helpers/getProductById');

describe('Tests for getting product details by ID from external API', () => {
  test('Test for checking return result of getProductById function for valid product ID', (done) => {
    getProductByID(9132294).then((result) => {
      expect(result.upc).toMatch('086792895093');
      done();
    });
  });
  test('Test for checking return result of getProductById function for invalid product ID', (done) => {
    const responseObject = {
      name: 'NotFound',
      message: "No record found for id '1234'",
      code: 404,
      className: 'not-found',
      errors: {},
    };
    getProductByID(1234).then()
      .catch((error) => {
        expect(error.error).toEqual(responseObject);
        done();
      });
  });
});
