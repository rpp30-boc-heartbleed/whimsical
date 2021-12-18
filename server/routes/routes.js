const express = require('express');

const {
  login,
  navBar,
  dashboard,
  userProfile,
  friendsList,
  map,
  errandTracker,
} = require('../controllers');

const router = express.Router();

// LOGIN/REGISTRATION

// FEED

// USER PROFILE

// FRIENDS
router.get('/getFriends', friendsList.get);
router.get('/searchFriends', friendsList.search);
// MAP

// ERRAND TRACKER

module.exports = router;
