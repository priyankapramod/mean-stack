// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');
var MongooseSchema = new mongoose.Schema({
    mongs_name: String,
    mongs_info: String
},{timestamps: true });
mongoose.model('Mongoose', MongooseSchema); // We are setting this Schema in our Models as 'Mongoose'
var Mongoose = mongoose.model('Mongoose') // We are retrieving this Schema from our Models, named 'Mongoose'



// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');



// Routes
// Root Request----get all mongooses till date from database
app.get('/', function(req, res) {
    // This is where we will retrieve the quotes from the database and include them in the view page we will be rendering.
    Mongoose.find({}, function(err, mongooses) {
        if(err) {
          console.log('something went wrong while retrieving');
        //   res.render('result', {error: err});
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully retrived all  mongooses from mongodb!');
          console.log(mongooses);
          res.render('all_mongooses', {mongooses:mongooses});
        }

  })
})
//---------------------------------------------------------------------------------------------------------------------------
//display the form to enter new mongoose and its info
app.get('/mongooses/new', function(req, res) {
    res.render("index");
})

//---------------------------------------------------------------------------------------------------------------------------
//post the new mongoose info to database
app.post('/mongooses', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new Mongoose with the name and its info corresponding to those from req.body
  var mongoose = new Mongoose({mongs_name: req.body.mongoose_name, mongs_info: req.body.mongs_info});
  // Try to save that new mongoose to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  mongoose.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added the new mongoose!');
      res.render("index");
    }
  })
})
//---------------------------------------------------------------------------------------------------------------------------
//get particular mongoose(with _id) from database.
app.get('/mongooses/:id', function(req, res) {
    Mongoose.findOne({_id:req.params.id }, function(err, mongoose) {
        if(err) {
          console.log('something went wrong while retrieving');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully retrived all  mongooses from mongodb!');
          res.render('mongoose_id', {mongoose:mongoose});
        }

  })
})

//delete the above requested  mongoose(with _id) from database.
app.post('/mongooses/destroy/:id', function(req, res) {
    Mongoose.findOneAndRemove({_id:req.params.id}, function(err) {
        if(err) {
          console.log('something went wrong while deleting');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully deleted requested mongoose from mongodb!');
          res.redirect("/");
        }

  })

})


//go to index page after requesting particular mongoose with id
app.post('/index', function(req, res) {
  res.redirect("/mongooses/new")

})
//---------------------------------------------------------------------------------------------------------------------------
//edit or update changes for particular mongoose(with _id) from database.
//GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.

app.get('/mongooses/edit/:id', function(req, res) {
    Mongoose.findOne({_id:req.params.id }, function(err, mongoose) {
        if(err) {
          console.log('something went wrong while retrieving');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully retrived all  mongooses from mongodb!');
          res.render('get_edit_mongoose', {mongoose:mongoose});
        }

  })
})

//---------------------------------------------------------------------------------------------------------------------------
//post update changes for particular mongoose(with _id) from database.
//POST '/mongooses/:id' Should show a form to edit an existing mongoose.
app.post('/mongooses_update/:id', function(req, res) {
    console.log("****//", req.params.id)
  console.log("POST DATA", req.body);
  //var newdata = req.body.mongs_info;
  Mongoose.findOneAndUpdate({_id:req.params.id}, req.body, function(err, mongoose) {
      if(err) {
        console.log('no record is found with requested id');
      } else {
        console.log('successfully retrived and updated record with requested id from mongodb!');
         res.render('index');
      }

})

})
//---------------------------------------------------------------------------------------------------------------------------

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
