var express = require("express");
var app = express();
var http = require("http")
var server = http.createServer(app);
var bodyParser = require("body-parser");
var io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})


io.on('connection', function(socket){
  socket.on('first', function(data){
    console.log(data.message)
    socket.emit('second', {
      message : data
    })
  })
})

server.listen(3000, function(){
  console.log(
    `
      socket IO server2 listen on port 3000
      server start
    `
  )
})
