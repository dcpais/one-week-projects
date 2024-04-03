/** Imports and HTTP Server setup */
const express = require('express');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());
const server = http.createServer(app);

/** Initialize socket server */
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

/**
 * Set up server listening on the specified port
 */
server.listen(3001, () => {
    console.log("Server Started");
    console.log(server.address())
});

/**
 * GAME STATE
 */
let p1Pos = 0;
let p2Pos = 0;
let ballPos = 0;

/**
 * Instruction set to receive from connectionss
 */
io.on("connection", (socket) => {
    console.log("Connected: " + socket.id)
    
    /** Receving update from the clients to send updates to whole lobby */
    socket.on("sendPacket", (data) => {
        console.log("Reached")
        p1Pos += 1;
        p2Pos += 1;
        ballPos += 1;
        io.emit("receivePacket", {
            p1Pos,
            p2Pos,
            ballPos
        })
    })

});

