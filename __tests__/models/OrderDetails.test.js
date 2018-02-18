const Models = require('../../models/');

const sampleOrder = {
  OrderID: 'OD1234',
  UserIDs: ['user1', 'user2'],
  ProductIDs: [123, 456],
  ProductPrices: [1.23, 4.56],
  OrderStatus: 'ONGOING',
};

beforeEach(() => Models.OrderDetails.create(sampleOrder));
afterEach(() => Models.OrderDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing the OrderDetails table', () => {
  it('testing with sample valid order object', (done) => {
    Models.OrderDetails.find().then((result) => {
      expect(result.OrderID).toBe(sampleOrder.OrderID);
      expect(result.UserIDs.sort()).toEqual(sampleOrder.UserIDs.sort());
      expect(result.ProductIDs.sort()).toEqual(sampleOrder.ProductIDs.sort());
      expect(result.ProductPrices.sort()).toEqual(sampleOrder.ProductPrices.sort());
      expect(result.OrderStatus).toBe(sampleOrder.OrderStatus);
      done();
    });
  });
});
