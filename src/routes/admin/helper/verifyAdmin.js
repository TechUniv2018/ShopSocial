const Models = require('../../../../models');
const passwordHash = require('password-hash');

function findAdmin(email, password) {
  return new Promise((resolve) => {
    Models.AdminDetails.findOne({ where: { email } }).then((admin) => {
      if (admin) {
        if (passwordHash.verify(password, admin.password)) {
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

module.exports = findAdmin;
