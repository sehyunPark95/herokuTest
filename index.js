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
  console.log(test2)
  console.log(req.body)
  res.status(200).json( {
      "data": [
        {
          "variableName":"custNm",
          "value":"홍길동"
        },
        {
          "variableName": "reason",
          "value": "입원기간이 3일 이하로 확인됩니다.약관상 입원 보험금은 최초 입원일로부터 4일 이상 계속 입원하였을때 3일 초과 1일당 입원 보험금이 발생합니다.따라서 청구하신 보험금은 3일 이하 입원에 해당되어 금번 청구하신 보험금은 해당무 처리 되오니 이점 깊은 양해 바랍니다."
        }
      ],
      "userVariable": [
        {
          "name": "custNm",
          "value": "홍길동",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BirthDay",
          "value": "951005",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})

/////////보험심사팀(조사/서면)////////////

app.post('/test',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "cusNm",
          "value": "김생명"
        },{
          "variableName": "doc_list",
          "value": "보험금청구"
        },{
          "variableName": "same_status",
          "value": "N"
        }
      ],
      "userVariable": [
        {
          "name": "cusNm",
          "value": "김생명",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "doc_list",
          "value": "보험금청구",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "same_status",
          "value": "N",
          "type": "TEXT",
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
