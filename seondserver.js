const newserver = require("http");
const fs = require("fs");

const server2 = newserver.createServer((req, res) => {
  const info = `${Date.now()}\n : ${req.url}\n New request`;
  fs.appendFile("./serverinfo.txt", info, (err, data) => {});
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.end("You are in home page");
      break;

    case "/about":
      res.end("You are in about us page");
      break;
  }
});

server2.listen(8001, () => {
  console.log("Server creeation success");
});
