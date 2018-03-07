const Models = require('../../../../models');
const passwordHash = require('password-hash');

function findUser(email, password) {
  return new Promise((resolve) => {
    Models.UserDetails.findOne({ where: { email } }).then((user) => {
      if (user) {
        if (passwordHash.verify(password, user.password)) {
          resolve('valid');
        }
        resolve('invalid');
      }
      resolve('invalid');
    }).catch((error) => {
      resolve(error);
    });
  });
}

module.exports = findUser;
