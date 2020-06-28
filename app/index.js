const http = require('http');

const server = http.createServer((req, res) => {

  const method = req.method;

  if (method == "POST") {
    handlePost(req, res);
  } else {
    handlePut(req, res);
  }

});

const handlePost = (req, res) => {
  const input = [];

  req.on("data", (chunk) => {
    input.push(chunk);
  });

  req.on("end", () => {
    const number = Number(input.join(""));
    res.write( String(number * 5));
    res.end();
  });
}

const handlePut = (req, res) => {
  const input = [];

  req.on("data", (chunk) => {
    input.push(chunk);
  });

  req.on("end", () => {
    const number = Number(input.join(""));
    res.write( String(number / 5));
    res.end();
  });
}

server.listen(8080);