const net = require("net");

const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write(client.name, client.address());
  client.on("data", data => {
    let msg = data.ToString();
    clients.forEach(socket => {
    if(client !== socket){
      socket.write(
        client.name + msg
      )
    }
  });
});

server.listen(2020, () => {
  console.log("Server listening on port 2020");
  console.log(server.address);
})