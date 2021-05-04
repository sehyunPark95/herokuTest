var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');
const {Log} = require('./logs');
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
/////////////통화처리결과//////////////
app.post('/Rslt',function(req,res){
  console.log(req.body.userInfo.userVariables)
  res.status(200).json({
    "data":[{
      "variableName":"custNm",
      "value":"test"
    }]
  })
})
/////////////////////////////////////
/////////핸드폰인증/////////
app.post('/hp',function(req,res){
  console.log(req.body.userInfo.userVariables)
  res.status(200).json({
    "data":[{
      "variableName":"custNm",
      "value":"제니"
    }],
    "userVariable":[
      {
      "name": "custHp",
      "value": "01092400783",
      "type": "TEXT",
      "action": "EQ",
      "valueType": "TEXT"
    },
    {
      "name": "authRslt",
      "value": "1234",
      "type": "TEXT",
      "action": "EQ",
      "valueType": "TEXT"
    },
    {
      "name": "authConfirm",
      "value": "Y",
      "type": "TEXT",
      "action": "EQ",
      "valueType": "TEXT"
    }
  ]
  })
})
//////////////
app.post('/',function(req,res){
  const test = JSON.parse(req.body.userInfo.userVariables.cicRequest.value).session.callInfo.callee;
  var name = "홍길동"
  name = test == "01092400783" ? "박세현" : name
  var ran = Math.floor(Math.random() * 2);
  var codeList = ['04L002M004S006','04L001M002S003'];
  res.status(200).json( {
      "data": [
        {
          "variableName":"custNm",
          "value": name
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
        },
        {
          "name": "code",
          "value": codeList[ran],
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },{
          "name": "variable1",
          "value": "위, 십이지장",
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
          "variableName": "custNm",
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
          "name": "custNm",
          "value": "김생명",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "doc_list",
          "value": "입원확인서",
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

/////////퇴직연금 고객확인정보////////////

app.post('/retireCustConfirm',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "custNm",
          "value": "김생명"
        },{
          "variableName": "callDeviceDiv",
          "value": "U"
        },{
          "variableName": "rtrPensionDiv",
          "value": ""
        },{
          "variableName": "cntrNum",
          "value": ""
        },{
          "variableName": "payRcvYn",
          "value": "Y"
        },{
          "variableName": "retireMultiYn",
          "value": "Y"
        },{
          "variableName": "dcJoinYn",
          "value": "Y"
        },{
          "variableName": "irpJoinYn",
          "value": "Y"
        },{
          "variableName": "custHp",
          "value": "01012345678"
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
          "name": "callDeviceDiv",
          "value": "U",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "rtrPensionDiv",
          "value": "",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "cntrNum",
          "value": "",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "payRcvYn",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "retireMultiYn",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "dcJoinYn",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "irpJoinYn",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "custHp",
          "value": "01012345678",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})

/////////고객별 퇴직연금 정보////////////

app.post('/custRtrInfo',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "custNm",
          "value": "김생명"
        },{
          "variableName": "rtrPensionDiv",
          "value": "DC"
        },{
          "variableName": "rtrPayRegDt",
          "value": "2021년2월28일"
        },{
          "variableName": "rtrPaySchDt",
          "value": "2021년3월31일"
        },{
          "variableName": "taxRtrPayAmt",
          "value": "35,644,400"
        },{
          "variableName": "rtrPayBalAmt",
          "value": "35,644,400"
        },{
          "variableName": "cumRate",
          "value": "12.34%"
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
          "name": "rtrPensionDiv",
          "value": "DC",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "rtrPayRegDt",
          "value": "2021년2월28일",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "rtrPaySchDt",
          "value": "2021년3월31일",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "taxRtrPayAmt",
          "value": "35,644,400",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "rtrPayBalAmt",
          "value": "35,644,400",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "cumRate",
          "value": "12.34%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})

/////////퇴직연금 상품 금리정보////////////

app.post('/custRtrpensionDoc',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "prodRate1",
          "value": "1.22%"
        },{
          "variableName": "prodRate2",
          "value": "2.22%"
        },{
          "variableName": "prodRate3",
          "value": "3.22%"
        },{
          "variableName": "prodRate4",
          "value": "5.22%"
        },{
          "variableName": "prodRate5",
          "value": "1.67%"
        },{
          "variableName": "prodRate6",
          "value": "2.67%"
        },{
          "variableName": "prodRate7",
          "value": "3.67%"
        },{
          "variableName": "prodRate8",
          "value": "4.67%"
        },{
          "variableName": "prodRate9",
          "value": "5.67%"
        },{
          "variableName": "prodRate10",
          "value": "6.67%"
        }
      ],
      "userVariable": [
        {
          "name": "prodRate1",
          "value": "1.22%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate2",
          "value": "2.22%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate3",
          "value": "3.22%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate4",
          "value": "5.22%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate5",
          "value": "1.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate6",
          "value": "2.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate7",
          "value": "3.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate8",
          "value": "4.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate9",
          "value": "5.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "prodRate10",
          "value": "6.67%",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})

/////////퇴직연금 처리상태////////////

app.post('/custRtrSend',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "procYn",
          "value": "Y"
        }
      ],
      "userVariable": [
        {
          "name": "procYn",
          "value": "Y",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})
///////////////고객정보확인///////////////////
app.post('/custConfirm',function(req,res){
  res.status(200).json( {
    /*"message": test2*/
      "data": [
        {
          "variableName": "custNm",
          "value": "박세현"
        }
      ],
      "userVariable": [
        {
          "name": "custNm",
          "value": "박세현",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "birthYmd",
          "value": "951005",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        },
        {
          "name": "personNo",
          "value": "951005",
          "type": "TEXT",
          "action": "EQ",
          "valueType": "TEXT"
        }
      ]
  })
})
////////////////출금가능여부//////////////////////
app.post('/maxYn',function(req,res){
  console.log('출금가능여부')
  res.status(200).json({
    "data":[{
      "variableName":"echo",
      "value":"false"
    }],
    "userVariable": [
      {
        "name": "extDlyYn",
        "value": "Y",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      }
    ]
    
  })
})
///////////////////연장유예취소//////////////////////////
app.post('/cancel',function(req,res){
  console.log('연장유예승인취소')
  res.status(200).json({
    "data":[{
      "variableName":"echo",
      "value":"false"
    }],
    "userVariable": [
      {
        "name": "lowExtendCancYn",
        "value": "Y",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      }
    ]
  })
})
///////////////////계좌조회//////////////////////////
app.post('/search',function(req,res){
  console.log('계좌조회')
  res.status(200).json({
    "data":[{
      "variableName":"echo",
      "value":"false"
    }],"userVariable": [
      {
        "name": "custNm",
        "value": "박세현",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "custNo",
        "value": "677877977",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntCnt",
        "value": "3",
        "type": "NUMBER",
        "action": "EQ",
        "valueType": "NUMBER"
      },
      {
        "name": "bankCd1",
        "value": "001",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankCd2",
        "value": "002",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankCd3",
        "value": "003",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankCd4",
        "value": "004",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankCd5",
        "value": "005",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankNm1",
        "value": "국민은행",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankNm2",
        "value": "우리은행",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankNm3",
        "value": "카카오뱅크",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankNm4",
        "value": "신한은행",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "bankNm5",
        "value": "농협은행",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntNo1",
        "value": "1709930987",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntNo2",
        "value": "2709930987",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntNo3",
        "value": "3709930987",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntNo4",
        "value": "4709930987",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "acntNo5",
        "value": "5709930987",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      }
      
    ]
  })
})
///////////////////납입최고//////////////////////////
app.post('/max',function(req,res){
    const test2 = req.body.userInfo;
    const tt = req.body;
    console.log(req.body.actionMethod.methods)
    console.log('------------------------')
    console.log(test2)
    //console.log(test2)
    res.status(200).json( {
        "data": [
          {
            "variableName":"custNm",
            "value":"홍길동"
          },
          {
            "variableName":"echo",
            "value":"TRUE"
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
            "name": "shrtProdNm",
            "value": "실속 하나로 암보험",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "payDtm",
            "value": "2021년 3월",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "payDt",
            "value": "2021년 3월 31일",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          }
          ,
          {
            "name": "cntrCnt",
            "value": "3",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dbDiv",
            "value": "R",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "insuLoanYn",
            "value": "Y",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "interestAmt",
            "value": "50000",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "unpaidAmt",
            "value": "1000000",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          }
          ,
          {
            "name": "birthYmd",
            "value": "951005",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntCnt",
            "value": 3,
            "type": "NUMBER",
            "action": "EQ",
            "valueType": "NUMBER"
          },
          {
            "name": "acntNm1",
            "value": "국민은행",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNm2",
            "value": "신한은행",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNm3",
            "value": "SC제일은행",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNm4",
            "value": "카카오뱅크",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNm5",
            "value": "우리은행",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNo1",
            "value": "57099309871",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNo2",
            "value": "57099309872",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNo3",
            "value": "57099309873",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNo4",
            "value": "57099309874",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "acntNo5",
            "value": "57099309875",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          }
        ]
    })
  })
//////////////////납입최고2//////////////////
app.post('/max2',function(req,res){
  console.log('납입최고안내2')
  res.status(200).json({
    "data":[{
      "variableName":"echo",
      "value":"false"
    }],
    "userVariable": [
      {
        "name": "cntrCnt",
        "value": "2",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "insuNm",
        "value": "34445568",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "shrtProdNm",
        "value": "실속하나로암보험",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "insuLoanYn",
        "value": "Y",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "insuLoanSum",
        "value": "560000",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "insuLoanInts",
        "value": "350000",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "insuLoanTot",
        "value": "910000",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "dbDiv",
        "value": "D",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "payDtm",
        "value": "2021년4월",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      },
      {
        "name": "payDt",
        "value": "2021년11월29일",
        "type": "TEXT",
        "action": "EQ",
        "valueType": "TEXT"
      }
    ]
  })
})
//////////////////통화처리결과///////////////////////
app.post('/callResult',function(req,res){
  console.log('-----------통화처리결과---------')
  console.log(req.body.userInfo.userVariables.taskDtlDivNm.value)
  console.log(req.body.userInfo.userVariables.taskDtlDiv.value)
  console.log(req.body.userInfo.query)
  console.log('----------------')
  
    res.status(200).json( {
      "data": [
        {
          "variableName":"rslt",
          "value":"Y"
        }
      ]
    })
  })
////////////////////////////////////////
////////////////해피해피////////////////////

app.post('/happy',function(req,res){

    let nextCode = "";
    var now = req.body.userInfo.userVariables.now.value;
    var answer = req.body.userInfo.userVariables.answer.value;
    console.log(req.body)
    console.log('---------------------')
    console.log(req.body.userInfo)

    res.status(200).json( {
      /*"message": test2*/
        "data": [
          {
            "variableName": "custNm",
            "value": "박세현"
          }
        ],
        "userVariable": [
          {
            "name": "shrtProdNm",
            "value": "실속 하나로 암보험",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "cntrDt",
            "value": "8월 12일",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "plannerNm",
            "value": "아이유",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "insurer",
            "value": "홍길동",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "insured",
            "value": "홍길순",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "payPeriod",
            "value": "5년",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "insuPeriod",
            "value": "20년",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "payAmt",
            "value": "56,700",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "birthYmd",
            "value": "951005",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "custNm",
            "value": "박세현",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue1",
            "value": "400201",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          }
          ,
          {
            "name": "dialogue2",
            "value": "100101",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue3",
            "value": "100201",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue4",
            "value": "200802",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue5",
            "value": "200702",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue6",
            "value": "200902",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue7",
            "value": "400301",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue8",
            "value": "300801",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue9",
            "value": "300902",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          },
          {
            "name": "dialogue10",
            "value": "300202",
            "type": "TEXT",
            "action": "EQ",
            "valueType": "TEXT"
          }
        ]
    })
  })

//////////////////////////////////////

app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;
