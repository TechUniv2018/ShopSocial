const AddProductsToDB = require('../../../../../routes/api/v1/products/add/addProductsToDatabase');
const Models = require('../../../../../../models/');
const { Op } = require('sequelize');

beforeEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterEach(() => Models.ProductDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Tests for adding product/s to the database using the addProductsToDB helper function', () => {
  const singleProductArray = [{
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
  const multipleProductArray = [
    {
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
    },
    {
      id: 43900,
      name: 'Duracell - AAA Batteries (4-Pack)',
      type: 'HardGood',
      price: 5.49,
      upc: '041333424019',
      shipping: 0,
      description: 'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
      manufacturer: 'Duracell',
      model: 'MN2400B4Z',
      url: 'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
      image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
      createdAt: '2016-11-17T17:58:03.298Z',
      updatedAt: '2016-11-17T17:58:03.298Z',
      categories: [
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
          createdAt: '2016-11-17T17:57:05.399Z',
          updatedAt: '2016-11-17T17:57:05.399Z',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
          createdAt: '2016-11-17T17:57:04.285Z',
          updatedAt: '2016-11-17T17:57:04.285Z',
        },
      ],
    },
  ];
  test('Test for successful insert of single product into database', (done) => {
    AddProductsToDB(singleProductArray).then((isInsert) => {
      if (isInsert) {
        Models.ProductDetails.find({
          where: {
            productID: 9132294,
          },
        }).then((result) => {
          expect(result.productID).toBe(singleProductArray[0].id);
          expect(result.name).toBe(singleProductArray[0].name);
          expect(result.price).toBe(singleProductArray[0].price);
          expect(result.upc).toBe(singleProductArray[0].upc);
          expect(result.description).toBe(singleProductArray[0].description);
          expect(result.manufacturer).toBe(singleProductArray[0].manufacturer);
          expect(result.model).toBe(singleProductArray[0].model);
          expect(result.model).toBe(singleProductArray[0].model);
          expect(result.image).toBe(singleProductArray[0].image);
          expect(result.category).toBe(singleProductArray[0].categories[0].name);
          done();
        });
      }
    });
  });
  test('Test for successful insert of multiple products into database', (done) => {
    AddProductsToDB(multipleProductArray).then((isInsert) => {
      if (isInsert) {
        Models.ProductDetails.findAndCountAll({
          where: {
            [Op.or]: [{ productID: 9132294 }, { productID: 43900 }],
          },
        }).then((result) => {
          if (result.count === 2) {
            done();
          }
        });
      }
    });
  });
});
