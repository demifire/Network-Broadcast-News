const net = require("net");

const client = net.createConnection(6969, "10.0.1.187", () => {
//   client.write("Raymond");
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);

//   console.log(client.address());
});