//servidor para el chat en phonegap
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  
  socket.emit('Welcome', "Bienvenido");
  console.log("user connect");
  
  socket.on('enviar', function(data){
	console.log("menssage"+data)
    //io.emit("recibe", data);
	io.sockets.emit("recibe", data);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});
