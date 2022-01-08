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
  Chat.findOneAndUpdate(
    { errandId },
    { $push: { $user: userId } }, // FIX --- this could cause users to be added multiple times
    { new: true, upsert: true },
  )
    .then((chat) => {
      return chat;
    })
    .catch((err) => {
      return err;
    });
};

const postMessage = (message, errandId) => {
  Chat.findOneAndUpdate(
    { errandId },
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
