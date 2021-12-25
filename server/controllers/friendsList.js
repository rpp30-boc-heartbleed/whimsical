const { Friend } = require('../models/friendsList');

const get = (req, res) => {
  Friend.find()
    .then((friends) => {
      res.json({ message: 'you have 1 friend' });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'you have no friends' });
    });
};

const search = (req, res) => {
  const { searchStr } = req.body || '';
  Friend.find({ name: searchStr })
    .then((friend) => {
      res.json({ friend });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'not found ' });
    });
};

module.exports = { get, search };
