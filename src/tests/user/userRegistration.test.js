const Server = require('../../server');
const Models = require('../../../models');

describe('Test server for POST /user/register: ', () => {
  beforeAll((done) => {
    Models.UserDetails.destroy({ truncate: true }).then(() => {
      console.log('table cleared');
      done();
    });
  });
  test('Should return statusCode 201: ', (done) => {
    const options = {
      url: 'localhost:8080/user/register',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        userName: 'sahil',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  }); test('Should return statusCode 409: ', (done) => {
    const options = {
      url: 'localhost:8080/user/register',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        userName: 'sahil',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(409);
      done();
    });
  });
  test('Should return statusCode 404: ', (done) => {
    const options = {
      url: 'localhost:8080/user/registered',
      method: 'POST',
      payload: {
        email: 'sahilbalodi@gmail.com',
        userName: 'sahil',
        password: 'P@q$$1rd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
  test('JOI validation - Should return statusCode 400: since invalid password in passed ', (done) => {
    const options = {
      url: 'localhost:8080/user/register',
      method: 'POST',
      payload: {
        email: 'rahulsharma@gmail.com',
        userName: 'rahulsharma',
        password: 'Prd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
  test('JOI validation - Should return statusCode 400: since invalid username in passed ', (done) => {
    const options = {
      url: 'localhost:8080/user/register',
      method: 'POST',
      payload: {
        email: 'rahulsharma@gmail.com',
        userName: 'abc',
        password: 'Prd',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
});
