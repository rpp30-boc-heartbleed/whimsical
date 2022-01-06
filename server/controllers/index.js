const register = require('./register');
const dashboard = require('./dashboard');
const userProfile = require('./userProfile');
const friendsList = require('./friendsList');
const map = require('./map');
const errandTracker = require('./errandTracker');
const { updateRating } = require('./stars');

module.exports = {
  register,
  dashboard,
  userProfile,
  friendsList,
  updateRating,
  map,
  errandTracker,
};
