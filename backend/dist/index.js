"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const server = http_1.default.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', (socket) => {
    console.log('a user connected');
});
app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
