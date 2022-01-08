const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const router = require('./routes/routes');
const db = require('./db');
require('dotenv').config();

// CONTROLLERS
// const { createChat } = require('./controllers/chat');
const { findChat, postMessage } = require('./controllers/chat');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const mobileSockets = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(router);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('joinChat', (errandId, userId) => {
    if (mobileSockets[errandId]) {
      mobileSockets[errandId].push(socket.id);
    } else {
      mobileSockets[errandId] = [socket.id];
    }
    findChat(errandId, userId)
      .then((chat) => {
        socket.emit('priorMessages', chat.messages);
      });
  });

  socket.on('newMessage', (message, errandId) => {
    postMessage(message, errandId)
      .then((chat) => {
        const userSocketIds = mobileSockets[errandId];
        userSocketIds.forEach((userSocketId) => {
          socket.to(userSocketId).emit('incomingMessage', message);
        });
      });
  });
});

db()
  .then(() => {
    server.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  });
