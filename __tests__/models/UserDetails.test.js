const Models = require('../../models/');

const sampleObject = {
  UserId: '1234',
  Name: 'Allen',
  Email: 'abc@gmail.com',
};

beforeEach(() => Models.UserDetails.create(sampleObject));
afterEach(() => Models.UserDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('testing validity of UserDetails model', () => {
  it('testing if table returns the inserted sample record', (done) => {
    Models.UserDetails.find().then((result) => {
      expect(result.Email).toBe(sampleObject.Email);
      expect(result.Name).toBe(sampleObject.Name);
      expect(result.UserId).toBe(sampleObject.UserId);
      done();
    });
  });
});
