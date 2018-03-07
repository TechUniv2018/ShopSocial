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
          done();
        });
      });
    });
  });
});

afterAll((done) => {
  Models.UserDetails.destroy({ truncate: true, cascade: true });
  Models.ProductDetails.destroy({ truncate: true, cascade: true });
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    done();
  });
});
jest.setTimeout(15000);
describe('must return reponse in accordance to product added in cart ', () => {
  it(' must return response of 201 for unew product added to cart', (done) => {
    const req = {
      method: 'POST',
      payload: { cartId: cartID, productId: 43900, userId: 1 },
      url: '/api/v1/cart/addToCart',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(201);
      const resm = JSON.parse(res.payload);
      console.log(resm.message);
      done();
    });
  });
  it(' must return response of 400 for duplicate product add to cart attempt', (done) => {
    const req = {
      method: 'POST',
      payload: { cartId: cartID, productId: 43900, userId: 1 },
      url: '/api/v1/cart/addToCart',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(400);

      done();
    });
  });
});

