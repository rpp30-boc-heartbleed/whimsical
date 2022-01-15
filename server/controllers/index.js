const register = require('./register');
const dashboard = require('./dashboard');
const userProfile = require('./userProfile');
const friendsList = require('./friendsList');
const {
  getRequestedErrands,
  requestErrand,
  getRunningErrands,
  completeErrand,
} = require('./errands');
const chat = require('./chat');
const { updateRating } = require('./stars');

module.exports = {
  register,
  dashboard,
  userProfile,
  friendsList,
  updateRating,
  getRequestedErrands,
  requestErrand,
  getRunningErrands,
  completeErrand,
  chat,
};
