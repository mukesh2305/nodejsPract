const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  // res.write("welcome to home page");
  // res.end();
  if (req.url === "/about") {
    res.end("here is about page");
  }

  res.end(`
  <h1>Oops!</h1>
  <p>we cant seems to find the page that you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
