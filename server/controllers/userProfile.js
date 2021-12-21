const model = require('../models/userProfile');

const placeholder = (req, res) => {
  model.Profile.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
