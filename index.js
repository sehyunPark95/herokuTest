var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');
var moment = require('moment');
const fetch = require("node-fetch");
const { response } = require('express');
moment.locale('ko');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const request = require('request')
var k = ''

/////커밋테스트
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000));
app.get('/',function(req,res){
  res.sendFile(__dirname+'/log.html')
})

//////////////납입최고 메인 테스트!!!!/////////////////
app.post('/max2',function(req,res){
  var type = req.body.userInfo.userVariables.BZKNDCOD.value
  if(type == '003'){
    console.log('----통화처리결과----')
    console.log('업무코드: ',req.body.userInfo.userVariables.TASKDTLDIV.value)
    console.log('업무명: ',req.body.userInfo.userVariables.TASKDTLDIVNM.value)
    console.log('통화결과: ',req.body.userInfo.userVariables.CALLRSLT.value)
    console.log('처리결과: ',req.body.userInfo.userVariables.PROCRSLT.value)
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '004'){
    console.log('----영업일확인----')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '001'){
    console.log('----고객정보확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CUSTNM",
          "value": "홍길동",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "9510053",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '101'){
    console.log('----납입최고안내----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CNTRCNT",
          "value": "3",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS",
          "value": "56000",
          "type": "NUMBER",
          "action": "EQ",
          "valueType": "NUMBER"
        },
        {
          "name": "INSUPREMSUM",
          "value": "55000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT",
          "value": "111000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "DBDIV",
          "value": "D",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYDTM",
          "value": "2020년11월",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYDT",
          "value": "2020년11월29일",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BBKPRK",
          "value": "동양생명(200801)",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE",
          "value": "3",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BRANCHNM",
          "value": "종각지점",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRNM",
          "value": "이인자",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRHP",
          "value": "01092400783",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUNM1",
          "value": "3445568",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE1",
          "value": "2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM1",
          "value": "하나로암보험",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN1",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPREMSUM1",
          "value": "54000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS1",
          "value": "3000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT1",
          "value": "112000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUNM2",
          "value": "3445568",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE2",
          "value": "2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM2",
          "value": "하나로암보험2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN2",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPREMSUM2",
          "value": "54000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS2",
          "value": "3000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT2",
          "value": "112000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUNM3",
          "value": "3445568",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE3",
          "value": "2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM3",
          "value": "하나로암보험3",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN3",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPREMSUM3",
          "value": "54000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS3",
          "value": "3000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT3",
          "value": "112000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUNM4",
          "value": "3445568",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE4",
          "value": "2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM4",
          "value": "하나로암보험4",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN4",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPREMSUM4",
          "value": "54000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS4",
          "value": "3000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT4",
          "value": "112000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUNM5",
          "value": "3445568",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PYMNCSE5",
          "value": "2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM5",
          "value": "하나로암보험5",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTYN5",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPREMSUM5",
          "value": "54000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANINTS5",
          "value": "3000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSULOANTOT5",
          "value": "112000",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '007'){
    console.log('----알림톡발송----')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '102'){
    console.log('출금가능계좌조회')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable":[
        {
          "name": "CUSTNM",
          "value": "홍길동",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNO",
          "value": "9510051111222",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTCNT",
          "value": "3",
          "type": "NUMBER",
          "action": "EQ",
          "valueType": "NUMBER"
        },
        {
          "name": "BANKCD1",
          "value": "003",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKNM1",
          "value": "국민은행",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTPK1",
          "value": "555555555",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTNO1",
          "value": "5709930987",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKCD2",
          "value": "003",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKNM2",
          "value": "국민은행2",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTPK2",
          "value": "555555555",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTNO2",
          "value": "57099309872",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKCD3",
          "value": "003",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKNM3",
          "value": "국민은행3",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTPK3",
          "value": "555555555",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTNO3",
          "value": "5709930983",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKCD4",
          "value": "003",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKNM4",
          "value": "국민은행4",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTPK4",
          "value": "555555555",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTNO4",
          "value": "5709930987",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKCD5",
          "value": "003",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BANKNM5",
          "value": "국민은행5",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTPK5",
          "value": "555555555",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "ACNTNO5",
          "value": "5709930987",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '103'){
    console.log('----연장유예신청----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '104'){
    console.log('----연장유예승인취소----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '005'){
    console.log('핸드폰인증')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "REQUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RESUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '006'){
    console.log('----인증번호확인----')
    var authCode = req.body.userInfo.userVariables.AUTHCODE.value;
    authCode = authCode == '123456' ? 'Y': 'N';
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": authCode,
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '107'){
    console.log('유효성체크')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "TASKTLDIV",
          "value" : "RA30"
        }
      ],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }
})

app.post('/HappyCall',function(req,res){
  var type = req.body.userInfo.userVariables.BZKNDCOD.value
    
  if(type == '003'){
    console.log('----통화처리결과----')
    console.log('업무코드: ',req.body.userInfo.userVariables.TASKDTLDIV.value)
    console.log('업무명: ',req.body.userInfo.userVariables.TASKDTLDIVNM.value)
    console.log('통화결과: ',req.body.userInfo.userVariables.CALLRSLT.value)
    console.log('처리결과: ',req.body.userInfo.userVariables.PROCRSLT.value)
    console.log('적합여부: ',req.body.userInfo.userVariables.REPLYTYP.value)
    console.log('사용자발화: ',req.body.userInfo.query)
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '107'){
    console.log('유효성체크')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "TASKTLDIV",
          "value" : "RA30"
        }
      ],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "TEST",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '006'){
    console.log('----인증번호확인----')
    var authCode = req.body.userInfo.userVariables.AUTHCODE.value;
    authCode = authCode == '123456' ? 'Y': 'N';
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": authCode,
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '005'){
    console.log('핸드폰인증')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "REQUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RESUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '001'){
    console.log('----고객정보확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CUSTNM",
          "value": "홍길동",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "9510053",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '004'){
    console.log('----영업일확인----')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '105'){
    console.log('----해피콜계약정보----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "INSUNM",
          "value": '34445568',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "SHRTPRODNM",
          "value": '실속하나로암보험',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CNTRDT",
          "value": '8월12일',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PLANNERNM",
          "value": '로제',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSURER",
          "value": '박세현',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSURED",
          "value": '이지아',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYPERIOD",
          "value": '5년',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "INSUPERIOD",
          "value": '20년',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYAMT",
          "value": '56700',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRYN",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "BRANCHNM",
          "value": '종각지점',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRNM",
          "value": '박수금',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RSVRHP",
          "value": '01056668888',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PROCSTAT",
          "value": '1차보완',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '106'){
    console.log('----해피콜스크립트정보----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "QUESTCNT",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD1",
          "value": "400101",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD2",
          "value": "400105",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD3",
          "value": "400701",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD4",
          "value": "400201",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD5",
          "value": "400702",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD6",
          "value": "400704",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD7",
          "value": "100204",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD8",
          "value": "300907",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD9",
          "value": "300909",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD10",
          "value": "300918",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD11",
          "value": "301601",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD12",
          "value": "301701",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD13",
          "value": "300202",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD14",
          "value": "300201",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD15",
          "value": "300804",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD16",
          "value": "301302",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD17",
          "value": "301303",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD18",
          "value": "301301",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD19",
          "value": "301901",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD20",
          "value": "300801",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD21",
          "value": "300905",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD22",
          "value": "300910",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD23",
          "value": "300911",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD24",
          "value": "300803",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD25",
          "value": "400401",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD26",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD27",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD28",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD29",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "QUESTCD30",
          "value": "10",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }
})
/////////////////////////////////////////
//퇴직연금 인바운드
app.post('/retiring_pension_in',function(req,res){
  var type = req.body.userInfo.userVariables.BZKNDCOD.value
    
  if(type == '003'){
    console.log('----통화처리결과----')
    console.log('업무코드: ',req.body.userInfo.userVariables.TASKDTLDIV.value)
    console.log('업무명: ',req.body.userInfo.userVariables.TASKDTLDIVNM.value)
    console.log('통화결과: ',req.body.userInfo.userVariables.CALLRSLT.value)
    console.log('처리결과: ',req.body.userInfo.userVariables.PROCRSLT.value)
    console.log('사용자발화: ',req.body.userInfo.query)
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '306'){
    console.log('유효성체크')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "TASKTLDIV",
          "value" : "RA30"
        }
      ],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '006'){
    console.log('----인증번호확인----')
    var authCode = req.body.userInfo.userVariables.AUTHCODE.value;
    authCode = authCode == '123456' ? 'Y': 'N';
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": authCode,
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '005'){
    console.log('핸드폰인증')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "REQUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RESUNIQNO",
          "value": "1234",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '301'){
    console.log('----퇴직연금 고객정보확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CUSTNM",
          "value": "김생명",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNO",
          "value": "677877977",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTREGHP",
          "value": "01077884321",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "9508032",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RTRPENSIONDIV",
          "value": "DC",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTEMAIL",
          "value": "abc@naver.com",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTADDR",
          "value": "서울시 마포구 공덕동 55-44",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CNTRNUM",
          "value": "1234567",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYRCVYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RETIREMULTIYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "DCJOINYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "IRPJOINYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CALLDEVICEDIV",
          "value": "L",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '302'){
    console.log('----퇴직연금 상품 금리정보----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "PRODRATE1",
          "value": '1년 만기 상품 금리  1.22%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE2",
          "value": '2년 만기 상품 금리  2.22%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE3",
          "value": '3년 만기 상품 금리 3.22%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE4",
          "value": '5년 만기 상품 금리 5.22%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE5",
          "value": 'ACTIVE 채권혼합형 상품 1.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE6",
          "value": 'INDEX 채권혼합형 상품 2.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE7",
          "value": '배당주 채권혼합형 상품 3.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE8",
          "value": '가치주 채권혼합형 상품 4.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE9",
          "value": '국내 주식형 상품 수익률 5.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PRODRATE10",
          "value": '해외 주식형 상품 수익률 6.67%',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '303'){
    console.log('----퇴직연금 고객 연금 정보----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CNTRNM",
          "value": "홍길동",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RTRPAYREGDT",
          "value": "2021년2월28일",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RTRPAYSCHDT",
          "value": "2021년3월31일",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "TAXRTRPAYAMT",
          "value": "35644400",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RTRPAYBALAMT",
          "value": "35644400",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUMRATE",
          "value": "12.34%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '305'){
    console.log('----알림톡발송 퇴직연금----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }
})
/////////////////////////////////////////
//퇴직연금 아웃바운드
app.post('/retiring_pension_ob',function(req,res){
  var type = req.body.userInfo.userVariables.BZKNDCOD.value
    
  if(type == '003'){
    console.log('----통화처리결과----')
    console.log('업무코드: ',req.body.userInfo.userVariables.TASKDTLDIV.value)
    console.log('업무명: ',req.body.userInfo.userVariables.TASKDTLDIVNM.value)
    console.log('통화결과: ',req.body.userInfo.userVariables.CALLRSLT.value)
    console.log('처리결과: ',req.body.userInfo.userVariables.PROCRSLT.value)
    console.log('사용자발화: ',req.body.userInfo.query)
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '306'){
    console.log('유효성체크')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "TASKTLDIV",
          "value" : "RA30"
        }
      ],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '301'){
    console.log('----퇴직연금 고객정보확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "CUSTNM",
          "value": "김생명",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNO",
          "value": "677877977",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTREGHP",
          "value": "01077884321",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "9508032",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "OBLISTDIV",
          "value": "TIR",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RTRPENSIONDIV",
          "value": "DC",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTEMAIL",
          "value": "abc@naver.com",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTADDR",
          "value": "서울시 마포구 공덕동 55-44",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CNTRNUM",
          "value": "null",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PAYRCVYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "RETIREMULTIYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "DCJOINYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "IRPJOINYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CALLDEVICEDIV",
          "value": "L",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '304'){
    console.log('----퇴직연금 계약이전 확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '305'){
    console.log('----알림톡발송 퇴직연금----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "RSLT",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }
})

//////////////////////////////////////////
////////// 보험심사 테스트 ////////// 
app.post('/doc',function(req,res){
  var type = req.body.userInfo.userVariables.BZKNDCOD.value
  
  if(type == '003'){
    console.log('--- 통화처리결과 ---')
    console.log('업무코드: ', req.body.userInfo.userVariables.TASKDTLDIV.value)
    console.log('업무명: ', req.body.userInfo.userVariables.TASKDTLDIVNM.value)
    console.log('통화결과: ', req.body.userInfo.userVariables.CALLRSLT.value)
    console.log('처리결과: ', req.body.userInfo.userVariables.PROCRSLT.value)
    
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ]
    })
  }else if(type == '004'){
    console.log('----영업일확인----')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "RA30"
        }
      ],
      "userVariable" : [
        {
          "name": "HOLDTYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "HOLDTYN",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "HOLDTYN",
          "value": "N",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '002'){
    console.log('----고객정보확인----')
    res.status(200).json({
      "data":[{
        "variableName":"DUMMY",
        "value":"true"
      }],
      "userVariable": [
        {
          "name": "KEY2",
          "value": "30",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNM",
          "value": "최은빈",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "8712232",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "INSUREDNM",
          "value": "최은빈", 
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "KEY2",
          "value": "40",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNM",
          "value": "이미영",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "6405302",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "INSUREDNM",
          "value": "이미영", 
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "KEY2",
          "value": "40",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "CUSTNM",
          "value": "최은빈",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "PERSONNO",
          "value": "8712232",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "INSUREDNM",
          "value": "이", 
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '201'){
    console.log('--- 면책사유조회 ---')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "true"
        }
      ],
      "userVariable": [
        {
          "name": "GUIDECD",
          "value": "05L004M011S019",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '202'){
    console.log('--- 청구서류조회 ---')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "DUMMY",
          "value" : "true"
        }
      ],
      "userVariable": [
        {
          "name": "GUIDECD",
          "value": "05L004M011S019",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }else if(type == '009'){
    console.log('--- 유효성체크 ---')
    res.status(200).json( {
      "data": [
        {
          "variableName" : "TASKTLDIV",
          "value" : "RA30"
        }
      ],
      "userVariable": [
        {
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "RSLT",
          "value": 'Y',
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
    })
  }
})
//////////////////////////////////////////

app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;
