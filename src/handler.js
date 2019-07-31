const fs = require("fs");

let handleHome = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("Hi");
};

module.exports = handleHome;
