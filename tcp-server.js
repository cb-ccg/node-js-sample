/*
** node.js tcp/server
*/

var http = require ("http");
var net = require ("net"); 

console.log ('Starting....2');
var server=net.createServer (function(socket) { 

	socket.on ('connection', function(socket) { 
		console.log ('server connected...'); 
		socket.end ();
	}); 
	
	socket.on ('data', function(message) { 
		console.log ('socket message:' + message); 
		socket.write ('You wrote:' + message); 
	}); 
	
	socket.on ('end', function() {
		console.log ('server disconnected...');
	});
	
	socket.on ('error', function(error){ 
		console.log ('error on socket message:' + error); 
	}); 
	
})

server.listen(10000, function() {
	console.log('Server bound...');
});

