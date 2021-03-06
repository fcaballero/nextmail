const http = require('http');

const handleRequest = require('./handleRequest');

const startServer = async () => {
  process.on('unhandledRejection', (reason) => {
    console.log('Unhandled Rejection at:', reason.stack || reason);
  });
  const server = http.createServer(handleRequest);

  await new Promise((resolve, reject) => {
    server.listen(6100, (err) => {
      if (err) {
        reject(err);
      }

      console.log('server is listening on 6100');
      resolve();
    });
  });
};

module.exports = startServer;
