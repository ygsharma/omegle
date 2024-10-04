import {Socket } from "socket.io";
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';


const app = express();
const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});