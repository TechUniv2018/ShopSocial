const Hapi = require('hapi');
const routes = require('./routes');
const Redis = require('redis');
const Jwt = require('hapi-auth-jwt2');
const secret = require('./routes/admin/helper/secretKey');
const IO = require('socket.io');
const Inert = require('inert');


const validate = () => {};
const server = new Hapi.Server();


let portNo;

if (process.env.NODE_ENV) {
  portNo = process.env.NODE_ENV.toString().toLowerCase() === 'development' ? 8080 : 9000;
} else {
  portNo = process.env.PORT || 8080;
}

server.connection({
  port: portNo,
  host: '0.0.0.0',
  labels: ['app'],
  routes: {
    cors: true,
  },
});
const app = server.select('app');
const redisClient = Redis.createClient();

// {
//   host: '192.168.1.7',
//   port: '9090',
// } For doocker
server.register(Inert);
server.register(Jwt, () => {
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
  server.route(routes(redisClient));

  const io = IO(app.listener);

  io.on('connection', (socket) => {
    socket.on('connectTogether', (reqobj) => {
      io.sockets.emit('relayConnectTogether', reqobj);
    });
    socket.on('connectTogetherResponse', (reqobj) => {
      io.sockets.emit('relayConnectTogetherResponse', reqobj);
    });
    socket.on('mypingrequest', (reqobj) => {
      io.sockets.emit('responsePingRequest', reqobj);
    });
    socket.on('disconnectTogetherNoti', (reqobj) => {
      io.sockets.emit('relaydisconnectTogetherNoti', reqobj);
    });
    socket.on('urlTogetherchange', (reqobj) => {
      if (reqobj.sEmail !== '' && reqobj.rEmail !== '') {
        io.sockets.emit('urlTogetherChangeRelay', reqobj);
      }
    });
    socket.on('scrollTogetherchange', (reqobj) => {
      if (reqobj.sEmail !== '' && reqobj.rEmail !== '') {
        io.sockets.emit('scrollTogetherChangeRelay', reqobj);
      }
    });
  });

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
