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

// NAVBAR

// FEED

// USER PROFILE

// FRIENDS
router.get('/friends/get', friendsList.get);
router.get('/friends/search', friendsList.search);

// MAP

// ERRAND TRACKER

module.exports = router;
