const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');


    socket.emit('newMessage', {
        from: 'Rami',
        text: 'Hey, Fuck off',
        createdAt: 123
    });


    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });


    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});



server.listen(port, () => {
    console.log(`app is up on port ${port}`);
})

