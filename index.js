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
        const data = msg.uid + "\t" + msg.body + "\n";
        fs.appendFile("./data/deviceorientation.tsv", data, (err) => {
            if (err) throw err;
            console.log("deviceorientation: ", msg.body);
        });          
    });
    socket.on('acceleration', (msg) => {
        const data = msg.uid + "\t" + msg.body + "\n";
        fs.appendFile("./data/acceleration.tsv", data, (err) => {
            if (err) throw err;
            console.log("acceleration: ", msg.body);
        });          
    });
    socket.on('accelerationIncludingGravity', (msg) => {
        const data = msg.uid + "\t" + msg.body + "\n";
        fs.appendFile("./data/accelerationIncludingGravity.tsv", data, (err) => {
            if (err) throw err;
            console.log("accelerationIncludingGravity: ", msg.body);
        });          
    });    
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
