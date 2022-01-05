require('dotenv').config();
const mongoose = require('mongoose');

// const connectDb = () => mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASS}@3.83.254.62/quick-bagel`, {
const connectDb = () => mongoose.connect('mongodb://localhost:27017/quick-bagel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDBagel');
  })
  .catch((err) => {
    console.log('Connection to database failed womp womp');
    process.exit(1);
  });

module.exports = connectDb;
