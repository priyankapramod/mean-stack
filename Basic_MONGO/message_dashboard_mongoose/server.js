// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');




// define Schema variable
var Schema = mongoose.Schema;


// define Message Schema
var MessageSchema = new mongoose.Schema({
 msg_posted_by: {type: String, required: true },
 msg_text: {type: String, required: true},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });



// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _msg: {type: Schema.Types.ObjectId, ref: 'Message'},
 comment_by: {type: String, required: true },
 cmt_text: {type: String, required: true }
}, {timestamps: true });


// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


//Routes--- basic route -- LOAD WITH ALL MESSAGES AND THEIR COMMENTS TILL DATE
app.get('/', function (req, res){
    Message.find({}).populate('comments').exec(function(err, messages){
        if(err){
            console.log("err while loading all messages from db.");
        }
        else{
            console.log("got all messages(array of objects-messages) from db");
            res.render('index', {messages: messages});
        }
    })
    
});


//route to CREATE  a message to DB.---  post method
app.post('/messages', function (req, res){
    console.log("POSTING messages", req.body);
    var message = new Message({msg_posted_by:req.body.msg_posted_by, msg_text: req.body.msg_text});
    message.save(function(err){
        if(err){
            console.log("err while posting(CREATE) msg to db");
        }
        else{
            console.log("posted(CREATE) msg to db");
            res.redirect('/');
        }
    })

});



// route for creating one comment with for particular message
app.post('/comments/:id', function (req, res){
    console.log("******//", req.params.id);
  Message.findOne({_id: req.params.id}, function(err, message){
       //data from the form on frontend
         var comment = new Comment(req.body);
         comment._msg = message._id;
         message.comments.push(comment);
         comment.save(function(err){
                 message.save(function(err){
                       if(err) { console.log('Error'); }
                       else {
                           res.redirect('/');
                       }
                 });
         });
   });
 });



// Routes
// Root Request----get all mongooses till date from database

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
