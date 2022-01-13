const { Profile } = require('../models');
const { Friend } = require('../models/friendsList');

const getFriends = (req, res) => {
  const { friends } = req.body;
  console.log('hello', friends);
  Profile.find({
    email: friends[1],
  })
    .then((friendsList) => {
      res.status(200).json({ friendsList });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'error getting friends' });
    });
};

const getAll = (req, res) => {
  Profile.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'there are no people' });
    });
};

const add = (req, res) => {
  const { userEmail, friendEmail } = req.body;
  console.log(req.body, 'body');
  Profile.findOneAndUpdate(
    { email: userEmail },
    { $push: { friends: friendEmail } },
    { new: true, upsert: true },
  )
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: 'failed to add friend' });
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

module.exports = {
  getFriends, getAll, add, search,
};
