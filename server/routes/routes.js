const express = require('express');
const multer = require('multer');
const path = require('path');

multer({
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const storage = multer.diskStorage({
  destination: './public/uploads/images',
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

const {
  register,
  dashboard,
  userProfile,
  friendsList,
  map,
  errandTracker,
} = require('../controllers');

const router = express.Router();

// REGISTRATION
router.post('/register', register.addNewUser);

// FEED
router.post('/newErrand', dashboard.addNewErrand);
router.get('/getErrandData', dashboard.getErrandData);

// USER PROFILE
router.get('/userProfile/get', userProfile.get);
router.post('/userProfile/edit', userProfile.post);
router.post('/userProfile/image', upload.any('photoData'), userProfile.image);

// FRIENDS
router.get('/friends/get', friendsList.get);
router.get('/friends/search', friendsList.search);

// MAP

// ERRAND TRACKER

module.exports = router;
