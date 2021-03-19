var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
/*app.use(bodyParser.urlencoded({

  extended: false
}));*/
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {

  console.log(req.query)
  res.status(200).json({
    "city":"yes"
  })
})


app.post('/',function(req,res){
  const test2 = req.body.userInfo;
  console.log(test2)
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "test",
          "value": "테스트"
        },{
          "variableName": "BirthDay",
          "value": "Birth"
        }
      ],
      "userVariable": [
        {
          "name": "test",
          "value": "success",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "jsonTest",
          "value": {"test":"success"},
          "type": "JSON",
          "action": "EQ",
          "valueType": "JSON"
        }
      ]
  })
})

app.post('/cek',function(req,res){
  const cek = req.body;
  console.log(cek)
  res.status(200).json({
    "qq":"Qq"
  })
})



app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;