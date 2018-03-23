const Server = require('../../server');
const Models = require('../../../models');
const passwordHash = require('password-hash');

describe('Test server for post /addFriend: ', () => {
  beforeEach((done) => {
    Models.UserDetails.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true,
    }).then(() =>
      done());
    Models.UserDetails.create({
      email: 'a@gmail.com',
      password: passwordHash.generate('Sahil@1234'),
      name: 'user1',
    }).then(() => {
      Models.UserDetails.create({
        email: 'b@gmail.com',
        password: passwordHash.generate('Balodi@1234'),
        name: 'user2',
      }).then(() => done());
    });
  });
  afterEach((done) => {
    Models.UserDetails.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true,
    }).then(() =>
      done());
  });
  test('Test if the route returns status code 201 for successfully adding a friend', (done) => {
    const options = {
      url: '/addFriend',
      method: 'POST',
      payload: {
        userId: 1,
        friendsEmail: 'b@gmail.com',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
  test('Test if the route returns status code 403 if friends email doest exist', (done) => {
    const options = {
      url: '/addFriend',
      method: 'POST',
      payload: {
        userId: 1,
        friendsEmail: 'c@gmail.com',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(403);
      console.log(response.result);
      done();
    });
  });
});
