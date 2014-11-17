var models = require('../models');

var Account = models.Account;

var app = function(req, res) {
    res.render('application');
};

/*var mongoose = require('mongoose');
var _ = require('underscore');
var io = require('socket.io-client');
var models = require('../models');

var Account = models.Account;

var socket = io.connect('http://localhost:18000');

var stdin = process.stdin;

var user = Account.username;

console.log('connecting');

socket.on("connect", function() {
    console.log("connected");
    
    socket.emit('join', { name: user});
    
    socket.on('msg', function(data) {
        console.log(data.name + ": " + data.msg);
    });
    
    stdin.on('data', function (data) {
        socket.emit('msg', { msg: data, name: user});
    });
});*/