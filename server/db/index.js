require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();

const { dashboard } = require('../controllers');

const connectDb = () => mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASS}@3.83.254.62/quick-bagel`, {
// const connectDb = () => mongoose.connect('mongodb://localhost:27017/quick-bagel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDBagel');
    // on connection, drop the data that feeds the dashboard
    mongoose.connection.db.dropCollection('dashboardCollection', (err, res) => {
      if (err) {
        console.log('error with dropping');
      } else {
        console.log('collection dropped');
        dashboard.addNewErrand();
      }
    });
  })
  .catch((err) => {
    console.log('Connection to database failed womp womp');
    process.exit(1);
  });

module.exports = connectDb;
