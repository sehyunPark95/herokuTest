var express = require('express');
var request = require("request");
const port = process.env.PORT;

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World222222');
})

app.listen(port, ()=> {
  console.log('App is running, server is listening on port ', port);
});