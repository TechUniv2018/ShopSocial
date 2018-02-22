const Models = require('../../models/');

afterEach(() => Models.AdminDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing the AdminDetails model', () => {
  it('testing if table returns the inserted sample object', (done) => {
    const sampleUser = {
      name: 'Admin',
      email: 'Admin@gmail.com',
      password: '#2323atfagd',
    };

    Models.AdminDetails.create(sampleUser).then(() =>
      Models.AdminDetails.find().then((result) => {
        expect(result.email).toBe(sampleUser.email);
        expect(result.name).toBe(sampleUser.name);
        expect(result.password).toBe(sampleUser.password);
        done();
      })).catch(err => console.log(err));
  });
  it('testing with 2 sample valid Admin objects', (done) => {
    const sampleUser = {
      name: 'Allen',
      email: 'abc@gmail.com',
      password: '#2323atfagd',
    };

    const sampleUser2 = {
      name: 'Pinnochio',
      email: 'def@gmail.com',
      password: '#basad65',
    };

    Models.AdminDetails.bulkCreate([sampleUser, sampleUser2]).then(() => {
      Models.AdminDetails.findAll({ attributes: ['name'] }).then((result) => {
        expect(result.sort().map(a => a.name)).toEqual(['Allen', 'Pinnochio'].sort());
        done();
      });
    });
  });
});
