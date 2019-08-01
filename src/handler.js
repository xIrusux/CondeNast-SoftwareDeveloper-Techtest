const fs = require("fs");
const path = require("path")


let handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html")

  console.log('this is the file path', filePath)

  fs.readFile(filePath, (err, file) => {

    if(err){
      response.writeHead(500, {"Content-Type": "text/html"})
      reponse.end("<h1>Sorry something went wrong!</h1>")
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  })
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

  const filePath = path.join(__dirname, "..", endpoint)
  fs.readFile(filePath, (err, file) => {
    if(err){
      response.writeHead(500, {"Content-Type": "text/html"})
      reponse.end("<h1>Sorry something went wrong!</h1>")
    } else {
      response.writeHead(200, { "Content-Type": extensions[fileType] });
      response.end(file);
    }
  })
};

let handleApi = (request, response, endpoint) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("");
};

module.exports = { handleHome, handlePublic, handleApi };
