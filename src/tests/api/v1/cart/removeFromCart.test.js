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
    productID: 43210,
    name: 'Mycell - AAA Batteries (4-Pack)',
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
      Models.UserDetails.create(sampleUser).then((userResponse) => {
        Models.ProductDetails.create(sampleProduct).then(() => {
          const cartObj = {
            sessionID: null,
            userID: userResponse.dataValues.id,
          };
          Models.CartsWSessions.create(cartObj).then(() => {
            Models.CartsWSessions.findOne({
              where: { userID: userResponse.dataValues.id },
            }).then((cartObject) => {
              console.log(cartObject);
              cartID = cartObject.cartID;
              console.log('Cart ID -->', cartID);
              Models.CartsWProducts.create({
                cartID,
                productID: 43210,
                addedByUser: userResponse.dataValues.id,
              }).then(() => {
                done();
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

describe('must return reponse in accordance to product removed from cart ', () => {
  it(' must return response.message containg 1 for sucessful product removed from cart', (done) => {
    const req = {
      method: 'DELETE',
      payload: { cartId: cartID, productId: 43210 },
      url: '/api/v1/cart/removeFromCart',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      expect(resm.message).toEqual(1);
      done();
    });
  });
  it(' must return response message of 0 as  product not in cart', (done) => {
    const req = {
      method: 'DELETE',
      payload: { cartId: cartID, productId: 43212 },
      url: '/api/v1/cart/removeFromCart',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      expect(resm.message).toEqual(0);
      done();
    });
  });
});

