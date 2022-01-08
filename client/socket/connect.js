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

const subscribeToChat = (chatId, userId, callback) => {
  socket.emit('joinChat', chatId, userId);

  socket.on('priorMessages', (messages) => {
    return callback(messages);
  });
};

const sendMessage = (message, chatId) => {
  socket.emit('newMessage', message, chatId);
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
