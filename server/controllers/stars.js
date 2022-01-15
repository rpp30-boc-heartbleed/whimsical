const { Profile } = require('../models/userProfile');
const { Errand } = require('../models/errand');

async function updateRating(req, res) {
  try {
    const { stars, name } = req.body;
    /**
     * newUserData =
     * {
     *  name: "irene",
     *  stars: 3,
     *  ....
     * }
     */
    const newUserData = await Profile.findOneAndUpdate({ name }, { $inc: { stars: 1 } }).exec();

    const errands = await Errand.find();

    /**
     *  userErrands[0] or any element in userErrands
     *  userErrands[0].runner =
     {
        name: "irene",
        stars: 2,
        ....
      }
     */
    const userErrands = errands.filter((errand) => errand.runner.email === newUserData.email);

    userErrands.forEach((errand) => {
      // eslint-disable-next-line no-param-reassign
      errand.runner = newUserData;
      errand.save();
    });

    return res.status(201).send(newUserData);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = { updateRating };
