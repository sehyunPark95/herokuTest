var express = require('express');
var app = express();
var router = express.Router();
const controller = require('./module');
app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
  res.send('벌써 열번째');
})

router.post('/post_test',function(req,res){
  console.log(req.body)
  const user_message = req.body.message;
  res.status(200).json({
    "message":user_message
  })
});
router.get('/te', function(req, res) {
  res.status(200).json(
    {
      "success" : true
    }
  );
});


app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});

module.exports = router;