const mongoose = require('mongoose');

const { Schema } = mongoose;

const egDashboardSchema = new Schema({
  placeholder: String,
});

const Dashboard = mongoose.model('Dashboard', egDashboardSchema, 'dashboardCollection');

module.exports = { Dashboard };
