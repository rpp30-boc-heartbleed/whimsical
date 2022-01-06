const mongoose = require('mongoose');

const { Schema } = mongoose;

const RejectErrandSchema = new Schema({
  runnerId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  errandId: { type: mongoose.Schema.Types.ObjectId, ref: 'Errand', default: null },
}, {
  timestamps: true,
});

const Reject = mongoose.model('Reject', RejectErrandSchema, 'rejectCollection');

module.exports = { Reject };
