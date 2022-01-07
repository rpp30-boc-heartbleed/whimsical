const mongoose = require('mongoose');

const { Schema } = mongoose;

const DashboardSchema = new Schema({
  storeName: String,
  storeAddress: {
    streetName: String,
    cityName: String,
    state: String,
    zipCode: Number,
  },
  storeETA: String,
  errandName: String,
  timeOfPost: String,
  username: String,
  userAvatar: String,
  status: String,
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema, 'dashboardCollection');

module.exports = { Dashboard };
