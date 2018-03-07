const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');

let cartID;

beforeAll((done) => {
  // const createUser = Models.UserDetails.create(sampleUser);
  const sampleUser = {
    name: 'Allen',
    email: 'abc@gmail.com',
    password: '#2323atfagd',
  };
  const CartObj = {

    sessionID: null,
    userID: 1,
  };
  const sampleProduct = {
    productID: 43910,
    name: 'Duracell - AAA Batteries (4-Pack)',
    price: 5.49,
    upc: '041333424019',
    description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN2400B4Z',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
    category: 'Alkaline Batteries',
  };

    // console.log('hello');Models.UserDetails.create(sampleUser);
  const addCartId = Models.CartsWSessions.create(CartObj);
  addCartId.then(() => {
    Models.ProductDetails.create(sampleProduct).then(() => {
      Models.UserDetails.create(sampleUser).then(() => {
        Models.CartsWSessions.findOne({
          where: { userID: 1 },

        }).then((message) => {
          // console.log('cartidgot', message);
          cartID = message.cartID;
          const proobj = {
            cartID,
            productID: 43910,
            addedByUser: 1,

          };
          Models.CartsWProducts.create(proobj).then(() => {
            done();
          });
        });
      });
    });
  });
});

afterAll((done) => {
  Models.UserDetails.destroy({ truncate: true, cascade: true });
  Models.ProductDetails.destroy({ truncate: true, cascade: true });
  Models.CartswProducts.destroy({ truncate: true });
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    done();
  });
});
jest.setTimeout(15000);
describe('must return reponse in accordance to product added in cart ', () => {
  it(' must return response.message containg 1 for sucessful product removed from cart', (done) => {
    const req = {
      method: 'DELETE',
      payload: { cartId: cartID, productId: 43910 },
      url: '/api/v1/cart/removeFromCart',
    };
    server.inject(req, (res) => {
      // expect(res.statusCode).toBe(200);
      const resm = JSON.parse(res.payload);
      expect(resm.message).toEqual(1);
      console.log(resm.message); // contains 1 for successful delete
      done();
    });
  });
  it(' must return response message of 0 as  product not in cart', (done) => {
    const req = {
      method: 'DELETE',
      payload: { cartId: cartID, productId: 43910 },
      url: '/api/v1/cart/removeFromCart',
    };
    server.inject(req, (res) => {
      // expect(res.statusCode).toBe(200);
      const resm = JSON.parse(res.payload);
      expect(resm.message).toEqual(0);
      // console.log(resm.message);
      done();
    });
  });
});

