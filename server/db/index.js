require('dotenv').config();
const mongoose = require('mongoose');

const {
  USERNAME,
  PASSWORD,
  SERVER,
} = process.env;

// const connectDb = () => mongoose.connect('mongodb://localhost:27017/quick-bagel', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const connectDb = () => mongoose.connect('mongodb://USERNAME:PASSWORD@SERVER/quick-bagel', {
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
