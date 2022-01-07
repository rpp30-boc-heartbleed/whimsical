const register = require('./register');
const dashboard = require('./dashboard');
const userProfile = require('./userProfile');
const friendsList = require('./friendsList');
const Map = require('./map');
const {
  getRequestedErrands,
  requestErrand,
  getRunningErrands,
  completeErrand,
} = require('./errands');
const { updateRating } = require('./stars');

module.exports = {
  register,
  dashboard,
  userProfile,
  friendsList,
  updateRating,
  Map,
  getRequestedErrands,
  requestErrand,
  getRunningErrands,
  completeErrand,
};
