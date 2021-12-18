const model = require('../models/friendsList');

const get = (req, res) => {
  model.Friend.find()
    .then((friends) => {
      res.json({ friends });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'you have no friends' });
    });
};

const search = (req, res) => {
  const { searchStr } = req.body || '';
  model.Friend.find({ name: searchStr })
    .then((friend) => {
      res.json({ friend });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'not found ' });
    });
};

module.exports = { get, search };
