const { Login } = require('../models/login');

const placeholder = (req, res) => {
  Login.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
