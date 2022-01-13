const { Profile } = require('../models');
const { Friend } = require('../models/friendsList');

const get = (req, res) => {
  const { email } = req.query;
  if (email) {
    Profile.findOne({ email })
      .then((user) => {
        const { friends } = user;
        const friendsList = [];
        friends.forEach((id) => {
          Profile.findOne({ _id: id })
            .then((friend) => {
              friendsList.push(friend);
            })
            .catch((err) => {
              console.log(err);
              res.json({ message: 'error finding each friend' });
            });
        });
        res.status(200).json({ friendsList });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: 'error getting friends' });
      });
  } else {
    Profile.find()
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: 'there are no people' });
      });
  }
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
