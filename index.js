var express = require('express');
var app = express();
var router = express.Router();
const controller = require('./module');
app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
  //res.send('벌써 열번째');
  res.status(200).json(
    {
      "success" : 'qqq'
    }
  );
})

app.post('/',function(req,res){
  const plz = req.body.userInfo;
  console.log(req.body)
  console.log(plz)
  
  res.status(200).json({
    "message": plz
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