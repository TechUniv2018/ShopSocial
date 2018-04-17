const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');

let cartID;

beforeAll((done) => {
  const sampleUser = {
    name: 'Allen',
    email: 'abc@gmail.com',
    password: '#2323atfagd',
  };
  const sampleProduct = {
    productID: 43904,
    name: 'Duracell - AAA Batteries (4-Pack)',
    price: 5.49,
    upc: '041333424019',
    description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN2400B4Z',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
    category: 'Alkaline Batteries',
  };
  const sampleProduct2 = {
    productID: 43905,
    name: 'Duracell - AAA Batteries (4-Pack)',
    price: 5.49,
    upc: '041333424019',
    description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN2400B4Z',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
    category: 'Alkaline Batteries',
  };
  Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
    Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
      Models.ProductDetails.destroy({ truncate: true, cascade: true }).then(() => {
        Models.ProductDetails.create(sampleProduct2).then(() => {
          Models.ProductDetails.create(sampleProduct).then(() => {
            Models.UserDetails.create(sampleUser).then((userRes) => {
              const CartObj = {
                sessionID: null,
                userID: userRes.dataValues.id,
              };
              Models.CartsWSessions.create(CartObj).then(() => {
                Models.CartsWSessions.findOne({
                  where: { userID: userRes.dataValues.id },
                }).then((message) => {
                  cartID = message.cartID;
                  const proobj = {
                    cartID,
                    productID: 43904,
                    addedByUser: userRes.dataValues.id,
                  };
                  const proobj2 = {
                    cartID,
                    productID: 43905,
                    addedByUser: userRes.dataValues.id,
                  };
                  Models.CartsWProducts.create(proobj).then(() => {
                    Models.CartsWProducts.create(proobj2).then(() => {
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

afterAll((done) => {
  Models.CartswProducts.destroy({ truncate: true }).then(() => {
    Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
      Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
        Models.ProductDetails.destroy({ truncate: true, cascade: true }).then(() => {
          done();
        });
      });
    });
  });
});

describe('must return reponse fetch cart ', () => {
  it(' must return 200 for successsful fetch', (done) => {
    const req = {
      method: 'GET',
      url: `/api/v1/cart/fetchCart/${cartID}`,
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  it(' must return response.message containg array of product idsfor sucessful product fetched from cart', (done) => {
    const req = {
      method: 'GET',
      url: `/api/v1/cart/fetchCart/${cartID}`,
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
      const resm = JSON.parse(res.payload);
      expect(resm.message.length).toEqual(2);
      done();
    });
  });
});

