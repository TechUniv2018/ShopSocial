const Models = require('../../models/');

const sampleObject = {
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

beforeEach(() => Models.ProductDetails.create(sampleObject));
afterEach(() => Models.ProductDetails.destroy({ truncate: true, cascade: true }));
afterAll(() => Models.close());

describe('Testing validity of ProductDetails model', () => {
  it('testing if table returns the inserted sample record with all keys intact', (done) => {
    Models.ProductDetails.find().then((result) => {
      expect(result.productID).toBe(sampleObject.productID);
      expect(result.name).toBe(sampleObject.name);
      expect(result.price).toBe(sampleObject.price);
      expect(result.upc).toBe(sampleObject.upc);
      expect(result.description).toBe(sampleObject.description);
      expect(result.manufacturer).toBe(sampleObject.manufacturer);
      expect(result.model).toBe(sampleObject.model);
      expect(result.model).toBe(sampleObject.model);
      expect(result.image).toBe(sampleObject.image);
      expect(result.category).toBe(sampleObject.category);
      done();
    });
  });
});
