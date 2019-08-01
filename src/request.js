"use strict";

const http = require("https"); // theoretically should be called https

const myRequest = (url, cb) => {
  http
    .get(url, response => {
      let allData = "";
      response.on("data", chunk => {
        allData += chunk;
      });
      response.on("end", () => {
        const body = JSON.parse(allData);
        const statusCode = response.statusCode;
        cb(null, { statusCode, body });
      });
    })
    .on("error", err => cb(err));
};

module.exports = myRequest;