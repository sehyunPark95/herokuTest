var express = require('express');
var app = express();
var router = express.Router();
const controller = require('./module');
app.set('port', (process.env.PORT || 5000));
/*app.get('/', function (req, res) {
  //res.send('벌써 열번째');
  res.status(200).json(
    {
      "success" : 'qqq'
    }
  );
})*/

app.get('/?city=보험', function (req, res) {

  res.status(200).json(
    {
      "city" : '23'
    }
  );
})

app.get('/?city=$[ad3268032f7f4e60a453ea5cba049891]', function (req, res) {

  res.status(200).json(
    {
      "city" : '24'
    }
  );
})
app.post('/?city=보험',function(req,res){
  
  console.log(req.body)
  
  res.status(200).json({
    "city": "24"
  })
});

app.post('/?city=$[ad3268032f7f4e60a453ea5cba049891]',function(req,res){
  
  console.log(req.body)
  
  res.status(200).json({
    "city": "24"
  })
});


app.post('/test',function(req,res){
  
  
  res.status(200).json({
    "message": "test22"
  })
});


app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;