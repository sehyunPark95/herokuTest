var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({

  extended: false
}));
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  const test=  req.query.city;w
  console.log(req.query)
  res.status(200).json(
    {
      "city" : test//////

    }
  );
})


app.post('/',function(req,res){
  const test2 = req.body.userInfo.test;
  console.log(test2)
  console.log(req.body)
  console.log(req.body.userInfo)
  res.status(200).json({
    "message": test2
  })
});


app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;