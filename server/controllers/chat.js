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
  return Chat.findOneAndUpdate(
    { errandId },
    { $push: { users: userId } },
    { new: true, upsert: true },
  );
};

const postMessage = (message, errandId) => {
  return Chat.findOneAndUpdate(
    { errandId },
    { $push: { messages: { $each: [message], $position: 0 } } },
    { new: true, upsert: true },
  );
};

module.exports = { createChat, findChat, postMessage };
