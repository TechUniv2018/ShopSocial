const Server = require('../../server');
const Models = require('../../../models');
const passwordHash = require('password-hash');

describe('Test server for POST /user/login: ', () => {
  beforeAll((done) => {
    Models.UserDetails.create({
      email: 'user@gmail.com',
      password: passwordHash.generate('Sahil@1234'),
      name: 'user1',
    }).then(() => {
      done();
    });
  });
  afterAll((done) => {
    Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
      done();
    });
  });
  test('Should return statusCode 200: Successful user login ', (done) => {
    const options = {
      url: '/user/login',
      method: 'POST',
      payload: {
        email: 'user@gmail.com',
        password: 'Sahil@1234',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(200);
      done();
    });
  });
  test('Should return statusCode 401: invalid login credentials , user with following credentials doesnt exist', (done) => {
    const options = {
      url: '/user/login',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        password: 'S@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(401);
      done();
    });
  });
  test('JOI validation - Should return statusCode 400: since invalid password/email id in passed ', (done) => {
    const options = {
      url: '/user/login',
      method: 'POST',
      payload: {
        email: 'abc@gmail.com',
        password: 'Prd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
});
