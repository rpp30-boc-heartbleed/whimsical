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
  updateRating,
  getRequestedErrands,
  requestErrand,
  getRunningErrands,
  completeErrand,
} = require('../controllers');

const router = express.Router();

// REGISTRATION
router.post('/register', register.addNewUser);

// FEED
router.post('/newErrand', dashboard.addNewErrand); // create a new errand to run
router.get('/getErrandData', dashboard.getErrandData); // see all errands in community

// USER PROFILE
router.get('/userProfile/get', userProfile.get);
router.post('/userProfile/edit', userProfile.post);
router.post('/userProfile/image', upload.any('photoData'), userProfile.image);

// FRIENDS
router.get('/friends/get', friendsList.get);
router.get('/friends/search', friendsList.search);

// RATING
router.put('/userProfile/stars', updateRating);

// ERRANDS
router.post('/errands/request', requestErrand); // get list of requested errands
router.get('/errands/requests', getRequestedErrands);
router.get('/errands/tasks', getRunningErrands); // get list of errands that the user running
router.post('/errands/complete', completeErrand);
module.exports = router;
