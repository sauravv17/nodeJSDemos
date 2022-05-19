const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running....");
});

server.listen(8081, () => {
  const { address, port } = server.address();
  console.log(`server  is listening on : http://${address}:${port}`);
});
