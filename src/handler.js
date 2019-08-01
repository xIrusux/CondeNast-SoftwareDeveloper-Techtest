const fs = require("fs");

let handleHome = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("Hi");
};

let handlePublic = (request, response, endpoint) => {
  const fileType = endpoint.split(".")[1];
  const extensions = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png"
  };

  response.writeHead(200, { "Content-Type": extensions[fileType] });
  response.end();
};

let handleApi = (request, response, endpoint) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("");
};

module.exports = { handleHome, handlePublic, handleApi };
