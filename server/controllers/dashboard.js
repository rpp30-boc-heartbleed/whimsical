const model = require('../models/dashboard');

const placeholder = (req, res) => {
  model.Dashboard.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
