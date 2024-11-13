const http = require("http");

const server = http.createServer((req, res) => {
    
  console.log("New request reseved Sir\n");
  
  res.end("Hello there, welcome to rimal server\n");
});

server.listen(8000, () => {
  console.log("Server creation successfull\n");
});
