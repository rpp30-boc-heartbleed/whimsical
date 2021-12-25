const { Example } = require('../models/errand');

const placeholder = (req, res) => {
  Example.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
