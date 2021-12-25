const { NavBar } = require('../models/navBar');

const placeholder = (req, res) => {
  NavBar.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
