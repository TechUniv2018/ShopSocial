const Path = require('path');

console.log('Build file path: ', Path.join(__dirname, '../../build'));

module.exports = {
  method: 'GET',
  path: '/{param*}',
  config: { auth: false },
  handler: {
    directory: {
      path: Path.join(__dirname, '../../build'),
      listing: false,
      index: true,
    },
  },
};
