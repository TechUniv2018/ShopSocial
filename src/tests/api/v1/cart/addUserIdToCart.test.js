const server = require('../../../../../src/server.js');
const Models = require('../../../../../models/');

let userID;

beforeAll((done) => {
  const sampleUser = {
    name: 'Allen',
    email: 'abc@gmail.com',
    password: '#2323atfagd',
  };
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
      Models.UserDetails.create(sampleUser).then((response) => {
        console.log(response.dataValues);
        const CartObj = {
          sessionID: null,
          userID: response.dataValues.id,
        };
        userID = response.dataValues.id;
        Models.CartsWSessions.create(CartObj).then(() => {
          done();
        });
      });
    });
  });
});

afterAll((done) => {
  Models.CartsWSessions.destroy({ truncate: true, cascade: true }).then(() => {
    Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
      done();
    });
  });
});

describe('must return reponse in accordance to user in cart table', () => {
  it(' must return response of 201 for new user cart creation', (done) => {
    const req = {
      method: 'GET',
      url: `/api/v1/cart/userCart/${userID}`,
    };
    server.inject(req, (res) => {
      expect(res.statusCode).toBe(201);
      done();
    });
  });
});

