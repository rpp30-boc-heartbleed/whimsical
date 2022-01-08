const { Profile } = require('../models');
const { Friend } = require('../models/friendsList');

const get = (req, res) => {
  const { email } = req.query;
  Profile.findOne({ email })
    .then((user) => {
      const { friends } = user;
      const friendsList = [];
      user.forEach((friend) => {
        friendsList.push(friend);
      })
        .then(() => {
          res.status(200).send(friendsList);
        });
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
