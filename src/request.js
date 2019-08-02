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
        if (response.statusCode !== 200) {
          cb(new Error('status code:' + response.statusCode))
        }
        else {
          const body = JSON.parse(allData);
          cb(null, {statusCode: response.statusCode, body});
        }
      });
    })
    .on("error", err => cb(err));
};

module.exports = myRequest;
