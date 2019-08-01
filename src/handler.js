const fs = require("fs");

let handleHome = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("Hi");
};

let handleApi = (request, response, endpoint) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("");
};

module.exports = { handleHome, handleApi };
