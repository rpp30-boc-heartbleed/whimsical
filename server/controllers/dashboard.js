const { Errand } = require('../models/errand');
const { Profile } = require('../models/userProfile');
const {
  mockErrandsData,
} = require('../../client/common/dummyData/mockErrandsData');

const addNewErrand = (req, res) => {
  if (req === undefined) {
    Errand.insertMany(mockErrandsData)
      .then(() => {
        console.log('Data inserted');
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    Profile.findOne({ email: req.body.email }).then((runner) => {
      const newErrand = new Errand({
        storeName: req.body.storeName,
        storeAddress: {
          streetName: req.body.streetName,
          cityName: 'Kalamazoo',
          state: 'Michigan',
          zipCode: '99007',
        },
        runner,
        storeETA: req.body.storeETA,
        errandName: req.body.errandName,
        timeOfPost: `${new Date()}`,
        username: 'still working on username',
        userAvatar: 'still working userAvatar',
        status: 'Pending',
      });

      newErrand
        .save()
        .then((data) => {
          console.log('data added', data);
          res.status(201).end();
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ err, msg: 'sorry. data was not added' });
        });
    });
  }
};

const getErrandData = (req, res) => {
  Errand.find()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400);
    });
};

module.exports = { addNewErrand, getErrandData };
