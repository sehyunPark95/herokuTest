// [LOAD PACKAGES]
var express = require('express');
var app  = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var logs = require('./logs')
const router = require('./routes')(app,logs);
// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 5000;

// [CONFIGURE ROUTER]

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
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});

//CONNECT TO MONGGODB SERVER

////// 저장
app.post('/test', function(req, res){
    
    var book = new Book();
    
    book.title = req.body.title;
    book.author = req.body.author;
    book.published_date = new Date(req.body.published_date);

    book.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});

    });
});
///////// FIND

app.get('/test3/:author',function(req,res){
  Book.findOne({author:req.params.author},function(err,books){
    console.log(books)
    if(err) return res.status(500).json({error: err});
    if(!books) return res.status(404).json({error:'book not found'});
    res.json(books)
  })
})

///////UPDATE

app.put('/test3/:book_id',function(req,res){
  Book.update({_id:req.params.book_id},function(err,output){
    if(err) res.status(500).json({error:'database failure'});
    console.log(output)
    if(!output.n) return res.status(404).json({error:'book not found'});
    res.json({message:'book updated'});
  })
})

//////DELETE

app.delete('/test3/:book_id',function(req,res){
  Book.remove({_id:req.params.book_id},function(err,output){
    if(err) res.status(500).json({error:'database failure'});
    res.status(204).end('qq');
  })
})

/////moment().format('YYYY/MM/DD')

