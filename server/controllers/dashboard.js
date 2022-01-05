const { Dashboard } = require('../models/dashboard');

const addNewErrand = (req, res) => {
  Dashboard.find()
    .then(() => {
      res.json({ message: 'this is a addNewErrand' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addNewErrand };
