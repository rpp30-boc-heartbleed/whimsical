const { Chat } = require('../models');

const createChat = (req, res) => {
  console.log(req.body, 'createChat');
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

const findChat = (errandId, userId) => {
  const newChat = new Chat({
    errandId,
    users: [userId],
    messages: [],
  });
  return newChat.save();
};

const postMessage = (message, errandId) => {
  return Chat.findOneAndUpdate(
    { errandId },
    { $push: { $message: message } },
    { new: true, upsert: true },
  );
};

module.exports = { createChat, findChat, postMessage };
