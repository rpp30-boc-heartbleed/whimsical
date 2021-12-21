const model = require('../models/login');

const placeholder = (req, res) => {
  model.Login.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
