var models = require('../models');

var Account = models.Account;

var myApplication = function(req, res) {
    res.render('application');
};

var logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};

module.exports.App = myApplication;

/*var _ = require('underscore');
var models = require('../models');
var socketio = require('socket.io');
var io = socketio.listen(18000);

var users = {};
var onJoined = function(socket) {
    socket.on("join", function(data) {
    
        var joinMsg = {
            name: 'server', 
            msg: 'There are ' + Object.keys(users).length + ' users online'
        };

        socket.emit('msg', joinMsg);
        
        socket.name = data.name;
        
        users[socket.name] = socket.name;
        
        socket.join('room1');
        
        socket.broadcast.to('room1').emit('msg', { name: 'server', msg: data.name + " has joined the room."} );
        
        console.log(data.name + ' joined');
        
        socket.emit('msg', {name: 'server', msg: 'You joined the room'});
    });
};

var onMsg = function(socket) {

    socket.on('msg', function(data) {
        io.sockets.in('room1').emit('msg', {name: socket.name, msg: data.msg});
    });
};

var onDisconnect = function(socket) {
    socket.on("disconnect", function(data) {
        socket.broadcast.to('room1').emit('msg', {name: 'server', msg: socket.name + " has left the room."});
        socket.leave('room1');
        delete users[socket.name];
    });
};

console.log('starting up');

io.sockets.on("connection", function(socket) {

    console.log('started');
    
    onJoined(socket); 
    onMsg(socket); 
    onDisconnect(socket);
    
});

module.exports.Application = Application;*/