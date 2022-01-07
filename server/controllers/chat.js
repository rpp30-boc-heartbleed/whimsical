const { Chat } = require('../models');

const createChat = (errand, callback) => {
  const chat = new Chat({
    errandId: errand.id,
    users: [errand.userId],
    messages: [],
  });
  chat.save()
    .then((savedChat) => {
      callback(savedChat);
    })
    .catch((err) => {
      callback(err);
    });
};

const findChat = (chatId, userId) => {
  Chat.findByIdAndUpdate(
    chatId,
    { $push: { $user: userId } },
    { new: true, upsert: true },
  )
    .then((chat) => {
      return chat;
    })
    .catch((err) => {
      return err;
    });
};

const postMessage = (message, chatId) => {
  Chat.findByIdAndUpdate(
    chatId,
    { $push: { $message: message } },
    { new: true, upsert: true },
  )
    .then((chat) => {
      return chat;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { createChat, findChat, postMessage };
