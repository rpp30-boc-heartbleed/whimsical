/* eslint-disable no-param-reassign */
const { Errand } = require('../models/errand');
const { Profile } = require('../models/userProfile');

async function requestErrand(req, res) {
  const { email, errandId } = req.body;

  try {
    const requestor = await Profile.findOne({ email });

    console.log('requestor.name', requestor.name);
    const errand = await Errand.findOne({ _id: errandId });
    errand.requestor = requestor;
    await errand.save();

    return res.status(201).send(errand);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function getRequestedErrands(req, res) {
  const { email } = req.query;

  try {
    const errands = await Errand.find({ 'requestor.email': email });

    return res.status(201).send(errands);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function getRunningErrands(req, res) {
  const { email } = req.query;

  try {
    const errands = await Errand.find({ 'requestor.email': email });
    return res.status(201).send(errands);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function completeErrand(req, res) {
  const { email, errandId } = req.body;

  try {
    const errand = await Errand.findOne({ _id: errandId });
    errand.status = 'Delivered';
    errand.save();

    const runner = await Profile.findOne({ email });
    runner.errandsCompleted += 1;
    runner.save();

    return res.status(201).send({ errand, runner });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = {
  getRequestedErrands, getRunningErrands, requestErrand, completeErrand,
};
