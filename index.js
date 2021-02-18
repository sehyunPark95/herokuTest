var express = require('express');
var request = require("request");
const port = process.env.PORT;
//서버 슬립안하게
(function () {  
    setInterval(function () {
      var options = {
        method: 'GET',
        url:
          'https://bitpump.herokuapp.com/'
      };
  
      request(options, function (error, response, body) {
        if (error) {
          res.send(error)
        } else {
          res.send(body);
        }
      });
    }, 600000);
  })
///////////////////////

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World222222');
})

app.listen(port, ()=> {
  console.log('App is running, server is listening on port ', app.get('port'));
});