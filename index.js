
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: 'party on, wayne'})
});

const server = http.createServer(app);
const io = socketIo(server);

let interval;

io.on('connection', (socket) => {
    console.log('socket CONNECTION socket.id', socket.id);
    if (interval) clearInterval(interval);
    interval = setInterval(() => getDataAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('socket DISCONNECT')
    });
});

const getDataAndEmit = (socket) => {
    const response = new Date();
    socket.emit('FromAPI', response);
};

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));