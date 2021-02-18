var express = require('express');
var app = express();
var router = express.Router();
const controller = require('./module');
app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
  res.send('Hello World2222252312321!!');
})

router.post('/test',controller.postTestAPI)


app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});