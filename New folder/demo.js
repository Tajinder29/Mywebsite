const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("./homepage.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.end(data);
        }
      });
    } else if (req.url == "/home.js") {
      fs.readFile("./home.js", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/js" });
          res.end(data);
        }
      });
    } else if (req.url == "/aboutpage") {
      fs.readFile("./aboutpage.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    }
  });