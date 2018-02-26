const Models = require('../../models/');

afterEach(() => {
  Models.UserDetails.destroy({ truncate: true, cascade: true });
  Models.ProductDetails.destroy({ truncate: true, cascade: true });
  Models.CartsWSessions.destroy({ truncate: true, cascade: true });
});
afterAll(() => Models.close());

describe('Testing the CartsWProducts table:', () => {
  it('Testing an object with a valid cartID, productID and addedByUser value', (done) => {
    const sampleUser = {
      name: 'Allen',
      email: 'abc@gmail.com',
      password: '#2323atfagd',
    };
    const sampleProduct = {
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
    const sampleCart = {
      sessionID: '123',
    };

    const createUser = Models.UserDetails.create(sampleUser);
    const createProduct = Models.ProductDetails.create(sampleProduct);
    const createCart = Models.CartsWSessions.create(sampleCart);
    Promise.all([createUser, createProduct, createCart])
      .then((results) => {
        Models.CartsWProducts.create({
          cartID: results[2].dataValues.cartID,
          productID: sampleProduct.productID,
          addedByUser: results[0].dataValues.id,
        }).then(() => {
          Models.CartsWProducts.findOne().then((resultCart) => {
            expect(resultCart.productID).toBe(43900);
            expect(resultCart.addedByUser).toBe(1);
            expect(resultCart.cartID).toBe(results[2].dataValues.cartID);
            done();
          });
        });
      });
  });
});
