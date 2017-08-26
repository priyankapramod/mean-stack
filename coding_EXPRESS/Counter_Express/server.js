

// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var session = require('express-session');
var path = require("path");
// create the express app
var app = express();
// more new code:
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'codingdojorocks'}));  // string for encryption
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
var counter = 0;
app.get('/', function(req, res) {
    counter = counter + 1;
    req.session.counter = counter;
    res.render("index", {counter});
})


// post route for adding a user
app.post('/ninjas1', function(req, res) {
    console.log("POST DATA", req.body);
    counter = req.session.counter;
    counter = counter + 2;
    req.session.counter = counter;
    res.render("index", {counter});
})

app.post('/ninjas2', function(req, res) {
    console.log("POST DATA", req.body);
    counter = req.session.counter;
    counter = 1;
    req.session.counter = counter;
    res.render("index", {counter});
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
