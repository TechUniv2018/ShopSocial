const getProductsByCategoryAndPrice = require('../../../../routes/api/v1/products/getProductsByCategoryAndPrice');

describe('Tests for getting product details by category and price from external API', () => {
  test('Test for checking return result of getProductsByCategoryAndPrice function for valid product ID', (done) => {
    expect(getProductsByCategoryAndPrice({})).toBe(false);
    done();
  });
});
