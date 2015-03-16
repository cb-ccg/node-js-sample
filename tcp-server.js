/*
** node.js tcp/server
*/

var http = require ("http");
var net = require ("net"); 

console.log ('Starting....v3');
var server=net.createServer (function(socket) { 

	socket.on ('connection', function(socket) { 
		console.log ('server connected...'); 
	}); 
	
	socket.on ('data', function(message) { 
		console.log ('machine message:' + message); 
		socket.write (message); 
	}); 
	
	socket.on ('end', function() {
		console.log ('socket disconnected...');
	});
	
	socket.on ('error', function(error){ 
		console.log ('error on socket message:' + error); 
	}); 
	
})

server.listen(10000, function() {
	console.log('Server bound...');
});

