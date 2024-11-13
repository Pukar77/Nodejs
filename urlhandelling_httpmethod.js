//inorder to parse url, we need to install an package from npmjs.com
//the package is npm i url
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    const date = `${Date.now()}`;
    const myurl = url.parse(req.url, true);  //writing this true helps to parse in more datail like serach, name, hence it is very important
    console.log(myurl);

    fs.appendFile("./request.txt", date, (err, data) => {
      switch (myurl.pathname) {
        case "/":
            if(req.method==="GET"){
          res.write("Homepage");
          res.write(`You searched ${myurl.query.search}`);
          res.end();
            }
            break;
        case "/about":
          res.write("ABout us page");
          res.write(`You searched ${myurl.query.search}`);
          res.end();
      }
    });
  })
  .listen(8000);
