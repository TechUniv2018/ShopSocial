const getProductsByCategoryAndPrice = require('../../../../routes/api/v1/products/getProductsByCategoryAndPrice');

describe('Tests for getting product details by category and price from external API', () => {
  const validProductParameters = {
    productCategory: 'TVs',
    productBrand: 'Insignia',
    priceFrom: 160,
    priceTo: 170,
  };
  const validResponse = [
    {
      id: 4822001,
      name: 'Insignia™ - 32" Class (31.5" Diag.) - LED - 720p - Smart - Roku TV - Black',
      type: 'HardGood',
      price: 169.99,
      upc: '600603198120',
      shipping: 0,
      description: '720p resolution; 60Hz refresh rate; Roku TV',
      manufacturer: 'Insignia™',
      model: 'NS-32DR310NA17',
      url: 'http://www.bestbuy.com/site/insignia-32-class-31-5-diag--led-720p-smart-roku-tv-black/4822001.p?id=bb4822001&skuId=4822001&cmp=RMXCC',
      image: 'http://img.bbystatic.com/BestBuy_US/images/products/4822/4822001_sa.jpg',
      createdAt: '2016-11-17T17:58:46.655Z',
      updatedAt: '2016-11-17T17:58:46.655Z',
      categories: [
        {
          id: 'abcat0100000',
          name: 'TV & Home Theater',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
        {
          id: 'abcat0101000',
          name: 'TVs',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
        {
          id: 'abcat0101001',
          name: 'All Flat-Panel TVs',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
      ],
    },
  ];
  const invalidProductParameters = {
    productCategory: 'As',
    productBrand: 'Insignia',
    priceFrom: 160,
    priceTo: 170,
  };
  const invalidResponse = {
    total: 0,
    limit: 10,
    skip: 0,
    data: [],
  };
  test('Test for checking return result of getProductsByCategoryAndPrice function for valid product ID', (done) => {
    getProductsByCategoryAndPrice(validProductParameters).then((responseObject) => {
      expect(responseObject).toEqual(validResponse);
    });
    done();
  });
  test('Test for checking return result of getProductsByCategoryAndPrice function for invalid parameters', (done) => {
    getProductsByCategoryAndPrice(invalidProductParameters).then((responseObject) => {
      expect(responseObject).toEqual(invalidResponse);
    });
    done();
  });
});
