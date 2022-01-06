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

const postMessage = (req, res) => {
  const {
    _id,
    createdAt,
    text,
    user,
  } = req;
  const message = {
    _id,
    createdAt,
    text,
    user,
  };
  Chat.findByIdAndUpdate(
    _id,
    { $push: { $message: message } },
    { new: true, upsert: true },
  )
    .then((chat) => {
      res.status(200).send(chat);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'controller error' });
    });
};

export { createChat, postMessage };
