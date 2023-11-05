const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();
const app = express();
const router = require('../routes/Router');
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECURITY));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(router);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

io.on('connection', (socket) => {
    console.log('A User Connected');
    socket.on('disconnected', () => {
        console.log('A user disconnected');
    })
    socket.on('charMessage', (message) => {
        console.log(message);
        io.emit('chartmessage', message);
    })
})


server.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


