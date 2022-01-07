/* eslint-disable no-param-reassign */
const { Errand } = require('../models/errand');

async function requestedErrands(req, res) {
  try {
    console.log('?', req.body);
    const response = await Errand.find().where({}).exec();
    return res.status(201).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function runningErrands(req, res) {
  try {
    console.log('?', req.body);
    const response = await Errand.find().where({}).exec();
    return res.status(201).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
}

// const { user } = req.params; // user name
// const {errandname } = req.params;
// const userProfile = await Profile.find({ name: user });

// await Errand.find()
//   .populate('requested errands')
//   .exec((err, errands) => {
//     return res.status(200).send(errands);
//   });

// Now client side filter un-matched results
// errands.forEach((errand) => {
//   console.log(errand.requestor);
// });
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

module.exports = { requestedErrands, runningErrands };
