const getProductByID = require('../../../../routes/api/v1/products/getProductById');

describe('Tests for getting product details by ID from external API', () => {
  test('Test for checking return result of getProductById function for valid product ID', (done) => {
    expect(typeof getProductByID()).resolves.toEqual(false);
    done();
  });
  test('Test for checking return result of getProductById function for invalid product ID', (done) => {
    expect(typeof getProductByID(1234)).resolves.toEqual(false);
    done();
  });
});
