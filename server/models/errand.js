const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  requestorId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  placeId: { type: Schema.Types.ObjectId, ref: 'Places', default: null },
  runnerId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  errands: { type: Array, default: [] }, // Empty list if no errands
  time: { type: Date, required: true }, // new Date().toLocaleString();
  eta: { type: String, default: null },
  status: {
    type: String,
    enum: ['Pending', 'Delivered'],
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
}, { timestamps: true });

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
