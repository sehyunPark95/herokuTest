var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
var Logs = require('./logs')
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
  //////////////////////////
  var logs = new Logs();
  logs.data = test2;

  logs.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      //res.json({result: 1});

  });
///////////////////////
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

app.post('/cek',function(req,res){
  const cek = req.body;
  console.log(cek)
  res.status(200).json({
    "qq":"Qq"
  })
})

/////////////////////////////////////
const uri = "mongodb+srv://sehyun:tpgus1@cluster0.lvteo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
  
      console.log("MongoDB Connected...");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };
connectDB();
///////////////////////////////////////
app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;
