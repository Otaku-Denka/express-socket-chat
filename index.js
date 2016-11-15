var express = require('express');
// var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.use(bodyParser.urlencoded({ extended: false }))


// app.use(bodyParser.json())


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('a User connected')

  socket.on('chat', function(msg){
    io.emit('chat', msg);
    console.log('message '+ msg)
  })

  socket.on('disconnect',function(){
    console.log('user disconnected')
  })
})

http.listen(3000, function(){
  console.log('Server is up on Port: 3000')
})