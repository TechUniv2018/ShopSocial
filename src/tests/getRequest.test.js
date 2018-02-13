const server = require('../server');

describe('Hapi server test', () => {
  test('Test for successful GET ping', (done) => {
    const request = {
      method: 'GET',
      url: '/',
    };
    server.inject(request, (response) => {
      expect(response.result).toMatch('hello');
      done();
    });
  });
});
