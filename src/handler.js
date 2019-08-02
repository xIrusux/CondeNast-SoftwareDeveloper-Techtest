const fs = require("fs");
const path = require("path");
const requestModule = require("./request");
<<<<<<< HEAD
const env = require("dotenv").config();
=======
require("dotenv").config();
>>>>>>> fe8a97ff5f922849e4200b19f5451d1527ef333a

let handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry something went wrong!</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
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

  const filePath = path.join(__dirname, "..", endpoint);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Not found!</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensions[fileType] });
      response.end(file);
    }
  });
};

let handleApi = (request, response, endpoint) => {
  const newsKey = process.env.DB_APIKEYNEWS;
  const countryCode = endpoint.split("?")[1];
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${newsKey}`;
  requestModule(url, (err, data) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Not found!</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(data.articles));
      response.end();
    }
  });
};

module.exports = { handleHome, handlePublic, handleApi };
