const Server = require('../../../../../server');

describe('Testing route removeProductById', () => {
  it('Testing the validity of route with ID', (done) => {
    const request = {
      method: 'DELETE',
      url: '/api/v1/products/remove/',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
  it('Testing the method is DELETE only', (done) => {
    let inSeries = false;
    const requestGET = {
      method: 'GET',
      url: '/api/v1/products/remove/1234',
    };
    Server.inject(requestGET, (response) => {
      expect(response.statusCode).toBe(404);
      inSeries = true;
    });
    const requestPOST = {
      method: 'GET',
      url: '/api/v1/products/remove/1234',
    };
    Server.inject(requestPOST, (response) => {
      expect(response.statusCode).toBe(404);
      expect(inSeries).toBe(true);
      done();
    });
  });
  it('Testing the method with DELETE method', (done) => {
    const request = {
      method: 'DELETE',
      url: '/api/v1/products/remove/1234',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(200);
      done();
    });
  });
});
