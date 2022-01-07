const { Errand } = require('../models/errand');

const requestedErrands = (req, res) => {
  const { errands } = req.body;
  Errand.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { requestedErrands };
