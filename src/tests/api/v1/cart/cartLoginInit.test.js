const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');


beforeAll((done) => {
  // const createUser = Models.UserDetails.create(sampleUser);

  const CartObj = {

    sessionID: null,
    userID: 1,
  };
  console.log('hello');
  const addCartId = Models.CartsWSessions.create(CartObj);
  addCartId.then(() => {
    done();
  });
});

afterAll((done) => {
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    done();
  });
});

describe('must return cart id for user ', () => {
  it('/initCart  must return response of 200 for user in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initCart/1',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(200);
      // const resm = JSON.parse(res.payload);
      // console.log(resm.message.cartID);
      done();
    });
  });
  it('/initCart  must return response of null for user not in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initCart/198',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      console.log(resm.message);
      expect(resm.message).toBe(null);
      done();
    });
  });
  it('/initCart  must return response with cart id for user  in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initCart/1',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      console.log(resm.message);
      expect(resm.message).not.toBe(null);
      done();
    });
  });
});

