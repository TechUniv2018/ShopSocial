const Server = require('../../server');
const Models = require('../../../models');

describe('Test server for POST /user/register: ', () => {
  beforeAll((done) => {
    Models.UserDetails.destroy({ truncate: true, cascade: true }).then(() => {
      done();
    });
  });
  test('Should return statusCode 201: Successful user registration ', (done) => {
    const options = {
      url: '/user/register',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        name: 'sahil',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  }); test('Should return statusCode 409: same email registration error', (done) => {
    const options = {
      url: '/user/register',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        name: 'sahil',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(409);
      done();
    });
  });
  test('JOI validation - Should return statusCode 400: since invalid password in passed ', (done) => {
    const options = {
      url: '/user/register',
      method: 'POST',
      payload: {
        email: 'rahulsharma@gmail.com',
        name: 'rahulsharma',
        password: 'Prd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
  test('JOI validation - Should return statusCode 400: since invalid username in passed ', (done) => {
    const options = {
      url: '/user/register',
      method: 'POST',
      payload: {
        email: 'rahulsharma@gmail.com',
        name: 'abc',
        password: 'Prd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
});
