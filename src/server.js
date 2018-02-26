const Hapi = require('hapi');
const routes = require('./routes');
const Jwt = require('hapi-auth-jwt2');
const secret = require('./routes/admin/helper/secretKey');
const validate = require('./routes/admin/helper/findAdmin');

const server = new Hapi.Server();
let portNo;

if (process.env.NODE_ENV) {
  portNo = process.env.NODE_ENV.toString().toLowerCase() === 'development' ? 3000 : 9000;
} else {
  portNo = process.env.PORT || 8080;
}

server.connection({
  port: portNo,
  host: 'localhost',
});

server.register(Jwt, (err) => {
  if (err) {
    console.log(err);
  }
  server.auth.strategy(
    'jwt', 'jwt',
    {
      key: secret,
      validateFunc: validate,
      verifyOptions: {
        algorithms: ['HS256'],
      },
    },
  );
  server.auth.default('jwt');
  server.route(routes);
  if (!(module.parent)) {
    server.start((error) => {
      if (error) {
        throw (error);
      }
      console.log(`Server started at ${server.info.uri}`);
    });
  }
});

module.exports = server;
