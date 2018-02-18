const Models = require('../../models/');

const sampleObject = {
  userID: '1234',
  name: 'Allen',
  email: 'abc@gmail.com',
  password: '#2323atfagd',
};

beforeEach(() => Models.UserDetails.create(sampleObject));
afterEach(() => Models.UserDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('testing validity of UserDetails model', () => {
  it('testing if table returns the inserted sample record', (done) => {
    Models.UserDetails.find().then((result) => {
      expect(result.email).toBe(sampleObject.email);
      expect(result.name).toBe(sampleObject.name);
      expect(result.userID).toBe(sampleObject.userID);
      expect(result.password).toBe(sampleObject.password);
      done();
    });
  });
});
