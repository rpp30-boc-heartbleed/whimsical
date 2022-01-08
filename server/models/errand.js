const mongoose = require('mongoose');
const { ProfileSchema } = require('./userProfile');

const { Schema } = mongoose;

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
    requestor: ProfileSchema,
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
    runner: ProfileSchema,
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
    chat: Number,
  },
  { timestamps: true },
);

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
