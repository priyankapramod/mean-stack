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
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
 created_at: {type: Date}
},{timestamps: true });
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'



// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.

    res.render("index");
})

app.post('/quotes', function(req, res) {
    // This is where we will retrieve the quotes from the database and include them in the view page we will be rendering.
    Quote.find({}, function(err, quotes) {
        if(err) {
          console.log('something went wrong while retrieving');
        //   res.render('result', {error: err});
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully retrived all  users from mongodb!');
          console.log(quotes);
          res.render('result', {quotes:quotes});
        }

  })

})
// Add Quote Request
app.post('/add_quote', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new Quote with the name and age corresponding to those from req.body
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  // Try to save that new quote to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  quote.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      res.redirect('/');
    }
  })
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
