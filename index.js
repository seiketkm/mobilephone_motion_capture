var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('deviceorientation', (msg) => {
        fs.appendFile("./data/deviceorientation", JSON.stringify(msg) + "\n", (err) => {
            if (err) throw err;
            console.log(`deviceorientation: ${msg.alpha} ${msg.beta} ${msg.gamma}`);
        });          
    });
    socket.on('acceleration', (msg) => {
        fs.appendFile("./data/acceleration", JSON.stringify(msg) + "\n", (err) => {
            if (err) throw err;
            console.log(`acceleration: ${msg.x} ${msg.y} ${msg.z}`);
        });          
    });
    socket.on('accelerationIncludingGravity', (msg) => {
        fs.appendFile("./data/accelerationIncludingGravity", JSON.stringify(msg) + "\n", (err) => {
            if (err) throw err;
            console.log(`accelerationIncludingGravity: ${msg.x} ${msg.y} ${msg.z}`);
        });          
    });    
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
