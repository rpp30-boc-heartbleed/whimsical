require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = () => mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASS}@3.83.254.62/quick-bagel`, {
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
