const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  _id: Schema.Types.ObjectId,
  requestorId: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Errand requester - Should come from User Schema/Profile
  placeId: { type: Schema.Types.ObjectId, ref: 'Places', default: null }, // Errand location(s) - Should come from Map Schema
  runnerId: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Errand runner - Should come from User Schema/Profile
  errands: { type: Array, default: [] }, // Empty list if no errands
  time: { type: Date, required: true }, // new Date().toLocaleString();
  status: {
    type: String,
    enum: ['Pending', 'Picked Up', 'Delivered'],
    default: 'Pending',
  },
  deliveryLoc: { type: [Number] },
  deliveryAddr: { type: String, default: null },
  requestorLoc: { type: [Number] },
  starRating: {
    type: Number,
    default: 0,
  },
  placeName: { type: String, default: null },
  placeAddr: { type: String, default: null },
  runnerLoc: { type: [Number] },
  runnerName: { type: String, default: null },
  runnerPic: { type: String, default: null },
  // onErrand: Boolean
}, { timestamps: true }); // adds a createdAt and updatedAt field

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
