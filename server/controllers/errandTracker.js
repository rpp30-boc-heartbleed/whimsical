const model = require('../models/errandTracker');

const placeholder = (req, res) => {
  model.Example.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
