const { Profile } = require('../models/userProfile');

const get = (req, res) => {
  console.log('query', req.query);
  Profile.findOne()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const post = (req, res) => {
  console.log(req.body.formerUser);
  Profile.findOneAndUpdate(req.body.formerUser, req.body.updatedUser, (err, rslt) => {
    res.sendStatus(200);
  });
};

const image = (req, res) => {
  res.send('OK');
};

module.exports = { get, post, image };
