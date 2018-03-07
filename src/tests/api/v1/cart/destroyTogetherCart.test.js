const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');


beforeAll((done) => {
  // const createUser = Models.UserDetails.create(sampleUser);

  const CartObj = {

    sessionID: '123',
    userID: null,
  };
  const CartObj2 = {

    sessionID: '456',
    userID: null,
  };
  // console.log('hello');
  const addCartId = Models.CartsWSessions.create(CartObj);
  addCartId.then(() => {
    const addCartId2 = Models.CartsWSessions.create(CartObj2);
    addCartId2.then(() => {
      done();
    });
  });
});

afterAll((done) => {
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    done();
  });
});

describe('must  destroy  the cart on call ', () => {
  it(' must return response of 200 for a request to delete session cart', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/destroyTogetherCart/123',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
      // const resm = JSON.parse(res.payload);
      // console.log(resm);
      done();
    });
  });

  it('/destroyTogetherCart  must return with value 1 in response to successful deletion of session cart', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/destroyTogetherCart/456',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      expect(resm.message).toBe(1);

      // console.log(resm);
      done();
    });
  });

  it('/destroyTogetherCart must return value 0 for unsuccessful deletion if cart is already deleted/ session does not exist', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/destroyTogetherCart/123',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      expect(resm.message).toBe(0);

      done();
    });
  });
});

