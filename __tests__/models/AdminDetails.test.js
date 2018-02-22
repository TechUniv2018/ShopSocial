const Models = require('../../models/');

afterEach(() => Models.AdminDetails.destroy({ truncate: true }));
afterAll(() => Models.close());

describe('Testing the AdminDetails model', () => {
  it('testing if admin table returns the inserted record', (done) => {
    const sampleAdmin = {
      name: 'Admin',
      email: 'Admin@gmail.com',
      password: '#2323atfagD',
    };

    Models.AdminDetails.create(sampleAdmin).then(() =>
      Models.AdminDetails.find().then((result) => {
        expect(result.email).toBe(sampleAdmin.email);
        expect(result.name).toBe(sampleAdmin.name);
        expect(result.password).toBe(sampleAdmin.password);
        done();
      })).catch(err => console.log(err));
  });
  it('testing if multiple records can be inserted into admin table', (done) => {
    const sampleAdmin1 = {
      name: 'Allen',
      email: 'abc@gmail.com',
      password: '#2323atfagD',
    };

    const sampleAdmin2 = {
      name: 'Pinnochio',
      email: 'def@gmail.com',
      password: '#Basad65',
    };

    Models.AdminDetails.bulkCreate([sampleAdmin1, sampleAdmin2]).then(() => {
      Models.AdminDetails.findAll({ attributes: ['name'] }).then((result) => {
        expect(result.sort().map(a => a.name)).toEqual(['Allen', 'Pinnochio'].sort());
        done();
      });
    });
  });
});
