// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})


// app.post('/users', function(req, res) {
//     console.log("POST DATA", req.body);
//      var name = req.body.name;
//      var location = req.body.location;
//      var language = req.body.language;
//      var comment = req.body.comment;
//
//      res.render("result", {name: name, location: location, language:language, comment:comment});
//
// })


// tell the express app to listen on port 8000-----------------------WITH SOCKET-------SOCKET_______-------------------------
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

//------------------------------------------------------------------------------------------------------------------------------
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here
  socket.on( "button_clicked", function (data){
    console.log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket.emit( 'server_response', {response:  "sockets are the best!"});
});

socket.on( "posting_form", function (data){
    //console.log(data);
  console.log( 'posting_form response!  Reason: '  + JSON.stringify(data.reason));
  socket.emit( 'server_form_response', {response:  data});
  });

//to post on to index page
  app.post("/index", function(req, res, next) {
    socket.emit("index", req.body);
    res.send(req.body);
});

})
