const { handleHome, handlePublic, handleApi } = require("../src/handler");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (endpoint.indexOf("public") !== -1) {
    console.log(endpoint.indexOf("public"));
    handlePublic(request, response, endpoint);
  } else if (endpoint.includes("/search")) {
    handleApi(request, response, endpoint);
  }
};

module.exports = router;
