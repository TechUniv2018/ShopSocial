const server = require('../../server');
const supertest = require('supertest');

describe('Test server for GET /user/logout: ', () => {
  test('Test for successful User logout ', (done) => {
    supertest(server.listener)
      .get('/user/logout')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
