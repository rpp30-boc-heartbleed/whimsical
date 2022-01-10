import io from 'socket.io-client';
import { HOST_URL } from '@env';

let socket;

const initiateSocketConnection = () => {
  socket = io(HOST_URL);
  console.log('Connecting socket...');
};

const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

const subscribeToChat = (errandId, userId, callback) => {
  socket.emit('joinChat', errandId, userId);

  socket.on('priorMessages', (messages) => {
    return callback(messages);
  });
};

const sendMessage = (message, errandId) => {
  socket.emit('newMessage', message, errandId);
};

const receiveNewMessage = (callback) => {
  socket.on('incomingMessage', (message) => {
    return callback(message);
  });
};

export {
  initiateSocketConnection,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
  receiveNewMessage,
};
