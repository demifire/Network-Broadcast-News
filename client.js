const net = require("net");

const client = net.createConnection(6969, "34.222.10.48", () => {
//   client.write("Raymond");
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);

//   console.log(client.address());
});