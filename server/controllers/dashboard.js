const { Dashboard } = require('../models/dashboard');

const addNewErrand = (req, res) => {
  const newErrand = new Dashboard({
    storeName: req.body.storeName,
    storeAddress: {
      streetName: req.body.streetName,
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: '99007',
    },
    storeETA: req.body.storeETA,
    errandName: req.body.errandName,
    timeOfPost: '1:00 pm',
    username: 'still working on username',
    userAvatar: 'still working userAvatar',
    status: 'Pending',
  });

  newErrand.save()
    .then((data) => {
      console.log('data added', data);
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ err, msg: 'sorry. data was not added' });
    });
};

module.exports = { addNewErrand };
