/* eslint-disable no-param-reassign */
const { Errand } = require('../models/errand');
const { Profile } = require('../models/userProfile');

// Errang requests being done
const requestedErrands = async (req, res) => {
  const { user } = req.params;
  const userProfile = await Profile.find({ name: user });
  console.log(userProfile);

  await Errand.find()
    .populate('requestor')
    .exec((err, errands) => {
      // Now client side filter un-matched results
      errands.forEach((errand) => {
        console.log(errand.requestor);
      });
    });

  res.send('TODO');
};

// WorksnapsTimeEntry.find().populate({
//   "path": "student",
//   "match": { "status": "student" }
// }).exec(function(err,entries) {
//  // Now client side filter un-matched results
//  entries = entries.filter(function(entry) {
//      return entry.student != null;
//  });
//  // Anything not populated by the query condition is now removed
// });

const runningErrands = (req, res) => {
  Errand.find()
    .then(() => {
      res.json({ message: 'this is a placeholder' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { requestedErrands };
