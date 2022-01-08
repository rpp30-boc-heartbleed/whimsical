const { Chat } = require('../models');

const createChat = (req, res) => {
  const chat = new Chat({
    errandId: req.body._id,
    users: [req.body.username],
    messages: [],
  });
  chat.save()
    .then((data) => {
      console.log('data added', data);
      res.status(201).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ err, msg: 'sorry. data was not added' });
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
