const server = require('../../server');
const supertest = require('supertest');

describe('Test server for GET /admin/logout: ', () => {
  test('Test for successful admin logout ', (done) => {
    supertest(server.listener)
      .get('/admin/logout')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
