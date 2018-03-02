const Models = require('../../models/');

beforeEach(() => Models.CartsWSessions.destroy({ truncate: true, cascade: true }));
afterEach(() => Models.CartsWSessions.destroy({ truncate: true, cascade: true }));
afterAll(() => Models.close());

describe('Testing the  CartsWSessions table:', () => {
  it('Testing an object with a valid sessionID and null userID', (done) => {
    Models.CartsWSessions.create({
      sessionID: '123',
    }).then(() => {
      Models.CartsWSessions.findOne().then((result) => {
        expect(result.sessionID).toBe('123');
        expect(result.userID).toBe(null);
        done();
      });
    });
  });
  it('Testing an object with a null sessionID and a valid userID', (done) => {
    Models.CartsWSessions.create({
      userID: 123,
    }).then(() => {
      Models.CartsWSessions.findOne().then((result) => {
        expect(result.sessionID).toBe(null);
        expect(result.userID).toBe(123);
        done();
      });
    });
  });
});
