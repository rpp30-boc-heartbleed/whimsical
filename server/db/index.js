require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();
const { dashboard } = require('../controllers');
const {
  mockRequestors,
  mockRunners,
  mockErrands,
} = require('../../client/common/dummyData/mockErrandsData');
const { Profile } = require('../models/userProfile');
const { Errand } = require('../models/errand');

const connectDb = () => mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.PASS}@3.83.254.62/quick-bagel`, {
// const connectDb = () => mongoose.connect('mongodb://localhost:27017/quick-bagel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDBagel');
    // on connection, drop the data that feeds the dashboard
    try {
      console.log('Seeding data...');
      // Drop profiles collection and seed with mock data
      await mongoose.connection.db.dropCollection('profileCollection');
      const runners = await Profile.insertMany(mockRunners);
      const rexRequestor = await Profile.create(mockRequestors[0]);
      const orangeRequestor = await Profile.create(mockRequestors[1]);
      const laweezaRequestor = await Profile.create(mockRequestors[2]);

      // Seed Errands
      await mongoose.connection.db.dropCollection('errandCollection');
      const requestor = null;

      const errands = mockErrands.forEach(async (errand, i) => {
        // alternate requestors but leave 2 un-requested errands
        // if (i < 5) {
        //   // if (i % 2 === 0) {
        //   requestor = { requestor: rexRequestor };
        //   // } else {
        //   requestor = { requestor: orangeRequestor };
        //   requestor = { requestor: laweezaRequestor };
        //   // }
        // } else {
        //   requestor = {};
        // }
        await Errand.create({
          ...errand,
          // ...requestor,
          runner: runners[i],
        });
      });

      console.log('Success');
    } catch (err) {
      console.log('There was an error with db connection or seeding', err);
    }
  })
  .catch((err) => {
    console.log('Connection to database failed womp womp');
    process.exit(1);
  });

module.exports = connectDb;
