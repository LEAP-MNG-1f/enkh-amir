// import express from "express";

// const app = express();
// const port = 3535;

// app.listen(port, () => {
//   console.log("server ajillaa");
// });

var http = require("http");

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end("server ajillaa");
    console.log("server ajillaa");
  })
  .listen(8800);
