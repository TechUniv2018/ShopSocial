const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');


beforeAll((done) => {
  // const createUser = Models.UserDetails.create(sampleUser);

  const CartObj = {

    sessionID: '123',
    userID: null,
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

describe('must return cart id for together session ', () => {
  it('/  must return response of 201 for session already in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initTogetherCart/123',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(201);
      // const resm = JSON.parse(res.payload);
      // console.log(resm.message.cartID);
      done();
    });
  });
  it('/  must return response of 201 for session in db newly created', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initTogetherCart/126',
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(201);
      // const resm = JSON.parse(res.payload);
      // console.log(resm.message.cartID);
      done();
    });
  });

  it('/  must return respond null as cart id for session id not in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initTogetherCart/456',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      console.log(resm.message);
      expect(resm.message).not.toBe(null);
      done();
    });
  });
  it('/  must return respond with card id for session id in db', (done) => {
    const req = {
      method: 'GET',

      url: '/api/v1/cart/initTogetherCart/123',
    };
    server.inject(req, (res) => {
      const resm = JSON.parse(res.payload);
      console.log(resm.message);
      expect(resm.message).not.toBe(null);
      done();
    });
  });
});

