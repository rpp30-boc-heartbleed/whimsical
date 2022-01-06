const { Profile } = require('../models/userProfile');

const addNewUser = (req, res) => {
  console.log('hit controller', req.body);
  const {
    name,
    streetAddress,
    city,
    state,
    zipCode,
    imageURL,
    email,
  } = req.body;
  const location = `${streetAddress}, ${city}, ${state}, ${zipCode}`;
  const newProfile = new Profile({
    name,
    email,
    picture: imageURL,
    location,
  });
  newProfile.save()
    .then((data) => {
      console.log('user registered', data);
      res.status(201).send({ data, msg: 'user registered' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ err, msg: 'sorry. we experienced an error.' });
    });
};

module.exports = { addNewUser };
