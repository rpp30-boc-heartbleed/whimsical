const { Profile } = require('../models/userProfile');

async function updateRating(req, res) {
  try {
    const { stars, name } = req.body;
    const response = await Profile.findOneAndUpdate({ name }, { $inc: { stars: 1 } }).exec();
    console.log('response', response, 'stars', stars);
    return res.status(201).send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = { updateRating };
