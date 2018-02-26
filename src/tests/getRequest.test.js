const server = require('../server');
const supertest = require('supertest');

test('Test for successful GET ping', (done) => {
  supertest(server.listener)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
});
