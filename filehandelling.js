// synchronous method or blocking method
const fs = require("fs");

fs.writeFileSync("./test.txt", "contect of file goes here");

fs.appendFileSync("./test.txt", " this is appended message");

const read = fs.readFileSync("./test.txt", "utf-8");
console.log(read);

// Asynchronus method or non bloclking method

fs.writeFile("./asynctest.txt", " Contect of async goes here", (err) => {});

fs.appendFile("./asynctest.txt", " This is appeneded message", (err) => {});

fs.readFile("./asynctest.txt", "utf-8", (err, result) => {
  if (err) 
    console.log("Error");
  else
    console.log(result);

});
