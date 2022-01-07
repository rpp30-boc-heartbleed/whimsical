const { Places } = require('./places');

const placeholder = (req, res) => {
  Map.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { Places };
