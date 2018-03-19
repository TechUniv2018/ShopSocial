const Hapi = require('hapi');
const routes = require('./routes');
const Jwt = require('hapi-auth-jwt2');
const secret = require('./routes/admin/helper/secretKey');
const socketIO = require('socket.io');

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
  host: 'localhost',
  labels: ['app'],
});
const app = server.select('app');
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

  const io = require('socket.io')(app.listener);

  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('connectTogether', (reqobj) => {
      console.log('Together request: ', reqobj);
      io.sockets.emit('relayConnectTogether', reqobj);
    });
    socket.on('connectTogetherResponse', (reqobj) => {
      console.log('Together Request Response: ', reqobj);
      io.sockets.emit('relayConnectTogetherResponse', reqobj);
    });
    socket.on('mypingrequest', (reqobj) => {
      console.log('Together Buddy Online check: ', reqobj);
      io.sockets.emit('responsePingRequest', reqobj);
    });
    socket.on('disconnectTogetherNoti', (reqobj) => {
      console.log('Disconnect together notification', reqobj);
      io.sockets.emit('relaydisconnectTogetherNoti', reqobj);
    });
    socket.on('urlTogetherchange', (reqobj) => {
      console.log('Together change together notification', reqobj);
      if (reqobj.sEmail !== '' && reqobj.rEmail !== '') {
        io.sockets.emit('urlTogetherChangeRelay', reqobj);
        console.log('urlchange socket relayed');
      }
    });
    socket.on('scrollTogetherchange', (reqobj) => {
      console.log('Together scroll change together notification', reqobj);
      if (reqobj.sEmail !== '' && reqobj.rEmail !== '') {
        io.sockets.emit('scrollTogetherChangeRelay', reqobj);
        console.log('scrollchange socket relayed');
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
