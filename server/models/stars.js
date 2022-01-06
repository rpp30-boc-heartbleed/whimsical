const mongoose = require('mongoose');

const { Schema } = mongoose;

const StarsSchema = new Schema({
  errandRunnerId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  errandId: { type: mongoose.Schema.Types.ObjectId, ref: 'Errands', default: null },
  requestorId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  starRating: { type: Number, default: 0 },
});

const Stars = mongoose.model('Stars', StarsSchema, 'starsCollection');

module.exports = { Stars };
