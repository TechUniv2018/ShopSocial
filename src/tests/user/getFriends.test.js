const server = require('../../server');
const supertest = require('supertest');
const Models = require('../../../models');

describe('Test server for GET /friends: ', () => {
  beforeAll((done) => {
    Models.UserFriends.create({
      userId: 1,
      friendsEmail: 'a@gmail.com',
    }).then(() => {
      Models.UserFriends.create({
        userId: 1,
        friendsEmail: 'b@gmail.com',
      }).then(() => done());
    });
  });
  afterAll((done) => {
    Models.UserFriends.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true,
    }).then(() =>
      done());
  });
  test('Test if the route returns statusCode 200', (done) => {
    supertest(server.listener)
      .get('/friends?id=1')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test('Test if the route returns an array containing emails of user friends', (done) => {
    supertest(server.listener)
      .get('/friends?id=1')
      .then((response) => {
        expect(response.body.friendsList).toEqual(['a@gmail.com', 'b@gmail.com']);
        done();
      });
  });
});
