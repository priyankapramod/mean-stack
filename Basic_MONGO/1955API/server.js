// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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




// define onenine2five Schema
var Onenine2fiveSchema = new mongoose.Schema({
 name: {type: String, required: true },
}, {timestamps: true });


// set our models by passing them their respective Schemas
mongoose.model('Onenine2five', Onenine2fiveSchema);

// store our models in variables
var Onenine2five = mongoose.model('Onenine2five');


//Routes--- basic route -- get all members born in 1955 which are in database
app.get('/', function (req, res){
    Onenine2five.find({}, function(err, members){
        if(err){
            console.log("err while loading all members born in 1955 from db.");
        }
        else{
            console.log("got all members born in 1955(array of objects-messages) from db");
            res.json({members: members});
        }
    })
});


//add this name from url to db
app.get('/new/:name', function (req, res){
    console.log("ADDING new member to db", req.body);
    var onenine2five = new Onenine2five({name:req.params.name});
    onenine2five.save(function(err){
        if(err){
            console.log("err while adding new member born in 1955 to db");
        }
        else{
            console.log("added new member born in 1955 to db");
            res.redirect('/');
        }
    })

});



// route for retrieving member with requested name
app.get('/:name', function (req, res){
  Onenine2five.findOne({name: req.params.name }, function(err, member){
      if(err) {
        console.log('something went wrong while retrieving requested member(1955) from db');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully retrived member born in 1955 from mongodb!');
        res.json({member:member});
      }


   });
 });


 app.get('/remove/:name', function(req, res) {
     Onenine2five.findOneAndRemove({name:req.params.name }, function(err) {
         if(err) {
           console.log('something went wrong while deleting member from db');
         } else { // else console.log that we did well and then redirect to the root route
           console.log('successfully deleted requested member of 1955 from mongodb!');
           res.redirect("/");
         }

   })

 })


// Routes
// Root Request----get all mongooses till date from database

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
