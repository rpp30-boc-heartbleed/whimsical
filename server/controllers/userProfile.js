const { Profile } = require('../models/userProfile');

const placeholder = (req, res) => {
  Profile.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
