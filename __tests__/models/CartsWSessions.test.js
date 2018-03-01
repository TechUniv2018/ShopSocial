const Models = require('../../models/');

beforeEach(() => Models.CartsWSessions.destroy({ truncate: true, cascade: true }));
afterEach(() => Models.CartsWSessions.destroy({ truncate: true, cascade: true }));
afterAll(() => Models.close());

describe('Testing the  CartsWSessions table:', () => {
  it('Testing an object with a valid sessionID', (done) => {
    Models.CartsWSessions.create({
      sessionID: '123',
    }).then(() => {
      Models.CartsWSessions.findOne().then((result) => {
        expect(result.sessionID).toBe('123');
        done();
      });
    });
  });
  it('Testing an object with a null sessionID', (done) => {
    Models.CartsWSessions.create({
    }).then(() => {
      Models.CartsWSessions.findOne().then((result) => {
        expect(result.sessionID).toBe(null);
        done();
      });
    });
  });
});
