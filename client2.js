const net = require("net");

const client = net.createConnection(2877, "34.219.80.229", () => {
  client.write("Raymond");
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);

//   console.log(client.address());
});