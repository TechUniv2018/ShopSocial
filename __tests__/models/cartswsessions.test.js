const Models = require('../../models/');

afterEach(() => Models.CartsWSessions.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing the  CartsWSessions table:', () => {
  it('Testing an object with a valid session ID', (done) => {
    Models.CartsWSessions.create({
      sessionID: '123',
    }).then(() => {
      Models.CartsWSessions.findOne().then((result) => {
        expect(result.sessionID).toBe('123');
        done();
      });
    });
  });
});
