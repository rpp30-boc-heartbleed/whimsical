const model = require('../models/map');

const placeholder = (req, res) => {
  model.Map.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { placeholder };
