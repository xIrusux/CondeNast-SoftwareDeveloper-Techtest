const http = require('http');
const router = require('./router')

const port = process.env.PORT || 3000;

const app = (req, res) => {
  router(req, res)
}

http.createServer(app).listen(port, () => {
  console.log(`The server is running at port: ${port}`)
})
