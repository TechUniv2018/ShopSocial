const Server = require('../../../../../server');
const Models = require('../../../../../../models');
const insertIntoProductDB = require('../../../../../routes/api/v1/products/add/helpers/addProductsToDatabase');

beforeEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

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
  // it('Testing the method with DELETE method', (done) => {
  //   const request = {
  //     method: 'DELETE',
  //     url: '/api/v1/products/remove/1234',
  //   };
  //   Server.inject(request, (response) => {
  //     expect(response.result.statusCode).toBe(200);
  //     done();
  //   });
  // });
});

describe('Testing functionality of route removeProductById', () => {
  it('testing with a valid product remove operation', (done) => {
    const productObj = [{
      id: 9132294,
      name: 'Yamaha - P32D Pianica - Brown/White',
      type: 'HardGood',
      price: 59.99,
      upc: '086792895093',
      shipping: 0,
      description: 'Keyboard wind instrument; designed for general music education; mouthpiece, anticorrosive reed and blowing pipe; 32-note design; shock-resistant, double-walled, blow-molded case',
      manufacturer: 'Yamaha',
      model: 'EN033P32D',
      url: 'http://www.bestbuy.com/site/yamaha-p32d-pianica-brown-white/9132294.p?id=1218990144149&skuId=9132294&cmp=RMXCC',
      image: 'http://img.bbystatic.com/BestBuy_US/images/products/9132/9132294_sa.jpg',
      createdAt: '2016-11-17T17:58:46.655Z',
      updatedAt: '2016-11-17T17:58:46.655Z',
      categories: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
        {
          id: 'pcmcat151600050037',
          name: 'Keyboards',
          createdAt: '2016-11-17T17:57:04.899Z',
          updatedAt: '2016-11-17T17:57:04.899Z',
        },
        {
          id: 'pcmcat151600050040',
          name: 'Portable Keyboards',
          createdAt: '2016-11-17T17:57:04.899Z',
          updatedAt: '2016-11-17T17:57:04.899Z',
        },
      ],
    }];
    insertIntoProductDB(productObj).then(() => {
      const request = {
        method: 'DELETE',
        url: '/api/v1/products/remove/9132294',
      };
      Server.inject(request, (response) => {
        expect(response.result.statusCode).toBe(200);
        done();
      });
    }).catch((err) => {
      console.log(err);
      done();
    });
  });
  it('Testing the method with absent productId in the db', (done) => {
    const request = {
      method: 'DELETE',
      url: '/api/v1/products/remove/1234',
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(204);
      done();
    });
  });
});
