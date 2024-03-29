const express = require('express');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
    console.log("Connected: " + socket.id)

    /**
     * Instruction set to receive from connections
     */
    
});

server.listen(3001, () => {
    console.log("Server Started");
    console.log(server.address())
});