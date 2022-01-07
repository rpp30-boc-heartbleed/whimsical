const mongoose = require('mongoose');

const { Schema } = mongoose;

// const DashboardSchema = new Schema({
//   storeName: String,
//   storeAddress: {
//     streetName: String,
//     cityName: String,
//     state: String,
//     zipCode: Number,
//   },
//   storeETA: String,
//   errandName: String,
//   timeOfPost: String,
//   username: String,
//   userAvatar: String,
//   status: String,
// });

const errandSchema = new Schema(
  {
    errandName: { type: String, default: null },
    storeETA: { type: String, default: null }, // time for delivery
    status: {
      type: String,
      enum: ['Pending', 'Delivered'],
      default: 'Pending',
    },
    // Requester,
    requestor: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
    deliveryLocation: {
      latitude: Number,
      longitude: Number,
    },
    deliveryAddress: { type: String, default: null },
    requestorLocation: {
      latitude: Number,
      longitude: Number,
    },
    // Runner
    runner: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
    runnerLocation: {
      latitude: Number,
      longitude: Number,
    },
    stars: {
      type: Number,
      default: 0,
    },
    // Errand Places
    storeName: { type: String, default: null },
    storeAddress: {
      streetName: String,
      cityName: String,
      state: String,
      zipCode: Number,
    },
    timeOfPost: String,
    username: { type: String, default: null },
    userAvatar: { type: String, default: null },
  },
  { timestamps: true },
);

// const Dashboard = mongoose.model('Dashboard', DashboardSchema, 'dashboardCollection');
const Dashboard = mongoose.model('Dashboard', errandSchema, 'dashboardCollection');

module.exports = { Dashboard };
