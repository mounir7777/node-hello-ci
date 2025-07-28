const http = require('http');

const PORT = 3100;

const server = http.createServer((req, res) => {
  res.end('🚀 Hello from Docker and CI/CD!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
