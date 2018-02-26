const Server = require('../../server');
const Models = require('../../../models');
const passwordHash = require('password-hash');

describe('Test server for POST /admin/login: ', () => {
  beforeAll((done) => {
    Models.AdminDetails.create({
      email: 'admin@gmail.com',
      password: passwordHash.generate('Admin@1234'),
      name: 'Admin',
    }).then(() => {
      done();
    });
  });
  afterAll((done) => {
    Models.AdminDetails.destroy({ truncate: true }).then(() => {
      done();
    });
  });
  test('Should return statusCode 200: Successful admin login ', (done) => {
    const options = {
      url: '/admin/login',
      method: 'POST',
      payload: {
        email: 'admin@gmail.com',
        password: 'Admin@1234',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(200);
      done();
    });
  });
  test('Should return statusCode 401: invalid login credentials , admin with following credentials doesnt exist', (done) => {
    const options = {
      url: '/admin/login',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(401);

      done();
    });
  });
});
