const Models = require('../../models/');

afterEach(() => Models.OrderDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing the OrderDetails table', () => {
  it('testing with sample valid order object with multiple users', (done) => {
    const sampleOrder = {
      OrderID: 'OD1234',
      UserIDs: ['user1', 'user2'],
      ProductIDs: [123, 456],
      ProductPrices: [1.23, 4.56],
      OrderStatus: 'ONGOING',
    };

    Models.OrderDetails.create(sampleOrder).then(() => {
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

  it('testing with sample valid order object with only user ', (done) => {
    const sampleOrder = {
      OrderID: 'OD1234',
      UserIDs: ['user1'],
      ProductIDs: [123, 456],
      ProductPrices: [1.23, 4.56],
      OrderStatus: 'FULFILLED',
    };

    Models.OrderDetails.create(sampleOrder).then(() => {
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
});
