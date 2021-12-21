const model = require('../models/navBar');

const placeholder = (req, res) => {
  model.NavBar.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
