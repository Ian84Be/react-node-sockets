
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));