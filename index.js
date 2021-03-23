var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');
/*app.use(bodyParser.urlencoded({

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
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "test",
          "value": "테스트값변경완료"
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

/////////보험심사팀(조사/서면)////////////

app.post('/보험심사1',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "name",
          "value": "김생명"
        },{
          "variableName": "BirthDay",
          "value": "880101"
        }
      ],
      "userVariable": [
        {
          "name": "custNm",
          "value": "김생명",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BirthDay",
          "value": "880101",
          "type": "NUMBER",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})

//////////////////////////////////////////////

app.post('/456',function(req,res){
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
