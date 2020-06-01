var express = require('express');
var connect = require('connect');
var bro = require('browserify');

var app = express();
 var server = app.listen(5001, function() {
     console.log("listening to port 5001");
 });

//static files
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', function(socket){
    console.log(socket);
});

app.post('/api', (req,res) => {

    console.log("Message Recieved:" + JSON.stringify(req.body));

});

