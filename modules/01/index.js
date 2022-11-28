const http = require('node:http');

const server = new http.Server();

let i = 0;
server.on('request', (req, res) => {
  res.end(i);
  i++;
});

server.listen(3000);
