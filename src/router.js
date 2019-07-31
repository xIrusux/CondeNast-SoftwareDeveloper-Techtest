const { handleHome, handleApi } = require("../src/handler");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (endpoint.includes("/search")) {
      handleApi(request, response, endpoint)
  }
};

module.exports = router;
