const Hapi = require('hapi');
const routes = require('./routes');
const Jwt = require('hapi-auth-jwt2');
const secret = require('./routes/admin/helper/secretKey');
const socketIO = require('socket.io');

const validate = () => {};
const server = new Hapi.Server();

// io.on('connection', (socket) => {
//   console.log('User connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
//   socket.on('connectTogether', (reqobj) => {
//     // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
//     // we make use of the socket.emit method again with the argument given to use from the callback function above
//     console.log('Color Changed to: ', reqobj);
//     // io.sockets.emit('change color', color);
//   });
// });

// const io = require('socket.io')(server.listener);

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
      // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Together request: ', reqobj);
      io.sockets.emit('relayConnectTogether', reqobj);
    });
    socket.on('connectTogetherResponse', (reqobj) => {
      // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Together Request Response: ', reqobj);
      io.sockets.emit('relayConnectTogetherResponse', reqobj);
    });
    socket.on('mypingrequest', (reqobj) => {
      // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Together Buddy Online check: ', reqobj);
      io.sockets.emit('responsePingRequest', reqobj);
    });
    socket.on('disconnectTogetherNoti', (reqobj) => {
      // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Disconnect together notification', reqobj);
      io.sockets.emit('relaydisconnectTogetherNoti', reqobj);
    });


    // Do all the socket stuff here.
  });
  // io.on('connection', (socket) => {
  //   console.log('User connected');
  //   socket.emit('Oh hii!');

  //   socket.on('burp', () => {
  //     socket.emit('Excuse you!');
  //   });
  // });
  if (!(module.parent)) {
    server.start((error) => {
      if (error) {
        throw (error);
      }
      console.log(`Server started at ${server.info.uri}`);
    });
  }
});
// const io = socketIO(server.listen);

// io.on('connection', (socket) => {
//   console.log('User connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

module.exports = server;
