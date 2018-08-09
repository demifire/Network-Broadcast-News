const net = require("net");

const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write(client.name, client.address());
  client.on("data", data => {
    console.log(data);
  });
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
});